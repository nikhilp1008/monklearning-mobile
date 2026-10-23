import type { Topic } from '@/lib/textbooks';

/**
 * Class 12 Chapter 7, Topics 03 and 04: pp. 476–490 of the Class 12 Physics
 * Master Reference, word for word. The book prints its sub-topics in the order
 * 00, 01, 04, 02, 03; the app keeps the page order, so book Subtopic 04 (LC
 * Oscillations, pp. 476–481) is Topic 03 here and book Subtopic 02 (Resonance
 * and Q-Factor, pp. 482–490) is Topic 04. Every cross-reference is rewritten
 * with that mapping (Subtopic 01 → Topic 02, Subtopic 02 → Topic 04). Each
 * topic is split at its Sections 1 to 8. Figure 7.2 (caption p. 484, drawn
 * on p. 485) is redrawn in lib/diagrams/physics-12-07.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 476–481 ─────────────────────────
  {
    n: '03',
    title: 'LC Oscillations',
    kalam: 'Energy sloshes endlessly back and forth between the capacitor’s electric field and the inductor’s magnetic field.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The conceptual root of resonance. JEE Main and Advanced regularly ask for the oscillation frequency, the maximum current from an initial charge, and energy-sharing instants; NEET tests the L-C energy-exchange concept and the SHM analogy. (CBSE Board papers rarely ask this topic directly — but it is firmly in the JEE/NEET syllabus and is essential for understanding resonance, so a complete student must know it.)',
      },
      {
        t: 'p',
        html: 'Take a capacitor, charge it up, then connect it across an inductor — nothing else, no battery, no resistor. What happens? The capacitor begins to discharge through the inductor, but the inductor resists the sudden rise of current, so the current builds gradually. By the time the capacitor is fully empty, the current is at its maximum and the inductor is storing all the energy in its magnetic field. Now the current, having nowhere to stop, keeps flowing and recharges the capacitor the other way round. Then the whole story runs in reverse. Energy sloshes endlessly back and forth between the capacitor’s electric field and the inductor’s magnetic field. These are <b>LC oscillations</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> it is the exact electrical twin of a mass on a spring. Pull the mass aside (charge the capacitor) and release it: all the energy starts as potential energy in the stretched spring (electric field in the capacitor). As the mass speeds through the centre, energy becomes all kinetic (magnetic field in the inductor, where current — the “speed” of charge — is maximum). The mass overshoots, the spring compresses the other way (capacitor charges in reverse), and it oscillates forever if there’s no friction. In an LC circuit the “friction” is resistance <i>R</i>; an ideal LC circuit with <i>R</i> = 0 oscillates undamped forever, while a real one slowly dies away.',
      },
      {
        t: 'p',
        html: 'The correspondence is precise and worth carrying in your head:',
      },
      {
        t: 'defgrid',
        title: 'Mechanical SHM — LC circuit',
        rows: [
          { k: 'displacement <i>x</i>', v: 'charge <i>q</i>' },
          { k: 'velocity <i>v</i> = <i>ẋ</i>', v: 'current <i>i</i> = <i>q̇</i>' },
          { k: 'mass <i>m</i> (inertia)', v: 'inductance <i>L</i> (opposes change in current)' },
          { k: 'spring constant <i>k</i>', v: 'reciprocal capacitance 1/<i>C</i>' },
          { k: '½<i>kx</i><sup>2</sup> (PE)', v: '<i>q</i><sup>2</sup>/(2<i>C</i>) (capacitor energy)' },
          { k: '½<i>mv</i><sup>2</sup> (KE)', v: '½<i>Li</i><sup>2</sup> (inductor energy)' },
          { k: '<i>ω</i> = √(<i>k</i>/<i>m</i>)', v: '<i>ω</i><sub>0</sub> = 1/√(<i>LC</i>)' },
        ],
      },
      {
        t: 'p',
        html: 'This natural frequency <i>ω</i><sub>0</sub> = 1/√(<i>LC</i>) is the same expression as the resonant frequency from Topic 04 — and that is no coincidence. Resonance is simply what happens when you drive an LCR circuit at the frequency it wants to oscillate at on its own. LC oscillations are that “wanting,” laid bare.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• <b>Ideal LC means <i>R</i> = 0.</b> Only then are the oscillations undamped (constant amplitude). Any real resistance steadily drains energy as heat, so the oscillations decay — and if <i>R</i> is large enough, the circuit doesn’t oscillate at all (it just relaxes).<br>• <b>An LC circuit is not an energy source.</b> The total energy is fixed by the initial charge; it only shuttles between the two elements. Nothing is created.<br>• The simple cosine solution assumes the capacitor starts fully charged with zero initial current. Different starting conditions just shift the phase.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Natural (angular) frequency, frequency, and period',
        main: '<i>ω</i><sub>0</sub> = 1/√(<i>LC</i>)<br><i>f</i><sub>0</sub> = 1/(2π√(<i>LC</i>))<br><i>T</i> = 2π√(<i>LC</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Charge and current',
        main: '<i>q</i> = <i>q</i><sub>0</sub> cos <i>ω</i><sub>0</sub><i>t</i><br><i>i</i> = d<i>q</i>/d<i>t</i> = −<i>q</i><sub>0</sub><i>ω</i><sub>0</sub> sin <i>ω</i><sub>0</sub><i>t</i><br>⇒ <i>i</i><sub>max</sub> = <i>q</i><sub>0</sub><i>ω</i><sub>0</sub> = <i>q</i><sub>0</sub>/√(<i>LC</i>)',
        legend: [],
        note: '(capacitor fully charged to <i>q</i><sub>0</sub> at <i>t</i> = 0, no initial current)',
      },
      {
        t: 'formula',
        kicker: 'Energy stored',
        main: '<i>U</i><sub>C</sub> = <i>q</i><sup>2</sup>/(2<i>C</i>) (capacitor)<br><i>U</i><sub>L</sub> = ½<i>Li</i><sup>2</sup> (inductor)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Conservation of energy',
        main: '<i>U</i><sub>total</sub> = <i>q</i><sup>2</sup>/(2<i>C</i>) + ½<i>Li</i><sup>2</sup> = <i>q</i><sub>0</sub><sup>2</sup>/(2<i>C</i>) = ½<i>Li</i><sub>max</sub><sup>2</sup> = constant',
        legend: [],
        note: '(ideal, <i>R</i> = 0)',
      },
      {
        t: 'formula',
        kicker: 'Useful consequence — maximum current from an initial voltage <i>V</i><sub>0</sub> across <i>C</i>',
        main: '<i>i</i><sub>max</sub> = <i>V</i><sub>0</sub>√(<i>C</i>/<i>L</i>)',
        legend: [],
        note: '(so <i>q</i><sub>0</sub> = <i>CV</i><sub>0</sub>)',
      },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Symbol', 'SI Unit', 'Dimensional Formula'],
        rows: [
          ['Natural angular frequency', '<i>ω</i><sub>0</sub>', 'rad s<sup>−1</sup>', '[T<sup>−1</sup>]'],
          ['Charge', '<i>q</i>', 'coulomb (C)', '[A T]'],
          ['Energy', '<i>U</i>', 'joule (J)', '[M L<sup>2</sup> T<sup>−2</sup>]'],
        ],
      },
      {
        t: 'p',
        html: '<b>Variables:</b> <i>q</i><sub>0</sub> = initial (maximum) charge; <i>i</i><sub>max</sub> = peak current; <i>L</i> = inductance; <i>C</i> = capacitance; <i>V</i><sub>0</sub> = initial capacitor voltage; <i>ω</i><sub>0</sub> = natural angular frequency.',
      },

      { t: 'part', title: 'Key derivations' },
      { t: 'p', html: '<b>3.1 The LC oscillation equation and its solution</b>' },
      {
        t: 'p',
        html: 'Connect a charged capacitor (<i>q</i><sub>0</sub>) across an inductor. Apply Kirchhoff’s voltage law around the loop — the voltage across the inductor plus the voltage across the capacitor must sum to zero:<br><i>L</i> d<i>i</i>/d<i>t</i> + <i>q</i>/<i>C</i> = 0',
      },
      {
        t: 'p',
        html: 'Since the current is the rate at which the capacitor’s charge changes, <i>i</i> = d<i>q</i>/d<i>t</i>, so d<i>i</i>/d<i>t</i> = d<sup>2</sup><i>q</i>/d<i>t</i><sup>2</sup>. Substituting:<br><i>L</i> d<sup>2</sup><i>q</i>/d<i>t</i><sup>2</sup> + <i>q</i>/<i>C</i> = 0 ⇒ d<sup>2</sup><i>q</i>/d<i>t</i><sup>2</sup> = −(1/(<i>LC</i>)) <i>q</i>',
      },
      {
        t: 'p',
        html: 'This is the defining equation of simple harmonic motion, <i>q̈</i> = −<i>ω</i><sub>0</sub><sup>2</sup><i>q</i>, with:<br><i>ω</i><sub>0</sub><sup>2</sup> = 1/(<i>LC</i>) ⇒ <i>ω</i><sub>0</sub> = 1/√(<i>LC</i>)',
      },
      {
        t: 'p',
        html: 'The solution, with the capacitor fully charged at <i>t</i> = 0, is <i>q</i> = <i>q</i><sub>0</sub> cos <i>ω</i><sub>0</sub><i>t</i>. Differentiating gives the current <i>i</i> = −<i>q</i><sub>0</sub><i>ω</i><sub>0</sub> sin <i>ω</i><sub>0</sub><i>t</i>, whose amplitude is <i>i</i><sub>max</sub> = <i>q</i><sub>0</sub><i>ω</i><sub>0</sub>. The minus sign simply says the capacitor is discharging as the current grows — charge and current are a quarter-cycle out of step, exactly as displacement and velocity are in SHM.',
      },
      { t: 'p', html: '<b>3.2 Energy exchange and its conservation</b>' },
      {
        t: 'p',
        html: 'At any instant the total energy is the sum of the capacitor and inductor energies:<br><i>U</i> = <i>q</i><sup>2</sup>/(2<i>C</i>) + ½<i>Li</i><sup>2</sup> = (<i>q</i><sub>0</sub><sup>2</sup> cos<sup>2</sup> <i>ω</i><sub>0</sub><i>t</i>)/(2<i>C</i>) + ½<i>L</i> <i>q</i><sub>0</sub><sup>2</sup><i>ω</i><sub>0</sub><sup>2</sup> sin<sup>2</sup> <i>ω</i><sub>0</sub><i>t</i>',
      },
      {
        t: 'p',
        html: 'Substitute <i>ω</i><sub>0</sub><sup>2</sup> = 1/(<i>LC</i>), so <i>Lq</i><sub>0</sub><sup>2</sup><i>ω</i><sub>0</sub><sup>2</sup> = <i>Lq</i><sub>0</sub><sup>2</sup>/(<i>LC</i>) = <i>q</i><sub>0</sub><sup>2</sup>/<i>C</i>:<br><i>U</i> = (<i>q</i><sub>0</sub><sup>2</sup>/(2<i>C</i>)) cos<sup>2</sup> <i>ω</i><sub>0</sub><i>t</i> + (<i>q</i><sub>0</sub><sup>2</sup>/(2<i>C</i>)) sin<sup>2</sup> <i>ω</i><sub>0</sub><i>t</i> = (<i>q</i><sub>0</sub><sup>2</sup>/(2<i>C</i>))(cos<sup>2</sup> <i>ω</i><sub>0</sub><i>t</i> + sin<sup>2</sup> <i>ω</i><sub>0</sub><i>t</i>) = <i>q</i><sub>0</sub><sup>2</sup>/(2<i>C</i>)',
      },
      {
        t: 'p',
        html: 'The total is <b>constant</b> — independent of time. The energy merely migrates: it is entirely electric when <i>q</i> = <i>q</i><sub>0</sub> (current zero) and entirely magnetic when <i>i</i> = <i>i</i><sub>max</sub> (charge zero). Note that each energy term contains cos<sup>2</sup> or sin<sup>2</sup>, which complete a full cycle twice per period — so the <b>energy oscillates at twice the frequency</b> of the charge, 2<i>f</i><sub>0</sub>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level — Frequency and period',
        q: 'An ideal LC circuit has <i>L</i> = 20 mH and <i>C</i> = 50 μF. Find the natural angular frequency, the frequency, and the time period of oscillation.',
        steps: [
          '<b>Given:</b> <i>L</i> = 20 × 10<sup>−3</sup> H, <i>C</i> = 50 × 10<sup>−6</sup> F.',
          '<i>ω</i><sub>0</sub> = 1/√(<i>LC</i>) = 1/√((20 × 10<sup>−3</sup>)(50 × 10<sup>−6</sup>)) = 1/√(1.0 × 10<sup>−6</sup>) = 1/(1.0 × 10<sup>−3</sup>)',
          '<i>f</i><sub>0</sub> = <i>ω</i><sub>0</sub>/(2π) = 1000/6.283, <i>T</i> = 1/<i>f</i><sub>0</sub> = 6.28 × 10<sup>−3</sup> s',
        ],
        ans: '<i>ω</i><sub>0</sub> = 1000 rad s<sup>−1</sup>, <i>f</i><sub>0</sub> = 159 Hz, <i>T</i> = 6.28 ms.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap — When is the energy shared equally?',
        q: 'In an ideal LC circuit the capacitor starts fully charged. After what fraction of the period is the energy equally shared between the capacitor and the inductor?',
        steps: [
          '<b>The trap:</b> guessing <i>T</i>/4 (the time for full transfer) or <i>T</i>/2.',
          '<b>Fast reasoning:</b> equal sharing means <i>U</i><sub>C</sub> = ½<i>U</i><sub>total</sub>, i.e. <i>q</i><sup>2</sup>/(2<i>C</i>) = ½ · <i>q</i><sub>0</sub><sup>2</sup>/(2<i>C</i>), so <i>q</i> = <i>q</i><sub>0</sub>/√2. With <i>q</i> = <i>q</i><sub>0</sub> cos <i>ω</i><sub>0</sub><i>t</i>, this needs cos <i>ω</i><sub>0</sub><i>t</i> = 1/√2, i.e. <i>ω</i><sub>0</sub><i>t</i> = π/4.',
          '(Energy is fully transferred at <i>T</i>/4; it is equally split halfway there, at <i>T</i>/8 — the same <i>A</i>/√2 instant as in SHM.)',
        ],
        ans: '<i>t</i> = <i>T</i>/8.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Maximum current from an initial charge',
        q: 'An 8 μF capacitor is charged to 100 V and then connected across a 2 mH ideal inductor. Find the maximum current in the circuit.',
        steps: [
          '<b>Method (energy conservation — cleanest).</b> All the capacitor’s electric energy becomes magnetic energy at peak current:<br>½<i>CV</i><sub>0</sub><sup>2</sup> = ½<i>Li</i><sub>max</sub><sup>2</sup> ⇒ <i>i</i><sub>max</sub> = <i>V</i><sub>0</sub>√(<i>C</i>/<i>L</i>) = 100√((8 × 10<sup>−6</sup>)/(2 × 10<sup>−3</sup>))<br><i>i</i><sub>max</sub> = 100√(4 × 10<sup>−3</sup>) = 100 × 0.0632',
          '<b>Cross-check (via <i>ω</i><sub>0</sub>).</b> <i>q</i><sub>0</sub> = <i>CV</i><sub>0</sub> = 8 × 10<sup>−6</sup> × 100 = 8 × 10<sup>−4</sup> C; <i>ω</i><sub>0</sub> = 1/√(<i>LC</i>) = 1/√(1.6 × 10<sup>−8</sup>) = 7906 rad s<sup>−1</sup>; <i>i</i><sub>max</sub> = <i>q</i><sub>0</sub><i>ω</i><sub>0</sub> = 8 × 10<sup>−4</sup> × 7906 = 6.32 A. ✓',
        ],
        ans: '<i>i</i><sub>max</sub> = 6.32 A.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Current when the charge is half its maximum',
        q: 'In an ideal LC circuit (initial charge <i>q</i><sub>0</sub>, natural frequency <i>ω</i><sub>0</sub>), find the current at the instant the capacitor’s charge has fallen to <i>q</i><sub>0</sub>/2. Express the answer as a fraction of <i>i</i><sub>max</sub>.',
        steps: [
          '<b>Reasoning by energy conservation.</b> Total energy <i>U</i><sub>total</sub> = <i>q</i><sub>0</sub><sup>2</sup>/(2<i>C</i>). At <i>q</i> = <i>q</i><sub>0</sub>/2, the capacitor holds:<br><i>U</i><sub>C</sub> = (<i>q</i><sub>0</sub>/2)<sup>2</sup>/(2<i>C</i>) = <i>q</i><sub>0</sub><sup>2</sup>/(8<i>C</i>) = ¼<i>U</i><sub>total</sub><br>so the inductor holds the remaining three-quarters:<br>½<i>Li</i><sup>2</sup> = <i>U</i><sub>total</sub> − <i>U</i><sub>C</sub> = <i>q</i><sub>0</sub><sup>2</sup>/(2<i>C</i>) − <i>q</i><sub>0</sub><sup>2</sup>/(8<i>C</i>) = 3<i>q</i><sub>0</sub><sup>2</sup>/(8<i>C</i>)',
          'Solve for <i>i</i>, using 1/(<i>LC</i>) = <i>ω</i><sub>0</sub><sup>2</sup>:<br><i>i</i><sup>2</sup> = 3<i>q</i><sub>0</sub><sup>2</sup>/(4<i>LC</i>) = ¾<i>q</i><sub>0</sub><sup>2</sup><i>ω</i><sub>0</sub><sup>2</sup> ⇒ <i>i</i> = (√3/2)<i>q</i><sub>0</sub><i>ω</i><sub>0</sub>',
          'This is the exact mirror of SHM, where a particle at displacement <i>x</i> = <i>A</i>/2 moves at <i>v</i> = (√3/2)<i>v</i><sub>max</sub> — the energy analogy made literal.',
        ],
        ans: '<i>i</i> = (√3/2)<i>i</i><sub>max</sub> ≈ 0.87 <i>i</i><sub>max</sub>.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] An LC circuit has <i>L</i> = 0.5 H and <i>C</i> = 2 μF. Find its frequency of oscillation.',
            a: '<i>f</i><sub>0</sub> = 1/(2π√(<i>LC</i>)) = 1/(2π√(0.5 × 2 × 10<sup>−6</sup>)) = 159 Hz.',
          },
          {
            q: '[NEET] In an ideal LC circuit, at what instant (as a fraction of the period, starting from a fully charged capacitor) is the energy stored entirely in the inductor?',
            a: '<i>t</i> = <i>T</i>/4 (capacitor fully discharged, current maximum).',
          },
          {
            q: '[JEE Main] A 5 μF capacitor charged to 20 V is connected to a 20 mH ideal inductor. Find (i) the maximum current and (ii) the total energy of the circuit.',
            a: '<i>i</i><sub>max</sub> = <i>V</i><sub>0</sub>√(<i>C</i>/<i>L</i>) = 20√((5 × 10<sup>−6</sup>)/(20 × 10<sup>−3</sup>)) = 20√(2.5 × 10<sup>−4</sup>) = 20 × 0.0158 = 0.316 A; total energy = ½<i>CV</i><sub>0</sub><sup>2</sup> = ½(5 × 10<sup>−6</sup>)(400) = 1.0 × 10<sup>−3</sup> J = 1.0 mJ.',
          },
          {
            q: '[JEE Main] An LC circuit oscillates at 1000 Hz. If the inductance is 10 mH, find the capacitance.',
            a: '<i>C</i> = 1/(4π<sup>2</sup><i>f</i><sub>0</sub><sup>2</sup><i>L</i>) = 1/(4π<sup>2</sup> × 10<sup>6</sup> × 10<sup>−2</sup>) = 2.53 × 10<sup>−6</sup> F ≈ 2.5 μF.',
          },
          {
            q: '[JEE Advanced] In an ideal LC circuit with peak current <i>i</i><sub>max</sub>, find the charge on the capacitor (as a fraction of <i>q</i><sub>0</sub>) at the instant the current equals <i>i</i><sub>max</sub>/2.',
            a: 'When <i>i</i> = <i>i</i><sub>max</sub>/2, <i>U</i><sub>L</sub> = ¼<i>U</i><sub>total</sub>, so <i>U</i><sub>C</sub> = ¾<i>U</i><sub>total</sub> ⇒ <i>q</i> = (√3/2)<i>q</i><sub>0</sub> ≈ 0.87 <i>q</i><sub>0</sub>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The frequency of oscillation of an ideal LC circuit is:',
        opts: [
          { label: '1/(2π√(<i>LC</i>))', nudge: null },
          { label: '1/√(<i>LC</i>)', nudge: '<b>(B)</b> trap: that’s the angular frequency <i>ω</i><sub>0</sub>, not <i>f</i><sub>0</sub>.' },
          { label: '2π√(<i>LC</i>)', nudge: '<b>(C)</b> trap: that’s the time period <i>T</i>.' },
          { label: '1/(2π<i>LC</i>)', nudge: '<b>(D)</b> trap: dropping the square root over <i>LC</i>.' },
        ],
        correct: 0,
        solution: '<i>f</i><sub>0</sub> = <i>ω</i><sub>0</sub>/(2π) = 1/(2π√(<i>LC</i>)).',
      },
      {
        t: 'mcq',
        q: 'In an ideal LC circuit, the energy oscillates between the capacitor and inductor with a frequency:',
        opts: [
          { label: '<i>f</i><sub>0</sub>', nudge: '<b>(A)</b> trap: assuming energy and charge share the same frequency.' },
          { label: '2<i>f</i><sub>0</sub>', nudge: null },
          { label: '<i>f</i><sub>0</sub>/2', nudge: '<b>(C)</b>/<b>(D)</b> traps: misremembering the factor.' },
          { label: '4<i>f</i><sub>0</sub>', nudge: '<b>(C)</b>/<b>(D)</b> traps: misremembering the factor.' },
        ],
        correct: 1,
        solution: 'Each energy term carries cos<sup>2</sup> or sin<sup>2</sup>, which repeats twice per charge cycle, so the energy oscillates at 2<i>f</i><sub>0</sub>.',
      },
      {
        t: 'mcq',
        q: 'A capacitor of charge <i>q</i><sub>0</sub> is connected across an inductor <i>L</i>. The maximum current is:',
        opts: [
          {
            label: '<i>q</i><sub>0</sub>√(<i>LC</i>)',
            nudge: '<b>(A)</b> trap: multiplying by √(<i>LC</i>) instead of dividing (that’s <i>q</i><sub>0</sub>/<i>ω</i><sub>0</sub>).',
          },
          { label: '<i>q</i><sub>0</sub>/√(<i>LC</i>)', nudge: null },
          { label: '<i>q</i><sub>0</sub>/(<i>LC</i>)', nudge: '<b>(C)</b>/<b>(D)</b> traps: wrong powers of <i>LC</i>.' },
          { label: '<i>q</i><sub>0</sub><i>LC</i>', nudge: '<b>(C)</b>/<b>(D)</b> traps: wrong powers of <i>LC</i>.' },
        ],
        correct: 1,
        solution: '<i>i</i><sub>max</sub> = <i>q</i><sub>0</sub><i>ω</i><sub>0</sub> = <i>q</i><sub>0</sub>/√(<i>LC</i>).',
      },
      {
        t: 'mcq',
        q: 'In the LC–SHM analogy, the inductance <i>L</i> plays the role of:',
        opts: [
          { label: 'the spring constant', nudge: '<b>(A)</b> trap: the spring constant corresponds to 1/<i>C</i>, not <i>L</i>.' },
          {
            label: 'the displacement',
            nudge: '<b>(B)</b>/<b>(D)</b> traps: displacement ↔ <i>q</i> and velocity ↔ <i>i</i> are variables, not the inductance.',
          },
          { label: 'the mass', nudge: null },
          {
            label: 'the velocity',
            nudge: '<b>(B)</b>/<b>(D)</b> traps: displacement ↔ <i>q</i> and velocity ↔ <i>i</i> are variables, not the inductance.',
          },
        ],
        correct: 2,
        solution: '<i>L</i> opposes changes in current just as mass opposes changes in velocity — <i>L</i> ↔ <i>m</i> (and 1/<i>C</i> ↔ <i>k</i>).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing <i>ω</i><sub>0</sub> and <i>f</i><sub>0</sub>.</b> <i>ω</i><sub>0</sub> = 1/√(<i>LC</i>) is the angular frequency; the ordinary frequency is <i>f</i><sub>0</sub> = <i>ω</i><sub>0</sub>/(2π). Check whether the question wants rad s<sup>−1</sup> or Hz.',
          '<b>Getting <i>i</i><sub>max</sub> wrong.</b> It is <i>i</i><sub>max</sub> = <i>q</i><sub>0</sub><i>ω</i><sub>0</sub> = <i>q</i><sub>0</sub>/√(<i>LC</i>), not <i>q</i><sub>0</sub>/<i>C</i> (that would be the initial voltage). The energy route <i>i</i><sub>max</sub> = <i>V</i><sub>0</sub>√(<i>C</i>/<i>L</i>) is often safest.',
          '<b>Forgetting the energy oscillates at 2<i>f</i><sub>0</sub>.</b> The charge and current oscillate at <i>f</i><sub>0</sub>, but the energies (going as their squares) cycle twice as fast.',
          '<b>Treating an LC circuit as a power source.</b> It stores a fixed total energy and merely shuttles it back and forth; with any real resistance it slowly dies out. It generates nothing.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Lean on the SHM analogy for every LC problem. “Charge fully present, current zero” is the turning point (<i>x</i> = <i>A</i>); “charge zero, current maximum” is the centre (<i>x</i> = 0). Any SHM result you know — <i>v</i> = <i>ω</i>√(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>), energy fractions at <i>A</i>/2, time to reach <i>A</i>/√2 — translates instantly with <i>x</i> → <i>q</i>, <i>v</i> → <i>i</i>, <i>ω</i> → <i>ω</i><sub>0</sub>, <i>A</i> → <i>q</i><sub>0</sub>. Quick sanity check: <i>i</i><sub>max</sub> = <i>q</i><sub>0</sub><i>ω</i><sub>0</sub> must come out in amperes — if it doesn’t, you’ve mishandled a power of <i>LC</i>.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Natural frequency',
            note: '<i>ω</i><sub>0</sub> = 1/√(<i>LC</i>), <i>f</i><sub>0</sub> = 1/(2π√(<i>LC</i>)), <i>T</i> = 2π√(<i>LC</i>) (same <i>ω</i><sub>0</sub> as resonance).',
          },
          {
            f: 'Charge & current',
            note: '<i>q</i> = <i>q</i><sub>0</sub> cos <i>ω</i><sub>0</sub><i>t</i>, <i>i</i> = −<i>q</i><sub>0</sub><i>ω</i><sub>0</sub> sin <i>ω</i><sub>0</sub><i>t</i>, <i>i</i><sub>max</sub> = <i>q</i><sub>0</sub><i>ω</i><sub>0</sub> = <i>V</i><sub>0</sub>√(<i>C</i>/<i>L</i>).',
          },
          {
            f: 'Energy',
            note: '<i>U</i><sub>C</sub> = <i>q</i><sup>2</sup>/(2<i>C</i>), <i>U</i><sub>L</sub> = ½<i>Li</i><sup>2</sup>; total = <i>q</i><sub>0</sub><sup>2</sup>/(2<i>C</i>) = ½<i>Li</i><sub>max</sub><sup>2</sup> = constant (ideal).',
          },
          {
            f: 'Energy oscillates at 2<i>f</i><sub>0</sub>. Equal sharing at <i>t</i> = <i>T</i>/8; full transfer at <i>t</i> = <i>T</i>/4.',
            note: '',
          },
          {
            f: 'SHM analogy',
            note: '<i>q</i> ↔ <i>x</i>, <i>i</i> ↔ <i>v</i>, <i>L</i> ↔ <i>m</i>, 1/<i>C</i> ↔ <i>k</i>.',
          },
          {
            f: 'Ideal needs <i>R</i> = 0 for undamped oscillation; real circuits decay.',
            note: '',
          },
        ],
        aids: ['Mnemonic: “L is mass, one-over-C is the spring.”'],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 482–490 ─────────────────────────
  {
    n: '04',
    title: 'Resonance and Q-Factor',
    kalam: 'Resonance is a tug-of-war, and you need two opponents.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial favourite. JEE Main almost always carries a numerical on resonant frequency or Q-factor; NEET tests the resonance conditions as one-liner conceptual traps; JEE Advanced probes bandwidth, half-power frequencies, voltage magnification, and sharpness. CBSE Boards regularly ask for the derivation of <i>f</i><sub>0</sub> and a definition of Q-factor / sharpness of resonance (2–3 marks).',
      },
      {
        t: 'p',
        html: 'In Topic 02 we found that an inductor and a capacitor are opposites: the inductor’s reactance <i>X</i><sub>L</sub> = <i>ωL</i> grows with frequency, while the capacitor’s reactance <i>X</i><sub>C</sub> = 1/(<i>ωC</i>) shrinks with frequency. They also pull the current in opposite directions — the inductor makes voltage lead, the capacitor makes it lag. So somewhere in the middle there must be one special frequency where these two opposing tendencies exactly cancel. That frequency is the <b>resonant frequency</b>, and the dramatic things that happen there are the subject of this topic.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> remember pushing a child on a swing. Push at random moments and you fight the swing as often as you help it — it barely moves. But push at exactly the swing’s natural rhythm and tiny pushes build up into a huge arc. A series LCR circuit is the electrical version of that swing. The inductor and capacitor between them have a natural rhythm, <i>ω</i><sub>0</sub> = 1/√(<i>LC</i>). Drive the circuit at any other frequency and <i>X</i><sub>L</sub> and <i>X</i><sub>C</sub> disagree, the impedance is large, and only a small current flows. Drive it at exactly <i>ω</i><sub>0</sub> and the two reactances annihilate each other — the circuit suddenly forgets it has an inductor and a capacitor at all, behaves as if only <i>R</i> is present, and the current shoots up to its maximum value <i>i</i><sub>m</sub> = <i>v</i><sub>m</sub>/<i>R</i>.',
      },
      {
        t: 'p',
        html: 'This is the <b>same forced-oscillator resonance</b> you met in mechanics, and the same one we wrote down as the differential equation in Topic 02: <i>Lq̈</i> + <i>Rq̇</i> + <i>q</i>/<i>C</i> = <i>v</i><sub>m</sub> sin <i>ωt</i>. There, <i>R</i> played the role of damping. The lesson carries straight over: <b>damping (<i>R</i>) doesn’t change where the peak sits, only how tall and sharp it is.</b> A small <i>R</i> gives a tall, needle-sharp peak (a “selective” circuit that responds to a very narrow band of frequencies); a large <i>R</i> gives a low, broad hump. This is exactly why your phone or radio can pick one station out of dozens: an LCR circuit tuned so its <i>ω</i><sub>0</sub> matches the desired broadcast frequency lights up for that station and stays nearly dead for all the others. Turning the tuning knob physically changes <i>C</i> (or <i>L</i>), sliding <i>ω</i><sub>0</sub> from one station to the next.',
      },
      {
        t: 'p',
        html: 'A useful way to feel the sharpness is the <b>quality factor, Q</b>. Roughly, Q tells you how many times more “selective” and how much more “resonant” the circuit is — a high-Q circuit is a fussy, precise tuner; a low-Q circuit is a sloppy one. Q also has a startling consequence: at resonance, the voltage across the inductor (and across the capacitor) can be <b>Q times larger than the source voltage itself</b>. A 10 V source can produce 100 V across the coil if Q = 10. This is the same “<i>V</i><sub>L</sub> can exceed the source” surprise from Topic 02, now given a clean number.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• <b>You need both L and C.</b> A pure RL or RC circuit has no resonance — there’s nothing for the single reactance to cancel against. Resonance is a tug-of-war, and you need two opponents.<br>• <b>Resonant frequency is independent of R.</b> <i>R</i> controls sharpness and peak height, not the location of the peak.<br>• <b>Ideal LC (R → 0) is a fiction.</b> With zero resistance, impedance at resonance would be zero and current would blow up to infinity. Real circuits always have some resistance, so the current is large but finite.<br>• The symmetric approximation <i>ω</i><sub>1</sub>, <i>ω</i><sub>2</sub> ≈ <i>ω</i><sub>0</sub> ∓ Δ<i>ω</i>/2 assumes a reasonably <b>sharp</b> resonance (high Q); Δ<i>ω</i> = <i>R</i>/<i>L</i> and <i>ω</i><sub>1</sub><i>ω</i><sub>2</sub> = <i>ω</i><sub>0</sub><sup>2</sup> are exact for a series LCR circuit, but for very low Q the half-power frequencies are no longer cleanly symmetric about <i>ω</i><sub>0</sub>.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Resonance condition',
        main: '<i>X</i><sub>L</sub> = <i>X</i><sub>C</sub> ⇒ <i>ω</i><sub>0</sub><i>L</i> = 1/(<i>ω</i><sub>0</sub><i>C</i>)',
        legend: [],
        note: '(net reactance vanishes)',
      },
      {
        t: 'formula',
        kicker: 'Resonant angular frequency and frequency',
        main: '<i>ω</i><sub>0</sub> = 1/√(<i>LC</i>)<br><i>f</i><sub>0</sub> = 1/(2π√(<i>LC</i>))',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>At resonance:</b> <i>Z</i> = <i>R</i> (minimum), <i>i</i><sub>m</sub> = <i>v</i><sub>m</sub>/<i>R</i> (maximum), <i>φ</i> = 0 (voltage and current in phase), power factor cos <i>φ</i> = 1, circuit purely resistive.',
      },
      {
        t: 'formula',
        kicker: 'Quality factor (three equivalent forms)',
        main: '<i>Q</i> = <i>ω</i><sub>0</sub><i>L</i>/<i>R</i> = 1/(<i>ω</i><sub>0</sub><i>CR</i>) = (1/<i>R</i>)√(<i>L</i>/<i>C</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: '<i>Q</i> as bandwidth ratio',
        main: '<i>Q</i> = <i>ω</i><sub>0</sub>/Δ<i>ω</i> = <i>f</i><sub>0</sub>/Δ<i>f</i>',
        legend: [],
        note: '(sharpness of resonance)',
      },
      {
        t: 'formula',
        kicker: 'Bandwidth',
        main: 'Δ<i>ω</i> = <i>ω</i><sub>2</sub> − <i>ω</i><sub>1</sub> = <i>R</i>/<i>L</i>',
        legend: [],
        note: '(half-power width, series LCR)',
      },
      {
        t: 'formula',
        kicker: 'Half-power frequencies',
        main: '|<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>| = <i>R</i> at <i>ω</i><sub>1</sub> and <i>ω</i><sub>2</sub><br>Geometric mean: <i>ω</i><sub>1</sub><i>ω</i><sub>2</sub> = <i>ω</i><sub>0</sub><sup>2</sup> ⇒ <i>ω</i><sub>0</sub> = √(<i>ω</i><sub>1</sub><i>ω</i><sub>2</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Voltage magnification at resonance',
        main: '<i>V</i><sub>L</sub> = <i>V</i><sub>C</sub> = <i>Q</i> <i>V</i><sub>source</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Symbol', 'SI Unit', 'Dimensional Formula'],
        rows: [
          ['Resonant frequency', '<i>f</i><sub>0</sub>', 'hertz (Hz)', '[T<sup>−1</sup>]'],
          ['Resonant angular frequency', '<i>ω</i><sub>0</sub>', 'rad s<sup>−1</sup>', '[T<sup>−1</sup>]'],
          ['Bandwidth', 'Δ<i>ω</i>', 'rad s<sup>−1</sup>', '[T<sup>−1</sup>]'],
          ['Quality factor', '<i>Q</i>', 'dimensionless', '[M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]'],
        ],
      },
      {
        t: 'p',
        html: '<b>Variables:</b> <i>ω</i><sub>0</sub> = resonant angular frequency; <i>L</i> = inductance; <i>C</i> = capacitance; <i>R</i> = resistance; <i>Q</i> = quality factor; Δ<i>ω</i> = bandwidth; <i>ω</i><sub>1</sub>, <i>ω</i><sub>2</sub> = lower and upper half-power angular frequencies.',
      },

      { t: 'part', title: 'CBSE board derivations' },
      { t: 'p', html: '<b>3.1 Resonant frequency</b>' },
      {
        t: 'p',
        html: 'In a series LCR circuit the current amplitude is <i>i</i><sub>m</sub> = <i>v</i><sub>m</sub>/<i>Z</i> = <i>v</i><sub>m</sub>/√(<i>R</i><sup>2</sup> + (<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>)<sup>2</sup>). For a fixed source amplitude <i>v</i><sub>m</sub>, this current is <b>largest when the denominator is smallest</b> — and since <i>R</i> is fixed, the denominator is smallest when the reactive part vanishes:<br><i>X</i><sub>L</sub> − <i>X</i><sub>C</sub> = 0 ⇒ <i>ω</i><sub>0</sub><i>L</i> = 1/(<i>ω</i><sub>0</sub><i>C</i>)',
      },
      {
        t: 'p',
        html: 'Solving for <i>ω</i><sub>0</sub>:<br><i>ω</i><sub>0</sub><sup>2</sup> = 1/(<i>LC</i>) ⇒ <i>ω</i><sub>0</sub> = 1/√(<i>LC</i>), <i>f</i><sub>0</sub> = 1/(2π√(<i>LC</i>))',
      },
      {
        t: 'p',
        html: 'Notice <i>R</i> never appears — <b>the resonant frequency depends only on <i>L</i> and <i>C</i>.</b> Physically, <i>ω</i><sub>0</sub> is the natural frequency at which energy sloshes back and forth between the inductor’s magnetic field and the capacitor’s electric field; the resistor only drains that energy, it doesn’t set its rhythm.',
      },
      { t: 'p', html: '<b>3.2 Quality factor and its physical meanings</b>' },
      {
        t: 'p',
        html: 'We define <i>Q</i> as the ratio of the resonant frequency to the bandwidth, <i>Q</i> = <i>ω</i><sub>0</sub>/Δ<i>ω</i>. Using Δ<i>ω</i> = <i>R</i>/<i>L</i> (derived in 3.3):<br><i>Q</i> = <i>ω</i><sub>0</sub>/(<i>R</i>/<i>L</i>) = <i>ω</i><sub>0</sub><i>L</i>/<i>R</i>',
      },
      {
        t: 'p',
        html: 'Because <i>ω</i><sub>0</sub><i>L</i> = 1/(<i>ω</i><sub>0</sub><i>C</i>) at resonance, we may rewrite this as <i>Q</i> = 1/(<i>ω</i><sub>0</sub><i>CR</i>). Substituting <i>ω</i><sub>0</sub> = 1/√(<i>LC</i>) into <i>ω</i><sub>0</sub><i>L</i>/<i>R</i> gives the third form:<br><i>Q</i> = <i>ω</i><sub>0</sub><i>L</i>/<i>R</i> = (<i>L</i>/<i>R</i>) · 1/√(<i>LC</i>) = (1/<i>R</i>)√(<i>L</i>/<i>C</i>)',
      },
      {
        t: 'p',
        html: '<b>Q as voltage magnification.</b> At resonance the current is <i>i</i><sub>m</sub> = <i>v</i><sub>m</sub>/<i>R</i>. The voltage amplitude across the inductor is:<br><i>V</i><sub>L</sub> = <i>i</i><sub>m</sub><i>X</i><sub>L</sub> = (<i>v</i><sub>m</sub>/<i>R</i>) <i>ω</i><sub>0</sub><i>L</i> = <i>v</i><sub>m</sub> · <i>ω</i><sub>0</sub><i>L</i>/<i>R</i> = <i>Q</i> <i>v</i><sub>m</sub><br>So <i>Q</i> is literally the factor by which the source voltage is amplified across the inductor (and equally across the capacitor). This is why high-Q circuits must be built with components rated for far higher voltages than the supply.',
      },
      { t: 'p', html: '<b>3.3 Bandwidth and half-power frequencies</b>' },
      {
        t: 'p',
        html: 'The <b>half-power frequencies</b> <i>ω</i><sub>1</sub> and <i>ω</i><sub>2</sub> are the frequencies on either side of <i>ω</i><sub>0</sub> where the average power drops to half its peak value. Since average power ∝ <i>i</i><sub>rms</sub><sup>2</sup>, half power means the current has fallen to <i>i</i><sub>max</sub>/√2, which in turn means the impedance has risen to √2 <i>R</i>:<br><i>Z</i> = √(<i>R</i><sup>2</sup> + (<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>)<sup>2</sup>) = √2 <i>R</i> ⇒ (<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>)<sup>2</sup> = <i>R</i><sup>2</sup> ⇒ |<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>| = <i>R</i>',
      },
      { t: 'fig', id: 'p12-07-fig-7.2' },
      {
        t: 'p',
        html: 'So at each half-power frequency, |<i>ωL</i> − 1/(<i>ωC</i>)| = <i>R</i>. Writing this for the upper frequency <i>ω</i><sub>2</sub> (where <i>X</i><sub>L</sub> > <i>X</i><sub>C</sub>) and the lower frequency <i>ω</i><sub>1</sub> (where <i>X</i><sub>C</sub> > <i>X</i><sub>L</sub>) and solving the resulting quadratics gives:<br><i>ω</i><sub>2</sub> = <i>R</i>/(2<i>L</i>) + √((<i>R</i>/(2<i>L</i>))<sup>2</sup> + 1/(<i>LC</i>)), <i>ω</i><sub>1</sub> = −<i>R</i>/(2<i>L</i>) + √((<i>R</i>/(2<i>L</i>))<sup>2</sup> + 1/(<i>LC</i>))',
      },
      {
        t: 'p',
        html: 'Subtracting gives the clean result for <b>bandwidth</b>:<br>Δ<i>ω</i> = <i>ω</i><sub>2</sub> − <i>ω</i><sub>1</sub> = <i>R</i>/<i>L</i><br>and multiplying the two roots gives <i>ω</i><sub>1</sub><i>ω</i><sub>2</sub> = 1/(<i>LC</i>) = <i>ω</i><sub>0</sub><sup>2</sup>, so <i>ω</i><sub>0</sub> is the <b>geometric mean</b> of the half-power frequencies. (This is exactly the symmetric-pair-about-resonance fact used in Topic 02’s practice set.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level — Tuning the basics',
        q: 'A series LCR circuit has <i>L</i> = 2.0 H, <i>C</i> = 8.0 μF, and <i>R</i> = 40 Ω, connected to an AC source of rms voltage 20 V. Find (a) the resonant angular frequency, (b) the impedance at resonance, (c) the rms current at resonance, and (d) the Q-factor.',
        steps: [
          '<b>Given:</b> <i>L</i> = 2.0 H, <i>C</i> = 8.0 × 10<sup>−6</sup> F, <i>R</i> = 40 Ω, <i>V</i><sub>rms</sub> = 20 V.',
          '<b>(a)</b> Resonant angular frequency:<br><i>ω</i><sub>0</sub> = 1/√(<i>LC</i>) = 1/√(2.0 × 8.0 × 10<sup>−6</sup>) = 1/√(1.6 × 10<sup>−5</sup>) = 1/(4.0 × 10<sup>−3</sup>)',
          '<b>(b)</b> At resonance the reactances cancel, so <i>Z</i> = <i>R</i>.',
          '<b>(c)</b> rms current at resonance:<br><i>I</i><sub>rms</sub> = <i>V</i><sub>rms</sub>/<i>R</i> = 20/40',
          '<b>(d)</b> Q-factor:<br><i>Q</i> = <i>ω</i><sub>0</sub><i>L</i>/<i>R</i> = (250 × 2.0)/40',
        ],
        ans: '<i>ω</i><sub>0</sub> = 250 rad s<sup>−1</sup>, <i>Z</i> = 40 Ω, <i>I</i><sub>rms</sub> = 0.50 A, <i>Q</i> = 12.5.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap — Read the resonance, don’t compute it',
        q: 'A series LCR circuit at resonance is driven by a 25 V (rms) source. A voltmeter reads 200 V across the inductor. What is (a) the Q-factor and (b) the reading across the capacitor?',
        steps: [
          '<b>The trap:</b> students reach for <i>Z</i>, <i>X</i><sub>L</sub>, <i>ω</i><sub>0</sub> — none of which they’ve been given — and stall.',
          '<b>Fast correct method:</b> at resonance, voltage magnification gives <i>V</i><sub>L</sub> = <i>Q</i> <i>V</i><sub>source</sub> directly:<br><i>Q</i> = <i>V</i><sub>L</sub>/<i>V</i><sub>source</sub> = 200/25',
          'And since <i>V</i><sub>C</sub> = <i>V</i><sub>L</sub> at resonance (they cancel as phasors), the capacitor also reads <b>200</b> V.',
          'The whole problem is one division — if you remember that at resonance <i>V</i><sub>L</sub> = <i>V</i><sub>C</sub> = <i>Q</i> <i>V</i><sub>source</sub> and that the source voltage equals <i>V</i><sub>R</sub> alone.',
        ],
        ans: '<i>Q</i> = 8, <i>V</i><sub>C</sub> = 200 V.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Bandwidth and the half-power band',
        q: 'A series LCR circuit has <i>R</i> = 10 Ω, <i>L</i> = 0.10 H, and <i>C</i> = 10 μF. Find (a) the resonant angular frequency, (b) the Q-factor, (c) the bandwidth, and (d) the two half-power frequencies.',
        steps: [
          '<b>Step 1 — (a) resonant frequency:</b><br><i>ω</i><sub>0</sub> = 1/√(<i>LC</i>) = 1/√(0.10 × 10 × 10<sup>−6</sup>) = 1/√(1.0 × 10<sup>−6</sup>) = 1/(1.0 × 10<sup>−3</sup>)',
          '<b>Step 2 — (b) Q-factor:</b><br><i>Q</i> = <i>ω</i><sub>0</sub><i>L</i>/<i>R</i> = (1000 × 0.10)/10',
          '<b>Step 3 — (c) bandwidth:</b><br>Δ<i>ω</i> = <i>R</i>/<i>L</i> = 10/0.10 = 100 rad s<sup>−1</sup><br>(Cross-check: <i>Q</i> = <i>ω</i><sub>0</sub>/Δ<i>ω</i> = 1000/100 = 10. ✓)',
          '<b>Step 4 — (d) half-power frequencies.</b> Because <i>Q</i> = 10 is comfortably large, the resonance is sharp and the half-power points sit almost symmetrically about <i>ω</i><sub>0</sub>:<br><i>ω</i><sub>1</sub> ≈ <i>ω</i><sub>0</sub> − Δ<i>ω</i>/2 = 1000 − 50 = 950 rad s<sup>−1</sup>, <i>ω</i><sub>2</sub> ≈ <i>ω</i><sub>0</sub> + Δ<i>ω</i>/2 = 1050 rad s<sup>−1</sup>',
          '(The exact roots are 951.2 and 1051.2 rad s<sup>−1</sup>; the symmetric approximation is excellent for high Q. Note √(951.2 × 1051.2) ≈ 1000 = <i>ω</i><sub>0</sub>, confirming the geometric-mean property.)',
        ],
        ans: '<i>ω</i><sub>0</sub> = 1000 rad s<sup>−1</sup>, <i>Q</i> = 10, Δ<i>ω</i> = 100 rad s<sup>−1</sup>, half-power frequencies ≈ 950 and 1050 rad s<sup>−1</sup>.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Sharpening the resonance two ways',
        q: 'A series LCR circuit has <i>L</i> = 4.0 H, <i>C</i> = 10 μF, and <i>R</i> = 50 Ω. (a) Find <i>ω</i><sub>0</sub> and <i>Q</i>. (b) You must make the resonance <b>twice as sharp</b> (halve the bandwidth) without shifting the resonant frequency. Find two physically distinct ways to do this and the resulting Q.',
        steps: [
          '<b>(a)</b> Resonant frequency and Q:<br><i>ω</i><sub>0</sub> = 1/√(<i>LC</i>) = 1/√(4.0 × 10 × 10<sup>−6</sup>) = 1/√(4.0 × 10<sup>−5</sup>) = 158.1 rad s<sup>−1</sup><br><i>Q</i> = (1/<i>R</i>)√(<i>L</i>/<i>C</i>) = (1/50)√(4.0/(10 × 10<sup>−6</sup>)) = (1/50)√(4.0 × 10<sup>5</sup>) = 632.5/50 = 12.65<br>Current bandwidth: Δ<i>ω</i> = <i>R</i>/<i>L</i> = 50/4.0 = 12.5 rad s<sup>−1</sup>.',
          '<b>(b) The constraints.</b> We need Δ<i>ω</i> halved (so <i>Q</i> doubled), while <i>ω</i><sub>0</sub> = 1/√(<i>LC</i>) stays fixed (so the product <i>LC</i> must not change). Look at the two faces of <i>Q</i>:<br><i>Q</i> = <i>ω</i><sub>0</sub><i>L</i>/<i>R</i> and <i>Q</i> = (1/<i>R</i>)√(<i>L</i>/<i>C</i>)',
          '<b>Route 1 — reduce the resistance.</b> Halve <i>R</i> to 25 Ω. Then <i>ω</i><sub>0</sub> is untouched (it never depended on <i>R</i>), bandwidth Δ<i>ω</i> = <i>R</i>/<i>L</i> = 25/4.0 = 6.25 rad s<sup>−1</sup> is halved, and <i>Q</i> doubles to <b>25.3</b>. This is the simplest fix and the one a circuit designer reaches for first.',
          '<b>Route 2 — reshape L and C, keeping <i>LC</i> constant.</b> Keep <i>R</i> = 50 Ω, but <b>double</b> <i>L</i> <b>to 8.0 H and halve</b> <i>C</i> <b>to 5.0 μF</b>. Then <i>LC</i> = 8.0 × 5.0 × 10<sup>−6</sup> = 4.0 × 10<sup>−5</sup> — unchanged, so <i>ω</i><sub>0</sub> is preserved. But <i>Q</i> = (1/<i>R</i>)√(<i>L</i>/<i>C</i>) now uses an <i>L</i>/<i>C</i> ratio that is 4× larger, so √(<i>L</i>/<i>C</i>) doubles and <i>Q</i> → <b>25.3</b>, with Δ<i>ω</i> = <i>R</i>/<i>L</i> = 50/8.0 = 6.25 rad s<sup>−1</sup>.',
          '<b>The deeper point:</b> sharpness is governed by the ratio (1/<i>R</i>)√(<i>L</i>/<i>C</i>), and there is more than one knob to turn — but only the <i>LC</i> product fixes where the peak sits.',
        ],
        ans: 'Either (1) halve <i>R</i> to 25 Ω, or (2) hold <i>R</i> fixed while doubling <i>L</i> and halving <i>C</i>. Both keep <i>ω</i><sub>0</sub> = 158.1 rad s<sup>−1</sup> fixed and raise <i>Q</i> from 12.65 to ≈ 25.3.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A series LCR circuit has <i>L</i> = 5.0 H, <i>C</i> = 20 μF, and <i>R</i> = 100 Ω. Find the resonant frequency <i>f</i><sub>0</sub> and the Q-factor.',
            a: '<i>f</i><sub>0</sub> = 1/(2π√(<i>LC</i>)) = 15.9 Hz; <i>Q</i> = (1/<i>R</i>)√(<i>L</i>/<i>C</i>) = (1/100)√(5/(20 × 10<sup>−6</sup>)) = 5.0.',
          },
          {
            q: '[NEET] A series LCR circuit at resonance has a source voltage of 15 V (rms) and Q-factor 6. What is the rms voltage across the capacitor at resonance?',
            a: '<i>V</i><sub>C</sub> = <i>QV</i> = 6 × 15 = 90 V.',
          },
          {
            q: '[JEE Main] A series LCR circuit has <i>R</i> = 20 Ω, <i>L</i> = 0.20 H, <i>C</i> = 50 μF. Compute the resonant angular frequency, the bandwidth, and the Q-factor.',
            a: '<i>ω</i><sub>0</sub> = 1/√(0.2 × 50 × 10<sup>−6</sup>) = 316 rad s<sup>−1</sup>; Δ<i>ω</i> = <i>R</i>/<i>L</i> = 100 rad s<sup>−1</sup>; <i>Q</i> = <i>ω</i><sub>0</sub>/Δ<i>ω</i> = 3.16.',
          },
          {
            q: '[JEE Main] At resonance, a series LCR circuit draws an rms current of 3.0 A from a 60 V (rms) source. The inductance is 0.50 H. Find <i>R</i> and the resonant angular frequency given <i>C</i> = 8.0 μF.',
            a: '<i>R</i> = <i>V</i>/<i>I</i> = 60/3 = 20 Ω; <i>ω</i><sub>0</sub> = 1/√(<i>LC</i>) = 1/√(0.5 × 8 × 10<sup>−6</sup>) = 500 rad s<sup>−1</sup>.',
          },
          {
            q: '[JEE Advanced] The half-power frequencies of a series LCR circuit are measured as <i>ω</i><sub>1</sub> = 480 rad s<sup>−1</sup> and <i>ω</i><sub>2</sub> = 520 rad s<sup>−1</sup>. The resistance is 8.0 Ω. Find (a) the resonant angular frequency, (b) the Q-factor, (c) the inductance <i>L</i>, and (d) the capacitance <i>C</i>.',
            a: '<i>ω</i><sub>0</sub> = √(<i>ω</i><sub>1</sub><i>ω</i><sub>2</sub>) = √(480 × 520) ≈ 499.6 rad s<sup>−1</sup>; Δ<i>ω</i> = 40 rad s<sup>−1</sup>, so <i>Q</i> = <i>ω</i><sub>0</sub>/Δ<i>ω</i> ≈ 12.5; <i>L</i> = <i>R</i>/Δ<i>ω</i> = 8/40 = 0.20 H; <i>C</i> = 1/(<i>ω</i><sub>0</sub><sup>2</sup><i>L</i>) = 1/(499.6<sup>2</sup> × 0.20) ≈ 2.0 × 10<sup>−5</sup> F = 20 μF.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In a series LCR circuit, the resistance <i>R</i> is doubled while <i>L</i> and <i>C</i> are unchanged. The resonant frequency:',
        opts: [
          {
            label: 'doubles',
            nudge: '<b>(A)</b>/<b>(B)</b>/<b>(D)</b> traps: assuming <i>R</i> enters <i>ω</i><sub>0</sub> because it appears in impedance — it does not. These are the classic “<i>R</i> affects everything” reflex errors.',
          },
          {
            label: 'halves',
            nudge: '<b>(A)</b>/<b>(B)</b>/<b>(D)</b> traps: assuming <i>R</i> enters <i>ω</i><sub>0</sub> because it appears in impedance — it does not. These are the classic “<i>R</i> affects everything” reflex errors.',
          },
          { label: 'is unchanged', nudge: null },
          {
            label: 'becomes one-fourth',
            nudge: '<b>(A)</b>/<b>(B)</b>/<b>(D)</b> traps: assuming <i>R</i> enters <i>ω</i><sub>0</sub> because it appears in impedance — it does not. These are the classic “<i>R</i> affects everything” reflex errors.',
          },
        ],
        correct: 2,
        solution: '<i>ω</i><sub>0</sub> = 1/√(<i>LC</i>) has no <i>R</i> in it. Changing <i>R</i> alters the sharpness and peak current, never the resonant frequency.',
      },
      {
        t: 'mcq',
        q: 'A series LCR circuit is at resonance. Which one of the following is <b>false</b>?',
        opts: [
          { label: 'The current is maximum', nudge: '<b>(A)</b>, <b>(B)</b>, <b>(C)</b> are all true at resonance, making <b>(D)</b> the odd one out.' },
          { label: 'The power factor is unity', nudge: '<b>(A)</b>, <b>(B)</b>, <b>(C)</b> are all true at resonance, making <b>(D)</b> the odd one out.' },
          { label: 'The impedance equals <i>R</i>', nudge: '<b>(A)</b>, <b>(B)</b>, <b>(C)</b> are all true at resonance, making <b>(D)</b> the odd one out.' },
          { label: 'The voltage across the inductor is zero', nudge: null },
        ],
        correct: 3,
        solution: '<b>(D)</b> is the false statement. At resonance <i>V</i><sub>L</sub> is not zero — it equals <i>Q</i> <i>V</i><sub>source</sub> and can be very large. What is zero is the net reactive voltage <i>V</i><sub>L</sub> − <i>V</i><sub>C</sub>, because <i>V</i><sub>L</sub> and <i>V</i><sub>C</sub> cancel. <b>The trap:</b> students confuse “<i>V</i><sub>L</sub> − <i>V</i><sub>C</sub> = 0” with “<i>V</i><sub>L</sub> = 0.”',
      },
      {
        t: 'mcq',
        q: 'The Q-factor of a series LCR circuit is given by:',
        opts: [
          {
            label: '<i>R</i>/(<i>ω</i><sub>0</sub><i>L</i>)',
            nudge: '<b>(A)</b> trap: the reciprocal of the correct expression — a sign that the student inverted the ratio.',
          },
          { label: '<i>ω</i><sub>0</sub><i>L</i>/<i>R</i>', nudge: null },
          {
            label: '<i>ω</i><sub>0</sub><i>RC</i>',
            nudge: '<b>(C)</b> trap: <i>ω</i><sub>0</sub><i>RC</i> is the reciprocal of 1/(<i>ω</i><sub>0</sub><i>CR</i>), again inverted.',
          },
          { label: '<i>R</i>/<i>L</i>', nudge: '<b>(D)</b> trap: <i>R</i>/<i>L</i> is the bandwidth Δ<i>ω</i>, not Q.' },
        ],
        correct: 1,
        solution: '<i>Q</i> = <i>ω</i><sub>0</sub><i>L</i>/<i>R</i> = 1/(<i>ω</i><sub>0</sub><i>CR</i>) = (1/<i>R</i>)√(<i>L</i>/<i>C</i>).',
      },
      {
        t: 'mcq',
        q: 'For a series LCR circuit with resonant angular frequency <i>ω</i><sub>0</sub> and bandwidth Δ<i>ω</i>, the half-power frequencies <i>ω</i><sub>1</sub> and <i>ω</i><sub>2</sub> satisfy:',
        opts: [
          {
            label: '<i>ω</i><sub>1</sub> + <i>ω</i><sub>2</sub> = <i>ω</i><sub>0</sub>',
            nudge: '<b>(A)</b> trap: assuming an arithmetic-mean relation; that would give <i>ω</i><sub>1</sub> + <i>ω</i><sub>2</sub> = 2<i>ω</i><sub>0</sub>, not <i>ω</i><sub>0</sub>.',
          },
          { label: '<i>ω</i><sub>1</sub><i>ω</i><sub>2</sub> = <i>ω</i><sub>0</sub><sup>2</sup>', nudge: null },
          {
            label: '<i>ω</i><sub>1</sub><i>ω</i><sub>2</sub> = <i>ω</i><sub>0</sub>',
            nudge: '<b>(C)</b> trap: dimensional nonsense (frequency<sup>2</sup> cannot equal frequency).',
          },
          {
            label: '<i>ω</i><sub>2</sub> − <i>ω</i><sub>1</sub> = <i>ω</i><sub>0</sub>',
            nudge: '<b>(D)</b> trap: <i>ω</i><sub>2</sub> − <i>ω</i><sub>1</sub> is the bandwidth Δ<i>ω</i>, which equals <i>ω</i><sub>0</sub>/<i>Q</i>, not <i>ω</i><sub>0</sub>.',
          },
        ],
        correct: 1,
        solution: 'The resonant frequency is the geometric mean of the half-power frequencies: <i>ω</i><sub>0</sub> = √(<i>ω</i><sub>1</sub><i>ω</i><sub>2</sub>).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Believing <i>R</i> shifts the resonant frequency.</b> It does not. <i>ω</i><sub>0</sub> = 1/√(<i>LC</i>) depends only on <i>L</i> and <i>C</i>. Resistance changes how sharp and tall the peak is, never where it sits.',
          '<b>Confusing <i>V</i><sub>L</sub> − <i>V</i><sub>C</sub> = 0 with <i>V</i><sub>L</sub> = 0.</b> At resonance the inductor and capacitor voltages cancel each other as phasors, but each is individually large (in fact <i>Q</i> times the source). Forgetting this loses easy marks and burns out real components.',
          '<b>Mixing up Q, bandwidth, and their reciprocals.</b> Memorise the chain <i>Q</i> = <i>ω</i><sub>0</sub>/Δ<i>ω</i> and Δ<i>ω</i> = <i>R</i>/<i>L</i>. From these, <i>Q</i> = <i>ω</i><sub>0</sub><i>L</i>/<i>R</i> follows immediately. Many wrong MCQ options are just inverted versions of the right one.',
          '<b>Treating the ideal LC limit as physical.</b> Setting <i>R</i> = 0 predicts infinite resonant current. Real circuits always have resistance (winding, leads), so the current is large but finite — don’t write “infinite” on an exam unless the problem explicitly idealises.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any sharpness or selectivity question, reach straight for <i>Q</i> = <i>f</i><sub>0</sub>/Δ<i>f</i>. And for resonance numericals, remember the two-line shortcut: at resonance, <b>source voltage = <i>V</i><sub>R</sub> alone</b>, and <b><i>V</i><sub>L</sub> = <i>V</i><sub>C</sub> = <i>Q</i>× source</b>. These two facts crack most NEET/JEE one-liners without touching <i>ω</i><sub>0</sub> at all. Quick sanity check: a high-Q answer should pair with a small <i>R</i> and a narrow bandwidth — if your numbers say otherwise, you’ve inverted something.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Resonance condition',
            note: '<i>X</i><sub>L</sub> = <i>X</i><sub>C</sub> ⇒ <i>ω</i><sub>0</sub> = 1/√(<i>LC</i>), <i>f</i><sub>0</sub> = 1/(2π√(<i>LC</i>)). (Independent of <i>R</i>.)',
          },
          {
            f: 'At resonance',
            note: '<i>Z</i> = <i>R</i> (min), <i>I</i> = <i>V</i>/<i>R</i> (max), <i>φ</i> = 0, power factor = 1, purely resistive.',
          },
          {
            f: 'Q-factor',
            note: '<i>Q</i> = <i>ω</i><sub>0</sub><i>L</i>/<i>R</i> = 1/(<i>ω</i><sub>0</sub><i>CR</i>) = (1/<i>R</i>)√(<i>L</i>/<i>C</i>) = <i>ω</i><sub>0</sub>/Δ<i>ω</i>.',
          },
          {
            f: 'Bandwidth',
            note: 'Δ<i>ω</i> = <i>R</i>/<i>L</i>. Half-power: |<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>| = <i>R</i>; <i>ω</i><sub>0</sub> = √(<i>ω</i><sub>1</sub><i>ω</i><sub>2</sub>).',
          },
          {
            f: 'Voltage magnification',
            note: '<i>V</i><sub>L</sub> = <i>V</i><sub>C</sub> = <i>Q</i> <i>V</i><sub>source</sub> — can far exceed the supply.',
          },
          {
            f: 'Sharpness',
            note: 'small <i>R</i> → tall, narrow, selective peak (high Q); large <i>R</i> → broad, flat (low Q).',
          },
        ],
        aids: ['Mnemonic: “Low R, high Q, sharp tune.”'],
      },
    ],
  },
];
