import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 12, Topic 02: pp. 772–782 of the Class 12 Physics Master Reference,
 * word for word: the book's "Subtopic 02a — Bohr’s Model and Energy Levels"
 * (the book numbers its sub-topics 01, 02a, 02b; the app numbers them 01 to
 * 03), split at its Sections 1 to 8. The text runs pp. 772–779; Figures 12.5
 * (caption p. 779, after the cheat sheet; drawn p. 780), 12.6 and 12.7
 * (captions p. 781, drawn p. 782) follow the cheat sheet in the book, which
 * never refers to them; on the expert review each is set beside the text it
 * illustrates (12.7 in Concept intuition, 12.5 after the energy formula, 12.6
 * after derivation Step 1), redrawn in lib/diagrams/physics-12-12.ts. The book's
 * cross-references are rewritten to the app's numbering ("02b" → "Topic 03",
 * "Sub-01" → "Topic 01", "Worked Example 4" → "worked example 4").
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 02 · pp. 772–782 ─────────────────────────
  {
    n: '02',
    title: 'Bohr’s Model and Energy Levels',
    kalam: 'Bohr’s masterstroke was to quantise the angular momentum.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The highest-yield topic of the chapter. CBSE Boards reliably ask the three postulates or the derivation of radius/energy (3–5 marks). NEET asks 1–2 MCQs every year on the <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> and <i>n</i><sup>2</sup>/<i>Z</i> scalings. JEE Main leans on hydrogenic-ion numericals (radius, speed, energy, period); JEE Advanced combines Bohr with de Broglie, reduced mass, or muonic/hydrogen-like exotic atoms.',
      },
      {
        t: 'p',
        html: 'By 1912, physics had a beautiful nuclear atom courtesy of Rutherford — and a fatal problem with it. A classical electron orbiting the nucleus is an accelerating charge, and accelerating charges radiate energy. So the electron should bleed energy continuously, spiral inward, and crash into the nucleus in about a hundred-billionth of a second (∼ 10<sup>−11</sup> s). Yet atoms are stubbornly stable, and when they do emit light, they emit only a few sharp, specific colours — not the smooth rainbow a spiralling electron would produce. The planetary atom was elegant and completely wrong about how atoms behave.',
      },
      {
        t: 'p',
        html: 'Niels Bohr, a young Dane who had worked briefly in Rutherford’s lab, made a bold move in 1913: he decided that the rules of classical physics simply do not apply inside the atom, and he wrote down new rules by hand.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine the ramp of a multi-storey car park versus the staircase of that same building. On the ramp you can stop your scooter at any height — a continuous range. On the staircase you can only stand on a step — height 1, height 2, height 3, never half a step. Classical physics treated the electron like the ramp: any orbit, any energy allowed. Bohr declared the atom is a staircase: the electron may occupy only certain special orbits with certain fixed energies, and nothing in between.',
      },
      {
        t: 'p',
        html: 'Which orbits are “allowed”? Bohr’s masterstroke was to quantise the <b>angular momentum</b>. He postulated that an electron can only sit in an orbit where its angular momentum <i>mvr</i> is a whole-number multiple of <i>h</i>/(2π):<br><i>mvr</i> = <i>nh</i>/(2π),   <i>n</i> = 1, 2, 3, …',
      },
      {
        t: 'p',
        html: 'That integer <i>n</i> — the <b>principal quantum number</b> — is the “step number” on the staircase. It is the single knob that fixes everything: the size of the orbit, the speed of the electron, and the energy of the atom.',
      },
      {
        t: 'p',
        html: 'And crucially, Bohr said an electron sitting in one of these <b>stationary states does not radiate</b>, no matter that classical theory insists it should. Energy is only emitted or absorbed when the electron jumps between steps — and the energy of the emitted photon equals the energy gap between the two steps, <i>hν</i> = <i>E</i><sub>i</sub> − <i>E</i><sub>f</sub>. This single idea is what later explains the sharp spectral lines (the subject of Topic 03).',
      },
      {
        t: 'p',
        html: 'There is a deeper reason behind the quantisation, which de Broglie supplied a decade later: the electron behaves like a wave, and only orbits whose circumference fits a whole number of electron wavelengths survive as steady standing waves — exactly like the fixed notes a tabla or a guitar string can sound. A non-fitting orbit would interfere with itself and cancel out. Set 2π<i>r</i> = <i>nλ</i> with <i>λ</i> = <i>h</i>/(<i>mv</i>), and you recover Bohr’s condition <i>mvr</i> = <i>nh</i>/(2π) for free. The staircase is really a set of resonant standing waves.',
      },
      { t: 'fig', id: 'p12-12-fig-12.7' },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions</b> (where Bohr’s model works — and where it breaks):<br>• It applies <b>only to hydrogenic (one-electron) systems</b>: H, He<sup>+</sup>, Li<sup>2+</sup>, Be<sup>3+</sup>, and the like. It fails even for neutral helium (two electrons), because it ignores electron–electron repulsion.<br>• It assumes a <b>circular orbit</b> and a <b>point, infinitely heavy nucleus</b>. Both are idealisations; finite nuclear mass is handled by a small reduced-mass correction (worked example 4; Additional topic A).<br>• It is <b>semiclassical</b> — it grafts a quantum rule onto classical orbits. It cannot explain the relative intensities of spectral lines, fine structure (line splitting), or the Zeeman effect, all of which need full quantum mechanics.<br>• It quantises only one number <i>n</i>. Real atoms need four quantum numbers (<i>n</i>, <i>l</i>, <i>m</i><sub><i>l</i></sub>, <i>m</i><sub><i>s</i></sub>); for hydrogen’s pure Coulomb potential the energy happens to depend only on <i>n</i>, which is why Bohr got the energies right by luck of the potential.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: 'For a <b>hydrogenic atom</b> (nucleus charge +<i>Ze</i>, single electron, mass <i>m</i>):' },
      {
        t: 'formula',
        kicker: 'Quantisation of angular momentum (Bohr’s 2nd postulate)',
        main: '<i>L</i> = <i>mv</i><sub><i>n</i></sub><i>r</i><sub><i>n</i></sub> = <i>nh</i>/(2π)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Radius of the <i>n</i>-th orbit',
        main: '<i>r</i><sub><i>n</i></sub> = ε<sub>0</sub><i>n</i><sup>2</sup><i>h</i><sup>2</sup>/(π<i>mZe</i><sup>2</sup>) = <i>a</i><sub>0</sub><i>n</i><sup>2</sup>/<i>Z</i><br><i>a</i><sub>0</sub> = ε<sub>0</sub><i>h</i><sup>2</sup>/(π<i>me</i><sup>2</sup>) = 0.529 Å<br>Scaling: <i>r</i><sub><i>n</i></sub> ∝ <i>n</i><sup>2</sup>/<i>Z</i>',
        legend: ['<i>a</i><sub>0</sub> = Bohr radius (radius of H ground orbit)'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Orbital speed',
        main: '<i>v</i><sub><i>n</i></sub> = <i>Ze</i><sup>2</sup>/(2ε<sub>0</sub><i>nh</i>) = 2.19 × 10<sup>6</sup> (<i>Z</i>/<i>n</i>) m s<sup>−1</sup><br>Scaling: <i>v</i><sub><i>n</i></sub> ∝ <i>Z</i>/<i>n</i>',
        legend: [],
        note: '(For H, <i>n</i> = 1: <i>v</i><sub>1</sub> ≈ <i>c</i>/137.)',
      },
      {
        t: 'formula',
        kicker: 'Total energy of the <i>n</i>-th level',
        main: '<i>E</i><sub><i>n</i></sub> = −<i>me</i><sup>4</sup><i>Z</i><sup>2</sup>/(8ε<sub>0</sub><sup>2</sup><i>h</i><sup>2</sup><i>n</i><sup>2</sup>) = −13.6 <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> eV<br>Scaling: <i>E</i><sub><i>n</i></sub> ∝ <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup>',
        legend: [],
        note: 'The negative sign means the electron is <b>bound</b>.',
      },
      { t: 'fig', id: 'p12-12-fig-12.5' },
      {
        t: 'formula',
        kicker: 'Energy split (virial relations)',
        main: 'KE = −<i>E</i><sub><i>n</i></sub> = +13.6 <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> eV<br>PE = 2<i>E</i><sub><i>n</i></sub> = −2 KE',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Period and frequency of revolution',
        main: '<i>T</i><sub><i>n</i></sub> = 2π<i>r</i><sub><i>n</i></sub>/<i>v</i><sub><i>n</i></sub> ∝ <i>n</i><sup>3</sup>/<i>Z</i><sup>2</sup><br><i>f</i><sub><i>n</i></sub> = 1/<i>T</i><sub><i>n</i></sub> ∝ <i>Z</i><sup>2</sup>/<i>n</i><sup>3</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'de Broglie condition',
        main: '2π<i>r</i><sub><i>n</i></sub> = <i>nλ</i>',
        legend: [],
        note: '(integer number of electron wavelengths per orbit).',
      },
      {
        t: 'p',
        html: '<b>Symbols & SI units:</b> <i>r</i><sub><i>n</i></sub> (m), <i>v</i><sub><i>n</i></sub> (m s<sup>−1</sup>), <i>E</i><sub><i>n</i></sub> (J; quoted in eV, 1 eV = 1.6 × 10<sup>−19</sup> J), <i>n</i>, <i>Z</i> dimensionless, <i>h</i> = 6.63 × 10<sup>−34</sup> J s.',
      },
      {
        t: 'formula',
        kicker: 'Dimensional formula (core quantity — angular momentum)',
        main: '[<i>L</i>] = [M L<sup>2</sup> T<sup>−1</sup>]',
        legend: [],
        note: 'Quick check: <i>h</i> has units J s = [M L<sup>2</sup> T<sup>−2</sup>][T] = [M L<sup>2</sup> T<sup>−1</sup>], matching <i>L</i> — consistent with <i>L</i> = <i>nh</i>/(2π).',
      },

      { t: 'part', title: 'CBSE board derivations / key procedures' },
      { t: 'p', html: '<b>Deriving <i>r</i><sub><i>n</i></sub>, <i>v</i><sub><i>n</i></sub>, and <i>E</i><sub><i>n</i></sub> for a hydrogenic atom</b>' },
      {
        t: 'p',
        html: '<b>Assumptions:</b> One electron (charge −<i>e</i>, mass <i>m</i>) moves in a circular orbit of radius <i>r</i> and speed <i>v</i> around a stationary nucleus of charge +<i>Ze</i>. The Coulomb attraction supplies the centripetal force, and Bohr’s quantisation holds.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Force balance (Coulomb = centripetal):</b><br>(1/(4πε<sub>0</sub>)) (<i>Ze</i>)(<i>e</i>)/<i>r</i><sup>2</sup> = <i>mv</i><sup>2</sup>/<i>r</i> ⇒ <i>mv</i><sup>2</sup> = <i>Ze</i><sup>2</sup>/(4πε<sub>0</sub><i>r</i>)   (i)<br><b>Why:</b> circular motion requires a net inward force, and the only force present is the electrostatic pull.',
      },
      { t: 'fig', id: 'p12-12-fig-12.6' },
      {
        t: 'p',
        html: '<b>Step 2 — Bring in quantisation.</b> From <i>mvr</i> = <i>nh</i>/(2π), write <i>v</i> = <i>nh</i>/(2π<i>mr</i>) and substitute into (i):<br><i>m</i>(<i>nh</i>/(2π<i>mr</i>))<sup>2</sup> = <i>Ze</i><sup>2</sup>/(4πε<sub>0</sub><i>r</i>) ⇒ <i>n</i><sup>2</sup><i>h</i><sup>2</sup>/(4π<sup>2</sup><i>mr</i><sup>2</sup>) = <i>Ze</i><sup>2</sup>/(4πε<sub>0</sub><i>r</i>)',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Solve for the radius.</b><br><i>r</i><sub><i>n</i></sub> = ε<sub>0</sub><i>n</i><sup>2</sup><i>h</i><sup>2</sup>/(π<i>mZe</i><sup>2</sup>) = <i>a</i><sub>0</sub><i>n</i><sup>2</sup>/<i>Z</i>,   <i>a</i><sub>0</sub> = 0.529 Å<br><b>Why it matters:</b> the orbit grows as <i>n</i><sup>2</sup> (so the <i>n</i> = 2 orbit is four times the <i>n</i> = 1 orbit) and shrinks with <i>Z</i> (a more highly charged nucleus pulls the electron in tighter).',
      },
      {
        t: 'p',
        html: '<b>Step 4 — Orbital speed.</b> Put <i>r</i><sub><i>n</i></sub> back into <i>v</i> = <i>nh</i>/(2π<i>mr</i><sub><i>n</i></sub>):<br><i>v</i><sub><i>n</i></sub> = <i>Ze</i><sup>2</sup>/(2ε<sub>0</sub><i>nh</i>) = 2.19 × 10<sup>6</sup> (<i>Z</i>/<i>n</i>) m s<sup>−1</sup>',
      },
      {
        t: 'p',
        html: '<b>Step 5 — Total energy.</b> Kinetic energy from (i): KE = ½<i>mv</i><sup>2</sup> = <i>Ze</i><sup>2</sup>/(8πε<sub>0</sub><i>r</i>). Potential energy: PE = −(1/(4πε<sub>0</sub>))(<i>Ze</i><sup>2</sup>/<i>r</i>). Adding,<br><i>E</i> = KE + PE = <i>Ze</i><sup>2</sup>/(8πε<sub>0</sub><i>r</i>) − <i>Ze</i><sup>2</sup>/(4πε<sub>0</sub><i>r</i>) = −<i>Ze</i><sup>2</sup>/(8πε<sub>0</sub><i>r</i>)<br>Substituting <i>r</i><sub><i>n</i></sub>:<br><i>E</i><sub><i>n</i></sub> = −<i>me</i><sup>4</sup><i>Z</i><sup>2</sup>/(8ε<sub>0</sub><sup>2</sup><i>h</i><sup>2</sup><i>n</i><sup>2</sup>) = −13.6 <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> eV<br><b>Why the sign:</b> total energy is negative because the electron is bound. Note the clean result <i>E</i> = −KE — pulling the electron free (to <i>E</i> = 0) costs exactly its kinetic energy. For H ground state, that is +13.6 eV, the <b>ionisation energy</b>.',
      },
      { t: 'p', html: '<b>de Broglie justification of the postulate</b>' },
      {
        t: 'p',
        html: 'Treat the electron as a standing wave around the orbit. Stability requires a whole number of wavelengths to fit the circumference:<br>2π<i>r</i><sub><i>n</i></sub> = <i>nλ</i> = <i>nh</i>/(<i>mv</i>) ⇒ <i>mvr</i><sub><i>n</i></sub> = <i>nh</i>/(2π)<br>which is exactly Bohr’s quantisation rule — now explained rather than merely assumed.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'For a hydrogen atom, find (a) the radius and (b) the energy of the <i>n</i> = 3 orbit.',
        steps: [
          '<b>(a)</b> <i>r</i><sub><i>n</i></sub> = <i>a</i><sub>0</sub><i>n</i><sup>2</sup>/<i>Z</i>, with <i>a</i><sub>0</sub> = 0.529 Å, <i>Z</i> = 1, <i>n</i> = 3:<br><i>r</i><sub>3</sub> = 0.529 × 9/1 = 4.76 Å = 4.76 × 10<sup>−10</sup> m',
          '<b>(b)</b> <i>E</i><sub><i>n</i></sub> = −13.6 <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> = −13.6/9',
        ],
        ans: '<i>r</i><sub>3</sub> ≈ 4.76 Å, <i>E</i><sub>3</sub> ≈ −1.51 eV.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which of the following has the <b>same</b> electron energy as a hydrogen atom in its ground state (−13.6 eV)? (i) He<sup>+</sup> in <i>n</i> = 2, (ii) Li<sup>2+</sup> in <i>n</i> = 3, (iii) Be<sup>3+</sup> in <i>n</i> = 2.',
        steps: [
          '<b>Trap:</b> Students compute one and stop, or forget the <i>Z</i><sup>2</sup>. The shortcut is to notice <i>E</i><sub><i>n</i></sub> ∝ <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup>, so the energy equals −13.6 eV whenever <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> = 1, i.e. <b>whenever <i>Z</i> = <i>n</i></b>.',
          '• (i) He<sup>+</sup>: <i>Z</i> = 2, <i>n</i> = 2 ⇒ <i>Z</i> = <i>n</i> ✓ (<i>E</i> = −13.6 · 4/4 = −13.6 eV)<br>• (ii) Li<sup>2+</sup>: <i>Z</i> = 3, <i>n</i> = 3 ⇒ <i>Z</i> = <i>n</i> ✓ (<i>E</i> = −13.6 · 9/9 = −13.6 eV)<br>• (iii) Be<sup>3+</sup>: <i>Z</i> = 4, <i>n</i> = 2 ⇒ <i>Z</i> ≠ <i>n</i> ✗ (<i>E</i> = −13.6 · 16/4 = −54.4 eV)',
          'The “<i>Z</i> = <i>n</i> ⇒ <i>E</i> = −13.6 eV” trick beats brute-force calculation and catches the “only one answer” trap.',
        ],
        ans: 'Both (i) and (ii).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Find the de Broglie wavelength of the electron in the <i>n</i> = 2 orbit of hydrogen, and verify it satisfies Bohr’s standing-wave condition.',
        steps: [
          '<b>Step 1 — Orbital speed:</b> <i>v</i><sub>2</sub> = 2.19 × 10<sup>6</sup> (<i>Z</i>/<i>n</i>) = 2.19 × 10<sup>6</sup> × 1/2 = 1.095 × 10<sup>6</sup> m s<sup>−1</sup>.',
          '<b>Step 2 — de Broglie wavelength:</b><br><i>λ</i> = <i>h</i>/(<i>mv</i><sub>2</sub>) = (6.63 × 10<sup>−34</sup>)/((9.1 × 10<sup>−31</sup>)(1.095 × 10<sup>6</sup>)) ≈ 6.65 × 10<sup>−10</sup> m = 6.65 Å',
          '<b>Step 3 — Check 2π<i>r</i><sub>2</sub> = <i>nλ</i>:</b> <i>r</i><sub>2</sub> = 0.529 × 4/1 = 2.12 Å, so 2π<i>r</i><sub>2</sub> = 2π(2.12) = 13.3 Å = 2 × 6.65 Å = 2<i>λ</i>. ✓',
        ],
        ans: '<b><i>λ</i> ≈ 6.65 Å, and exactly two wavelengths fit the <i>n</i> = 2 orbit</b> — the wave picture and the quantisation rule agree.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A negative muon (<i>m</i><sub>μ</sub> = 207 <i>m</i><sub>e</sub>, charge −<i>e</i>) is captured by a proton to form “muonic hydrogen”. (a) Estimate the ground-state radius and energy treating the proton as infinitely heavy. (b) Refine the energy using the reduced mass, given <i>m</i><sub>p</sub> = 1836 <i>m</i><sub>e</sub>. Comment on whether the point-nucleus assumption is safe.',
        steps: [
          '<b>Key idea:</b> All Bohr formulas were derived with the electron mass <i>m</i>. Replace <i>m</i> by the orbiting particle’s mass; since <i>r</i> ∝ 1/<i>m</i> and <i>E</i> ∝ <i>m</i>:',
          '<b>(a) Infinite-mass estimate (<i>Z</i> = 1, <i>n</i> = 1):</b><br><i>r</i><sub>1</sub><sup>(μ)</sup> = <i>a</i><sub>0</sub>/207 = (0.529 × 10<sup>−10</sup>)/207 ≈ 2.56 × 10<sup>−13</sup> m<br><i>E</i><sub>1</sub><sup>(μ)</sup> = −13.6 × 207 ≈ −2.82 × 10<sup>3</sup> eV = −2.82 keV',
          '<b>(b) Reduced-mass correction:</b><br><i>μ</i> = <i>m</i><sub>μ</sub><i>m</i><sub>p</sub>/(<i>m</i><sub>μ</sub> + <i>m</i><sub>p</sub>) = ((207 × 1836)/(207 + 1836)) <i>m</i><sub>e</sub> = (380052/2043) <i>m</i><sub>e</sub> ≈ 186 <i>m</i><sub>e</sub>',
          'Since <i>E</i> ∝ <i>μ</i>:<br><i>E</i><sub>1</sub> = −13.6 × 186 ≈ −2.53 × 10<sup>3</sup> eV = −2.53 keV<br>a ∼ 10% reduction from the naive estimate — the muon is heavy enough that the finite proton mass matters noticeably (far more than for ordinary hydrogen, where the correction is ∼ 0.05%).',
          '<b>Comment:</b> <i>r</i> ≈ 2.56 × 10<sup>−13</sup> m ≈ 256 fm, still vastly larger than the proton radius (∼ 1 fm), so the point-nucleus assumption holds comfortably here. (For muonic heavy atoms the muon orbit can dip inside the nucleus, and Bohr’s picture breaks — a nice link back to Topic 01’s nuclear-size theme.)',
        ],
        ans: '(a) <i>r</i> ≈ 2.6 × 10<sup>−13</sup> m, <i>E</i> ≈ −2.82 keV; (b) <i>E</i> ≈ −2.53 keV with reduced mass.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Find the radius and energy of the <i>n</i> = 2 orbit of a hydrogen atom.',
            a: '<i>r</i><sub>2</sub> = 2.12 Å, <i>E</i><sub>2</sub> = −3.4 eV',
          },
          {
            q: '[NEET] Find the ratio of the orbital speeds of the electron in the <i>n</i> = 1 and <i>n</i> = 3 orbits of hydrogen.',
            a: '<i>v</i><sub>1</sub> ∶ <i>v</i><sub>3</sub> = 3 ∶ 1',
          },
          {
            q: '[JEE Main] How much energy is required to remove the electron from the <i>n</i> = 2 state of a He<sup>+</sup> ion?',
            a: '13.6 eV',
          },
          {
            q: '[JEE Main] By what factor does the period of revolution change when a hydrogen electron moves from the <i>n</i> = 1 to the <i>n</i> = 2 orbit?',
            a: 'factor of 8 (<i>T</i> ∝ <i>n</i><sup>3</sup>)',
          },
          {
            q: '[JEE Advanced] A hydrogen-like ion requires 217.6 eV to be ionised from its ground state. An electron in this ion drops from <i>n</i> = 4 to <i>n</i> = 2. Identify <i>Z</i> and find the energy of the emitted photon.',
            a: '<i>Z</i> = 4 (Be<sup>3+</sup>), photon energy = 40.8 eV',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Bohr’s second postulate directly quantises the electron’s:',
        opts: [
          {
            label: 'energy',
            nudge: '<b>(A)</b>, <b>(C)</b>, <b>(D)</b> are all quantised too, but as consequences derived from (B). Picking them confuses a derived result with the foundational postulate — a favourite “understand vs memorise” discriminator.',
          },
          { label: 'angular momentum', nudge: null },
          {
            label: 'speed',
            nudge: '<b>(A)</b>, <b>(C)</b>, <b>(D)</b> are all quantised too, but as consequences derived from (B). Picking them confuses a derived result with the foundational postulate — a favourite “understand vs memorise” discriminator.',
          },
          {
            label: 'orbital radius',
            nudge: '<b>(A)</b>, <b>(C)</b>, <b>(D)</b> are all quantised too, but as consequences derived from (B). Picking them confuses a derived result with the foundational postulate — a favourite “understand vs memorise” discriminator.',
          },
        ],
        correct: 1,
        solution: 'The postulate states <i>mvr</i> = <i>nh</i>/(2π) — angular momentum is what is assumed discrete.',
      },
      {
        t: 'mcq',
        q: 'The energy of the <i>n</i> = 2 state of a He<sup>+</sup> ion is:',
        opts: [
          { label: '−3.4 eV', nudge: '<b>(A)</b> forgets the <i>Z</i><sup>2</sup> (treats it as hydrogen’s <i>n</i> = 2).' },
          { label: '−13.6 eV', nudge: null },
          { label: '−54.4 eV', nudge: '<b>(C)</b> forgets the /<i>n</i><sup>2</sup> (gives He<sup>+</sup> ground state).' },
          {
            label: '−6.8 eV',
            nudge: '<b>(D)</b> uses <i>Z</i>/<i>n</i><sup>2</sup> instead of <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> — a half-applied formula.',
          },
        ],
        correct: 1,
        solution: '<i>E</i> = −13.6 <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> = −13.6 (2<sup>2</sup>/2<sup>2</sup>) = −13.6 eV.',
      },
      {
        t: 'mcq',
        q: 'Among H, He<sup>+</sup>, and Li<sup>2+</sup>, the smallest first-orbit (<i>n</i> = 1) radius belongs to:',
        opts: [
          { label: 'H', nudge: '<b>(A)</b> assumes “bigger element, bigger orbit” — backwards.' },
          {
            label: 'He<sup>+</sup>',
            nudge: '<b>(B)</b> He<sup>+</sup> (<i>Z</i> = 2) does have a smaller first orbit than H, but not the smallest: Li<sup>2+</sup> (<i>Z</i> = 3) is smaller still.',
          },
          { label: 'Li<sup>2+</sup>', nudge: null },
          { label: 'all are equal', nudge: '<b>(D)</b> ignores the <i>Z</i>-dependence entirely.' },
        ],
        correct: 2,
        solution: 'At fixed <i>n</i>, <i>r</i> ∝ 1/<i>Z</i>; the largest <i>Z</i> (Li<sup>2+</sup>, <i>Z</i> = 3) gives the smallest orbit.',
      },
      {
        t: 'mcq',
        q: 'As <i>n</i> increases, the spacing between adjacent hydrogen energy levels:',
        opts: [
          { label: 'increases', nudge: '<b>(A)</b> is a common intuition error (more energy ⇒ bigger gaps).' },
          { label: 'decreases', nudge: null },
          { label: 'stays constant', nudge: '<b>(C)</b> confuses the atom with an equally-spaced oscillator.' },
          { label: 'is always zero', nudge: '<b>(D)</b> is true only in the <i>n</i> → ∞ limit, not generally.' },
        ],
        correct: 1,
        solution: '<i>E</i><sub><i>n</i></sub> = −13.6/<i>n</i><sup>2</sup>, so levels crowd together and converge to 0 as <i>n</i> → ∞; gaps shrink.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Dropping the <i>Z</i> for ions.</b> The formulas carry <i>Z</i><sup>2</sup> (energy), 1/<i>Z</i> (radius), <i>Z</i> (speed). Treating He<sup>+</sup> or Li<sup>2+</sup> like hydrogen is the single most common error — always check whether the species is hydrogen or a hydrogenic ion.',
          '<b>Sign and split confusion.</b> <i>E</i><sub><i>n</i></sub> is <b>negative</b>; KE = +|<i>E</i><sub><i>n</i></sub>| and PE = 2<i>E</i><sub><i>n</i></sub> = −2 KE. Mixing these up flips signs in transition and ionisation problems.',
          '<b>Postulate vs consequence.</b> Angular momentum is postulated quantised; energy and radius quantisation follow. Exam MCQs test exactly this distinction.',
          '<b>Over-extending Bohr.</b> It is valid only for one-electron (hydrogenic) systems. Applying it to neutral He or Na earns zero marks.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Memorise three scalings and three anchors, then everything is a ratio: scalings <i>r</i> ∝ <i>n</i><sup>2</sup>/<i>Z</i>, <i>v</i> ∝ <i>Z</i>/<i>n</i>, <i>E</i> ∝ <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup>; anchors <i>a</i><sub>0</sub> = 0.529 Å, <i>v</i><sub>1</sub> = 2.19 × 10<sup>6</sup> m s<sup>−1</sup>, <i>E</i><sub>1</sub> = −13.6 eV. For comparison questions, never compute fully — divide. Sanity check: any state with <i>Z</i> = <i>n</i> has exactly −13.6 eV.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Three postulates',
            note: '(1) electrons occupy stationary orbits and do <b>not</b> radiate; (2) angular momentum is quantised, <i>mvr</i> = <i>nh</i>/(2π); (3) on a jump, <i>hν</i> = <i>E</i><sub>i</sub> − <i>E</i><sub>f</sub>.',
          },
          {
            f: 'Radius',
            note: '<i>r</i><sub><i>n</i></sub> = <i>a</i><sub>0</sub><i>n</i><sup>2</sup>/<i>Z</i>, <i>a</i><sub>0</sub> = 0.529 Å (<i>r</i> ∝ <i>n</i><sup>2</sup>/<i>Z</i>)',
          },
          {
            f: 'Speed',
            note: '<i>v</i><sub><i>n</i></sub> = 2.19 × 10<sup>6</sup> (<i>Z</i>/<i>n</i>) m s<sup>−1</sup> (<i>v</i> ∝ <i>Z</i>/<i>n</i>)',
          },
          {
            f: 'Energy',
            note: '<i>E</i><sub><i>n</i></sub> = −13.6 <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> eV (<i>E</i> ∝ <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup>)',
          },
          {
            f: 'Splits',
            note: 'KE = −<i>E</i><sub><i>n</i></sub>; PE = 2<i>E</i><sub><i>n</i></sub> = −2 KE; period <i>T</i> ∝ <i>n</i><sup>3</sup>/<i>Z</i><sup>2</sup>.',
          },
          { f: 'de Broglie', note: '2π<i>r</i><sub><i>n</i></sub> = <i>nλ</i> (whole number of wavelengths per orbit).' },
          {
            f: '<b>Valid only for hydrogenic atoms;</b> can’t give intensities, fine structure, or multi-electron atoms.',
            note: '',
          },
        ],
        aids: [
          '“Radius rises, |<i>E</i>| and speed fall with <i>n</i>” (<i>r</i> ↑ as <i>n</i><sup>2</sup>; <i>v</i>, |<i>E</i>| ↓).',
          '“<i>Z</i>-squared sinks the energy” (higher <i>Z</i> = deeper, more negative level).',
          '“<i>Z</i> = <i>n</i> gives −13.6”.',
        ],
      },
    ],
  },
];
