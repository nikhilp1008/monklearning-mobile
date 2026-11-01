/**
 * KEY POINTS for Chemistry Class 11, Chapter 8 (Organic Chemistry — Some
 * Basic Principles and Techniques).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: the opening section, Foundations (the book's Subtopic 00), is 0;
 * Topics 01–04 are 1–4; Additional topics A–F are 5–10; Additional topic G,
 * the Summary Checklist, is 11 (no points); Additional topic H, What JEE and
 * NEET Actually Ask (the book's Addendum P), is 12. No point refers to another
 * topic by number.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key Definitions and Cheat Sheet Box. Common mistakes:
 * its Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's first two memory aids, word for word, in the Ch 1–4 form: no
 * quotation marks, and a label after " — ". Additional topics: the addenda's
 * methods, worked examples and practice answers. Additional topic H: its
 * distribution and traps. The book's ranking of the benzyl cation above
 * tert-butyl (pp. 370, 372–373) is not used: it is contested and left to the
 * expert review.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Formulas
 * upright; condensed formulas stay text, single bonds as en dashes
 * (CH<sub>3</sub>–CH<sub>2</sub>–COOH, where the Additional topics print a minus).
 * Hybrid and orbital labels upright, NCERT style (sp<sup>3</sup>, p), though the
 * book sets them in maths italic; σ, π upright; α italic. Effect labels
 * upright (+I, −M, +E), as Topic 03 prints them; R/S, E/Z, d/l, N- and o-/p-
 * upright as printed; R in R<sub>3</sub>C<sup>+</sup> a generic upright letter.
 * Variables italic: <i>n</i>, <i>w</i>, <i>m</i>, <i>N</i>, <i>V</i>, <i>P</i>, <i>R</i>,
 * <i>T</i>, <i>c</i>, <i>l</i>, [<i>α</i>], <i>α</i><sub>obs</sub>, <i>R</i><sub>f</sub>
 * (label subscript upright).
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Foundations · Introduction, Structural Representation & Classification ──
  // pp. 347, 350, 352
  {
    topic: 0,
    kind: 'remember',
    q: 'The four ways of drawing an organic molecule, and the rules of a bond-line formula?',
    a: 'Complete (Lewis/dash), condensed (CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH), bond-line (zig-zag) and three-dimensional wedge–dash (solid wedge toward you, hashed wedge away). In a bond-line formula every vertex and line-end is a carbon, C–H bonds are implied, and heteroatoms (O, N, halogens) and the H’s on them are written explicitly',
    why: '2-Methylbutane: condensed CH<sub>3</sub>CH(CH<sub>3</sub>)CH<sub>2</sub>CH<sub>3</sub>; bond-line, a four-vertex zig-zag with one extra line off the second vertex.',
    say: 'vertex and end are carbon, heteroatoms shout — reading a bond-line formula.',
  },
  // pp. 349–350, 352
  {
    topic: 0,
    kind: 'remember',
    q: 'What defines a homologous series?',
    a: 'The same functional group and general formula, successive members differing by a –CH<sub>2</sub>– unit; a steady gradation in physical properties (boiling point rises with chain length) and similar chemical properties. Alkanes C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub>, alkenes C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>, alkynes C<sub><i>n</i></sub>H<sub>2<i>n</i>−2</sub>',
    why: 'Ketones, C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>O: propanone C<sub>3</sub>H<sub>6</sub>O (the smallest, since the carbonyl needs a carbon on each side), butanone C<sub>4</sub>H<sub>8</sub>O, pentan-2-one C<sub>5</sub>H<sub>10</sub>O.',
    say: 'CH<sub>2</sub> climbs the family ladder — successive homologues differ by CH<sub>2</sub>.',
  },
  // pp. 347–352
  {
    topic: 0,
    kind: 'mixup',
    q: 'Heterocyclic or aromatic: how is pyridine classified?',
    a: 'Heterocyclic first, aromatic second: the heteroatom takes precedence in the family tree. Acyclic or cyclic; cyclic is carbocyclic (alicyclic or aromatic) or heterocyclic (at least one non-carbon ring atom); then by functional group',
    why: 'Cyclohexane: carbocyclic, alicyclic. Naphthalene: carbocyclic, aromatic (benzenoid). Furan and tetrahydrofuran: heterocyclic.',
    say: null,
  },
  // pp. 350, 352
  {
    topic: 0,
    kind: 'mistake',
    q: 'A six-carbon ring with one C=C and an –OH on the carbon next to it: is it aromatic?',
    a: 'No: a lone ring double bond does not make a ring aromatic, which needs a fully conjugated, planar, (4<i>n</i> + 2) π ring. Cyclohex-2-en-1-ol, C<sub>6</sub>H<sub>10</sub>O, is alicyclic, with an alcohol group',
    why: 'Hydrogens by tetravalence: 1 on each C=C carbon, 1 on the C–OH carbon, 2 on each of the other three, plus the O–H: 2 + 1 + 6 + 1 = 10.',
    say: null,
  },
  // p. 352
  {
    topic: 0,
    kind: 'shortcut',
    q: 'A molecular formula from a bond-line drawing: the fast way?',
    a: 'Count vertices and line-ends for the carbons, then give each carbon enough H to reach four bonds; never count H one by one across the whole structure',
    why: 'Heteroatoms and the H’s attached to them are always drawn; only C–H is suppressed.',
    say: null,
  },

  // ── Topic 01 · Hybridization & IUPAC Nomenclature ──
  // pp. 354, 357–358
  {
    topic: 1,
    kind: 'remember',
    q: 'sp<sup>3</sup>, sp<sup>2</sup> and sp carbon: bonds, geometry, angle and s-character, and what s-character controls?',
    a: 'sp<sup>3</sup>: 4σ, 0π, tetrahedral, 109.5°, 25% s. sp<sup>2</sup>: 3σ, 1π, trigonal planar, 120°, 33.3%. sp: 2σ, 2π, linear, 180°, 50%. More s-character → shorter, stronger σ bond, more electronegative carbon, more acidic terminal C–H: sp > sp<sup>2</sup> > sp<sup>3</sup>',
    why: 'C–H bond length: ethyne (sp) < ethene (sp<sup>2</sup>) < ethane (sp<sup>3</sup>).',
    say: null,
  },
  // pp. 354–356, 358
  {
    topic: 1,
    kind: 'remember',
    q: 'The IUPAC naming order, and the seniority of the principal group?',
    a: 'Principal group (suffix) → longest chain through it → number for the lowest locant to that group → substituents as prefixes, alphabetically → assemble. Seniority: –COOH > –SO<sub>3</sub>H > (anhydride > ester > acyl halide > amide) > –CN > –CHO > >C=O > –OH > –NH<sub>2</sub>; halogens, –NO<sub>2</sub> and alkyl/alkoxy groups are always prefixes',
    why: 'CH<sub>3</sub>–CH(OH)–CH<sub>2</sub>–CHO: –CHO outranks –OH, so 3-hydroxybutanal. HC≡C–CH(OH)–COOH: C1 is the acid carbon wherever the triple bond sits, so 2-hydroxybut-3-ynoic acid.',
    say: 'Suffix first, chain next, number for the prize, prefix the rest — naming order.',
  },
  // pp. 355, 357–358
  {
    topic: 1,
    kind: 'mixup',
    q: 'A lowest-locant tie: decided by the first point of difference or by the sum of the locants?',
    a: 'First point of difference: compare the sets term by term, so {2,7,8} (sum 17) beats {3,4,8} (sum 15), since 2 < 3; then alphabetical. When alphabetising, ignore di/tri/tetra and sec-/tert-, but count iso, neo and cyclo',
    why: 'Methyl and ethyl on a hexane chain numbering {2,4} from the left and {3,5} from the right: number from the left, 4-ethyl-2-methylhexane.',
    say: null,
  },
  // pp. 355–358
  {
    topic: 1,
    kind: 'mistake',
    q: 'How many carbons are sp<sup>2</sup> in but-3-en-2-one, CH<sub>2</sub>=CH–CO–CH<sub>3</sub>?',
    a: 'Three: the two alkene carbons and the carbonyl carbon; only the CH<sub>3</sub> is sp<sup>3</sup>. Every carbon that is part of one double bond, C=O included, is sp<sup>2</sup> (two double bonds, as at an allene centre, make it sp). Charged carbons count their lone pair: a carbocation (3σ + 0 lp) is sp<sup>2</sup>, a carbanion (3σ + 1 lp) sp<sup>3</sup>',
    why: 'Benzaldehyde has 7 sp<sup>2</sup> carbons: the six ring carbons and the CHO carbon.',
    say: 'a missing bond drops you one rung up the hybrid ladder — hybridization of a carbocation.',
  },
  // pp. 355–356, 358
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Hybridization and naming at speed?',
    a: 'Never draw orbitals: count σ bonds (+ lone pairs); a count of 4, 3, 2 ⇒ sp<sup>3</sup>, sp<sup>2</sup>, sp, and π bonds never count. For naming, lock the suffix before you touch the chain: it fixes both the parent and C1 in one move',
    why: 'Propyne, CH<sub>3</sub>–C≡CH: the CH<sub>3</sub> carbon has 4σ (sp<sup>3</sup>), the two triple-bonded carbons 2σ each (sp). Propadiene, CH<sub>2</sub>=C=CH<sub>2</sub>, has one sp carbon, the central one.',
    say: null,
  },

  // ── Topic 02 · Isomerism ──
  // pp. 360, 363, 364
  {
    topic: 2,
    kind: 'remember',
    q: 'The six types of structural isomerism?',
    a: 'Chain (branching: n-butane vs 2-methylpropane); position (but-1-ene vs but-2-ene); functional group (an alcohol vs an ether, C<sub>2</sub>H<sub>6</sub>O); metamerism (alkyls split differently around a divalent –O–, –S–, –NH–, –CO–: methoxypropane vs ethoxyethane); ring-chain (butene vs cyclobutane); tautomerism (keto ⇌ enol, a 1,3-shift of a mobile H)',
    why: 'Recurring functional pairs: alcohols ↔ ethers (C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub>O), aldehydes ↔ ketones (C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>O), carboxylic acids ↔ esters (C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>O<sub>2</sub>).',
    say: 'Connect first, then arrange — the order for classifying two structures.',
  },
  // pp. 360–362, 365
  {
    topic: 2,
    kind: 'remember',
    q: 'Geometrical and optical isomerism: the conditions, and how E/Z is assigned?',
    a: 'Geometrical: restricted rotation (C=C or ring) and two different groups on each restricted carbon. E/Z by CIP priority (atomic number): higher-priority groups on the same side → Z, opposite → E. Optical: a chiral molecule, non-superimposable on its mirror image; a plane, centre or alternating axis of symmetry makes it achiral. Up to 2<sup><i>n</i></sup> stereoisomers from <i>n</i> stereocentres, fewer when meso forms exist',
    why: 'Br–CH=CH–Cl with Br (atomic number 35) and Cl (17) on opposite sides: (E)-1-bromo-2-chloroethene.',
    say: 'two different on each end — geometrical isomerism.',
  },
  // pp. 360–361, 364
  {
    topic: 2,
    kind: 'mixup',
    q: 'Racemic mixture or meso compound?',
    a: 'Both are optically inactive, but a racemic mixture is two compounds, a 1:1 mix of enantiomers whose rotations cancel (external compensation), while a meso compound is one molecule with stereocentres that is achiral through an internal plane of symmetry (internal compensation)',
    why: 'Enantiomers share melting point, boiling point and reactivity toward ordinary reagents, differing only in the direction they rotate plane-polarised light and with chiral substances; diastereomers, cis/trans pairs included, differ in ordinary physical properties too.',
    say: null,
  },
  // pp. 362–364
  {
    topic: 2,
    kind: 'mistake',
    q: '2,3-Dichlorobutane has two stereocentres. Does it have 2<sup>2</sup> = 4 stereoisomers?',
    a: 'No, 3: the stereocentres are equivalent, so (R,R) and (S,S) are an enantiomeric pair and (R,S) has an internal plane of symmetry, a meso form. 2<sup><i>n</i></sup> is only an upper bound; tartaric acid likewise has three',
    why: '2,3-Dibromopentane does have 4 (two enantiomeric pairs): methyl on one side, ethyl on the other. Likewise “double bond ⇒ geometrical isomers” fails: but-1-ene and 2-methylbut-2-ene show none.',
    say: null,
  },
  // pp. 363–364
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Which is optically active: 2-chloropropane, 2-chlorobutane, 1-chloropropane or 2-chloro-2-methylpropane? The fast way?',
    a: 'Don’t draw mirror images: hunt for one carbon with four different groups, then do a 2-second symmetry check. 2-Chlorobutane: C2 bears H, Cl, CH<sub>3</sub> and C<sub>2</sub>H<sub>5</sub>',
    why: 'For E/Z, priority is set by atomic number, not by how big a group looks: a single Br beats an entire alkyl chain.',
    say: null,
  },

  // ── Topic 03 · Reaction Mechanisms — Fundamental Concepts ──
  // pp. 367, 369, 373
  {
    topic: 3,
    kind: 'remember',
    q: 'Carbocation, carbanion, free radical and carbene: electrons, hybridisation and nature, and the alkyl stability orders?',
    a: 'Carbocation R<sub>3</sub>C<sup>+</sup>: sextet, sp<sup>2</sup>, trigonal planar with an empty p, electrophilic. Carbanion R<sub>3</sub>C<sup>−</sup>: octet with a lone pair, sp<sup>3</sup>, pyramidal, nucleophilic. Free radical R<sub>3</sub>C<sup>•</sup>: neutral, odd electron, near-planar, paramagnetic. Carbene :CR<sub>2</sub>: neutral sextet, divalent C. Cations and radicals 3° > 2° > 1° > methyl; carbanions methyl > 1° > 2° > 3°',
    why: 'Alkyl groups stabilise a cation or radical by +I and hyperconjugation, but their +I destabilises a negative centre; carbanions are stabilised by −I and −M groups instead.',
    say: null,
  },
  // pp. 367, 371, 373
  {
    topic: 3,
    kind: 'remember',
    q: 'The four electronic effects?',
    a: 'Inductive (I): permanent, partial σ-electron displacement fading with distance (negligible beyond about three carbons); +I alkyl, −I halogens, –NO<sub>2</sub>, –COOH, –CN. Mesomeric (M): permanent π or lone-pair delocalisation through conjugation; +M –OH, –OR, –NH<sub>2</sub>, −M –NO<sub>2</sub>, –C=O, –CN; usually stronger than I. Electromeric (E): temporary, complete π-pair transfer on a reagent’s demand. Hyperconjugation: σ(C–H) delocalisation; more <i>α</i> C–H, more stable',
    why: 'para-Methoxybenzyl > benzyl > para-nitrobenzyl cation: the +M donor stabilises the cation, the −M/−I acceptor destabilises it.',
    say: null,
  },
  // pp. 367, 370–373
  {
    topic: 3,
    kind: 'mixup',
    q: 'Nucleophile or electrophile: is charge the test?',
    a: 'No, electron density is. Nucleophiles are electron-rich lone-pair donors, Lewis bases: OH<sup>−</sup>, CN<sup>−</sup>, RO<sup>−</sup>, halide ions and neutral NH<sub>3</sub>, H<sub>2</sub>O. Electrophiles are electron-deficient acceptors, Lewis acids: H<sup>+</sup>, NO<sub>2</sub><sup>+</sup>, BF<sub>3</sub>, AlCl<sub>3</sub>, SnCl<sub>4</sub>, carbocations',
    why: 'H<sub>2</sub>O and BF<sub>3</sub> have the same zero net charge yet opposite roles: two lone pairs on O, only six electrons (an empty orbital) on B.',
    say: 'Nu = electron-rich, E = electron-poor — reagents.',
  },
  // pp. 367, 370, 372
  {
    topic: 3,
    kind: 'mistake',
    q: 'Does homolytic fission give a cation and an anion?',
    a: 'No: homolytic fission is the equal one-electron split into two free radicals (fishhook arrows), favoured by nonpolar bonds, heat/UV and peroxides. Heterolytic fission is the unequal split into a cation and an anion (full arrows), favoured by polar bonds and polar solvents; the more electronegative atom keeps the pair',
    why: 'CH<sub>3</sub>–Br → CH<sub>3</sub><sup>•</sup> + Br<sup>•</sup> (a methyl radical) or CH<sub>3</sub><sup>+</sup> + Br<sup>−</sup> (a methyl carbocation, sp<sup>2</sup>). Nor swap the geometries: carbocation sp<sup>2</sup> planar, carbanion sp<sup>3</sup> pyramidal.',
    say: null,
  },
  // pp. 372–373
  {
    topic: 3,
    kind: 'shortcut',
    q: 'A stability ranking: in what order do you run the checks?',
    a: 'Resonance → hyperconjugation/+I → adjacent ±M/±I groups, always in that order; the first one that applies usually decides the answer, so you rarely need to weigh them all',
    why: 'With no resonance option, the alkyl ordering decides: (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup> > (CH<sub>3</sub>)<sub>2</sub>CH<sup>+</sup> > CH<sub>3</sub>CH<sub>2</sub><sup>+</sup> > CH<sub>3</sub><sup>+</sup>, tertiary having the most +I and hyperconjugation.',
    say: 'resonance beats hyperconjugation beats induction — the stability checklist.',
  },

  // ── Topic 04 · Purification, Qualitative & Quantitative Analysis ──
  // pp. 374–376, 379
  {
    topic: 4,
    kind: 'remember',
    q: 'Which purification method for which property?',
    a: 'Sublimation (solid → vapour: camphor, naphthalene); crystallisation (hot vs cold solubility); simple distillation (large b.p. gap), fractional (small gap), reduced pressure (decomposes near its b.p.: glycerol), steam (steam-volatile and water-immiscible: aniline); differential extraction (two immiscible solvents); chromatography (adsorption or partition), <i>R</i><sub>f</sub> = (distance moved by the component)/(distance moved by the solvent front)',
    why: 'Stationary phase a solid: adsorption chromatography (column, TLC); a liquid: partition chromatography (paper).',
    say: null,
  },
  // pp. 375, 377, 379–380
  {
    topic: 4,
    kind: 'remember',
    q: 'Lassaigne’s test: why sodium fusion, and what does each test show?',
    a: 'Fusing with sodium turns covalent N, S, X into ionic NaCN, Na<sub>2</sub>S, NaX in the extract. N: FeSO<sub>4</sub> → Prussian blue. S: sodium nitroprusside → violet, or lead acetate → black PbS. X: acidify with dilute HNO<sub>3</sub>, add AgNO<sub>3</sub> → AgCl white, AgBr pale yellow, AgI yellow. N and S together → NaSCN, blood-red with Fe<sup>3+</sup>',
    why: 'C and H: heat with dry copper(II) oxide; CO<sub>2</sub> turns lime water milky, H<sub>2</sub>O turns anhydrous CuSO<sub>4</sub> blue.',
    say: 'blue is N, red is N&S — Lassaigne’s test.',
  },
  // pp. 375–376, 378–379
  {
    topic: 4,
    kind: 'mixup',
    q: 'Liebig, Dumas, Kjeldahl, Carius: which element, and what is measured?',
    a: 'Liebig: C and H, burn in O<sub>2</sub> and weigh CO<sub>2</sub> and H<sub>2</sub>O. Dumas: N, the volume of N<sub>2</sub> collected over KOH. Kjeldahl: N, digest with conc. H<sub>2</sub>SO<sub>4</sub> → (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>, free NH<sub>3</sub> with NaOH into standard acid, titrate. Carius: halogen (weigh AgX) or S (weigh BaSO<sub>4</sub>)',
    why: 'Kjeldahl fails for nitro, azo (and ring) nitrogen, which is not converted quantitatively to ammonium sulphate during digestion.',
    say: 'Carius cuts halogens, Kjeldahl/Dumas net nitrogen — which method estimates which element.',
  },
  // pp. 377–379
  {
    topic: 4,
    kind: 'mistake',
    q: 'Dumas: 0.28 g gives 50 mL of N<sub>2</sub> over water at 300 K and 745 mm (aqueous tension 25 mm). Use 745 mm?',
    a: 'No: subtract the water-vapour pressure first, 745 − 25 = 720 mm. <i>V</i><sub>STP</sub> = 50 × (720/760) × (273/300) = 43.1 mL; N = 2 × (43.1/22400) × 14 = 0.05388 g, so %N = 19.24',
    why: 'Forgetting the aqueous tension inflates the volume and the answer. And oxygen is usually found by difference.',
    say: null,
  },
  // pp. 376–379
  {
    topic: 4,
    kind: 'shortcut',
    q: 'Percentage composition in one line: what do you memorise?',
    a: 'Three factors: 12/44 (C from CO<sub>2</sub>), 2/18 (H from H<sub>2</sub>O) and the Kjeldahl 1.4. %C = (12/44) × <i>m</i>(CO<sub>2</sub>)/<i>w</i> × 100; %H = (2/18) × <i>m</i>(H<sub>2</sub>O)/<i>w</i> × 100; %N = 1.4 × <i>N</i> × <i>V</i>/<i>w</i>; %X = (at. mass of X/mol. mass of AgX) × <i>m</i>(AgX)/<i>w</i> × 100',
    why: '0.30 g giving 0.44 g CO<sub>2</sub> and 0.18 g H<sub>2</sub>O: %C = 40.0, %H = 6.67, O by difference 53.33. Ammonia from 1.4 g neutralising 30 mL of 0.5 N H<sub>2</sub>SO<sub>4</sub>: %N = 1.4 × 0.5 × 30/1.4 = 15.',
    say: null,
  },

  // ── Additional A · Writing and Ranking Resonance Structures ──
  // pp. 381–382
  {
    topic: 5,
    kind: 'remember',
    q: 'Valid resonance structures: the two hard rules, and what makes a contributor more stable?',
    a: 'Same nuclear positions in every contributor (only π electrons and lone pairs move) and the same number of unpaired electrons. More stable with: more covalent bonds; a complete octet on every atom; less separation of opposite charges; negative charge on the more electronegative atom; more dispersal of charge. Equivalent contributors stabilise most; only the hybrid is real, lower in energy than any contributor',
    why: 'Acrolein: CH<sub>2</sub>=CH–CH=O > <sup>+</sup>CH<sub>2</sub>–CH=CH–O<sup>−</sup> > <sup>−</sup>CH<sub>2</sub>–CH=CH–O<sup>+</sup>. Benzene’s C–C bonds are all 139 pm, between C–C (154 pm) and C=C (134 pm).',
    say: null,
  },
  // pp. 382–383
  {
    topic: 5,
    kind: 'mixup',
    q: 'Resonance or tautomerism: are the keto and enol forms of propanone resonance structures?',
    a: 'No, tautomers: a hydrogen nucleus moves from carbon to oxygen (a 1,3-shift), so they are distinct, real molecules in dynamic equilibrium; resonance moves only electrons. Resonance also needs an unbroken path of π bonds and lone-pair atoms: a single sp<sup>3</sup> carbon breaks it',
    why: 'CH<sub>3</sub>CH<sub>2</sub>CH=CHCH<sub>2</sub>NH<sub>2</sub> shows no resonance (an sp<sup>3</sup> CH<sub>2</sub> separates the C=C from the –NH<sub>2</sub> lone pair); the amide CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CONH<sub>2</sub> and the enol ether CH<sub>3</sub>CH<sub>2</sub>OCH=CH<sub>2</sub> do.',
    say: null,
  },

  // ── Additional B · Electronic Effects as Ranking Instruments ──
  // pp. 383–386
  {
    topic: 6,
    kind: 'remember',
    q: 'The inductive rules for acid strength?',
    a: 'Number: Cl<sub>3</sub>C–COOH > Cl<sub>2</sub>CH–COOH > ClCH<sub>2</sub>–COOH > CH<sub>3</sub>–COOH. Distance: CH<sub>3</sub>CHCl–COOH > CH<sub>2</sub>Cl–CH<sub>2</sub>–COOH. Electronegativity: FCH<sub>2</sub>COOH > ClCH<sub>2</sub>COOH > BrCH<sub>2</sub>COOH > ICH<sub>2</sub>COOH. Alkyl: HCOOH > CH<sub>3</sub>COOH. A −I group stabilises the carboxylate anion and strengthens the acid; +I alkyl weakens it',
    why: 'Among –O<sup>−</sup>, –NO<sub>2</sub>, –CN and –F, only –O<sup>−</sup> does not show −I: already electron-rich, it releases electron density (+I).',
    say: null,
  },
  // pp. 384–386
  {
    topic: 6,
    kind: 'remember',
    q: 'Hyperconjugative structures of (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup>, (CH<sub>3</sub>)<sub>2</sub>CH<sup>+</sup>, CH<sub>3</sub>CH<sub>2</sub><sup>+</sup> and CH<sub>3</sub><sup>+</sup>?',
    a: '9, 6, 3 and 0: one per <i>α</i> C–H bond (H on carbons directly attached to the cationic carbon). CH<sub>3</sub><sup>+</sup> has no adjacent carbon, and its vacant p orbital is perpendicular to its own C–H bonds. Propene, about the C=C: 3',
    why: 'Electromeric effect: +E when the π pair shifts to the atom the reagent bonds to (H<sup>+</sup> on C=C), −E when it shifts to the other atom (CN<sup>−</sup> on C=O); it predominates over an opposing inductive effect.',
    say: null,
  },

  // ── Additional C · IUPAC Edge Cases the Papers Use ──
  // pp. 386–388
  {
    topic: 7,
    kind: 'remember',
    q: 'HOOC–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CHO: oxo- or formyl-?',
    a: 'Oxo-: 2-methyl-6-oxohexanoic acid, because the CHO carbon lies in the longest chain through –COOH. Formyl- is only for a –CHO whose carbon is outside the parent (off a ring or chain); 5-formyl-2-methylpentanoic acid is the trap',
    why: 'OHC–CH<sub>2</sub>–CH(CH<sub>3</sub>)–COOH is 2-methyl-4-oxobutanoic acid. Likewise CH<sub>3</sub>CH<sub>2</sub>COOH is propanoic acid: -carboxylic acid is kept for a COOH outside the parent (cyclohexanecarboxylic acid).',
    say: null,
  },
  // pp. 387–388
  {
    topic: 7,
    kind: 'remember',
    q: 'Both numbering directions give the same locant set: which substituent gets the lower number? And an alkyl on an amide nitrogen?',
    a: 'The one cited first alphabetically (bromo before chloro before ethyl before methyl), whatever its size: CH<sub>3</sub>CHBr–CH=CH–CHCl–CH<sub>3</sub> is 2-bromo-5-chlorohex-3-ene. An alkyl on nitrogen takes the locant N- and stays out of the parent: CH<sub>3</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)CONHCH<sub>2</sub>CH<sub>3</sub> is N-ethyl-2-methylbutanamide',
    why: 'CH<sub>3</sub>CON(CH<sub>3</sub>)<sub>2</sub> is N,N-dimethylethanamide. Within the acid derivatives, ester > acyl halide > amide; a common distractor swaps –COCl and –CONH<sub>2</sub>.',
    say: null,
  },

  // ── Additional D · Counting Isomers Systematically ──
  // pp. 388–390
  {
    topic: 8,
    kind: 'remember',
    q: 'How many structural isomers have C<sub>3</sub>H<sub>6</sub>BrCl and C<sub>4</sub>H<sub>10</sub>O?',
    a: 'C<sub>3</sub>H<sub>6</sub>BrCl: 5 on the one propane skeleton, (Br, Cl) at (1,1), (2,2), (1,2), (2,3), (1,3), the end carbons equivalent: 1-bromo-1-chloro-, 2-bromo-2-chloro-, 1-bromo-2-chloro-, 2-bromo-1-chloro- and 1-bromo-3-chloropropane. C<sub>4</sub>H<sub>10</sub>O: 7, four alcohols (butan-1-ol, butan-2-ol, 2-methylpropan-1-ol, 2-methylpropan-2-ol) and three ethers (methoxypropane, 2-methoxypropane, ethoxyethane)',
    why: 'C<sub>3</sub>H<sub>8</sub>O: 3, propan-1-ol, propan-2-ol and methoxyethane.',
    say: null,
  },
  // pp. 389–390
  {
    topic: 8,
    kind: 'remember',
    q: 'Cyclic isomers of C<sub>4</sub>H<sub>7</sub>Cl, and geometrical isomers of hepta-2,4-diene and hexa-2,4-diene?',
    a: 'C<sub>4</sub>H<sub>7</sub>Cl: 7, chlorocyclobutane 1, 1-chloro-1-methylcyclopropane 1, (chloromethyl)cyclopropane 1 and 1-chloro-2-methylcyclopropane 4 (cis and trans, each an enantiomeric pair). Hepta-2,4-diene: 2<sup>2</sup> = 4; symmetric hexa-2,4-diene: 3, its (E,Z) and (Z,E) being one molecule',
    why: 'DoU = (2 × 4 + 2 − 7 − 1)/2 = 1, one ring. Skeletons first, then positions, then stereoisomers; never mix the passes.',
    say: null,
  },

  // ── Additional E · Polarimetry Arithmetic: Specific Rotation and Enantiomeric Excess ──
  // pp. 390–391
  {
    topic: 9,
    kind: 'remember',
    q: '2 g of a compound in 10 mL of solution, in a 25 cm tube, reads +24.6°. Specific rotation?',
    a: '[<i>α</i>] = <i>α</i><sub>obs</sub>/(<i>c</i> × <i>l</i>), <i>c</i> in g mL<sup>−1</sup> and <i>l</i> in dm (cm ÷ 10): <i>c</i> = 0.2 g mL<sup>−1</sup>, <i>l</i> = 2.5 dm, [<i>α</i>] = 24.6/(0.2 × 2.5) = +49.2°',
    why: 'It is a fingerprint constant: enantiomers share the magnitude with opposite signs.',
    say: null,
  },
  // pp. 390–391
  {
    topic: 9,
    kind: 'remember',
    q: 'How does a mixture of enantiomers rotate light?',
    a: '<i>α</i><sub>obs</sub> = [<i>α</i>] × <i>c</i> × <i>l</i> × (excess enantiomer, mol)/(total, mol): only the excess shows, and a racemic mixture shows none. 1 mmol R with 3 mmol S, observed +4.8°: excess 2/4 = 0.5, so each pure enantiomer is 4.8/0.5 = 9.6° (R and S opposite in sign)',
    why: '60% (+) and 40% (−): ee = 0.20, so a pure-enantiomer reading of +6.4° becomes +1.28° at the same <i>c</i> and <i>l</i>.',
    say: null,
  },

  // ── Additional F · Estimation Numericals in Their Real Exam Forms ──
  // pp. 392–394
  {
    topic: 10,
    kind: 'remember',
    q: 'Kjeldahl by back-titration: how do you get %N?',
    a: 'meq of NH<sub>3</sub> = meq of acid taken − meq of NaOH used; %N = 14 × meq of NH<sub>3</sub>/(1000 × <i>w</i>) × 100. For H<sub>2</sub>SO<sub>4</sub>, normality = 2 × molarity: 0.5 g, 50 mL of 0.5 M H<sub>2</sub>SO<sub>4</sub>, back-titre 60 mL of 0.5 M NaOH gives 50 − 30 = 20 meq, 280 mg N, 56%',
    why: '29.5 mg, 20 mL of 0.1 M HCl, 15 mL of 0.1 M NaOH: 0.5 meq, 7.0 mg N, 23.7%. Without the factor 2 the acid above would be 25 meq, less than the 30 of NaOH: a negative ammonia value signals the slip.',
    say: null,
  },
  // pp. 392–394
  {
    topic: 10,
    kind: 'remember',
    q: 'Dumas by the gas law, and the Carius one-liners?',
    a: 'Subtract the aqueous tension, then <i>n</i>(N<sub>2</sub>) = <i>PV</i>/<i>RT</i> and %N = 28 × <i>n</i>(N<sub>2</sub>)/<i>w</i> × 100 (28, not 14). Carius: %X = (at. mass of X/mol. mass of AgX) × <i>m</i>(AgX)/<i>w</i> × 100; %S = (32/233) × <i>m</i>(BaSO<sub>4</sub>)/<i>w</i> × 100',
    why: '0.8 g, 120 mL over water at 300 K and 715 mm (tension 15 mm): <i>n</i> = (700/760)(0.120)/(0.0821 × 300) = 4.49 × 10<sup>−3</sup> mol, %N ≈ 15.7. 0.12 g AgBr from 0.15 g: (80/188)(0.12/0.15) × 100 = 34.0%.',
    say: null,
  },

  // ── Additional H · What JEE and NEET Actually Ask ──
  // pp. 395–396
  {
    topic: 12,
    kind: 'remember',
    q: 'Where do this chapter’s JEE Main and NEET questions come from?',
    a: 'Isomerism and stereochemistry (roughly a third) and purification and analysis (roughly a third) supply about two-thirds; nomenclature and hybridisation roughly a fifth; intermediates and electronic effects roughly an eighth. Analysis questions are disproportionately numerical, isomerism questions counting-based: both reward drilled procedures',
    why: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(OH)–CH=CH–CH<sub>3</sub> shows geometrical, optical and functional isomerism but not metamerism, which needs a divalent group (–O–, –S–, –CO–).',
    say: null,
  },
  // pp. 396–397
  {
    topic: 12,
    kind: 'mistake',
    q: 'Which traps recur in this chapter’s questions?',
    a: 'Oxo- versus formyl-; 2<sup><i>n</i></sup> without the symmetry check (hexa-2,4-diene 3, 2,3-dichlorobutane 3); paper chromatography as adsorption (it is partition, the water in the paper being the stationary phase); the factor of 2 for H<sub>2</sub>SO<sub>4</sub>; <i>R</i><sub>f</sub> read backwards (high <i>R</i><sub>f</sub> = weakly held by the stationary phase, fast); resonance where an sp<sup>3</sup> carbon breaks the conjugation',
    why: 'Steam distillation separates o-nitrophenol (intramolecular H-bond, steam-volatile) from p-nitrophenol (intermolecular H-bond, not steam-volatile).',
    say: null,
  },
];
