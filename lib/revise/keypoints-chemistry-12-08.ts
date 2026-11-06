/**
 * KEY POINTS for Chemistry Class 12, Chapter 8 (Aldehydes, Ketones and
 * Carboxylic Acids).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–04 are 0–3; Additional topics A–F are 4–9; Additional
 * topic G, What JEE and NEET Actually Ask (the book's Addendum P), is 10. No
 * point refers to another topic by number.
 *
 * Every fact is from the Master Reference book; the page (the bottom folio) is
 * above each point. Remember: the topic's Key Definitions and Cheat Sheet Box.
 * Common mistakes: its Common Student Pitfalls. Exam shortcuts: its Pro-Tip.
 * `say`: the cheat sheet's first two memory aids, word for word, in the Ch 1–4
 * form: no quotation marks, and a label after " — " (the book's own gloss where
 * it has one). Topics 01–04 print three, four, four and four aids, so the
 * chapter has eight lines, all word for word but one (the bicarbonate line adds
 * “ordinary”). Two state a rule wider than it is (ketones failing Tollens’ and
 * Fehling’s, an ether always above the alkane); the point that carries each
 * gives the true scope.
 * Additional topics: the addenda's methods, worked examples and practice
 * answers. Additional topic G: its distribution and traps.
 *
 * A few points are narrower than the book's sentence, or complete it, in our
 * words: the general formula for saturated aliphatic carbonyls only; the
 * Rosenmund catalyst's poison named as the added sulphur or quinoline;
 * Gattermann–Koch on benzene; the alkyne exception under mercury-catalysed
 * hydration; Cannizzaro and the α-hydrogen without "never"; the acetal's second
 * equivalent of alcohol; ammonia derivatives in weak acid, without a pH;
 * "ordinary" ketones for Tollens’ and Fehling’s, with α-hydroxy ketones and
 * formic acid as the exceptions; iodoform for methyl ketones and ethanal;
 * strongly acidic phenols fizzing with bicarbonate; ethanoic acid in the
 * boiling-point run; the ether "close to" the alkane; carbonyls miscible only
 * to propanone; bisulphite for unhindered aliphatic methyl ketones; methanal's
 * four moles of silver; the ortho effect without "any".
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. p<i>K</i><sub>a</sub>
 * with p upright; <i>δ</i>+ and <i>δ</i>− italic; α, β upright. Formulas upright,
 * single bonds as en dashes (R–CHO, R–CO–R′, –COOH, C–H), "=" for double bonds;
 * R, R′, Ar and Z generic upright letters, primes U+2032. Hybrid labels upright
 * (sp<sup>2</sup>); o-, m-, p-, n-, tert- upright. Degrees of carbon 1°, 2°, 3°.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Aldehydes & Ketones — Nomenclature, Structure & Preparation ──
  // pp. 368–369, 371, 373, 377
  {
    topic: 0,
    kind: 'remember',
    q: 'Aldehyde or ketone: what is the one structural difference, and what are the carbonyl group’s shape and polarity?',
    a: 'An aldehyde, R–CHO, has at least one hydrogen on the carbonyl carbon; a ketone, R–CO–R′, has two carbon groups there. The carbonyl carbon is sp<sup>2</sup>: three σ bonds in one plane at about 120°, and a π bond from the sideways overlap of a p orbital on carbon with one on oxygen. Oxygen, the more electronegative, pulls the electrons, C<sup><i>δ</i>+</sup>=O<sup><i>δ</i>−</sup>, so the carbon is an electrophilic centre (a Lewis acid) and the oxygen a nucleophilic centre (a Lewis base). The large dipole moment needs a dipolar resonance form: >C=O ↔ >C<sup>+</sup>–O<sup>−</sup>',
    why: 'Saturated aliphatic aldehydes and ketones share the formula C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>O, so they are functional isomers: propanal and propanone are both C<sub>3</sub>H<sub>6</sub>O.',
    say: null,
  },
  // pp. 369, 371, 374, 376–377
  {
    topic: 0,
    kind: 'remember',
    q: 'How is an aldehyde or a ketone named, and which group takes the suffix when several are present?',
    a: 'Take the longest chain containing the carbonyl carbon and replace the alkane’s final “-e” with “-al” or “-one”. The –CHO carbon is C-1 by definition, so it gets no locant; a ketone is numbered from the end nearer the C=O and its locant is shown (pentan-2-one). On a ring, –CHO takes “-carbaldehyde” (cyclohexane​carbaldehyde) and a ring ketone is a cycloalkanone; benzaldehyde is IUPAC-accepted. Suffix priority: carboxylic acid > ester > acid chloride > amide > nitrile > aldehyde > ketone > alcohol > amine, so beside –CHO an –OH becomes a hydroxy- prefix',
    why: '(CH<sub>3</sub>)<sub>2</sub>CH–CH<sub>2</sub>–CO–CH<sub>3</sub> is 4-methyl​pentan-2-one (isobutyl methyl ketone); (CH<sub>3</sub>)<sub>3</sub>C–CHO is 2,2-dimethyl​propanal, never “2,2-dimethyl​propan-1-al”.',
    say: 'CHO is always Number One — no locant on aldehydes.',
  },
  // pp. 373–374, 377
  {
    topic: 0,
    kind: 'mixup',
    q: 'Rosenmund, Stephen, DIBAL-H, Étard, Gattermann–Koch, dialkylcadmium: which substrate does each need, and which gives a ketone?',
    a: 'Aldehydes only. Rosenmund: an acyl chloride with H<sub>2</sub> over palladium on BaSO<sub>4</sub>, a deliberately weakened catalyst (often with sulphur or quinoline added as the poison), so it stops at the aldehyde. Stephen (SnCl<sub>2</sub>/HCl, then hydrolysis) and DIBAL-H: a nitrile, through an imine; DIBAL-H at low temperature also turns an ester into the aldehyde. Étard: CrO<sub>2</sub>Cl<sub>2</sub> on toluene, then hydrolysis, as does side-chain chlorination through benzal chloride. Gattermann–Koch: CO and HCl with anhydrous AlCl<sub>3</sub>/CuCl, on benzene. Ketones only: an acyl chloride with a dialkylcadmium, 2 RCOCl + R′<sub>2</sub>Cd → 2 RCOR′ + CdCl<sub>2</sub>; a Grignard reagent with a nitrile; Friedel–Crafts acylation',
    why: 'The cadmium reagent is mild enough to stop at the ketone, where a Grignard reagent would attack it again and overshoot to a 3° alcohol.',
    say: 'Rose-A-C — Rosenmund acts on Acyl Chloride to give an aldehyde.',
  },
  // pp. 369, 371, 374, 377
  {
    topic: 0,
    kind: 'mistake',
    q: 'Does “aldehyde > ketone, methanal first” settle every ranking toward nucleophilic addition?',
    a: 'No: it assumes ordinary alkyl groups. Rank by the carbonyl carbon’s <i>δ</i>+ and its crowding: each +I alkyl group lowers the charge and blocks the approach, and a ketone has two. A strongly electron-withdrawing group raises reactivity: chloral, CCl<sub>3</sub>CHO, outranks methanal, its three chlorines pulling by −I. An aromatic ring lowers it, donating by resonance: benzaldehyde is less reactive than propanal. So CCl<sub>3</sub>CHO > HCHO > CH<sub>3</sub>CHO > CH<sub>3</sub>COCH<sub>3</sub>',
    why: 'The aromatic series runs C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>CHO > C<sub>6</sub>H<sub>5</sub>CHO > C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub> > C<sub>6</sub>H<sub>5</sub>COC<sub>6</sub>H<sub>5</sub>.',
    say: null,
  },
  // pp. 373–377
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Pentanenitrile to pentanal, ethyl benzoate to benzaldehyde, propan-1-ol to propanal: which reagents, and why not LiAlH<sub>4</sub>? The fast way?',
    a: 'When the answer must be an aldehyde, reach for a gentle, selective reagent: the examiner is testing whether you avoid over-reduction. DIBAL-H at low temperature, then H<sub>2</sub>O, delivers one hydride and stops: the nitrile gives pentanal (Stephen’s SnCl<sub>2</sub>/HCl also works) and the ester benzaldehyde. LiAlH<sub>4</sub> would run on to the alcohol, or from the nitrile to the amine. From propan-1-ol, use a mild oxidant such as PCC, or pass the vapour over copper at ≈ 573 K; a strong oxidant runs on to propanoic acid',
    why: 'Ozonolysis and alkyne hydration make both families: pent-2-ene gives propanal and ethanal; with H<sub>2</sub>O, H<sub>2</sub>SO<sub>4</sub> and HgSO<sub>4</sub>, ethyne gives ethanal and every other alkyne a ketone, but-2-yne giving butan-2-one.',
    say: null,
  },

  // ── Topic 02 · Aldehydes & Ketones — Chemical Reactions ──
  // pp. 378, 380–381, 383
  {
    topic: 1,
    kind: 'remember',
    q: 'Nucleophilic addition to a carbonyl: the three steps, and what do HCN, NaHSO<sub>3</sub>, alcohols and H<sub>2</sub>N–Z give?',
    a: 'The nucleophile attacks the <i>δ</i>+ carbon; the carbon goes from sp<sup>2</sup> to sp<sup>3</sup> as the π electrons move onto oxygen, giving an alkoxide; protonation gives the product. HCN, base-catalysed (CN<sup>−</sup> is the nucleophile): a cyanohydrin. NaHSO<sub>3</sub>: a crystalline bisulphite adduct, which dilute acid or alkali reverses, used to purify aldehydes. An alcohol with dry HCl: a hemiacetal, then with a second equivalent the acetal, a carbonyl protecting group that aqueous acid removes. H<sub>2</sub>N–Z in weak acid adds and loses water to give >C=N–Z: oxime, hydrazone, phenylhydrazone, the 2,4-DNP derivative (a yellow, orange or red solid), semicarbazone',
    why: 'Grignard reagents add the same way: methanal gives a 1° alcohol, other aldehydes 2°, ketones 3°; propanone with CH<sub>3</sub>MgBr, then H<sub>3</sub>O<sup>+</sup>, gives 2-methyl​propan-2-ol.',
    say: null,
  },
  // pp. 378, 381–384, 386
  {
    topic: 1,
    kind: 'remember',
    q: 'Aldol or Cannizzaro: what decides it, and what does each give?',
    a: 'The α-hydrogen. With at least one α-H and dilute alkali, an enolate attacks a second molecule: aldol, a β-hydroxy aldehyde or ketone, which on heating loses water to give the α,β-unsaturated carbonyl. Ethanal gives 3-hydroxybutanal, CH<sub>3</sub>CH(OH)CH<sub>2</sub>CHO, then but-2-enal, CH<sub>3</sub>CH=CHCHO. An aldehyde with no α-H, such as methanal, benzaldehyde or 2,2-dimethyl​propanal, disproportionates in concentrated alkali: hydroxide adds, and the adduct passes a hydride to a second molecule, one ending as the alcohol and the other as the carboxylate. 2HCHO + NaOH → CH<sub>3</sub>OH + HCOONa',
    why: 'A cross aldol between two partners that both have α-H gives four products, two self and two crossed; with benzaldehyde, which has none, ethanal gives cinnamaldehyde (3-phenylprop-2-enal).',
    say: 'No alpha, no aldol → Cannizzaro calls.',
  },
  // pp. 378, 380–382, 385–386
  {
    topic: 1,
    kind: 'mixup',
    q: 'Tollens’ or Fehling’s: which aldehydes does each detect, and why do ketones not respond?',
    a: 'Tollens’ reagent, [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>, gives a silver mirror with aliphatic and aromatic aldehydes alike. Fehling’s solution, alkaline Cu<sup>2+</sup> with Rochelle salt, gives a red-brown Cu<sub>2</sub>O precipitate with aliphatic aldehydes only: benzaldehyde does not respond. Both rest on the aldehyde’s carbonyl hydrogen: replacing that C–H with C–OH is easy, while an ordinary ketone would have to break a strong C–C bond, so it leaves both reagents unchanged. Strong oxidants, acidified KMnO<sub>4</sub> or K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>, take an aldehyde to its carboxylic acid',
    why: 'The rule is for ordinary ketones: α-hydroxy ketones such as fructose reduce both reagents, and formic acid also gives a silver mirror.',
    say: 'Tollens’ & Fehling’s test the H of CHO — so ketones fail.',
  },
  // pp. 378, 384–385
  {
    topic: 1,
    kind: 'mistake',
    q: 'Benzaldehyde has no α-H. Does phenyl​acetaldehyde, C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>CHO, behave the same way?',
    a: 'No. The H on –CHO is not an α-H: count the hydrogens on the carbon next to the carbonyl. Benzaldehyde has none there, so it gives no aldol and takes the Cannizzaro route in concentrated alkali; phenyl​acetaldehyde has two on its CH<sub>2</sub>, so it gives aldol. Decide from the α-carbon, never from “it has a benzene ring”',
    why: 'Methanal and trimethyl​acetaldehyde, (CH<sub>3</sub>)<sub>3</sub>C–CHO, have no α-H either; propanone has six, so it gives aldol, and as a ketone it is no Cannizzaro substrate.',
    say: null,
  },
  // pp. 381, 383–385
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Which gives both a positive iodoform and a positive Tollens’ test: propanone, ethanal, propan-1-ol or pentan-3-one? The fast way?',
    a: 'Run a checklist on the structure. A –CHO? Tollens’ and Fehling’s. A methyl ketone, CH<sub>3</sub>CO–R, or ethanal, or a CH<sub>3</sub>CH(OH)– group that oxidises to that unit? Iodoform, yellow CHI<sub>3</sub> with I<sub>2</sub>/NaOH. An α-H? Aldol. An aldehyde with none? Cannizzaro. Propanone passes iodoform only, propan-1-ol and pentan-3-one neither; ethanal, CH<sub>3</sub>CHO, passes both',
    why: 'For >C=O → >CH<sub>2</sub>, choose by what must survive: Wolff–Kishner (NH<sub>2</sub>NH<sub>2</sub>, then KOH in glycol, basic) spares an acid-sensitive group; Clemmensen (Zn–Hg, conc. HCl, acidic) spares an ester, turning ethyl 4-oxo​pentanoate into ethyl pentanoate.',
    say: null,
  },

  // ── Topic 03 · Carboxylic Acids — Structure, Preparation & Properties ──
  // pp. 387, 389–390, 394
  {
    topic: 2,
    kind: 'remember',
    q: 'Why is a carboxylic acid stronger than a phenol, and how do substituents shift its p<i>K</i><sub>a</sub>?',
    a: 'Its conjugate base, the carboxylate, shares the negative charge equally between two oxygens in two equivalent resonance structures; phenoxide puts it partly on less electronegative ring carbons, in non-equivalent structures, and an alkoxide not at all. So carboxylic acid > phenol > alcohol; the smaller the p<i>K</i><sub>a</sub>, the stronger: trifluoro​acetic 0.23, benzoic 4.19, acetic 4.76, phenol ≈ 10. An electron-withdrawing group strengthens the acid, the more the closer it sits: Ph < I < Br < Cl < F < CN < NO<sub>2</sub> < CF<sub>3</sub>. An electron-donating group weakens it',
    why: 'On the ring: 4-nitro​benzoic (p<i>K</i><sub>a</sub> 3.41) > benzoic (4.19) > 4-methoxy​benzoic (4.46) in acidity. A phenyl or vinyl group directly on the carboxyl raises acidity, its sp<sup>2</sup> carbon being more electronegative.',
    say: 'Two oxygens share the charge → carboxylate wins the acidity race.',
  },
  // pp. 387, 389, 391, 394
  {
    topic: 2,
    kind: 'remember',
    q: 'What do PCl<sub>5</sub> or SOCl<sub>2</sub>, an alcohol with acid, NH<sub>3</sub>, LiAlH<sub>4</sub> and Cl<sub>2</sub> with red phosphorus do to –COOH?',
    a: 'PCl<sub>5</sub>, PCl<sub>3</sub> or SOCl<sub>2</sub>: the acyl chloride, SOCl<sub>2</sub> preferred because SO<sub>2</sub> and HCl escape as gases. An alcohol with conc. H<sub>2</sub>SO<sub>4</sub>: the ester, by acid-catalysed acyl substitution, an equilibrium driven by excess alcohol or by removing water. NH<sub>3</sub>: the ammonium salt, which strong heating turns into the amide. Heating with H<sub>2</sub>SO<sub>4</sub> or P<sub>2</sub>O<sub>5</sub>: the anhydride. LiAlH<sub>4</sub> or diborane: the 1° alcohol, which NaBH<sub>4</sub> cannot give. Cl<sub>2</sub> or Br<sub>2</sub> with a little red phosphorus (HVZ): halogenation at the α-carbon. On a ring, –COOH is deactivating and meta-directing, and gives no Friedel–Crafts',
    why: 'These are substitutions at the C–OH, not additions: the –OH’s lone pair feeds the carboxyl carbon, too weakly electrophilic for HCN or NaHSO<sub>3</sub>.',
    say: null,
  },
  // pp. 389–392
  {
    topic: 2,
    kind: 'mixup',
    q: 'Grignard + CO<sub>2</sub>, side-chain oxidation, decarboxylation, Kolbe electrolysis: how does each change the carbon count?',
    a: 'Grignard + CO<sub>2</sub> (dry ice), then H<sub>3</sub>O<sup>+</sup>: one carbon more, as from an alkyl halide through the nitrile and hydrolysis. Oxidising a 1° alcohol or aldehyde, or hydrolysing a nitrile, amide, ester, acyl halide or anhydride: the count is kept. Vigorous oxidation of an alkylbenzene: the whole side chain, whatever its length, becomes one –COOH on the ring, provided the benzylic carbon carries a hydrogen. The sodium salt heated with sodalime (NaOH:CaO, 3:1): CO<sub>2</sub> is lost, a hydrocarbon with one carbon fewer. Kolbe electrolysis of the salt: two alkyl groups couple, twice the alkyl carbons',
    why: 'Bromoethane gives propanoic acid either way, through CH<sub>3</sub>CH<sub>2</sub>MgBr and CO<sub>2</sub> or through CH<sub>3</sub>CH<sub>2</sub>CN from KCN; toluene gives benzoic acid with hot alkaline KMnO<sub>4</sub>, then acid.',
    say: null,
  },
  // pp. 391–392, 394
  {
    topic: 2,
    kind: 'mistake',
    q: 'Can aqueous NaOH tell benzoic acid from phenol?',
    a: 'No: both are acidic enough to react with NaOH. The weak base NaHCO<sub>3</sub> does it: it deprotonates the carboxylic acid, with brisk effervescence, but not an ordinary phenol. C<sub>6</sub>H<sub>5</sub>COOH + NaHCO<sub>3</sub> → C<sub>6</sub>H<sub>5</sub>COONa + H<sub>2</sub>O + CO<sub>2</sub>',
    why: 'Bicarbonate is the standard test for –COOH, but sulphonic acids and strongly acidic phenols such as picric acid fizz with it too.',
    say: 'Bicarbonate fizzes for acids, not ordinary phenols.',
  },
  // pp. 390, 392–394
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Reduce a –COOH to –CH<sub>2</sub>OH while an ester in the same molecule survives; and which is stronger, 2- or 4-chloro​butanoic acid? The fast way?',
    a: 'For a reduction, ask whether an ester or nitro group must survive. If so, use diborane, B<sub>2</sub>H<sub>6</sub>: it reduces –COOH to the 1° alcohol but does not easily touch esters, nitro or halo groups; LiAlH<sub>4</sub> reduces the ester too, and NaBH<sub>4</sub> does not reduce the acid at all. For acidity, audit the conjugate base: weigh electron-withdrawing against donating groups, then apply a distance penalty, α beating β beating γ. 2-Chloro​butanoic acid, its Cl on the α-carbon, is the stronger',
    why: 'CH<sub>3</sub>COOH < ClCH<sub>2</sub>COOH < FCH<sub>2</sub>COOH < Cl<sub>2</sub>CHCOOH < Cl<sub>3</sub>CCOOH: F beats one Cl, but two or three Cl outweigh a single F.',
    say: null,
  },

  // ── Topic 04 · Physical Properties & Uses of Carbonyl Compounds ──
  // pp. 395, 397–398, 400, 402
  {
    topic: 3,
    kind: 'remember',
    q: 'At comparable molecular mass, how do hydrocarbon, ether, aldehyde, ketone, alcohol and carboxylic acid rank in boiling point, and why?',
    a: 'By the strongest intermolecular force each can form: dispersion < dipole–dipole < hydrogen bond < doubly hydrogen-bonded dimer. At molar masses of 58–60: n-butane 273 K < methoxyethane 281 K < propanal 322 K < propanone 329 K < propan-1-ol 370 K < ethanoic acid 391 K. The acid’s cyclic dimer, held by two hydrogen bonds, moves as a unit of about double the mass',
    why: 'An ether’s two C–O dipoles partly cancel, so it boils only close to an alkane of similar mass, not always above it.',
    say: 'He Eats Apples Like Candy → Hydrocarbon, Ether, Aldehyde/ketone, aLcohol, Carboxylic acid — increasing boiling point.',
  },
  // pp. 397–399, 401–402
  {
    topic: 3,
    kind: 'remember',
    q: 'Why do aldehydes and ketones boil above ethers but below alcohols of similar mass, and which boils higher, propanal or propanone?',
    a: 'Their polar C=O gives dipole–dipole attraction, stronger than an ether’s weak polarity; but with no O–H they have no hydrogen-bond donor and cannot match an alcohol: the decisive factor is the O–H, not the mere oxygen. Within the family, mass and shape decide: a ketone tends to boil slightly above its aldehyde isomer, propanone 329 K against propanal 322 K, and branching lowers the boiling point, so pentan-2-one boils above 3-methyl​butan-2-one',
    why: 'Butane < butanal < butan-1-ol < butanoic acid follows the same ladder, though there the molar mass rises too: 58, 72, 74, 88.',
    say: 'No O–H, no top spot — aldehydes/ketones can’t beat alcohols.',
  },
  // pp. 395, 397–398, 400
  {
    topic: 3,
    kind: 'mixup',
    q: 'Boiling point or water solubility: what does each ranking weigh, and why is propanone more soluble than decanoic acid?',
    a: 'Boiling point follows the strongest intermolecular force, then mass. Solubility is a tug-of-war between a polar head that hydrogen-bonds with water and a hydrocarbon tail that water rejects: propanone is miscible in all proportions, while decanoic acid’s ten-carbon tail makes it essentially insoluble despite its acid head. Methanal, ethanal and propanone are miscible, as are the lower acids up to about four carbons; solubility falls sharply as the chain grows, but all dissolve in organic solvents such as benzene, ether, methanol and chloroform',
    why: 'Carboxylic acids pair up as dimers in the vapour and in non-polar solvents; in water the dimer is broken up by water molecules competing for the hydrogen bonds.',
    say: null,
  },
  // pp. 397, 399, 402
  {
    topic: 3,
    kind: 'mistake',
    q: 'Does the functional-group ladder rank the boiling points of any two compounds?',
    a: 'No: it holds only at comparable molecular mass. A heavy hydrocarbon can out-boil a light acid, so compare like with like. Break ties within a family by mass, the heavier boiling higher, and by shape, the less branched boiling higher, its stretched-out molecules touching their neighbours over a larger area',
    why: 'A carbonyl group on a benzene ring, –CHO, –COR or –COOH, is electron-withdrawing: deactivating and meta-directing, not ortho/para.',
    say: null,
  },
  // pp. 397, 399, 401–402
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Which boils highest: pentane, pentan-1-ol, pentanal or pentanoic acid? And which uses do examiners ask for? The fast way?',
    a: 'Do a force audit: label each molecule with its strongest force, dispersion, dipole, hydrogen bond or dimer, order by that, then break ties with mass and branching. Pentanoic acid, its molecules held in hydrogen-bonded dimers. For uses, anchor on four classics: formalin, the 40% aqueous solution of methanal, preserves specimens; ethanoic acid is vinegar; adipic (hexanedioic) acid makes nylon-6,6; sodium benzoate is a food preservative',
    why: 'Methanal also makes bakelite and urea–formaldehyde glues; ethanal is the starting material for acetic acid; higher fatty acids make soaps and detergents.',
    say: null,
  },

  // ── Additional A · The Reactivity Order, Fully Loaded ──
  // pp. 403–405
  {
    topic: 4,
    kind: 'remember',
    q: 'The two-dial rule for nucleophilic addition: how does it rank butanone, propanone, propanal and ethanal, and the substituted benzaldehydes?',
    a: 'Reactivity rises with the positive charge on the carbonyl carbon and falls with crowding around it. Alkyl groups donate and are bulky, so both dials go down: butanone < propanone < propanal < ethanal. An aryl group on the carbonyl donates by resonance: any aliphatic aldehyde beats benzaldehyde, and acetophenone beats benzophenone. On the ring, the donor CH<sub>3</sub> lowers reactivity and the withdrawing NO<sub>2</sub> raises it: acetophenone < p-tolualdehyde < benzaldehyde < p-nitro​benzaldehyde, the whole aromatic family below the aliphatic aldehydes',
    why: 'Toward HCN, most reactive first: propanal > benzaldehyde > propanone > butanone. Chloral, its Cl<sub>3</sub>C– group withdrawing strongly, outranks methanal and adds water to give chloral hydrate, a rare stable gem-diol.',
    say: null,
  },
  // pp. 404–405
  {
    topic: 4,
    kind: 'remember',
    q: 'Why does 2,2,6-trimethyl​cyclohexanone form no cyanohydrin, and which carbonyls form a bisulphite adduct?',
    a: 'Sterics, not electronics: cyanide must approach the carbonyl carbon roughly perpendicular to its plane, and the methyls on both α-carbons wall that path off, while cyclohexanone itself reacts in good yield. Di-tert-butyl ketone is the standard least reactive ketone for the same reason. The NaHSO<sub>3</sub> addition is an equilibrium: it lies to the right for aldehydes, unhindered aliphatic methyl ketones and small cyclic ketones, and to the left for bulky ketones, which is why the crystalline adduct separates aldehydes from mixtures',
    why: 'Pentan-2-one, a methyl ketone, forms the adduct; pentan-3-one, with an ethyl on each side, is too hindered.',
    say: null,
  },

  // ── Additional B · Name Reactions: The Variants the Chapter Never Shows ──
  // pp. 406–408
  {
    topic: 5,
    kind: 'remember',
    q: 'Benzaldehyde and formaldehyde with concentrated NaOH: which is oxidised, and why?',
    a: 'Formaldehyde. Neither has an α-H, so this is a crossed Cannizzaro. Hydroxide adds first to the more reactive, less hindered carbonyl, almost always formaldehyde’s, and that adduct is the hydride donor: C<sub>6</sub>H<sub>5</sub>CHO + HCHO + NaOH → C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>OH + HCOONa. Formaldehyde’s carbon goes from 0 to +2 in the formate; benzaldehyde’s from +1 to −1 in benzyl alcohol',
    why: 'Methanal with 2,2-dimethyl​propanal likewise gives sodium formate and 2,2-dimethyl​propan-1-ol.',
    say: null,
  },
  // pp. 406–408
  {
    topic: 5,
    kind: 'remember',
    q: 'Hexane-2,5-dione and heptane-2,6-dione with dilute alkali, then heat: which cyclic enone does each give?',
    a: 'An intramolecular aldol: an enolate attacks the other carbonyl of the same molecule, and the ring it closes decides the product, five- and six-membered rings forming readily; the β-hydroxy ketone then loses water to the conjugated enone. Hexane-2,5-dione gives 3-methyl​cyclopent-2-en-1-one, a five-membered ring. Heptane-2,6-dione gives 3-methyl​cyclohex-2-en-1-one, a six-membered ring: an enolate at C-3 or C-5 would have to close a strained four-membered one',
    why: 'Ketones self-condense too: propanone gives diacetone alcohol, 4-hydroxy-4-methyl​pentan-2-one, then mesityl oxide, 4-methyl​pent-3-en-2-one.',
    say: null,
  },

  // ── Additional C · The Distinguishing-Test Matrix, with Stoichiometry ──
  // pp. 408–411
  {
    topic: 6,
    kind: 'remember',
    q: 'Benzaldehyde with Tollens’, Fehling’s, Schiff’s, 2,4-DNP and iodoform: which respond, and what does each reagent detect?',
    a: '2,4-DNP: aldehydes and ketones, a yellow, orange or red precipitate; acids, alcohols and esters stay silent. Tollens’: all aldehydes, aliphatic and aromatic. Fehling’s and Benedict’s: aliphatic aldehydes only, a red-brown Cu<sub>2</sub>O precipitate. Schiff’s reagent, rosaniline hydrochloride decolourised by SO<sub>2</sub>: an aldehyde, aliphatic or aromatic, restores the magenta colour. Iodoform: a methyl ketone or ethanal, or an alcohol with a CH<sub>3</sub>CH(OH)– unit. So benzaldehyde is positive with Tollens’, Schiff’s and 2,4-DNP, negative with Fehling’s and iodoform',
    why: 'Ethanal and benzaldehyde both give a silver mirror, so Tollens’ cannot tell them apart; Fehling’s or the iodoform test does, ethanal being positive in each.',
    say: null,
  },
  // pp. 409–411
  {
    topic: 6,
    kind: 'remember',
    q: 'How many moles of silver does 0.5 mol of propanal deposit with Tollens’ reagent, and how much Cu<sub>2</sub>O does it give with Fehling’s?',
    a: 'Oxidising an aldehyde to a carboxylate releases two electrons, and each Ag<sup>+</sup> takes one: RCHO + 2[Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> + 3OH<sup>−</sup> → RCOO<sup>−</sup> + 2Ag + 4NH<sub>3</sub> + 2H<sub>2</sub>O. So 0.5 mol of propanal deposits 1.0 mol of silver, not 0.5. Fehling’s spends the same two electrons on two Cu<sup>2+</sup>, giving one Cu<sub>2</sub>O: RCHO + 2Cu<sup>2+</sup> + 5OH<sup>−</sup> → RCOO<sup>−</sup> + Cu<sub>2</sub>O + 3H<sub>2</sub>O, so 0.5 mol of Cu<sub>2</sub>O',
    why: 'Methanal is the exception: its formate is oxidised further, to carbonate, so with excess reagent one mole of methanal deposits 4 mol of silver.',
    say: null,
  },

  // ── Additional D · Acidity of Carboxylic Acids: The Full NCERT Ladder ──
  // pp. 412–414
  {
    topic: 7,
    kind: 'remember',
    q: 'NCERT’s ladder of fourteen acids: what is the order, and which four principles produce it?',
    a: 'Strongest first: CF<sub>3</sub>COOH > CCl<sub>3</sub>COOH > CHCl<sub>2</sub>COOH > NO<sub>2</sub>CH<sub>2</sub>COOH > NCCH<sub>2</sub>COOH > FCH<sub>2</sub>COOH > ClCH<sub>2</sub>COOH > BrCH<sub>2</sub>COOH > HCOOH > ClCH<sub>2</sub>CH<sub>2</sub>COOH > C<sub>6</sub>H<sub>5</sub>COOH > C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>COOH > CH<sub>3</sub>COOH > CH<sub>3</sub>CH<sub>2</sub>COOH. The principles: the number of electron-withdrawing groups; their electronegativity (FCH<sub>2</sub> > ClCH<sub>2</sub> > BrCH<sub>2</sub>); their distance from the carboxyl (α beats β); and the attached carbon: HCOOH, with no alkyl donor, beats CH<sub>3</sub>COOH, and a carboxyl on an sp<sup>2</sup> ring carbon beats one on an sp<sup>3</sup> CH<sub>2</sub>',
    why: 'Acrylic acid, CH<sub>2</sub>=CH–COOH, is stronger than propanoic acid for the same reason, p<i>K</i><sub>a</sub> about 4.25 against 4.87; and CH<sub>3</sub>CHFCH<sub>2</sub>COOH beats CH<sub>2</sub>FCH<sub>2</sub>CH<sub>2</sub>COOH, its fluorine one carbon closer.',
    say: null,
  },
  // pp. 412–414
  {
    topic: 7,
    kind: 'remember',
    q: 'Phenoxide has five resonance structures and carboxylate two: why is phenol the weaker acid? And what is the ortho effect?',
    a: 'Quality, not count: carboxylate’s two structures are equivalent and keep the charge on two electronegative oxygens; phenoxide’s are non-equivalent and park it on ring carbons. The ortho effect, a JEE extension beyond NCERT: an ortho substituent, even the donor methyl, twists the –COOH out of the ring plane and cuts off the ring’s resonance donation into it, so o-toluic acid (p<i>K</i><sub>a</sub> about 3.9) beats benzoic acid (4.19). Salicylic acid (about 3.0) goes further, its anion held by an intramolecular hydrogen bond',
    why: 'Strongest first: o-toluic 3.9 > benzoic 4.19 > m-toluic 4.27 > p-toluic 4.37, the meta and para methyls simply donating.',
    say: null,
  },

  // ── Additional E · Structure-Elucidation Puzzles: The NCERT Signature ──
  // pp. 414–415
  {
    topic: 8,
    kind: 'remember',
    q: 'The evidence ladder for an unknown: what does each test tell you, in order?',
    a: '2,4-DNP positive: an aldehyde or ketone. Tollens’ or Fehling’s: aldehyde if yes, ketone if no, Fehling’s also needing an aliphatic aldehyde. Iodoform positive: a CH<sub>3</sub>CO– or CH<sub>3</sub>CH(OH)– unit. Cannizzaro: an aldehyde without α-H. Oxidation products: the skeleton, each ring carboxyl marking where a side chain sat. The molecular formula closes the case. So C<sub>9</sub>H<sub>10</sub>O, positive with 2,4-DNP and Tollens’, giving Cannizzaro and, on vigorous oxidation, benzene-1,2-​dicarboxylic acid, is 2-ethyl​benzaldehyde',
    why: 'C<sub>9</sub>H<sub>10</sub>O has five degrees of unsaturation, four for the ring and one for C=O; the ethyl group’s benzylic CH<sub>2</sub> oxidises to the second –COOH.',
    say: null,
  },
  // pp. 415–416
  {
    topic: 8,
    kind: 'remember',
    q: 'Ester C<sub>8</sub>H<sub>16</sub>O<sub>2</sub> hydrolyses to acid B and alcohol C; C oxidises to B and dehydrates to but-1-ene. What are A, B and C?',
    a: 'C oxidises to an acid with the same carbon count, so it is a primary alcohol, and its dehydration to a straight-chain butene makes it butan-1-ol (NCERT’s premise is but-1-ene; in fact butan-1-ol gives mainly but-2-ene, after a hydride shift). So B is butanoic acid. A is butyl butanoate, 4 + 4 = 8 carbons, as C<sub>8</sub>H<sub>16</sub>O<sub>2</sub> requires. By the same steps, the C<sub>6</sub>H<sub>12</sub>O<sub>2</sub> ester whose alcohol dehydrates to propene is propyl propanoate',
    why: '69.77% C, 11.63% H, the rest oxygen, and <i>M</i> = 86 give C<sub>5</sub>H<sub>10</sub>O; Tollens’-negative, bisulphite- and iodoform-positive, and cleaved by vigorous oxidation to ethanoic and propanoic acids, it is pentan-2-one.',
    say: null,
  },

  // ── Additional F · Physical-State Micro-Facts and Odd Corners ──
  // pp. 416–418
  {
    topic: 9,
    kind: 'remember',
    q: 'Melting-point alternation, the states of the acids, and paraldehyde: what are the facts?',
    a: 'A monocarboxylic acid with an even number of carbons melts higher than the odd-carbon acids just below and above it, even chains packing more snugly in the crystal; water solubility simply falls as molar mass rises. Aliphatic acids up to nine carbons are colourless liquids with unpleasant odours, the higher ones waxy, practically odourless solids. With a trace of acid, three ethanal molecules cyclise to paraldehyde, 2,4,6-trimethyl-​1,3,5-trioxane, a pleasant-smelling liquid (b.p. 397 K) once used as a hypnotic',
    why: 'Paraldehyde, three ethanal units, is C<sub>6</sub>H<sub>12</sub>O<sub>3</sub>: not to be confused with benzaldehyde.',
    say: null,
  },
  // pp. 417–418
  {
    topic: 9,
    kind: 'remember',
    q: 'How many moles of CH<sub>3</sub>MgBr does one mole of ethyl ethanoate consume? And which decarboxylates most easily, HC≡C–COOH, CH<sub>2</sub>=CH–COOH or CH<sub>3</sub>CH<sub>2</sub>COOH?',
    a: 'Two: the first displaces ethoxide to give propanone, the second adds to it, giving 2-methyl​propan-2-ol after work-up. Esters and acyl chlorides take two moles, plus one for each active hydrogen (OH, NH, COOH), which destroys a Grignard reagent. Decarboxylation tracks the stability of the carbanion-like fragment left behind, and an sp carbon holds the pair best: HC≡C–COOH > CH<sub>2</sub>=CH–COOH > CH<sub>3</sub>CH<sub>2</sub>COOH',
    why: 'Malonic acid loses CO<sub>2</sub> on gentle heating, through a cyclic transition state its second –COOH makes possible; ethanoic acid needs soda-lime fusion, which also turns benzoic acid into benzene.',
    say: null,
  },

  // ── Additional G · What JEE and NEET Actually Ask ──
  // pp. 418–419
  {
    topic: 10,
    kind: 'remember',
    q: 'Which parts of Aldehydes, Ketones and Carboxylic Acids come up most in JEE and NEET?',
    a: 'A reading of past papers, not official figures. Highest, nearly one question in four: the distinguishing tests and their scope. High: reactivity toward nucleophilic addition; acidity, with substituent and position effects; name-reaction reagents; the α-H reactions, aldol and haloform, and Cannizzaro. Moderate: reduction selectivity and physical properties. Numerical and atom-count items are a JEE Main staple; multi-step sequences, and Grignard and decarboxylation questions, come regularly',
    why: 'The most repeated skill is placing a compound on the test matrix; right behind it come the two ranking drills, carbonyl reactivity and acid strength, and the reagent-selection reflex.',
    say: null,
  },
  // pp. 421–423
  {
    topic: 10,
    kind: 'mistake',
    q: 'Which traps recur in aldehyde, ketone and acid questions?',
    a: 'Benzaldehyde or vanillin offered as positive to Fehling’s; Tollens’ claimed to separate ethanal from benzaldehyde, when it answers both; NaBH<sub>4</sub> extended to acids and esters; benzaldehyde and phenyl​acetaldehyde treated alike for α-H; Clemmensen or Wolff–Kishner picked by familiarity rather than by the group that must survive; phenoxide’s five resonance structures read as greater acidity; vinyl and phenyl written off as donors, though benzoic acid (4.19) beats acetic (4.76); one mole of silver per mole of aldehyde, when an ordinary aldehyde deposits two',
    why: 'In assertion-reason items, check that the reason explains the same comparison: carbonyls boil above hydrocarbons because of dipole–dipole attraction, so “they lack hydrogen bonding”, though true, explains only why they boil below alcohols.',
    say: null,
  },
];
