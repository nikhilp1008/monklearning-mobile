/**
 * KEY POINTS for Physics Class 11, Chapter 12 (Kinetic Theory).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * The book numbers its sub-topics from 0: book Sub-topic 0 is Topic 01 here.
 * Remember: the topic's Key formulas and Cheat sheet. Common mistakes: its
 * Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's memory aid, word for word. The Chapter Summary & Master Formula
 * Sheet (pp. 858–861) is not used as a source.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Subscripts
 * that are words or labels stay upright (<i>v</i><sub>rms</sub>,
 * <i>M</i><sub>mix</sub>, <i>k</i><sub>B</sub>, <i>N</i><sub>A</sub>); a
 * subscript the book sets italic stays italic (<i>x</i><sub><i>i</i></sub>).
 * π is upright.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Molecular Nature of Matter (book Sub-topic 0) ──
  // pp. 820–821, 825
  {
    topic: 0,
    kind: 'remember',
    q: 'How does the force between two molecules change with their separation <i>r</i>?',
    a: 'Strongly repulsive for <i>r</i> < <i>r</i><sub>0</sub>, weakly attractive for <i>r</i> > <i>r</i><sub>0</sub>, and zero at the equilibrium separation <i>r</i><sub>0</sub>, the minimum of the potential energy. Negligible beyond a few molecular diameters',
    why: 'Both parts are essential: if molecules only attracted, matter would collapse; if they only repelled, no solid or liquid could form.',
    say: null,
  },
  // pp. 819, 825
  {
    topic: 0,
    kind: 'remember',
    q: 'Solid, liquid, gas: how do the molecules differ in each?',
    a: 'Solid: touching, fixed, vibrating. Liquid: touching, mobile. Gas: far apart, free. The forces weaken as the separation grows',
    why: 'In a gas the molecules are on average about ten times farther apart than in a solid or liquid.',
    say: 'Close and caged (solid), close and loose (liquid), far and free (gas).',
  },
  // pp. 820, 825
  {
    topic: 0,
    kind: 'mixup',
    q: 'Gay-Lussac’s law of combining volumes and Avogadro’s law: what does each say?',
    a: 'Gay-Lussac: the volumes of reacting gases and gaseous products are in simple whole-number ratios. Avogadro: equal volumes of all gases contain equal numbers of molecules. Both at the same temperature and pressure',
    why: 'Volume is not conserved: two volumes of hydrogen and one of oxygen give two volumes of water vapour (2 ∶ 1 ∶ 2), not three.',
    say: null,
  },
  // p. 825
  {
    topic: 0,
    kind: 'mistake',
    q: 'In Brownian motion, is the jiggling particle you see a molecule?',
    a: 'No: it is a much larger suspended grain, kicked around by the uneven bombardment of molecules',
    why: 'You see the effect, the grain’s dance, not the molecules themselves. The smaller the grain and the higher the temperature, the more violent the dance.',
    say: null,
  },
  // pp. 821, 824–825
  {
    topic: 0,
    kind: 'shortcut',
    q: 'A conceptual question on molecular scales in a gas. The three numbers to carry?',
    a: 'Molecular size ∼ 10<sup>−10</sup> m; gas spacing ∼ 10× that; mean free path ∼ 200× that',
    why: 'Don’t confuse spacing with free path: the mean free path, the distance flown between collisions, is about 20 times the spacing.',
    say: null,
  },

  // ── Topic 02 · Ideal Gas and Gas Laws (book Sub-topic 1) ──
  // pp. 827–828, 832–833
  {
    topic: 1,
    kind: 'remember',
    q: 'The ideal gas equation, in its mass, molecule and density forms?',
    a: '<i>PV</i> = <i>nRT</i> = (<i>m</i>/<i>M</i>)<i>RT</i> = <i>Nk</i><sub>B</sub><i>T</i>; density form <i>P</i> = <i>ρRT</i>/<i>M</i>',
    why: 'It holds in the ideal regime, at low pressure and high temperature. <i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>; <i>k</i><sub>B</sub> = <i>R</i>/<i>N</i><sub>A</sub> = 1.38 × 10<sup>−23</sup> J K<sup>−1</sup>.',
    say: 'Low <i>P</i>, high <i>T</i> — molecules free and flighty.',
  },
  // pp. 827, 832–833
  {
    topic: 1,
    kind: 'remember',
    q: 'Graham’s law of diffusion?',
    a: 'At fixed <i>T</i> and <i>P</i>, rate of diffusion ∝ 1/√<i>ρ</i> ∝ 1/√<i>M</i>: the lighter gas diffuses faster',
    why: 'If gas A diffuses 1.5 times as fast as gas B, then <i>M</i><sub><i>A</i></sub> ∶ <i>M</i><sub><i>B</i></sub> = 1 ∶ 2.25 = 4 ∶ 9.',
    say: null,
  },
  // pp. 827, 832–833
  {
    topic: 1,
    kind: 'mixup',
    q: 'Charles’ law and Gay-Lussac’s (pressure) law: which quantity is held constant in each?',
    a: 'Charles’: <i>V</i>/<i>T</i> = const at constant pressure. Gay-Lussac’s: <i>P</i>/<i>T</i> = const at constant volume',
    why: 'For a fixed mass of gas, with <i>T</i> in kelvin. Boyle: <i>PV</i> = const at fixed <i>T</i>; Avogadro: <i>V</i> ∝ <i>n</i> at fixed <i>P</i> and <i>T</i>.',
    say: null,
  },
  // pp. 832–833
  {
    topic: 1,
    kind: 'mistake',
    q: 'Equal masses of helium (<i>M</i> = 4) and oxygen (<i>M</i> = 32) share a container. Are their partial pressures equal?',
    a: 'No: partial pressure is set by moles. Equal masses give moles of He ∶ O<sub>2</sub> = 1/4 ∶ 1/32 = 8 ∶ 1, so the pressures are 8 ∶ 1 too',
    why: 'Dalton: <i>P</i><sub>total</sub> = <i>P</i><sub>1</sub> + <i>P</i><sub>2</sub> + ⋯, and each partial pressure = mole fraction × total. Always convert mass to moles first.',
    say: null,
  },
  // p. 832
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A before/after gas problem with a fixed mass. The fast way?',
    a: 'Never compute <i>n</i>: write <i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>/<i>T</i><sub>2</sub> and cancel whatever stays constant',
    why: 'Only <i>T</i> must be absolute: <i>P</i> and <i>V</i> can stay in any consistent units inside the ratio. With <i>R</i> = 8.314 in <i>PV</i> = <i>nRT</i>, use pascal and m<sup>3</sup>.',
    say: null,
  },

  // ── Topic 03 · Kinetic Theory and Gas Pressure (book Sub-topic 2) ──
  // pp. 835, 841
  {
    topic: 2,
    kind: 'remember',
    q: 'The kinetic-theory expression for the pressure of an ideal gas?',
    a: '<i>P</i> = (1/3)(<i>N</i>/<i>V</i>)<i>m</i>⟨<i>v</i><sup>2</sup>⟩ = (1/3)<i>ρv</i><sub>rms</sub><sup>2</sup>, where <i>m</i> is the mass of one molecule and <i>N</i> the number of molecules',
    why: 'It assumes a dilute gas: large <i>N</i>, point molecules, no force but elastic collisions, isotropic motion.',
    say: 'Pressure = one-third density times speed-squared.',
  },
  // pp. 835, 841
  {
    topic: 2,
    kind: 'remember',
    q: 'How is the pressure of an ideal gas related to its total translational kinetic energy <i>E</i>?',
    a: '<i>PV</i> = (2/3)<i>E</i>: the pressure equals two-thirds of the translational kinetic energy per unit volume',
    why: 'Here <i>E</i> = <i>N</i> · ½<i>m</i>⟨<i>v</i><sup>2</sup>⟩. So if <i>P</i> and <i>V</i> are given, <i>E</i> = (3/2)<i>PV</i> with nothing else needed.',
    say: '<i>PV</i> is two-thirds the kinetic energy.',
  },
  // pp. 835, 840–841
  {
    topic: 2,
    kind: 'mixup',
    q: 'With everything else fixed, how does the pressure scale with the molecular mass <i>m</i> and with <i>v</i><sub>rms</sub>?',
    a: 'Linearly with <i>m</i>, but as the square of <i>v</i><sub>rms</sub>: <i>P</i> ∝ <i>N</i>/<i>V</i>, <i>P</i> ∝ <i>m</i>, <i>P</i> ∝ <i>v</i><sub>rms</sub><sup>2</sup>',
    why: 'Double the molecular mass at the same <i>N</i>/<i>V</i> and <i>v</i><sub>rms</sub>: the pressure doubles, it does not quadruple.',
    say: null,
  },
  // p. 841
  {
    topic: 2,
    kind: 'mistake',
    q: 'Molecules in a beam all move along one axis. Do you keep the 1/3 in <i>P</i> = (1/3)(<i>N</i>/<i>V</i>)<i>m</i>⟨<i>v</i><sup>2</sup>⟩?',
    a: 'No: drop it. The 1/3 is purely the isotropy factor, ⟨<i>v</i><sub><i>x</i></sub><sup>2</sup>⟩ = ⟨<i>v</i><sub><i>y</i></sub><sup>2</sup>⟩ = ⟨<i>v</i><sub><i>z</i></sub><sup>2</sup>⟩ = (1/3)⟨<i>v</i><sup>2</sup>⟩',
    why: 'Another classic slip: an elastic hit on a wall transfers 2<i>mv</i><sub><i>x</i></sub>, not <i>mv</i><sub><i>x</i></sub>.',
    say: null,
  },
  // pp. 840–841
  {
    topic: 2,
    kind: 'shortcut',
    q: 'A gas is squeezed to half its volume while its total translational kinetic energy stays the same. The new pressure, in one line?',
    a: 'Double: <i>P</i> = 2<i>E</i>/(3<i>V</i>), so with <i>E</i> fixed, <i>P</i> ∝ 1/<i>V</i>',
    why: 'Reach for <i>PV</i> = (2/3)<i>E</i> whenever “total kinetic energy” appears: it usually turns a three-step problem into one line.',
    say: null,
  },

  // ── Topic 04 · RMS Speed and Maxwell Distribution (book Sub-topic 3) ──
  // pp. 843, 848
  {
    topic: 3,
    kind: 'remember',
    q: 'The kinetic interpretation of temperature?',
    a: '½<i>m</i>⟨<i>v</i><sup>2</sup>⟩ = (3/2)<i>k</i><sub>B</sub><i>T</i>: the average translational kinetic energy per molecule depends only on the absolute temperature',
    why: 'Not on pressure, volume or the identity of the gas. For a monatomic ideal gas it is the entire internal energy: <i>U</i> = (3/2)<i>nRT</i>.',
    say: null,
  },
  // pp. 843, 848–849
  {
    topic: 3,
    kind: 'remember',
    q: 'The three molecular speeds, their order and their ratio?',
    a: '<i>v</i><sub>rms</sub> = √(3<i>RT</i>/<i>M</i>), <i>v</i><sub>av</sub> = √(8<i>RT</i>/(π<i>M</i>)), <i>v</i><sub>mp</sub> = √(2<i>RT</i>/<i>M</i>); <i>v</i><sub>rms</sub> > <i>v</i><sub>av</sub> > <i>v</i><sub>mp</sub>, in the ratio √3 ∶ √(8/π) ∶ √2 ≈ 1.22 ∶ 1.13 ∶ 1',
    why: '<i>M</i> in kg mol<sup>−1</sup>, <i>T</i> in kelvin. Oxygen at 300 K: <i>v</i><sub>mp</sub> ≈ 395, <i>v</i><sub>av</sub> ≈ 446, <i>v</i><sub>rms</sub> ≈ 484 m s<sup>−1</sup>.',
    say: 'Heavier = slower, hotter = faster; RAM from big to small.',
  },
  // pp. 843, 848
  {
    topic: 3,
    kind: 'mixup',
    q: 'The average velocity and the average speed of gas molecules: are they the same?',
    a: 'No: the mean velocity vector is zero (isotropy), but the mean speed is not: <i>v</i><sub>av</sub> = √(8<i>RT</i>/(π<i>M</i>))',
    why: 'A question that says “average velocity” is usually testing whether you’ll wrongly plug in <i>v</i><sub>av</sub>.',
    say: null,
  },
  // pp. 848–849
  {
    topic: 3,
    kind: 'mistake',
    q: 'Is the height <i>P</i>(<i>v</i>) of the Maxwell curve the probability of a speed <i>v</i>?',
    a: 'No: only the area under a stretch of the curve gives the fraction of molecules in that speed range. The total area is always 1',
    why: 'Raising <i>T</i> shifts the peak right and flattens the curve: it moves molecules into the faster tail but never adds or removes any.',
    say: null,
  },
  // pp. 843, 848
  {
    topic: 3,
    kind: 'shortcut',
    q: '“Compare two gases” or “change the temperature” speed problems. The fast way?',
    a: 'Use <i>v</i> ∝ √(<i>T</i>/<i>M</i>) directly: <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub> = √(<i>T</i><sub>1</sub><i>M</i><sub>2</sub>/(<i>T</i><sub>2</sub><i>M</i><sub>1</sub>))',
    why: 'Hydrogen at the same temperature runs about four times faster than oxygen: √(32/2) = 4.',
    say: null,
  },

  // ── Topic 05 · Degrees of Freedom and Mean Free Path (book Sub-topic 4) ──
  // pp. 851, 856
  {
    topic: 4,
    kind: 'remember',
    q: 'The law of equipartition, and the degrees of freedom of mono-, di- and nonlinear polyatomic gases at room temperature?',
    a: 'Each degree of freedom carries ½<i>k</i><sub>B</sub><i>T</i> per molecule (½<i>RT</i> per mole), so <i>U</i> = (<i>f</i>/2)<i>nRT</i>. At room temperature <i>f</i> = 3, 5 and 6',
    why: 'At high temperature each vibrational mode adds 2 (one kinetic, one potential): a diatomic gas then has <i>f</i> = 7.',
    say: 'Half-<i>kT</i> to every mode.',
  },
  // pp. 852, 856–857
  {
    topic: 4,
    kind: 'remember',
    q: 'The mean free path of a gas molecule, and how does it depend on <i>T</i>, <i>P</i> and <i>d</i>?',
    a: '<i>λ</i> = 1/(√2 π<i>d</i><sup>2</sup><i>n</i>) = <i>k</i><sub>B</sub><i>T</i>/(√2 π<i>d</i><sup>2</sup><i>P</i>); <i>λ</i> ∝ <i>T</i> at constant <i>P</i>, ∝ 1/<i>P</i> at constant <i>T</i>, ∝ 1/<i>d</i><sup>2</sup>',
    why: '<i>n</i> = <i>N</i>/<i>V</i> is the number density; the collision frequency is <i>ν</i> = <i>v</i><sub>av</sub>/<i>λ</i>.',
    say: 'Squeeze the gas, shrink the path and quicken the collisions.',
  },
  // p. 856
  {
    topic: 4,
    kind: 'mixup',
    q: '<i>R</i> or <i>k</i><sub>B</sub>: which goes with which quantities?',
    a: 'Molar quantities (<i>C</i><sub><i>V</i></sub>, <i>C</i><sub><i>P</i></sub>, <i>U</i> = (<i>f</i>/2)<i>nRT</i>) use <i>R</i>; per-molecule energies use <i>k</i><sub>B</sub>',
    why: 'Mixing them up costs a factor of <i>N</i><sub>A</sub>.',
    say: null,
  },
  // p. 856
  {
    topic: 4,
    kind: 'mistake',
    q: 'A mixture of gases. Can you average their <i>γ</i> values?',
    a: 'No: average <i>C</i><sub><i>V</i></sub> by moles, add <i>R</i> for <i>C</i><sub><i>P</i></sub>, then take the ratio',
    why: 'Internal energies simply add, so <i>C</i><sub><i>V</i></sub> is the mole-weighted quantity; <i>γ</i>, being a ratio, is not additive.',
    say: null,
  },
  // p. 856
  {
    topic: 4,
    kind: 'shortcut',
    q: 'A problem gives <i>γ</i>. The fast way to <i>f</i>, <i>C</i><sub><i>V</i></sub> and <i>C</i><sub><i>P</i></sub>?',
    a: 'Recognise the trio 1.67/1.40/1.33 for mono/di/poly: that fixes <i>f</i> = 3, 5 or 6, and with it <i>C</i><sub><i>V</i></sub> and <i>C</i><sub><i>P</i></sub>',
    why: 'More atoms ⟹ smaller <i>γ</i>. Use <i>f</i> = 7 for a diatomic gas only when a problem invokes vibration or high temperature: it drops <i>γ</i> from 1.4 to 1.29.',
    say: null,
  },

  // ── Additional A · Adiabatic Processes for an Ideal Gas ──
  // pp. 862–864
  {
    topic: 5,
    kind: 'remember',
    q: 'A reversible adiabatic change of <i>n</i> moles of ideal gas: the <i>T</i>–<i>V</i> relation, and the work done by the gas?',
    a: '<i>T</i><sub>1</sub><i>V</i><sub>1</sub><sup><i>γ</i>−1</sup> = <i>T</i><sub>2</sub><i>V</i><sub>2</sub><sup><i>γ</i>−1</sup>; <i>W</i> = (<i>P</i><sub>1</sub><i>V</i><sub>1</sub> − <i>P</i><sub>2</sub><i>V</i><sub>2</sub>)/(<i>γ</i> − 1) = <i>nC</i><sub><i>V</i></sub>(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)',
    why: 'Only reversible adiabatic changes follow these. A free expansion is adiabatic too, yet <i>W</i> = 0, Δ<i>U</i> = 0 and an ideal gas keeps its temperature.',
    say: null,
  },
  // pp. 864, 866
  {
    topic: 5,
    kind: 'remember',
    q: 'The bulk modulus of an ideal gas for a reversible adiabatic change, and for an isothermal one?',
    a: 'Adiabatic: <i>B</i> = −<i>V</i>(d<i>P</i>/d<i>V</i>) = <i>γP</i>. Isothermal: <i>B</i> = <i>P</i>. The adiabatic one is <i>γ</i> times larger',
    why: 'From the slopes: d<i>P</i>/d<i>V</i> = −<i>γP</i>/<i>V</i> on an adiabat, −<i>P</i>/<i>V</i> on an isotherm, so the adiabat is steeper.',
    say: null,
  },

  // ── Additional B · Real Gases: Van der Waals Equation, Compressibility Factor, and Virial Expansion ──
  // pp. 867–868
  {
    topic: 6,
    kind: 'remember',
    q: 'The Van der Waals equation for <i>n</i> moles, and what do <i>a</i> and <i>b</i> correct for?',
    a: '(<i>P</i> + <i>an</i><sup>2</sup>/<i>V</i><sup>2</sup>)(<i>V</i> − <i>nb</i>) = <i>nRT</i>. <i>a</i>: intermolecular attraction (molecules near the wall are pulled back by their neighbours). <i>b</i>: the excluded volume per mole',
    why: '<i>b</i> is roughly 4 times the actual molecular volume. Units: <i>a</i> in Pa m<sup>6</sup> mol<sup>−2</sup>, <i>b</i> in m<sup>3</sup> mol<sup>−1</sup>.',
    say: null,
  },
  // p. 868
  {
    topic: 6,
    kind: 'remember',
    q: 'A Van der Waals gas: its Boyle temperature and its critical constants?',
    a: '<i>T</i><sub>B</sub> = <i>a</i>/(<i>Rb</i>); <i>T</i><sub>c</sub> = 8<i>a</i>/(27<i>Rb</i>), <i>P</i><sub>c</sub> = <i>a</i>/(27<i>b</i><sup>2</sup>), <i>V</i><sub>c</sub> = 3<i>b</i>',
    why: 'At <i>T</i><sub>B</sub> the second virial coefficient <i>B</i>(<i>T</i>) = <i>b</i> − <i>a</i>/(<i>RT</i>) vanishes, so <i>Z</i> ≈ 1 over a wide range of low pressures.',
    say: null,
  },

  // ── Additional C · Maxwell Distribution: Fractions, Effusion, and Most-Probable Kinetic Energy ──
  // pp. 872, 876
  {
    topic: 7,
    kind: 'remember',
    q: 'The most probable kinetic energy of the molecules of a Maxwellian gas?',
    a: '<i>ε</i><sub>mp</sub> = ½<i>k</i><sub>B</sub><i>T</i>. It is not the kinetic energy of a molecule moving at <i>v</i><sub>mp</sub>, which is ½<i>mv</i><sub>mp</sub><sup>2</sup> = <i>k</i><sub>B</sub><i>T</i>',
    why: 'The peak of a distribution depends on the variable used: changing from <i>v</i> to <i>ε</i> moves it. The average energy is still (3/2)<i>k</i><sub>B</sub><i>T</i>.',
    say: null,
  },
  // pp. 872–873
  {
    topic: 7,
    kind: 'remember',
    q: 'Gas effuses through a small hole of area <i>A</i> into vacuum. The flux and the rate of effusion?',
    a: 'Flux Φ = ¼<i>nv</i><sub>av</sub> = <i>P</i>/√(2π<i>mk</i><sub>B</sub><i>T</i>); rate d<i>N</i>/d<i>t</i> = <i>A</i>Φ ∝ <i>P</i>/√(<i>MT</i>)',
    why: 'At the same <i>P</i> and <i>T</i>, rate ∝ 1/√<i>M</i>: Graham’s law, derived from kinetic theory.',
    say: null,
  },

  // ── Additional D · Gas Mixtures: Effective Properties, Diffusion Separation, and Connected Bulbs ──
  // pp. 876–878
  {
    topic: 8,
    kind: 'remember',
    q: 'A gas mixture: its effective molar mass, and can you average the components’ rms speeds?',
    a: '<i>M</i><sub>mix</sub> = ∑<i>x</i><sub><i>i</i></sub><i>M</i><sub><i>i</i></sub>. No: each component has its own <i>v</i><sub>rms,<i>i</i></sub> = √(3<i>RT</i>/<i>M</i><sub><i>i</i></sub>); do not average them',
    why: '1 mol He + 1 mol CH<sub>4</sub> at 300 K: about 1368 and 684 m s<sup>−1</sup>, while √(3<i>RT</i>/<i>M</i><sub>mix</sub>) = 865 m s<sup>−1</sup> belongs to a hypothetical gas of molar mass <i>M</i><sub>mix</sub>.',
    say: null,
  },
  // pp. 877, 879
  {
    topic: 8,
    kind: 'remember',
    q: 'A gas mixture effuses through a small hole. The composition of the effusing gas?',
    a: '(d<i>N</i><sub><i>i</i></sub>/d<i>t</i>)/(d<i>N</i><sub><i>j</i></sub>/d<i>t</i>) = (<i>x</i><sub><i>i</i></sub>/<i>x</i><sub><i>j</i></sub>)√(<i>M</i><sub><i>j</i></sub>/<i>M</i><sub><i>i</i></sub>): the effused gas is richer in the lighter component, the residue in the heavier',
    why: 'A 1 ∶ 1 mole mixture of H<sub>2</sub> and D<sub>2</sub> effuses in the ratio √2 ≈ 1.414.',
    say: null,
  },

  // ── Additional E · Transport Phenomena: Viscosity, Thermal Conductivity, and Diffusion from Kinetic Theory ──
  // pp. 880–882
  {
    topic: 9,
    kind: 'remember',
    q: 'The viscosity of a gas from kinetic theory: the formula, and how it depends on pressure and temperature?',
    a: '<i>η</i> = (1/3)<i>ρv</i><sub>av</sub><i>λ</i>: independent of pressure, and ∝ √<i>T</i>',
    why: 'At higher pressure <i>λ</i> falls as 1/<i>P</i> but <i>ρ</i> rises as <i>P</i>, so <i>ρλ</i> stays constant.',
    say: null,
  },
  // pp. 880–882
  {
    topic: 9,
    kind: 'remember',
    q: 'How do the diffusion coefficient and the thermal conductivity of a gas depend on <i>T</i> and <i>P</i>?',
    a: '<i>D</i> = (1/3)<i>v</i><sub>av</sub><i>λ</i> ∝ <i>T</i><sup>3/2</sup>/<i>P</i>; thermal conductivity <i>κ</i> ∝ √<i>T</i>, independent of pressure at low density',
    why: 'Diffusion over a distance <i>L</i> takes a time <i>t</i> ∼ <i>L</i><sup>2</sup>/<i>D</i>: about 4.6 hours for 1 m with <i>D</i> ≈ 0.6 cm<sup>2</sup> s<sup>−1</sup>.',
    say: null,
  },
];
