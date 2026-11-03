/**
 * KEY POINTS for Physics Class 11, Chapter 10 (Thermal Properties of
 * Matter).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key formulas and Cheat sheet. Common mistakes: its
 * Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's mnemonic, word for word.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Subscripts
 * that are words or labels stay upright (<i>c</i><sub>water</sub>,
 * <i>R</i><sub>eq</sub>); a subscript the book sets italic stays italic
 * (<i>L</i><sub><i>f</i></sub>, <i>λ</i><sub><i>m</i></sub>). π is upright.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Temperature, Heat and Expansion ──
  // pp. 677–678, 683
  {
    topic: 0,
    kind: 'remember',
    q: 'Linear, areal and volume expansion: the formulas, and how <i>α</i>, <i>β</i> and <i>γ</i> are related?',
    a: 'Δ<i>L</i> = <i>αL</i><sub>0</sub>Δ<i>T</i>, Δ<i>A</i> = <i>βA</i><sub>0</sub>Δ<i>T</i>, Δ<i>V</i> = <i>γV</i><sub>0</sub>Δ<i>T</i>, with <i>β</i> = 2<i>α</i>, <i>γ</i> = 3<i>α</i>',
    why: 'For an isotropic solid; each coefficient is in K<sup>−1</sup> (or per °C, same magnitude).',
    say: '1-2-3 for line-area-volume.',
  },
  // pp. 677–678, 683–684
  {
    topic: 0,
    kind: 'remember',
    q: 'A substance is heated by Δ<i>T</i>. How does its density change, and where is water the exception?',
    a: '<i>ρ</i> = <i>ρ</i><sub>0</sub>/(1 + <i>γ</i>Δ<i>T</i>) ≈ <i>ρ</i><sub>0</sub>(1 − <i>γ</i>Δ<i>T</i>), mass fixed while volume grows. Water contracts on heating from 0 °C to 4 °C: it is densest at 4 °C',
    why: 'This anomaly is the reason fish survive a frozen pond.',
    say: '4 keeps the fish alive.',
  },
  // pp. 677, 683
  {
    topic: 0,
    kind: 'mixup',
    q: 'Converting °C to °F or K: when do the +32 and +273 apply?',
    a: 'Only to readings: <i>F</i> = (9/5)<i>C</i> + 32, <i>K</i> = <i>C</i> + 273.15. A temperature change never takes the offset: Δ<i>F</i> = (9/5)Δ<i>C</i>, Δ<i>C</i> = Δ<i>K</i>',
    why: 'The general identity: (<i>C</i> − 0)/100 = (<i>F</i> − 32)/180 = (<i>K</i> − 273.15)/100 = (<i>R</i> − 0)/80.',
    say: null,
  },
  // pp. 683–684
  {
    topic: 0,
    kind: 'mistake',
    q: 'A metal ring with a hole is heated. Does the hole shrink?',
    a: 'No: a hole, a cavity or the inner radius of a ring expands outward, by the same coefficient as the solid',
    why: 'Treat the empty region as if it were filled with the same metal.',
    say: null,
  },
  // p. 683
  {
    topic: 0,
    kind: 'shortcut',
    q: 'A 2-second sanity check on any expansion answer for a solid?',
    a: 'Solids have <i>α</i> ∼ 10<sup>−5</sup> K<sup>−1</sup>, so a metre-long rod over a 100° rise grows by only ∼ 1 mm',
    why: 'An answer in centimetres means a power-of-ten error. Go straight for Δ<i>L</i> = <i>αL</i><sub>0</sub>Δ<i>T</i>.',
    say: null,
  },

  // ── Topic 02 · Calorimetry and Specific Heat ──
  // pp. 687, 692
  {
    topic: 1,
    kind: 'remember',
    q: 'The principle of calorimetry?',
    a: '∑ <i>Q</i><sub>lost</sub> = ∑ <i>Q</i><sub>gained</sub>, for an insulated system with no reaction',
    why: 'The calorimeter counts too: include its <i>m</i><sub><i>c</i></sub><i>c</i><sub><i>c</i></sub>, or its water equivalent <i>w</i> = <i>m</i><sub><i>c</i></sub><i>c</i><sub><i>c</i></sub>/<i>c</i><sub>water</sub>.',
    say: null,
  },
  // pp. 686–687, 692
  {
    topic: 1,
    kind: 'remember',
    q: 'The standard constants: the specific heats of water and ice, and the latent heats of fusion and vaporization?',
    a: '<i>c</i><sub>water</sub> = 1 cal g<sup>−1</sup> °C<sup>−1</sup> = 4186 J kg<sup>−1</sup> K<sup>−1</sup>; <i>c</i><sub>ice</sub> = 0.5 cal g<sup>−1</sup> °C<sup>−1</sup>; <i>L</i><sub><i>f</i></sub> = 80 cal g<sup>−1</sup>; <i>L</i><sub><i>v</i></sub> = 540 cal g<sup>−1</sup> = 2.26 × 10<sup>6</sup> J kg<sup>−1</sup>',
    why: '<i>L</i><sub><i>v</i></sub> ≫ <i>L</i><sub><i>f</i></sub>: that is why the boiling plateau on a heating curve is far longer than the melting one.',
    say: null,
  },
  // pp. 687, 692
  {
    topic: 1,
    kind: 'mixup',
    q: '<i>Q</i> = <i>mc</i>Δ<i>T</i> or <i>Q</i> = <i>mL</i>: which applies when?',
    a: '<i>mc</i>Δ<i>T</i> for a temperature change with no phase change; <i>mL</i> for a phase change, at constant temperature',
    why: 'During melting and boiling the temperature is frozen: using <i>mc</i>Δ<i>T</i> there is the single most common mistake.',
    say: 'Warm-Melt-Warm-Boil-Warm for the five legs of ice → steam.',
  },
  // p. 692
  {
    topic: 1,
    kind: 'mistake',
    q: 'An ice or steam mixing problem. Can you write “<i>T</i>(final) = something” straight away?',
    a: 'No: check the heat budget first. The hot side may not have enough heat to melt all the ice, or may have too much, leaving a steam–water mixture at 100 °C',
    why: 'The golden rule: never assume the final state.',
    say: null,
  },
  // p. 692
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Running a heat budget. Which units, and in what order do you spend the heat?',
    a: 'Cal-units (water’s specific heat is exactly 1). Tally what the hot side can supply, then spend it on the cold side in order: warm, melt, warm, boil',
    why: 'The leg where the budget runs out pins down both the final temperature and the final composition.',
    say: null,
  },

  // ── Topic 03 · Heat Transfer (Conduction, Convection) ──
  // pp. 693–694, 702
  {
    topic: 2,
    kind: 'remember',
    q: 'Fourier’s law for steady conduction along a rod?',
    a: '<i>H</i> = d<i>Q</i>/d<i>t</i> = <i>KA</i>(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/<i>L</i>, a heat current in watts',
    why: '<i>K</i> is in W m<sup>−1</sup> K<sup>−1</sup>: about 400 for copper, 0.025 for air.',
    say: null,
  },
  // pp. 694, 702
  {
    topic: 2,
    kind: 'remember',
    q: 'The thermal resistance of a rod, and how rods combine in series and in parallel?',
    a: '<i>R</i> = <i>L</i>/(<i>KA</i>), <i>H</i> = Δ<i>T</i>/<i>R</i>; series <i>R</i><sub>eq</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> (same <i>H</i>), parallel 1/<i>R</i><sub>eq</sub> = 1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub> (same Δ<i>T</i>)',
    why: 'For two rods of equal length and area in parallel, <i>K</i><sub>eq</sub> = (<i>K</i><sub>1</sub> + <i>K</i><sub>2</sub>)/2.',
    say: null,
  },
  // pp. 695, 702
  {
    topic: 2,
    kind: 'mixup',
    q: 'Natural convection and forced convection: what drives each?',
    a: 'Natural: buoyancy (density differences). Forced: an external pump or fan',
    why: 'Either way it is bulk transport of heat by a moving fluid: it cannot occur in solids or vacuum.',
    say: 'Solids conduct, fluids convect, vacuum only radiates.',
  },
  // p. 701
  {
    topic: 2,
    kind: 'mistake',
    q: 'Two rods conduct heat in series. Is the temperature drop shared equally between them?',
    a: 'No: the heat current is the same in each rod, and Δ<i>T</i> divides in proportion to each resistance',
    why: 'The poor conductor takes the bigger drop.',
    say: null,
  },
  // pp. 701–702
  {
    topic: 2,
    kind: 'shortcut',
    q: 'A multi-rod conduction problem. The fast way in?',
    a: 'Treat it as a DC circuit: replace each segment by <i>R</i> = <i>L</i>/(<i>KA</i>), redraw the network, and use <i>H</i> = Δ<i>T</i>/<i>R</i><sub>eq</sub>',
    why: 'This holds only in steady state: while a rod is still warming up, the heat current differs along its length.',
    say: null,
  },

  // ── Topic 04 · Radiation and Cooling Laws ──
  // pp. 704, 709–710
  {
    topic: 3,
    kind: 'remember',
    q: 'The power a body radiates, and its net loss to surroundings at <i>T</i><sub>0</sub>?',
    a: '<i>P</i> = <i>eσAT</i><sup>4</sup>; <i>P</i><sub>net</sub> = <i>eσA</i>(<i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup>), with both temperatures in kelvin',
    why: '<i>σ</i> = 5.67 × 10<sup>−8</sup> W m<sup>−2</sup> K<sup>−4</sup>; the emissivity 0 ≤ <i>e</i> ≤ 1, with <i>e</i> = 1 for a black body.',
    say: 'Stefan: power to the fourth (in Kelvin!)',
  },
  // pp. 704, 710
  {
    topic: 3,
    kind: 'remember',
    q: 'Wien’s displacement law?',
    a: '<i>λ</i><sub><i>m</i></sub><i>T</i> = <i>b</i>, with <i>b</i> = 2.9 × 10<sup>−3</sup> m K: a hotter body peaks at a shorter wavelength',
    why: '<i>λ</i><sub><i>m</i></sub> is the wavelength of maximum emission; <i>T</i> is the absolute temperature.',
    say: 'Wien: hot is blue, cool is red.',
  },
  // pp. 704, 710
  {
    topic: 3,
    kind: 'mixup',
    q: 'Emissive power and emissivity: what is each?',
    a: 'Emissive power <i>E</i>: energy radiated per unit area per unit time, in W m<sup>−2</sup>. Emissivity <i>e</i>: a dimensionless number between 0 and 1',
    why: 'A black body has <i>e</i> = 1, but its emissive power <i>σT</i><sup>4</sup> is certainly not 1.',
    say: null,
  },
  // pp. 704, 710
  {
    topic: 3,
    kind: 'mistake',
    q: 'A body is far hotter than its surroundings. Can you use Newton’s law of cooling?',
    a: 'No: −d<i>T</i>/d<i>t</i> = <i>k</i>(<i>T</i> − <i>T</i><sub>0</sub>) is an approximation for small excess only. Use the full Stefan <i>T</i><sup>4</sup> relation',
    why: 'Newton’s law is Stefan’s law for small excess, with <i>k</i> = 4<i>eσAT</i><sub>0</sub><sup>3</sup>/(<i>mc</i>).',
    say: null,
  },
  // p. 710
  {
    topic: 3,
    kind: 'shortcut',
    q: 'A “by what factor” radiation question. The fast way?',
    a: 'Skip the constants and use kelvin ratios: <i>P</i><sub>2</sub>/<i>P</i><sub>1</sub> = (<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>)<sup>4</sup> for the power of the same body, <i>λ</i><sub>2</sub>/<i>λ</i><sub>1</sub> = <i>T</i><sub>1</sub>/<i>T</i><sub>2</sub> for peak wavelength',
    why: 'For cooling, the average form (<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/<i>t</i> = <i>k</i>((<i>T</i><sub>1</sub> + <i>T</i><sub>2</sub>)/2 − <i>T</i><sub>0</sub>) turns a differential equation into one line.',
    say: null,
  },

  // ── Topic 05 · Thermometry, the Ideal-Gas Equation & Absolute Temperature ──
  // pp. 713, 717
  {
    topic: 4,
    kind: 'remember',
    q: 'The constant-volume gas thermometer: how is the temperature found?',
    a: '<i>T</i> = 273.16 × <i>P</i>/<i>P</i><sub>tr</sub> K, where <i>P</i><sub>tr</sub> is the gas pressure at the triple point of water',
    why: 'All dilute gases agree; the kelvin is defined as 1/273.16 of the triple-point temperature.',
    say: 'Measure by a property, standardise by a gas, count from absolute zero in kelvin.',
  },
  // pp. 712–713, 717
  {
    topic: 4,
    kind: 'remember',
    q: 'The ideal-gas equation, with the values of <i>R</i> and <i>k</i><sub><i>B</i></sub>?',
    a: '<i>PV</i> = <i>nRT</i> = <i>Nk</i><sub><i>B</i></sub><i>T</i>; <i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>, <i>k</i><sub><i>B</i></sub> = 1.38 × 10<sup>−23</sup> J K<sup>−1</sup>',
    why: 'The ideal-gas laws hold only at low pressure and high temperature, far from liquefaction.',
    say: null,
  },
  // pp. 713, 717
  {
    topic: 4,
    kind: 'mixup',
    q: 'Boyle, Charles, Gay-Lussac: which quantity does each hold fixed?',
    a: 'Boyle: <i>PV</i> = const at fixed <i>T</i>. Charles: <i>V</i>/<i>T</i> = const at fixed <i>P</i>. Gay-Lussac: <i>P</i>/<i>T</i> = const at fixed <i>V</i>',
    why: 'For a fixed mass of ideal gas; mislabelling which is constant gives a wrong formula.',
    say: 'Boyle holds <i>T</i>, Charles holds <i>P</i>, Gay-Lussac holds <i>V</i>.',
  },
  // pp. 713, 717
  {
    topic: 4,
    kind: 'mistake',
    q: 'Is the triple point of water the same as the ice point?',
    a: 'No: the triple point is 273.16 K (611.7 Pa, three phases coexisting); the ordinary ice point is 273.15 K at 1 atm',
    why: 'They differ by only 0.01 K, but the triple point is the defining fixed point of the kelvin.',
    say: null,
  },
  // p. 717
  {
    topic: 4,
    kind: 'shortcut',
    q: 'Any Boyle, Charles or Gay-Lussac question. One equation for all three?',
    a: '<i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>/<i>T</i><sub>2</sub>, with kelvin throughout',
    why: 'For a fixed mass of gas; each law is this with one quantity held fixed. In Celsius the 273 offset is fatal.',
    say: null,
  },

  // ── Topic 06 · Change of State: Phase Transitions, Triple Point & Phase Diagrams ──
  // pp. 719, 724
  {
    topic: 5,
    kind: 'remember',
    q: 'How do the melting point and the boiling point change with pressure?',
    a: 'Boiling point rises with pressure (pressure cooker) and falls at altitude. Melting point rises for most substances, but falls for water (≈ −0.0075 °C per atm)',
    why: 'Water’s fusion curve slopes backward because ice → water shrinks (Δ<i>V</i> < 0): the basis of regelation.',
    say: null,
  },
  // pp. 719, 724–725
  {
    topic: 5,
    kind: 'remember',
    q: 'The triple point and the critical point of water?',
    a: 'Triple point: 273.16 K, 611.7 Pa, where all three phases coexist. Critical point: 647 K (374 °C), 22.1 MPa',
    why: 'Above the critical temperature no amount of pressure produces a liquid.',
    say: 'Triple point: all three at one corner.',
  },
  // pp. 719, 724–725
  {
    topic: 5,
    kind: 'mixup',
    q: 'Evaporation and boiling: where, at what temperature, and with what effect?',
    a: 'Evaporation: at the surface, at any temperature, and it cools the liquid. Boiling: throughout the bulk, at the boiling point, and it needs continuous heat input',
    why: 'Evaporation is faster with higher temperature, larger area, low humidity and wind.',
    say: 'Evaporation cools, boiling needs heat.',
  },
  // pp. 719, 724
  {
    topic: 5,
    kind: 'mistake',
    q: 'A loaded wire passes down through a block of ice. Has it cut the ice?',
    a: 'No: the ice melts under the wire’s pressure and refreezes when the pressure is released. The block stays whole',
    why: 'Regelation needs a melting point that falls with pressure, as for ice.',
    say: null,
  },
  // pp. 719, 724
  {
    topic: 5,
    kind: 'shortcut',
    q: 'A conceptual question on the pressure cooker, mountain cooking, dry ice or regelation. The fast way?',
    a: 'Sketch a quick <i>P</i>–<i>T</i> diagram, mark the triple and critical points, and slide along a constant-pressure or constant-temperature line to see which border you cross',
    why: 'Dry ice sublimes at 1 atm because that is below the triple-point pressure of CO<sub>2</sub> (5.1 atm).',
    say: null,
  },

  // ── Additional A · Thermal Stress in Composite & Constrained Systems ──
  // pp. 726–728
  {
    topic: 6,
    kind: 'remember',
    q: 'Two rods of different materials are joined end to end between rigid walls and heated by Δ<i>T</i>. The equation for the common force <i>F</i>?',
    a: '<i>FL</i><sub>1</sub>/(<i>A</i><sub>1</sub><i>Y</i><sub>1</sub>) + <i>α</i><sub>1</sub><i>L</i><sub>1</sub>Δ<i>T</i> + <i>FL</i><sub>2</sub>/(<i>A</i><sub>2</sub><i>Y</i><sub>2</sub>) + <i>α</i><sub>2</sub><i>L</i><sub>2</sub>Δ<i>T</i> = 0; then each stress <i>σ</i><sub><i>i</i></sub> = <i>F</i>/<i>A</i><sub><i>i</i></sub>',
    why: 'The total length is fixed and the force is common through series elements; on heating, <i>F</i> comes out negative: a compression.',
    say: null,
  },
  // pp. 727–728
  {
    topic: 6,
    kind: 'remember',
    q: 'A bimetallic strip (equal thickness <i>d</i>, equal Young’s modulus) is heated by Δ<i>T</i>. Its radius of curvature?',
    a: '<i>R</i> = 4<i>d</i>/[3(<i>α</i><sub>2</sub> − <i>α</i><sub>1</sub>)Δ<i>T</i>], with the larger-<i>α</i> strip on the outside',
    why: 'The cruder model <i>R</i> = <i>d</i>/[(<i>α</i><sub>2</sub> − <i>α</i><sub>1</sub>)Δ<i>T</i>] ignores the force and moment balance.',
    say: null,
  },

  // ── Additional B · Steady Conduction in Cylindrical & Spherical Shells ──
  // p. 729
  {
    topic: 7,
    kind: 'remember',
    q: 'Steady radial conduction through a pipe wall (radii <i>r</i><sub>1</sub>, <i>r</i><sub>2</sub>, length <i>L</i>): the thermal resistance?',
    a: '<i>R</i><sub>cyl</sub> = ln(<i>r</i><sub>2</sub>/<i>r</i><sub>1</sub>)/(2π<i>KL</i>), and <i>H</i> = (<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/<i>R</i><sub>cyl</sub>',
    why: 'The area changes with radius, so Fourier’s law must be integrated; layers such as pipe + insulation add in series.',
    say: null,
  },
  // pp. 729–731
  {
    topic: 7,
    kind: 'remember',
    q: 'The thermal resistance of a spherical shell (radii <i>r</i><sub>1</sub>, <i>r</i><sub>2</sub>), and its limit as <i>r</i><sub>2</sub> → ∞?',
    a: '<i>R</i><sub>sph</sub> = (<i>r</i><sub>2</sub> − <i>r</i><sub>1</sub>)/(4π<i>Kr</i><sub>1</sub><i>r</i><sub>2</sub>); as <i>r</i><sub>2</sub> → ∞, <i>R</i> → 1/(4π<i>Kr</i><sub>1</sub>)',
    why: 'The limit treats a spherical cavity inside a large block.',
    say: null,
  },

  // ── Additional C · Exact Radiation Cooling (Beyond Newton's Law) ──
  // pp. 731, 733
  {
    topic: 8,
    kind: 'remember',
    q: 'A body cools by radiation from well above its surroundings. Does Newton’s law (<i>k</i> = 4<i>eσAT</i><sub>0</sub><sup>3</sup>/(<i>mc</i>)) get the cooling time right?',
    a: 'No: it overestimates the time. <i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup> exceeds 4<i>T</i><sub>0</sub><sup>3</sup>(<i>T</i> − <i>T</i><sub>0</sub>) whenever <i>T</i> > <i>T</i><sub>0</sub>, so the real body cools faster',
    why: 'Always check Δ<i>T</i>/<i>T</i><sub>0</sub> < 0.1 before using Newton.',
    say: null,
  },
  // p. 732
  {
    topic: 8,
    kind: 'remember',
    q: 'Two large parallel gray plates at <i>T</i><sub>1</sub> and <i>T</i><sub>2</sub>, emissivities <i>e</i><sub>1</sub> and <i>e</i><sub>2</sub>. The net radiative flux between them?',
    a: '<i>q</i> = <i>σ</i>(<i>T</i><sub>1</sub><sup>4</sup> − <i>T</i><sub>2</sub><sup>4</sup>)/(1/<i>e</i><sub>1</sub> + 1/<i>e</i><sub>2</sub> − 1)',
    why: 'The series “resistances” (1 − <i>e</i><sub>1</sub>)/<i>e</i><sub>1</sub>, 1 and (1 − <i>e</i><sub>2</sub>)/<i>e</i><sub>2</sub> add to that denominator.',
    say: null,
  },

  // ── Additional D · Advanced Calorimetry: Variable Specific Heat & Continuous Power ──
  // pp. 734–735
  {
    topic: 9,
    kind: 'remember',
    q: 'The specific heat varies as <i>c</i> = <i>c</i><sub>0</sub> + <i>βT</i>. The heat to warm a mass <i>m</i> from <i>T</i><sub>1</sub> to <i>T</i><sub>2</sub>?',
    a: '<i>Q</i> = <i>m</i>[<i>c</i><sub>0</sub>(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>) + (<i>β</i>/2)(<i>T</i><sub>2</sub><sup>2</sup> − <i>T</i><sub>1</sub><sup>2</sup>)]',
    why: 'Because this <i>c</i> is linear in the temperature, <i>c</i> at the mid-temperature gives the same answer; for non-linear <i>c</i> the average-<i>c</i> method fails.',
    say: null,
  },
  // pp. 734–735
  {
    topic: 9,
    kind: 'remember',
    q: 'A calorimeter holds <i>m</i><sub><i>w</i></sub> of water at <i>T</i><sub>1</sub>; <i>m</i><sub><i>h</i></sub> of hot water at <i>T</i><sub>2</sub> is added, final temperature <i>T</i><sub><i>f</i></sub>. Its water equivalent?',
    a: '<i>w</i> = <i>m</i><sub><i>h</i></sub>(<i>T</i><sub>2</sub> − <i>T</i><sub><i>f</i></sub>)/(<i>T</i><sub><i>f</i></sub> − <i>T</i><sub>1</sub>) − <i>m</i><sub><i>w</i></sub>',
    why: 'A computed <i>w</i> < 0 is impossible: it signals an experimental error, such as heat leaking in.',
    say: null,
  },
];
