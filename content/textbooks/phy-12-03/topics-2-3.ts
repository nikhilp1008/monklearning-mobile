import type { Topic } from '@/lib/textbooks';

/**
 * Class 12 Chapter 3, Topics 02 and 03: pp. 161–178 of the Class 12 Physics
 * Master Reference, word for word: Resistivity, Temperature Dependence &
 * Material Classification (pp. 161–168) and Combination of Resistors (Series &
 * Parallel) (pp. 169–178). Each is split at its Sections 1 to 8. Figures 3.8
 * (caption p. 163, drawn on p. 164), 3.9 (170–171), 3.10 (172–173) and 3.11
 * (175–176) are redrawn in lib/diagrams/physics-12-03.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 02 · pp. 161–168 ─────────────────────────
  {
    n: '02',
    title: 'Resistivity, Temperature Dependence & Material Classification',
    kalam: 'Why does a copper wire carry current almost effortlessly while the rubber around it blocks it completely?',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> CBSE Boards regularly ask for the resistor colour code, the temperature-dependence graphs of metals vs semiconductors, and the reasoning behind them (2–3 marks). JEE Main sets numericals on <i>R</i>(<i>T</i>) and the temperature coefficient <i>α</i>; JEE Advanced links zero-temperature-coefficient combinations and material properties. NEET loves one-liners on which material has positive/negative <i>α</i> and why alloys are used in standard resistors.',
      },
      {
        t: 'p',
        html: 'Why does a copper wire carry current almost effortlessly while the rubber around it blocks it completely? Both are made of atoms — the difference is how many charge carriers are free to move and how easily they move. Recall from the drift picture that resistivity is <i>ρ</i> = <i>m</i>/(<i>ne</i><sup>2</sup><i>τ</i>): it falls when there are many free electrons (large <i>n</i>) and when they travel a long time between collisions (large <i>τ</i>). Materials differ wildly in both, and that single fact spreads their resistivities across an astonishing <b>24 orders of magnitude</b> — from about 10<sup>−8</sup> Ω m for silver to over 10<sup>16</sup> Ω m for good insulators.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine three Indian roads at rush hour. A <b>metal</b> is a wide, open expressway packed with vehicles (electrons) that flow freely — huge <i>n</i>, long <i>τ</i>, tiny <i>ρ</i>. A <b>semiconductor</b> is a normal town road: very few vehicles at night (low <i>n</i> at low temperature), but as the day “heats up,” more and more vehicles pour out onto it — its conductivity improves with temperature. An <b>insulator</b> is a road blocked by walls: almost no vehicles can move at all, enormous <i>ρ</i>.',
      },
      {
        t: 'p',
        html: 'Now, what happens when you heat a conductor? The metal lattice ions vibrate harder, so electrons collide more often — the relaxation time <i>τ</i> drops, and since <i>n</i> barely changes, <i>ρ</i> <b>rises</b>. That is why a metal’s resistance climbs with temperature. In a semiconductor the opposite dominates: heating shakes loose far more carriers, <i>n</i> shoots up exponentially, and even though <i>τ</i> falls, the carrier flood wins — so <i>ρ</i> <b>drops</b> with temperature. <b>Alloys</b> like manganin and constantan are the quiet heroes: their resistivity is moderately high and almost completely unaffected by temperature, which is exactly what you want in a standard resistance or a potentiometer wire.',
      },
      {
        t: 'p',
        html: 'For everyday electronics, carbon-film resistors carry their value printed as coloured rings — the <b>colour code</b> — a compact way to label resistors too small to write numbers on.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The linear law <i>ρ</i><sub><i>T</i></sub> = <i>ρ</i><sub>0</sub>[1 + <i>α</i>(<i>T</i> − <i>T</i><sub>0</sub>)] is only a first-order approximation, valid over <b>moderate temperature ranges</b>. Over large ranges, resistivity curves bend (metals flatten near absolute zero; some metals plunge to exactly zero resistance below a <b>critical temperature</b> — superconductivity — which the linear law cannot describe at all). The classification into conductor / semiconductor / insulator is itself temperature-dependent: a “poor conductor” semiconductor at low <i>T</i> behaves very differently when hot.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Temperature dependence of resistivity / resistance',
        main: '<i>ρ</i><sub><i>T</i></sub> = <i>ρ</i><sub>0</sub>[1 + <i>α</i>(<i>T</i> − <i>T</i><sub>0</sub>)]<br><i>R</i><sub><i>T</i></sub> = <i>R</i><sub>0</sub>[1 + <i>α</i>(<i>T</i> − <i>T</i><sub>0</sub>)]',
        legend: [
          '<i>ρ</i><sub>0</sub>, <i>R</i><sub>0</sub> = resistivity/resistance at reference temperature <i>T</i><sub>0</sub>',
          '<i>α</i> = temperature coefficient of resistivity',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Temperature coefficient (fractional change in resistance per degree)',
        main: '<i>α</i> = (<i>R</i><sub><i>T</i></sub> − <i>R</i><sub>0</sub>)/(<i>R</i><sub>0</sub>(<i>T</i> − <i>T</i><sub>0</sub>))',
        legend: [],
        note: 'SI unit: K<sup>−1</sup> (or °C<sup>−1</sup>); dimension [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup> K<sup>−1</sup>].<br>• Metals: <i>α</i> > 0 (typically ∼ 4 × 10<sup>−3</sup> K<sup>−1</sup>).<br>• Semiconductors, insulators: <i>α</i> < 0.<br>• Alloys (manganin, constantan, nichrome): <i>α</i> ≈ 0 (very small).',
      },
      {
        t: 'p',
        html: '<b>Resistivity ranges (order of magnitude):</b><br>• Conductors (metals): 10<sup>−8</sup>–10<sup>−6</sup> Ω m<br>• Semiconductors: 10<sup>−5</sup>–10<sup>6</sup> Ω m (and strongly <i>T</i>-dependent)<br>• Insulators: 10<sup>8</sup>–10<sup>16</sup> Ω m',
      },
      {
        t: 'p',
        html: '<b>Resistor colour code (4-band):</b> Band 1 = first digit, Band 2 = second digit, Band 3 = multiplier (power of ten), Band 4 = tolerance.',
      },
      {
        t: 'defgrid',
        title: 'Colour — Digit / Power',
        rows: [
          { k: 'Black', v: '0' },
          { k: 'Brown', v: '1' },
          { k: 'Red', v: '2' },
          { k: 'Orange', v: '3' },
          { k: 'Yellow', v: '4' },
          { k: 'Green', v: '5' },
          { k: 'Blue', v: '6' },
          { k: 'Violet', v: '7' },
          { k: 'Grey', v: '8' },
          { k: 'White', v: '9' },
        ],
      },
      { t: 'p', html: 'Tolerance: Gold = ±5%, Silver = ±10%, no band = ±20%.' },
      {
        t: 'formula',
        kicker: 'Resistor colour code (4-band)',
        main: '<i>R</i> = (digit<sub>1</sub> digit<sub>2</sub>) × 10<sup>multiplier</sup> Ω (±tolerance)',
        legend: [],
        note: null,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: '3.1 Reading the Colour Code',
        steps: [
          '<b>Orient the resistor</b> so the tolerance band (usually gold/silver, and slightly set apart) is on the right.',
          '<b>Read the first two bands</b> as digits, left to right.',
          '<b>Read the third band</b> as the power of ten to multiply by.',
          '<b>Read the fourth band</b> as the tolerance. <b>Reasoning:</b> the first two bands form a two-digit number; the third scales it, so a few colours can encode resistances from ohms to megohms compactly. Mnemonic for 0 → 9: <b>B B ROY of Great Britain had a Very Good Wife</b> — <b>B</b>lack, <b>B</b>rown, <b>R</b>ed, <b>O</b>range, <b>Y</b>ellow, <b>G</b>reen, <b>B</b>lue, <b>V</b>iolet, <b>G</b>rey, <b>W</b>hite.',
        ],
      },
      {
        t: 'p',
        html: '<b>3.2 Why Metals and Semiconductors Behave Oppositely</b><br>Start from <i>ρ</i> = <i>m</i>/(<i>ne</i><sup>2</sup><i>τ</i>).<br>• <b>Metal:</b> <i>n</i> is fixed (all valence electrons already free). Heating increases lattice vibration ⇒ more frequent collisions ⇒ <i>τ</i> falls ⇒ <i>ρ</i> rises. <b>Why this step:</b> in a metal the only temperature-sensitive factor is <i>τ</i>.<br>• <b>Semiconductor:</b> heating breaks more covalent bonds ⇒ <i>n</i> rises exponentially. Although <i>τ</i> also falls, the exponential growth of <i>n</i> dominates ⇒ <i>ρ</i> falls. <b>Why this step:</b> in a semiconductor, carrier generation outpaces the collision effect.',
      },
      { t: 'fig', id: 'p12-03-fig-3.8' },
      {
        t: 'p',
        html: '<b>3.3 Superconductivity (qualitative)</b><br>For certain materials cooled below a <b>critical temperature</b> <i>T</i><sub>c</sub>, resistivity drops abruptly to exactly zero — current then flows without any energy loss. This cannot be captured by the linear <i>ρ</i>(<i>T</i>) law and represents a distinct quantum state of matter. <b>Reasoning:</b> below <i>T</i><sub>c</sub> electrons pair up and move through the lattice without scattering, so <i>τ</i> → ∞ effectively and <i>ρ</i> → 0.',
      },
      {
        t: 'p',
        html: '<b>3.4 Thermistor (application of temperature dependence)</b><br>A <b>thermistor</b> is a device — usually a semiconductor oxide — engineered to have a large temperature coefficient of resistance, so its resistance changes sharply with temperature. Most common are <b>NTC</b> (negative temperature coefficient) thermistors, whose resistance falls steeply as temperature rises (the semiconductor behaviour: more electrons freed, <i>n</i> ↑, <i>ρ</i> ↓). Because a small temperature change produces a big, easily measured resistance change, thermistors are used as sensitive <b>temperature sensors</b>, in <b>over-current protection</b> (PTC types), and in circuits that compensate for temperature drift. This is the direct practical pay-off of the <i>ρ</i>–<i>T</i> relationship: a steep <i>α</i> turns a resistor into a thermometer.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A carbon resistor has four bands in order: <b>Brown, Black, Red, Gold</b>. Find its resistance and tolerance.',
        steps: [
          '<b>Read the bands:</b> Brown = 1, Black = 0, Red = multiplier 10<sup>2</sup>, Gold = ±5%.',
          '<i>R</i> = (10) × 10<sup>2</sup> = 1000 Ω',
          'So its true value lies between 950 Ω and 1050 Ω.',
        ],
        ans: '<i>R</i> = 1 kΩ ± 5%.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A metallic wire has resistance 100 Ω at 0 °C. Its temperature coefficient is <i>α</i> = 4.0 × 10<sup>−3</sup> °C<sup>−1</sup>. What is its resistance at 50 °C?',
        steps: [
          '<b>The trap:</b> Students multiply 100 × <i>α</i> × 50 and forget to add the original <i>R</i><sub>0</sub>, reporting the increase (20 Ω) instead of the new resistance (120 Ω).',
          '<b>Fast move:</b><br><i>R</i><sub><i>T</i></sub> = <i>R</i><sub>0</sub>[1 + <i>α</i> Δ<i>T</i>] = 100[1 + (4.0 × 10<sup>−3</sup>)(50)] = 100[1 + 0.20]',
          'A metal heats ⇒ resistance rises, so the answer must be <b>above</b> 100 Ω. If you ever get a value below <i>R</i><sub>0</sub> for a heated metal, you’ve slipped.',
        ],
        ans: '120 Ω',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A coil of wire has resistance 50 Ω at 20 °C and 60 Ω at 120 °C. Find its temperature coefficient of resistance (referred to 20 °C).',
        steps: [
          'Using <i>R</i><sub><i>T</i></sub> = <i>R</i><sub>0</sub>[1 + <i>α</i>(<i>T</i> − <i>T</i><sub>0</sub>)] with <i>R</i><sub>0</sub> = 50 Ω at <i>T</i><sub>0</sub> = 20 °C:<br>60 = 50[1 + <i>α</i>(120 − 20)] ⇒ 60/50 = 1 + 100<i>α</i> ⇒ 1.2 − 1 = 100<i>α</i>.',
          '<i>α</i> = 0.2/100',
          'This positive, ∼ 10<sup>−3</sup> value is typical of a metal — a good consistency check.',
        ],
        ans: '2.0 × 10<sup>−3</sup> °C<sup>−1</sup>.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Two resistors are joined <b>in series</b>: <i>R</i><sub>1</sub> made of a metal (coefficient <i>α</i><sub>1</sub> = +4.0 × 10<sup>−3</sup> K<sup>−1</sup>) and <i>R</i><sub>2</sub> made of carbon (coefficient <i>α</i><sub>2</sub> = −5.0 × 10<sup>−4</sup> K<sup>−1</sup>). Find the ratio <i>R</i><sub>1</sub> ∶ <i>R</i><sub>2</sub> for which the combined resistance is independent of temperature, and comment.',
        steps: [
          '<b>Idea:</b> The series resistance is <i>R</i> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>. For it to be temperature-independent, the increase in <i>R</i><sub>1</sub> on heating must exactly cancel the decrease in <i>R</i><sub>2</sub>. To first order, each changes by <i>R</i><sub><i>i</i></sub><i>α</i><sub><i>i</i></sub> Δ<i>T</i>:<br>Δ<i>R</i> = (<i>R</i><sub>1</sub><i>α</i><sub>1</sub> + <i>R</i><sub>2</sub><i>α</i><sub>2</sub>) Δ<i>T</i> = 0 ⇒ <i>R</i><sub>1</sub><i>α</i><sub>1</sub> + <i>R</i><sub>2</sub><i>α</i><sub>2</sub> = 0.',
          '<i>R</i><sub>1</sub>/<i>R</i><sub>2</sub> = −<i>α</i><sub>2</sub>/<i>α</i><sub>1</sub> = −(−5.0 × 10<sup>−4</sup>)/(4.0 × 10<sup>−3</sup>) = (5.0 × 10<sup>−4</sup>)/(4.0 × 10<sup>−3</sup>)',
          '<b>Comment:</b> A metal (<i>α</i> > 0) paired with carbon (<i>α</i> < 0) in the ratio 1 ∶ 8 gives a resistance that barely drifts with temperature — the same principle behind temperature-compensated precision resistors. (This is why alloys with near-zero <i>α</i>, or such pairings, are chosen for standard resistors.)',
        ],
        ans: '1/8 = 0.125.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A resistor shows bands <b>Yellow, Violet, Orange, Silver</b>. State its resistance and tolerance.',
            a: '47 kΩ ± 10%',
          },
          {
            q: '[NEET] A tungsten filament has resistance 20 Ω at 27 °C. If <i>α</i> = 4.5 × 10<sup>−3</sup> °C<sup>−1</sup>, find its resistance at 127 °C.',
            a: '29 Ω',
          },
          {
            q: '[JEE Main] A wire’s resistance increases from 80 Ω to 100 Ω when heated from 20 °C to 270 °C. Find its temperature coefficient (referred to 20 °C).',
            a: '1.0 × 10<sup>−3</sup> °C<sup>−1</sup>',
          },
          {
            q: '[JEE Main] The resistivity of a semiconductor is 0.5 Ω m at 300 K. State (with reasoning) whether it will be larger or smaller at 350 K, and what sign its temperature coefficient has.',
            a: 'Smaller; <i>α</i> < 0 (carrier density rises with <i>T</i>)',
          },
          {
            q: '[JEE Advanced] Two wires of equal length and equal cross-section, one of copper (<i>α</i><sub>1</sub> = 4 × 10<sup>−3</sup> K<sup>−1</sup>) and one of an alloy (<i>α</i><sub>2</sub> = 1 × 10<sup>−5</sup> K<sup>−1</sup>), are connected in series. If the copper wire has resistance 2 Ω and the alloy 8 Ω at 0 °C, find the fractional change in total resistance per degree near 0 °C.',
            a: '(1/<i>R</i>)(d<i>R</i>/d<i>T</i>) = (<i>R</i><sub>1</sub><i>α</i><sub>1</sub> + <i>R</i><sub>2</sub><i>α</i><sub>2</sub>)/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>) = ((2)(4 × 10<sup>−3</sup>) + (8)(1 × 10<sup>−5</sup>))/10 ≈ 8.1 × 10<sup>−4</sup> K<sup>−1</sup>',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'On heating, the resistance of a pure metallic conductor:',
        opts: [
          {
            label: 'decreases, because more electrons are freed.',
            nudge: '<b>(A)</b> describes a semiconductor, not a metal — the classic swap.',
          },
          { label: 'increases, because the relaxation time decreases.', nudge: null },
          { label: 'stays constant, because <i>n</i> is fixed.', nudge: '<b>(C)</b> wrongly assumes constant <i>τ</i>.' },
          {
            label: 'first increases then decreases.',
            nudge: '<b>(D)</b> there is no such turnaround for an ordinary metal in the normal range.',
          },
        ],
        correct: 1,
        solution: 'In a metal <i>n</i> is fixed; hotter lattice vibrations shorten <i>τ</i>, so <i>ρ</i> and <i>R</i> rise.',
      },
      {
        t: 'mcq',
        q: 'Manganin and constantan are used to make standard resistance coils mainly because they have:',
        opts: [
          {
            label: 'very high resistivity.',
            nudge: '<b>(A)</b> high resistivity alone is not the point (and would be unstable if <i>α</i> were large).',
          },
          { label: 'a very low melting point.', nudge: '<b>(B)</b> melting point is irrelevant.' },
          { label: 'a negligibly small temperature coefficient of resistance.', nudge: null },
          { label: 'zero resistance.', nudge: '<b>(D)</b> they are not superconductors.' },
        ],
        correct: 2,
        solution: 'A near-zero <i>α</i> keeps the resistance steady as the coil warms during use — essential for a standard.',
      },
      {
        t: 'mcq',
        q: 'A resistor is colour-coded <b>Green, Blue, Brown, Gold</b>. Its value is:',
        opts: [
          { label: '56 Ω ± 5%', nudge: '<b>(A)</b> forgets the multiplier band.' },
          { label: '560 Ω ± 5%', nudge: null },
          { label: '5.6 Ω ± 5%', nudge: '<b>(C)</b> uses 10<sup>−1</sup>.' },
          { label: '5600 Ω ± 10%', nudge: '<b>(D)</b> misreads both the multiplier and the tolerance.' },
        ],
        correct: 1,
        solution: 'Green = 5, Blue = 6, Brown = multiplier 10<sup>1</sup>, Gold = ±5%: 56 × 10 = 560 Ω ± 5%.',
      },
      {
        t: 'mcq',
        q: 'Which statement about superconductors is correct?',
        opts: [
          {
            label: 'Their resistance falls gradually to a small non-zero value as <i>T</i> → 0.',
            nudge: '<b>(A)</b> describes an ordinary metal’s residual resistance, not superconductivity.',
          },
          { label: 'Below a critical temperature their resistivity becomes exactly zero.', nudge: null },
          {
            label: 'Their resistivity increases sharply at low temperature.',
            nudge: '<b>(C)</b> and <b>(D)</b> are the opposite of what happens.',
          },
          {
            label: 'They are perfect insulators at low temperature.',
            nudge: '<b>(C)</b> and <b>(D)</b> are the opposite of what happens.',
          },
        ],
        correct: 1,
        solution: 'Below <i>T</i><sub>c</sub> the resistivity drops abruptly to exactly zero, allowing loss-free current.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Dropping the “1+” in the temperature formula.</b> <i>R</i><sub><i>T</i></sub> = <i>R</i><sub>0</sub>(1 + <i>α</i>Δ<i>T</i>) — the 1 keeps the original resistance. Forgetting it gives only the change, not the new value.',
          '<b>Assigning the wrong sign of <i>α</i>.</b> Metals: +. Semiconductors/insulators: −. Mixing these up flips the entire answer.',
          '<b>Reading the colour code from the wrong end.</b> Always put the tolerance band (gold/silver) on the right first; otherwise digits and multiplier swap.',
          '<b>Confusing resistivity (material) with resistance (object).</b> Heating changes both via <i>α</i>, but resistivity is the intrinsic property; resistance also depends on <i>L</i> and <i>A</i>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For temperature problems, work with the ratio <i>R</i><sub><i>T</i></sub>/<i>R</i><sub>0</sub> = 1 + <i>α</i>Δ<i>T</i> — one line, no need to track absolute values until the end. For colour codes, just remember the BBROY mnemonic and that the third band is “how many zeros.”',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Temperature law',
            note: '<i>R</i><sub><i>T</i></sub> = <i>R</i><sub>0</sub>[1 + <i>α</i>(<i>T</i> − <i>T</i><sub>0</sub>)]; <i>α</i> = (<i>R</i><sub><i>T</i></sub> − <i>R</i><sub>0</sub>)/(<i>R</i><sub>0</sub>Δ<i>T</i>).',
          },
          { f: 'Signs of <i>α</i>', note: 'metals + (<i>τ</i> ↓); semiconductors/insulators − (<i>n</i> ↑); alloys ≈ 0.' },
          {
            f: 'Resistivity ranges',
            note: 'conductors 10<sup>−8</sup>–10<sup>−6</sup>, semiconductors 10<sup>−5</sup>–10<sup>6</sup>, insulators 10<sup>8</sup>–10<sup>16</sup> Ω m.',
          },
          {
            f: 'Colour code',
            note: '<i>R</i> = (<i>d</i><sub>1</sub><i>d</i><sub>2</sub>) × 10<sup><i>m</i></sup> Ω ± tolerance; Gold ±5%, Silver ±10%.',
          },
          { f: 'Superconductor', note: '<i>ρ</i> → 0 exactly below critical temperature <i>T</i><sub>c</sub>.' },
          {
            f: 'Zero-drift combination (series)',
            note: '<i>R</i><sub>1</sub><i>α</i><sub>1</sub> + <i>R</i><sub>2</sub><i>α</i><sub>2</sub> = 0.',
          },
        ],
        aids: [
          '“B B ROY of Great Britain had a Very Good Wife” — Black0…White9.',
          '“Metal hates heat” (<i>R</i> ↑); “semiconductor loves heat” (<i>R</i> ↓).',
          'Third band = number of zeros.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 169–178 ─────────────────────────
  {
    n: '03',
    title: 'Combination of Resistors (Series & Parallel)',
    kalam: 'Real circuits are rarely a single resistor — they are tangles of many.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Bread-and-butter of the chapter. CBSE Boards ask for the series and parallel derivations (2–3 marks) and simple network reductions. JEE Main sets at least one network-reduction or current/voltage-divider numerical every cycle; JEE Advanced builds infinite ladders, symmetric networks, and cubes on this foundation. NEET tests quick max/min equivalent-resistance recognition.',
      },
      {
        t: 'p',
        html: 'Real circuits are rarely a single resistor — they are tangles of many. The whole art of circuit analysis begins with two simple ways resistors can sit together, and almost every network is just these two patterns nested inside each other.',
      },
      {
        t: 'p',
        html: '<b>Series</b> is resistors lined up one after another, like toll booths on the Mumbai–Pune expressway. Every car (the current) must pass through every booth in turn — so the same current flows through each resistor, and the total “delay” is the sum of the individual delays. More booths in a row ⇒ more total resistance. The voltage, meanwhile, gets shared out: each resistor drops a slice of the total, in proportion to its size.',
      },
      {
        t: 'p',
        html: '<b>Parallel</b> is resistors side by side between the same two points, like several parallel queues at a railway ticket counter. Now the crowd splits among the queues — each path sees the same voltage across its ends (the same two nodes), but the current divides, with more current taking the easier (lower-resistance) path. Crucially, adding another parallel path gives the current more room to flow, so the total resistance drops — a parallel combination is always <b>smaller</b> than the smallest resistor in it.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Series resistors are like adding more cloth layers over a torch — each layer dims it further (resistance adds). Parallel resistors are like opening more doors out of a crowded hall — each new door makes it easier for people to leave (resistance falls). That single intuition — series adds, parallel eases — tells you the direction of every answer before you compute it.',
      },
      {
        t: 'p',
        html: 'A handy consequence: for <i>n</i> <b>identical</b> resistors <i>R</i>, series gives <i>nR</i> and parallel gives <i>R</i>/<i>n</i>, so the ratio of largest to smallest possible equivalent is <i>n</i><sup>2</sup>.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> These rules assume <b>ideal resistors</b> with no internal EMF and negligible wire resistance, in the <b>steady state</b>. They apply directly only to resistors that are genuinely in series (same current, no junction between them) or genuinely in parallel (same two end nodes). A common error is to call resistors “parallel” just because they look side by side on paper — they must share both end nodes. Networks that are neither pure series nor pure parallel (like an unbalanced bridge) need Kirchhoff’s laws instead.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Series combination (same current <i>I</i> through each)',
        main: '<i>R</i><sub>s</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> + ⋯ + <i>R</i><sub><i>n</i></sub><br><i>V</i> = <i>V</i><sub>1</sub> + <i>V</i><sub>2</sub> + ⋯',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Parallel combination (same voltage <i>V</i> across each)',
        main: '1/<i>R</i><sub>p</sub> = 1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub> + ⋯ + 1/<i>R</i><sub><i>n</i></sub><br><i>I</i> = <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> + ⋯<br>For two resistors: <i>R</i><sub>p</sub> = <i>R</i><sub>1</sub><i>R</i><sub>2</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>) (“product over sum”)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Voltage divider (two resistors in series across voltage <i>V</i>)',
        main: '<i>V</i><sub>1</sub> = <i>VR</i><sub>1</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>)<br><i>V</i><sub>2</sub> = <i>VR</i><sub>2</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Current divider (two resistors in parallel carrying total current <i>I</i>)',
        main: '<i>I</i><sub>1</sub> = <i>IR</i><sub>2</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>)<br><i>I</i><sub>2</sub> = <i>IR</i><sub>1</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>)',
        legend: [],
        note: '(Note the opposite resistor appears on top — more current takes the smaller resistor.)',
      },
      {
        t: 'formula',
        kicker: '<i>n</i> identical resistors <i>R</i>',
        main: '<i>R</i><sub>s</sub> = <i>nR</i><br><i>R</i><sub>p</sub> = <i>R</i>/<i>n</i><br><i>R</i><sub>s</sub>/<i>R</i><sub>p</sub> = <i>n</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'All quantities in SI: <i>R</i> in Ω (dimension [M<sup>1</sup> L<sup>2</sup> T<sup>−3</sup> A<sup>−2</sup>]), <i>V</i> in V, <i>I</i> in A.',
      },

      { t: 'part', title: 'Derivations' },
      {
        t: 'p',
        html: '<b>3.1 Series Combination</b><br>Consider resistors <i>R</i><sub>1</sub>, <i>R</i><sub>2</sub>, <i>R</i><sub>3</sub> joined end to end across a source of voltage <i>V</i>, carrying a common current <i>I</i> (the same <i>I</i>, because there is nowhere for charge to leave or enter between them — junction rule).',
      },
      { t: 'fig', id: 'p12-03-fig-3.9' },
      {
        t: 'p',
        html: 'By Ohm’s law the drop across each is <i>V</i><sub>1</sub> = <i>IR</i><sub>1</sub>, <i>V</i><sub>2</sub> = <i>IR</i><sub>2</sub>, <i>V</i><sub>3</sub> = <i>IR</i><sub>3</sub>. By the loop rule, the source voltage equals the sum of the drops:<br><i>V</i> = <i>V</i><sub>1</sub> + <i>V</i><sub>2</sub> + <i>V</i><sub>3</sub> = <i>I</i>(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> + <i>R</i><sub>3</sub>).',
      },
      {
        t: 'p',
        html: 'The single equivalent resistor that would draw the same current <i>I</i> from the same <i>V</i> satisfies <i>V</i> = <i>IR</i><sub>s</sub>, so<br><i>R</i><sub>s</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> + <i>R</i><sub>3</sub>.<br><b>Why the current is common:</b> there is no junction between series resistors, so charge conservation forces identical current through each.',
      },
      {
        t: 'p',
        html: '<b>3.2 Parallel Combination</b><br>Consider resistors <i>R</i><sub>1</sub>, <i>R</i><sub>2</sub>, <i>R</i><sub>3</sub> all connected between the same two nodes A and B, so each has the <b>same</b> potential difference <i>V</i> across it.',
      },
      { t: 'fig', id: 'p12-03-fig-3.10' },
      {
        t: 'p',
        html: 'Each carries <i>I</i><sub>1</sub> = <i>V</i>/<i>R</i><sub>1</sub>, <i>I</i><sub>2</sub> = <i>V</i>/<i>R</i><sub>2</sub>, <i>I</i><sub>3</sub> = <i>V</i>/<i>R</i><sub>3</sub>. By the junction rule, the total current from the source is the sum:<br><i>I</i> = <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> + <i>I</i><sub>3</sub> = <i>V</i>(1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub> + 1/<i>R</i><sub>3</sub>).',
      },
      {
        t: 'p',
        html: 'The equivalent resistor satisfies <i>I</i> = <i>V</i>/<i>R</i><sub>p</sub>, so dividing by <i>V</i>:<br>1/<i>R</i><sub>p</sub> = 1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub> + 1/<i>R</i><sub>3</sub>.<br><b>Why the voltage is common:</b> both ends of every branch touch the same pair of nodes, which are at fixed potentials.',
      },
      {
        t: 'p',
        html: '<b>3.3 The Current-Divider Rule (from parallel)</b><br>For two parallel resistors, <i>V</i> = <i>IR</i><sub>p</sub> = <i>IR</i><sub>1</sub><i>R</i><sub>2</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>). The current in branch 1 is <i>I</i><sub>1</sub> = <i>V</i>/<i>R</i><sub>1</sub> = <i>IR</i><sub>2</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>). The larger the other resistor, the more current stays in branch 1 — current prefers the path of least resistance.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Three resistors of 2 Ω, 3 Ω, and 6 Ω are available. Find the equivalent resistance when they are connected (a) all in series, (b) all in parallel.',
        steps: [
          '<b>(a) Series:</b><br><i>R</i><sub>s</sub> = 2 + 3 + 6',
          '<b>(b) Parallel:</b><br>1/<i>R</i><sub>p</sub> = 1/2 + 1/3 + 1/6 = (3 + 2 + 1)/6 = 6/6 = 1',
          'Note <i>R</i><sub>p</sub> = 1 Ω is smaller than the smallest resistor (2 Ω) — exactly as a parallel combination must be.',
        ],
        ans: '(a) 11 Ω; (b) <i>R</i><sub>p</sub> = 1 Ω',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Four identical resistors, each 12 Ω, are given. What are the maximum and minimum equivalent resistances obtainable using all four?',
        steps: [
          '<b>The trap:</b> Students try clever mixed arrangements and miss that the extremes are always the pure cases.',
          '<b>Fast move:</b> Maximum is all in <b>series</b>; minimum is all in <b>parallel</b>:<br><i>R</i><sub>max</sub> = 4 × 12,   <i>R</i><sub>min</sub> = 12/4',
          'Their ratio is 48/3 = 16 = 4<sup>2</sup> = <i>n</i><sup>2</sup> — a built-in check.',
        ],
        ans: '<i>R</i><sub>max</sub> = 48 Ω, <i>R</i><sub>min</sub> = 3 Ω.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: reduction + current division',
        q: 'A 12 V battery of negligible internal resistance drives a network: a 2 Ω resistor in series with a parallel combination of 6 Ω and 3 Ω. Find (a) the total current from the battery, and (b) the current through the 3 Ω resistor.',
        steps: [
          '<b>(a) Reduce the network.</b> Parallel part:<br><i>R</i><sub>p</sub> = (6 × 3)/(6 + 3) = 18/9 = 2 Ω.<br>Total resistance = 2 + 2 = 4 Ω, so<br><i>I</i> = <i>V</i>/<i>R</i><sub>total</sub> = 12/4 = 3 A.',
          '<b>(b) Current through the 3 Ω.</b> The full 3 A flows through the series 2 Ω, then splits across the parallel pair. By the current-divider rule (opposite resistor on top):<br><i>I</i><sub>3Ω</sub> = <i>I</i> · 6/(6 + 3) = 3 × 6/9',
          '<b>Check:</b> <i>I</i><sub>6Ω</sub> = 3 × 3/9 = 1 A, and 2 + 1 = 3 A. ✓ (Also: voltage across the pair = 3 × 2 = 6 V, giving 6/3 = 2 A and 6/6 = 1 A — consistent.)',
        ],
        ans: '2 A.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: infinite ladder',
        fig: 'p12-03-fig-3.11',
        q: 'An infinite ladder network is built from identical resistors <i>R</i>: each “rung” places one <i>R</i> in series along the top and one <i>R</i> as a shunt to the bottom rail, repeated forever. Find the equivalent resistance <i>X</i> between the input terminals.',
        steps: [
          '<b>The self-similarity trick:</b> Because the ladder is infinite, removing the first rung leaves an identical infinite ladder of resistance <i>X</i> again. So the whole network equals: one series <i>R</i>, then <i>R</i> in parallel with the rest of the ladder (which is <i>X</i>):<br><i>X</i> = <i>R</i> + <i>RX</i>/(<i>R</i> + <i>X</i>).',
          'Multiply through by (<i>R</i> + <i>X</i>):<br><i>X</i>(<i>R</i> + <i>X</i>) = <i>R</i>(<i>R</i> + <i>X</i>) + <i>RX</i> ⇒ <i>RX</i> + <i>X</i><sup>2</sup> = <i>R</i><sup>2</sup> + <i>RX</i> + <i>RX</i>.<br><i>X</i><sup>2</sup> − <i>RX</i> − <i>R</i><sup>2</sup> = 0 ⇒ <i>X</i> = (<i>R</i> + √(<i>R</i><sup>2</sup> + 4<i>R</i><sup>2</sup>))/2 = <i>R</i>(1 + √5)/2.',
          '(We discard the negative root — resistance can’t be negative.) The answer is the <b>golden ratio</b> times <i>R</i> — a small piece of mathematical beauty hiding in a resistor network.',
        ],
        ans: '<i>X</i> = ((1 + √5)/2) <i>R</i> ≈ 1.618 <i>R</i>.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Three resistors 5 Ω, 10 Ω, 15 Ω are connected in series across a 6 V battery. Find the equivalent resistance and the current.',
            a: '30 Ω, 0.2 A',
          },
          {
            q: '[NEET] Two equal resistors give an equivalent of 3 Ω when in parallel. What is their equivalent resistance when joined in series?',
            a: '12 Ω (each is 6 Ω)',
          },
          {
            q: '[JEE Main] By the method of worked example 3, a 9 V battery drives a 1 Ω resistor in series with a parallel pair of 4 Ω and 4 Ω. Find the total current and the voltage across the parallel section.',
            a: 'Total 3 A; parallel voltage 6 V',
          },
          {
            q: '[JEE Main] A total current of 6 A enters a parallel combination of 2 Ω and 4 Ω. Find the current in each branch.',
            a: '4 A through 2 Ω, 2 A through 4 Ω',
          },
          {
            q: '[JEE Advanced] Twelve identical resistors, each <i>R</i>, form the edges of a cube. Find the equivalent resistance between two diagonally opposite corners (the body diagonal).',
            a: '5<i>R</i>/6',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The equivalent resistance of a parallel combination of resistors is always:',
        opts: [
          { label: 'larger than the largest resistor.', nudge: '<b>(A)</b> and <b>(D)</b> describe series behaviour.' },
          {
            label: 'equal to their average.',
            nudge: '<b>(B)</b> the average has no physical basis here (parallel uses reciprocals, not arithmetic means).',
          },
          { label: 'smaller than the smallest resistor.', nudge: null },
          { label: 'equal to their sum.', nudge: '<b>(A)</b> and <b>(D)</b> describe series behaviour.' },
        ],
        correct: 2,
        solution: 'Adding parallel paths gives current more routes, so <i>R</i><sub>p</sub> is always below the smallest branch.',
      },
      {
        t: 'mcq',
        q: '<i>n</i> identical resistors give a series resistance <i>R</i><sub>s</sub> and a parallel resistance <i>R</i><sub>p</sub>. The ratio <i>R</i><sub>s</sub> ∶ <i>R</i><sub>p</sub> equals:',
        opts: [
          { label: '<i>n</i>', nudge: '<b>(A)</b> counts only one of the two factors of <i>n</i>.' },
          { label: '<i>n</i><sup>2</sup>', nudge: null },
          { label: '1', nudge: '<b>(C)</b> and <b>(D)</b> invert or cancel incorrectly.' },
          { label: '1/<i>n</i><sup>2</sup>', nudge: '<b>(C)</b> and <b>(D)</b> invert or cancel incorrectly.' },
        ],
        correct: 1,
        solution: '<i>R</i><sub>s</sub> = <i>nR</i>, <i>R</i><sub>p</sub> = <i>R</i>/<i>n</i>, so <i>R</i><sub>s</sub>/<i>R</i><sub>p</sub> = <i>n</i><sup>2</sup>.',
      },
      {
        t: 'mcq',
        q: 'In a current divider, more current flows through the branch with:',
        opts: [
          { label: 'the higher resistance.', nudge: '<b>(A)</b> is backwards.' },
          { label: 'the lower resistance.', nudge: null },
          { label: 'the longer length only.', nudge: '<b>(C)</b> length matters only through resistance, not by itself.' },
          {
            label: 'equal current always.',
            nudge: '<b>(D)</b> current splits equally only if the resistances are equal.',
          },
        ],
        correct: 1,
        solution: 'Current prefers the path of least resistance — the formula puts the opposite resistor on top, so the smaller branch carries more.',
      },
      {
        t: 'mcq',
        q: 'A 6 Ω and a 3 Ω resistor are in parallel; this combination is in series with a 4 Ω resistor. The total equivalent resistance is:',
        opts: [
          { label: '13 Ω', nudge: '<b>(A)</b> wrongly adds all three in series.' },
          { label: '6 Ω', nudge: null },
          { label: '2 Ω', nudge: '<b>(C)</b> stops after the parallel step and forgets the series 4 Ω.' },
          { label: '9 Ω', nudge: '<b>(D)</b> adds the 6 Ω and 3 Ω in series (9 Ω) and ignores the 4 Ω.' },
        ],
        correct: 1,
        solution: 'Parallel pair = (6 × 3)/9 = 2 Ω; in series with 4 Ω gives 6 Ω.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting to invert in parallel.</b> 1/<i>R</i><sub>p</sub> = ∑ 1/<i>R</i><sub><i>i</i></sub> gives 1/<i>R</i><sub>p</sub>, not <i>R</i><sub>p</sub>. Take the reciprocal at the end. Many students report 1/<i>R</i><sub>p</sub> as the answer.',
          '<b>Calling side-by-side resistors “parallel.”</b> They are parallel only if they share both end nodes. Check the actual connections, not the drawing’s layout.',
          '<b>Putting the same resistor on top in the current divider.</b> The branch’s current uses the other resistor on top: <i>I</i><sub>1</sub> = <i>IR</i><sub>2</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>).',
          '<b>Reducing across a bridge.</b> If a network has a “bridging” resistor between two midpoints, it’s usually not reducible by series/parallel — use the balance check or Kirchhoff.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & sanity):</b> Before computing, predict the direction: any series result must exceed the largest resistor; any parallel result must be below the smallest. For two resistors, “product over sum” is fastest; for many equal resistors, use <i>nR</i> and <i>R</i>/<i>n</i> directly. Always finish with a current-conservation check (∑ <i>I</i><sub>branch</sub> = <i>I</i><sub>total</sub>).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Series',
            note: '<i>R</i><sub>s</sub> = ∑ <i>R</i><sub><i>i</i></sub>; same current; voltage divides. Result > largest resistor.',
          },
          {
            f: 'Parallel',
            note: '1/<i>R</i><sub>p</sub> = ∑ 1/<i>R</i><sub><i>i</i></sub>; same voltage; current divides. Result < smallest resistor.',
          },
          {
            f: 'Two in parallel',
            note: '<i>R</i><sub>p</sub> = <i>R</i><sub>1</sub><i>R</i><sub>2</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>) (product over sum).',
          },
          {
            f: 'Voltage divider',
            note: '<i>V</i><sub>1</sub> = <i>VR</i><sub>1</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>). <b>Current divider:</b> <i>I</i><sub>1</sub> = <i>IR</i><sub>2</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>) (opposite on top).',
          },
          { f: '<i>n</i> equal <i>R</i>', note: 'series <i>nR</i>, parallel <i>R</i>/<i>n</i>, ratio <i>n</i><sup>2</sup>.' },
          {
            f: 'Infinite ladder (series <i>R</i>, shunt <i>R</i>)',
            note: '<i>X</i> = ((1 + √5)/2)<i>R</i>. <b>Cube (body diagonal):</b> 5<i>R</i>/6.',
          },
        ],
        aids: [
          '“Series adds, parallel eases.”',
          '“Parallel is always less than the least.”',
          'Current divider: “the other one rides on top.”',
        ],
      },
    ],
  },
];
