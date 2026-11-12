/**
 * KEY POINTS for Chemistry Class 12, Chapter 7 (Alcohols, Phenols and Ethers).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–04 are 0–3; Additional topics A–G are 4–10; Additional
 * topic H, What JEE and NEET Actually Ask (the book's Addendum P), is 11. No
 * point refers to another topic by number.
 *
 * Every fact is from the Master Reference book; the page (the bottom folio) is
 * above each point. Remember: the topic's Key Definitions and Cheat Sheet Box.
 * Common mistakes: its Common Student Pitfalls. Exam shortcuts: its Pro-Tip.
 * `say`: the cheat sheet's memory aid, word for word, in the Ch 1–4 form: no
 * quotation marks, and a label after " — " (the book's own gloss where it has
 * one). Topics 01–04 print one aid each, so the chapter has four, all word
 * for word.
 * Additional topics: the addenda's methods, worked examples and practice
 * answers. Additional topic H: its distribution and traps.
 *
 * A few points are narrower than the book's sentence, or complete it, in our
 * words: methanol counted with the primary alcohols; the iodoform unit stated
 * for alcohols; electron-withdrawing groups "at ortho or para"; the 3° halide
 * in Williamson synthesis without "only"; rectified spirit without the book's
 * percentage; denatured alcohol with NCERT's copper sulphate beside the book's
 * recipe; the ethanol antidote
 * acting on the enzyme that oxidises methanol.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. S<sub>N</sub>1,
 * S<sub>N</sub>2, E1. p<i>K</i><sub>a</sub> with p upright. Formulas upright,
 * single bonds as en dashes (R–OH, Ar–OH, R–O–R′, C–O), "=" for double bonds;
 * R, R′, Ar and X generic upright letters, primes U+2032. Hybrid labels upright
 * (sp<sup>3</sup>); o-, m-, p-, n-, tert- upright. Degrees of carbon 1°, 2°, 3°.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Classification, Nomenclature & Preparation ──
  // pp. 312–314, 322
  {
    topic: 0,
    kind: 'remember',
    q: 'Alcohol, phenol, ether: where is the oxygen in each, and what are the three ways to classify an alcohol?',
    a: 'Alcohol R–OH: –OH on an sp<sup>3</sup> carbon. Phenol Ar–OH: –OH directly on an aromatic ring carbon. Ether R–O–R′: oxygen joins two alkyl or aryl groups, with no O–H. Alcohols are classified by the number of –OH groups (monohydric, dihydric, trihydric, polyhydric); by the carbon bearing the –OH, bonded to one, two or three other carbons for 1°, 2° and 3°, with methanol counted among the primary; and by position: allylic, benzylic, or vinylic, an unstable enol that tautomerises to a carbonyl compound',
    why: 'A monohydric alcohol and its isomeric ether share C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub>O, so the two are functional isomers.',
    say: null,
  },
  // pp. 315–316, 319–320, 322
  {
    topic: 0,
    kind: 'remember',
    q: 'Acid hydration, oxymercuration–demercuration, hydroboration–oxidation: where does the –OH go, and can the skeleton rearrange?',
    a: 'Acid-catalysed hydration: Markovnikov, through a free carbocation, so rearrangement is possible. Oxymercuration–demercuration, Hg(OAc)<sub>2</sub> and H<sub>2</sub>O then NaBH<sub>4</sub>: Markovnikov, through a bridged mercurinium ion, no rearrangement. Hydroboration–oxidation, B<sub>2</sub>H<sub>6</sub> or BH<sub>3</sub>·THF then H<sub>2</sub>O<sub>2</sub>/OH<sup>−</sup>: anti-Markovnikov, syn addition, no carbocation and no rearrangement',
    why: '3-Methylbut-1-ene with dilute H<sub>2</sub>SO<sub>4</sub> gives 2-methyl​butan-2-ol, after a 1,2-hydride shift from the 2° to the 3° cation; with BH<sub>3</sub> then H<sub>2</sub>O<sub>2</sub>/OH<sup>−</sup> it gives 3-methyl​butan-1-ol.',
    say: 'BHO Backwards — Boron Hydroboration → OH goes to the opposite (anti-Markovnikov) carbon.',
  },
  // pp. 317, 320
  {
    topic: 0,
    kind: 'mixup',
    q: 'A Grignard reagent on methanal, on another aldehyde, on a ketone: which class of alcohol? And by reduction?',
    a: 'R–MgX adds to the carbonyl carbon and aqueous work-up gives the alcohol: methanal → 1°, any other aldehyde → 2°, a ketone → 3°. Reduction with H<sub>2</sub>/Ni, Pt or Pd, NaBH<sub>4</sub> or LiAlH<sub>4</sub>: an aldehyde → 1°, a ketone → 2°; carboxylic acids and esters go to 1° alcohols with LiAlH<sub>4</sub>',
    why: '2-Phenyl​butan-2-ol, a 3° alcohol, comes from acetophenone (C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub>) and C<sub>2</sub>H<sub>5</sub>MgBr, then H<sub>3</sub>O<sup>+</sup>; reagent and apparatus must be scrupulously dry.',
    say: null,
  },
  // pp. 314, 319, 321
  {
    topic: 0,
    kind: 'mistake',
    q: 'Is the parent chain simply the longest chain, and is HOCH<sub>2</sub>CH<sub>2</sub>OH “ethandiol”?',
    a: 'No to both. The parent chain is the longest one that contains the carbon bearing –OH, even if a longer chain exists elsewhere, numbered to give the –OH the lowest locant. The alkane’s “-e” is kept before “-diol” and “-triol”: ethane-1,2-diol, propane-1,2-diol',
    why: 'CH<sub>3</sub>–CH(OH)–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>3</sub> is 4-methyl​pentan-2-ol, a 2° alcohol.',
    say: null,
  },
  // pp. 319, 321–322
  {
    topic: 0,
    kind: 'shortcut',
    q: 'How many alcohols have the formula C<sub>4</sub>H<sub>10</sub>O, and how many are tertiary? The fast way?',
    a: 'Count the positions of –OH on each carbon skeleton rather than drawing every molecule. Butane: butan-1-ol (1°), butan-2-ol (2°). Isobutane: 2-methyl​propan-1-ol (1°), 2-methyl​propan-2-ol (3°). Four alcohols, one tertiary; a 3° alcohol first becomes possible at C<sub>4</sub>',
    why: 'In a preparation question the signature names the route: an acetone by-product is cumene, 623 K and high pressure is Dow, diazotisation at 273–278 K is the diazonium route, anti-Markovnikov is hydroboration–oxidation.',
    say: null,
  },

  // ── Topic 02 · Physical & Chemical Properties of Alcohols and Phenols ──
  // pp. 323–324, 326, 331
  {
    topic: 1,
    kind: 'remember',
    q: 'The acidity ladder from carboxylic acid to alcohol, and why does phenol beat an alcohol?',
    a: 'Carboxylic acid > carbonic acid > phenol > water > alcohol; the smaller the p<i>K</i><sub>a</sub>, the stronger the acid: carboxylic acids ≈ 4–5, phenol ≈ 10. Among alcohols: CH<sub>3</sub>OH > 1° > 2° > 3°. Phenoxide spreads its negative charge over the oxygen and the ortho and para ring carbons; an alkoxide keeps it on oxygen. So phenol reacts with aqueous NaOH and alcohols do not, while both react with sodium',
    why: 'Phenol does not react with NaHCO<sub>3</sub>, being weaker than carbonic acid; carboxylic acids do, which tells the two apart.',
    say: 'O–H gives the proton, C–O gives the seat — acidity attacks the O–H; substitution and dehydration attack the C–O.',
  },
  // pp. 324, 327–328, 331
  {
    topic: 1,
    kind: 'remember',
    q: 'Reimer–Tiemann, Kolbe, zinc dust, chromic acid: what does each do to phenol?',
    a: 'Reimer–Tiemann: CHCl<sub>3</sub> and aqueous NaOH at ~340 K put –CHO at the ortho position, giving salicylaldehyde (2-hydroxy​benzaldehyde); the electrophile is dichlorocarbene, :CCl<sub>2</sub>. Kolbe: sodium phenoxide with CO<sub>2</sub> under pressure at ~400 K, then acid, gives salicylic acid (2-hydroxy​benzoic acid). Heating with zinc dust gives benzene. Chromic acid oxidises phenol to benzoquinone',
    why: 'Salicylic acid is the gateway to aspirin, its acetyl ester, and to methyl salicylate, oil of wintergreen.',
    say: null,
  },
  // pp. 327–328, 331
  {
    topic: 1,
    kind: 'mixup',
    q: 'Phenol with bromine water or with Br<sub>2</sub> in CS<sub>2</sub>; with dilute or concentrated HNO<sub>3</sub>: which products?',
    a: 'Bromine water: a white precipitate of 2,4,6-​tribromophenol, with no catalyst, since phenol is so activated. Br<sub>2</sub> in CS<sub>2</sub>, a low-polarity solvent, at low temperature: monobromination, mainly p-bromophenol. Dilute HNO<sub>3</sub> at about 298 K: a mixture of o- and p-nitrophenol. Concentrated HNO<sub>3</sub>: 2,4,6-​trinitrophenol, picric acid',
    why: 'Steam distillation separates the nitrophenols: o-nitrophenol is steam-volatile, its hydrogen bond being intramolecular, while p-nitrophenol associates by intermolecular hydrogen bonding.',
    say: null,
  },
  // pp. 323, 327, 330
  {
    topic: 1,
    kind: 'mistake',
    q: 'Does a tertiary alcohol oxidise to a ketone, as a secondary one does?',
    a: 'No: the carbinol carbon of a 3° alcohol carries no hydrogen, so it resists ordinary oxidation; only drastic conditions cleave the carbon skeleton. A 1° alcohol gives an aldehyde with a mild oxidant and a carboxylic acid with a strong one such as KMnO<sub>4</sub> or acidified K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>; a 2° alcohol gives a ketone',
    why: 'Over hot copper at ~573 K the same split shows: a 1° alcohol gives an aldehyde, a 2° a ketone, and a 3° dehydrates to an alkene.',
    say: null,
  },
  // pp. 326–327, 329–330
  {
    topic: 1,
    kind: 'shortcut',
    q: 'An alcohol C<sub>4</sub>H<sub>10</sub>O gives Lucas turbidity in about four minutes and a positive iodoform test. Which is it? The fast way?',
    a: 'Let two cheap tests partition the field. Lucas fixes the class: turbidity at once for 3° (and for benzylic and allylic), in about 5 minutes for 2°, none at room temperature for 1°. Iodoform fixes the pattern: an alcohol responds only if it has a CH<sub>3</sub>CH(OH)– unit. Four minutes means 2°, and the one 2° alcohol, CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub>, has that unit: butan-2-ol',
    why: 'For acidity, place the compound on the ladder, then nudge: an electron-withdrawing group at ortho or para raises a phenol’s acidity, as in p-nitrophenol, and the methyl of p-cresol lowers it.',
    say: null,
  },

  // ── Topic 03 · Ethers: Preparation & Properties ──
  // pp. 332–333, 335, 339
  {
    topic: 2,
    kind: 'remember',
    q: 'Why does an ether boil like an alkane of similar mass, yet dissolve in water like an alcohol?',
    a: 'An ether has no O–H, so its molecules cannot hydrogen-bond to one another: n-pentane 309 K ≈ ethoxyethane 308 K ≪ butan-1-ol 390 K, the gap being the alcohol’s hydrogen bonding. But the ether oxygen’s lone pairs can accept a hydrogen bond from water, so ethoxyethane (≈ 7.5 g per 100 mL) dissolves about as well as butan-1-ol (≈ 9 g); n-pentane is essentially insoluble',
    why: 'C–O–C is bent at about 111.7°, a little above the tetrahedral 109°28′ because the two bulky groups repel; C–O ≈ 141 pm, close to that in alcohols.',
    say: null,
  },
  // pp. 333, 336, 339
  {
    topic: 2,
    kind: 'remember',
    q: 'Ether cleavage by hot concentrated HI: which group takes the iodide, and why does an aryl ether give a phenol?',
    a: 'The acid first protonates the oxygen to an oxonium ion; the reactivity order is HI > HBr > HCl. Both groups 1° or 2°: S<sub>N</sub>2, iodide attacks the smaller, less hindered group, and the bulkier leaves as the alcohol. One group 3°: S<sub>N</sub>1, the 3° cation forms and takes the iodide, (CH<sub>3</sub>)<sub>3</sub>C–O–CH<sub>3</sub> + HI → (CH<sub>3</sub>)<sub>3</sub>C–I + CH<sub>3</sub>OH. Alkyl aryl ether: the aryl–O bond has partial double-bond character and its sp<sup>2</sup> carbon resists substitution, so anisole + HI → C<sub>6</sub>H<sub>5</sub>OH + CH<sub>3</sub>I, never an aryl iodide',
    why: 'With excess HI at high temperature any alcohol formed goes on to a second alkyl iodide: C<sub>2</sub>H<sub>5</sub>–O–C<sub>2</sub>H<sub>5</sub> + 2HI → 2C<sub>2</sub>H<sub>5</sub>I + H<sub>2</sub>O.',
    say: 'Aryl keeps its oxygen; tertiary keeps the iodide; primary loses the smaller.',
  },
  // pp. 333, 335, 339
  {
    topic: 2,
    kind: 'mixup',
    q: 'Ethanol heated with concentrated H<sub>2</sub>SO<sub>4</sub>: when does it give an ether, and when an alkene?',
    a: 'At 413 K, ethoxyethane: 2C<sub>2</sub>H<sub>5</sub>OH → C<sub>2</sub>H<sub>5</sub>–O–C<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O, by S<sub>N</sub>2, a second alcohol molecule attacking the protonated alcohol and pushing out water. At 443 K, ethene, by elimination. The lower temperature favours substitution, the higher elimination. The method suits only symmetrical ethers of primary alcohols: with 2° and 3° alcohols elimination outruns substitution',
    why: 'A mixture of two alcohols would give a mixture of products, so a mixed ether such as ethyl methyl ether is not made this way.',
    say: null,
  },
  // pp. 335, 337–338
  {
    topic: 2,
    kind: 'mistake',
    q: 'Can tert-butyl ethyl ether be made from C<sub>2</sub>H<sub>5</sub>O<sup>−</sup>Na<sup>+</sup> and (CH<sub>3</sub>)<sub>3</sub>C–Br, or di-tert-butyl ether by Williamson synthesis at all?',
    a: 'No: R–O<sup>−</sup>Na<sup>+</sup> + R′–X → R–O–R′ + NaX goes by S<sub>N</sub>2, and the alkoxide is also a strong base, so against a 3° halide elimination wins: CH<sub>3</sub>O<sup>−</sup>Na<sup>+</sup> + (CH<sub>3</sub>)<sub>3</sub>C–Br gives 2-methylpropene. Keep the halide primary and put the bulk on the alkoxide: (CH<sub>3</sub>)<sub>3</sub>C–O<sup>−</sup>Na<sup>+</sup> + C<sub>2</sub>H<sub>5</sub>Br gives tert-butyl ethyl ether. Di-tert-butyl ether would need a 3° halide',
    why: 'Aryl ethers come the same way, with the phenol as its phenoxide, since an aryl halide will not do S<sub>N</sub>2: C<sub>6</sub>H<sub>5</sub>O<sup>−</sup>Na<sup>+</sup> + C<sub>2</sub>H<sub>5</sub>Br → C<sub>6</sub>H<sub>5</sub>–O–C<sub>2</sub>H<sub>5</sub> + NaBr.',
    say: null,
  },
  // pp. 336–337, 339
  {
    topic: 2,
    kind: 'shortcut',
    q: 'The HI products of 2-methoxy-2-​methylpropane, and of 1-ethoxy​propane with excess hot HI? The fast way?',
    a: 'Ask three questions in order. Is a group aromatic? Then phenol + alkyl halide. Is a group tertiary? Then S<sub>N</sub>1, iodide on the tertiary carbon. Otherwise S<sub>N</sub>2, iodide on the smaller alkyl, and with hot, excess HI every alcohol goes on to its iodide. So 2-methoxy-2-​methylpropane gives 2-iodo-2-​methylpropane + methanol, and 1-ethoxy​propane gives ethyl iodide + 1-iodopropane',
    why: 'An aryl ether’s alkoxy group activates the ring and directs ortho and para: anisole brominates in ethanoic acid with no iron(III) bromide catalyst, the para product major.',
    say: null,
  },

  // ── Topic 04 · Some Commercially Important Alcohols ──
  // p. 340
  {
    topic: 3,
    kind: 'remember',
    q: 'Methanol: its old name, its industrial preparation, and why is it so poisonous?',
    a: 'Wood spirit, from its old manufacture by the destructive distillation of wood. Today: CO + 2H<sub>2</sub> →<sup>ZnO–Cr₂O₃</sup> CH<sub>3</sub>OH, at 573–673 K and 200–300 atm. In the body it is oxidised to formaldehyde and then formic acid, which attack the optic nerve and retina: a small dose can cause blindness, a larger one is fatal',
    why: 'Its uses: a solvent for paints, varnishes and shellac, an antifreeze, a fuel, and the feedstock for formaldehyde.',
    say: null,
  },
  // p. 341
  {
    topic: 3,
    kind: 'remember',
    q: 'Ethanol by fermentation: the two enzymes, their equations and the conditions?',
    a: 'Yeast supplies both. Invertase: C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> + H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (glucose) + C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (fructose). Zymase: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2C<sub>2</sub>H<sub>5</sub>OH + 2CO<sub>2</sub>. In the near-absence of air, at about 303 K; if air gets in, the ethanol is oxidised to ethanoic acid (vinegar)',
    why: 'Ethanol is also made by the acid-catalysed hydration of ethene, the dominant petrochemical route.',
    say: null,
  },
  // p. 341
  {
    topic: 3,
    kind: 'mixup',
    q: 'Rectified spirit, absolute alcohol, denatured alcohol, power alcohol: what is each?',
    a: 'Rectified spirit: the ethanol–water mixture from fractional distillation of fermented liquor, which distillation cannot concentrate further because it is a constant-boiling (azeotropic) mixture. Absolute alcohol: essentially 100% ethanol, made by removing that water with quicklime (CaO) or by azeotropic distillation with benzene. Denatured alcohol: ethanol made unfit to drink with poisonous or foul substances, methanol and pyridine, and a dye or copper sulphate for colour, so industry can have it without the heavy excise duty on drinkable alcohol. Power alcohol: ethanol blended with petrol as a motor fuel',
    why: 'About 70% ethanol is the most effective concentration for disinfecting skin.',
    say: null,
  },
  // pp. 340, 342–343
  {
    topic: 3,
    kind: 'mistake',
    q: 'Can rectified spirit be turned into absolute alcohol by more careful fractional distillation?',
    a: 'No: ethanol and water form a constant-boiling azeotrope, whose vapour has the same composition as the liquid, so distillation cannot enrich past it. The water is removed chemically or azeotropically: reflux over quicklime (CaO) and distil, or distil azeotropically with benzene',
    why: '“Wood spirit” is methanol, from the destructive distillation of wood; “grain alcohol” is ethanol.',
    say: null,
  },
  // pp. 341–343
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Which is correct: wood spirit is ethanol; methanol causes blindness; absolute alcohol is the ethanol–water azeotrope? The fast way?',
    a: 'Anchor each fact to a one-word hook: wood → methanol, grain → ethanol, azeotrope → rectified, 100% → absolute, poison added → denatured, petrol blend → power. Wood spirit is methanol and the azeotrope is rectified spirit, so only the second holds: methanol → formic acid → optic-nerve damage → blindness',
    why: 'Ethanol itself is a central-nervous-system depressant, not acutely poisonous in small quantities; ethanol contaminated with methanol, as in illicit liquor, is deadly.',
    say: 'wood/grain, 95.5/100, poison/petrol — six terms, three contrasting pairs.',
  },

  // ── Additional A · The Acidity of Phenols, Quantified ──
  // pp. 344–345, 347
  {
    topic: 4,
    kind: 'remember',
    q: 'The p<i>K</i><sub>a</sub> values of ethanol, phenol, the cresols and the nitrophenols, and why is meta special?',
    a: 'p<i>K</i><sub>a</sub>: ethanol 15.9, p-cresol 10.2, o-cresol 10.2, m-cresol 10.1, phenol 10.0, m-nitrophenol 8.3, o-nitrophenol 7.2, p-nitrophenol 7.1. The phenoxide charge reaches the oxygen and the ortho and para carbons, never a meta carbon, so a meta –NO<sub>2</sub> withdraws only by induction: m-nitrophenol is stronger than phenol but weaker than its ortho and para isomers',
    why: 'Phenol against ethanol is about 6 p<i>K</i><sub>a</sub> units, a factor of about 10<sup>6</sup> in <i>K</i><sub>a</sub>: phenol is about a million times more acidic.',
    say: null,
  },
  // pp. 345–347
  {
    topic: 4,
    kind: 'remember',
    q: 'Which phenols liberate CO<sub>2</sub> from NaHCO<sub>3</sub>, and what decides it?',
    a: 'An acid liberates CO<sub>2</sub> from sodium bicarbonate only if it is stronger than carbonic acid. Phenol, the cresols and every mononitrophenol, all with p<i>K</i><sub>a</sub> above 7, do not. 2,4-​Dinitrophenol and picric acid (2,4,6-​trinitrophenol), with two and three ortho/para nitro groups, do, as do carboxylic acids such as benzoic acid (p<i>K</i><sub>a</sub> 4.19)',
    why: 'Increasing acid strength: propan-1-ol < 4-methylphenol < phenol < 3-nitrophenol < 3,5-​dinitrophenol < 2,4,6-​trinitrophenol; two meta nitro groups, inductive only, still leave 3,5-​dinitrophenol below picric acid.',
    say: null,
  },

  // ── Additional B · Rearrangement: The Carbocation Moves Before It Reacts ──
  // pp. 347–349
  {
    topic: 5,
    kind: 'remember',
    q: 'An alcohol has formed a carbocation: how do you decide whether the product is rearranged?',
    a: 'Before a proton is lost or a nucleophile captured, ask whether a 1,2-hydride or 1,2-methyl shift from a neighbouring carbon would turn the cation into a more stable one (1° → 2°, 2° → 3°). If so, expect the major product on the rearranged skeleton, and only then apply Saytzeff. 3-Methyl​butan-2-ol + HBr: the 2° cation at C-2 takes a hydride from C-3 and becomes 3°, so 2-bromo-2-​methylbutane is major, not 2-bromo-3-​methylbutane',
    why: '3,3-Dimethyl​butan-2-ol with conc. H<sub>2</sub>SO<sub>4</sub>: a 1,2-methyl shift turns the 2° cation into the 3° (CH<sub>3</sub>)<sub>2</sub>C<sup>+</sup>–CH(CH<sub>3</sub>)<sub>2</sub>, and the major alkene is 2,3-dimethyl​but-2-ene, (CH<sub>3</sub>)<sub>2</sub>C=C(CH<sub>3</sub>)<sub>2</sub>.',
    say: null,
  },
  // pp. 348–349
  {
    topic: 5,
    kind: 'remember',
    q: 'Acid-catalysed dehydration: the rate order of butan-1-ol, butan-2-ol and 2-methyl​propan-2-ol, and the alkenes from the butanols?',
    a: 'The rate tracks the stability of the cation actually formed: 2-methyl​propan-2-ol > butan-2-ol > butan-1-ol, 3° > 2° > 1°. Butan-2-ol gives three alkenes, counting stereoisomers: but-1-ene, cis-but-2-ene and trans-but-2-ene. Butan-1-ol gives but-1-ene and but-2-ene with but-2-ene major, a 1,2-hydride shift carrying the charge to the more stable 2° position',
    why: '1-Methyl​cyclohexanol needs no shift: its cation is already 3°, and Saytzeff loss of a proton gives 1-methyl​cyclohexene.',
    say: null,
  },

  // ── Additional C · Turning –OH into Halide Without HX: PBr₃, PCl₅, SOCl₂ ──
  // p. 350
  {
    topic: 6,
    kind: 'remember',
    q: 'PBr<sub>3</sub>, PCl<sub>5</sub>, SOCl<sub>2</sub>: the equation for each, and why is SOCl<sub>2</sub> preferred?',
    a: '3 R–OH + PBr<sub>3</sub> → 3 R–Br + H<sub>3</sub>PO<sub>3</sub>; R–OH + PCl<sub>5</sub> → R–Cl + POCl<sub>3</sub> + HCl; R–OH + SOCl<sub>2</sub> → R–Cl + SO<sub>2</sub> + HCl. Both by-products of SOCl<sub>2</sub> are gases that leave the mixture on their own, so the alkyl chloride is easy to isolate pure',
    why: 'PBr<sub>3</sub> is commonly made in situ from red phosphorus and bromine; red phosphorus and I<sub>2</sub> give PI<sub>3</sub>, which does the same job for iodides.',
    say: null,
  },
  // pp. 350–351
  {
    topic: 6,
    kind: 'remember',
    q: 'You need 2-bromo-3-​methylbutane from 3-methyl​butan-2-ol: HBr or PBr<sub>3</sub>, and why?',
    a: 'PBr<sub>3</sub>. HBr goes through a free carbocation, which here rearranges by a hydride shift and gives mostly 2-bromo-2-​methylbutane. PBr<sub>3</sub>, or SOCl<sub>2</sub> for the chloride, first turns the –OH into a good leaving group, –O–P or –O–S, which the halide displaces with no free carbocation, so the halogen enters at C-2 and the skeleton is kept',
    why: 'These are alcohol reactions: the aryl C–O bond has partial double-bond character and its sp<sup>2</sup> carbon resists substitution, so phenol gives no useful chlorobenzene with HCl, PCl<sub>5</sub> or SOCl<sub>2</sub>; heating with zinc dust does break its C–O bond.',
    say: null,
  },

  // ── Additional D · The Williamson Synthesis as a Feasibility Screen ──
  // pp. 351–353
  {
    topic: 7,
    kind: 'remember',
    q: 'The Williamson feasibility screen: which three questions decide whether a pairing works?',
    a: 'Can the halide be attacked? It is the S<sub>N</sub>2 electrophile, so it must be methyl or 1° (benzylic also works); a 2° halide mostly eliminates, and a 3° halide gives the alkene. Is either partner an aryl or vinyl halide? Then that pairing fails, since its sp<sup>2</sup> carbon does not undergo S<sub>N</sub>2 (a nitro-activated aryl halide reacts only by a different mechanism); an aryl group must come in as the aryloxide. Which fragment is bulkier? Let the bulk ride on the alkoxide: tert-butoxide + ethyl bromide works, ethoxide + tert-butyl bromide does not',
    why: 'So diaryl ethers such as C<sub>6</sub>H<sub>5</sub>OC<sub>6</sub>H<sub>5</sub>, and divinyl ether, CH<sub>2</sub>=CH–O–CH=CH<sub>2</sub>, cannot be made by direct Williamson synthesis.',
    say: null,
  },
  // pp. 352–353
  {
    topic: 7,
    kind: 'remember',
    q: 'How is the alkoxide made for a Williamson synthesis, and why does a phenoxide need less?',
    a: 'Alcohols are weaker acids than water, so NaOH turns only a small fraction into alkoxide: use sodium metal or NaH, 2ROH + 2Na → 2RONa + H<sub>2</sub>. Phenols are much stronger acids, so NaOH suffices: ArOH + NaOH → ArONa + H<sub>2</sub>O',
    why: 'For 2-ethoxy-3-​methylpentane the secondary fragment is the alkoxide, sodium 3-methyl​pentan-2-oxide, with bromoethane; ethoxide with the secondary halide would mostly eliminate.',
    say: null,
  },

  // ── Additional E · Ether Cleavage: Stoichiometry and the Edge Cases ──
  // pp. 354–355
  {
    topic: 8,
    kind: 'remember',
    q: 'Ether + HI: what forms with one equivalent, and what with excess hot HI?',
    a: 'One equivalent: R–O–R′ + HI → R–I + R′–OH. Excess concentrated HI at high temperature converts the alcohol onward: R–O–R′ + 2HI → R–I + R′–I + H<sub>2</sub>O. With excess HI a symmetrical ether gives one organic product and an unsymmetrical one two: 1-ethoxy​propane gives iodoethane + propan-1-ol with one equivalent, iodoethane + 1-iodopropane with excess',
    why: 'The order is HI > HBr > HCl: cleavage needs a strongly acidic medium to protonate the ether oxygen and a good nucleophile, and iodide is the best of the three.',
    say: null,
  },
  // pp. 354–356
  {
    topic: 8,
    kind: 'remember',
    q: 'Benzyl ethyl ether, anisole and tert-butyl phenyl ether with HI: which bond breaks in each?',
    a: 'Benzyl ethyl ether: the benzyl–oxygen bond, the benzylic carbon being sp<sup>3</sup> and open to attack, with a resonance-stabilised cation if it ionises: C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>–O–C<sub>2</sub>H<sub>5</sub> + HI → C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>I + C<sub>2</sub>H<sub>5</sub>OH. Anisole: the methyl–oxygen bond, since an sp<sup>2</sup> aryl carbon cannot be attacked, giving phenol + iodomethane. tert-Butyl phenyl ether: both rules agree, the aryl–O bond is safe and the 3° group cleaves by S<sub>N</sub>1, giving phenol + 2-iodo-2-​methylpropane',
    why: '“Aryl keeps its oxygen” applies to C<sub>6</sub>H<sub>5</sub>–O, not to C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>–O.',
    say: null,
  },

  // ── Additional F · Counting Isomers: C₅H₁₂O and C₇H₈O ──
  // pp. 356–358
  {
    topic: 9,
    kind: 'remember',
    q: 'How many alcohols have the formula C<sub>5</sub>H<sub>12</sub>O, by class, and how many are chiral?',
    a: 'Eight, found by placing –OH on every distinct carbon of each skeleton. Primary: pentan-1-ol, 2-methyl​butan-1-ol, 3-methyl​butan-1-ol, 2,2-dimethyl​propan-1-ol. Secondary: pentan-2-ol, pentan-3-ol, 3-methyl​butan-2-ol. Tertiary: 2-methyl​butan-2-ol. Three are chiral, each with one stereocentre: pentan-2-ol, 3-methyl​butan-2-ol and 2-methyl​butan-1-ol',
    why: 'The same formula also covers six ethers, four methyl butyl and two ethyl propyl: fourteen structural isomers in all.',
    say: null,
  },
  // pp. 357–358
  {
    topic: 9,
    kind: 'remember',
    q: 'C<sub>7</sub>H<sub>8</sub>O: how many aromatic isomers, and how many of them are phenols?',
    a: 'Five aromatic isomers, only three phenols: 2-, 3- and 4-methylphenol (o-, m-, p-cresol). Phenylmethanol (benzyl alcohol) carries its –OH on a side-chain sp<sup>3</sup> carbon, so it is an alcohol; methoxybenzene (anisole) has no O–H and is an ether',
    why: 'A phenol needs the –OH directly on the ring, so a question asking for the monohydric phenols of C<sub>7</sub>H<sub>8</sub>O wants three structures, not five.',
    say: null,
  },

  // ── Additional G · NCERT-Exact Micro-Facts: Fermentation, Denaturation, Antidotes, Indicators ──
  // pp. 358–359
  {
    topic: 10,
    kind: 'remember',
    q: 'Fermentation and denaturing: the 14% cap, why air is kept out, and what denatures commercial alcohol?',
    a: 'Zymase is inhibited once the ethanol formed exceeds about 14%, so natural fermentation tops out near that strength and stronger spirits need distillation. Air is excluded because oxygen would oxidise the ethanol to ethanoic acid, souring it to vinegar. Commercial alcohol is made unfit to drink with copper sulphate, for colour, and pyridine, a foul-smelling liquid; industrial methylated spirit also contains methanol',
    why: 'Phenol’s common name is carbolic acid; with phthalic anhydride and concentrated H<sub>2</sub>SO<sub>4</sub> it gives the acid–base indicator phenolphthalein.',
    say: null,
  },
  // pp. 358–359
  {
    topic: 10,
    kind: 'remember',
    q: 'Why is diluted ethanol given for methanol poisoning, and how is picric acid best made?',
    a: 'Methanol is oxidised in the body to methanal and then methanoic acid, which attacks the optic nerve. An intravenous infusion of diluted ethanol competes for the enzyme that oxidises the methanol, slowing the formation of the toxic products while the kidneys excrete the methanol. Picric acid: direct nitration of phenol gives a poor yield, so phenol is first sulphonated with concentrated H<sub>2</sub>SO<sub>4</sub> to phenol-2,4-​disulphonic acid, and concentrated HNO<sub>3</sub> then replaces the –SO<sub>3</sub>H groups with –NO<sub>2</sub>',
    why: 'Counting oxygens on that route: phenol-2,4-​disulphonic acid, C<sub>6</sub>H<sub>3</sub>(OH)(SO<sub>3</sub>H)<sub>2</sub>, has 7 and picric acid, C<sub>6</sub>H<sub>2</sub>(OH)(NO<sub>2</sub>)<sub>3</sub>, has 7: 14 in all.',
    say: null,
  },

  // ── Additional H · What JEE and NEET Actually Ask ──
  // p. 360
  {
    topic: 11,
    kind: 'remember',
    q: 'Which parts of Alcohols, Phenols and Ethers come up most in JEE and NEET?',
    a: 'A reading of past papers, not official figures. Highest, every cycle: acidity, NaHCO<sub>3</sub> behaviour and acid–base separation. High: the Lucas test and –OH → halide substitution; iodoform scope; Williamson pairing and HI cleavage. Moderate: boiling point and hydrogen bonding, usually assertion-reason; named phenol chemistry; preparations of alcohols. Dehydration rates and products come in JEE Main, often as numericals, and multi-step sequences are rising',
    why: 'Nearly half the questions reward three skills: placing a compound on the acidity ladder with the bicarbonate threshold, running the Lucas and iodoform pair, and the Williamson-or-cleavage decision.',
    say: null,
  },
  // pp. 363–364
  {
    topic: 11,
    kind: 'mistake',
    q: 'Which traps recur in alcohol, phenol and ether questions?',
    a: 'A brown precipitate claimed for phenol with bromine water, when it is white 2,4,6-​tribromophenol; phenol said to fizz with NaHCO<sub>3</sub>; propan-1-ol credited with the iodoform test; benzyl alcohol given the 1° Lucas timing, though its resonance-stabilised cation makes it immediate; the iodide put on the methyl, not the tertiary carbon, of tert-butyl methyl ether; m-nitrophenol ranked with its ortho and para isomers; an aryl or vinyl halide used as the Williamson electrophile',
    why: 'In statement-type items three statements often sound right and one inverts a single fact, such as “phenol is more acidic than picric acid”: grade each statement on its own.',
    say: null,
  },
];
