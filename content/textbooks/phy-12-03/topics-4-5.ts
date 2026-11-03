import type { Topic } from '@/lib/textbooks';

/**
 * Class 12 Chapter 3, Topics 04 and 05: pp. 179–195 of the Class 12 Physics
 * Master Reference, word for word: Electrical Energy & Power (pp. 179–187)
 * and EMF, Terminal Voltage & Internal Resistance (pp. 188–195). Each is split
 * at its Sections 1 to 8. Figures 3.12 (caption p. 181, drawn on p. 182) and
 * 3.13 (caption p. 189, drawn on p. 190) are redrawn in lib/diagrams.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 179–187 ─────────────────────────
  {
    n: '04',
    title: 'Electrical Energy & Power',
    kalam: 'The cell does work to push charge around; the resistor converts that work into heat (and sometimes light).',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A very high-yield, application-rich topic. CBSE Boards ask for the power formulas, Joule’s law of heating, and the commercial unit of energy (2–3 marks), often with a billing numerical. JEE Main reliably sets bulb-rating and power-dissipation problems; JEE Advanced uses the maximum-power-transfer theorem and series/parallel brightness comparisons. NEET favours quick “which bulb is brighter” conceptuals.',
      },
      {
        t: 'p',
        html: 'Every time current flows through a resistor, the moving electrons keep crashing into the lattice and losing energy — and that lost energy reappears as <b>heat</b>. This is why a phone charger warms up, a heater glows, and a fuse melts. The cell does work to push charge around; the resistor converts that work into heat (and sometimes light). The two quantities that capture this are <b>energy</b> (the total amount converted) and <b>power</b> (the rate at which it’s converted).',
      },
      {
        t: 'p',
        html: 'Think of pushing a charge <i>q</i> through a potential difference <i>V</i>. By the very definition of potential difference, the work done is <i>W</i> = <i>qV</i>. If this happens steadily with current <i>I</i> over time <i>t</i>, then <i>q</i> = <i>It</i>, so <i>W</i> = <i>VIt</i>, and the rate of doing work — the power — is<br><i>P</i> = <i>W</i>/<i>t</i> = <i>VI</i>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture an electric heater as a paid toll on a hill road. The “toll” per car is the voltage <i>V</i> (energy handed over per coulomb); the “traffic rate” is the current <i>I</i> (coulombs per second). The money collected per second — the power — is naturally <i>V</i> × <i>I</i>. Collect for a couple of hours and you get the total energy, which is what your electricity bill actually charges you for.',
      },
      {
        t: 'p',
        html: 'Using Ohm’s law (<i>V</i> = <i>IR</i>), the same power wears three faces: <i>P</i> = <i>VI</i> = <i>I</i><sup>2</sup><i>R</i> = <i>V</i><sup>2</sup>/<i>R</i>. Which face you use depends on what’s held constant. In a <b>series</b> circuit the current is <b>common</b>, so <i>P</i> = <i>I</i><sup>2</sup><i>R</i> rules — the <b>bigger resistor dissipates more</b>. In a <b>parallel</b> circuit the voltage is <b>common</b>, so <i>P</i> = <i>V</i><sup>2</sup>/<i>R</i> rules — the <b>smaller resistor dissipates more</b>. This single switch explains the famous puzzle of why a low-watt bulb glows brighter than a high-watt bulb (both rated for the same voltage) when they’re wired in series.',
      },
      {
        t: 'p',
        html: 'Finally, there’s a beautiful optimisation: a real battery has internal resistance <i>r</i>, so it can’t dump unlimited power into a load. The power delivered to the load is greatest when the load resistance exactly matches the internal resistance — the <b>maximum power transfer</b> condition.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> <i>P</i> = <i>VI</i> is completely general for any two-terminal device; the forms <i>I</i><sup>2</sup><i>R</i> and <i>V</i><sup>2</sup>/<i>R</i> assume the element is <b>ohmic</b> (obeys <i>V</i> = <i>IR</i>) and that <i>R</i> is constant. For a real bulb, <i>R</i> rises sharply as the filament heats, so its “cold” resistance is far below its operating value — a rated wattage applies only at its rated voltage. The maximum-power-transfer result assumes a fixed source EMF and internal resistance with a variable load.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Electrical power (rate of energy conversion)',
        main: '<i>P</i> = <i>VI</i> = <i>I</i><sup>2</sup><i>R</i> = <i>V</i><sup>2</sup>/<i>R</i>',
        legend: [],
        note: 'SI unit: <b>watt (W)</b> = J s<sup>−1</sup>; dimension [M<sup>1</sup> L<sup>2</sup> T<sup>−3</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Electrical energy (work done / heat produced)',
        main: '<i>W</i> = <i>Pt</i> = <i>VIt</i> = <i>I</i><sup>2</sup><i>Rt</i> = (<i>V</i><sup>2</sup>/<i>R</i>)<i>t</i>',
        legend: [],
        note: 'SI unit: <b>joule (J)</b>; dimension [M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Joule’s law of heating',
        main: '<i>H</i> = <i>I</i><sup>2</sup><i>Rt</i> (heat produced in a resistor)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Commercial unit of energy (the “unit” on your bill)',
        main: '1 kilowatt-hour (kWh):<br>1 kWh = 1000 W × 3600 s<br>= 3.6 × 10<sup>6</sup> J',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Power rating of an appliance',
        main: '<i>R</i> = <i>V</i><sub>rated</sub><sup>2</sup>/<i>P</i><sub>rated</sub>',
        legend: [],
        note: 'Marked as e.g. “60 W, 240 V”; gives its resistance at rated voltage.',
      },
      {
        t: 'formula',
        kicker: 'Maximum power transfer (load <i>R</i>, source EMF <i>E</i>, internal resistance <i>r</i>)',
        main: '<i>P</i><sub>load</sub> = <i>E</i><sup>2</sup><i>R</i>/(<i>R</i> + <i>r</i>)<sup>2</sup><br>maximum when <i>R</i> = <i>r</i><br><i>P</i><sub>max</sub> = <i>E</i><sup>2</sup>/(4<i>r</i>)<br><i>η</i><sub>at max</sub> = 50%',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'Symbols: <i>V</i> potential difference (V), <i>I</i> current (A), <i>R</i>, <i>r</i> resistance (Ω), <i>E</i> EMF (V), <i>η</i> efficiency.',
      },

      { t: 'part', title: 'Derivations' },
      { t: 'p', html: '<b>3.1 The Power Formula and Joule’s Law</b>' },
      {
        t: 'p',
        html: 'Consider a resistor <i>R</i> across which a steady current <i>I</i> flows, driven by a potential difference <i>V</i>. Moving a charge d<i>q</i> through the drop <i>V</i> requires work d<i>W</i> = <i>V</i> d<i>q</i>. Since d<i>q</i> = <i>I</i> d<i>t</i>,<br>d<i>W</i> = <i>VI</i> d<i>t</i> ⇒ <i>P</i> = d<i>W</i>/d<i>t</i> = <i>VI</i>.',
      },
      {
        t: 'p',
        html: '<b>Why this is heat:</b> in a pure resistor the work done on the charges is not stored — it is handed to the lattice through collisions, emerging as heat. Applying Ohm’s law <i>V</i> = <i>IR</i>:<br><i>P</i> = <i>VI</i> = (<i>IR</i>)<i>I</i> = <i>I</i><sup>2</sup><i>R</i>,   <i>P</i> = <i>VI</i> = <i>V</i> · <i>V</i>/<i>R</i> = <i>V</i><sup>2</sup>/<i>R</i>.',
      },
      {
        t: 'p',
        html: 'Over a time <i>t</i>, the heat produced is <i>H</i> = <i>Pt</i> = <i>I</i><sup>2</sup><i>Rt</i> — <b>Joule’s law of heating</b>. The <i>I</i><sup>2</sup> dependence is the key practical fact: doubling the current quadruples the heating, which is why thick (low-current-density) cables are used for heavy loads.',
      },
      { t: 'p', html: '<b>3.2 Maximum Power Transfer Theorem</b>' },
      {
        t: 'p',
        html: 'Consider a source of EMF <i>E</i> and internal resistance <i>r</i> connected to a variable load <i>R</i>. The current is <i>I</i> = <i>E</i>/(<i>R</i> + <i>r</i>), so the power delivered to the load is<br><i>P</i><sub>load</sub> = <i>I</i><sup>2</sup><i>R</i> = <i>E</i><sup>2</sup><i>R</i>/(<i>R</i> + <i>r</i>)<sup>2</sup>.',
      },
      {
        t: 'p',
        html: 'To maximise <i>P</i><sub>load</sub> with respect to <i>R</i>, differentiate and set to zero:<br>d<i>P</i><sub>load</sub>/d<i>R</i> = <i>E</i><sup>2</sup> · ((<i>R</i> + <i>r</i>)<sup>2</sup> − <i>R</i> · 2(<i>R</i> + <i>r</i>))/(<i>R</i> + <i>r</i>)<sup>4</sup> = <i>E</i><sup>2</sup> · ((<i>R</i> + <i>r</i>) − 2<i>R</i>)/(<i>R</i> + <i>r</i>)<sup>3</sup> = <i>E</i><sup>2</sup> · (<i>r</i> − <i>R</i>)/(<i>R</i> + <i>r</i>)<sup>3</sup>.',
      },
      {
        t: 'p',
        html: 'This is zero when <i>R</i> = <i>r</i>. <b>Why this makes sense:</b> if <i>R</i> is too small, the current is large but the load voltage tiny; if <i>R</i> is too large, the voltage is high but the current tiny — the product peaks at the match point. Substituting <i>R</i> = <i>r</i>:<br><i>P</i><sub>max</sub> = <i>E</i><sup>2</sup><i>r</i>/(2<i>r</i>)<sup>2</sup> = <i>E</i><sup>2</sup>/(4<i>r</i>).',
      },
      {
        t: 'p',
        html: 'At this point the load and internal resistance dissipate equally, so the <b>efficiency is only</b> 50% — maximum power transfer is deliberately inefficient, a crucial caveat (power lines instead run at high efficiency, far from this condition).',
      },
      { t: 'fig', id: 'p12-03-fig-3.12' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'An electric bulb is rated “60 W, 240 V”. Find (a) its resistance at the rated voltage and (b) the current it draws.',
        steps: [
          '<b>(a) Resistance:</b> From <i>P</i> = <i>V</i><sup>2</sup>/<i>R</i>,<br><i>R</i> = <i>V</i><sup>2</sup>/<i>P</i> = (240)<sup>2</sup>/60 = 57600/60',
          '<b>(b) Current:</b> From <i>P</i> = <i>VI</i>,<br><i>I</i> = <i>P</i>/<i>V</i> = 60/240',
          '<b>Check:</b> <i>I</i><sup>2</sup><i>R</i> = (0.25)<sup>2</sup> × 960 = 0.0625 × 960 = 60 W. ✓',
        ],
        ans: '(a) 960 Ω; (b) 0.25 A.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Two bulbs, “100 W, 240 V” and “40 W, 240 V”, are connected <b>in series</b> across 240 V. Which glows brighter?',
        steps: [
          '<b>The trap:</b> “The 100 W bulb is more powerful, so it must be brighter.” This is wrong in series.',
          '<b>Fast reasoning:</b> In series the current is the same through both, so brightness goes as <i>P</i> = <i>I</i><sup>2</sup><i>R</i> — the bulb with the <b>higher resistance</b> glows brighter. Resistance <i>R</i> = <i>V</i><sup>2</sup>/<i>P</i>, so the lower-wattage bulb has the higher resistance:<br><i>R</i><sub>100</sub> = 240<sup>2</sup>/100 = 576 Ω,   <i>R</i><sub>40</sub> = 240<sup>2</sup>/40 = 1440 Ω.',
          'Since <i>R</i><sub>40</sub> > <i>R</i><sub>100</sub> and the current is common, the 40 W <b>bulb glows brighter</b> in series.',
          '<b>Memory hook:</b> In series, the “weaker” bulb wins; in parallel, the “stronger” bulb wins.',
        ],
        ans: 'The 40 W bulb is brighter (series).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: energy & billing',
        q: 'A household runs a 1.5 kW water geyser for 2 hours every day for 30 days. If electricity costs ₹8 per kWh, find the monthly energy consumed and its cost.',
        steps: [
          '<b>Energy</b> (work directly in kWh):<br><i>W</i> = <i>P</i> × <i>t</i> = 1.5 kW × (2 h/day × 30 days) = 1.5 × 60 = 90 kWh.',
          '<b>Cost:</b><br>Cost = 90 kWh × ₹8/kWh',
          '(In joules, 90 kWh = 90 × 3.6 × 10<sup>6</sup> = 3.24 × 10<sup>8</sup> J — note how clumsy joules are for billing, which is exactly why the kWh exists.)',
        ],
        ans: '₹720.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: maximum power transfer',
        q: 'A battery of EMF 12 V has internal resistance 2 Ω. A variable resistor <i>R</i> is connected as the load. Find (a) the value of <i>R</i> for maximum power transfer, (b) the maximum power delivered to <i>R</i>, and (c) the efficiency at that point.',
        steps: [
          '<b>(a)</b> Maximum power transfer occurs when the load matches the internal resistance:',
          '<b>(b)</b> Maximum load power:<br><i>P</i><sub>max</sub> = <i>E</i><sup>2</sup>/(4<i>r</i>) = (12)<sup>2</sup>/(4 × 2) = 144/8',
          '<b>(c)</b> At <i>R</i> = <i>r</i>, the current is <i>I</i> = <i>E</i>/(<i>R</i> + <i>r</i>) = 12/4 = 3 A. Total power from the battery = <i>EI</i> = 12 × 3 = 36 W; power to the load = 18 W. Efficiency:<br><i>η</i> = <i>P</i><sub>load</sub>/<i>P</i><sub>total</sub> = 18/36',
          '<b>Insight:</b> the other 18 W is wasted inside the battery. Maximum power transfer is a 50%-efficient compromise — useful for signal matching, never for power distribution.',
        ],
        ans: '(a) <i>R</i> = <i>r</i> = 2 Ω; (b) 18 W; (c) 50%.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A heater is rated “2000 W, 250 V”. Find its resistance and the current it draws at rated voltage.',
            a: '<i>R</i> = 31.25 Ω, <i>I</i> = 8 A',
          },
          {
            q: '[NEET] Two bulbs “60 W, 220 V” and “100 W, 220 V” are connected in <b>parallel</b> across 220 V. Which one glows brighter, and why?',
            a: 'The 100 W bulb (in parallel each gets full voltage, <i>P</i> = <i>V</i><sup>2</sup>/<i>R</i>, higher-wattage = lower <i>R</i> = brighter)',
          },
          {
            q: '[JEE Main] A current of 5 A flows through a 4 Ω resistor for 10 minutes. Find the heat produced (in joules and in calories, 1 cal = 4.2 J).',
            a: '<i>H</i> = <i>I</i><sup>2</sup><i>Rt</i> = 25 × 4 × 600 = 6.0 × 10<sup>4</sup> J ≈ 1.43 × 10<sup>4</sup> cal',
          },
          {
            q: '[JEE Main] An appliance of resistance 50 Ω is connected across a 200 V supply. Find the power consumed and the energy used in 3 hours (in kWh).',
            a: '<i>P</i> = <i>V</i><sup>2</sup>/<i>R</i> = 800 W; energy = 0.8 kW × 3 h = 2.4 kWh',
          },
          {
            q: '[JEE Advanced] A cell of EMF 6 V and internal resistance 1 Ω feeds a load <i>R</i>. (a) For what <i>R</i> is the load power maximum? (b) What is that maximum power? (c) What load power results if instead <i>R</i> = 5 Ω?',
            a: '(a) <i>R</i> = 1 Ω; (b) <i>P</i><sub>max</sub> = 9 W; (c) <i>P</i> = (36 × 5)/36 = 5.0 W',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The commercial unit of electrical energy, 1 kWh, equals:',
        opts: [
          { label: '3.6 × 10<sup>3</sup> J', nudge: '<b>(A)</b> mis-scales the power of ten.' },
          { label: '3.6 × 10<sup>6</sup> J', nudge: null },
          { label: '1000 J', nudge: '<b>(C)</b> uses just the kilowatt.' },
          { label: '3600 J', nudge: '<b>(D)</b> uses just the seconds in an hour (3600).' },
        ],
        correct: 1,
        solution: '1 kWh = 1000 W × 3600 s = 3.6 × 10<sup>6</sup> J. Each of <b>(C)</b> and <b>(D)</b> drops one factor.',
      },
      {
        t: 'mcq',
        q: 'Two identical bulbs are connected once in series and once in parallel across the same supply voltage. The ratio of total power consumed (series : parallel) is:',
        opts: [
          { label: '1 ∶ 1', nudge: '<b>(A)</b> ignores the resistance change.' },
          { label: '1 ∶ 4', nudge: null },
          { label: '4 ∶ 1', nudge: '<b>(C)</b> inverts it.' },
          { label: '2 ∶ 1', nudge: '<b>(D)</b> uses a single factor of 2.' },
        ],
        correct: 1,
        solution: 'For two equal bulbs of resistance <i>R</i> across voltage <i>V</i>: series total <i>R</i><sub>s</sub> = 2<i>R</i> gives <i>P</i><sub>s</sub> = <i>V</i><sup>2</sup>/(2<i>R</i>); parallel <i>R</i><sub>p</sub> = <i>R</i>/2 gives <i>P</i><sub>p</sub> = 2<i>V</i><sup>2</sup>/<i>R</i>. Ratio <i>P</i><sub>s</sub> ∶ <i>P</i><sub>p</sub> = ½ ∶ 2 = 1 ∶ 4.',
      },
      {
        t: 'mcq',
        q: 'A bulb rated “<i>P</i>, <i>V</i>” is operated at half its rated voltage. Assuming constant resistance, the power it now consumes is:',
        opts: [
          { label: '<i>P</i>/2', nudge: '<b>(A)</b> assumes <i>P</i> ∝ <i>V</i> (forgets the square).' },
          { label: '<i>P</i>/4', nudge: null },
          { label: '<i>P</i>', nudge: '<b>(C)</b> ignores the change.' },
          { label: '2<i>P</i>', nudge: '<b>(D)</b> goes the wrong way.' },
        ],
        correct: 1,
        solution: 'With <i>R</i> fixed, <i>P</i> ∝ <i>V</i><sup>2</sup>, so halving <i>V</i> gives (1/2)<sup>2</sup> = 1/4 of the power. (In reality <i>R</i> also drops at lower temperature, but the constant-<i>R</i> assumption is what’s asked.)',
      },
      {
        t: 'mcq',
        q: 'For maximum power transfer from a source of internal resistance <i>r</i> to a load <i>R</i>, the condition and the efficiency are:',
        opts: [
          { label: '<i>R</i> ≫ <i>r</i>, <i>η</i> → 100%', nudge: '<b>(A)</b> describes maximum efficiency (not maximum power).' },
          { label: '<i>R</i> = <i>r</i>, <i>η</i> = 50%', nudge: null },
          { label: '<i>R</i> ≪ <i>r</i>, <i>η</i> = 50%', nudge: '<b>(C)</b> has the wrong condition.' },
          {
            label: '<i>R</i> = <i>r</i>, <i>η</i> = 100%',
            nudge: '<b>(D)</b> wrongly claims full efficiency at the match point — the most common trap.',
          },
        ],
        correct: 1,
        solution: 'Power to the load peaks at <i>R</i> = <i>r</i>, where load and source dissipate equally, so <i>η</i> = 50%.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Using the wrong power formula for the situation.</b> In series (common current) use <i>P</i> = <i>I</i><sup>2</sup><i>R</i> — bigger <i>R</i> dissipates more. In parallel (common voltage) use <i>P</i> = <i>V</i><sup>2</sup>/<i>R</i> — smaller <i>R</i> dissipates more. Picking the wrong one flips your brightness answer.',
          '<b>Treating a bulb’s rated resistance as fixed at all voltages.</b> “60 W, 240 V” gives <i>R</i> only at 240 V; the cold filament has much lower resistance.',
          '<b>Forgetting the square in <i>P</i> ∝ <i>V</i><sup>2</sup>.</b> Halving the voltage quarters the power, not halves it.',
          '<b>Confusing maximum power with maximum efficiency.</b> They occur at different conditions (<i>R</i> = <i>r</i> vs <i>R</i> ≫ <i>r</i>).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For billing, keep energy in <b>kWh</b> end to end (power in kW × time in hours) — never convert to joules unless asked. For brightness comparisons, first ask “what is shared — current or voltage?” That one question picks the right formula instantly.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Power', note: '<i>P</i> = <i>VI</i> = <i>I</i><sup>2</sup><i>R</i> = <i>V</i><sup>2</sup>/<i>R</i> (watt).' },
          {
            f: 'Energy / heat',
            note: '<i>W</i> = <i>Pt</i> = <i>VIt</i> = <i>I</i><sup>2</sup><i>Rt</i> (joule); <b>Joule’s law</b> <i>H</i> = <i>I</i><sup>2</sup><i>Rt</i>.',
          },
          { f: 'Commercial unit', note: '1 kWh = 3.6 × 10<sup>6</sup> J; cost = kWh × rate.' },
          { f: 'Appliance rating', note: '<i>R</i> = <i>V</i><sub>rated</sub><sup>2</sup>/<i>P</i><sub>rated</sub>.' },
          {
            f: 'Brightness',
            note: 'series ⇒ <i>P</i> = <i>I</i><sup>2</sup><i>R</i> (bigger <i>R</i> brighter); parallel ⇒ <i>P</i> = <i>V</i><sup>2</sup>/<i>R</i> (smaller <i>R</i> brighter).',
          },
          {
            f: 'Max power transfer',
            note: '<i>R</i> = <i>r</i>, <i>P</i><sub>max</sub> = <i>E</i><sup>2</sup>/(4<i>r</i>), <i>η</i> = 50%.',
          },
        ],
        aids: [
          '“Series — weaker bulb wins; parallel — stronger bulb wins.”',
          '“Max power ≠ max efficiency” (<i>R</i> = <i>r</i> gives only 50%).',
          'Power scales with voltage squared.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 05 · pp. 188–195 ─────────────────────────
  {
    n: '05',
    title: 'EMF, Terminal Voltage & Internal Resistance',
    kalam: 'A cell is a charge pump.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Conceptually central and frequently tested. CBSE Boards ask for the definitions of EMF and internal resistance and the relation <i>V</i> = <i>E</i> − <i>Ir</i> (2–3 marks). JEE Main sets numericals finding <i>E</i> and <i>r</i> from load measurements; JEE Advanced explores charging cells and power-to-load analysis. NEET loves the “why is terminal voltage less than EMF” conceptual and short-circuit current.',
      },
      {
        t: 'p',
        html: 'A cell is a charge pump. Chemical reactions inside it do work to lift positive charge from the low-potential terminal to the high-potential terminal — against the electric field — exactly as a water pump lifts water uphill. The <b>electromotive force (EMF)</b>, written <i>E</i>, is the energy this pump gives to each coulomb of charge. Despite its name, EMF is <b>not a force</b> (its unit is the volt, energy per charge) — it’s the “full pressure” the cell can offer when nothing is drawing from it.',
      },
      {
        t: 'p',
        html: 'But no real pump is perfect. The chemicals and electrodes inside the cell themselves resist the flow of charge — this is the <b>internal resistance</b> <i>r</i>. When the cell sits idle (open circuit, no current), you measure its full EMF across the terminals. The instant you connect a load and current <i>I</i> flows, some of the cell’s push is “used up” overcoming its own internal resistance, dropping <i>Ir</i> volts inside the cell. What’s left for the outside world — the <b>terminal voltage</b> <i>V</i> — is therefore less than the EMF:<br><i>V</i> = <i>E</i> − <i>Ir</i> (cell discharging).',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a water tank on your roof with a tap downstairs. The EMF is the full pressure due to the tank’s height. But the narrow, slightly rusty internal pipe (internal resistance) eats some pressure whenever water actually flows. With the tap shut (no flow), you’d measure full pressure (EMF); open it wide (large current), and the pressure at the tap (terminal voltage) sags. Open it fully with no resistance outside — a <b>short circuit</b> — and the flow is limited only by the internal pipe: <i>I</i><sub>max</sub> = <i>E</i>/<i>r</i>, a dangerously large current that can overheat the cell.',
      },
      {
        t: 'p',
        html: 'There’s also the reverse situation: when you charge a battery, you force current into it against its EMF, so now you must supply extra voltage to overcome both the EMF and the internal drop: <i>V</i> = <i>E</i> + <i>Ir</i>. The terminal voltage of a charging battery is greater than its EMF.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> We model the cell as an ideal EMF source <i>E</i> in series with a fixed resistor <i>r</i>. In reality <i>r</i> is not truly constant — it depends on temperature, the cell’s state of charge, and how fast it’s being drained (and rises sharply as a battery ages or runs down). The clean relation <i>V</i> = <i>E</i> − <i>Ir</i> assumes a steady current and a constant <i>r</i> over the measurement.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'EMF (energy supplied per unit charge by the source)',
        main: '<i>E</i> = <i>W</i>/<i>q</i>',
        legend: [],
        note: 'SI unit: <b>volt (V)</b> = J C<sup>−1</sup>; dimension [M<sup>1</sup> L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Terminal voltage (potential difference across the cell’s terminals in a circuit)',
        main: '<i>V</i> = <i>E</i> − <i>Ir</i> (discharging)<br><i>V</i> = <i>E</i> + <i>Ir</i> (charging)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Current through an external load <i>R</i> (single cell)',
        main: '<i>I</i> = <i>E</i>/(<i>R</i> + <i>r</i>)<br><i>V</i> = <i>IR</i> = <i>ER</i>/(<i>R</i> + <i>r</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Internal resistance from a load measurement',
        main: '<i>r</i> = (<i>E</i> − <i>V</i>)/<i>I</i> = <i>R</i>((<i>E</i> − <i>V</i>)/<i>V</i>) = <i>R</i>(<i>E</i>/<i>V</i> − 1)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Special cases',
        main: 'Open circuit (<i>I</i> = 0): <i>V</i> = <i>E</i> (terminal voltage equals EMF)<br>Short circuit (<i>R</i> = 0): <i>I</i><sub>max</sub> = <i>E</i>/<i>r</i>, <i>V</i> = 0',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Power delivered to the load',
        main: '<i>P</i><sub>load</sub> = <i>I</i><sup>2</sup><i>R</i> = <i>E</i><sup>2</sup><i>R</i>/(<i>R</i> + <i>r</i>)<sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'Symbols: <i>E</i> EMF (V), <i>V</i> terminal voltage (V), <i>I</i> current (A), <i>r</i> internal resistance (Ω), <i>R</i> external load (Ω).',
      },

      { t: 'part', title: 'Derivations and key procedures' },
      { t: 'p', html: '<b>3.1 Terminal Voltage Relation <i>V</i> = <i>E</i> − <i>Ir</i></b>' },
      {
        t: 'p',
        html: 'Consider a cell of EMF <i>E</i> and internal resistance <i>r</i> connected to an external resistor <i>R</i>, driving a steady current <i>I</i>.',
      },
      { t: 'fig', id: 'p12-03-fig-3.13' },
      {
        t: 'p',
        html: 'Apply the loop rule (energy conservation) around the circuit. The EMF supplies <i>E</i> per coulomb; this is spent on the internal drop <i>Ir</i> and the external drop <i>IR</i>:<br><i>E</i> = <i>Ir</i> + <i>IR</i>.',
      },
      {
        t: 'p',
        html: 'The terminal voltage <i>V</i> is the potential difference across the cell’s terminals, which equals the drop across the external resistor, <i>V</i> = <i>IR</i>. Substituting <i>IR</i> = <i>E</i> − <i>Ir</i>:<br><i>V</i> = <i>E</i> − <i>Ir</i>.',
      },
      {
        t: 'p',
        html: '<b>Physical reading:</b> the terminal voltage is the full EMF minus the voltage “lost” inside the cell. When <i>I</i> = 0 (nothing connected), no internal drop occurs and <i>V</i> = <i>E</i> — this is why an open-circuit voltmeter reads the EMF (to a good approximation).',
      },
      { t: 'p', html: '<b>3.2 Charging a Cell: <i>V</i> = <i>E</i> + <i>Ir</i></b>' },
      {
        t: 'p',
        html: 'When an external source pushes current into the cell (charging), the current flows opposite to the cell’s normal discharge direction. Now the external source must overcome both the cell’s EMF and its internal drop, so the voltage applied across the cell’s terminals is<br><i>V</i> = <i>E</i> + <i>Ir</i>.',
      },
      {
        t: 'p',
        html: '<b>Why the sign flips:</b> during charging the internal <i>Ir</i> drop is in the same sense as the EMF opposing the incoming current, so both add to the required terminal voltage.',
      },
      {
        t: 'proc',
        title: '3.3 Procedure — Finding E and r from Two Loads',
        steps: [
          'Connect the cell to a known resistance <i>R</i><sub>1</sub>; measure (or compute) the current <i>I</i><sub>1</sub>. Then <i>E</i> = <i>I</i><sub>1</sub>(<i>R</i><sub>1</sub> + <i>r</i>).',
          'Repeat with a different known resistance <i>R</i><sub>2</sub> giving current <i>I</i><sub>2</sub>: <i>E</i> = <i>I</i><sub>2</sub>(<i>R</i><sub>2</sub> + <i>r</i>).',
          'Equate the two expressions for <i>E</i> and solve for <i>r</i>, then back-substitute for <i>E</i>. <b>Reasoning:</b> one measurement gives one equation in two unknowns (<i>E</i>, <i>r</i>); a second, independent measurement closes the system. This is the standard lab method (and a JEE staple).',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A cell of EMF 12 V and internal resistance 0.5 Ω is connected to an external resistance of 5.5 Ω. Find the current in the circuit and the terminal voltage of the cell.',
        steps: [
          '<b>Current:</b><br><i>I</i> = <i>E</i>/(<i>R</i> + <i>r</i>) = 12/(5.5 + 0.5) = 12/6 = 2 A.',
          '<b>Terminal voltage:</b><br><i>V</i> = <i>E</i> − <i>Ir</i> = 12 − (2)(0.5) = 12 − 1',
          '<b>Check:</b> <i>V</i> = <i>IR</i> = 2 × 5.5 = 11 V. ✓ The terminal voltage (11 V) is below the EMF (12 V) by exactly the internal drop (1 V).',
        ],
        ans: '11 V.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A cell reads 1.5 V across its terminals on <b>open circuit</b>. When connected to a 4 Ω resistor, the terminal voltage falls to 1.2 V. Find its internal resistance.',
        steps: [
          '<b>The trap:</b> Students try to find the current from the EMF and <i>r</i> before knowing <i>r</i> — going in circles. The shortcut: the loaded terminal voltage gives the current directly through the external resistor.',
          '<b>Fast move:</b> Open-circuit reading = <i>E</i> = 1.5 V. Loaded current:<br><i>I</i> = <i>V</i>/<i>R</i> = 1.2/4 = 0.3 A.',
          'The “lost” voltage equals the internal drop:<br><i>E</i> − <i>V</i> = <i>Ir</i> ⇒ 1.5 − 1.2 = 0.3 <i>r</i> ⇒ <i>r</i> = 0.3/0.3',
          '<b>Hook:</b> Voltage you lost ÷ current you drew = internal resistance.',
        ],
        ans: '1 Ω.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: two-load method',
        q: 'When a cell is connected to a 10 Ω resistor, the current is 0.50 A. When the same cell is connected to a 4 Ω resistor, the current is 1.0 A. Find the EMF and internal resistance of the cell.',
        steps: [
          'Write <i>E</i> = <i>I</i>(<i>R</i> + <i>r</i>) for both cases:<br><i>E</i> = 0.50(10 + <i>r</i>),   (1)<br><i>E</i> = 1.0(4 + <i>r</i>).   (2)',
          'Equate (1) and (2):<br>0.50(10 + <i>r</i>) = 1.0(4 + <i>r</i>) ⇒ 5 + 0.5<i>r</i> = 4 + <i>r</i> ⇒ 1 = 0.5<i>r</i> ⇒ <i>r</i> = 2 Ω.',
          'Back-substitute into (2):<br><i>E</i> = 1.0(4 + 2)',
          '<b>Check with (1):</b> 0.50(10 + 2) = 0.50 × 12 = 6 V. ✓',
        ],
        ans: '6 V, <i>r</i> = 2 Ω.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: charging analysis',
        q: 'A battery of EMF 6 V and internal resistance 0.5 Ω is being <b>charged</b> by a 10 V DC supply through a series resistor of 2 Ω. Find (a) the charging current, (b) the terminal voltage across the battery during charging, and (c) the rate at which energy is stored as chemical energy in the battery.',
        steps: [
          '<b>(a) Charging current.</b> The supply must overcome the battery’s back-EMF; the net driving voltage is (10 − 6) V across the total series resistance (2 + 0.5) Ω:<br><i>I</i> = (<i>V</i><sub>supply</sub> − <i>E</i>)/(<i>R</i><sub>series</sub> + <i>r</i>) = (10 − 6)/(2 + 0.5) = 4/2.5 = 1.6 A.',
          '<b>(b) Terminal voltage of the charging battery</b> (now <i>V</i> = <i>E</i> + <i>Ir</i>):<br><i>V</i> = <i>E</i> + <i>Ir</i> = 6 + (1.6)(0.5) = 6 + 0.8',
          '<b>(c) Rate of chemical-energy storage.</b> Of the power delivered to the battery (<i>VI</i>), the part <i>I</i><sup>2</sup><i>r</i> is wasted as heat inside it, and the part <i>EI</i> is stored chemically:<br><i>P</i><sub>stored</sub> = <i>EI</i> = 6 × 1.6',
          '<b>Cross-check:</b> power into battery = <i>VI</i> = 6.8 × 1.6 = 10.88 W; internal heat = <i>I</i><sup>2</sup><i>r</i> = (1.6)<sup>2</sup>(0.5) = 1.28 W; stored = 10.88 − 1.28 = 9.6 W. ✓ The terminal voltage exceeds the EMF here — the signature of charging.',
        ],
        ans: '(b) 6.8 V; (c) 9.6 W.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A cell of EMF 1.5 V and internal resistance 0.5 Ω is connected across a 2.5 Ω resistor. Find the current and the terminal voltage.',
            a: '<i>I</i> = 0.5 A, <i>V</i> = 1.25 V',
          },
          {
            q: '[NEET] A battery of EMF 9 V gives a terminal voltage of 8.4 V when supplying a current of 1.2 A. Find its internal resistance.',
            a: '<i>r</i> = 0.5 Ω',
          },
          {
            q: '[JEE Main] A cell gives a current of 2 A through a 3 Ω resistor and 1.2 A through a 6 Ω resistor. Find its EMF and internal resistance.',
            a: '<i>E</i> = 9 V, <i>r</i> = 1.5 Ω (since 2(3 + <i>r</i>) = 1.2(6 + <i>r</i>))',
          },
          {
            q: '[JEE Main] A cell of EMF 2 V and internal resistance 0.1 Ω is short-circuited. Find the short-circuit current and the terminal voltage.',
            a: '<i>I</i> = 20 A, <i>V</i> = 0',
          },
          {
            q: '[JEE Advanced] A 12 V battery (internal resistance 0.4 Ω) is charged by a 15 V source through a 2.6 Ω resistor. Find the charging current, the battery’s terminal voltage while charging, and the power dissipated as heat inside the battery.',
            a: '<i>I</i> = 1 A, <i>V</i> = 12.4 V, <i>P</i><sub>internal</sub> = 0.4 W',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The terminal voltage of a cell is <b>less</b> than its EMF when the cell is:',
        opts: [
          { label: 'on open circuit.', nudge: '<b>(A)</b> on open circuit <i>I</i> = 0, so <i>V</i> = <i>E</i> (equal, not less).' },
          { label: 'discharging (supplying current).', nudge: null },
          { label: 'being charged.', nudge: '<b>(C)</b> during charging <i>V</i> = <i>E</i> + <i>Ir</i> > <i>E</i> (greater).' },
          { label: 'at absolute zero.', nudge: '<b>(D)</b> temperature alone doesn’t set this relation.' },
        ],
        correct: 1,
        solution: 'While discharging, the internal drop <i>Ir</i> subtracts: <i>V</i> = <i>E</i> − <i>Ir</i> < <i>E</i>.',
      },
      {
        t: 'mcq',
        q: 'A cell of EMF <i>E</i> and internal resistance <i>r</i> is short-circuited. The current drawn is:',
        opts: [
          { label: 'zero', nudge: '<b>(A)</b> would need infinite resistance.' },
          { label: '<i>E</i>/<i>r</i>', nudge: null },
          {
            label: 'infinite',
            nudge: '<b>(C)</b> is the misconception that “no external resistance ⇒ infinite current”; <i>r</i> caps it.',
          },
          { label: '<i>E</i> · <i>r</i>', nudge: '<b>(D)</b> is dimensionally wrong.' },
        ],
        correct: 1,
        solution: 'With <i>R</i> = 0, <i>I</i> = <i>E</i>/(<i>R</i> + <i>r</i>) = <i>E</i>/<i>r</i> — large but finite, limited by the internal resistance.',
      },
      {
        t: 'mcq',
        q: 'On open circuit, an ideal voltmeter across a cell reads:',
        opts: [
          { label: 'zero', nudge: '<b>(A)</b> would require a short.' },
          { label: 'the EMF of the cell', nudge: null },
          { label: 'less than the EMF', nudge: '<b>(C)</b> happens only when current flows.' },
          { label: 'more than the EMF', nudge: '<b>(D)</b> happens only during charging.' },
        ],
        correct: 1,
        solution: 'An ideal voltmeter draws no current, so <i>I</i> = 0 and <i>V</i> = <i>E</i> − (0)<i>r</i> = <i>E</i>.',
      },
      {
        t: 'mcq',
        q: 'A battery is being charged. Its terminal voltage compared to its EMF is:',
        opts: [
          { label: 'equal', nudge: '<b>(A)</b> holds only on open circuit.' },
          { label: 'smaller by <i>Ir</i>', nudge: '<b>(B)</b> is the discharging case.' },
          { label: 'larger by <i>Ir</i>', nudge: null },
          { label: 'zero', nudge: '<b>(D)</b> is a short circuit.' },
        ],
        correct: 2,
        solution: 'Charging forces current into the cell against its EMF, so the applied terminal voltage is <i>V</i> = <i>E</i> + <i>Ir</i>, larger than <i>E</i> by exactly <i>Ir</i>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing EMF with terminal voltage.</b> EMF is fixed (a property of the cell); terminal voltage depends on the current drawn. They are equal only on open circuit.',
          '<b>Wrong sign for charging.</b> Discharging: <i>V</i> = <i>E</i> − <i>Ir</i>. Charging: <i>V</i> = <i>E</i> + <i>Ir</i>. Using the discharge formula for a charging battery gives a terminal voltage below the EMF, which is impossible while charging.',
          '<b>Thinking short-circuit current is infinite.</b> It is <i>E</i>/<i>r</i> — finite, set by the internal resistance.',
          '<b>Calling EMF a “force.”</b> It is energy per charge (volts), not a force — a frequent definition-mark loss in boards.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> The cleanest route to <i>r</i> from data is <i>r</i> = (<i>E</i> − <i>V</i>)/<i>I</i> — lost voltage over current drawn. For two-load problems, write <i>E</i> = <i>I</i>(<i>R</i> + <i>r</i>) for each case and equate; the EMF cancels and <i>r</i> falls out in one step. Always sanity-check: a discharging cell must have <i>V</i> < <i>E</i>.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'EMF',
            note: '<i>E</i> = <i>W</i>/<i>q</i> — energy per coulomb; the open-circuit terminal voltage. (A voltage, not a force.)',
          },
          { f: 'Discharging', note: '<i>V</i> = <i>E</i> − <i>Ir</i>. <b>Charging:</b> <i>V</i> = <i>E</i> + <i>Ir</i>.' },
          {
            f: 'Single cell + load',
            note: '<i>I</i> = <i>E</i>/(<i>R</i> + <i>r</i>), <i>V</i> = <i>IR</i> = <i>ER</i>/(<i>R</i> + <i>r</i>).',
          },
          { f: 'Internal resistance', note: '<i>r</i> = (<i>E</i> − <i>V</i>)/<i>I</i> = <i>R</i>(<i>E</i>/<i>V</i> − 1).' },
          {
            f: 'Open circuit',
            note: '<i>V</i> = <i>E</i>. <b>Short circuit:</b> <i>I</i><sub>max</sub> = <i>E</i>/<i>r</i>, <i>V</i> = 0.',
          },
          { f: 'Load power', note: '<i>P</i> = <i>E</i><sup>2</sup><i>R</i>/(<i>R</i> + <i>r</i>)<sup>2</sup>.' },
        ],
        aids: [
          '“Draw current, lose voltage” — terminal voltage sags by <i>Ir</i>.',
          '“Charging adds, discharging subtracts” (the <i>Ir</i> sign).',
          '“Short-circuit current is <i>E</i>/<i>r</i>, not infinity.”',
        ],
      },
    ],
  },
];
