import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12, Chapter 6 (Evolution), Topics 01 and 02: pp. 295 to 314 of the
 * Class 12 Biology Master Reference, word for word. The chapter title page
 * (p. 294) is not copied; Topic 01 starts low on p. 295 (the contents box above
 * it is not copied). Each topic is cut at the book's sections 1 to 8. The book's
 * numbered sub-headings (1.3.1, 2.3.1 and so on) are dropped; "Framework A" and
 * "Framework B" stay as procedure titles. Figures 6.1 (caption p. 299, drawn
 * p. 300) is in Topic 01 and 6.2 (caption p. 308, drawn p. 309) in Topic 02;
 * these pages hold no unnumbered drawing. Emphasis italics are dropped;
 * italics are for scientific names, gene symbols and genotypes (A, a, AA, Aa,
 * aa) and the variables p, q and N. The book's em dashes are written as colons,
 * commas or brackets. Exam shares in the Exam Relevance boxes are labelled.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 295–305 ─────────────────────────
  {
    n: '01',
    title: 'Origin of Life & Evidences',
    kalam: 'Imagine you walk into an old haveli that nobody has lived in for two centuries.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is a part of the chapter that is often examined. NEET almost always carries 1–2 direct questions (the book’s estimate from past papers, not official figures): the sequence of chemical evolution, the Miller–Urey experiment, and the homology-vs-analogy trap are frequently asked. CUET leans on definitions and scientist–contribution matching. CBSE Boards typically ask a 2–3 mark “distinguish homologous from analogous organs” or “describe Miller’s experiment” question. The evidences section is also a rich source of NEET assertion–reason items.',
      },
      {
        t: 'p',
        html: 'Imagine you walk into an old haveli that nobody has lived in for two centuries. You cannot meet the people who built it, yet within minutes you can reconstruct an astonishing amount about them: the soot above the lamp niches tells you how they lit the rooms, the worn grooves on the staircase tell you which path they walked most, the layers of paint reveal which generation redecorated and when. You never saw the builders, but the evidence they left behind lets you tell their story with confidence.',
      },
      {
        t: 'p',
        html: 'The history of life works exactly the same way. No human was present when the first cell flickered into existence, and no camera recorded the slow transformation of fish-like ancestors into amphibians. What we have instead is evidence (rocks, bones, embryos, limbs, and molecules), and the entire scientific case for evolution is built by reading that evidence carefully. So this topic really has two halves that belong together: <b>how life may have begun</b> (origin of life), and <b>how we know that life has been changing ever since</b> (the evidences).',
      },
      {
        t: 'p',
        html: 'Start with the harder question, the beginning. For most of human history people assumed life simply appears: maggots from rotting meat, frogs from monsoon mud. This idea, called <b>spontaneous generation</b> (abiogenesis in the old sense), felt obvious because nobody could see the eggs and spores doing the actual work. It took clever sealed-jar experiments (Redi covering his meat, Spallanzani boiling his broth, and finally Louis Pasteur’s elegant swan-necked flasks) to prove that life only comes from pre-existing life. That conclusion is called <b>biogenesis</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Pasteur seemed to close the door on life arising from non-life. But that creates a paradox: if every living thing must come from another living thing, where did the very first one come from? You cannot have an unbroken chain of “life from life” stretching infinitely backwards on a planet that was once molten rock. Somewhere, at least once, non-living chemistry must have crossed the line into living biology. Resolving that paradox is the job of the <b>chemical evolution</b> (Oparin–Haldane) theory: not “life springs from mud in a week,” but “over hundreds of millions of years, on a young Earth with the right ingredients and energy, simple molecules slowly assembled into the first self-sustaining systems.”',
      },
      {
        t: 'p',
        html: 'The second half, the evidences, is about a different kind of confidence. When several completely independent lines of inquiry (geology, anatomy, embryology, biochemistry, geography) all point to the same family tree of life, that agreement is what scientists call <b>consilience</b>. Any one clue could be a coincidence; all of them agreeing is not.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Caveats (read these before the exam):</b><br>• Chemical evolution is <b>not</b> spontaneous generation revived. Spontaneous generation claimed complex organisms appear ready-made and fast; chemical evolution proposes only molecules assembling gradually under conditions that <b>no longer</b> exist on today’s oxygen-rich Earth. The early atmosphere was <b>reducing</b> (no free oxygen); a modern oxidising atmosphere would destroy those fragile molecules.<br>• The Miller–Urey experiment produced <b>amino acids and organic monomers</b>, not a living cell. It proved a step was possible, not that life did originate exactly that way. Treat it as a proof-of-concept, never as “scientists made life.”<br>• <b>Homology indicates common ancestry; analogy does not.</b> This single sentence prevents a common exam mistake (more in Key conceptual frameworks).<br>• <b>Haeckel’s “recapitulation theory” is disproven.</b> The catchy line “ontogeny recapitulates phylogeny” (that an embryo replays its adult ancestors) is wrong. Karl Ernst von Baer showed embryos resemble the embryos (not adults) of related species. Embryology is still good evidence; Haeckel’s specific claim is not.',
      },

      { t: 'part', title: 'Key definitions and core principles' },
      {
        t: 'p',
        html: '<b>Theories of the Origin of Life:</b> keep these straight; CUET loves the scientist–theory pairing.',
      },
      {
        t: 'table',
        title: null,
        head: ['Theory', 'Core claim', 'Key name(s)', 'Status today'],
        rows: [
          ['Special creation', 'Life created by a divine/supernatural act', '(mythological)', 'Not testable; outside science'],
          [
            'Spontaneous generation (abiogenesis, old sense)',
            'Life arises continually from non-living matter (mud, decay)',
            'Aristotle, van Helmont',
            '<b>Disproved</b> (Redi, Spallanzani, Pasteur)',
          ],
          ['Biogenesis', 'Life arises only from pre-existing life', 'Louis Pasteur', 'Accepted, but cannot explain the first life'],
          ['Panspermia (cosmozoic)', 'Life (spores) arrived from outer space', 'Anaxagoras (early Greek); Arrhenius (spores, 1903)', 'Speculative; only relocates the problem'],
          [
            'Chemical evolution (Oparin–Haldane)',
            'First life formed gradually from non-living organic molecules on early Earth',
            'A.I. Oparin, J.B.S. Haldane',
            '<b>Most widely accepted</b>',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Core terms:</b><br>• <b>Abiogenesis (modern sense):</b> origin of life from non-living chemical matter, but gradual and one-time, as in chemical evolution. (Note the trap: the word abiogenesis is used both for the discredited “spontaneous generation” and for the accepted “chemical origin.” Context decides.)<br>• <b>Biogenesis:</b> origin of living organisms from pre-existing living organisms.<br>• <b>Protobionts / coacervates / microspheres:</b> membrane-bounded droplets of organic molecules that were partially isolated from their surroundings and could maintain a simple internal environment, a pre-cellular stage, <b>not</b> yet truly alive.<br>• <b>Evolution:</b> heritable change in a population across generations, producing the diversity of life.',
      },
      {
        t: 'p',
        html: '<b>Evidences for Evolution:</b> the second half of this topic. They are usually grouped into these classes:',
      },
      {
        t: 'table',
        title: null,
        head: ['Evidence class', 'What it demonstrates', 'Representative example'],
        rows: [
          ['Palaeontological (fossils)', 'Life forms changed over geological time; older strata hold simpler/older forms', 'Fossils in successive sedimentary layers'],
          ['Biogeographical', 'Related species track continental history', 'Continental drift (Wegener), distinctive Australian fauna'],
          ['Morphological & comparative anatomy', 'Shared body plans imply shared ancestry', 'Homologous organs; vestigial organs'],
          ['Embryological', 'Early development reveals relatedness', 'Common early embryo stages (not Haeckel’s recapitulation)'],
          ['Molecular / biochemical', 'Degree of genetic similarity = degree of relatedness', 'Human and chimpanzee DNA are very similar (differences of only 1–2% of aligned bases; the figure depends on how they are counted)'],
        ],
      },
      {
        t: 'p',
        html: '<b>Homology vs Analogy:</b> a much-tested comparison:',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Homologous organs', 'Analogous organs'],
        rows: [
          ['Basic structure & embryonic origin', '<b>Same</b>', '<b>Different</b>'],
          ['Function', 'May differ', 'Similar'],
          ['Underlying process', '<b>Divergent</b> evolution', '<b>Convergent</b> evolution'],
          ['What it implies', '<b>Common ancestry</b>', 'Similar environment, not ancestry'],
          [
            'Examples',
            'Forelimbs of human, bat, whale, horse (pentadactyl plan); thorns of <i>Bougainvillea</i> and tendrils of <i>Cucurbita</i>',
            'Wings of insect and bird (or insect and bat); eyes of octopus and mammal; sweet potato (root) and potato (stem)',
          ],
        ],
      },
      {
        t: 'p',
        html: '• <b>Vestigial organs:</b> reduced remnants of structures that were fully functional in ancestors, with little or no function now (e.g. human vermiform appendix, coccyx/tailbone, nictitating membrane, wisdom teeth; splint bones in horses; pelvic-girdle remnants in pythons).<br>• <b>Atavism (reversion):</b> the sudden reappearance of an ancestral feature thought lost (e.g. a human infant born with a short tail; well-developed body hair).<br>• <b>Adaptive radiation:</b> evolution of several different functional forms from one common ancestral stock that has entered a region with many vacant habitats. Concept developed by H.F. Osborn (early 1900s). Classic cases: <b>Darwin’s finches</b> of the Galápagos and the <b>marsupials of Australia</b>. Because it modifies a shared body plan into many forms, adaptive radiation produces homologous structures and is a form of divergent evolution.',
      },
      {
        t: 'p',
        html: '<b>Frequencies, units, dimensions:</b> this topic is qualitative: there are no SI units or dimensional formulae to track. Geological time is expressed in <b>mya</b> (million years ago) or <b>bya</b> (billion years ago).',
      },

      { t: 'part', title: 'Key conceptual frameworks' },
      {
        t: 'p',
        html: 'This topic has no algebraic derivation, so the “framework” here is two reasoned chains: <b>how life is thought to have assembled</b>, and <b>why each class of evidence forces the conclusion of common descent</b>.',
      },
      {
        t: 'p',
        html: 'The Oparin–Haldane idea is a staircase, not a single leap. Each step is only plausible because the step before it set the stage.',
      },
      {
        t: 'proc',
        title: 'Framework A: The chemical-evolution sequence (and why each step)',
        steps: [
          '<b>Reducing atmosphere + energy.</b> The young Earth (about 4.5 bya) had an atmosphere of methane (CH<sub>4</sub>), ammonia (NH<sub>3</sub>), hydrogen (H<sub>2</sub>) and water vapour, and <b>no free oxygen</b>. Why this matters: oxygen is a destroyer of fragile organic molecules; only a reducing atmosphere lets complex molecules accumulate instead of being burnt up. Energy came from UV radiation, lightning and volcanic heat.',
          '<b>Inorganic → organic monomers.</b> Energy drove the simple gases to combine into small organic molecules: amino acids, sugars, nitrogen bases. This is exactly the step Miller and Urey tested in the lab.<br><br><b>The Miller–Urey experiment (1953).</b> Stanley Miller, in Harold Urey’s lab, sealed CH<sub>4</sub>, NH<sub>3</sub>, H<sub>2</sub> and water vapour in a closed glass apparatus and passed electric sparks through the gas mixture to mimic lightning over a primitive ocean. After a week, the cooled condensate contained <b>amino acids</b> and other organic monomers. Why it was decisive: it showed that the very first chemical step could happen under early-Earth conditions using nothing but ordinary chemistry and energy. It supported the Oparin–Haldane theory and, crucially, produced building blocks, never a living thing.',
          '<b>Monomers → polymers.</b> Monomers linked into polymers: proteins and nucleic acids. Why: life needs both machinery (proteins) and information (nucleic acids), and these only become possible once monomers exist in concentration.',
          '<b>The RNA-world step.</b> The first non-cellular life is thought (the RNA-world hypothesis) to have been <b>RNA</b> (~3 bya), because RNA can both store information and act as a catalyst, solving the chicken-and-egg problem of “which came first, the gene or the enzyme.”',
          '<b>Polymers → protobionts → cells.</b> Molecules clustered into membrane-bounded droplets (coacervates/microspheres) that were partially isolated and could maintain an internal chemistry: protobionts. Why this is the threshold: a boundary lets a system concentrate reactions and pass traits on. Once such a droplet acquired heritable information, it crossed into being a genuine <b>cell</b>. The first cells were non-green, anaerobic chemoheterotrophs.',
        ],
      },
      { t: 'fig', id: 'b12-06-fig-6.1' },
      {
        t: 'p',
        html: 'The full chain, then, is: <b>inorganic molecules → organic monomers → organic polymers → protobionts (coacervates) → first cells.</b> Memorise the order; NEET tests it directly.',
      },
      {
        t: 'p',
        html: '<b>Framework B: Why each evidence class forces “common descent”</b><br>The logical move common to all evidence is this: <b>similarity that cannot be explained by present-day function is best explained by shared inheritance.</b>',
      },
      {
        t: 'p',
        html: '• <b>Homology is the cleanest case.</b> A whale’s flipper, a bat’s wing, and a horse’s leg do utterly different jobs (swimming, flying, running), yet share the same underlying bones in the same arrangement (humerus, radius–ulna, carpals, phalanges). If each had been “designed from scratch” for its function, there would be no reason to reuse one blueprint. The shared blueprint only makes sense if all three inherited it from one common ancestor and then diverged. That is <b>divergent evolution</b>.<br>• <b>Analogy is the deliberate contrast.</b> An insect’s wing and a bird’s wing both fly, but are built on entirely different structures. Here the similarity is driven by the environment (the demands of flight), not by shared ancestry: <b>convergent evolution</b>. This is why analogy must never be used as evidence of relatedness.<br>• <b>Fossils add the time axis.</b> In undisturbed sedimentary rock, deeper layers are older. Finding simpler/older forms in lower strata and more complex/recent forms above them shows life has changed in sequence over time. Transitional fossils, “connecting links,” are especially powerful. <i>Archaeopteryx</i>, for instance, bridges reptiles and birds: it had feathers and wings (bird-like) but also teeth, a long bony tail and clawed digits (reptile-like).<br>• <b>Biogeography ties life to the planet’s own history.</b> Continental drift (Wegener, 1912) split the supercontinent Pangaea; species that were once together became isolated and evolved separately, which is why Australia, long isolated, brims with marsupials found almost nowhere else.<br>• <b>Molecular evidence makes relatedness quantitative.</b> The more similar two species’ DNA or proteins, the more recently they shared an ancestor. Human and chimpanzee DNA differ in only about 1–2% of aligned base pairs (the figure depends on how differences are counted), and their cytochrome-C protein is essentially identical, placing humans closer to apes than to monkeys, exactly as anatomy and fossils independently suggest.',
      },
      {
        t: 'p',
        html: 'When geology, anatomy, embryology, biogeography and molecules, gathered by different scientists using different methods, all draw the same tree, the agreement (consilience) is the real strength of the case.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board · 3 marks',
        q: 'Define homologous and analogous organs. Give one plant example of each, and state the type of evolution each represents.',
        steps: [
          '<b>Model answer (board format).</b> Homologous organs have the same basic structure and embryonic origin but may perform different functions. Plant example: the thorns of <i>Bougainvillea</i> and the tendrils of <i>Cucurbita</i> arise from the same positional/structural origin but do different jobs (protection vs climbing). They represent divergent evolution.',
          'Analogous organs have different basic structure and origin but perform a similar function. Plant example: the sweet potato (a modified root) and the potato (a modified stem) both store food but arise from different organs. They represent convergent evolution.',
          'Concluding line: homology indicates common ancestry; analogy indicates only similar functional pressure.',
          '<b>Why this scores full marks:</b> it gives a precise definition, a correctly classified example for each, and the evolution-type label, the three things the marking scheme looks for.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET · match-the-column / single best option',
        q: 'Match each scientist with their contribution, then choose the fully correct option.<br><b>Column I (Scientist):</b> P. Louis Pasteur; Q. Oparin & Haldane; R. Miller & Urey; S. Alfred Wegener.<br><b>Column II (Contribution):</b> i. Proposed chemical (gradual) origin of life; ii. Produced amino acids by sparking a gas mixture; iii. Disproved spontaneous generation; iv. Continental drift / Pangaea.<br><b>(a)</b> P-iii, Q-i, R-ii, S-iv<br><b>(b)</b> P-i, Q-iii, R-ii, S-iv<br><b>(c)</b> P-iii, Q-ii, R-i, S-iv<br><b>(d)</b> P-ii, Q-i, R-iii, S-iv',
        steps: [
          '<b>Fast reasoning:</b> anchor the two you are surest of. Wegener → drift (S-iv) is automatic and eliminates nothing by itself, so anchor Pasteur. Pasteur’s swan-neck flasks disproved spontaneous generation (P-iii) → only options (a) and (c) survive. Then separate the two easily-confused names: Oparin–Haldane = the theory (i), Miller–Urey = the experiment (ii). That gives Q-i, R-ii → option (a). Option (c) sets the classic trap of swapping the theory-makers with the experimenters.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET · sequence ordering',
        q: 'Which of the following is the correct chronological sequence in the chemical origin of life?<br>I. Formation of protobionts (coacervates) II. Synthesis of organic monomers III. Synthesis of organic polymers IV. Origin of the first cells<br><b>(a)</b> II → III → I → IV<br><b>(b)</b> I → II → III → IV<br><b>(c)</b> II → I → III → IV<br><b>(d)</b> III → II → I → IV',
        steps: [
          '<b>Reasoning:</b> you cannot build polymers before you have monomers, so II must precede III. This alone kills (b) and (d). Protobionts are assemblies of polymers, so they come after III, not before it, which kills (c), where I is placed too early. The only sequence respecting “small before large before assembled before alive” is II → III → I → IV, option (a). <b>Trap:</b> students who memorise “monomer, polymer, cell” but forget the protobiont stage rush to option resembling II → III → IV and mis-slot I.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty · assertion–reason',
        q: '<b>Assertion (A):</b> Embryological similarities among vertebrates are valid evidence for evolution. <b>Reason (R):</b> Haeckel’s recapitulation theory is correct: the embryo of an organism repeats the adult stages of its ancestors during development.<br><b>(a)</b> Both A and R are true and R is the correct explanation of A<br><b>(b)</b> Both A and R are true but R is not the correct explanation of A<br><b>(c)</b> A is true but R is false<br><b>(d)</b> A is false but R is true',
        steps: [
          '<b>Reasoning:</b> embryological evidence is genuine: early embryos of fish, tortoise, chick and human share striking similarities (A is true). But the reason offered is the discredited one. Haeckel’s recapitulation (“ontogeny recapitulates phylogeny”) is false; Karl Ernst von Baer showed embryos resemble the embryos of related forms, not their adults (R is false). A true assertion paired with a false, outdated reason → option (c). <b>Trap:</b> (a) is the seductive wrong answer for anyone who still treats Haeckel’s law as correct, exactly the misconception this item is built to catch.',
        ],
        ans: '(c)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Describe Miller’s experiment with a labelled sketch and state what it demonstrated about the origin of life. (3 marks)',
            a: '(see Framework A in Key conceptual frameworks: apparatus + “produced organic monomers/amino acids, not life”).',
          },
          {
            q: '[CUET] “Pasteur’s experiment disproved one theory but deepened another puzzle.” Identify the theory disproved and the puzzle it left unanswered.',
            a: 'Disproved = spontaneous generation; puzzle = origin of the first life.',
          },
          {
            q: '[NEET] The wings of a butterfly and the wings of a bat are best described as: <b>(a)</b> homologous, divergent evolution <b>(b)</b> analogous, convergent evolution <b>(c)</b> homologous, convergent evolution <b>(d)</b> vestigial structures',
            a: '(b).',
          },
          {
            q: '[NEET] Which one of the following is the most likely composition of the early reducing atmosphere in which chemical evolution occurred? <b>(a)</b> O<sub>2</sub>, N<sub>2</sub>, CO<sub>2</sub>, H<sub>2</sub>O <b>(b)</b> CH<sub>4</sub>, NH<sub>3</sub>, H<sub>2</sub>, H<sub>2</sub>O <b>(c)</b> O<sub>2</sub>, CH<sub>4</sub>, NH<sub>3</sub>, H<sub>2</sub> <b>(d)</b> CO<sub>2</sub>, O<sub>2</sub>, H<sub>2</sub>, He',
            a: '(b).',
          },
          {
            q: '[NEET High-Difficulty] A single ancestral stock entering an isolated island gives rise to several species each adapted to a different food source. Identify the process, name a classic example, and state which type of organs (homologous/analogous) it produces and why.',
            a: 'Adaptive radiation; Darwin’s finches (or Australian marsupials); produces homologous organs, because all forms modify one inherited body plan → divergent evolution.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Coacervates/protobionts in the abiogenic origin of life are best described as:',
        opts: [
          {
            label: 'the first true living cells',
            nudge: '<b>(a)</b> confuses the pre-cell with the cell: protobionts could not yet reproduce in the full sense, so they were not “true cells.”',
          },
          { label: 'membrane-bounded droplets that maintained a partially isolated internal environment', nudge: null },
          {
            label: 'free amino acids dissolved in the primitive ocean',
            nudge: '<b>(c)</b> describes an earlier stage (monomers), picked by students who collapse the staircase.',
          },
          {
            label: 'self-replicating DNA molecules',
            nudge: '<b>(d)</b> describes the later DNA-based genetic system, not the droplet stage.',
          },
        ],
        correct: 1,
        solution: 'Protobionts were a pre-cellular stage: droplets partially isolated from their surroundings with a simple internal chemistry.',
      },
      {
        t: 'mcq',
        q: 'Which pair shows analogy (and therefore convergent evolution)?',
        opts: [
          {
            label: 'Forelimb of whale and forelimb of bat',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all homologous (same blueprint, divergent evolution): a student who reverses the homology/analogy definitions will wrongly reject (c) and pick one of these.',
          },
          {
            label: 'Thorn of <i>Bougainvillea</i> and tendril of <i>Cucurbita</i>',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all homologous (same blueprint, divergent evolution): a student who reverses the homology/analogy definitions will wrongly reject (c) and pick one of these.',
          },
          { label: 'Eye of octopus and eye of human', nudge: null },
          {
            label: 'Forearm of human and forelimb of horse',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all homologous (same blueprint, divergent evolution): a student who reverses the homology/analogy definitions will wrongly reject (c) and pick one of these.',
          },
        ],
        correct: 2,
        solution: 'Octopus and human eyes do the same job (vision) but are built on completely different developmental plans → analogous, convergent. Anchor on “different structure, same function = analogy.”',
      },
      {
        t: 'mcq',
        q: 'Human DNA is more than 98 per cent identical to chimpanzee DNA in aligned sequence. This is an example of which evidence for evolution?',
        opts: [
          { label: 'Palaeontological', nudge: '<b>(a)</b> is for those who associate any “human ancestry” fact with fossils.' },
          { label: 'Embryological', nudge: '<b>(b)</b> confuses development with molecules.' },
          { label: 'Molecular (biochemical)', nudge: null },
          {
            label: 'Biogeographical',
            nudge: '<b>(d)</b> is chosen by students who remember “chimps and humans” as a geography/distribution fact rather than a sequence comparison.',
          },
        ],
        correct: 2,
        solution: 'A direct comparison at the level of genetic material is molecular evidence.',
      },
      {
        t: 'mcq',
        q: 'Which statement about the Miller–Urey experiment is incorrect?',
        opts: [
          {
            label: 'It used a reducing mixture of CH<sub>4</sub>, NH<sub>3</sub>, H<sub>2</sub> and water vapour',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all true; the item rewards students who resist the dramatic but false claim that Miller “created life.”',
          },
          {
            label: 'Electric discharge simulated lightning',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all true; the item rewards students who resist the dramatic but false claim that Miller “created life.”',
          },
          { label: 'It produced living microbial cells from non-living matter', nudge: null },
          {
            label: 'It supported the Oparin–Haldane theory',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all true; the item rewards students who resist the dramatic but false claim that Miller “created life.”',
          },
        ],
        correct: 2,
        solution: '(c) is the incorrect statement: the experiment produced organic monomers (amino acids), never living cells. This is a common misconception about the experiment.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Reversing homology and analogy.</b> Many students remember the words but flip the link to convergent/divergent. Lock it in once: Homology = same structure, divergent, common ancestry.',
          '<b>Believing Haeckel.</b> “Ontogeny recapitulates phylogeny” sounds authoritative and appears in old material, but it is disproved. Use von Baer’s correction: embryos resemble embryos, not adults.',
          '<b>Saying Miller “made life.”</b> He made monomers. Stating otherwise loses marks and reveals the misconception.',
          '<b>Confusing biogenesis with chemical evolution.</b> Pasteur (biogenesis) showed life comes from life today; Oparin–Haldane (chemical evolution) explains the first life long ago. Different questions, different answers.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (homology/analogy in 3 seconds):</b> ask only one question: “Is the underlying structure the same?” If yes → homologous → divergent → common ancestry, regardless of what the organs do. If no but the function matches → analogous → convergent. Function is a distractor; structure is the deciding clue.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'OoL theories order of credibility',
            note: 'special creation → spontaneous generation (disproved: Redi, Spallanzani, Pasteur) → biogenesis → chemical evolution (Oparin–Haldane) = accepted.',
          },
          {
            f: 'Chemical-evolution sequence',
            note: 'inorganic → organic monomers → polymers → protobionts (coacervates) → first cells. First life = non-cellular RNA (~3 bya); first cells = anaerobic chemoheterotrophs.',
          },
          {
            f: 'Miller–Urey',
            note: 'sparked CH<sub>4</sub> + NH<sub>3</sub> + H<sub>2</sub> + H<sub>2</sub>O (reducing) → amino acids, not life. Supports Oparin–Haldane.',
          },
          {
            f: 'Five evidence classes',
            note: 'Fossils · Biogeography (Wegener/Pangaea) · Comparative anatomy (homology, vestigial organs) · Embryology (not Haeckel) · Molecular (human–chimp ~1–2% DNA difference).',
          },
          {
            f: 'Homology = same structure, divergent evolution, common ancestry. Analogy = same function, convergent evolution, similar environment.',
            note: '',
          },
          {
            f: 'Adaptive radiation (Osborn)',
            note: 'one ancestor → many forms in vacant habitats → Darwin’s finches, Australian marsupials; produces homologous organs.',
          },
        ],
        aids: [
          'Memory aids: “Monomers, Polymers, Protobionts, Cells” = Mo-Po-Pro-Ce, the origin staircase.',
          'For evidence classes: “F-B-A-E-M” (Fossils, Biogeography, Anatomy, Embryology, Molecular).',
          'For the homology trap: “Same bones, different jobs = relatives.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 306–314 ─────────────────────────
  {
    n: '02',
    title: 'Theories of Evolution & the Hardy–Weinberg Principle',
    kalam: 'Three big answers were offered in turn, and watching them rise and fall is the best way to understand evolution itself.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the analytical heart of the chapter and a high-return topic. NEET reliably carries 1–2 questions (the book’s estimate from past papers, not official figures): a Hardy–Weinberg numerical (find the carrier frequency), the “five factors” that disturb equilibrium, and the Lamarck-vs-Darwin-vs-de Vries comparison are the staples. CUET favours one-line distinctions (saltation, germplasm, modern synthesis). CBSE Boards ask the H–W statement and derivation (2–3 marks) and “criticisms of Darwin’s theory.” The H–W equation is the main piece of real arithmetic in this chapter, so practise it until it is automatic.',
      },
      {
        t: 'p',
        html: 'Every theory of evolution is really an attempt to answer one stubborn question: life clearly changes over time, but what is the engine driving the change? Three big answers were offered in turn, and watching them rise and fall is the best way to understand evolution itself.',
      },
      {
        t: 'p',
        html: 'The first answer came from <b>Lamarck</b>: organisms strive, and what they practise in life gets passed to their children. A giraffe stretches for high leaves, its neck lengthens a little, and, Lamarck claimed, that slightly longer neck is inherited, so the next generation starts a little taller. It is an intuitive, almost comforting idea: effort is rewarded across generations.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Lamarck’s idea fails a simple kitchen test. A wrestler builds huge muscles through years of training, but his newborn is not born muscular. A woman who has had her ears pierced does not give birth to a baby with pierced ears. <b>Acquired characters</b>, things that happen to the body during life, are not inherited. <b>August Weismann</b> nailed this shut by cutting the tails off mice for 22 successive generations; not one tail-less mouse was ever born. He explained why with his <b>germplasm theory</b>: only the germ cells (egg and sperm) pass to the next generation; changes to the body cells (somatoplasm) die with the individual.',
      },
      {
        t: 'p',
        html: 'The second answer was <b>Darwin’s</b>, and it is the one that survived. Darwin did not say organisms strive into new forms. He said: organisms vary heritably; far more are born than can survive; those whose variations happen to fit the environment leave more offspring; and so, generation after generation, nature quietly “selects” the better-suited: <b>natural selection</b>. The giraffe’s neck lengthened not because giraffes tried, but because, in a population of giraffes with naturally varying neck lengths, the longer-necked ones ate better and out-reproduced the rest.',
      },
      {
        t: 'p',
        html: 'Darwin’s theory had a famous gap: he had no idea how variation arose or how it was passed on (genetics didn’t exist yet). That gap was addressed in two steps: first by <b>Hugo de Vries</b>, who proposed, from his work on the evening primrose, that new heritable variation arises by sudden large mutations (<b>saltation</b>), and finally by the <b>Modern Synthetic Theory</b>, which married Darwin’s natural selection to Mendelian genetics. The modern view: variation arises by mutation and recombination; natural selection, gene flow and genetic drift change its frequency; reproductive isolation splits populations into species.',
      },
      {
        t: 'p',
        html: 'Now flip the question around. Instead of asking “what makes a population evolve?”, ask “what would a population look like if it weren’t evolving at all?” That hypothetical, non-evolving population is exactly what the <b>Hardy–Weinberg principle</b> describes. It is a baseline, a “do-nothing” reference. If a real population’s allele frequencies match the Hardy–Weinberg prediction, nothing is pushing it; if they drift away from the prediction, some force (or chance, in a small sample) is at work; a large gap suggests a stronger effect.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Hardy–Weinberg is like the “no-force” state in physics. Newton’s first law says an object keeps its velocity unless a force acts. Hardy–Weinberg says allele frequencies stay constant unless an evolutionary force acts. The principle’s real job is not to describe reality (almost no real population is in perfect equilibrium) but to give us a yardstick against which evolution becomes visible.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Caveats:</b><br>• Hardy–Weinberg equilibrium holds <b>only</b> under five idealising conditions (large population, random mating, no mutation, no gene flow, no selection). Break any one and the population can depart from equilibrium (a small population, mutation, gene flow or selection changes allele frequencies; non-random mating changes genotype frequencies only). Real populations rarely satisfy all five: that is why evolution happens.<br>• The equation <i>p</i><sup>2</sup> + 2<i>pq</i> + <i>q</i><sup>2</sup> = 1 describes <b>genotype</b> frequencies; <i>p</i> + <i>q</i> = 1 describes <b>allele</b> frequencies. Mixing the two is a common numerical error.<br>• Lamarckism is not “wrong about everything” (organisms do change with use and disuse); it is wrong about one thing: those changes are not inherited.<br>• Mutation changes allele frequencies very slowly and recombination only reshuffles existing alleles; natural selection is the main directional force, whereas genetic drift acts by chance.',
      },

      { t: 'part', title: 'Key definitions and core principles' },
      {
        t: 'p',
        html: '<b>The three landmark theories:</b> keep the comparison sharp:',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Lamarckism (1809)', 'Darwinism (1859)', 'Modern Synthetic Theory (1930s–1940s)'],
        rows: [
          ['Proposed by', 'J.B. Lamarck', 'C. Darwin & A.R. Wallace', 'Huxley, Dobzhansky and others'],
          ['Engine of change', 'Use & disuse of organs', 'Natural selection of variations', 'Natural selection + genetics'],
          ['Source of variation', 'Striving / environmental need', 'Small, heritable, directional variations', 'Mutation + recombination'],
          ['Acquired characters inherited?', 'Yes (its fatal flaw)', 'No', 'No'],
          ['Status', 'Disproved (Weismann)', 'Accepted, but incomplete', 'Currently accepted'],
        ],
      },
      {
        t: 'p',
        html: '<b>Core terms:</b><br>• <b>Inheritance of acquired characters:</b> Lamarck’s claim that body changes gained during life pass to offspring, refuted by Weismann’s germplasm theory (only germ cells are heritable).<br>• <b>Natural selection:</b> differential survival and reproduction of individuals carrying favourable heritable variations. Darwin’s two key concepts were <b>branching descent</b> and <b>natural selection</b>.<br>• <b>Darwinian fitness:</b> an individual’s reproductive success, measured by the number of offspring left, not by strength or size.<br>• <b>Saltation (de Vries):</b> evolution by single-step large <b>mutations</b>. De Vries called these mutations “random and directionless,” in contrast to Darwin’s “small and directional” variations. (Based on his work on the evening primrose, <i>Oenothera</i>.)<br>• <b>Neo-Darwinism / Modern Synthesis:</b> Darwin’s selection updated with genetics, molecular biology, palaeontology and ecology; speciation explained via genetic variation + selection + reproductive isolation.',
      },
      {
        t: 'p',
        html: '<b>Three types of natural selection</b> (how selection reshapes a trait’s distribution):',
      },
      {
        t: 'table',
        title: null,
        head: ['Type', 'What it favours', 'Effect on the curve', 'Everyday example'],
        rows: [
          ['<b>Stabilising</b>', 'The average; removes both extremes', 'Peak gets taller & narrower', 'Human birth weight clustering near a mean'],
          ['<b>Directional</b>', 'One extreme', 'Peak shifts toward that extreme', 'Darker peppered moths in soot-darkened cities'],
          ['<b>Disruptive</b>', 'Both extremes; removes the average', 'Curve splits into two peaks', 'Bill sizes splitting where only large and small seeds exist'],
        ],
      },
      { t: 'fig', id: 'b12-06-fig-6.2' },
      {
        t: 'p',
        html: '<b>Hardy–Weinberg vocabulary:</b><br>• <b>Gene pool:</b> all the alleles of all genes in a population.<br>• <b>Allele frequency:</b> <i>p</i> = frequency of the dominant allele (<i>A</i>); <i>q</i> = frequency of the recessive allele (<i>a</i>); with two alleles, <i>p</i> + <i>q</i> = 1.<br>• <b>Genotype frequencies:</b> <i>p</i><sup>2</sup> = <i>AA</i> (homozygous dominant), 2<i>pq</i> = <i>Aa</i> (heterozygous), <i>q</i><sup>2</sup> = <i>aa</i> (homozygous recessive).<br>• <b>Genetic (Hardy–Weinberg) equilibrium:</b> the state in which allele frequencies stay constant from generation to generation.',
      },
      {
        t: 'p',
        html: '<b>Frequencies are dimensionless and must sum to 1.</b> There are no SI units here: the only sanity check you need is <i>p</i> + <i>q</i> = 1 and <i>p</i><sup>2</sup> + 2<i>pq</i> + <i>q</i><sup>2</sup> = 1.',
      },

      { t: 'part', title: 'Key derivation and conceptual frameworks' },
      {
        t: 'p',
        html: '<b>The Hardy–Weinberg derivation (and why each step works)</b><br>Two alleles, <b><i>A</i></b> with frequency <i>p</i> and <b><i>a</i></b> with frequency <i>q</i>, where<br><br><i>p</i> + <i>q</i> = 1<br><br><b>Step 1: gametes carry alleles in the same proportion.</b> Because each gamete carries one allele of the gene, the fraction of all sperm carrying <i>A</i> is <i>p</i> and carrying <i>a</i> is <i>q</i>; the same is true of eggs. Why this matters: it lets us treat fertilisation as drawing one allele from the “sperm pool” and one from the “egg pool.”',
      },
      {
        t: 'p',
        html: '<b>Step 2: random mating means random union of gametes.</b> Under random mating, any sperm is equally likely to meet any egg, so we may <b>multiply</b> the independent gamete frequencies to get offspring genotype frequencies:',
      },
      {
        t: 'table',
        title: null,
        head: ['', '<i>A</i> egg (<i>p</i>)', '<i>a</i> egg (<i>q</i>)'],
        rows: [
          ['<b><i>A</i> sperm (<i>p</i>)</b>', '<i>AA</i> = <i>p</i><sup>2</sup>', '<i>Aa</i> = <i>pq</i>'],
          ['<b><i>a</i> sperm (<i>q</i>)</b>', '<i>Aa</i> = <i>pq</i>', '<i>aa</i> = <i>q</i><sup>2</sup>'],
        ],
      },
      {
        t: 'p',
        html: '<b>Step 3: collect the genotypes.</b> <i>AA</i> forms one way (<i>p</i> × <i>p</i>); <i>aa</i> forms one way (<i>q</i> × <i>q</i>); but <b><i>Aa</i> forms two ways</b> (<i>A</i>-sperm + <i>a</i>-egg, or <i>a</i>-sperm + <i>A</i>-egg), which is why it carries the factor of 2:<br><br><i>AA</i> = <i>p</i><sup>2</sup>, <i>Aa</i> = 2<i>pq</i>, <i>aa</i> = <i>q</i><sup>2</sup><br><br><b>Step 4: the genotypes must account for the whole population</b>, so their frequencies sum to 1. Notice this is just the binomial expansion of (<i>p</i> + <i>q</i>)<sup>2</sup>:<br><br><i>p</i><sup>2</sup> + 2<i>pq</i> + <i>q</i><sup>2</sup> = (<i>p</i> + <i>q</i>)<sup>2</sup> = 1<sup>2</sup> = 1<br><br><b>Step 5: why it stays at equilibrium.</b> If nothing removes or adds alleles, <i>p</i> and <i>q</i> are unchanged next generation, so the same genotype frequencies regenerate forever. That unchanging state is <b>Hardy–Weinberg equilibrium</b>.',
      },
      {
        t: 'p',
        html: 'Equilibrium holds <b>only</b> when all five are true; each is simply “switch off one evolutionary force”:',
      },
      {
        t: 'proc',
        title: 'Framework A: the five conditions for equilibrium',
        steps: [
          '<b>Large population:</b> so chance fluctuations (genetic drift) are negligible.',
          '<b>Random mating:</b> no mate choice based on genotype.',
          '<b>No mutation:</b> no new alleles created or converted.',
          '<b>No gene flow (migration):</b> no alleles entering or leaving.',
          '<b>No natural selection:</b> no genotype out-reproduces another.',
        ],
      },
      {
        t: 'p',
        html: 'These are the mirror image of the conditions: break a condition and you get a force:',
      },
      {
        t: 'proc',
        title: 'Framework B: the five factors that disturb equilibrium (i.e. that cause evolution)',
        steps: [
          '<b>Gene migration / gene flow:</b> alleles added to or lost from a population shift its frequencies; repeated migration makes this a steady force.',
          '<b>Genetic drift:</b> random change in allele frequency by chance, powerful in small populations. Two special cases:<br>• <b>Founder effect:</b> a few individuals start a new population carrying only a slice of the original gene pool.<br>• <b>Bottleneck effect:</b> a population crash leaves survivors whose allele frequencies differ from the original.',
          '<b>Mutation:</b> slow, random source of brand-new alleles; the source of all new alleles.',
          '<b>Genetic recombination:</b> crossing over during meiosis shuffles alleles into new combinations.',
          '<b>Natural selection:</b> non-random survival/reproduction; the main directional force.',
        ],
      },
      {
        t: 'p',
        html: '<b>Precision note (for the careful student):</b> mutation and recombination mainly supply variation; strictly, recombination reshuffles existing alleles and does not by itself change allele frequencies. NCERT lists all five as factors affecting equilibrium, and that is the exam-expected answer, but the forces that actually change allele frequencies are selection, drift and gene flow, with mutation acting only very slowly.',
      },
      {
        t: 'p',
        html: '<b>The payoff:</b> if a population’s measured genotype frequencies differ from the <i>p</i><sup>2</sup> ∶ 2<i>pq</i> ∶ <i>q</i><sup>2</sup> prediction, the difference reveals that one of these forces is acting: that is how Hardy–Weinberg becomes a detector of evolution.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board · 3 marks',
        q: 'State the Hardy–Weinberg principle and list any three factors that can disturb genetic equilibrium.',
        steps: [
          '<b>Model answer.</b> The Hardy–Weinberg principle states that, in a large, randomly-mating population free from mutation, gene flow and selection, <b>allele frequencies remain constant from generation to generation</b>, and the genotype frequencies follow <i>p</i><sup>2</sup> + 2<i>pq</i> + <i>q</i><sup>2</sup> = 1 (where <i>p</i> + <i>q</i> = 1). Any three disturbing factors: <b>gene flow (migration), genetic drift, and natural selection</b> (also acceptable: mutation, genetic recombination). <b>Why it scores:</b> it gives the constancy statement, the equation, and names valid factors, the three things the marking scheme requires.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET · single best option',
        q: 'Weismann’s experiment of cutting the tails of mice for 22 generations was designed to test, and ultimately refute, which claim?<br><b>(a)</b> Natural selection <b>(b)</b> Inheritance of acquired characters <b>(c)</b> Saltation <b>(d)</b> Genetic drift',
        steps: [
          '<b>Fast reasoning:</b> cutting tails is an acquired modification of the body. If tail-less offspring never appear, then acquired body changes are <b>not</b> inherited, the central claim of <b>Lamarckism</b>. Options (a), (c) and (d) concern variation and frequency change, not the inheritance of bodily modifications, so they are irrelevant to what the experiment tests.',
        ],
        ans: '(b)',
      },
      {
        t: 'ex',
        tag: 'NEET · Hardy–Weinberg numerical',
        q: 'In a large, randomly-mating coastal town of 10,000 people, 400 individuals show a recessive trait (homozygous recessive). Assuming Hardy–Weinberg equilibrium, find the allele frequencies and the expected number of carriers (heterozygotes).',
        steps: [
          '<b>Solution.</b> Frequency of <i>aa</i>: <i>q</i><sup>2</sup> = <frac><num>400</num><den>10000</den></frac> = 0.04 ⇒ <i>q</i> = √0.04 = 0.2',
          'Then <i>p</i> = 1 − <i>q</i> = 0.8',
          'Carriers: 2<i>pq</i> = 2(0.8)(0.2) = 0.32 ⇒ 0.32 × 10000 = <b>3200 heterozygotes</b>',
          '(Homozygous dominant: <i>p</i><sup>2</sup> = 0.64 ⇒ 6400.)',
          '<b>Sanity check:</b> 6400 + 3200 + 400 = 10000 ✓ and 0.64 + 0.32 + 0.04 = 1 ✓',
          '<b>Key move:</b> the recessive <b>phenotype</b> count gives you <i>q</i><sup>2</sup> directly: always take the square root <b>first</b> to get <i>q</i>. Students who forget this and treat 0.04 as <i>q</i> get every subsequent number wrong.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty · equilibrium test',
        q: 'A population of 1000 plants shows genotype counts <i>AA</i> = 300, <i>Aa</i> = 500, <i>aa</i> = 200. Calculate the allele frequencies, then decide whether the population is in Hardy–Weinberg equilibrium.',
        steps: [
          '<b>Solution.</b> Allele frequencies from counts: <i>p</i> = <frac><num>2(300) + 500</num><den>2(1000)</den></frac> = <frac><num>1100</num><den>2000</den></frac> = 0.55, and <i>q</i> = 1 − 0.55 = 0.45.',
          'Expected genotype counts under equilibrium: <i>p</i><sup>2</sup><i>N</i> = 0.3025 × 1000 = 302.5; 2<i>pqN</i> = 0.495 × 1000 = 495; <i>q</i><sup>2</sup><i>N</i> = 0.2025 × 1000 = 202.5.',
          '<b>Compare:</b> observed 300, 500, 200 vs expected 302.5, 495, 202.5.',
          'The observed and expected counts are <b>almost identical</b>, so the population is approximately in Hardy–Weinberg equilibrium: no major evolutionary force appears to be acting. <b>Trap:</b> many students compute <i>p</i> wrongly by ignoring that each heterozygote contributes <b>one</b> <i>A</i> allele. The correct count of <i>A</i> alleles is 2 × <i>AA</i> + <i>Aa</i>, not <i>AA</i> + <i>Aa</i>.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Differentiate between Lamarckism and Darwinism on the basis of (i) source of variation and (ii) inheritance of acquired characters. (2 marks)',
            a: '(i) Lamarck: striving/use & disuse; Darwin: small variations. (ii) Lamarck: inherited; Darwin: not inherited.',
          },
          {
            q: '[CUET] “Mutations are random and directionless, whereas Darwinian variations are small and directional.” Name the scientist associated with the first half of this statement and the theory it gave rise to.',
            a: 'Hugo de Vries; the <b>Mutation Theory</b> (saltation).',
          },
          {
            q: '[NEET] In a population in Hardy–Weinberg equilibrium, the frequency of the dominant allele is 0.7. What percentage of the population is expected to be heterozygous?',
            a: '2<i>pq</i> = 2(0.7)(0.3) = 0.42 = <b>42%</b>.',
          },
          {
            q: '[NEET] Which one of the following will <b>not</b> disturb Hardy–Weinberg equilibrium? <b>(a)</b> Genetic drift <b>(b)</b> Gene flow <b>(c)</b> Random mating <b>(d)</b> Natural selection',
            a: '<b>(c)</b> random mating is a <i>condition for</i> equilibrium, not a disturbing factor.',
          },
          {
            q: '[NEET High-Difficulty] A recessive metabolic disorder occurs in 1 of every 10,000 newborns in a large, randomly-mating city. Estimate the carrier frequency (heterozygotes) as a percentage, and comment on why carriers vastly outnumber affected individuals.',
            a: '<i>q</i><sup>2</sup> = <frac><num>1</num><den>10000</den></frac> ⇒ <i>q</i> = 0.01, <i>p</i> = 0.99; carriers 2<i>pq</i> = 2(0.99)(0.01) = 0.0198 ≈ <b>2%</b>. Carriers (~200 per 10,000) far exceed the affected (1 per 10,000) because the recessive allele is “hidden” in heterozygotes who are phenotypically normal.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The Modern Synthetic Theory of evolution differs from classical Darwinism mainly in that it:',
        opts: [
          { label: 'rejects natural selection', nudge: '<b>(a)</b> is the opposite of the truth: selection is retained.' },
          { label: 'incorporates the genetic basis of variation (mutation and recombination)', nudge: null },
          { label: 'revives the inheritance of acquired characters', nudge: '<b>(c)</b> revives Lamarck, which the synthesis firmly rejects.' },
          {
            label: 'denies the role of reproductive isolation',
            nudge: '<b>(d)</b> is wrong because reproductive isolation is central to the synthesis’s account of speciation.',
          },
        ],
        correct: 1,
        solution: 'The synthesis kept natural selection and added a genetic explanation for the origin of variation.',
      },
      {
        t: 'mcq',
        q: 'In Hardy–Weinberg equilibrium, the heterozygote frequency is given by:',
        opts: [
          { label: '<i>p</i><sup>2</sup>', nudge: '<b>(a)</b> and <b>(b)</b> are the two homozygotes.' },
          { label: '<i>q</i><sup>2</sup>', nudge: '<b>(a)</b> and <b>(b)</b> are the two homozygotes.' },
          { label: '2<i>pq</i>', nudge: null },
          {
            label: '<i>pq</i>',
            nudge: '<b>(d)</b> is the classic trap: the single-route product <i>pq</i>, chosen by students who forget that the heterozygote can form two ways.',
          },
        ],
        correct: 2,
        solution: 'Heterozygotes (<i>Aa</i>) form by two routes (<i>A</i>-sperm/<i>a</i>-egg and <i>a</i>-sperm/<i>A</i>-egg), giving 2<i>pq</i>.',
      },
      {
        t: 'mcq',
        q: 'In a large, randomly-mating population of 50,000, a recessive condition (<i>aa</i>) affects 1 in every 100 individuals. The expected number of carriers is:',
        opts: [
          { label: '500', nudge: '<b>(a)</b> is <i>q</i><sup>2</sup> × <i>N</i> = the affected, not carriers.' },
          { label: '4500', nudge: '<b>(b)</b> halves the carrier value: a student who drops the factor of 2 lands here.' },
          { label: '9000', nudge: null },
          { label: '40,500', nudge: '<b>(d)</b> is <i>p</i><sup>2</sup> × <i>N</i> = homozygous dominant.' },
        ],
        correct: 2,
        solution:
          '<i>q</i><sup>2</sup> = <frac><num>1</num><den>100</den></frac> = 0.01 ⇒ <i>q</i> = 0.1, <i>p</i> = 0.9. Carriers = 2<i>pq</i> = 2(0.9)(0.1) = 0.18 ⇒ 0.18 × 50000 = 9000.',
      },
      {
        t: 'mcq',
        q: 'The peppered moth turning predominantly dark in soot-darkened industrial England is an example of:',
        opts: [
          { label: 'stabilising selection', nudge: '<b>(a)</b> stabilising would favour an intermediate, not an extreme.' },
          { label: 'directional selection', nudge: null },
          {
            label: 'disruptive selection',
            nudge: '<b>(c)</b> disruptive would produce two peaks (both pale and dark favoured), not one shift.',
          },
          {
            label: 'genetic drift',
            nudge: '<b>(d)</b> drift is random and undirected, whereas this change was clearly driven by predation pressure, a selective force.',
          },
        ],
        correct: 1,
        solution: 'Selection favoured one extreme (dark forms), shifting the population’s colour distribution in a single direction.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing allele frequencies with genotype frequencies.</b> <i>p</i> + <i>q</i> = 1 is for alleles; <i>p</i><sup>2</sup> + 2<i>pq</i> + <i>q</i><sup>2</sup> = 1 is for genotypes. Label each number as you write it.',
          '<b>Forgetting to square-root.</b> When a question gives the recessive phenotype fraction, that is <i>q</i><sup>2</sup>, not <i>q</i>. Take the root first.',
          '<b>Dropping the 2 in 2<i>pq</i>.</b> The heterozygote forms two ways: the factor of 2 is not optional.',
          '<b>Treating Lamarckism as totally wrong.</b> It is right that use/disuse changes the body; it is wrong that those changes are inherited. Be precise in distinction questions.',
          '<b>Listing “random mating” as a disturbing factor.</b> Random mating is a condition for equilibrium; it is non-random mating that disturbs the genotype frequencies.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (H–W in under a minute):</b> the recessive phenotype is your entry point: it equals <i>q</i><sup>2</sup>. From one number you unlock everything: <i>q</i> = √(<i>q</i><sup>2</sup>) → <i>p</i> = 1 − <i>q</i> → carriers = 2<i>pq</i>, dominant = <i>p</i><sup>2</sup>. Then always verify the three genotype frequencies sum to 1 before committing to an option; it catches arithmetic slips instantly.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Theory timeline',
            note: 'Lamarck (1809, use/disuse, acquired characters inherited, wrong) → Darwin–Wallace (1859, natural selection) → de Vries (1901, mutation/saltation) → Modern Synthesis (1930s–40s; Huxley’s book 1942).',
          },
          {
            f: 'Weismann',
            note: 'germplasm theory; cut mouse tails for 22 generations → no tail-less offspring → buried Lamarckism.',
          },
          {
            f: 'Darwin’s two key concepts',
            note: 'branching descent + natural selection. Fitness = reproductive success (offspring number).',
          },
          {
            f: 'H–W equation',
            note: '<i>p</i> + <i>q</i> = 1 and <i>p</i><sup>2</sup> + 2<i>pq</i> + <i>q</i><sup>2</sup> = 1 → <i>AA</i> = <i>p</i><sup>2</sup>, <i>Aa</i> = 2<i>pq</i>, <i>aa</i> = <i>q</i><sup>2</sup>.',
          },
          {
            f: '5 conditions (equilibrium)',
            note: 'large population · random mating · no mutation · no gene flow · no selection.',
          },
          {
            f: '5 disturbing factors (evolution)',
            note: 'gene flow · genetic drift (founder & bottleneck) · mutation · recombination · natural selection.',
          },
          {
            f: '3 selections',
            note: 'stabilising (favours mean) · directional (favours one extreme) · disruptive (favours both extremes → two peaks).',
          },
        ],
        aids: [
          'Memory aids: “Recessive phenotype = <i>q</i><sup>2</sup> → root it first.”',
          'For the disturbing factors: “Genes Drift, Mutate, Recombine, get Selected” (Gene flow, Drift, Mutation, Recombination, Selection).',
          'For the equation, remember it is just (<i>p</i> + <i>q</i>)<sup>2</sup> written out.',
        ],
      },
    ],
  },
];
