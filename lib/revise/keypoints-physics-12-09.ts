/**
 * KEY POINTS for Physics Class 12, Chapter 9 (Ray Optics and Optical Instruments).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–06 are 0–5; Additional topics A–F are 6–11.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key formulas and Cheat sheet. Common mistakes: its
 * Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's memory aids, word for word (quotation marks dropped). Additional
 * topics: the Supplement's addenda.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Distances
 * follow the book's New Cartesian convention (real object u < 0; concave
 * mirror f, R < 0; convex lens f > 0). The critical angle is C, as printed.
 * Label subscripts are upright (<i>m</i><sub>L</sub>, <i>n</i><sub>v</sub>,
 * <i>n</i><sub>r</sub>, <i>n</i><sub>y</sub>, <i>δ</i><sub>m</sub>,
 * <i>f</i><sub>o</sub>, <i>f</i><sub>e</sub>, <i>P</i><sub>eq</sub>,
 * <i>θ</i><sub>min</sub>); digit subscripts are upright. Power is in dioptres,
 * the unit D upright; <i>D</i> = 25 cm is the least distance of distinct
 * vision. π is upright.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Reflection and Spherical Mirrors ──
  // pp. 558–559, 561, 563, 565–566
  {
    topic: 0,
    kind: 'remember',
    q: 'The mirror formula, and the signs of <i>f</i> and <i>R</i> for concave and convex mirrors in the New Cartesian convention?',
    a: '1/<i>v</i> + 1/<i>u</i> = 1/<i>f</i>, with <i>f</i> = <i>R</i>/2 (paraxial) and every distance measured from the pole, positive along the incident light. Concave: <i>f</i>, <i>R</i> < 0. Convex: <i>f</i>, <i>R</i> > 0. A real object has <i>u</i> < 0',
    why: 'A concave mirror of radius 30 cm with an object 25 cm in front: <i>f</i> = −15 cm, <i>u</i> = −25 cm give <i>v</i> = −37.5 cm and <i>m</i> = −1.5, a real, inverted image magnified 1.5×.',
    say: 'Real is negative — real objects and real images sit in front of the mirror, where distances are negative.',
  },
  // pp. 558, 565
  {
    topic: 0,
    kind: 'remember',
    q: 'The lateral, longitudinal and areal magnifications of a spherical mirror?',
    a: 'Lateral <i>m</i> = <i>h</i>′/<i>h</i> = −<i>v</i>/<i>u</i> = <i>f</i>/(<i>f</i> − <i>u</i>) = (<i>f</i> − <i>v</i>)/<i>f</i>; longitudinal <i>m</i><sub>L</sub> = −(<i>v</i>/<i>u</i>)<sup>2</sup> = −<i>m</i><sup>2</sup>, for a small object along the axis; areal <i>m</i><sub>A</sub> = <i>m</i><sup>2</sup>',
    why: 'Positive <i>m</i>: erect, virtual image; negative <i>m</i>: inverted, real. |<i>m</i>| > 1 is enlarged, |<i>m</i>| < 1 diminished.',
    say: null,
  },
  // pp. 557, 559, 564–566
  {
    topic: 0,
    kind: 'mixup',
    q: 'For a real object, when does a concave mirror give a real image, and what does a convex mirror give?',
    a: 'A concave mirror gives a real, inverted image only when the object is beyond <i>F</i>; inside <i>F</i> the image is virtual, erect and magnified. A convex mirror always gives a virtual, erect, diminished image between the pole and <i>F</i>',
    why: 'An object at <i>C</i> of a concave mirror images back at <i>C</i>, real, inverted, same size. A mirror’s <i>f</i> = <i>R</i>/2 depends only on geometry: it is the same in water and shows no chromatic aberration.',
    say: 'Concave caves in, convex bulges out (match to the steel-spoon test).',
  },
  // pp. 563–565
  {
    topic: 0,
    kind: 'mistake',
    q: 'An object near a curved mirror moves both along the axis and across it. Does one magnification scale the whole image velocity?',
    a: 'No: the axial part scales by <i>m</i><sup>2</sup> (longitudinal magnification) and the transverse part by |<i>m</i>|, never the same factor. Split the velocity, scale each part, then recombine',
    why: 'Object 15 cm from a concave mirror of focal length 10 cm (<i>m</i> = −2), moving at 3 cm s<sup>−1</sup> along the axis and 4 cm s<sup>−1</sup> across it: image parts 12 and 8 cm s<sup>−1</sup>, so |<i>v</i><sub>img</sub>| = √208 ≈ 14.4 cm s<sup>−1</sup>.',
    say: null,
  },
  // pp. 563, 565
  {
    topic: 0,
    kind: 'shortcut',
    q: 'A mirror question gives the magnification and asks where the object is. The fast way?',
    a: 'Skip solving for <i>v</i>: use <i>m</i> = <i>f</i>/(<i>f</i> − <i>u</i>) directly, with the sign of <i>m</i> fixed first by a nature check (a convex mirror’s image of a real object is always erect, 0 < <i>m</i> < 1)',
    why: 'A convex mirror of focal length 20 cm forms an erect image one-third the size: <i>m</i> = +1/3 gives 20 − <i>u</i> = 60, so <i>u</i> = −40 cm, 40 cm in front.',
    say: 'PUF–VUF: jot Positions, then U, F, then solve for V — signs first, algebra second.',
  },

  // ── Topic 02 · Refraction and Total Internal Reflection ──
  // pp. 567–568, 573, 575–576
  {
    topic: 1,
    kind: 'remember',
    q: 'Snell’s law, the refractive index, and what changes when light enters a denser medium?',
    a: '<i>n</i><sub>1</sub> sin <i>i</i> = <i>n</i><sub>2</sub> sin <i>r</i>, angles from the normal; <i>n</i> = <i>c</i>/<i>v</i> and <i>n</i><sub>21</sub> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> = <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub>. The frequency is fixed; the speed falls and the wavelength shrinks, <i>λ</i> = <i>λ</i><sub>0</sub>/<i>n</i>, and the ray bends toward the normal',
    why: 'In glass of <i>n</i> = 1.5, light of vacuum wavelength 600 nm travels at 2 × 10<sup>8</sup> m s<sup>−1</sup> with <i>λ</i> = 400 nm. Colour is set by frequency, so a red laser stays red underwater.',
    say: 'Slower → bends toward — entering a denser (slower) medium, the ray bends toward the normal.',
  },
  // pp. 568, 570, 576
  {
    topic: 1,
    kind: 'remember',
    q: 'The critical angle, and the two conditions for total internal reflection?',
    a: 'sin <i>C</i> = <i>n</i><sub>rarer</sub>/<i>n</i><sub>denser</sub>, which is 1/<i>n</i> when the rarer medium is air. TIR needs light travelling from denser to rarer, and an angle of incidence <i>i</i> > <i>C</i>',
    why: 'Water (<i>n</i> = 1.33): <i>C</i> ≈ 48.6°; ordinary glass: <i>C</i> ≈ 42°; diamond (<i>n</i> = 2.42): <i>C</i> ≈ 24°. TIR reflects 100% of the light, which is why binoculars use prisms.',
    say: 'Denser to rarer, and over the critical — both boxes must be ticked for TIR.',
  },
  // pp. 568, 570, 572–573, 576
  {
    topic: 1,
    kind: 'mixup',
    q: 'Apparent depth, normal shift and lateral shift: which is which?',
    a: 'Apparent depth = real depth/<i>n</i> (near-normal viewing); a slab of thickness <i>t</i> lifts what lies beneath it by the normal shift Δ = <i>t</i>(1 − 1/<i>n</i>); a ray crossing a parallel slab emerges parallel but displaced sideways by the lateral shift <i>d</i> = <i>t</i> sin(<i>i</i> − <i>r</i>)/cos <i>r</i>',
    why: 'A coin 24 cm deep in water (<i>n</i> = 4/3) appears 18 cm deep, raised 6 cm. A ray at 60° on a slab of index √3 and thickness 9 cm refracts at 30° and shifts 3√3 ≈ 5.20 cm sideways.',
    say: null,
  },
  // pp. 575–576
  {
    topic: 1,
    kind: 'mistake',
    q: 'The critical angle of a medium with respect to air is 30°. Is its refractive index sin 30° = 0.5?',
    a: 'No: the formula is sin <i>C</i> = 1/<i>n</i>, not <i>n</i> = sin <i>C</i>, so <i>n</i> = 1/sin 30° = 2. If you ever get <i>n</i> < 1 for a real material, you have flipped it',
    why: 'An index below 1 should look impossible for a denser medium. A smaller critical angle means a larger <i>n</i>: diamond’s 24° goes with <i>n</i> = 2.42.',
    say: null,
  },
  // pp. 572, 576
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A ray inside a glass block meets the glass–air face at 45°. Which glasses give total internal reflection, fast?',
    a: 'TIR at 45° needs sin 45° > 1/<i>n</i>, i.e. <i>n</i> > √2 ≈ 1.414: compare <i>n</i> with √2 instead of computing a critical angle for each option',
    why: 'Of <i>n</i> = 1.30, 1.40 and 1.50, only 1.50 clears the bar. This is the condition for the standard 45° totally-reflecting prism.',
    say: null,
  },

  // ── Topic 03 · Refraction at Spherical Surfaces and the Lens-Maker’s Formula ──
  // pp. 577–578, 580–581, 583
  {
    topic: 2,
    kind: 'remember',
    q: 'Refraction at a single spherical surface from medium <i>n</i><sub>1</sub> into <i>n</i><sub>2</sub>: the relation and the magnification?',
    a: '<i>n</i><sub>2</sub>/<i>v</i> − <i>n</i><sub>1</sub>/<i>u</i> = (<i>n</i><sub>2</sub> − <i>n</i><sub>1</sub>)/<i>R</i>, all from the pole, with <i>m</i> = <i>n</i><sub>1</sub><i>v</i>/(<i>n</i><sub>2</sub><i>u</i>). A flat surface has <i>R</i> = ∞, which gives back the apparent-depth result',
    why: 'A glass rod (<i>n</i> = 1.5) with a convex end of radius 10 cm, object 50 cm away in air: 1.5/<i>v</i> = 0.05 − 0.02, so <i>v</i> = +50 cm, a real image 50 cm inside the rod.',
    say: 'A flat surface is just <i>R</i> = ∞ — curvature is what focuses.',
  },
  // pp. 577–578, 581, 583
  {
    topic: 2,
    kind: 'remember',
    q: 'The lens-maker’s formula in air and in a medium, and the signs of the radii?',
    a: 'In air 1/<i>f</i> = (<i>n</i> − 1)(1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub>); for a lens of index <i>n</i><sub>2</sub> in a medium <i>n</i><sub>1</sub>, (<i>n</i> − 1) becomes (<i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> − 1). <i>R</i> > 0 when the centre of curvature is on the outgoing side: biconvex <i>R</i><sub>1</sub> > 0, <i>R</i><sub>2</sub> < 0',
    why: '<i>R</i><sub>1</sub> is the first surface the light meets. A biconvex lens with both radii 20 cm and <i>n</i> = 1.5: 1/<i>f</i> = 0.5 × (1/20 + 1/20), so <i>f</i> = 20 cm.',
    say: '(<i>n</i> − 1) hides the medium — it is really <i>n</i><sub>lens</sub>/<i>n</i><sub>medium</sub> − 1.',
  },
  // pp. 582–583
  {
    topic: 2,
    kind: 'mixup',
    q: 'Single-surface and lens formulas against the mirror formula: which sign joins the two terms?',
    a: 'Refraction relations subtract: <i>n</i><sub>2</sub>/<i>v</i> − <i>n</i><sub>1</sub>/<i>u</i> and 1/<i>v</i> − 1/<i>u</i>. The mirror formula adds: 1/<i>v</i> + 1/<i>u</i> = 1/<i>f</i>. Keep the two structures distinct',
    why: 'At a single surface <i>n</i><sub>1</sub> is the medium the light starts in and <i>n</i><sub>2</sub> the one it enters: the image-side index goes with <i>v</i>.',
    say: 'Refraction subtracts, reflection adds — single-surface and lens formulas use a minus sign; the mirror formula uses a plus.',
  },
  // pp. 581, 583
  {
    topic: 2,
    kind: 'mistake',
    q: 'A biconvex lens has both faces of radius 20 cm. Do you put <i>R</i><sub>1</sub> = <i>R</i><sub>2</sub> = +20 cm in the lens-maker’s formula?',
    a: 'No: <i>R</i><sub>1</sub> = +20 cm but <i>R</i><sub>2</sub> = −20 cm. Treating both as positive turns the sum into a difference and gives an infinite focal length. Decide each radius’s sign from where its centre of curvature sits',
    why: 'With <i>n</i> = 1.5 the right signs give <i>f</i> = 20 cm; both positive give 1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub> = 0, an infinite focal length.',
    say: null,
  },
  // pp. 581–583
  {
    topic: 2,
    kind: 'shortcut',
    q: 'A symmetric lens, or a lens dipped in a liquid. The fast way to its focal length?',
    a: 'Symmetric (equiconvex or equiconcave): <i>f</i> = <i>R</i>/(2(<i>n</i> − 1)), with no sign bookkeeping. Lens in liquid: <i>f</i><sub>medium</sub>/<i>f</i><sub>air</sub> = (<i>n</i><sub>g</sub> − 1)/(<i>n</i><sub>g</sub>/<i>n</i><sub>m</sub> − 1), so the radii are never needed',
    why: 'A glass lens (1.5) of 20 cm in water (4/3): the ratio is 0.5/0.125 = 4, so <i>f</i> = 80 cm. An equiconvex lens of 15 cm in a liquid of index 1.6: ratio −8, <i>f</i> = −120 cm, now diverging.',
    say: null,
  },

  // ── Topic 04 · Thin Lens, Power and Combinations ──
  // pp. 586, 589, 591
  {
    topic: 3,
    kind: 'remember',
    q: 'The thin-lens formula, its magnification and the power of a lens?',
    a: '1/<i>v</i> − 1/<i>u</i> = 1/<i>f</i>, <i>m</i> = <i>h</i>′/<i>h</i> = <i>v</i>/<i>u</i>, and <i>P</i> = 1/<i>f</i> in dioptres (D) with <i>f</i> in metres. Convex: <i>P</i> > 0; concave: <i>P</i> < 0',
    why: 'A concave lens always gives a virtual, erect, diminished image: <i>f</i> = −15 cm, <i>u</i> = −30 cm give <i>v</i> = −10 cm and <i>m</i> = +1/3. Plugging in <i>f</i> = +15 cm gives a spurious real image.',
    say: 'Concave lens = convex mirror’s twin — always virtual, erect, diminished.',
  },
  // pp. 586–587, 589–591
  {
    topic: 3,
    kind: 'remember',
    q: 'The focal length and power of thin lenses in contact, and of two lenses a distance <i>d</i> apart?',
    a: 'In contact: 1/<i>F</i> = 1/<i>f</i><sub>1</sub> + 1/<i>f</i><sub>2</sub> + ⋯, <i>P</i> = <i>P</i><sub>1</sub> + <i>P</i><sub>2</sub> + ⋯, <i>m</i> = <i>m</i><sub>1</sub> × <i>m</i><sub>2</sub> × ⋯. Separated by <i>d</i>: 1/<i>F</i> = 1/<i>f</i><sub>1</sub> + 1/<i>f</i><sub>2</sub> − <i>d</i>/(<i>f</i><sub>1</sub><i>f</i><sub>2</sub>), <i>P</i> = <i>P</i><sub>1</sub> + <i>P</i><sub>2</sub> − <i>dP</i><sub>1</sub><i>P</i><sub>2</sub>',
    why: 'A convex lens of 20 cm in contact with a concave lens of 30 cm: <i>F</i> = +60 cm, <i>P</i> ≈ +1.67 D, converging. Convex lenses of 20 cm and 30 cm placed 10 cm apart: <i>F</i> = 15 cm.',
    say: 'Powers add (in contact); dioptres are just 1/<i>f</i> in metres.',
  },
  // pp. 590–591
  {
    topic: 3,
    kind: 'mixup',
    q: 'The lens formula and the mirror formula: which sign joins the <i>u</i>-term, and what is <i>m</i> in each?',
    a: 'Lens: 1/<i>v</i> − 1/<i>u</i> = 1/<i>f</i> and <i>m</i> = +<i>v</i>/<i>u</i>. Mirror: 1/<i>v</i> + 1/<i>u</i> = 1/<i>f</i> and <i>m</i> = −<i>v</i>/<i>u</i>. Both the sign of the <i>u</i>-term and of <i>m</i> are opposite',
    why: 'This is the highest-frequency error in the chapter. A form like 1/<i>u</i> − 1/<i>v</i> = 1/<i>f</i> has the subtraction reversed, the wrong sign of <i>f</i>.',
    say: 'Mirror adds, lens subtracts.',
  },
  // pp. 587, 589, 591
  {
    topic: 3,
    kind: 'mistake',
    q: 'One face of a lens is silvered. Is the equivalent power <i>P</i><sub>lens</sub> + <i>P</i><sub>mirror</sub>?',
    a: 'No: light crosses the glass twice, refracting in, reflecting at the silvered face and refracting out, so <i>P</i><sub>eq</sub> = 2<i>P</i><sub>lens</sub> + <i>P</i><sub>mirror</sub>, and the system acts as a single mirror with <i>f</i><sub>eq</sub> = −1/<i>P</i><sub>eq</sub> (New Cartesian; <i>P</i><sub>eq</sub> > 0 is concave)',
    why: 'A plano-convex lens (<i>n</i> = 1.5) with its curved face of radius 20 cm silvered: <i>P</i><sub>lens</sub> = 2.5 D, <i>P</i><sub>mirror</sub> = 10 D, <i>P</i><sub>eq</sub> = 15 D, a concave mirror of focal length ≈ 6.67 cm.',
    say: null,
  },
  // pp. 589–591
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Lens combinations and the displacement method. The fast way?',
    a: 'Work combinations in dioptres: adding signed powers beats juggling reciprocals. For the displacement method, with object–screen separation <i>D</i> and lens shift <i>d</i>, <i>f</i> = (<i>D</i><sup>2</sup> − <i>d</i><sup>2</sup>)/(4<i>D</i>)',
    why: 'Object and screen 80 cm apart, sharp images at two lens positions 20 cm apart: <i>f</i> = (6400 − 400)/320 = 18.75 cm. Lenses of +5 D and −3 D in contact: +2 D, <i>F</i> = +50 cm.',
    say: null,
  },

  // ── Topic 05 · Prism and Dispersion ──
  // pp. 594, 596, 598, 600, 602
  {
    topic: 4,
    kind: 'remember',
    q: 'The prism relations, the minimum-deviation condition and the prism formula?',
    a: '<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>A</i> and <i>δ</i> = <i>i</i> + <i>e</i> − <i>A</i>. At minimum deviation <i>i</i> = <i>e</i>, <i>r</i><sub>1</sub> = <i>r</i><sub>2</sub> = <i>A</i>/2, <i>δ</i><sub>m</sub> = 2<i>i</i> − <i>A</i>, and <i>n</i> = sin((<i>A</i> + <i>δ</i><sub>m</sub>)/2)/sin(<i>A</i>/2)',
    why: 'An equilateral prism with <i>δ</i><sub>m</sub> = 30° has <i>n</i> = sin 45°/sin 30° = √2 ≈ 1.414. No ray emerges if <i>A</i> > 2<i>C</i>: for <i>n</i> = 1.5, above about 83.6°.',
    say: '<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>A</i>, <i>δ</i> = <i>i</i> + <i>e</i> − <i>A</i> — the two prism equations to never mix up.',
  },
  // pp. 594, 596, 600, 602
  {
    topic: 4,
    kind: 'remember',
    q: 'For a thin prism: the deviation, the angular dispersion and the dispersive power?',
    a: 'Deviation <i>δ</i> = (<i>n</i> − 1)<i>A</i>; mean deviation <i>δ</i><sub>y</sub> = (<i>n</i><sub>y</sub> − 1)<i>A</i>; angular dispersion <i>θ</i> = <i>δ</i><sub>v</sub> − <i>δ</i><sub>r</sub> = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)<i>A</i>; dispersive power <i>ω</i> = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)/(<i>n</i><sub>y</sub> − 1), dimensionless and a property of the material only',
    why: 'A 5° crown prism with <i>n</i><sub>v</sub> = 1.524, <i>n</i><sub>r</sub> = 1.514, <i>n</i><sub>y</sub> = 1.519: <i>δ</i><sub>y</sub> ≈ 2.60°, <i>θ</i> = 0.05°, <i>ω</i> ≈ 0.019. Violet has the larger <i>n</i> and deviates most.',
    say: 'ROYGBIV: Red deviated least, Violet most.',
  },
  // pp. 596, 598, 602
  {
    topic: 4,
    kind: 'mixup',
    q: 'Two thin prisms combined: what does an achromatic combination cancel, and what does a direct-vision one cancel?',
    a: 'Achromatic: the colour spreading, (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)<i>A</i> + (<i>n</i>′<sub>v</sub> − <i>n</i>′<sub>r</sub>)<i>A</i>′ = 0 (in magnitudes, (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)<i>A</i> = (<i>n</i>′<sub>v</sub> − <i>n</i>′<sub>r</sub>)<i>A</i>′), while a net bend survives. Direct-vision: the net deviation, (<i>n</i><sub>y</sub> − 1)<i>A</i> + (<i>n</i>′<sub>y</sub> − 1)<i>A</i>′ = 0 (in magnitudes, (<i>n</i><sub>y</sub> − 1)<i>A</i> = (<i>n</i>′<sub>y</sub> − 1)<i>A</i>′), so white light emerges straight while the colours still fan out. Inverting the second prism makes <i>A</i>′ count negative',
    why: 'Because flint glass has a higher dispersive power than crown glass (<i>ω</i>′ ≠ <i>ω</i>), the two conditions cannot be met together: you choose which effect to kill.',
    say: null,
  },
  // pp. 592, 596–597, 601–602
  {
    topic: 4,
    kind: 'mistake',
    q: 'Does a prism give its minimum deviation when the light enters at normal incidence?',
    a: 'No: minimum deviation happens at the symmetric setting, <i>i</i> = <i>e</i>, with the ray inside the prism parallel to the base (for an isosceles prism), not at <i>i</i> = 0',
    why: 'As <i>i</i> grows, <i>δ</i> first decreases, reaches its lowest value, then increases; every larger value of <i>δ</i> is obtained for two values of <i>i</i>. For <i>n</i> = 1.5 and <i>A</i> = 60°, <i>δ</i><sub>m</sub> ≈ 37.2°.',
    say: 'Symmetry means minimum — equal in, equal out gives least deviation.',
  },
  // pp. 598, 602
  {
    topic: 4,
    kind: 'shortcut',
    q: 'A ray passes a prism at minimum deviation and you need the angle of incidence. The fast way?',
    a: 'Skip the full prism formula: jump to <i>r</i> = <i>A</i>/2 and apply Snell once. And separate size from material: deviations scale with <i>A</i>, but <i>ω</i> never does',
    why: '<i>A</i> = 60° and <i>n</i> = √3: sin <i>i</i> = √3 sin 30° = √3/2, so <i>i</i> = 60°, and <i>δ</i><sub>m</sub> = 2<i>i</i> − <i>A</i> = 60°.',
    say: null,
  },

  // ── Topic 06 · Optical Instruments ──
  // pp. 603–604, 606, 609–611
  {
    topic: 5,
    kind: 'remember',
    q: 'What is magnifying power, and its value for a simple microscope?',
    a: '<i>M</i> = <i>β</i>/<i>α</i>, the angle subtended through the instrument over the angle the object subtends at the unaided eye at <i>D</i>. Simple microscope: <i>M</i> = <i>D</i>/<i>f</i> with the image at infinity (relaxed), <i>M</i> = 1 + <i>D</i>/<i>f</i> with it at the near point (strained); <i>D</i> = 25 cm',
    why: 'A magnifying glass of focal length 5 cm: 5 relaxed, 6 at the near point. The “+1” is the bonus from pulling the image to the near point, at the cost of eye strain.',
    say: 'Angle, not size — magnifying power is about the angle at your eye.',
  },
  // pp. 604, 606, 609, 611
  {
    topic: 5,
    kind: 'remember',
    q: 'The magnifying power of a compound microscope and of an astronomical telescope in normal adjustment?',
    a: 'Microscope: <i>M</i> = <i>m</i><sub>o</sub> × <i>M</i><sub>e</sub> = (<i>v</i><sub>o</sub>/|<i>u</i><sub>o</sub>|)(<i>D</i>/<i>f</i><sub>e</sub>) ≈ (<i>L</i>/<i>f</i><sub>o</sub>)(<i>D</i>/<i>f</i><sub>e</sub>): both focal lengths small, lens separation = <i>v</i><sub>o</sub> + <i>f</i><sub>e</sub>. Telescope: <i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub>, tube <i>L</i> = <i>f</i><sub>o</sub> + <i>f</i><sub>e</sub>: long objective, short eyepiece',
    why: 'A telescope of <i>M</i> = 24 with a 100 cm tube: <i>f</i><sub>e</sub> = 4 cm, <i>f</i><sub>o</sub> = 96 cm. At the near point the telescope’s <i>M</i> gains the factor (1 + <i>f</i><sub>e</sub>/<i>D</i>).',
    say: 'Micro-short, Tele-long — the objective’s focal length is short in a microscope, long in a telescope.',
  },
  // pp. 604, 609–611
  {
    topic: 5,
    kind: 'mixup',
    q: 'Relaxed eye or near point: which formula goes with which adjustment?',
    a: '“Relaxed / normal / image at infinity” uses <i>D</i>/<i>f</i> (and <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> for a telescope); “strained / near point” adds the +1 (and the factor 1 + <i>f</i><sub>e</sub>/<i>D</i>). Read the wording before choosing',
    why: 'A telescope of <i>M</i> = 20 in normal adjustment with a 5 cm eyepiece gives 20(1 + 5/25) = 24 with the image at the near point.',
    say: 'Relaxed = <i>D</i>/<i>f</i>; strained adds 1.',
  },
  // pp. 604, 610
  {
    topic: 5,
    kind: 'mistake',
    q: 'For a simple microscope with the image at infinity, is the linear magnification the number that matters?',
    a: 'No: magnifying power <i>M</i> compares angles at the eye, linear magnification <i>m</i> compares heights. With the image at infinity <i>m</i> is technically infinite, while <i>M</i> = <i>D</i>/<i>f</i> is finite and is the quantity that matters',
    why: 'Keep <i>M</i> (a ratio of angles) firmly apart from <i>m</i> (a ratio of heights): they are different numbers for the same instrument.',
    say: null,
  },
  // pp. 607, 609, 611
  {
    topic: 5,
    kind: 'shortcut',
    q: 'A telescope given by the powers of its lenses. The fast way to its magnifying power?',
    a: 'Work in powers: <i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> = <i>P</i><sub>e</sub>/<i>P</i><sub>o</sub>, which skips two unit conversions and the inversion trap. Role check: short-focus objective ⇒ microscope; long-focus objective ⇒ telescope',
    why: 'An objective of 0.5 D and an eyepiece of 25 D: <i>M</i> = 25/0.5 = 50 (<i>f</i><sub>o</sub> = 200 cm, <i>f</i><sub>e</sub> = 4 cm). Dividing the wrong way gives 1/50.',
    say: null,
  },

  // ── Additional A · Refraction Across Multiple and Curved Boundaries ──
  // pp. 612–613
  {
    topic: 6,
    kind: 'remember',
    q: 'An object is viewed through two refracting surfaces in a row. How do you find the final image?',
    a: 'Apply the single-surface relation twice: the image formed by surface 1 is the object for surface 2, with signed distances from each surface’s own pole. For a sphere, the second surface’s radius sign flips',
    why: 'A glass sphere (<i>R</i> = 6 cm, <i>n</i> = 1.5) with an object 18 cm from it: surface 1 images at 54 cm, a virtual object 42 cm beyond surface 2, and the final image is real, 8.4 cm beyond the far surface.',
    say: null,
  },
  // pp. 612–614
  {
    topic: 6,
    kind: 'remember',
    q: 'Layers of thickness <i>t</i><sub>1</sub> and <i>t</i><sub>2</sub>, indices <i>n</i><sub>1</sub> and <i>n</i><sub>2</sub>, lie over an object. Its apparent depth?',
    a: '<i>d</i>′ = <i>t</i><sub>1</sub>/<i>n</i><sub>1</sub> + <i>t</i><sub>2</sub>/<i>n</i><sub>2</sub>, the sum of the individual apparent contributions; the total apparent shift is the sum of the individual shifts <i>t</i>(1 − 1/<i>n</i>)',
    why: 'A fish 40 cm behind a 5 cm glass wall (<i>n</i> = 1.5) of a water tank (<i>n</i> = 4/3): shift 10 + 5/3 ≈ 11.67 cm, so it appears about 33.3 cm behind the outer glass surface.',
    say: null,
  },

  // ── Additional B · Advanced Mirror-Lens Combinations and Silvered Elements ──
  // pp. 616–617
  {
    topic: 7,
    kind: 'remember',
    q: 'A lens with one face silvered: its equivalent mirror?',
    a: '<i>P</i><sub>eq</sub> = 2<i>P</i><sub>lens</sub> + <i>P</i><sub>mirror</sub>, all powers positive when converging; 1/|<i>P</i><sub>eq</sub>| is the size of the equivalent focal length, a concave mirror if <i>P</i><sub>eq</sub> > 0, a convex one if negative (New Cartesian <i>f</i><sub>eq</sub> = −1/<i>P</i><sub>eq</sub>). The silvered face, seen from inside the glass, is concave if its centre of curvature is on the incoming-light side',
    why: 'Plano-convex (<i>n</i> = 1.5, <i>R</i> = 20 cm), curved face silvered: 2(2.5) + 10 = +15 D, 1/<i>P</i><sub>eq</sub> ≈ 6.67 cm. Silver the flat face instead: <i>P</i><sub>m</sub> = 0, +5 D, 1/<i>P</i><sub>eq</sub> = 20 cm.',
    say: null,
  },
  // pp. 616–618
  {
    topic: 7,
    kind: 'remember',
    q: 'An object, a lens and a plane mirror in a line. How do you track the final image?',
    a: 'Find the lens image; treat it as the object for the mirror, counting the lens–mirror distance (an image beyond the mirror is a virtual object for it); the mirror image is then viewed through the lens again',
    why: 'Lens of <i>f</i> = 20 cm, plane mirror 40 cm away, object 30 cm in front: the lens image falls 20 cm behind the mirror, the mirror images it 20 cm in front, at the lens focus, so the final image is at infinity.',
    say: null,
  },

  // ── Additional C · Chromatic Aberration and Achromatic Systems ──
  // pp. 620, 622
  {
    topic: 8,
    kind: 'remember',
    q: 'Why does a single lens show chromatic aberration, and how big is it?',
    a: 'Its focal length depends on <i>n</i>, which is larger for violet: <i>f</i><sub>v</sub> ≈ <i>f</i><sub>0</sub>(1 − <i>ω</i>/2) and <i>f</i><sub>r</sub> ≈ <i>f</i><sub>0</sub>(1 + <i>ω</i>/2), so the longitudinal chromatic aberration is <i>f</i><sub>r</sub> − <i>f</i><sub>v</sub> ≈ <i>f</i><sub>0</sub><i>ω</i>',
    why: 'Biconvex, <i>R</i> = 20 cm, <i>n</i><sub>y</sub> = 1.5, <i>n</i><sub>v</sub> = 1.52, <i>n</i><sub>r</sub> = 1.48: <i>f</i><sub>v</sub> ≈ 19.23 cm, <i>f</i><sub>r</sub> ≈ 20.83 cm, aberration ≈ 1.6 cm, violet focusing nearer the lens.',
    say: null,
  },
  // pp. 620–622
  {
    topic: 8,
    kind: 'remember',
    q: 'The condition for an achromatic doublet of two thin lenses in contact?',
    a: '<i>ω</i><sub>1</sub>/<i>f</i><sub>1</sub> + <i>ω</i><sub>2</sub>/<i>f</i><sub>2</sub> = 0: one lens converging, the other diverging, of different glasses',
    why: 'A converging doublet of 20 cm from crown (<i>ω</i> = 0.15) and flint (<i>ω</i> = 0.24): <i>f</i><sub>f</sub> = −1.6<i>f</i><sub>c</sub>, giving <i>f</i><sub>c</sub> = 7.5 cm and <i>f</i><sub>f</sub> = −12 cm. Each lens’s chromatic effect <i>ωP</i> is ±2.0 D, and they cancel.',
    say: null,
  },

  // ── Additional D · Advanced Prism Situations ──
  // pp. 624–625
  {
    topic: 9,
    kind: 'remember',
    q: 'When can no ray at all emerge from a prism, and which rays emerge when some can?',
    a: 'A ray emerges only if <i>r</i><sub>2</sub> < <i>C</i>; since <i>r</i><sub>1</sub> is at most <i>C</i>, the smallest <i>r</i><sub>2</sub> is <i>A</i> − <i>C</i>, so all rays are trapped when <i>A</i> > 2<i>C</i>. Otherwise only rays with <i>r</i><sub>1</sub> > <i>A</i> − <i>C</i> emerge',
    why: 'Glass of <i>n</i> = 1.5 (<i>C</i> ≈ 41.8°) traps all light above <i>A</i> ≈ 83.6°. At <i>A</i> = 80° only rays with <i>r</i><sub>1</sub> > 38.2° (<i>i</i> above about 68°) emerge; near-normal rays undergo TIR.',
    say: null,
  },
  // pp. 624–626
  {
    topic: 9,
    kind: 'remember',
    q: 'The condition for grazing emergence from a prism?',
    a: '<i>e</i> = 90°, so sin <i>e</i> = 1 = <i>n</i> sin <i>r</i><sub>2</sub> gives <i>r</i><sub>2</sub> = <i>C</i> and <i>r</i><sub>1</sub> = <i>A</i> − <i>C</i>; the angle of incidence then follows from Snell’s law at the first face',
    why: '<i>n</i> = 1.5, <i>A</i> = 60°: <i>r</i><sub>1</sub> = 18.2°, sin <i>i</i> = 1.5 sin 18.2° ≈ 0.468, <i>i</i> ≈ 28°. Any smaller <i>i</i> and the ray is totally internally reflected.',
    say: null,
  },

  // ── Additional E · Advanced Image Velocity and Rotating Systems ──
  // pp. 627–629
  {
    topic: 10,
    kind: 'remember',
    q: 'A plane mirror rotates at angular speed <i>ω</i><sub>m</sub>. How fast does the reflected beam turn, and the spot on a screen at distance <i>D</i>?',
    a: 'Rotating the mirror by <i>θ</i> turns the reflected ray by 2<i>θ</i>, so the beam rotates at 2<i>ω</i><sub>m</sub> and <i>v</i><sub>spot</sub> = 2<i>ω</i><sub>m</sub><i>D</i> when the beam meets the screen perpendicularly',
    why: '600 rpm (<i>ω</i><sub>m</sub> = 20π rad s<sup>−1</sup>) with a wall 10 m away: <i>v</i><sub>spot</sub> = 400π ≈ 1257 m s<sup>−1</sup>. A plane mirror moving at 2 m/s moves the image of a fixed object at 4 m/s.',
    say: null,
  },
  // pp. 627–628
  {
    topic: 10,
    kind: 'remember',
    q: 'The image velocity along the axis of a curved mirror, and for a plane mirror?',
    a: 'Curved: <i>v̇</i> = −<i>m</i><sup>2</sup><i>u̇</i>, where <i>m</i> = −<i>v</i>/<i>u</i> and an object approaching the mirror has <i>u̇</i> > 0. Plane mirror at <i>x</i> = 0: <i>v⃗</i><sub>image</sub> = (−<i>v</i><sub><i>x</i></sub>, <i>v</i><sub><i>y</i></sub>, <i>v</i><sub><i>z</i></sub>), the normal component reversed',
    why: 'A convex mirror of <i>f</i> = 20 cm, object 40 cm away approaching at 5 cm/s: <i>v</i> ≈ 13.3 cm, <i>m</i> = +1/3, <i>v̇</i> ≈ −0.556 cm/s, the image approaching the mirror at about 0.56 cm/s.',
    say: null,
  },

  // ── Additional F · Advanced Optical Instruments and Resolving Power ──
  // pp. 630–631, 633
  {
    topic: 11,
    kind: 'remember',
    q: 'The resolving limits of a telescope and of a microscope (Rayleigh criterion)?',
    a: 'Telescope of objective diameter <i>D</i>: <i>θ</i><sub>min</sub> = 1.22<i>λ</i>/<i>D</i>, so a larger <i>D</i> resolves finer. Microscope: <i>d</i><sub>min</sub> = 0.61<i>λ</i>/NA, with NA = <i>n</i> sin <i>α</i>; oil immersion raises NA and improves resolution',
    why: 'NA = 0.8 at <i>λ</i> = 600 nm: <i>d</i><sub>min</sub> ≈ 0.46 μm. A 10 cm telescope objective at 600 nm: <i>θ</i><sub>min</sub> = 7.32 × 10<sup>−6</sup> rad ≈ 1.5 arcseconds.',
    say: null,
  },
  // pp. 630–631
  {
    topic: 11,
    kind: 'remember',
    q: 'A Galilean telescope: its lenses, magnifying power and tube length?',
    a: 'A convex objective and a concave eyepiece, giving a virtual, erect image: <i>M</i> = −<i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> and <i>L</i> = <i>f</i><sub>o</sub> − |<i>f</i><sub>e</sub>|, shorter than the astronomical telescope’s <i>f</i><sub>o</sub> + <i>f</i><sub>e</sub>',
    why: '<i>f</i><sub>o</sub> = 80 cm, <i>f</i><sub>e</sub> = −20 cm: <i>M</i> = +4 (erect), <i>L</i> = 60 cm. With a convex 20 cm eyepiece instead: <i>M</i> = −4 (inverted; its size, 4, is Topic 06’s <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub>), <i>L</i> = 100 cm.',
    say: null,
  },
];
