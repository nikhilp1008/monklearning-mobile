import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 2 (Biological Classification), Topics 00 to 02: pp. 64 to
 * 90 of the Class 11 Biology Master Reference, word for word. The chapter title
 * page (p. 63) and the contents list at the top of p. 64 are not copied. Topic
 * 00, Classification Systems & The Five Kingdoms: The Big Picture (pp. 64–71),
 * is the chapter’s “Start here” (n '00'); Topic 01, Kingdom Monera: The World of
 * Prokaryotes (pp. 72–81), and Topic 02, Kingdom Protista: The Eukaryotic
 * Crossroads (pp. 82–90), follow. Each is cut at the book’s Sections 1 to 8.
 * Figures 2.1 (p. 66), 2.2 (p. 74), 2.3 (p. 77) and 2.4 (p. 84) are redrawn in
 * lib/diagrams/biology-11-02.ts; these pages draw nothing else. Scientific names
 * are italic as the book prints them; emphasis italics are dropped; the book’s
 * em dashes are written as colons, commas or brackets.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 00 · pp. 64–71 ─────────────────────────
  {
    n: '00',
    title: 'Classification Systems & The Five Kingdoms: The Big Picture',
    kalam:
      'There are millions of kinds of living organisms on Earth, and a working biologist could never study them one by one.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is an <b>important, frequently tested</b> part of the chapter (the book’s estimate from past papers, not official figures). NEET almost always asks about Whittaker’s classification criteria, the limitations of the two-kingdom system, or “which kingdom shows feature X” using the master comparison table; the three-domain system and the historical sequence (Aristotle → Linnaeus → Haeckel → Whittaker → Woese) appear as higher-difficulty items. CBSE Boards favour a 2–3 mark question on classification criteria or two-kingdom limitations, and the five-kingdom table is a recurring source of one-mark questions. CUET tests direct recall (who proposed what, how many kingdoms). Treat this topic as the lens through which every later kingdom is read.',
      },
      {
        t: 'p',
        html: 'There are millions of kinds of living organisms on Earth, and a working biologist could never study them one by one. So, just as a vast library is useless without a cataloguing system, biology needs a way to <b>sort life into ordered groups</b>: that is what classification is. The whole of this chapter is really one question: what are the natural “big boxes” into which all life falls, and on what basis do we draw the lines between them? Get this framework right and every later topic (Monera, Protista, Fungi, the acellular agents) slots into place as one of these boxes, and the dozens of facts you learn afterwards hang on this one organising idea instead of floating free.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine the Indian Railways trying to run without zones. With lakhs of trains, you must group them (by zone, by class, by route) or the system collapses. Taxonomy does the same for life: it groups organisms so that knowing the group tells you a great deal about the member. Tell me an organism is in “Fungi” and you already know it is a eukaryote, heterotrophic, with a chitin wall, without having seen it. That predictive power is the whole point of classification.',
      },
      {
        t: 'p',
        html: 'The idea is old. <b>Aristotle</b> made the first scientific attempt, sorting plants into herbs, shrubs and trees, and animals into those with red blood and those without: a rough early split that maps loosely onto today’s vertebrates and invertebrates. Much later, <b>Linnaeus</b> gave the <b>Two-Kingdom system</b> (every organism was either <b>Plantae</b> or <b>Animalia</b>) and this fitted neatly with the binomial naming he had already introduced. For a long time that simple two-way split was enough.',
      },
      {
        t: 'p',
        html: 'But the two-kingdom system slowly cracked under its own simplicity. It lumped together organisms that are profoundly different:<br>• It did not separate <b>prokaryotes from eukaryotes</b>: bacteria, with no true nucleus, sat in the same kingdom as flowering plants.<br>• It did not separate <b>unicellular from multicellular</b> organisms: a single-celled alga and a giant tree shared a kingdom.<br>• It did not separate <b>photosynthetic (green algae) from non-photosynthetic (fungi)</b> organisms: fungi were filed under “plants” despite having no chlorophyll, absorbing their food, and possessing a chitin (not cellulose) wall.',
      },
      {
        t: 'p',
        html: 'In other words, “Plantae” had become a dustbin for anything that wasn’t obviously an animal. Biologists patched the problem in stages: <b>Ernst Haeckel (1866)</b> added a third kingdom, <b>Protista</b>, for the microscopic in-between organisms; later workers added <b>Monera</b> for the prokaryotes (a four-kingdom scheme); until the cleanest reorganisation arrived in <b>1969, when R.H. Whittaker proposed the Five-Kingdom Classification</b>: <b>Monera, Protista, Fungi, Plantae and Animalia.</b> This single reorganisation is the backbone of the entire chapter: every kingdom you study afterwards is a “box” Whittaker defined, and every later topic is essentially a close-up on one of those boxes.',
      },
      { t: 'p', html: '<b>Limiting conditions & what to keep in mind:</b>' },
      {
        t: 'p',
        html: '• Classification systems are <b>human conveniences that evolve</b>, not fixed truths: biology has moved from two → three → four → five kingdoms (and beyond to three domains), each step fixing flaws in the last as new evidence arrived.<br>• Even the five-kingdom system is imperfect (we’ll see its weaknesses in the part Comparative characteristics and the logic of reshuffling), so don’t treat it as the final word; it is the best teaching framework, not the last word in biology.<br>• The criteria are applied together, not singly: no one feature decides a kingdom, which is why an organism that has lost (say) photosynthesis can still belong to Plantae on the strength of its other features.<br>• Viruses, viroids and lichens are <b>not</b> placed in any of the five kingdoms; they’re acellular or composite (covered in Topic 05).',
      },
      { t: 'fig', id: 'b11-02-fig-2.1' },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      { t: 'p', html: '<b>Whittaker’s five criteria</b>' },
      {
        t: 'p',
        html: 'Whittaker did not draw his lines arbitrarily: he used <b>five characteristics</b> to decide which kingdom an organism belongs to:',
      },
      {
        t: 'p',
        html: '1. <b>Cell structure</b>: whether the cell is prokaryotic (no membrane-bound nucleus, as in bacteria) or eukaryotic (a true, membrane-bound nucleus with organelles). This is the most fundamental division used in the five-kingdom system and is why Monera stands apart from every other kingdom, however else its members behave.<br>2. <b>Body organisation</b>: whether the organism is unicellular or multicellular, and if multicellular, whether it is organised at the loose cellular/thallus level (as in fungi and algae) or built into tissues, organs and organ systems (as in higher plants and animals). This is the criterion that separates a colony of cells from a true organism with a division of labour.<br>3. <b>Mode of nutrition</b>: autotrophic (making food, either photosynthetically using light or chemosynthetically by oxidising chemicals) or heterotrophic (obtaining food from others, by absorption as in saprophytes/parasites or by ingestion as in holozoic animals). This single criterion does much of the work of separating the eukaryotic kingdoms from one another.<br>4. <b>Reproduction</b>: the asexual and sexual methods an organism uses, which differ characteristically between groups and often mark a kingdom as clearly as nutrition does.<br>5. <b>Phylogenetic relationships</b>: evolutionary kinship, so that, as far as possible, members of a kingdom share common ancestry rather than just surface resemblance. This is the criterion students most often forget, yet it is what makes a classification natural rather than merely convenient.',
      },
      {
        t: 'table',
        title: 'The master comparison table (a very useful table in the chapter)',
        head: ['Character', 'Monera', 'Protista', 'Fungi', 'Plantae', 'Animalia'],
        rows: [
          ['Cell type', 'Prokaryotic', 'Eukaryotic', 'Eukaryotic', 'Eukaryotic', 'Eukaryotic'],
          [
            'Cell wall',
            'Non-cellulosic (polysaccharide + amino acid)',
            'Present in some',
            'Present (chitin/fungal)',
            'Present (cellulose)',
            '<b>Absent</b>',
          ],
          ['Nuclear membrane', '<b>Absent</b>', 'Present', 'Present', 'Present', 'Present'],
          [
            'Body organisation',
            'Cellular',
            'Cellular',
            'Multicellular / loose mycelium',
            'Tissue / organ',
            'Tissue / organ / organ-system',
          ],
          [
            'Mode of nutrition',
            'Autotrophic <b>&</b> heterotrophic',
            'Autotrophic <b>&</b> heterotrophic',
            'Heterotrophic (saprophytic/parasitic)',
            'Autotrophic (photosynthetic)',
            'Heterotrophic (holozoic)',
          ],
        ],
      },
      {
        t: 'p',
        html: 'A fast way to use this table: <b>cell type splits Monera (prokaryote) from the other four; nutrition + cell wall then separate the eukaryotic four</b>: Fungi (heterotroph, chitin wall), Plantae (autotroph, cellulose wall), Animalia (heterotroph, no wall), and Protista (the unicellular eukaryotes that don’t fit the other three). Two rows do most of the work in any exam question: <b>“nuclear membrane present?”</b> instantly isolates Monera, and <b>“how does it get food, and what is its wall made of?”</b> then sorts the rest. If you memorise nothing else from this chapter, memorise this table: a large share of the chapter’s MCQs (the book’s estimate from past papers, not official figures) are really just one row of it in disguise.',
      },
      { t: 'p', html: '<b>Beyond five kingdoms: the three domains</b>' },
      {
        t: 'p',
        html: 'Later work by <b>Carl Woese</b> showed that Kingdom Monera is itself deeply split, and proposed a <b>three-domain system</b> sitting above the kingdoms: <b>Archaea, Bacteria and Eukarya.</b> This separates archaebacteria (Archaea) from true bacteria (Bacteria), two groups that, despite both being prokaryotic, differ greatly in cell-wall and membrane chemistry, with all eukaryotes grouped together as Eukarya. It is a refinement of, not a replacement for, the kingdom idea: Eukarya holds Protista, Fungi, Plantae and Animalia, while Monera is divided between Archaea and Bacteria.',
      },

      { t: 'part', title: 'Comparative characteristics and the logic of reshuffling' },
      { t: 'p', html: '<b>How the five kingdoms reorganised life</b>' },
      {
        t: 'p',
        html: 'The real test of a classification is not how many boxes it has but whether the boxes capture something fundamental. The power of Whittaker’s scheme is best seen in what it fixed:<br>• <b>Prokaryotes were pulled out</b> of “plants/animals” into their own kingdom, <b>Monera</b>, because lacking a true nucleus is a more fundamental difference than colour, size or habit, the very features the old system relied on.<br>• <b>Single-celled eukaryotes were gathered</b> into <b>Protista</b>, ending the awkward splitting of organisms like <i>Euglena</i> (part plant because it photosynthesises, part animal because it can also ingest and move) between the old two kingdoms, where neither label ever fitted.<br>• <b>Fungi were separated from plants</b>: they have no chlorophyll, absorb their food rather than make it, and have a chitin (not cellulose) wall, so grouping them with green plants never made biological sense and persisted mainly because both are walled and non-motile.<br>• <b>Plantae and Animalia were left</b> as the multicellular autotrophs and multicellular heterotrophs respectively, now cleanly defined, because everything that didn’t belong had been removed.',
      },
      {
        t: 'p',
        html: 'The lesson is that good classification follows fundamental features (cell type, nutrition, organisation) rather than superficial ones (colour, size, habitat), and that is exactly the shift the five-kingdom system made. It is also why two organisms that look alike (say a diatom and a green alga, or a mushroom and a small plant) can sit in different kingdoms: resemblance to the eye counts for far less than the underlying cell biology and mode of nutrition.',
      },
      { t: 'p', html: '<b>Evolution of classification (a classic talking point)</b>' },
      {
        t: 'p',
        html: 'Classification has grown step by step, each stage subdividing a group that had become too broad:<br>• <b>Two kingdoms</b> (Linnaeus): Plantae and Animalia.<br>• <b>Three kingdoms</b> (Haeckel, 1866): added <b>Protista</b> for microscopic organisms that fitted neither plants nor animals.<br>• <b>Four kingdoms</b>: added <b>Monera</b> once the prokaryote/eukaryote divide was understood, pulling bacteria out of Protista.<br>• <b>Five kingdoms</b> (Whittaker, 1969): separated <b>Fungi</b> as a distinct kingdom, giving Monera, Protista, Fungi, Plantae, Animalia.<br>• <b>Three domains</b> (Woese): a higher tier that splits Monera into Archaea and Bacteria, with all eukaryotes as Eukarya.',
      },
      {
        t: 'p',
        html: 'The driving force at every step was new knowledge (above all the discovery of the prokaryote/eukaryote divide and the richness of the microbial world), revealing that the older, broader groups were hiding fundamentally different organisms inside them. Each revision did not throw away the previous one so much as subdivide it more finely: Plantae and Animalia survived from Linnaeus right through to Whittaker; what changed was that the organisms wrongly housed with them (bacteria, protists, fungi) were progressively moved into kingdoms of their own. Seeing classification as this cumulative refinement, rather than a series of replacements, is exactly the perspective high-difficulty questions reward.',
      },
      { t: 'p', html: '<b>Limitations of the five-kingdom system</b>' },
      {
        t: 'p',
        html: 'Even Whittaker’s scheme is not perfect, and examiners reward students who know its weaknesses:<br>• <b>Monera and Protista are heterogeneous</b>: each lumps together very different organisms. Monera, for instance, contains both autotrophs and heterotrophs, and both walled and wall-less forms; Protista is frankly a “leftovers” kingdom holding any single-celled eukaryote that isn’t clearly a plant, animal or fungus.<br>• <b>Some organisms are hard to place</b>: green algae like <i>Chlamydomonas</i> and <i>Chlorella</i>, or the mixotrophic <i>Euglena</i>, sit uneasily on kingdom boundaries, and different books place them differently.<br>• <b>Viruses, viroids and lichens find no place</b> in the scheme at all, because they are acellular or composite, and so sit entirely outside the kingdom system.<br>• The system also says little about the <b>evolutionary relationships</b> between kingdoms, which is one reason the later three-domain system was introduced.',
      },
      {
        t: 'p',
        html: 'None of this means the five-kingdom system is “wrong” (it remains the standard teaching framework), but a top answer always pairs the system with an honest note of its limits.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board · 3 marks',
        q: '<b>Clean recall + reasoning.</b> “State any three limitations of the two-kingdom system of classification.”',
        steps: [
          '<b>Model answer:</b> 1. It did not distinguish <b>prokaryotes from eukaryotes</b>. 2. It did not distinguish <b>unicellular from multicellular</b> organisms. 3. It grouped <b>photosynthetic organisms (green algae) with non-photosynthetic ones (fungi)</b>, placing fungi among plants despite their lack of chlorophyll and different cell wall.',
          '<b>Examiner tip:</b> frame each limitation as “failed to separate X from Y”: that phrasing maps directly onto the marking scheme, and you can generate all three from one idea (the old system grouped by appearance, not by fundamental cell biology).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET · MCQ',
        q: '<b>Direct fact recall.</b> “The Five-Kingdom system of classification was proposed by:” <b>(a)</b> Linnaeus <b>(b)</b> Aristotle <b>(c)</b> R.H. Whittaker <b>(d)</b> Carl Woese',
        steps: [
          'Whittaker proposed the five kingdoms in 1969.',
          '<b>Distractors:</b> Linnaeus gave the earlier two-kingdom system; Aristotle made the earliest morphological grouping; Woese later proposed the three domains. Sorting these four names by date is the reliable way to avoid the trap.',
        ],
        ans: '(c).',
      },
      {
        t: 'ex',
        tag: 'NEET · MCQ-with-reasoning',
        q: '<b>Using the criteria.</b> “Which one of the following was NOT a criterion used by Whittaker to delimit his five kingdoms?” <b>(a)</b> Cell structure <b>(b)</b> Mode of nutrition <b>(c)</b> The Gram-staining reaction <b>(d)</b> Phylogenetic relationships',
        steps: [
          'Whittaker’s criteria were cell structure, body organisation, mode of nutrition, reproduction and phylogenetic relationships. Gram staining is a sub-classification tool within bacteria, not a kingdom-level criterion: a tempting distractor for students who over-extend a Monera detail to the whole scheme. The safest way to defend the answer is to recite the five real criteria and notice that Gram staining is not among them.',
        ],
        ans: '(c).',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty · Assertion–Reason',
        q: '<b>Assertion (A):</b> Kingdom Monera and Kingdom Protista are considered heterogeneous assemblages. <b>Reason (R):</b> Each of these kingdoms groups together organisms that differ widely in nutrition, cell wall and body form. <b>(a)</b> Both A and R true, R is the correct explanation of A <b>(b)</b> Both A and R true, R is <b>not</b> the correct explanation of A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          'A is true (both kingdoms are criticised as heterogeneous). R is true and it explains A: it is precisely because they bundle organisms of such varied nutrition (Monera has both autotrophs and heterotrophs), wall type (walled and wall-less forms) and organisation that they are called heterogeneous. Decide A and R separately, then confirm the causal link: that is what makes this (a) rather than (b).',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the five kingdoms proposed by Whittaker, in order from simplest cell type to most complex body organisation.',
            a: 'Monera, Protista, Fungi, Plantae, Animalia.',
          },
          {
            q: '[CUET] Who gave the two-kingdom system, and what were its two kingdoms?',
            a: 'Linnaeus; Plantae and Animalia.',
          },
          {
            q: '[NEET] List the five criteria used by Whittaker for classification.',
            a: 'Cell structure, body organisation, mode of nutrition, reproduction, phylogenetic relationships.',
          },
          {
            q: '[NEET] Name the three domains of life and state which kingdom is split between two of them.',
            a: 'Archaea, Bacteria, Eukarya; Kingdom Monera is split between Archaea (archaebacteria) and Bacteria (eubacteria), while all eukaryotes fall under Eukarya. The split reflects deep differences in cell-wall and membrane chemistry between the two prokaryote groups.',
          },
          {
            q: '[NEET high-difficulty] Give two reasons why fungi were removed from Kingdom Plantae in the five-kingdom system.',
            a: 'Fungi lack chlorophyll and are heterotrophic (they absorb their food rather than make it), and their cell wall is made of chitin rather than cellulose, so on the two most fundamental criteria, nutrition and wall chemistry, they differ from green plants and could not justifiably remain in Plantae.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The most fundamental difference that justifies placing bacteria in a separate kingdom (Monera) is the absence of:',
        opts: [
          { label: 'a cell wall', nudge: '<b>(a)</b> most bacteria do have a wall (<i>Mycoplasma</i> being the famous exception): a trap for students who equate “simple cell” with “no wall”.' },
          { label: 'a true membrane-bound nucleus', nudge: null },
          { label: 'ribosomes', nudge: '<b>(c)</b> prokaryotes have ribosomes (70S): protein synthesis still has to happen.' },
          { label: 'DNA', nudge: '<b>(d)</b> all cells contain DNA: choosing (d) confuses “no nuclear membrane” with “no DNA”, which is the deepest conceptual error of the four.' },
        ],
        correct: 1,
        solution:
          'The prokaryote/eukaryote divide turns on the nuclear membrane, and it is a far more fundamental difference than colour, size or nutrition, which is exactly why Monera is set apart from the other four kingdoms.',
      },
      {
        t: 'mcq',
        q: 'Which kingdom contains organisms that may be autotrophic or heterotrophic and are all eukaryotic and largely unicellular?',
        opts: [
          { label: 'Monera', nudge: '<b>(a)</b> Monera is prokaryotic.' },
          { label: 'Protista', nudge: null },
          { label: 'Fungi', nudge: '<b>(c)</b> Fungi are exclusively heterotrophic.' },
          { label: 'Plantae', nudge: '<b>(d)</b> Plantae are mostly autotrophic and mostly multicellular.' },
        ],
        correct: 1,
        solution:
          'Protista mixes nutritional modes within single-celled eukaryotes, which is part of why it is criticised as heterogeneous.',
      },
      {
        t: 'mcq',
        q: 'In the master five-kingdom table, the only kingdom whose cell-wall entry reads “Absent” is:',
        opts: [
          { label: 'Monera', nudge: 'Monera (non-cellulosic wall), Fungi (chitin wall) and Plantae (cellulose wall) all possess walls.' },
          { label: 'Fungi', nudge: 'Monera (non-cellulosic wall), Fungi (chitin wall) and Plantae (cellulose wall) all possess walls.' },
          { label: 'Plantae', nudge: 'Monera (non-cellulosic wall), Fungi (chitin wall) and Plantae (cellulose wall) all possess walls.' },
          { label: 'Animalia', nudge: null },
        ],
        correct: 3,
        solution:
          'In the table, only Animalia has a cell-wall entry of “Absent”. So “wall absent” is the table’s cleanest Animalia marker.',
      },
      {
        t: 'mcq',
        q: 'The three-domain system differs from the five-kingdom system chiefly in that it:',
        opts: [
          { label: 'merges Plantae and Animalia', nudge: '<b>(a)</b>, <b>(c)</b> and <b>(d)</b> describe changes the three-domain system does not make. It leaves the eukaryotic kingdoms intact under Eukarya and still excludes viruses.' },
          { label: 'splits Kingdom Monera into Archaea and Bacteria', nudge: null },
          { label: 'abolishes Protista', nudge: '<b>(a)</b>, <b>(c)</b> and <b>(d)</b> describe changes the three-domain system does not make. It leaves the eukaryotic kingdoms intact under Eukarya and still excludes viruses.' },
          { label: 'adds viruses as a domain', nudge: '<b>(a)</b>, <b>(c)</b> and <b>(d)</b> describe changes the three-domain system does not make. It leaves the eukaryotic kingdoms intact under Eukarya and still excludes viruses.' },
        ],
        correct: 1,
        solution:
          'Woese’s domains separate archaebacteria (Archaea) from true bacteria (Bacteria), reflecting how deeply the two prokaryote groups differ.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Calling the two-kingdom system “wrong”.</b> It wasn’t wrong, just insufficient: it couldn’t capture prokaryotes, unicellular life, or the fungi/plant distinction, so it was refined rather than discarded.',
          '<b>Confusing kingdoms with domains.</b> Five <b>kingdoms</b> (Whittaker, 1969); three <b>domains</b> (Woese). Domains are a higher rank that sits above kingdoms: they don’t replace them.',
          '<b>Forgetting a Whittaker criterion.</b> The five are cell structure, body organisation, nutrition, reproduction and phylogeny; students most often drop “phylogenetic relationships”.',
          '<b>Treating the five kingdoms as flawless.</b> Know its limitations (heterogeneous Monera/Protista; viruses excluded; little on inter-kingdom evolution): they are often asked, often as the “odd one out” or assertion–reason.',
          '<b>Mixing up who proposed what.</b> Aristotle (first scientific grouping), Linnaeus (two kingdoms), Haeckel (added Protista), Whittaker (five kingdoms), Woese (three domains).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> To place any organism, run the table top-down: <b>(1) prokaryote? → Monera.</b> If eukaryote: <b>(2) Makes its own food with a cellulose wall → Plantae; absorbs food with a chitin wall → Fungi (yeast too, though single-celled); multicellular, ingests food, no wall → Animalia. (3) A single-celled eukaryote that fits none of these → Protista</b> (diatoms and dinoflagellates are walled and photosynthetic, yet protists). Cell type first, then nutrition + wall, then body organisation. This one decision tree answers the majority of “identify the kingdom” questions in the chapter (the book’s estimate from past papers, not official figures), and it is far more reliable than trying to recall scattered example lists.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Aristotle</b> → first scientific grouping (morphology). <b>Linnaeus</b> → Two Kingdoms (Plantae, Animalia). <b>Haeckel</b> → added Protista. <b>Whittaker</b> → five kingdoms. <b>Woese</b> → three domains.',
            note: '',
          },
          {
            f: 'Two-kingdom limits',
            note: 'no prokaryote/eukaryote, no uni/multicellular, no photosynthetic/non-photosynthetic split (fungi wrongly with plants).',
          },
          { f: 'Whittaker (1969) → Five Kingdoms', note: 'Monera, Protista, Fungi, Plantae, Animalia.' },
          {
            f: 'Five criteria',
            note: 'cell structure · body organisation · mode of nutrition · reproduction · phylogenetic relationships.',
          },
          {
            f: 'Master split',
            note: 'prokaryote → Monera; then by nutrition + wall → Plantae (autotroph, cellulose), Fungi (heterotroph, chitin), Animalia (heterotroph, no wall), Protista (unicellular eukaryote, mixed).',
          },
          { f: 'Three domains (Woese)', note: 'Archaea, Bacteria, Eukarya: splits Monera.' },
          { f: 'Five-kingdom limits', note: 'Monera & Protista heterogeneous; viruses/viroids/lichens excluded.' },
        ],
        aids: [
          'Five kingdoms in order: “<b>Monkeys Prefer Fresh Pure Apples</b>” → Monera, Protista, Fungi, Plantae, Animalia.',
          'Whittaker’s criteria: “<b>Cells Build Nutrition, Reproduce, Relate</b>” → Cell structure, Body organisation, Nutrition, Reproduction, Relationships (phylogeny).',
          'Domains: “<b>ABE</b>” → Archaea, Bacteria, Eukarya (domains sit above kingdoms).',
        ],
      },
    ],
  },
  // ───────────────────────── Topic 01 · pp. 72–81 ─────────────────────────
  {
    n: '01',
    title: 'Kingdom Monera: The World of Prokaryotes',
    kalam: 'So what actually makes something a “Moneran”? One word: prokaryotic.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Monera is a NEET favourite: expect 1–2 MCQs almost every year (the book’s estimate from past papers, not official figures), usually on archaebacteria types, <i>Mycoplasma</i>, cyanobacteria, or modes of nutrition. CBSE Boards may ask a 2–3 mark short answer on bacterial structure, nutrition, or archaebacteria. CUET leans on direct fact-recall MCQs.',
      },
      {
        t: 'p',
        html: 'Imagine you’re walking through the oldest lane of a city, say Old Delhi’s Chandni Chowk, where the buildings predate every planned colony around them. Kingdom <b>Monera</b> is biology’s version of that oldest lane: the prokaryotes were the <b>first cellular life on Earth</b>, and they’re still everywhere: in the curd setting in your kitchen, in the soil around a mango tree’s roots, in boiling hot springs, in your own gut. They are the most abundant micro-organisms and among the most metabolically diverse organisms on the planet.',
      },
      {
        t: 'p',
        html: 'So what actually makes something a “Moneran”? One word: <b>prokaryotic</b>. Think about it this way: a eukaryotic cell is like a large department store with separate, walled-off departments (a nucleus department, a mitochondria department, and so on), each sealed behind its own membrane. A prokaryotic cell is like a single-room kirana shop: everything happens in one open space. There is <b>no membrane-bound nucleus</b> and <b>no membrane-bound organelles</b> (no mitochondria, no chloroplasts, no ER). The genetic material is a single, naked, circular strand of DNA lying free in the cytoplasm, not packed inside a nuclear envelope.',
      },
      {
        t: 'p',
        html: 'Despite this “simple” architecture, don’t mistake simple for primitive-in-ability. Monerans are the great survivors. Some thrive in the harshest habitats imaginable: scalding hot springs, brine lakes, deeply anaerobic marsh mud, places where almost nothing else can live. And metabolically they are extraordinary: some cook their own food using sunlight, some by oxidising rocks and chemicals, and some simply absorb nutrients from whatever is around them.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture a street-food lane where every single stall runs on a different fuel: one on gas, one on coal, one on solar, one scavenging leftovers from the next stall. That lane is Monera’s metabolism. This is why the kingdom is so impossible to pin down with one neat rule: its members agree on cell type (prokaryotic) but disagree on almost everything else (shape, nutrition, habitat).',
      },
      {
        t: 'p',
        html: 'And here’s the part that makes Monera worth your respect: this “simplest” kingdom is the <b>ecological engine</b> the rest of life depends on. Bacteria decompose dead matter and return nutrients to the soil, fix atmospheric nitrogen into forms plants can use, and even set your dahi (curd) overnight. Without bacteria, dead matter would build up and nutrient cycles would stall. So as you study it, hold two ideas together: structurally minimal, ecologically irreplaceable.',
      },
      { t: 'p', html: '<b>Limiting conditions & what Monera is NOT (a high-yield trap):</b>' },
      {
        t: 'p',
        html: '• Monera is <b>not</b> “all microbes.” Fungi, protozoa, and many algae are microscopic but <b>eukaryotic</b>, so they sit in other kingdoms. Being tiny does not make something a Moneran; being prokaryotic does.<br>• <b>Viruses are not Monera.</b> They are <b>acellular</b> (no cell at all), just a nucleic acid core in a protein coat, so they don’t belong to any of the five kingdoms. They’re handled as a separate topic in this chapter.<br>• The five-kingdom rule places only prokaryotes in Monera. The moment a true membrane-bound nucleus appears, the organism leaves this kingdom.',
      },
      { t: 'fig', id: 'b11-02-fig-2.2' },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      {
        t: 'p',
        html: 'In Whittaker’s <b>five-kingdom system</b>, Monera is the kingdom that collects every prokaryote. Within Monera, the deepest split is between <b>Archaebacteria</b> and <b>Eubacteria</b> (“true bacteria”).',
      },
      {
        t: 'table',
        title: 'Diagnostic table: Archaebacteria vs Eubacteria',
        head: ['Feature', 'Archaebacteria', 'Eubacteria'],
        rows: [
          ['Habitat', 'Extreme / harsh habitats', 'Everywhere, including ordinary environments'],
          [
            'Cell wall',
            '<b>No peptidoglycan</b>; wall of protein and non-cellulosic polysaccharides (pseudomurein in some methanogens)',
            '<b>Peptidoglycan (murein)</b> present (absent in <i>Mycoplasma</i>, which has no wall)',
          ],
          ['Membrane lipids', '<b>Branched-chain lipids</b> → resist heat & low pH', 'Straight-chain (unbranched) lipids'],
          [
            'Examples',
            'Methanogens, Halophiles, Thermoacidophiles',
            'Cyanobacteria, <i>Bacillus</i>, <i>Clostridium</i>, <i>Mycoplasma</i>',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>The three archaebacteria you must know</b><br>• <b>Methanogens</b>: live in anaerobic spots (marshes, the gut of ruminants like cows and buffaloes) and produce <b>methane (biogas)</b>.<br>• <b>Halophiles</b>: live in extreme salt (brine pans, salt lakes).<br>• <b>Thermoacidophiles</b>: live in hot and acidic places (sulphur springs).',
      },
      {
        t: 'table',
        title: 'Bacterial shapes (Eubacteria)',
        head: ['Shape name', 'Form'],
        rows: [
          ['<b>Coccus</b>', 'Spherical'],
          ['<b>Bacillus</b>', 'Rod-shaped'],
          ['<b>Vibrio</b>', 'Comma-shaped'],
          ['<b>Spirillum</b>', 'Spiral / coiled'],
        ],
      },
      {
        t: 'p',
        html: '<b>Cyanobacteria (Blue-Green Algae, BGA)</b> are eubacteria, <b>not</b> algae despite the old name. They are prokaryotic, have a <b>peptidoglycan wall and naked DNA</b>, and crucially <b>possess chlorophyll</b> (chlorophyll <i>a</i>), so they are photosynthetic, whereas ordinary heterotrophic bacteria lack chlorophyll. They may be unicellular, colonial or filamentous, and many are wrapped in a gelatinous sheath. Filamentous forms such as <i>Nostoc</i> and <i>Anabaena</i> fix atmospheric nitrogen inside specialised thick-walled cells called <b>heterocysts</b>, which makes them prized as natural biofertilisers in paddy fields. When nutrients run high in stagnant water they multiply explosively into <b>algal blooms</b> that can poison the water.',
      },
      { t: 'p', html: '<b>Gram-positive vs Gram-negative (a staining-based grouping of eubacteria)</b>' },
      { t: 'p', html: 'The Gram stain sorts true bacteria by how their cell wall holds a violet dye:' },
      {
        t: 'table',
        title: null,
        head: ['', 'Gram-positive', 'Gram-negative'],
        rows: [
          ['Peptidoglycan layer', 'Thick', 'Thin'],
          ['Outer membrane', 'Absent', 'Present'],
          ['Stain retained', 'Violet', 'Pink (counterstain)'],
          ['Example', '<i>Bacillus</i>', '<i>E. coli</i>'],
        ],
      },
      { t: 'p', html: 'A handy exam hook: <b>“Positive = thick peptidoglycan, stays violet.”</b>' },
      {
        t: 'table',
        title: 'Modes of nutrition',
        head: ['Nutrition', 'How energy/carbon is obtained', 'Example'],
        rows: [
          ['<b>Photoautotrophic</b>', 'Light + CO<sub>2</sub>', 'Cyanobacteria'],
          [
            '<b>Chemoautotrophic</b>',
            'Oxidising inorganic substances (NH<sub>3</sub>, NO<sub>2</sub><sup>−</sup>, Fe, S) for energy; major role in <b>recycling N, P, Fe, S</b>',
            'Nitrifying bacteria',
          ],
          ['<b>Saprophytic (heterotroph)</b>', 'Absorbs nutrients from dead organic matter', 'Most soil bacteria'],
          ['<b>Parasitic / Symbiotic</b>', 'Lives in/on a host', '<i>Rhizobium</i> (symbiotic N-fixer)'],
        ],
      },

      { t: 'part', title: 'Comparative characteristics and reproduction' },
      {
        t: 'p',
        html: 'Prokaryotes have <b>no alternation of generations</b> (that concept belongs to plants and algae); they are haploid and reproduce mostly asexually. So this section maps the bacterial <b>cell architecture</b> and its <b>reproductive and gene-transfer machinery</b>.',
      },
      { t: 'p', html: '<b>3.1 Bacterial cell structure: the open-plan cell</b>' },
      {
        t: 'p',
        html: 'Working from outside in:<br>• <b>Capsule / slime layer</b>: a sticky outer coat (in many bacteria) giving protection and helping attachment.<br>• <b>Cell wall</b>: rigid, made of <b>peptidoglycan</b> in eubacteria; gives shape and prevents bursting.<br>• <b>Plasma membrane</b>: selectively permeable; folds inward to form the <b>mesosome</b>, an extension that helps in respiration, cell-wall formation, DNA replication and equal distribution of DNA to daughter cells. The mesosome is a <b>prokaryotic</b> feature (a classic trap is to call it eukaryotic). Some electron-microscopy work suggests mesosomes may be artefacts of specimen preparation, but NCERT teaches them as described here.<br>• <b>Nucleoid</b>: the single, naked, circular DNA molecule; <b>no nuclear membrane</b>.<br>• <b>Plasmid</b>: small extra circular DNA carrying accessory genes (e.g., antibiotic resistance).<br>• <b>70S ribosomes</b>: sites of protein synthesis. Note the contrast: prokaryotes have <b>70S</b> ribosomes, eukaryotes <b>80S</b>: a favourite one-mark discriminator.<br>• <b>Surface appendages</b>: <b>flagellum</b> for motility; <b>fimbriae</b> for attachment to surfaces/host; <b>pili</b> (sex pili) for conjugation, used to transfer the <b>F (fertility) factor</b> from a donor to a recipient cell.',
      },
      { t: 'fig', id: 'b11-02-fig-2.3' },
      { t: 'p', html: '<b>3.2 Reproduction</b>' },
      {
        t: 'p',
        html: '• <b>Asexual reproduction (the main route): binary fission</b>: the cell copies its DNA and splits into two identical daughter cells. Under favourable conditions this is extremely rapid.<br>• <b>Under unfavourable conditions:</b> some (e.g., <i>Bacillus</i>, <i>Clostridium</i>) form <b>endospores</b>: tough, dormant, highly resistant structures that survive heat, drought and chemicals, then germinate when conditions improve.',
      },
      { t: 'p', html: '<b>3.3 “Primitive sexual reproduction”: gene transfer without gametes</b>' },
      {
        t: 'p',
        html: 'Bacteria have no eggs or sperm, yet they shuffle genes. NCERT describes this as a primitive type of DNA transfer, “a sort of sexual reproduction”. There are <b>three</b> mechanisms, and the distinguishing logic is how the DNA travels:',
      },
      {
        t: 'table',
        title: null,
        head: ['Mechanism', 'How DNA moves', 'Tell-tale clue'],
        rows: [
          ['<b>Conjugation</b>', 'Cell-to-cell contact via a <b>pilus</b>; F factor passes donor → recipient', 'A bridge/pilus between two cells'],
          ['<b>Transformation</b>', 'Cell takes up <b>naked DNA</b> released into the surroundings', 'No vector, no contact'],
          ['<b>Transduction</b>', 'DNA carried in by a <b>bacteriophage (virus)</b>', 'A virus is the courier'],
        ],
      },
      {
        t: 'p',
        html: 'The pay-off of all three is <b>genetic recombination</b>: new gene combinations that drive the metabolic diversity Monera is famous for.',
      },
      { t: 'p', html: '<b>3.4 Ecological & economic significance</b>' },
      {
        t: 'p',
        html: '<b>Beneficial roles</b><br>• <b>Decomposers / nutrient recyclers:</b> saprophytic bacteria break down dead organisms and return carbon, nitrogen and minerals to the soil, the base of every nutrient cycle.<br>• <b>Nitrogen fixation:</b> symbiotic <i>Rhizobium</i> (in legume root nodules) and free-living/cyanobacterial fixers (<i>Azotobacter, Anabaena, Nostoc</i>) convert atmospheric N<sub>2</sub> into plant-usable forms, naturally enriching soil fertility.<br>• <b>Chemosynthetic recycling:</b> chemoautotrophs oxidise inorganic compounds and in the process recycle nitrogen, phosphorus, iron and sulphur.<br>• <b>Food & dairy:</b> <i>Lactobacillus</i> (lactic acid bacteria) curdles milk into dahi and improves its nutritional value; bacteria are central to cheese and fermented foods.<br>• <b>Biogas & antibiotics:</b> methanogens generate biogas; certain bacteria (e.g., <i>Streptomyces</i>) are sources of antibiotics.',
      },
      {
        t: 'p',
        html: '<b>Harmful roles</b><br>• <b>Disease:</b> pathogenic bacteria cause cholera, typhoid, tuberculosis, tetanus and many plant diseases (e.g., citrus canker).<br>• <b>Spoilage:</b> bacteria spoil food, milk and stored grain.',
      },
      {
        t: 'p',
        html: 'The same kingdom, then, is both farmer’s friend and farmer’s foe, which is exactly why classification matters: knowing which prokaryote you’re dealing with tells you whether to culture it or kill it.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board · 3 marks',
        q: '<b>Clean short-answer technique.</b> “Give any three features that distinguish archaebacteria from eubacteria.”',
        steps: [
          '<b>How to answer for full marks (pick clearly contrasting features and pair them):</b> 1. <b>Cell wall:</b> Archaebacteria lack peptidoglycan; eubacteria have a peptidoglycan wall. 2. <b>Membrane lipids:</b> Archaebacteria have branched-chain lipids that resist heat and low pH; eubacteria have unbranched lipids. 3. <b>Habitat:</b> Archaebacteria typically occupy extreme habitats (hot springs, salt lakes, marshes); eubacteria are widespread, including ordinary environments.',
          '<b>Examiner tip:</b> present as paired contrasts, not two separate lists: that’s what earns the comparison marks. If the question carries an extra mark, add a fourth contrast: archaebacteria are typically extremophiles of harsh habitats, whereas eubacteria dominate everyday habitats including the human body and soil.',
          '<b>Common follow-up (be ready):</b> “On what basis are bacteria grouped by nutrition?” Autotrophic bacteria make their own food (photosynthetic, e.g. cyanobacteria; or chemosynthetic, oxidising inorganic substances), while heterotrophic bacteria depend on others (saprophytic on dead matter, or parasitic/symbiotic on a host). State the two-way autotroph/heterotroph split first, then sub-divide: markers reward that logical structure.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET · MCQ',
        q: '<b>Direct fact, fast elimination.</b> “The smallest living cells, which completely lack a cell wall and are therefore unaffected by penicillin, are:” <b>(a)</b> Cyanobacteria <b>(b)</b> Methanogens <b>(c)</b> <i>Mycoplasma</i> <b>(d)</b> Heterotrophic bacteria',
        steps: [
          '<b>Reasoning chain:</b> “smallest” + “no cell wall” both point to <i>Mycoplasma</i>. Penicillin works by blocking cell-wall synthesis; with no wall to target, <i>Mycoplasma</i> simply ignores it.',
        ],
        ans: '(c).',
      },
      {
        t: 'ex',
        tag: 'NEET · MCQ-with-reasoning',
        q: '<b>Match the property to the group.</b> “Which one correctly pairs an organism group with its diagnostic property?” <b>(a)</b> Cyanobacteria: lack chlorophyll <b>(b)</b> Methanogens: produce methane in anaerobic conditions <b>(c)</b> <i>Mycoplasma</i>: possess the thickest peptidoglycan wall <b>(d)</b> Halophiles: live in boiling acidic springs',
        steps: [
          'Methanogens are archaebacteria of marshy/anaerobic habitats and the guts of ruminants, generating methane (biogas).',
          '(a) is false: cyanobacteria have chlorophyll; (c) is false: <i>Mycoplasma</i> have no wall; (d) describes thermoacidophiles, not halophiles.',
        ],
        ans: '(b).',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty · Assertion–Reason',
        q: '<b>Assertion (A):</b> <i>Mycoplasma</i> can survive and cause disease even when treated with penicillin. <b>Reason (R):</b> <i>Mycoplasma</i> lack a cell wall. <b>(a)</b> Both A and R true, R is the correct explanation of A <b>(b)</b> Both A and R true, R is <b>not</b> the correct explanation of A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          'A is true (<i>Mycoplasma</i> resist penicillin). R is true (they have no cell wall). And R <b>explains</b> A: penicillin acts by inhibiting cell-wall synthesis, so an organism with no wall is intrinsically unaffected. The causal link is exactly what makes this (a) and not (b).',
          '<b>Technique for any assertion–reason item:</b> decide the truth of A and R <b>separately first</b>, and only then ask the harder question: “does R actually cause A?” Most students get both statements right but lose the mark by skipping that second step and guessing between (a) and (b). Here the chain is mechanistic and tight (no wall → nothing for penicillin to attack → resistance), so R is a genuine explanation, not a coincidental true fact sitting next to A.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define a prokaryote and name the kingdom to which all prokaryotes belong.',
            a: 'A cell lacking a membrane-bound nucleus and membrane-bound organelles; Kingdom <b>Monera</b>.',
          },
          {
            q: '[CUET] Name the three groups of archaebacteria and give one habitat for each.',
            a: 'Methanogens (marshes/ruminant gut), Halophiles (salt lakes), Thermoacidophiles (hot acidic springs).',
          },
          {
            q: '[NEET] Why are cyanobacteria classified under Monera and not under plants or algae? Give two reasons.',
            a: 'Prokaryotic cell type + peptidoglycan wall and naked DNA (no true nucleus) → Monera, despite having chlorophyll.',
          },
          {
            q: '[NEET] Distinguish between conjugation, transformation and transduction in one line each.',
            a: 'Conjugation = DNA via pilus contact; Transformation = uptake of naked DNA; Transduction = DNA carried by a bacteriophage.',
          },
          {
            q: '[NEET high-difficulty] “Chemosynthetic autotrophic bacteria are ecologically important even though they don’t photosynthesise.” Justify with reference to nutrient recycling.',
            a: 'They oxidise inorganic compounds (NH<sub>3</sub>, NO<sub>2</sub><sup>−</sup>, Fe, S) for energy and in doing so <b>recycle nitrogen, phosphorus, iron and sulphur</b>, keeping these nutrients available to the rest of the ecosystem. Without this chemosynthetic recycling, key minerals would stay locked in unusable inorganic forms and plant productivity would collapse, so their ecological value is independent of whether they photosynthesise.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A prokaryotic cell is best defined by the absence of:',
        opts: [
          { label: 'a cell wall', nudge: '<b>(a)</b> most prokaryotes do have a wall (<i>Mycoplasma</i> being the famous exception): a trap for students who equate “simple cell” with “no wall”.' },
          { label: 'a membrane-bound nucleus', nudge: null },
          { label: 'ribosomes', nudge: '<b>(c)</b> prokaryotes definitely have ribosomes (70S): protein synthesis still has to happen.' },
          { label: 'DNA', nudge: '<b>(d)</b> all cells contain DNA: choosing (d) confuses “no nuclear membrane” with “no DNA”, which is the deepest conceptual error of the four.' },
        ],
        correct: 1,
        solution:
          'The single defining absence is the nuclear membrane (and, by extension, all membrane-bound organelles). Everything else a prokaryote may or may not have, but the missing nuclear envelope is non-negotiable.',
      },
      {
        t: 'mcq',
        q: 'Which feature is shared by both cyanobacteria and ordinary bacteria?',
        opts: [
          { label: 'Presence of chlorophyll', nudge: '<b>(a)</b> only cyanobacteria have chlorophyll <i>a</i>; other photosynthetic bacteria have bacteriochlorophyll, and most ordinary bacteria have none: a common trap here.' },
          { label: 'Aerobic respiration in all members', nudge: '<b>(b)</b> overgeneralises respiration.' },
          { label: 'Absence of a true (membrane-bound) nucleus', nudge: null },
          { label: 'Eukaryotic organisation', nudge: '<b>(d)</b> is simply wrong (both are prokaryotic).' },
        ],
        correct: 2,
        solution: 'Both are prokaryotic, so both lack a true nucleus.',
      },
      {
        t: 'mcq',
        q: 'Branched-chain membrane lipids and a peptidoglycan-free wall are characteristic of:',
        opts: [
          { label: 'Cyanobacteria', nudge: '<b>(a)</b> and <b>(d)</b> are eubacteria and do contain peptidoglycan, so the “peptidoglycan-free” clue rules them out immediately.' },
          { label: 'Archaebacteria', nudge: null },
          { label: '<i>Mycoplasma</i>', nudge: '<b>(c)</b> <i>Mycoplasma</i> has no wall at all, and its membrane does not have the branched lipids of archaebacteria.' },
          { label: 'Heterotrophic eubacteria', nudge: '<b>(a)</b> and <b>(d)</b> are eubacteria and do contain peptidoglycan, so the “peptidoglycan-free” clue rules them out immediately.' },
        ],
        correct: 1,
        solution:
          'Both clues are archaebacterial signatures: branched lipids and a peptidoglycan-free wall are precisely the adaptations that let archaebacteria survive extreme heat, salt and acidity. Reading the clue precisely is what separates (b) from (c).',
      },
      {
        t: 'mcq',
        q: 'The transfer of the F (fertility) factor from one bacterium to another occurs through:',
        opts: [
          { label: 'Fimbriae', nudge: '<b>(a)</b> fimbriae are for attachment, not gene transfer: the most common mix-up.' },
          { label: 'Mesosome', nudge: '<b>(b)</b> mesosomes are membrane infoldings for respiration/replication.' },
          { label: 'Pili', nudge: null },
          { label: 'Capsule', nudge: '<b>(d)</b> the capsule is a protective coat.' },
        ],
        correct: 2,
        solution: 'Sex pili form the conjugation bridge that carries the F factor.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Treating “microbe” and “Moneran” as synonyms.</b> Fungi and protozoa are microbes too, but they’re eukaryotic. Check cell type, not size.',
          '<b>Forgetting cyanobacteria have chlorophyll.</b> Students assume “bacteria = no chlorophyll” and wrongly extend it to cyanobacteria. Cyanobacteria are the main photosynthetic eubacteria with chlorophyll <i>a</i>.',
          '<b>Swapping archaebacterial habitats.</b> Methanogen = anaerobic marsh/gut; halophile = salt; thermoacidophile = hot + acid. Mixing these up costs easy NEET marks.',
          '<b>Pili vs fimbriae.</b> Pili = sex/conjugation (gene transfer); fimbriae = attachment.',
          '<b>Mis-reading the Gram result.</b> “Gram-positive = retains the violet stain = thick peptidoglycan.” Students who memorise the colours without the wall logic flip the two under exam pressure. Anchor it to the wall, not the colour.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any Monera MCQ, run two quick filters in your head: “Prokaryote? Wall present?” Those two questions alone separate <i>Mycoplasma</i> (no wall), archaebacteria (no peptidoglycan), and ordinary eubacteria (peptidoglycan), and they kill most distractors in under five seconds.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Defining trait',
            note: 'prokaryotic: no membrane-bound nucleus or organelles; naked circular DNA; 70S ribosomes (vs 80S in eukaryotes).',
          },
          {
            f: 'Two groups',
            note: 'Archaebacteria (no peptidoglycan, branched lipids, extreme habitats) | Eubacteria (peptidoglycan wall; includes cyanobacteria).',
          },
          {
            f: 'Three archaea',
            note: '<b>M</b>ethanogens (methane/biogas), <b>H</b>alophiles (salt), <b>T</b>hermoacidophiles (hot + acid).',
          },
          { f: 'Shapes', note: 'Coccus (sphere), Bacillus (rod), Vibrio (comma), Spirillum (spiral).' },
          { f: 'Nutrition', note: 'photoautotroph, chemoautotroph (recycles N, P, Fe, S), saprophyte, parasite/symbiont.' },
          {
            f: 'Special cases',
            note: '<i>Mycoplasma</i> = smallest, <b>no cell wall</b>, penicillin-resistant; Cyanobacteria = prokaryote <b>with chlorophyll</b>.',
          },
          {
            f: 'Reproduction',
            note: 'binary fission (main); endospores in bad conditions; gene transfer by <b>conjugation / transformation / transduction</b>.',
          },
        ],
        aids: [
          'Archaea habitats: “<b>Hot, Salty, Marshy</b>” → Thermoacidophile, Halophile, Methanogen.',
          'Gene transfer: “<b>Contact, Catch, Courier</b>” → Conjugation (contact), Transformation (catch naked DNA), Transduction (phage courier).',
          '<i>Mycoplasma</i>: “<b>No wall, no worry from penicillin.</b>”',
        ],
      },
    ],
  },
  // ───────────────────────── Topic 02 · pp. 82–90 ─────────────────────────
  {
    n: '02',
    title: 'Kingdom Protista: The Eukaryotic Crossroads',
    kalam: 'Kingdom Protista is biology’s junction.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Protista is a high-yield topic in the chapter for NEET: expect 1–2 MCQs almost every year (the book’s estimate from past papers, not official figures), very often on diatoms, dinoflagellates, <i>Euglena</i>, or the four protozoan classes (and a steady stream of assertion–reason questions). NEET items often test fine discriminations (silica vs cellulose walls, mixotrophy in <i>Euglena</i>, or which group causes red tides), so precise group features matter more than broad definitions here. CBSE Boards favour a 2–3 mark question on the distinguishing features of a named group. CUET leans on direct one-fact recall.',
      },
      {
        t: 'p',
        html: 'Picture a great railway junction, an Itarsi or a Mughalsarai, where lines coming from completely different directions all meet, exchange passengers, and head off again. Kingdom <b>Protista</b> is biology’s junction. It sits right at the crossroads of the living world: some of its members behave like tiny plants, some like tiny animals, and some like tiny fungi. That is exactly why it is described as the <b>link between the prokaryotes (Monera) on one side and the complex plants, animals and fungi on the other.</b>',
      },
      {
        t: 'p',
        html: 'So what unites this ragtag crowd? Two non-negotiables: every protist is a <b>eukaryote</b> (it has a true, membrane-bound nucleus and membrane-bound organelles), and almost all are <b>single-celled</b>. And the third near-universal trait: they are <b>primarily aquatic</b>: you’ll find them in ponds, puddles, the sea, damp soil, and even inside other organisms.',
      },
      {
        t: 'p',
        html: 'This is the kingdom’s whole personality. Monera (Topic 01) was the kingdom of the prokaryote: one open room, no nucleus. The moment a cell builds a proper walled nucleus and organelles but is still a loner (a single cell doing everything for itself) it lands in Protista.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine the difference between a street vendor with a one-room kirana shop (Monera: single room, no internal walls) and a self-employed professional working alone but out of a fully-fitted office with separate cabins for filing, accounts and storage (Protista: one worker, but proper internal compartments). Same “one-person business”, completely different internal organisation. That internal organisation, the nucleus and organelles, is the upgrade that defines this kingdom.',
      },
      {
        t: 'p',
        html: 'Because protists hedge their bets between plant, animal and fungal lifestyles, their <b>nutrition is among the most varied of any kingdom</b>: some are photoautotrophs (make food by photosynthesis), some are heterotrophs (eat or absorb others), and some are <b>mixotrophs</b> that switch between the two depending on conditions.',
      },
      {
        t: 'p',
        html: 'This very diversity is also the kingdom’s weakness as a category. When Whittaker carved out the five kingdoms, Protista became the place to put every eukaryote that wasn’t clearly a plant, animal or fungus, a “leftovers drawer” of single-celled life. The result is a group whose members range from drifting marine diatoms to flexible <i>Euglena</i> to the malaria parasite, sharing little beyond being single eukaryotic cells. Keep that in mind as you study: you are learning a set of loosely related groups, not one tidy family, which is exactly why the syllabus tests them group-by-group rather than as a whole.',
      },
      { t: 'p', html: '<b>Limiting conditions & traps to watch:</b>' },
      {
        t: 'p',
        html: '• <b>“Single-celled eukaryote” is the test, not “small.”</b> Bacteria are also tiny and aquatic, but they’re prokaryotic, so they’re Monera, not Protista.<br>• <b>The kingdom is famously “ill-defined.”</b> Even examiners acknowledge Protista is the messiest, least natural of Whittaker’s five kingdoms: its members are grouped more by what they are not (not prokaryotes, not multicellular) than by a clean shared ancestry. This is why some organisms drift between kingdoms in different textbooks and exam keys, so always answer with the framing your syllabus (NCERT) uses rather than chasing every alternative scheme.<br>• Don’t force “alternation of generations” onto protists: that’s a plant concept. Some protists are haploid and some diploid, and only a few (such as slime moulds) show a haploid–diploid life cycle.',
      },
      { t: 'fig', id: 'b11-02-fig-2.4' },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      {
        t: 'table',
        title: 'Where Protista sits among the five kingdoms',
        head: ['Character', 'Monera', 'Protista', 'Fungi/Plantae/Animalia'],
        rows: [
          ['Cell type', 'Prokaryotic', '<b>Eukaryotic</b>', 'Eukaryotic'],
          ['Nuclear membrane', 'Absent', '<b>Present</b>', 'Present'],
          ['Body', 'Mostly unicellular', '<b>Mostly unicellular</b>', 'Mostly multicellular'],
          ['Nutrition', 'Auto- & heterotrophic', '<b>Photo-, hetero- & mixotrophic</b>', 'Varies by kingdom'],
        ],
      },
      {
        t: 'p',
        html: 'Whittaker built the five kingdoms on five criteria: <b>cell structure, body organisation, mode of nutrition, reproduction and phylogenetic relationships.</b>',
      },
      {
        t: 'table',
        title: 'The protist groups at a glance (a table examiners often test)',
        head: ['Group', 'Lifestyle', 'Cell wall / covering', 'Flagella', 'Stored food', 'Examples'],
        rows: [
          [
            '<b>Chrysophytes</b> (diatoms, desmids/golden algae)',
            'Plant-like',
            'Silica-embedded wall (“two soap-box halves”); <b>indestructible</b>',
            '–',
            'Chrysolaminarin & oil',
            'Diatoms, desmids',
          ],
          [
            '<b>Dinoflagellates</b>',
            'Plant-like',
            'Stiff <b>cellulose plates</b> (theca)',
            '<b>Two</b> (one longitudinal, one transverse)',
            'Starch & oil',
            '<i>Gonyaulax</i>, <i>Noctiluca</i>',
          ],
          [
            '<b>Euglenoids</b>',
            'Plant-like / mixotroph',
            '<b>No wall</b>; protein <b>pellicle</b>',
            'Two (one long, one short)',
            '<b>Paramylon</b> & fat',
            '<i>Euglena</i>',
          ],
          [
            '<b>Slime moulds</b>',
            'Fungus-like',
            'Wall-less when feeding; walled spores',
            '–',
            '–',
            '<i>Physarum</i> (acellular slime mould)',
          ],
          [
            '<b>Protozoans</b>',
            'Animal-like (all heterotrophic)',
            'Mostly no wall',
            'Group-dependent',
            '–',
            '<i>Amoeba</i>, <i>Paramecium</i>, <i>Trypanosoma</i>, <i>Plasmodium</i>',
          ],
        ],
      },
      {
        t: 'p',
        html: 'A quick diagnostic logic to identify a group from a description: <b>wall material is the giveaway.</b> Silica → chrysophyte; cellulose plates → dinoflagellate; no wall but a flexible pellicle → euglenoid; no wall and “animal-like feeding” → protozoan; crawling over rotting leaves → slime mould. If the question gives a stored-food clue instead of a wall clue, use the stored-food column of the table above: chrysolaminarin signals a diatom, paramylon signals a euglenoid, and starch signals a dinoflagellate. Between them, “covering” and “stored food” resolve almost every plant-like-protist identification question, and the locomotory organ resolves the protozoan ones, so it is worth committing both columns to memory rather than the example names alone.',
      },

      { t: 'part', title: 'Comparative characteristics and reproduction' },
      { t: 'p', html: '<b>3.1 The three “lifestyles” inside one kingdom</b>' },
      {
        t: 'p',
        html: 'Protists are best understood by how they make a living:<br>• <b>Plant-like (algal) protists</b>: photosynthetic: chrysophytes, dinoflagellates, euglenoids.<br>• <b>Animal-like protists (protozoa)</b>: ingestive heterotrophs: the four protozoan classes.<br>• <b>Fungus-like protists</b>: saprophytic (they feed on decaying matter by engulfing it): slime moulds.',
      },
      {
        t: 'p',
        html: 'This three-way split is a very useful mental scaffold for the whole topic: nearly every exam question is really asking “which lifestyle, and then which group within it?” Fix the lifestyle first (does it photosynthesise, hunt, or feed on decaying matter?) and you have already narrowed the answer to one of three branches before you look at any fine detail.',
      },
      { t: 'p', html: '<b>3.2 The plant-like protists in detail</b>' },
      {
        t: 'p',
        html: '• <b>Chrysophytes</b> include <b>diatoms</b> and <b>desmids</b> (golden algae). (Desmids are strictly green algae, but NCERT lists them here.) They are microscopic and <b>float passively as plankton</b>, and are the <b>chief producers in the oceans</b>. The diatom wall is embedded with <b>silica</b>, so it is virtually indestructible; the two halves fit together like the lid and base of a soap box. Their intricately patterned, glass-like walls have earned diatoms the nickname “jewels of the sea”. Because they sit at the base of aquatic food chains and photosynthesise in vast numbers, diatoms are responsible for a substantial share of the planet’s oxygen. Over millions of years their walls pile up into deposits called <b>‘diatomaceous earth’</b>, used in polishing and in the filtration of oils and syrups.<br>• <b>Dinoflagellates</b> are mostly <b>marine and photosynthetic</b>, with stiff <b>cellulose plates</b> on the outside and <b>two flagella</b> (one lying longitudinally, one transversely in a groove). The cellulose plates fit together like overlapping armour, and the perpendicular beat of the two flagella makes the cell spin as it swims. They appear yellow, green, brown, blue or red depending on their pigments. When they multiply rapidly they cause <b>red tides</b> (e.g., <i>Gonyaulax</i>) and may release <b>toxins</b> that kill marine life; some are <b>bioluminescent</b> (e.g., <i>Noctiluca</i>, a mostly heterotrophic dinoflagellate): the eerie “sea sparkle” sometimes seen glowing blue along Indian coastlines at night is a <i>Noctiluca</i> bloom.<br>• <b>Euglenoids</b> (e.g., <i>Euglena</i>) lack a cell wall; instead a protein-rich <b>pellicle</b> makes the body flexible. They are the classic <b>mixotrophs</b>: photosynthetic in sunlight, but in its absence they feed heterotrophically like animals. They store the carbohydrate <b>paramylon</b>, possess a gullet, and swim using two flagella (one long, one short) while a light-sensitive eyespot helps them orient toward light: a neat illustration of why <i>Euglena</i> is described as standing “between plant and animal”.',
      },
      { t: 'p', html: '<b>3.3 The fungus-like protists</b>' },
      {
        t: 'p',
        html: '<b>Slime moulds</b> are <b>saprophytic</b> protists whose body creeps over decaying twigs and leaves, engulfing organic matter. Under suitable conditions the body aggregates into a structure called a <b>plasmodium</b>; under unfavourable conditions it forms fruiting bodies bearing <b>resistant spores</b> that disperse by air. Their life cycle includes both <b>haploid and diploid</b> phases; they’re nicknamed “protistan fungi” because they resemble both protozoa and true fungi.',
      },
      { t: 'p', html: '<b>3.4 The animal-like protists (Protozoa): four classes</b>' },
      {
        t: 'p',
        html: 'All protozoans are heterotrophs (predators or parasites), classified by their <b>locomotory structure</b>:',
      },
      {
        t: 'table',
        title: null,
        head: ['Class', 'Locomotion', 'Key features', 'Example'],
        rows: [
          ['<b>Amoeboid</b>', 'Pseudopodia', 'Marine forms bear <b>silica shells</b>; some parasitic', '<i>Amoeba</i>, <i>Entamoeba</i>'],
          ['<b>Flagellated</b>', 'Flagella', 'Free-living <b>or</b> parasitic', '<i>Trypanosoma</i> (sleeping sickness)'],
          [
            '<b>Ciliated</b>',
            'Cilia',
            'Actively moving; a <b>gullet</b> opens to the surface; water current sweeps food in',
            '<i>Paramecium</i>',
          ],
          [
            '<b>Sporozoan</b>',
            '(Gliding)',
            'Have an <b>infectious spore-like stage</b> in the life cycle',
            '<i>Plasmodium</i> (malaria)',
          ],
        ],
      },
      {
        t: 'p',
        html: 'Two recurring details examiners exploit: freshwater protozoans use a <b>contractile vacuole</b> for osmoregulation, and <i>Paramecium</i> carries <b>two types of nuclei</b>. A little extra colour on each class: <i>Amoeba</i> engulfs prey by phagocytosis with its pseudopodia, while its relative <i>Entamoeba</i> is a gut parasite; <i>Trypanosoma</i> is the flagellate behind African <b>sleeping sickness</b>; <i>Paramecium</i> drives a steady water current with its cilia to sweep food into the gullet; and <i>Plasmodium</i> is the sporozoan responsible for <b>malaria</b>.',
      },
      { t: 'p', html: '<b>3.5 Reproduction</b>' },
      {
        t: 'p',
        html: 'Protists reproduce both <b>asexually</b> (by <b>binary fission</b> (e.g., <i>Euglena</i>) and <b>cyst formation</b> (e.g., <i>Entamoeba</i>), also budding and sporulation) and <b>sexually</b>, by <b>cell fusion and zygote formation</b> (syngamy and conjugation).',
      },
      { t: 'p', html: '<b>3.6 Ecological & economic significance</b>' },
      {
        t: 'p',
        html: 'Protists punch far above their microscopic weight:<br>• <b>Oxygen & food chains:</b> photosynthetic protists, especially diatoms and dinoflagellates, form the bulk of marine <b>phytoplankton</b>, generating a large fraction of atmospheric oxygen and forming the base of aquatic food webs.<br>• <b>Diatomaceous earth:</b> the silica walls accumulate into deposits used in polishing, and in the filtration of oils and syrups; it is also used industrially as an abrasive and filtering agent.<br>• <b>Decomposition:</b> slime moulds recycle nutrients by breaking down decaying plant litter.<br>• <b>Disease (the harmful side):</b> several protozoans are serious pathogens: <i>Plasmodium</i> causes <b>malaria</b>, <i>Trypanosoma</i> causes <b>sleeping sickness</b>, and <i>Entamoeba</i> causes amoebic dysentery (amoebiasis). These remain major public-health concerns in tropical regions, including parts of India.<br>• <b>Red tides:</b> toxin-producing dinoflagellate blooms can poison fish and shellfish, causing large marine die-offs, and can make shellfish unsafe to eat.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board · 3 marks',
        q: '<b>Clean comparison technique.</b> “List any three features that distinguish euglenoids from dinoflagellates.”',
        steps: [
          '<b>Model answer (pair the contrasts):</b> 1. <b>Covering:</b> Euglenoids have <b>no cell wall</b>, only a flexible protein <b>pellicle</b>; dinoflagellates have a stiff <b>cellulose-plate</b> wall. 2. <b>Habitat:</b> Euglenoids are mostly <b>freshwater</b>; dinoflagellates are mostly <b>marine</b>. 3. <b>Nutrition:</b> Euglenoids are <b>mixotrophic</b> (auto- in light, hetero- in dark); dinoflagellates are typically photosynthetic.',
          '<b>Examiner tip:</b> present as matched pairs, never two separate lists: that is what earns the comparison marks. If the question is worth an extra mark, add a fourth pair: euglenoids store <b>paramylon</b> whereas dinoflagellates store <b>starch</b>, a clean, factual contrast that’s easy to defend.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET · MCQ',
        q: '<b>Direct fact recall.</b> “The chief producers in the oceans, with indestructible silica-embedded walls, are:” <b>(a)</b> Dinoflagellates <b>(b)</b> Diatoms <b>(c)</b> Euglenoids <b>(d)</b> Slime moulds',
        steps: [
          'Two clues, “chief ocean producers” + “silica wall”, both point to diatoms (chrysophytes). Reading both clues together is the trick: dinoflagellates are also marine producers (clue 1) but their wall is cellulose, not silica (clue 2 rules them out). Euglenoids have no wall, and slime moulds are non-photosynthetic land-dwellers.',
        ],
        ans: '(b).',
      },
      {
        t: 'ex',
        tag: 'NEET · MCQ-with-reasoning',
        q: '<b>Group from a feature set.</b> “An organism is marine, photosynthetic, biflagellate, has stiff cellulose plates and causes red tides. It is a:” <b>(a)</b> Diatom <b>(b)</b> Euglenoid <b>(c)</b> Dinoflagellate <b>(d)</b> Slime mould',
        steps: [
          '“Cellulose plates + two flagella + red tide” is the unmistakable dinoflagellate signature (e.g., <i>Gonyaulax</i>). Work the clues in order: “cellulose plates” already eliminates diatoms (silica) and euglenoids (no wall); “red tide” and “marine photosynthetic” then confirm dinoflagellate over the saprophytic, terrestrial slime mould. This habit of eliminating on the covering clue first is the fastest route through any “identify the group” item.',
        ],
        ans: '(c).',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty · Assertion–Reason',
        q: '<b>Assertion (A):</b> <i>Euglena</i> shows mixotrophic nutrition. <b>Reason (R):</b> <i>Euglena</i> is autotrophic in the presence of sunlight and heterotrophic in its absence. <b>(a)</b> Both A and R true, R is the correct explanation of A <b>(b)</b> Both A and R true, R is <b>not</b> the correct explanation of A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          'A is true (<i>Euglena</i> is the textbook mixotroph). R is true and it is the definition of mixotrophy (switching nutritional mode with light availability), so R explains A. Deciding the truth of A and R <b>separately first</b>, then asking “does R cause A?”, is what separates (a) from (b).',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why is Kingdom Protista described as a connecting link in the living world?',
            a: 'Its members bridge prokaryotes (Monera) and the complex plant/animal/fungal kingdoms, and individual protists are plant-like, animal-like or fungus-like, so the kingdom forms an evolutionary stepping-stone from simple prokaryotic life to the higher eukaryotes.',
          },
          {
            q: '[CUET] Name the stored food and the cell-wall material of (i) diatoms and (ii) euglenoids.',
            a: '(i) Diatoms: chrysolaminarin & oil; silica-embedded wall. (ii) Euglenoids: paramylon & fat; no wall (protein pellicle).',
          },
          {
            q: '[NEET] Match the protozoan class with its example: Amoeboid, Flagellated, Ciliated, Sporozoan.',
            a: 'Amoeboid → <i>Amoeba</i>/<i>Entamoeba</i>; Flagellated → <i>Trypanosoma</i>; Ciliated → <i>Paramecium</i>; Sporozoan → <i>Plasmodium</i>.',
          },
          {
            q: '[NEET] Why are the walls of diatoms called “indestructible”, and what useful deposit do they form?',
            a: 'The walls are embedded with silica, which resists decay, so the empty walls persist long after the cell dies; accumulated over geological time they form diatomaceous earth, used in polishing and in the filtration of oils and syrups.',
          },
          {
            q: '[NEET high-difficulty] “Slime moulds are called protistan fungi, yet they are placed in Protista, not Fungi.” Justify.',
            a: 'They resemble fungi in being saprophytic spore-formers, but they are eukaryotes that are wall-less while feeding and crawl over their substrate like protozoa: classification follows cell structure and organisation, not just nutrition, so they sit in Protista.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Members of Kingdom Protista are best defined as:',
        opts: [
          { label: 'single-celled prokaryotes', nudge: '<b>(a)</b> and <b>(d)</b> describe prokaryotes (Monera): the classic Monera/Protista mix-up, often triggered by the fact that both are tiny and aquatic.' },
          { label: 'single-celled eukaryotes', nudge: null },
          { label: 'multicellular eukaryotes', nudge: '<b>(c)</b> describes the higher eukaryotic kingdoms.' },
          { label: 'wall-less prokaryotes', nudge: '<b>(a)</b> and <b>(d)</b> describe prokaryotes (Monera): the classic Monera/Protista mix-up, often triggered by the fact that both are tiny and aquatic.' },
        ],
        correct: 1,
        solution:
          'The defining combination is single cell + true (membrane-bound) nucleus. Both halves matter: “single-celled” separates protists from plants/animals/fungi, and “eukaryotic” separates them from bacteria.',
      },
      {
        t: 'mcq',
        q: 'Which feature correctly identifies euglenoids?',
        opts: [
          { label: 'Silica cell wall', nudge: '<b>(a)</b> is a diatom trait.' },
          { label: 'Two flagella and a cellulose theca', nudge: '<b>(b)</b> is a dinoflagellate trait.' },
          { label: 'A protein pellicle instead of a cell wall', nudge: null },
          { label: 'Always strictly autotrophic', nudge: '<b>(d)</b> is wrong: euglenoids are mixotrophic, a very common trap.' },
        ],
        correct: 2,
        solution: 'The wall-less, pellicle-covered body is the identifying feature of euglenoids among the plant-like protists.',
      },
      {
        t: 'mcq',
        q: 'Red tides in the sea are caused by the rapid multiplication of:',
        opts: [
          { label: 'Diatoms', nudge: '<b>(a)</b> diatoms are producers but don’t cause red tides.' },
          { label: 'Dinoflagellates', nudge: null },
          { label: 'Slime moulds', nudge: '<b>(c)</b> slime moulds are terrestrial saprophytes.' },
          { label: 'Cyanobacteria', nudge: '<b>(d)</b> cyanobacterial blooms are mainly freshwater; the “red tide” of NCERT is a dinoflagellate bloom.' },
        ],
        correct: 1,
        solution: 'Dinoflagellates such as <i>Gonyaulax</i> bloom and discolour the water, releasing toxins.',
      },
      {
        t: 'mcq',
        q: 'Which protozoan possesses an infectious spore-like stage in its life cycle?',
        opts: [
          { label: '<i>Amoeba</i>', nudge: '<b>(a)</b> amoeboid (pseudopodia), <b>(b)</b> ciliated (cilia), <b>(c)</b> flagellated (flagella): each is the type-example of a different protozoan class, so picking any of them reveals a scrambled mental map of the four groups.' },
          { label: '<i>Paramecium</i>', nudge: '<b>(a)</b> amoeboid (pseudopodia), <b>(b)</b> ciliated (cilia), <b>(c)</b> flagellated (flagella): each is the type-example of a different protozoan class, so picking any of them reveals a scrambled mental map of the four groups.' },
          { label: '<i>Trypanosoma</i>', nudge: '<b>(a)</b> amoeboid (pseudopodia), <b>(b)</b> ciliated (cilia), <b>(c)</b> flagellated (flagella): each is the type-example of a different protozoan class, so picking any of them reveals a scrambled mental map of the four groups.' },
          { label: '<i>Plasmodium</i>', nudge: null },
        ],
        correct: 3,
        solution:
          'Sporozoans like <i>Plasmodium</i> (the malarial parasite) have an infectious spore stage. The reliable fix is to anchor each class to its locomotory organ and its example together.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Monera vs Protista on “size”.</b> Both are mostly single cells and aquatic, but Protista are <b>eukaryotic</b>. Always check for the nucleus, not the size.',
          '<b>Treating <i>Euglena</i> as a pure plant.</b> It’s the poster child for <b>mixotrophy</b>: half plant, half animal. Marking it “strictly autotrophic” is a frequent error.',
          '<b>Wrong wall material.</b> Diatom walls are <b>silica</b>, not calcium carbonate; dinoflagellate plates are <b>cellulose</b>; euglenoids have <b>no</b> wall. Memorise that the wall is not the same across the plant-like groups.',
          '<b>Scrambling the four protozoan classes.</b> Amoeboid–pseudopodia, Flagellated–flagella, Ciliated–cilia, Sporozoan–spore stage.',
          '<b>Classifying by nutrition alone.</b> Slime moulds are saprophytic like fungi and <i>Euglena</i> photosynthesises like a plant, yet both are protists: placement follows cell structure and organisation (single-celled eukaryote), not lifestyle. Don’t let a “fungus-like” or “plant-like” habit push you into the wrong kingdom.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For “identify the group” MCQs, jump straight to the <b>cell covering</b> clue. Silica = chrysophyte, cellulose plates = dinoflagellate, pellicle/no-wall = euglenoid, crawling-saprophyte = slime mould, animal-like-feeder = protozoan. One clue usually settles the answer in seconds.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Defining trait',
            note: 'single-celled <b>eukaryotes</b>, primarily <b>aquatic</b>; the link between Monera and the plant/animal/fungal kingdoms.',
          },
          { f: 'Very varied nutrition', note: 'photo-, hetero-, and <b>mixotrophic</b>.' },
          {
            f: 'Chrysophytes',
            note: 'diatoms + desmids; <b>silica</b> wall (soap-box), indestructible → <b>diatomaceous earth</b>; chief ocean producers; food = chrysolaminarin.',
          },
          {
            f: 'Dinoflagellates',
            note: 'marine, <b>cellulose plates</b>, <b>two flagella</b>, <b>red tides</b> (<i>Gonyaulax</i>), bioluminescent (<i>Noctiluca</i>); food = starch.',
          },
          {
            f: 'Euglenoids',
            note: '<i>Euglena</i>; <b>no wall, protein pellicle</b>; <b>mixotroph</b>; food = <b>paramylon</b>.',
          },
          { f: 'Slime moulds', note: 'saprophytic “protistan fungi”; plasmodium; resistant walled spores.' },
          {
            f: 'Protozoa (all heterotrophic)',
            note: 'Amoeboid (<i>Amoeba</i>), Flagellated (<i>Trypanosoma</i>), Ciliated (<i>Paramecium</i>), Sporozoan (<i>Plasmodium</i>).',
          },
          { f: 'Reproduction', note: 'binary fission, cyst formation; sexual by cell fusion/syngamy.' },
          {
            f: 'Why it’s “ill-defined”',
            note: 'a catch-all for single-celled eukaryotes that aren’t plants, animals or fungi, grouped by structure, not common ancestry.',
          },
        ],
        aids: [
          'Wall material: “<b>Silica, Cellulose, None</b>” → Chrysophyte, Dinoflagellate, Euglenoid.',
          'Protozoa: “<b>Pseudo-Flag-Cilia-Spore</b>” → Amoeboid, Flagellated, Ciliated, Sporozoan.',
          '<i>Euglena</i>: “<b>Sun-fed by day, hunter by night</b>” (mixotroph).',
        ],
      },
    ],
  },
];
