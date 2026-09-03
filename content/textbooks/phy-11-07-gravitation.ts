/**
 * Chapter 07 · Gravitation. Physics, Class 11.
 *
 * Restructured from pages 448 to 536 of the Drona Class 11 Physics Master
 * Reference (Chapter 7: Newton's Law of Gravitation, Gravitational Field
 * Intensity, Acceleration due to Gravity, Gravitational Potential and Energy,
 * Kepler's Laws and Satellites, The Gravitational Constant and Two-Body
 * Systems, plus a Round 2 Addendum) into the block system in
 * design_handoff_textbooks/CONTENT_SPEC.md and lib/textbooks.ts, matching the
 * voice and density of content/textbooks/phy-11-02-motion-straight-line.ts.
 *
 * SIX TOPICS, NOT FIVE. The printed Contents on pages 448 to 449 names six
 * Parts and the body delivers all six, each with the same eight-section
 * template. They map 1:1 onto the six topics below; nothing was merged or
 * split. (The extraction shows only one "Sub-topic" marker in the range
 * because this chapter's headings read "Part 1 -- ..." rather than
 * "Sub-topic 01: ...", not because the headings were ASCII-shifted; see
 * SOURCE DAMAGE.) The Round 2 Addendum (pages 520 to 536: A shell/sphere
 * potentials and self-energy, B vis-viva, C non-uniform density, D arcs and
 * chord tunnels) is not a topic, per the brief. Every line drawn from it is
 * confined to a `protip`, a `mistakes` item, a `proc` step or the hardest
 * `ex`/`mcq` in the group it extends: A into Topic 04's potential material,
 * B into Topic 05's elliptical-orbit material, C into Topic 03's depth
 * material and Topic 02's interior-field material, D into Topic 02's ring
 * material and Topic 03's tunnel material. No `formula`, `defgrid` or `deriv`
 * block below is sourced from the addendum.
 *
 * CUT. 89 source pages against a 155-block ceiling is roughly 25 blocks for
 * every 15 printed pages, so selection was the job. Three rules did the
 * cutting. (1) Every Section 2 "Key Formulas" table and every Section 8
 * "Cheat Sheet Box" is kept in full, because those are the load-bearing
 * recall surface: they became the six `defgrid` blocks, the twelve `formula`
 * blocks (two per topic) and the six `snapshot` blocks. (2) Every Section 3
 * derivation is kept, but compressed: the source runs twenty separate
 * derivations across the six parts and they were consolidated into eleven
 * `deriv` blocks of three to five steps each rather than twenty pages of
 * prose, with the reasoning moved into the per-step `why`. (3) Sections 4 to 6 were
 * sampled rather than transcribed: the source offers 24 worked examples, 30
 * practice items and 24 MCQs; this chapter carries 24 `ex` (one per source
 * example, at the source's own four difficulty tags), 30 practice items and
 * 24 `mcq`, but every one is re-authored to fit a 306px card, and the long
 * printed solutions were cut to the three or four lines that actually decide
 * the answer. What was dropped outright: the Master Formula Sheet on pages
 * 518 to 519 (a verbatim repeat of the six cheat sheets, so it would have
 * been six duplicated snapshots), the Addendum's own practice sets, and the
 * Section 1 material on black holes, the Roche limit and the history of the
 * Moon test, which are lovely and not examinable. Density lands at 25.8
 * blocks per topic against the pilot physics chapter's 23.4, which is where a
 * six-topic chapter of this weight should sit.
 *
 * ERRATA REVIEWED (source pages 977 to 981, read in full). The errata covers
 * Chapters 1, 2, 4, 6, 8, 9 and 11. NO ENTRY TOUCHES CHAPTER 7. Nothing in
 * this chapter's range is corrected, contradicted or flagged there.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and
 * MCQ key in all six parts and all four addenda was recomputed independently.
 * Two defects survived that check; both are in prose attached to a correct
 * answer, and neither changes a key.
 *
 *   1. Part 4, Crack the MCQ Q3 (page 493). The question gives V = −5.0 × 10⁶
 *      J/kg and asks for the work done in bringing a 3.0 kg mass from
 *      infinity. The key, (B) −1.5 × 10⁷ J, is right under the standard
 *      convention W = mV. The printed explanation then says "Work done by the
 *      gravitational field = U = mV = −1.5 × 10⁷ J", which is the wrong
 *      agent: the FIELD does W_grav = −ΔU = +1.5 × 10⁷ J as the mass falls
 *      in, and −1.5 × 10⁷ J is what an external agent does lowering it
 *      quasi-statically (that is ΔU, and it equals mV). The same paragraph
 *      then contradicts itself by calling +1.5 × 10⁷ J "the external work"
 *      one line after saying an external agent must do +1.5 × 10⁷ J to
 *      REMOVE the mass. Topic 04's MCQ4 below is authored with the agent
 *      named explicitly in both the stem and the solution.
 *   2. Addendum D, Example D.1 check (page 534). Having found E = 2GM/(πR²) =
 *      1.27 × 10⁻¹⁰ N/kg exactly and E ≈ GM/(2R/π)² = 4.9 × 10⁻¹⁰ N/kg by the
 *      crude "mass at the mean distance" estimate, the text reports that the
 *      crude value "overshoots by a factor near π/2 ⋅ …", trailing off
 *      mid-expression. π/2 = 1.57 is not the factor. The true ratio is
 *      exact-to-crude = [π²/4] ÷ [2/π] = π³/8 = 3.88, which matches the two
 *      printed numbers (4.9 ÷ 1.27 = 3.86). Used below only in Topic 02's
 *      `mistakes` item on centroid shortcuts, with the correct factor.
 *
 * SOURCE DAMAGE. Every passage below was re-authored from context, never
 * transcribed. The patterns actually present in pages 448 to 536:
 *
 *   - Greek letters and accents drop with no placeholder, exactly as the
 *     brief warns. Confirmed instances rebuilt here: page 452's "angle" runs,
 *     page 476's rotation formula (the latitude symbol λ vanishes from
 *     "cos²λ" leaving "cos 2"), page 508's torsion constant κ and twist angle
 *     θ, page 528's density profiles ρ(r), and page 532's arc half-angle α.
 *     Each was recovered from the symbol table on the facing page, which
 *     survived because it is set as a table rather than inline maths.
 *   - Superscripts land on their own lines, which breaks every exponent in a
 *     chapter built on r². "10 −11" is 10⁻¹¹, "10 24" is 10²⁴, "𝑟 2" is r².
 *     This hits literally every formula; recomputing all 24 worked examples
 *     (see above) was the check that they were rebuilt right.
 *   - Two non-ASCII maths glyphs die as literal escape text rather than
 *     vanishing: a minus sign extracts as "\n7" (page 455's "𝑏 \n7 𝑎 = 0" is
 *     b − a = 0; page 466's "(1 \n7 𝑥)" is (1 − x)) and a multiplication dot
 *     or cross extracts as "\nA" or "\nN" (page 456's "𝑎 \nA 𝑎" is a · a;
 *     page 479's "6.4 \nN 10 6" is 6.4 × 10⁶). The pilot chapter met the
 *     "\n7" form of this defect and nothing else; this range has all three.
 *   - Inter-word spaces vanish at tight kerning, pervasively. Instances
 *     actually used in prose below: "CBSE Boardsexpect" (p.450),
 *     "NEETkeeps it lighter" (p.461), "thesmallermass" (p.468),
 *     "𝑔alsodecreases" (p.474), "bothare zero at the centre" (p.468),
 *     "morefinegative" (p.484, which is "more negative" with a stray f),
 *     "risesslightly" (p.475), "theheavierstar" (p.516).
 *   - One caption is damaged past word-level repair and was rebuilt from its
 *     own figure brief plus the body text it belongs to: Figure 7.8's caption
 *     on page 484 ends "and why is negative everywhere around a mass", with
 *     the subject of the clause missing entirely. The missing subject is U
 *     (the preceding sentences are about a satellite's total energy and the
 *     escape threshold), recovered from the Section 1 paragraph the caption
 *     paraphrases.
 *
 * The one damage pattern the brief warns of that is NOT present: no
 * ASCII-shifted (+29) heading run appears anywhere in pages 448 to 536.
 * `$GGHQGXP$` does not occur here; the addendum headings print as plain
 * "Addendum A" through "Addendum D". The reason a keyword search found only
 * one "Sub-topic" marker in this range is simply that this chapter titles its
 * six sub-topics "Part 1 -- Newton's Law of Gravitation" and so on; the
 * single stray "Sub-topic" is a cross-reference on page 461 pointing back at
 * Chapter 2. The six-part structure was worked out from the Contents table on
 * pages 448 to 449 and confirmed against the running heads and the six cheat
 * sheet boxes.
 *
 * DIMENSIONS. Every formula printed below, reduced to M L T:
 *
 *   - F = Gm₁m₂/r²: [M⁻¹L³T⁻²][M][M][L⁻²] = [M L T⁻²]. ✓ force.
 *   - G = Fr²/(m₁m₂): [MLT⁻²][L²][M⁻²] = [M⁻¹L³T⁻²]. ✓ (this is how the
 *     dimensional formula for G is got, and it is examinable).
 *   - F = GMm/(a(a+L)) (rod on its own line): [M⁻¹L³T⁻²][M²][L⁻²] = [MLT⁻²].
 *     ✓, and a ≫ L collapses it to GMm/a².
 *   - E_g = GM/r²: [M⁻¹L³T⁻²][M][L⁻²] = [L T⁻²] = acceleration. ✓
 *   - Ring on axis, E = GMx/(a²+x²)^{3/2}: [M⁻¹L³T⁻²][M][L][L⁻³] = [LT⁻²]. ✓
 *   - Solid sphere interior, E = GMr/R³: [M⁻¹L³T⁻²][M][L][L⁻³] = [LT⁻²]. ✓
 *   - Cavity field, E = (4/3)πGρd: [M⁻¹L³T⁻²][ML⁻³][L] = [LT⁻²]. ✓
 *   - g = GM/R²: [LT⁻²]. ✓  g = (4/3)πGRρ: [M⁻¹L³T⁻²][L][ML⁻³] = [LT⁻²]. ✓
 *   - g_h = gR²/(R+h)² and g_d = g(1 − d/R): both multiply g by a pure
 *     number, so both are [LT⁻²]. ✓
 *   - g_λ = g − ω²R cos²λ: [T⁻²][L] = [LT⁻²], matching g. ✓ (cos²λ is a pure
 *     number, which is why λ never carries a unit.)
 *   - U = −Gm₁m₂/r: [M⁻¹L³T⁻²][M²][L⁻¹] = [ML²T⁻²]. ✓ energy.
 *   - V = −GM/r: [M⁻¹L³T⁻²][M][L⁻¹] = [L²T⁻²] = J/kg. ✓ and U = mV recovers
 *     [ML²T⁻²]. ✓
 *   - E_g = −dV/dr: [L²T⁻²][L⁻¹] = [LT⁻²]. ✓ The field-potential pair is
 *     dimensionally consistent, which is the fastest check that you have not
 *     confused the two.
 *   - V inside a solid sphere, −GM(3R² − r²)/(2R³): [M⁻¹L³T⁻²][M][L²][L⁻³] =
 *     [L²T⁻²]. ✓
 *   - U_self = −3GM²/(5R): [M⁻¹L³T⁻²][M²][L⁻¹] = [ML²T⁻²]. ✓
 *   - v_e = √(2GM/R) = √([L²T⁻²]) = [LT⁻¹]. ✓ and √(2gR) = √([LT⁻²][L]) =
 *     [LT⁻¹]. ✓ The two forms agree because GM = gR².
 *   - v_o = √(GM/r): [LT⁻¹]. ✓
 *   - T = 2π√(r³/GM): √([L³][M⁻¹L³T⁻²]⁻¹[M]⁻¹) = √([T²]) = [T]. ✓
 *   - T² = 4π²a³/GM: [T²] on both sides. ✓ (This is the check that Kepler's
 *     constant carries dimensions and is not a pure number.)
 *   - K = GMm/2r, U = −GMm/r, E = −GMm/2r: all [ML²T⁻²]. ✓
 *   - L = mv_o r: [M][LT⁻¹][L] = [ML²T⁻¹]. ✓
 *   - Vis-viva, v² = GM(2/r − 1/a): [M⁻¹L³T⁻²][M][L⁻¹] = [L²T⁻²]. ✓
 *   - G = κθd²/(MmL): κ is a torque per radian, [ML²T⁻²]; θ is a pure number;
 *     so [ML²T⁻²][L²][M⁻²][L⁻¹] = [M⁻¹L³T⁻²]. ✓ It had to come out as [G],
 *     and that it does is the check that no length was dropped from the
 *     torque arm.
 *   - M = gR²/G: [LT⁻²][L²][M L⁻³T²] = [M]. ✓
 *   - ρ = 3g/(4πGR): [LT⁻²][M L⁻³T²][L⁻¹] = [ML⁻³]. ✓
 *   - ω² = G(m₁+m₂)/r³: [M⁻¹L³T⁻²][M][L⁻³] = [T⁻²]. ✓
 *   - μ = m₁m₂/(m₁+m₂): [M]. ✓  r₁ = m₂r/(m₁+m₂): [L]. ✓
 *   - E_binary = −Gm₁m₂/2r: [ML²T⁻²]. ✓
 *   - T_tunnel = 2π√(R/g): √([L][L⁻¹T²]) = [T]. ✓
 *   - ΔU = mgh/(1 + h/R): [M][LT⁻²][L] = [ML²T⁻²], the denominator being a
 *     pure number. ✓
 *
 *   36 formula lines checked, 36 dimensionally consistent. No informal or
 *   hidden-unit formula appears in this chapter (unlike the pilot's
 *   nth-second formula), so there is no caveat to record.
 *
 * PHYSICAL PLAUSIBILITY. Checked against the real Earth throughout, with the
 * chapter's own constants: g = 9.8 m/s², R = 6.4 × 10⁶ m, G = 6.67 × 10⁻¹¹
 * N m²/kg². Those give M = gR²/G = 6.0 × 10²⁴ kg, ρ = 5.5 × 10³ kg/m³,
 * v_o = √(gR) = 7.92 km/s, v_e = √(2gR) = 11.20 km/s and 2π√(R/g) = 5078 s =
 * 84.6 min, all four of which are the accepted figures and all four of which
 * the source prints. Escape velocity exceeds orbital velocity at the same
 * radius by exactly √2, in the formulas (v_e = √2 v_o is printed, derived and
 * used) and in the numbers (11.20/7.92 = 1.414). Orbital speed falls with
 * radius: v_o ∝ 1/√r, checked at the two radii this chapter computes, 7.6
 * km/s at 7.0 × 10⁶ m and 3.1 km/s at 4.2 × 10⁷ m, and 7.6/3.1 = 2.45 against
 * √(4.2/0.70) = 2.45. ✓ Nothing anywhere approaches c.
 *
 * LIMITING CASES, checked for each major result and used pedagogically where
 * it teaches something:
 *   - r → ∞. F, E_g → 0; U, V → 0 from below (this is the zero reference
 *     itself, and Topic 04's figure is built on it); a satellite's E → 0,
 *     which is exactly the escape threshold; vis-viva with a → ∞ returns
 *     v² = 2GM/r, the escape condition, which is Topic 05's `proc` step 5.
 *   - r → R. The shell's field jumps from 0 to GM/R² and the solid sphere's
 *     rises continuously to the same GM/R²: both are drawn in Figure 7.5 and
 *     both are the check that the two bodies are indistinguishable from
 *     outside. V is continuous at r = R for shell and sphere alike, which is
 *     Topic 04's own consistency check. The satellite results at r → R give
 *     the three "magic numbers" 7.9 km/s, 84.6 min and 11.2 km/s.
 *   - a ≫ L for the rod, x ≫ a for the ring: both collapse to GM/r², and
 *     Topic 01's `protip` makes that the standard sanity check on any
 *     extended-body integration.
 *   - r → 0. E_g → 0 at the centre of both shell and solid sphere (symmetry),
 *     while V reaches its most negative value there: the "zero field is not
 *     zero potential" pair, used three times.
 *   - d → 0 for the chord tunnel returns the through-centre tunnel, which is
 *     how Topic 03's protip states the 42-minute theorem.
 *
 * SEAMS: what is quoted as already known, and from where.
 *   - content/textbooks/phy-11-02-motion-straight-line.ts. Free fall and the
 *     constancy of g near the surface (that file's Topic 03) are assumed, not
 *     re-taught: this chapter's job is to explain WHY g has the value it has
 *     and how it varies, so Topic 03 opens by naming the earlier chapter's g
 *     as the thing about to be derived. The three equations of motion, and
 *     their stamped "constant a only", are quoted in Topic 03's tunnel
 *     material as the reason the tunnel problem cannot be solved with them.
 *     "v = 0 does not force a = 0" (that file's Topic 01 def and Topic 03
 *     mistake) is quoted in Topic 05 for a satellite at apogee. The master
 *     key a = v dv/dx (that file's Topic 05) is not needed here and is not
 *     used.
 *   - content/textbooks/math-11-12-limits.ts. The derivative as a limiting
 *     slope is quoted in Topic 02's field-potential relation and Topic 04's
 *     E = −dV/dr, never re-derived. Integration is NOT in that file (checked:
 *     it teaches derivatives only, matching the real syllabus), so every
 *     integral below is either set up in words ("add up the pull of every
 *     tiny piece") or handed the standard result inline, exactly as the pilot
 *     physics chapter does.
 *   - Centripetal acceleration v²/r is used in three derivations (the
 *     inverse-square law, orbital velocity, the binary period) and belongs to
 *     the Laws of Motion chapter, which is NOT yet written. It is therefore
 *     stated in full where first used, in Topic 01's `deriv`, rather than
 *     quoted as known.
 *
 * FIGURES. Sixteen `diagram` blocks: thirteen carry the source's thirteen
 * named figures (7.1 to 7.13) and three are designed for briefs the source
 * describes in prose but never draws. None dropped, no new figure vocabulary
 * requested. Fifteen are `plot`; one, the escape-energy well in Topic 04, is
 * `levels`. Per the panel rule, "two graphs of E_g versus r" (Figure 7.5) is
 * one block with two chips, never two panels in one frame, and the three
 * Kepler laws are one block with three chips. Figure 7.10 carries a second
 * chip for the centripetal condition, which the brief asks for and the source
 * describes in Part 5's derivation (a) without a figure of its own. Two
 * lessons the earlier chapters paid for are honoured explicitly. Every point
 * label that would otherwise sit on a line leaving its own point carries an
 * `at` corner: the two surface peaks, in Figure 7.5 and in the g-profile,
 * where the curve leaves to the north-east, and the planet on the Kepler
 * ellipse, where the focal radius drops away beneath it. And no arrow is
 * drawn collinear with the segment it belongs to: Figure 7.7's tunnel is two
 * walls with the force arrow down the middle rather than one line carrying
 * both, and Figure 7.4's axial component is offset below the axis it projects
 * onto, so the projection and the thing projected read as two strokes.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy11Gravitation: Chapter = {
  "chapter": "07",
  "title": "Gravitation",
  "subject": "Physics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Newton's Law of Gravitation",
      "chip": "01 THE LAW",
      "kalam": "product up, distance squared down",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Newton's Law of Gravitation</b><br>The foundation stone of the whole chapter. CBSE Boards want the statement, the vector form and the properties of <i>G</i> as a 2 to 3 mark question. JEE Main asks one or two direct questions every year: a force calculation, a superposition, or a ratio-scaling trap. NEET likes the definitions, the properties of <i>G</i>, and quick numericals. JEE Advanced rarely tests the law alone but builds every orbital, energy and field problem on top of it, so a wobble here costs marks in all five topics below.<br><br><b>02 · Gravitational Field Intensity</b><br>A JEE powerhouse. JEE Main asks one or two questions: field due to several point masses, shell versus solid sphere, or reading the E-r graph. JEE Advanced is relentless here, with rings, the cavity-in-a-sphere trick and field-potential links appearing almost every year. NEET keeps it lighter: the definition, and the fact that the field inside a shell is zero. CBSE Boards want the definition of field intensity and the fact that surface <i>g</i> is nothing but the Earth's own field.<br><br><b>03 · Acceleration due to Gravity</b><br>A perennial favourite. NEET and JEE Main almost guarantee a question on how <i>g</i> varies with altitude, depth or rotation, usually as a ratio or a find-the-height numerical. JEE Advanced folds it into tunnel-oscillation and non-uniform-density problems. CBSE Boards want the derivation of <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup> and the depth and altitude formulas as 2 to 3 mark questions, and love the conceptual one-liner, why is <i>g</i> smaller at the equator.<br><br><b>04 · Gravitational Potential and Energy</b><br>Heavily weighted and concept-rich. JEE Main reliably asks one or two questions on the potential energy of a system, escape velocity, or the work to move a mass. NEET favours escape-velocity ratios and the sign of <i>U</i>. JEE Advanced pushes into self-energy and the potential inside solid spheres and shells. CBSE Boards want the derivation of <i>U</i> = −<i>GMm</i>/<i>r</i>, the definition of potential, and the escape-velocity derivation: classic 3 to 5 mark territory.<br><br><b>05 · Kepler's Laws and Satellites</b><br>The chapter's grand finale and a guaranteed scorer. JEE Main asks two or three questions on Kepler's third law as a ratio, orbital velocity, satellite energy and geostationary parameters. NEET loves the three laws, weightlessness, and the <i>T</i>-<i>r</i> scaling. JEE Advanced sets elliptical-orbit problems solved with angular momentum and energy conservation together. CBSE Boards want all three Kepler laws, the orbital-velocity and period derivations, and the energy of a satellite, frequently for 3 to 5 marks.<br><br><b>06 · The Gravitational Constant and Two-Body Systems</b><br>Two distinct exam targets. The Cavendish experiment and the mass and density of the Earth are reliable CBSE 2 to 3 mark questions and appear in NEET as numericals, finding <i>M</i> or the density of a planet from <i>g</i>. Binary-star and reduced-mass systems are a JEE Advanced speciality and turn up occasionally in JEE Main. Knowing how <i>G</i> was actually measured, and what changes when both masses move, is what completes the chapter."
        },
        {
          "t": "p",
          "html": "Look up on a clear night and the Moon is hanging there, going around the Earth, year after year, never falling down. Now drop your pen: it hits the floor immediately. For thousands of years people took these to be two completely different kinds of event, the heavens obeying one set of rules and earthly objects another. The single most powerful idea in physics is that <b>they are the same event</b>. The pen falls and the Moon orbits for one identical reason, and a 23-year-old Isaac Newton was the first to see it clearly."
        },
        {
          "t": "p",
          "html": "Here is the picture that makes it obvious. Stand on a tall hill and throw a cricket ball horizontally. It curves down and lands some distance away. Throw it harder and it lands further off. Now throw it impossibly hard. The ball still falls toward the Earth's centre, but the Earth's surface curves away beneath it at exactly the same rate, so it never gets any closer to the ground. It simply keeps falling around the Earth. <b>That is an orbit</b>, and the Moon is doing nothing more than this: it is a cricket ball thrown sideways fast enough to keep missing. The very force that pulls your pen down is the force holding the Moon in the sky."
        },
        {
          "t": "think",
          "html": "every chunk of matter in the universe is quietly tugging on every other chunk. right now you are being pulled toward your textbook, toward the person next to you, toward the Sun, toward a galaxy you will never see, all at once. you never notice because gravity is staggeringly weak: the electric repulsion between two protons is about 10<sup>36</sup> times stronger than their gravitational attraction. gravity only becomes a big deal when you pile up an enormous amount of mass, like a whole planet. that is why the Earth's pull runs your day and your own pull on your textbook is undetectable."
        },
        {
          "t": "p",
          "html": "Newton turned that picture into a precise law. The force between two bodies gets <b>stronger</b> when either mass is bigger, in direct proportion, so doubling one mass doubles the force. And it gets <b>weaker fast</b> as they move apart, not in proportion to the distance but to the <i>square</i> of it: move twice as far apart and the force drops to a quarter. Almost every ratio question in this chapter is testing whether you remembered that square."
        },
        {
          "t": "def",
          "term": "Where the clean formula is licensed, and where it is not",
          "html": "<i>F</i> = <i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup> is written for <b>point masses</b>: bodies so small compared with their separation that their size does not matter. You may use it directly in exactly three situations. <b>One</b>, two point particles, the original case. <b>Two</b>, two uniform spheres, where the shell theorem lets you pretend all of each sphere's mass sits at its centre and <i>r</i> is the centre-to-centre distance. <b>Three</b>, a uniform sphere and a point mass. For anything else, a rod and a particle, two rings, an L-shaped body, you must add up (integrate) the pulls from every tiny piece. Ask yourself one question before reaching for the formula: <b>is every part of this body the same distance away?</b> If not, you have to integrate."
        },
        {
          "t": "def",
          "term": "The sign convention for this whole chapter",
          "html": "Fix it here and never re-decide. <b>The zero of gravitational energy is taken at infinite separation.</b> Gravity is purely attractive, so bringing two masses together releases energy and drops the stored energy below that zero: gravitational potential energy <i>U</i> and gravitational potential <i>V</i> are <b>negative everywhere at finite separation</b>, most negative when the masses are closest, and they climb back toward zero as the separation grows. The minus sign in the vector form of Newton's law encodes the same fact: the force points opposite to the outward radial direction, back toward the other mass. Dropping that minus is the single most expensive habit in this chapter, because a positive <i>U</i> is the mathematics of repulsion, and gravity never repels."
        },
        {
          "t": "defgrid",
          "title": "The five symbols of the law",
          "rows": [
            { "k": "<i>F</i>", "v": "gravitational force between the two bodies, in newton (N)" },
            { "k": "<i>m</i><sub>1</sub>, <i>m</i><sub>2</sub>", "v": "the two interacting masses, in kilogram (kg)" },
            { "k": "<i>r</i>", "v": "distance between the particles, or between the centres of two spheres, in metre (m)" },
            { "k": "<i>G</i>", "v": "the universal gravitational constant, 6.67 × 10<sup>−11</sup> N m<sup>2</sup>/kg<sup>2</sup>" },
            { "k": "<i>r̂</i>", "v": "unit vector along the line joining them, dimensionless, and it carries the direction only" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · NEWTON'S LAW OF GRAVITATION",
          "tag": "point masses, uniform spheres, or a sphere and a point",
          "main": "<i>F</i> = <i>G m</i><sub>1</sub> <i>m</i><sub>2</sub> ÷ <i>r</i><sup>2</sup><br>vector form: <i>F</i><sub>12</sub> = −(<i>G m</i><sub>1</sub> <i>m</i><sub>2</sub> ÷ <i>r</i><sup>2</sup>) <i>r̂</i><sub>21</sub>",
          "legend": [
            "<i>F</i> is the force in newton (N); <i>m</i><sub>1</sub> and <i>m</i><sub>2</sub> are the masses in kg; <i>r</i> is their separation in m",
            "<i>G</i> = 6.67 × 10<sup>−11</sup> N m<sup>2</sup>/kg<sup>2</sup>, and <i>r̂</i><sub>21</sub> is the dimensionless unit vector pointing from <i>m</i><sub>2</sub> to <i>m</i><sub>1</sub>",
            "the minus sign is the physics, not decoration: it says the force on <i>m</i><sub>1</sub> points back toward <i>m</i><sub>2</sub>, so gravity is always attractive"
          ],
          "note": "In words: every particle attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of the distance between them, directed along the line joining them."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE CONSTANT, AND ADDING UP MANY PULLS",
          "main": "<i>G</i> = 6.67 × 10<sup>−11</sup> N m<sup>2</sup>/kg<sup>2</sup>, dimensions [<i>M</i><sup>−1</sup><i>L</i><sup>3</sup><i>T</i><sup>−2</sup>]<br>superposition: <i>F</i><sub>net</sub> = <i>F</i><sub>12</sub> + <i>F</i><sub>13</sub> + … + <i>F</i><sub>1n</sub>",
          "legend": [
            "<i>G</i> is a true universal constant: a scalar whose value does not depend on the masses, the medium, the temperature, the time or the place",
            "physically, <i>G</i> is the force in newton (N) between two 1 kg masses placed 1 m apart, which is why it is so tiny",
            "<i>n</i> is the number of masses present; each pairwise force <i>F</i><sub>1i</sub> is computed as if the other masses were not there, then all are added head to tail as vectors",
            "get the dimensions by rearranging: <i>G</i> = <i>Fr</i><sup>2</sup>/<i>m</i><sub>1</sub><i>m</i><sub>2</sub>, so [<i>M</i><i>L</i><i>T</i><sup>−2</sup>][<i>L</i><sup>2</sup>][<i>M</i><sup>−2</sup>] = [<i>M</i><sup>−1</sup><i>L</i><sup>3</sup><i>T</i><sup>−2</sup>]"
          ],
          "note": "Superposition is a vector sum, never a sum of magnitudes. Two equal pulls 120° apart add to a single pull of the same size as each, not to double."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 7.1 · ONE PAIR, TWO EQUAL FORCES",
          "chips": ["action and reaction"],
          "captions": [
            "Each sphere pulls the other along the line of centres. The two forces are equal in size and opposite in direction, one of Newton's third-law pairs, even though the right-hand sphere is far heavier. Being uniform spheres, both may be treated as point masses at their centres, so r is the centre-to-centre distance."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 5.9], "axes": "none", "aspect": 0.6,
              "curves": [
                { "c": "circle", "cx": 2.4, "cy": 3.4, "r": 0.5 },
                { "c": "circle", "cx": 7.6, "cy": 3.4, "r": 0.85 }
              ],
              "marks": [
                { "x": 2.4, "y": 3.4, "glyph": "dot", "label": "m₁" },
                { "x": 7.6, "y": 3.4, "glyph": "dot", "label": "m₂" }
              ],
              "arrows": [
                { "from": [3.1, 3.4], "to": [4.6, 3.4], "tone": "amber", "label": "F₁₂" },
                { "from": [6.6, 3.4], "to": [5.1, 3.4], "tone": "amber", "label": "F₂₁" },
                { "from": [2.4, 1.5], "to": [7.6, 1.5], "head": "both", "label": "r" }
              ],
              "segments": [
                { "from": [2.4, 2.9], "to": [2.4, 1.5], "dash": true, "soft": true },
                { "from": [7.6, 2.55], "to": [7.6, 1.5], "dash": true, "soft": true }
              ],
              "labels": [
                { "x": 5.0, "y": 5.2, "text": "equal and opposite" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE EXPONENT IS EXACTLY 2, TAP A LINE",
          "steps": [
            {
              "eq": "a planet of mass <i>m</i> circles the Sun at radius <i>r</i> with period <i>T</i>, so it needs a centripetal force <i>F</i> = <i>mv</i><sup>2</sup>/<i>r</i>",
              "why": "A body moving in a circle is accelerating toward the centre the whole time, because its direction keeps changing. Some force must supply that. Newton's leap was to say the force is gravity: without an inward pull the planet would fly off along a straight tangent."
            },
            {
              "eq": "in one period the planet covers 2π<i>r</i>, so <i>v</i> = 2π<i>r</i>/<i>T</i> and <i>F</i> = 4π<sup>2</sup><i>mr</i>/<i>T</i><sup>2</sup>",
              "why": "Trade the speed, which nobody could measure in 1687, for the period, which anybody with a telescope and patience could. Substituting turns the requirement into a statement about <i>r</i> and <i>T</i> alone."
            },
            {
              "eq": "Kepler had measured <i>T</i><sup>2</sup> ∝ <i>r</i><sup>3</sup>, that is <i>T</i><sup>2</sup> = <i>kr</i><sup>3</sup>",
              "why": "This is an observed fact about the solar system, distilled by Kepler from Tycho Brahe's data, and any correct force law has to reproduce it. Notice the derivation is running backwards from the data toward the law."
            },
            {
              "eq": "<i>F</i> = 4π<sup>2</sup><i>mr</i>/(<i>kr</i><sup>3</sup>) = (4π<sup>2</sup>/<i>k</i>) <i>m</i>/<i>r</i><sup>2</sup>, so <i>F</i> ∝ <i>m</i>/<i>r</i><sup>2</sup>",
              "why": "Everything except <i>m</i> and <i>r</i> is constant, so the inverse square drops out on its own. That is the whole point of the argument: nobody assumed the square, Kepler's data forced it."
            },
            {
              "eq": "by the third law the planet pulls the Sun just as hard, so <i>F</i> = <i>GM</i><sub>s</sub><i>m</i>/<i>r</i><sup>2</sup>",
              "why": "The force must depend on the Sun's mass exactly as it depends on the planet's. The only expression symmetric in both masses that still falls off as 1/<i>r</i><sup>2</sup> is this one, with <i>G</i> bundling up the leftover constants. Newton then checked it against the Moon's orbit and found spectacular agreement."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Solving any superposition problem",
          "steps": [
            "<b>Isolate the particle</b> whose net force you want. Everything else in the problem is a source, and each source is handled separately.",
            "<b>Compute each pairwise magnitude</b> <i>Gm</i><sub>1</sub><i>m</i><sub>i</sub>/<i>r</i><sub>1i</sub><sup>2</sup> on its own, as if no other mass existed. Gravity has no shielding, so no source blocks another.",
            "<b>Draw every force as an arrow pointing from your particle toward the source.</b> Gravity only ever pulls, so the direction is never in doubt and you never need a sign rule for it.",
            "<b>Resolve into x and y components and add component by component.</b> Never add magnitudes unless every force is along the same line.",
            "<b>Recombine</b> with <i>F</i><sub>net</sub> = √(<i>F<sub>x</sub></i><sup>2</sup> + <i>F<sub>y</sub></i><sup>2</sup>) and state the direction. Sanity check: the answer must be smaller than the plain sum of magnitudes unless all the pulls are collinear."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 7.2 · THE ROD YOU CANNOT SHORTCUT",
          "chips": ["integrate, do not substitute"],
          "captions": [
            "Different parts of the rod sit at different distances from m, so there is no single r to substitute. Take an element dx at distance x, treat it as a point mass dm, and add up every element's pull from a to a + L. The answer is F = GMm/(a(a + L)), which collapses to GMm/a² when a is much larger than L."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 5.9], "axes": "none", "aspect": 0.6,
              "polys": [
                { "pts": [[4.0, 3.0], [9.0, 3.0], [9.0, 3.45], [4.0, 3.45]], "close": true, "fill": "wash", "tone": "ink" },
                { "pts": [[6.4, 3.0], [6.85, 3.0], [6.85, 3.45], [6.4, 3.45]], "close": true, "fill": "wash", "tone": "amber" }
              ],
              "marks": [
                { "x": 1.2, "y": 3.22, "glyph": "dot", "label": "m" }
              ],
              "arrows": [
                { "from": [1.7, 3.22], "to": [3.1, 3.22], "tone": "amber", "label": "dF" },
                { "from": [1.2, 2.1], "to": [4.0, 2.1], "head": "both", "label": "a" },
                { "from": [1.2, 1.1], "to": [6.6, 1.1], "head": "both", "label": "x" },
                { "from": [4.0, 4.5], "to": [9.0, 4.5], "head": "both", "label": "L" }
              ],
              "labels": [
                { "x": 6.6, "y": 4.0, "text": "dx" },
                { "x": 8.3, "y": 2.4, "text": "mass M" }
              ]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Two uniform iron spheres of mass 80 kg and 120 kg have their centres 0.50 m apart. Find the gravitational force between them, and say what happens to it if the separation is doubled.",
          "steps": [
            "Both are uniform spheres, so the shell theorem lets us treat each as a point mass at its centre and use the formula directly with <i>r</i> = 0.50 m.",
            "<i>F</i> = (6.67 × 10<sup>−11</sup>)(80)(120)/(0.50)<sup>2</sup> = (6.67 × 10<sup>−11</sup>)(9600)/0.25.",
            "Numerator = 6.40 × 10<sup>−7</sup>, so <i>F</i> = 6.40 × 10<sup>−7</sup>/0.25 = 2.56 × 10<sup>−6</sup> N.",
            "Doubling <i>r</i> divides the force by 2<sup>2</sup> = 4, giving 6.40 × 10<sup>−7</sup> N. Notice how minuscule the pull is even for 200 kg of iron: gravity is genuinely feeble at human scale."
          ],
          "ans": "F = 2.56 × 10<sup>−6</sup> N · doubling the separation leaves 6.40 × 10<sup>−7</sup> N"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "The gravitational force between two point masses is <i>F</i><sub>0</sub>. One mass is tripled and the distance between them is halved. Find the new force without a calculator.",
          "steps": [
            "Think in ratios and never re-substitute numbers. Each change acts on <i>F</i> ∝ <i>m</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup> independently.",
            "Tripling one mass multiplies <i>F</i> by 3. Halving the distance sends <i>r</i><sup>2</sup> to <i>r</i><sup>2</sup>/4, which multiplies <i>F</i> by 4.",
            "Combine: <i>F</i><sub>new</sub> = 3 × 4 × <i>F</i><sub>0</sub> = 12<i>F</i><sub>0</sub>.",
            "The trap is 3 × 2 = 6<i>F</i><sub>0</sub>, from forgetting that distance enters as a square. Halving <i>r</i> boosts the force fourfold, not twofold, and the whole question is ten seconds of work if you respect that."
          ],
          "ans": "12<i>F</i><sub>0</sub>"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "The orbital speed <i>v</i> of a satellite is believed to depend only on <i>G</i>, the planet's mass <i>M</i> and the orbital radius <i>r</i>. Use dimensional analysis alone to find how <i>v</i> depends on them.",
          "steps": [
            "Assume a power law <i>v</i> = <i>kG<sup>a</sup>M<sup>b</sup>r<sup>c</sup></i> with <i>k</i> a pure number, and write the dimensions: [<i>v</i>] = [<i>LT</i><sup>−1</sup>], [<i>G</i>] = [<i>M</i><sup>−1</sup><i>L</i><sup>3</sup><i>T</i><sup>−2</sup>], [<i>M</i>] = [<i>M</i>], [<i>r</i>] = [<i>L</i>].",
            "Collect powers: [<i>M</i><sup>0</sup><i>L</i><sup>1</sup><i>T</i><sup>−1</sup>] = [<i>M</i><sup>b−a</sup><i>L</i><sup>3a+c</sup><i>T</i><sup>−2a</sup>].",
            "Time gives −2<i>a</i> = −1, so <i>a</i> = 1/2. Mass gives <i>b</i> − <i>a</i> = 0, so <i>b</i> = 1/2. Length gives 3<i>a</i> + <i>c</i> = 1, so <i>c</i> = −1/2.",
            "Therefore <i>v</i> = <i>k</i>√(<i>GM</i>/<i>r</i>). The full dynamical argument in Topic 05 gives <i>k</i> = 1, but dimensions alone pinned down the form without solving a single equation of motion."
          ],
          "ans": "v ∝ √(GM/r), and the dynamics later fixes the constant at 1"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A thin uniform rod of mass <i>M</i> and length <i>L</i> lies along a straight line. A point mass <i>m</i> sits on that same line, a distance <i>a</i> from the nearer end. Find the force on <i>m</i>, then check the answer for <i>a</i> ≫ <i>L</i>.",
          "steps": [
            "Different parts of the rod are at different distances, so there is no single <i>r</i>: the point-mass formula is not licensed and we must integrate.",
            "Let the linear density be λ = <i>M</i>/<i>L</i>. An element of length <i>dx</i> at distance <i>x</i> from <i>m</i> has mass λ <i>dx</i> and pulls with <i>dF</i> = <i>Gm</i>λ <i>dx</i>/<i>x</i><sup>2</sup>. Every element pulls the same way along the line, so magnitudes add directly with no vector resolution.",
            "Integrate <i>x</i> from <i>a</i> to <i>a</i> + <i>L</i>: <i>F</i> = <i>Gm</i>λ[1/<i>a</i> − 1/(<i>a</i> + <i>L</i>)] = <i>Gm</i>λ<i>L</i>/(<i>a</i>(<i>a</i> + <i>L</i>)).",
            "Substituting λ<i>L</i> = <i>M</i> gives <i>F</i> = <i>GMm</i>/(<i>a</i>(<i>a</i> + <i>L</i>)). Check <i>a</i> ≫ <i>L</i>: then <i>a</i> + <i>L</i> ≈ <i>a</i> and <i>F</i> ≈ <i>GMm</i>/<i>a</i><sup>2</sup>, the point-mass result. From far away every object looks like a point mass, and if your limit does not collapse to that you have made an error."
          ],
          "ans": "F = GMm/(a(a + L)), which becomes GMm/a<sup>2</sup> when a ≫ L"
        },
        {
          "t": "mcq",
          "q": "The gravitational attraction between two bodies is <i>F</i>. If the mass of each body is doubled and the distance between them is also doubled, the new force is:",
          "opts": [
            { "label": "4<i>F</i>", "nudge": "This picks up the mass factor of 4 and forgets the distance entirely." },
            { "label": "2<i>F</i>", "nudge": "This counts only one of the two masses doubling, and still ignores the distance." },
            { "label": "<i>F</i>", "nudge": null },
            { "label": "<i>F</i>/4", "nudge": "This applies only the distance penalty and forgets that both masses grew." }
          ],
          "correct": 2,
          "solution": "Doubling each mass multiplies the numerator by 2 × 2 = 4. Doubling the distance multiplies r<sup>2</sup> by 4, dividing the force by 4. Net effect 4/4 = 1, so the force is unchanged."
        },
        {
          "t": "mcq",
          "q": "Which one of these statements about the gravitational force is <b>incorrect</b>?",
          "opts": [
            { "label": "it is always attractive", "nudge": "Genuinely true: there is no negative mass, so gravity never repels." },
            { "label": "it depends on the medium between the bodies", "nudge": null },
            { "label": "it is a conservative force", "nudge": "Genuinely true: the work it does is path-independent, which is what makes the energy methods of Topic 04 legal." },
            { "label": "it obeys Newton's third law", "nudge": "Genuinely true: the two bodies feel equal and opposite pulls, whatever their masses." }
          ],
          "correct": 1,
          "solution": "Unlike the electrostatic force, gravity is completely independent of the intervening medium: putting water, lead or vacuum between two masses changes nothing. The trap is importing the dielectric constant from Coulomb's law, where a medium really does reduce the force. Students who fuse the two inverse-square laws together fall for it."
        },
        {
          "t": "mcq",
          "q": "A uniform thin rod of mass <i>M</i> and length <i>L</i>, and a point mass <i>m</i>, are separated by a distance <i>r</i> measured between the rod's centre and the point mass. The force between them is best described as:",
          "opts": [
            { "label": "exactly <i>GMm</i>/<i>r</i><sup>2</sup>", "nudge": "The classic blunder: treating distance to the centre as if the rod were a sphere. Only spheres get that privilege." },
            { "label": "found by integration, and not equal to <i>GMm</i>/<i>r</i><sup>2</sup>", "nudge": null },
            { "label": "zero", "nudge": "There is obviously a non-zero attraction; nothing here cancels." },
            { "label": "<i>GMm</i>/<i>L</i><sup>2</sup>", "nudge": "This invents a formula with no basis, using a length that is not a separation at all." }
          ],
          "correct": 1,
          "solution": "The point-mass formula is licensed only for point masses, uniform spheres, or a sphere and a point. A rod is none of these: its elements sit at different distances and, off-axis, at different angles, so you must integrate. You cannot pretend the rod's mass sits at its centre."
        },
        {
          "t": "mcq",
          "q": "Two particles of equal mass <i>m</i> are released from rest in deep space, separated by <i>R</i>, with only their mutual gravitation acting. The magnitude of the acceleration of one particle relative to the other is:",
          "opts": [
            { "label": "<i>Gm</i>/<i>R</i><sup>2</sup>", "nudge": "This is the acceleration of a single particle in the ground frame, forgetting that the other particle is rushing in as well." },
            { "label": "<i>Gm</i>/2<i>R</i><sup>2</sup>", "nudge": "This halves the single-particle answer, perhaps from a reduced-mass step applied in the wrong direction." },
            { "label": "2<i>Gm</i>/<i>R</i><sup>2</sup>", "nudge": null },
            { "label": "it cannot be determined", "nudge": "Everything needed is given; no extra data is required." }
          ],
          "correct": 2,
          "solution": "Each particle feels F = Gm<sup>2</sup>/R<sup>2</sup>, so each accelerates at a = F/m = Gm/R<sup>2</sup> toward the other. Because they accelerate toward each other, the relative acceleration is the sum, 2Gm/R<sup>2</sup>."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Two spheres of mass 5.0 kg each have their centres 20 cm apart. Calculate the gravitational force between them.", "a": "<i>F</i> = (6.67 × 10<sup>−11</sup>)(25)/(0.20)<sup>2</sup> = 1.67 × 10<sup>−9</sup>/0.040 = 4.2 × 10<sup>−8</sup> N." },
            { "q": "[NEET] The force between two masses is <i>F</i>. Both masses are doubled and the distance between them is also doubled. Find the new force.", "a": "<i>F</i>, unchanged: the fourfold rise from the masses exactly cancels the fourfold fall from the squared distance." },
            { "q": "[JEE Main] Two point masses <i>M</i> and 4<i>M</i> are fixed 9.0 m apart. At what distance from the smaller mass, along the line joining them, is the net force on a third mass zero?", "a": "Set <i>M</i>/<i>x</i><sup>2</sup> = 4<i>M</i>/(9 − <i>x</i>)<sup>2</sup>, so 9 − <i>x</i> = 2<i>x</i> and <i>x</i> = 3.0 m from <i>M</i> (6.0 m from 4<i>M</i>)." },
            { "q": "[JEE Main] Three particles each of mass <i>m</i> sit at the corners of an equilateral triangle of side <i>a</i>. Find the net gravitational force on any one of them.", "a": "Two pulls of <i>Gm</i><sup>2</sup>/<i>a</i><sup>2</sup> at 60° to each other give 2(<i>Gm</i><sup>2</sup>/<i>a</i><sup>2</sup>)cos 30° = √3 <i>Gm</i><sup>2</sup>/<i>a</i><sup>2</sup>, pointing at the triangle's centroid." },
            { "q": "[JEE Advanced] Two solid spheres of the same material and radius <i>r</i> are placed in contact. Show that the force between them is proportional to <i>r</i><sup>4</sup>.", "a": "Each mass ∝ <i>r</i><sup>3</sup> at fixed density, and the centre-to-centre distance is 2<i>r</i>, so <i>F</i> ∝ <i>r</i><sup>3</sup>·<i>r</i><sup>3</sup>/<i>r</i><sup>2</sup> = <i>r</i><sup>4</sup>." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Forgetting the square on the distance.</b> Change the distance by a factor <i>k</i> and the force changes by 1/<i>k</i><sup>2</sup>, not 1/<i>k</i>. Halving the distance quadruples the force. This single slip causes more wrong answers in ratio questions than anything else in the chapter.",
            "<b>Applying <i>GMm</i>/<i>r</i><sup>2</sup> to an extended body.</b> The clean formula is licensed only for point masses, uniform spheres, or a sphere and a point. For a rod, a ring, an arc or anything irregular you must integrate. The test is one question: is every part of this body the same distance away?",
            "<b>Adding force magnitudes instead of vectors.</b> Two equal pulls 120° apart give a resultant of the same size as each, not double, and other angles give partial cancellation. Always resolve into components first.",
            "<b>Importing electrostatics.</b> Gravity is always attractive, medium-independent, and cannot be shielded. There is no dielectric constant, no repulsion and no Faraday cage for it.",
            "<b>Writing the vector form without the minus sign.</b> A positive sign there describes a repulsive inverse-square force, which is a real thing in electrostatics and not a thing in gravitation."
          ]
        },
        {
          "t": "protip",
          "html": "solve by ratio, never by re-substitution. for any \"what happens to F if the masses or the distance change\" question, write F ∝ m<sub>1</sub>m<sub>2</sub>/r<sup>2</sup>, multiply the separate factors in your head, and you will finish in seconds without ever touching 6.67 × 10<sup>−11</sup>. and after any extended-body integration, run the far-field check: set the distance much larger than the body and the answer <b>must</b> reduce to GMm/r<sup>2</sup>. if it does not, find your mistake before moving on, because everything looks like a point mass from far enough away."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "F = Gm<sub>1</sub>m<sub>2</sub>/r<sup>2</sup>, along the line of centres", "note": "always attractive, and the vector form carries a minus sign" },
            { "f": "G = 6.67 × 10<sup>−11</sup> N m<sup>2</sup>/kg<sup>2</sup>, [M<sup>−1</sup>L<sup>3</sup>T<sup>−2</sup>]", "note": "a universal scalar: independent of medium, mass, time and place" },
            { "f": "attractive · central · conservative · medium-independent", "note": "and it obeys Newton's third law, whatever the mass ratio" },
            { "f": "licensed for: point masses, uniform spheres, sphere plus point", "note": "anything else, integrate" },
            { "f": "F<sub>net</sub> = ΣF<sub>i</sub>, a vector sum", "note": "each pair computed as if the others were absent, then added head to tail" }
          ],
          "aids": [
            "\"product up, distance squared down\"",
            "\"far away, everything is a point mass\""
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Gravitational Field Intensity",
      "chip": "02 THE FIELD",
      "kalam": "outside, a sphere is a point; inside, only what is beneath you counts",
      "blocks": [
        {
          "t": "p",
          "html": "The last topic pictured gravity as a direct tug between two masses, action at a distance. There is a deeper way to see it, and it is the way modern physics actually thinks. Instead of saying the Earth reaches across space and grabs the Moon, say this: <b>the Earth fills the space around it with a gravitational field, and the Moon simply responds to the field right where it sits</b>. The field is the middleman. Every mass turns the space around it into a landscape of pulls, and any other mass dropped into that landscape feels a force decided purely by the local field."
        },
        {
          "t": "p",
          "html": "<b>Gravitational field intensity</b> at a point is the force a unit mass would feel there: force per kilogram. Put a 1 kg test mass at the point, measure the gravitational force on it, and that number with its direction <i>is</i> the field. Which is why the field carries the units of an acceleration, N/kg being the same thing as m/s<sup>2</sup>: the field at a point is literally the acceleration any freely falling mass would have there. Note carefully that the field is a property of the <i>source and the location</i>, not of whatever you use to probe it. The test mass cancels out of the definition."
        },
        {
          "t": "think",
          "html": "you already know one gravitational field intimately, and its name is g. the 9.8 m/s<sup>2</sup> you have been using since the motion chapter is nothing but the Earth's gravitational field at its surface. when you were told that g belongs to the Earth and not to the falling object, you were being told that g is a field: it exists at every point around the Earth whether or not anything is there to feel it. that chapter was secretly your first lesson in fields. now generalise: every mass, not just the Earth, sets one up, and you can compute it for any shape."
        },
        {
          "t": "p",
          "html": "Why bother with the field picture at all? Because of one magical property of spheres, which Newton proved and called the <b>shell theorem</b>. A uniform spherical shell pulls an <i>outside</i> point exactly as if all its mass were a point at the centre. And a uniform spherical shell exerts <b>zero net force on any point inside it</b>: the pulls from every direction cancel perfectly. The nearby part of the shell is small but close, the far part is large but distant, and because the pull falls off as the square of the distance, the two effects compensate exactly. That single result is what makes planets tractable, because a solid planet is nothing but a stack of nested shells."
        },
        {
          "t": "def",
          "term": "Gravitational field intensity",
          "html": "<i>E<sub>g</sub></i> = <i>F</i>/<i>m</i><sub>0</sub>, the gravitational force per unit test mass placed at a point, measured in N/kg, which is dimensionally identical to m/s<sup>2</sup>. It is a <b>vector</b>, pointing toward the source, and fields from several sources add as vectors, component by component, so they can cancel. Field lines are imaginary arrows drawn in the direction a test mass would be pushed, so they always point inward toward mass, converging like water draining to a plughole. They never cross, because the field has one definite direction at every point, and there are no outward lines anywhere in the universe, because there is no negative mass to repel."
        },
        {
          "t": "defgrid",
          "title": "The standard bodies, at a glance",
          "rows": [
            { "k": "Point mass, or anywhere outside a sphere", "v": "<i>E<sub>g</sub></i> = <i>GM</i>/<i>r</i><sup>2</sup>, toward the mass" },
            { "k": "Uniform shell, inside", "v": "exactly zero everywhere, however off-centre the point is" },
            { "k": "Uniform solid sphere, inside", "v": "<i>E<sub>g</sub></i> = <i>GMr</i>/<i>R</i><sup>3</sup>, rising linearly from zero at the centre" },
            { "k": "Ring, on its axis", "v": "<i>E<sub>g</sub></i> = <i>GMx</i>/(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>)<sup>3/2</sup>: zero at the centre, peak at <i>x</i> = <i>a</i>/√2" },
            { "k": "Cavity in a uniform sphere", "v": "a uniform field (4/3)π<i>G</i>ρ<i>d</i> everywhere inside the hole, toward the main centre" },
            { "k": "Both, at the surface <i>r</i> = <i>R</i>", "v": "<i>GM</i>/<i>R</i><sup>2</sup>: from the surface outward, shell and solid sphere are indistinguishable" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · FIELD OF A POINT MASS AND OF A SHELL",
          "main": "<i>E<sub>g</sub></i> = <i>F</i> ÷ <i>m</i><sub>0</sub> = <i>GM</i> ÷ <i>r</i><sup>2</sup><br>shell: 0 for <i>r</i> < <i>R</i>, <i>GM</i>/<i>R</i><sup>2</sup> at <i>r</i> = <i>R</i>, <i>GM</i>/<i>r</i><sup>2</sup> for <i>r</i> > <i>R</i>",
          "legend": [
            "<i>E<sub>g</sub></i> is the field in N/kg, identical to m/s<sup>2</sup>, with dimensions [<i>L T</i><sup>−2</sup>]",
            "<i>F</i> is the force in newton (N) on the test mass <i>m</i><sub>0</sub> in kg; the test mass cancels, so the field belongs to the source",
            "<i>M</i> is the source mass in kg, <i>R</i> the shell's radius in m and <i>r</i> the distance from the centre in m",
            "at the Earth's surface <i>E<sub>g</sub></i> = <i>g</i>: the field and the acceleration due to gravity are one quantity, not two"
          ],
          "note": "The shell's field jumps abruptly at r = R, from nothing inside to its full surface value. Nothing physical is broken: the mass all sits in an infinitely thin layer, which is exactly what makes the step legal."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · SOLID SPHERE, RING, AND A CAVITY",
          "tag": "uniform density, spherical or ring symmetry only",
          "main": "solid sphere: <i>E<sub>g</sub></i> = <i>GMr</i>/<i>R</i><sup>3</sup> for <i>r</i> ≤ <i>R</i>, and <i>GM</i>/<i>r</i><sup>2</sup> for <i>r</i> ≥ <i>R</i><br>ring on its axis: <i>E<sub>g</sub></i> = <i>GMx</i> ÷ (<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>)<sup>3/2</sup><br>inside a uniform sphere: <i>E<sub>g</sub></i> = (4/3)π<i>G</i>ρ<i>r</i>, toward the centre",
          "legend": [
            "<i>M</i> is the total mass in kg, <i>R</i> the body's radius in m, <i>r</i> the distance from the centre in m",
            "<i>a</i> is the ring's radius and <i>x</i> the distance from its centre along the axis, both in m",
            "ρ is the uniform density in kg/m<sup>3</sup>, and the third line is just the first rewritten with <i>M</i> = (4/3)π<i>R</i><sup>3</sup>ρ",
            "the ring's field is zero at its centre and largest at <i>x</i> = <i>a</i>/√2, where it equals 2<i>GM</i>/(3√3 <i>a</i><sup>2</sup>) ≈ 0.385 <i>GM</i>/<i>a</i><sup>2</sup>"
          ],
          "note": "The third form is the one to reach for in cavity problems: written as a vector it is proportional to the position vector from the centre, and that is what makes the cavity field come out uniform."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 7.3 · WHY A SHELL PULLS NOTHING INSIDE",
          "chips": ["the exact cancellation"],
          "captions": [
            "Take any point P inside a uniform shell, deliberately off-centre. The nearby patch of shell is small but close; the far patch is large but distant. Mass grows as the square of the distance while the pull falls as the square of the distance, so the two contributions cancel exactly, in every direction at once. The net field is zero everywhere inside, however off-centre P sits."
          ],
          "frames": [
            {
              "x": [-5, 5], "y": [-4.32, 4.32], "axes": "none", "aspect": 0.86,
              "curves": [{ "c": "circle", "cx": 0, "cy": 0, "r": 3.6 }],
              "polys": [
                { "pts": [[3.545, -0.625], [3.6, 0], [3.545, 0.625]], "smooth": true, "tone": "amber" },
                { "pts": [[-3.117, -1.8], [-3.6, 0], [-3.117, 1.8]], "smooth": true, "tone": "amber" }
              ],
              "marks": [{ "x": 1.7, "y": 0, "glyph": "dot", "label": "P" }],
              "arrows": [
                { "from": [2.3, 0], "to": [3.3, 0], "label": "near" },
                { "from": [1.3, 0], "to": [0.3, 0], "label": "far" }
              ],
              "labels": [
                { "x": 0, "y": 2.6, "text": "net field = 0 at P" },
                { "x": 3.2, "y": -1.9, "text": "small, close" },
                { "x": -2.6, "y": -2.9, "text": "large, distant" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · FIELD ON THE AXIS OF A RING, TAP A LINE",
          "steps": [
            {
              "eq": "each element <i>dm</i> of the ring sits at the same distance √(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>) from the axial point <i>P</i>",
              "why": "This is the whole reason a ring is easy: the geometry is identical for every element, so the distance comes out of the sum as a constant. A rod does not have this property, which is why the rod integral in Topic 01 was harder."
            },
            {
              "eq": "<i>dE</i> = <i>G dm</i>/(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>), pointing from <i>P</i> toward that element",
              "why": "Each element pulls like a point mass. The direction is different for every element, though, so these cannot simply be added as numbers."
            },
            {
              "eq": "the element diametrically opposite cancels the perpendicular component, leaving <i>dE</i> cos θ along the axis",
              "why": "Pair up elements across the ring. Their perpendicular pulls are equal and opposite, so only the axial components survive, and cos θ = <i>x</i>/√(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>) is the same for all of them."
            },
            {
              "eq": "<i>E<sub>g</sub></i> = ∫ <i>Gx dm</i>/(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>)<sup>3/2</sup> = <i>GMx</i>/(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>)<sup>3/2</sup>",
              "why": "Everything except <i>dm</i> is constant, and the elements sum to <i>M</i>. Two checks: at <i>x</i> = 0 the field is zero, because every pull is balanced by its opposite; and for <i>x</i> ≫ <i>a</i> it reduces to <i>GM</i>/<i>x</i><sup>2</sup>, the ring looking like a point from far away."
            },
            {
              "eq": "setting <i>dE<sub>g</sub></i>/<i>dx</i> = 0 gives <i>a</i><sup>2</sup> = 2<i>x</i><sup>2</sup>, so the field peaks at <i>x</i> = <i>a</i>/√2",
              "why": "Zero at the centre, zero at infinity, positive in between: the field has to peak somewhere, and this non-monotonic profile is exactly what JEE likes to test. The peak value works out to 2<i>GM</i>/(3√3 <i>a</i><sup>2</sup>)."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 7.4 · A RING, SEEN EDGE ON",
          "chips": ["only the axial part survives"],
          "captions": [
            "P sits on the axis at distance x. The element dm at the top pulls P along the slanted line, at angle θ to the axis. The element diametrically opposite pulls with an equal and opposite perpendicular component, so those two cancel and only the axial part dE cos θ is left. Adding the axial parts over the whole ring gives GMx/(a² + x²)^3/2."
          ],
          "frames": [
            {
              "x": [-1.4, 7], "y": [-3.0, 3.0], "axes": "none", "aspect": 0.72,
              "curves": [{ "c": "ellipse", "cx": 0, "cy": 0, "a": 0.5, "b": 2.0 }],
              "segments": [
                { "from": [-1.0, 0], "to": [6.6, 0], "dash": true, "soft": true },
                { "from": [0, 2.0], "to": [5.0, 0], "soft": true },
                { "from": [0, 0], "to": [0, 2.0], "label": "a" }
              ],
              "marks": [
                { "x": 5.0, "y": 0, "glyph": "dot", "label": "P" },
                { "x": 0, "y": 2.0, "glyph": "dot", "label": "dm" },
                { "x": 0, "y": -2.0, "glyph": "dot", "label": "opposite" }
              ],
              "arrows": [
                { "from": [5.0, 0], "to": [3.75, 0.5], "tone": "amber", "label": "dE" },
                { "from": [5.0, 0], "to": [3.75, -0.5], "dash": true, "tone": "soft", "label": "cancels" },
                { "from": [5.0, -0.75], "to": [3.65, -0.75], "tone": "amber", "label": "dE cos θ" },
                { "from": [0, -2.6], "to": [5.0, -2.6], "head": "both", "label": "x" }
              ],
              "arcs": [{ "at": [5.0, 0], "r": 0.9, "from": 158, "to": 180, "label": "θ" }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · INSIDE A SOLID SPHERE, ONLY WHAT IS BENEATH YOU COUNTS",
          "steps": [
            {
              "eq": "a solid sphere is a nest of shells, so at radius <i>r</i> split it into shells bigger than <i>r</i> and shells smaller than <i>r</i>",
              "why": "This is the only move in the derivation, and it is pure bookkeeping: sort the mass by whether you are inside it or outside it."
            },
            {
              "eq": "every shell larger than <i>r</i> contributes exactly zero, because you are inside it",
              "why": "That is the shell theorem, and it is why digging down does not increase the pull the way people expect. The matter above you stops counting entirely, not partially."
            },
            {
              "eq": "<i>M</i><sub>enc</sub> = <i>M</i>(<i>r</i><sup>3</sup>/<i>R</i><sup>3</sup>) for a uniform sphere, and it acts as a point mass at the centre",
              "why": "Every shell smaller than <i>r</i> is one you are outside, so each acts as a point at the centre and they may all be lumped together. With uniform density the enclosed mass goes as the enclosed volume, hence the cube."
            },
            {
              "eq": "<i>E<sub>g</sub></i> = <i>GM</i><sub>enc</sub>/<i>r</i><sup>2</sup> = <i>GMr</i>/<i>R</i><sup>3</sup>, rising linearly with <i>r</i>",
              "why": "One power of <i>r</i> from the enclosed mass survives the two in the denominator. So the field climbs in a straight line from zero at the centre to <i>GM</i>/<i>R</i><sup>2</sup> at the surface, then falls off as an inverse square outside: the peak is exactly at the surface."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 7.5 · FIELD AGAINST DISTANCE, TWO BODIES",
          "chips": ["hollow shell", "solid sphere"],
          "captions": [
            "A shell: nothing at all inside, then a clean jump to GM/R² at the surface, then the inverse-square fall. All the mass sits in one thin layer, which is what licenses the step.",
            "A solid sphere of the same mass and radius: the field climbs in a straight line from zero at the centre to the same GM/R² at the surface, then falls away along exactly the same outside curve. The two bodies are indistinguishable from outside and completely different within."
          ],
          "frames": [
            {
              "x": [0, 4], "y": [0, 1.3],
              "axisX": "r", "axisY": "E",
              "ticksX": { "at": [1, 2, 3], "labels": ["R", "2R", "3R"] },
              "ticksY": { "at": [1], "labels": ["E(R)"] },
              "curves": [
                { "c": "pts", "pts": [[0, 0], [0.98, 0]] },
                { "c": "pts", "pts": [[1, 1], [1.2, 0.694], [1.4, 0.51], [1.6, 0.391], [1.8, 0.309], [2, 0.25], [2.4, 0.174], [2.8, 0.128], [3.2, 0.098], [3.6, 0.077], [4, 0.063]], "smooth": true }
              ],
              "segments": [{ "from": [1, 0], "to": [1, 1], "dash": true }],
              "labels": [
                { "x": 0.5, "y": 0.16, "text": "zero inside" },
                { "x": 2.5, "y": 0.62, "text": "falls as 1/r²" }
              ]
            },
            {
              "x": [0, 4], "y": [0, 1.3],
              "axisX": "r", "axisY": "E",
              "ticksX": { "at": [1, 2, 3], "labels": ["R", "2R", "3R"] },
              "ticksY": { "at": [1], "labels": ["E(R)"] },
              "curves": [
                { "c": "pts", "pts": [[0, 0], [1, 1]] },
                { "c": "pts", "pts": [[1, 1], [1.2, 0.694], [1.4, 0.51], [1.6, 0.391], [1.8, 0.309], [2, 0.25], [2.4, 0.174], [2.8, 0.128], [3.2, 0.098], [3.6, 0.077], [4, 0.063]], "smooth": true }
              ],
              "points": [{ "x": 1, "y": 1, "label": "peak", "at": "nw" }],
              "labels": [
                { "x": 0.62, "y": 0.86, "text": "rises as r" },
                { "x": 2.5, "y": 0.62, "text": "falls as 1/r²" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "The cavity trick, by superposition",
          "steps": [
            "<b>Write the holed body as a difference.</b> A sphere with a cavity is a complete solid sphere <i>minus</i> a small solid sphere that would exactly fill the hole. Both pieces have the same density ρ.",
            "<b>Use the vector interior field for each piece:</b> inside a uniform sphere, <i>E<sub>g</sub></i> = −(4/3)π<i>G</i>ρ times the position vector measured <i>from that sphere's own centre</i>.",
            "<b>Subtract at a point <i>P</i> inside the cavity.</b> The two position vectors are measured from the two different centres, and their difference is the vector joining the centres.",
            "<b>Watch the point cancel.</b> Whatever <i>P</i> was drops out, leaving <i>E<sub>g</sub></i> = (4/3)π<i>G</i>ρ<i>d</i> where <i>d</i> is the centre-to-centre distance, directed parallel to the line of centres and toward the big sphere's centre.",
            "<b>Read the result as uniformity:</b> every point in the hollow feels the identical pull. That the answer contains no trace of <i>P</i> is the check that you did the subtraction as vectors and not as magnitudes."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 7.6 · THE CAVITY THAT CARRIES A UNIFORM FIELD",
          "chips": ["full sphere minus a small one"],
          "captions": [
            "The big sphere is centred at O and the cavity at O′, a distance d = R/2 apart. Take any two points P and Q inside the hole: both feel exactly the same field, (4/3)πGρd, parallel to OO′ and pointing toward O. The position of the test point cancels out of the subtraction, and that cancellation is the whole result."
          ],
          "frames": [
            {
              "x": [-3.6, 3.6], "y": [-2.88, 2.88], "axes": "none", "aspect": 0.8,
              "curves": [
                { "c": "circle", "cx": 0, "cy": 0, "r": 2.7 },
                { "c": "circle", "cx": 1.35, "cy": 0, "r": 1.35, "dash": true }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "dot", "label": "O" },
                { "x": 1.35, "y": 0, "glyph": "dot", "label": "O′" },
                { "x": 1.9, "y": 0.7, "glyph": "cross", "label": "P" },
                { "x": 1.5, "y": -0.75, "glyph": "cross", "label": "Q" }
              ],
              "segments": [{ "from": [0, 0], "to": [1.35, 0], "label": "d" }],
              "arrows": [
                { "from": [1.9, 0.7], "to": [0.95, 0.7], "tone": "amber", "label": "E" },
                { "from": [1.5, -0.75], "to": [0.55, -0.75], "tone": "amber", "label": "E" }
              ],
              "labels": [
                { "x": -1.55, "y": 1.85, "text": "solid, density ρ" },
                { "x": 1.35, "y": 1.05, "text": "cavity" }
              ]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Two point masses of 4 kg and 9 kg are placed 1.0 m apart. Find the point on the line joining them where the net gravitational field is zero.",
          "steps": [
            "Between the two masses the fields point in opposite directions, so they can cancel. Let the point be a distance <i>x</i> from the 4 kg mass, so it is (1 − <i>x</i>) from the 9 kg mass.",
            "Equal magnitudes: <i>G</i>(4)/<i>x</i><sup>2</sup> = <i>G</i>(9)/(1 − <i>x</i>)<sup>2</sup>. The <i>G</i> cancels, which is why no numerical value of <i>G</i> is needed.",
            "Take square roots: 2/<i>x</i> = 3/(1 − <i>x</i>), so 2(1 − <i>x</i>) = 3<i>x</i>, giving 5<i>x</i> = 2 and <i>x</i> = 0.40 m.",
            "The null point lies 0.40 m from the 4 kg mass and 0.60 m from the 9 kg mass, so it sits closer to the <b>smaller</b> mass. That has to be so: the weaker pull needs a shorter distance to match the stronger one."
          ],
          "ans": "0.40 m from the 4 kg mass, and 0.60 m from the 9 kg mass"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A hollow shell and a solid sphere have the same mass <i>M</i> and the same radius <i>R</i>. Compare the gravitational field at the centre of each and at the surface of each.",
          "steps": [
            "Think in cases; no calculation is needed. At the centre, the shell gives zero by the shell theorem. The solid sphere gives <i>GMr</i>/<i>R</i><sup>3</sup> evaluated at <i>r</i> = 0, which is also zero. <b>Both are zero at the centre.</b>",
            "At the surface, both give <i>GM</i>/<i>R</i><sup>2</sup>. From the surface outward, any spherically symmetric body of mass <i>M</i> looks exactly like a point mass, so they are <b>identical</b> there.",
            "The trap runs in two directions: some students give the solid sphere a non-zero field at its centre, and others expect the two bodies to differ at the surface. Neither is right.",
            "They differ only strictly inside: zero throughout the shell, rising linearly inside the solid sphere."
          ],
          "ans": "both zero at the centre · both GM/R<sup>2</sup> at the surface · different only inside"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A uniform ring of mass <i>M</i> and radius <i>a</i> produces a field along its axis. At what axial distance is the field greatest, and what is that greatest value?",
          "steps": [
            "The axial field is <i>E<sub>g</sub></i> = <i>GMx</i>/(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>)<sup>3/2</sup>. Differentiate and set the numerator of the derivative to zero.",
            "That gives (<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>) − 3<i>x</i><sup>2</sup> = 0, so <i>a</i><sup>2</sup> = 2<i>x</i><sup>2</sup> and <i>x</i> = <i>a</i>/√2.",
            "Substitute back: <i>a</i><sup>2</sup> + <i>x</i><sup>2</sup> = 3<i>a</i><sup>2</sup>/2, so (<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>)<sup>3/2</sup> = 3√3 <i>a</i><sup>3</sup>/(2√2).",
            "<i>E</i><sub>max</sub> = <i>GM</i>(<i>a</i>/√2) × 2√2/(3√3 <i>a</i><sup>3</sup>) = 2<i>GM</i>/(3√3 <i>a</i><sup>2</sup>) ≈ 0.385 <i>GM</i>/<i>a</i><sup>2</sup>. Zero at the centre, a peak here, then decay: a non-monotonic profile JEE loves."
          ],
          "ans": "peak at x = a/√2, of magnitude 2GM/(3√3 a<sup>2</sup>) ≈ 0.385 GM/a<sup>2</sup>"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A solid sphere of radius <i>R</i> and uniform density ρ has a spherical cavity of radius <i>R</i>/2 scooped out, positioned so that the cavity's surface touches the sphere's centre. Show that the field everywhere inside the cavity is uniform, and find it.",
          "steps": [
            "Superposition: sphere-with-cavity = full solid sphere minus a small solid sphere of the same density filling the hole. Their centres are <i>O</i> and <i>O</i>′, a distance <i>d</i> = <i>R</i>/2 apart.",
            "Inside a uniform solid sphere the field is <b>−(4/3)π<i>G</i>ρ times the position vector from that sphere's own centre</b>, which follows from <i>E</i> = <i>GM</i><sub>enc</sub>/<i>r</i><sup>2</sup> with <i>M</i><sub>enc</sub> = (4/3)π<i>r</i><sup>3</sup>ρ.",
            "At a point <i>P</i> in the cavity, subtract: <i>E</i> = −(4/3)π<i>G</i>ρ(<i>r</i><sub>OP</sub> − <i>r</i><sub>O′P</sub>). But <i>r</i><sub>OP</sub> − <i>r</i><sub>O′P</sub> is the fixed vector <i>OO</i>′, and <i>P</i> has cancelled entirely.",
            "So <i>E</i> = (4/3)π<i>G</i>ρ<i>d</i> = (4/3)π<i>G</i>ρ(<i>R</i>/2) = (2/3)π<i>G</i>ρ<i>R</i>, the same at every point in the hollow, directed along the line of centres toward <i>O</i>. Every point in the hole feels the identical pull, which is one of the most elegant consequences of the inverse-square law."
          ],
          "ans": "uniform, of magnitude (2/3)πGρR, directed toward the big sphere's centre"
        },
        {
          "t": "mcq",
          "q": "The gravitational field intensity at a point inside a uniform spherical shell is:",
          "opts": [
            { "label": "<i>GM</i>/<i>r</i><sup>2</sup>", "nudge": "That is the field outside the shell, where it does behave as a point mass." },
            { "label": "<i>GM</i>/<i>R</i><sup>2</sup>", "nudge": "That is the value at the surface, the largest the shell's field ever reaches." },
            { "label": "zero", "nudge": null },
            { "label": "<i>GMr</i>/<i>R</i><sup>3</sup>", "nudge": "That is the field inside a <b>solid</b> sphere. Confusing shell with solid sphere is the classic error here." }
          ],
          "correct": 2,
          "solution": "By the shell theorem the contributions from every part of a uniform shell cancel exactly at any interior point, giving zero field everywhere inside. The potential inside is a non-zero constant, but the field, which is the slope of that potential, is zero."
        },
        {
          "t": "mcq",
          "q": "For a uniform solid sphere, the gravitational field is greatest at:",
          "opts": [
            { "label": "the centre", "nudge": "The field is zero there: every pull is balanced by an equal pull from the opposite side." },
            { "label": "the surface", "nudge": null },
            { "label": "infinity", "nudge": "The field dies away to zero at infinity, which is the opposite of a maximum." },
            { "label": "halfway to the surface", "nudge": "Inside the field rises linearly, so at r = R/2 it is only half the surface value, GM/2R<sup>2</sup>." }
          ],
          "correct": 1,
          "solution": "Inside, E = GMr/R<sup>3</sup> rises linearly with r. Outside, E = GM/r<sup>2</sup> falls. The two meet at r = R, so the field peaks exactly at the surface with the value GM/R<sup>2</sup>. Rise, then fall, peak at the surface, is the shape to remember."
        },
        {
          "t": "mcq",
          "q": "The gravitational field on the axis of a uniform ring is zero at:",
          "opts": [
            { "label": "the centre of the ring", "nudge": null },
            { "label": "<i>x</i> = <i>a</i>/√2", "nudge": "That is where the field is at its maximum, not its zero. The two are easy to swap under time pressure." },
            { "label": "<i>x</i> = <i>a</i>", "nudge": "Nothing special happens there; the field is non-zero and past its peak." },
            { "label": "nowhere on the axis", "nudge": "The centre genuinely gives zero, by pairwise cancellation of diametrically opposite elements." }
          ],
          "correct": 0,
          "solution": "At the centre every element's pull is exactly cancelled by the element diametrically opposite, so the net field is zero. Note that the potential there is at its most negative, −GM/a, which is a reminder that zero field does not mean zero potential."
        },
        {
          "t": "mcq",
          "q": "A particle sits at the midpoint of the line joining two equal point masses <i>M</i> separated by 2<i>d</i>. The gravitational field and the gravitational potential at that midpoint are respectively:",
          "opts": [
            { "label": "zero and zero", "nudge": "The field does vanish, but the potential does not: two negative numbers cannot cancel." },
            { "label": "zero and −2<i>GM</i>/<i>d</i>", "nudge": null },
            { "label": "2<i>GM</i>/<i>d</i><sup>2</sup> and zero", "nudge": "This adds the two field vectors as if they were scalars, and then zeroes the one quantity that really does add." },
            { "label": "zero and −<i>GM</i>/<i>d</i>", "nudge": "This counts only one of the two masses' contributions to the potential." }
          ],
          "correct": 1,
          "solution": "The two field vectors at the midpoint are equal and opposite, so the field cancels to zero. Potential is a scalar and simply adds: V = −GM/d − GM/d = −2GM/d. Field is a vector and can cancel; potential is a scalar and accumulates."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Define gravitational field intensity, give its SI unit and dimensional formula, and say what the Earth's surface field is called.", "a": "Force per unit test mass, <i>E<sub>g</sub></i> = <i>F</i>/<i>m</i><sub>0</sub>; unit N/kg; dimensions [<i>L T</i><sup>−2</sup>]. At the Earth's surface it is called <i>g</i>, the acceleration due to gravity." },
            { "q": "[NEET] The field at distance <i>r</i> inside a uniform solid sphere of radius <i>R</i> is <i>E</i>. What is the field at 2<i>R</i> from the centre, in terms of <i>E</i>?", "a": "Inside <i>E</i> = <i>GMr</i>/<i>R</i><sup>3</sup>; at 2<i>R</i>, <i>E</i>′ = <i>GM</i>/4<i>R</i><sup>2</sup>. Dividing, <i>E</i>′ = <i>ER</i>/(4<i>r</i>)." },
            { "q": "[JEE Main] Two concentric uniform shells have masses <i>M</i><sub>1</sub> and <i>M</i><sub>2</sub> and radii <i>R</i><sub>1</sub> < <i>R</i><sub>2</sub>. Find the field at distance <i>r</i> when (i) <i>r</i> < <i>R</i><sub>1</sub>, (ii) <i>R</i><sub>1</sub> < <i>r</i> < <i>R</i><sub>2</sub>, (iii) <i>r</i> > <i>R</i><sub>2</sub>.", "a": "(i) 0, inside both. (ii) <i>GM</i><sub>1</sub>/<i>r</i><sup>2</sup>, only the inner shell counts. (iii) <i>G</i>(<i>M</i><sub>1</sub> + <i>M</i><sub>2</sub>)/<i>r</i><sup>2</sup>." },
            { "q": "[JEE Main] A uniform ring of mass <i>M</i> and radius <i>R</i> has a particle of mass <i>m</i> on its axis at distance <i>R</i> from the centre. Find the force on the particle.", "a": "<i>F</i> = <i>GMmR</i>/(<i>R</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup> = <i>GMm</i>/(2√2 <i>R</i><sup>2</sup>)." },
            { "q": "[JEE Advanced] Inside a uniform solid sphere of radius <i>R</i> and density ρ, a spherical cavity is cut whose diameter coincides with a radius of the sphere. Find the field at the centre of the cavity.", "a": "The cavity has radius <i>R</i>/2 and its centre is <i>d</i> = <i>R</i>/2 from the sphere's centre, so <i>E</i> = (4/3)π<i>G</i>ρ(<i>R</i>/2) = (2/3)π<i>G</i>ρ<i>R</i>, uniform throughout the cavity and directed toward the sphere's centre." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Confusing shell with solid sphere on the inside.</b> Inside a shell the field is zero everywhere. Inside a solid sphere it rises linearly as <i>GMr</i>/<i>R</i><sup>3</sup>. Drawing the wrong E-r graph is a frequent and entirely avoidable mistake.",
            "<b>Adding field magnitudes instead of vectors.</b> The field is a vector, so two equal fields in opposite directions cancel. Potential, being a scalar, would add in exactly the same situation, and that asymmetry is the point of half the questions here.",
            "<b>Believing zero field means zero potential.</b> Inside a shell the field is zero but the potential is a constant −<i>GM</i>/<i>R</i>; at a ring's centre the field is zero but the potential is −<i>GM</i>/<i>a</i>. The field is the <i>slope</i> of the potential, not its value.",
            "<b>Forgetting the only-enclosed-mass rule.</b> Inside a sphere, only the mass within your own radius pulls you; the outer shells contribute nothing at all. That single rule generates every interior-field result in the topic.",
            "<b>Putting a curved body's mass at its centroid.</b> Tempting and wrong: for a semicircular wire, treating the mass as sitting at the mean distance 2<i>R</i>/π overestimates the field at the centre by a factor of π<sup>3</sup>/8 ≈ 3.9. Only the component integral is trustworthy for a curved source."
          ]
        },
        {
          "t": "protip",
          "html": "two habits crack almost every question in this topic. first, \"outside means point mass, inside means enclosed mass only\", which turns nearly every shell or sphere question into a one-line answer with no integration at all. second, for any uniform-sphere interior write the field as a vector, −(4/3)πGρ times the position vector from the centre. that form handles cavity problems instantly by superposition, full sphere minus the sphere that fills the hole, because the test point's position cancels and leaves a uniform (4/3)πGρd right across the cavity."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "E<sub>g</sub> = F/m<sub>0</sub>, in N/kg = m/s<sup>2</sup>, dimensions [L T<sup>−2</sup>]", "note": "at the Earth's surface this is exactly g" },
            { "f": "point mass or outside any sphere: E<sub>g</sub> = GM/r<sup>2</sup>", "note": "shell and solid sphere are indistinguishable from outside" },
            { "f": "shell: 0 inside · GM/R<sup>2</sup> at the surface · GM/r<sup>2</sup> outside", "note": "the interior zero holds however off-centre the point is" },
            { "f": "solid sphere: GMr/R<sup>3</sup> inside, peak at the surface", "note": "or (4/3)πGρr, the vector form cavity problems need" },
            { "f": "ring on axis: GMx/(a<sup>2</sup> + x<sup>2</sup>)<sup>3/2</sup>, peak at x = a/√2", "note": "zero at the centre, and GM/x<sup>2</sup> far away" }
          ],
          "aids": [
            "\"outside, a sphere is a point; inside, only what is beneath you counts\"",
            "\"field is a vector and can cancel; potential is a scalar and adds\""
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Acceleration due to Gravity",
      "chip": "03 THE VALUE OF g",
      "kalam": "height has the 2, depth does not",
      "blocks": [
        {
          "t": "p",
          "html": "The last topic said the Earth pulls on everything near it. This one asks a sharper question: <b>if I let go of something, how fast does that pull make it speed up?</b> That number is the <b>acceleration due to gravity</b>, written <i>g</i>, and near the Earth's surface it is about 9.8 m/s<sup>2</sup>, meaning a dropped stone gains 9.8 m/s of speed every second. You have been using that value since the motion chapter without being told where it comes from. Here is where it comes from, and here is why it is not quite a constant."
        },
        {
          "t": "p",
          "html": "The single most beautiful fact about <i>g</i> is that <b>it does not care what you drop</b>. A cricket ball and a crumpled sheet of paper, a hammer and a feather: in the absence of air they accelerate identically and land together, which is exactly what the astronaut David Scott demonstrated on the Moon. The reason is a cancellation. The Earth pulls harder on a heavier object, since <i>F</i> = <i>GMm</i>/<i>R</i><sup>2</sup> grows with <i>m</i>, but a heavier object is also harder to accelerate, since the same <i>m</i> appears in <i>F</i> = <i>ma</i>. Divide one by the other and the object's mass vanishes completely."
        },
        {
          "t": "think",
          "html": "imagine the Earth running a down escalator that everyone must ride. it makes no difference whether you are a child or a sumo wrestler: the escalator carries you down at the same rate. your mass changes how <i>hard</i> the Earth grips you, but not how <i>fast</i> you descend. that is the whole content of \"g belongs to the Earth, not to the falling body\", and it is why the mass cancels in every free-fall calculation you have ever done."
        },
        {
          "t": "p",
          "html": "That cancellation hands you the formula at once. The pull on a body sitting on the surface is its weight, so <i>GMm</i>/<i>R</i><sup>2</sup> = <i>mg</i>, and <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup>. But <i>g</i> is not a frozen number, because that expression depends on where you stand. <b>Go up</b> a mountain or into orbit and you are further from the centre, so <i>g</i> falls. <b>Go down</b> a mine and, surprisingly, <i>g</i> falls too, because the shell of Earth now above you stops pulling you down at all. <b>Move toward the equator</b> and <i>g</i> falls again, for two separate reasons: the Earth's spin needs part of the pull for centripetal purposes, and the equatorial bulge puts you further from the centre. So <i>g</i> is at its maximum right at the surface, near the poles, and tapers off whichever way you travel from there."
        },
        {
          "t": "def",
          "term": "One more thing worth knowing: gravity cannot be switched off",
          "html": "You can shield a charge from an electric field by sealing it in a hollow metal box, and the field inside genuinely vanishes. <b>There is no such trick for gravity.</b> You cannot block, absorb or screen the gravitational influence of nearby matter with any material or any hollow shell, because gravity is independent of the intervening medium and there is no negative mass to cancel it with. Wherever there is mass, its gravity reaches through everything. This is also why the surface <i>g</i> is numerically identical to the gravitational field strength there: <i>g</i> simply <i>is</i> the field the Earth sets up, felt as an acceleration."
        },
        {
          "t": "defgrid",
          "title": "The six symbols of g",
          "rows": [
            { "k": "<i>g</i>", "v": "acceleration due to gravity at the surface, in m/s<sup>2</sup>; a vector pointing at the planet's centre" },
            { "k": "<i>M</i>, <i>R</i>", "v": "mass and radius of the planet, in kg and m" },
            { "k": "ρ", "v": "mean density of the planet, in kg/m<sup>3</sup>" },
            { "k": "<i>h</i>", "v": "height above the surface, in m" },
            { "k": "<i>d</i>", "v": "depth below the surface, in m" },
            { "k": "ω, λ", "v": "the planet's rotational angular speed in rad/s, and the latitude, which carries no unit because only its cosine appears" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · g AT THE SURFACE, TWO WAYS",
          "main": "<i>g</i> = <i>GM</i> ÷ <i>R</i><sup>2</sup> = (4/3)π<i>G R</i>ρ",
          "legend": [
            "<i>g</i> is in m/s<sup>2</sup>, <i>M</i> in kg, <i>R</i> in m, ρ in kg/m<sup>3</sup>, and <i>G</i> = 6.67 × 10<sup>−11</sup> N m<sup>2</sup>/kg<sup>2</sup>",
            "the second form comes from substituting <i>M</i> = (4/3)π<i>R</i><sup>3</sup>ρ, and it is the one to use whenever densities are being compared",
            "<i>g</i> is independent of the mass, size, shape and composition of the falling body, and depends only on the planet",
            "the useful reading: at fixed density <i>g</i> ∝ <i>R</i>, while at fixed mass <i>g</i> ∝ 1/<i>R</i><sup>2</sup>"
          ],
          "note": "For the Earth, GM = gR<sup>2</sup> = 4.0 × 10<sup>14</sup> in SI units. That single product turns up in every satellite calculation in this chapter, so it is worth carrying."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · HOW g CHANGES WITH PLACE",
          "tag": "the depth form assumes uniform density",
          "main": "altitude: <i>g<sub>h</sub></i> = <i>gR</i><sup>2</sup> ÷ (<i>R</i> + <i>h</i>)<sup>2</sup>, and for <i>h</i> ≪ <i>R</i>, <i>g<sub>h</sub></i> ≈ <i>g</i>(1 − 2<i>h</i>/<i>R</i>)<br>depth: <i>g<sub>d</sub></i> = <i>g</i>(1 − <i>d</i>/<i>R</i>)<br>rotation: <i>g</i><sub>λ</sub> = <i>g</i> − ω<sup>2</sup><i>R</i> cos<sup>2</sup>λ",
          "legend": [
            "<i>h</i> is height and <i>d</i> is depth, both in m; <i>R</i> is the planet's radius in m and <i>g</i> its unmodified surface value in m/s<sup>2</sup>",
            "ω is the planet's angular speed of rotation in rad/s and λ the latitude, so cos<sup>2</sup>λ is a pure number between 0 and 1",
            "the altitude approximation is trustworthy only for <i>h</i> ≪ <i>R</i>; for a satellite you must use the exact (<i>R</i> + <i>h</i>)<sup>2</sup> form",
            "at the equator λ = 0 and the rotational reduction is largest; at the poles cos λ = 0 and rotation has no effect at all"
          ],
          "note": "Height has the 2, depth does not. That is why, for equal small changes in g, the depth needed is twice the height: d = 2h."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · g AT THE SURFACE, AND HOW IT FALLS WITH ALTITUDE",
          "steps": [
            {
              "eq": "a body of mass <i>m</i> on the surface feels <i>F</i> = <i>GMm</i>/<i>R</i><sup>2</sup>",
              "why": "The planet is treated as a uniform sphere, so by the shell theorem its whole mass acts as a point at the centre and the distance to use is the full radius <i>R</i>."
            },
            {
              "eq": "that force <i>is</i> the body's weight, so <i>mg</i> = <i>GMm</i>/<i>R</i><sup>2</sup> and <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup>",
              "why": "Weight is not a separate force from gravity; it is the same force given a shorter name. The mass <i>m</i> cancels, which is the algebra behind the hammer and the feather."
            },
            {
              "eq": "at height <i>h</i> the distance is (<i>R</i> + <i>h</i>), so <i>g<sub>h</sub></i> = <i>GM</i>/(<i>R</i> + <i>h</i>)<sup>2</sup> = <i>g</i>(1 + <i>h</i>/<i>R</i>)<sup>−2</sup>",
              "why": "From outside, the planet still behaves as a point mass at its centre, so nothing changes except the distance. Simply replace <i>R</i> by <i>R</i> + <i>h</i>."
            },
            {
              "eq": "for <i>h</i> ≪ <i>R</i>, expand: <i>g<sub>h</sub></i> ≈ <i>g</i>(1 − 2<i>h</i>/<i>R</i>)",
              "why": "The binomial approximation (1 + <i>x</i>)<sup>−2</sup> ≈ 1 − 2<i>x</i> holds for small <i>x</i>. It says <i>g</i> falls twice as fast per unit height as a naive guess, so a 1 percent rise in altitude costs about 2 percent of <i>g</i>. Trust it only while <i>h</i> is genuinely small."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY g ALSO FALLS AS YOU DIG DOWN",
          "steps": [
            {
              "eq": "at depth <i>d</i> your distance from the centre is (<i>R</i> − <i>d</i>), and the shell of matter above you contributes nothing",
              "why": "This is the surprising step, and it is pure shell theorem: you are now inside the outer layer, and a uniform shell exerts no net force on anything inside it. Only the inner sphere of radius (<i>R</i> − <i>d</i>) pulls you at all."
            },
            {
              "eq": "with uniform density, <i>M</i><sub>inner</sub>/<i>M</i> = (<i>R</i> − <i>d</i>)<sup>3</sup>/<i>R</i><sup>3</sup>",
              "why": "Mass goes as volume goes, and volume goes as the cube of the radius. This is the one place the uniform-density assumption really bites."
            },
            {
              "eq": "<i>g<sub>d</sub></i> = <i>GM</i><sub>inner</sub>/(<i>R</i> − <i>d</i>)<sup>2</sup> = <i>GM</i>(<i>R</i> − <i>d</i>)/<i>R</i><sup>3</sup> = <i>g</i>(1 − <i>d</i>/<i>R</i>)",
              "why": "Three powers of (<i>R</i> − <i>d</i>) upstairs against two downstairs leave one, so <i>g</i> falls off linearly with depth rather than as an inverse square. At <i>d</i> = <i>R</i>, the centre, it reaches exactly zero: a body there is weightless, though it still has its full mass and inertia."
            },
            {
              "eq": "reality check: the real Earth's <i>g</i> first <i>rises</i> slightly as you descend",
              "why": "The uniform-density assumption is false for the Earth, whose iron core is far denser than its crust. Concentrating mass centrally props the interior field up, so <i>g</i> peaks a long way below the surface rather than at it. The formula above is the uniform-density special case, not a law of nature."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · g FROM THE CENTRE OUTWARD",
          "chips": ["one curve, two regimes"],
          "captions": [
            "Inside a uniform planet, g climbs in a straight line from zero at the centre to its full value at the surface. Outside, it falls away as the inverse square. The maximum is exactly at the surface, which is why g decreases whether you climb a mountain or descend a mine. Two regimes, one continuous curve, one peak."
          ],
          "frames": [
            {
              "x": [0, 3.2], "y": [0, 1.25],
              "axisX": "r", "axisY": "g",
              "ticksX": { "at": [1, 2, 3], "labels": ["R", "2R", "3R"] },
              "ticksY": { "at": [0.5, 1], "labels": ["g/2", "g"] },
              "curves": [
                { "c": "pts", "pts": [[0, 0], [1, 1]] },
                { "c": "pts", "pts": [[1, 1], [1.2, 0.694], [1.4, 0.51], [1.6, 0.391], [1.8, 0.309], [2, 0.25], [2.4, 0.174], [2.8, 0.128], [3.2, 0.098]], "smooth": true }
              ],
              "points": [{ "x": 1, "y": 1, "label": "peak", "at": "nw" }],
              "labels": [
                { "x": 0.66, "y": 0.28, "text": "depth: linear" },
                { "x": 2.15, "y": 0.5, "text": "altitude: 1/r²" }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 7.7 · A TUNNEL THROUGH THE EARTH",
          "chips": ["gravity as a spring"],
          "captions": [
            "Drop a ball into a frictionless tunnel bored through the centre. At distance r from the centre only the sphere beneath it pulls, so the restoring force is F = −(mg/R)r: proportional to the displacement and always pointing home. That is Hooke's law, so the ball oscillates in simple harmonic motion with period 2π√(R/g) ≈ 84.6 minutes."
          ],
          "frames": [
            {
              "x": [-3.6, 3.6], "y": [-2.88, 2.88], "axes": "none", "aspect": 0.8,
              "curves": [{ "c": "circle", "cx": 0, "cy": 0, "r": 2.7 }],
              "segments": [
                { "from": [-0.32, -2.68], "to": [-0.32, 2.68], "soft": true },
                { "from": [0.32, -2.68], "to": [0.32, 2.68], "soft": true }
              ],
              "marks": [
                { "x": 0, "y": 1.5, "glyph": "dot", "label": "m" },
                { "x": 0, "y": 0, "glyph": "plus", "label": "O" }
              ],
              "arrows": [{ "from": [0, 1.35], "to": [0, 0.35], "tone": "amber", "label": "F" }],
              "labels": [
                { "x": -1.7, "y": 1.55, "text": "Earth" },
                { "x": 0.72, "y": 0.85, "text": "r" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Exact form or approximation? Decide before you compute",
          "steps": [
            "<b>Read off the size of the change first.</b> If the question asks for <i>g</i> to become a quarter, a ninth or a half of its surface value, the height involved is comparable to <i>R</i> and the approximation is dead.",
            "<b>Small <i>h</i>, use <i>g</i>(1 − 2<i>h</i>/<i>R</i>).</b> Small means a few kilometres against a 6400 km radius, where the binomial expansion is genuinely accurate.",
            "<b>Large <i>h</i>, use the exact <i>gR</i><sup>2</sup>/(<i>R</i> + <i>h</i>)<sup>2</sup>.</b> This is always safe; the approximation is only ever a shortcut.",
            "<b>For depth there is no choice.</b> <i>g<sub>d</sub></i> = <i>g</i>(1 − <i>d</i>/<i>R</i>) is exact for a uniform planet and has no small-<i>d</i> version, because it is already linear.",
            "<b>Comparing two planets? Switch to a ratio.</b> Use <i>g</i> ∝ <i>M</i>/<i>R</i><sup>2</sup> when masses are given, and <i>g</i> ∝ ρ<i>R</i> when densities are, and never plug in 6.67 × 10<sup>−11</sup> at all."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A planet has mass <i>M</i> = 4.8 × 10<sup>24</sup> kg and radius <i>R</i> = 4.0 × 10<sup>6</sup> m. (a) Find <i>g</i> at its surface. (b) A body weighs 200 N there. Treating the planet as a uniform sphere, what does it weigh at a depth equal to half the radius?",
          "steps": [
            "(a) <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup> = (6.67 × 10<sup>−11</sup>)(4.8 × 10<sup>24</sup>)/(4.0 × 10<sup>6</sup>)<sup>2</sup>.",
            "Numerator = 3.20 × 10<sup>14</sup>; denominator = 1.6 × 10<sup>13</sup>. So <i>g</i> = 20 m/s<sup>2</sup>.",
            "(b) At <i>d</i> = <i>R</i>/2, <i>g<sub>d</sub></i> = <i>g</i>(1 − 1/2) = <i>g</i>/2.",
            "Weight is <i>mg<sub>d</sub></i> = <i>mg</i>/2 = 200/2 = 100 N. The body's <b>mass</b> has not changed at all; only its weight has halved, because the effective <i>g</i> halved."
          ],
          "ans": "g = 20 m/s<sup>2</sup> · weight at depth R/2 is 100 N"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "At what height above the Earth's surface does <i>g</i> fall to one quarter of its surface value? Give the answer in terms of the Earth's radius <i>R</i>.",
          "steps": [
            "Use the exact form, not the approximation: <i>g<sub>h</sub></i> = <i>gR</i><sup>2</sup>/(<i>R</i> + <i>h</i>)<sup>2</sup> = <i>g</i>/4.",
            "So <i>R</i><sup>2</sup>/(<i>R</i> + <i>h</i>)<sup>2</sup> = 1/4, giving <i>R</i>/(<i>R</i> + <i>h</i>) = 1/2 and <i>R</i> + <i>h</i> = 2<i>R</i>, so <i>h</i> = <i>R</i>.",
            "The trap: a hurried student writes <i>g</i>(1 − 2<i>h</i>/<i>R</i>) = <i>g</i>/4 and gets <i>h</i> = 3<i>R</i>/8. That is wrong, because the linear approximation is valid only for <i>h</i> ≪ <i>R</i>, and here <i>h</i> turns out to equal <i>R</i>, which is as far from small as it gets.",
            "Whenever the demanded change in <i>g</i> is a large factor, a quarter, a ninth, a half, you must use the full (<i>R</i> + <i>h</i>)<sup>2</sup> form. Recognising \"is <i>h</i> small?\" before choosing a formula is the entire skill being tested."
          ],
          "ans": "h = R, that is, one Earth radius above the surface"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "How fast would the Earth have to spin for objects at the equator to become weightless, and how long would the day then be? Take <i>R</i> = 6.4 × 10<sup>6</sup> m and <i>g</i> = 9.8 m/s<sup>2</sup>.",
          "steps": [
            "At the equator λ = 0, so the effective gravity is <i>g</i><sub>eq</sub> = <i>g</i> − ω<sup>2</sup><i>R</i>. Weightlessness means <i>g</i><sub>eq</sub> = 0.",
            "So ω = √(<i>g</i>/<i>R</i>) = √(9.8/6.4 × 10<sup>6</sup>) = √(1.53 × 10<sup>−6</sup>) = 1.24 × 10<sup>−3</sup> rad/s.",
            "The day would be <i>T</i> = 2π/ω = 2π√(<i>R</i>/<i>g</i>) = 2π(808) ≈ 5.08 × 10<sup>3</sup> s ≈ 84.6 minutes.",
            "The Earth currently turns about 17 times slower than that, which is why the real equatorial reduction in <i>g</i> is only about 0.034 m/s<sup>2</sup>. Keep the 84 minute number: it reappears twice more in this chapter."
          ],
          "ans": "ω ≈ 1.24 × 10<sup>−3</sup> rad/s, giving a day of about 84.6 minutes"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A frictionless tunnel is bored straight through the centre of the Earth. A ball is dropped in from the surface. Show that it performs simple harmonic motion and find the period. Treat the Earth as uniform and non-rotating, with <i>R</i> = 6.4 × 10<sup>6</sup> m and <i>g</i> = 9.8 m/s<sup>2</sup>.",
          "steps": [
            "At distance <i>r</i> from the centre only the sphere of radius <i>r</i> pulls the ball, so the local acceleration is <i>g</i>(<i>r</i>) = <i>gr</i>/<i>R</i>, directed toward the centre. The force is therefore <i>F</i> = −(<i>mg</i>/<i>R</i>)<i>r</i>.",
            "That is Hooke's law with an effective spring constant <i>k</i> = <i>mg</i>/<i>R</i>: a force proportional to the displacement and always pointing back to equilibrium. Note that the three equations of motion are useless here, since this acceleration is not constant.",
            "So ω = √(<i>k</i>/<i>m</i>) = √(<i>g</i>/<i>R</i>) and <i>T</i> = 2π√(<i>R</i>/<i>g</i>) = 2π√(6.4 × 10<sup>6</sup>/9.8) ≈ 5.08 × 10<sup>3</sup> s ≈ 84.6 minutes.",
            "The same magic number as the weightless-equator day above, and, as Topic 05 will show, the same as the period of a satellite skimming the surface. All three are 2π√(<i>R</i>/<i>g</i>), and a gravitation problem has quietly become an oscillations problem."
          ],
          "ans": "SHM with T = 2π√(R/g) ≈ 84.6 minutes, whatever the ball's mass"
        },
        {
          "t": "mcq",
          "q": "At a height <i>h</i> = <i>R</i> above the Earth's surface, the acceleration due to gravity is what fraction of its surface value?",
          "opts": [
            { "label": "<i>g</i>/2", "nudge": "This uses a 1/(R + h) dependence, forgetting that gravity falls as the square of the distance." },
            { "label": "<i>g</i>/4", "nudge": null },
            { "label": "<i>g</i>/3", "nudge": "There is no relation in this chapter that produces a factor of three here." },
            { "label": "zero", "nudge": "This confuses high altitude with infinite distance. Gravity reaches zero only at infinity, never at a finite height." }
          ],
          "correct": 1,
          "solution": "g<sub>h</sub> = gR<sup>2</sup>/(R + h)<sup>2</sup>. With h = R the denominator is (2R)<sup>2</sup> = 4R<sup>2</sup>, so g<sub>h</sub> = g/4."
        },
        {
          "t": "mcq",
          "q": "A body is carried from the Earth's surface to the top of a high mountain, and then down into a deep mine. Compared with the surface value, the acceleration due to gravity:",
          "opts": [
            { "label": "increases on the mountain, decreases in the mine", "nudge": "This has altitude backwards: moving further from the centre always weakens the pull." },
            { "label": "decreases on the mountain, increases in the mine", "nudge": "This is the classic misconception that deeper means stronger gravity. Digging down removes the shell above you from the calculation entirely." },
            { "label": "decreases in both cases", "nudge": null },
            { "label": "increases in both cases", "nudge": "Both halves are wrong; the surface is where g is largest." }
          ],
          "correct": 2,
          "solution": "g is maximum at the surface. Go up and you are further from the centre; go down and less mass is left beneath you. Either way g falls, and this surface-maximum behaviour is the conceptual heart of the topic."
        },
        {
          "t": "mcq",
          "q": "Two identical balls are dropped, one near a pole and one near the equator. Ignoring air resistance, the ball near the pole will:",
          "opts": [
            { "label": "accelerate slightly faster", "nudge": null },
            { "label": "accelerate slightly slower", "nudge": "This reverses both effects: the poles have no rotational reduction and a smaller radius, so both push g up there." },
            { "label": "accelerate at exactly the same rate", "nudge": "This would need the Earth to be a perfect non-rotating sphere, and it is neither." },
            { "label": "not accelerate at all", "nudge": "Gravity acts everywhere on the Earth's surface; nothing switches it off at a pole." }
          ],
          "correct": 0,
          "solution": "Effective g is largest at the poles for two reinforcing reasons: cos λ = 0 there, so the rotational term ω<sup>2</sup>R cos<sup>2</sup>λ vanishes, and the polar radius is about 21 km smaller, which raises GM/R<sup>2</sup>. A board answer that names only one of the two loses marks."
        },
        {
          "t": "mcq",
          "q": "If both the mass and the radius of the Earth were halved, the surface acceleration due to gravity would:",
          "opts": [
            { "label": "remain unchanged", "nudge": "This assumes the two effects cancel, but one is linear and the other is squared, so they cannot." },
            { "label": "double", "nudge": null },
            { "label": "halve", "nudge": "This counts only the mass change and ignores the radius entirely." },
            { "label": "become one quarter", "nudge": "This applies the radius effect in the wrong direction: a smaller radius raises g, it does not lower it." }
          ],
          "correct": 1,
          "solution": "g ∝ M/R<sup>2</sup>. Halving M multiplies g by 1/2; halving R multiplies it by 4. Net effect (1/2)(4) = 2, so g doubles. Mass enters linearly and radius as a square: handle them separately."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Planet A has twice the radius of planet B, but the same mass. Find the ratio of their surface gravities, <i>g<sub>A</sub></i> : <i>g<sub>B</sub></i>.", "a": "At fixed mass <i>g</i> ∝ 1/<i>R</i><sup>2</sup>, so doubling the radius quarters the gravity: 1 : 4." },
            { "q": "[NEET] At what depth below the Earth's surface does <i>g</i> fall to 40 percent of its surface value? Assume uniform density.", "a": "<i>g</i>(1 − <i>d</i>/<i>R</i>) = 0.40<i>g</i> gives <i>d</i>/<i>R</i> = 0.60, so <i>d</i> = 0.60<i>R</i>." },
            { "q": "[JEE Main] The change in <i>g</i> at a small height <i>h</i> equals the change at a small depth <i>d</i>. Find the relation between <i>h</i> and <i>d</i>.", "a": "The changes are 2<i>gh</i>/<i>R</i> and <i>gd</i>/<i>R</i>. Setting them equal gives <i>d</i> = 2<i>h</i>: height has the 2, depth does not." },
            { "q": "[JEE Main] Two planets have mean densities in the ratio 1 : 2 and radii in the ratio 3 : 1. Find the ratio of their surface gravities.", "a": "<i>g</i> ∝ ρ<i>R</i>, so the ratio is (1 × 3) : (2 × 1) = 3 : 2." },
            { "q": "[JEE Advanced] A planet has the same mean density as the Earth but four times the surface gravity. Find its radius in terms of the Earth's <i>R</i>, and the ratio of the two masses.", "a": "At fixed density <i>g</i> ∝ <i>R</i>, so the radius is 4<i>R</i>. Mass ∝ ρ<i>R</i><sup>3</sup>, so the mass ratio is 4<sup>3</sup> : 1 = 64 : 1." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Using the altitude approximation when <i>h</i> is not small.</b> <i>g</i>(1 − 2<i>h</i>/<i>R</i>) is a small-height shortcut. For satellites, or any <i>h</i> comparable to <i>R</i>, use the exact <i>gR</i><sup>2</sup>/(<i>R</i> + <i>h</i>)<sup>2</sup>. This single confusion produces more wrong answers here than anything else.",
            "<b>Swapping the altitude and depth formulas.</b> Altitude carries a factor of 2 in (1 − 2<i>h</i>/<i>R</i>); depth does not, being (1 − <i>d</i>/<i>R</i>). Memorise it as one line: height has the 2, depth does not.",
            "<b>Thinking <i>g</i> depends on the falling body.</b> It does not. <i>g</i> is fixed by the planet's mass, radius, density and spin. <b>Weight</b> depends on the body, through <i>mg</i>; <i>g</i> itself never does.",
            "<b>Naming only one reason the equator is lighter.</b> Both act together: the rotational reduction ω<sup>2</sup><i>R</i>, and the equatorial bulge that puts you further from the centre. A board answer with only one of them is a half answer.",
            "<b>Trusting <i>g<sub>d</sub></i> = <i>g</i>(1 − <i>d</i>/<i>R</i>) for the real Earth.</b> It assumes uniform density, and the real Earth has a dense iron core, so its <i>g</i> actually rises a little as you first descend. Exam problems that specify a layered or graded planet are testing exactly this."
          ]
        },
        {
          "t": "protip",
          "html": "two things to burn in. first, reason in ratios with g ∝ M/R<sup>2</sup>, or better with g ∝ ρR when densities are the given: for any compare-two-planets question you will finish before you would have finished typing 6.67 × 10<sup>−11</sup>. second, memorise the magic period T = 2π√(R/g) ≈ 84 minutes, which is simultaneously the tunnel oscillation, the surface-skimming satellite, and the day-length for equatorial weightlessness. worth knowing too: the tunnel result does not need the tunnel to pass through the centre. any straight chord gives the same 84 minutes and the same 42 minute crossing, because the interior field is exactly proportional to displacement and its component along any chord inherits that."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "g = GM/R<sup>2</sup> = (4/3)πGRρ, dimensions [L T<sup>−2</sup>]", "note": "independent of the falling body, in mass, size, shape and composition" },
            { "f": "altitude: g<sub>h</sub> = gR<sup>2</sup>/(R + h)<sup>2</sup> ≈ g(1 − 2h/R)", "note": "the approximation only for h ≪ R, the exact form always" },
            { "f": "depth: g<sub>d</sub> = g(1 − d/R), zero at the centre", "note": "uniform density assumed; the real Earth rises first" },
            { "f": "rotation: g<sub>λ</sub> = g − ω<sup>2</sup>R cos<sup>2</sup>λ", "note": "smallest at the equator, untouched at the poles" },
            { "f": "g is a maximum at the surface", "note": "it falls going up and it falls going down" }
          ],
          "aids": [
            "\"height has the 2, depth does not, so d = 2h\"",
            "\"same density, g tracks R; same mass, g fights R squared\""
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Gravitational Potential and Energy",
      "chip": "04 POTENTIAL",
      "kalam": "attractive means negative, and closer means more negative",
      "blocks": [
        {
          "t": "p",
          "html": "So far the chapter has been about the gravitational <b>force</b>, a pull you can feel right now. This topic is about gravitational <b>energy</b>: energy stored in the arrangement of masses, purely because of where they sit relative to each other. Lift a stone and you have stored energy in the stone-and-Earth system; let go and that stored energy turns back into motion. <b>Gravitational potential energy <i>U</i></b> is the bookkeeping of that store, and <b>gravitational potential <i>V</i></b> is the same energy measured per kilogram, which makes it a property of the location itself rather than of whatever you put there."
        },
        {
          "t": "p",
          "html": "Here is the idea that trips up almost everybody, so meet it head on: <b>gravitational potential energy is negative</b>. Not occasionally negative. For two attracting masses, with the standard convention, it is <i>always</i> negative. That follows from where we chose to put the zero, and it is not an accident of algebra: it is the signature of an attractive force and of a bound system."
        },
        {
          "t": "think",
          "html": "picture the region around the Earth as a deep valley, with infinity as the flat ground far away at the rim. we <i>agree</i> to call the stored energy zero when the two masses are infinitely far apart, because out there they barely feel each other and nothing is stored: a clean starting line. now bring a mass in from infinity. gravity pulls it inward and does positive work on it, like a ball rolling <i>down</i> into the valley and speeding up on its own. the system has given energy away, so its store drops below the zero line. the deeper you go, the smaller r gets and the more negative U becomes. climbing back out toward infinity costs you energy and brings U back up toward zero."
        },
        {
          "t": "p",
          "html": "Two consequences fall straight out of that picture. A more negative <i>U</i> means a more <b>tightly bound</b> pair: you would have to supply energy to pull them apart. And a satellite's total energy is negative precisely because it is trapped in the valley, which is what makes its orbit closed. One warning about language: <b>potential energy belongs to the system, not to one body.</b> It makes no sense to say the stone has <i>U</i>; the energy lives in the configuration of stone and Earth together. We say the stone's potential energy only as shorthand."
        },
        {
          "t": "def",
          "term": "The sign convention, restated and held",
          "html": "This is the convention declared in Topic 01, and nothing in this chapter ever departs from it. <b>The zero of gravitational energy is at infinite separation.</b> Therefore <i>U</i> = −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i> and <i>V</i> = −<i>GM</i>/<i>r</i> are negative for every finite <i>r</i>, most negative when the masses are closest, and they rise toward zero as the separation grows. Change the reference point and the <i>number</i> changes, though a <i>difference</i> Δ<i>U</i> never does, which is why the familiar <i>U</i> = <i>mgh</i> from earlier chapters is only ever a change in energy, valid for <i>h</i> ≪ <i>R</i> where gravity is nearly constant. Dropping the minus sign turns an attractive system into a repulsive one, and no amount of correct arithmetic afterwards recovers the mark."
        },
        {
          "t": "defgrid",
          "title": "Potential and energy, symbol by symbol",
          "rows": [
            { "k": "<i>U</i>", "v": "gravitational potential energy of the <i>system</i>, in joule (J), dimensions [<i>M L</i><sup>2</sup><i>T</i><sup>−2</sup>]" },
            { "k": "<i>V</i>", "v": "gravitational potential, energy per unit mass, in J/kg, dimensions [<i>L</i><sup>2</sup><i>T</i><sup>−2</sup>]" },
            { "k": "<i>U</i> = <i>mV</i>", "v": "the link between them: <i>V</i> is the per-kilogram figure, <i>U</i> is the whole bill" },
            { "k": "<i>v<sub>e</sub></i>", "v": "escape velocity, in m/s: the least surface speed that reaches infinity" },
            { "k": "Both are scalars", "v": "add them algebraically with their signs, never as vectors, and never with components" },
            { "k": "Inside a shell", "v": "<i>V</i> = −<i>GM</i>/<i>R</i>, a non-zero constant, even though the field there is exactly zero" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · POTENTIAL ENERGY AND POTENTIAL",
          "tag": "zero taken at infinity, so both are negative",
          "main": "<i>U</i> = −<i>G m</i><sub>1</sub><i>m</i><sub>2</sub> ÷ <i>r</i><br><i>V</i> = <i>U</i>/<i>m</i> = −<i>GM</i> ÷ <i>r</i>, and <i>E<sub>g</sub></i> = −<i>dV</i>/<i>dr</i><br>system of <i>n</i> particles: sum over all <i>n</i>(<i>n</i> − 1)/2 distinct pairs",
          "legend": [
            "<i>U</i> is in joule (J), <i>V</i> in J/kg, <i>r</i> in m and the masses in kg",
            "<i>E<sub>g</sub></i> is the field in N/kg: it is the negative slope of the potential, so the field always points downhill, from high potential to low",
            "<i>n</i> is the number of particles; a three-particle system has 3 pairs, a four-particle system has 6",
            "potential from several masses is the plain algebraic sum <i>V</i> = −<i>G</i> Σ <i>m<sub>i</sub></i>/<i>r<sub>i</sub></i>, with no components and no angles"
          ],
          "note": "The two negatives in E = −dV/dr are doing different jobs. One is in V itself; the other converts a rising potential into an inward force. Keep them apart and the signs never bite."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ESCAPE VELOCITY, AND THE POTENTIAL OF REAL BODIES",
          "main": "<i>v<sub>e</sub></i> = √(2<i>GM</i>/<i>R</i>) = √(2<i>gR</i>) ≈ 11.2 km/s for the Earth<br>at the surface: <i>V</i> = −<i>GM</i>/<i>R</i> = −<i>gR</i><br>shell inside: <i>V</i> = −<i>GM</i>/<i>R</i> · solid sphere centre: <i>V</i> = −3<i>GM</i>/2<i>R</i>",
          "legend": [
            "<i>v<sub>e</sub></i> is the escape velocity in m/s, <i>M</i> and <i>R</i> the planet's mass in kg and radius in m, <i>g</i> its surface gravity in m/s<sup>2</sup>",
            "escape velocity is independent of the escaping body's mass and of its launch direction, because energy is a scalar and carries no direction",
            "inside a uniform solid sphere, <i>V</i> = −<i>GM</i>(3<i>R</i><sup>2</sup> − <i>r</i><sup>2</sup>)/2<i>R</i><sup>3</sup>, which is continuous with −<i>GM</i>/<i>R</i> at the surface",
            "small-height change: Δ<i>U</i> = <i>mgh</i>/(1 + <i>h</i>/<i>R</i>), which becomes the familiar <i>mgh</i> only when <i>h</i> ≪ <i>R</i>"
          ],
          "note": "Potential is deepest at a solid sphere's centre even though the field there is zero. Zero field means a flat potential, not a zero one."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 7.8 · THE VALLEY: U AGAINST r",
          "chips": ["negative everywhere"],
          "captions": [
            "U = −GMm/r plunges toward negative infinity as r approaches zero and rises asymptotically toward zero as r grows without bound. It never crosses the axis. The negative sign is not a mistake: it is the signature of an attractive force and of a bound system, and a more negative value means the two masses are more tightly bound."
          ],
          "frames": [
            {
              "x": [0, 6], "y": [-6.2, 1.2],
              "axisX": "r", "axisY": "U",
              "ticksY": { "at": [0], "labels": ["0"] },
              "curves": [{ "c": "recip", "a": -4 }],
              "points": [
                { "x": 1, "y": -4, "label": "bound", "at": "se" },
                { "x": 4, "y": -1, "label": "nearly free", "at": "se" }
              ],
              "labels": [
                { "x": 3.9, "y": 0.65, "text": "U → 0 as r → ∞" },
                { "x": 3.3, "y": -4.8, "text": "U is negative" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY U = −GMm/r, TAP A LINE",
          "steps": [
            {
              "eq": "<i>U</i>(<i>r</i>) is defined as the negative of the work gravity does in bringing <i>m</i> in from infinity to <i>r</i>",
              "why": "The definition is a bookkeeping rule: whatever energy the field gives up, the store loses. The zero of the store is set at infinity, which is what makes the definition concrete."
            },
            {
              "eq": "the pull on <i>m</i> at distance <i>x</i> is <i>GMm</i>/<i>x</i><sup>2</sup>, pointing inward, so it acts along the direction of motion",
              "why": "The mass is moving inward and the force is inward, so the work is positive: gravity is helping, and the mass speeds up on its own."
            },
            {
              "eq": "<i>W</i><sub>grav</sub> = ∫ from ∞ to <i>r</i> of (−<i>GMm</i>/<i>x</i><sup>2</sup>) <i>dx</i> = +<i>GMm</i>/<i>r</i>",
              "why": "The antiderivative of −1/<i>x</i><sup>2</sup> is +1/<i>x</i>, and the infinity end contributes nothing. The positive sign confirms what the previous line said in words."
            },
            {
              "eq": "<i>U</i>(<i>r</i>) = −<i>W</i><sub>grav</sub> = −<i>GMm</i>/<i>r</i>, and dividing by <i>m</i> gives <i>V</i> = −<i>GM</i>/<i>r</i>",
              "why": "Gravity did positive work, so the system released energy and its store fell below the infinity reference of zero. Dividing out the test mass leaves a quantity belonging to the field and the location alone, which is exactly what potential is."
            },
            {
              "eq": "check by differentiating: −<i>dV</i>/<i>dr</i> = −<i>GM</i>/<i>r</i><sup>2</sup>",
              "why": "The magnitude is the <i>g</i> of the previous topic and the sign says the field points toward <i>M</i>. Potential and field are the same physics written two ways, and this is the check that you have not mixed them up."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "levels",
          "kicker": "FIGURE · THE WELL, AND THE ENERGY TO CLIMB OUT",
          "chips": ["escape as a climb"],
          "captions": [
            "The same valley drawn as a ladder of energies. A mass sitting on the surface is at the bottom rung, U = −GMm/R. At twice the radius it has already climbed halfway back. Escaping means reaching the top rung, U = 0, and the energy needed for that climb is GMm/R, which is mgR. Supply it as kinetic energy at launch and ½mv² = mgR gives the escape speed √(2gR) = 11.2 km/s."
          ],
          "frames": [
            {
              "aspect": 0.72,
              "levels": {
                "scale": "linear",
                "rows": [
                  { "at": 0, "label": "∞", "right": "0", "dash": true },
                  { "at": -0.5, "label": "2R", "right": "−GMm/2R" },
                  { "at": -1, "label": "R", "right": "−GMm/R" }
                ],
                "jumps": [{ "from": -1, "to": 0, "label": "escape", "tone": "amber" }]
              }
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · ESCAPE VELOCITY FROM ENERGY CONSERVATION",
          "steps": [
            {
              "eq": "to escape means to reach infinity, where <i>U</i> = 0, with at least zero kinetic energy left",
              "why": "Escaping is a statement about the whole journey, not about beating gravity at any one moment. The cheapest escape is the one that arrives at infinity with exactly nothing to spare."
            },
            {
              "eq": "gravity is conservative, so ½<i>mv<sub>e</sub></i><sup>2</sup> + (−<i>GMm</i>/<i>R</i>) = 0 + 0",
              "why": "Total mechanical energy is conserved, so the surface total equals the minimum total at infinity, which is zero kinetic plus zero potential. Setting the two sides equal is the entire calculation."
            },
            {
              "eq": "½<i>mv<sub>e</sub></i><sup>2</sup> = <i>GMm</i>/<i>R</i>, so <i>v<sub>e</sub></i> = √(2<i>GM</i>/<i>R</i>)",
              "why": "The launching body's mass <i>m</i> cancels from both sides. Escape velocity is therefore independent of what you are launching, so a pebble and a spaceship need the same speed, though not the same energy."
            },
            {
              "eq": "using <i>GM</i> = <i>gR</i><sup>2</sup>, <i>v<sub>e</sub></i> = √(2<i>gR</i>) = √(2 × 9.8 × 6.4 × 10<sup>6</sup>) = 11.2 km/s",
              "why": "The second form needs only the surface gravity and the radius, both of which you know by heart. And since energy is a scalar with no direction in it, the launch angle never enters: escape velocity is a speed, not a velocity, whatever its traditional name says."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any gravitational energy problem, in five moves",
          "steps": [
            "<b>Name the system and the zero.</b> Every mass that matters is in the system, and the zero is at infinity. Write down <i>U</i> for the initial configuration and for the final one.",
            "<b>For several masses, sum over pairs.</b> <i>n</i> particles give <i>n</i>(<i>n</i> − 1)/2 pairs; work out each <i>Gm<sub>i</sub>m<sub>j</sub></i>/<i>r<sub>ij</sub></i> and add with the minus sign carried through.",
            "<b>Use potential first when you can.</b> <i>V</i> is a scalar, so add the numbers, then get the energy as <i>U</i> = <i>mV</i>. This is far faster than the corresponding force problem, which needs components and angles.",
            "<b>Set total energy at the start equal to total energy at the end.</b> Work done by an external agent moving a mass slowly is Δ<i>U</i>; work done <i>by gravity</i> is −Δ<i>U</i>. Decide in words which one the question wants before you write a sign.",
            "<b>Check the sign and the size.</b> A bound configuration has negative total energy. And if the height involved is comparable to <i>R</i>, <i>mgh</i> is not merely inaccurate but wrong by a large factor, so use the exact difference of −<i>GMm</i>/<i>r</i> terms."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 7.9 · TWO MASSES, PULLED TOGETHER FROM REST",
          "chips": ["momentum splits the energy"],
          "captions": [
            "Released from rest at separation d with nothing else acting, m and 2m fall toward each other and are at separation r when they have speeds v₁ and v₂. Momentum conservation forces mv₁ = 2mv₂, so the lighter mass moves twice as fast and carries twice its share of the released energy. You cannot simply split the energy in half."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 5.9], "axes": "none", "aspect": 0.6,
              "curves": [
                { "c": "circle", "cx": 2.4, "cy": 3.6, "r": 0.45 },
                { "c": "circle", "cx": 7.6, "cy": 3.6, "r": 0.68 }
              ],
              "marks": [
                { "x": 2.4, "y": 3.6, "glyph": "dot", "label": "m" },
                { "x": 7.6, "y": 3.6, "glyph": "dot", "label": "2m" },
                { "x": 1.0, "y": 3.6, "glyph": "open" },
                { "x": 9.0, "y": 3.6, "glyph": "open" }
              ],
              "arrows": [
                { "from": [3.1, 3.6], "to": [4.5, 3.6], "tone": "amber", "label": "v₁" },
                { "from": [6.7, 3.6], "to": [5.3, 3.6], "tone": "amber", "label": "v₂" },
                { "from": [2.4, 1.9], "to": [7.6, 1.9], "head": "both", "label": "r now" },
                { "from": [1.0, 0.9], "to": [9.0, 0.9], "head": "both", "dash": true, "label": "d at start" }
              ],
              "segments": [
                { "from": [2.4, 3.15], "to": [2.4, 1.9], "dash": true, "soft": true },
                { "from": [7.6, 2.92], "to": [7.6, 1.9], "dash": true, "soft": true },
                { "from": [1.0, 3.6], "to": [1.0, 0.9], "dash": true, "soft": true },
                { "from": [9.0, 3.6], "to": [9.0, 0.9], "dash": true, "soft": true }
              ]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Point masses of 2 kg, 4 kg and 6 kg sit at the vertices of an equilateral triangle of side 3.0 m. Find the gravitational potential energy of the system.",
          "steps": [
            "Three particles give 3(3 − 1)/2 = 3 distinct pairs, and all three separations are the same 3.0 m, so the sum factorises.",
            "<i>U</i> = −(<i>G</i>/<i>r</i>)(<i>m</i><sub>1</sub><i>m</i><sub>2</sub> + <i>m</i><sub>1</sub><i>m</i><sub>3</sub> + <i>m</i><sub>2</sub><i>m</i><sub>3</sub>) = −(6.67 × 10<sup>−11</sup>/3.0)(8 + 12 + 24).",
            "The bracket is 44, so <i>U</i> = −(2.223 × 10<sup>−11</sup>)(44) = −9.78 × 10<sup>−10</sup> J.",
            "The value is negative, which says energy would have to be <b>supplied</b>, 9.78 × 10<sup>−10</sup> J of it, to disperse the three masses back to infinity."
          ],
          "ans": "U = −9.78 × 10<sup>−10</sup> J"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Escape velocity from the Earth is 11.2 km/s. Find the escape velocity from a planet whose mass is twice the Earth's and whose radius is half the Earth's.",
          "steps": [
            "Reason in ratios rather than recomputing. Since <i>v<sub>e</sub></i> = √(2<i>GM</i>/<i>R</i>), we have <i>v<sub>e</sub></i> ∝ √(<i>M</i>/<i>R</i>).",
            "The ratio inside the root is (2)/(1/2) = 4, so the speed ratio is √4 = 2.",
            "<i>v<sub>e</sub></i> = 2 × 11.2 = 22.4 km/s.",
            "The trap is forgetting the square root and reporting 4 × 11.2 = 44.8 km/s. Combine the factors <b>inside</b> the root first, then take the root once. The other common slip is confusing escape velocity with orbital velocity, which differ by a factor of √2."
          ],
          "ans": "22.4 km/s"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A body of mass <i>m</i> is lifted slowly from the Earth's surface to a height equal to the Earth's radius <i>R</i>. Find the work done against gravity, and compare it with the naive estimate <i>mgh</i>. Take <i>GM</i> = <i>gR</i><sup>2</sup>.",
          "steps": [
            "Lifting slowly means no kinetic energy is gained, so the work done against gravity is exactly the increase in potential energy, Δ<i>U</i> = <i>U</i><sub>f</sub> − <i>U</i><sub>i</sub>.",
            "The final separation from the centre is <i>R</i> + <i>R</i> = 2<i>R</i>, so <i>W</i> = (−<i>GMm</i>/2<i>R</i>) − (−<i>GMm</i>/<i>R</i>) = <i>GMm</i>/<i>R</i> × (1 − 1/2) = <i>GMm</i>/2<i>R</i>.",
            "Substituting <i>GM</i> = <i>gR</i><sup>2</sup>: <i>W</i> = <i>gR</i><sup>2</sup><i>m</i>/2<i>R</i> = ½<i>mgR</i>.",
            "The school shortcut gives <i>mgh</i> = <i>mgR</i>, exactly <b>double</b> the true answer. The reason: <i>mgh</i> assumes <i>g</i> stays constant, but over a climb as long as <i>R</i> gravity weakens a great deal, so less work is actually needed. Use <i>mgh</i> only when <i>h</i> ≪ <i>R</i>."
          ],
          "ans": "W = ½mgR, which is half the mgh estimate"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Two point masses <i>m</i> and 2<i>m</i> are released from rest in deep space, initially separated by <i>d</i>, with only their mutual gravitation acting. Find their relative velocity of approach when the separation has shrunk to <i>r</i>.",
          "steps": [
            "Two conservation laws are in play. No external force acts, so total momentum stays at its initial value of zero: <i>mv</i><sub>1</sub> = 2<i>mv</i><sub>2</sub>, giving <i>v</i><sub>1</sub> = 2<i>v</i><sub>2</sub>.",
            "Energy: −2<i>Gm</i><sup>2</sup>/<i>d</i> = ½<i>mv</i><sub>1</sub><sup>2</sup> + ½(2<i>m</i>)<i>v</i><sub>2</sub><sup>2</sup> − 2<i>Gm</i><sup>2</sup>/<i>r</i>, with zero initial kinetic energy.",
            "Substituting <i>v</i><sub>1</sub> = 2<i>v</i><sub>2</sub>, the kinetic sum is 2<i>mv</i><sub>2</sub><sup>2</sup> + <i>mv</i><sub>2</sub><sup>2</sup> = 3<i>mv</i><sub>2</sub><sup>2</sup>, so 3<i>mv</i><sub>2</sub><sup>2</sup> = 2<i>Gm</i><sup>2</sup>(1/<i>r</i> − 1/<i>d</i>) and <i>v</i><sub>2</sub><sup>2</sup> = (2<i>Gm</i>/3)(1/<i>r</i> − 1/<i>d</i>).",
            "They move toward each other, so the relative speed is <i>v</i><sub>1</sub> + <i>v</i><sub>2</sub> = 3<i>v</i><sub>2</sub> = √(6<i>Gm</i>(1/<i>r</i> − 1/<i>d</i>)). Note you cannot hand each mass half the released energy: the lighter one moves faster and carries more of it, and momentum conservation is what splits it correctly."
          ],
          "ans": "v<sub>rel</sub> = √(6Gm(1/r − 1/d))"
        },
        {
          "t": "mcq",
          "q": "The gravitational potential energy of a system of two masses is:",
          "opts": [
            { "label": "always positive", "nudge": "This confuses gravity with the elastic potential energy of a spring, which really is always positive." },
            { "label": "always negative", "nudge": null },
            { "label": "zero", "nudge": "True only in the limit of infinite separation, which is the reference point rather than a real configuration." },
            { "label": "positive or negative, depending on the masses", "nudge": "This would be right for electric potential energy, which can be either sign. Gravity is only ever attractive, so it has only one sign." }
          ],
          "correct": 1,
          "solution": "With the zero taken at infinity, gravity does positive work as the masses approach, so the stored energy falls below zero. U = −Gm₁m₂/r is negative for every finite r."
        },
        {
          "t": "mcq",
          "q": "The escape velocity of a body from the Earth's surface does <b>not</b> depend on:",
          "opts": [
            { "label": "the mass of the Earth", "nudge": "It appears explicitly in √(2GM/R), so escape velocity certainly depends on it." },
            { "label": "the radius of the Earth", "nudge": "Also explicit in the formula: a smaller planet of the same mass is harder to escape." },
            { "label": "the mass of the body", "nudge": null },
            { "label": "the value of <i>G</i>", "nudge": "Explicit in the formula as well; a different G would give a different escape speed." }
          ],
          "correct": 2,
          "solution": "The escaping body's mass cancels out of the energy equation, so a pebble and a spaceship need the same escape speed. The misconception being targeted is that heavier objects need more speed: they need more energy, at the same speed."
        },
        {
          "t": "mcq",
          "q": "Inside a uniform thin spherical shell the gravitational field is zero everywhere. The gravitational potential inside the shell is therefore:",
          "opts": [
            { "label": "zero everywhere inside", "nudge": "The classic error: assuming zero field forces zero potential. Zero field means an unchanging potential, which is a different statement." },
            { "label": "a constant, equal to the surface value −<i>GM</i>/<i>R</i>", "nudge": null },
            { "label": "increasing toward the centre", "nudge": "Any variation of potential with position would produce a field, and the field here is exactly zero." },
            { "label": "−<i>GM</i>/<i>r</i> at distance <i>r</i> from the centre", "nudge": "This applies the outside formula in a region where it is not valid; it would also blow up at the centre." }
          ],
          "correct": 1,
          "solution": "Field is the negative gradient of potential, so zero field means the potential does not change with position: it is constant inside. By continuity at the surface, that constant is the surface value −GM/R."
        },
        {
          "t": "mcq",
          "q": "The gravitational potential at a point is −5.0 × 10<sup>6</sup> J/kg. An external agent lowers a 3.0 kg mass slowly from infinity to that point. The work done <b>by that agent</b> is:",
          "opts": [
            { "label": "+1.5 × 10<sup>7</sup> J", "nudge": "This is the work done by the gravitational field, which is the opposite sign. The field pulls the mass in and so does positive work; the agent must hold it back." },
            { "label": "−1.5 × 10<sup>7</sup> J", "nudge": null },
            { "label": "−5.0 × 10<sup>6</sup> J", "nudge": "This forgets to multiply by the mass: −5.0 × 10<sup>6</sup> J/kg is V, not U." },
            { "label": "zero", "nudge": "Moving through a region where the potential changes always involves work; only a closed loop gives zero." }
          ],
          "correct": 1,
          "solution": "For a slow move the agent's work equals ΔU = U<sub>final</sub> − U<sub>initial</sub> = mV − 0 = (3.0)(−5.0 × 10<sup>6</sup>) = −1.5 × 10<sup>7</sup> J. The negative sign says the agent absorbs energy rather than supplying it, because gravity is doing +1.5 × 10<sup>7</sup> J of work on the way in. Naming the agent before writing a sign is the whole discipline here: to <b>remove</b> the mass to infinity the agent would have to supply +1.5 × 10<sup>7</sup> J."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Calculate the gravitational potential at the Earth's surface. Take <i>M</i> = 6.0 × 10<sup>24</sup> kg and <i>R</i> = 6.4 × 10<sup>6</sup> m.", "a": "<i>V</i> = −<i>GM</i>/<i>R</i> = −(6.67 × 10<sup>−11</sup>)(6.0 × 10<sup>24</sup>)/(6.4 × 10<sup>6</sup>) = −6.25 × 10<sup>7</sup> J/kg." },
            { "q": "[NEET] A body is projected vertically upward from the surface at half the escape velocity. Find the maximum height reached, in terms of <i>R</i>.", "a": "Energy: ½(<i>v<sub>e</sub></i>/2)<sup>2</sup> − <i>GM</i>/<i>R</i> = −<i>GM</i>/(<i>R</i> + <i>h</i>). With <i>v<sub>e</sub></i><sup>2</sup> = 2<i>GM</i>/<i>R</i> this gives <i>R</i> + <i>h</i> = 4<i>R</i>/3, so <i>h</i> = <i>R</i>/3." },
            { "q": "[JEE Main] Four point masses, each <i>m</i>, sit at the corners of a square of side <i>a</i>. Find the total gravitational potential energy.", "a": "Four side pairs at <i>a</i> and two diagonal pairs at <i>a</i>√2: <i>U</i> = −(<i>Gm</i><sup>2</sup>/<i>a</i>)(4 + 2/√2) = −(<i>Gm</i><sup>2</sup>/<i>a</i>)(4 + √2)." },
            { "q": "[JEE Main] How much energy must be supplied to a satellite of mass <i>m</i> resting on the Earth's surface to send it completely out of the Earth's gravitational field? Answer in terms of <i>m</i>, <i>g</i> and <i>R</i>.", "a": "It must be raised from <i>U</i> = −<i>GMm</i>/<i>R</i> to zero, so <i>E</i> = <i>GMm</i>/<i>R</i> = <i>mgR</i>." },
            { "q": "[JEE Advanced] A particle is released from rest at effectively infinite distance from a planet of mass <i>M</i> and radius <i>R</i>. Find the speed with which it strikes the surface.", "a": "Energy: 0 = ½<i>v</i><sup>2</sup> − <i>GM</i>/<i>R</i>, so <i>v</i> = √(2<i>GM</i>/<i>R</i>) = <i>v<sub>e</sub></i>. A body falling from infinity arrives at exactly escape speed, which is the same calculation read backwards." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Dropping the negative sign.</b> <i>U</i> = −<i>GMm</i>/<i>r</i> and <i>V</i> = −<i>GM</i>/<i>r</i> are negative. Writing them positive reverses the physics: it describes a repulsive force, which gravity never is. Carry the minus from the first line.",
            "<b>Using <i>mgh</i> for large heights.</b> <i>mgh</i> is a change in energy valid only for <i>h</i> ≪ <i>R</i>. Lift a mass through a full Earth radius and <i>mgh</i> overshoots the truth by a factor of 2. For big climbs use Δ<i>U</i> = −<i>GMm</i>(1/<i>r</i><sub>f</sub> − 1/<i>r</i><sub>i</sub>).",
            "<b>Confusing <i>V</i> with <i>U</i>.</b> <i>V</i> is per unit mass and measured in J/kg; <i>U</i> = <i>mV</i> is the total, in J. Mixing their units, or losing the factor of <i>m</i>, loses the mark instantly.",
            "<b>Believing zero field means zero potential.</b> Inside a shell the field is zero while the potential is a non-zero constant −<i>GM</i>/<i>R</i>. Field is the <i>slope</i> of the potential, not the potential.",
            "<b>Not naming the agent before writing a sign.</b> Work done by gravity is −Δ<i>U</i>; work done by an external agent moving the mass slowly is +Δ<i>U</i>. The two differ only in sign, and an answer that does not say which one it is cannot be marked right.",
            "<b>Assuming a value between the centre and surface potentials lives inside the body.</b> The potential inside a solid sphere only spans −3<i>GM</i>/2<i>R</i> to −<i>GM</i>/<i>R</i>; anything above that range is reached only outside, and the algebra will happily hand you a fake interior root if you do not check it against <i>R</i>."
          ]
        },
        {
          "t": "protip",
          "html": "potential adds like a number, force adds like an arrow. for several masses just write V = −G Σ m<sub>i</sub>/r<sub>i</sub> with signs, no components and no angles, then get energy as U = mV or a speed from energy conservation. that makes potential problems dramatically faster than the matching force problems. and remember the √2 bridge: escape velocity √(2gR) is exactly √2 times the orbital speed of a surface-skimming satellite √(gR), so if a question hands you one you already have the other. for Earth those are 7.9 km/s and 11.2 km/s, and knowing both by heart turns several questions into recognition."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "U = −Gm<sub>1</sub>m<sub>2</sub>/r · V = U/m = −GM/r", "note": "zero at infinity, so both are negative at every finite r" },
            { "f": "system of n particles: sum over n(n − 1)/2 pairs", "note": "scalars, so add algebraically with their signs" },
            { "f": "at the surface: V = −GM/R = −gR", "note": "and ΔU ≈ mgh only while h ≪ R" },
            { "f": "E<sub>g</sub> = −dV/dr", "note": "the field is the downhill slope of the potential" },
            { "f": "v<sub>e</sub> = √(2GM/R) = √(2gR) ≈ 11.2 km/s", "note": "independent of the body's mass and of the launch direction" },
            { "f": "shell inside: V = −GM/R · sphere centre: V = −3GM/2R", "note": "deepest at the centre, where the field is zero" }
          ],
          "aids": [
            "\"attractive means negative, and closer means more negative\"",
            "\"V is per kilo, U = mV is the whole bill\""
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Kepler's Laws and Satellites",
      "chip": "05 ORBITS",
      "kalam": "an orbit is perpetual falling, not escaping",
      "blocks": [
        {
          "t": "p",
          "html": "Stand on an impossibly tall mountain and fire a cannonball horizontally. Fire it gently and it arcs down and lands nearby. Fire it harder and it lands much further away, the round Earth curving a little out from under its path. Fire it hard enough and something remarkable happens: the ball falls toward the Earth at <i>exactly</i> the rate the Earth curves away beneath it. It keeps falling forever and never lands. <b>That is an orbit.</b> A satellite, whether it is the Moon, the ISS or a television relay, is not escaping gravity and not balancing it. It is in <b>perpetual free fall</b>, endlessly falling around the Earth. That one image, Newton's own thought experiment, unlocks the whole topic."
        },
        {
          "t": "p",
          "html": "Long before Newton, Johannes Kepler stared at decades of Tycho Brahe's planetary data and distilled three exact rules. He had no idea <i>why</i> they held. <b>Law of orbits:</b> every planet moves in an ellipse with the Sun at one focus, not at the centre. <b>Law of areas:</b> the line from the Sun to the planet sweeps equal areas in equal times, which is why a planet races when it is near the Sun and dawdles when it is far. <b>Law of periods:</b> the square of the period grows as the cube of the orbit's size, so Mercury goes round in 88 days while distant Pluto takes 248 years. The beautiful part is that Newton's inverse-square gravity reproduces all three automatically."
        },
        {
          "t": "think",
          "html": "for the law of areas, imagine the planet tethered to the Sun by an elastic string. swinging in close the string is short, so the planet must whip around quickly to sweep out the same pizza slice of area each second; far out, with a long string, it crawls. that rule is secretly the conservation of angular momentum wearing a geometric costume: gravity always points along the line joining the two, so it exerts no torque about the Sun, so L = mvr cannot change, so the planet speeds up by exactly the amount needed to keep it fixed."
        },
        {
          "t": "p",
          "html": "Two ideas that constantly confuse students, settled up front. <b>Weightlessness is not the absence of gravity.</b> An astronaut floating in the ISS is not beyond the Earth's pull; gravity there is roughly 90 percent of its surface value. They float because they and their spacecraft are both falling together, so there is no contact force between them, exactly as you would feel in a lift whose cable had snapped. And <b>a satellite's total energy is negative</b>, because it is bound in the gravitational valley of the last topic, below the zero we set at infinity. Negative total energy is the mathematical signature of a bound, closed orbit."
        },
        {
          "t": "def",
          "term": "Two kinds of useful satellite",
          "html": "A <b>geostationary</b> satellite sits far out, about 36,000 km up, in the equatorial plane, circling once every 24 hours in the same sense the Earth spins, so it hovers over one fixed spot and looks motionless from the ground. That makes it ideal for television, telephony and weather relay, since a dish can point at one unchanging place in the sky. It can only hover over the <b>equator</b>, because its orbital plane must contain the Earth's centre. A <b>polar</b> satellite orbits low instead, around 1000 km up, in a north-south plane over the poles; the Earth turns beneath it so each pass scans a fresh strip, eventually covering the globe. High and fixed for communication; low and sweeping for imaging."
        },
        {
          "t": "defgrid",
          "title": "The numbers worth memorising",
          "rows": [
            { "k": "Surface-skimming orbit", "v": "<i>v<sub>o</sub></i> = √(<i>gR</i>) ≈ 7.9 km/s, with period 2π√(<i>R</i>/<i>g</i>) ≈ 84 min" },
            { "k": "Escape from the surface", "v": "<i>v<sub>e</sub></i> = √2 <i>v<sub>o</sub></i> ≈ 11.2 km/s, only 41.4 percent faster" },
            { "k": "Geostationary", "v": "<i>T</i> = 24 h, <i>r</i> ≈ 42,000 km, height ≈ 36,000 km ≈ 6<i>R</i>, <i>v<sub>o</sub></i> ≈ 3.1 km/s" },
            { "k": "Energies in a circular orbit", "v": "<i>K</i> = −<i>E</i> and <i>U</i> = 2<i>E</i>, so binding energy = <i>GMm</i>/2<i>r</i>" },
            { "k": "Ellipse", "v": "<i>E</i> = −<i>GMm</i>/2<i>a</i>, and at perigee and apogee <i>v<sub>p</sub>r<sub>p</sub></i> = <i>v<sub>a</sub>r<sub>a</sub></i>" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · KEPLER, ORBITAL SPEED AND PERIOD",
          "tag": "circular orbit, spherically symmetric planet, no drag",
          "main": "Kepler: ellipse with the Sun at a focus · equal areas in equal times · <i>T</i><sup>2</sup> ∝ <i>a</i><sup>3</sup><br><i>v<sub>o</sub></i> = √(<i>GM</i>/<i>r</i>) · <i>T</i> = 2π√(<i>r</i><sup>3</sup>/<i>GM</i>) · <i>T</i><sup>2</sup> = 4π<sup>2</sup><i>a</i><sup>3</sup>/<i>GM</i>",
          "legend": [
            "<i>v<sub>o</sub></i> is the orbital speed in m/s, <i>T</i> the period in s, <i>r</i> the orbital radius in m and <i>M</i> the central mass in kg",
            "<i>a</i> is the semi-major axis in m; for a circle <i>a</i> = <i>r</i>, which is why the two forms of Kepler III are one formula",
            "the constant 4π<sup>2</sup>/<i>GM</i> depends only on the central mass, so it is the same for every satellite of that planet",
            "areal velocity <i>dA</i>/<i>dt</i> = <i>L</i>/2<i>m</i> is constant, where <i>L</i> is the satellite's angular momentum in kg m<sup>2</sup>/s"
          ],
          "note": "Orbital speed is independent of the satellite's mass, so a bolt and a space station at the same height orbit at the same speed. Smaller orbits demand higher speeds, since v ∝ 1/√r."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE ENERGY OF A SATELLITE",
          "main": "<i>K</i> = <i>GMm</i>/2<i>r</i> · <i>U</i> = −<i>GMm</i>/<i>r</i> · <i>E</i> = <i>K</i> + <i>U</i> = −<i>GMm</i>/2<i>r</i><br>ellipse: <i>E</i> = −<i>GMm</i>/2<i>a</i> · vis-viva: <i>v</i><sup>2</sup> = <i>GM</i>(2/<i>r</i> − 1/<i>a</i>)",
          "legend": [
            "<i>K</i>, <i>U</i> and <i>E</i> are the kinetic, potential and total energy in joule (J); <i>m</i> is the satellite's mass in kg",
            "<i>r</i> is the current distance from the centre in m and <i>a</i> the semi-major axis in m, both measured from the planet's centre",
            "the tidy relations are <i>K</i> = −<i>E</i> and <i>U</i> = 2<i>E</i>, and the binding energy, the energy needed to send it to infinity, is −<i>E</i> = <i>GMm</i>/2<i>r</i>",
            "angular momentum <i>L</i> = <i>mv<sub>o</sub>r</i> = <i>m</i>√(<i>GMr</i>), in kg m<sup>2</sup>/s"
          ],
          "note": "E is negative for every bound orbit. A higher orbit is a higher-energy, less tightly bound state even though it moves more slowly, which is the counterintuitive fact this topic keeps testing."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 7.10 · THE CANNONBALL THAT NEVER LANDS",
          "chips": ["throw it harder", "the condition for a circle"],
          "captions": [
            "Fired gently, the ball lands nearby. Fired harder, it lands further out as the Earth curves away beneath it. Fired hard enough, it falls at exactly the rate the surface drops away and the path closes into an orbit. Nothing has changed but the launch speed.",
            "For a circle, gravity supplies precisely the centripetal force the path demands: GMm/r² = mv²/r. The pull does not fight the motion, it bends it. Cancel m and one power of r and you have v = √(GM/r), which does not contain the satellite's mass at all."
          ],
          "frames": [
            {
              "x": [-3.4, 3.4], "y": [-2.94, 2.94], "axes": "none", "aspect": 0.86,
              "curves": [
                { "c": "circle", "cx": 0, "cy": 0, "r": 2.4 },
                { "c": "circle", "cx": 0, "cy": 0, "r": 2.78, "dash": true }
              ],
              "polys": [
                { "pts": [[-0.28, 2.384], [0, 2.78], [0.28, 2.384]], "close": true, "fill": "wash", "tone": "ink" },
                { "pts": [[0, 2.78], [0.5, 2.68], [0.9, 2.225]], "smooth": true, "tone": "soft" },
                { "pts": [[0, 2.78], [1.0, 2.63], [1.75, 1.64]], "smooth": true, "tone": "soft" },
                { "pts": [[0, 2.78], [1.4, 2.58], [2.2, 1.55], [2.4, 0]], "smooth": true }
              ],
              "labels": [
                { "x": 1.95, "y": 2.45, "text": "harder" },
                { "x": -1.35, "y": -1.85, "text": "orbit" }
              ]
            },
            {
              "x": [-3.4, 3.4], "y": [-2.94, 2.94], "axes": "none", "aspect": 0.86,
              "curves": [
                { "c": "circle", "cx": 0, "cy": 0, "r": 1.0 },
                { "c": "circle", "cx": 0, "cy": 0, "r": 2.4, "dash": true }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "dot", "label": "M" },
                { "x": 2.4, "y": 0, "glyph": "dot", "label": "m" }
              ],
              "arrows": [
                { "from": [2.4, 0], "to": [1.25, 0], "tone": "amber", "label": "F" },
                { "from": [2.4, 0], "to": [2.4, 1.2], "label": "v" }
              ],
              "segments": [
                { "from": [0, 0], "to": [0, -2.4], "dash": true, "soft": true, "label": "r" }
              ],
              "labels": [
                { "x": 0.05, "y": 1.85, "text": "F = mv²/r" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · ORBITAL SPEED, AND KEPLER'S THIRD LAW FROM IT",
          "steps": [
            {
              "eq": "the only force on the satellite is gravity, and it points at the centre: <i>GMm</i>/<i>r</i><sup>2</sup> = <i>mv<sub>o</sub></i><sup>2</sup>/<i>r</i>",
              "why": "A circular path needs a centripetal force of exactly <i>mv</i><sup>2</sup>/<i>r</i>, and gravity is the only candidate. It does not fight the motion, it bends it into a closed loop."
            },
            {
              "eq": "cancel <i>m</i> and one power of <i>r</i>: <i>v<sub>o</sub></i> = √(<i>GM</i>/<i>r</i>)",
              "why": "The satellite's own mass has vanished, so a bolt and a space station at the same height move at the same speed. Note also that <i>v<sub>o</sub></i> ∝ 1/√<i>r</i>: smaller orbits are faster orbits."
            },
            {
              "eq": "one lap covers 2π<i>r</i>, so <i>T</i> = 2π<i>r</i>/<i>v<sub>o</sub></i> = 2π√(<i>r</i><sup>3</sup>/<i>GM</i>)",
              "why": "Distance over speed, with the square root tidied. This is the period of any circular orbit around a mass <i>M</i>."
            },
            {
              "eq": "square it: <i>T</i><sup>2</sup> = (4π<sup>2</sup>/<i>GM</i>) <i>r</i><sup>3</sup>, so <i>T</i><sup>2</sup> ∝ <i>r</i><sup>3</sup>",
              "why": "Kepler's third law falls out, and the proportionality constant depends only on the central mass, so it is identical for every satellite of that planet. Newton's gravity has just <i>derived</i> what Kepler could only observe."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · KEPLER'S THREE LAWS",
          "chips": ["orbits", "areas", "periods"],
          "captions": [
            "Law of orbits. The path is an ellipse and the Sun sits at one focus, not at the centre. The other focus is empty. Real planetary orbits are close to circular, so the two foci sit near the middle, but the distinction is exactly what the law is about.",
            "Law of areas. The shaded sectors are equal in area, and the planet sweeps each in the same time. Near the Sun the radius is short so the planet must move through a wide angle; far away it crawls through a narrow one. This is angular momentum conservation drawn as geometry.",
            "Law of periods. T² grows as a³, so T rises as a to the power three halves. Quadruple the orbit size and the year becomes eight times longer, which is why Mercury takes 88 days and Pluto 248 years."
          ],
          "frames": [
            {
              "x": [-3.6, 3.6], "y": [-3.0, 3.0], "axes": "none", "aspect": 0.831,
              "curves": [{ "c": "ellipse", "cx": 0, "cy": 0, "a": 3, "b": 2.85 }],
              "marks": [
                { "x": 0.937, "y": 0, "glyph": "dot", "label": "Sun" },
                { "x": -0.937, "y": 0, "glyph": "open", "label": "focus" },
                { "x": 0, "y": 0, "glyph": "plus", "label": "centre" }
              ],
              "points": [{ "x": 1.026, "y": 2.678, "label": "planet", "at": "nw" }],
              "segments": [{ "from": [0.937, 0], "to": [1.026, 2.678], "soft": true }],
              "labels": [{ "x": 0, "y": -2.25, "text": "a focus, not the centre" }]
            },
            {
              "x": [-3.6, 3.6], "y": [-3.0, 3.0], "axes": "none", "aspect": 0.831,
              "curves": [{ "c": "ellipse", "cx": 0, "cy": 0, "a": 3, "b": 2.85 }],
              "polys": [
                { "pts": [[0.937, 0], [2.782, -1.068], [3, 0], [2.782, 1.068]], "close": true, "fill": "wash", "tone": "amber" },
                { "pts": [[0.937, 0], [-2.934, -0.593], [-3, 0], [-2.934, 0.593]], "close": true, "fill": "wash", "tone": "amber" }
              ],
              "marks": [{ "x": 0.937, "y": 0, "glyph": "dot" }],
              "labels": [
                { "x": 0.94, "y": -1.25, "text": "Sun" },
                { "x": 0, "y": -2.25, "text": "equal areas, equal times" }
              ]
            },
            {
              "x": [0, 4.4], "y": [0, 9],
              "axisX": "a", "axisY": "T",
              "ticksX": { "every": 1 }, "ticksY": { "every": 2 },
              "curves": [{ "c": "power", "a": 1, "p": 1.5 }],
              "points": [
                { "x": 1, "y": 1, "label": "1", "at": "nw" },
                { "x": 4, "y": 8, "label": "8", "at": "nw" }
              ],
              "segments": [
                { "from": [4, 0], "to": [4, 8], "dash": true, "soft": true },
                { "from": [0, 8], "to": [4, 8], "dash": true, "soft": true }
              ],
              "labels": [{ "x": 1.75, "y": 6.2, "text": "4 times r, 8 times T" }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY A SATELLITE'S TOTAL ENERGY IS NEGATIVE",
          "steps": [
            {
              "eq": "<i>K</i> = ½<i>mv<sub>o</sub></i><sup>2</sup> = ½<i>m</i>(<i>GM</i>/<i>r</i>) = <i>GMm</i>/2<i>r</i>",
              "why": "Just the orbital speed from the previous derivation, squared and halved. Note the kinetic energy is fixed entirely by the radius: you cannot choose the speed of a circular orbit independently."
            },
            {
              "eq": "<i>U</i> = −<i>GMm</i>/<i>r</i>, from the previous topic",
              "why": "The potential energy is twice the kinetic energy in size, and negative. Everything about orbital energy follows from that one mismatch of factors."
            },
            {
              "eq": "<i>E</i> = <i>K</i> + <i>U</i> = <i>GMm</i>/2<i>r</i> − <i>GMm</i>/<i>r</i> = −<i>GMm</i>/2<i>r</i>",
              "why": "Three readings at once. <i>E</i> is negative, so the orbit is bound and closed. <i>K</i> = −<i>E</i>, so the kinetic energy equals the magnitude of the total. And <i>U</i> = 2<i>E</i>."
            },
            {
              "eq": "as <i>r</i> grows, <i>E</i> rises toward zero",
              "why": "A higher orbit is a higher-energy state, less tightly bound, even though the satellite there moves more slowly. Raising an orbit costs energy, and the kinetic energy paradoxically <i>falls</i> when you do it, because more than all of the added energy goes into the potential."
            }
          ]
        },
        {
          "t": "proc",
          "title": "A single-impulse orbit change, without re-deriving anything",
          "steps": [
            "<b>Work per unit mass.</b> Define the specific energy ε = <i>v</i><sup>2</sup>/2 − <i>GM</i>/<i>r</i>, in J/kg. Evaluate it at the burn point from the given speed and radius.",
            "<b>Read off the semi-major axis</b> from ε = −<i>GM</i>/2<i>a</i>, so <i>a</i> = −<i>GM</i>/2ε. A negative ε means a bound ellipse; ε ≥ 0 means the body escapes.",
            "<b>Decide which apsis the burn point is.</b> If <i>r</i> < <i>a</i> it is the perigee, and if <i>r</i> > <i>a</i> it is the apogee. The other one follows from <i>r<sub>p</sub></i> + <i>r<sub>a</sub></i> = 2<i>a</i>.",
            "<b>Get any speed on the orbit from vis-viva</b>, <i>v</i><sup>2</sup> = <i>GM</i>(2/<i>r</i> − 1/<i>a</i>), and the period from Kepler III with <i>a</i> in place of <i>r</i>.",
            "<b>Check the orbit survives.</b> If the perigee comes out smaller than the planet's radius, the ellipse dips into the planet and the satellite crashes rather than orbiting. Noticing that is worth more marks than the algebra that preceded it."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 7.11 · ONE BURN, ONE ELLIPSE",
          "chips": ["a tangential boost"],
          "captions": [
            "A satellite on a circular orbit of radius r₀ fires its engine once, tangentially. The circle opens into an ellipse with the planet still at one focus, the burn point becomes the perigee, and the satellite swings out to a far apogee before returning. A boost of just 22 percent to √1.5 times the circular speed triples the far-point distance, which is why orbital insertions demand such precision."
          ],
          "frames": [
            {
              "x": [-4.8, 2.2], "y": [-2.8, 2.8], "axes": "none", "aspect": 0.8,
              "curves": [
                { "c": "circle", "cx": 0, "cy": 0, "r": 1.5, "dash": true },
                { "c": "ellipse", "cx": -1.5, "cy": 0, "a": 3, "b": 2.598 }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "dot", "label": "M" },
                { "x": 1.5, "y": 0, "glyph": "cross", "label": "burn" },
                { "x": -4.5, "y": 0, "glyph": "dot", "label": "apogee" }
              ],
              "segments": [
                { "from": [0, 0], "to": [1.5, 0], "label": "r₀" },
                { "from": [0, 0], "to": [-4.5, 0], "dash": true, "soft": true, "label": "rₐ" }
              ],
              "arrows": [{ "from": [1.5, 0], "to": [1.5, 1.2], "tone": "amber", "label": "boost" }],
              "labels": [{ "x": -1.5, "y": -2.25, "text": "planet at a focus" }]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A satellite circles the Earth at a height of 600 km. Find its orbital speed and its period. Take <i>M</i> = 6.0 × 10<sup>24</sup> kg, <i>R</i> = 6.4 × 10<sup>6</sup> m.",
          "steps": [
            "The orbital radius is measured from the <b>centre</b>, not the surface: <i>r</i> = <i>R</i> + <i>h</i> = 6.4 × 10<sup>6</sup> + 6.0 × 10<sup>5</sup> = 7.0 × 10<sup>6</sup> m.",
            "<i>v<sub>o</sub></i> = √(<i>GM</i>/<i>r</i>) = √((6.67 × 10<sup>−11</sup>)(6.0 × 10<sup>24</sup>)/(7.0 × 10<sup>6</sup>)) = √(5.72 × 10<sup>7</sup>) ≈ 7.6 × 10<sup>3</sup> m/s.",
            "<i>T</i> = 2π<i>r</i>/<i>v<sub>o</sub></i> = 2π(7.0 × 10<sup>6</sup>)/(7.6 × 10<sup>3</sup>) ≈ 5.8 × 10<sup>3</sup> s ≈ 97 minutes.",
            "A low-Earth-orbit satellite circles the planet about every hour and a half, which is consistent with the ISS going round roughly 16 times a day."
          ],
          "ans": "v<sub>o</sub> ≈ 7.6 km/s · T ≈ 97 minutes"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A satellite in a circular orbit has a period of 6 hours. If its orbital radius is increased to 4 times the original, what is the new period?",
          "steps": [
            "Use Kepler's third law as a ratio: <i>T</i><sup>2</sup> ∝ <i>r</i><sup>3</sup>, so <i>T</i> ∝ <i>r</i><sup>3/2</sup>.",
            "<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> = 4<sup>3/2</sup>. Cube the 4 to get 64, then square-root it to get 8.",
            "<i>T</i><sub>2</sub> = 8 × 6 = 48 hours.",
            "The tempting wrong answers are 4 × 6 = 24 h, from treating <i>T</i> ∝ <i>r</i>, or some other power. Respect the 3/2 and the whole thing is a five-second mental calculation: cube the radius factor, then take the square root."
          ],
          "ans": "48 hours"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the height above the Earth's surface at which a geostationary satellite must orbit. Take <i>M</i> = 6.0 × 10<sup>24</sup> kg and <i>R</i> = 6.4 × 10<sup>6</sup> m.",
          "steps": [
            "Geostationary means the period matches the Earth's rotation: <i>T</i> = 24 h = 86,400 s. Use <i>T</i><sup>2</sup> = 4π<sup>2</sup><i>r</i><sup>3</sup>/<i>GM</i>, solved for <i>r</i>.",
            "<i>GM</i> = 4.0 × 10<sup>14</sup> and <i>T</i><sup>2</sup> = 7.47 × 10<sup>9</sup>, so the numerator <i>GMT</i><sup>2</sup> = 2.99 × 10<sup>24</sup>.",
            "Divide by 4π<sup>2</sup> = 39.5: <i>r</i><sup>3</sup> = 7.56 × 10<sup>22</sup>, so <i>r</i> = 4.2 × 10<sup>7</sup> m.",
            "Height <i>h</i> = <i>r</i> − <i>R</i> = 4.2 × 10<sup>7</sup> − 6.4 × 10<sup>6</sup> ≈ 3.6 × 10<sup>7</sup> m = 36,000 km, about 6<i>R</i>. Every television and weather satellite parked over the equator sits at this one special altitude, the only height whose period matches the day."
          ],
          "ans": "h ≈ 36,000 km, about 6R above the surface"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A satellite in a circular orbit of radius <i>r</i><sub>0</sub> around a planet of mass <i>M</i> gets a brief tangential burn that raises its speed to √(3/2) times the circular speed. Find the greatest distance it then reaches from the planet's centre.",
          "steps": [
            "The circular speed is <i>v</i><sub>0</sub> = √(<i>GM</i>/<i>r</i><sub>0</sub>), so the new speed satisfies <i>v</i><sup>2</sup> = 3<i>GM</i>/2<i>r</i><sub>0</sub>. Since <i>v</i><sub>0</sub> < <i>v</i> < √2 <i>v</i><sub>0</sub> = <i>v<sub>e</sub></i>, the satellite stays bound but moves onto an ellipse, with the burn point as its perigee.",
            "Angular momentum, using the fact that the velocity is perpendicular to the radius at both apsides: <i>vr</i><sub>0</sub> = <i>v<sub>a</sub>r<sub>a</sub></i>, so <i>v<sub>a</sub></i> = <i>vr</i><sub>0</sub>/<i>r<sub>a</sub></i>.",
            "Energy: ½<i>v</i><sup>2</sup> − <i>GM</i>/<i>r</i><sub>0</sub> = ½<i>v<sub>a</sub></i><sup>2</sup> − <i>GM</i>/<i>r<sub>a</sub></i>. Substituting both expressions and dividing through by <i>GM</i> gives −1/4<i>r</i><sub>0</sub> = 3<i>r</i><sub>0</sub>/4<i>r<sub>a</sub></i><sup>2</sup> − 1/<i>r<sub>a</sub></i>.",
            "Multiply by 4<i>r</i><sub>0</sub><i>r<sub>a</sub></i><sup>2</sup>: <i>r<sub>a</sub></i><sup>2</sup> − 4<i>r</i><sub>0</sub><i>r<sub>a</sub></i> + 3<i>r</i><sub>0</sub><sup>2</sup> = 0, that is (<i>r<sub>a</sub></i> − <i>r</i><sub>0</sub>)(<i>r<sub>a</sub></i> − 3<i>r</i><sub>0</sub>) = 0. The root <i>r</i><sub>0</sub> is the perigee we started from, so the apogee is 3<i>r</i><sub>0</sub>. A speed boost of only √1.5, about 22 percent, triples the far-point distance."
          ],
          "ans": "r<sub>a</sub> = 3r<sub>0</sub>"
        },
        {
          "t": "mcq",
          "q": "If the gravitational attraction between the Earth and an orbiting satellite suddenly vanished, the satellite would:",
          "opts": [
            { "label": "fall straight down to Earth", "nudge": "This assumes some leftover downward tendency, but with no force there is nothing left to pull it down." },
            { "label": "continue along the original circular orbit", "nudge": "This forgets that the inward force is what was required to bend the path into a circle in the first place." },
            { "label": "fly off along the tangent at its current speed", "nudge": null },
            { "label": "stop and remain stationary", "nudge": "This ignores the satellite's very large existing velocity, which nothing has removed." }
          ],
          "correct": 2,
          "solution": "With no force, Newton's first law takes over: the satellite travels in a straight line tangent to where it was, at the speed it already had. Gravity was the only thing bending its path, so remove it and the bending stops."
        },
        {
          "t": "mcq",
          "q": "For a satellite in a stable circular orbit, which relation between the kinetic energy <i>K</i>, the potential energy <i>U</i> and the total energy <i>E</i> is correct?",
          "opts": [
            { "label": "<i>K</i> = <i>E</i>, <i>U</i> = −2<i>E</i>", "nudge": "This gets the signs backwards: K is positive and E is negative, so they cannot be equal." },
            { "label": "<i>K</i> = −<i>E</i>, <i>U</i> = 2<i>E</i>", "nudge": null },
            { "label": "<i>K</i> = 2<i>E</i>, <i>U</i> = −<i>E</i>", "nudge": "This scrambles the factors of two between the kinetic and potential terms." },
            { "label": "<i>K</i> = <i>U</i>", "nudge": "False in size and in sign: |U| is exactly twice K, and U is negative while K is positive." }
          ],
          "correct": 1,
          "solution": "K = +GMm/2r, U = −GMm/r and E = −GMm/2r. So K = −E, the kinetic energy equalling the magnitude of the total energy, and U = 2E, both being negative. This sign-and-factor bookkeeping is a JEE Main favourite."
        },
        {
          "t": "mcq",
          "q": "A geostationary satellite must satisfy all of the following <b>except</b>:",
          "opts": [
            { "label": "orbit in the equatorial plane", "nudge": "A genuine requirement: the orbital plane must contain the Earth's centre." },
            { "label": "revolve from west to east", "nudge": "A genuine requirement: it must go the same way the Earth spins, or it will not keep station." },
            { "label": "have a period of 24 hours", "nudge": "A genuine requirement: matching the day is what makes it appear fixed." },
            { "label": "be positioned directly above any chosen city", "nudge": null }
          ],
          "correct": 3,
          "solution": "A geostationary satellite can hover only over points on the equator, because its orbital plane has to contain the Earth's centre and therefore lies in the equatorial plane. It cannot be parked over New Delhi. The trap is the intuitive but wrong belief that you can park a satellite over your own city."
        },
        {
          "t": "mcq",
          "q": "An astronaut inside an orbiting space station feels weightless because:",
          "opts": [
            { "label": "there is no gravity at that height", "nudge": "Flatly wrong: gravity at ISS altitude is about 90 percent of its surface value." },
            { "label": "the station is beyond the Earth's gravitational field", "nudge": "The field extends without limit, and it is precisely what holds the station in orbit." },
            { "label": "the astronaut and station are in free fall together, so there is no contact force", "nudge": null },
            { "label": "the centrifugal force exactly cancels gravity in the ground frame", "nudge": "Centrifugal force exists only in the rotating frame. In the inertial ground frame gravity is unbalanced, and that is exactly what supplies the centripetal acceleration." }
          ],
          "correct": 2,
          "solution": "Both astronaut and station accelerate toward the Earth at the same local g, so the floor exerts no normal force on the astronaut and the apparent weight is zero. Weightlessness is shared free fall, not absent gravity, and examiners test this misconception specifically."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] State Kepler's three laws in one line each, and identify which one expresses the conservation of angular momentum.", "a": "Orbits: an ellipse with the Sun at one focus. Areas: equal areas swept in equal times. Periods: <i>T</i><sup>2</sup> ∝ <i>a</i><sup>3</sup>. The <b>law of areas</b> is angular-momentum conservation, since a central force exerts no torque." },
            { "q": "[NEET] Two satellites of the same planet have orbital radii in the ratio 1 : 4. Find the ratio of their orbital speeds.", "a": "<i>v<sub>o</sub></i> ∝ 1/√<i>r</i>, so the ratio is √4 : √1 = 2 : 1. The inner satellite is the faster one." },
            { "q": "[JEE Main] A satellite of mass <i>m</i> is in a circular orbit of radius <i>r</i>. How much extra energy is needed to move it to a circular orbit of radius 2<i>r</i>?", "a": "Δ<i>E</i> = (−<i>GMm</i>/4<i>r</i>) − (−<i>GMm</i>/2<i>r</i>) = <i>GMm</i>/4<i>r</i>. Note the satellite ends up moving <i>slower</i>, even though energy had to be supplied." },
            { "q": "[JEE Main] The orbital speed just above a planet's surface is <i>v<sub>o</sub></i>. Show that the escape speed from there is √2 <i>v<sub>o</sub></i>, and state the percentage increase needed.", "a": "<i>v<sub>o</sub></i> = √(<i>gR</i>) and <i>v<sub>e</sub></i> = √(2<i>gR</i>) = √2 <i>v<sub>o</sub></i>. The increase required is (√2 − 1) × 100 percent ≈ 41.4 percent." },
            { "q": "[JEE Advanced] A satellite is launched at the correct orbital speed for radius <i>r</i>, but the velocity is accidentally aimed at a small angle to the horizontal. Will the orbit stay circular? Describe it and name the conserved quantities.", "a": "No. Same speed means the same energy, so the same semi-major axis <i>a</i> = <i>r</i>, but the path is now an ellipse with the launch point neither perigee nor apogee. Energy and angular momentum together fix the orbit." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Scaling the period linearly with the radius.</b> Kepler's third law is <i>T</i> ∝ <i>r</i><sup>3/2</sup>, not <i>T</i> ∝ <i>r</i>. Quadrupling the radius multiplies the period by 8, not 4. Cube the radius factor first, then take the square root.",
            "<b>Saying weightless means no gravity.</b> Orbiting astronauts are in free fall with nearly full gravity acting on them. Write it as <i>shared free fall</i> in an exam, because that is the phrase being marked.",
            "<b>Losing the sign or the factor in the satellite energy.</b> <i>E</i> = −<i>GMm</i>/2<i>r</i> is negative and half the size of <i>U</i>. Writing <i>E</i> = −<i>GMm</i>/<i>r</i> is writing down <i>U</i> instead, and dropping the minus altogether claims the orbit is unbound.",
            "<b>Confusing orbital speed with escape speed.</b> Only a 41.4 percent increase separates orbiting forever from escaping forever. Mixing the two, or misplacing the √2, reverses the verdict on whether an orbit is bound.",
            "<b>Measuring the orbital radius from the surface.</b> <i>r</i> in every satellite formula is measured from the planet's <b>centre</b>, so <i>r</i> = <i>R</i> + <i>h</i>. Using <i>h</i> alone for a low orbit is wrong by a factor of ten or more.",
            "<b>Stopping at the algebra on a single-burn problem.</b> If the resulting perigee is smaller than the planet's radius, the ellipse passes through the planet and the satellite crashes. An answer that reports the number without noticing that is incomplete."
          ]
        },
        {
          "t": "protip",
          "html": "let conservation laws do the work on ellipses. at perigee and apogee the velocity is perpendicular to the radius, so angular momentum gives the clean relation v<sub>p</sub>r<sub>p</sub> = v<sub>a</sub>r<sub>a</sub>; pair it with energy conservation and almost any two-point ellipse problem falls out with no calculus and no orbit equation. faster still, package the pair once as vis-viva, v² = GM(2/r − 1/a): compute the specific energy ε = v²/2 − GM/r at the burn point, read a = −GM/2ε, name the apsides from r<sub>p</sub> + r<sub>a</sub> = 2a, and take the period from Kepler III. and hold the three magic numbers: 7.9 km/s, 84 minutes, 36,000 km."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "Kepler: ellipse at a focus · equal areas · T<sup>2</sup> ∝ a<sup>3</sup>", "note": "the law of areas is angular momentum conservation" },
            { "f": "v<sub>o</sub> = √(GM/r), near the surface √(gR) ≈ 7.9 km/s", "note": "independent of the satellite's mass; smaller orbits are faster" },
            { "f": "T = 2π√(r<sup>3</sup>/GM), near the surface ≈ 84 min", "note": "the same 2π√(R/g) as the tunnel oscillation" },
            { "f": "K = GMm/2r · U = −GMm/r · E = −GMm/2r", "note": "so K = −E, U = 2E, and the binding energy is GMm/2r" },
            { "f": "v<sub>e</sub> = √2 v<sub>o</sub>, an increase of only 41.4 percent", "note": "separating a bound orbit from an escape" },
            { "f": "geostationary: 24 h, equatorial, west to east, h ≈ 36,000 km", "note": "polar satellites orbit low and sweep, for imaging" }
          ],
          "aids": [
            "\"areas means angular momentum\"",
            "\"T goes as r to the three halves: quadruple r, eight times T\""
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "The Gravitational Constant and Two-Body Systems",
      "chip": "06 G AND BINARIES",
      "kalam": "orbits weigh the product GM; Cavendish weighed G itself",
      "blocks": [
        {
          "t": "p",
          "html": "This chapter has used <i>G</i> = 6.67 × 10<sup>−11</sup> N m<sup>2</sup>/kg<sup>2</sup> throughout as though it fell out of the sky. Where does it actually come from? Not from the planets. <b>Every orbital measurement gives you only the product <i>GM</i></b>, never <i>G</i> on its own: look back at <i>v<sub>o</sub></i> = √(<i>GM</i>/<i>r</i>) and you will see the two glued together in every formula in the last topic. To prise <i>G</i> loose you must measure the gravitational force between two masses you can weigh in a laboratory. And there is the difficulty: gravity is so absurdly weak that the attraction between two lead balls on a table is about the weight of a grain of sand. Measuring it was one of the great experimental triumphs of physics."
        },
        {
          "t": "think",
          "html": "imagine trying to hear a whisper in a hurricane. the pull between two lab masses is buried under air currents, vibrations, and the colossal pull of the whole Earth. Henry Cavendish's stroke of genius in 1798 was to make the tiny force reveal itself not as a push but as a <i>twist</i>. he hung a light dumbbell from a fine fibre and brought two large masses up beside it. the minuscule attraction twisted the fibre by a hair's breadth, but a mirror on the fibre threw a beam of light across the room and turned that hair's breadth into a large, readable swing of a bright spot on a distant scale. he had built an amplifier for the weakest force in nature."
        },
        {
          "t": "p",
          "html": "Once <i>G</i> was known, something breathtaking followed at once: you can <b>weigh the Earth</b> without leaving the ground. Since <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup>, rearranging gives <i>M</i> = <i>gR</i><sup>2</sup>/<i>G</i>, and putting in 9.8 m/s<sup>2</sup> and 6.4 × 10<sup>6</sup> m gives about 6 × 10<sup>24</sup> kg. Divide by the volume and you get a mean density of roughly 5.5 times that of water. That number was Cavendish's real prize, and it carried a shock: surface rocks are nowhere near that dense, so the deep interior must be far denser than the crust. It was the first hint of the Earth's iron core."
        },
        {
          "t": "p",
          "html": "The second half of this topic fixes an approximation the chapter has quietly leaned on the whole way. We have treated one body as a fixed centre and the other as a small thing going round it: Earth fixed, satellite circling. But Newton's third law insists the satellite pulls the Earth just as hard. When the two masses are <b>comparable</b>, two stars, or a planet and a heavy moon, <b>both bodies move</b>, each circling their common balance point, the centre of mass. Two stars locked in mutual orbit, a <b>binary system</b>, is the cleanest case: neither is the centre, and they waltz around a point between them. Remarkably, that two-body dance reduces to a single equivalent one-body problem, and once it does, every orbit formula from the last topic snaps back into use unchanged."
        },
        {
          "t": "def",
          "term": "Reduced mass",
          "html": "μ = <i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), in kg. Replace the two-body problem by a <b>single</b> body of mass μ orbiting a fixed centre at the separation <i>r</i>, under the same force <i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup>, and every single-body result you already have applies unchanged: the kinetic energy is ½μ<i>v</i><sub>rel</sub><sup>2</sup>, the angular momentum about the centre of mass is μ<i>v</i><sub>rel</sub><i>r</i>. The reduced mass is always <b>smaller than either body</b>. And when one mass hugely exceeds the other, μ → the smaller mass and the heavier body becomes the effectively fixed centre, which is exactly the approximation made in the satellite topic. So the two-body treatment does not replace the earlier work; it <i>contains</i> it as the limiting case where one mass dominates."
        },
        {
          "t": "defgrid",
          "title": "Symbols for the constant and the binary",
          "rows": [
            { "k": "<i>G</i>", "v": "the universal gravitational constant, in N m<sup>2</sup>/kg<sup>2</sup>; the smallest in magnitude of all the fundamental constants" },
            { "k": "κ", "v": "torsion constant of the suspending fibre, in N m per radian" },
            { "k": "θ", "v": "the angle through which the fibre twists, in radian" },
            { "k": "<i>M</i>, <i>R</i>, ρ", "v": "mass, radius and mean density of the planet, in kg, m and kg/m<sup>3</sup>" },
            { "k": "<i>r</i><sub>1</sub>, <i>r</i><sub>2</sub>", "v": "the two stars' distances from the centre of mass, in m, with <i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>r</i>" },
            { "k": "μ", "v": "reduced mass of the pair, in kg, always smaller than either member" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · CAVENDISH, AND WEIGHING THE EARTH",
          "main": "<i>G</i> = κ θ <i>d</i><sup>2</sup> ÷ (<i>M m L</i>)<br><i>M</i> = <i>g R</i><sup>2</sup> ÷ <i>G</i> · ρ = 3<i>g</i> ÷ (4π<i>G R</i>)",
          "legend": [
            "<i>m</i> is each small suspended mass and <i>M</i> each large mass, both in kg; <i>d</i> is the centre-to-centre distance of a near pair, in m",
            "<i>L</i> is the length of the suspended rod in m, θ the twist in radian, and κ the fibre's torsion constant in N m per radian",
            "<i>g</i> is the surface gravity in m/s<sup>2</sup>, <i>R</i> the planet's radius in m, and ρ its mean density in kg/m<sup>3</sup>",
            "κ is found separately by timing the free torsional oscillations of the rod, since their period is 2π√(<i>I</i>/κ) with <i>I</i> the rod-and-masses moment of inertia"
          ],
          "note": "For the Earth these give M ≈ 6 × 10<sup>24</sup> kg and ρ ≈ 5.5 × 10<sup>3</sup> kg/m<sup>3</sup>, about 5.5 times water, which is far denser than surface rock and was the first evidence of a metallic core."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · A TWO-BODY SYSTEM",
          "tag": "an isolated pair, gravity the only internal force",
          "main": "<i>r</i><sub>1</sub> = <i>m</i><sub>2</sub><i>r</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), so <i>m</i><sub>1</sub><i>r</i><sub>1</sub> = <i>m</i><sub>2</sub><i>r</i><sub>2</sub><br>ω<sup>2</sup> = <i>G</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)/<i>r</i><sup>3</sup> · <i>T</i> = 2π√(<i>r</i><sup>3</sup>/(<i>G</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)))<br>μ = <i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) · <i>E</i> = −<i>G m</i><sub>1</sub><i>m</i><sub>2</sub>/2<i>r</i>",
          "legend": [
            "<i>m</i><sub>1</sub> and <i>m</i><sub>2</sub> are the two masses in kg and <i>r</i> their separation in m; <i>r</i><sub>1</sub> and <i>r</i><sub>2</sub> are their orbit radii about the centre of mass, in m",
            "ω is the common angular velocity in rad/s and <i>T</i> the common period in s: both stars go round in the same time, whatever their masses",
            "μ is the reduced mass in kg and <i>E</i> the total mechanical energy of the bound pair, in joule (J), negative as every bound system must be",
            "this is Kepler's third law with the <b>total</b> mass in place of a single central mass, which is exactly how astronomers weigh binary stars"
          ],
          "note": "Orbit radius goes inversely with mass, so the heavier star traces the smaller circle. Many students assign the bigger orbit to the bigger mass, which is exactly backwards."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE CAVENDISH EXPERIMENT, TAP A LINE",
          "steps": [
            {
              "eq": "two small masses <i>m</i> at the ends of a light rod of length <i>L</i>, hung at its midpoint by a fine fibre with a mirror on it",
              "why": "The whole design exists to convert a linear pull into a rotation, because a rotation about a nearly frictionless suspension can be made arbitrarily sensitive by choosing a thin enough fibre."
            },
            {
              "eq": "two large masses <i>M</i> are brought up, one on each side, each pulling with <i>F</i> = <i>GMm</i>/<i>d</i><sup>2</sup>, giving a torque <i>FL</i>",
              "why": "Placed on opposite sides they form a <b>couple</b>: two equal forces in opposite directions with a lever arm, so they twist the rod without pushing it anywhere."
            },
            {
              "eq": "the fibre resists with a restoring torque κθ, and the rod settles where <i>GMmL</i>/<i>d</i><sup>2</sup> = κθ",
              "why": "Equilibrium is a torque balance, not a force balance. The fibre obeys a linear torsion law, so the twist is directly proportional to the torque applied."
            },
            {
              "eq": "θ is read from the deflection of a light spot on a distant scale, and κ from the free torsional period 2π√(<i>I</i>/κ)",
              "why": "The mirror is an optical lever: a twist of θ swings the reflected beam through 2θ, and over a room's length that becomes centimetres of movement. The torsion constant is measured separately by letting the rod swing freely and timing it."
            },
            {
              "eq": "<i>G</i> = κθ<i>d</i><sup>2</sup>/(<i>MmL</i>)",
              "why": "Every quantity on the right is measurable on a laboratory bench. Cavendish landed within about one percent of the modern value, in 1798."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 7.12 · THE TORSION BALANCE, FROM ABOVE",
          "chips": ["a force turned into a twist"],
          "captions": [
            "Two small masses m hang on a light rod from a fine fibre at its centre. Two large masses M are brought up on opposite sides, so their pulls form a couple and twist the fibre through θ from its rest position, shown dashed. A mirror on the fibre throws a light beam onto a distant scale, turning a hair's breadth of twist into a readable deflection."
          ],
          "frames": [
            {
              "x": [-4, 4], "y": [-2.6, 2.6], "axes": "none", "aspect": 0.66,
              "segments": [
                { "from": [-2.2, 0], "to": [2.2, 0] },
                { "from": [-2.13, -0.57], "to": [2.13, 0.57], "dash": true, "soft": true },
                { "from": [-3.6, 2.15], "to": [-2.0, 2.15], "label": "scale" }
              ],
              "curves": [
                { "c": "circle", "cx": -2.2, "cy": 1.5, "r": 0.45 },
                { "c": "circle", "cx": 2.2, "cy": -1.5, "r": 0.45 }
              ],
              "marks": [
                { "x": -2.2, "y": 0, "glyph": "dot", "label": "m" },
                { "x": 2.2, "y": 0, "glyph": "dot", "label": "m" },
                { "x": -2.2, "y": 1.5, "glyph": "dot", "label": "M" },
                { "x": 2.2, "y": -1.5, "glyph": "dot", "label": "M" },
                { "x": 0, "y": 0, "glyph": "cross" }
              ],
              "arrows": [
                { "from": [-2.2, 0.3], "to": [-2.2, 1.0], "tone": "amber", "label": "F" },
                { "from": [2.2, -0.3], "to": [2.2, -1.0], "tone": "amber", "label": "F" },
                { "from": [0, 0.25], "to": [-2.9, 1.9], "dash": true, "label": "beam" }
              ],
              "arcs": [{ "at": [0, 0], "r": 0.95, "from": 0, "to": 15, "label": "θ" }],
              "labels": [{ "x": 0.05, "y": -0.85, "text": "fibre" }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · KEPLER'S THIRD LAW FOR A BINARY",
          "steps": [
            {
              "eq": "the centre of mass divides the separation inversely with the masses: <i>m</i><sub>1</sub><i>r</i><sub>1</sub> = <i>m</i><sub>2</sub><i>r</i><sub>2</sub>, with <i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>r</i>",
              "why": "No external force acts, so the centre of mass cannot accelerate. Each star circles it, and the heavier one keeps to the smaller circle to hold the balance point fixed. Solving the pair gives <i>r</i><sub>1</sub> = <i>m</i><sub>2</sub><i>r</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)."
            },
            {
              "eq": "for <i>m</i><sub>1</sub>, gravity supplies the centripetal force of its own circle: <i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup> = <i>m</i><sub>1</sub>ω<sup>2</sup><i>r</i><sub>1</sub>",
              "why": "Careful with the two different distances: the <b>force</b> uses the full separation <i>r</i>, while the <b>circular motion</b> uses that star's own orbit radius <i>r</i><sub>1</sub>. Confusing them is the standard error."
            },
            {
              "eq": "substitute <i>r</i><sub>1</sub> and cancel: ω<sup>2</sup> = <i>G</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)/<i>r</i><sup>3</sup>",
              "why": "Both <i>m</i><sub>1</sub> and one power of <i>r</i> drop out, and what is left is symmetric in the two masses, as it must be. Running the same argument for <i>m</i><sub>2</sub> gives the identical ω, so both stars share one angular velocity and one period."
            },
            {
              "eq": "<i>T</i> = 2π√(<i>r</i><sup>3</sup>/(<i>G</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)))",
              "why": "Kepler's third law again, but with the <b>sum</b> of the masses where a single central mass used to be. Measure a binary's period and separation and you have read off the total mass of two stars you will never visit."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 7.13 · A BINARY, AROUND ITS BALANCE POINT",
          "chips": ["heavier star, smaller circle"],
          "captions": [
            "Stars of mass m and 2m, separated by d, circling their common centre of mass C. Because mr₁ = 2mr₂, the lighter star's orbit radius is twice the heavier one's: r₁ = 2d/3 and r₂ = d/3. Both complete a lap in the same time, so the lighter star also moves twice as fast, and the two always sit on opposite sides of C."
          ],
          "frames": [
            {
              "x": [-3.4, 3.4], "y": [-2.5, 2.5], "axes": "none", "aspect": 0.74,
              "curves": [
                { "c": "circle", "cx": 0, "cy": 0, "r": 2.4, "dash": true },
                { "c": "circle", "cx": 0, "cy": 0, "r": 1.2, "dash": true },
                { "c": "circle", "cx": -2.4, "cy": 0, "r": 0.3 },
                { "c": "circle", "cx": 1.2, "cy": 0, "r": 0.42 }
              ],
              "marks": [
                { "x": -2.4, "y": 0, "glyph": "dot", "label": "m" },
                { "x": 1.2, "y": 0, "glyph": "dot", "label": "2m" },
                { "x": 0, "y": 0, "glyph": "plus", "label": "C" }
              ],
              "segments": [
                { "from": [-2.4, 0], "to": [0, 0], "label": "r₁" },
                { "from": [0, 0], "to": [1.2, 0], "label": "r₂" }
              ],
              "arrows": [
                { "from": [-2.4, 0.35], "to": [-2.4, 1.35], "tone": "amber", "label": "v₁" },
                { "from": [1.2, -0.47], "to": [1.2, -1.47], "tone": "amber", "label": "v₂" },
                { "from": [-2.4, -2.1], "to": [1.2, -2.1], "head": "both", "label": "d" }
              ],
              "labels": [{ "x": 0, "y": 1.6, "text": "centre of mass" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Analysing a binary star system",
          "steps": [
            "<b>Locate the centre of mass first.</b> <i>m</i><sub>1</sub><i>r</i><sub>1</sub> = <i>m</i><sub>2</sub><i>r</i><sub>2</sub> with <i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>r</i>. Sanity check: the heavier star must come out on the smaller circle.",
            "<b>Use the total mass in Kepler's third law.</b> ω<sup>2</sup> = <i>G</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)/<i>r</i><sup>3</sup>. Using one mass alone is the classic slip and costs you a factor of √2 for equal stars.",
            "<b>Get each speed as <i>v</i> = ω<i>r<sub>i</sub></i>.</b> Both stars share ω, so their speeds are in the same ratio as their orbit radii, which is inversely as their masses. Check it against momentum: <i>m</i><sub>1</sub><i>v</i><sub>1</sub> = <i>m</i><sub>2</sub><i>v</i><sub>2</sub>.",
            "<b>For energy, use the reduced mass.</b> The total kinetic energy is ½μ<i>v</i><sub>rel</sub><sup>2</sup> with <i>v</i><sub>rel</sub> = ω<i>r</i>, and the potential energy is −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i>.",
            "<b>Check the total.</b> It must come out as <i>E</i> = −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/2<i>r</i>, negative because the pair is bound. If your kinetic and potential terms do not combine to exactly half the potential, something in step 3 or 4 is wrong."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Using the acceleration due to gravity at the Earth's surface, estimate the mass of the Earth. Take <i>g</i> = 9.8 m/s<sup>2</sup>, <i>R</i> = 6.4 × 10<sup>6</sup> m.",
          "steps": [
            "From <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup>, rearrange for the unknown: <i>M</i> = <i>gR</i><sup>2</sup>/<i>G</i>.",
            "<i>R</i><sup>2</sup> = (6.4 × 10<sup>6</sup>)<sup>2</sup> = 4.096 × 10<sup>13</sup>, so <i>gR</i><sup>2</sup> = (9.8)(4.096 × 10<sup>13</sup>) = 4.01 × 10<sup>14</sup>.",
            "<i>M</i> = 4.01 × 10<sup>14</sup>/(6.67 × 10<sup>−11</sup>) ≈ 6.0 × 10<sup>24</sup> kg.",
            "This is the celebrated weighing of the Earth: an entire planet's mass deduced from a falling apple's acceleration and a laboratory value of <i>G</i>, with no need to leave the ground."
          ],
          "ans": "M ≈ 6.0 × 10<sup>24</sup> kg"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A planet has the same surface gravity as the Earth but twice the radius. What is the ratio of its mean density to the Earth's?",
          "steps": [
            "Pick the right form of <i>g</i>. Since densities are being compared, use <i>g</i> = (4/3)π<i>G R</i>ρ, so <i>g</i> ∝ <i>R</i>ρ.",
            "Equal <i>g</i> means <i>R<sub>p</sub></i>ρ<sub>p</sub> = <i>R<sub>E</sub></i>ρ<sub>E</sub>, so ρ<sub>p</sub>/ρ<sub>E</sub> = <i>R<sub>E</sub></i>/<i>R<sub>p</sub></i> = 1/2.",
            "The planet's mean density is half the Earth's.",
            "The trap is reaching for <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup> and getting tangled computing masses. Same <i>g</i>, double <i>R</i>, therefore half ρ: choose the form of <i>g</i> that isolates the quantity being compared and the work disappears."
          ],
          "ans": "half the Earth's mean density"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Two stars, each of mass <i>M</i>, orbit their common centre of mass in a circle. Their separation is <i>d</i>. Find the period of revolution.",
          "steps": [
            "For a two-body system the angular velocity obeys ω<sup>2</sup> = <i>G</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)/<i>d</i><sup>3</sup>, using the <b>separation</b> <i>d</i> in the denominator, not either star's orbit radius.",
            "With <i>m</i><sub>1</sub> = <i>m</i><sub>2</sub> = <i>M</i>, the total mass is 2<i>M</i>, so ω<sup>2</sup> = 2<i>GM</i>/<i>d</i><sup>3</sup>.",
            "<i>T</i> = 2π/ω = 2π√(<i>d</i><sup>3</sup>/(2<i>GM</i>)).",
            "Note the factor of 2 inside the root. Treating one star as fixed and writing <i>T</i> = 2π√(<i>d</i><sup>3</sup>/<i>GM</i>) would be wrong by a factor of √2, because in a binary <b>both</b> masses drive the orbit."
          ],
          "ans": "T = 2π√(d<sup>3</sup>/(2GM))"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Two stars of mass <i>m</i> and 2<i>m</i>, separated by <i>d</i>, revolve in circles about their common centre of mass. Find (a) each star's orbit radius, (b) each orbital speed, and (c) the total mechanical energy.",
          "steps": [
            "(a) The centre of mass gives <i>mr</i><sub>1</sub> = 2<i>mr</i><sub>2</sub>, so <i>r</i><sub>1</sub> = 2<i>r</i><sub>2</sub>, and with <i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>d</i> we get <i>r</i><sub>2</sub> = <i>d</i>/3 for the heavier star and <i>r</i><sub>1</sub> = 2<i>d</i>/3 for the lighter. The lighter star traces the bigger circle.",
            "(b) The common angular velocity is ω = √(3<i>Gm</i>/<i>d</i><sup>3</sup>), from the total mass 3<i>m</i>. Then <i>v</i> = ω<i>r</i>: <i>v</i><sub>1</sub> = (2/3)√(3<i>Gm</i>/<i>d</i>) and <i>v</i><sub>2</sub> = (1/3)√(3<i>Gm</i>/<i>d</i>), so <i>v</i><sub>1</sub> = 2<i>v</i><sub>2</sub>, matching <i>mv</i><sub>1</sub> = 2<i>mv</i><sub>2</sub>.",
            "(c) Kinetic energy, via the reduced mass μ = (<i>m</i>)(2<i>m</i>)/(3<i>m</i>) = 2<i>m</i>/3 and <i>v</i><sub>rel</sub> = ω<i>d</i>, so <i>v</i><sub>rel</sub><sup>2</sup> = 3<i>Gm</i>/<i>d</i>: <i>K</i> = ½(2<i>m</i>/3)(3<i>Gm</i>/<i>d</i>) = <i>Gm</i><sup>2</sup>/<i>d</i>.",
            "With <i>U</i> = −2<i>Gm</i><sup>2</sup>/<i>d</i>, the total is <i>E</i> = <i>Gm</i><sup>2</sup>/<i>d</i> − 2<i>Gm</i><sup>2</sup>/<i>d</i> = −<i>Gm</i><sup>2</sup>/<i>d</i>, negative as a bound system must be. Check it against the compact formula: −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/2<i>d</i> = −<i>G</i>(<i>m</i>)(2<i>m</i>)/2<i>d</i> = −<i>Gm</i><sup>2</sup>/<i>d</i>."
          ],
          "ans": "r<sub>1</sub> = 2d/3, r<sub>2</sub> = d/3 · v<sub>1</sub> = 2v<sub>2</sub> = (2/3)√(3Gm/d) · E = −Gm<sup>2</sup>/d"
        },
        {
          "t": "mcq",
          "q": "In the Cavendish experiment, the extremely small gravitational force is made measurable by:",
          "opts": [
            { "label": "using very large test masses only", "nudge": "Insufficient on its own: even large masses give a minuscule force without the amplification of the optical lever." },
            { "label": "converting it into a torsional twist read by an optical lever", "nudge": null },
            { "label": "performing it in vacuum at high temperature", "nudge": "Irrelevant to the principle: gravity is independent of both the medium and the temperature." },
            { "label": "using the Earth's magnetic field", "nudge": "Gravity has nothing to do with magnetism; no magnetic effect enters the experiment." }
          ],
          "correct": 1,
          "solution": "The genius of the design is turning a tiny linear force into a twist of a delicate fibre, then magnifying that twist with a mirror and light beam so it can be read as a large deflection on a distant scale."
        },
        {
          "t": "mcq",
          "q": "The mass of the Earth can be estimated from:",
          "opts": [
            { "label": "<i>g</i>, <i>R</i> and <i>G</i>", "nudge": null },
            { "label": "<i>g</i> and <i>R</i> only", "nudge": "Without G you only ever know the product GM, which is precisely why G had to be measured in a laboratory." },
            { "label": "<i>G</i> only", "nudge": "G is a universal constant and says nothing whatever about any particular planet." },
            { "label": "the Earth's rotation period", "nudge": "Rotation affects the effective g slightly, but it carries no information about the total mass." }
          ],
          "correct": 0,
          "solution": "From g = GM/R<sup>2</sup> we get M = gR<sup>2</sup>/G, and all three quantities are needed. This is also why G was historically the last of the trio G, M and g to be pinned down."
        },
        {
          "t": "mcq",
          "q": "In a binary star system, the two stars always have the same:",
          "opts": [
            { "label": "orbital speed", "nudge": "Equal only if the masses are equal; in general the lighter star moves faster." },
            { "label": "orbital radius", "nudge": "Equal only for equal masses; in general the heavier star keeps to the smaller circle." },
            { "label": "angular velocity, and therefore period", "nudge": null },
            { "label": "kinetic energy", "nudge": "Kinetic energy goes inversely with mass here, so the lighter star actually carries more of it." }
          ],
          "correct": 2,
          "solution": "Both stars complete one orbit in the same time, so they share a common ω and T. Their radii, speeds and kinetic energies all differ, each going inversely with mass."
        },
        {
          "t": "mcq",
          "q": "Two stars of mass <i>m</i> and 2<i>m</i> orbit their common centre of mass. The ratio of the lighter star's orbit radius to the heavier star's is:",
          "opts": [
            { "label": "1 : 2", "nudge": "This inverts the relation: it is the heavier star, not the lighter, that keeps to the smaller circle." },
            { "label": "2 : 1", "nudge": null },
            { "label": "1 : 1", "nudge": "This would require the two masses to be equal." },
            { "label": "4 : 1", "nudge": "This wrongly squares the mass ratio; the dependence is a simple inverse." }
          ],
          "correct": 1,
          "solution": "The centre of mass gives mr₁ = 2mr₂, so r₁/r₂ = 2. Orbital radius is inversely proportional to mass about the centre of mass, so the lighter star swings on the larger circle."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Describe, with its working relation, how the Cavendish experiment determines <i>G</i>. Why is the mirror-and-scale arrangement essential?", "a": "Gravitational torque equals the fibre's restoring torque, giving <i>G</i> = κθ<i>d</i><sup>2</sup>/(<i>MmL</i>). The optical lever magnifies a microscopic twist into a deflection large enough to read, which is what makes the measurement possible at all." },
            { "q": "[NEET] A planet has the same mean density as the Earth but half its radius. If the Earth's surface gravity is <i>g</i>, what is the planet's?", "a": "<i>g</i> ∝ ρ<i>R</i> at fixed density, so halving the radius halves the gravity: <i>g</i>/2." },
            { "q": "[JEE Main] Compute the mean density of the Earth from <i>g</i> = 9.8 m/s<sup>2</sup>, <i>R</i> = 6.4 × 10<sup>6</sup> m and <i>G</i> = 6.67 × 10<sup>−11</sup> in SI units.", "a": "ρ = 3<i>g</i>/(4π<i>GR</i>) = 29.4/(4π × 6.67 × 10<sup>−11</sup> × 6.4 × 10<sup>6</sup>) ≈ 5.5 × 10<sup>3</sup> kg/m<sup>3</sup>." },
            { "q": "[JEE Main] Two stars of masses <i>m</i><sub>1</sub> and <i>m</i><sub>2</sub> form a binary of separation <i>r</i> and period <i>T</i>. Show how observing <i>T</i> and <i>r</i> yields the sum of the masses.", "a": "From ω<sup>2</sup> = <i>G</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)/<i>r</i><sup>3</sup> with ω = 2π/<i>T</i>: <i>m</i><sub>1</sub> + <i>m</i><sub>2</sub> = 4π<sup>2</sup><i>r</i><sup>3</sup>/(<i>GT</i><sup>2</sup>)." },
            { "q": "[JEE Advanced] In a binary, stars of mass <i>M</i> and 3<i>M</i> orbit their centre of mass with separation <i>d</i>. Find the ratio of their kinetic energies.", "a": "Speeds go inversely with mass, so <i>K</i> = ½<i>mv</i><sup>2</sup> ∝ 1/<i>m</i>. Hence <i>K<sub>M</sub></i> : <i>K</i><sub>3M</sub> = 3 : 1, the lighter star carrying the larger share." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Thinking orbits alone can give <i>G</i>.</b> Planetary and satellite data fix only the product <i>GM</i>. The value of <i>G</i> has to come from a laboratory experiment between known masses, which is why it was historically the last of <i>G</i>, <i>M</i> and <i>g</i> to be measured.",
            "<b>Using single-body Kepler for a binary.</b> For two comparable masses <i>T</i> = 2π√(<i>r</i><sup>3</sup>/(<i>G</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))), with the <b>total</b> mass. Forgetting the sum gives a √2-sized error for equal stars.",
            "<b>Getting the centre-of-mass radii backwards.</b> The <b>heavier</b> star orbits on the <b>smaller</b> circle, since <i>r</i> ∝ 1/<i>m</i>. Many students assign the bigger orbit to the bigger mass, which is exactly wrong.",
            "<b>Mixing up the separation and an orbit radius.</b> The gravitational force uses the full separation <i>r</i>; each star's centripetal requirement uses its own <i>r</i><sub>1</sub> or <i>r</i><sub>2</sub>. Substituting one where the other belongs quietly wrecks the whole calculation.",
            "<b>Choosing the wrong form of <i>g</i>.</b> For same-gravity or same-density planet comparisons, <i>g</i> = (4/3)π<i>GR</i>ρ is far faster than <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup>. Pick the form that isolates the quantity you are comparing."
          ]
        },
        {
          "t": "protip",
          "html": "to weigh anything in space, find what orbits it. the Sun's mass from the Earth's orbit, the Earth's mass from the Moon's, a binary's total mass from its period, all from the one relation M = 4π²r³/GT². and when a problem has two comparable masses, replace it at once with a single body of the reduced mass μ = m<sub>1</sub>m<sub>2</sub>/(m<sub>1</sub> + m<sub>2</sub>) orbiting a fixed centre at separation r: every energy and angular-momentum formula from the satellite topic then applies word for word, with no rederivation at all."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "Cavendish: G = κθd<sup>2</sup>/(MmL)", "note": "gravitational torque balanced against the fibre's, read by optical lever" },
            { "f": "orbits give only the product GM; G needs a laboratory", "note": "which is why G was the last of the trio to be measured" },
            { "f": "M = gR<sup>2</sup>/G ≈ 6 × 10<sup>24</sup> kg · ρ = 3g/(4πGR) ≈ 5.5 × 10<sup>3</sup> kg/m<sup>3</sup>", "note": "far denser than surface rock: the first evidence of an iron core" },
            { "f": "binary: r<sub>1</sub> = m<sub>2</sub>r/(m<sub>1</sub> + m<sub>2</sub>), so radius goes as 1/m", "note": "heavier star, smaller circle, and both share one period" },
            { "f": "ω<sup>2</sup> = G(m<sub>1</sub> + m<sub>2</sub>)/r<sup>3</sup>", "note": "Kepler III with the total mass, which is how binaries are weighed" },
            { "f": "μ = m<sub>1</sub>m<sub>2</sub>/(m<sub>1</sub> + m<sub>2</sub>) · E = −Gm<sub>1</sub>m<sub>2</sub>/2r", "note": "reduced mass turns two bodies into one; E is negative, so bound" }
          ],
          "aids": [
            "\"orbits weigh the product GM; Cavendish weighed G itself\"",
            "\"heavier star, smaller circle; binary Kepler uses the sum\""
          ]
        }
      ]
    }
  ]
};

export default phy11Gravitation;
