/**
 * KEY POINTS for Physics Class 11, Chapter 11 (Thermodynamics).
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
 * sheet's memory aid, word for word.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Subscripts
 * that are words or labels stay upright (<i>Q</i><sub>rev</sub>,
 * <i>η</i><sub>max</sub>); a subscript the book sets italic stays italic
 * (<i>C</i><sub><i>V</i></sub>, <i>V</i><sub><i>f</i></sub>). π is upright.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Thermodynamic State and the Zeroth Law ──
  // pp. 743, 750
  {
    topic: 0,
    kind: 'remember',
    q: 'The zeroth law of thermodynamics: what does it say, and what does it define?',
    a: 'If A and B are each in thermal equilibrium with C, then A and B are in thermal equilibrium with each other. It defines temperature, the shared label of equilibrium',
    why: 'Equilibrium ⇔ equal temperature: not equal energy, not equal pressure.',
    say: 'Zeroth = the law that gives birth to temperature.',
  },
  // pp. 743, 745, 750
  {
    topic: 0,
    kind: 'remember',
    q: 'How many state variables fix the state of a homogeneous system of fixed mass?',
    a: 'Any two independent ones, e.g. <i>P</i> and <i>V</i>: the third follows from the equation of state, <i>PV</i> = <i>nRT</i> for an ideal gas',
    why: 'For a system in equilibrium, of fixed mass and composition. Specifying all three over-determines the state.',
    say: 'Two independent variables, third comes free.',
  },
  // pp. 745, 749–750
  {
    topic: 0,
    kind: 'mixup',
    q: 'State variables and path variables: which are <i>P</i>, <i>V</i>, <i>T</i>, <i>U</i>, <i>Q</i> and <i>W</i>?',
    a: '<i>P</i>, <i>V</i>, <i>T</i>, <i>U</i> are state (point) functions: they depend only on the state, and ∮d<i>U</i> = 0. Heat <i>Q</i> and work <i>W</i> are path variables: they depend on the route taken',
    why: 'There is no amount of heat stored in a gas: never write “the heat content of the gas”.',
    say: null,
  },
  // pp. 743, 749–750
  {
    topic: 0,
    kind: 'mistake',
    q: 'Two systems are at the same temperature. Do they hold the same internal energy?',
    a: 'Usually not: temperature is intensive, internal energy is extensive. Equal temperature means equilibrium, not equal energy',
    why: 'Cut a system in half: <i>P</i> and <i>T</i> stay the same (intensive); <i>V</i>, <i>U</i> and <i>n</i> halve (extensive).',
    say: null,
  },
  // pp. 749–750
  {
    topic: 0,
    kind: 'shortcut',
    q: 'A “same gas, fixed amount, two states” problem. The fast way?',
    a: 'Use the ratio form <i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>/<i>T</i><sub>2</sub> and cancel whatever is held constant (<i>V</i> for a rigid vessel, <i>P</i> for a free piston)',
    why: 'Temperatures in kelvin: <i>T</i>(K) = <i>t</i>(°C) + 273.15. For “two bodies reach equilibrium”, write the qualitative answer first: equal final temperature.',
    say: null,
  },

  // ── Topic 02 · The First Law of Thermodynamics ──
  // pp. 752, 758
  {
    topic: 1,
    kind: 'remember',
    q: 'The first law of thermodynamics in the board/JEE convention, and the sign of each term?',
    a: 'Δ<i>Q</i> = Δ<i>U</i> + Δ<i>W</i>. Δ<i>Q</i> > 0: heat absorbed by the system; Δ<i>W</i> > 0: work done by the system (expansion); Δ<i>U</i> > 0: internal energy increases',
    why: 'Some textbooks (and chemistry) write Δ<i>U</i> = Δ<i>Q</i> + Δ<i>W</i>, with Δ<i>W</i> as work done on the system: pick one and never mix them mid-problem.',
    say: 'Income = Savings + Spending → Δ<i>Q</i> = Δ<i>U</i> + Δ<i>W</i>.',
  },
  // pp. 752, 758
  {
    topic: 1,
    kind: 'remember',
    q: 'The work done by a gas, and the change in internal energy of an ideal gas?',
    a: 'Δ<i>W</i> = ∫<i>P</i> d<i>V</i>, the area under the <i>P</i>–<i>V</i> curve, for a quasi-static process. Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i> for every process',
    why: 'The internal energy of an ideal gas depends only on temperature. <i>U</i> is a state function; <i>Q</i> and <i>W</i> are path functions.',
    say: null,
  },
  // pp. 752, 758
  {
    topic: 1,
    kind: 'mixup',
    q: 'Isochoric, isobaric, isothermal, adiabatic: what does the first law reduce to in each?',
    a: 'Isochoric: Δ<i>W</i> = 0, so Δ<i>Q</i> = Δ<i>U</i>. Isobaric: Δ<i>Q</i> = Δ<i>U</i> + <i>P</i>Δ<i>V</i>. Isothermal (ideal gas): Δ<i>U</i> = 0, so Δ<i>Q</i> = Δ<i>W</i>. Adiabatic: Δ<i>Q</i> = 0, so Δ<i>U</i> = −Δ<i>W</i>',
    why: 'Each is the master equation with one term killed. Don’t assume Δ<i>U</i> = Δ<i>Q</i> unless the process is isochoric.',
    say: '<i>V</i> fixed kills <i>W</i>; <i>T</i> fixed kills Δ<i>U</i>; <i>Q</i> = 0 is adiabatic.',
  },
  // p. 757
  {
    topic: 1,
    kind: 'mistake',
    q: 'Is it right to speak of the “heat content” of a gas?',
    a: 'No: a gas in a state has internal energy; it does not contain heat. Heat is energy crossing the boundary, defined only for a process',
    why: 'Internal energy is a state function; heat, like work, is a path quantity.',
    say: null,
  },
  // p. 758
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A two-path problem, or a cyclic one. The fast way?',
    a: 'Compute Δ<i>U</i> once from the fully specified path and reuse it on the other. For a cycle, jump straight to Δ<i>Q</i><sub>net</sub> = Δ<i>W</i><sub>net</sub>, the enclosed loop area',
    why: 'Both work because <i>U</i> is a state function: over a cycle Δ<i>U</i> = 0.',
    say: null,
  },

  // ── Topic 03 · Thermodynamic Processes ──
  // pp. 759–760, 766–767
  {
    topic: 2,
    kind: 'remember',
    q: 'For <i>n</i> moles of an ideal gas: the work done by the gas in an isothermal and in an adiabatic process?',
    a: 'Isothermal: <i>W</i> = <i>nRT</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>) = <i>nRT</i> ln(<i>P</i><sub><i>i</i></sub>/<i>P</i><sub><i>f</i></sub>). Adiabatic: <i>W</i> = (<i>P</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub> − <i>P</i><sub><i>f</i></sub><i>V</i><sub><i>f</i></sub>)/(<i>γ</i> − 1) = <i>nR</i>(<i>T</i><sub><i>i</i></sub> − <i>T</i><sub><i>f</i></sub>)/(<i>γ</i> − 1)',
    why: 'For a quasi-static process. Expanding from the same initial state to the same final volume: isobaric > isothermal > adiabatic.',
    say: null,
  },
  // pp. 760, 762, 766–767
  {
    topic: 2,
    kind: 'remember',
    q: 'The adiabatic relations for an ideal gas, in all three forms?',
    a: '<i>PV</i><sup><i>γ</i></sup> = const, <i>TV</i><sup><i>γ</i>−1</sup> = const, <i>P</i><sup>1−<i>γ</i></sup><i>T</i><sup><i>γ</i></sup> = const, with <i>γ</i> = <i>C</i><sub><i>P</i></sub>/<i>C</i><sub><i>V</i></sub>',
    why: 'For a quasi-static adiabatic process. Writing <i>TV</i><sup><i>γ</i></sup> = const is a classic slip.',
    say: 'Pressure uses <i>γ</i>, Temperature uses <i>γ</i> − 1.',
  },
  // pp. 760, 766–767
  {
    topic: 2,
    kind: 'mixup',
    q: 'An isothermal and an adiabatic curve through the same point on a <i>P</i>–<i>V</i> diagram: how do they differ?',
    a: 'The adiabatic is steeper: slope −<i>γP</i>/<i>V</i> against −<i>P</i>/<i>V</i>, <i>γ</i> times as steep. The adiabatic gas changes temperature; the isothermal one does not',
    why: 'Δ<i>Q</i> = <i>W</i> is isothermal; Δ<i>U</i> = −<i>W</i> is adiabatic.',
    say: 'Adiabatic is the Athlete — steeper and cools down when it works.',
  },
  // p. 766
  {
    topic: 2,
    kind: 'mistake',
    q: 'Can you use <i>W</i> = <i>nRT</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>) or <i>W</i> = <i>P</i>Δ<i>V</i> for any process?',
    a: 'No: <i>W</i> = <i>nRT</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>) is only isothermal; <i>W</i> = <i>P</i>Δ<i>V</i> is only isobaric',
    why: 'Identify the process first: a vertical line is isochoric, a horizontal one isobaric, and of the two curves the steeper one is adiabatic.',
    say: null,
  },
  // p. 766
  {
    topic: 2,
    kind: 'shortcut',
    q: 'An adiabatic numerical. The fast way?',
    a: 'Work with ratios: <i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub> = (<i>V</i><sub><i>i</i></sub>/<i>V</i><sub><i>f</i></sub>)<sup><i>γ</i>−1</sup>, <i>P</i><sub><i>f</i></sub>/<i>P</i><sub><i>i</i></sub> = (<i>V</i><sub><i>i</i></sub>/<i>V</i><sub><i>f</i></sub>)<sup><i>γ</i></sup>. For the work, skip the integral: <i>W</i> = <i>nR</i>(<i>T</i><sub><i>i</i></sub> − <i>T</i><sub><i>f</i></sub>)/(<i>γ</i> − 1)',
    why: 'A monoatomic gas (<i>γ</i> = 5/3) compressed adiabatically to half its volume: <i>T</i> rises by a factor 2<sup>2/3</sup> ≈ 1.59.',
    say: null,
  },

  // ── Topic 04 · Specific Heat Capacity (CP, CV and Mayer's Relation) ──
  // pp. 769, 773–774
  {
    topic: 3,
    kind: 'remember',
    q: 'Mayer’s relation, and why is <i>C</i><sub><i>P</i></sub> greater than <i>C</i><sub><i>V</i></sub>?',
    a: '<i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>R</i>, per mole, for an ideal gas. At constant pressure the gas also does expansion work, so the same Δ<i>T</i> needs <i>nR</i>Δ<i>T</i> more heat',
    why: 'It holds only approximately for real gases, and not at all for solids and liquids (there <i>C</i><sub><i>P</i></sub> ≈ <i>C</i><sub><i>V</i></sub>).',
    say: '<i>C</i><sub><i>P</i></sub> pays for the Push.',
  },
  // pp. 769, 774
  {
    topic: 3,
    kind: 'remember',
    q: 'An ideal gas with <i>f</i> active degrees of freedom: <i>C</i><sub><i>V</i></sub>, <i>C</i><sub><i>P</i></sub> and <i>γ</i>, and their values for mono-, di- and polyatomic gases?',
    a: '<i>C</i><sub><i>V</i></sub> = (<i>f</i>/2)<i>R</i>, <i>C</i><sub><i>P</i></sub> = (<i>f</i>/2 + 1)<i>R</i>, <i>γ</i> = 1 + 2/<i>f</i>. Mono (<i>f</i> = 3): (3/2)<i>R</i>, (5/2)<i>R</i>, 5/3. Di (<i>f</i> = 5): (5/2)<i>R</i>, (7/2)<i>R</i>, 7/5. Nonlinear poly (<i>f</i> = 6): 3<i>R</i>, 4<i>R</i>, 4/3',
    why: 'At ordinary temperatures vibration is frozen, so a diatomic gas has <i>f</i> = 5, not 7.',
    say: 'More wiggles, more storage.',
  },
  // pp. 769, 773–774
  {
    topic: 3,
    kind: 'mixup',
    q: 'Specific heat capacity <i>s</i> and molar heat capacity <i>C</i>: units, and how are they related?',
    a: '<i>s</i> is per kilogram, J kg<sup>−1</sup> K<sup>−1</sup> (Δ<i>Q</i> = <i>ms</i>Δ<i>T</i>); <i>C</i> is per mole, J mol<sup>−1</sup> K<sup>−1</sup> (Δ<i>Q</i> = <i>nC</i>Δ<i>T</i>). They differ by the molar mass: <i>C</i> = <i>Ms</i>',
    why: 'Benchmarks: water <i>s</i> ≈ 4186 J kg<sup>−1</sup> K<sup>−1</sup>; many solids (Dulong–Petit) <i>C</i> ≈ 3<i>R</i> ≈ 25 J mol<sup>−1</sup> K<sup>−1</sup>.',
    say: null,
  },
  // pp. 773–774
  {
    topic: 3,
    kind: 'mistake',
    q: 'An ideal gas is heated at constant pressure. Is Δ<i>U</i> = <i>nC</i><sub><i>P</i></sub>Δ<i>T</i>?',
    a: 'No: Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i> in every process. <i>C</i><sub><i>P</i></sub> is only for the heat at constant pressure, Δ<i>Q</i> = <i>nC</i><sub><i>P</i></sub>Δ<i>T</i>',
    why: 'The extra <i>R</i> in <i>C</i><sub><i>P</i></sub> is the expansion work, not internal energy.',
    say: null,
  },
  // p. 774
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Given <i>γ</i>, the molar heat capacities in one step?',
    a: '<i>C</i><sub><i>V</i></sub> = <i>R</i>/(<i>γ</i> − 1), <i>C</i><sub><i>P</i></sub> = <i>γR</i>/(<i>γ</i> − 1), with no degree-of-freedom counting',
    why: 'The constant-pressure work fraction <i>R</i>/<i>C</i><sub><i>P</i></sub> = 2/(<i>f</i> + 2) answers “which gas does most work” in one step.',
    say: null,
  },

  // ── Topic 05 · Heat Engines, Refrigerators & Heat Pumps ──
  // pp. 777, 780
  {
    topic: 4,
    kind: 'remember',
    q: 'A heat engine absorbs <i>Q</i><sub>1</sub> and rejects <i>Q</i><sub>2</sub> per cycle. Its work and its efficiency?',
    a: '<i>W</i> = <i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>; <i>η</i> = <i>W</i>/<i>Q</i><sub>1</sub> = 1 − <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub>, with 0 ≤ <i>η</i> < 1',
    why: 'Over a cycle Δ<i>U</i><sub>cycle</sub> = 0. <i>η</i> = 1 (<i>Q</i><sub>2</sub> = 0) is forbidden by the second law.',
    say: 'Engine: pay heat, get work. Fridge: pay work, move heat.',
  },
  // pp. 777, 780
  {
    topic: 4,
    kind: 'remember',
    q: 'The coefficients of performance of a refrigerator and of a heat pump?',
    a: 'COP<sub>ref</sub> = <i>Q</i><sub>2</sub>/<i>W</i> = <i>Q</i><sub>2</sub>/(<i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>); COP<sub>hp</sub> = <i>Q</i><sub>1</sub>/<i>W</i> = <i>Q</i><sub>1</sub>/(<i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>); so COP<sub>hp</sub> = COP<sub>ref</sub> + 1',
    why: 'A fridge removes <i>Q</i><sub>2</sub> from the cold space; a heat pump delivers <i>Q</i><sub>1</sub> to the warm space. Either way you pay work <i>W</i>, and <i>Q</i><sub>1</sub> = <i>Q</i><sub>2</sub> + <i>W</i>.',
    say: 'Figure of merit = what you want ÷ what you pay.',
  },
  // pp. 777, 780
  {
    topic: 4,
    kind: 'mixup',
    q: 'Efficiency and COP: can either exceed 1?',
    a: 'Efficiency never does: 0 ≤ <i>η</i> < 1. COP is a ratio that is normally > 1',
    why: 'COP is not a percentage capped at 100%: never write “COP = 80%”.',
    say: null,
  },
  // p. 780
  {
    topic: 4,
    kind: 'mistake',
    q: 'A refrigerator: is its COP <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub>?',
    a: 'No: the denominator is the work <i>W</i>, not the hot-side heat. COP = <i>Q</i><sub>2</sub>/<i>W</i> for a fridge, <i>Q</i><sub>1</sub>/<i>W</i> for a heat pump',
    why: 'Likewise <i>η</i> = 1 − <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub>, not <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub>.',
    say: null,
  },
  // p. 780
  {
    topic: 4,
    kind: 'shortcut',
    q: 'An ideal-limit engine, fridge or heat-pump question. The fast way?',
    a: 'Start from <i>Q</i><sub>1</sub> = <i>Q</i><sub>2</sub> + <i>W</i> and swap the heat ratio for the temperature ratio: <i>η</i><sub>max</sub> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>, COP<sub>ref,max</sub> = <i>T</i><sub>2</sub>/(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>), COP<sub>hp,max</sub> = <i>T</i><sub>1</sub>/(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)',
    why: 'A small temperature gap <i>T</i><sub>1</sub> − <i>T</i><sub>2</sub> means a great fridge but a feeble engine.',
    say: null,
  },

  // ── Topic 06 · The Second Law of Thermodynamics & Reversibility ──
  // pp. 782, 787
  {
    topic: 5,
    kind: 'remember',
    q: 'The Kelvin–Planck and Clausius statements of the second law?',
    a: 'Kelvin–Planck: no process is possible whose sole result is the complete conversion of heat from a single reservoir into work. Clausius: no process is possible whose sole result is the transfer of heat from a colder body to a hotter one',
    why: 'The two are equivalent: a violation of either can be used to construct a violation of the other.',
    say: 'Kelvin = engine (no <i>η</i> = 1); Clausius = fridge (no free cold→hot).',
  },
  // pp. 782, 786–787
  {
    topic: 5,
    kind: 'remember',
    q: 'What makes a process reversible?',
    a: 'It is quasi-static and free of all dissipation, so reversing it restores both system and surroundings with no net change anywhere. Every real process is irreversible',
    why: 'Slow alone is not enough: friction, or heat flow across a finite temperature gap, makes even a slow process irreversible.',
    say: 'Reversible needs slow and clean — slow alone isn’t enough.',
  },
  // pp. 757, 786–787
  {
    topic: 5,
    kind: 'mixup',
    q: 'The first law and the second law: what does each decide?',
    a: 'The first law demands energy conservation but is blind to direction. The second law selects which of the permitted processes actually happen',
    why: 'A Kelvin–Planck violator does not break the first law: energy is still conserved.',
    say: null,
  },
  // pp. 786–787
  {
    topic: 5,
    kind: 'mistake',
    q: 'Does the second law forbid heat flowing from cold to hot?',
    a: 'Only as a sole effect. With work input, as in a fridge, it is perfectly allowed',
    why: 'Clausius: heat does not flow spontaneously cold→hot; work is required.',
    say: null,
  },
  // p. 786
  {
    topic: 5,
    kind: 'shortcut',
    q: '“Is this device possible?” The fast way?',
    a: 'Reduce it to its sole net effect over one cycle. Heat from one reservoir → pure work: a Kelvin–Planck violation. Heat cold→hot with no work: a Clausius violation. If neither, it is allowed',
    why: 'Then, and only then, check it against the Carnot ceiling.',
    say: null,
  },

  // ── Topic 07 · The Carnot Engine & Carnot's Theorem ──
  // pp. 789, 794
  {
    topic: 6,
    kind: 'remember',
    q: 'The four steps of a Carnot cycle, and where is heat exchanged?',
    a: 'Reversible isothermal expansion (absorbs <i>Q</i><sub>1</sub> at <i>T</i><sub>1</sub>) → adiabatic expansion (<i>T</i><sub>1</sub> → <i>T</i><sub>2</sub>) → isothermal compression (rejects <i>Q</i><sub>2</sub> at <i>T</i><sub>2</sub>) → adiabatic compression (<i>T</i><sub>2</sub> → <i>T</i><sub>1</sub>). Heat only on the two isothermals',
    why: 'The adiabatics force <i>V</i><sub><i>B</i></sub>/<i>V</i><sub><i>A</i></sub> = <i>V</i><sub><i>C</i></sub>/<i>V</i><sub><i>D</i></sub>, which gives <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> (kelvin).',
    say: 'Iso–adia–iso–adia, heat only on the isos.',
  },
  // pp. 789, 793–794
  {
    topic: 6,
    kind: 'remember',
    q: 'The Carnot efficiency, and the COPs of the reversed cycle?',
    a: '<i>η</i><sub>Carnot</sub> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> = (<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/<i>T</i><sub>1</sub>; COP<sub>ref</sub> = <i>T</i><sub>2</sub>/(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>), COP<sub>hp</sub> = <i>T</i><sub>1</sub>/(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)',
    why: 'Valid only in kelvin: Celsius gives nonsense, sometimes even <i>η</i> > 1.',
    say: '<i>η</i> = 1 − <i>T</i><sub>cold</sub>/<i>T</i><sub>hot</sub>, always in kelvin.',
  },
  // pp. 793–794
  {
    topic: 6,
    kind: 'mixup',
    q: 'Raise the source <i>T</i><sub>1</sub> or lower the sink <i>T</i><sub>2</sub> by the same amount: which gains more efficiency?',
    a: 'Lowering the sink <i>T</i><sub>2</sub>',
    why: 'With <i>T</i><sub>1</sub> = 400 K, <i>T</i><sub>2</sub> = 300 K: lowering <i>T</i><sub>2</sub> by 50 K gives 37.5%; raising <i>T</i><sub>1</sub> by 50 K gives only 33.3%.',
    say: null,
  },
  // pp. 789, 794
  {
    topic: 6,
    kind: 'mistake',
    q: 'Can a real engine reach the Carnot efficiency?',
    a: 'No: Carnot is the reversible ceiling. Every real (irreversible) engine falls strictly below it',
    why: 'Carnot’s theorem: no engine beats a reversible one between the same two reservoirs, and all reversible engines tie, whatever the working substance.',
    say: null,
  },
  // p. 794
  {
    topic: 6,
    kind: 'shortcut',
    q: 'A Carnot engine numerical. In what order do you work?',
    a: 'Get <i>η</i> from the temperatures first, then <i>W</i> = <i>ηQ</i><sub>1</sub> and <i>Q</i><sub>2</sub> = <i>Q</i><sub>1</sub> − <i>W</i>',
    why: 'If an inventor’s claimed <i>η</i> exceeds 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>, declare it impossible on the spot: no calculation needed.',
    say: null,
  },

  // ── Topic 08 · Entropy and the Quantified Second Law (JEE Advanced Extension) ──
  // pp. 797, 800
  {
    topic: 7,
    kind: 'remember',
    q: 'The definition of entropy, and why can Δ<i>S</i> for an irreversible process be found along a reversible path?',
    a: 'd<i>S</i> = d<i>Q</i><sub>rev</sub>/<i>T</i>, Δ<i>S</i> = ∫d<i>Q</i><sub>rev</sub>/<i>T</i>, in J K<sup>−1</sup>. <i>S</i> is a state function (∮d<i>S</i> = 0), so Δ<i>S</i> depends only on the endpoints',
    why: 'Never use the actual (irreversible) heat for Δ<i>S</i><sub>sys</sub>: route it along a reversible path with the same endpoints.',
    say: 'State function ⇒ compute Δ<i>S</i> along any reversible path you like.',
  },
  // pp. 797, 800
  {
    topic: 7,
    kind: 'remember',
    q: 'The standard entropy changes: isothermal ideal gas, phase change, heating, reversible adiabatic?',
    a: 'Isothermal: <i>nR</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>). Phase change: <i>mL</i>/<i>T</i>. Heating: <i>nC</i><sub><i>P</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub>) at constant pressure, <i>nC</i><sub><i>V</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub>) at constant volume. Reversible adiabatic: 0',
    why: 'The general ideal-gas form: Δ<i>S</i> = <i>nC</i><sub><i>V</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub>) + <i>nR</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>).',
    say: null,
  },
  // pp. 797, 800
  {
    topic: 7,
    kind: 'mixup',
    q: 'Δ<i>S</i><sub>universe</sub> and the Clausius integral ∮d<i>Q</i>/<i>T</i>: their signs for reversible and irreversible processes?',
    a: 'Δ<i>S</i><sub>universe</sub> ≥ 0: = 0 if reversible, > 0 if irreversible. ∮d<i>Q</i>/<i>T</i> ≤ 0 over a cycle: = 0 if reversible, < 0 if irreversible',
    why: 'The Clausius integral uses the actual heat, not d<i>Q</i><sub>rev</sub>.',
    say: null,
  },
  // pp. 795–796, 800
  {
    topic: 7,
    kind: 'mistake',
    q: 'A system’s entropy falls, as in freezing or compression. Does that break the second law?',
    a: 'No: the second law constrains Δ<i>S</i><sub>universe</sub>, not Δ<i>S</i><sub>system</sub> alone',
    why: 'In a real process the entropy of the surroundings rises by more.',
    say: 'System can tidy up; the universe always gets messier.',
  },
  // p. 800
  {
    topic: 7,
    kind: 'shortcut',
    q: 'An irreversible entropy problem. The fast way?',
    a: 'Split it into system and surroundings, find each Δ<i>S</i>, and add. System: a convenient reversible path. Reservoir: Δ<i>S</i> = ±<i>Q</i><sub>actual</sub>/<i>T</i><sub>res</sub>. The total must come out ≥ 0',
    why: 'A negative total is a guaranteed sign error. Check: a reversible Carnot cycle gives ∮d<i>Q</i>/<i>T</i> = 0, which is the relation <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>.',
    say: null,
  },

  // ── Additional A · General Polytropic Processes: The Master Exponent x ──
  // pp. 801–802
  {
    topic: 8,
    kind: 'remember',
    q: 'A polytropic process <i>PV</i><sup><i>x</i></sup> = const: its molar heat capacity, and how do you find <i>x</i> from a given <i>C</i>?',
    a: '<i>C</i> = <i>C</i><sub><i>V</i></sub> + <i>R</i>/(1 − <i>x</i>), so <i>x</i> = 1 − <i>R</i>/(<i>C</i> − <i>C</i><sub><i>V</i></sub>). Then <i>Q</i> = <i>nC</i>Δ<i>T</i> and <i>TV</i><sup><i>x</i>−1</sup> = const',
    why: 'For a quasi-static process of an ideal gas. Special cases: <i>x</i> = 0 isobaric (<i>C</i><sub><i>P</i></sub>), 1 isothermal (∞), <i>γ</i> adiabatic (0), ∞ isochoric (<i>C</i><sub><i>V</i></sub>).',
    say: null,
  },
  // pp. 802–803
  {
    topic: 8,
    kind: 'remember',
    q: 'A polytropic expansion with 1 < <i>x</i> < <i>γ</i>: does the gas warm or cool, and does it absorb or release heat?',
    a: 'It cools (<i>TV</i><sup><i>x</i>−1</sup> = const with <i>x</i> − 1 > 0), yet it absorbs heat: here <i>C</i> < 0, so <i>Q</i> = <i>nC</i>Δ<i>T</i> > 0',
    why: 'The gas does more work than its drop in internal energy accounts for, so it draws the shortfall in as heat. “Cooling ⇒ heat released” is wrong.',
    say: null,
  },

  // ── Additional B · Composite Cycles: Leg-by-Leg Heat Accounting ──
  // pp. 805–806
  {
    topic: 9,
    kind: 'remember',
    q: 'The efficiency of a composite cycle: what goes in the denominator?',
    a: '<i>η</i> = <i>W</i><sub>net</sub>/<i>Q</i><sub>in</sub>, where <i>Q</i><sub>in</sub> is the sum of the heat on only those legs where <i>Q</i> > 0, not the net heat',
    why: 'Find each leg’s <i>Q</i> = Δ<i>U</i> + <i>W</i>, then check <i>η</i> < <i>η</i><sub>Carnot</sub> = 1 − <i>T</i><sub>min</sub>/<i>T</i><sub>max</sub>, using the cycle’s extreme temperatures.',
    say: null,
  },
  // pp. 806, 808
  {
    topic: 9,
    kind: 'remember',
    q: 'A straight-line leg <i>P</i> = <i>aV</i> + <i>b</i> for an ideal gas: its work and its Δ<i>U</i>?',
    a: '<i>W</i> = ½(<i>P</i><sub><i>f</i></sub> + <i>P</i><sub><i>i</i></sub>)(<i>V</i><sub><i>f</i></sub> − <i>V</i><sub><i>i</i></sub>), the trapezoid area; Δ<i>U</i> = (<i>C</i><sub><i>V</i></sub>/<i>R</i>)(<i>P</i><sub><i>f</i></sub><i>V</i><sub><i>f</i></sub> − <i>P</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub>)',
    why: 'Along such a line <i>T</i> can rise and then fall, so the leg may absorb heat on one part and reject it on the rest: its net <i>Q</i> is not all heat input.',
    say: null,
  },

  // ── Additional C · Irreversible Adiabatics: Free Expansion & Expansion Against Constant P(ext) ──
  // p. 809
  {
    topic: 10,
    kind: 'remember',
    q: 'An ideal gas expands freely into vacuum inside insulated walls. Its <i>W</i>, <i>Q</i>, Δ<i>U</i>, Δ<i>T</i> and Δ<i>S</i>?',
    a: '<i>W</i> = 0, <i>Q</i> = 0, Δ<i>U</i> = 0, Δ<i>T</i> = 0, but Δ<i>S</i><sub>gas</sub> = <i>nR</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>) > 0',
    why: 'An isothermal result, but not an isothermal process: no reservoir, not quasi-static. Δ<i>S</i> comes from a reversible isotherm with the same endpoints.',
    say: null,
  },
  // pp. 809–810
  {
    topic: 10,
    kind: 'remember',
    q: 'An ideal gas expands adiabatically against a constant <i>P</i><sub>ext</sub> until <i>P</i><sub><i>f</i></sub> = <i>P</i><sub>ext</sub>. Its final temperature?',
    a: '<i>T</i><sub><i>f</i></sub> = <i>T</i><sub><i>i</i></sub>[1/<i>γ</i> + ((<i>γ</i> − 1)/<i>γ</i>)(<i>P</i><sub><i>f</i></sub>/<i>P</i><sub><i>i</i></sub>)], from <i>nC</i><sub><i>V</i></sub>(<i>T</i><sub><i>f</i></sub> − <i>T</i><sub><i>i</i></sub>) = −<i>P</i><sub><i>f</i></sub>(<i>V</i><sub><i>f</i></sub> − <i>V</i><sub><i>i</i></sub>), never from <i>PV</i><sup><i>γ</i></sup> = const',
    why: 'From the same initial state to the same final pressure it does less work than the reversible adiabat, so it ends warmer: <i>T</i><sub><i>f</i></sub><sup>irr</sup> > <i>T</i><sub><i>f</i></sub><sup>rev</sup>.',
    say: null,
  },

  // ── Additional D · Entropy Accounting for Irreversible Processes: The Universe Ledger ──
  // pp. 813–815
  {
    topic: 11,
    kind: 'remember',
    q: 'Two bodies of heat capacities <i>C</i><sub><i>H</i></sub> and <i>C</i><sub><i>C</i></sub>, at <i>T</i><sub><i>H</i></sub> and <i>T</i><sub><i>C</i></sub>, are brought into thermal contact in an isolated system. The final temperature and Δ<i>S</i><sub>univ</sub>?',
    a: '<i>T</i><sub><i>f</i></sub> = (<i>C</i><sub><i>H</i></sub><i>T</i><sub><i>H</i></sub> + <i>C</i><sub><i>C</i></sub><i>T</i><sub><i>C</i></sub>)/(<i>C</i><sub><i>H</i></sub> + <i>C</i><sub><i>C</i></sub>); Δ<i>S</i><sub>univ</sub> = <i>C</i><sub><i>H</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>H</i></sub>) + <i>C</i><sub><i>C</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>C</i></sub>) > 0',
    why: 'For equal constant heat capacities <i>C</i>: Δ<i>S</i><sub>univ</sub> = <i>C</i> ln[(<i>T</i><sub>1</sub> + <i>T</i><sub>2</sub>)<sup>2</sup>/(4<i>T</i><sub>1</sub><i>T</i><sub>2</sub>)] ≥ 0, zero only if <i>T</i><sub>1</sub> = <i>T</i><sub>2</sub>.',
    say: null,
  },
  // pp. 813–814
  {
    topic: 11,
    kind: 'remember',
    q: '1 mol of ideal gas expands freely to twice its volume, then is compressed reversibly and isothermally back, in contact with a reservoir at <i>T</i>. Where has the entropy gone?',
    a: 'The gas is back where it began, so Δ<i>S</i><sub>gas</sub> = 0. The reservoir receives <i>RT</i> ln 2 of heat, so Δ<i>S</i><sub>univ</sub> = Δ<i>S</i><sub>res</sub> = <i>R</i> ln 2 > 0',
    why: 'The irreversibility of the free expansion is “paid for” by the reservoir’s entropy increase during the restoration step.',
    say: null,
  },

  // ── Additional E · Compound Carnot Systems: Engines Driving Refrigerators & Cascades ──
  // pp. 816–817
  {
    topic: 12,
    kind: 'remember',
    q: 'Two Carnot engines in series: the first works between <i>T</i><sub>1</sub> and <i>T</i><sub>2</sub>, the second takes all the heat it rejects and works down to <i>T</i><sub>3</sub>. With equal work outputs, what is <i>T</i><sub>2</sub>, and the overall efficiency?',
    a: '<i>T</i><sub>2</sub> = (<i>T</i><sub>1</sub> + <i>T</i><sub>3</sub>)/2; the overall efficiency is 1 − <i>T</i><sub>3</sub>/<i>T</i><sub>1</sub>, the same as one Carnot engine between <i>T</i><sub>1</sub> and <i>T</i><sub>3</sub>',
    why: 'A reversible composite equals a single reversible engine (Carnot’s theorem). For 900 K and 300 K: <i>T</i><sub>2</sub> = 600 K, efficiency 66.7%.',
    say: null,
  },
  // pp. 815–816
  {
    topic: 12,
    kind: 'remember',
    q: 'A Carnot engine drives a Carnot refrigerator. The coupling condition, and the heat the fridge extracts?',
    a: 'They share one shaft, <i>W</i><sub>engine</sub> = <i>W</i><sub>fridge</sub>, so <i>Q</i><sub><i>C</i>,<i>R</i></sub> = COP<sub><i>R</i></sub> · <i>W</i> = COP<sub><i>R</i></sub> · <i>η</i><sub><i>E</i></sub><i>Q</i><sub><i>H</i>,<i>E</i></sub>',
    why: 'An engine from 600 K to 300 K (<i>η</i><sub><i>E</i></sub> = 1/2) driving a fridge between 300 K and 400 K (COP<sub><i>R</i></sub> = 3) extracts 1.5 J from 300 K for every 1 J taken from 600 K.',
    say: null,
  },
];
