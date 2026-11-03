import type { Topic } from '@/lib/textbooks';

/**
 * Class 12 Chapter 6, Topic 03: pp. 413–422 of the Class 12 Physics Master
 * Reference, word for word: Self and Mutual Induction, split at its Sections
 * 1 to 8 (Section 3 is the book’s “CBSE Board Derivations & Key
 * Procedures”). Figures 6.5 (caption p. 416, drawn on p. 417) and 6.6
 * (caption p. 418, drawn on p. 419, inside worked example 4) are redrawn in
 * lib/diagrams/physics-12-06.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 413–422 ─────────────────────────
  {
    n: '03',
    title: 'Self and Mutual Induction',
    kalam: 'Notice the coil does not oppose current itself (a steady current flows through it freely); it opposes changes in current.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A formula- and derivation-rich topic that pays off everywhere. CBSE Boards almost always carry a 3-mark derivation — self-inductance of a long solenoid or mutual inductance of two coaxial solenoids. JEE Main loves numericals on <i>L</i>, <i>M</i>, and energy stored (½<i>LI</i><sup>2</sup>). NEET asks crisp conceptual questions on the henry, the <i>L</i> ∝ <i>N</i><sup>2</sup> rule, and what <i>M</i> depends on. JEE Advanced fuses inductance with reciprocity tricks and energy-density reasoning.',
      },
      {
        t: 'p',
        html: 'So far the flux through our circuit was changed by something external — a moving magnet, a moving rod, a neighbouring field. But here is a subtle and beautiful twist: <b>a coil carrying a changing current changes its own flux, and so induces an emf in itself.</b> This is <b>self-induction</b>.',
      },
      {
        t: 'p',
        html: 'The cleanest way to feel this is the analogy of <b>inertia</b>. A loaded bullock cart resists being set into motion, and once rolling, resists being stopped — that reluctance to change its state of motion is mechanical inertia (mass). A coil behaves exactly like this toward current. Switch a circuit on, and the coil fights the rising current, slowing its climb; switch off, and the coil fights the collapse, trying to keep the current going. This is why inductance <i>L</i> is nicknamed <b>“electrical inertia”</b> — it is the electrical cousin of mass. Notice the coil does not oppose current itself (a steady current flows through it freely); it opposes changes in current.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> you have surely seen a tiny blue spark jump at a switch when you unplug a fan or a tube-light choke. That spark is self-induction caught in the act. As the switch breaks, the current is forced to drop to zero almost instantly; the coil violently opposes this sudden change by generating a large back-emf (<i>ε</i> = −<i>L</i> d<i>I</i>/d<i>t</i>, and d<i>I</i>/d<i>t</i> is enormous), which pushes the current across the opening gap as a spark. The bigger the inductance, the angrier the spark.',
      },
      {
        t: 'p',
        html: 'Now bring a <b>second</b> coil nearby. When the current in the first coil changes, its changing magnetic field threads the second coil too, inducing an emf there — without any wire connecting them. This is <b>mutual induction</b>, and it is the principle behind transformers, the wireless charging pad for your phone, an induction cooktop heating a pan, and the metal detector at an airport. The coupling quantity is the <b>mutual inductance</b> <i>M</i>: a big <i>M</i> means the two coils “talk” strongly; a small <i>M</i> means they barely notice each other.',
      },
      {
        t: 'p',
        html: 'A lovely fact you should hold onto: mutual induction is perfectly <b>reciprocal</b>. Coil 1 influences coil 2 exactly as strongly as coil 2 influences coil 1 — there is a single number <i>M</i> for the pair, with <i>M</i><sub>12</sub> = <i>M</i><sub>21</sub>.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• <i>L</i> and <i>M</i> depend <b>only on geometry and the surrounding medium</b> — number of turns, area, length, core permeability, the separation and relative orientation of the coils. They do <b>not</b> depend on the current or the emf. (Exactly like capacitance, which is fixed by plate geometry and the dielectric.)<br>• The solenoid formula <i>L</i> = μ<sub>0</sub><i>n</i><sup>2</sup><i>Al</i> assumes a <b>long</b> solenoid (uniform interior field, negligible end effects).<br>• Mutual inductance is largest when the coils share flux fully (coaxial, wound on the same core: <i>k</i> → 1) and can vanish when their axes are perpendicular (for example, one coil centred on the other’s axis: <i>k</i> → 0). In general <i>M</i> = <i>k</i>√(<i>L</i><sub>1</sub><i>L</i><sub>2</sub>) with 0 ≤ <i>k</i> ≤ 1.<br>• A <b>steady</b> current — however large — induces no self or mutual emf. Only a changing current does.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Self-induction',
        main: '<i>N</i>Φ<sub>B</sub> = <i>LI</i> ⇒ <i>L</i> = <i>N</i>Φ<sub>B</sub>/<i>I</i><br><i>ε</i> = −<i>L</i> d<i>I</i>/d<i>t</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Long solenoid',
        main: '<i>L</i> = μ<sub>0</sub><i>n</i><sup>2</sup><i>Al</i> = μ<sub>0</sub><i>N</i><sup>2</sup><i>A</i>/<i>l</i><br>with a core: <i>L</i> = <i>μ</i><sub>r</sub>μ<sub>0</sub><i>n</i><sup>2</sup><i>Al</i>',
        legend: [],
        note: '(core: multiply by <i>μ</i><sub>r</sub>)',
      },
      {
        t: 'formula',
        kicker: 'Energy stored',
        main: '<i>U</i> = ½<i>LI</i><sup>2</sup><br>energy density: <i>u</i><sub>B</sub> = <i>B</i><sup>2</sup>/(2μ<sub>0</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Mutual induction',
        main: '<i>N</i><sub>2</sub>Φ<sub>2</sub> = <i>MI</i><sub>1</sub> ⇒ <i>M</i> = <i>N</i><sub>2</sub>Φ<sub>2</sub>/<i>I</i><sub>1</sub><br><i>ε</i><sub>2</sub> = −<i>M</i> d<i>I</i><sub>1</sub>/d<i>t</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Two coaxial solenoids',
        main: '<i>M</i> = μ<sub>0</sub><i>n</i><sub>1</sub><i>n</i><sub>2</sub><i>Al</i> = μ<sub>0</sub><i>N</i><sub>1</sub><i>N</i><sub>2</sub><i>A</i>/<i>l</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Reciprocity',
        main: '<i>M</i><sub>12</sub> = <i>M</i><sub>21</sub> = <i>M</i><br>coupling: <i>M</i> = <i>k</i>√(<i>L</i><sub>1</sub><i>L</i><sub>2</sub>) (0 ≤ <i>k</i> ≤ 1)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Combinations (negligible mutual coupling)',
        main: 'Series: <i>L</i> = <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub><br>Parallel: <i>L</i> = <i>L</i><sub>1</sub><i>L</i><sub>2</sub>/(<i>L</i><sub>1</sub> + <i>L</i><sub>2</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Notation key:</b><br>• <i>L</i> — self-inductance; <i>M</i> — mutual inductance<br>• <i>N</i> — total number of turns; <i>n</i> = <i>N</i>/<i>l</i> — turns per unit length; <i>l</i> — length of coil/solenoid; <i>A</i> — cross-sectional area<br>• Φ<sub>B</sub> — flux per turn; <i>I</i> — current; <i>ε</i> — induced emf<br>• <i>U</i> — energy stored; <i>u</i><sub>B</sub> — magnetic energy density; μ<sub>0</sub> — permeability of free space; <i>μ</i><sub>r</sub> — relative permeability of core<br>• <i>k</i> — coefficient of coupling',
      },
      {
        t: 'p',
        html: '<b>Units & dimensions:</b> SI unit of both <i>L</i> and <i>M</i> is the <b>henry (H)</b>, with<br>1 H = 1 Wb/A = 1 V·s/A = 1 Ω·s = 1 J/A<sup>2</sup>.',
      },
      {
        t: 'p',
        html: 'Dimensional formula: [<i>L</i>] = [<i>M</i>] = [M L<sup>2</sup> T<sup>−2</sup> A<sup>−2</sup>] — flux dimension divided by current dimension. Crucially, <i>L</i> ∝ <i>N</i><sup>2</sup> for a fixed coil geometry, while <i>L</i> ∝ <i>n</i><sup>2</sup> (per-unit-length turns) for a fixed solenoid cross-section and length.',
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      {
        t: 'p',
        html: '<b>(a) Self-inductance of a long solenoid.</b> Take a long solenoid of length <i>l</i>, cross-sectional area <i>A</i>, with <i>n</i> turns per unit length (total turns <i>N</i> = <i>nl</i>), carrying current <i>I</i>. The field inside a long solenoid is uniform:<br><i>B</i> = μ<sub>0</sub><i>nI</i>.',
      },
      {
        t: 'p',
        html: 'The flux through one turn is Φ<sub>B</sub> = <i>BA</i> = μ<sub>0</sub><i>nIA</i>. The total flux linkage over all <i>N</i> = <i>nl</i> turns is<br><i>N</i>Φ<sub>B</sub> = (<i>nl</i>)(μ<sub>0</sub><i>nIA</i>) = μ<sub>0</sub><i>n</i><sup>2</sup><i>Al</i> <i>I</i>.',
      },
      {
        t: 'p',
        html: 'By definition <i>N</i>Φ<sub>B</sub> = <i>LI</i>, so comparing,<br><i>L</i> = μ<sub>0</sub><i>n</i><sup>2</sup><i>Al</i> = μ<sub>0</sub><i>N</i><sup>2</sup><i>A</i>/<i>l</i>.',
      },
      {
        t: 'p',
        html: 'The result confirms what intuition promised — <i>L</i> is fixed entirely by geometry (<i>n</i>, <i>A</i>, <i>l</i>) and the medium, never by the current.',
      },
      {
        t: 'p',
        html: '<b>(b) Mutual inductance of two coaxial solenoids (with reciprocity).</b> Let an inner solenoid <i>S</i><sub>1</sub> (turns per length <i>n</i><sub>1</sub>, area <i>A</i>) sit fully inside an outer solenoid <i>S</i><sub>2</sub> (turns per length <i>n</i><sub>2</sub>), both of length <i>l</i>. Pass current <i>I</i><sub>2</sub> through the outer one. Its uniform interior field is<br><i>B</i><sub>2</sub> = μ<sub>0</sub><i>n</i><sub>2</sub><i>I</i><sub>2</sub>,<br>and this threads every turn of the inner solenoid. The flux linkage with <i>S</i><sub>1</sub> (which has <i>N</i><sub>1</sub> = <i>n</i><sub>1</sub><i>l</i> turns) is<br><i>N</i><sub>1</sub>Φ<sub>1</sub> = (<i>n</i><sub>1</sub><i>l</i>)(μ<sub>0</sub><i>n</i><sub>2</sub><i>I</i><sub>2</sub>)(<i>A</i>) = μ<sub>0</sub><i>n</i><sub>1</sub><i>n</i><sub>2</sub><i>Al</i> <i>I</i><sub>2</sub>.',
      },
      {
        t: 'p',
        html: 'Since <i>N</i><sub>1</sub>Φ<sub>1</sub> = <i>M</i><sub>12</sub><i>I</i><sub>2</sub>, we read off<br><i>M</i><sub>12</sub> = μ<sub>0</sub><i>n</i><sub>1</sub><i>n</i><sub>2</sub><i>Al</i>.',
      },
      {
        t: 'p',
        html: 'If instead we drive <i>I</i><sub>1</sub> through the inner solenoid and compute the linkage with the outer one, the algebra returns the <b>same</b> expression: <i>M</i><sub>21</sub> = μ<sub>0</sub><i>n</i><sub>1</sub><i>n</i><sub>2</sub><i>Al</i>. Hence<br><i>M</i><sub>12</sub> = <i>M</i><sub>21</sub> = <i>M</i> = μ<sub>0</sub><i>n</i><sub>1</sub><i>n</i><sub>2</sub><i>Al</i>.',
      },
      {
        t: 'p',
        html: 'This equality is the <b>reciprocity theorem</b> — and it is a genuine labour-saver: when one direction is easy to calculate and the other is horrid, compute the easy one and reciprocity hands you the answer for free (we exploit this in worked example 4).',
      },
      { t: 'fig', id: 'p12-06-fig-6.5' },
      {
        t: 'p',
        html: '<b>(c) Energy stored in an inductor.</b> To build the current up from 0 to a final value <i>I</i><sub>0</sub>, an external source must do work against the back-emf <i>ε</i> = <i>L</i> d<i>I</i>/d<i>t</i>. The work done in pushing charge d<i>q</i> = <i>I</i> d<i>t</i> against this emf in time d<i>t</i> is<br>d<i>W</i> = <i>ε</i> d<i>q</i> = (<i>L</i> d<i>I</i>/d<i>t</i>)(<i>I</i> d<i>t</i>) = <i>LI</i> d<i>I</i>.',
      },
      {
        t: 'p',
        html: 'Integrating from 0 to <i>I</i><sub>0</sub>:<br><i>U</i> = ∫<sub>0</sub><sup><i>I</i>₀</sup> <i>LI</i> d<i>I</i> = ½<i>LI</i><sub>0</sub><sup>2</sup>.',
      },
      {
        t: 'p',
        html: 'This energy is not lost — it is stored in the <b>magnetic field</b>. Substituting the solenoid’s <i>L</i> = μ<sub>0</sub><i>n</i><sup>2</sup><i>Al</i> and <i>B</i> = μ<sub>0</sub><i>nI</i><sub>0</sub>, the stored energy per unit volume (<i>V</i> = <i>Al</i>) is<br><i>u</i><sub>B</sub> = <i>U</i>/(<i>Al</i>) = (½μ<sub>0</sub><i>n</i><sup>2</sup><i>Al</i> <i>I</i><sub>0</sub><sup>2</sup>)/(<i>Al</i>) = ½μ<sub>0</sub><i>n</i><sup>2</sup><i>I</i><sub>0</sub><sup>2</sup> = <i>B</i><sup>2</sup>/(2μ<sub>0</sub>),<br>the magnetic analogue of the electric energy density ½ε<sub>0</sub><i>E</i><sup>2</sup> stored in a capacitor.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A long air-cored solenoid is 0.40 m long, has 800 turns, and a cross-sectional area of 5.0 cm<sup>2</sup>. Find (a) its self-inductance, and (b) the magnitude of the self-induced emf when the current through it changes at 200 A/s.',
        steps: [
          '<b>Given:</b> <i>l</i> = 0.40 m, <i>N</i> = 800, <i>A</i> = 5.0 cm<sup>2</sup> = 5.0 × 10<sup>−4</sup> m<sup>2</sup>, d<i>I</i>/d<i>t</i> = 200 A/s.',
          '(a) <i>L</i> = μ<sub>0</sub><i>N</i><sup>2</sup><i>A</i>/<i>l</i> = (4π × 10<sup>−7</sup>)(800)<sup>2</sup>(5.0 × 10<sup>−4</sup>)/0.40. With <i>N</i><sup>2</sup> = 6.4 × 10<sup>5</sup>: <i>L</i> = (1.2566 × 10<sup>−6</sup>)(6.4 × 10<sup>5</sup>)(5.0 × 10<sup>−4</sup>)/0.40',
          '(b) |<i>ε</i>| = <i>L</i> d<i>I</i>/d<i>t</i> = (1.0 × 10<sup>−3</sup>)(200)',
        ],
        ans: '(a) <i>L</i> = 1.0 × 10<sup>−3</sup> H = 1.0 mH; (b) |<i>ε</i>| = 0.20 V.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Two coils of self-inductances <i>L</i><sub>1</sub> = 2 mH and <i>L</i><sub>2</sub> = 8 mH are wound tightly one over the other on the same core, so the coupling is essentially perfect (<i>k</i> ≈ 1). Estimate their mutual inductance.',
        steps: [
          '<b>The trap:</b> students reach for “add them” (2 + 8 = 10 mH) or “average them” (5 mH). Both wrong.',
          '<b>The fast, correct read:</b> mutual inductance from self-inductances is a <b>geometric mean</b>, not a sum:<br><i>M</i> = <i>k</i>√(<i>L</i><sub>1</sub><i>L</i><sub>2</sub>) = 1 × √((2)(8)) = √16',
          'Memorize the form <i>M</i> = <i>k</i>√(<i>L</i><sub>1</sub><i>L</i><sub>2</sub>) — perfect coupling gives the largest possible <i>M</i>, and it is the geometric (not arithmetic) mean of the two self-inductances.',
        ],
        ans: '<i>M</i> = 4 mH.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Two coaxial solenoids of equal length 0.50 m, the inner one of cross-sectional area 4.0 cm<sup>2</sup>, are wound with <i>n</i><sub>1</sub> = 2000 turns/m (inner) and <i>n</i><sub>2</sub> = 1000 turns/m (outer). The primary (outer) carries a current that is switched off, dropping from 5.0 A to 0 in 0.010 s. The secondary circuit has total resistance 10 Ω. Find (a) the mutual inductance, (b) the emf induced in the secondary, and (c) the total charge that flows through the secondary.',
        steps: [
          'This links the <i>M</i> derivation with Faraday’s law and the induced-charge result from Topic 01.',
          '(a) <i>M</i> = μ<sub>0</sub><i>n</i><sub>1</sub><i>n</i><sub>2</sub><i>Al</i> = (4π × 10<sup>−7</sup>)(2000)(1000)(4.0 × 10<sup>−4</sup>)(0.50)',
          '(b) |<i>ε</i><sub>2</sub>| = <i>M</i> |Δ<i>I</i>|/Δ<i>t</i> = (5.0 × 10<sup>−4</sup>)(5.0/0.010) = (5.0 × 10<sup>−4</sup>)(500)',
          '(c) Using <i>q</i> = Δ(flux linkage)/<i>R</i> = (<i>M</i> |Δ<i>I</i>|)/<i>R</i> (the same <i>q</i> = ΔΦ/<i>R</i> logic from Topic 01, with flux linkage = <i>MI</i>):<br><i>q</i> = (5.0 × 10<sup>−4</sup>)(5.0)/10',
        ],
        ans: '(a) <i>M</i> = 5.0 × 10<sup>−4</sup> H = 0.50 mH; (b) |<i>ε</i><sub>2</sub>| = 0.25 V; (c) <i>q</i> = 2.5 × 10<sup>−4</sup> C = 0.25 mC.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A small circular coil of <i>N</i><sub>2</sub> = 50 turns and radius <i>r</i> = 1.0 cm is placed at the <b>centre</b> of a large coplanar, coaxial coil of <i>N</i><sub>1</sub> = 200 turns and radius <i>R</i> = 0.20 m (with <i>R</i> ≫ <i>r</i>). Find the mutual inductance, and the emf induced in the small coil when the current in the large coil changes at 100 A/s.',
        fig: 'p12-06-fig-6.6',
        steps: [
          '<b>The clever step — choose which coil carries the current.</b> Drive current <i>I</i><sub>1</sub> through the <b>large</b> coil; its field at the centre is the simple, uniform<br><i>B</i><sub>1</sub> = μ<sub>0</sub><i>N</i><sub>1</sub><i>I</i><sub>1</sub>/(2<i>R</i>).',
          'Because <i>R</i> ≫ <i>r</i>, this field is essentially uniform over the entire tiny area of the small coil. The flux linkage with the small coil is<br><i>N</i><sub>2</sub>Φ<sub>2</sub> = <i>N</i><sub>2</sub><i>B</i><sub>1</sub>(π<i>r</i><sup>2</sup>) = <i>N</i><sub>2</sub> (μ<sub>0</sub><i>N</i><sub>1</sub><i>I</i><sub>1</sub>/(2<i>R</i>)) π<i>r</i><sup>2</sup>,<br>so<br><i>M</i> = <i>N</i><sub>2</sub>Φ<sub>2</sub>/<i>I</i><sub>1</sub> = μ<sub>0</sub><i>N</i><sub>1</sub><i>N</i><sub>2</sub>π<i>r</i><sup>2</sup>/(2<i>R</i>).',
          '(Had we instead put the current in the small coil, we would have had to integrate its messy dipole field over the large coil’s area — far harder. <b>Reciprocity</b> guarantees the same <i>M</i> either way, so we pick the easy direction.)',
          'Evaluating: <i>M</i> = (4π × 10<sup>−7</sup>)(200)(50) π(0.010)<sup>2</sup>/(2(0.20))',
          'Induced emf in the small coil: |<i>ε</i><sub>2</sub>| = <i>M</i> d<i>I</i><sub>1</sub>/d<i>t</i> = (9.9 × 10<sup>−6</sup>)(100)',
        ],
        ans: '<i>M</i> = 9.9 × 10<sup>−6</sup> H ≈ 9.9 μH; |<i>ε</i><sub>2</sub>| = 9.9 × 10<sup>−4</sup> V ≈ 0.99 mV.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A solenoid 0.25 m long with 500 turns has a cross-sectional area of 2.0 cm<sup>2</sup>. Find its self-inductance (air core).',
            a: '<i>L</i> = μ<sub>0</sub><i>N</i><sup>2</sup><i>A</i>/<i>l</i> = (1.2566 × 10<sup>−6</sup>)(2.5 × 10<sup>5</sup>)(2.0 × 10<sup>−4</sup>)/0.25 ≈ 2.5 × 10<sup>−4</sup> H = 0.25 mH',
          },
          {
            q: '[NEET] A coil has self-inductance <i>L</i>. Without changing its length or cross-section, the number of turns is doubled. State the new self-inductance and justify in one line.',
            a: '4<i>L</i> — since <i>L</i> ∝ <i>N</i><sup>2</sup> at fixed geometry',
          },
          {
            q: '[JEE Main] An inductor of 50 mH carries a steady current of 4.0 A. Find the energy stored in its magnetic field.',
            a: '<i>U</i> = ½<i>LI</i><sup>2</sup> = ½(0.050)(4.0)<sup>2</sup> = 0.40 J',
          },
          {
            q: '[JEE Main] When the current in a primary coil changes from 2.0 A to 6.0 A in 0.10 s, an emf of 8.0 mV is induced in a nearby secondary. Find the mutual inductance of the pair.',
            a: '<i>M</i> = <i>ε</i>/|d<i>I</i>/d<i>t</i>| = (8.0 × 10<sup>−3</sup>)/40 = 2.0 × 10<sup>−4</sup> H = 0.20 mH',
          },
          {
            q: '[JEE Advanced] A long solenoid (air core) has 1000 turns per metre and carries 2.0 A. Find the magnetic energy density inside it, and confirm it equals <i>B</i><sup>2</sup>/(2μ<sub>0</sub>).',
            a: '<i>u</i><sub>B</sub> = ½μ<sub>0</sub><i>n</i><sup>2</sup><i>I</i><sup>2</sup> = ½(1.2566 × 10<sup>−6</sup>)(1000)<sup>2</sup>(2.0)<sup>2</sup> ≈ 2.5 J/m<sup>3</sup>; <i>B</i> = μ<sub>0</sub><i>nI</i> = 2.51 × 10<sup>−3</sup> T gives <i>B</i><sup>2</sup>/(2μ<sub>0</sub>) ≈ 2.5 J/m<sup>3</sup> — the same.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The henry is equivalent to:',
        opts: [
          { label: 'Wb·A', nudge: '<b>(A)</b> multiplies flux by current — dimensionally wrong.' },
          { label: 'Wb/A', nudge: null },
          {
            label: 'V/A',
            nudge: '<b>(C)</b> V/A is the <b>ohm</b> (resistance) — a tempting confusion since both involve volts and amps, but inductance carries an extra factor of time.',
          },
          { label: 'A/Wb', nudge: '<b>(D)</b> A/Wb is the reciprocal arrangement; it has nothing to do with inductance.' },
        ],
        correct: 1,
        solution: 'By definition <i>L</i> = <i>N</i>Φ/<i>I</i> (Φ/<i>I</i> for one turn), so 1 H = 1 Wb/A (equivalently V·s/A or Ω·s).',
      },
      {
        t: 'mcq',
        q: 'A coil of self-inductance <i>L</i> is unwound and rewound on the same former with <b>twice</b> the number of turns (length and cross-section unchanged). The new self-inductance is:',
        opts: [
          { label: '2<i>L</i>', nudge: '<b>(A)</b> assumes <i>L</i> ∝ <i>N</i> — the single most common inductance mistake.' },
          { label: '4<i>L</i>', nudge: null },
          { label: '<i>L</i>/2', nudge: '<b>(C)</b> inverts the dependence, as if <i>L</i> ∝ 1/<i>N</i>.' },
          { label: '<i>L</i> (unchanged)', nudge: '<b>(D)</b> ignores the dependence on turns entirely.' },
        ],
        correct: 1,
        solution: 'For fixed geometry <i>L</i> = μ<sub>0</sub><i>N</i><sup>2</sup><i>A</i>/<i>l</i> ∝ <i>N</i><sup>2</sup>. Doubling <i>N</i> multiplies <i>L</i> by 2<sup>2</sup> = 4.',
      },
      {
        t: 'mcq',
        q: 'The mutual inductance of two coils does <b>not</b> depend on:',
        opts: [
          {
            label: 'the number of turns in each coil',
            nudge: '<b>(A)</b>, <b>(C)</b>, <b>(D)</b> are all genuine determinants of <i>M</i>, so each is a real dependence — not the exception the question asks for.',
          },
          { label: 'the current flowing through them', nudge: null },
          {
            label: 'the distance between them',
            nudge: '<b>(A)</b>, <b>(C)</b>, <b>(D)</b> are all genuine determinants of <i>M</i>, so each is a real dependence — not the exception the question asks for.',
          },
          {
            label: 'the permeability of the core material',
            nudge: '<b>(A)</b>, <b>(C)</b>, <b>(D)</b> are all genuine determinants of <i>M</i>, so each is a real dependence — not the exception the question asks for.',
          },
        ],
        correct: 1,
        solution: '<i>M</i> is fixed by geometry and medium alone — it is a property of the arrangement, not the current. A steady or changing current does not alter <i>M</i> itself (only the induced emf scales with d<i>I</i>/d<i>t</i>).',
      },
      {
        t: 'mcq',
        q: 'Two coils with self-inductances 4 mH and 9 mH are perfectly coupled (<i>k</i> = 1). Their mutual inductance is:',
        opts: [
          { label: '6 mH', nudge: null },
          { label: '13 mH', nudge: '<b>(B)</b> is the sum <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> — wrong combination law.' },
          { label: '6.5 mH', nudge: '<b>(C)</b> is the arithmetic mean — but <i>M</i> uses the geometric mean.' },
          {
            label: '36 mH',
            nudge: '<b>(D)</b> is the bare product <i>L</i><sub>1</sub><i>L</i><sub>2</sub> (and even the units, mH<sup>2</sup>, give it away).',
          },
        ],
        correct: 0,
        solution: '<i>M</i> = <i>k</i>√(<i>L</i><sub>1</sub><i>L</i><sub>2</sub>) = 1 × √((4)(9)) = √36 = 6 mH.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Believing <i>L</i> or <i>M</i> depends on current or emf.</b> They depend only on geometry and the medium — exactly like capacitance. A larger current does not give a larger <i>L</i>; it gives a larger energy and emf, but <i>L</i> itself is unchanged.',
          '<b>The linear-in-<i>N</i> error.</b> <i>L</i> ∝ <i>N</i><sup>2</sup>, not <i>N</i>. Doubling the turns quadruples the inductance. Likewise stored energy <i>U</i> ∝ <i>I</i><sup>2</sup>.',
          '<b>Mixing <i>n</i> and <i>N</i> in the solenoid formula.</b> <i>L</i> = μ<sub>0</sub><i>n</i><sup>2</sup><i>Al</i> uses turns per unit length <i>n</i>; <i>L</i> = μ<sub>0</sub><i>N</i><sup>2</sup><i>A</i>/<i>l</i> uses total turns <i>N</i>. They are the same formula (<i>n</i> = <i>N</i>/<i>l</i>) — just never plug a total-turns number into the <i>n</i><sup>2</sup> version.',
          '<b>Forgetting the “changing current” requirement.</b> No emf — self or mutual — arises from a steady current, however large. Only d<i>I</i>/d<i>t</i> ≠ 0 matters.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> When self-inductances are known and you need the mutual, skip the geometry entirely — use <i>M</i> = <i>k</i>√(<i>L</i><sub>1</sub><i>L</i><sub>2</sub>) (take <i>k</i> = 1 for tightly wound coils). And for the energy of an inductor, remember the perfect parallel with the capacitor: <i>U</i><sub>L</sub> = ½<i>LI</i><sup>2</sup> mirrors <i>U</i><sub>C</sub> = ½<i>CV</i><sup>2</sup>, with energy living in the magnetic field (<i>u</i><sub>B</sub> = <i>B</i><sup>2</sup>/(2μ<sub>0</sub>)) rather than the electric field.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Self-inductance',
            note: '<i>N</i>Φ = <i>LI</i>, <i>ε</i> = −<i>L</i> d<i>I</i>/d<i>t</i>. Solenoid: <i>L</i> = μ<sub>0</sub><i>n</i><sup>2</sup><i>Al</i> = μ<sub>0</sub><i>N</i><sup>2</sup><i>A</i>/<i>l</i>. Remember <i>L</i> ∝ <i>N</i><sup>2</sup>.',
          },
          {
            f: 'Mutual inductance',
            note: '<i>N</i><sub>2</sub>Φ<sub>2</sub> = <i>MI</i><sub>1</sub>, <i>ε</i><sub>2</sub> = −<i>M</i> d<i>I</i><sub>1</sub>/d<i>t</i>. Two coaxial solenoids: <i>M</i> = μ<sub>0</sub><i>n</i><sub>1</sub><i>n</i><sub>2</sub><i>Al</i>. Reciprocity: <i>M</i><sub>12</sub> = <i>M</i><sub>21</sub>.',
          },
          {
            f: 'Coupling',
            note: '<i>M</i> = <i>k</i>√(<i>L</i><sub>1</sub><i>L</i><sub>2</sub>), 0 ≤ <i>k</i> ≤ 1 (geometric mean, not sum).',
          },
          {
            f: 'Energy',
            note: '<i>U</i> = ½<i>LI</i><sup>2</sup>; density <i>u</i><sub>B</sub> = <i>B</i><sup>2</sup>/(2μ<sub>0</sub>) (magnetic analogue of the capacitor).',
          },
          {
            f: 'Unit & dimension',
            note: 'henry, 1 H = 1 Wb/A = 1 Ω·s; [M L<sup>2</sup> T<sup>−2</sup> A<sup>−2</sup>].',
          },
        ],
        aids: [
          '“Inductance = electrical inertia” (opposes change of current, not current).',
          '“<i>L</i> goes as <i>N</i>-squared.”',
          '“<i>M</i> is the geometric mean, perfectly coupled at <i>k</i> = 1.”',
          '“Energy hides in the field, <i>B</i><sup>2</sup>/(2μ<sub>0</sub>).”',
        ],
      },
    ],
  },
];
