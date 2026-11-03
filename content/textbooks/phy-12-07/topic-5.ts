import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Topic 05: pp. 491–499 of the Class 12 Physics Master Reference,
 * word for word: the book's "Subtopic 03 — Power in AC Circuits and
 * Transformers" (the book prints its sub-topics in the order 00, 01, 04, 02,
 * 03; the app keeps the page order, so this is Topic 05), split at its
 * Sections 1 to 8. Figure 7.3 (caption p. 493, drawn p. 494) is redrawn in
 * lib/diagrams/physics-12-07.ts. The book's cross-references are rewritten to
 * the app's numbering ("Subtopic 01" → "Topic 02", "this subtopic" → "this
 * topic").
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 05 · pp. 491–499 ─────────────────────────
  {
    n: '05',
    title: 'Power in AC Circuits and Transformers',
    kalam: 'The deeper question for any real device — a fan, a charger, the national grid — is how much energy does it actually consume?',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Reliably worth marks everywhere. JEE Main carries numericals on average power, power factor, and transformer turns/current ratios; NEET loves the “wattless power” conceptual trap and transformer-loss one-liners; JEE Advanced builds power-transmission and efficiency problems. CBSE Boards regularly ask for the transformer principle with the turns-ratio derivation, the list of energy losses and how they are minimised, and a definition of power factor (3–5 marks).',
      },
      {
        t: 'p',
        html: 'Up to now we have asked how much current flows in an AC circuit. The deeper question for any real device — a fan, a charger, the national grid — is how much energy does it actually consume? In DC the answer is trivial: power is just <i>P</i> = <i>VI</i>. In AC, that simple product hides a trap, and the trap is the whole story of this topic.',
      },
      {
        t: 'p',
        html: 'Think about it this way… imagine pushing a heavy crate back and forth across a floor. If your push is always in step with the crate’s motion — you push forward exactly while it moves forward — every bit of your effort does useful work. That’s a resistor: voltage and current march in step, and all the energy is delivered. But now imagine a pure inductor or capacitor. Here the current is a quarter-cycle out of step with the voltage. For half of every cycle you pour energy into the element (charging the capacitor, building the inductor’s magnetic field), and for the other half the element hands every joule right back to the source. Over a full cycle the books balance perfectly: the net energy consumed is <b>zero</b>. The current is real, it’s flowing, an ammeter reads it — but it does no net work. We call it <b>wattless current</b>, and the power it carries is <b>wattless power</b>.',
      },
      {
        t: 'p',
        html: 'What decides how much of the current does real work? The phase angle <i>φ</i> between voltage and current. The useful fraction is cos <i>φ</i>, christened the <b>power factor</b>. A pure resistor has <i>φ</i> = 0, so cos <i>φ</i> = 1 — every watt counts. A pure reactance has <i>φ</i> = 90°, so cos <i>φ</i> = 0 — nothing counts. A real LCR circuit sits somewhere between. This is why electricity boards care so much about power factor: a factory drawing huge “wattless” currents loads the cables and transformers without consuming billable energy, so utilities penalise low power factor.',
      },
      {
        t: 'p',
        html: 'The second half of this topic is the device that quietly runs the entire electrical world: the <b>transformer</b>. Its job is to trade voltage for current (or vice versa) without touching the power. Here’s the intuition: an alternating current in one coil (the primary) creates an alternating magnetic flux in a shared iron core; by Faraday’s law, that changing flux induces a voltage in a second coil (the secondary). Because the flux per turn is shared, the coil with more turns gets more voltage. More turns on the secondary ⇒ higher voltage out (step-up); fewer turns ⇒ lower voltage (step-down). And because energy can’t be created, whatever you gain in voltage you must pay back in current: a step-up transformer raises voltage but lowers current in exact proportion.',
      },
      {
        t: 'p',
        html: 'This single trick is why power is transmitted across the country at hundreds of thousands of volts. The heat wasted in a transmission line is <i>I</i><sup>2</sup><i>R</i>. For a fixed amount of power <i>P</i> = <i>VI</i>, pushing the voltage up forces the current down, and since the loss goes as the square of the current, even a modest voltage boost slashes the wasted heat dramatically. Step up at the plant, ship it cheaply across the country, step down near your home.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• <b>A transformer works only on AC.</b> It needs a changing flux to induce an emf. Feed it DC and the flux is steady — zero induced voltage in the secondary. (A DC source can even burn out the primary.)<br>• <b>The ideal-transformer relations assume no losses</b> — no winding resistance, no flux leakage, 100% efficiency. Real transformers reach 90–99%, so treat <i>V</i><sub>p</sub><i>I</i><sub>p</sub> = <i>V</i><sub>s</sub><i>I</i><sub>s</sub> as an excellent approximation, not gospel.<br>• <b>A transformer cannot create power.</b> “Step-up voltage” never means “step-up power.” Voltage and current always move in opposite directions.<br>• The power factor relations assume a <b>single-frequency sinusoidal</b> source.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Instantaneous and average power',
        main: 'Average power over a cycle:<br><i>P</i><sub>avg</sub> = <i>V</i><sub>rms</sub><i>I</i><sub>rms</sub> cos <i>φ</i>',
        legend: [],
        note: 'With <i>v</i> = <i>v</i><sub>m</sub> sin <i>ωt</i> and current lagging (or leading) by phase <i>φ</i>.',
      },
      {
        t: 'formula',
        kicker: 'Power factor',
        main: 'cos <i>φ</i> = <i>R</i>/<i>Z</i> = (True (real) power)/(Apparent power)',
        legend: [
          // A colon, not "=": two keys of different widths started their meanings at
          // different places; as two lines of their own they share one left edge.
          // The unit's bracket is held whole (it broke after "unit:").
          'Apparent power: <i>V</i><sub>rms</sub><i>I</i><sub>rms</sub> (unit:\u00a0volt-ampere,\u00a0VA)',
          'True power: <i>V</i><sub>rms</sub><i>I</i><sub>rms</sub> cos <i>φ</i> (unit:\u00a0watt,\u00a0W)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Special cases',
        main: 'Pure <i>R</i>: cos <i>φ</i> = 1 (maximum power)<br>Pure <i>L</i> or <i>C</i>: cos <i>φ</i> = 0 (zero power — wattless)<br>At resonance: cos <i>φ</i> = 1',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Wattless current (the component doing no work)',
        main: '<i>I</i><sub>rms</sub> sin <i>φ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Transformer — turns, voltage, current (ideal)',
        main: '<i>V</i><sub>s</sub>/<i>V</i><sub>p</sub> = <i>N</i><sub>s</sub>/<i>N</i><sub>p</sub> = <i>k</i> (transformation ratio)<br><i>I</i><sub>s</sub>/<i>I</i><sub>p</sub> = <i>N</i><sub>p</sub>/<i>N</i><sub>s</sub> = 1/<i>k</i><br>Ideal power balance: <i>V</i><sub>p</sub><i>I</i><sub>p</sub> = <i>V</i><sub>s</sub><i>I</i><sub>s</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Transformer efficiency',
        main: '<i>η</i> = <i>P</i><sub>output</sub>/<i>P</i><sub>input</sub> × 100% = (<i>V</i><sub>s</sub><i>I</i><sub>s</sub>)/(<i>V</i><sub>p</sub><i>I</i><sub>p</sub>) × 100%',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Transmission line loss (for fixed transmitted power <i>P</i> over line resistance <i>R</i><sub>line</sub>)',
        main: '<i>P</i><sub>loss</sub> = <i>I</i><sup>2</sup><i>R</i><sub>line</sub> = (<i>P</i><sup>2</sup><i>R</i><sub>line</sub>)/<i>V</i><sup>2</sup> ⇒ <i>P</i><sub>loss</sub> ∝ 1/<i>V</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Symbol', 'SI Unit', 'Dimensional Formula'],
        rows: [
          ['Average (true) power', '<i>P</i><sub>avg</sub>', 'watt (W)', '[M L<sup>2</sup> T<sup>−3</sup>]'],
          ['Apparent power', '<i>S</i>', 'volt-ampere (VA)', '[M L<sup>2</sup> T<sup>−3</sup>]'],
          ['Power factor', 'cos <i>φ</i>', 'dimensionless', '[M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]'],
          ['Transformation ratio', '<i>k</i>', 'dimensionless', '[M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]'],
        ],
      },
      {
        t: 'p',
        html: '<b>Variables:</b> <i>V</i><sub>rms</sub>, <i>I</i><sub>rms</sub> = rms voltage and current; <i>φ</i> = phase difference between voltage and current; <i>V</i><sub>p</sub>, <i>V</i><sub>s</sub> = primary/secondary voltages; <i>I</i><sub>p</sub>, <i>I</i><sub>s</sub> = primary/secondary currents; <i>N</i><sub>p</sub>, <i>N</i><sub>s</sub> = primary/secondary turns; <i>η</i> = efficiency.',
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: '<b>3.1 Average power in an AC circuit</b><br>Let the source voltage be <i>v</i> = <i>v</i><sub>m</sub> sin <i>ωt</i> and the current <i>i</i> = <i>i</i><sub>m</sub> sin(<i>ωt</i> − <i>φ</i>), where <i>φ</i> is the phase by which the voltage leads the current (the convention from Topic 02; the sign of <i>φ</i> won’t matter for power because cosine is even). The instantaneous power is:<br><i>p</i> = <i>vi</i> = <i>v</i><sub>m</sub><i>i</i><sub>m</sub> sin <i>ωt</i> sin(<i>ωt</i> − <i>φ</i>)',
      },
      {
        t: 'p',
        html: 'Expand sin(<i>ωt</i> − <i>φ</i>) = sin <i>ωt</i> cos <i>φ</i> − cos <i>ωt</i> sin <i>φ</i>:<br><i>p</i> = <i>v</i><sub>m</sub><i>i</i><sub>m</sub>[sin<sup>2</sup> <i>ωt</i> cos <i>φ</i> − sin <i>ωt</i> cos <i>ωt</i> sin <i>φ</i>]',
      },
      {
        t: 'p',
        html: 'Now average each term over one full cycle. The key averages are ⟨sin<sup>2</sup> <i>ωt</i>⟩ = ½ and ⟨sin <i>ωt</i> cos <i>ωt</i>⟩ = 0 (the second is a full-cycle average of ½ sin 2<i>ωt</i>, which vanishes). So the second term — the one carrying sin <i>φ</i> — <b>averages to zero</b>. That term is precisely the wattless power sloshing back and forth. We are left with:<br><i>P</i><sub>avg</sub> = <i>v</i><sub>m</sub><i>i</i><sub>m</sub> · ½ cos <i>φ</i> = (<i>v</i><sub>m</sub>/√2) · (<i>i</i><sub>m</sub>/√2) cos <i>φ</i><br><i>P</i><sub>avg</sub> = <i>V</i><sub>rms</sub><i>I</i><sub>rms</sub> cos <i>φ</i>',
      },
      {
        t: 'p',
        html: 'The factor cos <i>φ</i> is the power factor. Geometrically, from the impedance triangle cos <i>φ</i> = <i>R</i>/<i>Z</i>, so only the resistance dissipates energy — reactances merely store and return it. This is why a pure inductor or capacitor (<i>φ</i> = 90°) consumes zero average power.',
      },
      {
        t: 'p',
        html: '<b>3.2 Transformer turns ratio (principle and derivation)</b><br><b>Principle.</b> A transformer has two coils wound on a common soft-iron core. An alternating voltage on the primary drives an alternating current, which sets up an alternating magnetic flux Φ in the core. Because the core confines the flux, the same flux threads every turn of both coils. By Faraday’s law of electromagnetic induction, this changing flux induces an emf in each coil.',
      },
      { t: 'fig', id: 'p12-07-fig-7.3' },
      {
        t: 'p',
        html: '<b>Derivation.</b> The induced emfs are:<br><i>ε</i><sub>p</sub> = −<i>N</i><sub>p</sub> dΦ/d<i>t</i>,   <i>ε</i><sub>s</sub> = −<i>N</i><sub>s</sub> dΦ/d<i>t</i>',
      },
      {
        t: 'p',
        html: 'Since dΦ/d<i>t</i> is identical for both coils, dividing one by the other:<br><i>ε</i><sub>s</sub>/<i>ε</i><sub>p</sub> = <i>N</i><sub>s</sub>/<i>N</i><sub>p</sub>',
      },
      {
        t: 'p',
        html: 'For an ideal transformer with no winding resistance, the terminal voltages equal the induced emfs (<i>V</i><sub>p</sub> = <i>ε</i><sub>p</sub>, <i>V</i><sub>s</sub> = <i>ε</i><sub>s</sub>), giving the <b>voltage relation</b>:<br><i>V</i><sub>s</sub>/<i>V</i><sub>p</sub> = <i>N</i><sub>s</sub>/<i>N</i><sub>p</sub>',
      },
      {
        t: 'p',
        html: '<b>Current relation from energy conservation.</b> An ideal transformer dissipates no energy, so input power equals output power:<br><i>V</i><sub>p</sub><i>I</i><sub>p</sub> = <i>V</i><sub>s</sub><i>I</i><sub>s</sub> ⇒ <i>I</i><sub>s</sub>/<i>I</i><sub>p</sub> = <i>V</i><sub>p</sub>/<i>V</i><sub>s</sub> = <i>N</i><sub>p</sub>/<i>N</i><sub>s</sub>',
      },
      {
        t: 'p',
        html: 'So voltage and current scale oppositely: step the voltage up by a factor <i>k</i> and the current steps down by the same factor. <b>Why oppositely?</b> Because power must be conserved — there is no free energy in a transformer.',
      },
      {
        t: 'p',
        html: '<b>3.3 Energy losses and their reduction</b><br>A real transformer is not 100% efficient. The losses fall into two families:<br>1. <b>Copper loss</b> — <i>I</i><sup>2</sup><i>R</i> Joule heating in the resistance of the primary and secondary windings. Reduced by using thick, low-resistance copper wire, especially in the high-current (low-voltage) winding.<br>2. <b>Iron (core) loss</b> — two parts: (a) <b>Eddy-current loss</b>, from induced circulating currents in the core, reduced by <b>laminating</b> the core (thin insulated sheets break up the eddy-current paths); (b) <b>Hysteresis loss</b>, from repeatedly re-magnetising the core, reduced by choosing a soft magnetic material with a <b>narrow hysteresis loop</b> (e.g. silicon steel).',
      },
      {
        t: 'p',
        html: 'A third practical loss, <b>flux leakage</b>, is minimised by winding the primary and secondary coils close together (one over the other) so nearly all the flux is shared.',
      },
      {
        t: 'p',
        html: '<b>3.4 The Choke Coil — limiting AC current without wasting power</b><br>Suppose you need to reduce the current in an AC circuit. The obvious tool is a resistor — but a resistor pays for every ampere it removes by burning energy as heat (<i>I</i><sup>2</sup><i>R</i>). The <b>choke coil</b> does the same job almost for free. It is simply an inductor of large inductance <i>L</i> and very small resistance <i>r</i>, placed in series with the load. It throttles the current through its reactance <i>X</i><sub>L</sub> = <i>ωL</i>, which builds an impedance <i>Z</i> = √(<i>r</i><sup>2</sup> + <i>X</i><sub>L</sub><sup>2</sup>) ≈ <i>X</i><sub>L</sub> — yet because an inductor’s current is nearly 90° out of phase with its voltage, its power factor is almost zero:<br>cos <i>φ</i> = <i>r</i>/√(<i>r</i><sup>2</sup> + <i>X</i><sub>L</sub><sup>2</sup>) ≈ 0 ⇒ <i>P</i><sub>choke</sub> ≈ 0',
      },
      {
        t: 'p',
        html: 'So a choke limits current the way a resistor does, but dissipates almost no power — the current it carries is very nearly wattless. This is exactly why <b>fluorescent tube lights use a choke (ballast)</b> rather than a resistor to control the current: a resistor of the same current-limiting value would waste a great deal of energy as heat, while the choke runs cool. (A choke works only on AC — on DC, <i>X</i><sub>L</sub> = 0 and it offers only its tiny resistance <i>r</i>.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level — Power in an RL circuit',
        q: 'A coil of resistance <i>R</i> = 30 Ω and inductive reactance <i>X</i><sub>L</sub> = 40 Ω is connected to a 200 V (rms) AC source. Find (a) the impedance, (b) the power factor, and (c) the average power consumed.',
        steps: [
          '<b>Given:</b> <i>R</i> = 30 Ω, <i>X</i><sub>L</sub> = 40 Ω, <i>V</i><sub>rms</sub> = 200 V.',
          '<b>(a)</b> Impedance:<br><i>Z</i> = √(<i>R</i><sup>2</sup> + <i>X</i><sub>L</sub><sup>2</sup>) = √(30<sup>2</sup> + 40<sup>2</sup>) = √(900 + 1600) = √2500',
          '<b>(b)</b> Power factor:<br>cos <i>φ</i> = <i>R</i>/<i>Z</i> = 30/50',
          '<b>(c)</b> rms current <i>I</i><sub>rms</sub> = <i>V</i><sub>rms</sub>/<i>Z</i> = 200/50 = 4 A. Average power:<br><i>P</i><sub>avg</sub> = <i>V</i><sub>rms</sub><i>I</i><sub>rms</sub> cos <i>φ</i> = 200 × 4 × 0.6',
          '(<b>Cross-check:</b> <i>P</i> = <i>I</i><sup>2</sup><i>R</i> = 4<sup>2</sup> × 30 = 480 W ✓ — only the resistor dissipates.)',
        ],
        ans: '<i>Z</i> = 50 Ω, cos <i>φ</i> = 0.6, <i>P</i><sub>avg</sub> = 480 W',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap — The wattless inductor',
        q: 'An ideal inductor draws an rms current of 2.0 A when connected to a 220 V, 50 Hz supply. What is the average power consumed?',
        steps: [
          '<b>The trap:</b> the obvious move is <i>P</i> = <i>V</i><sub>rms</sub><i>I</i><sub>rms</sub> = 220 × 2.0 = 440 W. That is the apparent power, not the real power — and it’s wrong.',
          '<b>Fast correct reasoning:</b> an ideal inductor has <i>φ</i> = 90°, so cos <i>φ</i> = 0:<br><i>P</i><sub>avg</sub> = <i>V</i><sub>rms</sub><i>I</i><sub>rms</sub> cos <i>φ</i> = 220 × 2.0 × 0',
          'A pure inductor (or capacitor) consumes zero average power — the current is entirely wattless. The instant you see “ideal/pure inductor or capacitor,” write zero and move on.',
        ],
        ans: '0 W.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Step-down transformer with real efficiency',
        q: 'A step-down transformer reduces 2200 V (rms) to 220 V (rms). The secondary delivers 10 A to a load, and the transformer is 90% efficient. Find (a) the turns ratio <i>N</i><sub>p</sub> ∶ <i>N</i><sub>s</sub>, (b) the output power, and (c) the primary current.',
        steps: [
          '<b>Step 1 — (a) turns ratio.</b> Voltage ratio fixes turns ratio:<br><i>N</i><sub>p</sub>/<i>N</i><sub>s</sub> = <i>V</i><sub>p</sub>/<i>V</i><sub>s</sub> = 2200/220 = 10',
          '<b>Step 2 — (b) output power:</b><br><i>P</i><sub>out</sub> = <i>V</i><sub>s</sub><i>I</i><sub>s</sub> = 220 × 10',
          '<b>Step 3 — (c) primary current.</b> Here efficiency matters — we cannot assume <i>V</i><sub>p</sub><i>I</i><sub>p</sub> = <i>V</i><sub>s</sub><i>I</i><sub>s</sub> because <i>η</i> = 90%:<br><i>η</i> = <i>P</i><sub>out</sub>/<i>P</i><sub>in</sub> ⇒ <i>P</i><sub>in</sub> = <i>P</i><sub>out</sub>/<i>η</i> = 2200/0.90 = 2444 W<br><i>I</i><sub>p</sub> = <i>P</i><sub>in</sub>/<i>V</i><sub>p</sub> = 2444/2200',
          '(Had we wrongly assumed 100% efficiency, we’d get <i>I</i><sub>p</sub> = 1.0 A — the 0.11 A difference is what feeds the losses.)',
        ],
        ans: 'Turns ratio 10 ∶ 1, output power 2200 W, primary current ≈ 1.11 A',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Why the grid runs at high voltage',
        q: 'A power plant must deliver <i>P</i> = 100 kW to a town through a transmission line of total resistance <i>R</i><sub>line</sub> = 5.0 Ω. Compare the fractional power lost as heat in the line when the power is transmitted at (a) 250 V versus (b) 25,000 V. Interpret the result.',
        steps: [
          '<b>Setup.</b> For transmitted power <i>P</i> = <i>VI</i>, the line current is <i>I</i> = <i>P</i>/<i>V</i>, and the line loss is:<br><i>P</i><sub>loss</sub> = <i>I</i><sup>2</sup><i>R</i><sub>line</sub> = (<i>P</i>/<i>V</i>)<sup>2</sup><i>R</i><sub>line</sub> = (<i>P</i><sup>2</sup><i>R</i><sub>line</sub>)/<i>V</i><sup>2</sup>',
          'The fractional loss is <i>P</i><sub>loss</sub>/<i>P</i> = (<i>PR</i><sub>line</sub>)/<i>V</i><sup>2</sup>.',
          '<b>(a) At <i>V</i> = 250 V:</b><br><i>P</i><sub>loss</sub>/<i>P</i> = (100,000)(5.0)/(250)<sup>2</sup> = 500,000/62,500 = 8.0 = 800%',
          '<b>(b) At <i>V</i> = 25,000 V:</b><br><i>P</i><sub>loss</sub>/<i>P</i> = (100,000)(5.0)/(25,000)<sup>2</sup> = 500,000/(6.25 × 10<sup>8</sup>) = 8.0 × 10<sup>−4</sup> = 0.08%',
          '<b>Interpretation.</b> At 250 V the line would need to dissipate eight times the power being transmitted — physically impossible, meaning low-voltage transmission over this line simply cannot deliver 100 kW; the current (400 A) is ruinous. At 25 kV the current is only 4 A and the loss collapses to a negligible 0.08%. Since <i>P</i><sub>loss</sub> ∝ 1/<i>V</i><sup>2</sup>, raising the voltage 100× cuts the loss by 100<sup>2</sup> = 10,000×. <b>This is the entire reason transformers exist on the grid:</b> step the voltage up at the plant for efficient transmission, then step it back down — through more transformers — for safe use near the consumer.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A series RC circuit has <i>R</i> = 60 Ω and <i>X</i><sub>C</sub> = 80 Ω, connected to a 100 V (rms) source. Find the power factor and the average power consumed.',
            a: '<i>Z</i> = √(60<sup>2</sup> + 80<sup>2</sup>) = 100 Ω; cos <i>φ</i> = <i>R</i>/<i>Z</i> = 0.6; <i>I</i> = 100/100 = 1 A; <i>P</i> = <i>VI</i> cos <i>φ</i> = 100 × 1 × 0.6 = 60 W.',
          },
          {
            q: '[NEET] A pure capacitor is connected to a 230 V, 50 Hz supply and draws 1.5 A. What is the average power dissipated?',
            a: '0 W (pure capacitor, cos <i>φ</i> = 0).',
          },
          {
            q: '[JEE Main] A transformer has 200 turns in the primary and 50 in the secondary. The primary is fed 240 V (rms) and draws 0.5 A. Assuming it is ideal, find the secondary voltage and secondary current.',
            a: '<i>V</i><sub>s</sub> = <i>V</i><sub>p</sub>(<i>N</i><sub>s</sub>/<i>N</i><sub>p</sub>) = 240 × (50/200) = 60 V; <i>I</i><sub>s</sub> = <i>I</i><sub>p</sub>(<i>N</i><sub>p</sub>/<i>N</i><sub>s</sub>) = 0.5 × 4 = 2.0 A.',
          },
          {
            q: '[JEE Main] An AC circuit draws 660 W from a 220 V, 50 Hz source at a power factor of 0.75 (lagging). Find the rms current and the apparent power.',
            a: '<i>I</i> = <i>P</i>/(<i>V</i> cos <i>φ</i>) = 660/(220 × 0.75) = 4.0 A; apparent power = <i>VI</i> = 220 × 4 = 880 VA.',
          },
          {
            q: '[JEE Advanced] A town demands 440 kW at 220 V, situated 20 km from a plant. Power is sent at 22 kV along a two-wire line of resistance 0.4 Ω per km (total 16 Ω), taking 22 kV as the line voltage at the town end (ignore the voltage drop on the line when finding the current). Find (a) the line current, (b) the line power loss, and (c) the percentage of generated power lost in transmission (assume the plant supplies exactly the town demand plus line loss).',
            a: 'Line current <i>I</i> = <i>P</i>/<i>V</i> = 440,000/22,000 = 20 A; loss = <i>I</i><sup>2</sup><i>R</i> = 20<sup>2</sup> × 16 = 6400 W = 6.4 kW; generated power = 440 + 6.4 = 446.4 kW, so percentage lost = 6.4/446.4 ≈ 1.43%.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The average power consumed by a pure inductor connected to an AC source is:',
        opts: [
          {
            label: '<i>V</i><sub>rms</sub><i>I</i><sub>rms</sub>',
            nudge: '<b>(A)</b> trap: computing apparent power <i>V</i><sub>rms</sub><i>I</i><sub>rms</sub>, forgetting the power factor.',
          },
          {
            label: '½<i>V</i><sub>rms</sub><i>I</i><sub>rms</sub>',
            nudge: '<b>(B)</b>/<b>(D)</b> traps: misremembering a ½ or 1/√2 factor from the rms or averaging step.',
          },
          { label: 'zero', nudge: null },
          {
            label: '<i>V</i><sub>rms</sub><i>I</i><sub>rms</sub>/√2',
            nudge: '<b>(B)</b>/<b>(D)</b> traps: misremembering a ½ or 1/√2 factor from the rms or averaging step.',
          },
        ],
        correct: 2,
        solution:
          'For a pure inductor <i>φ</i> = 90°, so cos <i>φ</i> = 0 and <i>P</i><sub>avg</sub> = <i>V</i><sub>rms</sub><i>I</i><sub>rms</sub> cos <i>φ</i> = 0. The current is entirely wattless.',
      },
      {
        t: 'mcq',
        q: 'A transformer steps up voltage from 100 V to 400 V. If the primary current is 8 A, the secondary current in an ideal transformer is:',
        opts: [
          {
            label: '32 A',
            nudge: '<b>(A)</b> trap: multiplying current by the voltage ratio instead of dividing — the “step-up everything” error that violates energy conservation.',
          },
          { label: '8 A', nudge: '<b>(B)</b> trap: assuming current is unchanged.' },
          { label: '4 A', nudge: '<b>(C)</b> trap: dividing by 2 instead of 4.' },
          { label: '2 A', nudge: null },
        ],
        correct: 3,
        solution:
          'Energy conservation: <i>V</i><sub>p</sub><i>I</i><sub>p</sub> = <i>V</i><sub>s</sub><i>I</i><sub>s</sub> ⇒ <i>I</i><sub>s</sub> = <i>I</i><sub>p</sub>(<i>V</i><sub>p</sub>/<i>V</i><sub>s</sub>) = 8 × (100/400) = 2 A. Voltage stepped up 4×, current stepped down 4×.',
      },
      {
        t: 'mcq',
        q: 'The core of a transformer is laminated primarily to reduce:',
        opts: [
          {
            label: 'hysteresis loss',
            nudge: '<b>(A)</b> trap: hysteresis loss is reduced by choosing a soft magnetic material (narrow loop), not by lamination.',
          },
          {
            label: 'copper loss',
            nudge: '<b>(B)</b> trap: copper loss is in the windings, reduced by thicker wire, unrelated to the core.',
          },
          { label: 'eddy-current loss', nudge: null },
          {
            label: 'flux leakage',
            nudge: '<b>(D)</b> trap: flux leakage is reduced by coil placement, not lamination.',
          },
        ],
        correct: 2,
        solution:
          'Lamination breaks the conducting cross-section into thin insulated sheets, drastically shrinking the induced eddy-current loops and the associated <i>I</i><sup>2</sup><i>R</i> heating in the core.',
      },
      {
        t: 'mcq',
        q: 'In an AC circuit, the voltage and current are <i>v</i> = 200 sin <i>ωt</i> (V) and <i>i</i> = 5 sin(<i>ωt</i> − π/3) (A). The average power consumed is:',
        opts: [
          {
            label: '500 W',
            nudge: '<b>(A)</b> trap: forgetting the cos <i>φ</i> = 0.5 factor → ½(200)(5) = 500.',
          },
          { label: '250 W', nudge: null },
          {
            label: '1000 W',
            nudge: '<b>(C)</b> trap: using peak values without the ½ and without cos <i>φ</i>.',
          },
          {
            label: '866 W',
            nudge: '<b>(D)</b> trap: using sin 60° ≈ 0.866 instead of cos 60° and also dropping the ½ (200 × 5 × 0.866 = 866) — confusing the wattless and power components.',
          },
        ],
        correct: 1,
        solution:
          '<i>P</i> = ½<i>v</i><sub>m</sub><i>i</i><sub>m</sub> cos <i>φ</i> = ½(200)(5) cos 60° = ½(1000)(0.5) = 250 W. (Equivalently <i>V</i><sub>rms</sub><i>I</i><sub>rms</sub> cos <i>φ</i> = (200/√2) · (5/√2) · 0.5.)',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Using <i>P</i> = <i>VI</i> for reactive circuits.</b> This gives apparent power, not real power. The real power is <i>V</i><sub>rms</sub><i>I</i><sub>rms</sub> cos <i>φ</i>. Always ask for the phase angle / power factor before reporting power.',
          '<b>Thinking a transformer works on DC.</b> It needs a changing flux. Steady DC induces nothing in the secondary — and can overheat the primary. Transformers are AC-only devices.',
          '<b>Believing “step-up” raises both voltage and current.</b> It cannot — that would create power from nothing. Voltage up always means current down (and vice versa), in exact proportion.',
          '<b>Muddling the loss types.</b> Copper loss → windings → thicker wire. Eddy-current loss → core → lamination. Hysteresis loss → core → soft material / narrow loop. Keep the location and the fix paired in your memory.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For power, the cleanest formula is almost always <i>P</i> = <i>I</i><sub>rms</sub><sup>2</sup><i>R</i> — only the resistance dissipates, so if you know the current and <i>R</i> you can skip the power factor entirely. For transformers, anchor everything to one sentence: “voltage and turns go together; current goes the opposite way; power stays the same.” Quick sanity check: if your transformer answer shows power going up from primary to secondary, you’ve made an error — power can only stay equal (ideal) or drop (real).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Average power',
            note: '<i>P</i><sub>avg</sub> = <i>V</i><sub>rms</sub><i>I</i><sub>rms</sub> cos <i>φ</i>. Power factor cos <i>φ</i> = <i>R</i>/<i>Z</i> = (true power)/(apparent power).',
          },
          {
            f: 'Wattless',
            note: 'pure <i>L</i> or <i>C</i> → <i>φ</i> = 90° → cos <i>φ</i> = 0 → <i>P</i> = 0. Wattless current = <i>I</i><sub>rms</sub> sin <i>φ</i>.',
          },
          {
            f: 'Transformer (ideal)',
            note: '<i>V</i><sub>s</sub>/<i>V</i><sub>p</sub> = <i>N</i><sub>s</sub>/<i>N</i><sub>p</sub>, <i>I</i><sub>s</sub>/<i>I</i><sub>p</sub> = <i>N</i><sub>p</sub>/<i>N</i><sub>s</sub>, and <i>V</i><sub>p</sub><i>I</i><sub>p</sub> = <i>V</i><sub>s</sub><i>I</i><sub>s</sub>. Frequency unchanged; works on AC only.',
          },
          {
            f: 'Efficiency',
            note: '<i>η</i> = <i>P</i><sub>out</sub>/<i>P</i><sub>in</sub> × 100% (practical: 90–99%).',
          },
          {
            f: 'Losses',
            note: 'Copper (<i>I</i><sup>2</sup><i>R</i>, windings → thick wire); Eddy (core → laminate); Hysteresis (core → soft iron).',
          },
          {
            f: 'Transmission',
            note: '<i>P</i><sub>loss</sub> = (<i>P</i><sup>2</sup><i>R</i><sub>line</sub>)/<i>V</i><sup>2</sup> ∝ 1/<i>V</i><sup>2</sup> → transmit at high voltage, low current.',
          },
          {
            f: 'Choke coil',
            note: 'high-<i>L</i>, low-<i>r</i> inductor that limits AC current with cos <i>φ</i> ≈ 0, so almost no power loss (used in fluorescent tubes instead of a resistor).',
          },
        ],
        aids: ['Mnemonic: “High voltage, low loss.”'],
      },
    ],
  },
];
