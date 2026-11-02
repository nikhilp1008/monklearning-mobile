import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Additional Topics A–D, word for word from the Class 11 Chemistry
 * Master Reference. They open with the shared introduction to "Chapter 9:
 * Hydrocarbons — Additional Topics" (p. 439), which is set at the head of
 * Additional topic A's Introduction. Then come:
 * - A Aromaticity as a Decision Procedure (pp. 439–441). Its flow chart,
 *   captioned "Figure 1" in the book, is c11-09-A-d1, and the caption belongs
 *   to the diagram.
 * - B Ozonolysis, Completed (pp. 442–443)
 * - C Alkene Stability, Saytzeff Elimination, and Hydration Regiochemistry
 *   (pp. 443–445)
 * - D Putting Numbers on Free-Radical Selectivity (pp. 445–447; its last
 *   practice answer ends at the top of p. 447)
 * Each addendum prints its practice answers right after its questions. Each
 * answer is set with its own question. E–I are in extras-e-i.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 439–441 ─────────────────────────
  {
    n: 'A',
    title: 'Aromaticity as a Decision Procedure',
    extra: true,
    kalam: 'Delocalisation needs parallel p orbitals.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter has covered the four hydrocarbon families with their preparations, mechanisms, and tests: free-radical substitution, electrophilic addition with Markovnikov and the peroxide exception, ozonolysis of alkenes, alkyne acidity, and electrophilic aromatic substitution with directive effects. Seven examinable extensions remain. Hückel’s rule is stated for benzene but never applied to the ions and rings the papers actually test — Addendum A makes aromatic, anti-aromatic, and non-aromatic a three-question procedure. Addendum B completes ozonolysis: the ring case (o-xylene, which supports the Kekulé structure) and the reverse-puzzle method. Addendum C quantifies what the chapter leaves qualitative — alkene stability, Saytzeff elimination, and the hydration regiochemistry contrast. Addendum D puts numbers on free-radical selectivity (the 1 ∶ 82 ∶ 1600 bromination ratios) and counts exhaustive-substitution products. Addendum E drills the isomer- and bond-counting puzzles. Addendum F turns directive effects into reactivity rankings and synthesis-order planning. Addendum G extends terminal-alkyne chemistry to the ammoniacal-silver and Grignard tests. Each section extends the chapter with material that examinations test.',
      },
      {
        t: 'p',
        html: 'The chapter states Hückel’s rule and verifies it for benzene. The papers then ask about species that are not benzene at all: ions, small rings, fused systems. The rule generalises — NCERT’s three conditions (planarity, complete delocalisation of the π electrons around the ring, and (4<i>n</i> + 2) π electrons, <i>n</i> = 0, 1, 2, …) apply to any cyclic system.',
      },

      { t: 'part', title: 'Method — three gates, in order' },
      {
        t: 'p',
        html: '1. <b>Cyclic and fully conjugated?</b> Every ring atom must carry a p orbital (be sp<sup>2</sup> or sp). One sp<sup>3</sup> ring atom breaks the loop and the species is <b>non-aromatic</b>, whatever the electron count. Cyclopentadiene fails here: its CH<sub>2</sub> carbon is sp<sup>3</sup>, so the π electrons cannot circulate.<br>2. <b>Planar?</b> Delocalisation needs parallel p orbitals. Cyclooctatetraene (8π) escapes anti-aromaticity by puckering into a non-planar tub — it is <b>non-aromatic</b>, not anti-aromatic, because the π system never closes into one plane.<br>3. <b>Count the π electrons in the loop.</b> (4<i>n</i> + 2) (2, 6, 10, …) ⇒ <b>aromatic</b>; 4<i>n</i> (4, 8, …) with gates 1 and 2 passed ⇒ <b>anti-aromatic</b> (destabilised, worse than the open chain). Count a lone pair only if it sits in a p orbital aligned with the ring; a lone pair in an in-plane sp<sup>2</sup> orbital (pyridine’s nitrogen) is not counted.',
      },
      { t: 'fig', id: 'c11-09-A-d1' },
      {
        t: 'table',
        title: 'The canonical set to know cold',
        head: ['Species', 'π e− in loop', 'Verdict', 'Reason'],
        rows: [
          ['Benzene', '6', 'aromatic', '<i>n</i> = 1'],
          ['Naphthalene', '10', 'aromatic', '<i>n</i> = 2'],
          ['Cyclopropenyl cation', '2', 'aromatic', '<i>n</i> = 0; empty p completes the loop'],
          ['Cyclopentadienyl anion', '6', 'aromatic', 'lone pair enters a p orbital'],
          ['Cyclopentadienyl cation', '4', 'anti-aromatic', '4<i>n</i>, <i>n</i> = 1'],
          ['Tropylium (cycloheptatrienyl) cation', '6', 'aromatic', 'empty p on C7 closes the loop'],
          ['Cyclobutadiene', '4', 'anti-aromatic', 'planar, fully conjugated, 4<i>n</i>'],
          ['Cyclooctatetraene', '8', 'non-aromatic', 'non-planar (tub)'],
          ['Cyclopentadiene', '4 (loop broken)', 'non-aromatic', 'one sp<sup>3</sup> carbon breaks conjugation'],
          ['Pyridine', '6', 'aromatic', 'N lone pair is in-plane, uncounted'],
          ['Pyrrole / furan', '6', 'aromatic', 'heteroatom lone pair is in the loop'],
        ],
      },
      {
        t: 'p',
        html: 'This table explains two facts the papers use as building blocks: cyclopentadiene is unexpectedly acidic for a hydrocarbon (its conjugate base is the aromatic cyclopentadienyl anion), and the tropylium ion forms readily (the cation, not the neutral triene, is aromatic).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level — Sort four species',
        q: 'Classify as aromatic, anti-aromatic, or non-aromatic: (a) cyclobutadiene (b) cyclooctatetraene (c) cyclopropenyl cation (d) cyclopentadiene.',
        steps: [
          '(a) Planar, fully conjugated, 4π — anti-aromatic. (b) 8π but puckers out of planarity — non-aromatic. (c) 2 π electrons in a closed loop of three p orbitals, <i>n</i> = 0 — aromatic. (d) An sp<sup>3</sup> CH<sub>2</sub> interrupts the loop — non-aromatic.',
        ],
        ans: '(a) anti-aromatic; (b) non-aromatic; (c) aromatic; (d) non-aromatic.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Which cation is more stable?',
        q: 'Account for the exceptional stability of the tropylium ion (C<sub>7</sub>H<sub>7</sub><sup>+</sup>) compared with the benzyl cation.',
        steps: [
          'Tropylium is a seven-membered ring with an empty p orbital on the seventh carbon: six π electrons delocalise over a complete, planar loop (<i>n</i> = 1) — it is genuinely aromatic, with the charge shared equally by all seven carbons. The benzyl cation is only resonance-stabilised (charge spread over four positions of a pendant system): its benzene ring is aromatic, but the charge is not part of an aromatic loop, and spreading it into the ring disrupts the sextet.',
        ],
        ans: 'Tropylium is aromatic; benzyl is merely conjugated — aromatic delocalisation wins.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] State the three necessary conditions for aromaticity (NCERT’s list).',
            a: 'Planarity; complete delocalisation of π electrons around the ring; (4<i>n</i> + 2) π electrons.',
          },
          {
            q: '[JEE Main] Is the cyclopentadienyl cation aromatic? Explain in one line.',
            a: 'No — it is planar and conjugated but has 4π electrons (4<i>n</i>): anti-aromatic.',
          },
          {
            q: '[JEE Advanced] Why does cyclooctatetraene behave chemically like an ordinary alkene (adds Br<sub>2</sub>, decolourises KMnO<sub>4</sub>) despite having 8π electrons?',
            a: 'It is non-planar (tub-shaped), so its π bonds are effectively localised double bonds, not an aromatic loop — ordinary alkene behaviour follows.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 442–443 ─────────────────────────
  {
    n: 'B',
    title: 'Ozonolysis, Completed',
    extra: true,
    kalam: 'Two extensions carry marks: the aromatic version, and the discipline of the reverse puzzles.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter teaches alkene ozonolysis and the read-backwards method. Two extensions carry marks: the aromatic version, and the discipline of the reverse puzzles.',
      },

      { t: 'part', title: 'B1 — Ozonolysis of a benzene ring: the o-xylene case (an NCERT exercise)' },
      {
        t: 'p',
        html: 'Benzene itself adds ozone to give a triozonide, hydrolysed to three molecules of glyoxal, OHC–CHO. For a substituted benzene the two Kekulé forms cleave differently, and that is the point. o-Xylene (1,2-dimethylbenzene) on ozonolysis gives a <b>mixture of three</b> <i>α</i>-dicarbonyls:<br>• glyoxal, OHC–CHO;<br>• methylglyoxal, CH<sub>3</sub>–CO–CHO;<br>• dimethylglyoxal, CH<sub>3</sub>–CO–CO–CH<sub>3</sub><br>— in the ratio 3 ∶ 2 ∶ 1, exactly what two interconverting Kekulé structures predict: cleaving the form with a single bond between the two methyl-bearing carbons (the other two bonds being double) gives one dimethylglyoxal and two glyoxal, while cleaving the form with a double bond between them gives two methylglyoxal and one glyoxal. <b>A single fixed structure would have given only two of the three products</b> (one Kekulé form cannot produce all three in the observed proportions) — so the trio is experimental evidence for benzene being a resonance hybrid of the two Kekulé forms. This is the standard board answer to “how does the ozonolysis of o-xylene support the Kekulé structure.”',
      },
      {
        t: 'p',
        html: 'A statement trap built on this: the three products do <b>not</b> all contain an sp<sup>3</sup> carbon — glyoxal has none (both its carbons are sp<sup>2</sup>). Only methylglyoxal and dimethylglyoxal carry methyl (sp<sup>3</sup>) carbons.',
      },

      { t: 'part', title: 'B2 — The reverse-puzzle protocol' },
      {
        t: 'p',
        html: 'Given ozonolysis products, rebuild the alkene in three steps:<br>1. Strip the oxygen from each carbonyl and join the carbonyl carbons with a double bond.<br>2. Check the tally: carbons in = carbons out; an aldehyde fragment means the alkene carbon carried an H; a ketone means it carried two alkyl groups.<br>3. <b>Formaldehyde among the products means a terminal</b> =CH<sub>2</sub> (a terminal methylene) — the single most reused diagnostic in this family. If two identical carbonyls result, the double bond sat symmetrically; if a cyclic alkene was ozonolysed, the fragments stay tethered in one chain (one molecule, carbonyls at both ends).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — The C6H8 puzzle',
        q: 'Hydrocarbon X (C<sub>6</sub>H<sub>8</sub>) consumes 2 mol H<sub>2</sub> per mol on catalytic hydrogenation and on ozonolysis gives two moles of the same dialdehyde, OHC–CH<sub>2</sub>–CHO. Identify X.',
        steps: [
          'DoU = (2 × 6 + 2 − 8)/2 = 3. Two moles of H<sub>2</sub> account for two π bonds; the third DoU must be a ring. Ozonolysis gives a single dialdehyde, so the two double bonds must be placed symmetrically in a six-membered ring such that cleaving both leaves two identical OHC–CH<sub>2</sub>–CHO chains: that is <b>cyclohexa-1,4-diene</b> (cut the 1,2 and 4,5 bonds; the two three-carbon bridges are identical).',
        ],
        ans: 'cyclohexa-1,4-diene.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level — o-Xylene’s three products',
        q: 'Write the products of ozonolysis of 1,2-dimethylbenzene and state how the result supports the Kekulé structure of benzene.',
        steps: [
          'As in B1: glyoxal, methylglyoxal, and dimethylglyoxal in a 3 ∶ 2 ∶ 1 ratio. Each Kekulé form alone would give only a subset; the observed mixture is what a rapidly interconverting pair of Kekulé structures (equivalently, a resonance hybrid) must produce.',
        ],
        ans: 'the three <i>α</i>-dicarbonyls in 3 ∶ 2 ∶ 1; the mixture is direct evidence for two equivalent contributing structures.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Ozonolysis of an alkene gives only propanone. Name the alkene.',
            a: '2,3-dimethylbut-2-ene (a symmetric tetrasubstituted alkene cleaving to two identical ketones).',
          },
          {
            q: '[JEE Main] An alkene’s ozonolysis gives ethanal and pentan-3-one. Write the alkene’s structure and IUPAC name (an NCERT exercise).',
            a: 'Join the carbonyl carbons: ethanal contributes a CH<sub>3</sub>–CH= fragment and pentan-3-one a =C(C<sub>2</sub>H<sub>5</sub>)<sub>2</sub> fragment, giving CH<sub>3</sub>CH=C(C<sub>2</sub>H<sub>5</sub>)<sub>2</sub> — carbons 2 + 5 = 7 — which is 3-ethylpent-2-ene.',
          },
          {
            q: '[JEE Main] True or false, with reason: all three ozonolysis products of o-xylene contain an sp<sup>3</sup> carbon.',
            a: 'False — glyoxal (OHC–CHO) has no sp<sup>3</sup> carbon; the statement confuses “two of the three” with all three.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 443–445 ─────────────────────────
  {
    n: 'C',
    title: 'Alkene Stability, Saytzeff Elimination, and Hydration Regiochemistry',
    extra: true,
    kalam: 'Alkene stability rises with the number of alkyl groups on the double bond (hyperconjugation, exactly the α-hydrogen counting of Chapter 8).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter uses “more substituted” inside answers (Topic 02’s first practice answer picks but-2-ene as the major alkene from 2-bromobutane) without ever stating “more substituted = more stable” as a rule, naming the Saytzeff rule, or connecting it to the two rival hydration methods. This addendum names and deploys both.',
      },

      { t: 'part', title: 'C1 — Alkene stability and the Saytzeff rule' },
      {
        t: 'p',
        html: 'Alkene stability rises with the number of alkyl groups on the double bond (hyperconjugation, exactly the <i>α</i>-hydrogen counting of Chapter 8):<br>R<sub>2</sub>C=CR<sub>2</sub> > R<sub>2</sub>C=CHR > RCH=CHR ≈ R<sub>2</sub>C=CH<sub>2</sub> > RCH=CH<sub>2</sub> > CH<sub>2</sub>=CH<sub>2</sub><br>and within a cis/trans pair the <b>trans</b> form is more stable (alkyl groups on opposite sides, less steric crowding). The experimental signature is the heat of hydrogenation: a less stable alkene releases more heat per mole on hydrogenation, because it started higher in energy.',
      },
      {
        t: 'p',
        html: '<b>Saytzeff (Zaitsev) rule:</b> in a dehydrohalogenation or dehydration that can remove hydrogen from more than one <i>β</i>-carbon, the major alkene is the more substituted (more stable) one. 2-bromobutane with alcoholic KOH gives mainly but-2-ene, not but-1-ene — because the elimination “chooses” the more stable product. (The contrast to file away: a bulky base like potassium tert-butoxide reverses the preference and gives the least substituted alkene — the Hofmann product — because the bulky base reaches the least hindered <i>β</i>-hydrogens most easily.)',
      },

      { t: 'part', title: 'C2 — Two ways to hydrate a double bond' },
      {
        t: 'p',
        html: '• <b>Acid-catalysed hydration</b> (H<sub>2</sub>O/H<sup>+</sup>, or cold conc. H<sub>2</sub>SO<sub>4</sub> then water) is Markovnikov: OH lands on the more substituted carbon, via the more stable carbocation — and the carbocation can <b>rearrange</b> (as in the HCl addition of worked example 4 of Topic 02).<br>• <b>Hydroboration–oxidation</b> (B<sub>2</sub>H<sub>6</sub>/THF, then H<sub>2</sub>O<sub>2</sub>/OH<sup>−</sup>) is the anti-Markovnikov complement: OH lands on the less substituted carbon, with no rearrangement. Propene gives propan-2-ol by acid hydration but propan-1-ol by hydroboration–oxidation.',
      },
      {
        t: 'p',
        html: '<b>The identity case NEET often probes:</b> for a symmetrical alkene the two routes coincide — but-2-ene gives butan-2-ol by either method, because “more” and “less” substituted are the same carbon.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level — Which alkene hydrates the same both ways?',
        q: 'Which alkene gives the same alcohol by acidic hydration and by hydroboration–oxidation: but-1-ene, propene, but-2-ene, or 2-methylbut-2-ene?',
        steps: [
          'Only but-2-ene is symmetrical about its double bond: both alkene carbons are –CH(CH<sub>3</sub>) environments, so Markovnikov and anti-Markovnikov placements are the same placement. The other three are unsymmetrical and give regioisomeric products by the two routes.',
        ],
        ans: 'but-2-ene.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Predict the elimination major',
        q: '2-bromo-2-methylbutane is heated with alcoholic KOH. Predict the major product and name the rule.',
        steps: [
          'The brominated carbon has two kinds of <i>β</i>-carbon: the C1 methyl (removal gives the disubstituted alkene 2-methylbut-1-ene) and the C3 methylene (removal gives the trisubstituted alkene 2-methylbut-2-ene). Saytzeff: the more substituted alkene dominates.',
        ],
        ans: '2-methylbut-2-ene (major), by the Saytzeff rule.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Arrange in increasing stability: propene, but-2-ene (trans), 2-methylpropene, cis-but-2-ene.',
            a: 'Order by substitution, with trans above cis within the disubstituted pair and geminal-disubstituted marginally below trans: propene < cis-but-2-ene ≈ 2-methylpropene < trans-but-2-ene.',
          },
          {
            q: '[JEE Main] Which has the larger heat of hydrogenation, but-1-ene or trans-but-2-ene, and what does that imply?',
            a: 'But-1-ene (less substituted, less stable, higher starting energy, more heat released, i.e. a larger magnitude of Δ<i>H</i><sub>hyd</sub>); trans-but-2-ene is the more stable isomer.',
          },
          {
            q: '[JEE Main] Give the product of propene with (i) H<sub>2</sub>O/H<sup>+</sup> and (ii) hydroboration–oxidation.',
            a: '(i) propan-2-ol (Markovnikov); (ii) propan-1-ol (anti-Markovnikov).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 445–447 ─────────────────────────
  {
    n: 'D',
    title: 'Putting Numbers on Free-Radical Selectivity',
    extra: true,
    kalam: 'JEE Main asks for the percentage of each product, and for the total count when substitution is exhaustive.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the qualitative order 3° > 2° > 1° for hydrogen replacement. JEE Main asks for the percentage of each product, and for the total count when substitution is exhaustive. Both are arithmetic on two small data sets.',
      },

      { t: 'part', title: 'D1 — The selectivity ratios' },
      {
        t: 'p',
        html: 'Bromination is highly selective; the relative rates per hydrogen at which Br<sup>•</sup> abstracts hydrogens (gas phase, about 127 °C) are approximately:<br>1° ∶ 2° ∶ 3° = 1 ∶ 82 ∶ 1600<br>(Chlorination is far less selective — roughly 1 ∶ 3.8 ∶ 5 at 25 °C — because the more reactive Cl<sup>•</sup> radical is less choosy. This contrast is itself a favourite statement question: bromination is selective, chlorination is fast but unselective.)',
      },
      {
        t: 'p',
        html: '<b>Product-share formula:</b> each type of hydrogen contributes in proportion to (number of such H) × (its relative rate):',
      },
      {
        t: 'formula',
        kicker: 'Product-share formula',
        main: '% (product) = (<i>N</i><sub>H</sub> × <i>r</i>)/∑(<i>N</i><sub>H</sub> × <i>r</i>) × 100',
        legend: [
          '<i>N</i><sub>H</sub> = number of hydrogens of the type that gives this product',
          '<i>r</i> = relative rate per hydrogen for that type (1° ∶ 2° ∶ 3° = 1 ∶ 82 ∶ 1600 for Br<sup>•</sup>)',
          '∑ = sum over every type of hydrogen in the molecule',
        ],
        note: null,
      },

      { t: 'part', title: 'D2 — Exhaustive substitution counting' },
      {
        t: 'p',
        html: 'With excess halogen, count the distinct structures at each substitution level. For ethane + excess Br<sub>2</sub> (diffused sunlight):',
      },
      {
        t: 'defgrid',
        title: 'Product — Distinct structures',
        rows: [
          { k: 'C<sub>2</sub>H<sub>5</sub>Br', v: '1' },
          { k: 'C<sub>2</sub>H<sub>4</sub>Br<sub>2</sub>', v: '2 (1,1- and 1,2-)' },
          { k: 'C<sub>2</sub>H<sub>3</sub>Br<sub>3</sub>', v: '2 (1,1,1- and 1,1,2-)' },
          { k: 'C<sub>2</sub>H<sub>2</sub>Br<sub>4</sub>', v: '2 (1,1,1,2- and 1,1,2,2-)' },
          { k: 'C<sub>2</sub>HBr<sub>5</sub>', v: '1' },
          { k: 'C<sub>2</sub>Br<sub>6</sub>', v: '1' },
        ],
      },
      {
        t: 'p',
        html: 'Total: <b>9 bromo derivatives</b>. The symmetry trick: at each level, putting <i>k</i> bromines on C<sub>2</sub>H<sub>6</sub> is the same problem as putting 6 − <i>k</i> bromines, read in reverse (C<sub>2</sub>H<sub>4</sub>Br<sub>2</sub> mirrors C<sub>2</sub>H<sub>2</sub>Br<sub>4</sub>) — so you only ever enumerate half the table.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Numerical Level — Percentage of 2-bromopropane',
        q: 'With the relative reactivity 1° ∶ 2° ∶ 3° = 1 ∶ 82 ∶ 1600, find the percentage yield of 2-bromopropane in the monobromination of propane.',
        steps: [
          'Propane has 6 primary H (the two CH<sub>3</sub>) and 2 secondary H (the CH<sub>2</sub>). Weighted contributions: primary = 6 × 1 = 6; secondary = 2 × 82 = 164. Share of the 2° product:<br>164/(6 + 164) × 100 = 164/170 × 100',
        ],
        ans: '96.47% 2-bromopropane (96% to two significant figures, as 82 has two) and 3.53% 1-bromopropane (3.5%) — selectivity beats statistics when the ratio is 82 ∶ 1.',
      },
      {
        t: 'ex',
        tag: 'NEET Level — Isobutane’s major product',
        q: 'Excess isobutane reacts with Br<sub>2</sub> in light. The major product contains how many primary carbon atoms?',
        steps: [
          'Isobutane, (CH<sub>3</sub>)<sub>3</sub>CH, has nine 1° H and one 3° H. With <i>r</i>(3°) = 1600, the tertiary product swamps everything: tert-butyl bromide, (CH<sub>3</sub>)<sub>3</sub>CBr, is essentially the only product. Its three methyls are primary carbons.',
        ],
        ans: 'three.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] Using 1 ∶ 82 ∶ 1600, compute the percentage of 1-bromo-2-methylpropane in the monobromination of isobutane.',
            a: 'Primary: 9 × 1 = 9; tertiary: 1 × 1600 = 1600; share of the 1° product = 9/1609 × 100 ≈ 0.56%.',
          },
          {
            q: '[NEET] Why is bromination of alkanes described as selective while chlorination is not?',
            a: 'Br<sup>•</sup> is less reactive (its H-abstraction is endothermic), so it discriminates strongly between 1°, 2°, 3° hydrogens (1 ∶ 82 ∶ 1600); the more reactive Cl<sup>•</sup> abstracts almost indiscriminately (≈ 1 ∶ 3.8 ∶ 5), giving near-statistical mixtures.',
          },
          {
            q: '[JEE Main] How many monochloro structural products does C<sub>4</sub>H<sub>10</sub> give (both isomers considered)?',
            a: 'Four: 1-chlorobutane and 2-chlorobutane from n-butane; 1-chloro-2-methylpropane and 2-chloro-2-methylpropane from isobutane.',
          },
        ],
      },
    ],
  },
];
