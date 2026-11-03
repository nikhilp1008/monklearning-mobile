import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, Topics 03 and 04: pp. 531–541 of the Class 12 Physics Master
 * Reference, word for word: Nature and Properties of Electromagnetic Waves
 * (pp. 531–536) and The Electromagnetic Spectrum (pp. 537–541), each split at
 * its Sections 1 to 8. Figure 8.2 (caption p. 531, drawn p. 532) is redrawn in
 * lib/diagrams/physics-12-08.ts. The spectrum (pp. 537–538) is a table.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 531–536 ─────────────────────────
  {
    n: '03',
    title: 'Nature and Properties of Electromagnetic Waves',
    kalam: 'Light is an electromagnetic wave.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A reliable scoring zone. <b>JEE Main</b> almost always carries 1 numerical here (<i>E</i><sub>0</sub> ↔ <i>B</i><sub>0</sub>, intensity, or radiation pressure). <b>NEET</b> likes 1–2 conceptual one-liners (transverse nature, <i>E</i>–<i>B</i> phase, energy split). <b>JEE Advanced</b> folds radiation pressure into a mechanics problem (force/acceleration on a reflector). <b>CBSE Boards</b> ask for “properties of EM waves” or the relation <i>c</i> = 1/√(μ<sub>0</sub>ε<sub>0</sub>) as a 2–3 mark question.',
      },
      {
        t: 'p',
        html: 'In Topic 01 we left off at a remarkable cliff-edge: a changing electric field creates a magnetic field (Ampère–Maxwell), and a changing magnetic field creates an electric field (Faraday). Put those two facts together and something extraordinary happens — the fields can keep regenerating each other and march off through empty space without any wire, charge, or medium to carry them. That self-sustaining ripple of intertwined electric and magnetic fields is an <b>electromagnetic wave</b>.',
      },
      {
        t: 'p',
        html: 'Think of it like a relay between two runners who never stop. The electric field “runner” changes, which hands the baton to the magnetic field; the magnetic field changes, handing the baton right back to a new electric field a little further along. Neither can exist alone in the wave — kill one and the other collapses. The hand-off is so perfectly tuned that the disturbance travels at a fixed, enormous speed set entirely by two constants of empty space:<br><i>c</i> = 1/√(μ<sub>0</sub>ε<sub>0</sub>) ≈ 3 × 10<sup>8</sup> m s<sup>−1</sup>.<br>This was Maxwell’s jaw-dropping moment: he computed this number from purely electric and magnetic measurements and found it matched the measured speed of light. Light is an electromagnetic wave.',
      },
      {
        t: 'p',
        html: 'Now picture the geometry. In an EM wave travelling along, say, the <i>x</i>-axis, the electric field oscillates up and down along <i>y</i>, and the magnetic field oscillates in and out along <i>z</i> — <b>both perpendicular to each other and both perpendicular to the direction the wave travels.</b> That makes EM waves <b>transverse</b>. Crucially, <i>E⃗</i> and <i>B⃗</i> rise and fall together — they hit their peaks at the same instant and their zeros at the same instant. They are <b>in phase</b>, not a quarter-cycle apart.',
      },
      { t: 'fig', id: 'p12-08-fig-8.2' },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> The direction of travel is always given by the cross product <i>E⃗</i> × <i>B⃗</i>. Point your right hand’s fingers along <i>E⃗</i> and curl them toward <i>B⃗</i> — your thumb points where the wave is going. So <i>E⃗</i>, <i>B⃗</i>, and the direction of propagation form a right-handed set, like the <i>x</i>, <i>y</i>, <i>z</i> axes.',
      },
      {
        t: 'p',
        html: 'A few more truths that fall out naturally. The field magnitudes are locked together at every instant by <i>E</i> = <i>cB</i>, so <i>B</i> is numerically tiny (because <i>c</i> is huge) — but don’t be fooled, the wave stores <b>equal energy</b> in its electric and magnetic parts. And because the wave carries energy, it also carries <b>momentum</b> — so light can actually push on things it hits (radiation pressure). This is the principle behind solar sails.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• The simple relations (<i>c</i> = 1/√(μ<sub>0</sub>ε<sub>0</sub>), <i>E</i> = <i>cB</i>) are for <b>plane waves in vacuum</b>. In a medium the speed drops to <i>v</i> = 1/√(<i>με</i>) and <i>E</i> = <i>vB</i>.<br>• “<i>E</i> and <i>B</i> in phase” applies to a travelling EM wave; it is <b>not</b> true for, say, energy oscillations in an LC circuit (a common mix-up).<br>• Transverse nature is the reason EM waves can be <b>polarised</b> — a property longitudinal waves like sound can never have.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Speed in vacuum (from Maxwell’s equations)',
        main: '<i>c</i> = 1/√(μ<sub>0</sub>ε<sub>0</sub>)<br>and in a medium: <i>v</i> = 1/√(<i>με</i>) = <i>c</i>/<i>n</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Instantaneous relation between field magnitudes',
        main: '<i>E</i>/<i>B</i> = <i>c</i> ⇒ <i>E</i><sub>0</sub> = <i>cB</i><sub>0</sub> (amplitudes)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Wave relation',
        main: '<i>c</i> = <i>fλ</i> (vacuum)<br>with angular frequency: <i>ω</i> = <i>ck</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Energy densities (instantaneous)',
        main: '<i>u</i><sub>E</sub> = ½ε<sub>0</sub><i>E</i><sup>2</sup><br><i>u</i><sub>B</sub> = <i>B</i><sup>2</sup>/(2μ<sub>0</sub>)<br><i>u</i><sub>E</sub> = <i>u</i><sub>B</sub><br><i>u</i><sub>total</sub> = ε<sub>0</sub><i>E</i><sup>2</sup><br>⟨<i>u</i>⟩ = ½ε<sub>0</sub><i>E</i><sub>0</sub><sup>2</sup> = ε<sub>0</sub><i>E</i><sub>rms</sub><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Intensity (average power per unit area)',
        main: '<i>I</i> = ⟨<i>u</i>⟩<i>c</i> = ½ε<sub>0</sub><i>E</i><sub>0</sub><sup>2</sup><i>c</i> = ε<sub>0</sub><i>E</i><sub>rms</sub><sup>2</sup><i>c</i> = <i>E</i><sub>rms</sub><sup>2</sup>/(μ<sub>0</sub><i>c</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Momentum & radiation pressure (energy <i>U</i> delivered)',
        main: '<i>p</i> = <i>U</i>/<i>c</i> (full absorption)<br><i>P</i><sub>rad</sub> = <i>I</i>/<i>c</i> (absorbed) to 2<i>I</i>/<i>c</i> (fully reflected)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Notation & units:</b> <i>E</i><sub>0</sub>, <i>B</i><sub>0</sub> = field amplitudes (V m<sup>−1</sup>, T); <i>E</i><sub>rms</sub>, <i>B</i><sub>rms</sub> = rms values; <i>f</i> = frequency (Hz); <i>λ</i> = wavelength (m); <i>u</i> = energy density (J m<sup>−3</sup>); <i>I</i> = intensity (W m<sup>−2</sup>); <i>P</i><sub>rad</sub> = radiation pressure (Pa); <i>n</i> = refractive index.',
      },
      {
        t: 'table',
        title: 'Dimensional formulae of core quantities',
        head: ['Quantity', 'SI Unit', 'Dimensional Formula'],
        rows: [
          ['Energy density <i>u</i>', 'J m<sup>−3</sup>', '[M<sup>1</sup> L<sup>−1</sup> T<sup>−2</sup>]'],
          ['Intensity <i>I</i>', 'W m<sup>−2</sup>', '[M<sup>1</sup> L<sup>0</sup> T<sup>−3</sup>]'],
          ['Radiation pressure <i>P</i><sub>rad</sub>', 'Pa', '[M<sup>1</sup> L<sup>−1</sup> T<sup>−2</sup>]'],
        ],
      },

      { t: 'part', title: 'CBSE board derivation — Speed of light and the E–B relation' },
      {
        t: 'p',
        html: '<b>Goal:</b> Show why <i>c</i> = 1/√(μ<sub>0</sub>ε<sub>0</sub>) and <i>E</i> = <i>cB</i> emerge from Maxwell’s equations, using the field structure of a plane wave (a sketch of the rigorous box/loop derivation; NCERT itself only states these results).',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Why transverse.</b> Apply Gauss’s law to a small box straddling the wave. Since the box encloses no charge, the net flux is zero; for a wave with field components along the propagation direction, the flux through the box would not balance. The only way Gauss’s laws (∮ <i>E⃗</i> · d<i>A⃗</i> = 0 and ∮ <i>B⃗</i> · d<i>A⃗</i> = 0 in the source-free region) are satisfied is if <b>both <i>E⃗</i> and <i>B⃗</i> have no component along the direction of travel</b> — i.e., the wave is transverse.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Faraday’s law links <i>E</i> to <i>B</i>.</b> Take a thin rectangular loop in the plane containing <i>E⃗</i> and the propagation axis. As the wave passes, the magnetic flux through it changes. Faraday’s law ∮ <i>E⃗</i> · d<i>l⃗</i> = −dΦ<sub>B</sub>/d<i>t</i> relates the spatial variation of <i>E</i> to the time variation of <i>B</i>. Carrying this through for a sinusoidal plane wave yields<br>∂<i>E</i>/∂<i>x</i> = −∂<i>B</i>/∂<i>t</i>.<br><b>Physical meaning:</b> a spatially varying <i>E</i> demands a time-varying <i>B</i> — the fields cannot be static.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Ampère–Maxwell links <i>B</i> back to <i>E</i>.</b> Now take a loop in the plane containing <i>B⃗</i> and the propagation axis. In the source-free region <i>I</i><sub>c</sub> = 0, so only the displacement-current term survives:<br>∂<i>B</i>/∂<i>x</i> = −μ<sub>0</sub>ε<sub>0</sub> ∂<i>E</i>/∂<i>t</i>.<br><b>Physical meaning:</b> this is the Topic 01 idea doing real work — the changing <i>E</i> regenerates <i>B</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — Combine into a wave equation.</b> Differentiate the Faraday relation in space and substitute the Ampère–Maxwell relation. The two first-order equations fuse into a single wave equation:<br>∂<sup>2</sup><i>E</i>/∂<i>x</i><sup>2</sup> = μ<sub>0</sub>ε<sub>0</sub> ∂<sup>2</sup><i>E</i>/∂<i>t</i><sup>2</sup>.<br>Comparing with the standard wave form ∂<sup>2</sup><i>E</i>/∂<i>x</i><sup>2</sup> = (1/<i>v</i><sup>2</sup>) ∂<sup>2</sup><i>E</i>/∂<i>t</i><sup>2</sup> gives<br><i>v</i><sup>2</sup> = 1/(μ<sub>0</sub>ε<sub>0</sub>) ⇒ <i>c</i> = 1/√(μ<sub>0</sub>ε<sub>0</sub>).',
      },
      {
        t: 'p',
        html: '<b>Step 5 — The <i>E</i> = <i>cB</i> relation.</b> Substituting a sinusoidal solution <i>E</i> = <i>E</i><sub>0</sub> sin(<i>kx</i> − <i>ωt</i>) and <i>B</i> = <i>B</i><sub>0</sub> sin(<i>kx</i> − <i>ωt</i>) into the Faraday relation forces <i>E</i><sub>0</sub><i>k</i> = <i>B</i><sub>0</sub><i>ω</i>, and since <i>ω</i>/<i>k</i> = <i>c</i>,<br><i>E</i><sub>0</sub> = <i>cB</i><sub>0</sub> ⇒ <i>E</i>/<i>B</i> = <i>c</i> at every instant.',
      },
      {
        t: 'p',
        html: 'Plugging numbers: <i>c</i> = 1/√((4π × 10<sup>−7</sup>)(8.85 × 10<sup>−12</sup>)) ≈ 3 × 10<sup>8</sup> m s<sup>−1</sup> — precisely the speed of light. That single coincidence unified optics with electromagnetism.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'An electromagnetic wave in vacuum has a peak electric field <i>E</i><sub>0</sub> = 36 V m<sup>−1</sup> and frequency <i>f</i> = 25 MHz. Find (a) the peak magnetic field, and (b) the wavelength.',
        steps: [
          '<b>(a)</b> <i>B</i><sub>0</sub> = <i>E</i><sub>0</sub>/<i>c</i> = 36/(3 × 10<sup>8</sup>)',
          '<b>(b)</b> <i>λ</i> = <i>c</i>/<i>f</i> = (3 × 10<sup>8</sup>)/(25 × 10<sup>6</sup>)',
          'Note how small <i>B</i><sub>0</sub> is — a hallmark of EM waves, yet it carries exactly as much energy as the electric part.',
        ],
        ans: '(a) <i>B</i><sub>0</sub> = 1.2 × 10<sup>−7</sup> T; (b) <i>λ</i> = 12 m',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'In a plane electromagnetic wave, what is the ratio of the energy density stored in the electric field to that in the magnetic field?',
        steps: [
          '<b>The trap:</b> Since <i>B</i><sub>0</sub> ∼ 10<sup>−7</sup> T looks negligible next to <i>E</i><sub>0</sub> ∼ tens of V/m, students guess the magnetic energy is “almost nothing” and pick a huge ratio like <i>c</i><sup>2</sup>.',
          '<b>Quick truth:</b> Using <i>B</i> = <i>E</i>/<i>c</i> and <i>c</i><sup>2</sup> = 1/(μ<sub>0</sub>ε<sub>0</sub>),<br><i>u</i><sub>E</sub>/<i>u</i><sub>B</sub> = (½ε<sub>0</sub><i>E</i><sup>2</sup>)/(<i>B</i><sup>2</sup>/(2μ<sub>0</sub>)) = (ε<sub>0</sub><i>E</i><sup>2</sup>μ<sub>0</sub>)/(<i>E</i><sup>2</sup>/<i>c</i><sup>2</sup>) = μ<sub>0</sub>ε<sub>0</sub><i>c</i><sup>2</sup> = 1.',
          'The small <i>B</i> is exactly compensated by the large factor 1/(2μ<sub>0</sub>). Mark 1 ∶ 1 in two seconds and move on.',
        ],
        ans: '<i>u</i><sub>E</sub> ∶ <i>u</i><sub>B</sub> = 1 ∶ 1 (always equal).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: intensity → fields → pressure',
        q: 'Sunlight strikes a solar panel near Jaipur with intensity <i>I</i> = 1.0 kW m<sup>−2</sup>. Treating it as a plane wave, find (a) <i>E</i><sub>rms</sub>, (b) <i>B</i><sub>rms</sub>, and (c) the radiation pressure if the panel fully absorbs the light.',
        steps: [
          '<b>(a)</b> From <i>I</i> = ε<sub>0</sub><i>cE</i><sub>rms</sub><sup>2</sup>:<br><i>E</i><sub>rms</sub> = √(<i>I</i>/(ε<sub>0</sub><i>c</i>)) = √(1000/((8.85 × 10<sup>−12</sup>)(3 × 10<sup>8</sup>))) = √(3.77 × 10<sup>5</sup>)',
          '<b>(b)</b> <i>B</i><sub>rms</sub> = <i>E</i><sub>rms</sub>/<i>c</i> = 614/(3 × 10<sup>8</sup>)',
          '<b>(c)</b> Full absorption: <i>P</i><sub>rad</sub> = <i>I</i>/<i>c</i> = 1000/(3 × 10<sup>8</sup>)',
          'A reminder of how gentle light’s push is — micro-pascals from full sunlight.',
        ],
        ans: '(a) <i>E</i><sub>rms</sub> ≈ 614 V m<sup>−1</sup>; (b) <i>B</i><sub>rms</sub> ≈ 2.0 × 10<sup>−6</sup> T; (c) <i>P</i><sub>rad</sub> ≈ 3.3 × 10<sup>−6</sup> Pa',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: solar sail',
        q: 'A perfectly reflecting solar sail of area <i>A</i> = 50 m<sup>2</sup> and total mass <i>m</i> = 2.0 kg is deployed in space where the solar intensity is <i>I</i> = 1.36 kW m<sup>−2</sup> (the solar constant), facing the Sun head-on. Find (a) the radiation force on the sail, and (b) its acceleration.',
        steps: [
          '<b>(a)</b> Perfect reflection doubles the momentum transfer, so <i>P</i><sub>rad</sub> = 2<i>I</i>/<i>c</i> and<br><i>F</i> = <i>P</i><sub>rad</sub><i>A</i> = 2<i>IA</i>/<i>c</i> = (2(1360)(50))/(3 × 10<sup>8</sup>) = (1.36 × 10<sup>5</sup>)/(3 × 10<sup>8</sup>)',
          '<b>(b)</b> <i>a</i> = <i>F</i>/<i>m</i> = (4.5 × 10<sup>−4</sup>)/2.0',
          'Minuscule — but it never switches off, so over weeks the sail builds enormous speed with zero fuel. That’s real spacecraft propulsion riding on light’s momentum.',
        ],
        ans: '(a) <i>F</i> ≈ 4.5 × 10<sup>−4</sup> N; (b) <i>a</i> ≈ 2.3 × 10<sup>−4</sup> m s<sup>−2</sup>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] The peak magnetic field of an EM wave in vacuum is <i>B</i><sub>0</sub> = 4.0 × 10<sup>−8</sup> T. Find the peak electric field and state the direction relationship between <i>E⃗</i>, <i>B⃗</i>, and propagation.',
            a: '<i>E</i><sub>0</sub> = 12 V m<sup>−1</sup>; <i>E</i> and <i>B</i> mutually perpendicular and both perpendicular to propagation (direction of <i>E</i> × <i>B</i>)',
          },
          {
            q: '[NEET] An EM wave travels in a medium of refractive index <i>n</i> = 1.5. By what factor is its speed reduced compared to vacuum, and does its frequency change?',
            a: 'speed reduced to 2 × 10<sup>8</sup> m s<sup>−1</sup> (factor 1.5); frequency unchanged',
          },
          {
            q: '[JEE Main] A laser delivers an average intensity of 5.0 × 10<sup>3</sup> W m<sup>−2</sup>. Find <i>E</i><sub>0</sub> and <i>B</i><sub>0</sub> of the beam.',
            a: '<i>E</i><sub>0</sub> ≈ 1.9 × 10<sup>3</sup> V m<sup>−1</sup>, <i>B</i><sub>0</sub> ≈ 6.5 × 10<sup>−6</sup> T',
          },
          {
            q: '[JEE Main] The electric field of an EM wave in vacuum is <i>E</i> = 60 sin[2π(3 × 10<sup>14</sup><i>t</i> − <i>x</i>/<i>λ</i>)] V m<sup>−1</sup> (SI units). Find the wavelength and the peak magnetic field.',
            a: '<i>λ</i> = 1.0 × 10<sup>−6</sup> m, <i>B</i><sub>0</sub> = 2.0 × 10<sup>−7</sup> T',
          },
          {
            q: '[JEE Advanced] A black disc of area 0.04 m<sup>2</sup>, held facing the Sun, absorbs all sunlight falling on it at intensity 1.4 kW m<sup>−2</sup>. Find the force exerted by radiation on the disc and the momentum delivered to it in 1 minute.',
            a: '<i>F</i> ≈ 1.9 × 10<sup>−7</sup> N, <i>p</i> ≈ 1.1 × 10<sup>−5</sup> kg m s<sup>−1</sup>',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In a plane electromagnetic wave, the electric and magnetic fields are:',
        opts: [
          { label: 'parallel and in phase', nudge: '<b>(A)</b> wrong on both counts.' },
          {
            label: 'perpendicular and 90° out of phase',
            nudge: '<b>(B)</b> the “90°” trap, borrowed from LC-circuit energy exchange or standing waves — not true for a travelling EM wave.',
          },
          { label: 'perpendicular and in phase', nudge: null },
          { label: 'parallel and 90° out of phase', nudge: '<b>(D)</b> combines two errors.' },
        ],
        correct: 2,
        solution: '<i>E⃗</i> ⊥ <i>B⃗</i> (and both ⊥ propagation), and they peak/zero together — in phase.',
      },
      {
        t: 'mcq',
        q: 'An EM wave travels along the +<i>z</i>-axis with <i>E⃗</i> along +<i>x</i>. The magnetic field oscillates along:',
        opts: [
          { label: '+<i>z</i>', nudge: '<b>(A)</b> puts <i>B</i> along propagation — impossible (transverse).' },
          { label: '+<i>y</i>', nudge: null },
          {
            label: '−<i>x</i>',
            nudge: '<b>(C)</b>/<b>(D)</b> put <i>B</i> parallel/antiparallel to <i>E</i> — violates <i>E⃗</i> ⊥ <i>B⃗</i>.',
          },
          {
            label: '+<i>x</i>',
            nudge: '<b>(C)</b>/<b>(D)</b> put <i>B</i> parallel/antiparallel to <i>E</i> — violates <i>E⃗</i> ⊥ <i>B⃗</i>.',
          },
        ],
        correct: 1,
        solution: 'Propagation is along <i>E⃗</i> × <i>B⃗</i>. For <i>E⃗</i> ∥ +<i>x</i> and propagation +<i>z</i>, we need <i>x̂</i> × <i>B̂</i> = <i>ẑ</i>, which gives <i>B̂</i> = +<i>ŷ</i>.',
      },
      {
        t: 'mcq',
        q: 'The speed of an electromagnetic wave in vacuum depends on:',
        opts: [
          {
            label: 'its frequency',
            nudge: '<b>(A)</b> trap: all EM waves, radio to gamma, travel at the same <i>c</i> in vacuum regardless of <i>f</i>.',
          },
          { label: 'its amplitude', nudge: '<b>(B)</b>/<b>(D)</b> amplitude/intensity set energy carried, not speed.' },
          { label: 'the electric and magnetic properties of vacuum', nudge: null },
          { label: 'the intensity of the source', nudge: '<b>(B)</b>/<b>(D)</b> amplitude/intensity set energy carried, not speed.' },
        ],
        correct: 2,
        solution: '<i>c</i> = 1/√(μ<sub>0</sub>ε<sub>0</sub>) — set entirely by μ<sub>0</sub> and ε<sub>0</sub>.',
      },
      {
        t: 'mcq',
        q: 'When a beam of light of intensity <i>I</i> falls normally on a perfectly reflecting surface, the radiation pressure is:',
        opts: [
          { label: '<i>I</i>/<i>c</i>', nudge: '<b>(A)</b> is for a perfect absorber — the classic factor-of-2 trap.' },
          { label: '2<i>I</i>/<i>c</i>', nudge: null },
          { label: '<i>I</i>/(2<i>c</i>)', nudge: '<b>(C)</b> halves it the wrong way.' },
          { label: '<i>Ic</i>', nudge: '<b>(D)</b> dimensionally wrong (multiplying instead of dividing by <i>c</i>).' },
        ],
        correct: 1,
        solution: 'Reflection reverses the photons’ momentum, doubling the transfer ⇒ 2<i>I</i>/<i>c</i>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1: Thinking <i>E</i> and <i>B</i> are 90° out of phase.</b> In a travelling EM wave they are in phase. The 90° idea leaks in from LC circuits — different physics.',
          '<b>Pitfall 2: “<i>B</i> is tiny, so magnetic energy is negligible.”</b> False. <i>u</i><sub>E</sub> = <i>u</i><sub>B</sub> exactly. The small <i>B</i> is balanced by the 1/(2μ<sub>0</sub>) factor.',
          '<b>Pitfall 3: Dropping the factor of 2 in radiation pressure.</b> Absorber → <i>I</i>/<i>c</i>; perfect reflector → 2<i>I</i>/<i>c</i>. Read the surface carefully.',
          '<b>Pitfall 4: Using <i>c</i> inside a medium.</b> In a medium, <i>v</i> = <i>c</i>/<i>n</i> and <i>E</i> = <i>vB</i> (not <i>cB</i>). Frequency stays the same; wavelength shrinks.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any intensity problem, anchor to one chain: <i>I</i> = ½ε<sub>0</sub><i>cE</i><sub>0</sub><sup>2</sup>. From <i>E</i><sub>0</sub> you get <i>B</i><sub>0</sub> = <i>E</i><sub>0</sub>/<i>c</i>, and pressure is just <i>I</i>/<i>c</i> (or 2<i>I</i>/<i>c</i>). One formula unlocks the whole family — no need to memorise four separate ones.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Speed',
            note: '<i>c</i> = 1/√(μ<sub>0</sub>ε<sub>0</sub>) ≈ 3 × 10<sup>8</sup> m s<sup>−1</sup>; in medium <i>v</i> = <i>c</i>/<i>n</i> = 1/√(<i>με</i>).',
          },
          {
            f: 'Field link',
            note: '<i>E</i><sub>0</sub> = <i>cB</i><sub>0</sub> — in phase, mutually perpendicular, transverse; travel direction = <i>E⃗</i> × <i>B⃗</i>.',
          },
          { f: 'Energy', note: '<i>u</i><sub>E</sub> = <i>u</i><sub>B</sub>; ⟨<i>u</i>⟩ = ½ε<sub>0</sub><i>E</i><sub>0</sub><sup>2</sup>.' },
          {
            f: 'Intensity',
            note: '<i>I</i> = ½ε<sub>0</sub><i>cE</i><sub>0</sub><sup>2</sup> = ε<sub>0</sub><i>cE</i><sub>rms</sub><sup>2</sup>.',
          },
          {
            f: 'Momentum/pressure',
            note: '<i>p</i> = <i>U</i>/<i>c</i>; pressure = <i>I</i>/<i>c</i> (absorb) to 2<i>I</i>/<i>c</i> (reflect).',
          },
          { f: 'EM waves can be polarised', note: 'direct proof they are transverse.' },
        ],
        aids: [
          '“E cross B shows the way” — propagation along <i>E⃗</i> × <i>B⃗</i>.',
          '“Equal energy, in phase, perpendicular” — the three core properties.',
          'Reflect = double: 2<i>I</i>/<i>c</i>. Absorb = single: <i>I</i>/<i>c</i>.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 537–541 ─────────────────────────
  {
    n: '04',
    title: 'The Electromagnetic Spectrum',
    kalam: 'All bands travel at the same speed c in vacuum; they differ in f and λ, never in vacuum speed.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the <b>highest-yield recall topic</b> of the chapter. <b>NEET</b> loves it — 1–2 direct questions on production, detection, or uses of a band. <b>JEE Main</b> asks band-ordering or a <i>c</i> = <i>fλ</i> identification. <b>JEE Advanced</b> rarely asks it directly but may link X-ray production to modern physics. <b>CBSE Boards</b> very commonly ask “uses of X / how X is produced” as a 2–3 mark question. Pure marks if you have the ranges and uses memorised.',
      },
      {
        t: 'p',
        html: 'Here’s the single most liberating idea in this whole chapter: <b>radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays are all the same thing.</b> They are all electromagnetic waves — the same self-sustaining dance of <i>E⃗</i> and <i>B⃗</i> from Topic 02, all travelling at the same speed <i>c</i> in vacuum. The only thing that distinguishes them is their <b>frequency</b> (and therefore their wavelength, since <i>c</i> = <i>fλ</i>).',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a single piano keyboard stretching across a vast hall. Each key is a different frequency. The seven or eight “octaves” of this keyboard are what we name radio, microwave, infrared, and so on. Visible light — the entire rainbow your eyes can see — is just a few neighbouring keys near the middle. We’re effectively colour-blind to the rest of the keyboard, even though it’s the same instrument playing. A radio antenna “hears” the low keys; your retina “hears” a thin band in the middle; a hospital X-ray detector “hears” the very high keys.',
      },
      {
        t: 'p',
        html: 'Because it’s one continuous keyboard, <b>there are no sharp walls between the bands.</b> The boundaries are fuzzy and overlapping. So how do we classify them at all? By <b>how they are produced and detected</b>, not by some hard physical line. Radio waves come from electrons sloshing in an antenna; gamma rays come from the nucleus itself. The production mechanism climbs in energy as you go up the spectrum — gentle circuit oscillations at the bottom, violent nuclear processes at the top.',
      },
      {
        t: 'p',
        html: 'And that’s the through-line that ties everything together: <b>as frequency rises, wavelength shrinks and photon energy grows</b> (<i>E</i> = <i>hf</i>). Low-frequency radio photons are feeble; high-frequency gamma photons are ferociously energetic and dangerous. This single trend explains why each band is used the way it is. Microwaves match the tumbling frequency of water molecules — so they cook your food. UV carries enough punch to kill bacteria — so it sterilises water. X-rays slip through soft tissue but are stopped by dense bone — so they image your skeleton. Once you see the energy ladder, you stop memorising and start reasoning.',
      },
      {
        t: 'p',
        html: 'You meet this spectrum every single day in India: All India Radio broadcasts (radio waves), the mobile tower down the street (microwave-region), your TV remote (infrared), sunlight and sunburn (visible + UV), the hospital chest X-ray, and cancer radiotherapy (gamma rays).',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• Band boundaries are <b>approximate and overlapping</b> — don’t treat the cutoff numbers as exact.<br>• Classification is by <b>production/detection method</b>, not a precise frequency wall.<br>• All bands travel at the <b>same speed <i>c</i> in vacuum</b>; they differ in <i>f</i> and <i>λ</i>, never in vacuum speed.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: 'The spectrum is mostly a map rather than a set of derivations, but three relations stitch it together:',
      },
      {
        t: 'formula',
        kicker: 'Wave relation',
        main: '<i>c</i> = <i>fλ</i>',
        legend: [],
        note: 'convert between frequency and wavelength (vacuum, <i>c</i> = 3 × 10<sup>8</sup> m s<sup>−1</sup>).',
      },
      {
        t: 'formula',
        kicker: 'Photon energy',
        main: '<i>E</i> = <i>hf</i> = <i>hc</i>/<i>λ</i>',
        legend: [],
        note: 'energy rises with frequency (<i>h</i> = 6.63 × 10<sup>−34</sup> J s).',
      },
      {
        t: 'formula',
        kicker: 'Handy shortcut',
        main: '<i>E</i>(eV) = 1240/<i>λ</i>(nm)',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: 'The spectrum, low frequency → high frequency',
        head: ['Band', 'Wavelength (approx.)', 'Frequency (approx.)', 'Produced by', 'Typical uses'],
        rows: [
          ['Radio', '> 0.1 m', '< 3 × 10<sup>9</sup> Hz', 'Accelerated charges in antennas (LC oscillators)', 'AM/FM radio, TV, mobile/cellular comms'],
          ['Microwave', '1 mm–0.1 m', '3 × 10<sup>9</sup>–3 × 10<sup>11</sup> Hz', 'Klystrons, magnetrons, Gunn diodes', 'Radar, microwave ovens, satellite comms'],
          ['Infrared (IR)', '700 nm–1 mm', '3 × 10<sup>11</sup>–4 × 10<sup>14</sup> Hz', 'Hot bodies, vibrating molecules', 'Remote controls, thermal imaging, physiotherapy'],
          ['Visible', '400–700 nm', '4 × 10<sup>14</sup>–7.5 × 10<sup>14</sup> Hz', 'Electron transitions in atoms', 'Vision, illumination, optics'],
          ['Ultraviolet (UV)', '1–400 nm', '7.5 × 10<sup>14</sup>–3 × 10<sup>17</sup> Hz', 'Very hot bodies (Sun), special lamps', 'Sterilisation, water purification, LASIK'],
          ['X-rays', '0.01–10 nm', '3 × 10<sup>16</sup>–3 × 10<sup>19</sup> Hz', 'Sudden deceleration of fast electrons on a metal target', 'Medical imaging, security scans, cancer therapy'],
          ['Gamma rays', '< 0.01 nm', '> 3 × 10<sup>19</sup> Hz', 'Radioactive nuclei, nuclear reactions', 'Radiotherapy, food sterilisation, research'],
        ],
      },
      {
        t: 'p',
        html: 'Boundaries overlap (e.g., the high-UV and low-X-ray regions blur). The trend is what matters: <i>λ</i> falls, <i>f</i> and photon energy rise, from top to bottom.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: '(No formal derivation exists for the spectrum — it is a classification scheme. Here is the reasoning framework instead.)',
      },
      {
        t: 'proc',
        title: 'Procedure A — Identify which band a wave belongs to',
        steps: [
          'If given frequency, you can place it directly; if given wavelength, convert using <i>λ</i> = <i>c</i>/<i>f</i> (or <i>f</i> = <i>c</i>/<i>λ</i>). <b>Why:</b> the bands are defined on the frequency/wavelength axis, so you must be on that axis first.',
          'Slot the value into the table. <b>Why:</b> membership is purely a matter of where <i>f</i> (or <i>λ</i>) falls.',
          'If it sits near a boundary, name the band by its likely <b>production method</b> if that’s hinted. <b>Why:</b> boundaries overlap, so the source resolves ambiguity.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B — Reason out a band’s use from its energy',
        steps: [
          'Higher frequency ⇒ higher photon energy (<i>E</i> = <i>hf</i>). <b>Why:</b> this single fact predicts behaviour.',
          'Low energy (radio, microwave) ⇒ penetrates/reflects, ideal for <b>communication and heating</b>. <b>Why:</b> too weak to ionise, easily transmitted and steered.',
          'Mid energy (IR, visible) ⇒ interacts with <b>molecular vibration and the eye</b> ⇒ heating, imaging, vision.',
          'High energy (UV, X-ray, gamma) ⇒ <b>breaks chemical bonds</b> (X-ray and gamma also ionise) ⇒ sterilises, penetrates tissue, treats cancer — and is biologically dangerous. <b>Why:</b> enough energy to break bonds and damage cells.',
        ],
      },
      {
        t: 'p',
        html: '<b>Procedure C — Match production to band.</b> Climb the energy ladder of the source: oscillating circuits (radio) → special vacuum tubes/diodes (microwave) → thermal/vibrational emission (IR) → atomic electron jumps (visible/UV) → fast-electron deceleration and inner-shell transitions (X-ray) → nuclear transitions (gamma). <b>Why:</b> more energetic waves require more energetic production processes.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A radio station broadcasts at <i>f</i> = 90.4 MHz. Find the wavelength of the wave and name the band it belongs to.',
        steps: [
          '<i>λ</i> = <i>c</i>/<i>f</i> = (3 × 10<sup>8</sup>)/(90.4 × 10<sup>6</sup>)',
          'A wavelength of a few metres and a frequency below 3 × 10<sup>9</sup> Hz places this firmly in the <b>radio (FM) band</b> — exactly what we’d expect from a broadcast station.',
        ],
        ans: '<i>λ</i> ≈ 3.3 m',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Arrange the following in order of increasing wavelength: gamma rays, microwaves, visible light, X-rays.',
        steps: [
          '<b>The trap:</b> Students who memorised the frequency order sometimes copy it for wavelength and get the sequence backwards.',
          '<b>Quick truth:</b> wavelength is inverse to frequency, so the lowest-frequency wave has the longest wavelength. Increasing wavelength = decreasing frequency:',
          '<b>Mental check:</b> gamma is the most energetic (shortest <i>λ</i>); microwave is the least energetic of these (longest <i>λ</i>). Two seconds, done.',
        ],
        ans: 'gamma < X-rays < visible < microwaves.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: photon energy across the spectrum',
        q: 'An electromagnetic wave has wavelength <i>λ</i> = 200 nm. (a) Find the energy of one photon in electron-volts. (b) Identify the band.',
        steps: [
          '<b>(a)</b> Using the shortcut <i>E</i>(eV) = 1240/<i>λ</i>(nm):<br><i>E</i> = 1240/200',
          '<b>(b)</b> A wavelength of 200 nm is shorter than visible (400–700 nm) but longer than X-rays, placing it in the <b>ultraviolet</b> band — consistent with its 6.2 eV photons being energetic enough to break chemical bonds (hence UV’s sterilising power).',
        ],
        ans: '(a) <i>E</i> = 6.2 eV',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: X-ray production',
        q: 'In an X-ray tube, electrons are accelerated through a potential difference <i>V</i> and strike a metal target. The shortest-wavelength X-ray produced corresponds to an electron converting all its kinetic energy into a single photon. If the minimum wavelength observed is <i>λ</i><sub>min</sub> = 0.10 nm, find the accelerating voltage <i>V</i>.',
        steps: [
          '<b>Concept:</b> the most energetic photon possible carries the full electron energy <i>eV</i> (the Duane–Hunt limit):<br><i>eV</i> = <i>hc</i>/<i>λ</i><sub>min</sub>.',
          '<b>Solve</b> using <i>hc</i>/<i>e</i> = 1240 V · nm, so <i>V</i>(volts) = 1240/<i>λ</i><sub>min</sub>(nm):<br><i>V</i> = 1240/0.10',
          'The link is elegant: the electrical energy handed to one electron sets the highest-frequency X-ray the tube can emit — pure energy conservation bridging Chapter 8 and modern physics.',
        ],
        ans: '<i>V</i> = 1.24 × 10<sup>4</sup> V = 12.4 kV',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the electromagnetic radiation used in (i) a TV remote control, (ii) sterilising surgical instruments, (iii) radar, and state one production method for each.',
            a: '(i) infrared — an IR LED (the band’s sources in general: hot bodies, vibrating molecules); (ii) ultraviolet — special UV lamps; (iii) microwave — magnetron/klystron',
          },
          {
            q: '[NEET] Which of these has the highest photon energy: infrared, ultraviolet, microwave, or red light? Justify in one line.',
            a: 'ultraviolet (highest frequency ⇒ highest <i>E</i> = <i>hf</i>)',
          },
          {
            q: '[JEE Main] A microwave oven operates at 2.45 GHz. Find the wavelength of its radiation.',
            a: '<i>λ</i> ≈ 0.122 m = 12.2 cm',
          },
          {
            q: '[JEE Main] Green light has wavelength <i>λ</i> = 550 nm. Find its frequency and the energy of one photon in eV.',
            a: '<i>f</i> ≈ 5.5 × 10<sup>14</sup> Hz, <i>E</i> ≈ 2.3 eV',
          },
          {
            q: '[JEE Advanced] A gamma photon has energy 1.5 MeV. Find its frequency and wavelength.',
            a: '<i>f</i> ≈ 3.6 × 10<sup>20</sup> Hz, <i>λ</i> ≈ 8.3 × 10<sup>−13</sup> m',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which list is arranged in order of increasing frequency?',
        opts: [
          { label: 'X-rays, UV, visible, IR', nudge: '<b>(A)</b>/<b>(C)</b> are decreasing frequency (reversed).' },
          { label: 'radio, microwave, infrared, visible', nudge: null },
          { label: 'gamma, X-rays, UV, visible', nudge: '<b>(A)</b>/<b>(C)</b> are decreasing frequency (reversed).' },
          { label: 'microwave, radio, IR, UV', nudge: '<b>(D)</b> swaps radio and microwave (radio is lower frequency).' },
        ],
        correct: 1,
        solution: 'Increasing frequency: radio → microwave → IR → visible → UV → X-ray → gamma.',
      },
      {
        t: 'mcq',
        q: 'Electromagnetic waves used in radar are produced by:',
        opts: [
          { label: 'radioactive nuclei', nudge: '<b>(A)</b> produces gamma rays.' },
          { label: 'electron transitions in atoms', nudge: '<b>(B)</b> produces visible/UV.' },
          { label: 'special vacuum tubes such as magnetrons/klystrons', nudge: null },
          { label: 'vibrating molecules in hot bodies', nudge: '<b>(D)</b> produces infrared.' },
        ],
        correct: 2,
        solution: 'Radar uses microwaves, generated by magnetrons/klystrons/Gunn diodes.',
      },
      {
        t: 'mcq',
        q: 'The band of the spectrum chiefly responsible for sunburn and used to sterilise drinking water is:',
        opts: [
          { label: 'infrared', nudge: '<b>(A)</b> IR is felt as heat, doesn’t sterilise this way.' },
          { label: 'microwave', nudge: '<b>(B)</b> microwaves heat water, don’t cause sunburn.' },
          { label: 'ultraviolet', nudge: null },
          {
            label: 'X-rays',
            nudge: '<b>(D)</b> X-rays would work biologically but are not the standard answer for sunburn/water purification — overkill and not how it’s done.',
          },
        ],
        correct: 2,
        solution: 'UV photons are energetic enough to break chemical bonds — enough to kill microorganisms and to damage skin cells.',
      },
      {
        t: 'mcq',
        q: 'Two electromagnetic waves, one radio and one gamma, travel through vacuum. Which statement is correct?',
        opts: [
          {
            label: 'The gamma ray travels faster',
            nudge: '<b>(A)</b>/<b>(B)</b> the classic “higher energy = faster” trap; energy and speed are unrelated here.',
          },
          {
            label: 'The radio wave travels faster',
            nudge: '<b>(A)</b>/<b>(B)</b> the classic “higher energy = faster” trap; energy and speed are unrelated here.',
          },
          { label: 'Both travel at the same speed', nudge: null },
          { label: 'Speed depends on amplitude', nudge: '<b>(D)</b> amplitude sets intensity, not speed.' },
        ],
        correct: 2,
        solution: 'In vacuum all EM waves travel at <i>c</i>, regardless of frequency.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1: Reversing wavelength order.</b> Increasing frequency means decreasing wavelength. Don’t copy the frequency sequence for wavelength.',
          '<b>Pitfall 2: IR vs UV energy.</b> UV is higher energy than IR (UV sits above visible, IR below). Students often flip this.',
          '<b>Pitfall 3: Wrong production mechanism.</b> Gamma = nucleus; X-ray = decelerating electrons; visible/UV = atomic electron jumps; microwave = special tubes; radio = antennas. Mismatches are a favourite trap.',
          '<b>Pitfall 4: Thinking different bands travel at different speeds.</b> In vacuum, every band moves at <i>c</i>. Speed changes only in a medium (<i>v</i> = <i>c</i>/<i>n</i>, with <i>n</i> depending on the wave’s frequency); the frequency itself never changes.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Memorise the order with one sentence and you’ve locked production and energy trend together. Left to right = rising frequency = rising photon energy = more energetic source = more biologically dangerous. You can then derive most “uses” questions instead of rote-recalling them.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'One family, differing only in frequency',
            note: 'all travel at <i>c</i> in vacuum; <i>c</i> = <i>fλ</i>; photon energy <i>E</i> = <i>hf</i> = <i>hc</i>/<i>λ</i>.',
          },
          {
            f: 'Order (rising frequency / energy, falling wavelength)',
            note: 'Radio → Microwave → Infrared → Visible → Ultraviolet → X-ray → Gamma.',
          },
          {
            f: 'Production ladder',
            note: 'antennas → magnetron/klystron → hot bodies → atomic transitions → fast-electron deceleration → nuclei.',
          },
          {
            f: 'Signature uses',
            note: 'radio/microwave = communication & heating; IR = remotes & thermal imaging; UV = sterilisation; X-ray = bone imaging; gamma = cancer therapy.',
          },
          { f: 'Boundaries overlap', note: 'classify by production, not exact cutoffs.' },
          { f: 'Shortcut', note: '<i>E</i>(eV) = 1240/<i>λ</i>(nm).' },
        ],
        aids: [
          'Order mnemonic: <b>“Running Men In Vans Use eXtra Gas”</b> — Radio, Microwave, Infrared, Visible, Ultraviolet, X-ray, Gamma.',
          '“Higher frequency, shorter wave, stronger punch” — the whole spectrum in six words.',
        ],
      },
    ],
  },
];
