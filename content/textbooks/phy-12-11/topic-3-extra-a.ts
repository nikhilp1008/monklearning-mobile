import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11, Topic 03 and Additional topic A, word for word from the Class 12
 * Physics Master Reference: Matter Waves and the de Broglie Relation (the
 * book's "Subtopic 02", pp. 734–742, split at its Sections 1 to 8; Figures
 * 11.7 and 11.8, captioned on p. 737 and drawn on the book's "CHAPTER 11 ·
 * FIGURES" page 738, are redrawn in lib/diagrams/physics-12-11.ts), then the
 * Supplement's shared opening (p. 743, set at the head of Addendum A) and
 * Addendum A, Relativistic Corrections for Fast Electrons (pp. 743–747; its
 * practice answers sit at the top of p. 747). The addendum prints no
 * drawings: every equation is typeset.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 734–742 ─────────────────────────
  {
    n: '03',
    title: 'Matter Waves and the de Broglie Relation',
    kalam: 'The faster and heavier a particle moves (larger momentum p), the shorter its associated wavelength.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A guaranteed scorer. NEET asks 1 question nearly every year — almost always a “same kinetic energy / same momentum, compare wavelengths” trap or a one-line numerical. JEE Main reliably has 1 numerical, often the accelerated-electron shortcut or a ratio. JEE Advanced links it to the Bohr model or pairs it with photon energy. CBSE Boards ask the de Broglie relation derivation, the <i>λ</i> = 12.27/√<i>V</i> result, or a short numerical worth 2–3 marks.',
      },
      {
        t: 'p',
        html: 'In Topic 02 we watched light — which everyone “knew” was a wave — start behaving like a stream of bullets (photons) in the photoelectric effect. Now comes the most beautiful turnabout in modern physics. In 1924, a young French aristocrat named Louis de Broglie asked a question so simple it sounds almost reckless: if waves can behave like particles, can particles behave like waves?',
      },
      {
        t: 'p',
        html: 'His reasoning was pure symmetry. Nature, de Broglie felt, does not play favourites. The universe is built from matter and radiation. If radiation has this two-faced (dual) character — wave on Mondays, particle on Tuesdays — then matter, to keep the books balanced, ought to be dual too. Every moving particle, he proposed, has a wave travelling along with it. We call these <b>matter waves</b> or <b>de Broglie waves</b>, and the wavelength of the wave is the <b>de Broglie wavelength</b>, <i>λ</i>.',
      },
      {
        t: 'p',
        html: 'Here is the relation he wrote down, by analogy with the photon:<br><i>λ</i> = <i>h</i>/<i>p</i> = <i>h</i>/(<i>mv</i>).<br>The faster and heavier a particle moves (larger momentum <i>p</i>), the shorter its associated wavelength.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture the difference between flicking a thin nylon thread and shaking a thick ship’s rope. Give both the same flick of energy and the heavy rope barely ripples — its waves are tiny and tightly spaced. The de Broglie wavelength behaves the same way: pile on mass or speed and the wave shrinks to nothing. This single fact explains the deepest puzzle students have with this topic — why don’t we see cricket balls diffracting around the stumps?',
      },
      {
        t: 'p',
        html: 'Run the numbers on a cricket ball (<i>m</i> ≈ 0.15 kg) hurled by a fast bowler at 40 m/s: its de Broglie wavelength comes out around 10<sup>−34</sup> m — a hundred-billion-billion times smaller than an atomic nucleus. There is no slit, no crystal, no obstacle in the universe small enough to make that wave reveal itself by diffraction. So the ball is, for all practical purposes, purely a particle.',
      },
      {
        t: 'p',
        html: 'Now shrink the object to an electron (<i>m</i> ≈ 9.1 × 10<sup>−31</sup> kg). Its tiny mass means tiny momentum, and tiny momentum means a large wavelength — comparable to the spacing between atoms in a crystal (about 10<sup>−10</sup> m, an ångström). And crystals, conveniently, are nature’s ready-made diffraction gratings. That is why electrons visibly diffract while cricket balls do not — not because the wave nature switches off, but because for big objects the wavelength is hopelessly unmeasurable.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> The relation <i>λ</i> = <i>h</i>/(<i>mv</i>) as written is <b>non-relativistic</b> — valid only when the particle’s speed is well below <i>c</i> (for electron speeds near light speed, <i>p</i> = <i>mv</i> must be replaced by the relativistic momentum, which is beyond our scope). The wave is associated with the particle’s motion: a stationary particle (<i>p</i> = 0) has no meaningful de Broglie wavelength. Crucially, <i>λ</i> depends only on momentum — it is <b>independent of the charge and the nature</b> of the particle. A neutron and a proton of equal momentum have identical de Broglie wavelengths, even though one is charged and one is not.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'The de Broglie relation',
        main: '<i>λ</i> = <i>h</i>/<i>p</i> = <i>h</i>/(<i>mv</i>)',
        legend: [
          '<i>λ</i> = de Broglie wavelength',
          '<i>h</i> = Planck’s constant',
          '<i>p</i> = momentum',
          '<i>m</i> = mass',
          '<i>v</i> = speed',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'In terms of kinetic energy',
        main: '<i>λ</i> = <i>h</i>/√(2<i>mK</i>)',
        legend: ['<i>K</i> = kinetic energy'],
        note: '(using <i>K</i> = ½<i>mv</i><sup>2</sup> = <i>p</i><sup>2</sup>/(2<i>m</i>), so <i>p</i> = √(2<i>mK</i>))',
      },
      {
        t: 'formula',
        kicker: 'For a charged particle accelerated from rest through potential difference <i>V</i>',
        main: '<i>λ</i> = <i>h</i>/√(2<i>mqV</i>)',
        legend: ['<i>q</i> = charge', '<i>V</i> = accelerating potential'],
        note: '(gaining <i>K</i> = <i>qV</i>)',
      },
      {
        t: 'formula',
        kicker: 'The electron shortcut',
        main: '<i>λ</i><sub>electron</sub> = 12.27/√<i>V</i> Å',
        legend: ['<i>V</i> = accelerating potential in volts'],
        note: '(substituting <i>m</i><sub>e</sub>, <i>e</i>, <i>h</i>, with <i>V</i> in volts and <i>λ</i> in ångström)',
      },
      {
        t: 'p',
        html: 'For a proton the same algebra gives <i>λ</i><sub>proton</sub> = 0.286/√<i>V</i> Å.',
      },
      {
        t: 'formula',
        kicker: 'de Broglie’s explanation of Bohr quantization',
        main: '2π<i>r</i> = <i>nλ</i> ⟹ <i>mvr</i> = <i>nh</i>/(2π), <i>n</i> = 1, 2, 3, …',
        legend: ['<i>n</i> = orbit number', '<i>r</i> = orbit radius'],
        note: '(electron wave must “fit” the orbit as a standing wave)',
      },
      {
        t: 'formula',
        kicker: 'Heisenberg’s uncertainty principle',
        main: 'Δ<i>x</i> Δ<i>p</i> ≥ <i>ħ</i>/2<br><i>ħ</i> = <i>h</i>/(2π)',
        legend: ['Δ<i>x</i> = uncertainty in position', 'Δ<i>p</i> = uncertainty in momentum'],
        note: '(a direct consequence of matter’s wave nature)',
      },
      {
        t: 'p',
        html: '(NCERT states it in the order-of-magnitude form Δ<i>x</i> Δ<i>p</i> ≈ <i>ħ</i>.)',
      },
      {
        t: 'p',
        html: '<b>Notation watch:</b> <i>V</i> is the <b>accelerating potential</b> (in volts); <i>v</i> is the particle’s <b>speed</b>. They live in the same algebra (<i>qV</i> = ½<i>mv</i><sup>2</sup>) — keep them distinct.',
      },
      {
        t: 'table',
        title: 'Quantity reference table',
        head: ['Symbol', 'Quantity', 'SI Unit', 'Dimensional Formula'],
        rows: [
          ['<i>λ</i>', 'de Broglie wavelength', 'm', '[L]'],
          ['<i>p</i>', 'Momentum', 'kg·m·s<sup>−1</sup>', '[MLT<sup>−1</sup>]'],
          ['<i>K</i>', 'Kinetic energy', 'J (or eV)', '[ML<sup>2</sup>T<sup>−2</sup>]'],
          ['<i>V</i>', 'Accelerating potential', 'V', '[ML<sup>2</sup>T<sup>−3</sup>A<sup>−1</sup>]'],
          ['<i>ħ</i>', 'Reduced Planck’s constant', 'J·s', '[ML<sup>2</sup>T<sup>−1</sup>]'],
        ],
      },

      { t: 'part', title: 'Derivation and key procedures' },
      { t: 'p', html: '<b>3A — Deriving the de Broglie relation</b>' },
      {
        t: 'p',
        html: '<b>The physical reasoning.</b> We do not derive matter waves from older mechanics — they were a postulate. But we can motivate <i>λ</i> = <i>h</i>/<i>p</i> by extending what we already proved for the photon, which is exactly the logic de Broglie used.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Borrow the photon result (chained from Topic 02).</b> A photon of frequency <i>ν</i> has energy <i>E</i> = <i>hν</i> and, being massless, satisfies <i>E</i> = <i>pc</i>. Combining these:<br><i>pc</i> = <i>hν</i> = <i>hc</i>/<i>λ</i> ⟹ <i>p</i> = <i>h</i>/<i>λ</i> ⟹ <i>λ</i> = <i>h</i>/<i>p</i>.<br><b>Why this step:</b> it shows that for light, wavelength and momentum are tied together by Planck’s constant.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Apply the symmetry postulate to matter.</b> De Broglie’s leap: demand that the same wavelength–momentum link hold for a material particle. For a particle of mass <i>m</i> and speed <i>v</i>, <i>p</i> = <i>mv</i>, so<br><i>λ</i> = <i>h</i>/<i>p</i> = <i>h</i>/(<i>mv</i>).<br><b>Why this step:</b> this is the postulate itself — nature treats matter and radiation on the same footing.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Recast for kinetic energy.</b> Since <i>K</i> = <i>p</i><sup>2</sup>/(2<i>m</i>), we have <i>p</i> = √(2<i>mK</i>), hence<br><i>λ</i> = <i>h</i>/√(2<i>mK</i>).',
      },
      {
        t: 'p',
        html: '<b>Step 4 — Specialise to an accelerated charge.</b> A charge <i>q</i> accelerated from rest through potential <i>V</i> acquires <i>K</i> = <i>qV</i>. Substituting:<br><i>λ</i> = <i>h</i>/√(2<i>mqV</i>).<br>Plugging the electron’s constants (<i>m</i><sub>e</sub> = 9.109 × 10<sup>−31</sup> kg, <i>q</i> = <i>e</i> = 1.602 × 10<sup>−19</sup> C, <i>h</i> = 6.626 × 10<sup>−34</sup> J·s):<br><i>λ</i> = (6.626 × 10<sup>−34</sup>)/√(2(9.109 × 10<sup>−31</sup>)(1.602 × 10<sup>−19</sup>)<i>V</i>) = (1.227 × 10<sup>−9</sup>)/√<i>V</i> m = 12.27/√<i>V</i> Å.',
      },
      { t: 'p', html: '<b>3B — de Broglie’s explanation of Bohr’s orbits</b>' },
      {
        t: 'p',
        html: 'Bohr had postulated that electrons orbit only at quantised angular momenta, with no reason why. De Broglie supplied the why. Picture the electron’s matter wave wrapped around its circular orbit. For the wave to survive without cancelling itself by destructive interference, the orbit’s circumference must contain a <b>whole number</b> of wavelengths — a standing wave on a loop:<br>2π<i>r</i> = <i>nλ</i> = <i>n</i> · <i>h</i>/(<i>mv</i>) ⟹ <i>mvr</i> = <i>nh</i>/(2π).<br>This is exactly Bohr’s quantisation condition — now understood as the natural resonance condition of an electron wave.',
      },
      { t: 'fig', id: 'p12-11-fig-11.7' },
      { t: 'p', html: '<b>3C — The Davisson–Germer experiment (the experimental confirmation)</b>' },
      { t: 'p', html: '<b>Purpose:</b> to test whether electrons actually diffract like waves.' },
      {
        t: 'proc',
        title: 'Procedure',
        steps: [
          'An <b>electron gun</b> (heated filament + accelerating plates) produces a fine beam of electrons of known energy, set by the accelerating voltage <i>V</i>.',
          'The beam strikes a single <b>nickel crystal</b>, whose regularly spaced atomic planes act as a natural diffraction grating.',
          'A movable <b>detector</b> measures the intensity of scattered electrons as a function of scattering angle <i>φ</i>.',
        ],
      },
      {
        t: 'p',
        html: '<b>Result and reasoning:</b> At an accelerating voltage of 54 V, a sharp peak in scattered intensity appeared at a scattering angle of <i>φ</i> = 50° — a diffraction maximum, impossible for particles but natural for waves. From the crystal geometry the experimental wavelength worked out to about 1.65 Å. The de Broglie prediction <i>λ</i> = 12.27/√54 = 1.67 Å matched almost perfectly, directly confirming the wave nature of electrons.',
      },
      { t: 'fig', id: 'p12-11-fig-11.8' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'An electron is accelerated from rest through a potential difference of 100 V. Find its de Broglie wavelength.',
        steps: [
          '<b>Given:</b> <i>V</i> = 100 V, electron.',
          '<b>Method (shortcut):</b><br><i>λ</i> = 12.27/√<i>V</i> Å = 12.27/√100 = 12.27/10 = 1.227 Å = 1.227 × 10<sup>−10</sup> m.',
          'Comparable to inter-atomic spacing — which is exactly why electron diffraction works.',
        ],
        ans: '<i>λ</i> ≈ 1.23 Å.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'An electron, a proton, and an <i>α</i>-particle all have the <b>same kinetic energy</b>. Which has the shortest de Broglie wavelength?<br>(1) Electron (2) Proton (3) <i>α</i>-particle (4) All equal',
        steps: [
          '<b>The trap:</b> students who half-remember “<i>λ</i> = <i>h</i>/(<i>mv</i>)” sometimes reason about speed and tie themselves in knots. Use the energy form instead.',
          '<b>Fast reasoning:</b> For fixed <i>K</i>,<br><i>λ</i> = <i>h</i>/√(2<i>mK</i>) ⟹ <i>λ</i> ∝ 1/√<i>m</i>.<br>The heaviest particle has the shortest wavelength. Masses: electron < proton < <i>α</i>-particle (<i>α</i> ≈ 4× proton ≈ 7344× electron).',
          '<b>Speed-tip:</b> memorise that the comparison flips with the condition. Same KE → <i>λ</i> ∝ 1/√<i>m</i>. Same <b>momentum</b> → all wavelengths equal (since <i>λ</i> = <i>h</i>/<i>p</i>). Same <b>speed</b> → <i>λ</i> ∝ 1/<i>m</i>. Read the condition first, then pick the rule.',
        ],
        ans: '(3) <i>α</i>-particle.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A proton and an <i>α</i>-particle are accelerated from rest through the <b>same</b> potential difference <i>V</i>. Find the ratio of their de Broglie wavelengths <i>λ</i><sub>p</sub> ∶ <i>λ</i><sub>α</sub>. (Take <i>m</i><sub>α</sub> = 4<i>m</i><sub>p</sub>, <i>q</i><sub>α</sub> = 2<i>e</i>, <i>q</i><sub>p</sub> = <i>e</i>.)',
        steps: [
          'This combines mass and charge dependence — the accelerated-charge formula handles both.',
          '<b>Step 1 — Write the formula:</b> <i>λ</i> = <i>h</i>/√(2<i>mqV</i>), so at fixed <i>V</i>, <i>λ</i> ∝ 1/√(<i>mq</i>).',
          '<b>Step 2 — Take the ratio:</b><br><i>λ</i><sub>p</sub>/<i>λ</i><sub>α</sub> = √(<i>m</i><sub>α</sub><i>q</i><sub>α</sub>/(<i>m</i><sub>p</sub><i>q</i><sub>p</sub>)) = √((4<i>m</i><sub>p</sub>)(2<i>e</i>)/((<i>m</i><sub>p</sub>)(<i>e</i>))) = √8 = 2√2.',
          'The proton’s wave is nearly three times longer.',
        ],
        ans: '<i>λ</i><sub>p</sub> ∶ <i>λ</i><sub>α</sub> = 2√2 ∶ 1 ≈ 2.83 ∶ 1.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A photon and an electron have the same wavelength <i>λ</i> = 1.0 Å. Find the ratio of (a) their momenta and (b) their energies.',
        steps: [
          'This chains Topic 02 (photon energy/momentum) with Topic 03 (matter waves) — a favourite JEE Advanced fusion.',
          '<b>Part (a) — momenta.</b> Both obey <i>p</i> = <i>h</i>/<i>λ</i> — the photon by Topic 02, the electron by de Broglie. Therefore<br><i>p</i><sub>photon</sub>/<i>p</i><sub>electron</sub> = 1.<br>Equal wavelength always means equal momentum, for anything.',
          '<b>Part (b) — energies.</b> The energy expressions differ because a photon is massless and an electron is not.<br>• Photon: <i>E</i><sub>ph</sub> = <i>hc</i>/<i>λ</i>.<br>• Electron (non-relativistic): <i>E</i><sub>e</sub> = <i>p</i><sup>2</sup>/(2<i>m</i><sub>e</sub>) = <i>h</i><sup>2</sup>/(2<i>m</i><sub>e</sub><i>λ</i><sup>2</sup>).<br>Taking the ratio:<br><i>E</i><sub>ph</sub>/<i>E</i><sub>e</sub> = (<i>hc</i>/<i>λ</i>)/(<i>h</i><sup>2</sup>/(2<i>m</i><sub>e</sub><i>λ</i><sup>2</sup>)) = 2<i>m</i><sub>e</sub><i>cλ</i>/<i>h</i>.<br>Substituting <i>λ</i> = 1.0 × 10<sup>−10</sup> m:<br><i>E</i><sub>ph</sub>/<i>E</i><sub>e</sub> = 2(9.1 × 10<sup>−31</sup>)(3 × 10<sup>8</sup>)(1.0 × 10<sup>−10</sup>)/(6.63 × 10<sup>−34</sup>) = (5.46 × 10<sup>−32</sup>)/(6.63 × 10<sup>−34</sup>) ≈ 82.',
          '<b>Physical insight:</b> the photon “spends” all its energy as <i>pc</i>, while the electron’s energy is the much smaller <i>p</i><sup>2</sup>/(2<i>m</i>) — same momentum, very different energy ledgers.',
        ],
        ans: 'Momenta equal (1 ∶ 1); the photon carries about <b>82 times</b> the energy of the equal-wavelength electron.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Find the de Broglie wavelength of an electron accelerated from rest through 400 V.',
            a: '≈ 0.61 Å',
          },
          {
            q: '[NEET] Calculate the de Broglie wavelength of a 0.15 kg cricket ball moving at 30 m/s, and comment on its detectability.',
            a: '≈ 1.5 × 10<sup>−34</sup> m (far too small to detect)',
          },
          {
            q: '[JEE Main] An electron and a proton have the <b>same kinetic energy</b>. Find the ratio <i>λ</i><sub>electron</sub> ∶ <i>λ</i><sub>proton</sub>. (Take <i>m</i><sub>p</sub>/<i>m</i><sub>e</sub> = 1836.)',
            a: '≈ 42.8 ∶ 1',
          },
          {
            q: '[JEE Main] Through what accelerating potential must an electron, starting from rest, pass to have a de Broglie wavelength of 1.0 Å?',
            a: '≈ 150 V',
          },
          {
            q: '[JEE Advanced] In the Davisson–Germer experiment, electrons are accelerated from rest through 54 V. Compute the de Broglie wavelength of the electrons.',
            a: '≈ 1.67 Å',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The de Broglie wavelength of a particle depends on:',
        opts: [
          {
            label: 'its charge only',
            nudge: '<b>(A)</b> and <b>(C)</b> reflect the common belief that charge matters — but a neutral neutron and a charged proton of equal momentum have identical <i>λ</i>. Charge only enters indirectly when a particle is accelerated by a field (it sets how much momentum the particle gains), never in the relation itself.',
          },
          { label: 'its momentum only', nudge: null },
          {
            label: 'its charge and mass',
            nudge: '<b>(A)</b> and <b>(C)</b> reflect the common belief that charge matters — but a neutral neutron and a charged proton of equal momentum have identical <i>λ</i>. Charge only enters indirectly when a particle is accelerated by a field (it sets how much momentum the particle gains), never in the relation itself.',
          },
          {
            label: 'its temperature',
            nudge: '<b>(D)</b> confuses this with the thermal de Broglie wavelength of a gas, a different (and out-of-scope) idea.',
          },
        ],
        correct: 1,
        solution: 'Straight from <i>λ</i> = <i>h</i>/<i>p</i> — wavelength is fixed entirely by momentum.',
      },
      {
        t: 'mcq',
        q: 'Two particles have the same momentum. Their de Broglie wavelengths are:',
        opts: [
          {
            label: 'in the ratio of their masses',
            nudge: '<b>(A)</b> has the mass dependence upside down: at equal speed or equal kinetic energy a heavier particle has the shorter wave, and at equal momentum mass drops out entirely.',
          },
          {
            label: 'in the inverse ratio of their masses',
            nudge: '<b>(B)</b> is the “same speed” answer (<i>λ</i> = <i>h</i>/(<i>mv</i>) ∝ 1/<i>m</i>) smuggled into a “same momentum” question.',
          },
          { label: 'equal', nudge: null },
          {
            label: 'in the ratio of the square roots of their masses',
            nudge: '<b>(D)</b> inverts the “same kinetic energy” rule (<i>λ</i> ∝ 1/√<i>m</i>), and that rule is for equal kinetic energy, not equal momentum.',
          },
        ],
        correct: 2,
        solution: 'Same <i>p</i> gives same <i>λ</i> = <i>h</i>/<i>p</i>, irrespective of mass. Equal momentum is the one case with no mass dependence at all. The examiner is testing whether you read the condition.',
      },
      {
        t: 'mcq',
        q: 'If the kinetic energy of an electron is made four times its original value, its de Broglie wavelength becomes:',
        opts: [
          {
            label: 'one-fourth',
            nudge: '<b>(A)</b> and <b>(D)</b> come from wrongly assuming <i>λ</i> ∝ 1/<i>K</i> (forgetting the square root).',
          },
          { label: 'one-half', nudge: null },
          {
            label: 'double',
            nudge: '<b>(C)</b> gets the direction wrong — more energy means a shorter wave, not a longer one.',
          },
          {
            label: 'four times',
            nudge: '<b>(D)</b> takes <i>λ</i> ∝ <i>K</i>, wrong in direction and missing the square root.',
          },
        ],
        correct: 1,
        solution: 'Since <i>λ</i> ∝ 1/√<i>K</i>, quadrupling <i>K</i> multiplies <i>λ</i> by 1/√4 = 1/2.',
      },
      {
        t: 'mcq',
        q: 'The Davisson–Germer experiment provided direct evidence for:',
        opts: [
          { label: 'the quantisation of electric charge', nudge: '<b>(A)</b> is Millikan’s oil-drop experiment.' },
          { label: 'the particle nature of light', nudge: '<b>(B)</b> is the photoelectric effect (Topic 02).' },
          { label: 'the wave nature of electrons', nudge: null },
          { label: 'the existence of the nucleus', nudge: '<b>(D)</b> is Rutherford’s <i>α</i>-scattering.' },
        ],
        correct: 2,
        solution: 'The observed diffraction maxima of scattered electrons confirmed de Broglie’s matter-wave hypothesis. All are famous experiments — the trap rewards confusing which result belongs to which.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Ignoring the comparison condition.</b> “Same KE,” “same momentum,” and “same speed” give three different mass-dependences (<i>λ</i> ∝ 1/√<i>m</i>, constant, and 1/<i>m</i> respectively). Always read which quantity is held fixed before choosing a proportionality.',
          '<b>The square-root slip.</b> <i>λ</i> ∝ 1/√<i>K</i> and <i>λ</i> ∝ 1/√<i>V</i> — not 1/<i>K</i> or 1/<i>V</i>. Doubling the accelerating voltage shrinks the wavelength by √2, not by 2. This single error is the most common way students lose marks here.',
          '<b>Thinking charge changes the wavelength directly.</b> <i>λ</i> = <i>h</i>/<i>p</i> has no <i>q</i> in it. Charge only matters when it determines how much momentum a particle picks up in a field.',
          '<b>Plugging eV into formulas expecting joules.</b> In <i>λ</i> = <i>h</i>/√(2<i>mK</i>), the kinetic energy <i>K</i> must be in <b>joules</b>. Convert eV first (×1.6 × 10<sup>−19</sup>), or use the ready-made 12.27/√<i>V</i> Å shortcut where <i>V</i> is already in volts.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any electron-acceleration problem, skip the full formula and use <i>λ</i> = 12.27/√<i>V</i> Å (<i>V</i> in volts) directly. It collapses a three-line substitution into a single division — invaluable under NEET/JEE time pressure.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Core relation', note: '<i>λ</i> = <i>h</i>/<i>p</i> = <i>h</i>/(<i>mv</i>) = <i>h</i>/√(2<i>mK</i>) = <i>h</i>/√(2<i>mqV</i>)' },
          { f: 'Electron shortcut', note: '<i>λ</i> = 12.27/√<i>V</i> Å (V in volts) | <b>Proton:</b> 0.286/√<i>V</i> Å' },
          { f: 'Independent of charge & particle type', note: 'depends only on momentum.' },
          {
            f: 'Comparison rules',
            note: 'same <i>p</i> ⇒ same <i>λ</i>; same <i>K</i> ⇒ <i>λ</i> ∝ 1/√<i>m</i>; same <i>v</i> ⇒ <i>λ</i> ∝ 1/<i>m</i>.',
          },
          {
            f: 'Bohr link',
            note: '2π<i>r</i> = <i>nλ</i> ⇒ <i>mvr</i> = <i>nh</i>/(2π) (standing electron wave fits the orbit).',
          },
          {
            f: 'Davisson–Germer',
            note: 'electrons at 54 V diffract off nickel; peak at 50°; confirms wave nature (<i>λ</i> ≈ 1.67 Å).',
          },
          {
            f: 'Uncertainty',
            note: 'Δ<i>x</i> Δ<i>p</i> ≥ <i>ħ</i>/2 — wave nature forbids exact position and momentum together.',
          },
        ],
        aids: ['Mnemonic — “Heavier and faster ⇒ shorter wave.” Big momentum kills the wavelength, which is why only tiny particles show their waves.'],
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 743–747 ─────────────────────────
  {
    n: 'A',
    title: 'Relativistic Corrections for Fast Electrons',
    extra: true,
    kalam: 'The relativistic de Broglie formula is examinable.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The addendum extends four patterns that JEE Advanced routinely combines: relativistic corrections for fast electrons (which Topic 03 sets aside as beyond its scope), the quantum efficiency chain (incident photons → absorbed photons → emitted electrons; met once in worked example 4 of Topic 02), threshold-energy problems requiring simultaneous equations (worked example 3 of Topic 02), and quantitative uncertainty principle problems. Each is a method with full derivation, worked examples, and practice with full solutions.',
      },
      {
        t: 'p',
        html: 'The chapter’s electron-shortcut <i>λ</i> = 12.27/√<i>V</i> Å is derived from the non-relativistic kinetic energy <i>K</i> = <i>eV</i> = ½<i>mv</i><sup>2</sup>. This is accurate for <i>V</i> ≲ 10 kV (electron speed ≈ 0.2<i>c</i>), but some JEE Advanced problems use <i>V</i> ≳ 50 kV, where the non-relativistic formula overestimates the wavelength by more than 1%. The relativistic de Broglie formula is examinable.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>When <i>eV</i> ≳ 10 keV, use relativistic mechanics.</b>' },
      {
        t: 'p',
        html: 'A charge <i>q</i> accelerated through potential <i>V</i> gains kinetic energy <i>K</i> = <i>qV</i>. At low speeds we write <i>K</i> = ½<i>mv</i><sup>2</sup>; at high speeds we must use the relativistic result. For an electron (or any particle with rest mass <i>m</i><sub>0</sub>), total energy is:<br><i>E</i> = <i>γm</i><sub>0</sub><i>c</i><sup>2</sup> = <i>m</i><sub>0</sub><i>c</i><sup>2</sup> + <i>K</i>, <i>γ</i> = 1/√(1 − <i>v</i><sup>2</sup>/<i>c</i><sup>2</sup>).<br>Hence:<br><i>γ</i> = 1 + <i>K</i>/(<i>m</i><sub>0</sub><i>c</i><sup>2</sup>).<br>The relativistic momentum is <i>p</i> = <i>γm</i><sub>0</sub><i>v</i>, and the de Broglie wavelength is:<br><i>λ</i> = <i>h</i>/<i>p</i> = <i>h</i>/(<i>γm</i><sub>0</sub><i>v</i>).',
      },
      {
        t: 'p',
        html: 'To eliminate <i>v</i>, consider the identity <i>p</i><sup>2</sup><i>c</i><sup>2</sup> = <i>γ</i><sup>2</sup><i>m</i><sub>0</sub><sup>2</sup><i>v</i><sup>2</sup><i>c</i><sup>2</sup> = (<i>γ</i><sup>2</sup> − 1)<i>m</i><sub>0</sub><sup>2</sup><i>c</i><sup>4</sup> (using <i>γ</i><sup>2</sup> − 1 = <i>β</i><sup>2</sup><i>γ</i><sup>2</sup> where <i>β</i> = <i>v</i>/<i>c</i>):<br><i>p</i><sup>2</sup><i>c</i><sup>2</sup> = (<i>γ</i><sup>2</sup> − 1)<i>m</i><sub>0</sub><sup>2</sup><i>c</i><sup>4</sup>.<br>But from <i>E</i><sup>2</sup> = <i>p</i><sup>2</sup><i>c</i><sup>2</sup> + <i>m</i><sub>0</sub><sup>2</sup><i>c</i><sup>4</sup> and <i>E</i> = <i>m</i><sub>0</sub><i>c</i><sup>2</sup> + <i>K</i>:<br><i>p</i><sup>2</sup> = (<i>E</i><sup>2</sup> − <i>m</i><sub>0</sub><sup>2</sup><i>c</i><sup>4</sup>)/<i>c</i><sup>2</sup> = ((<i>m</i><sub>0</sub><i>c</i><sup>2</sup> + <i>K</i>)<sup>2</sup> − <i>m</i><sub>0</sub><sup>2</sup><i>c</i><sup>4</sup>)/<i>c</i><sup>2</sup> = 2<i>m</i><sub>0</sub><i>K</i> + <i>K</i><sup>2</sup>/<i>c</i><sup>2</sup>.<br>Therefore:<br><i>λ</i> = <i>h</i>/√(2<i>m</i><sub>0</sub><i>K</i> + <i>K</i><sup>2</sup>/<i>c</i><sup>2</sup>).<br>For an electron accelerated through <i>V</i> volts, <i>K</i> = <i>eV</i>, giving:<br><i>λ</i> = <i>h</i>/√(2<i>m</i><sub>e</sub><i>eV</i> + <i>e</i><sup>2</sup><i>V</i><sup>2</sup>/<i>c</i><sup>2</sup>) (relativistic).',
      },
      {
        t: 'p',
        html: 'Units: <i>h</i> in J·s, <i>m</i><sub>e</sub> in kg, <i>e</i> in C, <i>V</i> in V, <i>c</i> in m/s. Inside the square root: 2<i>m</i><sub>e</sub><i>eV</i> has units (kg)(C)(V) = kg<sup>2</sup>·m<sup>2</sup>/s<sup>2</sup>; <i>e</i><sup>2</sup><i>V</i><sup>2</sup>/<i>c</i><sup>2</sup> has units C<sup>2</sup>·V<sup>2</sup>/(m<sup>2</sup>/s<sup>2</sup>) = kg<sup>2</sup>·m<sup>2</sup>/s<sup>2</sup>. Same units in the root. <i>λ</i> comes out in metres.',
      },
      {
        t: 'p',
        html: '<b>Shortcut for the ratio.</b> Let <i>λ</i><sub>nr</sub> = <i>h</i>/√(2<i>m</i><sub>e</sub><i>eV</i>) be the non-relativistic wavelength. Then:<br><i>λ</i>/<i>λ</i><sub>nr</sub> = √(2<i>m</i><sub>e</sub><i>eV</i>/(2<i>m</i><sub>e</sub><i>eV</i> + <i>e</i><sup>2</sup><i>V</i><sup>2</sup>/<i>c</i><sup>2</sup>)) = 1/√(1 + <i>eV</i>/(2<i>m</i><sub>e</sub><i>c</i><sup>2</sup>)).<br>Define <i>K</i><sub>c</sub> = 2<i>m</i><sub>e</sub><i>c</i><sup>2</sup> ≈ 1.022 MeV (twice the electron’s rest energy, 0.511 MeV). Then:<br><i>λ</i> = <i>λ</i><sub>nr</sub>/√(1 + <i>eV</i>/<i>K</i><sub>c</sub>).<br>The correction factor √(1 + <i>eV</i>/<i>K</i><sub>c</sub>) is always ≥ 1, so the relativistic wavelength is always shorter than the non-relativistic estimate.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Relativistic de Broglie Wavelength',
        q: 'An electron is accelerated from rest through a potential difference of 100 kV. Find (a) its de Broglie wavelength using the relativistic formula, (b) the percentage error if the non-relativistic shortcut is used, and (c) the electron’s speed as a fraction of <i>c</i>.',
        steps: [
          '<b>Given:</b> <i>V</i> = 100 × 10<sup>3</sup> V, <i>m</i><sub>e</sub> = 9.11 × 10<sup>−31</sup> kg, <i>e</i> = 1.60 × 10<sup>−19</sup> C, <i>h</i> = 6.63 × 10<sup>−34</sup> J·s, <i>c</i> = 3.00 × 10<sup>8</sup> m/s.',
          '<b>Part (a) — Relativistic wavelength.</b><br><b>Step 1 — Compute <i>K</i><sub>c</sub> = 2<i>m</i><sub>e</sub><i>c</i><sup>2</sup>:</b><br><i>K</i><sub>c</sub> = 2(9.11 × 10<sup>−31</sup>)(3.00 × 10<sup>8</sup>)<sup>2</sup> = 2(9.11 × 10<sup>−31</sup>)(9.00 × 10<sup>16</sup>) = 1.64 × 10<sup>−13</sup> J.<br>Convert to keV: <i>K</i><sub>c</sub> = 1.64 × 10<sup>−13</sup>/(1.60 × 10<sup>−16</sup>) = 1025 keV with these rounded constants (the precise value is 1.022 MeV, which we use below).',
          '<b>Step 2 —</b> Compute <i>eV</i> = (1.60 × 10<sup>−19</sup>)(1.00 × 10<sup>5</sup>) = 1.60 × 10<sup>−14</sup> J = 100 keV.',
          '<b>Step 3 — Relativistic wavelength:</b><br><i>λ</i> = <i>h</i>/√(2<i>m</i><sub>e</sub><i>eV</i> + <i>e</i><sup>2</sup><i>V</i><sup>2</sup>/<i>c</i><sup>2</sup>).<br>Compute each term separately:<br>Term 1: 2<i>m</i><sub>e</sub><i>eV</i> = 2(9.11 × 10<sup>−31</sup>)(1.60 × 10<sup>−19</sup>)(1.00 × 10<sup>5</sup>) = 2.92 × 10<sup>−44</sup> kg<sup>2</sup>·m<sup>2</sup>/s<sup>2</sup>.<br>Term 2: <i>e</i><sup>2</sup><i>V</i><sup>2</sup>/<i>c</i><sup>2</sup> = (1.60 × 10<sup>−19</sup>)<sup>2</sup>(1.00 × 10<sup>5</sup>)<sup>2</sup>/(3.00 × 10<sup>8</sup>)<sup>2</sup> = (2.56 × 10<sup>−38</sup>)(10<sup>10</sup>)/(9.00 × 10<sup>16</sup>) = 2.84 × 10<sup>−45</sup> kg<sup>2</sup>·m<sup>2</sup>/s<sup>2</sup>.<br>Sum: 2<i>m</i><sub>e</sub><i>eV</i> + <i>e</i><sup>2</sup><i>V</i><sup>2</sup>/<i>c</i><sup>2</sup> = 2.92 × 10<sup>−44</sup> + 2.84 × 10<sup>−45</sup> = 3.20 × 10<sup>−44</sup> kg<sup>2</sup>·m<sup>2</sup>/s<sup>2</sup>.<br>Square root: √(3.20 × 10<sup>−44</sup>) = √3.20 × 10<sup>−22</sup> = 1.79 × 10<sup>−22</sup> kg·m/s.<br>so the momentum is<br><i>p</i> = 1.79 × 10<sup>−22</sup> kg·m/s.<br><i>λ</i> = (6.63 × 10<sup>−34</sup>)/(1.79 × 10<sup>−22</sup>) = 3.70 × 10<sup>−12</sup> m = 0.0370 Å.',
          'Or use the ratio shortcut: <i>λ</i><sub>nr</sub> = 12.27/√100000 = 12.27/316 = 0.0388 Å. Correction factor √(1 + 100/1022) = √1.098 = 1.048. So <i>λ</i> = 0.0388/1.048 = 0.0370 Å = 3.70 × 10<sup>−12</sup> m. This agrees with the exact calculation above.',
          'Using <i>K</i><sub>c</sub> = 1.022 MeV:<br><i>λ</i> = <i>λ</i><sub>nr</sub>/√(1 + <i>eV</i>/<i>K</i><sub>c</sub>) = 0.0388 Å/√(1 + 100/1022) = 0.0388/√1.0979 = 0.0388/1.048 = 0.0370 Å = 3.70 × 10<sup>−12</sup> m.',
          '<b>Check from first principles:</b><br><i>K</i> = <i>eV</i> = 1.60 × 10<sup>−19</sup> × 10<sup>5</sup> = 1.60 × 10<sup>−14</sup> J.<br><i>m</i><sub>e</sub><i>c</i><sup>2</sup> = 9.11 × 10<sup>−31</sup> × (3.00 × 10<sup>8</sup>)<sup>2</sup> = 8.20 × 10<sup>−14</sup> J = 512 keV (511 keV with precise constants).<br><i>γ</i> = 1 + (1.60 × 10<sup>−14</sup>)/(8.20 × 10<sup>−14</sup>) = 1 + 0.195 = 1.195.<br>Then <i>β</i> = √(1 − 1/<i>γ</i><sup>2</sup>) = √(1 − 1/1.428) = √0.300 = 0.548.<br><i>p</i> = <i>γm</i><sub>e</sub><i>v</i> = <i>γm</i><sub>e</sub><i>βc</i> = (1.195)(9.11 × 10<sup>−31</sup>)(0.548)(3.00 × 10<sup>8</sup>) = 1.79 × 10<sup>−22</sup> kg·m/s.<br><i>λ</i> = <i>h</i>/<i>p</i> = (6.63 × 10<sup>−34</sup>)/(1.79 × 10<sup>−22</sup>) = 3.70 × 10<sup>−12</sup> m = 0.0370 Å.',
          '<b>Part (b) — Percentage error of non-relativistic formula.</b><br>NR value = 0.0388 Å, Relativistic value = 0.0370 Å.<br>Error = (<i>λ</i><sub>nr</sub>/<i>λ</i> − 1) × 100% = (1.048 − 1) × 100% ≈ 4.8%.<br>The non-relativistic formula overestimates the wavelength by about 4.8%.',
          '<b>Part (c) — Speed as fraction of <i>c</i>.</b><br>From above: <i>β</i> = <i>v</i>/<i>c</i> = 0.548, so <i>v</i> = 0.548<i>c</i> = 0.548 × 3.00 × 10<sup>8</sup> = 1.64 × 10<sup>8</sup> m/s ≈ 0.55<i>c</i>.',
        ],
        ans: '(a) <i>λ</i> = 0.0370 Å = 3.70 × 10<sup>−12</sup> m; (b) non-relativistic formula is 4.8% too high; (c) <i>v</i> = 0.55<i>c</i>.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Minimum Accelerating Voltage for Relativistic Treatment',
        q: 'At what accelerating voltage does the de Broglie wavelength of an electron (accelerated from rest) become 1% shorter than the non-relativistic prediction? Use the correction-factor formula.',
        steps: [
          'The ratio <i>λ</i>/<i>λ</i><sub>nr</sub> = 1/√(1 + <i>eV</i>/<i>K</i><sub>c</sub>). We require this ratio to be 0.99:<br>0.99 = 1/√(1 + <i>eV</i>/<i>K</i><sub>c</sub>) ⟹ √(1 + <i>eV</i>/<i>K</i><sub>c</sub>) = 1/0.99 = 1.0101.<br>1 + <i>eV</i>/<i>K</i><sub>c</sub> = (1.0101)<sup>2</sup> = 1.0203.<br><i>eV</i>/<i>K</i><sub>c</sub> = 0.0203.',
          'With <i>K</i><sub>c</sub> = 1.022 MeV:<br><i>eV</i> = 0.0203 × 1.022 MeV = 20.75 keV.',
          'So <i>V</i> ≈ 21 kV. Below this voltage the error is less than 1%; above it the relativistic correction matters for JEE precision.',
        ],
        ans: '<i>V</i> ≈ 21 kV.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] An electron is accelerated from rest through 50 kV. Find its de Broglie wavelength using (a) the non-relativistic shortcut and (b) the relativistic formula. Comment on the difference.',
            a: '(a) <i>λ</i><sub>nr</sub> = 12.27/√50000 = 12.27/223.6 = 0.0549 Å. (b) <i>γ</i> = 1 + 50/511 = 1.098, <i>β</i> = √(1 − 1/1.206) = 0.413, <i>p</i> = <i>γm</i><sub>e</sub><i>βc</i> = 1.24 × 10<sup>−22</sup> kg·m/s, <i>λ</i> = 5.36 × 10<sup>−12</sup> m = 0.0536 Å. Difference: 0.0013 Å, about 2.4% too high if non-relativistic is used at 50 kV.',
          },
          {
            q: '[JEE Advanced] At what accelerating voltage does the de Broglie wavelength of an electron, accelerated from rest, become exactly 0.1 Å?',
            a: 'Set <i>λ</i> = 0.1 Å = 10<sup>−11</sup> m. Using <i>λ</i> = <i>h</i>/√(2<i>m</i><sub>e</sub><i>eV</i>) as a first estimate: <i>V</i> ≈ (12.27/0.1)<sup>2</sup> = 15060 V ≈ 15 kV. Relativistically: <i>λ</i><sup>2</sup> = <i>h</i><sup>2</sup>/(2<i>m</i><sub>e</sub><i>eV</i> + <i>e</i><sup>2</sup><i>V</i><sup>2</sup>/<i>c</i><sup>2</sup>). Solving the quadratic: <i>e</i><sup>2</sup><i>V</i><sup>2</sup>/<i>c</i><sup>2</sup> + 2<i>m</i><sub>e</sub><i>eV</i> − <i>h</i><sup>2</sup>/<i>λ</i><sup>2</sup> = 0. Numerically: (1.60 × 10<sup>−19</sup>)<sup>2</sup><i>V</i><sup>2</sup>/(9 × 10<sup>16</sup>) + 2(9.11 × 10<sup>−31</sup>)(1.60 × 10<sup>−19</sup>)<i>V</i> − (6.63 × 10<sup>−34</sup>)<sup>2</sup>/(10<sup>−11</sup>)<sup>2</sup> = 0. This gives 2.84 × 10<sup>−55</sup> <i>V</i><sup>2</sup> + 2.92 × 10<sup>−49</sup> <i>V</i> − 4.40 × 10<sup>−45</sup> = 0. Solving: <i>V</i> ≈ 14.9 kV (non-relativistic estimate: 15.1 kV).',
          },
          {
            q: '[JEE Advanced] A proton is accelerated from rest through 1 MV. Find (a) its speed as a fraction of <i>c</i>, (b) its relativistic de Broglie wavelength, and (c) compare with the non-relativistic value. (Take <i>m</i><sub>p</sub> = 1836<i>m</i><sub>e</sub>.)',
            a: 'Accelerating through 1 MV gives kinetic energy <i>K</i> = 1 MeV, with <i>m</i><sub>p</sub><i>c</i><sup>2</sup> = 938 MeV. (a) <i>γ</i> = 1 + <i>K</i>/(<i>m</i><sub>p</sub><i>c</i><sup>2</sup>) = 1 + 1/938 = 1.00107, so <i>β</i> = √(1 − 1/<i>γ</i><sup>2</sup>) = 0.0461 (the proton reaches only about 4.6% of <i>c</i> — nowhere near relativistic, since <i>K</i> ≪ <i>m</i><sub>p</sub><i>c</i><sup>2</sup>). (b) <i>pc</i> = √(<i>K</i><sup>2</sup> + 2<i>Km</i><sub>p</sub><i>c</i><sup>2</sup>) = √(1 + 1876) = 43.3 MeV, so <i>p</i> = 2.31 × 10<sup>−20</sup> kg·m/s and <i>λ</i> = <i>hc</i>/(<i>pc</i>) = 1240 MeV fm/43.3 MeV = 2.86 × 10<sup>−14</sup> m = 2.86 × 10<sup>−4</sup> Å. (c) Non-relativistic: <i>λ</i><sub>nr</sub> = 0.286/√10<sup>6</sup> = 2.86 × 10<sup>−4</sup> Å — matching the relativistic value to within 0.03%. Unlike the 50 kV electron in practice question 1 (where the correction was ∼2.4%), the relativistic correction here is negligible: <i>K</i>/(<i>m</i><sub>p</sub><i>c</i><sup>2</sup>) ≈ 1/938 is tiny because the proton is ∼1836× heavier than the electron, so the same kinetic energy is a far smaller fraction of its rest energy.',
          },
          {
            q: '[JEE Advanced] Show that for <i>eV</i> ≪ 2<i>m</i><sub>e</sub><i>c</i><sup>2</sup>, the relativistic de Broglie formula reduces to the non-relativistic form to first order in the small ratio <i>eV</i>/(2<i>m</i><sub>e</sub><i>c</i><sup>2</sup>).',
            a: 'Write <i>λ</i><sub>rel</sub> = <i>h</i>/√(2<i>mK</i> + <i>K</i><sup>2</sup>/<i>c</i><sup>2</sup>) = <i>h</i>/√(2<i>mK</i>) · 1/√(1 + <i>K</i>/(2<i>mc</i><sup>2</sup>)). For <i>K</i>/(2<i>mc</i><sup>2</sup>) ≪ 1, expand: 1/√(1 + <i>ε</i>) ≈ 1 − <i>ε</i>/2 to first order. Hence <i>λ</i><sub>rel</sub> ≈ (<i>h</i>/√(2<i>mK</i>))(1 − <i>K</i>/(4<i>mc</i><sup>2</sup>)), reducing to the non-relativistic form plus a small correction.',
          },
        ],
      },
    ],
  },
];
