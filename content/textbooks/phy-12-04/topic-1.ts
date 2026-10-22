import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Topic 01: pp. 257–268 of the Class 12 Physics Master Reference,
 * word for word: Magnetic Field and the Biot–Savart Law, split at its
 * Sections 1 to 8 (Section 3 is the book’s “CBSE Board Derivations”). The
 * chapter’s title page and contents (p. 256 and the top of p. 257) are not
 * copied. Worked example 3 is the errata-corrected one (d = 5.0 cm,
 * B₁ = 40 μT, B ≈ 88 μT). Figures 4.1 (caption p. 258, drawn on p. 259),
 * 4.2 (pp. 261–262) and 4.3 (pp. 263–264) are redrawn in
 * lib/diagrams/physics-12-04.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 257–268 ─────────────────────────
  {
    n: '01',
    title: 'Magnetic Field and the Biot–Savart Law',
    kalam: 'The total field at any point is just the vector sum (superposition) of the contributions from all the elements.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the foundation stone of the whole chapter. JEE Main almost always carries 1–2 questions, usually combining the loop/arc field with superposition. JEE Advanced loves multi-wire and arc geometries where you must add field contributions as vectors. NEET tends toward direct “field at the centre” numericals and assertion–reason items on field direction. For CBSE Boards, the on-axis circular-loop derivation is a classic 3-mark question.',
      },
      {
        t: 'p',
        html: 'You already know one half of the magnetism story from electrostatics: a charge sitting still creates an <b>electric field</b> <i>E⃗</i>, and that field pushes other charges around. Now we add motion. The central experimental fact of this entire chapter is delightfully simple:<br><b>A moving charge — or equivalently, a current — produces a magnetic field <i>B⃗</i> in the space around it. And a magnetic field, in turn, pushes back on any other moving charge placed in it.</b>',
      },
      {
        t: 'p',
        html: 'So there are genuinely two sides to the coin, and it helps to keep them mentally separated:<br>1. <b>The “probe” side (force).</b> If a charge <i>q</i> moves with velocity <i>v⃗</i> through a region where a magnetic field <i>B⃗</i> already exists, it feels a force <i>F⃗</i> = <i>q</i> <i>v⃗</i> × <i>B⃗</i>. This is how we detect and define <i>B⃗</i> — it is literally the field that produces a sideways push on moving charges.<br>2. <b>The “source” side (Biot–Savart).</b> This topic is mostly about this side: how a current actually manufactures the field <i>B⃗</i> in the first place.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture the Indian Railways. A current-carrying wire is a long train, and the moving electrons are the bogies. Now here is the key mental move of the Biot–Savart law: instead of treating the whole train at once, we chop the wire into millions of tiny segments — each one a <b>current element</b> <i>I</i> d<i>l⃗</i>, like a single bogie. Every element throws out its own little patch of magnetic field, wrapping around itself in circles. The total field at any point is just the <b>vector sum (superposition)</b> of the contributions from all the elements. Add up every bogie’s little swirl, and you get the field of the whole train.',
      },
      {
        t: 'p',
        html: 'Two intuitions worth locking in:<br>• <b>The field circles the wire, it doesn’t point along it.</b> Grab the wire with your right hand, thumb pointing along the current; your curled fingers show the direction the field lines loop around the wire. This “right-hand grip rule” is the single most useful picture in the chapter.',
      },
      { t: 'fig', id: 'p12-04-fig-4.1' },
      {
        t: 'p',
        html: '• <b>Each element’s contribution depends on the angle.</b> A current element contributes nothing straight ahead of itself (along its own length) and maximum to the side. This “sin <i>θ</i>” behaviour is why a charge moving directly toward you makes no field on its line of motion.',
      },
      {
        t: 'p',
        html: '<b>One more property worth knowing — magnetic field lines are always closed loops.</b> Unlike electric field lines, which start on positive charges and end on negative ones, magnetic field lines never begin or end anywhere — they form continuous closed loops (threading through a current loop and back around). The physical reason is that <b>isolated magnetic poles (monopoles) do not exist</b>: you cannot have a lone “north” the way you can have a lone positive charge. Expressed as a law, the net magnetic flux through any closed surface is always zero — this is <b>Gauss’s law for magnetism</b>:<br>∮ <i>B⃗</i> · d<i>A⃗</i> = 0.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions</b> — when does the Biot–Savart law as we use it actually apply?<br>• <b>Steady currents only.</b> The law in this form describes magnetostatics — a current that is constant in time. Time-varying currents bring in extra (induced) effects you’ll meet in later chapters.<br>• <b>An isolated current element is a fiction.</b> You cannot physically have a stand-alone <i>I</i> d<i>l⃗</i> — current always flows in a complete circuit. The element is a mathematical tool; only the integrated field over a closed circuit is real and measurable.<br>• <b>Non-magnetic medium (vacuum/air).</b> We use the permeability of free space μ<sub>0</sub>. Inside iron or other magnetic materials, μ<sub>0</sub> must be replaced by the medium’s permeability.<br>• <b>Non-relativistic charges.</b> The “moving point charge” version assumes the charge’s speed <i>v</i> ≪ <i>c</i>.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Magnetic force on a moving charge (the defining relation for <i>B⃗</i>)',
        main: '<i>F⃗</i> = <i>q</i> <i>v⃗</i> × <i>B⃗</i><br>|<i>F⃗</i>| = <i>qvB</i> sin <i>θ</i>',
        legend: [
          '<i>q</i> = the charge (C)',
          '<i>v⃗</i> = its velocity (m s<sup>−1</sup>)',
          '<i>B⃗</i> = the magnetic field (T)',
          '<i>θ</i> = the angle between <i>v⃗</i> and <i>B⃗</i>',
        ],
        note: '• <b>SI unit of <i>B⃗</i>:</b> the <b>tesla</b> (T), where 1 T = 1 N A<sup>−1</sup> m<sup>−1</sup>. A common non-SI unit is the <b>gauss</b> (G), with 1 T = 10<sup>4</sup> G (the Earth’s surface field is roughly 0.3–0.6 G).<br>• <b>Dimensional formula of <i>B⃗</i>:</b> [M<sup>1</sup> L<sup>0</sup> T<sup>−2</sup> A<sup>−1</sup>].',
      },
      {
        t: 'formula',
        kicker: 'The Biot–Savart Law',
        main: 'd<i>B⃗</i> = (μ<sub>0</sub>/(4π)) (<i>I</i> d<i>l⃗</i> × <i>r̂</i>)/<i>r</i><sup>2</sup> = (μ<sub>0</sub>/(4π)) (<i>I</i> d<i>l⃗</i> × <i>r⃗</i>)/<i>r</i><sup>3</sup><br>|d<i>B⃗</i>| = (μ<sub>0</sub>/(4π)) (<i>I</i> d<i>l</i> sin <i>θ</i>)/<i>r</i><sup>2</sup>',
        legend: [
          'd<i>B⃗</i> = field due to a current element <i>I</i> d<i>l⃗</i> at a point whose position relative to the element is <i>r⃗</i>',
          '<i>θ</i> = the angle between the element d<i>l⃗</i> (along the current) and <i>r⃗</i>',
          '<i>r̂</i> = the unit vector from the element to the point',
          'μ<sub>0</sub> = the permeability of free space, 4π × 10<sup>−7</sup> T m A<sup>−1</sup> ≈ 1.257 × 10<sup>−6</sup> T m A<sup>−1</sup>',
        ],
        note: '<b>Dimensional formula of μ<sub>0</sub>:</b> [M<sup>1</sup> L<sup>1</sup> T<sup>−2</sup> A<sup>−2</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Field of a single moving point charge (replacing <i>I</i> d<i>l⃗</i> by <i>q</i><i>v⃗</i>)',
        main: '<i>B⃗</i> = (μ<sub>0</sub>/(4π)) (<i>q</i> <i>v⃗</i> × <i>r̂</i>)/<i>r</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'defgrid',
        title: 'Standard results from integrating the law (memorise these)',
        rows: [
          { k: 'Infinite straight wire, perpendicular distance <i>a</i>', v: '<i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>a</i>)' },
          {
            k: 'Finite straight wire (angles <i>θ</i><sub>1</sub>, <i>θ</i><sub>2</sub> at <i>P</i>, measured from the perpendicular)',
            v: '<i>B</i> = (μ<sub>0</sub><i>I</i>/(4π<i>a</i>)) (sin <i>θ</i><sub>1</sub> + sin <i>θ</i><sub>2</sub>)',
          },
          { k: 'Centre of a circular loop, radius <i>R</i>', v: '<i>B</i> = μ<sub>0</sub><i>I</i>/(2<i>R</i>)' },
          {
            k: 'Axis of a circular loop, distance <i>x</i> from centre',
            v: '<i>B</i> = μ<sub>0</sub><i>IR</i><sup>2</sup>/(2 (<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>)',
          },
          { k: 'Arc subtending angle <i>φ</i> (radians) at its centre', v: '<i>B</i> = μ<sub>0</sub><i>Iφ</i>/(4π<i>R</i>)' },
        ],
      },
      { t: 'p', html: 'For a coil of <i>N</i> closely-wound turns, multiply each loop result by <i>N</i>.' },

      { t: 'part', title: 'CBSE board derivations' },
      { t: 'p', html: '<b>Derivation A — Magnetic field on the axis of a circular current loop</b>' },
      {
        t: 'p',
        html: '<b>Setup and assumptions.</b> Let us consider a circular loop of radius <i>R</i> carrying a steady current <i>I</i>, in vacuum. Place the loop in the <i>y</i>–<i>z</i> plane with its centre at the origin <i>O</i>, so the <i>x</i>-axis is the axis of the loop. We want the field at a point <i>P</i> on the axis at distance <i>x</i> from <i>O</i>.',
      },
      { t: 'fig', id: 'p12-04-fig-4.2' },
      {
        t: 'p',
        html: '<b>Step 1 — Field from one element.</b> Take a small element d<i>l⃗</i> on the loop. Its distance to <i>P</i> is<br><i>r</i> = √(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>).',
      },
      {
        t: 'p',
        html: '<b>Physical reasoning:</b> the element lies in the <i>y</i>–<i>z</i> plane while <i>r⃗</i> points toward the axis, so d<i>l⃗</i> is <b>perpendicular</b> to <i>r⃗</i> — hence <i>θ</i> = 90° and sin <i>θ</i> = 1. By Biot–Savart,<br>d<i>B</i> = (μ<sub>0</sub>/(4π)) (<i>I</i> d<i>l</i>)/<i>r</i><sup>2</sup> = (μ<sub>0</sub>/(4π)) (<i>I</i> d<i>l</i>)/(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>).',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Resolve into components.</b> The vector d<i>B⃗</i> is perpendicular to <i>r⃗</i>, so it has an <b>axial</b> part (d<i>B</i> cos <i>α</i>, along the <i>x</i>-axis) and a <b>transverse</b> part (d<i>B</i> sin <i>α</i>, perpendicular to the axis), where <i>α</i> is the angle between d<i>B⃗</i> and the <i>x</i>-axis (equal to the angle at the element between <i>r⃗</i> and the radius to <i>O</i>).',
      },
      {
        t: 'p',
        html: '<b>Why this step matters:</b> for a diametrically opposite element, the transverse components point in exactly the opposite direction. So when we sum over the whole loop, <b>all transverse parts cancel by symmetry</b>, and only the axial parts survive. This is the heart of the derivation.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Sum the axial parts.</b> From the geometry, cos <i>α</i> = <i>R</i>/<i>r</i> = <i>R</i>/√(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>). The surviving contribution is<br>d<i>B</i><sub><i>x</i></sub> = d<i>B</i> cos <i>α</i> = (μ<sub>0</sub>/(4π)) (<i>I</i> d<i>l</i>)/(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>) · <i>R</i>/√(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>).<br>Integrating ∮ d<i>l</i> = 2π<i>R</i> (the circumference) — everything else is constant for all elements:<br><i>B</i> = (μ<sub>0</sub>/(4π)) (<i>IR</i>/(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>) (2π<i>R</i>) = μ<sub>0</sub><i>IR</i><sup>2</sup>/(2 (<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>).',
      },
      {
        t: 'p',
        html: '<b>Special case — at the centre.</b> Put <i>x</i> = 0:<br><i>B</i><sub>centre</sub> = μ<sub>0</sub><i>IR</i><sup>2</sup>/(2<i>R</i><sup>3</sup>) = μ<sub>0</sub><i>I</i>/(2<i>R</i>).<br>For <i>N</i> turns, <i>B</i><sub>centre</sub> = <i>N</i>μ<sub>0</sub><i>I</i>/(2<i>R</i>). The direction follows the right-hand grip rule: curl the fingers along the current, and the thumb gives <i>B⃗</i> along the axis.',
      },
      { t: 'p', html: '<b>Derivation B — Field due to a finite straight wire (condensed)</b>' },
      {
        t: 'p',
        html: 'Consider a straight wire carrying current <i>I</i>; let <i>P</i> be at perpendicular distance <i>a</i>. An element <i>I</i> d<i>l</i> at angular position <i>θ</i> (measured from the foot of the perpendicular) contributes d<i>B</i> = (μ<sub>0</sub><i>I</i>/(4π<i>a</i>)) cos <i>θ</i> d<i>θ</i> after substituting the geometry. Integrating from −<i>θ</i><sub>1</sub> to <i>θ</i><sub>2</sub>:<br><i>B</i> = (μ<sub>0</sub><i>I</i>/(4π<i>a</i>)) (sin <i>θ</i><sub>1</sub> + sin <i>θ</i><sub>2</sub>).',
      },
      { t: 'fig', id: 'p12-04-fig-4.3' },
      {
        t: 'p',
        html: '<b>Infinite-wire limit:</b> for a very long wire, both ends recede to give <i>θ</i><sub>1</sub> = <i>θ</i><sub>2</sub> = 90°, so sin <i>θ</i><sub>1</sub> + sin <i>θ</i><sub>2</sub> = 2 and<br><i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>a</i>).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A closely-wound circular coil of 250 turns has radius 8.0 cm and carries a steady current of 3.0 A. Find the magnetic field at the centre of the coil.',
        steps: [
          '<b>Given:</b> <i>N</i> = 250, <i>R</i> = 8.0 cm = 0.080 m, <i>I</i> = 3.0 A.',
          '<b>Formula:</b> <i>B</i> = <i>N</i>μ<sub>0</sub><i>I</i>/(2<i>R</i>).',
          '<b>Substitution:</b><br><i>B</i> = (250 × (4π × 10<sup>−7</sup>) × 3.0)/(2 × 0.080) = (3π × 10<sup>−4</sup>)/0.16.',
        ],
        ans: '<i>B</i> = 5.9 × 10<sup>−3</sup> T = 5.9 mT, directed along the coil’s axis (right-hand grip rule).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A single wire is bent into an arc that subtends 240° at its centre. The radius is 10 cm and it carries 6.0 A. What is the field at the centre? (The leads joining the arc to the supply are along radial lines through the centre.)',
        steps: [
          '<b>The trap:</b> Students reflexively use the full-circle formula μ<sub>0</sub><i>I</i>/(2<i>R</i>), or get confused about which angle to use. Two saves:<br>• The straight radial leads point through the centre, so for each, d<i>l⃗</i> is parallel to <i>r⃗</i> → sin <i>θ</i> = 0 → <b>they contribute nothing</b>. Ignore them.<br>• For an arc, just scale the full-loop field by the fraction of a circle:<br><i>B</i> = μ<sub>0</sub><i>I</i>/(2<i>R</i>) × 240°/360° = μ<sub>0</sub><i>I</i>/(2<i>R</i>) × 2/3.',
          '<b>Quick numbers:</b> μ<sub>0</sub><i>I</i>/(2<i>R</i>) = (4π × 10<sup>−7</sup> × 6.0)/0.20 = 3.77 × 10<sup>−5</sup> T. Times 2/3:',
        ],
        ans: '<i>B</i> ≈ 2.5 × 10<sup>−5</sup> T = 25 μT.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — two concepts',
        q: 'An infinitely long wire carries <i>I</i><sub>1</sub> = 10 A and runs parallel to the axis of a circular loop, at a perpendicular distance <i>d</i> = 5.0 cm from the loop’s centre <i>O</i>. The loop has radius <i>R</i> = 4.0 cm and carries <i>I</i><sub>2</sub> = 5.0 A. At <i>O</i>, the straight wire’s field is perpendicular to the loop’s axial field. Find the net field at <i>O</i>.',
        steps: [
          '<b>Concept 1 — straight-wire field at <i>O</i>:</b><br><i>B</i><sub>1</sub> = μ<sub>0</sub><i>I</i><sub>1</sub>/(2π<i>d</i>) = (4π × 10<sup>−7</sup> × 10)/(2π × 0.050) = 4.0 × 10<sup>−5</sup> T = 40 μT.',
          '<b>Concept 2 — loop-centre field at <i>O</i>:</b><br><i>B</i><sub>2</sub> = μ<sub>0</sub><i>I</i><sub>2</sub>/(2<i>R</i>) = (4π × 10<sup>−7</sup> × 5.0)/(2 × 0.040) = 7.85 × 10<sup>−5</sup> T = 78.5 μT.',
          '<b>Combine (perpendicular ⇒ Pythagoras):</b><br><i>B</i> = √(<i>B</i><sub>1</sub><sup>2</sup> + <i>B</i><sub>2</sub><sup>2</sup>) = √(40<sup>2</sup> + 78.5<sup>2</sup>) μT',
          '<b>The lesson:</b> <i>B</i><sub>1</sub> (in the plane) and <i>B</i><sub>2</sub> (along the axis) are genuinely perpendicular vectors — you must add them as vectors, never as scalars.',
        ],
        ans: '<i>B</i> ≈ 88 μT.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A wire of fixed length <i>L</i> carries current <i>I</i>. It is bent first into a single circular loop, then into a square loop. Compare the magnetic field at the centre of each. Which is stronger, and by how much?',
        steps: [
          '<b>Circle.</b> Circumference 2π<i>R</i> = <i>L</i> ⇒ <i>R</i> = <i>L</i>/(2π).<br><i>B</i><sub>○</sub> = μ<sub>0</sub><i>I</i>/(2<i>R</i>) = (μ<sub>0</sub><i>I</i>/2) · (2π/<i>L</i>) = πμ<sub>0</sub><i>I</i>/<i>L</i>.',
          '<b>Square.</b> Side <i>s</i> = <i>L</i>/4; the centre is at perpendicular distance <i>a</i> = <i>s</i>/2 from each side. For one side, the half-length subtends tan <i>θ</i> = (<i>s</i>/2)/<i>a</i> = 1 ⇒ <i>θ</i> = 45°, so sin <i>θ</i><sub>1</sub> + sin <i>θ</i><sub>2</sub> = 2 · (1/√2) = √2:<br><i>B</i><sub>side</sub> = (μ<sub>0</sub><i>I</i>/(4π<i>a</i>))√2 = (μ<sub>0</sub><i>I</i>/(4π(<i>s</i>/2)))√2 = μ<sub>0</sub><i>I</i>/(√2 π<i>s</i>).<br>All four sides reinforce (same direction at the centre), and <i>s</i> = <i>L</i>/4:<br><i>B</i><sub>□</sub> = 4 · μ<sub>0</sub><i>I</i>/(√2 π<i>s</i>) = 2√2 μ<sub>0</sub><i>I</i>/(π<i>s</i>) = 8√2 μ<sub>0</sub><i>I</i>/(π<i>L</i>).',
          '<b>Ratio.</b><br><i>B</i><sub>□</sub>/<i>B</i><sub>○</sub> = (8√2 μ<sub>0</sub><i>I</i>/(π<i>L</i>))/(πμ<sub>0</sub><i>I</i>/<i>L</i>) = 8√2/π<sup>2</sup> ≈ 1.15.',
          '<b>The deep reason:</b> bending the wire into a square brings parts of it closer to the centre than the circle’s uniform radius does, and field strength is very sensitive to proximity.',
        ],
        ans: 'The <b>square is stronger</b> at its centre by about <b>15%</b>, for the same wire length and current.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A single circular loop of radius 5.0 cm carries 2.0 A. Find the field at its centre.',
            a: '2.5 × 10<sup>−5</sup> T ≈ 25 μT.',
          },
          {
            q: '[NEET] A wire is bent into a semicircle of radius 10 cm carrying 4.0 A. Find the field at the centre of the semicircle (ignore the straight leads, which pass through the centre).',
            a: '1.3 × 10<sup>−5</sup> T ≈ 13 μT.',
          },
          {
            q: '[JEE Main] For a circular loop of radius <i>R</i> carrying current <i>I</i>, at what axial distance is the field equal to μ<sub>0</sub><i>I</i>/(4√2 <i>R</i>)? Find this field for <i>R</i> = 6.0 cm, <i>I</i> = 3.0 A at that point.',
            a: '<i>x</i> = <i>R</i>; <i>B</i> ≈ 11 μT.',
          },
          {
            q: '[JEE Main] A wire carrying 5.0 A is bent into an equilateral triangle of side 12 cm. Find the field at the centroid.',
            a: '<i>B</i> = 9μ<sub>0</sub><i>I</i>/(2π<i>s</i>), with <i>s</i> the side, ≈ 7.5 × 10<sup>−5</sup> T = 75 μT.',
          },
          {
            q: '[JEE Advanced] A wire of fixed length carrying current <i>I</i> is bent into a regular hexagon of side <i>a</i>. Show that the field at its centre is <i>B</i> = √3 μ<sub>0</sub><i>I</i>/(π<i>a</i>), and comment on how this compares with a circle as the number of sides increases.',
            a: '<i>B</i> = √3 μ<sub>0</sub><i>I</i>/(π<i>a</i>); as the number of sides grows the polygon approaches a circle and the centre field tends to the circular-loop value.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'According to the Biot–Savart law, the field d<i>B⃗</i> due to a current element <i>I</i> d<i>l⃗</i> at a point with position vector <i>r⃗</i> (angle <i>θ</i> between them) is:',
        opts: [
          {
            label: 'directed along d<i>l⃗</i> and ∝ 1/<i>r</i><sup>2</sup>',
            nudge: '<b>(a)</b> wrong direction — the field never points along the current element itself.',
          },
          {
            label: 'perpendicular to the plane containing d<i>l⃗</i> and <i>r⃗</i>, and ∝ sin <i>θ</i>/<i>r</i><sup>2</sup>',
            nudge: null,
          },
          {
            label: 'along <i>r⃗</i> and ∝ 1/<i>r</i><sup>3</sup>',
            nudge: '<b>(c)</b> confuses the field with the radial <i>r⃗</i> direction and slips in 1/<i>r</i><sup>3</sup> (that power belongs to the vector form written with <i>r⃗</i>, not <i>r̂</i>, where the extra <i>r</i> cancels the magnitude of <i>r⃗</i>).',
          },
          {
            label: 'perpendicular to d<i>l⃗</i> but ∝ 1/<i>r</i>',
            nudge: '<b>(d)</b> right that it’s ⊥ d<i>l⃗</i>, but the wrong power; chosen by students who half-remember “perpendicular” and guess the distance dependence.',
          },
        ],
        correct: 1,
        solution: 'The cross product d<i>l⃗</i> × <i>r̂</i> is, by definition, perpendicular to the plane of the two vectors, with magnitude ∝ sin <i>θ</i>, and the law carries 1/<i>r</i><sup>2</sup>.',
      },
      {
        t: 'mcq',
        q: 'A wire is bent into three-quarters of a circle of radius <i>R</i> carrying current <i>I</i>. The field at the centre is:',
        opts: [
          { label: '3μ<sub>0</sub><i>I</i>/(8<i>R</i>)', nudge: null },
          { label: 'μ<sub>0</sub><i>I</i>/(2<i>R</i>)', nudge: '<b>(b)</b> uses the full circle, forgetting a quarter is missing.' },
          { label: '3μ<sub>0</sub><i>I</i>/(4<i>R</i>)', nudge: '<b>(c)</b> drops the factor of 2 in the loop formula.' },
          {
            label: 'μ<sub>0</sub><i>I</i>/(8<i>R</i>)',
            nudge: '<b>(d)</b> computes the missing quarter instead of the present three-quarters.',
          },
        ],
        correct: 0,
        solution: 'Scale the full-loop field by the fraction 3/4: (3/4) · μ<sub>0</sub><i>I</i>/(2<i>R</i>) = 3μ<sub>0</sub><i>I</i>/(8<i>R</i>).',
      },
      {
        t: 'mcq',
        q: 'On the axis of a circular loop of radius <i>R</i>, the field falls to one-eighth of its value at the centre at a distance:',
        opts: [
          {
            label: '<i>x</i> = <i>R</i>',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> fail the check: <i>x</i> = <i>R</i> gives a ratio of 1/(2√2) ≈ 0.35, <i>x</i> = √2 <i>R</i> gives 1/(3√3) ≈ 0.19 and <i>x</i> = 2<i>R</i> gives 1/(5√5) ≈ 0.09, none of which is 1/8.',
          },
          {
            label: '<i>x</i> = √2 <i>R</i>',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> fail the check: <i>x</i> = <i>R</i> gives a ratio of 1/(2√2) ≈ 0.35, <i>x</i> = √2 <i>R</i> gives 1/(3√3) ≈ 0.19 and <i>x</i> = 2<i>R</i> gives 1/(5√5) ≈ 0.09, none of which is 1/8.',
          },
          { label: '<i>x</i> = √3 <i>R</i>', nudge: null },
          {
            label: '<i>x</i> = 2<i>R</i>',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> fail the check: <i>x</i> = <i>R</i> gives a ratio of 1/(2√2) ≈ 0.35, <i>x</i> = √2 <i>R</i> gives 1/(3√3) ≈ 0.19 and <i>x</i> = 2<i>R</i> gives 1/(5√5) ≈ 0.09, none of which is 1/8. Option <b>(d)</b> is <i>x</i> = 2<i>R</i>, which you get by dropping the <i>R</i><sup>2</sup> and solving <i>x</i><sup>3</sup> = 8<i>R</i><sup>3</sup>.',
          },
        ],
        correct: 2,
        solution: '<i>B</i><sub>axis</sub>/<i>B</i><sub>centre</sub> = <i>R</i><sup>3</sup>/(<i>R</i><sup>2</sup> + <i>x</i><sup>2</sup>)<sup>3/2</sup> = 1/8 ⇒ (<i>R</i><sup>2</sup> + <i>x</i><sup>2</sup>)<sup>3/2</sup> = 8<i>R</i><sup>3</sup> ⇒ <i>R</i><sup>2</sup> + <i>x</i><sup>2</sup> = 4<i>R</i><sup>2</sup> ⇒ <i>x</i> = √3 <i>R</i>.',
      },
      {
        t: 'mcq',
        q: 'A circular coil produces field <i>B</i><sub>0</sub> at its centre. If the number of turns is doubled and the radius is halved (same current, same total geometry otherwise), the new centre field is:',
        opts: [
          { label: '<i>B</i><sub>0</sub>', nudge: '<b>(a)</b> cancels the two effects, wrongly assuming they oppose.' },
          { label: '2<i>B</i><sub>0</sub>', nudge: '<b>(b)</b> accounts for only one of the two changes.' },
          { label: '4<i>B</i><sub>0</sub>', nudge: null },
          {
            label: '8<i>B</i><sub>0</sub>',
            nudge: '<b>(d)</b> over-counts, e.g., treating radius with an inverse-square dependence.',
          },
        ],
        correct: 2,
        solution: '<i>B</i> = <i>N</i>μ<sub>0</sub><i>I</i>/(2<i>R</i>). Doubling <i>N</i> multiplies by 2; halving <i>R</i> multiplies by another 2; total ×4.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Treating <i>B⃗</i> as a scalar when adding contributions.</b> Field from different wires/loops must be added as <b>vectors</b>. Two equal-magnitude fields can give anything from zero to their sum depending on directions.',
          '<b>Including collinear straight leads.</b> If a straight segment lies along the line through the point of interest, d<i>l⃗</i> ∥ <i>r⃗</i>, so sin <i>θ</i> = 0 and it contributes <b>nothing</b>. Students waste time computing it.',
          '<b>Wrong arc fraction.</b> For an arc of angle <i>φ</i>, the field is <i>φ</i>/(2π) of the full-loop value. Mixing degrees and radians, or computing the missing arc, is the classic slip.',
          '<b>Forgetting the turns <i>N</i>.</b> A “coil” or “closely-wound” coil multiplies the single-loop field by <i>N</i>; “a loop” does not.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Never integrate an arc or polygon from scratch in an exam. Memorise the single full-loop centre field μ<sub>0</sub><i>I</i>/(2<i>R</i>) and the finite-wire formula (μ<sub>0</sub><i>I</i>/(4π<i>a</i>))(sin <i>θ</i><sub>1</sub> + sin <i>θ</i><sub>2</sub>) — then scale and superpose. An arc is a fraction of a loop; a polygon is a sum of finite wires. This converts a two-page integration into a two-line calculation.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Biot–Savart law',
            note: 'd<i>B⃗</i> = (μ<sub>0</sub>/(4π)) (<i>I</i> d<i>l⃗</i> × <i>r̂</i>)/<i>r</i><sup>2</sup>; magnitude (μ<sub>0</sub>/(4π)) (<i>I</i> d<i>l</i> sin <i>θ</i>)/<i>r</i><sup>2</sup>. Field is ⊥ to the plane of d<i>l⃗</i> and <i>r⃗</i>.',
          },
          {
            f: 'μ<sub>0</sub> = 4π × 10<sup>−7</sup> <b>T m A<sup>−1</sup>.</b> Dimensions: <i>B⃗</i> → [M T<sup>−2</sup> A<sup>−1</sup>], μ<sub>0</sub> → [M L T<sup>−2</sup> A<sup>−2</sup>].',
            note: '',
          },
          {
            f: 'Straight wire',
            note: 'finite (μ<sub>0</sub><i>I</i>/(4π<i>a</i>))(sin <i>θ</i><sub>1</sub> + sin <i>θ</i><sub>2</sub>); infinite μ<sub>0</sub><i>I</i>/(2π<i>a</i>).',
          },
          {
            f: 'Circular loop',
            note: 'centre μ<sub>0</sub><i>I</i>/(2<i>R</i>) (×<i>N</i> for <i>N</i> turns); axis μ<sub>0</sub><i>IR</i><sup>2</sup>/(2(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>); arc μ<sub>0</sub><i>Iφ</i>/(4π<i>R</i>).',
          },
          {
            f: 'Direction',
            note: 'right-hand grip rule — thumb along <i>I</i>, curled fingers give the looping <i>B⃗</i>.',
          },
        ],
        aids: ['“Add the swirls, not the numbers” — every contribution is a vector, and straight bits aimed at the point add nothing.'],
      },
    ],
  },
];
