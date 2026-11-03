import type { Topic } from '@/lib/textbooks';

/**
 * Class 12 Chapter 2, Topics 03 and 04: pp. 99–113 of the Class 12 Physics
 * Master Reference, word for word: Capacitance and Dielectrics (pp. 99–106)
 * and Electrostatics of Conductors (pp. 107–113). Each is split at its
 * Sections 1 to 8. Figures 2.4 (caption p. 101, drawn on p. 102) and 2.5
 * (caption p. 109, drawn on p. 110) are redrawn in lib/diagrams/physics-12-02.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 99–106 ─────────────────────────
  {
    n: '03',
    title: 'Capacitance and Dielectrics',
    kalam: 'A practical capacitor is just two conductors separated by an insulator — most simply, two parallel metal plates.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> One of the highest-yield topics in the chapter. CBSE Boards almost always carry the derivation of <i>C</i> = ε<sub>0</sub><i>A</i>/<i>d</i> and the energy-stored derivation, plus a “battery connected/disconnected” reasoning question. JEE Main loves dielectric-insertion numericals and energy changes; NEET reuses the same conceptual trap (does <i>V</i> change or does <i>Q</i>?) every year. JEE Advanced pushes into composite dielectrics, forces on slabs, and energy methods.',
      },
      {
        t: 'p',
        html: 'Think of an overhead water tank on the roof of a house. Pour in water and the level rises; the level (height) is set by how much water you’ve added and by the shape of the tank. A wide tank barely rises for a lot of water; a narrow pipe shoots up fast for a little. Now swap “water” for “electric charge” and “water level” for “voltage,” and you have a <b>capacitor</b>: a device that stores charge, where the voltage it reaches depends on how much charge you put in and on the geometry of the device.',
      },
      {
        t: 'p',
        html: '<b>Capacitance is the measure of that storage capacity</b> — how much charge a conductor system holds per volt of potential it rises to:<br><i>C</i> = <i>Q</i>/<i>V</i>.<br>A capacitor with large capacitance soaks up a lot of charge while barely changing its voltage — a wide tank. The most important and counterintuitive fact follows immediately: <b>capacitance is a property of geometry alone</b> (plate area, separation, and what fills the gap), not of how much charge you’ve stored or what voltage you’ve applied. Pouring more water into a tank doesn’t widen the tank; charging a capacitor more doesn’t change its capacitance. The ratio <i>Q</i>/<i>V</i> stays fixed because <i>Q</i> and <i>V</i> rise in lockstep.',
      },
      {
        t: 'p',
        html: 'A practical capacitor is just <b>two conductors separated by an insulator</b> — most simply, two parallel metal plates. Put +<i>Q</i> on one and −<i>Q</i> on the other; a uniform field appears in the gap, a potential difference <i>V</i> builds across it, and <i>C</i> = <i>Q</i>/<i>V</i> comes out depending only on the plate area <i>A</i> and gap <i>d</i>.',
      },
      {
        t: 'p',
        html: '<b>Now the dielectric.</b> Slide an insulating slab — glass, mica, plastic — into the gap and something useful happens. The slab can’t conduct, but its molecules polarise: they stretch or rotate so their positive ends face the negative plate and vice versa, like a parade of tiny compass needles lining up. These lined-up charges create their own field opposing the original, so the <b>net field inside the gap weakens</b> by a factor <i>K</i>, the <b>dielectric constant</b>. Weaker field means lower voltage for the same charge, which means more capacitance. A dielectric multiplies capacitance by <i>K</i>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> The single most important question in every dielectric problem is: “Is the battery still connected?” This one fork decides everything.<br>• <b>Battery disconnected</b> → the charge <i>Q</i> is trapped; it has nowhere to go. So <i>Q</i> is <b>king</b> (constant), and <i>V</i>, <i>E</i>, and the stored energy all adjust around it.<br>• <b>Battery connected</b> → the battery clamps the voltage <i>V</i> at its EMF. So <i>V</i> is <b>king</b> (constant), and <i>Q</i> and the stored energy adjust, with charge flowing in or out of the battery.',
      },
      {
        t: 'p',
        html: 'Get this fork right and dielectric questions become bookkeeping. Get it wrong and every downstream number is wrong.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• <i>C</i> = ε<sub>0</sub><i>A</i>/<i>d</i> assumes an <b>ideal</b> parallel-plate capacitor: plate separation <i>d</i> tiny compared to plate size, so the field is uniform and <b>fringing</b> at the edges is negligible.<br>• <i>K</i> ≥ 1 always; <i>K</i> = 1 for vacuum (and effectively air). A dielectric can only increase capacitance, never decrease it.<br>• The field-reduction picture <i>E</i> = <i>E</i><sub>0</sub>/<i>K</i> assumes the dielectric <b>completely fills</b> the gap. Partial fills must be analysed slab by slab.<br>• Every real dielectric has a <b>dielectric strength</b> — a maximum field it can withstand before it breaks down and conducts. This caps the usable voltage and is a different quantity from <i>K</i>.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Capacitance (definition)',
        main: '<i>C</i> = <i>Q</i>/<i>V</i>',
        legend: [
          '<i>Q</i> = magnitude of charge on each plate (C)',
          '<i>V</i> = potential difference across plates (V)',
        ],
        note: 'SI unit: <b>farad</b> (F = C V<sup>−1</sup>); practical units pF, nF, μF.<br>Dimensional formula: [M<sup>−1</sup> L<sup>−2</sup> T<sup>4</sup> A<sup>2</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Field and potential difference between parallel plates',
        main: '<i>E</i> = <i>σ</i>/ε<sub>0</sub> = <i>Q</i>/(ε<sub>0</sub><i>A</i>)<br><i>V</i> = <i>Ed</i>',
        legend: ['<i>σ</i> = surface charge density, <i>Q</i>/<i>A</i>'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Parallel-plate capacitance',
        main: '<i>C</i><sub>0</sub> = ε<sub>0</sub><i>A</i>/<i>d</i> (vacuum/air)<br><i>C</i> = <i>K</i>ε<sub>0</sub><i>A</i>/<i>d</i> = <i>KC</i><sub>0</sub> (dielectric-filled)',
        legend: [
          '<i>A</i> = plate area (m<sup>2</sup>)',
          '<i>d</i> = separation (m)',
          '<i>K</i> = dielectric constant (dimensionless, ≥ 1)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Effect of a dielectric (relative to vacuum values)',
        main: '<i>E</i> = <i>E</i><sub>0</sub>/<i>K</i><br><i>C</i> = <i>KC</i><sub>0</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Energy stored in a capacitor',
        main: '<i>U</i> = ½<i>CV</i><sup>2</sup> = <i>Q</i><sup>2</sup>/(2<i>C</i>) = ½<i>QV</i>',
        legend: [],
        note: 'Unit: joule (J). Use <i>Q</i><sup>2</sup>/(2<i>C</i>) when <b>charge is fixed</b> (battery disconnected), ½<i>CV</i><sup>2</sup> when <b>voltage is fixed</b> (battery connected) — the algebra of <i>K</i>-scaling then falls out cleanly.',
      },
      {
        t: 'formula',
        kicker: 'Energy density (energy per unit volume)',
        main: 'in vacuum (use <i>K</i>ε<sub>0</sub> in a dielectric):<br><i>u</i> = ½ε<sub>0</sub><i>E</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Dielectric-insertion summary</b> (capacitance always becomes <i>KC</i><sub>0</sub>):',
      },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Battery DISCONNECTED (Q fixed)', 'Battery CONNECTED (V fixed)'],
        rows: [
          ['Charge <i>Q</i>', 'unchanged', '×<i>K</i>'],
          ['Voltage <i>V</i>', '÷<i>K</i>', 'unchanged'],
          ['Field <i>E</i>', '÷<i>K</i>', 'unchanged'],
          ['Energy <i>U</i>', '÷<i>K</i>', '×<i>K</i>'],
        ],
      },

      { t: 'part', title: 'CBSE board derivations' },
      { t: 'p', html: '<b>Derivation A — Capacitance of a parallel-plate capacitor.</b>' },
      { t: 'fig', id: 'p12-02-fig-2.4' },
      {
        t: 'p',
        html: '<b>Setup and assumptions:</b> Two large parallel plates, each of area <i>A</i>, separated by a small gap <i>d</i> (so <i>d</i> ≪ √<i>A</i> and the field is uniform). One plate holds +<i>Q</i>, the other −<i>Q</i>, giving surface charge density <i>σ</i> = <i>Q</i>/<i>A</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — the field in the gap.</b> A single charged sheet produces a field <i>σ</i>/(2ε<sub>0</sub>) on each side. Between the plates, the fields of the two oppositely charged sheets point the <b>same way</b> and add; outside, they cancel. Hence the uniform field in the gap is<br><i>E</i> = <i>σ</i>/ε<sub>0</sub> = <i>Q</i>/(ε<sub>0</sub><i>A</i>).<br><b>Why they add inside:</b> the +<i>Q</i> sheet pushes a test charge away from itself, the −<i>Q</i> sheet pulls it toward itself — both effects drive the field in the same direction across the gap.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — the potential difference.</b> For a uniform field, <i>V</i> = <i>Ed</i> (from <i>V</i> = −∫ <i>E⃗</i> · d<i>l⃗</i> across a uniform field). So<br><i>V</i> = <i>Ed</i> = <i>Qd</i>/(ε<sub>0</sub><i>A</i>).',
      },
      {
        t: 'p',
        html: '<b>Step 3 — the capacitance.</b> By definition,<br><i>C</i> = <i>Q</i>/<i>V</i> = <i>Q</i>/(<i>Qd</i>/(ε<sub>0</sub><i>A</i>)) = ε<sub>0</sub><i>A</i>/<i>d</i>.<br><i>C</i><sub>0</sub> = ε<sub>0</sub><i>A</i>/<i>d</i>',
      },
      {
        t: 'p',
        html: 'Notice <i>Q</i> has cancelled — confirming capacitance depends only on geometry. Filling the gap with a dielectric replaces ε<sub>0</sub> by <i>K</i>ε<sub>0</sub>, giving <i>C</i> = <i>K</i>ε<sub>0</sub><i>A</i>/<i>d</i>.',
      },
      { t: 'p', html: '<b>Derivation B — Energy stored in a capacitor.</b>' },
      {
        t: 'p',
        html: '<b>Setup:</b> Charging a capacitor means ferrying charge from one plate to the other. This gets harder as you go: each extra bit of charge must be pushed across a potential difference that has already been built up by the charge before it.',
      },
      {
        t: 'p',
        html: '<b>The work to add a charge d<i>q</i>:</b> when the capacitor already holds charge <i>q</i>, its voltage is <i>V</i>′ = <i>q</i>/<i>C</i>. Moving a further small charge d<i>q</i> across this voltage costs<br>d<i>W</i> = <i>V</i>′ d<i>q</i> = (<i>q</i>/<i>C</i>) d<i>q</i>.',
      },
      {
        t: 'p',
        html: '<b>Total work to charge from 0 to <i>Q</i>:</b><br><i>W</i> = ∫<sub>0</sub><sup><i>Q</i></sup> (<i>q</i>/<i>C</i>) d<i>q</i> = (1/<i>C</i>) · <i>Q</i><sup>2</sup>/2 = <i>Q</i><sup>2</sup>/(2<i>C</i>).<br>This work is stored as electrostatic potential energy:<br><i>U</i> = <i>Q</i><sup>2</sup>/(2<i>C</i>) = ½<i>CV</i><sup>2</sup> = ½<i>QV</i><br>using <i>Q</i> = <i>CV</i> to switch between forms.',
      },
      {
        t: 'p',
        html: '<b>Physical reading — where the energy lives.</b> Dividing <i>U</i> = ½<i>CV</i><sup>2</sup> by the gap volume <i>Ad</i>, with <i>C</i> = ε<sub>0</sub><i>A</i>/<i>d</i> and <i>V</i> = <i>Ed</i>, gives the <b>energy density</b> <i>u</i> = ½ε<sub>0</sub><i>E</i><sup>2</sup>. The energy isn’t “on the plates” — it’s stored in the <b>electric field</b> filling the gap.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A parallel-plate capacitor has plates of area 200 cm<sup>2</sup> separated by 1.0 mm of air. (a) Find its capacitance. (b) If it is connected to a 50 V supply, find the charge on each plate.',
        steps: [
          '<b>Given:</b> <i>A</i> = 200 cm<sup>2</sup> = 2.0 × 10<sup>−2</sup> m<sup>2</sup>, <i>d</i> = 1.0 × 10<sup>−3</sup> m, <i>V</i> = 50 V.',
          '(a) <i>C</i><sub>0</sub> = ε<sub>0</sub><i>A</i>/<i>d</i> = (8.85 × 10<sup>−12</sup>)(2.0 × 10<sup>−2</sup>)/(1.0 × 10<sup>−3</sup>) = 1.77 × 10<sup>−10</sup> F',
          '(b) <i>Q</i> = <i>C</i><sub>0</sub><i>V</i> = (1.77 × 10<sup>−10</sup>)(50) = 8.85 × 10<sup>−9</sup> C',
        ],
        ans: '<i>C</i><sub>0</sub> = 177 pF; <i>Q</i> = 8.85 nC.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A 5 μF capacitor is charged to 100 V and then <b>disconnected</b> from the battery. A dielectric of constant <i>K</i> = 4 is now slid in to completely fill the gap. Find the new voltage and the new stored energy.',
        steps: [
          'The trap springs the instant a student assumes the voltage stays 100 V. <b>Battery disconnected</b> ⇒ <b><i>Q</i> is king.</b> The charge is locked:<br><i>Q</i> = <i>C</i><sub>0</sub><i>V</i><sub>0</sub> = (5 μF)(100 V) = 500 μC (fixed).',
          'The capacitance jumps to <i>C</i> = <i>KC</i><sub>0</sub> = 20 μF, so the voltage falls:<br><i>V</i> = <i>Q</i>/<i>C</i> = (500 μC)/(20 μF)',
          'For the energy, use the <b><i>Q</i>-fixed</b> form <i>U</i> = <i>Q</i><sup>2</sup>/(2<i>C</i>):<br><i>U</i><sub>0</sub> = <i>Q</i><sup>2</sup>/(2<i>C</i><sub>0</sub>) = (500 × 10<sup>−6</sup>)<sup>2</sup>/(2(5 × 10<sup>−6</sup>)) = 2.5 × 10<sup>−2</sup> J,   <i>U</i> = <i>Q</i><sup>2</sup>/(2<i>C</i>) = <i>U</i><sub>0</sub>/4 = 6.25 × 10<sup>−3</sup> J.',
          '<b>Speed rule:</b> disconnected ⇒ <i>Q</i> fixed ⇒ <i>V</i>, <i>E</i>, <i>U</i> all divide by <i>K</i>.',
        ],
        ans: '<i>V</i> = 25 V (not 100!), <i>U</i> = 6.25 mJ — both fell by the factor <i>K</i>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: '(dielectric effect on charge + energy change) A 10 μF capacitor is connected to a 200 V battery and <b>kept connected</b>. A dielectric of constant <i>K</i> = 5 is then inserted, completely filling the gap. Find (a) the charge before and after, (b) the extra charge drawn from the battery, (c) the change in stored energy.',
        steps: [
          '<b>Battery connected</b> ⇒ <b><i>V</i> is king</b>, fixed at 200 V. Capacitance rises to <i>C</i> = <i>KC</i><sub>0</sub> = 50 μF.',
          '(a) Charges:<br><i>Q</i><sub>0</sub> = <i>C</i><sub>0</sub><i>V</i> = (10 μF)(200 V) = 2000 μC,   <i>Q</i> = <i>CV</i> = (50 μF)(200 V) = 10000 μC.',
          '(b) Extra charge supplied by the battery:<br>Δ<i>Q</i> = <i>Q</i> − <i>Q</i><sub>0</sub> = 10000 − 2000 = 8000 μC',
          '(c) Energies (use the <b><i>V</i>-fixed</b> form <i>U</i> = ½<i>CV</i><sup>2</sup>):<br><i>U</i><sub>0</sub> = ½<i>C</i><sub>0</sub><i>V</i><sup>2</sup> = ½(10 × 10<sup>−6</sup>)(200)<sup>2</sup> = 0.20 J,   <i>U</i> = ½<i>CV</i><sup>2</sup> = 5<i>U</i><sub>0</sub> = 1.0 J.',
          '(The battery actually does Δ<i>Q</i> · <i>V</i> = 1.6 J of work; half is stored in the capacitor, and the other half is the work the field does in pulling the slab in — taken up by whatever holds the slab back, or ending as heat if the slab is let go — the recurring “factor of two.”)',
        ],
        ans: '<i>Q</i><sub>0</sub> = 2 mC, <i>Q</i> = 10 mC; extra Δ<i>Q</i> = 8 mC; Δ<i>U</i> = +0.80 J.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: '(composite dielectric — derive, then evaluate) A parallel-plate capacitor (plate area <i>A</i>, gap <i>d</i>) is filled with two dielectric slabs <b>stacked</b> one above the other, each of thickness <i>d</i>/2, with constants <i>K</i><sub>1</sub> and <i>K</i><sub>2</sub>. (a) Derive the capacitance. (b) Evaluate it for <i>A</i> = 100 cm<sup>2</sup>, <i>d</i> = 4.0 mm, <i>K</i><sub>1</sub> = 2, <i>K</i><sub>2</sub> = 4.',
        steps: [
          '(a) <b>Derivation by field analysis.</b> The same charge <i>Q</i> (density <i>σ</i> = <i>Q</i>/<i>A</i>) sits on the plates and threads through <b>both</b> slabs. In a medium of constant <i>K</i><sub><i>i</i></sub> the field is <i>E</i><sub><i>i</i></sub> = <i>σ</i>/(<i>K</i><sub><i>i</i></sub>ε<sub>0</sub>), so the potential drop across slab <i>i</i> (thickness <i>d</i>/2) is<br><i>V</i><sub><i>i</i></sub> = <i>E</i><sub><i>i</i></sub> · <i>d</i>/2 = <i>σd</i>/(2<i>K</i><sub><i>i</i></sub>ε<sub>0</sub>) = <i>Qd</i>/(2<i>K</i><sub><i>i</i></sub>ε<sub>0</sub><i>A</i>).',
          'The total voltage is the sum of the two drops:<br><i>V</i> = <i>V</i><sub>1</sub> + <i>V</i><sub>2</sub> = (<i>Qd</i>/(2ε<sub>0</sub><i>A</i>))(1/<i>K</i><sub>1</sub> + 1/<i>K</i><sub>2</sub>).',
          'Hence<br><i>C</i> = <i>Q</i>/<i>V</i> = (2ε<sub>0</sub><i>A</i>/<i>d</i>) · 1/(1/<i>K</i><sub>1</sub> + 1/<i>K</i><sub>2</sub>) = (2ε<sub>0</sub><i>A</i>/<i>d</i>) · <i>K</i><sub>1</sub><i>K</i><sub>2</sub>/(<i>K</i><sub>1</sub> + <i>K</i><sub>2</sub>).',
          '(b) Substituting <i>A</i> = 1.0 × 10<sup>−2</sup> m<sup>2</sup>, <i>d</i> = 4.0 × 10<sup>−3</sup> m:<br><i>C</i> = 2(8.85 × 10<sup>−12</sup>)(1.0 × 10<sup>−2</sup>)/(4.0 × 10<sup>−3</sup>) · (2)(4)/(2 + 4) = (4.425 × 10<sup>−11</sup>) · 8/6 ≈ 5.9 × 10<sup>−11</sup> F.',
          '(Stacked slabs share the charge and split the voltage — the structure behaves like two capacitors in series, even before we name them that.)',
        ],
        ans: '<i>C</i> = (2ε<sub>0</sub><i>A</i>/<i>d</i>) · <i>K</i><sub>1</sub><i>K</i><sub>2</sub>/(<i>K</i><sub>1</sub> + <i>K</i><sub>2</sub>) ≈ 59 pF.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A parallel-plate capacitor has plates of area 0.05 m<sup>2</sup> separated by 2.0 mm of air. Find its capacitance.',
            a: '<i>C</i> = 2.21 × 10<sup>−10</sup> F ≈ 221 pF.',
          },
          {
            q: '[NEET] A 2 μF capacitor is charged to 60 V and disconnected from the battery. A dielectric of constant <i>K</i> = 3 is then inserted to fill the gap. Find the new voltage and the new stored energy.',
            a: '<i>V</i> = 20 V; <i>U</i> = 1.2 × 10<sup>−3</sup> J (both fell by <i>K</i> = 3; <i>Q</i> = 120 μC fixed).',
          },
          {
            q: '[JEE Main] A 4 μF capacitor is charged to 250 V. Find the energy stored in it.',
            a: '<i>U</i> = 0.125 J.',
          },
          {
            q: '[JEE Main] A 3 μF capacitor is connected to a 100 V battery and kept connected. A dielectric of constant <i>K</i> = 4 is inserted, filling the gap. Find the extra charge drawn from the battery.',
            a: 'Δ<i>Q</i> = 900 μC = 9 × 10<sup>−4</sup> C.',
          },
          {
            q: '[JEE Advanced] A parallel-plate capacitor (area 0.02 m<sup>2</sup>, gap 1.0 mm) has two dielectric slabs placed <b>side by side</b>, each covering half the plate area, with constants <i>K</i><sub>1</sub> = 2 and <i>K</i><sub>2</sub> = 6. Find the capacitance.',
            a: 'Side-by-side ⇒ two capacitors in parallel: <i>C</i> = ε<sub>0</sub><i>A</i>(<i>K</i><sub>1</sub> + <i>K</i><sub>2</sub>)/(2<i>d</i>) ≈ 7.08 × 10<sup>−10</sup> F.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A parallel-plate capacitor is charged so that the charge on its plates is doubled. Its capacitance:',
        opts: [
          {
            label: 'doubles',
            nudge: '<b>(a)</b> and <b>(d)</b> assume <i>C</i> tracks charge — the core misconception this topic exists to fix.',
          },
          { label: 'halves', nudge: '<b>(b)</b> inverts even the wrong intuition that <i>C</i> tracks charge.' },
          { label: 'stays the same', nudge: null },
          {
            label: 'quadruples',
            nudge: '<b>(a)</b> and <b>(d)</b> assume <i>C</i> tracks charge — the core misconception this topic exists to fix.',
          },
        ],
        correct: 2,
        solution: 'Capacitance depends only on geometry and the dielectric (<i>C</i> = <i>K</i>ε<sub>0</sub><i>A</i>/<i>d</i>). Doubling <i>Q</i> simply doubles <i>V</i> too, leaving <i>Q</i>/<i>V</i> unchanged.',
      },
      {
        t: 'mcq',
        q: 'A capacitor is connected to a battery. While it remains connected, a dielectric slab is inserted to fill the gap. The charge on the plates:',
        opts: [
          { label: 'increases', nudge: null },
          { label: 'decreases', nudge: '<b>(b)</b> and <b>(d)</b> contradict the rise in <i>C</i> at fixed <i>V</i>.' },
          {
            label: 'stays the same',
            nudge: '<b>(c)</b> is the <b>disconnected</b> case — picked by students who memorise “charge is conserved” without checking whether the battery is still in the circuit.',
          },
          { label: 'drops to zero', nudge: '<b>(b)</b> and <b>(d)</b> contradict the rise in <i>C</i> at fixed <i>V</i>.' },
        ],
        correct: 0,
        solution: 'Battery connected ⇒ <i>V</i> fixed; <i>C</i> rises to <i>KC</i><sub>0</sub>, so <i>Q</i> = <i>CV</i> rises to <i>KQ</i><sub>0</sub>, the extra charge flowing in from the battery.',
      },
      {
        t: 'mcq',
        q: 'A capacitor is charged so that the voltage across it is doubled. The energy stored:',
        opts: [
          { label: 'doubles', nudge: '<b>(a)</b> is the linear-thinking trap — forgetting the square.' },
          { label: 'quadruples', nudge: null },
          { label: 'halves', nudge: '<b>(c)</b> and <b>(d)</b> ignore the dependence on <i>V</i> entirely.' },
          { label: 'is unchanged', nudge: '<b>(c)</b> and <b>(d)</b> ignore the dependence on <i>V</i> entirely.' },
        ],
        correct: 1,
        solution: '<i>U</i> = ½<i>CV</i><sup>2</sup> ∝ <i>V</i><sup>2</sup>, so doubling <i>V</i> multiplies <i>U</i> by 4.',
      },
      {
        t: 'mcq',
        q: 'A capacitor of capacitance <i>C</i> is charged through a battery of EMF <i>V</i>. The fraction of the energy supplied by the battery that ends up stored in the capacitor is:',
        opts: [
          { label: '100%', nudge: '<b>(a)</b> forgets dissipation; <b>(c)</b> misremembers the fraction.' },
          { label: '50%', nudge: null },
          { label: '25%', nudge: '<b>(a)</b> forgets dissipation; <b>(c)</b> misremembers the fraction.' },
          {
            label: 'depends on the circuit resistance',
            nudge: '<b>(d)</b> is the seductive answer: more resistance means slower charging, but the total heat dissipated is always exactly half. Picking this misses the elegant resistance-independence.',
          },
        ],
        correct: 1,
        solution: 'The battery does work <i>QV</i> = <i>CV</i><sup>2</sup>, but the capacitor stores only ½<i>CV</i><sup>2</sup>; the other half is dissipated as heat in the connecting resistance — <b>independent of the resistance value</b>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Believing <i>C</i> depends on <i>Q</i> or <i>V</i>.</b> It does not. <i>C</i> is fixed by area, separation, and dielectric. If a problem implies capacitance changed, it’s because the geometry or dielectric changed — never just the charge or voltage.',
          '<b>Skipping the “is the battery connected?” check.</b> This is the number-one error in the whole topic. Disconnected ⇒ <i>Q</i> fixed; connected ⇒ <i>V</i> fixed. Decide this first, every single time, before touching a formula.',
          '<b>Picking the wrong energy formula.</b> Use <i>U</i> = <i>Q</i><sup>2</sup>/(2<i>C</i>) when <i>Q</i> is held fixed (disconnected) and <i>U</i> = ½<i>CV</i><sup>2</sup> when <i>V</i> is held fixed (connected). The right choice makes the <i>K</i>-scaling obvious and the wrong one buries it.',
          '<b>Forgetting <i>U</i> ∝ <i>V</i><sup>2</sup> and the lost half.</b> Energy scales with the square of voltage, and charging always wastes half the battery’s energy as heat.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & sanity):</b> Build a two-branch reflex. Disconnected? Write <i>Q</i> at the top of your page as a constant, then read off <i>V</i> = <i>Q</i>/<i>C</i>, <i>E</i> = <i>V</i>/<i>d</i>, <i>U</i> = <i>Q</i><sup>2</sup>/(2<i>C</i>) — all scaling as 1/<i>K</i>. Connected? Write <i>V</i> at the top as a constant, then <i>Q</i> = <i>CV</i>, <i>U</i> = ½<i>CV</i><sup>2</sup> — both scaling as <i>K</i>, with <i>E</i> = <i>V</i>/<i>d</i> unchanged. Two clean templates cover almost every dielectric question you’ll ever be asked.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Definition', note: '<i>C</i> = <i>Q</i>/<i>V</i>; unit farad; depends <b>only</b> on geometry + dielectric.' },
          {
            f: 'Parallel plate',
            note: '<i>C</i><sub>0</sub> = ε<sub>0</sub><i>A</i>/<i>d</i> (air); <i>C</i> = <i>K</i>ε<sub>0</sub><i>A</i>/<i>d</i> = <i>KC</i><sub>0</sub> (dielectric).',
          },
          {
            f: 'In the gap',
            note: '<i>E</i> = <i>σ</i>/ε<sub>0</sub> = <i>V</i>/<i>d</i>; dielectric reduces field to <i>E</i><sub>0</sub>/<i>K</i>.',
          },
          {
            f: 'Energy',
            note: '<i>U</i> = ½<i>CV</i><sup>2</sup> = <i>Q</i><sup>2</sup>/(2<i>C</i>) = ½<i>QV</i>; <b>density</b> <i>u</i> = ½ε<sub>0</sub><i>E</i><sup>2</sup>.',
          },
          {
            f: 'Dielectric inserted',
            note: 'DISCONNECTED (<i>Q</i> fixed) ⇒ <i>V</i>, <i>E</i>, <i>U</i> all ÷<i>K</i>. CONNECTED (<i>V</i> fixed) ⇒ <i>Q</i>, <i>U</i> both ×<i>K</i>, <i>E</i> unchanged.',
          },
          { f: 'Charging', note: 'half the battery’s energy is always lost as heat.' },
          { f: 'Dimensions', note: '[<i>C</i>] = [M<sup>−1</sup> L<sup>−2</sup> T<sup>4</sup> A<sup>2</sup>].' },
        ],
        aids: [
          '“Capacitance is geometry, not charge.”',
          '“Disconnected? <i>Q</i> is king. Connected? <i>V</i> is king.”',
          '“Energy goes as <i>V</i>-squared — and charging wastes half.”',
          '“A dielectric only ever boosts <i>C</i> (by <i>K</i>).”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 107–113 ─────────────────────────
  {
    n: '04',
    title: 'Electrostatics of Conductors',
    kalam: 'A conductor is a material packed with free electrons that can roam wherever the field pushes them.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A favourite for conceptual marks. CBSE Boards ask the standard properties (field inside a conductor, charge on the surface, <i>E</i> = <i>σ</i>/ε<sub>0</sub> just outside) as 2–3 mark reasoning questions. NEET reuses the shielding/cavity idea and the “field inside is zero” trap every cycle. JEE Main and Advanced build induced-charge problems on conductors with cavities, concentric shells, and spherical capacitors.',
      },
      {
        t: 'p',
        html: 'A conductor is a material packed with <b>free electrons</b> that can roam wherever the field pushes them. This single fact decides everything about how a conductor behaves once charges have stopped moving (electrostatic equilibrium). Think of the free electrons as an obedient crowd that instantly rearranges itself to kill any field trying to push it around. The moment an external field appears, the electrons shuffle until they have set up their own field that exactly cancels the intruder — <b>everywhere inside the metal</b>.',
      },
      {
        t: 'p',
        html: 'So the headline result is: <b>the electric field inside the body of a conductor is zero.</b> Not “small” — exactly zero, in equilibrium. If it weren’t, the free charges would still be feeling a force and still be moving, which contradicts “equilibrium.” The crowd only settles when nobody is being pushed.',
      },
      { t: 'p', html: 'From that one idea, a cascade of properties follows:' },
      {
        t: 'p',
        html: '<b>All the excess charge sits on the surface.</b> Imagine any closed (Gaussian) surface drawn just inside the metal. The field on it is zero, so the flux through it is zero, so by Gauss’s law it encloses no net charge. Shrink that surface anywhere you like inside the conductor — always zero charge. The only place left for the excess charge to live is the outer <b>surface</b>.',
      },
      {
        t: 'p',
        html: '<b>The whole conductor is a single equipotential.</b> Since <i>E</i> = 0 inside, there’s no “downhill” anywhere within the metal — moving a charge from one interior point to another costs no work, so every point is at the same potential. The surface is at that same potential too. A charged conductor is one big equipotential blob.',
      },
      {
        t: 'p',
        html: '<b>Just outside the surface, the field is perpendicular and equals <i>σ</i>/ε<sub>0</sub>.</b> Any sideways (tangential) component would drag the surface charges along the surface — but they’ve stopped moving, so the tangential part must be zero. The field can only stick straight out (or straight in). Its strength is set by the local surface charge density <i>σ</i>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A hollow conductor is a fortress. Carve a cavity inside a conductor (with no charge placed in the cavity) and the field inside that cavity is <b>zero</b>, no matter how violent the field outside. The conductor’s surface charges rearrange to cancel any external field throughout the cavity. This is <b>electrostatic shielding</b> — the principle behind a Faraday cage, why you’re safe inside a car during lightning, and why sensitive electronics sit in metal boxes. But note the one-way nature: shielding protects the inside from the outside; a charge placed inside the cavity still makes its presence felt outside.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• Every result here holds <b>only in electrostatic equilibrium</b> — charges at rest. While charges are still flowing (e.g. a wire carrying current), the field inside is not zero.<br>• “<i>E</i> = 0 inside” refers to the <b>conducting material itself</b>, not to a cavity that contains a charge.<br>• <i>E</i> = <i>σ</i>/ε<sub>0</sub> just outside is <b>twice</b> the <i>σ</i>/(2ε<sub>0</sub>) of an isolated charged sheet — because a conductor’s charge is one-sided, with zero field on the metal side.<br>• Surface charge density is <b>not uniform</b> on an irregular conductor: it piles up where the surface is sharply curved (points, edges), which is why lightning rods are pointed.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Field inside a conductor (equilibrium)',
        main: '<i>E⃗</i><sub>inside</sub> = 0',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Net charge in the interior',
        main: '<i>q</i><sub>interior</sub> = 0 ⇒ all excess charge resides on the surface.',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Field just outside a conductor’s surface',
        main: '<i>E</i> = <i>σ</i>/ε<sub>0</sub> (directed normal to the surface)',
        legend: ['<i>σ</i> = local surface charge density (C m<sup>−2</sup>)'],
        note: '<i>E</i> in N C<sup>−1</sup> (= V m<sup>−1</sup>). Compare the isolated sheet: <i>E</i><sub>sheet</sub> = <i>σ</i>/(2ε<sub>0</sub>).',
      },
      {
        t: 'formula',
        kicker: 'Conductor is an equipotential',
        main: '<i>V</i> = constant throughout the conductor (interior and surface).',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Potential and capacitance of an isolated spherical conductor (radius R, charge Q)',
        main: '<i>V</i> = (1/(4πε<sub>0</sub>)) <i>Q</i>/<i>R</i><br><i>C</i> = <i>Q</i>/<i>V</i> = 4πε<sub>0</sub><i>R</i>',
        legend: [],
        note: 'The field inside is zero; outside it is (1/(4πε<sub>0</sub>)) <i>Q</i>/<i>r</i><sup>2</sup>, exactly as if all charge sat at the centre.',
      },
      {
        t: 'formula',
        kicker: 'Spherical capacitor (concentric shells, inner radius a, outer b)',
        main: '<i>C</i> = 4πε<sub>0</sub> <i>ab</i>/(<i>b</i> − <i>a</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Cavity with an enclosed charge +q (neutral conductor)',
        main: '<i>q</i><sub>inner surface</sub> = −<i>q</i><br><i>q</i><sub>outer surface</sub> = +<i>q</i>',
        legend: [],
        note: null,
      },

      { t: 'part', title: 'CBSE board derivations' },
      { t: 'p', html: '<b>Derivation A — Field inside a conductor is zero, and charge lies on the surface.</b>' },
      {
        t: 'p',
        html: '<b>Reasoning step 1 (field inside).</b> Suppose, for contradiction, that a non-zero field <i>E⃗</i> existed inside a conductor. The free electrons would experience a force −<i>eE⃗</i> and accelerate — i.e. charges would keep moving. That contradicts electrostatic equilibrium. The electrons redistribute precisely until their induced field cancels any internal field. Hence in equilibrium <i>E⃗</i><sub>inside</sub> = 0.',
      },
      {
        t: 'p',
        html: '<b>Reasoning step 2 (charge on surface).</b> Draw a Gaussian surface entirely inside the conductor, just beneath its outer skin. Everywhere on it <i>E⃗</i> = 0, so the flux ∮ <i>E⃗</i> · d<i>A⃗</i> = 0. By Gauss’s law,<br>∮ <i>E⃗</i> · d<i>A⃗</i> = <i>q</i><sub>enclosed</sub>/ε<sub>0</sub> = 0 ⇒ <i>q</i><sub>enclosed</sub> = 0.<br>Since this holds for any interior Gaussian surface, no net charge sits in the bulk — all of it resides on the <b>surface</b>.',
      },
      {
        t: 'p',
        html: '<b>Derivation B — Field just outside a charged conductor, <i>E</i> = <i>σ</i>/ε<sub>0</sub>.</b>',
      },
      { t: 'fig', id: 'p12-02-fig-2.5' },
      {
        t: 'p',
        html: '<b>Setup:</b> Take a tiny cylindrical pillbox straddling the surface — one flat face (Δ<i>S</i>) just outside, the other just inside.',
      },
      {
        t: 'p',
        html: '<b>Applying Gauss’s law:</b> Inside the conductor <i>E</i> = 0, so the inner face contributes no flux. Just outside, the field is perpendicular to the surface, so only the outer flat face contributes:<br>∮ <i>E⃗</i> · d<i>A⃗</i> = <i>E</i> Δ<i>S</i>.<br>The charge enclosed is <i>σ</i> Δ<i>S</i>. Therefore<br><i>E</i> Δ<i>S</i> = <i>σ</i> Δ<i>S</i>/ε<sub>0</sub> ⇒ <i>E</i> = <i>σ</i>/ε<sub>0</sub>.',
      },
      {
        t: 'p',
        html: '<b>Why double the sheet value?</b> For an isolated sheet, flux escapes through both faces, giving <i>σ</i>/(2ε<sub>0</sub>). Here the inside face is dead (field zero), so all the flux is forced out of one face — doubling the result.',
      },
      { t: 'p', html: '<b>Derivation C — Capacitance of an isolated spherical conductor.</b>' },
      {
        t: 'p',
        html: 'A sphere of radius <i>R</i> carrying charge <i>Q</i> behaves, for all external points, like a point charge at its centre, so its surface potential is <i>V</i> = (1/(4πε<sub>0</sub>)) <i>Q</i>/<i>R</i>. By definition,<br><i>C</i> = <i>Q</i>/<i>V</i> = <i>Q</i>/(<i>Q</i>/(4πε<sub>0</sub><i>R</i>)) = 4πε<sub>0</sub><i>R</i>.<br>Capacitance depends only on the radius — pure geometry, as always.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A solid conducting sphere of radius 0.10 m carries a charge of +2 μC. Find (a) the potential of the sphere, (b) the electric field just outside its surface, (c) the electric field at its centre.',
        steps: [
          '<b>Given:</b> <i>R</i> = 0.10 m, <i>Q</i> = 2 × 10<sup>−6</sup> C.',
          '(a) <i>V</i> = <i>kQ</i>/<i>R</i> = (9 × 10<sup>9</sup>)(2 × 10<sup>−6</sup>)/0.10',
          '(b) Just outside, <i>E</i> = <i>kQ</i>/<i>R</i><sup>2</sup> = (9 × 10<sup>9</sup>)(2 × 10<sup>−6</sup>)/(0.10)<sup>2</sup> (equivalently <i>σ</i>/ε<sub>0</sub>).',
          '(c) Inside the conductor, <i>E</i> = 0.',
        ],
        ans: '<i>V</i> = 1.8 × 10<sup>5</sup> V; <i>E</i><sub>outside</sub> = 1.8 × 10<sup>6</sup> N C<sup>−1</sup>; <i>E</i><sub>centre</sub> = 0.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A point charge +5 nC is placed at the centre of a cavity inside an electrically neutral conductor. State the charge induced on the inner and outer surfaces, and describe the field at a point outside the conductor.',
        steps: [
          'The trap: students forget that a neutral conductor must rearrange charge to keep its interior field zero. Apply the cavity rule. To make <i>E</i> = 0 in the conducting material, a Gaussian surface inside the metal (enclosing the cavity) must enclose zero net charge — so the inner surface must carry −5 nC. The conductor is neutral overall, so the outer surface carries +5 nC.',
          'Outside, the field is that of +5 nC spread over the outer surface exactly as it would spread on the uncharged conductor given +5 nC — the inner detail is invisible from outside. For a spherical conductor this is the field of a +5 nC point charge at the centre.',
          '<b>Speed rule:</b> enclosed charge ⇒ inner surface = −<i>q</i>, outer surface = +<i>q</i> (for a neutral shell).',
        ],
        ans: 'inner surface −5 nC, outer surface +5 nC; external field as if +5 nC were at the centre (for a spherical conductor).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: '(two concentric shells — superposition of potentials) A conducting shell of radius <i>a</i> = 0.05 m carries charge <i>q</i> = +2 nC. It is surrounded by a concentric conducting shell of radius <i>b</i> = 0.10 m carrying charge <i>Q</i> = +4 nC. Find the potential of (a) the outer shell, (b) the inner shell.',
        steps: [
          'A conductor’s potential is the sum of contributions from all charges, evaluated at its own radius.',
          '(a) Outer shell (radius <i>b</i>): both charges are at or inside <i>b</i>, so each acts as if centred:<br><i>V</i><sub><i>b</i></sub> = <i>k</i>(<i>q</i> + <i>Q</i>)/<i>b</i> = (9 × 10<sup>9</sup>)(6 × 10<sup>−9</sup>)/0.10',
          '(b) Inner shell (radius <i>a</i>): its own charge contributes <i>kq</i>/<i>a</i>; the outer shell, being outside, contributes the constant <i>kQ</i>/<i>b</i> everywhere within it:<br><i>V</i><sub><i>a</i></sub> = <i>kq</i>/<i>a</i> + <i>kQ</i>/<i>b</i> = (9 × 10<sup>9</sup>)(2 × 10<sup>−9</sup>)/0.05 + (9 × 10<sup>9</sup>)(4 × 10<sup>−9</sup>)/0.10 = 360 + 360',
        ],
        ans: '<i>V</i><sub><i>b</i></sub> = 540 V, <i>V</i><sub><i>a</i></sub> = 720 V — the inner shell sits at higher potential.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: '(spherical capacitor — derive, then evaluate) A spherical capacitor consists of an inner sphere of radius <i>a</i> = 0.08 m (charge +<i>Q</i>) and a concentric outer shell of radius <i>b</i> = 0.10 m (charge −<i>Q</i>), with vacuum between them. (a) Derive its capacitance. (b) Evaluate it.',
        steps: [
          '(a) By Gauss’s law, the field in the gap (<i>a</i> < <i>r</i> < <i>b</i>) is that of the inner charge alone:<br><i>E</i> = (1/(4πε<sub>0</sub>)) <i>Q</i>/<i>r</i><sup>2</sup>.',
          'The potential difference between the spheres:<br><i>V</i> = ∫<sub><i>a</i></sub><sup><i>b</i></sup> <i>E</i> d<i>r</i> = (<i>Q</i>/(4πε<sub>0</sub>)) ∫<sub><i>a</i></sub><sup><i>b</i></sup> d<i>r</i>/<i>r</i><sup>2</sup> = (<i>Q</i>/(4πε<sub>0</sub>))(1/<i>a</i> − 1/<i>b</i>) = (<i>Q</i>/(4πε<sub>0</sub>)) · (<i>b</i> − <i>a</i>)/(<i>ab</i>).',
          'Hence<br><i>C</i> = <i>Q</i>/<i>V</i> = 4πε<sub>0</sub> <i>ab</i>/(<i>b</i> − <i>a</i>).',
          '(b) With 1/(4πε<sub>0</sub>) = 9 × 10<sup>9</sup>:<br><i>C</i> = <i>ab</i>/(<i>k</i>(<i>b</i> − <i>a</i>)) = (0.08)(0.10)/((9 × 10<sup>9</sup>)(0.02)) = 0.008/(1.8 × 10<sup>8</sup>) ≈ 4.4 × 10<sup>−11</sup> F',
          '(Note how a small gap <i>b</i> − <i>a</i> gives a large capacitance — the same lesson as the parallel-plate 1/<i>d</i> dependence.)',
        ],
        ans: '<i>C</i> = 4πε<sub>0</sub> <i>ab</i>/(<i>b</i> − <i>a</i>) ≈ 44 pF.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A conducting sphere of radius 0.20 m carries a charge of 4 μC. Find the potential at its surface and the field just outside it.',
            a: '<i>V</i> = 1.8 × 10<sup>5</sup> V; <i>E</i> = 9 × 10<sup>5</sup> N C<sup>−1</sup>.',
          },
          {
            q: '[NEET] A point charge +8 nC is placed inside a cavity of a neutral conductor. State the charge on the inner and outer surfaces.',
            a: 'inner −8 nC, outer +8 nC.',
          },
          {
            q: '[JEE Main] The surface charge density on a large conductor is 2 × 10<sup>−6</sup> C m<sup>−2</sup>. Find the electric field just outside its surface.',
            a: '<i>E</i> = <i>σ</i>/ε<sub>0</sub> ≈ 2.3 × 10<sup>5</sup> N C<sup>−1</sup>.',
          },
          {
            q: '[JEE Main] Find the capacitance of an isolated conducting sphere of radius 0.09 m.',
            a: '<i>C</i> = 4πε<sub>0</sub><i>R</i> = <i>R</i>/<i>k</i> ≈ 1.0 × 10<sup>−11</sup> F = 10 pF.',
          },
          {
            q: '[JEE Advanced] A spherical capacitor has inner radius 0.10 m and outer radius 0.12 m with vacuum between. Find its capacitance.',
            a: '<i>C</i> = 4πε<sub>0</sub> <i>ab</i>/(<i>b</i> − <i>a</i>) ≈ 6.7 × 10<sup>−11</sup> F ≈ 67 pF.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In electrostatic equilibrium, the electric field inside the material of a charged conductor is:',
        opts: [
          { label: 'zero', nudge: null },
          { label: '<i>σ</i>/ε<sub>0</sub>', nudge: '<b>(b)</b> is the field just outside, not inside.' },
          { label: '<i>σ</i>/(2ε<sub>0</sub>)', nudge: '<b>(c)</b> is the isolated-sheet value.' },
          { label: 'maximum at the centre', nudge: '<b>(d)</b> contradicts the whole equilibrium argument.' },
        ],
        correct: 0,
        solution: 'Free charges rearrange until the internal field cancels everywhere; otherwise they’d keep moving.',
      },
      {
        t: 'mcq',
        q: 'Excess charge given to a solid conductor resides:',
        opts: [
          { label: 'uniformly throughout its volume', nudge: '<b>(a)</b> and <b>(d)</b> ignore that interior field is zero.' },
          { label: 'only on its surface', nudge: null },
          { label: 'only at its centre', nudge: '<b>(c)</b> has no basis.' },
          { label: 'half on the surface, half inside', nudge: '<b>(a)</b> and <b>(d)</b> ignore that interior field is zero.' },
        ],
        correct: 1,
        solution: 'Gauss’s law on any interior surface gives zero enclosed charge, forcing all excess charge onto the surface.',
      },
      {
        t: 'mcq',
        q: 'A hollow conductor has an empty cavity (no charge inside it). It is placed in a strong external electric field. The field inside the cavity is:',
        opts: [
          {
            label: 'equal to the external field',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> all assume the external field penetrates, which the rearranged surface charge prevents.',
          },
          {
            label: 'half the external field',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> all assume the external field penetrates, which the rearranged surface charge prevents.',
          },
          { label: 'zero', nudge: null },
          {
            label: 'opposite to the external field',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> all assume the external field penetrates, which the rearranged surface charge prevents.',
          },
        ],
        correct: 2,
        solution: 'Electrostatic shielding — the surface charges rearrange to cancel the external field throughout the cavity (the Faraday-cage effect).',
      },
      {
        t: 'mcq',
        q: 'The electric field just outside the surface of a charged conductor, where the local surface charge density is <i>σ</i>, is:',
        opts: [
          {
            label: '<i>σ</i>/(2ε<sub>0</sub>)',
            nudge: '<b>(a)</b> is the classic trap — the isolated-sheet value, which forgets the conductor kills the field on its inner side.',
          },
          { label: '<i>σ</i>/ε<sub>0</sub>', nudge: null },
          { label: '<i>σ</i>ε<sub>0</sub>', nudge: '<b>(c)</b> is dimensionally wrong; <b>(d)</b> is the inside value.' },
          { label: 'zero', nudge: '<b>(c)</b> is dimensionally wrong; <b>(d)</b> is the inside value.' },
        ],
        correct: 1,
        solution: 'With zero field on the metal side, all the Gaussian flux exits one face, giving <i>σ</i>/ε<sub>0</sub>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Using <i>σ</i>/(2ε<sub>0</sub>) for a conductor’s surface field.</b> That’s the isolated-sheet result. A conductor’s surface gives <i>σ</i>/ε<sub>0</sub>, double it, because the field is zero on the metal side.',
          '<b>Thinking the field “weakens” inside a conductor.</b> In equilibrium it is exactly zero inside the material — not merely reduced.',
          '<b>Forgetting induced charges on a cavity.</b> A charge +<i>q</i> in a cavity always induces −<i>q</i> on the inner wall and (for a neutral conductor) +<i>q</i> on the outer surface. Skipping this corrupts every field/potential value.',
          '<b>Assuming shielding works both ways.</b> A Faraday cage shields the inside from outside fields, but a charge inside the cavity is detectable outside.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & sanity):</b> Treat any charged conductor as a single equipotential and let Gauss’s law do the heavy lifting — to find interior charge, just draw a Gaussian surface there and read off “enclosed = 0.” For concentric-shell potentials, remember the rule: a shell contributes <i>kq</i>/<i>r</i><sub>shell</sub> at points inside or on it (a constant) and <i>kq</i>/<i>r</i> at points outside it.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Inside a conductor',
            note: '<i>E⃗</i> = 0; all excess charge on the <b>surface</b>; whole conductor is one <b>equipotential</b>.',
          },
          {
            f: 'Just outside',
            note: '<i>E</i> = <i>σ</i>/ε<sub>0</sub>, perpendicular to the surface (double the isolated-sheet value).',
          },
          {
            f: 'Cavity (charge +<i>q</i> inside, neutral shell)',
            note: 'inner surface −<i>q</i>, outer surface +<i>q</i>; external field as if <i>q</i> at centre (spherical conductor).',
          },
          { f: 'Shielding', note: 'empty cavity ⇒ field inside = 0 (Faraday cage); one-way only.' },
          {
            f: 'Isolated sphere',
            note: '<i>V</i> = <i>kQ</i>/<i>R</i>, <i>C</i> = 4πε<sub>0</sub><i>R</i>. <b>Spherical capacitor:</b> <i>C</i> = 4πε<sub>0</sub> <i>ab</i>/(<i>b</i> − <i>a</i>).',
          },
          { f: 'Surface charge density piles up at <b>sharp points</b> (lightning rods, corona discharge).', note: '' },
        ],
        aids: [
          '“Inside a conductor, nothing happens — <i>E</i> = 0, charge on the skin.”',
          '“Conductor = one equipotential blob.”',
          '“<i>σ</i>/ε<sub>0</sub> outside (conductor), <i>σ</i>/(2ε<sub>0</sub>) for a lone sheet.”',
          '“Cage shields in, not out.”',
        ],
      },
    ],
  },
];
