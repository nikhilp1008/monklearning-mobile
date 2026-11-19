/**
 * KEY POINTS for Physics Class 12, Chapter 15 (Experimental Skills).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts (one
 * each per topic). Memory lines are a fifth, short section of their own, read
 * rather than tested: the first two of each topic.
 *
 * `topic`: unlike Chapter 14, the opening Topic 00 teaches least count, zero
 * error, error combination and graphs, so it has key points: it is 0. Topics
 * 01–04 are 1–4. This chapter has no additional topics.
 *
 * Remember: one point for every experiment (its working formula and the
 * quantity plotted or the result form), plus Topic 00's four skills; each is
 * taken from the topic's formula cards and worked results. Don't mix up,
 * Common mistakes and Exam shortcuts: from the topic's exam traps and Pro-Tip.
 * `say`: short lines that restate a rule of the text, no new fact.
 *
 * The chapter is original text (no source book), so there are no page
 * numbers: each point is headed by the part of the chapter it comes from.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Label
 * subscripts are upright (<i>v</i><sub>t</sub>, <i>c</i><sub>s</sub>,
 * <i>R</i><sub>V</sub>, <i>V</i><sub>z</sub>, <i>I</i><sub>z,max</sub>,
 * <i>δ</i><sub>m</sub>); index subscripts are not (<i>L</i><sub>1</sub>).
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 00 · Reading instruments, errors and graphs ──
  // Least count and zero error
  {
    topic: 0,
    kind: 'remember',
    q: 'A screw gauge shows a zero error <i>e</i> with the jaws closed. How is every reading corrected?',
    a: 'Corrected reading = observed reading − <i>e</i>. A positive zero error is subtracted and a negative one is added. If the reference line meets a division <i>n</i> near the top of a scale of <i>N</i> divisions, <i>e</i> = −(<i>N</i> − <i>n</i>) × LC',
    why: 'Pitch 1 mm, 100 divisions, 94th division on the line: LC = 0.01 mm, <i>e</i> = −0.06 mm, so an observed 1.52 mm becomes 1.58 mm.',
    say: 'A negative zero error is added back; a positive one is taken off.',
  },
  // Least count and zero error
  {
    topic: 0,
    kind: 'remember',
    q: 'The least count of a vernier, a screw gauge and an analogue meter?',
    a: 'Vernier: LC = 1 MSD − 1 VSD. Screw gauge: LC = pitch/(number of circular divisions). Analogue meter: LC = full-scale value/(number of divisions)',
    why: 'A 0 to 250 mA meter with 50 divisions has LC = 5 mA; a screw gauge of pitch 1 mm and 100 divisions has LC = 0.01 mm.',
    say: 'A reading is never more precise than its least count.',
  },
  // Errors and how they combine
  {
    topic: 0,
    kind: 'remember',
    q: 'For <i>Q</i> = <i>a</i><sup><i>p</i></sup><i>b</i><sup><i>q</i></sup>/<i>c</i><sup><i>r</i></sup>, how does the error in <i>Q</i> follow from those in <i>a</i>, <i>b</i> and <i>c</i>?',
    a: 'Δ<i>Q</i>/<i>Q</i> = <i>p</i> Δ<i>a</i>/<i>a</i> + <i>q</i> Δ<i>b</i>/<i>b</i> + <i>r</i> Δ<i>c</i>/<i>c</i>, every term taken positive, so a quotient’s errors add too. For a sum or a difference the absolute errors add: Δ(<i>a</i> ± <i>b</i>) = Δ<i>a</i> + Δ<i>b</i>',
    why: 'Steel cylinder, <i>ρ</i> = 4<i>m</i>/(π<i>d</i><sup>2</sup><i>L</i>): the terms are 0.185 %, 2 × 0.833 % for the diameter and 0.167 %, total 2.0 %, so the diameter supplies more than four-fifths of it.',
    say: null,
  },
  // Graphs
  {
    topic: 0,
    kind: 'remember',
    q: 'How is the slope of a straight-line graph taken, and what is plotted so that the unknown becomes a slope: <i>V</i>–<i>I</i>, <i>T</i><sup>2</sup>–<i>L</i>, 1/<i>v</i>–1/<i>u</i>?',
    a: 'Take two points far apart on the best-fit line, not data points: slope = Δ<i>y</i>/Δ<i>x</i>, with units. <i>V</i> against <i>I</i> has slope <i>R</i>; <i>T</i><sup>2</sup> against <i>L</i> has slope 4π<sup>2</sup>/<i>g</i>; 1/<i>v</i> against 1/<i>u</i> has slope 1 and intercept 1/<i>f</i>',
    why: 'A zero error shifts the line but keeps its slope: a voltmeter reading 0.05 V too high gives <i>V</i> = <i>IR</i> + 0.05 V, still of slope <i>R</i>.',
    say: null,
  },
  // Errors and how they combine
  {
    topic: 0,
    kind: 'mixup',
    q: 'Systematic error, random error and least-count error: how do they differ, and what removes each?',
    a: 'A systematic error pushes every reading the same way (a zero error, a mis-calibrated scale): repeating does not remove it, so find it and correct for it. A random error scatters the readings both ways (reaction time, parallax): repeating and averaging reduces it. The least-count error is the limit set by the scale itself',
    why: 'A very fine scale with an uncorrected zero error is precise but wrong.',
    say: null,
  },
  // Exam traps and habits
  {
    topic: 0,
    kind: 'mistake',
    q: 'One oscillation of a pendulum is timed by hand, with a reaction time of about 0.2 s. Why is that a poor measurement?',
    a: 'Reaction time is a fixed error in the total time, and it is large against one period. Time 20 or more oscillations: <i>T</i> = <i>t</i>/<i>N</i>, so Δ<i>T</i> = Δ<i>t</i>/<i>N</i> and dividing by the number of oscillations shrinks it',
    why: 'With Δ<i>t</i> = 0.2 s, <i>N</i> = 10 gives Δ<i>T</i> = 0.02 s and <i>N</i> = 40 gives 0.005 s, a quarter as large.',
    say: null,
  },
  // Exam traps and habits (Pro-Tip)
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Finding a null or resonance position (metre bridge, resonance tube). What habit cuts the error?',
    a: 'Approach the position from both sides and take the mean. Quote the result to no more digits than the least count and the scatter support',
    why: null,
    say: null,
  },

  // ── Topic 01 · Mechanics, properties of matter, heat and sound ──
  // Pendulum energy loss
  {
    topic: 1,
    kind: 'remember',
    q: 'Pendulum energy loss: what is plotted, and what is the slope of the straight line?',
    a: '<i>E</i> ∝ <i>A</i><sup>2</sup> and <i>A</i><sup>2</sup> = <i>A</i><sub>0</sub><sup>2</sup> e<sup>−<i>bt</i>/<i>m</i></sup>, so ln <i>A</i><sup>2</sup> against <i>t</i> is a straight line of slope −<i>b</i>/<i>m</i>. <i>A</i><sup>2</sup> against <i>t</i> is a falling curve that never reaches zero',
    why: 'The amplitude falls from 10.0 cm to 2.9 cm in 500 s: <i>b</i>/<i>m</i> = 4.95 × 10<sup>−3</sup> s<sup>−1</sup>, and the energy halves in about 140 s.',
    say: 'Energy goes as <i>A</i><sup>2</sup>, and only the logarithm gives a straight line.',
  },
  // Metre scale, mass by moments
  {
    topic: 1,
    kind: 'remember',
    q: 'Mass by moments on a metre scale: the working formula, and the graph?',
    a: '<i>m</i> = <i>Ma</i>/<i>b</i>, with <i>a</i> and <i>b</i> measured from the knife edge, which sits at the centre of gravity G of the scale. <i>g</i> cancels. A graph of <i>b</i> against <i>a</i> is a straight line through the origin of slope <i>M</i>/<i>m</i>',
    why: '<i>M</i> = 50.0 g, <i>a</i> = 30.0 cm, <i>b</i> = 20.8 cm give <i>m</i> = 72.1 g; the mean of four trials is 72.0 g.',
    say: 'Distances are from the knife edge, and <i>g</i> cancels.',
  },
  // Young's modulus by Searle's method
  {
    topic: 1,
    kind: 'remember',
    q: 'Young’s modulus by Searle’s method: the formula, its error rule, and what is plotted?',
    a: '<i>Y</i> = 4<i>mgL</i>/(π<i>d</i><sup>2</sup><i>ℓ</i>) and Δ<i>Y</i>/<i>Y</i> = Δ<i>m</i>/<i>m</i> + Δ<i>L</i>/<i>L</i> + 2Δ<i>d</i>/<i>d</i> + Δ<i>ℓ</i>/<i>ℓ</i>. Load against extension is a straight line through the origin with slope <i>m</i>/<i>ℓ</i>',
    why: 'Extension 0.395 mm per kg, <i>d</i> = 0.50 mm, <i>L</i> = 150.0 cm: <i>Y</i> = (1.90 ± 0.10) × 10<sup>11</sup> N m<sup>−2</sup>, the diameter supplying 4.0 % of the 5.4 % error.',
    say: null,
  },
  // Surface tension by capillary rise
  {
    topic: 1,
    kind: 'remember',
    q: 'Surface tension by capillary rise: the working formula, and where does the <i>r</i>/3 come from?',
    a: '<i>T</i> = <i>r</i>(<i>h</i> + <i>r</i>/3)<i>ρg</i>/(2 cos <i>θ</i>), with <i>h</i> read to the lowest point of the meniscus. For <i>θ</i> = 0 the meniscus is a hemisphere, and the liquid above its lowest point is a cylinder of extra height <i>r</i>/3. Water on clean glass has cos <i>θ</i> = 1',
    why: 'Bore 0.70 mm: <i>h</i> = 4.130 cm gives <i>T</i> = 0.0710 N m<sup>−1</sup> for water, and <i>h</i> = 2.040 cm gives 0.0352 N m<sup>−1</sup> with detergent, about half.',
    say: null,
  },
  // Viscosity by terminal velocity
  {
    topic: 1,
    kind: 'remember',
    q: 'Viscosity by terminal velocity: the formula, and what are <i>ρ</i> and <i>σ</i>?',
    a: '<i>η</i> = 2<i>r</i><sup>2</sup>(<i>ρ</i> − <i>σ</i>)<i>g</i>/(9<i>v</i><sub>t</sub>), from weight = buoyancy + 6π<i>ηrv</i><sub>t</sub>. <i>ρ</i> is the density of the sphere and <i>σ</i> that of the liquid',
    why: 'A steel ball of <i>r</i> = 1.00 mm in glycerine with <i>v</i><sub>t</sub> = 1.495 × 10<sup>−2</sup> m s<sup>−1</sup>: <i>η</i> = 0.953 Pa s, with Reynolds number 0.040.',
    say: null,
  },
  // Speed of sound by resonance tube
  {
    topic: 1,
    kind: 'remember',
    q: 'Resonance tube: how do <i>λ</i>, <i>v</i> and the end correction follow from <i>L</i><sub>1</sub> and <i>L</i><sub>2</sub>?',
    a: '<i>L</i><sub>1</sub> + <i>e</i> = <i>λ</i>/4 and <i>L</i><sub>2</sub> + <i>e</i> = 3<i>λ</i>/4, so <i>λ</i> = 2(<i>L</i><sub>2</sub> − <i>L</i><sub>1</sub>), <i>v</i> = <i>fλ</i> = 2<i>f</i>(<i>L</i><sub>2</sub> − <i>L</i><sub>1</sub>) and <i>e</i> = (<i>L</i><sub>2</sub> − 3<i>L</i><sub>1</sub>)/2. The end correction cancels in the difference',
    why: '512 Hz with <i>L</i><sub>1</sub> = 15.6 cm and <i>L</i><sub>2</sub> = 49.1 cm: <i>λ</i> = 67.0 cm, <i>v</i> = 343.0 m s<sup>−1</sup> at 20 °C, <i>e</i> = 1.15 cm.',
    say: null,
  },
  // Specific heat by mixtures
  {
    topic: 1,
    kind: 'remember',
    q: 'Specific heat by mixtures: the formula for a solid and for a liquid?',
    a: '<i>c</i><sub>s</sub> = (<i>m</i><sub>c</sub><i>c</i><sub>c</sub> + <i>m</i><sub>w</sub><i>c</i><sub>w</sub>)(<i>T</i> − <i>T</i><sub>2</sub>)/(<i>m</i><sub>s</sub>(<i>T</i><sub>1</sub> − <i>T</i>)) for the solid, and <i>c</i><sub>ℓ</sub> = [<i>m</i><sub>s</sub><i>c</i><sub>s</sub>(<i>T</i><sub>1</sub> − <i>T</i>)/(<i>T</i> − <i>T</i><sub>2</sub>) − <i>m</i><sub>c</sub><i>c</i><sub>c</sub>]/<i>m</i><sub>ℓ</sub> for a liquid',
    why: 'A solid of 120.0 g at 99.0 °C into 150.0 g of water at 27.0 °C, final 37.2 °C, with a 60.0 g copper calorimeter: <i>c</i><sub>s</sub> = 895 J kg<sup>−1</sup> K<sup>−1</sup>.',
    say: null,
  },
  // Young's modulus by Searle's method: exam traps
  {
    topic: 1,
    kind: 'mixup',
    q: 'In Searle’s apparatus, what is the reference wire for, and where are the extension and the length read?',
    a: 'The reference wire is not a second sample under test: it cancels temperature changes and sag of the support, which lengthen both wires alike. The extension is read on the micrometer screw and the length <i>L</i> on the metre scale',
    why: 'Load against extension is straight up to the elastic limit, then it bends and the extension grows faster.',
    say: null,
  },
  // Specific heat by mixtures: exam traps
  {
    topic: 1,
    kind: 'mistake',
    q: 'In specific heat by mixtures, heat leaks to the surroundings and lowers <i>T</i>. What happens to <i>c</i><sub>s</sub> of the solid and to <i>c</i><sub>ℓ</sub> of the liquid?',
    a: 'The specific heat of the solid comes out too small and that of the liquid too large. Leaving out the calorimeter’s <i>m</i><sub>c</sub><i>c</i><sub>c</sub> also makes the answer for the solid too small',
    why: 'Both differences are positive, <i>T</i><sub>1</sub> − <i>T</i> and <i>T</i> − <i>T</i><sub>2</sub>, and <i>T</i> lies between <i>T</i><sub>2</sub> and <i>T</i><sub>1</sub>.',
    say: null,
  },
  // Capillary rise, viscosity and Searle: exam traps
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A question changes the tube, the sphere or the wire and asks for the new rise, speed or extension. The fast way?',
    a: 'Do not recompute: write the proportionality. Capillary rise <i>h</i> ∝ <i>T</i> cos <i>θ</i>/(<i>rρg</i>), so halving both <i>r</i> and <i>T</i> leaves it unchanged. Terminal speed <i>v</i><sub>t</sub> ∝ <i>r</i><sup>2</sup>, so doubling the radius multiplies it by 4',
    why: 'Searle’s wire under the same load: doubling the diameter divides the extension by 4, and doubling the length doubles it.',
    say: null,
  },

  // ── Topic 02 · Current electricity ──
  // Metre bridge
  {
    topic: 2,
    kind: 'remember',
    q: 'Metre bridge: the formula for <i>X</i> and for <i>ρ</i>, and from which end is <i>l</i> measured?',
    a: '<i>X</i> = <i>R</i>(100 − <i>l</i>)/<i>l</i>, with <i>l</i> measured in cm from the end next to <i>R</i>, and <i>ρ</i> = π<i>Xd</i><sup>2</sup>/(4<i>L</i>)',
    why: '<i>R</i> = 3.0 Ω with <i>l</i> = 42.6 cm gives <i>X</i> = 4.04 Ω. With <i>d</i> = 0.305 mm, <i>L</i> = 60.0 cm and <i>X</i> = 4.05 Ω: <i>ρ</i> = (4.9 ± 0.4) × 10<sup>−7</sup> Ω m.',
    say: '<i>l</i> is measured from the end next to <i>R</i>, so (100 − <i>l</i>) goes on top.',
  },
  // Resistance by Ohm's law
  {
    topic: 2,
    kind: 'remember',
    q: 'Resistance by Ohm’s law: what is the slope, and what do real meters do to <i>V</i>/<i>I</i>?',
    a: '<i>R</i> = <i>V</i>/<i>I</i> = slope of the <i>V</i>–<i>I</i> graph. Voltmeter across the wire alone: <i>V</i>/<i>I</i> = <i>RR</i><sub>V</sub>/(<i>R</i> + <i>R</i><sub>V</sub>), too low. Voltmeter across the wire and the ammeter: <i>V</i>/<i>I</i> = <i>R</i> + <i>R</i><sub>A</sub>, too high',
    why: 'Mean <i>V</i>/<i>I</i> = 5.08 Ω; with <i>R</i><sub>V</sub> = 2000 Ω the corrected <i>R</i> = 5.09 Ω, a 0.25 % correction; result 5.1 ± 0.2 Ω.',
    say: 'A real voltmeter in parallel reads too low; a real ammeter in series reads too high.',
  },
  // Galvanometer resistance and figure of merit
  {
    topic: 2,
    kind: 'remember',
    q: 'Half-deflection method: the formulas for <i>G</i> and <i>k</i>, and when is <i>G</i> ≈ <i>S</i>?',
    a: '<i>G</i> = <i>RS</i>/(<i>R</i> − <i>S</i>), where <i>S</i> is the shunt that halves the deflection with <i>R</i> unchanged, and <i>k</i> = <i>E</i>/[(<i>R</i> + <i>G</i>)<i>θ</i>] in A per division. <i>G</i> ≈ <i>S</i> only for <i>R</i> ≫ <i>S</i>, and <i>G</i> is always a little larger than <i>S</i>',
    why: '<i>R</i> = 40 000 Ω, <i>S</i> = 120 Ω, <i>θ</i> = 20 divisions, <i>E</i> = 2.0 V: <i>G</i> = 120.36 Ω and <i>k</i> = 2.49 × 10<sup>−6</sup> A per division, so <i>G</i> ≈ <i>S</i> is low by 0.3 %.',
    say: null,
  },
  // Galvanometer: exam traps
  {
    topic: 2,
    kind: 'mixup',
    q: 'Figure of merit and current sensitivity: which is which, and which galvanometer is the more sensitive?',
    a: 'The figure of merit <i>k</i> is the current per division, in A per division. Current sensitivity is its reciprocal, divisions per ampere. A larger <i>k</i> means a less sensitive galvanometer. The potential difference per division is <i>kG</i>',
    why: 'The half-deflection method finds <i>G</i>, the resistance of the galvanometer, not that of the shunt.',
    say: null,
  },
  // Ohm's law: exam traps
  {
    topic: 2,
    kind: 'mistake',
    q: 'Is the <i>V</i>–<i>I</i> graph of a filament lamp a straight line, and if <i>I</i> is plotted against <i>V</i> is the slope <i>R</i>?',
    a: 'No to both. The lamp heats and its resistance rises, so on <i>V</i> against <i>I</i> the slope increases with current and the graph is a curve. Plotting <i>I</i> against <i>V</i> gives a slope of 1/<i>R</i>',
    why: 'The percentage error in <i>R</i> is the sum of the percentage errors of <i>V</i> and <i>I</i>.',
    say: null,
  },
  // Metre bridge: result, precautions and errors
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Where should the null point fall on the metre bridge, and how do you get it there?',
    a: 'Near 50 cm: Δ<i>X</i>/<i>X</i> = 100Δ<i>l</i>/[<i>l</i>(100 − <i>l</i>)] is least where <i>l</i>(100 − <i>l</i>) is greatest, <i>l</i> = 50 cm. Take out a plug from the box so that <i>R</i> is close to the expected <i>X</i>',
    why: 'At <i>l</i> = 50 cm and Δ<i>l</i> = 0.1 cm the error is 0.4 %; the diameter, entering squared, still gave 6.6 % of the 7.1 % in the worked example.',
    say: null,
  },

  // ── Topic 03 · Optics ──
  // Parallax method
  {
    topic: 3,
    kind: 'remember',
    q: 'Focal length by parallax: the working formula, the graph, and how is a convex mirror done?',
    a: '|<i>f</i>| = |<i>u</i>||<i>v</i>|/(|<i>u</i>| + |<i>v</i>|) for a concave mirror or convex lens. 1/|<i>v</i>| against 1/|<i>u</i>| is a straight line of slope −1 cutting each axis at 1/|<i>f</i>|. For a convex mirror, with an auxiliary convex lens, <i>f</i> = <i>R</i>/2, where <i>R</i> is the pole-to-I distance when the mirror’s image coincides with the object',
    why: 'Convex mirror: pole at 57.3 cm and the real image I at 81.7 cm give <i>R</i> = 24.4 cm, so <i>f</i> = +12.2 cm.',
    say: 'Parallax finds where the image is; <i>f</i> then comes from the formula.',
  },
  // Prism
  {
    topic: 3,
    kind: 'remember',
    q: 'Prism: the formula for <i>n</i>, and the shape of the <i>δ</i>–<i>i</i> graph?',
    a: '<i>δ</i> = <i>i</i> + <i>e</i> − <i>A</i> and <i>n</i> = sin[(<i>A</i> + <i>δ</i><sub>m</sub>)/2]/sin(<i>A</i>/2). <i>δ</i> against <i>i</i> falls to one minimum <i>δ</i><sub>m</sub> at <i>i</i> = <i>e</i> and then rises, not symmetric about the minimum, steeper on the small-<i>i</i> side. At minimum <i>r</i><sub>1</sub> = <i>r</i><sub>2</sub> = <i>A</i>/2',
    why: '<i>A</i> = 60.0° and <i>δ</i><sub>m</sub> = 39.0° give <i>i</i> = 49.5° and <i>n</i> = 1.52 ± 0.01.',
    say: 'At minimum deviation <i>i</i> = <i>e</i> and <i>r</i><sub>1</sub> = <i>r</i><sub>2</sub> = <i>A</i>/2.',
  },
  // Slab and microscope
  {
    topic: 3,
    kind: 'remember',
    q: 'Slab and travelling microscope: how do the three readings give <i>t</i>, <i>t</i>′ and <i>n</i>?',
    a: '<i>R</i><sub>1</sub> is the cross with no slab, <i>R</i><sub>2</sub> the cross seen through the slab, <i>R</i><sub>3</sub> the top face. <i>t</i> = <i>R</i><sub>3</sub> − <i>R</i><sub>1</sub>, <i>t</i>′ = <i>R</i><sub>3</sub> − <i>R</i><sub>2</sub>, and <i>n</i> = <i>t</i>/<i>t</i>′ = (<i>R</i><sub>3</sub> − <i>R</i><sub>1</sub>)/(<i>R</i><sub>3</sub> − <i>R</i><sub>2</sub>), valid for near-normal viewing',
    why: '4.236, 5.092 and 6.738 cm give <i>t</i> = 2.502 cm, <i>t</i>′ = 1.646 cm and <i>n</i> = 1.520 ± 0.006.',
    say: null,
  },
  // Parallax method: exam traps
  {
    topic: 3,
    kind: 'mixup',
    q: 'In the new Cartesian convention, what are the signs of <i>f</i> for a concave mirror, a convex mirror and a convex lens?',
    a: 'Concave mirror: <i>f</i> negative. Convex mirror: <i>f</i> positive. Convex lens: <i>f</i> positive. A real object has <i>u</i> < 0, and the experiment’s distances are magnitudes',
    why: 'A convex mirror never forms a real image of a real object, so an auxiliary convex lens is used.',
    say: null,
  },
  // Parallax method: exam traps
  {
    topic: 3,
    kind: 'mistake',
    q: 'The observed object distance is too small by the index error. How is it corrected, and is the correction applied to <i>f</i>?',
    a: 'The correction is true minus observed, and it is added to the observed distance. It is not applied to <i>f</i>. The object pin and the image pin each have their own correction, found with a knitting needle',
    why: 'A needle of true length 20.0 cm reads 19.6 cm: +0.4 cm, so an observed 24.6 cm becomes 25.0 cm.',
    say: null,
  },
  // Parallax method: exam traps
  {
    topic: 3,
    kind: 'shortcut',
    q: 'In the parallax experiment the image pin sits exactly at the object pin. What do you read off at once?',
    a: '<i>u</i> = <i>v</i> = 2|<i>f</i>|: both are at the centre of curvature of a mirror (or at 2<i>f</i> of a lens), so <i>f</i> is half that distance',
    why: 'Concave mirror with <i>u</i> ≈ <i>v</i> ≈ 30 cm: <i>R</i> = 30 cm. Convex lens with <i>u</i> = 40.0 cm and <i>v</i> = 40.1 cm: <i>f</i> = 20.0 cm.',
    say: null,
  },

  // ── Topic 04 · Semiconductors and components ──
  // p-n junction diode
  {
    topic: 4,
    kind: 'remember',
    q: 'p-n diode characteristics: static and dynamic resistance, and how does the dynamic resistance change?',
    a: 'Static <i>R</i> = <i>V</i>/<i>I</i> at a point; dynamic <i>r</i> = Δ<i>V</i>/Δ<i>I</i>, the reciprocal of the slope. In forward bias <i>r</i> = <i>ηV</i><sub>T</sub>/<i>I</i>, which falls as the current rises. The barrier is about 0.7 V for silicon and 0.3 V for germanium',
    why: 'At 0.70 V and 10 mA, <i>R</i> = 70 Ω but <i>r</i> ≈ 3.6 Ω (0.70 to 0.72 V); between 0.60 V and 0.65 V, <i>r</i> ≈ 23 Ω.',
    say: 'Static is <i>V</i>/<i>I</i> at a point; dynamic is the reciprocal of the slope.',
  },
  // Zener diode
  {
    topic: 4,
    kind: 'remember',
    q: 'Zener diode and regulator: what happens at <i>V</i><sub>z</sub>, and what are <i>r</i><sub>z</sub> and the currents?',
    a: 'In reverse bias the current is negligible until <i>V</i><sub>z</sub>, then rises sharply with almost constant voltage: <i>r</i><sub>z</sub> = Δ<i>V</i>/Δ<i>I</i> in breakdown and <i>I</i><sub>z,max</sub> = <i>P</i><sub>max</sub>/<i>V</i><sub>z</sub>. Regulator: <i>I</i><sub>s</sub> = (<i>V</i><sub>in</sub> − <i>V</i><sub>z</sub>)/<i>R</i><sub>s</sub> and <i>I</i><sub>z</sub> = <i>I</i><sub>s</sub> − <i>I</i><sub>L</sub>',
    why: '12 V supply, 5.1 V Zener, <i>R</i><sub>s</sub> = 150 Ω, <i>R</i><sub>L</sub> = 510 Ω: <i>I</i><sub>s</sub> = 46 mA, <i>I</i><sub>L</sub> = 10 mA, <i>I</i><sub>z</sub> = 36 mA.',
    say: 'A Zener works in reverse bias, with its cathode to the positive terminal.',
  },
  // Identifying a diode, LED, resistor and capacitor
  {
    topic: 4,
    kind: 'remember',
    q: 'Telling a resistor, diode, LED and capacitor apart: what does each show with the leads swapped, and the colour-code and LED-resistor formulas?',
    a: 'Resistor: the same steady value both ways, <i>R</i> = (10<i>a</i> + <i>b</i>) × 10<sup><i>m</i></sup> Ω. Diode: low one way, off-scale the other; an LED is like a diode with a higher forward voltage and a glow. Capacitor: the pointer swings and returns, repeating after discharging, <i>τ</i> = <i>RC</i>. LED resistor: <i>R</i> = (<i>V</i><sub>s</sub> − <i>V</i><sub>f</sub>)/<i>I</i>',
    why: 'Yellow, violet, red, gold is 47 × 10<sup>2</sup> Ω = 4.7 kΩ ± 5 %. A 2.0 V LED at 20 mA from 9.0 V needs 350 Ω, so use 390 Ω.',
    say: null,
  },
  // Identifying the components: exam traps
  {
    topic: 4,
    kind: 'mixup',
    q: 'Which meter lead is positive on an analogue ohm range, and which on a digital diode-test range?',
    a: 'Analogue ohm range: the black lead is positive. Digital diode-test range: the red lead is positive. Do not carry the analogue rule over to a digital meter',
    why: 'Check the leads with a known diode before using them to mark an unknown diode’s anode and cathode.',
    say: null,
  },
  // Zener diode: exam traps
  {
    topic: 4,
    kind: 'mistake',
    q: 'Is Zener breakdown damage, what limits the current, and what happens when the supply is below <i>V</i><sub>z</sub>?',
    a: 'Breakdown is not damage: it is reversible while the power stays within the rating, and the series resistor, not the diode, limits the current. Below <i>V</i><sub>z</sub> there is no regulation: the diode is off',
    why: 'In forward bias a Zener diode is an ordinary diode, with about 0.7 V across it.',
    say: null,
  },
  // p-n junction diode: worked results
  {
    topic: 4,
    kind: 'shortcut',
    q: 'A forward-biased diode in series with a resistor on a battery. The fast way to the current?',
    a: 'Treat the diode as a fixed drop in series with the resistor: <i>I</i> = (<i>V</i> − <i>V</i><sub>d</sub>)/<i>R</i>, with <i>V</i><sub>d</sub> about 0.7 V for silicon and 0.3 V for germanium',
    why: '5.0 V and 430 Ω: silicon 4.3/430 = 10.0 mA, germanium 4.7/430 = 10.9 mA.',
    say: null,
  },
];
