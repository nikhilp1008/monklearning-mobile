import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 12, Additional Topics B to D, word for word from the Class 12
 * Physics Master Reference: B Moseley’s Law and X-ray Spectra (pp. 796 to
 * 799; its practice answers 2 to 5 sit at the top of p. 799), C The
 * Franck-Hertz Experiment (pp. 799 to 801) and D Laser Physics: Population
 * Inversion and Stimulated Emission (pp. 802 to 805; its practice answers 2
 * to 5 sit at the top of p. 805). Each addendum prints its own practice
 * problems and answers, which are its Practice part. These pages print no
 * drawings: every equation is typeset, and D's two lists are tables.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic B · pp. 796–799 ─────────────────────────
  {
    n: 'B',
    title: 'Moseley’s Law and X-ray Spectra',
    extra: true,
    kalam: 'When high-energy electrons strike a metal target, two things happen: a continuous X-ray spectrum (bremsstrahlung) and sharp characteristic lines.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter covers optical spectra (Balmer, Lyman, …) in detail but says nothing about X-ray spectra, which are equally important for atomic structure. When high-energy electrons strike a metal target, two things happen: a continuous X-ray spectrum (bremsstrahlung) and sharp characteristic lines. Moseley’s 1913 law for the characteristic lines, √<i>ν</i> = <i>a</i>(<i>Z</i> − <i>b</i>), was the experimental smoking gun that established atomic number <i>Z</i> (not atomic weight) as the fundamental property of elements. This is a JEE Main staple and JEE Advanced occasionally deepens it with Duane-Hunt law.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>X-ray production.</b> A high-voltage tube fires electrons at a metal target. Two spectral components emerge:<br>1. <b>Continuous spectrum (bremsstrahlung):</b> The electron decelerates in the Coulomb field of the nucleus and radiates a photon. Energy conservation gives the Duane-Hunt law:<br><i>eV</i> = <i>hν</i><sub>max</sub> = <i>hc</i>/<i>λ</i><sub>min</sub>,<br>so the short-wavelength cutoff is<br><i>λ</i><sub>min</sub> = <i>hc</i>/(<i>eV</i>).<br>Substituting <i>hc</i> = 1240 eV·nm:<br><i>λ</i><sub>min</sub>(nm) = 1240/<i>V</i>(volts).',
      },
      {
        t: 'p',
        html: '2. <b>Characteristic X-ray lines:</b> If the incident electron has enough energy to knock an inner-shell (K-shell) electron out of a target atom, an electron from a higher shell falls down and emits a photon. The K-series lines come from transitions to the K-shell (<i>n</i> = 1):<br>• K<sub>α</sub>: L-shell (<i>n</i> = 2) → K-shell (<i>n</i> = 1)<br>• K<sub>β</sub>: M-shell (<i>n</i> = 3) → K-shell (<i>n</i> = 1)',
      },
      {
        t: 'p',
        html: '<b>Moseley’s law:</b><br>√<i>ν</i><sub>Kα</sub> = <i>a</i>(<i>Z</i> − <i>b</i>),<br>where <i>a</i> and <i>b</i> are empirical constants. Since <i>ν</i> = <i>c</i>/<i>λ</i>:<br><i>c</i>/<i>λ</i><sub>Kα</sub> = <i>a</i><sup>2</sup>(<i>Z</i> − <i>b</i>)<sup>2</sup> ⇒ √(1/<i>λ</i><sub>Kα</sub>) = <i>a</i>′(<i>Z</i> − <i>b</i>), <i>a</i>′ = <i>a</i>/√<i>c</i>.',
      },
      {
        t: 'p',
        html: 'For K<sub>α</sub> lines, <i>ν</i> = ¾<i>Rc</i>(<i>Z</i> − 1)<sup>2</sup>, so <i>a</i> = √(¾<i>Rc</i>) ≈ 4.97 × 10<sup>7</sup> Hz<sup>1/2</sup> and <i>a</i>′ = √(¾<i>R</i>) ≈ 2.87 × 10<sup>3</sup> m<sup>−1/2</sup>.',
      },
      {
        t: 'p',
        html: '<b>Units.</b> <i>ν</i> in s<sup>−1</sup>; <i>λ</i> in m; <i>Z</i> dimensionless. The slope <i>a</i> has units of s<sup>−1/2</sup>; if using wavenumber <i>ν̄</i> = 1/<i>λ</i>, then √<i>ν̄</i> has units m<sup>−1/2</sup> and the slope is <i>a</i>′ (units m<sup>−1/2</sup>).',
      },
      {
        t: 'p',
        html: '<b>The constant <i>b</i>:</b> The screening constant accounts for the fact that an L-shell electron sees not a bare nuclear charge <i>Z</i> but <i>Z</i> − <i>σ</i>, where <i>σ</i> ≈ 1 is the screening from the single K-shell electron. For K<sub>α</sub> transitions, <i>b</i> ≈ 1.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Duane-Hunt Law',
        q: 'A hospital X-ray tube operates at 80 kV. What is the minimum wavelength of the X-rays produced?',
        steps: [
          '<b>Apply the Duane-Hunt law:</b> The maximum photon energy equals the electron’s kinetic energy gained from the voltage:<br><i>eV</i> = <i>hν</i><sub>max</sub>.',
          'Therefore:<br><i>λ</i><sub>min</sub> = <i>hc</i>/(<i>eV</i>) = (1240 eV · nm)/(80,000 eV) = (1240/80,000) nm = 0.0155 nm = 15.5 pm.',
          '<b>Check.</b> For a 100 kV tube, <i>λ</i><sub>min</sub> = 12.4 pm. 80 kV gives a slightly longer cutoff. The numbers are consistent with the 1/<i>V</i> dependence. <i>λ</i><sub>min</sub> lies in the hard X-ray region.',
          '<b>Units check.</b> <i>hc</i> = 1240 eV·nm; <i>eV</i> = 80,000 eV; ratio gives nm. Correct.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Moseley’s Law',
        q: 'For K<sub>α</sub> X-rays Moseley’s law is √<i>ν</i> = <i>a</i>(<i>Z</i> − 1) with <i>a</i> = √(¾<i>Rc</i>) ≈ 4.97 × 10<sup>7</sup> Hz<sup>1/2</sup> (so <i>b</i> = 1). For copper (<i>Z</i> = 29), find the wavelength of the K<sub>α</sub> line.',
        steps: [
          '<b>Step 1 — Find the frequency.</b><br>√<i>ν</i> = 4.97 × 10<sup>7</sup> × (29 − 1) = 4.97 × 10<sup>7</sup> × 28 = 1.392 × 10<sup>9</sup> Hz<sup>1/2</sup>.<br><i>ν</i> = (1.392 × 10<sup>9</sup>)<sup>2</sup> = 1.94 × 10<sup>18</sup> Hz.',
          '<b>Step 2 — Convert to wavelength.</b><br><i>λ</i> = <i>c</i>/<i>ν</i> = (3 × 10<sup>8</sup> m/s)/(1.94 × 10<sup>18</sup> s<sup>−1</sup>) = 1.55 × 10<sup>−10</sup> m = 0.155 nm = 1.55 Å.',
          '<b>Check.</b> The measured Cu K<sub>α</sub> wavelength is 1.54 Å (154 pm), so the result agrees to better than 1%; the small difference comes from taking <i>b</i> = 1 exactly.',
          '<b>Same calculation in wavenumber form.</b> With √(1/<i>λ</i>) = <i>a</i>′(<i>Z</i> − 1) and <i>a</i>′ = √(3<i>R</i>/4) = 2.87 × 10<sup>3</sup> m<sup>−1/2</sup>:<br>1/<i>λ</i> = (2.87 × 10<sup>3</sup> × 28)<sup>2</sup> = 6.46 × 10<sup>9</sup> m<sup>−1</sup> ⇒ <i>λ</i> = 1.55 × 10<sup>−10</sup> m,<br>the same answer.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Identifying an Element from X-ray Spectrum',
        q: 'An unknown element produces a K<sub>α</sub> X-ray line at <i>λ</i> = 0.175 nm. Using Moseley’s law √<i>ν̄</i> = <i>a</i>′(<i>Z</i> − 1) with <i>a</i>′ = √(3<i>R</i>/4) = 2.87 × 10<sup>3</sup> m<sup>−1/2</sup>, find the atomic number and identify the element.',
        steps: [
          '<b>Step 1 — Compute the wavenumber.</b><br><i>ν̄</i> = 1/<i>λ</i> = 1/(0.175 × 10<sup>−9</sup> m) = 5.714 × 10<sup>9</sup> m<sup>−1</sup>.',
          '<b>Step 2 — Apply Moseley’s law in Rydberg form.</b> For the K<sub>α</sub> line, Moseley’s law is equivalent to<br><i>ν̄</i> = 1/<i>λ</i> = ¾<i>R</i>(<i>Z</i> − 1)<sup>2</sup>,<br>where <i>R</i> = 1.097 × 10<sup>7</sup> m<sup>−1</sup> is the Rydberg constant. Solving for <i>Z</i>:<br>(<i>Z</i> − 1)<sup>2</sup> = <i>ν̄</i>/(¾<i>R</i>) = (5.714 × 10<sup>9</sup>)/(0.75 × 1.097 × 10<sup>7</sup>) = (5.714 × 10<sup>9</sup>)/(8.228 × 10<sup>6</sup>) = 694.5.<br><i>Z</i> − 1 = √694.5 = 26.35 ⇒ <i>Z</i> ≈ 27.35 ≈ 27.',
          '<b>Step 3 — Identify the element.</b> <i>Z</i> = 27 is Cobalt (Co). The accepted K<sub>α</sub> wavelength for cobalt is approximately 178.9 pm, close to the given 175 pm, confirming the identification.',
        ],
        ans: '<i>Z</i> ≈ 27, element is Cobalt (Co).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] Calculate the minimum wavelength of X-rays produced by a 50 kV X-ray tube.',
            a: '<i>λ</i><sub>min</sub> = <i>hc</i>/(<i>eV</i>) = 1240/50,000 = 0.0248 nm = 24.8 pm.',
          },
          {
            q: '[JEE Main] The K<sub>α</sub> line of an element has wavelength 57.5 pm. Using Moseley’s law √<i>ν</i> = <i>a</i>(<i>Z</i> − 1) with <i>a</i> = 4.97 × 10<sup>7</sup> Hz<sup>1/2</sup>, find the atomic number of the element.',
            a: '<i>ν</i> = <i>c</i>/<i>λ</i> = 3 × 10<sup>8</sup>/(5.75 × 10<sup>−11</sup>) = 5.22 × 10<sup>18</sup> Hz. √<i>ν</i> = 2.284 × 10<sup>9</sup> Hz<sup>1/2</sup>. <i>Z</i> − 1 = 2.284 × 10<sup>9</sup>/(4.97 × 10<sup>7</sup>) = 46.0. <i>Z</i> = 47. The element is silver (Ag, <i>Z</i> = 47).',
          },
          {
            q: '[JEE Main] For the Lyman-alpha transition in hydrogen, the wavelength is 121.6 nm. For the corresponding K<sub>α</sub> X-ray transition in Cu (<i>Z</i> = 29), the wavelength is approximately 0.154 nm. Why is the X-ray wavelength so much shorter?',
            a: 'X-ray photons come from inner-shell transitions where an outer electron falls into a vacancy created by a high-energy incident electron. The energy gap is on the order of keV (not eV), so <i>hν</i> is several hundred times larger, and <i>λ</i> = <i>hc</i>/<i>E</i> several hundred times smaller. Quantitatively, the hydrogen Lyman-<i>α</i> energy is ¾ × 13.6 = 10.2 eV, and the K<sub>α</sub> energy scales as (<i>Z</i> − 1)<sup>2</sup>, i.e. by about 28<sup>2</sup> = 784 for copper (giving ≈ 8 keV), so the wavelength falls from 121.6 nm to about 0.155 nm, a factor of roughly 800.',
          },
          {
            q: '[JEE Advanced] Show that Moseley’s law √<i>ν</i> = <i>a</i>(<i>Z</i> − <i>b</i>) can be written as <i>λ</i> = <i>c</i>/[<i>a</i><sup>2</sup>(<i>Z</i> − <i>b</i>)<sup>2</sup>], and hence that <i>λ</i> ∝ 1/(<i>Z</i> − <i>b</i>)<sup>2</sup>.',
            a: '<i>ν</i> = <i>c</i>/<i>λ</i>, so √(<i>c</i>/<i>λ</i>) = <i>a</i>(<i>Z</i> − <i>b</i>). Squaring: <i>c</i>/<i>λ</i> = <i>a</i><sup>2</sup>(<i>Z</i> − <i>b</i>)<sup>2</sup>. Therefore <i>λ</i> = <i>c</i>/[<i>a</i><sup>2</sup>(<i>Z</i> − <i>b</i>)<sup>2</sup>]. Since <i>c</i> and <i>a</i> are constants, <i>λ</i> ∝ 1/(<i>Z</i> − <i>b</i>)<sup>2</sup>. (In wavenumber form, <i>λ</i> = 1/[<i>a</i>′<sup>2</sup>(<i>Z</i> − <i>b</i>)<sup>2</sup>] with <i>a</i>′ = <i>a</i>/√<i>c</i>.)',
          },
          {
            q: '[JEE Advanced] In a Moseley plot of √<i>ν</i> vs <i>Z</i> for K-series X-rays, the slope is 4.97 × 10<sup>7</sup> Hz<sup>1/2</sup> and <i>b</i> = 1. For two consecutive elements with atomic numbers <i>Z</i> and <i>Z</i> + 1, show that the ratio <i>ν</i><sub><i>Z</i>+1</sub>/<i>ν</i><sub><i>Z</i></sub> of their K<sub>α</sub> frequencies is [<i>Z</i>/(<i>Z</i> − 1)]<sup>2</sup>.',
            a: 'From Moseley: <i>ν</i><sub><i>Z</i></sub> ∝ (<i>Z</i> − <i>b</i>)<sup>2</sup> and <i>ν</i><sub><i>Z</i>+1</sub> ∝ (<i>Z</i> + 1 − <i>b</i>)<sup>2</sup>. Taking the ratio: <i>ν</i><sub><i>Z</i>+1</sub>/<i>ν</i><sub><i>Z</i></sub> = [(<i>Z</i> + 1 − <i>b</i>)/(<i>Z</i> − <i>b</i>)]<sup>2</sup>. With <i>b</i> = 1 this is exactly [<i>Z</i>/(<i>Z</i> − 1)]<sup>2</sup>. For large <i>Z</i> the ratio approaches 1 (consecutive elements have very similar X-ray frequencies).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 799–801 ─────────────────────────
  {
    n: 'C',
    title: 'The Franck-Hertz Experiment',
    extra: true,
    kalam: 'At 4.9 V, an electron has just enough kinetic energy to excite a mercury atom from its ground state to its first excited state.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter tells you Bohr postulated quantised energy levels, but the chapter does not show you the direct experimental proof. The Franck-Hertz experiment (1914) was that proof: James Franck and Gustav Hertz fired low-energy electrons through mercury vapour and found that the electrons lose energy in fixed quanta of approximately 4.9 eV—the first excited state of mercury. The experiment is a JEE Advanced topic that tests your ability to read the current-voltage graph and extract excitation energies.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Experimental setup.</b> Electrons are emitted from a hot cathode and accelerated toward a mesh anode by a variable voltage <i>V</i>. Beyond the anode, they reach a collecting plate held at a small negative (retarding) potential, so that electrons which have lost energy in inelastic collisions cannot reach it. The plate current <i>I</i> is measured as a function of accelerating voltage <i>V</i>.',
      },
      {
        t: 'p',
        html: '<b>Observations.</b> As <i>V</i> increases from zero:<br>• <i>I</i> rises initially—more electrons reach the collector.<br>• At <i>V</i> ≈ 4.9 V for mercury vapour, <i>I</i> drops sharply.<br>• <i>I</i> recovers and rises again, then drops at multiples: <i>V</i> ≈ 9.8 V, 14.7 V, … (integer multiples of 4.9 V).',
      },
      {
        t: 'p',
        html: '<b>Physical interpretation.</b> At 4.9 V, an electron has just enough kinetic energy to excite a mercury atom from its ground state to its first excited state. After the inelastic collision, the electron has lost 4.9 eV and cannot overcome the small negative retarding potential on the collector—so <i>I</i> drops. At multiples of 4.9 V, electrons can make two, three, … successive inelastic collisions, producing the periodic dips.',
      },
      {
        t: 'p',
        html: '<b>Key formula:</b><br><i>eV</i><sub><i>n</i></sub> = <i>n</i> · Δ<i>E</i>, <i>n</i> = 1, 2, 3, …<br>where Δ<i>E</i> is the excitation energy of the first excited state (for Hg, Δ<i>E</i> = 4.9 eV). The spacing between consecutive current peaks is Δ<i>V</i> = Δ<i>E</i>/<i>e</i>.',
      },
      {
        t: 'p',
        html: '<b>Wavelength of emitted photon.</b> After excitation, the atom de-excites by emitting a photon:<br><i>λ</i> = <i>hc</i>/Δ<i>E</i>.<br>For Hg: <i>λ</i> = (1240 eV · nm)/(4.9 eV) = 253 nm. This is in the ultraviolet.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Reading the Franck-Hertz Graph',
        q: 'In a Franck-Hertz experiment with mercury vapour, the first current peak occurs at an accelerating voltage of 4.9 V. (a) What is the excitation energy of the mercury atom’s first excited state? (b) What is the wavelength of the photon emitted when the atom de-excites?',
        steps: [
          '<b>(a) Excitation energy:</b> The electron charge is <i>e</i> = 1.6 × 10<sup>−19</sup> C. The first peak means electrons have just enough energy to excite one mercury atom:<br>Δ<i>E</i> = <i>eV</i><sub>1</sub> = (1.6 × 10<sup>−19</sup> C) × (4.9 V) = 7.84 × 10<sup>−19</sup> J.<br>In electron-volts, Δ<i>E</i> = 4.9 eV directly.',
          '<b>(b) Wavelength of emitted photon:</b><br><i>λ</i> = <i>hc</i>/Δ<i>E</i> = (1240 eV · nm)/(4.9 eV) = 253.1 nm.',
          '<b>Check.</b> This is the observed Hg resonance line (253.7 nm), confirming Bohr’s prediction that atoms have discrete excited states. The agreement between the electrical measurement (4.9 V) and the spectroscopic measurement (253 nm) was among the first direct confirmations of quantised energy levels.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Neon vs Mercury in Franck-Hertz',
        q: 'In a Franck-Hertz tube filled with neon gas, the first current peak occurs at approximately 19 V. In a mercury tube it occurs at 4.9 V. Explain this difference and find the wavelength of the photon emitted when a neon atom de-excites.',
        steps: [
          '<b>Explanation.</b> Different atoms have different energy level structures. The first excited state of mercury lies about 4.9 eV above the ground state, while the neon levels excited in the tube lie about 19 eV above the ground state. The Franck-Hertz voltage spacing equals the excitation energy (in eV) directly—hence the different peak voltages.',
          '<b>Wavelength for neon:</b><br><i>λ</i> = <i>hc</i>/Δ<i>E</i> = (1240 eV · nm)/(19 eV) ≈ 65.3 nm.',
          '<b>Check.</b> 1240/19 ≈ 65 nm is the photon wavelength if the atom dropped straight back to the ground state in a single step; it lies in the extreme ultraviolet. Real neon atoms usually do not do this: the excited atom decays in a cascade through intermediate levels (the lowest excited levels of neon lie near 16.6–16.8 eV). The first step of the cascade, from the levels near 19 eV down to these, releases only about 2 eV, which corresponds to orange-red light (1240/2 ≈ 620 nm), and this is why a neon Franck-Hertz tube glows orange; the final drop to the ground state (about 16.7 eV) is again extreme ultraviolet.',
          'For JEE purposes, the key formula <i>λ</i> = <i>hc</i>/Δ<i>E</i> = 1240/Δ<i>E</i> (with Δ<i>E</i> in eV and <i>λ</i> in nm) is what is expected.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] In a Franck-Hertz experiment with mercury, peaks occur at 4.9 V, 9.8 V, 14.7 V. What is the excitation energy of mercury?',
            a: 'The spacing between peaks is 9.8 − 4.9 = 4.9 V. Since <i>eV</i> = Δ<i>E</i>, the excitation energy is 4.9 × 1.6 × 10<sup>−19</sup> = 7.84 × 10<sup>−19</sup> J = 4.9 eV.',
          },
          {
            q: '[NEET] Why is the collecting plate in a Franck-Hertz experiment held at a small negative potential with respect to the anode?',
            a: 'The collecting plate is held at a small negative potential (typically −0.5 to −1 V) to ensure that only electrons that have NOT lost energy in inelastic collisions can reach it. An electron that has made an inelastic collision and lost energy to mercury will be stopped by the retarding potential and won’t reach the plate—creating the current drop that signals an inelastic event.',
          },
          {
            q: '[JEE Main] The first excitation energy of helium is approximately 20 eV. At approximately what voltage would you expect the first current peak in a helium-filled Franck-Hertz tube?',
            a: 'The first current peak occurs when the accelerating voltage equals the first excitation energy (in volts). So the peak should appear at approximately 20 V.',
          },
          {
            q: '[JEE Advanced] In a Franck-Hertz experiment, electrons are accelerated through mercury vapour. If the accelerating voltage is 9.8 V, can an electron that has made one inelastic collision make another? Explain.',
            a: 'Yes, just barely. After one inelastic collision at 9.8 V the electron has 9.8 − 4.9 = 4.9 eV of kinetic energy left, which is exactly the excitation energy of mercury, so it can excite a second atom (at threshold). That is why the second drop in current appears at 2 × 4.9 = 9.8 V: an electron that has made two inelastic collisions is left with essentially zero kinetic energy and cannot overcome the retarding potential to reach the plate.',
          },
          {
            q: '[JEE Advanced] Show that the current peaks in a Franck-Hertz experiment are equally spaced in voltage, and that the spacing equals the excitation energy divided by <i>e</i>.',
            a: 'The <i>n</i>-th peak occurs when <i>eV</i><sub><i>n</i></sub> = <i>n</i>Δ<i>E</i>, so <i>V</i><sub><i>n</i></sub> = <i>n</i>Δ<i>E</i>/<i>e</i>. The spacing is <i>V</i><sub><i>n</i>+1</sub> − <i>V</i><sub><i>n</i></sub> = (<i>n</i> + 1)Δ<i>E</i>/<i>e</i> − <i>n</i>Δ<i>E</i>/<i>e</i> = Δ<i>E</i>/<i>e</i>, a constant. QED.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 802–805 ─────────────────────────
  {
    n: 'D',
    title: 'Laser Physics: Population Inversion and Stimulated Emission',
    extra: true,
    kalam: 'Laser light is fundamentally different—it is coherent, monochromatic, and collimated because it comes from stimulated emission rather than spontaneous emission.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter’s Bohr model describes spontaneous emission: an excited atom drops to a lower level and emits a photon in a random direction with random phase. Laser light is fundamentally different—it is coherent, monochromatic, and collimated because it comes from stimulated emission rather than spontaneous emission. The physics of population inversion (getting more atoms into an excited state than in the ground state) is the key enabling mechanism, and it connects directly to Bohr’s energy-level picture. JEE Main has asked laser basics; JEE Advanced has asked about Einstein coefficients.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'table',
        title: 'Three radiative processes (Einstein, 1917)',
        head: ['Process', 'Description', 'Rate'],
        rows: [
          ['Absorption', 'Ground state atom absorbs photon and goes to excited state', '<i>R</i><sub>12</sub> = <i>B</i><sub>12</sub><i>ρ</i>(<i>ν</i>)<i>N</i><sub>1</sub>'],
          ['Spontaneous emission', 'Excited atom emits photon spontaneously', '<i>R</i><sub>21</sub><sup>sp</sup> = <i>A</i><sub>21</sub><i>N</i><sub>2</sub>'],
          ['Stimulated emission', 'Excited atom, hit by a photon, emits a photon identical in phase, direction, and wavelength', '<i>R</i><sub>21</sub><sup>st</sup> = <i>B</i><sub>21</sub><i>ρ</i>(<i>ν</i>)<i>N</i><sub>2</sub>'],
        ],
      },
      {
        t: 'p',
        html: 'Here <i>N</i><sub>1</sub> and <i>N</i><sub>2</sub> are the populations (number per unit volume) of the lower and upper levels, and <i>ρ</i>(<i>ν</i>) is the radiation energy density.',
      },
      {
        t: 'p',
        html: '<b>Einstein coefficients satisfy:</b><br><i>B</i><sub>12</sub> = <i>B</i><sub>21</sub>, <i>A</i><sub>21</sub>/<i>B</i><sub>21</sub> = 8π<i>hν</i><sup>3</sup>/<i>c</i><sup>3</sup>.',
      },
      {
        t: 'p',
        html: '<b>Population inversion.</b> At thermal equilibrium, <i>N</i><sub>2</sub> < <i>N</i><sub>1</sub> (Boltzmann distribution: higher energy levels are less populated). For lasing, we need <i>N</i><sub>2</sub> > <i>N</i><sub>1</sub>—population inversion—which requires non-thermal pumping (electrical discharge, optical pumping, chemical reaction). This is not achievable in a two-level system; minimum three levels are needed.',
      },
      {
        t: 'p',
        html: '<b>Laser action conditions:</b><br>1. Population inversion must be maintained (<i>N</i><sub>2</sub> > <i>N</i><sub>1</sub>).<br>2. The upper laser level must have a longer lifetime (slow spontaneous decay) so it can build up population.<br>3. The cavity mirrors provide optical feedback (amplified stimulated emission builds coherently).',
      },
      {
        t: 'table',
        title: 'Common laser systems',
        head: ['Laser', 'Wavelength', 'Pumping method', 'Type'],
        rows: [
          ['He-Ne', '632.8 nm', 'Electrical discharge', 'Gas'],
          ['Ruby', '694.3 nm', 'Optical flash', 'Solid'],
          ['CO<sub>2</sub>', '10.6 μm', 'Electrical discharge', 'Gas'],
          ['Semiconductor', '∼900 nm', 'Electrical injection', 'Solid'],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Ruby Laser Transition',
        q: 'A ruby laser has an active medium of Cr<sup>3+</sup> ions in Al<sub>2</sub>O<sub>3</sub>. The upper laser level is metastable (lifetime ∼ 3 ms) and decays to the ground state by emitting a photon of wavelength 694.3 nm. (a) Calculate the photon energy. (b) Explain why a metastable upper level is necessary for laser action.',
        steps: [
          '<b>(a) Photon energy:</b><br><i>E</i> = <i>hc</i>/<i>λ</i> = (1240 eV · nm)/(694.3 nm) = 1.786 eV.',
          '<b>(b) Why metastable upper level?</b> For population inversion, atoms must accumulate in the upper laser level faster than they leave it. If the upper level had a very short lifetime (like ∼ 10<sup>−8</sup> s, typical of most excited states), atoms would spontaneously emit before enough could build up—<i>N</i><sub>2</sub> would always be less than <i>N</i><sub>1</sub>. A metastable level with lifetime ∼ 10<sup>−3</sup> s gives atoms time to accumulate, and when a seed photon passes through, stimulated emission can dominate before spontaneous emission drains the population.',
          '<b>Check.</b> The ratio of lifetimes (metastable/normal) ∼ 10<sup>5</sup>, which means spontaneous emission is suppressed relative to the accumulation process. This is the engineering design of most optically pumped lasers.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Einstein A and B Coefficients',
        q: 'Show that <i>A</i><sub>21</sub>/<i>B</i><sub>21</sub> = 8π<i>hν</i><sup>3</sup>/<i>c</i><sup>3</sup> using thermodynamic equilibrium.',
        steps: [
          '<b>Step 1 — Set up equilibrium condition.</b> In thermal equilibrium at temperature <i>T</i>, the rates of upward and downward transitions must be equal:<br><i>B</i><sub>12</sub><i>ρ</i>(<i>ν</i>)<i>N</i><sub>1</sub> = (<i>A</i><sub>21</sub> + <i>B</i><sub>21</sub><i>ρ</i>(<i>ν</i>))<i>N</i><sub>2</sub>.<br>Therefore:<br><i>ρ</i>(<i>ν</i>) = <i>A</i><sub>21</sub>/(<i>B</i><sub>12</sub>(<i>N</i><sub>1</sub>/<i>N</i><sub>2</sub>) − <i>B</i><sub>21</sub>).',
          '<b>Step 2 — Use the Boltzmann distribution.</b><br><i>N</i><sub>2</sub>/<i>N</i><sub>1</sub> = (<i>g</i><sub>2</sub>/<i>g</i><sub>1</sub>) exp(−<i>hν</i>/(<i>k</i><sub>B</sub><i>T</i>)),<br>where <i>g</i> are degeneracy factors. For simplicity take <i>g</i><sub>2</sub> = <i>g</i><sub>1</sub> (or absorb into <i>B</i> coefficients).<br><i>N</i><sub>1</sub>/<i>N</i><sub>2</sub> = exp(<i>hν</i>/(<i>k</i><sub>B</sub><i>T</i>)).',
          '<b>Step 3 — Compare with Planck’s law.</b> Planck’s law for radiation energy density is:<br><i>ρ</i>(<i>ν</i>) = (8π<i>hν</i><sup>3</sup>/<i>c</i><sup>3</sup>)/(exp(<i>hν</i>/(<i>k</i><sub>B</sub><i>T</i>)) − 1).<br>Substitute <i>N</i><sub>1</sub>/<i>N</i><sub>2</sub> = exp(<i>hν</i>/(<i>k</i><sub>B</sub><i>T</i>)) into the rate equation:<br><i>ρ</i>(<i>ν</i>) = <i>A</i><sub>21</sub>/(<i>B</i><sub>12</sub> exp(<i>hν</i>/(<i>k</i><sub>B</sub><i>T</i>)) − <i>B</i><sub>21</sub>).<br>For this to match Planck’s law, we need:<br><i>B</i><sub>12</sub> = <i>B</i><sub>21</sub>, and <i>A</i><sub>21</sub>/<i>B</i><sub>21</sub> = 8π<i>hν</i><sup>3</sup>/<i>c</i><sup>3</sup>.',
          '<b>Units check.</b> <i>h</i> has units J·s; <i>ν</i> in s<sup>−1</sup>; <i>c</i> in m s<sup>−1</sup>. The right side <i>hν</i><sup>3</sup>/<i>c</i><sup>3</sup> has units (J·s)(s<sup>−3</sup>)/(m<sup>3</sup> s<sup>−3</sup>) = J s m<sup>−3</sup>, which is energy density per unit frequency (J m<sup>−3</sup> Hz<sup>−1</sup>), the same units as <i>ρ</i>(<i>ν</i>). <i>A</i><sub>21</sub> has units s<sup>−1</sup>. Since the stimulated rate per atom is <i>B</i><sub>21</sub><i>ρ</i>(<i>ν</i>) and must also have units s<sup>−1</sup>, [<i>B</i><sub>21</sub>] = s<sup>−1</sup>/(J s m<sup>−3</sup>) = m<sup>3</sup> J<sup>−1</sup> s<sup>−2</sup>. Then <i>A</i><sub>21</sub>/<i>B</i><sub>21</sub> has units J s m<sup>−3</sup>, matching <i>hν</i><sup>3</sup>/<i>c</i><sup>3</sup>.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A laser emits at 600 nm. What is the energy of each photon in eV?',
            a: '<i>E</i> = 1240/600 = 2.07 eV.',
          },
          {
            q: '[NEET] Which of the following is NOT a characteristic of laser light: (a) monochromatic, (b) coherent, (c) divergent, (d) collimated?',
            a: '(c) Divergent. Laser light is collimated (parallel beams), not divergent. It can spread over long distances (diffraction-limited) but is still far more directional than ordinary light.',
          },
          {
            q: '[JEE Main] In a He-Ne laser, the active medium is a mixture of helium and neon gases. Neon atoms are excited by collision with excited helium atoms. Why is this two-step pumping more efficient than direct electrical excitation of neon?',
            a: 'Helium has a metastable state at ∼20.6 eV that is long-lived and efficiently populated by electron impact. Neon has an excited state at ∼20.6 eV, very close to the He metastable energy. Resonant energy transfer (He* + Ne → He + Ne*) is highly efficient because the energy match is excellent. Direct excitation of neon by electron impact is less efficient because electrons lose energy to many other processes. The two-step scheme effectively concentrates energy into the Ne upper laser level.',
          },
          {
            q: '[JEE Advanced] Show that in a two-level system it is impossible to achieve population inversion by optical pumping alone.',
            a: 'In a two-level system the pump light that excites atoms from level 1 to level 2 also stimulates the reverse transition. With <i>B</i><sub>12</sub> = <i>B</i><sub>21</sub> (equal degeneracies), the net upward rate is <i>B</i><sub>12</sub><i>ρ</i>(<i>ν</i>)(<i>N</i><sub>1</sub> − <i>N</i><sub>2</sub>) − <i>A</i><sub>21</sub><i>N</i><sub>2</sub>. As the pumping is made stronger, <i>N</i><sub>2</sub> rises toward <i>N</i><sub>1</sub> and the net absorption falls to zero, so <i>N</i><sub>2</sub> can at best equal <i>N</i><sub>1</sub> but never exceed it. (Equivalently, at thermal equilibrium <i>N</i><sub>2</sub>/<i>N</i><sub>1</sub> = exp(−<i>hν</i>/(<i>k</i><sub>B</sub><i>T</i>)) < 1 for any positive temperature.) A minimum of three levels is needed: pump from 1 to a higher level 3, let atoms decay non-radiatively to a metastable level 2, and so build up population in 2 while level 1 is being depleted.',
          },
          {
            q: '[JEE Advanced] The population of the upper laser level in a certain laser is <i>N</i><sub>2</sub> = 10<sup>16</sup> m<sup>−3</sup> and the lower level is <i>N</i><sub>1</sub> = 10<sup>18</sup> m<sup>−3</sup>. If the spontaneous emission lifetime is 10<sup>−8</sup> s and the stimulated emission cross-section is 10<sup>−20</sup> m<sup>2</sup>, at what photon flux (photons per m<sup>2</sup> per second) do stimulated and spontaneous emission rates become equal?',
            a: 'Spontaneous emission rate: <i>R</i><sub>sp</sub> = <i>A</i><sub>21</sub><i>N</i><sub>2</sub> = <i>N</i><sub>2</sub>/<i>τ</i> = 10<sup>16</sup>/10<sup>−8</sup> = 10<sup>24</sup> s<sup>−1</sup> per m<sup>3</sup>.<br>Stimulated emission rate per photon flux <i>φ</i> (photons m<sup>−2</sup> s<sup>−1</sup>): <i>R</i><sub>st</sub> = <i>σφN</i><sub>2</sub> (units: m<sup>−2</sup> s<sup>−1</sup> × m<sup>2</sup> × m<sup>−3</sup> = s<sup>−1</sup> m<sup>−3</sup>).<br>Set <i>R</i><sub>st</sub> = <i>R</i><sub>sp</sub>:<br><i>σφN</i><sub>2</sub> = <i>N</i><sub>2</sub>/<i>τ</i> ⇒ <i>φ</i> = 1/(<i>στ</i>) = 1/(10<sup>−20</sup> × 10<sup>−8</sup>) = 10<sup>28</sup> photons m<sup>−2</sup> s<sup>−1</sup>.',
          },
        ],
      },
    ],
  },
];
