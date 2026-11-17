import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 1 (The Living World), Topics 00 and 01: pp. 13 to 27 of
 * the Class 11 Biology Master Reference, word for word. The chapter title page
 * (p. 12) and the contents box at the top of p. 13 are not copied. Topic 00,
 * What is ‘Living’? Characteristics of Living Organisms (pp. 13–19), is the
 * chapter’s “Start here” (n '00'); Topic 01, Biodiversity & Nomenclature
 * (pp. 20–27), follows. Each is cut at the book’s Sections 1 to 8. Figure 1.1
 * (caption p. 14, drawn p. 15) and Figure 1.2 (caption p. 21, drawn p. 22) are
 * redrawn in lib/diagrams/biology-11-01.ts; these pages draw nothing else.
 * Scientific names are italic as the book’s conventions teach; emphasis italics
 * are dropped; underlining (which the markup cannot show) is not reproduced.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 00 · pp. 13–19 ─────────────────────────
  {
    n: '00',
    title: 'What is ‘Living’? Characteristics of Living Organisms',
    kalam:
      'Our job is to find the defining characteristics: the properties that every living thing shows and no non-living thing does.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the conceptual gateway to all of biology, and NEET treats it that way: expect 1–2 MCQs almost every year (the book’s estimate from past papers, not official figures) on which property is truly “defining” (the classic metabolism / growth / reproduction / consciousness trap). CBSE Boards lift 1–2 mark questions (“define metabolism,” “give four defining features of life,” the <i>Amoeba</i> growth-vs-reproduction question straight from the Exemplar), and CUET favours assertion–reason items here. High yield, pure reasoning: almost no memorisation.',
      },
      {
        t: 'p',
        html: 'Ask a child “is it alive?” and they answer instantly: a sparrow yes, a stone no. But press an adult to say exactly why, and it gets surprisingly slippery. A car moves, “drinks” fuel, responds when you brake, even “breathes” air in and exhaust out. A river flows, carves valleys, and “grows.” A salt crystal in a beaker gets visibly bigger over days. None of these is alive. So what is the real dividing line between the living and the non-living?',
      },
      {
        t: 'p',
        html: 'The chapter opens with this very question (“what is living?”) and immediately splits it in two. One half is <b>technical</b>: what physical features separate a living thing from a non-living one? The other is <b>philosophical</b>: what is the purpose of life? As scientists we deliberately set the second aside and chase only the first. Our job is to find the <b>defining characteristics</b>: the properties that every living thing shows and no non-living thing does.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine you are a bouncer at a club called “Life,” checking IDs. A property only counts as a valid ID if it lets in every living organism and turns away every non-living one. Several famous candidates apply for the job (Growth, Reproduction, Metabolism, Cellular Organisation, Consciousness) and the whole topic is really the story of which ones pass the test and which get caught with a fake ID.',
      },
      {
        t: 'p',
        html: '• <b>Growth</b> applies first. Living things grow: a kitten becomes a cat, a seedling a tree. But growth is caught faking: a mountain, a sand dune, a boulder, even a crystal all “grow” too. The catch is how. Non-living things grow by <b>accumulation on the outside</b> (more material piling on the surface: extrinsic), while living things grow <b>from within</b>, by cell division (in plants, at the growing regions) (intrinsic). Because non-living things also grow, <b>growth alone cannot be a defining property of life.</b><br>• <b>Reproduction</b> applies next: surely only living things make copies of themselves? But reproduction is also caught: a sterile worker bee, an infertile human couple, a mule (all unquestionably alive, none reproducing). So <b>reproduction cannot be an all-inclusive defining property either.</b> (Note: in single-celled organisms, reproduction and growth become the same event: the cell divides, so growing in number is reproducing.)<br>• <b>Metabolism</b> applies, and passes cleanly. Every living organism, from a single bacterium to a blue whale, runs a non-stop web of chemical reactions (building up and breaking down molecules). There is <b>no exception</b>: no non-living object does this on its own. Metabolism is a genuine defining feature.<br>• <b>Cellular organisation</b> is the structural ID: all life is built of cells, and it is this organisation of the body that ultimately defines a living thing.<br>• <b>Consciousness</b>, the ability to sense the environment and respond to it, is held up as <b>the defining property of living organisms.</b> Plants turn to light, seasonal breeders time reproduction to day-length, the simplest microbe reacts to a chemical gradient. Humans go one step further: NCERT states that we are the only organisms aware of ourselves.',
      },
      { t: 'p', html: '<b>Limiting conditions & the subtle cases:</b>' },
      {
        t: 'p',
        html: '• <b>Isolated metabolic reactions in a test tube do NOT make the flask “living.”</b> You can extract enzymes and run a metabolic reaction in a cell-free flask: it is a living reaction, but the flask is <b>not a living thing</b>. This is why metabolism must be coupled with <b>cellular organisation</b> to define life.<br>• “Defining” is strict: a property fails the moment a single living thing lacks it (reproduction) <b>or</b> a single non-living thing has it (growth).<br>• The philosophical edge (a patient in a coma, kept “running” by machines) shows why a tidy one-line definition of life is genuinely hard, and why biologists settle on a bundle of properties rather than one.',
      },
      { t: 'fig', id: 'b11-01-fig-1.1' },

      { t: 'part', title: 'Key terms, definitions and classifications' },
      {
        t: 'def',
        term: 'Living (technical sense)',
        html: 'a self-replicating, evolving, self-regulating, interactive system capable of responding to external stimuli.',
      },
      {
        t: 'def',
        term: 'Growth',
        html: 'an increase in <b>mass</b> and in the <b>number of cells/individuals</b>. In living things it is intrinsic (from within, by cell division); twofold (mass + number).',
      },
      {
        t: 'def',
        term: 'Extrinsic growth (accretion)',
        html: 'increase in size by deposition of material on the <b>outer surface</b>, as in non-living objects (mountains, boulders, crystals). Not a property of life.',
      },
      {
        t: 'def',
        term: 'Reproduction',
        html: 'the production of progeny possessing features more or less similar to the parents. Asexual (budding: yeast, <i>Hydra</i>; fragmentation; spore formation in fungi) or sexual. In unicellular organisms, <b>reproduction is synonymous with growth</b> (increase in number = cell division).',
      },
      {
        t: 'def',
        term: 'Metabolism',
        html: 'the <b>sum total of all chemical reactions</b> occurring in a living body, comprising <b>anabolism</b> (building up) and <b>catabolism</b> (breaking down). The molecules involved are <b>metabolites</b>. A defining feature of all living organisms, without exception.',
      },
      {
        t: 'def',
        term: 'Metabolite',
        html: 'any chemical involved in or produced by metabolic reactions.',
      },
      {
        t: 'def',
        term: 'Cellular organisation',
        html: 'the structuring of the body out of cells; the basic organisational feature that, together with metabolism, defines life.',
      },
      {
        t: 'def',
        term: 'Consciousness (in the biological sense)',
        html: 'the ability of an organism to <b>sense its surroundings and respond to environmental stimuli</b> (physical: light, temperature, water; chemical; biological: other organisms). Stated as <b>the defining property of living organisms</b>.',
      },
      {
        t: 'def',
        term: 'Self-consciousness / self-awareness',
        html: 'awareness of one’s own self; in this strict sense, <b>human beings are the only self-conscious organisms.</b> (NCERT’s statement; some other animals show limited self-recognition)',
      },
      {
        t: 'def',
        term: 'Stimulus',
        html: 'any change in the environment to which an organism responds (e.g., photoperiod, pollutants, predators).',
      },
      {
        t: 'def',
        term: 'Emergent properties',
        html: 'new properties that appear at a higher level of organisation due to <b>interactions</b> among lower-level components, not present in the components alone.',
      },
      {
        t: 'p',
        html: 'The defining bundle (memory hook): <b>life = Metabolism + Cellular organisation + Consciousness.</b> Growth and reproduction are characteristics of living things but are <b>not</b> by themselves defining.',
      },
      {
        t: 'p',
        html: 'NCERT calls consciousness the defining property of living organisms, and that is the answer to give when it is offered beside growth, reproduction or increase in mass. Metabolism and cellular organisation are also defining, which is why the book groups the three as “MCC”.',
      },

      { t: 'part', title: 'Key procedures and frameworks' },
      {
        t: 'p',
        html: '<b>Framework A: The “defining property” test (two failure modes)</b>',
      },
      {
        t: 'p',
        html: 'A property qualifies as defining only if BOTH hold: every living thing has it, AND no non-living thing has it. So a candidate fails in either of two ways:',
      },
      {
        t: 'proc',
        title: 'Framework A',
        steps: [
          '<b>A non-living thing also shows it</b> ⇒ disqualified. (Growth: dunes/crystals grow.)',
          '<b>A living thing lacks it</b> ⇒ disqualified. (Reproduction: mules, sterile bees, infertile couples don’t reproduce.) Run any candidate through these two gates. Metabolism, cellular organisation and consciousness survive both; growth and reproduction do not.',
        ],
      },
      {
        t: 'p',
        html: '<b>Framework B: Intrinsic vs extrinsic growth (telling living growth from non-living growth)</b>',
      },
      { t: 'p', html: 'Ask: where is new material added?' },
      {
        t: 'p',
        html: '• <b>From inside, by cell division</b> → intrinsic → characteristic of living things. A tree adds cells at its growing regions (meristems), including in its girth; a child’s bones lengthen from within.<br>• <b>On the outer surface, by accumulation/deposition</b> → extrinsic (accretion) → non-living. A mountain rises by sediment piling on top; a crystal enlarges as ions deposit on its faces. Same outward result (“it got bigger”), opposite mechanism, and only the intrinsic kind is part of life.',
      },
      {
        t: 'proc',
        title: 'Framework C: Why metabolism needs cellular organisation (the test-tube argument)',
        steps: [
          'Metabolism is universal to life: good start for a definition.',
          'But you can isolate enzymes and run a metabolic reaction outside any cell, in a flask. The reaction proceeds.',
          'That flask is <b>not alive</b>, yet a real metabolic reaction is happening in it.',
          'Therefore metabolism occurring in a cell-free system is a “living reaction”, but the flask is <b>not a living thing</b>.',
          '<b>Conclusion:</b> metabolism alone is insufficient; it must occur within the <b>cellular organisation</b> of a body for the system to be called living.',
        ],
      },
      { t: 'p', html: '<b>Framework D: Reading “consciousness” correctly</b>' },
      {
        t: 'p',
        html: 'Biological “consciousness” here means <b>responsiveness to stimuli</b>, not human-style thought. Every organism (plant, microbe, animal) senses and reacts to physical, chemical and biological cues (light, water, temperature, other organisms, pollutants). This universal responsiveness is why consciousness is offered as the defining property. <b>Self-consciousness</b> (knowing that you exist) is the narrower, human-only extension: don’t conflate the two.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: 'Define metabolism. State one reason why metabolism is considered a defining feature of living organisms.',
        steps: [
          'Metabolism is the sum total of all the chemical reactions occurring in the body of an organism, including building-up (anabolic) and breaking-down (catabolic) reactions; the chemicals involved are called metabolites. It is regarded as a defining feature because <b>all living organisms, without a single exception, exhibit metabolism, and no non-living object carries out metabolism on its own.</b>',
          'Clean two-mark answer: a precise definition, then the “no exception / universal” justification.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE HOTS / Assertion–Reason',
        q: 'Assertion (A): Growth cannot be taken as a defining property of living organisms. Reason (R): Non-living objects such as mountains and crystals also increase in size. Choose: (1) Both true, R explains A. (2) Both true, R not the explanation. (3) A true, R false. (4) A false, R true.',
        steps: [
          'A is true: growth fails as a defining property. R is true: non-living things do enlarge. And R is exactly why A holds: because non-living objects also grow (by external accumulation), growth cannot distinguish living from non-living, so it cannot be defining.',
          'The trap is choosing (2): students accept both statements but miss that the non-living-also-grows fact is the precise mechanism of A.',
        ],
        ans: '(1).',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: 'A unicellular alga divides to form two daughter cells. With reference to this single event, which statement is most accurate? (1) It represents growth only. (2) It represents reproduction only. (3) Growth and reproduction are synonymous here. (4) Neither growth nor reproduction.',
        steps: [
          'In a unicellular organism, a single cell division simultaneously <b>increases the number of individuals (reproduction)</b> and constitutes the organism’s mode of <b>increasing in number (growth)</b>; the two are the same event.',
          'The speed-trap is (1) or (2): students force the event into one box, forgetting the NCERT point that in single-celled forms growth and reproduction are synonymous.',
        ],
        ans: '(3).',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty / statement analysis',
        q: 'Count how many of the following statements are correct: (A) Isolated metabolic reactions carried out in a cell-free test tube are living things. (B) A mule is alive even though it cannot reproduce. (C) Consciousness is regarded as the defining property of living organisms. (D) Human beings are the only organisms aware of themselves.',
        steps: [
          '(A) <b>False</b>: such reactions are “living reactions,” but the test-tube flask is <b>not a living thing</b>; metabolism needs cellular organisation to count as life.',
          '(B) <b>True</b>: reproduction is not all-defining; the mule lives and metabolises, it simply does not reproduce.',
          '(C) <b>True</b>: responsiveness to stimuli (biological consciousness) is offered as the defining property.',
          '(D) <b>True</b>: self-consciousness is, in this strict sense, unique to humans.',
          'Three statements (B, C, D) are correct.',
          'The single false one (A) is a classic misconception.',
        ],
        ans: 'three.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] “All living organisms grow, but not everything that grows is living.” Justify this statement with one example each of living and non-living growth.',
            a: 'Living growth is intrinsic (from within, by cell division, e.g., a sapling growing into a tree); non-living “growth” is extrinsic accumulation on the surface (e.g., a mountain or crystal enlarging), so growth is not a defining property of life.',
          },
          {
            q: '[CBSE A–R] <b>Assertion:</b> Reproduction is not an all-inclusive defining feature of living organisms. <b>Reason:</b> Sterile worker bees and mules are living but do not reproduce. Choose: <b>(1)</b> Both true, R explains A. <b>(2)</b> Both true, R not the explanation. <b>(3)</b> A true, R false. <b>(4)</b> A false, R true.',
            a: '(1). Both A and R are true, and R is the correct explanation of A.',
          },
          {
            q: '[NEET] Which one of the following is regarded as the defining property of living organisms? (1) Growth (2) Reproduction (3) Consciousness (4) Increase in mass',
            a: 'Option (3) Consciousness.',
          },
          {
            q: '[NEET] In a cell-free system, an enzyme catalyses a metabolic reaction in a test tube. This is best described as: <b>(1)</b> a living organism <b>(2)</b> living things <b>(3)</b> living reactions, but not living things <b>(4)</b> non-living reactions',
            a: 'Option (3): there are no cells, so it is not a living thing, but the reactions are real metabolism.',
          },
          {
            q: '[NEET high-difficulty] Distinguish between intrinsic and extrinsic growth, and explain why only one of them is associated with living organisms. State whether a unicellular organism’s increase in number is best called growth, reproduction, or both.',
            a: 'Intrinsic growth = increase from within by cell division (living); extrinsic growth = accretion on the outer surface (non-living, e.g., dunes/crystals). Only intrinsic growth is tied to life because it reflects internal cellular activity. In a unicellular organism the increase in number is <b>both</b> growth and reproduction (the two are synonymous).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which property is shown by both living and non-living things, and therefore cannot define life?',
        opts: [
          {
            label: 'Metabolism',
            nudge: '<b>(1), (2), (4)</b> are exclusive to living systems and so are (part of) the defining bundle.',
          },
          {
            label: 'Cellular organisation',
            nudge: '<b>(1), (2), (4)</b> are exclusive to living systems and so are (part of) the defining bundle.',
          },
          { label: 'Growth', nudge: null },
          {
            label: 'Consciousness',
            nudge: '<b>(1), (2), (4)</b> are exclusive to living systems and so are (part of) the defining bundle.',
          },
        ],
        correct: 2,
        solution:
          'Growth occurs in non-living objects too (by external accumulation), so it fails as a defining property. Students who recall only “living things grow” without the dune/crystal counterexample pick wrongly.',
      },
      {
        t: 'mcq',
        q: 'The sum total of all chemical reactions occurring in the body of an organism is called:',
        opts: [
          {
            label: 'Catabolism',
            nudge: '<b>(1)</b> catabolism (break-down) and <b>(2)</b> anabolism (build-up) are only the two halves of metabolism: classic part-for-whole distractors.',
          },
          {
            label: 'Anabolism',
            nudge: '<b>(1)</b> catabolism (break-down) and <b>(2)</b> anabolism (build-up) are only the two halves of metabolism: classic part-for-whole distractors.',
          },
          { label: 'Metabolism', nudge: null },
          {
            label: 'Photosynthesis',
            nudge: '<b>(4)</b> photosynthesis is one specific anabolic pathway, far too narrow.',
          },
        ],
        correct: 2,
        solution: 'Metabolism is the whole set of reactions.',
      },
      {
        t: 'mcq',
        q: 'Which statement about reproduction is correct?',
        opts: [
          {
            label: 'Every living organism reproduces.',
            nudge: '<b>(1)</b> is false: mules, sterile bees and infertile couples do not reproduce.',
          },
          { label: 'In unicellular organisms, reproduction and growth are synonymous.', nudge: null },
          {
            label: 'Reproduction is the sole defining feature of life.',
            nudge: '<b>(3)</b> is false: reproduction is not even all-inclusive, let alone the sole definer.',
          },
          {
            label: 'Non-living things reproduce by accretion.',
            nudge: '<b>(4)</b> confuses accretion (a growth-like non-living process) with reproduction.',
          },
        ],
        correct: 1,
        solution: 'In single-celled organisms, dividing to increase number is both growth and reproduction.',
      },
      {
        t: 'mcq',
        q: '“Living organisms are self-replicating, evolving, self-regulating interactive systems capable of responding to external stimuli.” The phrase “responding to external stimuli” corresponds to which property?',
        opts: [
          {
            label: 'Metabolism',
            nudge: '<b>(1)</b> metabolism is the internal chemistry, not the response to environment.',
          },
          { label: 'Consciousness', nudge: null },
          {
            label: 'Reproduction',
            nudge: '<b>(3)</b> and <b>(4)</b> are unrelated to stimulus-response.',
          },
          {
            label: 'Growth',
            nudge: '<b>(3)</b> and <b>(4)</b> are unrelated to stimulus-response.',
          },
        ],
        correct: 1,
        solution:
          'Responsiveness to environmental stimuli is precisely biological consciousness, the defining property. The option set rewards students who can map the textbook definition onto the right property name.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Calling growth a defining feature.</b> It is not: non-living dunes and crystals “grow” by external accumulation. Growth fails the test.',
          '<b>Calling reproduction all-defining.</b> Mules, sterile worker bees and infertile couples are alive yet don’t reproduce, so reproduction is not all-inclusive.',
          '<b>Calling a test-tube flask a living thing.</b> The reaction is a living reaction, but the flask is <b>not a living thing</b>: metabolism needs cellular organisation.',
          '<b>Confusing consciousness with self-consciousness.</b> Biological consciousness = responsiveness to stimuli (all organisms). Self-consciousness (awareness of one’s own self) = humans only.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> On any “which is the defining property?” MCQ, run the two-gate test in your head: does any non-living thing have it? and does any living thing lack it? Growth and reproduction get eliminated instantly, leaving metabolism / cellular organisation / consciousness. You rarely need to read the options twice.',
      },
      {
        t: 'protip',
        html: '<b>Memory aid:</b> defining bundle = <b>“MCC”</b>: <b>M</b>etabolism, <b>C</b>ellular organisation, <b>C</b>onsciousness. Growth & reproduction are guests, not members.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Defining bundle = Metabolism + Cellular organisation + Consciousness (“MCC”).</b> Growth and reproduction are characteristics but <b>NOT</b> defining.',
            note: '',
          },
          {
            f: 'Growth fails',
            note: 'non-living things also grow: extrinsic (surface accretion, e.g. dunes/crystals) vs living intrinsic (from within, by cell division). Living growth is twofold (mass + number).',
          },
          {
            f: 'Reproduction fails',
            note: 'many living things don’t reproduce (mule, sterile worker bee, infertile couple). In unicellular forms, <b>growth = reproduction</b>.',
          },
          {
            f: '<b>Metabolism</b> = sum of all chemical reactions (anabolism + catabolism); universal, no exception. Isolated in a test tube ⇒ a living reaction, but the flask is <b>not a living thing</b>.',
            note: '',
          },
          {
            f: '<b>Consciousness</b> = ability to sense and respond to stimuli ⇒ the defining property. <b>Self-consciousness</b> = humans only.',
            note: '',
          },
          {
            f: 'Holistic definition',
            note: 'living = self-replicating, evolving, self-regulating, interactive systems that respond to external stimuli.',
          },
        ],
        aids: ['“<b>MCC</b> defines, G&R decline.”'],
      },
    ],
  },

  // ───────────────────────── Topic 01 · pp. 20–27 ─────────────────────────
  {
    n: '01',
    title: 'Biodiversity & Nomenclature',
    kalam: 'Scientific names are the PIN codes of life.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial NEET favourite: expect 1–2 direct MCQs almost every year (the book’s estimate from past papers, not official figures), usually on the rules of binomial nomenclature, the ICBN/ICZN codes, or matching the terms taxonomy/systematics/classification. CBSE Boards typically lift a 1–2 mark definition or a “correct the scientific name” question, and CUET pulls assertion–reason items straight from this section. It is low-effort, high-return: pure recall with a few classic traps.',
      },
      {
        t: 'p',
        html: 'Picture a sabzi mandi on a busy morning. A vendor in Kolkata is shouting “begun!”, one in Chennai calls the very same purple vegetable “kathirikai”, a Mumbai cart labels it “vangi”, and the English board overhead reads “brinjal”, while a visiting tourist insists it is an “eggplant” or “aubergine.” Five names, one vegetable. Now imagine a botanist in Chandigarh emailing a botanist in Chicago about this plant. If she writes any of those local names, half the message is lost in translation. But the moment she writes <b><i>Solanum melongena</i></b>, every biologist on Earth knows exactly which organism she means: no ambiguity, no regional accent, no guesswork.',
      },
      {
        t: 'p',
        html: 'That is the entire motivation behind <b>scientific nomenclature</b>: local (vernacular) names are warm and familiar, but they change from district to district and language to language, so they are useless for precise, worldwide communication. Science needs one name per organism, recognised universally, like how a railway station has a unique code (NDLS is New Delhi to a clerk in Kerala and one in Kashmir alike) or how a PIN code points to exactly one locality. Scientific names are the PIN codes of life.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> a scientific name is built like a formal Indian name written “surname first.” The surname tells you the family you belong to; the personal name distinguishes you within that family. In <i>Panthera leo</i> (lion) and <i>Panthera tigris</i> (tiger), “<i>Panthera</i>” is the shared genus (the big-cat “surname”) while “<i>leo</i>” and “<i>tigris</i>” are the individual identities. Two organisms sharing the first word are close relatives; the second word splits them apart. This two-word system is called <b>binomial nomenclature</b> (bi- = two, nomen = name), and we owe it to <b>Carolus Linnaeus</b>, the Father of Taxonomy.',
      },
      {
        t: 'p',
        html: 'Now, the “<b>biodiversity</b>” half of this topic. When we say India is biodiversity-rich, we are not just counting plants and animals; we mean the sheer variety and variability among all living organisms: plants, animals, and microbes, across genes, species, and whole ecosystems, in a region under natural conditions. Of the roughly <b>1.7–1.8 million</b> species described so far, a huge share live in tropical, megadiverse countries like ours. The very existence of so much variety is what makes a system of naming and classifying unavoidable: you cannot study a library of millions of “books” without a cataloguing scheme.',
      },
      { t: 'p', html: '<b>Limiting conditions & where the intuition breaks:</b>' },
      {
        t: 'p',
        html: '• Biodiversity is about variety, <b>not raw count</b>. Twenty plant species plus twenty animal species in one habitat is biodiversity, but a single field of one crop, however vast, is low diversity. Don’t equate “lots of organisms” with “high biodiversity.”<br>• A scientific name is <b>not</b> a description of the organism: it is a label. “<i>melongena</i>” does not mean “purple” or “edible”; it is simply the agreed tag.<br>• Binomial nomenclature names the <b>species</b>, not an individual organism and not a breed. “Alsatian” or “Labrador” are breeds of <i>Canis familiaris</i> (now often written <i>Canis lupus familiaris</i>), not separate scientific names.<br>• The system assumes a species is a discrete, reproductively coherent unit. For organisms that reproduce only asexually, or for hybrids, the neat “interbreed-and-produce-fertile-offspring” definition gets fuzzy: a caveat we will return to.',
      },
      { t: 'fig', id: 'b11-01-fig-1.2' },

      { t: 'part', title: 'Key terms, definitions and classifications' },
      {
        t: 'p',
        html: 'Biology has no formulas here: the “equations” of this topic are precise definitions. Memorise these exactly; NEET distractors are built by swapping one word.',
      },
      {
        t: 'def',
        term: 'Biodiversity',
        html: 'the variety and variability among all living organisms (plants, animals, microorganisms) in a given region under natural conditions; often stated as the totality of genes, species and ecosystems of a region.',
      },
      {
        t: 'def',
        term: 'Nomenclature',
        html: 'the process of assigning standardised scientific names to organisms so that the same organism is known by the same name across the world. Naming is only meaningful after correct identification.',
      },
      {
        t: 'def',
        term: 'Identification',
        html: 'determining that a given organism corresponds to (is the same as) an already-known, correctly described organism.',
      },
      {
        t: 'def',
        term: 'Classification',
        html: 'arranging organisms into convenient categories (groups) on the basis of easily observable, shared characters.',
      },
      {
        t: 'def',
        term: 'Taxonomy',
        html: 'the science dealing with <b>characterisation, identification, nomenclature and classification</b> of organisms. (Memory hook: a taxonomist does all four jobs.)',
      },
      {
        t: 'def',
        term: 'Systematics',
        html: 'the study of the <b>diversity of organisms and their evolutionary relationships</b>. The word derives from the Latin systema; Linnaeus’s foundational work was titled Systema Naturae. Systematics is the broadest term: it includes taxonomy plus the idea of relationships.',
      },
      {
        t: 'def',
        term: 'Taxon (plural: taxa)',
        html: 'a taxonomic group or unit of any rank (e.g. the genus <i>Panthera</i> is a taxon; so is the species <i>Panthera leo</i>; so is the class Mammalia).',
      },
      {
        t: 'def',
        term: 'Binomial nomenclature',
        html: 'the naming system in which each species’ scientific name has <b>two components</b>: the <b>generic name (genus)</b> followed by the <b>specific epithet</b>. Proposed by <b>Carolus Linnaeus</b>.',
      },
      {
        t: 'def',
        term: 'Generic name',
        html: 'the first word; denotes the genus (a group of closely related species sharing a common ancestor and certain common characters).',
      },
      {
        t: 'def',
        term: 'Specific epithet',
        html: 'the second word; identifies the particular species within that genus. The species name is the whole binomial; the specific epithet alone is not a species name.',
      },
      {
        t: 'def',
        term: 'Tautonym',
        html: 'a scientific name in which the generic name and the specific epithet are identical (e.g. <i>Rattus rattus</i>). Permitted in zoological naming. It is not permitted in botanical naming.',
      },
      {
        t: 'def',
        term: 'Species (biological species concept)',
        html: 'a group of organisms capable of <b>interbreeding freely in nature and producing fertile offspring</b>, sharing a common gene pool. This concept is associated with <b>Ernst Mayr</b>.',
      },
      {
        t: 'p',
        html: '<b>The naming codes</b> (no SI units in biology: these are the “standards bodies” instead):',
      },
      {
        t: 'def',
        term: 'ICBN',
        html: 'International Code of Botanical Nomenclature; governs naming of plants (and also algae and fungi). Independent of the zoological and bacteriological codes; its foundations trace to Linnaeus’s Philosophia Botanica. (Now formally updated to the ICN, International Code of Nomenclature for algae, fungi and plants, but NEET/NCERT still examines it as ICBN.)',
      },
      {
        t: 'def',
        term: 'ICZN',
        html: 'International Code of Zoological Nomenclature; governs naming of animals.',
      },
      { t: 'def', term: 'ICNB', html: 'the corresponding code for bacteria (now the ICNP).' },
      {
        t: 'p',
        html: '<b>Systems of classification</b> (good to recognise for NEET match-the-column items):',
      },
      {
        t: 'def',
        term: 'Artificial system',
        html: 'groups organisms using one or a few easily-seen characters (e.g. floral/morphological traits). Linnaeus’s classification was artificial.',
      },
      {
        t: 'def',
        term: 'Natural system',
        html: 'based on natural affinities using many characters; brings out genuine similarities and dissimilarities.',
      },
      {
        t: 'def',
        term: 'Phylogenetic system',
        html: 'groups organisms according to their <b>evolutionary trends and genetic relationships</b>.',
      },
      {
        t: 'def',
        term: 'Karyotaxonomy',
        html: 'classification based on chromosome number/structure. <b>Chemotaxonomy</b>: based on phytochemical/chemical data.',
      },

      { t: 'part', title: 'Key procedures and frameworks' },
      {
        t: 'p',
        html: 'Biology rarely has derivations, so this section gives you the rule-frameworks and the logical “why” behind each: the parts examiners turn into traps.',
      },
      {
        t: 'proc',
        title: 'Framework A: How to write a scientific name correctly (the 5 conventions)',
        steps: [
          '<b>Two words, in Latin (or latinised).</b> Why Latin? It is a “dead” language, no longer evolving in everyday speech, so the names will not drift in meaning the way living languages do. Stability is the whole point.',
          '<b>Genus first (capitalised), species second (lowercase).</b> <i>Mangifera indica</i>, never <i>mangifera Indica</i>. The capital flags the broader group; the small letter flags the specific member. This single rule is one of the most-tested points in the topic.',
          '<b>Both words italicised in print.</b> Italics signal “this is a scientific name, treat it as a unit.”',
          '<b>When handwritten or typed without italics, underline the two words separately.</b> Underlining is the manuscript stand-in for italics. Separate underlines because they are two distinct words.',
          '<b>Author citation comes after the specific epithet, in Roman (un-italicised), and is optional.</b> In <i>Mangifera indica</i> Linn., “Linn.” (now abbreviated L.) abbreviates Linnaeus, the scientist who first validly described and named the species. It is written in normal upright type precisely so it is not mistaken for part of the name.',
        ],
      },
      {
        t: 'p',
        html: '<b>Worked logic of a name:</b> in <b><i>Mangifera indica</i> Linn.</b>, <i>Mangifera</i> = generic name (which is why it is capitalised + italic), <i>indica</i> = specific epithet (lowercase + italic), Linn. = author (Roman, optional).',
      },
      {
        t: 'p',
        html: '<b>Framework B: Sorting out identification, nomenclature, classification, taxonomy and systematics (the relationship logic)</b>',
      },
      {
        t: 'p',
        html: 'Students mix up identification, nomenclature, classification, taxonomy and systematics. Hold them in a logical sequence:',
      },
      {
        t: 'proc',
        title: 'Framework B',
        steps: [
          'First you <b>identify</b> an organism (is it the same as something already known?).',
          'Then you give it a standardised <b>nomenclature</b> (a scientific name).',
          'You <b>classify</b> it (place it in groups).',
          '<b>Taxonomy</b> is the umbrella for all of the above: characterisation + identification + nomenclature + classification.',
          '<b>Systematics</b> is broader still: taxonomy plus the study of how organisms are related (evolution).',
        ],
      },
      {
        t: 'p',
        html: 'So the nesting is: identification, nomenclature, classification → all sit inside <b>taxonomy</b> → which sits inside <b>systematics</b>.',
      },
      {
        t: 'p',
        html: '<b>Framework C: Is it a valid species? (the biological-species test)</b>',
      },
      {
        t: 'p',
        html: 'Ask two questions: (i) Can the organisms <b>interbreed freely in nature</b>? (ii) Is the resulting offspring <b>fertile</b>? Both must be “yes.” This is why a male donkey × female horse cross gives a mule: they interbreed, but the offspring is sterile, so horse and donkey remain separate species. Mere physical resemblance, or even a high percentage of shared genes, is <b>not</b> sufficient.',
      },
      {
        t: 'p',
        html: '<b>Framework D: Reading the taxonomic hierarchy (introduction only)</b>',
      },
      {
        t: 'p',
        html: 'Taxonomic categories are arranged in a definite sequence in <b>descending order</b>: broad groups at the top narrowing to the most specific at the bottom. For now, fix two anchors: <b>species</b> is the basic (lowest) unit, and <b>genus</b> is a group of closely related species. The full ladder (Kingdom → Phylum/Division → Class → Order → Family → Genus → Species), with its naming suffixes, is developed in the next topic.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: 'A student writes the scientific name of the domestic cat as “<i>felis Catus</i>”. Identify the errors and rewrite the name in fully correct form, both as it would appear in print and as it should be written by hand in an exam.',
        steps: [
          'Work through the five conventions:<br>• The <b>genus</b> must be capitalised → “felis” is wrong; it should be <i>Felis</i>.<br>• The <b>specific epithet</b> must be lowercase → “Catus” is wrong; it should be <i>catus</i>.<br>• In print, both words must be <b>italicised</b>.',
          'Correct printed form: <b><i>Felis catus</i></b>. Handwritten form (no italics available): Felis catus, the two words underlined separately.',
          'This is a clean two-mark answer: state the rule violated, then present the corrected name. Always finish by writing the name in the form the question asks for.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE HOTS / Assertion–Reason',
        q: 'Assertion (A): The scientific name <i>Mangifera indica</i> Linn. has three written components, yet it is still called binomial nomenclature. Reason (R): The author’s name is not counted as part of the two-word species name; it is an optional citation. Choose: (1) Both A and R true, R is the correct explanation of A. (2) Both true, R not the explanation. (3) A true, R false. (4) A false, R true.',
        steps: [
          'A is true: the printed entry does carry three written items (<i>Mangifera</i>, <i>indica</i>, Linn.). R is also true: “binomial” counts only the <b>generic name + specific epithet</b>; the author citation (Linn., in Roman) is an optional add-on that names who first described the species and is not part of the binomial. And R is precisely why A holds: three written items, still two names.',
        ],
        ans: '(1).',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: 'Three organisms are listed: <i>Brassica oleracea</i> var. <i>capitata</i> (cabbage), <i>Brassica oleracea</i> var. <i>botrytis</i> (cauliflower), and <i>Brassica nigra</i> (black mustard). On the basis of binomial nomenclature alone, which statement is correct? (1) All three belong to the same species. (2) Cabbage and cauliflower share the same species; black mustard shares only the genus. (3) All three belong to different genera. (4) Black mustard and cabbage share the same species.',
        steps: [
          'Compare the names word by word: the trick is to read the first two words only:<br>• Cabbage and cauliflower are both <i>Brassica oleracea</i> (the trailing “var.” just marks varieties of the <b>same</b> species). Same genus, same species.<br>• Black mustard is <i>Brassica nigra</i>: same genus <i>Brassica</i>, but a <b>different</b> specific epithet (<i>nigra</i> vs <i>oleracea</i>), hence a different species.',
          'So cabbage and cauliflower share genus and species; mustard shares only the genus.',
          'The speed-trap is option (1): students see “<i>Brassica</i>” three times and rush to “all same species”, but it is the second word that fixes the species.',
        ],
        ans: '(2).',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty / statement analysis',
        q: 'Study the four statements and select how many are correct: (A) Systematics is a narrower term than taxonomy. (B) The biological species concept defines a species by the ability to interbreed and produce fertile offspring, and is associated with Ernst Mayr. (C) ICBN deals with the naming of animals; ICZN with plants. (D) A tautonym such as <i>Rattus rattus</i> is invalid because the two words must always differ.',
        steps: [
          'Test each:',
          '(A) <b>False</b>: systematics is broader than taxonomy (it adds evolutionary relationships); the order is reversed.',
          '(B) <b>True</b>: interbreeding + fertile offspring; Mayr.',
          '(C) <b>False</b>: swapped. <b>ICBN → plants (botanical), ICZN → animals (zoological).</b> This swap is a classic NEET trap.',
          '(D) <b>False</b>: tautonyms are perfectly valid in zoological nomenclature; <i>Rattus rattus</i> is a legitimate binomial.',
          'Only <b>one</b> statement (B) is correct.',
          'The difficulty here is that three of the four traps each rest on a single reversed word: the exam rewards students who read every word rather than the gist.',
        ],
        ans: 'one.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define biodiversity. Why are vernacular (local) names unsuitable for scientific communication?',
            a: 'Biodiversity = the variety and variability of all living organisms (genes, species, ecosystems) of a region under natural conditions; local names vary by region/language and are not universal, so they cannot ensure that everyone worldwide refers to the same organism.',
          },
          {
            q: '[CBSE A–R] <b>Assertion:</b> In a handwritten scientific name, the genus and species are underlined separately. <b>Reason:</b> They are two distinct words, and underlining is the manuscript equivalent of italics. Choose: <b>(1)</b> Both true, R explains A. <b>(2)</b> Both true, R not the explanation. <b>(3)</b> A true, R false. <b>(4)</b> A false, R true.',
            a: '(1). Both are true and R explains A.',
          },
          {
            q: '[NEET] Which one is written against the rules of binomial nomenclature? (1) Genus name capitalised, specific epithet in lowercase (2) Both words italicised in print (3) Author’s name italicised and placed before the genus (4) Names latinised',
            a: 'Option (3): the author citation must be in Roman and placed after the specific epithet, never italicised or placed first.',
          },
          {
            q: '[NEET] Arrange in order of increasing breadth of scope: identification, systematics, taxonomy.',
            a: 'identification < taxonomy < systematics.',
          },
          {
            q: '[NEET high-difficulty] A breeder mates a male donkey with a female horse and obtains a healthy but sterile mule. Using the biological species concept, justify why the horse and donkey are still classified as two distinct species, and state the one criterion that fails.',
            a: 'They interbreed but the offspring (mule) is <b>sterile</b>; the biological-species test requires offspring to be fertile, so the “fertile offspring” criterion fails, hence two separate species.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Binomial nomenclature consists of which two components, in order?',
        opts: [
          {
            label: 'Specific epithet, then generic name',
            nudge: '<b>(1)</b> reverses the order: a careless-reading trap.',
          },
          { label: 'Generic name, then specific epithet', nudge: null },
          {
            label: 'Family name, then generic name',
            nudge: '<b>(3)</b> confuses a higher category (family) with the name’s components.',
          },
          {
            label: 'Generic name, then author’s name',
            nudge: '<b>(4)</b> mistakes the optional author citation for the second name; the author is an add-on, not part of the binomial.',
          },
        ],
        correct: 1,
        solution: 'A binomial is genus first, species (specific epithet) second.',
      },
      {
        t: 'mcq',
        q: 'Which of the following is contrary to the universal rules of nomenclature?',
        opts: [
          {
            label: 'The names are written in Latin and italicised',
            nudge: '<b>(1), (2), (3)</b> are all correct rules, included to make the student second-guess.',
          },
          {
            label: 'When handwritten, each word is underlined separately',
            nudge: '<b>(1), (2), (3)</b> are all correct rules, included to make the student second-guess.',
          },
          {
            label: 'The first word is the genus and begins with a capital letter',
            nudge: '<b>(1), (2), (3)</b> are all correct rules, included to make the student second-guess.',
          },
          { label: 'Biological names may be written in any convenient language', nudge: null },
        ],
        correct: 3,
        solution:
          'Scientific names must be in Latin/latinised: they cannot be in “any language,” which would destroy universality. The exam relies on you spotting that (4) breaks the universality principle.',
      },
      {
        t: 'mcq',
        q: '“The study of the diversity of organisms and their evolutionary relationships” best defines:',
        opts: [
          {
            label: 'Identification',
            nudge: '<b>(1)</b> is only matching an organism to a known one.',
          },
          {
            label: 'Nomenclature',
            nudge: '<b>(2)</b> is only assigning names.',
          },
          { label: 'Systematics', nudge: null },
          {
            label: 'Classification',
            nudge: '<b>(4)</b> is only sorting into groups.',
          },
        ],
        correct: 2,
        solution:
          'The key phrase is evolutionary relationships: that signals <b>systematics</b> (the broadest term). Each distractor is a part of the whole, which is why students who skim pick one of them.',
      },
      {
        t: 'mcq',
        q: 'Two organisms can be conclusively placed in the <b>same species</b> if they:',
        opts: [
          {
            label: 'Have a very high percentage of similar genes',
            nudge: '<b>(1)</b> gene similarity is suggestive but not conclusive (many distinct species share most genes).',
          },
          {
            label: 'Look almost identical and live in the same habitat',
            nudge: '<b>(2)</b> appearance and habitat can mislead: sibling species look alike yet do not interbreed.',
          },
          { label: 'Interbreed freely in nature and produce fertile offspring', nudge: null },
          {
            label: 'Belong to the same genus',
            nudge: '<b>(4)</b> sharing a genus only makes them relatives, not the same species (lion and tiger share <i>Panthera</i> but are different species).',
          },
        ],
        correct: 2,
        solution: 'The biological species concept hinges on <b>interbreeding + fertile offspring</b>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Capitalisation slip.</b> Writing “<i>Mangifera Indica</i>” or “<i>mangifera indica</i>.” Genus = capital, species = lowercase. Always. This is a very common error and an easy mark to lose or gain.',
          '<b>Author confusion.</b> Treating “Linn.” as the second word of the binomial, or italicising it. The author citation is Roman (upright), optional, and sits after the specific epithet.',
          '<b>ICBN ↔ ICZN swap.</b> A classic NEET trap: <b>ICBN = Botanical = plants; ICZN = Zoological = animals.</b>',
          '<b>“Which term is bigger?”</b> Students invert taxonomy and systematics. Systematics is the broadest (it includes evolutionary relationships); taxonomy sits inside it.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> On any “scientific name written incorrectly” MCQ, scan in a fixed order: <b>(1)</b> two words? <b>(2)</b> genus capital, species small? <b>(3)</b> italic/underlined? <b>(4)</b> author in Roman and last? The wrong option almost always fails exactly one of these four checks, so you can eliminate options in seconds without knowing the organism at all.',
      },
      {
        t: 'protip',
        html: '<b>Memory aid for the codes:</b> <b>B</b>otanical = IC<b>B</b>N for <b>B</b>otany (plants); <b>Z</b> in IC<b>Z</b>N = <b>Z</b>oo (animals).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Biodiversity</b> = variety & variability of all life (genes + species + ecosystems) of a region under natural conditions. ~<b>1.7–1.8 million</b> species described.',
            note: '',
          },
          {
            f: '<b>Binomial nomenclature</b> (Linnaeus) = <b>Generic name (capital) + specific epithet (lowercase)</b>, both italic / separately underlined; author in Roman, optional, last. → <b><i>Panthera leo</i></b> in print; Panthera leo with each word underlined separately when handwritten.',
            note: '',
          },
          {
            f: 'Codes',
            note: '<b>ICBN</b> → <b>plants</b> (botanical), <b>ICZN</b> → <b>animals</b> (zoological), ICNB (now ICNP) → bacteria. Latin, because it is stable.',
          },
          {
            f: 'Term nesting',
            note: 'identification, nomenclature and classification ⊂ <b>taxonomy</b> ⊂ <b>systematics</b> (broadest, adds evolution).',
          },
          {
            f: 'Species (Mayr)',
            note: 'interbreed freely + <b>fertile</b> offspring. Mule = sterile ⇒ horse & donkey stay separate species.',
          },
          {
            f: '<b>Tautonym</b> = identical genus + species (<i>Rattus rattus</i>); valid in zoology.',
            note: '',
          },
        ],
        aids: [
          '“<b>G</b>enus <b>G</b>ets the <b>G</b>reat (capital) letter.”',
          '“<b>B</b> in IC<b>B</b>N = <b>B</b>otany.”',
        ],
      },
    ],
  },
];
