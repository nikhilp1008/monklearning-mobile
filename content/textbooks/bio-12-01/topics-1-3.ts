import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12, Chapter 1 (Sexual Reproduction in Flowering Plants), Topics 01 to 03:
 * pp. 9 to 29 of the Class 12 Biology Master Reference, word for word. The chapter
 * title page and contents (p. 8) are not copied. The book's Part I to Part III are
 * Topics 01 to 03 with the book's own titles; each is cut at the book's Sections 1
 * to 8. The numbered sub-headings of Section 3 ("3.1 ...") are kept as bold lines
 * inside that part. Figures 1.1 (caption p. 11, drawn p. 12) and 1.2 (caption p. 11,
 * drawn p. 12) are in Topic 01, 1.3 and 1.4 (captions p. 18, drawn p. 19) in
 * Topic 02, 1.5 (caption p. 25, drawn p. 26) in Topic 03; these pages hold no
 * unnumbered drawing. Emphasis italics are dropped; italics are for scientific
 * names and the ploidy letter n. The book's em dashes are written as colons,
 * commas or brackets. Years and shares in the Exam Relevance boxes are labelled.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 9–15 ─────────────────────────
  {
    n: '01',
    title: 'Pre-fertilisation: Structures & Events',
    kalam: 'Pre-fertilization literally means “the setup phase.”',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is a heavily tested block of the chapter. CBSE Boards lift 2–3 mark structure/diagram questions straight from here (anther T.S., L.S. of ovule, “7-celled, 8-nucleate”). NEET asks 3–4 questions every year: pollen wall, embryo-sac composition, and pollination types are very likely. CUET leans on statement-matching and definition recall. Treat the labelled diagrams as non-negotiable (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: 'Before a flowering plant can ever make a seed, it has to manufacture two things in two separate factories: the <b>male gamete carrier</b> (the pollen grain) and the <b>female gamete house</b> (the embryo sac). Everything in this topic is about how those two factories are built and run, long before the male and female ever meet. “Pre-fertilization” literally means “the setup phase.” No fusion has happened yet; we are only assembling the players and getting them onto the field.',
      },
      {
        t: 'p',
        html: 'Think of a big Indian wedding being arranged across two cities. In one city, the groom’s side is being prepared: that’s the <b>stamen → anther → pollen grain</b> line. In the other city, the bride’s side is being readied: that’s the <b>pistil → ovule → embryo sac</b> line. Pollination is just the journey of the groom’s party (pollen) travelling to the bride’s house (stigma). The actual wedding (fertilization) is Topic 03. Right now, our entire job is to understand the two households and how each member is produced.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A flower is not one organ doing one job: it is two reproductive assembly lines bolted onto the same stalk. The male line specialises in producing huge numbers of tiny, tough, mobile pollen grains (because most will be lost in transit). The female line specialises in producing one carefully protected, immobile embryo sac per ovule (because it stays home and must survive to become a seed). That asymmetry (many cheap-and-mobile versus one expensive-and-protected) explains almost every structural difference you are about to learn.',
      },
      {
        t: 'p',
        html: 'Two processes power these lines, and their names are deliberately parallel: <b>microsporogenesis</b> (making the small spores → pollen) and <b>megasporogenesis</b> (making the large spores → embryo sac). Both start with a meiotic division, because gametophytes must be haploid. Keep that anchor in mind: meiosis is the hinge between the diploid plant body (2<i>n</i>) and the haploid reproductive structures (<i>n</i>).',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The “textbook” account you’ll learn assumes (i) a <b>bisexual</b> flower with a normal stamen and pistil, but many plants are unisexual, where one line is simply absent; (ii) the <b>monosporic</b> type of embryo-sac development, which is the most common but not the only pattern; and (iii) that meiosis actually occurs during sporogenesis. That last assumption matters: if a megaspore mother cell skips meiosis and forms a megaspore without reduction, the resulting embryo sac stays diploid, and the whole “haploid gametophyte” logic breaks. That exception is the seed of apomixis, which you’ll meet later.',
      },

      { t: 'part', title: 'Key structures, terms and definitions' },
      { t: 'p', html: '<b>The male side: stamen and its contents:</b>' },
      {
        t: 'p',
        html: '• <b>Stamen:</b> the male reproductive part of a flower. Its terminal, fertile structure is the <b>anther</b>; the stalk is the <b>filament</b>.<br>• <b>Anther:</b> typically <b>bilobed (dithecous)</b> and <b>tetragonal</b> (four-sided). Each lobe is a <b>theca</b> with two microsporangia, giving four in all (two per theca). The longitudinal groove between theca, along which the anther splits open, is the <b>line of dehiscence</b>.<br>• <b>Microsporangium:</b> a pollen-producing chamber. In transverse section it shows <b>four wall layers</b> (outside → inside): <b>epidermis</b>, <b>endothecium</b>, <b>middle layers</b>, and <b>tapetum</b>. At maturity it becomes the <b>pollen sac</b>.<br>• <b>Tapetum:</b> the innermost wall layer; <b>nutritive</b>: it nourishes the developing microspores. Its cells have dense cytoplasm and are usually <b>multinucleate</b> (more than one nucleus).<br>• <b>Sporogenous tissue:</b> the compact, homogeneous group of cells occupying the centre of a young microsporangium. Each cell is a potential pollen mother cell.<br>• <b>Pollen Mother Cell (PMC) / Microspore Mother Cell:</b> the same term; the diploid (2<i>n</i>) cell that undergoes meiosis.<br>• <b>Microspore tetrad:</b> the group of four haploid microspores produced from one PMC.<br>• <b>Pollen grain (male gametophyte):</b> a partly-germinated microspore; <b>haploid</b> (<i>n</i>). Its wall has two layers: the outer <b>exine</b> and inner <b>intine</b>.<br>• <b>Exine:</b> outer wall, made of <b>sporopollenin</b>, one of the most resistant organic materials; it withstands high temperature, strong acids and alkalis, and no enzyme that degrades it is known (so pollen is preserved as fossils). The exine is interrupted at <b>germ pores</b>, through which the pollen tube later emerges.<br>• <b>Intine:</b> inner wall; a thin, continuous layer of <b>cellulose and pectin</b>.',
      },
      { t: 'p', html: '<b>The female side: pistil and its contents:</b>' },
      {
        t: 'p',
        html: '• <b>Pistil (gynoecium):</b> the female reproductive part. A flower may be <b>monocarpellary</b>, <b>bicarpellary</b>, <b>tricarpellary</b> or <b>multicarpellary</b>. Multiple carpels may be <b>syncarpous</b> (fused; e.g. <i>Papaver</i>, <i>Solanum</i>) or <b>apocarpous</b> (free; e.g. <i>Michelia</i>, rose).<br>• <b>Parts of a pistil:</b> <b>stigma</b> (receptive landing platform for pollen), <b>style</b> (the elongated neck), and <b>ovary</b> (the swollen base). The ovarian cavity (<b>locule</b>) houses the <b>placenta</b>, from which ovules arise.<br>• <b>Ovule (megasporangium):</b> an <b>integumented megasporangium</b>: a megaspore-producing structure wrapped in protective integuments; it becomes the seed after fertilization. Key landmarks: <b>funicle</b> (the stalk attaching the ovule to the placenta), <b>hilum</b> (junction of funicle and ovule body), <b>integuments</b> (protective coverings), <b>nucellus</b> (the nutritive cell mass enclosed by integuments), <b>micropyle</b> (a small pore at the micropylar end), and <b>chalaza</b> (the basal end, where integuments originate).<br>• <b>Megaspore Mother Cell (MMC):</b> the diploid (2<i>n</i>) cell in the nucellus that undergoes meiosis.<br>• <b>Functional megaspore:</b> the single surviving haploid (<i>n</i>) megaspore (three of the four degenerate); it is the <b>first cell of the female gametophyte</b>.<br>• <b>Embryo sac (female gametophyte):</b> at maturity, <b>7-celled and 8-nucleate</b>, organised as: an <b>egg apparatus</b> at the micropylar end (one <b>egg cell</b> + two <b>synergids</b>), three <b>antipodal</b> cells at the chalazal end, and one large <b>central cell</b> holding <b>two polar nuclei</b>.<br>• <b>Filiform apparatus:</b> special thickenings in the synergids that <b>guide the pollen tube</b> into the synergid and aid sperm release. (Release of the sperm cells itself follows the degeneration of the synergid; the other function usually listed for the filiform apparatus is that its folded wall increases the surface for absorbing nutrients into the synergid.)',
      },
      { t: 'p', html: '<b>Pollination terms:</b>' },
      {
        t: 'p',
        html: '• <b>Pollination:</b> transfer of pollen grains from the anther to the receptive stigma.<br>• <b>Autogamy:</b> self-pollination within the same flower (e.g. wheat, rice, pea).<br>• <b>Geitonogamy:</b> transfer of pollen to the stigma of another flower on the same plant: functionally cross-pollination but <b>genetically self</b> (e.g. <i>Cucurbita</i>).<br>• <b>Xenogamy:</b> transfer of pollen to a different plant, the type (of these three) that brings <b>genetically different</b> pollen (e.g. papaya, and maize between different plants).<br>• <b>Cleistogamy / chasmogamy:</b> closed flowers that never open (always autogamous; e.g. <i>Viola</i>, <i>Commelina</i>, <i>Oxalis</i>) versus open flowers with exposed organs.',
      },

      { t: 'part', title: 'Developmental sequences and processes' },
      { t: 'p', html: '<b>3.1 Microsporogenesis: building the pollen grain</b>' },
      {
        t: 'p',
        html: '<b>Reasoning:</b> the plant needs millions of haploid carriers, so it starts from a central reserve of cells and reduces their chromosome number by meiosis.',
      },
      {
        t: 'p',
        html: '1. In a young anther, the centre of each microsporangium is filled with <b>sporogenous tissue</b>.<br>2. Each sporogenous cell matures into a <b>Pollen Mother Cell (PMC, 2<i>n</i>)</b>.<br>3. Each PMC undergoes <b>meiosis</b>: this reductional division is the whole point, because the product must be haploid. One PMC → a <b>microspore tetrad</b> of four haploid microspores. This formation of microspores from a PMC through meiosis is microsporogenesis.<br>4. As the anther matures and dehydrates, the microspores <b>dissociate</b> from the tetrad and develop into independent <b>pollen grains</b>. Thousands form in each microsporangium.<br>5. Within the pollen grain, the single nucleus divides to set up the male gametophyte: a large <b>vegetative cell</b> (with food reserves) and a small <b>generative cell</b>. Most species shed pollen at this <b>2-celled</b> stage; the generative cell divides later (sometimes before shedding, giving a 3-celled grain) to form the <b>two male gametes</b>.<br>6. <b>Dehiscence:</b> the dry anther splits along the line of dehiscence, releasing pollen. The three outer wall layers (epidermis, endothecium, middle layers) protect the anther and help in dehiscence (chiefly the endothecium, whose cells change shape as they dry); the tapetum had earlier done the nutritive work.',
      },
      { t: 'fig', id: 'b12-01-fig-1.1' },
      { t: 'p', html: '<b>3.2 Megasporogenesis: building the embryo sac</b>' },
      {
        t: 'p',
        html: '<b>Reasoning:</b> the plant needs one well-provisioned, protected female gametophyte per ovule, so it makes four spores but keeps only one.',
      },
      {
        t: 'p',
        html: '1. Inside the nucellus, near the micropylar end, one cell enlarges into the <b>Megaspore Mother Cell (MMC, 2<i>n</i>)</b>.<br>2. The MMC undergoes <b>meiosis</b>, producing <b>four haploid megaspores</b> (usually in a linear row). This is megasporogenesis.<br>3. Three megaspores <b>degenerate</b>; one survives as the <b>functional megaspore (<i>n</i>)</b>, the first cell of the female gametophyte.',
      },
      { t: 'p', html: '<b>3.3 Female gametophyte (embryo sac) development</b>' },
      {
        t: 'p',
        html: '<b>Reasoning:</b> from a single haploid cell, build an organised 8-nucleate structure by mitosis only: no further reduction is needed, since the cell is already haploid.',
      },
      {
        t: 'p',
        html: '1. In the most common <b>monosporic</b> type, the functional megaspore undergoes <b>three sequential (free-nuclear) mitotic divisions</b>: 1 → 2 → 4 → 8 nuclei.<br>2. Nuclei migrate to the two poles, walls are laid down (<b>cellularization</b>), and the mature embryo sac organises into <b>7 cells with 8 nuclei</b>:<br>• <b>Micropylar end:</b> the <b>egg apparatus</b>, one <b>egg cell</b> flanked by two <b>synergids</b> (bearing the filiform apparatus).<br>• <b>Chalazal end:</b> three <b>antipodal</b> cells.<br>• <b>Centre:</b> one large <b>central cell</b> containing <b>two polar nuclei</b> (these two nuclei are why we count 8 nuclei but only 7 cells).',
      },
      { t: 'fig', id: 'b12-01-fig-1.2' },
      { t: 'p', html: '<b>3.4 Pollination and its outcomes</b>' },
      {
        t: 'p',
        html: 'Once pollen is shed, it must reach a stigma. <b>Agents</b> are abiotic: <b>anemophily</b> (wind: light, non-sticky pollen, feathery exposed stigma, often a single ovule per ovary; e.g. grasses) and <b>hydrophily</b> (water; e.g. <i>Hydrilla</i>, <i>Zostera</i>), or biotic, chiefly <b>entomophily</b> (insects) and <b>ornithophily</b> (birds).<br><br>Because too much selfing erodes variation, plants evolve <b>outbreeding devices</b>: <b>dichogamy</b> (pollen and stigma mature at different times), <b>self-incompatibility</b> (a genetic block preventing self-pollen from germinating), and <b>unisexuality</b>. Note the precise logic: a <b>dioecious</b> plant (separate male and female plants) prevents <i>both</i> autogamy and geitonogamy, whereas a <b>monoecious</b> unisexual plant prevents only autogamy: geitonogamy can still occur between its own male and female flowers.<br><br>The <b>pollen–pistil interaction</b> (still pre-fertilization) is the final event here: a compatible pollen grain germinates on the stigma, sends a <b>pollen tube</b> through the tissues of the stigma and style, enters the ovary, and usually reaches the ovule through the <b>micropyle</b> (porogamy), guided home by the filiform apparatus of the synergid.<br><br>(The agents of pollination, pollinator rewards, pollen–pistil recognition and the breeder’s artificial-hybridisation technique are developed in full in Topic 02.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board · 3 marks',
        q: 'A student examines a transverse section of a mature anther and is asked to name its four wall layers from outside inward and state the role of the innermost one.',
        steps: [
          '<b>Model answer:</b> From outside inward the layers are <b>epidermis → endothecium → middle layers → tapetum</b>. The innermost layer, the <b>tapetum</b>, is <b>nutritive</b>: it nourishes the developing microspores/pollen grains; its cells have dense cytoplasm and are commonly multinucleate. (Presentation tip for full marks: write the sequence as an ordered list and explicitly use the word “nutritive”: examiners look for it.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A mature embryo sac of a typical angiosperm contains how many cells and nuclei? <b>(a)</b> 8 cells, 8 nuclei <b>(b)</b> 7 cells, 8 nuclei <b>(c)</b> 8 cells, 7 nuclei <b>(d)</b> 7 cells, 7 nuclei',
        steps: [
          '<b>Fast reasoning:</b> Don’t recount from scratch under time pressure: memorise the “7 & 8” pattern and the reason for the mismatch: the single large <b>central cell holds two polar nuclei</b>, so one cell carries two nuclei. That extra nucleus makes nuclei (8) exceed cells (7).',
          'The trap option (a) catches students who forget the two polar nuclei share one cell.',
        ],
        ans: '(b)',
      },
      {
        t: 'ex',
        tag: 'CUET · statement evaluation',
        q: 'Consider the two statements: S-I: Geitonogamy is functionally cross-pollination but genetically similar to autogamy. S-II: A dioecious plant can prevent geitonogamy. Which is correct?',
        steps: [
          '<b>Reasoning:</b> S-I is <b>true</b>: in geitonogamy the pollen travels to a different flower, but since both flowers are on the same plant, the genes are identical to selfing. S-II is also <b>true</b>: a dioecious plant bears only one sex per individual, so neither autogamy nor geitonogamy is possible (both need male and female parts on the same plant).',
        ],
        ans: 'Both statements are correct.',
      },
      {
        t: 'ex',
        tag: 'NEET · Assertion–Reason',
        q: 'Use the standard key: (a) both true, R is correct explanation of A; (b) both true, R not the correct explanation; (c) A true, R false; (d) A false, R true. Assertion (A): Pollen grains can be preserved as fossils for millions of years. Reason (R): The exine is made of sporopollenin, which resists strong acids, alkalis and high temperature, and no enzyme that degrades it is known.',
        steps: [
          '<b>Reasoning:</b> A is <b>true</b> (pollen is famously found in fossil/sediment records). R is <b>true</b> and is precisely why A holds: sporopollenin’s chemical inertness is the direct cause of preservation. So R correctly explains A.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define megasporogenesis and state the ploidy of the megaspore mother cell and of the functional megaspore.',
            a: 'Formation of (four) megaspores from the MMC by meiosis; MMC is 2<i>n</i>, functional megaspore is <i>n</i>.',
          },
          {
            q: '[NEET] Name the part of the synergid that guides the pollen tube, and state its two functions.',
            a: 'Filiform apparatus; it guides pollen-tube entry into the synergid and aids release of the sperm cells (other texts list the second function as increasing the surface for absorbing nutrients into the synergid).',
          },
          {
            q: '[CUET] Match the term with its description: (A) Apocarpous (B) Syncarpous (C) Cleistogamous. Descriptions: (1) carpels fused, (2) flower never opens, (3) carpels free.',
            a: 'A–3, B–1, C–2.',
          },
          {
            q: '[NEET] Which outbreeding device prevents both autogamy and geitonogamy, and why?',
            a: 'Dioecy, with separate male and female plants, because no single plant has both sexes, so self-pollen can never reach a stigma on the same individual.',
          },
          {
            q: '[NEET · Assertion–Reason] A: The mature embryo sac is 8-nucleate but only 7-celled. R: The functional megaspore undergoes meiosis three times during embryo-sac development. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '(c): Assertion is true, but the Reason is false: the three divisions are <b>mitotic</b>, not meiotic (only the megaspore mother cell divides meiotically; the functional megaspore is already haploid).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The highly resistant organic material forming the exine of pollen is:',
        opts: [
          {
            label: 'cellulose',
            nudge: '<b>(a) cellulose</b> and <b>(b) pectin</b> are traps because they do occur in pollen, but in the <b>intine</b> (inner wall), not the exine; students who swap the two layers fall here.',
          },
          {
            label: 'pectin',
            nudge: '<b>(a) cellulose</b> and <b>(b) pectin</b> are traps because they do occur in pollen, but in the <b>intine</b> (inner wall), not the exine; students who swap the two layers fall here.',
          },
          { label: 'sporopollenin', nudge: null },
          {
            label: 'lignin',
            nudge: '<b>(d) lignin</b> is a generic “tough plant polymer” distractor, but it is not the exine material.',
          },
        ],
        correct: 2,
        solution: 'It withstands strong acids, alkalis and high temperature, and no enzyme is known to degrade it.',
      },
      {
        t: 'mcq',
        q: 'The ovule is technically equivalent to the:',
        opts: [
          {
            label: 'megaspore',
            nudge: '<b>(a)</b> and <b>(b)</b> are contents/stages inside the ovule, not the ovule itself: a part-for-whole trap.',
          },
          {
            label: 'megaspore mother cell',
            nudge: '<b>(a)</b> and <b>(b)</b> are contents/stages inside the ovule, not the ovule itself: a part-for-whole trap.',
          },
          { label: 'megasporangium', nudge: null },
          {
            label: 'megasporophyll',
            nudge: '<b>(d) megasporophyll</b> corresponds to the carpel, a different level of organisation.',
          },
        ],
        correct: 2,
        solution: 'The ovule is an integumented megasporangium: the structure that produces megaspores.',
      },
      {
        t: 'mcq',
        q: 'In which condition can autogamy occur in a chasmogamous (open) flower?',
        opts: [
          {
            label: 'anther and stigma mature at different times',
            nudge: '<b>(a)</b> describes <b>dichogamy</b>, an outbreeding device that prevents selfing.',
          },
          {
            label: 'the plant is dioecious',
            nudge: '<b>(b)</b> and <b>(d)</b> describe unisexual setups that make autogamy impossible.',
          },
          { label: 'pollen and ovules mature simultaneously and anther and stigma lie close together', nudge: null },
          {
            label: 'the flower is unisexual',
            nudge: '<b>(b)</b> and <b>(d)</b> describe unisexual setups that make autogamy impossible.',
          },
        ],
        correct: 2,
        solution: 'Open flowers expose their organs, so selfing needs the timing and geometry to line up: synchronous maturation plus proximity.',
      },
      {
        t: 'mcq',
        q: 'Choose the correct statement about the female gametophyte:',
        opts: [
          {
            label: 'it is 7-nucleate and 8-celled',
            nudge: '<b>(a)</b> reverses the “7 & 8” rule.',
          },
          {
            label: 'it develops from the megaspore mother cell directly',
            nudge: '<b>(b)</b> skips megasporogenesis: the MMC must first divide meiotically.',
          },
          { label: 'it develops from a single functional megaspore in the monosporic type', nudge: null },
          {
            label: 'all four megaspores contribute to it',
            nudge: '<b>(d)</b> describes a tetrasporic pattern, not the common monosporic one.',
          },
        ],
        correct: 2,
        solution: 'In the common monosporic embryo sac, three megaspores degenerate and one functional megaspore builds the whole sac.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Swapping exine and intine.</b> Sporopollenin (tough, fossil-forming) → <b>ex</b>ine = <b>ex</b>terior. Cellulose + pectin → <b>in</b>tine (inner). Lock the “ex = exterior = exceptionally tough” link.',
          '<b>Counting embryo-sac cells as 8.</b> It’s <b>7 cells, 8 nuclei</b>: the two polar nuclei live in one central cell. Repeat “seven and eight, two nuclei in the centre” as one phrase.',
          '<b>Confusing geitonogamy with xenogamy.</b> Both look like cross-pollination. Test the genetics: same plant = genetically self (geitonogamy); different plant = genetically different (xenogamy).',
          '<b>Calling the embryo-sac divisions “meiotic.”</b> Only the MMC division is meiotic. Once you have the haploid functional megaspore, every further division is <b>mitotic</b>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy):</b> When a question asks about ploidy, trace the cell back to the last meiosis. Before meiosis (PMC, MMC) → 2<i>n</i>. After meiosis (microspore, megaspore, and the pollen grain and embryo sac built from them) → <i>n</i>. This rule answers most ploidy MCQs about the gametophytes without memorising each structure. Cells made later by fertilisation have their own values: the zygote and embryo are 2<i>n</i> and the endosperm is 3<i>n</i>.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Anther',
            note: 'bilobed, tetragonal → <b>4 microsporangia</b>; wall = <b>epidermis, endothecium, middle layers, tapetum</b> (tapetum = innermost, nutritive, multinucleate).',
          },
          {
            f: 'Microsporogenesis',
            note: 'sporogenous tissue → PMC (2<i>n</i>) → meiosis → microspore tetrad (<i>n</i>) → pollen grains.',
          },
          {
            f: 'Pollen wall',
            note: 'exine = <b>sporopollenin</b> (durable, fossil-forming, has germ pores); intine = <b>cellulose + pectin</b>. Shed at <b>2-celled</b> stage (vegetative + generative).',
          },
          {
            f: 'Pistil → ovule (megasporangium)',
            note: 'funicle, hilum, micropyle, chalaza, integuments, <b>nucellus</b>, embryo sac.',
          },
          {
            f: 'Megasporogenesis',
            note: 'MMC (2<i>n</i>) → meiosis → 4 megaspores → 3 degenerate → <b>1 functional megaspore (<i>n</i>)</b>.',
          },
          {
            f: 'Embryo sac (monosporic)',
            note: 'functional megaspore → <b>3 mitotic divisions → 8 nuclei, 7 cells</b> = egg + 2 synergids (filiform apparatus) | central cell (2 polar nuclei) | 3 antipodals.',
          },
          {
            f: 'Pollination',
            note: 'autogamy (self), <b>geitonogamy</b> (same plant, genetically self), <b>xenogamy</b> (different plant, genetically different).',
          },
          {
            f: 'Ploidy rule',
            note: 'before meiosis (PMC, MMC) = 2<i>n</i>; the spores and the cells of the gametophyte built from them (pollen grain, embryo sac cells, gametes) = <i>n</i>; the zygote and embryo = 2<i>n</i>; the endosperm = 3<i>n</i>.',
          },
        ],
        aids: ['Mnemonic (embryo sac “3-2-1-1”): 3 antipodals, 2 synergids, 1 egg, 1 central cell.'],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 16–22 ─────────────────────────
  {
    n: '02',
    title: 'Pollination: Agents, Pollen–Pistil Interaction & Artificial Hybridisation',
    kalam: 'A plant cannot walk to find a mate.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A dense, high-frequency block. <b>Artificial hybridisation (emasculation/bagging)</b> is a frequent CBSE 2–3 mark question and a recurring NEET item; the <b><i>Yucca</i>–moth mutualism</b> and <b>wind/water/insect floral syndromes</b> appear most years in NEET; CUET favours agent-characteristic matching. Pollen–pistil interaction and pollen-bank facts round out the chapter (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: 'A plant cannot walk to find a mate. Once its pollen is ready, it faces a delivery problem: how to get those grains from the anther of one flower to the receptive stigma of another. Topic 01 named the kinds of pollination (self, neighbour, cross); this topic is about the <b>couriers</b> that carry it out, what happens when the parcel arrives, and how a plant breeder hijacks the whole system to make designer crosses.',
      },
      {
        t: 'p',
        html: 'Think of pollination as an unreliable postal service. The plant has two strategies. It can mail in <b>bulk and cheap</b>: release clouds of light pollen onto the wind and hope some lands on the right stigma (wind pollination: no return address, enormous wastage, so the plant compensates with feathery stigmas to catch grains). Or it can hire a <b>private courier</b>, an insect, bird or bat, and pay it with <b>rewards</b> (nectar, pollen, sometimes even a safe nursery for its eggs). The courier route is targeted and efficient, which is why flowers evolved colour, scent and nectar: these are advertisements and payment, not decoration.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> The relationship between a flower and its courier can become so tight that neither can live without the other. The <i>Yucca</i> plant and its moth are locked in an <b>obligate mutualism</b>: the moth is the yucca’s pollinator, and the yucca’s developing seeds are the food of the moth’s larvae. Neither can complete its life cycle without the other. This is the courier model taken to its logical extreme: a partnership, not a transaction.',
      },
      {
        t: 'p',
        html: 'When the parcel finally lands, the stigma does not accept it blindly. The pistil <b>recognises</b> the pollen, checking whether it is the right (“compatible”) type, and either waves it through or shuts it out. This recognition step, called <b>pollen–pistil interaction</b>, is the plant’s quality control, and it is exactly the step a breeder must manage when forcing a particular cross.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Pollination does not guarantee fertilization: a grain can land on a stigma and still be rejected as incompatible. And “more visitors” is not always “more pollination”: <b>pollen/nectar robbers</b> take the reward without doing the job. Keep separate, too, the natural devices that promote cross-pollination (covered in Topic 01) from the artificial technique a breeder uses to control parentage, which we build up here.',
      },

      { t: 'part', title: 'Key terms and definitions' },
      { t: 'p', html: '<b>Agents of pollination:</b>' },
      {
        t: 'p',
        html: '• <b>Anemophily:</b> pollination by <b>wind</b> (e.g. maize/corn, grasses).<br>• <b>Hydrophily:</b> pollination by <b>water</b>: rare, in about 30 genera, mostly monocots (e.g. <i>Vallisneria</i>, <i>Zostera</i>, <i>Hydrilla</i>).<br>• <b>Entomophily:</b> pollination by <b>insects</b> (the commonest biotic mode).<br>• <b>Ornithophily / chiropterophily:</b> pollination by <b>birds</b> / by <b>bats</b>.<br>• <b>Attractants & rewards:</b> features that draw and pay pollinators: bright colour and scent (attractants); <b>nectar</b> and <b>pollen</b> (rewards); occasionally a <b>safe site to lay eggs</b>.<br>• <b>Pollen/nectar robber:</b> a visitor that consumes the reward <b>without</b> effecting pollination.',
      },
      { t: 'p', html: '<b>Pollen–pistil interaction:</b>' },
      {
        t: 'p',
        html: '• <b>Pollen–pistil interaction:</b> all events <b>from pollen deposition on the stigma until the pollen tube enters the ovule</b>. It involves <b>recognition</b>, followed by <b>promotion</b> of compatible pollen or <b>inhibition/rejection</b> of incompatible pollen.<br>• <b>Compatibility:</b> the pistil <b>accepts</b> compatible (usually same-species, genetically suitable) pollen and <b>rejects</b> incompatible pollen.<br>• <b>Siphonogamy:</b> delivery of the male gametes to the egg via a pollen tube, the mode of gamete transfer in seed plants, including angiosperms.',
      },
      { t: 'p', html: '<b>Artificial hybridisation (the breeder’s controlled cross):</b>' },
      {
        t: 'p',
        html: '• <b>Artificial hybridisation:</b> deliberately crossing selected parents to combine desirable characters into a commercially superior variety; a core tool of crop-improvement programmes.<br>• <b>Emasculation:</b> removal of the <b>anthers</b> from a <b>bisexual</b> flower <b>bud, before the anthers dehisce</b>, so the flower cannot self-pollinate.<br>• <b>Bagging:</b> covering the emasculated flower with a bag (e.g. butter-paper) to <b>prevent contamination of its stigma by unwanted pollen</b>.<br>• <b>Re-bagging:</b> re-covering the flower after the breeder has dusted on the chosen pollen, so the developing fruit stays protected.',
      },
      { t: 'p', html: '<b>Pollen viability & storage:</b>' },
      {
        t: 'p',
        html: '• <b>Pollen viability:</b> the period for which shed pollen stays capable of germinating; it depends on <b>temperature and humidity</b> (and the species).<br>• <b>Pollen bank:</b> a store of viable pollen, kept for use in breeding.',
      },
      { t: 'p', html: '<b>Outbreeding & seed (recap):</b>' },
      {
        t: 'p',
        html: '• <b>Herkogamy:</b> a physical separation of anther and stigma within a flower that discourages selfing: the pollen cannot easily reach the stigma of the same flower because the two are placed at different positions.<br>• <b>Heterostyly:</b> different style/stamen lengths in different plants of a species, a contrivance for cross-pollination (e.g. <i>Primula vulgaris</i>).<br>• <b>Significance of the seed:</b> why the seed is such a successful unit, discussed in 3.5 below.',
      },

      { t: 'part', title: 'Processes and procedures' },
      { t: 'p', html: '<b>3.1 Agents of pollination and floral syndromes</b>' },
      { t: 'p', html: 'A flower’s whole appearance is a clue to who pollinates it.' },
      {
        t: 'p',
        html: '<b>Wind (anemophily).</b> Wind is a blind courier, so wind-pollinated flowers stop investing in advertising and invest instead in exposure and capture. Typically they are <b>small, colourless, nectarless and odourless</b>, with <b>well-exposed stamens</b> (so the wind can pick up pollen) and <b>large, often feathery stigmas</b> (to trap airborne grains). The pollen is <b>light, non-sticky and produced in huge numbers</b>, and there is commonly a <b>single ovule per ovary</b> with many flowers packed into an inflorescence: maize/corn and grasses are the classic examples.<br><br><b>Water (hydrophily).</b> True water pollination is <b>rare</b>: only about 30 genera, mostly monocots such as <i>Vallisneria</i>, <i>Zostera</i> and <i>Hydrilla</i>. (Many aquatic plants actually pollinate above the water surface by wind or insects; genuine hydrophily is the exception.)<br><br><b>Animals (entomophily, ornithophily, chiropterophily).</b> Insects are the dominant biotic agents, with birds and bats also important. Here the flower advertises with <b>colour and scent</b> and pays with <b>rewards</b>, usually <b>nectar and pollen</b>. To keep visits coming, the reward must be reliable; some flowers even offer a <b>safe place for insects to lay eggs</b>. Beware the <b>pollen/nectar robbers</b>, which take the reward without transferring pollen.<br><br>The ultimate animal partnership is the <b>obligate mutualism</b> of <i>Yucca gloriosa</i> and the moth <i>Pronuba yuccasella</i> (now called <i>Tegeticula yuccasella</i>): the moth is the yucca’s pollinator and lays its eggs in the ovary locule; the moth larvae then feed on some of the developing seeds, emerging as the seeds mature. Neither species can complete its life cycle without the other. (As a scale aside, <i>Amorphophallus</i> bears one of the largest unbranched <b>inflorescences</b> in the plant kingdom, built to attract its pollinators.)',
      },
      { t: 'fig', id: 'b12-01-fig-1.3' },
      { t: 'p', html: '<b>3.2 Pollen–pistil interaction</b>' },
      {
        t: 'p',
        html: 'Pollination delivers the grain to the stigma, but <b>the pistil decides what happens next</b>. The events from pollen landing on the stigma to the pollen tube entering the ovule are together called <b>pollen–pistil interaction</b>, and the key feature is that it is a <b>recognition</b> event:',
      },
      {
        t: 'p',
        html: '1. The stigma chemically “reads” the arriving pollen.<br>2. If the pollen is <b>compatible</b>, the pistil <b>promotes</b> it: the grain germinates and a <b>pollen tube</b> grows out.<br>3. If the pollen is <b>incompatible</b> (wrong species, or self-pollen in a self-incompatible plant), the pistil <b>inhibits/rejects</b> it: germination or tube growth is blocked.<br>4. A compatible pollen tube, carrying the two male gametes, grows <b>through the stigma and style, into the ovary, and enters the ovule</b> (guided home, as we saw, by the synergid’s filiform apparatus). Because the gametes travel inside a tube, this mode of transfer (used by angiosperms and other seed plants) is called <b>siphonogamy</b>.',
      },
      {
        t: 'p',
        html: 'This recognition step is the natural gatekeeper, and it is precisely what a breeder works with (choosing compatible parents) and around (preventing the plant’s own pollen from ever reaching the stigma).',
      },
      { t: 'p', html: '<b>3.3 Artificial hybridisation: the controlled cross</b>' },
      {
        t: 'p',
        html: 'Crop improvement often needs a specific cross: pollen of variety A onto the stigma of variety B, with <b>no contamination</b> from any other pollen, including B’s own. The technique is a clean sequence:',
      },
      {
        t: 'p',
        html: '1. <b>Selection of parents</b>: pick the two plants whose desirable characters you want to combine.<br>2. <b>Emasculation</b>: on the female parent, remove the <b>anthers from the bisexual flower bud before they dehisce</b> (using forceps), so the flower cannot self-pollinate.<br>3. <b>Bagging</b>: immediately cover the emasculated flower with a bag (butter-paper) to keep stray pollen off the stigma.<br>4. <b>Collection of pollen</b>: gather mature pollen from the chosen male parent.<br>5. <b>Dusting (cross-pollination)</b>: when the bagged stigma becomes receptive, dust the collected pollen onto it.<br>6. <b>Re-bagging</b>: re-cover the flower and let the fruit develop.',
      },
      {
        t: 'p',
        html: '<b>The unisexual exception (a common trap):</b> if the female parent already bears <b>unisexual (e.g. dioecious) female flowers</b>, there are no anthers to remove, so <b>emasculation is unnecessary</b>; you simply <b>bag</b> the female flower, then dust and re-bag. Emasculation is only for bisexual flowers.',
      },
      { t: 'fig', id: 'b12-01-fig-1.4' },
      { t: 'p', html: '<b>3.4 Pollen viability, storage and allergy</b>' },
      {
        t: 'p',
        html: 'Shed pollen does not stay alive indefinitely; its <b>viability depends on temperature and humidity</b> and varies widely between species.<br><br>In some cereals (rice, wheat) pollen loses viability within about <b>30 minutes</b> of release, whereas in several members of the Rosaceae, Leguminosae and Solanaceae it can stay viable for <b>months</b>. Because viable pollen is valuable to breeders, it can be <b>stored for years in liquid nitrogen (about −196 °C)</b>: such stores are called <b>pollen banks</b>, and they let breeders cross plants that do not naturally flower at the same time or place. Pollen is also marketed as <b>food supplements</b> (pollen tablets/syrups) in some countries.<br><br>Not all pollen is benign for people: the wind-borne pollen of plants such as <b><i>Parthenium</i></b> (carrot grass / congress grass) is a notorious cause of <b>pollen allergy</b>, triggering respiratory and skin reactions in sensitive individuals.',
      },
      { t: 'p', html: '<b>3.5 Significance of the seed</b>' },
      {
        t: 'p',
        html: 'The chapter’s whole machinery exists to make a seed, and the seed is one of evolution’s great success stories. A <b>hard seed coat</b> protects the young embryo from physical, thermal and water damage; the <b>stored food</b> (endosperm and/or cotyledons) gives the seedling a guaranteed start; and <b>dormancy</b> lets the seed wait out drought or winter and germinate only when conditions favour survival. Because most seeds are products of <b>sexual reproduction</b>, they carry <b>new genetic combinations</b>, feeding variation into the population. Finally, seeds have superb <b>dispersal</b> strategies, letting a species colonise new habitats, and, not least, seeds are the basis of agriculture and of the human food supply.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board · 3 marks',
        q: 'A breeder wants to cross two varieties of a bisexual-flowered crop. List, in order, the steps of artificial hybridisation, and state why emasculation is done.',
        steps: [
          '<b>Model answer:</b> Order: <b>selection of parents → emasculation → bagging → collection of pollen from the male parent → dusting the pollen on the receptive stigma → re-bagging</b>. <b>Emasculation</b> (removing the anthers from the female-parent flower bud before they dehisce) is done to <b>prevent self-pollination</b>, so that only the chosen male parent’s pollen fertilises the flower. (Full marks: correct order + “prevents self-pollination / unwanted pollen.”)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'While planning artificial hybridisation involving a <b>dioecious</b> plant as the female parent, which step is NOT required? <b>(a)</b> bagging the female flower <b>(b)</b> collection of pollen from the male parent <b>(c)</b> emasculation <b>(d)</b> dusting pollen on the stigma',
        steps: [
          '<b>Fast reasoning:</b> a dioecious female flower has <b>no anthers</b> to remove, so <b>emasculation is pointless</b>. All the other steps (bag → collect → dust → re-bag) are still needed.',
          'The trap is muscle memory: students list emasculation reflexively because it is step 1 for bisexual flowers.',
        ],
        ans: '(c)',
      },
      {
        t: 'ex',
        tag: 'CUET · matching',
        q: 'Match the flower feature with its pollinating agent: (A) small, colourless, nectarless flowers with feathery stigmas (B) bright, scented flowers offering nectar (C) flowers of <i>Vallisneria</i> / <i>Zostera</i>. Agents: (1) insects (entomophily) (2) wind (anemophily) (3) water (hydrophily).',
        steps: [
          '<b>Reasoning:</b> feathery-stigma, advertising-free flowers are wind-adapted (A–2); bright/scented/nectar flowers pay animal couriers (B–1); the named aquatics are water-pollinated (C–3).',
        ],
        ans: 'A–2, B–1, C–3.',
      },
      {
        t: 'ex',
        tag: 'NEET · Assertion–Reason',
        q: 'Key: (a) both true, R explains A; (b) both true, R not the explanation; (c) A true, R false; (d) A false, R true. Assertion (A): The yucca moth (<i>Pronuba</i>) and the <i>Yucca</i> plant cannot complete their life cycles without each other. Reason (R): The moth is the plant’s pollinator, and the moth’s larvae feed on the developing yucca seeds.',
        steps: [
          '<b>Reasoning:</b> A is <b>true</b> (textbook obligate mutualism). R is <b>true</b> and is the <b>mechanism behind</b> the mutual dependence: pollination by the moth, food for the larvae from the seeds. So R correctly explains A.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define emasculation and bagging, and state the purpose of each in artificial hybridisation.',
            a: 'Emasculation = removing anthers from a bisexual flower bud before dehiscence, to prevent self-pollination; bagging = covering the emasculated flower to prevent contamination of the stigma by unwanted pollen.',
          },
          {
            q: '[NEET] List four characteristic features of a wind-pollinated flower.',
            a: 'Small/colourless/nectarless/odourless flowers; well-exposed stamens; light, non-sticky pollen in large numbers; large feathery stigma (also: single ovule per ovary, flowers in inflorescence).',
          },
          {
            q: '[CUET] Name the obligate insect partner of the <i>Yucca</i> plant and state one way each partner depends on the other.',
            a: 'The moth <i>Pronuba yuccasella</i>; the moth is the yucca’s pollinator, and its larvae feed on (some of) the developing yucca seeds: neither can complete its life cycle without the other.',
          },
          {
            q: '[NEET] What is meant by pollen–pistil interaction, and what does the pistil do to incompatible pollen?',
            a: 'The events from pollen landing on the stigma to the pollen tube entering the ovule, involving recognition; the pistil <b>inhibits/rejects</b> incompatible pollen (blocks its germination/tube growth).',
          },
          {
            q: '[NEET · Assertion–Reason] A: Emasculation is not performed when the female parent bears unisexual flowers. R: Unisexual female flowers have no anthers to remove. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '(a): both true and R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Emasculation is the removal of:',
        opts: [
          { label: 'the stigma from a flower', nudge: '<b>(a)</b> would destroy the female part you need.' },
          { label: 'the anthers from a bisexual flower bud before dehiscence', nudge: null },
          {
            label: 'the petals to expose the stigma',
            nudge: '<b>(c)</b> misreads “expose the stigma”: bagging, not petal removal, protects it.',
          },
          { label: 'immature ovules', nudge: '<b>(d)</b> confuses emasculation with an unrelated manipulation.' },
        ],
        correct: 1,
        solution: 'Emasculation removes the male parts (anthers) before they shed pollen, preventing selfing.',
      },
      {
        t: 'mcq',
        q: 'Pollination by water (hydrophily) is:',
        opts: [
          { label: 'the commonest mode in flowering plants', nudge: '<b>(a)</b> is false: insect/wind pollination dominate.' },
          { label: 'rare, seen in about 30 genera, mostly monocots', nudge: null },
          { label: 'found only in wind-pollinated grasses', nudge: '<b>(c)</b> and <b>(d)</b> confuse agents.' },
          { label: 'the same as pollination by insects', nudge: '<b>(c)</b> and <b>(d)</b> confuse agents.' },
        ],
        correct: 1,
        solution:
          'Genuine water pollination is uncommon and largely confined to monocot aquatics like <i>Vallisneria</i> and <i>Zostera</i>.',
      },
      {
        t: 'mcq',
        q: 'The reward that a flower offers a pollinator is typically:',
        opts: [
          { label: 'sporopollenin', nudge: '<b>(a)</b> is a pollen-wall material, not a reward.' },
          { label: 'nectar and pollen', nudge: null },
          { label: 'the seed coat', nudge: '<b>(c)</b> forms later, in the seed.' },
          { label: 'a feathery stigma', nudge: '<b>(d)</b> is a wind adaptation, not a reward to animals.' },
        ],
        correct: 1,
        solution: 'Nectar and pollen are the usual rewards (some flowers also offer egg-laying sites).',
      },
      {
        t: 'mcq',
        q: 'Which statement about pollen–pistil interaction is correct?',
        opts: [
          { label: 'the pistil cannot recognise the type of pollen', nudge: '<b>(a)</b> and <b>(d)</b> deny the rejection capability.' },
          {
            label: 'it covers events only up to pollen landing on the stigma',
            nudge: '<b>(b)</b> truncates the process: it runs until the pollen tube enters the ovule.',
          },
          { label: 'it is a dynamic recognition process that may promote or reject pollen', nudge: null },
          { label: 'it always promotes, never rejects, pollen', nudge: '<b>(a)</b> and <b>(d)</b> deny the rejection capability.' },
        ],
        correct: 2,
        solution: 'The pistil recognises pollen and either promotes (compatible) or inhibits (incompatible) it.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Emasculating a unisexual flower.</b> Emasculation applies <b>only to bisexual flowers</b>. A dioecious/unisexual female flower has no anthers: you just bag it. This is a common artificial-hybridisation trap.',
          '<b>Wrong order of steps.</b> The correct chain is <b>emasculate → bag → (collect →) dust → re-bag</b>. Bagging before emasculation, or pollinating before bagging, is wrong.',
          '<b>“Pollination guarantees fertilisation.”</b> It does not: incompatible pollen can be rejected at the pollen–pistil step.',
          '<b>Confusing attractants with rewards.</b> Colour and scent are <b>attractants</b> (advertising); nectar and pollen are <b>rewards</b> (payment). Examiners test the distinction.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy):</b> Read every artificial-hybridisation question’s flower type first. Bisexual → emasculation needed; unisexual female → emasculation skipped. That one check answers most questions in this block instantly.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Agents',
            note: 'anemophily (wind), hydrophily (water), entomophily (insects), ornithophily (birds), chiropterophily (bats).',
          },
          {
            f: 'Wind-pollinated flower',
            note: 'small, colourless, nectarless; exposed stamens; light non-sticky pollen; feathery stigma; single ovule (maize, grasses).',
          },
          {
            f: 'Water-pollinated',
            note: 'rare, ~30 genera, mostly monocots (<i>Vallisneria</i>, <i>Zostera</i>, <i>Hydrilla</i>).',
          },
          {
            f: 'Animal rewards',
            note: 'nectar, pollen, sometimes egg-laying sites; beware pollen/nectar <b>robbers</b>.',
          },
          {
            f: '<i>Yucca</i>–<i>Pronuba</i> moth',
            note: 'obligate mutualism: moth pollinates, larvae eat developing seeds; neither survives without the other.',
          },
          {
            f: 'Pollen–pistil interaction',
            note: 'deposition → tube enters ovule; <b>recognition</b> → promote (compatible) or reject (incompatible); gamete delivery by tube = <b>siphonogamy</b>.',
          },
          {
            f: 'Artificial hybridisation',
            note: 'select parents → <b>emasculate</b> (bisexual flowers only) → <b>bag</b> → collect pollen → <b>dust</b> → <b>re-bag</b>. Emasculation prevents selfing; bagging prevents contamination.',
          },
          {
            f: 'Pollen',
            note: 'viability depends on temperature/humidity; stored in <b>pollen banks</b> (liquid N<sub>2</sub>); <i>Parthenium</i> pollen causes <b>allergy</b>.',
          },
          {
            f: 'Seed significance',
            note: 'protective coat + stored food + dormancy + genetic variation + dispersal → colonisation; basis of agriculture.',
          },
        ],
        aids: ['Mnemonic (hybridisation): “Select, Emasculate, Bag, Dust, Re-bag: Every Bachelor Diligently Records.” (Collect pollen from the male parent sits between Bag and Dust.)'],
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 23–29 ─────────────────────────
  {
    n: '03',
    title: 'Double Fertilisation & Post-fertilisation',
    kalam: 'Now the pollen tube arrives, opens, and something remarkable happens: two fusion events, not one.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-scoring topic if the ploidy ladder is learned. NEET asks 2–3 questions yearly, with <b>ploidy of post-fertilization structures</b> (<i>n</i>/2<i>n</i>/3<i>n</i>) and the <b>syngamy-vs-triple-fusion</b> distinction being very likely. CBSE Boards favour 2–3 mark “define double fertilisation” and true-vs-false-fruit questions. CUET leans on matching (testa/tegmen, ovary→fruit). True-vs-false fruit and the albuminous/non-albuminous distinction are common short-answer points (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: 'In the previous topic we built the two reproductive households and walked the pollen tube right up to the ovule’s doorstep. Now the pollen tube arrives, opens, and something remarkable happens: <b>two</b> fusion events, not one. This is <b>double fertilization</b>, and NCERT calls it unique to flowering plants. (A second fusion also occurs in <i>Ephedra</i> and <i>Gnetum</i>, but it does not make endosperm; what is unique is that the second fusion, the triple fusion, makes the endosperm.) That uniqueness is why examiners ask about it.',
      },
      {
        t: 'p',
        html: 'Here is the everyday way to feel it. Think of two male gametes arriving at the bride’s house like two brothers with two completely different jobs. <b>Brother one</b> marries the egg: that union (<b>syngamy</b>) creates the <b>zygote</b>, the future plant. <b>Brother two</b> does something a human wedding never would: he fuses with the two polar nuclei of the central cell (a <b>triple fusion</b> of three nuclei) to create the <b>endosperm</b>, the food store that will feed the baby plant. So one fertilization makes the child, the other makes the child’s lunchbox. Both happen in the same embryo sac, at almost the same moment. Two fusions = “double” fertilization.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Why bother making the lunchbox by fertilization at all? Why not pre-stock the seed with food like a gymnosperm does? Because the plant is being economical. It only invests in an expensive, nutrient-rich endosperm if an egg has actually been fertilized: the triple fusion is the plant’s way of saying “a baby is confirmed, now build the nursery.” If pollination fails, no endosperm is wasted. That coupling of “child confirmed → food committed” is the deep logic of double fertilization.',
      },
      {
        t: 'p',
        html: 'Everything after the two fusions is <b>post-fertilization</b>: the zygote grows into an <b>embryo</b>, the central cell grows into <b>endosperm</b>, the whole <b>ovule hardens into a seed</b>, and the <b>ovary swells into a fruit</b>. It is a coordinated renovation of the entire flower: petals and stamens wither, but the ovary and ovules transform.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> (i) Double fertilization assumes a normal embryo sac with two polar nuclei, so the “triploid endosperm” rule (3<i>n</i>) holds only for the typical polygonum-type sac. (ii) Some plants short-circuit the whole sexual route: in <b>apomixis</b>, a seed forms without fertilization, and in <b>parthenocarpy</b>, a fruit forms without fertilization (so it is seedless). These are exceptions to the usual rule: keep them filed separately from one another, because students mix them up often.',
      },

      { t: 'part', title: 'Key structures, terms and definitions' },
      { t: 'p', html: '<b>The two fusions:</b>' },
      {
        t: 'p',
        html: '• <b>Double fertilization:</b> the fusion of two male gametes inside one embryo sac: one with the egg, one with the central cell. <b>Unique to angiosperms (flowering plants).</b><br>• <b>Syngamy (true fertilization):</b> fusion of one male gamete with the <b>egg cell</b>, forming the diploid <b>zygote (2<i>n</i>)</b>.<br>• <b>Triple fusion:</b> fusion of the second male gamete with the <b>two polar nuclei</b> of the central cell (three nuclei in all), forming the triploid <b>Primary Endosperm Nucleus (PEN, 3<i>n</i>)</b>.<br>• <b>Primary Endosperm Cell (PEC):</b> the central cell after triple fusion; it develops into the endosperm. (Some books call the fused polar nuclei the “secondary nucleus,” and the post-fusion cell the “primary endosperm mother cell”: same structure, different label.)',
      },
      { t: 'p', html: '<b>Post-fertilization tissues:</b>' },
      {
        t: 'p',
        html: '• <b>Endosperm:</b> the nutritive tissue formed from triple fusion by mitosis; usually triploid (3<i>n</i>). It nourishes the developing embryo.<br>• <b>Embryo:</b> the future plant, formed from the zygote by mitosis; develops at the <b>micropylar end</b> of the embryo sac.<br>• <b>Embryonal axis (tigellum):</b> the central stalk of the embryo carrying the cotyledon(s).<br>– <b>Epicotyl:</b> part of the axis above the cotyledons; ends in the <b>plumule</b> (future shoot).<br>– <b>Hypocotyl:</b> part of the axis below the cotyledons; ends in the <b>radicle</b> (future root).<br>• <b>Cotyledon:</b> the embryonic “seed leaf”; <b>two</b> in dicots, <b>one</b> in monocots (the single grass cotyledon is the <b>scutellum</b>).<br>• <b>Coleoptile / coleorhiza:</b> protective sheaths in monocot (grass) seedlings covering the <b>plumule</b> and <b>radicle</b> respectively.<br>• <b>Seed:</b> the fertilized, mature ovule. It contains the <b>seed coat</b> (from the integuments), the embryo, and stored food.<br>– <b>Testa / tegmen:</b> in a <b>bitegmic</b> ovule the seed coat has two layers: outer hard <b>testa</b> (from the outer integument) and inner papery <b>tegmen</b> (from the inner integument); a <b>unitegmic</b> ovule gives a single-layered coat.<br>– <b>Albuminous (endospermic) seed:</b> retains endosperm at maturity (e.g. wheat, maize, barley, castor).<br>– <b>Non-albuminous (ex-albuminous) seed:</b> endosperm fully consumed by the embryo (e.g. pea, groundnut).<br>– <b>Perisperm:</b> persistent remnant of the <b>nucellus</b> (e.g. black pepper, beet root).<br>– <b>Aleurone layer:</b> the proteinaceous outer layer of cereal endosperm.<br>• <b>Fruit:</b> the mature <b>ovary</b>; its wall (the <b>pericarp</b>) develops from the ovary wall.<br>– <b>True fruit:</b> develops only from the ovary (e.g. mango).<br>– <b>False fruit:</b> other floral parts (esp. the <b>thalamus</b>) also contribute (e.g. apple, cashew, strawberry).<br>– <b>Parthenocarpic fruit:</b> develops without fertilization → <b>seedless</b> (e.g. banana); can be induced with growth hormones.',
      },
      { t: 'p', html: '<b>Special mechanisms (covered in full in the next topic):</b>' },
      {
        t: 'p',
        html: '• <b>Apomixis</b> (seed formed without fertilization) and <b>polyembryony</b> (more than one embryo in a seed) are the chapter’s two special seed phenomena; they are defined and classified in Topic 04.',
      },

      { t: 'part', title: 'Developmental sequences and processes' },
      { t: 'p', html: '<b>3.1 Double fertilization: the two fusions</b>' },
      {
        t: 'p',
        html: '<b>Reasoning:</b> the plant must guarantee that food is built only when a zygote is. Coupling both to a single pollen-tube delivery achieves that.',
      },
      {
        t: 'p',
        html: '1. The pollen tube usually enters the ovule through the micropyle and discharges its <b>two male gametes into the cytoplasm of one synergid</b>.<br>2. <b>Syngamy:</b> one male gamete fuses with the egg → <b>zygote (2<i>n</i>)</b>.<br>3. <b>Triple fusion:</b> the second male gamete fuses with the two polar nuclei → <b>Primary Endosperm Nucleus (3<i>n</i>)</b>. The central cell is now the <b>Primary Endosperm Cell (PEC)</b>.<br>4. With its job done, the embryo sac tidies up: the <b>synergids and antipodal cells usually degenerate</b> after fertilization (in some species they persist). This is not waste: the egg has become the zygote and the central cell the food factory, so the helper cells (synergids, which had guided the pollen tube in) and the chalazal antipodals are no longer needed and their resources are reabsorbed.',
      },
      {
        t: 'p',
        html: '<b>Ploidy ladder (lock this for NEET):</b> if the parent plant is 2<i>n</i>, then egg, synergid, antipodal and each male gamete are <i>n</i>; the zygote is 2<i>n</i>; the PEN/endosperm is 3<i>n</i> (two polar nuclei + one male gamete).',
      },
      { t: 'fig', id: 'b12-01-fig-1.5' },
      { t: 'p', html: '<b>3.2 Endosperm development</b>' },
      {
        t: 'p',
        html: '<b>Reasoning:</b> food is needed fast and in bulk, so the commonest route skips the slow step of building cell walls at first.',
      },
      {
        t: 'p',
        html: '1. <b>Nuclear type (most common):</b> the PEN undergoes repeated <b>mitosis without cytokinesis</b>, giving a <b>free-nuclear endosperm</b>; walls are laid down later. Coconut shows both stages: the liquid “coconut water” is free-nuclear endosperm; the white kernel is cellular endosperm.<br>2. <b>Cellular type:</b> wall formation accompanies each division from the start.<br>3. <b>Helobial type (mainly monocots):</b> an intermediate: the PEN first divides into a large micropylar chamber and a small chalazal chamber, then proceeds partly free-nuclear and partly cellular.',
      },
      {
        t: 'p',
        html: 'Endosperm develops <b>before</b> the embryo, precisely because it must be ready to nourish it. (Advanced/NEET-high: surface texture gives <b>ruminate</b> endosperm, ridged, e.g. Annonaceae and nutmeg, and patchy-coloured <b>mosaic</b> endosperm, e.g. maize; ploidy is usually 3<i>n</i> but varies: 2<i>n</i> in <i>Oenothera</i>, 5<i>n</i> in <i>Fritillaria</i>, 9<i>n</i> in <i>Peperomia</i>.)',
      },
      { t: 'p', html: '<b>3.3 Embryogeny (embryo development)</b>' },
      {
        t: 'p',
        html: '<b>Reasoning:</b> the zygote must build a miniature plant with a root pole and a shoot pole before the seed shuts down.',
      },
      {
        t: 'p',
        html: '1. The zygote at the micropylar end divides mitotically into a <b>proembryo</b>.<br>2. In dicots, this passes through <b>globular → heart-shaped → mature</b> stages, ending with two cotyledons and a clear embryonal axis (epicotyl→plumule above, hypocotyl→radicle below).<br>3. In monocots (grasses), there is a single <b>scutellum</b>; the plumule is sheathed by the <b>coleoptile</b> and the radicle by the <b>coleorhiza</b>.',
      },
      { t: 'p', html: '<b>3.4 Seed and fruit maturation</b>' },
      {
        t: 'p',
        html: 'As the embryo and endosperm develop, the <b>ovule → seed</b> and the <b>ovary → fruit</b>: integuments harden into the <b>seed coat</b> (testa + tegmen if bitegmic), and the ovary wall becomes the <b>pericarp</b>. The seed even keeps its old ovule landmarks: the <b>micropyle</b> persists as a tiny pore (letting in oxygen and water at germination), the <b>hilum</b> marks where the funicle was attached, and the <b>chalaza</b> marks where the integuments originated. The <b>number of seeds corresponds to the number of fertilized ovules</b>.<br><br>In cereal (albuminous) seeds, a special proteinaceous <b>aleurone layer</b> lines the endosperm and separates it from the embryo; it later helps mobilise stored food at germination. Note one exception to the usual monocot pattern: most monocot seeds are endospermic, but <b>orchid</b> seeds are non-endospermic.<br><br>Finally the seed shuts down into <b>dormancy</b>: water content falls sharply, the seed dries, and the embryo’s metabolism slows almost to a halt, entering a state of inactivity. The seed will not germinate until conditions turn favourable, and this metabolic “pause button” is what gives seeds their astonishing longevity. A date-palm (<i>Phoenix dactylifera</i>) seed has been germinated after roughly two thousand years, and lupine seeds from frozen Arctic tundra, about ten thousand years old, have also germinated. Dormancy is therefore not a defect but a survival strategy: it lets a seed wait out a drought or a winter and germinate only when the next generation actually stands a chance.',
      },
      { t: 'p', html: '<b>3.5 Parthenocarpy, and a look ahead</b>' },
      {
        t: 'p',
        html: '• <b>Parthenocarpy:</b> the ovary becomes a fruit without fertilization, so the fruit is <b>seedless</b> (banana); growers induce it with growth hormones.<br><br>Two further special reproductive phenomena, <b>apomixis</b> (a seed formed without fertilization) and <b>polyembryony</b> (more than one embryo in a seed), close out the chapter and are treated in full in the next topic.',
      },
      {
        t: 'p',
        html: '<b>Don’t confuse the “without fertilization” terms:</b> apomixis = <b>seed</b> without fertilization; parthenocarpy = <b>fruit</b> (seedless) without fertilization; parthenogenesis = an egg developing into an embryo or organism without fertilisation (the usual example is animals, such as honeybee drones; in plants the same step occurs inside some apomixis routes). It is not the seed-or-fruit term.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board · 3 marks',
        q: 'Define double fertilisation. Name the two fusion events and state the product and ploidy of each.',
        steps: [
          '<b>Model answer:</b> Double fertilisation is the fusion of <b>two</b> male gametes within one embryo sac, a feature <b>unique to angiosperms</b>. (i) <b>Syngamy:</b> one male gamete fuses with the egg → <b>zygote (2<i>n</i>)</b>. (ii) <b>Triple fusion:</b> the second male gamete fuses with the two polar nuclei → <b>Primary Endosperm Nucleus (3<i>n</i>)</b>, which gives rise to the endosperm. (Full-marks tip: explicitly write “unique to angiosperms” and the ploidies 2<i>n</i> and 3<i>n</i>.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'In a fertilised embryo sac, the haploid, diploid and triploid structures are, respectively: <b>(a)</b> synergid, antipodal, polar nuclei <b>(b)</b> synergid, zygote, primary endosperm nucleus <b>(c)</b> antipodal, synergid, PEN <b>(d)</b> egg, synergid, endosperm',
        steps: [
          '<b>Fast reasoning:</b> sort by the ploidy ladder: the cells of the embryo sac and the male gametes are <i>n</i> (synergid, antipodal, egg), the zygote is 2<i>n</i> (egg + male gamete), the PEN/endosperm is 3<i>n</i> (two polar nuclei + male gamete). Only <b>(b)</b> lists one of each in the right order. Option (a) lists only haploid structures, and (c) and (d) put a haploid structure (the synergid) where the diploid one belongs.',
        ],
        ans: '(b)',
      },
      {
        t: 'ex',
        tag: 'CUET · matching',
        q: 'Match each structure with what it develops into / from: (A) Outer integument (B) Inner integument (C) Ovary wall (D) Nucellus remnant. Options: (1) tegmen (2) perisperm (3) testa (4) pericarp.',
        steps: [
          '<b>Reasoning:</b> outer integument → hard outer <b>testa</b> (A–3); inner integument → papery <b>tegmen</b> (B–1); ovary wall → <b>pericarp</b> (C–4); persistent nucellus → <b>perisperm</b> (D–2).',
        ],
        ans: 'A–3, B–1, C–4, D–2.',
      },
      {
        t: 'ex',
        tag: 'NEET · Assertion–Reason',
        q: 'Key: (a) both true, R explains A; (b) both true, R not the explanation; (c) A true, R false; (d) A false, R true. Assertion (A): In most seeds, endosperm development begins before embryo development. Reason (R): The endosperm provides nourishment to the developing embryo.',
        steps: [
          '<b>Reasoning:</b> A is <b>true</b> (the PEN typically divides before the zygote does). R is <b>true</b> and is the <b>exact cause</b>: the embryo waits for its food supply to be laid down first. So R correctly explains A.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Differentiate between a true fruit and a false fruit, giving one example of each.',
            a: 'True fruit develops only from the ovary (mango); false fruit has contributions from other floral parts, especially the thalamus (apple).',
          },
          {
            q: '[NEET] If the somatic chromosome number of a plant is 2<i>n</i> = 24, what is the chromosome number of its endosperm, and why?',
            a: '3<i>n</i> = 36; the endosperm forms by triple fusion of two polar nuclei (<i>n</i> + <i>n</i>) and one male gamete (<i>n</i>), so it is triploid.',
          },
          {
            q: '[CUET] Name the type of seed in which the endosperm is completely consumed by the embryo, and give one example.',
            a: 'Non-albuminous (ex-albuminous) seed; pea or groundnut.',
          },
          {
            q: '[NEET] Name the two protective sheaths that cover the plumule and the radicle in a germinating grass (monocot) seedling.',
            a: 'The <b>coleoptile</b> (covers the plumule) and the <b>coleorhiza</b> (covers the radicle).',
          },
          {
            q: '[NEET · Assertion–Reason] A: A banana is a parthenocarpic fruit. R: Parthenocarpic fruits develop without fertilisation and are therefore seedless. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '(a): both true and R is the correct explanation.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Triple fusion involves the fusion of:',
        opts: [
          {
            label: 'one male gamete and the egg',
            nudge: '<b>(a)</b> describes <b>syngamy</b>, not triple fusion: the commonest swap.',
          },
          {
            label: 'two male gametes and the egg',
            nudge: '<b>(b)</b> invents an extra gamete; only one gamete goes to each fusion.',
          },
          { label: 'one male gamete and two polar nuclei', nudge: null },
          {
            label: 'two synergids and one male gamete',
            nudge: '<b>(d)</b> confuses synergids (which degenerate) with polar nuclei.',
          },
        ],
        correct: 2,
        solution: 'Triple fusion = second male gamete + the two polar nuclei → triploid PEN.',
      },
      {
        t: 'mcq',
        q: 'The edible “coconut water” of a tender coconut is:',
        opts: [
          { label: 'cellular endosperm', nudge: '<b>(a)</b> is the kernel, not the water.' },
          { label: 'free-nuclear endosperm', nudge: null },
          {
            label: 'liquid mesocarp',
            nudge: '<b>(c)</b> and <b>(d)</b> are tempting “it’s just juice/leftover tissue” traps but ignore that the liquid is endosperm.',
          },
          {
            label: 'degenerated nucellus',
            nudge: '<b>(c)</b> and <b>(d)</b> are tempting “it’s just juice/leftover tissue” traps but ignore that the liquid is endosperm.',
          },
        ],
        correct: 1,
        solution: 'Coconut water is the free-nuclear stage of the endosperm; the white kernel is the later cellular endosperm.',
      },
      {
        t: 'mcq',
        q: 'Which of the following is a false fruit?',
        opts: [
          {
            label: 'mango',
            nudge: '<b>(a) mango</b> is the classic <b>true</b> fruit (ovary only): the intended contrast.',
          },
          { label: 'apple', nudge: null },
          {
            label: 'tomato',
            nudge: '<b>(c) tomato</b> and <b>(d) pea</b> also develop from the ovary and are true fruits; students pick them only if they forget that “false” specifically means non-ovary floral parts contribute.',
          },
          {
            label: 'pea',
            nudge: '<b>(c) tomato</b> and <b>(d) pea</b> also develop from the ovary and are true fruits; students pick them only if they forget that “false” specifically means non-ovary floral parts contribute.',
          },
        ],
        correct: 1,
        solution: 'apple: its fleshy edible portion develops largely from the <b>thalamus</b>, not from the ovary alone, making it a false fruit.',
      },
      {
        t: 'mcq',
        q: 'In a typical angiosperm, the persistent remnant of the nucellus in a seed is called:',
        opts: [
          { label: 'perisperm', nudge: null },
          {
            label: 'pericarp',
            nudge: '<b>(b) pericarp</b> is the fruit wall (from the ovary wall): a fruit/seed mix-up.',
          },
          {
            label: 'tegmen',
            nudge: '<b>(c) tegmen</b> and <b>(d) testa</b> are seed-coat layers from the integuments, not from the nucellus.',
          },
          {
            label: 'testa',
            nudge: '<b>(c) tegmen</b> and <b>(d) testa</b> are seed-coat layers from the integuments, not from the nucellus.',
          },
        ],
        correct: 0,
        solution: 'perisperm (e.g. black pepper).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Swapping syngamy and triple fusion products.</b> Syngamy → <b>zygote (2<i>n</i>)</b>; triple fusion → <b>endosperm (3<i>n</i>)</b>. Anchor: “<b>tri</b>ple fusion → <b>tri</b>ploid.”',
          '<b>Calling the endosperm 2<i>n</i>.</b> It is <b>3<i>n</i></b>: three nuclei fuse (two polar + one male). Counting only “two things fuse” is the trap.',
          '<b>True vs false fruit.</b> Ovary only = true (mango). Thalamus joins in = false (apple, cashew). If the question names apple/strawberry/cashew, think “false.”',
          '<b>The three “without fertilization” terms.</b> Seed → <b>apomixis</b>; seedless fruit → <b>parthenocarpy</b>; an egg developing without fertilisation (the usual example is animals; also a step in some apomixis routes) → <b>parthenogenesis</b>. Keep them in separate boxes.',
          '<b>Albuminous direction.</b> Albuminous = endosperm stays (wheat, castor); non-albuminous = endosperm gone (pea). Students reverse this under time pressure.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy):</b> For any ploidy question, write the gamete value <i>n</i> once, then read structures off the ladder: gamete-derived = <i>n</i>, egg+gamete = 2<i>n</i>, two-polar+gamete = 3<i>n</i>. You never need to recompute from scratch.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Double fertilization',
            note: '= <b>syngamy + triple fusion</b>, in one embryo sac, <b>unique to angiosperms</b>.',
          },
          {
            f: 'Syngamy',
            note: 'male gamete + egg → <b>zygote (2<i>n</i>)</b> → embryo.',
          },
          {
            f: 'Triple fusion',
            note: 'male gamete + <b>two polar nuclei</b> → <b>PEN (3<i>n</i>)</b> → endosperm (via PEC).',
          },
          {
            f: 'Ploidy ladder',
            note: 'gamete/synergid/antipodal/egg = <i>n</i>; zygote = 2<i>n</i>; endosperm = 3<i>n</i>.',
          },
          {
            f: 'Endosperm types',
            note: 'nuclear (common; free-nuclear), cellular, helobial. Coconut water = free-nuclear; kernel = cellular.',
          },
          {
            f: 'Embryo',
            note: 'micropylar end; dicot = 2 cotyledons (epicotyl→plumule, hypocotyl→radicle); monocot = scutellum, coleoptile (plumule), coleorhiza (radicle).',
          },
          {
            f: 'Seed/fruit',
            note: 'ovule→seed (coat = testa + tegmen), ovary→fruit (wall = pericarp). Albuminous (endosperm stays: wheat, castor) vs non-albuminous (gone: pea). Perisperm = nucellus remnant (black pepper).',
          },
          {
            f: 'Fruit types',
            note: 'true (ovary only; mango), false (thalamus too; apple), parthenocarpic (seedless, no fertilisation; banana).',
          },
          {
            f: 'Exceptions',
            note: 'parthenocarpy = <b>seedless fruit</b> without fertilisation (banana). (Apomixis = seed without fertilisation, and polyembryony = many embryos per seed: see Topic 04.)',
          },
        ],
        aids: ['Mnemonic: “Triple fusion → triploid; two for the baby, three for the food.”'],
      },
    ],
  },
];
