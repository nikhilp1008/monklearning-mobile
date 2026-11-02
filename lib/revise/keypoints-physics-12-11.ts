/**
 * KEY POINTS for Physics Class 12, Chapter 11 (Dual Nature of Radiation and Matter).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–03 are 0–2 (the book's Subtopics 00–02); Additional
 * topics A–D are 3–6.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key formulas and Cheat sheet. Common mistakes: its
 * Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's mnemonic, word for word (quotation marks dropped; a mnemonic line
 * with two sayings is split at its “and”). Additional topics: the
 * Supplement's addenda.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Frequency is
 * the Greek <i>ν</i>; speed is the Latin <i>v</i>. The work function is
 * <i>φ</i><sub>0</sub>, as printed. Label subscripts are upright
 * (<i>K</i><sub>max</sub>, <i>v</i><sub>max</sub>, <i>n</i><sub>ph</sub>,
 * <i>m</i><sub>e</sub>, <i>λ</i><sub>nr</sub>, <i>n</i><sub>inc</sub>,
 * <i>i</i><sub>sat</sub>, <i>K</i><sub>min</sub>); digit subscripts are
 * upright. hc = 1240 eV nm as the book uses it. π is upright.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Electron Emission, the Photoelectric Experiments & the Photon ──
  // pp. 716–717, 724
  {
    topic: 0,
    kind: 'remember',
    q: 'The four types of electron emission, and what delivers the energy in each?',
    a: 'Thermionic (heat), photoelectric (light), field or cold-cathode emission (a very strong electric field, ∼10<sup>8</sup> V/m) and secondary emission (bombardment by fast particles). Each must give an electron at least the work function <i>φ</i><sub>0</sub>, the minimum energy to free it from the surface',
    why: '<i>φ</i><sub>0</sub> = <i>hν</i><sub>0</sub> = <i>hc</i>/<i>λ</i><sub>0</sub> is a property of the metal: caesium’s is low, platinum’s high.',
    say: 'Heat, Light, Field, Hit — for the four emissions.',
  },
  // pp. 717, 721–722, 724
  {
    topic: 0,
    kind: 'remember',
    q: 'The energy and momentum of a photon, and the force a light beam exerts on a surface?',
    a: '<i>E</i> = <i>hν</i> = <i>hc</i>/<i>λ</i> and <i>p</i> = <i>E</i>/<i>c</i> = <i>h</i>/<i>λ</i>; a photon travels at <i>c</i>, is neutral and has zero rest mass. A beam of power <i>P</i> striking a surface normally exerts <i>P</i>/<i>c</i> on a perfect absorber and 2<i>P</i>/<i>c</i> on a perfect reflector',
    why: 'A 500 nm photon: <i>E</i> = 2.48 eV = 3.97 × 10<sup>−19</sup> J, <i>p</i> = 1.33 × 10<sup>−27</sup> kg m s<sup>−1</sup>. A 30 W beam: 1.0 × 10<sup>−7</sup> N absorbed, 2.0 × 10<sup>−7</sup> N reflected, as reflection reverses each photon’s momentum.',
    say: null,
  },
  // pp. 718, 720, 723–724
  {
    topic: 0,
    kind: 'mixup',
    q: 'Photocurrent against collector potential: what does the intensity of the light change, and what does its frequency change?',
    a: 'For light above threshold, intensity sets the saturation current (more photons, more electrons per second); frequency sets the stopping potential <i>V</i><sub>0</sub>, with <i>eV</i><sub>0</sub> = <i>K</i><sub>max</sub>. Curves at different intensities and one frequency share a stopping potential; a higher frequency gives a larger <i>V</i><sub>0</sub>',
    why: 'This is where the wave theory fails: it predicts <i>K</i><sub>max</sub> rising with intensity, no threshold frequency, and a time lag for dim light, but emission is instantaneous (≲ 10<sup>−9</sup> s).',
    say: 'Count for current, Colour for energy — for the graphs.',
  },
  // pp. 717, 723–724
  {
    topic: 0,
    kind: 'mistake',
    q: 'A photon has zero rest mass. Does it carry zero momentum?',
    a: 'No: it carries <i>p</i> = <i>h</i>/<i>λ</i>. And keep energy and momentum apart: <i>E</i> = <i>hc</i>/<i>λ</i> but <i>p</i> = <i>h</i>/<i>λ</i>, a factor of <i>c</i> between them',
    why: 'Asked for the momentum of a photon of wavelength <i>λ</i>, the option <i>hc</i>/<i>λ</i> is the trap: that is its energy.',
    say: null,
  },
  // pp. 717, 723–724
  {
    topic: 0,
    kind: 'shortcut',
    q: 'How many photons per second does a monochromatic source emit? The fast way?',
    a: 'Find the energy of one photon in joules, <i>E</i> = <i>hc</i>/<i>λ</i>, and divide the power by it: <i>n</i><sub>ph</sub> = <i>P</i>/<i>E</i> = <i>Pλ</i>/(<i>hc</i>). Power = photons per second × energy each',
    why: 'A 60 W bulb putting 2% of its power into 500 nm light: 1.2 W ÷ 3.97 × 10<sup>−19</sup> J ≈ 3.0 × 10<sup>18</sup> photons per second.',
    say: null,
  },

  // ── Topic 02 · The Photoelectric Effect and Einstein’s Equation ──
  // pp. 726–728, 730, 733
  {
    topic: 1,
    kind: 'remember',
    q: 'Einstein’s photoelectric equation, and the condition for emission?',
    a: '<i>K</i><sub>max</sub> = ½<i>mv</i><sub>max</sub><sup>2</sup> = <i>hν</i> − <i>φ</i><sub>0</sub>: one photon gives all its energy to one electron, which pays the work function and keeps the rest. Emission needs <i>ν</i> > <i>ν</i><sub>0</sub> = <i>φ</i><sub>0</sub>/<i>h</i>. There is no intensity term, so brighter light gives more electrons, not faster ones',
    why: '<i>φ</i><sub>0</sub> = 2.5 eV and 400 nm light: <i>E</i> = 3.10 eV, <i>K</i><sub>max</sub> = 0.60 eV, <i>V</i><sub>0</sub> = 0.60 V. Electrons from deeper layers, or bound more tightly than the most loosely held ones, come out slower; <i>K</i><sub>max</sub> is the ceiling.',
    say: 'Brightness for Number, Colour for Energy: brighter light = more electrons; bluer (higher-frequency) light = faster electrons.',
  },
  // pp. 726, 728, 732–733
  {
    topic: 1,
    kind: 'remember',
    q: 'The stopping potential, and its graph against frequency?',
    a: '<i>eV</i><sub>0</sub> = <i>K</i><sub>max</sub> = <i>hν</i> − <i>φ</i><sub>0</sub>, so <i>V</i><sub>0</sub> = (<i>h</i>/<i>e</i>)<i>ν</i> − <i>φ</i><sub>0</sub>/<i>e</i>: a straight line of slope <i>h</i>/<i>e</i>, the same for every metal, cutting the <i>ν</i>-axis at that metal’s <i>ν</i><sub>0</sub>',
    why: 'Millikan measured this slope and got Planck’s constant independently: a slope of 4.14 × 10<sup>−15</sup> V s gives <i>h</i> = 6.62 × 10<sup>−34</sup> J s.',
    say: null,
  },
  // pp. 726, 731–733
  {
    topic: 1,
    kind: 'mixup',
    q: 'Threshold frequency and wavelength against the frequency and wavelength of the light: which belong to what?',
    a: '<i>ν</i><sub>0</sub> and <i>λ</i><sub>0</sub> belong to the metal (<i>ν</i><sub>0</sub> = <i>φ</i><sub>0</sub>/<i>h</i>, <i>λ</i><sub>0</sub> = <i>hc</i>/<i>φ</i><sub>0</sub>); <i>ν</i> and <i>λ</i> belong to the light you shine. Emission needs <i>ν</i> > <i>ν</i><sub>0</sub> but <i>λ</i> < <i>λ</i><sub>0</sub>: the threshold wavelength is the maximum wavelength for emission',
    why: 'The intensity, frequency or exposure time of the light never changes the threshold frequency. A metal of work function 4.2 eV has <i>λ</i><sub>0</sub> = 1240/4.2 ≈ 295 nm.',
    say: null,
  },
  // pp. 730, 732–733
  {
    topic: 1,
    kind: 'mistake',
    q: 'The frequency of the light on a metal is doubled. Does the stopping potential double?',
    a: 'No: <i>eV</i><sub>0</sub>′ = 2<i>hν</i> − <i>φ</i><sub>0</sub> = 2<i>eV</i><sub>0</sub> + <i>φ</i><sub>0</sub>, so <i>V</i><sub>0</sub>′ = 2<i>V</i><sub>0</sub> + <i>φ</i><sub>0</sub>/<i>e</i>, more than double. The work function is subtracted only once: go back to <i>K</i><sub>max</sub> = <i>hν</i> − <i>φ</i><sub>0</sub> and recompute, never scale the old answer',
    why: 'Photons of 4.0 eV on a metal of work function 2.0 eV give <i>K</i><sub>max</sub> = 2.0 eV; doubled to 8.0 eV they give 6.0 eV, not 4.0 eV.',
    say: null,
  },
  // pp. 731, 733
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Does a given light eject electrons from a given metal? The fast way?',
    a: 'Skip the energy balance and compare wavelengths: emission if <i>λ</i><sub>incident</sub> < <i>λ</i><sub>0</sub>, none if <i>λ</i><sub>incident</sub> > <i>λ</i><sub>0</sub>. For numbers, work entirely in eV with <i>hc</i> = 1240 eV nm, so <i>E</i>(eV) = 1240/<i>λ</i>(nm), and convert to joules only at the end',
    why: 'A metal with <i>λ</i><sub>0</sub> = 600 nm under 400 nm light emits: <i>K</i><sub>max</sub> = 1240/400 − 1240/600 ≈ 1.03 eV.',
    say: null,
  },

  // ── Topic 03 · Matter Waves and the de Broglie Relation ──
  // pp. 734–735, 740, 742
  {
    topic: 2,
    kind: 'remember',
    q: 'The de Broglie wavelength of a particle, in its three forms?',
    a: '<i>λ</i> = <i>h</i>/<i>p</i> = <i>h</i>/(<i>mv</i>) = <i>h</i>/√(2<i>mK</i>), and <i>h</i>/√(2<i>mqV</i>) for a charge accelerated from rest through <i>V</i>; the forms with <i>mv</i>, <i>K</i> and <i>V</i> are non-relativistic, valid for speeds well below <i>c</i>. It depends only on momentum, not on the charge or the kind of particle',
    why: 'A 0.15 kg cricket ball at 30 m/s has <i>λ</i> ≈ 1.5 × 10<sup>−34</sup> m, far too small to detect; an electron’s wavelength is comparable to atomic spacings (about 10<sup>−10</sup> m), so electrons diffract off crystals.',
    say: 'Heavier and faster ⇒ shorter wave. Big momentum kills the wavelength, which is why only tiny particles show their waves.',
  },
  // pp. 735, 737, 742
  {
    topic: 2,
    kind: 'remember',
    q: 'What did the Davisson–Germer experiment show, and how do matter waves explain Bohr’s orbits?',
    a: 'Electrons accelerated through 54 V and scattered off a nickel crystal gave a diffraction peak at 50°; the measured wavelength, about 1.65 Å, matched de Broglie’s 12.27/√54 = 1.67 Å, confirming the wave nature of electrons. An orbit is stable when a whole number of wavelengths fits it: 2π<i>r</i> = <i>nλ</i> ⇒ <i>mvr</i> = <i>nh</i>/(2π)',
    why: 'The second result is exactly Bohr’s quantisation condition, now explained as a standing electron wave on a loop.',
    say: null,
  },
  // pp. 739–742
  {
    topic: 2,
    kind: 'mixup',
    q: 'Two particles of different masses: how do their de Broglie wavelengths compare at the same momentum, the same kinetic energy and the same speed?',
    a: 'Same <i>p</i>: equal wavelengths. Same <i>K</i>: <i>λ</i> ∝ 1/√<i>m</i>. Same <i>v</i>: <i>λ</i> ∝ 1/<i>m</i>. Read which quantity is held fixed before choosing the proportionality',
    why: 'An electron, a proton and an <i>α</i>-particle of equal kinetic energy: the <i>α</i>-particle, heaviest, has the shortest wavelength. An electron and a proton of equal <i>K</i>: <i>λ</i><sub>e</sub> ∶ <i>λ</i><sub>p</sub> ≈ 42.8 ∶ 1.',
    say: null,
  },
  // pp. 737, 740–741
  {
    topic: 2,
    kind: 'mistake',
    q: 'The accelerating voltage on an electron is doubled. Does its de Broglie wavelength halve?',
    a: 'No: <i>λ</i> ∝ 1/√<i>V</i> (and ∝ 1/√<i>K</i>), so it shrinks by a factor √2, not 2. Making <i>K</i> or <i>V</i> four times larger halves it',
    why: 'An electron through 100 V has <i>λ</i> ≈ 1.23 Å; through 400 V, about 0.61 Å.',
    say: null,
  },
  // pp. 735, 739, 741
  {
    topic: 2,
    kind: 'shortcut',
    q: 'An electron, or two different charges, accelerated through a potential difference. The fast way to the wavelengths?',
    a: 'For an electron skip the full formula: <i>λ</i> = 12.27/√<i>V</i> Å with <i>V</i> in volts (0.286/√<i>V</i> Å for a proton). For two charges through the same <i>V</i>, compare with <i>λ</i> ∝ 1/√(<i>mq</i>). If you use <i>h</i>/√(2<i>mK</i>), <i>K</i> must be in joules',
    why: 'A proton and an <i>α</i>-particle (<i>m</i><sub>α</sub> = 4<i>m</i><sub>p</sub>, <i>q</i><sub>α</sub> = 2<i>e</i>) through the same <i>V</i>: <i>λ</i><sub>p</sub>/<i>λ</i><sub>α</sub> = √8 = 2√2 ≈ 2.83.',
    say: null,
  },

  // ── Additional A · Relativistic Corrections for Fast Electrons ──
  // pp. 743–745
  {
    topic: 3,
    kind: 'remember',
    q: 'The relativistic de Broglie wavelength of an electron accelerated through <i>V</i>?',
    a: '<i>λ</i> = <i>h</i>/√(2<i>m</i><sub>e</sub><i>eV</i> + <i>e</i><sup>2</sup><i>V</i><sup>2</sup>/<i>c</i><sup>2</sup>), from <i>λ</i> = <i>h</i>/√(2<i>m</i><sub>0</sub><i>K</i> + <i>K</i><sup>2</sup>/<i>c</i><sup>2</sup>). Equivalently <i>λ</i> = <i>λ</i><sub>nr</sub>/√(1 + <i>eV</i>/(2<i>m</i><sub>e</sub><i>c</i><sup>2</sup>)), with 2<i>m</i><sub>e</sub><i>c</i><sup>2</sup> ≈ 1.022 MeV: always shorter than the non-relativistic <i>λ</i><sub>nr</sub> = 12.27/√<i>V</i> Å',
    why: 'At 100 kV: <i>λ</i><sub>nr</sub> = 0.0388 Å but <i>λ</i> = 0.0370 Å, and the electron moves at about 0.55<i>c</i>.',
    say: null,
  },
  // pp. 743, 745–746
  {
    topic: 3,
    kind: 'remember',
    q: 'When does the electron shortcut 12.27/√<i>V</i> Å need the relativistic correction?',
    a: 'When <i>eV</i> ≳ 10 keV. The shortcut overestimates the wavelength by 1% at about 21 kV and by about 2.4% at 50 kV',
    why: 'A proton through 1 MV needs no correction (within 0.03%): its rest energy is 938 MeV, so 1 MeV is a tiny fraction of it.',
    say: null,
  },

  // ── Additional B · The Quantum Efficiency Chain ──
  // pp. 747–749
  {
    topic: 4,
    kind: 'remember',
    q: 'Light of power <i>P</i> and frequency <i>ν</i> falls on a metal of quantum efficiency <i>η</i>. The saturation current?',
    a: 'Photons arrive at <i>n</i><sub>inc</sub> = <i>P</i>/(<i>hν</i>); a fraction <i>η</i> of them eject electrons, <i>n</i><sub>e</sub> = <i>ηP</i>/(<i>hν</i>) for <i>hν</i> > <i>φ</i><sub>0</sub> (zero otherwise); so <i>i</i><sub>sat</sub> = <i>n</i><sub>e</sub><i>e</i> = <i>ηPe</i>/(<i>hν</i>)',
    why: '10 mW of 400 nm light on caesium (<i>φ</i><sub>0</sub> = 1.9 eV) with <i>η</i> = 0.005: 2.0 × 10<sup>16</sup> photons/s, 1.0 × 10<sup>14</sup> electrons/s, <i>i</i><sub>sat</sub> = 16.1 μA.',
    say: null,
  },
  // pp. 748–750
  {
    topic: 4,
    kind: 'remember',
    q: 'What do the quantum efficiency and the power of the light change, and what do they leave alone?',
    a: 'They change only the current. <i>K</i><sub>max</sub> = <i>hν</i> − <i>φ</i><sub>0</sub>, <i>v</i><sub>max</sub> = √(2(<i>hν</i> − <i>φ</i><sub>0</sub>)/<i>m</i><sub>e</sub>) and <i>eV</i><sub>0</sub> = <i>hν</i> − <i>φ</i><sub>0</sub> are set by the frequency and the metal’s work function alone',
    why: 'Equal power and equal <i>η</i> at 400 nm and 600 nm, both above threshold: the 600 nm light gives 1.5 times the current, since each photon carries less energy and more arrive per second.',
    say: null,
  },

  // ── Additional C · Threshold-Energy Problems and Simultaneous Equations ──
  // pp. 751–753
  {
    topic: 5,
    kind: 'remember',
    q: 'The stopping potentials at two frequencies are given. How do you find <i>h</i> and <i>φ</i><sub>0</sub>?',
    a: 'Write <i>eV</i><sub>0,1</sub> = <i>hν</i><sub>1</sub> − <i>φ</i><sub>0</sub> and <i>eV</i><sub>0,2</sub> = <i>hν</i><sub>2</sub> − <i>φ</i><sub>0</sub>, subtract to remove <i>φ</i><sub>0</sub>: <i>h</i> = <i>e</i>(<i>V</i><sub>0,1</sub> − <i>V</i><sub>0,2</sub>)/(<i>ν</i><sub>1</sub> − <i>ν</i><sub>2</sub>), or <i>hc</i> = <i>e</i>(<i>V</i><sub>0,1</sub> − <i>V</i><sub>0,2</sub>)/(1/<i>λ</i><sub>1</sub> − 1/<i>λ</i><sub>2</sub>). Then back-substitute: <i>φ</i><sub>0</sub> = <i>hν</i><sub>1</sub> − <i>eV</i><sub>0,1</sub>',
    why: '200 nm gives 3.90 V and 300 nm gives 1.83 V on one metal: <i>h</i> = 6.62 × 10<sup>−34</sup> J s and <i>φ</i><sub>0</sub> ≈ 2.3 eV.',
    say: null,
  },
  // pp. 751, 754–755
  {
    topic: 5,
    kind: 'remember',
    q: 'Raising the frequency of the light from <i>ν</i> to 1.5<i>ν</i> doubles the stopping potential. How do you find the threshold?',
    a: 'Write Einstein’s equation at both settings and eliminate <i>V</i><sub>0</sub>: 1.5<i>hν</i> − <i>φ</i><sub>0</sub> = 2(<i>hν</i> − <i>φ</i><sub>0</sub>), so <i>φ</i><sub>0</sub> = 0.5<i>hν</i> and <i>ν</i><sub>0</sub>/<i>ν</i> = 0.5. A wavelength that gives no emission only bounds the work function: <i>φ</i><sub>0</sub> > <i>hc</i>/<i>λ</i>',
    why: 'Halving the wavelength triples the stopping potential: 3(<i>hc</i>/<i>λ</i> − <i>φ</i><sub>0</sub>) = 2<i>hc</i>/<i>λ</i> − <i>φ</i><sub>0</sub> gives <i>λ</i><sub>0</sub> = 2<i>λ</i>.',
    say: null,
  },

  // ── Additional D · Heisenberg’s Uncertainty Principle: Quantitative Problems ──
  // pp. 756–758
  {
    topic: 6,
    kind: 'remember',
    q: 'The uncertainty principle, and the least kinetic energy of a particle confined to a region Δ<i>x</i>?',
    a: 'Δ<i>x</i> · Δ<i>p</i><sub><i>x</i></sub> ≥ <i>ħ</i>/2, with <i>ħ</i> = <i>h</i>/(2π); JEE uses the order-of-magnitude form Δ<i>x</i> · Δ<i>p</i><sub><i>x</i></sub> ≈ <i>ħ</i>. Confinement gives a minimum kinetic energy <i>K</i><sub>min</sub> ≈ (Δ<i>p</i>)<sup>2</sup>/(2<i>m</i>), which is <i>ħ</i><sup>2</sup>/(8<i>m</i>(Δ<i>x</i>)<sup>2</sup>) with Δ<i>p</i> ≈ <i>ħ</i>/(2Δ<i>x</i>)',
    why: 'An electron in 1 Å: <i>K</i><sub>min</sub> ≈ 0.95 eV (about 3.8 eV with Δ<i>p</i> ≈ <i>ħ</i>/Δ<i>x</i>), the scale of atomic binding. A proton in 10<sup>−14</sup> m, with Δ<i>p</i> ≈ <i>ħ</i>/Δ<i>x</i>: about 0.2 MeV, a lower estimate (real nucleons carry MeV energies).',
    say: null,
  },
  // pp. 756–757
  {
    topic: 6,
    kind: 'remember',
    q: 'A beam of particles passes through a slit of width <i>d</i>. How much does it spread?',
    a: 'The slit fixes Δ<i>x</i> = <i>d</i>, so Δ<i>p</i><sub><i>x</i></sub> ≈ <i>ħ</i>/<i>d</i>; with forward momentum <i>p</i> = <i>h</i>/<i>λ</i>, the beam spreads by sin <i>θ</i> ≈ Δ<i>p</i><sub><i>x</i></sub>/<i>p</i> (the single-slit first minimum, sin <i>θ</i> = <i>λ</i>/<i>d</i>, is about 2π larger). A narrower slit gives a wider spread',
    why: '100 eV electrons (<i>λ</i> = 1.227 Å) through a 1.0 nm slit: sin <i>θ</i> ≈ 0.0195, so about ±1.1°, an order-of-magnitude estimate of the single-slit spread.',
    say: null,
  },
];
