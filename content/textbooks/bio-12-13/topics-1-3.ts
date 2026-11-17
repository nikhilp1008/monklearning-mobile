import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12, Chapter 13 (Biodiversity and Conservation), Topics 01 to 03: pp. 714
 * to 733 of the Class 12 Biology Master Reference, word for word. The chapter title,
 * the page-714 header and the contents box are not copied. Topic 01 (Biodiversity
 * Patterns & Loss, pp. 714 to 721, heading low on p. 714), Topic 02 (Biodiversity
 * Conservation, pp. 722 to 727) and Topic 03 (The Magnitude & Value of Biodiversity,
 * pp. 728 to 733) each have the book's eight sections. Figures 13.1 (caption p. 716,
 * drawn p. 717), 13.2 (caption p. 718, drawn p. 719), 13.3 (caption p. 724, drawn
 * p. 725), 13.4 and 13.5 (13.4 caption p. 729, both drawn p. 730) and 13.6 (caption
 * p. 731, drawn p. 732) are redrawn in lib/diagrams/biology-12-13.ts; these pages hold
 * no unnumbered drawing. Emphasis italics are dropped; no em dashes; the book's
 * "subtopic" pointers read "Topic 01". The run-in " - " lists are set as lists.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 714–721 ─────────────────────────
  {
    n: '01',
    title: 'Biodiversity Patterns & Loss',
    kalam: 'Genes, species, ecosystems: three nested rungs of the same ladder.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial favourite (the book’s estimate from past papers, not official figures). CBSE Boards lift definitions, the levels of biodiversity, and the four causes of loss almost verbatim for 1–3 mark questions. NEET asks 2–4 questions yearly (the book’s estimate from past papers, not official figures), leaning on exact figures (extinction percentages, the “Evil Quartet”, recent extinct species and their countries) and on the species–area relationship. CUET stays definitional and pattern-based. The high-difficulty ceiling appears as assertion–reason items on the species–area slope and on why amphibians are disproportionately vulnerable.',
      },
      {
        t: 'p',
        html: 'Step out of your front door and start counting living things: the crows, the neem tree, the ants marching along the wall, the mould on yesterday’s bread, the bacteria you cannot see. Now imagine doing that for the entire planet. That staggering variety, at every scale from genes to whole ecosystems, is what we call <b>biodiversity</b>: the sum total of the diversity of life. Of the roughly seven million species biologists estimate actually exist, only about 1.5 million have so far been described and named. We are, in a real sense, cataloguing a library while most of its books are still unopened.',
      },
      {
        t: 'p',
        html: 'It helps to see that diversity does not live at a single level. Think about it this way: a single mango (say the Alphonso) differs from a Dasheri or a Langra, yet all three are <i>Mangifera indica</i>. That is <b>genetic diversity</b>, variation within a species. Step up a level and count how many different species share a forest (mango, teak, sal, the insects, the leopards) and you are measuring <b>species diversity</b>, variety between species. Step up once more and compare a mangrove to a desert to an alpine meadow, and you are looking at <b>ecological diversity</b>, variety at the level of habitats and ecosystems themselves. Genes, species, ecosystems: three nested rungs of the same ladder.',
      },
      {
        t: 'p',
        html: 'The second big idea is that this diversity is not spread evenly over the Earth. It clusters and thins in patterns you can actually predict. The strongest pattern is <b>latitudinal</b>: life piles up near the equator and thins towards the poles. The Amazon basin alone holds more than 40,000 plant species, more than most temperate countries. India, sitting partly in the tropics, occupies just 2.4% of the world’s land area yet shelters about 8.1% of its recorded species, which is why it counts as a <b>megadiversity nation</b>.',
      },
      {
        t: 'p',
        html: 'The third idea, the sombre one, is that this richness is <b>leaking away</b>, and faster than at almost any time in Earth’s history. Species have always gone extinct: there have been five great natural mass extinctions before us. What is different now is the cause and the rate: a sixth, human-driven extinction episode that is running far faster than the natural background.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & where the intuition breaks:</b><br>• “More tropical = always more species” is a strong tendency, not a law. Mountains complicate it (diversity falls with altitude), and local disturbances or unusually rich temperate spots exist.<br>• The species–area relationship (see Key concepts, definitions and quantitative patterns) holds <b>only up to a limit</b> (NCERT’s words): within the range of areas sampled, richness rises with area, ever more slowly, and the curve is not a straight upward line on ordinary axes.<br>• Counting-based “species diversity” works poorly for microbes (most bacteria cannot be cultured or told apart by eye), so headline species totals are heavily biased toward large, visible, well-studied groups.',
      },

      { t: 'part', title: 'Key concepts, definitions and quantitative patterns' },
      {
        t: 'p',
        html: '<b>Biodiversity:</b> the variety and variability among living organisms and the ecological complexes they form, considered at three levels.',
      },
      {
        t: 'table',
        title: null,
        head: ['Level', 'What varies', 'One-line example'],
        rows: [
          ['<b>Genetic diversity</b>', 'Genes/alleles within a species', '<i>Rauvolfia vomitoria</i> shows different reserpine potency across its range'],
          ['<b>Species diversity</b>', 'Number/richness of species in a region', 'Western Ghats hold more amphibian species than the Eastern Ghats'],
          ['<b>Ecological diversity</b>', 'Variety of habitats/ecosystems', 'Mangroves, rainforests, deserts and alpine meadows within one country'],
        ],
      },
      { t: 'p', html: 'The term was popularised by the ecologist <b>Edward O. Wilson</b>.' },
      { t: 'p', html: '<b>Patterns of biodiversity (two named patterns):</b>' },
      {
        t: 'p',
        html: '1. <b>Latitudinal gradient:</b> species diversity decreases from the equator (low latitude) towards the poles (high latitude). Tropics span roughly 23.5° N to 23.5° S. Illustrative bird-species counts: Colombia (near equator) ~1,400; India >1,200; New York (~41° N) ~105; Greenland (~71° N) ~56.',
      },
      {
        t: 'p',
        html: 'Why are the tropics richer? Three standard explanations: (i) <b>more evolutionary time</b>: tropical regions stayed relatively undisturbed over very long periods, while temperate zones were repeatedly reset by glaciations, giving the tropics more time to diversify; (ii) <b>a more constant, predictable, less seasonal environment</b>, which favours narrow niche specialisation and so packs in more species; and (iii) <b>greater solar energy input</b>, which raises productivity and, in turn, supports higher diversity.',
      },
      {
        t: 'p',
        html: '2. <b>Species–area relationship:</b> within a region, species richness rises with sampled area, but <b>only up to a limit</b>, tracing a <b>rectangular hyperbola</b>:<br><i>S</i> = <i>C</i> <i>A</i><sup><i>z</i></sup><br>where <i>S</i> = species richness, <i>A</i> = area, <i>C</i> = constant (log <i>C</i> is the Y-intercept of the log–log line), <i>z</i> = slope (the <b>regression coefficient</b>). Taking logarithms linearises it:<br>log <i>S</i> = log <i>C</i> + <i>z</i> log <i>A</i><br>so a plot of log <i>S</i> against log <i>A</i> is a <b>straight line of slope <i>z</i></b>.',
      },
      {
        t: 'p',
        html: 'NCERT describes the curve on ordinary axes as a rectangular hyperbola. Strictly, <i>S</i> = <i>C</i> <i>A</i><sup><i>z</i></sup> with <i>z</i> below 1 is a power law: richness keeps rising, ever more slowly, and the plot is a straight line only on log–log axes.',
      },
      { t: 'p', html: '<b>Typical values of the slope <i>z</i>:</b>' },
      {
        t: 'table',
        title: null,
        head: ['Spatial scale', 'Range of <i>z</i>'],
        rows: [
          ['Small areas (within a region)', '0.1–0.2'],
          ['Very large areas (whole continents)', '0.6–1.2'],
        ],
      },
      { t: 'fig', id: 'b12-13-fig-13.1' },
      {
        t: 'p',
        html: '<b>A note on “units”:</b> unlike physics quantities, most biodiversity measures are counts and ratios (dimensionless). The measured quantity carrying a unit here is <b>area</b> <i>A</i> (e.g. hectares or km<sup>2</sup>); <i>S</i> is a pure count and <i>z</i> is dimensionless; <i>C</i> is a fitted constant, the species count at unit area on the fitted line (so it carries units of area<sup>−<i>z</i></sup>).',
      },

      { t: 'part', title: 'Key processes and frameworks: causes of biodiversity loss' },
      {
        t: 'p',
        html: 'There is no algebraic “derivation” for an ecology topic like this; instead the rigour lives in mechanism: knowing why each cause drives extinction (habitat loss is generally ranked first).',
      },
      { t: 'p', html: '<b>The Evil Quartet: the four major causes of biodiversity loss.</b>' },
      {
        t: 'p',
        html: '1. <b>Habitat loss and fragmentation: the single most important cause.</b> Why it dominates: it removes the resource base for whole communities at once, not just one species. Tropical rainforests, once covering more than 14% of Earth’s land surface, now cover under 6%, cleared for cultivation and cattle. Fragmentation then chops what remains into islands too small to sustain wide-ranging or migratory animals: the population drops below the size it needs to survive, then winks out.<br>2. <b>Over-exploitation.</b> Why: when humans harvest a species faster than it can reproduce, the population collapses. Steller’s sea cow and the passenger pigeon were hunted to extinction; many marine fisheries today are being over-harvested toward the same edge.<br>3. <b>Alien (invasive) species invasions.</b> Why: an introduced species, freed from its native predators and competitors, can out-compete or prey upon natives. The Nile perch introduced into Lake Victoria drove a large number of native cichlid fishes extinct; water hyacinth (<i>Eichhornia</i>), <i>Parthenium</i> and <i>Lantana</i> choke Indian habitats; the African catfish <i>Clarias gariepinus</i> threatens native catfishes in our rivers.<br>4. <b>Co-extinctions.</b> Why: species are linked. When a host or an obligate partner goes extinct, its dependents follow: a host fish takes its specific parasites with it; a plant relying on a single mutualistic pollinator dies out if that pollinator vanishes.',
      },
      {
        t: 'p',
        html: '<b>Memory hook (the book’s order):</b> <b>H</b>abitat loss, <b>O</b>ver-exploitation, <b>A</b>lien species, <b>C</b>o-extinction (HOAC). Habitat loss and fragmentation is generally ranked the most important cause; the order of the other three is not fixed.',
      },
      {
        t: 'p',
        html: '<b>The Rivet Popper Hypothesis (Paul Ehrlich): why losing species matters.</b> Picture an aircraft (the ecosystem) held together by thousands of rivets (the species). If every passenger pops one rivet to take home, the first few losses seem harmless: the plane still flies. But each loss weakens the structure, and beyond some point the aircraft fails. Crucially, <b>not all rivets are equal</b>: popping a rivet on the wings (a <b>keystone species</b>) is far more dangerous than one on a seat. The analogy captures both the cumulative danger of species loss and the disproportionate importance of keystone species.',
      },
      { t: 'fig', id: 'b12-13-fig-13.2' },
      {
        t: 'p',
        html: '<b>Scale of the loss (IUCN Red List, 2004 baseline figures as used in exams):</b><br>• 784 species documented extinct in the last 500 years: 338 vertebrates, 359 invertebrates, 87 plants.<br>• 27 species lost in the last 20 years alone.<br>• More than 15,500 species currently face the threat of extinction: ~12% of birds, ~23% of mammals, ~32% of amphibians, ~31% of gymnosperms.<br>• Five past mass extinctions were natural; the present <b>“Sixth Extinction”</b> is <b>anthropogenic</b> and far more rapid.',
      },
      { t: 'p', html: 'The current rate is estimated at <b>100–1000 times</b> the pre-human background rate.' },
      {
        t: 'p',
        html: '<b>Recent, exam-favourite extinctions (species and place):</b> Dodo (Mauritius), Quagga (Africa), Thylacine (Australia), Steller’s sea cow (Russia), and three tiger subspecies: Bali, Javan, Caspian.',
      },
      {
        t: 'p',
        html: '<b>Why conserve at all?</b> Three argument-types: <b>narrowly utilitarian</b> (direct goods: food, firewood, fibre, medicines, plus bioprospecting), <b>broadly utilitarian</b> (ecosystem services: pollination, climate regulation, soil and water protection, and the oxygen the Amazon forest produces by photosynthesis, a figure NCERT puts at about 20% of the atmosphere’s oxygen, though most of it is used up again by the forest itself), and <b>ethical</b> (every species has intrinsic value and we have a moral duty to pass on our biological legacy intact).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Clean stating of levels.</b> A pharmaceutical team finds that <i>Catharanthus roseus</i> (Madagascar periwinkle) plants from two different regions yield different concentrations of the anti-cancer alkaloid vincristine. They also note that the forest where it grows hosts 300 other flowering-plant species. Identify the two levels of biodiversity illustrated, with justification.',
        steps: [
          'The within-species variation in alkaloid concentration is <b>genetic diversity</b> (variation in genes/alleles inside one species). The presence of 300 co-occurring plant species in the same habitat illustrates <b>species diversity</b> (richness between species in a region). (Two distinct rungs: gene-level and species-level.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / NEET speed-trap',
        q: '<b>Pattern recognition without calculation.</b> Four sites report these bird-species counts, P: 1,400 (≈ 2° N), Q: 1,200 (≈ 20° N), R: 105 (≈ 41° N), S: 56 (≈ 71° N). Which single pattern explains the trend, and what would you predict for a site at 60° S?',
        steps: [
          '<b>Speed approach:</b> Don’t compute anything. Notice counts fall monotonically as you move away from the equator → this is the <b>latitudinal gradient</b>. To a first approximation the hemisphere does not matter, only the distance from the equator; 60° S is far from the equator, so predict a <b>low</b> count (tens, not thousands), comparable to S.',
          '<b>Trap:</b> students see “60° S” and assume higher diversity because it’s the “opposite” hemisphere, but the gradient is about latitude magnitude, not sign.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET-pattern / quantitative',
        q: '<b>Using the species–area relationship.</b> A beetle survey across forest patches fits the line log <i>S</i> = 0.25 log <i>A</i> + 1.40, with <i>A</i> in hectares. (a) State <i>z</i> and <i>C</i>. (b) Predict the species richness in a 100-hectare patch. (c) Is the slope typical of a within-region or a continental-scale study?',
        steps: [
          '(a) Slope <i>z</i> = 0.25; intercept log <i>C</i> = 1.40 ⇒ <i>C</i> = 10<sup>1.40</sup> ≈ 25.1 (in species per ha<sup>0.25</sup>, since <i>C</i> carries units of area<sup>−<i>z</i></sup>).',
          '(b) For <i>A</i> = 100 ha (logarithms to base 10): log <i>S</i> = 0.25(log 100) + 1.40 = 0.25(2) + 1.40 = 0.50 + 1.40 = 1.90, so<br><i>S</i> = 10<sup>1.90</sup> ≈ 79 species.',
          '(c) <i>z</i> = 0.25 sits just above the <b>within-region</b> band (0.1–0.2) and well below the <b>continental</b> band (0.6–1.2), so it is much nearer the within-region values: this is a regional-scale study (a single landscape, not whole continents).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty / assertion–reason',
        q: '<b>Disproportionate vulnerability.</b> <b>Assertion (A):</b> Amphibians show higher extinction risk than most other vertebrate groups. <b>Reason (R):</b> Extinctions across taxa occur at random, so any group can be hit hardest by chance. <b>Choose:</b> <b>(a)</b> Both A and R true, R explains A; <b>(b)</b> Both true, R does not explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          'A is <b>true</b>: about 32% of amphibian species are threatened, the highest of the four groups listed here (birds 12%, mammals 23%, gymnosperms 31%), because their permeable skin and biphasic (water + land) life cycle expose them to both habitat degradation and pollutants. R is <b>false</b>: extinction risk is <b>not spread at random</b>; some groups, such as amphibians, are consistently more vulnerable. Since the reason is factually wrong, neither (a) nor (b) can hold.',
        ],
        ans: '(c)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define the species–area relationship and write its equation in both forms (arithmetic and logarithmic). State what each symbol represents.',
            a: '<i>S</i> = <i>C</i><i>A</i><sup><i>z</i></sup> and log <i>S</i> = log <i>C</i> + <i>z</i> log <i>A</i>; <i>S</i> = richness, <i>A</i> = area, <i>C</i> = constant (log <i>C</i> is the intercept of the log–log line), <i>z</i> = slope.',
          },
          {
            q: '[CUET] Arrange in decreasing order of their contribution to biodiversity loss: alien species invasion, co-extinction, habitat loss & fragmentation, over-exploitation.',
            a: 'Habitat loss and fragmentation first (generally the most important cause); then, in the book’s order, over-exploitation, alien species invasion, co-extinction.',
          },
          {
            q: '[NEET] Name the hypothesis that compares species to rivets on an aircraft and state what it predicts about keystone species.',
            a: 'Rivet Popper hypothesis (Paul Ehrlich); loss of keystone (“wing”) species poses a disproportionately large threat.',
          },
          {
            q: '[NEET] According to the IUCN Red List (2004), how many of the 784 documented extinctions in the last 500 years were (i) vertebrates, (ii) invertebrates, (iii) plants?',
            a: '338 vertebrates, 359 invertebrates, 87 plants.',
          },
          {
            q: '[NEET high-difficulty] A continental-scale survey of birds returns a species–area slope of <i>z</i> = 0.9. A within-city park survey of the same taxon returns <i>z</i> = 0.15. Explain biologically why the continental slope is so much steeper.',
            a: 'Across continents you cross whole biogeographic zones with entirely different species pools (high species turnover/β-diversity), so each added unit of area brings many genuinely new species; within one small park most added area only re-samples the same local pool, so richness rises slowly.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The medicinal plant <i>Rauvolfia vomitoria</i> growing across the Himalayan range shows variation in the potency and concentration of the chemical (reserpine) it produces. This is an example of:',
        opts: [
          {
            label: 'species diversity',
            nudge: '<b>(a)</b> is the trap for students who see “<i>Rauvolfia</i> across the range” and think of many species, but it is one species varying internally.',
          },
          { label: 'ecological diversity', nudge: '<b>(b)</b> describes habitat/ecosystem-level variety, not the chemical variation described here.' },
          { label: 'genetic diversity', nudge: null },
          { label: 'habitat diversity', nudge: '<b>(d)</b> habitat diversity is the same level as ecological diversity, not variation inside one species.' },
        ],
        correct: 2,
        solution: 'Variation within a single species across its range is genetic diversity.',
      },
      {
        t: 'mcq',
        q: 'From the equator towards the poles, species diversity generally:',
        opts: [
          { label: 'increases', nudge: '<b>(a)</b> inverts the rule.' },
          { label: 'decreases', nudge: null },
          { label: 'remains constant', nudge: '<b>(c)</b> ignores the pattern entirely.' },
          { label: 'first decreases, then increases', nudge: '<b>(d)</b> confuses latitude with altitude/other non-monotonic patterns; the latitudinal trend is steadily decreasing.' },
        ],
        correct: 1,
        solution: 'This is the latitudinal gradient.',
      },
      {
        t: 'mcq',
        q: 'On a logarithmic scale, the species–area relationship is described by:',
        opts: [
          {
            label: '<i>S</i> = <i>C</i><i>A</i><sup><i>z</i></sup>',
            nudge: '<b>(a)</b> is the arithmetic (non-log) form, the trap for students who don’t read “on a logarithmic scale”.',
          },
          { label: 'log <i>S</i> = log <i>C</i> + <i>z</i> log <i>A</i>', nudge: null },
          { label: 'log <i>S</i> = <i>z</i> log <i>C</i> + log <i>A</i>', nudge: '<b>(c)</b> swaps <i>C</i> and <i>A</i> inside the logs.' },
          { label: '<i>S</i> = <i>zA</i><sup><i>C</i></sup>', nudge: '<b>(d)</b> swaps the roles of <i>z</i> and <i>C</i> in the exponent.' },
        ],
        correct: 1,
        solution: 'Taking log of <i>S</i> = <i>C</i><i>A</i><sup><i>z</i></sup> gives log <i>S</i> = log <i>C</i> + <i>z</i> log <i>A</i>.',
      },
      {
        t: 'mcq',
        q: 'The decline of indigenous catfishes after the introduction of <i>Clarias gariepinus</i> into Indian rivers is an example of:',
        opts: [
          { label: 'co-extinction', nudge: '<b>(a)</b> would require an obligate partner’s extinction triggering another’s.' },
          { label: 'habitat fragmentation', nudge: '<b>(b)</b> involves breaking up habitat, not introductions.' },
          { label: 'over-exploitation', nudge: '<b>(c)</b> is human over-harvesting, the opposite mechanism.' },
          { label: 'alien species invasion', nudge: null },
        ],
        correct: 3,
        solution: '<i>Clarias gariepinus</i> (African catfish) is a non-native species out-competing natives: classic alien-species invasion.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Mixing up genetic vs species diversity.</b> If the variation is inside one named species, it is genetic; if it is the count of different species in a place, it is species diversity. Check the species name first.',
          '<b>Treating the curve as a straight line, or as one with a hard ceiling.</b> On ordinary axes richness rises steeply and then more slowly as the area grows (NCERT calls this a rectangular hyperbola); it is a straight line only on log–log axes.',
          '<b>Swapping the small-area and continental <i>z</i> ranges.</b> Small/regional <i>z</i> = 0.1–0.2; continental <i>z</i> = 0.6–1.2. The steeper slope belongs to the larger scale, because bigger areas span more distinct species pools.',
          '<b>Calling the present extinction “natural”.</b> The five past mass extinctions were natural; the ongoing sixth is anthropogenic: the whole point of the comparison.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy under time pressure):</b> For any “which cause of loss?” MCQ, run the one-word test: introduced species → alien invasion; hunted/harvested → over-exploitation; cleared/cut/fragmented → habitat loss; partner died first → co-extinction. The verb in the question almost always names the cause.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Three levels', note: 'genetic (within species) · species (between species) · ecological (between ecosystems).' },
          { f: 'Two patterns', note: 'latitudinal gradient (diversity ↓ equator→poles) · species–area relationship.' },
          {
            f: 'Species–area',
            note: '<i>S</i> = <i>C</i><i>A</i><sup><i>z</i></sup> ⇔ log <i>S</i> = log <i>C</i> + <i>z</i> log <i>A</i>; slope <i>z</i> = <b>0.1–0.2</b> (small) / <b>0.6–1.2</b> (continental).',
          },
          {
            f: 'Evil Quartet (memory order “HOAC”)',
            note: '<b>H</b>abitat loss & fragmentation (generally ranked first), then <b>O</b>ver-exploitation, <b>A</b>lien species, <b>C</b>o-extinction.',
          },
          { f: 'Rivet Popper (Ehrlich)', note: 'species = rivets on an aircraft; keystone species = wing rivets (lose them and the ecosystem fails).' },
          {
            f: 'Numbers to memorise',
            note: '784 extinct/500 yrs (338 vert, 359 invert, 87 plants); threatened ≈ 12% birds, 23% mammals, <b>32% amphibians</b>, 31% gymnosperms; India = 2.4% land, 8.1% species (megadiversity).',
          },
        ],
        aids: [
          '<b>Mnemonic: recent extinctions and place.</b> “Did Quaggas Take Steller’s Tigers?” → <b>D</b>odo(Mauritius), <b>Q</b>uagga(Africa), <b>T</b>hylacine(Australia), <b>S</b>teller’s sea cow(Russia), <b>T</b>iger subspecies(Bali/Javan/Caspian).',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 722–727 ─────────────────────────
  {
    n: '02',
    title: 'Biodiversity Conservation',
    kalam: 'Ex situ is the safety net for when in situ alone is not enough.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A heavily tested topic (the book’s estimate from past papers, not official figures). CBSE Boards routinely ask the in situ vs ex situ distinction (1–3 marks) and short notes on sacred groves, biosphere reserves or hotspots. NEET asks 2–4 questions yearly (the book’s estimate from past papers, not official figures); classic traps are “which is <b>not</b> ex situ”, the hotspot criteria/number, and cryopreservation as ex situ. CUET stays definitional. The high-difficulty ceiling appears as assertion–reason on “hotspots are in situ” and on why focused hotspot protection is cost-effective.',
      },
      {
        t: 'p',
        html: 'Suppose a rare species of fish is vanishing from a polluted river. You have two fundamentally different ways to save it. You could clean and guard the river itself: protect the fish where it lives, along with everything it depends on. Or you could net a breeding population, move them to a protected aquarium or hatchery, raise their young safely, and one day release them back. That single choice, save it on site or off site, is the entire backbone of conservation, and it splits every strategy into two families: <b>in situ</b> (“on site”) and <b>ex situ</b> (“off site”).',
      },
      {
        t: 'p',
        html: 'Think about it this way: in situ conservation is like protecting an entire neighbourhood so a family can keep living in its own home, with its shops, its neighbours, its whole way of life intact. Ex situ conservation is like moving the family to a well-run guest house during an emergency: they survive, they are cared for, but they are cut off from the community that shaped them. The guest house saves lives in a crisis; the neighbourhood saves a way of life. This is exactly why conservation biologists treat in situ as the preferred, primary strategy: protecting a species in its natural habitat automatically protects the thousands of other species and the ecological relationships entangled with it. Ex situ is the safety net for when in situ alone is not enough.',
      },
      {
        t: 'p',
        html: 'But the world has limited money and time, and biodiversity is not spread evenly (recall the patterns from Topic 01). So a second big idea is <b>triage</b>: concentrating effort where it saves the most. <b>Biodiversity hotspots</b> are the emergency rooms of the planet: regions packed with species found nowhere else (high endemism) that are simultaneously under severe threat. Protecting these few small regions delivers a hugely disproportionate payoff: strict protection of all hotspots alone is estimated to cut the ongoing rate of extinctions by about 30%. Miss them, and an outsized slice of life vanishes; guard them, and a small, focused investment shields a large share of the planet’s species.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & where the intuition breaks:</b><br>• Ex situ is not a permanent substitute for the wild. A species bred only in captivity can lose genetic diversity and the behaviours it needs to survive in nature; the goal is usually eventual <b>reintroduction</b>, not indefinite captivity.<br>• “Hotspot = lots of species” is incomplete. A region rich in species but not under threat does <b>not</b> qualify: threat (habitat already largely destroyed) is half the definition.<br>• Sacred groves and other community-protected lands work because of local belief and ownership; imposing top-down protection without community buy-in often fails.',
      },

      { t: 'part', title: 'Key concepts, definitions and frameworks' },
      {
        t: 'table',
        title: null,
        head: ['Term', 'Meaning'],
        rows: [
          ['<b>In situ conservation</b>', 'Protecting species within their natural habitat, conserving the whole ecosystem at once'],
          ['<b>Ex situ conservation</b>', 'Protecting components of biodiversity outside their natural habitat'],
          ['<b>Endemic species</b>', 'A species confined to a particular geographic region and found nowhere else'],
          ['<b>Biodiversity hotspot</b>', 'A region with very high endemism that is also under severe threat (see criteria below)'],
          ['<b>Sacred grove</b>', 'A forest tract given total protection by local/tribal communities on religious grounds'],
        ],
      },
      { t: 'p', html: '<b>The two families of conservation (the master framework):</b>' },
      {
        t: 'table',
        title: null,
        head: ['', 'In situ (on site)', 'Ex situ (off site)'],
        rows: [
          ['Where', 'Natural habitat', 'Away from natural habitat'],
          [
            'Examples',
            'Biodiversity hotspots, biosphere reserves, national parks, wildlife sanctuaries, sacred groves, Ramsar wetlands',
            'Zoological parks (zoos), botanical gardens, arboreta, aquaria, <b>seed banks</b>, <b>gene/field-gene banks</b>, <b>tissue culture</b>, <b>cryopreservation</b>, in-vitro fertilisation',
          ],
          ['Strength', 'Conserves the whole ecosystem + evolutionary processes', 'Saves individuals/germplasm when habitat is gone or critically degraded'],
        ],
      },
      {
        t: 'p',
        html: '<b>Criteria for a biodiversity hotspot (two, both required):</b><br>1. <b>High endemism:</b> at least <b>1,500 species of endemic vascular plants</b> (more than 0.5% of the world’s total).<br>2. <b>High threat:</b> the region must have <b>lost at least 70%</b> of its original/primary vegetation.',
      },
      {
        t: 'p',
        html: '<b>Number of hotspots:</b> the concept was introduced by <b>Norman Myers</b>. The NCERT-based key says <b>34</b>; Conservation International now counts <b>36</b>. In an NCERT-based exam, answer 34 unless the question cites a current source.',
      },
      {
        t: 'p',
        html: '<b>India’s hotspots:</b> NCERT names three: the <b>Western Ghats–Sri Lanka</b>, the <b>Himalaya</b> and <b>Indo-Burma</b>. (The Nicobar Islands fall under Sundaland, so four hotspots touch Indian territory by the full count, but three is the NCERT answer.)',
      },
      {
        t: 'p',
        html: '<b>Why endemics cluster:</b> long <b>isolation</b> (islands, mountain ranges, and ancient undisturbed forests) lets unique species evolve in place and survive nowhere else. That is why hotspots such as <b>Sundaland</b> (Southeast Asia) and the <b>Western Ghats</b> each harbour thousands of endemic plants, and why island regions feature so heavily on the hotspot map.',
      },
      {
        t: 'p',
        html: '<b>Zonation of a Biosphere Reserve (a key in situ unit):</b><br>• <b>Core zone:</b> legally protected; no settlement or human use, only non-destructive research and monitoring.<br>• <b>Buffer zone:</b> limited, regulated activity (research, education, restricted use).<br>• <b>Transition (manipulation) zone:</b> active human use, restoration and cooperation with local people.',
      },
      { t: 'p', html: '(No SI units apply: these are categorical/structural concepts, not measured physical quantities.)' },

      { t: 'part', title: 'Key processes and conservation frameworks' },
      {
        t: 'p',
        html: 'Before the methods, the rationale in one place: we invest in all of this for three reasons developed in Topic 01: <b>narrowly utilitarian</b> (direct goods: food, fibre, medicines, bioprospecting), <b>broadly utilitarian</b> (ecosystem services: oxygen, pollination, flood and climate regulation), and <b>ethical</b> (every species has intrinsic value). The strategies below are simply how we act on those reasons; the reasoning behind each one matters more than the list of names.',
      },
      {
        t: 'p',
        html: '<b>Why in situ is the primary strategy.</b> When you protect a tiger in a reserve, you do not save one species: you save its prey, its prey’s food plants, the soil microbes, the pollinators and the whole web of relationships. In situ conservation lets <b>evolution and natural selection keep running</b>, so populations remain genetically diverse and locally adapted. That is something no zoo can reproduce.',
      },
      {
        t: 'p',
        html: '<b>The hotspot logic: focus for maximum impact.</b> Because endemic-rich, highly threatened regions hold a giant share of global biodiversity on a tiny area, channelling scarce conservation funds there yields the largest reduction in extinction per rupee spent. This is the same triage that emergency medicine uses: treat where the payoff is greatest first.',
      },
      {
        t: 'p',
        html: '<b>In situ machinery (India):</b><br>• <b>Wildlife (Protection) Act, 1972:</b> the legal backbone for protected areas in India.<br>• <b>Protected-area categories:</b> national parks (the highest protection: no private rights, no grazing, no human exploitation of the area), wildlife sanctuaries (protection focused on animal life; some regulated activity allowed), and biosphere reserves (large multi-use units, designated under UNESCO’s <b>Man and Biosphere (MAB)</b> programme, with the core/buffer/transition zonation above). India’s first national park was <b>Hailey National Park (1935)</b>, now <b>Jim Corbett</b> (1935 is the year of the Act; the park itself is usually dated 1936). India has <b>18 biosphere reserves</b> by the current official count (NCERT prints 14).<br>• <b>Sacred groves:</b> community-protected forest patches, often the last refuges of rare species. Found in the <b>Khasi and Jaintia Hills (Meghalaya)</b>, <b>Aravalli Hills (Rajasthan)</b>, the <b>Western Ghats of Karnataka and Maharashtra</b>, and the <b>Sarguja, Chanda and Bastar areas</b> (NCERT places them in Madhya Pradesh; Sarguja and Bastar are now in Chhattisgarh, Chanda (Chandrapur) in Maharashtra).<br>• <b>Ramsar wetlands:</b> under the <b>Ramsar Convention (1971)</b> for wetland conservation. Wetlands filter water, buffer floods and shelter vast numbers of migratory birds, which earns them the name “kidneys of the ecosystem”. (World Wetlands Day = 2 February.)',
      },
      {
        t: 'p',
        html: '<b>Ex situ machinery, and when it is used.</b> Ex situ steps in when habitat is already lost or a population is critically small:<br>• <b>Zoological parks & captive breeding:</b> breed threatened animals safely, then reintroduce.<br>• <b>Botanical gardens & arboreta:</b> grow threatened plants; some species believed extinct in the wild survive only here (e.g. <i>Sophora toromiro</i>). Botanical gardens keep records of the threatened plants they cultivate.<br>• <b>Seed banks, field gene banks, gene banks:</b> store germplasm long-term.<br>• <b>Cryopreservation:</b> gametes/tissues preserved at about −196 °C in liquid nitrogen, viable for very long periods; an advanced ex situ method.',
      },
      {
        t: 'p',
        html: '<b>The reintroduction goal, and its catch.</b> Ex situ populations are meant to seed recoveries back in the wild, not to live in captivity forever. But small captive populations can suffer <b>inbreeding</b> and gradually lose the genetic variation and survival behaviours they need outside, which is precisely why ex situ is treated as a complement to in situ, never a replacement.',
      },
      {
        t: 'p',
        html: '<b>The flagship-species approach.</b> Protecting a single charismatic species can shelter an entire habitat. India’s <b>Project Tiger (1973)</b> and <b>Project Elephant (1992)</b> use tigers and elephants as flagships: because these animals need vast ranges, safeguarding them automatically conserves the thousands of species that share their forests, an in situ strategy that leans on public appeal to fund landscape-scale protection.',
      },
      {
        t: 'p',
        html: 'Captive breeding has, in many cases, pulled species back from the very brink, raising young safely in protected facilities and releasing them once threats ease. But every such programme still depends on a wild habitat surviving to receive them, which is the deepest reason in situ protection can never be abandoned.',
      },
      {
        t: 'p',
        html: '<b>Global frameworks (frequently confused: lock these dates):</b><br>• <b>Earth Summit, Rio de Janeiro, 1992</b> → the <b>Convention on Biological Diversity (CBD)</b>.<br>• <b>World Summit on Sustainable Development, Johannesburg, 2002</b> → 190 countries pledged to cut the rate of biodiversity loss by 2010.',
      },
      { t: 'fig', id: 'b12-13-fig-13.3' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Classify each method.</b> Label each as in situ or ex situ: (i) a sacred grove protecting a troop of lion-tailed macaques; (ii) a seed bank storing 400 rice landraces; (iii) Gir National Park; (iv) cryopreserved gametes of a threatened deer; (v) a botanical garden growing a near-extinct cycad.',
        steps: [
          '(i) <b>in situ</b> (protected in natural habitat); (ii) <b>ex situ</b> (germplasm stored off-site); (iii) <b>in situ</b> (protected area); (iv) <b>ex situ</b> (advanced off-site preservation); (v) <b>ex situ</b> (cultivated away from habitat).',
          '<b>Rule used:</b> is the organism protected where it naturally lives (in situ) or moved/stored elsewhere (ex situ)?',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / NEET speed-trap',
        q: '<b>Spot the odd one out.</b> Which is <b>not</b> a method of ex situ conservation? <b>(a)</b> Seed bank <b>(b)</b> Botanical garden <b>(c)</b> Wildlife sanctuary <b>(d)</b> Cryopreservation',
        steps: [
          '<b>Speed approach:</b> Don’t read explanations: scan for the one location-based, on-site item. A wildlife sanctuary protects animals in their habitat → in situ. The other three are all off-site.',
          '<b>Trap:</b> students lump “sanctuary” with “zoo/garden” because all sound protective, but sanctuary is on-site (in situ).',
        ],
        ans: '(c)',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Assertion–Reason.</b> <b>Assertion (A):</b> Biodiversity hotspots are an example of in situ conservation. <b>Reason (R):</b> They conserve biological wealth at the site, within the natural habitat. <b>Options:</b> <b>(a)</b> Both true, R explains A; <b>(b)</b> Both true, R does not explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          'A is <b>true</b>: hotspots are protected in place. R is true and is precisely why A holds: on-site protection is the definition of in situ. So R correctly explains A.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Choose and justify a strategy.</b> A critically endangered frog survives only in one small, heavily polluted hill stream inside a biodiversity hotspot. Its main food source (the insect prey it depends on) is also declining. Outline the conservation approach and justify it using ideas from this topic and Topic 01.',
        steps: [
          'Use both, in a sequence. <b>Primary:</b> in situ, because the stream lies inside a hotspot, protecting and restoring the habitat gives the largest payoff and simultaneously shields the frog’s dependent insect (recall the co-extinction risk and the Rivet-Popper / keystone logic: losing one tightly-linked species can cascade). <b>Backup:</b> ex situ, since the population is critically small and the habitat is acutely degraded, establish a captive-breeding programme and cryopreserve gametes as insurance, with reintroduction once the stream is restored.',
          'The justification chain: hotspot triage → in situ preferred (whole-web protection) → ex situ as a genetic safety net → reintroduction to close the loop.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Differentiate between in situ and ex situ conservation, giving two examples of each.',
            a: 'In situ = on-site, whole-habitat protection (hotspots, national parks, sanctuaries, biosphere reserves, sacred groves); ex situ = off-site (zoos, botanical gardens, seed/gene banks, cryopreservation).',
          },
          {
            q: '[CUET] Name the two criteria a region must satisfy to be called a biodiversity hotspot.',
            a: '≥1,500 endemic vascular plant species and ≥70% loss of original vegetation.',
          },
          {
            q: '[NEET] Cryopreservation of gametes at −196 °C in liquid nitrogen is an example of which type of conservation, and why is it called “advanced”?',
            a: 'Ex situ; called advanced because gametes, embryos or tissue are kept viable and fertile for long periods at −196 °C in liquid nitrogen.',
          },
          {
            q: '[NEET] Name the three zones of a biosphere reserve and state which is the most strictly protected.',
            a: 'Core (strictly protected; only non-destructive research and monitoring), buffer, transition/manipulation.',
          },
          {
            q: '[NEET high-difficulty] “Sacred groves are among the most effective in situ measures despite often having no legal status.” Defend or challenge this statement in 3–4 lines.',
            a: 'Defensible: they protect entire habitats in place (true in situ) and act as last refuges for rare/endemic species; their effectiveness rests on community belief and ownership rather than law, which can make them resilient where state enforcement is weak.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which one of the following is an example of ex situ conservation?',
        opts: [
          { label: 'National park', nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are all on-site (in situ) measures: the trap is assuming “protection” automatically means ex situ.' },
          { label: 'Seed bank', nudge: null },
          { label: 'Wildlife sanctuary', nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are all on-site (in situ) measures: the trap is assuming “protection” automatically means ex situ.' },
          { label: 'Sacred grove', nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are all on-site (in situ) measures: the trap is assuming “protection” automatically means ex situ.' },
        ],
        correct: 1,
        solution: 'A seed bank stores germplasm off-site.',
      },
      {
        t: 'mcq',
        q: 'The threat criterion for a biodiversity hotspot is that a region has lost at least what share of its original vegetation (the threshold value)?',
        opts: [
          { label: '30% of its original vegetation', nudge: '<b>(a)</b> misreads 70% lost as 30% lost: 30% is the share that may remain.' },
          { label: '50%', nudge: '<b>(b)</b> is not the threshold the criterion uses.' },
          { label: '70%', nudge: null },
          { label: '90%', nudge: '<b>(d)</b> is not the threshold the criterion uses.' },
        ],
        correct: 2,
        solution: 'The threat criterion is ≤30% remaining, which is the same 70% lost stated the other way: a classic misread.',
      },
      {
        t: 'mcq',
        q: 'India’s first national park, set up under the 1935 Act, was:',
        opts: [
          { label: 'Kaziranga', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are all important parks but were established later; students pick Kaziranga/Gir by fame, not founding date.' },
          { label: 'Gir', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are all important parks but were established later; students pick Kaziranga/Gir by fame, not founding date.' },
          { label: 'Hailey (Jim Corbett)', nudge: null },
          { label: 'Bandipur', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are all important parks but were established later; students pick Kaziranga/Gir by fame, not founding date.' },
        ],
        correct: 2,
        solution: 'Hailey National Park (set up under the 1935 Act), later renamed Jim Corbett.',
      },
      {
        t: 'mcq',
        q: 'The Convention on Biological Diversity was opened for signature at the:',
        opts: [
          { label: 'Ramsar Convention, 1971', nudge: '<b>(a)</b> is about wetlands.' },
          { label: 'Earth Summit, Rio de Janeiro, 1992', nudge: null },
          { label: 'Johannesburg Summit, 2002', nudge: '<b>(c)</b> is the later sustainable-development pledge.' },
          { label: 'Stockholm Conference, 1972', nudge: '<b>(d)</b> is the earlier environment conference.' },
        ],
        correct: 1,
        solution: 'The CBD was opened for signature at the 1992 Rio Earth Summit (the text itself was adopted at Nairobi in May 1992). All are real events used as date/place traps.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Calling a wildlife sanctuary or hotspot “ex situ”.</b> Anything that protects organisms in their habitat is in situ: sanctuaries, national parks, biosphere reserves, sacred groves and hotspots all qualify. Only off-site storage/breeding is ex situ.',
          '<b>Memorising “34 hotspots” without the caveat.</b> The NCERT-based key says 34; Conservation International now counts 36. Match your answer to the source the question cites.',
          '<b>Mixing up the global frameworks.</b> Ramsar (1971) = wetlands; Rio Earth Summit (1992) = CBD; Johannesburg (2002) = the 2010 loss-reduction pledge.',
          '<b>Forgetting that ex situ aims at reintroduction.</b> It is a safety net, not the end goal: captive populations are meant to go back to the wild.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy under time pressure):</b> For any “in situ or ex situ?” MCQ, ask one question: is the organism still in its natural home? If yes → in situ; if it has been moved or stored → ex situ. This single test resolves almost every distractor.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Two families',
            note: 'in situ = on-site, whole-habitat (hotspots, biosphere reserves, national parks, sanctuaries, sacred groves, Ramsar wetlands); ex situ = off-site (zoos, botanical gardens, seed/gene banks, tissue culture, cryopreservation, IVF).',
          },
          { f: 'In situ is primary', note: 'it conserves the whole ecosystem + keeps evolution running. Ex situ is the safety net, aiming at reintroduction.' },
          { f: 'Hotspot criteria (both needed)', note: '≥1,500 endemic vascular plants AND ≥70% vegetation lost. Concept: Norman Myers.' },
          { f: 'Hotspot number', note: '34 (NCERT-based key) / 36 (Conservation International’s current count): know both.' },
          { f: 'India’s hotspots', note: 'Western Ghats–Sri Lanka · Himalaya · Indo-Burma.' },
          { f: 'Biosphere reserve zones', note: 'Core (strictly protected) → Buffer → Transition.' },
          { f: 'Cryopreservation', note: 'germplasm at −196 °C in liquid nitrogen: an advanced ex situ method.' },
          {
            f: 'Dates to lock',
            note: 'Hailey/Jim Corbett (first NP) 1935 (the Act; park usually dated 1936) · Wildlife Protection Act 1972 · Project Tiger 1973 · Ramsar 1971 · Rio Earth Summit/CBD 1992 · Johannesburg 2002.',
          },
        ],
        aids: [
          '<b>Mnemonic: ex situ methods.</b> “Zoos Bring Genes Safely To Cold storage” → Zoos, Botanical gardens, Gene banks, Seed banks, Tissue culture, Cryopreservation.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 728–733 ─────────────────────────
  {
    n: '03',
    title: 'The Magnitude & Value of Biodiversity',
    kalam: 'Biodiversity is not a tidy, evenly-stocked shelf; it is a few enormous groups and a long tail of smaller ones.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Reliable mark-scorers (the book’s estimate from past papers, not official figures). CBSE Boards ask the global/Indian species figures and “why is India called megadiverse” (1–2 marks). NEET often asks the taxonomic-proportion traps (the book’s estimate from past papers, not official figures; for example “which group has the maximum number of species?” (insects), and “fungi vs vertebrates”) plus David Tilman’s experiments. CUET stays factual. The high-difficulty ceiling pairs Tilman’s findings with the stability concept in assertion–reason form.',
      },
      {
        t: 'p',
        html: 'We ended the loss-and-conservation story already knowing biodiversity is precious, but how much of it is there, and how is it shared out among the living groups? The honest answer is that nobody knows the exact number, and that the variety is wildly lopsided. Out of the roughly 1.5 million species biologists have actually named and described, the best statistical estimate, made by the ecologist <b>Robert May</b>, puts the real global total at around <b>7 million</b>. In other words, we have catalogued perhaps one species in five; the rest of the library is still unread.',
      },
      {
        t: 'p',
        html: 'Think about it this way: if you lined up ten randomly chosen animal species, about <b>seven would be insects</b>. Beetles, ants, butterflies and their relatives utterly dominate animal life. Step back further and the imbalance is even starker: <b>more than 70% of all recorded species are animals</b>, while plants in the older, broad sense (including algae and fungi) make up only about a fifth. Even within the “small” groups the surprises continue: there are more species of <b>fungi</b> than of all the vertebrates (fishes, amphibians, reptiles, birds and mammals) put together. Biodiversity is not a tidy, evenly-stocked shelf; it is a few enormous groups and a long tail of smaller ones.',
      },
      {
        t: 'p',
        html: 'India sits near the rich end of this spectrum. With just <b>2.4% of the world’s land area</b>, it shelters about <b>8.1% of all recorded species</b>, a concentration impressive enough to rank it among the world’s <b>megadiversity nations</b>.',
      },
      {
        t: 'p',
        html: 'The second, deeper question is why diversity matters to the working of an ecosystem at all. Intuition says a richer community should be sturdier, and careful experiments confirm it. A meadow with many plant species recovers from a drought more reliably than a monoculture, the way a cricket team with many all-rounders copes better with an injury than one built around a single star. That link between how many species and how stable and productive an ecosystem is forms the scientific heart of the case for conservation.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & where the intuition breaks:</b><br>• All these counts are biased toward large, visible, well-studied groups; microbes are massively under-counted, so the “true” totals (especially for bacteria and fungi) are educated guesses, not measurements.<br>• “More species always means more stable” is a strong experimental trend, not an ironclad law: a single well-chosen keystone species can matter more than raw species number.<br>• Recorded-species percentages shift as new groups are studied; treat them as NCERT-canonical exam values, not eternal constants.',
      },

      { t: 'part', title: 'Key concepts and quantitative patterns' },
      { t: 'p', html: '<b>How many species are there?</b>' },
      {
        t: 'table',
        title: null,
        head: ['Measure', 'Figure'],
        rows: [
          ['Species described/recorded so far', '~1.5 million'],
          ['Estimated true global total (<b>Robert May</b>)', '~7 million'],
          ['Fraction of species actually recorded', '~22% by NCERT’s rounding (1.5 ÷ 7 = 21.4%), so about four-fifths await discovery'],
          ['India’s share of world land area', '2.4%'],
          ['India’s share of recorded global species', '8.1%'],
        ],
      },
      {
        t: 'p',
        html: '<b>How is biodiversity distributed across groups?</b> (the proportions NEET tests)<br>• <b>Animals make up more than 70%</b> of all recorded species (Figures 13.4 and 13.5 draw it as about 70%); <b>plants</b> (including algae and fungi in the traditional grouping) make up under ~22%.<br>• Among animals, <b>insects are by far the largest group</b>: roughly <b>70% of all animal species are insects</b>.<br>• The number of <b>fungi</b> species is <b>greater than the combined total of all vertebrates</b> (fishes + amphibians + reptiles + birds + mammals).<br>• Among invertebrates, after insects the largest groups include <b>molluscs</b> and <b>crustaceans</b>.',
      },
      {
        t: 'p',
        html: '<b>The fuller picture (worth knowing for the diagram-based MCQs).</b> When global biodiversity is drawn as a chart, the wedges fall roughly like this: of all species, animals take the lion’s share (>70%) and plants-and-allies the rest (~22%, with the remainder microbes and others). Within animals, insects form the dominant wedge, followed at a distance by molluscs, then other animal groups and crustaceans, with the familiar <b>vertebrates forming only a thin slice</b>. This is a counter-intuitive fact: the animals we notice most (mammals, birds, fishes) are a tiny fraction of animal life, while the beetles and their kin quietly outnumber everything.',
      },
      {
        t: 'p',
        html: 'Two consequences follow. First, our species counts are <b>systematically incomplete</b>: groups that are hard to see or culture (microbes, fungi, deep-sea and soil invertebrates) are under-recorded, so the true totals are almost certainly far larger than the recorded 1.5 million. Second, conservation effort and public attention are skewed toward the charismatic vertebrate slice, even though most of biodiversity, and much of the work ecosystems do, lives in the unglamorous majority.',
      },
      { t: 'fig', id: 'b12-13-fig-13.4' },
      { t: 'fig', id: 'b12-13-fig-13.5' },
      {
        t: 'p',
        html: '<b>India as a megadiversity nation.</b> India has roughly <b>45,000 recorded plant species</b> and about <b>twice as many animal species</b> (~90,000). If India’s species are described at the same ~22% rate (an assumption), a very large number of Indian species (well over a lakh of plants and several lakh animals) remain undiscovered.',
      },
      { t: 'p', html: '(No SI units apply: these are counts, ratios and percentages.)' },

      { t: 'part', title: 'Key processes and frameworks: the importance of species diversity' },
      {
        t: 'p',
        html: 'Why should a community with more species function any better than one with fewer? Three connected ideas answer this: Tilman’s experiments, what stability requires, and the Rivet-Popper analogy.',
      },
      {
        t: 'p',
        html: '1. <b>David Tilman’s long-term experiments.</b> Working with long-running outdoor field plots, the ecologist <b>David Tilman</b> found two clear effects of higher diversity:<br>• Plots with <b>more species showed less year-to-year variation</b> in total biomass: they were steadier over time.<br>• Plots with <b>more species were also more productive</b>: they captured and stored more energy as biomass.',
      },
      {
        t: 'p',
        html: 'The physical reasoning: different species use resources in slightly different ways and respond differently to a bad year, so a diverse community is likely to have some species doing well. The good years of some species cover the bad years of others, smoothing the whole community’s output: exactly why a portfolio of many investments is steadier than a single stock. Ecologists call this the <b>insurance effect</b>: each extra species is a small insurance policy against the failure of the others, and because species also divide up resources (light, water, nutrients) in <b>complementary</b> ways, a mixed community can capture more of the available resource pool and so grow more overall.',
      },
      {
        t: 'p',
        html: 'The flip side is a powerful real-world warning. A <b>monoculture</b> (a field of a single crop, or a plantation of one tree) is the lowest-diversity community we deliberately build, and it behaves exactly as Tilman’s plots predict: it can be highly productive in a good year but is fragile, prone to collapse when a single pest, disease or drought strikes, because there is no diversity to absorb the shock. The stability that biodiversity buys is not an abstraction; it is the difference between a resilient natural ecosystem and a vulnerable man-made one.',
      },
      {
        t: 'p',
        html: '2. <b>What “stability” actually requires.</b> Ecologists say a community is stable if it meets three conditions:<br>• It does <b>not show too much variation in productivity</b> from year to year.<br>• It is either <b>resistant</b> (able to withstand a disturbance without much change) or <b>resilient</b> (able to bounce back quickly after one), against occasional natural or human disturbances.<br>• It is <b>resistant to invasions</b> by alien species: a healthy, diverse community is harder for invaders to break into.',
      },
      {
        t: 'p',
        html: '3. <b>The Rivet-Popper link.</b> This experimental picture sits on top of the <b>Rivet-Popper analogy</b> introduced earlier (Paul Ehrlich; species are the rivets holding the ecosystem-aircraft together, with keystone species the most critical rivets). Tilman’s plots give the quantitative muscle behind that metaphor: removing species really does make the system wobble and underperform.',
      },
      {
        t: 'p',
        html: 'Taken together (diversity buys both <b>steadiness</b> and <b>output</b>) this is the ecological case that underpins everything in the conservation topic: we protect biodiversity not only for ethics and direct use, but because functioning, stable ecosystems literally depend on it.',
      },
      { t: 'fig', id: 'b12-13-fig-13.6' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Stating the magnitude.</b> About 1.5 million species have been recorded, yet ecologists believe far more exist. (a) Whose estimate puts the global total near 7 million? (b) What fraction of species does this imply we have actually described?',
        steps: [
          '(a) <b>Robert May</b>.',
          '(b) About <b>22%</b> (1.5 ÷ 7 = 21.4%, which NCERT rounds to 22%), so about four-fifths of species are still undiscovered.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / NEET speed-trap',
        q: '<b>Which group wins?</b> Which single group contains the maximum number of species? <b>(a)</b> Fungi <b>(b)</b> Insects <b>(c)</b> Angiosperms <b>(d)</b> Molluscs',
        steps: [
          '<b>Speed approach:</b> Don’t overthink: the headline fact is “7 of every 10 animals are insects”, and animals dominate overall.',
          '<b>Trap:</b> “Fungi” tempts students who remember “fungi > all vertebrates”: true, but that compares fungi only to vertebrates, not to insects. Insects still top the whole list.',
        ],
        ans: '(b) Insects',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Tilman’s findings.</b> In David Tilman’s long-term plot experiments, increasing plant species richness led to: <b>(a)</b> more year-to-year biomass variation and lower productivity; <b>(b)</b> less year-to-year variation and higher productivity; <b>(c)</b> no measurable effect; <b>(d)</b> higher variation but higher productivity.',
        steps: ['Tilman found greater diversity made communities both <b>steadier</b> (less year-to-year variation in biomass) and <b>more productive</b>.'],
        ans: '(b)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Assertion–Reason.</b> <b>Assertion (A):</b> A species-rich community is generally more stable than a species-poor one. <b>Reason (R):</b> Higher diversity guarantees that every individual species in the community is itself immune to disturbance. <b>Options:</b> <b>(a)</b> Both true, R explains A; <b>(b)</b> Both true, R doesn’t explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          'A is <b>true</b> (Tilman’s result). R is <b>false</b>: diversity does not make any single species immune; stability arises at the community level because different species respond differently, so losses in some are offset by others. The mechanism is statistical averaging across species, not per-species invulnerability.',
        ],
        ans: '(c)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why is India regarded as a megadiversity nation? Support your answer with two figures.',
            a: 'It holds ~8.1% of recorded global species on just ~2.4% of the world’s land area.',
          },
          {
            q: '[CUET] Arrange in decreasing order of number of described species: plants, insects, all (non-insect) animals.',
            a: 'Insects (about 49%) come first. Plants (about 22%) and all other animals (about 21%) are nearly equal on the chapter’s rounded figures, so only the first place is certain: insects > plants ≈ other animals. (Animals are about 70%, insects about 70% of animals.)',
          },
          {
            q: '[NEET] State the two main conclusions of David Tilman’s long-term ecosystem experiments.',
            a: 'Higher species richness → (i) less year-to-year variation in total biomass (steadier), and (ii) higher productivity.',
          },
          {
            q: '[NEET] “The number of fungi species exceeds that of all vertebrates combined.” True or false, and what does this illustrate about biodiversity?',
            a: 'True; it illustrates how unevenly biodiversity is distributed: some “background” groups are far richer than the familiar vertebrates.',
          },
          {
            q: '[NEET high-difficulty] Explain, using the idea of differing species responses, why a diverse meadow shows smaller year-to-year swings in biomass than a single-species plot.',
            a: 'Different species respond differently to a given stress (e.g. drought), so when some decline others thrive; their good and bad years partly cancel, averaging out the community’s total biomass and damping the swings.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The global estimate of ~7 million total species (against ~1.5 million recorded) is attributed to:',
        opts: [
          { label: 'Edward Wilson', nudge: '<b>(a)</b> Edward Wilson popularised the term “biodiversity”.' },
          { label: 'Robert May', nudge: null },
          { label: 'Alexander von Humboldt', nudge: '<b>(c)</b> Humboldt gave the species–area relationship.' },
          { label: 'Paul Ehrlich', nudge: '<b>(d)</b> Ehrlich proposed the Rivet-Popper hypothesis.' },
        ],
        correct: 1,
        solution: 'Robert May’s statistical estimate. All are real names used as traps.',
      },
      {
        t: 'mcq',
        q: 'Among the following, the group with the largest number of species is:',
        opts: [
          { label: 'Molluscs', nudge: '<b>(a)</b> molluscs are large but second-tier.' },
          { label: 'Fungi', nudge: '<b>(b)</b> fungi exceed vertebrates but not insects.' },
          { label: 'Insects', nudge: null },
          { label: 'Birds', nudge: '<b>(d)</b> birds are a small fraction.' },
        ],
        correct: 2,
        solution: 'Insects dominate (~70% of animal species).',
      },
      {
        t: 'mcq',
        q: 'A community is said to be stable if it:',
        opts: [
          { label: 'shows large year-to-year productivity swings', nudge: '<b>(a)</b> is the opposite.' },
          { label: 'is resistant or resilient to disturbance and resists invasion', nudge: null },
          { label: 'excludes all alien species permanently by chance', nudge: '<b>(c)</b> misstates invasion-resistance as chance exclusion.' },
          { label: 'has the fewest possible species', nudge: '<b>(d)</b> inverts the diversity–stability link.' },
        ],
        correct: 1,
        solution: 'Stability = low year-to-year variation + resistant/resilient + invasion-resistant.',
      },
      {
        t: 'mcq',
        q: 'India is a megadiversity nation mainly because it has:',
        opts: [
          { label: 'the largest land area in the world', nudge: '<b>(a)</b> is false (India is not largest).' },
          { label: '8.1% of global species on 2.4% of the land', nudge: null },
          { label: 'no endemic species', nudge: '<b>(c)</b> is false (India is rich in endemics).' },
          { label: 'only temperate ecosystems', nudge: '<b>(d)</b> is false (India spans tropical to alpine).' },
        ],
        correct: 1,
        solution: 'A high species share on a small land area.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Saying “fungi have the most species”.</b> Fungi outnumber vertebrates, but insects top the entire list: read whether the comparison is “overall” or “vs vertebrates”.',
          '<b>Crediting the wrong scientist.</b> Robert May = the ~7 million estimate; Wilson = popularised “biodiversity”; Humboldt = species–area; Ehrlich = Rivet-Popper; Tilman = diversity–stability experiments.',
          '<b>Thinking stability means “no change”.</b> It means low variation plus the ability to resist or bounce back: not a frozen, unchanging community.',
          '<b>Misreading Tilman.</b> His plots showed two things together: steadier biomass and higher productivity with more species.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy under time pressure):</b> For “which group has the most species?” the safe default is insects unless the question explicitly restricts the comparison (e.g. “among these plants” or “compared with vertebrates”). The restriction, if any, tells you when to switch your answer.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Numbers', note: '~1.5 million recorded; ~7 million estimated total (Robert May); only ~22% described (1.5 ÷ 7 = 21.4%, rounded by NCERT).' },
          { f: 'India', note: '2.4% of land, 8.1% of species → megadiversity nation; ~45,000 plant + ~90,000 animal species recorded.' },
          { f: 'Proportions', note: 'animals >70% of all species; insects ~70% of animals (most species-rich group); fungi > all vertebrates combined.' },
          { f: 'Tilman’s experiments', note: 'more species → (i) less year-to-year biomass variation (steadier) + (ii) higher productivity.' },
          { f: 'Stability needs', note: 'low year-to-year variation · resistant or resilient to disturbance · resists alien invasions.' },
          { f: 'Who’s who', note: 'May = 7 million · Wilson = popularised the term · Humboldt = species–area · Ehrlich = Rivet-Popper · Tilman = diversity–stability.' },
        ],
        aids: ['<b>Mnemonic: animal dominance.</b> “7 of 10 animals are insects, and just over 7 of 10 species are animals.”'],
      },
    ],
  },
];
