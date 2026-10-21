import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Topics 01 and 02: pp. 676–692 of the Class 11 Physics Master
 * Reference, word for word: Temperature, Heat and Expansion (pp. 676–684;
 * it opens on the lower half of p. 676, under the last of the contents) and
 * Calorimetry and Specific Heat (pp. 685–692). The chapter’s title and
 * contents (p. 675 and the top of p. 676) are not copied. Each is split at
 * its Sections 1 to 8. Figures 10.1 (caption p. 679, drawn on p. 680) and
 * 10.2 (caption p. 687, drawn on p. 688) are redrawn in
 * lib/diagrams/physics-11-10.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 676–684 ─────────────────────────
  {
    n: '01',
    title: 'Temperature, Heat and Expansion',
    kalam: 'Temperature is the property that tells you which way energy will flow when two objects touch.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This topic is a steady source of marks. JEE Main almost always carries 1–2 questions, usually a clean thermal-expansion or thermal-stress numerical, or a quick temperature-scale conversion. NEET tends to ask one conceptual MCQ (heat vs temperature, anomalous expansion of water, or “does the hole expand?”). CBSE Boards favour a 1–3 mark definition or short numerical (state the relation <i>γ</i> = 3<i>α</i>, or compute an increase in length). JEE Advanced rarely asks it standalone but loves to bolt it onto elasticity (Young’s modulus) or onto a clock/pendulum problem for multi-step reasoning.',
      },
      {
        t: 'p',
        html: 'Let us begin with something you have felt a thousand times without ever calling it physics. You pour hot chai into a steel tumbler, wait two minutes, and then the tumbler itself becomes too hot to hold. Why? The chai and the tumbler were at different hotness levels, and something flowed from the hotter chai into the cooler steel until — if you wait long enough — both settle at the same hotness, somewhere in between. That “level of hotness” is <b>temperature</b>, and the “something that flows” is <b>heat</b>. The whole topic lives inside this single everyday scene, so let us pull it apart slowly.',
      },
      {
        t: 'p',
        html: '<b>Temperature</b> is the property that tells you which way energy will flow when two objects touch. It is not “how much energy is inside,” it is “how energetically the molecules are jiggling, on average.” A spoonful of boiling water and a full bucket of boiling water are at the same temperature — the molecules jiggle equally hard in both — yet the bucket clearly holds far more thermal energy. So temperature is an intensive quantity: it does not care about size or amount.<br><br><b>Heat</b>, on the other hand, is energy in transit. The moment two objects at different temperatures are in contact, energy passes from the hotter to the cooler one. We only call that flowing energy “heat.” Once it has arrived and the flow stops, it stops being heat and becomes part of the object’s internal energy. This is exactly why a sentence like “this body contains a lot of heat” is wrong — a body contains internal energy; heat is only the name we give to the transfer. The correct version is “this body is at a high temperature” or “heat is flowing from A to B because A is hotter.”',
      },
      {
        t: 'p',
        html: 'When does the flow stop? When both bodies reach the same temperature — a state called <b>thermal equilibrium</b>. And here a quiet but powerful rule sneaks in, called the <b>Zeroth Law of Thermodynamics</b>: if body A is in thermal equilibrium with body C, and body B is also in thermal equilibrium with C, then A and B are in equilibrium with each other. It sounds almost too obvious to name — but it is precisely this law that lets a thermometer work. The thermometer is the “C” that we touch to everything; if two patients both make the thermometer read 37°C, they are at the same temperature, even though they never touched each other.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine a busy Mumbai local train at rush hour. Temperature is like the crowd density — how tightly packed the people are in one compartment. Heat is like the people pushing through the doors from a packed compartment into an emptier one at a station. The pushing (heat) continues only until both compartments are equally crowded (equal temperature). After that, no net movement — equilibrium. Notice that a long 12-coach train and a short 3-coach train can have the same density (temperature) while the long train obviously contains far more people (internal energy). That picture, once it clicks, keeps you from ever confusing the two again.',
      },
      {
        t: 'p',
        html: 'Now to the third character: <b>expansion</b>. Heat a substance and its molecules jiggle harder, pushing their neighbours a little farther away on average. The object grows — it expands. Cool it and it shrinks. Almost everything does this, and engineers must respect it constantly: the gaps left between railway track segments, the rollers under a bridge span, the slight sag deliberately left in overhead electric wires — all of these exist so that the structure can expand in summer and contract in winter without buckling or snapping.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The neat linear formulas we will write down assume (i) the temperature change Δ<i>T</i> is modest, so the expansion coefficient stays effectively constant — over hundreds of degrees the coefficients themselves drift; (ii) the material is isotropic, expanding equally in all directions (true for most metals, not for crystals like calcite); and most importantly (iii) the substance behaves normally. The famous exception is <b>water between 0°C and 4°C</b>, which contracts as you warm it and only begins expanding above 4°C. This anomaly is not a footnote — it is the reason fish survive a frozen pond, and it quietly violates our “heat always expands” intuition.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Temperature scale conversion',
        main: '(general identity — works for any linear scale):<br>(<i>C</i> − 0)/100 = (<i>F</i> − 32)/180 = (<i>K</i> − 273.15)/100 = (<i>R</i> − 0)/80<br>The most-used pair:<br><i>F</i> = (9/5)<i>C</i> + 32, <i>K</i> = <i>C</i> + 273.15',
        legend: ['<i>C</i>, <i>F</i>, <i>K</i>, <i>R</i> = readings on the Celsius, Fahrenheit, Kelvin and Réaumur scales'],
        note: null,
      },
      {
        t: 'def',
        term: 'Kelvin (SI unit of temperature)',
        html: 'defined as 1/273.16 of the temperature of the <b>triple point of water</b> (the unique state where ice, water and vapour coexist; this is the definition NCERT uses — since 2019 the SI fixes the kelvin through the Boltzmann constant, which keeps the triple point at 273.16 K). SI unit: K. Dimensional formula: [K] = [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup> Θ<sup>1</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Heat as energy',
        main: '<i>Q</i> = <i>mc</i> Δ<i>T</i>',
        legend: ['<i>Q</i> = heat exchanged', '<i>m</i> = mass', '<i>c</i> = specific heat capacity', 'Δ<i>T</i> = temperature change'],
        note: 'SI unit of <i>Q</i>: joule (J). Dimensional formula of heat (energy): [M L<sup>2</sup> T<sup>−2</sup>].',
      },
      {
        t: 'p',
        html: '• <b>Calorie:</b> the heat needed to raise 1 g of water from 14.5°C to 15.5°C; 1 cal = 4.186 J.<br>• <b>Specific heat <i>c</i>:</b> SI unit J kg<sup>−1</sup> K<sup>−1</sup>. Dimensional formula [L<sup>2</sup> T<sup>−2</sup> Θ<sup>−1</sup>].<br>• <b>Mechanical equivalent of heat <i>J</i>:</b> <i>W</i> = <i>JQ</i>; it is a unit-conversion constant, hence <b>dimensionless</b> [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>], numerically 4.186 J/cal.',
      },
      {
        t: 'formula',
        kicker: 'Thermal expansion',
        main: 'Linear: Δ<i>L</i> = <i>αL</i><sub>0</sub>Δ<i>T</i> ⇒ <i>L</i> = <i>L</i><sub>0</sub>(1 + <i>α</i> Δ<i>T</i>)<br>Areal: Δ<i>A</i> = <i>βA</i><sub>0</sub>Δ<i>T</i> ⇒ <i>A</i> = <i>A</i><sub>0</sub>(1 + <i>β</i> Δ<i>T</i>)<br>Volumetric: Δ<i>V</i> = <i>γV</i><sub>0</sub>Δ<i>T</i> ⇒ <i>V</i> = <i>V</i><sub>0</sub>(1 + <i>γ</i> Δ<i>T</i>)<br>with the fundamental relations for an isotropic solid:<br><i>β</i> = 2<i>α</i>, <i>γ</i> = 3<i>α</i>, <i>α</i> ∶ <i>β</i> ∶ <i>γ</i> = 1 ∶ 2 ∶ 3',
        legend: ['<i>α</i> = coefficient of linear expansion', '<i>β</i> = superficial (areal)', '<i>γ</i> = cubical (volumetric)'],
        note: 'SI unit of each coefficient: K<sup>−1</sup> (or per °C, same magnitude). Dimensional formula: [Θ<sup>−1</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Change of density with temperature',
        main: '(volume grows, mass fixed):<br><i>ρ</i> = <i>ρ</i><sub>0</sub>/(1 + <i>γ</i> Δ<i>T</i>) ≈ <i>ρ</i><sub>0</sub>(1 − <i>γ</i> Δ<i>T</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Thermal stress',
        main: '(rod prevented from expanding/contracting):<br><i>σ</i> = <i>Yα</i> Δ<i>T</i>',
        legend: ['<i>Y</i> = Young’s modulus'],
        note: 'Unit: pascal (Pa); dimensional formula [M L<sup>−1</sup> T<sup>−2</sup>].',
      },

      { t: 'part', title: 'CBSE board derivation — Why γ = 3α' },
      {
        t: 'p',
        html: 'This is the single most asked derivation from the expansion topic, and it is short and beautiful. The goal is to show that the cubical expansion coefficient is exactly three times the linear one.',
      },
      {
        t: 'p',
        html: '<b>Initial assumption.</b> Take a small cube of an isotropic solid with each side of length <i>L</i><sub>0</sub> at temperature <i>T</i><sub>0</sub>. (We choose a cube only for convenience; the result holds for any shape because expansion is geometric.) Its initial volume is<br><i>V</i><sub>0</sub> = <i>L</i><sub>0</sub><sup>3</sup>.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Each edge grows by the linear law.</b> Raise the temperature by Δ<i>T</i>. Every edge, being a length, expands according to linear expansion:<br><i>L</i> = <i>L</i><sub>0</sub>(1 + <i>α</i> Δ<i>T</i>).<br>Why this step: expansion is a property of the material’s bonds, not of the object’s orientation — so each of the three mutually perpendicular edges grows by the same fractional amount <i>α</i> Δ<i>T</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Build the new volume.</b> Since the cube stays a cube, the new volume is the cube of the new edge:<br><i>V</i> = <i>L</i><sup>3</sup> = <i>L</i><sub>0</sub><sup>3</sup>(1 + <i>α</i> Δ<i>T</i>)<sup>3</sup> = <i>V</i><sub>0</sub>(1 + <i>α</i> Δ<i>T</i>)<sup>3</sup>.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Expand the binomial.</b><br>(1 + <i>α</i> Δ<i>T</i>)<sup>3</sup> = 1 + 3<i>α</i> Δ<i>T</i> + 3(<i>α</i> Δ<i>T</i>)<sup>2</sup> + (<i>α</i> Δ<i>T</i>)<sup>3</sup>.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — Drop the tiny terms.</b> Here is the crucial physical reasoning. The coefficient <i>α</i> for solids is of order 10<sup>−5</sup> K<sup>−1</sup>, so even for Δ<i>T</i> = 100 K the product <i>α</i> Δ<i>T</i> ∼ 10<sup>−3</sup>. Its square is ∼ 10<sup>−6</sup> and its cube ∼ 10<sup>−9</sup> — utterly negligible beside the first-order term. So we keep only the linear term:<br><i>V</i> ≈ <i>V</i><sub>0</sub>(1 + 3<i>α</i> Δ<i>T</i>).',
      },
      {
        t: 'p',
        html: '<b>Step 5 — Compare and conclude.</b> But by definition <i>V</i> = <i>V</i><sub>0</sub>(1 + <i>γ</i> Δ<i>T</i>). Matching the two expressions term by term:<br><i>γ</i> = 3<i>α</i><br>By the identical argument applied to a square face (<i>A</i> = <i>L</i><sup>2</sup>), keeping only the first-order term gives <i>β</i> = 2<i>α</i>. The numbers 1, 2, 3 are simply the powers to which length is raised for a line, an area and a volume — a result you can now reconstruct on the spot rather than memorise.',
      },
      { t: 'fig', id: 'p11-10-fig-10.1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A straight steel railway rail is 12.0 m long when laid at an early-morning temperature of 18°C in Nagpur. By afternoon the rail heats up to 48°C. Find the increase in its length. Take <i>α</i><sub>steel</sub> = 1.2 × 10<sup>−5</sup> °C<sup>−1</sup>.',
        steps: [
          '<b>Given:</b> <i>L</i><sub>0</sub> = 12.0 m, Δ<i>T</i> = 48 − 18 = 30 °C, <i>α</i> = 1.2 × 10<sup>−5</sup> °C<sup>−1</sup>.',
          '<b>Formula:</b> Δ<i>L</i> = <i>αL</i><sub>0</sub>Δ<i>T</i>.',
          '<b>Substitution:</b><br>Δ<i>L</i> = (1.2 × 10<sup>−5</sup>) × (12.0) × (30)<br>Δ<i>L</i> = 1.2 × 12.0 × 30 × 10<sup>−5</sup> = 432 × 10<sup>−5</sup> m',
          '<b>Concluding remark:</b> Just 4.32 mm — but multiply that across thousands of rail segments and you see why expansion gaps are non-negotiable on Indian Railways.',
        ],
        ans: 'Δ<i>L</i> = 4.32 × 10<sup>−3</sup> m = 4.32 mm',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A child’s body temperature rises by 3.0°C during a fever. By how much has it risen on the Fahrenheit scale?',
        steps: [
          '<b>The trap:</b> the reflex is to grab <i>F</i> = (9/5)<i>C</i> + 32 and “convert 3.” That gives <i>F</i> = (9/5)(3) + 32 = 37.4 °F — and a student then writes “rose by 37.4°F,” which is nonsense.',
          '<b>The fix (mental, 5 seconds):</b> the “+32” is an offset of where each scale starts; it disappears the moment you deal with a change Δ<i>T</i>. Only the size of a degree matters, and a Fahrenheit degree is 5/9 as big as a Celsius degree. Therefore:<br>Δ<i>F</i> = (9/5)Δ<i>C</i> = (9/5)(3.0)',
          '<b>Speed insight:</b> for intervals (rises, falls, differences), Kelvin and Celsius are identical (Δ<i>K</i> = Δ<i>C</i>), and Fahrenheit intervals are 9/5 times Celsius intervals. Never add 32 to a Δ<i>T</i>.',
        ],
        ans: '5.4 °F',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (links thermal expansion + elasticity)',
        q: 'A copper rod is clamped rigidly between two thick walls so that it cannot change length. It is then heated from 25°C to 75°C. Compute the thermal (compressive) stress developed in the rod. Take <i>Y</i><sub>Cu</sub> = 1.1 × 10<sup>11</sup> Pa and <i>α</i><sub>Cu</sub> = 1.7 × 10<sup>−5</sup> °C<sup>−1</sup>.',
        steps: [
          '<b>Reasoning — two concepts stitched together.</b> Left free, the rod would expand by a fractional amount Δ<i>L</i>/<i>L</i><sub>0</sub> = <i>α</i> Δ<i>T</i>. The walls forbid this, so it is as if the rod is compressed back by that same fractional amount. From elasticity, stress = <i>Y</i> × strain, and here the suppressed strain is exactly <i>α</i> Δ<i>T</i>.',
          '<b>Step 1 — Suppressed strain:</b><br>strain = <i>α</i> Δ<i>T</i> = (1.7 × 10<sup>−5</sup>)(50) = 8.5 × 10<sup>−4</sup>.',
          '<b>Step 2 — Thermal stress:</b><br><i>σ</i> = <i>Yα</i> Δ<i>T</i> = (1.1 × 10<sup>11</sup>)(8.5 × 10<sup>−4</sup>)',
          'Notice the stress is independent of the rod’s length — a short clamped rod and a long clamped rod of the same material develop identical stress. That length-independence is the favourite hook in this kind of question.',
        ],
        ans: '<i>σ</i> = 9.35 × 10<sup>7</sup> Pa',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A pendulum clock with a steel pendulum keeps perfect time at 20°C. During a Rajasthan summer the temperature climbs to 45°C. Does the clock run fast or slow, and by how many seconds will it be off after one full day? Take <i>α</i><sub>steel</sub> = 1.2 × 10<sup>−5</sup> °C<sup>−1</sup>.',
        steps: [
          '<b>Step 1 — How length feeds into period.</b> A simple pendulum has <i>T</i><sub>period</sub> = 2π√(<i>L</i>/<i>g</i>), so <i>T</i><sub>period</sub> ∝ √<i>L</i>. Taking a logarithmic differential converts a product/power into a sum:<br>Δ<i>T</i><sub>period</sub>/<i>T</i><sub>period</sub> = ½ (Δ<i>L</i>/<i>L</i>).',
          '<b>Step 2 — Bring in expansion.</b> The fractional change in length is Δ<i>L</i>/<i>L</i> = <i>α</i> Δ<i>T</i><sub>temp</sub>, so:<br>Δ<i>T</i><sub>period</sub>/<i>T</i><sub>period</sub> = ½<i>α</i> Δ<i>T</i><sub>temp</sub>.',
          '<b>Step 3 — Direction (the conceptual core).</b> Heating lengthens the pendulum, which increases the period — each swing takes slightly longer — so the clock <b>ticks less often than it should and runs SLOW</b>, i.e. it loses time.',
          '<b>Step 4 — Accumulate over one day.</b> The fractional error in period equals the fractional error in elapsed time, so over <i>t</i> = 86400 s:<br>Δ<i>t</i> = ½<i>α</i> Δ<i>T</i><sub>temp</sub> × <i>t</i> = ½(1.2 × 10<sup>−5</sup>)(25)(86400)<br>Δ<i>t</i> = ½ × 1.2 × 25 × 86400 × 10<sup>−5</sup> = ½(25.92)',
          'The clock falls behind by roughly <b>13 seconds each day</b> in that heat. The deep idea here — that a fractional change in a length becomes half the fractional change in a time — is exactly the kind of multi-step bridge JEE Advanced rewards.',
        ],
        ans: '12.96 s lost per day',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A brass scale is correct at 15°C. A rod measured with it reads 80.00 cm on a day when the scale is at 35°C. Find the true length of the rod. (<i>α</i><sub>brass</sub> = 1.9 × 10<sup>−5</sup> °C<sup>−1</sup>.)',
            a: '80.03 cm',
          },
          {
            q: '[NEET] At what single temperature do the Celsius and Fahrenheit scales show the same numerical reading?',
            a: '−40° (i.e. −40°C = −40°F)',
          },
          {
            q: '[JEE Main] A glass flask of volume 1000 cm<sup>3</sup> is filled to the brim with mercury at 0°C. Both are heated to 80°C. How much mercury overflows? Take <i>γ</i><sub>mercury</sub> = 1.8 × 10<sup>−4</sup> °C<sup>−1</sup> and <i>α</i><sub>glass</sub> = 9 × 10<sup>−6</sup> °C<sup>−1</sup>.',
            a: '12.24 cm<sup>3</sup> overflows (using effective <i>γ</i><sub>apparent</sub> = <i>γ</i><sub>Hg</sub> − 3<i>α</i><sub>glass</sub> = 1.53 × 10<sup>−4</sup>)',
          },
          {
            q: '[JEE Main] An aluminium wire of cross-sectional area 2.0 mm<sup>2</sup> is stretched between two rigid clamps at 30°C and then cooled to −10°C. Find the tension developed. Take <i>Y</i><sub>Al</sub> = 7.0 × 10<sup>10</sup> Pa, <i>α</i><sub>Al</sub> = 2.3 × 10<sup>−5</sup> °C<sup>−1</sup>.',
            a: '≈ 129 N',
          },
          {
            q: '[JEE Advanced] Two rods, one of copper (<i>α</i><sub>1</sub> = 1.7 × 10<sup>−5</sup> °C<sup>−1</sup>) and one of steel (<i>α</i><sub>2</sub> = 1.2 × 10<sup>−5</sup> °C<sup>−1</sup>), are joined end to end to form a single rod 1.00 m long at 20°C. The combined rod is found to expand by 0.78 mm when heated to 70°C. Find the length of each rod at 20°C.',
            a: 'Copper rod ≈ 0.72 m, steel rod ≈ 0.28 m.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A circular metal plate has a small circular hole drilled through it. When the plate is uniformly heated, the diameter of the hole:',
        opts: [
          {
            label: 'decreases',
            nudge: '<b>(a)</b> is the classic trap: students picture surrounding metal “closing in” on the hole. It feels intuitive but is wrong — the metal moves outward, carrying the hole’s edge outward with it.',
          },
          { label: 'increases', nudge: null },
          {
            label: 'stays the same',
            nudge: '<b>(c)</b> assumes holes are “nothing” and so cannot expand; but it is the boundary that expands, and the boundary is metal.',
          },
          { label: 'first increases, then decreases', nudge: '<b>(d)</b> invents a non-existent reversal.' },
        ],
        correct: 1,
        solution: 'Expansion is a scaling of the whole geometry — imagine the heated plate as a photograph enlarged on a photocopier. Every feature, including empty regions, scales up by the same factor (1 + <i>α</i> Δ<i>T</i>). The hole behaves exactly like a disc of metal that would have occupied it.',
      },
      {
        t: 'mcq',
        q: 'The coefficients of linear, areal and volumetric expansion of an isotropic solid are in the ratio:',
        opts: [
          { label: '1 ∶ 1 ∶ 1', nudge: '<b>(a)</b> would only hold if expansion were one-dimensional, which it is not.' },
          { label: '1 ∶ 2 ∶ 3', nudge: null },
          { label: '3 ∶ 2 ∶ 1', nudge: '<b>(c)</b> is the same numbers reversed — a careless-reading trap.' },
          { label: '1 ∶ 3 ∶ 9', nudge: '<b>(d)</b> comes from wrongly multiplying by 3 at each step (<i>β</i> = 3<i>α</i>, then <i>γ</i> = 3<i>β</i>) instead of using <i>β</i> = 2<i>α</i>, <i>γ</i> = 3<i>α</i>.' },
        ],
        correct: 1,
        solution: 'Length, area and volume scale as the 1st, 2nd and 3rd powers of a linear dimension, giving <i>α</i> ∶ <i>β</i> ∶ <i>γ</i> = 1 ∶ 2 ∶ 3.',
      },
      {
        t: 'mcq',
        q: 'Water is heated steadily from 0°C to 10°C. Its volume:',
        opts: [
          {
            label: 'increases throughout',
            nudge: '<b>(a)</b> is the “everything expands when heated” reflex — exactly the assumption water violates.',
          },
          { label: 'decreases throughout', nudge: '<b>(b)</b> describes only the first 4 degrees and misses the reversal.' },
          { label: 'first decreases up to 4°C, then increases', nudge: null },
          {
            label: 'first increases up to 4°C, then decreases',
            nudge: '<b>(d)</b> inverts the real behaviour; this is the trap for students who half-remember “something weird happens at 4°C.”',
          },
        ],
        correct: 2,
        solution: 'This is the <b>anomalous expansion of water</b>: between 0°C and 4°C water contracts on heating (density rises, peaking at 4°C), and only above 4°C does it expand normally.',
      },
      {
        t: 'mcq',
        q: 'A faulty Celsius thermometer reads 2°C in pure melting ice and 102°C in steam at standard pressure. When it reads 27°C, the true temperature is:',
        opts: [
          { label: '25°C', nudge: null },
          {
            label: '25.5°C',
            nudge: '<b>(b)</b> wrongly rescales the corrected reading by 102/100 (25 × 1.02 = 25.5); the faulty scale spans 102 − 2 = 100 divisions, the same as the Celsius scale, so no rescaling is needed.',
          },
          {
            label: '27°C',
            nudge: '<b>(c)</b> assumes the faulty reading is correct — ignores the calibration error entirely.',
          },
          { label: '23°C', nudge: '<b>(d)</b> subtracts the offset twice.' },
        ],
        correct: 0,
        solution: 'The faulty scale runs from 2 to 102, i.e. 100 divisions, but offset by 2. Mapping its reading <i>X</i> to the true value <i>C</i>:<br>(<i>C</i> − 0)/(100 − 0) = (<i>X</i> − 2)/(102 − 2) ⇒ <i>C</i> = ((27 − 2)/100) × 100 = 25°C.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Adding 32 to a temperature difference.</b> Δ<i>T</i> never takes the offset. For changes, Δ<i>C</i> = Δ<i>K</i> and Δ<i>F</i> = (9/5)Δ<i>C</i>. The “+273” and “+32” belong only to absolute readings.',
          '<b>Confusing <i>L</i><sub>0</sub> with <i>L</i>.</b> Always multiply <i>α</i> by the original length (before heating). For the tiny changes in board problems the error is negligible, but in precise/JEE work it matters — use <i>L</i><sub>0</sub>.',
          '<b>Thinking holes/cavities shrink.</b> A cavity, hole or the inner radius of a ring all expand outward, by the same coefficient as the solid material. Treat empty regions as if filled with the same metal.',
          '<b>Forgetting the “apparent expansion” of liquids in containers.</b> When a liquid sits in a solid vessel, the overflow uses <i>γ</i><sub>apparent</sub> = <i>γ</i><sub>liquid</sub> − <i>γ</i><sub>container</sub> = <i>γ</i><sub>liquid</sub> − 3<i>α</i><sub>container</sub>, because the container expands too.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For “by how much does it expand” questions, never compute the final length and subtract — go straight for Δ<i>L</i> = <i>αL</i><sub>0</sub>Δ<i>T</i>. And for a 2-second sanity check on any expansion answer: solids have <i>α</i> ∼ 10<sup>−5</sup>, so a metre-long rod over a 100° rise grows by only ∼ 1 mm. If your answer is in centimetres, you have a power-of-ten error.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Heat ≠ Temperature.',
            note: 'Temperature = level of hotness (intensive); Heat = energy in transit due to a temperature difference. Equilibrium = equal temperature (Zeroth Law).',
          },
          {
            f: 'Scale conversion',
            note: '<i>C</i>/100 = (<i>F</i> − 32)/180 = (<i>K</i> − 273.15)/100; for changes, Δ<i>C</i> = Δ<i>K</i>, Δ<i>F</i> = (9/5)Δ<i>C</i>.',
          },
          {
            f: 'Expansion',
            note: 'Δ<i>L</i> = <i>αL</i><sub>0</sub>Δ<i>T</i>, Δ<i>A</i> = <i>βA</i><sub>0</sub>Δ<i>T</i>, Δ<i>V</i> = <i>γV</i><sub>0</sub>Δ<i>T</i> with <i>β</i> = 2<i>α</i>, <i>γ</i> = 3<i>α</i> — mnemonic: “1-2-3 for line-area-volume.”',
          },
          { f: 'Density', note: '<i>ρ</i> ≈ <i>ρ</i><sub>0</sub>(1 − <i>γ</i>Δ<i>T</i>) — heat it, it gets lighter (per unit volume).' },
          { f: 'Thermal stress (clamped rod)', note: '<i>σ</i> = <i>Yα</i>Δ<i>T</i> — independent of length.' },
          { f: 'Anomaly', note: 'water is densest at <b>4°C</b>; 0→4°C it contracts on heating. Mnemonic: “4 keeps the fish alive.”' },
          { f: 'Holes expand outward like the surrounding metal', note: 'never shrink.' },
        ],
        aids: [],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 685–692 ─────────────────────────
  {
    n: '02',
    title: 'Calorimetry and Specific Heat',
    kalam: 'Specific heat c is the amount of heat needed to raise the temperature of one kilogram of a substance by one degree.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is one of the most numerically loaded topics in the whole chapter. JEE Main reliably carries 1–2 questions — usually a mixing/heat-balance numerical or a “find the final state” problem. NEET loves the conceptual traps here (steam burns, the latent-heat step, “will all the ice melt?”) and often a quick specific-heat comparison. CBSE Boards ask 2–3 mark numericals on <i>Q</i> = <i>mc</i>Δ<i>T</i>, <i>Q</i> = <i>mL</i>, the principle of calorimetry, or a definition of specific heat / latent heat. JEE Advanced uses it for multi-phase mixing problems where you must determine the final state rather than assume it — high reasoning, low formula count.',
      },
      {
        t: 'p',
        html: 'Picture your kitchen on a winter morning. You put a steel ladle and a mug of water on the same flame, side by side, for the same one minute. Pick them up: the steel ladle is already scorching, but the water is merely warm. Same flame, same time — so roughly the same amount of heat went into each. Yet their temperatures rose by wildly different amounts. The water stubbornly refused to heat up, while the steel surrendered instantly. That stubbornness has a name: <b>specific heat capacity</b>.',
      },
      {
        t: 'p',
        html: '<b>Specific heat</b> <i>c</i> is the amount of heat needed to raise the temperature of <b>one kilogram</b> of a substance by <b>one degree</b>. Water has an unusually high specific heat (4186 J kg<sup>−1</sup> K<sup>−1</sup>, or a clean 1 cal g<sup>−1</sup> °C<sup>−1</sup>) — far higher than almost anything you meet in daily life. That single fact explains a startling range of things: why the sea breeze is cool in the afternoon (the ocean barely warms while the land bakes), why a hot-water bottle stays warm all night, why coastal cities like Mumbai and Chennai have gentler climates than landlocked Nagpur, and why your body — which is mostly water — can absorb a lot of metabolic heat without your temperature spiking. Water is nature’s thermal shock-absorber.',
      },
      {
        t: 'p',
        html: 'The governing relation is wonderfully simple:<br><i>Q</i> = <i>mc</i> Δ<i>T</i><br>Read it as a recipe: the heat <i>Q</i> you must pour in equals the mass <i>m</i>, times how “reluctant” the material is (<i>c</i>), times how big a temperature jump Δ<i>T</i> you want. Triple the mass, you need triple the heat. Pick a material with double the specific heat, you need double the heat. It is a multiplication, nothing more.',
      },
      {
        t: 'p',
        html: 'Now to the second big idea. Bring a hot body and a cold body together in an insulated box and leave them alone. Heat flows from hot to cold — always, never the reverse on its own — until both reach one common temperature. Crucially, <b>energy is not created or destroyed in the box</b>: every joule the hot body loses, the cold body gains. This bookkeeping rule is the <b>Principle of Calorimetry</b>:<br>Heat lost by hot bodies = Heat gained by cold bodies',
      },
      {
        t: 'p',
        html: 'A <b>calorimeter</b> is just a well-insulated metal cup (with a stirrer and thermometer) built to make this rule trustworthy by keeping heat from leaking to the room. But here is the catch students forget: the calorimeter itself participates. Its metal walls also soak up heat, so they must appear in the balance sheet. A neat way to handle this is the <b>water equivalent</b> <i>w</i> = <i>mc</i> — the mass of water that would absorb the same heat as the object for the same temperature rise. Replace the calorimeter by its water equivalent and the arithmetic simplifies.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine a “heat bank account.” Every body in the box has a balance. When they are put in contact, the rich (hot) ones transfer money (heat) to the poor (cold) ones until everyone has the same balance per rupee of “thermal sensitivity.” No money leaves the room — it just gets redistributed. The total heat lost by the depositors equals the total gained by the receivers. That conservation is the entire engine behind every mixing problem you will ever solve.',
      },
      {
        t: 'p',
        html: 'There is one more twist, and it is the source of most exam traps. Pour heat into ice at 0°C and — surprisingly — its temperature does <b>not</b> rise while it is melting. The heat is going somewhere invisible: into breaking the rigid crystal lattice, prying molecules loose into the liquid state. This “hidden” heat absorbed at constant temperature during a phase change is the <b>latent heat</b> <i>L</i>, and the heat for a phase change is<br><i>Q</i> = <i>mL</i>.<br>Latent heats are large. To melt 1 g of ice takes 80 cal — the same heat that would raise that gram of water by a full 80°C. To boil 1 g of water takes a whopping 540 cal. This is exactly why a steam burn is so much worse than a boiling-water burn: the steam dumps an extra 540 cal per gram into your skin as it condenses, on top of cooling.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Our clean formulas assume (i) the calorimeter is perfectly insulated — no heat leaks to the surroundings; (ii) no chemical reaction occurs between the mixed substances (which would release or absorb its own heat); (iii) specific heat is treated as constant over the temperature range (true to within ~1% for water from 0–100°C, good enough for problems); and most importantly (iv) you must <b>never assume the final state</b> — always check whether a phase change completes before settling on a final temperature.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Heat for a temperature change (no phase change)',
        main: '<i>Q</i> = <i>mc</i> Δ<i>T</i>',
        legend: ['<i>Q</i> = heat (J)', '<i>m</i> = mass (kg)', '<i>c</i> = specific heat capacity', 'Δ<i>T</i> = temperature change'],
        note: '<b>Specific heat <i>c</i>:</b> SI unit J kg<sup>−1</sup> K<sup>−1</sup>; dimensional formula [L<sup>2</sup> T<sup>−2</sup> Θ<sup>−1</sup>]. For solids and liquids it is a property of the material; for a gas it also depends on the process, and can take any value from 0 (adiabatic) to ∞ (isothermal), even a negative one in special processes.',
      },
      {
        t: 'formula',
        kicker: 'Heat capacity (of the whole body)',
        main: '<i>C</i> = <i>mc</i>',
        legend: [],
        note: '(unit: J K<sup>−1</sup>, dimensions [M L<sup>2</sup> T<sup>−2</sup> Θ<sup>−1</sup>])<br>Heat capacity is the heat to raise the entire body by 1 K. Depends on both mass and material.',
      },
      {
        t: 'formula',
        kicker: 'Molar heat capacity',
        main: '<i>C</i><sub>molar</sub> = <i>Mc</i> = <i>Q</i>/(<i>n</i> Δ<i>T</i>)',
        legend: ['<i>M</i> = molar mass', '<i>n</i> = number of moles'],
        note: '(unit: J mol<sup>−1</sup> K<sup>−1</sup>)',
      },
      {
        t: 'formula',
        kicker: 'Water equivalent',
        main: '<i>w</i> = <i>mc</i> ⇒ <i>w</i> = <i>m</i> · <i>c</i>/<i>c</i><sub>water</sub> (in grams of water, with <i>c</i><sub>water</sub> = 1 cal g<sup>−1</sup> °C<sup>−1</sup>)',
        legend: [],
        note: 'Numerically equal to the heat capacity; it is the mass of water with the same heat capacity as the body.',
      },
      {
        t: 'formula',
        kicker: 'Latent heat (phase change at constant temperature)',
        main: '<i>Q</i> = <i>mL</i>',
        legend: [
          '<i>L</i><sub><i>f</i></sub> = latent heat of <b>fusion</b> (solid ⇌ liquid)',
          '<i>L</i><sub><i>v</i></sub> = latent heat of <b>vaporization</b> (liquid ⇌ gas)',
        ],
        note: 'SI unit of <i>L</i>: J kg<sup>−1</sup>; dimensional formula [L<sup>2</sup> T<sup>−2</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Principle of Calorimetry (insulated system)',
        main: '∑ <i>Q</i><sub>lost</sub> = ∑ <i>Q</i><sub>gained</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: 'Standard constants (memorise these)',
        head: ['Quantity', 'Value (CGS)', 'Value (SI)'],
        rows: [
          ['<i>c</i><sub>water</sub>', '1 cal g<sup>−1</sup> °C<sup>−1</sup>', '4186 J kg<sup>−1</sup> K<sup>−1</sup>'],
          ['<i>c</i><sub>ice</sub>', '0.5 cal g<sup>−1</sup> °C<sup>−1</sup>', '≈ 2100 J kg<sup>−1</sup> K<sup>−1</sup>'],
          ['<i>c</i><sub>steam</sub>', '≈ 0.48 cal g<sup>−1</sup> °C<sup>−1</sup>', '≈ 2010 J kg<sup>−1</sup> K<sup>−1</sup>'],
          ['<i>L</i><sub><i>f</i></sub> (ice)', '80 cal g<sup>−1</sup>', '≈ 3.36 × 10<sup>5</sup> J kg<sup>−1</sup>'],
          ['<i>L</i><sub><i>v</i></sub> (water)', '540 cal g<sup>−1</sup>', '2.26 × 10<sup>6</sup> J kg<sup>−1</sup>'],
        ],
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'Calorimetry has no single grand derivation; its difficulty is procedural. The skill is in setting up the heat budget correctly and — above all — not guessing the final state. Here is the reliable framework.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — List every body and its journey.</b> For each substance, note its mass, specific heat, latent heats, and the temperature it starts at. Why: a missed body (especially the calorimeter) breaks conservation.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Split each journey into “warm” and “phase-change” legs.</b> Heating ice at −10°C to steam at 110°C is not one calculation; it is five separate legs, each with its own formula:<br>1. warm ice −10 → 0°C: <i>mc</i><sub>ice</sub> Δ<i>T</i><br>2. melt ice at 0°C: <i>mL</i><sub><i>f</i></sub><br>3. warm water 0 → 100°C: <i>mc</i><sub>water</sub> Δ<i>T</i><br>4. boil water at 100°C: <i>mL</i><sub><i>v</i></sub><br>5. warm steam 100 → 110°C: <i>mc</i><sub>steam</sub> Δ<i>T</i><br>Why: during legs 2 and 4 the temperature is frozen even as heat pours in — using <i>mc</i>Δ<i>T</i> there is the single most common mistake.',
      },
      { t: 'fig', id: 'p11-10-fig-10.2' },
      {
        t: 'p',
        html: '<b>Step 3 — Identify the cold side and the hot side, then write the balance.</b> Use ∑ <i>Q</i><sub>gained</sub> = ∑ <i>Q</i><sub>lost</sub>. Keep all quantities as magnitudes and let the equation balance them.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — When the final state is unknown, test it with a “heat budget.”</b> This is the heart of advanced problems. Compute the heat the hot side can deliver and the heat the cold side needs to reach each milestone (e.g., “ice fully melted at 0°C”). Compare:<br>• If the hot side’s available heat <b>exceeds</b> what’s needed to bring everything to a boundary temperature, the system pushes past it — continue to the next leg.<br>• If it <b>falls short</b>, the system settles at that boundary, and only part of the phase change happens. Solve for the fraction.<br>Why this step matters: it prevents the absurd answers (like a “final temperature” of 130°C when steam is present, or all ice melting when there wasn’t enough heat). The budget tells you the true final state before you commit to an equation.',
      },
      {
        t: 'p',
        html: '<b>Step 5 — Solve and sanity-check.</b> The final temperature must satisfy <i>T</i><sub>cold</sub> ≤ <i>T</i><sub>final</sub> ≤ <i>T</i><sub>hot</sub>. If it doesn’t, a phase change was missed.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A 0.50 kg aluminium vessel contains 2.0 kg of water at 25°C. How much heat must be supplied to raise the whole system to 75°C? Take <i>c</i><sub>water</sub> = 4186 J kg<sup>−1</sup> K<sup>−1</sup> and <i>c</i><sub>Al</sub> = 900 J kg<sup>−1</sup> K<sup>−1</sup>.',
        steps: [
          '<b>Given:</b> <i>m</i><sub>Al</sub> = 0.50 kg, <i>m</i><sub><i>w</i></sub> = 2.0 kg, Δ<i>T</i> = 75 − 25 = 50 K.',
          '<b>Formula:</b> the vessel and water rise together, so <i>Q</i> = (<i>m</i><sub><i>w</i></sub><i>c</i><sub>water</sub> + <i>m</i><sub>Al</sub><i>c</i><sub>Al</sub>) Δ<i>T</i>.',
          '<b>Substitution:</b><br><i>Q</i> = [(2.0)(4186) + (0.50)(900)](50)<br><i>Q</i> = [8372 + 450](50) = (8822)(50)',
          '<b>Concluding remark:</b> Note the vessel contributes only 450/8822 ≈ 5% — small, but in a careful answer you still include it. Always account for the container.',
        ],
        ans: '<i>Q</i> = 4.41 × 10<sup>5</sup> J',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '5 g of ice at 0°C is dropped into 20 g of water at 30°C in an insulated cup. Find the final temperature.',
        steps: [
          '<b>The trap:</b> the reflex is to treat this like mixing two waters and write (20)(30 − <i>T</i>) = (5)(<i>T</i> − 0), giving <i>T</i> = 24°C. That is <b>wrong</b> — it forgets that the ice must first melt, which silently eats up a huge chunk of heat.',
          '<b>The correct 10-second budget:</b><br>• Heat the warm water can give as it cools to 0°C: 20 × 1 × 30 = 600 cal.<br>• Heat needed just to melt the ice: 5 × 80 = 400 cal.',
          'Since 600 > 400, all the ice melts and there is 600 − 400 = 200 cal left over. This surplus warms the total 25 g of water (the original 20 g + the 5 g just melted), now all at 0°C:<br>200 = (25)(1)(<i>T</i> − 0)',
          '<b>Speed insight:</b> in any ice-plus-water problem, first spend heat on melting (the latent step), then see what’s left for warming. Skipping the latent step is the single most common NEET error here.',
        ],
        ans: '<i>T</i> = 8 °C',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (links mechanics + calorimetry + latent heat)',
        q: 'A lead pellet is fired from an air gun and strikes a thick wall, coming to rest. Its initial temperature is 27°C. If 50% of its kinetic energy is converted into heat retained by the pellet, find the minimum speed at which the pellet melts completely. For lead: melting point = 327°C, <i>c</i> = 128 J kg<sup>−1</sup> K<sup>−1</sup>, <i>L</i><sub><i>f</i></sub> = 2.5 × 10<sup>4</sup> J kg<sup>−1</sup>.',
        steps: [
          '<b>Reasoning — three concepts in sequence.</b> The pellet’s kinetic energy becomes heat; that heat must first warm the lead from 27°C to its melting point 327°C, and then melt it (latent heat). “Melts completely” means we supply exactly enough to reach the melting point and complete the fusion.',
          '<b>Step 1 — Heat needed per unit mass</b> (Δ<i>T</i> = 327 − 27 = 300 K):<br><i>Q</i>/<i>m</i> = <i>c</i> Δ<i>T</i> + <i>L</i><sub><i>f</i></sub> = (128)(300) + 2.5 × 10<sup>4</sup> = 38400 + 25000 = 63400 J/kg.',
          '<b>Step 2 — Energy bookkeeping.</b> Half the kinetic energy per unit mass becomes this heat:<br>0.50 × ½<i>v</i><sup>2</sup> = <i>Q</i>/<i>m</i> = 63400.',
          '<b>Step 3 — Solve for <i>v</i>:</b><br>¼<i>v</i><sup>2</sup> = 63400 ⇒ <i>v</i><sup>2</sup> = 253600',
          'The mass cancels entirely — the answer depends only on the material and the energy fraction. Forgetting the latent-heat term (writing only <i>c</i>Δ<i>T</i>) would give a wrongly low speed.',
        ],
        ans: '<i>v</i> ≈ 503.6 m s<sup>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'In a perfectly insulated container, 30 g of ice at −10°C is mixed with 5 g of steam at 100°C. Determine the final temperature and the composition of the mixture. Use <i>c</i><sub>ice</sub> = 0.5, <i>c</i><sub>water</sub> = 1 (cal g<sup>−1</sup> °C<sup>−1</sup>), <i>L</i><sub><i>f</i></sub> = 80, <i>L</i><sub><i>v</i></sub> = 540 (cal g<sup>−1</sup>).',
        steps: [
          '<b>Step 1 — Budget the cold side (ice) up to 0°C, all liquid:</b><br>• warm ice −10 → 0: 30 × 0.5 × 10 = 150 cal<br>• melt all ice: 30 × 80 = 2400 cal<br>• <b>subtotal to reach water at 0°C:</b> 2550 cal.',
          '<b>Step 2 — Budget the hot side (steam) down to 0°C:</b><br>• condense all steam: 5 × 540 = 2700 cal<br>• cool the condensed water 100 → 0: 5 × 100 = 500 cal<br>• <b>subtotal available down to 0°C:</b> 3200 cal.',
          '<b>Step 3 — Test the final state.</b> Just condensing the steam releases 2700 cal, which already exceeds the 2550 cal needed to turn all the ice into water at 0°C. So all the ice melts and all the steam condenses, and the final temperature lies somewhere strictly between 0°C and 100°C. Assume final temperature <i>T</i> with everything liquid.',
          '<b>Step 4 — Energy balance:</b><br>150 + 2400 + 30<i>T</i> (gained by ice side) = 2700 + 5(100 − <i>T</i>) (lost by steam side)<br>2550 + 30<i>T</i> = 3200 − 5<i>T</i><br>35<i>T</i> = 650',
          '<b>Step 5 — Composition & sanity check.</b> Final state: all 30 + 5 = 35 g is <b>liquid water at ≈18.6°C</b>. The result obeys 0 < 18.6 < 100, confirming both phase changes completed. Had Step 3 shown the steam couldn’t fully condense, the answer would instead be a steam-water mixture pinned at 100°C — which is exactly the kind of branch JEE Advanced tests.',
        ],
        ans: '<i>T</i> ≈ 18.6 °C',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Calculate the total heat required to convert 50 g of ice at 0°C completely into steam at 100°C. (Use cal-units: <i>L</i><sub><i>f</i></sub> = 80, <i>c</i><sub>water</sub> = 1, <i>L</i><sub><i>v</i></sub> = 540.)',
            a: '36,000 cal = 3.6 × 10<sup>4</sup> cal (≈ 1.51 × 10<sup>5</sup> J)',
          },
          {
            q: '[NEET] A copper calorimeter of water equivalent 10 g contains 90 g of water at 20°C. Now 100 g of water at 60°C is poured in. Find the equilibrium temperature.',
            a: '40 °C',
          },
          {
            q: '[JEE Main] A 200 g copper block at 200°C is dropped into 300 g of water at 25°C held in a 50 g copper calorimeter. Find the final temperature. Take <i>c</i><sub>Cu</sub> = 0.09 and <i>c</i><sub>water</sub> = 1 (cal g<sup>−1</sup> °C<sup>−1</sup>).',
            a: '≈ 34.8 °C',
          },
          {
            q: '[JEE Main] What mass of ice at 0°C can be melted by passing 50 g of steam at 100°C through it, the steam finally becoming water at 0°C?',
            a: '400 g',
          },
          {
            q: '[JEE Advanced] In an insulated vessel, 10 g of ice at 0°C is mixed with 10 g of steam at 100°C. Find the final temperature and the masses of water and steam present at equilibrium.',
            a: 'Final temperature 100 °C; about 3.33 g of steam condenses, giving ≈ 13.3 g water + ≈ 6.7 g steam.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A burn caused by steam at 100°C is far more severe than one from boiling water at 100°C. The principal reason is that:',
        opts: [
          { label: 'steam is hotter than boiling water', nudge: '<b>(a)</b> is the obvious trap, but both are at the same 100°C.' },
          { label: 'steam releases its large latent heat of vaporization as it condenses on the skin', nudge: null },
          {
            label: 'steam has a higher specific heat than water',
            nudge: '<b>(c)</b> is false and irrelevant; steam’s specific heat is actually lower than water’s.',
          },
          {
            label: 'steam molecules travel faster and hit harder',
            nudge: '<b>(d)</b> confuses a microscopic detail with the real cause; the kinetic energy of impact is negligible compared with the latent heat.',
          },
        ],
        correct: 1,
        solution: 'As steam condenses on the skin it dumps an extra ≈ 540 cal per gram (latent heat) before it even begins to cool — energy that boiling water simply does not carry.',
      },
      {
        t: 'mcq',
        q: 'Equal masses of water and cooking oil (<i>c</i><sub>oil</sub> < <i>c</i><sub>water</sub>) are given the same amount of heat. Then:',
        opts: [
          { label: 'water becomes hotter', nudge: '<b>(a)</b> reverses the logic — a very common slip.' },
          { label: 'oil becomes hotter', nudge: null },
          { label: 'both reach the same temperature', nudge: '<b>(c)</b> ignores the role of <i>c</i> altogether.' },
          { label: 'it cannot be decided', nudge: '<b>(d)</b> is avoidance; the relation fully determines the outcome.' },
        ],
        correct: 1,
        solution: 'From Δ<i>T</i> = <i>Q</i>/(<i>mc</i>), with <i>Q</i> and <i>m</i> fixed, a smaller <i>c</i> gives a larger temperature rise. Oil, having the smaller specific heat, heats up more.',
      },
      {
        t: 'mcq',
        q: '1 g of ice at 0°C and 1 g of water at 0°C are each supplied with 80 cal of heat. Afterwards:',
        opts: [
          { label: 'the ice sample is hotter', nudge: '<b>(a)</b> and <b>(c)</b> misjudge where the latent-heat step applies.' },
          { label: 'the water sample is hotter', nudge: null },
          { label: 'both are at the same temperature', nudge: '<b>(a)</b> and <b>(c)</b> misjudge where the latent-heat step applies.' },
          { label: 'both remain at 0°C', nudge: '<b>(d)</b> is the trap for students who think “both start at 0, so both stay 0.”' },
        ],
        correct: 1,
        solution: 'The 80 cal given to the ice is exactly its latent heat of fusion — it all goes into melting, leaving water at <b>0°C</b>. The 80 cal given to the water raises its temperature by 80/(1 × 1) = 80°C, to <b>80°C</b>.',
      },
      {
        t: 'mcq',
        q: 'While a block of ice melts at 0°C, the heat supplied to it:',
        opts: [
          {
            label: 'increases the average kinetic energy of the molecules, raising the temperature',
            nudge: '<b>(a)</b> contradicts the constant-temperature fact of a phase change.',
          },
          { label: 'increases the molecular potential energy by breaking the crystal lattice, at constant temperature', nudge: null },
          { label: 'is entirely lost to the surroundings', nudge: '<b>(c)</b> ignores that the heat is stored as latent heat in the new phase.' },
          {
            label: 'increases kinetic and potential energy equally',
            nudge: '<b>(d)</b> is wrong because no temperature rise means no average-KE rise.',
          },
        ],
        correct: 1,
        solution: 'During melting the temperature is fixed; the energy goes into pulling molecules out of the rigid lattice (a potential-energy change), not into faster jiggling.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Skipping the latent-heat step.</b> In ice/steam problems, <i>mL</i> comes before you spend heat on warming. Treating a melt or boil as if it were <i>mc</i>Δ<i>T</i> (or ignoring it) is the number-one mistake.',
          '<b>Assuming the final state.</b> Never write “<i>T</i>(final) = something” before checking the heat budget. The hot side may not have enough heat to melt all the ice, or may have too much, leaving a steam-water mixture at 100°C.',
          '<b>Dropping the calorimeter (or its water equivalent).</b> The container absorbs heat too. Include <i>m</i><sub><i>c</i></sub><i>c</i><sub><i>c</i></sub> — or fold it in as water equivalent <i>w</i> = <i>m</i><sub><i>c</i></sub><i>c</i><sub><i>c</i></sub>/<i>c</i><sub>water</sub>.',
          '<b>Unit collisions.</b> Don’t mix cal-units with SI mid-problem. Remember 1 cal = 4.186 J, <i>L</i><sub><i>f</i></sub> = 80 cal/g ≈ 3.36 × 10<sup>5</sup> J/kg, <i>L</i><sub><i>v</i></sub> = 540 cal/g = 2.26 × 10<sup>6</sup> J/kg.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Build a running “heat budget” in cal-units (water’s specific heat is exactly 1, so the arithmetic is trivial). Tally the heat the hot side can supply, then “spend” it on the cold side’s milestones in order — warm, melt, warm, boil. The leg where your budget runs out pins down both the final temperature and the final composition, instantly and without guessing.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Temperature change:</b> <i>Q</i> = <i>mc</i> Δ<i>T</i>. <b>Phase change (constant <i>T</i>):</b> <i>Q</i> = <i>mL</i>.',
            note: '',
          },
          {
            f: '<b>Heat capacity</b> <i>C</i> = <i>mc</i>; <b>water equivalent</b> <i>w</i> = <i>mc</i> (mass of water with same heat capacity).',
            note: '',
          },
          {
            f: 'Calorimetry',
            note: '∑ <i>Q</i><sub>lost</sub> = ∑ <i>Q</i><sub>gained</sub> (insulated, no reaction) — the calorimeter counts too.',
          },
          {
            f: 'Heating curve',
            note: 'flat plateaus at melting (0°C) and boiling (100°C) — temperature frozen while heat goes into latent heat. The boiling plateau is far longer because <i>L</i><sub><i>v</i></sub> ≫ <i>L</i><sub><i>f</i></sub>.',
          },
          {
            f: 'Key constants',
            note: '<i>c</i><sub>water</sub> = 1 cal/g°C, <i>c</i><sub>ice</sub> = 0.5, <i>L</i><sub><i>f</i></sub> = 80 cal/g, <i>L</i><sub><i>v</i></sub> = 540 cal/g.',
          },
          {
            f: 'Golden rule — never assume the final state; budget the heat first.',
            note: 'Mnemonic: “Warm-Melt-Warm-Boil-Warm” for the five legs of ice → steam.',
          },
        ],
        aids: [],
      },
    ],
  },
];
