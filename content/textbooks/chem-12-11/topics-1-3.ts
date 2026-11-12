import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11, Topics 01 to 03: pp. 530–537 of the Class 12 Chemistry Master
 * Reference, word for word. The chapter heading on p. 530 is not copied; the
 * chapter’s opening paragraph (p. 530, before Section 1) is the first part of
 * Topic 01, “Introduction”. Topic 01 is the book’s Section 1, Group 15: The
 * Nitrogen Family (pp. 530–531); Topic 02 is Section 2, Important Compounds of
 * Nitrogen and Phosphorus (pp. 532–535); Topic 03 is Section 3, Group 16: The
 * Oxygen Family (pp. 536–537, ending before Section 4 on p. 537).
 *
 * Parts: a section’s display headings. Section 1 has none, so its bold run-in
 * heads (“Trends down the group.”, “Oxidation states.”, “Why nitrogen is the
 * odd one out.”, “Catenation.”, “Hydrides.”, “Reactivity toward oxygen and
 * halogens.”) are its parts, and its unheaded first paragraph joins the chapter
 * opening in “Introduction”; the unheaded paragraph after “Catenation” (dπ–pπ
 * bonds) stays in that part. Section 2 opens straight on its first display
 * heading (“Dinitrogen”), so it has no Introduction; “The brown ring test.”
 * stays a bold lead inside “Nitric acid”. Section 3 has display headings
 * (“Dioxygen”, “Ozone”); the text before the first one is “Introduction”, and
 * its run-in heads (“Electron gain enthalpy.”, “Oxidation states.”,
 * “Hydrides.”) stay bold leads. These pages draw no figure or structure.
 * Orbital and hybrid labels are upright (2p, sp<sup>3</sup>d, pπ–pπ, π*), as in
 * the NCERT books; <i>n</i> in <i>n</i>s<sup>2</sup> <i>n</i>p<sup>3</sup> is
 * italic. α- and β-forms are upright. The book’s italics for emphasis
 * (“weaker”, “not”, “excess”, “less”, the IUPAC names) are dropped.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 07 · Section 1 · pp. 530–531 ─────────────────────────
  {
    n: '07',
    title: 'Group 15: The Nitrogen Family',
    kalam: 'Group 15 contains nitrogen, phosphorus, arsenic, antimony and bismuth, with the general valence configuration ns² np³.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This chapter closes out the p-block by covering four groups at once — nitrogen’s family, oxygen’s family, the halogens, and the noble gases. The common thread across all four is the general valence configuration <i>n</i>s<sup>2</sup> <i>n</i>p<sup>3–6</sup> (helium, 1s<sup>2</sup>, the one exception), and the same organising logic you used for Groups 13 and 14 carries over directly: atomic size sets ionisation enthalpy and electronegativity, the second-period member of each group (N, O, F) behaves anomalously because it is small, highly electronegative and has no valence d-orbitals, and oxidation states are governed by the number of unpaired electrons a promoted configuration can offer. What changes from group to group is the number of oxidation states available — three “slots” for Group 15 (−3, +3, +5), a maximum of +6 for Group 16, four odd oxidation states for Group 17 (+1, +3, +5, +7), and, for Group 18, essentially none at all until fluorine and oxygen force xenon’s hand. This chapter is also where JEE and NEET concentrate some of their favourite conceptual traps — the basicity of phosphorus oxoacids, the concentration-dependent products of nitric acid, the anomalous bond enthalpy of fluorine, and the shapes of xenon compounds — so each of these is flagged explicitly as it comes up, and revisited together in the last part of Topic 13.',
      },
      {
        t: 'p',
        html: 'Group 15 contains nitrogen, phosphorus, arsenic, antimony and bismuth, with the general valence configuration <i>n</i>s<sup>2</sup> <i>n</i>p<sup>3</sup>. Because the p subshell is exactly half-filled, this configuration is extra stable — the same exchange-energy stabilisation you met with d<sup>5</sup> ions in the d-block — and as a direct consequence, Group 15 elements have distinctly higher ionisation enthalpies than their Group 14 or Group 16 neighbours in the same period.',
      },

      { t: 'part', title: 'Trends down the group' },
      {
        t: 'p',
        html: 'Covalent and ionic radii increase down the group, though the jump from N to P is much larger than the jump from As to Bi, because the heavier members have filled d and/or f subshells that contract their size (the familiar d-block and lanthanoid contraction effects reappearing here). Ionisation enthalpy falls steadily down the group as atomic size increases, and electronegativity falls too, so metallic character rises down the group: nitrogen and phosphorus are non-metals, arsenic and antimony are metalloids, and bismuth is essentially a metal.',
      },

      { t: 'part', title: 'Oxidation states' },
      {
        t: 'p',
        html: 'The common oxidation states are −3, +3 and +5. The tendency to show −3 falls down the group as metallic character rises (bismuth barely forms compounds in −3 at all), while the stability of +5 falls and that of +3 rises — the inert-pair effect, exactly as you saw for Group 14. The only well-characterised Bi(V) compound is BiF<sub>5</sub>. Nitrogen additionally shows +1, +2 and +4 states in its oxides, but never forms a pentahalide, because — and this is the point examiners return to again and again — <b>nitrogen has no valence d-orbitals and cannot expand its covalency past four</b> (one 2s and three 2p orbitals is all it has). Phosphorus, arsenic, antimony and bismuth all have accessible d orbitals in the valence shell and readily expand their covalency to five or six, which is why PCl<sub>5</sub> and PF<sub>6</sub><sup>−</sup> exist but NCl<sub>5</sub> does not.',
      },

      { t: 'part', title: 'Why nitrogen is the odd one out' },
      {
        t: 'p',
        html: 'Nitrogen’s small size and high electronegativity give it a unique ability among the group to form strong pπ–pπ multiple bonds with itself and with other small, electronegative atoms such as C and O. Dinitrogen is therefore a diatomic molecule, ∶N≡N∶, held together by a genuine triple bond (one σ and two π), and its bond dissociation enthalpy is an extraordinary <b>941.4 kJ mol<sup>−1</sup></b> — among the highest of any diatomic molecule. This is why dinitrogen gas is so inert at room temperature despite nitrogen compounds being thermodynamically capable of releasing large amounts of energy (as any explosives chemist will confirm). The heavier Group 15 atoms are too large and diffuse for effective pπ–pπ overlap, so phosphorus, arsenic and antimony instead form single σ bonds (P–P, As–As, Sb–Sb), while bismuth is essentially metallic.',
      },

      { t: 'part', title: 'Catenation' },
      {
        t: 'p',
        html: 'A common misconception is that nitrogen, being the lightest member, should catenate the most. In fact the opposite is true: the single N–N bond is weaker than the single P–P bond, because nitrogen’s small bond length forces the non-bonding lone pairs on the two atoms very close together, producing strong lone-pair/lone-pair repulsion that destabilises the bond. Catenation ability therefore rises from N to P and then falls again through As, Sb, Bi as atomic size increases and bonds weaken — the practical rule to remember is <b>catenation tendency decreases down Group 15 after phosphorus, and nitrogen itself catenates only weakly</b> (its N–N chains are short, as in hydrazine, H<sub>2</sub>N–NH<sub>2</sub>) despite the strength of its triple bond in N<sub>2</sub>.',
      },
      {
        t: 'p',
        html: 'Nitrogen also cannot form dπ–pπ bonds of the kind phosphorus forms in R<sub>3</sub>P=O (or as a ligand donating through dπ–dπ back-bonding to transition metals, as in P(C<sub>2</sub>H<sub>5</sub>)<sub>3</sub>), because it simply has no d orbitals to use.',
      },

      { t: 'part', title: 'Hydrides' },
      {
        t: 'p',
        html: 'All five elements form EH<sub>3</sub> hydrides. Down the group, the E–H bond dissociation enthalpy falls (389 kJ mol<sup>−1</sup> for N–H down to 255 kJ mol<sup>−1</sup> for Sb–H), so thermal stability decreases and reducing character increases — NH<sub>3</sub> is only a mild reducing agent, while BiH<sub>3</sub> is the strongest reductant in the family. Basicity also falls down the group (NH<sub>3</sub> > PH<sub>3</sub> > AsH<sub>3</sub> > SbH<sub>3</sub> ≥ BiH<sub>3</sub>, as NCERT writes it). Because of nitrogen’s small size and high electronegativity, NH<sub>3</sub> is extensively hydrogen-bonded in the liquid and solid states, which is why it has a far higher melting and boiling point than PH<sub>3</sub> despite PH<sub>3</sub>’s greater molar mass; PH<sub>3</sub> molecules are not hydrogen-bonded.',
      },

      { t: 'part', title: 'Reactivity toward oxygen and halogens' },
      {
        t: 'p',
        html: 'All five elements form both E<sub>2</sub>O<sub>3</sub> and E<sub>2</sub>O<sub>5</sub> oxides, and the higher oxidation state gives the more acidic oxide. Acidic character of the oxides falls down the group: the E<sub>2</sub>O<sub>3</sub> oxides of N and P are purely acidic, those of As and Sb are amphoteric, and Bi<sub>2</sub>O<sub>3</sub> is predominantly basic. Toward halogens, all elements except nitrogen form both EX<sub>3</sub> and EX<sub>5</sub> series; nitrogen forms only trihalides (and of these, only NF<sub>3</sub> is genuinely stable). Pentahalides are more covalent than the corresponding trihalides because the element carries a higher effective oxidation state (+5 vs +3) and therefore exerts greater polarising power on the halide ion.',
      },
    ],
  },

  // ───────────────────────── Topic 08 · Section 2 · pp. 532–535 ─────────────────────────
  {
    n: '08',
    title: 'Important Compounds of Nitrogen and Phosphorus',
    kalam: 'The rule that decides basicity is the number of ionisable P–OH groups, not the total number of hydrogen atoms in the formula.',
    blocks: [
      { t: 'part', title: 'Dinitrogen' },
      {
        t: 'p',
        html: 'Industrially, N<sub>2</sub> is obtained by the fractional distillation of liquid air (b.p. 77.2 K, distilling ahead of liquid oxygen’s 90 K). In the laboratory it is prepared by treating aqueous ammonium chloride with sodium nitrite,<br>NH<sub>4</sub>Cl(aq) + NaNO<sub>2</sub>(aq) → N<sub>2</sub>(g) + 2H<sub>2</sub>O(l) + NaCl(aq)<br>or by the thermal decomposition of ammonium dichromate or of an azide (barium or sodium azide gives very pure N<sub>2</sub>):<br>(NH<sub>4</sub>)<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> →<sup>Δ</sup> N<sub>2</sub> + 4H<sub>2</sub>O + Cr<sub>2</sub>O<sub>3</sub>,<br>Ba(N<sub>3</sub>)<sub>2</sub> →<sup>Δ</sup> Ba + 3N<sub>2</sub>',
      },
      {
        t: 'p',
        html: 'N<sub>2</sub> is colourless, odourless, only sparingly soluble in water, and — as already established — chemically inert at room temperature purely because of the N≡N bond strength; reactivity rises sharply at high temperature, where N<sub>2</sub> combines with reactive metals to give ionic nitrides (Mg<sub>3</sub>N<sub>2</sub>), with hydrogen (Haber process), and with oxygen only above roughly 2000 K to give NO. Uses include ammonia manufacture, inert blanketing in metallurgy, and as a cryogenic refrigerant in its liquid form.',
      },

      { t: 'part', title: 'Ammonia' },
      {
        t: 'p',
        html: 'On a small scale ammonia is liberated by treating an ammonium salt with a strong base (2NH<sub>4</sub>Cl + Ca(OH)<sub>2</sub> → 2NH<sub>3</sub> + 2H<sub>2</sub>O + CaCl<sub>2</sub>). Industrially it is made by the <b>Haber process</b>:<br>N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g), Δ<sub>r</sub><i>H</i>° = −92.2 kJ mol<sup>−1</sup><br>(that is, −46.1 kJ per mole of NH<sub>3</sub>, the Δ<sub>f</sub><i>H</i>° that NCERT prints beside this equation)<br>The forward reaction is exothermic and reduces the number of gas moles, so by Le Chatelier’s principle it is thermodynamically favoured by <b>low temperature and high pressure</b>. In practice, though, the rate at low temperature is unacceptably slow, so the industrial compromise runs the reactor at roughly 200 atm and ~700 K, using an iron catalyst promoted with small amounts of K<sub>2</sub>O and Al<sub>2</sub>O<sub>3</sub> to speed the approach to equilibrium (earlier processes used iron with a molybdenum promoter). This tension between the thermodynamically ideal low temperature and the kinetically necessary higher one is a favourite short-answer prompt, so state both halves explicitly whenever asked for “the conditions” of the Haber process.',
      },
      {
        t: 'p',
        html: 'NH<sub>3</sub> is a colourless, pungent gas that is extensively hydrogen-bonded in the liquid and solid states (hence a higher b.p. than expected from its molar mass alone). The molecule is <b>trigonal pyramidal</b>, nitrogen is sp<sup>3</sup> hybridised with one lone pair, and the ∠HNH bond angle is <b>107.8°</b> — smaller than the ideal tetrahedral 109.5° because the lone pair occupies more angular space than a bonding pair and compresses the H–N–H angles. In water, NH<sub>3</sub> is a weak base (NH<sub>3</sub> + H<sub>2</sub>O ⇌ NH<sub>4</sub><sup>+</sup> + OH<sup>−</sup>); it precipitates the hydroxides of many metal ions, and — because the nitrogen lone pair makes it a good Lewis base — it forms deep-blue complex ions with Cu<sup>2+</sup>, [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>, a reaction used qualitatively to detect copper. The main industrial use of ammonia is in nitrogenous fertilisers and, via the Ostwald process, in nitric acid manufacture.',
      },

      { t: 'part', title: 'Oxides of nitrogen' },
      {
        t: 'p',
        html: 'Nitrogen forms a full family of oxides spanning oxidation states +1 to +5:',
      },
      {
        t: 'table',
        title: null,
        head: ['Formula', 'N oxidation state', 'Common name', 'Character'],
        rows: [
          ['N<sub>2</sub>O', '+1', 'Nitrous oxide', 'Neutral, colourless gas'],
          ['NO', '+2', 'Nitric oxide', 'Neutral, colourless gas'],
          ['N<sub>2</sub>O<sub>3</sub>', '+3', 'Dinitrogen trioxide', 'Acidic, blue solid'],
          ['NO<sub>2</sub>', '+4', 'Nitrogen dioxide', 'Acidic, brown gas'],
          ['N<sub>2</sub>O<sub>4</sub>', '+4', 'Dinitrogen tetroxide', 'Acidic, colourless solid/liquid'],
          ['N<sub>2</sub>O<sub>5</sub>', '+5', 'Dinitrogen pentoxide', 'Acidic, colourless solid'],
        ],
      },
      {
        t: 'p',
        html: 'NO<sub>2</sub> readily dimerises to N<sub>2</sub>O<sub>4</sub> because NO<sub>2</sub> has an odd number of valence electrons (an odd, paramagnetic radical); pairing up to the even-electron N<sub>2</sub>O<sub>4</sub> is energetically favourable.',
      },

      { t: 'part', title: 'Nitric acid' },
      {
        t: 'p',
        html: 'In the laboratory, HNO<sub>3</sub> is obtained by heating KNO<sub>3</sub> or NaNO<sub>3</sub> with concentrated H<sub>2</sub>SO<sub>4</sub>. Industrially it is manufactured by the <b>Ostwald process</b>, catalytic oxidation of ammonia over a Pt/Rh gauze:<br>4NH<sub>3</sub>(g) + 5O<sub>2</sub>(g) →<sup>Pt/Rh</sup> 4NO(g) + 6H<sub>2</sub>O(g)<br>(500 K, 9 bar)<br>2NO(g) + O<sub>2</sub>(g) ⇌ 2NO<sub>2</sub>(g),<br>3NO<sub>2</sub>(g) + H<sub>2</sub>O(l) → 2HNO<sub>3</sub>(aq) + NO(g)<br>with the NO recycled. This gives ~68% HNO<sub>3</sub> by mass, which can be pushed to ~98% by dehydration with concentrated H<sub>2</sub>SO<sub>4</sub>. Pure HNO<sub>3</sub> is a colourless liquid, planar in the gas phase, and a strong monobasic acid in water.',
      },
      {
        t: 'p',
        html: '<b>Concentrated nitric acid is a strong oxidising agent that attacks almost all metals except gold and platinum</b> (a passive oxide film also protects Cr and Al from attack even by the concentrated acid). The single most-tested fact in this whole subsection is that <b>the product of the reaction with copper depends on the concentration of the acid</b>:<br>3Cu + 8HNO<sub>3</sub>(dilute) → 3Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO + 4H<sub>2</sub>O<br>Cu + 4HNO<sub>3</sub>(conc.) → Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO<sub>2</sub> + 2H<sub>2</sub>O',
      },
      {
        t: 'p',
        html: '<b>Dilute acid gives NO; concentrated acid gives NO<sub>2</sub>.</b> Zinc shows the analogous pattern but with different reduction products altogether — dilute HNO<sub>3</sub> reduces to N<sub>2</sub>O, while concentrated acid again gives NO<sub>2</sub>:<br>4Zn + 10HNO<sub>3</sub>(dilute) → 4Zn(NO<sub>3</sub>)<sub>2</sub> + 5H<sub>2</sub>O + N<sub>2</sub>O,<br>Zn + 4HNO<sub>3</sub>(conc.) → Zn(NO<sub>3</sub>)<sub>2</sub> + 2H<sub>2</sub>O + 2NO<sub>2</sub>',
      },
      {
        t: 'p',
        html: 'Concentrated HNO<sub>3</sub> also oxidises non-metals: iodine to iodic acid, carbon to CO<sub>2</sub>, sulphur to H<sub>2</sub>SO<sub>4</sub>, and phosphorus to phosphoric acid, e.g. P<sub>4</sub> + 20HNO<sub>3</sub> → 4H<sub>3</sub>PO<sub>4</sub> + 20NO<sub>2</sub> + 4H<sub>2</sub>O.',
      },
      {
        t: 'p',
        html: '<b>The brown ring test.</b> This is the standard qualitative test for nitrate ion, and depends on Fe<sup>2+</sup> reducing nitrate to nitric oxide, which then coordinates to another Fe<sup>2+</sup> ion:<br>NO<sub>3</sub><sup>−</sup> + 3Fe<sup>2+</sup> + 4H<sup>+</sup> → NO + 3Fe<sup>3+</sup> + 2H<sub>2</sub>O<br>[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + NO → [Fe(H<sub>2</sub>O)<sub>5</sub>(NO)]<sup>2+</sup> + H<sub>2</sub>O (brown)<br>Freshly prepared ferrous sulphate solution is added to the nitrate solution, then concentrated H<sub>2</sub>SO<sub>4</sub> is poured carefully down the side of the tube; a <b>brown ring at the junction of the two liquid layers</b> confirms nitrate.',
      },

      { t: 'part', title: 'Phosphorus — allotropic forms' },
      {
        t: 'p',
        html: 'Phosphorus exists in several allotropes, of which three matter for this course:',
      },
      {
        t: 'p',
        html: '• <b>White phosphorus</b> is a translucent, waxy, poisonous solid consisting of discrete tetrahedral P<sub>4</sub> molecules with a P–P–P bond angle of only <b>60°</b>. This is far from the ideal tetrahedral bond angle, so the molecule carries severe angular strain, making white P the <b>least stable and most reactive</b> allotrope — it catches fire spontaneously in air (giving dense white fumes of P<sub>4</sub>O<sub>10</sub>) and glows in the dark by chemiluminescence, which is why it is always stored under water. It dissolves in CS<sub>2</sub> but not water, and dissolves in boiling NaOH (inert gas) giving phosphine: P<sub>4</sub> + 3NaOH + 3H<sub>2</sub>O → PH<sub>3</sub> + 3NaH<sub>2</sub>PO<sub>2</sub>',
      },
      {
        t: 'p',
        html: '• <b>Red phosphorus</b>, made by heating white phosphorus at 573 K in an inert atmosphere, is a polymeric solid of linked P<sub>4</sub> tetrahedra. It is odourless, non-poisonous, insoluble in both water and CS<sub>2</sub>, does not glow, and is considerably less reactive than white P.',
      },
      {
        t: 'p',
        html: '• <b>Black phosphorus</b> (α- and β-forms; α-black phosphorus is made by heating red phosphorus in a sealed tube at 803 K, β-black phosphorus by heating white phosphorus at 473 K under high pressure) is the <b>most thermodynamically stable</b> allotrope and does not readily oxidise in air.',
      },

      { t: 'part', title: 'Phosphine (PH₃)' },
      {
        t: 'p',
        html: 'Phosphine is prepared from calcium phosphide and water or dilute HCl (Ca<sub>3</sub>P<sub>2</sub> + 6H<sub>2</sub>O → 3Ca(OH)<sub>2</sub> + 2PH<sub>3</sub>) or in the laboratory from white phosphorus and concentrated NaOH under CO<sub>2</sub> (the same reaction shown for white phosphorus). It is a colourless, extremely poisonous gas with a rotten-fish smell, weakly soluble in water, and explodes on contact with oxidants such as HNO<sub>3</sub> or Cl<sub>2</sub> vapour. Like ammonia, phosphine is a Lewis base and forms phosphonium salts with acids (PH<sub>3</sub> + HI → PH<sub>4</sub>I), though it is a far weaker base than NH<sub>3</sub>.',
      },

      { t: 'part', title: 'Phosphorus halides' },
      {
        t: 'p',
        html: 'PCl<sub>3</sub> is obtained by passing dry chlorine over heated white phosphorus (P<sub>4</sub> + 6Cl<sub>2</sub> → 4PCl<sub>3</sub>); it is a colourless, fuming, pyramidal (sp<sup>3</sup>) liquid that hydrolyses readily to H<sub>3</sub>PO<sub>3</sub> and HCl.',
      },
      {
        t: 'p',
        html: 'PCl<sub>5</sub> is made from white phosphorus and excess dry chlorine (P<sub>4</sub> + 10Cl<sub>2</sub> → 4PCl<sub>5</sub>). In the gas and liquid phases it is <b>trigonal bipyramidal</b>, sp<sup>3</sup>d hybridised, with three equivalent equatorial P–Cl bonds and two longer, more repelled axial bonds (the axial bond pairs experience greater repulsion from the three equatorial bond pairs than the equatorial pairs experience from each other). Critically, <b>in the solid state</b> PCl<sub>5</sub> <b>exists as an ionic lattice,</b> [PCl<sub>4</sub>]<sup>+</sup>[PCl<sub>6</sub>]<sup>−</sup> — tetrahedral cation paired with octahedral anion — and this solid-vs-gas structural distinction is asked constantly. On moist exposure PCl<sub>5</sub> hydrolyses stepwise to phosphoryl chloride and finally to phosphoric acid (PCl<sub>5</sub> + H<sub>2</sub>O → POCl<sub>3</sub> + 2HCl; POCl<sub>3</sub> + 3H<sub>2</sub>O → H<sub>3</sub>PO<sub>4</sub> + 3HCl), and on heating it dissociates reversibly, PCl<sub>5</sub> ⇌ PCl<sub>3</sub> + Cl<sub>2</sub>.',
      },

      { t: 'part', title: 'Oxoacids of phosphorus — the single most important trap in this chapter' },
      {
        t: 'p',
        html: 'Phosphorus forms a family of oxoacids in which phosphorus is always tetrahedrally surrounded, and every acid contains at least one P=O bond and one P–OH bond. The acids with phosphorus in an oxidation state below +5 carry, in addition, either a P–P bond (as in H<sub>4</sub>P<sub>2</sub>O<sub>6</sub>) or one or more P–H bonds (as in H<sub>3</sub>PO<sub>2</sub>, H<sub>3</sub>PO<sub>3</sub>) — never both in the same molecule.',
      },
      {
        t: 'p',
        html: '<b>The rule that decides basicity is the number of ionisable P–OH groups, not the total number of hydrogen atoms in the formula.</b> P–H bonds are not ionisable — the hydrogen is bonded directly to phosphorus, not to oxygen, and plays no role in acidity — while every P–OH hydrogen is:',
      },
      {
        t: 'table',
        title: null,
        head: ['Acid', 'Formula', 'Ox. state', 'P–OH', 'P–H', 'Basicity', 'Reducing'],
        rows: [
          ['Hypophosphorous', 'H<sub>3</sub>PO<sub>2</sub>', '+1', '1', '2', '<b>Monobasic</b>', 'Strong'],
          ['Orthophosphorous', 'H<sub>3</sub>PO<sub>3</sub>', '+3', '2', '1', '<b>Dibasic</b>', 'Yes'],
          ['Orthophosphoric', 'H<sub>3</sub>PO<sub>4</sub>', '+5', '3', '0', '<b>Tribasic</b>', 'No'],
          ['Pyrophosphoric', 'H<sub>4</sub>P<sub>2</sub>O<sub>7</sub>', '+5', '4', '0', 'Tetrabasic', 'No'],
          ['Hypophosphoric', 'H<sub>4</sub>P<sub>2</sub>O<sub>6</sub>', '+4', '4', '0', 'Tetrabasic', 'Weakly'],
        ],
      },
      {
        t: 'p',
        html: '(The modern IUPAC names for the first two are phosphinic and phosphonic acid respectively. Hypophosphoric acid has no P–H bond at all; its two phosphorus atoms are joined by a direct P–P bond, and although phosphorus at +4 could be oxidised to +5, the acid resists oxidation in practice, so it is at best weakly reducing. The exam rule is about P–H bonds: an acid with a P–H bond is a good reducing agent.)',
      },
      {
        t: 'p',
        html: 'So despite having three hydrogens in its formula, H<sub>3</sub>PO<sub>3</sub> is <b>dibasic</b>, and H<sub>3</sub>PO<sub>2</sub> is <b>monobasic</b> despite also having three hydrogens — count P–OH groups, never total H atoms. The acids that carry P–H bonds are strong reducing agents precisely because that bond is easily broken: H<sub>3</sub>PO<sub>2</sub>, with two P–H bonds, is a good enough reductant to reduce silver nitrate to metallic silver,<br>4AgNO<sub>3</sub> + 2H<sub>2</sub>O + H<sub>3</sub>PO<sub>2</sub> → 4Ag + 4HNO<sub>3</sub> + H<sub>3</sub>PO<sub>4</sub>',
      },
      {
        t: 'p',
        html: 'Acids in the +3 oxidation state of phosphorus tend to disproportionate on heating into the +5 and −3 states — orthophosphorous acid gives orthophosphoric acid and phosphine:<br>4H<sub>3</sub>PO<sub>3</sub> →<sup>Δ</sup> 3H<sub>3</sub>PO<sub>4</sub> + PH<sub>3</sub>',
      },
    ],
  },

  // ───────────────────────── Topic 09 · Section 3 · pp. 536–537 ─────────────────────────
  {
    n: '09',
    title: 'Group 16: The Oxygen Family',
    kalam: 'Group 16 (oxygen, sulphur, selenium, tellurium, polonium — the chalcogens) has the general valence configuration ns² np⁴.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Group 16 (oxygen, sulphur, selenium, tellurium, polonium — the chalcogens) has the general valence configuration <i>n</i>s<sup>2</sup> <i>n</i>p<sup>4</sup>. Atomic and ionic radii increase down the group, though oxygen itself is exceptionally small. Ionisation enthalpy is systematically lower than the corresponding Group 15 elements in the same period, precisely because Group 15’s half-filled p<sup>3</sup> configuration is the extra-stable one and Group 16’s p<sup>4</sup> is not.',
      },
      {
        t: 'p',
        html: '<b>Electron gain enthalpy.</b> Oxygen’s electron gain enthalpy is less negative than sulphur’s, because the incoming electron in the compact oxygen atom experiences significant repulsion from the existing electron density — the same size-driven anomaly you will see repeated for fluorine in Group 17. From sulphur onward the electron gain enthalpy again becomes less negative down the group as atomic size increases.',
      },
      {
        t: 'p',
        html: '<b>Oxidation states.</b> −2 is the characteristic state, but its stability falls down the group (polonium barely shows −2 at all); in its compounds oxygen shows only negative oxidation states except in OF<sub>2</sub> (where it is +2, since fluorine is more electronegative), O<sub>2</sub>F<sub>2</sub> (+1) and the dioxygenyl ion O<sub>2</sub><sup>+</sup> (+½, in Bartlett’s O<sub>2</sub><sup>+</sup>PtF<sub>6</sub><sup>−</sup>, Topic 12, Group 18: The Noble Gases). The other elements commonly show +4 and +6, with +6 becoming less stable and +4 more stable down the group — inert-pair effect again. Oxygen itself is restricted to a maximum covalency of four (and rarely exceeds two) because it has no valence d orbitals, while sulphur, selenium and tellurium can expand their valence shells and readily exceed a covalency of four, as in SF<sub>6</sub>.',
      },
      {
        t: 'p',
        html: '<b>Hydrides.</b> All members form H<sub>2</sub>E hydrides. Two trends move in opposite directions down the group, and both are exam staples:',
      },
      {
        t: 'p',
        html: '• <b>Thermal stability falls steadily down the group</b>, H<sub>2</sub>O > H<sub>2</sub>S > H<sub>2</sub>Se > H<sub>2</sub>Te > H<sub>2</sub>Po, tracking the falling H–E bond dissociation enthalpy (463 kJ mol<sup>−1</sup> for O–H down to 238 kJ mol<sup>−1</sup> for Te–H). All the hydrides except water are reducing agents, and this reducing power increases from H<sub>2</sub>S to H<sub>2</sub>Te as the weaker bond makes the hydrogen easier to abstract.',
      },
      {
        t: 'p',
        html: '• <b>Acidic strength rises steadily down the group</b> for exactly the same reason: a weaker H–E bond ionises more readily in water, so H<sub>2</sub>S is more acidic than H<sub>2</sub>O, and H<sub>2</sub>Te is the most acidic of the family.',
      },
      {
        t: 'p',
        html: 'Water is a liquid while H<sub>2</sub>S is a gas at room temperature purely because of extensive hydrogen bonding in H<sub>2</sub>O, driven by oxygen’s small size and high electronegativity — an association absent in H<sub>2</sub>S, since sulphur’s electronegativity is too low to support it.',
      },

      { t: 'part', title: 'Dioxygen' },
      {
        t: 'p',
        html: 'O<sub>2</sub> is prepared in the laboratory by heating oxo-salts such as chlorates (2KClO<sub>3</sub> →<sup>MnO₂, Δ</sup> 2KCl + 3O<sub>2</sub>), by decomposing certain metal oxides, or by catalytic decomposition of hydrogen peroxide. Industrially it is obtained from the fractional distillation of liquid air. Dioxygen is colourless and odourless, and — despite having an even number of electrons — is <b>paramagnetic</b>: molecular orbital theory shows two unpaired electrons in the degenerate π* antibonding orbitals of O<sub>2</sub>, a fact you should already have from Class 11 bonding theory and one that keeps returning in this unit. Its combination with other elements is usually strongly exothermic, though a high external energy input is often needed to overcome the O=O bond dissociation enthalpy (493.4 kJ mol<sup>−1</sup>) and initiate the reaction.',
      },
      {
        t: 'p',
        html: 'Oxides formed with O<sub>2</sub> fall into four classes: <b>acidic</b> (typically non-metal oxides, e.g. SO<sub>2</sub>, CO<sub>2</sub>, and also some high-oxidation-state metal oxides like Mn<sub>2</sub>O<sub>7</sub>, CrO<sub>3</sub>), <b>basic</b> (Na<sub>2</sub>O, CaO), <b>amphoteric</b> (Al<sub>2</sub>O<sub>3</sub>, reacting with both acid and alkali), and <b>neutral</b> (CO, NO, N<sub>2</sub>O).',
      },

      { t: 'part', title: 'Ozone' },
      {
        t: 'p',
        html: 'Ozone, O<sub>3</sub>, forms naturally in the upper atmosphere from O<sub>2</sub> under UV light and shields the earth’s surface from excess ultraviolet radiation. In the laboratory it is made by passing a silent electrical discharge through cold, dry oxygen — a silent discharge is necessary because the conversion 3O<sub>2</sub> → 2O<sub>3</sub> is endothermic (+142 kJ per mole of O<sub>3</sub> formed, so +284 kJ for the equation as written; NCERT prints +142 kJ mol<sup>−1</sup> beside the equation) and a spark would simply decompose the ozone as fast as it forms. Structurally, ozone is <b>bent (angular)</b>, with a bond angle of about 117° and two identical O–O bond lengths of 128 pm, best described as a resonance hybrid of two equivalent canonical forms — neither a pure single nor a pure double bond describes the real structure.',
      },
      {
        t: 'p',
        html: 'Because it decomposes to O<sub>2</sub> with a release of heat and an increase in entropy, ozone is thermodynamically unstable and can decompose explosively at high concentration. Its real chemical importance is as a <b>powerful oxidising agent</b>, acting via the ready release of nascent oxygen, O<sub>3</sub> → O<sub>2</sub> + [O]:<br>PbS(s) + 4O<sub>3</sub>(g) → PbSO<sub>4</sub>(s) + 4O<sub>2</sub>(g),<br>2I<sup>−</sup>(aq) + H<sub>2</sub>O(l) + O<sub>3</sub>(g) → 2OH<sup>−</sup>(aq) + I<sub>2</sub>(s) + O<sub>2</sub>(g)',
      },
      {
        t: 'p',
        html: 'This last reaction — iodine liberated from buffered KI solution, titrated against standard sodium thiosulphate — is the standard quantitative method for estimating ozone. Uses of ozone include germicidal water treatment, bleaching, and as an oxidant in potassium permanganate manufacture.',
      },
    ],
  },
];
