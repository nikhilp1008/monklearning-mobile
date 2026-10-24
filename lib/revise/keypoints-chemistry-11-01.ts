/**
 * KEY POINTS for Chemistry Class 11, Chapter 1 (Some Basic Concepts of
 * Chemistry).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–08 are 0–7; Additional topics A–C are 8–10; Additional
 * topic D, What JEE and NEET Actually Ask (the book's Addendum P), is 11.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key formulas and definitions and Cheat sheet. Common
 * mistakes: its Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`:
 * the cheat sheet's first two memory aids, word for word (quotation marks and
 * bold dropped). Additional topics: the addenda's methods and worked
 * examples; Additional topic D: its lessons and traps.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Element
 * symbols, formulas and ions are upright (H<sub>2</sub>O, Ca<sup>2+</sup>,
 * Mg<sup>2+</sup>); state symbols upright in brackets; a variable subscript
 * in a formula stays italic (C<sub><i>x</i></sub>H<sub><i>y</i></sub>). Label
 * subscripts are upright (<i>N</i><sub>A</sub>, <i>V</i><sub>m</sub>,
 * <i>M</i><sub>B</sub>, <i>m</i><sub>C</sub>, <i>x</i><sub>B</sub>). A
 * condition over a reaction arrow is a <sup> after it (→<sup>Δ</sup>).
 * Units upright with a real minus (g mL<sup>−1</sup>, mol kg<sup>−1</sup>).
 * Ratios use ∶ (U+2236).
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Nature of Matter ──
  // pp. 8–9, 14
  {
    topic: 0,
    kind: 'remember',
    q: 'What separates a pure substance from a mixture, and an element from a compound?',
    a: 'A pure substance has a fixed composition and cannot be separated by physical means: an element is one kind of atom (Au, O<sub>2</sub>, Fe), a compound two or more elements chemically combined in a fixed ratio by mass (H<sub>2</sub>O, NaCl, CO<sub>2</sub>). A mixture has variable composition and separates by physical methods',
    why: 'A homogeneous mixture is uniform throughout (salt water, air, brass); a heterogeneous one has visibly distinct regions (sand and iron filings, oil and water).',
    say: 'Fixed or free? — fixed composition = compound; free proportion = mixture.',
  },
  // pp. 9, 12, 14
  {
    topic: 0,
    kind: 'remember',
    q: 'Physical change or chemical change: what is the one test?',
    a: 'Was a new substance formed? Physical: no new substance, identity unchanged, usually reversible (melting ice, dissolving sugar, tearing paper). Chemical: a new substance with new properties forms, usually not easily reversed (burning paper, rusting iron, curdling milk)',
    why: 'Sublimation of camphor and dissolving sugar are physical; souring of milk (lactose → lactic acid) and digestion of food are chemical.',
    say: null,
  },
  // pp. 9, 13–14
  {
    topic: 0,
    kind: 'mixup',
    q: 'Salt water and table salt both look uniform. Which is the mixture, and why?',
    a: 'Salt water is a homogeneous mixture: variable composition, and the salt is recovered by evaporation. Table salt (NaCl) is a compound: sodium and chlorine chemically bonded in a fixed ratio, separable only by a chemical reaction',
    why: 'Uniformity alone does not make a compound; fixed chemical combination does. Air is a gaseous solution and brass a solid solution, both homogeneous mixtures.',
    say: null,
  },
  // pp. 12–14
  {
    topic: 0,
    kind: 'mistake',
    q: 'Diamond and bronze are both solid, shiny materials. Which one is not a mixture?',
    a: 'Diamond: it is pure carbon, a single element. Bronze is a Cu–Sn alloy, a mixture. Judge by composition, never by looks',
    why: 'Diamond and graphite look nothing alike yet are both the element carbon; brass and copper both look metallic yet one is a mixture.',
    say: 'Looks lie — classify by composition, not appearance (diamond vs brass).',
  },
  // pp. 10, 14
  {
    topic: 0,
    kind: 'shortcut',
    q: 'An element / compound / mixture classification question. The fast way?',
    a: 'Silently run the two-question filter: “fixed or variable composition?” then “one substance or many?”, with appearance ignored entirely',
    why: 'Then a mixture is homogeneous if uniform throughout, heterogeneous if it has visibly distinct regions; a pure substance is a compound if chemical means break it into simpler substances, otherwise an element.',
    say: null,
  },

  // ── Topic 02 · Measurement & SI Units ──
  // pp. 15–19
  {
    topic: 1,
    kind: 'remember',
    q: 'The seven SI base units, and the common prefixes from giga to pico?',
    a: 'metre (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), candela (cd). Prefixes: giga 10<sup>9</sup>, mega 10<sup>6</sup>, kilo 10<sup>3</sup>, deci 10<sup>−1</sup>, centi 10<sup>−2</sup>, milli 10<sup>−3</sup>, micro 10<sup>−6</sup>, nano 10<sup>−9</sup>, pico 10<sup>−12</sup>',
    why: 'The mole is the base unit for amount of substance, not the gram, kilogram or litre. Rank lengths by exponent only: 1 pm < 1 nm < 1 μm < 1 mm.',
    say: null,
  },
  // pp. 16–19
  {
    topic: 1,
    kind: 'remember',
    q: 'Convert between kelvin, Celsius and Fahrenheit. Where do the Celsius and Fahrenheit readings agree?',
    a: '<i>T</i>(K) = <i>t</i>(°C) + 273.15; <i>t</i>(°F) = (9/5)<i>t</i>(°C) + 32; <i>t</i>(°C) = (5/9)(<i>t</i>(°F) − 32). They agree at −40: −40 °C = −40 °F',
    why: 'Body temperature 37 °C = 310.15 K = 98.6 °F. Kelvin has no degree sign and is never negative: −273.15 °C = 0 K, absolute zero.',
    say: null,
  },
  // pp. 15–16, 18–19
  {
    topic: 1,
    kind: 'mixup',
    q: 'Mass or weight: which one changes on the Moon?',
    a: 'Weight. Mass is the amount of matter (SI unit kg) and never changes; weight is the gravitational force on it, <i>W</i> = <i>mg</i> (SI unit newton), and varies with <i>g</i>, so with location',
    why: 'Chemistry almost always deals with mass.',
    say: null,
  },
  // pp. 16–19
  {
    topic: 1,
    kind: 'mistake',
    q: 'How many cm<sup>3</sup> are there in 1 m<sup>3</sup>? 100?',
    a: 'No, 10<sup>6</sup>: 1 m = 100 cm, so 1 m<sup>3</sup> = (100)<sup>3</sup> cm<sup>3</sup>. Always raise the linear conversion to the power of the unit’s dimension',
    why: 'So 1 g cm<sup>−3</sup> = 1000 kg m<sup>−3</sup>: mercury’s 13.6 g cm<sup>−3</sup> is 13600 kg m<sup>−3</sup>, and 250 mL of it has mass 13.6 × 250 = 3400 g = 3.4 kg.',
    say: 'Cube the cube — volume conversions raise the linear factor to the third power.',
  },
  // pp. 16, 18–19
  {
    topic: 1,
    kind: 'shortcut',
    q: 'How do you catch a slip in a unit conversion before you even check the number?',
    a: 'Carry units through the whole calculation, not just at the end: if the final units do not simplify to the units the answer should have, there is a mistake. Unit-tracking is a free error detector',
    why: 'In the factor-label method each fraction equals 1, oriented so the unwanted unit cancels: 72 km h<sup>−1</sup> × (1000 m/1 km) × (1 h/3600 s) = 20 m s<sup>−1</sup>. If the units don’t cancel, the fraction is upside-down.',
    say: 'Cancel to convert — orient factor-label fractions so unwanted units vanish.',
  },

  // ── Topic 03 · Uncertainty in Measurement & Significant Figures ──
  // pp. 21–22, 24
  {
    topic: 2,
    kind: 'remember',
    q: 'How many significant figures in 0.00250, 1.004, 50000, 6.022 × 10<sup>23</sup> and 100.0?',
    a: '3, 4, 1, 4 and 4. Non-zero digits and captive zeros count; leading zeros never do; trailing zeros count only with a decimal point; in scientific notation only the coefficient’s digits count',
    why: 'Exact numbers, counts and defined relations such as 1 m = 100 cm, have infinite significant figures and never limit a result.',
    say: 'Leading zeros are placeholders, trailing zeros are promises (only after a decimal).',
  },
  // pp. 21, 23–24
  {
    topic: 2,
    kind: 'remember',
    q: 'How many figures does a result keep after addition, and after multiplication?',
    a: 'Addition and subtraction: as many decimal places as the term with the fewest decimal places. Multiplication and division: as many significant figures as the factor with the fewest significant figures',
    why: '25.2 g + 1.34 g + 0.022 g = 26.562 g → 26.6 g; 2.5 × 3.42 = 8.55 → 8.6. Decimals govern the sum, significant figures the product.',
    say: 'Add by decimals, multiply by sig figs.',
  },
  // pp. 20–21, 24
  {
    topic: 2,
    kind: 'mixup',
    q: 'Accuracy or precision: which describes a tight cluster of arrows off to the side of the bullseye?',
    a: 'Precision without accuracy. Accuracy is how close a measurement is to the true value; precision is how close repeated measurements are to each other, regardless of the truth',
    why: 'Arrows scattered all round the bullseye are accurate on average but not precise; a tight cluster on the bullseye is both.',
    say: null,
  },
  // pp. 21–22, 24
  {
    topic: 2,
    kind: 'mistake',
    q: 'Round 2.745 to three significant figures. Is it 2.75?',
    a: 'No, 2.74: when the digit dropped is exactly 5 (nothing significant after it), the round-to-even rule leaves an even preceding digit unchanged and raises an odd one',
    why: 'So 2.735 → 2.74 as well. Otherwise a dropped digit above 5 rounds up and below 5 rounds down: 0.023456 → 0.0235.',
    say: null,
  },
  // pp. 23–24
  {
    topic: 2,
    kind: 'shortcut',
    q: 'A multi-step calculation. When do you round, and what sets the figure count?',
    a: 'Round only once, at the very end, carrying one or two guard digits through every intermediate step; then ask which input was the weakest link — that input sets your figure count',
    why: '26.95 g ÷ 5.0 cm<sup>3</sup> = 5.39 → 5.4 g cm<sup>−3</sup>: the volume 5.0 limits it to 2 significant figures.',
    say: null,
  },

  // ── Topic 04 · Laws of Chemical Combination & Atomic Theory ──
  // pp. 26, 31
  {
    topic: 3,
    kind: 'remember',
    q: 'Which law, and whose: mass is conserved; one compound from any source has a fixed mass ratio; two compounds of the same two elements give a small whole-number ratio?',
    a: 'Conservation of mass (Lavoisier, 1789), ∑<i>m</i><sub>reactants</sub> = ∑<i>m</i><sub>products</sub> in a closed system; definite proportions (Proust, 1799); multiple proportions (Dalton, 1803), with the mass of one element fixed',
    why: 'Reciprocal proportions (Richter, 1792): combination with a common third element predicts the direct ratio. Combining volumes (Gay-Lussac, 1808): gases react in simple whole-number volume ratios at the same <i>T</i> and <i>P</i>.',
    say: 'Discoverer order by date: Lavoisier–Proust–Dalton → conservation → definite → multiple.',
  },
  // pp. 25–28, 31
  {
    topic: 3,
    kind: 'remember',
    q: '1 volume of hydrogen and 1 volume of chlorine give 2 volumes of hydrogen chloride. What does that prove?',
    a: 'That hydrogen and chlorine are diatomic (H<sub>2</sub>, Cl<sub>2</sub>). By Avogadro’s law, <i>V</i> ∝ <i>n</i> at the same <i>T</i> and <i>P</i>, so equal volumes hold equal numbers of molecules; indivisible single atoms could give at most 1 particle of product per particle of each, never 2',
    why: 'So volume ratios are molecule ratios: 1 volume of C<sub><i>x</i></sub>H<sub><i>y</i></sub> + 5 of O<sub>2</sub> → 3 of CO<sub>2</sub> + 4 of H<sub>2</sub>O gives <i>x</i> = 3, <i>y</i> = 8, C<sub>3</sub>H<sub>8</sub>.',
    say: null,
  },
  // pp. 28, 30–31
  {
    topic: 3,
    kind: 'mixup',
    q: 'Ganga water and lab water are both 11.1% hydrogen; sulphur’s two oxides hold 16 g and 24 g of oxygen per 16 g of sulphur. Which law does each show?',
    a: 'The two water samples, one compound from two sources, show definite proportions. The two oxides, two compounds of the same elements, show multiple proportions: 16 ∶ 24 = 2 ∶ 3',
    why: 'The trap is seeing “two samples” and reading it as “two compounds”.',
    say: 'Same compound = same recipe → definite proportions.',
  },
  // pp. 26–28, 31
  {
    topic: 3,
    kind: 'mistake',
    q: 'A candle burning in open air loses mass. Is the law of conservation of mass broken?',
    a: 'No: the law holds in a closed system, and here the CO<sub>2</sub> and water vapour simply escaped unweighed. In a sealed container 5.6 g of Fe and 3.2 g of S give exactly 8.8 g of FeS',
    why: 'Dalton’s theory does have modern cracks: isotopes (atoms of one element can differ in mass), isobars and the divisibility of the atom.',
    say: null,
  },
  // pp. 27, 30–31
  {
    topic: 3,
    kind: 'shortcut',
    q: 'An identify-the-law question with a table of data. The 5-second method?',
    a: 'Before touching numbers, count compounds and elements: one compound, many sources → definite proportions; two compounds, two elements → multiple proportions; three elements via a common one → reciprocal; gases with volumes → combining volumes / Avogadro',
    why: 'For multiple proportions, fix the common element at the same mass in both compounds first: 0.5 g and 1.5 g of B per 1 g of A gives 1 ∶ 3.',
    say: null,
  },

  // ── Topic 05 · Atomic/Molecular Masses & Mole Concept ──
  // pp. 32–34, 37
  {
    topic: 4,
    kind: 'remember',
    q: 'The three bridges to the number of moles?',
    a: '<i>n</i> = <i>m</i>/<i>M</i> = <i>N</i>/<i>N</i><sub>A</sub> = <i>V</i>/<i>V</i><sub>m</sub>, with <i>N</i><sub>A</sub> = 6.022 × 10<sup>23</sup> mol<sup>−1</sup> and <i>V</i><sub>m</sub> = 22.4 L mol<sup>−1</sup> for a gas at STP',
    why: '13.5 g of Al (27 g mol<sup>−1</sup>) is 0.5 mol, 3.011 × 10<sup>23</sup> atoms. 22.4 L is the older STP (0 °C, 1 atm); the current IUPAC STP (0 °C, 1 bar) gives 22.7 L.',
    say: 'Everything passes through moles — convert to <i>n</i> first, always.',
  },
  // pp. 32–33, 36–38
  {
    topic: 4,
    kind: 'remember',
    q: 'Isotopes of 20 u (90%) and 22 u (10%): the average atomic mass? And a gas of vapour density 22: its molar mass?',
    a: '<i>Ā</i> = (20 × 90 + 22 × 10)/100 = 20.2 u, a mean weighted by abundance. <i>M</i> = 2 × V.D. = 44 g mol<sup>−1</sup>, the 2 because V.D. is measured against H<sub>2</sub>',
    why: 'Chlorine’s 35.5 is such a weighted average of <sup>35</sup>Cl and <sup>37</sup>Cl (roughly 3 ∶ 1): no chlorine atom actually weighs 35.5 u.',
    say: 'Average means weighted — abundances, not a plain mean.',
  },
  // pp. 34, 36–37
  {
    topic: 4,
    kind: 'mixup',
    q: 'One mole of N<sub>2</sub>: how many molecules, and how many atoms?',
    a: '<i>N</i><sub>A</sub> molecules but 2<i>N</i><sub>A</sub> atoms: atoms = molecules × atomicity (or atoms per formula unit). Always read the noun in the question',
    why: '1.8 g of water is 0.1 mol, 6.022 × 10<sup>22</sup> molecules; 1.2 × 10<sup>23</sup> is its hydrogen-atom count, not its molecule count.',
    say: null,
  },
  // pp. 32, 36–37
  {
    topic: 4,
    kind: 'mistake',
    q: 'Can 22.4 L mol<sup>−1</sup> give the volume of a mole of liquid water?',
    a: 'No: 22.4 L is moles of gas at STP only, assuming ideal-gas behaviour; it is meaningless for solids and liquids',
    why: 'Used right: 5.6 L of a gas at STP is 0.25 mol, so if it weighs 11 g, <i>M</i> = 44 g mol<sup>−1</sup>. 22 g mol<sup>−1</sup> would be its vapour density, not its molar mass.',
    say: null,
  },
  // pp. 34–35, 37
  {
    topic: 4,
    kind: 'shortcut',
    q: 'Which has the most atoms: 4 g of H<sub>2</sub>, 16 g of O<sub>2</sub>, 23 g of Na or 4 g of He? The fast way?',
    a: 'Never compute full values: write each as mass/molar mass, × atomicity for atoms, and compare; <i>N</i><sub>A</sub> cancels. H<sub>2</sub>: (4/2) × 2 = 4 mol of atoms wins',
    why: 'O<sub>2</sub>: (16/32) × 2 = 1; Na: 23/23 = 1; He: 4/4 = 1. Forgetting that hydrogen is diatomic undercounts its atoms.',
    say: null,
  },

  // ── Topic 06 · Percentage Composition, Empirical & Molecular Formula ──
  // pp. 40–41, 43–44
  {
    topic: 5,
    kind: 'remember',
    q: 'The routine for an empirical formula from a percentage composition?',
    a: 'Assume a 100 g sample (percentages become grams) → divide each mass by its atomic mass (moles) → divide by the smallest → clear fractions (.5: × 2; .33 or .67: × 3; .25: × 4) → whole-number subscripts',
    why: '70% Fe, 30% O: 70/56 = 1.25 and 30/16 = 1.875, a ratio of 1 ∶ 1.5 = 2 ∶ 3, so Fe<sub>2</sub>O<sub>3</sub>.',
    say: 'Mass to moles before ratio — never ratio raw masses.',
  },
  // pp. 40–42, 44–45
  {
    topic: 5,
    kind: 'remember',
    q: '0.60 g of a C, H, O compound burns to 0.88 g of CO<sub>2</sub> and 0.36 g of H<sub>2</sub>O; its molar mass is 60 g mol<sup>−1</sup>. The working?',
    a: '<i>m</i><sub>C</sub> = (12/44) × 0.88 = 0.24 g, <i>m</i><sub>H</sub> = (2/18) × 0.36 = 0.04 g, <i>m</i><sub>O</sub> = 0.60 − 0.24 − 0.04 = 0.32 g by difference; moles 0.02 ∶ 0.04 ∶ 0.02 = 1 ∶ 2 ∶ 1, CH<sub>2</sub>O (EFM 30); <i>n</i> = 60/30 = 2, so C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>',
    why: '<i>n</i> = molecular mass/empirical formula mass, a positive whole number; the molar mass may come from <i>M</i> = 2 × V.D.',
    say: 'Empirical is the recipe, molecular is the batch — <i>n</i> is the batch size.',
  },
  // pp. 39, 44–45
  {
    topic: 5,
    kind: 'mixup',
    q: 'Formaldehyde and glucose share an empirical formula. Which, and what tells them apart?',
    a: 'CH<sub>2</sub>O. The molar mass tells them apart: 30 for formaldehyde (<i>n</i> = 1), 180 for glucose, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (<i>n</i> = 6)',
    why: 'Ionic compounds (NaCl, CaCl<sub>2</sub>, MgO) have only an empirical formula, the formula unit, never a molecular formula.',
    say: null,
  },
  // pp. 41, 44
  {
    topic: 5,
    kind: 'mistake',
    q: 'Your mole ratio comes out 1 ∶ 1.5. Round it to 1 ∶ 2?',
    a: 'No: a ratio ending in .5, .33 or .25 is real, so multiply the whole set by 2, 3 or 4, here giving 2 ∶ 3. Only rounding noise such as 1.98 → 2 may be ignored',
    why: 'And when a molar mass or vapour density is given, do not stop at the empirical formula: compute <i>n</i> and multiply.',
    say: null,
  },
  // pp. 43–44
  {
    topic: 5,
    kind: 'shortcut',
    q: 'You have found the element masses in a formula problem. The accuracy habit before going on?',
    a: 'Check that the element masses (or percentages) sum back to the total: if they don’t, you have lost an element, often the oxygen you were meant to find by difference. And the “100 g sample” trick turns percentages into grams instantly',
    why: '0.45 g of a hydrocarbon giving 1.32 g of CO<sub>2</sub> and 0.81 g of H<sub>2</sub>O: C 0.36 g + H 0.09 g = 0.45 g, so no oxygen; C ∶ H = 0.03 ∶ 0.09 = 1 ∶ 3, CH<sub>3</sub>.',
    say: null,
  },

  // ── Topic 07 · Stoichiometry & Limiting Reagent ──
  // pp. 46–48, 50
  {
    topic: 6,
    kind: 'remember',
    q: 'The mole method for any stoichiometric calculation?',
    a: 'Balance the equation → convert the given quantity to moles (mass ÷ molar mass, volume ÷ 22.4 L for a gas at STP, or <i>M</i> × <i>V</i> for a solution) → apply the coefficient ratio → convert back to the requested unit',
    why: '50 g of CaCO<sub>3</sub> →<sup>Δ</sup> CaO + CO<sub>2</sub>: 50/100 = 0.50 mol, so 0.50 × 44 = 22 g of CO<sub>2</sub>. Coefficients give the mole ratio, not the mass ratio.',
    say: 'Balance, then mole, then ratio, then back — the four-step spine.',
  },
  // pp. 47–48, 50
  {
    topic: 6,
    kind: 'remember',
    q: 'How do you find the limiting reagent, and what does it decide?',
    a: 'Divide each reactant’s available moles by its stoichiometric coefficient; the smallest quotient is limiting. It runs out first and fixes the product, and excess left = supplied − consumed',
    why: '28 g of N<sub>2</sub> and 9 g of H<sub>2</sub> (N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub>): 1.0/1 = 1.0 against 4.5/3 = 1.5, so N<sub>2</sub> limits; 2.0 mol = 34 g of NH<sub>3</sub> forms and 9 − 6 = 3 g of H<sub>2</sub> is left.',
    say: 'Divide by the coefficient — the one rule for limiting reagent.',
  },
  // pp. 46–47, 49–50
  {
    topic: 6,
    kind: 'mixup',
    q: 'Theoretical yield, actual yield, percentage yield?',
    a: 'Theoretical: the maximum product predicted by the balanced equation and the limiting reagent. Actual: what is really obtained. % yield = (actual yield/theoretical yield) × 100',
    why: '50 g of N<sub>2</sub> and 10 g of H<sub>2</sub> giving 40 g of NH<sub>3</sub>: H<sub>2</sub> limits (5.0/3 = 1.67 < 1.79), theoretical 3.33 mol = 56.7 g, yield 70.6%.',
    say: null,
  },
  // pp. 48, 50
  {
    topic: 6,
    kind: 'mistake',
    q: '2 mol of H<sub>2</sub> and 1.5 mol of O<sub>2</sub> form water. There is more H<sub>2</sub>, so O<sub>2</sub> limits?',
    a: 'No: divide by the coefficients first (2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O): 2/2 = 1 for H<sub>2</sub> against 1.5/1 = 1.5 for O<sub>2</sub>, so H<sub>2</sub> is limiting and 2 mol of water form',
    why: 'Then anchor every product and yield on the limiting reagent, never on the reactant in excess.',
    say: null,
  },
  // pp. 48, 50
  {
    topic: 6,
    kind: 'shortcut',
    q: 'A multi-part limiting-reagent problem. The fast way?',
    a: 'Write each reactant’s moles directly above its coefficient and take the ratio in one glance: the smallest is limiting, and that single number drives every later part — product mass, excess left, yield',
    why: 'For gases at constant <i>T</i>, <i>P</i>, work in litres: in N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub>, 1 L of N<sub>2</sub> needs exactly 3 L of H<sub>2</sub> and yields 2 L of NH<sub>3</sub>.',
    say: null,
  },

  // ── Topic 08 · Concentration Terms ──
  // pp. 52–53, 57
  {
    topic: 7,
    kind: 'remember',
    q: 'Molarity, molality and mole fraction: what does each divide by, and which depend on temperature?',
    a: 'Molarity <i>M</i> = moles of solute/volume of solution (L), mol L<sup>−1</sup>; molality <i>m</i> = moles of solute/mass of solvent (kg), mol kg<sup>−1</sup>; mole fraction <i>x</i><sub>B</sub> = <i>n</i><sub>B</sub>/(<i>n</i><sub>A</sub> + <i>n</i><sub>B</sub>), with <i>x</i><sub>A</sub> + <i>x</i><sub>B</sub> = 1',
    why: 'Volume-based terms (molarity, normality, formality) drift with temperature; mass- or mole-based ones (molality, mole fraction, mass %) do not.',
    say: 'Volume drifts, mass sticks — volume-based terms vary with temperature, mass-based don’t.',
  },
  // pp. 53–54, 56–57
  {
    topic: 7,
    kind: 'remember',
    q: 'The molarity of a solution from its density and mass percent?',
    a: '<i>M</i> = (10 × <i>d</i> × <i>x</i>)/<i>M</i><sub>B</sub>, with <i>d</i> the density in g/mL, <i>x</i> the mass % of solute and <i>M</i><sub>B</sub> its molar mass: take 100 g of solution, which holds <i>x</i> g of solute in 100/<i>d</i> mL',
    why: '49% H<sub>2</sub>SO<sub>4</sub> of density 1.30 g mL<sup>−1</sup>: (10 × 1.30 × 49)/98 = 6.5 M. Mass % knows nothing about volume; only the density bridges the two.',
    say: null,
  },
  // pp. 52–53, 57–58
  {
    topic: 7,
    kind: 'mixup',
    q: 'Molality: per kg of solvent or per kg of solution? And when does molarity equal molality?',
    a: 'Per kg of solvent; molarity is per litre of solution, and mass percent and density use the solution. The two coincide only for very dilute aqueous solutions, where 1 L ≈ 1 kg of water',
    why: 'In general you need the density to convert between them.',
    say: 'Molality = solvent; molarity = solution — watch the denominator.',
  },
  // pp. 54, 56–57
  {
    topic: 7,
    kind: 'mistake',
    q: 'How much water dilutes 100 mL of 2.0 M HCl to 0.50 M? 400 mL?',
    a: 'No, 300 mL: <i>M</i><sub>1</sub><i>V</i><sub>1</sub> = <i>M</i><sub>2</sub><i>V</i><sub>2</sub> gives the final total volume, <i>V</i><sub>2</sub> = (2.0 × 100)/0.50 = 400 mL, so the water added is <i>V</i><sub>2</sub> − <i>V</i><sub>1</sub>',
    why: 'Normality needs the <i>n</i>-factor too: 0.16 M H<sub>2</sub>SO<sub>4</sub> is 0.32 N, not 0.16 N.',
    say: null,
  },
  // pp. 53–54, 57
  {
    topic: 7,
    kind: 'shortcut',
    q: 'A density-based interconversion. Where do you start?',
    a: 'Anchor on a fixed, convenient amount: “1000 g of solvent” for molality problems, “100 g of solution” for mass-% problems. Every other quantity then follows by one multiplication or division',
    why: 'The exact relation <i>m</i> = 1000<i>M</i>/(1000<i>d</i> − <i>M</i> <i>M</i><sub>B</sub>) reads the same way: 1000<i>d</i> g is the mass of a litre of solution and <i>M</i> <i>M</i><sub>B</sub> g the solute in it, so the denominator is the solvent.',
    say: null,
  },

  // ── Additional A · Percentage Purity and Mixture Stoichiometry ──
  // pp. 59–60
  {
    topic: 8,
    kind: 'remember',
    q: 'A 3.00 g sample of silver carbonate, 92% pure, is heated: 2 Ag<sub>2</sub>CO<sub>3</sub> → 4 Ag + 2 CO<sub>2</sub> + O<sub>2</sub>. How do you handle the impurity?',
    a: 'Purify before you mole: 3.00 × 0.92 = 2.76 g = 0.0100 mol (276 g mol<sup>−1</sup>). Then 0.0200 mol Ag = 2.16 g, and 3/2 × 0.0100 = 0.0150 mol of gas = 336 mL at STP',
    why: 'The inert 0.24 g of impurity neither reacts nor appears in the product, but it stays in the boat: the residue is 2.16 + 0.24 = 2.40 g.',
    say: null,
  },
  // pp. 59–61
  {
    topic: 8,
    kind: 'remember',
    q: 'Iron of 80% purity is made from 120 kg of ore that is 90% Fe<sub>2</sub>O<sub>3</sub> (Fe<sub>2</sub>O<sub>3</sub> + 3 C → 2 Fe + 3 CO<sub>2</sub>). At the end, multiply or divide by 0.80?',
    a: 'Divide: 108 kg of Fe<sub>2</sub>O<sub>3</sub> = 0.675 kmol gives 1.35 kmol = 75.6 kg of pure iron, and the crude bar must hold all of it plus impurity: 75.6/0.80 = 94.5 kg',
    why: 'Multiplying gives 60.5 kg, the classic distractor. The chain: impure reactant → pure reactant → theoretical pure product → actual pure product (% yield) → crude product (product purity).',
    say: null,
  },

  // ── Additional B · Gram Equivalents, the Law of Equivalence, and Water Hardness ──
  // pp. 62–64
  {
    topic: 9,
    kind: 'remember',
    q: 'Equivalent mass, and the law of equivalence for a titration?',
    a: '<i>E</i> = <i>M</i>/(<i>n</i>-factor), the <i>n</i>-factor being the basicity or acidity used, the charge on the ion exchanged, or the electrons transferred. Gram-equivalents = mass/<i>E</i> = (<i>n</i>-factor) × moles, and in any complete reaction they are equal: <i>N</i><sub>1</sub><i>V</i><sub>1</sub> = <i>N</i><sub>2</sub><i>V</i><sub>2</sub>',
    why: 'Equivalent mass belongs to the reaction: H<sub>3</sub>PO<sub>4</sub> has <i>E</i> = 98/3 = 32.7 going to Na<sub>3</sub>PO<sub>4</sub>, 98/2 = 49 to Na<sub>2</sub>HPO<sub>4</sub> and 98 to NaH<sub>2</sub>PO<sub>4</sub>.',
    say: null,
  },
  // pp. 62–63
  {
    topic: 9,
    kind: 'remember',
    q: 'Hardness of water “in ppm of CaCO<sub>3</sub>”: what is the convention?',
    a: 'Ca<sup>2+</sup>, Mg<sup>2+</sup> and CaCO<sub>3</sub> all have <i>n</i>-factor 2, so each mole of hardness salt counts as one mole of CaCO<sub>3</sub> (100 g); hardness = mg of CaCO<sub>3</sub> equivalent per kg (or L) of water',
    why: '0.192 mg of Mg<sup>2+</sup> in 100 mL: 8.0 × 10<sup>−6</sup> mol → 0.8 mg of CaCO<sub>3</sub> per 100 mL, 8 mg per litre = 8 ppm. A reporting convention: no CaCO<sub>3</sub> need be present.',
    say: null,
  },

  // ── Additional C · Eudiometry: Stoichiometry in Gas Volumes ──
  // p. 65
  {
    topic: 10,
    kind: 'remember',
    q: 'Per volume of a hydrocarbon C<sub><i>x</i></sub>H<sub><i>y</i></sub> burnt completely, how much O<sub>2</sub> is used and how much CO<sub>2</sub> formed?',
    a: 'C<sub><i>x</i></sub>H<sub><i>y</i></sub> + (<i>x</i> + <i>y</i>/4) O<sub>2</sub> → <i>x</i> CO<sub>2</sub> + (<i>y</i>/2) H<sub>2</sub>O: <i>x</i> volumes of CO<sub>2</sub> and <i>x</i> + <i>y</i>/4 volumes of O<sub>2</sub>, since at the same <i>T</i> and <i>P</i> volume ratios are mole ratios',
    why: '15 mL needing 75 mL of O<sub>2</sub> and giving 60 mL of CO<sub>2</sub>: <i>x</i> = 60/15 = 4, <i>x</i> + <i>y</i>/4 = 75/15 = 5, <i>y</i> = 4, so C<sub>4</sub>H<sub>4</sub>.',
    say: null,
  },
  // pp. 65–66
  {
    topic: 10,
    kind: 'remember',
    q: 'Does the water formed count in the measured gas volumes?',
    a: 'Only as steam (<i>y</i>/2 volumes) when volumes are measured above 100 °C. Cooled to room temperature it is liquid and its volume vanishes; the contraction is then Δ<i>V</i> = <i>V</i>(hydrocarbon) + <i>V</i>(O<sub>2</sub> consumed) − <i>V</i>(CO<sub>2</sub>)',
    why: '10 mL of CH<sub>4</sub> and 50 mL of O<sub>2</sub>, exploded and cooled: 10 mL of CO<sub>2</sub> and 30 mL of unused O<sub>2</sub> remain, 40 mL in all, a contraction of 20 mL.',
    say: null,
  },

  // ── Additional D · What JEE and NEET Actually Ask ──
  // p. 68
  {
    topic: 11,
    kind: 'remember',
    q: 'How is this chapter examined, and which exam owns which share?',
    a: 'As arithmetic, not recall: roughly three-quarters of the previous-year questions are numerical or numerical-flavoured, and JEE Main’s integer-answer format loves it. NEET’s share is conceptual — significant figures, laws, assertion–reason on Dalton — while JEE Main owns the numericals',
    why: 'Combustion analysis, purity stoichiometry and hardness recur across sessions of JEE Main 2021–2025 and NTA 2022.',
    say: null,
  },
  // pp. 68–69
  {
    topic: 11,
    kind: 'mistake',
    q: 'A gas volume is asked at 1 atm and 300 K. Use 22.4 L mol<sup>−1</sup>?',
    a: 'No: once the conditions are not standard, <i>V</i> = <i>nRT</i>/<i>P</i> replaces the 22.4 L shortcut. 18.4 kg of 10% pure dolomite (<i>M</i> = 184) gives 20 mol of CO<sub>2</sub>: 20 × 0.082 × 300 = 492 L',
    why: 'At STP, papers almost always want 22.4 L; one quoting the 1 bar definition wants 22.7 L. The question’s own numbers tell you which.',
    say: null,
  },
];
