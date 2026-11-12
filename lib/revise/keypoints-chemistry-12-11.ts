/**
 * KEY POINTS for Chemistry Class 12, Chapter 11 (The p-Block Elements,
 * Groups 15 to 18).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–06 (the book's Sections 1–6) are 0–5; Topic 07, Worked
 * examples & exam practice (Sections 7–9 and the main What JEE & NEET
 * Actually Ask), is 6, with three points from its worked examples, Common
 * Pitfalls and closing exam notes; Additional topics A–H are 7–14 (G, the
 * multiple-choice drill, and H, the pitfalls and two cheat sheets, give points
 * from their central results); Additional topic I, What JEE and NEET Actually
 * Ask (the supplement's Addendum P), is 15. No point refers to another topic
 * by number.
 *
 * Every fact is from the Master Reference book; the page (the bottom folio) is
 * above each point. The book runs this chapter as one block: Sections 1–6 have
 * no Key Definitions, Cheat Sheet or Pro-Tips of their own. So Remember comes
 * from each section's text; Don't mix up and Common mistakes from that section
 * and the chapter's Common Pitfalls & Pro-Tips that belong to it; Exam
 * shortcuts from the section's quick rules. The chapter prints no memory
 * aids, so `say` is null throughout and the chapter has no memory lines.
 * Additional topics: the addenda's methods, worked examples and practice
 * answers. Additional topic I: its question types and traps. Every volume at
 * STP uses the book's 22.4 L mol<sup>−1</sup>. Significant figures show both
 * values where the book's answer claims more than its data (13.44 L, 1.344 L,
 * 7.35 g, 1.57 g).
 *
 * Where the book's claim is looser than the chemistry, the point is true:
 * the Haber enthalpy as −46.1 kJ per mole of NH<sub>3</sub>, −92.2 kJ for the
 * equation as written (the book prints −46.1 beside the equation in Section 2);
 * nitrogen's catenation as weak (Additional A's "very weak"), not "essentially
 * no catenation"; the basicity order of the EH<sub>3</sub> hydrides not used
 * (its last step is SbH<sub>3</sub> ≥ BiH<sub>3</sub> in NCERT); oxygen's
 * positive states in OF<sub>2</sub> and O<sub>2</sub>F<sub>2</sub> given without
 * "only negative states except"; chlorine's oxidation of SO<sub>2</sub> not used;
 * the halogen oxoacids as chlorine's four and fluorine's one, without "the other
 * halogens form a full family"; fluorine's reaction with water without "alone";
 * helium, neon and argon as forming no stable compounds under ordinary
 * conditions (Additional F's wording), not "no confirmed compounds"; SO<sub>2</sub>
 * bleaching as reduction by nascent hydrogen, without "combines with";
 * black phosphorus without its preparation; ozone's formation as endothermic
 * with no figure (+142 kJ per mole of O<sub>3</sub>, +284 kJ for 3O<sub>2</sub> →
 * 2O<sub>3</sub>); Xe<sup>+</sup>PtF<sub>6</sub><sup>−</sup> as NCERT's formulation
 * of a more complex product (the book's own note, Additional F); PCl<sub>5</sub>
 * as able only to be reduced, not "an oxidising agent only"; aqua regia
 * without "the only common medium"; the PH<sub>3</sub> bond angle by nearly
 * pure p bonding, without worked example 2's lone-pair account.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Formulas,
 * ions and states upright; charges digit first with a real minus
 * ([PCl<sub>6</sub>]<sup>−</sup>, S<sub>4</sub>O<sub>6</sub><sup>2−</sup>); oxidation
 * states with real signs (+5, −3), Roman numerals as printed (Bi(V)). Orbital
 * and hybrid labels upright (2p, 3d<sup>7</sup>, sp<sup>3</sup>d<sup>2</sup>, π*,
 * pπ–pπ, dπ–pπ); <i>n</i> in <i>n</i>s<sup>2</sup> <i>n</i>p<sup>3</sup> italic.
 * Bonds with an en dash (N–N, P–OH, F–F, X–X′), = and ≡ for multiple bonds,
 * ∶N≡N∶ with U+2236; Δ<sub>f</sub><i>H</i>°, Δ<sub>r</sub><i>H</i>°, <i>E</i>°,
 * <i>K</i><sub>a2</sub>, <i>M</i>, <i>x</i>, <i>n</i> italic, p<i>K</i><sub>a</sub>
 * with an upright p. Ratios with ∶. A value is kept with its unit by a
 * no-break space.
 *
 * JOINED (2026-11-07): the Class 11 p-Block (Groups 13–14) now comes first in
 * the one p-Block chapter (content/textbooks/chem-12-11-p-block.ts), so every
 * `topic` below is its index there: this book's Topics 01–07 are 6–12 (shown
 * as Topics 07–13) and its Additional topics A–I are 24–32 (shown as L–T).
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Group 15: The Nitrogen Family ──
  // p. 530
  {
    topic: 6,
    kind: 'remember',
    q: 'Group 15: the valence configuration, and how size, ionisation enthalpy and metallic character run down the group?',
    a: '<i>n</i>s<sup>2</sup> <i>n</i>p<sup>3</sup>: the p subshell is exactly half-filled and extra stable, so Group 15 has distinctly higher ionisation enthalpies than its Group 14 and Group 16 neighbours in the same period. Down the group covalent and ionic radii rise (a large jump from N to P, a small one from As to Bi, where filled d and f subshells contract the size), while ionisation enthalpy and electronegativity fall, so metallic character rises: N and P non-metals, As and Sb metalloids, Bi essentially a metal',
    why: 'The common oxidation states are −3, +3 and +5; down the group −3 fades, and +5 loses stability while +3 gains it (the inert-pair effect), so the only well-characterised Bi(V) compound is BiF<sub>5</sub>.',
    say: null,
  },
  // p. 531
  {
    topic: 6,
    kind: 'remember',
    q: 'Why is nitrogen the odd one out in Group 15?',
    a: 'It is small, highly electronegative and has no valence d orbitals. Small size gives strong pπ–pπ multiple bonds, so dinitrogen is ∶N≡N∶ (one σ, two π) with a bond dissociation enthalpy of 941.4 kJ mol<sup>−1</sup>, inert at room temperature; P, As and Sb are too large and diffuse, and form single σ bonds instead. With only one 2s and three 2p orbitals, nitrogen cannot expand its covalency past four: it forms no pentahalide, so NCl<sub>5</sub> does not exist while PCl<sub>5</sub> and PF<sub>6</sub><sup>−</sup> do',
    why: 'For the same reason nitrogen cannot form the dπ–pπ bond that phosphorus forms in R<sub>3</sub>P=O.',
    say: null,
  },
  // p. 531
  {
    topic: 6,
    kind: 'mixup',
    q: 'Nitrogen or phosphorus: which catenates more?',
    a: 'Phosphorus. The single N–N bond is weaker than the single P–P bond: nitrogen’s short bond forces the lone pairs on the two atoms close together, and their strong lone-pair/lone-pair repulsion destabilises it. Catenation rises from N to P, then falls through As, Sb and Bi as the atoms grow and the bonds weaken; nitrogen’s own catenation is weak, despite the strength of its triple bond in N<sub>2</sub>',
    why: 'Keep the two bonds apart: N≡N, built on pπ–pπ overlap, is among the strongest of any diatomic molecule, while the single N–N bond is unusually weak.',
    say: null,
  },
  // p. 531
  {
    topic: 6,
    kind: 'mistake',
    q: 'PH<sub>3</sub> has the greater molar mass. Does it boil higher than NH<sub>3</sub>?',
    a: 'No: NH<sub>3</sub> has the far higher melting and boiling point. Nitrogen’s small size and high electronegativity make NH<sub>3</sub> extensively hydrogen-bonded in the liquid and solid states; PH<sub>3</sub> molecules are not hydrogen-bonded',
    why: 'Down the group the E–H bond dissociation enthalpy falls, from 389 kJ mol<sup>−1</sup> for N–H to 255 kJ mol<sup>−1</sup> for Sb–H, so thermal stability falls and reducing character rises: NH<sub>3</sub> is only a mild reductant, BiH<sub>3</sub> the strongest in the family.',
    say: null,
  },
  // p. 531
  {
    topic: 6,
    kind: 'shortcut',
    q: 'Group 15 oxides and halides: which are acidic, which more covalent, and what does nitrogen lack? The fast way?',
    a: 'All five elements form E<sub>2</sub>O<sub>3</sub> and E<sub>2</sub>O<sub>5</sub>; the higher oxidation state gives the more acidic oxide, and acidity falls down the group: the E<sub>2</sub>O<sub>3</sub> of N and P purely acidic, of As and Sb amphoteric, Bi<sub>2</sub>O<sub>3</sub> predominantly basic. Every element except nitrogen forms both EX<sub>3</sub> and EX<sub>5</sub>; nitrogen forms only trihalides, and of these only NF<sub>3</sub> is genuinely stable',
    why: 'A pentahalide is more covalent than the trihalide, because the element at +5 polarises the halide ion more strongly than at +3.',
    say: null,
  },

  // ── Topic 02 · Important Compounds of Nitrogen and Phosphorus ──
  // pp. 532, 556
  {
    topic: 7,
    kind: 'remember',
    q: 'The Haber process: the enthalpy, the conditions, and why they are a compromise?',
    a: 'N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g) is exothermic, −46.1 kJ per mole of NH<sub>3</sub> and so −92.2 kJ for the equation as written, and it cuts 4 gas moles to 2: low temperature and high pressure favour ammonia. At low temperature the rate is unacceptably slow, so the plant runs at about 200 atm and 700 K over iron promoted with small amounts of K<sub>2</sub>O and Al<sub>2</sub>O<sub>3</sub>, which speeds the approach to equilibrium. Asked for “the conditions”, state both halves',
    why: 'The product is trigonal pyramidal, nitrogen sp<sup>3</sup> with one lone pair, its ∠HNH of 107.8° squeezed below 109.5° because the lone pair takes more angular space than a bonding pair.',
    say: null,
  },
  // pp. 534, 549
  {
    topic: 7,
    kind: 'remember',
    q: 'White, red and black phosphorus: structure, reactivity and stability?',
    a: 'White: discrete tetrahedral P<sub>4</sub> molecules with a P–P–P angle of only 60°, severely strained, so it is the least stable and most reactive: poisonous, it catches fire in air (white fumes of P<sub>4</sub>O<sub>10</sub>), glows in the dark and is stored under water; soluble in CS<sub>2</sub>, not in water. Red, from white heated at 573 K in an inert atmosphere: a polymer of linked P<sub>4</sub> tetrahedra, odourless, non-poisonous, insoluble in water and CS<sub>2</sub>, no glow, far less reactive. Black: the most thermodynamically stable, not readily oxidised in air. Stability white < red < black',
    why: 'In boiling NaOH under an inert gas, white phosphorus gives phosphine: P<sub>4</sub> + 3NaOH + 3H<sub>2</sub>O → PH<sub>3</sub> + 3NaH<sub>2</sub>PO<sub>2</sub>.',
    say: null,
  },
  // pp. 533, 547
  {
    topic: 7,
    kind: 'mixup',
    q: 'Copper with dilute and with concentrated nitric acid: which gas, and which equation?',
    a: 'Dilute gives NO: 3Cu + 8HNO<sub>3</sub> → 3Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO + 4H<sub>2</sub>O. Concentrated gives NO<sub>2</sub>: Cu + 4HNO<sub>3</sub> → Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO<sub>2</sub> + 2H<sub>2</sub>O. Zinc changes product too, to different ones: dilute acid gives N<sub>2</sub>O (4Zn + 10HNO<sub>3</sub> → 4Zn(NO<sub>3</sub>)<sub>2</sub> + 5H<sub>2</sub>O + N<sub>2</sub>O), concentrated again NO<sub>2</sub>. Concentration changes the product, not just the rate',
    why: 'Concentrated nitric acid attacks almost all metals except gold and platinum, and a passive oxide film protects Cr and Al even from the concentrated acid.',
    say: null,
  },
  // pp. 535, 547
  {
    topic: 7,
    kind: 'mistake',
    q: 'Is PCl<sub>5</sub> a trigonal bipyramidal molecule in every phase?',
    a: 'No, only in the gas and liquid, where it is sp<sup>3</sup>d with three equivalent equatorial P–Cl bonds and two longer axial ones (the axial pairs are repelled more by the three equatorial pairs). The solid is an ionic lattice, [PCl<sub>4</sub>]<sup>+</sup>[PCl<sub>6</sub>]<sup>−</sup>, a tetrahedral cation with an octahedral anion. “The structure of PCl<sub>5</sub>” with no phase named is testing whether you know both',
    why: 'Moisture hydrolyses it in steps, PCl<sub>5</sub> + H<sub>2</sub>O → POCl<sub>3</sub> + 2HCl, then POCl<sub>3</sub> + 3H<sub>2</sub>O → H<sub>3</sub>PO<sub>4</sub> + 3HCl; heat dissociates it reversibly, PCl<sub>5</sub> ⇌ PCl<sub>3</sub> + Cl<sub>2</sub>.',
    say: null,
  },
  // pp. 535, 546
  {
    topic: 7,
    kind: 'shortcut',
    q: 'The basicity of a phosphorus oxoacid from its formula? The fast way?',
    a: 'Count the P–OH groups, never the hydrogens: a P–H hydrogen is bonded to phosphorus, not oxygen, and does not ionise. H<sub>3</sub>PO<sub>2</sub> (one P–OH, two P–H) is monobasic; H<sub>3</sub>PO<sub>3</sub> (two P–OH, one P–H) dibasic; H<sub>3</sub>PO<sub>4</sub> tribasic; H<sub>4</sub>P<sub>2</sub>O<sub>7</sub> and H<sub>4</sub>P<sub>2</sub>O<sub>6</sub> tetrabasic. The acids with P–H bonds are strong reducing agents: H<sub>3</sub>PO<sub>2</sub> reduces silver nitrate to silver',
    why: 'Acids with phosphorus at +3 disproportionate on heating into +5 and −3: 4H<sub>3</sub>PO<sub>3</sub> → 3H<sub>3</sub>PO<sub>4</sub> + PH<sub>3</sub>.',
    say: null,
  },

  // ── Topic 03 · Group 16: The Oxygen Family ──
  // p. 536
  {
    topic: 8,
    kind: 'remember',
    q: 'Group 16: configuration, ionisation enthalpy, electron gain enthalpy and oxidation states?',
    a: '<i>n</i>s<sup>2</sup> <i>n</i>p<sup>4</sup>. Ionisation enthalpy is lower than for Group 15 in the same period, because the half-filled p<sup>3</sup> is the extra-stable configuration and p<sup>4</sup> is not. Oxygen’s electron gain enthalpy is less negative than sulphur’s (the incoming electron is repelled in the compact atom); from sulphur on it becomes less negative down the group. −2 is characteristic but loses stability down the group; the others commonly show +4 and +6, with +6 less stable and +4 more stable down the group (the inert-pair effect)',
    why: 'Oxygen, with no valence d orbitals, has a covalency of at most four and rarely exceeds two, and is +2 in OF<sub>2</sub> and +1 in O<sub>2</sub>F<sub>2</sub>, fluorine being the more electronegative; S, Se and Te expand past four, as in SF<sub>6</sub>.',
    say: null,
  },
  // p. 537
  {
    topic: 8,
    kind: 'remember',
    q: 'Ozone: how is it made, what shape is it, and what makes it an oxidant?',
    a: 'By a silent electric discharge through cold, dry oxygen: the conversion of O<sub>2</sub> to O<sub>3</sub> is endothermic, and a spark would decompose the ozone as fast as it forms. It is bent, about 117°, with two identical O–O bonds of 128 pm: a resonance hybrid of two equivalent forms. Its decomposition to O<sub>2</sub> releases heat and raises entropy, so it is unstable and hands over oxygen readily, O<sub>3</sub> → O<sub>2</sub> + [O]: PbS + 4O<sub>3</sub> → PbSO<sub>4</sub> + 4O<sub>2</sub>; 2I<sup>−</sup> + H<sub>2</sub>O + O<sub>3</sub> → 2OH<sup>−</sup> + I<sub>2</sub> + O<sub>2</sub>',
    why: 'That second reaction, iodine freed from buffered KI and titrated against standard sodium thiosulphate, is the standard way to estimate ozone.',
    say: null,
  },
  // p. 536
  {
    topic: 8,
    kind: 'mixup',
    q: 'Group 16 hydrides: do thermal stability and acid strength run the same way?',
    a: 'No, opposite ways, for one reason. The H–E bond weakens down the group (463 kJ mol<sup>−1</sup> for O–H to 238 kJ mol<sup>−1</sup> for Te–H), so thermal stability falls, H<sub>2</sub>O > H<sub>2</sub>S > H<sub>2</sub>Se > H<sub>2</sub>Te > H<sub>2</sub>Po, while acid strength rises: H<sub>2</sub>S is more acidic than H<sub>2</sub>O, and H<sub>2</sub>Te is the most acidic. Every hydride except water is a reducing agent, more so from H<sub>2</sub>S to H<sub>2</sub>Te',
    why: 'Water is a liquid and H<sub>2</sub>S a gas only because water is extensively hydrogen-bonded; sulphur’s electronegativity is too low to support it.',
    say: null,
  },
  // pp. 536–537
  {
    topic: 8,
    kind: 'mistake',
    q: 'Dioxygen has an even number of electrons. Is it diamagnetic?',
    a: 'No, paramagnetic: molecular orbital theory puts two unpaired electrons in the degenerate π* antibonding orbitals of O<sub>2</sub>',
    why: 'Its reactions are usually strongly exothermic, yet often need a high energy input to start, to overcome the O=O bond dissociation enthalpy of 493.4 kJ mol<sup>−1</sup>.',
    say: null,
  },
  // pp. 536–537
  {
    topic: 8,
    kind: 'shortcut',
    q: 'Oxides: acidic, basic, amphoteric or neutral, at a glance?',
    a: 'Acidic: typically non-metal oxides (SO<sub>2</sub>, CO<sub>2</sub>), and also some high-oxidation-state metal oxides (Mn<sub>2</sub>O<sub>7</sub>, CrO<sub>3</sub>). Basic: Na<sub>2</sub>O, CaO. Amphoteric, reacting with both acid and alkali: Al<sub>2</sub>O<sub>3</sub>. Neutral: CO, NO, N<sub>2</sub>O',
    why: 'Dioxygen itself comes in the laboratory from heating chlorates with MnO<sub>2</sub> (2KClO<sub>3</sub> → 2KCl + 3O<sub>2</sub>), from certain metal oxides or from catalytic decomposition of hydrogen peroxide, and industrially from liquid air.',
    say: null,
  },

  // ── Topic 04 · Important Compounds of Sulphur ──
  // p. 537
  {
    topic: 9,
    kind: 'remember',
    q: 'Rhombic and monoclinic sulphur: which is stable where, and how are they built?',
    a: 'Rhombic (α) sulphur, yellow, m.p. 385.8 K, is the stable form below 369 K; monoclinic (β), m.p. 393 K, above it; at 369 K, the transition temperature, both coexist in equilibrium. Both are built from puckered, crown-shaped S<sub>8</sub> rings, simply packed differently in the crystal',
    why: 'At about 1000 K the vapour is partly S<sub>2</sub>, which, like O<sub>2</sub>, has unpaired electrons in π* orbitals and is paramagnetic.',
    say: null,
  },
  // p. 538
  {
    topic: 9,
    kind: 'remember',
    q: 'Concentrated H<sub>2</sub>SO<sub>4</sub>: its four properties, and a reaction for each?',
    a: 'Low volatility, strong acidity, a strong affinity for water and moderate oxidising power. Non-volatile, it frees more volatile acids from their salts (2MX + H<sub>2</sub>SO<sub>4</sub> → 2HX + M<sub>2</sub>SO<sub>4</sub>); dehydrating, it chars sugar (C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> → 12C + 11H<sub>2</sub>O); hot and concentrated, it oxidises metals and non-metals and is reduced to SO<sub>2</sub>: Cu + 2H<sub>2</sub>SO<sub>4</sub> → CuSO<sub>4</sub> + SO<sub>2</sub> + 2H<sub>2</sub>O, S + 2H<sub>2</sub>SO<sub>4</sub> → 3SO<sub>2</sub> + 2H<sub>2</sub>O',
    why: 'In water it ionises in two steps, the first essentially complete (<i>K</i><sub>a1</sub> > 10, very large) and the second far less so (<i>K</i><sub>a2</sub> = 1.2 × 10<sup>−2</sup>).',
    say: null,
  },
  // pp. 538, 547
  {
    topic: 9,
    kind: 'mixup',
    q: 'SO<sub>2</sub> and Cl<sub>2</sub> both bleach. Which by reduction, which by oxidation, and which lasts?',
    a: 'Moist SO<sub>2</sub> bleaches by reduction: it releases nascent hydrogen (SO<sub>2</sub> + 2H<sub>2</sub>O → H<sub>2</sub>SO<sub>4</sub> + 2[H]), which reduces the coloured matter to a colourless form, often unstable, which air (an oxidant) can turn back, so the bleaching is temporary. Cl<sub>2</sub> bleaches by oxidation: Cl<sub>2</sub> + H<sub>2</sub>O → HCl + HOCl, then HOCl → HCl + [O], and the nascent oxygen destroys the chromophore outright, so the bleaching is permanent',
    why: 'The same reducing power is SO<sub>2</sub>’s test: moist, it turns Fe<sup>3+</sup> into Fe<sup>2+</sup> and decolourises acidified KMnO<sub>4</sub>.',
    say: null,
  },
  // p. 538
  {
    topic: 9,
    kind: 'mistake',
    q: 'In the Contact process, is the SO<sub>3</sub> absorbed in water?',
    a: 'No: in concentrated H<sub>2</sub>SO<sub>4</sub>, giving oleum, SO<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub> → H<sub>2</sub>S<sub>2</sub>O<sub>7</sub>, which is then diluted with water as a final, separate step. Passing SO<sub>3</sub> straight into water produces a dense acid mist that is difficult to condense',
    why: 'The three steps: burn sulphur or roast a sulphide ore to SO<sub>2</sub>, oxidise it to SO<sub>3</sub> over V<sub>2</sub>O<sub>5</sub>, then absorb the SO<sub>3</sub> to make oleum.',
    say: null,
  },
  // p. 538
  {
    topic: 9,
    kind: 'shortcut',
    q: 'Low temperature favours the yield of SO<sub>3</sub>. Why is the converter run at about 720 K?',
    a: '2SO<sub>2</sub> + O<sub>2</sub> → 2SO<sub>3</sub> over V<sub>2</sub>O<sub>5</sub>, Δ<sub>r</sub><i>H</i>° = −196.6 kJ mol<sup>−1</sup>, is exothermic and reduces the gas volume, so low temperature and high pressure favour the yield; but lower than about 720 K (at 2 bar) the rate is unacceptable. Thermodynamics sets the ideal, kinetics the working temperature',
    why: 'It is the same tension as in the Haber process, run at about 700 K for the same reason.',
    say: null,
  },

  // ── Topic 05 · Group 17: The Halogens ──
  // p. 539
  {
    topic: 10,
    kind: 'remember',
    q: 'The halogens: radius, ionisation enthalpy, electronegativity and electron gain enthalpy?',
    a: '<i>n</i>s<sup>2</sup><i>n</i>p<sup>5</sup>, one electron short of a noble gas. Each has the smallest atomic radius in its period, radii rising down the group; ionisation enthalpy is very high and falls down the group; electronegativity is the highest of any group, fluorine the most electronegative element of all. Electron gain enthalpies are the most negative in each period, but chlorine’s (−349 kJ mol<sup>−1</sup>) is more negative than fluorine’s (−333 kJ mol<sup>−1</sup>): in magnitude, Cl > F > Br > I',
    why: 'Fluorine’s very small 2p orbitals are already so electron-dense that the incoming electron meets strong inter-electronic repulsion, offsetting part of the energy released.',
    say: null,
  },
  // p. 540
  {
    topic: 10,
    kind: 'remember',
    q: 'Chlorine with cold dilute and with hot concentrated NaOH, and with dry slaked lime?',
    a: 'Cold and dilute: Cl<sub>2</sub> + 2NaOH → NaCl + NaOCl + H<sub>2</sub>O (chloride and hypochlorite). Hot and concentrated: 3Cl<sub>2</sub> + 6NaOH → 5NaCl + NaClO<sub>3</sub> + 3H<sub>2</sub>O (chloride and chlorate). Both are disproportionations. Dry slaked lime gives bleaching powder: 2Ca(OH)<sub>2</sub> + 2Cl<sub>2</sub> → Ca(OCl)<sub>2</sub> + CaCl<sub>2</sub> + 2H<sub>2</sub>O',
    why: 'Chlorine itself comes from oxidising concentrated HCl, MnO<sub>2</sub> + 4HCl → MnCl<sub>2</sub> + Cl<sub>2</sub> + 2H<sub>2</sub>O, and industrially from the Deacon process or, most commonly, the electrolysis of brine.',
    say: null,
  },
  // pp. 539, 547
  {
    topic: 10,
    kind: 'mixup',
    q: 'Bond dissociation enthalpy and electron gain enthalpy: which halogen order is which?',
    a: 'X–X bond enthalpy: Cl<sub>2</sub> > Br<sub>2</sub> > F<sub>2</sub> > I<sub>2</sub> (242.6, 192.8, 158.8, 151.1 kJ mol<sup>−1</sup>), F<sub>2</sub> slotting between Br<sub>2</sub> and I<sub>2</sub> because the lone pairs on its two close-set atoms repel across the short bond. Electron gain magnitude: Cl > F > Br > I, because the incoming electron is repelled in fluorine’s compact 2p orbitals. One cause, small size; two different orders',
    why: 'Oxidising power is the plain order, F<sub>2</sub> > Cl<sub>2</sub> > Br<sub>2</sub> > I<sub>2</sub> (<i>E</i>° = 2.87, 1.36, 1.09, 0.54 V), because fluorine’s weak bond and the very high hydration enthalpy of F<sup>−</sup> outweigh its smaller electron gain.',
    say: null,
  },
  // pp. 540, 547
  {
    topic: 10,
    kind: 'mistake',
    q: 'Fluorine is the most electronegative halogen. Is HF the strongest hydrohalic acid?',
    a: 'No, the weakest: HF < HCl < HBr < HI. HF (p<i>K</i><sub>a</sub> ≈ 3.2) has by far the strongest bond, H–F 574 kJ mol<sup>−1</sup>, hard to break heterolytically in water, and it hydrogen-bonds strongly in solution, which suppresses ionisation further. Bond energy and hydrogen bonding decide here, not electronegativity',
    why: 'The H–X bond enthalpy falls 574, 432, 363, 295 kJ mol<sup>−1</sup> from HF to HI, and the thermal stability of the hydrogen halide falls with it.',
    say: null,
  },
  // p. 541
  {
    topic: 10,
    kind: 'shortcut',
    q: 'Interhalogens XX′<sub><i>n</i></sub>: which atom is central, what shapes, and what does water do?',
    a: 'X is the larger, more electropositive halogen, <i>n</i> = 1, 3, 5, 7, and a bigger size ratio fits more atoms: hence IF<sub>7</sub>. Shapes by VSEPR: XX′<sub>3</sub> (ClF<sub>3</sub>, BrF<sub>3</sub>) bent T-shaped; XX′<sub>5</sub> (IF<sub>5</sub>, BrF<sub>5</sub>) square pyramidal; IF<sub>7</sub> pentagonal bipyramidal. Except for fluorine they are more reactive than the parent halogens, the X–X′ bond being weaker than X–X. Water gives the halide of the smaller atom and an oxoacid of the larger: XX′ + H<sub>2</sub>O → HX′ + HOX',
    why: 'Fluorine, with no accessible d orbitals, forms a single oxoacid, HOF, while chlorine’s strengthen with its oxidation state, HOCl < HClO<sub>2</sub> < HClO<sub>3</sub> < HClO<sub>4</sub>, as each added X=O pulls electron density from the O–H bond.',
    say: null,
  },

  // ── Topic 06 · Group 18: The Noble Gases ──
  // pp. 541, 543
  {
    topic: 11,
    kind: 'remember',
    q: 'Why are the noble gases so unreactive, and why do they boil so low?',
    a: '<i>n</i>s<sup>2</sup><i>n</i>p<sup>6</sup> (helium 1s<sup>2</sup>) is a closed shell: exceptionally high ionisation enthalpies and large positive electron gain enthalpies, so no incentive to lose or gain an electron. The only significant interatomic force is weak London dispersion, so melting and boiling points are extremely low; helium’s, 4.2 K, is the lowest of any known substance',
    why: 'Hence helium as the liquid cryogen for the superconducting magnets of NMR and MRI and, because of its very low blood solubility, as the diluent for oxygen in deep-sea diving.',
    say: null,
  },
  // pp. 541–542, 575
  {
    topic: 11,
    kind: 'remember',
    q: 'What led Bartlett to the first noble-gas compound, and why is xenon the active one?',
    a: 'In 1962 he noticed that the first ionisation enthalpy of O<sub>2</sub> (1175 kJ mol<sup>−1</sup>) almost matches xenon’s (1170 kJ mol<sup>−1</sup>). Having made O<sub>2</sub><sup>+</sup>PtF<sub>6</sub><sup>−</sup>, he reasoned PtF<sub>6</sub> should oxidise xenon too, and obtained Xe<sup>+</sup>PtF<sub>6</sub><sup>−</sup> (as NCERT formulates it; later work showed the product to be more complex). Xenon’s ionisation enthalpy, the lowest in the group besides radon’s, is low enough for fluorine and oxygen to pull electron density from it',
    why: 'Krypton forms only a handful of compounds, chiefly KrF<sub>2</sub>; helium, neon and argon form no stable compounds under ordinary conditions.',
    say: null,
  },
  // p. 542
  {
    topic: 11,
    kind: 'mixup',
    q: 'A xenon fluoride with a fluoride-ion acceptor, and with a fluoride-ion donor: cation or anion?',
    a: 'With an acceptor it gives a cation: XeF<sub>2</sub> + PF<sub>5</sub> → [XeF]<sup>+</sup>[PF<sub>6</sub>]<sup>−</sup>. With a donor it gives a fluoroanion: XeF<sub>6</sub> + MF → M<sup>+</sup>[XeF<sub>7</sub>]<sup>−</sup> (M = Na, K, Rb, Cs)',
    why: 'All three fluorides come from the elements, the Xe∶F<sub>2</sub> ratio deciding: XeF<sub>2</sub> with Xe in excess (673 K, 1 bar), XeF<sub>4</sub> at 1∶5 (873 K, 7 bar), XeF<sub>6</sub> at 1∶20 (573 K, 60–70 bar).',
    say: null,
  },
  // pp. 542, 577
  {
    topic: 11,
    kind: 'mistake',
    q: 'XeF<sub>6</sub> + H<sub>2</sub>O → XeOF<sub>4</sub> + 2HF looks like a decomposition. Is it a redox reaction?',
    a: 'No: xenon stays at +6 and every other oxidation state is unchanged on both sides. The same holds for XeF<sub>6</sub> + 2H<sub>2</sub>O → XeO<sub>2</sub>F<sub>2</sub> + 4HF and for complete hydrolysis, XeF<sub>6</sub> + 3H<sub>2</sub>O → XeO<sub>3</sub> + 6HF',
    why: 'XeO<sub>3</sub> is a colourless, dangerously explosive solid; XeOF<sub>4</sub> a colourless, volatile liquid.',
    say: null,
  },
  // pp. 542, 547
  {
    topic: 11,
    kind: 'shortcut',
    q: 'The shapes of XeF<sub>2</sub>, XeF<sub>4</sub>, XeF<sub>6</sub>, XeO<sub>3</sub>, XeOF<sub>4</sub> and XeO<sub>4</sub>, fast?',
    a: 'Count xenon’s lone pairs, then name the shape. XeF<sub>2</sub>: 3 lone pairs, sp<sup>3</sup>d, linear. XeF<sub>4</sub>: 2, sp<sup>3</sup>d<sup>2</sup>, square planar. XeF<sub>6</sub>: 1, sp<sup>3</sup>d<sup>3</sup>, distorted octahedral. XeO<sub>3</sub>: 1, sp<sup>3</sup>, pyramidal. XeOF<sub>4</sub>: 1, sp<sup>3</sup>d<sup>2</sup>, square pyramidal. XeO<sub>4</sub>: 0, sp<sup>3</sup>, tetrahedral. Along the fluorides, more fluorines and fewer lone pairs step the shape from linear to square planar to distorted octahedral',
    why: 'XeF<sub>6</sub> has seven electron domains, six bonding pairs and one lone pair, and the lone pair pushes the six fluorines out of a perfect octahedron.',
    say: null,
  },

  // ── Topic 07 · Worked examples & exam practice ──
  // pp. 543–545
  {
    topic: 12,
    kind: 'remember',
    q: 'At STP (273 K and 1 atm, 22.4 L mol<sup>−1</sup>), what volume of gas do 19.05 g of copper give with dilute and with concentrated HNO<sub>3</sub>, and 4.9 g of KClO<sub>3</sub> on heating?',
    a: 'Cu: 19.05/63.5 = 0.300 mol. Dilute: 3Cu → 2NO, 0.200 mol, 4.48 L. Concentrated: Cu → 2NO<sub>2</sub>, 0.600 mol, 13.44 L (13.4 L to three significant figures): the concentration changes both the gas and its amount. KClO<sub>3</sub>: 4.9/122.5 = 0.0400 mol, and 2KClO<sub>3</sub> → 2KCl + 3O<sub>2</sub> gives 0.0600 mol O<sub>2</sub>, 1.344 L (1.3 L to two significant figures)',
    why: '620 g of white phosphorus is 5.00 mol of P<sub>4</sub>, and P<sub>4</sub> + 10Cl<sub>2</sub> → 4PCl<sub>5</sub> gives 20.0 mol, 4170 g, of PCl<sub>5</sub> (<i>M</i> = 208.5).',
    say: null,
  },
  // pp. 544, 546
  {
    topic: 12,
    kind: 'mistake',
    q: 'H<sub>3</sub>PO<sub>2</sub> has three hydrogens. Does 100 mL of 0.05 M H<sub>3</sub>PO<sub>2</sub> need 150 mL of 0.1 M NaOH?',
    a: 'No, 50 mL. H<sub>3</sub>PO<sub>2</sub> has one P–OH group and two P–H bonds, and only the P–OH proton ionises, so it is monobasic: 5.0 × 10<sup>−3</sup> mol of acid needs 5.0 × 10<sup>−3</sup> mol of NaOH. 150 mL treats it as tribasic, from the formula alone',
    why: 'Given only a formula and asked for basicity, recall the structure and count P–OH groups first: H<sub>3</sub>PO<sub>4</sub> is the clearest case where basicity equals the subscript on H.',
    say: null,
  },
  // pp. 548, 550
  {
    topic: 12,
    kind: 'remember',
    q: 'Which member breaks each Group 15–18 trend, and what is the reason?',
    a: 'Nitrogen breaks the halide-expansion trend, with no pentahalide (no d orbitals); fluorine has the anomalously weak F–F bond (lone-pair repulsion) and a less negative electron gain enthalpy than chlorine (repulsion in its compact 2p); oxygen breaks the hydride boiling-point trend (hydrogen bonding); and concentration itself changes the product of nitric acid with copper. Examiners state a trend, then ask for the member that breaks it: learn the reason, not just the exception',
    why: 'Assertion “HF is the weakest hydrohalic acid”, reason “fluorine is the most electronegative halogen”: both are true, but the reason does not explain the assertion; bond strength and hydrogen bonding do.',
    say: null,
  },

  // ── Additional A · Group 15: Hydride Data, Nitrogen versus Phosphorus, and the Oxides of Nitrogen ──
  // pp. 551–552
  {
    topic: 24,
    kind: 'remember',
    q: 'The Group 15 hydrides by numbers: boiling point, bond angle and stability?',
    a: 'Boiling point (K): NH<sub>3</sub> 238.5, PH<sub>3</sub> 185.5, AsH<sub>3</sub> 210.6, SbH<sub>3</sub> 254.6, BiH<sub>3</sub> 290; NH<sub>3</sub> boils 53 K above PH<sub>3</sub> because it is hydrogen-bonded. ∠HEH: 107.8°, 93.6°, 91.8°, 91.3°, collapsing towards 90° as the bonding from P down uses nearly pure p orbitals. Δ<sub>f</sub><i>H</i>° climbs from −46.1 kJ mol<sup>−1</sup> (NH<sub>3</sub>) to +278 kJ mol<sup>−1</sup> (BiH<sub>3</sub>) and the E–H bond enthalpy falls from 389 to 255 kJ mol<sup>−1</sup> (SbH<sub>3</sub>): less stable, more reducing',
    why: 'When PH<sub>3</sub> takes a proton its lone pair becomes a bonding pair, so ∠HPH opens from 93.6° to the tetrahedral 109.5° in PH<sub>4</sub><sup>+</sup>.',
    say: null,
  },
  // pp. 553–554
  {
    topic: 24,
    kind: 'remember',
    q: 'The oxides of nitrogen: which are paramagnetic, which acidic, and why does NO<sub>2</sub> dimerise?',
    a: 'Only the odd-electron NO (11 valence electrons) and NO<sub>2</sub> (17) are paramagnetic. NO’s eleventh electron sits in a π* orbital, cutting the bond order from 3 (in N<sub>2</sub> and NO<sup>+</sup>) to 2.5 and lengthening the bond, 115 pm against 106 pm in NO<sup>+</sup>. NO<sub>2</sub> pairs up into even-electron, colourless N<sub>2</sub>O<sub>4</sub>, 2NO<sub>2</sub> ⇌ N<sub>2</sub>O<sub>4</sub>, cooling favouring the dimer. N<sub>2</sub>O and NO are neutral; N<sub>2</sub>O<sub>3</sub> and N<sub>2</sub>O<sub>5</sub> are the anhydrides of HNO<sub>2</sub> and HNO<sub>3</sub>; NO<sub>2</sub> is a mixed anhydride, 2NO<sub>2</sub> + H<sub>2</sub>O → HNO<sub>2</sub> + HNO<sub>3</sub>',
    why: 'The O–N–O angle falls with each lone-pair domain: NO<sub>2</sub><sup>+</sup> (sp, 180°) > NO<sub>2</sub> (sp<sup>2</sup>, 134°, one odd electron) > NO<sub>2</sub><sup>−</sup> (sp<sup>2</sup>, under 120°, one lone pair).',
    say: null,
  },

  // ── Additional B · Ammonia and Nitric Acid in Depth ──
  // pp. 557–559
  {
    topic: 25,
    kind: 'remember',
    q: 'Nitric acid as an oxidant: electrons gained per product, and the equivalent mass of HNO<sub>3</sub> for each?',
    a: 'Nitrogen starts at +5. To NO<sub>2</sub> (+4): 1 electron per molecule; to NO (+2): 3; to N<sub>2</sub>O (+1): 8, two N at 4 each; to NH<sub>4</sub><sup>+</sup> (−3): 8. So, with <i>M</i> = 63, the equivalent mass is 63 to NO<sub>2</sub>, 21 to NO and 15.75 to N<sub>2</sub>O. To balance, electrons per metal atom against electrons per product fix metal∶product, and HNO<sub>3</sub> = nitrate in the salt + nitrate reduced: 4Zn + 10HNO<sub>3</sub> → 4Zn(NO<sub>3</sub>)<sub>2</sub> + N<sub>2</sub>O + 5H<sub>2</sub>O',
    why: '6.35 g of copper in concentrated acid gives 0.200 mol of NO<sub>2</sub>, 4.48 L at 273 K and 1 atm; of the 4 HNO<sub>3</sub> per Cu, 2 end as nitrate in the salt and 2 are reduced, so 0.200 mol acts as the oxidant.',
    say: null,
  },
  // p. 556
  {
    topic: 25,
    kind: 'remember',
    q: 'The Haber enthalpy read correctly, and how much HNO<sub>3</sub> does the Ostwald process make from 17 g of NH<sub>3</sub>?',
    a: '−46.1 kJ is Δ<sub>f</sub><i>H</i>° per mole of NH<sub>3</sub>; N<sub>2</sub> + 3H<sub>2</sub> ⇌ 2NH<sub>3</sub> makes two moles, so it releases 92.2 kJ per mole of reaction as written. A catalyst speeds the approach to equilibrium but never raises the yield. With the NO recycled, the Ostwald process nets NH<sub>3</sub> + 2O<sub>2</sub> → HNO<sub>3</sub> + H<sub>2</sub>O, so 17 g of NH<sub>3</sub> ultimately gives 63 g of HNO<sub>3</sub>',
    why: 'Ammonia with chlorine depends on which is in excess: 8NH<sub>3</sub> + 3Cl<sub>2</sub> → N<sub>2</sub> + 6NH<sub>4</sub>Cl with excess NH<sub>3</sub>, NH<sub>3</sub> + 3Cl<sub>2</sub> → NCl<sub>3</sub> + 3HCl with excess Cl<sub>2</sub>.',
    say: null,
  },

  // ── Additional C · Phosphorus: Allotropes, Phosphine, the Chlorides and the Oxoacids ──
  // pp. 561–562
  {
    topic: 26,
    kind: 'remember',
    q: 'The phosphorus oxoacids: which carry P–H, P–P or P–O–P, and how much NaOH does each need?',
    a: 'P–H: H<sub>3</sub>PO<sub>2</sub> (two; basicity 1), H<sub>3</sub>PO<sub>3</sub> (one; 2) and H<sub>4</sub>P<sub>2</sub>O<sub>5</sub> (two, with P–O–P; 2). P–P: H<sub>4</sub>P<sub>2</sub>O<sub>6</sub> (4). P–O–P alone: H<sub>4</sub>P<sub>2</sub>O<sub>7</sub> (4) and the ring (HPO<sub>3</sub>)<sub>3</sub> (3); H<sub>3</sub>PO<sub>4</sub> has none (3). An acid with P below +5 has P–H or P–P, never both. NaOH = basicity × moles of acid: 100 mL of 0.10 M H<sub>3</sub>PO<sub>2</sub>, H<sub>3</sub>PO<sub>3</sub> or H<sub>3</sub>PO<sub>4</sub> needs 100, 200 or 300 mL of 0.10 M NaOH',
    why: 'Heated, 8.2 g (0.100 mol) of H<sub>3</sub>PO<sub>3</sub> disproportionates, 4H<sub>3</sub>PO<sub>3</sub> → 3H<sub>3</sub>PO<sub>4</sub> + PH<sub>3</sub>, into 0.85 g of PH<sub>3</sub> and 7.35 g of H<sub>3</sub>PO<sub>4</sub> (7.4 g to two significant figures).',
    say: null,
  },
  // pp. 560–561
  {
    topic: 26,
    kind: 'remember',
    q: 'PCl<sub>3</sub> or PCl<sub>5</sub>: what does each give with water and with ethanol, and why are PCl<sub>5</sub>’s axial bonds longer?',
    a: 'PCl<sub>3</sub> + 3H<sub>2</sub>O → H<sub>3</sub>PO<sub>3</sub> + 3HCl; 3C<sub>2</sub>H<sub>5</sub>OH + PCl<sub>3</sub> → 3C<sub>2</sub>H<sub>5</sub>Cl + H<sub>3</sub>PO<sub>3</sub>. PCl<sub>5</sub> + H<sub>2</sub>O → POCl<sub>3</sub> + 2HCl, then on to H<sub>3</sub>PO<sub>4</sub>; C<sub>2</sub>H<sub>5</sub>OH + PCl<sub>5</sub> → C<sub>2</sub>H<sub>5</sub>Cl + POCl<sub>3</sub> + HCl. In PCl<sub>5</sub> each axial pair has three neighbours at 90°, each equatorial pair two at 90° and two at 120°, so the axial pairs are repelled more and their bonds lengthen (equatorial P–Cl 202 pm, axial longer)',
    why: 'With P already at +5, PCl<sub>5</sub> can only be reduced, to PCl<sub>3</sub>: 2Ag + PCl<sub>5</sub> → 2AgCl + PCl<sub>3</sub>.',
    say: null,
  },

  // ── Additional D · Group 16: Data, Ozone, Sulphur and its Oxoacids ──
  // pp. 566, 568
  {
    topic: 27,
    kind: 'remember',
    q: 'The oxidation state of sulphur in its oxoacids and in tetrathionate?',
    a: 'H<sub>2</sub>SO<sub>3</sub> +4; H<sub>2</sub>SO<sub>4</sub> and H<sub>2</sub>S<sub>2</sub>O<sub>7</sub> (S–O–S bridge) +6; H<sub>2</sub>S<sub>2</sub>O<sub>6</sub> (S–S bond) +5; H<sub>2</sub>S<sub>2</sub>O<sub>3</sub> (S–S bond) an average +2, one S at +6 and the terminal S at −2 (counting the terminal S like the O it replaces; equal sharing of the S–S bond gives +5 and −1). The peroxo acids H<sub>2</sub>SO<sub>5</sub> and H<sub>2</sub>S<sub>2</sub>O<sub>8</sub> stay at +6, because the two peroxide oxygens are at −1 (for H<sub>2</sub>S<sub>2</sub>O<sub>8</sub>, 2 + 2<i>x</i> + 6(−2) + 2(−1) = 0). S<sub>4</sub>O<sub>6</sub><sup>2−</sup>: 4<i>x</i> − 12 = −2, an average +2.5 (two end S at +5, two bridging S at 0)',
    why: 'So 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> + I<sub>2</sub> → S<sub>4</sub>O<sub>6</sub><sup>2−</sup> + 2I<sup>−</sup> balances: sulphur rises from +8 to +10 in all, two electrons, matching I<sub>2</sub> + 2e<sup>−</sup> → 2I<sup>−</sup>.',
    say: null,
  },
  // pp. 567–568, 583
  {
    topic: 27,
    kind: 'remember',
    q: 'What does an oleum label such as 104.5% mean, and how much free SO<sub>3</sub> is in an oleum labelled 118%?',
    a: '100 g of the oleum gives 104.5 g of pure H<sub>2</sub>SO<sub>4</sub> on adding just enough water, by SO<sub>3</sub> + H<sub>2</sub>O → H<sub>2</sub>SO<sub>4</sub> (80 + 18 = 98): 20% free SO<sub>3</sub> is 0.25 mol, which takes 4.5 g of water and gives 24.5 g of acid, 80 + 24.5 = 104.5 g. For 118%, the 18 g (1 mol) of water converts 80 g of SO<sub>3</sub>, so 80% free SO<sub>3</sub>. 122.5% is the limit, pure SO<sub>3</sub>',
    why: 'In 0.010 M H<sub>2</sub>SO<sub>4</sub>, <i>K</i><sub>a2</sub> = 1.2 × 10<sup>−2</sup> is comparable to the concentration, so [H<sup>+</sup>] = 0.01452 M and pH ≈ 1.84, not the 1.70 of two complete ionisations.',
    say: null,
  },

  // ── Additional E · Group 17: Why Fluorine Differs, Chlorine, Interhalogens and the Oxoacids ──
  // pp. 570, 573
  {
    topic: 28,
    kind: 'remember',
    q: 'Fluorine’s electron gain is less negative than chlorine’s. Why is F<sub>2</sub> still the stronger oxidant?',
    a: 'Reducing X<sub>2</sub>(g) to X<sup>−</sup>(aq) sums ½Δ<sub>diss</sub><i>H</i> + Δ<sub>eg</sub><i>H</i> + Δ<sub>hyd</sub><i>H</i>: for F, +79.4 − 333 − 515 = −768.6 kJ mol<sup>−1</sup>; for Cl, +121.3 − 349 − 381 = −608.7 kJ mol<sup>−1</sup>. Fluorine’s weak F–F bond and the very high hydration enthalpy of the small F<sup>−</sup> outweigh the 16 kJ mol<sup>−1</sup> by which its electron gain is less negative, so its sum is about 160 kJ mol<sup>−1</sup> more negative and its <i>E</i>° the highest',
    why: 'With water F<sub>2</sub> gives oxygen, 2F<sub>2</sub> + 2H<sub>2</sub>O → 4H<sup>+</sup> + 4F<sup>−</sup> + O<sub>2</sub>; Cl<sub>2</sub> and Br<sub>2</sub> give HX + HOX; and for iodine the reverse runs in acid, 4I<sup>−</sup> + 4H<sup>+</sup> + O<sub>2</sub> → 2I<sub>2</sub> + 2H<sub>2</sub>O.',
    say: null,
  },
  // pp. 572–573
  {
    topic: 28,
    kind: 'remember',
    q: 'Shapes from pair counting: ClF<sub>3</sub>, IF<sub>5</sub>, IF<sub>7</sub>, ICl<sub>2</sub><sup>−</sup> and ICl<sub>4</sub><sup>−</sup>?',
    a: 'Pairs = (7 + <i>n</i>)/2, with one more electron for a negative charge. ClF<sub>3</sub>: 5 pairs, 3 bonding and 2 lone, both equatorial: bent T-shaped, sp<sup>3</sup>d. IF<sub>5</sub>: 6 pairs, 5 and 1: square pyramidal, sp<sup>3</sup>d<sup>2</sup>. IF<sub>7</sub>: 7 pairs, none lone: pentagonal bipyramidal, sp<sup>3</sup>d<sup>3</sup>. I<sub>3</sub><sup>−</sup> and ICl<sub>2</sub><sup>−</sup>: 5 pairs, 3 lone, all equatorial: linear. ICl<sub>4</sub><sup>−</sup>: 6 pairs, 2 lone: square planar',
    why: 'Hydrolysis gives the hydrogen halide of the smaller halogen and an oxo-anion of the larger at its original oxidation state, so none is redox: ClF<sub>3</sub> + 2H<sub>2</sub>O → HClO<sub>2</sub> + 3HF, IF<sub>5</sub> + 3H<sub>2</sub>O → HIO<sub>3</sub> + 5HF.',
    say: null,
  },

  // ── Additional F · Group 18: Xenon Compounds from VSEPR ──
  // pp. 575–576, 582
  {
    topic: 29,
    kind: 'remember',
    q: 'How are xenon’s lone pairs counted, and which iodine species share the xenon compounds’ shapes?',
    a: 'Xe has 8 valence electrons: 1 goes to each Xe–F bond and 2 to each Xe=O, and half of what is left gives the lone pairs (XeOF<sub>4</sub>: 8 − 2 − 4 = 2, one lone pair). Equal valence-electron counts and atom numbers mean the same shape: XeF<sub>2</sub> 22, as I<sub>3</sub><sup>−</sup>; XeF<sub>4</sub> 36, as ICl<sub>4</sub><sup>−</sup>; XeF<sub>6</sub> 50, as IF<sub>6</sub><sup>−</sup>; XeO<sub>3</sub> 26, as IO<sub>3</sub><sup>−</sup> and ClO<sub>3</sub><sup>−</sup>; XeOF<sub>4</sub> 42, as IF<sub>5</sub>',
    why: 'XeO<sub>2</sub>F<sub>2</sub> (4 bonding domains and 1 lone pair) is see-saw, sp<sup>3</sup>d; XeF<sub>2</sub>, XeF<sub>4</sub> and XeO<sub>4</sub> are non-polar by symmetry, while XeO<sub>3</sub> and XeOF<sub>4</sub> are polar.',
    say: null,
  },
  // pp. 577, 580
  {
    topic: 29,
    kind: 'mistake',
    q: 'Is every hydrolysis of a xenon fluoride free of redox?',
    a: 'No: XeF<sub>2</sub> and XeF<sub>4</sub> hydrolyse with redox, XeF<sub>6</sub> without. 2XeF<sub>2</sub> + 2H<sub>2</sub>O → 2Xe + 4HF + O<sub>2</sub> (Xe +2 → 0, O −2 → 0). 6XeF<sub>4</sub> + 12H<sub>2</sub>O → 4Xe + 2XeO<sub>3</sub> + 24HF + 3O<sub>2</sub>: four Xe fall from +4 to 0 (16 electrons gained), two rise to +6 (4 lost) and six O rise from −2 to 0 (12 lost). XeF<sub>6</sub> to XeO<sub>3</sub>, XeOF<sub>4</sub> or XeO<sub>2</sub>F<sub>2</sub> keeps Xe at +6',
    why: 'Silica also takes XeF<sub>6</sub> to the oxyfluoride without redox: 2XeF<sub>6</sub> + SiO<sub>2</sub> → 2XeOF<sub>4</sub> + SiF<sub>4</sub>.',
    say: null,
  },

  // ── Additional G · Multiple-Choice Drill with Distractor Analysis ──
  // pp. 534, 578–579
  {
    topic: 30,
    kind: 'mixup',
    q: 'The brown-ring complex [Fe(H<sub>2</sub>O)<sub>5</sub>(NO)]<sup>2+</sup>: the oxidation state of iron and its spin-only moment, and what do the wrong options assume?',
    a: 'Counting NO as NO<sup>+</sup>, <i>x</i> + 1 = +2 gives Fe(+1), 3d<sup>7</sup> with three unpaired electrons in the high-spin arrangement: √15 ≈ 3.87 BM. The distractors: +2 with 4.90 BM reads it as an ordinary high-spin Fe<sup>2+</sup> (d<sup>6</sup>); +3 with 5.92 BM as high-spin Fe<sup>3+</sup> (d<sup>5</sup>); +1 with 1.73 BM has the right state but forces a low-spin d<sup>7</sup> with one unpaired electron',
    why: 'The ring forms where concentrated H<sub>2</sub>SO<sub>4</sub>, poured down the side of the tube, meets the nitrate solution with fresh FeSO<sub>4</sub>: NO<sub>3</sub><sup>−</sup> + 3Fe<sup>2+</sup> + 4H<sup>+</sup> → NO + 3Fe<sup>3+</sup> + 2H<sub>2</sub>O, and the NO then binds to another Fe<sup>2+</sup>.',
    say: null,
  },
  // p. 580
  {
    topic: 30,
    kind: 'remember',
    q: 'Among N<sub>2</sub>O, NO, N<sub>2</sub>O<sub>4</sub>, NO<sub>2</sub>, ClO<sub>2</sub> and O<sub>3</sub>, how many are paramagnetic?',
    a: 'Three: NO (11 valence electrons), NO<sub>2</sub> (17) and ClO<sub>2</sub> (19) have odd counts and an unpaired electron; N<sub>2</sub>O (16), N<sub>2</sub>O<sub>4</sub> (34) and O<sub>3</sub> (18) are even-electron and diamagnetic. Two forgets ClO<sub>2</sub>; four or five counts N<sub>2</sub>O<sub>4</sub> or O<sub>3</sub>, confused with NO<sub>2</sub> and O<sub>2</sub>',
    why: 'The lone pairs on the central atoms of XeF<sub>2</sub>, XeF<sub>4</sub>, XeOF<sub>4</sub> and ClF<sub>3</sub> total 3 + 2 + 1 + 2 = 8: the traps give ClF<sub>3</sub> one, or XeOF<sub>4</sub> two, forgetting that Xe=O uses two of xenon’s electrons.',
    say: null,
  },

  // ── Additional H · Common Pitfalls and a Cheat Sheet ──
  // pp. 580–581
  {
    topic: 31,
    kind: 'mixup',
    q: 'Pyramidal or planar: how do you tell ClO<sub>3</sub><sup>−</sup> from NO<sub>3</sub><sup>−</sup>, or SO<sub>3</sub><sup>2−</sup> from SO<sub>3</sub>?',
    a: 'By lone pairs, not by formula pattern. Three bonding domains and one lone pair (sp<sup>3</sup>) make a pyramid: NH<sub>3</sub>, PCl<sub>3</sub>, XeO<sub>3</sub>, ClO<sub>3</sub><sup>−</sup>, IO<sub>3</sub><sup>−</sup>, SO<sub>3</sub><sup>2−</sup>. Three bonding domains and no lone pair (sp<sup>2</sup>) make a trigonal plane: NO<sub>3</sub><sup>−</sup>, SO<sub>3</sub>, CO<sub>3</sub><sup>2−</sup>',
    why: 'Likewise bent ClO<sub>2</sub><sup>−</sup>, with two lone pairs, is sp<sup>3</sup>, while bent NO<sub>2</sub><sup>−</sup>, O<sub>3</sub> and SO<sub>2</sub>, with one, are sp<sup>2</sup>.',
    say: null,
  },
  // pp. 564, 581
  {
    topic: 31,
    kind: 'remember',
    q: 'The cheat-sheet orders: boiling points of the EH<sub>3</sub>, halogen oxide stability, the O–N–O angle and the oxygen species’ bond lengths?',
    a: 'Boiling point PH<sub>3</sub> < AsH<sub>3</sub> < NH<sub>3</sub> < SbH<sub>3</sub> < BiH<sub>3</sub>. Stability of halogen oxides I > Cl > Br. O–N–O angle NO<sub>2</sub><sup>+</sup> > NO<sub>2</sub> > NO<sub>2</sub><sup>−</sup>. Bond length O<sub>2</sub><sup>+</sup> < O<sub>2</sub> < O<sub>2</sub><sup>−</sup> < O<sub>2</sub><sup>2−</sup>, opposite to bond order (2.5, 2, 1.5, 1). Acid strength of same-state oxoacids HOCl > HOBr > HOI',
    why: 'The three plants: Haber about 200 atm and 700 K over Fe; Ostwald over Pt/Rh at 500 K and 9 bar; Contact over V<sub>2</sub>O<sub>5</sub> at 720 K and 2 bar.',
    say: null,
  },

  // ── Additional I · What JEE and NEET Actually Ask ──
  // pp. 582–583
  {
    topic: 32,
    kind: 'remember',
    q: 'In what forms are Groups 15 to 18 tested?',
    a: 'Small facts more than long derivations: trend and order questions (confirm the order with its one-line reason, watching for the second-period anomaly); shapes, hybridisation and lone pairs, often summed over a list; concentration-dependent products; oxoacid bond counts (P–OH, P=O, P–H, P–P, P–O–P; S–S, S–O–S, O–O); hydrolysis products; statement pairs with one swapped word; stoichiometric and iodometric numericals; magnetism and isostructural pairs',
    why: 'Hydrolysis preserves oxidation states except for XeF<sub>2</sub> and XeF<sub>4</sub>: 3.0 mol of XeF<sub>6</sub>, by XeF<sub>6</sub> + 3H<sub>2</sub>O → XeO<sub>3</sub> + 6HF, gives 3.0 mol of XeO<sub>3</sub> and 18 mol of HF.',
    say: null,
  },
  // pp. 582–583
  {
    topic: 32,
    kind: 'mistake',
    q: 'Which traps recur in Group 15 to 18 questions?',
    a: 'Counting hydrogens for basicity (count P–OH); swapping the two fluorine orders (bond enthalpy Cl<sub>2</sub> > Br<sub>2</sub> > F<sub>2</sub> > I<sub>2</sub>, electron gain Cl > F > Br > I); HF taken as the strongest acid (it is the weakest); SO<sub>3</sub> absorbed into water (it goes into concentrated H<sub>2</sub>SO<sub>4</sub>); a planar ClO<sub>3</sub><sup>−</sup> (it is pyramidal); XeF<sub>6</sub> hydrolysis treated as redox (it is not)',
    why: '5.0 g of copper in excess dilute nitric acid is 0.0787 mol, and 3Cu → 2NO gives 2/3 × 0.0787 = 0.0525 mol of NO, 1.57 g (1.6 g to two significant figures).',
    say: null,
  },
];
