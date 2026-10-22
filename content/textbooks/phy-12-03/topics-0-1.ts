import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, the Chapter Guide and Topic 01: pp. 143–160 of the Class 12
 * Physics Master Reference, word for word. The guide (pp. 143–145) keeps the
 * book’s chapter map and exam table; its opening paragraph and “How to Use
 * This Master Reference” describe the printed book and are not copied (the
 * founder’s choice). Topic 01, Electric Current, Ohm’s Law & Drift Velocity
 * (pp. 146–160), is split at its Sections 1 to 8. Figures 3.1 (pp. 144–145),
 * 3.2 (pp. 147–148), 3.3 (pp. 150–151), 3.4, 3.5 and 3.6 (pp. 152–153) and
 * 3.7 (pp. 156–157) are redrawn in lib/diagrams/physics-12-03.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Chapter guide · pp. 143–145 ─────────────────────────
  {
    n: '00',
    title: 'Chapter Guide, Map & Exam Strategy',
    kalam: 'Current Electricity has one storyline: what makes charge flow, what resists it, how to power it, and how to measure it.',
    blocks: [
      { t: 'part', title: 'The chapter map' },
      {
        t: 'p',
        html: 'Current Electricity has one storyline: what makes charge flow, what resists it, how to power it, and how to measure it. The topics build on each other in exactly that order.',
      },
      {
        t: 'p',
        html: '<b>The logical flow. Topic 01 Current & Drift Velocity</b> defines the flow itself and explains, from the free-electron model, why resistance exists — the foundation everything else stands on. → <b>Topic 02 Resistivity & Materials</b> asks what the resistance of a given wire depends on (material, length, area, temperature) and sorts substances into conductors, semiconductors and insulators. → <b>Topic 03 Combination of Resistors</b> shows how to collapse many resistors into one equivalent value. → <b>Topic 04 Energy & Power</b> is where resistance does something useful — heat, light, work — and introduces the electricity bill. → <b>Topic 05 EMF & Internal Resistance</b> brings in the real battery: not a perfect source, it fights itself. → <b>Topic 06 Combination of Cells</b> groups those real batteries to get more voltage or more current. → <b>Topic 07 Kirchhoff’s Laws</b> is the master toolkit for any circuit too tangled for series/parallel tricks. → <b>Topic 08 Wheatstone Bridge & Instruments</b> applies Kirchhoff to the key measurement circuits — the bridge, the meter bridge, and the potentiometer.',
      },
      { t: 'fig', id: 'p12-03-fig-3.1' },

      { t: 'part', title: 'Exam weightage and strategy' },
      {
        t: 'table',
        title: null,
        head: ['Exam', 'What it loves in this chapter'],
        rows: [
          [
            'CBSE Boards',
            'Drift-velocity derivation of Ohm’s law, Kirchhoff statements + a network numerical, potentiometer/meter-bridge principle, <i>V</i> = <i>E</i> − <i>Ir</i>, energy & power numericals. Reliable 6–8 marks.',
          ],
          [
            'NEET',
            'Fast single-concept numericals: <i>v</i><sub>d</sub>, <i>R</i> = <i>ρL</i>/<i>A</i> under stretching, equivalent resistance, power ratios, balanced-bridge recognition. Speed over depth.',
          ],
          [
            'JEE Main',
            'Multi-step but standard: combined networks, Kirchhoff loops, cells in mixed grouping, max-power transfer, potentiometer gradient.',
          ],
          [
            'JEE Advanced',
            'Unbalanced bridges, infinite/symmetric networks, non-uniform conductors, multi-carrier and temperature-coupled problems.',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>The single most tested skill</b> across all four exams: simplifying a resistor network correctly, then applying Ohm’s law or Kirchhoff. Master Topics 03 and 07 and you have covered the majority of the marks.',
      },
    ],
  },

  // ───────────────────────── Topic 01 · pp. 146–160 ─────────────────────────
  {
    n: '01',
    title: 'Electric Current, Ohm’s Law & Drift Velocity',
    kalam: 'The signal is fast; the carriers are slow.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the conceptual foundation of the entire chapter. CBSE Boards love the drift-velocity derivation of Ohm’s law (a guaranteed 2–3 mark derivation) plus 1-mark definitions of current density and mobility. JEE Main reliably asks 1–2 numericals on <i>v</i><sub>d</sub>, relaxation time, and <i>R</i> = <i>ρL</i>/<i>A</i> under stretching. NEET favours conceptual traps on the scalar-vs-vector nature of current and the order of magnitude of drift speed. JEE Advanced builds non-uniform-conductor and multi-carrier problems on top of this base.',
      },
      {
        t: 'p',
        html: 'Picture the Old Delhi railway station on a festival morning. Thousands of people are milling about the concourse — pushing toward the chai stall, drifting back, weaving sideways, going nowhere in particular. Now the Rajdhani is announced on Platform 3. Suddenly, on top of all that random jostling, there is a slow net shuffle of the whole crowd toward the platform. Individuals still bump and zig-zag, but the crowd as a whole creeps forward.',
      },
      {
        t: 'p',
        html: 'That slow net shuffle, riding on top of furious random motion, is exactly what <b>electric current</b> is at the level of electrons.',
      },
      {
        t: 'p',
        html: 'Inside a metal, the outermost electrons of each atom are not tied to any one nucleus — they form a “sea” of <b>free electrons</b> that zip around at enormous speeds (around 10<sup>5</sup> m/s at room temperature, in the classical picture), but completely randomly. Average them over the whole wire and they go nowhere: as much charge crosses any section leftward as rightward, so the net current is zero. The wire is just sitting there.',
      },
      {
        t: 'p',
        html: 'The moment you connect a cell across the wire, you set up an <b>electric field</b> <i>E⃗</i> inside it. This field nudges every electron with a force <i>F⃗</i> = −<i>eE⃗</i>. The random storm doesn’t stop — but now there’s a gentle, persistent push superimposed on it. The electrons acquire a tiny average velocity opposite to the field. This sluggish average is the <b>drift velocity</b>, <i>v</i><sub>d</sub>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> The shocking part is how sluggish. In a typical copper wire carrying a few amperes, the drift speed is around 10<sup>−4</sup> m/s — slower than a snail, a fraction of a millimetre per second. So if electrons crawl that slowly, why does a tubelight glow the instant you flip the switch, even if the wire is metres long? Because you are not waiting for one electron to travel from the switch to the bulb. The electric field is established along the entire wire at nearly the speed of light, and every electron — including the ones already sitting inside the bulb’s filament — starts drifting almost simultaneously. It’s like a long pipe already full of water: open the tap and water gushes from the far end instantly, even though any single water molecule moves slowly. The signal is fast; the carriers are slow.',
      },
      {
        t: 'p',
        html: 'Now, <b>electric current</b> <i>I</i> is simply the rate at which charge flows past a cross-section:<br><i>I</i> = <i>q</i>/<i>t</i> (steady),   <i>I</i> = d<i>q</i>/d<i>t</i> (instantaneous).',
      },
      {
        t: 'p',
        html: 'A subtle but exam-favourite point: <b>current is a scalar, not a vector.</b> We do speak of its “direction” (the conventional current, taken as the direction positive charge would flow — opposite to the actual electron drift). But it doesn’t add like a vector. At a wire junction, currents combine by simple algebraic addition along the wire, not by the parallelogram law. Direction here is just a sign convention along a conductor, not a true vector quantity.',
      },
      { t: 'fig', id: 'p12-03-fig-3.2' },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The neat drift picture rests on the Drude free-electron model: it treats electrons as a classical gas that accelerates between collisions and gets randomised at each collision, characterised by a single average <b>relaxation time</b> <i>τ</i>. This works beautifully for ordinary metals at normal temperatures but is only an approximation — it ignores quantum effects and breaks down for semiconductors, electrolytes (where ions, not just electrons, carry charge), and gases. Likewise, the simple linear <i>I</i> = <i>nev</i><sub>d</sub><i>A</i> assumes a single type of carrier with uniform number density across the section. Keep these caveats in mind; JEE Advanced problems love to violate exactly one of them.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Electric current',
        main: '<i>I</i> = d<i>q</i>/d<i>t</i>',
        legend: ['<i>q</i> = charge (C)', '<i>t</i> = time (s)'],
        note: 'SI unit: <b>ampere (A)</b> = 1 C s<sup>−1</sup>. Dimensional formula: [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup> A<sup>1</sup>] (ampere is an SI base unit). Charge <i>q</i>: [M<sup>0</sup> L<sup>0</sup> T<sup>1</sup> A<sup>1</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Drift velocity',
        main: '<i>v</i><sub>d</sub> = <i>eEτ</i>/<i>m</i><br>⟹ <i>I</i> = <i>neA</i> <i>v</i><sub>d</sub>',
        legend: [
          '<i>n</i> = free-electron number density (m<sup>−3</sup>, dimension [L<sup>−3</sup>])',
          '<i>e</i> = electronic charge, 1.6 × 10<sup>−19</sup> C',
          '<i>A</i> = cross-sectional area',
          '<i>τ</i> = relaxation time (s)',
          '<i>m</i> = electron mass',
        ],
        note: '<i>v</i><sub>d</sub>: SI unit m s<sup>−1</sup>, dimension [M<sup>0</sup> L<sup>1</sup> T<sup>−1</sup> A<sup>0</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Current density (a true vector, along conventional current)',
        main: '<i>J⃗</i> = −<i>ne</i> <i>v⃗</i><sub>d</sub><br><i>J</i> = <i>I</i>/<i>A</i><br><i>J⃗</i> = <i>σE⃗</i>',
        legend: [],
        note: 'SI unit: A m<sup>−2</sup>. Dimensional formula: [M<sup>0</sup> L<sup>−2</sup> T<sup>0</sup> A<sup>1</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Mobility',
        main: '<i>μ</i> = |<i>v</i><sub>d</sub>|/<i>E</i> = <i>eτ</i>/<i>m</i>',
        legend: [],
        note: 'SI unit: m<sup>2</sup> V<sup>−1</sup> s<sup>−1</sup>. Dimensional formula: [M<sup>−1</sup> L<sup>0</sup> T<sup>2</sup> A<sup>1</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Ohm’s law',
        main: '<i>V</i> = <i>IR</i> (macroscopic)<br><i>J⃗</i> = <i>σE⃗</i> or <i>E⃗</i> = <i>ρJ⃗</i> (microscopic)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Resistance, resistivity, conductivity',
        main: '<i>R</i> = <i>ρL</i>/<i>A</i><br><i>ρ</i> = 1/<i>σ</i> = <i>m</i>/(<i>ne</i><sup>2</sup><i>τ</i>)',
        legend: [],
        note: '<i>R</i>: SI unit <b>ohm</b> (Ω) = V A<sup>−1</sup>, dimension [M<sup>1</sup> L<sup>2</sup> T<sup>−3</sup> A<sup>−2</sup>]. <i>ρ</i> (resistivity): SI unit Ω m, dimension [M<sup>1</sup> L<sup>3</sup> T<sup>−3</sup> A<sup>−2</sup>] — a material property, independent of size or shape. <i>σ</i> (conductivity): SI unit S m<sup>−1</sup> (siemens per metre, also Ω<sup>−1</sup> m<sup>−1</sup>), dimension [M<sup>−1</sup> L<sup>−3</sup> T<sup>3</sup> A<sup>2</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Temperature dependence',
        main: '<i>ρ</i><sub><i>T</i></sub> = <i>ρ</i><sub>0</sub>[1 + <i>α</i>(<i>T</i> − <i>T</i><sub>0</sub>)]<br><i>R</i><sub><i>T</i></sub> = <i>R</i><sub>0</sub>[1 + <i>α</i>(<i>T</i> − <i>T</i><sub>0</sub>)]',
        legend: ['<i>α</i> = temperature coefficient of resistivity, SI unit K<sup>−1</sup> (or °C<sup>−1</sup>)'],
        note: 'For metals <i>α</i> > 0; for semiconductors and insulators <i>α</i> < 0.',
      },

      { t: 'part', title: 'CBSE board derivation — drift velocity and Ohm’s law' },
      {
        t: 'p',
        html: 'This is the central derivation of the topic. We build it in three linked steps: (1) get drift velocity from the free-electron model, (2) connect it to current, (3) recover Ohm’s law and the formula for resistivity.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Drift velocity from the field.</b> Assume a uniform conductor of cross-section <i>A</i> holding free electrons of number density <i>n</i>, each of mass <i>m</i> and charge −<i>e</i>. With no field, the electrons’ velocities are random and average to zero: ⟨<i>u⃗</i><sub><i>i</i></sub>⟩ = 0.',
      },
      {
        t: 'p',
        html: 'Apply a uniform field <i>E⃗</i>. Each electron feels <i>F⃗</i> = −<i>eE⃗</i>, giving acceleration<br><i>a⃗</i> = <i>F⃗</i>/<i>m</i> = −<i>eE⃗</i>/<i>m</i>.',
      },
      {
        t: 'p',
        html: 'An electron accelerates only until its next collision with the lattice, which randomises its motion. Let <i>τ</i> be the <b>relaxation time</b> — the average time between collisions. <b>Why <i>τ</i> matters:</b> every collision wipes out the velocity gained from the field, so the electron can only build up drift over the short interval <i>τ</i>, not indefinitely. The average extra velocity it carries — the drift velocity — is the acceleration acting over this average time:<br><i>v⃗</i><sub>d</sub> = <i>a⃗</i> <i>τ</i> = −(<i>eE⃗</i>/<i>m</i>)<i>τ</i>   ⟹   <i>v</i><sub>d</sub> = <i>eEτ</i>/<i>m</i>.<br>The minus sign just says electrons drift opposite to <i>E⃗</i>; conventional current flows along <i>E⃗</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Relating current to drift velocity.</b> Consider a slice of the conductor of length <i>v</i><sub>d</sub> d<i>t</i>, the distance an electron drifts in time d<i>t</i>.',
      },
      { t: 'fig', id: 'p12-03-fig-3.3' },
      {
        t: 'p',
        html: '<b>Physical reasoning:</b> every free electron inside this slice will cross the left-hand (dashed) face within time d<i>t</i>. The slice volume is <i>A</i> · <i>v</i><sub>d</sub> d<i>t</i>, so it contains <i>n</i>(<i>A</i> <i>v</i><sub>d</sub> d<i>t</i>) electrons, carrying total charge<br>d<i>q</i> = (<i>nAv</i><sub>d</sub> d<i>t</i>)<i>e</i>.<br>Hence the current is<br><i>I</i> = d<i>q</i>/d<i>t</i> = <i>neAv</i><sub>d</sub>.<br>Dividing by area gives the <b>current density</b> <i>J</i> = <i>I</i>/<i>A</i> = <i>nev</i><sub>d</sub>, and including direction, <i>J⃗</i> = −<i>nev⃗</i><sub>d</sub> (the electrons carry charge −<i>e</i>, so <i>J⃗</i> points opposite to their drift, along <i>E⃗</i>).',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Recovering Ohm’s law.</b> Substitute the drift velocity from Step 1 into the current expression:<br><i>I</i> = <i>neA</i> <i>v</i><sub>d</sub> = <i>neA</i>(<i>eEτ</i>/<i>m</i>) = (<i>ne</i><sup>2</sup><i>τ</i>/<i>m</i>) <i>AE</i>.<br>In a uniform conductor of length <i>L</i> with potential difference <i>V</i> across it, the field is <i>E</i> = <i>V</i>/<i>L</i>. Therefore<br><i>I</i> = (<i>ne</i><sup>2</sup><i>τ</i>/<i>m</i>) <i>A</i>(<i>V</i>/<i>L</i>)   ⟹   <i>V</i> = <i>I</i>(<i>m</i>/(<i>ne</i><sup>2</sup><i>τ</i>) · <i>L</i>/<i>A</i>).<br>Comparing with <i>V</i> = <i>IR</i>, we identify<br><i>R</i> = <i>m</i>/(<i>ne</i><sup>2</sup><i>τ</i>) · <i>L</i>/<i>A</i> = <i>ρL</i>/<i>A</i>,   where <i>ρ</i> = <i>m</i>/(<i>ne</i><sup>2</sup><i>τ</i>), <i>σ</i> = <i>ne</i><sup>2</sup><i>τ</i>/<i>m</i>.',
      },
      {
        t: 'p',
        html: '<b>The physics this reveals:</b> Ohm’s law (<i>V</i> ∝ <i>I</i>) holds only because <i>n</i>, <i>e</i>, <i>m</i>, <i>τ</i> are constants of the material at a fixed temperature — making <i>ρ</i> a constant. The instant <i>τ</i> changes (say the wire heats up and collisions become more frequent), <i>ρ</i> changes and the simple linear law fails. This is precisely why a tungsten bulb filament is <b>non-ohmic</b>: as current heats it, <i>τ</i> drops, <i>ρ</i> rises, and its <i>V</i>–<i>I</i> graph curves.',
      },
      { t: 'p', html: '<b>Limitations of Ohm’s Law</b>' },
      {
        t: 'p',
        html: 'Ohm’s law is a useful approximation, not a law of nature like conservation of charge. It holds cleanly only for metallic conductors at constant temperature and modest fields. Real materials and devices deviate in three textbook-classic ways — CBSE asks for these by name, usually with the <i>V</i>–<i>I</i> graph.',
      },
      {
        t: 'p',
        html: '<b>(1) <i>V</i> is not proportional to <i>I</i> (non-linear).</b> The <i>V</i>–<i>I</i> graph is a curve, not a straight line, so resistance is no longer a single constant. The classic example is a metal whose temperature changes with current — a tungsten filament lamp. As <i>I</i> rises the filament heats, <i>τ</i> falls, <i>ρ</i> rises, and the graph bends.',
      },
      { t: 'fig', id: 'p12-03-fig-3.4' },
      {
        t: 'p',
        html: '<b>(2) The relation depends on the sign/direction of <i>V</i>.</b> Reversing the applied voltage does not simply reverse the current — the magnitude of <i>I</i> for +<i>V</i> differs from that for −<i>V</i>. The semiconductor <b>diode</b> is the standard example: it conducts freely in forward bias but almost blocks current in reverse bias.',
      },
      { t: 'fig', id: 'p12-03-fig-3.5' },
      {
        t: 'p',
        html: '<b>(3) The relation is non-unique — more than one value of <i>V</i> for the same <i>I</i>.</b> For some materials (e.g. gallium arsenide) the <i>I</i>–<i>V</i> curve is N-shaped, so a single current corresponds to several voltages. Such curves contain a <b>negative-resistance region</b> where d<i>V</i>/d<i>I</i> < 0 — current rises as voltage falls.',
      },
      { t: 'fig', id: 'p12-03-fig-3.6' },
      {
        t: 'p',
        html: '<b>Ohmic vs non-ohmic.</b> A device obeying <i>V</i> = <i>IR</i> with constant <i>R</i> is <b>ohmic</b> (a straight <i>V</i>–<i>I</i> line through the origin); anything else is <b>non-ohmic</b> (diode, transistor, thermistor, electrolyte, gas discharge, filament).',
      },
      {
        t: 'p',
        html: '<b>Static vs dynamic resistance</b> — a favourite JEE distinction for non-ohmic devices:<br><i>R</i><sub>static</sub> = <i>V</i>/<i>I</i> (reciprocal of the slope of the line from the origin, on a graph of <i>I</i> against <i>V</i>),   <i>R</i><sub>dynamic</sub> = d<i>V</i>/d<i>I</i> (reciprocal of the local slope of the curve).<br>For an ohmic resistor the two are equal; for a diode or any curved characteristic they differ, and in a negative-resistance region <i>R</i><sub>dynamic</sub> is negative even though <i>R</i><sub>static</sub> stays positive.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A copper wire of cross-sectional area 1.5 mm<sup>2</sup> carries a steady current of 3.0 A. The free-electron density of copper is <i>n</i> = 8.5 × 10<sup>28</sup> m<sup>−3</sup>. Find the drift velocity of the electrons.',
        steps: [
          '<b>Given:</b> <i>I</i> = 3.0 A, <i>A</i> = 1.5 mm<sup>2</sup> = 1.5 × 10<sup>−6</sup> m<sup>2</sup>, <i>n</i> = 8.5 × 10<sup>28</sup> m<sup>−3</sup>, <i>e</i> = 1.6 × 10<sup>−19</sup> C.',
          '<b>Formula:</b> From <i>I</i> = <i>neAv</i><sub>d</sub>,<br><i>v</i><sub>d</sub> = <i>I</i>/(<i>neA</i>).',
          '<b>Substitution:</b><br><i>v</i><sub>d</sub> = 3.0/[(8.5 × 10<sup>28</sup>)(1.6 × 10<sup>−19</sup>)(1.5 × 10<sup>−6</sup>)] = 3.0/(2.04 × 10<sup>4</sup>).',
          '<b>Interpretation:</b> Note how small this is — the electrons crawl forward at well under a millimetre per second, yet the wire carries a sizeable 3 A. This is the slow-carriers / fast-signal idea made quantitative.',
        ],
        ans: '<i>v</i><sub>d</sub> ≈ 1.47 × 10<sup>−4</sup> m s<sup>−1</sup> ≈ 0.15 mm s<sup>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A uniform wire of resistance <i>R</i> is stretched until its length becomes 1.5 times the original (its volume stays constant, since stretching conserves the amount of metal). What is the new resistance? Does its resistivity change?',
        steps: [
          '<b>The trap:</b> Most students see <i>R</i> = <i>ρL</i>/<i>A</i>, scale the length by 1.5, and answer 1.5<i>R</i>. They forget that stretching thins the wire, so <i>A</i> shrinks too — and they wrongly think resistivity changes.',
          '<b>Fast reasoning:</b> Keep volume <i>V</i><sub>0</sub> = <i>AL</i> constant. Rewrite resistance using <i>A</i> = <i>V</i><sub>0</sub>/<i>L</i>:<br><i>R</i> = <i>ρL</i>/<i>A</i> = <i>ρL</i>/(<i>V</i><sub>0</sub>/<i>L</i>) = <i>ρL</i><sup>2</sup>/<i>V</i><sub>0</sub>   ⟹   <i>R</i> ∝ <i>L</i><sup>2</sup> (at constant volume).',
          'So<br><i>R</i>′ = <i>R</i>(<i>L</i>′/<i>L</i>)<sup>2</sup> = <i>R</i>(1.5)<sup>2</sup>',
          '<b>Resistivity does not change</b> — <i>ρ</i> is a property of the material (copper is copper), wholly independent of the wire’s length or thickness. Only <i>R</i>, which depends on geometry, changes.',
          '<b>Mental shortcut:</b> For any stretching-at-constant-volume problem, <i>R</i> ∝ <i>L</i><sup>2</sup> ∝ 1/<i>A</i><sup>2</sup>. Square the length ratio and you’re done — no need to track <i>A</i> separately.',
        ],
        ans: '<i>R</i>′ = 2.25 <i>R</i>',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: multi-concept',
        q: 'For copper, the resistivity is <i>ρ</i> = 1.7 × 10<sup>−8</sup> Ω m and the free-electron density is <i>n</i> = 8.5 × 10<sup>28</sup> m<sup>−3</sup>. Using <i>m</i> = 9.1 × 10<sup>−31</sup> kg and <i>e</i> = 1.6 × 10<sup>−19</sup> C, find (a) the relaxation time <i>τ</i> and (b) the electron mobility <i>μ</i>.',
        steps: [
          'This problem links the microscopic Ohm’s law (<i>ρ</i> = <i>m</i>/(<i>ne</i><sup>2</sup><i>τ</i>)) with the definition of mobility (<i>μ</i> = <i>eτ</i>/<i>m</i>).',
          '<b>(a) Relaxation time.</b> Rearranging <i>ρ</i> = <i>m</i>/(<i>ne</i><sup>2</sup><i>τ</i>):<br><i>τ</i> = <i>m</i>/(<i>ne</i><sup>2</sup><i>ρ</i>).',
          'Compute the denominator stepwise:<br><i>ne</i><sup>2</sup> = (8.5 × 10<sup>28</sup>)(1.6 × 10<sup>−19</sup>)<sup>2</sup> = (8.5 × 10<sup>28</sup>)(2.56 × 10<sup>−38</sup>) = 2.176 × 10<sup>−9</sup>,<br><i>ne</i><sup>2</sup><i>ρ</i> = (2.176 × 10<sup>−9</sup>)(1.7 × 10<sup>−8</sup>) = 3.70 × 10<sup>−17</sup>.<br><i>τ</i> = (9.1 × 10<sup>−31</sup>)/(3.70 × 10<sup>−17</sup>)',
          '<b>(b) Mobility.</b><br><i>μ</i> = <i>eτ</i>/<i>m</i> = (1.6 × 10<sup>−19</sup>)(2.46 × 10<sup>−14</sup>)/(9.1 × 10<sup>−31</sup>) = (3.94 × 10<sup>−33</sup>)/(9.1 × 10<sup>−31</sup>)',
          '<b>Sanity check:</b> <i>τ</i> ∼ 10<sup>−14</sup> s is the textbook order of magnitude for metals at room temperature, and a copper mobility of a few ×10<sup>−3</sup> m<sup>2</sup> V<sup>−1</sup> s<sup>−1</sup> is exactly what’s measured — both answers pass the smell test.',
        ],
        ans: '(a) <i>τ</i> = 2.46 × 10<sup>−14</sup> s; (b) <i>μ</i> = 4.3 × 10<sup>−3</sup> m<sup>2</sup> V<sup>−1</sup> s<sup>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        fig: 'p12-03-fig-3.7',
        q: 'A solid conductor is shaped like a truncated cone (frustum): its radius grows linearly from <i>a</i> at the left face to <i>b</i> at the right face over a length <i>L</i>. It is made of material with resistivity <i>ρ</i> and free-electron density <i>n</i>, and carries a steady current <i>I</i> entering the small face.<br>(a) Argue that the current is the same through every cross-section. (b) Find how the drift velocity varies along the cone. (c) Find the total resistance between the two faces.',
        steps: [
          '<b>(a) Steady-state continuity.</b> In the steady state no charge piles up anywhere inside the conductor. So whatever charge enters the left face per second must leave the right face per second, and the same must hold for every slice in between. Hence <i>I</i> is identical at all cross-sections — even though the cone is fat in some places and thin in others.',
          '<b>(b) Drift velocity profile.</b> At distance <i>x</i> from the small face, the radius varies linearly:<br><i>r</i>(<i>x</i>) = <i>a</i> + ((<i>b</i> − <i>a</i>)/<i>L</i>)<i>x</i>,   <i>A</i>(<i>x</i>) = π<i>r</i>(<i>x</i>)<sup>2</sup>.<br>Since <i>I</i> = <i>neA</i>(<i>x</i>) <i>v</i><sub>d</sub>(<i>x</i>) is fixed while <i>A</i>(<i>x</i>) varies,<br><i>v</i><sub>d</sub>(<i>x</i>) = <i>I</i>/(<i>neA</i>(<i>x</i>)) = <i>I</i>/(<i>ne</i>π <i>r</i>(<i>x</i>)<sup>2</sup>) ∝ 1/<i>r</i>(<i>x</i>)<sup>2</sup>.<br>The electrons drift <b>fastest at the narrow end</b> (small <i>r</i>) and slowest at the wide end — current density crowds where the conductor is thin, exactly like river water speeding up through a narrow gorge.',
          '<b>(c) Total resistance by integration.</b> Treat the cone as a stack of thin discs of thickness d<i>x</i> in series, each contributing d<i>R</i> = <i>ρ</i> d<i>x</i>/<i>A</i>(<i>x</i>):<br><i>R</i> = ∫<sub>0</sub><sup><i>L</i></sup> <i>ρ</i> d<i>x</i>/(π<i>r</i>(<i>x</i>)<sup>2</sup>).',
          'Substitute <i>u</i> = <i>r</i>(<i>x</i>) = <i>a</i> + ((<i>b</i> − <i>a</i>)/<i>L</i>)<i>x</i>, so d<i>u</i> = ((<i>b</i> − <i>a</i>)/<i>L</i>) d<i>x</i>, i.e. d<i>x</i> = (<i>L</i>/(<i>b</i> − <i>a</i>)) d<i>u</i>, with <i>u</i> ∶ <i>a</i> → <i>b</i>:<br><i>R</i> = (<i>ρ</i>/π) · (<i>L</i>/(<i>b</i> − <i>a</i>)) ∫<sub><i>a</i></sub><sup><i>b</i></sup> d<i>u</i>/<i>u</i><sup>2</sup> = <i>ρL</i>/(π(<i>b</i> − <i>a</i>)) [−1/<i>u</i>]<sub><i>a</i></sub><sup><i>b</i></sup> = <i>ρL</i>/(π(<i>b</i> − <i>a</i>)) (1/<i>a</i> − 1/<i>b</i>).',
          'Simplifying (1/<i>a</i> − 1/<i>b</i>) = (<i>b</i> − <i>a</i>)/(<i>ab</i>):',
          '<b>Elegant check:</b> if the cone becomes a uniform cylinder, <i>b</i> → <i>a</i>, this gives <i>R</i> = <i>ρL</i>/(π<i>a</i><sup>2</sup>) = <i>ρL</i>/<i>A</i> — the standard formula, as it must. Notice the resistance is the geometric-mean radius combination (<i>ab</i> in the denominator), not the average.',
        ],
        ans: '<i>R</i> = <i>ρL</i>/(π<i>ab</i>)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A steady current of 2.5 A flows through a conductor. How many electrons cross any given cross-section in 4 minutes?',
            a: '3.75 × 10<sup>21</sup> electrons',
          },
          {
            q: '[NEET] A wire of resistance <i>R</i> is melted down and recast into a new wire of half the original length (same material, same volume of metal). What is its new resistance?',
            a: '<i>R</i>/4',
          },
          {
            q: '[JEE Main] The current density in an aluminium wire is 5 × 10<sup>6</sup> A m<sup>−2</sup> and its resistivity is 2.8 × 10<sup>−8</sup> Ω m. Find the magnitude of the electric field set up inside the wire.',
            a: '0.14 V m<sup>−1</sup>',
          },
          {
            q: '[JEE Main] A metallic resistor reads 10.0 Ω at 20°C. Its temperature coefficient of resistance is <i>α</i> = 4.0 × 10<sup>−3</sup> °C<sup>−1</sup>. Find its resistance at 120°C.',
            a: '14.0 Ω',
          },
          {
            q: '[JEE Advanced] A conductor’s circular cross-section tapers so that its radius increases from <i>a</i> at one end to 2<i>a</i> at the other, carrying a steady current <i>I</i>. Find the ratio of the electron drift speeds at the narrow end to the wide end.',
            a: '4 ∶ 1',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which statement about electric current is correct?',
        opts: [
          {
            label: 'Current is a vector along the wire and obeys the parallelogram law.',
            nudge: '<b>(A)</b> fails because no single vector can describe current along a bent wire.',
          },
          {
            label: 'Current has an associated direction but is a scalar, since currents add algebraically along a conductor.',
            nudge: null,
          },
          {
            label: 'Current density is a scalar while current is a vector.',
            nudge: '<b>(C)</b> inverts reality — current density <i>J⃗</i> is the vector; it’s the common confusion to flip them.',
          },
          {
            label: 'Both current and current density are vectors.',
            nudge: '<b>(D)</b> is wrong because current is not a vector; this trap snares students who reason “it has direction, so it must be a vector.”',
          },
        ],
        correct: 1,
        solution: 'Although we assign current a direction (conventional flow), it does not combine by vector addition — at a junction, currents simply add with signs along the wires.',
      },
      {
        t: 'mcq',
        q: 'The drift speed of conduction electrons in a metal carrying an ordinary current is of the order of:',
        opts: [
          {
            label: '3 × 10<sup>8</sup> m s<sup>−1</sup>',
            nudge: '<b>(A)</b> is the speed of light / speed at which the signal/field propagates, a classic mix-up between how fast the bulb lights and how fast electrons drift.',
          },
          {
            label: '10<sup>5</sup> m s<sup>−1</sup>',
            nudge: '<b>(B)</b> is the random thermal speed of the electrons, which is huge but averages to zero displacement.',
          },
          { label: '10<sup>−4</sup> m s<sup>−1</sup>', nudge: null },
          {
            label: '0 m s<sup>−1</sup>',
            nudge: '<b>(D)</b> tempts students who recall “average velocity is zero with no field” but forget the field gives a small non-zero drift.',
          },
        ],
        correct: 2,
        solution: 'Drift speeds are around 10<sup>−4</sup> m s<sup>−1</sup> — astonishingly slow.',
      },
      {
        t: 'mcq',
        q: 'As temperature rises, the resistance of a pure metal ____ while that of a semiconductor ____, because:',
        opts: [
          { label: 'increases / decreases — in the metal <i>τ</i> falls; in the semiconductor <i>n</i> rises sharply.', nudge: null },
          {
            label: 'decreases / increases — in the metal <i>n</i> rises; in the semiconductor <i>τ</i> falls.',
            nudge: '<b>(B)</b> swaps the mechanisms.',
          },
          {
            label: 'increases / increases — collisions increase in both.',
            nudge: '<b>(C)</b> ignores the dominant carrier-generation effect in semiconductors.',
          },
          {
            label: 'decreases / decreases — carriers move faster in both.',
            nudge: '<b>(D)</b> misattributes the change to “speed” rather than to <i>n</i> and <i>τ</i>.',
          },
        ],
        correct: 0,
        solution: 'Using <i>ρ</i> = <i>m</i>/(<i>ne</i><sup>2</sup><i>τ</i>): in a metal, <i>n</i> is essentially fixed but hotter lattice vibrations cut the relaxation time <i>τ</i>, so <i>ρ</i> (and <i>R</i>) rise. In a semiconductor, heating liberates many more carriers — <i>n</i> climbs steeply and overwhelms the drop in <i>τ</i>, so <i>ρ</i> falls.',
      },
      {
        t: 'mcq',
        q: 'A conductor has free-electron density <i>n</i> = 1.0 × 10<sup>29</sup> m<sup>−3</sup> and carries a current density of 8.0 A mm<sup>−2</sup>. The drift speed of its electrons is:',
        opts: [
          { label: '0.5 mm s<sup>−1</sup>', nudge: null },
          { label: '5 mm s<sup>−1</sup>', nudge: '<b>(B)</b> is ten times too large (a slip in the arithmetic).' },
          { label: '0.5 m s<sup>−1</sup>', nudge: '<b>(C)</b> keeps the answer in m s<sup>−1</sup> but misreads the power of ten.' },
          { label: '8 mm s<sup>−1</sup>', nudge: '<b>(D)</b> simply parrots the “8” from the question — a no-calculation trap.' },
        ],
        correct: 0,
        solution: 'Convert units first: <i>J</i> = 8.0 A mm<sup>−2</sup> = 8.0 × 10<sup>6</sup> A m<sup>−2</sup>. Then <i>v</i><sub>d</sub> = <i>J</i>/(<i>ne</i>) = (8.0 × 10<sup>6</sup>)/[(1.0 × 10<sup>29</sup>)(1.6 × 10<sup>−19</sup>)] = (8.0 × 10<sup>6</sup>)/(1.6 × 10<sup>10</sup>) = 5 × 10<sup>−4</sup> m s<sup>−1</sup> = 0.5 mm s<sup>−1</sup>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Mixing up current and current density.</b> Current <i>I</i> is a scalar ([A]); current density <i>J⃗</i> is a vector ([A m<sup>−2</sup>]). In an exam, if a quantity has a stated direction in space and units of per-area, it’s <i>J⃗</i>, not <i>I</i>.',
          '<b>Confusing the slow drift with the fast signal.</b> Drift speed ∼ 10<sup>−4</sup> m s<sup>−1</sup> explains carrier motion; the near-instant glow of a bulb is the field propagating at nearly light speed. Don’t quote <i>v</i><sub>d</sub> when asked why a light turns on instantly.',
          '<b>Treating resistivity as size-dependent.</b> <i>ρ</i> is a material constant; only <i>R</i> = <i>ρL</i>/<i>A</i> changes with shape. Stretching, recasting, or cutting a wire changes <i>R</i>, never <i>ρ</i>.',
          '<b>Forgetting unit conversion in <i>J</i>.</b> A mm<sup>−2</sup> to A m<sup>−2</sup> is a factor of 10<sup>6</sup> — the single most common arithmetic slip on drift-velocity numericals.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & accuracy):</b> For stretching / recasting at constant volume, skip the area bookkeeping and use <i>R</i> ∝ <i>L</i><sup>2</sup>. New length ratio → square it → multiply <i>R</i>. (Halving length ⇒ <i>R</i>/4; doubling ⇒ 4<i>R</i>.) And before committing to any <i>v</i><sub>d</sub> or <i>τ</i> answer, do an order-of-magnitude check: <i>v</i><sub>d</sub> ∼ 10<sup>−4</sup> m s<sup>−1</sup> and <i>τ</i> ∼ 10<sup>−14</sup> s for metals. If your answer is wildly off these, you’ve slipped a power of ten.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Current (scalar)',
            note: '<i>I</i> = d<i>q</i>/d<i>t</i>, unit A = C s<sup>−1</sup>. Conventional current is opposite to electron drift.',
          },
          {
            f: 'Drift velocity',
            note: '<i>v</i><sub>d</sub> = <i>eEτ</i>/<i>m</i>, and current <i>I</i> = <i>neAv</i><sub>d</sub>. Typical <i>v</i><sub>d</sub> ∼ 10<sup>−4</sup> m s<sup>−1</sup>.',
          },
          {
            f: 'Current density (vector)',
            note: '<i>J⃗</i> = −<i>nev⃗</i><sub>d</sub> = <i>σE⃗</i>, <i>J</i> = <i>I</i>/<i>A</i>, unit A m<sup>−2</sup>.',
          },
          { f: 'Mobility', note: '<i>μ</i> = <i>v</i><sub>d</sub>/<i>E</i> = <i>eτ</i>/<i>m</i>.' },
          {
            f: 'Ohm’s law',
            note: '<i>V</i> = <i>IR</i> (macro) ⇔ <i>J⃗</i> = <i>σE⃗</i> (micro); <i>R</i> = <i>ρL</i>/<i>A</i>, <i>ρ</i> = <i>m</i>/(<i>ne</i><sup>2</sup><i>τ</i>).',
          },
          {
            f: 'Temperature',
            note: '<i>R</i><sub><i>T</i></sub> = <i>R</i><sub>0</sub>[1 + <i>α</i>(<i>T</i> − <i>T</i><sub>0</sub>)]; metals <i>α</i> > 0 (<i>τ</i> falls), semiconductors <i>α</i> < 0 (<i>n</i> rises).',
          },
        ],
        aids: [
          '“Slow snails, fast switch” — electrons drift like snails; the field/signal travels near light speed.',
          '“<i>ρ</i> is the material’s fingerprint” — independent of size and shape; only <i>R</i> feels geometry.',
          '<b>Stretch rule:</b> constant volume ⇒ <i>R</i> ∝ <i>L</i><sup>2</sup>.',
          '“<i>J</i> is the vector, <i>I</i> is not” — current density carries direction in space; current does not.',
        ],
      },
    ],
  },
];
