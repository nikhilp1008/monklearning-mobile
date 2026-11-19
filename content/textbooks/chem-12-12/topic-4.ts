import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 12, Practical Chemistry, Topic 04: qualitative salt analysis, cations and anions.
 * Original text (no book to copy). Observations, colours, reagents and precipitates are
 * taken from the NCERT Chemistry Laboratory Manual (Class XI and XII, Unit 7); every
 * equation is balanced for atoms and charge. Drawings: c12-12-04-d1 (group reagent chart),
 * d2 (cation group separation flow chart), d3 (anion test flow), d4 (brown ring tube).
 */
export const TOPICS: Topic[] = [
  {
      n: '04',
      title: 'Qualitative salt analysis: cations and anions',
      kalam: 'Each ion gives its own gas, colour or precipitate, and the group reagents fix the order of the tests.',
      blocks: [
        {
          t: 'part',
          title: 'Aim and principle',
        },
        {
          t: 'p',
          html: '<b>Aim.</b> To detect one cation and one anion in a salt that is given to you as an unknown. The ions on the syllabus list are<br>• cations Pb<sup>2+</sup>, Cu<sup>2+</sup>, Al<sup>3+</sup>, Fe<sup>3+</sup>, Zn<sup>2+</sup>, Ni<sup>2+</sup>, Ca<sup>2+</sup>, Ba<sup>2+</sup>, Mg<sup>2+</sup> and NH<sub>4</sub><sup>+</sup>;<br>• anions CO<sub>3</sub><sup>2−</sup>, S<sup>2−</sup>, SO<sub>4</sub><sup>2−</sup>, NO<sub>3</sub><sup>−</sup>, NO<sub>2</sub><sup>−</sup>, Cl<sup>−</sup>, Br<sup>−</sup> and I<sup>−</sup>.<br>Insoluble salts are excluded: a salt that dissolves in none of water, dilute acids, concentrated acids or aqua regia is not set.',
        },
        {
          t: 'p',
          html: '<b>Two principles do all the work.</b> The first is the <b>solubility product</b>: a salt precipitates when the product of its ion concentrations (the ionic product) exceeds its solubility product. The second is the <b>common ion effect</b>: adding an ion that is already present lowers the concentration of the other ion that the same weak electrolyte can give. A group reagent is chosen, and its medium is adjusted, so that the ionic product is exceeded for the ions of one group only. Every other test in this topic is a particular case of these two ideas, or a characteristic colour, gas or complex.',
        },
        {
          t: 'p',
          html: '<b>The flow of an analysis.</b> The manual fixes the order, and each step uses what the one before has told you.<br>1. <b>Preliminary examination</b> of the solid salt and its solution: colour, smell, solubility, the effect of heat, the flame test and the bead tests. These take 10 to 15 minutes and narrow the field, but none of them is conclusive.<br>2. <b>Anions</b>, from the gas given off by dilute sulphuric acid, then by concentrated sulphuric acid, then (if neither gives a result) the barium chloride test for sulphate. Each is then confirmed by a wet test.<br>3. <b>The original solution</b>: a clear solution of the salt, made in the first solvent that works.<br>4. <b>Cations</b>: ammonium first, from the original salt with sodium hydroxide, then Group I to Group VI in order, each reagent added to the filtrate of the group before.<br>5. <b>The record</b>: observations and inferences in two columns, as the manual\'s specimen record shows.',
        },
        {
          t: 'p',
          html: '<b>The solution tells you something too.</b> If the salt solution is basic, the salt may be a carbonate or a sulphide, because it is being hydrolysed. If it is acidic, the salt may be an acid salt or the salt of a weak base with a strong acid; the manual advises neutralising such a solution with sodium carbonate before testing for anions.',
        },
        {
          t: 'part',
          title: 'Preliminary tests on the salt',
        },
        {
          t: 'p',
          html: 'Colour, dry heating, flame and bead tests are the <b>dry tests</b>. They suggest a cation; the wet tests settle it. Quote only what a test actually shows: "indicates" is the word the manual uses.',
        },
        {
          t: 'table',
          title: 'Colour of the salt and the effect of heating it',
          head: [
            'Ion indicated',
            'Colour of the salt',
            'Dry heating: cold, then hot',
          ],
          rows: [
            [
              'Copper(II), Cu<sup>2+</sup>',
              'blue',
              'blue when cold, white when hot',
            ],
            [
              'Nickel(II), Ni<sup>2+</sup>',
              'bright green',
              'not a listed test',
            ],
            [
              'Iron(III), Fe<sup>3+</sup> (and iron(II))',
              'light green, yellow or brown',
              'not listed for iron(III); iron(II) is green cold, dirty white or yellow hot',
            ],
            [
              'Zinc, Zn<sup>2+</sup>',
              'white',
              'white when cold, yellow when hot',
            ],
          ],
          note: 'A white salt rules out Cu<sup>2+</sup>, Ni<sup>2+</sup> and iron salts, but not Zn<sup>2+</sup>, Pb<sup>2+</sup>, Al<sup>3+</sup>, Ca<sup>2+</sup>, Ba<sup>2+</sup>, Mg<sup>2+</sup> or NH<sub>4</sub><sup>+</sup>. Colours of hydrated salts differ from those of the anhydrous ones, so a hint is all this is.',
        },
        {
          t: 'p',
          html: '<b>Flame test.</b> Chlorides of several metals are volatile in a non-luminous flame and colour it, which is why the salt is made into a paste with concentrated HCl.',
        },
        {
          t: 'proc',
          title: 'Flame test with a platinum wire',
          steps: [
            'Make a tiny loop at one end of a platinum wire.',
            'Dip the loop in concentrated HCl and hold it in a non-luminous flame. Repeat until the wire gives the flame no colour.',
            'Put 2 or 3 drops of concentrated HCl on a clean watch glass and make a paste of a little salt in it.',
            'Dip the clean loop in the paste and hold it in the non-luminous (oxidising) flame.',
            'Watch the flame with the naked eye, then through a blue glass, and read the ion from the table.',
          ],
        },
        {
          t: 'table',
          title: 'Flame test: colour with the naked eye and through blue glass',
          head: [
            'Ion indicated',
            'Naked eye',
            'Through blue glass',
          ],
          rows: [
            [
              'Copper(II), Cu<sup>2+</sup>',
              'green flame with a blue centre',
              'same colour as without the glass',
            ],
            [
              'Barium, Ba<sup>2+</sup>',
              'apple green (grassy green)',
              'bluish green',
            ],
            [
              'Calcium, Ca<sup>2+</sup>',
              'brick red',
              'green (greenish-yellow)',
            ],
          ],
          note: 'The manual describes calcium through blue glass as "green" in one table and "greenish-yellow" in another; the two describe the same faint tint.',
        },
        {
          t: 'p',
          html: '<b>Borax bead test (coloured salts only).</b> Borax melts to a clear glassy bead of sodium metaborate and boric anhydride. A coloured metal salt dipped into the bead gives the metal\'s metaborate, whose colour depends on whether the flame is oxidising or reducing:<br>Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·10H<sub>2</sub>O → Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub> + 10H<sub>2</sub>O<br>Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub> → 2NaBO<sub>2</sub> + B<sub>2</sub>O<sub>3</sub><br>CuSO<sub>4</sub> + B<sub>2</sub>O<sub>3</sub> → Cu(BO<sub>2</sub>)<sub>2</sub> + SO<sub>3</sub> (blue-green)<br>In the reducing flame the blue Cu(BO<sub>2</sub>)<sub>2</sub> is reduced either to colourless CuBO<sub>2</sub>, 2Cu(BO<sub>2</sub>)<sub>2</sub> + 2NaBO<sub>2</sub> + C → 2CuBO<sub>2</sub> + Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub> + CO, or to red opaque copper metal, 2Cu(BO<sub>2</sub>)<sub>2</sub> + 4NaBO<sub>2</sub> + 2C → 2Cu + 2Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub> + 2CO.',
        },
        {
          t: 'table',
          title: 'Borax bead colours',
          head: [
            'Ion indicated',
            'Oxidising flame, cold then hot',
            'Reducing flame, cold then hot',
          ],
          rows: [
            [
              'Copper(II), Cu<sup>2+</sup>',
              'blue, then green',
              'red opaque, then colourless',
            ],
            [
              'Nickel(II), Ni<sup>2+</sup>',
              'reddish brown, then violet',
              'grey, then grey',
            ],
            [
              'Iron(III), Fe<sup>3+</sup>',
              'yellow, then yellowish brown',
              'green, then green',
            ],
          ],
        },
        {
          t: 'p',
          html: '<b>Charcoal cavity test.</b> The salt and anhydrous sodium carbonate, moistened, are heated in a cavity bored in a charcoal block with a blowpipe in the reducing flame. The metal carbonate forms, decomposes to the oxide, and carbon may reduce the oxide to the metal:<br>CuSO<sub>4</sub> + Na<sub>2</sub>CO<sub>3</sub> → CuCO<sub>3</sub> + Na<sub>2</sub>SO<sub>4</sub><br>CuCO<sub>3</sub> → CuO + CO<sub>2</sub><br>CuO + C → Cu + CO (red metal)<br>ZnSO<sub>4</sub> + Na<sub>2</sub>CO<sub>3</sub> → ZnCO<sub>3</sub> + Na<sub>2</sub>SO<sub>4</sub><br>ZnCO<sub>3</sub> → ZnO + CO<sub>2</sub> (yellow when hot, white when cold)<br>A fresh cavity is bored for every salt.',
        },
        {
          t: 'table',
          title: 'Charcoal cavity test, then the cobalt nitrate test on a white residue',
          head: [
            'Ion indicated',
            'What you see',
          ],
          rows: [
            [
              'Lead(II), Pb<sup>2+</sup>',
              'yellow residue when hot, grey metal when cold',
            ],
            [
              'Zinc, Zn<sup>2+</sup>',
              'yellow residue when hot, white when cold',
            ],
            [
              'Zinc, after cobalt nitrate and strong heating',
              'residue turns green, CoO·ZnO',
            ],
            [
              'Aluminium, after cobalt nitrate and strong heating',
              'residue turns blue, CoO·Al<sub>2</sub>O<sub>3</sub>',
            ],
            [
              'Magnesium, after cobalt nitrate and strong heating',
              'residue turns pink, CoO·MgO',
            ],
          ],
          note: 'For the cobalt nitrate test, put 2 or 3 drops of cobalt nitrate on the white residue and heat it strongly in the non-luminous flame. Cobalt nitrate decomposes, 2Co(NO<sub>3</sub>)<sub>2</sub> → 2CoO + 4NO<sub>2</sub> + O<sub>2</sub>, and CoO combines with the metal oxide.',
        },
        {
          t: 'part',
          title: 'The original solution and the group separation of cations',
        },
        {
          t: 'p',
          html: 'Cations are tested in the <b>original solution</b>, a clear solution of the salt. It is made by trying solvents in a fixed order and stopping at the first that works.',
        },
        {
          t: 'proc',
          title: 'Preparing the original solution',
          steps: [
            'Shake a little salt with a few mL of distilled water in a clean boiling tube. If it does not dissolve, heat the tube until it does.',
            'If it is insoluble in water, take fresh salt and a few mL of dilute HCl. Heat if it does not dissolve in the cold.',
            'If it still does not dissolve, heat fresh salt with a few mL of concentrated HCl.',
            'If it does not dissolve in concentrated HCl, try dilute nitric acid.',
            'Last, try aqua regia, concentrated HCl and concentrated HNO<sub>3</sub> in the ratio 3∶1. A salt that resists even this is an insoluble salt and is not given.',
          ],
        },
        {
          t: 'p',
          html: 'Avoid making the solution in concentrated nitric or sulphuric acid. Both oxidise H<sub>2</sub>S to sulphur in Group II, and sulphuric acid turns the salts of Ba<sup>2+</sup> and Pb<sup>2+</sup> into insoluble sulphates, so those ions would be lost before their groups.',
        },
        {
          t: 'table',
          title: 'The cation groups, their reagents and what precipitates',
          head: [
            'Group',
            'Group reagent',
            'Cations on the syllabus list',
            'What you see',
          ],
          rows: [
            [
              'Group zero',
              'none; warm the original salt with NaOH',
              'NH<sub>4</sub><sup>+</sup>',
              'no precipitate; ammonia gas',
            ],
            [
              'Group I',
              'dilute HCl',
              'Pb<sup>2+</sup>',
              'PbCl<sub>2</sub>, white',
            ],
            [
              'Group II',
              'H<sub>2</sub>S gas in the presence of dilute HCl',
              'Pb<sup>2+</sup>, Cu<sup>2+</sup>',
              'PbS and CuS, black',
            ],
            [
              'Group III',
              'NH<sub>4</sub>OH in the presence of NH<sub>4</sub>Cl',
              'Al<sup>3+</sup>, Fe<sup>3+</sup>',
              'Al(OH)<sub>3</sub> white and gelatinous; Fe(OH)<sub>3</sub> brown',
            ],
            [
              'Group IV',
              'H<sub>2</sub>S in the presence of NH<sub>4</sub>OH',
              'Zn<sup>2+</sup>, Ni<sup>2+</sup>',
              'ZnS white; NiS black',
            ],
            [
              'Group V',
              'NH<sub>4</sub>Cl, NH<sub>4</sub>OH and (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>',
              'Ca<sup>2+</sup>, Ba<sup>2+</sup>',
              'CaCO<sub>3</sub> and BaCO<sub>3</sub>, white',
            ],
            [
              'Group VI',
              'none',
              'Mg<sup>2+</sup>',
              'nothing in the earlier groups; white crystalline Mg(NH<sub>4</sub>)PO<sub>4</sub> with Na<sub>2</sub>HPO<sub>4</sub>',
            ],
          ],
          note: 'The manual\'s list is longer. It also puts As<sup>3+</sup> in Group II (yellow sulphide, dissolving in yellow ammonium sulphide), Co<sup>2+</sup> and Mn<sup>2+</sup> in Group IV and Sr<sup>2+</sup> in Group V. They are outside this syllabus list, but they explain some steps below.',
        },
        {
          t: 'fig',
          id: 'c12-12-04-d1',
        },
        {
          t: 'fig',
          id: 'c12-12-04-d2',
        },
        {
          t: 'p',
          html: '<b>Rules of the sequence.</b> Each reagent is added to the filtrate left after the group before. A group must be removed completely with an excess of its reagent; an ion that is left over turns up again in a later group and spoils it. For a single cation, the usual case, the manual goes on to the next group only when the group before has given no precipitate; with more than one cation the scheme must be modified.',
        },
        {
          t: 'p',
          html: '<b>Group I (dilute HCl).</b> If the original solution was made in hot concentrated HCl, add cold water and cool the tube instead. A white precipitate is PbCl<sub>2</sub>, which dissolves in hot water.',
        },
        {
          t: 'p',
          html: '<b>Group II against Group IV: one gas, two media.</b> Hydrogen sulphide is a weak acid:<br>H<sub>2</sub>S ⇌ 2H<sup>+</sup> + S<sup>2−</sup><br>In dilute HCl the extra H<sup>+</sup> pushes this equilibrium to the left (common ion effect), so S<sup>2−</sup> is very low. Only the sulphides with the smallest solubility products, CuS and PbS, reach their solubility product, and they precipitate. ZnS and NiS stay dissolved; this is why ZnS is not precipitated in Group II. If the solution is too acidic, lead does not precipitate; if too little HCl is used, zinc comes down as well, so the acid is added in the right amount (the manual dilutes the Group I filtrate with water and passes H<sub>2</sub>S into the warm solution). In Group IV the solution is ammoniacal: OH<sup>−</sup> takes up H<sup>+</sup>, the equilibrium moves right and S<sup>2−</sup> is large enough for ZnS and NiS.',
        },
        {
          t: 'p',
          html: '<b>Group II sub-groups.</b> The black precipitate is warmed with yellow ammonium sulphide. Copper and lead sulphides do not dissolve (Group IIA, the copper sub-group); arsenic sulphide would (Group IIB). Since As<sup>3+</sup> is not on the list, a precipitate that stays is the one you tested.',
        },
        {
          t: 'p',
          html: '<b>Group III: why NH<sub>4</sub>Cl comes before NH<sub>4</sub>OH.</b> Ammonium hydroxide is a weak base:<br>NH<sub>4</sub>OH ⇌ NH<sub>4</sub><sup>+</sup> + OH<sup>−</sup><br>The NH<sub>4</sub><sup>+</sup> from the added ammonium chloride is a common ion, so OH<sup>−</sup> is kept low. Only the very insoluble hydroxides, Fe(OH)<sub>3</sub> and Al(OH)<sub>3</sub>, have an ionic product above their solubility product and precipitate. The more soluble hydroxides of the later groups (zinc, nickel, magnesium) do not. Before this step, add 2 to 3 drops of concentrated HNO<sub>3</sub> and heat, which oxidises any iron(II) to iron(III) (the manual shows 2FeCl<sub>2</sub> + 2HCl + [O] → 2FeCl<sub>3</sub> + H<sub>2</sub>O), so all the iron comes down as Fe(OH)<sub>3</sub>. After cooling, add solid NH<sub>4</sub>Cl and excess NH<sub>4</sub>OH until the solution smells of ammonia. Boil off the H<sub>2</sub>S from the Group II filtrate first, or the Group IV sulphides will appear here.',
        },
        {
          t: 'p',
          html: '<b>Group V and the odd one out, Mg<sup>2+</sup>.</b> After Group IV, add solid NH<sub>4</sub>Cl and excess NH<sub>4</sub>OH, then solid (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>. A white precipitate is BaCO<sub>3</sub> or CaCO<sub>3</sub>. Magnesium carbonate does not precipitate here, because ammonium ions take carbonate out of the solution:<br>NH<sub>4</sub><sup>+</sup> + CO<sub>3</sub><sup>2−</sup> ⇌ NH<sub>3</sub> + HCO<sub>3</sub><sup>−</sup><br>The carbonate concentration needed to precipitate MgCO<sub>3</sub> is never reached, so the magnesium stays dissolved with no group reagent of its own, and is found last with disodium hydrogenphosphate.',
        },
        {
          t: 'part',
          title: 'Confirmatory tests for cations, group by group',
        },
        {
          t: 'p',
          html: 'Each table gives the test, what you see in words, and the species responsible. The balanced ionic equations follow each table.',
        },
        {
          t: 'p',
          html: '<b>Group zero: ammonium.</b>',
        },
        {
          t: 'table',
          title: 'Ammonium ion',
          head: [
            'Test',
            'What you see',
            'Responsible',
          ],
          rows: [
            [
              'Warm the salt with NaOH solution; hold a glass rod dipped in HCl at the mouth of the tube',
              'smell of ammonia; dense white fumes on the rod',
              'NH<sub>3</sub> gas, then solid NH<sub>4</sub>Cl',
            ],
            [
              'Pass the gas into Nessler\'s reagent',
              'brown colouration or brown precipitate',
              'basic mercury(II) amido-iodide, HgO·Hg(NH<sub>2</sub>)I',
            ],
          ],
        },
        {
          t: 'formula',
          kicker: 'Ammonium ion: the ammonia tests',
          main: 'NH<sub>4</sub><sup>+</sup> + OH<sup>−</sup> → NH<sub>3</sub>↑ + H<sub>2</sub>O<br>NH<sub>3</sub> + HCl → NH<sub>4</sub>Cl<br>2[HgI<sub>4</sub>]<sup>2−</sup> + NH<sub>3</sub> + 3OH<sup>−</sup> → HgO·Hg(NH<sub>2</sub>)I↓ + 7I<sup>−</sup> + 2H<sub>2</sub>O',
          legend: [
            'NH<sub>3</sub> = ammonia gas, sharp smell',
            'NH<sub>4</sub>Cl = white fumes',
            '[HgI<sub>4</sub>]<sup>2−</sup> = iodomercurate(II), Nessler\'s reagent',
            'HgO·Hg(NH<sub>2</sub>)I = brown precipitate',
          ],
          note: 'Nessler\'s reagent is K<sub>2</sub>HgI<sub>4</sub> in KOH solution.',
        },
        {
          t: 'p',
          html: '<b>Group I and Group II: lead(II) and copper(II).</b>',
        },
        {
          t: 'table',
          title: 'Lead(II): Group I precipitate dissolved in hot water, divided in three',
          head: [
            'Reagent',
            'What you see',
            'Responsible',
          ],
          rows: [
            [
              'Potassium iodide',
              'yellow precipitate',
              'PbI<sub>2</sub>',
            ],
            [
              'Potassium chromate',
              'yellow precipitate, soluble in NaOH, insoluble in ammonium acetate',
              'PbCrO<sub>4</sub>',
            ],
            [
              'A few drops of alcohol, then dilute H<sub>2</sub>SO<sub>4</sub>',
              'white precipitate, soluble in ammonium acetate',
              'PbSO<sub>4</sub>',
            ],
          ],
          note: 'PbI<sub>2</sub> dissolves in boiling water and returns on cooling as shining crystals.',
        },
        {
          t: 'table',
          title: 'Group II: black sulphide insoluble in yellow ammonium sulphide (lead or copper)',
          head: [
            'Step',
            'What you see',
            'Conclusion',
          ],
          rows: [
            [
              'Boil the precipitate with dilute HNO<sub>3</sub>; add alcohol and dilute H<sub>2</sub>SO<sub>4</sub>',
              'white precipitate',
              'Lead(II): PbSO<sub>4</sub>',
            ],
            [
              'Dissolve that precipitate in ammonium acetate, acidify with acetic acid, add potassium chromate (or potassium iodide) to portions',
              'yellow precipitate in each',
              'Lead(II): PbCrO<sub>4</sub>, PbI<sub>2</sub>',
            ],
            [
              'If no precipitate formed, add excess NH<sub>4</sub>OH to the nitrate solution',
              'deep blue solution',
              'Copper(II): [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>',
            ],
            [
              'Acidify the blue solution with acetic acid, add potassium ferrocyanide',
              'chocolate-brown precipitate',
              'Copper(II): Cu<sub>2</sub>[Fe(CN)<sub>6</sub>]',
            ],
          ],
          note: 'A small amount of NH<sub>4</sub>OH first gives a precipitate of basic copper sulphate, which dissolves in excess to the deep blue complex.',
        },
        {
          t: 'formula',
          kicker: 'Lead(II): Group I and II and confirmatory reactions',
          main: 'Pb<sup>2+</sup> + 2Cl<sup>−</sup> → PbCl<sub>2</sub>↓<br>Pb<sup>2+</sup> + H<sub>2</sub>S → PbS↓ + 2H<sup>+</sup><br>3PbS + 8HNO<sub>3</sub> → 3Pb(NO<sub>3</sub>)<sub>2</sub> + 2NO + 4H<sub>2</sub>O + 3S<br>Pb<sup>2+</sup> + 2I<sup>−</sup> → PbI<sub>2</sub>↓<br>Pb<sup>2+</sup> + CrO<sub>4</sub><sup>2−</sup> → PbCrO<sub>4</sub>↓<br>PbCrO<sub>4</sub> + 4OH<sup>−</sup> → [Pb(OH)<sub>4</sub>]<sup>2−</sup> + CrO<sub>4</sub><sup>2−</sup><br>Pb<sup>2+</sup> + SO<sub>4</sub><sup>2−</sup> → PbSO<sub>4</sub>↓<br>PbSO<sub>4</sub> + 4CH<sub>3</sub>COO<sup>−</sup> → [Pb(CH<sub>3</sub>COO)<sub>4</sub>]<sup>2−</sup> + SO<sub>4</sub><sup>2−</sup>',
          legend: [
            'PbCl<sub>2</sub> = white precipitate, soluble in hot water',
            'PbS = black precipitate',
            'PbI<sub>2</sub> = yellow precipitate',
            'PbCrO<sub>4</sub> = yellow precipitate',
            'PbSO<sub>4</sub> = white precipitate',
            '[Pb(OH)<sub>4</sub>]<sup>2−</sup> = tetrahydroxoplumbate(II)',
            '[Pb(CH<sub>3</sub>COO)<sub>4</sub>]<sup>2−</sup> = soluble acetate complex',
          ],
          note: null,
        },
        {
          t: 'formula',
          kicker: 'Copper(II): Group II and confirmatory reactions',
          main: 'Cu<sup>2+</sup> + H<sub>2</sub>S → CuS↓ + 2H<sup>+</sup><br>3CuS + 8HNO<sub>3</sub> → 3Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO + 3S + 4H<sub>2</sub>O<br>Cu(OH)<sub>2</sub>·CuSO<sub>4</sub> + 8NH<sub>3</sub> → 2[Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup> + SO<sub>4</sub><sup>2−</sup> + 2OH<sup>−</sup><br>2Cu<sup>2+</sup> + [Fe(CN)<sub>6</sub>]<sup>4−</sup> → Cu<sub>2</sub>[Fe(CN)<sub>6</sub>]↓',
          legend: [
            'CuS = black precipitate',
            '[Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup> = deep blue complex',
            'Cu<sub>2</sub>[Fe(CN)<sub>6</sub>] = chocolate-brown precipitate',
            '[Fe(CN)<sub>6</sub>]<sup>4−</sup> = hexacyanoferrate(II), ferrocyanide',
          ],
          note: null,
        },
        {
          t: 'p',
          html: '<b>Group III: aluminium and iron(III).</b> The precipitate is dissolved in dilute HCl (Al(OH)<sub>3</sub> + 3H<sup>+</sup> → Al<sup>3+</sup> + 3H<sub>2</sub>O, and the same for iron), and the solution is divided in two.',
        },
        {
          t: 'table',
          title: 'Group III: aluminium and iron(III)',
          head: [
            'Ion',
            'Test',
            'What you see',
            'Responsible',
          ],
          rows: [
            [
              'Iron(III), brown precipitate',
              'add potassium ferrocyanide',
              'blue precipitate or colouration (Prussian blue)',
              'Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub>',
            ],
            [
              'Iron(III), brown precipitate',
              'add potassium thiocyanate',
              'blood-red colouration',
              '[Fe(SCN)]<sup>2+</sup>',
            ],
            [
              'Aluminium, white precipitate',
              'add NaOH and warm',
              'white gelatinous precipitate, soluble in excess NaOH',
              'Al(OH)<sub>3</sub>, then AlO<sub>2</sub><sup>−</sup>',
            ],
            [
              'Aluminium, white precipitate',
              'add blue litmus (it turns red), then NH<sub>4</sub>OH drop by drop down the side of the tube',
              'blue floating mass in a colourless solution (the lake test)',
              'Al(OH)<sub>3</sub> adsorbing the blue litmus dye',
            ],
          ],
          note: 'With excess potassium ferrocyanide the product KFe[Fe(CN)<sub>6</sub>] forms a colloidal "soluble Prussian blue" that cannot be filtered.',
        },
        {
          t: 'formula',
          kicker: 'Group III: aluminium and iron(III) reactions',
          main: 'Al<sup>3+</sup> + 3NH<sub>3</sub> + 3H<sub>2</sub>O → Al(OH)<sub>3</sub>↓ + 3NH<sub>4</sub><sup>+</sup><br>Al<sup>3+</sup> + 3OH<sup>−</sup> → Al(OH)<sub>3</sub>↓<br>Al(OH)<sub>3</sub> + OH<sup>−</sup> → AlO<sub>2</sub><sup>−</sup> + 2H<sub>2</sub>O<br>Fe<sup>3+</sup> + 3NH<sub>3</sub> + 3H<sub>2</sub>O → Fe(OH)<sub>3</sub>↓ + 3NH<sub>4</sub><sup>+</sup><br>4Fe<sup>3+</sup> + 3[Fe(CN)<sub>6</sub>]<sup>4−</sup> → Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub>↓<br>Fe<sup>3+</sup> + SCN<sup>−</sup> → [Fe(SCN)]<sup>2+</sup>',
          legend: [
            'Al(OH)<sub>3</sub> = white gelatinous precipitate',
            'AlO<sub>2</sub><sup>−</sup> = aluminate ion',
            'Fe(OH)<sub>3</sub> = brown precipitate',
            'Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub> = Prussian blue',
            '[Fe(SCN)]<sup>2+</sup> = blood-red complex',
            'SCN<sup>−</sup> = thiocyanate ion',
          ],
          note: 'Both forms are written for the blood-red thiocyanate complex: [Fe(SCN)]<sup>2+</sup> here, and Fe(SCN)<sub>3</sub> in the Lassaigne test of Topic 01.',
        },
        {
          t: 'p',
          html: '<b>Group IV: zinc and nickel.</b> The ZnS (white) or NiS (black) precipitate is treated as shown.',
        },
        {
          t: 'table',
          title: 'Group IV: zinc and nickel',
          head: [
            'Ion',
            'Test',
            'What you see',
            'Responsible',
          ],
          rows: [
            [
              'Zinc, white precipitate',
              'dissolve ZnS in dilute HCl by boiling; add NaOH',
              'white precipitate, soluble in excess NaOH',
              'Zn(OH)<sub>2</sub>, then ZnO<sub>2</sub><sup>2−</sup>',
            ],
            [
              'Zinc, white precipitate',
              'neutralise a second part with NH<sub>4</sub>OH; add potassium ferrocyanide',
              'white or bluish-white precipitate',
              'Zn<sub>2</sub>[Fe(CN)<sub>6</sub>]',
            ],
            [
              'Nickel, black precipitate',
              'dissolve NiS in aqua regia, evaporate to dryness, dissolve the residue in water; make alkaline with NH<sub>4</sub>OH; add dimethylglyoxime',
              'bright red precipitate',
              'nickel dimethylglyoximate, Ni(C<sub>4</sub>H<sub>7</sub>N<sub>2</sub>O<sub>2</sub>)<sub>2</sub>',
            ],
          ],
          note: 'A black Group IV precipitate may also be cobalt sulphide; the manual separates the two (yellow K<sub>3</sub>[Co(NO<sub>2</sub>)<sub>6</sub>] with potassium nitrite and acetic acid is cobalt), and the red nickel dimethylglyoxime precipitate settles nickel.',
        },
        {
          t: 'formula',
          kicker: 'Zinc: Group IV and confirmatory reactions',
          main: 'Zn<sup>2+</sup> + H<sub>2</sub>S + 2NH<sub>3</sub> → ZnS↓ + 2NH<sub>4</sub><sup>+</sup><br>ZnS + 2H<sup>+</sup> → Zn<sup>2+</sup> + H<sub>2</sub>S<br>Zn<sup>2+</sup> + 2OH<sup>−</sup> → Zn(OH)<sub>2</sub>↓<br>Zn(OH)<sub>2</sub> + 2OH<sup>−</sup> → ZnO<sub>2</sub><sup>2−</sup> + 2H<sub>2</sub>O<br>2Zn<sup>2+</sup> + [Fe(CN)<sub>6</sub>]<sup>4−</sup> → Zn<sub>2</sub>[Fe(CN)<sub>6</sub>]↓',
          legend: [
            'ZnS = white precipitate',
            'Zn(OH)<sub>2</sub> = white precipitate',
            'ZnO<sub>2</sub><sup>2−</sup> = zincate ion',
            'Zn<sub>2</sub>[Fe(CN)<sub>6</sub>] = white or bluish-white precipitate',
          ],
          note: null,
        },
        {
          t: 'formula',
          kicker: 'Nickel: Group IV and confirmatory reactions',
          main: 'Ni<sup>2+</sup> + H<sub>2</sub>S + 2NH<sub>3</sub> → NiS↓ + 2NH<sub>4</sub><sup>+</sup><br>3NiS + 2HNO<sub>3</sub> + 6HCl → 3NiCl<sub>2</sub> + 2NO + 3S + 4H<sub>2</sub>O<br>Ni<sup>2+</sup> + 2C<sub>4</sub>H<sub>8</sub>N<sub>2</sub>O<sub>2</sub> + 2NH<sub>3</sub> → Ni(C<sub>4</sub>H<sub>7</sub>N<sub>2</sub>O<sub>2</sub>)<sub>2</sub>↓ + 2NH<sub>4</sub><sup>+</sup>',
          legend: [
            'NiS = black precipitate',
            'C<sub>4</sub>H<sub>8</sub>N<sub>2</sub>O<sub>2</sub> = dimethylglyoxime',
            'Ni(C<sub>4</sub>H<sub>7</sub>N<sub>2</sub>O<sub>2</sub>)<sub>2</sub> = bright red precipitate',
          ],
          note: 'The second line is the manual\'s aqua regia equation; the third is the standard nickel dimethylglyoxime precipitation, balanced here for atoms and charge.',
        },
        {
          t: 'p',
          html: '<b>Group V and Group VI: barium, calcium, magnesium.</b> The white Group V precipitate is dissolved by boiling with dilute acetic acid; the solution is divided for the individual tests, and a little of the precipitate is kept for the flame test. Barium is tested first, because Ba<sup>2+</sup> also gives a white precipitate with ammonium oxalate and could be taken for calcium. Calcium chromate is soluble, so a yellow precipitate with potassium chromate can only be barium.',
        },
        {
          t: 'table',
          title: 'Group V and Group VI',
          head: [
            'Ion',
            'Test',
            'What you see',
            'Responsible',
          ],
          rows: [
            [
              'Barium',
              'add potassium chromate to the acetic acid solution',
              'yellow precipitate',
              'BaCrO<sub>4</sub>',
            ],
            [
              'Barium',
              'flame test with the kept precipitate in conc. HCl',
              'apple green (grassy green) flame',
              'Ba<sup>2+</sup>',
            ],
            [
              'Calcium',
              'if barium is absent, add ammonium oxalate and shake',
              'white precipitate',
              'CaC<sub>2</sub>O<sub>4</sub>',
            ],
            [
              'Calcium',
              'flame test with the kept precipitate',
              'brick red flame, greenish through blue glass',
              'Ca<sup>2+</sup>',
            ],
            [
              'Magnesium',
              'to the Group V filtrate (no precipitate) add disodium hydrogenphosphate and scratch the inside of the tube',
              'white crystalline precipitate',
              'Mg(NH<sub>4</sub>)PO<sub>4</sub>',
            ],
          ],
        },
        {
          t: 'formula',
          kicker: 'Barium, calcium and magnesium reactions',
          main: 'BaCO<sub>3</sub> + 2CH<sub>3</sub>COOH → Ba<sup>2+</sup> + 2CH<sub>3</sub>COO<sup>−</sup> + H<sub>2</sub>O + CO<sub>2</sub>↑<br>Ba<sup>2+</sup> + CrO<sub>4</sub><sup>2−</sup> → BaCrO<sub>4</sub>↓<br>Ca<sup>2+</sup> + C<sub>2</sub>O<sub>4</sub><sup>2−</sup> → CaC<sub>2</sub>O<sub>4</sub>↓<br>Mg<sup>2+</sup> + NH<sub>3</sub> + HPO<sub>4</sub><sup>2−</sup> → Mg(NH<sub>4</sub>)PO<sub>4</sub>↓',
          legend: [
            'BaCO<sub>3</sub> = white precipitate, Group V',
            'BaCrO<sub>4</sub> = yellow precipitate',
            'CaC<sub>2</sub>O<sub>4</sub> = white precipitate',
            'Mg(NH<sub>4</sub>)PO<sub>4</sub> = white crystalline precipitate',
            'C<sub>2</sub>O<sub>4</sub><sup>2−</sup> = oxalate ion',
          ],
          note: 'The same acetic acid step dissolves CaCO<sub>3</sub>. The manual writes the magnesium equation with Na<sub>2</sub>HPO<sub>4</sub> and NH<sub>4</sub>OH; the ionic form above balances.',
        },
        {
          t: 'part',
          title: 'Anions: tests with dilute sulphuric acid',
        },
        {
          t: 'p',
          html: 'The anion is read from what a little of the solid salt does with acid. The first step uses dilute sulphuric acid, and only then concentrated. Always do the dilute-acid test first, and do all the preliminary tests before the confirmatory ones.',
        },
        {
          t: 'fig',
          id: 'c12-12-04-d3',
        },
        {
          t: 'proc',
          title: 'Preliminary test with dilute sulphuric acid',
          steps: [
            'Take about 0.1 g of the salt in a test tube and add 1 to 2 mL of dilute H<sub>2</sub>SO<sub>4</sub>.',
            'Look for any change at room temperature. If no gas is evolved, warm the tube.',
            'If a gas comes off, test it with the apparatus for testing a gas (a delivery tube into the test reagent) and read it from the table.',
          ],
        },
        {
          t: 'table',
          title: 'Dilute sulphuric acid: what the gas tells you',
          head: [
            'Anion',
            'What you see',
            'Gas',
            'How the gas is tested',
          ],
          rows: [
            [
              'Carbonate, CO<sub>3</sub><sup>2−</sup>',
              'brisk effervescence; colourless, odourless gas',
              'CO<sub>2</sub>',
              'turns lime water milky',
            ],
            [
              'Sulphide, S<sup>2−</sup>',
              'colourless gas with the smell of rotten eggs',
              'H<sub>2</sub>S',
              'turns lead acetate paper black',
            ],
            [
              'Nitrite, NO<sub>2</sub><sup>−</sup>',
              'brown fumes',
              'NO<sub>2</sub>',
              'turns acidified KI-starch solution blue',
            ],
          ],
          note: 'The manual\'s table also lists sulphite (SO<sub>2</sub>, pungent like burning sulphur, turns acidified potassium dichromate green) and acetate (vinegar smell), which are outside this list. Note that SO<sub>2</sub> also turns lime water milky; it is told from CO<sub>2</sub> by its smell.',
        },
        {
          t: 'p',
          html: '<b>The chemistry in each case.</b> A weak acid is displaced from its salt by the stronger acid:<br>CO<sub>3</sub><sup>2−</sup> + 2H<sup>+</sup> → H<sub>2</sub>O + CO<sub>2</sub>↑<br>S<sup>2−</sup> + 2H<sup>+</sup> → H<sub>2</sub>S↑<br>2NO<sub>2</sub><sup>−</sup> + 2I<sup>−</sup> + 4H<sup>+</sup> → 2NO + I<sub>2</sub> + 2H<sub>2</sub>O (the nitrite test with iodide; the free iodine turns starch blue)<br>The brown fumes from nitrite arise because nitrous acid is unstable. The manual\'s steps are 2NaNO<sub>2</sub> + H<sub>2</sub>SO<sub>4</sub> → Na<sub>2</sub>SO<sub>4</sub> + 2HNO<sub>2</sub>, then 3HNO<sub>2</sub> → HNO<sub>3</sub> + 2NO + H<sub>2</sub>O, then 2NO + O<sub>2</sub> → 2NO<sub>2</sub> (brown) in air.',
        },
        {
          t: 'part',
          title: 'Anions: tests with concentrated sulphuric acid',
        },
        {
          t: 'p',
          html: 'If dilute acid gives nothing, take about 0.1 g of salt in a dry tube, add 3 to 4 drops of concentrated H<sub>2</sub>SO<sub>4</sub>, watch in the cold and then warm. Concentrated sulphuric acid is non-volatile and an oxidising agent: it drives out the more volatile HCl and HNO<sub>3</sub> from chlorides and nitrates, and oxidises bromide and iodide further to the halogen.',
        },
        {
          t: 'table',
          title: 'Concentrated sulphuric acid: what the gas or vapour tells you',
          head: [
            'Anion',
            'What you see',
            'Gas or vapour',
            'Extra step',
          ],
          rows: [
            [
              'Chloride, Cl<sup>−</sup>',
              'colourless gas with a pungent smell; dense white fumes with a rod dipped in NH<sub>4</sub>OH',
              'HCl',
              'with MnO<sub>2</sub> added and heated, a greenish-yellow gas (Cl<sub>2</sub>)',
            ],
            [
              'Bromide, Br<sup>−</sup>',
              'reddish-brown gas with a pungent smell; the solution turns red',
              'Br<sub>2</sub> vapour',
              'denser on heating with MnO<sub>2</sub> added',
            ],
            [
              'Iodide, I<sup>−</sup>',
              'violet vapours; starch paper turns blue; a violet sublimate on the sides of the tube',
              'I<sub>2</sub> vapour',
              'denser with MnO<sub>2</sub> added',
            ],
            [
              'Nitrate, NO<sub>3</sub><sup>−</sup>',
              'brown fumes (light brown at first)',
              'NO<sub>2</sub>',
              'denser on heating with copper turnings added; the solution turns blue',
            ],
          ],
          note: 'Concentrated acid also gives CO and CO<sub>2</sub> with oxalate, which is outside this list. Sulphate gives no gas with either acid; it is tested for last, with barium chloride.',
        },
        {
          t: 'formula',
          kicker: 'Halides with concentrated sulphuric acid',
          main: 'Cl<sup>−</sup> + H<sub>2</sub>SO<sub>4</sub> → HSO<sub>4</sub><sup>−</sup> + HCl↑<br>MnO<sub>2</sub> + 2Cl<sup>−</sup> + 4H<sup>+</sup> → Mn<sup>2+</sup> + Cl<sub>2</sub> + 2H<sub>2</sub>O<br>2Br<sup>−</sup> + SO<sub>4</sub><sup>2−</sup> + 4H<sup>+</sup> → Br<sub>2</sub> + SO<sub>2</sub> + 2H<sub>2</sub>O<br>2Br<sup>−</sup> + MnO<sub>2</sub> + 4H<sup>+</sup> → Mn<sup>2+</sup> + Br<sub>2</sub> + 2H<sub>2</sub>O<br>2I<sup>−</sup> + SO<sub>4</sub><sup>2−</sup> + 4H<sup>+</sup> → I<sub>2</sub> + SO<sub>2</sub> + 2H<sub>2</sub>O<br>2I<sup>−</sup> + MnO<sub>2</sub> + 4H<sup>+</sup> → Mn<sup>2+</sup> + I<sub>2</sub> + 2H<sub>2</sub>O',
          legend: [
            'HCl = white fumes with ammonia',
            'Cl<sub>2</sub> = greenish-yellow gas',
            'Br<sub>2</sub> = reddish-brown vapour',
            'I<sub>2</sub> = violet vapour',
            'SO<sub>2</sub> = gas from the reduced acid',
          ],
          note: 'Iodide is a stronger reducing agent: besides SO<sub>2</sub>, the manual notes that some H<sub>2</sub>S and sulphur are also formed, for example 8NaI + 5H<sub>2</sub>SO<sub>4</sub> → 4I<sub>2</sub> + H<sub>2</sub>S + 4Na<sub>2</sub>SO<sub>4</sub> + 4H<sub>2</sub>O.',
        },
        {
          t: 'formula',
          kicker: 'Nitrate with concentrated sulphuric acid and copper',
          main: 'NO<sub>3</sub><sup>−</sup> + H<sub>2</sub>SO<sub>4</sub> → HSO<sub>4</sub><sup>−</sup> + HNO<sub>3</sub><br>4HNO<sub>3</sub> → 4NO<sub>2</sub> + O<sub>2</sub> + 2H<sub>2</sub>O<br>3Cu + 2NO<sub>3</sub><sup>−</sup> + 8H<sup>+</sup> → 3Cu<sup>2+</sup> + 2NO + 4H<sub>2</sub>O<br>2NO + O<sub>2</sub> → 2NO<sub>2</sub>',
          legend: [
            'NO<sub>2</sub> = brown fumes',
            'Cu<sup>2+</sup> = blue, copper sulphate solution',
            'NO = colourless, turns brown in air',
          ],
          note: null,
        },
        {
          t: 'p',
          html: '<b>Two brown gases.</b> Bromine and nitrogen dioxide are both brown. A nitrate gives brown fumes that thicken with copper turnings and leave a blue solution; a bromide gives bromine that thickens with MnO<sub>2</sub>, turns starch paper yellow and goes into the organic layer in the chlorine-water test. Keep the two apart by these extra steps, not by the colour of the fumes.',
        },
        {
          t: 'part',
          title: 'Anions: confirmatory tests',
        },
        {
          t: 'p',
          html: 'Confirm with a wet test, made on the <b>water extract</b> when the salt dissolves in water. If it does not, use the <b>sodium carbonate extract</b>: boiling the salt with excess sodium carbonate turns the anion into a soluble sodium salt and leaves the metal as insoluble carbonate. Carbonate itself is confirmed on the solid salt or its solution, not on the extract, because the extract already contains carbonate.',
        },
        {
          t: 'proc',
          title: 'Sodium carbonate extract',
          steps: [
            'Take 1 g of the salt in a porcelain dish or boiling tube. Mix in about 3 g of solid sodium carbonate and add 15 mL of distilled water.',
            'Stir and boil the contents for about 10 minutes.',
            'Cool, filter, and collect the filtrate in a test tube. Label it sodium carbonate extract.',
          ],
        },
        {
          t: 'p',
          html: 'Acidify the extract with dilute HNO<sub>3</sub> before adding silver nitrate: the excess carbonate in it would otherwise give a precipitate of silver carbonate, and the test would mislead you.',
        },
        {
          t: 'table',
          title: 'Confirmatory tests for the anions on the list',
          head: [
            'Anion',
            'Test',
            'What you see',
            'Responsible',
          ],
          rows: [
            [
              'Carbonate',
              'dilute H<sub>2</sub>SO<sub>4</sub> on the salt; pass the gas through lime water',
              'milky; on passing more gas the milkiness disappears',
              'CaCO<sub>3</sub>, then Ca(HCO<sub>3</sub>)<sub>2</sub>',
            ],
            [
              'Sulphide',
              'make 1 mL of water extract alkaline with NH<sub>4</sub>OH (or use the sodium carbonate extract); add a drop of sodium nitroprusside',
              'purple or violet colour',
              '[Fe(CN)<sub>5</sub>NOS]<sup>4−</sup>',
            ],
            [
              'Sulphide',
              'warm dilute acid; hold lead acetate paper in the gas',
              'paper turns black',
              'PbS',
            ],
            [
              'Nitrite',
              'KI solution and starch, acidified with acetic acid',
              'blue colour',
              'I<sub>2</sub> with starch',
            ],
            [
              'Nitrite',
              'acidify with acetic acid; add sulphanilic acid, then 1-naphthylamine',
              'red colour (a red azo dye)',
              'diazotised sulphanilic acid coupled to naphthylamine',
            ],
            [
              'Sulphate',
              'acidify the extract with dilute HCl; add BaCl<sub>2</sub>',
              'white precipitate, insoluble in conc. HCl or conc. HNO<sub>3</sub>',
              'BaSO<sub>4</sub>',
            ],
            [
              'Sulphate',
              'acidify with acetic acid; add lead acetate',
              'white precipitate',
              'PbSO<sub>4</sub>',
            ],
            [
              'Nitrate',
              'brown ring test (below)',
              'dark brown ring at the junction of two layers',
              '[Fe(NO)]<sup>2+</sup>',
            ],
            [
              'Nitrate',
              'heat the salt with copper turnings and conc. H<sub>2</sub>SO<sub>4</sub>',
              'excess brown fumes; the solution turns blue',
              'NO<sub>2</sub>; Cu<sup>2+</sup>',
            ],
            [
              'Chloride',
              'acidify with dilute HNO<sub>3</sub>; add AgNO<sub>3</sub>; then NH<sub>4</sub>OH',
              'curdy white precipitate, soluble in NH<sub>4</sub>OH',
              'AgCl, then [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>',
            ],
            [
              'Chloride',
              'chromyl chloride test (below)',
              'yellow solution; yellow precipitate with lead acetate; blue organic layer',
              'CrO<sub>2</sub>Cl<sub>2</sub>, CrO<sub>4</sub><sup>2−</sup>, PbCrO<sub>4</sub>, CrO<sub>5</sub>',
            ],
            [
              'Bromide',
              '1 mL of solution neutralised with HCl, 1 mL CCl<sub>4</sub> (or chloroform), excess chlorine water added dropwise; shake',
              'orange-brown colour in the organic layer',
              'Br<sub>2</sub>',
            ],
            [
              'Bromide',
              'acidify with dilute HNO<sub>3</sub>; add AgNO<sub>3</sub>; then NH<sub>4</sub>OH',
              'pale yellow precipitate, soluble in NH<sub>4</sub>OH with difficulty',
              'AgBr',
            ],
            [
              'Iodide',
              'neutralise with HCl; add CCl<sub>4</sub> or chloroform; add excess chlorine water dropwise; shake',
              'violet colour in the organic layer',
              'I<sub>2</sub>',
            ],
            [
              'Iodide',
              'acidify with dilute HNO<sub>3</sub>; add AgNO<sub>3</sub>; then NH<sub>4</sub>OH',
              'yellow precipitate, insoluble in NH<sub>4</sub>OH',
              'AgI',
            ],
          ],
          note: 'If neither dilute nor concentrated sulphuric acid gives a result, test for sulphate (and the manual adds phosphate, outside this list). The silver halide colours here are the manual\'s salt-analysis wording; its Lassaigne section (Topic 01) words the same precipitates differently, AgBr yellow and partially soluble, AgI dark yellow and insoluble. Learn pale yellow AgBr and yellow AgI.',
        },
        {
          t: 'formula',
          kicker: 'Carbonate: the lime water test',
          main: 'CO<sub>3</sub><sup>2−</sup> + 2H<sup>+</sup> → H<sub>2</sub>O + CO<sub>2</sub>↑<br>Ca(OH)<sub>2</sub> + CO<sub>2</sub> → CaCO<sub>3</sub>↓ + H<sub>2</sub>O<br>CaCO<sub>3</sub> + CO<sub>2</sub> + H<sub>2</sub>O → Ca(HCO<sub>3</sub>)<sub>2</sub>',
          legend: [
            'CaCO<sub>3</sub> = white, makes lime water milky',
            'Ca(HCO<sub>3</sub>)<sub>2</sub> = soluble, milkiness clears',
            'Ca(OH)<sub>2</sub> = lime water',
          ],
          note: 'Passing excess CO<sub>2</sub> clears the milkiness, because soluble calcium hydrogencarbonate forms.',
        },
        {
          t: 'formula',
          kicker: 'Sulphide and nitrite: special tests',
          main: 'S<sup>2−</sup> + 2H<sup>+</sup> → H<sub>2</sub>S↑<br>H<sub>2</sub>S + Pb(CH<sub>3</sub>COO)<sub>2</sub> → PbS↓ + 2CH<sub>3</sub>COOH<br>S<sup>2−</sup> + [Fe(CN)<sub>5</sub>NO]<sup>2−</sup> → [Fe(CN)<sub>5</sub>NOS]<sup>4−</sup><br>2NO<sub>2</sub><sup>−</sup> + 2I<sup>−</sup> + 4H<sup>+</sup> → 2NO + I<sub>2</sub> + 2H<sub>2</sub>O',
          legend: [
            'PbS = black precipitate',
            '[Fe(CN)<sub>5</sub>NO]<sup>2−</sup> = nitroprusside ion',
            '[Fe(CN)<sub>5</sub>NOS]<sup>4−</sup> = purple or violet complex',
            'I<sub>2</sub> = blue with starch',
          ],
          note: null,
        },
        {
          t: 'formula',
          kicker: 'Sulphate and halogen displacement',
          main: 'Ba<sup>2+</sup> + SO<sub>4</sub><sup>2−</sup> → BaSO<sub>4</sub>↓<br>Pb<sup>2+</sup> + SO<sub>4</sub><sup>2−</sup> → PbSO<sub>4</sub>↓<br>Cl<sub>2</sub> + 2Br<sup>−</sup> → 2Cl<sup>−</sup> + Br<sub>2</sub><br>Cl<sub>2</sub> + 2I<sup>−</sup> → 2Cl<sup>−</sup> + I<sub>2</sub>',
          legend: [
            'BaSO<sub>4</sub> = white, insoluble in concentrated HCl',
            'PbSO<sub>4</sub> = white precipitate',
            'Br<sub>2</sub> = orange-brown in the organic layer',
            'I<sub>2</sub> = violet in the organic layer',
          ],
          note: null,
        },
        {
          t: 'formula',
          kicker: 'Silver nitrate test for chloride, bromide and iodide',
          main: 'Ag<sup>+</sup> + Cl<sup>−</sup> → AgCl↓<br>AgCl + 2NH<sub>3</sub> → [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> + Cl<sup>−</sup><br>Ag<sup>+</sup> + Br<sup>−</sup> → AgBr↓<br>Ag<sup>+</sup> + I<sup>−</sup> → AgI↓',
          legend: [
            'AgCl = white, soluble in ammonia',
            'AgBr = pale yellow, dissolves with difficulty',
            'AgI = yellow, insoluble in ammonia',
            '[Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> = diamminesilver(I) ion',
          ],
          note: null,
        },
        {
          t: 'p',
          html: '<b>Safety.</b> Acidify the ammonia solution left after dissolving AgCl, AgBr or AgI with 2 M nitric acid and discard it quickly; the manual warns that it can otherwise cause a serious explosion.',
        },
        {
          t: 'p',
          html: '<b>Chromyl chloride test (chloride only).</b> Mix a little salt with an equal amount of solid potassium dichromate, add concentrated sulphuric acid and heat. Pass the gas through sodium hydroxide solution, which turns yellow. Divide the solution. Acidify one part with acetic acid and add lead acetate: a yellow precipitate. Acidify the other with dilute sulphuric acid, add a little amyl alcohol and 1 mL of 10% hydrogen peroxide, and shake gently: the organic layer turns blue. Use as little salt as possible, to avoid polluting the laboratory with chromium compounds.',
        },
        {
          t: 'formula',
          kicker: 'Chromyl chloride test for chloride',
          main: '4Cl<sup>−</sup> + Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 6H<sub>2</sub>SO<sub>4</sub> → 2CrO<sub>2</sub>Cl<sub>2</sub> + 6HSO<sub>4</sub><sup>−</sup> + 3H<sub>2</sub>O<br>CrO<sub>2</sub>Cl<sub>2</sub> + 4OH<sup>−</sup> → CrO<sub>4</sub><sup>2−</sup> + 2Cl<sup>−</sup> + 2H<sub>2</sub>O<br>Pb<sup>2+</sup> + CrO<sub>4</sub><sup>2−</sup> → PbCrO<sub>4</sub>↓<br>CrO<sub>4</sub><sup>2−</sup> + 2H<sup>+</sup> + 2H<sub>2</sub>O<sub>2</sub> → CrO<sub>5</sub> + 3H<sub>2</sub>O',
          legend: [
            'CrO<sub>2</sub>Cl<sub>2</sub> = chromyl chloride',
            'CrO<sub>4</sub><sup>2−</sup> = chromate, yellow solution',
            'PbCrO<sub>4</sub> = yellow precipitate',
            'CrO<sub>5</sub> = chromium pentoxide, blue in amyl alcohol',
          ],
          note: 'Bromide and iodide do not give this test. The first line is the manual\'s equation written for the ions.',
        },
        {
          t: 'proc',
          title: 'Brown ring test for nitrate',
          steps: [
            'Take 1 mL of the aqueous solution of the salt in a test tube.',
            'Add 2 mL of concentrated H<sub>2</sub>SO<sub>4</sub> slowly and mix thoroughly. Cool the tube under the tap.',
            'Add freshly prepared ferrous sulphate solution dropwise along the side of the tube, so that it forms a layer on top of the liquid. Do not shake.',
            'A dark brown ring forms at the junction of the two liquids.',
          ],
        },
        {
          t: 'fig',
          id: 'c12-12-04-d4',
        },
        {
          t: 'formula',
          kicker: 'Nitrate: the brown ring test',
          main: 'NO<sub>3</sub><sup>−</sup> + H<sub>2</sub>SO<sub>4</sub> → HSO<sub>4</sub><sup>−</sup> + HNO<sub>3</sub><br>3Fe<sup>2+</sup> + NO<sub>3</sub><sup>−</sup> + 4H<sup>+</sup> → 3Fe<sup>3+</sup> + NO + 2H<sub>2</sub>O<br>Fe<sup>2+</sup> + NO → [Fe(NO)]<sup>2+</sup>',
          legend: [
            'NO = nitric oxide',
            'Fe<sup>2+</sup> = from fresh ferrous sulphate',
            '[Fe(NO)]<sup>2+</sup> = brown, nitroso ferrous sulphate',
          ],
          note: 'The test may also be done by adding ferrous sulphate first and then concentrated sulphuric acid.',
        },
        {
          t: 'part',
          title: 'Worked examples: identify the salt',
        },
        {
          t: 'p',
          html: 'Each example gives the observations in the order a student records them. The reasoning has the same three moves every time: the group, or the gas, that narrows the field; the confirmatory tests that settle one ion; and the tests that rule the others out.',
        },
        {
          t: 'ex',
          tag: 'CBSE / NEET Level',
          q: 'A white salt <b>X</b> dissolves in cold water. Dilute HCl added to the solution gives a white precipitate that dissolves when the tube is heated. Dilute H<sub>2</sub>SO<sub>4</sub> gives no gas with the solid. Warmed with concentrated H<sub>2</sub>SO<sub>4</sub> the solid gives light brown fumes, and these become dense, with a blue solution, when copper turnings are added. Identify X.',
          steps: [
            '<b>Cation.</b> A white precipitate with dilute HCl puts the cation in Group I. The only Group I ion on the list is Pb<sup>2+</sup>, and PbCl<sub>2</sub>, which dissolves in hot water, fits: Pb<sup>2+</sup> + 2Cl<sup>−</sup> → PbCl<sub>2</sub>↓.',
            '<b>Cation, confirmed.</b> Divide the hot solution in three. Potassium iodide gives a yellow precipitate, Pb<sup>2+</sup> + 2I<sup>−</sup> → PbI<sub>2</sub>↓. Potassium chromate gives a yellow precipitate, Pb<sup>2+</sup> + CrO<sub>4</sub><sup>2−</sup> → PbCrO<sub>4</sub>↓, which dissolves in NaOH: PbCrO<sub>4</sub> + 4OH<sup>−</sup> → [Pb(OH)<sub>4</sub>]<sup>2−</sup> + CrO<sub>4</sub><sup>2−</sup>. Alcohol and dilute H<sub>2</sub>SO<sub>4</sub> give a white precipitate that dissolves in ammonium acetate: PbSO<sub>4</sub> + 4CH<sub>3</sub>COO<sup>−</sup> → [Pb(CH<sub>3</sub>COO)<sub>4</sub>]<sup>2−</sup> + SO<sub>4</sub><sup>2−</sup>. Three independent results leave Pb<sup>2+</sup> certain.',
            '<b>Anion.</b> No gas with dilute acid rules out carbonate, sulphide and nitrite (the white PbSO<sub>4</sub> that a lead salt gives with dilute H<sub>2</sub>SO<sub>4</sub> is a precipitate, not a gas, and says nothing about the anion). Light brown fumes with concentrated acid, thickening with copper and leaving a blue solution, point to nitrate: NO<sub>3</sub><sup>−</sup> + H<sub>2</sub>SO<sub>4</sub> → HSO<sub>4</sub><sup>−</sup> + HNO<sub>3</sub>, 3Cu + 2NO<sub>3</sub><sup>−</sup> + 8H<sup>+</sup> → 3Cu<sup>2+</sup> + 2NO + 4H<sub>2</sub>O, and the colourless NO turns brown in air, 2NO + O<sub>2</sub> → 2NO<sub>2</sub>.',
            '<b>Anion, confirmed.</b> The brown ring test: 3Fe<sup>2+</sup> + NO<sub>3</sub><sup>−</sup> + 4H<sup>+</sup> → 3Fe<sup>3+</sup> + NO + 2H<sub>2</sub>O, then Fe<sup>2+</sup> + NO → [Fe(NO)]<sup>2+</sup>, a dark brown ring at the junction of the layers.',
          ],
          ans: 'X is lead(II) nitrate, Pb(NO<sub>3</sub>)<sub>2</sub>',
        },
        {
          t: 'ex',
          tag: 'CBSE / NEET Level',
          q: 'Blue crystals <b>Y</b> dissolve in water. Heated in a dry tube, the blue solid turns white. Neither dilute nor concentrated H<sub>2</sub>SO<sub>4</sub> gives a gas. Dilute HCl gives no precipitate; H<sub>2</sub>S passed through the acidified solution gives a black precipitate that stays when warmed with yellow ammonium sulphide. The precipitate dissolves on boiling with dilute HNO<sub>3</sub>; dilute H<sub>2</sub>SO<sub>4</sub> and alcohol then give no white precipitate, and excess NH<sub>4</sub>OH gives a deep blue solution. The aqueous solution, acidified with dilute HCl, gives a white precipitate with BaCl<sub>2</sub> that does not dissolve in concentrated HCl. Identify Y.',
          steps: [
            '<b>Hints.</b> Blue when cold and white when hot is the pattern the manual lists for Cu<sup>2+</sup>. It is only a hint.',
            '<b>Group.</b> No precipitate with dilute HCl: Group I is absent. A black precipitate with H<sub>2</sub>S in dilute acid is Group II. It does not dissolve in yellow ammonium sulphide, so it is the copper sub-group (lead or copper), not the arsenic sub-group.',
            '<b>Lead or copper?</b> Dissolve in dilute HNO<sub>3</sub>: 3CuS + 8HNO<sub>3</sub> → 3Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO + 3S + 4H<sub>2</sub>O. Lead would now give white PbSO<sub>4</sub> with dilute H<sub>2</sub>SO<sub>4</sub> and alcohol; none forms, so Pb<sup>2+</sup> is absent. Excess NH<sub>4</sub>OH gives the deep blue complex, Cu<sup>2+</sup> + 4NH<sub>3</sub> → [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>. Acidify with acetic acid and add potassium ferrocyanide: a chocolate-brown precipitate, 2Cu<sup>2+</sup> + [Fe(CN)<sub>6</sub>]<sup>4−</sup> → Cu<sub>2</sub>[Fe(CN)<sub>6</sub>]↓. Cation: Cu<sup>2+</sup>.',
            '<b>Anion.</b> No gas with dilute acid removes carbonate, sulphide and nitrite; no gas with concentrated acid removes chloride, bromide, iodide and nitrate. That leaves sulphate, tested last: Ba<sup>2+</sup> + SO<sub>4</sub><sup>2−</sup> → BaSO<sub>4</sub>↓, white and insoluble in concentrated HCl.',
          ],
          ans: 'Y is copper(II) sulphate; the blue crystals are the pentahydrate, CuSO<sub>4</sub>·5H<sub>2</sub>O',
        },
        {
          t: 'ex',
          tag: 'CBSE / NEET Level',
          q: 'A colourless salt <b>Z</b> dissolves in water. Dilute HCl gives no precipitate, and H<sub>2</sub>S in dilute acid gives none. After a few drops of concentrated HNO<sub>3</sub>, then NH<sub>4</sub>Cl and excess NH<sub>4</sub>OH, a white gelatinous precipitate forms. It dissolves in dilute HCl; NaOH then gives a white gelatinous precipitate that dissolves in excess NaOH. The solid with concentrated H<sub>2</sub>SO<sub>4</sub> gives a colourless gas with a pungent smell that makes white fumes with a rod dipped in NH<sub>4</sub>OH, and a greenish-yellow gas when MnO<sub>2</sub> is added. Identify Z.',
          steps: [
            '<b>Group.</b> Groups I and II give nothing, so go to Group III. A white gelatinous precipitate is Al(OH)<sub>3</sub> (a brown precipitate would be Fe(OH)<sub>3</sub>): Al<sup>3+</sup> + 3NH<sub>3</sub> + 3H<sub>2</sub>O → Al(OH)<sub>3</sub>↓ + 3NH<sub>4</sub><sup>+</sup>.',
            '<b>Confirm aluminium.</b> In HCl it dissolves: Al(OH)<sub>3</sub> + 3H<sup>+</sup> → Al<sup>3+</sup> + 3H<sub>2</sub>O. Then Al<sup>3+</sup> + 3OH<sup>−</sup> → Al(OH)<sub>3</sub>↓ and, in excess NaOH, Al(OH)<sub>3</sub> + OH<sup>−</sup> → AlO<sub>2</sub><sup>−</sup> + 2H<sub>2</sub>O. The lake test (blue litmus, then NH<sub>4</sub>OH down the side) would give a blue floating mass. Cation: Al<sup>3+</sup>.',
            '<b>Anion.</b> Colourless pungent gas, white fumes with ammonia: Cl<sup>−</sup> + H<sub>2</sub>SO<sub>4</sub> → HSO<sub>4</sub><sup>−</sup> + HCl↑ and NH<sub>3</sub> + HCl → NH<sub>4</sub>Cl. With MnO<sub>2</sub>: MnO<sub>2</sub> + 2Cl<sup>−</sup> + 4H<sup>+</sup> → Mn<sup>2+</sup> + Cl<sub>2</sub> + 2H<sub>2</sub>O, the greenish-yellow gas is chlorine.',
            '<b>Anion, confirmed.</b> Acidified with dilute HNO<sub>3</sub>, AgNO<sub>3</sub> gives a curdy white precipitate, Ag<sup>+</sup> + Cl<sup>−</sup> → AgCl↓, that dissolves in NH<sub>4</sub>OH, AgCl + 2NH<sub>3</sub> → [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> + Cl<sup>−</sup>. The chromyl chloride test would give a yellow precipitate of PbCrO<sub>4</sub> with lead acetate.',
          ],
          ans: 'Z is aluminium chloride, AlCl<sub>3</sub>',
        },
        {
          t: 'ex',
          tag: 'CBSE / NEET Level',
          q: 'A white salt <b>W</b> dissolves in water. A paste in concentrated HCl colours the flame apple green. Dilute H<sub>2</sub>SO<sub>4</sub> gives a white precipitate and no gas. Concentrated H<sub>2</sub>SO<sub>4</sub> gives reddish-brown vapours that darken when MnO<sub>2</sub> is added. Groups I to IV give no precipitate; NH<sub>4</sub>Cl, NH<sub>4</sub>OH and (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub> give a white precipitate that dissolves in hot dilute acetic acid, and this solution gives a yellow precipitate with potassium chromate. Identify W.',
          steps: [
            '<b>Cation.</b> The apple-green flame points to Ba<sup>2+</sup> (copper gives a green flame with a blue centre that looks the same through blue glass). Group V fits the white carbonate: BaCO<sub>3</sub> + 2CH<sub>3</sub>COOH → Ba<sup>2+</sup> + 2CH<sub>3</sub>COO<sup>−</sup> + H<sub>2</sub>O + CO<sub>2</sub>↑. Potassium chromate gives the yellow BaCrO<sub>4</sub>: Ba<sup>2+</sup> + CrO<sub>4</sub><sup>2−</sup> → BaCrO<sub>4</sub>↓. Calcium chromate is soluble, so a yellow chromate precipitate can only be barium.',
            '<b>The white precipitate with dilute H<sub>2</sub>SO<sub>4</sub></b> is BaSO<sub>4</sub>, the cation again. It is not a gas, so it gives no information about the anion.',
            '<b>Anion.</b> Reddish-brown vapour with concentrated acid is bromine: 2Br<sup>−</sup> + SO<sub>4</sub><sup>2−</sup> + 4H<sup>+</sup> → Br<sub>2</sub> + SO<sub>2</sub> + 2H<sub>2</sub>O; with MnO<sub>2</sub>, 2Br<sup>−</sup> + MnO<sub>2</sub> + 4H<sup>+</sup> → Mn<sup>2+</sup> + Br<sub>2</sub> + 2H<sub>2</sub>O.',
            '<b>Anion, confirmed.</b> Excess chlorine water and CCl<sub>4</sub> give an orange-brown organic layer, Cl<sub>2</sub> + 2Br<sup>−</sup> → 2Cl<sup>−</sup> + Br<sub>2</sub>. AgNO<sub>3</sub> in dilute HNO<sub>3</sub> gives a pale yellow precipitate, Ag<sup>+</sup> + Br<sup>−</sup> → AgBr↓, which dissolves in NH<sub>4</sub>OH only with difficulty. That separates it from white AgCl and from yellow AgI.',
          ],
          ans: 'W is barium bromide, BaBr<sub>2</sub>',
        },
        {
          t: 'ex',
          tag: 'CBSE / NEET Level',
          q: 'A white salt <b>V</b> dissolves in water. Warmed with NaOH it gives a gas with a sharp smell that makes dense white fumes with a glass rod dipped in HCl and turns Nessler\'s reagent brown. Groups I to VI give no precipitate. Dilute H<sub>2</sub>SO<sub>4</sub> gives no gas. Concentrated H<sub>2</sub>SO<sub>4</sub> gives violet vapours that turn starch paper blue and leave a violet sublimate. Identify V.',
          steps: [
            '<b>Cation.</b> Ammonia is the gas: NH<sub>4</sub><sup>+</sup> + OH<sup>−</sup> → NH<sub>3</sub>↑ + H<sub>2</sub>O. It meets HCl to give white NH<sub>4</sub>Cl fumes, NH<sub>3</sub> + HCl → NH<sub>4</sub>Cl, and Nessler\'s reagent gives a brown precipitate, 2[HgI<sub>4</sub>]<sup>2−</sup> + NH<sub>3</sub> + 3OH<sup>−</sup> → HgO·Hg(NH<sub>2</sub>)I↓ + 7I<sup>−</sup> + 2H<sub>2</sub>O. Ammonium is group zero, tested on the original salt with NaOH, outside the group sequence.',
            '<b>No other cation.</b> Every group reagent gives no precipitate, so no metal ion on the list is present. The ammonium ion is the only cation.',
            '<b>Anion.</b> Violet vapours with concentrated acid are iodine: 2I<sup>−</sup> + SO<sub>4</sub><sup>2−</sup> + 4H<sup>+</sup> → I<sub>2</sub> + SO<sub>2</sub> + 2H<sub>2</sub>O. With MnO<sub>2</sub> they thicken, 2I<sup>−</sup> + MnO<sub>2</sub> + 4H<sup>+</sup> → Mn<sup>2+</sup> + I<sub>2</sub> + 2H<sub>2</sub>O.',
            '<b>Anion, confirmed.</b> Chlorine water and CCl<sub>4</sub> give a violet organic layer, Cl<sub>2</sub> + 2I<sup>−</sup> → 2Cl<sup>−</sup> + I<sub>2</sub>. AgNO<sub>3</sub> gives a yellow precipitate, Ag<sup>+</sup> + I<sup>−</sup> → AgI↓, that does not dissolve in NH<sub>4</sub>OH.',
          ],
          ans: 'V is ammonium iodide, NH<sub>4</sub>I',
        },
        {
          t: 'ex',
          tag: 'JEE Main Level',
          q: 'A green crystalline salt <b>U</b> dissolves in water to a green solution. In a borax bead it is violet when hot and reddish brown when cold in the oxidising flame, and grey in the reducing flame. Groups I to III give no precipitate. H<sub>2</sub>S in the presence of NH<sub>4</sub>OH gives a black precipitate that dissolves in aqua regia. The residue, evaporated and dissolved in water, gives a bright red precipitate with NH<sub>4</sub>OH and dimethylglyoxime, and no yellow precipitate with potassium nitrite and acetic acid. The solid with concentrated H<sub>2</sub>SO<sub>4</sub> gives a pungent colourless gas that fumes with NH<sub>4</sub>OH. Identify U.',
          steps: [
            '<b>Hints.</b> A bright green salt and a violet-hot, reddish-brown-cold bead that is grey in the reducing flame match the manual\'s nickel entries.',
            '<b>Group.</b> A black sulphide from H<sub>2</sub>S in ammonia is Group IV. It is nickel or cobalt: Ni<sup>2+</sup> + H<sub>2</sub>S + 2NH<sub>3</sub> → NiS↓ + 2NH<sub>4</sub><sup>+</sup>. Aqua regia dissolves it: 3NiS + 2HNO<sub>3</sub> + 6HCl → 3NiCl<sub>2</sub> + 2NO + 3S + 4H<sub>2</sub>O.',
            '<b>Nickel or cobalt?</b> Dimethylglyoxime in ammonia gives the bright red nickel precipitate: Ni<sup>2+</sup> + 2C<sub>4</sub>H<sub>8</sub>N<sub>2</sub>O<sub>2</sub> + 2NH<sub>3</sub> → Ni(C<sub>4</sub>H<sub>7</sub>N<sub>2</sub>O<sub>2</sub>)<sub>2</sub>↓ + 2NH<sub>4</sub><sup>+</sup>. Cobalt would give a yellow precipitate of K<sub>3</sub>[Co(NO<sub>2</sub>)<sub>6</sub>] with potassium nitrite and acetic acid; none forms, so cobalt is absent. Cation: Ni<sup>2+</sup>.',
            '<b>Anion.</b> A pungent colourless gas that fumes with NH<sub>4</sub>OH is HCl, so chloride: Cl<sup>−</sup> + H<sub>2</sub>SO<sub>4</sub> → HSO<sub>4</sub><sup>−</sup> + HCl↑. AgNO<sub>3</sub> in dilute HNO<sub>3</sub> gives curdy white AgCl that dissolves in NH<sub>4</sub>OH.',
          ],
          ans: 'U is nickel(II) chloride, NiCl<sub>2</sub>',
        },
        {
          t: 'part',
          title: 'Exam traps',
        },
        {
          t: 'mistakes',
          items: [
            '<b>One gas, two media.</b> H<sub>2</sub>S in dilute HCl precipitates only CuS and PbS (Group II). H<sub>2</sub>S in ammonia precipitates ZnS and NiS (Group IV). Writing "Zn<sup>2+</sup> in Group II" forgets that the acid keeps S<sup>2−</sup> below what ZnS needs.',
            '<b>NH<sub>4</sub>Cl before NH<sub>4</sub>OH.</b> The common ion keeps OH<sup>−</sup> low so that only Fe(OH)<sub>3</sub> and Al(OH)<sub>3</sub> precipitate in Group III. Boil off the H<sub>2</sub>S from the Group II filtrate first, or Group IV sulphides appear here.',
            '<b>Lead appears twice.</b> The manual lists Pb<sup>2+</sup> under Group I (dilute HCl) and Group II (H<sub>2</sub>S). Confirm lead by the iodide, chromate or sulphate test, whichever group shows it.',
            '<b>Magnesium has no group reagent.</b> It stays in solution through Group V because ammonium ions hold the carbonate concentration down, and is found last with Na<sub>2</sub>HPO<sub>4</sub>: a white crystalline precipitate when the inside of the tube is scratched.',
            '<b>CO<sub>2</sub> and SO<sub>2</sub> both turn lime water milky.</b> CO<sub>2</sub> is odourless, SO<sub>2</sub> smells of burning sulphur. Milkiness that clears when more gas is passed in is the carbonate sign (soluble Ca(HCO<sub>3</sub>)<sub>2</sub>).',
            '<b>Brown fumes have three sources.</b> Brown fumes with dilute acid point to nitrite. Brown fumes with concentrated acid that thicken with copper and leave a blue solution point to nitrate. Brown vapour that thickens with MnO<sub>2</sub>, turns starch paper yellow and gives an orange-brown CCl<sub>4</sub> layer is bromine. Separate them by the follow-up test, never by the colour alone.',
            '<b>Silver halides in ammonia.</b> AgCl is white and dissolves readily, AgBr is pale yellow and dissolves with difficulty, AgI is yellow and does not dissolve. The Lassaigne section of Topic 01 words the same precipitates differently (AgBr yellow, partially soluble; AgI dark yellow), as the manual does; they are the same compounds. Acidify a sodium carbonate extract with dilute HNO<sub>3</sub> before adding AgNO<sub>3</sub>, or silver carbonate precipitates too.',
            '<b>Brown ring technique.</b> Cool the acid mixture, use freshly prepared ferrous sulphate, run it down the side of the tube and do not shake. A ring needs two separate layers.',
            '<b>Flame test.</b> Clean the loop in concentrated HCl until the flame stays uncoloured, and use a paste in concentrated HCl. Calcium is brick red, barium apple green, copper green with a blue centre.',
            '<b>Excess NaOH is not a way to tell aluminium from zinc.</b> Both white hydroxides dissolve in it. Tell them apart by the group (III against IV), the lake test for aluminium and the ferrocyanide test for zinc.',
            '<b>The extract is not the salt.</b> Carbonate is confirmed on the solid salt or its solution, never on the sodium carbonate extract, which already holds carbonate.',
            '<b>Chromyl chloride test.</b> It is a test for chloride. Use a minimum of salt, because chromium compounds pollute. The blue colour in amyl alcohol is CrO<sub>5</sub>, made from the yellow chromate by hydrogen peroxide.',
          ],
        },
        {
          t: 'protip',
          html: '<b>Reading order.</b> Black in Group II: copper or lead. Black in Group IV: nickel (cobalt, which is outside the list, is the other possibility). Brown precipitate in Group III: iron. White gelatinous precipitate in Group III: aluminium. White in Group IV: zinc. White carbonate in Group V: barium or calcium. Nothing in any group, then Na<sub>2</sub>HPO<sub>4</sub> gives a white crystalline precipitate: magnesium. Ammonium is separate, tested on the original salt with NaOH.',
        },
        {
          t: 'part',
          title: 'Practice',
        },
        {
          t: 'practice',
          items: [
            {
              q: '[NEET] A salt solution gives a white precipitate with dilute HCl that dissolves in hot water. Name the cation and write the equation for one test that confirms it.',
              a: 'The cation is Pb<sup>2+</sup> (Group I; the precipitate is PbCl<sub>2</sub>). One confirmatory test: potassium iodide on the hot solution gives a yellow precipitate, Pb<sup>2+</sup> + 2I<sup>−</sup> → PbI<sub>2</sub>↓. Potassium chromate gives yellow PbCrO<sub>4</sub> that dissolves in NaOH, and dilute H<sub>2</sub>SO<sub>4</sub> with alcohol gives white PbSO<sub>4</sub> that dissolves in ammonium acetate.',
            },
            {
              q: '[JEE Main] Solid NH<sub>4</sub>Cl is added before NH<sub>4</sub>OH when Group III is precipitated. Explain why the order matters.',
              a: 'Ammonium hydroxide is a weak base, NH<sub>4</sub>OH ⇌ NH<sub>4</sub><sup>+</sup> + OH<sup>−</sup>. The NH<sub>4</sub><sup>+</sup> from the added NH<sub>4</sub>Cl is a common ion, so it pushes the equilibrium to the left and keeps OH<sup>−</sup> low. Only Fe(OH)<sub>3</sub> and Al(OH)<sub>3</sub>, which have very small solubility products, still exceed them and precipitate. The more soluble hydroxides of the later groups stay in solution. With NH<sub>4</sub>OH alone, OH<sup>−</sup> would be higher and some of those hydroxides could precipitate with Group III.',
            },
            {
              q: '[NEET] A salt with concentrated H<sub>2</sub>SO<sub>4</sub> gives a colourless pungent gas that makes dense white fumes with a rod dipped in NH<sub>4</sub>OH. Name the gas and the anion, and write the equation for the confirmation with MnO<sub>2</sub>.',
              a: 'The gas is hydrogen chloride and the anion is chloride, Cl<sup>−</sup>. With MnO<sub>2</sub> and the acid a greenish-yellow gas appears: MnO<sub>2</sub> + 2Cl<sup>−</sup> + 4H<sup>+</sup> → Mn<sup>2+</sup> + Cl<sub>2</sub> + 2H<sub>2</sub>O. Atoms: Mn 1, O 2 on both sides (MnO<sub>2</sub> against 2H<sub>2</sub>O), Cl 2, H 4. Charge: −2 + 4 = +2 on the left, +2 on the right.',
            },
            {
              q: '[JEE Main] A 25.0 mL sample of 0.0400 mol L<sup>−1</sup> sodium chloride solution is acidified with dilute HNO<sub>3</sub> and treated with 0.100 mol L<sup>−1</sup> AgNO<sub>3</sub> until no more precipitate forms. Find the volume of AgNO<sub>3</sub> used and the mass of AgCl obtained. (Ag = 108, Cl = 35.5)',
              a: 'Ag<sup>+</sup> + Cl<sup>−</sup> → AgCl↓ is 1∶1. Moles of Cl<sup>−</sup> = 25.0 mL × 0.0400 mol L<sup>−1</sup> = 1.00 mmol, so 1.00 mmol of Ag<sup>+</sup> is needed. Volume = 1.00 mmol ÷ 0.100 mol L<sup>−1</sup> = 10.0 mL. Mass of AgCl = 1.00 × 10<sup>−3</sup> mol × 143.5 g mol<sup>−1</sup> = 0.1435 g, about 0.14 g. Check by another route: 1.00 mmol of Cl is 35.5 mg and 1.00 mmol of Ag is 108 mg, total 143.5 mg.',
            },
            {
              q: '[JEE Main] H<sub>2</sub>S is the reagent for both Group II and Group IV. Why does CuS precipitate in dilute HCl while ZnS does not, and why does ZnS precipitate in Group IV?',
              a: 'H<sub>2</sub>S ⇌ 2H<sup>+</sup> + S<sup>2−</sup>. In dilute HCl the extra H<sup>+</sup> shifts this equilibrium left (common ion effect), so S<sup>2−</sup> is very low. Only the sulphides with the smallest solubility products, CuS and PbS, have an ionic product above their solubility product and precipitate. ZnS does not, so Zn<sup>2+</sup> stays in solution. In Group IV the solution is ammoniacal: OH<sup>−</sup> removes H<sup>+</sup>, the equilibrium shifts right, S<sup>2−</sup> rises and ZnS (and NiS) precipitate.',
            },
            {
              q: '[NEET] A salt gives brown fumes with concentrated H<sub>2</sub>SO<sub>4</sub>. How would you decide between nitrate and bromide?',
              a: 'Heat a little salt with copper turnings and concentrated H<sub>2</sub>SO<sub>4</sub>: a nitrate gives denser brown fumes and a blue solution, 3Cu + 2NO<sub>3</sub><sup>−</sup> + 8H<sup>+</sup> → 3Cu<sup>2+</sup> + 2NO + 4H<sub>2</sub>O, and it gives the brown ring with ferrous sulphate. A bromide gives bromine, which thickens with MnO<sub>2</sub>, turns starch paper yellow and, in the chlorine water and CCl<sub>4</sub> test, gives an orange-brown organic layer; AgNO<sub>3</sub> gives a pale yellow precipitate.',
            },
          ],
        },
        {
          t: 'part',
          title: 'Crack the MCQ',
        },
        {
          t: 'mcq',
          q: 'A salt is warmed with dilute H<sub>2</sub>SO<sub>4</sub>. A colourless gas with the smell of rotten eggs turns lead acetate paper black. The anion is:',
          opts: [
            {
              label: 'CO<sub>3</sub><sup>2−</sup>',
              nudge: '<b>(a)</b> Carbonate gives CO<sub>2</sub>, which is odourless and turns lime water milky; it does not blacken lead acetate paper.',
            },
            {
              label: 'S<sup>2−</sup>',
              nudge: null,
            },
            {
              label: 'SO<sub>4</sub><sup>2−</sup>',
              nudge: '<b>(c)</b> Sulphate gives no gas with dilute acid. It is tested last, with BaCl<sub>2</sub>.',
            },
            {
              label: 'NO<sub>2</sub><sup>−</sup>',
              nudge: '<b>(d)</b> Nitrite gives brown NO<sub>2</sub> fumes, which turn acidified KI-starch solution blue, not a rotten-egg smell.',
            },
          ],
          correct: 1,
          solution: 'Sulphide gives hydrogen sulphide, S<sup>2−</sup> + 2H<sup>+</sup> → H<sub>2</sub>S↑. The gas blackens lead acetate paper because lead sulphide, PbS, is black.',
        },
        {
          t: 'mcq',
          q: 'The Group III precipitate is white and gelatinous. It dissolves in dilute HCl; NaOH then gives a white gelatinous precipitate that dissolves in excess, and blue litmus plus NH<sub>4</sub>OH gives a blue floating mass. The cation is:',
          opts: [
            {
              label: 'Fe<sup>3+</sup>',
              nudge: '<b>(a)</b> Iron(III) gives a brown Fe(OH)<sub>3</sub> precipitate; its tests are Prussian blue and blood-red thiocyanate.',
            },
            {
              label: 'Al<sup>3+</sup>',
              nudge: null,
            },
            {
              label: 'Zn<sup>2+</sup>',
              nudge: '<b>(c)</b> Zinc is a Group IV ion: it is precipitated as white ZnS by H<sub>2</sub>S in ammonia, not as a hydroxide in Group III, and it gives no lake test.',
            },
            {
              label: 'Mg<sup>2+</sup>',
              nudge: '<b>(d)</b> Magnesium has no group reagent; it stays in solution through Groups I to V and is found with Na<sub>2</sub>HPO<sub>4</sub>.',
            },
          ],
          correct: 1,
          solution: 'The white gelatinous Al(OH)<sub>3</sub> dissolves in excess NaOH as AlO<sub>2</sub><sup>−</sup>, and the lake test (aluminium hydroxide adsorbing the blue litmus dye) is the confirmation.',
        },
        {
          t: 'mcq',
          q: 'The brown ring test for nitrate uses:',
          opts: [
            {
              label: 'freshly prepared FeSO<sub>4</sub> solution and concentrated H<sub>2</sub>SO<sub>4</sub>',
              nudge: null,
            },
            {
              label: 'FeCl<sub>3</sub> solution and dilute HCl',
              nudge: '<b>(b)</b> Iron(III) cannot give the ring: the test needs Fe<sup>2+</sup> to reduce nitrate to NO and then bind it. In salt analysis iron(III) is a cation to be found, by Prussian blue with ferrocyanide and a blood-red colour with thiocyanate.',
            },
            {
              label: 'potassium ferrocyanide and acetic acid',
              nudge: '<b>(c)</b> These are the copper confirmation (acidify with acetic acid, add ferrocyanide, chocolate-brown Cu<sub>2</sub>[Fe(CN)<sub>6</sub>]), not a nitrate test.',
            },
            {
              label: 'CuSO<sub>4</sub> solution and NH<sub>4</sub>OH',
              nudge: '<b>(d)</b> Copper(II) and ammonia give the deep blue [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>, a test for copper, with no ring.',
            },
          ],
          correct: 0,
          solution: 'Concentrated sulphuric acid gives nitric acid, which oxidises Fe<sup>2+</sup> to Fe<sup>3+</sup> and is itself reduced to NO: 3Fe<sup>2+</sup> + NO<sub>3</sub><sup>−</sup> + 4H<sup>+</sup> → 3Fe<sup>3+</sup> + NO + 2H<sub>2</sub>O. NO binds more Fe<sup>2+</sup> as the brown [Fe(NO)]<sup>2+</sup>, which forms a ring where the ferrous sulphate layer meets the acid.',
        },
        {
          t: 'mcq',
          q: 'Excess chlorine water and CCl<sub>4</sub> give an orange-brown organic layer, and AgNO<sub>3</sub> in dilute HNO<sub>3</sub> gives a pale yellow precipitate that dissolves in NH<sub>4</sub>OH with difficulty. The anion is:',
          opts: [
            {
              label: 'Cl<sup>−</sup>',
              nudge: '<b>(a)</b> Chloride gives white AgCl that dissolves readily in ammonia, and chlorine water cannot displace it, so no coloured layer forms.',
            },
            {
              label: 'Br<sup>−</sup>',
              nudge: null,
            },
            {
              label: 'I<sup>−</sup>',
              nudge: '<b>(c)</b> Iodide gives a violet organic layer and a yellow AgI that does not dissolve in ammonia.',
            },
            {
              label: 'NO<sub>3</sub><sup>−</sup>',
              nudge: '<b>(d)</b> Nitrate is not displaced by chlorine water and gives no precipitate with AgNO<sub>3</sub>; its tests are the brown ring and copper turnings with concentrated acid.',
            },
          ],
          correct: 1,
          solution: 'Chlorine displaces bromine, Cl<sub>2</sub> + 2Br<sup>−</sup> → 2Cl<sup>−</sup> + Br<sub>2</sub>, which dissolves in CCl<sub>4</sub> to give an orange-brown layer. AgBr is pale yellow and dissolves in ammonia only with difficulty.',
        },
        {
          t: 'mcq',
          q: 'A black precipitate from H<sub>2</sub>S in dilute HCl does not dissolve in yellow ammonium sulphide. It dissolves in boiling dilute HNO<sub>3</sub>, and excess NH<sub>4</sub>OH then gives a deep blue solution. The cation is:',
          opts: [
            {
              label: 'Pb<sup>2+</sup>',
              nudge: '<b>(a)</b> Lead sulphide is also black and also does not dissolve in yellow ammonium sulphide, but lead is recognised by white PbSO<sub>4</sub> with dilute H<sub>2</sub>SO<sub>4</sub>, not by a blue ammoniacal solution.',
            },
            {
              label: 'Cu<sup>2+</sup>',
              nudge: null,
            },
            {
              label: 'Zn<sup>2+</sup>',
              nudge: '<b>(c)</b> ZnS is white and is not precipitated in dilute HCl; zinc belongs to Group IV.',
            },
            {
              label: 'Ni<sup>2+</sup>',
              nudge: '<b>(d)</b> NiS is black but is precipitated by H<sub>2</sub>S in ammonia (Group IV), and nickel is confirmed by a bright red precipitate with dimethylglyoxime.',
            },
          ],
          correct: 1,
          solution: 'Of the two black Group II sulphides on the list, only copper fits the last clue. Cu<sup>2+</sup> with excess ammonia gives [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>, deep blue, and acetic acid with potassium ferrocyanide then gives chocolate-brown Cu<sub>2</sub>[Fe(CN)<sub>6</sub>].',
        },
        {
          t: 'mcq',
          q: 'Lime water turns milky when CO<sub>2</sub> is passed into it, and the milkiness disappears when more CO<sub>2</sub> is passed. This is because:',
          opts: [
            {
              label: 'CaCO<sub>3</sub> reacts with CO<sub>2</sub> and water to form soluble Ca(HCO<sub>3</sub>)<sub>2</sub>',
              nudge: null,
            },
            {
              label: 'CaCO<sub>3</sub> dissolves in water on standing',
              nudge: '<b>(b)</b> CaCO<sub>3</sub> is insoluble in water; the milkiness is its fine suspension and does not clear on standing. More CO<sub>2</sub> is needed.',
            },
            {
              label: 'all the Ca(OH)<sub>2</sub> has been used up',
              nudge: '<b>(c)</b> Using up Ca(OH)<sub>2</sub> would stop more CaCO<sub>3</sub> forming but would leave the CaCO<sub>3</sub> already formed as a precipitate; clearing needs a reaction of the CaCO<sub>3</sub> itself.',
            },
            {
              label: 'the CO<sub>2</sub> escapes and the CaCO<sub>3</sub> redissolves',
              nudge: '<b>(d)</b> Losing CO<sub>2</sub> would not dissolve CaCO<sub>3</sub>; it is the extra CO<sub>2</sub> that clears the milkiness.',
            },
          ],
          correct: 0,
          solution: 'CaCO<sub>3</sub> + CO<sub>2</sub> + H<sub>2</sub>O → Ca<sup>2+</sup> + 2HCO<sub>3</sub><sup>−</sup>: calcium hydrogencarbonate is soluble, so the white precipitate dissolves.',
        },
      ],
    },
];
