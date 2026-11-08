import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11, Topics 04 to 06: Sections 4, 5 and 6 of the Class 12 Chemistry
 * Master Reference's p-block chapter (Groups 15 to 18), word for word. The
 * book runs the main chapter as one block of nine "Section N —" headings; as
 * in Chemistry 11's p-Block (the founder's layout), each of Sections 1–6 is a
 * topic. Topic 04, Important Compounds of Sulphur (from the middle of p. 537
 * to the top of p. 539), Topic 05, Group 17: The Halogens (p. 539 to the
 * middle of p. 541), and Topic 06, Group 18: The Noble Gases (p. 541 to the
 * middle of p. 543, ending before "Section 7 — Worked Examples").
 *
 * Parts: a section's display headings. Section 4 opens straight on its first
 * heading, so it has no "Introduction". In Sections 5 and 6 the text before
 * the first heading is "Introduction", and its bold run-in heads ("Electron
 * gain enthalpy — a classic exam trap.", "Oxidising power.", "Bartlett’s
 * discovery.") stay bold leads. The book's indented box contrasting SO2 and
 * Cl2 bleaching is its own paragraph. These pages print no figure and draw no
 * structure. Hybrid and orbital labels are upright (sp<sup>3</sup>d, 2p, d),
 * <i>n</i> in <i>n</i>s<sup>2</sup><i>n</i>p<sup>5</sup> italic; bonds use an
 * en dash (H–F, X–OH); stand-in letters (X, X′, M) upright; a second arrow
 * condition sits on the line after the equation, as in Chapter 9.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 10 · Section 4 · pp. 537–539 ─────────────────────────
  {
    n: '10',
    title: 'Important Compounds of Sulphur',
    kalam: 'Concentrated H₂SO₄ is a dense, oily, colourless liquid whose chemistry rests on four properties.',
    blocks: [
      { t: 'part', title: 'Allotropes of sulphur' },
      {
        t: 'p',
        html: 'The two important solid allotropes are <b>rhombic sulphur</b> (α-sulphur, the stable form below 369 K, yellow, m.p. 385.8 K) and <b>monoclinic sulphur</b> (β-sulphur, stable above 369 K, m.p. 393 K); 369 K is the transition temperature at which both forms coexist in equilibrium. Both allotropes are built from puckered, crown-shaped S<sub>8</sub> rings, simply packed differently in the crystal. At high temperature (~1000 K) sulphur vapour partly exists as diatomic S<sub>2</sub>, which, like O<sub>2</sub>, has unpaired electrons in antibonding π* orbitals and is therefore paramagnetic.',
      },

      { t: 'part', title: 'Sulphur dioxide' },
      {
        t: 'p',
        html: 'SO<sub>2</sub> forms directly when sulphur burns in air or oxygen, is generated in the laboratory from a sulphite and dilute H<sub>2</sub>SO<sub>4</sub>, and is obtained industrially as a by-product of roasting sulphide ores (4FeS<sub>2</sub> + 11O<sub>2</sub> → 2Fe<sub>2</sub>O<sub>3</sub> + 8SO<sub>2</sub>). It is a colourless, pungent, highly water-soluble gas, angular (bent) in shape and a resonance hybrid of two canonical structures — structurally analogous to ozone. Dissolved in water it forms sulphurous acid (SO<sub>2</sub> + H<sub>2</sub>O ⇌ H<sub>2</sub>SO<sub>3</sub>), and with alkali it behaves much like CO<sub>2</sub>, forming sulphite and then, with excess SO<sub>2</sub>, bisulphite.',
      },
      {
        t: 'p',
        html: 'When moist, SO<sub>2</sub> acts as a <b>reducing agent</b> — it converts Fe<sup>3+</sup> to Fe<sup>2+</sup> and decolourises acidified KMnO<sub>4</sub>, the latter being a standard qualitative test for the gas. This is also the mechanism of its <b>bleaching action</b>, and the contrast with chlorine’s bleaching mechanism is a classic exam trap:',
      },
      {
        t: 'p',
        html: 'SO<sub>2</sub> bleaches by <b>reduction</b> — in the presence of moisture it releases nascent hydrogen (SO<sub>2</sub> + 2H<sub>2</sub>O → H<sub>2</sub>SO<sub>4</sub> + 2[H]), which reduces the coloured matter to a colourless form that is often unstable, so exposure to air (an oxidant) can restore the original colour: the bleaching is <b>temporary</b>. Cl<sub>2</sub> bleaches by <b>oxidation</b> — it releases nascent oxygen via hypochlorous acid (Cl<sub>2</sub> + H<sub>2</sub>O → HCl + HOCl, HOCl → HCl + [O]) that destroys the chromophore outright, so the bleaching is <b>permanent</b>.',
      },

      { t: 'part', title: 'Sulphuric acid' },
      {
        t: 'p',
        html: 'Manufactured by the <b>Contact process</b> in three steps: (i) burning sulphur or roasting sulphide ores to give SO<sub>2</sub>; (ii) catalytic oxidation of SO<sub>2</sub> to SO<sub>3</sub> over V<sub>2</sub>O<sub>5</sub>; (iii) absorption of SO<sub>3</sub> into concentrated H<sub>2</sub>SO<sub>4</sub> to give oleum, which is then diluted with water to the desired concentration:<br>2SO<sub>2</sub>(g) + O<sub>2</sub>(g) →<sup>V₂O₅</sup> 2SO<sub>3</sub>(g), Δ<sub>r</sub><i>H</i>° = −196.6 kJ mol<sup>−1</sup><br>(720 K, 2 bar)<br>SO<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub> → H<sub>2</sub>S<sub>2</sub>O<sub>7</sub> (oleum)',
      },
      {
        t: 'p',
        html: 'Note carefully: SO<sub>3</sub> <b>is absorbed into concentrated H<sub>2</sub>SO<sub>4</sub>, not directly into water</b> — passing SO<sub>3</sub> straight into water produces a dense acid mist that is difficult to condense efficiently, so the industrial route always goes through oleum first, and dilution with water is the final, separate step. Since the forward reaction is exothermic and reduces gas volume, low temperature and high pressure favour maximum yield, but the reactor is run at ~720 K (not lower) purely to keep the reaction rate acceptable — the same thermodynamics-versus-kinetics tension you saw for the Haber process.',
      },
      {
        t: 'p',
        html: 'Concentrated H<sub>2</sub>SO<sub>4</sub> is a dense, oily, colourless liquid whose chemistry rests on four properties: low volatility, strong acidity, strong affinity for water, and moderate oxidising power. In water it ionises in two steps, H<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O → H<sub>3</sub>O<sup>+</sup> + HSO<sub>4</sub><sup>−</sup> (<i>K</i><sub>a1</sub> > 10, very large: essentially complete) followed by HSO<sub>4</sub><sup>−</sup> + H<sub>2</sub>O ⇌ H<sub>3</sub>O<sup>+</sup> + SO<sub>4</sub><sup>2−</sup> (<i>K</i><sub>a2</sub> = 1.2 × 10<sup>−2</sup>) — the first ionisation is far more complete than the second, so <i>K</i><sub>a1</sub> ≫ <i>K</i><sub>a2</sub>.',
      },
      {
        t: 'p',
        html: 'Because it is non-volatile, sulphuric acid is used to liberate more volatile acids from their salts (2MX + H<sub>2</sub>SO<sub>4</sub> → 2HX + M<sub>2</sub>SO<sub>4</sub>). As a <b>strong dehydrating agent</b> it chars sugar and other carbohydrates by stripping out their hydrogen and oxygen as water, which they contain in the 2∶1 ratio of water (C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> →<sup>H₂SO₄</sup> 12C + 11H<sub>2</sub>O). Hot concentrated H<sub>2</sub>SO<sub>4</sub> is also a <b>moderately strong oxidising agent</b>, being reduced to SO<sub>2</sub> as it oxidises both metals and non-metals:<br>Cu + 2H<sub>2</sub>SO<sub>4</sub>(conc.) → CuSO<sub>4</sub> + SO<sub>2</sub> + 2H<sub>2</sub>O,<br>S + 2H<sub>2</sub>SO<sub>4</sub>(conc.) → 3SO<sub>2</sub> + 2H<sub>2</sub>O',
      },
      {
        t: 'p',
        html: 'Its major industrial use is fertiliser manufacture (ammonium sulphate, superphosphate), alongside petroleum refining, pigments, detergents, and storage batteries.',
      },
    ],
  },

  // ───────────────────────── Topic 11 · Section 5 · pp. 539–541 ─────────────────────────
  {
    n: '11',
    title: 'Group 17: The Halogens',
    kalam: 'Group 17 (fluorine, chlorine, bromine, iodine, astatine) shows the greatest family resemblance of any p-block group.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Group 17 (fluorine, chlorine, bromine, iodine, astatine) shows the greatest family resemblance of any p-block group — a direct consequence of the shared <i>n</i>s<sup>2</sup><i>n</i>p<sup>5</sup> configuration, just one electron short of the next noble gas. Halogens have the smallest atomic radii in their respective periods (maximum effective nuclear charge for a given period), and radii increase steadily down the group. Ionisation enthalpy is very high throughout the group (least tendency to lose an electron) and falls with increasing size down the group. Electronegativity is the highest of any group at every period, with <b>fluorine the most electronegative element in the entire periodic table</b>, and it decreases down the group.',
      },
      {
        t: 'p',
        html: '<b>Electron gain enthalpy — a classic exam trap.</b> Halogens have the most negative electron gain enthalpies in their respective periods, since each atom is only one electron away from a stable noble-gas configuration. You would expect this negative value to be largest in magnitude for the smallest halogen, fluorine — but it is not. <b>Chlorine’s electron gain enthalpy (−349 kJ mol<sup>−1</sup>) is more negative than fluorine’s (−333 kJ mol<sup>−1</sup>)</b>, because fluorine’s very small 2p orbitals are already so electron-dense that the incoming electron experiences significant inter-electronic repulsion, partially offsetting the energy released. The overall order is Cl > F > Br > I in magnitude of electron gain enthalpy.',
      },
      {
        t: 'p',
        html: '<b>Bond dissociation enthalpy — the other classic trap.</b> X–X bond dissociation enthalpy falls smoothly from Cl<sub>2</sub> through Br<sub>2</sub> to I<sub>2</sub> as the atoms get larger and the bond weaker, exactly as expected. But <b>F<sub>2</sub> is the anomaly</b>: its bond dissociation enthalpy (158.8 kJ mol<sup>−1</sup>) is lower than that of Cl<sub>2</sub> (242.6 kJ mol<sup>−1</sup>) and even lower than Br<sub>2</sub> (192.8 kJ mol<sup>−1</sup>), because the F atoms in F<sub>2</sub> are so small and so close together that the non-bonding lone pairs on each fluorine repel each other strongly across the short bond, weakening it. The full order of X–X bond dissociation enthalpy is therefore<br>Cl<sub>2</sub> > Br<sub>2</sub> > F<sub>2</sub> > I<sub>2</sub><br>with F<sub>2</sub> slotting in between Br<sub>2</sub> and I<sub>2</sub> rather than at the top — this single ranking is one of the most frequently tested numerical facts in the entire p-block.',
      },
      {
        t: 'p',
        html: '<b>Oxidising power.</b> Despite its comparatively weak bond, fluorine is still the strongest oxidising halogen, because the low bond dissociation enthalpy and the very high hydration enthalpy of F<sup>−</sup> together dominate the overall thermodynamic cycle, more than compensating for its lower electron gain enthalpy magnitude compared to chlorine. Standard reduction potentials confirm the order:<br>F<sub>2</sub> > Cl<sub>2</sub> > Br<sub>2</sub> > I<sub>2</sub> (<i>E</i>° = 2.87, 1.36, 1.09, 0.54 V)<br>Each halogen thus displaces the halide ions of heavier halogens (Cl<sub>2</sub> + 2Br<sup>−</sup> → 2Cl<sup>−</sup> + Br<sub>2</sub>), and fluorine alone is able to oxidise water to oxygen (NCERT’s line, the one to write in an exam; by <i>E</i>° chlorine, at 1.36 V against the 1.23 V needed, could too, but the reaction is so slow that chlorine water gives off O<sub>2</sub> only gradually in sunlight); chlorine and bromine merely form a mixture of the hydrohalic and hypohalous acids with water, while iodine’s reaction with water is non-spontaneous (the reverse reaction — I<sup>−</sup> oxidised by O<sub>2</sub> in acid — is what actually occurs).',
      },

      { t: 'part', title: 'Hydrogen halides and the HX acid-strength anomaly' },
      {
        t: 'p',
        html: 'All halogens react directly with hydrogen to give hydrogen halides, HX, which dissolve in water to give hydrohalic acids. Bond dissociation enthalpy falls steadily down the group (H–F > H–Cl > H–Br > H–I: 574, 432, 363, 295 kJ mol<sup>−1</sup>), and with it the thermal stability of the hydride. The acid-strength order, however, holds one of the sharpest traps in the chapter:<br>HF < HCl < HBr < HI',
      },
      {
        t: 'p',
        html: 'It is tempting to expect HF to be the strongest acid, since fluorine is the most electronegative halogen and should polarise the H–F bond most strongly. In reality <b>HF is the weakest of the four acids</b> (p<i>K</i><sub>a</sub> ≈ 3.2, versus strongly negative p<i>K</i><sub>a</sub> values for the other three), for two compounding reasons: the H–F bond dissociation enthalpy (574 kJ mol<sup>−1</sup>) is far higher than any of the others, making the bond very hard to break heterolytically in water, and HF also engages in strong hydrogen bonding in its aqueous solution, which further suppresses free ionisation. Electronegativity alone is therefore not a reliable predictor of aqueous acid strength here — bond energy and hydrogen bonding dominate the outcome.',
      },

      { t: 'part', title: 'Chlorine and hydrochloric acid' },
      {
        t: 'p',
        html: 'Chlorine can be prepared by oxidising concentrated HCl with MnO<sub>2</sub> (MnO<sub>2</sub> + 4HCl → MnCl<sub>2</sub> + Cl<sub>2</sub> + 2H<sub>2</sub>O) or with KMnO<sub>4</sub>, and is manufactured either by the Deacon process (catalytic air oxidation of HCl over CuCl<sub>2</sub>) or, most commonly today, by the electrolysis of brine. It is a dense, greenish-yellow, pungent gas that reacts readily with most metals and non-metals to form chlorides, and with hydrogen-containing compounds to liberate HCl. With cold, dilute alkali it disproportionates to chloride and hypochlorite; with hot, concentrated alkali it disproportionates further to chloride and chlorate:<br>Cl<sub>2</sub> + 2NaOH(cold, dilute) → NaCl + NaOCl + H<sub>2</sub>O<br>3Cl<sub>2</sub> + 6NaOH(hot, conc.) → 5NaCl + NaClO<sub>3</sub> + 3H<sub>2</sub>O',
      },
      {
        t: 'p',
        html: 'With dry slaked lime it forms <b>bleaching powder</b>, Ca(OCl)Cl (equivalently written CaOCl<sub>2</sub>, and more fully as the mixed salt Ca(OCl)<sub>2</sub>·CaCl<sub>2</sub>·Ca(OH)<sub>2</sub>·2H<sub>2</sub>O):<br>2Ca(OH)<sub>2</sub> + 2Cl<sub>2</sub> → Ca(OCl)<sub>2</sub> + CaCl<sub>2</sub> + 2H<sub>2</sub>O',
      },
      {
        t: 'p',
        html: 'Chlorine is a powerful oxidant — it converts Fe<sup>2+</sup> to Fe<sup>3+</sup>, sulphite to sulphate, SO<sub>2</sub> (with water) to H<sub>2</sub>SO<sub>4</sub>, and iodine to iodate — and its bleaching action, as already noted, is oxidative and hence permanent.',
      },
      {
        t: 'p',
        html: 'HCl itself is prepared in the laboratory by heating NaCl with concentrated H<sub>2</sub>SO<sub>4</sub>, is an extremely water-soluble, strongly acidic gas, and forms <b>aqua regia</b> with concentrated HNO<sub>3</sub> in a 3∶1 ratio — the classic acid mixture able to dissolve noble metals like gold and platinum, since the nitric acid oxidises the metal while chloride ions stabilise it as a chloro-complex.',
      },

      { t: 'part', title: 'Interhalogen compounds' },
      {
        t: 'p',
        html: 'When two different halogens combine, they form interhalogen compounds of general formula XX′<sub><i>n</i></sub> (<i>n</i> = 1, 3, 5, 7), where X is the larger, more electropositive halogen and X′ the smaller. As the size ratio between X and X′ grows, so does the number of atoms the molecule can accommodate — which is exactly why iodine’s fluoride reaches the formula IF<sub>7</sub> (the largest halogen paired with the smallest). Interhalogens are, with the sole exception of fluorine itself, <b>more reactive than the parent halogens</b>, because the heteronuclear X–X′ bond is weaker than the homonuclear X–X bond. All interhalogens hydrolyse to give the halide of the smaller atom plus an oxoacid of the larger one (XX′ + H<sub>2</sub>O → HX′ + HOX). Structures follow VSEPR straightforwardly: XX′<sub>3</sub> compounds (e.g. ClF<sub>3</sub>, BrF<sub>3</sub>) are bent T-shaped, XX′<sub>5</sub> compounds (e.g. IF<sub>5</sub>, BrF<sub>5</sub>) are square pyramidal, and IF<sub>7</sub> is pentagonal bipyramidal.',
      },

      { t: 'part', title: 'Oxoacids of halogens' },
      {
        t: 'p',
        html: 'Because fluorine has no accessible d orbitals and is the most electronegative element, it forms only a single oxoacid, HOF (hypofluorous acid). Chlorine forms the full family of four (bromine and iodine form all but the halous acid, HXO<sub>2</sub>), with the acid strength rising steadily with the oxidation state of the halogen:<br>HOCl < HClO<sub>2</sub> < HClO<sub>3</sub> < HClO<sub>4</sub><br>(hypochlorous < chlorous < chloric < perchloric). In every case the halogen carries one X–OH group and, from HXO<sub>2</sub> on, is the central atom, with additional X=O bonds appearing as the oxidation state rises — the more X=O bonds withdrawing electron density from the O–H bond, the more easily that proton ionises, which is exactly why acid strength climbs with oxidation state.',
      },
    ],
  },

  // ───────────────────────── Topic 12 · Section 6 · pp. 541–543 ─────────────────────────
  {
    n: '12',
    title: 'Group 18: The Noble Gases',
    kalam: 'Group 18 consists of He, Ne, Ar, Kr, Xe and the radioactive Rn.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Group 18 consists of He, Ne, Ar, Kr, Xe and the radioactive Rn, with the general configuration <i>n</i>s<sup>2</sup><i>n</i>p<sup>6</sup> (helium alone is 1s<sup>2</sup>). This closed-shell configuration gives noble gases exceptionally high ionisation enthalpies and large positive electron gain enthalpies — they have no thermodynamic incentive either to lose or to gain an electron — which is why they were, for decades, believed to be entirely inert. Atomic radii increase steadily down the group, and the only significant interatomic force is weak London dispersion, which is why melting and boiling points are extremely low (helium’s boiling point, 4.2 K, is the lowest of any known substance).',
      },
      {
        t: 'p',
        html: '<b>Bartlett’s discovery.</b> In 1962, Neil Bartlett noticed that the first ionisation enthalpy of molecular oxygen (1175 kJ mol<sup>−1</sup>) was almost identical to that of xenon (1170 kJ mol<sup>−1</sup>). Having already prepared the ionic solid O<sub>2</sub><sup>+</sup>PtF<sub>6</sub><sup>−</sup>, he reasoned that PtF<sub>6</sub> should be able to oxidise xenon in the same way, and successfully prepared Xe<sup>+</sup>PtF<sub>6</sub><sup>−</sup> (as NCERT formulates it; later work showed the product to be more complex) — the first true noble-gas compound. This single observation is why <b>xenon is by far the most chemically active noble gas</b>: its ionisation enthalpy, while still very high, is low enough (the lowest in the group besides radon) that sufficiently electronegative partners — fluorine and oxygen — can pull electron density away from it. Krypton forms only a handful of compounds (chiefly KrF<sub>2</sub>); helium, neon and argon form no stable compounds under ordinary conditions.',
      },

      { t: 'part', title: 'Xenon–fluorine compounds' },
      {
        t: 'p',
        html: 'Direct combination of the elements under carefully controlled temperature, pressure, and Xe∶F<sub>2</sub> ratio gives all three binary fluorides:<br>Xe(g) + F<sub>2</sub>(g) → XeF<sub>2</sub>(s) (673 K, Xe in excess, 1 bar)<br>Xe(g) + 2F<sub>2</sub>(g) → XeF<sub>4</sub>(s) (873 K, Xe∶F<sub>2</sub> = 1∶5, 7 bar)<br>Xe(g) + 3F<sub>2</sub>(g) → XeF<sub>6</sub>(s) (573 K, Xe∶F<sub>2</sub> = 1∶20, 60–70 bar)',
      },
      {
        t: 'p',
        html: 'All three are colourless, sublimable, powerful fluorinating agents that hydrolyse readily on contact with even trace moisture. Their geometries, predicted correctly by VSEPR treatment of xenon’s lone pairs, are among the most reliably tested structural facts in this course:',
      },
      {
        t: 'table',
        title: null,
        head: ['Compound', 'Hybridisation', 'Lone pairs on Xe', 'Molecular geometry'],
        rows: [
          ['XeF<sub>2</sub>', 'sp<sup>3</sup>d', '3', '<b>Linear</b>'],
          ['XeF<sub>4</sub>', 'sp<sup>3</sup>d<sup>2</sup>', '2', '<b>Square planar</b>'],
          ['XeF<sub>6</sub>', 'sp<sup>3</sup>d<sup>3</sup>', '1', '<b>Distorted octahedral</b>'],
          ['XeO<sub>3</sub>', 'sp<sup>3</sup>', '1', '<b>Pyramidal</b>'],
          ['XeOF<sub>4</sub>', 'sp<sup>3</sup>d<sup>2</sup>', '1', '<b>Square pyramidal</b>'],
          ['XeO<sub>4</sub>', 'sp<sup>3</sup>', '0', '<b>Tetrahedral</b>'],
        ],
      },
      {
        t: 'p',
        html: 'XeF<sub>6</sub>’s seven electron domains (six bonding pairs plus one lone pair) around a single central atom are what produce the “distorted” (rather than ideal) octahedron — the lone pair pushes the six fluorines out of a perfect octahedral arrangement.',
      },
      {
        t: 'p',
        html: 'Xenon fluorides also show interesting acid–base behaviour toward fluoride ions: with fluoride-ion acceptors they form cationic species (XeF<sub>2</sub> + PF<sub>5</sub> → [XeF]<sup>+</sup>[PF<sub>6</sub>]<sup>−</sup>), while with fluoride-ion donors they form fluoroanions (XeF<sub>6</sub> + MF → M<sup>+</sup>[XeF<sub>7</sub>]<sup>−</sup>, M = Na, K, Rb, Cs).',
      },

      { t: 'part', title: 'Xenon–oxygen compounds' },
      {
        t: 'p',
        html: 'Complete hydrolysis of XeF<sub>4</sub> or XeF<sub>6</sub> gives XeO<sub>3</sub>:<br>6XeF<sub>4</sub> + 12H<sub>2</sub>O → 4Xe + 2XeO<sub>3</sub> + 24HF + 3O<sub>2</sub>,<br>XeF<sub>6</sub> + 3H<sub>2</sub>O → XeO<sub>3</sub> + 6HF<br>while partial hydrolysis of XeF<sub>6</sub> gives the oxyfluorides XeOF<sub>4</sub> and XeO<sub>2</sub>F<sub>2</sub>:<br>XeF<sub>6</sub> + H<sub>2</sub>O → XeOF<sub>4</sub> + 2HF,<br>XeF<sub>6</sub> + 2H<sub>2</sub>O → XeO<sub>2</sub>F<sub>2</sub> + 4HF',
      },
      {
        t: 'p',
        html: 'Because oxidation states are conserved on both sides of these partial-hydrolysis equations, they are <b>not</b> redox reactions despite looking superficially like decompositions — a point NCERT itself flags explicitly. XeO<sub>3</sub> is a colourless, dangerously explosive solid; XeOF<sub>4</sub> is a colourless, volatile liquid.',
      },

      { t: 'part', title: 'Uses of noble gases' },
      {
        t: 'p',
        html: 'Helium, being light and non-flammable, is used to fill meteorological balloons, as the working fluid in gas-cooled nuclear reactors, as a liquid cryogen (b.p. 4.2 K) for superconducting magnets in NMR and MRI instruments, and — because of its very low blood solubility — as a diluent for oxygen in deep-sea diving apparatus. Neon is used in discharge tubes and advertising signage. Argon provides an inert blanket in high-temperature metallurgy (arc welding) and fills incandescent light bulbs. Xenon and krypton have few large-scale uses beyond specialty lighting. Radon is intensely radioactive and, as a decay product of <sup>226</sup>Ra, is chiefly of interest as a health hazard in poorly ventilated spaces built on radium- or uranium-bearing ground.',
      },
    ],
  },
];
