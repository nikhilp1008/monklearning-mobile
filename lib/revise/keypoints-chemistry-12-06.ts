/**
 * KEY POINTS for Chemistry Class 12, Chapter 6 (Haloalkanes and Haloarenes).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–04 are 0–3; Additional topics A–E are 4–8; Additional
 * topic F, What JEE and NEET Actually Ask (the book's Addendum P), is 9. No
 * point refers to another topic by number.
 *
 * Every fact is from the Master Reference book; the page (the bottom folio) is
 * above each point. Remember: the topic's Key Definitions and Cheat Sheet Box.
 * Common mistakes: its Common Student Pitfalls. Exam shortcuts: its Pro-Tip.
 * `say`: the cheat sheet's first two memory aids, word for word, in the Ch 1–4
 * form: no quotation marks, and a label after " — " (the book's own gloss where
 * it has one). Topics 03 and 04 print one aid each, so the chapter has six. One
 * is not word for word, because the aid as printed misleads: Topic 02's second
 * ends "racemic in the ideal case", not "racemic".
 * Additional topics: the addenda's methods, worked examples and practice
 * answers. Additional topic F: its distribution and traps.
 *
 * A few points are narrower than the book's sentence, or complete it, in our
 * words: racemisation complete "in the ideal case"; density rules for short-chain
 * haloalkanes; the iodoform test's limits on CH<sub>3</sub>CO–; "a simple primary
 * halide"; Dow's equation balanced.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. S<sub>N</sub>1,
 * S<sub>N</sub>2, S<sub>N</sub>i, E1, E2. Rate = <i>k</i>[R–X][Nu<sup>−</sup>].
 * Formulas upright, single bonds as en dashes (R–X, C–Cl, R–NH<sub>2</sub>), "="
 * and "≡" for double and triple bonds; R, R′, Ar and X generic upright letters.
 * Hybrid labels upright (sp<sup>3</sup>); α, β, π upright; o-, m-, p-, gem, vic,
 * tert-, t- upright; effect labels upright (−I, +R); <i>μ</i> italic, in D;
 * (<i>R</i>), (<i>S</i>) italic, (±), d, l upright. Degrees of carbon 1°, 2°, 3°.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Nomenclature, Preparation & Physical Properties ──
  // pp. 253, 255, 263
  {
    topic: 0,
    kind: 'remember',
    q: 'The C–X bond: which end is electron-poor, and how do its length and strength run from F to I?',
    a: 'Halogens are more electronegative than carbon, so carbon is left partly positive and the halogen partly negative. Bond length: C–F < C–Cl < C–Br < C–I. Bond enthalpy: C–F > C–Cl > C–Br > C–I. So C–I is the longest and weakest, and iodides are the most reactive in substitution',
    why: 'The aryl halide is the less polar: chlorobenzene (<i>μ</i> ≈ 1.69 D) against chloromethane (<i>μ</i> ≈ 1.86 D).',
    say: 'Aryl is shy — aryl halide dipole < alkyl halide dipole (resonance + sp<sup>2</sup> carbon).',
  },
  // pp. 256–258, 263
  {
    topic: 0,
    kind: 'remember',
    q: 'Finkelstein, Swarts and Sandmeyer: the reagent and the product of each?',
    a: 'Finkelstein: R–Cl or R–Br + NaI in dry acetone gives R–I; the NaCl or NaBr precipitates, which pushes the equilibrium forward. Swarts: R–Cl or R–Br + AgF (or Hg<sub>2</sub>F<sub>2</sub>, CoF<sub>2</sub>, SbF<sub>3</sub>) gives R–F. Sandmeyer: ArN<sub>2</sub><sup>+</sup>X<sup>−</sup> with CuX/HX gives Ar–X + N<sub>2</sub>, with X = Cl or Br',
    why: 'The rest of the diazonium family: Cu powder/HX gives the same products in lower yield (Gattermann), KI alone gives Ar–I, and HBF<sub>4</sub> then heat gives Ar–F (Balz–Schiemann).',
    say: 'FiSS — reagent fingerprints: Finkelstein = NaI/acetone, Swarts = AgF, Sandmeyer = CuX.',
  },
  // pp. 254, 263
  {
    topic: 0,
    kind: 'mixup',
    q: 'Allylic and benzylic, or vinylic and aryl: where does the halogen sit, and what does that do to the bond?',
    a: 'Allylic, benzylic: on an sp<sup>3</sup> carbon next to a double bond or ring; the C–X bond is ordinary, and the neighbour stabilises the charge that forms when the halogen leaves. Vinylic, aryl: directly on an sp<sup>2</sup> carbon; the lone pair leaks into the π system, so the bond is shorter, stronger and slow to break',
    why: 'Position has its own labels: a gem-dihalide has both halogens on the same carbon, a vic-dihalide on adjacent carbons.',
    say: null,
  },
  // pp. 256, 262
  {
    topic: 0,
    kind: 'mistake',
    q: 'Does the strongest bond, C–F, give the highest boiling point?',
    a: 'No: boiling point is about intermolecular forces, not bond strength. For the same alkyl group R–I > R–Br > R–Cl > R–F, because heavier, more polarisable halogens give stronger van der Waals forces. It rises with chain length and falls with branching',
    why: 'A separate trap is density: not every haloalkane sinks. Among short-chain haloalkanes, bromo, iodo and polyhalogen compounds are denser than water; monochloro and monofluoro compounds are lighter.',
    say: null,
  },
  // pp. 258–259, 262
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Arrange by boiling point: 1-chlorobutane, 1-chloropropane, chlorobenzene, chloroethane. The fast way?',
    a: 'Never recall numbers. The halogen is the same, so order by the size of the rest of the molecule: chloroethane < 1-chloropropane < 1-chlorobutane < chlorobenzene, the aromatic ring being the bulkiest, most polarisable framework here',
    why: 'In a name-the-reaction question the reagent is the fingerprint: CuX on a diazonium salt is Sandmeyer, AgF or SbF<sub>3</sub> is Swarts.',
    say: null,
  },

  // ── Topic 02 · Chemical Reactions & Mechanisms ──
  // pp. 265, 267, 271, 275
  {
    topic: 1,
    kind: 'remember',
    q: 'S<sub>N</sub>2: the rate law, the path and the stereochemical outcome?',
    a: 'Rate = <i>k</i>[R–X][Nu<sup>−</sup>], second order. One concerted step: the nucleophile attacks from the side opposite the halogen, through a single five-coordinate transition state, and the configuration inverts (Walden inversion). Order: CH<sub>3</sub>X > 1° > 2° > 3°, set by steric crowding. Favoured by a strong nucleophile in a polar aprotic solvent',
    why: 'Optically active (−)-2-bromobutane with CN<sup>−</sup> in acetone gives a single inverted, optically active product.',
    say: 'S<sub>N</sub>2 = 2 reactants, back-door, flips — inversion.',
  },
  // pp. 265–267, 275
  {
    topic: 1,
    kind: 'remember',
    q: 'S<sub>N</sub>1: the rate law, the path and the stereochemical outcome?',
    a: 'Rate = <i>k</i>[R–X], first order. Two steps: slow ionisation to a planar carbocation, then fast attack on either face. Both configurations form: racemisation, complete in the ideal case. Order: 3° > 2° > 1° > CH<sub>3</sub>X, set by carbocation stability, with allylic and benzylic halides exceptionally fast. Favoured by polar protic solvents',
    why: 'The leaving group order is the same for both mechanisms: R–I > R–Br > R–Cl ≫ R–F, set by C–X bond strength.',
    say: 'S<sub>N</sub>1 = 1 reactant ionises first, flat cation, both faces — racemic in the ideal case.',
  },
  // pp. 266, 269, 271, 275
  {
    topic: 1,
    kind: 'mixup',
    q: 'Aqueous KOH or alcoholic KOH: which reaction, and which product?',
    a: 'Aqueous, lower temperature: hydroxide acts as a nucleophile, substitution, R–OH. Alcoholic, heated: hydroxide acts as a strong base and removes a β-hydrogen, elimination, an alkene; by Saytzeff’s rule the more substituted alkene is major. 2-Bromobutane gives butan-2-ol, against but-2-ene (major) with but-1-ene',
    why: 'The third family, metals, in dry ether: Mg gives R–MgX; Na joins two R–X into R–R (Wurtz), an alkyl and an aryl halide into an alkylarene (Wurtz–Fittig), and two Ar–X into Ar–Ar (Fittig).',
    say: null,
  },
  // pp. 266, 272, 274
  {
    topic: 1,
    kind: 'mistake',
    q: 'Does a meta nitro group speed up nucleophilic substitution on a haloarene as an ortho or para one does?',
    a: 'No: an ortho or para –NO<sub>2</sub> can take the intermediate’s negative charge onto its own oxygen; a meta one is never on a charge-bearing carbon, so it offers no resonance stabilisation. With well-placed groups the rate climbs: chlorobenzene < 1-chloro-4-\u200bnitrobenzene < 1-chloro-2,4-\u200bdinitrobenzene',
    why: 'Aryl and vinyl halides do neither simple mechanism under ordinary conditions: no stable cation for S<sub>N</sub>1, and a blocked, repelled backside for S<sub>N</sub>2.',
    say: null,
  },
  // pp. 265, 273, 275
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A chiral secondary bromide meets NaCN in dry acetone and, separately, aqueous ethanol. Which mechanism in each? The fast way?',
    a: 'Read the substrate class first, then let the conditions break the tie. A simple primary halide leans S<sub>N</sub>2, tertiary S<sub>N</sub>1 or elimination, aryl and vinyl neither; secondary sits on the fence. Polar aprotic with a strong nucleophile: S<sub>N</sub>2, so NaCN in dry acetone inverts. Polar protic with a weak nucleophile: S<sub>N</sub>1, so aqueous ethanol goes through the flat cation. A strong bulky base with heat: elimination',
    why: 'The class is a first read, not a law: benzyl chloride is primary, yet ionises fast to a resonance-stabilised cation.',
    say: null,
  },

  // ── Topic 03 · Polyhalogen Compounds ──
  // pp. 278, 282
  {
    topic: 2,
    kind: 'remember',
    q: 'What do light and air turn chloroform into, and how is it stored to prevent that?',
    a: '2 CHCl<sub>3</sub> + O<sub>2</sub> →<sup>light</sup> 2 COCl<sub>2</sub> + 2 HCl: phosgene, a highly poisonous gas. So it is kept in dark (amber) bottles to cut out light, filled to the brim so almost no air remains, with a small amount of ethanol, which slows the oxidation and converts any phosgene formed into a harmless product',
    why: 'Carbon tetrachloride can form phosgene too, in the heat of a fire, which makes its extinguisher dangerous in a small, closed room.',
    say: null,
  },
  // pp. 277–278, 284–285
  {
    topic: 2,
    kind: 'remember',
    q: 'The polyhalogen compounds: each one’s use and its paired hazard?',
    a: 'CH<sub>2</sub>Cl<sub>2</sub>: solvent, paint remover; harms the central nervous system. CHCl<sub>3</sub>: solvent, once an anaesthetic; phosgene, liver damage. CCl<sub>4</sub>: solvent, once in fire extinguishers; liver damage, phosgene in a fire. Freons: refrigerants, aerosol propellants; ozone-layer depletion. DDT: insecticide; not readily biodegradable, builds up in animals and climbs the food chain',
    why: 'Iodoform, formerly an antiseptic, acts through the free iodine it liberates on contact with skin, not through the iodoform molecule itself.',
    say: 'Every polyhalogen compound = a useful tool with a dark side — learn the use and its paired hazard together.',
  },
  // pp. 279, 281
  {
    topic: 2,
    kind: 'mixup',
    q: 'Carbylamine test or iodoform test: the reagents, what each detects and what you see?',
    a: 'Carbylamine: a primary amine warmed with CHCl<sub>3</sub> and alcoholic KOH gives an offensive-smelling isocyanide, R–NH<sub>2</sub> + CHCl<sub>3</sub> + 3KOH →<sup>Δ</sup> R–NC + 3KCl + 3H<sub>2</sub>O; a test for primary amines and for chloroform. Iodoform: iodine and alkali on a methyl ketone, acetaldehyde or a CH<sub>3</sub>CH(OH)– alcohol give a yellow precipitate of CHI<sub>3</sub>',
    why: 'Behind the carbylamine reaction is dichlorocarbene, from α-elimination: CHCl<sub>3</sub> + KOH (alc.) → :CCl<sub>2</sub> + KCl + H<sub>2</sub>O.',
    say: null,
  },
  // pp. 279, 281, 284
  {
    topic: 2,
    kind: 'mistake',
    q: 'Does every alcohol give the iodoform test, and does every compound with a CH<sub>3</sub>CO– group?',
    a: 'No to both. Alcohols: ethanol and propan-2-ol do, having a CH<sub>3</sub>CH(OH)– unit that can be oxidised to CH<sub>3</sub>CO–; methanol and propan-1-ol do not. Carbonyls: the CH<sub>3</sub>CO– must be joined to H, alkyl or aryl, as in acetaldehyde and methyl ketones; acetic acid, its esters and its amide do not give the test',
    why: 'Telling the two haloforms apart: iodoform is a yellow solid (m.p. 119 °C) with a characteristic smell; chloroform is a colourless liquid (b.p. 61 °C).',
    say: null,
  },
  // pp. 283–284
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Which pair is right: freon with bioaccumulation, DDT with ozone depletion, or chloroform with phosgene? The fast way?',
    a: 'Anchor each compound to one use-and-hazard pair and learn the pair as a unit: the wrong option is often the mismatched half of another compound’s pair. Freon goes with ozone and DDT with bioaccumulation, so only chloroform with phosgene holds',
    why: 'One property gives a freon both its faces: inertness keeps it safe in a refrigerator and lets it survive long enough to reach the stratosphere.',
    say: null,
  },

  // ── Topic 04 · The Complete Reaction Map (Substitution Products, Ambident Nucleophiles & Haloarene Reactions) ──
  // pp. 286–287, 294
  {
    topic: 3,
    kind: 'remember',
    q: 'The substitution map: which reagent on R–X gives which product?',
    a: 'Aq. KOH: alcohol. NaOR′: ether (Williamson). R′COOAg: ester. NaI in dry acetone: iodide. KCN: nitrile. AgCN: isocyanide. KNO<sub>2</sub>: alkyl nitrite. AgNO<sub>2</sub>: nitroalkane. NH<sub>3</sub>: amine, on to 2°, 3° and 4°. KSH: thiol. R′C≡CNa: higher alkyne. Zn/HCl, LiAlH<sub>4</sub> or H<sub>2</sub>/Pd: the alkane R–H',
    why: 'The map assumes an sp<sup>3</sup> halide under conditions favouring substitution: a bulky strong base on a 3° halide gives an alkene instead.',
    say: 'R–X is the synthetic hub — pick the nucleophile, get the group; for the two ambident pairs, silver = nitrogen.',
  },
  // pp. 288–289, 294
  {
    topic: 3,
    kind: 'remember',
    q: 'Nucleophilic substitution on a haloarene: the three routes?',
    a: 'Activated ring, with strong electron-withdrawing groups ortho or para to the halogen: addition–elimination, through a resonance-stabilised carbanion. Unactivated ring under violent conditions: Dow’s process, C<sub>6</sub>H<sub>5</sub>Cl + 2NaOH → C<sub>6</sub>H<sub>5</sub>ONa + NaCl + H<sub>2</sub>O at 623 K and 300 atm, and acid then gives phenol. Extremely strong base, NaNH<sub>2</sub> in liquid ammonia: benzyne, by elimination–addition',
    why: 'In the benzyne route the base removes a hydrogen ortho to the halogen and the halide leaves, giving a strained extra bond across two ring carbons; the nucleophile then adds across it.',
    say: null,
  },
  // pp. 287–288, 291
  {
    topic: 3,
    kind: 'mixup',
    q: 'KCN or AgCN, KNO<sub>2</sub> or AgNO<sub>2</sub>: which atom attacks, and what forms?',
    a: 'The ionic potassium reagent attacks through the carbon of CN<sup>−</sup> or the oxygen of NO<sub>2</sub><sup>−</sup>: R–CN, a nitrile; R–ONO, an alkyl nitrite. The covalent silver reagent attacks through nitrogen: R–NC, an isocyanide; R–NO<sub>2</sub>, a nitroalkane. A strong tendency, not an inviolable law',
    why: '1-Bromopropane with AgNO<sub>2</sub> gives 1-nitropropane, which reduces to the primary amine propan-1-amine; KNO<sub>2</sub> gives propyl nitrite, which does not give the amine this way.',
    say: null,
  },
  // pp. 289, 292, 294
  {
    topic: 3,
    kind: 'mistake',
    q: 'Is a halogen an activating group, since it directs ortho and para?',
    a: 'No: halogens are deactivating yet ortho/para-directing. The −I effect withdraws electron density and slows the ring; the lone-pair +R effect feeds electron density specifically to the ortho and para positions. Speed and orientation are set by different effects',
    why: 'Chlorobenzene is nitrated by conc. HNO<sub>3</sub> and H<sub>2</sub>SO<sub>4</sub> more slowly than benzene, giving o- and p-nitro\u200bchlorobenzene.',
    say: null,
  },
  // pp. 289, 291–292, 294
  {
    topic: 3,
    kind: 'shortcut',
    q: 'p-Chlorotoluene with NaNH<sub>2</sub> in liquid ammonia gives two isomeric toluidines. Which two, by which route? The fast way?',
    a: 'Triage every haloarene question: is the ring activated (an o/p electron-withdrawing group), forced (Dow) or attacked by a super-base (benzyne)? NaNH<sub>2</sub> is the super-base. The benzyne bond joins the carbon that bore Cl to its neighbour, and NH<sub>2</sub><sup>−</sup> can add to either: at the old C–Cl carbon it gives p-toluidine, at the neighbour m-toluidine',
    why: 'A new group on the neighbouring carbon, as in the m-toluidine here, is cine substitution, the signature of a benzyne intermediate.',
    say: null,
  },

  // ── Additional A · SN1 Under the Microscope: Kinetics, Rearrangement, and the Factors Table ──
  // pp. 295–296
  {
    topic: 4,
    kind: 'remember',
    q: 'How does a rate law name the mechanism, and how do the four rate factors act?',
    a: 'S<sub>N</sub>1, rate = <i>k</i>[R–X]: doubling the nucleophile does nothing, doubling the substrate doubles the rate. S<sub>N</sub>2: rate = <i>k</i>[R–X][Nu]. Substrate: S<sub>N</sub>1 runs 3° > 2° > 1° > CH<sub>3</sub>X, with allyl and benzyl chloride fast though primary, and vinyl and aryl effectively zero. Leaving group: R–I > R–Br > R–Cl ≫ R–F in both. Nucleophile: irrelevant to the S<sub>N</sub>1 rate, decisive for S<sub>N</sub>2. Solvent: polar protic stabilises the carbocation and the departing halide, speeding S<sub>N</sub>1; polar aprotic leaves the anion free, speeding S<sub>N</sub>2',
    why: 'In polar protic solvents nucleophilicity tracks polarisability, I<sup>−</sup> > Br<sup>−</sup> > Cl<sup>−</sup> > F<sup>−</sup>; in polar aprotic solvents the order reverses toward F<sup>−</sup> > Cl<sup>−</sup> > Br<sup>−</sup> > I<sup>−</sup>.',
    say: null,
  },
  // pp. 296–298
  {
    topic: 4,
    kind: 'remember',
    q: 'A carbocation has formed: when do you expect a rearranged product, and how do you find it?',
    a: 'Draw the first cation, ask whether a single 1,2-hydride or 1,2-methyl shift from the adjacent carbon upgrades it to a more stable one, and capture the upgraded cation. 3-Bromo-2,2-\u200bdimethylbutane in aqueous ethanol: the 2° cation takes a 1,2-methyl shift to the 3° 2,3-\u200bdimethylbutan-2-yl cation, and water gives 2,3-\u200bdimethylbutan-2-ol',
    why: 'Neopentyl bromide, 1-bromo-2,2-\u200bdimethylpropane, is extremely slow in S<sub>N</sub>2, yet solvolysis gives the rearranged 3° alcohol 2-methyl\u200bbutan-2-ol, not 2,2-\u200bdimethylpropan-1-ol.',
    say: null,
  },

  // ── Additional B · Elimination Versus Substitution: E1, E2, and the Hofmann Exception ──
  // pp. 298, 300
  {
    topic: 5,
    kind: 'remember',
    q: 'E2 or E1: the steps, the rate law and the conditions?',
    a: 'E2: one concerted step, the base removing a β-H as C–X breaks; rate = <i>k</i>[R–X][base]; needs a strong base, with H and X anti-periplanar. E1: two steps, the same ionisation as S<sub>N</sub>1, then loss of a β-H from the carbocation; rate = <i>k</i>[R–X]; appears for 3° and resonance-stabilised halides in polar protic media with weak bases, competing with S<sub>N</sub>1 capture; rearrangements possible',
    why: 'tert-Butyl bromide in aqueous ethanol gives both 2-methyl\u200bpropan-2-ol (S<sub>N</sub>1) and 2-methylpropene (E1) from one carbocation; raising the temperature favours the alkene.',
    say: null,
  },
  // pp. 298–299, 301
  {
    topic: 5,
    kind: 'remember',
    q: 'Saytzeff or Hofmann: what decides the major alkene in E2?',
    a: 'The size of the base. A small base (OH<sup>−</sup>, EtO<sup>−</sup>) removes the β-H leading to the most substituted alkene: Saytzeff. A bulky base (t-BuOK) finds the hindered interior β-H hard to reach and takes the most accessible terminal one, so the least substituted alkene is major: Hofmann. 2-Bromobutane with alc. KOH: but-2-ene major; with t-BuOK: but-1-ene major',
    why: 'Count the β-hydrogens first: 2-bromo-2,3-\u200bdimethylbutane has six on the two methyl groups attached to C-2 and one on C-3, and alc. KOH gives the tetrasubstituted 2,3-\u200bdimethylbut-2-ene.',
    say: null,
  },

  // ── Additional C · The Stereochemistry Toolkit ──
  // pp. 301–303
  {
    topic: 6,
    kind: 'remember',
    q: 'Chirality, enantiomers and a racemic mixture: what does each mean?',
    a: 'Chiral: non-superimposable on its mirror image; in haloalkanes the usual source is one carbon bearing four different groups, and a plane or centre of symmetry rules chirality out. Enantiomers: the mirror-image pair, identical in melting point, boiling point, refractive index and solubility in achiral solvents, differing only in the direction of optical rotation and in reactions with other chiral species. Racemic mixture: exactly 1:1, zero net rotation, written (±) or dl',
    why: 'Of the eight structural isomers of C<sub>5</sub>H<sub>11</sub>Cl, three are chiral: 2-chloropentane (C-2 bears Cl, H, CH<sub>3</sub>, C<sub>3</sub>H<sub>7</sub>), 1-chloro-2-\u200bmethylbutane and 2-chloro-3-\u200bmethylbutane.',
    say: null,
  },
  // pp. 296–297, 301–303
  {
    topic: 6,
    kind: 'remember',
    q: 'Retention, inversion, racemisation: which pathway gives each at a chiral carbon?',
    a: 'Retention: S<sub>N</sub>i, SOCl<sub>2</sub> alone on an alcohol, with chlorine delivered internally from the chlorosulphite. Inversion: S<sub>N</sub>2; (+)-2-bromobutane with NaCN in dry acetone gives a single optically active product, 2-methyl\u200bbutanenitrile. Racemisation: S<sub>N</sub>1; under ionising conditions the same bromide goes through a planar, achiral carbocation captured from both faces, ideally to (±)-butan-2-ol, optically inactive',
    why: '(<i>S</i>)-2-Bromooctane with NaN<sub>3</sub> in DMF gives (<i>R</i>)-2-azidooctane; reduction gives (<i>R</i>)-octan-2-amine, because the stereocentre is touched only once.',
    say: null,
  },

  // ── Additional D · Aryl, Vinyl, Allyl, Benzyl: The Reactivity Ladder, Complete ──
  // pp. 303–304
  {
    topic: 7,
    kind: 'remember',
    q: 'Why is ArF the fastest aryl halide in activated nucleophilic substitution, although C–F is the strongest bond?',
    a: 'The slow step is the nucleophile’s addition to form the carbanion; the C–X bond breaks only in the fast second step. So bond strength never enters the rate, and the deciding factor is how strongly the halogen stabilises the carbanion by its −I effect: ArF > ArCl > ArBr > ArI. In S<sub>N</sub>1 and S<sub>N</sub>2 on haloalkanes the C–X bond breaks in the slow step, so RI > RBr > RCl > RF',
    why: 'In electrophilic substitution every halogen deactivates, but not in order of electronegativity: nitration rates relative to benzene are PhF 0.15, PhI 0.18, PhCl 0.033 and PhBr 0.030.',
    say: null,
  },
  // pp. 304–305
  {
    topic: 7,
    kind: 'remember',
    q: 'The S<sub>N</sub>1 ladder across the halide families: where does each sit?',
    a: '3° > 2° > 1° > CH<sub>3</sub>X ≫ vinyl, aryl (inert). Benzyl and allyl halides react fast through resonance-stabilised cations: benzyl chloride hydrolyses orders of magnitude faster than chlorobenzene, which has no stable cation to form. Among benzylic bromides, the more stable cation is the faster: C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>Br < C<sub>6</sub>H<sub>5</sub>CH(CH<sub>3</sub>)Br < C<sub>6</sub>H<sub>5</sub>CH(C<sub>6</sub>H<sub>5</sub>)Br < C<sub>6</sub>H<sub>5</sub>C(CH<sub>3</sub>)(C<sub>6</sub>H<sub>5</sub>)Br',
    why: 'Dihalides have their own standard conversions: 1,2-dibromoethane + Zn dust gives ethene + ZnBr<sub>2</sub>; 2,2-dibromopropane + aq. KOH gives propanone through an unstable gem-diol.',
    say: null,
  },

  // ── Additional E · Comparison Data Drills: Dipoles, Boiling Points, Densities ──
  // p. 306
  {
    topic: 8,
    kind: 'remember',
    q: 'The dipole moments of the methane chlorides: the order, and why more chlorine does not mean more polar?',
    a: 'In D: CH<sub>3</sub>Cl\u00a0~1.86 > CH<sub>2</sub>Cl<sub>2</sub>\u00a0~1.60 > CHCl<sub>3</sub>\u00a0~1.04 > CCl<sub>4</sub>\u00a00. Each C–Cl bond is less polar when more chlorines pull on the carbon, which is why CH<sub>2</sub>Cl<sub>2</sub> falls below CH<sub>3</sub>Cl. From CH<sub>2</sub>Cl<sub>2</sub> on, the C–Cl bond dipoles add as vectors and partly cancel, more so in CHCl<sub>3</sub>, and exactly in tetrahedrally symmetric CCl<sub>4</sub>',
    why: 'Asked for the highest of CH<sub>2</sub>Cl<sub>2</sub>, CHCl<sub>3</sub> and CCl<sub>4</sub>, the answer is CH<sub>2</sub>Cl<sub>2</sub>. Chlorobenzene (1.69 D) is below chloromethane (1.86 D): resonance plus the more electronegative sp<sup>2</sup> carbon.',
    say: null,
  },
  // pp. 306–307
  {
    topic: 8,
    kind: 'remember',
    q: 'Boiling point, melting point and density: the rules?',
    a: 'Boiling point: for one alkyl group RI > RBr > RCl > RF, from van der Waals forces, not bond strength or dipole; for one halogen it rises with chain length and falls with branching. Melting point: the para-dihalobenzene is highest, its symmetry packing best into the lattice, though the o, m and p isomers boil at nearly the same temperature. Density: among short-chain haloalkanes, bromo, iodo and polyhalogen compounds are denser than water; monochloro and monofluoro compounds are lighter; density rises with the number of halogens and the halogen’s atomic mass',
    why: 'By boiling point: 2-bromo-2-\u200bmethylpropane < 2-bromobutane < 1-bromobutane < bromobenzene.',
    say: null,
  },

  // ── Additional F · What JEE and NEET Actually Ask ──
  // pp. 307–308
  {
    topic: 9,
    kind: 'remember',
    q: 'Which parts of Haloalkanes and Haloarenes carry the most weight in JEE and NEET?',
    a: 'An estimate, not official figures: S<sub>N</sub>1 and S<sub>N</sub>2 mechanisms and reactivity orders about 40%; named reagents and reactions about 25%; polyhalogen compounds about 15%; physical properties about 10%; synthesis sequences and isomer counting about 10%',
    why: 'The most repeated question shape is the “which reacts fastest or slowest” ranking, followed closely by reagent identification.',
    say: null,
  },
  // pp. 308–309
  {
    topic: 9,
    kind: 'mistake',
    q: 'Which traps recur in haloalkane and haloarene questions?',
    a: 'S<sub>N</sub>2 credited to CH<sub>2</sub>=CH–Cl, or S<sub>N</sub>1 or S<sub>N</sub>2 to chlorobenzene; fast S<sub>N</sub>1 denied to allyl and benzyl chloride because they are primary; resonance help credited to a meta-NO<sub>2</sub>; one halogen order carried across reactions (F > Cl > Br > I in activated aromatic substitution, RI > RBr > RCl > RF on haloalkanes); “any alcohol” in the iodoform test; freons and DDT cross-paired with each other’s hazards',
    why: 'Swarts reagents are AgF, SbF<sub>3</sub>, Hg<sub>2</sub>F<sub>2</sub> and CoF<sub>2</sub>, but not CaF<sub>2</sub>, a classic examiner trap.',
    say: null,
  },
];
