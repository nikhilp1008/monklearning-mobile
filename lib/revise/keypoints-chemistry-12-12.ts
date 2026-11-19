/**
 * KEY POINTS for Chemistry Class 12, Chapter 12 (Practical Chemistry).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts (one
 * each per topic). Memory lines are a fifth, short section of their own, read
 * rather than tested: the first two of each topic.
 *
 * `topic`: Topics 01–05 are 0–4 (01 organic analysis, 02 preparations, 03
 * volumetric analysis, 04 qualitative salt analysis, 05 thermochemistry, sols
 * and kinetics).
 *
 * Remember: one point (or more) for every concept of the chapter. Don't mix
 * up, Common mistakes and Exam shortcuts: from the topic's exam traps and
 * worked examples. `say`: short lines that restate a rule of the text, no new
 * fact.
 *
 * The chapter is original text (no source book), so there are no page
 * numbers. Every fact, colour, reagent, number and equation is taken from the
 * chapter text as it stands, where the text itself follows the NCERT
 * Laboratory Manual.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Formulas
 * upright; charges digit first with a real minus (SO<sub>4</sub><sup>2−</sup>);
 * ratios with ∶; Δ<sub>sol</sub><i>H</i> with an italic <i>H</i>.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Organic analysis: elements and functional groups ──
  // Lassaigne’s test: principle
  {
    topic: 0,
    kind: 'remember',
    q: 'Why is an organic compound fused with sodium before testing for nitrogen, sulphur and the halogens, and what is the sodium extract?',
    a: 'The elements are held by covalent bonds, so the compound gives no ions. At red heat sodium converts them into ionic salts (NaCN, Na<sub>2</sub>S, NaX) that dissolve in water. The solution is the sodium (Lassaigne’s) extract, and it is alkaline because unused sodium gives NaOH',
    why: 'The carbon must come from the compound itself, so hydrazine hydrochloride, with nitrogen but no carbon, gives no cyanide.',
    say: 'Sodium fusion turns covalent N, S and halogens into NaCN, Na<sub>2</sub>S and NaX.',
  },
  // Lassaigne’s test: nitrogen and sulphur
  {
    topic: 0,
    kind: 'remember',
    q: 'In the sodium extract, what colour shows nitrogen, sulphur, and nitrogen and sulphur together?',
    a: 'Nitrogen: FeSO<sub>4</sub>, boil, dilute H<sub>2</sub>SO<sub>4</sub>, FeCl<sub>3</sub> gives Prussian blue, Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub>. Sulphur: nitroprusside gives purple, or acetic acid and lead acetate give black PbS. Both together: dilute HCl and FeCl<sub>3</sub> give blood red Fe(SCN)<sub>3</sub>',
    why: 'Blood red needs only a little sodium (NaSCN forms); with plenty of sodium the thiocyanate splits and cyanide and sulphide are found separately.',
    say: 'Prussian blue is nitrogen, purple is sulphur, blood red is nitrogen and sulphur together.',
  },
  // Lassaigne’s test: halogens
  {
    topic: 0,
    kind: 'remember',
    q: 'Extract boiled with HNO<sub>3</sub>, then AgNO<sub>3</sub>, then NH<sub>4</sub>OH: what is seen for Cl, Br and I?',
    a: 'Cl: white precipitate, soluble in NH<sub>4</sub>OH (AgCl). Br: yellow precipitate, partially soluble (AgBr). I: dark yellow precipitate, insoluble (AgI)',
    why: 'Boiling with HNO<sub>3</sub> drives off CN<sup>−</sup> and S<sup>2−</sup> as HCN and H<sub>2</sub>S, so they cannot give AgCN or Ag<sub>2</sub>S.',
    say: null,
  },
  // Lassaigne’s test: layer test
  {
    topic: 0,
    kind: 'remember',
    q: 'Extract, CCl<sub>4</sub> and excess chlorine water, shaken: what colour is the lower layer for Br and for I?',
    a: 'Br: orange, from Br<sub>2</sub>. I: purple or violet, from I<sub>2</sub>. 2Br<sup>−</sup> + Cl<sub>2</sub> → 2Cl<sup>−</sup> + Br<sub>2</sub>, and the same for iodide',
    why: 'The layer colour is the decisive test when the silver halide colours are close.',
    say: null,
  },
  // Hydroxyl groups
  {
    topic: 0,
    kind: 'remember',
    q: 'How do ceric ammonium nitrate and neutral FeCl<sub>3</sub> show an alcoholic and a phenolic –OH group?',
    a: 'Ceric ammonium nitrate gives a red colour with an alcohol, the complex [Ce(NO<sub>3</sub>)<sub>4</sub>(ROH)<sub>3</sub>]. Neutral FeCl<sub>3</sub> gives a violet colour with phenol',
    why: 'The red colour fades on standing and with excess reagent; catechol gives a green that darkens quickly, and the naphthols give no characteristic colour.',
    say: null,
  },
  // Carbonyl group
  {
    topic: 0,
    kind: 'remember',
    q: 'Which carbonyl tests are positive for both aldehydes and ketones, and which for aldehydes only, and what is seen?',
    a: 'Both: 2,4-DNP gives a yellow, orange or orange-red precipitate. Aldehyde only: Schiff’s gives pink, Tollens’ a silver mirror, Fehling’s a brick red Cu<sub>2</sub>O precipitate (aliphatic aldehydes only), Benedict’s an orange-red precipitate. A ketone gives none of these four',
    why: 'Formic acid gives a positive Tollens’ test because it carries –CHO.',
    say: null,
  },
  // Carboxyl group
  {
    topic: 0,
    kind: 'remember',
    q: 'Three observations that show a carboxyl group –COOH?',
    a: 'Blue litmus turns red; saturated NaHCO<sub>3</sub> gives brisk effervescence of CO<sub>2</sub>; warmed with ethanol or methanol and a few drops of concentrated H<sub>2</sub>SO<sub>4</sub> it gives a sweet-smelling ester',
    why: 'RCOOH + NaHCO<sub>3</sub> → RCOONa + H<sub>2</sub>O + CO<sub>2</sub>.',
    say: null,
  },
  // Amino group
  {
    topic: 0,
    kind: 'remember',
    q: 'Which amines give the carbylamine test and which give the azo dye test, and what is seen?',
    a: 'Carbylamine (chloroform and alcoholic KOH, heated): any primary amine, aliphatic or aromatic, gives the foul smell of an isocyanide. Azo dye: an aromatic primary amine, diazotised at 0–5 °C with NaNO<sub>2</sub> and HCl, then added to alkaline β-naphthol, gives a scarlet red dye',
    why: 'The diazonium solution goes into the alkaline β-naphthol, never the other way round.',
    say: null,
  },
  {
    topic: 0,
    kind: 'mixup',
    q: 'A solid turns blue litmus red. How do you tell a phenol from a carboxylic acid?',
    a: 'Only the carboxylic acid decomposes saturated NaHCO<sub>3</sub> with brisk CO<sub>2</sub> effervescence; a phenol is too weakly acidic and gives a violet colour with neutral FeCl<sub>3</sub> instead',
    why: 'Strongly acidic nitrophenols such as 2,4,6-trinitrophenol also decompose NaHCO<sub>3</sub>.',
    say: null,
  },
  {
    topic: 0,
    kind: 'mistake',
    q: 'Why must the extract be boiled with HNO<sub>3</sub> before AgNO<sub>3</sub> when N or S is present?',
    a: 'To remove CN<sup>−</sup> and S<sup>2−</sup> as HCN and H<sub>2</sub>S. Without it AgNO<sub>3</sub> gives false white AgCN or black Ag<sub>2</sub>S that hide the halide',
    why: 'The aim is not to make the solution clear.',
    say: null,
  },
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Lucas test: how fast do tertiary, secondary and primary alcohols show two layers?',
    a: 'Tertiary: immediately. Secondary: in about 1–5 minutes. Primary: no layers',
    why: 'The test works only for alcohols that dissolve in the reagent; a primary alcohol may take 10 minutes to several days.',
    say: null,
  },

  // ── Topic 02 · Preparations ──
  // Mohr’s salt and potash alum: why acid
  {
    topic: 1,
    kind: 'remember',
    q: 'Why is a little dilute H<sub>2</sub>SO<sub>4</sub> added when Mohr’s salt and potash alum are made?',
    a: 'Fe<sup>2+</sup> and Al<sup>3+</sup> hydrolyse in water. The extra H<sup>+</sup> pushes the hydrolysis equilibria to the left, so the ions stay in solution and the crystals are clean',
    why: 'Concentrated H<sub>2</sub>SO<sub>4</sub> is an oxidising agent; the dilute acid only has to suppress hydrolysis.',
    say: 'A little dilute H<sub>2</sub>SO<sub>4</sub> holds back the hydrolysis of Fe<sup>2+</sup> and Al<sup>3+</sup>.',
  },
  // Mohr’s salt and potash alum: formulas
  {
    topic: 1,
    kind: 'remember',
    q: 'Formula, colour and molar mass of Mohr’s salt and of potash alum?',
    a: 'Mohr’s salt, FeSO<sub>4</sub>·(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>·6H<sub>2</sub>O: light green, 392 g mol<sup>−1</sup>. Potash alum, KAl(SO<sub>4</sub>)<sub>2</sub>·12H<sub>2</sub>O: white, 474 g mol<sup>−1</sup>',
    why: 'The two salts are taken in equimolar amounts: 3.5 g FeSO<sub>4</sub> and 1.7 g (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> are equimolar only if the ferrous sulphate is the heptahydrate.',
    say: 'Mohr’s salt is light green with 6 H<sub>2</sub>O; potash alum is white with 12 H<sub>2</sub>O.',
  },
  // Percentage yield
  {
    topic: 1,
    kind: 'remember',
    q: 'How is the percentage yield worked out, and which reactant fixes the theoretical mass?',
    a: '% yield = (<i>m</i><sub>act</sub>/<i>m</i><sub>th</sub>) × 100, with <i>m</i><sub>th</sub> = <i>n</i> × <i>r</i> × <i>M</i>, where <i>n</i> is the moles of the limiting reactant (the one that gives the smaller amount of product)',
    why: 'Acetanilide: 5.40 g of acetic anhydride (0.05289 mol) is limiting, so 7.15 g is theoretical; 6.20 g crude is 86.7 % and 5.45 g pure is 76.2 %.',
    say: null,
  },
  // Acetanilide
  {
    topic: 1,
    kind: 'remember',
    q: 'Acetanilide from aniline: reagents, conditions and the pure product?',
    a: '5 mL aniline with 5 mL acetic anhydride and 5 mL glacial acetic acid, refluxed gently 10–15 minutes with an air condenser, then poured into ice-cold water. The solid is washed until the filtrate is neutral to litmus and recrystallised from hot water: white shining needle-shaped crystals',
    why: 'C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> + (CH<sub>3</sub>CO)<sub>2</sub>O → C<sub>6</sub>H<sub>5</sub>NHCOCH<sub>3</sub> + CH<sub>3</sub>COOH; acetyl chloride needs dry pyridine.',
    say: null,
  },
  // p-Nitroacetanilide
  {
    topic: 1,
    kind: 'remember',
    q: 'In the nitration of acetanilide, what attacks the ring, which isomer is major, and how is the minor one removed?',
    a: 'The nitronium ion NO<sub>2</sub><sup>+</sup>, from concentrated HNO<sub>3</sub> and H<sub>2</sub>SO<sub>4</sub>. The para product is major. Recrystallising from alcohol leaves the yellow ortho isomer in the mother liquor and gives colourless p-nitroacetanilide',
    why: 'Ice bath at 0–5 °C, and never above 10 °C while the nitrating mixture is added; then pour on crushed ice.',
    say: null,
  },
  // Aniline yellow
  {
    topic: 1,
    kind: 'remember',
    q: 'Aniline yellow from diazoaminobenzene: the product, the conditions and what removes the excess aniline?',
    a: 'p-Aminoazobenzene, C<sub>6</sub>H<sub>5</sub>–N=N–C<sub>6</sub>H<sub>4</sub>–NH<sub>2</sub>, a yellow solid. Diazoaminobenzene in aniline with a little aniline hydrochloride is warmed at about 40–45 °C for about an hour. Glacial acetic acid diluted with an equal volume of water turns the excess aniline into water-soluble aniline acetate. Recrystallise from CCl<sub>4</sub>',
    why: 'The change is an isomerisation, so the theoretical yield in grams equals the mass of diazoaminobenzene taken.',
    say: null,
  },
  // Iodoform
  {
    topic: 1,
    kind: 'remember',
    q: 'Iodoform preparation: the product, the reagent and the equation from acetone?',
    a: 'CHI<sub>3</sub>, a yellow solid. Hypoiodite (from I<sub>2</sub> and NaOH, or from KI and NaOCl) oxidises CH<sub>3</sub>–CH(OH)–R to CH<sub>3</sub>CO–R and then iodinates the CH<sub>3</sub> group. CH<sub>3</sub>COCH<sub>3</sub> + 3I<sub>2</sub> + 4NaOH → CHI<sub>3</sub> + CH<sub>3</sub>COONa + 3NaI + 3H<sub>2</sub>O',
    why: 'One mole of CHI<sub>3</sub> forms per mole of ethanol or acetone; ethanol (4I<sub>2</sub> + 6NaOH) gives sodium formate as the other product.',
    say: null,
  },
  {
    topic: 1,
    kind: 'mixup',
    q: 'Mohr’s salt is a double salt. How does a double salt differ from a complex in its tests?',
    a: 'A double salt gives the tests of all its ions separately: Mohr’s salt gives Fe<sup>2+</sup>, NH<sub>4</sub><sup>+</sup> and SO<sub>4</sub><sup>2−</sup>. A complex does not give the tests of its metal ion: potassium trioxalatoferrate(III) does not give the tests of Fe<sup>3+</sup>',
    why: null,
    say: null,
  },
  {
    topic: 1,
    kind: 'mistake',
    q: 'A student reports 108 % yield of Mohr’s salt. Is that possible?',
    a: 'No. A yield above 100 % is not a result: the crystals are still wet with mother liquor or the water–alcohol wash. Dry between filter paper and weigh again',
    why: null,
    say: null,
  },
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Which of ethanol, propan-2-ol, acetone, propan-1-ol and methanol give iodoform?',
    a: 'Ethanol, propan-2-ol and acetone: each has a CH<sub>3</sub>–CH(OH)– or CH<sub>3</sub>CO– group. Propan-1-ol and methanol do not',
    why: 'Ethanol is the only primary alcohol that gives iodoform.',
    say: null,
  },

  // ── Topic 03 · Volumetric analysis ──
  // Working formula and n-factors
  {
    topic: 2,
    kind: 'remember',
    q: 'The working formula of a titration, and the n-factor <i>a</i> of oxalic acid, NaOH, Na<sub>2</sub>CO<sub>3</sub>, HCl, KMnO<sub>4</sub> in acid and Mohr’s salt?',
    a: '<i>a</i><sub>1</sub><i>M</i><sub>1</sub><i>V</i><sub>1</sub> = <i>a</i><sub>2</sub><i>M</i><sub>2</sub><i>V</i><sub>2</sub>, with the volumes in the same unit. Oxalic acid 2, NaOH 1, Na<sub>2</sub>CO<sub>3</sub> 2, HCl 1, KMnO<sub>4</sub> 5, Mohr’s salt 1',
    why: 'Strength (g L<sup>−1</sup>) = <i>M</i> × molar mass.',
    say: 'n-factors: oxalic acid 2, NaOH 1, Na<sub>2</sub>CO<sub>3</sub> 2, HCl 1, KMnO<sub>4</sub> 5, Mohr’s salt 1.',
  },
  // Standards
  {
    topic: 2,
    kind: 'remember',
    q: 'What makes a primary standard, and which of oxalic acid, Mohr’s salt, Na<sub>2</sub>CO<sub>3</sub>, NaOH and KMnO<sub>4</sub> are secondary?',
    a: 'A primary standard is pure, stable in air, of high molar mass and readily soluble, so its solution is made by weighing directly. NaOH and KMnO<sub>4</sub> are secondary standards and must be standardised first. Oxalic acid, Mohr’s salt and sodium carbonate are primary',
    why: null,
    say: 'Primary standards are weighed directly; NaOH and KMnO<sub>4</sub> are secondary.',
  },
  // Indicators
  {
    topic: 2,
    kind: 'remember',
    q: 'Colour changes of phenolphthalein and methyl orange, and on which side of neutrality each changes?',
    a: 'Phenolphthalein: colourless in acid, pink in alkali, so it changes on the alkaline side. Methyl orange: yellow, pinkish red in acid, so it changes on the acid side',
    why: null,
    say: null,
  },
  // Equivalence point pH
  {
    topic: 2,
    kind: 'remember',
    q: 'The pH at equivalence for 0.100 M CH<sub>3</sub>COOH with NaOH, and for 0.100 M NH<sub>3</sub> with HCl, and the indicator for each?',
    a: 'CH<sub>3</sub>COOH with NaOH: pH ≈ 8.7, phenolphthalein. NH<sub>3</sub> with HCl: pH ≈ 5.3, methyl orange',
    why: 'Phenolphthalein in the ammonia titration would change colour while the solution is still short of acid.',
    say: null,
  },
  // NaOH against oxalic acid
  {
    topic: 2,
    kind: 'remember',
    q: 'NaOH against oxalic acid: what is in the burette, what is the end point, and the molarity if 10.0 mL of 0.100 M acid needs 20.10 mL?',
    a: 'NaOH in the burette, oxalic acid in the flask with phenolphthalein; the end point is one drop giving a very faint permanent pink. 2 × 0.100 × 10.0 = 1 × <i>M</i> × 20.10 gives 0.0995 M, which is 3.98 g L<sup>−1</sup>',
    why: '1.260 g of the dihydrate (126 g mol<sup>−1</sup>) in 100 mL makes 0.1 M oxalic acid.',
    say: null,
  },
  // HCl against sodium carbonate
  {
    topic: 2,
    kind: 'remember',
    q: 'HCl against Na<sub>2</sub>CO<sub>3</sub>: the indicator, its colour change, and the molarity if 10.0 mL of 0.100 M carbonate needs 19.80 mL?',
    a: 'HCl in the burette, Na<sub>2</sub>CO<sub>3</sub> in the flask with methyl orange: yellow to pinkish red. 2 × 0.100 × 10.0 = 1 × <i>M</i> × 19.80 gives 0.1010 M, which is 3.687 g L<sup>−1</sup>',
    why: '106 × 0.1 × 0.1 = 1.0600 g of Na<sub>2</sub>CO<sub>3</sub> in 100 mL makes 0.1 M.',
    say: null,
  },
  // Permanganate principle
  {
    topic: 2,
    kind: 'remember',
    q: 'KMnO<sub>4</sub> titrations: which acid, the half-reaction, and the end point?',
    a: 'Dilute H<sub>2</sub>SO<sub>4</sub> only. MnO<sub>4</sub><sup>−</sup> + 8H<sup>+</sup> + 5e<sup>−</sup> → Mn<sup>2+</sup> + 4H<sub>2</sub>O. KMnO<sub>4</sub> is its own indicator: the end point is one extra drop giving a light pink that stays',
    why: 'HCl is oxidised to Cl<sub>2</sub>, HNO<sub>3</sub> is itself an oxidiser, and too little acid lets brown MnO<sub>2</sub> form.',
    say: null,
  },
  // Heating and apparatus
  {
    topic: 2,
    kind: 'remember',
    q: 'Why is oxalic acid warmed to 50–60 °C but Mohr’s salt not heated, and how is the KMnO<sub>4</sub> burette read?',
    a: 'The oxalate reaction is slow when cold, and Mn<sup>2+</sup> then catalyses it. Mohr’s salt reacts quickly cold, and heating lets air oxidise Fe<sup>2+</sup>. KMnO<sub>4</sub> needs a glass stopcock and the upper meniscus, because the solution is dark',
    why: null,
    say: null,
  },
  // Molarity of KMnO4
  {
    topic: 2,
    kind: 'remember',
    q: 'The molarity of KMnO<sub>4</sub> from oxalic acid and from Mohr’s salt?',
    a: 'Oxalic acid: <i>M</i><sub>2</sub> = 2<i>M</i><sub>1</sub><i>V</i><sub>1</sub>/(5<i>V</i><sub>2</sub>). Mohr’s salt: <i>M</i><sub>2</sub> = <i>M</i><sub>1</sub><i>V</i><sub>1</sub>/(5<i>V</i><sub>2</sub>)',
    why: '10.0 mL of 0.100 M oxalic acid needing 19.60 mL gives 0.02041 M, which is 3.225 g L<sup>−1</sup>.',
    say: null,
  },
  {
    topic: 2,
    kind: 'mixup',
    q: 'What are the mole ratios KMnO<sub>4</sub> ∶ oxalic acid and KMnO<sub>4</sub> ∶ Mohr’s salt?',
    a: 'KMnO<sub>4</sub> ∶ oxalic acid is 2 ∶ 5, and KMnO<sub>4</sub> ∶ Mohr’s salt is 1 ∶ 5. Neither is 1 ∶ 1',
    why: 'Oxalate gives 2 electrons and Fe<sup>2+</sup> gives 1, against 5 taken by MnO<sub>4</sub><sup>−</sup>.',
    say: null,
  },
  {
    topic: 2,
    kind: 'mistake',
    q: 'A student standardises KMnO<sub>4</sub> against oxalic acid but acidifies with HCl. Is the volume of KMnO<sub>4</sub> larger or smaller than the correct one?',
    a: 'Larger. Some KMnO<sub>4</sub> oxidises HCl to Cl<sub>2</sub> (2KMnO<sub>4</sub> + 16HCl → 2KCl + 2MnCl<sub>2</sub> + 5Cl<sub>2</sub> + 8H<sub>2</sub>O), so extra permanganate is used',
    why: null,
    say: null,
  },
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Which indicator for weak acid with strong base, strong acid with weak base, strong with strong, and weak with weak?',
    a: 'Choose it from the equivalence point. Weak acid with strong base: phenolphthalein. Strong acid with weak base (Na<sub>2</sub>CO<sub>3</sub>, NH<sub>3</sub>): methyl orange. Strong with strong: either. Weak with weak: none',
    why: null,
    say: null,
  },

  // ── Topic 04 · Qualitative salt analysis: cations and anions ──
  // Group reagents
  {
    topic: 3,
    kind: 'remember',
    q: 'The group reagent and the precipitate for Groups I to V?',
    a: 'I: dilute HCl, PbCl<sub>2</sub> white. II: H<sub>2</sub>S in dilute HCl, PbS and CuS black. III: NH<sub>4</sub>OH with NH<sub>4</sub>Cl, Al(OH)<sub>3</sub> white gelatinous and Fe(OH)<sub>3</sub> brown. IV: H<sub>2</sub>S in NH<sub>4</sub>OH, ZnS white and NiS black. V: NH<sub>4</sub>Cl, NH<sub>4</sub>OH and (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>, CaCO<sub>3</sub> and BaCO<sub>3</sub> white',
    why: 'NH<sub>4</sub><sup>+</sup> is tested on the original salt with NaOH; Mg<sup>2+</sup> has no group reagent and is found last with Na<sub>2</sub>HPO<sub>4</sub>.',
    say: 'Dilute HCl; H<sub>2</sub>S in acid; NH<sub>4</sub>OH with NH<sub>4</sub>Cl; H<sub>2</sub>S in ammonia; (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>: Groups I to V in order.',
  },
  // One gas, two media
  {
    topic: 3,
    kind: 'remember',
    q: 'Why does H<sub>2</sub>S precipitate CuS and PbS in dilute HCl, but ZnS and NiS only in ammonia?',
    a: 'H<sub>2</sub>S ⇌ 2H<sup>+</sup> + S<sup>2−</sup>. In dilute HCl the extra H<sup>+</sup> pushes this left, so S<sup>2−</sup> is very low and only the least soluble sulphides, CuS and PbS, precipitate. In ammonia OH<sup>−</sup> takes up H<sup>+</sup>, the equilibrium moves right and ZnS and NiS also come down',
    why: null,
    say: 'H<sub>2</sub>S in acid gives CuS and PbS; H<sub>2</sub>S in ammonia gives ZnS and NiS.',
  },
  // Ammonium
  {
    topic: 3,
    kind: 'remember',
    q: 'The tests for NH<sub>4</sub><sup>+</sup> on the original salt?',
    a: 'Warm with NaOH: the smell of ammonia, and dense white NH<sub>4</sub>Cl fumes on a glass rod dipped in HCl. The gas turns Nessler’s reagent brown (brown colouration or precipitate, HgO·Hg(NH<sub>2</sub>)I)',
    why: null,
    say: null,
  },
  // Lead
  {
    topic: 3,
    kind: 'remember',
    q: 'Confirmatory tests for Pb<sup>2+</sup>?',
    a: 'KI: yellow PbI<sub>2</sub>. K<sub>2</sub>CrO<sub>4</sub>: yellow PbCrO<sub>4</sub>, soluble in NaOH and insoluble in ammonium acetate. A few drops of alcohol then dilute H<sub>2</sub>SO<sub>4</sub>: white PbSO<sub>4</sub>, soluble in ammonium acetate',
    why: 'PbCl<sub>2</sub> from Group I dissolves in hot water; PbI<sub>2</sub> dissolves in boiling water and returns on cooling as shining crystals.',
    say: null,
  },
  // Copper
  {
    topic: 3,
    kind: 'remember',
    q: 'Confirmatory tests for Cu<sup>2+</sup> in the Group II precipitate?',
    a: 'Dissolve the black CuS in boiling dilute HNO<sub>3</sub>. Excess NH<sub>4</sub>OH gives a deep blue solution, [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>. Acidified with acetic acid, potassium ferrocyanide gives a chocolate-brown precipitate, Cu<sub>2</sub>[Fe(CN)<sub>6</sub>]',
    why: 'A little NH<sub>4</sub>OH first gives a precipitate of basic copper sulphate, which dissolves in excess.',
    say: null,
  },
  // Iron and aluminium
  {
    topic: 3,
    kind: 'remember',
    q: 'Confirmatory tests for Fe<sup>3+</sup> and Al<sup>3+</sup> in Group III?',
    a: 'Fe<sup>3+</sup> (brown Fe(OH)<sub>3</sub>): potassium ferrocyanide gives blue Prussian blue, Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub>; potassium thiocyanate gives a blood-red colour. Al<sup>3+</sup> (white gelatinous Al(OH)<sub>3</sub>): NaOH gives a white gelatinous precipitate soluble in excess (AlO<sub>2</sub><sup>−</sup>); the lake test (blue litmus, then NH<sub>4</sub>OH down the side) gives a blue floating mass',
    why: null,
    say: null,
  },
  // Zinc and nickel
  {
    topic: 3,
    kind: 'remember',
    q: 'Confirmatory tests for Zn<sup>2+</sup> and Ni<sup>2+</sup> in Group IV?',
    a: 'Zn<sup>2+</sup> (white ZnS, dissolved in boiling dilute HCl): NaOH gives a white precipitate soluble in excess (ZnO<sub>2</sub><sup>2−</sup>); potassium ferrocyanide gives a white or bluish-white precipitate. Ni<sup>2+</sup> (black NiS, dissolved in aqua regia): in NH<sub>4</sub>OH, dimethylglyoxime gives a bright red precipitate',
    why: null,
    say: null,
  },
  // Barium, calcium, magnesium
  {
    topic: 3,
    kind: 'remember',
    q: 'Confirmatory tests for Ba<sup>2+</sup>, Ca<sup>2+</sup> and Mg<sup>2+</sup>?',
    a: 'Barium is tested first: K<sub>2</sub>CrO<sub>4</sub> in the acetic acid solution gives yellow BaCrO<sub>4</sub>. Calcium, if barium is absent: ammonium oxalate gives white CaC<sub>2</sub>O<sub>4</sub>. Magnesium: Na<sub>2</sub>HPO<sub>4</sub> on the Group V filtrate, scratching the tube, gives white crystalline Mg(NH<sub>4</sub>)PO<sub>4</sub>',
    why: null,
    say: null,
  },
  // Flame test
  {
    topic: 3,
    kind: 'remember',
    q: 'Flame colours of Cu<sup>2+</sup>, Ba<sup>2+</sup> and Ca<sup>2+</sup> with the naked eye and through blue glass?',
    a: 'Cu: green with a blue centre, the same through blue glass. Ba: apple green, bluish green through blue glass. Ca: brick red, green (greenish-yellow) through blue glass',
    why: 'The salt is made into a paste with concentrated HCl so that its volatile chloride colours the flame.',
    say: null,
  },
  // Borax bead and cavity
  {
    topic: 3,
    kind: 'remember',
    q: 'Borax bead colours of Cu, Ni and Fe(III) in the oxidising flame (cold, then hot)?',
    a: 'Cu: blue, then green. Ni: reddish brown, then violet. Fe(III): yellow, then yellowish brown',
    why: 'In the reducing flame Cu gives red opaque then colourless, Ni grey, and Fe green.',
    say: null,
  },
  // Charcoal cavity
  {
    topic: 3,
    kind: 'remember',
    q: 'Charcoal cavity test: what do Pb<sup>2+</sup> and Zn<sup>2+</sup> show, and what does cobalt nitrate do to a white residue of Zn, Al or Mg?',
    a: 'Pb: yellow residue when hot, grey metal when cold. Zn: yellow when hot, white when cold. With cobalt nitrate and strong heating: Zn turns green (CoO·ZnO), Al blue (CoO·Al<sub>2</sub>O<sub>3</sub>), Mg pink (CoO·MgO)',
    why: null,
    say: null,
  },
  // Dilute H2SO4
  {
    topic: 3,
    kind: 'remember',
    q: 'Dilute H<sub>2</sub>SO<sub>4</sub> on the salt: what gas shows carbonate, sulphide and nitrite, and how is each tested?',
    a: 'Carbonate: colourless, odourless CO<sub>2</sub>, turns lime water milky. Sulphide: H<sub>2</sub>S, smell of rotten eggs, turns lead acetate paper black. Nitrite: brown NO<sub>2</sub> fumes, turn acidified KI-starch solution blue',
    why: 'Sulphate gives no gas with either acid and is tested last with BaCl<sub>2</sub>.',
    say: null,
  },
  // Concentrated H2SO4
  {
    topic: 3,
    kind: 'remember',
    q: 'Concentrated H<sub>2</sub>SO<sub>4</sub> on the salt: what is seen for chloride, bromide, iodide and nitrate?',
    a: 'Cl<sup>−</sup>: pungent colourless HCl, dense white fumes with a rod dipped in NH<sub>4</sub>OH; with MnO<sub>2</sub> greenish-yellow Cl<sub>2</sub>. Br<sup>−</sup>: reddish-brown Br<sub>2</sub>, denser with MnO<sub>2</sub>. I<sup>−</sup>: violet vapours, starch paper blue, violet sublimate. NO<sub>3</sub><sup>−</sup>: brown fumes, denser with copper turnings, and the solution turns blue',
    why: null,
    say: null,
  },
  // Halide confirmatory
  {
    topic: 3,
    kind: 'remember',
    q: 'Confirming Cl<sup>−</sup>, Br<sup>−</sup> and I<sup>−</sup>: the AgNO<sub>3</sub> test in dilute HNO<sub>3</sub> and the layer test?',
    a: 'Cl<sup>−</sup>: curdy white AgCl, soluble in NH<sub>4</sub>OH. Br<sup>−</sup>: pale yellow AgBr, soluble with difficulty; CCl<sub>4</sub> and excess chlorine water give an orange-brown organic layer. I<sup>−</sup>: yellow AgI, insoluble in NH<sub>4</sub>OH; the layer is violet',
    why: null,
    say: null,
  },
  // Brown ring
  {
    topic: 3,
    kind: 'remember',
    q: 'The brown ring test for nitrate: how is it done and what is the brown species?',
    a: 'To 1 mL of the solution add 2 mL of concentrated H<sub>2</sub>SO<sub>4</sub> slowly, mix and cool. Run freshly prepared FeSO<sub>4</sub> dropwise down the side so it forms a layer, without shaking. A dark brown ring forms at the junction: [Fe(NO)]<sup>2+</sup>',
    why: '3Fe<sup>2+</sup> + NO<sub>3</sub><sup>−</sup> + 4H<sup>+</sup> → 3Fe<sup>3+</sup> + NO + 2H<sub>2</sub>O, then Fe<sup>2+</sup> + NO → [Fe(NO)]<sup>2+</sup>.',
    say: null,
  },
  // Carbonate, sulphide, sulphate confirmatory
  {
    topic: 3,
    kind: 'remember',
    q: 'Confirmatory tests for sulphate, sulphide and carbonate?',
    a: 'Sulphate: acidify with dilute HCl and add BaCl<sub>2</sub>, a white BaSO<sub>4</sub> precipitate insoluble in concentrated HCl or HNO<sub>3</sub>. Sulphide: nitroprusside gives purple or violet. Carbonate: the gas turns lime water milky, and more gas clears it (Ca(HCO<sub>3</sub>)<sub>2</sub>)',
    why: 'Carbonate is confirmed on the solid salt or its solution, not on the sodium carbonate extract, which already holds carbonate.',
    say: null,
  },
  // Chromyl chloride
  {
    topic: 3,
    kind: 'remember',
    q: 'The chromyl chloride test: which anion, and what is seen?',
    a: 'Chloride only. Heat the salt with solid K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> and concentrated H<sub>2</sub>SO<sub>4</sub> and pass the gas into NaOH: a yellow solution. Acetic acid and lead acetate give a yellow precipitate; dilute H<sub>2</sub>SO<sub>4</sub>, amyl alcohol and H<sub>2</sub>O<sub>2</sub> give a blue organic layer (CrO<sub>5</sub>)',
    why: 'Bromide and iodide do not give this test.',
    say: null,
  },
  {
    topic: 3,
    kind: 'mixup',
    q: 'Brown fumes with concentrated H<sub>2</sub>SO<sub>4</sub>: how do you tell nitrate from bromide?',
    a: 'Nitrate: the fumes thicken with copper turnings and leave a blue solution, and it gives the brown ring. Bromide: bromine thickens with MnO<sub>2</sub>, turns starch paper yellow and colours CCl<sub>4</sub> orange-brown with chlorine water',
    why: 'Separate them by the follow-up test, never by the colour alone.',
    say: null,
  },
  {
    topic: 3,
    kind: 'mistake',
    q: 'Why must the sodium carbonate extract be acidified with dilute HNO<sub>3</sub> before AgNO<sub>3</sub> is added?',
    a: 'The excess carbonate in the extract would give a precipitate of silver carbonate, and the test would mislead you',
    why: null,
    say: null,
  },
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Reading order: what does each coloured precipitate in each group point to?',
    a: 'Black in Group II: copper or lead. Black in Group IV: nickel. Brown in Group III: iron. White gelatinous in Group III: aluminium. White in Group IV: zinc. White carbonate in Group V: barium or calcium. Nothing, then Na<sub>2</sub>HPO<sub>4</sub> gives white crystals: magnesium',
    why: 'Ammonium is separate: tested on the original salt with NaOH.',
    say: null,
  },

  // ── Topic 05 · Thermochemistry, sols and kinetics ──
  // Calorimeter constant
  {
    topic: 4,
    kind: 'remember',
    q: 'What is the calorimeter constant <i>W</i>, and how is it found?',
    a: '<i>W</i> is the heat needed to warm the vessel, thermometer and stirrer by 1 K, in J K<sup>−1</sup>. By mixing hot and cold water: <i>W</i> = 4.184[<i>V</i><sub>h</sub>(<i>t</i><sub>h</sub> − <i>t</i><sub>m</sub>) − <i>V</i><sub>c</sub>(<i>t</i><sub>m</sub> − <i>t</i><sub>c</sub>)]/(<i>t</i><sub>m</sub> − <i>t</i><sub>c</sub>)',
    why: '100 mL at 27.0 °C and 100 mL at 55.0 °C settling at 40.0 °C give <i>W</i> = 64.4 J K<sup>−1</sup>.',
    say: '<i>W</i> is the heat that warms the beaker, thermometer and stirrer by 1 K.',
  },
  // Enthalpy from temperature change
  {
    topic: 4,
    kind: 'remember',
    q: 'How is the enthalpy change found from the temperature change, and what is the sign rule?',
    a: '<i>q</i> = (<i>m</i> × 4.184 + <i>W</i>) × Δ<i>T</i>, and Δ<i>H</i> = −<i>q</i>/<i>n</i>. A fall in temperature gives a positive Δ<i>H</i>; a rise gives a negative Δ<i>H</i>',
    why: null,
    say: 'A fall in temperature gives a positive Δ<i>H</i>; a rise gives a negative one.',
  },
  // Enthalpy of solution
  {
    topic: 4,
    kind: 'remember',
    q: 'Enthalpy of solution of CuSO<sub>4</sub>·5H<sub>2</sub>O: the formula, and the result for 5.00 g in 100 mL falling from 27.0 °C to 26.5 °C with <i>W</i> = 64.4 J K<sup>−1</sup>?',
    a: 'Δ<sub>sol</sub><i>H</i> = −[<i>W</i> + (100 + <i>w</i>) × 4.184] × Δ<i>T</i> × 249.5/<i>w</i>. The result is +12.6 kJ mol<sup>−1</sup>, endothermic',
    why: 'The contents weigh 100 + <i>w</i> g, not 100 g, and 249.5 g mol<sup>−1</sup> is for the pentahydrate.',
    say: null,
  },
  // Enthalpy of neutralisation
  {
    topic: 4,
    kind: 'remember',
    q: 'What value does the enthalpy of neutralisation of a strong acid by a strong base have, and what does a weak acid give?',
    a: 'About −57 kJ mol<sup>−1</sup> of water formed, the net change being H<sup>+</sup> + OH<sup>−</sup> → H<sub>2</sub>O. A weak acid or base gives a smaller magnitude, because part of the heat ionises it',
    why: '100 mL each of 1.0 M HCl and NaOH, 27.0 to 33.3 °C, <i>W</i> = 64.4 J K<sup>−1</sup>: 0.100 mol of water and −56.8 kJ mol<sup>−1</sup>; neglecting <i>W</i> gives 52.7, about 7 % too low.',
    say: null,
  },
  // Lyophilic and lyophobic
  {
    topic: 4,
    kind: 'remember',
    q: 'How do lyophilic and lyophobic sols differ in attraction, stability and preparation?',
    a: 'Lyophilic: particles attracted to the liquid, stable mainly by solvation, formed by direct mixing (egg albumin, starch, gum). Lyophobic: particles repel the liquid, stabilised by charge, formed only by special methods, not direct mixing (Fe(OH)<sub>3</sub>, Al(OH)<sub>3</sub>, As<sub>2</sub>S<sub>3</sub>)',
    why: null,
    say: null,
  },
  // Preparing the lyophobic sols
  {
    topic: 4,
    kind: 'remember',
    q: 'How are the Fe(OH)<sub>3</sub> and As<sub>2</sub>S<sub>3</sub> sols made, and what are their charges?',
    a: 'Fe(OH)<sub>3</sub>: FeCl<sub>3</sub> solution added drop by drop, with stirring, to boiling water: a brown sol, positive (FeCl<sub>3</sub> + 3H<sub>2</sub>O → Fe(OH)<sub>3</sub> + 3HCl). As<sub>2</sub>S<sub>3</sub>: H<sub>2</sub>S passed through a filtered As<sub>2</sub>O<sub>3</sub> solution, the excess driven off by slow heating: negative',
    why: 'FeCl<sub>3</sub> added to NaOH solution gives a negative sol; starch is also negative.',
    say: null,
  },
  // Clock reaction
  {
    topic: 4,
    kind: 'remember',
    q: 'In the iodide and hydrogen peroxide clock reaction, when does the blue colour appear?',
    a: 'Thiosulphate reduces I<sub>2</sub> back to I<sup>−</sup> as fast as it forms. When all the thiosulphate is used up, I<sub>2</sub> accumulates and gives the blue colour with starch',
    why: '2I<sup>−</sup> + H<sub>2</sub>O<sub>2</sub> + 2H<sup>+</sup> → I<sub>2</sub> + 2H<sub>2</sub>O, then I<sub>2</sub> + 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> → S<sub>4</sub>O<sub>6</sub><sup>2−</sup> + 2I<sup>−</sup>; iodide is regenerated, so it stays almost constant.',
    say: null,
  },
  // Rate and order
  {
    topic: 4,
    kind: 'remember',
    q: 'In the manual’s design, how is the rate found from the time <i>t</i>, and what are the order and <i>k</i>′ if 0.005, 0.010 and 0.015 M iodide give 150, 76 and 50 s?',
    a: 'Rate = 0.001 M/<i>t</i>. The order in iodide is 1 and <i>k</i>′ = 1.33 × 10<sup>−3</sup> s<sup>−1</sup>',
    why: '0.002 M thiosulphate is used up when 0.001 M of I<sub>2</sub> has formed; <i>t</i> × [I<sup>−</sup>] is almost constant (about 0.75).',
    say: null,
  },
  {
    topic: 4,
    kind: 'mixup',
    q: 'Peptization and coagulation: which is which?',
    a: 'They are opposites. Peptization turns a precipitate into a sol; coagulation brings sol particles together into a precipitate',
    why: null,
    say: null,
  },
  {
    topic: 4,
    kind: 'mistake',
    q: 'In the clock reaction, halving the time for the blue colour does what to the rate?',
    a: 'It doubles the rate. Time and rate are inversely related; halving the time does not halve the rate',
    why: null,
    say: null,
  },
  {
    topic: 4,
    kind: 'shortcut',
    q: 'The iodide concentration is made four times larger and the time falls from 240 s to 60 s. What is the order in iodide?',
    a: 'Order 1. The time is a quarter, so the rate is four times larger, and 4<sup><i>x</i></sup> = 4 gives <i>x</i> = 1',
    why: 'If <i>t</i> × [I<sup>−</sup>] is constant, the order is 1.',
    say: null,
  },
];
