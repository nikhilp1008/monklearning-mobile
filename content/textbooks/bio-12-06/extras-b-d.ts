import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 6 (Evolution), Additional topics B to D, word for word from the Class 12 Biology Master
 * Reference (book pp. 334 to 350): B "Speciation: Modes and Isolating Mechanisms" (opens low on p. 334 after Addendum
 * A's practice answers; ends p. 338), C "Molecular Evolution and the Molecular Clock" (p. 338 to the top of p. 341) and
 * D "What NEET Actually Asks" (the book's "Addendum P", p. 341 to p. 350). Page 351 is the next chapter.
 *
 * Topic indexes (position in the chapter's topics array): Topics 01 to 04 = 0 to 3, Additional A = 4, so B = 5,
 * C = 6 and D (the last) = 7. The brief's "4 to 6" for A to C counts the topics array as the brief wrote it; the
 * chapter file joins topics-1-2, topics-3-4-extra-a, then this file. No figure occurs in these pages (only ruled
 * table lines). The book's example headings ("Example B.1 - [CBSE Board] Identifying Speciation Type") become the
 * example's tag (the bracket) and a bold lead on its question. The book's own mistakes are copied as printed and
 * listed in the writer's report.
 */
const EST = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic B · pp. 334–338 ─────────────────────────
  {
    n: 'B',
    title: 'Speciation: Modes and Isolating Mechanisms',
    extra: true,
    kalam: 'The chapter treats adaptive radiation and, in the Modern Synthesis, names reproductive isolation as part of how speciation is explained.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter treats adaptive radiation (Topic 02 and Topic 04) and, in the Modern Synthesis (Topic 02), names reproductive isolation as part of how speciation is explained. It does not systematise the two modes of speciation (allopatric and sympatric) or classify the isolating mechanisms that prevent gene flow between populations. NEET and CUET regularly ask students to identify speciation type from a description and to distinguish pre-zygotic from post-zygotic isolating mechanisms ${EST}.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Allopatric speciation (geographic isolation).</b> A physical barrier (a mountain range, ocean, river, glacier) splits a population into two or more isolated groups. Each group faces different selection pressures and undergoes independent genetic change. Given sufficient time and isolation, the groups become reproductively isolated and can no longer interbreed even if the barrier is removed. A commonly cited example is Darwin’s finches on the Galápagos Islands, where isolated island populations diverged into distinct species (an NCERT example of adaptive radiation).',
      },
      {
        t: 'p',
        html: '<b>Sympatric speciation (ecological or reproductive isolation within the same geographic area).</b> Speciation occurs without physical separation. This is more contentious and typically involves:<br>• <b>Ecological isolation:</b> different habitat preferences within the same area.<br>• <b>Polyploidy:</b> especially in plants, where chromosome doubling prevents interbreeding with the parent population.<br>• <b>Behavioural isolation:</b> different mating calls or courtship rituals. (Different mating seasons or times are temporal isolation, not behavioural.)',
      },
      {
        t: 'p',
        html: 'NCERT does not classify speciation as allopatric or sympatric; it uses Darwin’s finches of the Galápagos and the marsupials of Australia as its examples of adaptive radiation, which is usually explained by geographic isolation followed by divergence.',
      },
      { t: 'p', html: '<b>Pre-zygotic isolating mechanisms (prevent fertilisation from occurring).</b>' },
      {
        t: 'table',
        title: null,
        head: ['Mechanism', 'What it does', 'Example'],
        rows: [
          ['Habitat isolation', 'Species occupy different habitats', '<i>Rana</i> frogs in ponds vs streams'],
          ['Temporal isolation', 'Different breeding seasons or times', '<i>Cicada</i> species emerging in different years'],
          ['Behavioural isolation', 'Different mating rituals or calls', 'Bird song differences; firefly flash patterns'],
          ['Mechanical isolation', 'Structural differences prevent mating', 'Flower shape matching pollinator; insect genitalia mismatch'],
          ['Gametic isolation', 'Sperm and egg are incompatible', 'Sea urchin species with species-specific egg coat proteins'],
        ],
      },
      { t: 'p', html: '<b>Post-zygotic isolating mechanisms (fertilisation occurs but hybrid is inviable or sterile).</b>' },
      {
        t: 'table',
        title: null,
        head: ['Mechanism', 'What it does', 'Example'],
        rows: [
          ['Hybrid inviability', 'Hybrid zygote or embryo fails to develop, or the hybrid dies before maturity', 'Cross between some <i>Rana</i> frog species'],
          ['Hybrid sterility', 'Hybrid is viable but cannot reproduce', 'Mule (horse × donkey)'],
          ['Hybrid breakdown', 'F<sub>1</sub> hybrid is viable but F<sub>2</sub> or backcross fails', 'Some plant hybrids'],
        ],
      },
      {
        t: 'p',
        html: '<b>The logic chain.</b> Pre-zygotic mechanisms are “cheaper” for the population, with no wasted gametes or resources on a non-viable hybrid. Post-zygotic mechanisms are the “backup” when pre-zygotic barriers fail. Both result in reproductive isolation, which, on the biological species concept, is what makes two groups separate species.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Identifying Speciation Type.</b> A species of freshwater fish living in a lake is split into two separate pools when a drought dries up the connecting stream. Over thousands of years, the two populations evolve different body shapes and can no longer interbreed successfully even when a flood reconnects the pools. Name the type of speciation and the initial isolating mechanism.',
        steps: [
          'The two populations were physically separated by the drying of a stream, a geographic barrier. This is <b>allopatric speciation</b>. The initial barrier was <b>geographic isolation</b> (physical separation of habitats); the reproductive isolating mechanisms evolved afterwards.',
        ],
        ans: 'Allopatric speciation; the initial barrier was geographic isolation (physical separation), and the reproductive isolating mechanisms evolved afterwards.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Classifying Isolating Mechanisms.</b> Three pairs of related species show the following patterns:<br>• Species P and Q flower in different seasons and never cross-pollinate.<br>• Species R and S produce hybrid offspring that are born stunted and die before maturity.<br>• Species T and U occupy different microhabitats within the same forest and do not encounter each other.<br>Classify each as a pre-zygotic or post-zygotic mechanism.',
        steps: [
          'P/Q: Different flowering seasons prevent pollen from one reaching the other: this is <b>temporal isolation</b> (pre-zygotic).',
          'R/S: A hybrid forms but is not viable: it develops abnormally and dies before maturity; this is <b>hybrid inviability</b> (post-zygotic).',
          'T/U: Different microhabitats mean the two species never meet: this is <b>habitat isolation</b> (pre-zygotic).',
        ],
        ans: 'P/Q = pre-zygotic (temporal); R/S = post-zygotic (hybrid inviability); T/U = pre-zygotic (habitat).',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Sympatric Speciation in Plants.</b> A flowering plant species colonises a new area with two distinct soil types. After many generations, the population growing on soil type A produces flowers that open in the morning and attract day-flying pollinators, while the population on soil type B produces flowers that open at night and attract night-flying moths. Eventually, the two groups can no longer interbreed. Identify the type of speciation and the primary isolating mechanism.',
        steps: [
          'Two plant populations diverged within the same geographic area (no physical barrier separated them), so this is <b>sympatric speciation</b>. The primary isolating mechanism is <b>temporal isolation</b>: the flowers open at different times of day (morning versus night), reinforced by different pollinators (day-flying insects versus night-flying moths), so cross-pollination between the two groups does not occur. The different soil types provide the ecological difference that started the divergence.',
        ],
        ans: 'Sympatric speciation; primary isolating mechanism is temporal isolation (reinforced by different pollinators).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Reproductive Isolation and Speciation.</b> Explain why geographic isolation alone does not guarantee speciation, and what additional condition must be met for two geographically separated populations to become distinct species.',
        steps: [
          'Geographic isolation merely separates populations physically. For speciation to occur, the two isolated populations must also undergo <b>genetic divergence</b>: independent evolution of allele frequencies through mutation, natural selection (different environments select for different traits), or genetic drift (random changes, especially powerful in small isolated populations). Without genetic divergence, if the barrier were removed, the populations could still interbreed successfully and would merge back into a single gene pool. Only when reproductive isolation has evolved (meaning the populations can no longer successfully interbreed even if reunited) are they considered distinct species.',
        ],
        ans: 'Geographic isolation alone is insufficient; the populations must also undergo genetic divergence so that they become reproductively isolated (cannot produce viable, fertile offspring upon reunion).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Distinguish between allopatric and sympatric speciation, giving one example of each.',
            a: 'Allopatric speciation: geographic separation drives divergence (e.g., Darwin’s finches, whose island populations were geographically isolated). Sympatric speciation: divergence occurs without geographic separation (e.g., polyploidy in plants; different food-plant preferences in some insects).',
          },
          {
            q: '[CUET] A moth species on the mainland has a wing-pattern allele that is harmless on tree bark. An isolated island population of the same species, with darker bark, shows strong selection for a different allele. Over time, the two populations no longer interbreed. Name the type of speciation and the evolutionary force that drove divergence.',
            a: 'Allopatric speciation (island was geographically separated from mainland); the evolutionary force was natural selection (different bark colours selected for different wing patterns).',
          },
          {
            q: '[NEET] Which of the following is a post-zygotic isolating mechanism?<br><b>(a)</b> Temporal isolation<br><b>(b)</b> Mechanical isolation<br><b>(c)</b> Hybrid sterility<br><b>(d)</b> Habitat isolation',
            a: '(c) Hybrid sterility: the hybrid is viable but sterile (e.g., mule), so reproduction fails after fertilisation (post-zygotic). (a), (b), and (d) are all pre-zygotic.',
          },
          {
            q: '[NEET] Two species of frog, <i>Rana pipiens</i> and <i>Rana clamitans</i>, breed in the same pond but at different times of day. What type of isolating mechanism is this?',
            a: 'Temporal isolation (pre-zygotic): the two species breed at different times and therefore do not encounter each other as potential mates.',
          },
          {
            q: '[NEET High-Difficulty] A researcher finds that two morphologically distinct fish populations in the same lake do not interbreed because they prefer different water depths. Later, when individuals are forced to share the same depth, they still fail to produce viable offspring. Describe the isolating mechanisms acting in each stage and state when speciation is complete.',
            a: 'Initially: habitat isolation (pre-zygotic): different water depths meant the populations did not encounter each other. After forced cohabitation: hybrid inviability (post-zygotic): the hybrid zygote or embryo fails to develop. Speciation is complete once reproductive isolation is established; here both pre-zygotic (habitat) and post-zygotic (hybrid inviability) barriers have evolved, so the populations are distinct species whether or not they physically meet.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 338–341 ─────────────────────────
  {
    n: 'C',
    title: 'Molecular Evolution and the Molecular Clock',
    extra: true,
    kalam: 'Neutral mutations accumulate at a relatively constant rate because they are not subject to natural selection.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter mentions molecular evidence for evolution (human–chimpanzee DNA differing in ~1.8% of base pairs, about 1.2 to 1.8% depending on how differences are counted) but does not develop the concept of a molecular clock: the idea that DNA or protein sequence divergence accumulates at roughly constant rates over time, allowing us to estimate when two species last shared a common ancestor. This concept appears in NEET assertion–reason items and in CUET’s applied questions ${EST}.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The molecular clock hypothesis.</b> Neutral mutations (mutations that do not affect fitness) accumulate at a relatively constant rate because they are not subject to natural selection. By counting the number of differences between two homologous DNA sequences or proteins and knowing the approximate rate of change, we can estimate the time since their last common ancestor:<br>Divergence time = <frac><num>Number of sequence differences</num><den>Rate of divergence per million years</den></frac><br>The rate here is the rate at which the two sequences diverge from each other (differences per million years, both lineages together). If a rate is given for one lineage, the pair diverges at twice that rate.',
      },
      {
        t: 'p',
        html: 'The cytochrome-C protein is the classic example. Human and chimpanzee cytochrome-C are identical; human and rhesus monkey cytochrome-C differ in one amino acid. This difference is consistent with the species’ divergence times estimated from fossils.',
      },
      {
        t: 'p',
        html: '<b>The logic chain.</b> If the mutation rate is approximately constant (the clock ticks regularly), then species that diverged longer ago should show proportionally more sequence differences. The calibration comes from the fossil record: if two species diverged <i>T</i> million years ago (known from fossils) and show <i>D</i> sequence differences, then the rate = <frac><num><i>D</i></num><den><i>T</i></den></frac>. Once calibrated, the clock can predict divergence times for other pairs.',
      },
      {
        t: 'p',
        html: '<b>Key assumptions.</b> The molecular clock is approximate, not exact. It assumes:<br>• Most mutations are neutral (not under strong selection).<br>• The mutation rate has remained roughly constant over the time period considered.<br>• The two lineages have evolved independently since splitting.',
      },
      {
        t: 'p',
        html: 'Violations of these assumptions produce discrepancies between molecular and fossil estimates.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Interpreting Sequence Divergence.</b> Two species of fish are thought to have diverged from a common ancestor 20 million years ago. Their haemoglobin sequences differ at 15 amino acid positions. A second pair of related fish species shows 30 amino acid differences. Estimate how long ago this second pair diverged, assuming a constant rate of amino acid substitution.',
        steps: [
          'Rate of substitution for the pair = <frac><num>15 differences</num><den>20 mya</den></frac> = 0.75 differences per million years.',
          'For the second pair with 30 differences:',
          'Divergence time = <frac><num>30</num><den>0.75</den></frac>',
        ],
        ans: 'The second pair of fish diverged approximately 40 million years ago.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Molecular vs Morphological Evolution.</b> A student argues that because human and chimpanzee skulls look very different, their DNA should differ by a much larger percentage than the observed ~1.8%. Evaluate this argument using the concept of neutral mutations.',
        steps: [
          'The student’s argument confuses morphological evolution with molecular evolution. Most DNA differences are <b>neutral</b>: they occur in non-coding regions or in codon positions that do not change the amino acid sequence. These changes accumulate at a constant rate regardless of how different the organisms look externally. Morphological traits (skull shape, brain size) are shaped by natural selection and often evolve rapidly under strong selective pressure. DNA differences, particularly in slowly-evolving genes like those coding for cytochrome-C or ribosomal RNA, reflect time since common ancestry more directly than morphology does. The ~1.8% figure counts differences, most of them neutral; it does not measure the rate of morphological change.',
        ],
        ans: 'The argument is incorrect. Most DNA differences are neutral and accumulate slowly; morphological differences are subject to strong selection and can change rapidly. The two evolve at different rates.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Limitations of the Molecular Clock.</b> Molecular-clock estimates for the split of the human and chimpanzee lineages (about 6–8 million years ago) do not always agree with dates read directly from fossils. Suggest reasons for such a discrepancy.',
        steps: [
          'First, <b>calibration error</b>: the molecular clock rate is calibrated using fossil dates, but the earliest potential hominin fossils may not represent the true split point (transitional forms are difficult to date precisely). Second, <b>rate variation</b>: the molecular clock assumes a constant substitution rate, but actual rates can vary between lineages due to differences in generation time, DNA repair mechanisms, or selective pressures. If the human lineage accumulated mutations slightly faster or slower than assumed after the split, the estimate shifts. Third, <b>incomplete lineage sorting</b>: ancestral polymorphism (variation present in the common ancestor) can mean that different genes split at different times, so a single-gene estimate may not reflect the true population-level split.',
        ],
        ans: 'The discrepancy can arise from calibration uncertainty (fossils may not mark the exact split), rate variation (substitution rates may not be constant across lineages or over time) and incomplete lineage sorting (different genes can have different split times).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] What is meant by a “molecular clock,” and name one molecule commonly used to calibrate it in evolutionary studies?',
            a: 'The molecular clock is the hypothesis that neutral mutations accumulate at roughly constant rates in DNA or protein sequences, allowing divergence times to be estimated from sequence differences. Cytochrome-C is a classic example, used because it is highly conserved across eukaryotes.',
          },
          {
            q: '[NEET] Human cytochrome-C differs from horse cytochrome-C in 12 amino acids and from chicken cytochrome-C in 13 amino acids. Which of the two, horse or chicken, shares a more recent common ancestor with humans, and why?',
            a: 'Horse: its cytochrome-C differs from the human one in fewer amino acids (12 against 13), and fewer differences mean less time for mutations to accumulate since the split, which suggests a more recent split. This agrees with the fossil and anatomical evidence that horse and human are both mammals. A one-amino-acid difference is a weak signal on its own.',
          },
          {
            q: '[NEET] State two assumptions of the molecular clock hypothesis.',
            a: '(i) Most mutations are neutral (not affected by natural selection). (ii) The mutation rate has remained roughly constant over the evolutionary time period being measured. (Optional third: the lineages being compared have evolved independently since splitting.)',
          },
          {
            q: '[NEET High-Difficulty] Two insect species show 8% DNA sequence divergence. If the mutation rate is estimated at 0.5% per million years, calculate the approximate time since their last common ancestor.',
            a: 'Divergence time = <frac><num>8%</num><den>0.5% per million years</den></frac> = 16 million years, taking 0.5% per million years as the rate at which the two sequences diverge from each other. (If 0.5% is the rate in each lineage, they diverge at 1.0% per million years and the time is 8 million years.)',
          },
          {
            q: '[CUET] Why does a molecular clock based on cytochrome-C give more reliable estimates of divergence time than one based on a gene under strong directional selection?',
            a: 'Cytochrome-C is highly conserved and changes slowly, making its substitution rate relatively constant: ideal for a clock. A gene under strong directional selection evolves rapidly and unpredictably, so its substitution rate is not constant and cannot serve as a reliable clock.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 341–350 ─────────────────────────
  {
    n: 'D',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'The frequency signal below is a guide to where marks have come from, not a guarantee for any single year.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: `A range of past NEET and AIPMT papers spread their questions on this chapter across seven blocks. The frequency signal below is a guide to where marks have come from, not a guarantee for any single year ${EST}.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Frequency signal'],
        rows: [
          ['<b>Origin of Life & Chemical Evolution</b>', 'High: appears in nearly every paper'],
          ['<b>Homology vs Analogy</b>', 'Very high: 2–3 items per paper is common'],
          ['<b>Hardy–Weinberg Principle</b>', 'Moderate to high: one numerical every 2–3 years'],
          ['<b>Natural Selection (types & evidence)</b>', 'High: appears annually'],
          ['<b>Human Evolution</b>', 'Moderate: 1 question most years'],
          ['<b>Theories of Evolution (Lamarck/Darwin/de Vries)</b>', 'Moderate'],
          ['<b>Geological Timeline & Adaptive Radiation</b>', 'Lower in past papers, but NCERT-based'],
        ],
      },
      {
        t: 'p',
        html: '<b>A caution:</b> questions on the plant evolution sequence (algae → angiosperms) and on the dinosaur extinction followed by the mammalian radiation are drawn straight from NCERT even when they are less frequent in past papers. Treat the geological-eras table as higher-stakes than the frequency signal alone suggests.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      {
        t: 'p',
        html: `NEET recycles roughly six question shapes with near-predictable regularity ${EST}. Each is described below with its cracking strategy and one or two worked representative examples.`,
      },

      { t: 'p', html: '<b>Archetype 1: The Miller–Urey Factoid (single correct, recall-based)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A one-line question asking what Miller and Urey produced, or what the primitive atmosphere contained, or what the experiment proved.<br><b>Approach:</b> Memorise three facts: (1) reducing atmosphere: CH<sub>4</sub> + NH<sub>3</sub> + H<sub>2</sub> + H<sub>2</sub>O; (2) product: amino acids, not life; (3) it supported Oparin–Haldane, not “created life.” The distractors usually offer nucleotides, peptides, or the claim that life itself was produced.<br><b>Worked example:</b>',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Stanley L. Miller conducted experiments before 1953 on prebiotic Earth environment. The primary surprising products were<br><b>(a)</b> amino acids<br><b>(b)</b> peptides<br><b>(c)</b> nucleotides<br><b>(d)</b> simple sugars',
        steps: [
          '<b>Solution:</b> Miller and Urey sparked a reducing gas mixture (CH<sub>4</sub>, NH<sub>3</sub>, H<sub>2</sub>, H<sub>2</sub>O) and obtained amino acids, the first organic monomers. Peptides and nucleotides require further polymerisation steps the experiment did not achieve. Simple sugars were not a major product.',
        ],
        ans: '(a) amino acids',
      },

      { t: 'p', html: '<b>Archetype 2: Homology vs Analogy Discrimination (single correct)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A list of paired structures; students must identify which pair is homologous (same structure, different function, divergent evolution) and which is analogous (different structure, same function, convergent evolution).<br><b>Approach:</b> Ask one question only: Are the underlying bones/developmental origin the same? If yes → homologous → divergent. If no but function matches → analogous → convergent. Function is the usual distractor.<br><b>Worked example:</b>',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Thorn of <i>Bougainvillea</i> and tendril of <i>Cucurbita</i> are examples of<br><b>(a)</b> retrogressive evolution<br><b>(b)</b> analogous organs<br><b>(c)</b> homologous organs<br><b>(d)</b> vestigial organs',
        steps: [
          '<b>Solution:</b> Both the thorn and the tendril arise from the same positional and embryological origin in the stem but perform different functions (protection vs climbing). Same structure, different function → homologous organs → divergent evolution.',
        ],
        ans: '(c) homologous organs',
      },
      { t: 'p', html: '<b>Second worked example:</b>' },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'The similarity in the eyes of <i>Octopus</i> and monkeys is the result of<br><b>(a)</b> divergent evolution<br><b>(b)</b> convergent evolution',
        steps: [
          '<b>Solution:</b> <i>Octopus</i> and monkey eyes do the same job (vision) but are built on entirely different developmental plans (invertebrate camera eye vs vertebrate camera eye). Different structure, same function → convergent evolution → analogous.',
        ],
        ans: '(b) convergent evolution',
      },

      { t: 'p', html: '<b>Archetype 3: Hardy–Weinberg Numerical (single correct, calculation)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Given either the dominant allele frequency (<i>p</i>) or the recessive phenotype count (<i>q</i><sup>2</sup>), calculate the heterozygote frequency or the number of carriers.<br><b>Approach:</b> The recessive phenotype count gives <i>q</i><sup>2</sup> directly: take the square root to get <i>q</i>, then <i>p</i> = 1 − <i>q</i>. At Hardy–Weinberg equilibrium the heterozygote frequency is 2<i>pq</i>. The homozygous dominant is <i>p</i><sup>2</sup>. Verify all three sum to 1 before committing.<br><b>Worked example:</b>',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'A population is in Hardy–Weinberg equilibrium for a gene with only two alleles. If the gene frequency of an allele <i>A</i> is 0.7, the genotype frequency of <i>Aa</i> is<br><b>(a)</b> 0.21<br><b>(b)</b> 0.42<br><b>(c)</b> 0.36<br><b>(d)</b> 0.7',
        steps: [
          '<b>Solution:</b> <i>p</i> = 0.7, so <i>q</i> = 0.3. Heterozygote frequency = 2<i>pq</i> = 2 × 0.7 × 0.3 = 0.42',
        ],
        ans: '(b) 0.42',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'If the frequency of dominant allele is 60%, find out the percentage of heterozygous individuals in the population.<br><b>(a)</b> 48%<br><b>(b)</b> 50%<br><b>(c)</b> 47%<br><b>(d)</b> 45%',
        steps: [
          '<b>Solution:</b> <i>p</i> = 0.6, so <i>q</i> = 0.4. Heterozygotes = 2 × 0.6 × 0.4 = 0.48 = 48%',
        ],
        ans: '(a) 48%',
      },

      { t: 'p', html: '<b>Archetype 4: Assertion–Reason (4-option pattern)</b>' },
      {
        t: 'p',
        html: `<b>What it looks like:</b> An Assertion (A) statement paired with a Reason (R) statement; four combinations (a–d) test whether each is true and whether R explains A.<br><b>Approach:</b> Evaluate A first. If A is false (and R is true), the answer is (d). If A is true, evaluate R: if R is false, the answer is (c). If both true, ask: does R directly and specifically explain A, or is it merely a related true fact? The most common trap is pairing a true A with a true-but-irrelevant R ${EST}.<br><b>Worked example:</b>`,
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Assertion (A):</b> Among the primates, chimpanzee is the closest relative of the present day humans. <b>Reason (R):</b> The banding pattern in the autosome numbers 3 and 6 of man and chimpanzee is remarkably similar.<br><b>(a)</b> Both A and R are true and R is the correct explanation of A<br><b>(b)</b> Both A and R are true but R is not the correct explanation of A<br><b>(c)</b> A is true but R is false<br><b>(d)</b> A is false but R is true',
        steps: [
          '<b>Solution:</b> A is true: chimpanzees (with bonobos) are our closest living relatives. R is also true: the banding pattern of human and chimpanzee chromosomes (for example autosomes 3 and 6) is remarkably similar, and this similarity is one line of cytological evidence for the close relationship. So R supports and explains A.',
        ],
        ans: '(a) Both A and R are true and R is the correct explanation of A',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Assertion (A):</b> The earliest organisms that appeared on Earth were non-green and presumably anaerobes. <b>Reason (R):</b> The first autotrophic organisms were the chemoautotrophs that never released oxygen.<br><b>(a)</b> Both A and R are true and R is the correct explanation of A<br><b>(b)</b> Both A and R are true but R is not the correct explanation of A<br><b>(c)</b> A is true but R is false<br><b>(d)</b> A is false but R is true',
        steps: [
          '<b>Solution:</b> A is true: the first life was non-green, anaerobic and heterotrophic. R is true in the textbook account: the first autotrophs were chemoautotrophs that did not release oxygen; oxygen was released only later, by photosynthetic cyanobacteria, which changed the atmosphere to an oxidising one. R describes the first autotrophs, not why the earliest organisms were non-green anaerobes, so R is not the explanation: (b).',
        ],
        ans: '(b) Both A and R are true but R is not the correct explanation of A',
      },

      { t: 'p', html: '<b>Archetype 5: Match-the-Column (scientist–contribution pairing)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two columns; students match A–E in Column I to I–VI in Column II (one entry in Column II is an extra), then select the correct combination.<br><b>Approach:</b> Anchor on the two strongest pairs first. Oparin–Haldane = chemical evolution theory; Miller–Urey = amino acid experiment; Pasteur = swan-neck flask/disproved spontaneous generation; Wegener = continental drift. The classic trap swaps the theory-makers with the experimenters.<br><b>Worked example:</b>',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Column I:</b><br>A. Charles Darwin<br>B. Lamarck<br>C. Hugo de Vries<br>D. Ernst Haeckel<br>E. August Weismann<br><b>Column II:</b><br>I. Mutation theory<br>II. Germplasm theory<br>III. Philosophie Zoologique<br>IV. The Origin of Species<br>V. Biogenetic law<br>VI. Essay on population<br><b>(a)</b> A–IV; B–III; C–I; D–V; E–II<br><b>(b)</b> A–III; B–IV; C–I; D–V; E–II<br><b>(c)</b> A–IV; B–III; C–II; D–V; E–I<br><b>(d)</b> A–VI; B–III; C–I; D–V; E–II',
        steps: [
          '<b>Solution:</b> A–IV is sure (Darwin → The Origin of Species). B–III is sure (Lamarck → Philosophie Zoologique). C–I is sure (de Vries → Mutation/saltation theory). D–V is sure (Haeckel → Biogenetic law, “ontogeny recapitulates phylogeny”). E–II is sure (Weismann → Germplasm theory).',
        ],
        ans: '(a) A–IV; B–III; C–I; D–V; E–II',
      },

      { t: 'p', html: '<b>Archetype 6: Diagram Identification (Miller apparatus; selection graphs)</b>' },
      {
        t: 'p',
        html: `<b>What it looks like:</b> A labelled diagram of Miller’s setup asks students to identify gas mixture, products, or function of a component. Or three bell-curve graphs test whether students can match stabilising/directional/disruptive selection to the correct shape.<br><b>Approach for Miller diagram:</b> The standard apparatus has four zones: electrodes sparking in the “atmosphere” flask (CH<sub>4</sub> + NH<sub>3</sub> + H<sub>2</sub> + H<sub>2</sub>O), the boiling-water “primitive ocean,” the condenser, and the U-trap collecting the cooled condensate. Students who cannot draw this apparatus from memory lose marks ${EST}.<br><b>Worked example:</b>`,
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'In Miller’s experiment, the mixture of gases in the apparatus contains:<br><b>(a)</b> CH<sub>4</sub> + NH<sub>3</sub> + O<sub>2</sub> + H<sub>2</sub>O<br><b>(b)</b> NH<sub>4</sub> + H<sub>2</sub> + CO<sub>2</sub> + CH<sub>3</sub><br><b>(c)</b> NH<sub>3</sub> + H<sub>2</sub>O<br><b>(d)</b> NH<sub>3</sub> + H<sub>2</sub> + H<sub>2</sub>O + CH<sub>4</sub>',
        steps: [
          '<b>Solution:</b> The correct reducing atmosphere is CH<sub>4</sub> + NH<sub>3</sub> + H<sub>2</sub> + H<sub>2</sub>O, exactly the Oparin–Haldane composition. Option (a) contains free oxygen, which the reducing mixture lacked; (b) uses impossible radicals; (c) omits methane and hydrogen.',
        ],
        ans: '(d) NH<sub>3</sub> + H<sub>2</sub> + H<sub>2</sub>O + CH<sub>4</sub>',
      },
      { t: 'p', html: '<b>Worked example for selection graphs:</b>' },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'The graph where the peak gets higher and narrower is:<br><b>(a)</b> Directional<br><b>(b)</b> Stabilising<br><b>(c)</b> Disruptive',
        steps: [
          '<b>Solution:</b> Stabilising selection removes both extremes, leaving mostly the average: the mean peak grows taller and narrower. Directional shifts the whole curve toward one extreme. Disruptive splits one peak into two.',
        ],
        ans: '(b) Stabilising',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: `The distractors in this chapter are not random: they are engineered around a handful of specific misconceptions that appear with mechanical regularity ${EST}.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What the question does', 'The fix'],
        rows: [
          [
            '<b>Miller “made life”</b>',
            'A distractor such as “It produced living microbial cells.”',
            'Miller produced amino acids: monomers, not life. Commit this distinction to memory.',
          ],
          [
            '<b>Haeckel’s recapitulation law</b>',
            'Assertion–reason pairs offer “ontogeny recapitulates phylogeny” as the reason for embryological evidence.',
            'The strict form of this law is rejected. Karl Ernst von Baer showed that embryos resemble the embryos of related forms, not the adult stages of ancestors.',
          ],
          [
            '<b>Homology ↔ analogy reversal</b>',
            'Forelimbs of whale/bat/horse are offered as analogous; insect/bird wings as homologous.',
            'Same structure, different function = homologous → divergent. Different structure, same function = analogous → convergent.',
          ],
          [
            '<b><i>Homo habilis</i> before <i>Australopithecus</i></b>',
            'Chronological sequence questions place <i>H. habilis</i> ahead of <i>Australopithecus</i>.',
            '<i>Australopithecus</i> (about 3–4 mya in this book; NCERT gives about 2 mya) comes before the genus <i>Homo</i>. <i>H. habilis</i> is about 2 mya. Brain capacity agrees: about 400–500 cc against about 650–800 cc.',
          ],
          [
            '<b><i>q</i><sup>2</sup> → <i>q</i> without square-root</b>',
            'Hardy–Weinberg questions give recessive phenotype count and students use it directly as <i>q</i>.',
            'Recessive phenotype = <i>q</i><sup>2</sup>. Take the square root.',
          ],
          [
            '<b>2<i>pq</i> dropped</b>',
            'Heterozygote frequency given as <i>pq</i> instead of 2<i>pq</i>.',
            'The heterozygote can form two ways (<i>A</i>-sperm/<i>a</i>-egg or <i>a</i>-sperm/<i>A</i>-egg); the factor of 2 is mandatory.',
          ],
          [
            '<b>Random mating as a disturbing factor</b>',
            'Option (c) in equilibrium-disturbance questions.',
            'Random mating is a condition for equilibrium. Non-random mating disturbs the genotype frequencies.',
          ],
          [
            '<b>Industrial melanism = acquired inheritance</b>',
            'Option (c) or (d) describes moths “learning” to change colour.',
            'Selection acts on pre-existing variation; the environment does not create it.',
          ],
          [
            '<b>“Survival of fittest” coined by Darwin</b>',
            'Distractors that credit Darwin with coining the phrase.',
            'Herbert Spencer coined the phrase; Darwin used it but did not originate it.',
          ],
          [
            '<b>Mammals evolved from dinosaurs</b>',
            'Assertion–reason pairs.',
            'Mammals arose from mammal-like reptiles (therapsids), not from dinosaurs; they coexisted with dinosaurs and radiated after the dinosaurs’ extinction. Birds, not mammals, descend from the dinosaur line of reptiles.',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'p',
        html: 'Ten NEET-style practice questions, graded from easy to hard. The answers follow NCERT where it speaks to the point.',
      },
      {
        t: 'practice',
        items: [
          {
            q: '[Easy: Recall & Recognition] The primitive reducing atmosphere that made chemical evolution possible consisted of<br><b>(a)</b> O<sub>2</sub>, N<sub>2</sub>, CO<sub>2</sub>, H<sub>2</sub>O<br><b>(b)</b> CH<sub>4</sub>, NH<sub>3</sub>, H<sub>2</sub>, H<sub>2</sub>O<br><b>(c)</b> O<sub>2</sub>, CH<sub>4</sub>, NH<sub>3</sub>, H<sub>2</sub><br><b>(d)</b> CO<sub>2</sub>, O<sub>2</sub>, H<sub>2</sub>, He',
            a: '<b>Answer:</b> (b). A reducing atmosphere (no free O<sub>2</sub>) of methane, ammonia, hydrogen and water vapour is the Oparin–Haldane condition Miller and Urey replicated.',
          },
          {
            q: '[Easy: Recall & Recognition] Thorn of <i>Bougainvillea</i> and tendril of <i>Cucurbita</i> represent<br><b>(a)</b> analogous organs<br><b>(b)</b> homologous organs<br><b>(c)</b> vestigial organs<br><b>(d)</b> atavistic structures',
            a: '<b>Answer:</b> (b). Same structural origin, different functions (protection vs climbing) → homologous → divergent evolution.',
          },
          {
            q: '[Easy: Recall & Recognition] “Survival of the fittest” as a phrase was first used by<br><b>(a)</b> Charles Darwin<br><b>(b)</b> Herbert Spencer<br><b>(c)</b> Jean-Baptiste Lamarck<br><b>(d)</b> Hugo de Vries',
            a: '<b>Answer:</b> (b). Spencer introduced the phrase in his Principles of Biology (1864), after reading Darwin’s Origin of Species.',
          },
          {
            q: '[Medium: Application & Calculation] In a population in Hardy–Weinberg equilibrium, the frequency of the dominant allele <i>A</i> is 0.6. The expected percentage of heterozygous individuals is<br><b>(a)</b> 36%<br><b>(b)</b> 48%<br><b>(c)</b> 16%<br><b>(d)</b> 60%',
            a: '<b>Answer:</b> (b). <i>p</i> = 0.6, <i>q</i> = 0.4. 2<i>pq</i> = 2 × 0.6 × 0.4 = 0.48 = 48%.',
          },
          {
            q: '[Medium: Application & Calculation] Assertion (A): The first mammals were tiny, shrew-like creatures. Reason (R): Mammals evolved from dinosaurs once the dinosaurs disappeared.<br><b>(a)</b> Both A and R are true and R explains A<br><b>(b)</b> Both A and R are true but R does not explain A<br><b>(c)</b> A is true but R is false<br><b>(d)</b> A is false but R is true',
            a: '<b>Answer:</b> (c). A is correct: early mammals were indeed small and shrew-like, appearing in the Triassic alongside early dinosaurs. R is false: mammals did not evolve from dinosaurs; they coexisted with them and radiated after the Cretaceous–Paleogene extinction. The common ancestor of mammals and reptiles split long before dinosaurs dominated.',
          },
          {
            q: '[Medium: Application & Calculation] Which of the following is NOT a condition for Hardy–Weinberg equilibrium?<br><b>(a)</b> Large population size<br><b>(b)</b> Random mating<br><b>(c)</b> Natural selection<br><b>(d)</b> No gene flow',
            a: '<b>Answer:</b> (c). Natural selection is a disturbing factor: it is precisely what breaks equilibrium. Large population, random mating, no mutation, no gene flow, and no selection are the five conditions.',
          },
          {
            q: '[Medium: Application & Calculation] Industrial melanism in the peppered moth demonstrates<br><b>(a)</b> inheritance of an acquired character<br><b>(b)</b> natural selection favouring a pre-existing dark variant<br><b>(c)</b> a directed mutation caused by pollution<br><b>(d)</b> genetic drift in a small population',
            a: '<b>Answer:</b> (b). Before industrialisation, pale moths were camouflaged on lichen-covered bark. After soot blackened the trees, the dark variant (already present in the population) was camouflaged and birds ate the pale ones. Selection acted on existing variation; pollution did not create the dark mutation.',
          },
          {
            q: '[Medium: Application & Calculation] Darwin’s finches of the Galápagos Islands are a classic example of<br><b>(a)</b> convergent evolution<br><b>(b)</b> parallel evolution<br><b>(c)</b> adaptive radiation<br><b>(d)</b> coevolution',
            a: '<b>Answer:</b> (c). One ancestral finch stock entered the islands and diversified into many species suited to different food sources: one ancestor → many forms in vacant habitats. This is adaptive radiation, a form of divergent evolution.',
          },
          {
            q: '[Hard: Analysis, Multi-step, Assertion–Reason] Assertion (A): Embryological similarities among vertebrates are valid evidence for evolution. Reason (R): The embryo of an organism repeats the adult stages of its ancestors during development.<br><b>(a)</b> Both A and R are true and R is the correct explanation of A<br><b>(b)</b> Both A and R are true but R is not the correct explanation of A<br><b>(c)</b> A is true but R is false<br><b>(d)</b> A is false but R is true',
            a: '<b>Answer:</b> (c). Embryological evidence is genuine: all vertebrate embryos pass through similar early stages (pharyngeal slits, tail, limb buds). However, Haeckel’s specific claim that embryos replay adult ancestor stages (“ontogeny recapitulates phylogeny”) is scientifically false. Karl Ernst von Baer demonstrated that embryos resemble the embryos of related forms, not their adults. Since R is false, the answer cannot be (a) or (b); A is true, so (d) is excluded. NCERT says Haeckel’s embryological support was disproved by von Baer; the general similarity of early vertebrate embryos is still accepted as evidence of common descent, so A stands.',
          },
          {
            q: '[Hard: Analysis, Multi-step, Assertion–Reason] Assertion (A): The primitive atmosphere was reducing, i.e., without free oxygen. Reason (R): Free oxygen in the primitive atmosphere would have destroyed the fragile organic molecules required for chemical evolution before they could accumulate.<br><b>(a)</b> Both A and R are true and R is the correct explanation of A<br><b>(b)</b> Both A and R are true but R is not the correct explanation of A<br><b>(c)</b> A is true but R is false<br><b>(d)</b> A is false but R is true',
            a: '<b>Answer:</b> (b). Both are true, but R does not explain why the atmosphere was reducing; it explains why a reducing atmosphere was necessary for chemical evolution: oxygen is a strong oxidising agent that would have oxidised organic monomers as fast as they formed, so without it step 2 of chemical evolution (inorganic → organic monomers) could not proceed. (Current work treats the early atmosphere as less strongly reducing than NCERT states.) If the key (a) is preferred, reword R to “Because free oxygen was absent, organic molecules formed from the gases could accumulate instead of being oxidised.”',
          },
        ],
      },

      { t: 'part', title: 'Lamarck vs Darwin: The Point of Disagreement' },
      {
        t: 'p',
        html: `NEET routinely tests the precise wording of definitions (for example “different origin, similar function” for analogy, and “reducing atmosphere” for the primitive Earth) and the main point on which Lamarck and Darwin disagree: what drives change (use and disuse against natural selection). Assertion–reason items about evolutionary theories often turn on whether acquired characters are inherited ${EST}.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Lamarck', 'Darwin'],
        rows: [
          ['Book', 'Philosophie Zoologique (1809)', 'On the Origin of Species (1859)'],
          ['Mechanism', 'Use and disuse of organs', 'Natural selection acting on heritable variation'],
          [
            'Source of variation',
            'Changes an organism acquires through its own effort and need',
            'Small, heritable variations already present in the population (NCERT calls them small and directional, against de Vries’s large, random mutations)',
          ],
          ['Acquired characters inherited?', 'Yes: the key claim', 'Not the basis of his theory: selection acts on heritable variation present in the population (he allowed use and disuse a minor role)'],
          [
            'Giraffe example',
            'Neck lengthened by stretching to reach leaves; the longer neck was passed on',
            'Variants with slightly longer necks survived and reproduced more',
          ],
          [
            'Exam keyword',
            'Inheritance of acquired characters',
            'Natural selection, struggle for existence, survival of the fittest',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Hardy–Weinberg reflex.</b> The recessive phenotype frequency equals <i>q</i><sup>2</sup>; take the square root first and every other frequency follows.',
      },
    ],
  },
];
