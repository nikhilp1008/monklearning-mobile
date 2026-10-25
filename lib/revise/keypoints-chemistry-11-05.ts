/**
 * KEY POINTS for Chemistry Class 11, Chapter 5 (Chemical Thermodynamics).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–04 are 0–3; Additional topics A–E are 4–8; Additional
 * topic F, What JEE and NEET Actually Ask (the book's Addendum P), is 9.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key Definitions and Cheat Sheet Box. Common mistakes:
 * its Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's first two memory aids, word for word, with the book's quotation
 * marks and its label after them. Additional topics: the addenda's methods,
 * worked examples and the "Answers to Practice (Addenda A–E)" (p. 247), each
 * answer with its own addendum (1–3 A, 4–6 B, 7–9 C, 10–12 D, 13–14 E).
 * Additional topic F: its themes, archetypes and traps. Topic 02's Practice 5
 * (p. 224), which prints the NaCl lattice enthalpy as −788 kJ mol⁻¹ against
 * the chapter's own positive (separation) convention, is not used.
 *
 * Signs are IUPAC/NCERT throughout, as the book prints them: ΔU = q + w, with
 * w the work done ON the system (w = −p_ext ΔV). Lattice enthalpy is the
 * separation enthalpy (positive); the Born–Haber cycle carries −Δ_lattice H.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Formulas are
 * upright (CO<sub>2</sub>, H<sub>2</sub>O(l)). Δ upright; U, H, S, G, q, w, p,
 * P, V, T, n, R, C, c, m, K, Q, γ italic; label subscripts upright
 * (Δ<sub>r</sub><i>H</i>°, <i>p</i><sub>ext</sub>, <i>w</i><sub>rev</sub>,
 * Δ<i>S</i><sub>surr</sub>, Δ<i>n</i><sub>g</sub>, <i>C</i><sub>cal</sub>); a
 * subscript that is itself a quantity symbol italic, in the case each topic
 * prints it (Topic 01 <i>q</i><sub><i>V</i></sub>, <i>C</i><sub><i>P</i></sub>;
 * Topic 04 <i>C</i><sub><i>v</i></sub>, <i>C</i><sub><i>p</i></sub>). The
 * standard-state ° follows the symbol (Δ<sub>f</sub><i>H</i>°, Δ<i>G</i>°).
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Thermodynamic Terms, the First Law, Internal Energy & Enthalpy ──
  // pp. 215–217, 220
  {
    topic: 0,
    kind: 'remember',
    q: 'The first law in the IUPAC/NCERT convention, and the signs of <i>q</i> and <i>w</i>?',
    a: 'Δ<i>U</i> = <i>q</i> + <i>w</i>, with <i>q</i> the heat supplied to the system and <i>w</i> the work done on it. <i>q</i> > 0: heat absorbed; <i>w</i> > 0: work done on the system (compression); <i>w</i> < 0: work done by it (expansion). Work: <i>w</i> = −<i>p</i><sub>ext</sub>Δ<i>V</i> (irreversible), <i>w</i><sub>rev</sub> = −<i>nRT</i> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>) (isothermal reversible), <i>w</i> = 0 for a free expansion',
    why: 'A gas absorbs 250 J and does 80 J of work on its surroundings: <i>q</i> = +250 J, <i>w</i> = −80 J, so Δ<i>U</i> = +170 J.',
    say: '“On is plus, by is minus” (sign of <i>w</i>).',
  },
  // pp. 216–217, 220
  {
    topic: 0,
    kind: 'remember',
    q: 'How are Δ<i>H</i> and Δ<i>U</i> related, and which one does each constraint measure?',
    a: '<i>H</i> = <i>U</i> + <i>PV</i>, so Δ<i>H</i> = Δ<i>U</i> + Δ<i>n</i><sub>g</sub><i>RT</i> (constant <i>T</i>, ideal gases), Δ<i>n</i><sub>g</sub> = gaseous products − gaseous reactants (solids and liquids not counted). <i>q</i><sub><i>V</i></sub> = Δ<i>U</i> (constant volume, <i>w</i> = 0); <i>q</i><sub><i>P</i></sub> = Δ<i>H</i> (constant pressure). Ideal gas, per mole: <i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>R</i>',
    why: '1 mol of gas → 2 mol at 300 K with Δ<i>U</i> = +12.0 kJ: Δ<i>H</i> = 12000 + (1)(8.314)(300) = 12000 + 2494 ≈ 14.5 kJ. Dropping the term gives 12.0; flipping its sign, 9.5.',
    say: '“Joules want 8.314, litre-atm wants 0.0821.”',
  },
  // pp. 215–218, 220
  {
    topic: 0,
    kind: 'mixup',
    q: 'Which of <i>U</i>, <i>H</i>, <i>q</i>, <i>w</i>, <i>T</i> are state functions, and what does that mean over a cycle?',
    a: '<i>U</i>, <i>H</i>, <i>T</i>, <i>P</i>, <i>V</i> are state functions: they depend only on the end-points, so Δ<i>U</i><sub>cycle</sub> = 0. Heat and work are path functions, defined only for a process: over a cycle <i>q</i><sub>cycle</sub> = −<i>w</i><sub>cycle</sub>, not zero. “This gas contains 200 J of heat” is meaningless',
    why: '1 mol, 300 K, 2.0 → 8.0 L isothermally: reversibly <i>w</i> = −3458 J, in one step against <i>p</i><sub>2</sub> = 3.12 × 10<sup>5</sup> Pa only −1871 J; Δ<i>U</i> = 0 by both routes.',
    say: null,
  },
  // pp. 219–220
  {
    topic: 0,
    kind: 'mistake',
    q: 'A gas does 50 J of work on its surroundings while absorbing 30 J of heat. Is Δ<i>U</i> = +80 J?',
    a: 'No: work done by the system is negative. <i>q</i> = +30 J, <i>w</i> = −50 J, so Δ<i>U</i> = 30 − 50 = −20 J. If the gas expands, <i>w</i> is negative, full stop',
    why: 'Likewise only gaseous moles enter Δ<i>n</i><sub>g</sub>: for C(s) + O<sub>2</sub>(g) → CO<sub>2</sub>(g), Δ<i>n</i><sub>g</sub> = 1 − 1 = 0, so Δ<i>H</i> − Δ<i>U</i> = 0, not −<i>RT</i>.',
    say: null,
  },
  // pp. 218, 220
  {
    topic: 0,
    kind: 'shortcut',
    q: '2 mol of an ideal gas expand isothermally and reversibly at 300 K from 5.0 L to 20.0 L. Δ<i>U</i>, Δ<i>H</i>, <i>q</i>, <i>w</i>? The fast way?',
    a: 'Isothermal ideal gas: write Δ<i>U</i> = 0 and Δ<i>H</i> = 0 on sight, so <i>q</i> = −<i>w</i>. Then <i>w</i> = −(2)(8.314)(300) ln 4 = −(4988.4)(1.3863) = −6915 J ≈ −6.92 kJ and <i>q</i> = +6.92 kJ',
    why: 'And before reporting Δ<i>H</i> against Δ<i>U</i>, glance at Δ<i>n</i><sub>g</sub>: if no gas moles change, they are equal.',
    say: null,
  },

  // ── Topic 02 · Thermochemistry, Enthalpy of Reactions & Hess’s Law ──
  // pp. 222–223, 226
  {
    topic: 1,
    kind: 'remember',
    q: 'The reaction enthalpy from standard enthalpies of formation?',
    a: 'Δ<sub>r</sub><i>H</i>° = Σ<i>ν</i> Δ<sub>f</sub><i>H</i>°(products) − Σ<i>ν</i> Δ<sub>f</sub><i>H</i>°(reactants), <i>ν</i> the stoichiometric coefficients. By convention Δ<sub>f</sub><i>H</i>° of an element in its reference (most stable) state is 0',
    why: 'C<sub>2</sub>H<sub>4</sub>(g) + H<sub>2</sub>(g) → C<sub>2</sub>H<sub>6</sub>(g): (−84.7) − [(+52.3) + 0] = −137.0 kJ mol<sup>−1</sup>, exothermic.',
    say: '“Formation: products − reactants. Bonds: reactants − products.”',
  },
  // pp. 221–223, 226
  {
    topic: 1,
    kind: 'remember',
    q: 'Hess’s law, and the three moves for combining equations?',
    a: 'Δ<i>H</i> is path-independent (<i>H</i> is a state function), so a reaction’s Δ<i>H</i> is the same in one step or several. Reverse an equation → reverse the sign of its Δ<i>H</i>; multiply by a factor → multiply Δ<i>H</i> by it; add equations → add their Δ<i>H</i> values',
    why: 'C(s) + O<sub>2</sub>(g) → CO<sub>2</sub>(g), −393.5 kJ, minus CO(g) + ½O<sub>2</sub>(g) → CO<sub>2</sub>(g), −283.0 kJ: C(s) + ½O<sub>2</sub>(g) → CO(g), Δ<i>H</i> = −393.5 − (−283.0) = −110.5 kJ.',
    say: '“Reverse the reaction, reverse the sign.”',
  },
  // pp. 222–224, 226
  {
    topic: 1,
    kind: 'mixup',
    q: 'Reaction enthalpy from bond enthalpies: which way round, and for which states?',
    a: 'Δ<sub>r</sub><i>H</i> = ΣBE(bonds broken in reactants) − ΣBE(bonds formed in products): reactants minus products, the opposite of the formation formula, because energy goes in to break bonds and comes out when bonds form. Bond enthalpies apply to gaseous species: add Δ<sub>vap</sub><i>H</i> or Δ<sub>sub</sub><i>H</i> first if they are not',
    why: 'CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(g): broken 4(414) + 2(498) = 2652, formed 2(799) + 4(463) = 3450, so −798 kJ mol<sup>−1</sup>.',
    say: null,
  },
  // pp. 222–224, 226
  {
    topic: 1,
    kind: 'mistake',
    q: 'In a Born–Haber cycle, is the lattice enthalpy written as a negative term?',
    a: 'No: lattice enthalpy is the enthalpy to separate one mole of the ionic solid into gaseous ions, positive. The cycle carries it with a minus: Δ<sub>f</sub><i>H</i>° = Δ<sub>sub</sub><i>H</i> + Δ<sub>i</sub><i>H</i> + ½Δ<sub>diss</sub><i>H</i> + Δ<sub>eg</sub><i>H</i> − Δ<sub>lattice</sub><i>H</i>. KCl: −437 = 89 + 419 + 122 + (−349) − Δ<sub>lattice</sub><i>H</i>, so Δ<sub>lattice</sub><i>H</i> = +718 kJ mol<sup>−1</sup>',
    why: 'Write each step with its sign before summing: sublimation, ionisation, dissociation +; electron gain (usually) and lattice formation −. And Δ<sub>f</sub><i>H</i>°(O<sub>2</sub>) = 0 is not the O=O bond enthalpy (498 kJ mol<sup>−1</sup>).',
    say: null,
  },
  // pp. 225–226
  {
    topic: 1,
    kind: 'shortcut',
    q: 'H<sub>2</sub>(g) + Br<sub>2</sub>(g) → 2HBr(g), with H–H 435, Br–Br 192, H–Br 364 kJ mol<sup>−1</sup>. Δ<sub>r</sub><i>H</i>? The fast way?',
    a: 'Two formulas, two directions: formation enthalpies, products minus reactants; bond enthalpies, reactants minus products (you pay to break what you start with). So (435 + 192) − 2(364) = 627 − 728 = −101 kJ',
    why: 'Products-minus-reactants with bond enthalpies gives +101 kJ, the sign-flipped distractor. Mixing the two directions is the commonest sign error in this topic.',
    say: null,
  },

  // ── Topic 03 · Entropy, Gibbs Free Energy, Spontaneity & the Second/Third Laws ──
  // pp. 227–230, 232
  {
    topic: 2,
    kind: 'remember',
    q: 'The second law, and how Gibbs energy turns it into a test on the system alone?',
    a: 'Δ<i>S</i><sub>total</sub> = Δ<i>S</i><sub>system</sub> + Δ<i>S</i><sub>surroundings</sub> > 0 spontaneous, = 0 equilibrium, < 0 non-spontaneous, with Δ<i>S</i><sub>surr</sub> = −Δ<i>H</i><sub>sys</sub>/<i>T</i> at constant pressure. At constant <i>T</i> and <i>P</i>: Δ<i>G</i> = Δ<i>H</i> − <i>T</i>Δ<i>S</i> < 0 spontaneous, = 0 equilibrium, > 0 non-spontaneous; −Δ<i>G</i> is the maximum non-expansion work',
    why: '350 K, Δ<i>H</i> = −150 kJ mol<sup>−1</sup>, Δ<i>S</i><sub>sys</sub> = −90 J K<sup>−1</sup> mol<sup>−1</sup>: Δ<i>S</i><sub>surr</sub> = +428.6, total +338.6 J K<sup>−1</sup> mol<sup>−1</sup> > 0; Δ<i>G</i> = −150 + 31.5 = −118.5 kJ mol<sup>−1</sup> < 0. One verdict.',
    say: '“Δ<i>G</i> = enthalpy pulls down, entropy pulls up, <i>T</i> is the referee.”',
  },
  // pp. 228–230, 232
  {
    topic: 2,
    kind: 'remember',
    q: 'The four sign cases of Δ<i>G</i> = Δ<i>H</i> − <i>T</i>Δ<i>S</i>, and the link to <i>K</i>?',
    a: '(−, +) spontaneous at all <i>T</i>; (−, −) only at low <i>T</i>; (+, +) only at high <i>T</i>; (+, −) never. Crossover (Δ<i>G</i> = 0): <i>T</i> = Δ<i>H</i>/Δ<i>S</i>. Δ<i>G</i>° = −<i>RT</i> ln <i>K</i> = −2.303 <i>RT</i> log <i>K</i>: negative Δ<i>G</i>° gives <i>K</i> > 1, positive gives <i>K</i> < 1',
    why: 'Δ<i>H</i>° = +55.0 kJ mol<sup>−1</sup>, Δ<i>S</i>° = +175 J K<sup>−1</sup> mol<sup>−1</sup>: at 298 K Δ<i>G</i>° = 55000 − 52150 = +2850 J mol<sup>−1</sup>, ln <i>K</i> = −1.150, <i>K</i> ≈ 0.32; <i>K</i> = 1 at 55000/175 = 314 K.',
    say: '“Exothermic warms the surroundings → +Δ<i>S</i><sub>surr</sub>.”',
  },
  // pp. 227–228, 232
  {
    topic: 2,
    kind: 'mixup',
    q: 'Diamond → graphite has Δ<i>G</i> < 0. Why is it never seen to happen?',
    a: 'Δ<i>G</i> predicts thermodynamic feasibility, not speed: the change is spontaneous yet takes geological ages. Spontaneity is a question for thermodynamics, how fast a question for kinetics',
    why: 'Nor is spontaneous the same as exothermic: ice melting above 0 °C and NH<sub>4</sub>Cl dissolving absorb heat yet happen on their own, driven by entropy.',
    say: null,
  },
  // pp. 229, 232
  {
    topic: 2,
    kind: 'mistake',
    q: 'At 298 K, Δ<i>H</i> = −92.4 kJ mol<sup>−1</sup> and Δ<i>S</i> = −198.3 J K<sup>−1</sup> mol<sup>−1</sup>. Is Δ<i>G</i> = −92.4 − 298(−198.3)?',
    a: 'No: Δ<i>H</i> is in kJ and Δ<i>S</i> in J, so convert one first. Δ<i>S</i> = −0.1983 kJ K<sup>−1</sup> mol<sup>−1</sup>, Δ<i>G</i> = −92.4 + 59.1 = −33.3 kJ mol<sup>−1</sup>: spontaneous at 298 K',
    why: 'Two more slips: dropping the minus in Δ<i>S</i><sub>surr</sub> = −Δ<i>H</i><sub>sys</sub>/<i>T</i> (an exothermic reaction gives a positive Δ<i>S</i><sub>surr</sub>), and applying <i>S</i> = 0 at 0 K to anything but a perfect, pure crystal.',
    say: null,
  },
  // pp. 230, 232
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Δ<i>H</i> = +30.0 kJ mol<sup>−1</sup>, Δ<i>S</i> = +100 J K<sup>−1</sup> mol<sup>−1</sup>. Above what temperature is it spontaneous? The fast way?',
    a: 'Skip the full Δ<i>G</i>: the signs conflict, (+, +) is the high-temperature case, and the boundary is <i>T</i> = Δ<i>H</i>/Δ<i>S</i> = 30000 J/100 J K<sup>−1</sup> = 300 K (same units!). Spontaneous above 300 K',
    why: 'Sanity-check any <i>K</i> the same way: a negative Δ<i>G</i>° must give <i>K</i> > 1; if the arithmetic says otherwise, there is a sign error.',
    say: null,
  },

  // ── Topic 04 · Calorimetry, Thermodynamic Processes & Additional Enthalpy Changes ──
  // pp. 233–235, 238
  {
    topic: 3,
    kind: 'remember',
    q: 'Bomb calorimeter or coffee-cup calorimeter: which quantity does each measure?',
    a: '<i>q</i> = <i>C</i>Δ<i>T</i> = <i>mc</i>Δ<i>T</i>. The sealed, rigid bomb (constant <i>V</i>, no expansion work) gives <i>q</i><sub><i>V</i></sub> = Δ<i>U</i> = −<i>C</i><sub>cal</sub>Δ<i>T</i><sub>cal</sub>; the open coffee-cup (constant <i>P</i>) gives <i>q</i><sub><i>P</i></sub> = Δ<i>H</i>. Convert with Δ<i>H</i> = Δ<i>U</i> + Δ<i>n</i><sub>g</sub><i>RT</i>',
    why: '0.50 g of fuel in a bomb of heat capacity 8.2 kJ K<sup>−1</sup> raises it 1.20 K: Δ<i>U</i> = −(8.2)(1.20) = −9.84 kJ, so −19.7 kJ g<sup>−1</sup>.',
    say: '“Bomb = box = Δ<i>U</i>; open cup = Δ<i>H</i>.”',
  },
  // pp. 234, 236, 238
  {
    topic: 3,
    kind: 'remember',
    q: 'The four ideal-gas processes: <i>w</i> (on the system), <i>q</i>, Δ<i>U</i>?',
    a: 'Isothermal (rev.): <i>w</i> = −<i>nRT</i> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>), <i>q</i> = −<i>w</i>, Δ<i>U</i> = Δ<i>H</i> = 0. Adiabatic: <i>q</i> = 0, <i>w</i> = Δ<i>U</i> = <i>nC</i><sub><i>v</i></sub>Δ<i>T</i>. Isobaric: <i>w</i> = −<i>p</i>Δ<i>V</i> = −<i>nR</i>Δ<i>T</i>, <i>q</i> = <i>nC</i><sub><i>p</i></sub>Δ<i>T</i>. Isochoric: <i>w</i> = 0, <i>q</i> = Δ<i>U</i> = <i>nC</i><sub><i>v</i></sub>Δ<i>T</i>. Reversible adiabatic: <i>PV</i><sup><i>γ</i></sup> = const, <i>TV</i><sup><i>γ</i>−1</sup> = const, <i>γ</i> = <i>C</i><sub><i>p</i></sub>/<i>C</i><sub><i>v</i></sub>',
    why: '2 mol of a monoatomic gas cool adiabatically from 400 to 300 K: <i>w</i> = Δ<i>U</i> = 2(12.47)(−100) = −2494 J, Δ<i>H</i> = 2(20.79)(−100) = −4157 J, <i>q</i> = 0.',
    say: '“Adiabatic kills <i>q</i>, isothermal kills Δ<i>T</i>.”',
  },
  // pp. 233, 236–237
  {
    topic: 3,
    kind: 'mixup',
    q: 'Adiabatic, isothermal, free expansion: which quantity is zero in each?',
    a: 'Adiabatic: <i>q</i> = 0, and the temperature changes. Isothermal: Δ<i>T</i> = 0, and heat flows. Free expansion into vacuum: <i>p</i><sub>ext</sub> = 0, so <i>w</i> = 0 although the volume changes; for an ideal gas Δ<i>U</i> = 0, so Δ<i>T</i> = 0 and <i>q</i> = 0 too. Swapping adiabatic and isothermal inverts every sign in a problem',
    why: '1 mol (<i>γ</i> = 5/3) at 300 K expands reversibly and adiabatically from 1.00 to 0.25 atm: <i>T</i><sub>2</sub> = 300(0.25)<sup>0.40</sup> = 172.3 K and <i>w</i> = (12.47)(−127.7) ≈ −1.59 kJ.',
    say: null,
  },
  // pp. 234–237
  {
    topic: 3,
    kind: 'mistake',
    q: 'NaCl: Δ<sub>lattice</sub><i>H</i> = +788 and Δ<sub>hyd</sub><i>H</i> = −784 kJ mol<sup>−1</sup>. Write −788 + (−784) for Δ<sub>sol</sub><i>H</i>?',
    a: 'No: use the lattice value in its dissociation (endothermic, +) sense so the cycle balances; the hydration term is the negative one. Δ<sub>sol</sub><i>H</i> = Δ<sub>lattice</sub><i>H</i> + Δ<sub>hyd</sub><i>H</i> = 788 + (−784) = +4 kJ mol<sup>−1</sup>: slightly endothermic, so dissolving NaCl very mildly cools the water',
    why: 'Lattice wins → the solution cools (NH<sub>4</sub>NO<sub>3</sub>, the instant cold pack, Δ<sub>sol</sub><i>H</i> > 0); hydration wins → it warms (CaCl<sub>2</sub>, hand warmers).',
    say: null,
  },
  // pp. 236–238
  {
    topic: 3,
    kind: 'shortcut',
    q: '2 mol of a monoatomic ideal gas go from 400 K to 300 K. Does Δ<i>U</i> depend on the path? The fast way?',
    a: 'No: for any ideal-gas path jump straight to Δ<i>U</i> = <i>nC</i><sub><i>v</i></sub>Δ<i>T</i> = −2494 J and Δ<i>H</i> = <i>nC</i><sub><i>p</i></sub>Δ<i>T</i> = −4157 J; only <i>q</i> and <i>w</i> need the path. Memorise each process by what it freezes: isothermal <i>T</i>, adiabatic heat (<i>q</i> = 0), isobaric <i>P</i>, isochoric <i>V</i>',
    why: '3 mol heated at constant pressure through 40 K: the work done on the gas is −<i>nR</i>Δ<i>T</i> = −3(8.314)(40) ≈ −998 J.',
    say: null,
  },

  // ── Additional A · Hess-Law Patterns That Were Not Worked in the Chapter ──
  // pp. 239–240, 247
  {
    topic: 4,
    kind: 'remember',
    q: 'Formation enthalpy from combustion data: the formula and the sign trap?',
    a: 'Δ<sub>f</sub><i>H</i>°(compound) = Σ<i>ν</i> Δ<sub>c</sub><i>H</i>(elements) − Δ<sub>c</sub><i>H</i>(compound): the compound’s combustion is subtracted, because it must be un-burnt on the way up. Ethane: [2(−393.5) + 3(−285.8)] − (−1560) = −787.0 − 857.4 + 1560 = −84.4 kJ mol<sup>−1</sup>',
    why: 'Methane: [(−393.5) + 2(−285.8)] − (−890.3) = −74.8 kJ mol<sup>−1</sup>. Students who add the compound’s combustion land on the distractor.',
    say: null,
  },
  // pp. 240, 247
  {
    topic: 4,
    kind: 'remember',
    q: 'Acetic acid neutralised by NaOH releases 55.8 kJ mol<sup>−1</sup>, HCN only 12.1. What do the gaps measure?',
    a: 'The ionisation enthalpy of the weak acid: Δ<sub>ion</sub><i>H</i> = Δ<sub>neut</sub><i>H</i>(weak) − Δ<sub>neut</sub><i>H</i>(strong), against −57.1 kJ mol<sup>−1</sup> for H<sup>+</sup> + OH<sup>−</sup> → H<sub>2</sub>O. Acetic acid −55.8 − (−57.1) = +1.3; HCN −12.1 − (−57.1) = +45.0 kJ mol<sup>−1</sup>. Positive, as ionisation must be',
    why: 'Two more patterns: atomisation of CH<sub>4</sub>, 1665 kJ mol<sup>−1</sup>, over four C–H bonds gives 1665/4 ≈ 416; liquid → gaseous water costs Δ<sub>vap</sub><i>H</i> = +44.0 kJ mol<sup>−1</sup>, so an answer off by a multiple of 44 is missing that correction.',
    say: null,
  },

  // ── Additional B · Computing Entropy Changes ──
  // pp. 241–242, 247
  {
    topic: 5,
    kind: 'remember',
    q: 'Entropy of a phase transition, and of an ideal gas expanding isothermally?',
    a: 'Δ<i>S</i><sub>trans</sub> = Δ<i>H</i><sub>trans</sub>/<i>T</i><sub>trans</sub>: ice at 273 K 6000/273 = 22.0, water at 373 K 40660/373 ≈ 109 J K<sup>−1</sup> mol<sup>−1</sup>, about five times larger. Isothermal ideal gas: Δ<i>S</i><sub>sys</sub> = <i>nR</i> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>) = <i>nR</i> ln(<i>p</i><sub>1</sub>/<i>p</i><sub>2</sub>), for every path between the same two states',
    why: '1 mol, 300 K, 2 L → 20 L: Δ<i>S</i><sub>sys</sub> = 8.314 ln 10 = 19.1 J K<sup>−1</sup> whether the expansion is reversible or free. The system always uses <i>q</i><sub>rev</sub>.',
    say: null,
  },
  // pp. 241–242, 247
  {
    topic: 5,
    kind: 'remember',
    q: 'How do the surroundings’ and total entropy changes depend on the path?',
    a: 'The surroundings use the heat they actually receive: Δ<i>S</i><sub>surr</sub> = −<i>q</i><sub>actual</sub>/<i>T</i>. Reversible: total 0. Free expansion: <i>q</i><sub>actual</sub> = 0, Δ<i>S</i><sub>surr</sub> = 0, total = <i>nR</i> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>) > 0. Single step against constant <i>p</i><sub>ext</sub>: <i>q</i><sub>actual</sub> = <i>p</i><sub>ext</sub>Δ<i>V</i>, intermediate',
    why: '10 mol at 300 K, 2 atm → 1 atm against 1 atm: Δ<i>S</i><sub>sys</sub> = 10(8.314)(0.693) = 57.6; <i>q</i> = 123.2 L atm = 1.248 × 10<sup>4</sup> J, Δ<i>S</i><sub>surr</sub> = −41.6; total +16.0 J K<sup>−1</sup> > 0.',
    say: null,
  },

  // ── Additional C · The Gibbs-Energy Playbook: Signs, Temperatures, and K ──
  // pp. 242–243, 247
  {
    topic: 6,
    kind: 'remember',
    q: '<i>Q</i> = 50 while <i>K</i> = 10. Which way does the reaction run, and what does a very large positive Δ<i>G</i>° mean?',
    a: 'Chaining Δ<i>G</i> = Δ<i>G</i>° + <i>RT</i> ln <i>Q</i> and Δ<i>G</i>° = −<i>RT</i> ln <i>K</i> gives Δ<i>G</i> = <i>RT</i> ln(<i>Q</i>/<i>K</i>). <i>Q</i> > <i>K</i>: Δ<i>G</i> > 0 for the forward direction, so the reverse runs. A very large positive Δ<i>G</i>° means a very small <i>K</i>: reactants dominate at equilibrium, never “no reaction ever”',
    why: '<i>K</i> = 10<sup>−4</sup> at 298 K: Δ<i>G</i>° = −8.314 × 298 × (−9.21) = +22.8 kJ mol<sup>−1</sup>. Δ<i>G</i>° = −11.4 kJ mol<sup>−1</sup>: ln <i>K</i> = 4.60, <i>K</i> ≈ 10<sup>2</sup>.',
    say: null,
  },
  // pp. 243, 247
  {
    topic: 6,
    kind: 'remember',
    q: 'CaCO<sub>3</sub>(s) → CaO(s) + CO<sub>2</sub>(g): Δ<i>H</i>° = +178.3 kJ mol<sup>−1</sup>, Δ<i>S</i>° = +160 J K<sup>−1</sup> mol<sup>−1</sup>. Spontaneous at 298 K? Above what temperature?',
    a: 'Δ<i>G</i>°(298) = 178.3 − 298(0.160) = +130.6 kJ mol<sup>−1</sup> > 0: not at 298 K. Both signs positive, so it turns spontaneous above the crossover 178300/160 = 1114 K: why limestone kilns need heat',
    why: 'Read Δ<i>S</i> from the equation first: gas moles created, Δ<i>S</i> > 0 (here 0 → 1). For (−, −), Δ<i>H</i> = −40 kJ mol<sup>−1</sup> and Δ<i>S</i> = −100 J K<sup>−1</sup> mol<sup>−1</sup>, spontaneity lies below 40000/100 = 400 K.',
    say: null,
  },

  // ── Additional D · Calorimetry Mastery ──
  // pp. 244, 247
  {
    topic: 7,
    kind: 'remember',
    q: '100 mL of 0.50 M HCl and 100 mL of 0.50 M NaOH warm a coffee-cup by 3.41 K. Δ<sub>neut</sub><i>H</i>?',
    a: 'The heat warms the combined solution: <i>q</i> = 200 × 4.18 × 3.41 = 2851 J for 0.100 × 0.50 = 0.050 mol of water, so Δ<sub>neut</sub><i>H</i> = −2851/0.050 = −57.0 kJ mol<sup>−1</sup>. The reaction releases what the solution absorbs',
    why: 'The two punished slips: the mass of one solution only (100 g), and the missing minus sign. 50 mL + 50 mL of 1.0 M warming 6.8 K: 2842 J for 0.050 mol, ≈ −56.8 kJ mol<sup>−1</sup>.',
    say: null,
  },
  // pp. 244–245, 247
  {
    topic: 7,
    kind: 'remember',
    q: 'A bomb gives Δ<i>U</i> for C<sub>2</sub>H<sub>6</sub>(g) + 7/2 O<sub>2</sub>(g) → 2CO<sub>2</sub>(g) + 3H<sub>2</sub>O(l) at 298 K. How does Δ<i>H</i> differ?',
    a: 'Δ<i>n</i><sub>g</sub> = 2 − 4.5 = −2.5, so Δ<i>H</i> = Δ<i>U</i> − 2.5 × 8.314 × 298 = Δ<i>U</i> − 6.2 kJ mol<sup>−1</sup>: the bomb result is 6.2 kJ mol<sup>−1</sup> less exothermic than Δ<sub>c</sub><i>H</i>. The sign of the correction follows from the gas moles lost; condensed phases never count',
    why: 'Liquid benzene: Δ<i>n</i><sub>g</sub> = 6 − 7.5 = −1.5, Δ<i>H</i> − Δ<i>U</i> = −3.7 kJ mol<sup>−1</sup>. 60.0 g of Al (24 J mol<sup>−1</sup> K<sup>−1</sup>) through 20 K: <i>n</i> = 2.22 mol, <i>q</i> = <i>nC</i><sub>m</sub>Δ<i>T</i> ≈ 1.07 kJ.',
    say: null,
  },

  // ── Additional E · Work on the P–V Diagram: The Ordering Questions ──
  // pp. 245–247
  {
    topic: 8,
    kind: 'remember',
    q: 'Order the work magnitudes for reversible and single-step expansion and compression between the same two volumes?',
    a: 'Work on the system is the negative area under the path. Single-step compression > reversible compression = reversible expansion > single-step expansion: reversible expansion pushes against the largest possible pressure, single-step compression against a large pressure the whole stroke. Free expansion: <i>w</i> = 0',
    why: '1 mol at 300 K doubling its volume: reversibly <i>w</i> = −8.314 × 300 × 0.693 = −1729 J; in one step −½<i>nRT</i> = −1247 J; freely 0. Compressing <i>V</i> → <i>V</i>/2 costs <i>nRT</i> in one step against 0.693 <i>nRT</i> reversibly, about 1.44 times more.',
    say: null,
  },
  // pp. 246–247
  {
    topic: 8,
    kind: 'remember',
    q: 'From the same initial state, does an isothermal or an adiabatic expansion to the same volume extract more work?',
    a: 'Isothermal: the adiabat <i>PV</i><sup><i>γ</i></sup> = const is steeper than the isotherm <i>PV</i> = const (<i>γ</i> > 1), so on expansion it falls below the isotherm and encloses less area. The adiabatic gas cools, because with <i>q</i> = 0 the work is paid from internal energy alone. On compression the adiabat lies above: more work, and the gas heats',
    why: 'Free expansion is the limit: <i>w</i> = 0, and for an ideal gas <i>q</i> = 0, Δ<i>U</i> = 0, Δ<i>T</i> = 0, yet Δ<i>S</i> > 0.',
    say: null,
  },

  // ── Additional F · What JEE and NEET Actually Ask ──
  // pp. 248–249
  {
    topic: 9,
    kind: 'remember',
    q: 'What do recent JEE Main and NEET questions on this chapter look like?',
    a: 'Seven recurring themes: first law and state/path functions; isothermal/adiabatic work; Hess’s law and enthalpy families; entropy and spontaneity; Gibbs energy, four cases and Δ<i>G</i>°–<i>K</i>; calorimetry; equilibrium-linked items. Numerical answers dominate JEE Main, favouring chained computations (work → heat → entropy, combustion → formation, Δ<i>G</i>° → <i>K</i>)',
    why: '3 mol expand isothermally from 30 to 45 dm<sup>3</sup> against 80 kPa: Δ<i>U</i> = 0, so <i>q</i> = <i>p</i><sub>ext</sub>Δ<i>V</i> = 80 × 10<sup>3</sup> × 0.015 = 1200 J. No logarithms: the irreversibility is a gift.',
    say: null,
  },
  // pp. 249–250
  {
    topic: 9,
    kind: 'mistake',
    q: 'Isothermal means <i>q</i> = 0, and a reversible adiabatic change with Δ<i>S</i><sub>sys</sub> = 0 has Δ<i>U</i> = 0. True?',
    a: 'Neither: isothermal kills Δ<i>T</i> (so Δ<i>U</i> = 0 for an ideal gas), adiabatic kills <i>q</i>. A reversible adiabatic change has <i>q</i><sub>rev</sub> = 0 and Δ<i>S</i><sub>sys</sub> = 0, but Δ<i>U</i> ≠ 0: the temperature still changes',
    why: 'Other traps: Δ<i>H</i> = Δ<i>U</i> only when Δ<i>n</i><sub>g</sub> = 0; a weak acid neutralises less exothermically; using <i>q</i><sub>rev</sub> for the surroundings gives a total of 0 and the answer “None”.',
    say: null,
  },
];
