/**
 * KEY POINTS for Chemistry Class 12, Chapter 1 (Solutions).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–05 are 0–4; Additional topics A–D are 5–8; Additional
 * topic E, What JEE and NEET Actually Ask (the book's Addendum P), is 9. No
 * point refers to another topic by number.
 *
 * Every fact is from the Master Reference book; the page (the bottom folio) is
 * above each point. Remember: the topic's Key Definitions / Key Formulas and
 * Cheat Sheet Box. Common mistakes: its Common Student Pitfalls. Exam
 * shortcuts: its Pro-Tip. `say`: the cheat sheet's mnemonic, word for word, in
 * the Ch 1–4 form: no quotation marks, and a label after " — " (the book prints
 * one a topic). Where the book's mnemonic has no gloss of its own, the label
 * comes from the same cheat sheet. Additional topics: the addenda's methods,
 * worked examples and practice answers. Additional topic E: its distribution
 * and traps.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Formulas and
 * ions upright; variables italic with upright label subscripts: <i>K</i><sub>H</sub>,
 * <i>K</i><sub>b</sub>, <i>K</i><sub>f</sub>, <i>p</i><sub>A</sub>, <i>p</i>°<sub>A</sub>,
 * <i>p</i><sub>s</sub>, <i>x</i><sub>solute</sub>, <i>y</i><sub>A</sub>,
 * Δ<i>T</i><sub>b</sub>, Δ<i>T</i><sub>f</sub>, Δ<sub>mix</sub><i>H</i>, <i>i</i>,
 * <i>α</i>, <i>m</i> (molality), <i>M</i> (molarity or molar mass, as the book
 * sets them), <i>w</i>, <i>C</i>, <i>R</i>, <i>T</i>. Π is upright. As units,
 * molar "0.50 M" and molal "0.1 m" are upright, as printed. mmHg, bar, kbar,
 * atm, ppm and mol kg<sup>−1</sup> upright. Generic stand-in letters (MX<sub>3</sub>)
 * upright.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Types of Solutions ──
  // pp. 8, 10–12
  {
    topic: 0,
    kind: 'remember',
    q: 'What is a true solution, and how is it told from a colloid and a suspension?',
    a: 'A homogeneous, single-phase mixture of two or more components, uniform in composition and properties. True solution: particles < 1 nm, transparent, does not scatter light, never settles. Colloid: 1–1000 nm, scatters light. Suspension: > 1000 nm, settles on standing',
    why: 'Muddy river water is a suspension, not a true solution; sugar in water, air and brass are true solutions (liquid, gaseous, solid).',
    say: null,
  },
  // pp. 9, 11, 12
  {
    topic: 0,
    kind: 'remember',
    q: 'The nine types of solution: what names the family, and an example of each?',
    a: 'The solvent’s state names the family. Gaseous: air (gas in gas), chloroform vapour in air (liquid in gas), camphor in nitrogen gas (solid in gas). Liquid: soda water (gas in liquid), ethanol in water (liquid in liquid), common salt in water (solid in liquid). Solid: hydrogen in palladium (gas in solid), amalgam (liquid in solid), brass (solid in solid)',
    why: 'Sea water and tincture of iodine are solid-in-liquid; bronze is solid-in-solid; a carbonated cold drink is gas-in-liquid.',
    say: 'name it by where it lives — the solvent’s state names the solution family.',
  },
  // pp. 10, 11
  {
    topic: 0,
    kind: 'mixup',
    q: 'Solvent or solute: how do you tell which is which?',
    a: 'Different physical states: the solvent is the one that keeps its state in the final solution, usually the liquid (salt water) or, in an amalgam, the solid metal. Same state: the solvent is the one in the larger amount (an alloy’s major metal). The solvent fixes the physical state of the whole solution',
    why: 'In dilute aqueous ethanol the solvent is water; in a small amount of water in a large amount of ethanol it is ethanol: the role swaps with composition.',
    say: null,
  },
  // pp. 10, 11, 12
  {
    topic: 0,
    kind: 'mistake',
    q: 'Does German silver contain silver, and is an alloy a compound?',
    a: 'No to both. German silver is Cu + Zn + Ni, with no silver; it, brass (Cu + Zn) and bronze are alloys, so solid-in-solid solutions. A compound has a fixed stoichiometric ratio; an alloy has a range of compositions (gold with copper: 14-carat, 18-carat, 22-carat)',
    why: 'Nor is the solvent always water or a liquid: air has a gas as solvent, brass and amalgams a solid.',
    say: null,
  },
  // pp. 10, 12
  {
    topic: 0,
    kind: 'shortcut',
    q: 'How do you settle any “type of solution” MCQ in two reads?',
    a: 'Lock the solvent’s physical state first (that names the family), then the solute’s. No calculation. The four classics: air = gas-gas, soda = gas-liquid, alloy = solid-solid, amalgam = liquid-solid',
    why: 'Any alloy (brass, bronze, steel, German silver) is solid-in-solid: the moment you see “alloy”, the answer is locked.',
    say: null,
  },

  // ── Topic 02 · Expressing the Concentration of Solutions ──
  // pp. 13–18
  {
    topic: 1,
    kind: 'remember',
    q: 'Mole fraction, molarity and molality: the definitions, and which of them changes with temperature?',
    a: '<i>x</i><sub>A</sub> = <i>n</i><sub>A</sub>/(<i>n</i><sub>A</sub> + <i>n</i><sub>B</sub>), with <i>x</i><sub>A</sub> + <i>x</i><sub>B</sub> = 1. Molarity <i>M</i>: moles of solute per litre of solution (mol L<sup>−1</sup>); it falls on heating, because the solution expands. Molality <i>m</i>: moles of solute per kilogram of solvent (mol kg<sup>−1</sup>). Molality, mole fraction and mass % have no volume in them, so they are temperature-independent',
    why: '4.0 g of NaOH (40 g mol<sup>−1</sup>) in 200 mL of solution: 0.10/0.200 = 0.50 mol L<sup>−1</sup>. 0.5 mol of solute in 250 g of solvent: 2.0 mol kg<sup>−1</sup>.',
    say: 'molality = mass of solvent (temp-proof); Molarity = voluMe of solution (temp-shy).',
  },
  // pp. 14–16, 18
  {
    topic: 1,
    kind: 'remember',
    q: 'The interconversions from mass % and density <i>d</i> (g mL<sup>−1</sup>), with solute molar mass <i>M</i><sub>2</sub> and solvent molar mass <i>M</i><sub>1</sub>?',
    a: '<i>M</i> = 10 × (mass %) × <i>d</i>/<i>M</i><sub>2</sub>; <i>m</i> = 1000<i>M</i>/(1000<i>d</i> − <i>M M</i><sub>2</sub>); <i>m</i> = (mass %) × 1000/((100 − mass %) × <i>M</i><sub>2</sub>); <i>x</i><sub>solute</sub> = <i>m</i>/(<i>m</i> + 1000/<i>M</i><sub>1</sub>). All are one chain on 100 g of solution, and density is the only bridge between volume and mass',
    why: '15% (w/w) urea (60 g mol<sup>−1</sup>), density 1.05 g mL<sup>−1</sup>: 0.25 mol in 95.24 mL gives <i>M</i> ≈ 2.63 mol L<sup>−1</sup> (2.6 to 2 s.f.); 0.25 mol in 0.085 kg of water gives <i>m</i> ≈ 2.94 mol kg<sup>−1</sup> (2.9 to 2 s.f.).',
    say: null,
  },
  // pp. 14, 17, 18
  {
    topic: 1,
    kind: 'mixup',
    q: 'Mass of solvent, volume of solution or mass of solution: which does each measure use?',
    a: 'Molality: mass of solvent. Molarity: volume of solution. Mass % and ppm: mass of solution. Write down which one before substituting',
    why: 'ppm = (mass of solute/mass of solution) × 10<sup>6</sup>: 2 mg of solute in 1 kg of solution is 2 ppm.',
    say: null,
  },
  // pp. 16, 18
  {
    topic: 1,
    kind: 'mistake',
    q: '36 g of glucose (180 g mol<sup>−1</sup>) in 162 g of water: is the mole fraction of glucose about 0.18?',
    a: 'No, about 0.022. Never ratio raw masses: glucose 36/180 = 0.20 mol, water 162/18 = 9.0 mol, and <i>x</i> = 0.20/(0.20 + 9.0) ≈ 0.022. Option 0.18 is the mass-ratio trap (36/198)',
    why: 'The other classic slip is thinking molarity is temperature-proof: only mass- and mole-based measures are.',
    say: null,
  },
  // pp. 16–18
  {
    topic: 1,
    kind: 'shortcut',
    q: '98% (w/w) H<sub>2</sub>SO<sub>4</sub>, density 1.84 g mL<sup>−1</sup>: what volume makes 1.0 L of 0.50 M? The fast way?',
    a: 'Stock molarity first: 10 × 98 × 1.84/98 = 18.4 mol L<sup>−1</sup>. Then skip re-deriving and use <i>M</i><sub>1</sub><i>V</i><sub>1</sub> = <i>M</i><sub>2</sub><i>V</i><sub>2</sub> (molarities before and after dilution): 18.4 × <i>V</i><sub>1</sub> = 0.50 × 1000 mL, <i>V</i><sub>1</sub> ≈ 27.2 mL, so about 27 mL',
    why: 'From any mass %, anchor on “100 g of solution”: solute grams, solvent grams and (via density) volume all fall out. For dilute aqueous solutions molality and molarity come out close; a large gap signals a slip.',
    say: null,
  },

  // ── Topic 03 · Solubility & Henry’s Law ──
  // pp. 19–20, 23, 27
  {
    topic: 2,
    kind: 'remember',
    q: 'Henry’s law: the statement, the units of <i>K</i><sub>H</sub>, what a large <i>K</i><sub>H</sub> means, and when the law fails?',
    a: 'The partial pressure of a gas in the vapour phase is proportional to its mole fraction in solution: <i>p</i> = <i>K</i><sub>H</sub><i>x</i>, so <i>x</i> = <i>p</i>/<i>K</i><sub>H</sub>. <i>x</i> is dimensionless, so <i>K</i><sub>H</sub> carries pressure units (Pa, bar, kbar). Larger <i>K</i><sub>H</sub> means lower solubility. The law fails if the pressure is too high, the temperature too low, or the gas reacts, dissociates or associates with the solvent (NH<sub>3</sub>, HCl, O<sub>2</sub> in blood)',
    why: 'O<sub>2</sub> at 0.80 bar over water, <i>K</i><sub>H</sub> = 35 kbar = 35 000 bar: <i>x</i> = 0.80/35 000 = 2.3 × 10<sup>−5</sup>.',
    say: 'High K → gas wants to eKscape — larger <i>K</i><sub>H</sub>, lower solubility.',
  },
  // pp. 20–21, 27
  {
    topic: 2,
    kind: 'remember',
    q: 'How do pressure and temperature act on the solubility of a gas, and of a solid?',
    a: 'Gas: solubility rises with pressure, <i>s</i><sub>1</sub>/<i>s</i><sub>2</sub> = <i>p</i><sub>1</sub>/<i>p</i><sub>2</sub> at constant <i>T</i>, and falls with temperature (dissolving is exothermic; <i>K</i><sub>H</sub> rises with <i>T</i>). Solid: pressure has essentially no effect (solids and liquids are nearly incompressible); temperature follows the sign of Δ<sub>sol</sub><i>H</i>: NaNO<sub>3</sub> rises, NaCl is nearly flat, Na<sub>2</sub>SO<sub>4</sub> rises up to about 32.4 °C and then falls',
    why: 'Salting-out: dissolved electrolytes (and sugar) lower gas solubility, so a gas is less soluble in salt water than in pure water.',
    say: null,
  },
  // pp. 21, 26, 27
  {
    topic: 2,
    kind: 'mixup',
    q: 'Heating the water: does it dissolve more O<sub>2</sub>, more KNO<sub>3</sub>, or both?',
    a: 'More KNO<sub>3</sub> only. Dissolving most solids like KNO<sub>3</sub> is endothermic, so heating shifts the equilibrium forward. Gas dissolution is exothermic, so heating expels O<sub>2</sub>. “Heating dissolves more” is true for most solids and false for gases',
    why: 'Warm soda goes flat, and fish are more comfortable in cold water, which holds more dissolved O<sub>2</sub>.',
    say: null,
  },
  // pp. 23, 27
  {
    topic: 2,
    kind: 'mistake',
    q: 'Gases P, Q, R, S have <i>K</i><sub>H</sub> = 0.40, 1.7, 40, 145 kbar in water. Is S the most soluble?',
    a: 'No, the least: <i>x</i> = <i>p</i>/<i>K</i><sub>H</sub>, so high <i>K</i><sub>H</sub> = stubborn, low-solubility gas. Increasing solubility: S < R < Q < P',
    why: 'Units are the other trap: <i>K</i><sub>H</sub> in kbar with <i>p</i> in bar is off by 10<sup>3</sup> until converted. Dissolved gas mole fractions are tiny (typically 10<sup>−5</sup> to 10<sup>−3</sup>); an <i>x</i> near 1 signals a slip.',
    say: null,
  },
  // pp. 26, 27
  {
    topic: 2,
    kind: 'shortcut',
    q: 'A gas dissolves to 1.5 × 10<sup>−3</sup> mol L<sup>−1</sup> at 2.0 bar. Its solubility at 5.0 bar (same temperature)? The fast way?',
    a: 'Skip <i>K</i><sub>H</sub> entirely and use the ratio <i>s</i><sub>1</sub>/<i>s</i><sub>2</sub> = <i>p</i><sub>1</sub>/<i>p</i><sub>2</sub>: 1.5 × 10<sup>−3</sup> × 5.0/2.0 = 3.75 × 10<sup>−3</sup> mol L<sup>−1</sup> (3.8 × 10<sup>−3</sup> to 2 s.f.)',
    why: 'For “compare/order solubility” questions, never plug numbers: rank <i>K</i><sub>H</sub> and flip the order.',
    say: null,
  },

  // ── Topic 04 · Vapour Pressure & Raoult’s Law ──
  // pp. 29, 32, 35
  {
    topic: 3,
    kind: 'remember',
    q: 'Raoult’s law for two volatile liquids, for a non-volatile solute, and the molar-mass form?',
    a: 'Volatile: <i>p</i><sub>A</sub> = <i>x</i><sub>A</sub><i>p</i>°<sub>A</sub>, <i>p</i><sub>B</sub> = <i>x</i><sub>B</sub><i>p</i>°<sub>B</sub>, <i>p</i><sub>total</sub> = <i>x</i><sub>A</sub><i>p</i>°<sub>A</sub> + <i>x</i><sub>B</sub><i>p</i>°<sub>B</sub>, linear in composition. Non-volatile solute: <i>p</i><sub>s</sub> = <i>x</i><sub>solvent</sub><i>p</i>°, and (<i>p</i>° − <i>p</i><sub>s</sub>)/<i>p</i>° = <i>x</i><sub>solute</sub>. Molar mass (dilute): <i>M</i><sub>2</sub> = <i>w</i><sub>2</sub><i>M</i><sub>1</sub><i>p</i>°/(<i>w</i><sub>1</sub>(<i>p</i>° − <i>p</i><sub>s</sub>))',
    why: '3 mol of P (120 mmHg) with 2 mol of Q (75 mmHg): 0.60 × 120 + 0.40 × 75 = 72 + 30 = 102 mmHg.',
    say: null,
  },
  // pp. 28, 30, 35
  {
    topic: 3,
    kind: 'remember',
    q: 'Ideal, positive deviation, negative deviation: the attractions, the signs, the azeotrope?',
    a: 'Ideal: A–A ≈ B–B ≈ A–B, Δ<sub>mix</sub><i>H</i> = 0, Δ<sub>mix</sub><i>V</i> = 0 (benzene + toluene, hexane + heptane). Positive: A–B weaker, <i>p</i> above Raoult, Δ<sub>mix</sub><i>H</i>, Δ<sub>mix</sub><i>V</i> > 0, minimum-boiling azeotrope (95% ethanol–water). Negative: A–B stronger (new H-bond), <i>p</i> below Raoult, Δ<sub>mix</sub><i>H</i>, Δ<sub>mix</sub><i>V</i> < 0, maximum-boiling azeotrope (68% HNO<sub>3</sub>–water)',
    why: 'Raoult’s law is Henry’s law with <i>K</i><sub>H</sub> = <i>p</i>°: the same kind of straight line through the origin, with a different slope.',
    say: 'weak makes it leak (↑VP, +ve); strong holds it back (↓VP, −ve) — deviations from Raoult’s law.',
  },
  // pp. 29, 33, 34
  {
    topic: 3,
    kind: 'mixup',
    q: 'The relative lowering and the solution’s pressure: which mole fraction goes with which?',
    a: 'The relative lowering equals the mole fraction of the solute: (<i>p</i>° − <i>p</i><sub>s</sub>)/<i>p</i>° = <i>x</i><sub>solute</sub>. The solution’s pressure is <i>p</i>° times the mole fraction of the solvent: <i>p</i><sub>s</sub> = <i>x</i><sub>solvent</sub><i>p</i>°',
    why: '1.0 mol of non-volatile solute in 9.0 mol of benzene (<i>p</i>° = 100 mmHg): <i>x</i><sub>solvent</sub> = 0.9, so <i>p</i><sub>s</sub> = 90 mmHg.',
    say: null,
  },
  // pp. 34, 35
  {
    topic: 3,
    kind: 'mistake',
    q: 'A large positive deviation from Raoult’s law: does it give a maximum-boiling azeotrope?',
    a: 'No, minimum-boiling: positive deviation means higher vapour pressure, so a lower boiling point. Negative deviation gives the maximum-boiling azeotrope. Anchor the signs with acetone + chloroform = negative',
    why: 'Mixing up the two Raoult forms is the other slip: use the relative-lowering form only for a non-volatile solute, so check first whether the solute can evaporate.',
    say: null,
  },
  // pp. 32–33, 35
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Ideal mixture with <i>x</i><sub>A</sub> = 0.40, <i>p</i>°<sub>A</sub> = 400 mmHg, <i>p</i>°<sub>B</sub> = 100 mmHg: is <i>y</i><sub>A</sub> above or below 0.40? The fast way?',
    a: 'Above: in an ideal mixture the vapour is always richer in the higher-<i>p</i>° liquid, which eliminates half the options. In full, <i>y</i><sub>A</sub> = 160/(160 + 60) = 0.727. For deviation questions, never compute; reason from the attractions on mixing, usually hydrogen bonds: new H-bond on mixing ⇒ negative; H-bonds broken ⇒ positive; look-alike molecules ⇒ ideal',
    why: 'Sanity check: the total vapour pressure of an ideal mixture must lie between <i>p</i>°<sub>A</sub> and <i>p</i>°<sub>B</sub> (here 220 mmHg, between 100 and 400).',
    say: null,
  },

  // ── Topic 05 · Colligative Properties & Van’t Hoff Factor ──
  // pp. 36–39, 43
  {
    topic: 4,
    kind: 'remember',
    q: 'The four colligative properties, and which concentration each takes?',
    a: 'Relative lowering of vapour pressure, (<i>p</i>° − <i>p</i><sub>s</sub>)/<i>p</i>° = <i>i</i> <i>x</i><sub>solute</sub>. Molality for Δ<i>T</i>: Δ<i>T</i><sub>b</sub> = <i>iK</i><sub>b</sub><i>m</i>, Δ<i>T</i><sub>f</sub> = <i>iK</i><sub>f</sub><i>m</i>, with <i>K</i><sub>b</sub>, <i>K</i><sub>f</sub> in K kg mol<sup>−1</sup>. Molarity for Π: Π = <i>iCRT</i>, with <i>R</i> = 0.0821 L atm K<sup>−1</sup> mol<sup>−1</sup>',
    why: '18 g of glucose in 500 g of water: <i>m</i> = 0.20 mol kg<sup>−1</sup>, Δ<i>T</i><sub>b</sub> = 0.52 × 0.20 = 0.104 K (0.10 K to 2 s.f.), boiling point 373.15 + 0.104 = 373.25 K.',
    say: 'more pieces, more effect — every colligative property counts particles, so always settle <i>i</i> first.',
  },
  // pp. 37, 41, 43
  {
    topic: 4,
    kind: 'remember',
    q: 'The van’t Hoff factor: its three definitions, and its link to <i>α</i> for dissociation and association?',
    a: '<i>i</i> = normal molar mass/observed molar mass = observed colligative property/calculated colligative property = particles after/particles before. Dissociation into <i>n</i> particles: <i>i</i> = 1 + (<i>n</i> − 1)<i>α</i>, <i>i</i> > 1. Association: <i>i</i> = 1 + (1/<i>n</i> − 1)<i>α</i>, <i>i</i> < 1',
    why: '1.0 g of weak HA (100 g mol<sup>−1</sup>) in 100 g of water, Δ<i>T</i><sub>f</sub> = 0.217 K: calculated 1.86 × 0.10 = 0.186 K, <i>i</i> = 1.167, <i>α</i> = 0.167 (16.7%); to the data’s precision, <i>i</i> ≈ 1.17, <i>α</i> ≈ 0.17.',
    say: null,
  },
  // pp. 38, 42, 43
  {
    topic: 4,
    kind: 'mixup',
    q: 'Dissociation or association: which way does the observed molar mass go?',
    a: 'Dissociation: more particles, <i>i</i> > 1, a larger effect, observed molar mass lower than the true value. Association: fewer particles, <i>i</i> < 1, a smaller effect, observed molar mass higher than the true value',
    why: 'Ethanoic acid dimerises in benzene through hydrogen bonding, <i>i</i> ≈ 0.5. Benzoic acid in benzene with <i>i</i> = 0.60: 0.60 = 1 + (½ − 1)<i>α</i>, <i>α</i> = 0.80.',
    say: null,
  },
  // pp. 42–43
  {
    topic: 4,
    kind: 'mistake',
    q: 'Is the freezing point of a solution the pure freezing point plus Δ<i>T</i><sub>f</sub>, and can <i>i</i> be left out of Π?',
    a: 'No to both. Freezing point = pure FP − Δ<i>T</i><sub>f</sub>; boiling point = pure BP + Δ<i>T</i><sub>b</sub>. And for electrolytes always multiply by <i>i</i> in Δ<i>T</i><sub>b</sub>, Δ<i>T</i><sub>f</sub> and Π: a “missing 2 or 3” is the most common lost mark',
    why: '0.01 mol of CaCl<sub>2</sub> (complete dissociation, <i>i</i> = 3) in 1.0 L at 300 K: Π = 3 × 0.01 × 0.0821 × 300 ≈ 0.739 atm (0.7 atm to 1 s.f.).',
    say: null,
  },
  // pp. 39, 43
  {
    topic: 4,
    kind: 'shortcut',
    q: 'Each 0.1 m: glucose, NaCl, CaCl<sub>2</sub>, K<sub>2</sub>SO<sub>4</sub>. Rank by increasing freezing point. The fast way?',
    a: 'Never compute: count the particles. <i>i</i>: glucose 1, NaCl 2, CaCl<sub>2</sub> 3, K<sub>2</sub>SO<sub>4</sub> 3. More particles, lower freezing point: CaCl<sub>2</sub> ≈ K<sub>2</sub>SO<sub>4</sub> < NaCl < glucose',
    why: 'For molar mass, memorise one master form per property, <i>M</i><sub>2</sub> = <i>K</i><sub>f</sub><i>w</i><sub>2</sub> × 1000/(Δ<i>T</i><sub>f</sub> <i>w</i><sub>1</sub>) = <i>w</i><sub>2</sub><i>RT</i>/(Π<i>V</i>): the only trap is unit consistency (g vs kg, atm vs bar, L vs mL).',
    say: null,
  },

  // ── Additional A · Henry’s Law in the Real World: Bends, Anoxia and Dissolved Air ──
  // pp. 44–45
  {
    topic: 5,
    kind: 'remember',
    q: 'The three NCERT applications of Henry’s law, as cause and effect?',
    a: 'Soda water: sealed under high CO<sub>2</sub> pressure; opening the cap drops <i>p</i> and the excess comes out as fizz. The bends: at depth, high pressure raises gas solubility in blood; on surfacing, N<sub>2</sub> bubbles form and block capillaries, so divers’ tanks hold air diluted with helium (He 11.7%, N<sub>2</sub> 56.2%, O<sub>2</sub> 32.1% by volume). Anoxia: at high altitude the lower partial pressure of O<sub>2</sub> means less O<sub>2</sub> in blood and tissues',
    why: '<i>K</i><sub>H</sub> in water at 293 K: He 144.97, N<sub>2</sub> 76.48, H<sub>2</sub> 69.16, O<sub>2</sub> 34.86 kbar, so the solubility order is He < N<sub>2</sub> < H<sub>2</sub> < O<sub>2</sub>.',
    say: null,
  },
  // pp. 45–46
  {
    topic: 5,
    kind: 'remember',
    q: 'Air (21% O<sub>2</sub>, 79% N<sub>2</sub>) at 1 atm over water, <i>K</i><sub>H</sub> = 2.03 × 10<sup>9</sup> and 5.07 × 10<sup>9</sup> Pa: mole percent of N<sub>2</sub> in the dissolved gas?',
    a: 'About 60%. Apply Henry’s law to each gas with its own Dalton pressure, <i>x</i><sub><i>i</i></sub> = <i>y</i><sub><i>i</i></sub><i>p</i><sub>total</sub>/<i>K</i><sub>H,<i>i</i></sub>: <i>x</i>(O<sub>2</sub>) = 1.048 × 10<sup>−5</sup>, <i>x</i>(N<sub>2</sub>) = 1.579 × 10<sup>−5</sup>, and 1.579/(1.579 + 1.048) × 100 = 60.1%. The dissolved phase is enriched in the gas with the smaller <i>K</i><sub>H</sub>',
    why: 'The dilute-solution move: N<sub>2</sub> at 0.987 bar, <i>K</i><sub>H</sub> = 76.48 kbar: <i>x</i> = 1.29 × 10<sup>−5</sup>, and <i>x</i> ≈ <i>n</i>/55.5 for 1 L of water gives <i>n</i> = 0.716 mmol.',
    say: null,
  },

  // ── Additional B · Where Kb and Kf Come From, and the Freezing-Out Problem ──
  // pp. 46–47
  {
    topic: 6,
    kind: 'remember',
    q: 'Where do <i>K</i><sub>f</sub> and <i>K</i><sub>b</sub> come from, and which is usually larger?',
    a: '<i>K</i><sub>f</sub> = <i>RM</i><sub>1</sub><i>T</i><sub>f</sub><sup>2</sup>/(1000 × Δ<sub>fus</sub><i>H</i>), <i>K</i><sub>b</sub> = <i>RM</i><sub>1</sub><i>T</i><sub>b</sub><sup>2</sup>/(1000 × Δ<sub>vap</sub><i>H</i>) (<i>R</i> in J K<sup>−1</sup> mol<sup>−1</sup>, <i>M</i><sub>1</sub> in g mol<sup>−1</sup>, Δ<i>H</i> in J mol<sup>−1</sup>): only solvent quantities appear. Δ<sub>fus</sub><i>H</i> ≪ Δ<sub>vap</sub><i>H</i>, so <i>K</i><sub>f</sub> usually exceeds <i>K</i><sub>b</sub>. Learn the rows (<i>K</i><sub>b</sub>, <i>K</i><sub>f</sub>): water 0.52, 1.86; ethanol 1.20, 1.99; benzene 2.53, 5.12. Large-<i>K</i><sub>f</sub> solvents (cyclohexane 20.00) give a bigger, easier-to-measure depression',
    why: 'Water, Δ<sub>fus</sub><i>H</i> = 6.01 kJ mol<sup>−1</sup>: <i>K</i><sub>f</sub> = 8.314 × 18 × (273.15)<sup>2</sup>/(1000 × 6010) = 1.86 K kg mol<sup>−1</sup>.',
    say: null,
  },
  // pp. 47–48
  {
    topic: 6,
    kind: 'remember',
    q: '46.5 g of ethylene glycol (62 g mol<sup>−1</sup>) in 160 g of water is cooled to −11.16 °C, <i>K</i><sub>f</sub> = 1.86: how much ice separates?',
    a: '35 g. The remaining liquid sits at its own freezing point, the glycol moles are fixed (0.75 mol), and the solvent in the molality is only the unfrozen part: 11.16 = 1.86 × 0.75/<i>w</i>, <i>w</i> = 0.125 kg. Ice = 160 − 125 = 35 g',
    why: 'As ice leaves, the solution concentrates and its freezing point keeps falling: Δ<i>T</i><sub>f</sub> = <i>iK</i><sub>f</sub><i>m</i><sub>remaining</sub>.',
    say: null,
  },

  // ── Additional C · Azeotropes, Exactly as NCERT Defines Them ──
  // pp. 48–49
  {
    topic: 7,
    kind: 'remember',
    q: 'What is an azeotrope, and what are NCERT’s two named examples?',
    a: 'A binary mixture with the same composition in liquid and vapour, which therefore boils at a constant temperature; the components cannot be separated by fractional distillation. Large positive deviation, minimum-boiling: ethanol–water, approximately 95% ethanol by volume. Large negative deviation, maximum-boiling: nitric acid–water, approximately 68% nitric acid and 32% water by mass, boiling at 393.5 K',
    why: 'The liquid and vapour curves touch at the azeotropic composition: distil a 50% ethanol mixture and the distillate marches toward 95% ethanol, the residue toward pure water.',
    say: null,
  },
  // pp. 49–50
  {
    topic: 7,
    kind: 'remember',
    q: 'Water + ethyl methyl ketone, phenol + aniline, carbon disulphide + acetone, methanol + chloroform: which is not a minimum-boiling azeotrope?',
    a: 'Phenol + aniline: the phenolic OH hydrogen-bonds to the aniline nitrogen, a new, stronger A–B attraction, so negative deviation and maximum boiling. The other three break up networks of a pure component: positive deviation',
    why: 'Negative: chloroform + acetone, phenol + aniline, nitric acid + water, HCl + water. Positive: ethanol + acetone, ethanol + water, ethanol + cyclohexane, acetone + carbon disulphide. Near-ideal benzene + toluene and hexane + heptane never form azeotropes.',
    say: null,
  },

  // ── Additional D · Isotonicity as a Calculation, and the van’t Hoff Factor Under Pressure ──
  // pp. 51–52
  {
    topic: 8,
    kind: 'remember',
    q: 'When are two solutions isotonic? And if 0.004 M K<sub>2</sub>SO<sub>4</sub> is isotonic with 0.01 M glucose, how far is it dissociated?',
    a: 'When their osmotic pressures are equal at the same temperature: <i>i</i><sub>1</sub><i>C</i><sub>1</sub> = <i>i</i><sub>2</sub><i>C</i><sub>2</sub>, the product and not the molarity alone. <i>i</i> × 0.004 = 1 × 0.01, <i>i</i> = 2.5; K<sub>2</sub>SO<sub>4</sub> gives <i>n</i> = 3, so <i>α</i> = (2.5 − 1)/2 = 0.75, 75% dissociated',
    why: '0.9% (mass/volume) NaCl, normal saline, is isotonic with the fluid inside blood cells; in a hypertonic solution cells shrink, in a hypotonic one they swell and may burst.',
    say: null,
  },
  // pp. 51–53
  {
    topic: 8,
    kind: 'remember',
    q: 'A salt MX<sub>3</sub> with <i>i</i> = 2, and ethanoic acid in benzene with <i>i</i> = 0.55: what is <i>α</i> in each?',
    a: 'MX<sub>3</sub> → M<sup>3+</sup> + 3X<sup>−</sup>, so <i>n</i> = 4 (count particles, not species): <i>α</i> = (2 − 1)/(4 − 1) = 1/3 ≈ 33%. Partial dimerisation, <i>n</i> = 2: <i>i</i> = 1 − (1 − 1/<i>n</i>)<i>α</i>, 0.55 = 1 − <i>α</i>/2, <i>α</i> = 0.90. Complete dimerisation gives <i>i</i> = 0.5, the floor',
    why: 'Reverse osmosis: a pressure larger than Π on the solution side drives solvent out of the solution; this is sea-water desalination, typically through a cellulose acetate membrane.',
    say: null,
  },

  // ── Additional E · What JEE and NEET Actually Ask ──
  // pp. 53–54
  {
    topic: 9,
    kind: 'remember',
    q: 'Which parts of Solutions carry the most weight in JEE Main and NEET?',
    a: 'Colligative properties and the van’t Hoff factor about 30–35%; concentration terms about 20%; Raoult’s law and vapour pressure about 15%; Henry’s law about 10%; deviations and azeotropes about 7%; types of solutions about 5%. One colligative numerical is nearly guaranteed, and it increasingly hides a van’t Hoff factor or a solvent switch',
    why: 'Pure pressures from two readings: 350 mmHg at <i>x</i><sub>A</sub> = 0.7 and 410 mmHg at <i>x</i><sub>A</sub> = 0.2 give 0.7<i>a</i> + 0.3<i>b</i> = 350 and 0.2<i>a</i> + 0.8<i>b</i> = 410, so <i>p</i>°<sub>A</sub> = 314 and <i>p</i>°<sub>B</sub> = 434 mmHg.',
    say: null,
  },
  // pp. 55–56
  {
    topic: 9,
    kind: 'mistake',
    q: 'Which traps recur in Solutions questions?',
    a: 'Swapping solute and solvent mole fractions in Raoult’s law; counting <i>i</i> wrong (CaCl<sub>2</sub> and K<sub>2</sub>SO<sub>4</sub> give 3, Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> gives 5); reading large <i>K</i><sub>H</sub> as high solubility; molality in Π (it takes molarity), or <i>R</i> not matched to the pressure unit (0.083 L bar, 0.0821 L atm); swapping the azeotrope types; assuming <i>K</i><sub>f</sub> is water-like (benzene 5.12, acetic acid 3.90)',
    why: 'Boiling an open solution: the vapour pressure at boiling always equals atmospheric pressure, but solvent is lost, the solution concentrates and the boiling point keeps rising.',
    say: null,
  },
];
