/**
 * KEY POINTS for Physics Class 12, Chapter 12 (Atoms).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–03 are 0–2 (the book's Subtopics 01, 02a, 02b);
 * Additional topics A–G are 3–9 (G is the book's Comprehensive Practice).
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key formulas and Cheat sheet. Common mistakes: its
 * Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's mnemonics, word for word (quotation marks dropped). Additional
 * topics: the Supplement's addenda.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Frequency is
 * the Greek <i>ν</i>; speed is the Latin <i>v</i>. A subscript that is a
 * variable stays italic (<i>r</i><sub><i>n</i></sub>, <i>E</i><sub><i>n</i></sub>);
 * label subscripts are upright (<i>n</i><sub>f</sub>, <i>n</i><sub>i</sub>,
 * <i>λ</i><sub>min</sub>, <i>E</i><sub>exc</sub>, <i>m</i><sub>e</sub>,
 * <i>M</i><sub>N</sub>, <i>μ</i><sub>B</sub>, <i>m</i><sub>L</sub>); digit
 * subscripts are upright. ε<sub>0</sub> and π are upright.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Alpha-particle Scattering and Rutherford’s Nuclear Model ──
  // pp. 762–763, 767, 770
  {
    topic: 0,
    kind: 'remember',
    q: 'What did the Geiger–Marsden α-scattering experiment show, and what did Rutherford conclude?',
    a: 'Most α-particles fired at a thin gold foil passed almost straight through; a small fraction were deflected through large angles, about 1 in 8000 by more than 90°, some almost straight back. So the atom is mostly empty space, with its positive charge in a tiny, dense nucleus roughly 10<sup>−14</sup> m across, against about 10<sup>−10</sup> m for the atom',
    why: 'Undeviated passage shows the empty space; the rare backward bounces show a concentrated charge. Electrons, about 7300 times lighter than an α-particle, cannot turn it back.',
    say: null,
  },
  // pp. 763–765, 767, 770
  {
    topic: 0,
    kind: 'remember',
    q: 'The distance of closest approach of an α-particle fired head-on at a nucleus?',
    a: 'At the turning point all its kinetic energy has become potential energy: <i>K</i> = 2<i>Ze</i><sup>2</sup>/(4πε<sub>0</sub><i>d</i>), so <i>d</i> = 2<i>Ze</i><sup>2</sup>/(4πε<sub>0</sub><i>K</i>), for a stationary nucleus and a pure Coulomb force. <i>d</i> ∝ <i>Z</i>, <i>d</i> ∝ 1/<i>K</i>, <i>d</i> ∝ 1/<i>v</i><sup>2</sup>',
    why: 'A 6.4 MeV α-particle on silver (<i>Z</i> = 47): <i>d</i> ≈ 2.1 × 10<sup>−14</sup> m. Doubling the kinetic energy halves <i>d</i>.',
    say: null,
  },
  // pp. 764, 766, 769–770
  {
    topic: 0,
    kind: 'mixup',
    q: 'The impact parameter <i>b</i> and the distance of closest approach <i>d</i>: which is which?',
    a: '<i>b</i> is the sideways offset of the α-particle’s initial line from the centre of the nucleus, before the collision: <i>b</i> = (<i>Ze</i><sup>2</sup>/(4πε<sub>0</sub><i>K</i>)) cot(<i>θ</i>/2). <i>d</i> is the minimum separation during a head-on collision: <i>d</i> = 2<i>Ze</i><sup>2</sup>/(4πε<sub>0</sub><i>K</i>). <i>b</i> = 0 gives <i>θ</i> = 180°; <i>b</i> → ∞ gives <i>θ</i> → 0°',
    why: '5 MeV α-particles on gold: <i>b</i> ≈ 2.3 × 10<sup>−14</sup> m for a 90° deflection; twice that <i>b</i> (cot(<i>θ</i>/2) = 2) gives <i>θ</i> ≈ 53°.',
    say: 'Big <i>b</i>, small bend (large impact parameter → small angle).',
  },
  // pp. 766, 768–769
  {
    topic: 0,
    kind: 'mistake',
    q: 'An α-particle and a proton are accelerated through the same potential difference and fired head-on at gold. Is <i>d</i><sub>α</sub> twice <i>d</i><sub>p</sub>?',
    a: 'No: a charge <i>q</i> accelerated through <i>V</i> gains <i>K</i> = <i>qV</i>, so <i>d</i> = <i>qZe</i>/(4πε<sub>0</sub><i>qV</i>) = <i>Ze</i>/(4πε<sub>0</sub><i>V</i>): the charge cancels and the two stop at the same distance, 1 ∶ 1',
    why: 'Given the same momentum instead, <i>K</i> = <i>p</i><sup>2</sup>/(2<i>m</i>) makes <i>d</i> ∝ <i>qm</i>, so <i>d</i><sub>α</sub> ∶ <i>d</i><sub>p</sub> = 8 ∶ 1 (<i>m</i><sub>α</sub> = 4<i>m</i><sub>p</sub>).',
    say: null,
  },
  // pp. 764, 768–770
  {
    topic: 0,
    kind: 'shortcut',
    q: 'A ratio or comparison question on α-scattering. The fast way?',
    a: 'Never plug in full numbers: use <i>d</i> ∝ <i>Z</i>/<i>K</i>, <i>b</i> ∝ (<i>Z</i>/<i>K</i>) cot(<i>θ</i>/2) and <i>N</i> ∝ <i>Z</i><sup>2</sup><i>t</i>/(<i>K</i><sup>2</sup> sin<sup>4</sup>(<i>θ</i>/2)), and divide. Check the extremes: <i>b</i> = 0 ⇔ <i>θ</i> = 180° (head-on), <i>b</i> → ∞ ⇔ <i>θ</i> → 0°',
    why: '<i>N</i>(90°)/<i>N</i>(180°) = sin<sup>4</sup> 90°/sin<sup>4</sup> 45° = 4. Doubling <i>Z</i> and halving <i>K</i> makes <i>d</i> four times larger.',
    say: 'Sin-four says far-few (large angles are rare, ∝ 1/sin<sup>4</sup>).',
  },

  // ── Topic 02 · Bohr’s Model and Energy Levels ──
  // pp. 772–773, 775, 778–779
  {
    topic: 1,
    kind: 'remember',
    q: 'Bohr’s three postulates?',
    a: '(1) Electrons occupy certain stationary orbits and do not radiate in them; (2) angular momentum is quantised, <i>mvr</i> = <i>nh</i>/(2π), <i>n</i> = 1, 2, 3, …; (3) on a jump between orbits, <i>hν</i> = <i>E</i><sub>i</sub> − <i>E</i><sub>f</sub>',
    why: 'Only angular momentum is postulated quantised; quantised energy and radius follow from it. De Broglie’s reason: 2π<i>r</i> = <i>nλ</i> with <i>λ</i> = <i>h</i>/(<i>mv</i>) gives <i>mvr</i> = <i>nh</i>/(2π).',
    say: null,
  },
  // pp. 773–774, 776–779
  {
    topic: 1,
    kind: 'remember',
    q: 'The radius, speed and energy of the <i>n</i>-th orbit of a hydrogen-like atom?',
    a: 'For one electron round a nucleus of charge +<i>Ze</i>: <i>r</i><sub><i>n</i></sub> = ε<sub>0</sub><i>n</i><sup>2</sup><i>h</i><sup>2</sup>/(π<i>mZe</i><sup>2</sup>) = <i>a</i><sub>0</sub><i>n</i><sup>2</sup>/<i>Z</i>, <i>a</i><sub>0</sub> = 0.529 Å; <i>v</i><sub><i>n</i></sub> = <i>Ze</i><sup>2</sup>/(2ε<sub>0</sub><i>nh</i>) = 2.19 × 10<sup>6</sup> (<i>Z</i>/<i>n</i>) m s<sup>−1</sup>; <i>E</i><sub><i>n</i></sub> = −<i>me</i><sup>4</sup><i>Z</i><sup>2</sup>/(8ε<sub>0</sub><sup>2</sup><i>h</i><sup>2</sup><i>n</i><sup>2</sup>) = −13.6 <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> eV',
    why: 'Hydrogen, <i>n</i> = 3: <i>r</i><sub>3</sub> ≈ 4.76 Å, <i>E</i><sub>3</sub> ≈ −1.51 eV. The period goes as <i>T</i> ∝ <i>n</i><sup>3</sup>/<i>Z</i><sup>2</sup>: from <i>n</i> = 1 to <i>n</i> = 2 it grows 8 times.',
    say: 'Radius rises, |<i>E</i>| and speed fall with <i>n</i> (<i>r</i> ↑ as <i>n</i><sup>2</sup>; <i>v</i>, |<i>E</i>| ↓).',
  },
  // pp. 774–775, 779
  {
    topic: 1,
    kind: 'mixup',
    q: 'The kinetic, potential and total energy of a Bohr orbit: how are they related, and what are their signs?',
    a: '<i>E</i><sub><i>n</i></sub> is negative because the electron is bound; KE = −<i>E</i><sub><i>n</i></sub> = +13.6 <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> eV and PE = 2<i>E</i><sub><i>n</i></sub> = −2 KE. Freeing the electron (to <i>E</i> = 0) costs exactly its kinetic energy',
    why: 'Hydrogen, <i>n</i> = 2: <i>E</i> = −3.4 eV, KE = +3.4 eV, PE = −6.8 eV. From the ground state the cost is 13.6 eV, the ionisation energy.',
    say: null,
  },
  // pp. 773, 777–779
  {
    topic: 1,
    kind: 'mistake',
    q: 'Is the <i>n</i> = 2 energy of He<sup>+</sup> the same −3.4 eV as hydrogen’s?',
    a: 'No: <i>E</i><sub><i>n</i></sub> = −13.6 <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> eV with <i>Z</i> = 2 gives −13.6 eV. Ions carry <i>Z</i><sup>2</sup> in the energy, 1/<i>Z</i> in the radius and <i>Z</i> in the speed. And Bohr’s formulas hold only for one-electron systems (H, He<sup>+</sup>, Li<sup>2+</sup>, …), never for neutral He or Na',
    why: '−3.4 eV forgets the <i>Z</i><sup>2</sup>; −54.4 eV is the He<sup>+</sup> ground state; −6.8 eV uses <i>Z</i>/<i>n</i><sup>2</sup> instead of <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup>.',
    say: '<i>Z</i>-squared sinks the energy (higher <i>Z</i> = deeper, more negative level).',
  },
  // pp. 776, 779
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A Bohr comparison across orbits or ions. The fast way?',
    a: 'Memorise three scalings, <i>r</i> ∝ <i>n</i><sup>2</sup>/<i>Z</i>, <i>v</i> ∝ <i>Z</i>/<i>n</i>, <i>E</i> ∝ <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup>, and three anchors, <i>a</i><sub>0</sub> = 0.529 Å, <i>v</i><sub>1</sub> = 2.19 × 10<sup>6</sup> m s<sup>−1</sup>, <i>E</i><sub>1</sub> = −13.6 eV; then divide, never compute fully. Any state with <i>Z</i> = <i>n</i> has exactly −13.6 eV',
    why: 'He<sup>+</sup> in <i>n</i> = 2 and Li<sup>2+</sup> in <i>n</i> = 3 both have −13.6 eV; Be<sup>3+</sup> in <i>n</i> = 2 has −54.4 eV.',
    say: '<i>Z</i> = <i>n</i> gives −13.6.',
  },

  // ── Topic 03 · Atomic Spectra and the Hydrogen Spectral Series ──
  // pp. 784, 786–787, 790
  {
    topic: 2,
    kind: 'remember',
    q: 'The Rydberg formula for a hydrogen-like atom, and the energy of the emitted photon?',
    a: '1/<i>λ</i> = <i>RZ</i><sup>2</sup>(1/<i>n</i><sub>f</sub><sup>2</sup> − 1/<i>n</i><sub>i</sub><sup>2</sup>), <i>n</i><sub>i</sub> > <i>n</i><sub>f</sub>, with <i>R</i> = 1.097 × 10<sup>7</sup> m<sup>−1</sup> (infinitely heavy nucleus). The photon carries <i>E</i> = 13.6 <i>Z</i><sup>2</sup>(1/<i>n</i><sub>f</sub><sup>2</sup> − 1/<i>n</i><sub>i</sub><sup>2</sup>) eV, and <i>λ</i>(nm) = 1240/<i>E</i>(eV). The lower level <i>n</i><sub>f</sub> names the series',
    why: 'Hydrogen 4 → 2: 1/<i>λ</i> = 3<i>R</i>/16, <i>λ</i> ≈ 486 nm, the blue-green H<sub>β</sub> line of the Balmer series.',
    say: null,
  },
  // pp. 783–785, 790
  {
    topic: 2,
    kind: 'remember',
    q: 'The five spectral series of hydrogen, and which line of a series is the longest and which the shortest?',
    a: 'Lyman, <i>n</i><sub>f</sub> = 1 (ultraviolet); Balmer, 2 (visible); Paschen, 3, and Brackett, 4 (infrared); Pfund, 5 (far infrared). The first line, <i>n</i><sub>i</sub> = <i>n</i><sub>f</sub> + 1, is the longest wavelength; the series limit, <i>n</i><sub>i</sub> → ∞, is the shortest: <i>λ</i><sub>min</sub> = <i>n</i><sub>f</sub><sup>2</sup>/(<i>RZ</i><sup>2</sup>)',
    why: 'Hydrogen: Lyman 121.6 nm down to 91.2 nm; Balmer H<sub>α</sub> 656.3 nm down to 364.6 nm; Paschen 1875 nm down to 820.4 nm.',
    say: 'Lazy Boys Play Bridge in Patna (Lyman, Balmer, Paschen, Brackett, Pfund).',
  },
  // pp. 785, 788–790
  {
    topic: 2,
    kind: 'mixup',
    q: 'Excitation energy and ionisation energy: what is the difference?',
    a: 'Excitation lifts the electron from the ground state to a higher bound level: <i>E</i><sub>exc</sub> = 13.6 <i>Z</i><sup>2</sup>(1 − 1/<i>n</i><sup>2</sup>) eV, which for hydrogen is 10.2 eV to <i>n</i> = 2 and 12.09 eV to <i>n</i> = 3. Ionisation frees it: <i>E</i><sub>ion</sub> = 13.6 <i>Z</i><sup>2</sup> eV, 13.6 eV for hydrogen',
    why: 'The potentials are the same numbers in volts: 10.2 V and 12.09 V to excite hydrogen, 13.6 V to ionise it. He<sup>+</sup> needs 54.4 eV to be ionised from its ground state.',
    say: null,
  },
  // pp. 787, 789–790
  {
    topic: 2,
    kind: 'mistake',
    q: 'Asked for the shortest wavelength in the Paschen series of hydrogen, do you use the 4 → 3 transition?',
    a: 'No: 4 → 3 is the first line, the smallest gap and the longest wavelength (1875 nm). The shortest is the series limit, <i>n</i><sub>i</sub> → ∞: <i>λ</i><sub>min</sub> = <i>n</i><sub>f</sub><sup>2</sup>/<i>R</i> = 9/<i>R</i> ≈ 820 nm',
    why: 'And keep the levels in order: <i>n</i><sub>f</sub>, the smaller, comes first in the Rydberg formula; swap them and 1/<i>λ</i> comes out negative.',
    say: 'Limit is shortest, first line is longest.',
  },
  // pp. 785–790
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Hydrogen atoms excited to the level <i>n</i> = 4 de-excite. How many distinct spectral lines, fast?',
    a: '<i>N</i> = <i>n</i>(<i>n</i> − 1)/2 = 6, counting every downward jump a sample of such atoms can make. With <i>λ</i><sub>min</sub> = <i>n</i><sub>f</sub><sup>2</sup>/(<i>RZ</i><sup>2</sup>) this answers most series questions in seconds; for a hydrogen-like ion every hydrogen wavelength scales by 1/<i>Z</i><sup>2</sup>',
    why: 'From <i>n</i> = 5: 10 lines. The 2 → 1 line of Li<sup>2+</sup> has 3<sup>2</sup> = 9 times the frequency of hydrogen’s.',
    say: null,
  },

  // ── Additional A · Bohr’s Model: Limitations, Reduced Mass, and Isotope Shifts ──
  // pp. 792–794
  {
    topic: 3,
    kind: 'remember',
    q: 'How does the finite mass of the nucleus change the Bohr results?',
    a: 'Replace <i>m</i><sub>e</sub> by the reduced mass <i>μ</i> = <i>m</i><sub>e</sub><i>M</i><sub>N</sub>/(<i>m</i><sub>e</sub> + <i>M</i><sub>N</sub>) in every Bohr formula: <i>R</i> = <i>R</i><sub>∞</sub><i>M</i><sub>N</sub>/(<i>m</i><sub>e</sub> + <i>M</i><sub>N</sub>), <i>a</i><sub>0</sub>′ = <i>a</i><sub>0</sub>(<i>m</i><sub>e</sub> + <i>M</i><sub>N</sub>)/<i>M</i><sub>N</sub>, <i>E</i><sub>1</sub>′ = <i>E</i><sub>1</sub><i>M</i><sub>N</sub>/(<i>m</i><sub>e</sub> + <i>M</i><sub>N</sub>). Of two isotopes, the lighter nucleus gives the slightly longer wavelength',
    why: 'H<sub>α</sub> is 656.3 nm in hydrogen and about 656.12 nm in deuterium (<i>λ</i><sub>H</sub>/<i>λ</i><sub>D</sub> ≈ 1.00027); this isotope shift confirmed the existence of deuterium.',
    say: null,
  },
  // pp. 793–795
  {
    topic: 3,
    kind: 'remember',
    q: 'Where does Bohr’s model apply, and why does it fail for helium?',
    a: 'It needs one electron only (H, He<sup>+</sup>, Li<sup>2+</sup>, …), circular orbits (no fine structure, no spin), non-relativistic speeds and no external fields. In a multi-electron atom electron–electron repulsion destroys the simple Coulomb potential, and −13.6 <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> does not apply',
    why: 'Neutral helium’s measured first ionisation energy is 24.6 eV, less than half the 54.4 eV Bohr gives for one electron round a bare He nucleus: the other electron repels and screens.',
    say: null,
  },

  // ── Additional B · Moseley’s Law and X-ray Spectra ──
  // pp. 796–798
  {
    topic: 4,
    kind: 'remember',
    q: 'The short-wavelength cut-off of the continuous X-ray spectrum from a tube run at voltage <i>V</i>?',
    a: 'Energy conservation (the Duane-Hunt law): <i>eV</i> = <i>hν</i><sub>max</sub> = <i>hc</i>/<i>λ</i><sub>min</sub>, so <i>λ</i><sub>min</sub> = <i>hc</i>/(<i>eV</i>), or <i>λ</i><sub>min</sub>(nm) = 1240/<i>V</i>(volts)',
    why: 'An 80 kV tube: <i>λ</i><sub>min</sub> = 15.5 pm; a 100 kV tube: 12.4 pm, as the 1/<i>V</i> dependence says.',
    say: null,
  },
  // pp. 796–798
  {
    topic: 4,
    kind: 'remember',
    q: 'Moseley’s law for the K<sub>α</sub> X-ray line?',
    a: 'K<sub>α</sub> is the L-shell (<i>n</i> = 2) → K-shell (<i>n</i> = 1) line, and √<i>ν</i> = <i>a</i>(<i>Z</i> − <i>b</i>), with <i>b</i> ≈ 1 from screening by the single K-shell electron: <i>ν</i> = (3/4)<i>Rc</i>(<i>Z</i> − 1)<sup>2</sup>, <i>a</i> = √(3<i>Rc</i>/4) ≈ 4.97 × 10<sup>7</sup> Hz<sup>1/2</sup>. It established atomic number, not atomic weight, as the fundamental property of an element',
    why: 'Copper (<i>Z</i> = 29): <i>ν</i> ≈ 1.94 × 10<sup>18</sup> Hz, <i>λ</i> ≈ 1.55 Å, against the measured 1.54 Å.',
    say: null,
  },

  // ── Additional C · The Franck-Hertz Experiment ──
  // pp. 799–801
  {
    topic: 5,
    kind: 'remember',
    q: 'In the Franck-Hertz experiment with mercury vapour, what happens to the plate current as the accelerating voltage rises, and why?',
    a: 'It rises, drops sharply at about 4.9 V, recovers, and drops again at 9.8 V, 14.7 V, …: an electron with 4.9 eV can excite a mercury atom to its first excited state, and having lost that energy it cannot pass the small retarding potential on the collector',
    why: 'The spacing Δ<i>V</i> = Δ<i>E</i>/<i>e</i> gives the excitation energy (<i>eV</i><sub><i>n</i></sub> = <i>n</i>Δ<i>E</i>): one of the first direct proofs of quantised energy levels.',
    say: null,
  },
  // pp. 800–801, 813
  {
    topic: 5,
    kind: 'remember',
    q: 'The wavelength of the light an excited mercury atom emits in a Franck-Hertz tube?',
    a: '<i>λ</i> = <i>hc</i>/Δ<i>E</i> = 1240/4.9 ≈ 253 nm, in the ultraviolet; it matches the observed mercury line at 253.7 nm, so the electrical and the spectroscopic measurements agree',
    why: 'An electron accelerated through 15 V keeps 15 − 4.9 = 10.1 eV after one inelastic collision and 5.2 eV after two.',
    say: null,
  },

  // ── Additional D · Laser Physics: Population Inversion and Stimulated Emission ──
  // pp. 802–803
  {
    topic: 6,
    kind: 'remember',
    q: 'The three radiative processes between two levels, and the Einstein relations?',
    a: 'Absorption (rate <i>B</i><sub>12</sub><i>ρ</i>(<i>ν</i>)<i>N</i><sub>1</sub>), spontaneous emission (<i>A</i><sub>21</sub><i>N</i><sub>2</sub>, random direction and phase) and stimulated emission (<i>B</i><sub>21</sub><i>ρ</i>(<i>ν</i>)<i>N</i><sub>2</sub>), in which a photon makes an excited atom emit a photon identical in phase, direction and wavelength. With equal degeneracies, <i>B</i><sub>12</sub> = <i>B</i><sub>21</sub> and <i>A</i><sub>21</sub>/<i>B</i><sub>21</sub> = 8π<i>hν</i><sup>3</sup>/<i>c</i><sup>3</sup>',
    why: 'Laser light is coherent, monochromatic and collimated because it comes from stimulated emission rather than spontaneous emission.',
    say: null,
  },
  // pp. 802–804
  {
    topic: 6,
    kind: 'remember',
    q: 'What does laser action need?',
    a: 'Population inversion, <i>N</i><sub>2</sub> > <i>N</i><sub>1</sub>, though at thermal equilibrium <i>N</i><sub>2</sub> < <i>N</i><sub>1</sub>: it takes non-thermal pumping and at least three levels (never two), a long-lived upper level that can build up population, and cavity mirrors for optical feedback',
    why: 'Ruby (Cr<sup>3+</sup> in Al<sub>2</sub>O<sub>3</sub>): a metastable upper level lasting about 3 ms, against about 10<sup>−8</sup> s for most excited states, emitting 694.3 nm photons of 1.786 eV.',
    say: null,
  },

  // ── Additional E · The Zeeman Effect ──
  // pp. 805–806, 808
  {
    topic: 7,
    kind: 'remember',
    q: 'The normal Zeeman effect: the energy shift, and how a line splits?',
    a: 'Ignoring spin, a level shifts by Δ<i>E</i> = <i>m</i><sub>L</sub><i>μ</i><sub>B</sub><i>B</i>, with the Bohr magneton <i>μ</i><sub>B</sub> = <i>eh</i>/(4π<i>m</i><sub>e</sub>) = 9.27 × 10<sup>−24</sup> J/T. With Δ<i>m</i><sub>L</sub> = 0, ±1, an ℓ = 1 → ℓ = 0 line becomes a triplet: one component unshifted, one at higher and one at lower frequency, Δ<i>ν</i> = <i>μ</i><sub>B</sub><i>B</i>/<i>h</i>',
    why: 'H<sub>α</sub> (656.3 nm) in 2.0 T: each outer component shifts by <i>λ</i><sup>2</sup><i>μ</i><sub>B</sub><i>B</i>/(<i>hc</i>) ≈ 40.2 pm, so they are 80.4 pm apart.',
    say: null,
  },
  // pp. 806–809
  {
    topic: 7,
    kind: 'remember',
    q: 'What is the anomalous Zeeman effect?',
    a: 'With electron spin included, when the two levels have different Landé <i>g</i>-factors a line splits into more than three, unequally spaced components; this covers most real spectral lines. The normal triplet needs both levels to have total spin <i>S</i> = 0',
    why: 'In a weak field the sodium D<sub>1</sub> line shows 4 Zeeman components and D<sub>2</sub> shows 6.',
    say: null,
  },

  // ── Additional F · Beyond Bohr: Why Full Quantum Mechanics Is Needed ──
  // pp. 810–811
  {
    topic: 8,
    kind: 'remember',
    q: 'What did Bohr’s model get right, and what did it miss?',
    a: 'Right: quantised levels ∝ −1/<i>n</i><sup>2</sup>, a ground state, the Rydberg formula for hydrogen and the eV scale of atomic energies. Missed: line intensities, fine structure, the anomalous Zeeman effect, hyperfine structure and the Δℓ = ±1 selection rule, all of which need full quantum mechanics',
    why: 'Hyperfine structure comes from the nucleus’s magnetic moment coupling to the electron’s, and is how the 21-cm hydrogen line of astrophysics arises.',
    say: null,
  },
  // pp. 810–811
  {
    topic: 8,
    kind: 'remember',
    q: 'How are hydrogen’s <i>n</i> = 2 states, all −3.4 eV in Bohr’s model, actually split?',
    a: 'Relativistic effects and spin–orbit coupling (the Dirac equation) put 2p<sub>3/2</sub> about 4.5 × 10<sup>−5</sup> eV (<i>α</i><sup>2</sup>|<i>E</i><sub>2</sub>|/4, with <i>α</i> ≈ 1/137) above the 2s<sub>1/2</sub>–2p<sub>1/2</sub> pair; the Lamb shift then lifts 2s<sub>1/2</sub> about 4.4 × 10<sup>−6</sup> eV (1057 MHz) above 2p<sub>1/2</sub>',
    why: 'The non-relativistic Schrödinger equation still gives energies that depend only on <i>n</i>: the 2s–2p degeneracy is accidental, a property of the pure Coulomb potential.',
    say: null,
  },

  // ── Additional G · Comprehensive Practice ──
  // pp. 813–814
  {
    topic: 9,
    kind: 'remember',
    q: 'Two experimental evidences that atoms have quantised energy levels?',
    a: 'The Franck-Hertz experiment: electrons lose energy to mercury atoms only in quanta of about 4.9 eV. Atomic spectra: atoms emit and absorb only specific wavelengths, from transitions between discrete levels',
    why: 'Characteristic X-ray lines (Moseley) and the dark absorption lines of the solar spectrum show the same thing: sharp lines at fixed wavelengths mean fixed level gaps.',
    say: null,
  },
  // p. 814
  {
    topic: 9,
    kind: 'remember',
    q: 'Hydrogen in <i>n</i> = 3 can emit 3 → 1, 3 → 2 and 2 → 1. Which wavelength is the longest?',
    a: '3 → 2: the smallest gap, 1.89 eV, gives the longest wavelength, 656 nm. Then 2 → 1 (10.2 eV, 121.5 nm) and 3 → 1 (12.09 eV, 102.6 nm), since 1/<i>λ</i> is proportional to the photon energy',
    why: '1/<i>λ</i> = <i>R</i>(1/<i>n</i><sub>f</sub><sup>2</sup> − 1/<i>n</i><sub>i</sub><sup>2</sup>) gives 5<i>R</i>/36, 3<i>R</i>/4 and 8<i>R</i>/9.',
    say: null,
  },
];
