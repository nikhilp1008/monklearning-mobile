import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 12, Additional Topics E, F and G, word for word from the Class 12
 * Physics Master Reference: E The Zeeman Effect (pp. 805 to 809; it opens
 * under Addendum D's last practice answers on p. 805, and its practice
 * answers end on p. 809) and F Beyond Bohr: Why Full Quantum Mechanics Is
 * Needed (pp. 810 to 812), then G: the book closes the Supplement with
 * "Comprehensive Practice — Chapter 12 Addendum" (pp. 812 to 814, after F's
 * practice answers, ending on the chapter's last page), ten questions across
 * Addenda A–F, set as its own Additional topic G as Chapter 6 set its
 * synthesis as Additional H. It prints no opening text, so G has no kalam.
 * These pages print no drawings: every equation is typeset. E.2's D₁
 * transition table sits inside a worked example, so it is written as the
 * same bullet list the book uses for D₂.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic E · pp. 805–809 ─────────────────────────
  {
    n: 'E',
    title: 'The Zeeman Effect',
    extra: true,
    kalam: 'When an atom is placed in a magnetic field, its spectral lines split into multiple components.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'When an atom is placed in a magnetic field, its spectral lines split into multiple components. This is the Zeeman effect, discovered in 1896. The chapter mentions it briefly in the context of Bohr’s limitations but develops nothing. For JEE Advanced, the normal Zeeman effect (splitting without spin) is standard: the energy shift is Δ<i>E</i> = <i>m</i><sub>L</sub><i>μ</i><sub>B</sub><i>B</i>, where <i>m</i><sub>L</sub> is the magnetic quantum number and <i>μ</i><sub>B</sub> = <i>eh</i>/(4π<i>m</i><sub>e</sub>) = 9.27 × 10<sup>−24</sup> J/T is the Bohr magneton.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Classical picture (normal Zeeman effect).</b> An orbiting electron has magnetic moment <i>μ⃗</i> = −(<i>e</i>/(2<i>m</i>))<i>L⃗</i>. In a magnetic field <i>B⃗</i>, the torque is <i>τ⃗</i> = <i>μ⃗</i> × <i>B⃗</i>, which causes precession of <i>L⃗</i> about <i>B⃗</i>. The precessional frequency is the Larmor frequency <i>ω</i><sub>L</sub> = <i>eB</i>/(2<i>m</i>).',
      },
      {
        t: 'p',
        html: '<b>Quantum picture.</b> The component of angular momentum along <i>B</i> is quantised: <i>L</i><sub><i>z</i></sub> = <i>m</i><sub>L</sub><i>ħ</i>, where <i>m</i><sub>L</sub> = −ℓ, −ℓ + 1, …, +ℓ. For a transition between levels with orbital quantum numbers ℓ<sub>i</sub> and ℓ<sub>f</sub>, the selection rule is Δ<i>m</i><sub>L</sub> = <i>m</i><sub>L,i</sub> − <i>m</i><sub>L,f</sub> = 0, ±1 (initial minus final).',
      },
      {
        t: 'p',
        html: '<b>Energy shift:</b><br>Δ<i>E</i> = −<i>μ⃗</i> · <i>B⃗</i> = (<i>e</i>/(2<i>m</i>))<i>L</i><sub><i>z</i></sub><i>B</i> = <i>m</i><sub>L</sub><i>μ</i><sub>B</sub><i>B</i>,<br>where <i>μ</i><sub>B</sub> = <i>eħ</i>/(2<i>m</i><sub>e</sub>) = 9.274 × 10<sup>−24</sup> J/T.',
      },
      {
        t: 'p',
        html: '<b>Frequency and wavelength shift.</b> The emitted photon carries <i>hν</i> = <i>E</i><sub>i</sub> − <i>E</i><sub>f</sub>, so a transition with Δ<i>m</i><sub>L</sub> = <i>m</i><sub>L,i</sub> − <i>m</i><sub>L,f</sub> shifts the photon energy by +Δ<i>m</i><sub>L</sub><i>μ</i><sub>B</sub><i>B</i>. Hence<br>Δ<i>ν</i> = (<i>μ</i><sub>B</sub><i>B</i>/<i>h</i>)Δ<i>m</i><sub>L</sub>, Δ<i>λ</i> = −(<i>λ</i><sup>2</sup>/(<i>hc</i>))Δ<i>E</i> = −(<i>λ</i><sup>2</sup><i>μ</i><sub>B</sub><i>B</i>/(<i>hc</i>))Δ<i>m</i><sub>L</sub>.<br>The negative sign means: Δ<i>m</i><sub>L</sub> = +1 shifts the line to higher frequency (shorter wavelength), Δ<i>m</i><sub>L</sub> = −1 to lower frequency (longer wavelength), and Δ<i>m</i><sub>L</sub> = 0 leaves it unshifted.',
      },
      {
        t: 'p',
        html: '<b>Normal Zeeman triplet.</b> For a transition with ℓ = 1 → ℓ = 0 (e.g., the hydrogen Lyman-α line, 2p → 1s, ignoring spin), the lower level (ℓ<sub>f</sub> = 0) does not split (<i>m</i><sub>L</sub> = 0 only). The upper level (ℓ<sub>i</sub> = 1) has <i>m</i><sub>L</sub> = −1, 0, +1, three states. The selection rules Δ<i>m</i><sub>L</sub> = 0, ±1 give three lines: one unshifted (Δ<i>m</i><sub>L</sub> = 0), one shifted to higher frequency (Δ<i>m</i><sub>L</sub> = +1), one shifted to lower frequency (Δ<i>m</i><sub>L</sub> = −1). This is the normal Zeeman triplet.',
      },
      {
        t: 'p',
        html: '<b>Anomalous Zeeman effect.</b> When electron spin (<i>s</i> = 1/2) is included, the splitting is more complex because <i>j</i> = ℓ ± <i>s</i>, and the Landé <i>g</i>-factor enters. The normal Zeeman triplet occurs when both levels have total spin <i>S</i> = 0 (singlet levels): then <i>g</i> = 1 for both, so <i>g</i><sub>i</sub> = <i>g</i><sub>f</sub>. The anomalous Zeeman effect occurs when <i>S</i> ≠ 0 and the Landé factors differ, <i>g</i><sub>i</sub> ≠ <i>g</i><sub>f</sub> (as in the sodium D lines, and in triplet levels even with integer <i>J</i>); this covers most real spectral lines.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Normal Zeeman Splitting of Hα',
        q: 'The H<sub>α</sub> line of hydrogen Balmer series is the transition <i>n</i> = 3 → <i>n</i> = 2. It has wavelength <i>λ</i> = 656.3 nm. Calculate the wavelength separation between the outer components of the normal Zeeman triplet when the source is in a magnetic field <i>B</i> = 2.0 T.',
        steps: [
          '<b>Step 1 — Identify the relevant levels.</b> The H<sub>α</sub> line (<i>n</i> = 3 → 2) is really a bundle of transitions (3s, 3p, 3d → 2s, 2p). To illustrate the normal effect, take the component 3p → 2s (ℓ<sub>i</sub> = 1 → ℓ<sub>f</sub> = 0). In the normal (spinless) treatment every such component shows the same triplet spacing, so the answer does not depend on this choice.',
          'The upper level (<i>n</i> = 3, <i>p</i>-orbital) has ℓ = 1. The lower level (<i>n</i> = 2, <i>s</i>-orbital) has ℓ = 0.',
          'Since ℓ<sub>f</sub> = 0, the lower level does not split (<i>m</i><sub>f</sub> = 0 only). The upper level (ℓ<sub>i</sub> = 1) splits into <i>m</i><sub>L</sub> = −1, 0, +1.',
          '<b>Step 2 — Compute the energy shift.</b> For the normal Zeeman effect (ignoring spin):<br>Δ<i>E</i> = <i>m</i><sub>L</sub><i>μ</i><sub>B</sub><i>B</i>.<br>The transitions and their shifts:<br>• <i>m</i><sub>L</sub> = +1 → <i>m</i><sub>f</sub> = 0 (Δ<i>m</i><sub>L</sub> = +1): Δ<i>E</i> = +<i>μ</i><sub>B</sub><i>B</i>, frequency increases.<br>• <i>m</i><sub>L</sub> = 0 → <i>m</i><sub>f</sub> = 0 (Δ<i>m</i><sub>L</sub> = 0): Δ<i>E</i> = 0, unshifted.<br>• <i>m</i><sub>L</sub> = −1 → <i>m</i><sub>f</sub> = 0 (Δ<i>m</i><sub>L</sub> = −1): Δ<i>E</i> = −<i>μ</i><sub>B</sub><i>B</i>, frequency decreases.',
          '<b>Step 3 — Convert energy shift to wavelength shift.</b> For a photon: <i>E</i> = <i>hν</i> = <i>hc</i>/<i>λ</i>. Differentiating:<br>d<i>E</i> = −(<i>hc</i>/<i>λ</i><sup>2</sup>) d<i>λ</i> ⟹ d<i>λ</i> = −(<i>λ</i><sup>2</sup>/(<i>hc</i>)) d<i>E</i>.<br>For the outer components, d<i>E</i> = ±<i>μ</i><sub>B</sub><i>B</i>, so the magnitude of the shift is:<br>|Δ<i>λ</i>| = <i>λ</i><sup>2</sup><i>μ</i><sub>B</sub><i>B</i>/(<i>hc</i>).',
          '<b>Step 4 — Plug in numbers.</b><br><i>λ</i> = 656.3 nm = 6.563 × 10<sup>−7</sup> m.<br><i>λ</i><sup>2</sup> = (6.563 × 10<sup>−7</sup>)<sup>2</sup> = 4.307 × 10<sup>−13</sup> m<sup>2</sup>.<br><i>μ</i><sub>B</sub> = 9.274 × 10<sup>−24</sup> J/T, <i>B</i> = 2.0 T.<br><i>μ</i><sub>B</sub><i>B</i> = 1.855 × 10<sup>−23</sup> J.<br><i>hc</i> = (6.626 × 10<sup>−34</sup>)(3 × 10<sup>8</sup>) = 1.988 × 10<sup>−25</sup> J · m.<br>Δ<i>λ</i> = (4.307 × 10<sup>−13</sup>)(1.855 × 10<sup>−23</sup>)/(1.988 × 10<sup>−25</sup>) = (7.989 × 10<sup>−36</sup>)/(1.988 × 10<sup>−25</sup>) = 4.02 × 10<sup>−11</sup> m.<br>Δ<i>λ</i> = 0.0402 nm = 40.2 pm.',
          '<b>Check.</b> The shift of about 40 pm (80 pm between the outer components) is several times the Doppler width of H<sub>α</sub> from a room-temperature source (about 8 pm), so the triplet can be resolved there; in a hot discharge (~10<sup>4</sup> K) Doppler broadening reaches tens of pm and the pattern starts to blur. A shift of order 10<sup>−11</sup> m per tesla of field is typical of Zeeman splittings of visible lines.',
          '<b>Units check.</b> <i>λ</i><sup>2</sup> in m<sup>2</sup>, <i>μ</i><sub>B</sub><i>B</i> in J, <i>hc</i> in J·m. J/(J·m) = 1/m. Δ<i>λ</i> in m. Correct.',
        ],
        ans: 'The outer components are separated by 2 × Δ<i>λ</i> = 80.4 pm.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Number of Zeeman Components',
        q: 'For the sodium D-lines (Na 3p → 3s), the transition is actually two lines: D<sub>1</sub> (<sup>2</sup>P<sub>1/2</sub> → <sup>2</sup>S<sub>1/2</sub>) and D<sub>2</sub> (<sup>2</sup>P<sub>3/2</sub> → <sup>2</sup>S<sub>1/2</sub>). How many Zeeman components does each line show in a weak magnetic field?',
        steps: [
          '<b>Key insight.</b> In weak fields (Zeeman energy much smaller than the spin-orbit splitting), <i>L⃗</i> and <i>S⃗</i> stay coupled (<i>LS</i> coupling holds), so <i>J</i> is a good quantum number and the levels are labelled by <i>m</i><sub>J</sub>; the selection rules are Δ<i>m</i><sub>J</sub> = 0, ±1. (Only in strong fields does the coupling break down and <i>L⃗</i> and <i>S⃗</i> decouple: the Paschen–Back effect.) The number of components equals the number of transitions satisfying these rules.',
          '<b>For D<sub>1</sub> (<sup>2</sup>P<sub>1/2</sub> → <sup>2</sup>S<sub>1/2</sub>):</b> <sup>2</sup>P<sub>1/2</sub>: <i>j</i> = 1/2, so <i>m</i><sub>J</sub> = −1/2, +1/2 (2 states). <sup>2</sup>S<sub>1/2</sub>: <i>j</i> = 1/2, so <i>m</i><sub>J</sub> = −1/2, +1/2 (2 states).<br>Allowed transitions (Δ<i>m</i><sub>J</sub> = 0, ±1), initial <sup>2</sup>P<sub>1/2</sub> → final <sup>2</sup>S<sub>1/2</sub>:<br>• +1/2 → +1/2 (Δ<i>m</i><sub>J</sub> = 0)<br>• +1/2 → −1/2 (Δ<i>m</i><sub>J</sub> = +1)<br>• −1/2 → +1/2 (Δ<i>m</i><sub>J</sub> = −1)<br>• −1/2 → −1/2 (Δ<i>m</i><sub>J</sub> = 0)<br>Total: 4 Zeeman components for D<sub>1</sub>.',
          '<b>For D<sub>2</sub> (<sup>2</sup>P<sub>3/2</sub> → <sup>2</sup>S<sub>1/2</sub>):</b> <sup>2</sup>P<sub>3/2</sub>: <i>j</i> = 3/2, so <i>m</i><sub>J</sub> = −3/2, −1/2, +1/2, +3/2 (4 states). <sup>2</sup>S<sub>1/2</sub>: <i>j</i> = 1/2, so <i>m</i><sub>J</sub> = −1/2, +1/2 (2 states).<br>Transitions that satisfy Δ<i>m</i><sub>J</sub> = 0, ±1:<br>• From <i>m</i><sub>J</sub> = +3/2: can go to +1/2 (Δ<i>m</i> = +1)<br>• From <i>m</i><sub>J</sub> = +1/2: can go to +1/2 (Δ<i>m</i> = 0) and −1/2 (Δ<i>m</i> = +1)<br>• From <i>m</i><sub>J</sub> = −1/2: can go to −1/2 (Δ<i>m</i> = 0) and +1/2 (Δ<i>m</i> = −1)<br>• From <i>m</i><sub>J</sub> = −3/2: can go to −1/2 (Δ<i>m</i> = −1)<br>Total: 6 Zeeman components for D<sub>2</sub>.',
          '<b>Check.</b> The sodium D<sub>2</sub> line (589.0 nm) actually shows 6 Zeeman components in a weak field. The D<sub>1</sub> line (589.6 nm) shows 4. This is the “anomalous” Zeeman effect because the Landé <i>g</i>-factors of the levels differ.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What is the Bohr magneton in J/T and in eV/T?',
            a: '<i>μ</i><sub>B</sub> = <i>eh</i>/(4π<i>m</i><sub>e</sub>) = 9.274 × 10<sup>−24</sup> J/T. In eV/T: 1 eV = 1.602 × 10<sup>−19</sup> J, so <i>μ</i><sub>B</sub> = 9.274 × 10<sup>−24</sup>/(1.602 × 10<sup>−19</sup>) = 5.789 × 10<sup>−5</sup> eV/T.',
          },
          {
            q: '[NEET] In the normal Zeeman effect, a spectral line splits into how many components?',
            a: 'Three components (triplet). This is the normal Zeeman effect.',
          },
          {
            q: '[JEE Main] A spectral line of wavelength 500 nm splits into three components in a magnetic field, with a separation of 0.010 nm between adjacent components. Find the magnetic field strength.',
            a: 'For the normal Zeeman triplet, the outer components are separated by Δ<i>λ</i> = 2<i>λ</i><sup>2</sup><i>μ</i><sub>B</sub><i>B</i>/(<i>hc</i>). The adjacent separation (center to one outer component) is <i>λ</i><sup>2</sup><i>μ</i><sub>B</sub><i>B</i>/(<i>hc</i>) = 0.010 nm = 10<sup>−11</sup> m.<br><i>λ</i><sup>2</sup><i>μ</i><sub>B</sub><i>B</i>/(<i>hc</i>) = 10<sup>−11</sup>.<br><i>λ</i> = 500 × 10<sup>−9</sup> m, so <i>λ</i><sup>2</sup> = 2.5 × 10<sup>−13</sup> m<sup>2</sup>.<br><i>hc</i> = 1.986 × 10<sup>−25</sup> J·m.<br><i>μ</i><sub>B</sub><i>B</i> = (10<sup>−11</sup> × 1.986 × 10<sup>−25</sup>)/(2.5 × 10<sup>−13</sup>) = 7.944 × 10<sup>−24</sup> J.<br><i>B</i> = (7.944 × 10<sup>−24</sup>)/(9.274 × 10<sup>−24</sup>) = 0.857 T.',
          },
          {
            q: '[JEE Main] In the normal Zeeman effect, which component of the triplet is unshifted? Why?',
            a: 'The Δ<i>m</i><sub>L</sub> = 0 component is unshifted. Each level shifts by Δ<i>E</i> = <i>m</i><sub>L</sub><i>μ</i><sub>B</sub><i>B</i>; when <i>m</i><sub>L</sub> is the same in the upper and lower level, both shift by the same amount, so <i>hν</i> = <i>E</i><sub>i</sub> − <i>E</i><sub>f</sub> is unchanged whatever <i>B</i> is. (For <i>m</i><sub>L</sub> = 0 → 0 neither level moves: the moment has no component along <i>B</i>, so −<i>μ⃗</i> · <i>B⃗</i> = 0.)',
          },
          {
            q: '[JEE Advanced] For the hydrogen transition 2p → 1s (<i>λ</i> = 121.6 nm), in a magnetic field of 1 T (normal Zeeman effect, ignoring spin), calculate: (a) the energy shift of the Δ<i>m</i> = +1 component, (b) the wavelength shift of this component.',
            a: '(a) For Δ<i>m</i> = +1 in the normal Zeeman effect: Δ<i>E</i> = <i>μ</i><sub>B</sub><i>B</i> = 9.274 × 10<sup>−24</sup> × 1 = 9.274 × 10<sup>−24</sup> J = 5.79 × 10<sup>−5</sup> eV.<br>(b) |Δ<i>λ</i>| = <i>λ</i><sup>2</sup><i>μ</i><sub>B</sub><i>B</i>/(<i>hc</i>) = (121.6 × 10<sup>−9</sup>)<sup>2</sup> × 9.274 × 10<sup>−24</sup>/(1.986 × 10<sup>−25</sup>). Here (121.6 × 10<sup>−9</sup>)<sup>2</sup> = 1.479 × 10<sup>−14</sup> m<sup>2</sup>, so |Δ<i>λ</i>| = 1.479 × 10<sup>−14</sup> × 46.70 = 6.9 × 10<sup>−13</sup> m = 6.9 × 10<sup>−4</sup> nm (≈ 0.7 pm). This is very small, which is why Lyman-α Zeeman splitting is hard to observe.',
          },
          {
            q: '[JEE Advanced] The anomalous Zeeman effect is observed in most atoms. Why is it called “anomalous”? What physics is missing from the normal Zeeman treatment?',
            a: 'The normal Zeeman effect assumes the magnetic moment arises only from orbital angular momentum (<i>μ⃗</i> = −(<i>e</i>/(2<i>m</i>))<i>L⃗</i>). It is called “anomalous” because most real spectral lines split into more than three components, which cannot be explained without invoking electron spin. The electron’s intrinsic spin <i>s</i> = 1/2 adds a magnetic moment <i>μ⃗</i><sub>s</sub> = −<i>g</i><sub>s</sub>(<i>e</i>/(2<i>m</i>))<i>S⃗</i> with <i>g</i><sub>s</sub> ≈ 2. When spin is included, the energy shift of a level is Δ<i>E</i> = <i>g</i><sub>J</sub><i>m</i><sub>J</sub><i>μ</i><sub>B</sub><i>B</i>, where the Landé factor <i>g</i><sub>J</sub> depends on the level (<i>L</i>, <i>S</i>, <i>J</i>) but is the same for all <i>m</i><sub>J</sub> states of that level. Because the upper and lower levels generally have different <i>g</i><sub>J</sub>, the line shifts <i>g</i><sub>i</sub><i>m</i><sub>i</sub> − <i>g</i><sub>f</sub><i>m</i><sub>f</sub> are no longer 0, ±1 in units of <i>μ</i><sub>B</sub><i>B</i>/<i>h</i>, and there are more than three components with unequal spacing. The “anomaly” was resolved only with the discovery of electron spin.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 810–812 ─────────────────────────
  {
    n: 'F',
    title: 'Beyond Bohr: Why Full Quantum Mechanics Is Needed',
    extra: true,
    kalam: 'The chapter shows Bohr successfully predicting hydrogen’s spectrum and lists where it fails, but does not show what full quantum mechanics puts in its place.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter shows Bohr successfully predicting hydrogen’s spectrum and lists where it fails, but does not show what full quantum mechanics puts in its place. A strong JEE Advanced student must know the specific phenomena that require the full Schrödinger equation (or at least a wave-mechanical treatment): fine structure, the Zeeman effect with spin, hyperfine structure, and the Lamb shift. This section is the conceptual bridge.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>What Bohr got right:</b><br>• Quantised energy levels proportional to −1/<i>n</i><sup>2</sup>.<br>• The existence of a ground state.<br>• The Rydberg formula for hydrogen spectral lines.<br>• The general scale of atomic energies (~eV).',
      },
      {
        t: 'p',
        html: '<b>What Bohr got wrong or missed:</b><br>1. <b>Line intensities.</b> Bohr gives no rule for how bright each spectral line is. Quantum mechanics (time-dependent perturbation theory) predicts transition probabilities proportional to |⟨<i>ψ</i><sub>f</sub>|<i>r⃗</i>|<i>ψ</i><sub>i</sub>⟩|<sup>2</sup> (<i>r⃗</i> the position operator).<br>2. <b>Fine structure.</b> Relativistic effects (described by the Dirac equation: spin-orbit coupling and the relativistic variation of mass) split each <i>n</i> level into sub-levels with slightly different energies. The 2p<sub>3/2</sub> and 2p<sub>1/2</sub> states in hydrogen have the same <i>n</i> = 2 and should be degenerate in Bohr’s theory, but in reality they differ by about 4.5 × 10<sup>−5</sup> eV (fine structure). The much smaller Lamb shift, treated below, is an additional effect.<br>3. <b>Anomalous Zeeman effect.</b> As in Addendum E: spin makes the simple three-component triplet into a complex multiplet.<br>4. <b>Hyperfine structure.</b> The magnetic moment of the nucleus couples to the electron’s magnetic moment, splitting lines further. This is how the 21-cm hydrogen line in astrophysics arises.<br>5. <b>Selection rules.</b> Bohr’s model cannot explain why Δℓ = ±1 for electric dipole transitions. Wave mechanics derives this from the matrix elements of the position operator.<br>6. <b>Tunneling and ionisation rates.</b> Bohr treats ionisation as instantaneous; quantum mechanics gives tunnelling rates for ionisation in strong fields.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Why Bohr Predicts No Fine Structure',
        q: 'In hydrogen (ignoring spin), the <i>n</i> = 2 level has four states: 2s (ℓ = 0) and 2p (ℓ = 1, with <i>m</i> = −1, 0, +1). Bohr’s model gives them all the same energy <i>E</i><sub>2</sub> = −13.6/4 = −3.4 eV. Show that this is an accidental degeneracy arising from the pure Coulomb potential, and explain why it is lifted.',
        steps: [
          '<b>Bohr’s energy formula:</b><br><i>E</i><sub><i>n</i></sub> = −<i>me</i><sup>4</sup>/(8ε<sub>0</sub><sup>2</sup><i>h</i><sup>2</sup><i>n</i><sup>2</sup>).<br>This depends only on <i>n</i>, not on ℓ or <i>m</i>. So all four <i>n</i> = 2 states are degenerate.',
          '<b>In full quantum mechanics (Schrödinger equation for Coulomb potential):</b> The radial equation for hydrogen has solutions parameterised by <i>n</i> and ℓ. The energy eigenvalue turns out to depend only on <i>n</i> (for the pure Coulomb potential), so <i>E</i><sub><i>n</i>ℓ<i>m</i></sub> is still independent of ℓ. This means the degeneracy survives in the non-relativistic Schrödinger equation.',
          '<b>But relativistic quantum mechanics (Dirac equation) lifts it.</b> The relativistic kinetic-energy correction and the spin-orbit coupling term both depend on ℓ and <i>j</i>. The Dirac energy formula is:<br><i>E</i><sub><i>n</i>,<i>j</i></sub> = −(<i>me</i><sup>4</sup>/(8ε<sub>0</sub><sup>2</sup><i>h</i><sup>2</sup><i>n</i><sup>2</sup>))[1 + (<i>α</i><sup>2</sup>/<i>n</i><sup>2</sup>)(<i>n</i>/(<i>j</i> + 1/2) − 3/4)],<br>where <i>α</i> = <i>e</i><sup>2</sup>/(4πε<sub>0</sub><i>ħc</i>) ≈ 1/137 is the fine-structure constant, and <i>j</i> = |ℓ ± 1/2| is the total angular momentum.',
          'For <i>n</i> = 2 (write <i>E</i><sub>0</sub> = −13.6/4 = −3.4 eV for the Bohr value):<br>• 2s<sub>1/2</sub> (ℓ = 0, <i>j</i> = 1/2): <i>E</i> = <i>E</i><sub>0</sub>[1 + (<i>α</i><sup>2</sup>/4)(2/1 − 3/4)] = <i>E</i><sub>0</sub>(1 + 5<i>α</i><sup>2</sup>/16).<br>• 2p<sub>1/2</sub> (ℓ = 1, <i>j</i> = 1/2): same as 2s<sub>1/2</sub> (exact Dirac degeneracy).<br>• 2p<sub>3/2</sub> (ℓ = 1, <i>j</i> = 3/2): <i>E</i> = <i>E</i><sub>0</sub>[1 + (<i>α</i><sup>2</sup>/4)(2/2 − 3/4)] = <i>E</i><sub>0</sub>[1 + (<i>α</i><sup>2</sup>/4) · (1/4)] = <i>E</i><sub>0</sub>(1 + <i>α</i><sup>2</sup>/16).',
          'Because <i>E</i><sub>0</sub> is negative, 2s<sub>1/2</sub> and 2p<sub>1/2</sub> are pushed further down than 2p<sub>3/2</sub>. The 2p<sub>3/2</sub> state therefore lies above the 2s<sub>1/2</sub>/2p<sub>1/2</sub> pair by (5/16 − 1/16)<i>α</i><sup>2</sup>|<i>E</i><sub>0</sub>| = (<i>α</i><sup>2</sup>/4)|<i>E</i><sub>0</sub>| ≈ ((1/137)<sup>2</sup> × 3.4 eV)/4 ≈ 4.5 × 10<sup>−5</sup> eV.',
          '<b>The Lamb shift</b> (discovered 1947) further lifts the 2s<sub>1/2</sub>–2p<sub>1/2</sub> degeneracy by about 1057 MHz, i.e. ≈ 4.4 × 10<sup>−6</sup> eV (the 2s<sub>1/2</sub> lies slightly above 2p<sub>1/2</sub>). This is a quantum electrodynamics effect (interaction with vacuum fluctuations).',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Bohr’s model successfully explains the hydrogen spectrum. Which of the following can it NOT explain: (a) ionisation energy, (b) spectral series, (c) line intensities, (d) Rydberg constant?',
            a: '(c) Line intensities. Bohr gives no theory of transition probabilities. The rate at which an atom makes a transition depends on the matrix element |⟨<i>f</i>|<i>r⃗</i>|<i>i</i>⟩|<sup>2</sup>, which requires wave mechanics.',
          },
          {
            q: '[JEE Advanced] What is meant by “accidental degeneracy” in the hydrogen atom? Give an example from the <i>n</i> = 2 level.',
            a: 'Accidental degeneracy means a degeneracy (equal energy) that occurs for a special potential (Coulomb) but is not required by symmetry. For hydrogen, the energy depends only on <i>n</i>, so states with different ℓ (like 2s and 2p) are degenerate. This is accidental—the spherical symmetry of the Coulomb potential only requires degeneracy for different <i>m</i> (same ℓ), not for different ℓ. For a different central potential (e.g., the screened potential seen by the outer electron of sodium, which is not proportional to 1/<i>r</i>), levels of the same <i>n</i> but different ℓ have different energies (in sodium the 3s level lies far below 3p).',
          },
          {
            q: '[JEE Advanced] Estimate the order of magnitude of the fine-structure splitting in hydrogen in eV, using <i>α</i> ≈ 1/137.',
            a: 'Fine-structure splitting Δ<i>E</i> ∼ |<i>E</i><sub><i>n</i></sub>|<i>α</i><sup>2</sup> ∼ (13.6/<i>n</i><sup>2</sup>) × (1/137)<sup>2</sup> eV. For <i>n</i> = 2: Δ<i>E</i> ∼ (13.6/4) × (1/18769) ≈ 1.8 × 10<sup>−4</sup> eV = 1.8 × 10<sup>−4</sup> × 1.6 × 10<sup>−19</sup> ≈ 2.9 × 10<sup>−23</sup> J. This is an order-of-magnitude estimate (the exact 2p<sub>3/2</sub>–2p<sub>1/2</sub> gap, <i>α</i><sup>2</sup>|<i>E</i><sub>2</sub>|/4, is 4.5 × 10<sup>−5</sup> eV): small, but measurable with spectroscopy.',
          },
          {
            q: '[JEE Advanced] The Lamb shift is a small energy difference of approximately 4.4 × 10<sup>−6</sup> eV between the 2s and 2p<sub>1/2</sub> states of hydrogen. Calculate the corresponding frequency and compare with the radio and microwave frequencies used in communication.',
            a: 'Δ<i>E</i> = 4.4 × 10<sup>−6</sup> eV = 4.4 × 10<sup>−6</sup> × 1.602 × 10<sup>−19</sup> = 7.05 × 10<sup>−25</sup> J.<br><i>ν</i> = Δ<i>E</i>/<i>h</i> = 7.05 × 10<sup>−25</sup>/(6.626 × 10<sup>−34</sup>) = 1.06 × 10<sup>9</sup> Hz ≈ 1060 MHz ≈ 1.06 GHz.<br>This is in the microwave region, comparable to the frequencies used by GPS (about 1.6 GHz) and Wi-Fi (2.4 GHz).',
          },
        ],
      },

    ],
  },

  // ───────────────────────── Additional topic G · pp. 812–814 ─────────────────────────
  {
    n: 'G',
    title: 'Comprehensive Practice',
    extra: true,
    blocks: [
      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A hydrogen-like ion has a nuclear mass <i>M</i> = 3.65 × 10<sup>−25</sup> kg, with its electron in the <i>n</i> = 2 orbit. Find the fractional change in the ionisation energy caused by the finite nuclear mass, and compare it with 0.1%.',
            a: 'The ionisation energy scales with the reduced mass, <i>E</i> ∝ <i>μ</i>, where <i>μ</i> = <i>m</i><sub>e</sub><i>M</i>/(<i>m</i><sub>e</sub> + <i>M</i>). Relative to the infinite-nucleus value (which uses the bare electron mass <i>m</i><sub>e</sub>), the fractional change is<br>(<i>μ</i> − <i>m</i><sub>e</sub>)/<i>m</i><sub>e</sub> = <i>M</i>/(<i>m</i><sub>e</sub> + <i>M</i>) − 1 = −<i>m</i><sub>e</sub>/(<i>m</i><sub>e</sub> + <i>M</i>) ≈ −<i>m</i><sub>e</sub>/<i>M</i> (<i>M</i> ≫ <i>m</i><sub>e</sub>).<br>The electron mass is the fixed physical constant <i>m</i><sub>e</sub> = 9.11 × 10<sup>−31</sup> kg. With the given nuclear mass <i>M</i> = 3.65 × 10<sup>−25</sup> kg (equivalently <i>M</i>/<i>m</i><sub>p</sub> = 3.65 × 10<sup>−25</sup>/(1.673 × 10<sup>−27</sup>) ≈ 218, i.e. <i>M</i> ≈ 218 <i>m</i><sub>p</sub>):<br><i>m</i><sub>e</sub>/<i>M</i> = (9.11 × 10<sup>−31</sup>)/(3.65 × 10<sup>−25</sup>) = 2.50 × 10<sup>−6</sup>.<br>So the reduced-mass correction lowers the ionisation energy by about 2.50 × 10<sup>−6</sup>, i.e. 2.50 × 10<sup>−4</sup>%, about 400 times smaller than a 0.1% shift, because for any real nucleus <i>M</i> ≫ <i>m</i><sub>e</sub>. This fraction is independent of <i>n</i> and <i>Z</i> (it comes from the <i>μ</i> factor common to every level), so the stated <i>n</i> = 2 orbit does not affect the result.',
          },
          {
            q: '[JEE Main] In a Moseley plot of √<i>ν</i> vs <i>Z</i> for K-series X-rays, the straight line has slope <i>a</i> and intercept −<i>a</i>. What is the screening constant <i>b</i>?',
            a: 'Moseley’s law: √<i>ν</i> = <i>a</i>(<i>Z</i> − <i>b</i>). If the intercept is −<i>a</i> when plotted against <i>Z</i>, then when <i>Z</i> = 0: √<i>ν</i> = <i>a</i>(0 − <i>b</i>) = −<i>ab</i> = −<i>a</i>, so <i>b</i> = 1.',
          },
          {
            q: '[JEE Advanced] In a Franck-Hertz experiment with mercury (first excitation energy of mercury 4.9 eV), the accelerating voltage is 15 V. What is the kinetic energy of an electron on reaching the anode region after making: (a) one inelastic collision, (b) two inelastic collisions?',
            a: '(a) After one inelastic collision, the electron loses 4.9 eV. With 15 V accelerating: KE before collision = 15 eV. After: 15 − 4.9 = 10.1 eV.<br>(b) After two collisions: 15 − 2 × 4.9 = 15 − 9.8 = 5.2 eV.',
          },
          {
            q: '[JEE Advanced] A ruby laser produces pulses of 694.3 nm light. Each pulse delivers 1 J of energy. How many photons are in one pulse?',
            a: '<i>N</i> = <i>E</i>/(<i>hν</i>) = <i>Eλ</i>/(<i>hc</i>) = (1 J) × (694.3 × 10<sup>−9</sup> m)/(6.626 × 10<sup>−34</sup> × 3 × 10<sup>8</sup>) = 6.943 × 10<sup>−7</sup>/(1.988 × 10<sup>−25</sup>) = 3.49 × 10<sup>18</sup> photons.',
          },
          {
            q: '[JEE Advanced] In a Zeeman effect experiment with <i>B</i> = 1.5 T, the splitting of the Na D<sub>1</sub> line is observed. Given that the Landé <i>g</i>-factor for the <sup>2</sup>S<sub>1/2</sub> state is <i>g</i> = 2 and for <sup>2</sup>P<sub>1/2</sub> is <i>g</i> = 2/3, calculate the energy separation (in eV) between the <i>m</i><sub>J</sub> = +1/2 and <i>m</i><sub>J</sub> = −1/2 components of the <sup>2</sup>S<sub>1/2</sub> ground state.',
            a: 'The Zeeman shift for a state with magnetic quantum number <i>m</i><sub>J</sub> and Landé factor <i>g</i> is Δ<i>E</i> = <i>gμ</i><sub>B</sub><i>Bm</i><sub>J</sub>. For the <sup>2</sup>S<sub>1/2</sub> ground state, <i>g</i> = 2, <i>m</i><sub>J</sub> = ±1/2.<br>Δ<i>E</i> = 2<i>μ</i><sub>B</sub><i>B</i> × (1/2 − (−1/2)) = 2<i>μ</i><sub>B</sub><i>B</i>.<br>With <i>B</i> = 1.5 T: Δ<i>E</i> = 2 × (9.274 × 10<sup>−24</sup>) × 1.5 = 2.782 × 10<sup>−23</sup> J = 1.74 × 10<sup>−4</sup> eV.',
          },
          {
            q: '[JEE Advanced] Show that the fine-structure correction to the Bohr energy levels scales as <i>α</i><sup>2</sup><i>E</i><sub><i>n</i></sub>, where <i>α</i> = <i>e</i><sup>2</sup>/(4πε<sub>0</sub><i>ħc</i>) is the fine-structure constant. Estimate its magnitude for the hydrogen ground state.',
            a: 'From the Dirac formula, the fine-structure correction scales as <i>α</i><sup>2</sup><i>E</i><sub><i>n</i></sub>. The fine-structure constant <i>α</i> = <i>e</i><sup>2</sup>/(4πε<sub>0</sub><i>ħc</i>) ≈ 1/137. For the ground state <i>n</i> = 1, <i>E</i><sub>1</sub> = −13.6 eV.<br>Δ<i>E</i><sub>fs</sub> ∼ <i>α</i><sup>2</sup>|<i>E</i><sub>1</sub>| ∼ (1/137)<sup>2</sup> × 13.6 eV ≈ 13.6/18769 ≈ 7.2 × 10<sup>−4</sup> eV, i.e. of order 10<sup>−4</sup>–10<sup>−3</sup> eV. (The Dirac formula gives the exact ground-state shift as (<i>α</i><sup>2</sup>/4) × 13.6 ≈ 1.8 × 10<sup>−4</sup> eV.) This shifts the single 1s level; there is nothing to resolve at <i>n</i> = 1 (only <i>j</i> = 1/2), and the measurable fine-structure splittings appear from <i>n</i> = 2.',
          },
          {
            q: '[CBSE] Give two experimental evidences that support the existence of quantised energy levels in atoms.',
            a: '(Any two:) (i) Franck-Hertz experiment: electrons lose energy in quanta of ~4.9 eV when colliding with mercury atoms, proving discrete energy levels exist. (ii) Atomic spectra: atoms emit/absorb only specific wavelengths, consistent with transitions between discrete energy levels. (iii) Characteristic X-ray lines (Moseley) and the dark absorption lines in the solar spectrum: sharp lines at fixed wavelengths show that the energy differences between atomic levels are fixed.',
          },
          {
            q: '[NEET] Which of the following statements about lasers is correct? (a) Laser light is incoherent, (b) Laser light is produced by spontaneous emission, (c) Population inversion is necessary for laser action, (d) All atoms in a laser are in the excited state.',
            a: '(c) Population inversion is necessary for laser action. Spontaneous emission produces incoherent light; stimulated emission (requiring population inversion) produces coherent laser light.',
          },
          {
            q: '[JEE Main] The wavelength of the K<sub>α</sub> line for an element is 0.175 nm. Using Moseley’s law with screening constant <i>b</i> = 1, find the atomic number of the element.',
            a: '<i>ν</i> = <i>c</i>/<i>λ</i> = 3 × 10<sup>8</sup>/(0.175 × 10<sup>−9</sup>) = 1.714 × 10<sup>18</sup> Hz. √<i>ν</i> = 1.309 × 10<sup>9</sup> Hz<sup>1/2</sup>. Moseley’s law in Rydberg form, √<i>ν</i> = √((3/4)<i>cR</i>)(<i>Z</i> − 1), gives <i>a</i> = √((3/4)<i>cR</i>) = √(0.75 × 3 × 10<sup>8</sup> × 1.097 × 10<sup>7</sup>) = 4.97 × 10<sup>7</sup> Hz<sup>1/2</sup>. With <i>b</i> = 1: <i>Z</i> − 1 = 1.309 × 10<sup>9</sup>/(4.97 × 10<sup>7</sup>) = 26.3. <i>Z</i> ≈ 27. Element: Cobalt (Co, <i>Z</i> = 27) — the same wavelength and answer as the third worked example of Additional topic B.',
          },
          {
            q: '[JEE Advanced] A hydrogen atom in the <i>n</i> = 3 state can return to the ground state through the transitions 3 → 1, 3 → 2 and 2 → 1. Let their photon wavelengths be <i>λ</i><sub>1</sub> (3 → 1), <i>λ</i><sub>2</sub> (3 → 2) and <i>λ</i><sub>3</sub> (2 → 1). Show that <i>λ</i><sub>2</sub> is the longest of the three wavelengths.',
            a: 'The three possible wavelengths for de-excitation from <i>n</i> = 3 are:<br>• 3 → 1: 1/<i>λ</i><sub>1</sub> = <i>R</i>(1/1<sup>2</sup> − 1/3<sup>2</sup>) = <i>R</i>(1 − 1/9) = 8<i>R</i>/9.<br>• 3 → 2: 1/<i>λ</i><sub>2</sub> = <i>R</i>(1/2<sup>2</sup> − 1/3<sup>2</sup>) = <i>R</i>(1/4 − 1/9) = 5<i>R</i>/36.<br>• 2 → 1: 1/<i>λ</i><sub>3</sub> = <i>R</i>(1/1<sup>2</sup> − 1/2<sup>2</sup>) = <i>R</i>(1 − 1/4) = 3<i>R</i>/4.<br>Since 1/<i>λ</i> is proportional to the photon energy, the longest wavelength belongs to the smallest energy gap. The three gaps are Δ<i>E</i><sub>31</sub> = 13.6 × 8/9 = 12.09 eV, Δ<i>E</i><sub>21</sub> = 13.6 × 3/4 = 10.2 eV and Δ<i>E</i><sub>32</sub> = 13.6 × 5/36 = 1.89 eV. So Δ<i>E</i><sub>31</sub> > Δ<i>E</i><sub>21</sub> > Δ<i>E</i><sub>32</sub>, and therefore <i>λ</i><sub>1</sub> < <i>λ</i><sub>3</sub> < <i>λ</i><sub>2</sub>. Numerically <i>λ</i><sub>1</sub> = 102.6 nm, <i>λ</i><sub>3</sub> = 121.5 nm (121.6 nm measured), <i>λ</i><sub>2</sub> = 656 nm. Hence <i>λ</i><sub>2</sub> is the longest wavelength. QED.',
          },
        ],
      },
    ],
  },
];
