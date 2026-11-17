import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 3 (Plant Kingdom), Topics 04 to 06: pp. 167 to 188 of the
 * Class 11 Biology Master Reference, word for word. Topic 04 Gymnosperms opens
 * part-way down p. 167 and its cheat sheet ends at the top of p. 175; Topic 05
 * Angiosperms runs from p. 175 to the top of p. 183 (cheat sheet pp. 182–183);
 * Topic 06 Plant Life Cycles & Alternation of Generations runs pp. 183 to 188.
 * Each is cut at the book’s Sections 1 to 8, named as that topic prints them.
 * Figure 3.4 (caption p. 170, drawn p. 171) and Figure 3.5 (caption p. 177,
 * drawn p. 178) are redrawn in lib/diagrams/biology-11-03.ts; these pages draw
 * nothing else (the two life-cycle summary lines are typeset text). Scientific
 * names are italic as the book prints them; emphasis italics are dropped.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 167–175 ─────────────────────────
  {
    n: '04',
    title: 'Gymnosperms',
    kalam:
      'A seed is an embryo plus a built-in food store plus a protective coat: a complete survival kit.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Gymnosperms are a high-yield topic: 1–2 questions almost every year (the book’s estimate from past papers, not official figures), very often as the gymnosperm-vs-angiosperm contrast (naked seed, no double fertilisation, haploid endosperm) or as <i>Cycas</i>/<i>Pinus</i> specifics (coralloid roots, monoecious vs dioecious, vessel-less xylem). CUET favours match-the-column on genera and economic products. CBSE Boards may ask “why are gymnosperms so named” or a short comparison. The recurring trap is mixing up which features are gymnosperm vs angiosperm: that distinction is worth over-learning.',
      },
      {
        t: 'p',
        html: 'By the pteridophyte stage the plants had built two big things on land: vascular plumbing (pteridophytes) and, in heterosporous ones like <i>Selaginella</i>, the first hint of keeping the next generation at home. Gymnosperms take that hint and run with it: they invent the <b>seed</b>.',
      },
      {
        t: 'p',
        html: 'A seed is one of biology’s great packaging breakthroughs. Think of the difference between mailing loose grains of rice versus mailing a sealed, cushioned, ready-to-eat thali with its own packed lunch. A spore is a single naked cell thrown to the wind. A <b>seed</b> is an embryo plus a built-in food store plus a protective coat: a complete survival kit. With seeds, plants no longer need a film of water for the embryo to develop, and they can wait out bad seasons. This is the leap gymnosperms make.',
      },
      {
        t: 'p',
        html: 'But gymnosperms are the <b>“first draft” of the seed plant</b>, and the giveaway is in the name: <b>gymnos</b> (naked) + <b>sperma</b> (seed). Their seeds sit out in the open: <b>not enclosed in any ovary or fruit.</b> Picture a pine cone: lift its woody scales and the seeds lie exposed on the upper surface of each scale, not wrapped inside a fleshy fruit the way an apple’s seeds are. That single fact (<b>naked seeds, no fruit</b>) is the defining feature of the whole group and a frequent source of exam questions.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> if angiosperms (next topic) are seeds delivered in sealed gift boxes (fruits), gymnosperms are seeds left out on an open shelf. Same precious cargo, no outer wrapping.',
      },
      {
        t: 'p',
        html: 'Who are they? About <b>900 living species</b> (the book’s figure; current counts run nearer 1,000): the <b>conifers</b> (pines, cedars, cypresses) are by far the largest group, the familiar cone-bearing evergreens of cold mountains; <b>cycads</b> (<i>Cycas</i>) look like stout palms; <b><i>Ginkgo</i></b> is a single surviving “living fossil” species from China; and <i>Gnetum</i> is an oddball. They are typically woody trees and shrubs with a <b>tap root system</b>, and they dominate the vegetation of <b>cold, high-altitude and temperate regions</b>: the dark-green forests of the Himalayas are largely gymnosperm.',
      },
      {
        t: 'p',
        html: 'A second deep idea: gymnosperms continue the <b>takeover by the sporophyte</b> we tracked in the ferns. The big pine tree is the sporophyte (2<i>n</i>); its gametophytes have shrunk so far that they are no longer free-living at all: they stay tucked inside the parent plant. The male gametophyte is reduced to a <b>pollen grain</b> of just a few cells; the female gametophyte never leaves the <b>ovule</b>. The trend across the chapter (sporophyte up, gametophyte down) reaches near-completion here.',
      },
      { t: 'p', html: '<b>Limiting conditions & where intuition misleads.</b>' },
      {
        t: 'p',
        html: '• “Seed plant = no longer needs water” is mostly true here: gymnosperm fertilisation does <b>not</b> require external water (pollen is wind-borne and a pollen tube delivers the gametes). But beware: <i>Cycas</i> still has <b>motile (flagellated) sperm</b> internally, a leftover from its fern-like ancestry; the plant simply no longer needs a pond for it.<br>• “Cone = flower” is wrong. A cone is a strobilus of sporophylls; there is no ovary, no stigma, no fruit. Gymnosperms have <b>no flowers and no fruits.</b><br>• Not every gymnosperm is a conifer: <i>Cycas</i>, <i>Ginkgo</i>, and <i>Gnetum</i> are gymnosperms but <b>not</b> conifers.',
      },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      {
        t: 'p',
        html: 'A high-yield comparison in this topic is gymnosperm vs angiosperm, so that is the master table; a genera table and a feature list follow.',
      },
      {
        t: 'table',
        title: '2.1 Gymnosperms vs Angiosperms (the master contrast)',
        head: ['Feature', 'Gymnosperms', 'Angiosperms'],
        rows: [
          ['Seeds', '<b>Naked</b>: not enclosed in an ovary', 'Enclosed within a fruit'],
          ['Reproductive structure', '<b>Cones</b> (strobili); no flowers', 'Flowers'],
          ['Fruit', '<b>Absent</b> (no ovary)', 'Present'],
          ['Fertilisation', 'Single; <b>no double fertilisation</b>', '<b>Double fertilisation</b>'],
          ['Endosperm', '<b>Haploid</b> (<i>n</i>), formed before fertilisation', 'Triploid (3<i>n</i>), formed after fertilisation'],
          ['Female gametophyte', 'Retained in ovule; bears <b>archegonia</b>', 'Embryo sac; <b>no archegonia</b>'],
          ['Xylem', '<b>Tracheids</b> only (vessels absent, except in Gnetales)', 'Vessels usually present'],
          ['Examples', '<i>Cycas</i>, <i>Pinus</i>, <i>Ginkgo</i>, <i>Cedrus</i>, <i>Sequoia</i>', 'Mango, Wheat, Sunflower'],
        ],
      },
      {
        t: 'defgrid',
        title: '2.2 Key genera to recognise',
        rows: [
          {
            k: '<i>Pinus</i>',
            v: 'Conifer; <b>monoecious</b> (male + female cones on one tree); <b>winged pollen</b> (“sulphur shower”); mycorrhizal roots; resin & turpentine',
          },
          {
            k: '<i>Cycas</i>',
            v: 'Palm-like; <b>dioecious</b>; <b>coralloid roots</b> with N<sub>2</sub>-fixing cyanobacteria; circinate vernation; vessel-less xylem; among the largest sperm; motile sperm; sago',
          },
          { k: '<i>Ginkgo</i>', v: '“Living fossil,” single living species (China); primitive; bears archegonia' },
          { k: '<i>Sequoia</i>', v: 'Redwood; the coast redwood (<i>Sequoia sempervirens</i>) is the <b>tallest tree</b> species' },
          { k: '<i>Cedrus</i>', v: 'Conifer timber tree (deodar)' },
        ],
      },
      { t: 'p', html: '<b>2.3 Diagnostic features (the recall checklist)</b>' },
      {
        t: 'p',
        html: '• <b>Seed-bearing vascular plants with naked seeds</b> (no ovary, no fruit), also called phanerogams without an ovary.<br>• <b>Heterosporous:</b> produce microspores (→ pollen → male gametophyte) and megaspores (→ female gametophyte).<br>• <b>Xylem has tracheids but no vessels</b> (except in Gnetales) → gymnosperm wood is “softwood”; they also lack xylem (wood) fibres.<br>• <b>Transfusion tissue</b> is present in the leaves, around the vascular bundle.<br>• <b>Gametophytes are not free-living</b>: both remain on/within the parent sporophyte.<br>• <b>Fertilisation needs no external water</b> (wind pollination + pollen tube), though <i>Cycas</i> retains motile sperm.<br>• <b>Diplontic</b> life cycle: the dominant body is the sporophyte.',
      },
      { t: 'p', html: '<b>Key terms:</b>' },
      {
        t: 'def',
        term: 'Strobilus (cone)',
        html: 'a compact cluster of sporophylls. Microsporophylls make up the <b>male cone</b>; megasporophylls (bearing ovules) make up the <b>female cone</b>.',
      },
      {
        t: 'def',
        term: 'Coralloid roots',
        html: 'negatively geotropic, coral-like roots of <i>Cycas</i> housing symbiotic N<sub>2</sub>-fixing cyanobacteria.',
      },
      {
        t: 'def',
        term: 'Ovuliferous scale',
        html: 'the scale of a <i>Pinus</i> female cone on which the ovule (and later the winged seed) sits.',
      },

      { t: 'part', title: 'Comparative characteristics and life cycles' },
      {
        t: 'p',
        html: '<b>3.1 The gymnosperm life cycle (diplontic, seed-forming)</b><br>The dominant body is the <b>sporophyte (2<i>n</i>)</b>: the tree. Trace the cycle:',
      },
      {
        t: 'proc',
        title: 'Trace the cycle',
        steps: [
          'The sporophyte bears two kinds of cones. <b>Microsporophylls</b> in the male cone carry <b>microsporangia</b>; meiosis there produces <b>microspores</b>, each maturing into a <b>pollen grain</b>: the highly reduced male gametophyte (just a few cells).',
          '<b>Megasporophylls</b> in the female cone bear <b>ovules</b> (megasporangia). Inside the ovule’s <b>nucellus</b>, a <b>megaspore mother cell</b> undergoes <b>meiosis</b> to give megaspores; the functional one develops into the <b>female gametophyte</b>, which is <b>retained inside the ovule</b> and bears <b>archegonia</b> (usually two or more), each with an egg.',
          '<b>Pollination is by wind.</b> Pollen is carried to the <b>micropyle end of the ovule</b> directly: there is no stigma and no ovary to pass through. A <b>pollen tube</b> then grows and delivers the male gamete to the egg.',
          '<b>Fertilisation</b> gives a zygote, which develops into the embryo. Crucially, the <b>food-storing endosperm is the haploid (<i>n</i>) female gametophyte tissue, and it forms before fertilisation</b>: unlike the triploid, post-fertilisation endosperm of angiosperms.',
          'The ovule matures into a <b>naked seed</b> (in <i>Pinus</i>, a <b>winged seed</b>, the wing derived from the <b>ovuliferous scale</b>), which disperses and germinates into a new sporophyte.',
        ],
      },
      {
        t: 'p',
        html: '<b>sporophyte</b> (2<i>n</i>) →<sup>meiosis in cones</sup> spores (<i>n</i>) → reduced gametophytes (<i>n</i>, retained) →<sup>wind pollination + pollen tube</sup> zygote (2<i>n</i>) → naked seed',
      },
      { t: 'fig', id: 'b11-03-fig-3.4' },
      {
        t: 'p',
        html: '<b>3.2 Why this matters: the seed-habit milestone</b><br>The heterosporous pteridophytes only hinted at the seed by retaining the female gametophyte. Gymnosperms complete the idea: the ovule is retained, fertilised in place, and packaged with food (haploid endosperm) and a coat into a true <b>seed</b>, but, lacking an ovary, that seed stays <b>naked</b>. Angiosperms (next) will add the final wrapping (the fruit) and the efficiency upgrades (vessels, double fertilisation, flowers).',
      },
      {
        t: 'p',
        html: '<b>Trend in order of increasing sporophyte dominance (whole chapter):</b> algae → bryophytes (gametophyte dominant) → pteridophytes (sporophyte dominant, seedless) → <b>gymnosperms (seeds, but naked)</b> → angiosperms (seeds enclosed in fruit). The arc is reduce the gametophyte, protect and provision the next generation, and cut dependence on water.',
      },
      { t: 'p', html: '<b>3.3 Special structures & adaptations</b>' },
      {
        t: 'p',
        html: '• <b>Conifer xeric adaptations:</b> needle-like leaves (reduced surface area), a thick cuticle, and sunken stomata, all to <b>minimise water loss</b> in cold, dry, windy habitats.<br>• <b><i>Cycas</i> oddities:</b> an unbranched stout stem; large pinnately compound leaves that persist for years; young leaves with <b>circinate vernation</b> (coiled like a fern’s); <b>coralloid roots</b> with cyanobacteria; <b>vessel-less</b> xylem; and among the <b>largest sperm</b> in the plant kingdom.<br>• <b>Sex distribution:</b> <i>Pinus</i> is <b>monoecious</b> (both cones on one tree); <i>Cycas</i> is <b>dioecious</b> (separate male and female plants).',
      },
      { t: 'p', html: '<b>3.4 Economic importance</b>' },
      {
        t: 'p',
        html: '• <b>Resin and turpentine</b> are obtained from <i>Pinus</i>.<br>• <b>Chilgoza</b> (edible pine nuts) comes from <i>Pinus gerardiana</i>.<br>• <b>Sago</b> is obtained from <i>Cycas revoluta</i> (true sago comes from the palm <i>Metroxylon</i>).<br>• <b>Canada balsam</b>, a mounting medium for microscope slides, comes from <i>Abies</i>.<br>• Conifers are major sources of <b>softwood timber</b>; the coast redwood (<i>Sequoia sempervirens</i>) is prized timber and the tallest tree species.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board level · 3 marks',
        q: 'Why are gymnosperms so named? State any two other features that distinguish them from angiosperms.',
        steps: [
          '<b>Model answer:</b> “Gymnosperm” means <b>naked seed</b> (gymnos = naked, sperma = seed): the ovules and seeds are <b>not enclosed within an ovary</b>, so no fruit is formed. Two further distinguishing features: (i) gymnosperms show <b>no double fertilisation</b>, whereas angiosperms do; (ii) the endosperm of gymnosperms is <b>haploid and forms before fertilisation</b>, while in angiosperms it is triploid and forms after fertilisation.',
          '<b>Why it scores:</b> defines the name precisely (naked + reason) and gives two paired contrasts on named axes.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level · match the column',
        q: 'Match each plant with its correct feature.<br>Column I:<br>A. <i>Pinus</i><br>B. <i>Cycas</i><br>C. <i>Ginkgo</i><br>Column II:<br>I. Coralloid roots with cyanobacteria<br>II. Monoecious; winged pollen<br>III. Single living species (“living fossil”)',
        steps: [
          '<b>Reasoning:</b> <i>Pinus</i> is monoecious with winged pollen (A–II). <i>Cycas</i> has coralloid roots housing N<sub>2</sub>-fixing cyanobacteria (B–I). <i>Ginkgo</i> survives as a single living species (C–III).',
        ],
        ans: 'A–II, B–I, C–III.',
      },
      {
        t: 'ex',
        tag: 'NEET level · multi-fact integration',
        q: 'A tall woody plant of cold-region forests bears two kinds of cones, its xylem contains only tracheids, and its seeds lie exposed on the scales of a woody cone. Name the group and state whether double fertilisation occurs in it. Also state the ploidy of its endosperm.',
        steps: [
          '<b>Reasoning:</b> Two cone types (heterosporous, strobili) + tracheid-only xylem + <b>naked seeds on cone scales</b> all converge on <b>gymnosperms</b>. Gymnosperms show <b>no double fertilisation</b> for NEET (only angiosperms make triploid endosperm by triple fusion; the small group Gnetales shows a double-fertilisation-like event). Their endosperm is <b>haploid (<i>n</i>)</b>, being the female gametophyte tissue formed before fertilisation.',
          '<b>Why NEET likes it:</b> it bundles habitat + anatomy + reproduction, and the two follow-up facts (no double fertilisation; haploid endosperm) are the exact pair students most often invert with angiosperms.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty · assertion–reason',
        q: '<b>Assertion (A):</b> In gymnosperms, the endosperm is formed before fertilisation. <b>Reason (R):</b> The endosperm of a gymnosperm is the haploid female gametophyte tissue, not a product of triple fusion.<br>Options: (a) Both true, R correct explanation. (b) Both true, R not the correct explanation. (c) A true, R false. (d) A false, R true.',
        steps: [
          '<b>Reasoning:</b> <b>A is true</b>: gymnosperm endosperm develops in the ovule before fertilisation. <b>R is true</b> and it is exactly why: because the nourishing tissue is the haploid female gametophyte itself (not the post-fertilisation triple-fusion product seen in angiosperms), it can and does form ahead of fertilisation. So R correctly explains A.',
          '<b>The trap:</b> a student carrying the angiosperm rule “endosperm = triploid, after fertilisation” may flag A as false and pick (d), missing that gymnosperms follow the opposite timing for the opposite reason.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define a coralloid root and name the plant in which it occurs. (2 marks)',
            a: 'A negatively geotropic, coral-like root of <i>Cycas</i> that houses symbiotic N<sub>2</sub>-fixing cyanobacteria.',
          },
          {
            q: '[CUET] Name the largest group of living gymnosperms and one example.',
            a: 'Conifers; e.g., <i>Pinus</i> (or <i>Cedrus</i>).',
          },
          {
            q: '[NEET] State the ploidy of the endosperm in (i) a gymnosperm and (ii) an angiosperm.',
            a: '(i) haploid (<i>n</i>); (ii) triploid (3<i>n</i>).',
          },
          {
            q: '[NEET] Which is monoecious and which is dioecious: <i>Pinus</i>, <i>Cycas</i>?',
            a: '<i>Pinus</i>: monoecious; <i>Cycas</i>: dioecious.',
          },
          {
            q: '[NEET high-difficulty / AR] <b>Assertion:</b> Gymnosperms do not require external water for fertilisation. <b>Reason:</b> Pollination is by wind and a pollen tube carries the male gamete to the egg. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '(a): both true and R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Gymnosperms differ from angiosperms in that gymnosperms:',
        opts: [
          {
            label: 'are non-vascular',
            nudge: '<b>(a)</b> is false: gymnosperms are vascular; chosen by students confusing them with bryophytes.',
          },
          { label: 'bear naked seeds', nudge: null },
          {
            label: 'lack archegonia',
            nudge: '<b>(c)</b> is reversed for nearly all gymnosperms: they <b>have</b> archegonia; it is angiosperms that lack them.',
          },
          {
            label: 'have triploid endosperm',
            nudge: '<b>(d)</b> is the <b>angiosperm</b> trait (3<i>n</i> endosperm); gymnosperm endosperm is haploid.',
          },
        ],
        correct: 1,
        solution: 'Naked, ovary-less seeds are the defining gymnosperm feature.',
      },
      {
        t: 'mcq',
        q: 'The endosperm of a gymnosperm is:',
        opts: [
          {
            label: 'triploid and post-fertilisation',
            nudge: '<b>(a)</b> describes the <b>angiosperm</b> endosperm exactly: the commonest trap.',
          },
          { label: 'haploid and pre-fertilisation', nudge: null },
          {
            label: 'diploid and pre-fertilisation',
            nudge: '<b>(c)</b> and <b>(d)</b> mix the right timing with the wrong ploidy, catching students who remember “before fertilisation” but guess the ploidy.',
          },
          {
            label: 'triploid and pre-fertilisation',
            nudge: '<b>(c)</b> and <b>(d)</b> mix the right timing with the wrong ploidy, catching students who remember “before fertilisation” but guess the ploidy.',
          },
        ],
        correct: 1,
        solution: 'It is the haploid female gametophyte, formed before fertilisation.',
      },
      {
        t: 'mcq',
        q: 'Coralloid roots with nitrogen-fixing cyanobacteria are characteristic of:',
        opts: [
          {
            label: '<i>Pinus</i>',
            nudge: '<b>(a)</b> <i>Pinus</i> has <b>mycorrhizal</b> (fungal) roots, a deliberately close distractor (fungal vs cyanobacterial association).',
          },
          { label: '<i>Cycas</i>', nudge: null },
          { label: '<i>Ginkgo</i>', nudge: '<b>(c)</b>, <b>(d)</b> are gymnosperms without this specialised root.' },
          { label: '<i>Sequoia</i>', nudge: '<b>(c)</b>, <b>(d)</b> are gymnosperms without this specialised root.' },
        ],
        correct: 1,
        solution: '<i>Cycas</i> bears coralloid roots housing cyanobacteria.',
      },
      {
        t: 'mcq',
        q: 'Which statement about <i>Pinus</i> is correct?',
        opts: [
          { label: 'It is dioecious', nudge: '<b>(a)</b> <i>Cycas</i> is dioecious, not <i>Pinus</i>, a classic swap.' },
          { label: 'Its xylem has vessels', nudge: '<b>(b)</b> gymnosperm xylem is <b>vessel-less</b> (tracheids only; vessels occur only in Gnetales).' },
          { label: 'It is monoecious with winged pollen', nudge: null },
          { label: 'Its seeds are enclosed in a fruit', nudge: '<b>(d)</b> all gymnosperm seeds are <b>naked</b>, no fruit.' },
        ],
        correct: 2,
        solution: '<i>Pinus</i> bears both cones on one tree and sheds winged pollen.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Inverting the endosperm rule.</b> Gymnosperm endosperm is <b>haploid and pre-fertilisation</b>; angiosperm endosperm is <b>triploid and post-fertilisation</b>. These are opposites on both counts: memorise them as a paired contrast, never singly.',
          '<b>Giving gymnosperms double fertilisation.</b> For NEET, double fertilisation belongs to <b>angiosperms</b>: no other group makes triploid endosperm by triple fusion. Gymnosperms have a single fertilisation and <b>no fruit</b>.',
          '<b>Mixing up the root associations.</b> <i>Pinus</i> → <b>mycorrhiza</b> (fungus); <i>Cycas</i> → <b>coralloid roots</b> (cyanobacteria). Don’t swap the partner.',
          '<b>Saying gymnosperm xylem has vessels.</b> It is <b>tracheids only</b> (vessels occur only in Gnetales): that’s why their wood is “softwood.” (<i>Cycas</i> is the textbook vessel-less example.)',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> Whenever a question pits gymnosperm against angiosperm, run the four-fact checklist in order: <b>seed (naked/covered) → fertilisation (single/double) → endosperm (<i>n</i> / 3<i>n</i>) → archegonia (present/absent).</b> Almost every gymnosperm-vs-angiosperm question is answered by one of these four; find which one the stem is testing and ignore the rest.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Definition:</b> seed-bearing <b>vascular</b> plants with <b>naked seeds</b> (no ovary, no fruit); “phanerogams without ovary.” <b>~900 species</b> (current counts nearer 1,000).',
            note: '',
          },
          {
            f: '<b>Groups:</b> <b>conifers</b> (largest: <i>Pinus</i>, <i>Cedrus</i>), <b>cycads</b> (<i>Cycas</i>), <b><i>Ginkgo</i></b> (living fossil, single sp.), <i>Gnetum</i>. Tap root; dominant in <b>cold/temperate</b> regions. coast redwood (<i>Sequoia sempervirens</i>) = tallest tree species.',
            note: '',
          },
          {
            f: '<b>Anatomy:</b> xylem = <b>tracheids, NO vessels</b> (except Gnetales; “softwood,” no xylem fibres); <b>transfusion tissue</b> in leaves; conifer leaves needle-like + thick cuticle + sunken stomata (water saving).',
            note: '',
          },
          {
            f: '<b>Roots:</b> <i>Pinus</i> → <b>mycorrhiza</b> (fungus); <i>Cycas</i> → <b>coralloid roots</b> (N<sub>2</sub>-fixing cyanobacteria).',
            note: '',
          },
          {
            f: '<b>Reproduction:</b> <b>heterosporous</b>; <b>cones/strobili</b> (microsporophyll→male cone, megasporophyll→female cone); gametophytes <b>reduced, not free-living</b> (♂ = pollen, ♀ retained in ovule with <b>archegonia</b>); <b>wind pollination</b> to micropyle; <b>pollen tube → no water needed</b> (but <i>Cycas</i> sperm motile); <b>haploid endosperm</b> formed <b>before</b> fertilisation; <b>no double fertilisation, no fruit, seeds not flowers</b>.',
            note: '',
          },
          { f: '<b>Sex:</b> <i>Pinus</i> <b>monoecious</b>; <i>Cycas</i> <b>dioecious</b>.', note: '' },
          {
            f: '<b>Economic:</b> resin/turpentine (<i>Pinus</i>), Chilgoza (<i>P. gerardiana</i>), sago (<i>Cycas revoluta</i>), Canada balsam (<i>Abies</i>), softwood timber.',
            note: '',
          },
          { f: '<b>Life cycle:</b> <b>diplontic</b> (sporophyte dominant).', note: '' },
        ],
        aids: [
          '“<b>Gymno = naked</b>” (no fruit).',
          'Gymno-vs-Angio endosperm: “Gymno <b>1n Before</b>, Angio <b>3n After</b>.”',
          'Roots: “<b>Pi</b>nus–<b>F</b>ungus, <b>Cy</b>cas–<b>C</b>yanobacteria.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 05 · pp. 175–183 ─────────────────────────
  {
    n: '05',
    title: 'Angiosperms',
    kalam: 'Angiosperms are the flowering plants, and they are everywhere and every size.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Angiosperms are heavily tested in NEET: the embryo sac structure, <b>double fertilisation</b>, and dicot-vs-monocot contrasts appear almost every year (the book’s estimate from past papers, not official figures), often as assertion–reason or “how many statements are correct.” CUET favours dicot/monocot match-the-column. CBSE Boards ask short comparisons and “why are angiosperms the most successful plants.” The embryo sac (7-celled, 8-nucleate) and triple fusion are high-yield facts.',
      },
      {
        t: 'p',
        html: 'If gymnosperms were the “first draft” of the seed plant (naked seeds, no wrapping), <b>angiosperms are the finished product</b>, and the most successful plants on Earth. The name says it: <b>angio</b> (covered/vessel) + <b>sperma</b> (seed): the seeds are <b>enclosed within a fruit.</b> Recall the contrast from the gymnosperm topic: a pine seed sits exposed on a cone scale; an apple’s seeds are sealed inside a fleshy fruit. That fruit is the angiosperm innovation, and it changed everything: fruits protect seeds and recruit animals to disperse them.',
      },
      {
        t: 'p',
        html: 'Angiosperms are the <b>flowering plants</b>, and they are everywhere and every size. The range is staggering: from the world’s smallest flowering plant, <b><i>Wolffia</i></b> (about a millimetre or less), to towering trees like <i>Eucalyptus</i> (over 100 m). They dominate nearly every habitat and supply almost all of humanity’s food: cereals, pulses, fruits, vegetables.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> the whole chapter has been a story of the <b>sporophyte taking over and the gametophyte shrinking.</b> In angiosperms that trend reaches its endpoint. The visible plant is entirely the <b>sporophyte (2<i>n</i>)</b>. The male gametophyte has shrunk to a <b>pollen grain of just a few cells</b>; the female gametophyte is a microscopic <b>embryo sac of seven cells</b> hidden inside the ovule. Neither is ever free-living. Compared with the big green moss gametophyte of bryophytes, this is total reduction.',
      },
      {
        t: 'p',
        html: 'Angiosperms also carry two signature upgrades over gymnosperms:<br>1. <b>The flower</b>: a specialised reproductive shoot, with the female parts (carpels/pistil) enclosing the ovules inside an <b>ovary</b> (so the seeds end up covered, and the ovary becomes the fruit).<br>2. <b>Double fertilisation</b>: an angiosperm event in which two fusion events occur, producing both the zygote and a special nutritive tissue. No other plant group makes triploid endosperm by triple fusion (the small gymnosperm group Gnetales shows a double-fertilisation-like event, but not this).',
      },
      { t: 'p', html: '<b>Limiting conditions & caveats.</b>' },
      {
        t: 'p',
        html: '• “Flower = always big and colourful” is wrong: grass flowers are tiny, wind-pollinated, and drab; <i>Wolffia</i>’s flower is microscopic.<br>• The detailed embryo-sac and double-fertilisation machinery is studied in depth in Class 12; here we need the structure and the outcome, not every developmental step.<br>• Dicot/monocot features are tendencies: exceptions exist (some monocots have reticulate venation, etc.), so judge on the whole set of characters.',
      },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      {
        t: 'p',
        html: '<b>2.1 The master split: Dicots vs Monocots</b><br>Angiosperms divide into two classes: <b>Dicotyledonae</b> (two cotyledons) and <b>Monocotyledonae</b> (one cotyledon).',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Dicotyledons', 'Monocotyledons'],
        rows: [
          ['Cotyledons in seed', '<b>Two</b>', '<b>One</b>'],
          ['Leaf venation', '<b>Reticulate</b> (net-like)', '<b>Parallel</b>'],
          ['Root system', '<b>Tap root</b>', '<b>Fibrous (adventitious)</b>'],
          ['Floral parts', '<b>Tetramerous / pentamerous</b> (in 4s or 5s)', '<b>Trimerous</b> (in 3s)'],
          [
            'Vascular bundles in stem',
            'Arranged in a <b>ring; open</b> (with cambium)',
            '<b>Scattered; closed</b> (no cambium)',
          ],
          ['Examples', 'Mango, pea, sunflower, mustard', 'Wheat, maize, rice, grasses, lily'],
        ],
      },
      {
        t: 'table',
        title: '2.2 The two gametophytes (highly reduced)',
        head: ['Gametophyte', 'Where it forms', 'Structure'],
        rows: [
          [
            '<b>Male</b> (pollen grain)',
            'In the <b>anther</b> (microsporangia): microspore mother cells → meiosis → microspores → pollen',
            'Mature pollen = <b>2 cells in most angiosperms (3-celled in some, as in grasses)</b>: a large <b>vegetative (tube) cell</b> + a small <b>generative cell</b>; the generative cell later forms <b>2 male gametes</b>',
          ],
          [
            '<b>Female</b> (embryo sac)',
            'In the <b>ovule</b> (megasporangium): megaspore mother cell → meiosis → 4 megaspores, <b>one functional</b> → embryo sac',
            'Typically <b>7-celled, 8-nucleate</b> (see the Comparative characteristics and life cycle part)',
          ],
        ],
      },
      { t: 'p', html: '<b>2.3 Key terms</b>' },
      {
        t: 'def',
        term: 'Angiosperm',
        html: 'a flowering plant whose seeds are <b>enclosed within a fruit</b> (developed from the ovary).',
      },
      {
        t: 'def',
        term: 'Carpel / pistil',
        html: 'the female reproductive unit, enclosing ovules within an <b>ovary</b> (the feature that makes the seed “covered”).',
      },
      { t: 'def', term: 'Embryo sac', html: 'the female gametophyte of angiosperms, lying inside the ovule.' },
      {
        t: 'def',
        term: 'Double fertilisation',
        html: 'the fusion of one male gamete with the egg (<b>syngamy</b>) and a second male gamete with the two polar nuclei (<b>triple fusion</b>); no other group makes triploid endosperm by triple fusion.',
      },
      {
        t: 'def',
        term: 'Endosperm',
        html: 'the nutritive tissue formed after triple fusion; in angiosperms it is <b>triploid (3<i>n</i>)</b>.',
      },

      { t: 'part', title: 'Comparative characteristics and life cycle' },
      {
        t: 'p',
        html: '<b>3.1 The embryo sac (female gametophyte): the structure to memorise</b><br>The mature embryo sac is <b>7-celled and 8-nucleate</b>. Its cells are arranged with beautiful regularity:',
      },
      {
        t: 'p',
        html: '• At the <b>micropylar end</b>: the <b>egg apparatus</b>, <b>one egg cell + two synergids</b> (3 cells).<br>• At the <b>chalazal end</b>: <b>three antipodal cells</b>.<br>• In the <b>centre</b>: one large <b>central cell</b> containing <b>two polar nuclei</b>.',
      },
      {
        t: 'p',
        html: 'Count the cells: 3 (egg apparatus) + 3 (antipodals) + 1 (central cell) = <b>7 cells</b>. Count the nuclei: the central cell holds <b>2</b> nuclei while the other 6 cells hold 1 each = <b>8 nuclei</b>. That mismatch (7 cells, 8 nuclei) is a high-yield numerical fact.',
      },
      { t: 'fig', id: 'b11-03-fig-3.5' },
      {
        t: 'p',
        html: '<b>3.2 Double fertilisation and triple fusion: the angiosperm signature</b><br>A pollen grain landing on the stigma germinates a <b>pollen tube</b> that grows down and delivers <b>two male gametes</b> into the embryo sac. Then two fusions happen, hence double fertilisation:<br>1. <b>Syngamy:</b> one male gamete fuses with the <b>egg</b> → a <b>diploid (2<i>n</i>) zygote</b> → embryo.<br>2. <b>Triple fusion:</b> the other male gamete fuses with the <b>two polar nuclei</b> of the central cell → a <b>triploid (3<i>n</i>) primary endosperm nucleus</b> → the <b>endosperm</b> (the embryo’s food supply).',
      },
      {
        t: 'p',
        html: 'male gamete + egg → zygote (2<i>n</i>);<br>male gamete + 2 polar nuclei → endosperm (3<i>n</i>)',
      },
      {
        t: 'p',
        html: 'No other group makes triploid endosperm by triple fusion. Contrast it sharply with gymnosperms (Topic 04), which have a single fertilisation and a haploid endosperm formed before fertilisation. In angiosperms the <b>triploid endosperm forms after fertilisation</b>.',
      },
      {
        t: 'p',
        html: '<b>3.3 Life cycle and the end of the gametophyte-reduction trend</b><br>Angiosperms are <b>diplontic</b>: the dominant, independent body is the <b>sporophyte (2<i>n</i>)</b>, and both gametophytes are microscopic and dependent.',
      },
      {
        t: 'p',
        html: '<b>sporophyte</b> (2<i>n</i>) →<sup>meiosis</sup> spores (<i>n</i>) → tiny gametophytes (<i>n</i>) →<sup>double fertilisation</sup> zygote (2<i>n</i>) + endosperm (3<i>n</i>) → seed in fruit',
      },
      {
        t: 'p',
        html: 'This completes the great arc of the chapter, in order of increasing sporophyte dominance:<br>algae (gametophyte often dominant) → bryophytes (gametophyte dominant) → pteridophytes (sporophyte dominant, seedless) → gymnosperms (naked seeds) → <b>angiosperms (seeds enclosed in fruit; gametophytes maximally reduced; double fertilisation)</b>',
      },
      { t: 'p', html: '<b>3.4 Why angiosperms are the most successful land plants</b>' },
      {
        t: 'p',
        html: '• <b>Flowers</b> enable efficient, often animal-assisted pollination.<br>• <b>Fruits</b> protect seeds and recruit animals for dispersal.<br>• <b>Double fertilisation</b> provisions each embryo with a fresh, efficient (triploid) food store made only when needed.<br>• <b>Vessels</b> in the xylem (usually present, unlike gymnosperms) improve water transport.',
      },
      {
        t: 'p',
        html: 'Together these let angiosperms colonise nearly every habitat and become the dominant flora of the planet, and the basis of human agriculture.',
      },
      {
        t: 'p',
        html: '<b>3.5 Economic importance (high-yield)</b><br>Angiosperms underpin almost the entire human food and material economy, a frequent CBSE/CUET one-liner source:',
      },
      {
        t: 'p',
        html: '• <b>Food:</b> cereals (rice, wheat, maize: all grasses, i.e. monocots), pulses/legumes (gram, pea: dicots), vegetables, fruits, sugar (sugarcane), and edible oils (mustard, groundnut).<br>• <b>Fibres:</b> cotton, jute, flax, the basis of textiles.<br>• <b>Timber and fuel:</b> hardwood trees (teak, <i>Shorea</i>/sal, oak) for construction and furniture.<br>• <b>Medicines:</b> many drugs are angiosperm-derived (e.g., quinine from <i>Cinchona</i>, morphine from poppy, reserpine from <i>Rauwolfia</i>).<br>• <b>Beverages, spices, and ornamentals:</b> tea, coffee; pepper, clove, cardamom; and the vast majority of garden and decorative plants.',
      },
      {
        t: 'p',
        html: 'The practical takeaway: nearly every staple crop a student can name is an angiosperm, which is why this group matters so much to human life.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board level · 3 marks',
        q: 'Describe the structure of a typical angiosperm embryo sac. How many cells and nuclei does it contain?',
        steps: [
          '<b>Model answer:</b> A mature embryo sac is <b>7-celled and 8-nucleate</b>. At the micropylar end lies the <b>egg apparatus</b> (one <b>egg cell</b> + two <b>synergids</b>); at the chalazal end are <b>three antipodal cells</b>; the centre holds one large <b>central cell with two polar nuclei</b>. Thus 3 + 3 + 1 = <b>7 cells</b>, and (with the central cell bearing 2 nuclei) <b>8 nuclei</b>.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level · match the column',
        q: 'Column I:<br>A. Parallel venation<br>B. Two cotyledons<br>C. Naked seeds in cones<br>Column II:<br>I. Conifer<br>II. Monocot<br>III. Dicot',
        steps: [
          '<b>Reasoning:</b> Parallel venation → monocot (A–II). Two cotyledons → dicot (B–III). Naked seeds borne in cones (no ovary, no fruit) → conifer, a gymnosperm (C–I). Monocots and dicots are both angiosperms, whose seeds are enclosed in a fruit, so only the conifer fits C.',
          '<b>Speed tip:</b> lock the two you are certain of (parallel→monocot; two cotyledons→dicot); the third follows.',
        ],
        ans: 'A–II, B–III, C–I.',
      },
      {
        t: 'ex',
        tag: 'NEET level · multi-fact integration',
        q: 'In an angiosperm, a male gamete fuses with the two polar nuclei. Name this event, state the ploidy of the product, and name the tissue it forms. Is this event found in gymnosperms?',
        steps: [
          '<b>Reasoning:</b> Fusion of a male gamete with the <b>two polar nuclei</b> is <b>triple fusion</b> (part of double fertilisation). The product is the <b>triploid (3<i>n</i>) primary endosperm nucleus</b>, which forms the <b>endosperm</b>. No other group makes triploid endosperm by triple fusion: gymnosperms show no double fertilisation (their endosperm is haploid and pre-fertilisation).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty · assertion–reason',
        q: '<b>Assertion (A):</b> The angiosperm embryo sac contains seven cells but eight nuclei. <b>Reason (R):</b> The central cell of the embryo sac contains two polar nuclei.<br>Options: (a) Both true, R correct explanation. (b) Both true, R not the correct explanation. (c) A true, R false. (d) A false, R true.',
        steps: [
          '<b>Reasoning:</b> <b>A is true</b> (egg apparatus 3 + antipodals 3 + central cell 1 = 7 cells; 8 nuclei). <b>R is true</b> and is exactly the reason for the count mismatch: six cells have one nucleus each, but the single central cell carries <b>two</b> polar nuclei → 7 cells, 8 nuclei. R correctly explains A.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why are angiosperm seeds described as “covered”? (2 marks)',
            a: 'Because the ovules (and the seeds that develop from them) are enclosed within the ovary, which matures into a fruit.',
          },
          {
            q: '[CUET] State the ploidy of (i) the zygote and (ii) the endosperm in an angiosperm.',
            a: '(i) diploid (2<i>n</i>); (ii) triploid (3<i>n</i>).',
          },
          {
            q: '[NEET] How many cotyledons, and what venation, characterise a monocotyledon?',
            a: 'One cotyledon; parallel venation.',
          },
          {
            q: '[NEET] Name the two cells present in a mature pollen grain (2-celled in most angiosperms; 3-celled in some, as in grasses).',
            a: 'A vegetative (tube) cell and a generative cell.',
          },
          {
            q: '[NEET high-difficulty / AR] <b>Assertion:</b> Double fertilisation is unique to angiosperms. <b>Reason:</b> In angiosperms two male gametes are delivered into the embryo sac, one fusing with the egg and the other with the polar nuclei. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '(a): both true and R correctly explains A (the NEET answer; strictly, what no other group does is make triploid endosperm by triple fusion, since Gnetales show a double-fertilisation-like event).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The angiosperm embryo sac is typically:',
        opts: [
          { label: '8-celled, 7-nucleate', nudge: '<b>(a)</b> inverts the numbers.' },
          { label: '7-celled, 8-nucleate', nudge: null },
          {
            label: '7-celled, 7-nucleate',
            nudge: '<b>(c)</b>/<b>(d)</b> forget that the central cell carries <b>two</b> polar nuclei.',
          },
          {
            label: '8-celled, 8-nucleate',
            nudge: '<b>(c)</b>/<b>(d)</b> forget that the central cell carries <b>two</b> polar nuclei.',
          },
        ],
        correct: 1,
        solution: 'Six uninucleate cells + one binucleate central cell = 7 cells, 8 nuclei.',
      },
      {
        t: 'mcq',
        q: 'Triple fusion in angiosperms produces a structure that is:',
        opts: [
          { label: 'diploid', nudge: '<b>(a)</b> is the zygote (syngamy product).' },
          { label: 'haploid', nudge: '<b>(b)</b> is the gymnosperm endosperm trap.' },
          { label: 'triploid', nudge: null },
          { label: 'tetraploid', nudge: '<b>(d)</b> over-counts.' },
        ],
        correct: 2,
        solution: 'One male gamete (<i>n</i>) + two polar nuclei (<i>n</i> + <i>n</i>) = 3<i>n</i>.',
      },
      {
        t: 'mcq',
        q: 'Which set of features is correct for a monocotyledon?',
        opts: [
          { label: 'Two cotyledons, reticulate venation, tap root', nudge: '<b>(a)</b> is the full <b>dicot</b> set.' },
          { label: 'One cotyledon, parallel venation, fibrous root', nudge: null },
          {
            label: 'One cotyledon, reticulate venation, tap root',
            nudge: '<b>(c)</b>/<b>(d)</b> are mismatched hybrids designed to catch partial memorisation.',
          },
          {
            label: 'Two cotyledons, parallel venation, fibrous root',
            nudge: '<b>(c)</b>/<b>(d)</b> are mismatched hybrids designed to catch partial memorisation.',
          },
        ],
        correct: 1,
        solution: 'Monocots: one cotyledon, parallel venation, fibrous roots.',
      },
      {
        t: 'mcq',
        q: 'The endosperm of an angiosperm differs from that of a gymnosperm in that the angiosperm endosperm is:',
        opts: [
          {
            label: 'haploid and pre-fertilisation',
            nudge: '<b>(a)</b> describes the <b>gymnosperm</b> endosperm exactly: the key contrast trap.',
          },
          { label: 'triploid and post-fertilisation', nudge: null },
          {
            label: 'diploid and post-fertilisation',
            nudge: '<b>(c)</b>/<b>(d)</b> mix the right timing with the wrong ploidy.',
          },
          {
            label: 'haploid and post-fertilisation',
            nudge: '<b>(c)</b>/<b>(d)</b> mix the right timing with the wrong ploidy.',
          },
        ],
        correct: 1,
        solution: 'Angiosperm endosperm forms after triple fusion and is triploid.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“7 cells, 8 nuclei” inversion.</b> The central cell is <b>binucleate</b>: that is the whole reason cells and nuclei differ. Never write “8 cells.”',
          '<b>Confusing syngamy and triple fusion. Syngamy → 2<i>n</i> zygote (egg + 1 male gamete); triple fusion → 3<i>n</i> endosperm (2 polar nuclei + 1 male gamete).</b> Keep the products straight.',
          '<b>Carrying the gymnosperm endosperm rule over.</b> Angiosperm endosperm is <b>3n, after fertilisation</b>; gymnosperm is <b>n, before fertilisation</b>: exact opposites.',
          '<b>Memorising dicot/monocot features singly.</b> Learn each as a set of five (cotyledon, venation, root, floral merosity, vascular bundles) so a mismatched-hybrid distractor can’t catch you.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For embryo-sac questions, draw the quick mental picture: egg + 2 synergids at one end, 3 antipodals at the other, 1 central cell with 2 nuclei in the middle. The “7 cells / 8 nuclei” answer falls straight out of the sketch.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Definition:</b> flowering plants; <b>seeds enclosed in a fruit</b> (ovary). Most successful, most diverse plants. Range: <i>Wolffia</i> (smallest) → <i>Eucalyptus</i> (tall).',
            note: '',
          },
          {
            f: '<b>Two classes: Dicots</b> (2 cotyledons, reticulate venation, tap root, floral parts in 4s/5s, ringed open bundles) vs <b>Monocots</b> (1 cotyledon, parallel venation, fibrous root, parts in 3s, scattered closed bundles).',
            note: '',
          },
          {
            f: '<b>Male gametophyte:</b> pollen grain = <b>2 cells in most angiosperms (3-celled in some, as in grasses)</b> (vegetative/tube + generative → 2 male gametes).',
            note: '',
          },
          {
            f: '<b>Female gametophyte (embryo sac): 7 cells, 8 nuclei</b> = egg apparatus (1 egg + 2 synergids) + 3 antipodals + 1 central cell (2 polar nuclei).',
            note: '',
          },
          {
            f: '<b>Double fertilisation (the NEET answer for angiosperms only; no other group makes triploid endosperm by triple fusion): syngamy</b> (male gamete + egg → <b>2n zygote</b>) + <b>triple fusion</b> (male gamete + 2 polar nuclei → <b>3n endosperm</b>).',
            note: '',
          },
          { f: '<b>Endosperm: triploid (3<i>n</i>), after fertilisation</b> (vs gymnosperm <i>n</i>, before).', note: '' },
          { f: '<b>Life cycle: diplontic</b> (sporophyte dominant; gametophytes maximally reduced).', note: '' },
        ],
        aids: [
          '“<b>Angio = covered</b> seed (in fruit).”',
          'Embryo sac: “<b>3 + 3 + 1 = 7 cells, but 8 nuclei</b> (centre has 2).”',
          '“<b>Syngamy → 2<i>n</i>, Triple fusion → 3<i>n</i>.</b>”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 06 · pp. 183–188 ─────────────────────────
  {
    n: '06',
    title: 'Plant Life Cycles & Alternation of Generations',
    kalam:
      'Every plant lives a double life, alternating between two distinct multicellular (or reduced) phases.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the chapter’s unifying idea and a classic NEET/CUET topic: “in which life cycle is the gametophyte dominant?”, “where does meiosis occur?”, and example-grouping questions appear almost every year (the book’s estimate from past papers, not official figures), frequently as assertion–reason. Mastering the three patterns ties the entire chapter together and converts scattered facts into one framework.',
      },
      {
        t: 'p',
        html: 'Across this whole chapter, one idea kept returning: from the algae, through mosses and ferns, to gymnosperms and angiosperms. Now we name it properly. Every plant lives a <b>double life</b>, alternating between two distinct multicellular (or reduced) phases:<br>• a <b>haploid gametophyte (<i>n</i>)</b>: the phase that produces <b>gametes</b>, and<br>• a <b>diploid sporophyte (2<i>n</i>)</b>: the phase that produces <b>spores</b>.',
      },
      {
        t: 'p',
        html: 'This back-and-forth is called <b>alternation of generations.</b> Two events flip the plant between the two phases:<br>• <b>Fertilisation</b> (two gametes fuse) takes the plant from haploid → diploid.<br>• <b>Meiosis</b> takes it from diploid → haploid.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine a relay race run by a team of two: one runner is the gametophyte, the other the sporophyte. They must alternate; neither runs the whole race. <b>Fertilisation</b> is the baton pass from gametophyte to sporophyte; <b>meiosis</b> is the baton pass back. Every plant runs this same two-runner relay: what differs between groups is simply <b>which runner does most of the running</b> (which phase is dominant and free-living) and <b>at which point the baton (meiosis) is passed.</b>',
      },
      {
        t: 'p',
        html: 'That single variable (which phase dominates) sorts all plant life cycles into <b>three patterns</b>: haplontic, diplontic, and haplo-diplontic. And the grand story of the plant kingdom is the steady shift of dominance <b>from gametophyte to sporophyte</b> as we move from algae to flowering plants.',
      },
      { t: 'p', html: '<b>Limiting conditions & caveats.</b>' },
      {
        t: 'p',
        html: '• “Alternation of generations” does not mean the two phases look alike or are equally sized: usually one is dominant and the other is greatly reduced.<br>• The phases are defined by <b>ploidy and function</b> (<i>n</i>/gametes vs 2<i>n</i>/spores), not by size: a reduced gametophyte is still a gametophyte.<br>• Meiosis happens <b>once per cycle</b>, and where it happens (in the zygote, at gamete formation, or at spore formation) separates the patterns in the algae, bryophytes and pteridophytes. Seed plants are the exception: NCERT calls them diplontic, though their meiosis forms spores.',
      },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      {
        t: 'table',
        title: '2.1 The three life-cycle patterns',
        head: ['Pattern', 'Dominant free-living phase', 'Other phase', 'Where meiosis occurs', 'Examples'],
        rows: [
          [
            '<b>Haplontic</b>',
            '<b>Gametophyte (<i>n</i>)</b>',
            'Sporophyte = single-celled <b>zygote</b>',
            '<b>Zygotic</b> (zygote divides by meiosis)',
            'Many green algae: <i>Volvox</i>, <i>Spirogyra</i>, some <i>Chlamydomonas</i>',
          ],
          [
            '<b>Diplontic</b>',
            '<b>Sporophyte (2<i>n</i>)</b>',
            'Gametophyte much reduced and never free-living (the pollen grain, and the female gametophyte inside the ovule, which in angiosperms is the embryo sac) or reduced to the gametes alone (<i>Fucus</i>)',
            '<b>Gametic</b> in <i>Fucus</i> (meiosis forms gametes); in seed plants meiosis forms spores, which grow into much-reduced gametophytes',
            'Seed plants (gymnosperms, angiosperms); <i>Fucus</i> (brown alga)',
          ],
          [
            '<b>Haplo-diplontic</b>',
            '<b>Both</b> multicellular',
            '(two visible bodies alternate)',
            '<b>Sporic</b> (meiosis forms spores)',
            'Bryophytes (gametophyte-dominant), pteridophytes (sporophyte-dominant); <i>Ectocarpus</i>, <i>Polysiphonia</i>, kelps',
          ],
        ],
      },
      { t: 'p', html: '<b>2.2 Key terms</b>' },
      { t: 'def', term: 'Gametophyte (<i>n</i>)', html: 'the haploid, gamete-producing phase.' },
      { t: 'def', term: 'Sporophyte (2<i>n</i>)', html: 'the diploid, spore-producing phase.' },
      {
        t: 'def',
        term: 'Alternation of generations',
        html: 'the regular cycling between gametophyte and sporophyte, linked by fertilisation and meiosis.',
      },
      {
        t: 'def',
        term: 'Haplontic',
        html: 'gametophyte dominant; the only diploid cell is the zygote, which undergoes <b>zygotic meiosis</b>.',
      },
      {
        t: 'def',
        term: 'Diplontic',
        html: 'sporophyte dominant; the haploid phase is reduced to a few cells or to the gametes alone, and is never free-living.',
      },
      {
        t: 'def',
        term: 'Haplo-diplontic',
        html: 'both generations multicellular; meiosis is <b>sporic</b> (produces spores), and the cycle alternates between two distinct bodies.',
      },

      { t: 'part', title: 'Comparative characteristics and the evolutionary sweep' },
      {
        t: 'p',
        html: '<b>3.1 Reading the three patterns off “where meiosis happens”</b><br>A clean way to tell the patterns apart is to ask <b>where in the cycle meiosis occurs</b>, because that fixes which phase gets to be big:',
      },
      {
        t: 'p',
        html: '• <b>Zygotic meiosis (haplontic):</b> the zygote (2<i>n</i>) is the only diploid cell and it immediately divides by meiosis. The diploid phase therefore never builds a body, so the <b>gametophyte dominates</b>. (Many green algae.)<br>• <b>Gametic meiosis (diplontic algae such as <i>Fucus</i>):</b> meiosis happens only when gametes are made, so the haploid phase is just the gametes, never a body. Hence the <b>sporophyte dominates</b>. (<i>Fucus</i>.) Seed plants are also called diplontic (sporophyte dominant), though meiosis there forms spores.<br>• <b>Sporic meiosis (haplo-diplontic):</b> meiosis produces spores, and both the spore-grown gametophyte and the zygote-grown sporophyte develop into multicellular bodies, so <b>both phases are visible</b>, with one or the other larger depending on the group. (Bryophytes: gametophyte larger; pteridophytes: sporophyte larger.)',
      },
      {
        t: 'p',
        html: '<b>3.2 The grand trend of the plant kingdom</b><br>Lay the chapter’s groups in order of increasing sporophyte dominance and one direction is unmistakable: <b>the sporophyte progressively takes over while the gametophyte progressively shrinks.</b><br>Algae → Bryophytes → Pteridophytes → Gymnosperms → Angiosperms',
      },
      {
        t: 'p',
        html: '• <b>Algae:</b> gametophyte (haploid) phase commonly dominant (haplontic in many).<br>• <b>Bryophytes:</b> haplo-diplontic, but the <b>gametophyte still dominates</b>; the sporophyte is small and dependent.<br>• <b>Pteridophytes:</b> haplo-diplontic, but now the <b>sporophyte dominates</b>; the gametophyte is a small free-living prothallus.<br>• <b>Gymnosperms & Angiosperms: diplontic</b>: the sporophyte is everything; the gametophytes are much reduced and never free-living (the pollen grain; the female gametophyte inside the ovule, the embryo sac in angiosperms).',
      },
      {
        t: 'p',
        html: 'The biological logic: a dominant <b>diploid</b> sporophyte carries two copies of every gene (buffering harmful mutations) and, in seed plants, can protect and provision the next generation independently of water. The reduction of the gametophyte and the rise of the sporophyte is the central evolutionary theme of land-plant success.',
      },
      {
        t: 'p',
        html: '<b>3.3 The intermediate, bridging forms</b><br>Some organisms sit between the patterns and are classics precisely because they bridge:<br>• Among brown algae, <b><i>Ectocarpus</i></b> is haplo-diplontic while <b><i>Fucus</i></b> is diplontic: a neat within-group contrast.<br>• <b>Bryophytes vs pteridophytes</b> both share the haplo-diplontic pattern yet differ in which generation dominates: the cleanest illustration that “haplo-diplontic” does not by itself tell you the dominant phase.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board level · 3 marks',
        q: 'Define alternation of generations. Name the two events that link the two generations.',
        steps: [
          '<b>Model answer:</b> <b>Alternation of generations</b> is the regular cycling, in a plant’s life cycle, between a haploid <b>gametophyte (<i>n</i>)</b> that produces gametes and a diploid <b>sporophyte (2<i>n</i>)</b> that produces spores. The two linking events are <b>fertilisation</b> (gametes fuse: <i>n</i> → 2<i>n</i>) and <b>meiosis</b> (2<i>n</i> → <i>n</i>).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level · match the column',
        q: 'Column I:<br>A. Haplontic<br>B. Diplontic<br>C. Haplo-diplontic<br>Column II:<br>I. <i>Fucus</i>, seed plants<br>II. Bryophytes, <i>Ectocarpus</i><br>III. <i>Volvox</i>, <i>Spirogyra</i>',
        steps: [
          '<b>Reasoning:</b> Haplontic → many green algae like <i>Volvox</i>, <i>Spirogyra</i> (A–III). Diplontic → <i>Fucus</i> and seed plants (B–I). Haplo-diplontic → bryophytes and <i>Ectocarpus</i> (C–II).',
        ],
        ans: 'A–III, B–I, C–II.',
      },
      {
        t: 'ex',
        tag: 'NEET level · concept application',
        q: 'In a certain alga, the zygote is the only diploid cell and it undergoes meiosis on germination. Name the life-cycle pattern, state which generation is dominant, and give an example.',
        steps: [
          '<b>Reasoning:</b> Zygote as the <b>only diploid cell</b> + <b>zygotic meiosis</b> defines the <b>haplontic</b> pattern. Because the diploid phase never forms a body, the <b>gametophyte is dominant</b>. Example: <i>Spirogyra</i> (or <i>Volvox</i>).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty · assertion–reason',
        q: '<b>Assertion (A):</b> Both bryophytes and pteridophytes show a haplo-diplontic life cycle, yet their dominant generations differ. <b>Reason (R):</b> In bryophytes the gametophyte is the dominant phase, whereas in pteridophytes the sporophyte is dominant.<br>Options: (a) Both true, R correct explanation. (b) Both true, R not the correct explanation. (c) A true, R false. (d) A false, R true.',
        steps: [
          '<b>Reasoning:</b> <b>A is true</b>: both are haplo-diplontic (both generations multicellular), but the dominant phase differs. <b>R is true</b> and states exactly why the dominant generations differ (gametophyte in bryophytes, sporophyte in pteridophytes). R correctly explains A.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Which two processes connect the haploid and diploid phases of a plant life cycle? (2 marks)',
            a: 'Fertilisation (<i>n</i> → 2<i>n</i>) and meiosis (2<i>n</i> → <i>n</i>).',
          },
          {
            q: '[CUET] In which life-cycle pattern is the sporophyte reduced to a single-celled zygote?',
            a: 'Haplontic.',
          },
          {
            q: '[NEET] State where meiosis occurs (zygotic / gametic / sporic) in (i) haplontic and (ii) diplontic cycles.',
            a: '(i) zygotic; (ii) gametic in <i>Fucus</i>; in seed plants meiosis forms spores.',
          },
          {
            q: '[NEET] Name one brown alga that is haplo-diplontic and one that is diplontic.',
            a: 'Haplo-diplontic: <i>Ectocarpus</i>; diplontic: <i>Fucus</i>.',
          },
          {
            q: '[NEET high-difficulty / AR] <b>Assertion:</b> The plant kingdom shows a trend of increasing sporophyte dominance from algae to angiosperms. <b>Reason:</b> The gametophyte becomes progressively reduced along the same series. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '(a): both true and R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In a haplontic life cycle, meiosis occurs in the:',
        opts: [
          { label: 'gametes', nudge: '<b>(a)</b> is <b>gametic</b> meiosis (diplontic).' },
          { label: 'spore mother cells', nudge: '<b>(b)</b> is <b>sporic</b> meiosis (haplo-diplontic).' },
          { label: 'zygote', nudge: null },
          { label: 'gametophyte tips', nudge: '<b>(d)</b> is a distractor: meiosis is not a generic “tip” event.' },
        ],
        correct: 2,
        solution: 'The zygote (the only diploid cell) divides by meiosis (zygotic meiosis).',
      },
      {
        t: 'mcq',
        q: 'Which group best represents a diplontic life cycle?',
        opts: [
          { label: 'Mosses', nudge: '<b>(a)</b>/<b>(d)</b> are bryophytes (gametophyte-dominant haplo-diplontic).' },
          {
            label: 'Ferns',
            nudge: '<b>(b)</b> ferns are sporophyte-dominant <b>haplo-diplontic</b>, a very close trap, but they still have a free-living gametophyte (prothallus), so they are not diplontic.',
          },
          { label: 'Seed plants', nudge: null },
          { label: 'Liverworts', nudge: '<b>(a)</b>/<b>(d)</b> are bryophytes (gametophyte-dominant haplo-diplontic).' },
        ],
        correct: 2,
        solution: 'Gymnosperms and angiosperms are diplontic (sporophyte dominant; gametophytes reduced to a few cells, and meiosis forms spores).',
      },
      {
        t: 'mcq',
        q: '“Haplo-diplontic” specifically means that:',
        opts: [
          { label: 'the gametophyte is always dominant', nudge: '<b>(a)</b>/<b>(b)</b> over-claim a fixed dominance.' },
          { label: 'the sporophyte is always dominant', nudge: '<b>(a)</b>/<b>(b)</b> over-claim a fixed dominance.' },
          { label: 'both gametophyte and sporophyte are multicellular', nudge: null },
          { label: 'only the zygote is diploid', nudge: '<b>(d)</b> describes the <b>haplontic</b> pattern.' },
        ],
        correct: 2,
        solution: 'Both generations are multicellular; which one dominates varies by group.',
      },
      {
        t: 'mcq',
        q: 'The overall evolutionary trend in plant life cycles from algae to angiosperms is:',
        opts: [
          { label: 'increasing gametophyte dominance', nudge: '<b>(a)</b> reverses the trend.' },
          { label: 'increasing sporophyte dominance', nudge: null },
          {
            label: 'loss of meiosis',
            nudge: '<b>(c)</b>/<b>(d)</b> are impossible: both meiosis and fertilisation are retained in every sexual life cycle.',
          },
          {
            label: 'loss of fertilisation',
            nudge: '<b>(c)</b>/<b>(d)</b> are impossible: both meiosis and fertilisation are retained in every sexual life cycle.',
          },
        ],
        correct: 1,
        solution: 'The sporophyte becomes progressively dominant; the gametophyte is reduced.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting where meiosis happens.</b> In the algae, bryophytes and pteridophytes it is the cleanest discriminator: <b>zygotic = haplontic, gametic = diplontic, sporic = haplo-diplontic.</b> Seed plants are the exception: diplontic by NCERT’s convention, though their meiosis forms spores, because their gametophytes are never free-living.',
          '<b>Assuming “haplo-diplontic” tells you the dominant phase.</b> It does <b>not</b>: bryophytes (gametophyte-dominant) and pteridophytes (sporophyte-dominant) are both haplo-diplontic.',
          '<b>Calling ferns “diplontic.”</b> Ferns are sporophyte-dominant but have a <b>free-living gametophyte (prothallus)</b>, so they are <b>haplo-diplontic</b>, not diplontic. The diplontic examples to remember are the seed plants and, among algae, <i>Fucus</i>.',
          '<b>Mixing dominance with size of body.</b> Dominance is about which phase is the <b>free-living, independent, longer-lived</b> body, not merely which looks bigger in a single drawing.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Answer life-cycle questions in two steps: (1) where is meiosis? fixes the pattern (a seed plant is diplontic whatever its meiosis, since its gametophytes are never free-living); (2) the pattern fixes the dominant phase (haplontic→gametophyte, diplontic→sporophyte, haplo-diplontic→check the group). This two-step beats rote-memorising every example.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Core:</b> every plant alternates <b>gametophyte (<i>n</i>, makes gametes)</b> ⇄ <b>sporophyte (2<i>n</i>, makes spores)</b>; linked by <b>fertilisation</b> (<i>n</i> → 2<i>n</i>) and <b>meiosis</b> (2<i>n</i> → <i>n</i>).',
            note: '',
          },
          {
            f: '<b>Haplontic:</b> gametophyte dominant; zygote = only 2<i>n</i> cell; <b>zygotic</b> meiosis. <i>Volvox</i>, <i>Spirogyra</i>.',
            note: '',
          },
          {
            f: '<b>Diplontic:</b> sporophyte dominant; haploid phase reduced to the gametes (<i>Fucus</i>, <b>gametic</b> meiosis) or to a few cells (seed plants, where meiosis forms spores).',
            note: '',
          },
          {
            f: '<b>Haplo-diplontic:</b> both multicellular; <b>sporic</b> meiosis. Bryophytes (gametophyte-dominant), pteridophytes (sporophyte-dominant), <i>Ectocarpus</i>, kelps.',
            note: '',
          },
          {
            f: '<b>Trend:</b> sporophyte dominance ↑, gametophyte ↓ across <b>algae → bryophytes → pteridophytes → gymnosperms → angiosperms.</b>',
            note: '',
          },
        ],
        aids: [
          'meiosis site → “<b>Z</b>ygotic-haplontic, <b>G</b>ametic-diplontic, <b>S</b>poric-haplo-diplontic” (Z-G-S).',
          '“<b>Haplontic = Haploid runs the show; Diplontic = Diploid runs the show.</b>”',
        ],
      },
    ],
  },
];
