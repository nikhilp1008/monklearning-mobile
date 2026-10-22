import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Topics 01 and 02: pp. 331–348 of the Class 12 Physics Master
 * Reference, word for word: Bar Magnet, Magnetic Field Lines and Dipole Moment
 * (pp. 331–339) and Earth’s Magnetism (pp. 340–348), each split at its
 * Sections 1 to 8. The chapter’s title page and contents (p. 330 and the top
 * of p. 331) are not copied. The p. 335 equatorial-field passage is the
 * errata-corrected one (“The same result also follows from the electric–magnetic
 * dipole analogy…”, “Both results are the short-magnet limit”); the errata’s
 * layout defects (MCQ options run together, answers on one line) are undone.
 * Figures 5.1 (pp. 332–333), 5.2 (335–336), 5.3 (341–342) and 5.4 (344–345)
 * are redrawn in lib/diagrams/physics-12-05.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 331–339 ─────────────────────────
  {
    n: '01',
    title: 'Bar Magnet, Magnetic Field Lines and Dipole Moment',
    kalam: 'With magnets, you cannot isolate a single pole.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Reliably good for 1–2 questions in JEE Main (torque, potential energy, axial/equatorial fields), and a frequent NEET assertion-reason or single-numeric item. JEE Advanced tends to fold it into a multi-body field-superposition or oscillation problem. CBSE Boards almost always carry a 2–3 mark question on field-line properties or the torque/PE derivation.',
      },
      {
        t: 'p',
        html: 'Pick up an ordinary bar magnet, scatter iron filings on a sheet of paper laid over it, and tap gently. The filings don’t pile up randomly — they arrange themselves into graceful curved arcs sweeping from one end of the magnet to the other. You’ve just seen a magnetic field. Those arcs are our first hint that a magnet is not a “blob” of magnetism but something with a definite structure and direction baked into it.',
      },
      {
        t: 'p',
        html: 'That structure has two ends we call the <b>North pole</b> and the <b>South pole</b>. They behave a lot like the +<i>q</i> and −<i>q</i> of an electric dipole: like poles repel, unlike poles attract. This resemblance is so close that we give a magnet a single number that captures “how strong and which way” it is — the <b>magnetic dipole moment</b> <i>m⃗</i>, a vector pointing from S to N inside the magnet.',
      },
      {
        t: 'p',
        html: 'But here is the one place the analogy famously breaks. With charges, you can hold a lone +<i>q</i> in your hand. With magnets, <b>you cannot isolate a single pole.</b> Snap a bar magnet in half hoping to collect a pure North pole, and you simply get two complete, weaker magnets — each with its own N and S. Snap those again: four magnets. This is the experimental face of a deep law — magnetic monopoles do not exist — and it is why the field lines of a magnet form <b>continuous closed loops</b> with no beginning and no end, unlike electric field lines that are born on +<i>q</i> and die on −<i>q</i>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a tiny compass needle as a Lilliputian bar magnet. Drop it anywhere near our big magnet and it swings until it lines up like a weather-vane in the wind — its N end pointing along the local field. Now imagine doing this at thousands of points and joining the arrows head-to-tail. Those joined-up arrows are the field lines. The crowding of the lines tells you the strength: where they bunch tightly (near the poles), <i>B</i> is large; where they fan out, <i>B</i> is weak. The field line is just the path your imaginary compass needle would trace.',
      },
      {
        t: 'p',
        html: 'A second powerful picture: a bar magnet behaves almost exactly like a tightly wound <b>solenoid</b> (a coil carrying current). Their field-line patterns are near-identical. Ampère’s old hypothesis — that all magnetism comes from tiny circulating currents inside matter — lets us treat the magnet as a stack of microscopic current loops, which is why the same dipole-moment language (<i>m⃗</i> = <i>NIA⃗</i> for a coil) works for both.',
      },
      {
        t: 'p',
        html: 'This circulating-current picture also answers a question every child asks: why does a magnet pick up an iron nail, but not a wooden pencil? Inside the nail are countless atomic current loops — atomic magnetic moments — normally pointing every which way, so they cancel and the nail is unmagnetized. Bring the magnet close and its field nudges those atomic moments into rough alignment, so the nail becomes a temporary magnet, with its near end turned into an opposite pole that is attracted. Wood and aluminium have no such strongly alignable moments (wood is diamagnetic, aluminium only weakly paramagnetic), so they barely respond. Crucially, the nail is attracted to either pole of the magnet — because the induced moment always orients to be pulled in. Hold that thought: this attraction needs the field to be non-uniform, a point we make precise in the CBSE board derivations.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> The clean formulas you’ll meet rest on three idealizations: (1) the <b>short-magnet (point dipole) approximation</b> — the axial field (μ<sub>0</sub>/(4π)) 2<i>m</i>/<i>r</i><sup>3</sup> and equatorial field (μ<sub>0</sub>/(4π)) <i>m</i>/<i>r</i><sup>3</sup> hold only when the distance <i>r</i> is much larger than the magnet’s half-length <i>l</i>; up close you must use the full expressions. (2) <b>Uniform field</b> is assumed when we say the net force on a magnet is zero — true only when both poles sit in the same field strength. In a non-uniform field the poles feel unequal forces and there is a net translational force. (3) The pole-strength / magnetic-charge model is a calculational convenience only; it is never physically real because monopoles don’t exist.',
      },
      { t: 'fig', id: 'p12-05-fig-5.1' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Magnetic dipole moment <i>m⃗</i> — the measure of a magnet’s strength and orientation',
        main: '<i>m⃗</i> = <i>NIA⃗</i> (current loop)<br><i>m</i> = <i>q</i><sub>m</sub>(2<i>l</i>) (pole model)',
        legend: [
          '<i>N</i> = number of turns',
          '<i>I</i> = current',
          '<i>A</i> = loop area',
          '<i>q</i><sub>m</sub> = pole strength',
          '2<i>l</i> = magnetic length',
        ],
        note: 'SI unit: A·m<sup>2</sup> (or J·T<sup>−1</sup>). Dimensional formula: [M<sup>0</sup> L<sup>2</sup> T<sup>0</sup> A<sup>1</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Torque on a dipole in a uniform field <i>B⃗</i>',
        main: '<i>τ⃗</i> = <i>m⃗</i> × <i>B⃗</i><br>|<i>τ⃗</i>| = <i>mB</i> sin <i>θ</i>',
        legend: ['<i>θ</i> = the angle between <i>m⃗</i> and <i>B⃗</i>'],
        note: 'SI unit: N·m. Dimensional formula: [M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>]. Maximum at <i>θ</i> = 90°, zero at <i>θ</i> = 0° or 180°.',
      },
      {
        t: 'formula',
        kicker: 'Potential energy of the dipole',
        main: '<i>U</i> = −<i>m⃗</i> · <i>B⃗</i> = −<i>mB</i> cos <i>θ</i>',
        legend: [],
        note: 'SI unit: joule [M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>]. Reference <i>U</i> = 0 chosen at <i>θ</i> = 90°. Minimum (stable) at <i>θ</i> = 0°; maximum (unstable) at <i>θ</i> = 180°.',
      },
      {
        t: 'formula',
        kicker: 'Work to rotate from <i>θ</i><sub>1</sub> to <i>θ</i><sub>2</sub>',
        main: '<i>W</i> = <i>mB</i>(cos <i>θ</i><sub>1</sub> − cos <i>θ</i><sub>2</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Field of a short bar magnet (point dipole, <i>r</i> ≫ <i>l</i>)',
        main: '<i>B</i><sub>axial</sub> = (μ<sub>0</sub>/(4π)) 2<i>m</i>/<i>r</i><sup>3</sup><br><i>B</i><sub>equatorial</sub> = (μ<sub>0</sub>/(4π)) <i>m</i>/<i>r</i><sup>3</sup>',
        legend: [],
        note: '<i>B</i><sub>axial</sub> points parallel to <i>m⃗</i>; <i>B</i><sub>equatorial</sub> points anti-parallel to <i>m⃗</i>. At equal distance, <i>B</i><sub>axial</sub> ∶ <i>B</i><sub>equatorial</sub> = 2 ∶ 1. Unit of <i>B</i>: tesla, [M<sup>1</sup> L<sup>0</sup> T<sup>−2</sup> A<sup>−1</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Full (finite-length) fields, half-length <i>l</i>, centre-distance <i>r</i>',
        main: '<i>B</i><sub>axial</sub> = (μ<sub>0</sub>/(4π)) 2<i>mr</i>/(<i>r</i><sup>2</sup> − <i>l</i><sup>2</sup>)<sup>2</sup><br><i>B</i><sub>equatorial</sub> = (μ<sub>0</sub>/(4π)) <i>m</i>/(<i>r</i><sup>2</sup> + <i>l</i><sup>2</sup>)<sup>3/2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Time period of a magnet oscillating in field <i>B</i> (moment of inertia <i>I</i>)',
        main: '<i>T</i> = 2π√(<i>I</i>/(<i>mB</i>))',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: 'The dipole analogy (a high-yield memory table)',
        head: ['Quantity', 'Electrostatics', 'Magnetism'],
        rows: [
          ['Constant', '1/(4πε<sub>0</sub>)', 'μ<sub>0</sub>/(4π)'],
          ['Dipole moment', '<i>p⃗</i>', '<i>m⃗</i>'],
          ['Axial field (short)', '2<i>p</i>/(4πε<sub>0</sub><i>r</i><sup>3</sup>)', '(μ<sub>0</sub>/(4π)) 2<i>m</i>/<i>r</i><sup>3</sup>'],
          ['Equatorial field (short)', '−<i>p</i>/(4πε<sub>0</sub><i>r</i><sup>3</sup>)', '−(μ<sub>0</sub>/(4π)) <i>m</i>/<i>r</i><sup>3</sup>'],
          ['Torque', '<i>p⃗</i> × <i>E⃗</i>', '<i>m⃗</i> × <i>B⃗</i>'],
          ['Energy', '−<i>p⃗</i> · <i>E⃗</i>', '−<i>m⃗</i> · <i>B⃗</i>'],
        ],
      },

      { t: 'part', title: 'CBSE board derivations' },
      { t: 'p', html: '<b>(A) Axial field of a bar magnet, treated as an equivalent solenoid</b>' },
      {
        t: 'p',
        html: 'We model the magnet as a solenoid of length 2<i>l</i>, radius <i>a</i>, with <i>n</i> turns per unit length carrying current <i>I</i>. We want the field at a point <i>P</i> on the axis, a distance <i>r</i> from the centre <i>O</i>.',
      },
      {
        t: 'p',
        html: '<b>Why a solenoid?</b> Because its external field lines copy a bar magnet’s almost exactly — so whatever we derive transfers directly.',
      },
      {
        t: 'p',
        html: 'Consider a thin slice of the solenoid of thickness d<i>x</i> at distance <i>x</i> from the centre. It contains <i>n</i> d<i>x</i> turns, behaving like a single circular loop carrying current (<i>n</i> d<i>x</i>)<i>I</i>. The on-axis field of a circular loop of radius <i>a</i> at axial separation <i>s</i> is the standard result<br>d<i>B</i> = (μ<sub>0</sub>(<i>n</i> d<i>x</i>) <i>I</i> <i>a</i><sup>2</sup>)/(2[(<i>r</i> − <i>x</i>)<sup>2</sup> + <i>a</i><sup>2</sup>]<sup>3/2</sup>).<br>Here the separation between the slice and <i>P</i> is <i>s</i> = (<i>r</i> − <i>x</i>).',
      },
      {
        t: 'p',
        html: 'Now invoke the <b>short-magnet condition</b> <i>r</i> ≫ <i>a</i> and <i>r</i> ≫ <i>l</i>. Since <i>x</i> only ranges over [−<i>l</i>, +<i>l</i>] (small compared to <i>r</i>), the denominator simplifies: (<i>r</i> − <i>x</i>)<sup>2</sup> + <i>a</i><sup>2</sup> ≈ <i>r</i><sup>2</sup>, so […]<sup>3/2</sup> ≈ <i>r</i><sup>3</sup>. The integral becomes elementary:<br><i>B</i> = ∫<sub>−<i>l</i></sub><sup>+<i>l</i></sup> (μ<sub>0</sub><i>nIa</i><sup>2</sup>/(2<i>r</i><sup>3</sup>)) d<i>x</i> = (μ<sub>0</sub><i>nIa</i><sup>2</sup>/(2<i>r</i><sup>3</sup>)) (2<i>l</i>) = μ<sub>0</sub><i>nIa</i><sup>2</sup><i>l</i>/<i>r</i><sup>3</sup>.',
      },
      {
        t: 'p',
        html: 'The total magnetic moment of the solenoid is (total turns) × (current) × (area):<br><i>m</i> = (<i>n</i> · 2<i>l</i>)(<i>I</i>)(π<i>a</i><sup>2</sup>) = 2π <i>nIla</i><sup>2</sup> ⇒ <i>nIa</i><sup>2</sup><i>l</i> = <i>m</i>/(2π).<br>Substituting,<br><i>B</i><sub>axial</sub> = μ<sub>0</sub><i>m</i>/(2π<i>r</i><sup>3</sup>) = (μ<sub>0</sub>/(4π)) 2<i>m</i>/<i>r</i><sup>3</sup><br>directed along <i>m⃗</i>. For the <b>equatorial</b> point, the two poles lie symmetrically on either side, and when you resolve the field each contributes, the components along the magnet’s axis add while the perpendicular ones cancel — leaving a resultant that points opposite to <i>m⃗</i> with magnitude exactly half the axial value. The same result also follows from the electric–magnetic dipole analogy (see the correspondence table in Key formulas and definitions): wherever electrostatics has <i>p</i>/(4πε<sub>0</sub><i>r</i><sup>3</sup>), magnetism has (μ<sub>0</sub>/(4π)) <i>m</i>/<i>r</i><sup>3</sup>. Hence<br><i>B</i><sub>equatorial</sub> = (μ<sub>0</sub>/(4π)) <i>m</i>/<i>r</i><sup>3</sup>,   anti-parallel to <i>m⃗</i>.',
      },
      {
        t: 'p',
        html: 'Both results are the short-magnet limit; for a finite magnet of half-length <i>l</i> they generalise to the (<i>r</i><sup>2</sup> − <i>l</i><sup>2</sup>)<sup>2</sup> and (<i>r</i><sup>2</sup> + <i>l</i><sup>2</sup>)<sup>3/2</sup> forms listed in Key formulas and definitions, which reduce to these when <i>r</i> ≫ <i>l</i>.',
      },
      { t: 'p', html: '<b>(B) Torque on a dipole in a uniform field</b>' },
      {
        t: 'p',
        html: 'Picture the magnet (pole strength <i>q</i><sub>m</sub>, length 2<i>l</i>) at angle <i>θ</i> to <i>B⃗</i>. Each pole feels a force of magnitude <i>F</i> = <i>q</i><sub>m</sub><i>B</i> — the N pole along <i>B⃗</i>, the S pole opposite. These are equal, opposite, and not collinear: they form a <b>couple</b>. The perpendicular distance between their lines of action is 2<i>l</i> sin <i>θ</i>, so<br><i>τ</i> = <i>F</i> × (perpendicular separation) = (<i>q</i><sub>m</sub><i>B</i>)(2<i>l</i> sin <i>θ</i>) = (<i>q</i><sub>m</sub> · 2<i>l</i>) <i>B</i> sin <i>θ</i> = <i>mB</i> sin <i>θ</i>,<br>which in vector form is <i>τ⃗</i> = <i>m⃗</i> × <i>B⃗</i>. Note the net force is <i>q</i><sub>m</sub><i>B</i> − <i>q</i><sub>m</sub><i>B</i> = 0 — the magnet turns but doesn’t translate, provided the field is uniform.',
      },
      { t: 'p', html: '<b>(C) Potential energy and work done</b>' },
      {
        t: 'p',
        html: 'The work done by an external agent in turning the dipole through d<i>θ</i> against this torque is d<i>W</i> = <i>τ</i> d<i>θ</i> = <i>mB</i> sin <i>θ</i> d<i>θ</i>. Integrating from <i>θ</i><sub>1</sub> to <i>θ</i><sub>2</sub>:<br><i>W</i> = ∫<sub><i>θ</i>₁</sub><sup><i>θ</i>₂</sup> <i>mB</i> sin <i>θ</i> d<i>θ</i> = <i>mB</i>(cos <i>θ</i><sub>1</sub> − cos <i>θ</i><sub>2</sub>).<br>This stored work is the potential energy. Choosing <i>U</i> = 0 at <i>θ</i> = 90° gives the clean form <i>U</i> = −<i>mB</i> cos <i>θ</i> = −<i>m⃗</i> · <i>B⃗</i>.',
      },
      { t: 'p', html: '<b>(D) Force on a dipole in a non-uniform field</b>' },
      {
        t: 'p',
        html: 'In a uniform field the two poles feel equal and opposite forces, so the net force vanishes (only the couple survives). But if the field varies along the axis — say <i>B</i> increases in the +<i>x</i> direction — the N and S poles sit in slightly different field strengths, and the forces no longer cancel. Taking a dipole of small length aligned along <i>x</i>, the net force is the difference of the pole forces over the separation:<br><i>F</i> = <i>m</i> d<i>B</i>/d<i>x</i>.<br>The dipole is pulled toward the region of stronger field when <i>m⃗</i> is aligned with <i>B⃗</i>. This is the precise statement of why a magnet attracts the iron nail from the Concept intuition: the nail acquires an induced moment aligned with the field, and because the magnet’s field is strongest near its pole, d<i>B</i>/d<i>x</i> ≠ 0 drags the nail inward. No gradient, no pull.',
      },
      { t: 'fig', id: 'p12-05-fig-5.2' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A bar magnet of magnetic moment 4.5 A·m<sup>2</sup> is held at 30° to a uniform magnetic field of 0.30 T. Find (a) the torque on it, (b) its potential energy, and (c) the work needed to rotate it from 30° to 90°.',
        steps: [
          '<b>Given:</b> <i>m</i> = 4.5 A·m<sup>2</sup>, <i>B</i> = 0.30 T, <i>θ</i> = 30°.',
          '(a) <i>τ</i> = <i>mB</i> sin <i>θ</i> = (4.5)(0.30) sin 30° = 1.35 × 0.5',
          '(b) <i>U</i> = −<i>mB</i> cos <i>θ</i> = −(1.35) cos 30° = −1.35 × 0.866',
          '(c) <i>W</i> = <i>mB</i>(cos <i>θ</i><sub>1</sub> − cos <i>θ</i><sub>2</sub>) = 1.35(cos 30° − cos 90°) = 1.35(0.866 − 0)',
          '<b>Presentation note:</b> always carry the unit through every line and keep the negative sign on <i>U</i> — it encodes that <i>θ</i> = 30° is below the 90° reference, so the dipole is in a lower-energy (more favourable) orientation.',
        ],
        ans: '(a) <i>τ</i> = 0.675 N·m; (b) <i>U</i> = −1.17 J; (c) <i>W</i> = 1.17 J',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A short bar magnet produces a field of 32 μT at a point 25 cm from its centre on the axial line. What is the field at a point the same 25 cm away on the equatorial line?',
        steps: [
          '<b>Don’t compute anything from scratch.</b> Both points are at the same distance, so <i>B</i><sub>axial</sub>/<i>B</i><sub>equatorial</sub> = (2<i>m</i>/<i>r</i><sup>3</sup>)/(<i>m</i>/<i>r</i><sup>3</sup>) = 2. Therefore<br><i>B</i><sub>equatorial</sub> = <i>B</i><sub>axial</sub>/2 = 32/2',
          '<b>The trap:</b> the tempting wrong answers are 32 μT (assuming the field is the same all around) and 64 μT (doubling instead of halving). Lock in the rule: axial is the bigger one, exactly twice the equatorial at equal distance. No calculator needed — that’s a 10-second NEET question.',
        ],
        ans: '<i>B</i><sub>equatorial</sub> = 16 μT.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (links dipole moment + oscillations)',
        q: 'A bar magnet oscillating in a uniform field has a time period <i>T</i> = 3.0 s. It is then cut into two equal pieces by a cut perpendicular to its length, and one piece is set oscillating in the same field. Find the new time period.',
        steps: [
          'This couples two ideas: how cutting changes both the <b>moment of inertia</b> <i>I</i> and the <b>magnetic moment</b> <i>m</i>, fed into <i>T</i> = 2π√(<i>I</i>/(<i>mB</i>)).',
          'Let the original magnet have mass <i>M</i><sub>0</sub>, length <i>L</i>, so <i>I</i> = <i>M</i><sub>0</sub><i>L</i><sup>2</sup>/12 and moment <i>m</i>. Cutting perpendicular to length halves both mass and length:<br><i>I</i>′ = (<i>M</i><sub>0</sub>/2)(<i>L</i>/2)<sup>2</sup>/12 = (1/8) · <i>M</i><sub>0</sub><i>L</i><sup>2</sup>/12 = <i>I</i>/8,   <i>m</i>′ = <i>m</i>/2.',
          'Then<br><i>T</i>′ = 2π√(<i>I</i>′/(<i>m</i>′<i>B</i>)) = 2π√((<i>I</i>/8)/((<i>m</i>/2)<i>B</i>)) = 2π√((1/4) · <i>I</i>/(<i>mB</i>)) = <i>T</i>/2',
          'The factor traces to (<i>I</i>′/<i>m</i>′)/(<i>I</i>/<i>m</i>) = (1/8)/(1/2) = 1/4, whose square root is 1/2. The common error is to track only the moment of inertia and forget that <i>m</i> halves too.',
        ],
        ans: '<i>T</i>′ = 1.5 s.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (general dipole field)',
        q: 'A short bar magnet of moment <i>m</i> = 0.60 A·m<sup>2</sup> sits at the origin pointing along +<i>x</i>. Find the magnitude of the magnetic field at a point <i>P</i> located <i>r</i> = 0.10 m from the centre, along a direction making <i>θ</i> = 60° with the axis, and the angle this field makes with the line <i>OP</i>.',
        steps: [
          'The field of a point dipole at polar angle <i>θ</i> has a radial and a transverse component:<br><i>B</i><sub><i>r</i></sub> = (μ<sub>0</sub>/(4π)) (2<i>m</i> cos <i>θ</i>)/<i>r</i><sup>3</sup>,   <i>B</i><sub><i>θ</i></sub> = (μ<sub>0</sub>/(4π)) (<i>m</i> sin <i>θ</i>)/<i>r</i><sup>3</sup>.',
          'The resultant magnitude is<br><i>B</i> = (μ<sub>0</sub>/(4π)) (<i>m</i>/<i>r</i><sup>3</sup>) √(4 cos<sup>2</sup> <i>θ</i> + sin<sup>2</sup> <i>θ</i>) = (μ<sub>0</sub>/(4π)) (<i>m</i>/<i>r</i><sup>3</sup>) √(1 + 3 cos<sup>2</sup> <i>θ</i>).',
          'Plugging in μ<sub>0</sub>/(4π) = 10<sup>−7</sup>, <i>m</i> = 0.60, <i>r</i><sup>3</sup> = 10<sup>−3</sup>:<br><i>B</i> = 10<sup>−7</sup> × (0.60/10<sup>−3</sup>) × √(1 + 3(0.5)<sup>2</sup>) = (6 × 10<sup>−5</sup>)√1.75 = 6 × 10<sup>−5</sup> × 1.323',
          'The field makes an angle <i>α</i> with <i>OP</i> given by tan <i>α</i> = <i>B</i><sub><i>θ</i></sub>/<i>B</i><sub><i>r</i></sub> = sin <i>θ</i>/(2 cos <i>θ</i>) = ½ tan <i>θ</i>:<br>tan <i>α</i> = ½ tan 60° = ½(1.732) = 0.866',
          '<b>Sanity checks:</b> at <i>θ</i> = 0° this gives <i>B</i> = (μ<sub>0</sub>/(4π)) 2<i>m</i>/<i>r</i><sup>3</sup> (pure axial) and at <i>θ</i> = 90° it gives (μ<sub>0</sub>/(4π)) <i>m</i>/<i>r</i><sup>3</sup> (pure equatorial) — the two special cases drop straight out.',
        ],
        ans: '<i>B</i> ≈ 7.9 × 10<sup>−5</sup> T; <i>α</i> ≈ 40.9°',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A bar magnet of moment 2.0 A·m<sup>2</sup> is placed at 60° to a uniform field of 0.15 T. Find the torque acting on it.',
            a: '0.26 N·m',
          },
          {
            q: '[NEET] The axial field of a short bar magnet at a distance of 10 cm is 50 μT. What is the equatorial field at the same distance?',
            a: '25 μT',
          },
          {
            q: '[JEE Main] Calculate the work done in rotating a magnet of moment 1.2 A·m<sup>2</sup> from its stable equilibrium position to 120° in a uniform field of 0.25 T.',
            a: '0.45 J',
          },
          {
            q: '[JEE Main] A magnet of moment 0.80 A·m<sup>2</sup> and moment of inertia 5.0 × 10<sup>−5</sup> kg·m<sup>2</sup> oscillates in a uniform field of 0.040 T. Find its time period.',
            a: '0.25 s',
          },
          {
            q: '[JEE Advanced] A short bar magnet of moment 1.0 A·m<sup>2</sup> lies along the x-axis. At what distance on its axial line is the magnetic field equal to 8.0 × 10<sup>−6</sup> T?',
            a: '≈ 0.29 m',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A straight bar magnet of magnetic moment <i>M</i> is bent into a semicircular arc without changing its length. The new magnetic moment is:',
        opts: [
          {
            label: '<i>M</i>',
            nudge: '<b>(a)</b> assumes bending leaves the moment unchanged — forgets the pole separation shrank.',
          },
          { label: '2<i>M</i>/π', nudge: null },
          {
            label: '<i>M</i>/π',
            nudge: '<b>(c)</b> uses the radius <i>L</i>/π instead of the diameter 2<i>L</i>/π as the new separation.',
          },
          { label: 'π<i>M</i>/2', nudge: '<b>(d)</b> inverts the ratio.' },
        ],
        correct: 1,
        solution: 'Moment depends on the straight-line separation between poles, not on the wire’s length. Originally that separation is <i>L</i>, so <i>M</i> = <i>q</i><sub>m</sub><i>L</i>. After bending the length <i>L</i> into a semicircle, <i>L</i> = π<i>R</i> ⇒ <i>R</i> = <i>L</i>/π, and the poles now sit at the two ends of the diameter, separation 2<i>R</i> = 2<i>L</i>/π. Thus <i>M</i>′ = <i>q</i><sub>m</sub> · 2<i>L</i>/π = 2<i>M</i>/π.',
      },
      {
        t: 'mcq',
        q: 'The magnetic field at a point on the equatorial line of a short bar magnet is directed:',
        opts: [
          { label: 'along <i>m⃗</i>', nudge: '<b>(a)</b> is the axial direction; classic axial/equatorial swap.' },
          { label: 'opposite to <i>m⃗</i>', nudge: null },
          {
            label: 'perpendicular to <i>m⃗</i>',
            nudge: '<b>(c)</b> mistakes the position (perpendicular to the axis) for the field direction.',
          },
          {
            label: 'radially away from the magnet',
            nudge: '<b>(d)</b> treats the magnet like an isolated charge — but monopoles don’t exist, so the field is dipolar, not radial.',
          },
        ],
        correct: 1,
        solution: 'On the equatorial (broadside-on) line, the dipole field points anti-parallel to <i>m⃗</i> — directly opposite to the axial case.',
      },
      {
        t: 'mcq',
        q: 'Which statement about the magnetic field lines of a bar magnet is <b>INCORRECT</b>?',
        opts: [
          { label: 'They form continuous closed loops.', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are all true properties.' },
          { label: 'Inside the magnet they run from S to N.', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are all true properties.' },
          { label: 'Two field lines may cross where the field is strongest.', nudge: null },
          {
            label: 'The tangent at any point gives the direction of <i>B⃗</i>.',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are all true properties.',
          },
        ],
        correct: 2,
        solution: 'This is the false one. Field lines never intersect — a crossing would mean two different directions for <i>B⃗</i> at one point, which is impossible. The trap in <b>(c)</b>: students associate “strong field” with “crowded lines” and slide from crowded to crossing. Crowded, yes; crossing, never.',
      },
      {
        t: 'mcq',
        q: 'A bar magnet of moment 3.0 A·m<sup>2</sup> rests aligned with a uniform field of 0.20 T. The work done to rotate it to the unstable equilibrium position is:',
        opts: [
          {
            label: '0.6 J',
            nudge: '<b>(a)</b> drops the factor of 2 by forgetting cos 180° = −1 (treats it as 0).',
          },
          { label: '1.2 J', nudge: null },
          {
            label: '0 J',
            nudge: '<b>(c)</b> reasons “both ends are equilibria, so net work is zero” — but PE differs between them.',
          },
          { label: '0.3 J', nudge: '<b>(d)</b> 0.3 J is <i>mB</i>(1 − cos 60°), the work for turning through only 60°; the turn from 0° to 180° needs <i>mB</i>(1 − cos 180°) = 2<i>mB</i>.' },
        ],
        correct: 1,
        solution: 'Stable equilibrium is <i>θ</i><sub>1</sub> = 0°, unstable is <i>θ</i><sub>2</sub> = 180°:<br><i>W</i> = <i>mB</i>(cos 0° − cos 180°) = (3.0)(0.20)(1 − (−1)) = 0.6 × 2 = 1.2 J.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Swapping axial and equatorial.</b> The single most common slip. Axial field is twice the equatorial at equal distance and points along <i>m⃗</i>; equatorial points opposite. Mixing these costs easy marks.',
          '<b>Losing the minus sign in <i>U</i> = −<i>mB</i> cos <i>θ</i>.</b> Drop it and your stable/unstable equilibria flip. <i>θ</i> = 0° must come out as the lowest energy.',
          '<b>Confusing where torque vs. energy is extremal.</b> Torque is maximum at 90° and zero at 0°/180°; energy is minimum at 0° and maximum at 180°. They peak in different places.',
          '<b>Assuming a uniform field pushes the magnet.</b> In a uniform field the net force is exactly zero — only a torque acts. A net translational force requires a non-uniform field.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any “field at the same distance” comparison, never plug numbers — just use the ratio <i>B</i><sub>axial</sub> ∶ <i>B</i><sub>equatorial</sub> = 2 ∶ 1. And for cutting/bending problems, ask only one question: what happens to pole strength and to pole separation? Everything else follows.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Dipole moment',
            note: '<i>m⃗</i> = <i>NIA⃗</i> = <i>q</i><sub>m</sub>(2<i>l</i>), unit A·m<sup>2</sup>, dimension [L<sup>2</sup> A]; points S → N inside the magnet.',
          },
          {
            f: 'Torque',
            note: '<i>τ⃗</i> = <i>m⃗</i> × <i>B⃗</i>, |<i>τ</i>| = <i>mB</i> sin <i>θ</i> — max at 90°, zero at 0°/180°.',
          },
          {
            f: 'Energy',
            note: '<i>U</i> = −<i>m⃗</i> · <i>B⃗</i> = −<i>mB</i> cos <i>θ</i> — min (stable) at 0°, max (unstable) at 180°.',
          },
          { f: 'Work', note: '<i>W</i> = <i>mB</i>(cos <i>θ</i><sub>1</sub> − cos <i>θ</i><sub>2</sub>).' },
          {
            f: 'Short-magnet fields',
            note: '<i>B</i><sub>axial</sub> = (μ<sub>0</sub>/(4π)) 2<i>m</i>/<i>r</i><sup>3</sup> (along <i>m⃗</i>), <i>B</i><sub>equatorial</sub> = (μ<sub>0</sub>/(4π)) <i>m</i>/<i>r</i><sup>3</sup> (opposite <i>m⃗</i>); ratio 2 ∶ 1.',
          },
          {
            f: 'Field lines',
            note: 'closed loops, never intersect, S → N inside, density ∝ strength; monopoles don’t exist.',
          },
          { f: 'Oscillation', note: '<i>T</i> = 2π√(<i>I</i>/(<i>mB</i>)).' },
        ],
        aids: [
          '“Axial is Ahead (along <i>m⃗</i>), Equatorial is Against (opposite <i>m⃗</i>).”',
          '“Torque turns, energy stores” — torque peaks sideways (90°), energy bottoms out when aligned.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 340–348 ─────────────────────────
  {
    n: '02',
    title: 'Earth’s Magnetism',
    kalam: 'To pin down the Earth’s field at any spot, you cannot just give one number — a magnetic field is a vector, so you need direction and magnitude.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A dependable source of 1 question in JEE Main and NEET, usually on resolving the field into components (<i>B</i><sub>H</sub>, <i>B</i><sub>V</sub>, <i>δ</i>) or the dip–latitude relation. JEE Advanced favours apparent-dip combinations and the full dipole model. CBSE Boards reliably ask a 2–3 mark question defining the three elements or deriving tan <i>δ</i> = 2 tan <i>λ</i>.',
      },
      {
        t: 'p',
        html: '<b>Notation (from Topic 01):</b> <i>m⃗</i>, <i>B</i>, μ<sub>0</sub> carry their earlier meanings. New to this topic: <i>B</i><sub>E</sub> = total earth’s field, <i>B</i><sub>H</sub> = horizontal component, <i>B</i><sub>V</sub> = vertical component, <i>δ</i> = angle of dip (inclination), <i>α</i> = declination, <i>λ</i> = magnetic latitude. We use <i>δ</i> for dip rather than NCERT’s “<i>I</i>” to avoid colliding with moment of inertia <i>I</i> from the oscillation formula.',
      },
      {
        t: 'p',
        html: 'Hold a compass anywhere in India and the needle quietly swings until it settles, pointing roughly north. That everyday miracle is the headline of this topic: <b>the entire Earth behaves like one colossal bar magnet.</b> Buried at its centre, tilted slightly, sits an imaginary dipole whose field reaches out through the crust, the oceans, and the air, and gently turns your compass needle into line — exactly the torque-on-a-dipole story from Topic 01, now playing out on a planetary stage.',
      },
      {
        t: 'p',
        html: 'But the planet plays a small trick on us. The needle’s north pole points towards the geographic North. Since unlike poles attract, the magnetic pole sitting near the geographic North Pole must actually be a magnetic <b>South</b> pole. So the Earth’s internal “bar magnet” has its S-end up near the Arctic. This isn’t a trivia point — it is why field lines outside the Earth run from the southern geographic region to the northern one, and it quietly explains the direction every later formula assumes.',
      },
      {
        t: 'p',
        html: 'To pin down the Earth’s field at any spot, you cannot just give one number — a magnetic field is a vector, so you need direction and magnitude. Geophysicists settle this with <b>three elements</b>:<br>1. <b>Declination</b> (<i>α</i>) — the angle between true (geographic) north and magnetic north. Your compass shows magnetic north; the difference is declination. It’s why hikers and pilots “correct” their compass readings.<br>2. <b>Dip or inclination</b> (<i>δ</i>) — the angle the Earth’s total field makes with the horizontal. The field doesn’t lie flat along the ground; it generally tilts into the Earth.<br>3. <b>Horizontal component</b> (<i>B</i><sub>H</sub>) — the part of the field parallel to the ground. This is the only part an ordinary (horizontally swinging) compass feels.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine the Earth’s field at your feet as an arrow buried partly into the ground, like a fishing rod jammed into a riverbank at an angle. <b>Declination</b> is how far the arrow’s shadow on the ground swings away from true north (a left/right error). <b>Dip</b> is how steeply the arrow tilts down into the ground (an up/down tilt). And the <b>horizontal component</b> is just the length of that ground-shadow. Three numbers — one for the sideways twist, one for the downward tilt, one for the on-the-ground strength — and the field is completely specified.',
      },
      {
        t: 'p',
        html: 'The dip changes dramatically as you travel. Stand on the <b>magnetic equator</b> and the field is purely horizontal: dip is 0°. Walk to a <b>magnetic pole</b> and the field plunges straight down: dip is 90° — a horizontal compass becomes useless there and you must switch to a dip needle that swings in a vertical plane. In India the declination happens to be small (only about 0°41′E at Delhi and 0°58′W at Mumbai), which is lucky — a compass here points very nearly to true north.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> (1) The <b>point-dipole model</b> treats all of Earth’s magnetism as a single dipole at the centre; it captures the broad pattern but ignores local rock deposits and the slow drift of the poles. (2) The neat relation tan <i>δ</i> = 2 tan <i>λ</i> assumes this centred, symmetric dipole — real local anomalies bend it. (3) The dipole axis is tilted about 11.3° from the rotation axis, so magnetic and geographic latitudes differ; “<i>λ</i>” below always means magnetic latitude.',
      },
      { t: 'fig', id: 'p12-05-fig-5.3' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: '<b>The three elements</b> completely specify the field at a place: declination <i>α</i>, dip <i>δ</i>, and horizontal component <i>B</i><sub>H</sub>.',
      },
      {
        t: 'formula',
        kicker: 'Resolution of the total field (<i>δ</i> measured from the horizontal)',
        main: '<i>B</i><sub>H</sub> = <i>B</i><sub>E</sub> cos <i>δ</i><br><i>B</i><sub>V</sub> = <i>B</i><sub>E</sub> sin <i>δ</i><br>tan <i>δ</i> = <i>B</i><sub>V</sub>/<i>B</i><sub>H</sub><br><i>B</i><sub>E</sub> = √(<i>B</i><sub>H</sub><sup>2</sup> + <i>B</i><sub>V</sub><sup>2</sup>)',
        legend: [],
        note: '<i>B</i><sub>E</sub>, <i>B</i><sub>H</sub>, <i>B</i><sub>V</sub> in tesla (or gauss; 1 G = 10<sup>−4</sup> T). Dimensional formula of any of these: [M<sup>1</sup> L<sup>0</sup> T<sup>−2</sup> A<sup>−1</sup>]. <i>δ</i> and <i>α</i> are dimensionless angles.',
      },
      {
        t: 'formula',
        kicker: 'Dip–latitude relation (centred dipole model)',
        main: 'tan <i>δ</i> = 2 tan <i>λ</i>',
        legend: ['<i>λ</i> = the magnetic latitude'],
        note: 'Dip is 0° at the magnetic equator (<i>λ</i> = 0) and 90° at the magnetic poles (<i>λ</i> = 90°).',
      },
      {
        t: 'formula',
        kicker: 'Field components in the dipole model (Earth’s moment <i>M</i>, radius <i>r</i>)',
        main: '<i>B</i><sub>V</sub> = (μ<sub>0</sub>/(4π)) (2<i>M</i> sin <i>λ</i>)/<i>r</i><sup>3</sup><br><i>B</i><sub>H</sub> = (μ<sub>0</sub>/(4π)) (<i>M</i> cos <i>λ</i>)/<i>r</i><sup>3</sup><br><i>B</i><sub>E</sub> = (μ<sub>0</sub>/(4π)) (<i>M</i> √(1 + 3 sin<sup>2</sup> <i>λ</i>))/<i>r</i><sup>3</sup>',
        legend: [],
        note: '<i>B</i><sub>E</sub> is <b>minimum at the equator</b> and <b>maximum (twice the equatorial value) at the poles</b>. (This is the same 1 + 3 cos<sup>2</sup> <i>θ</i> dipole field from Topic 01, with <i>θ</i> = 90° − <i>λ</i>.)',
      },
      {
        t: 'formula',
        kicker: 'Apparent dip (dip circle’s plane at angle <i>β</i> to the magnetic meridian)',
        main: 'tan <i>δ</i>′ = tan <i>δ</i>/cos <i>β</i><br>For two mutually perpendicular vertical planes giving apparent dips <i>δ</i><sub>1</sub>, <i>δ</i><sub>2</sub>:<br>cot<sup>2</sup> <i>δ</i> = cot<sup>2</sup> <i>δ</i><sub>1</sub> + cot<sup>2</sup> <i>δ</i><sub>2</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Special locus lines on the Earth’s surface:</b> Isogonic lines join places of equal declination; agonic lines join places of <b>zero</b> declination. Isoclinic lines join places of equal dip; the aclinic line (zero dip) is the <b>magnetic equator</b>.',
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      { t: 'p', html: '<b>(A) Resolving the Earth’s field — the procedure</b>' },
      {
        t: 'p',
        html: 'At any place the total field <i>B</i><sub>E</sub> lies in the magnetic meridian (the vertical plane through the magnetic N–S line), tilted below the horizontal by the dip <i>δ</i>. To work with it, we always split it into a horizontal and a vertical leg of a right triangle:<br>• The horizontal leg (adjacent to <i>δ</i>): <i>B</i><sub>H</sub> = <i>B</i><sub>E</sub> cos <i>δ</i>.<br>• The vertical leg (opposite to <i>δ</i>): <i>B</i><sub>V</sub> = <i>B</i><sub>E</sub> sin <i>δ</i>.',
      },
      {
        t: 'p',
        html: '<b>Why these and not the reverse?</b> Because dip is defined <b>from the horizontal</b>. The angle’s “adjacent” side is the horizontal one, so cosine naturally pairs with <i>B</i><sub>H</sub>. Dividing the two gives tan <i>δ</i> = <i>B</i><sub>V</sub>/<i>B</i><sub>H</sub>, and Pythagoras rebuilds the whole: <i>B</i><sub>E</sub> = √(<i>B</i><sub>H</sub><sup>2</sup> + <i>B</i><sub>V</sub><sup>2</sup>). This single triangle answers almost every numerical in the topic.',
      },
      { t: 'p', html: '<b>(B) Deriving the Dip–Latitude Relation (the dipole model)</b>' },
      {
        t: 'p',
        html: 'Model the Earth as a short dipole of moment <i>M</i> at the centre, distance <i>r</i> to the surface. We import the general dipole field from Topic 01, written in terms of the angle <i>θ</i> measured <b>from the dipole (magnetic) axis</b>:<br><i>B</i><sub><i>r</i></sub> = (μ<sub>0</sub>/(4π)) (2<i>M</i> cos <i>θ</i>)/<i>r</i><sup>3</sup>,   <i>B</i><sub><i>θ</i></sub> = (μ<sub>0</sub>/(4π)) (<i>M</i> sin <i>θ</i>)/<i>r</i><sup>3</sup>.',
      },
      {
        t: 'p',
        html: 'Now the geometry. At a point of <b>magnetic latitude</b> <i>λ</i> (measured up from the magnetic equator), the angle from the axis is <i>θ</i> = 90° − <i>λ</i>, so<br>cos <i>θ</i> = sin <i>λ</i>,   sin <i>θ</i> = cos <i>λ</i>.<br>At the surface, the radial direction <i>B</i><sub><i>r</i></sub> points <b>vertically</b> and the tangential direction <i>B</i><sub><i>θ</i></sub> points <b>horizontally</b>. Therefore<br><i>B</i><sub>V</sub> = (μ<sub>0</sub>/(4π)) (2<i>M</i> sin <i>λ</i>)/<i>r</i><sup>3</sup>,   <i>B</i><sub>H</sub> = (μ<sub>0</sub>/(4π)) (<i>M</i> cos <i>λ</i>)/<i>r</i><sup>3</sup>.<br>Taking the ratio, all the constants and the <i>r</i><sup>3</sup> cancel cleanly:<br>tan <i>δ</i> = <i>B</i><sub>V</sub>/<i>B</i><sub>H</sub> = (2<i>M</i> sin <i>λ</i>)/(<i>M</i> cos <i>λ</i>) = 2 tan <i>λ</i>.',
      },
      {
        t: 'p',
        html: 'The factor of 2 is the whole story — it is the same factor of 2 that separates the axial and equatorial dipole fields in Topic 01, surfacing here as the gap between dip and latitude. Check the extremes: at the equator <i>λ</i> = 0 ⇒ <i>δ</i> = 0 (horizontal field), and near the pole <i>λ</i> → 90° ⇒ <i>δ</i> → 90° (vertical field). The magnitude follows by Pythagoras:<br><i>B</i><sub>E</sub> = (μ<sub>0</sub>/(4π)) (<i>M</i>/<i>r</i><sup>3</sup>) √(cos<sup>2</sup> <i>λ</i> + 4 sin<sup>2</sup> <i>λ</i>) = (μ<sub>0</sub>/(4π)) (<i>M</i>/<i>r</i><sup>3</sup>) √(1 + 3 sin<sup>2</sup> <i>λ</i>),<br>smallest at the equator, twice as large at the poles.',
      },
      { t: 'p', html: '<b>(C) Apparent dip — why a tilted dip circle lies to you</b>' },
      {
        t: 'p',
        html: 'A dip circle measures dip correctly only when its plane sits in the magnetic meridian. Turn that plane by an angle <i>β</i> away from the meridian and the needle no longer feels the full horizontal component — it feels only the projection <i>B</i><sub>H</sub> cos <i>β</i>. The vertical component <i>B</i><sub>V</sub> is unchanged (it lies in every vertical plane). So the <b>apparent dip</b> <i>δ</i>′ obeys<br>tan <i>δ</i>′ = <i>B</i><sub>V</sub>/(<i>B</i><sub>H</sub> cos <i>β</i>) = tan <i>δ</i>/cos <i>β</i> ≥ tan <i>δ</i>.',
      },
      {
        t: 'p',
        html: 'The apparent dip is therefore always larger than the true dip. If you take readings in two perpendicular vertical planes (<i>β</i> and 90° − <i>β</i>), then tan <i>δ</i><sub>1</sub> = tan <i>δ</i>/cos <i>β</i> and tan <i>δ</i><sub>2</sub> = tan <i>δ</i>/sin <i>β</i>; squaring the cotangents and adding kills the <i>β</i> dependence:<br>cot<sup>2</sup> <i>δ</i><sub>1</sub> + cot<sup>2</sup> <i>δ</i><sub>2</sub> = (cos<sup>2</sup> <i>β</i> + sin<sup>2</sup> <i>β</i>)/tan<sup>2</sup> <i>δ</i> = cot<sup>2</sup> <i>δ</i>.',
      },
      { t: 'p', html: '<b>(D) Neutral points — where the magnet cancels the Earth</b>' },
      {
        t: 'p',
        html: 'If you lay a bar magnet on a table, its field superimposes on the Earth’s horizontal field <i>B</i><sub>H</sub>. At certain spots the two are equal and opposite, so the net horizontal field is zero — iron filings there point nowhere and a compass spins freely. These are <b>neutral (null) points</b>, and their location depends on how the magnet is oriented:<br>• <b>North pole pointing geographic north:</b> the magnet’s field reinforces <i>B</i><sub>H</sub> along the axis but opposes it on the equatorial line, so the neutral points sit on the <b>equatorial line</b>. Using the short-magnet equatorial field from Topic 01, at distance <i>d</i>:<br>(μ<sub>0</sub>/(4π)) <i>m</i>/<i>d</i><sup>3</sup> = <i>B</i><sub>H</sub>.<br>• <b>North pole pointing geographic south:</b> the opposition now happens along the axis, so the neutral points sit on the <b>axial line</b>, where<br>(μ<sub>0</sub>/(4π)) 2<i>m</i>/<i>d</i><sup>3</sup> = <i>B</i><sub>H</sub>.',
      },
      {
        t: 'p',
        html: 'This is a direct, satisfying payoff from Topic 01: the same axial and equatorial expressions reappear, now set equal to a piece of the Earth’s own field. Measuring <i>d</i> and knowing <i>B</i><sub>H</sub> lets you find the magnet’s moment <i>m</i> — the principle behind a deflection magnetometer.',
      },
      { t: 'fig', id: 'p12-05-fig-5.4' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'At a certain place the horizontal component of the Earth’s magnetic field is <i>B</i><sub>H</sub> = 0.40 G and the angle of dip is 30°. Find (a) the total field <i>B</i><sub>E</sub> and (b) the vertical component <i>B</i><sub>V</sub>.',
        steps: [
          '<b>Given:</b> <i>B</i><sub>H</sub> = 0.40 G, <i>δ</i> = 30°.',
          '(a) From <i>B</i><sub>H</sub> = <i>B</i><sub>E</sub> cos <i>δ</i>:<br><i>B</i><sub>E</sub> = <i>B</i><sub>H</sub>/cos <i>δ</i> = 0.40/cos 30° = 0.40/0.866',
          '(b) <i>B</i><sub>V</sub> = <i>B</i><sub>E</sub> sin <i>δ</i> = 0.46 × sin 30° = 0.46 × 0.5',
          '<b>Check:</b> <i>B</i><sub>V</sub> = <i>B</i><sub>H</sub> tan <i>δ</i> = 0.40 × tan 30° = 0.40 × 0.577 = 0.23 G ✓ — both routes agree, and <i>B</i><sub>E</sub> > <i>B</i><sub>H</sub> as it must.',
        ],
        ans: '(a) <i>B</i><sub>E</sub> = 0.46 G; (b) <i>B</i><sub>V</sub> = 0.23 G',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The angle of dip at a place is 45°. What is the magnetic latitude of the place?',
        steps: [
          '<b>Don’t equate dip with latitude — that’s the trap.</b> Use tan <i>δ</i> = 2 tan <i>λ</i>:<br>tan 45° = 2 tan <i>λ</i> ⇒ 1 = 2 tan <i>λ</i> ⇒ tan <i>λ</i> = 0.5 ⇒ <i>λ</i> = tan<sup>−1</sup>(0.5)',
          'The tempting wrong answers are 45° (assuming dip = latitude — forgetting the factor of 2) and 22.5° (halving the angle instead of the tangent). Burn in the rule: <b>dip is steeper than latitude</b>, governed by tan <i>δ</i> = 2 tan <i>λ</i>. The latitude is always the smaller number.',
        ],
        ans: '<i>λ</i> ≈ 26.6°.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (apparent dip in two planes)',
        q: 'A dip circle shows an apparent dip of 30° when its plane is in one vertical orientation, and 45° when rotated to the perpendicular vertical plane. Find the true dip.',
        steps: [
          'The two planes are mutually perpendicular, so use the combination rule:<br>cot<sup>2</sup> <i>δ</i> = cot<sup>2</sup> <i>δ</i><sub>1</sub> + cot<sup>2</sup> <i>δ</i><sub>2</sub> = cot<sup>2</sup> 30° + cot<sup>2</sup> 45° = 3 + 1 = 4.<br>cot <i>δ</i> = 2 ⇒ tan <i>δ</i> = 0.5 ⇒ <i>δ</i> = tan<sup>−1</sup>(0.5)',
          'Notice the true dip (26.6°) is smaller than both apparent dips (30°, 45°) — exactly as the theory of (C) in the CBSE board derivations and key procedures demands, since every tilt of the plane inflates the reading. A common error is to average the two apparent dips (37.5°), which ignores the geometry entirely.',
        ],
        ans: '<i>δ</i> ≈ 26.6°.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (full dipole model)',
        q: 'Treating the Earth as a centred dipole, at a location the horizontal and vertical components of the field are equal. (a) Find the magnetic latitude. (b) If the field at the magnetic equator is <i>B</i><sub>0</sub>, express the total field <i>B</i><sub>E</sub> at this location in terms of <i>B</i><sub>0</sub>.',
        steps: [
          '(a) <i>B</i><sub>V</sub> = <i>B</i><sub>H</sub> ⇒ tan <i>δ</i> = 1 ⇒ <i>δ</i> = 45°. Then from tan <i>δ</i> = 2 tan <i>λ</i>:<br>tan <i>λ</i> = ½ tan 45° = 0.5 ⇒ <i>λ</i> = tan<sup>−1</sup>(0.5)',
          '(b) At the equator (<i>λ</i> = 0) the field is <i>B</i><sub>0</sub> = (μ<sub>0</sub>/(4π)) <i>M</i>/<i>r</i><sup>3</sup> (the √(1 + 3 sin<sup>2</sup> 0) = 1 case). At latitude <i>λ</i>:<br><i>B</i><sub>E</sub> = <i>B</i><sub>0</sub>√(1 + 3 sin<sup>2</sup> <i>λ</i>).',
          'With tan <i>λ</i> = 0.5 we get sin <i>λ</i> = 0.5/√1.25 = 0.447, so sin<sup>2</sup> <i>λ</i> = 0.20 and<br><i>B</i><sub>E</sub> = <i>B</i><sub>0</sub>√(1 + 3(0.20)) = <i>B</i><sub>0</sub>√1.6',
          'The field has grown by about 26% from the equator to this mid-latitude site — consistent with the model’s prediction that <i>B</i><sub>E</sub> climbs from <i>B</i><sub>0</sub> at the equator to 2<i>B</i><sub>0</sub> at the poles.',
        ],
        ans: '(a) <i>λ</i> ≈ 26.6°; (b) <i>B</i><sub>E</sub> ≈ 1.26 <i>B</i><sub>0</sub>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] At a place the horizontal component of the Earth’s field is 0.32 G and the dip is 60°. Find the total field <i>B</i><sub>E</sub>.',
            a: '0.64 G',
          },
          {
            q: '[NEET] State the angle of dip at (i) the magnetic equator and (ii) a magnetic pole.',
            a: '(i) 0° (ii) 90°',
          },
          {
            q: '[JEE Main] The total magnetic field at a place is 0.50 G and the angle of dip is 30°. Find the vertical component <i>B</i><sub>V</sub>.',
            a: '0.25 G',
          },
          {
            q: '[JEE Main] A short bar magnet of moment 0.50 A·m<sup>2</sup> is placed in the magnetic meridian with its north pole pointing geographic north, where <i>B</i><sub>H</sub> = 0.50 G. Find the distance of the neutral points from the centre of the magnet.',
            a: '0.10 m (10 cm, on the equatorial line)',
          },
          {
            q: '[JEE Advanced] A dip circle reads apparent dips of 30° and 60° in two mutually perpendicular vertical planes. Determine the true dip.',
            a: '≈ 28.7°',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The angle of dip at the magnetic equator is:',
        opts: [
          { label: '0°', nudge: null },
          { label: '45°', nudge: '<b>(b)</b> is a midway guess: a dip of 45° needs <i>B</i><sub>V</sub> = <i>B</i><sub>H</sub>, which in the dipole model happens at <i>λ</i> ≈ 26.6°, not at the equator.' },
          { label: '90°', nudge: '<b>(c)</b> is the value at the poles — the classic equator/pole swap.' },
          {
            label: 'depends on longitude',
            nudge: '<b>(d)</b> misreads the dipole model: dip depends on latitude, not longitude.',
          },
        ],
        correct: 0,
        solution: 'At the magnetic equator the field is purely horizontal, so <i>B</i><sub>V</sub> = 0 and tan <i>δ</i> = <i>B</i><sub>V</sub>/<i>B</i><sub>H</sub> = 0 ⇒ <i>δ</i> = 0°.',
      },
      {
        t: 'mcq',
        q: 'A dip needle is set to swing in a vertical plane that is <b>perpendicular</b> to the magnetic meridian. It will come to rest at an apparent dip of:',
        opts: [
          {
            label: '0°',
            nudge: '<b>(a)</b> wrongly assumes “no horizontal field” makes the needle lie flat — it’s the opposite.',
          },
          { label: 'equal to the true dip', nudge: '<b>(b)</b> forgets that orientation matters at all.' },
          {
            label: 'between 0° and the true dip',
            nudge: '<b>(c)</b> has the inequality backwards; apparent dip is never less than true dip.',
          },
          { label: '90°', nudge: null },
        ],
        correct: 3,
        solution: 'In that plane the effective horizontal component is <i>B</i><sub>H</sub> cos 90° = 0, so the needle feels only the vertical <i>B</i><sub>V</sub> and stands straight down: apparent dip = 90°. Formally tan <i>δ</i>′ = tan <i>δ</i>/cos 90° → ∞.',
      },
      {
        t: 'mcq',
        q: 'If the angle of dip at a place is 45°, the magnetic latitude is:',
        opts: [
          { label: '45°', nudge: '<b>(a)</b> assumes dip = latitude (drops the factor of 2).' },
          {
            label: 'tan<sup>−1</sup>(2)',
            nudge: '<b>(b)</b> applies the factor of 2 the wrong way (tan <i>λ</i> = 2 tan <i>δ</i>).',
          },
          { label: 'tan<sup>−1</sup>(0.5)', nudge: null },
          { label: '30°', nudge: '<b>(d)</b> is a plausible-looking round number with no derivation behind it.' },
        ],
        correct: 2,
        solution: 'tan 45° = 2 tan <i>λ</i> ⇒ tan <i>λ</i> = 0.5 ⇒ <i>λ</i> = tan<sup>−1</sup>(0.5) ≈ 26.6°.',
      },
      {
        t: 'mcq',
        q: 'At a location <i>B</i><sub>H</sub> = 0.34 G and <i>B</i><sub>V</sub> = 0.34 G. The total field and the dip are respectively:',
        opts: [
          { label: '0.48 G, 45°', nudge: null },
          {
            label: '0.68 G, 45°',
            nudge: '<b>(b)</b> adds the magnitudes (0.34 + 0.34) instead of using Pythagoras.',
          },
          {
            label: '0.34 G, 0°',
            nudge: '<b>(c)</b> assumes equal components somehow cancel — they’re perpendicular, not opposite.',
          },
          { label: '0.48 G, 90°', nudge: '<b>(d)</b> gets the magnitude right but botches the dip.' },
        ],
        correct: 0,
        solution: '<i>B</i><sub>E</sub> = √(<i>B</i><sub>H</sub><sup>2</sup> + <i>B</i><sub>V</sub><sup>2</sup>) = 0.34√2 = 0.48 G; tan <i>δ</i> = <i>B</i><sub>V</sub>/<i>B</i><sub>H</sub> = 1 ⇒ <i>δ</i> = 45°.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing dip with latitude.</b> tan <i>δ</i> = 2 tan <i>λ</i>, not <i>δ</i> = <i>λ</i>. The factor of 2 means dip is always steeper than the latitude; only at 0° and 90° do they coincide.',
          '<b>True vs. apparent dip backwards.</b> A dip circle out of the meridian reads more than the true dip (<i>δ</i>′ ≥ <i>δ</i>), never less. If a problem gives you a reading and an orientation, expect the true dip to be the smaller value.',
          '<b>Swapping sine and cosine in the components.</b> Dip is measured from the horizontal, so <i>B</i><sub>H</sub> = <i>B</i><sub>E</sub> cos <i>δ</i> and <i>B</i><sub>V</sub> = <i>B</i><sub>E</sub> sin <i>δ</i>. Pair cosine with the horizontal leg every time.',
          '<b>Polarity of the Earth.</b> The Earth’s magnetic pole near the geographic North is a magnetic South pole — that’s why a compass north end is pulled toward it. Stating it loosely costs marks in assertion–reason questions.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any “given two of {<i>B</i><sub>E</sub>, <i>B</i><sub>H</sub>, <i>B</i><sub>V</sub>, <i>δ</i>}, find the rest” problem, draw the single right triangle (<i>B</i><sub>E</sub> as hypotenuse, <i>δ</i> from the horizontal) and read everything off it — no formula memorisation needed. And keep the two anchor facts in your pocket: equator → dip 0°, field weakest; pole → dip 90°, field strongest (twice equatorial).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Three elements',
            note: 'declination <i>α</i>, dip <i>δ</i>, horizontal component <i>B</i><sub>H</sub> — together they fix the field vector.',
          },
          {
            f: 'Resolution triangle',
            note: '<i>B</i><sub>H</sub> = <i>B</i><sub>E</sub> cos <i>δ</i>, <i>B</i><sub>V</sub> = <i>B</i><sub>E</sub> sin <i>δ</i>, tan <i>δ</i> = <i>B</i><sub>V</sub>/<i>B</i><sub>H</sub>, <i>B</i><sub>E</sub> = √(<i>B</i><sub>H</sub><sup>2</sup> + <i>B</i><sub>V</sub><sup>2</sup>).',
          },
          {
            f: 'Dipole model',
            note: 'tan <i>δ</i> = 2 tan <i>λ</i>; <i>B</i><sub>E</sub> = (μ<sub>0</sub>/(4π)) (<i>M</i>/<i>r</i><sup>3</sup>) √(1 + 3 sin<sup>2</sup> <i>λ</i>) — min at equator, max (2×) at poles.',
          },
          {
            f: 'Equator',
            note: '<i>δ</i> = 0° (field horizontal). <b>Poles:</b> <i>δ</i> = 90° (field vertical).',
          },
          {
            f: 'Apparent dip',
            note: 'tan <i>δ</i>′ = tan <i>δ</i>/cos <i>β</i>; for perpendicular planes cot<sup>2</sup> <i>δ</i> = cot<sup>2</sup> <i>δ</i><sub>1</sub> + cot<sup>2</sup> <i>δ</i><sub>2</sub>.',
          },
          {
            f: 'Locus lines',
            note: 'isogonic = equal declination; agonic = zero declination; isoclinic = equal dip; aclinic = magnetic equator (zero dip).',
          },
          {
            f: 'Earth’s polarity',
            note: 'geographic North ↔ magnetic South pole; dipole tilted ≈ 11.3° from the rotation axis.',
          },
        ],
        aids: [
          '“Dip Doubles the tangent” — tan <i>δ</i> = 2 tan <i>λ</i>.',
          '“AGonic = A Goose-egg of declination (zero)”; “isoGONIC = equal anGle (declination).”',
          '“Cos for the Crawling (horizontal), Sin for the Sinking (vertical).”',
        ],
      },
    ],
  },
];
