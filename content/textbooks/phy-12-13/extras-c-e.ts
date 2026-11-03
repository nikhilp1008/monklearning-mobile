import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 13, Additional Topics C to E, word for word from the Class 12
 * Physics Master Reference: C Beta Decay Energy Balance and Electron Capture
 * (pp. 855 to 858; its practice answers 4 and 5 run onto the top of p. 858),
 * D The Semi-Empirical Mass Formula (Liquid Drop Model) (pp. 858 to 862; its
 * practice answers 4 and 5 sit at the top of p. 862) and E Nuclear Reaction
 * Kinematics and Threshold Energy (pp. 862 to 864, the chapter’s last page).
 * Each addendum prints its own practice problems and answers, which are its
 * Practice part. These pages print no drawings: every equation is typeset,
 * and D’s list of the five terms is a table.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic C · pp. 855–858 ─────────────────────────
  {
    n: 'C',
    title: 'Beta Decay Energy Balance and Electron Capture',
    extra: true,
    kalam: 'The neutrino carries away variable energy, which is why beta particles have a continuous energy spectrum.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 03 gives the beta-minus decay equation (<sup><i>A</i></sup><sub><i>Z</i></sub><i>X</i> → <sup><i>A</i></sup><sub><i>Z</i>+1</sub><i>Y</i> + <i>e</i><sup>−</sup> + <i>ν̄</i><sub>e</sub>) and its beta-plus partner, and notes the neutrino. JEE Advanced needs the full energy bookkeeping: the energy condition for beta-plus decay (emitting a positron), electron capture (the competing process), and the energy available in each case. The neutrino carries away variable energy, which is why beta particles have a continuous energy spectrum rather than the mono-energetic alpha particles.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Beta-minus decay (β<sup>−</sup>).</b> <i>n</i> → <i>p</i> + <i>e</i><sup>−</sup> + <i>ν̄</i><sub>e</sub> inside the nucleus.<br><i>Q</i><sub>β−</sub> = [<i>m</i>(<sup><i>A</i></sup><sub><i>Z</i></sub>X) − <i>m</i>(<sup><i>A</i></sup><sub><i>Z</i>+1</sub>Y)]<i>c</i><sup>2</sup>.<br>The parent atom has <i>Z</i> electrons and the daughter atom has <i>Z</i> + 1 electrons. The electron emitted is created at the moment of decay — it was not present in the parent nucleus — and it ends up as the extra electron of the neutral daughter atom, so the atomic-mass comparison automatically accounts for the emitted electron.',
      },
      {
        t: 'p',
        html: '<b>Beta-plus decay (β<sup>+</sup>).</b> <i>p</i> → <i>n</i> + <i>e</i><sup>+</sup> + <i>ν</i><sub>e</sub> inside the nucleus.<br><i>Q</i><sub>β+</sub> = [<i>m</i>(<sup><i>A</i></sup><sub><i>Z</i></sub>X) − <i>m</i>(<sup><i>A</i></sup><sub><i>Z</i>−1</sub>Y) − 2<i>m</i><sub>e</sub>]<i>c</i><sup>2</sup>.<br>The extra −2<i>m</i><sub>e</sub> arises because: (i) the daughter atom has only <i>Z</i> − 1 electrons (while the parent has <i>Z</i>), and (ii) a positron of mass <i>m</i><sub>e</sub> is created. In effect, we must supply 2<i>m</i><sub>e</sub><i>c</i><sup>2</sup> = 1.022 MeV for the positron to exist. Positron emission is therefore possible only if <i>Q</i><sub>β+</sub> > 0, that is, if the atomic-mass energy difference [<i>m</i>(<i>X</i>) − <i>m</i>(<i>Y</i>)]<i>c</i><sup>2</sup> exceeds 2<i>m</i><sub>e</sub><i>c</i><sup>2</sup> = 1.022 MeV. If this difference lies between 0 and 1.022 MeV (so that <i>Q</i><sub>β+</sub> < 0), positron emission is forbidden and only electron capture can occur.',
      },
      {
        t: 'p',
        html: '<b>Electron capture (EC).</b> The nucleus captures an orbital electron (usually from the K-shell):<br><i>Q</i><sub>EC</sub> = [<i>m</i>(<sup><i>A</i></sup><sub><i>Z</i></sub>X) − <i>m</i>(<sup><i>A</i></sup><sub><i>Z</i>−1</sub>Y)]<i>c</i><sup>2</sup>.<br>No positron mass needs to be created, so <i>Q</i><sub>EC</sub> = <i>Q</i><sub>β+</sub> + 2<i>m</i><sub>e</sub><i>c</i><sup>2</sup> (neglecting the small binding energy of the captured electron). Electron capture is always allowed when β<sup>+</sup> is allowed, and may occur even when β<sup>+</sup> is forbidden (if −2<i>m</i><sub>e</sub><i>c</i><sup>2</sup> < <i>Q</i><sub>β+</sub> < 0). The daughter atom is left neutral but with a vacancy in an inner shell (usually K), which is filled with the emission of X-rays or Auger electrons.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Beta-Plus Q-Value and the 1.022 MeV Threshold',
        q: 'Calculate the Q-value for β<sup>+</sup> decay of <sup>13</sup>N → <sup>13</sup>C + <i>e</i><sup>+</sup> + <i>ν</i><sub>e</sub>. Given: <i>m</i>(<sup>13</sup>N) = 13.005739 u, <i>m</i>(<sup>13</sup>C) = 13.003355 u, <i>m</i><sub>e</sub> = 0.000549 u.',
        steps: [
          '<b>Step 1 — Beta-plus Q-value (with the 2<i>m</i><sub>e</sub> correction).</b><br>Δ<i>m</i> = <i>m</i>(<sup>13</sup>N) − <i>m</i>(<sup>13</sup>C) − 2<i>m</i><sub>e</sub><br>= 13.005739 − 13.003355 − 2(0.000549)<br>= 0.002384 − 0.001098 = 0.001286 u.<br><i>Q</i><sub>β+</sub> = 0.001286 × 931.5 = 1.198 MeV.',
          '<b>Step 2 — Check the threshold.</b> The atomic mass difference, 0.002384 u, exceeds 2<i>m</i><sub>e</sub> = 0.001098 u; equivalently <i>Q</i><sub>β+</sub> = 1.198 MeV > 0. Positron emission is therefore allowed. The maximum kinetic energy of the positron is <i>Q</i><sub>β+</sub> = 1.198 MeV (neglecting recoil).',
          '<b>Step 3 — Electron capture Q-value for comparison.</b><br><i>Q</i><sub>EC</sub> = [<i>m</i>(<sup>13</sup>N) − <i>m</i>(<sup>13</sup>C)] × 931.5<br>= (13.005739 − 13.003355) × 931.5 = 0.002384 × 931.5 = 2.221 MeV.',
        ],
        ans: '<i>Q</i><sub>β+</sub> = 1.20 MeV. Note that <i>Q</i><sub>EC</sub> = <i>Q</i><sub>β+</sub> + 1.022 MeV = 2.22 MeV, because no positron mass needs to be supplied in EC.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — The Continuous Beta Spectrum',
        q: 'The maximum kinetic energy of the beta particle in the decay of <sup>64</sup>Cu is <i>E</i><sub>β</sub><sup>max</sup> = 0.579 MeV (for β<sup>−</sup>) and <i>E</i><sub>β+</sub><sup>max</sup> = 0.653 MeV (for β<sup>+</sup>). The nucleus also decays by electron capture. Given <i>m</i>(<sup>64</sup>Cu) = 63.929764 u, <i>m</i>(<sup>64</sup>Zn) = 63.929142 u, <i>m</i>(<sup>64</sup>Ni) = 63.927966 u, calculate the Q-values for all three modes and verify the energy bookkeeping.',
        steps: [
          '<b>Step 1 — Q-value for β<sup>−</sup> decay to <sup>64</sup>Zn.</b><br>Δ<i>m</i> = <i>m</i>(<sup>64</sup>Cu) − <i>m</i>(<sup>64</sup>Zn) = 63.929764 − 63.929142 = 0.000622 u.<br><i>Q</i><sub>β−</sub> = 0.000622 × 931.5 = 0.579 MeV.',
          '<b>Step 2 — Q-value for β<sup>+</sup> decay to <sup>64</sup>Ni.</b><br>Δ<i>m</i> = <i>m</i>(<sup>64</sup>Cu) − <i>m</i>(<sup>64</sup>Ni) − 2<i>m</i><sub>e</sub><br>= 63.929764 − 63.927966 − 2(0.000549)<br>= 0.001798 − 0.001098 = 0.000700 u.<br><i>Q</i><sub>β+</sub> = 0.000700 × 931.5 = 0.652 MeV.',
          '<b>Step 3 — Q-value for electron capture (to <sup>64</sup>Ni).</b><br><i>Q</i><sub>EC</sub> = [<i>m</i>(<sup>64</sup>Cu) − <i>m</i>(<sup>64</sup>Ni)]<i>c</i><sup>2</sup> = 0.001798 × 931.5 = 1.67 MeV.',
          '<b>Step 4 — Energy balance.</b> The endpoint (maximum) energy of a beta spectrum equals the Q-value (recoil neglected): at the endpoint the neutrino carries almost no energy, while at lower beta energies the neutrino takes the remainder. This variable sharing is why the beta spectrum is continuous.<br>• For β<sup>−</sup>: <i>E</i><sub>β</sub><sup>max</sup> = 0.579 MeV ≈ <i>Q</i><sub>β−</sub> = 0.579 MeV.<br>• For β<sup>+</sup>: <i>E</i><sub>β+</sub><sup>max</sup> = 0.653 MeV ≈ <i>Q</i><sub>β+</sub> = 0.652 MeV. The 2<i>m</i><sub>e</sub><i>c</i><sup>2</sup> = 1.022 MeV (the positron created plus the electron the parent atom has over the daughter) has already been subtracted in <i>Q</i><sub>β+</sub>, so <i>Q</i><sub>β+</sub> is the energy shared by the positron and the neutrino.<br>• For EC: <i>Q</i><sub>EC</sub> = 1.67 MeV. No charged particle is emitted with kinetic energy, so the neutrino carries essentially all of it (the daughter atom’s recoil is negligible).',
        ],
        ans: 'All three decay modes are energetically allowed in <sup>64</sup>Cu, which is why it decays by all three (a classic example). <i>Q</i><sub>β−</sub> ≈ 0.58 MeV, <i>Q</i><sub>β+</sub> ≈ 0.65 MeV, <i>Q</i><sub>EC</sub> ≈ 1.67 MeV.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why does β<sup>+</sup> decay require the atomic-mass energy difference [<i>m</i>(<i>X</i>) − <i>m</i>(<i>Y</i>)]<i>c</i><sup>2</sup> to exceed 1.022 MeV, while electron capture is allowed even when this difference is less than 1.022 MeV?',
            a: 'β<sup>+</sup> decay creates a positron, and the parent atom also has one more electron than the daughter atom; together these cost 2<i>m</i><sub>e</sub><i>c</i><sup>2</sup> = 1.022 MeV, which must be available from the atomic-mass difference. In electron capture no positron is created — the electron is already present in the atom — so (apart from the small binding energy of the captured electron, a few keV) EC is allowed whenever <i>Q</i><sub>EC</sub> = [<i>m</i>(<i>X</i>) − <i>m</i>(<i>Y</i>)]<i>c</i><sup>2</sup> > 0, i.e. whenever <i>Q</i><sub>β+</sub> > −1.022 MeV. In other words, EC needs only <i>m</i>(parent atom) > <i>m</i>(daughter atom), whereas β<sup>+</sup> needs <i>m</i>(parent atom) > <i>m</i>(daughter atom) + 2<i>m</i><sub>e</sub>.',
          },
          {
            q: '[NEET] The atomic mass of <sup>11</sup>C is 11.011434 u and that of <sup>11</sup>B is 11.009305 u. Can <sup>11</sup>C undergo β<sup>+</sup> decay? Calculate the Q-value. (<i>m</i><sub>e</sub> = 0.000549 u)',
            a: 'Δ<i>m</i> = <i>m</i>(<sup>11</sup>C) − <i>m</i>(<sup>11</sup>B) − 2<i>m</i><sub>e</sub> = 11.011434 − 11.009305 − 2(0.000549) = 0.002129 − 0.001098 = 0.001031 u. <i>Q</i><sub>β+</sub> = 0.001031 × 931.5 = 0.960 MeV > 0, so yes: <sup>11</sup>C can undergo β<sup>+</sup> decay (it is a standard positron emitter). Equivalently, the atomic-mass energy difference, 0.002129 × 931.5 = 1.98 MeV, exceeds 1.022 MeV. Electron capture is also possible, with <i>Q</i><sub>EC</sub> = 0.002129 × 931.5 = 1.98 MeV.',
          },
          {
            q: '[JEE Main] In the decay <sup>64</sup>Cu → <sup>64</sup>Ni + <i>e</i><sup>+</sup> + <i>ν</i><sub>e</sub>, if the positron carries 0.5 MeV kinetic energy, what is the neutrino energy? (<i>Q</i><sub>β+</sub> = 0.652 MeV, from worked example 2)',
            a: '<i>Q</i><sub>β+</sub> = 0.652 MeV (worked example 2). Energy conservation: <i>K</i><sub>e+</sub> + <i>E</i><sub>ν</sub> + <i>K</i><sub>recoil</sub> = <i>Q</i><sub>β+</sub>. Neglecting recoil: <i>E</i><sub>ν</sub> = 0.652 − 0.5 = 0.152 MeV.',
          },
          {
            q: '[JEE Advanced] Show that the recoil kinetic energy of the daughter nucleus in beta decay is negligible (of the order of tens of eV for MeV beta particles) compared to the beta and neutrino energies. (Take a daughter of mass number about 64.)',
            a: 'The daughter’s momentum balances the combined momentum of the beta particle and the neutrino, each of order 1 MeV/<i>c</i> for MeV-scale decays; take <i>p</i><sub>d</sub> ≈ <i>p</i><sub>β</sub> for an order-of-magnitude estimate. For <i>K</i><sub>β</sub> ∼ 1 MeV the electron is relativistic:<br><i>p</i><sub>β</sub><i>c</i> = √(<i>K</i><sub>β</sub><sup>2</sup> + 2<i>K</i><sub>β</sub><i>m</i><sub>e</sub><i>c</i><sup>2</sup>) = √(1 + 1.022) MeV ≈ 1.4 MeV.<br>The daughter mass energy is <i>M</i><sub>d</sub><i>c</i><sup>2</sup> ≈ 64 × 931.5 MeV ≈ 5.96 × 10<sup>4</sup> MeV, so<br><i>K</i><sub>daughter</sub> = (<i>pc</i>)<sup>2</sup>/(2<i>M</i><sub>d</sub><i>c</i><sup>2</sup>) ≈ (1.4 MeV)<sup>2</sup>/(2 × 5.96 × 10<sup>4</sup> MeV) ≈ 1.7 × 10<sup>−5</sup> MeV ≈ 17 eV,<br>negligible compared with MeV-scale beta energies.',
          },
          {
            q: '[JEE Advanced] The Q-value for the β<sup>+</sup> decay of <sup>64</sup>Cu is 0.652 MeV. What fraction of this energy goes to the positron kinetic energy at maximum, assuming the neutrino carries zero energy and recoil is negligible?',
            a: 'At maximum positron energy, the neutrino carries zero energy and recoil is negligible. So <i>K</i><sub>e+</sub><sup>max</sup> = <i>Q</i><sub>β+</sub> = 0.652 MeV. The fraction is 0.652/0.652 = 1 (i.e., 100% of <i>Q</i><sub>β+</sub>). In reality, the maximum is slightly less due to recoil, but the fraction is > 99%.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 858–862 ─────────────────────────
  {
    n: 'D',
    title: 'The Semi-Empirical Mass Formula (Liquid Drop Model)',
    extra: true,
    kalam: 'JEE Advanced asks for quantitative binding-energy calculations that go beyond the curve’s rough shape to individual terms.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 02 draws the binding-energy-per-nucleon curve and explains its qualitative shape. JEE Advanced asks for quantitative binding-energy calculations that go beyond the curve’s rough shape to individual terms. The semi-empirical mass formula (SEMF), also called the Weizsäcker formula, expresses the nuclear binding energy as a sum of five terms — volume, surface, Coulomb, asymmetry, and pairing — each with a clear physical origin in the liquid-drop model. With this formula you can compute binding energies from scratch and see exactly why the curve has its peak.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The semi-empirical mass formula.</b> For a nucleus with <i>Z</i> protons and <i>N</i> = <i>A</i> − <i>Z</i> neutrons:<br><i>B</i>(<i>A</i>, <i>Z</i>) = <i>a</i><sub>v</sub><i>A</i> − <i>a</i><sub>s</sub><i>A</i><sup>2/3</sup> − <i>a</i><sub>c</sub><i>Z</i><sup>2</sup>/<i>A</i><sup>1/3</sup> − <i>a</i><sub>a</sub>(<i>A</i> − 2<i>Z</i>)<sup>2</sup>/<i>A</i> + <i>δ</i>(<i>A</i>, <i>Z</i>).',
      },
      {
        t: 'table',
        title: 'The five terms',
        head: ['Term', 'Physical origin', 'Sign', 'Dependence'],
        rows: [
          ['Volume', 'Each nucleon attracts only its nearest neighbours (saturation)', '+', '<i>a</i><sub>v</sub><i>A</i>'],
          ['Surface', 'Nucleons at surface have fewer bonds', '−', '<i>a</i><sub>s</sub><i>A</i><sup>2/3</sup>'],
          ['Coulomb', 'Proton–proton electrostatic repulsion', '−', '<i>a</i><sub>c</sub><i>Z</i><sup>2</sup>/<i>A</i><sup>1/3</sup>'],
          ['Asymmetry', 'Pauli principle: excess neutrons cost energy', '−', '<i>a</i><sub>a</sub>(<i>N</i> − <i>Z</i>)<sup>2</sup>/<i>A</i>'],
          ['Pairing', 'Identical nucleons pair up (spin coupling)', '+ or −', '<i>δ</i>'],
        ],
      },
      {
        t: 'p',
        html: '<b>The pairing term:</b><br><i>δ</i> = +<i>a</i><sub>p</sub><i>A</i><sup>−3/4</sup> for even–even nuclei (paired protons, paired neutrons)<br><i>δ</i> = 0 for odd–<i>A</i> nuclei<br><i>δ</i> = −<i>a</i><sub>p</sub><i>A</i><sup>−3/4</sup> for odd–odd nuclei',
      },
      {
        t: 'p',
        html: '<b>Standard constants (fit to experimental masses):</b><br><i>a</i><sub>v</sub> = 15.75 MeV, <i>a</i><sub>s</sub> = 17.8 MeV, <i>a</i><sub>c</sub> = 0.711 MeV,<br><i>a</i><sub>a</sub> = 23.7 MeV, <i>a</i><sub>p</sub> = 34 MeV.',
      },
      {
        t: 'p',
        html: '<b>Binding energy per nucleon:</b><br><i>B</i>/<i>A</i> = <i>a</i><sub>v</sub> − <i>a</i><sub>s</sub><i>A</i><sup>−1/3</sup> − <i>a</i><sub>c</sub><i>Z</i><sup>2</sup>/<i>A</i><sup>4/3</sup> − <i>a</i><sub>a</sub>(<i>A</i> − 2<i>Z</i>)<sup>2</sup>/<i>A</i><sup>2</sup> + <i>δ</i>/<i>A</i>.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>a</i><sub>v</sub><i>A</i> has units MeV (<i>a</i><sub>v</sub> in MeV times the dimensionless <i>A</i>). <i>a</i><sub>c</sub><i>Z</i><sup>2</sup>/<i>A</i><sup>1/3</sup>: <i>Z</i><sup>2</sup> is dimensionless, <i>A</i><sup>−1/3</sup> is dimensionless, <i>a</i><sub>c</sub> in MeV gives MeV. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Computing Binding Energy from the SEMF',
        q: 'Calculate the binding energy and binding energy per nucleon of <sup>120</sup>Sn (<i>Z</i> = 50, <i>A</i> = 120) using the SEMF. Compare with the measured value <i>B</i>/<i>A</i> = 8.50 MeV.',
        steps: [
          '<b>Step 1 — Volume term.</b><br><i>B</i><sub>v</sub> = 15.75 × 120 = 1890 MeV.',
          '<b>Step 2 — Surface term.</b> 120<sup>1/3</sup> = 4.932, so 120<sup>2/3</sup> = (120<sup>1/3</sup>)<sup>2</sup> = 4.932<sup>2</sup> ≈ 24.33.<br><i>B</i><sub>s</sub> = 17.8 × 24.33 = 433.1 MeV.',
          '<b>Step 3 — Coulomb term.</b><br><i>B</i><sub>c</sub> = 0.711 × 50<sup>2</sup>/120<sup>1/3</sup> = 0.711 × 2500/4.932 = 0.711 × 506.9 = 360.4 MeV.',
          '<b>Step 4 — Asymmetry term.</b> <i>N</i> = 120 − 50 = 70. <i>A</i> − 2<i>Z</i> = 120 − 100 = 20.<br><i>B</i><sub>a</sub> = 23.7 × 20<sup>2</sup>/120 = 23.7 × 400/120 = 23.7 × 3.333 = 79.0 MeV.',
          '<b>Step 5 — Pairing term.</b> Sn-120 is even-even (<i>Z</i> = 50 even, <i>N</i> = 70 even), so:<br><i>δ</i> = +34 × 120<sup>−3/4</sup>.<br>120<sup>3/4</sup> = 120<sup>1/2</sup> × 120<sup>1/4</sup> ≈ 10.95 × 3.310 ≈ 36.3.<br><i>δ</i> = 34/36.3 ≈ 0.94 MeV.',
          '<b>Step 6 — Total binding energy.</b><br><i>B</i> = 1890 − 433.1 − 360.4 − 79.0 + 0.9 = 1018.4 MeV.<br><i>B</i>/<i>A</i> = 1018.4/120 = 8.49 MeV.',
          '<b>Check.</b> The computed <i>B</i>/<i>A</i> = 8.49 MeV matches the measured 8.50 MeV remarkably well — the liquid drop model captures the gross features with only five terms.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Why the BE/A Curve Peaks at A ≈ 56',
        q: 'Use the SEMF to find the mass number <i>A</i> at which <i>B</i>/<i>A</i> is maximum for <i>Z</i> = <i>N</i> = <i>A</i>/2 (symmetric nuclei on the valley of stability).',
        steps: [
          '<b>Step 1 — Set <i>Z</i> = <i>A</i>/2 in the SEMF for <i>B</i>/<i>A</i> and differentiate.</b> With <i>Z</i> = <i>A</i>/2: the asymmetry term (<i>A</i> − 2<i>Z</i>) = 0, so it drops out. The pairing term is small and <i>A</i>-dependent, so neglect it for this rough calculation.<br><i>B</i> ≈ <i>a</i><sub>v</sub><i>A</i> − <i>a</i><sub>s</sub><i>A</i><sup>2/3</sup> − <i>a</i><sub>c</sub>(<i>A</i>/2)<sup>2</sup>/<i>A</i><sup>1/3</sup> = <i>a</i><sub>v</sub><i>A</i> − <i>a</i><sub>s</sub><i>A</i><sup>2/3</sup> − <i>a</i><sub>c</sub><i>A</i><sup>2</sup>/(4<i>A</i><sup>1/3</sup>) = <i>a</i><sub>v</sub><i>A</i> − <i>a</i><sub>s</sub><i>A</i><sup>2/3</sup> − (<i>a</i><sub>c</sub>/4)<i>A</i><sup>5/3</sup>.',
          '<b>Step 2 — Divide by <i>A</i> and differentiate with respect to <i>A</i>.</b><br><i>B</i>/<i>A</i> ≈ <i>a</i><sub>v</sub> − <i>a</i><sub>s</sub><i>A</i><sup>−1/3</sup> − (<i>a</i><sub>c</sub>/4)<i>A</i><sup>2/3</sup>.<br>(d/d<i>A</i>)(<i>B</i>/<i>A</i>) = (1/3)<i>a</i><sub>s</sub><i>A</i><sup>−4/3</sup> − (1/3) · (<i>a</i><sub>c</sub>/2)<i>A</i><sup>−1/3</sup> = 0<br>(at the maximum).',
          '<b>Step 3 — Solve for <i>A</i>.</b><br>(<i>a</i><sub>s</sub>/3)<i>A</i><sup>−4/3</sup> = (<i>a</i><sub>c</sub>/6)<i>A</i><sup>−1/3</sup>.<br>2<i>a</i><sub>s</sub> = <i>a</i><sub>c</sub><i>A</i> ⟹ <i>A</i> = 2<i>a</i><sub>s</sub>/<i>a</i><sub>c</sub> = (2 × 17.8)/0.711 ≈ 35.6/0.711 ≈ 50.1.',
        ],
        ans: 'The maximum <i>B</i>/<i>A</i> occurs near <i>A</i> ≈ 50, close to the iron region (<i>A</i> ≈ 56) where the empirical BE/A curve peaks — good agreement for so rough a model. The physical picture: at small <i>A</i> the surface penalty per nucleon, <i>a</i><sub>s</sub><i>A</i><sup>−1/3</sup>, is large (a large fraction of the nucleons sit on the surface), so <i>B</i>/<i>A</i> rises steeply as <i>A</i> grows. At large <i>A</i> the Coulomb penalty per nucleon, (<i>a</i><sub>c</sub>/4)<i>A</i><sup>2/3</sup>, keeps growing and pulls <i>B</i>/<i>A</i> down. The peak lies where these two effects balance. For real heavy nuclei, which have <i>N</i> > <i>Z</i>, the asymmetry term reinforces the fall on the heavy side.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State the physical origin of each of the first four terms in the semi-empirical mass formula.',
            a: 'Volume term: each nucleon interacts with a fixed number of neighbours (saturated short-range force). Surface term: nucleons on the surface have fewer neighbours, so they contribute less binding. Coulomb term: protons repel each other through the long-range electrostatic force, reducing net binding. Asymmetry term: Pauli exclusion principle forces excess nucleons into higher-energy states.',
          },
          {
            q: '[JEE Main] Calculate the binding energy of <sup>16</sup>O (<i>Z</i> = 8, <i>A</i> = 16) using the SEMF. The measured <i>B</i>/<i>A</i> = 7.98 MeV. Comment on the accuracy.',
            a: 'For <sup>16</sup>O: <i>Z</i> = 8, <i>A</i> = 16, <i>N</i> = 8, so <i>A</i> − 2<i>Z</i> = 0 (asymmetry = 0). Even-even pairing term: <i>δ</i> = +34 × 16<sup>−3/4</sup>. 16<sup>3/4</sup> = 8, so <i>δ</i> = 34/8 = 4.25 MeV.<br><i>B</i> = 15.75(16) − 17.8(16)<sup>2/3</sup> − 0.711(8<sup>2</sup>/16<sup>1/3</sup>) + 4.25<br>= 252 − 17.8(6.35) − 0.711(25.4) + 4.25<br>= 252 − 113.0 − 18.1 + 4.25 ≈ 125.2 MeV.<br><i>B</i>/<i>A</i> = 125.2/16 ≈ 7.82 MeV. The SEMF slightly underestimates the measured 7.98 MeV (by about 0.16 MeV, i.e. 2%). That is good agreement for a formula designed for heavy nuclei; the remaining difference is expected because <sup>16</sup>O is doubly magic (8 protons, 8 neutrons) and has extra shell stability beyond the liquid drop picture.',
          },
          {
            q: '[JEE Advanced] Use the SEMF to estimate the most stable isobar (fixed <i>A</i>, varying <i>Z</i>) by maximising <i>B</i> with respect to <i>Z</i> (equivalently, minimising the nuclear mass, neglecting the neutron–proton mass difference). Show that <i>Z</i><sub>stable</sub> ≈ <i>A</i>/(2 + (<i>a</i><sub>c</sub>/(2<i>a</i><sub>a</sub>))<i>A</i><sup>2/3</sup>).',
            a: 'Maximising <i>B</i> with respect to <i>Z</i>:<br>∂<i>B</i>/∂<i>Z</i> = −2<i>a</i><sub>c</sub><i>Z</i>/<i>A</i><sup>1/3</sup> + 4<i>a</i><sub>a</sub>(<i>A</i> − 2<i>Z</i>)/<i>A</i> = 0.<br>2<i>a</i><sub>c</sub><i>Z</i>/<i>A</i><sup>1/3</sup> = 4<i>a</i><sub>a</sub>(<i>A</i> − 2<i>Z</i>)/<i>A</i>.<br><i>Z</i> · <i>A</i><sup>2/3</sup> · <i>a</i><sub>c</sub> = 2<i>a</i><sub>a</sub>(<i>A</i> − 2<i>Z</i>).<br><i>Z</i>(<i>a</i><sub>c</sub><i>A</i><sup>2/3</sup> + 4<i>a</i><sub>a</sub>) = 2<i>a</i><sub>a</sub><i>A</i>.<br><i>Z</i> = 2<i>a</i><sub>a</sub><i>A</i>/(<i>a</i><sub>c</sub><i>A</i><sup>2/3</sup> + 4<i>a</i><sub>a</sub>) = <i>A</i>/(2 + (<i>a</i><sub>c</sub>/(2<i>a</i><sub>a</sub>))<i>A</i><sup>2/3</sup>).',
          },
          {
            q: '[JEE Advanced] The pairing term for even-even nuclei is positive. Explain qualitatively why this makes even-even nuclei more tightly bound than predicted by the first four terms alone.',
            a: 'The pairing term reflects the energy gain when two identical nucleons (proton-proton or neutron-neutron) couple their spins to form a paired state — analogous to the Cooper pairs in superconductivity. This extra binding is not accounted for by the average nucleon-nucleon interaction captured in the first four terms, which treat all nucleons as equivalent. Even-even nuclei have maximum pairs, so they gain the most binding energy; odd-odd nuclei lose pairs, so they are less bound.',
          },
          {
            q: '[JEE Advanced] Compare the SEMF prediction for <i>B</i>/<i>A</i> of <sup>238</sup>U (<i>Z</i> = 92, <i>A</i> = 238) with the empirical value of 7.6 MeV.',
            a: 'For <sup>238</sup>U: <i>A</i> = 238, <i>Z</i> = 92, <i>N</i> = 146, <i>A</i> − 2<i>Z</i> = 238 − 184 = 54. <i>B</i><sub>v</sub> = 15.75 × 238 = 3748.5 MeV. <i>A</i><sup>1/3</sup> = 6.197 and <i>A</i><sup>2/3</sup> = 38.40. <i>B</i><sub>s</sub> = 17.8 × 38.40 = 683.6 MeV. <i>Z</i><sup>2</sup>/<i>A</i><sup>1/3</sup> = 92<sup>2</sup>/6.197 = 8464/6.197 = 1366. <i>B</i><sub>c</sub> = 0.711 × 1366 = 971.1 MeV. (<i>A</i> − 2<i>Z</i>)<sup>2</sup>/<i>A</i> = 54<sup>2</sup>/238 = 2916/238 = 12.25. <i>B</i><sub>a</sub> = 23.7 × 12.25 = 290.4 MeV. Even-even: <i>δ</i> = +34 × 238<sup>−3/4</sup>. 238<sup>3/4</sup> = 238<sup>1/2</sup> × 238<sup>1/4</sup> ≈ 15.43 × 3.928 ≈ 60.6. <i>δ</i> = 34/60.6 = 0.56 MeV. <i>B</i> = 3748.5 − 683.6 − 971.1 − 290.4 + 0.6 = 1804.0 MeV. <i>B</i>/<i>A</i> = 1804.0/238 = 7.58 MeV. This matches the empirical 7.6 MeV very well.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 862–864 ─────────────────────────
  {
    n: 'E',
    title: 'Nuclear Reaction Kinematics and Threshold Energy',
    extra: true,
    kalam: 'The threshold energy is the minimum projectile energy required to make an endoergic reaction go, and it is not simply |Q|.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 04 gives the Q-value for fission and fusion reactions. JEE Advanced extends this to general nuclear reactions: particle-induced reactions like (<i>α</i>, <i>n</i>), (<i>p</i>, <i>d</i>), (<i>d</i>, <i>α</i>), and the kinematics of endoergic (energy-absorbing) reactions. The threshold energy is the minimum projectile energy required to make an endoergic reaction go, and it is not simply |<i>Q</i>| — you must account for momentum conservation in the centre-of-mass frame.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Q-value of a nuclear reaction.</b> For <i>X</i> + <i>x</i> → <i>Y</i> + <i>y</i>:<br><i>Q</i> = (<i>m</i><sub><i>X</i></sub> + <i>m</i><sub><i>x</i></sub> − <i>m</i><sub><i>Y</i></sub> − <i>m</i><sub><i>y</i></sub>)<i>c</i><sup>2</sup> = <i>T</i><sub><i>Y</i></sub> + <i>T</i><sub><i>y</i></sub> − <i>T</i><sub><i>X</i></sub> − <i>T</i><sub><i>x</i></sub>,<br>where <i>T</i> denotes kinetic energy. <i>Q</i> > 0: exoergic (energy released). <i>Q</i> < 0: endoergic (energy absorbed).',
      },
      {
        t: 'p',
        html: '<b>Threshold energy (<i>Q</i> < 0 reactions).</b> In the lab frame (target at rest), the minimum projectile kinetic energy <i>T</i><sub>th</sub> required is:<br><i>T</i><sub>th</sub> = −<i>Q</i> · (<i>m</i><sub><i>X</i></sub> + <i>m</i><sub><i>x</i></sub>)/<i>m</i><sub><i>X</i></sub> = −<i>Q</i> · (<i>M</i> + <i>m</i>)/<i>M</i>,<br>where <i>M</i> = <i>m</i><sub><i>X</i></sub> is the target mass and <i>m</i> = <i>m</i><sub><i>x</i></sub> is the projectile mass. Because |<i>Q</i>| is tiny compared with the rest energies involved, <i>m</i><sub><i>X</i></sub> + <i>m</i><sub><i>x</i></sub> ≈ <i>m</i><sub><i>Y</i></sub> + <i>m</i><sub><i>y</i></sub>, so the factor is often written (<i>m</i><sub><i>Y</i></sub> + <i>m</i><sub><i>y</i></sub>)/<i>m</i><sub><i>X</i></sub> as well. The exact relativistic result carries one more factor, 1 − <i>Q</i>/[2(<i>M</i> + <i>m</i>)<i>c</i><sup>2</sup>], which is negligible for nuclear masses, giving the simpler form above.',
      },
      {
        t: 'p',
        html: '<b>Special case — threshold for photonuclear reactions.</b> For a photon projectile (<i>m</i> → 0), the factor (<i>M</i> + <i>m</i>)/<i>M</i> tends to 1 and the threshold is <i>E</i><sub>γ</sub> ≈ −<i>Q</i> = |<i>Q</i>|. (More precisely <i>E</i><sub>γ</sub><sup>th</sup> = |<i>Q</i>|(1 + |<i>Q</i>|/(2<i>Mc</i><sup>2</sup>)); the tiny excess is the recoil kinetic energy of the target nucleus.) A photon is the limiting case in which the threshold energy is essentially |<i>Q</i>|.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>Q</i> in MeV; masses in u (dimensionless for ratio); <i>T</i><sub>th</sub> in MeV. The ratio of masses is dimensionless, so <i>T</i><sub>th</sub> has the same units as <i>Q</i>. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Q-Value of a (d, n) Reaction',
        q: 'Calculate the Q-value for the deuteron-induced reaction <sup>2</sup><sub>1</sub>H + <sup>3</sup><sub>1</sub>H → <sup>4</sup><sub>2</sub>He + <sup>1</sup><sub>0</sub><i>n</i> (the DT fusion reaction). Given atomic masses: <sup>2</sup>H = 2.014102 u, <sup>3</sup>H = 3.016049 u, <sup>4</sup>He = 4.002603 u, <i>n</i> = 1.008665 u.',
        steps: [
          '<b>Step 1 — Mass of reactants.</b><br><i>m</i><sub>reactants</sub> = 2.014102 + 3.016049 = 5.030151 u.',
          '<b>Step 2 — Mass of products.</b><br><i>m</i><sub>products</sub> = 4.002603 + 1.008665 = 5.011268 u.',
          '<b>Step 3 — Q-value.</b><br>Δ<i>m</i> = 5.030151 − 5.011268 = 0.018883 u.<br><i>Q</i> = 0.018883 × 931.5',
        ],
        ans: '<i>Q</i> = +17.6 MeV — the exoergic D-T reaction, the same value Topic 04 derives from the same masses in its third worked example.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Threshold Energy for an Endoergic Reaction',
        q: 'The reaction <sup>7</sup><sub>3</sub>Li + <i>p</i> → <sup>7</sup><sub>4</sub>Be + <i>n</i> is endoergic. Given the atomic masses <i>m</i>(<sup>7</sup>Li) = 7.016004 u, <i>m</i>(<sup>1</sup>H) = 1.007825 u, <i>m</i>(<sup>7</sup>Be) = 7.016929 u and <i>m</i><sub>n</sub> = 1.008665 u, find its Q-value and the threshold kinetic energy of the proton.',
        steps: [
          '<b>Step 1 — Identify the reaction.</b> (<i>p</i>, <i>n</i>) means proton in, neutron out: target <i>X</i> = <sup>7</sup>Li, projectile <i>x</i> = <i>p</i>, products <i>Y</i> = <sup>7</sup>Be and <i>y</i> = <i>n</i>.',
          '<b>Step 2 — Q-value from the masses.</b><br><i>m</i><sub><i>X</i></sub> + <i>m</i><sub><i>x</i></sub> = 7.016004 + 1.007825 = 8.023829 u,<br><i>m</i><sub><i>Y</i></sub> + <i>m</i><sub><i>y</i></sub> = 7.016929 + 1.008665 = 8.025594 u.<br><i>Q</i> = (8.023829 − 8.025594) × 931.5 = −0.001765 × 931.5 ≈ −1.64 MeV.',
          '<b>Step 3 — Apply the threshold formula.</b><br><i>T</i><sub>th</sub> = −<i>Q</i> · (<i>m</i><sub><i>X</i></sub> + <i>m</i><sub><i>x</i></sub>)/<i>m</i><sub><i>X</i></sub> = 1.644 × 8.023829/7.016004 = 1.644 × 1.1436',
        ],
        ans: 'The threshold proton energy is <i>T</i><sub>th</sub> ≈ 1.88 MeV. Note that this is larger than |<i>Q</i>| = 1.64 MeV — the extra 0.24 MeV is the kinetic energy that must be supplied not just to create the mass difference, but also to conserve momentum: the kinetic energy of the centre-of-mass motion cannot be converted into mass.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define exoergic and endoergic nuclear reactions. Give one example of each.',
            a: 'Exoergic (<i>Q</i> > 0): reaction releases energy. Example: <sup>2</sup>H + <sup>3</sup>H → <sup>4</sup>He + <i>n</i>, <i>Q</i> = 17.6 MeV. Endoergic (<i>Q</i> < 0): reaction absorbs energy. Example: <sup>7</sup>Li + <i>p</i> → <sup>7</sup>Be + <i>n</i>, <i>Q</i> = −1.64 MeV.',
          },
          {
            q: '[JEE Main] The reaction <sup>12</sup><sub>6</sub>C + <i>p</i> → <sup>13</sup><sub>7</sub>N + <i>γ</i> has <i>Q</i> = 1.94 MeV. Classify it and state what happens to the Q-value energy.',
            a: '<i>Q</i> = +1.94 MeV, so the reaction is exoergic (a radiative capture). The compound nucleus <sup>13</sup>N<sup>*</sup> is formed with an excitation energy of about 1.94 MeV (plus the proton’s centre-of-mass kinetic energy) and de-excites by emitting a gamma ray. Essentially all of <i>Q</i> appears as photon energy; the recoil of <sup>13</sup>N takes only about <i>E</i><sub>γ</sub><sup>2</sup>/(2<i>Mc</i><sup>2</sup>) ≈ 0.16 keV.',
          },
          {
            q: '[JEE Main] For the endoergic reaction <i>A</i> + <i>a</i> → <i>B</i> + <i>b</i>, why is the threshold energy <i>T</i><sub>th</sub> = −<i>Q</i> · (<i>m</i><sub><i>A</i></sub> + <i>m</i><sub><i>a</i></sub>)/<i>m</i><sub><i>A</i></sub> and not simply |<i>Q</i>|?',
            a: 'Supplying only |<i>Q</i>| would not conserve momentum — the centre of mass must keep moving at the same velocity after the reaction. Of the projectile’s lab kinetic energy <i>T</i>, the part <i>Tm</i><sub><i>a</i></sub>/(<i>m</i><sub><i>A</i></sub> + <i>m</i><sub><i>a</i></sub>) is the kinetic energy of the centre-of-mass motion and cannot be converted into mass. Only the remainder, <i>Tm</i><sub><i>A</i></sub>/(<i>m</i><sub><i>A</i></sub> + <i>m</i><sub><i>a</i></sub>), is available. Setting this equal to |<i>Q</i>| gives <i>T</i><sub>th</sub> = |<i>Q</i>|(<i>m</i><sub><i>A</i></sub> + <i>m</i><sub><i>a</i></sub>)/<i>m</i><sub><i>A</i></sub>, and the factor (<i>m</i><sub><i>A</i></sub> + <i>m</i><sub><i>a</i></sub>)/<i>m</i><sub><i>A</i></sub> > 1 tends to 1 as the projectile mass becomes negligible.',
          },
          {
            q: '[JEE Advanced] Calculate the threshold neutron energy for the endoergic reaction <sup>3</sup><sub>2</sub>He + <i>n</i> → <sup>2</sup><sub>1</sub>H + <sup>2</sup><sub>1</sub>H, which has <i>Q</i> = −3.27 MeV. Take masses: <sup>2</sup>H = 2.014102 u, <sup>3</sup>He = 3.016029 u, <i>n</i> = 1.008665 u.',
            a: 'The Q-value is [3.016029 + 1.008665 − 2(2.014102)] × 931.5 = −0.003510 × 931.5 = −3.27 MeV, as given. With target <i>X</i> = <sup>3</sup>He and projectile <i>x</i> = <i>n</i>, <i>m</i><sub><i>X</i></sub> + <i>m</i><sub><i>x</i></sub> = 4.024694 u and <i>m</i><sub><i>X</i></sub> = 3.016029 u.<br><i>T</i><sub>th</sub> = 3.27 × 4.024694/3.016029 = 3.27 × 1.334 ≈ 4.36 MeV.<br>The threshold is about one third larger than |<i>Q</i>| because the neutron is a third as massive as the target; the correction factor is 1 + <i>m</i>/<i>M</i>.',
          },
          {
            q: '[JEE Advanced] Show that for a photon-induced reaction, the threshold energy is essentially equal to |<i>Q</i>| (unlike massive projectiles).',
            a: 'For a photon with <i>E</i><sub>γ</sub> = <i>hν</i>, momentum <i>p</i><sub>γ</sub> = <i>E</i><sub>γ</sub>/<i>c</i>. At threshold the products are formed with no relative motion, so they move together as a single system of rest mass <i>M</i><sub>f</sub> = <i>M</i> + |<i>Q</i>|/<i>c</i><sup>2</sup> carrying all of the photon’s momentum. Conservation of energy and momentum gives<br>(<i>M</i><sub>f</sub><i>c</i><sup>2</sup>)<sup>2</sup> = (<i>E</i><sub>γ</sub> + <i>Mc</i><sup>2</sup>)<sup>2</sup> − <i>E</i><sub>γ</sub><sup>2</sup> = (<i>Mc</i><sup>2</sup>)<sup>2</sup> + 2<i>E</i><sub>γ</sub><i>Mc</i><sup>2</sup> ⟹ <i>E</i><sub>γ</sub><sup>th</sup> = |<i>Q</i>|(1 + |<i>Q</i>|/(2<i>Mc</i><sup>2</sup>)) ≈ |<i>Q</i>|,<br>because |<i>Q</i>| ≪ <i>Mc</i><sup>2</sup> for nuclei; the tiny correction is the recoil energy of the target. A massive projectile, by contrast, must waste part of <i>T</i> on centre-of-mass motion.',
          },
        ],
      },
    ],
  },
];
