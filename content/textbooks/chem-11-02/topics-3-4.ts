import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Topics 03 and 04: pp. 88–102 of the Class 11 Chemistry Master
 * Reference, word for word: Bohr’s Model & Wave-Particle Duality (pp. 88–95)
 * and Quantum Model, Orbitals & Electron Configurations (pp. 96–102), each
 * split at its Sections 1 to 8. Neither topic prints a drawing: the energy
 * levels, orbital shapes and standing wave are described in words only, and
 * the four quantum numbers are a table. Orbital and subshell labels are set
 * upright (1s, 3d, p_x), as NCERT does; the book sets them in maths italic.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 88–95 ─────────────────────────
  {
    n: '03',
    title: 'Bohr’s Model & Wave-Particle Duality',
    kalam: 'The sharp spectral lines are telling us the electron lives on a staircase of allowed energies, not a ramp.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A heavyweight scoring zone in every exam. CBSE Boards regularly ask the Bohr radius/energy derivation (3–5 marks) and short numericals. NEET asks 1–2 questions yearly on energy levels, spectral series, or de Broglie wavelength. JEE Main treats it as a numerical goldmine (Rydberg ratios, line counting, <i>Z</i>-scaling), and JEE Advanced layers Bohr energy with de Broglie or Heisenberg into multi-step problems. Master the four scaling relations (<i>r</i>, <i>E</i>, <i>v</i>, <i>ν̄</i>) and you can solve most of these in seconds.',
      },
      {
        t: 'p',
        html: 'We arrive here holding two crucial pieces. From Rutherford’s <i>α</i>-scattering we have a tiny, dense nucleus — but his planetary model carries a fatal flaw: a revolving electron is an accelerating charge, and classical physics insists it must continuously radiate energy, spiral inward, and crash into the nucleus in a tiny fraction of a second. Atoms plainly do not collapse. From Planck and Einstein we have the second piece: the realisation that the atomic world does not run on the smooth, continuous rules of everyday physics — it runs on quanta, on discrete steps. Bohr’s genius was to weld these two ideas together.',
      },
      {
        t: 'p',
        html: 'Here is the clue that cracked it open: the <b>hydrogen line spectrum</b>. When you pass electricity through hydrogen gas and split the emitted light with a prism, you do not get a continuous rainbow. You get a handful of sharp, separate coloured lines at very specific wavelengths, with darkness in between.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture the difference between a wheelchair ramp and a staircase. On a ramp you can stop at any height — that is continuous, like classical physics. On a staircase you can only stand on step 1, step 2, step 3 — never halfway between. The sharp spectral lines are telling us the electron lives on a staircase of allowed energies, not a ramp. When an electron drops from a higher step to a lower one, it releases the exact energy difference between those two steps as a single packet of light (a photon). Because only certain steps exist, only certain energy gaps exist, so only certain colours appear. That is the whole secret of the line spectrum.',
      },
      {
        t: 'p',
        html: 'Niels Bohr (1913) turned this picture into a model with a few bold rules. He declared that an electron orbits the nucleus only in certain <b>stationary orbits</b> where, against all classical expectation, it simply does not radiate energy. Each orbit has a fixed radius and a fixed energy. The electron radiates only when it jumps between orbits. To pin down which orbits are allowed, Bohr added a quantisation rule: the electron’s angular momentum can only be a whole-number multiple of <i>h</i>/(2π). That single integer <i>n</i> — the principal quantum number — labels the steps of the staircase.',
      },
      {
        t: 'p',
        html: 'This worked spectacularly for hydrogen. It predicted the exact wavelengths of every spectral line. But Bohr’s model was a brilliant patch, not a final theory, and within a decade two deeper ideas exposed its limits. First, <b>Louis de Broglie</b> (1924) proposed that matter itself has a wave nature — an electron is not just a tiny ball, it has a wavelength. Second, <b>Werner Heisenberg</b> (1927) proved you cannot simultaneously know an electron’s exact position and exact momentum. Together these demolished the very idea of a sharp “orbit” with a definite radius. We will see how Bohr’s own quantisation rule actually falls out of de Broglie’s wave idea — a beautiful sign that he was onto something real, even if his picture was incomplete.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions you must respect:</b><br>• Bohr’s model works only for <b>one-electron (hydrogen-like) species</b>: H, He<sup>+</sup>, Li<sup>2+</sup>, Be<sup>3+</sup>. The moment a second electron appears, electron–electron repulsion breaks it.<br>• It treats the electron as a <b>point particle on a definite circular path</b> — exactly the assumption de Broglie and Heisenberg overturn.<br>• It cannot explain the fine structure of spectral lines, nor their splitting in magnetic (Zeeman) or electric (Stark) fields, nor why atoms form chemical bonds.<br>• The de Broglie wavelength is only significant for very light, fast particles (electrons). For a cricket ball it is unimaginably tiny and completely unobservable — which is why the everyday world looks “classical.”',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Bohr’s quantisation of angular momentum',
        main: '<i>mvr</i> = <i>nh</i>/(2π), <i>n</i> = 1, 2, 3, …',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Radius of the <i>n</i>-th orbit (hydrogen-like, charge +<i>Ze</i>)',
        main: '<i>r</i><sub><i>n</i></sub> = <i>n</i><sup>2</sup><i>h</i><sup>2</sup>ε<sub>0</sub>/(π<i>mZe</i><sup>2</sup>) = 0.529 (<i>n</i><sup>2</sup>/<i>Z</i>) Å = 52.9 (<i>n</i><sup>2</sup>/<i>Z</i>) pm',
        legend: ['<i>a</i><sub>0</sub> = Bohr radius (H ground state), 0.529 Å'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Energy of the <i>n</i>-th orbit',
        main: '<i>E</i><sub><i>n</i></sub> = −<i>mZ</i><sup>2</sup><i>e</i><sup>4</sup>/(8ε<sub>0</sub><sup>2</sup><i>n</i><sup>2</sup><i>h</i><sup>2</sup>) = −13.6 (<i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup>) eV = −2.18 × 10<sup>−18</sup> (<i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup>) J atom<sup>−1</sup> = −1312 (<i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup>) kJ mol<sup>−1</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Velocity in the <i>n</i>-th orbit',
        main: '<i>v</i><sub><i>n</i></sub> = <i>Ze</i><sup>2</sup>/(2ε<sub>0</sub><i>nh</i>) = 2.18 × 10<sup>6</sup> (<i>Z</i>/<i>n</i>) m s<sup>−1</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Rydberg (Balmer–Rydberg) equation for line wave number',
        main: '<i>ν̄</i> = 1/<i>λ</i> = <i>R</i><sub>H</sub><i>Z</i><sup>2</sup>(1/<i>n</i><sub>1</sub><sup>2</sup> − 1/<i>n</i><sub>2</sub><sup>2</sup>), <i>n</i><sub>2</sub> > <i>n</i><sub>1</sub>',
        legend: [
          '<i>R</i><sub>H</sub> = Rydberg constant, 1.097 × 10<sup>7</sup> m<sup>−1</sup> = 109677 cm<sup>−1</sup>',
          '<i>ν̄</i> = wave number, unit m<sup>−1</sup>, dimensional formula [L<sup>−1</sup>]',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Spectral series</b> (<i>n</i><sub>1</sub> fixed, <i>n</i><sub>2</sub> = <i>n</i><sub>1</sub> + 1, <i>n</i><sub>1</sub> + 2, …): Lyman (<i>n</i><sub>1</sub> = 1, UV), Balmer (<i>n</i><sub>1</sub> = 2, visible), Paschen (<i>n</i><sub>1</sub> = 3, IR), Brackett (<i>n</i><sub>1</sub> = 4, IR), Pfund (<i>n</i><sub>1</sub> = 5, IR).',
      },
      {
        t: 'formula',
        kicker: 'Maximum number of emission lines when a sample of atoms de-excites from level <i>n</i> to the ground state',
        main: 'lines = <i>n</i>(<i>n</i> − 1)/2',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'de Broglie wavelength (the bridge between particle and wave)',
        main: '<i>λ</i> = <i>h</i>/<i>p</i> = <i>h</i>/(<i>mv</i>) = <i>h</i>/√(2<i>m</i>(KE)) = <i>h</i>/√(2<i>mqV</i>) (for a charge accelerated through <i>V</i>)',
        legend: ['<i>λ</i> = de Broglie wavelength, SI unit m'],
        note: 'Dimensional check: <i>h</i>/(<i>mv</i>) = [M L<sup>2</sup> T<sup>−1</sup>]/([M][L T<sup>−1</sup>]) = [L] ✓ — a reassuring sanity check that the formula really yields a length.',
      },
      {
        t: 'formula',
        kicker: 'Heisenberg uncertainty principle',
        main: 'Δ<i>x</i> · Δ<i>p</i> ≥ <i>h</i>/(4π) ⟹ Δ<i>x</i> · Δ<i>v</i> ≥ <i>h</i>/(4π<i>m</i>)',
        legend: ['Δ<i>x</i> = uncertainty in position', 'Δ<i>p</i> = uncertainty in momentum'],
        note: null,
      },
      {
        t: 'p',
        html: 'Symbol key: <i>m</i> = electron mass, <i>v</i> = speed, <i>r</i> = orbit radius, <i>Z</i> = atomic number, <i>n</i> = principal quantum number, <i>e</i> = elementary charge, ε<sub>0</sub> = permittivity of free space, <i>h</i> = Planck’s constant, <i>c</i> = speed of light. Useful shortcut: <i>hc</i> = 1240 eV nm.',
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: 'This topic is the derivation hub of the chapter. Take them in sequence; each builds on the last.',
      },
      {
        t: 'p',
        html: '<b>3.1 Radius of the Bohr orbit.</b> Start from the physical picture: the electron is held in its circular orbit because the Coulomb attraction from the nucleus supplies exactly the centripetal force it needs.<br>(1/(4πε<sub>0</sub>))(<i>Ze</i><sup>2</sup>/<i>r</i><sup>2</sup>) [Coulomb pull] = <i>mv</i><sup>2</sup>/<i>r</i> [centripetal need]   (1)',
      },
      {
        t: 'p',
        html: '<b>Why this step:</b> the nucleus is a fixed positive point charge (Rutherford); the only inward force available is electrostatic, so it must do the job of keeping the electron curving. From (1),<br><i>mv</i><sup>2</sup> = (1/(4πε<sub>0</sub>))(<i>Ze</i><sup>2</sup>/<i>r</i>)   (2)<br>Now bring in Bohr’s new rule that classical physics did not have — quantised angular momentum:<br><i>mvr</i> = <i>nh</i>/(2π) ⟹ <i>v</i> = <i>nh</i>/(2π<i>mr</i>)   (3)<br>Substitute (3) into (2) and solve for <i>r</i>:<br><i>r</i><sub><i>n</i></sub> = <i>n</i><sup>2</sup><i>h</i><sup>2</sup>ε<sub>0</sub>/(π<i>mZe</i><sup>2</sup>)<br><b>Reading the result:</b> radius grows as <i>n</i><sup>2</sup> and shrinks as 1/<i>Z</i>. Put <i>n</i> = 1, <i>Z</i> = 1 and you get 0.529 Å — the size of a real hydrogen atom, which is the model’s first triumph.',
      },
      {
        t: 'p',
        html: '<b>3.2 Energy of the orbit.</b> The electron has kinetic energy (it moves) and potential energy (it sits in the nucleus’s attractive field). From (2), the kinetic energy is<br>KE = ½<i>mv</i><sup>2</sup> = (1/(8πε<sub>0</sub>))(<i>Ze</i><sup>2</sup>/<i>r</i>)<br>The potential energy of the electron at distance <i>r</i> from the nucleus is<br>PE = −(1/(4πε<sub>0</sub>))(<i>Ze</i><sup>2</sup>/<i>r</i>)<br><b>Why the negative sign:</b> it takes work to pull the electron away to infinity, so the bound electron sits in an energy well below zero. Adding them,<br><i>E</i><sub><i>n</i></sub> = KE + PE = −(1/(8πε<sub>0</sub>))(<i>Ze</i><sup>2</sup>/<i>r</i>)<br>Notice PE = −2 KE and <i>E</i> = −KE — a relation worth memorising. Substituting <i>r</i><sub><i>n</i></sub> gives<br><i>E</i><sub><i>n</i></sub> = −<i>mZ</i><sup>2</sup><i>e</i><sup>4</sup>/(8ε<sub>0</sub><sup>2</sup><i>n</i><sup>2</sup><i>h</i><sup>2</sup>) = −13.6 (<i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup>) eV<br>The negative, 1/<i>n</i><sup>2</sup>-spaced energy levels are the staircase from Concept intuition.',
      },
      {
        t: 'p',
        html: '<b>3.3 The hydrogen spectrum and the Rydberg equation.</b> When an electron falls from a higher level <i>n</i><sub>2</sub> to a lower level <i>n</i><sub>1</sub>, energy conservation says the emitted photon carries exactly the gap:<br>Δ<i>E</i> = <i>E</i><sub><i>n</i>₂</sub> − <i>E</i><sub><i>n</i>₁</sub> = <i>hν</i> = <i>hc</i>/<i>λ</i><br>Substituting the energy expression for hydrogen (<i>Z</i> = 1):<br><i>hc</i>/<i>λ</i> = 2.18 × 10<sup>−18</sup> (1/<i>n</i><sub>1</sub><sup>2</sup> − 1/<i>n</i><sub>2</sub><sup>2</sup>) J<br>Dividing through by <i>hc</i> yields the experimentally known Rydberg form,<br><i>ν̄</i> = 1/<i>λ</i> = <i>R</i><sub>H</sub>(1/<i>n</i><sub>1</sub><sup>2</sup> − 1/<i>n</i><sub>2</sub><sup>2</sup>), <i>R</i><sub>H</sub> = <i>me</i><sup>4</sup>/(8ε<sub>0</sub><sup>2</sup><i>h</i><sup>3</sup><i>c</i>)<br><b>This is the climax of Bohr’s theory:</b> a constant that was originally just fitted to spectral data (<i>R</i><sub>H</sub>) now emerges from fundamental constants. The different fixed values of <i>n</i><sub>1</sub> generate the named series of Key formulas and definitions.',
      },
      {
        t: 'p',
        html: '<b>3.4 Deriving Bohr’s quantisation from de Broglie’s wave.</b> Here is why de Broglie’s idea is more than a curiosity. Treat the orbiting electron as a standing wave wrapped around the circular orbit — like a guitar string bent into a loop. For the wave to survive (not cancel itself by interference), the circumference must hold a whole number of wavelengths:<br>2π<i>r</i> = <i>nλ</i><br>Substitute the de Broglie wavelength <i>λ</i> = <i>h</i>/(<i>mv</i>):<br>2π<i>r</i> = <i>n</i>(<i>h</i>/(<i>mv</i>)) ⟹ <i>mvr</i> = <i>nh</i>/(2π)<br>That is exactly Bohr’s angular-momentum rule — which Bohr had simply assumed. de Broglie derived it. The integer <i>n</i> is no longer a magic postulate; it is the count of whole electron-waves that fit around the orbit.',
      },
      {
        t: 'p',
        html: '<b>3.5 Why Bohr’s model still fails.</b> Despite its successes, Bohr’s picture breaks down because: (i) it works only for one-electron species — it cannot predict the spectra of helium or any multi-electron atom; (ii) it cannot explain the splitting of lines in magnetic (Zeeman) or electric (Stark) fields; (iii) it cannot explain chemical bonding; and most fundamentally (iv) by assigning the electron a definite orbit (a definite position and velocity at once), it directly <b>violates the Heisenberg uncertainty principle</b> and ignores the electron’s wave nature. These failures are the doorway to the quantum-mechanical model of Topic 04.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Calculate the radius and the energy of the third orbit (<i>n</i> = 3) of the He<sup>+</sup> ion. (Take <i>a</i><sub>0</sub> = 0.529 Å.)',
        steps: [
          '<b>Given:</b> He<sup>+</sup>, so <i>Z</i> = 2; <i>n</i> = 3.',
          '<b>Step 1 — radius.</b><br><i>r</i><sub>3</sub> = 0.529 (<i>n</i><sup>2</sup>/<i>Z</i>) = 0.529 × 9/2',
          '<b>Step 2 — energy.</b><br><i>E</i><sub>3</sub> = −13.6 (<i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup>) = −13.6 × 4/9',
          '(The negative energy confirms the electron is bound.)',
        ],
        ans: '<i>r</i><sub>3</sub> = 2.38 Å and <i>E</i><sub>3</sub> = −6.04 eV.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The wavelength of the first line of the Lyman series of hydrogen is 1216 Å. What is the wavelength of the first line of the Lyman series of the He<sup>+</sup> ion?',
        steps: [
          '<b>The trap:</b> students relaunch the full Rydberg calculation for He<sup>+</sup> and waste two minutes.',
          '<b>Fast reasoning:</b> for the same transition, <i>ν̄</i> ∝ <i>Z</i><sup>2</sup>, so <i>λ</i> ∝ 1/<i>Z</i><sup>2</sup>. Therefore<br><i>λ</i><sub>He⁺</sub>/<i>λ</i><sub>H</sub> = <i>Z</i><sub>H</sub><sup>2</sup>/<i>Z</i><sub>He⁺</sub><sup>2</sup> = 1/4<br><i>λ</i><sub>He⁺</sub> = 1216/4',
          'The whole game is the <i>Z</i><sup>2</sup> scaling; never recompute from scratch.',
        ],
        ans: '304 Å — done in ten seconds.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (two concepts: Bohr velocity + de Broglie standing wave)',
        q: 'For the electron in the second orbit (<i>n</i> = 2) of a hydrogen atom: (a) find its de Broglie wavelength, and (b) show that the orbit circumference equals an integer number of these wavelengths. (Take <i>v</i><sub>1</sub> = 2.18 × 10<sup>6</sup> m s<sup>−1</sup>, <i>a</i><sub>0</sub> = 0.529 Å, <i>m</i> = 9.1 × 10<sup>−31</sup> kg, <i>h</i> = 6.626 × 10<sup>−34</sup> J s.)',
        steps: [
          '<b>Step 1 — Bohr velocity in <i>n</i> = 2.</b><br><i>v</i><sub>2</sub> = <i>v</i><sub>1</sub>/<i>n</i> = (2.18 × 10<sup>6</sup>)/2 = 1.09 × 10<sup>6</sup> m s<sup>−1</sup>',
          '<b>Step 2 — de Broglie wavelength.</b><br><i>λ</i> = <i>h</i>/(<i>mv</i><sub>2</sub>) = (6.626 × 10<sup>−34</sup>)/((9.1 × 10<sup>−31</sup>)(1.09 × 10<sup>6</sup>)) = 6.68 × 10<sup>−10</sup> m',
          '<b>Step 3 — orbit circumference.</b> Radius <i>r</i><sub>2</sub> = 0.529 × 4/1 = 2.116 Å = 2.116 × 10<sup>−10</sup> m, so<br>2π<i>r</i><sub>2</sub> = 2π(2.116 × 10<sup>−10</sup>) = 1.33 × 10<sup>−9</sup> m',
          '<b>Step 4 — compare.</b> 2π<i>r</i><sub>2</sub>/<i>λ</i> = (1.33 × 10<sup>−9</sup>)/(6.68 × 10<sup>−10</sup>) ≈ 2 = <i>n</i>. ✓',
        ],
        ans: 'Exactly <b>2</b> de Broglie wavelengths fit around the <i>n</i> = 2 orbit — a direct experimental-style confirmation of the standing-wave derivation in 3.4 of CBSE board derivations.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A hydrogen-like ion is excited from its ground state by absorbing a single photon. While de-exciting back, the sample emits a maximum of <b>6</b> distinct spectral lines. (a) Find the principal quantum number of the excited state. (b) If the ion is He<sup>+</sup>, find the energy of the absorbed photon. (c) Find the shortest wavelength present in the emission. (Take <i>hc</i> = 1240 eV nm.)',
        steps: [
          '<b>Step 1 — find <i>n</i> from the line count.</b><br><i>n</i>(<i>n</i> − 1)/2 = 6 ⟹ <i>n</i>(<i>n</i> − 1) = 12',
          '<b>Step 2 — energy of the absorbed photon</b> (He<sup>+</sup>, <i>Z</i> = 2; absorption is the <i>n</i> = 1 → <i>n</i> = 4 jump).<br><i>E</i><sub>1</sub> = −13.6 × 4/1 = −54.4 eV, <i>E</i><sub>4</sub> = −13.6 × 4/16 = −3.4 eV<br>Δ<i>E</i><sub>abs</sub> = <i>E</i><sub>4</sub> − <i>E</i><sub>1</sub> = −3.4 − (−54.4)',
          '<b>Step 3 — shortest emitted wavelength.</b> The shortest wavelength corresponds to the largest energy gap in emission, which is the direct <i>n</i> = 4 → <i>n</i> = 1 drop, releasing the same 51.0 eV:<br><i>λ</i><sub>min</sub> = <i>hc</i>/Δ<i>E</i> = 1240/51.0',
          'The chain — line count → <i>n</i> → energy levels → photon wavelength — is the signature JEE Advanced structure.',
        ],
        ans: '<i>n</i> = 4; the absorbed photon carries 51.0 eV; the shortest emitted line is at 24.3 nm (far ultraviolet).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Calculate the energy (in eV) and radius (in Å) of the electron in the second orbit of the Li<sup>2+</sup> ion.',
            a: '<i>E</i><sub>2</sub> = −30.6 eV, <i>r</i><sub>2</sub> = 0.705 Å.',
          },
          {
            q: '[NEET] The radius of the first Bohr orbit of hydrogen is 0.529 Å. What is the radius of the third orbit of hydrogen?',
            a: '4.76 Å (since <i>r</i> ∝ <i>n</i><sup>2</sup>, 9 × 0.529).',
          },
          {
            q: '[JEE Main] A sample of hydrogen atoms is excited to the <i>n</i> = 5 level. Calculate (i) the total number of emission lines and (ii) the number of lines belonging to the Balmer series.',
            a: '(i) 10 lines, (ii) 3 Balmer lines (5 → 2, 4 → 2, 3 → 2).',
          },
          {
            q: '[JEE Main] An electron is accelerated from rest through a potential difference of 100 V. Calculate its de Broglie wavelength. (Take <i>m</i> = 9.1 × 10<sup>−31</sup> kg, <i>e</i> = 1.6 × 10<sup>−19</sup> C, <i>h</i> = 6.626 × 10<sup>−34</sup> J s.)',
            a: '≈ 1.23 Å.',
          },
          {
            q: '[JEE Advanced] The speed of an electron is measured to be 5.0 × 10<sup>5</sup> m s<sup>−1</sup> with an accuracy of 0.01%. Calculate the minimum uncertainty in its position. (Take <i>m</i> = 9.1 × 10<sup>−31</sup> kg, <i>h</i> = 6.626 × 10<sup>−34</sup> J s.)',
            a: 'Δ<i>x</i> ≥ <i>h</i>/(4π<i>m</i> Δ<i>v</i>) with Δ<i>v</i> = 50 m s<sup>−1</sup>, giving Δ<i>x</i> ≈ 1.16 × 10<sup>−6</sup> m.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The ratio of the radii of the first three orbits of the hydrogen atom <i>r</i><sub>1</sub> ∶ <i>r</i><sub>2</sub> ∶ <i>r</i><sub>3</sub> is:',
        opts: [
          { label: '1 ∶ 2 ∶ 3', nudge: '<b>(a)</b> comes from wrongly assuming <i>r</i> ∝ <i>n</i> (the classic “forgot the square” error).' },
          { label: '1 ∶ 4 ∶ 9', nudge: null },
          { label: '1 ∶ 8 ∶ 27', nudge: '<b>(c)</b> uses <i>n</i><sup>3</sup>, confusing radius with something like the period dependence.' },
          {
            label: '9 ∶ 4 ∶ 1',
            nudge: '<b>(d)</b> reverses the order — radius grows with <i>n</i>, it does not shrink; (even energy magnitudes go 1 ∶ ¼ ∶ 1/9, not 9 ∶ 4 ∶ 1). It is a pure trap for reversed reasoning.',
          },
        ],
        correct: 1,
        solution: 'Since <i>r</i><sub><i>n</i></sub> ∝ <i>n</i><sup>2</sup> at fixed <i>Z</i>, the ratio is 1<sup>2</sup> ∶ 2<sup>2</sup> ∶ 3<sup>2</sup> = 1 ∶ 4 ∶ 9.',
      },
      {
        t: 'mcq',
        q: 'In which of the following species is the Bohr model <b>inapplicable</b>?',
        opts: [
          {
            label: 'He<sup>+</sup>',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are all single-electron ions (He<sup>+</sup>, Li<sup>2+</sup>, Be<sup>3+</sup>) and obey Bohr’s equations perfectly. Students who pick one of these are reacting to the higher charge without checking the electron count, which is the only thing that matters here.',
          },
          {
            label: 'Li<sup>2+</sup>',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are all single-electron ions (He<sup>+</sup>, Li<sup>2+</sup>, Be<sup>3+</sup>) and obey Bohr’s equations perfectly. Students who pick one of these are reacting to the higher charge without checking the electron count, which is the only thing that matters here.',
          },
          {
            label: 'Be<sup>3+</sup>',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are all single-electron ions (He<sup>+</sup>, Li<sup>2+</sup>, Be<sup>3+</sup>) and obey Bohr’s equations perfectly. Students who pick one of these are reacting to the higher charge without checking the electron count, which is the only thing that matters here.',
          },
          { label: 'He', nudge: null },
        ],
        correct: 3,
        solution: 'Bohr’s model holds only for one-electron (hydrogen-like) species. Neutral helium has <b>two</b> electrons, so electron–electron repulsion — which Bohr never accounted for — breaks the model.',
      },
      {
        t: 'mcq',
        q: 'The de Broglie wavelength of a particle is most easily observable when the particle has:',
        opts: [
          {
            label: 'large mass and high speed',
            nudge: 'A heavy object (options a, c) has an immeasurably small <i>λ</i> (about 10<sup>−34</sup> m for a 0.1 kg ball at 10 m s<sup>−1</sup>), so its wave nature is invisible.',
          },
          { label: 'small mass and high speed', nudge: null },
          {
            label: 'large mass and low speed',
            nudge: 'A heavy object (options a, c) has an immeasurably small <i>λ</i> (about 10<sup>−34</sup> m for a 0.1 kg ball at 10 m s<sup>−1</sup>), so its wave nature is invisible.',
          },
          { label: 'it is the same for all particles', nudge: '<b>(d)</b> ignores the mass dependence entirely.' },
        ],
        correct: 1,
        solution: 'Since <i>λ</i> = <i>h</i>/(<i>mv</i>), the wavelength is significant only for very light particles. A light, fast particle such as an electron (~10<sup>6</sup> m s<sup>−1</sup>) has <i>λ</i> ≈ 7 × 10<sup>−10</sup> m, comparable to atomic spacings, so diffraction is observable. (Speed works the other way — <i>λ</i> ∝ 1/<i>v</i> — but the electron’s tiny mass more than compensates.)',
      },
      {
        t: 'mcq',
        q: 'According to Bohr’s theory, the relationship between the total energy <i>E</i>, kinetic energy KE, and potential energy PE of the electron is:',
        opts: [
          { label: '<i>E</i> = KE = PE', nudge: '<b>(a)</b> is dimensionally fine but physically wrong — the three are not equal.' },
          { label: 'PE = 2<i>E</i> and KE = −<i>E</i>', nudge: null },
          { label: 'KE = 2<i>E</i> and PE = −<i>E</i>', nudge: '<b>(c)</b> swaps the KE and PE relations.' },
          { label: '<i>E</i> = KE + 2 PE', nudge: '<b>(d)</b> misremembers the definition <i>E</i> = KE + PE (no factor of 2).' },
        ],
        correct: 1,
        solution: 'From 3.2 of CBSE board derivations, KE = −<i>E</i> and PE = 2<i>E</i> (equivalently PE = −2 KE). For the ground state of H, <i>E</i> = −13.6 eV, so KE = +13.6 eV and PE = −27.2 eV, which indeed sum to <i>E</i>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1 — wrong power in the scaling laws.</b> Students blur the four dependencies. Lock them in: <i>r</i> ∝ <i>n</i><sup>2</sup>/<i>Z</i>, <i>E</i> ∝ <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> (negative), <i>v</i> ∝ <i>Z</i>/<i>n</i>, <i>ν̄</i> ∝ <i>Z</i><sup>2</sup>. Most <i>Z</i>-comparison questions are solved purely by these ratios — no full calculation needed.',
          '<b>Pitfall 2 — miscounting spectral lines.</b> From an excited level <i>n</i> down to the ground state, a sample of atoms gives at most <i>n</i>(<i>n</i> − 1)/2 lines (a single atom at most <i>n</i> − 1). For “how many lines in series X,” count only transitions that end on that series’ lower level.',
          '<b>Pitfall 3 — applying Bohr to multi-electron atoms.</b> Bohr’s equations are valid only for H, He<sup>+</sup>, Li<sup>2+</sup>, Be<sup>3+</sup>. Check the number of electrons (must be one), not just whether the symbol looks simple.',
          '<b>Pitfall 4 — dropping the negative sign on energy.</b> Orbit energies are negative (bound electron). Energy absorbed in an upward jump is positive; energy released in a downward jump is positive too — but <i>E</i><sub><i>n</i></sub> itself is always negative. Mixing these up flips entire answers.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any “same transition, different ion” problem, never recompute. Wavelength scales as 1/<i>Z</i><sup>2</sup> and energy as <i>Z</i><sup>2</sup>. For line-region identification, just remember the mnemonic order of series and that lower <i>n</i><sub>1</sub> means higher energy (Lyman = UV, Balmer = visible, the rest = IR).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Bohr postulates',
            note: 'stationary orbits (no radiation); angular momentum <i>mvr</i> = <i>nh</i>/(2π); energy emitted/absorbed only on transition, Δ<i>E</i> = <i>hν</i>.',
          },
          {
            f: 'Four scaling laws',
            note: '<i>r</i><sub><i>n</i></sub> = 0.529 (<i>n</i><sup>2</sup>/<i>Z</i>) Å; <i>E</i><sub><i>n</i></sub> = −13.6 (<i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup>) eV; <i>v</i><sub><i>n</i></sub> = 2.18 × 10<sup>6</sup> (<i>Z</i>/<i>n</i>) m s<sup>−1</sup>; <i>ν̄</i> ∝ <i>Z</i><sup>2</sup>.',
          },
          {
            f: 'Rydberg',
            note: '<i>ν̄</i> = <i>R</i><sub>H</sub><i>Z</i><sup>2</sup>(1/<i>n</i><sub>1</sub><sup>2</sup> − 1/<i>n</i><sub>2</sub><sup>2</sup>), <i>R</i><sub>H</sub> = 1.097 × 10<sup>7</sup> m<sup>−1</sup>. Series: Lyman(1,UV) · Balmer(2,visible) · Paschen(3) · Brackett(4) · Pfund(5,IR).',
          },
          { f: 'Lines from level <i>n</i> to ground (sample)', note: '<i>n</i>(<i>n</i> − 1)/2.' },
          {
            f: 'de Broglie',
            note: '<i>λ</i> = <i>h</i>/(<i>mv</i>) = <i>h</i>/√(2<i>m</i> KE); standing-wave condition 2π<i>r</i> = <i>nλ</i> gives Bohr’s quantisation.',
          },
          {
            f: 'Heisenberg',
            note: 'Δ<i>x</i> · Δ<i>p</i> ≥ <i>h</i>/(4π) — kills the idea of a definite orbit, so Bohr must fail for fine detail.',
          },
          { f: 'Energy split', note: 'KE = −<i>E</i>, PE = 2<i>E</i> = −2 KE.' },
        ],
        aids: [
          '“Lyman-Balmer-Paschen-Brackett-Pfund” with “UV → Visible → IR-IR-IR.”',
          'For scaling: “radius loves <i>n</i><sup>2</sup>, energy loves <i>Z</i><sup>2</sup>, both hate the other variable.”',
          'For Bohr’s domain: “one electron only — the moment there are two, Bohr is through.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 96–102 ─────────────────────────
  {
    n: '04',
    title: 'Quantum Model, Orbitals & Electron Configurations',
    kalam: 'The orbital is a probability region, not a trajectory.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The most question-dense topic of the chapter. CBSE Boards ask quantum-number assignment, orbital shapes/nodes, and electronic configurations (including the Cr/Cu anomalies) as 1–3 mark questions. NEET asks 2–3 questions yearly on quantum numbers, node counting, and configuration. JEE Main loves “permissible set of quantum numbers,” (<i>n</i> + <i>l</i>) ordering, and node formulas; JEE Advanced poses hypothetical “what if the rules changed” problems that test whether you truly understand why the counting works.',
      },
      {
        t: 'p',
        html: 'We ended Topic 03 with Bohr’s model in ruins. Two facts had killed it: de Broglie showed the electron has a wave nature, and Heisenberg proved we can never pin down its exact position and momentum at the same time. But Bohr’s whole picture rested on the electron travelling a sharp circular orbit — a definite path. If you cannot know where the electron is and how fast it is going, then a definite path is a fiction. The orbit had to go.',
      },
      {
        t: 'p',
        html: 'What replaces it? Erwin Schrödinger (1926) wrote down a wave equation for the electron. We will not solve it here, but its meaning is everything. Solving it does not give you the electron’s location — it gives you a <b>wave function</b> <i>ψ</i>, and the square of that function, <i>ψ</i><sup>2</sup>, tells you the probability of finding the electron at each point in space. So we trade certainty for probability. Instead of a thin wire-like orbit, we get a fuzzy three-dimensional <b>cloud</b> of probability around the nucleus. That cloud is what we now call an <b>orbital</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture a ceiling fan switched on at full speed. You cannot point to where any single blade is at a given instant — it is everywhere and nowhere. But you can describe the region the blades sweep out: a flat disc. The disc is not the blade; it is the space where the blade is likely to be. An orbital is exactly this: not a path the electron follows, but a region of space where the electron is likely to be found. The denser the cloud, the higher the probability.',
      },
      {
        t: 'p',
        html: 'Now, a fan disc is fully described by a few numbers — its radius, its tilt, its height above the floor. In the same way, every orbital is completely labelled by a set of <b>quantum numbers</b>, which fall out naturally when you solve Schrödinger’s equation. Three of them describe the orbital (its size, its shape, its orientation in space) and a fourth describes the electron sitting inside it (its spin). Think of them as a postal address for an electron: the principal quantum number <i>n</i> is the city (which shell), the azimuthal number <i>l</i> is the street (which subshell/shape), the magnetic number <i>m</i><sub><i>l</i></sub> is the house number (which specific orbital), and the spin number <i>m</i><sub><i>s</i></sub> is which of the two seats in that house the electron takes. No two electrons in an atom can share the same full address — that single rule, due to Pauli, is what gives every atom its structure.',
      },
      {
        t: 'p',
        html: 'What do these clouds actually look like? Their shape is fixed entirely by <i>l</i>. An s orbital (<i>l</i> = 0) is a <b>sphere</b> — the electron cloud is equally likely in every direction, like a fuzzy ball centred on the nucleus. A p orbital (<i>l</i> = 1) is a <b>dumbbell</b> with two lobes on opposite sides of the nucleus, and because <i>m</i><sub><i>l</i></sub> can be −1, 0, +1, there are three of them pointing along the <i>x</i>, <i>y</i>, and <i>z</i> axes (p<sub><i>x</i></sub>, p<sub><i>y</i></sub>, p<sub><i>z</i></sub>). A d orbital (<i>l</i> = 2) has <b>five</b> members, four of them four-lobed “cloverleaf” shapes and one oddball (d<sub><i>z</i>²</sub>) with two lobes plus a doughnut-shaped ring of probability around its waist. An f orbital (<i>l</i> = 3) has <b>seven</b> members with still more elaborate shapes. The pattern is simply 2<i>l</i> + 1 orientations for each value of <i>l</i> — the number of “house numbers” the magnetic quantum number allows.',
      },
      {
        t: 'p',
        html: 'Once we know the addresses available, filling a multi-electron atom is like seating guests at a wedding: fill the cheapest (lowest-energy) seats first (Aufbau), never seat two guests identically (Pauli), and when several equal seats are open at one table, give everyone their own seat before doubling up (Hund). These three rules, applied in order, generate the electronic configuration of every element — and through it, the entire periodic table.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions you must respect:</b><br>• The orbital is a probability region, not a trajectory. Never speak of an electron “moving along” an orbital.<br>• For a <b>hydrogen-like (one-electron) species</b>, orbital energy depends only on <i>n</i> — so 2s and 2p are degenerate (equal energy). The moment a second electron is present, electron–electron repulsion makes energy depend on both <i>n</i> and <i>l</i>, and the degeneracy breaks. This single distinction trips up countless students.<br>• The boundary surface we draw (e.g. the dumbbell of a p orbital) encloses ~90–95% probability; the cloud technically extends to infinity, just with vanishing density.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'table',
        title: 'The four quantum numbers',
        head: ['Quantum number', 'Symbol', 'Allowed values', 'Tells you'],
        rows: [
          ['Principal', '<i>n</i>', '1, 2, 3, …', 'shell; size & (mainly) energy'],
          ['Azimuthal (orbital)', '<i>l</i>', '0, 1, … , (<i>n</i> − 1)', 'subshell; <b>shape</b>; angular momentum'],
          ['Magnetic', '<i>m</i><sub><i>l</i></sub>', '−<i>l</i>, … , 0, … , +<i>l</i>', '<b>orientation</b> in space'],
          ['Spin', '<i>m</i><sub><i>s</i></sub>', '+½ or −½', 'spin direction of the electron'],
        ],
      },
      {
        t: 'p',
        html: 'Subshell letters: <i>l</i> = 0, 1, 2, 3 → s, p, d, f.',
      },
      {
        t: 'formula',
        kicker: 'Orbital angular momentum of an electron',
        main: '<i>L</i> = √(<i>l</i>(<i>l</i> + 1)) <i>h</i>/(2π) = √(<i>l</i>(<i>l</i> + 1)) <i>ℏ</i>',
        legend: [],
        note: 'So an s-electron (<i>l</i> = 0) has zero orbital angular momentum.',
      },
      {
        t: 'formula',
        kicker: 'Counting relations (commit these to memory)',
        main: 'orbitals in a subshell = 2<i>l</i> + 1<br>orbitals in a shell = <i>n</i><sup>2</sup><br>max electrons in a subshell = 2(2<i>l</i> + 1) = 4<i>l</i> + 2<br>max electrons in a shell = 2<i>n</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Nodes (regions where <i>ψ</i><sup>2</sup> = 0, i.e. zero probability)',
        main: 'radial (spherical) nodes = <i>n</i> − <i>l</i> − 1<br>angular nodes (planes or cones) = <i>l</i><br>total nodes = <i>n</i> − 1',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Energy ordering — the (<i>n</i> + <i>l</i>) rule (for multi-electron atoms):</b> the subshell with the lower (<i>n</i> + <i>l</i>) fills first; if two subshells have the same (<i>n</i> + <i>l</i>), the one with the lower <i>n</i> fills first. (For a one-electron species, energy depends on <i>n</i> alone.)',
      },
      {
        t: 'p',
        html: '<b>The three filling principles:</b><br>• <b>Aufbau principle:</b> electrons occupy the lowest-energy available orbital first (order set by the (<i>n</i> + <i>l</i>) rule).<br>• <b>Pauli exclusion principle:</b> no two electrons in an atom can have the same set of all four quantum numbers — hence at most two electrons per orbital, with opposite spins.<br>• <b>Hund’s rule of maximum multiplicity:</b> electrons fill degenerate orbitals singly (with parallel spins) before any pairing begins.',
      },
      {
        t: 'p',
        html: 'Symbol key: <i>n</i>, <i>l</i>, <i>m</i><sub><i>l</i></sub>, <i>m</i><sub><i>s</i></sub> as above; <i>h</i> = Planck’s constant; <i>ℏ</i> = <i>h</i>/(2π); <i>ψ</i> = wave function; <i>Z</i><sub>eff</sub> = effective nuclear charge experienced by an electron after shielding by inner electrons.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no single derivation here; the skill is applying a small set of rules flawlessly. Master these five procedures.',
      },
      {
        t: 'proc',
        title: '3.1 Assigning quantum numbers to an electron — work outward from n',
        steps: [
          'Pick <i>n</i> — the shell number of the electron.',
          'List allowed <i>l</i> values: 0 to (<i>n</i> − 1). Choose the one matching the subshell (s=0, p=1, d=2, f=3).',
          'List allowed <i>m</i><sub><i>l</i></sub> values: −<i>l</i> to +<i>l</i>. By the standard filling convention, place electrons starting from the most negative <i>m</i><sub><i>l</i></sub> upward, one per orbital first.',
          'Assign <i>m</i><sub><i>s</i></sub> = +½ to the first electron in an orbital, −½ to the second.',
        ],
      },
      {
        t: 'p',
        html: '<b>Why the order matters:</b> each quantum number’s range is defined by the one above it (<i>l</i> depends on <i>n</i>, <i>m</i><sub><i>l</i></sub> depends on <i>l</i>). Trying to fix <i>m</i><sub><i>l</i></sub> before <i>l</i> is like writing a house number before knowing the street.',
      },
      {
        t: 'p',
        html: '<b>3.2 Counting nodes.</b> For any orbital labelled <i>n</i>, <i>l</i>: radial nodes = <i>n</i> − <i>l</i> − 1, angular nodes = <i>l</i>, and these always add to <i>n</i> − 1. <b>Reasoning:</b> the total “wiggle room” of the wave function is set by <i>n</i>; the angular part claims <i>l</i> of it (giving the shape), and whatever is left becomes spherical shells of zero probability. Example check: a 3p orbital has <i>l</i> = 1, so 1 angular node and 3 − 1 − 1 = 1 radial node, total 2 = <i>n</i> − 1. ✓',
      },
      {
        t: 'p',
        html: '<b>3.3 Ordering orbital energies (the (<i>n</i> + <i>l</i>) logic).</b> Compute (<i>n</i> + <i>l</i>) for each subshell. Lower wins; ties broken by lower <i>n</i>. <b>Why this works physically:</b> a higher <i>l</i> means a more “spread-out” shape that penetrates poorly, is more strongly shielded by the inner electrons and feels less of the nucleus, raising its energy — so a 4s subshell (<i>n</i> + <i>l</i> = 4) actually sinks below 3d (<i>n</i> + <i>l</i> = 5) and fills first. This is the reason for the famous 4s-before-3d filling.',
      },
      {
        t: 'proc',
        title: '3.4 Writing an electronic configuration',
        steps: [
          'Find <i>Z</i> (number of electrons in the neutral atom).',
          'Fill subshells in (<i>n</i> + <i>l</i>) order: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s …',
          'Respect subshell capacities (s ∶ 2, p ∶ 6, d ∶ 10, f ∶ 14), apply Hund within a subshell.',
          '<b>Apply the stability exceptions:</b> half-filled (p<sup>3</sup>, d<sup>5</sup>, f<sup>7</sup>) and fully-filled (p<sup>6</sup>, d<sup>10</sup>, f<sup>14</sup>) subshells carry extra exchange stability. This is why <b>Cr (<i>Z</i>=24)</b> is [Ar]3d<sup>5</sup>4s<sup>1</sup> (not 3d<sup>4</sup>4s<sup>2</sup>) and <b>Cu (<i>Z</i>=29)</b> is [Ar]3d<sup>10</sup>4s<sup>1</sup> (not 3d<sup>9</sup>4s<sup>2</sup>).',
          '<b>For ions:</b> remove electrons from the highest principal quantum number <i>n</i> first — for transition metals, that means 4s electrons leave before 3d. So Fe<sup>2+</sup> (from [Ar]3d<sup>6</sup>4s<sup>2</sup>) is [Ar]3d<sup>6</sup>, not [Ar]3d<sup>4</sup>4s<sup>2</sup>.',
        ],
      },
      {
        t: 'p',
        html: '<b>Reasoning behind the shielding picture (3.3–3.4):</b> within a shell, an s electron penetrates closest to the nucleus and is held most tightly (lowest energy), then p, then d, then f. So <i>Z</i><sub>eff</sub> felt decreases as <i>l</i> increases, which is exactly what splits a shell’s energy levels and underpins the (<i>n</i> + <i>l</i>) rule.',
      },
      {
        t: 'p',
        html: '<b>3.5 Reading orbital shapes and the meaning of nodes.</b> The boundary-surface picture is worth fixing precisely, because shape questions are exam staples:<br>• <b>s (<i>l</i> = 0):</b> spherical, no preferred direction. A 1s has no node; a 2s has one spherical (radial) node — a thin shell inside which the probability briefly drops to zero before rising again outside.<br>• <b>p (<i>l</i> = 1):</b> dumbbell, three orientations p<sub><i>x</i></sub>, p<sub><i>y</i></sub>, p<sub><i>z</i></sub>. Each has exactly <b>one nodal plane</b> (the plane perpendicular to its axis, passing through the nucleus) where the probability is zero — for p<sub><i>y</i></sub> that is the <i>xz</i>-plane.<br>• <b>d (<i>l</i> = 2):</b> five orbitals. Four (d<sub><i>xy</i></sub>, d<sub><i>yz</i></sub>, d<sub><i>zx</i></sub>, d<sub><i>x</i>²−<i>y</i>²</sub>) are four-lobed with <b>two nodal planes</b>; the fifth, d<sub><i>z</i>²</sub>, has two axial lobes plus a ring of charge in the <i>xy</i>-plane.<br>• <b>f (<i>l</i> = 3):</b> seven orbitals of more complex shape, with three angular nodes each.',
      },
      {
        t: 'p',
        html: '<b>Why nodes matter physically:</b> a node is a surface where the wave function changes sign, so <i>ψ</i><sup>2</sup> = 0 there — the electron is never found on a node. The angular nodes (= <i>l</i>) carve out the shape (the flat planes that separate a p dumbbell’s lobes), while the radial nodes (= <i>n</i> − <i>l</i> − 1) are concentric spherical shells of zero probability nested inside the orbital. Together they always total <i>n</i> − 1, which is why a higher shell, with more nodes, spreads the electron cloud over a larger, more structured region.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'For scandium (<i>Z</i> = 21): (a) write the ground-state electronic configuration, and (b) state the four quantum numbers of its differentiating (last-filled) electron.',
        steps: [
          '<b>Step 1 — fill in (<i>n</i> + <i>l</i>) order.</b> 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>1</sup>.',
          '<b>Step 2 — identify the differentiating electron.</b> It is the single 3d electron (the last subshell to receive an electron).',
          '<b>Step 3 — assign its quantum numbers.</b> For a 3d electron: <i>n</i> = 3; <i>l</i> = 2 (d subshell); the first electron enters the most negative orbital, <i>m</i><sub><i>l</i></sub> = −2; first occupant, <i>m</i><sub><i>s</i></sub> = +½.',
        ],
        ans: 'Sc = [Ar]3d<sup>1</sup>4s<sup>2</sup>; differentiating electron ⇒ (<i>n</i>, <i>l</i>, <i>m</i><sub><i>l</i></sub>, <i>m</i><sub><i>s</i></sub>) = (3, 2, −2, +½).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'How many radial nodes, angular nodes, and total nodes does a 4d orbital have?',
        steps: [
          '<b>The trap:</b> students mix up “radial nodes” with “total nodes” and report <i>n</i> − 1 for the radial count.',
          '<b>Fast reasoning:</b> for 4d, <i>n</i> = 4 and <i>l</i> = 2.<br>radial = <i>n</i> − <i>l</i> − 1 = 4 − 2 − 1 = 1, angular = <i>l</i> = 2, total = <i>n</i> − 1 = 3',
          'If your radial and angular don’t sum to <i>n</i> − 1, you’ve slipped.',
        ],
        ans: '1 radial, 2 angular, 3 total — and the quick self-check is that radial + angular = 1 + 2 = 3 = <i>n</i> − 1. ✓',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (combining quantum-number rules + ion configuration)',
        q: 'Consider the 3d subshell. (a) Find the orbital angular momentum of a 3d electron. (b) How many orbitals and how many maximum electrons does the subshell hold? (c) How many radial nodes does a 3d orbital have? (d) Hence write the electronic configuration of Fe<sup>2+</sup> (<i>Z</i> = 26).',
        steps: [
          '<b>Step 1 — angular momentum (<i>l</i> = 2):</b><br><i>L</i> = √(<i>l</i>(<i>l</i> + 1)) <i>h</i>/(2π)',
          '<b>Step 2 — counting (<i>l</i> = 2):</b> orbitals = 2<i>l</i> + 1 = 5; max electrons = 2(2<i>l</i> + 1) = 10.',
          '<b>Step 3 — radial nodes of 3d:</b> <i>n</i> − <i>l</i> − 1 = 3 − 2 − 1 = 0 (a 3d orbital has no radial node).',
          '<b>Step 4 — configuration of Fe<sup>2+</sup>.</b> Neutral Fe = [Ar]3d<sup>6</sup>4s<sup>2</sup>. Remove the two highest-<i>n</i> electrons first — the 4s<sup>2</sup> pair — giving',
          '(Note the classic catch in (d): the 4s electrons leave before the 3d, even though 4s filled first.)',
        ],
        ans: '<i>L</i> = √6 <i>h</i>/(2π); 5 orbitals / 10 electrons; 0 radial nodes; Fe<sup>2+</sup> = [Ar]3d<sup>6</sup>.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Imagine an alternate universe where the <b>spin quantum number can take three values</b> (−½, 0, +½), while all other quantum-number rules are unchanged. (a) What is the maximum number of electrons the <i>n</i> = 3 shell can now hold? (b) Write the ground-state electronic configuration of an element with <i>Z</i> = 10 under this new rule.',
        steps: [
          '<b>Step 1 — rebuild the capacities from first principles.</b> The orbital count is unchanged (it comes from <i>n</i> and <i>l</i>, not spin): <i>n</i> = 3 has <i>n</i><sup>2</sup> = 9 orbitals. But each orbital can now hold <b>3</b> electrons (one per spin value) instead of 2.<br>max electrons in <i>n</i> = 3 = 3 × <i>n</i><sup>2</sup> = 3 × 9 = 27',
          '<b>Step 2 — new subshell capacities.</b> s holds 3, p holds 3 × 3 = 9, d holds 3 × 5 = 15. Filling order ((<i>n</i> + <i>l</i>) rule) is unchanged: 1s, 2s, 2p, …',
          '<b>Step 3 — seat 10 electrons.</b> 1s takes 3, 2s takes 3, leaving 4 for 2p (capacity 9):',
          'The whole problem hinges on recognising that orbital counts come from <i>n</i> and <i>l</i>, while electron capacity is (orbital count) × (number of spin values) — a clean test of where each rule comes from.',
        ],
        ans: 'The <i>n</i> = 3 shell holds <b>27</b> electrons; the <i>Z</i> = 10 element is 1s<sup>3</sup>2s<sup>3</sup>2p<sup>4</sup>.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the ground-state electronic configuration of copper (<i>Z</i> = 29) and explain, in one line, why it deviates from the expected [Ar]3d<sup>9</sup>4s<sup>2</sup>.',
            a: '[Ar]3d<sup>10</sup>4s<sup>1</sup> — a fully-filled 3d<sup>10</sup> subshell is extra-stable, so one 4s electron shifts to 3d.',
          },
          {
            q: '[NEET] Which of the following sets of quantum numbers (<i>n</i>, <i>l</i>, <i>m</i><sub><i>l</i></sub>, <i>m</i><sub><i>s</i></sub>) is <b>not</b> permissible: (i) (3, 2, −2, +½), (ii) (2, 2, 0, −½), (iii) (4, 0, 0, +½), (iv) (3, 1, +1, −½)?',
            a: '(ii) is impossible — for <i>n</i> = 2, <i>l</i> cannot equal 2 (max <i>l</i> = <i>n</i> − 1 = 1).',
          },
          {
            q: '[JEE Main] Arrange the subshells 4s, 3d, 4p, 3p in increasing order of energy using the (<i>n</i> + <i>l</i>) rule.',
            a: '3p (4) < 4s (4) < 3d (5) < 4p (5); tie at 4 broken by lower <i>n</i> → 3p before 4s, tie at 5 → 3d before 4p.',
          },
          {
            q: '[JEE Main] How many electrons in a chromium atom (<i>Z</i> = 24, ground state) have the azimuthal quantum number <i>l</i> = 2?',
            a: '5 electrons (Cr = [Ar]3d<sup>5</sup>4s<sup>1</sup>; the five 3d electrons have <i>l</i> = 2).',
          },
          {
            q: '[JEE Advanced] An element’s atom in its ground state has exactly <b>3</b> electrons in its 3d subshell, all unpaired, and a fully-filled 4s. Identify the element and write its full electronic configuration.',
            a: 'Vanadium (<i>Z</i> = 23), [Ar]3d<sup>3</sup>4s<sup>2</sup>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The orbital angular momentum of an electron in a 4s orbital is:',
        opts: [
          {
            label: '√2 <i>h</i>/(2π)',
            nudge: '<b>(a)</b> is the value for <i>l</i> = 1 (p), <b>(d)</b> for <i>l</i> = 2 (d) — both come from forgetting that the orbital is s, not from a maths error.',
          },
          {
            label: '½ · <i>h</i>/(2π)',
            nudge: '<b>(b)</b> is the <i>z</i>-component of spin angular momentum, <i>m</i><sub><i>s</i></sub><i>h</i>/(2π) with <i>m</i><sub><i>s</i></sub> = ½ (the spin magnitude itself is (√3/2)<i>h</i>/(2π)); students who confuse spin with orbital angular momentum land here.',
          },
          { label: 'zero', nudge: null },
          {
            label: '√6 <i>h</i>/(2π)',
            nudge: '<b>(a)</b> is the value for <i>l</i> = 1 (p), <b>(d)</b> for <i>l</i> = 2 (d) — both come from forgetting that the orbital is s, not from a maths error.',
          },
        ],
        correct: 2,
        solution: 'Orbital angular momentum is √(<i>l</i>(<i>l</i> + 1)) <i>h</i>/(2π), and for any s orbital <i>l</i> = 0, so it is exactly zero.',
      },
      {
        t: 'mcq',
        q: 'For a multi-electron atom, which orbital fills first (lowest energy by the (<i>n</i> + <i>l</i>) rule)?',
        opts: [
          {
            label: '3d',
            nudge: '<b>(a)</b> is the seductive trap — students assume “lower <i>n</i> = lower energy” and pick 3d, forgetting the (<i>n</i> + <i>l</i>) rule that makes 4s dip below 3d.',
          },
          { label: '4s', nudge: null },
          { label: '4p', nudge: '<b>(c)</b> and <b>(d)</b> have higher (<i>n</i> + <i>l</i>) values still.' },
          { label: '4d', nudge: '<b>(c)</b> and <b>(d)</b> have higher (<i>n</i> + <i>l</i>) values still.' },
        ],
        correct: 1,
        solution: 'By the (<i>n</i> + <i>l</i>) rule: 4s (4) < 3d (5) < 4p (5) < 4d (6). So 4s fills first.',
      },
      {
        t: 'mcq',
        q: 'The maximum number of electrons that can have the quantum numbers <i>n</i> = 4 and <i>m</i><sub><i>s</i></sub> = +½ is:',
        opts: [
          {
            label: '32',
            nudge: '<b>(a)</b> is the total capacity 2<i>n</i><sup>2</sup> of the shell — chosen by students who ignore the spin restriction.',
          },
          { label: '16', nudge: null },
          { label: '8', nudge: '<b>(c)</b> and <b>(d)</b> come from miscounting the orbitals of the shell (8 is <i>n</i><sup>2</sup>/2, 4 is just <i>n</i>) instead of using all <i>n</i><sup>2</sup> = 16.' },
          { label: '4', nudge: '<b>(c)</b> and <b>(d)</b> come from miscounting the orbitals of the shell (8 is <i>n</i><sup>2</sup>/2, 4 is just <i>n</i>) instead of using all <i>n</i><sup>2</sup> = 16.' },
        ],
        correct: 1,
        solution: 'The <i>n</i> = 4 shell has <i>n</i><sup>2</sup> = 16 orbitals, and only one electron per orbital can have <i>m</i><sub><i>s</i></sub> = +½. So 16.',
      },
      {
        t: 'mcq',
        q: 'Which statement about a 2p<sub><i>y</i></sub> orbital is correct?',
        opts: [
          {
            label: 'It has one radial node and one angular node.',
            nudge: '<b>(a)</b> is wrong: 2p has <i>n</i> − <i>l</i> − 1 = 2 − 1 − 1 = 0 radial nodes (it has one angular node only).',
          },
          { label: 'Its probability density is zero in the <i>xz</i>-plane.', nudge: null },
          { label: 'It is spherically symmetric.', nudge: '<b>(c)</b> describes an s orbital, not a directional p orbital.' },
          {
            label: 'It has zero orbital angular momentum.',
            nudge: '<b>(d)</b> is false for p (<i>l</i> = 1 gives <i>L</i> = √2 <i>h</i>/(2π) ≠ 0) — that property belongs to s orbitals.',
          },
        ],
        correct: 1,
        solution: 'A 2p<sub><i>y</i></sub> orbital has its lobes along the <i>y</i>-axis, so the perpendicular <i>xz</i>-plane is its nodal (angular) plane where <i>ψ</i><sup>2</sup> = 0.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1 — confusing node types.</b> Radial nodes = <i>n</i> − <i>l</i> − 1, angular = <i>l</i>, total = <i>n</i> − 1. Students report <i>n</i> − 1 as the radial count. Always state all three and check that radial + angular = <i>n</i> − 1.',
          '<b>Pitfall 2 — assuming lower <i>n</i> means lower energy.</b> In multi-electron atoms it is the (<i>n</i> + <i>l</i>) rule that rules, which is why 4s fills before 3d. (In a one-electron species, energy does depend on <i>n</i> alone — know which regime you’re in.)',
          '<b>Pitfall 3 — removing 3d before 4s when forming cations.</b> Electrons leave from the highest <i>n</i> first, so 4s goes before 3d. Fe<sup>2+</sup> is [Ar]3d<sup>6</sup>, never [Ar]3d<sup>4</sup>4s<sup>2</sup>.',
          '<b>Pitfall 4 — forgetting the Cr and Cu anomalies.</b> Half-filled (d<sup>5</sup>) and fully-filled (d<sup>10</sup>) subshells steal a 4s electron for extra stability: Cr = 3d<sup>5</sup>4s<sup>1</sup>, Cu = 3d<sup>10</sup>4s<sup>1</sup>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For “is this set of quantum numbers allowed?” check the chain instantly: <i>l</i> must be < <i>n</i>, and |<i>m</i><sub><i>l</i></sub>| ≤ <i>l</i>. One violation = impossible. For node counts, anchor on <i>n</i> − 1 = total and split it. For ion configurations, write the neutral atom first, then strip the highest-<i>n</i> electrons.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Four quantum numbers',
            note: '<i>n</i> (shell, size/energy) · <i>l</i> = 0 → (<i>n</i> − 1) (shape: s, p, d, f) · <i>m</i><sub><i>l</i></sub> = −<i>l</i> → +<i>l</i> (orientation) · <i>m</i><sub><i>s</i></sub> = ±½ (spin).',
          },
          { f: 'Angular momentum', note: '<i>L</i> = √(<i>l</i>(<i>l</i> + 1)) <i>h</i>/(2π) → zero for s.' },
          {
            f: 'Counting',
            note: 'orbitals/subshell = 2<i>l</i> + 1; orbitals/shell = <i>n</i><sup>2</sup>; max e<sup>−</sup>/subshell = 4<i>l</i> + 2; max e<sup>−</sup>/shell = 2<i>n</i><sup>2</sup>.',
          },
          { f: 'Nodes', note: 'radial = <i>n</i> − <i>l</i> − 1 · angular = <i>l</i> · total = <i>n</i> − 1.' },
          {
            f: 'Energy order',
            note: '(<i>n</i> + <i>l</i>) rule — lower (<i>n</i> + <i>l</i>) first, tie broken by lower <i>n</i>. Aufbau order: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s …',
          },
          {
            f: 'Three rules',
            note: 'Aufbau (lowest energy first) · Pauli (no two electrons share all four QN) · Hund (singly fill degenerate orbitals first).',
          },
          {
            f: 'Anomalies',
            note: 'Cr = [Ar]3d<sup>5</sup>4s<sup>1</sup>, Cu = [Ar]3d<sup>10</sup>4s<sup>1</sup>. <b>Ions:</b> remove highest-<i>n</i> (4s) first.',
          },
        ],
        aids: [
          '“<i>n</i> = city, <i>l</i> = street, <i>m</i><sub><i>l</i></sub> = house, <i>m</i><sub><i>s</i></sub> = seat” for the QN address.',
          '“Radial = <i>n</i> − <i>l</i> − 1, angular = <i>l</i>, total = <i>n</i> − 1” (they must add up).',
          '“Half-filled and full-filled love to steal an s” for Cr/Cu.',
          '“Last in, first out — except cations drop the highest <i>n</i>, not the last-filled.”',
        ],
      },
    ],
  },
];
