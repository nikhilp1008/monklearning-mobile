/**
 * Chapter 02 · Motion in a Straight Line. Physics, Class 11.
 *
 * The first physics chapter, restructured from pages 74 to 130 of the Drona
 * Class 11 Physics Master Reference (Chapter 2: Kinematic Quantities,
 * Graphical Analysis, Equations of Motion and Free Fall, Relative Velocity,
 * Motion with Variable Acceleration) into the block system in
 * design_handoff_textbooks/CONTENT_SPEC.md and lib/textbooks.ts, matching the
 * voice and density of math-12-01-relations.ts.
 *
 * FIVE TOPICS, NOT SIX. The source has exactly five subtopics in this range,
 * and they map 1:1 onto the five topics below: nothing was merged or split to
 * force a sixth. The Round 2 Addendum (pages 118 to 130: five addenda, A
 * n-leg and halted averaging, B the time-average versus the space-average,
 * C vertical-flight bookkeeping, D pursuit and crossing verdicts, E
 * velocity-dependent drag) is explicitly not a topic per the brief, and
 * every line drawn from it below is confined to a `protip`, a `mistakes`
 * item, or the hardest `mcq`/`ex` in the group it extends: Addendum A/B into
 * Topic 01's averaging material, C into Topic 03's free-fall material, D into
 * Topic 04's pursuit material, E into Topic 05's terminal-velocity material.
 * No `formula`, `defgrid`, `deriv` or `proc` block below is sourced from the
 * addendum. That discipline, plus five topics instead of six, is why this
 * chapter runs to 117 blocks against the 145 to 155 a six-topic chapter of
 * this density would produce: per-topic density here (23.4 blocks/topic) is
 * within a rounding error of math-12-01-relations.ts's own (23.5), so nothing
 * here is thin, there is simply one fewer topic's worth of it.
 *
 * ERRATA REVIEWED (source pages 977 to 981, all five chapters covered; two
 * entries touch this chapter, both purely structural, neither changes any
 * number this chapter teaches):
 *
 *   - Page 978: the printed Contents table for this chapter stops at
 *     Sub-topic 04 and omits "Sub-topic 05: Motion with Variable Acceleration
 *     (Calculus Methods), page 30". The errata confirms the subtopic itself
 *     is real and correctly written in the body; only the table of contents
 *     is short a line. This chapter has no table of contents to reproduce, so
 *     the omission has no effect here beyond confirming Topic 05's source
 *     material is genuine.
 *   - Page 978: Sub-topic 01, Section 6, Q2 (the circular-lap MCQ). The
 *     printed solution discusses a distractor "(D) πR, 2R" that the errata
 *     says the question's own option list does not carry (the extraction
 *     used for this chapter did show four options, matching the discussion,
 *     so the two may disagree on formatting rather than content). Immaterial
 *     either way: this chapter's own MCQ2 in Topic 01 is authored fresh, with
 *     four properly numbered options and a distractor for each, so the
 *     defect cannot propagate.
 *
 * CORRECTIONS BEYOND THE ERRATA: none found. Every worked example, every
 * practice answer and every MCQ key across all five subtopics (pages 74 to
 * 117) was recomputed independently; all match the source's printed answers.
 * Several Round 2 Addendum results used for `protip`/`mistakes` material
 * (Examples A.1, A.2, C.1, C.2, D.1, D.2, E.1, E.2) were checked the same way
 * and also match. This is unlike the maths chapters, where re-solving found
 * dozens of errors; this particular chapter's arithmetic is clean, only its
 * PDF extraction is damaged (see below).
 *
 * SOURCE DAMAGE. Two of the four damage patterns named in the brief were not
 * observed in pages 74 to 130: no ASCII-shifted heading run (the "+29"
 * pattern) appears anywhere in this range, and this chapter has no
 * Greek-letter or accented content of the kind that vanishes without a
 * placeholder (no theta, no loanwords; the only Greek characters used, pi and
 * capital delta, both survived extraction intact). The other two patterns are
 * pervasive and every instance below was re-authored from context, never
 * transcribed:
 *
 *   - Superscripts and subscripts land on their own line, breaking every
 *     squared or cubed quantity and every unit with an exponent. This hits
 *     literally every m/s2, every t2, every formula with a power in it,
 *     across all five subtopics; recomputing each worked example (see above)
 *     was the check that these were re-authored correctly.
 *   - Inter-word spaces vanish at tight kerning. Confirmed instances actually
 *     used below or in adjacent prose: "thesedefinitions" (p.74, "these
 *     definitions"), "calleddisplacement" (p.74), "hisdistance" (p.75, "his
 *     distance"), "whyinstantaneous" (p.76), "anddisplacement" (p.86),
 *     "beforeintegrating" (p.90, "before integrating"), "thedisplacement" and
 *     "negativedisplacement" (p.83), "slopeisthe" (p.90, "slope is the"),
 *     "risingonly" (p.92, "rising only"), "movingforwarduntil" (p.90, "moving
 *     forward until").
 *   - One damage pattern this chapter has that the brief's examples do not:
 *     a minus sign inside a fraction or a bare subtraction extracts as the
 *     garbage token "\n7", e.g. page 76's "𝑣avg = 𝑥2\n7 𝑥1 / 𝑡2\n7 𝑡1" is
 *     (x2 − x1)/(t2 − t1), and this happens in nearly every two-term
 *     subtraction in Sections 2 to 4 of every subtopic. Same family of defect
 *     as the brief's Greek-letter loss (a non-ASCII math glyph dies on
 *     extraction), different glyph.
 *   - One passage was reconstructed almost entirely from its own caption
 *     rather than its garbled body text: the inline formula under Figure 2.6
 *     (page 96) extracts as "= ()()  rectangle + 1 2 ()(−)  triangle .
 *     Substitute −= from equation (1): = + 1 2 ()() ⇒ = + 1 22", which is not
 *     recoverable token by token. It is cross-checked instead against
 *     Derivation 2's own prose earlier on the same page (the rectangle-plus-
 *     triangle argument for s = ut + ½at2) and rebuilt from that.
 *
 * DIMENSIONS. Every formula printed below, reduced to M L T:
 *
 *   - v = dx/dt: [L]/[T] = [L T−1]. a = dv/dt: [L T−1]/[T] = [L T−2].
 *   - Harmonic/arithmetic mean of two speeds: both sides [L T−1], a
 *     dimensionless combination of two like quantities.
 *   - v = u + at: [L T−1] = [L T−1] + [L T−2][T] = [L T−1] + [L T−1]. ✓.
 *   - s = ut + ½at2: [L] = [L T−1][T] + [L T−2][T2] = [L] + [L]. ✓.
 *   - v2 = u2 + 2as: [L2 T−2] = [L2 T−2] + [L T−2][L] = [L2 T−2] + [L2 T−2].
 *     ✓.
 *   - snth = u + (a/2)(2n − 1): informal as printed. n is a pure count, not a
 *     time, so the right side reads as a velocity, [L T−1], only because the
 *     formula implicitly multiplies by a hidden 1 second (it is really
 *     s(n) − s(n−1) with t measured in seconds and n substituted for that
 *     numeral). Flagged in the chapter itself as valid only in SI seconds.
 *   - H = u2/2g: [L2 T−2]/[L T−2] = [L]. ✓. tup = u/g: [L T−1]/[L T−2] = [T].
 *     ✓.
 *   - Stopping distance d = v2/2a: [L2 T−2]/[L T−2] = [L]. ✓.
 *   - vAB = vA − vB: [L T−1]. aAB = aA − aB: [L T−2]. Both trivially
 *     consistent, being differences of like quantities.
 *   - tmeet = separation/relative speed: [L]/[L T−1] = [T]. ✓.
 *   - Master key a = v dv/dx: [L T−2] = [L T−1]·[L T−1]/[L] = [L2 T−2]/[L] =
 *     [L T−2]. ✓.
 *   - Case 1, v = v0 + ∫f(t)dt: adds [L T−2][T] = [L T−1] to a velocity. ✓.
 *   - Case 3, (v2 − v02)/2 = ∫f(x)dx: [L2 T−2] on both sides. ✓.
 *   - Terminal velocity, a = g − kv: for the two terms to share [L T−2], k
 *     must carry [T−1]. Then vterm = g/k: [L T−2]/[T−1] = [L T−1]. ✓.
 *
 *   19 formula lines checked, 19 dimensionally consistent (the nth-second
 *   formula carries the informal-units caveat above rather than an error).
 *
 * PHYSICAL PLAUSIBILITY AND LIMITING CASES. No speed in any worked example,
 * practice item or MCQ approaches c; no negative time or negative distance
 * survives a solution (every quadratic's unphysical root is explicitly
 * discarded, matching the source). Limiting cases used pedagogically: the
 * Topic 05 consistency-check `deriv` shows a → constant collapsing the
 * position-dependent case back to v2 = u2 + 2as, i.e. the general tool
 * reproducing the special-case tool it generalises; Topic 01's def block on
 * v = 0 not forcing a = 0 is the u/t-independent limiting case at the top of
 * a throw, used three separate times (Topics 01, 03, and again as a Topic 05
 * mistake about terminal speed, where the limiting condition is a = 0, not
 * v = 0).
 *
 * SEAMS: what is quoted as already known, from math-11-12-limits.ts, and
 * never re-derived here. The derivative as a limit of a difference quotient
 * (that file's Topic 01, "What a Limit Actually Is") is quoted directly in
 * Topic 01's own `deriv` block, which identifies velocity as exactly that
 * limit rather than re-proving it. The power rule, d/dx: xn → n xn−1 (that
 * file's Topic 05 snapshot line), is used without comment in every
 * differentiated position function in Topics 01, 03 and 05. The chain rule
 * (that file's Topic 05) is what the master key a = v dv/dx in Topic 05
 * actually is, dv/dt rewritten through dv/dx · dx/dt, and is named as such
 * rather than re-derived. Integration is NOT in math-11-12-limits.ts at all
 * (checked: that file teaches derivatives only, no integral appears in it),
 * matching the real syllabus, Class 11 Mathematics reaches integration only
 * in Class 12. So Topic 05's `think` block introduces integration itself, in
 * one line, as the power rule run backward, rather than assuming it is
 * already known.
 *
 * Eight `diagram` blocks, seven `plot` and one `flow`, matching all eight
 * figure briefs. None dropped, no new figure vocabulary requested. Figure
 * 2.2 (the 2x3 reference chart) and Figure 2.5 (the a–t/v–t pair) are each
 * one diagram block with, respectively, six and two chips, per the panel
 * rule, never a grid inside one frame. The `polys` fill colour is a fixed
 * amber wash regardless of `tone` (checked against components/textbook/
 * plot.tsx: only a poly's stroke and label read `tone`, not its fill), so
 * Figures 2.2's sixth chip and 2.4 tell + and − apart by an explicit "+"/"−"
 * label plus the region's position above or below the axis, not by a
 * green/red fill that the renderer would not actually paint.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy11MotionStraightLine: Chapter = {
  "chapter": "02",
  "title": "Motion in a Straight Line",
  "subject": "Physics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Distance, Displacement and the Rates Built From Them",
      "chip": "01 QUANTITIES",
      "kalam": "name your positive direction, then hold it",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Kinematic Quantities</b><br>This is the bedrock of all mechanics. CBSE Boards ask 1 to 2 marks on the distance versus displacement distinction or a clean average-speed calculation. JEE Main reliably carries one question, typically an average-speed trap or a calculus-based position or velocity numerical. NEET loves the equal-distance versus equal-time average-speed trap as a fast MCQ. JEE Advanced rarely tests these definitions alone but builds every harder kinematics and dynamics problem on top of them, so a shaky foundation here costs marks everywhere downstream.<br><br><b>02 · Graphical Analysis</b><br>Motion graphs are a perennial favourite. CBSE Boards often ask a 2 to 3 mark <i>find displacement from this v–t graph</i> or <i>what does the slope represent</i>. JEE Main almost guarantees one question, usually reading acceleration (slope) and displacement (area) off a piecewise graph. NEET leans on conceptual graph-interpretation MCQs, slope equals velocity, area equals displacement, where one wrong reading sinks the answer. JEE Advanced uses graphs as a reasoning tool inside multi-part problems and loves the a–t to v–t to x–t conversion chain.<br><br><b>03 · The Equations of Motion and Free Fall</b><br>This is the most heavily examined slice of the whole chapter. CBSE Boards regularly ask for a derivation of one of the three equations, worth 2 to 3 marks, plus a free-fall numerical. JEE Main carries one to two questions every year, free fall, stopping distance, or the distance-in-the-nth-second formula. NEET asks fast plug-in numericals and the Galileo odd-number ratio. JEE Advanced rarely tests the bare equations but threads them through multi-body and last-second free-fall problems where sign convention and setup are everything.<br><br><b>04 · Relative Velocity</b><br>A compact but reliable scorer. CBSE Boards ask a 1 to 2 mark conceptual question or a short numerical on the relative velocity of two trains. JEE Main carries roughly one question, usually a pursuit or overtaking problem, or two bodies meeting. NEET tests the same-direction-subtract, opposite-direction-add idea as a quick MCQ. JEE Advanced uses relative velocity as a time-saving lens for two-body problems, especially the elegant free-fall result where the relative acceleration vanishes.<br><br><b>05 · Motion with Variable Acceleration</b><br>This is where kinematics grows up. CBSE Boards occasionally ask a 2 to 3 mark numerical with acceleration given as a function of time. JEE Main reliably carries one question built on a variable acceleration, usually <i>a</i> as a function of velocity or position, where the three constant-<i>a</i> equations silently fail. NEET sets the occasional <i>v given as a function of x, find a</i> trap. JEE Advanced loves this slice: resistive forces, position-dependent acceleration, and problems that hinge on choosing the right calculus relation."
        },
        {
          "t": "p",
          "html": "Picture a local train pulling out of one station, looping along a curved stretch of track, and pulling in at the next. Ask the motorman how far the train travelled and he points to the odometer: every metre of track the wheels rolled over. Stretch a tape measure straight from the first platform to the second and you get a shorter, straight-line answer. Physics keeps both numbers and gives them different names. The odometer reading, the total length of the path actually covered, is <b>distance</b>. It only ever grows, and it never cares which way the train turned. The tape-measure answer, the straight-line gap from where you started to where you ended up, together with the direction you would walk to cross it, is <b>displacement</b>. Distance is a plain number, a <b>scalar</b>. Displacement carries a direction, a <b>vector</b>. Every other pair of quantities in this topic is built from this one split."
        },
        {
          "t": "p",
          "html": "From that pair, two more sprout. <b>Speed</b> is how fast distance piles up: the rate of change of distance. <b>Velocity</b> is how fast displacement changes, with direction: the rate of change of displacement. The two share a unit, m/s, and the same dimensions, but only velocity tells you which way. A car's speedometer shows speed, never velocity: the needle has no idea whether you are heading north or south, only how fast the wheels are turning."
        },
        {
          "t": "think",
          "html": "a cricketer sprinting a quick single runs the full 17.68 m down the pitch, that length is his distance, and since he ends up at the far crease it is also his displacement. call him back for a cancelled run and he has to scramble to where he started. now distance keeps climbing while displacement shrinks back toward zero. run there and back and his displacement is exactly zero even though he is gasping from all the distance he covered. a round trip always has zero displacement and plenty of distance, and that gap is the whole idea of this topic."
        },
        {
          "t": "p",
          "html": "Two more distinctions matter as much as the first. Over an entire journey you talk about <b>average</b> values: total distance over total time for average speed, net displacement over total time for average velocity. But at a single instant, the exact moment a speed gun clocks a delivery, you need the <b>instantaneous</b> value instead. Instantaneous velocity is what average velocity becomes when you shrink the time interval down to almost nothing. And the magnitude of instantaneous velocity is exactly the instantaneous speed: at a single instant there is no path left to bend, so the scalar and the vector finally agree."
        },
        {
          "t": "p",
          "html": "<b>Acceleration</b> is the rate of change of velocity, and velocity can change in two separate ways: in magnitude, speeding up or slowing down, or in direction. So acceleration is not a synonym for speeding up. When acceleration points opposite to velocity the body slows, and that particular case has its own name, <b>retardation</b>. A ball thrown straight up is decelerating on the way up under exactly the same downward acceleration that speeds it up on the way down. Nothing about the acceleration changes at the top, only the velocity's sign does."
        },
        {
          "t": "def",
          "term": "Sign convention for this chapter",
          "html": "Motion here is one-dimensional, so a direction is never more than a + or − sign. <b>Name your positive direction before you write a single equation, then hold it for the whole problem.</b> A quantity that can point either way, velocity, acceleration, displacement, carries that sign. A quantity that only ever accumulates, distance, speed, time, never does: a speed is never negative, only a velocity can be. Different worked examples in this chapter fix their positive direction differently, rightward, eastward, upward, whichever is convenient, because that choice is genuinely free. What is not free is changing it midway through one calculation."
        },
        {
          "t": "defgrid",
          "title": "The seven quantities, in one table",
          "rows": [
            { "k": "Distance", "v": "total path length, a scalar that is always ≥ 0. Symbol <i>s</i>, unit m" },
            { "k": "Displacement", "v": "change in position, a vector. Δ<i>x</i> = <i>x<sub>f</sub></i> − <i>x<sub>i</sub></i>, unit m" },
            { "k": "Average speed", "v": "total distance ÷ total time, unit m/s" },
            { "k": "Average velocity", "v": "displacement ÷ time interval, unit m/s" },
            { "k": "Instantaneous velocity", "v": "<i>v</i> = <i>dx</i>/<i>dt</i>, the limit of Δ<i>x</i>/Δ<i>t</i> as Δ<i>t</i> → 0, unit m/s" },
            { "k": "Instantaneous speed", "v": "|<i>dx</i>/<i>dt</i>|, unit m/s" },
            { "k": "Acceleration", "v": "<i>a</i> = <i>dv</i>/<i>dt</i> = <i>d</i><sup>2</sup><i>x</i>/<i>dt</i><sup>2</sup>, unit m/s<sup>2</sup>" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · AVERAGING TWO SPEEDS",
          "tag": "the single most-tested trap in this topic",
          "main": "equal distances: <i>v</i><sub>avg</sub> = 2<i>v</i><sub>1</sub><i>v</i><sub>2</sub> ÷ (<i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>)<br>equal times: <i>v</i><sub>avg</sub> = (<i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>) ÷ 2",
          "legend": [
            "<i>v</i><sub>1</sub>, <i>v</i><sub>2</sub> are the two speeds being averaged, both in m/s",
            "equal legs of distance give the harmonic mean; equal legs of time give the arithmetic mean, and the harmonic mean is always the smaller of the two, sitting closer to the slower speed"
          ],
          "note": "Diagnose which quantity is equal, distance or time, before you touch either formula. That one word decides everything."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY INSTANTANEOUS VELOCITY IS A DERIVATIVE, TAP A LINE",
          "steps": [
            {
              "eq": "<i>v</i><sub>avg</sub> = Δ<i>x</i>/Δ<i>t</i>, over the interval from <i>t</i><sub>1</sub> to <i>t</i><sub>2</sub>",
              "why": "On an <i>x</i>–<i>t</i> graph this ratio is rise over run, which is exactly the slope of the secant line, the chord joining the two plotted points."
            },
            {
              "eq": "let <i>t</i><sub>2</sub> slide toward <i>t</i><sub>1</sub>, so Δ<i>t</i> → 0",
              "why": "The chord pivots around the first point as the second one slides in. In the limit it stops being a chord between two points and becomes the tangent line touching the curve at one point only."
            },
            {
              "eq": "<i>v</i> = lim<sub>Δ<i>t</i>→0</sub> Δ<i>x</i>/Δ<i>t</i> = <i>dx</i>/<i>dt</i>",
              "why": "The slope of that tangent is the instantaneous velocity. This is exactly the derivative you met as a limit of a difference quotient: velocity at an instant is the limiting slope as the measuring window collapses to a point."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 2.1 · FROM SECANT TO TANGENT",
          "chips": ["average and instantaneous"],
          "captions": [
            "The chord AB has slope equal to the average velocity over that interval. The tangent at A has slope equal to the instantaneous velocity at that instant, what the chord becomes as B slides in and Δt shrinks to nothing."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [-1.5, 10],
              "axisX": "t", "axisY": "x",
              "ticksX": { "at": [2, 6], "labels": ["t₁", "t₂"] },
              "ticksY": { "at": [4.24, 7.35], "labels": ["x₁", "x₂"] },
              "curves": [{ "c": "sqrt", "a": 3 }],
              "points": [
                { "x": 2, "y": 4.24, "label": "A" },
                { "x": 6, "y": 7.35, "label": "B" }
              ],
              "segments": [
                { "from": [2, 4.24], "to": [6, 7.35], "label": "average" },
                { "from": [0.4, 2.54], "to": [3.8, 6.15], "label": "instantaneous" },
                { "from": [2, 4.24], "to": [6, 4.24], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [6, 4.24], "to": [6, 7.35], "tone": "amber", "label": "Δx", "at": "end" },
                { "from": [2, -0.9], "to": [6, -0.9], "head": "both", "tone": "amber", "label": "Δt" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Distance and displacement, for a trip with reversals",
          "steps": [
            "<b>Fix a positive direction first.</b> Say rightward, or eastward, whichever the problem suggests, and commit to it before writing a single number.",
            "<b>Split the journey into legs</b> where the direction of motion does not change. A trip that goes out and comes back is two legs, even when it is described in one sentence.",
            "<b>Displacement is the algebraic sum of the legs</b>, respecting + and − signs, which is the same thing as <i>x</i><sub>final</sub> − <i>x</i><sub>initial</sub>.",
            "<b>Distance is the sum of the magnitudes</b> of all the legs, with every sign dropped.",
            "<b>Sanity check: distance must be ≥ |displacement|.</b> If your answer breaks that, a sign slipped somewhere among the legs."
          ]
        },
        {
          "t": "proc",
          "title": "Average speed, when legs are split by distance or by time",
          "steps": [
            "<b>Identify what is equal across the legs</b>, distance or time. This single word decides the entire calculation.",
            "<b>Fall back on the definition if you are unsure:</b> <i>v</i><sub>avg</sub> = total distance ÷ total time. Never guess a mean.",
            "<b>Equal distances:</b> total time is Σ <i>d</i>/<i>v<sub>i</sub></i>, so slow legs eat disproportionately more time. The result is the harmonic mean, and it sits closer to the slower speed.",
            "<b>Equal times:</b> total distance is Σ <i>v<sub>i</sub>t</i>, so the result is the plain arithmetic mean, weighted equally by time.",
            "<b>Reasonableness check:</b> the average must fall between the smallest and largest speed present, with no exceptions."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A jogger runs 300 m due east in 100 s, then turns and runs 100 m due west in 50 s. Find the total distance, the displacement, the average speed and the average velocity.",
          "steps": [
            "Take east as positive. Leg 1: +300 m in 100 s. Leg 2: −100 m in 50 s.",
            "Distance = 300 + 100 = 400 m, magnitudes only.",
            "Displacement = (+300) + (−100) = +200 m, that is, 200 m east.",
            "Total time = 100 + 50 = 150 s. Average speed = 400/150 ≈ 2.67 m/s. Average velocity = 200/150 ≈ 1.33 m/s, east."
          ],
          "ans": "distance 400 m · displacement 200 m east · avg speed ≈ 2.67 m/s · avg velocity ≈ 1.33 m/s east"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A bus covers the first half of a route at 40 km/h and the second half, an equal distance, at 60 km/h. Its average speed for the whole route is closest to which of these: 50 km/h, 48 km/h, 52 km/h, or 24 km/h?",
          "steps": [
            "The eye jumps to (40+60)/2 = 50 km/h, but that arithmetic mean is only valid for equal times, and here the two halves are equal distances.",
            "Equal distances call for the harmonic mean: <i>v</i><sub>avg</sub> = 2(40)(60)/(40+60) = 4800/100 = 48 km/h.",
            "Check the shortcut: the harmonic mean is always less than the arithmetic mean, so the instant you read equal distances, two speeds, eliminate the simple average and reach for the smaller number."
          ],
          "ans": "48 km/h"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A particle moving along the x-axis has position <i>x</i>(<i>t</i>) = <i>t</i><sup>3</sup> − 6<i>t</i><sup>2</sup> + 9<i>t</i> + 5 (metres, <i>t</i> in seconds). Find when it is momentarily at rest, its velocity when its acceleration is zero, and the distance and displacement between <i>t</i> = 0 and <i>t</i> = 3 s.",
          "steps": [
            "<i>v</i> = <i>dx</i>/<i>dt</i> = 3<i>t</i><sup>2</sup> − 12<i>t</i> + 9 = 3(<i>t</i> − 1)(<i>t</i> − 3). At rest means <i>v</i> = 0, so <i>t</i> = 1 s and <i>t</i> = 3 s.",
            "<i>a</i> = <i>dv</i>/<i>dt</i> = 6<i>t</i> − 12. <i>a</i> = 0 gives <i>t</i> = 2 s, and there <i>v</i>(2) = 3(1)(−1) = −3 m/s. The negative sign means the particle is moving in the −<i>x</i> direction at that instant.",
            "Positions: <i>x</i>(0) = 5 m, <i>x</i>(1) = 9 m, <i>x</i>(3) = 5 m. From 0 to 1 s the velocity is positive, so the particle moves +4 m. From 1 to 3 s the velocity is negative, so it moves back −4 m.",
            "Displacement = <i>x</i>(3) − <i>x</i>(0) = 0. Distance = |+4| + |−4| = 8 m. The particle ends exactly where it started, yet covers 8 m of path, because it reverses at <i>t</i> = 1 s."
          ],
          "ans": "at rest at t = 1 s and t = 3 s · v = −3 m/s when a = 0 · distance 8 m · displacement 0"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A particle moves along a straight line with velocity <i>v</i>(<i>t</i>) = <i>t</i><sup>2</sup> − 6<i>t</i> + 8 (m/s) over 0 ≤ <i>t</i> ≤ 5 s. Find when it reverses direction, the total displacement, the total distance, and verify that the average speed is at least the magnitude of the average velocity.",
          "steps": [
            "Factor: <i>v</i> = (<i>t</i> − 2)(<i>t</i> − 4), zero at <i>t</i> = 2 s and <i>t</i> = 4 s. The sign of <i>v</i> is positive on [0, 2], negative on [2, 4], positive on [4, 5], so the particle reverses twice, at <i>t</i> = 2 s and <i>t</i> = 4 s.",
            "The antiderivative is <i>F</i>(<i>t</i>) = <i>t</i><sup>3</sup>/3 − 3<i>t</i><sup>2</sup> + 8<i>t</i>. <i>F</i>(0) = 0, <i>F</i>(2) = 20/3, <i>F</i>(4) = 16/3, <i>F</i>(5) = 20/3.",
            "Displacement = <i>F</i>(5) − <i>F</i>(0) = 20/3 ≈ 6.67 m.",
            "Distance = |<i>F</i>(2) − <i>F</i>(0)| + |<i>F</i>(4) − <i>F</i>(2)| + |<i>F</i>(5) − <i>F</i>(4)| = 20/3 + 4/3 + 4/3 = 28/3 ≈ 9.33 m.",
            "Over the full 5 s: average velocity = (20/3)/5 = 4/3 ≈ 1.33 m/s. Average speed = (28/3)/5 = 28/15 ≈ 1.87 m/s. Indeed 1.87 ≥ 1.33, and the gap is exactly the wasted backtracking between t = 2 s and t = 4 s."
          ],
          "ans": "reverses at t = 2 s and t = 4 s · displacement ≈ 6.67 m · distance ≈ 9.33 m · avg speed ≈ 1.87 m/s ≥ avg velocity ≈ 1.33 m/s"
        },
        {
          "t": "mcq",
          "q": "For any moving body, which relation is always correct?",
          "opts": [
            { "label": "displacement ≥ distance", "nudge": "This reverses the true inequality. The straight-line gap can never exceed the path length actually walked." },
            { "label": "distance ≥ |displacement|", "nudge": null },
            { "label": "distance = |displacement|", "nudge": "True only for straight-line motion with no reversal, so it fails the word always." },
            { "label": "distance < |displacement|", "nudge": "Impossible: the shortcut route can never be longer than the path actually taken." }
          ],
          "correct": 1,
          "solution": "The path can only be longer than, or equal to, the straight-line gap, never shorter. Equality holds only when the motion never reverses direction along a straight line."
        },
        {
          "t": "mcq",
          "q": "A runner completes exactly one full lap of a circular track of radius R. Over this lap, the distance and the magnitude of displacement are respectively:",
          "opts": [
            { "label": "2πR, 2πR", "nudge": "This wrongly equates the two, the classic round-trip error: a runner who returns to the start has covered a real distance but zero displacement." },
            { "label": "2πR, 0", "nudge": null },
            { "label": "0, 2πR", "nudge": "This swaps the two definitions." },
            { "label": "πR, 2R", "nudge": "This is the half-lap answer, distance πR and displacement equal to the diameter 2R, picked by misreading full as half." }
          ],
          "correct": 1,
          "solution": "Distance is the full circumference, 2πR. The runner ends exactly where they began, so displacement is 0."
        },
        {
          "t": "mcq",
          "q": "The magnitude of a particle's average velocity equals its average speed only when the particle:",
          "opts": [
            { "label": "moves on a circular path", "nudge": "A circular path maximises the gap between the two: the runner can cover real distance while ending up back at the start." },
            { "label": "moves along a straight line without reversing direction", "nudge": null },
            { "label": "has constant acceleration", "nudge": "Constant acceleration still allows a turnaround, a ball thrown straight up is a constant-acceleration motion that reverses, so the two can still differ." },
            { "label": "returns to its starting point", "nudge": "This gives zero average velocity alongside a non-zero average speed, the two are then maximally unequal." }
          ],
          "correct": 1,
          "solution": "Equality of distance and the magnitude of displacement needs an unbent, one-way path, exactly straight-line motion with no reversal."
        },
        {
          "t": "mcq",
          "q": "A particle's position is <i>x</i>(<i>t</i>) = 2<i>t</i><sup>2</sup> (m). Its instantaneous velocity at <i>t</i> = 3 s is:",
          "opts": [
            { "label": "6 m/s", "nudge": "This comes from differentiating as if x were just 2t, dropping the power rule's factor of 2." },
            { "label": "12 m/s", "nudge": null },
            { "label": "18 m/s", "nudge": "This is the position x(3) = 2(9) = 18 m, answering the wrong question." },
            { "label": "4 m/s", "nudge": "This is just the coefficient 4 from v = 4t, without substituting t = 3." }
          ],
          "correct": 1,
          "solution": "v = dx/dt = 4t, so v(3) = 12 m/s."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A hiker walks 4 km north, then 3 km east, taking 30 min in all. Find the distance, the magnitude of displacement, the average speed, and the magnitude of average velocity.", "a": "Distance = 4 + 3 = 7 km. Displacement = √(4<sup>2</sup> + 3<sup>2</sup>) = 5 km. Average speed = 7/0.5 = 14 km/h. Average velocity = 5/0.5 = 10 km/h." },
            { "q": "[NEET] A drone covers two equal-distance stretches at 30 km/h and 20 km/h. What is its average speed?", "a": "Equal distances, harmonic mean: 2(30)(20)/(30+20) = 1200/50 = 24 km/h." },
            { "q": "[JEE Main] A particle moves with <i>x</i>(<i>t</i>) = 5 + 3<i>t</i> + 2<i>t</i><sup>2</sup> (m). Find its initial velocity, its acceleration, and its velocity at <i>t</i> = 2 s.", "a": "<i>v</i> = 3 + 4<i>t</i>, so <i>u</i> = 3 m/s and <i>v</i>(2) = 11 m/s. <i>a</i> = 4 m/s<sup>2</sup>, constant." },
            { "q": "[JEE Main] Position is <i>x</i>(<i>t</i>) = 4<i>t</i> − <i>t</i><sup>2</sup> (m). Find the velocity at <i>t</i> = 1 s and the instant the particle is momentarily at rest.", "a": "<i>v</i> = 4 − 2<i>t</i>, so <i>v</i>(1) = 2 m/s. At rest when 4 − 2<i>t</i> = 0, so <i>t</i> = 2 s." },
            { "q": "[JEE Advanced] A particle has velocity <i>v</i>(<i>t</i>) = 3<i>t</i><sup>2</sup> − 12<i>t</i> + 9 (m/s) for 0 ≤ <i>t</i> ≤ 4 s. Find the total distance travelled.", "a": "Roots at <i>t</i> = 1, 3 s. With <i>x</i>(<i>t</i>) = <i>t</i><sup>3</sup> − 6<i>t</i><sup>2</sup> + 9<i>t</i>: x(0)=0, x(1)=4, x(3)=0, x(4)=4. Distance = 4+4+4 = 12 m (displacement is only 4 m)." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Treating distance and displacement as interchangeable.</b> A velocity is signed, a speed is not; a displacement is signed, a distance is not. The moment direction reverses, distance pulls ahead of the magnitude of displacement, and mixing the two loses the mark.",
            "<b>Arithmetic-averaging speeds over equal distances.</b> Two equal stretches at 40 and 60 km/h is not 50, it is the harmonic mean, 48. Arithmetic mean is correct only when the legs are equal in time.",
            "<b>Assuming <i>v</i> = 0 means <i>a</i> = 0.</b> At a turning point the body is instantaneously at rest yet still accelerating, think of the top of a vertical throw. Velocity and acceleration are independent at an instant.",
            "<b>Forgetting to fix a positive direction before the first equation.</b> Without a chosen sign convention, a velocity of −3 m/s is meaningless, and sign errors cascade through the rest of the solution.",
            "<b>Extending the two-speed means past two legs without checking.</b> With three or more legs at unequal distances, no named mean applies at all: return to total distance over total time and compute the ratio directly."
          ]
        },
        {
          "t": "protip",
          "html": "lock in one phrase: same distance, harmonic; same time, arithmetic. and never integrate the wiggly path for average velocity, it is simply x<sub>final</sub> minus x<sub>initial</sub>, over total time, endpoints only. if a journey has three or more legs at unequal distances, no named mean survives, so fall straight back to total distance over total time and compute the ratio by hand."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "distance ≥ |displacement|, always", "note": "equal only when the motion never reverses on a straight line" },
            { "f": "v<sub>avg</sub> = Δx/Δt · v = dx/dt", "note": "secant becomes tangent as Δt → 0" },
            { "f": "a = dv/dt = d<sup>2</sup>x/dt<sup>2</sup>", "note": "the rate at which velocity itself changes" },
            { "f": "equal distances → harmonic mean · equal times → arithmetic mean", "note": "harmonic ≤ arithmetic always, equal only when the two speeds match" },
            { "f": "v = 0 does not force a = 0", "note": "top of a throw: momentarily at rest, still accelerating at g" }
          ],
          "aids": [
            "\"distance is how far you walked, displacement is how far you ended up\"",
            "\"same distance, harmonic; same time, arithmetic\""
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Reading Motion Off a Graph",
      "chip": "02 GRAPHS",
      "kalam": "slope steps down, area climbs back up",
      "blocks": [
        {
          "t": "p",
          "html": "A motion graph is a story told without a single word. Instead of describing where a body is and how fast it moves in sentences, you draw a picture and let its shape do the talking. The entire skill of this topic is learning to read two features off any such graph: its <b>slope</b>, how steeply it rises or falls, and the <b>area</b> trapped between the curve and the time axis. Master those two readings and almost every graph question in this chapter collapses into something easy."
        },
        {
          "t": "p",
          "html": "Start with the <b>position–time</b> graph, vertical axis position, horizontal axis time. Its slope answers how fast the position is changing, which is exactly velocity. A steep line means a high velocity, a gentle line a slow one, and a flat horizontal line means the position is not changing at all: the body is at rest. A straight slanted line has a constant slope, so a constant velocity, uniform motion. A curved line has a changing slope, so a changing velocity, which is acceleration."
        },
        {
          "t": "think",
          "html": "picture a live train tracker plotting a train's position against time. while it waits at a platform the line is flat. when it races between stations the line shoots up steeply. when it slows for a junction, the line bends and flattens. you never see the actual tracks, yet the shape of the line alone tells you exactly when the train was stopped, sprinting, or braking. a curved x–t graph does not mean the train turned a corner, the motion is still dead straight, only the speed is changing."
        },
        {
          "t": "p",
          "html": "Next, the <b>velocity–time</b> graph. Its slope answers how fast the velocity is changing, which is acceleration. But a v–t graph has a second, more useful reading: the area between the curve and the time axis equals the <b>displacement</b>. Over a tiny sliver of time Δt, the strip of area is velocity times Δt, a little bit of displacement, and adding every sliver gives the total. Area below the axis, where the velocity is negative, counts as negative displacement, so the net <i>signed</i> area gives displacement, while the total area with every sign ignored gives distance."
        },
        {
          "t": "p",
          "html": "Finally, the <b>acceleration–time</b> graph: the area under it gives the change in velocity, Δv, by the same slicing logic. So the whole chain runs in two directions: slope takes you one step down, from x to v to a, and area takes you one step back up, from a to v to x."
        },
        {
          "t": "think",
          "html": "you already met both halves of this ladder by other names. the slope you are reading here is the derivative you studied as a limit of a difference quotient, and the area you are reading here is its inverse, the integral. velocity is nothing but position differentiated, and displacement is nothing but velocity's area accumulated, which is exactly why differentiating steps you down the ladder and finding an area climbs you back up it."
        },
        {
          "t": "defgrid",
          "title": "What slope gives, what area gives",
          "rows": [
            { "k": "Position–time (x–t)", "v": "slope gives velocity, <i>v</i> = <i>dx</i>/<i>dt</i>. Area under an x–t graph has no standard reading." },
            { "k": "Velocity–time (v–t)", "v": "slope gives acceleration, <i>a</i> = <i>dv</i>/<i>dt</i>. Signed area gives displacement, unsigned area gives distance." },
            { "k": "Acceleration–time (a–t)", "v": "area gives the change in velocity, Δ<i>v</i>. Slope gives jerk, rarely needed at this level." }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · AREA AS AN INTEGRAL",
          "main": "displacement = ∫ <i>v</i> <i>dt</i>, from <i>t</i><sub>1</sub> to <i>t</i><sub>2</sub><br>Δ<i>v</i> = ∫ <i>a</i> <i>dt</i>, from <i>t</i><sub>1</sub> to <i>t</i><sub>2</sub>",
          "legend": [
            "these integrals are exactly the net signed area under the v–t and a–t graphs over that interval",
            "the slope of the tangent gives an instantaneous rate; the slope of a chord between two plotted points gives only the average over that interval"
          ],
          "note": "reading area as displacement only works if you respect the sign: area below the axis subtracts."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 2.2 · SIX SHAPES, READ AT A GLANCE",
          "chips": ["x–t: at rest", "x–t: uniform velocity", "x–t: speeding up", "v–t: a = 0", "v–t: uniform acceleration", "v–t: reversing"],
          "captions": [
            "A flat x–t line: the position never changes, so v = dx/dt = 0.",
            "A straight slanted x–t line: constant slope, so constant velocity, uniform motion.",
            "A concave-up x–t curve: the slope itself keeps increasing, so the velocity is increasing, positive acceleration.",
            "A flat v–t line: constant velocity, so a = dv/dt = 0. Displacement still grows steadily, a plain rectangle of area.",
            "A straight v–t line through the origin: constant slope, uniform acceleration from rest.",
            "A v–t line crossing the time axis: the shaded region above is positive displacement, the small region below is where the body has started coming back."
          ],
          "frames": [
            { "x": [0, 10], "y": [0, 8], "axisY": "x", "curves": [{ "c": "line", "m": 0, "k": 5 }] },
            { "x": [0, 10], "y": [0, 10], "axisY": "x", "curves": [{ "c": "line", "m": 0.8, "k": 1 }] },
            { "x": [0, 10], "y": [0, 10], "axisY": "x", "curves": [{ "c": "poly", "coeffs": [0.5, 0, 0.09] }] },
            { "x": [0, 10], "y": [0, 8], "axisY": "v", "curves": [{ "c": "line", "m": 0, "k": 4 }] },
            { "x": [0, 10], "y": [0, 10], "axisY": "v", "curves": [{ "c": "line", "m": 1, "k": 0 }] },
            {
              "x": [0, 10], "y": [-5, 8],
              "axisX": "t", "axisY": "v",
              "curves": [{ "c": "line", "m": -1, "k": 6 }],
              "polys": [
                { "pts": [[0, 0], [0, 6], [6, 0]], "close": true, "fill": "wash", "tone": "green", "label": "+" },
                { "pts": [[6, 0], [10, -4], [10, 0]], "close": true, "fill": "wash", "tone": "red", "label": "−" }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 2.3 · AREA UNDER A TRAPEZOIDAL v–t GRAPH",
          "chips": ["three regions"],
          "captions": [
            "Rise, cruise, fall: a triangle, a rectangle and a triangle. Add their three areas and you have the total displacement, 210 m."
          ],
          "frames": [
            {
              "x": [0, 16], "y": [0, 24],
              "axisX": "t (s)", "axisY": "v (m/s)",
              "ticksX": { "every": 5 }, "ticksY": { "every": 10 },
              "curves": [{ "c": "pts", "pts": [[0, 0], [4, 20], [10, 20], [15, 0]] }],
              "polys": [
                { "pts": [[0, 0], [4, 20], [4, 0]], "close": true, "fill": "wash", "tone": "soft", "label": "triangle" },
                { "pts": [[4, 0], [4, 20], [10, 20], [10, 0]], "close": true, "fill": "wash", "tone": "amber", "label": "rectangle" },
                { "pts": [[10, 20], [15, 0], [10, 0]], "close": true, "fill": "wash", "tone": "soft", "label": "triangle" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Extracting motion data from a single graph",
          "steps": [
            "<b>Identify the axes first.</b> Is the vertical axis x, v, or a? Every rule below depends on this, and most wrong answers come from applying v–t rules to an x–t graph.",
            "<b>Need a rate, velocity or acceleration? Take the slope.</b> For an instant, draw the tangent and read off rise over run; for an average over an interval, use the straight chord between the two endpoints.",
            "<b>Need displacement or Δv? Take the area.</b> Break the shape into triangles, rectangles and trapezia, and compute each piece.",
            "<b>Apply signs.</b> Area below the time axis is negative. For displacement, add the signed areas; for distance, add their magnitudes.",
            "<b>Sanity check.</b> Distance ≥ |displacement|, the acceleration should be a reasonable size, and velocity should be continuous with no instantaneous jumps unless the problem says so."
          ]
        },
        {
          "t": "proc",
          "title": "Converting between graph types, the ladder",
          "steps": [
            "<b>Going down, differentiate.</b> To get v–t from x–t, plot the slope of x–t at every instant. A straight x–t line, constant slope, becomes a horizontal v–t line; a parabola becomes a sloped line.",
            "<b>Going up, accumulate area.</b> To get v–t from a–t, start from the known initial velocity and add the running area under a–t. To then reach position, add the running area under that v–t graph.",
            "<b>Anchor the constant every time you go up.</b> Area gives you a change, never an absolute value, so climbing the ladder always needs the starting value, v<sub>0</sub> or x<sub>0</sub>, supplied separately."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 2.4 · WHEN THE LINE CROSSES THE AXIS",
          "chips": ["signed area"],
          "captions": [
            "The region above the axis is positive displacement, gained. The small region below is where the particle has already started backtracking; add the two with their signs and you get 58 m, not the 62 m the shape alone covers."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [-5, 14],
              "axisX": "t (s)", "axisY": "v (m/s)",
              "ticksX": { "every": 2 }, "ticksY": { "at": [-4, 0, 12] },
              "curves": [{ "c": "pts", "pts": [[0, 0], [3, 12], [5, 12], [9, -4]] }],
              "polys": [
                { "pts": [[0, 0], [3, 12], [5, 12], [8, 0]], "close": true, "fill": "wash", "tone": "green", "label": "+" },
                { "pts": [[8, 0], [9, -4], [9, 0]], "close": true, "fill": "wash", "tone": "red", "label": "−" }
              ]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A scooter starts from rest and speeds up uniformly to 20 m/s in 4 s, cruises at 20 m/s for the next 6 s, then brakes uniformly to rest in 5 s. Using its v–t graph, find the acceleration in each phase and the total displacement.",
          "steps": [
            "Acceleration is the slope of each segment. Phase 1: a<sub>1</sub> = (20 − 0)/4 = 5 m/s<sup>2</sup>. Phase 2: a<sub>2</sub> = 0, a flat line. Phase 3: a<sub>3</sub> = (0 − 20)/5 = −4 m/s<sup>2</sup>.",
            "Displacement is the area under the graph, three pieces. Triangle: ½(4)(20) = 40 m. Rectangle: (6)(20) = 120 m. Triangle: ½(5)(20) = 50 m.",
            "Total displacement = 40 + 120 + 50 = 210 m. All the area sits above the axis, so distance equals displacement here."
          ],
          "ans": "a<sub>1</sub> = 5 m/s<sup>2</sup> · a<sub>2</sub> = 0 · a<sub>3</sub> = −4 m/s<sup>2</sup> · displacement 210 m"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "The position–time graph of a body is a straight line inclined at a fixed angle to the time axis. Is the body speeding up, moving with uniform velocity, uniformly accelerating, or at rest?",
          "steps": [
            "The instinct is that a rising line means speeding up, but that instinct treats every rising graph alike. On an x–t graph, rising only means moving forward, not speeding up.",
            "On an x–t graph, slope equals velocity. A straight line has a constant slope, so the velocity is constant.",
            "Memorise the one-liner: a straight x–t line means steady speed, only a curved x–t line means acceleration."
          ],
          "ans": "moving with uniform velocity, zero acceleration"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A particle's v–t graph is piecewise linear: it rises from 0 to 12 m/s during 0 ≤ t ≤ 3 s, stays at 12 m/s until t = 5 s, then falls steadily to −4 m/s at t = 9 s. Find when it reverses direction, and the total displacement and distance over 0 to 9 s.",
          "steps": [
            "The falling segment goes from 12 m/s to −4 m/s over 4 s, a slope of −4 m/s<sup>2</sup>. It crosses zero when 12 − 4(t − 5) = 0, giving t = 8 s: that is where the particle reverses direction.",
            "Areas: 0 to 3 s, a triangle, ½(3)(12) = 18 m. 3 to 5 s, a rectangle, (2)(12) = 24 m. 5 to 8 s, a triangle above the axis, ½(3)(12) = 18 m. 8 to 9 s, a triangle below the axis, ½(1)(4) = 2 m, contributing −2 m.",
            "Displacement = 18 + 24 + 18 − 2 = 58 m. Distance = 18 + 24 + 18 + 2 = 62 m. The 4 m gap between them is exactly twice the backtracked area, 2 m crept backward after t = 8 s."
          ],
          "ans": "reverses at t = 8 s · displacement 58 m · distance 62 m"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A particle starts from rest at the origin. Its acceleration is +6 m/s<sup>2</sup> for 0 ≤ t ≤ 2 s, then −3 m/s<sup>2</sup> for 2 ≤ t ≤ 8 s. Find the maximum velocity and when it occurs, when the particle reverses direction, and the total displacement and distance over 0 to 8 s.",
          "steps": [
            "Climb the ladder: the area under a–t builds the v–t graph. Phase 1: Δv = (6)(2) = 12 m/s, so v(2) = 12 m/s, rising linearly from rest.",
            "Phase 2 has slope −3, so v(t) = 12 − 3(t − 2). Then v(6) = 0 and v(8) = 12 − 18 = −6 m/s.",
            "Velocity peaks exactly where the acceleration switches sign: v<sub>max</sub> = 12 m/s at t = 2 s. It reverses direction where v = 0, at t = 6 s.",
            "Areas of the v–t graph: 0 to 2 s, ½(2)(12) = 12 m. 2 to 6 s, ½(4)(12) = 24 m, above the axis. 6 to 8 s, ½(2)(6) = 6 m, below the axis, so −6 m.",
            "Displacement = 12 + 24 − 6 = 30 m. Distance = 12 + 24 + 6 = 42 m. The subtlety: even once the acceleration turns negative at t = 2 s, the particle keeps moving forward until t = 6 s, negative acceleration first slows a body and only then drives it backward."
          ],
          "ans": "v<sub>max</sub> = 12 m/s at t = 2 s · reverses at t = 6 s · displacement 30 m · distance 42 m"
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 2.5 · THE SAME STORY, TWO GRAPHS",
          "chips": ["acceleration", "the derived velocity"],
          "captions": [
            "A step function: +6 m/s<sup>2</sup> for the first 2 s, then −3 m/s<sup>2</sup> for the next 6 s.",
            "The same interval's velocity, built by accumulating area under the graph on the left. It rises to 12 m/s, then falls through zero at t = 6 s."
          ],
          "frames": [
            {
              "x": [0, 9], "y": [-5, 8],
              "axisX": "t (s)", "axisY": "a (m/s²)",
              "ticksX": { "every": 2 }, "ticksY": { "at": [-3, 0, 6] },
              "curves": [{ "c": "pts", "pts": [[0, 6], [2, 6], [2, -3], [8, -3]] }]
            },
            {
              "x": [0, 9], "y": [-8, 14],
              "axisX": "t (s)", "axisY": "v (m/s)",
              "ticksX": { "every": 2 }, "ticksY": { "at": [-6, 0, 12] },
              "curves": [{ "c": "pts", "pts": [[0, 0], [2, 12], [6, 0], [8, -6]] }]
            }
          ]
        },
        {
          "t": "mcq",
          "q": "The area enclosed between a velocity–time graph and the time axis represents the:",
          "opts": [
            { "label": "acceleration", "nudge": "That is the slope of the v–t graph, not its area." },
            { "label": "displacement", "nudge": null },
            { "label": "distance, always", "nudge": "A tempting half-truth: the total area with every sign ignored gives distance, but the signed area gives displacement, and always distance is wrong the moment the curve dips below the axis." },
            { "label": "velocity", "nudge": "That confuses the curve's height with the region beneath it." }
          ],
          "correct": 1,
          "solution": "The net signed area under a v–t graph is displacement."
        },
        {
          "t": "mcq",
          "q": "The slope of the tangent to a position–time graph at a point gives the:",
          "opts": [
            { "label": "acceleration", "nudge": "That would be the slope of a v–t graph, one rung down the ladder from here." },
            { "label": "instantaneous velocity", "nudge": null },
            { "label": "total distance", "nudge": "Slope has no relation to distance." },
            { "label": "average velocity", "nudge": "That comes from the slope of a chord, not a tangent, the trap for anyone who does not distinguish the two." }
          ],
          "correct": 1,
          "solution": "Slope of an x–t graph is velocity, and the tangent at a single point makes it the instantaneous value."
        },
        {
          "t": "mcq",
          "q": "A particle's position–time graph is a parabola that is concave up. The motion has:",
          "opts": [
            { "label": "zero acceleration", "nudge": "Zero acceleration describes a straight line, not a curve." },
            { "label": "constant positive acceleration", "nudge": null },
            { "label": "negative acceleration", "nudge": "That describes a concave-down curve, where the velocity decreases instead of increases." },
            { "label": "constant velocity", "nudge": "Constant velocity also describes a straight line." }
          ],
          "correct": 1,
          "solution": "A concave-up parabola in x–t means the slope, the velocity, steadily increases, which is constant positive acceleration."
        },
        {
          "t": "mcq",
          "q": "A particle's v–t graph is a horizontal line at v = −3 m/s. Over 4 s, its displacement and distance are respectively:",
          "opts": [
            { "label": "−12 m, 12 m", "nudge": null },
            { "label": "12 m, 12 m", "nudge": "This drops the negative sign on displacement, but the body genuinely moved backward." },
            { "label": "−12 m, −12 m", "nudge": "Distance can never be negative, by definition." },
            { "label": "0, 12 m", "nudge": "A constant negative velocity does not give zero net displacement, only a constant velocity of exactly zero would." }
          ],
          "correct": 0,
          "solution": "Displacement is the signed area, (−3)(4) = −12 m. Distance is its magnitude, 12 m."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A car moves at a constant 8 m/s for 5 s, then decelerates uniformly to rest in 4 s. From the v–t graph, find the total displacement.", "a": "Rectangle 5×8 = 40 m, plus triangle ½×4×8 = 16 m. Total 56 m." },
            { "q": "[NEET] A body's position–time graph is a horizontal straight line parallel to the time axis. State what kind of motion this represents.", "a": "At rest: the position never changes, so the velocity is zero." },
            { "q": "[JEE Main] A v–t graph is a straight line rising from (0, 4 m/s) to (5 s, 14 m/s). Find the acceleration and the displacement in this interval.", "a": "a = (14−4)/5 = 2 m/s<sup>2</sup>. Displacement = area of the trapezium = ½(4+14)(5) = 45 m." },
            { "q": "[JEE Main] At a certain instant, the slope of a particle's x–t graph is negative. What does this tell you about its motion at that instant?", "a": "It is moving in the negative direction: its velocity is negative at that instant." },
            { "q": "[JEE Advanced] A particle starts from rest with an acceleration that varies as a = 2t m/s<sup>2</sup> for 0 ≤ t ≤ 3 s. Find its velocity and displacement at t = 3 s.", "a": "v = ∫2t dt = t<sup>2</sup>, so v(3) = 9 m/s. x = ∫t<sup>2</sup> dt = t<sup>3</sup>/3, so x(3) = 9 m." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Applying the wrong graph's rule.</b> Slope equals velocity on an x–t graph, but on a v–t graph slope is acceleration. Always read the vertical axis label before reaching for a rule.",
            "<b>Reading a rising graph as speeding up.</b> A rising x–t line just means moving in the positive direction at a steady speed; a rising v–t line means accelerating. Same shape, a different meaning depending on which axis you are on.",
            "<b>Ignoring signed area.</b> Area below the time axis is negative for displacement. Adding every area as positive gives distance, and mislabelling it displacement is the single most common graph error.",
            "<b>Confusing negative acceleration with moving backward.</b> A body can have negative acceleration while still moving forward, merely slowing, and it only travels backward once the velocity itself crosses zero.",
            "<b>Thinking a curved x–t graph means a curved path.</b> The motion stays on a straight line the whole time; the curve in the graph encodes changing velocity, never a bend in the road."
          ]
        },
        {
          "t": "protip",
          "html": "carry one mental ladder: slope steps down, x to v to a, area climbs up, a to v to x. before summing any v–t area, shade the pieces with + and − first, then all magnitudes gives distance and with signs gives displacement, in one pass. for graph mcqs the fastest filter is almost always straight line or curve, it instantly separates the constant-rate options from the changing-rate ones."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "x–t graph: slope = velocity", "note": "flat → at rest, straight → uniform velocity, curved → accelerating" },
            { "f": "v–t graph: slope = acceleration, area = displacement", "note": "signed area for displacement, |area| for distance" },
            { "f": "a–t graph: area = Δv", "note": "same slicing logic, one rung further up" },
            { "f": "the ladder: x → v → a by slope, a → v → x by area", "note": "climbing up always needs the starting value supplied" },
            { "f": "forbidden: a vertical x–t segment", "note": "that would mean infinite velocity, two positions at once" }
          ],
          "aids": [
            "\"slope steps down, area climbs up\"",
            "\"straight x–t line, steady speed; curved x–t line, acceleration\""
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "The Equations of Motion and Free Fall",
      "chip": "03 EQUATIONS OF MOTION",
      "kalam": "three shortcuts, one stamped expiry: constant a",
      "blocks": [
        {
          "t": "p",
          "html": "Everything so far has described motion after the fact. Now come the tools to predict it. If a body moves with <b>uniform acceleration</b>, acceleration that stays constant in size and direction, three compact equations let you connect its initial velocity, final velocity, acceleration, time and displacement: give any three and the equations hand you the rest. That predictive power is why they are called the equations of motion. But read the fine print stamped on all three: <b>constant a only</b>. They are not universal laws, they are the special-case solution for exactly this situation, and the moment acceleration changes with time or position you must set them aside."
        },
        {
          "t": "think",
          "html": "picture an auto-rickshaw pulling away from a red light. if the driver presses the accelerator by exactly the same amount the whole time, the speed climbs in a perfectly steady, predictable way, the same chunk of speed gained every second. that steadiness is uniform acceleration, and it is what makes the future calculable with three formulas. the instant he eases off, then floors it again, the neat pattern breaks and the equations no longer describe the whole trip. they describe the disciplined driver, never the erratic one."
        },
        {
          "t": "p",
          "html": "The most important real case of uniform acceleration is <b>free fall</b>, motion under gravity alone with air resistance ignored. Near Earth's surface every object, whatever its mass, accelerates downward at the same rate, <i>g</i> ≈ 9.8 m/s<sup>2</sup>, often rounded to 10 for quick arithmetic. A feather and a cricket ball fall identically in a vacuum, Galileo's famous insight. Because <i>g</i> is constant, all three equations apply directly to anything thrown, dropped or launched vertically, provided you fix a sign convention and keep it."
        },
        {
          "t": "p",
          "html": "A clean consequence worth feeling in your bones: a ball thrown straight up rises, slows, stops for an instant at the top, and falls back, and by symmetry it returns to the launch point with the same speed it left with, taking equal time up and down. At the very top its velocity is momentarily zero, but its acceleration is still a full <i>g</i> downward: gravity never switches off just because the ball paused."
        },
        {
          "t": "def",
          "term": "Distance in the nth second",
          "html": "<i>s<sub>n</sub></i> = <i>u</i> + (<i>a</i>/2)(2<i>n</i> − 1) looks like it is missing a length dimension, <i>u</i> alone is a velocity, but the formula is only ever used with every quantity in SI units and <i>n</i> standing for the plain count of that second: it is really <i>s</i>(<i>n</i>) − <i>s</i>(<i>n</i> − 1) evaluated with time measured in seconds, and the hidden factor of one second is what the shorthand suppresses. Never plug in <i>n</i> as anything but a whole count of seconds."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE THREE EQUATIONS OF MOTION",
          "tag": "valid only when a is constant",
          "main": "<i>v</i> = <i>u</i> + <i>at</i><br><i>s</i> = <i>ut</i> + ½<i>at</i><sup>2</sup><br><i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>as</i>",
          "legend": [
            "<i>u</i> = initial velocity (m/s), <i>v</i> = final velocity (m/s), <i>a</i> = constant acceleration (m/s<sup>2</sup>)",
            "<i>t</i> = time elapsed (s), <i>s</i> = displacement (m)",
            "a companion form needs no acceleration at all: <i>s</i> = ((<i>u</i> + <i>v</i>)/2)<i>t</i>, the average-velocity form"
          ],
          "note": "pick the equation missing exactly the quantity you were not given, and never mix a value that belongs to a different phase of the motion into it."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · FREE FALL, GALILEO'S LAW AND STOPPING DISTANCE",
          "main": "dropped from rest: <i>v</i> = <i>gt</i>, <i>h</i> = ½<i>gt</i><sup>2</sup>, <i>v</i><sup>2</sup> = 2<i>gh</i><br>thrown up at <i>u</i>: <i>H</i> = <i>u</i><sup>2</sup>/2<i>g</i>, <i>t</i><sub>up</sub> = <i>u</i>/<i>g</i>, <i>t</i><sub>flight</sub> = 2<i>u</i>/<i>g</i>",
          "legend": [
            "<i>h</i>, <i>H</i> are heights fallen or reached (m); <i>t</i><sub>up</sub>, <i>t</sub><sub>flight</sub> are the times to the top and back down (s)",
            "Galileo's law of odd numbers: successive-second distances from rest run 1 : 3 : 5 : 7 : …",
            "stopping distance, final velocity zero: <i>d</i> = <i>v</i><sub>0</sub><sup>2</sup>/2<i>a</i>, so <i>d</i> ∝ <i>v</i><sub>0</sub><sup>2</sup>: doubling the approach speed quadruples the stopping distance"
          ],
          "note": "these are the same three equations above, renamed for a specific vertical setup, nothing new is being assumed."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE THREE EQUATIONS, TAP A LINE",
          "steps": [
            {
              "eq": "<i>a</i> = <i>dv</i>/<i>dt</i> is fixed, so ∫ from <i>u</i> to <i>v</i> of <i>dv</i> = ∫ from 0 to <i>t</i> of <i>a</i> <i>dt</i>",
              "why": "Acceleration is by definition the rate of change of velocity. If that rate never changes, integrating it over the interval is just multiplying it by the elapsed time."
            },
            {
              "eq": "<i>v</i> − <i>u</i> = <i>at</i>, so <i>v</i> = <i>u</i> + <i>at</i>",
              "why": "Velocity grows linearly with time, gaining exactly a each second. This is the first equation, and it is really nothing but the definition of a, integrated."
            },
            {
              "eq": "the v–t graph is a straight line from u to v, so displacement is the area beneath it: a rectangle of height u plus a triangle on top",
              "why": "Since v rises linearly, the area is exactly ut, the rectangle, plus ½t(v − u), the triangle. Substituting v − u = at from the first equation turns the triangle into ½at<sup>2</sup>."
            },
            {
              "eq": "<i>s</i> = <i>ut</i> + ½<i>at</i><sup>2</sup>",
              "why": "The rectangle is the distance the body would have covered at its starting speed alone; the triangle is the extra distance the speeding-up contributes."
            },
            {
              "eq": "<i>a</i> = <i>dv</i>/<i>dt</i> = (<i>dv</i>/<i>dx</i>)(<i>dx</i>/<i>dt</i>) = <i>v</i> <i>dv</i>/<i>dx</i>, so ∫ from <i>u</i> to <i>v</i> of <i>v</i> <i>dv</i> = ∫ from 0 to <i>s</i> of <i>a</i> <i>dx</i>",
              "why": "This is the chain rule read the other way: instead of chasing time, relate velocity straight to displacement. It gives (v<sup>2</sup> − u<sup>2</sup>)/2 = as, and rearranging gives the third equation, the one you reach for whenever time is neither given nor wanted."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 2.6 · THE AREA BEHIND s = ut + ½at²",
          "chips": ["rectangle plus triangle"],
          "captions": [
            "A rectangle of height u and width t, the distance the body would cover at its starting speed alone, plus a triangle on top, the extra distance the speeding-up contributes. Add them and you have s = ut + ½at²."
          ],
          "frames": [
            {
              "x": [0, 9], "y": [0, 9],
              "axisX": "t", "axisY": "v",
              "ticksX": { "at": [0, 8], "labels": ["0", "t"] },
              "curves": [{ "c": "line", "m": 0.5, "k": 3 }],
              "polys": [
                { "pts": [[0, 0], [0, 3], [8, 3], [8, 0]], "close": true, "fill": "wash", "tone": "soft", "label": "ut" },
                { "pts": [[0, 3], [8, 3], [8, 7]], "close": true, "fill": "wash", "tone": "amber", "label": "½at²" }
              ],
              "points": [
                { "x": 0, "y": 3, "label": "u" },
                { "x": 8, "y": 7, "label": "v" }
              ]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A ball is dropped from rest from the top of a 45 m building. Taking g = 10 m/s<sup>2</sup> and ignoring air resistance, find the time it takes to reach the ground and its velocity just before impact.",
          "steps": [
            "Take downward as positive, u = 0, h = 45 m, g = 10 m/s<sup>2</sup>.",
            "h = ut + ½gt<sup>2</sup> with u = 0: 45 = 5t<sup>2</sup>, so t<sup>2</sup> = 9 and t = 3 s.",
            "v = u + gt = 0 + (10)(3) = 30 m/s, downward."
          ],
          "ans": "t = 3 s · v = 30 m/s"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A car braking at a fixed deceleration stops in a distance d from a speed v. If it instead approaches at speed 2v with the same deceleration, its stopping distance is: d, 2d, 3d, or 4d?",
          "steps": [
            "The instinct is that doubling the speed doubles the distance, giving 2d, but braking distance grows with the square of the speed, not linearly.",
            "From v<sup>2</sup> = u<sup>2</sup> + 2as with final velocity zero, stopping distance d = v<sup>2</sup>/2a, so d ∝ v<sup>2</sup>.",
            "Doubling v multiplies d by 2<sup>2</sup> = 4."
          ],
          "ans": "4d"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "From the top of a 25 m tower, a stone is thrown vertically upward with a speed of 20 m/s. Taking g = 10 m/s<sup>2</sup>, find the maximum height it reaches above the ground, the total time before it hits the ground, and its speed on impact.",
          "steps": [
            "Take up as positive, origin at the launch point, so u = +20 m/s, a = −10 m/s<sup>2</sup>, and the ground sits at s = −25 m.",
            "At the top v = 0, so by v<sup>2</sup> = u<sup>2</sup> + 2as: 0 = 400 − 20H, giving H = 20 m above the tower top, 45 m above the ground.",
            "Position: s = 20t − 5t<sup>2</sup>. Setting s = −25 gives t<sup>2</sup> − 4t − 5 = 0, so (t − 5)(t + 1) = 0 and t = 5 s, the negative root discarded as unphysical.",
            "v<sup>2</sup> = 400 − 2(10)(−25) = 900, so v = 30 m/s, downward."
          ],
          "ans": "height above ground 45 m · t = 5 s · v = 30 m/s"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A ball is dropped from rest from a height H. During the last second of its fall it covers 9/25 of the total height H. Taking g = 10 m/s<sup>2</sup>, find the total time of fall and the height H.",
          "steps": [
            "From rest, distance fallen in time t is ½gt<sup>2</sup>. The fraction covered in the last second, from T − 1 to T, is [T<sup>2</sup> − (T − 1)<sup>2</sup>]/T<sup>2</sup> = (2T − 1)/T<sup>2</sup>.",
            "Set this equal to 9/25: 25(2T − 1) = 9T<sup>2</sup>, giving 9T<sup>2</sup> − 50T + 25 = 0.",
            "T = (50 ± 40)/18, so T = 5 s or T = 5/9 s, the second root rejected because it is under one second, so a last second could not even exist.",
            "H = ½gT<sup>2</sup> = ½(10)(25) = 125 m."
          ],
          "ans": "T = 5 s · H = 125 m"
        },
        {
          "t": "mcq",
          "q": "The equation v<sup>2</sup> = u<sup>2</sup> + 2as can be applied only when:",
          "opts": [
            { "label": "the acceleration varies with time", "nudge": "That is exactly the case where the three equations fail: they need a constant acceleration." },
            { "label": "the acceleration is uniform", "nudge": null },
            { "label": "the initial velocity is zero", "nudge": "u can be any value; the equation places no restriction on it." },
            { "label": "the motion is vertical", "nudge": "This confuses the general equation with its free-fall application. Horizontal uniform acceleration works exactly as well." }
          ],
          "correct": 1,
          "solution": "All three equations of motion are derived assuming a constant acceleration; that is the one condition they need."
        },
        {
          "t": "mcq",
          "q": "A body falling freely from rest covers distances in the 1st, 2nd and 3rd seconds in the ratio:",
          "opts": [
            { "label": "1 : 2 : 3", "nudge": "That is the ratio of the speeds, or of the times, not the distance covered in each second." },
            { "label": "1 : 3 : 5", "nudge": null },
            { "label": "1 : 4 : 9", "nudge": "That is the ratio of the total distances after 1, 2 and 3 seconds, proportional to n<sup>2</sup>, a seductive but different quantity from the distance in each second." },
            { "label": "1 : 2 : 4", "nudge": "This fits no kinematic pattern here." }
          ],
          "correct": 1,
          "solution": "By Galileo's law, distances in successive seconds go as (2n − 1): 1, 3, 5."
        },
        {
          "t": "mcq",
          "q": "A ball is thrown vertically upward with speed u and returns to the thrower's hand, air resistance ignored. Which statement is correct?",
          "opts": [
            { "label": "it returns with speed greater than u", "nudge": "That would violate energy conservation." },
            { "label": "it returns with speed equal to u", "nudge": null },
            { "label": "the time going up exceeds the time coming down", "nudge": "False: by symmetry the up and down times are exactly equal." },
            { "label": "its acceleration is zero at the highest point", "nudge": "The classic trap: velocity is zero there, but the acceleration is still g downward, gravity never turns off." }
          ],
          "correct": 1,
          "solution": "By symmetry, and by energy conservation, it returns with the same speed u."
        },
        {
          "t": "mcq",
          "q": "A car travelling at speed v stops in a distance d when the brakes are applied. If it travels at 3v with the same braking deceleration, the stopping distance becomes:",
          "opts": [
            { "label": "3d", "nudge": "This assumes linear scaling, the standard mistake here." },
            { "label": "6d", "nudge": "There is no basis for this factor." },
            { "label": "9d", "nudge": null },
            { "label": "d/3", "nudge": "This inverts the relationship entirely." }
          ],
          "correct": 2,
          "solution": "Stopping distance is proportional to v<sup>2</sup>, so tripling the speed gives 3<sup>2</sup> = 9 times the distance."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A car speeds up uniformly from 10 m/s to 25 m/s in 5 s. Find its acceleration and the distance covered.", "a": "a = (25−10)/5 = 3 m/s<sup>2</sup>. s = ((10+25)/2)(5) = 87.5 m." },
            { "q": "[NEET] A ball thrown vertically upward takes 2 s to reach its highest point (g = 10 m/s<sup>2</sup>). Find its initial speed and the maximum height.", "a": "u = gt = 20 m/s. H = u<sup>2</sup>/2g = 400/20 = 20 m." },
            { "q": "[JEE Main] A body starts from rest with constant acceleration. Find the ratio of the distance it covers in the 3rd second to that in the 5th second.", "a": "Distance in the nth second ∝ (2n−1), so the ratio is 5 : 9." },
            { "q": "[JEE Main] A stone dropped from a cliff reaches the ground in 4 s (g = 10 m/s<sup>2</sup>). Find the height of the cliff and the stone's speed on impact.", "a": "h = ½(10)(16) = 80 m. v = gt = 40 m/s." },
            { "q": "[JEE Advanced] A ball is thrown vertically upward from the ground with 30 m/s (g = 10 m/s<sup>2</sup>). For how long is the ball at a height of 40 m or more above the ground?", "a": "Solving 5t<sup>2</sup> − 30t + 40 = 0 gives t = 2 s and t = 4 s, a duration of 2 s." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Using the equations when a is not constant.</b> This is the cardinal error of the whole topic: the moment a depends on t, v or x, all three equations are simply invalid, and only the calculus of the next topic can save you.",
            "<b>Sign-convention chaos in free fall.</b> Mixing the signs of u, a and s wrecks vertical-motion problems. Pick one positive direction and apply it to every quantity in the problem, no exceptions partway through.",
            "<b>Confusing distance in the nth second with distance in n seconds.</b> The first is s<sub>n</sub> = u + (a/2)(2n − 1); the second is s = un + ½an<sup>2</sup>. They are not the same number, and an exam distractor is almost always the other one.",
            "<b>Believing acceleration is zero at the top of a throw.</b> Velocity is zero there, acceleration is still g. The ball is not hanging weightless, it is about to fall.",
            "<b>Mixing g = 9.8 and g = 10 within one problem.</b> Read which value the question intends and use it consistently through every step."
          ]
        },
        {
          "t": "protip",
          "html": "lock in \"up = positive, a = −g\" for every vertical problem and never re-decide mid-solution. for speed-doubled or speed-tripled braking questions, reach for the proportionality d ∝ v² instead of recomputing from scratch. and when you need to find when a body is at a given height, set up the quadratic in t, the two roots are usually the moment it passes that height going up and again coming down, which is often the whole point of the question."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "v = u + at · s = ut + ½at<sup>2</sup> · v<sup>2</sup> = u<sup>2</sup> + 2as", "note": "constant a only, the stamped expiry on all three" },
            { "f": "free fall from rest: v = gt, h = ½gt<sup>2</sup>, v<sup>2</sup> = 2gh", "note": "g ≈ 9.8 m/s<sup>2</sup>, rounded to 10 for quick work" },
            { "f": "thrown up at u: H = u<sup>2</sup>/2g, t<sub>flight</sub> = 2u/g", "note": "returns with the same speed, equal time up and down" },
            { "f": "Galileo's odd numbers: 1 : 3 : 5 : 7 : …", "note": "successive-second distances from rest" },
            { "f": "stopping distance d = v<sub>0</sub><sup>2</sup>/2a ∝ v<sub>0</sub><sup>2</sup>", "note": "double the speed, quadruple the distance" }
          ],
          "aids": [
            "\"up = positive, a = −g, and never re-decide mid-solution\"",
            "\"nth second is u + a/2 times (2n − 1), not the same as n seconds\""
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Relative Velocity in One Dimension",
      "chip": "04 RELATIVE VELOCITY",
      "kalam": "same frame, whole problem: pick one and never switch",
      "blocks": [
        {
          "t": "p",
          "html": "Sit in a moving train and watch a second train on the next track. If both crawl forward at nearly the same speed, the other train seems almost frozen beside you, even though someone standing on the platform sees both racing past. If the other train moves the opposite way, it seems to rush by at a frightening rate. Nothing about either train's actual motion changed, what changed is who is watching. That is the whole idea of <b>relative velocity</b>: a velocity is never absolute, it is always measured against some observer, some frame of reference."
        },
        {
          "t": "think",
          "html": "imagine two motorcyclists on a long straight highway. if both ride north at 80 km/h, each sees the other sitting parked alongside, relative velocity zero. if one rides north at 80 and the other south at 80, each sees the other approaching at 160 km/h. same individual speeds, wildly different relative speeds. the rule falls out on its own: same direction, subtract; opposite directions, add."
        },
        {
          "t": "p",
          "html": "When you quote a car's speed as 60 km/h you silently mean relative to the ground, the default frame. But you are free to ask how fast one object moves as seen from another, and that is the velocity of one relative to the other. The velocity of A with respect to B, written <i>v<sub>AB</sub></i>, is what an observer riding on B would measure for A: <i>v<sub>AB</sub></i> = <i>v<sub>A</sub></i> − <i>v<sub>B</sub></i>. Because this chapter stays on a single straight line, that subtraction is ordinary signed arithmetic once a positive direction is fixed. Two bodies whose gap is shrinking have a relative velocity of approach; a gap that is growing is a relative velocity of separation."
        },
        {
          "t": "p",
          "html": "Just as position and velocity are relative, so is acceleration: the relative acceleration of A with respect to B is <i>a<sub>AB</sub></i> = <i>a<sub>A</sub></i> − <i>a<sub>B</sub></i>. This gives one of the most useful shortcuts in kinematics. If two bodies share the same acceleration, both in free fall, say, each accelerating at g, their relative acceleration is exactly zero, so one sees the other moving at a <b>constant</b> relative velocity, however fast both are actually accelerating."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · RELATIVE VELOCITY AND ACCELERATION",
          "main": "<i>v<sub>AB</sub></i> = <i>v<sub>A</sub></i> − <i>v<sub>B</sub></i> = −<i>v<sub>BA</sub></i><br><i>a<sub>AB</sub></i> = <i>a<sub>A</sub></i> − <i>a<sub>B</sub></i>",
          "legend": [
            "same direction, speeds v<sub>A</sub>, v<sub>B</sub>: relative speed = |v<sub>A</sub> − v<sub>B</sub>|",
            "opposite directions, speeds v<sub>A</sub>, v<sub>B</sub>: relative speed = v<sub>A</sub> + v<sub>B</sub>"
          ],
          "note": "A's view of B is the exact opposite of B's view of A, the same magnitude, a reversed sign."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE RELATIVE QUANTITIES OBEY THE SAME EQUATIONS",
          "steps": [
            {
              "eq": "<i>x<sub>AB</sub></i> = <i>x<sub>A</sub></i> − <i>x<sub>B</sub></i>",
              "why": "The position of A as seen from B is simply the separation between them, measured in the ground frame."
            },
            {
              "eq": "<i>v<sub>AB</sub></i> = <i>d</i>(<i>x<sub>A</sub></i> − <i>x<sub>B</sub></i>)/<i>dt</i> = <i>v<sub>A</sub></i> − <i>v<sub>B</sub></i>",
              "why": "Differentiate once, and because differentiation of a sum splits over each term, the separation's rate of change is just the difference of the two individual velocities."
            },
            {
              "eq": "<i>a<sub>AB</sub></i> = <i>d</i>(<i>v<sub>A</sub></i> − <i>v<sub>B</sub></i>)/<i>dt</i> = <i>a<sub>A</sub></i> − <i>a<sub>B</sub></i>",
              "why": "Differentiate again, the same way. So the relative quantities obey exactly the ordinary equations of motion, because they are nothing but differences of quantities that already obey them: you may treat B as a stationary lab and analyse A's motion inside it."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · RELATIVE MOTION AS A ONE-BODY PROBLEM",
          "main": "<i>v</i><sub>rel</sub> = <i>u</i><sub>rel</sub> + <i>a</i><sub>rel</sub><i>t</i><br><i>s</i><sub>rel</sub> = <i>u</i><sub>rel</sub><i>t</i> + ½<i>a</i><sub>rel</sub><i>t</i><sup>2</sup>",
          "legend": [
            "valid exactly when a<sub>rel</sub> is constant, which is guaranteed whenever both a<sub>A</sub> and a<sub>B</sub> individually are",
            "time to meet, two bodies closing along a line: t<sub>meet</sub> = initial separation ÷ relative speed of approach",
            "crossing a finite-length object: the relevant relative displacement is the sum of the two lengths for two trains passing, or one length for a train passing a fixed point"
          ],
          "note": "u<sub>rel</sub>, v<sub>rel</sub>, a<sub>rel</sub>, s<sub>rel</sub> are the initial relative velocity, final relative velocity, relative acceleration and relative displacement."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 2.7 · TWO BALLS, ONE VERTICAL LINE",
          "chips": ["closing at a constant rate"],
          "captions": [
            "Ball 1 launches upward at 25 m/s from the ground. Ball 2 is released from rest 100 m above it at the same instant. Because both accelerate at g, the gap closes at a steady 25 m/s, and the two meet 4 s later, 20 m above the ground."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [-1, 11], "axes": "none", "aspect": 1.1,
              "segments": [{ "from": [5, 0], "to": [5, 10], "soft": true }],
              "bodies": [{ "kind": "ground", "at": [5, 0], "w": 6, "h": 0.3 }],
              "arrows": [
                { "from": [5, 0], "to": [5, 1.8], "tone": "ink", "label": "u = 25 m/s", "at": "end" },
                { "from": [7, 0], "to": [7, 10], "head": "both", "tone": "amber", "label": "closing" }
              ],
              "marks": [
                { "x": 5, "y": 0, "glyph": "dot", "label": "ball 1" },
                { "x": 5, "y": 10, "glyph": "dot", "label": "ball 2" },
                { "x": 5, "y": 2, "glyph": "cross", "label": "they meet" }
              ],
              "labels": [
                { "x": 3, "y": 0, "text": "0 m" },
                { "x": 3, "y": 2, "text": "20 m" },
                { "x": 3, "y": 10, "text": "100 m" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Solving a relative-velocity problem",
          "steps": [
            "<b>Fix a positive direction</b>, say rightward, and write every velocity and acceleration with its correct sign in the ground frame.",
            "<b>Choose the frame you will work in</b>, usually the ground, or one of the two bodies, and stick to it for the entire problem.",
            "<b>If working in B's frame, compute u<sub>rel</sub> = v<sub>A</sub> − v<sub>B</sub> and a<sub>rel</sub> = a<sub>A</sub> − a<sub>B</sub></b> once, at the start.",
            "<b>Translate the question into the relative quantity.</b> When do they meet, means relative displacement equals the initial separation. When are they d apart, means relative displacement equals ±d.",
            "<b>Apply the relative-form equation, solve, and check the roots against the physics</b>, rejecting a negative time or a root that describes an event after the bodies have already met."
          ]
        },
        {
          "t": "proc",
          "title": "Approach or separation, the sign-free quick method",
          "steps": [
            "<b>Same direction, subtract the speeds; opposite directions, add them.</b> This gives the magnitude of the relative velocity without touching a sign.",
            "<b>Decide approach or separation</b> by asking whether the gap between the two bodies is currently shrinking or growing.",
            "<b>For time to meet, divide the initial gap by the relative speed of approach.</b> For overtaking a finite-length object, use the total length that must pass instead of a single point.",
            "<b>Sanity check.</b> A faster follower always eventually catches a slower leader; two bodies moving apart never meet."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Two trains run on parallel straight tracks. Train A moves at 72 km/h and train B at 54 km/h. Find the velocity of A relative to B when they move in the same direction, and when they move in opposite directions.",
          "steps": [
            "Convert: v<sub>A</sub> = 72 km/h = 20 m/s, v<sub>B</sub> = 54 km/h = 15 m/s. Take A's direction of travel as positive.",
            "Same direction: v<sub>B</sub> = +15 m/s, so v<sub>AB</sub> = 20 − 15 = 5 m/s, in A's direction.",
            "Opposite directions: v<sub>B</sub> = −15 m/s, so v<sub>AB</sub> = 20 − (−15) = 35 m/s, in A's direction. The opposite-direction case is far larger because the two motions reinforce instead of cancel."
          ],
          "ans": "5 m/s same direction · 35 m/s opposite directions"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Two cars travel toward each other along a straight road, one at 54 km/h and the other at 36 km/h. The speed of one car relative to the other is: 18 km/h, 45 km/h, 90 km/h, or 72 km/h?",
          "steps": [
            "The eye sees two speeds and subtracts, 54 − 36 = 18, but subtraction is the same-direction rule, and these cars move toward each other.",
            "Opposite directions add: v<sub>rel</sub> = 54 + 36 = 90 km/h.",
            "Burn in the one-liner: same way, subtract; opposite, add. The instant a problem says toward each other or opposite directions, add without hesitation."
          ],
          "ans": "90 km/h"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "On a straight road, car A moves at a constant 20 m/s. At the same instant, car B, 75 m behind A on the same road, starts at 10 m/s and accelerates uniformly at 2 m/s<sup>2</sup> in the same direction. After how long does B catch A, and how far has B then travelled?",
          "steps": [
            "Work in A's frame, which is unaccelerated and so a valid inertial lab. Take the common direction of travel as positive.",
            "u<sub>rel</sub> = v<sub>B</sub> − v<sub>A</sub> = 10 − 20 = −10 m/s, a<sub>rel</sub> = a<sub>B</sub> − a<sub>A</sub> = 2 − 0 = 2 m/s<sup>2</sup>.",
            "B must close the 75 m gap: 75 = −10t + t<sup>2</sup>, so t<sup>2</sup> − 10t − 75 = 0, giving (t − 15)(t + 5) = 0 and t = 15 s.",
            "Distance B travels: s<sub>B</sub> = (10)(15) + ½(2)(15<sup>2</sup>) = 150 + 225 = 375 m. Check: A is then 75 + 20(15) = 375 m from B's start, they coincide. Note that u<sub>rel</sub> starts negative, so the gap actually widens at first, and B only overhauls A once its acceleration has repaid that initial deficit."
          ],
          "ans": "t = 15 s · s<sub>B</sub> = 375 m"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A ball is thrown vertically upward from the ground with 25 m/s. At the very same instant, a second ball is released from rest from a height of 100 m directly above the first, along the same vertical line. Taking g = 10 m/s<sup>2</sup>, find when and at what height above the ground the two balls meet.",
          "steps": [
            "Both balls are in free fall, so each accelerates at g downward. Their relative acceleration is exactly zero, which means their relative velocity is constant and the gap closes uniformly, no quadratic needed.",
            "Take up as positive. u<sub>1</sub> = +25 m/s, u<sub>2</sub> = 0, and both have a = −g. u<sub>rel</sub> = u<sub>1</sub> − u<sub>2</sub> = 25 m/s, a<sub>rel</sub> = (−g) − (−g) = 0.",
            "With zero relative acceleration the 100 m separation closes at a steady 25 m/s: t<sub>meet</sub> = 100/25 = 4 s.",
            "Height of ball 1 at t = 4 s: y<sub>1</sub> = 25(4) − ½(10)(16) = 100 − 80 = 20 m. Ball 2, released from 100 m, checks out the same way: y<sub>2</sub> = 100 − 80 = 20 m. Both balls are still airborne at t = 4 s, so the meeting is genuine."
          ],
          "ans": "meet at t = 4 s, 20 m above the ground"
        },
        {
          "t": "mcq",
          "q": "The velocity of a body A relative to body B is correctly written as:",
          "opts": [
            { "label": "v<sub>A</sub> + v<sub>B</sub>", "nudge": "This gives only the magnitude, and only in the special opposite-direction case, not the general definition." },
            { "label": "v<sub>A</sub> − v<sub>B</sub>", "nudge": null },
            { "label": "v<sub>B</sub> − v<sub>A</sub>", "nudge": "That is v<sub>BA</sub>, the exact negative of what was asked, a sign trap." },
            { "label": "½(v<sub>A</sub> + v<sub>B</sub>)", "nudge": "An average has no meaning here at all." }
          ],
          "correct": 1,
          "solution": "By definition v<sub>AB</sub> = v<sub>A</sub> − v<sub>B</sub>."
        },
        {
          "t": "mcq",
          "q": "Two particles move along the same straight line in opposite directions with speeds v<sub>1</sub> and v<sub>2</sub>. The magnitude of their relative velocity is:",
          "opts": [
            { "label": "|v<sub>1</sub> − v<sub>2</sub>|", "nudge": "That is the same-direction result, picked by memorising subtract without checking the directions." },
            { "label": "v<sub>1</sub> + v<sub>2</sub>", "nudge": null },
            { "label": "½(v<sub>1</sub> + v<sub>2</sub>)", "nudge": "There is no physical basis for averaging here." },
            { "label": "zero", "nudge": "That would require equal velocities in the same direction, not opposite ones." }
          ],
          "correct": 1,
          "solution": "Opposite directions add: relative speed = v<sub>1</sub> + v<sub>2</sub>."
        },
        {
          "t": "mcq",
          "q": "Two stones are dropped from rest from the top of a tall tower, the second released a short moment after the first. As both fall, the distance between them:",
          "opts": [
            { "label": "remains constant", "nudge": "The seductive trap: same acceleration fixes the relative velocity, not the separation. The gap actually widens at a constant rate." },
            { "label": "increases", "nudge": null },
            { "label": "decreases", "nudge": "This contradicts the steadily increasing relative speed of the leading stone." },
            { "label": "first increases, then decreases", "nudge": "Same contradiction: the relative speed never changes sign, so the gap never turns around." }
          ],
          "correct": 1,
          "solution": "Both fall with the same acceleration g, so a<sub>rel</sub> = 0, but the first stone is always faster, having had a head start, giving a constant non-zero relative velocity, and a constant relative velocity makes the separation grow steadily."
        },
        {
          "t": "mcq",
          "q": "Two trains, each 100 m long, travel toward each other on parallel tracks at 15 m/s and 25 m/s. The time taken for them to completely cross each other is:",
          "opts": [
            { "label": "5 s", "nudge": null },
            { "label": "10 s", "nudge": "This uses only one train's length, half the total that actually needs to pass." },
            { "label": "2.5 s", "nudge": "This halves the correct answer incorrectly." },
            { "label": "8 s", "nudge": "This mixes up the given numbers." }
          ],
          "correct": 0,
          "solution": "Relative speed, opposite directions, is 15 + 25 = 40 m/s. To fully cross, the combined length of 200 m must sweep past at that relative speed: 200/40 = 5 s."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Two cyclists ride directly toward each other on a straight road at 5 m/s and 7 m/s. Find their relative speed of approach.", "a": "Opposite directions add: 5 + 7 = 12 m/s." },
            { "q": "[NEET] A boy runs at 3 m/s in the same direction as a bus moving at 12 m/s. Find the boy's velocity relative to the bus.", "a": "3 − 12 = −9 m/s, that is, 9 m/s opposite to the bus's own motion." },
            { "q": "[JEE Main] Two cars, 120 m apart on a straight road, move toward each other at 8 m/s and 12 m/s. How long before they meet?", "a": "Relative speed = 20 m/s. t = 120/20 = 6 s." },
            { "q": "[JEE Main] A train 200 m long, moving at 20 m/s, overtakes a man walking at 2 m/s in the same direction along the track. How long does the train take to completely pass him?", "a": "Relative speed = 20 − 2 = 18 m/s. t = 200/18 ≈ 11.1 s." },
            { "q": "[JEE Advanced] From the top of a 60 m tower a stone is dropped from rest. At the same instant another stone is thrown vertically upward from the ground at 20 m/s along the same line (g = 10 m/s<sup>2</sup>). Find when and at what height they meet.", "a": "a<sub>rel</sub> = 0, u<sub>rel</sub> = 20 m/s, so t = 60/20 = 3 s. Height: 20(3) − ½(10)(9) = 15 m above the ground." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Adding when you should subtract, or the reverse.</b> Same direction subtracts; opposite adds. Assign + and − signs in the ground frame before combining, and the rule then takes care of itself.",
            "<b>Confusing v<sub>AB</sub> with v<sub>BA</sub>.</b> They are equal in size and opposite in sign. State clearly which body is the observer before writing a number.",
            "<b>Treating a crossing as a single point event.</b> Overtaking or crossing a finite-length object needs the whole length, or the sum of both lengths, to pass at the relative speed, not just one meeting point.",
            "<b>Believing same acceleration means constant gap.</b> False: equal accelerations make the relative velocity constant, and the separation then changes linearly, it does not stay fixed.",
            "<b>Switching frames mid-solution.</b> Moving between the ground frame and one body's frame partway through a calculation scrambles every sign in it."
          ]
        },
        {
          "t": "protip",
          "html": "commit to one frame for the whole problem, usually the ground, or a non-accelerating body treated as a stationary lab. the single most powerful shortcut: two bodies sharing the same acceleration, both in free fall, have a<sub>rel</sub> = 0, so they drift apart or together at a constant relative velocity, and time to meet is just initial separation divided by relative speed of approach, no quadratic required. reach for it whenever two projectiles share gravity as their only acceleration."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "v<sub>AB</sub> = v<sub>A</sub> − v<sub>B</sub> = −v<sub>BA</sub>", "note": "the velocity of A as seen from B" },
            { "f": "same direction, subtract · opposite, add", "note": "the whole rule, in five words" },
            { "f": "a<sub>AB</sub> = a<sub>A</sub> − a<sub>B</sub>", "note": "equal accelerations give a<sub>rel</sub> = 0, constant relative velocity" },
            { "f": "t<sub>meet</sub> = initial separation ÷ relative speed of approach", "note": "crossing: use the sum of both lengths" },
            { "f": "relative quantities obey the ordinary equations of motion", "note": "because they are differences of quantities that already do" }
          ],
          "aids": [
            "\"same way, subtract; opposite, add\"",
            "\"one frame, whole problem, never switch\""
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Variable Acceleration: When the Equations Stop Working",
      "chip": "05 VARIABLE a",
      "kalam": "ask what a depends on before you touch an integral",
      "blocks": [
        {
          "t": "p",
          "html": "The three equations of the last topic are a beautiful shortcut, but their fine print never goes away: constant acceleration only. Real motion is rarely that obliging. A parachutist meets more air drag the faster she falls, a charged particle feels a force that grows as it nears a plate, a rocket's acceleration climbs as it burns fuel and grows lighter. To handle any of these you return to the two definitions that are always true, whatever the acceleration is doing: <i>v</i> = <i>dx</i>/<i>dt</i> and <i>a</i> = <i>dv</i>/<i>dt</i>, and use the calculus inside them honestly."
        },
        {
          "t": "think",
          "html": "you have already met both halves of this. the derivative you studied as a limiting slope is exactly instantaneous velocity, dx/dt, and nothing else. what you have not formally met is its reverse: running the power rule backward. if the derivative of x<sup>n+1</sup>/(n+1) is x<sup>n</sup>, then finding a position from a known velocity is just that rule, undone. that reversal is called integration, and this topic is the first place you will use it, ahead of meeting it properly next year."
        },
        {
          "t": "p",
          "html": "Recall the disciplined auto-rickshaw driver from the last topic, pressing the accelerator by exactly the same amount the whole way. The three equations described him perfectly. This topic is about the erratic driver, easing off, flooring it, braking, speeding up again. His motion is still governed by physics just as completely, only the rule changes moment to moment, so you track it with calculus rather than a single formula. The good news: once you can read off whether the changing acceleration depends on t, v or x, the right tool snaps into place almost on its own."
        },
        {
          "t": "p",
          "html": "So the whole strategy reduces to one question, asked at the start of every problem: what does the acceleration depend on? A velocity-dependent acceleration also explains one of the most familiar facts in everyday physics, <b>terminal velocity</b>. A raindrop or a skydiver falls under gravity but meets air drag that grows with speed, so the net acceleration looks something like <i>a</i> = <i>g</i> − <i>kv</i>. As the speed rises, the drag term climbs until it exactly cancels gravity, and at that point <i>a</i> = 0 and the speed stops increasing. Setting <i>a</i> = 0 hands you the terminal speed, <i>v</i><sub>term</sub> = <i>g</i>/<i>k</i>, without solving the motion in full."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE MASTER KEY, WHEN a DEPENDS ON POSITION OR VELOCITY",
          "main": "<i>a</i> = <i>dv</i>/<i>dt</i> = (<i>dv</i>/<i>dx</i>)(<i>dx</i>/<i>dt</i>) = <i>v</i> <i>dv</i>/<i>dx</i>",
          "legend": [
            "this is the chain rule you already know, run through dx/dt = v: acceleration relates directly to position, without ever passing through time",
            "if v is handed to you as a function of x, the acceleration is v dv/dx, never the bare dv/dx"
          ],
          "note": "this single rewrite lets you find velocity as a function of position without ever solving for time, exactly what stopping-distance problems need."
        },
        {
          "t": "defgrid",
          "title": "Diagnose the dependence, then integrate",
          "rows": [
            { "k": "a = f(t)", "v": "integrate directly: <i>v</i> = <i>v</i><sub>0</sub> + ∫ <i>f</i>(<i>t</i>) <i>dt</i>, then <i>x</i> = <i>x</i><sub>0</sub> + ∫ <i>v</i> <i>dt</i>" },
            { "k": "a = f(v), want v(t)", "v": "∫ <i>dv</i>/<i>f</i>(<i>v</i>) = ∫ <i>dt</i>" },
            { "k": "a = f(v), want v(x)", "v": "∫ <i>v</i> <i>dv</i>/<i>f</i>(<i>v</i>) = ∫ <i>dx</i>" },
            { "k": "a = f(x)", "v": "<i>v</i> <i>dv</i> = <i>f</i>(<i>x</i>) <i>dx</i>, so (<i>v</i><sup>2</sup> − <i>v</i><sub>0</sub><sup>2</sup>)/2 = ∫ <i>f</i>(<i>x</i>) <i>dx</i>" }
          ]
        },
        {
          "t": "diagram",
          "kind": "flow",
          "kicker": "FIGURE 2.8 · WHAT DOES a DEPEND ON?",
          "chips": ["the decision tree"],
          "captions": [
            "Three branches, three integrals. A side note worth repeating: if v is given as a function of x, the acceleration is v dv/dx, never the bare dv/dx."
          ],
          "frames": [
            {
              "flow": {
                "boxes": [
                  { "id": "root", "col": 0, "row": 2, "text": "what does\na depend on?", "shape": "diamond" },
                  { "id": "ft", "col": 1, "row": 0, "text": "a = f(t)" },
                  { "id": "fv", "col": 1, "row": 2, "text": "a = f(v)" },
                  { "id": "fx", "col": 1, "row": 4, "text": "a = f(x)" },
                  { "id": "ftLeaf", "col": 2, "row": 0, "text": "integrate a dt\nto get v, then\nv dt to get x", "shape": "round" },
                  { "id": "fvLeaf1", "col": 2, "row": 1, "text": "want v(t):\ndv/f(v) = dt", "shape": "round" },
                  { "id": "fvLeaf2", "col": 2, "row": 3, "text": "want v(x):\nv dv/f(v) = dx", "shape": "round" },
                  { "id": "fxLeaf", "col": 2, "row": 4, "text": "v dv =\nf(x) dx", "shape": "round" }
                ],
                "links": [
                  { "from": "root", "to": "ft" },
                  { "from": "root", "to": "fv" },
                  { "from": "root", "to": "fx" },
                  { "from": "ft", "to": "ftLeaf" },
                  { "from": "fv", "to": "fvLeaf1" },
                  { "from": "fv", "to": "fvLeaf2" },
                  { "from": "fx", "to": "fxLeaf" }
                ]
              }
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE CONSTANT-a CASE, AS A CHECK",
          "steps": [
            {
              "eq": "put <i>f</i>(<i>x</i>) = <i>a</i>, a constant, into the Case 3 result",
              "why": "Every general tool should reproduce the special case you already trust. Here that special case is the third equation of the last topic."
            },
            {
              "eq": "(<i>v</i><sup>2</sup> − <i>u</i><sup>2</sup>)/2 = ∫ from <i>x</i><sub>0</sub> to <i>x</i> of <i>a</i> <i>dx</i> = <i>a</i>(<i>x</i> − <i>x</i><sub>0</sub>)",
              "why": "With a constant, the integral is just a times the distance travelled, s."
            },
            {
              "eq": "<i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>as</i>",
              "why": "Exactly the familiar third equation falls out. The master key is not a replacement for the equations of motion, it is what they were always a special case of."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Given x(t), read off velocity and acceleration",
          "steps": [
            "<b>Differentiate once</b> to get v(t) = dx/dt.",
            "<b>Differentiate again</b> to get a(t) = dv/dt.",
            "<b>Answer the question at the right instant.</b> At rest means v = 0; acceleration zero means a = 0. Solve for t, then substitute it back wherever the question actually asks for a value."
          ]
        },
        {
          "t": "proc",
          "title": "Given a, diagnose the dependence, then integrate",
          "steps": [
            "<b>a = f(t): integrate directly against time.</b> v(t) = v<sub>0</sub> + ∫f(t) dt, then x(t) = x<sub>0</sub> + ∫v dt. Anchor both constants from the initial conditions before substituting.",
            "<b>a = f(v): pick the pairing by what the question wants.</b> Time involved, use dv/dt = f(v), so ∫dv/f(v) = ∫dt. Position involved and no time, use v dv/dx = f(v), so ∫v dv/f(v) = ∫dx. The wrong pairing forces an integral you cannot evaluate.",
            "<b>a = f(x): write v dv = f(x) dx</b> and integrate both sides with limits. Solve for v as a function of x; if you then need time as well, integrate dx/v(x) = dt separately."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A particle starts from rest at the origin. Its acceleration varies with time as a = 4t m/s<sup>2</sup>. Find its velocity and displacement at t = 3 s.",
          "steps": [
            "v<sub>0</sub> = 0, x<sub>0</sub> = 0, and a depends on time, so this is the first case.",
            "v = v<sub>0</sub> + ∫ from 0 to t of 4t dt = 2t<sup>2</sup>, so v(3) = 2(9) = 18 m/s.",
            "x = x<sub>0</sub> + ∫ from 0 to t of 2t<sup>2</sup> dt = (2/3)t<sup>3</sup>, so x(3) = (2/3)(27) = 18 m. Note that v = u + at could not have been used here, since a is not constant, integration is the only honest route."
          ],
          "ans": "v(3) = 18 m/s · x(3) = 18 m"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A particle moves along the x-axis so that its velocity depends on position as v = 4√x (SI units). Its acceleration is: not constant and growing with x, 8 m/s<sup>2</sup> constant, 4 m/s<sup>2</sup>, or 2 m/s<sup>2</sup>?",
          "steps": [
            "Seeing v = 4√x, the hasty step is to write a = dv/dx = 2/√x and conclude the acceleration depends on x. But dv/dx is not the acceleration, the correct relation is a = v dv/dx.",
            "a = v(dv/dx) = (4√x)(2/√x) = 8 m/s<sup>2</sup>.",
            "Whenever v<sup>2</sup> is linear in x, here v<sup>2</sup> = 16x, the acceleration is constant, because v dv/dx is half the slope of the v<sup>2</sup>-versus-x line. The trap is forgetting that factor of v."
          ],
          "ans": "8 m/s<sup>2</sup>, constant"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A particle starts from rest at x = 1 m and moves with a position-dependent acceleration a = 4x m/s<sup>2</sup>. Find its speed as it passes x = 3 m.",
          "steps": [
            "Acceleration depends on position, so the constant-a equations are useless: this calls for v dv = a dx.",
            "With v<sub>0</sub> = 0 at x<sub>0</sub> = 1: ∫ from 0 to v of v dv = ∫ from 1 to 3 of 4x dx, giving v<sup>2</sup>/2 = [2x<sup>2</sup>] from 1 to 3 = 18 − 2 = 16.",
            "v<sup>2</sup> = 32, so v = √32 ≈ 5.66 m/s."
          ],
          "ans": "v ≈ 5.66 m/s"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A particle is projected along the x-axis with initial velocity u. It experiences a resistive acceleration a = −kv<sup>2</sup>, with k a positive constant. Find its velocity as a function of distance travelled, and as a function of time.",
          "steps": [
            "Acceleration depends on velocity, Case 2, and the two parts demand the two different pairings: distance wants v dv/dx, time wants dv/dt.",
            "Velocity vs distance: v dv/dx = −kv<sup>2</sup>, so dv/v = −k dx. Integrating from u to v and 0 to x: ln(v/u) = −kx, so v = ue<sup>−kx</sup>.",
            "Velocity vs time: dv/dt = −kv<sup>2</sup>, so −dv/v<sup>2</sup> = k dt. Integrating from u to v and 0 to t: 1/v − 1/u = kt, so v = u/(1 + ukt).",
            "The same physical law gives two genuinely different-looking answers: velocity falls exponentially with distance, but only reciprocally with time, and the only way to reach each is to pair the acceleration with the matching variable."
          ],
          "ans": "v = ue<sup>−kx</sup> · v = u/(1 + ukt)"
        },
        {
          "t": "mcq",
          "q": "When a particle's acceleration is given as a function of its position, a = f(x), the most efficient relation to find its velocity is:",
          "opts": [
            { "label": "a = dv/dt", "nudge": "True in general, but useless here: you cannot integrate f(x) dt without already knowing x(t)." },
            { "label": "v = dx/dt", "nudge": "That is only the definition of velocity, it does not use the given a = f(x) at all." },
            { "label": "a = v dv/dx", "nudge": null },
            { "label": "v = u + at", "nudge": "Forbidden here: a is not constant." }
          ],
          "correct": 2,
          "solution": "With a known as a function of x, v dv = f(x) dx integrates directly in the x-variable."
        },
        {
          "t": "mcq",
          "q": "A particle's velocity varies with position as v = c√x, for a constant c. Its acceleration is:",
          "opts": [
            { "label": "zero", "nudge": "This ignores the motion entirely; the particle is clearly speeding up as x grows." },
            { "label": "constant", "nudge": null },
            { "label": "proportional to x", "nudge": "This comes from mistaking dv/dx for the acceleration." },
            { "label": "proportional to √x", "nudge": "Same mistake, one factor of v short." }
          ],
          "correct": 1,
          "solution": "a = v dv/dx = (c√x)(c/2√x) = c<sup>2</sup>/2, a constant. This v ∝ √x pattern is exactly uniformly accelerated motion starting from rest."
        },
        {
          "t": "mcq",
          "q": "A particle moves with x(t) = t<sup>3</sup> − 6t<sup>2</sup> + 9t (SI units). The magnitude of its acceleration at the instant it is momentarily at rest for the second time is:",
          "opts": [
            { "label": "6 m/s<sup>2</sup>", "nudge": null },
            { "label": "12 m/s<sup>2</sup>", "nudge": "This is |a| read at t = 0 instead of at the correct instant." },
            { "label": "0", "nudge": "This wrongly assumes being at rest forces the acceleration to be zero too." },
            { "label": "3 m/s<sup>2</sup>", "nudge": "This is just the bare coefficient in v, not a value of a at all." }
          ],
          "correct": 0,
          "solution": "v = 3t<sup>2</sup> − 12t + 9 = 3(t−1)(t−3), zero at t = 1 s and t = 3 s, the second instant being t = 3 s. a = 6t − 12, so a(3) = 6 m/s<sup>2</sup>."
        },
        {
          "t": "mcq",
          "q": "A body falls from rest under a = g − kv, linear air drag. Under which resistive law does the body cover only a finite total distance before its speed settles?",
          "opts": [
            { "label": "linear drag, a = −kv", "nudge": null },
            { "label": "quadratic drag, a = −kv<sup>2</sup>", "nudge": "Quadratic drag actually permits unbounded travel: the distance grows without limit, only logarithmically, so the body never truly stops." },
            { "label": "both permit only finite distance", "nudge": "Only one of the two does; the other's distance integral diverges." },
            { "label": "neither permits finite distance", "nudge": "Linear drag does: the distance integral converges to u/k as t grows without bound." }
          ],
          "correct": 0,
          "solution": "Under linear drag the speed decays as an exponential, and the distance travelled converges to a finite total, u/k, as time grows without bound: the body creeps asymptotically to rest. Under quadratic drag the distance grows without bound, only logarithmically."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A particle starts with velocity 2 m/s at the origin and has acceleration a = 6t m/s<sup>2</sup>. Find its velocity and position at t = 2 s.", "a": "v = 2 + 3t<sup>2</sup>, so v(2) = 14 m/s. x = 2t + t<sup>3</sup>, so x(2) = 12 m." },
            { "q": "[NEET] A particle moves so that v = 3x (SI units). Find its acceleration at x = 2 m.", "a": "a = v dv/dx = (3x)(3) = 9x, so a(2) = 18 m/s<sup>2</sup>." },
            { "q": "[JEE Main] A particle starts from rest at x = 2 m with acceleration a = 2x m/s<sup>2</sup>. Find its speed at x = 4 m.", "a": "v<sup>2</sup>/2 = ∫ from 2 to 4 of 2x dx = 12, so v = √24 ≈ 4.90 m/s." },
            { "q": "[JEE Main] A body moving at 12 m/s decelerates with a = −3v (SI units). Find the total distance it travels before stopping.", "a": "v dv/dx = −3v gives dv/dx = −3, so v = 12 − 3x, and v = 0 at x = 4 m." },
            { "q": "[JEE Advanced] A particle of initial velocity u has acceleration a = −kv, with k a positive constant. Find its velocity as a function of time, and the total distance it covers before stopping.", "a": "v = ue<sup>−kt</sup>. From v dv/dx = −kv, dv = −k dx, so the total distance before v reaches 0 is u/k." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Using the three equations of motion when a is not constant.</b> This is the defining error of the whole topic: the moment a depends on t, v or x, those formulas are invalid, integrate from the definitions instead.",
            "<b>Mistaking dv/dx for the acceleration.</b> When v is given as a function of x, the acceleration is a = v dv/dx, never the bare dv/dx. Forgetting that factor of v is the single most common slip here.",
            "<b>Choosing the wrong pairing for a = f(v).</b> If the question mentions time, pair with dv/dt; if it mentions distance or position instead, pair with v dv/dx. Pick wrong and the resulting integral cannot be evaluated at all.",
            "<b>Dropping the constant of integration.</b> Every indefinite integral needs an initial condition, v<sub>0</sub>, x<sub>0</sub>, or a stated velocity at a stated position, to pin it down. Definite integrals with proper limits sidestep this entirely.",
            "<b>Looking for zero velocity at terminal speed.</b> Terminal speed is where the acceleration vanishes, a = 0, not where the velocity does. The body is still moving, at a constant v<sub>term</sub>, when it settles there."
          ]
        },
        {
          "t": "protip",
          "html": "open every problem with one diagnosis: does a depend on t, v, or x? then the correct relation follows immediately, t means integrate a dt, v with time in the question means dv/f(v) = dt, v or x without time means v dv = a dx. a second habit pays off constantly: v dv/dx is half of d(v²)/dx, so whenever acceleration is handed to you in terms of x, think in v², it linearises stopping-distance and speed-at-a-point problems in one stroke. and remember terminal speed is a shortcut in its own right, just set a = 0 and solve, no integration needed at all."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "always true: v = dx/dt, a = dv/dt = v dv/dx", "note": "whatever the acceleration is doing, these never fail" },
            { "f": "a = f(t): v = v<sub>0</sub> + ∫f(t) dt, then x = x<sub>0</sub> + ∫v dt", "note": "integrate straight against time" },
            { "f": "a = f(v): dv/f(v) = dt for v(t) · v dv/f(v) = dx for v(x)", "note": "pick the pairing the question actually asks for" },
            { "f": "a = f(x): v dv = f(x) dx", "note": "constant a here reduces straight back to v<sup>2</sup> = u<sup>2</sup> + 2as" },
            { "f": "terminal speed: set a = 0 and solve, no integration", "note": "for a = g − kv, v<sub>term</sub> = g/k" }
          ],
          "aids": [
            "\"diagnose the dependence, then integrate\"",
            "\"v dv/dx, never the bare dv/dx\""
          ]
        }
      ]
    }
  ]
};

export default phy11MotionStraightLine;
