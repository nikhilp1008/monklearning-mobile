import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Topics 05 and 06, pp. 712–725 of the Class 11 Physics Master
 * Reference, word for word: Thermometry, the Ideal-Gas Equation & Absolute
 * Temperature (pp. 712 to 717) and Change of State: Phase Transitions, Triple
 * Point & Phase Diagrams (pp. 718 to 725), each split at the book's Sections 1
 * to 8. p. 711 (the "Part II" title and contents) is not copied. Figure 10.6
 * (caption p. 720, drawn on p. 721).
 */
export const TOPICS: Topic[] = [
  {
    n: '05',
    title: 'Thermometry, the Ideal-Gas Equation & Absolute Temperature',
    kalam: 'You cannot read temperature directly — you read it through some property of a substance that changes reproducibly with hotness.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A reliable source of definition and short-numerical marks. CBSE Boards regularly ask the definition of the triple point, the ideal-gas equation, absolute zero, or a thermometer’s thermometric property (1–3 marks). JEE Main occasionally sets a constant-volume gas-thermometer or a gas-law numerical (find the new pressure/temperature). NEET favours conceptual MCQs — which thermometer suits a given range, why absolute zero is unreachable, why dilute gases all agree. JEE Advanced rarely asks it standalone but uses absolute temperature as the gateway to kinetic theory and thermodynamics, so a clean grasp here pays off across three chapters.',
      },
      {
        t: 'p',
        html: 'Topic 01 told you what temperature is and how to convert between scales. This topic answers the next question: how do we actually measure it, and where does the absolute (Kelvin) scale come from?',
      },
      {
        t: 'p',
        html: 'You cannot read temperature directly — you read it through some property of a substance that changes reproducibly with hotness. Such a property is called a <b>thermometric property</b>, and the device built around it is a thermometer. The mercury-in-glass thermometer uses the length of a mercury column; a constant-volume gas thermometer uses the pressure of a trapped gas; a platinum resistance thermometer uses electrical resistance; a thermocouple uses a tiny thermo-emf; and a radiation pyrometer uses the radiation emitted by a very hot body (so it needs no contact at all). The same differential-expansion idea even runs your geyser’s thermostat — a bimetallic strip of two metals with different <i>α</i> bends as it heats and trips a switch.',
      },
      {
        t: 'p',
        html: 'To turn a property into a number you need calibration: two reproducible <b>fixed points</b>. The classic pair are the ice point (melting ice at 1 atm, 0°C) and the steam point (boiling water at 1 atm, 100°C). Mark the property at both, divide the span into 100 equal parts, and you have a Celsius thermometer. So far, so neat.',
      },
      {
        t: 'p',
        html: 'Here is the subtlety that forced physicists to find a better standard. A mercury thermometer and an alcohol thermometer, both perfectly calibrated at 0° and 100°, will disagree slightly at, say, 50° — because mercury and alcohol do not expand in exactly the same non-linear way in between. Which one tells the “true” temperature? Neither, exactly. The escape is the <b>gas thermometer</b>: experiment shows that as you make a gas more and more dilute (lower pressure, approaching ideal behaviour), all gases — hydrogen, helium, nitrogen — give the same temperature reading. That universality is why the ideal-gas temperature is adopted as the fundamental standard against which all other thermometers are checked.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A thermometer is a translator that converts invisible “hotness” into a visible number using some property as its language. Different translators (mercury, alcohol, resistance) speak slightly different dialects and disagree on the fine print. The dilute gas is the one translator everyone trusts, because in the thin-gas limit they all tell exactly the same story — so we make it the official language.',
      },
      {
        t: 'p',
        html: '<b>From gas laws to absolute temperature.</b> For a fixed mass of gas, three experimental laws hold in the ideal limit: Boyle’s law (<i>PV</i> = const at fixed <i>T</i>), Charles’s law (<i>V</i> ∝ <i>T</i> at fixed <i>P</i>), and Gay-Lussac’s law (<i>P</i> ∝ <i>T</i> at fixed <i>V</i>). Plot the pressure of a fixed-volume gas against Celsius temperature and you get a straight line. Extend that line backward (extrapolate) and it crosses zero pressure at −273.15°C — and astonishingly, gases of every kind extrapolate to the same point. A gas can have no less than zero pressure, so this common intercept is the coldest conceivable temperature: <b>absolute zero</b>. Shifting the origin to this point defines the <b>Kelvin scale</b>, on which pressure (or volume) is simply proportional to temperature. Combining the three laws gives the <b>ideal-gas equation</b> <i>PV</i> = <i>nRT</i> — the cleanest relationship in all of thermal physics, and the reason the gas thermometer is so fundamental.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions:</b><br>• The ideal-gas laws hold only at low pressure and high temperature (far from liquefaction). Real gases deviate near condensation; that is why the dilute limit is the one used for the standard.<br>• Absolute zero can be approached but never reached — it is an extrapolated limit, not an attainable state.<br>• Each practical thermometer has a useful range set by its substance (mercury freezes at −39°C; a radiation pyrometer is needed above ∼ 1000°C). Using one outside its range gives nonsense.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Thermometric (linear) relation',
        main: 'temperature <i>t</i> from a property <i>X</i> calibrated at the ice (<i>X</i><sub>0</sub>) and steam (<i>X</i><sub>100</sub>) points:<br><i>t</i> = (<i>X</i><sub><i>t</i></sub> − <i>X</i><sub>0</sub>)/(<i>X</i><sub>100</sub> − <i>X</i><sub>0</sub>) × 100 °C',
        legend: [],
        note: '(For scale-to-scale conversion — C, F, K, Réaumur — see Topic 01.)',
      },
      {
        t: 'formula',
        kicker: 'Constant-volume gas thermometer',
        main: '(single fixed point: triple point of water, 273.16 K):<br><i>T</i> = 273.16 × <i>P</i>/<i>P</i><sub>tr</sub> K',
        legend: [
          '<i>P</i><sub>tr</sub> = the gas pressure at the triple point',
          '<i>P</i> = the pressure at the measured temperature',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Absolute zero',
        main: '0 K = −273.15 °C',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'The gas laws (fixed mass of ideal gas)',
        main: 'Boyle: <i>PV</i> = const (<i>T</i> fixed)<br>Charles: <i>V</i>/<i>T</i> = const (<i>P</i> fixed)<br>Gay-Lussac: <i>P</i>/<i>T</i> = const (<i>V</i> fixed)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Ideal-gas equation',
        main: '<i>PV</i> = <i>nRT</i> = <i>Nk</i><sub><i>B</i></sub><i>T</i><br><i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup><br><i>k</i><sub><i>B</i></sub> = 1.38 × 10<sup>−23</sup> J K<sup>−1</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Coefficient of expansion of an ideal gas at constant pressure',
        main: '<i>γ</i><sub>gas</sub> = 1/273.15 ≈ 3.66 × 10<sup>−3</sup> °C<sup>−1</sup>',
        legend: [],
        note: '(same for all ideal gases — far larger than for solids).',
      },
      {
        t: 'formula',
        kicker: 'Triple point of water',
        main: 'the unique state where ice, water and vapour coexist:<br><i>T</i><sub>tr</sub> = 273.16 K, <i>P</i><sub>tr</sub> = 611.7 Pa ≈ 4.58 mm Hg',
        legend: [],
        note: 'The kelvin is defined as 1/273.16 of this temperature.',
      },
      {
        t: 'table',
        title: 'Common thermometers and their working ranges',
        head: ['Thermometer', 'Thermometric property', 'Approx. range'],
        rows: [
          ['Mercury-in-glass', 'length of mercury column', '−39 to 357 °C'],
          ['Alcohol-in-glass', 'length of alcohol column', 'down to ≈ −115 °C (low temps)'],
          ['Constant-volume gas', 'pressure of a fixed gas', '−270 to 1500 °C (standard)'],
          ['Platinum resistance', 'electrical resistance', '−200 to 1200 °C (accurate)'],
          ['Thermocouple', 'thermo-emf of a junction', '−200 to 1600 °C'],
          ['Radiation pyrometer', 'emitted radiation (no contact)', 'above ≈ 1000 °C'],
        ],
      },

      { t: 'part', title: 'CBSE derivation / key procedures — Absolute zero from a gas thermometer' },
      {
        t: 'p',
        html: '<b>Goal:</b> show that extrapolating a fixed-volume gas’s pressure to zero defines a universal coldest temperature, −273.15°C, and that this fixes the absolute scale.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — the experimental fact.</b> For a fixed mass of gas at fixed volume, the pressure varies linearly with Celsius temperature:<br><i>P</i><sub><i>t</i></sub> = <i>P</i><sub>0</sub>(1 + <i>γt</i>),<br>where <i>P</i><sub>0</sub> is the pressure at 0°C and <i>γ</i> is the (measured) pressure coefficient at constant volume (for an ideal gas it has the same value as <i>γ</i><sub>gas</sub>). Experiment gives the same <i>γ</i> = 1/273.15 °C<sup>−1</sup> for every dilute gas.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — find where the pressure would vanish.</b> A gas cannot push with negative pressure, so the physically lowest temperature is where <i>P</i><sub><i>t</i></sub> = 0:<br>0 = <i>P</i><sub>0</sub>(1 + <i>t</i>/273.15) ⇒ <i>t</i> = −273.15 °C.<br>Because <i>γ</i> is the same for all gases, every gas extrapolates to this same intercept — a strong hint that it is a property of temperature itself, not of any particular gas.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — shift the origin (define Kelvin).</b> Set <i>T</i> = <i>t</i> + 273.15. Then <i>t</i> = −273.15°C becomes <i>T</i> = 0, and the relation collapses to a pure proportionality:<br><i>P</i><sub><i>t</i></sub> = <i>P</i><sub>0</sub>(273.15 + <i>t</i>)/273.15 = <i>P</i><sub>0</sub><i>T</i>/<i>T</i><sub>0</sub> (with <i>T</i><sub>0</sub> = 273.15 K) ⇒ <i>P</i> ∝ <i>T</i>.<br>This is exactly Gay-Lussac’s law in its cleanest form, and it is why the Kelvin scale — not Celsius — is the natural language of gas behaviour.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — adopt a single fixed point.</b> Once <i>P</i> ∝ <i>T</i>, one reference suffices. The modern choice is the triple point of water, assigned <i>T</i><sub>tr</sub> = 273.16 K, giving the working formula of the constant-volume gas thermometer:<br><i>T</i> = 273.16 × <i>P</i>/<i>P</i><sub>tr</sub> K.',
      },
      {
        t: 'p',
        html: '<b>Physical reading:</b> absolute zero is not “where the gas freezes” — it is the extrapolated point of zero pressure, the temperature at which (classically) all molecular translational motion would cease. It is a limit set by nature, the same for every substance.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A constant-volume gas thermometer registers a pressure of 80 mm Hg when its bulb is at the triple point of water. When the bulb is placed in a hot bath the pressure rises to 100 mm Hg. Find the temperature of the bath.',
        steps: [
          '<i>T</i> = 273.16 × <i>P</i>/<i>P</i><sub>tr</sub> = 273.16 × 100/80',
          '<b>Note:</b> the gas thermometer needs only one fixed point (the triple point) because, once <i>P</i> ∝ <i>T</i>, a single reference fixes the whole scale — a small but elegant economy over the two-fixed-point Celsius construction.',
        ],
        ans: '<i>T</i> ≈ 341.5 K (≈ 68.3 °C).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A fixed mass of gas at 27°C is heated at constant pressure until its volume doubles. Find the final temperature.',
        steps: [
          '<b>The trap:</b> “volume doubles, so double 27” → 54°C. Charles’s law is <i>V</i> ∝ <i>T</i> with <i>T</i> in kelvin, never Celsius.',
          'Convert first: 27°C = 300 K. Then <i>V</i> ∝ <i>T</i> means doubling <i>V</i> doubles the absolute temperature:<br><i>T</i><sub>2</sub> = 2 × 300 = 600 K',
          '<b>Speed tip:</b> in every gas-law problem, convert to kelvin before taking any ratio. “Double the Celsius reading” is the single most common NEET error here, because the 273 offset quietly wrecks the proportion.',
        ],
        ans: '327 °C.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A sealed rigid vessel contains gas at 27°C and 1.0 atm. It is heated to 127°C. Find the new pressure. (Volume is constant.)',
        steps: [
          'Gay-Lussac’s law, <i>P</i> ∝ <i>T</i> at fixed <i>V</i>, with kelvin temperatures <i>T</i><sub>1</sub> = 300 K, <i>T</i><sub>2</sub> = 400 K:<br><i>P</i><sub>2</sub> = <i>P</i><sub>1</sub><i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> = 1.0 × 400/300 = 4/3',
          '<b>Insight:</b> a 100° rise sounds large but is only a 33% pressure increase, because on the absolute scale 300 → 400 K is a factor of 4/3, not the factor of ∼ 5 a Celsius (27 → 127) reading misleadingly suggests. Always reason in kelvin.',
        ],
        ans: '≈ 1.33 atm.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'In a constant-volume gas thermometer the gas pressure is 1.000 atm at the ice point (0°C) and 1.366 atm at the steam point (100°C). Treating <i>P</i> as a linear function of Celsius temperature, determine the value of absolute zero (in °C) implied by this data.',
        steps: [
          '<b>Step 1 — model.</b> Write <i>P</i> = <i>a</i> + <i>bt</i> with <i>t</i> in °C. At <i>t</i> = 0, <i>P</i> = 1.000, so <i>a</i> = 1.000.',
          '<b>Step 2 — slope from the second point.</b><br><i>b</i> = (<i>P</i><sub>100</sub> − <i>P</i><sub>0</sub>)/100 = (1.366 − 1.000)/100 = 3.66 × 10<sup>−3</sup> atm/°C.',
          '<b>Step 3 — extrapolate to <i>P</i> = 0.</b><br>0 = <i>a</i> + <i>bt</i><sub>0</sub> ⇒ <i>t</i><sub>0</sub> = −<i>a</i>/<i>b</i> = −1.000/(3.66 × 10<sup>−3</sup>)',
          '<b>Deep insight:</b> this is precisely how absolute zero was first pinned down — not by reaching it, but by extrapolating the straight <i>P</i>–<i>t</i> line of a dilute gas to the point of zero pressure. The ratio <i>P</i><sub>100</sub>/<i>P</i><sub>0</sub> = 1.366 = 373.15/273.15 is the experimental fingerprint of the absolute scale hiding inside Celsius data.',
        ],
        ans: 'absolute zero ≈ −273.2 °C — recovered from nothing but two pressure readings.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A constant-volume gas thermometer reads 90 mm Hg at the triple point. What pressure will it read at 0°C (the ice point, 273.15 K)?',
            a: '<i>P</i> = 90 × 273.15/273.16 ≈ 90.0 mm Hg (essentially unchanged; the triple point and ice point differ by only 0.01 K).',
          },
          {
            q: '[NEET] Express absolute zero (−273.15°C) on the Fahrenheit scale.',
            a: '<i>F</i> = (9/5)(−273.15) + 32 = −459.67 °F.',
          },
          {
            q: '[JEE Main] A gas occupies 2.0 L at 27°C and 1 atm. It is compressed to 1.0 L and warmed to 127°C. Find the new pressure.',
            a: '<i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>/<i>T</i><sub>2</sub> ⇒ <i>P</i><sub>2</sub> = 1 × 2.0/1.0 × 400/300 = 8/3 ≈ 2.67 atm.',
          },
          {
            q: '[JEE Main] A bubble of gas doubles in volume as it rises from the bottom of a lake to the surface, while the temperature rises from 7°C to 27°C. If atmospheric pressure is 76 cm Hg, find the depth of the lake (in cm of mercury equivalent of water pressure).',
            a: '<i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>/<i>T</i><sub>2</sub> with <i>T</i><sub>1</sub> = 280, <i>T</i><sub>2</sub> = 300, <i>V</i><sub>2</sub> = 2<i>V</i><sub>1</sub>: <i>P</i><sub>1</sub> = <i>P</i><sub>2</sub> · 2 · 280/300 = 76 · 2 · (280/300) = 141.9 cm Hg; lake pressure = <i>P</i><sub>1</sub> − 76 = 65.9 cm Hg (water column equivalent).',
          },
          {
            q: '[JEE Advanced] A constant-volume gas thermometer gives pressures <i>P</i><sub>1</sub> and <i>P</i><sub>2</sub> at the ice and steam points. Show that the Celsius temperature <i>t</i> for a measured pressure <i>P</i> is <i>t</i> = (<i>P</i> − <i>P</i><sub>1</sub>)/(<i>P</i><sub>2</sub> − <i>P</i><sub>1</sub>) × 100, and evaluate it for <i>P</i><sub>1</sub> = 1.00, <i>P</i><sub>2</sub> = 1.37, <i>P</i> = 1.10 atm.',
            a: 'By linear interpolation <i>t</i> = (<i>P</i> − <i>P</i><sub>1</sub>)/(<i>P</i><sub>2</sub> − <i>P</i><sub>1</sub>) × 100 = 0.10/0.37 × 100 ≈ 27.0 °C.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which thermometer is most suitable for measuring the temperature of molten metal in a furnace (∼ 1500°C)?',
        opts: [
          { label: 'mercury-in-glass', nudge: '<b>(a)</b> mercury boils at 357°C — all fail here.' },
          { label: 'alcohol-in-glass', nudge: '<b>(b)</b> alcohol far lower — all fail here.' },
          { label: 'radiation pyrometer', nudge: null },
          { label: 'clinical thermometer', nudge: '<b>(d)</b> clinical thermometers cover only the body range — all fail here.' },
        ],
        correct: 2,
        solution: 'A radiation pyrometer measures emitted radiation without contact and works at very high temperatures.',
      },
      {
        t: 'mcq',
        q: 'The reason a dilute (low-pressure) gas thermometer is chosen as the standard is that:',
        opts: [
          { label: 'gases are cheap.', nudge: '<b>(a)</b> is irrelevant: cost has nothing to do with being a standard.' },
          { label: 'all gases give the same reading in the ideal (dilute) limit.', nudge: null },
          { label: 'gas expands the most.', nudge: '<b>(c)</b> is irrelevant: a large expansion makes a gas sensitive, not substance-independent.' },
          { label: 'gases never liquefy.', nudge: '<b>(d)</b> is false: every gas liquefies if cooled enough.' },
        ],
        correct: 1,
        solution: 'In the low-pressure limit different gases agree exactly, so the reading is substance-independent — the hallmark of a true standard.',
      },
      {
        t: 'mcq',
        q: 'Absolute zero corresponds to:',
        opts: [
          { label: '0°C', nudge: '<b>(a)</b> confuses the zero of the Celsius scale (the ice point, 273.15 K) with absolute zero.' },
          { label: '−273.15°C, the extrapolated point of zero gas pressure/volume.', nudge: null },
          { label: 'the freezing point of every gas', nudge: '<b>(c)</b> confuses condensation with the extrapolated limit.' },
          { label: 'a temperature easily reached in the lab.', nudge: '<b>(d)</b> is false — it can be approached but not reached.' },
        ],
        correct: 1,
        solution: 'It is the common <i>P</i> → 0 (or <i>V</i> → 0) intercept of all gases.',
      },
      {
        t: 'mcq',
        q: 'For a fixed mass of ideal gas, which combination is correct?',
        opts: [
          {
            label: '<i>PV</i> = const at constant <i>T</i>; <i>V</i> ∝ <i>T</i> at constant <i>P</i>; <i>P</i> ∝ <i>T</i> at constant <i>V</i>.',
            nudge: null,
          },
          { label: '<i>PV</i> ∝ <i>T</i><sup>2</sup> always.', nudge: '<b>(b)</b> contradicts <i>PV</i> = <i>nRT</i>: <i>PV</i> ∝ <i>T</i>, not <i>T</i><sup>2</sup>.' },
          { label: '<i>P</i> ∝ <i>V</i> at constant <i>T</i>.', nudge: '<b>(c)</b> contradicts Boyle: at constant <i>T</i>, <i>P</i> ∝ 1/<i>V</i>.' },
          { label: '<i>V</i> ∝ 1/<i>T</i> at constant <i>P</i>.', nudge: '<b>(d)</b> contradicts Charles: at constant <i>P</i>, <i>V</i> ∝ <i>T</i>.' },
        ],
        correct: 0,
        solution: 'These are Boyle, Charles and Gay-Lussac respectively — the three pillars of <i>PV</i> = <i>nRT</i>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Using Celsius in a gas law.</b> <i>P</i> ∝ <i>T</i>, <i>V</i> ∝ <i>T</i> and <i>PV</i> = <i>nRT</i> all require kelvin. Convert before forming any ratio; the 273 offset is fatal in a proportion.',
          '<b>Thinking absolute zero is attainable.</b> It is an extrapolated limit. Real systems get arbitrarily close but never reach 0 K.',
          '<b>Confusing the three gas laws.</b> Hold the right variable fixed: Boyle (<i>T</i> fixed), Charles (<i>P</i> fixed), Gay-Lussac (<i>V</i> fixed). Mislabelling which is constant gives a wrong formula.',
          '<b>Mixing up triple point and ice point.</b> The triple point (273.16 K, low pressure, three phases coexisting) is not the ordinary ice point (273.15 K at 1 atm). They differ by 0.01 K — small, but the triple point is the defining fixed point of the kelvin.',
          '<b>Using a thermometer outside its range.</b> Mercury above 357°C or below −39°C is meaningless; pick the device whose substance spans the required range.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — always combine the gas laws as one identity.</b> For a fixed mass of gas between any two states, use <i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>/<i>T</i><sub>2</sub> (kelvin throughout). Every Boyle, Charles or Gay-Lussac question is just this with one quantity held fixed — one equation instead of three to remember.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Thermometry',
            note: 'measure temperature via a thermometric property (length, pressure, resistance, thermo-emf, radiation). Calibrate with fixed points (ice 0°C, steam 100°C).',
          },
          {
            f: 'Gas thermometer (standard)',
            note: '<i>T</i> = 273.16 <i>P</i>/<i>P</i><sub>tr</sub> K; all dilute gases agree.',
          },
          {
            f: 'Absolute zero',
            note: '0 K = −273.15°C, the <i>P</i> → 0 (or <i>V</i> → 0) extrapolation — unreachable.',
          },
          {
            f: 'Gas laws',
            note: 'Boyle <i>PV</i> = const (<i>T</i>), Charles <i>V</i> ∝ <i>T</i> (<i>P</i>), Gay-Lussac <i>P</i> ∝ <i>T</i> (<i>V</i>); combined <i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>/<i>T</i><sub>2</sub>; ideal gas <i>PV</i> = <i>nRT</i>, <i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>.',
          },
          { f: 'Triple point of water', note: '273.16 K, 611.7 Pa — defines the kelvin.' },
          {
            f: 'Gas expansion coefficient',
            note: '<i>γ</i><sub>gas</sub> = 1/273.15 ≈ 3.66 × 10<sup>−3</sup> °C<sup>−1</sup> (same for all ideal gases).',
          },
        ],
        aids: [
          '“Measure by a property, standardise by a gas, count from absolute zero in kelvin.”',
          'For the gas laws: “Boyle holds <i>T</i>, Charles holds <i>P</i>, Gay-Lussac holds <i>V</i>.”',
        ],
      },
    ],
  },

  {
    n: '06',
    title: 'Change of State: Phase Transitions, Triple Point & Phase Diagrams',
    kalam: 'A phase diagram is a map of which state a substance “prefers” at each pressure and temperature.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The richest source of conceptual marks in the chapter. NEET loves it — regelation/ice-skating, the pressure cooker, why food cooks slowly on mountains, sublimation (dry ice, camphor), cooling by evaporation (earthen pots, sweating), and the triple point. CBSE Boards ask definitions (sublimation, regelation, triple point), the effect of pressure on melting/boiling points, and short “explain why” answers (2–3 marks). JEE Main sets phase-diagram interpretation and occasional pressure-dependence reasoning; JEE Advanced pushes into the slope of the fusion curve and quantitative melting-point shift. The latent-heat numerics live in Topic 02 — this topic supplies the conceptual framework that those numbers sit inside.',
      },
      {
        t: 'p',
        html: 'In Topic 02 you learned to count the heat a phase change costs (<i>Q</i> = <i>mL</i>) and to budget it in mixing problems. But when and why a substance changes state — and how pressure shifts those transitions — is a separate, heavily tested story. That is this topic.',
      },
      {
        t: 'p',
        html: 'Matter exists in three common states, and a pure substance can move between them along three borders: melting/freezing (solid ⇌ liquid), vaporization/condensation (liquid ⇌ gas), and <b>sublimation</b> (solid ⇌ gas directly, with no liquid in between — dry ice, camphor, naphthalene balls, iodine). Each transition for a pure substance happens at a fixed temperature for a given pressure, while latent heat flows in or out.',
      },
      {
        t: 'p',
        html: '<b>Melting point and pressure.</b> For most substances the melting point rises as pressure increases — squeezing favours the denser solid. Water is the famous rebel: ice is less dense than liquid water (it expands on freezing, which is why pipes burst), so for water the melting point falls with pressure. This single fact powers <b>regelation</b>: press a fine wire over an ice block and the high pressure under the wire lowers the local melting point, the ice melts, the wire sinks through — and the water refreezes above it once the pressure is gone, leaving the block whole. It is also the textbook (if slightly oversimplified) story of why ice is slippery under a skate.',
      },
      {
        t: 'p',
        html: '<b>Boiling point and pressure.</b> A liquid boils when its saturated vapour pressure equals the external pressure. Raise the external pressure and you must reach a higher temperature to boil — this is the <b>pressure cooker</b>: trapped steam raises the internal pressure, the boiling point climbs above 100°C, and food cooks faster in the hotter water. Conversely, high in the mountains the air pressure is low, water boils below 100°C, and food (cooked in cooler water) takes longer.',
      },
      {
        t: 'p',
        html: '<b>The triple point and the phase diagram.</b> Plot pressure against temperature and you get a <b>phase (<i>P</i>–<i>T</i>) diagram</b>: three regions (solid, liquid, gas) separated by three curves (fusion, vaporization, sublimation). All three curves meet at one special point — the <b>triple point</b> — the only pressure and temperature at which solid, liquid and vapour coexist in equilibrium (for water, 273.16 K and 611.7 Pa). The vaporization curve does not go on forever; it ends at the <b>critical point</b> (for water, 647 K, 22.1 MPa). Above the critical temperature there is no liquid–gas distinction at all — you cannot liquefy a gas by pressure alone, no matter how hard you squeeze.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A phase diagram is a map of which state a substance “prefers” at each pressure and temperature. The curves are borderlines where two states are tied; cross a border and the substance switches state. The triple point is the one address on the map where all three territories meet at a single corner. Whether the fusion border leans left (water) or right (most substances) is the whole secret behind regelation.',
      },
      {
        t: 'p',
        html: '<b>Evaporation versus boiling.</b> Boiling is a bulk phenomenon at the boiling point — bubbles form throughout the liquid. <b>Evaporation</b> happens only at the surface and at any temperature: the fastest molecules escape, leaving the rest cooler. That is why evaporation cools — sweat evaporating cools your skin, water seeping through a porous earthen pot (matka) keeps the water inside cool, and a desert cooler works by evaporating water into dry air. Evaporation speeds up with higher temperature, larger surface area, drier air (low humidity) and moving air (wind).',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions:</b><br>• Phase diagrams and fixed transition temperatures apply to pure substances; impurities and dissolved solutes shift melting and boiling points (salt lowers ice’s melting point; dissolved solids raise the boiling point).<br>• Latent heats themselves vary slightly with pressure and temperature; the values in Topic 02 are the standard-pressure figures.<br>• Regelation requires the anomalous (ice-like) behaviour — a melting point that falls with pressure. Substances whose melting point rises with pressure do not regelate.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Latent heat (recap from Topic 02)',
        main: '<i>Q</i> = <i>mL</i>, with <i>L</i><sub><i>f</i></sub>(ice) = 80 cal/g ≈ 3.36 × 10<sup>5</sup> J/kg<br>and <i>L</i><sub><i>v</i></sub>(water) = 540 cal/g = 2.26 × 10<sup>6</sup> J/kg',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Melting point vs pressure',
        main: 'water — decreases (≈ −0.0075 °C per atm); most substances — increases',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Boiling point vs pressure',
        main: 'increases with external pressure (pressure cooker); decreases at high altitude (low pressure)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Triple point of water',
        main: '<i>T</i> = 273.16 K, <i>P</i> = 611.7 Pa (≈ 4.58 mm Hg)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Critical point of water',
        main: '<i>T</i><sub><i>c</i></sub> = 647 K (374°C), <i>P</i><sub><i>c</i></sub> = 22.1 MPa (≈ 218 atm)',
        legend: [],
        note: 'above <i>T</i><sub><i>c</i></sub> no liquefaction by pressure.',
      },
      {
        t: 'formula',
        kicker: 'Clausius–Clapeyron relation (qualitative, slope of a phase boundary)',
        main: 'd<i>P</i>/d<i>T</i> = <i>L</i>/(<i>T</i> Δ<i>V</i>)',
        legend: ['Δ<i>V</i> = the volume change in the transition'],
        note: 'For water’s fusion curve Δ<i>V</i> < 0 (ice → water shrinks), so d<i>P</i>/d<i>T</i> < 0 — the fusion line slopes backward, explaining the falling melting point. (Computing with it is beyond the core syllabus, but the sign is the key insight.)',
      },
      {
        t: 'def',
        term: 'Sublimation',
        html: 'solid → gas directly; occurs when the substance’s triple-point pressure is above the ambient pressure (e.g. CO<sub>2</sub>: triple point 5.1 atm, so at 1 atm dry ice sublimes rather than melts).',
      },

      { t: 'part', title: 'CBSE derivation / key procedures — Reading the phase diagram' },
      {
        t: 'p',
        html: 'There is no single algebraic derivation here; the skill is reading the <i>P</i>–<i>T</i> map and reasoning from it. Here is the reliable framework, in the style of a board “explain with diagram” answer.',
      },
      { t: 'fig', id: 'p11-10-fig-10.6' },
      {
        t: 'p',
        html: '<b>Step 1 — locate the three regions and three borders.</b> Each region is a single stable state; each curve is a two-phase equilibrium (the substance can sit as either phase, or a mix, along the curve). Crossing a curve = a phase change.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — read the triple point.</b> Where all three curves meet, all three phases coexist. This is a fixed, reproducible state, which is exactly why it anchors the kelvin (Topic 05).',
      },
      {
        t: 'p',
        html: '<b>Step 3 — use the slope of the fusion curve.</b> A positive slope (most substances) means raising pressure raises the melting point. A negative slope (water) means raising pressure lowers it — the basis of regelation. The sign comes straight from d<i>P</i>/d<i>T</i> = <i>L</i>/(<i>T</i> Δ<i>V</i>) and whether the solid is denser (Δ<i>V</i> > 0) or less dense (Δ<i>V</i> < 0) than the liquid.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — explain everyday effects by moving along a line.</b><br>• Pressure cooker: move up the vaporization curve — higher <i>P</i> meets it at higher <i>T</i>, so water boils above 100°C.<br>• Mountain cooking: move down the vaporization curve — lower <i>P</i> meets it at lower <i>T</i>, so water boils below 100°C.<br>• Dry ice: at 1 atm, below CO<sub>2</sub>’s triple-point pressure, a horizontal line crosses only the sublimation curve — solid goes straight to gas.',
      },
      {
        t: 'p',
        html: '<b>Why this matters:</b> almost every conceptual question in this topic is answered by locating a point on this map and sliding along a constant-pressure or constant-temperature line to see which border you cross.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Explain, with reference to boiling point and pressure, why food cooks faster in a pressure cooker than in an open pan, and why it cooks more slowly at a high-altitude hill station.',
        steps: [
          'Answer. A liquid boils when its saturated vapour pressure equals the surrounding pressure. In a pressure cooker the trapped steam raises the internal pressure well above 1 atm, so the boiling point of water climbs above 100°C. Food sits in hotter water, and the higher temperature speeds up cooking. At a hill station the atmospheric pressure is lower than at sea level, so water boils below 100°C; the cooler boiling water transfers heat to the food more slowly, and cooking takes longer.',
          '<b>Teaching point:</b> the controlling variable is always temperature of the boiling water, and that temperature is set by pressure. “Higher pressure ⇒ higher boiling point ⇒ faster cooking” is the whole chain.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A copper wire carrying heavy weights at its two ends is hung over a slab of ice. After some time the wire is found to have passed completely through the slab, yet the slab remains a single solid block. Name and explain the phenomenon.',
        steps: [
          '<b>The trap:</b> “the wire cut/sawed through the ice.” It did not cut — the ice melted and refroze.',
          'Answer — regelation. The large pressure directly beneath the wire lowers the melting point of the ice there (water’s melting point falls with pressure), so the ice melts under the wire and lets it sink. Above the wire, where the pressure is released, the water is below the normal melting point again, so it refreezes — releasing its latent heat, which conveniently supplies the heat needed to melt the ice just ahead of the wire. The wire descends through the block, which re-fuses behind it and stays whole.',
          '<b>Speed insight:</b> regelation works only because ice’s melting point falls with pressure (the water anomaly). A substance whose melting point rises with pressure would not let the wire through. Any option attributing it to “cutting” or “friction heat” is wrong on sight.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Solid carbon dioxide (“dry ice”) has a triple point at 216.6 K and 5.1 atm. Explain, using a phase-diagram argument, why dry ice at ordinary atmospheric pressure (1 atm) turns directly into gas without ever becoming a liquid.',
        steps: [
          'Answer. On the CO<sub>2</sub> phase diagram, the triple point sits at 5.1 atm — well above 1 atm. A liquid phase exists only at pressures above the triple-point pressure (the liquid region lies above the triple point). At 1 atm a horizontal line lies below the triple point, so as the solid warms it crosses only the <b>sublimation curve</b> (solid → vapour) and never enters the liquid region. Hence dry ice sublimes directly to gas at 1 atm. To obtain liquid CO<sub>2</sub> you must first raise the pressure above 5.1 atm.',
          '<b>Insight:</b> the rule generalises — a substance sublimes at any ambient pressure below its triple-point pressure. Water’s triple-point pressure is only ∼ 0.006 atm, far below 1 atm, which is why water normally melts rather than sublimes; CO<sub>2</sub>’s is far above 1 atm, so it sublimes.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Estimate the change in the melting point of ice when the pressure is increased by 1 atm. Use the Clausius–Clapeyron relation d<i>P</i>/d<i>T</i> = <i>L</i>/(<i>T</i> Δ<i>V</i>) with <i>T</i> = 273 K, <i>L</i><sub><i>f</i></sub> = 3.36 × 10<sup>5</sup> J/kg, <i>ρ</i><sub>ice</sub> = 917 kg/m<sup>3</sup>, <i>ρ</i><sub>water</sub> = 1000 kg/m<sup>3</sup>. Comment on the sign.',
        steps: [
          '<b>Step 1 — volume change per kg on melting (ice → water):</b><br>Δ<i>V</i> = 1/<i>ρ</i><sub>water</sub> − 1/<i>ρ</i><sub>ice</sub> = 1/1000 − 1/917 = 1.000 × 10<sup>−3</sup> − 1.0905 × 10<sup>−3</sup> = −9.05 × 10<sup>−5</sup> m<sup>3</sup>/kg.',
          'Δ<i>V</i> < 0 because water is denser than ice — the substance shrinks on melting.',
          '<b>Step 2 — invert Clausius–Clapeyron for d<i>T</i>/d<i>P</i>:</b><br>d<i>T</i>/d<i>P</i> = <i>T</i> Δ<i>V</i>/<i>L</i> = (273)(−9.05 × 10<sup>−5</sup>)/(3.36 × 10<sup>5</sup>) = −7.35 × 10<sup>−8</sup> K/Pa.',
          '<b>Step 3 — multiply by Δ<i>P</i> = 1 atm = 1.013 × 10<sup>5</sup> Pa:</b><br>Δ<i>T</i> = (d<i>T</i>/d<i>P</i>) Δ<i>P</i> = (−7.35 × 10<sup>−8</sup>)(1.013 × 10<sup>5</sup>)',
          '<b>Deep insight:</b> the negative sign is the entire point — it traces directly to Δ<i>V</i> < 0, the fact that ice is less dense than water. This tiny but real drop is what makes regelation possible and is the quantitative face of water’s most famous anomaly. For a normal substance (Δ<i>V</i> > 0) the same relation gives a melting point that rises with pressure.',
        ],
        ans: 'the melting point falls by about 0.0074 °C per atmosphere.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define (i) sublimation, (ii) the triple point of a substance, and (iii) regelation. Give one everyday example of each.',
            a: '(i) Sublimation — solid → gas directly (dry ice, camphor). (ii) Triple point — the unique <i>P</i>, <i>T</i> where solid, liquid and vapour coexist (water: 273.16 K, 611.7 Pa). (iii) Regelation — melting under pressure and refreezing on its release (a loaded wire passing through ice).',
          },
          {
            q: '[NEET] A wet cloth wrapped around a water bottle keeps it cooler than a dry one in a hot, dry breeze. Name the effect and state two factors that make it stronger.',
            a: 'Cooling by evaporation; stronger with lower humidity and faster air movement (also higher temperature and larger exposed surface).',
          },
          {
            q: '[JEE Main] The triple point of water is 273.16 K at 0.006 atm. Explain why, at the much higher 1 atm, water has a distinct liquid range between 0°C and 100°C rather than subliming.',
            a: 'At 1 atm the pressure is far above the triple-point pressure, so a constant-pressure line crosses both the fusion and vaporization curves — giving a solid→liquid melt at 0°C and a liquid→gas boil at 100°C, with a genuine liquid range between.',
          },
          {
            q: '[JEE Main] A sealed flask half-filled with water is heated. Describe what happens to the boiling point as heating continues in the sealed (rising-pressure) flask, and why.',
            a: 'The boiling point rises: the trapped vapour raises the internal pressure, and a higher external pressure requires a higher temperature for the vapour pressure to match it.',
          },
          {
            q: '[JEE Advanced] Using d<i>P</i>/d<i>T</i> = <i>L</i>/(<i>T</i> Δ<i>V</i>), explain qualitatively why the vaporization curve (liquid–gas) on a <i>P</i>–<i>T</i> diagram is far less steep than the fusion curve (solid–liquid). (Hint: compare the Δ<i>V</i> values for the two transitions.)',
            a: 'For vaporization Δ<i>V</i> is huge (liquid → gas expands enormously), making d<i>P</i>/d<i>T</i> = <i>L</i>/(<i>T</i> Δ<i>V</i>) small — a gently sloping curve. For fusion Δ<i>V</i> is tiny (solid → liquid changes volume only slightly), making d<i>P</i>/d<i>T</i> large — a steep, nearly vertical curve.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The melting point of ice with increasing external pressure:',
        opts: [
          { label: 'increases', nudge: '<b>(a)</b> is true for most other substances, the classic trap.' },
          { label: 'decreases', nudge: null },
          { label: 'stays constant', nudge: '<b>(c)</b> ignores the effect of pressure: squeezing ice lowers its melting point (about 0.0075 °C per atm).' },
          { label: 'first rises, then falls', nudge: '<b>(d)</b> invents a turnaround; ice’s melting point falls steadily as pressure rises.' },
        ],
        correct: 1,
        solution: 'Ice is less dense than water (Δ<i>V</i> < 0 on melting), so by d<i>P</i>/d<i>T</i> = <i>L</i>/(<i>T</i> Δ<i>V</i>) the melting point falls with pressure — the basis of regelation.',
      },
      {
        t: 'mcq',
        q: 'Water boils at a temperature below 100°C when:',
        opts: [
          { label: 'the external pressure is increased', nudge: '<b>(a)</b> and <b>(d)</b> raise the pressure and the boiling point.' },
          { label: 'the external pressure is decreased (e.g. at high altitude)', nudge: null },
          { label: 'salt is added', nudge: '<b>(c)</b> raises the boiling point.' },
          { label: 'the container is sealed', nudge: '<b>(a)</b> and <b>(d)</b> raise the pressure and the boiling point.' },
        ],
        correct: 1,
        solution: 'Lower external pressure means the vapour pressure matches it at a lower temperature.',
      },
      {
        t: 'mcq',
        q: 'At the triple point of a substance:',
        opts: [
          { label: 'only solid and liquid coexist', nudge: '<b>(a)</b> describes the fusion curve, an ordinary two-phase line, not the triple point.' },
          { label: 'only liquid and vapour coexist', nudge: '<b>(b)</b> describes the vaporization curve, an ordinary two-phase line, not the triple point.' },
          { label: 'solid, liquid and vapour coexist in equilibrium', nudge: null },
          { label: 'the substance cannot exist', nudge: '<b>(d)</b> is false: at the triple point the substance exists in all three phases at once.' },
        ],
        correct: 2,
        solution: 'The triple point is the unique <i>P</i>, <i>T</i> where all three phases coexist — which is why it is used to define the kelvin.',
      },
      {
        t: 'mcq',
        q: 'Evaporation differs from boiling in that evaporation:',
        opts: [
          { label: 'occurs only at the boiling point', nudge: '<b>(a)</b> and <b>(b)</b> describe boiling.' },
          { label: 'occurs throughout the bulk of the liquid', nudge: '<b>(a)</b> and <b>(b)</b> describe boiling.' },
          { label: 'occurs only at the liquid surface and at any temperature, and cools the liquid', nudge: null },
          { label: 'releases heat to the liquid', nudge: '<b>(d)</b> reverses the cooling effect.' },
        ],
        correct: 2,
        solution: 'Evaporation is a surface phenomenon at all temperatures; the most energetic molecules leave, lowering the average energy and cooling the remaining liquid.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Assuming every melting point rises with pressure.</b> Water is the great exception (Δ<i>V</i> < 0): its melting point falls. Check whether the solid is denser or less dense than the liquid before guessing the sign.',
          '<b>Calling regelation “cutting.”</b> The wire never cuts the ice — the ice melts under pressure and refreezes when the pressure is released. The block stays whole.',
          '<b>Confusing the triple point with the ice/boiling point.</b> The triple point is a single <i>P</i>, <i>T</i> (low pressure, three phases), not the 1 atm melting or boiling point.',
          '<b>Thinking a gas can always be liquefied by pressure.</b> Above the critical temperature, no amount of pressure produces a liquid — the liquid–gas border simply ends at the critical point.',
          '<b>Mixing up evaporation and boiling.</b> Evaporation: surface, any temperature, cools the liquid. Boiling: bulk, at the boiling point, requires continuous heat input.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — solve conceptual questions on the phase map.</b> Sketch a quick <i>P</i>–<i>T</i> diagram, mark the triple and critical points, and slide along a constant-pressure (horizontal) or constant-temperature (vertical) line to see which border you cross. Pressure cooker, mountain cooking, dry-ice sublimation, and regelation all fall out of this one picture — no formula needed.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Three transitions',
            note: 'melting/freezing, vaporization/condensation, sublimation (solid↔gas). Each absorbs/releases latent heat <i>Q</i> = <i>mL</i> at constant <i>T</i> (Topic 02).',
          },
          {
            f: 'Melting point vs pressure',
            note: 'water decreases (Δ<i>V</i> < 0); most substances increase. Basis of <b>regelation</b>.',
          },
          {
            f: 'Boiling point vs pressure',
            note: 'increases with pressure (pressure cooker), decreases at altitude (slow mountain cooking).',
          },
          {
            f: 'Triple point (water)',
            note: '273.16 K, 611.7 Pa — all three phases coexist; defines the kelvin. <b>Critical point (water):</b> 647 K, 22.1 MPa — above it, no liquefaction by pressure.',
          },
          {
            f: '<b>Sublimation</b> occurs when ambient pressure is below the triple-point pressure (CO<sub>2</sub> at 1 atm).',
            note: '',
          },
          {
            f: 'Evaporation',
            note: 'surface phenomenon at any temperature; cools the liquid (sweating, matka, desert cooler); faster with heat, area, low humidity, wind.',
          },
          {
            f: 'Clausius–Clapeyron (sign only)',
            note: 'd<i>P</i>/d<i>T</i> = <i>L</i>/(<i>T</i> Δ<i>V</i>) — Δ<i>V</i> < 0 for water’s fusion gives the backward-sloping curve.',
          },
        ],
        aids: [
          '“Squeeze ice and it melts; squeeze water and it boils hotter.”',
          '“Triple point: all three at one corner.”',
          '“Evaporation cools, boiling needs heat.”',
        ],
      },
    ],
  },
];
