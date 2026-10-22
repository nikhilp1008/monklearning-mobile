import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Topic 02: pp. 269–280 of the Class 12 Physics Master Reference,
 * word for word: Ampère’s Circuital Law and Its Applications, split at its
 * Sections 1 to 8. Figures 4.4 (caption p. 269, drawn p. 270), 4.5 (caption
 * p. 272, drawn p. 273), 4.6 (caption p. 274, drawn p. 275) and 4.7 (caption
 * p. 276, drawn p. 277; inside Example 4) are redrawn in
 * lib/diagrams/physics-12-04.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 02 · pp. 269–280 ─────────────────────────
  {
    n: '02',
    title: 'Ampère’s Circuital Law and Its Applications',
    kalam: 'Ampère’s circuital law is the shortcut — and it plays exactly the same role in magnetism that Gauss’s law played in electrostatics.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial favourite. CBSE Boards almost guarantee a derivation — usually the solenoid or toroid — worth 3 marks. JEE Main typically asks 1–2 questions on the thick-wire (B-vs-r) profile or coaxial cables. JEE Advanced loves the cavity-in-a-conductor superposition trick. NEET keeps it conceptual: “field inside vs outside a solenoid/toroid” and the role of enclosed current.',
      },
      {
        t: 'p',
        html: 'In Topic 01 we built magnetic fields the hard way: chop the wire into tiny current elements, compute each one’s d<i>B⃗</i> with the Biot–Savart law, and integrate. That always works, but the integrals can be brutal. Ampère’s circuital law is the shortcut — and it plays exactly the same role in magnetism that Gauss’s law played in electrostatics.',
      },
      {
        t: 'p',
        html: 'Here is the idea in one sentence:<br><b>If you walk around any closed loop and keep a running total of <i>B⃗</i> (in the direction you’re walking) all the way around, that total depends only on how much current pierces through the loop — nothing else.</b>',
      },
      {
        t: 'p',
        html: 'Mathematically, that running total is the line integral ∮ <i>B⃗</i> · d<i>l⃗</i>, and the law says it equals μ<sub>0</sub> times the net current threading the loop:<br>∮ <i>B⃗</i> · d<i>l⃗</i> = μ<sub>0</sub><i>I</i><sub>enc</sub>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a parikrama — a devotee walking a full circle around a temple. As they walk, they note how strongly the wind pushes them along their path at each step, and add it all up. Ampère’s law says: that total “tailwind” around the loop tells you exactly how much current is enclosed by the loop, regardless of how wiggly your walking path was, and regardless of any currents flowing outside your path. A current running outside the loop bends the field at every point — but its pushes-along-the-path cancel out perfectly over the full circuit, contributing zero to the total.',
      },
      {
        t: 'p',
        html: 'Two intuitions to lock in:<br>• <b>Only enclosed (threading) current counts on the right-hand side.</b> A nearby external wire absolutely changes <i>B⃗</i> at points on your loop, but it adds nothing to the closed line integral. This is the single most misused point in the whole topic.<br>• <b>The sign of <i>I</i><sub>enc</sub> follows a right-hand rule.</b> Curl the fingers of your right hand along the direction you traverse the loop; your thumb points in the “positive” current direction. Currents along the thumb count as +, opposite ones as −.',
      },
      { t: 'fig', id: 'p12-04-fig-4.4' },
      {
        t: 'p',
        html: '<b>The crucial catch — true always, useful only sometimes.</b> Ampère’s law is valid for absolutely any closed loop. But it only lets you solve for <i>B</i> when the geometry is so symmetric that you can pull <i>B</i> out of the integral — i.e., when you can find a loop along which <i>B</i> is constant in magnitude and either parallel or perpendicular to your path everywhere. For a finite circular loop’s centre field (Topic 01), no such Amperian loop exists, so Ampère’s law, though true, is useless there. You must reserve it for the high-symmetry cases: the infinitely long straight wire, the long cylinder, the ideal solenoid, and the toroid.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions</b><br>• <b>Steady currents only</b> (magnetostatics). For time-varying fields the law needs Maxwell’s displacement-current correction (a later chapter).<br>• <b>Symmetry is required for evaluation</b> — not for validity. No symmetry ⇒ the law still holds but won’t yield <i>B</i> directly.<br>• <b>Idealisations:</b> “infinitely long” straight wire/solenoid (so end effects vanish), “closely wound” turns, and a non-magnetic medium (vacuum/air, so we use μ<sub>0</sub>).',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Ampère’s circuital law',
        main: '∮ <i>B⃗</i> · d<i>l⃗</i> = μ<sub>0</sub><i>I</i><sub>enc</sub>',
        legend: [
          '∮ <i>B⃗</i> · d<i>l⃗</i> = the line integral of <i>B⃗</i> around a closed (Amperian) loop, unit T·m',
          '<i>I</i><sub>enc</sub> = net current threading the loop (A)',
          'μ<sub>0</sub> = permeability of free space, 4π × 10<sup>−7</sup> T m A<sup>−1</sup>, dimensions [M L T<sup>−2</sup> A<sup>−2</sup>]',
        ],
        note: 'Use the right-hand sign convention for <i>I</i><sub>enc</sub>.',
      },
      {
        t: 'table',
        title: 'Standard results obtained from the law',
        head: ['Configuration', 'Field', 'Region'],
        rows: [
          ['Infinite straight wire (distance <i>r</i>)', '<i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>r</i>)', '<i>r</i> > 0'],
          [
            'Thick wire, radius <i>R</i>, uniform current — inside',
            '<i>B</i> = μ<sub>0</sub><i>Ir</i>/(2π<i>R</i><sup>2</sup>) (∝ <i>r</i>)',
            '<i>r</i> < <i>R</i>',
          ],
          ['Thick wire — outside', '<i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>r</i>) (∝ 1/<i>r</i>)', '<i>r</i> > <i>R</i>'],
          ['Ideal solenoid (<i>n</i> = turns per unit length)', '<i>B</i> = μ<sub>0</sub><i>nI</i>', 'inside; 0 outside'],
          [
            'Toroid (<i>N</i> total turns, mean radius <i>r</i>)',
            '<i>B</i> = μ<sub>0</sub><i>NI</i>/(2π<i>r</i>)',
            'inside the windings; 0 elsewhere',
          ],
        ],
      },
      {
        t: 'p',
        html: 'Symbols: <i>I</i> = current (A); <i>R</i> = conductor radius; <i>r</i> = field-point distance; <i>n</i> = <i>N</i>/<i>L</i> = turns per unit length (m<sup>−1</sup>); <i>N</i> = total turns. The field <i>B</i> is in tesla, dimensions [M T<sup>−2</sup> A<sup>−1</sup>]. Note the <b>consistency check with Topic 01</b>: Ampère’s law gives <i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>r</i>) for the straight wire — exactly the infinite-wire limit of the Biot–Savart result (μ<sub>0</sub><i>I</i>/(4π<i>a</i>))(sin <i>θ</i><sub>1</sub> + sin <i>θ</i><sub>2</sub>). Two different methods, one answer.',
      },

      { t: 'part', title: 'CBSE board derivations' },
      { t: 'p', html: '<b>Derivation A — Solenoid:</b> <i>B</i> = μ<sub>0</sub><i>nI</i>' },
      {
        t: 'p',
        html: '<b>Setup.</b> Consider a long, ideal solenoid: length much greater than radius, closely wound with <i>n</i> turns per unit length, each carrying current <i>I</i>. Experiment and field-line geometry tell us the field is <b>uniform and axial inside, and effectively zero outside</b>.',
      },
      { t: 'fig', id: 'p12-04-fig-4.5' },
      {
        t: 'p',
        html: '<b>Choose the Amperian loop.</b> Take a rectangle <i>abcd</i> with side <i>ab</i> (length <i>L</i>) running inside the solenoid parallel to the axis, side <i>cd</i> outside, and the short sides <i>bc</i>, <i>da</i> crossing the wall.',
      },
      {
        t: 'p',
        html: '<b>Evaluate the line integral, side by side — and explain each:</b><br>∮ <i>B⃗</i> · d<i>l⃗</i> = ∫<sub><i>a</i></sub><sup><i>b</i></sup> + ∫<sub><i>b</i></sub><sup><i>c</i></sup> + ∫<sub><i>c</i></sub><sup><i>d</i></sup> + ∫<sub><i>d</i></sub><sup><i>a</i></sup>.<br>• Along <i>ab</i>: <i>B⃗</i> is uniform and parallel to the path ⇒ contributes <i>BL</i>.<br>• Along <i>bc</i> and <i>da</i>: inside, <i>B⃗</i> ⊥ d<i>l⃗</i>; outside, <i>B⃗</i> = 0 ⇒ both contribute 0.<br>• Along <i>cd</i>: it lies outside the solenoid where <i>B⃗</i> = 0 ⇒ contributes 0.<br>So the entire line integral collapses to <i>BL</i> — this is exactly why we chose this rectangle.',
      },
      {
        t: 'p',
        html: '<b>Enclosed current.</b> The rectangle encloses <i>nL</i> turns, each carrying <i>I</i>, so <i>I</i><sub>enc</sub> = <i>nLI</i>.',
      },
      {
        t: 'p',
        html: '<b>Apply the law:</b><br><i>BL</i> = μ<sub>0</sub>(<i>nLI</i>) ⇒ <i>B</i> = μ<sub>0</sub><i>nI</i>.',
      },
      {
        t: 'p',
        html: 'Since side <i>ab</i> can sit anywhere inside the cross-section and the answer is unchanged, the field is uniform across the whole interior. (Right-hand grip rule gives its direction along the axis.)',
      },
      {
        t: 'p',
        html: '<b>A useful edge result:</b> the formula <i>B</i> = μ<sub>0</sub><i>nI</i> holds deep inside a long solenoid. Right at the <b>open end</b> of the solenoid, the field drops to roughly <b>half</b> that value, <i>B</i><sub>end</sub> ≈ μ<sub>0</sub><i>nI</i>/2 — because an end “sees” the windings on only one side. This is why solenoids are made long compared to their diameter: to keep the useful uniform region large.',
      },
      { t: 'p', html: '<b>Derivation B — Toroid:</b> <i>B</i> = μ<sub>0</sub><i>NI</i>/(2π<i>r</i>)' },
      {
        t: 'p',
        html: '<b>Setup.</b> A toroid is a solenoid bent into a closed ring — a hollow doughnut with <i>N</i> closely wound turns carrying current <i>I</i>, mean radius <i>r</i>.',
      },
      { t: 'fig', id: 'p12-04-fig-4.6' },
      {
        t: 'p',
        html: 'By symmetry, <i>B⃗</i> is tangential to any concentric circle and constant in magnitude on it, so on a circle of radius <i>r</i>, ∮ <i>B⃗</i> · d<i>l⃗</i> = <i>B</i>(2π<i>r</i>).<br>• <b>Loop 1 (in the hollow centre):</b> encloses no turns ⇒ <i>I</i><sub>enc</sub> = 0 ⇒ <i>B</i><sub>1</sub>(2π<i>r</i><sub>1</sub>) = 0 ⇒ <i>B</i><sub>1</sub> = 0.<br>• <b>Loop 3 (outside the toroid):</b> each turn’s current pierces the enclosed area once going in and once coming out, cancelling ⇒ <i>I</i><sub>enc</sub> = 0 ⇒ <i>B</i><sub>3</sub> = 0.<br>• <b>Loop 2 (inside the windings):</b> encloses all <i>N</i> turns ⇒ <i>I</i><sub>enc</sub> = <i>NI</i>:<br><i>B</i>(2π<i>r</i>) = μ<sub>0</sub><i>NI</i> ⇒ <i>B</i> = μ<sub>0</sub><i>NI</i>/(2π<i>r</i>).',
      },
      {
        t: 'p',
        html: 'Writing <i>n</i> = <i>N</i>/(2π<i>r</i>) (turns per unit length along the mean circle) recovers <i>B</i> = μ<sub>0</sub><i>nI</i> — the toroid is just a wrapped-around solenoid. Note the field is <b>non-uniform</b> (∝ 1/<i>r</i>) across the toroid’s cross-section, becoming nearly uniform only when the mean radius far exceeds the cross-sectional radius.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A solenoid 50 cm long has 1500 turns and carries a current of 4.0 A. Find the magnetic field at its centre.',
        steps: [
          '<b>Given:</b> <i>L</i> = 0.50 m, <i>N</i> = 1500, <i>I</i> = 4.0 A. <b>Turns per unit length:</b> <i>n</i> = <i>N</i>/<i>L</i> = 1500/0.50 = 3000 m<sup>−1</sup>. <b>Formula:</b> <i>B</i> = μ<sub>0</sub><i>nI</i>.',
          '<i>B</i> = (4π × 10<sup>−7</sup>)(3000)(4.0) = 4π × 10<sup>−7</sup> × 1.2 × 10<sup>4</sup> = 1.5 × 10<sup>−2</sup> T.',
        ],
        ans: '<i>B</i> ≈ 15 mT, directed along the axis.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A long, thick cylindrical wire of radius <i>R</i> carries current <i>I</i> spread uniformly over its cross-section. Compare the field at <i>r</i> = <i>R</i>/2 (inside) with the field at <i>r</i> = 2<i>R</i> (outside).',
        steps: [
          '<b>The trap:</b> Students assume “inside is always weaker than outside” and never actually compute both, or they wrongly use μ<sub>0</sub><i>I</i>/(2π<i>r</i>) inside the wire.',
          '<b>Inside</b> (<i>r</i> = <i>R</i>/2, field ∝ <i>r</i>): <i>B</i><sub>in</sub> = μ<sub>0</sub><i>I</i>(<i>R</i>/2)/(2π<i>R</i><sup>2</sup>) = μ<sub>0</sub><i>I</i>/(4π<i>R</i>).',
          '<b>Outside</b> (<i>r</i> = 2<i>R</i>, field ∝ 1/<i>r</i>): <i>B</i><sub>out</sub> = μ<sub>0</sub><i>I</i>/(2π(2<i>R</i>)) = μ<sub>0</sub><i>I</i>/(4π<i>R</i>).',
          'A point halfway inside and a point at twice the radius feel exactly the same field. Recognising this instantly (rather than grinding numbers) is the speed move.',
        ],
        ans: '<i>B</i><sub>in</sub>/<i>B</i><sub>out</sub> = 1 — they are <b>equal</b>!',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — two concepts',
        q: 'A coaxial cable has a solid inner conductor of radius <i>a</i> = 1.0 mm carrying <i>I</i> = 6.0 A out of the page, and a thin outer cylindrical shell of radius <i>b</i> = 4.0 mm carrying 6.0 A back into the page. Find <i>B</i> (i) at <i>r</i> = 2.0 mm (between the conductors) and (ii) at <i>r</i> = 6.0 mm (outside the cable).',
        steps: [
          '<b>Concept 1 — enclosed-current accounting.</b><br>(i) Between the conductors, the Amperian circle encloses only the inner conductor’s full current: <i>I</i><sub>enc</sub> = +6.0 A.<br>(ii) Outside, it encloses both: <i>I</i><sub>enc</sub> = 6.0 − 6.0 = 0.',
          '<b>Concept 2 — Ampère’s law with circular symmetry,</b> <i>B</i>(2π<i>r</i>) = μ<sub>0</sub><i>I</i><sub>enc</sub>:<br>(i) <i>B</i> = μ<sub>0</sub>(6.0)/(2π(2.0 × 10<sup>−3</sup>)) = (4π × 10<sup>−7</sup> × 6.0)/(2π × 2.0 × 10<sup>−3</sup>) = 6.0 × 10<sup>−4</sup> T = 0.60 mT.<br>(ii) <i>B</i> = 0.',
          'The coaxial geometry confines the field entirely to the region between the conductors — which is exactly why coaxial cables don’t radiate or interfere.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A long cylindrical conductor of radius <i>R</i> carries a uniform current density <i>J⃗</i> (out of the page). A cylindrical cavity of radius <i>ρ</i> is bored parallel to the axis; the cavity’s axis is displaced by <i>d⃗</i> from the conductor’s axis. Show that the magnetic field everywhere inside the cavity is uniform, and find its magnitude.',
        fig: 'p12-04-fig-4.7',
        steps: [
          '<b>Strategy — superposition.</b> Model the drilled conductor as the superposition of two solid cylinders: a full cylinder of density +<i>J⃗</i> (no hole), plus a cavity-sized cylinder of density −<i>J⃗</i> centred at <i>O</i>′. Inside a solid cylinder, Ampère’s law gives an azimuthal field of magnitude μ<sub>0</sub><i>Jr</i>/2; in vector form, at a point with position <i>r⃗</i> from that cylinder’s axis,<br><i>B⃗</i> = (μ<sub>0</sub>/2) <i>J⃗</i> × <i>r⃗</i>.',
          '<b>Add the two contributions</b> at a point <i>P</i> inside the cavity, with positions <i>r⃗</i><sub>1</sub> (from <i>O</i>) and <i>r⃗</i><sub>2</sub> (from <i>O</i>′):<br><i>B⃗</i> = (μ<sub>0</sub>/2) <i>J⃗</i> × <i>r⃗</i><sub>1</sub> + (μ<sub>0</sub>/2) (−<i>J⃗</i>) × <i>r⃗</i><sub>2</sub> = (μ<sub>0</sub>/2) <i>J⃗</i> × (<i>r⃗</i><sub>1</sub> − <i>r⃗</i><sub>2</sub>).',
          '<b>Key geometric fact:</b> <i>r⃗</i><sub>1</sub> − <i>r⃗</i><sub>2</sub> = <i>d⃗</i>, the constant displacement between the two axes — independent of where <i>P</i> is. Therefore',
          'The field inside the cavity is <b>perfectly uniform</b> — same magnitude and direction at every point. This surprising, elegant result is a JEE Advanced classic, and it falls out only because Ampère’s law makes the single-cylinder field linear in <i>r⃗</i>.',
        ],
        ans: '<i>B⃗</i><sub>cavity</sub> = (μ<sub>0</sub>/2) <i>J⃗</i> × <i>d⃗</i>,   |<i>B⃗</i>| = μ<sub>0</sub><i>Jd</i>/2.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A solenoid has 2000 turns per metre and carries 2.5 A. Find the field inside.',
            a: '<i>B</i> = μ<sub>0</sub><i>nI</i> ≈ 6.3 × 10<sup>−3</sup> T = 6.3 mT.',
          },
          {
            q: '[NEET] A long straight wire carries 8.0 A. Find the field at a perpendicular distance of 4.0 cm.',
            a: '<i>B</i> ≈ 4.0 × 10<sup>−5</sup> T = 40 μT.',
          },
          {
            q: '[JEE Main] A toroid of 3000 turns and mean radius 15 cm carries 6.0 A. Find the field within the windings.',
            a: '<i>B</i> ≈ 2.4 × 10<sup>−2</sup> T = 24 mT.',
          },
          {
            q: '[JEE Main] A thick wire of radius 2.0 mm carries 10 A uniformly. Find the field at a point 1.0 mm from the axis.',
            a: '<i>B</i> = μ<sub>0</sub><i>Ir</i>/(2π<i>R</i><sup>2</sup>) = 5.0 × 10<sup>−4</sup> T = 0.50 mT.',
          },
          {
            q: '[JEE Advanced] A hollow cylindrical conductor has inner radius <i>a</i> and outer radius <i>b</i>, carrying current <i>I</i> uniformly over the annular cross-section. Derive the field at a point <i>a</i> < <i>r</i> < <i>b</i>.',
            a: '<i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>r</i>) · (<i>r</i><sup>2</sup> − <i>a</i><sup>2</sup>)/(<i>b</i><sup>2</sup> − <i>a</i><sup>2</sup>).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'For a closed Amperian loop, the value of ∮ <i>B⃗</i> · d<i>l⃗</i> depends on:',
        opts: [
          {
            label: 'the shape of the loop',
            nudge: '<b>(a)</b> wrong: distort the loop however you like (keeping the same enclosed current) and the integral is unchanged.',
          },
          { label: 'only the net current passing through the loop', nudge: null },
          {
            label: 'all currents, including those outside the loop',
            nudge: '<b>(c)</b> the classic trap: external currents do alter <i>B⃗</i> at individual points, but their contributions to the closed integral cancel exactly.',
          },
          {
            label: 'the magnitude of <i>B⃗</i> at each point on the loop',
            nudge: '<b>(d)</b> confuses the integral’s value with the local field; chosen by students who forget the integral is a sum over the whole loop.',
          },
        ],
        correct: 1,
        solution: 'The law fixes the integral as μ<sub>0</sub><i>I</i><sub>enc</sub> — it cares only about the net threading current.',
      },
      {
        t: 'mcq',
        q: 'Inside an ideal solenoid carrying current <i>I</i>, the magnetic field:',
        opts: [
          {
            label: 'increases with distance from the axis',
            nudge: '<b>(a)</b>, <b>(b)</b> describe radial variation that simply doesn’t exist inside an ideal solenoid; <b>(a)</b> is tempting if you wrongly picture it like a thick wire.',
          },
          {
            label: 'is maximum at the axis and falls to the walls',
            nudge: '<b>(a)</b>, <b>(b)</b> describe radial variation that simply doesn’t exist inside an ideal solenoid; <b>(a)</b> is tempting if you wrongly picture it like a thick wire.',
          },
          { label: 'is uniform and equals μ<sub>0</sub><i>nI</i> everywhere in the cross-section', nudge: null },
          {
            label: 'varies as 1/<i>r</i>',
            nudge: '<b>(d)</b> confuses the solenoid with the <b>toroid</b>, whose field genuinely goes as 1/<i>r</i>.',
          },
        ],
        correct: 2,
        solution: 'The rectangular-loop derivation works for any interior placement of side <i>ab</i>, proving uniformity.',
      },
      {
        t: 'mcq',
        q: 'A thick wire of radius <i>R</i> carries a uniform current. Which statement about <i>B</i>(<i>r</i>) is correct?',
        opts: [
          { label: '<i>B</i> increases linearly inside and falls as 1/<i>r</i> outside, peaking at <i>r</i> = <i>R</i>', nudge: null },
          { label: '<i>B</i> is constant inside and falls outside', nudge: '<b>(b)</b> describes a solenoid, not a wire.' },
          {
            label: '<i>B</i> is zero inside and 1/<i>r</i> outside',
            nudge: '<b>(c)</b> wrongly treats the wire like a hollow conductor (zero field is the cavity/hollow case).',
          },
          { label: '<i>B</i> decreases as 1/<i>r</i> both inside and outside', nudge: '<b>(d)</b> ignores the rising enclosed current inside.' },
        ],
        correct: 0,
        solution: 'Enclosed current ∝ <i>r</i><sup>2</sup> inside ⇒ <i>B</i> ∝ <i>r</i>; outside the full current is enclosed ⇒ <i>B</i> ∝ 1/<i>r</i>; the two meet at the surface, the maximum.',
      },
      {
        t: 'mcq',
        q: 'A toroid has <i>N</i> turns and mean radius <i>r</i>. If both <i>N</i> and <i>r</i> are doubled (current unchanged), the field inside the windings:',
        opts: [
          { label: 'is unchanged', nudge: null },
          { label: 'doubles', nudge: '<b>(b)</b> counts only the <i>N</i> change' },
          { label: 'halves', nudge: '<b>(c)</b> counts only the <i>r</i> change' },
          { label: 'quadruples', nudge: '<b>(d)</b> wrongly multiplies both as increases.' },
        ],
        correct: 0,
        solution: '<i>B</i> = μ<sub>0</sub><i>NI</i>/(2π<i>r</i>) ⇒ doubling <i>N</i> (×2) and doubling <i>r</i> (÷2) cancel.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Trying to use Ampère’s law without symmetry.</b> The law is always true, but only solvable when you can find a loop on which <i>B</i> is constant and parallel/perpendicular to the path. You cannot use it to get a single circular loop’s centre field.',
          '<b>Counting external currents in <i>I</i><sub>enc</sub>.</b> Only currents that actually thread the loop appear on the right-hand side, regardless of how strongly nearby wires bend the field.',
          '<b>Mixing up <i>n</i> and <i>N</i>.</b> The solenoid uses <i>n</i> (turns per unit length); the toroid uses total <i>N</i> over 2π<i>r</i>. Plugging total turns into μ<sub>0</sub><i>nI</i> is a frequent disaster.',
          '<b>Using μ<sub>0</sub><i>I</i>/(2π<i>r</i>) inside a thick wire.</b> Inside, only the fraction <i>r</i><sup>2</sup>/<i>R</i><sup>2</sup> of the current is enclosed, so <i>B</i> ∝ <i>r</i>, not 1/<i>r</i>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Choose the Amperian loop to match the field’s symmetry — a circle for wires/cylinders/toroids, a rectangle with one side along the axis for solenoids. The whole skill is picking a loop where <i>B⃗</i> · d<i>l⃗</i> is either <i>B</i> d<i>l</i> (parallel) or 0 (perpendicular/zero-field) on every segment, so the integral collapses to <i>B</i> × (length) in one line.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'The law',
            note: '∮ <i>B⃗</i> · d<i>l⃗</i> = μ<sub>0</sub><i>I</i><sub>enc</sub> — only enclosed current counts; loop shape is irrelevant.',
          },
          {
            f: 'Straight wire',
            note: '<i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>r</i>) (matches the Biot–Savart infinite-wire limit).',
          },
          {
            f: 'Thick wire',
            note: 'inside <i>B</i> = μ<sub>0</sub><i>Ir</i>/(2π<i>R</i><sup>2</sup>) (∝ <i>r</i>); outside μ<sub>0</sub><i>I</i>/(2π<i>r</i>) (∝ 1/<i>r</i>); peaks at the surface.',
          },
          {
            f: 'Solenoid',
            note: '<i>B</i> = μ<sub>0</sub><i>nI</i> inside (uniform), 0 outside. Uses <i>n</i> = turns/length.',
          },
          {
            f: 'Toroid',
            note: '<i>B</i> = μ<sub>0</sub><i>NI</i>/(2π<i>r</i>) inside windings, 0 in the hole and outside. Uses total <i>N</i>.',
          },
        ],
        aids: ['“True for any loop, solvable only for the symmetric few” — and “thread it or forget it” for enclosed current.'],
      },
    ],
  },
];
