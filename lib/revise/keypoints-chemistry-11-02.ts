/**
 * KEY POINTS for Chemistry Class 11, Chapter 2 (Structure of Atom).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–04 are 0–3; Additional topics A–D are 4–7; Additional
 * topic E, What JEE and NEET Actually Ask (the book's Addendum P), is 8.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key formulas and definitions and Cheat sheet. Common
 * mistakes: its Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`:
 * the cheat sheet's first two memory aids, word for word (quotation marks
 * dropped). Additional topics: the addenda's methods and worked examples;
 * Additional topic E: its observations and traps. Addendum A's f<sub>1</sub>
 * is not used (the book prints 6.57 × 10<sup>15</sup> s<sup>−1</sup>; the app
 * now carries 6.56 × 10<sup>15</sup>, as its own inputs give).
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Element
 * symbols and ions are upright (He<sup>+</sup>, Fe<sup>2+</sup>); a nuclide is
 * <sup>A</sup><sub>Z</sub>X side by side (<sup>40</sup><sub>18</sub>Ar).
 * Orbital and subshell labels are upright, as in NCERT (1s, 3d,
 * [Ar]3d<sup>6</sup>, d<sup>5</sup>, 2p<sub><i>y</i></sub>,
 * d<sub><i>z</i>²</sub>). Quantum numbers as the book sets them: <i>n</i>,
 * <i>l</i>, <i>m</i><sub><i>l</i></sub>, <i>m</i><sub><i>s</i></sub>. A
 * subscript that is the variable <i>n</i> stays italic
 * (<i>r</i><sub><i>n</i></sub>, <i>E</i><sub><i>n</i></sub>); label subscripts
 * are upright (<i>R</i><sub>H</sub>, <i>W</i><sub>0</sub>, KE<sub>max</sub>,
 * <i>n</i><sub>u</sub>). ε<sub>0</sub> and π are upright; α is italic
 * (<i>α</i>-particle, <i>α</i>-scattering), as the chapter text sets it. KE is
 * upright, as printed.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Subatomic Particles & Early Atomic Models ──
  // pp. 75, 80
  {
    topic: 0,
    kind: 'remember',
    q: 'The charge and mass of the electron, the proton and the neutron?',
    a: 'Electron: −1.602 × 10<sup>−19</sup> C, 9.11 × 10<sup>−31</sup> kg. Proton: +1.602 × 10<sup>−19</sup> C, 1.672 × 10<sup>−27</sup> kg (≈ 1.0073 u). Neutron: 0, 1.675 × 10<sup>−27</sup> kg (≈ 1.0087 u), slightly heavier than the proton',
    why: 'The electron’s mass combines Millikan’s <i>e</i> with Thomson’s <i>e</i>/<i>m</i> = 1.758 × 10<sup>11</sup> C kg<sup>−1</sup>: (1.602 × 10<sup>−19</sup>)/(1.758 × 10<sup>11</sup>) = 9.11 × 10<sup>−31</sup> kg, about 1/1837 of an H atom.',
    say: null,
  },
  // pp. 76, 78–80
  {
    topic: 0,
    kind: 'remember',
    q: 'Rutherford’s <i>α</i>-scattering: the three observations, and what each one proved?',
    a: 'Most <i>α</i>-particles passed straight through: the atom is mostly empty space. A small fraction were deflected through large angles: a concentrated lump of positive charge. A very few (~1 in 20000) bounced almost straight back: a tiny, dense, massive, positive nucleus',
    why: 'The nucleus is ∼ 10<sup>−13</sup> to 10<sup>−12</sup> cm across, the atom ∼ 10<sup>−8</sup> cm. A 5.0 MeV <i>α</i>-particle fired head-on at gold (<i>Z</i> = 79) turns back at <i>r</i><sub>0</sub> = 4.5 × 10<sup>−14</sup> m = 45 fm, far outside the ~7 fm nucleus.',
    say: 'Straight through = empty; bounced back = nucleus for Rutherford.',
  },
  // pp. 75, 78, 80
  {
    topic: 0,
    kind: 'mixup',
    q: 'Isotopes, isobars, isotones, isoelectronic species: what does each share?',
    a: 'Isotopes: the same <i>Z</i>, different <i>A</i> (<sup>1</sup><sub>1</sub>H, <sup>2</sup><sub>1</sub>H, <sup>3</sup><sub>1</sub>H). Isobars: the same <i>A</i>, different <i>Z</i> (<sup>40</sup><sub>18</sub>Ar, <sup>40</sup><sub>19</sub>K, <sup>40</sup><sub>20</sub>Ca). Isotones: the same <i>N</i>. Isoelectronic: the same number of electrons (Na<sup>+</sup> and Mg<sup>2+</sup>, 10 each)',
    why: '<sup>39</sup><sub>19</sub>K and <sup>40</sup><sub>20</sub>Ca are isotones (<i>N</i> = 20); <sup>14</sup><sub>6</sub>C and <sup>14</sup><sub>7</sub>N are isobars. <i>A</i> = <i>Z</i> + <i>N</i>.',
    say: 'toP → Proton (<i>Z</i>) / Bar → mAss (<i>A</i>) / toN → Neutron (<i>N</i>) for the iso-family.',
  },
  // pp. 77, 79
  {
    topic: 0,
    kind: 'mistake',
    q: 'A cation <i>M</i><sup>3+</sup> has 23 electrons and 30 neutrons. Is its atomic number 23?',
    a: 'No: the ion lost 3 electrons, so the neutral atom had 26 electrons and <i>Z</i> = 26, iron; <i>A</i> = 26 + 30 = 56, giving <sup>56</sup><sub>26</sub>Fe<sup>3+</sup>. A cation has fewer electrons than protons, an anion more',
    why: '17 protons, 18 neutrons and 18 electrons make the anion <sup>35</sup><sub>17</sub>Cl<sup>−</sup>, isoelectronic with argon, not an isotope of it.',
    say: null,
  },
  // pp. 77–78, 80
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Which has the highest specific charge <i>e</i>/<i>m</i>: a proton, a deuteron, an <i>α</i>-particle or an electron? The fast way?',
    a: 'Never compute full values: write each as (charge in units of <i>e</i>) ÷ (mass in u) — proton 1/1 = 1, deuteron 1/2, <i>α</i>-particle 2/4 = 1/2 — and remember the electron, if listed, almost always wins: its mass is ~1837× smaller than a proton’s',
    why: 'So in increasing <i>e</i>/<i>m</i>: neutron (0) < <sup>4</sup><sub>2</sub>He<sup>2+</sup> = <sup>12</sup><sub>6</sub>C<sup>6+</sup> (1/2 per u) < <sup>1</sup><sub>1</sub>H<sup>+</sup> (1).',
    say: null,
  },

  // ── Topic 02 · Electromagnetic Radiation, Planck’s Quantum Theory & the Photoelectric Effect ──
  // pp. 82–83, 86–87
  {
    topic: 1,
    kind: 'remember',
    q: 'The energy of one photon of frequency <i>ν</i> or wavelength <i>λ</i>, and the shortcut?',
    a: '<i>E</i> = <i>hν</i> = <i>hc</i>/<i>λ</i> = <i>hc</i><i>ν̄</i>, with <i>h</i> = 6.626 × 10<sup>−34</sup> J s and <i>c</i> = <i>νλ</i>; <i>n</i> quanta carry <i>nhν</i>. Shortcut: <i>E</i>(eV) = 1240/<i>λ</i>(nm)',
    why: '<i>hc</i> = (6.626 × 10<sup>−34</sup>)(3 × 10<sup>8</sup>) = 1.988 × 10<sup>−25</sup> J m; dividing by 1.602 × 10<sup>−19</sup> J/eV and working in nanometres gives 1240 eV nm. So 620 nm light is 2.0 eV.',
    say: null,
  },
  // pp. 82–84, 86–87
  {
    topic: 1,
    kind: 'remember',
    q: 'Einstein’s photoelectric equation, the work function and the stopping potential?',
    a: '<i>hν</i> = <i>W</i><sub>0</sub> + KE<sub>max</sub>, so KE<sub>max</sub> = <i>h</i>(<i>ν</i> − <i>ν</i><sub>0</sub>) = <i>eV</i><sub>0</sub>, with <i>W</i><sub>0</sub> = <i>hν</i><sub>0</sub> = <i>hc</i>/<i>λ</i><sub>0</sub>. If <i>hν</i> < <i>W</i><sub>0</sub>, no electrons are emitted',
    why: '250 nm light on a 3.0 eV metal: 1240/250 − 3.0 = 1.96 eV, so <i>V</i><sub>0</sub> = 1.96 V. A plot of <i>V</i><sub>0</sub> against <i>ν</i> is a straight line of slope <i>h</i>/<i>e</i> crossing the axis at <i>ν</i><sub>0</sub>.',
    say: null,
  },
  // pp. 83–84, 86–87
  {
    topic: 1,
    kind: 'mixup',
    q: 'Above the threshold, what does raising the intensity change, and what does raising the frequency change?',
    a: 'Intensity sets the number of electrons per second (the saturation photocurrent is proportional to it); frequency sets the energy per electron, KE<sub>max</sub> and the stopping potential. Below <i>ν</i><sub>0</sub>, no intensity ejects anything',
    why: 'Each photon hands its whole <i>hν</i> to one electron, with no measurable time lag (less than 10<sup>−9</sup> s): more photons mean more electrons, not faster ones.',
    say: 'Frequency feeds the electron’s speed; intensity feeds the crowd (frequency → KE, intensity → number).',
  },
  // pp. 82, 85–87
  {
    topic: 1,
    kind: 'mistake',
    q: 'Are wavenumber and frequency the same thing?',
    a: 'No: <i>ν̄</i> = 1/<i>λ</i> has units m<sup>−1</sup> (a spatial count), while <i>ν</i> = <i>c</i>/<i>λ</i> has units Hz (a temporal count); they differ by a factor of <i>c</i>',
    why: 'Yellow sodium light of 580 nm: <i>ν</i> = 5.17 × 10<sup>14</sup> Hz but <i>ν̄</i> = 1.72 × 10<sup>6</sup> m<sup>−1</sup>.',
    say: null,
  },
  // pp. 84–85, 87
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A metal’s work function is 2.0 eV. Will 700 nm light eject photoelectrons? The fast way?',
    a: 'One division with <i>E</i>(eV) = 1240/<i>λ</i>(nm): 1240/700 = 1.77 eV < 2.0 eV, so no emission, however intense the light. And KE<sub>max</sub> in eV equals the stopping potential in volts numerically, so that needs no extra step',
    why: 'Photons per second from a beam: power ÷ energy per photon. 5.0 mW at 632.8 nm (1.96 eV = 3.14 × 10<sup>−19</sup> J) is 1.59 × 10<sup>16</sup> photons s<sup>−1</sup>.',
    say: '1240 over lambda-in-nm gives energy in eV — the one shortcut to rule them all.',
  },

  // ── Topic 03 · Bohr’s Model & Wave-Particle Duality ──
  // pp. 89, 93, 95
  {
    topic: 2,
    kind: 'remember',
    q: 'The Rydberg equation, and the lower level and region of each named series?',
    a: '<i>ν̄</i> = 1/<i>λ</i> = <i>R</i><sub>H</sub><i>Z</i><sup>2</sup>(1/<i>n</i><sub>1</sub><sup>2</sup> − 1/<i>n</i><sub>2</sub><sup>2</sup>), <i>n</i><sub>2</sub> > <i>n</i><sub>1</sub>, <i>R</i><sub>H</sub> = 1.097 × 10<sup>7</sup> m<sup>−1</sup>. Lyman <i>n</i><sub>1</sub> = 1 (UV), Balmer 2 (visible), Paschen 3, Brackett 4, Pfund 5 (all IR)',
    why: 'A sample excited to level <i>n</i> gives up to <i>n</i>(<i>n</i> − 1)/2 lines (one atom at most <i>n</i> − 1). From <i>n</i> = 5 that is 10 lines, 3 of them Balmer (5 → 2, 4 → 2, 3 → 2).',
    say: 'Lyman-Balmer-Paschen-Brackett-Pfund with UV → Visible → IR-IR-IR.',
  },
  // pp. 89, 91–92, 95
  {
    topic: 2,
    kind: 'remember',
    q: 'Radius, energy and speed in the <i>n</i>th Bohr orbit of a one-electron species of atomic number <i>Z</i>?',
    a: '<i>r</i><sub><i>n</i></sub> = 0.529 <i>n</i><sup>2</sup>/<i>Z</i> Å = 52.9 <i>n</i><sup>2</sup>/<i>Z</i> pm; <i>E</i><sub><i>n</i></sub> = −13.6 <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> eV = −2.18 × 10<sup>−18</sup> <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> J atom<sup>−1</sup> = −1312 <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> kJ mol<sup>−1</sup>; <i>v</i><sub><i>n</i></sub> = 2.18 × 10<sup>6</sup> <i>Z</i>/<i>n</i> m s<sup>−1</sup>',
    why: 'All from <i>mvr</i> = <i>nh</i>/(2π). He<sup>+</sup>, <i>n</i> = 3: <i>r</i><sub>3</sub> = 0.529 × 9/2 = 2.38 Å and <i>E</i><sub>3</sub> = −13.6 × 4/9 = −6.04 eV.',
    say: 'For scaling: radius loves <i>n</i><sup>2</sup>, energy loves <i>Z</i><sup>2</sup>, both hate the other variable.',
  },
  // pp. 90–91, 94–95
  {
    topic: 2,
    kind: 'mixup',
    q: 'In a Bohr orbit, how are the total energy <i>E</i>, the kinetic energy and the potential energy related?',
    a: 'KE = −<i>E</i> and PE = 2<i>E</i> (equivalently PE = −2 KE). For the H ground state <i>E</i> = −13.6 eV, so KE = +13.6 eV and PE = −27.2 eV',
    why: 'Energy absorbed in an upward jump and energy released in a downward one are both positive, but <i>E</i><sub><i>n</i></sub> itself is always negative: the electron is bound.',
    say: null,
  },
  // pp. 88–91, 94–95
  {
    topic: 2,
    kind: 'mistake',
    q: 'Can Bohr’s equations be applied to neutral helium?',
    a: 'No: they hold only for one-electron species, H, He<sup>+</sup>, Li<sup>2+</sup>, Be<sup>3+</sup>. A second electron brings electron–electron repulsion, which Bohr never accounted for. Check the number of electrons, not the charge',
    why: 'Bohr also fails on Zeeman and Stark splitting and on chemical bonding, and a definite orbit violates Heisenberg’s Δ<i>x</i> · Δ<i>p</i> ≥ <i>h</i>/(4π).',
    say: null,
  },
  // pp. 92, 95
  {
    topic: 2,
    kind: 'shortcut',
    q: 'The first Lyman line of hydrogen is at 1216 Å. Where is the first Lyman line of He<sup>+</sup>? The fast way?',
    a: 'Never recompute: for the same transition, wavelength scales as 1/<i>Z</i><sup>2</sup> and energy as <i>Z</i><sup>2</sup>, so 1216/4 = 304 Å',
    why: 'For the region, lower <i>n</i><sub>1</sub> means higher energy: Lyman = UV, Balmer = visible, the rest = IR.',
    say: null,
  },

  // ── Topic 04 · Quantum Model, Orbitals & Electron Configurations ──
  // pp. 97, 101–102
  {
    topic: 3,
    kind: 'remember',
    q: 'The allowed values of the four quantum numbers, and the orbital and electron counts?',
    a: '<i>n</i> = 1, 2, 3, …; <i>l</i> = 0 to (<i>n</i> − 1); <i>m</i><sub><i>l</i></sub> = −<i>l</i> to +<i>l</i>; <i>m</i><sub><i>s</i></sub> = +½ or −½. Orbitals: 2<i>l</i> + 1 per subshell, <i>n</i><sup>2</sup> per shell; electrons: 4<i>l</i> + 2 per subshell, 2<i>n</i><sup>2</sup> per shell',
    why: 'So at most 16 electrons have <i>n</i> = 4 and <i>m</i><sub><i>s</i></sub> = +½, one per orbital. Orbital angular momentum <i>L</i> = √(<i>l</i>(<i>l</i> + 1)) <i>h</i>/(2π), zero for an s electron.',
    say: '<i>n</i> = city, <i>l</i> = street, <i>m</i><sub><i>l</i></sub> = house, <i>m</i><sub><i>s</i></sub> = seat for the QN address.',
  },
  // pp. 97–99, 101–102
  {
    topic: 3,
    kind: 'remember',
    q: 'The radial, angular and total nodes of an orbital with quantum numbers <i>n</i>, <i>l</i>?',
    a: 'Radial = <i>n</i> − <i>l</i> − 1, angular = <i>l</i>, total = <i>n</i> − 1. A 4d orbital has 1 radial, 2 angular, 3 in all',
    why: 'A 3d orbital has no radial node, and neither has 2p<sub><i>y</i></sub>, whose one angular node is the <i>xz</i>-plane, where <i>ψ</i><sup>2</sup> = 0.',
    say: 'Radial = <i>n</i> − <i>l</i> − 1, angular = <i>l</i>, total = <i>n</i> − 1 (they must add up).',
  },
  // pp. 97–98, 100–102
  {
    topic: 3,
    kind: 'mixup',
    q: 'Which fills first in a multi-electron atom, 4s or 3d? And in hydrogen, do 2s and 2p differ in energy?',
    a: '4s: by the (<i>n</i> + <i>l</i>) rule 4s (4) lies below 3d (5) (ties go to the lower <i>n</i>, as 3p before 4s). In a one-electron species energy depends on <i>n</i> alone, so 2s and 2p are degenerate',
    why: 'Filling order: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s …; 3p (4) < 4s (4) < 3d (5) < 4p (5).',
    say: null,
  },
  // pp. 98–100, 102
  {
    topic: 3,
    kind: 'mistake',
    q: 'Fe is [Ar]3d<sup>6</sup>4s<sup>2</sup>. Is Fe<sup>2+</sup> [Ar]3d<sup>4</sup>4s<sup>2</sup>?',
    a: 'No, [Ar]3d<sup>6</sup>: electrons leave from the highest <i>n</i> first, so the 4s pair goes before any 3d electron, even though 4s filled first',
    why: 'Half-filled and fully-filled d subshells take a 4s electron for extra stability: Cr = [Ar]3d<sup>5</sup>4s<sup>1</sup>, Cu = [Ar]3d<sup>10</sup>4s<sup>1</sup>.',
    say: null,
  },
  // pp. 100, 102
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Is (<i>n</i>, <i>l</i>, <i>m</i><sub><i>l</i></sub>, <i>m</i><sub><i>s</i></sub>) = (2, 2, 0, −½) allowed? The fast check?',
    a: 'Run the chain: <i>l</i> must be < <i>n</i>, and |<i>m</i><sub><i>l</i></sub>| ≤ <i>l</i>; one violation means impossible. Here <i>l</i> = 2 is not less than <i>n</i> = 2, so no',
    why: 'For node counts, anchor on <i>n</i> − 1 = total and split it; for ion configurations, write the neutral atom first, then strip the highest-<i>n</i> electrons.',
    say: null,
  },

  // ── Additional A · The Electron’s Clock: Time Period and Frequency of Revolution ──
  // pp. 103–104
  {
    topic: 4,
    kind: 'remember',
    q: 'How do the time period and frequency of revolution scale in a Bohr orbit?',
    a: '<i>T</i><sub><i>n</i></sub> = 2π<i>r</i><sub><i>n</i></sub>/<i>v</i><sub><i>n</i></sub> ∝ (<i>n</i><sup>2</sup>/<i>Z</i>)/(<i>Z</i>/<i>n</i>) = <i>n</i><sup>3</sup>/<i>Z</i><sup>2</sup>, and <i>f</i><sub><i>n</i></sub> = 1/<i>T</i><sub><i>n</i></sub> ∝ <i>Z</i><sup>2</sup>/<i>n</i><sup>3</sup>: as <i>n</i> rises the orbit grows as <i>n</i><sup>2</sup> and the electron slows as 1/<i>n</i>',
    why: 'So <i>T</i><sub>1</sub> ∶ <i>T</i><sub>3</sub> = 1 ∶ 27 in He<sup>+</sup>, not the 1 ∶ 9 of the radius scaling; the first-orbit frequencies of H and Li<sup>2+</sup> are in the ratio 1 ∶ 9.',
    say: null,
  },
  // pp. 103–104
  {
    topic: 4,
    kind: 'remember',
    q: 'The period of the hydrogen ground-state electron, and the current its revolution makes?',
    a: '<i>T</i><sub>1</sub> = 2π(5.29 × 10<sup>−11</sup>)/(2.18 × 10<sup>6</sup>) = 1.52 × 10<sup>−16</sup> s. A circling charge is a current loop: <i>I</i> = <i>e</i>/<i>T</i> = <i>ef</i> = (1.6 × 10<sup>−19</sup>)/(1.52 × 10<sup>−16</sup>) ≈ 1.05 × 10<sup>−3</sup> A, about a milliampere',
    why: 'Any orbit of any one-electron ion: <i>T</i><sub><i>n</i></sub> = 1.52 × 10<sup>−16</sup> × <i>n</i><sup>3</sup>/<i>Z</i><sup>2</sup> s. Hydrogen, <i>n</i> = 2: <i>f</i> = <i>v</i>/(2π<i>r</i>) = (1.09 × 10<sup>6</sup>)/(2π × 2.12 × 10<sup>−10</sup>) ≈ 8.2 × 10<sup>14</sup> s<sup>−1</sup>.',
    say: null,
  },

  // ── Additional B · Reading Radial Probability ──
  // pp. 105–107
  {
    topic: 5,
    kind: 'remember',
    q: 'For a 1s orbital, where is <i>ψ</i><sup>2</sup> largest, and at what distance is the electron most likely to be found?',
    a: '<i>ψ</i><sup>2</sup>, the probability per unit volume, is largest at the nucleus (<i>r</i> = 0). But the probability in a thin shell, 4π<i>r</i><sup>2</sup><i>ψ</i><sup>2</sup> d<i>r</i>, is zero at <i>r</i> = 0 and peaks at exactly <i>r</i> = <i>a</i><sub>0</sub> = 52.9 pm: the most probable distance',
    why: 'The average distance ⟨<i>r</i>⟩ = 1.5 <i>a</i><sub>0</sub> is larger, the common confusion. A curve that does not start at zero is a <i>ψ</i><sup>2</sup> density plot, not a radial distribution.',
    say: null,
  },
  // pp. 105–107
  {
    topic: 5,
    kind: 'remember',
    q: 'How many peaks does the radial probability distribution of an orbital (<i>n</i>, <i>l</i>) have?',
    a: '<i>n</i> − <i>l</i>, one more than its radial nodes (<i>n</i> − <i>l</i> − 1), which show as zeros between the peaks: 3s, 3p and 3d have three, two and one; 4p has three',
    why: 'A peak count fixes <i>n</i> − <i>l</i>, not <i>n</i> and <i>l</i> separately: two peaks with one node fit 2s, 3p and 4d alike. Angular nodes never show on a radial plot.',
    say: null,
  },

  // ── Additional C · Spectral Arithmetic ──
  // pp. 108–109
  {
    topic: 6,
    kind: 'remember',
    q: 'Hydrogen atoms in the 4th excited state fall to the ground state. How many lines in all, in the UV, in the visible, and in the Paschen series?',
    a: 'The 4th excited state is <i>n</i> = 5: 5 × 4/2 = 10 in all; Lyman (UV) 5 − 1 = 4; Balmer (visible) 5 − 2 = 3; Paschen 5 − 3 = 2',
    why: 'Each series collects the transitions ending on its lower level: Lyman <i>n</i> − 1, Balmer <i>n</i> − 2, Paschen <i>n</i> − 3, …, which add up to <i>n</i>(<i>n</i> − 1)/2. The ground state is the zeroth excited state.',
    say: null,
  },
  // pp. 108–109
  {
    topic: 6,
    kind: 'remember',
    q: 'The shortest wavelength of hydrogen’s Lyman series is <i>X</i>. The wavelength of the first Balmer line?',
    a: 'Lyman limit (∞ → 1): 1/<i>X</i> = <i>R</i><sub>H</sub>. Balmer first line (3 → 2): 1/<i>λ</i> = <i>R</i><sub>H</sub>(1/4 − 1/9) = 5<i>R</i><sub>H</sub>/36, so <i>λ</i> = 36<i>X</i>/5 = 7.2<i>X</i>',
    why: '<i>R</i><sub>H</sub> cancels in any ratio of lines of one ion. 9<i>X</i>/5, from using 5/9 for the bracket, is the common wrong answer; the series limit is the shortest wavelength, the first line the longest.',
    say: null,
  },

  // ── Additional D · Degeneracy, Unpaired Electrons and Spin Bookkeeping ──
  // pp. 110–111
  {
    topic: 7,
    kind: 'remember',
    q: 'Are 3p and 3d orbitals degenerate?',
    a: 'In a one-electron species (H, He<sup>+</sup>, Li<sup>2+</sup>, …) yes: energy depends on <i>n</i> alone, so level <i>n</i> is <i>n</i><sup>2</sup>-fold degenerate, 9-fold for <i>n</i> = 3. In a multi-electron atom no: shielding splits the subshells, and only orbitals within one subshell stay degenerate',
    why: '(3, 2, −2, −½) and (3, 2, −1, −½) are degenerate, both 3d; 3p with 3d, or 4d with 3d, are not.',
    say: null,
  },
  // pp. 110–111
  {
    topic: 7,
    kind: 'remember',
    q: 'Unpaired electrons in d<sup>1</sup> to d<sup>10</sup>, and what they decide?',
    a: 'd<sup>1</sup> to d<sup>5</sup>: 1 to 5; then pairing begins, and d<sup>6</sup>, d<sup>7</sup>, d<sup>8</sup>, d<sup>9</sup>, d<sup>10</sup> have 4, 3, 2, 1, 0. The spin-only moment is <i>μ</i> = √(<i>n</i><sub>u</sub>(<i>n</i><sub>u</sub> + 2)) BM; <i>n</i><sub>u</sub> = 0 is diamagnetic, <i>n</i><sub>u</sub> > 0 paramagnetic',
    why: 'So d<sup>9</sup> (√3 = 1.73 BM) is less magnetic than d<sup>3</sup>. Paired spins cancel: the net spin of 3d<sup>7</sup> is ±3/2, not 7/2.',
    say: null,
  },

  // ── Additional E · What JEE and NEET Actually Ask ──
  // pp. 112–113, 116
  {
    topic: 8,
    kind: 'remember',
    q: 'Which question formats does each exam favour on this chapter?',
    a: 'NEET is dominated by assertion–reason and statement items on the historical and conceptual material (Thomson’s model, Planck’s postulates, isotopes, Bohr’s limits). JEE Main owns the numerical and matching formats: quantum-number matching, radial-curve identification, time-period ratios, degenerate pairs',
    why: 'Some questions are cross-topic in disguise: the longest wavelength that breaks one Cl–Cl bond (242 kJ mol<sup>−1</sup>) is <i>E</i> = <i>hc</i>/<i>λ</i> per bond, 4.02 × 10<sup>−19</sup> J, so 494 nm.',
    say: null,
  },
  // pp. 114–115
  {
    topic: 8,
    kind: 'mistake',
    q: 'd<sub><i>z</i>²</sub> has two angular nodes. Are they two nodal planes?',
    a: 'No: its angular nodes are cones, so d<sub><i>z</i>²</sub> has no nodal planes. d<sub><i>xy</i></sub>, d<sub><i>yz</i></sub> and d<sub><i>zx</i></sub> each have two (for d<sub><i>zx</i></sub>, the <i>xy</i>- and <i>yz</i>-planes)',
    why: 'Two more traps: quadrupling the kinetic energy halves the de Broglie wavelength, <i>λ</i> = <i>h</i>/√(2<i>m</i>KE); and the 4th excited state is <i>n</i> = 5.',
    say: null,
  },
];
