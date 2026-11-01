/**
 * KEY POINTS for Chemistry Class 11, Chapter 9 (Hydrocarbons).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: the opening section, Classification of Hydrocarbons, is 0 (no
 * points); Topics 01–04 (alkanes, alkenes, alkynes, arenes) are 1–4;
 * Additional topics A–G are 5–11; Additional topic H, the Summary Checklist,
 * is 12 (no points); Additional topic I, What JEE and NEET Actually Ask (the
 * book's Addendum P), is 13. No point refers to another topic by number.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key Definitions and Cheat Sheet Box. Common mistakes:
 * its Common Student Pitfalls. Exam shortcuts: its Pro-Tips. `say`: the cheat
 * sheet's first two memory aids, word for word, in the Ch 1–4 form: no
 * quotation marks, and a label after " — " (where the book gives its own
 * gloss, that gloss is the label). The arenes' first aid, "Aromatic
 * Substitutes, never Adds", carries the label "benzene under ordinary
 * conditions", because benzene does add under forcing conditions (p. 434).
 * Additional topics: the addenda's methods, worked examples and practice
 * answers. Additional topic I: its distribution and traps.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Formulas
 * upright; condensed formulas stay text, single bonds as en dashes
 * (CH<sub>3</sub>–CH<sub>2</sub>–), "=" and "≡" for double and triple bonds;
 * R and X generic upright letters. Hybrid and orbital labels upright, NCERT
 * style (sp<sup>3</sup>, 2p); σ, π upright. cis/trans, o-/m-/p-, n-, tert-
 * upright; effect labels upright (−I, +R, +M). Degrees of carbon 1°, 2°, 3°.
 * Radicals with a raised bullet (Cl<sup>•</sup>). Variables italic: <i>n</i>,
 * <i>k</i>, <i>N</i><sub>H</sub>, <i>r</i>, <i>M</i>; p<i>K</i><sub>a</sub>
 * with an upright p.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Alkanes ──
  // pp. 403–404, 408
  {
    topic: 1,
    kind: 'remember',
    q: 'Alkanes: general formula, shape of each carbon, bond lengths, and the general combustion equation?',
    a: 'C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub> for open-chain alkanes only (closing a ring loses two H: cycloalkanes C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>). Every carbon sp<sup>3</sup>, tetrahedral, 109.5°; C–C 154 pm, C–H 112 pm. Complete combustion: C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub> + ((3<i>n</i> + 1)/2) O<sub>2</sub> → <i>n</i>CO<sub>2</sub> + (<i>n</i> + 1)H<sub>2</sub>O',
    why: 'Propane, <i>n</i> = 3: C<sub>3</sub>H<sub>8</sub> + 5O<sub>2</sub> → 3CO<sub>2</sub> + 4H<sub>2</sub>O, so 2.2 g (0.05 mol) gives 0.15 mol CO<sub>2</sub>, 3.36 L (3.4 L to 2 s.f.) at STP (22.4 L mol<sup>−1</sup>).',
    say: null,
  },
  // pp. 404–405, 409–411
  {
    topic: 1,
    kind: 'remember',
    q: 'The four routes to an alkane, and what each does to the number of carbons?',
    a: 'Hydrogenation of an alkene or alkyne (H<sub>2</sub> over Pt, Pd or Ni) and reduction of R–X (not the fluoride) with Zn and dilute HCl keep the carbons. Wurtz, 2R–X + 2Na in dry ether → R–R, doubles them and is clean only for a symmetrical alkane (two different halides give three products). From a sodium carboxylate: decarboxylation with soda lime (NaOH + CaO) loses one carbon as Na<sub>2</sub>CO<sub>3</sub>; Kolbe electrolysis couples two alkyl groups',
    why: 'Ethane: by Kolbe from sodium acetate (two CH<sub>3</sub> joined), by decarboxylation from sodium propanoate (one carbon lost).',
    say: 'Wurtz Welds, Decarboxylation Drops one — Wurtz doubles, decarboxylation subtracts a carbon.',
  },
  // pp. 405–406, 410–411
  {
    topic: 1,
    kind: 'mixup',
    q: 'Staggered or eclipsed ethane: which has the 0° dihedral angle, and which is more stable?',
    a: 'Eclipsed is 0°: front and back C–H bonds line up, torsional strain and energy are highest. Staggered is 60°: clouds farthest apart, lowest energy, most stable. The gap is only about 12.5 kJ mol<sup>−1</sup>, so rotation is almost free and the conformers cannot be isolated',
    why: 'Energy minima (staggered) at 60°, 180° and 300°; maxima (eclipsed) at 0°, 120°, 240° and 360°.',
    say: 'Staggered = Spread = Stable — ethane’s conformations.',
  },
  // pp. 404–405, 409–411
  {
    topic: 1,
    kind: 'mistake',
    q: 'Halogenation: does “reactivity order” mean F<sub>2</sub> > Cl<sub>2</sub> > Br<sub>2</sub> > I<sub>2</sub> or 3° > 2° > 1°?',
    a: 'They are two different orders; tag which one the question means. The halogen order runs down the group (iodination is slow and reversible). The hydrogen order follows radical stability: a 3° C–H breaks most easily because the 3° radical is most stabilised (hyperconjugation)',
    why: 'In the chlorination of methane, ethane comes from termination (<sup>•</sup>CH<sub>3</sub> + <sup>•</sup>CH<sub>3</sub>): initiation only splits Cl<sub>2</sub>, and propagation gives CH<sub>3</sub>Cl and HCl.',
    say: null,
  },
  // pp. 408–410
  {
    topic: 1,
    kind: 'shortcut',
    q: 'How many monochloro products does 2-methylbutane give (ignoring stereoisomers)? The fast way?',
    a: '4. Don’t draw products: count distinct hydrogen environments, symmetry first, one environment = one product. The two CH<sub>3</sub> on C2 are one type; then the 3° H on C2, the CH<sub>2</sub> on C3 and the CH<sub>3</sub> at C4',
    why: 'Neopentane, C<sub>5</sub>H<sub>12</sub>, gives just 1 (all twelve H equivalent); 2,5-dimethylhexane gives 3.',
    say: null,
  },

  // ── Topic 02 · Alkenes ──
  // pp. 412–413, 416, 420
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the C=C bond made of, and what are the two colour tests for it?',
    a: 'One σ bond (sp<sup>2</sup>–sp<sup>2</sup> head-on, ≈ 397 kJ mol<sup>−1</sup>) plus one weaker π bond (sideways 2p–2p, ≈ 284 kJ mol<sup>−1</sup>): C=C ≈ 681 kJ mol<sup>−1</sup> and 134 pm, against C–C 348 kJ mol<sup>−1</sup> and 154 pm. The exposed π electrons draw electrophiles, so alkenes add. Tests: orange Br<sub>2</sub> in CCl<sub>4</sub> and purple Baeyer’s reagent (cold, dilute, alkaline KMnO<sub>4</sub>) are both decolourised',
    why: 'Baeyer’s reagent turns ethene into the glycol ethane-1,2-diol; hot acidic KMnO<sub>4</sub> cleaves the bond instead: but-2-ene → 2CH<sub>3</sub>COOH.',
    say: null,
  },
  // pp. 413, 415, 420
  {
    topic: 2,
    kind: 'remember',
    q: 'Propene + HBr: which product, and why? What changes with peroxide?',
    a: 'Without peroxide, 2-bromopropane (Markovnikov): H<sup>+</sup> adds first to the CH<sub>2</sub> end, giving the more stable secondary carbocation, which Br<sup>−</sup> caps. With organic peroxide, HBr adds by a free-radical chain the other way (anti-Markovnikov, Kharasch): 1-bromopropane. HX reactivity: HI > HBr > HCl',
    why: 'The peroxide effect is HBr-only: H–Cl (∼431 kJ mol<sup>−1</sup>) is too strong for the peroxide radical to break, and with H–I (∼297 kJ mol<sup>−1</sup>) the iodine radicals recombine instead of adding.',
    say: 'Br Breaks the Rule — peroxide effect = HBr only.',
  },
  // pp. 412–413, 415, 418–420
  {
    topic: 2,
    kind: 'mixup',
    q: 'cis- or trans-but-2-ene: which is more polar, and which comes from but-2-yne with Lindlar’s catalyst?',
    a: 'cis: both CH<sub>3</sub> on the same side, so the bond dipoles add (≈ 0.33 D), and H<sub>2</sub>/Lindlar’s catalyst gives it. trans: opposite sides, dipoles cancel (≈ 0), and (for solids) a higher melting point; Na in liquid NH<sub>3</sub> gives it',
    why: 'Check the gate first: each doubly bonded carbon must carry two different groups. Pent-2-ene passes; 2-methylbut-2-ene and 2-methylprop-1-ene fail (a carbon with two CH<sub>3</sub>).',
    say: 'cis = Same Side, Still polar — geometrical isomers.',
  },
  // pp. 418–420, 508 (errata: Section 5 answer 5)
  {
    topic: 2,
    kind: 'mistake',
    q: '3-Methylbut-1-ene + HCl: is the major product 2-chloro-3-methylbutane?',
    a: 'No, 2-chloro-2-methylbutane. H<sup>+</sup> on the terminal CH<sub>2</sub> gives a 2° cation on C2; a 1,2-hydride shift from C3 turns it into a more stable 3° cation, which Cl<sup>−</sup> caps. After writing the first carbocation, always ask whether a 1,2-shift reaches a more stable one',
    why: '2,3-Dimethylbut-1-ene + HBr needs no shift: protonation already gives a 3° cation on C2, so 2-bromo-2,3-dimethylbutane.',
    say: null,
  },
  // pp. 418–420
  {
    topic: 2,
    kind: 'shortcut',
    q: 'From ozonolysis products back to the alkene: the fast way?',
    a: 'Join the two carbonyl carbons with a double bond (C=O + O=C → C=C). A ketone fragment means that carbon carried two alkyl groups; an aldehyde means it carried an H',
    why: 'Propanal + ethanal → CH<sub>3</sub>CH<sub>2</sub>–CH=CH–CH<sub>3</sub>, pent-2-ene (C<sub>5</sub>H<sub>10</sub>); ethanal alone → but-2-ene.',
    say: null,
  },

  // ── Topic 03 · Alkynes ──
  // pp. 421–422, 429
  {
    topic: 3,
    kind: 'remember',
    q: 'The C≡C bond: what is it made of, what shape, and how does it compare with C=C and C–C?',
    a: 'One σ (sp–sp) plus two π bonds at right angles; each carbon sp, H–C–C 180° (linear). C≡C ≈ 823 kJ mol<sup>−1</sup>, 120 pm; C=C ≈ 681 kJ mol<sup>−1</sup>, 134 pm; C–C ≈ 348 kJ mol<sup>−1</sup>, 154 pm: the strongest, shortest C–C bond of the chapter',
    why: 'C<sub><i>n</i></sub>H<sub>2<i>n</i>−2</sub>; the first member is ethyne (acetylene), made from calcium carbide: CaC<sub>2</sub> + 2H<sub>2</sub>O → Ca(OH)<sub>2</sub> + C<sub>2</sub>H<sub>2</sub>.',
    say: 'sp = sharpest, shortest, strongest, sourest — sp carbon: shortest bond, most acidic.',
  },
  // pp. 421–422, 424
  {
    topic: 3,
    kind: 'remember',
    q: 'Acidity of the terminal C–H: the two orders, the reason, and the reaction?',
    a: 'HC≡CH > H<sub>2</sub>C=CH<sub>2</sub> > CH<sub>3</sub>–CH<sub>3</sub>, tracking s-character (sp 50% > sp<sup>2</sup> 33% > sp<sup>3</sup> 25%): more s-character, more electronegative carbon, more stable carbanion. HC≡CH > CH<sub>3</sub>–C≡CH > CH<sub>3</sub>–C≡C–CH<sub>3</sub> (no acidic H). Na or NaNH<sub>2</sub> makes an acetylide: HC≡CH + Na → HC≡C<sup>−</sup>Na<sup>+</sup> + ½H<sub>2</sub>; with NaNH<sub>2</sub> the by-product is NH<sub>3</sub>',
    why: '“Acidic” only compared with alkenes and alkanes: ethyne cannot turn litmus red.',
    say: null,
  },
  // pp. 424–425, 428–429
  {
    topic: 3,
    kind: 'mixup',
    q: 'Two HX or one X<sub>2</sub> on an alkyne: gem- or vicinal dihalide?',
    a: 'Two HX give a gem-dihalide (both X on one carbon), each addition Markovnikov. One X<sub>2</sub> spreads across the bond, giving a 1,2-dihaloalkene; a second X<sub>2</sub> gives the tetrahalide',
    why: 'Propyne + 2HBr → CH<sub>3</sub>CBr<sub>2</sub>CH<sub>3</sub>, 2,2-dibromopropane; ethyne + 2Br<sub>2</sub> → CHBr<sub>2</sub>–CHBr<sub>2</sub>, 1,1,2,2-tetrabromoethane.',
    say: null,
  },
  // pp. 425–427, 429
  {
    topic: 3,
    kind: 'mistake',
    q: 'Ethyne + water with HgSO<sub>4</sub> in dilute H<sub>2</sub>SO<sub>4</sub> at 333 K: is the product ethanol?',
    a: 'No: never stop at the enol, it tautomerises to a carbonyl compound. Ethyne gives the aldehyde acetaldehyde (CH<sub>2</sub>=CH–OH → CH<sub>3</sub>CHO); every higher alkyne gives a ketone, the OH going to the more substituted carbon (Markovnikov)',
    why: 'Propyne → propanone; but-1-yne → butan-2-one, a methyl ketone, so a positive iodoform test.',
    say: 'ethyne is the odd one out — aldehyde, not ketone.',
  },
  // pp. 425, 427–429
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Which liberates H<sub>2</sub> with sodium: but-1-yne, but-2-yne or but-2-ene? The fast way?',
    a: 'But-1-yne only. Point to the actual hydrogen: it must sit directly on a triply bonded carbon (≡C–H). But-2-yne has no ≡C–H; but-2-ene has only sp<sup>2</sup> and sp<sup>3</sup> C–H',
    why: 'A base works only if its conjugate acid is weaker than the alkyne (p<i>K</i><sub>a</sub> ≈ 25): NaNH<sub>2</sub> does (NH<sub>3</sub> ≈ 38), NaOH does not (water ≈ 16).',
    say: null,
  },

  // ── Topic 04 · Aromatic Hydrocarbons ──
  // pp. 430–432, 437
  {
    topic: 4,
    kind: 'remember',
    q: 'Benzene: shape, bond lengths, and how its resonance energy is measured?',
    a: 'C<sub>6</sub>H<sub>6</sub>: a planar regular hexagon, every carbon sp<sup>2</sup>, every angle 120°, all six C–C bonds 139 pm (between C–C 154 pm and C=C 134 pm). It is a resonance hybrid of two Kekulé structures with 6 delocalised π electrons; resonance energy ≈ 150 kJ mol<sup>−1</sup>, the shortfall in its heat of hydrogenation',
    why: 'Cyclohexene releases about 120 kJ mol<sup>−1</sup>, so three isolated C=C should release about 360 kJ mol<sup>−1</sup>; benzene releases about 150 kJ mol<sup>−1</sup> less.',
    say: null,
  },
  // pp. 432, 434, 437–438
  {
    topic: 4,
    kind: 'remember',
    q: 'Electrophilic aromatic substitution: the three steps, and the electrophile in each of the five reactions?',
    a: 'Generate E<sup>+</sup> → the π cloud attacks E<sup>+</sup>, giving the arenium ion (one sp<sup>3</sup> carbon, aromaticity lost; slow, rate-determining) → a base removes H<sup>+</sup> and aromaticity returns. Nitration (conc. HNO<sub>3</sub> + conc. H<sub>2</sub>SO<sub>4</sub>, 323–333 K): NO<sub>2</sub><sup>+</sup>. Halogenation (Cl<sub>2</sub>, anhydrous FeCl<sub>3</sub> or AlCl<sub>3</sub>): Cl<sup>+</sup>. Sulphonation (oleum, reversible): SO<sub>3</sub>. Friedel–Crafts alkylation: R<sup>+</sup>; acylation: RCO<sup>+</sup>',
    why: 'Benzene substitutes because addition would destroy the delocalised sextet; only forcing conditions make it add: 3H<sub>2</sub>/Ni → cyclohexane, 3Cl<sub>2</sub>/UV → C<sub>6</sub>H<sub>6</sub>Cl<sub>6</sub> (BHC).',
    say: 'Aromatic Substitutes, never Adds — benzene under ordinary conditions.',
  },
  // pp. 431, 434–436, 438
  {
    topic: 4,
    kind: 'mixup',
    q: '–OH, –NO<sub>2</sub>, –Cl, –COOH: activating or deactivating, o/p- or m-directing?',
    a: '–OH: activating, o/p. –NO<sub>2</sub>: deactivating, m. –COOH: deactivating, m. –Cl: deactivating yet o/p, the halogen exception: its −I effect slows attack everywhere (rate), while its lone-pair +R donation stabilises only the o/p arenium ions (orientation)',
    why: 'Toluene (–CH<sub>3</sub>, activating) nitrates faster than benzene, mainly to o- and p-nitrotoluene; nitrobenzene nitrates more slowly, mainly to 1,3-dinitrobenzene.',
    say: 'Halogens deactivate but still point o/p — the halogen exception.',
  },
  // pp. 430, 434, 437
  {
    topic: 4,
    kind: 'mistake',
    q: 'Does benzene decolourise bromine water or Baeyer’s reagent, like an alkene?',
    a: 'No: aromaticity blocks ordinary addition, so the usual unsaturation tests fail for arenes. A compound that resists bromine water and Baeyer’s reagent but burns with a sooty, luminous flame (high carbon-to-hydrogen ratio) is almost certainly aromatic',
    why: 'Its combustion: 2C<sub>6</sub>H<sub>6</sub> + 15O<sub>2</sub> → 12CO<sub>2</sub> + 6H<sub>2</sub>O.',
    say: null,
  },
  // pp. 430–431, 436–437
  {
    topic: 4,
    kind: 'shortcut',
    q: 'Hückel’s rule in one pass: in what order do you check?',
    a: 'Cyclic, planar and fully conjugated first; only then count the delocalised π electrons: (4<i>n</i> + 2), that is 2, 6, 10 … (<i>n</i> = 0, 1, 2 …), means aromatic. Benzene: 6 = 4(1) + 2',
    why: '8 π electrons is not of the form 4<i>n</i> + 2; 4<i>n</i> is the anti-aromatic count, and only for a planar, fully conjugated ring.',
    say: null,
  },

  // ── Additional A · Aromaticity as a Decision Procedure ──
  // pp. 439–441
  {
    topic: 5,
    kind: 'remember',
    q: 'The three gates, in order, for aromatic, anti-aromatic or non-aromatic?',
    a: '1 Cyclic and fully conjugated: every ring atom sp<sup>2</sup> or sp, with a p orbital. 2 Planar. Failing either means non-aromatic, whatever the electron count. 3 Count the π electrons in the loop: (4<i>n</i> + 2) ⇒ aromatic, 4<i>n</i> ⇒ anti-aromatic. A lone pair counts only if it sits in a p orbital aligned with the ring',
    why: 'Pyridine’s N lone pair is in an in-plane sp<sup>2</sup> orbital, so not counted (6 π, aromatic); pyrrole’s and furan’s heteroatom lone pair is in the loop (6 π, aromatic).',
    say: null,
  },
  // pp. 440–441
  {
    topic: 5,
    kind: 'remember',
    q: 'Naphthalene, cyclopropenyl cation, cyclopentadienyl anion and cation, tropylium, cyclobutadiene, cyclooctatetraene, cyclopentadiene: verdicts?',
    a: 'Aromatic: cyclopropenyl cation (2 π, <i>n</i> = 0), cyclopentadienyl anion (6), tropylium cation (6), and naphthalene (10). Anti-aromatic: cyclobutadiene (4, planar, fully conjugated) and cyclopentadienyl cation (4). Non-aromatic: cyclooctatetraene (8, but a non-planar tub) and cyclopentadiene (one sp<sup>3</sup> CH<sub>2</sub> breaks the loop)',
    why: 'So cyclopentadiene is unexpectedly acidic for a hydrocarbon (its anion is aromatic), and the aromatic tropylium ion is more stable than the merely conjugated benzyl cation.',
    say: null,
  },

  // ── Additional B · Ozonolysis, Completed ──
  // pp. 442–443
  {
    topic: 6,
    kind: 'remember',
    q: 'Ozonolysis of o-xylene: products, ratio, and what it proves?',
    a: 'Glyoxal OHC–CHO, methylglyoxal CH<sub>3</sub>–CO–CHO and dimethylglyoxal CH<sub>3</sub>–CO–CO–CH<sub>3</sub>, 3 ∶ 2 ∶ 1. The Kekulé form with a single bond between the two methyl-bearing carbons gives 1 dimethylglyoxal + 2 glyoxal; the other gives 2 methylglyoxal + 1 glyoxal. No single fixed structure gives all three, so benzene is a hybrid of the two Kekulé forms',
    why: 'A statement trap: glyoxal has no sp<sup>3</sup> carbon, so “all three products contain an sp<sup>3</sup> carbon” is false.',
    say: null,
  },
  // pp. 442–443
  {
    topic: 6,
    kind: 'remember',
    q: 'C<sub>6</sub>H<sub>8</sub> takes 2 mol H<sub>2</sub> per mol and on ozonolysis gives two moles of OHC–CH<sub>2</sub>–CHO. What is it?',
    a: 'Cyclohexa-1,4-diene. DoU = (2 × 6 + 2 − 8)/2 = 3; the two H<sub>2</sub> account for two π bonds, so the third DoU is a ring; one dialdehyde, twice, needs the two C=C placed symmetrically in the six-membered ring',
    why: 'Formaldehyde among the products means a terminal =CH<sub>2</sub>. Ethanal + pentan-3-one → CH<sub>3</sub>CH=C(C<sub>2</sub>H<sub>5</sub>)<sub>2</sub>, 3-ethylpent-2-ene.',
    say: null,
  },

  // ── Additional C · Alkene Stability, Saytzeff Elimination, and Hydration Regiochemistry ──
  // pp. 443–444
  {
    topic: 7,
    kind: 'remember',
    q: 'The alkene stability order, and the Saytzeff rule?',
    a: 'R<sub>2</sub>C=CR<sub>2</sub> > R<sub>2</sub>C=CHR > RCH=CHR ≈ R<sub>2</sub>C=CH<sub>2</sub> > RCH=CH<sub>2</sub> > CH<sub>2</sub>=CH<sub>2</sub> (more alkyl groups on the C=C, more hyperconjugation), and trans above cis (less crowding). A less stable alkene releases more heat on hydrogenation. Saytzeff: when H can leave from more than one β-carbon, the more substituted alkene is the major product',
    why: '2-Bromo-2-methylbutane with alcoholic KOH gives mainly 2-methylbut-2-ene. A bulky base such as potassium tert-butoxide reverses this, giving the least substituted (Hofmann) alkene.',
    say: null,
  },
  // p. 444
  {
    topic: 7,
    kind: 'mixup',
    q: 'Acid-catalysed hydration or hydroboration–oxidation: where does the OH go?',
    a: 'H<sub>2</sub>O/H<sup>+</sup>: Markovnikov, OH on the more substituted carbon, via a carbocation that can rearrange. B<sub>2</sub>H<sub>6</sub>/THF, then H<sub>2</sub>O<sub>2</sub>/OH<sup>−</sup>: anti-Markovnikov, OH on the less substituted carbon, no rearrangement. Propene gives propan-2-ol by the first, propan-1-ol by the second',
    why: 'A symmetrical alkene gives the same alcohol both ways: but-2-ene → butan-2-ol.',
    say: null,
  },

  // ── Additional D · Putting Numbers on Free-Radical Selectivity ──
  // pp. 445–446
  {
    topic: 8,
    kind: 'remember',
    q: 'Monobromination of propane with 1° ∶ 2° ∶ 3° = 1 ∶ 82 ∶ 1600: what percentage is 2-bromopropane?',
    a: 'Share = <i>N</i><sub>H</sub> × <i>r</i>/∑(<i>N</i><sub>H</sub> × <i>r</i>) × 100. Propane: 6 primary H × 1 = 6; 2 secondary H × 82 = 164; 164/170 × 100 = 96.47% 2-bromopropane (3.53% 1-bromopropane)',
    why: 'Chlorination is only about 1 ∶ 3.8 ∶ 5: the more reactive Cl<sup>•</sup> is less choosy, so bromination is selective and chlorination fast but unselective.',
    say: null,
  },
  // pp. 445–446
  {
    topic: 8,
    kind: 'remember',
    q: 'Ethane with excess Br<sub>2</sub> in diffused sunlight: how many bromo derivatives?',
    a: '9: C<sub>2</sub>H<sub>5</sub>Br 1; C<sub>2</sub>H<sub>4</sub>Br<sub>2</sub> 2 (1,1- and 1,2-); C<sub>2</sub>H<sub>3</sub>Br<sub>3</sub> 2; C<sub>2</sub>H<sub>2</sub>Br<sub>4</sub> 2; C<sub>2</sub>HBr<sub>5</sub> 1; C<sub>2</sub>Br<sub>6</sub> 1. Putting <i>k</i> bromines on ethane is the same problem as putting 6 − <i>k</i>, so you enumerate only half',
    why: 'Isobutane: nine 1° H × 1 = 9 against one 3° H × 1600, so (CH<sub>3</sub>)<sub>3</sub>CBr is essentially the only product (1° share 9/1609 ≈ 0.56%).',
    say: null,
  },

  // ── Additional E · Counting Puzzles: Isomers, Hydrogenation Reversals, and Bond Tallies ──
  // pp. 447–448
  {
    topic: 9,
    kind: 'remember',
    q: 'How many isomers of C<sub>8</sub>H<sub>10</sub> contain a benzene ring, and how many alkenes hydrogenate to 2-methylbutane?',
    a: 'C<sub>8</sub>H<sub>10</sub>: 4, ethylbenzene and o-, m-, p-xylene (split the side-chain carbons, then place them). 2-Methylbutane: 3, 2-methylbut-1-ene, 2-methylbut-2-ene and 3-methylbut-1-ene; a C=C can sit between any two adjacent carbons that both carry H, symmetry-equivalent places counted once',
    why: 'n-Pentane: 2 structural (pent-1-ene, pent-2-ene), 3 counting cis- and trans-pent-2-ene. Neopentane: none, since every C–C bond touches the quaternary carbon, which has no H.',
    say: null,
  },
  // pp. 447–448
  {
    topic: 9,
    kind: 'remember',
    q: 'How many σ and π bonds are there in naphthalene, and in benzene?',
    a: 'Naphthalene, C<sub>10</sub>H<sub>8</sub>: 11 C–C σ (6 + 6 − 1 for the shared edge) + 8 C–H = 19 σ, and 5 π. Benzene: 6 C–C + 6 C–H = 12 σ, and 3 π. Any Kekulé form gives the same tally (benzene has two, naphthalene three)',
    why: 'A hydrocarbon with DoU = 3 that takes 2 mol H<sub>2</sub> has one ring plus two C=C or one C≡C: hydrogenation never touches a ring.',
    say: null,
  },

  // ── Additional F · EAS Reactivity Rankings and the Order of Operations ──
  // pp. 448–449
  {
    topic: 10,
    kind: 'remember',
    q: 'Decreasing reactivity toward EAS: benzene, chlorobenzene, phenol, nitrobenzene, toluene?',
    a: 'Phenol > toluene > benzene > chlorobenzene > nitrobenzene: strong +M donor, weak alkyl donor, bare ring, weakly deactivating halogen, strongly deactivating nitro. Each extra acceptor slows the ring further: chlorobenzene > p-nitrochlorobenzene > 2,4-dinitrochlorobenzene',
    why: 'Likewise toluene > p-nitrotoluene > p-dinitrobenzene: the donor ring is fastest, the acceptor-only ring slowest.',
    say: null,
  },
  // pp. 449–450
  {
    topic: 10,
    kind: 'shortcut',
    q: 'Benzene to p-nitrobromobenzene, and to m-nitrochlorobenzene: which group goes in first?',
    a: 'The director you need goes in first, because the first group sets the compass for the second. Para: brominate, then nitrate (nitrating first would force meta). Meta: nitrate, then chlorinate (Cl<sub>2</sub>, anhydrous FeCl<sub>3</sub>)',
    why: 'Never plan Friedel–Crafts after nitration: nitrobenzene is too deactivated. For p-nitrotoluene, alkylate first (CH<sub>3</sub>Cl, anhydrous AlCl<sub>3</sub>), then nitrate.',
    say: null,
  },

  // ── Additional G · Terminal Alkynes: The Two Further Tests ──
  // pp. 450–451
  {
    topic: 11,
    kind: 'remember',
    q: 'What do terminal alkynes give with ammoniacal silver and copper(I) solutions?',
    a: 'Precipitates: R–C≡C–H + [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> → R–C≡C–Ag↓ (white) + NH<sub>4</sub><sup>+</sup> + NH<sub>3</sub>; with [Cu(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>, R–C≡C–Cu↓ (red). Internal alkynes, alkenes and alkanes give nothing: no ≡C–H to displace',
    why: 'So ammoniacal AgNO<sub>3</sub> tells propyne (white precipitate) from propene, and pent-1-yne from pent-2-yne.',
    say: null,
  },
  // pp. 450–451
  {
    topic: 11,
    kind: 'mistake',
    q: '4 g of propyne with excess sodium: does it liberate half a mole of H<sub>2</sub>?',
    a: 'No, 0.05 mol: 2RC≡CH + 2Na → 2RC≡CNa + H<sub>2</sub>, and 4 g of propyne (<i>M</i> = 40) is 0.1 mol. With CH<sub>3</sub>MgBr each acidic H releases one CH<sub>4</sub>: 1 mol of propyne gives 1 mol CH<sub>4</sub>, 22.7 L at the 1-bar STP (22.4 L at the old STP)',
    why: 'Ethyne has two acidic H: 0.2 mol with excess CH<sub>3</sub>MgBr gives 0.4 mol CH<sub>4</sub>, 0.4 × 22.7 = 9.08 L.',
    say: null,
  },

  // ── Additional I · What JEE and NEET Actually Ask ──
  // p. 452
  {
    topic: 13,
    kind: 'remember',
    q: 'Which hydrocarbon family carries the most weight in JEE Main and NEET, and what do the questions reward?',
    a: 'Alkenes, highest (addition, peroxide effect, ozonolysis, stability, hydration), where counting and regiochemistry dominate; alkanes and aromatics high; alkynes moderate, nearly all acidity-driven tests. Aromatic questions are short and conceptual; alkane questions split between mechanism steps and selectivity arithmetic',
    why: 'Name the condition first: peroxide = anti-Markovnikov (HBr only); no peroxide = most stable carbocation; Lindlar = cis, Na/liq. NH<sub>3</sub> = trans; alkyne hydration = carbonyl.',
    say: null,
  },
  // pp. 453–454
  {
    topic: 13,
    kind: 'mistake',
    q: 'Which traps recur in hydrocarbon questions?',
    a: 'The peroxide effect applied to HCl or HI (it is HBr-only); alkyne hydration stopped at the enol; formaldehyde read as a triple-bond sign (it marks a terminal =CH<sub>2</sub>); every 4<i>n</i> ring called anti-aromatic (cyclooctatetraene and cyclopentadiene are non-aromatic); Markovnikov read backwards (the H of HX goes to the carbon richer in H)',
    why: 'Statement pairs hide one false clause: neopentane melts higher than n-pentane, but boils lower.',
    say: null,
  },
];
