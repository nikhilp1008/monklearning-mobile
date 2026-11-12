import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11, Topic 07 "Worked examples & exam practice": pp. 543–550 of the
 * Class 12 Chemistry Master Reference, word for word. The book runs the main
 * chapter as nine "Section N —" headings and a closing "Addendum P — What JEE
 * & NEET Actually Ask"; by the founder's Chemistry 11 p-Block layout (decision
 * 46) its Sections 7 to 9 and that closing section are this one topic, each
 * its own part: Worked Examples (from the middle of p. 543 to p. 545, eight
 * examples), Practice Exercises (pp. 545–546, each answer paired with its
 * question, the "Answers:" heading dropped), Common Pitfalls & Pro-Tips
 * (pp. 546–547; eight bold-lead pitfalls, none labelled a pro-tip) and What
 * JEE & NEET Actually Ask (pp. 547–550; p. 551 starts the supplement). These
 * pages draw nothing.
 *
 * Each example's tag is its level from the book's bracket, then its title, as
 * in Chemistry 11's p-Block. A remark printed after an example's answer is the
 * example's last step. In the exam part the numbered archetypes keep their bold
 * numbered leads; the "Q. … Answer." box inside the first and the six
 * "Representative Q&A" items are question-and-answer pairs, with the options
 * set one per line. Notation as in Topics 01–06: hybrid and orbital labels
 * upright (sp<sup>3</sup>d<sup>2</sup>, 2p, s-character, d orbitals); bonds
 * with an en dash (H–N–H, P–OH, F–F) where the book prints a maths minus;
 * one condition over an arrow (→<sup>MnO₂, Δ</sup>, as in Topic 03); the
 * book's italic emphasis ("dilute", "trans", "because", "reason") set upright.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 13 · pp. 543–550 ─────────────────────────
  {
    n: '13',
    title: 'Worked examples & exam practice: Groups 15 to 18',
    kalam: 'This unit is a dense concentration of “state the exception” questions.',
    blocks: [
      // Section 7 — Worked Examples · pp. 543–545
      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main — Haber process stoichiometry',
        q: '2 mol of N<sub>2</sub> is reacted with exactly 6 mol of H<sub>2</sub> and the reaction is allowed to go to completion. Calculate the volume of NH<sub>3</sub> produced, measured at STP (273 K and 1 atm, 22.4 L per mole).',
        steps: [
          'From N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub>, 2 mol N<sub>2</sub> requires exactly 2 × 3 = 6 mol H<sub>2</sub> — the given quantities are in the exact stoichiometric ratio, so neither reagent is left over. Moles of NH<sub>3</sub> formed = 2 × 2 = 4 mol. At STP, <i>V</i> = 4 × 22.4',
        ],
        ans: '89.6 L of NH<sub>3</sub>.',
      },
      {
        t: 'ex',
        tag: 'NEET — Bond angles down Group 15',
        q: 'Account for the fact that the H–N–H bond angle in NH<sub>3</sub> (107.8°) is larger than the H–P–H angle in PH<sub>3</sub> (93.6°), even though both central atoms carry one lone pair.',
        steps: [
          'Nitrogen is sp<sup>3</sup> hybridised in NH<sub>3</sub>, so the bond angle starts from the tetrahedral value (109.5°) and is compressed somewhat by lone-pair/bond-pair repulsion, landing at 107.8°. Phosphorus, being larger and less electronegative, uses its bonding orbitals with much less s-character (bonding is closer to pure 3p), so there is comparatively little hybridisation-driven widening of the angle and it stays close to the 90° between pure p orbitals, at 93.6° (in the exam form of the answer: the bonding pairs lie farther from the larger, less electronegative P and repel one another less, so the lone pair pushes them closer together). The same trend continues down the group (AsH<sub>3</sub>: 91.8°, SbH<sub>3</sub>: 91.3°), approaching 90° as the central atom’s bonding becomes almost purely p-orbital in character.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main — Copper and nitric acid',
        q: '19.05 g of copper metal (<i>M</i> = 63.5 g mol<sup>−1</sup>) is reacted completely with an excess of dilute nitric acid. Calculate the volume of NO gas liberated at STP (273 K and 1 atm, 22.4 L per mole).',
        steps: [
          'Moles of Cu = 19.05/63.5 = 0.300 mol. The dilute-acid reaction is<br>3Cu + 8HNO<sub>3</sub>(dilute) → 3Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO + 4H<sub>2</sub>O<br>so moles of NO = 0.300 × 2/3 = 0.200 mol. Volume at STP = 0.200 × 22400 = 4480 mL.',
          '(Had the acid instead been concentrated, the same 0.300 mol Cu would have liberated 0.300 × 2 = 0.600 mol of NO<sub>2</sub> (13.44 L; 13.4 L to three significant figures) at STP, since the balanced reaction Cu + 4HNO<sub>3</sub>(conc.) → Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO<sub>2</sub> + 2H<sub>2</sub>O delivers two moles of gas per mole of Cu rather than two-thirds of a mole. The concentration of the acid changes both the identity of the gas and the amount of gas obtained from the same mass of metal.)',
        ],
        ans: '4.48 L of NO.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced — Basicity and titration of a phosphorus oxoacid',
        q: '(a) State the basicity of H<sub>3</sub>PO<sub>2</sub> and justify it structurally. (b) Calculate the volume of 0.1 M NaOH required to completely neutralise 100 mL of 0.05 M H<sub>3</sub>PO<sub>2</sub>.',
        steps: [
          '(a) H<sub>3</sub>PO<sub>2</sub> (hypophosphorous acid) contains one P–OH group and two P–H bonds. Since only the P–OH proton is ionisable, the acid is <b>monobasic</b> — the two P–H hydrogens do not contribute to acidity (though they do make the molecule a strong reducing agent).',
          '(b) Moles of acid = 0.100 L × 0.05 mol L<sup>−1</sup> = 5.0 × 10<sup>−3</sup> mol. Being monobasic, this needs exactly 5.0 × 10<sup>−3</sup> mol of NaOH. Volume of 0.1 M NaOH required = (5.0 × 10<sup>−3</sup>)/0.1 = 0.050 L.',
          '(A student who mistakenly treated H<sub>3</sub>PO<sub>2</sub> as tribasic, on the strength of its formula alone, would have required three times this volume, 150 mL — exactly the trap this fact is designed to catch.)',
        ],
        ans: '50 mL.',
      },
      {
        t: 'ex',
        tag: 'JEE Main — Mass of PCl₅ from white phosphorus',
        q: '620 g of white phosphorus (P<sub>4</sub>, <i>M</i> = 124 g mol<sup>−1</sup>) is treated with an excess of dry chlorine. Calculate the mass of PCl<sub>5</sub> produced, assuming complete reaction.',
        steps: [
          'Moles of P<sub>4</sub> = 620/124 = 5.00 mol. From P<sub>4</sub> + 10Cl<sub>2</sub> → 4PCl<sub>5</sub>, moles of PCl<sub>5</sub> = 5.00 × 4 = 20.0 mol. Molar mass of PCl<sub>5</sub> = 31 + 5(35.5) = 208.5 g mol<sup>−1</sup>. Mass = 20.0 × 208.5',
        ],
        ans: '4170 g (4.17 kg) of PCl<sub>5</sub>.',
      },
      {
        t: 'ex',
        tag: 'NEET — The fluorine bond-enthalpy anomaly',
        q: 'Arrange F<sub>2</sub>, Cl<sub>2</sub>, Br<sub>2</sub>, I<sub>2</sub> in order of increasing bond dissociation enthalpy, and explain why fluorine does not occupy the expected position in this order.',
        steps: [
          'Using the tabulated values (kJ mol<sup>−1</sup>): F<sub>2</sub> = 158.8, Cl<sub>2</sub> = 242.6, Br<sub>2</sub> = 192.8, I<sub>2</sub> = 151.1. A naive extrapolation from atomic size would put fluorine’s bond enthalpy above chlorine’s (smaller atom, shorter and presumably stronger bond), but the F atoms in F<sub>2</sub> sit so close together that the non-bonding lone pairs on the two fluorines experience unusually strong mutual repulsion, which weakens the bond well below the trend line set by the heavier halogens. This is why F<sub>2</sub> falls between Br<sub>2</sub> and I<sub>2</sub> rather than above Cl<sub>2</sub>.',
        ],
        ans: 'Increasing order: I<sub>2</sub> < F<sub>2</sub> < Br<sub>2</sub> < Cl<sub>2</sub>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main — Oxygen from potassium chlorate',
        q: '4.9 g of KClO<sub>3</sub> (<i>M</i> = 122.5 g mol<sup>−1</sup>) is heated to complete decomposition in the presence of MnO<sub>2</sub> catalyst. Calculate the volume of O<sub>2</sub> liberated at STP (273 K and 1 atm, 22.4 L per mole).',
        steps: [
          'Moles of KClO<sub>3</sub> = 4.9/122.5 = 0.0400 mol. From 2KClO<sub>3</sub> →<sup>MnO₂, Δ</sup> 2KCl + 3O<sub>2</sub>, moles of O<sub>2</sub> = 0.0400 × 3/2 = 0.0600 mol. Volume at STP = 0.0600 × 22400 = 1344 mL.',
        ],
        ans: '1.344 L of O<sub>2</sub> (1.3 L to two significant figures, since 4.9 g has two).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced — Identifying xenon compound geometries',
        q: 'Give the hybridisation, number of lone pairs on Xe, and molecular shape of (a) XeF<sub>4</sub>, (b) XeO<sub>3</sub>, and (c) XeOF<sub>4</sub>.',
        steps: [
          '(a) XeF<sub>4</sub>: Xe has 8 valence electrons; 4 are used in Xe–F bonds, leaving 2 lone pairs, for a total of 6 electron domains — octahedral electron geometry, sp<sup>3</sup>d<sup>2</sup> hybridisation, with the two lone pairs positioned trans to each other to minimise repulsion, giving a <b>square planar</b> molecular shape.',
          '(b) XeO<sub>3</sub>: three Xe=O bonds plus one lone pair, four electron domains, sp<sup>3</sup> hybridisation, <b>pyramidal</b> shape (directly analogous to NH<sub>3</sub>).',
          '(c) XeOF<sub>4</sub>: four Xe–F bonds, one Xe=O bond, and one lone pair — six electron domains, sp<sup>3</sup>d<sup>2</sup> hybridisation, octahedral electron geometry with the lone pair occupying one vertex, giving a <b>square pyramidal</b> molecular shape.',
        ],
        ans: '(a) sp<sup>3</sup>d<sup>2</sup>, 2 lone pairs, square planar; (b) sp<sup>3</sup>, 1 lone pair, pyramidal; (c) sp<sup>3</sup>d<sup>2</sup>, 1 lone pair, square pyramidal.',
      },

      // Section 8 — Practice Exercises · pp. 545–546 (answers paired with their questions)
      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Why does nitrogen fail to form a stable pentahalide such as NCl<sub>5</sub>, even though it shows a +5 oxidation state in its oxides?',
            a: 'Nitrogen has no valence d orbitals (only 2s and 2p available), so it cannot expand its covalency beyond four; it therefore cannot accommodate five bonding pairs the way phosphorus can in PCl<sub>5</sub>.',
          },
          {
            q: '[JEE Main] Arrange Cl<sub>2</sub>, Br<sub>2</sub>, F<sub>2</sub>, I<sub>2</sub> in decreasing order of X–X bond dissociation enthalpy.',
            a: 'Cl<sub>2</sub> > Br<sub>2</sub> > F<sub>2</sub> > I<sub>2</sub> (242.6 > 192.8 > 158.8 > 151.1 kJ mol<sup>−1</sup>); fluorine is anomalously low because of lone-pair/lone-pair repulsion across its very short bond.',
          },
          {
            q: '[NEET] What is the basicity of orthophosphorous acid, H<sub>3</sub>PO<sub>3</sub>? Justify with reference to its structure.',
            a: 'Dibasic — H<sub>3</sub>PO<sub>3</sub> has two P–OH groups and one non-ionisable P–H bond; only the P–OH hydrogens are acidic.',
          },
          {
            q: '[JEE Main] Copper reacts with dilute HNO<sub>3</sub> to give a colourless gas X (which turns brown in air) and with concentrated HNO<sub>3</sub> to give a brown gas Y directly. Identify X and Y.',
            a: 'X = NO (colourless, turns brown as 2NO + O<sub>2</sub> → 2NO<sub>2</sub> on contact with air); Y = NO<sub>2</sub> (brown gas, formed directly with concentrated acid).',
          },
          {
            q: '[JEE Advanced] 5.6 L of N<sub>2</sub> at STP (273 K and 1 atm, 22.4 L per mole) is reacted with excess H<sub>2</sub> under Haber-process conditions and goes to 100% conversion. Calculate the mass of NH<sub>3</sub> formed.',
            a: 'Moles of N<sub>2</sub> = 5.6/22.4 = 0.25 mol ⇒ moles of NH<sub>3</sub> = 0.50 mol ⇒ mass = 0.50 × 17 = 8.5 g.',
          },
          {
            q: '[NEET] Explain why SO<sub>2</sub> is described as a temporary bleaching agent while Cl<sub>2</sub> is a permanent one.',
            a: 'SO<sub>2</sub> bleaches by reduction, the nascent hydrogen from moist SO<sub>2</sub> reducing the coloured matter to an often-unstable colourless form that air re-oxidises to the coloured form (temporary); Cl<sub>2</sub> bleaches by oxidation via nascent oxygen from HOCl, permanently destroying the chromophore.',
          },
          {
            q: '[JEE Main] Give the hybridisation and molecular shape of XeF<sub>6</sub>.',
            a: 'sp<sup>3</sup>d<sup>3</sup> hybridisation, seven electron domains (6 bond pairs + 1 lone pair), distorted octahedral shape.',
          },
          {
            q: '[NEET] Arrange HF, HCl, HBr, HI in order of increasing acid strength in water, and explain why the most electronegative halogen gives the weakest acid.',
            a: 'HF < HCl < HBr < HI; despite fluorine’s high electronegativity, the very strong H–F bond (574 kJ mol<sup>−1</sup>) and extensive hydrogen bonding in aqueous HF both suppress ionisation, making it the weakest acid of the four.',
          },
          {
            q: '[JEE Main] Write the products formed when PCl<sub>5</sub> is completely hydrolysed by excess water.',
            a: 'PCl<sub>5</sub> + 4H<sub>2</sub>O → H<sub>3</sub>PO<sub>4</sub> + 5HCl (via the intermediate POCl<sub>3</sub>: PCl<sub>5</sub> + H<sub>2</sub>O → POCl<sub>3</sub> + 2HCl, then POCl<sub>3</sub> + 3H<sub>2</sub>O → H<sub>3</sub>PO<sub>4</sub> + 3HCl).',
          },
          {
            q: '[JEE Advanced] 12.6 g of Na<sub>2</sub>SO<sub>3</sub> (<i>M</i> = 126 g mol<sup>−1</sup>) is treated with excess dilute H<sub>2</sub>SO<sub>4</sub>. Calculate the volume of SO<sub>2</sub> gas liberated at STP (273 K and 1 atm, 22.4 L per mole).',
            a: 'Moles of Na<sub>2</sub>SO<sub>3</sub> = 12.6/126 = 0.100 mol; SO<sub>3</sub><sup>2−</sup> + 2H<sup>+</sup> → H<sub>2</sub>O + SO<sub>2</sub> gives 0.100 mol SO<sub>2</sub>; volume = 0.100 × 22400 = 2240 mL = 2.24 L.',
          },
          {
            q: '[NEET] Name the allotrope of phosphorus that is used commercially because it does not glow, is non-poisonous and is far less reactive than white phosphorus, and explain the structural reason for its lower reactivity relative to white phosphorus.',
            a: 'Red phosphorus; it is polymeric (linked P<sub>4</sub> tetrahedra) rather than discrete strained P<sub>4</sub> units, so it lacks the severe 60° angular strain that makes white phosphorus so reactive.',
          },
          {
            q: '[JEE Main] Which xenon compound is isostructural (same shape) with the ICl<sub>4</sub><sup>−</sup> ion, and what is that shared shape?',
            a: 'XeF<sub>4</sub>; both are square planar (Xe/I: sp<sup>3</sup>d<sup>2</sup>, 2 lone pairs, 4 bonding pairs).',
          },
        ],
      },

      // Section 9 — Common Pitfalls & Pro-Tips · pp. 546–547
      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Basicity of phosphorus oxoacids is about P–OH groups, never total hydrogens.</b> This is worth a permanent mental note: H<sub>3</sub>PO<sub>4</sub> (three P–OH, tribasic) is the clearest example in the family where basicity equals the subscript on H. H<sub>3</sub>PO<sub>3</sub> is dibasic and H<sub>3</sub>PO<sub>2</sub> is monobasic, and both are reducing agents because they carry P–H bonds. If a question gives you the formula alone and asks for basicity, first draw (or recall) the structure and count P–OH groups before answering.',
          '<b>Concentration changes the product, not just the rate, with nitric acid.</b> Dilute HNO<sub>3</sub> + Cu → NO; concentrated HNO<sub>3</sub> + Cu → NO<sub>2</sub>. The same pattern (different products, not just different amounts of the same product) applies to zinc, where dilute acid gives N<sub>2</sub>O and concentrated acid gives NO<sub>2</sub>. Never write the same nitrogen product for both concentrations.',
          '<b>“Higher electronegativity” does not automatically mean “stronger acid.”</b> HF’s weakness among the hydrohalic acids is the standard illustration: bond strength and hydrogen bonding can override the electronegativity argument entirely. Whenever a question tests an acid-strength order among a series with an irregular member, check whether bond enthalpy or hydrogen bonding is the real deciding factor before defaulting to electronegativity.',
          '<b>Distinguish gas/liquid-phase structure from solid-phase structure for PCl<sub>5</sub>.</b> In the gas and liquid phases it is molecular and trigonal bipyramidal; in the solid state it is ionic, [PCl<sub>4</sub>]<sup>+</sup>[PCl<sub>6</sub>]<sup>−</sup>. A question that simply says “the structure of PCl<sub>5</sub>” without specifying phase is testing whether you know both answers exist.',
          '<b>Fluorine’s anomalies all trace back to one cause: it is very small.</b> The low F–F bond enthalpy (lone-pair repulsion), the less-negative-than-chlorine electron gain enthalpy (inter-electronic repulsion in the compact 2p orbitals), and the restriction to a single oxoacid and −1 oxidation state (no valence d orbitals) are three separate facts with the same root explanation. Learn the cause once and you can reconstruct all three effects under exam pressure.',
          '<b>SO<sub>2</sub> bleaches by reduction (temporary); Cl<sub>2</sub> bleaches by oxidation (permanent).</b> This single sentence resolves nearly every “compare the bleaching action of…” question in the p-block.',
          '<b>All three xenon fluorides, plus XeO<sub>3</sub>, XeOF<sub>4</sub> and XeO<sub>4</sub>, are VSEPR problems in disguise.</b> Count Xe’s bonding domains and lone pairs first (electron-domain geometry), then remove the lone-pair positions to name the molecular shape. XeF<sub>2</sub> (3 lone pairs, linear), XeF<sub>4</sub> (2 lone pairs, square planar), and XeF<sub>6</sub> (1 lone pair, distorted octahedral) form a memorable ladder: as fluorines increase and lone pairs decrease, the shape steps from linear to square planar to distorted octahedral.',
          '<b>White phosphorus is the reactive, poisonous, glowing allotrope — always stored under water; red phosphorus is the safe, non-glowing, polymeric one.</b> Do not reverse these in a hurry: white P’s reactivity comes specifically from the 60° ring strain in discrete P<sub>4</sub> tetrahedra, not merely from being “the first allotrope formed.”',
        ],
      },

      // Addendum P — What JEE & NEET Actually Ask · pp. 547–550
      { t: 'part', title: 'What JEE and NEET actually ask' },
      {
        t: 'p',
        html: 'This unit is a dense concentration of “state the exception” questions — nearly every trend in Groups 15–18 has one anomalous member (usually the second-period element, N, O or F, but occasionally a concentration-dependent or phase-dependent twist), and papers return to the same seven or eight anomalies with only the surface wording changed.',
      },
      { t: 'p', html: 'The frequencies below are the book’s estimate from past papers, not official figures.' },
      {
        t: 'p',
        html: '<b>1. Oxoacid basicity of phosphorus.</b> The favourite framing is a “match the acid to its basicity” or “identify the incorrect statement” item built around H<sub>3</sub>PO<sub>2</sub> (monobasic), H<sub>3</sub>PO<sub>3</sub> (dibasic) and H<sub>3</sub>PO<sub>4</sub> (tribasic).',
      },
      {
        t: 'practice',
        items: [
          {
            q: 'Which of the following statements is incorrect?<br>(a) H<sub>3</sub>PO<sub>2</sub> is a monobasic acid.<br>(b) H<sub>3</sub>PO<sub>3</sub> is a dibasic acid.<br>(c) H<sub>3</sub>PO<sub>3</sub> contains a P–H bond and is therefore a reducing agent.<br>(d) H<sub>3</sub>PO<sub>3</sub> is tribasic because its formula contains three hydrogen atoms.',
            a: '(d). Statements (a), (b) and (c) are correct as stated. H<sub>3</sub>PO<sub>3</sub> has only two ionisable P–OH groups; its third hydrogen is bonded directly to phosphorus as a P–H bond and is not ionisable, so the acid is dibasic, not tribasic. Basicity equals the number of P–OH groups, never the total number of hydrogen atoms in the formula.',
          },
        ],
      },
      {
        t: 'p',
        html: '<b>2. Cu + HNO<sub>3</sub>, concentration-dependent products.</b> Nearly every year’s paper somewhere asks for the gas evolved from a metal–nitric acid reaction with the concentration specified, or asks you to balance the equation from scratch. Memorise the two Cu equations exactly (dilute → NO, 3∶8∶3∶2∶4 ratio; concentrated → NO<sub>2</sub>, 1∶4∶1∶2∶2 ratio) since the electron count differs (3-electron transfer per NO vs 1-electron transfer per NO<sub>2</sub>), which is also why the mole ratio of acid to metal differs between the two equations.',
      },
      {
        t: 'p',
        html: '<b>3. Xe compound geometries.</b> The most reliable format is a matching or “identify the shape” question across the full family (XeF<sub>2</sub>, XeF<sub>4</sub>, XeF<sub>6</sub>, XeO<sub>3</sub>, XeOF<sub>4</sub>, XeO<sub>4</sub>), or a request to identify which real molecule is isostructural with a given ion (ICl<sub>4</sub><sup>−</sup> = square planar = XeF<sub>4</sub>; IBr<sub>2</sub><sup>−</sup> = linear = XeF<sub>2</sub>; BrO<sub>3</sub><sup>−</sup> = pyramidal = XeO<sub>3</sub>). Build the answer from electron-domain counting every time rather than memorising shapes in isolation — the underlying VSEPR logic is identical to NH<sub>3</sub>/H<sub>2</sub>O shapes from Class 11.',
      },
      {
        t: 'p',
        html: '<b>4. HX acid strength order.</b> Nearly always phrased as “arrange in order of acid strength” or as an assertion–reason pair (“Assertion: HF is the weakest acid among the hydrohalic acids. Reason: fluorine is the most electronegative halogen.”). The correct handling of that specific assertion–reason pair is: <b>both statements are true, but the reason does NOT correctly explain the assertion</b> — electronegativity is not why HF is weak; H–F bond strength and hydrogen bonding are.',
      },
      {
        t: 'p',
        html: '<b>5. The F<sub>2</sub> bond-enthalpy anomaly.</b> Typically tested by giving a table of bond dissociation enthalpies and asking students to spot which halogen is “out of place,” or by asking directly why F<sub>2</sub> has a lower bond enthalpy than Cl<sub>2</sub>. The answer is always lone-pair/lone-pair repulsion across the very short F–F bond, never “fluorine forms a weaker bond because it is less reactive” (fluorine is, if anything, more reactive — reactivity and bond strength are not the same axis).',
      },
      {
        t: 'p',
        html: '<b>6. SO<sub>2</sub> vs Cl<sub>2</sub> bleaching mechanism.</b> A compare-and-contrast staple: reduction (temporary, SO<sub>2</sub>) versus oxidation (permanent, Cl<sub>2</sub>). A common wrong answer swaps the two mechanisms — always check which gas is described as reducing the coloured matter to an unstable colourless form (that is SO<sub>2</sub>’s reductive mechanism) versus which one liberates nascent oxygen via HOCl (that is Cl<sub>2</sub>’s oxidative mechanism).',
      },
      {
        t: 'p',
        html: '<b>7. Allotropes of phosphorus.</b> Recurrent framings: “which allotrope glows in the dark and why,” “which allotrope is used to manufacture matches / red phosphorus’s non-toxicity,” or “arrange white, red, black phosphorus in order of increasing stability” (white < red < black). The 60° ring-strain explanation for white phosphorus’s reactivity is the fact examiners want stated explicitly, not just the ranking.',
      },
      { t: 'p', html: '<b>Representative questions and answers</b>' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] The number of P–OH bonds and the basicity of H<sub>4</sub>P<sub>2</sub>O<sub>7</sub> (pyrophosphoric acid) are respectively:',
            a: '4 and 4 — pyrophosphoric acid has four P–OH groups and no P–H bonds, so it is tetrabasic.',
          },
          {
            q: '[NEET] A metal M reacts with concentrated HNO<sub>3</sub> to give a brown gas and with dilute HNO<sub>3</sub> to give a colourless gas that turns brown in air. Identify the two gases and the metal’s likely identity from this behaviour alone.',
            a: 'Concentrated acid gives NO<sub>2</sub> (brown); dilute acid gives NO (colourless, turns brown as it oxidises to NO<sub>2</sub> in air). This behaviour is characteristic of a moderately reactive metal like copper; noble metals such as gold and platinum do not react with nitric acid at all (of any concentration), and highly passivating metals like chromium and aluminium resist the concentrated acid specifically.',
          },
          {
            q: '[JEE Advanced] Rank XeF<sub>2</sub>, XeF<sub>4</sub> and XeF<sub>6</sub> by the number of lone pairs on the central Xe atom, and state the geometry associated with each.',
            a: 'XeF<sub>2</sub>: 3 lone pairs, linear. XeF<sub>4</sub>: 2 lone pairs, square planar. XeF<sub>6</sub>: 1 lone pair, distorted octahedral. Lone pairs decrease as fluorine atoms increase, which is the general pattern across the whole series.',
          },
          {
            q: '[NEET] Explain, using bond dissociation enthalpy and hydrogen bonding, why hydrofluoric acid is classified as a weak acid despite fluorine’s extreme electronegativity.',
            a: 'The H–F bond (574 kJ mol<sup>−1</sup>) is unusually strong and resists heterolytic cleavage in water; in addition, HF molecules and F<sup>−</sup>/HF species engage in strong hydrogen bonding in aqueous solution (sometimes forming HF<sub>2</sub><sup>−</sup>), which further suppresses the concentration of free H<sub>3</sub>O<sup>+</sup>. Both effects outweigh the polarising influence of fluorine’s electronegativity, giving HF a p<i>K</i><sub>a</sub> of about 3.2 — a weak acid, unlike the other three hydrohalic acids, which are all strong.',
          },
          {
            q: '[JEE Main] Why does SO<sub>2</sub>’s bleaching action fade with time while chlorine’s bleaching action is permanent?',
            a: 'SO<sub>2</sub> bleaches by reduction: moist SO<sub>2</sub> releases nascent hydrogen, which reduces the coloured compound to a colourless, often unstable product; atmospheric oxygen can re-oxidise this product back to the original coloured substance, so the effect is temporary. Cl<sub>2</sub> bleaches oxidatively, via nascent oxygen released from hypochlorous acid, which destroys the chromophore’s structure outright — an irreversible, permanent change.',
          },
          {
            q: '[JEE Main] Which allotrope of phosphorus is thermodynamically most stable, and why is white phosphorus, despite being the kinetic product of many syntheses, so much more reactive?',
            a: 'Black phosphorus is the most stable allotrope. White phosphorus’s high reactivity comes from the severe angular strain in its discrete tetrahedral P<sub>4</sub> molecules, where the P–P–P bond angle is only 60° — far below the natural bonding angle for phosphorus — so the molecule is under considerable ring strain that is released on reaction.',
          },
        ],
      },
      {
        t: 'p',
        html: 'Across all four groups, the exam-writer’s favourite move is the same: state a general trend, then ask you to name and explain the one member that breaks it. Nitrogen breaks the halide-expansion trend (no pentahalide); fluorine breaks both the bond-enthalpy trend (anomalously weak F–F bond) and the electron-gain-enthalpy trend (less negative than chlorine); oxygen breaks the hydride-boiling-point trend (hydrogen bonding); and concentration itself becomes a variable that silently changes the identity of a reaction product, as with nitric acid and copper. Once you can reliably produce the reason behind each of these exceptions — not just recite the exception — this chapter stops being a memory exercise and becomes a short, coherent argument you can reconstruct from first principles under exam conditions.',
      },
    ],
  },
];
