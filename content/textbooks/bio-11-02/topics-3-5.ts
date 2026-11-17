import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 2 (Biological Classification), Topics 03, 04 and 05: pp. 91 to 114
 * of the Class 11 Biology Master Reference, word for word. Topic 03, Kingdom Fungi:
 * Nature’s Recyclers (pp. 91–99); Topic 04, Kingdoms Plantae & Animalia: Overview
 * (pp. 100–107, which the book prints as “Sub-topic 05”); Topic 05, Viruses, Viroids,
 * Prions & Lichens: Life at the Edges (pp. 108–114, which the book prints as
 * “Sub-topic 04”): the book prints these two in the order 05, 04 and its errata says the
 * numbers are swapped; we keep page order and use the errata’s numbers. Each topic is cut
 * at the book’s Sections 1 to 8. Figure 2.5 (caption p. 92, drawn p. 93), Figure 2.6
 * (caption p. 95, drawn p. 96), Figure 2.7 (caption p. 101, drawn p. 102) and Figure 2.8
 * (caption p. 109, drawn p. 110) are redrawn in lib/diagrams/biology-11-02.ts; these
 * pages draw nothing else. Scientific names are italic as the book prints them; emphasis
 * italics are dropped. Every em dash is a colon, commas or a bracket.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 91–99 ─────────────────────────
  {
    n: '03',
    title: 'Kingdom Fungi: Nature’s Recyclers',
    kalam: 'Fungi are eukaryotic and heterotrophic: they cannot make their own food.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Fungi is a frequently asked topic of this chapter in NEET: typically 1–2 MCQs every year (the book’s estimate from past papers, not official figures), heavily concentrated on telling the four classes apart (Phycomycetes / Ascomycetes / Basidiomycetes / Deuteromycetes) and on the sexual-cycle terms (plasmogamy, karyogamy, dikaryon). Example-to-class matching (<i>Rhizopus</i>, <i>Penicillium</i>, <i>Agaricus</i>, <i>Alternaria</i>) and the endogenous-vs-exogenous spore distinction are classic favourites, and assertion–reason and match-the-column formats appear here more than almost anywhere else in the chapter. CBSE Boards favour a 2–3 mark question on class features or the reproductive cycle; CUET tests direct fact recall (example ↔ class).',
      },
      {
        t: 'p',
        html: 'After a few days of monsoon rain, the damp corner of an Indian kitchen tells the whole story of this kingdom: a slice of bread grows a black fuzz, an old achaar (pickle) develops a green-white bloom, and overnight a cluster of mushrooms pushes up through the soil in the garden. None of these is a plant, none is an animal: they are <b>fungi</b>, and they are doing what fungi do best: quietly breaking down whatever organic matter they land on.',
      },
      {
        t: 'p',
        html: 'Here’s the defining idea. Fungi are <b>eukaryotic</b> and <b>heterotrophic</b>: they cannot make their own food. But unlike an animal, a fungus doesn’t eat; it <b>absorbs</b>. It secretes enzymes onto its food, digests it externally, and soaks up the dissolved nutrients. This is why fungi are the planet’s great decomposers, and also why a fungus has to live inside or on top of its food source rather than chasing it.',
      },
      {
        t: 'p',
        html: 'The fungal body itself is unlike anything in the plant or animal world. Most fungi are built from a tangle of fine threads called <b>hyphae</b>, and the whole woven mass is the <b>mycelium</b>. Picture the white cottony network you’ve seen spreading through stale bread: that’s mycelium. Because the threads are thin and branch endlessly, the mycelium has an enormous surface area pressed against its food, perfect for an organism that feeds by absorption rather than by eating. The one famous exception to this thread-like body is <b>yeast</b>, which is unicellular; in some fungi the cells stay loosely joined in chains that look like a mycelium, called a <b>pseudomycelium</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> if a plant is a self-sufficient farmer (makes its own food by photosynthesis) and an animal is a hunter (catches and ingests food), then a fungus is the <b>recycler of the colony</b>: it doesn’t farm or hunt, it moves into the leftovers and dissolves them back into usable nutrients. That single “absorb-from-the-substrate” lifestyle explains almost every fungal feature: the spreading thread-like body (maximum surface area for absorption), the preference for warm, humid, organic-rich places, and the chitin wall that gives those delicate threads support.',
      },
      {
        t: 'p',
        html: 'Fungi make their living in several ways: <b>saprophytic</b> (on dead matter, like bread mould), <b>parasitic</b> (on living hosts, like the rusts and smuts that attack crops), and <b>symbiotic</b> (cooperative partnerships, as in lichens and mycorrhizae).',
      },
      {
        t: 'p',
        html: 'This recycler role is no small thing ecologically. Alongside decomposer bacteria, saprophytic fungi are the agents that rot fallen leaves, dead wood and animal remains, returning locked-up carbon and minerals to the soil. Strip the fungi out of a forest and the dead matter would simply pile up. So although a mouldy roti looks like spoilage to us, it is the same process that keeps every ecosystem’s nutrient cycle turning.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & traps to watch:</b><br>• <b>Fungi are NOT plants.</b> They have no chlorophyll and cannot photosynthesise: that’s exactly why the old “two-kingdom” system, which lumped them with plants, failed for them.<br>• <b>Treating “heterotroph” as “ingests”.</b> Fungi absorb digested nutrients through their walls; they don’t engulf prey the way an <i>Amoeba</i> does.<br>• Don’t confuse the unicellular <b>yeast</b> with bacteria: yeast is a eukaryotic fungus, just one that happens to be single-celled, with a true nucleus and a chitin-type wall rather than a prokaryotic body.',
      },
      { t: 'fig', id: 'b11-02-fig-2.5' },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      {
        t: 'p',
        html: 'Fungi are split into <b>four classes</b> on the basis of three things: the <b>morphology of the mycelium</b>, the <b>mode of spore formation</b>, and the <b>type of fruiting body</b>.',
      },
      {
        t: 'table',
        title: 'The four classes: a table examiners often build questions around',
        head: ['Class', 'Common name', 'Mycelium', 'Asexual spores', 'Sexual spores / structure', 'Examples'],
        rows: [
          [
            '<b>Phycomycetes</b>',
            'Algal fungi',
            'Aseptate, <b>coenocytic</b>',
            'Zoospores / aplanospores (in sporangium)',
            'Zygospore (after isogamy / anisogamy / oogamy)',
            '<i>Mucor</i>, <i>Rhizopus</i>, <i>Albugo</i>',
          ],
          [
            '<b>Ascomycetes</b>',
            '<b>Sac fungi</b>',
            'Septate, branched',
            'Conidia (exogenous, on conidiophore)',
            '<b>Ascospores</b> in an <b>ascus</b>; fruiting body = ascocarp',
            '<i>Penicillium</i>, <i>Aspergillus</i>, <i>Neurospora</i>, Yeast, <i>Claviceps</i>',
          ],
          [
            '<b>Basidiomycetes</b>',
            '<b>Club fungi</b>',
            'Septate',
            'Generally none',
            '<b>Basidiospores</b> (exogenous) on a <b>basidium</b>; fruiting body = basidiocarp',
            '<i>Agaricus</i> (mushroom), <i>Puccinia</i> (rust), <i>Ustilago</i> (smut)',
          ],
          [
            '<b>Deuteromycetes</b>',
            '<b>Fungi imperfecti</b>',
            'Septate',
            'Conidia <b>only</b>',
            'Sexual stage absent/unknown',
            '<i>Alternaria</i>, <i>Colletotrichum</i>, <i>Trichoderma</i>',
          ],
        ],
      },
      {
        t: 'p',
        html: 'A few diagnostic anchors that resolve most “identify the class” questions:<br>• <b>Aseptate (coenocytic) mycelium → Phycomycetes.</b> All other three are septate.<br>• <b>Spores inside a sac (ascus) → Ascomycetes; spores outside, on a club (basidium) → Basidiomycetes.</b> Endogenous vs exogenous is the giveaway.<br>• <b>No sexual stage at all → Deuteromycetes</b> (“imperfect” = the perfect/sexual stage is missing or not yet found). Once a sexual stage is discovered, the fungus is reclassified into Ascomycetes or Basidiomycetes.',
      },
      {
        t: 'p',
        html: 'Notice that the four common names themselves encode the diagnosis: algal fungi resemble algae (coenocytic threads), sac fungi keep spores in a sac, club fungi bear spores on a club, and imperfect fungi are “imperfect” only because their sexual stage is unseen. Learning the common names and the diagnostic anchors together is far more reliable in the exam than memorising example lists in isolation.',
      },
      {
        t: 'table',
        title: 'Nutritional grouping (all fungi are heterotrophic)',
        head: ['Mode', 'How it feeds', 'Example'],
        rows: [
          ['<b>Saprophytic</b>', 'Absorbs from dead/decaying matter', '<i>Rhizopus</i> (bread mould)'],
          ['<b>Parasitic</b>', 'Lives on a living host', '<i>Puccinia</i>, <i>Albugo</i>'],
          ['<b>Symbiotic</b>', 'Mutually beneficial partnership', 'Lichens; mycorrhizae'],
        ],
      },

      { t: 'part', title: 'Comparative characteristics and reproduction' },
      { t: 'p', html: '<b>3.1 The fungal body</b>' },
      {
        t: 'p',
        html: 'The plant body of most fungi is a network of branched, filamentous <b>hyphae</b> forming the <b>mycelium</b>. Hyphae come in two forms, and which one a fungus has is itself a classification clue:<br>• <b>Septate</b> hyphae have cross-walls dividing them into cells (Ascomycetes, Basidiomycetes, Deuteromycetes).<br>• <b>Aseptate / coenocytic</b> hyphae have no cross-walls, a continuous tube with many nuclei (Phycomycetes).',
      },
      {
        t: 'p',
        html: 'Yeast is the unicellular exception; in some fungi the cells stay loosely attached in chains forming a <b>pseudomycelium</b>. The cell wall is made largely of <b>chitin</b>.',
      },
      { t: 'p', html: '<b>3.2 Reproduction: three routes</b>' },
      {
        t: 'p',
        html: 'Fungi reproduce by three means:<br>• <b>Vegetative:</b> fragmentation, budding (e.g., yeast) and fission.<br>• <b>Asexual:</b> by spores: <b>conidia</b> (exogenous, non-motile spores cut off at the tips of conidiophores, in Ascomycetes/Deuteromycetes), <b>sporangiospores</b> (formed inside a sporangium), <b>zoospores</b> (motile, flagellated, in aquatic Phycomycetes) and <b>aplanospores</b> (non-motile). Asexual spores let a fungus multiply explosively whenever food and moisture are plentiful, which is why a single mould spore can carpet a slice of bread in a day or two.<br>• <b>Sexual:</b> by a characteristic three-step cycle (below).',
      },
      { t: 'p', html: '<b>3.3 The sexual cycle: plasmogamy → karyogamy → meiosis</b>' },
      {
        t: 'p',
        html: 'This sequence is a classic, much-tested process in this topic:<br>1. <b>Plasmogamy:</b> fusion of the <b>protoplasms</b> of two cells/gametes (the nuclei come close but do <b>not</b> yet fuse).<br>2. <b>Karyogamy:</b> fusion of the two <b>nuclei</b>.<br>3. <b>Meiosis:</b> occurs in the zygote, producing <b>haploid spores</b>.',
      },
      {
        t: 'p',
        html: 'In Ascomycetes and Basidiomycetes, karyogamy is delayed: after plasmogamy the cell carries <b>two nuclei (n + n)</b> for a while, a <b>dikaryon</b>, and this stage is the <b>dikaryophase</b>. In many Basidiomycetes the dikaryotic condition is spread through the mycelium by hook-like bridges called <b>clamp connections</b>. Basidiomycetes also lack sex organs altogether: plasmogamy is achieved instead by <b>somatogamy</b>, the fusion of two vegetative/somatic cells of different mating types. The pay-off of this whole staged cycle is that the dikaryon lets the fungus delay the genetic commitment of nuclear fusion, while meiosis at the end restores the haploid state and reshuffles genes into the spores, generating the variation that helps fungi adapt to new substrates.',
      },
      { t: 'fig', id: 'b11-02-fig-2.6' },
      { t: 'p', html: '<b>3.4 Symbiotic partnerships</b>' },
      {
        t: 'p',
        html: '• <b>Lichens</b> are a symbiotic association of an <b>alga</b> (the <b>phycobiont</b>, the food-maker) and a <b>fungus</b> (the <b>mycobiont</b>, providing shelter and absorbing water/minerals). They are extremely sensitive to pollution and are used as <b>SO<sub>2</sub> pollution indicators</b>; the dyes litmus and orcein are obtained from lichens.<br>• <b>Mycorrhizae</b> are symbiotic associations of fungi with plant roots: the fungus absorbs minerals (especially phosphorus) and water for the plant and receives sugars in return. This partnership is so widespread that the majority of land plants rely on it, and it was probably crucial in helping the first plants colonise land.',
      },
      { t: 'p', html: '<b>3.5 Why fungi matter</b>' },
      { t: 'p', html: 'Fungi are economically double-edged.' },
      {
        t: 'p',
        html: 'On the <b>beneficial</b> side: <i>Penicillium</i> gives us the antibiotic <b>penicillin</b>; <i>Saccharomyces</i> (brewer’s/baker’s yeast) is the workhorse of fermentation, raising bread dough and the batter for <b>idli</b>, and producing beer and wine: the CO<sub>2</sub> it releases is what makes dough puff up. <i>Neurospora</i> is used so heavily in genetics and biochemistry research that it has been called the “<i>Drosophila</i> of the fungal world”. Many Deuteromycetes are <b>decomposers of litter</b> that recycle nutrients and aid mineral cycling, and edible delicacies such as <b>morels and truffles</b> are prized ascomycetes.',
      },
      {
        t: 'p',
        html: 'On the <b>harmful</b> side, fungi are major plant pathogens: <b>rusts</b> caused by <i>Puccinia</i> (e.g., wheat rust) and <b>smuts</b> caused by <i>Ustilago</i> devastate cereal crops, while <i>Albugo</i> causes <b>white rust of mustard</b>. They also spoil stored food: the black mould on stale bread is <i>Rhizopus</i>, which is precisely why food keeps longer refrigerated: cold slows fungal and bacterial growth.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board · 3 marks',
        q: '<b>Clean comparison technique:</b> “Distinguish between Ascomycetes and Basidiomycetes on the basis of (i) common name, (ii) where the sexual spores are borne, and (iii) one example.”',
        steps: [
          '<b>Model answer (pair the contrasts):</b>',
          '1. <b>Common name:</b> Ascomycetes = sac fungi; Basidiomycetes = club fungi.',
          '2. <b>Sexual spores:</b> Ascomycetes bear <b>ascospores endogenously inside an ascus</b>; Basidiomycetes bear <b>basidiospores exogenously on a basidium</b>.',
          '3. <b>Example:</b> Ascomycetes: <i>Penicillium</i>; Basidiomycetes: <i>Agaricus</i> (mushroom).',
          '<b>Examiner tip:</b> the “inside an ascus vs outside on a basidium” contrast is the marks-winning line: state it explicitly.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET · MCQ',
        q: '<b>Example ↔ class recall:</b> “<i>Mucor</i>, <i>Rhizopus</i> and <i>Albugo</i> all belong to which class of fungi?” <b>(a)</b> Phycomycetes <b>(b)</b> Ascomycetes <b>(c)</b> Basidiomycetes <b>(d)</b> Deuteromycetes',
        steps: [
          'These are the standard Phycomycetes (algal fungi) examples. The quickest confirmation is the <b>aseptate, coenocytic mycelium</b> they share, a feature unique to this class among the four. A useful memory hook: <i>Mucor</i> and <i>Rhizopus</i> are the common bread/dung moulds, and <i>Albugo</i> is the white-rust parasite of mustard; grouping the three together is a recurring CUET/NEET item.',
        ],
        ans: '(a).',
      },
      {
        t: 'ex',
        tag: 'NEET · MCQ-with-reasoning',
        q: '<b>Class from a feature set:</b> “A fungus has septate mycelium, produces conidia exogenously on a conidiophore, and bears its sexual spores endogenously inside a sac. The fruiting body is an ascocarp. The fungus is a/an:” <b>(a)</b> Phycomycete <b>(b)</b> Ascomycete <b>(c)</b> Basidiomycete <b>(d)</b> Deuteromycete',
        steps: [
          '“Spores inside a sac (ascus) + ascocarp” is the Ascomycete signature. Work the clues: “septate” rules out Phycomycetes (aseptate); “has a sexual stage” rules out Deuteromycetes; “endogenous spores in a sac” rules out Basidiomycetes (whose spores are exogenous on a basidium).',
        ],
        ans: '(b).',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty · Assertion–Reason',
        q: '<b>Assertion (A):</b> Once the sexual (perfect) stage of a member of Deuteromycetes is discovered, it is removed from Deuteromycetes. <b>Reason (R):</b> Deuteromycetes is an artificial group defined only by the absence of a known sexual stage; members reproduce asexually by conidia. <b>(a)</b> Both A and R true, R is the correct explanation of A <b>(b)</b> Both A and R true, R is <b>not</b> the correct explanation of A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          'A is true (such fungi are reassigned to Ascomycetes or Basidiomycetes). R is true and it explains A: because the class is defined purely by a missing sexual stage, discovering that stage destroys the only criterion for membership, so the fungus must move out. Decide A and R separately first, then test the causal link: that is what separates (a) from (b).',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define mycelium and hyphae, and state the difference between septate and aseptate (coenocytic) hyphae.',
            a: 'Mycelium = the whole network of fungal threads; hyphae = the individual threads that make it up. Septate hyphae are divided by cross-walls into cell-like compartments (Ascomycetes, Basidiomycetes, Deuteromycetes); aseptate/coenocytic hyphae lack cross-walls and form a continuous, multinucleate tube (Phycomycetes).',
          },
          {
            q: '[CUET] Name the common name and one example for each of the four classes of fungi.',
            a: 'Phycomycetes: algal fungi, <i>Rhizopus</i>; Ascomycetes: sac fungi, <i>Penicillium</i>; Basidiomycetes: club fungi, <i>Agaricus</i>; Deuteromycetes: fungi imperfecti, <i>Alternaria</i>.',
          },
          {
            q: '[NEET] Arrange the steps of the fungal sexual cycle in order and define each: karyogamy, plasmogamy, meiosis.',
            a: '<b>Plasmogamy</b> (fusion of protoplasms, nuclei not yet fused) → <b>Karyogamy</b> (fusion of the two nuclei) → <b>Meiosis</b> (in the zygote, giving haploid spores).',
          },
          {
            q: '[NEET] What is a lichen? Name its two partners and state why lichens are used as pollution indicators.',
            a: 'A symbiotic association of an alga (phycobiont, the food-maker) and a fungus (mycobiont, providing shelter and absorbing water/minerals); they are highly sensitive to SO<sub>2</sub> and fail to grow in polluted air, so their presence or absence indicates air quality.',
          },
          {
            q: '[NEET high-difficulty] Why are Basidiomycetes said to lack sex organs, and how is plasmogamy then achieved in them?',
            a: 'They have no specialised sex organs; plasmogamy occurs instead by <b>somatogamy</b>: the fusion of two vegetative/somatic cells of different mating types, producing a dikaryon.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Fungi are heterotrophic because they:',
        opts: [
          { label: 'ingest solid food like animals', nudge: '<b>(a)</b> fungi absorb, they don’t ingest solids the way an <i>Amoeba</i> engulfs prey: a key conceptual trap.' },
          { label: 'lack chlorophyll and absorb digested nutrients', nudge: null },
          { label: 'fix atmospheric nitrogen', nudge: '<b>(c)</b> nitrogen fixation is a prokaryotic (bacterial) trait, not fungal.' },
          { label: 'photosynthesise only in darkness', nudge: '<b>(d)</b> is self-contradictory, since fungi have no chlorophyll to photosynthesise with at all.' },
        ],
        correct: 1,
        solution: 'Fungi have no chlorophyll, so they secrete enzymes onto their food, digest it externally, and absorb the dissolved products.',
      },
      {
        t: 'mcq',
        q: 'The dikaryophase (n + n) is a characteristic feature of:',
        opts: [
          { label: 'Phycomycetes only', nudge: '<b>(a)</b> Phycomycetes undergo prompt nuclear fusion, with no lingering dikaryon.' },
          { label: 'Deuteromycetes only', nudge: '<b>(b)</b> Deuteromycetes have no known sexual stage at all, so no dikaryophase.' },
          { label: 'Ascomycetes and Basidiomycetes', nudge: null },
          { label: 'all four classes', nudge: '<b>(d)</b> overgeneralises to all four: a very common error that ignores the “delayed karyogamy” basis.' },
        ],
        correct: 2,
        solution: 'In these two classes karyogamy is delayed after plasmogamy, so the cell carries two unfused nuclei for a stage.',
      },
      {
        t: 'mcq',
        q: 'Which class is correctly matched with its example and a key feature?',
        opts: [
          { label: 'Phycomycetes, <i>Agaricus</i>, basidiocarp', nudge: '<b>(a)</b> <i>Agaricus</i> is a basidiomycete.' },
          { label: 'Ascomycetes, <i>Penicillium</i>, ascospores in an ascus', nudge: null },
          { label: 'Basidiomycetes, <i>Rhizopus</i>, coenocytic', nudge: '<b>(c)</b> <i>Rhizopus</i> is a coenocytic phycomycete, not a basidiomycete.' },
          { label: 'Deuteromycetes, <i>Mucor</i>, basidium', nudge: '<b>(d)</b> <i>Mucor</i> is a phycomycete, and “basidium” is a basidiomycete structure.' },
        ],
        correct: 1,
        solution: '<i>Penicillium</i> is an ascomycete that forms ascospores inside an ascus. Each mixes a right name with the wrong group.',
      },
      {
        t: 'mcq',
        q: 'In the sexual cycle of fungi, the fusion of two protoplasms without immediate nuclear fusion is called:',
        opts: [
          { label: 'Karyogamy', nudge: '<b>(a)</b> karyogamy is the <b>nuclear</b> fusion that follows: the single most common swap in this whole topic.' },
          { label: 'Plasmogamy', nudge: null },
          { label: 'Meiosis', nudge: '<b>(c)</b> meiosis comes last, in the zygote, producing haploid spores.' },
          { label: 'Syngamy', nudge: '<b>(d)</b> syngamy implies complete, immediate gamete fusion, which is exactly what the staged fungal process avoids.' },
        ],
        correct: 1,
        solution: 'Plasmogamy = protoplasmic fusion; the two nuclei come close but stay separate, giving the dikaryon. Reading “without immediate nuclear fusion” is the clue that rules out both karyogamy and syngamy.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Swapping plasmogamy and karyogamy.</b> Plasmo = protoplasm fusion (first); Karyo = karyon = nucleus fusion (second). Anchor each to its root word.',
          '<b>Thinking the dikaryon occurs in all fungi.</b> It’s specific to <b>Ascomycetes and Basidiomycetes</b> (delayed karyogamy).',
          '<b>Endogenous vs exogenous sexual spores.</b> Ascomycetes = ascospores <b>inside</b> an ascus (endogenous); Basidiomycetes = basidiospores <b>outside</b> on a basidium (exogenous).',
          '<b>Treating Deuteromycetes as a “natural” class.</b> It’s an artificial holding group for fungi whose sexual stage is unknown: members leave once it’s found.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For “identify the class” MCQs, ask two questions in order: <b>(1) Is the mycelium septate?</b> (No → Phycomycetes). <b>(2) Where are the sexual spores: in a sac, on a club, or absent?</b> (Sac → Ascomycetes; club → Basidiomycetes; absent → Deuteromycetes). Those two questions classify almost any fungus in seconds, and they work even when the example name is unfamiliar.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Defining traits', note: 'eukaryotic, <b>heterotrophic</b> (absorptive), chitin wall; body = <b>mycelium</b> of <b>hyphae</b> (yeast is the unicellular exception).' },
          { f: 'Nutrition', note: 'saprophytic / parasitic / symbiotic.' },
          { f: 'Classification basis', note: 'mycelium morphology + spore-formation mode + fruiting body → four classes.' },
          { f: '<b>Phycomycetes</b> (algal fungi)', note: 'aseptate coenocytic; zoospores/aplanospores; <i>Mucor</i>, <i>Rhizopus</i>, <i>Albugo</i>.' },
          { f: '<b>Ascomycetes</b> (sac fungi)', note: 'ascospores <b>in an ascus</b> (endogenous); <i>Penicillium</i>, <i>Aspergillus</i>, <i>Neurospora</i>, Yeast.' },
          { f: '<b>Basidiomycetes</b> (club fungi)', note: 'basidiospores <b>on a basidium</b> (exogenous); somatogamy, no sex organs; <i>Agaricus</i>, <i>Puccinia</i>, <i>Ustilago</i>.' },
          { f: '<b>Deuteromycetes</b> (fungi imperfecti)', note: 'conidia only, no known sexual stage; <i>Alternaria</i>, <i>Colletotrichum</i>, <i>Trichoderma</i>.' },
          { f: 'Sexual cycle', note: '<b>plasmogamy → karyogamy → meiosis</b>; dikaryon (n+n) & clamp connections in Asco/Basidio.' },
          { f: 'Lichen', note: 'alga (phycobiont) + fungus (mycobiont); SO<sub>2</sub> pollution indicator.' },
          { f: 'Mycorrhiza', note: 'fungus + plant root; fungus supplies minerals/water, plant supplies sugars.' },
        ],
        aids: [
          'Common names: <b>“Algal–Sac–Club–Imperfect”</b> → Phyco, Asco, Basidio, Deutero.',
          'Sexual cycle: <b>“Protoplasm, then Nucleus, then Split”</b> → Plasmogamy, Karyogamy, Meiosis.',
          'Spore site: <b>“Asco = inside (sac), Basidio = outside (club).”</b> Deutero = conidia only, no sexual spores.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 100–107 ─────────────────────────
  {
    n: '04',
    title: 'Kingdoms Plantae & Animalia: Overview',
    kalam: 'Everything separating the two kingdoms flows from one root difference: plants make food; animals find food.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> In Chapter 2 these two kingdoms appear as short overviews (the full detail is in Chapter 3, Plant Kingdom, and Chapter 4, Animal Kingdom). For NEET/Boards at the Chapter-2 level, the high-yield points are the defining features of each kingdom, the autotroph-exception plants (insectivorous and parasitic), the starch-vs-glycogen storage contrast, and alternation of generations in plants. These features also populate the master five-kingdom table, so they recur in “match the kingdom” and assertion–reason questions. Expect at least 1 MCQ or a short comparison question that hinges on cell wall, nutrition or stored food (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: 'After the prokaryotes (Monera), the single-celled eukaryotes (Protista), and the absorptive eukaryotes (Fungi), the last two kingdoms are the ones we meet every day with the naked eye: the <b>multicellular green makers</b> (Plantae) and the <b>multicellular movers and eaters</b> (Animalia). Between them they contain almost every large organism you can name: every tree, grass, fish, bird, insect and mammal.',
      },
      {
        t: 'p',
        html: '<b>Kingdom Plantae</b> is, in one line, the kingdom of <b>eukaryotic, chlorophyll-containing autotrophs (mostly multicellular; a few algae are unicellular)</b>, organisms that build their own food by photosynthesis and are wrapped in a <b>cellulose cell wall</b>. It includes everything from simple algae through bryophytes, pteridophytes and gymnosperms to the flowering angiosperms: a span from a simple pond alga to a banyan tree, all united by the green, food-making, walled cell.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> a plant is a self-sufficient solar-powered factory rooted in one place: it doesn’t need to chase food because it makes its own from sunlight, water and air. An animal, by contrast, is a mobile consumer that must go find and ingest its food. That single difference, <b>make food vs find food</b>, drives almost every other contrast between the two kingdoms: the plant’s wall and plastids and fixed life versus the animal’s wall-less, plastid-free, mobile body. Even their storage chemistry follows from it: a stationary maker can afford the bulky, slowly-mobilised starch, while an active mover keeps the readily-mobilised glycogen on hand.',
      },
      {
        t: 'p',
        html: 'But watch the exceptions, because examiners love them. A few “plants” have <b>given up making all their own food</b>:<br>• <b>Insectivorous plants</b>, the Venus flytrap, Bladderwort and the pitcher plant, are only partially heterotrophic: they keep their chlorophyll and photosynthesise normally for energy, but they also <b>trap and digest insects to obtain nitrogen</b> in marshy, nitrogen-poor soils where roots alone can’t supply enough. The flytrap snaps shut on a landing insect; the bladderwort sucks tiny prey into bladder-traps; the pitcher plant drowns insects in a fluid-filled modified leaf.<br>• <b>Parasitic plants</b>, <i>Cuscuta</i> (dodder, Amarbel), have <b>almost lost their chlorophyll</b> and twine around a host plant, drawing nourishment from it through specialised suckers. With almost no green pigment, <i>Cuscuta</i> appears as yellowish threads draped over the host.',
      },
      {
        t: 'p',
        html: 'The takeaway is that “Plantae” is defined by the plant body and ancestry, not strictly by self-feeding: a plant can lose photosynthesis and still be a plant.',
      },
      {
        t: 'p',
        html: '<b>Kingdom Animalia</b> is the kingdom of <b>multicellular, eukaryotic heterotrophs with no cell wall.</b> Animals take in food and digest it inside the body (<b>holozoic</b> nutrition), store energy as <b>glycogen and fat</b>, and, in higher forms, possess elaborate sensory and neuromotor systems that let them sense their surroundings and move toward food, mates and shelter. Because their cells have no rigid wall, animal bodies can be flexible and mobile, and can develop contractile muscle and conducting nerve tissue, the machinery of an active, food-seeking life. Most animals grow to a fixed adult size and then reproduce, usually sexually.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & traps:</b><br>• <b>Not all plants are fully autotrophic</b>: remember the insectivorous (partially heterotrophic) and parasitic (non-photosynthetic) exceptions; “all plants make their own food” is a false statement.<br>• <b>Animal cells have no cell wall</b>: a favourite one-mark discriminator from plant cells, which always have one.<br>• <b>Plants store starch, animals store glycogen</b>: do not swap these.<br>• This topic is a Chapter-2 overview; the systematic classification of plants (algae to angiosperms) and animals (non-chordates to chordates) belongs to Chapters 3 and 4 respectively.',
      },
      { t: 'fig', id: 'b11-02-fig-2.7' },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      { t: 'p', html: '<b>Plantae vs Animalia: the diagnostic table</b>' },
      {
        t: 'p',
        html: 'These two kingdoms are the easiest pair to confuse at the cell level only until you remember that every listed feature traces back to one difference in how they feed. Read the table with that in mind:',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Kingdom Plantae', 'Kingdom Animalia'],
        rows: [
          ['Cell type', 'Eukaryotic, mostly multicellular (a few algae are unicellular)', 'Eukaryotic, multicellular'],
          ['Cell wall', 'Present (<b>cellulose</b>)', '<b>Absent</b>'],
          ['Plastids / chlorophyll', 'Present', 'Absent'],
          ['Mode of nutrition', '<b>Autotrophic</b> (photosynthetic); few heterotrophic', '<b>Heterotrophic</b> (holozoic)'],
          ['Stored food', '<b>Starch</b>', '<b>Glycogen</b> and fat'],
          ['Movement', 'Generally fixed (non-motile)', 'Generally capable of locomotion'],
          ['Body organisation', 'Tissue / organ level', 'Tissue / organ / <b>organ-system</b> level'],
          ['Reproduction', 'Asexual & sexual; <b>alternation of generations</b>', 'Mostly sexual (copulation → embryo)'],
        ],
      },
      {
        t: 'p',
        html: '<b>Where they sit among the kingdoms:</b> both are (mostly) multicellular eukaryotes, so cell type alone cannot separate them; the cleanest separators are <b>nutrition + cell wall</b>: Plantae make food and have a cellulose wall, Animalia ingest food and have no wall. The stored-food clue (starch vs glycogen) and the presence or absence of plastids make perfect tiebreakers.',
      },
      {
        t: 'p',
        html: '<b>The range within Plantae:</b> algae → bryophytes → pteridophytes → gymnosperms → angiosperms, increasing in complexity and in adaptation to land, from water-bound algae to drought-tolerant flowering plants (detailed in Chapter 3). <b>The range within Animalia:</b> from simple invertebrates (sponges, cnidarians, worms, molluscs, arthropods) to complex vertebrates (fishes, amphibians, reptiles, birds, mammals) with full organ systems and advanced nervous control (detailed in Chapter 4). For Chapter 2 you only need this kingdom-level picture; the systematic divisions, with their distinguishing characters, come later.',
      },

      { t: 'part', title: 'Comparative characteristics and life cycles' },
      { t: 'p', html: '<b>3.1 Kingdom Plantae: key characteristics</b>' },
      {
        t: 'p',
        html: '• <b>Eukaryotic and mostly multicellular</b> (a few algae are unicellular), with cells bearing a <b>cellulose cell wall</b>, plastids (including the green chloroplasts) and, typically, a large central vacuole that stores cell sap and maintains turgor, keeping the soft plant body firm.<br>• <b>Autotrophic</b> by photosynthesis: the chlorophyll in their chloroplasts captures light to build sugars from carbon dioxide and water, releasing oxygen, with the well-known heterotrophic exceptions (insectivorous and parasitic plants). This food-making role makes plants the <b>producers</b> that ultimately feed nearly every other organism, including all animals.<br>• Store food chiefly as <b>starch</b>.<br>• Generally <b>non-motile</b> and fixed to a substrate, drawing water and minerals from the soil.<br>• Organised at the <b>tissue and organ level</b> (roots, stems, leaves in higher plants), though the simplest members (algae) have a much looser body.<br>• The kingdom is graded in complexity from <b>algae</b> (simplest, mostly aquatic, often with a loose thallus body) through <b>bryophytes</b> (the “amphibians of the plant world”, needing water for reproduction), <b>pteridophytes</b> (the first true vascular plants, with proper conducting tissue), and <b>gymnosperms</b> (naked-seeded, like pines and <i>Cycas</i>) to the <b>angiosperms</b> (flowering plants whose seeds are enclosed in a fruit), a sequence of increasing adaptation to life on land that is studied in full in Chapter 3. Each step up this ladder shows better water transport, better protection of the embryo, and reduced dependence on external water for reproduction.',
      },
      { t: 'p', html: '<b>3.2 Alternation of generations (a classic plant feature)</b>' },
      {
        t: 'p',
        html: 'Plants show a characteristic life cycle in which <b>two phases alternate</b>:<br>• A <b>diploid sporophyte (2n)</b> that produces haploid spores by meiosis, and<br>• A <b>haploid gametophyte (n)</b> that produces gametes by mitosis, whose fusion (fertilisation) restores the diploid sporophyte.',
      },
      {
        t: 'p',
        html: 'So the cycle runs: sporophyte (2n) → meiosis → spores (n) → gametophyte (n) → gametes (n) → fertilisation → back to sporophyte (2n). The relative size and duration of the two phases differ across plant groups: the gametophyte dominates in bryophytes (the leafy moss plant is the gametophyte), while the sporophyte dominates in pteridophytes, gymnosperms and angiosperms (the visible fern, pine or mango tree is the sporophyte). But alternation of generations is the typical plant life cycle, seen in bryophytes, pteridophytes, gymnosperms and angiosperms; some algae are haplontic or diplontic and do not alternate. That is why “alternation of generations” is a plant signature you should be able to state in one line and sketch as a cycle. A common exam framing asks you to identify which generation is “dominant” in a named group, so link each group to its dominant phase as you revise: moss → gametophyte; fern, pine, mango → sporophyte.',
      },
      { t: 'p', html: '<b>3.3 Kingdom Animalia: key characteristics</b>' },
      {
        t: 'p',
        html: '• <b>Eukaryotic and multicellular</b>, with cells that have <b>no cell wall</b> and <b>no plastids</b>: only a flexible plasma membrane bounds the cell, which is part of what allows movement and the ingestion of food.<br>• <b>Heterotrophic and holozoic</b>: food is taken in (ingested) and digested in an internal cavity, then absorbed, in contrast to the absorptive feeding of fungi.<br>• Store food as <b>glycogen and fat</b>, not starch.<br>• Most are <b>capable of locomotion</b>, have a definite shape and size, and grow to a determinate adult size.<br>• Higher animals show <b>elaborate sensory and neuromotor mechanisms</b> (nervous and muscular coordination) and are built to the <b>organ-system level</b> of organisation: the most complex body plan among the five kingdoms.<br>• Reproduction is <b>mostly sexual</b>, typically by copulation between two sexes, followed by fertilisation and embryonic development into the adult.',
      },
      {
        t: 'p',
        html: 'In the higher animals these features reach their fullest expression: a digestive system to process ingested food, a circulatory system to distribute it, a nervous system and sense organs to coordinate behaviour, and a muscular system for movement: the organ-system level of organisation that no other kingdom attains. It is this combination of <b>mobility plus internal coordination</b> that lets animals lead active, food-seeking lives, and it is the practical reason the animal kingdom is treated as the most structurally complex of the five.',
      },
      { t: 'p', html: '<b>3.4 The unifying contrast</b>' },
      {
        t: 'p',
        html: 'Everything separating the two kingdoms flows from one root difference: <b>plants make food; animals find food.</b> From “make food” follow the plant’s chloroplasts, its cellulose wall (to brace a cell under turgor pressure), its fixed lifestyle (no need to move toward food) and its starch store. From “find food” follow the animal’s wall-less cells (flexible, for movement and ingestion), its locomotion, its sensory and nervous systems (to detect and pursue food) and its glycogen store. Hold that single axis, make vs find, and the entire comparison table reconstructs itself feature by feature, which is exactly how you should answer a “compare the two kingdoms” question under time pressure.',
      },
      {
        t: 'p',
        html: 'It is also worth noting what the two kingdoms <b>share</b>, since questions sometimes test this: both are eukaryotic, both are mostly multicellular, both reproduce sexually, and both show some division of labour among their cells. The differences are real but they sit on top of this common eukaryotic, multicellular foundation, which is why both were recognised as kingdoms from the very first (two-kingdom) system onward, while the other three kingdoms had to be carved out later. In a sense, Plantae and Animalia are the two halves of the multicellular eukaryotic world: producers and consumers, the green base and the mobile top of almost every food chain you will study.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board · 3 marks',
        q: '<b>Clean comparison technique:</b> “Give any three features that distinguish Kingdom Plantae from Kingdom Animalia.”',
        steps: [
          '<b>Model answer (pair the contrasts):</b>',
          '1. <b>Cell wall:</b> present (made of cellulose) in Plantae; completely absent in Animalia.',
          '2. <b>Nutrition:</b> autotrophic (photosynthetic) in Plantae; heterotrophic (holozoic, ingestive) in Animalia.',
          '3. <b>Stored food:</b> starch in Plantae; glycogen (and fat) in Animalia.',
          '<b>Examiner tip:</b> present as matched pairs, never two separate lists: that is what earns the comparison marks. A clean fourth pair, if needed, is “plastids present in Plantae, absent in Animalia”; a fifth is “generally non-motile vs capable of locomotion”. Lead with the most fundamental contrast (nutrition or cell wall) so the examiner sees you understand why the kingdoms differ, not just that they do.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET · MCQ',
        q: '<b>Direct fact recall:</b> “Which of the following is a partially heterotrophic (insectivorous) plant?” <b>(a)</b> <i>Cuscuta</i> <b>(b)</b> Venus flytrap <b>(c)</b> <i>Spirogyra</i> <b>(d)</b> Mushroom',
        steps: [
          'The Venus flytrap traps and digests insects for nitrogen while continuing to photosynthesise, hence “partially” heterotrophic, since it still makes its own carbohydrate.',
          '<b>Distractors:</b> <i>Cuscuta</i> is parasitic (not insectivorous) and has almost lost its chlorophyll, so it is heterotrophic in a different way; <i>Spirogyra</i> is a fully autotrophic green alga with no insect-trapping habit; a mushroom is a fungus, not a plant at all, and absorbs (rather than traps) its food. Reading “insectivorous” precisely is what separates (b) from the parasitic <i>Cuscuta</i>.',
        ],
        ans: '(b).',
      },
      {
        t: 'ex',
        tag: 'NEET · MCQ-with-reasoning',
        q: '<b>Placing an organism:</b> “An organism is multicellular and eukaryotic, lacks a cell wall, ingests its food, and stores energy as glycogen. It belongs to:” <b>(a)</b> Plantae <b>(b)</b> Fungi <b>(c)</b> Animalia <b>(d)</b> Protista',
        steps: [
          '“No cell wall + ingestive (holozoic) feeding + glycogen storage” is the unmistakable Animalia signature, and all three clues point the same way. Work the clues: “no wall” already rules out Plantae (cellulose) and Fungi (chitin); “ingests food” rules out the absorptive fungi and the food-making plants; “multicellular” rules out the largely unicellular Protista. When three independent clues converge on one kingdom, you can answer with full confidence.',
        ],
        ans: '(c).',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty · Assertion–Reason',
        q: '<b>Assertion (A):</b> <i>Cuscuta</i> is included in Kingdom Plantae even though it has almost lost its chlorophyll. <b>Reason (R):</b> Kingdom membership is decided by overall cellular and structural organisation, not by nutrition alone. <b>(a)</b> Both A and R true, R is the correct explanation of A <b>(b)</b> Both A and R true, R is <b>not</b> the correct explanation of A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          'A is true (<i>Cuscuta</i> is a parasitic plant with almost no chlorophyll, yet it is still placed in Plantae). R is true and it explains A: classification follows the organism’s overall plant body organisation and evolutionary ancestry, so a plant that has largely lost photosynthesis remains a plant. This is the same logic by which a cave fish that has lost its eyes is still a fish: losing one feature does not move an organism to a new kingdom.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State the mode of nutrition and the cell-wall material of Kingdom Plantae.',
            a: 'Autotrophic (photosynthetic, with a few heterotrophic exceptions such as insectivorous and parasitic plants); cell wall made of cellulose.',
          },
          {
            q: '[CUET] Name one insectivorous plant and one parasitic plant.',
            a: 'Insectivorous: Venus flytrap (or Bladderwort/pitcher plant); parasitic: <i>Cuscuta</i>.',
          },
          {
            q: '[NEET] Define alternation of generations and name the two alternating phases with their ploidy.',
            a: 'A life cycle in which a diploid <b>sporophyte (2n)</b> alternates with a haploid <b>gametophyte (n)</b>: the sporophyte produces spores by meiosis, the spores grow into the gametophyte, the gametophyte produces gametes, and fertilisation restores the sporophyte.',
          },
          {
            q: '[NEET] Give two features separating Kingdom Animalia from Plantae and Fungi.',
            a: 'Complete absence of a cell wall; holozoic (ingestive) heterotrophic nutrition with food stored as glycogen and fat (also acceptable: organ-system-level organisation; locomotion; well-developed sensory/neuromotor systems).',
          },
          {
            q: '[NEET high-difficulty] Why are insectivorous plants described as “partially heterotrophic” rather than fully heterotrophic?',
            a: 'They retain chlorophyll and photosynthesise to make their own carbohydrate (energy), and only trap insects to obtain <b>nitrogen and other minerals</b> that are scarce in their boggy soils, so they are autotrophic for carbon/energy but heterotrophic only for certain nutrients, hence “partially” heterotrophic.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The cell wall in Kingdom Plantae is made chiefly of:',
        opts: [
          { label: 'chitin', nudge: '<b>(a)</b> chitin is the fungal wall material.' },
          { label: 'peptidoglycan', nudge: '<b>(b)</b> peptidoglycan is the bacterial wall material.' },
          { label: 'cellulose', nudge: null },
          { label: 'it is absent', nudge: '<b>(d)</b> “absent” describes animal cells.' },
        ],
        correct: 2,
        solution: 'Plant cell walls are built mainly of cellulose, a polymer of glucose. Each distractor is the correct wall (or absence) for a different kingdom, so the question is really testing the wall-by-kingdom map.',
      },
      {
        t: 'mcq',
        q: 'Which is the stored food in animals?',
        opts: [
          { label: 'Starch', nudge: '<b>(a)</b> starch is the plant store.' },
          { label: 'Glycogen and fat', nudge: null },
          { label: 'Paramylon', nudge: '<b>(c)</b> paramylon is the euglenoid store.' },
          { label: 'Chrysolaminarin', nudge: '<b>(d)</b> chrysolaminarin is the diatom store.' },
        ],
        correct: 1,
        solution: 'Animals store carbohydrate as glycogen and energy as fat. Three different storage products from three different groups, a classic mix-and-match trap.',
      },
      {
        t: 'mcq',
        q: 'Alternation of generations is a characteristic feature of:',
        opts: [
          { label: 'Animalia', nudge: '<b>(a)</b> animals do not show this classic sporophyte–gametophyte cycle.' },
          { label: 'Fungi only', nudge: '<b>(b)</b> it is not the defining fungal feature.' },
          { label: 'Plantae', nudge: null },
          { label: 'Monera', nudge: '<b>(d)</b> Monera are prokaryotic, haploid and lack such a cycle entirely.' },
        ],
        correct: 2,
        solution: 'Plants alternate a diploid sporophyte with a haploid gametophyte.',
      },
      {
        t: 'mcq',
        q: 'Which feature distinguishes Kingdom Animalia from both Plantae and Fungi?',
        opts: [
          { label: 'Eukaryotic cells', nudge: '<b>(a)</b> eukaryotic cells occur in Protista, Fungi and Plantae too.' },
          { label: 'Heterotrophic nutrition', nudge: '<b>(b)</b> Fungi (and some Protista) are also heterotrophic.' },
          { label: 'Complete absence of a cell wall', nudge: null },
          { label: 'Multicellular body', nudge: '<b>(d)</b> Plantae and Fungi are also multicellular.' },
        ],
        correct: 2,
        solution: 'Among the multicellular kingdoms only animal cells lack a wall entirely: a distinctive Animalia trait.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Assuming all plants are autotrophic.</b> Remember the insectivorous (Venus flytrap, Bladderwort, pitcher plant) and parasitic (<i>Cuscuta</i>) exceptions: a plant can be heterotrophic in part or in whole and still be a plant.',
          '<b>Giving animal cells a wall.</b> Animal cells have <b>no</b> cell wall: that is the cleanest single plant-vs-animal cell discriminator, and a frequent one-mark question.',
          '<b>Swapping stored foods.</b> Plants store <b>starch</b>; animals store <b>glycogen</b> (and fat). Mixing these up is one of the commonest errors in the kingdom comparison.',
          '<b>Classifying by nutrition alone.</b> A parasitic plant that has almost lost its chlorophyll is still a plant: kingdom membership is decided by overall body organisation and ancestry, not by one feature in isolation.',
          '<b>Confusing a mushroom or alga with these kingdoms.</b> A mushroom is a fungus and many “pond scums” are protists or algae: being green or growing like a plant does not make something Plantae.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For a multicellular eukaryote, decide with one question: <b>does it have a cell wall and make its own food?</b> Yes → Plantae; no wall and ingests food → Animalia. The stored-food clue (starch = plant, glycogen = animal) and the presence of plastids (plant) versus their absence (animal) are perfect tiebreakers when a question gives you those details instead of the wall.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Plantae', note: 'eukaryotes, mostly multicellular (a few algae are unicellular); <b>cellulose</b> wall; chlorophyll/plastids → <b>autotrophic</b>; store <b>starch</b>; mostly non-motile; <b>alternation of generations</b> (sporophyte 2n ↔ gametophyte n).' },
          { f: 'Plant exceptions', note: 'insectivorous/partially heterotrophic (Venus flytrap, Bladderwort, pitcher plant: trap insects for nitrogen); parasitic (<i>Cuscuta</i>: almost no chlorophyll).' },
          { f: 'Plant range', note: 'algae → bryophytes → pteridophytes → gymnosperms → angiosperms (detail in Ch 3).' },
          { f: 'Animalia', note: 'multicellular eukaryotes; <b>no cell wall</b>, no plastids; <b>heterotrophic/holozoic</b>; store <b>glycogen + fat</b>; motile; organ-system level with sensory/neuromotor systems; mostly sexual reproduction (detail in Ch 4).' },
          { f: 'Core split', note: 'plants make food (walled, fixed, plastids, starch); animals find food (wall-less, mobile, glycogen).' },
          { f: 'Shared', note: 'both eukaryotic, multicellular, reproduce sexually.' },
        ],
        aids: [
          'Plant exceptions: <b>“Flytraps catch Nitrogen, <i>Cuscuta</i> steals Sugar.”</b>',
          'Stored food: <b>“Plants Starch, Animals Glycogen”</b> (P-S, A-G).',
          'Plant life cycle: <b>“2n makes spores, n makes gametes”</b> (sporophyte alternates with gametophyte).',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 05 · pp. 108–114 ─────────────────────────
  {
    n: '05',
    title: 'Viruses, Viroids, Prions & Lichens: Life at the Edges',
    kalam: 'Viruses, viroids and prions are acellular: they are not made of cells at all.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This cluster is a reliable NEET scorer: usually 1–2 MCQs a year (the book’s estimate from past papers, not official figures), most often on the virus discovery trio (Ivanowsky / Beijerinck / Stanley), the “DNA or RNA, never both” rule, viroids vs viruses, and lichens as pollution indicators. Prions and the virus–viroid–prion comparison have appeared in recent papers, and “which of these is not in the five-kingdom system” is a recurring framing. Statement-based and assertion–reason formats dominate here, so precise single facts (who did what, which agent lacks a coat, which lacks nucleic acid) matter more than long explanations. CBSE Boards may ask a 2–3 mark question on virus structure or lichen symbiosis; CUET tests single-fact recall.',
      },
      {
        t: 'p',
        html: 'Everything so far in this chapter has been a cell, prokaryotic or eukaryotic. Now we step off the edge of the cellular world entirely. <b>Viruses, viroids and prions are acellular</b>: they are not made of cells at all, and that single fact is why Whittaker’s five-kingdom system has <b>no place for them</b>. They sit in a strange borderland between the living and the non-living, and to study them you have to set aside almost everything you learned about cell structure in Topics 01 to 03.',
      },
      {
        t: 'p',
        html: 'Think of a virus this way: it’s like a <b>pen-drive lying on a table</b>. On its own it does nothing: no movement, no metabolism, no reproduction; it can even be <b>crystallised</b> and stored on a shelf like a chemical. But plug that pen-drive into a computer and its program takes over the machine. A virus is exactly that: a packet of genetic instructions (DNA or RNA) wrapped in a protein coat, inert until it gets inside a living host cell, whereupon it hijacks the cell’s machinery to make thousands of copies of itself. This is why viruses are called <b>obligate intracellular parasites</b>: they have no ribosomes and no metabolism of their own (a few carry one or two enzymes, such as reverse transcriptase in HIV, but cannot make ATP or proteins); borrowed machinery is the only machinery they have.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> is a virus alive? The honest answer is “half.” Outside a host it behaves like a lifeless crystal; inside one it reproduces and evolves like a living thing. That dual nature, living when in a host, non-living when outside, is the single most important idea in this whole topic, and examiners test it endlessly. It is also why some biologists describe viruses as being “at the threshold of life”: they possess heredity (a genome that mutates and evolves) but not the self-sufficient metabolism that defines a living cell. They are, in a sense, more closely related to chemical matter than to a living organism, yet they undeniably evolve.',
      },
      {
        t: 'p',
        html: 'If a virus is a stripped-down packet, a <b>viroid</b> is even more minimal: just a short piece of naked RNA with <b>no protein coat at all</b>. And a <b>prion</b> strips things down further still: it is purely <b>protein, with no nucleic acid whatsoever</b>, an infectious mis-folded protein. The progression is almost a thought experiment in “how little does an infectious agent need?”: virus (nucleic acid + coat) → viroid (nucleic acid only) → prion (protein only). Each step throws something away, yet each remains infectious.',
      },
      {
        t: 'p',
        html: '<b>Lichens</b> are the odd one out in this group: they are very much alive and cellular. They’re bundled here because, like the others, they don’t fit neatly into one kingdom: a lichen is <b>two organisms living as one</b>, a fungus and an alga in such an intimate partnership that the pair behaves as a single body with its own name, shape and ecology.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & traps to watch:</b><br>• <b>Acellular ≠ prokaryotic.</b> Bacteria are cells (prokaryotic); viruses/viroids/prions are not cells at all. Don’t file viruses under Monera.<br>• <b>“DNA or RNA, never both.”</b> A virus carries exactly one type of nucleic acid: a favourite trap is the option “contains both DNA and RNA”.<br>• Not every infectious disease is viral: cholera is bacterial, rusts and smuts are fungal.',
      },
      { t: 'fig', id: 'b11-02-fig-2.8' },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      {
        t: 'p',
        html: 'These agents are placed outside the five kingdoms because they are acellular. The cleanest way to hold them in your head is a strip-down comparison.',
      },
      {
        t: 'table',
        title: 'Virus vs Viroid vs Prion: the diagnostic table',
        head: ['Agent', 'Made of', 'Nucleic acid', 'Protein coat', 'Example disease'],
        rows: [
          [
            '<b>Virus</b>',
            'Nucleic acid <b>+</b> protein coat (nucleoprotein)',
            'DNA <b>or</b> RNA (never both)',
            'Present (capsid)',
            'Mumps, smallpox, influenza, AIDS, mosaic of plants',
          ],
          ['<b>Viroid</b>', 'Free RNA only', 'RNA (low molecular weight)', '<b>Absent</b>', 'Potato spindle tuber disease'],
          ['<b>Prion</b>', 'Protein <b>only</b>', '<b>None</b>', '(is itself protein)', 'Mad-cow disease (BSE), CJD, kuru'],
        ],
      },
      {
        t: 'p',
        html: 'The single discriminating question for each pair: <b>virus vs viroid → is there a protein coat?</b> (viroid has none); <b>viroid vs prion → is there nucleic acid?</b> (prion has none).',
      },
      {
        t: 'p',
        html: '<b>Why are they kept out of the five kingdoms?</b> Because Whittaker’s scheme classifies cellular organisms by cell structure, body organisation and nutrition: criteria that simply don’t apply to an acellular crystal that can’t metabolise or reproduce on its own. A virus has no cell membrane, no cytoplasm and no organelles, so there is literally no “cell type” to slot it against; viroids and prions are even more reduced. They are therefore studied as a separate category of acellular infectious agents, sitting alongside, but outside, the kingdom system.',
      },
      {
        t: 'p',
        html: '<b>Lichens</b> belong to a different category of “doesn’t fit one box”: a <b>symbiotic, mutualistic association of an alga and a fungus</b>:<br>• The <b>algal partner = phycobiont</b> (often a green alga or a cyanobacterium): it photosynthesises and <b>provides food</b>.<br>• The <b>fungal partner = mycobiont</b>: it <b>provides protection, anchorage and absorption</b> of water and minerals for the partnership.',
      },

      { t: 'part', title: 'Comparative characteristics' },
      { t: 'p', html: '<b>3.1 Viruses: structure, discovery and types</b>' },
      {
        t: 'p',
        html: 'A complete virus particle is a <b>virion</b>, and chemically it is an <b>infectious nucleoprotein</b>: a core of nucleic acid surrounded by a protein coat called the <b>capsid</b>, which is itself built from repeating subunits called <b>capsomeres</b>. The capsomeres may be arranged <b>helically</b> (as in the rod-shaped Tobacco Mosaic Virus) or <b>polyhedrally/icosahedrally</b>, so not all viruses share one symmetry. Viruses are too small to be seen with a light microscope and pass through filters that stop bacteria. They carry no ribosomes, no organelles and no metabolism of their own (a few carry one or two enzymes, such as reverse transcriptase in HIV, but cannot make ATP or proteins), which is why outside a host they are biologically inert, closer to chemical matter than to a living organism. A bacteriophage shows this packaging vividly: a <b>head</b> holding the nucleic acid, connected through a <b>collar</b> and <b>sheath/tail</b> to <b>tail fibres</b> that anchor the phage to its bacterial host.',
      },
      {
        t: 'p',
        html: '<b>The discovery story</b> (a classic, high-value sequence):<br>• <b>D.J. Ivanowsky</b> found that a tiny infectious agent from tobacco passed through filters that trapped bacteria.<br>• <b>M.W. Beijerinck</b> showed the extract of infected tobacco could infect healthy plants and named the fluid <b>“<i>Contagium vivum fluidum</i>”</b> (infectious living fluid).<br>• <b>W.M. Stanley</b> showed that viruses could be <b>crystallised</b>: TMV was the first virus to be purified, dramatising just how chemical-like a virus can be.',
      },
      {
        t: 'p',
        html: 'The term virus itself comes from the Latin for “poison” or “venom”, a fitting name for an agent first known only by the disease it caused, long before anyone could see it.',
      },
      {
        t: 'p',
        html: '<b>The “DNA or RNA, never both” rule, with examples:</b> double-stranded DNA (smallpox, a poxvirus), single-stranded DNA (phage φX174), double-stranded RNA (Reovirus), single-stranded RNA (TMV). As a rule of thumb, <b>most plant viruses carry ss-RNA</b>, <b>most bacteriophages carry dsDNA</b> (φX174 is a single-stranded exception), and animal viruses may carry either DNA or RNA. Viruses whose RNA is reverse-transcribed into DNA inside the host are called <b>retroviruses</b> (e.g., HIV).',
      },
      {
        t: 'p',
        html: '<b>Diseases:</b> in humans: mumps, smallpox, herpes, influenza, the common cold (rhinovirus) and AIDS; in plants: <b>mosaic formation, leaf rolling and curling, yellowing and vein clearing</b>, and stunted growth. Watch the traps that examiners plant in “select the viral disease” lists: <b>cholera is bacterial</b>, and <b>rusts and smuts are fungal</b>, not viral, even though they sit beside genuine viral diseases like turnip mosaic in the options.',
      },
      { t: 'p', html: '<b>3.2 Viroids</b>' },
      {
        t: 'p',
        html: 'Discovered by <b>T.O. Diener in 1971</b>, a viroid is an infectious agent <b>smaller than a virus</b>, consisting of <b>free RNA with no protein coat</b>, and the RNA is of <b>low molecular weight</b>. The classic example is <b>potato spindle tuber disease</b> of crops. The headline contrast with a virus is exactly the missing coat: where a virus is RNA/DNA wrapped in protein, a viroid is naked RNA. That is also why viroids are even harder to inactivate by agents that target protein coats: there is simply no coat to attack in the first place.',
      },
      { t: 'p', html: '<b>3.3 Prions</b>' },
      {
        t: 'p',
        html: 'A prion is an <b>infectious agent made of protein only</b>; it contains <b>no nucleic acid</b> and is essentially an <b>abnormally folded protein</b> that propagates by forcing normally folded copies of the same protein to mis-fold. This protein-only mode of infection was a genuine surprise to biology, because it means an agent can be infectious without carrying any genes at all. Prion diseases occur in animals and include <b>mad-cow disease (BSE)</b>, <b>Creutzfeldt–Jakob disease (CJD)</b> and <b>kuru</b>, all fatal, degenerative diseases of the nervous system with no cure.',
      },
      { t: 'p', html: '<b>3.4 Lichens</b>' },
      {
        t: 'p',
        html: 'A lichen is a <b>mutualistic symbiosis</b> of a fungus (mycobiont) and an alga or cyanobacterium (phycobiont). The alga makes food by photosynthesis; the fungus shelters it, anchors the partnership and absorbs water and minerals. The relationship is so complete that the two partners look and behave like a single organism, which is precisely why a lichen cannot be slotted into one kingdom. Ecologically, lichens are <b>pioneer colonisers</b>: they establish on bare rock and tree bark where little else can grow, and over time their slow action helps begin soil formation. Some species are even eaten by reindeer. Two exam-favourite properties: lichens <b>grow very slowly</b>, and they are <b>excellent pollution indicators</b>: being highly sensitive to SO<sub>2</sub>, they <b>do not grow in polluted areas</b>, so their presence signals clean air. This is why a city centre is usually bare of lichens while old, clean-air hill stations are thick with them.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board · 3 marks',
        q: '<b>Clean comparison technique:</b> “Differentiate between a virus, a viroid and a prion on the basis of their chemical composition.”',
        steps: [
          '<b>Model answer (one clean contrast each):</b>',
          '1. <b>Virus:</b> nucleic acid (DNA or RNA) enclosed in a protein coat (capsid).',
          '2. <b>Viroid:</b> free RNA only, of low molecular weight, with <b>no</b> protein coat.',
          '3. <b>Prion:</b> protein only, with <b>no</b> nucleic acid.',
          '<b>Examiner tip:</b> anchor the answer to the “what’s present / what’s missing” axis: that’s the cleanest way to keep all three straight.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET · MCQ',
        q: '<b>Direct fact recall:</b> “Potato spindle tuber disease is caused by:” <b>(a)</b> a virus <b>(b)</b> a viroid <b>(c)</b> a prion <b>(d)</b> a fungus',
        steps: [
          'The textbook example of a viroid: free, low-molecular-weight RNA with no protein coat, discovered by T.O. Diener in 1971. The disease name itself is the memory hook examiners rely on: “potato spindle tuber” pairs with “viroid” very often.',
        ],
        ans: '(b).',
      },
      {
        t: 'ex',
        tag: 'NEET · MCQ-with-reasoning',
        q: '<b>Discovery sequence:</b> “Who demonstrated that the extract of infected tobacco plants could infect healthy plants and named it ‘<i>Contagium vivum fluidum</i>’?” <b>(a)</b> D.J. Ivanowsky <b>(b)</b> M.W. Beijerinck <b>(c)</b> W.M. Stanley <b>(d)</b> Louis Pasteur',
        steps: [
          'Sequence the trio in time order: Ivanowsky first found a filter-passing infectious agent in tobacco; Beijerinck then showed the sap could transmit infection and named the fluid <i>Contagium vivum fluidum</i>; Stanley finally crystallised the virus. Ivanowsky and Stanley are real virus pioneers placed out of role, and Pasteur is a pioneer of microbiology, not of this tobacco work: mixing up who did what is the standard trap.',
        ],
        ans: '(b).',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty · Assertion–Reason',
        q: '<b>Assertion (A):</b> Viruses are not included in Whittaker’s five-kingdom classification. <b>Reason (R):</b> Viruses are acellular and behave as inert crystals outside a host cell, lacking the cellular organisation on which the five-kingdom scheme is based. <b>(a)</b> Both A and R true, R is the correct explanation of A <b>(b)</b> Both A and R true, R is <b>not</b> the correct explanation of A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          'A is true (viruses, viroids and lichens fall outside the five kingdoms). R is true and it explains A: the five-kingdom scheme sorts cellular life by cell structure and organisation, which an acellular, crystallisable particle simply doesn’t possess, so there is no kingdom to place it in.',
          '<b>Technique:</b> test A and R independently first, then ask whether R is the cause of A. Here the chain is genuinely causal (acellular → no cell criteria apply → no kingdom fits), so (a) rather than (b). A tempting wrong route is to mark (b) on the reasoning that “lichens are cellular, so R can’t be the whole story”, but the assertion and reason are framed specifically about viruses, and for viruses the link is exact.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why are viruses regarded as a link between the living and the non-living?',
            a: 'Outside a host they are inert and can be crystallised and stored like a chemical (non-living behaviour), but inside a host cell they reproduce and direct the cell’s machinery and even evolve (living behaviour), so they straddle the boundary.',
          },
          {
            q: '[CUET] Name the algal and fungal partners of a lichen using the correct technical terms.',
            a: 'Algal partner = <b>phycobiont</b>; fungal partner = <b>mycobiont</b>.',
          },
          {
            q: '[NEET] State two structural features that distinguish a viroid from a virus.',
            a: 'A viroid has <b>free RNA with no protein coat</b> and <b>low-molecular-weight RNA</b>, whereas a virus has its nucleic acid enclosed in a protein capsid.',
          },
          {
            q: '[NEET] Give one example each of a dsDNA virus, an ssRNA virus and a bacteriophage’s nucleic acid type.',
            a: 'dsDNA: smallpox (poxvirus); ssRNA: TMV; bacteriophage: usually dsDNA.',
          },
          {
            q: '[NEET high-difficulty] “Lichens are used as pollution indicators.” Explain the biological basis of this statement.',
            a: 'Lichens are highly sensitive to pollutants, especially SO<sub>2</sub>, and fail to grow in polluted air; therefore their presence indicates clean air and their absence from an area signals pollution, making them natural bioindicators.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which one of the following is correct about viruses?',
        opts: [
          { label: 'They possess their own metabolic system', nudge: '<b>(a)</b> they have no ribosomes and no metabolism of their own (a few carry one or two enzymes, such as reverse transcriptase in HIV, but cannot make ATP or proteins).' },
          { label: 'They contain both DNA and RNA', nudge: '<b>(b)</b> a virus has only one type of nucleic acid, never both.' },
          { label: 'They are obligate parasites', nudge: null },
          { label: 'Their nucleic acid is called the capsid', nudge: '<b>(d)</b> the capsid is the protein coat, not the nucleic acid: a wording trap that catches fast readers.' },
        ],
        correct: 2,
        solution: 'Viruses can multiply only inside a living host, borrowing its machinery.',
      },
      {
        t: 'mcq',
        q: 'The infectious agent made of protein only, with no nucleic acid, is a:',
        opts: [
          { label: 'virus', nudge: '<b>(a)</b> a virus has a nucleic acid core.' },
          { label: 'viroid', nudge: '<b>(b)</b> a viroid is free RNA.' },
          { label: 'prion', nudge: null },
          { label: 'bacterium', nudge: '<b>(d)</b> a bacterium is a complete cell.' },
        ],
        correct: 2,
        solution: 'Prions are infectious mis-folded proteins: they carry no genetic material at all, yet they propagate by forcing normal proteins to mis-fold (e.g., mad-cow disease, CJD, kuru). The protein-only nature is what makes prions unique and counter-intuitive: an infectious agent with no genome.',
      },
      {
        t: 'mcq',
        q: 'In a lichen, the photosynthetic partner is the ______ and the partner providing anchorage and absorption is the ______.',
        opts: [
          { label: 'mycobiont; phycobiont', nudge: '<b>(a)</b> reverses the two: the most common slip.' },
          { label: 'phycobiont; mycobiont', nudge: null },
          { label: 'phycobiont; mycorrhiza', nudge: '<b>(c)</b> and <b>(d)</b> drag in mycorrhiza, which is a different fungus–root association, not part of a lichen.' },
          { label: 'mycorrhiza; mycobiont', nudge: '<b>(c)</b> and <b>(d)</b> drag in mycorrhiza, which is a different fungus–root association, not part of a lichen.' },
        ],
        correct: 1,
        solution: 'Phyco- = alga (the food-maker); myco- = fungus (shelter, anchorage, water/mineral absorption). Anchoring the prefixes to words you know (phyco = alga, as in phycology; myco = fungus) prevents the swap.',
      },
      {
        t: 'mcq',
        q: 'Which statement about viroids is correct?',
        opts: [
          { label: 'They have a double-stranded RNA', nudge: '<b>(a)</b> viroid RNA is single-stranded.' },
          { label: 'Their RNA has a high molecular weight', nudge: '<b>(b)</b> it is low molecular weight.' },
          { label: 'They lack a protein coat', nudge: null },
          { label: 'The term virus was given for them', nudge: '<b>(d)</b> the word “virus” (Latin for poison) was in use long before viroids were discovered in 1971, so it was not coined for them.' },
        ],
        correct: 2,
        solution: 'A viroid is free RNA with no protein coat: its defining feature versus a virus.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Filing viruses under Monera.</b> Bacteria are cells; viruses are acellular and belong to <b>no</b> kingdom.',
          '<b>“Both DNA and RNA.”</b> A virus has exactly one nucleic acid type: never both.',
          '<b>Mixing up the discovery trio.</b> Ivanowsky (filter-passing agent) → Beijerinck (<i>Contagium vivum fluidum</i>) → Stanley (crystallised TMV).',
          '<b>Swapping phycobiont and mycobiont.</b> Phyco = alga (photosynthesis); Myco = fungus.',
          '<b>Confusing lichen with mycorrhiza.</b> A lichen is fungus + alga; a mycorrhiza is fungus + plant root. Both involve a fungus, but the partners differ.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any “which agent?” question, strip it down to two yes/no checks: <b>Is there a protein coat?</b> and <b>Is there nucleic acid?</b> Coat + nucleic acid = virus; nucleic acid (RNA) but no coat = viroid; protein but no nucleic acid = prion. Two questions settle all three.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>All acellular → outside the five kingdoms</b> (lichens are cellular but don’t fit one kingdom either).', note: '' },
          { f: 'Virus', note: 'nucleoprotein = nucleic acid (<b>DNA or RNA, never both</b>) + protein capsid (capsomeres); obligate parasite; inert/crystalline outside host; helical or polyhedral symmetry.' },
          { f: 'Discovery', note: 'Ivanowsky → Beijerinck (<i>Contagium vivum fluidum</i>) → Stanley (crystallised TMV).' },
          { f: 'Nucleic-acid examples', note: 'dsDNA = smallpox (poxvirus); ssRNA = TMV; bacteriophage = usually dsDNA; HIV = retrovirus.' },
          { f: 'Viroid', note: 'free RNA, <b>no protein coat</b>, low MW; Diener (1971); potato spindle tuber.' },
          { f: 'Prion', note: '<b>protein only, no nucleic acid</b>; mad-cow (BSE), CJD, kuru.' },
          { f: 'Lichen', note: 'alga (<b>phycobiont</b>, food) + fungus (<b>mycobiont</b>, shelter); slow-growing; pioneer on bare rock; <b>SO<sub>2</sub> pollution indicator</b> (absent from polluted areas).' },
        ],
        aids: [
          'Strip-down ladder: <b>“Coat+acid → acid only → protein only”</b> = Virus → Viroid → Prion.',
          'Discovery: <b>“I-B-S”</b> = Ivanowsky, Beijerinck, Stanley (found it, named the fluid, crystallised it).',
          'Lichen: <b>“Phyco Feeds, Myco Mounts”</b> (alga feeds, fungus anchors); and lichens vanish where the air is dirty.',
        ],
      },
    ],
  },
];
