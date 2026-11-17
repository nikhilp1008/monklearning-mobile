import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 4 (Principles of Inheritance and Variation), Additional topics D to G, word for word from the
 * Class 12 Biology Master Reference (book pp. 206 to 222): D "Mitochondrial and Cytoplasmic Inheritance" (opens mid-page
 * 206 under Addendum C's practice answers; ends p. 208), E "Hardy-Weinberg Equilibrium" (p. 208 line 10 to p. 210),
 * F "Three-Point Test Cross: Gene Ordering in Detail" (low on p. 210 to p. 212) and G "What NEET Actually Asks"
 * (the book's "Addendum P", p. 212 line 11 to p. 222). Page 223 is the next chapter.
 *
 * Topic indexes: D = 8, E = 9, F = 10, G = 11 (Topics 01 to 05 = 0 to 4, Additional A to G = 5 to 11).
 * No figure in these pages (ruled tables only). Where the book prints no answer line, ans is ''. Em dashes are written
 * as colons or commas; ratios use the U+2236 sign; a no-break space joins a value to % and cM.
 */

const EST = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic D · pp. 206–208 ─────────────────────────
  {
    n: 'D',
    title: 'Mitochondrial and Cytoplasmic Inheritance',
    extra: true,
    kalam: 'Most genes are nuclear, but a small number are inherited through the cytoplasm of the egg, not the sperm.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Most genes are nuclear, but a small number are inherited through the cytoplasm of the egg, not the sperm. Mitochondria contain their own DNA (mtDNA), and mitochondrial genes are inherited maternally: an affected mother usually passes the condition to all her children, and an affected father does not pass it on. This is distinct from all the nuclear patterns and is a regular NEET distractor ${EST}. Chloroplast DNA is also inherited through the cytoplasm in many plants (for example plastid colour in four o’clock plants), usually from the egg parent, but no worked example is given here.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Key features of mitochondrial inheritance',
        steps: [
          '<b>Maternal inheritance:</b> almost all the mitochondria in the zygote come from the egg’s cytoplasm. A sperm contributes virtually none: any sperm mitochondria that enter the egg are normally destroyed.',
          '<b>No paternal transmission:</b> an affected father cannot pass the condition to any children.',
          '<b>Children of an affected mother:</b> usually all of them carry the mutation, both sexes alike, although how strongly each is affected can differ (heteroplasmy).',
          '<b>Vertical transmission through the maternal line:</b> a grandmother with the mutation usually passes it to all her children; the daughters pass it down to their children; an affected son cannot transmit it to any of his children.',
        ],
      },
      {
        t: 'table',
        title: 'Distinguishing mitochondrial from X-linked recessive',
        head: ['Feature', 'Mitochondrial', 'X-linked recessive'],
        rows: [
          ['Affected father transmits to', 'No children', 'All daughters (as carriers)'],
          ['Affected mother transmits to', 'Usually all children', 'All sons affected; all daughters carriers (father unaffected)'],
          ['Sons can be affected', 'Yes', 'Yes'],
          ['Skips generation', 'No (an affected mother passes it down the female line)', 'Yes (through carrier females)'],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Mitochondrial Myoclonic Epilepsy.</b> A family shows a disorder resembling MELAS or MERRF across three generations. The affected mother (I-1) has three children, all affected (II-1, II-2, II-3). II-1 is a man married to an unaffected woman; their daughter III-1 is affected. Is this consistent with mitochondrial inheritance?',
        steps: [
          '<b>Check:</b> I-1 is an affected mother, so her children should usually all be affected: II-1, II-2 and II-3 are, which is consistent. But III-1’s mother is unaffected, and II-1 is affected but fathers do not pass on mitochondria. On the simple rule (an affected mother passes the condition on, an unaffected mother does not) this is not consistent with mitochondrial inheritance.',
          'The pattern suggests a nuclear gene, or an unaffected mother who carries a small proportion of mutant mitochondria (heteroplasmy, a mixture of normal and mutant mitochondria in her cells) and passes them on. A father’s mitochondria cannot explain it.',
        ],
        ans: 'This does not fit the simple rule of mitochondrial inheritance: the affected father (II-1) cannot pass the condition to his child, so the cause would have to be a nuclear gene, or mutant mitochondria carried by the apparently unaffected mother (heteroplasmy).',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Identifying Mitochondrial Inheritance.</b> A rare mitochondrial mutation causes blindness. In a family, an affected mother has six children: all three daughters are affected and all three sons are affected. The father is unaffected. What is the inheritance pattern?',
        steps: [
          'All children of the affected mother are affected regardless of sex. The father is unaffected and contributes virtually no mitochondria. This is consistent with maternal inheritance.',
        ],
        ans: 'Mitochondrial (cytoplasmic/maternal) inheritance.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] Why are mitochondrial genes inherited maternally?',
            a: 'Almost all the mitochondria in the zygote are derived from the egg’s cytoplasm; sperm contribute virtually none to the zygote.',
          },
          {
            q: '[NEET] Can an affected father pass a mitochondrial disorder to any of his children?',
            a: 'No: fathers do not transmit mitochondria to their children.',
          },
          {
            q: '[NEET] A woman with a mitochondrial mutation has three children: two sons and one daughter. How many of these children would you expect to be affected?',
            a: 'All three would be expected to carry the mutation (the trait is passed through the egg cytoplasm to every child regardless of sex), though the severity can vary.',
          },
          {
            q: '[NEET] Distinguish between mitochondrial inheritance and X-linked recessive inheritance with respect to transmission from an affected father.',
            a: 'In X-linked recessive: an affected father passes the allele to all daughters (who become carriers) and to no sons. In mitochondrial inheritance: an affected father passes the allele to no children at all.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 208–210 ─────────────────────────
  {
    n: 'E',
    title: 'Hardy-Weinberg Equilibrium',
    extra: true,
    kalam: 'The Hardy-Weinberg equation adds the population-level framework that links allele frequencies to genotype frequencies.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Chromosomal inheritance and mutation explain how variation arises; the Hardy-Weinberg equation adds the population-level framework that links allele frequencies to genotype frequencies. It is the foundation of clinical genetics (calculating carrier frequencies) and evolutionary biology, and Hardy-Weinberg problems can be asked as direct numericals.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The Hardy-Weinberg equation.</b> For a gene with two alleles <i>A</i> (frequency <i>p</i>) and <i>a</i> (frequency <i>q</i>), where <i>p</i> + <i>q</i> = 1:',
      },
      {
        t: 'formula',
        kicker: 'Hardy-Weinberg equation',
        main: '<i>p</i><sup>2</sup> + 2<i>pq</i> + <i>q</i><sup>2</sup> = 1',
        legend: [
          '<i>p</i><sup>2</sup> = frequency of homozygous dominant (<i>AA</i>)',
          '2<i>pq</i> = frequency of heterozygote (<i>Aa</i>), the carriers',
          '<i>q</i><sup>2</sup> = frequency of homozygous recessive (<i>aa</i>), the affected individuals',
        ],
        note: null,
      },
      {
        t: 'proc',
        title: 'Finding allele frequencies from phenotype frequencies',
        steps: [
          'If the trait is recessive, count affected individuals: <i>q</i><sup>2</sup> = <frac><num>number of affected</num><den>total population</den></frac>.',
          'Calculate <i>q</i> = √(<i>q</i><sup>2</sup>).',
          'Calculate <i>p</i> = 1 − <i>q</i>.',
          'Carrier frequency = 2<i>pq</i>.',
        ],
      },
      {
        t: 'p',
        html: '<b>Units:</b> Allele frequencies are pure proportions (dimensionless); <i>p</i> and <i>q</i> range from 0 to 1.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Calculating Carrier Frequency from Disease Frequency.</b> Phenylketonuria (PKU) occurs in 1 in 10,000 live births in a population. Assuming Hardy-Weinberg equilibrium, calculate (a) the frequency of the PKU allele, (b) the carrier frequency.',
        steps: [
          '(a) Disease frequency <i>q</i><sup>2</sup> = <frac><num>1</num><den>10000</den></frac> = 0.0001.<br><i>q</i> = √(0.0001) = 0.01',
          '(b) <i>p</i> = 1 − 0.01 = 0.99. Carrier frequency 2<i>pq</i> = 2 × 0.99 × 0.01 = 0.0198 ≈ 1.98 % ≈ 1 in 50.',
        ],
        ans: '(a) <i>q</i> = 0.01; (b) carrier frequency ≈ 2 % (about 1 in 50).',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Allele Frequency from the Dominant Phenotype Frequency.</b> In a population, 64 % of individuals show the dominant phenotype <i>A</i>. Assuming Hardy-Weinberg equilibrium, what is the frequency of allele <i>A</i>?',
        steps: [
          'Dominant phenotype frequency = <i>p</i><sup>2</sup> + 2<i>pq</i> = <i>p</i><sup>2</sup> + 2<i>p</i>(1 − <i>p</i>) = <i>p</i>(2 − <i>p</i>).',
          'Given <i>p</i>(2 − <i>p</i>) = 0.64. Solve: 2<i>p</i> − <i>p</i><sup>2</sup> = 0.64 ⇒ <i>p</i><sup>2</sup> − 2<i>p</i> + 0.64 = 0.',
          'Using the quadratic formula: <i>p</i> = <frac><num>2 ± √(4 − 4(0.64))</num><den>2</den></frac> = <frac><num>2 ± √(1.44)</num><den>2</den></frac> = <frac><num>2 ± 1.2</num><den>2</den></frac>.',
          '<i>p</i> = 1.6 (impossible, > 1) or <i>p</i> = 0.4.',
          '<b>Check:</b> the recessive class is <i>q</i><sup>2</sup> = 1 − 0.64 = 0.36, so <i>q</i> = 0.6 and <i>p</i> = 1 − 0.6 = 0.4.',
        ],
        ans: '<i>p</i> = 0.4; <i>q</i> = 0.6.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Effect of One Generation of Selfing.</b> In a population in Hardy-Weinberg equilibrium, the frequency of an autosomal recessive allele is <i>q</i> = 0.3. After one generation of selfing (as in a self-pollinating plant), what are the new frequencies of the homozygous recessive, the heterozygote, and the homozygous dominant among the progeny of selfed plants?',
        steps: [
          'For a selfed heterozygote <i>Aa</i>: the progeny are <frac><num>1</num><den>4</den></frac> <i>AA</i>, <frac><num>1</num><den>2</den></frac> <i>Aa</i>, <frac><num>1</num><den>4</den></frac> <i>aa</i>.',
          'If the parental heterozygote frequency was 2<i>pq</i> = 2(0.7)(0.3) = 0.42, then among the progeny of selfed plants:<br>• <i>aa</i> from selfing heterozygotes: (<frac><num>1</num><den>4</den></frac>) × 0.42 = 0.105.<br>• <i>aa</i> from the existing <i>aa</i> parents (<i>q</i><sup>2</sup> = 0.09), which self to give only <i>aa</i> offspring: 0.09.<br>• Total <i>aa</i> progeny: 0.105 + 0.09 = 0.195.<br>• <i>Aa</i> progeny: (<frac><num>1</num><den>2</den></frac>) × 0.42 = 0.21.<br>• <i>AA</i> progeny: 0.49 + (<frac><num>1</num><den>4</den></frac>) × 0.42 = 0.595.<br>• Check: 0.595 + 0.21 + 0.195 = 1.',
          'This exceeds the original <i>q</i><sup>2</sup> = 0.09, showing that inbreeding increases homozygosity and reveals recessive alleles: the genetic basis for why inbred populations show more recessive disorders.',
        ],
        ans: '<i>aa</i> = 0.195 (up from 0.09), <i>Aa</i> = 0.21 (down from 0.42), <i>AA</i> = 0.595 (up from 0.49). The allele frequencies are unchanged (<i>p</i> = 0.7, <i>q</i> = 0.3), but the genotype frequencies no longer follow <i>p</i><sup>2</sup> ∶ 2<i>pq</i> ∶ <i>q</i><sup>2</sup>, so the population is not in Hardy-Weinberg equilibrium.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] State the Hardy-Weinberg equation and define each term.',
            a: '<i>p</i><sup>2</sup> + 2<i>pq</i> + <i>q</i><sup>2</sup> = 1, where <i>p</i> = frequency of dominant allele <i>A</i>, <i>q</i> = frequency of recessive allele <i>a</i>, <i>p</i><sup>2</sup> = frequency of <i>AA</i>, 2<i>pq</i> = frequency of <i>Aa</i> (carriers), <i>q</i><sup>2</sup> = frequency of <i>aa</i> (affected).',
          },
          {
            q: '[NEET] In a population of 10,000 individuals, 100 are affected by an autosomal recessive disorder. Assuming Hardy-Weinberg equilibrium, calculate the frequency of the recessive allele.',
            a: '<i>q</i><sup>2</sup> = <frac><num>100</num><den>10000</den></frac> = 0.01. So <i>q</i> = √(0.01) = 0.1.',
          },
          {
            q: '[NEET] If the frequency of the recessive allele <i>a</i> is 0.2, what fraction of the population are carriers (<i>Aa</i>)?',
            a: 'Carrier frequency 2<i>pq</i> = 2 × 0.8 × 0.2 = 0.32 = 32 %.',
          },
          {
            q: '[NEET High-Difficulty] A population is in Hardy-Weinberg equilibrium. The frequency of the dominant allele <i>A</i> is <i>p</i> = 0.8. Calculate the expected frequency of affected individuals (homozygous recessive).',
            a: '<i>q</i> = 1 − <i>p</i> = 0.2. Affected frequency <i>q</i><sup>2</sup> = 0.04 = 4 %.',
          },
          {
            q: '[NEET] What does it mean when a population is said to be “in Hardy-Weinberg equilibrium”?',
            a: 'Allele frequencies remain constant from generation to generation, genotype frequencies follow <i>p</i><sup>2</sup> ∶ 2<i>pq</i> ∶ <i>q</i><sup>2</sup>, and there is no evolution (a large population with no mutation, selection, migration or genetic drift, and random mating). NCERT’s Evolution chapter lists five factors that change allele frequencies: gene migration, genetic drift, mutation, genetic recombination and natural selection.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 210–212 ─────────────────────────
  {
    n: 'F',
    title: 'Three-Point Test Cross: Gene Ordering in Detail',
    extra: true,
    kalam: 'Recombination frequency is proportional to distance, and Sturtevant used this to draw the first genetic map.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Recombination frequency is proportional to distance, and Sturtevant used this to draw the first genetic map. This section works through a complete three-point ordering example with a test-cross data table. It is a harder pattern that rewards a systematic method.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Given:</b> three linked genes with pairwise recombination frequencies (or a test cross showing parental and recombinant classes with counts). <b>Goal:</b> determine the linear order of the three genes on the chromosome.',
      },
      {
        t: 'p',
        html: '<b>Step 1: identify the two-point recombination frequencies.</b> From the data, find RF between each pair of genes.',
      },
      {
        t: 'p',
        html: '<b>Step 2: find the largest distance.</b> The two genes separated by the largest RF are the outermost genes (ends of the chromosome segment).',
      },
      {
        t: 'p',
        html: '<b>Step 3: identify the middle gene.</b> The gene that is missing from the largest-distance pair is the middle gene.',
      },
      {
        t: 'p',
        html: '<b>Step 4: additivity check.</b> The sum of the two smaller distances must equal the largest distance (within experimental error; double crossovers make the long distance read lower than the sum). If they do not, suspect double crossovers or measurement error.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Ordering from Test Cross Data.</b> <i>Drosophila</i> test cross of a trihybrid female <i>A</i><sup>+</sup><i>B</i><sup>+</sup><i>C</i><sup>+</sup> / <i>abc</i> yields 1000 offspring (phenotype, count):<br>• Parental: <i>A</i><sup>+</sup><i>B</i><sup>+</sup><i>C</i><sup>+</sup>, count 436<br>• Parental: <i>abc</i>, count 424<br>• Recombinant: <i>A</i><sup>+</sup><i>bc</i>, count 42<br>• Recombinant: <i>aB</i><sup>+</sup><i>C</i><sup>+</sup>, count 38<br>• Recombinant: <i>A</i><sup>+</sup><i>B</i><sup>+</sup><i>c</i>, count 31<br>• Recombinant: <i>abC</i><sup>+</sup>, count 29',
        steps: [
          '<b>Step 1:</b> calculate pairwise RF. For each pair, count the classes in which the two genes have been separated from their parental combination:<br>• <i>A</i>–<i>B</i>: <i>A</i><sup>+</sup><i>bc</i> (42) + <i>aB</i><sup>+</sup><i>C</i><sup>+</sup> (38) = <frac><num>80</num><den>1000</den></frac> = 8.0 %.<br>• <i>B</i>–<i>C</i>: <i>A</i><sup>+</sup><i>B</i><sup>+</sup><i>c</i> (31) + <i>abC</i><sup>+</sup> (29) = <frac><num>60</num><den>1000</den></frac> = 6.0 %.<br>• <i>A</i>–<i>C</i>: all four recombinant classes, 42 + 38 + 31 + 29 = <frac><num>140</num><den>1000</den></frac> = 14.0 %.',
          '<b>Step 2:</b> largest distance: <i>A</i>–<i>C</i> = 14.0 %, so <i>A</i> and <i>C</i> are the end genes.',
          '<b>Step 3:</b> gene <i>B</i> is the middle gene.',
          '<b>Step 4:</b> additivity: <i>A</i>–<i>B</i> + <i>B</i>–<i>C</i> = 8.0 % + 6.0 % = 14.0 % = <i>A</i>–<i>C</i>, as required. No double-crossover class (with the middle gene alone switched, <i>A</i><sup>+</sup><i>bC</i><sup>+</sup> or <i>aB</i><sup>+</sup><i>c</i>) appears in the data, so no correction is needed.',
        ],
        ans: 'Gene order is <i>A</i>–<i>B</i>–<i>C</i>, with <i>B</i> in the middle (<i>A</i>–<i>B</i> = 8 cM, <i>B</i>–<i>C</i> = 6 cM).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] What is the maximum recombination frequency between two linked genes, and why?',
            a: '50 %. Even if a crossover occurs between the two genes in every meiosis, only two of the four chromatids take part, so at most half of the gametes are recombinant. For genes far apart, multiple crossovers also cancel one another out, so the RF levels off at 50 %, the same as independent assortment, and the true distance is underestimated.',
          },
          {
            q: '[NEET] Three genes <i>A</i>, <i>B</i>, <i>C</i> show recombination frequencies: <i>A</i>–<i>B</i> = 5 %, <i>A</i>–<i>C</i> = 12 %, <i>B</i>–<i>C</i> = 17 %. What is the gene order?',
            a: '<i>A</i> is the middle gene. The largest distance is <i>B</i>–<i>C</i> = 17 %, so <i>B</i> and <i>C</i> are the ends. Order: <i>B</i>–<i>A</i>–<i>C</i> (check: 5 + 12 = 17).',
          },
          {
            q: '[NEET] In a three-point test cross, which recombinant class is the rarest, and why?',
            a: 'The double crossover class, because it requires two separate crossing-over events between three genes, making it far rarer than single crossovers.',
          },
          {
            q: '[NEET High-Difficulty] Genes <i>X</i>, <i>Y</i>, <i>Z</i> are linked. <i>X</i>–<i>Y</i> = 3 % and <i>Y</i>–<i>Z</i> = 7 %, while <i>X</i>–<i>Z</i> measured directly from the recombinants is 9.4 %. The double crossover frequency is observed to be 0.3 %. What is the true map distance <i>X</i>–<i>Z</i>? Why is it not simply 9.4 %?',
            a: 'True <i>X</i>–<i>Z</i> distance = 9.4 % + 2(0.3 %) = 10.0 cM, which equals <i>X</i>–<i>Y</i> + <i>Y</i>–<i>Z</i> = 3 + 7. The direct RF of 9.4 % underestimates the distance because each double crossover restores the parental <i>X</i>–<i>Z</i> combination and goes uncounted; since a double crossover is two crossover events, 2 × 0.3 % is added back.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic G · pp. 212–222 (the book's Addendum P) ─────────────────────────
  {
    n: 'G',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'The exam writers build this chapter’s questions around a handful of specific confusions.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: `NEET examiners return to this chapter often. The book estimates the topic weight from past papers (these are not official figures, and its question counts are probably too high, so only the relative weight is kept here): Mendelian inheritance is the largest share, then linkage with sex determination and genetic disorders, then mutation, then polygenic inheritance and pleiotropy.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Relative weight', 'Typical form'],
        rows: [
          ['Mendelian inheritance (ratios, dominance, test cross, ABO blood groups)', 'highest', 'Frequently combined in case-based sets'],
          ['Chromosomal theory, linkage & sex determination', 'high', 'Map-distance calculations and the sex-determination systems'],
          ['Genetic disorders (sickle-cell, haemophilia, Down/Klinefelter/Turner)', 'high', 'Karyotypes, sickle-cell molecular basis, X-linked probabilities'],
          ['Mutation (point vs frameshift, mutagens)', 'lower', 'Classifying the type of mutation'],
          ['Polygenic inheritance & pleiotropy', 'lowest', 'Often merged into a statement or matching question'],
        ],
      },
      {
        t: 'p',
        html: '<b>What this means for revision:</b> Dominance relationships and the blood-group genotype table are core. Map-distance problems and the sex-determination systems are worth practising. The chromosomal disorders (karyotype numbers) and the sickle-cell molecular basis are standard NCERT content. For polygenic inheritance know the idea (several genes, small additive effects) and the difference from pleiotropy; the 2<i>n</i> + 1 count is a useful extra, not an NCERT formula.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      {
        t: 'p',
        html: `NEET recycles roughly six question shapes across this chapter ${EST}. Recognizing the shape lets you reach for the right tool before reading the options.`,
      },

      { t: 'p', html: '<b>Archetype 1: The Ratio Completion (monohybrid / dihybrid / test cross)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A cross is described; you must identify the phenotypic or genotypic ratio in F<sub>2</sub>, or the offspring ratio of a test cross.<br><b>The approach:</b> Classify the cross in two seconds.<br>• One gene, F<sub>2</sub> → 3 ∶ 1 (pheno) / 1 ∶ 2 ∶ 1 (geno)<br>• Two genes, F<sub>2</sub> selfing → 9 ∶ 3 ∶ 3 ∶ 1 (complete dominance, independent assortment)<br>• Anything test-crossed with homozygous recessive → count the heterozygote’s gamete types; each gamete type gives one phenotypic class; the classes are in equal proportion if the genes assort independently, and unequal if they are linked<br>• Incomplete dominance or codominance → 1 ∶ 2 ∶ 1 (pheno = geno)',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'A homozygous tall pea plant (<i>TT</i>) is crossed with a homozygous dwarf pea plant (<i>tt</i>). The F<sub>1</sub> plants are selfed. What is the phenotypic ratio in the F<sub>2</sub> generation?',
        steps: [
          'Parent cross: <i>TT</i> × <i>tt</i> → all <i>Tt</i> (F<sub>1</sub>, all tall by dominance).',
          'F<sub>1</sub> selfed: <i>Tt</i> × <i>Tt</i>.',
          'Punnett square gives genotypes 1 <i>TT</i> ∶ 2 <i>Tt</i> ∶ 1 <i>tt</i>.',
          'Because <i>T</i> is dominant over <i>t</i>, <i>TT</i> and <i>Tt</i> both show tall phenotype, and <i>tt</i> shows dwarf.',
          'Phenotypic ratio = 3 tall ∶ 1 dwarf.',
        ],
        ans: '3 ∶ 1',
      },

      { t: 'p', html: '<b>Archetype 2: The Blood-Group Genotype Table</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> ABO blood groups appear as a standalone question or as the genetic backdrop of a probability problem. Students are asked for phenotypes, genotypes, or which children can be born from a given parental cross.<br><b>The approach:</b> Memorise the four-row table:',
      },
      {
        t: 'table',
        title: null,
        head: ['Genotype', 'Phenotype'],
        rows: [
          ['<i>I</i><sup><i>A</i></sup><i>I</i><sup><i>A</i></sup> or <i>I</i><sup><i>A</i></sup><i>i</i>', 'A'],
          ['<i>I</i><sup><i>B</i></sup><i>I</i><sup><i>B</i></sup> or <i>I</i><sup><i>B</i></sup><i>i</i>', 'B'],
          ['<i>I</i><sup><i>A</i></sup><i>I</i><sup><i>B</i></sup>', 'AB'],
          ['<i>ii</i>', 'O'],
        ],
      },
      {
        t: 'p',
        html: 'Key: <i>I</i><sup><i>A</i></sup> and <i>I</i><sup><i>B</i></sup> are codominant to each other and both dominant over <i>i</i>. Six genotypes, four phenotypes. Cross AB × O → only A or B children (neither AB nor O is possible).',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'A man with blood group AB marries a woman with blood group O. Which blood groups are possible in their children?',
        steps: [
          'Man’s genotype = <i>I</i><sup><i>A</i></sup><i>I</i><sup><i>B</i></sup>; woman’s genotype = <i>ii</i>.',
          'Gametes: man → <i>I</i><sup><i>A</i></sup> or <i>I</i><sup><i>B</i></sup> (each <frac><num>1</num><den>2</den></frac>); woman → <i>i</i> (all).',
          'Offspring: <frac><num>1</num><den>2</den></frac> <i>I</i><sup><i>A</i></sup><i>i</i> (group A) and <frac><num>1</num><den>2</den></frac> <i>I</i><sup><i>B</i></sup><i>i</i> (group B).',
          'Only A or B are possible.',
        ],
        ans: 'A or B (NOT AB, NOT O)',
      },

      { t: 'p', html: '<b>Archetype 3: Linkage and Recombination Frequency</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two genes are described as linked; recombinants are counted in an offspring population; you must calculate the map distance or state how many linkage groups the species has.<br><b>The approach:</b><br>• Recombination frequency (RF) = <frac><num>recombinant offspring</num><den>total offspring</den></frac> × 100.<br>• RF in percent = map distance in centiMorgans (cM).<br>• Ceiling: in a test cross the observed RF between two genes is at most 50 %; at 50 % the genes behave as if unlinked. Longer map distances are built by adding short intervals.<br>• Linkage groups = haploid chromosome number <i>n</i> (not diploid 2<i>n</i>; one more where the X and Y differ and are mapped separately).',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'In a test cross of a dihybrid heterozygote, 1000 offspring are scored. If 80 of them are recombinant types, calculate the map distance between the two genes and state how many linkage groups a species with 2<i>n</i> = 24 possesses.',
        steps: [
          'RF = <frac><num>80</num><den>1000</den></frac> × 100 = 8 %.',
          'Map distance = 8 cM.',
          'Species with 2<i>n</i> = 24 has <i>n</i> = 12 linkage groups.',
        ],
        ans: '8 cM; 12 linkage groups.',
      },

      { t: 'p', html: '<b>Archetype 4: Assertion-Reason (Dominance / Sex Determination / Mutation Type)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two statements are paired: an Assertion and a Reason. You must choose whether both are true and whether the Reason correctly explains the Assertion.<br><b>The approach:</b> Evaluate each statement independently first. Then check the logical link. A common failure is reading the Reason as a restatement of the Assertion rather than as a causal explanation.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Assertion:</b> In humans, the gamete contributed by the male determines whether the child will be male or female.<br><b>Reason:</b> Sex in humans is a polygenic trait depending upon a cumulative effect of some genes on the X-chromosome and some on the Y-chromosome.<br>Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
        steps: [
          'Assertion is <b>true</b>: the sperm carries either X or Y, and the egg always contributes X.',
          'Reason is <b>false</b>: human sex determination is not polygenic; it is governed by the presence or absence of the Y chromosome (the SRY gene). Sex is not a cumulative trait.',
          'In the standard Assertion-Reason format, this is the option “Assertion is true but Reason is false”.',
        ],
        ans: 'Assertion true, Reason false.',
      },

      { t: 'p', html: '<b>Archetype 5: Matching (Column-to-Term / Term-to-Definition)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two or three columns must be matched. Usually the columns mix terms from different topics (e.g., linking a syndrome to its karyotype, a scientist to their discovery, a mutation type to its definition).<br><b>The approach:</b> Map the easiest pair first. Eliminate options that conflict with confirmed matches. Do not assume the columns are in any order.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Match the items in Column I with Column II and select the correct option.<br>Column I: A. Turner syndrome; B. Linkage; C. Y-chromosome; D. Down syndrome<br>Column II: I. Trisomy 21; II. 44 + XO; III. Morgan; IV. Testis-determining factor',
        steps: [
          'Turner syndrome → 45, XO (one X missing in a female) → matches <b>II</b>.',
          'Linkage → described by Morgan (first reported by Bateson and Punnett) → matches <b>III</b>.',
          'Y-chromosome → carries the testis-determining factor → matches <b>IV</b>.',
          'Down syndrome → trisomy of chromosome 21 → matches <b>I</b>.',
        ],
        ans: 'A–II, B–III, C–IV, D–I',
      },

      { t: 'p', html: '<b>Archetype 6: Pedigree / Diagram Identification</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A pedigree chart or chromosome diagram is shown; you must identify the mode of inheritance or the syndrome.<br><b>The approach:</b><br>• Two unaffected parents → an affected child → recessive trait (if autosomal, both parents are carriers; if X-linked, the mother is the carrier).<br>• Affected individuals predominantly male, trait skipping generations → X-linked recessive.<br>• Two affected parents with an unaffected child → dominant trait.<br>• Karyotype description → name the syndrome from the chromosome count and sex chromosomes.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'A person has 45 chromosomes with the karyotype 44 + XO. Name the syndrome and state its cause.',
        steps: [
          '45 chromosomes with a single X in a female = Turner syndrome.',
          'Cause: non-disjunction of the sex chromosomes in gamete formation, so a gamete without a sex chromosome joins a normal X gamete (or a sex chromosome is lost early).',
        ],
        ans: 'Turner syndrome; caused by non-disjunction of sex chromosomes.',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: 'The exam writers build this chapter’s questions around a handful of specific confusions. Here is what to watch for.',
      },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What it punishes', 'How to avoid'],
        rows: [
          [
            '<b>ABO symmetry illusion</b>',
            'Students guess “AB × O → AB and O” because it feels symmetric.',
            'Remember: the AB parent cannot contribute <i>i</i>; the O parent cannot contribute <i>I</i><sup><i>A</i></sup> or <i>I</i><sup><i>B</i></sup>. The very groups that feel correct are the ones that are excluded.',
          ],
          [
            '<b>Klinefelter vs Turner swap</b>',
            'Both involve an extra or missing X, both are chromosomal disorders, and both involve 47 or 45 chromosomes: easy to invert.',
            'Anchor firmly: <b>Klinefelter = 47, XXY (male, extra X)</b>; <b>Turner = 45, XO (female, missing X)</b>.',
          ],
          [
            '<b>Point mutation confused with frameshift</b>',
            'Sickle-cell is a case that students often misclassify. They call it “frameshift” because it is famous and dramatic.',
            'Sickle-cell is a <b>point (substitution) mutation</b>: one base replaced → one codon changed → one amino acid swapped (glutamic acid → valine at position 6 of β-globin). Frameshift requires insertion or deletion of bases not in multiples of three.',
          ],
          [
            '<b>Linkage groups = 2<i>n</i></b>',
            'Linkage groups are often defined as “all the genes on one chromosome”: students reach for the diploid number.',
            'Linkage groups = <b>haploid</b> chromosome number <i>n</i> (one more where the X and Y differ and are mapped separately). For 2<i>n</i> = 24, answer is 12, not 24.',
          ],
          [
            '<b>Dominant epistasis F<sub>2</sub> ratio mis-memorised</b>',
            'Students confuse 12 ∶ 3 ∶ 1 (dominant epistasis) with 9 ∶ 3 ∶ 4 (recessive epistasis) or 13 ∶ 3 (dominant–recessive, i.e. inhibitory, epistasis).',
            '12 ∶ 3 ∶ 1 = dominant epistasis: a dominant allele at one locus masks the other gene. Recognise it as a modified dihybrid ratio, not a mistake. (13 ∶ 3 is the inhibitory case: a dominant inhibitor <i>I</i> masks the colour gene <i>C</i>, so <i>I</i>_<i>C</i>_, <i>I</i>_<i>cc</i> and <i>iicc</i>, 9 + 3 + 1 = 13, are uncoloured and <i>iiC</i>_, 3, are coloured; it is not worked in this chapter.)',
          ],
          [
            '<b>Sex determination: mother vs father</b>',
            '“Father determines sex” is drilled for humans; students apply it to birds where it is the <b>mother</b> who is heterogametic (ZW).',
            'Learn the four systems with the heterogametic sex explicitly: XX–XY → male heterogametic; XX–XO → male heterogametic; ZZ–ZW → female heterogametic; haplodiploidy → no sex chromosomes.',
          ],
          [
            '<b>Carrier vs affected probability swap</b>',
            'For an autosomal recessive cross <i>Aa</i> × <i>Aa</i>: affected risk is <frac><num>1</num><den>4</den></frac>, carrier risk is <frac><num>2</num><den>4</den></frac> = <frac><num>1</num><den>2</den></frac>. Students frequently write <frac><num>1</num><den>4</den></frac> for both.',
            'Draw the Punnett square once. Affected = <i>aa</i> (1 cell). Carrier = <i>Aa</i> (2 cells). Non-carrier = <i>AA</i> (1 cell).',
          ],
        ],
      },

      { t: 'part', title: 'Graded Practice Set' },
      {
        t: 'p',
        html: 'The following 10 questions span the range of difficulty found in NEET-style papers, from direct recall to multi-step application.',
      },
      {
        t: 'practice',
        items: [
          {
            q: '[Recall (Easy)] Which Mendelian law states that the two alleles of a gene separate during gamete formation so that each gamete carries only one allele?<br><b>(a)</b> Law of Dominance<br><b>(b)</b> Law of Segregation<br><b>(c)</b> Law of Independent Assortment<br><b>(d)</b> Law of Linkage',
            a: '(b). The Law of Segregation (also called the Law of Purity of Gametes) states that the two alleles of a gene segregate: one goes to each gamete. The Law of Independent Assortment involves two different genes.',
          },
          {
            q: '[Application (Easy–Medium)] In a monohybrid cross of a heterozygote <i>Tt</i> × <i>Tt</i>, what fraction of the F<sub>2</sub> offspring are expected to be homozygous recessive?<br><b>(a)</b> <frac><num>1</num><den>4</den></frac><br><b>(b)</b> <frac><num>1</num><den>2</den></frac><br><b>(c)</b> <frac><num>3</num><den>4</den></frac><br><b>(d)</b> <frac><num>1</num><den>3</den></frac>',
            a: '(a). The Punnett square gives genotypes <i>TT</i> ∶ <i>Tt</i> ∶ <i>tt</i> = 1 ∶ 2 ∶ 1. The homozygous recessive class (<i>tt</i>) is <frac><num>1</num><den>4</den></frac> of the total.',
          },
          {
            q: '[Application (Medium)] A woman with blood group A (genotype <i>I</i><sup><i>A</i></sup><i>i</i>) marries a man with blood group B (genotype <i>I</i><sup><i>B</i></sup><i>i</i>). Which blood groups can their children have?<br><b>(a)</b> A only<br><b>(b)</b> A, B, AB and O<br><b>(c)</b> A and B only<br><b>(d)</b> A, B and AB only',
            a: '(b). Parents: <i>I</i><sup><i>A</i></sup><i>i</i> × <i>I</i><sup><i>B</i></sup><i>i</i>. Gametes from each parent are <i>I</i><sup><i>A</i></sup> or <i>i</i> (from mother) and <i>I</i><sup><i>B</i></sup> or <i>i</i> (from father). Offspring genotypes: <i>I</i><sup><i>A</i></sup><i>I</i><sup><i>B</i></sup> (AB), <i>I</i><sup><i>A</i></sup><i>i</i> (A), <i>I</i><sup><i>B</i></sup><i>i</i> (B), <i>ii</i> (O). All four phenotypes are possible.',
          },
          {
            q: '[Application (Medium)] A plant species has a diploid chromosome number 2<i>n</i> = 20. How many linkage groups does it possess?<br><b>(a)</b> 20<br><b>(b)</b> 10<br><b>(c)</b> 40<br><b>(d)</b> 5',
            a: '(b). Linkage groups equal the haploid chromosome number <i>n</i>. Here <i>n</i> = 10. The diploid number counts both homologous copies; each distinct chromosome is one linkage group.',
          },
          {
            q: '[Analysis (Medium–Hard)] A test cross of a dihybrid heterozygote produces 1000 offspring, of which 940 show parental phenotypes and 60 show recombinant phenotypes.<br>(a) Calculate the recombination frequency between the two genes.<br>(b) What is the map distance between them in centiMorgans?',
            a: '(a) RF = <frac><num>60</num><den>1000</den></frac> × 100 = 6 %.<br>(b) Map distance = 6 cM.<br>The predominantly parental phenotypes (940 out of 1000) confirm the genes are linked; the 6 % recombinant frequency translates directly to 6 cM.',
          },
          {
            q: '[Analysis (Hard)] A colour-blind man (<i>X</i><sup><i>c</i></sup><i>Y</i>) marries a woman who is a carrier for colour blindness (<i>X</i><sup><i>C</i></sup><i>X</i><sup><i>c</i></sup>). What is the probability that a daughter born to them will be colour blind?<br><b>(a)</b> 0<br><b>(b)</b> <frac><num>1</num><den>4</den></frac><br><b>(c)</b> <frac><num>1</num><den>2</den></frac><br><b>(d)</b> <frac><num>3</num><den>4</den></frac>',
            a: '(c). Father passes <i>X</i><sup><i>c</i></sup> to every daughter. Mother contributes either <i>X</i><sup><i>C</i></sup> (normal daughter, carrier) or <i>X</i><sup><i>c</i></sup> (colour-blind daughter). Half of all daughters receive <i>X</i><sup><i>c</i></sup><i>X</i><sup><i>c</i></sup> and are colour blind. P(daughter colour blind) = <frac><num>1</num><den>2</den></frac>.',
          },
          {
            q: '[Analysis (Hard)] In a three-gene polygenic model for human skin colour, an <i>AaBbCc</i> individual marries another <i>AaBbCc</i> individual. What fraction of their children are expected to have the lightest possible skin colour (carrying no dominant alleles)?<br><b>(a)</b> (<frac><num>1</num><den>2</den></frac>)<sup>3</sup><br><b>(b)</b> (<frac><num>1</num><den>4</den></frac>)<sup>3</sup><br><b>(c)</b> <frac><num>1</num><den>6</den></frac><br><b>(d)</b> <frac><num>1</num><den>16</den></frac>',
            a: '(b). Lightest phenotype requires <i>aabbcc</i>: each gene must be homozygous recessive. For one gene, P(<i>aa</i>) = <frac><num>1</num><den>4</den></frac>. Across three independent genes, P(all <i>aabbcc</i>) = (<frac><num>1</num><den>4</den></frac>)<sup>3</sup> = <frac><num>1</num><den>64</den></frac>.<br>The common trap answer (<frac><num>1</num><den>2</den></frac>)<sup>3</sup> = <frac><num>1</num><den>8</den></frac> forgets that each gene needs two recessive alleles (not one), which is a <frac><num>1</num><den>4</den></frac> event per gene.',
          },
          {
            q: '[Evaluation (Hard)] Sickle-cell anaemia is caused by a substitution of valine for glutamic acid at the 6th position of the β-globin chain. Which one of the following best describes the type of mutation?<br><b>(a)</b> Frameshift mutation<br><b>(b)</b> Point (substitution) mutation<br><b>(c)</b> Chromosomal deletion<br><b>(d)</b> Polyploidy',
            a: '(b). A single base pair change (GAG → GTG on the coding (non-template) strand of the DNA, GAG → GUG in the mRNA, which changes the codon for glutamic acid to valine) is a point mutation. It alters one codon and one amino acid. It is not a frameshift (which requires insertion or deletion of bases not in multiples of three), not a chromosomal deletion, and not a polyploidy event.',
          },
          {
            q: '[Evaluation (Hard)] Three genes give pairwise map distances: A–B = 5 cM, B–C = 15 cM, A–C = 10 cM. What is the linear order of these genes on the chromosome?<br><b>(a)</b> A–B–C<br><b>(b)</b> B–A–C<br><b>(c)</b> A–C–B<br><b>(d)</b> B–C–A',
            a: '(b). The largest distance (B–C = 15 cM) identifies B and C as the outermost genes. The gene missing from that pair is A, which must therefore lie between B and C. The order is B–A–C. (Check: A–B + A–C = 5 + 10 = 15 = B–C, confirming additivity.)',
          },
          {
            q: '[Evaluation (Hard)] A cross between a red-flowered homozygous plant and a white-flowered homozygous plant of <i>Antirrhinum majus</i> (snapdragon) produces all pink-flowered F<sub>1</sub> plants. When two pink F<sub>1</sub> plants are crossed, the F<sub>2</sub> generation shows a phenotypic ratio of<br><b>(a)</b> 3 ∶ 1<br><b>(b)</b> 1 ∶ 2 ∶ 1<br><b>(c)</b> 9 ∶ 3 ∶ 3 ∶ 1<br><b>(d)</b> 1 ∶ 1',
            a: '(b). <i>Antirrhinum</i> flower colour shows incomplete dominance: <i>RR</i> = red, <i>Rr</i> = pink, <i>rr</i> = white. The F<sub>1</sub> from <i>RR</i> × <i>rr</i> are all <i>Rr</i> (pink). Crossing pink × pink (<i>Rr</i> × <i>Rr</i>) gives genotypes <i>RR</i> ∶ <i>Rr</i> ∶ <i>rr</i> = 1 ∶ 2 ∶ 1, and because every genotype produces a distinct phenotype, the phenotypic ratio is also 1 ∶ 2 ∶ 1. This is the hallmark ratio for incomplete dominance (and codominance), where phenotype mirrors genotype.',
          },
        ],
      },

      { t: 'part', title: 'Last-Minute Revision Tips' },
      {
        t: 'p',
        html: '• <b>Memorise the ratio family.</b> 9 ∶ 3 ∶ 3 ∶ 1 (dihybrid), 1 ∶ 2 ∶ 1 (incomplete dominance, codominance), 9 ∶ 3 ∶ 4 (recessive epistasis), 9 ∶ 7 (complementary genes), 12 ∶ 3 ∶ 1 (dominant epistasis), 13 ∶ 3 (dominant–recessive epistasis) and 15 ∶ 1 (duplicate genes). Each of the dihybrid ratios from 9 ∶ 3 ∶ 3 ∶ 1 to 15 ∶ 1 is a regrouping of the sixteen dihybrid boxes; 1 ∶ 2 ∶ 1 is the monohybrid ratio for incomplete dominance and codominance.<br>• <b>Use the heterogametic rule for sex determination.</b> The heterogametic parent decides the sex of the offspring: the father in XX–XY and XX–XO systems, the mother in the ZZ–ZW system (birds, and also some fish, reptiles and butterflies).',
      },
    ],
  },
];
