import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 12, Topic 03 and Additional topic A, word for word from the Class 12
 * Physics Master Reference: Atomic Spectra and the Hydrogen Spectral Series
 * (the book's Subtopic 02b, pp. 783–790, split at its Sections 1 to 8; its
 * Figures 12.8–12.10 are captioned together after the Cheat Sheet Box on
 * p. 790 and drawn on p. 791, but the text never refers to them, so they
 * stand here beside the Concept intuition paragraphs they illustrate:
 * 12.9 after the absorption paragraph, 12.8 and 12.10 after the paragraph
 * that groups the lines into series), then the
 * Supplement's shared opening (p. 792, set at the head of Addendum A) and
 * Addendum A, Bohr’s Model: Limitations, Reduced Mass, and Isotope Shifts
 * (pp. 792–795; it prints no drawings: the reduced-mass constants are a
 * table). The figures are redrawn in lib/diagrams/physics-12-12b.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 783–791 ─────────────────────────
  {
    n: '03',
    title: 'Atomic Spectra and the Hydrogen Spectral Series',
    kalam: 'Each element, when energised, emits light of its own fixed set of colours — and never any others.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The single most question-dense topic in the chapter. CBSE Boards ask the series names/regions or a Rydberg wavelength calculation (2–3 marks) almost every year. NEET reliably asks 1–2 MCQs on series regions, series limits, or line-counting. JEE Main loves Rydberg numericals and the <i>n</i>(<i>n</i> − 1)/2 line count; JEE Advanced combines series with <i>Z</i><sup>2</sup> scaling, He<sup>+</sup>/H coincidences, and excitation/ionisation energies.',
      },
      {
        t: 'p',
        html: 'Heat a pinch of common salt in a flame and it glows a vivid yellow; copper salts burn green; strontium (the stuff of Diwali anaars) burns crimson. Each element, when energised, emits light of its own fixed set of colours — and never any others. If you spread that light out with a prism, you don’t get a smooth rainbow; you get a handful of sharp, bright, coloured lines on a dark background. This is an <b>emission line spectrum</b>, and it is as unique to each element as a fingerprint — or, in a more Indian frame, like an Aadhaar for atoms. Astronomers literally read the composition of distant stars this way, from light that left them millions of years ago.',
      },
      {
        t: 'p',
        html: 'The flip side is just as striking. Shine continuous white light through a cool gas and then look at the transmitted light: you find dark lines at exactly the same wavelengths the gas would have emitted. The gas absorbs precisely the colours it can emit. This is an <b>absorption line spectrum</b> — the dark-line negative of the bright-line photograph.',
      },
      { t: 'fig', id: 'p12-12-fig-12.9' },
      {
        t: 'p',
        html: 'Why lines, and not a continuous smear? Topic 02 gives the answer. Bohr’s atom has a staircase of allowed energies, not a ramp. An electron can only sit on a step. When it falls from an upper step <i>n</i><sub>i</sub> to a lower step <i>n</i><sub>f</sub>, the atom sheds the energy difference as a single photon:<br><i>hν</i> = <i>E</i><sub><i>n</i><sub>i</sub></sub> − <i>E</i><sub><i>n</i><sub>f</sub></sub><br>Because the steps are at fixed heights, the gaps are fixed, so the emitted photons have fixed energies — hence fixed wavelengths, hence sharp lines. Absorption is the same staircase run upward: a photon is swallowed only if its energy exactly matches a step-to-step gap.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a building where the staircase landings are at very specific, uneven heights. A ball dropped from the 4th landing can release only certain precise “thuds” of energy depending on which lower landing it lands on (4→3, 4→2, 4→1). It can never make an in-between thud, because there is no in-between landing. The hydrogen spectrum is the complete catalogue of every possible “thud”.',
      },
      {
        t: 'p',
        html: 'Now group the lines by their destination step <i>n</i><sub>f</sub> — by the landing the electron finishes on. All jumps ending on <i>n</i><sub>f</sub> = 1 form one family (the <b>Lyman series</b>, in the ultraviolet). All ending on <i>n</i><sub>f</sub> = 2 form another (the <b>Balmer series</b>, the only one in the visible — which is why it was discovered first, by a Swiss schoolteacher in 1885). Endings on <i>n</i><sub>f</sub> = 3, 4, 5 give the <b>Paschen, Brackett, and Pfund</b> series, all in the infrared. Within each family, the lines crowd closer and closer together as <i>n</i><sub>i</sub> climbs, piling up at a <b>series limit</b> (<i>n</i><sub>i</sub> → ∞) — the shortest-wavelength, highest-energy end of that family.',
      },
      { t: 'fig', id: 'p12-12-fig-12.8' },
      { t: 'fig', id: 'p12-12-fig-12.10' },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• The clean Rydberg pattern is exact only for <b>hydrogenic (one-electron) systems</b> (H, He<sup>+</sup>, Li<sup>2+</sup>, …). Multi-electron atoms have far messier spectra.<br>• The simple formula treats the nucleus as <b>infinitely heavy</b>; a tiny correction (the reduced mass) makes the Rydberg constant very slightly different for each isotope — this is how deuterium was discovered.<br>• Bohr’s scheme predicts the positions (wavelengths) of the lines beautifully but <b>not their relative brightness</b> (intensities), and it misses the fine splitting of lines (<b>fine structure</b>) that electron spin later explained.<br>• “Series limit” is a limit, not a line you reach by a finite jump; beyond it lies the <b>continuum</b> (the electron is freed — ionisation).',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Rydberg formula (wavelength of a hydrogenic transition)',
        main: '1/<i>λ</i> = <i>ν̄</i> = <i>RZ</i><sup>2</sup>(1/<i>n</i><sub>f</sub><sup>2</sup> − 1/<i>n</i><sub>i</sub><sup>2</sup>),   <i>n</i><sub>i</sub> > <i>n</i><sub>f</sub>',
        legend: [
          '<i>λ</i> = wavelength (m)',
          '<i>ν̄</i> = <b>wavenumber</b> (m<sup>−1</sup>), 1/<i>λ</i>',
          '<i>R</i> = <b>Rydberg constant</b>, 1.097 × 10<sup>7</sup> m<sup>−1</sup> (for hydrogen; infinite-nucleus value <i>R</i><sub>∞</sub>)',
          '<i>Z</i> = atomic number (<i>Z</i> = 1 for hydrogen)',
          '<i>n</i><sub>f</sub> = lower (final) level',
          '<i>n</i><sub>i</sub> = upper (initial) level',
        ],
        note: 'SI unit of <i>λ</i>: m; of <i>ν̄</i>: m<sup>−1</sup>',
      },
      {
        t: 'formula',
        kicker: 'Photon energy of the transition',
        main: '<i>E</i> = <i>E</i><sub><i>n</i><sub>i</sub></sub> − <i>E</i><sub><i>n</i><sub>f</sub></sub> = 13.6 <i>Z</i><sup>2</sup>(1/<i>n</i><sub>f</sub><sup>2</sup> − 1/<i>n</i><sub>i</sub><sup>2</sup>) eV<br><i>λ</i> (nm) = 1240/<i>E</i> (eV)',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: 'The five spectral series of hydrogen (Z = 1)',
        head: ['Series', '<i>n</i><sub>f</sub>', 'Region', 'First line (<i>n</i><sub>i</sub> = <i>n</i><sub>f</sub> + 1)', 'Series limit (<i>n</i><sub>i</sub> → ∞)'],
        rows: [
          ['Lyman', '1', 'Ultraviolet', '121.6 nm', '91.2 nm (= 1/<i>R</i>)'],
          ['Balmer', '2', 'Visible', '656.3 nm (H<sub>α</sub>)', '364.6 nm (= 4/<i>R</i>)'],
          ['Paschen', '3', 'Infrared', '1875 nm', '820.4 nm (= 9/<i>R</i>)'],
          ['Brackett', '4', 'Infrared', '4051 nm', '1459 nm (= 16/<i>R</i>)'],
          ['Pfund', '5', 'Far infrared', '7460 nm', '2279 nm (= 25/<i>R</i>)'],
        ],
      },
      {
        t: 'formula',
        kicker: 'Series limit (shortest wavelength of a series)',
        main: '1/<i>λ</i><sub>min</sub> = <i>RZ</i><sup>2</sup>/<i>n</i><sub>f</sub><sup>2</sup> ⇒ <i>λ</i><sub>min</sub> = <i>n</i><sub>f</sub><sup>2</sup>/(<i>RZ</i><sup>2</sup>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Number of spectral lines emitted when atoms in a sample de-excite from level <i>n</i> (to all lower levels)',
        main: '<i>N</i> = <i>n</i>(<i>n</i> − 1)/2',
        legend: [],
        note: 'A single atom gives at most <i>n</i> − 1.',
      },
      {
        t: 'formula',
        kicker: 'Ionisation energy (from the ground state, <i>n</i> = 1 → ∞)',
        main: '<i>E</i><sub>ion</sub> = 13.6 <i>Z</i><sup>2</sup> eV',
        legend: [],
        note: '(for H, 13.6 eV; <b>ionisation potential</b> = 13.6 V)',
      },
      {
        t: 'formula',
        kicker: 'Excitation energy (ground → <i>n</i>)',
        main: '<i>E</i><sub>exc</sub> = 13.6 <i>Z</i><sup>2</sup>(1 − 1/<i>n</i><sup>2</sup>) eV',
        legend: [],
        note: 'For H: first excitation = 10.2 eV (→ <i>n</i> = 2), second = 12.09 eV (→ <i>n</i> = 3). The corresponding <b>excitation potentials</b> are 10.2 V, 12.09 V.',
      },
      {
        t: 'formula',
        kicker: 'Dimensional formula (core quantity — Rydberg constant / wavenumber)',
        main: '[<i>R</i>] = [<i>ν̄</i>] = [L<sup>−1</sup>]',
        legend: [],
        note: null,
      },

      { t: 'part', title: 'Derivation and key procedures' },
      { t: 'p', html: '<b>(A) Deriving the Rydberg formula from Bohr’s energy levels</b>' },
      { t: 'p', html: 'This is the bridge from Topic 02 to the spectrum.' },
      {
        t: 'p',
        html: '<b>Step 1 — Photon energy equals the level gap.</b> When the electron drops <i>n</i><sub>i</sub> → <i>n</i><sub>f</sub>, energy conservation gives the photon energy<br><i>hν</i> = <i>E</i><sub><i>n</i><sub>i</sub></sub> − <i>E</i><sub><i>n</i><sub>f</sub></sub><br><b>Why:</b> the atom can shed energy only in the lump that separates two allowed states.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Insert Bohr’s levels.</b> From Topic 02, <i>E</i><sub><i>n</i></sub> = −13.6 <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> eV = −<i>me</i><sup>4</sup><i>Z</i><sup>2</sup>/(8ε<sub>0</sub><sup>2</sup><i>h</i><sup>2</sup><i>n</i><sup>2</sup>). Therefore<br><i>hν</i> = (<i>me</i><sup>4</sup><i>Z</i><sup>2</sup>/(8ε<sub>0</sub><sup>2</sup><i>h</i><sup>2</sup>))(1/<i>n</i><sub>f</sub><sup>2</sup> − 1/<i>n</i><sub>i</sub><sup>2</sup>)<br>(note the order flips because <i>E</i><sub><i>n</i><sub>i</sub></sub> > <i>E</i><sub><i>n</i><sub>f</sub></sub> in algebraic — less negative — terms, leaving a positive energy).',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Convert to wavelength.</b> Using <i>ν</i> = <i>c</i>/<i>λ</i>:<br>1/<i>λ</i> = (<i>me</i><sup>4</sup><i>Z</i><sup>2</sup>/(8ε<sub>0</sub><sup>2</sup><i>h</i><sup>3</sup><i>c</i>))(1/<i>n</i><sub>f</sub><sup>2</sup> − 1/<i>n</i><sub>i</sub><sup>2</sup>) = <i>RZ</i><sup>2</sup>(1/<i>n</i><sub>f</sub><sup>2</sup> − 1/<i>n</i><sub>i</sub><sup>2</sup>)<br>The whole clump of constants is the Rydberg constant:<br><i>R</i> = <i>me</i><sup>4</sup>/(8ε<sub>0</sub><sup>2</sup><i>h</i><sup>3</sup><i>c</i>) = 1.097 × 10<sup>7</sup> m<sup>−1</sup>',
      },
      {
        t: 'p',
        html: '<b>Why it matters:</b> Bohr’s model doesn’t just fit the hydrogen spectrum — it <b>predicts</b> the Rydberg constant from fundamental constants, and the predicted value matches experiment to better than 0.1%. That agreement is what convinced physicists Bohr was onto something real.',
      },
      {
        t: 'proc',
        title: '(B) Procedure: identifying a series and finding its bounds',
        steps: [
          '<b>Identify</b> <i>n</i><sub>f</sub> (the destination) — it names the series (1=Lyman, 2=Balmer, 3=Paschen, …).',
          '<b>Longest wavelength</b> of the series ⇒ smallest energy gap ⇒ first line, <i>n</i><sub>i</sub> = <i>n</i><sub>f</sub> + 1.',
          '<b>Shortest wavelength</b> (series limit) ⇒ largest gap ⇒ <i>n</i><sub>i</sub> → ∞, so <i>λ</i><sub>min</sub> = <i>n</i><sub>f</sub><sup>2</sup>/(<i>RZ</i><sup>2</sup>).',
          'For a <b>hydrogen-like ion</b>, every hydrogen wavelength scales by 1/<i>Z</i><sup>2</sup> (the lines shift toward the ultraviolet).',
        ],
      },
      { t: 'p', html: '<b>(C) The correspondence principle (why Bohr connects to classical physics)</b>' },
      {
        t: 'p',
        html: 'For small <i>n</i>, the photon frequency from <i>n</i> + 1 → <i>n</i> has no simple relation to the electron’s orbital frequency. But for <b>very large</b> <i>n</i>, the frequency of the emitted radiation approaches the electron’s classical frequency of revolution in its orbit. In this large-<i>n</i> limit, quantum predictions blend smoothly into classical ones — Bohr’s <b>correspondence principle</b>, a key sanity check that any quantum theory must satisfy.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Find the wavelength of the photon emitted when a hydrogen electron jumps from <i>n</i><sub>i</sub> = 4 to <i>n</i><sub>f</sub> = 2. In which series and region does it lie?',
        steps: [
          '1/<i>λ</i> = <i>R</i>(1/2<sup>2</sup> − 1/4<sup>2</sup>) = <i>R</i>(1/4 − 1/16) = <i>R</i> · 3/16 = 1.097 × 10<sup>7</sup> × 0.1875 = 2.057 × 10<sup>6</sup> m<sup>−1</sup>',
          '<i>λ</i> = 1/(2.057 × 10<sup>6</sup>) = 4.86 × 10<sup>−7</sup> m',
        ],
        ans: '<i>λ</i> ≈ 486 nm. Since <i>n</i><sub>f</sub> = 2, it is the <b>Balmer</b> series; 486 nm is blue-green <b>visible</b> light (the H<sub>β</sub> line).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'What is the shortest wavelength present in the Paschen series of hydrogen?',
        steps: [
          '<b>Trap:</b> Students reach for the “first line” (4 → 3). But shortest wavelength means largest energy gap, which is the <b>series limit</b> (<i>n</i><sub>i</sub> → ∞), not the first line.',
          '1/<i>λ</i><sub>min</sub> = <i>R</i>/<i>n</i><sub>f</sub><sup>2</sup> = <i>R</i>/3<sup>2</sup> = (1.097 × 10<sup>7</sup>)/9 ⇒ <i>λ</i><sub>min</sub> = 9/(1.097 × 10<sup>7</sup>) ≈ 8.2 × 10<sup>−7</sup> m',
          '<b>Memory hook:</b> shortest <i>λ</i> = series limit = <i>n</i><sub>f</sub><sup>2</sup>/<i>R</i>; longest <i>λ</i> = first line.',
        ],
        ans: '≈ 820 nm.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Hydrogen atoms are excited to the <i>n</i> = 4 level and then de-excite. (a) How many distinct spectral lines can they emit? (b) What is the longest wavelength among them, and which series does it belong to?',
        steps: [
          '(a) <i>N</i> = <i>n</i>(<i>n</i> − 1)/2 = (4 × 3)/2',
          '(b) Longest wavelength ⇒ smallest energy gap ⇒ the 4 → 3 transition (Paschen first line):<br>1/<i>λ</i> = <i>R</i>(1/3<sup>2</sup> − 1/4<sup>2</sup>) = <i>R</i>(1/9 − 1/16) = <i>R</i> · 7/144 = 1.097 × 10<sup>7</sup> × 0.04861 = 5.33 × 10<sup>5</sup> m<sup>−1</sup><br><i>λ</i> = 1.875 × 10<sup>−6</sup> m',
        ],
        ans: '(a) 6 lines; (b) ≈ 1875 nm, in the Paschen (infrared) series.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Show that certain emission lines of He<sup>+</sup> coincide exactly in wavelength with the Balmer series of hydrogen, and identify the He<sup>+</sup> transition that matches H<sub>α</sub> (3 → 2).',
        steps: [
          'For He<sup>+</sup> (<i>Z</i> = 2): 1/<i>λ</i> = 4<i>R</i>(1/<i>n</i>′<sub>f</sub><sup>2</sup> − 1/<i>n</i>′<sub>i</sub><sup>2</sup>). For H Balmer (<i>n</i><sub>f</sub> = 2): 1/<i>λ</i> = <i>R</i>(1/4 − 1/<i>n</i><sub>i</sub><sup>2</sup>).',
          'Set them equal:<br>4(1/<i>n</i>′<sub>f</sub><sup>2</sup> − 1/<i>n</i>′<sub>i</sub><sup>2</sup>) = 1/4 − 1/<i>n</i><sub>i</sub><sup>2</sup>',
          'This holds term-by-term if 4/<i>n</i>′<sub>f</sub><sup>2</sup> = 1/4 (so <i>n</i>′<sub>f</sub> = 4) and 4/<i>n</i>′<sub>i</sub><sup>2</sup> = 1/<i>n</i><sub>i</sub><sup>2</sup> (so <i>n</i>′<sub>i</sub> = 2<i>n</i><sub>i</sub>).',
          '<b>Result:</b> every He<sup>+</sup> transition of the form (2<i>n</i><sub>i</sub> → 4) overlaps the H Balmer line (<i>n</i><sub>i</sub> → 2). For H<sub>α</sub> (3 → 2), set <i>n</i><sub>i</sub> = 3: the matching He<sup>+</sup> line is<br>He<sup>+</sup>: 6 → 4 ≡ H: 3 → 2 (H<sub>α</sub>)',
          'This coincidence (exact in this infinite-nuclear-mass formula; the reduced-mass correction of Additional topic A puts the He<sup>+</sup> line about 0.04% shorter, 656.0 nm against 656.3 nm) is why early astronomers briefly mis-assigned some stellar He<sup>+</sup> lines to hydrogen.',
        ],
        ans: 'He<sup>+</sup> 6 → 4 has the same wavelength as H<sub>α</sub>.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Find the wavelength of the first line of the Lyman series of hydrogen (2 → 1).',
            a: '≈ 121.5 nm (121.6 nm measured)',
          },
          {
            q: '[NEET] Name the spectral series of hydrogen whose lines lie in the visible region, and state its destination level <i>n</i><sub>f</sub>.',
            a: 'Balmer, <i>n</i><sub>f</sub> = 2',
          },
          {
            q: '[JEE Main] How many distinct spectral lines are emitted when hydrogen atoms de-excite from the <i>n</i> = 5 level to the ground state?',
            a: '10 lines',
          },
          {
            q: '[JEE Main] Calculate the ionisation energy (in eV) of a singly ionised helium atom (He<sup>+</sup>) from its ground state.',
            a: '54.4 eV',
          },
          {
            q: '[JEE Advanced] Find the ratio of the longest-wavelength line of the Lyman series to the longest-wavelength line of the Balmer series of hydrogen.',
            a: '5 ∶ 27',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The Balmer series of the hydrogen spectrum lies in the:',
        opts: [
          { label: 'ultraviolet region', nudge: '<b>(A)</b> is the Lyman series (<i>n</i><sub>f</sub> = 1).' },
          { label: 'visible region', nudge: null },
          { label: 'infrared region', nudge: '<b>(C)</b> covers Paschen/Brackett/Pfund (<i>n</i><sub>f</sub> ≥ 3).' },
          { label: 'microwave region', nudge: '<b>(D)</b> none of the five named hydrogen series falls in the microwave region.' },
        ],
        correct: 1,
        solution: 'Balmer (<i>n</i><sub>f</sub> = 2) is the only hydrogen series in the visible band.',
      },
      {
        t: 'mcq',
        q: 'The series limit of any hydrogen spectral series corresponds to a transition from:',
        opts: [
          { label: '<i>n</i><sub>i</sub> = <i>n</i><sub>f</sub> + 1', nudge: '<b>(A)</b> is the first line (longest wavelength) — the opposite end.' },
          { label: '<i>n</i><sub>i</sub> = 2<i>n</i><sub>f</sub>', nudge: '<b>(B)</b> is an arbitrary intermediate jump.' },
          { label: '<i>n</i><sub>i</sub> → ∞', nudge: null },
          { label: '<i>n</i><sub>i</sub> = <i>n</i><sub>f</sub>', nudge: '<b>(D)</b> gives zero energy (no transition, no line).' },
        ],
        correct: 2,
        solution: 'The series limit is the shortest-wavelength (largest-gap) line, reached as the upper level goes to infinity.',
      },
      {
        t: 'mcq',
        q: 'When the electrons in a sample of hydrogen atoms de-excite from <i>n</i> = 3, the maximum number of distinct spectral lines produced is:',
        opts: [
          { label: '2', nudge: '<b>(A)</b> counts only the direct jumps from <i>n</i> = 3, missing the 2 → 1 cascade.' },
          { label: '3', nudge: null },
          { label: '6', nudge: '<b>(C)</b> uses <i>n</i>(<i>n</i> − 1) without the factor of 2.' },
          { label: '9', nudge: '<b>(D)</b> uses <i>n</i><sup>2</sup>.' },
        ],
        correct: 1,
        solution: '<i>N</i> = <i>n</i>(<i>n</i> − 1)/2 = 3 × 2/2 = 3 (the jumps 3 → 2, 3 → 1, 2 → 1). (A single atom can give at most <i>n</i> − 1 = 2 of them, by 3 → 2 → 1.)',
      },
      {
        t: 'mcq',
        q: 'The frequency of the first Lyman line of hydrogen is <i>ν</i>. The frequency of the corresponding line (2 → 1) in doubly ionised lithium (Li<sup>2+</sup>) is:',
        opts: [
          { label: '<i>ν</i>', nudge: '<b>(A)</b> ignores the <i>Z</i>-dependence.' },
          { label: '3<i>ν</i>', nudge: '<b>(B)</b> uses <i>Z</i> instead of <i>Z</i><sup>2</sup>.' },
          { label: '9<i>ν</i>', nudge: null },
          { label: '27<i>ν</i>', nudge: '<b>(D)</b> uses <i>Z</i><sup>3</sup>.' },
        ],
        correct: 2,
        solution: 'Frequency ∝ <i>Z</i><sup>2</sup> for the same transition; Li<sup>2+</sup> has <i>Z</i> = 3, so <i>ν</i>′ = 3<sup>2</sup><i>ν</i> = 9<i>ν</i>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Swapping <i>n</i><sub>i</sub> and <i>n</i><sub>f</sub>.</b> In the Rydberg formula the smaller level <i>n</i><sub>f</sub> comes first and names the series; the larger level <i>n</i><sub>i</sub> is where the electron starts. Reverse them and you get a negative 1/<i>λ</i>.',
          '<b>“Shortest” vs “longest” wavelength.</b> Shortest <i>λ</i> = largest gap = series limit (<i>n</i><sub>i</sub> → ∞). Longest <i>λ</i> = smallest gap = first line (<i>n</i><sub>i</sub> = <i>n</i><sub>f</sub> + 1). Students routinely compute the wrong end.',
          '<b>Forgetting <i>Z</i><sup>2</sup> for ions.</b> Both wavelengths (∝ 1/<i>Z</i><sup>2</sup>) and energies/frequencies (∝ <i>Z</i><sup>2</sup>) scale strongly with <i>Z</i>. He<sup>+</sup> and Li<sup>2+</sup> are not hydrogen.',
          '<b>Confusing excitation with ionisation.</b> Excitation lifts the electron to a higher bound level (e.g. 10.2 eV to reach <i>n</i> = 2); ionisation (13.6 eV) frees it entirely. Excitation potential ≠ ionisation potential.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Lock the series-limit shortcut <i>λ</i><sub>min</sub> = <i>n</i><sub>f</sub><sup>2</sup>/(<i>RZ</i><sup>2</sup>) and the line count <i>N</i> = <i>n</i>(<i>n</i> − 1)/2; together they answer most NEET MCQs in seconds. For “which region”, remember <b>L</b>yman–<b>U</b>V, <b>B</b>almer–<b>V</b>isible, then everything higher is infrared — mnemonic “Lazy Boys Play Bridge in Patna” for <b>L</b>yman, <b>B</b>almer, <b>P</b>aschen, <b>B</b>rackett, <b>P</b>fund.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Emission spectrum',
            note: 'bright lines on dark background; an atomic “fingerprint”. <b>Absorption spectrum:</b> dark lines at the same wavelengths.',
          },
          {
            f: 'Origin of lines',
            note: '<i>hν</i> = <i>E</i><sub><i>n</i><sub>i</sub></sub> − <i>E</i><sub><i>n</i><sub>f</sub></sub> — fixed level gaps give fixed wavelengths.',
          },
          {
            f: 'Rydberg formula',
            note: '1/<i>λ</i> = <i>RZ</i><sup>2</sup>(1/<i>n</i><sub>f</sub><sup>2</sup> − 1/<i>n</i><sub>i</sub><sup>2</sup>),   <i>R</i> = 1.097 × 10<sup>7</sup> m<sup>−1</sup>',
          },
          {
            f: 'Photon energy / wavelength',
            note: '<i>E</i> = 13.6 <i>Z</i><sup>2</sup>(1/<i>n</i><sub>f</sub><sup>2</sup> − 1/<i>n</i><sub>i</sub><sup>2</sup>) eV; <i>λ</i>(nm) = 1240/<i>E</i>(eV).',
          },
          {
            f: 'Series (<i>n</i><sub>f</sub>)',
            note: 'Lyman 1 (UV), Balmer 2 (visible), Paschen 3 (IR), Brackett 4 (IR), Pfund 5 (far IR).',
          },
          {
            f: 'Series limit',
            note: '<i>λ</i><sub>min</sub> = <i>n</i><sub>f</sub><sup>2</sup>/(<i>RZ</i><sup>2</sup>) (shortest <i>λ</i>). <b>First line:</b> <i>n</i><sub>i</sub> = <i>n</i><sub>f</sub> + 1 (longest <i>λ</i>).',
          },
          { f: 'Line count from level <i>n</i>', note: '<i>N</i> = <i>n</i>(<i>n</i> − 1)/2.' },
          { f: 'Ionisation', note: '13.6 <i>Z</i><sup>2</sup> eV. <b>First excitation (H):</b> 10.2 eV.' },
        ],
        aids: [
          '“Lazy Boys Play Bridge in Patna” (Lyman, Balmer, Paschen, Brackett, Pfund).',
          '“Lyman–UV, Balmer–Visible, rest Infrared.”',
          '“Limit is shortest, first line is longest.”',
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 792–795 ─────────────────────────
  {
    n: 'A',
    title: 'Bohr’s Model: Limitations, Reduced Mass, and Isotope Shifts',
    extra: true,
    kalam: 'The chapter derives the Bohr formulas for a hydrogenic atom assuming an infinitely heavy nucleus.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you Rutherford scattering, Bohr’s model with its radius and energy formulas, and the hydrogen spectral series with the Rydberg equation. Three major patterns stand outside the door: the isotope shifts explained by the finite-nuclear-mass correction (which Topic 02 applies only once, to muonic hydrogen; a JEE Advanced subtlety), Moseley’s law connecting X-ray frequency to atomic number (a JEE Main regular that the chapter omits entirely), and the experimental bridge between Bohr’s quantised levels and real measurements—the Franck-Hertz experiment. Addendum A closes the Bohr model by showing where it stops: reduced-mass effects, the isotope story, and why it fails for helium. Addendum B opens X-ray spectra and Moseley’s law, the direct experimental link between atomic structure and electromagnetic radiation that CBSE never asks but JEE reliably does. Addendum C turns the Franck-Hertz experiment into a method for reading quantised excitation energies from current-voltage curves. Addendum D treats laser physics as a direct application of stimulated emission and population inversion, extending the Bohr transition idea to coherent radiation. Addendum E develops the Zeeman effect as a magnetic-field probe of orbital angular momentum. Addendum F lists what full quantum mechanics adds beyond Bohr: fine structure, hyperfine structure and the Lamb shift. Each section concentrates on the patterns JEE questions favour.',
      },
      {
        t: 'p',
        html: 'The chapter derives the Bohr formulas for a hydrogenic atom assuming an infinitely heavy nucleus. In reality the nucleus has finite mass, and this matters more than students expect: it explains why deuterium and ordinary hydrogen have slightly different spectral lines, why the Rydberg constant is not quite universal, and why muonic hydrogen is a real experimental system. Equally important is the boundary of Bohr’s domain: it works for hydrogen and hydrogenic ions, and fails spectacularly for anything else. Both limitations are JEE Advanced material.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Reduced-mass correction.</b> Replace the electron mass <i>m</i><sub>e</sub> by the reduced mass <i>μ</i> in every Bohr formula:<br><i>μ</i> = <i>m</i><sub>e</sub><i>M</i><sub>N</sub>/(<i>m</i><sub>e</sub> + <i>M</i><sub>N</sub>),<br>where <i>M</i><sub>N</sub> is the nuclear mass. The ratio <i>μ</i>/<i>m</i><sub>e</sub> < 1 for all real nuclei.',
      },
      {
        t: 'table',
        title: 'New constants with reduced mass',
        head: ['Quantity', 'Infinite-nucleus (as given)', 'Finite-nucleus correction'],
        rows: [
          [
            'Rydberg constant',
            '<i>R</i><sub>∞</sub> = <i>m</i><sub>e</sub><i>e</i><sup>4</sup>/(8ε<sub>0</sub><sup>2</sup><i>h</i><sup>3</sup><i>c</i>)',
            '<i>R</i> = <i>R</i><sub>∞</sub><i>M</i><sub>N</sub>/(<i>m</i><sub>e</sub> + <i>M</i><sub>N</sub>)',
          ],
          [
            'Bohr radius',
            '<i>a</i><sub>0</sub> = ε<sub>0</sub><i>h</i><sup>2</sup>/(π<i>m</i><sub>e</sub><i>e</i><sup>2</sup>)',
            '<i>a</i>′<sub>0</sub> = <i>a</i><sub>0</sub>(<i>m</i><sub>e</sub> + <i>M</i><sub>N</sub>)/<i>M</i><sub>N</sub>',
          ],
          [
            'Ground-state energy (ionisation energy = −<i>E</i><sub>1</sub>)',
            '<i>E</i><sub>1</sub> = −13.6 eV',
            '<i>E</i>′<sub>1</sub> = <i>E</i><sub>1</sub><i>M</i><sub>N</sub>/(<i>m</i><sub>e</sub> + <i>M</i><sub>N</sub>)',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Key result.</b> Since <i>R</i> ∝ <i>μ</i>:<br>Δ<i>λ</i>/<i>λ</i> ≈ (<i>μ</i><sub>heavy</sub> − <i>μ</i><sub>light</sub>)/<i>μ</i><sub>light</sub> ≈ <i>m</i><sub>e</sub>/<i>M</i><sub>light</sub> − <i>m</i><sub>e</sub>/<i>M</i><sub>heavy</sub> ≲ <i>m</i><sub>e</sub>/<i>M</i><sub>light</sub> ≲ 5 × 10<sup>−4</sup> (largest for hydrogen),<br>where Δ<i>λ</i> is the difference between the wavelengths of the same line in the two isotopes (the lighter nucleus gives the longer wavelength).',
      },
      {
        t: 'p',
        html: 'For hydrogen-deuterium: <i>λ</i><sub>H</sub>/<i>λ</i><sub>D</sub> ≈ 1.00027. This fractional shift was used to confirm the existence of deuterium.',
      },
      {
        t: 'p',
        html: '<b>Bohr’s domain of validity.</b> The model requires:<br>1. One electron only (hydrogenic: H, He<sup>+</sup>, Li<sup>2+</sup>, …).<br>2. Circular orbits (no fine structure, no spin).<br>3. Non-relativistic speeds (<i>v</i> ≪ <i>c</i>; for H ground state <i>v</i><sub>1</sub> = <i>c</i>/137, so this holds).<br>4. No external fields.',
      },
      {
        t: 'p',
        html: 'For multi-electron atoms (He, Na, …), electron-electron repulsion destroys the simple Coulomb potential, and the energy depends on more than just <i>n</i>. Bohr’s −13.6<i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> formula does not apply.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Reduced-Mass Correction for Deuterium',
        q: 'The Balmer H<sub>α</sub> line (<i>n</i><sub>i</sub> = 3 → <i>n</i><sub>f</sub> = 2) has wavelength <i>λ</i><sub>H</sub> = 656.3 nm in ordinary hydrogen. Find the wavelength of the corresponding line in deuterium (nuclear mass <i>M</i><sub>d</sub> ≈ 2<i>M</i><sub>p</sub>, where <i>M</i><sub>p</sub> = 1836<i>m</i><sub>e</sub>).',
        steps: [
          '<b>Step 1 — Write the Rydberg ratio.</b> For a given transition in hydrogenic species, <i>λ</i> ∝ 1/<i>R</i> ∝ 1/<i>μ</i>.<br><i>λ</i><sub>D</sub>/<i>λ</i><sub>H</sub> = <i>μ</i><sub>H</sub>/<i>μ</i><sub>D</sub>.',
          '<b>Step 2 — Compute both reduced masses.</b> For hydrogen (<i>M</i><sub>p</sub> = 1836<i>m</i><sub>e</sub>):<br><i>μ</i><sub>H</sub> = (<i>m</i><sub>e</sub> · 1836<i>m</i><sub>e</sub>)/(<i>m</i><sub>e</sub> + 1836<i>m</i><sub>e</sub>) = (1836/1837)<i>m</i><sub>e</sub>.<br>For deuterium (<i>M</i><sub>d</sub> = 2 × 1836<i>m</i><sub>e</sub> = 3672<i>m</i><sub>e</sub>):<br><i>μ</i><sub>D</sub> = (<i>m</i><sub>e</sub> · 3672<i>m</i><sub>e</sub>)/(<i>m</i><sub>e</sub> + 3672<i>m</i><sub>e</sub>) = (3672/3673)<i>m</i><sub>e</sub>.',
          '<b>Step 3 — Form the ratio.</b><br><i>μ</i><sub>H</sub>/<i>μ</i><sub>D</sub> = (1836/1837)/(3672/3673) = (1836 × 3673)/(1837 × 3672).<br>Calculate numerator and denominator:<br>1836 × 3673 = 6,743,628,<br>1837 × 3672 = 6,745,464.<br><i>μ</i><sub>H</sub>/<i>μ</i><sub>D</sub> = 6,743,628/6,745,464 ≈ 0.999728.',
          '<b>Step 4 — Find <i>λ</i><sub>D</sub>.</b><br><i>λ</i><sub>D</sub> = <i>λ</i><sub>H</sub> × 0.999728 = 656.3 × 0.999728',
          '<b>Check.</b> The shift is Δ<i>λ</i> ≈ 0.18 nm, or about 2.7 × 10<sup>−4</sup> relative to <i>λ</i>. This is measurable with a spectrometer and was among the early experimental proofs of isotope shift. The fractional shift Δ<i>λ</i>/<i>λ</i> ≈ <i>m</i><sub>e</sub>/<i>M</i><sub>p</sub> − <i>m</i><sub>e</sub>/<i>M</i><sub>d</sub> = 1/1836 − 1/3672 = 1/3672 ≈ 2.7 × 10<sup>−4</sup>. Correct.',
          '<b>Units check.</b> All masses in the ratio cancel the unit (kg); the ratio is dimensionless. <i>λ</i> stays in nm. Correct.',
        ],
        ans: '<i>λ</i><sub>D</sub> ≈ 656.12 nm.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Why Bohr Fails for Helium',
        q: 'The helium atom has two electrons. Estimate the ionisation energy of He using Bohr’s formula, and compare with the experimental value of 24.6 eV. Comment on the discrepancy.',
        steps: [
          '<b>Bohr estimate (hydrogenic, <i>Z</i> = 2, one electron removed):</b> The second ionisation energy (removing the last electron from He<sup>+</sup>) is:<br><i>E</i><sub>Bohr</sub> = 13.6 × 2<sup>2</sup> = 54.4 eV.',
          'But the first ionisation energy (removing one electron from neutral He) is what is measured as 24.6 eV.',
          '<b>Why Bohr is wrong here:</b> Bohr assumes a single electron moving in the Coulomb field of a bare nucleus. In neutral helium:<br>• The two electrons repel each other.<br>• Each electron feels not just the nucleus (charge +2<i>e</i>) but also the screening effect of the other electron.<br>• The effective nuclear charge felt by one electron lies between +<i>e</i> and +2<i>e</i>: the other electron screens only part of the nuclear charge (<i>Z</i><sub>eff</sub> ≈ 1.7 for the two 1s electrons).<br>• The true potential is not <i>U</i>(<i>r</i>) ∝ −<i>Z</i>/<i>r</i> but a more complicated two-electron function.',
          '<b>Check.</b> The ratio 24.6/54.4 ≈ 0.45: with the second electron present (repelling and screening), each electron is bound only about half as strongly as a lone electron around the bare nucleus. This is the classic boundary of Bohr’s domain.',
        ],
        ans: 'The measured 24.6 eV is less than half the 54.4 eV that Bohr’s formula gives for a single electron bound to a bare He<sup>2+</sup> nucleus. Bohr cannot be patched by a small correction—it requires full quantum mechanics (the Schrödinger equation for two electrons) to get the answer right.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A muonic hydrogen atom consists of a negative muon (<i>μ</i><sup>−</sup>) of mass <i>m</i><sub>μ</sub> = 207<i>m</i><sub>e</sub> bound to a proton. Find its ground-state radius and ionisation energy. Compare with ordinary hydrogen.',
            a: 'The muon orbits a proton of finite mass, so use the reduced mass: <i>μ</i> = ((207 × 1836)/(207 + 1836))<i>m</i><sub>e</sub> ≈ 186 <i>m</i><sub>e</sub>. Then <i>r</i><sub>1</sub> = <i>a</i><sub>0</sub><i>m</i><sub>e</sub>/<i>μ</i> = 0.529/186 ≈ 2.84 × 10<sup>−3</sup> Å = 2.84 × 10<sup>−13</sup> m and <i>E</i><sub>1</sub> = 13.6 × 186 ≈ 2.53 keV (ionisation energy). The orbit is about 186 times smaller and the binding about 186 times stronger than in hydrogen. (Treating the proton as infinitely heavy would give <i>a</i><sub>0</sub>/207 = 2.56 × 10<sup>−13</sup> m and 2.82 keV, about 10% off.)',
          },
          {
            q: 'The energy needed to remove the electron from singly ionised helium (He<sup>+</sup>) is 54.4 eV. Using Bohr’s formula, what does this tell you about <i>Z</i> and the nuclear charge? (It should confirm <i>Z</i> = 2.)',
            a: 'For He<sup>+</sup>, <i>E</i><sub>1</sub> = −13.6<i>Z</i><sup>2</sup>/1<sup>2</sup> = −54.4 eV, so <i>Z</i><sup>2</sup> = 4 ⇒ <i>Z</i> = 2. Confirmed.',
          },
          {
            q: 'Calculate the percentage change in the Rydberg constant when going from hydrogen (<i>M</i><sub>H</sub> = 1836<i>m</i><sub>e</sub>) to tritium (<i>M</i><sub>T</sub> ≈ 3 × 1836<i>m</i><sub>e</sub>).',
            a: '<i>R</i> ∝ <i>M</i><sub>N</sub>/(<i>m</i><sub>e</sub> + <i>M</i><sub>N</sub>). For H: <i>R</i><sub>H</sub> = <i>R</i><sub>∞</sub> × 1836/1837. For T (<i>M</i><sub>T</sub> = 3 × 1836 <i>m</i><sub>e</sub> = 5508 <i>m</i><sub>e</sub>): <i>R</i><sub>T</sub> = <i>R</i><sub>∞</sub> × 5508/5509. Ratio <i>R</i><sub>H</sub>/<i>R</i><sub>T</sub> = (1836/1837) × (5509/5508) ≈ 0.99964. So <i>R</i> increases by about 0.036% going from H to T.',
          },
          {
            q: '[JEE Advanced] In a hydrogen-like ion, the electron makes a transition from the <i>n</i> = 3 to <i>n</i> = 1 level. If the wavelength of the emitted photon is <i>λ</i>, show that the reduced-mass correction increases <i>λ</i> by a factor of (<i>m</i><sub>e</sub> + <i>M</i><sub>N</sub>)/<i>M</i><sub>N</sub>.',
            a: 'With reduced mass, <i>λ</i> = <i>hc</i>/Δ<i>E</i> where Δ<i>E</i> ∝ <i>μ</i>. So <i>λ</i> ∝ 1/<i>μ</i>. For finite nucleus: <i>μ</i> = <i>m</i><sub>e</sub><i>M</i><sub>N</sub>/(<i>m</i><sub>e</sub> + <i>M</i><sub>N</sub>) = <i>m</i><sub>e</sub>/(1 + <i>m</i><sub>e</sub>/<i>M</i><sub>N</sub>). For infinite: <i>μ</i> = <i>m</i><sub>e</sub>. The ratio <i>λ</i><sub>finite</sub>/<i>λ</i><sub>infinite</sub> = (<i>m</i><sub>e</sub> + <i>M</i><sub>N</sub>)/<i>M</i><sub>N</sub>. QED.',
          },
          {
            q: 'Why does Bohr’s model predict the wrong energy for the 1s<sup>2</sup> configuration of helium but the correct energy for He<sup>+</sup>? Explain in one sentence.',
            a: 'He<sup>+</sup> has one electron and a bare nucleus—exactly Bohr’s assumption. Neutral He has two electrons; electron-electron repulsion is a new force Bohr never included, so his single-electron Coulomb potential is wrong.',
          },
        ],
      },
    ],
  },
];
