import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Topics 04 and 05: pp. 296–313 of the Class 12 Physics Master
 * Reference, word for word, each split at its Sections 1 to 8.
 * Topic 04 (pp. 296–305): Figures 4.13 and 4.14 (referred to p. 298, drawn
 * p. 299) and Figure 4.15 (referred to p. 301 in worked example 4, drawn
 * p. 302). Topic 05 (pp. 306–313): Figure 4.16 (referred to p. 308, drawn
 * p. 309). All are redrawn in lib/diagrams/physics-12-04.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 296–305 ─────────────────────────
  {
    n: '04',
    title: 'Galvanometers and Their Conversion',
    kalam: 'The two conversions are mirror images: low resistance in parallel → ammeter; high resistance in series → voltmeter.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-yield, formula-light topic that rewards clear thinking. CBSE Boards regularly ask the shunt/series conversion derivation and a short-answer on why an ammeter has low resistance (2–3 marks). JEE Main almost always carries a numerical on shunt or multiplier resistance. JEE Advanced builds multi-part comprehension problems combining conversion with circuit analysis and meter-loading errors. NEET keeps it conceptual: series-vs-parallel, ideal instruments, sensitivity.',
      },
      {
        t: 'p',
        html: 'In Topic 03 we built the moving-coil galvanometer: a current-carrying coil in a radial magnetic field twists against a spring, and because the field is radial the deflection <i>φ</i> is exactly proportional to the current,<br><i>φ</i> = (<i>NAB</i>/<i>k</i>) <i>I</i>.<br>That makes it a beautiful <b>current detector</b>. But — and this is the whole story of this topic — a raw galvanometer is almost useless as a practical meter, for two reasons:<br>1. <b>It’s hypersensitive.</b> Full-scale deflection comes from a current of just a few microamps to milliamps. Push an ordinary circuit current of several amps through it and you’ll wreck the coil.<br>2. <b>It has its own resistance.</b> The coil’s resistance <i>G</i> (often tens of ohms) isn’t negligible. Drop a galvanometer into a circuit to measure current and it changes the very current it’s trying to read.',
      },
      {
        t: 'p',
        html: 'So the engineering problem is: how do we tame this delicate, intrusive device into a rugged ammeter that reads large currents, or a voltmeter that reads voltages — without it disturbing the circuit? The answer in both cases is a single, cleverly chosen resistor.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture the galvanometer as a narrow toll-booth lane that can only handle a trickle of traffic.<br>• To make an <b>ammeter</b> (which must carry a large current but barely disturb the road), you build a wide <b>bypass road right next to the booth</b> — a tiny shunt resistance in <b>parallel</b>. Almost all the traffic roars past on the bypass; only a fixed, safe trickle goes through the booth, and the booth’s reading is scaled up to represent the total. Because the bypass is so wide (low resistance), the whole arrangement barely impedes the road — exactly what you want from an ammeter placed in series.<br>• To make a <b>voltmeter</b> (which must sample a voltage without draining current), you put a <b>long, narrow toll road — a large series resistance</b> — in front of the booth. This lets only a whisper of current through for a given voltage, so the meter sips almost nothing from the circuit it’s measuring across. That’s why a voltmeter is placed in parallel and must have high resistance.',
      },
      {
        t: 'p',
        html: 'The two conversions are mirror images: <b>low resistance in parallel → ammeter; high resistance in series → voltmeter.</b> Get that picture right and every numerical falls out.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions</b><br>• The conversions assume the galvanometer obeys <i>φ</i> ∝ <i>I</i> (linear scale), which requires the radial field of Topic 03.<br>• A <b>real</b> ammeter has small but non-zero resistance, and a <b>real</b> voltmeter has large but finite resistance — so both introduce a small, systematic loading error. The <b>ideal</b> limits (<i>R</i><sub>ammeter</sub> → 0, <i>R</i><sub>voltmeter</sub> → ∞) are approximations.<br>• Conversion resistors are assumed to carry their current without overheating — a constraint that matters in design (see worked example 3).',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: 'Let <i>I</i><sub>g</sub> = current for full-scale deflection, <i>G</i> = galvanometer (coil) resistance (written <i>R</i> in Topic 03).',
      },
      {
        t: 'formula',
        kicker: 'Galvanometer deflection',
        main: '<i>φ</i> = (<i>NAB</i>/<i>k</i>) <i>I</i>',
        legend: [],
        note: '(from the torque balance <i>NIAB</i> = <i>kφ</i>).',
      },
      {
        t: 'formula',
        kicker: 'Current sensitivity',
        main: '<i>S</i><sub><i>I</i></sub> = <i>φ</i>/<i>I</i> = <i>NAB</i>/<i>k</i>',
        legend: [],
        note: '(deflection per unit current; units div A<sup>−1</sup> or rad A<sup>−1</sup>).',
      },
      {
        t: 'formula',
        kicker: 'Figure of merit',
        main: '<i>k</i><sub>g</sub> = 1/<i>S</i><sub><i>I</i></sub> = <i>k</i>/(<i>NAB</i>)',
        legend: [],
        note: '(the current needed for one division of deflection; smaller is more sensitive).',
      },
      {
        t: 'formula',
        kicker: 'Voltage sensitivity',
        main: '<i>S</i><sub><i>V</i></sub> = <i>φ</i>/<i>V</i> = <i>NAB</i>/(<i>kG</i>) = <i>S</i><sub><i>I</i></sub>/<i>G</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Conversion to an ammeter',
        main: '(shunt <i>S</i> in parallel), to read full-scale current <i>I</i>:<br><i>S</i> = <i>I</i><sub>g</sub><i>G</i>/(<i>I</i> − <i>I</i><sub>g</sub>)<br>range factor <i>n</i> = <i>I</i>/<i>I</i><sub>g</sub> ⇒ <i>S</i> = <i>G</i>/(<i>n</i> − 1)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Effective ammeter resistance',
        main: '<i>R</i><sub>A</sub> = <i>GS</i>/(<i>G</i> + <i>S</i>) (small)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Conversion to a voltmeter',
        main: '(multiplier <i>R</i> in series), to read full-scale voltage <i>V</i>:<br><i>R</i> = <i>V</i>/<i>I</i><sub>g</sub> − <i>G</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Effective voltmeter resistance',
        main: '<i>R</i><sub>V</sub> = <i>G</i> + <i>R</i> = <i>V</i>/<i>I</i><sub>g</sub> (large)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Ideal instruments',
        main: 'ideal ammeter <i>R</i><sub>A</sub> = 0<br>ideal voltmeter <i>R</i><sub>V</sub> = ∞',
        legend: [],
        note: 'The closer a real meter is to its ideal, the smaller the disturbance it causes.',
      },
      {
        t: 'p',
        html: 'Units: <i>I</i>, <i>I</i><sub>g</sub> in A; <i>G</i>, <i>S</i>, <i>R</i> in Ω; <i>V</i> in V; <i>S</i><sub><i>I</i></sub> in div A<sup>−1</sup>; <i>S</i><sub><i>V</i></sub> in div V<sup>−1</sup>.',
      },

      { t: 'part', title: 'Key derivations and procedures' },
      { t: 'p', html: '<b>Derivation A — Converting a galvanometer to an ammeter (the shunt)</b>' },
      { t: 'fig', id: 'p12-04-fig-4.13' },
      {
        t: 'p',
        html: '<b>The reasoning.</b> We want the meter to handle a large total current <i>I</i> while still letting only <i>I</i><sub>g</sub> (the safe full-scale value) through the coil. Put a small shunt <i>S</i> in <b>parallel</b> so the excess current (<i>I</i> − <i>I</i><sub>g</sub>) detours around the coil.',
      },
      {
        t: 'p',
        html: 'Because <i>G</i> and <i>S</i> are in parallel, the potential difference across them is <b>equal</b>:<br><i>I</i><sub>g</sub><i>G</i> = (<i>I</i> − <i>I</i><sub>g</sub>)<i>S</i>.',
      },
      {
        t: 'p',
        html: '<b>Physical reasoning:</b> parallel elements share the same voltage; this single equation pins down <i>S</i>. Solving,<br><i>S</i> = <i>I</i><sub>g</sub><i>G</i>/(<i>I</i> − <i>I</i><sub>g</sub>).',
      },
      {
        t: 'p',
        html: 'The effective resistance <i>R</i><sub>A</sub> = <i>GS</i>/(<i>G</i> + <i>S</i>) is tiny (dominated by the small <i>S</i>), so inserting this ammeter <b>in series</b> barely changes the circuit current — exactly the design goal. Note that the larger the range we want (bigger <i>I</i>), the smaller the shunt must be.',
      },
      { t: 'p', html: '<b>Derivation B — Converting a galvanometer to a voltmeter (the multiplier)</b>' },
      { t: 'fig', id: 'p12-04-fig-4.14' },
      {
        t: 'p',
        html: '<b>The reasoning.</b> We want full-scale deflection (still current <i>I</i><sub>g</sub> through the coil) to correspond to a chosen voltage <i>V</i> across the instrument. Put a large multiplier <i>R</i> in <b>series</b>, so that the whole of <i>V</i> drives just <i>I</i><sub>g</sub> through the chain:<br><i>V</i> = <i>I</i><sub>g</sub>(<i>G</i> + <i>R</i>)   ⇒   <i>R</i> = <i>V</i>/<i>I</i><sub>g</sub> − <i>G</i>.',
      },
      {
        t: 'p',
        html: '<b>Physical reasoning:</b> in series the same current flows through both, and the voltages add. The effective resistance <i>R</i><sub>V</sub> = <i>G</i> + <i>R</i> = <i>V</i>/<i>I</i><sub>g</sub> is large, so when connected <b>in parallel</b> across a circuit element it draws almost no current and barely disturbs the voltage being measured.',
      },
      {
        t: 'p',
        html: 'To get several ranges <i>V</i><sub>1</sub> < <i>V</i><sub>2</sub> < <i>V</i><sub>3</sub> with one galvanometer, stack series resistors and tap between them. For each range, the total series resistance satisfies <i>I</i><sub>g</sub>(<i>G</i> + <i>R</i><sub>total</sub>) = <i>V</i><sub>range</sub>, so:',
      },
      {
        t: 'proc',
        title: 'Procedure — Designing a multirange voltmeter',
        steps: [
          '<i>R</i><sub>1</sub> = <i>V</i><sub>1</sub>/<i>I</i><sub>g</sub> − <i>G</i>.',
          '<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> = <i>V</i><sub>2</sub>/<i>I</i><sub>g</sub> − <i>G</i> ⇒ <i>R</i><sub>2</sub> = (<i>V</i><sub>2</sub> − <i>V</i><sub>1</sub>)/<i>I</i><sub>g</sub>.',
          '<i>R</i><sub>3</sub> = (<i>V</i><sub>3</sub> − <i>V</i><sub>2</sub>)/<i>I</i><sub>g</sub>, and so on — each added resistor handles the increment in range.',
        ],
      },
      { t: 'p', html: '<b>Procedure — Designing a multirange ammeter</b>' },
      {
        t: 'p',
        html: 'The mirror-image problem: several current ranges <i>I</i><sub>1</sub> < <i>I</i><sub>2</sub> < <i>I</i><sub>3</sub> from one galvanometer, by switching between different shunts. For each desired range, the shunt that bypasses the excess current is<br><i>S</i><sub><i>j</i></sub> = <i>I</i><sub>g</sub><i>G</i>/(<i>I</i><sub><i>j</i></sub> − <i>I</i><sub>g</sub>).',
      },
      {
        t: 'p',
        html: 'Since a larger range needs a smaller shunt, <i>S</i><sub>1</sub> > <i>S</i><sub>2</sub> > <i>S</i><sub>3</sub>. In practice the shunts are arranged as a chain (“Ayrton shunt”) so that switching the tap point changes the effective shunt without ever leaving the coil unprotected — and each tap is designed from the same equal-voltage condition, with the part of the chain that ends up in series with the coil added to <i>G</i>: <i>I</i><sub>g</sub>(<i>G</i> + <i>R</i><sub>series</sub>) = (<i>I</i><sub><i>j</i></sub> − <i>I</i><sub>g</sub>)<i>S</i><sub><i>j</i></sub>.',
      },
      { t: 'p', html: '<b>A note on sensitivity — why you can’t just crank up <i>N</i></b>' },
      {
        t: 'p',
        html: 'Current sensitivity is <i>S</i><sub><i>I</i></sub> = <i>NAB</i>/<i>k</i>, so it seems you could make a galvanometer arbitrarily sensitive by piling on turns <i>N</i>, enlarging the area <i>A</i>, strengthening the field <i>B</i>, or softening the spring <i>k</i>. But each lever has a cost:<br>• More turns <i>N</i> or larger area <i>A</i> ⇒ a longer, heavier coil ⇒ <b>larger resistance <i>G</i> and a bulkier, more sluggish instrument</b>. Crucially, since <i>S</i><sub><i>V</i></sub> = <i>NAB</i>/(<i>kG</i>) and <i>G</i> itself grows roughly with <i>N</i>, <b>raising <i>N</i> buys current sensitivity but not voltage sensitivity</b> — a favourite exam subtlety.<br>• A weaker spring (small <i>k</i>) makes the coil flimsy and slow to settle.<br>• A stronger <i>B</i> helps directly but is limited by the available magnet.',
      },
      {
        t: 'p',
        html: 'So “more sensitive” is always a design trade-off, not a free lunch — which is exactly why current sensitivity and voltage sensitivity are quoted as two separate figures of merit.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A galvanometer has resistance <i>G</i> = 50 Ω and shows full-scale deflection at <i>I</i><sub>g</sub> = 2.0 mA. Convert it into an ammeter reading 5.0 A full scale. Find the shunt resistance.',
        steps: [
          '<b>Given:</b> <i>G</i> = 50 Ω, <i>I</i><sub>g</sub> = 2.0 × 10<sup>−3</sup> A, <i>I</i> = 5.0 A.',
          '<i>S</i> = <i>I</i><sub>g</sub><i>G</i>/(<i>I</i> − <i>I</i><sub>g</sub>) = (2.0 × 10<sup>−3</sup>)(50)/(5.0 − 0.002) = 0.10/4.998',
        ],
        ans: '<i>S</i> ≈ 0.020 Ω — a very small resistance in parallel, as expected for an ammeter.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A galvanometer (<i>G</i> = 60 Ω, <i>I</i><sub>g</sub> = 1.0 mA) is to be converted into a voltmeter reading 3.0 V full scale. What resistance is needed, and how is it connected?',
        steps: [
          '<b>The trap:</b> students (i) connect it in parallel like a shunt, or (ii) forget to subtract <i>G</i> and just write <i>R</i> = <i>V</i>/<i>I</i><sub>g</sub>.',
          '<b>Right approach — large resistance in series:</b><br><i>R</i> = <i>V</i>/<i>I</i><sub>g</sub> − <i>G</i> = 3.0/(1.0 × 10<sup>−3</sup>) − 60 = 3000 − 60',
        ],
        ans: '<i>R</i> = 2940 Ω in <b>series</b>. The −<i>G</i> correction is small here (60 out of 3000) but examiners award/deduct for it, and in low-range voltmeters it matters a lot.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — two concepts',
        q: 'A galvanometer (<i>G</i> = 80 Ω, <i>I</i><sub>g</sub> = 2.0 mA) is converted into an ammeter of range 5.0 A. (a) Find the shunt. (b) A shunt component is available but is rated to dissipate at most 0.50 W. Is it safe to use here?',
        steps: [
          '<b>Concept 1 — shunt value:</b><br><i>S</i> = <i>I</i><sub>g</sub><i>G</i>/(<i>I</i> − <i>I</i><sub>g</sub>) = (2.0 × 10<sup>−3</sup>)(80)/4.998 = 0.16/4.998 = 0.0320 Ω.',
          '<b>Concept 2 — power dissipated in the shunt at full scale.</b> The shunt carries (<i>I</i> − <i>I</i><sub>g</sub>) = 4.998 A, with voltage <i>I</i><sub>g</sub><i>G</i> = 0.16 V across it:<br><i>P</i> = (<i>I</i> − <i>I</i><sub>g</sub>) × (<i>I</i><sub>g</sub><i>G</i>) = 4.998 × 0.16 = 0.80 W.',
        ],
        ans: '0.80 W > 0.50 W — the component would overheat and burn out. <b>Not safe</b>; a higher-rated shunt is required.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        fig: 'p12-04-fig-4.15',
        q: 'A 60 V battery (negligible internal resistance) drives two equal resistors <i>R</i><sub>1</sub> = <i>R</i><sub>2</sub> = 10 kΩ in series. A voltmeter of internal resistance <i>R</i><sub>V</sub> = 20 kΩ is connected across <i>R</i><sub>2</sub> to measure the voltage across it. Find (a) the true voltage across <i>R</i><sub>2</sub>, (b) the voltage the meter actually reads, and (c) the percentage error.',
        steps: [
          '<b>(a) True voltage</b> (no meter): equal resistors split equally, so <i>V</i><sub>2</sub><sup>true</sup> = 60/2 = 30 V.',
          '<b>(b) With the voltmeter loading <i>R</i><sub>2</sub>:</b> the meter is in parallel with <i>R</i><sub>2</sub>:<br><i>R</i><sub>par</sub> = <i>R</i><sub>2</sub><i>R</i><sub>V</sub>/(<i>R</i><sub>2</sub> + <i>R</i><sub>V</sub>) = (10)(20)/30 kΩ = 6.667 kΩ.<br>Now the divider is <i>R</i><sub>1</sub> = 10 kΩ in series with 6.667 kΩ:<br><i>V</i><sub>read</sub> = 60 × 6.667/(10 + 6.667) = 60 × 0.400 = 24 V.',
          '<b>(c) Percentage error:</b><br>(30 − 24)/30 × 100% = 20%.',
          '<b>Lesson:</b> a “good-looking” voltmeter whose resistance is merely comparable to the circuit resistance loads it badly. This is precisely why a voltmeter must have <i>R</i><sub>V</sub> ≫ circuit resistance — ideally infinite.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A galvanometer (<i>G</i> = 100 Ω, <i>I</i><sub>g</sub> = 5.0 mA) is converted to an ammeter of range 2.0 A. Find the shunt.',
            a: '<i>S</i> = <i>I</i><sub>g</sub><i>G</i>/(<i>I</i> − <i>I</i><sub>g</sub>) ≈ 0.25 Ω.',
          },
          {
            q: '[NEET] A galvanometer (<i>G</i> = 25 Ω, <i>I</i><sub>g</sub> = 4.0 mA) is made into a voltmeter reading 10 V. Find the series resistance.',
            a: '<i>R</i> = <i>V</i>/<i>I</i><sub>g</sub> − <i>G</i> = 2475 Ω.',
          },
          {
            q: '[JEE Main] Design a two-range voltmeter (1 V and 10 V) from a galvanometer with <i>G</i> = 10 Ω, <i>I</i><sub>g</sub> = 1.0 mA. Find the two series resistors.',
            a: '<i>R</i><sub>1</sub> = 990 Ω (1 V range); additional <i>R</i><sub>2</sub> = 9000 Ω (for 10 V range).',
          },
          {
            q: '[JEE Main] In a moving-coil galvanometer the number of turns <i>N</i> is doubled (everything else, including wire, unchanged so <i>G</i> also doubles). What happens to its current sensitivity and its voltage sensitivity?',
            a: 'Current sensitivity <b>doubles</b> (∝ <i>N</i>); voltage sensitivity <b>unchanged</b> (since <i>S</i><sub><i>V</i></sub> = <i>NAB</i>/(<i>kG</i>) and <i>G</i> ∝ <i>N</i> too).',
          },
          {
            q: '[JEE Advanced] A galvanometer (<i>G</i> = 90 Ω, <i>I</i><sub>g</sub> = 5.0 mA) is converted to an ammeter of range 3.0 A. Find the shunt and the effective resistance of the ammeter.',
            a: '<i>S</i> ≈ 0.150 Ω; <i>R</i><sub>A</sub> = <i>GS</i>/(<i>G</i> + <i>S</i>) ≈ 0.150 Ω.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'An ammeter must be connected in series and should have:',
        opts: [
          {
            label: 'high resistance, to limit the current',
            nudge: '<b>(a)</b>, <b>(c)</b> describe a voltmeter’s requirement, not an ammeter’s — the classic role-reversal trap.',
          },
          { label: 'very low resistance, so it barely changes the circuit current', nudge: null },
          {
            label: 'infinite resistance',
            nudge: '<b>(a)</b>, <b>(c)</b> describe a voltmeter’s requirement, not an ammeter’s — the classic role-reversal trap.',
          },
          { label: 'the same resistance as the circuit', nudge: '<b>(d)</b> would roughly halve the current — a gross disturbance.' },
        ],
        correct: 1,
        solution: 'In series, any added resistance reduces the current being measured; a near-zero resistance keeps the disturbance negligible.',
      },
      {
        t: 'mcq',
        q: 'To convert a galvanometer into a voltmeter, one connects:',
        opts: [
          { label: 'a low resistance in parallel', nudge: '<b>(a)</b> is the ammeter (shunt) recipe — the most common confusion.' },
          { label: 'a high resistance in parallel', nudge: '<b>(b)</b> has the right magnitude (high) but the wrong topology (parallel).' },
          { label: 'a high resistance in series', nudge: null },
          { label: 'a low resistance in series', nudge: '<b>(d)</b> has the right topology (series) but the wrong magnitude (low).' },
        ],
        correct: 2,
        solution: 'A large series multiplier ensures only a tiny current flows for a given voltage, giving high effective resistance for parallel connection across a circuit.',
      },
      {
        t: 'mcq',
        q: 'A galvanometer is converted into an ammeter using a shunt <i>S</i>. If the desired range <i>I</i> is increased (for the same <i>I</i><sub>g</sub> and <i>G</i>), the required shunt:',
        opts: [
          { label: 'increases', nudge: '<b>(a)</b> inverts the relationship.' },
          { label: 'decreases', nudge: null },
          { label: 'stays the same', nudge: '<b>(c)</b> ignores the <i>I</i>-dependence.' },
          { label: 'becomes equal to <i>G</i>', nudge: '<b>(d)</b> has no basis.' },
        ],
        correct: 1,
        solution: '<i>S</i> = <i>I</i><sub>g</sub><i>G</i>/(<i>I</i> − <i>I</i><sub>g</sub>): a larger <i>I</i> enlarges the denominator, so <i>S</i> shrinks. Bigger ranges need smaller shunts (more current must bypass the coil).',
      },
      {
        t: 'mcq',
        q: 'A real voltmeter of resistance <i>R</i><sub>V</sub> reads the voltage across a resistor. As <i>R</i><sub>V</sub> increases toward infinity, the reading:',
        opts: [
          { label: 'approaches the true (undisturbed) voltage', nudge: null },
          { label: 'approaches zero', nudge: '<b>(b)</b> is the opposite extreme (a low-resistance “voltmeter” shorts the element).' },
          { label: 'doubles', nudge: '<b>(c)</b> is unsupported.' },
          {
            label: 'is unaffected by <i>R</i><sub>V</sub>',
            nudge: '<b>(d)</b> ignores the loading effect entirely (the error in worked example 4).',
          },
        ],
        correct: 0,
        solution: 'Larger <i>R</i><sub>V</sub> draws less current, loading the circuit less, so the reading converges to the true value — the ideal-voltmeter limit.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Swapping the two recipes.</b> Ammeter = low resistance (shunt) in parallel; voltmeter = high resistance (multiplier) in series. Anchor it to the toll-booth picture, not rote memory.',
          '<b>Forgetting −<i>G</i> in the voltmeter formula.</b> <i>R</i> = <i>V</i>/<i>I</i><sub>g</sub> − <i>G</i>, not <i>V</i>/<i>I</i><sub>g</sub>. The coil resistance is part of the series chain.',
          '<b>Using <i>I</i> instead of (<i>I</i> − <i>I</i><sub>g</sub>) in the shunt.</b> Only the excess current bypasses the coil, so the denominator is <i>I</i> − <i>I</i><sub>g</sub>.',
          '<b>Treating real meters as ideal.</b> A finite-resistance voltmeter or non-zero-resistance ammeter perturbs the circuit; in precision problems you must account for the loading.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Before plugging numbers, sanity-check the size of your answer against the picture: a shunt should come out <b>small</b> (milliohms to ohms) and a multiplier should come out <b>large</b> (kilohms). If your “shunt” is 3000 Ω or your “multiplier” is 0.02 Ω, you’ve swapped the formulas — catch it in one glance.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Galvanometer',
            note: '<i>φ</i> = (<i>NAB</i>/<i>k</i>)<i>I</i>; current sensitivity <i>S</i><sub><i>I</i></sub> = <i>NAB</i>/<i>k</i>; voltage sensitivity <i>S</i><sub><i>V</i></sub> = <i>NAB</i>/(<i>kG</i>); figure of merit = 1/<i>S</i><sub><i>I</i></sub>.',
          },
          {
            f: 'Ammeter (shunt <i>S</i>, parallel)',
            note: '<i>S</i> = <i>I</i><sub>g</sub><i>G</i>/(<i>I</i> − <i>I</i><sub>g</sub>) = <i>G</i>/(<i>n</i> − 1); effective <i>R</i><sub>A</sub> small.',
          },
          {
            f: 'Voltmeter (multiplier <i>R</i>, series)',
            note: '<i>R</i> = <i>V</i>/<i>I</i><sub>g</sub> − <i>G</i>; effective <i>R</i><sub>V</sub> = <i>V</i>/<i>I</i><sub>g</sub> large.',
          },
          { f: 'Ideal', note: 'ammeter <i>R</i> → 0; voltmeter <i>R</i> → ∞.' },
          { f: 'Multirange voltmeter', note: 'each added series resistor = (range increment)/<i>I</i><sub>g</sub>.' },
        ],
        aids: ['“Ammeter = A low, in series; Voltmeter = Very high, parallel”', '“shunt is small, multiplier is mighty.”'],
      },
    ],
  },

  // ───────────────────────── Topic 05 · pp. 306–313 ─────────────────────────
  {
    n: '05',
    title: 'The Magnetic Dipole: Current Loop, Revolving Electron & Bohr Magneton',
    kalam: 'Now we tie it together with one unifying idea: a current loop is the fundamental “atom” of magnetism.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The conceptual capstone of the chapter. CBSE Boards ask the revolving-electron derivation and the magnetic-moment definition (3 marks). JEE Main pulls questions on the dipole far-field and the electric–magnetic analogy. JEE Advanced links the dipole to oscillations (compass-needle SHM) and to atomic structure. NEET reliably tests the gyromagnetic ratio and the numerical value of the Bohr magneton.',
      },
      {
        t: 'p',
        html: 'We’ve spent this whole chapter building magnetic fields from currents and watching currents feel forces. Now we tie it together with one unifying idea: <b>a current loop is the fundamental “atom” of magnetism.</b>',
      },
      {
        t: 'p',
        html: 'Look at a small current loop from far away and you can no longer see that it’s a loop — but it still produces a magnetic field, and that field looks exactly like the field of a tiny bar magnet: out of one face (a “north” pole) and into the other (a “south”). The loop has a <b>magnetic dipole moment</b> <i>m⃗</i> = <i>NIA⃗</i>, a vector pointing along the loop’s normal (right-hand rule: curl fingers along the current, thumb gives <i>m⃗</i>). Its size is just current × area × turns; its direction is the axis of the loop.',
      },
      {
        t: 'p',
        html: 'This is the magnetic mirror of the <b>electric dipole</b> you already know. An electric dipole is two charges ±<i>q</i> a distance apart, with moment <i>p⃗</i>; it feels a torque in a field and produces its own far-field. A magnetic dipole (current loop) does all the same things — torque <i>τ⃗</i> = <i>m⃗</i> × <i>B⃗</i>, energy <i>U</i> = −<i>m⃗</i> · <i>B⃗</i>, and a characteristic far-field — with <i>m⃗</i> playing the role of <i>p⃗</i>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a child running in a circle holding a charged balloon. Charge going round in a circle is a current loop, so the running child is a tiny magnet. Now shrink that picture all the way down to an <b>electron orbiting a nucleus</b>: a charge going round in a circle, a current loop, a magnet. This is the profound payoff of the topic — it explains why matter is magnetic at all. Every atom carries tiny current-loop magnets from its orbiting (and spinning) electrons, and the smallest natural unit of this atomic magnetism has a name: the <b>Bohr magneton</b>.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions</b><br>• The neat far-field formulas (axial, equatorial) hold only at distances <b>much larger than the loop’s size</b> (<i>x</i> ≫ <i>R</i>); close up you must use the exact loop field from Topic 01.<br>• The revolving-electron result <i>μ</i><sub><i>l</i></sub> = <i>eL</i>/(2<i>m</i>) uses the simple <b>classical/Bohr orbit</b> model. Real atoms also have electron <b>spin</b> (an intrinsic moment with no classical orbit), so this captures the orbital contribution only.<br>• Because the electron’s charge is <b>negative</b>, its magnetic moment points <b>opposite</b> to its angular momentum: <i>μ⃗</i><sub><i>l</i></sub> = −(<i>e</i>/(2<i>m</i>))<i>L⃗</i>.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Magnetic dipole moment of a loop',
        main: '<i>m⃗</i> = <i>NIA⃗</i>',
        legend: [],
        note: '(unit A·m<sup>2</sup>, dimensions [A L<sup>2</sup>]); direction along the normal by the right-hand rule.',
      },
      {
        t: 'formula',
        kicker: 'Torque and energy in a uniform field',
        main: '(from Topic 03):<br><i>τ⃗</i> = <i>m⃗</i> × <i>B⃗</i> (<i>τ</i> = <i>mB</i> sin <i>θ</i>)<br><i>U</i> = −<i>m⃗</i> · <i>B⃗</i> = −<i>mB</i> cos <i>θ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Work to rotate the dipole from <i>θ</i><sub>1</sub> to <i>θ</i><sub>2</sub>',
        main: '<i>W</i> = <i>U</i><sub>2</sub> − <i>U</i><sub>1</sub> = <i>mB</i>(cos <i>θ</i><sub>1</sub> − cos <i>θ</i><sub>2</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Far-field of a magnetic dipole',
        main: '(distance <i>x</i> ≫ loop size):<br><i>B</i><sub>axial</sub> = (μ<sub>0</sub>/(4π)) 2<i>m</i>/<i>x</i><sup>3</sup><br><i>B</i><sub>equatorial</sub> = (μ<sub>0</sub>/(4π)) <i>m</i>/<i>x</i><sup>3</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: 'The electric–magnetic dipole analogy',
        head: ['Quantity', 'Electric dipole', 'Magnetic dipole'],
        rows: [
          ['Moment', '<i>p⃗</i>', '<i>m⃗</i> = <i>NIA⃗</i>'],
          ['Axial field', '(1/(4πε<sub>0</sub>)) 2<i>p</i>/<i>x</i><sup>3</sup>', '(μ<sub>0</sub>/(4π)) 2<i>m</i>/<i>x</i><sup>3</sup>'],
          ['Equatorial field', '(1/(4πε<sub>0</sub>)) <i>p</i>/<i>x</i><sup>3</sup>', '(μ<sub>0</sub>/(4π)) <i>m</i>/<i>x</i><sup>3</sup>'],
          ['Torque', '<i>p⃗</i> × <i>E⃗</i>', '<i>m⃗</i> × <i>B⃗</i>'],
          ['Energy', '−<i>p⃗</i> · <i>E⃗</i>', '−<i>m⃗</i> · <i>B⃗</i>'],
        ],
        note: '(Replace <i>p⃗</i> → <i>m⃗</i> and 1/(4πε<sub>0</sub>) → μ<sub>0</sub>/(4π).)',
      },
      {
        t: 'formula',
        kicker: 'Revolving electron',
        main: '(orbital radius <i>r</i>, speed <i>v</i>, mass <i>m</i>, charge magnitude <i>e</i>):<br><i>μ</i><sub><i>l</i></sub> = <i>evr</i>/2 = <i>eL</i>/(2<i>m</i>)<br><i>μ</i><sub><i>l</i></sub>/<i>L</i> = <i>e</i>/(2<i>m</i>) ≈ 8.8 × 10<sup>10</sup> C kg<sup>−1</sup> (the gyromagnetic ratio)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Bohr magneton',
        main: '(from <i>L</i> = <i>nh</i>/(2π), smallest orbit <i>n</i> = 1):<br><i>μ</i><sub>B</sub> = <i>eh</i>/(4π<i>m</i>) ≈ 9.27 × 10<sup>−24</sup> A m<sup>2</sup> (or J T<sup>−1</sup>)',
        legend: [],
        note: null,
      },

      { t: 'part', title: 'Derivations' },
      { t: 'p', html: '<b>Derivation A — Magnetic moment of a revolving electron; the Bohr magneton</b>' },
      {
        t: 'p',
        html: '<b>Setup.</b> Model an electron (charge magnitude <i>e</i>, mass <i>m</i>) orbiting a nucleus in a circle of radius <i>r</i> at speed <i>v</i>.',
      },
      { t: 'fig', id: 'p12-04-fig-4.16' },
      {
        t: 'p',
        html: '<b>Step 1 — the orbit is a tiny current.</b> The electron completes one revolution in time <i>T</i> = 2π<i>r</i>/<i>v</i>, so it constitutes a current<br><i>I</i> = <i>e</i>/<i>T</i> = <i>ev</i>/(2π<i>r</i>).',
      },
      {
        t: 'p',
        html: '<b>Physical reasoning:</b> a charge <i>e</i> passing a point once per period <i>T</i> is, by definition, a current <i>e</i>/<i>T</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — current loop ⇒ magnetic moment.</b> With loop area <i>A</i> = π<i>r</i><sup>2</sup>,<br><i>μ</i><sub><i>l</i></sub> = <i>IA</i> = <i>ev</i>/(2π<i>r</i>) · π<i>r</i><sup>2</sup> = <i>evr</i>/2.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — express via angular momentum.</b> The orbital angular momentum is <i>L</i> = <i>mvr</i>, so <i>vr</i> = <i>L</i>/<i>m</i>, giving the clean and important result<br><i>μ</i><sub><i>l</i></sub> = (<i>e</i>/(2<i>m</i>)) <i>L</i>.',
      },
      {
        t: 'p',
        html: 'The constant <i>μ</i><sub><i>l</i></sub>/<i>L</i> = <i>e</i>/(2<i>m</i>) is the <b>gyromagnetic ratio</b>, a universal number ≈ 8.8 × 10<sup>10</sup> C kg<sup>−1</sup> that does not depend on the orbit. (Vectorially, since the electron is negative, <i>μ⃗</i><sub><i>l</i></sub> = −(<i>e</i>/(2<i>m</i>))<i>L⃗</i>.)',
      },
      {
        t: 'p',
        html: '<b>Step 4 — quantise to get the Bohr magneton.</b> Bohr’s postulate quantises angular momentum, <i>L</i> = <i>nh</i>/(2π) (<i>n</i> = 1, 2, …). Then<br><i>μ</i><sub><i>l</i></sub> = <i>e</i>/(2<i>m</i>) · <i>nh</i>/(2π) = <i>neh</i>/(4π<i>m</i>).',
      },
      {
        t: 'p',
        html: 'The smallest value, at <i>n</i> = 1, is the natural unit of atomic magnetism — the <b>Bohr magneton</b>:<br><i>μ</i><sub>B</sub> = <i>eh</i>/(4π<i>m</i>) ≈ 9.27 × 10<sup>−24</sup> A m<sup>2</sup>.',
      },
      { t: 'p', html: '<b>Derivation B — Far-field of a current loop as a dipole</b>' },
      {
        t: 'p',
        html: 'From Topic 01, the <b>exact</b> field on the axis of a loop (radius <i>R</i>, <i>N</i> turns) at distance <i>x</i> is<br><i>B</i> = μ<sub>0</sub><i>NIR</i><sup>2</sup>/(2(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>).',
      },
      {
        t: 'p',
        html: '<b>Take the far-field limit</b> <i>x</i> ≫ <i>R</i>, so (<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup> → <i>x</i><sup>3</sup>:<br><i>B</i> ≈ μ<sub>0</sub><i>NIR</i><sup>2</sup>/(2<i>x</i><sup>3</sup>).',
      },
      {
        t: 'p',
        html: 'Now substitute the magnetic moment <i>m</i> = <i>NI</i>(π<i>R</i><sup>2</sup>), i.e. <i>NIR</i><sup>2</sup> = <i>m</i>/π:<br><i>B</i><sub>axial</sub> = μ<sub>0</sub>/(2<i>x</i><sup>3</sup>) · <i>m</i>/π = (μ<sub>0</sub>/(4π)) 2<i>m</i>/<i>x</i><sup>3</sup>.',
      },
      {
        t: 'p',
        html: 'This is identical in form to the electric dipole’s axial field with <i>p</i> → <i>m</i> and 1/(4πε<sub>0</sub>) → μ<sub>0</sub>/(4π) — confirming that a current loop, seen from afar, is a magnetic dipole. The equatorial field works out to half this, <i>B</i><sub>eq</sub> = (μ<sub>0</sub>/(4π)) <i>m</i>/<i>x</i><sup>3</sup>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A circular coil of 100 turns and radius 5.0 cm carries a current of 0.40 A. Find its magnetic moment, and the torque on it in a uniform field of 0.50 T when its moment makes 30° with the field.',
        steps: [
          '<b>Magnetic moment:</b><br><i>m</i> = <i>NIA</i> = (100)(0.40) π(0.05)<sup>2</sup> = 40 × π × 2.5 × 10<sup>−3</sup> = 0.314 A m<sup>2</sup>.',
          '<b>Torque:</b><br><i>τ</i> = <i>mB</i> sin <i>θ</i> = (0.314)(0.50) sin 30° = 0.314 × 0.50 × 0.5 = 0.0785 N m.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'In the ground state of the Bohr model, an electron’s orbital angular momentum is <i>L</i> = <i>h</i>/(2π). Find its orbital magnetic moment.',
        steps: [
          '<b>The trap:</b> writing <i>μ</i> = <i>eL</i>/<i>m</i> (forgetting the factor of 2) or trying to find <i>v</i> and <i>r</i> separately (unnecessary).',
          '<b>Speed move — use <i>μ</i><sub><i>l</i></sub> = (<i>e</i>/(2<i>m</i>)) <i>L</i> directly:</b><br><i>μ</i><sub><i>l</i></sub> = <i>e</i>/(2<i>m</i>) · <i>h</i>/(2π) = <i>eh</i>/(4π<i>m</i>) = <i>μ</i><sub>B</sub> ≈ 9.27 × 10<sup>−24</sup> A m<sup>2</sup>.',
        ],
        ans: 'The ground-state orbital moment is one Bohr magneton — a value worth memorising outright.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — two concepts',
        q: 'A small circular loop of 50 turns and radius 2.0 cm carries 3.0 A. Find the magnetic field on its axis at a distance of 50 cm.',
        steps: [
          '<b>Concept 1 — magnetic moment:</b><br><i>m</i> = <i>NIA</i> = (50)(3.0) π(0.02)<sup>2</sup> = 150 × π × 4.0 × 10<sup>−4</sup> = 0.188 A m<sup>2</sup>.',
          '<b>Concept 2 — far-field</b> (since <i>x</i> = 0.50 m ≫ <i>R</i> = 0.02 m, the dipole approximation is excellent):<br><i>B</i><sub>axial</sub> = (μ<sub>0</sub>/(4π)) 2<i>m</i>/<i>x</i><sup>3</sup> = (10<sup>−7</sup>) 2(0.188)/(0.50)<sup>3</sup> = 10<sup>−7</sup> × 0.377/0.125 = 3.0 × 10<sup>−7</sup> T.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A current loop of magnetic moment <i>m</i> and moment of inertia <i>ℐ</i> (about a diameter) sits in a uniform field <i>B</i>, aligned with the field. It is given a tiny angular displacement and released. Show that it executes SHM and find the period. Then evaluate for <i>m</i> = 0.20 A m<sup>2</sup>, <i>ℐ</i> = 2.0 × 10<sup>−4</sup> kg m<sup>2</sup>, <i>B</i> = 0.10 T.',
        steps: [
          '<b>Set up the restoring torque.</b> Displaced by small angle <i>θ</i> from alignment,<br><i>τ</i> = −<i>mB</i> sin <i>θ</i> ≈ −<i>mBθ</i>   (small <i>θ</i>),<br>the minus sign showing it points back toward alignment. Newton’s law for rotation, <i>ℐθ̈</i> = <i>τ</i>:<br><i>ℐθ̈</i> = −<i>mBθ</i>   ⇒   <i>θ̈</i> = −(<i>mB</i>/<i>ℐ</i>)<i>θ</i>.',
          'This is SHM with <i>ω</i><sup>2</sup> = <i>mB</i>/<i>ℐ</i>, so<br><i>T</i> = 2π√(<i>ℐ</i>/(<i>mB</i>)).',
          '<b>Evaluate:</b><br><i>T</i> = 2π√((2.0 × 10<sup>−4</sup>)/((0.20)(0.10))) = 2π√((2.0 × 10<sup>−4</sup>)/0.020) = 2π√0.010 = 2π(0.10) = 0.63 s.',
          '(This is exactly the principle of the vibration magnetometer — a magnetic dipole oscillating like a pendulum.)',
        ],
        ans: '<i>T</i> = 2π√(<i>ℐ</i>/(<i>mB</i>))',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A 200-turn coil of area 1.5 × 10<sup>−3</sup> m<sup>2</sup> carries 2.0 A. Find its magnetic moment.',
            a: '<i>m</i> = <i>NIA</i> = 0.60 A m<sup>2</sup>.',
          },
          {
            q: '[NEET] State the gyromagnetic ratio for an orbiting electron and compute its value. (<i>e</i> = 1.6 × 10<sup>−19</sup> C, <i>m</i> = 9.1 × 10<sup>−31</sup> kg.)',
            a: '<i>e</i>/(2<i>m</i>) ≈ 8.8 × 10<sup>10</sup> C kg<sup>−1</sup>.',
          },
          {
            q: '[JEE Main] A magnetic dipole of moment 0.50 A·m<sup>2</sup> is held at 60° to a uniform 0.20 T field. Find the work needed to rotate it to 180° (anti-aligned) from this position.',
            a: '<i>W</i> = <i>mB</i>(cos 60° − cos 180°) = (0.50)(0.20)(0.5 + 1) = 0.15 J.',
          },
          {
            q: '[JEE Main] For a dipole of moment <i>m</i>, find the ratio of the axial to the equatorial far-field at the same distance.',
            a: '2 ∶ 1.',
          },
          {
            q: '[JEE Advanced] An electron orbits at radius 5.3 × 10<sup>−11</sup> m with speed 2.2 × 10<sup>6</sup> m/s. Find its orbital magnetic moment and compare with the Bohr magneton.',
            a: '<i>μ</i><sub><i>l</i></sub> = <i>evr</i>/2 ≈ 9.3 × 10<sup>−24</sup> A m<sup>2</sup> ≈ 1 <i>μ</i><sub>B</sub>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The magnetic dipole moment of a current loop points:',
        opts: [
          {
            label: 'along the current at every point',
            nudge: '<b>(a)</b>, <b>(b)</b> describe in-plane directions — but <i>m⃗</i> is perpendicular to the plane.',
          },
          {
            label: 'radially outward in the plane of the loop',
            nudge: '<b>(a)</b>, <b>(b)</b> describe in-plane directions — but <i>m⃗</i> is perpendicular to the plane.',
          },
          { label: 'along the normal to the loop, by the right-hand rule', nudge: null },
          { label: 'opposite to the magnetic field', nudge: '<b>(d)</b> is only true at one particular orientation, not in general.' },
        ],
        correct: 2,
        solution: '<i>m⃗</i> = <i>NIA⃗</i>; the area vector (normal) direction is fixed by curling the right hand along the current.',
      },
      {
        t: 'mcq',
        q: 'The ratio of the magnetic moment to the orbital angular momentum of a revolving electron is:',
        opts: [
          { label: '<i>e</i>/<i>m</i>', nudge: '<b>(a)</b> drops the factor of 2 (the single most common slip).' },
          { label: '<i>e</i>/(2<i>m</i>)', nudge: null },
          { label: '2<i>e</i>/<i>m</i>', nudge: '<b>(c)</b> has the right dimensions but the factor of 2 in the wrong place (four times too large).' },
          { label: '<i>em</i>/2', nudge: '<b>(d)</b> is dimensionally wrong.' },
        ],
        correct: 1,
        solution: 'From <i>μ</i><sub><i>l</i></sub> = (<i>e</i>/(2<i>m</i>)) <i>L</i>, the gyromagnetic ratio is <i>e</i>/(2<i>m</i>).',
      },
      {
        t: 'mcq',
        q: 'For a magnetic dipole, the axial far-field and equatorial far-field at equal distances are in the ratio:',
        opts: [
          { label: '1 ∶ 1', nudge: '<b>(a)</b> ignores the factor of 2 in the axial field.' },
          { label: '1 ∶ 2', nudge: '<b>(b)</b> inverts the ratio.' },
          { label: '2 ∶ 1', nudge: null },
          { label: '4 ∶ 1', nudge: '<b>(d)</b> counts the factor of 2 twice.' },
        ],
        correct: 2,
        solution: '<i>B</i><sub>axial</sub> = (μ<sub>0</sub>/(4π)) 2<i>m</i>/<i>x</i><sup>3</sup> and <i>B</i><sub>eq</sub> = (μ<sub>0</sub>/(4π)) <i>m</i>/<i>x</i><sup>3</sup>, so the ratio is 2 ∶ 1 — identical to the electric dipole.',
      },
      {
        t: 'mcq',
        q: 'The Bohr magneton is given by:',
        opts: [
          {
            label: '<i>eh</i>/(2π<i>m</i>)',
            nudge: '<b>(a)</b> forgets one factor of 2 (uses <i>L</i> = <i>h</i>/π or drops the gyromagnetic ½).',
          },
          { label: '<i>eh</i>/(4π<i>m</i>)', nudge: null },
          { label: '<i>eh</i>/<i>m</i>', nudge: '<b>(c)</b>, <b>(d)</b> are unsupported.' },
          { label: '2<i>eh</i>/(π<i>m</i>)', nudge: '<b>(c)</b>, <b>(d)</b> are unsupported.' },
        ],
        correct: 1,
        solution: '<i>μ</i><sub>B</sub> = <i>e</i>/(2<i>m</i>) · <i>h</i>/(2π) = <i>eh</i>/(4π<i>m</i>) ≈ 9.27 × 10<sup>−24</sup> A·m<sup>2</sup>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Wrong direction for <i>m⃗</i>.</b> It points along the normal to the loop (right-hand rule), not along the current or in the plane — and for an electron, the moment is opposite to the angular momentum (negative charge).',
          '<b>Dropping the factor of 2.</b> The gyromagnetic ratio is <i>e</i>/(2<i>m</i>) and the moment is <i>evr</i>/2 — the ½ is easy to lose and is heavily tested.',
          '<b>Using the near-field loop formula at large distance.</b> Beyond a few loop radii, use the dipole far-field (μ<sub>0</sub>/(4π)) 2<i>m</i>/<i>x</i><sup>3</sup>, not the full μ<sub>0</sub><i>NIR</i><sup>2</sup>/(2(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>) (though the latter is exact on the axis, it’s slower).',
          '<b>Sign of the work to rotate.</b> <i>W</i> = <i>mB</i>(cos <i>θ</i><sub>1</sub> − cos <i>θ</i><sub>2</sub>); rotating away from alignment costs positive work, rotating toward it releases energy.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Whenever you see a magnetic-dipole question, immediately map it onto the electric dipole you already know — same 2 ∶ 1 axial:equatorial ratio, same <i>τ</i> = <i>mB</i> sin <i>θ</i>, same <i>U</i> = −<i>mB</i> cos <i>θ</i>. You’re not learning new physics, just swapping <i>p</i> → <i>m</i> and 1/(4πε<sub>0</sub>) → μ<sub>0</sub>/(4π).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Magnetic moment', note: '<i>m⃗</i> = <i>NIA⃗</i> (A·m<sup>2</sup>, [A L<sup>2</sup>]), along the normal (right-hand rule).' },
          {
            f: 'In a field',
            note: '<i>τ</i> = <i>mB</i> sin <i>θ</i>; <i>U</i> = −<i>mB</i> cos <i>θ</i>; <i>W</i><sub><i>θ</i>₁→<i>θ</i>₂</sub> = <i>mB</i>(cos <i>θ</i><sub>1</sub> − cos <i>θ</i><sub>2</sub>).',
          },
          {
            f: 'Far-field',
            note: 'axial (μ<sub>0</sub>/(4π)) 2<i>m</i>/<i>x</i><sup>3</sup>, equatorial (μ<sub>0</sub>/(4π)) <i>m</i>/<i>x</i><sup>3</sup> (ratio 2 ∶ 1).',
          },
          { f: 'Dipole analogy', note: '<i>p</i> → <i>m</i>, 1/(4πε<sub>0</sub>) → μ<sub>0</sub>/(4π).' },
          {
            f: 'Revolving electron',
            note: '<i>μ</i><sub><i>l</i></sub> = <i>evr</i>/2 = (<i>e</i>/(2<i>m</i>)) <i>L</i>; gyromagnetic ratio <i>e</i>/(2<i>m</i>) ≈ 8.8 × 10<sup>10</sup> C/kg.',
          },
          { f: 'Bohr magneton', note: '<i>μ</i><sub>B</sub> = <i>eh</i>/(4π<i>m</i>) ≈ 9.27 × 10<sup>−24</sup> A·m<sup>2</sup>.' },
        ],
        aids: ['“current loop = baby bar magnet”', '“moment to momentum is e-over-two-m”', '“axial beats equatorial, two to one.”'],
      },
    ],
  },
];
