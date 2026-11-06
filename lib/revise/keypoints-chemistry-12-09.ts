/**
 * KEY POINTS for Chemistry Class 12, Chapter 9 (Amines).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); Topic 04, the Master Revision & Reaction Compendium, a
 * revision topic with no examples, has two Remember and one Common mistake; an
 * Additional topic has two points for its central results. Memory lines are a
 * fifth, short section of their own, read rather than tested: the first two of
 * each topic.
 *
 * `topic`: Topics 01–04 are 0–3; Additional topics A–D are 4–7; Additional
 * topic E, the book's Summary Checklist, is 8 and has no points (as in
 * Chemistry 11); Additional topic F, What JEE and NEET Actually Ask (the
 * book's Addendum P), is 9. No point refers to another topic by number.
 *
 * Every fact is from the Master Reference book; the page (the bottom folio) is
 * above each point. Remember: the topic's Key Definitions and Cheat Sheet Box
 * (Topic 04: its test matrix and quick reference). Common mistakes: its Common
 * Student Pitfalls (Topic 04: its High-Yield Exam Traps). Exam shortcuts: its
 * Pro-Tip. `say`: the cheat sheet's first two memory aids, word for word, in the
 * Ch 1–4 form: no quotation marks, and a label after " — " (the book's own gloss
 * where it has one). Topics 01–03 print one, one and two aids and Topic 04 none,
 * so the chapter has four lines, all word for word; the coupling aid keeps the
 * book's own label-first form. Two are looser than the chemistry: the ascent's extra carbon comes in at
 * the cyanide step, and solvation scrambles rather than flips the inductive
 * order; the point that carries each gives the true account.
 * Additional topics: the addenda's methods, worked examples and practice
 * answers. Additional topic F: its distribution and traps.
 *
 * A few points are narrower than the book's sentence, or complete it, in our
 * words: the nitrile's extra carbon placed at the KCN step, not the reduction;
 * Gabriel's last step without naming phthalic acid; aliphatic amines' pKb as
 * 3.00–4.22, the table's own range; an electron-releasing ring group raising
 * basicity at para, with ortho the exception; the ethyl series' 2° > 3° > 1°
 * beside the methyl series' 2° > 1° > 3°; a 1° aliphatic amine with nitrous
 * acid named by its N₂ alone; the mustard-oil test for 1° aliphatic amines;
 * the Friedel–Crafts adduct without "positively charged"; the fluoroborate as
 * the diazonium salt that is isolated; coupling with phenol only, no ranking of
 * benzene; the 1,3,5-tribromobenzene route without the book's reason; a 3°
 * amine still reacting with nitrous acid; nitration's –NH₃⁺ on the nitrogen;
 * conjugate-acid pKa 10.64 left as "an aliphatic amine" and S in the pKa
 * example as "weaker still"; the ortho effect by hindered solvation only;
 * butan-2-amine as the isomer that "can be" optically active; isomer pairs as
 * examples, not the only pairs; E's benzylamine order with Topic 02's values.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. p<i>K</i><sub>b</sub>
 * and p<i>K</i><sub>a</sub> with p upright, <i>K</i> italic; α, β upright.
 * Formulas upright, single bonds as en dashes (R–NH₂, Ar–NH₂, N–H), "=" for
 * double bonds; R, R′, Ar and X generic upright letters, primes U+2032.
 * Diazonium Ar–N₂⁺, azo –N=N–, isocyanide R–NC. Hybrid labels upright (sp³);
 * o-, m-, p-, N-, tert- upright. Classes 1°, 2°, 3°. A value is kept with its
 * compound, and with its unit, by a no-break space.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Nomenclature, Classification & Preparation ──
  // pp. 428–430, 438
  {
    topic: 0,
    kind: 'remember',
    q: 'How is an amine classed as 1°, 2° or 3°, and why is tert-butylamine primary?',
    a: 'An amine is ammonia with one, two or three of its hydrogens replaced by alkyl or aryl groups. Count the carbon groups on the nitrogen, never the carbon that carries it: R–NH<sub>2</sub> is 1°, R<sub>2</sub>NH 2°, R<sub>3</sub>N 3°, and a fourth group, the lone pair now used in a bond, gives the quaternary ammonium ion R<sub>4</sub>N<sup>+</sup>. tert-Butylamine, (CH<sub>3</sub>)<sub>3</sub>C–NH<sub>2</sub>, is primary: the carbon bearing the –NH<sub>2</sub> is tertiary, but only one carbon group touches the nitrogen. With the nitrogen directly on a benzene ring the amine is an arylamine, such as aniline, C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>. The nitrogen is sp<sup>3</sup> and pyramidal, like ammonia’s, its lone pair at the apex',
    why: 'R<sub>1</sub>R<sub>2</sub>R<sub>3</sub>N looks chiral but cannot be resolved: nitrogen inversion, through a planar transition state, interconverts the two mirror images millions of times a second at room temperature.',
    say: null,
  },
  // pp. 429, 431, 436–437
  {
    topic: 0,
    kind: 'remember',
    q: 'How is an amine named in the common and IUPAC systems, and what is (CH<sub>3</sub>)<sub>2</sub>CH–NH–CH<sub>3</sub>?',
    a: 'Common: name the alkyl groups on N alphabetically and add -amine as one word: methylamine, dimethylamine, ethylmethylamine. IUPAC: drop the alkane’s final -e and add -amine, with the lowest locant for the nitrogen-bearing carbon: propan-1-amine, propan-2-amine. For 2° and 3° amines the longest chain is the parent and the other groups on nitrogen take N- prefixes: CH<sub>3</sub>NHCH<sub>2</sub>CH<sub>3</sub> is N-methyl​ethanamine, (CH<sub>3</sub>)<sub>3</sub>N is N,N-dimethyl​methanamine. Diamines keep the -e: hexane-1,6-diamine. C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> is aniline, a retained IUPAC name, or benzenamine',
    why: '(CH<sub>3</sub>)<sub>2</sub>CH–NH–CH<sub>3</sub> is N-methyl​propan-2-amine, a 2° amine; (CH<sub>3</sub>)<sub>2</sub>CH–CH<sub>2</sub>–NH<sub>2</sub> is 2-methyl​propan-1-amine, isobutylamine being its common name.',
    say: null,
  },
  // pp. 431–433, 435, 437–438
  {
    topic: 0,
    kind: 'mixup',
    q: 'Nitrile, amide, Gabriel, Hofmann bromamide: how does each route change the carbon count?',
    a: 'From an alkyl halide through KCN and then reduction of the nitrile (LiAlH<sub>4</sub>, H<sub>2</sub>/Ni or Na/alcohol): one carbon more than the halide, the ascent of the series. The extra carbon comes in at the cyanide step; the reduction keeps the nitrile’s carbons, CH<sub>3</sub>CN giving CH<sub>3</sub>CH<sub>2</sub>NH<sub>2</sub>. An amide reduced by LiAlH<sub>4</sub>: the same count, its C=O becoming CH<sub>2</sub>. Gabriel: the same count as R–X. Hofmann bromamide: one carbon fewer, the old carbonyl carbon leaving as carbonate: R–CONH<sub>2</sub> + Br<sub>2</sub> + 4KOH → R–NH<sub>2</sub> + K<sub>2</sub>CO<sub>3</sub> + 2KBr + 2H<sub>2</sub>O. The R group migrates from carbon to nitrogen, through an isocyanate, R–N=C=O, with retention of configuration',
    why: 'From (<i>S</i>)-2-methyl​butanamide, Hofmann gives butan-2-amine (4 C), the migrating stereocentre keeping its configuration; LiAlH<sub>4</sub> gives 2-methyl​butan-1-amine (5 C), the stereocentre untouched.',
    say: 'G-A-S, H-M — Gabriel keeps carbons, Ascent (nitriles) adds one, Same for amides, HofMann minus one.',
  },
  // pp. 432–433, 435, 437
  {
    topic: 0,
    kind: 'mistake',
    q: 'Can Gabriel phthalimide synthesis make aniline or tert-butylamine?',
    a: 'No: its key step is an S<sub>N</sub>2 on R–X, and aryl halides do not undergo S<sub>N</sub>2, while 3° halides eliminate instead. Phthalimide with alcoholic KOH gives potassium phthalimide, its N–H acidic because the anion is stabilised by the two flanking carbonyls; the anion displaces halide from R–X to give the N-alkyl​phthalimide, which has no acidic hydrogen left and cannot alkylate again; hydrolysis, or hydrazinolysis with NH<sub>2</sub>NH<sub>2</sub>, releases a pure 1° amine with the carbon count of R–X. So benzylamine and propan-1-amine are made this way; aniline and tert-butylamine are not',
    why: 'For an aromatic nitro group use H<sub>2</sub>/Pd, Sn/HCl or Fe/HCl, not LiAlH<sub>4</sub>, which does not deliver the amine cleanly and tends to give azo compounds; nitrobenzene with Sn/HCl gives aniline.',
    say: null,
  },
  // pp. 433, 435–437
  {
    topic: 0,
    kind: 'shortcut',
    q: 'From propan-1-ol, make butan-1-amine and propan-1-amine; from benzamide, make aniline. The fast way?',
    a: 'Count the target’s carbons first and work backwards with the carbon ledger: halide through the nitrile +1, amide same, Gabriel same, Hofmann −1. Butan-1-amine has one carbon more: CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH with PBr<sub>3</sub> gives 1-bromopropane, KCN the nitrile CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CN, and LiAlH<sub>4</sub> butan-1-amine. Propan-1-amine keeps all three: the bromide through Gabriel. Aniline has one fewer than benzamide, 6 against 7: Br<sub>2</sub> and KOH, the Hofmann bromamide degradation',
    why: 'Reductive amination keeps the carbonyl fragment’s carbons and reaches every class by its nitrogen partner, the imine being reduced in situ (H<sub>2</sub>/Ni): ammonia gives a 1° amine, a 1° amine a 2°, a 2° amine a 3°.',
    say: null,
  },

  // ── Topic 02 · Physical & Chemical Properties ──
  // pp. 439–440, 445, 447, 466
  {
    topic: 1,
    kind: 'remember',
    q: 'How do aliphatic amines, ammonia, benzylamine and aniline rank as bases, and why is aniline so weak?',
    a: 'The smaller the p<i>K</i><sub>b</sub> (−log <i>K</i><sub>b</sub>), the stronger the base. Alkyl groups push electron density onto nitrogen (+I), so the aliphatic amines, p<i>K</i><sub>b</sub> 3.00–4.22, beat ammonia, 4.75. Aniline, 9.38, is far weaker: its lone pair is delocalised into the benzene ring by resonance, not drained by induction, so it is less available for a proton. Benzylamine, 4.70, is basic like ammonia: the CH<sub>2</sub> keeps the lone pair out of the ring. Methyls on nitrogen help even an arylamine: N-methylaniline 9.30, N,N-dimethyl​aniline 8.92',
    why: 'On the ring, electron-withdrawing groups lower basicity and an electron-releasing group at para raises it: 4-methylaniline > aniline > 4-chloroaniline > 4-nitroaniline. At ortho even a methyl weakens it: o-toluidine’s p<i>K</i><sub>b</sub> is 9.56.',
    say: null,
  },
  // pp. 439, 442, 446–447
  {
    topic: 1,
    kind: 'remember',
    q: 'Aniline with bromine water, with the nitrating mixture, with hot conc. H<sub>2</sub>SO<sub>4</sub> and with AlCl<sub>3</sub>: what happens?',
    a: '–NH<sub>2</sub> is strongly activating and ortho/para-directing. Bromine water gives an instant white precipitate of 2,4,6-tribromoaniline; for p-bromoaniline, protect the nitrogen as acetanilide, brominate, then hydrolyse. In the strongly acidic nitrating mixture much of the –NH<sub>2</sub> is protonated to –NH<sub>3</sub><sup>+</sup>, a meta-directing deactivator, so a substantial fraction of meta product forms; p-nitroaniline comes cleanly through acetanilide. Conc. H<sub>2</sub>SO<sub>4</sub> gives anilinium hydrogen​sulphate, which on heating at ≈ 453–473 K rearranges to sulphanilic acid, the zwitterion H<sub>3</sub>N<sup>+</sup>–C<sub>6</sub>H<sub>4</sub>–SO<sub>3</sub><sup>−</sup>. No Friedel–Crafts: AlCl<sub>3</sub> bonds to the nitrogen lone pair, and the adduct is deactivating and meta-directing',
    why: '1° and 2° amines hydrogen-bond, so they boil above alkanes of similar mass but below alcohols, N being less electronegative than O; among isomers the order is 1° > 2° > 3°, a 3° amine having no N–H to bond with its neighbours.',
    say: null,
  },
  // pp. 440–444, 447
  {
    topic: 1,
    kind: 'mixup',
    q: 'Carbylamine, Hinsberg or nitrous acid: what does each show for 1°, 2° and 3° amines?',
    a: 'Carbylamine, CHCl<sub>3</sub> and alcoholic KOH on heating: a foul-smelling isocyanide from 1° amines only, aliphatic or aromatic, through dichlorocarbene: R–NH<sub>2</sub> + CHCl<sub>3</sub> + 3KOH → R–NC + 3KCl + 3H<sub>2</sub>O. Hinsberg’s reagent, C<sub>6</sub>H<sub>5</sub>SO<sub>2</sub>Cl: a 1° amine gives a sulphonamide whose remaining N–H lets it dissolve in alkali, a 2° amine one that is insoluble, a 3° amine no reaction. Nitrous acid, from NaNO<sub>2</sub> and dil. HCl: a 1° aliphatic amine evolves N<sub>2</sub> briskly through an unstable diazonium salt; a 1° aromatic amine gives an arenediazonium salt, stable at 273–278 K; a 2° amine a yellow oily N-nitrosamine, R<sub>2</sub>N–N=O; a 3° aromatic amine is nitrosated on the ring',
    why: 'A 1° aliphatic amine with CS<sub>2</sub>, then HgCl<sub>2</sub> on warming, gives the pungent isothiocyanate R–N=C=S, the mustard-oil test; a 2° amine stops at the dithiocarbamate, with no smell, and a 3° amine does not react.',
    say: null,
  },
  // pp. 439–441, 444, 446
  {
    topic: 1,
    kind: 'mistake',
    q: 'Is 3° > 2° > 1° the basicity order of amines in water?',
    a: 'No: that is the gas-phase order, set by the +I effect alone. In water the protonated cation is also stabilised by solvation, water hydrogen-bonding to its N–H hydrogens, three on RNH<sub>3</sub><sup>+</sup> but one on R<sub>3</sub>NH<sup>+</sup>, and bulky groups hinder protonation and solvation. The 2° amine usually wins, but 1° and 3° change places between series. Methyl: (CH<sub>3</sub>)<sub>2</sub>NH 3.27 > CH<sub>3</sub>NH<sub>2</sub> 3.38 > (CH<sub>3</sub>)<sub>3</sub>N 4.22 > NH<sub>3</sub> 4.75. Ethyl: (C<sub>2</sub>H<sub>5</sub>)<sub>2</sub>NH 3.00 > (C<sub>2</sub>H<sub>5</sub>)<sub>3</sub>N 3.25 > C<sub>2</sub>H<sub>5</sub>NH<sub>2</sub> 3.29 > NH<sub>3</sub>',
    why: 'Trimethylamine is a weaker base than dimethylamine in water because its cation, with one N–H, is poorly solvated, not because three methyls give a smaller +I.',
    say: 'Solvation Spoils the Series — in water, hydrogen-hugging by solvent flips the inductive order, so the 2° amine usually wins. Count the N–H’s to call every identification test.',
  },
  // pp. 441, 444, 447
  {
    topic: 1,
    kind: 'shortcut',
    q: 'An amine X, C<sub>3</sub>H<sub>9</sub>N, gives no reaction with benzene​sulphonyl chloride and no carbylamine smell. What is X? The fast way?',
    a: 'Count the N–H hydrogens before predicting any “does it react?” behaviour. Two: carbylamine, acylation and an alkali-soluble Hinsberg product. One: acylation and an alkali-insoluble Hinsberg product, no carbylamine. Zero: none of these. No Hinsberg reaction means no N–H, so X is 3°: trimethylamine, (CH<sub>3</sub>)<sub>3</sub>N, N,N-dimethyl​methanamine, the only 3° amine of that formula. A 2° amine would have given an insoluble product, which is a reaction',
    why: 'Acylation needs an N–H: 1° and 2° amines with acid chlorides or anhydrides, pyridine mopping up the HCl, give amides, aniline giving acetanilide; benzoyl chloride in aqueous alkali is the Schotten–Baumann reaction; 3° amines do not acylate.',
    say: null,
  },

  // ── Topic 03 · Diazonium Salts — Preparation & Reactions ──
  // pp. 448, 450–451
  {
    topic: 2,
    kind: 'remember',
    q: 'How is benzenediazonium chloride made, and why must it be kept cold?',
    a: 'Diazotisation: aniline in cold excess dil. HCl with NaNO<sub>2</sub> at 273–278 K (0–5 °C): C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> + NaNO<sub>2</sub> + 2 HCl → C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> + NaCl + 2 H<sub>2</sub>O. The excess acid makes the HNO<sub>2</sub> and keeps unreacted amine protonated, so the new diazonium ion cannot couple with it. An arenediazonium ion survives because its positive charge is delocalised into the ring; an aliphatic one falls apart at once, losing N<sub>2</sub>. Even the aromatic salt is only metastable: warmed above 283 K it hydrolyses to phenol, and the dry salt can be explosive, so it is made cold and used at once, in situ',
    why: 'One salt is isolated: HBF<sub>4</sub> precipitates the fluoroborate, C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>BF<sub>4</sub><sup>−</sup>, which is heated dry in the Balz–Schiemann reaction to give C<sub>6</sub>H<sub>5</sub>F + N<sub>2</sub> + BF<sub>3</sub>.',
    say: null,
  },
  // pp. 450–451, 454, 456–457
  {
    topic: 2,
    kind: 'remember',
    q: 'Which reagent replaces –N<sub>2</sub><sup>+</sup> by Cl, Br, CN, I, F, OH, H or NO<sub>2</sub>?',
    a: 'Sandmeyer, with the Cu(I) salt: CuCl/HCl, CuBr/HBr, CuCN/KCN. Gattermann: copper powder with HCl or HBr, simpler but lower-yielding. Iodide: warm with KI, no copper needed: C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> + KI → C<sub>6</sub>H<sub>5</sub>I + N<sub>2</sub> + KCl. Fluoride, Balz–Schiemann: HBF<sub>4</sub>, then heat the dry fluoroborate. Hydroxyl: warm water above 283 K gives phenol. Hydrogen: H<sub>3</sub>PO<sub>2</sub> or ethanol, themselves oxidised to H<sub>3</sub>PO<sub>3</sub> or ethanal. Nitro: the fluoroborate heated with NaNO<sub>2</sub> and copper. Every spoke evolves N<sub>2</sub>, and the new group takes exactly the position the –NH<sub>2</sub> held',
    why: 'Sandmeyer is no simple ionic substitution: Cu(I) reduces the diazonium ion by one electron to an aryl radical and N<sub>2</sub>, the radical takes the halogen from the Cu(II) species, and Cu(I) is regenerated, a true catalyst. Balz–Schiemann is ionic, through an aryl cation.',
    say: 'Salt for Sandmeyer, Powder for Gattermann; keep it Cold, then choose your Group.',
  },
  // pp. 448, 450, 452, 455, 457
  {
    topic: 2,
    kind: 'mixup',
    q: 'Replacement or coupling: which keeps the nitrogen, and in what medium does the diazonium salt couple with phenol and with aniline?',
    a: 'Replacement loses it: N<sub>2</sub> escapes and another group takes its place. Coupling keeps the –N=N– unit, joined to a second ring as an azo compound, Ar–N=N–Ar′, coloured by its extended conjugation. Phenol couples in mild alkali, pH ≈ 9–10, as the more electron-rich phenoxide, giving orange p-hydroxyazobenzene; aniline in mild acid, pH ≈ 4–5, giving p-aminoazobenzene. Attack is at the para position, ortho if para is blocked. Strong base would turn the diazonium ion into the non-electrophilic diazohydroxide or diazoate; strong acid would protonate the amine partner to the non-nucleophilic anilinium ion',
    why: 'Coupling is the basis of the azo dyes for textiles and of several acid–base indicators, the shade tuned by the substituents on each ring.',
    say: 'Acid window for coupling: Amine in Acid, Phenol… in alkali (the odd one out — phenoxide needs base).',
  },
  // pp. 452, 454, 456
  {
    topic: 2,
    kind: 'mistake',
    q: 'Which of phenol, benzene, chlorobenzene and nitrobenzene couples with benzenediazonium chloride?',
    a: 'Only phenol. The diazonium ion is a weak electrophile, so it substitutes only on strongly activated rings, phenols and arylamines; it attacks neither benzene nor a deactivated ring such as chlorobenzene or nitrobenzene. Check the partner for a strong activator, –OH or –NH<sub>2</sub>, before writing any azo product',
    why: 'Diazotisation and the use of the salt must stay at 273–278 K: let the solution warm and the product is phenol, not the one intended.',
    say: null,
  },
  // pp. 452, 454–456
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Make 1,3,5-tribromobenzene from aniline. The fast way?',
    a: 'Learn the wheel as reagent → group: CuX → Cl or Br, CuCN → CN, KI → I, HBF<sub>4</sub> → F, warm H<sub>2</sub>O → OH, H<sub>3</sub>PO<sub>2</sub> → H; then work backwards from the target group to its spoke. For –F, –I, –CN or a pattern that needs deamination, the diazonium route is almost always the intended path. Here –NH<sub>2</sub> is a removable ortho/para handle: bromine water gives 2,4,6-tribromoaniline, NaNO<sub>2</sub>/HCl at 273–278 K its diazonium salt, and H<sub>3</sub>PO<sub>2</sub> replaces –N<sub>2</sub><sup>+</sup> by –H',
    why: 'Aniline to benzonitrile: diazotise, then CuCN/KCN (Sandmeyer); to fluorobenzene: HBF<sub>4</sub>, then heat (Balz–Schiemann); to iodobenzene: warm with KI.',
    say: null,
  },

  // ── Topic 04 · Master Revision & Reaction Compendium ──
  // pp. 458–459
  {
    topic: 3,
    kind: 'remember',
    q: 'Nitrous acid, carbylamine and Hinsberg: what does each show for a 1° aliphatic, a 1° aromatic, a 2° and a 3° amine?',
    a: 'Nitrous acid: a 1° aliphatic amine gives N<sub>2</sub> with brisk effervescence; a 1° aromatic amine a diazonium salt, stable cold, which gives a dye with alkaline β-naphthol; a 2° amine a yellow oily nitrosamine; a 3° aliphatic amine a nitrite salt, a 3° aromatic one a green p-nitroso solid. Carbylamine: a foul isocyanide from both kinds of 1° amine, nothing from 2° or 3°. Hinsberg: a 1° amine gives a clear solution, its sulphonamide alkali-soluble; a 2° amine an insoluble precipitate; a 3° amine no reaction, the amine layer remaining. So a 3° amine, with no N–H, gives no acylation, Hinsberg product or carbylamine, yet it still reacts with nitrous acid',
    why: 'Salt formation with dil. HCl is common to all three classes; alkylation with R′–X runs on to the quaternary salt, 1° → 2° → 3° → 4°.',
    say: null,
  },
  // pp. 461–462
  {
    topic: 3,
    kind: 'remember',
    q: 'The chapter’s numbers: at what temperatures is the diazonium salt made and hydrolysed and sulphanilic acid baked, and at what pH does each partner couple?',
    a: 'Diazotisation, and the arenediazonium salt’s stability: 273–278 K (0–5 °C). Diazonium to phenol on warming: above 283 K. Aniline to sulphanilic acid, the “baking”: ≈ 453–473 K. Coupling: phenol at pH 9–10 (alkaline), aniline at pH 4–5 (acidic). Hofmann bromamide needs 4 KOH; carbylamine needs 3 KOH, giving 3 KCl + 3 H<sub>2</sub>O. Ammonolysis: R–I > R–Br > R–Cl',
    why: 'The chapter in one line: amines are substituted ammonia, classified by N; made by reduction, Gabriel or Hofmann, minding the carbon count; they react as bases and nucleophiles, tests sorting 1°, 2° and 3°; aromatic amines go through diazonium, the gateway to the benzene-substitution menu and to azo dyes.',
    say: null,
  },
  // p. 461
  {
    topic: 3,
    kind: 'mistake',
    q: 'Which traps does the chapter’s master list warn against?',
    a: 'Classifying by the carbon instead of the groups on N, when tert-butylamine is 1°; quoting the gas-phase order 3° > 2° > 1° for a solution; calling aniline’s weakness induction rather than resonance; brominating or nitrating aniline unprotected, which over-substitutes or gives meta; expecting acylation, a Hinsberg product or carbylamine from a 3° amine; Gabriel for aryl or 3°-alkyl amines; LiAlH<sub>4</sub> for an aromatic –NO<sub>2</sub>; Sandmeyer’s Cu(I) salt confused with Gattermann’s copper powder and HX, when iodide needs no copper and fluoride needs HBF<sub>4</sub>; coupling without an activated ring and the right pH; Friedel–Crafts on aniline, whose nitrogen binds the AlCl<sub>3</sub>',
    why: 'Diazonium salts are kept at 273–278 K: warming turns them to phenol, and the dry salt is explosive.',
    say: null,
  },

  // ── Additional A · Basicity as a Number: pKb Arithmetic and the Conjugate-Acid Bridge ──
  // pp. 463–466
  {
    topic: 4,
    kind: 'remember',
    q: 'The conjugate acids of four bases have p<i>K</i><sub>a</sub> P 10.6, Q 4.6, R 9.2, S 3.2. Which base is strongest, and how do p<i>K</i><sub>a</sub> and p<i>K</i><sub>b</sub> connect?',
    a: 'At 298 K, p<i>K</i><sub>a</sub>(RNH<sub>3</sub><sup>+</sup>) + p<i>K</i><sub>b</sub>(RNH<sub>2</sub>) = p<i>K</i><sub>w</sub> = 14. A strong base has a small p<i>K</i><sub>b</sub> and so a large conjugate-acid p<i>K</i><sub>a</sub>: the direction reverses, and that reversal is the trap. So P > R > Q > S, their p<i>K</i><sub>b</sub> values 3.4, 4.8, 9.4 and 10.8: P is an aliphatic-amine-strength base, Q aniline-strength, S weaker still. Likewise a conjugate-acid p<i>K</i><sub>a</sub> of 10.64 gives p<i>K</i><sub>b</sub> 14 − 10.64 = 3.36, an aliphatic amine',
    why: 'One p<i>K</i><sub>b</sub> unit is a factor of ten in <i>K</i><sub>b</sub>: benzylamine (4.70) is 10<sup>9.38−4.70</sup> = 10<sup>4.68</sup> ≈ 5 × 10<sup>4</sup> times as basic as aniline (9.38), and cyclohexanamine (≈ 3.3) about 10<sup>6</sup> times.',
    say: null,
  },
  // pp. 464–466
  {
    topic: 4,
    kind: 'remember',
    q: 'Why is o-toluidine the weakest toluidine, and how do pyrrole, aniline, pyridine and ethanamine rank as bases?',
    a: 'p<i>K</i><sub>b</sub>: p-toluidine 8.90 < m-toluidine 9.28 < o-toluidine 9.56, so para is the strongest base and ortho the weakest. The electron-releasing –CH<sub>3</sub> raises basicity most at para; at ortho, crowding round the –NH<sub>2</sub> hinders solvation of the cation and outweighs the electronic gain: the ortho effect. For a ring nitrogen, ask whether its lone pair is part of the aromatic sextet. In pyrrole it is, so protonation would destroy aromaticity, and pyrrole is weaker even than aniline; in pyridine it sits in an in-plane sp<sup>2</sup> orbital outside the sextet. Ethanamine > pyridine > aniline > pyrrole',
    why: 'Imidazole is protonated at N-3, the pyridine-type nitrogen, whose lone pair is not needed for aromaticity; N-1, which bears the N–H, is pyrrole-type.',
    say: null,
  },

  // ── Additional B · Counting Amine Isomers: The C₄H₁₁N Drill ──
  // pp. 466–467
  {
    topic: 5,
    kind: 'remember',
    q: 'How many amines have the formula C<sub>4</sub>H<sub>11</sub>N, and what are they?',
    a: 'Eight. C<sub>4</sub>H<sub>11</sub>N fits C<sub><i>n</i></sub>H<sub>2<i>n</i>+3</sub>N exactly, so every isomer is saturated and acyclic. Enumerate by class, skeleton first. Four 1°: butan-1-amine, butan-2-amine, 2-methyl​propan-1-amine and 2-methyl​propan-2-amine (tert-butylamine). Three 2°, splitting the carbons 3 + 1 or 2 + 2: N-methyl​propan-1-amine, N-methyl​propan-2-amine and N-ethyl​ethanamine. One 3°, 2 + 1 + 1: N,N-dimethyl​ethanamine. 4 + 3 + 1 = 8',
    why: 'For example, butan-1-amine and 2-methyl​propan-1-amine are chain isomers, butan-1-amine and butan-2-amine position isomers, butan-1-amine and N-methyl​propan-1-amine functional isomers, N-methyl​propan-1-amine and N-ethyl​ethanamine metamers.',
    say: null,
  },
  // pp. 467–468
  {
    topic: 5,
    kind: 'remember',
    q: 'How many C<sub>4</sub>H<sub>11</sub>N amines give each test, and which can be optically active?',
    a: 'Each test reads off the classes. The four 1° amines give the carbylamine isocyanide, an alkali-soluble Hinsberg product, N<sub>2</sub> with nitrous acid and the mustard-oil smell. The three 2° amines give an alkali-insoluble Hinsberg product and a yellow oily nitrosamine. The one 3° amine gives no Hinsberg reaction. Only butan-2-amine, CH<sub>3</sub>CH<sub>2</sub>CH(NH<sub>2</sub>)CH<sub>3</sub>, has a stereogenic carbon, bearing H, CH<sub>3</sub>, C<sub>2</sub>H<sub>5</sub> and NH<sub>2</sub>, so it is the only isomer that can be optically active, and the only answer for an optically active, carbylamine-positive C<sub>4</sub>H<sub>11</sub>N',
    why: 'A C<sub>4</sub>H<sub>11</sub>N amine that does not react with benzene​sulphonyl chloride but dissolves in dilute HCl is the 3° amine (CH<sub>3</sub>)<sub>2</sub>NCH<sub>2</sub>CH<sub>3</sub>, N,N-dimethyl​ethanamine; C<sub>3</sub>H<sub>9</sub>N has one 2° amine, N-methyl​ethanamine.',
    say: null,
  },

  // ── Additional C · Hofmann Exhaustive Methylation and the Secondary-Amine Tests Beyond NCERT ──
  // pp. 469–471
  {
    topic: 6,
    kind: 'remember',
    q: 'Hofmann exhaustive methylation: what do excess CH<sub>3</sub>I, moist Ag<sub>2</sub>O and heat do to an amine, and which alkene wins?',
    a: 'Excess CH<sub>3</sub>I methylates the nitrogen until it can accept no more, giving the quaternary ammonium iodide RN(CH<sub>3</sub>)<sub>3</sub><sup>+</sup>I<sup>−</sup>; moist Ag<sub>2</sub>O swaps the iodide for hydroxide; heating causes an E2 elimination, hydroxide removing a β-hydrogen as the –N(CH<sub>3</sub>)<sub>3</sub><sup>+</sup> group leaves as trimethylamine, giving an alkene and water. Hofmann’s rule: when two different β-carbons bear hydrogen, the least substituted alkene is usually the major product, the opposite of Saytzeff’s rule, because the bulky, positively charged –N(CH<sub>3</sub>)<sub>3</sub><sup>+</sup> group steers the base to the less hindered, more acidic β-hydrogen. So butan-2-amine gives mainly but-1-ene, but-2-ene being minor',
    why: 'Heated, N,N,N-trimethyl​ethanaminium hydroxide gives CH<sub>2</sub>=CH<sub>2</sub> + N(CH<sub>3</sub>)<sub>3</sub> + H<sub>2</sub>O; of the C<sub>4</sub>H<sub>11</sub>N amines, N-methyl​propan-1-amine and N-methyl​propan-2-amine give only propene.',
    say: null,
  },
  // pp. 469–471
  {
    topic: 6,
    kind: 'remember',
    q: 'An optically inactive amine, C<sub>5</sub>H<sub>13</sub>N, is exhaustively methylated and heated; the alkene’s ozonolysis gives HCHO and butanal. What is the amine? And how does Liebermann’s test pick out a 2° amine?',
    a: 'Reassemble the alkene first: HCHO comes from a terminal =CH<sub>2</sub>, butanal from CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH=, so the alkene is pent-1-ene, CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>. Nitrogen sat on one of the alkene’s carbons, C-1 or C-2 of a straight chain; pentan-2-amine, which would also give mainly pent-1-ene, is chiral, so the optically inactive (achiral) amine is pentan-1-amine. Liebermann’s nitroso test, beyond the CBSE/NEET core: a 2° amine with HNO<sub>2</sub> gives the yellow oily N-nitrosamine, which warmed with phenol and conc. H<sub>2</sub>SO<sub>4</sub> turns red on dilution with water and blue or violet with NaOH, an indophenol dye. A 1° amine instead loses N<sub>2</sub> (aliphatic) or gives a diazonium salt (aromatic)',
    why: 'A C<sub>7</sub>H<sub>9</sub>N amine that gives the nitrosamine and that colour sequence is the 2° amine N-methylaniline, C<sub>6</sub>H<sub>5</sub>NHCH<sub>3</sub>.',
    say: null,
  },

  // ── Additional D · Synthesis Design with the Diazonium Wheel ──
  // pp. 471–473
  {
    topic: 7,
    kind: 'remember',
    q: 'How do you plan a synthesis on the diazonium wheel, and how is p-toluidine turned into m-bromotoluene?',
    a: 'Positional bookkeeping: whatever replaces the diazonium group sits exactly where the –NH<sub>2</sub> sat, so mark the carbon that must carry the target group and ask whether an –NH<sub>2</sub> can be planted there. –NH<sub>2</sub> is also the strongest readily available ortho/para director, a removable handle: use it to force a pattern no direct substitution gives, such as a group meta to a methyl or halogen or a symmetric 1,3,5 pattern, then remove it by diazotisation and H<sub>3</sub>PO<sub>2</sub>. So: acetylate p-toluidine, brominate ortho to –NHCOCH<sub>3</sub>, which is meta to –CH<sub>3</sub>, hydrolyse, diazotise at 273–278 K and deaminate with H<sub>3</sub>PO<sub>2</sub>',
    why: 'Order of operations: reduce ArNO<sub>2</sub> first (Sn/HCl or Fe/HCl, never LiAlH<sub>4</sub>), protect –NH<sub>2</sub> as –NHCOCH<sub>3</sub> before a clean bromination or nitration, and diazotise late.',
    say: null,
  },
  // pp. 472–473
  {
    topic: 7,
    kind: 'remember',
    q: 'Aniline to benzoic acid, nitrobenzene to phenol, benzene to m-chlorophenol: which routes?',
    a: 'A carboxyl where the amino group was: diazotise, plant –CN with CuCN/KCN (Sandmeyer), then hydrolyse the nitrile with H<sub>3</sub>O<sup>+</sup> and heat, the standard route to an aromatic acid of fixed position. Nitrobenzene to phenol: Sn/HCl to aniline, NaNO<sub>2</sub> and dil. HCl at 273–278 K, then warm above 283 K. m-Chlorophenol cannot come from chlorinating phenol, whose –OH directs ortho/para, so borrow the meta direction from –NO<sub>2</sub>: nitrate benzene, chlorinate to m-chloro​nitrobenzene, reduce with Sn/HCl, diazotise, then warm in water',
    why: 'Nitrobenzene to benzene is reduce, diazotise, deaminate: Sn/HCl, then NaNO<sub>2</sub>/HCl at 273–278 K, then H<sub>3</sub>PO<sub>2</sub>; aniline to 2,4,6-tribromophenol is bromine water, diazotisation, then warm water.',
    say: null,
  },

  // ── Additional F · What JEE and NEET Actually Ask ──
  // pp. 474–475, 440
  {
    topic: 9,
    kind: 'remember',
    q: 'Which parts of Amines come up most in JEE and NEET?',
    a: 'The book’s estimate from past papers, not official figures. Highest, about 30%, nearly one question in three: the distinguishing tests, carbylamine, Hinsberg, HNO<sub>2</sub>, mustard oil and Liebermann. Then preparation routes and the carbon ledger, about 25%; basicity ordering, about 20%; diazonium chemistry, about 12%; Hofmann exhaustive methylation and isomer counting with a test overlay, about 6% each. So this is a reaction-identification chapter, and numerical items, counting isomers or test-positive amines or finding a product’s molecular mass, are a JEE Main staple',
    why: 'Ordering PhNH<sub>2</sub>, PhNHCH<sub>3</sub>, PhCH<sub>2</sub>NH<sub>2</sub> and NH<sub>3</sub>: benzylamine > ammonia > N-methylaniline > aniline, as their p<i>K</i><sub>b</sub> values say, 4.70, 4.75, 9.30 and 9.38.',
    say: null,
  },
  // pp. 475–476
  {
    topic: 9,
    kind: 'mistake',
    q: 'Which traps recur in amine questions?',
    a: 'Judging a statement against the wrong phase or fact: 1° amines, with two N–H, associate more strongly than 2°, while in the gas phase 1° amines are less basic than 2°; calling tert-butylamine tertiary; offering Sn/NH<sub>4</sub>OH or Cu/HCl to reduce nitrobenzene, when the valid set is Sn/HCl, Fe/HCl, Zn/HCl and H<sub>2</sub>/Pd or Ni; Gabriel for aniline or for any 2° or 3° amine; losing the formula through a sequence: benzylamine, C<sub>7</sub>H<sub>9</sub>N, gives the carbylamine product C<sub>8</sub>H<sub>7</sub>N, molecular mass 117',
    why: 'The reductant decides a diazonium salt’s fate too: Zn/HCl takes it back to aniline, while SnCl<sub>2</sub>/HCl or Na<sub>2</sub>SO<sub>3</sub> stops at phenylhydrazine.',
    say: null,
  },
];
