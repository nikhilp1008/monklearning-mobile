import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 8 (Microbes in Human Welfare), Additional topics A to G, word for word from the Class 12 Biology
 * Master Reference (book pp. 455 to 478): the shared introduction (p. 455 lines 1 to 10) opens A's Introduction;
 * A "Biochemical Equations of Fermentation" (p. 455 line 11 to p. 458 line 2), B "Antibiotic Classification by Spectrum
 * and Mode of Action" (p. 458 to p. 460), C "Quantitative BOD Calculations in Sewage Treatment" (p. 461 to p. 463),
 * D "Biogas Stoichiometry and Yield Calculations" (p. 463 to p. 465), E "Environmental Parameters in Biocontrol and
 * Biofertilisers" (p. 465 to p. 468), F "Answer Key Summary: Additional Topics A to E" (p. 468 to p. 469) and
 * G "What NEET Actually Asks" (the book's "Addendum P", p. 469 to p. 478). Page 479 is the next chapter.
 *
 * Topic indexes in the chapter: A = 6, B = 7, C = 8, D = 9, E = 10, F = 11, G = 12.
 * No figure in these pages (only ruled table lines). Em dashes are written as colons or commas, number-over-number
 * fractions are stacked, "mg/L" is written mg L^-1 and numeric ranges carry an en dash.
 */

const EST = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 455–458 ─────────────────────────
  {
    n: 'A',
    title: 'Biochemical Equations of Fermentation',
    extra: true,
    kalam: 'This section adds the balanced equations, the carbon-count verification, and the yield calculations.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter provides a solid foundation in the five NCERT sections: household fermentation, industrial microbiology, sewage treatment, biogas production, and biocontrol/biofertilisers. These Additional topics supply five quantitative and mechanistic layers that go beyond the chapter: the stoichiometric equations balancing fermentation pathways, an antibiotic classification by spectrum and mode of action, quantitative BOD calculations for sewage treatment, biogas yield calculations from the methanogenesis equation, and the environmental parameters governing biocontrol efficacy. Each section is designed to close the gap between what the chapter teaches and what questions can ask beyond the chapter.',
      },
      {
        t: 'p',
        html: `The chapter names the end products (lactic acid, ethanol, CO<sub>2</sub>) but gives no balanced equations and does not show how the starting substrate determines the product yield. Questions on these equations can be set, and the book says CUET occasionally requires balanced equations ${EST}. This section adds the balanced equations, the carbon-count verification, and the yield calculations. Beyond NCERT: the equations and yields in this topic come from the book, not from NCERT.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Identifying the fermentation type.</b> Three fermentation pathways are examinable:<br>1. <b>Lactic acid fermentation</b>: <i>Lactobacillus</i> converts one glucose molecule into two molecules of lactic acid. In homolactic fermentation (the equation below) no gas is released; heterolactic bacteria also make CO<sub>2</sub> and ethanol.<br>2. <b>Alcoholic fermentation</b>: <i>Saccharomyces cerevisiae</i> converts one glucose into two ethanol and two CO<sub>2</sub>.<br>3. <b>Acetic acid fermentation</b>: <i>Acetobacter aceti</i> oxidises ethanol to acetic acid using oxygen.',
      },
      {
        t: 'p',
        html: '<b>Balancing the equation.</b> Carbon atoms must balance on both sides. One glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) contains 6 carbon atoms; the products must also total 6 carbons.',
      },
      {
        t: 'p',
        html: '<b>Yield calculations.</b> From the balanced equation, one mole of glucose yields a predictable number of moles of product.',
      },
      { t: 'p', html: '<b>Balanced Equations</b>' },
      {
        t: 'formula',
        kicker: 'Lactic acid fermentation',
        main: 'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> →<sup><i>Lactobacillus</i></sup> 2 C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'Carbon check: 1 glucose (6 C) produces 2 lactate (2 × 3 = 6 C). Balanced. The equation shows that 180 g glucose yields 2 × 90 = 180 g lactic acid, a 1 ∶ 1 mass yield for lactic acid from glucose.',
      },
      {
        t: 'formula',
        kicker: 'Alcoholic fermentation',
        main: 'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> →<sup><i>Saccharomyces</i></sup> 2 C<sub>2</sub>H<sub>5</sub>OH + 2 CO<sub>2</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'Carbon check: 1 glucose (6 C) → 2 ethanol (2 × 2 = 4 C) + 2 CO<sub>2</sub> (2 × 1 = 2 C) = 6 C. Balanced.',
      },
      {
        t: 'p',
        html: '<b>Acetic acid fermentation:</b> This is a two-step process. First, alcoholic fermentation produces ethanol. Then <i>Acetobacter</i> oxidises ethanol, using one molecule of oxygen per molecule of ethanol:',
      },
      {
        t: 'formula',
        kicker: 'Acetic acid fermentation',
        main: 'C<sub>2</sub>H<sub>5</sub>OH + O<sub>2</sub> →<sup><i>Acetobacter aceti</i></sup> CH<sub>3</sub>COOH + H<sub>2</sub>O',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'Atom check: left side 2 C, 6 H, 3 O; right side 2 C, 6 H, 3 O. Balanced.<br><br>Note from NCERT: <i>Acetobacter aceti</i> produces acetic acid from ethanol. The overall process requires oxygen (aerobic).',
      },
      {
        t: 'table',
        title: 'Standard Relationships',
        head: ['Fermentation type', 'Microbe', 'C atoms from glucose', 'Gas released?'],
        rows: [
          ['Lactic acid', '<i>Lactobacillus</i>', '2 lactate share all 6 C', 'No (homolactic)'],
          ['Alcoholic', '<i>Saccharomyces cerevisiae</i>', '4 C in ethanol + 2 C in 2 CO<sub>2</sub>', 'Yes (CO<sub>2</sub>)'],
          ['Acetic acid', '<i>Acetobacter aceti</i>', 'Ethanol oxidised to acetic acid', 'No'],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Balancing the Lactic Acid Equation. Write the balanced chemical equation for the conversion of glucose into lactic acid by <i>Lactobacillus</i>, and state the number of lactic acid molecules produced from one glucose molecule.',
        steps: [
          'Starting with one glucose molecule (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>), <i>Lactobacillus</i> produces two molecules of lactic acid (C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>). The balanced equation is:<br>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2 C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>',
          'Carbon balance: 1 glucose contains 6 carbon atoms; 2 lactic acid molecules contain 2 × 3 = 6 carbon atoms. Two molecules of lactic acid are produced per glucose molecule.',
        ],
        ans: 'The balanced equation is C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2 C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>; two molecules of lactic acid are produced.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'Carbon Balance in Alcoholic Fermentation. In alcoholic fermentation by <i>Saccharomyces cerevisiae</i>, one molecule of glucose yields two molecules of ethanol and two molecules of carbon dioxide. How many carbon atoms from one glucose molecule end up in ethanol, and how many in CO<sub>2</sub>?',
        steps: [
          'One glucose molecule contains 6 carbon atoms. In alcoholic fermentation:<br>• Two ethanol molecules: each contains 2 carbons, so 2 × 2 = 4 carbons end up in ethanol.<br>• Two CO<sub>2</sub> molecules: each contains 1 carbon, so 2 × 1 = 2 carbons end up in CO<sub>2</sub>.<br>• Total: 4 + 2 = 6 carbon atoms, confirming the reaction is carbon-balanced.',
        ],
        ans: '4 carbon atoms in ethanol; 2 carbon atoms in CO<sub>2</sub>.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: 'Identifying the Fermentation Type. A student observes that a bacterial culture produces lactic acid from glucose without releasing any gas. Name the bacterium and write the balanced equation.',
        steps: [
          'The description matches lactic acid fermentation by <i>Lactobacillus</i>. The balanced equation:<br>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2 C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>',
          'No CO<sub>2</sub> is released in homolactic fermentation (the equation above), which distinguishes it from alcoholic fermentation; heterolactic bacteria also make CO<sub>2</sub> and ethanol.',
        ],
        ans: '<i>Lactobacillus</i>; C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2 C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the balanced equation for alcoholic fermentation by <i>Saccharomyces cerevisiae</i>, identifying the products.',
            a: 'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2 C<sub>2</sub>H<sub>5</sub>OH + 2 CO<sub>2</sub>. Products: ethanol and carbon dioxide.',
          },
          {
            q: '[CUET] State whether CO<sub>2</sub> is released during lactic acid fermentation by <i>Lactobacillus</i>. Give a reason.',
            a: 'No CO<sub>2</sub> is released in homolactic fermentation: all 6 carbons of glucose end in 2 lactic acid; no carbon is lost as gas. In contrast, alcoholic fermentation releases CO<sub>2</sub>.',
          },
          {
            q: '[NEET] One molecule of glucose undergoes alcoholic fermentation. How many molecules of ethanol and CO<sub>2</sub> are produced in total?',
            a: 'Two molecules of ethanol and two molecules of CO<sub>2</sub> are produced (total 4 molecules).',
          },
          {
            q: '[NEET] Acetic acid is produced from ethanol by <i>Acetobacter aceti</i>. Write the balanced equation for this oxidation reaction.',
            a: 'C<sub>2</sub>H<sub>5</sub>OH + O<sub>2</sub> → CH<sub>3</sub>COOH + H<sub>2</sub>O',
          },
          {
            q: '[CUET] Compare the gas released during lactic acid fermentation and alcoholic fermentation in terms of presence or absence.',
            a: 'Homolactic fermentation (as written): no gas released. Alcoholic fermentation: CO<sub>2</sub> is released (2 molecules per glucose).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 458–460 ─────────────────────────
  {
    n: 'B',
    title: 'Antibiotic Classification by Spectrum and Mode of Action',
    extra: true,
    kalam: 'Penicillin inhibits the synthesis of bacterial cell wall peptidoglycan by binding to the transpeptidase enzyme.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter introduces penicillin as the first antibiotic discovered (as NCERT states) and defines antibiotics as microbe-produced chemicals that kill or retard other microbes. It does not classify antibiotics by their spectrum (narrow vs broad) or by their mechanism of action (cell wall synthesis inhibition, protein synthesis inhibition, nucleic acid synthesis inhibition). NEET and CUET test both dimensions ${EST}. Beyond NCERT: the spectrum and mechanism classification in this topic comes from the book, not from NCERT; NCERT does not classify antibiotics by spectrum, and spectrum labels vary between sources.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Spectrum classification.</b> Antibiotics are classified as narrow-spectrum (effective against a limited group of bacteria, often Gram-positive or Gram-negative only) or broad-spectrum (effective against both groups).',
      },
      {
        t: 'p',
        html: '<b>Mechanism of action.</b> Four main mechanisms are tested:<br>1. Inhibition of cell wall synthesis: e.g., penicillin (binds transpeptidase, the penicillin-binding protein, and so prevents peptidoglycan cross-linking)<br>2. Inhibition of protein synthesis: e.g., tetracycline (binds 30S ribosomal subunit, blocking aminoacyl-tRNA entry)<br>3. Inhibition of nucleic acid synthesis: e.g., quinolones (inhibit DNA gyrase)<br>4. Disruption of cell membrane integrity: e.g., polymyxin (disrupts membrane)',
      },
      {
        t: 'table',
        title: 'Classification Table',
        head: ['Antibiotic', 'Spectrum', 'Mechanism of action', 'Target structure'],
        rows: [
          ['Penicillin', 'Narrow-spectrum (mainly Gram-positive)', 'Inhibits peptidoglycan cross-linking', 'Bacterial cell wall'],
          ['Streptomycin', 'Broad-spectrum', 'Binds 30S ribosomal subunit, inhibits protein synthesis', 'Ribosome'],
          ['Tetracycline', 'Broad-spectrum', 'Binds 30S, blocks aminoacyl-tRNA entry', 'Ribosome'],
          ['Chloramphenicol', 'Broad-spectrum', 'Binds 50S ribosomal subunit, inhibits peptide bond formation', 'Ribosome'],
          ['Erythromycin', 'Broad-spectrum (most active against Gram-positive bacteria)', 'Binds 50S, blocks translocation', 'Ribosome'],
          ['Ciprofloxacin (quinolone)', 'Broad-spectrum', 'Inhibits DNA gyrase (topoisomerase II)', 'Nucleic acids'],
          ['Polymyxin B', 'Narrow-spectrum (Gram-negative)', 'Disrupts cell membrane integrity', 'Cell membrane'],
        ],
      },
      {
        t: 'p',
        html: 'Note from NCERT: Penicillin was the first antibiotic discovered by Alexander Fleming from <i>Penicillium notatum</i> (Fleming’s mould is now classified as <i>Penicillium rubens</i>). It was later developed into a drug by Ernest Chain and Howard Florey, who shared the 1945 Nobel Prize in Physiology or Medicine with Fleming.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'Spectrum Classification. Which of the following is a broad-spectrum antibiotic?<br><b>(a)</b> Penicillin<br><b>(b)</b> Tetracycline<br><b>(c)</b> Vancomycin<br><b>(d)</b> Polymyxin',
        steps: [
          'Penicillin is narrow-spectrum, targeting mainly Gram-positive bacteria. Vancomycin is also narrow-spectrum, reserved for resistant Gram-positive infections. Polymyxin is primarily effective against Gram-negative bacteria.',
          'Tetracycline is effective against both Gram-positive and Gram-negative bacteria, so it is broad-spectrum. It binds the 30S ribosomal subunit.',
        ],
        ans: '(b) Tetracycline.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: 'Mechanism of Action. Name the mechanism by which penicillin kills bacteria and state why it does not harm human cells.',
        steps: [
          'Penicillin inhibits the synthesis of bacterial cell wall peptidoglycan by binding to the transpeptidase enzyme (also called penicillin-binding proteins), preventing cross-linking of the glycan chains. This weakens the cell wall, and bacterial cells burst due to osmotic pressure.',
          'Human cells lack cell walls: they have only plasma membranes. Therefore, penicillin selectively targets bacterial cells without harming human cells.',
        ],
        ans: 'Inhibition of cell wall synthesis; human cells lack cell walls, so they are unaffected.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: 'Ribosomal Target Comparison. Streptomycin and tetracycline both inhibit bacterial protein synthesis. Name the ribosomal subunit each binds to and explain why this selectivity makes them useful as antibiotics.',
        steps: [
          'Streptomycin binds to the 30S ribosomal subunit of bacteria. Tetracycline also binds to the 30S subunit, specifically blocking the entry of aminoacyl-tRNA into the ribosome. (Chloramphenicol and erythromycin, by contrast, bind the 50S subunit.)',
          'Bacterial ribosomes are 70S, made of 30S and 50S subunits; eukaryotic cytoplasmic ribosomes are 80S, made of 40S and 60S subunits, with different structures. This prokaryotic specificity is why these antibiotics selectively kill bacteria without disrupting protein synthesis in human host cells. (Mitochondrial ribosomes of human cells resemble bacterial ones, so some of these drugs have side effects.)',
        ],
        ans: 'Streptomycin binds 30S; tetracycline binds 30S; the bacterial 30S and 50S subunits are absent from eukaryotic cytoplasmic ribosomes (40S and 60S), conferring selective toxicity.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] Define narrow-spectrum and broad-spectrum antibiotics, giving one example of each.',
            a: 'Narrow-spectrum: effective against limited bacterial groups; e.g., penicillin (mainly Gram-positive). Broad-spectrum: effective against both Gram-positive and Gram-negative; e.g., tetracycline.',
          },
          {
            q: '[NEET] Which antibiotic inhibits cell wall synthesis?<br><b>(a)</b> Streptomycin<br><b>(b)</b> Tetracycline<br><b>(c)</b> Penicillin<br><b>(d)</b> Chloramphenicol',
            a: '(c) Penicillin.',
          },
          {
            q: '[NEET] Explain why antibiotics that target bacterial ribosomes do not harm human cells.',
            a: 'Bacterial ribosomes consist of 70S (30S + 50S) subunits. Human ribosomes are 80S (40S + 60S) in the cytoplasm. Antibiotics targeting 30S or 50S subunits do not bind human ribosomes effectively, conferring selective toxicity (mitochondrial ribosomes of human cells resemble bacterial ones, so some of these drugs have side effects).',
          },
          {
            q: '[CUET] Name the first antibiotic discovered and its source organism.',
            a: 'Penicillin, from the mould <i>Penicillium notatum</i>, discovered by Alexander Fleming.',
          },
          {
            q: '[NEET High-Difficulty] Rifampicin inhibits bacterial RNA polymerase. Name the cellular process it blocks and explain why it does not harm human cells.',
            a: 'Rifampicin blocks transcription (RNA synthesis). It binds the β subunit of bacterial RNA polymerase; the eukaryotic RNA polymerases that transcribe human DNA have a different structure and are not inhibited, so human cells are spared.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 461–463 ─────────────────────────
  {
    n: 'C',
    title: 'Quantitative BOD Calculations in Sewage Treatment',
    extra: true,
    kalam: 'BOD measures the oxygen demand created by organic matter.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter defines BOD as the amount of oxygen that microbes would consume in oxidising the organic matter in 1 litre of water (NCERT: if all of it were oxidised) and explains that secondary treatment reduces BOD. It does not provide the calculation method or practice with data. CUET and NEET occasionally ask numerical BOD questions ${EST}. Beyond NCERT: the calculation, the 5-day test and the values in this topic come from the book, not from NCERT.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>BOD calculation formula.</b> BOD is measured in mg of O<sub>2</sub> consumed per litre of water sample:',
      },
      {
        t: 'formula',
        kicker: 'BOD calculation formula',
        main: 'BOD = (DO<sub>initial</sub> − DO<sub>final</sub>) × dilution factor',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'Where DO is dissolved oxygen in mg L<sup>−1</sup>. If the sample is diluted before incubation, the dilution factor is the total volume of the diluted sample divided by the volume of the original sample; multiplying by it converts the oxygen used in the diluted sample back to the oxygen demand of the undiluted sewage. The standard test (BOD<sub>5</sub>) measures the oxygen used in 5 days at 20°C, which is only a part of the oxygen that would be used if all the organic matter were oxidised.',
      },
      {
        t: 'p',
        html: '<b>Key dissolved oxygen values.</b> Standard DO for clean water: 8–10 mg L<sup>−1</sup> at 20°C. Sewage effluent typically has DO near zero; treated water should have DO closer to clean water.',
      },
      {
        t: 'p',
        html: '<b>Threshold BOD for discharge.</b> Indian standards typically require BOD below 20–30 mg L<sup>−1</sup> for discharge into inland waters.',
      },
      {
        t: 'table',
        title: 'Standard Values',
        head: ['Water type', 'Typical BOD range'],
        rows: [
          ['Clean water', '1–2 mg L<sup>−1</sup>'],
          ['Polluted water (raw sewage)', '100–400 mg L<sup>−1</sup>'],
          ['Treated effluent (target)', 'Below 30 mg L<sup>−1</sup>'],
          ['Drinking-water source (CPCB class A)', '2 mg L<sup>−1</sup> or less'],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'BOD Calculation. A 50 mL sample of sewage is diluted to 250 mL with aerated distilled water. The initial dissolved oxygen (DO) of the diluted sample is 8.0 mg L<sup>−1</sup>. After 5 days of incubation at 20°C, the DO falls to 2.0 mg L<sup>−1</sup>. Calculate the BOD of the original sewage.',
        steps: [
          '<b>Step 1:</b> DO consumed by diluted sample = 8.0 − 2.0 = 6.0 mg L<sup>−1</sup>.',
          '<b>Step 2:</b> Dilution factor = <frac><num>total volume</num><den>volume of original sample</den></frac> = <frac><num>250</num><den>50</den></frac> = 5.',
          '<b>Step 3:</b> BOD of original sample = 6.0 × 5 = 30 mg L<sup>−1</sup>.',
        ],
        ans: 'BOD = 30 mg L<sup>−1</sup>.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'Comparing Treatment Efficiency. Two sewage treatment plants discharge treated effluent. Plant A has effluent with BOD of 150 mg L<sup>−1</sup>; Plant B has effluent with BOD of 20 mg L<sup>−1</sup>. Which effluent is safer for discharge into a river and why?',
        steps: [
          'A BOD of 150 mg L<sup>−1</sup> indicates a high concentration of organic matter still present: if discharged, the river’s dissolved oxygen would be rapidly consumed as microbes decompose this matter, potentially causing fish kills.',
          'A BOD of 20 mg L<sup>−1</sup> is within acceptable discharge limits for inland waters (typically below 30 mg L<sup>−1</sup>). The organic load is low enough that the river can assimilate it without severe oxygen depletion.',
          'Plant B’s effluent is safer. The secondary (biological) treatment at Plant B has been more effective at reducing the organic load.',
        ],
        ans: 'Plant B’s effluent (BOD = 20 mg L<sup>−1</sup>) is safer; lower BOD means less organic pollution and less oxygen demand on the receiving water body.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: 'Understanding BOD Direction. A water sample from a lake has a BOD of 8 mg L<sup>−1</sup>. After a factory starts discharging waste into the lake, the BOD rises to 180 mg L<sup>−1</sup>. Explain what this increase in BOD indicates about the lake’s water quality.',
        steps: [
          'BOD measures the oxygen demand created by organic matter. An increase from 8 mg L<sup>−1</sup> to 180 mg L<sup>−1</sup> indicates that the factory discharge has introduced a large amount of organic matter into the lake. Microbes will now consume the lake’s dissolved oxygen at a much higher rate to decompose this waste, potentially dropping DO to levels that cannot support fish and other aquatic life.',
          'The lake has become polluted with organic waste. This is why effluent BOD must be reduced before discharge, to prevent oxygen depletion in natural water bodies.',
        ],
        ans: 'The BOD increase indicates severe organic pollution from factory discharge; the lake water quality has deteriorated significantly.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define BOD and state its unit.',
            a: 'BOD (Biochemical Oxygen Demand) is the amount of oxygen that microbes would consume in oxidising the organic matter in 1 litre of water (NCERT: if all of it were oxidised). The standard laboratory test measures what is used in 5 days at 20°C (BOD<sub>5</sub>), which is only a part of this. Unit: mg L<sup>−1</sup>.',
          },
          {
            q: '[CUET] A 100 mL water sample is diluted to 500 mL. Initial DO is 9.0 mg L<sup>−1</sup> and final DO after 5 days is 3.0 mg L<sup>−1</sup>. Calculate the BOD of the original sample.',
            a: 'DO consumed = 9.0 − 3.0 = 6.0 mg L<sup>−1</sup>. Dilution factor = <frac><num>500</num><den>100</den></frac> = 5. BOD = 6.0 × 5 = 30 mg L<sup>−1</sup>.',
          },
          {
            q: '[NEET] Why is high BOD harmful to aquatic life in rivers?',
            a: 'High BOD means a large amount of organic matter is present. When this water enters a river, native microbes rapidly consume dissolved oxygen to decompose the organic matter. If the oxygen consumption rate exceeds the re-aeration rate, DO falls to levels that cannot support fish and aerobic aquatic life, causing fish kills.',
          },
          {
            q: '[CUET] What is the typical BOD of treated sewage effluent discharged into inland waters in India?',
            a: 'Typically below 30 mg L<sup>−1</sup> for discharge into inland waters in India (as per pollution control standards).',
          },
          {
            q: '[NEET High-Difficulty] A student measures the DO of a river water sample as 2 mg L<sup>−1</sup> and the BOD as 250 mg L<sup>−1</sup>. Is this water sample likely from a polluted or clean section of the river? Justify.',
            a: 'Polluted section. The very low DO (2 mg L<sup>−1</sup>) and very high BOD (250 mg L<sup>−1</sup>) together indicate severe organic pollution: raw sewage typically shows these values. Clean water would have DO of 8–10 mg L<sup>−1</sup> and BOD of 1–2 mg L<sup>−1</sup>.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 463–465 ─────────────────────────
  {
    n: 'D',
    title: 'Biogas Stoichiometry and Yield Calculations',
    extra: true,
    kalam: 'Methanogens are obligate anaerobes: they are poisoned or inhibited by oxygen.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter describes biogas as predominantly methane, names methanogens, and explains the rumen connection. It does not give the biochemical equation for methanogenesis or calculate yield. CUET occasionally asks for the methane percentage or the products of methanogenesis ${EST}. Beyond NCERT: the equations, yields and values in this topic come from the book, not from NCERT.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Methanogenesis equation.</b> Methanogens produce methane from carbon dioxide and hydrogen:',
      },
      {
        t: 'formula',
        kicker: 'Methanogenesis equation',
        main: 'CO<sub>2</sub> + 4 H<sub>2</sub> → CH<sub>4</sub> + 2 H<sub>2</sub>O',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'Carbon dioxide is reduced to methane; hydrogen is the electron donor. This reaction is strictly anaerobic. Methanogens are archaea (NCERT calls them bacteria).',
      },
      {
        t: 'p',
        html: '<b>From organic matter.</b> Cellulose (C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub><i>n</i></sub> is the primary substrate from cattle dung. Simplified for one glucose unit:',
      },
      {
        t: 'formula',
        kicker: 'From organic matter (one glucose unit)',
        main: 'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 3 CO<sub>2</sub> + 3 CH<sub>4</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'Carbon balance: 6 C in glucose → 3 CO<sub>2</sub> (3 C) + 3 CH<sub>4</sub> (3 C) = 6 C. Balanced.',
      },
      {
        t: 'p',
        html: 'In a digester, bacteria first ferment cellulose to acetate, H<sub>2</sub> and CO<sub>2</sub>; methanogens then make methane from acetate (CH<sub>3</sub>COOH → CH<sub>4</sub> + CO<sub>2</sub>) and from CO<sub>2</sub> + 4 H<sub>2</sub>. The glucose equation is the overall result.',
      },
      {
        t: 'p',
        html: '<b>Biogas composition.</b> The gas mixture is methane about 50–70%, CO<sub>2</sub> about 30–40% (the exact figures vary with the feed), and small amounts of H<sub>2</sub> and H<sub>2</sub>S. NCERT states “predominantly methane.”',
      },
      {
        t: 'p',
        html: '<b>Yield calculations.</b> One mole of glucose (180 g) produces 3 moles of methane (48 g) under ideal conditions.',
      },
      {
        t: 'table',
        title: 'Standard Values',
        head: ['Parameter', 'Value'],
        rows: [
          ['Methane percentage in biogas', '50–70% (predominantly methane)'],
          ['Calorific value of methane', 'about 36 MJ m<sup>−3</sup> (lower heating value)'],
          ['One mole methane (at STP)', '22.4 L'],
          ['Glucose to methane (mass basis)', '180 g glucose → 48 g CH<sub>4</sub>'],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CUET',
        q: 'Products of Methanogenesis. Write the biochemical equation for methane production from carbon dioxide and hydrogen by methanogens, and state which gas forms the largest proportion of the biogas mixture.',
        steps: [
          'The balanced equation for methanogenesis is:<br>CO<sub>2</sub> + 4 H<sub>2</sub> → CH<sub>4</sub> + 2 H<sub>2</sub>O',
          'Biogas is a mixture of gases, and methane is its predominant component (50–70% by volume). The mixture also contains CO<sub>2</sub> and small amounts of H<sub>2</sub>S.',
        ],
        ans: 'CO<sub>2</sub> + 4 H<sub>2</sub> → CH<sub>4</sub> + 2 H<sub>2</sub>O; methane (CH<sub>4</sub>) forms the largest proportion of biogas.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'Carbon Balance in Biogas Production. One molecule of glucose is completely converted to methane and carbon dioxide by methanogens. How many molecules of CH<sub>4</sub> and CO<sub>2</sub> are produced, and how many carbon atoms from the original glucose end up in methane?',
        steps: [
          'From the balanced equation C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 3 CO<sub>2</sub> + 3 CH<sub>4</sub>:<br>• Three molecules of CO<sub>2</sub> are produced.<br>• Three molecules of CH<sub>4</sub> are produced.<br>• Carbon atoms in CO<sub>2</sub>: 3 × 1 = 3.<br>• Carbon atoms in CH<sub>4</sub>: 3 × 1 = 3.<br>• Total: 6 carbon atoms, matching the original glucose (6 carbon atoms).',
        ],
        ans: '3 molecules of CO<sub>2</sub> and 3 molecules of CH<sub>4</sub> are produced; 3 carbon atoms from glucose end up in methane molecules.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: 'Conditions for Methanogenesis. Why must a biogas plant be strictly anaerobic? Name the group of microorganisms responsible for methane production.',
        steps: [
          'Methanogens are obligate anaerobes: they are poisoned or inhibited by oxygen. Even trace amounts of oxygen halt methane production. The biogas plant must be sealed (airless) to maintain anaerobic conditions.',
          'The microorganisms responsible are methanogens (e.g., <i>Methanobacterium</i>).',
        ],
        ans: 'Strictly anaerobic because methanogens are obligate anaerobes; methanogens (e.g. <i>Methanobacterium</i>) carry out methane production.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the equation for methane production from carbon dioxide and hydrogen.',
            a: 'CO<sub>2</sub> + 4 H<sub>2</sub> → CH<sub>4</sub> + 2 H<sub>2</sub>O',
          },
          {
            q: '[CUET] State whether oxygen is required for biogas production. Give a reason.',
            a: 'No, oxygen is not required. Biogas production is an anaerobic process carried out by methanogens, which are obligate anaerobes and inhibited by oxygen.',
          },
          {
            q: '[NEET] One mole of glucose is completely converted to biogas products. Calculate the number of moles of methane produced.',
            a: 'From C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 3 CO<sub>2</sub> + 3 CH<sub>4</sub>, three moles of methane are produced per mole of glucose.',
          },
          {
            q: '[CUET] What is the approximate percentage of methane in biogas?',
            a: 'Biogas contains approximately 50–70% methane (predominantly methane).',
          },
          {
            q: '[NEET] Explain why cattle dung is an ideal substrate for biogas production, linking it to the rumen ecosystem.',
            a: 'Cattle dung is ideal because: (i) it contains methanogens that originate in the cattle rumen, where, as NCERT puts it, they help in the breakdown of cellulose and aid the animal’s nutrition (strictly, other rumen bacteria ferment the cellulose, and the methanogens use up the H<sub>2</sub> and CO<sub>2</sub> released); (ii) these methanogens are present in large numbers in fresh dung, serving as a natural inoculum; (iii) dung is rich in cellulosic material (from grass), the substrate from which methane is ultimately made; (iv) this eliminates the need to add external microbial cultures, making dung a ready and efficient feedstock.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 465–468 ─────────────────────────
  {
    n: 'E',
    title: 'Environmental Parameters in Biocontrol and Biofertilisers',
    extra: true,
    kalam: 'Each agent works best within a temperature range, and most within a pH range (baculovirus is not pH-critical).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter names biocontrol agents (Bt, <i>Trichoderma</i>, Baculovirus) and biofertilisers (<i>Rhizobium</i>, <i>Azotobacter</i>, <i>Glomus</i>) with their roles. It says only in words that Bt is activated by the alkaline insect gut, that <i>Rhizobium</i> works in root nodules and that these agents depend on moisture and temperature. It does not give numerical temperature or pH ranges for them. NEET high-difficulty questions occasionally probe these conditions ${EST}. Beyond NCERT: the temperature and pH ranges in this topic come from the book, not from NCERT.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Biocontrol agent conditions.</b> Each agent works best within a temperature range, and most within a pH range (baculovirus is not pH-critical). These conditions determine field efficacy.',
      },
      {
        t: 'p',
        html: '<b>Biofertiliser conditions.</b> Nitrogen-fixing bacteria require specific conditions (low oxygen for <i>Rhizobium</i> in nodules, suitable soil pH). Mycorrhizal fungi require living root contact.',
      },
      {
        t: 'p',
        html: '<b>Field application notes.</b> Environmental factors can reduce efficacy: temperature extremes, UV radiation, rainfall washing away sprayed agents.',
      },
      {
        t: 'table',
        title: 'Environmental Parameters',
        head: ['Agent', 'Type', 'Optimum temperature', 'pH range', 'Key condition'],
        rows: [
          ['<i>Bacillus thuringiensis</i>', 'Bacterium', '25–30°C', '6–8 (near neutral)', 'Active toxin requires alkaline larval gut'],
          ['<i>Trichoderma</i>', 'Fungus', '25–30°C', '4–7 (slightly acidic to neutral)', 'Saprophytic; requires organic matter'],
          ['Baculovirus', 'Virus', '20–30°C', 'Not critical', 'Requires living host; UV-sensitive'],
          ['<i>Rhizobium</i>', 'Bacterium', '25–30°C', '6–7 (near neutral)', 'Symbiotic for nitrogen fixation: lives free in soil, fixes N<sub>2</sub> only in nodules of a compatible legume'],
          ['<i>Azotobacter</i>', 'Bacterium', '20–35°C', '6.5–7.5 (neutral)', 'Free-living; requires organic carbon'],
          ['<i>Glomus</i> (mycorrhiza)', 'Fungus', '20–30°C', '5.5–7.0 (slightly acidic to neutral)', 'Obligate symbiont; requires root contact'],
        ],
      },
      {
        t: 'p',
        html: 'These ranges are the book’s typical values; NCERT gives none of them.',
      },
      {
        t: 'p',
        html: 'Note from NCERT: Bt toxin is activated by the alkaline pH of the insect gut. <i>Trichoderma</i> acts as a mycoparasite on fungal plant pathogens. <i>Rhizobium</i> lives in legume root nodules. <i>Glomus</i> forms mycorrhizal associations with plant roots.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CUET',
        q: 'Conditions for Bt Activity. A farmer sprays Bt on a cabbage field on a hot summer afternoon (temperature 42°C). Predict whether this application is likely to be effective and give two reasons.',
        steps: [
          'Bt’s optimum activity temperature is 25–30°C. At 42°C:<br>1. The temperature is well above the optimum, and the heat of a hot afternoon dries the spray on the leaf, so less active agent reaches the larvae.<br>2. Afternoon sunlight is rich in UV radiation, which breaks down the toxin and inactivates the spores on the leaf surface before larvae can ingest them.',
          'The application is unlikely to be fully effective. The recommended practice is to spray in early morning or evening when temperatures are lower and UV radiation is reduced.',
        ],
        ans: 'Likely ineffective; reasons: (i) temperature above the optimum (25–30°C) and a drying spray reduce the effective dose; (ii) intense afternoon UV radiation breaks down the toxin and inactivates the spores. Spraying in early morning or evening is recommended.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<i>Rhizobium</i> Activity Conditions. <i>Rhizobium</i> is used as a biofertiliser for leguminous crops. State two conditions that would limit <i>Rhizobium</i>’s nitrogen-fixing activity.',
        steps: [
          '1. <b>Strongly acidic soil (pH below about 5.5):</b> <i>Rhizobium</i> grows best at near-neutral pH (6–7). In strongly acidic soils the bacteria become less active and nodulation decreases. Lime treatment may be required.<br>2. <b>Absence of compatible legume host:</b> <i>Rhizobium</i> fixes nitrogen only as a symbiont in root nodules. Without a compatible legume, it cannot form nodules and cannot fix nitrogen. Different <i>Rhizobium</i> species are specific to different legume groups.',
        ],
        ans: 'Two conditions: (i) strongly acidic soil (pH below about 5.5) limits growth and nodulation; (ii) absence of a compatible legume host prevents nodulation and nitrogen fixation.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: 'Mycorrhizal Fungal Requirement. <i>Glomus</i> forms mycorrhizal associations with plant roots. Why cannot mycorrhizal fungi be applied as a standalone soil inoculant without plant roots?',
        steps: [
          '<i>Glomus</i> is an obligate symbiont: it cannot complete its life cycle or derive nutrition without a host plant. The fungus receives sugars (photosynthates) from the plant in exchange for phosphorus and other nutrients it absorbs from the soil. Without plant roots, the fungus has no carbon source and cannot grow.',
          'Additionally, spores may germinate without a root, but the germ tubes cannot keep growing or form new spores without a host.',
        ],
        ans: '<i>Glomus</i> is obligately symbiotic: it requires living plant roots as a carbon source; without roots, it cannot establish or function.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] State the optimum temperature range for Bt activity and suggest the best time of day for field application.',
            a: 'Optimum temperature: 25–30°C. Best application time: early morning or evening, to avoid high temperatures and intense UV radiation that inactivate spores.',
          },
          {
            q: '[NEET] Why is <i>Trichoderma</i> effective as a biocontrol agent against soil-borne fungal pathogens?',
            a: '<i>Trichoderma</i> is a saprophytic fungus that acts as a mycoparasite: it directly attacks and kills other fungi (including plant pathogens) by coiling around their hyphae and secreting cell-wall-degrading enzymes. It also competes with pathogens for space and nutrients, and induces systemic resistance in plants.',
          },
          {
            q: '[CUET] What soil pH range is favourable for <i>Rhizobium</i> activity?',
            a: 'Favourable pH: 6–7 (near neutral).',
          },
          {
            q: '[NEET] Explain why baculoviruses are UV-sensitive and how this affects their field use.',
            a: 'Baculoviruses are susceptible to UV radiation, which damages their viral DNA. In direct sunlight, viral particles lose infectivity within hours. Field use requires: (i) application in early morning or evening; (ii) application under cloud cover; (iii) formulation with UV-protectant additives; or (iv) use in integrated pest management with other control methods.',
          },
          {
            q: '[NEET High-Difficulty] A farmer applies <i>Glomus</i> inoculant to a field of a non-mycorrhizal crop such as mustard in neutral pH soil. Predict the likely outcome and justify your answer.',
            a: 'Outcome: little or no benefit. <i>Glomus</i> can form the association only with a compatible host root; a non-mycorrhizal crop such as mustard or cabbage does not support colonisation, so the inoculant adds no extra phosphorus uptake. The practice is more effective for crops that are strongly mycorrhizal, such as maize and onion.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 468–469 ─────────────────────────
  {
    n: 'F',
    title: 'Answer Key Summary: Additional Topics A to E',
    extra: true,
    kalam: 'Bacterial ribosomes are 70S (30S + 50S); human ribosomes are 80S (40S + 60S).',
    blocks: [
      { t: 'part', title: 'Additional topic A' },
      {
        t: 'p',
        html: '1. C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2 C<sub>2</sub>H<sub>5</sub>OH + 2 CO<sub>2</sub>. Products: ethanol and carbon dioxide.<br>2. No CO<sub>2</sub> is released in homolactic fermentation. All 6 carbon atoms from glucose are retained in 2 molecules of lactic acid.<br>3. Two ethanol and two CO<sub>2</sub> (4 molecules total).<br>4. C<sub>2</sub>H<sub>5</sub>OH + O<sub>2</sub> → CH<sub>3</sub>COOH + H<sub>2</sub>O<br>5. No gas in homolactic fermentation (as written); CO<sub>2</sub> is released in alcoholic fermentation.',
      },
      { t: 'part', title: 'Additional topic B' },
      {
        t: 'p',
        html: '1. Narrow-spectrum: effective against limited bacterial groups (e.g., penicillin against Gram-positive); broad-spectrum: effective against both Gram-positive and Gram-negative (e.g., tetracycline).<br>2. (c) Penicillin.<br>3. Bacterial ribosomes are 70S (30S + 50S); human ribosomes are 80S (40S + 60S). Antibiotics targeting bacterial ribosomal subunits do not bind human ribosomes effectively, conferring selective toxicity (mitochondrial ribosomes of human cells resemble bacterial ones, so some have side effects).<br>4. Penicillin from <i>Penicillium notatum</i>, discovered by Alexander Fleming.<br>5. Rifampicin blocks transcription by binding the β subunit of bacterial RNA polymerase; the eukaryotic RNA polymerases of human cells differ in structure and are not inhibited.',
      },
      { t: 'part', title: 'Additional topic C' },
      {
        t: 'p',
        html: '1. BOD is the oxygen consumed by microbes in the standard 5-day, 20°C test (BOD<sub>5</sub>), a part of the oxygen needed to oxidise all the organic matter in 1 L of water; unit is mg L<sup>−1</sup>.<br>2. DO consumed = 6 mg L<sup>−1</sup>; dilution factor = 5; BOD = 30 mg L<sup>−1</sup>.<br>3. High BOD indicates high organic load; microbes consume dissolved oxygen, potentially dropping DO to lethal levels for fish.<br>4. Below 30 mg L<sup>−1</sup> (Indian standards for inland water discharge).<br>5. Polluted section: low DO (2 mg L<sup>−1</sup>) and high BOD (250 mg L<sup>−1</sup>) together indicate severe organic pollution.',
      },
      { t: 'part', title: 'Additional topic D' },
      {
        t: 'p',
        html: '1. CO<sub>2</sub> + 4 H<sub>2</sub> → CH<sub>4</sub> + 2 H<sub>2</sub>O<br>2. No, oxygen is not required; methanogens are obligate anaerobes.<br>3. 3 moles of methane per mole of glucose.<br>4. 50–70% (predominantly methane).<br>5. Cattle dung is ideal because methanogens from the rumen are present in large numbers; dung is rich in cellulosic substrate; and the natural microbial community eliminates the need for external inoculum.',
      },
      { t: 'part', title: 'Additional topic E' },
      {
        t: 'p',
        html: '1. 25–30°C; early morning or evening.<br>2. <i>Trichoderma</i> acts as a mycoparasite, directly attacking fungal pathogens; it also competes for space and nutrients and induces plant resistance.<br>3. pH 6–7 (near neutral).<br>4. UV damages viral DNA, reducing infectivity; application should be during low-UV conditions or with UV-protectant formulations.<br>5. Little or no benefit: <i>Glomus</i> needs a compatible living host root, and a non-mycorrhizal crop (such as mustard) does not support colonisation.',
      },
    ],
  },

  // ───────────────────────── Additional topic G · pp. 469–478 ─────────────────────────
  {
    n: 'G',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'A short stem names a product (Swiss cheese, curd, statins) and asks for the organism.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: `Across AIPMT and NEET papers, this chapter often returns questions from the following topics ${EST}:`,
      },
      {
        t: 'table',
        title: null,
        head: ['Topic (NCERT Section)', 'Typical NEET question types', 'Typical frequency in NEET'],
        rows: [
          ['Microbes in Household Products (curd, bread, cheese, toddy)', 'Direct organism-to-product recall; match-the-column', 'High'],
          ['Microbes in Industrial Products (antibiotics, acids, statins, streptokinase, fermentors)', 'Name-heavy recall; match-the-column', 'Very high: many names to learn'],
          ['Microbes in Sewage Treatment (BOD, primary/secondary, flocs, activated sludge)', 'BOD concept; the two-stage sequence; assertion–reason', 'High: BOD and the two-stage sequence are often asked'],
          ['Microbes in Production of Biogas (methanogens, rumen, gobar gas, composition)', 'Methanogen locations; biogas composition; plant parts', 'Moderate to high: a short topic'],
          [
            'Biocontrol Agents and Biofertilisers (Bt, <i>Trichoderma</i>, baculovirus, <i>Rhizobium</i>, <i>Glomus</i>, <i>Azolla</i>)',
            'Match-the-column; assertion–reason; nitrogen-versus-phosphorus split',
            'Very high: the nitrogen-versus-phosphorus split is a repeated testing point',
          ],
        ],
      },
      {
        t: 'p',
        html: 'The examples below are modelled on questions from past AIPMT and NEET papers.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>Archetype 1: Direct organism→product recall (single best answer)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A short stem names a product (Swiss cheese, curd, statins) and asks for the organism. Four organism options; only one correct.<br><b>Approach:</b> Keep the master tables on instant recall. No reasoning required: speed comes from having the pairings locked.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'The bioactive molecule statins, used to lower blood cholesterol, is obtained from:<br><b>(a)</b> <i>Streptococcus</i><br><b>(b)</b> <i>Mucor javanicus</i><br><b>(c)</b> <i>Monascus purpureus</i><br><b>(d)</b> <i>Clostridium butylicum</i>',
        steps: [
          '<b>Solution:</b> The cholesterol-lowering statin molecule comes from the fungus <i>Monascus purpureus</i> (NCERT calls it a yeast; it is a filamentous mould). (a) gives streptokinase; (b) is a different fungus not cited in NCERT; (d) gives butyric acid.',
        ],
        ans: '(c)',
      },

      { t: 'p', html: '<b>Archetype 2: Match-the-column (organism / product / application)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two columns of five items each; candidates must pair A–E with I–V. Tests whether the student holds the full mapping table or only fragments.<br><b>Approach:</b> Scan both columns first. Assign each item to its “bucket” (acid-maker, drug-maker, fungus, bacterium) before matching. Eliminate two options per row before reading fully.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Match the columns:<br>Column I: A. <i>Aspergillus niger</i>; B. <i>Clostridium butylicum</i>; C. <i>Saccharomyces cerevisiae</i>; D. <i>Trichoderma polysporum</i>; E. <i>Monascus purpureus</i><br>Column II: I. Statins; II. Ethanol; III. Citric acid; IV. Butyric acid; V. Cyclosporin A<br>Choose the correct combination.<br><b>(a)</b> A–I, B–II, C–III, D–IV, E–V<br><b>(b)</b> A–III, B–II, C–IV, D–V, E–I<br><b>(c)</b> A–III, B–IV, C–II, D–V, E–I<br><b>(d)</b> A–III, B–IV, C–II, D–I, E–V',
        steps: [
          '<b>Solution:</b> Working bucket by bucket: <i>Aspergillus niger</i> → citric acid (III); <i>Clostridium butylicum</i> → butyric acid (IV); <i>Saccharomyces cerevisiae</i> → ethanol (II); <i>Trichoderma polysporum</i> → cyclosporin A (V); <i>Monascus purpureus</i> → statins (I). The only option matching A–III, B–IV, C–II, D–V, E–I is (c). (<i>Trichoderma polysporum</i> is NCERT’s source for cyclosporin A; the organism is now classified as <i>Tolypocladium inflatum</i>. NCERT’s spellings <i>Clostridium butylicum</i> and <i>Propionibacterium sharmanii</i> are kept: current names are <i>C. butyricum</i> and <i>P. freudenreichii</i> subsp. <i>shermanii</i>.)',
        ],
        ans: '(c)',
      },

      { t: 'p', html: '<b>Archetype 3: Assertion–Reason</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A statement labelled (A) is followed by a statement labelled (R). Four answer choices: both true and R explains A / both true but R does not explain A / A true, R false / A false, R true.<br><b>Approach:</b> Evaluate each statement independently first. Only if both are true, ask: is R actually the reason for A?',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Assertion (A): In crop rotation, the plants that are best preferred are leguminous plants.<br>Reason (R): Such plants have root nodules containing <i>Clostridium</i> bacteria able to fix nitrogen.<br><b>(a)</b> Both A and R are true, and R is the correct explanation of A.<br><b>(b)</b> Both A and R are true, but R is not the correct explanation of A.<br><b>(c)</b> A is true, but R is false.<br><b>(d)</b> A is false, but R is true.',
        steps: [
          '<b>Solution:</b> A is correct: legumes are preferred in crop rotation for their nitrogen-fixing ability. However, R is <b>false</b>: the bacteria in legume nodules are <i>Rhizobium</i>, not <i>Clostridium</i>. Since R is false, the answer is <b>(c)</b>. The distractor <b>(a)</b> tempts students who misread <i>Clostridium</i> as a generic nitrogen-fixer without checking the specific genus.',
        ],
        ans: '(c)',
      },

      { t: 'p', html: '<b>Archetype 4: Statement-based / “which is NOT true”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A list of 4 statements; the question asks which is incorrect or not true. Requires checking all four.<br><b>Approach:</b> Never pick the first plausible-sounding statement. Read every option and mark each TRUE / FALSE before selecting the false one.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which one of the following statements regarding antibiotics is NOT true?<br><b>(a)</b> First antibiotic was discovered by Alexander Fleming.<br><b>(b)</b> The term ‘antibiotic’ was coined by S. Waksman in 1942.<br><b>(c)</b> Some persons can be allergic to a particular antibiotic.<br><b>(d)</b> Each antibiotic is effective only against one particular kind of germ.',
        steps: [
          '<b>Solution:</b> (a) TRUE: Fleming discovered penicillin. (b) TRUE: Waksman coined the term. (c) TRUE: allergies are documented (e.g., penicillin allergy). (d) is <b>FALSE</b>: antibiotics differ in spectrum, and broad-spectrum antibiotics act against many kinds of bacteria, so it is not true that each antibiotic works against only one particular kind of germ.',
        ],
        ans: '(d)',
      },

      { t: 'p', html: '<b>Archetype 5: Diagram identification (STP / biogas plant)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A diagram of a biogas plant or sewage treatment process with labelled parts; candidates identify A, B, C or match steps to labels.<br><b>Approach:</b> Memorise the functional role of each component, not just its name. The floating gas holder stores biogas and rises as gas accumulates. In a sewage treatment plant the anaerobic sludge digester receives activated sludge; in a biogas plant the digester receives the dung-and-water slurry. Either way, the digester produces methane-rich biogas.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'In a biogas plant, three parts are labelled as follows: A = spent slurry (leaves by the outlet and is used as manure), B = the gas collected in the gas holder (methane + carbon dioxide), C = the input (dung + water slurry). This labelling is:<br><b>(a)</b> Correct for all three<br><b>(b)</b> Correct for A and C only<br><b>(c)</b> Incorrect: B should be methane + oxygen<br><b>(d)</b> Incorrect: C should be sewage water',
        steps: [
          '<b>Solution:</b> In a biogas plant: A (the spent slurry from the outlet, used as manure) is correct; B is the gas collected, which is methane and carbon dioxide (NOT oxygen: the process is anaerobic), so B is correct as written; C is the input, the slurry of dung and water, correct. All three match, so <b>(a)</b> is correct.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>Archetype 6: BOD / environmental concept</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A question tests the meaning of BOD, its direction (high = polluted), or the role of aerobic microbes in secondary treatment.<br><b>Approach:</b> BOD = oxygen microbes would consume to finish eating the organic food in 1 L of water (the standard test measures only what is used in 5 days at 20 °C, BOD<sub>5</sub>). More food → more oxygen demanded → higher BOD → dirtier water. The goal of treatment is to lower BOD.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which statement regarding BOD is true?<br><b>(a)</b> The greater the BOD of wastewater, more is its polluting potential.<br><b>(b)</b> The greater the BOD of wastewater, less is its polluting potential.<br><b>(c)</b> The lesser the BOD of wastewater, more is its polluting potential.<br><b>(d)</b> BOD is independent of the polluting potential of wastewater.',
        steps: [
          '<b>Solution:</b> High BOD means the water contains a large organic load that would consume a lot of oxygen during decomposition: this is the definition of a strong pollutant. The answer is <b>(a)</b>. Options (b) and (c) reverse the relationship, and (d) denies it altogether.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What it punishes', 'How to avoid it'],
        rows: [
          [
            '<b>Swapped kingdoms on the two cheeses</b>',
            'Writing <i>Penicillium</i> for Swiss cheese holes or <i>Propionibacterium</i> for Roquefort flavour',
            'Anchor: bacterium = big holes; fungus = blue-veined flavour',
          ],
          [
            '<b>Lactic acid leavens dough</b>',
            'Confusing curd-setting (acid → casein coagulation) with bread-rising (CO<sub>2</sub> → trapped gas)',
            'Two separate by-products: acid sets; gas raises (some lactic acid bacteria also make CO<sub>2</sub>, as in idli and dosa batter, but the acid itself does not raise dough)',
          ],
          [
            '<b><i>Aspergillus niger</i> ↔ <i>Monascus purpureus</i> swap</b>',
            'Mixing up citric acid fungus with the statin fungus',
            '“niger is the nice acid” for citric acid; “Monascus Minimises cholesterol” for statins',
          ],
          [
            '<b>Distillation confusion in beverages</b>',
            'Calling wine/whisky both “with” or both “without” distillation',
            'Beer & wine Bypass the still; whisky Works the still',
          ],
          [
            '<b><i>Rhizobium</i> = <i>Clostridium</i></b>',
            'Assertion–reason and direct-recall questions on nitrogen fixation',
            '<i>Rhizobium</i> is the legume nodule bacterium; <i>Clostridium</i> is butyric acid maker: they appear in different sections',
          ],
          [
            '<b><i>Glomus</i> fixes nitrogen</b>',
            'A common error in the biocontrol topic',
            'Fungi (<i>Glomus</i>/mycorrhiza) mainly supply phosphorus; bacteria and cyanobacteria fix nitrogen',
          ],
          [
            '<b><i>Azolla</i> = the fixer</b>',
            '<i>Azolla</i> is the fern; the cyanobacterium <i>Anabaena azollae</i> inside it is the actual nitrogen-fixer',
            'State “<i>Anabaena azollae</i>” in the <i>Azolla</i> context (NCERT’s name; now called <i>Trichormus azollae</i> or <i>Nostoc azollae</i>)',
          ],
          [
            '<b>Antibiotics kill viruses</b>',
            'Stem asks “not effective against” and the viral option tempts the distracted reader',
            'Antibiotics target bacterial/fungal structures; they are ineffective against viruses',
          ],
          [
            '<b>Reading the stem carelessly on “INCORRECT” questions</b>',
            'The stem says “NOT true” or “INCORRECTLY matched” but the first plausible-looking true statement is selected',
            'Train yourself: every multiple-choice with a negative stem, mark TRUE/FALSE on all four options before selecting',
          ],
          [
            '<b>Methanogens need oxygen</b>',
            'Forgetting that methanogens are strict anaerobes: oxygen inhibits them',
            'Methanogens: no air, make methane',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'p',
        html: 'The questions follow NEET/AIPMT patterns; where an answer goes beyond NCERT it says so.',
      },
      {
        t: 'practice',
        items: [
          {
            q: '<b>Level 1: Direct recall.</b> A student states that the large holes in Swiss cheese are caused by <i>Penicillium roqueforti</i>. Which statement best corrects this error?<br><b>(a)</b> It is caused by a fungus, but the correct species is <i>Penicillium notatum</i><br><b>(b)</b> It is caused by a bacterium (<i>Propionibacterium sharmanii</i>) producing CO<sub>2</sub><br><b>(c)</b> It is caused by <i>Saccharomyces cerevisiae</i> producing ethanol<br><b>(d)</b> The holes are caused by the coagulation of casein by lactic acid',
            a: '(b): The holes are from bacterial CO<sub>2</sub> production; <i>Penicillium</i> is the flavour mould in Roquefort cheese, not Swiss cheese.',
          },
          {
            q: '<b>Level 1: Direct recall.</b> Which gas is responsible for the puffed-up appearance of bread dough?<br><b>(a)</b> O<sub>2</sub><br><b>(b)</b> CO<sub>2</sub><br><b>(c)</b> SO<sub>2</sub><br><b>(d)</b> N<sub>2</sub>',
            a: '(b): Baker’s yeast ferments sugars and releases CO<sub>2</sub>, which gets trapped in the dough, causing it to rise.',
          },
          {
            q: '<b>Level 2: Applied concept.</b> A patient who has undergone kidney transplantation is prescribed cyclosporin A to prevent organ rejection. The producing organism is:<br><b>(a)</b> <i>Monascus purpureus</i><br><b>(b)</b> <i>Trichoderma polysporum</i><br><b>(c)</b> <i>Aspergillus niger</i><br><b>(d)</b> <i>Streptococcus</i>',
            a: '(b): Cyclosporin A is an immunosuppressant produced by the fungus <i>Trichoderma polysporum</i> (NCERT’s attribution; the organism is now classified as <i>Tolypocladium inflatum</i>). <i>Monascus</i> gives statins (cholesterol); <i>Aspergillus</i> gives citric acid; <i>Streptococcus</i> gives streptokinase.',
          },
          {
            q: '<b>Level 2: Applied concept.</b> The biochemical oxygen demand (BOD) of a water sample is found to be very high. This indicates that the water:<br><b>(a)</b> is very clean and rich in dissolved oxygen<br><b>(b)</b> contains a large amount of organic matter and is highly polluted<br><b>(c)</b> is sterile and free of all microorganisms<br><b>(d)</b> has been treated in a secondary sewage treatment plant',
            a: '(b): BOD measures the oxygen required by microbes to decompose the organic matter present. A high BOD means a heavy organic (pollution) load. Low BOD = clean water.',
          },
          {
            q: '<b>Level 2: Applied concept.</b> A farmer wishes to improve the nitrogen content of his wheat field soil without using chemical fertilisers. He grows a leguminous crop in rotation. The soil enrichment occurs because:<br><b>(a)</b> legume roots secrete nitrogen compounds directly into the soil<br><b>(b)</b> <i>Rhizobium</i> bacteria in legume root nodules fix atmospheric N<sub>2</sub> into organic compounds<br><b>(c)</b> legume leaves fix nitrogen when they decompose<br><b>(d)</b> legume roots release <i>Azotobacter</i> into the soil',
            a: '(b): <i>Rhizobium</i> forms symbiotic associations in root nodules and converts atmospheric N<sub>2</sub> into organic nitrogen. When the legume residues decompose, this fixed nitrogen enriches the soil.',
          },
          {
            q: '<b>Level 3: Multi-step reasoning.</b> A match-the-column question pairs <i>Bacillus thuringiensis</i> with “nitrogen fixation in rice fields” and <i>Anabaena</i> with “biocontrol of caterpillars.” Both pairs are incorrect. Give the correct association for each organism and state the underlying principle that makes each error misleading.',
            a: '<i>Bacillus thuringiensis</i> (Bt) is a <b>biocontrol agent</b>: it forms a protein crystal (the inactive Cry protoxin) alongside its spores; in the alkaline gut of the larva the crystal dissolves and the protoxin is activated, killing the larva (the crystal detail goes beyond NCERT). It does not fix nitrogen. The trap is that Bt and nitrogen-fixing bacteria are both mentioned in the “Microbes as Biocontrol and Biofertilisers” section, so students may associate any microbe in that section with nitrogen fixation. <i>Anabaena</i> is a <b>cyanobacterium</b> that fixes atmospheric nitrogen (freely in rice fields and in symbiosis with the water fern <i>Azolla</i>). It does not control caterpillars: that is Bt’s role. The error arises from both being tested in the same topic, not from any genuine metabolic similarity.',
          },
          {
            q: '<b>Level 3: Multi-step reasoning.</b> Read the following assertion and reason:<br>Assertion (A): Primary treatment of sewage is a physical process.<br>Reason (R): It involves the activity of aerobic heterotrophic bacteria that consume organic matter.<br><b>(a)</b> Both A and R are true, and R correctly explains A.<br><b>(b)</b> Both A and R are true, but R does not correctly explain A.<br><b>(c)</b> A is true, R is false.<br><b>(d)</b> A is false, R is true.',
            a: '(c): A is correct: primary treatment uses filtration and sedimentation (physical). R is false: aerobic bacteria act in secondary (biological) treatment, not primary. This is a frequently reversed distinction in the sewage section.',
          },
          {
            q: '<b>Level 3: Multi-step reasoning.</b> A stirred-tank fermenter used for industrial penicillin production is being designed. Which of the following would not be a necessary feature of such a fermenter?<br><b>(a)</b> A system to control pH<br><b>(b)</b> A mechanism for controlling dissolved oxygen levels<br><b>(c)</b> A heating element to maintain temperatures above 80 °C continuously<br><b>(d)</b> Ability to sample the broth at intervals',
            a: '(c): The organisms used in fermenters (for example <i>Penicillium</i>, about 25 °C) work at moderate temperatures; 80 °C would kill them. Options (a), (b), and (d) are standard features of fermenters (this fermenter detail goes beyond NCERT).',
          },
          {
            q: '<b>Level 3: Multi-step reasoning.</b> A patient with myocardial infarction is given streptokinase. A classmate explains that streptokinase works because “it kills the bacteria causing the heart attack.” Identify the two biological errors in this statement and correct them.',
            a: 'Two errors:<br>1. <b>Streptokinase does not kill bacteria.</b> It is not an antibiotic; it is a clot-dissolving enzyme (“clot buster”) that activates plasminogen to plasmin, which degrades the fibrin of the clot. (It is obtained from <i>Streptococcus</i> and modified by genetic engineering for clinical use, but it acts on clots, not on bacteria.) The plasminogen detail goes beyond NCERT.<br>2. <b>A heart attack is not caused by bacteria.</b> Myocardial infarction results from a blood clot blocking a coronary artery, cutting off the blood supply to part of the heart muscle.',
          },
          {
            q: '<b>Level 4: Synthesis.</b> An Integrated Pest Management (IPM) programme in a mango orchard reports that a broad-spectrum chemical pesticide killed not only the mango fruit borer caterpillars but also the populations of parasitoid wasps and pollinating bees in the area. In response, the programme switches to baculovirus-based biocontrol.<br>(a) State two reasons why baculoviruses are preferred over broad-spectrum chemical pesticides in ecologically sensitive agricultural areas.<br>(b) A student argues that since biocontrol uses living organisms, it will always be more expensive and less reliable than chemicals. Evaluate this argument by giving one point in its favour and one against it, drawing on the mode of action of Bt as an example.',
            a: '(a) (i) Baculoviruses are <b>narrow-spectrum, with a narrow host range</b>: they kill the target pest (e.g., specific insect larvae) and generally spare non-target organisms such as parasitoid wasps, bees, mammals, birds, or fish. Chemical pesticides are broad-spectrum and kill non-target insects indiscriminately. (ii) They are <b>environmentally friendly</b> and leave little chemical residue in soil, water, or produce, making them suitable for organic produce and ecologically sensitive zones.<br>(b) <b>In favour:</b> Biocontrol agents can be more expensive to produce, store, and apply than chemical pesticides, because they are living organisms or spores that need specific storage conditions (Bt spores must be kept viable), and a sprayed agent such as Bt is degraded by UV radiation and rain, so it may need repeat application. <b>Against:</b> Biocontrol agents like Bt are highly reliable within their specificity window: Bt kills the target larvae effectively, is far less harmful to most non-target animals than a broad-spectrum chemical, and leaves little residue (this goes beyond NCERT), so the claim that biocontrol is always less reliable is not true.',
          },
        ],
      },

      { t: 'part', title: 'Key Distinctions to Master' },
      {
        t: 'p',
        html: '1. <b>Organism → product → application.</b> Pair the type of microbe (fungus vs. bacterium) with the specific clinical application (statins vs. cyclosporin) in a single match-the-column, rather than holding separate tables: <i>Monascus purpureus</i> (fungus) → statins; <i>Trichoderma polysporum</i> (fungus; NCERT’s attribution, now <i>Tolypocladium inflatum</i>) → cyclosporin A; <i>Streptococcus</i> (bacterium) → streptokinase.<br>2. <b>Nitrogen versus phosphorus.</b> Bacteria and cyanobacteria (<i>Rhizobium</i>, <i>Azotobacter</i>, <i>Azospirillum</i>, <i>Anabaena</i>, <i>Nostoc</i>) supply nitrogen; the mycorrhizal fungus <i>Glomus</i> mainly helps the plant absorb phosphorus (it also brings water and other nutrients). This split is a frequently tested distinction in the biocontrol and biofertiliser section.<br>3. <b>BOD: definition and direction.</b> BOD is the oxygen microbes would use to oxidise the organic matter in 1 litre of water (NCERT: if all of it were oxidised); the standard test measures the part used in 5 days at 20 °C (BOD<sub>5</sub>). High BOD means a heavy organic load and dirty water; treatment aims to lower BOD. Be ready to explain why the relationship runs in this direction, not just to quote the definition: assertion–reason items test exactly this.',
      },
    ],
  },
];
