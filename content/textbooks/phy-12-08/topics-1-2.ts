import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, Topics 01 and 02: pp. 519–530 of the Class 12 Physics Master
 * Reference, word for word. The chapter’s title page and contents (pp. 517–518)
 * are not copied. Topic 01, Displacement Current and Maxwell’s Equations
 * (pp. 519–525), and Topic 02, Sources and Experimental Discovery of
 * Electromagnetic Waves (pp. 526–530), are each split at their Sections 1 to 8.
 * Figure 8.1 (caption p. 521, drawn p. 522; after Step 2 of the derivation) is
 * redrawn in lib/diagrams/physics-12-08.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 519–525 ─────────────────────────
  {
    n: '01',
    title: 'Displacement Current and Maxwell’s Equations',
    kalam: 'Maxwell’s resolution was bold: he proposed that a changing electric field in the gap behaves, magnetically, exactly like a real current.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This topic shows up as 1 calculation-heavy question in <b>JEE Main</b> (usually “find the displacement current” or “find <i>B</i> between the plates”), occasionally as a 1-mark conceptual question in <b>NEET</b>, and as a tougher multi-concept problem in <b>JEE Advanced</b> (often coupled with RC charging or a lossy dielectric). For <b>CBSE Boards</b>, expect the definition of displacement current, the need-for-it argument, or the statement of Maxwell’s equations as a 2–3 mark question.',
      },
      {
        t: 'p',
        html: 'Here’s a puzzle that bothered physicists for a while. We already know two solid facts. First, a current flowing through a wire wraps a magnetic field around itself — that’s Ampère’s circuital law, and it works beautifully. Second, a changing magnetic field creates an electric field — that’s Faraday’s law, which you met in electromagnetic induction. Notice the lovely symmetry begging to be completed: if a changing magnetic field makes an electric field, shouldn’t a changing electric field make a magnetic field? Nature rarely leaves such a gap open, and Maxwell was the one who closed it.',
      },
      {
        t: 'p',
        html: 'But he didn’t close it just for the sake of symmetry. He was forced into it by a genuine contradiction, and the cleanest way to see that contradiction is to look at a humble <b>charging capacitor</b>.',
      },
      {
        t: 'p',
        html: 'Picture a parallel plate capacitor being charged by a battery. Current flows through the connecting wires — charge piles up on one plate and drains off the other. But here’s the thing: <b>no charge actually crosses the gap</b> between the plates. There’s just empty space (or a dielectric) there. So we have current in the wire but no current in the gap, even though they sit on the same circuit.',
      },
      {
        t: 'p',
        html: 'Now apply Ampère’s law to a loop encircling the wire. Ampère’s law says ∮ <i>B⃗</i> · d<i>l⃗</i> = μ<sub>0</sub><i>I</i>, where <i>I</i> is the current piercing any surface bounded by that loop. The trouble is the phrase “any surface.” If I choose a flat disc that the wire pokes through, it catches the conduction current and I get a magnetic field. But if I choose a balloon-shaped surface that bulges out and slips between the capacitor plates — same loop, same boundary — it catches <b>no current at all</b>, because nothing crosses the gap. Same left-hand side, two different answers. Ampère’s law has just contradicted itself.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a water pipe with a sealed rubber membrane stretched across the middle. Water can’t physically cross the membrane. But as you push water in on the left, the membrane bulges, and that bulge shoves water out on the right. To anyone watching the two ends, the “flow” continues right through — even though no single water molecule crosses. In a capacitor, the changing electric field in the gap is that bulging membrane. It isn’t a flow of charge, but it carries the effect across, so that “current” stays continuous around the whole circuit.',
      },
      {
        t: 'p',
        html: 'Maxwell’s resolution was bold: he proposed that a changing electric field in the gap behaves, magnetically, exactly like a real current. He named it the <b>displacement current</b>. Add it to Ampère’s law, and the contradiction vanishes — both surfaces now give the same answer. More profoundly, it means a changing electric field is a genuine source of magnetic field, anywhere in space, even in a perfect vacuum with not a single charge around.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions to keep in mind:</b><br>• Displacement current is <b>not a movement of charge</b>. Nothing physical crosses the gap. It’s the changing electric flux that does the job.<br>• It exists <b>only where the electric field (flux) is changing with time</b>. A fully charged capacitor sitting at steady voltage has dΦ<sub>E</sub>/d<i>t</i> = 0, so its displacement current is zero.<br>• The “current through the capacitor” idea is a bookkeeping device that restores continuity — but the magnetic field it predicts is <b>physically real and measurable</b>.<br>• We assume an ideal capacitor (uniform field, edge/fringing effects neglected) when we write Φ<sub>E</sub> = <i>EA</i>.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Displacement current — the current attributed to a time-varying electric flux',
        main: '<i>I</i><sub>d</sub> = ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Electric flux through a surface (uniform field ⊥ area <i>A</i>)',
        main: 'Φ<sub>E</sub> = ∫ <i>E⃗</i> · d<i>A⃗</i> ⇒ Φ<sub>E</sub> = <i>EA</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Displacement current density',
        main: '<i>j</i><sub>d</sub> = ε<sub>0</sub> d<i>E</i>/d<i>t</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Ampère–Maxwell law (the corrected Ampère’s law)',
        main: '∮ <i>B⃗</i> · d<i>l⃗</i> = μ<sub>0</sub>(<i>I</i><sub>c</sub> + <i>I</i><sub>d</sub>) = μ<sub>0</sub><i>I</i><sub>c</sub> + μ<sub>0</sub>ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Displacement current in a capacitor',
        main: 'For a charging parallel-plate capacitor, the displacement current in the gap equals the conduction current in the wire<br><i>I</i><sub>d</sub> = <i>I</i><sub>c</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Maxwell’s Four Equations (integral form)',
        main: '1. ∮ <i>E⃗</i> · d<i>A⃗</i> = <i>q</i><sub>enc</sub>/ε<sub>0</sub> (Gauss’s law for electricity)<br>2. ∮ <i>B⃗</i> · d<i>A⃗</i> = 0 (Gauss’s law for magnetism)<br>3. ∮ <i>E⃗</i> · d<i>l⃗</i> = −dΦ<sub>B</sub>/d<i>t</i> (Faraday’s law)<br>4. ∮ <i>B⃗</i> · d<i>l⃗</i> = μ<sub>0</sub><i>I</i><sub>c</sub> + μ<sub>0</sub>ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i> (Ampère–Maxwell law)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Notation:</b> <i>E⃗</i> = electric field, <i>B⃗</i> = magnetic field, Φ<sub>E</sub> = electric flux, Φ<sub>B</sub> = magnetic flux, <i>I</i><sub>c</sub> = conduction current, <i>I</i><sub>d</sub> = displacement current, <i>q</i><sub>enc</sub> = charge enclosed, ε<sub>0</sub> = permittivity of free space, μ<sub>0</sub> = permeability of free space.',
      },
      {
        t: 'table',
        title: 'SI units and dimensional formulae of core quantities',
        head: ['Quantity', 'Symbol', 'SI Unit', 'Dimensional Formula'],
        rows: [
          ['Displacement current', '<i>I</i><sub>d</sub>', 'ampere (A)', '[M<sup>0</sup> L<sup>0</sup> T<sup>0</sup> A<sup>1</sup>]'],
          ['Electric flux', 'Φ<sub>E</sub>', 'V·m (or N·m<sup>2</sup>C<sup>−1</sup>)', '[M<sup>1</sup> L<sup>3</sup> T<sup>−3</sup> A<sup>−1</sup>]'],
          ['Displacement current density', '<i>j</i><sub>d</sub>', 'A·m<sup>−2</sup>', '[M<sup>0</sup> L<sup>−2</sup> T<sup>0</sup> A<sup>1</sup>]'],
          ['Permittivity of free space', 'ε<sub>0</sub>', 'C<sup>2</sup>N<sup>−1</sup>m<sup>−2</sup>', '[M<sup>−1</sup> L<sup>−3</sup> T<sup>4</sup> A<sup>2</sup>]'],
        ],
      },

      { t: 'part', title: 'CBSE board derivation — Why displacement current must exist' },
      {
        t: 'p',
        html: '<b>Goal:</b> Show that Ampère’s law is incomplete, and derive the extra term that fixes it.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Set up the situation.</b> Consider a parallel plate capacitor with plate area <i>A</i>, being charged. At any instant a conduction current <i>I</i><sub>c</sub> = d<i>q</i>/d<i>t</i> flows in the connecting wires, depositing charge <i>q</i> on the plates. We choose an ideal capacitor so the field between the plates is uniform and confined to the gap.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Draw one loop, but stretch two different surfaces over it.</b> Take an Amperian loop of radius <i>r</i> encircling the wire. The boundary is fixed, but Ampère’s law lets us pick any surface bounded by it.',
      },
      { t: 'fig', id: 'p12-08-fig-8.1' },
      {
        t: 'p',
        html: '• <b>Surface</b> <i>S</i><sub>1</sub> (flat disc, pierced by the wire): encloses <i>I</i><sub>c</sub>, so Ampère’s law gives ∮ <i>B⃗</i> · d<i>l⃗</i> = μ<sub>0</sub><i>I</i><sub>c</sub>.<br>• <b>Surface</b> <i>S</i><sub>2</sub> (balloon dipping between the plates): no charge crosses the gap, so it encloses zero current, giving ∮ <i>B⃗</i> · d<i>l⃗</i> = 0.',
      },
      {
        t: 'p',
        html: '<b>The physical reasoning:</b> the left-hand side ∮ <i>B⃗</i> · d<i>l⃗</i> depends only on the loop, which we did not change. Yet the right-hand side changed. <b>This logical inconsistency is the heart of the problem</b> — Ampère’s law cannot be the whole story.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Find what is “flowing” through the gap.</b> Between the plates the field is <i>E</i> = <i>σ</i>/ε<sub>0</sub> = <i>q</i>/(ε<sub>0</sub><i>A</i>). The electric flux through <i>S</i><sub>2</sub> is therefore<br>Φ<sub>E</sub> = <i>EA</i> = <i>q</i>/ε<sub>0</sub>.<br><b>Why this step:</b> if no charge crosses <i>S</i><sub>2</sub>, the only thing changing inside it is the electric field — so we hunt for a quantity built from that changing field.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — Differentiate to expose a hidden “current.”</b> Since <i>q</i> grows with time,<br>ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i> = ε<sub>0</sub> · (1/ε<sub>0</sub>) d<i>q</i>/d<i>t</i> = d<i>q</i>/d<i>t</i> = <i>I</i><sub>c</sub>.<br><b>Why this matters:</b> the combination ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i> comes out <b>exactly equal to the conduction current</b> and <b>has the units of current</b>. Maxwell named this the displacement current:<br><i>I</i><sub>d</sub> = ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i>',
      },
      {
        t: 'p',
        html: '<b>Step 5 — Repair Ampère’s law.</b> Replace “current” with “conduction + displacement current.” Now surface <i>S</i><sub>1</sub> sees <i>I</i><sub>c</sub> (and <i>I</i><sub>d</sub> = 0, no changing flux there), while <i>S</i><sub>2</sub> sees <i>I</i><sub>d</sub> = <i>I</i><sub>c</sub> (and <i>I</i><sub>c</sub> = 0). <b>Both surfaces give μ<sub>0</sub><i>I</i><sub>c</sub>.</b> The contradiction is gone, and we arrive at the Ampère–Maxwell law:<br>∮ <i>B⃗</i> · d<i>l⃗</i> = μ<sub>0</sub>(<i>I</i><sub>c</sub> + <i>I</i><sub>d</sub>) = μ<sub>0</sub><i>I</i><sub>c</sub> + μ<sub>0</sub>ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i>.',
      },
      {
        t: 'p',
        html: 'This single repair has a staggering consequence: in the region between the plates there is <b>no conduction current at all, yet there is a magnetic field</b> — produced purely by a changing electric field. Combined with Faraday’s law, this is the seed from which electromagnetic waves grow.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A parallel plate capacitor has plates of area <i>A</i> = 80 cm<sup>2</sup>. While charging, the electric field between the plates increases uniformly at a rate d<i>E</i>/d<i>t</i> = 6.0 × 10<sup>8</sup> V m<sup>−1</sup> s<sup>−1</sup>. Calculate the displacement current.',
        steps: [
          '<b>Given:</b> <i>A</i> = 80 cm<sup>2</sup> = 80 × 10<sup>−4</sup> m<sup>2</sup> = 8.0 × 10<sup>−3</sup> m<sup>2</sup>, d<i>E</i>/d<i>t</i> = 6.0 × 10<sup>8</sup> V m<sup>−1</sup> s<sup>−1</sup>, ε<sub>0</sub> = 8.85 × 10<sup>−12</sup> C<sup>2</sup>N<sup>−1</sup>m<sup>−2</sup>.',
          '<b>Formula:</b> With Φ<sub>E</sub> = <i>EA</i> and <i>A</i> constant, <i>I</i><sub>d</sub> = ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i> = ε<sub>0</sub><i>A</i> d<i>E</i>/d<i>t</i>.',
          '<b>Substitute:</b><br><i>I</i><sub>d</sub> = (8.85 × 10<sup>−12</sup>)(8.0 × 10<sup>−3</sup>)(6.0 × 10<sup>8</sup>)<br><i>I</i><sub>d</sub> = 8.85 × 8.0 × 6.0 × 10<sup>−12−3+8</sup> A = 424.8 × 10<sup>−7</sup> A',
        ],
        ans: '<i>I</i><sub>d</sub> ≈ 4.25 × 10<sup>−5</sup> A = 42.5 μA',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The charge on a parallel plate capacitor varies as <i>q</i> = <i>q</i><sub>0</sub> sin(<i>ωt</i>) with <i>q</i><sub>0</sub> = 8.0 nC and frequency <i>f</i> = 50 Hz. What is the peak displacement current between the plates?',
        steps: [
          '<b>The trap:</b> Many students reach for <i>I</i><sub>d</sub> = ε<sub>0</sub><i>A</i> d<i>E</i>/d<i>t</i>, then waste time looking for the missing area <i>A</i> and separation <i>d</i> (which aren’t even given). The shortcut is to remember that <b>inside the gap</b> <i>I</i><sub>d</sub> = <i>I</i><sub>c</sub> = d<i>q</i>/d<i>t</i> — no area, no ε<sub>0</sub>, no flux needed.',
          '<b>Quick solve:</b><br><i>I</i><sub>d</sub> = d<i>q</i>/d<i>t</i> = <i>q</i><sub>0</sub><i>ω</i> cos(<i>ωt</i>) ⇒ (<i>I</i><sub>d</sub>)<sub>peak</sub> = <i>q</i><sub>0</sub><i>ω</i> = <i>q</i><sub>0</sub>(2π<i>f</i>)<br>(<i>I</i><sub>d</sub>)<sub>peak</sub> = (8.0 × 10<sup>−9</sup>)(2π × 50) = (8.0 × 10<sup>−9</sup>)(314.2)',
          '<b>Bonus elimination check:</b> if a fully-charged steady-DC capacitor were offered as an answer choice for “displacement current,” reject it instantly — steady charge means d<i>q</i>/d<i>t</i> = 0, so <i>I</i><sub>d</sub> = 0.',
        ],
        ans: '(<i>I</i><sub>d</sub>)<sub>peak</sub> ≈ 2.5 × 10<sup>−6</sup> A = 2.5 μA',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: RC charging + Ampère–Maxwell',
        q: 'A capacitor with circular plates of radius <i>R</i> = 6.0 cm and capacitance <i>C</i> = 5.0 nF is charged through a resistor <i>R</i><sub>s</sub> = 2.0 MΩ from a <i>V</i><sub>0</sub> = 100 V battery. At <i>t</i> equal to one time constant, find (a) the conduction current, and (b) the magnetic field at a point <i>r</i> = 3.0 cm from the axis, between the plates.',
        steps: [
          '<b>Concept 1 — RC charging.</b> Time constant <i>τ</i> = <i>R</i><sub>s</sub><i>C</i> = (2.0 × 10<sup>6</sup>)(5.0 × 10<sup>−9</sup>) = 1.0 × 10<sup>−2</sup> s. The conduction current decays as<br><i>I</i><sub>c</sub> = (<i>V</i><sub>0</sub>/<i>R</i><sub>s</sub>) <i>e</i><sup>−<i>t</i>/<i>τ</i></sup>.',
          'At <i>t</i> = <i>τ</i>:<br><i>I</i><sub>c</sub> = (100/(2.0 × 10<sup>6</sup>)) <i>e</i><sup>−1</sup> = (5.0 × 10<sup>−5</sup>)(0.368) ≈ 1.84 × 10<sup>−5</sup> A.',
          'So <i>I</i><sub>d</sub> = <i>I</i><sub>c</sub> ≈ 1.84 × 10<sup>−5</sup> A. <b>(a)</b>',
          '<b>Concept 2 — Ampère–Maxwell for <i>B</i> between plates.</b> The displacement current is spread uniformly across the plate area, so the fraction enclosed by a loop of radius <i>r</i> is <i>I</i><sub>d</sub> π<i>r</i><sup>2</sup>/(π<i>R</i><sup>2</sup>) = <i>I</i><sub>d</sub> <i>r</i><sup>2</sup>/<i>R</i><sup>2</sup>. By symmetry <i>B</i> is constant on the loop:<br><i>B</i>(2π<i>r</i>) = μ<sub>0</sub><i>I</i><sub>d</sub> <i>r</i><sup>2</sup>/<i>R</i><sup>2</sup> ⇒ <i>B</i> = μ<sub>0</sub><i>I</i><sub>d</sub><i>r</i>/(2π<i>R</i><sup>2</sup>).',
          '<b>Substitute</b> (<i>r</i> = 0.03 m, <i>R</i> = 0.06 m):<br><i>B</i> = (4π × 10<sup>−7</sup>)(1.84 × 10<sup>−5</sup>)(0.03)/(2π(0.06)<sup>2</sup>) = (2 × 10<sup>−7</sup>)(1.84 × 10<sup>−5</sup>)(0.03)/(0.06)<sup>2</sup><br><i>B</i> = (1.10 × 10<sup>−13</sup>)/(3.6 × 10<sup>−3</sup>)',
          'The field is tiny — which is exactly why Maxwell’s prediction was so hard to confirm experimentally, and so important once it was.',
        ],
        ans: '<i>B</i> ≈ 3.1 × 10<sup>−11</sup> T.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: lossy dielectric',
        q: 'A capacitor is filled with a material of relative permittivity <i>ε</i><sub>r</sub> = 4.0 and small conductivity <i>σ</i> = 1.0 × 10<sup>−4</sup> S m<sup>−1</sup>. An AC voltage <i>V</i> = <i>V</i><sub>0</sub> sin(<i>ωt</i>) is applied. (a) Find the ratio of the amplitudes of displacement current density to conduction current density at the Indian mains frequency <i>f</i> = 50 Hz. (b) At what frequency are the two equal?',
        steps: [
          '<b>Set up both current densities.</b> With gap <i>d</i>, the field is <i>E</i> = (<i>V</i><sub>0</sub>/<i>d</i>) sin <i>ωt</i>.<br>• Conduction: <i>j</i><sub>c</sub> = <i>σE</i> = <i>σ</i>(<i>V</i><sub>0</sub>/<i>d</i>) sin <i>ωt</i> ⇒ <i>j</i><sub>c0</sub> = <i>σV</i><sub>0</sub>/<i>d</i>.<br>• Displacement: <i>j</i><sub>d</sub> = <i>ε</i> d<i>E</i>/d<i>t</i> = <i>ε</i><sub>r</sub>ε<sub>0</sub>(<i>V</i><sub>0</sub>/<i>d</i>)<i>ω</i> cos <i>ωt</i> ⇒ <i>j</i><sub>d0</sub> = <i>ε</i><sub>r</sub>ε<sub>0</sub><i>ωV</i><sub>0</sub>/<i>d</i>.',
          '<b>(a) Ratio of amplitudes</b> (<i>V</i><sub>0</sub>/<i>d</i> cancels):<br><i>j</i><sub>d0</sub>/<i>j</i><sub>c0</sub> = <i>ε</i><sub>r</sub>ε<sub>0</sub><i>ω</i>/<i>σ</i>, <i>ω</i> = 2π(50) = 314 rad s<sup>−1</sup>.<br><i>j</i><sub>d0</sub>/<i>j</i><sub>c0</sub> = (4.0)(8.85 × 10<sup>−12</sup>)(314)/(1.0 × 10<sup>−4</sup>) = (1.11 × 10<sup>−8</sup>)/(1.0 × 10<sup>−4</sup>)',
          'Conduction utterly dominates — at 50 Hz this lossy material behaves essentially like a (poor) conductor, not a capacitor.',
          '<b>(b) Crossover frequency</b> (set the ratio to 1):<br><i>ω</i> = <i>σ</i>/(<i>ε</i><sub>r</sub>ε<sub>0</sub>) = (1.0 × 10<sup>−4</sup>)/((4.0)(8.85 × 10<sup>−12</sup>)) ≈ 2.82 × 10<sup>6</sup> rad s<sup>−1</sup> ⇒ <i>f</i> = <i>ω</i>/(2π)',
          '<b>The deep insight:</b> the same material acts like a conductor at low frequencies (conduction wins) and like a dielectric/insulator at high frequencies (displacement wins). Displacement current isn’t a textbook curiosity — it governs how real materials respond to fast-changing fields.',
        ],
        ans: '(a) <i>j</i><sub>d0</sub>/<i>j</i><sub>c0</sub> ≈ 1.1 × 10<sup>−4</sup>; (b) <i>f</i> ≈ 4.5 × 10<sup>5</sup> Hz.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A parallel plate capacitor of plate area 0.02 m<sup>2</sup> is being charged so that the electric field between its plates increases at 1.5 × 10<sup>9</sup> V m<sup>−1</sup> s<sup>−1</sup>. Find the displacement current.',
            a: '≈ 2.66 × 10<sup>−1</sup> A (≈ 0.27 A)',
          },
          {
            q: '[NEET] The voltage across a capacitor is <i>V</i> = 30 sin(200<i>t</i>) volt and its capacitance is 2 μF. Find the peak displacement current. (<b>Hint:</b> <i>I</i><sub>d</sub> = <i>I</i><sub>c</sub> = <i>C</i> d<i>V</i>/d<i>t</i>.)',
            a: '1.2 × 10<sup>−2</sup> A = 12 mA',
          },
          {
            q: '[JEE Main] A parallel plate capacitor with circular plates of radius 8.0 cm carries a conduction current of 0.20 A while charging. Find the magnetic field (a) at the edge of the plates, and (b) at a radius of 4.0 cm from the axis, between the plates.',
            a: '(a) 5.0 × 10<sup>−7</sup> T, (b) 2.5 × 10<sup>−7</sup> T',
          },
          {
            q: '[JEE Main] The charge on a capacitor grows as <i>q</i> = (4<i>t</i><sup>2</sup> + 2<i>t</i>) μC, where <i>t</i> is in seconds. Find the displacement current between the plates at <i>t</i> = 3 s.',
            a: '26 μA',
          },
          {
            q: '[JEE Advanced] A capacitor filled with a dielectric (<i>ε</i><sub>r</sub> = 2.5, conductivity <i>σ</i> = 5 × 10<sup>−6</sup> S m<sup>−1</sup>) is driven by an AC source. Find the angular frequency at which the displacement current density is exactly <b>twice</b> the conduction current density.',
            a: '<i>ω</i> ≈ 4.5 × 10<sup>5</sup> rad s<sup>−1</sup>',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In a charging parallel plate capacitor, the displacement current between the plates is:',
        opts: [
          {
            label: 'zero',
            nudge: '<b>(A)</b> trap: students confuse “no charge crosses the gap” (true) with “no current” (false) — there is no conduction current, but there is displacement current.',
          },
          { label: 'equal to the conduction current in the wire', nudge: null },
          { label: 'half the conduction current', nudge: '<b>(C)</b> invented fraction with no basis.' },
          {
            label: 'infinite',
            nudge: '<b>(D)</b> trap from imagining a “broken circuit”; the field changes smoothly, so the current is finite.',
          },
        ],
        correct: 1,
        solution: 'Continuity of total current around the circuit demands <i>I</i><sub>d</sub> = <i>I</i><sub>c</sub> in the gap; the derivation ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i> = d<i>q</i>/d<i>t</i> = <i>I</i><sub>c</sub> proves it.',
      },
      {
        t: 'mcq',
        q: 'Maxwell’s modification of Ampère’s law was necessary because the original law:',
        opts: [
          { label: 'violated energy conservation', nudge: '<b>(A)</b> sounds weighty but isn’t the actual reason.' },
          { label: 'gave contradictory values of ∮ <i>B⃗</i> · d<i>l⃗</i> for different surfaces sharing the same boundary loop', nudge: null },
          {
            label: 'could not handle steady currents',
            nudge: '<b>(C)</b> backwards — the original law works perfectly for steady currents; it fails for time-varying fields.',
          },
          {
            label: 'ignored magnetic monopoles',
            nudge: '<b>(D)</b> trap: monopoles relate to Gauss’s law for magnetism, a different equation entirely.',
          },
        ],
        correct: 1,
        solution: 'The two-surface argument across a capacitor gap produces two contradictory values of ∮ <i>B⃗</i> · d<i>l⃗</i> for one loop — a logical inconsistency.',
      },
      {
        t: 'mcq',
        q: 'Which of Maxwell’s equations expresses that isolated magnetic poles do not exist?',
        opts: [
          {
            label: '∮ <i>E⃗</i> · d<i>A⃗</i> = <i>q</i>/ε<sub>0</sub>',
            nudge: '<b>(A)</b> is Gauss for electricity (electric charges do exist as monopoles).',
          },
          { label: '∮ <i>B⃗</i> · d<i>A⃗</i> = 0', nudge: null },
          {
            label: '∮ <i>E⃗</i> · d<i>l⃗</i> = −dΦ<sub>B</sub>/d<i>t</i>',
            nudge: '<b>(C)</b> is Faraday’s law (changing <i>B</i> makes <i>E</i>).',
          },
          {
            label: '∮ <i>B⃗</i> · d<i>l⃗</i> = μ<sub>0</sub><i>I</i><sub>c</sub> + μ<sub>0</sub>ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i>',
            nudge: '<b>(D)</b> is Ampère–Maxwell (sources of <i>B</i>).',
          },
        ],
        correct: 1,
        solution: 'Zero net magnetic flux through any closed surface means magnetic field lines always close on themselves — no isolated north or south pole (no monopole).',
      },
      {
        t: 'mcq',
        q: 'A capacitor is fully charged and connected to a steady DC source. The displacement current between its plates is:',
        opts: [
          { label: 'maximum', nudge: '<b>(A)</b> trap: assumes a capacitor always has displacement current.' },
          {
            label: 'equal to the leakage current',
            nudge: '<b>(B)</b> mixes in a real-material leakage effect not asked about for an ideal capacitor.',
          },
          { label: 'zero', nudge: null },
          {
            label: 'equal to ε<sub>0</sub><i>AE</i>/<i>d</i>',
            nudge: '<b>(D)</b> dimensional trap — that expression isn’t even a rate of change, so it can’t be a current.',
          },
        ],
        correct: 2,
        solution: 'At steady state the charge (and hence <i>E</i> and Φ<sub>E</sub>) is constant, so dΦ<sub>E</sub>/d<i>t</i> = 0 ⇒ <i>I</i><sub>d</sub> = 0.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1: “Displacement current is moving charge.”</b> It is not. No charge crosses the gap. It is the changing electric flux that mimics a current’s magnetic effect.',
          '<b>Pitfall 2: Forgetting <i>I</i><sub>d</sub> = 0 at steady state.</b> A constant field means dΦ<sub>E</sub>/d<i>t</i> = 0. Watch for “fully charged” or “steady DC” wording — it’s almost always a zero-displacement-current cue.',
          '<b>Pitfall 3: Hunting for <i>A</i>, <i>d</i>, and ε<sub>0</sub> when they cancel.</b> Inside the gap <i>I</i><sub>d</sub> = <i>I</i><sub>c</sub> = d<i>q</i>/d<i>t</i> = <i>C</i> d<i>V</i>/d<i>t</i>. Use this and skip the flux machinery entirely.',
          '<b>Pitfall 4: Using full <i>I</i><sub>d</sub> instead of the enclosed fraction for <i>B</i>.</b> For a point at radius <i>r</i> < <i>R</i> between circular plates, only <i>I</i><sub>d</sub> <i>r</i><sup>2</sup>/<i>R</i><sup>2</sup> is enclosed. Using the whole <i>I</i><sub>d</sub> overestimates <i>B</i>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For displacement-current numericals, your first move should always be to ask “what’s the easiest expression for the rate of change here?” If charge is given → use d<i>q</i>/d<i>t</i>. If voltage is given → use <i>C</i> d<i>V</i>/d<i>t</i>. If field rate is given → use ε<sub>0</sub><i>A</i> d<i>E</i>/d<i>t</i>. Pick the one that matches the data and you avoid 90% of the algebra.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Displacement current',
            note: '<i>I</i><sub>d</sub> = ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i> — a changing electric flux acts like a current (no charge actually flows).',
          },
          {
            f: 'In a capacitor gap',
            note: '<i>I</i><sub>d</sub> = <i>I</i><sub>c</sub> = d<i>q</i>/d<i>t</i> = <i>C</i> d<i>V</i>/d<i>t</i> (use whichever the problem gives).',
          },
          {
            f: 'Ampère–Maxwell law',
            note: '∮ <i>B⃗</i> · d<i>l⃗</i> = μ<sub>0</sub>(<i>I</i><sub>c</sub> + <i>I</i><sub>d</sub>).',
          },
          {
            f: '<i>B</i> between circular plates (radius <i>r</i> < <i>R</i>)',
            note: '<i>B</i> = μ<sub>0</sub><i>I</i><sub>d</sub><i>r</i>/(2π<i>R</i><sup>2</sup>) (only the enclosed fraction counts).',
          },
          {
            f: 'Maxwell’s 4 equations',
            note: 'Gauss–E (<i>q</i>/ε<sub>0</sub>), Gauss–B (0, no monopoles), Faraday (−dΦ<sub>B</sub>/d<i>t</i>), Ampère–Maxwell (μ<sub>0</sub><i>I</i><sub>c</sub> + μ<sub>0</sub>ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i>).',
          },
          {
            f: 'The big idea',
            note: 'a changing <i>E</i> makes <i>B</i>, a changing <i>B</i> makes <i>E</i> — they regenerate each other and propagate → <b>electromagnetic waves</b>.',
          },
        ],
        aids: [
          '“Changing flux IS a current” → <i>I</i><sub>d</sub> = ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i>.',
          'Maxwell’s four, in order: <b>“Charge, No-pole, Faraday, Ampère”</b> (G-E, G-B, F, A-M).',
          'ε<sub>0</sub> dimension: [M<sup>−1</sup> L<sup>−3</sup> T<sup>4</sup> A<sup>2</sup>].',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 526–530 ─────────────────────────
  {
    n: '02',
    title: 'Sources and Experimental Discovery of Electromagnetic Waves',
    kalam: 'Only accelerating charges radiate EM waves; a charge at rest or at constant velocity does not.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A favourite of <b>CBSE Boards</b> — “How are electromagnetic waves produced?” and “Describe Hertz’s experiment” are classic 2–3 mark questions. <b>NEET</b> asks conceptual one-liners (which charge radiates; Maxwell vs Hertz; do EM waves need a medium). <b>JEE Main</b> occasionally links an LC source to its radiated frequency or a point source to intensity. <b>JEE Advanced</b> may chain source power → intensity → field → force. The history (Hertz, J.C. Bose, Marconi) appears in assertion–reason and match-the-column items.',
      },
      {
        t: 'p',
        html: 'By the end of Topic 01, Maxwell had predicted electromagnetic waves on paper — his equations demanded that a changing electric field and a changing magnetic field could regenerate each other and sail off through empty space at speed <i>c</i>. But a prediction on paper is not a discovery. Two questions remained: <b>What actually produces an EM wave?</b> And <b>how do we prove they really exist?</b>',
      },
      {
        t: 'p',
        html: 'Start with the first. We know charges make electric fields and currents make magnetic fields. So what does it take to launch a wave? Consider three situations:<br>1. <b>A charge sitting still.</b> It has a steady electric field around it — but nothing changes, so no wave. Just a static field clinging to the charge.<br>2. <b>A charge moving at constant velocity.</b> This is a steady current, which adds a steady magnetic field. Still nothing is changing in the special way a wave needs — no radiation.<br>3. <b>A charge that is accelerating.</b> Now the fields it carries are constantly being reshaped. The disturbance can’t keep up with the charge, so a “kink” in the field lines breaks away and travels outward on its own. <b>That detached, self-propagating ripple is an electromagnetic wave.</b>',
      },
      {
        t: 'p',
        html: 'The headline is therefore beautifully simple: <b>only accelerating charges radiate electromagnetic waves.</b>',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Drop a stone into a still pond and ripples spread out — because the water surface was suddenly accelerated. A stone resting on the surface, or gliding at constant speed just beneath it, makes no new ripples. A charge is the same: jiggle it (accelerate it) and it sends EM ripples across space.',
      },
      {
        t: 'p',
        html: 'Now, the cleanest way to keep a charge accelerating is to make it <b>oscillate</b> — back and forth in simple harmonic motion. A charge oscillating at frequency <i>ν</i> is accelerating the whole time, and it radiates an EM wave of <b>exactly that frequency</b>, <i>ν</i><sub>wave</sub> = <i>ν</i><sub>charge</sub>. This is precisely how a radio antenna works: an alternating current drives electrons up and down the antenna rod millions of times a second, and the tower beams out radio waves at that frequency. The All India Radio transmitter near your town is doing nothing more exotic than shaking electrons at the right rate.',
      },
      {
        t: 'p',
        html: 'A natural electrical “shaker” is the <b>LC circuit</b> from your AC chapter: charge sloshes between capacitor and inductor at frequency <i>ν</i> = 1/(2π√(<i>LC</i>)). Couple that oscillation to an antenna and you have a tunable EM-wave source — turn the dial (change <i>L</i> or <i>C</i>) and you retune the broadcast.',
      },
      {
        t: 'p',
        html: 'And here is a property that sets EM waves apart from sound or water waves: <b>they need no medium.</b> The fields sustain each other, so they cross the vacuum of space happily — which is why sunlight reaches Earth across 150 million km of nothing.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• Radiation requires <b>acceleration</b> — uniform-velocity charges and steady DC currents do <b>not</b> radiate.<br>• The radiated frequency equals the source’s oscillation frequency (idealised, single-frequency source).<br>• We treat the antenna/source as small compared to the distance at which we observe the wave (the “far field”).',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Radiated frequency = source frequency',
        main: '<i>ν</i><sub>wave</sub> = <i>ν</i><sub>charge</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'LC-oscillator frequency (a standard EM-wave source)',
        main: '<i>ν</i> = 1/(2π√(<i>LC</i>))',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Poynting vector',
        main: 'The rate of energy flow carried by the wave, per unit area, pointing in the direction of travel<br><i>S⃗</i> = (1/μ<sub>0</sub>) <i>E⃗</i> × <i>B⃗</i><br>|<i>S⃗</i>|<sub>avg</sub> = <i>I</i> = <i>E</i><sub>rms</sub><sup>2</sup>/(μ<sub>0</sub><i>c</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Intensity from a point source',
        main: 'Energy from an isotropic (point) source spreads over a sphere, so it falls as the inverse square of distance<br><i>I</i> = <i>P</i>/(4π<i>r</i><sup>2</sup>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Speed in a medium and refractive index (how the source’s wave slows once it enters matter)',
        main: '<i>v</i> = <i>c</i>/<i>n</i><br><i>n</i> = √(<i>μ</i><sub>r</sub><i>ε</i><sub>r</sub>) → <i>n</i> ≈ √<i>ε</i><sub>r</sub> (non-magnetic)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Larmor formula',
        main: 'Power radiated by an accelerating charge (beyond the CBSE syllabus, quoted for insight — the Larmor result)<br><i>P</i> = <i>q</i><sup>2</sup><i>a</i><sup>2</sup>/(6πε<sub>0</sub><i>c</i><sup>3</sup>) (radiated power ∝ <i>a</i><sup>2</sup>)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'This single proportionality, <i>P</i> ∝ <i>a</i><sup>2</sup>, explains why high-frequency oscillations (large accelerations) radiate far more strongly than low-frequency ones.',
      },
      {
        t: 'p',
        html: '<b>Notation & units:</b> <i>ν</i> = frequency (Hz); <i>L</i> = inductance (H); <i>C</i> = capacitance (F); <i>S⃗</i> = Poynting vector (W m<sup>−2</sup>); <i>P</i> = power (W); <i>r</i> = distance from source (m); <i>n</i> = refractive index; <i>μ</i><sub>r</sub>, <i>ε</i><sub>r</sub> = relative permeability and permittivity; <i>a</i> = acceleration (m s<sup>−2</sup>).',
      },
      {
        t: 'table',
        title: 'Dimensional formula of the core new quantity',
        head: ['Quantity', 'SI Unit', 'Dimensional Formula'],
        rows: [['Poynting vector <i>S⃗</i>', 'W m<sup>−2</sup>', '[M<sup>1</sup> L<sup>0</sup> T<sup>−3</sup>]']],
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: '(There is no single clean “derivation” here, so we lay out the two logical chains a student must be able to reproduce: how a wave is launched, and how Hertz proved it.)',
      },
      {
        t: 'proc',
        title: 'Procedure A — Why an accelerating charge launches a wave (the causal chain)',
        steps: [
          'An accelerating charge means a <b>time-varying current</b>. <b>Why:</b> acceleration changes velocity, and changing charge-motion is a changing current.',
          'A time-varying current produces a <b>time-varying magnetic field</b> <i>B⃗</i>. <b>Why:</b> this is the Ampère–Maxwell law from Topic 01 in action.',
          'That changing <i>B⃗</i> produces a <b>time-varying electric field</b> <i>E⃗</i>. <b>Why:</b> Faraday’s law — a changing magnetic field induces an electric field.',
          'The changing <i>E⃗</i> in turn regenerates <i>B⃗</i> a little further out, and the cycle repeats outward. <b>Why:</b> the two induction laws feed each other, exactly the coupling that makes a self-sustaining wave.',
          'The result is a disturbance that <b>detaches from the source and propagates at <i>c</i></b> — an electromagnetic wave carrying energy away (its energy flow given by the Poynting vector).',
        ],
      },
      {
        t: 'p',
        html: 'Heinrich Hertz set out to physically demonstrate Maxwell’s predicted waves.',
      },
      {
        t: 'proc',
        title: 'Procedure B — Hertz’s experiment (1887): the experimental discovery',
        steps: [
          '<b>Transmitter:</b> an induction coil drove a high voltage across a small air gap between two metal plates/rods. Sparks jumped the gap, and during each spark the charges oscillated rapidly back and forth — an accelerating-charge source radiating EM waves in the radio-frequency region (wavelengths of order a few metres). <b>Why this works:</b> the oscillating spark current is a burst of accelerating charge — exactly Procedure A.',
          '<b>Receiver:</b> a separate loop of wire with its own tiny gap, placed some metres away with no wires connecting it to the transmitter. <b>Why separate:</b> to prove energy crossed empty space, not a conductor.',
          '<b>Observation:</b> whenever the transmitter sparked, faint sparks also appeared across the receiver’s gap. Energy had travelled through space and induced oscillations in the distant loop. <b>Conclusion:</b> electromagnetic waves are real and can be both <b>produced and detected</b>.',
          '<b>Clinching the case:</b> Hertz reflected the waves off a metal sheet to set up <b>standing waves</b>, measured the distance between adjacent nodes (<i>λ</i>/2) to get the wavelength <i>λ</i>, knew the frequency <i>ν</i> of his oscillator, and computed the speed <i>v</i> = <i>νλ</i>. It came out equal to <i>c</i> — and he further showed the waves reflect, refract, interfere and polarise just like light. Maxwell was vindicated.',
        ],
      },
      {
        t: 'p',
        html: '<b>The Indian and practical sequel.</b> Soon after, in Kolkata (around 1895), <b>Jagadish Chandra Bose</b> generated EM waves of very short wavelength (millimetre-to-centimetre microwaves) and used them to ring a bell and trigger devices remotely — pioneering microwave/millimetre-wave technology. <b>Guglielmo Marconi</b> then turned the discovery into long-distance wireless telegraphy, eventually sending signals across the Atlantic — the birth of radio communication. <b>Roles to remember:</b> <b>Maxwell predicted, Hertz demonstrated, Bose and Marconi applied.</b>',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'An antenna is driven by an LC circuit with inductance <i>L</i> = 0.50 μH and capacitance <i>C</i> = 2.0 pF. Find the frequency of the electromagnetic waves it radiates and name the band.',
        steps: [
          '<i>ν</i> = 1/(2π√(<i>LC</i>)) = 1/(2π√((0.50 × 10<sup>−6</sup>)(2.0 × 10<sup>−12</sup>)))',
          '√(<i>LC</i>) = √(1.0 × 10<sup>−18</sup>) = 1.0 × 10<sup>−9</sup> s ⇒ <i>ν</i> = 1/(2π(1.0 × 10<sup>−9</sup>))',
          'At about 160 MHz this lies in the <b>radio (VHF) band</b> — the region used for FM and TV broadcasting. The radiated frequency equals the circuit’s oscillation frequency.',
        ],
        ans: '<i>ν</i> ≈ 1.6 × 10<sup>8</sup> Hz.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which of the following produces electromagnetic waves: (i) a charge at rest, (ii) a charge moving with constant velocity, (iii) a charge oscillating at 9 GHz? For the one that does, name the band.',
        steps: [
          '<b>The trap:</b> students think any moving charge radiates. It does <b>not</b> — only an accelerating charge does.',
          '(i) rest → static field, <b>no wave</b>.',
          '(ii) constant velocity → steady current, <b>no wave</b> (no acceleration).',
          '(iii) oscillating → continuously accelerating → <b>radiates</b>, at <i>ν</i> = 9 GHz = 9 × 10<sup>9</sup> Hz, which is the <b>microwave</b> band.',
        ],
        ans: 'Only the oscillating charge radiates; 9 GHz ⇒ microwave.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: source power → field',
        q: 'A small transmitter radiates <i>P</i> = 100 W equally in all directions. Find (a) the intensity and (b) the rms electric field at a distance <i>r</i> = 50 m.',
        steps: [
          '<b>(a)</b> Energy spreads over a sphere of radius <i>r</i>:<br><i>I</i> = <i>P</i>/(4π<i>r</i><sup>2</sup>) = 100/(4π(50)<sup>2</sup>) = 100/(3.14 × 10<sup>4</sup>)',
          '<b>(b)</b> Link to the field via <i>I</i> = ε<sub>0</sub><i>cE</i><sub>rms</sub><sup>2</sup> (Topic 03):<br><i>E</i><sub>rms</sub> = √(<i>I</i>/(ε<sub>0</sub><i>c</i>)) = √((3.2 × 10<sup>−3</sup>)/((8.85 × 10<sup>−12</sup>)(3 × 10<sup>8</sup>))) = √1.20',
          'So a 100 W transmitter gives only about a volt-per-metre at 50 m — and it would fall off as 1/<i>r</i> for the field, 1/<i>r</i><sup>2</sup> for the intensity.',
        ],
        ans: '(a) <i>I</i> ≈ 3.2 × 10<sup>−3</sup> W m<sup>−2</sup>; (b) <i>E</i><sub>rms</sub> ≈ 1.1 V m<sup>−1</sup>.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: source → intensity → force',
        q: 'An isotropic source radiates <i>P</i> = 1.0 kW. A perfectly absorbing disc of area <i>A</i> = 1.0 cm<sup>2</sup> is held facing the source at <i>r</i> = 10 m. Find (a) the intensity at the disc and (b) the radiation force on it.',
        steps: [
          '<b>(a)</b> <i>I</i> = <i>P</i>/(4π<i>r</i><sup>2</sup>) = 1000/(4π(10)<sup>2</sup>) = 1000/1257',
          '<b>(b)</b> For full absorption the radiation pressure is <i>I</i>/<i>c</i>, so the force is<br><i>F</i> = <i>IA</i>/<i>c</i> = (0.80)(1.0 × 10<sup>−4</sup>)/(3 × 10<sup>8</sup>)',
          'If the disc were perfectly reflecting, this would double to ≈ 5.3 × 10<sup>−13</sup> N. The chain — source power → inverse-square intensity → field and momentum — ties this whole chapter together.',
        ],
        ans: '(a) <i>I</i> ≈ 0.80 W m<sup>−2</sup>; (b) <i>F</i> ≈ 2.7 × 10<sup>−13</sup> N.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What type of charge motion is necessary to radiate electromagnetic waves, and what decides the frequency of the radiated wave? State the roles of Maxwell and Hertz in one line each.',
            a: 'accelerating (oscillating) charge; frequency = source’s oscillation frequency; Maxwell predicted EM waves, Hertz demonstrated them',
          },
          {
            q: '[NEET] The electrons in a transmitting antenna oscillate at 6.0 × 10<sup>8</sup> Hz. Find the wavelength of the radiated wave and name the band.',
            a: '<i>λ</i> = 0.50 m, radio (UHF)',
          },
          {
            q: '[JEE Main] An LC circuit has <i>L</i> = 8.0 μH and <i>C</i> = 2.0 pF. Find the frequency of the EM waves it can radiate.',
            a: '≈ 4.0 × 10<sup>7</sup> Hz (40 MHz, radio)',
          },
          {
            q: '[JEE Main] A point source radiates 60 W isotropically. Find the intensity at a distance of 30 m.',
            a: '≈ 5.3 × 10<sup>−3</sup> W m<sup>−2</sup>',
          },
          {
            q: '[JEE Advanced] An isotropic source radiates steadily. Find the ratio of the rms electric fields at distances 10 m and 40 m from it, and the ratio of the intensities at those points.',
            a: '<i>E</i>-field ratio = 4 : 1; intensity ratio = 16 : 1',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Electromagnetic waves are produced by:',
        opts: [
          { label: 'a stationary charge', nudge: '<b>(A)</b> gives a static field, no radiation.' },
          {
            label: 'a charge moving with uniform velocity',
            nudge: '<b>(B)</b> gives a steady current and steady magnetic field — no acceleration, no wave (a very common trap).',
          },
          { label: 'an accelerating charge', nudge: null },
          {
            label: 'any charge, moving or not',
            nudge: '<b>(D)</b> overgeneralises; stationary and uniform-velocity charges don’t radiate.',
          },
        ],
        correct: 2,
        solution: 'Only acceleration creates the time-varying fields that detach and propagate.',
      },
      {
        t: 'mcq',
        q: 'Hertz’s experiment is historically important because it:',
        opts: [
          { label: 'measured the charge on the electron', nudge: '<b>(A)</b> is Millikan’s oil-drop experiment.' },
          { label: 'experimentally produced and detected electromagnetic waves', nudge: null },
          { label: 'discovered X-rays', nudge: '<b>(C)</b> is Röntgen.' },
          {
            label: 'first proposed the displacement current',
            nudge: '<b>(D)</b> is Maxwell’s theoretical contribution — Hertz tested it, didn’t propose it.',
          },
        ],
        correct: 1,
        solution: 'Hertz generated EM waves with a spark-gap oscillator and detected them in a distant loop, confirming Maxwell.',
      },
      {
        t: 'mcq',
        q: 'A charge oscillates with frequency <i>f</i>. The frequency of the electromagnetic wave it radiates is:',
        opts: [
          { label: '<i>f</i>/2', nudge: '<b>(A)</b>/<b>(B)</b> invent factors with no physical basis.' },
          { label: '2<i>f</i>', nudge: '<b>(A)</b>/<b>(B)</b> invent factors with no physical basis.' },
          { label: '<i>f</i>', nudge: null },
          { label: 'independent of <i>f</i>', nudge: '<b>(D)</b> contradicts the direct link between source and wave.' },
        ],
        correct: 2,
        solution: 'The wave frequency equals the source’s oscillation frequency.',
      },
      {
        t: 'mcq',
        q: 'Which statement about electromagnetic waves is correct?',
        opts: [
          { label: 'They require a material medium to travel', nudge: '<b>(A)</b> confuses them with sound/mechanical waves.' },
          { label: 'They travel through vacuum at speed <i>c</i>', nudge: null },
          { label: 'They are longitudinal', nudge: '<b>(C)</b> they are transverse.' },
          {
            label: 'They are produced by charges moving at constant velocity',
            nudge: '<b>(D)</b> requires acceleration, not constant velocity.',
          },
        ],
        correct: 1,
        solution: 'EM waves are self-sustaining and cross vacuum at <i>c</i> — that’s how sunlight reaches us.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1: “Any moving charge radiates.”</b> Only <b>accelerating</b> charges do. A charge at constant velocity (a steady current) does <b>not</b> radiate.',
          '<b>Pitfall 2: Swapping Maxwell and Hertz.</b> <b>Maxwell predicted</b> EM waves theoretically; <b>Hertz demonstrated</b> them experimentally. CBSE marks hinge on stating these roles correctly.',
          '<b>Pitfall 3: Thinking EM waves need a medium.</b> They don’t — fields sustain each other, so they cross vacuum. (Don’t confuse with sound.)',
          '<b>Pitfall 4: Forgetting the inverse-square law for a point source.</b> Intensity falls as 1/<i>r</i><sup>2</sup>, so the field falls as 1/<i>r</i> — students often apply the wrong power.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any “source → effect” problem, walk one ladder: <i>P</i> → <i>I</i> = <i>P</i>/(4π<i>r</i><sup>2</sup>) → <i>E</i><sub>rms</sub> = √(<i>I</i>/(ε<sub>0</sub><i>c</i>)) → pressure = <i>I</i>/<i>c</i> (or 2<i>I</i>/<i>c</i> if reflecting). Every isotropic-source question is just a walk down these rungs.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Only accelerating charges radiate EM waves; a charge at rest or at constant velocity does not.', note: '' },
          {
            f: 'Radiated frequency = source frequency',
            note: '<i>ν</i><sub>wave</sub> = <i>ν</i><sub>charge</sub>; an LC source gives <i>ν</i> = 1/(2π√(<i>LC</i>)).',
          },
          { f: 'EM waves need no medium', note: 'they travel through vacuum at <i>c</i>.' },
          {
            f: 'Energy flow',
            note: 'Poynting vector <i>S⃗</i> = (1/μ<sub>0</sub>)<i>E⃗</i> × <i>B⃗</i>; isotropic-source intensity <i>I</i> = <i>P</i>/(4π<i>r</i><sup>2</sup>).',
          },
          {
            f: 'In a medium',
            note: '<i>v</i> = <i>c</i>/<i>n</i> with <i>n</i> = √(<i>μ</i><sub>r</sub><i>ε</i><sub>r</sub>) ≈ √<i>ε</i><sub>r</sub>.',
          },
          {
            f: 'History',
            note: '<b>Maxwell predicted</b> (1865) → <b>Hertz demonstrated</b> (1887) → <b>Bose</b> (microwaves, Kolkata) and <b>Marconi</b> (long-range radio) applied.',
          },
        ],
        aids: [
          '“Shake a charge, make a wave” — acceleration is the source.',
          '“Predicted, Proved, Applied = Maxwell, Hertz, Bose/Marconi.”',
          'Point source: “double the distance, quarter the intensity” (<i>I</i> ∝ 1/<i>r</i><sup>2</sup>).',
        ],
      },
    ],
  },
];
