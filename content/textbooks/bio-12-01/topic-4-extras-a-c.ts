import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 1 (Sexual Reproduction in Flowering Plants), Topic 04 and Additional topics A to C, word for word
 * from the Class 12 Biology Master Reference (book pp. 30 to 46): Topic 04 "Apomixis & Polyembryony" (the book's
 * "Part IV", p. 30 to p. 36; Figure 1.6 is captioned on p. 32 and drawn on p. 33), then the shared introduction to the
 * Additional Topics (p. 37, the paragraph before Addendum A, which opens Additional topic A's Introduction),
 * A "Seed Dormancy: Types, Hormonal Mechanism, and Breaking Methods" (p. 37 to p. 41), B "Self-Incompatibility: Genetic
 * Systems and Mechanisms" (mid p. 41 to the top of p. 44) and C "Pollen Tube Guidance: Chemotropism and the Guidance
 * Pathway" (mid p. 44 to p. 46, ending with its practice answers). Addendum D begins mid p. 46 (the next writer).
 *
 * Topic indexes: Topic 04 = 3, A = 4, B = 5, C = 6. Em dashes of the book are written as a colon, commas or brackets
 * (every one is listed in the report). The book's "Example A.1 - [CBSE Board] Title" becomes the tag (the bracket) and a
 * bold lead on the question. S-allele symbols (S1, S2) are upright with real subscripts, as the page prints them.
 * Where the book prints no answer line of its own, the example's ans is ''.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 30–36 ─────────────────────────
  {
    n: '04',
    title: 'Apomixis & Polyembryony',
    kalam: 'Apomixis is a photocopier: the mother simply runs off copies of herself.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A small closing topic with some high-scoring items. CBSE Boards ask a 2-mark “define apomixis / its significance” or the classic apomixis-vs-parthenocarpy distinction. NEET asks 1–2 direct questions in many years (the NEET item “seed without fertilisation → apomixis” from a recent paper is a recurring template). CUET favours matching and one-liners (the book’s estimate from past papers, not official figures). The apomixis classification below is <b>beyond NCERT</b>, included only for the NEET-advanced rung.',
      },
      {
        t: 'p',
        html: 'We have just spent two topics insisting that a seed is the product of fertilization: pollen meets egg, syngamy makes a zygote, the zygote becomes the embryo inside the seed. <b>Apomixis</b> quietly breaks that rule. It is the plant’s way of producing a perfectly good seed <b>without</b> fertilization (and, in the usual routes, without meiosis as well). The seed looks normal, germinates normally, and grows into a normal plant, but no sperm and egg ever fused to make it.',
      },
      {
        t: 'p',
        html: 'Think of it like a photocopier versus a marriage. Normal sexual seed-making is a marriage: two genomes combine, the child is a new mix. Apomixis is a photocopier: the mother simply runs off copies of herself. Every apomictic seedling is a <b>clone</b> of the mother plant, genetically identical to her and to its siblings. That is the whole point, and it is also the catch: apomixis produces <b>no new genetic variation</b>, because, in the usual routes, there is no meiosis (no crossing over) and no fusion of two different genomes.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Why would a plant want to clone itself through seeds when it already has the powerful tool of sexual reproduction? Because sometimes uniformity is exactly what you need. Imagine a farmer who has, after years of effort, bred a perfect hybrid mango, but its seeds, made sexually, would scatter into a lottery of unpredictable offspring. If that plant is <b>apomictic</b>, its seeds breed true: every one carries the prize combination unchanged. This is why apomixis is a holy grail for the hybrid-seed industry: it would let farmers re-sow saved seed year after year without losing hybrid vigour.',
      },
      {
        t: 'p',
        html: '<b>Polyembryony</b> is the second character in this topic, and it is simpler: it just means <b>more than one embryo inside a single seed</b>. Crack open certain orange or lemon seeds and you may find several little seedlings waiting inside, like twins (or quintuplets) sharing one room. Often these extra embryos are themselves clones of the mother, and that link is where apomixis and polyembryony meet.',
      },
      {
        t: 'p',
        html: 'The NCERT Exemplar specifically asks how polyembryony can be commercially exploited, so it is worth seeing the practical payoff up front. When the extra embryos come from the mother’s <b>nucellus</b>, the resulting seedlings are genetically uniform copies of the parent. A grower can therefore raise an entire orchard of identical, true-to-type citrus plants from seed, and because these <b>nucellar seedlings tend to be disease-free and hold their vigour for many years</b>, they are often healthier than plants raised by ordinary cuttings or grafting. Polyembryony, in other words, turns a seed into a reliable cloning device. (Strictly, nucellar seedlings are usually free of the viruses of the mother plant; they are not immune to disease, and commercial citrus is mostly budded or grafted, using nucellar seedlings as rootstocks.)',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Keep three “without fertilization” ideas strictly apart: <b>apomixis</b> makes a <b>seed</b> without fertilization; <b>parthenocarpy</b> makes a <b>seedless fruit</b> without fertilization; <b>parthenogenesis</b> is an unfertilised egg developing into an embryo or organism (the usual example is animals, such as honeybee drones; in plants the same step occurs inside some apomixis routes). Students lose easy marks by swapping these. Also note: an apomictic embryo sac can look completely normal under the microscope yet contain <b>diploid</b> cells; that diploidy is the tell-tale sign that meiosis was skipped.',
      },

      { t: 'part', title: 'Key definitions and terms' },
      {
        t: 'def',
        term: 'Apomixis',
        html: 'a special mechanism in flowering plants that produces <b>seeds without fertilization</b> of the egg (the NCERT definition). In the usual routes the embryo sac or embryo forms <b>without meiosis</b>, so the seedlings are clones of the mother; exam answers often write this as “seeds without meiosis and fertilization (syngamy)”, which holds for the usual routes. It is a form of <b>asexual reproduction that mimics sexual reproduction</b>; the offspring are clones of the parent. (Term coined by <b>Winkler, 1908</b>.) Common in <b>grasses (Poaceae)</b> and <b>Asteraceae</b>.',
      },
      {
        t: 'def',
        term: 'Polyembryony',
        html: 'the occurrence of <b>more than one embryo in a single seed</b> (e.g. <i>Citrus</i>, <i>Mangifera</i>, onion, groundnut). (First reported by <b>Leeuwenhoek, 1719</b>, in a citrus/orange seed.)',
      },
      {
        t: 'def',
        term: 'Nucellar embryony',
        html: 'a common route to apomictic polyembryony in which <b>nucellar cells</b> (maternal, diploid, sporophytic tissue surrounding the embryo sac) divide, push into the embryo sac, and develop into embryos. These nucellar seedlings are <b>clones of the mother plant</b>.',
      },
      {
        t: 'def',
        term: 'Parthenocarpy (contrast term)',
        html: 'development of a <b>seedless fruit without fertilization</b> (e.g. banana); can be induced with growth hormones. Note: this is a <b>fruit</b> phenomenon and is treated with fruit development in the previous topic (Topic 03); it appears here only to be distinguished from apomixis.',
      },
      { t: 'p', html: '<b>Beyond-NCERT classification (NEET-advanced rung):</b>' },
      {
        t: 'def',
        term: 'Agamospermy',
        html: 'apomixis that uses the <b>sexual apparatus (ovule)</b> but produces a seed without fertilization or meiosis, as opposed to plain <b>vegetative reproduction</b> (runners, bulbs, etc.), which Winkler’s broad definition also counted as apomixis.<br>– <b>Diplospory:</b> the <b>megaspore mother cell</b> skips meiosis and develops directly (mitotically) into a <b>diploid (2<i>n</i>) embryo sac</b>, whose diploid egg grows into a diploid embryo.<br>– <b>Apospory:</b> a <b>somatic cell outside the embryo sac</b> (e.g. nucellar) gives rise to an extra, <b>aposporic</b> (diploid) embryo sac.<br>– <b>Adventive (adventitious) embryony:</b> extra embryos arise <b>directly from diploid nucellar or integumentary cells</b>, never from the egg, with no embryo sac stage (the nucellar cells may protrude into the sac cavity but form no egg) (e.g. <i>Citrus</i>, <i>Opuntia</i>).',
      },
      {
        t: 'def',
        term: 'True vs false polyembryony',
        html: 'true: multiple embryos in the <b>same</b> embryo sac; false: embryos in <b>different</b> embryo sacs within one ovule.',
      },
      {
        t: 'def',
        term: 'Gametophytic vs sporophytic polyembryony',
        html: 'by the origin cell: from <b>haploid</b> cells of the embryo sac (gametophytic) versus from <b>diploid</b> maternal structures such as the nucellus (sporophytic).',
      },

      { t: 'part', title: 'Mechanisms and classification' },
      { t: 'p', html: '<b>3.1 How apomixis sidesteps sex (the core idea)</b>' },
      {
        t: 'p',
        html: '<b>Reasoning:</b> to make a seed that is a faithful copy of the mother, the plant must avoid the two events that create variation: <b>meiosis</b> (which shuffles genes) and <b>fertilization</b> (which mixes two genomes). In the usual routes, apomixis removes both. (Steps 1 to 4 describe diplospory; the other routes are in 3.2.)<br>1. In diplospory, a cell that would normally undergo meiosis instead divides <b>mitotically</b>, keeping the full diploid (2<i>n</i>) chromosome set.<br>2. This gives a <b>diploid embryo sac</b> with a <b>diploid egg cell</b>.<br>3. The diploid egg develops into a <b>diploid embryo without fertilization</b>.<br>4. Because every step is mitotic and no foreign genome enters, the resulting seed is genetically identical to the mother: a <b>clone</b>.',
      },
      {
        t: 'p',
        html: 'This is why, under the microscope, an apomictic embryo sac can look perfectly ordinary yet its cells are diploid, the give-away that meiosis was skipped. The NCERT Exemplar turns this into a reasoning question: an apomictic embryo sac appears normal but contains diploid cells: explain. The answer follows directly from the logic above: the megaspore mother cell bypassed the reductional (meiotic) division, so the embryo sac it produced retained the full diploid set even though its overall structure developed normally.',
      },
      { t: 'p', html: '<b>3.2 Routes to apomictic seeds (the names are beyond NCERT: NEET-advanced; NCERT describes the unreduced-egg and nucellar routes without naming them)</b>' },
      {
        t: 'p',
        html: 'Apomixis (in the broad sense) splits into <b>vegetative reproduction</b> and <b>agamospermy</b> (seed-forming apomixis). Winkler’s original, broad sense of the word also counted vegetative reproduction; in NCERT and in most exam answers apomixis means asexual seed formation (agamospermy). Within agamospermy:<br>• <b>Diplospory</b>: the megaspore mother cell itself becomes the (diploid) embryo sac.<br>• <b>Apospory</b>: a neighbouring somatic cell forms an extra (diploid) embryo sac.<br>• <b>Adventive embryony</b>: embryos bud directly from diploid nucellar/integumentary cells, with no embryo sac stage (the nucellar cells may protrude into the sac cavity but form no egg) (the <i>Citrus</i> route).',
      },
      {
        t: 'p',
        html: 'A further split runs along the ploidy of the embryo sac: in <b>recurrent apomixis</b> (the common kind) the embryo sac is diploid (2<i>n</i>), formed without reduction, so the embryo is diploid like the mother; in <b>non-recurrent apomixis</b> (rare) a normal haploid egg, formed after meiosis, develops into an embryo without fertilization, giving a haploid (<i>n</i>) plant that does not breed true.',
      },
      { t: 'fig', id: 'b12-01-fig-1.6' },
      { t: 'p', html: '<b>3.3 Polyembryony and its commercial value</b>' },
      {
        t: 'p',
        html: 'Polyembryony is <b>more common in gymnosperms than in angiosperms</b>, where it is unusual except in cases like <i>Citrus</i> and <i>Mangifera</i>. (As a single aside, a familiar gymnosperm example is <b>cleavage polyembryony</b> in <i>Pinus</i>, where one proembryo splits into several, but the detailed gymnosperm mechanism is outside this chapter.)',
      },
      {
        t: 'p',
        html: 'The commercially important type is <b>nucellar polyembryony</b>: maternal nucellar tissue produces extra embryos that are genetically uniform clones of the parent. This matters because:<br>• the seedlings breed <b>true to type</b>, preserving an elite variety;<br>• <b>nucellar embryos are often described as superior to plants raised by ordinary vegetative propagation</b>: they tend to be <b>disease-free</b> and retain their vigour for a long time (usually virus-free, though not immune to disease).',
      },
      {
        t: 'p',
        html: '(NEET-advanced.) By the origin of the extra embryos, polyembryony is classified as <b>gametophytic</b> (from haploid cells of the embryo sac) or <b>sporophytic</b> (from diploid maternal structures such as the nucellus). A striking illustration that several of these routes can operate in the same seed is <i>Allium odorum</i>, where five embryos have been recorded arising by different methods at once: one from the <b>zygote</b>, one from a <b>synergid</b>, two from <b>antipodal</b> cells, and one from an <b>integumentary</b> cell (reported, beyond NCERT). As many as <b>forty embryos</b> have been reported inside a single seed in <i>Citrus unshiu</i>. The classical explanation for nucellar budding is the <b>necrohormone theory (Haberlandt, 1921)</b>: as some nucellar cells degenerate, they release a stimulus that prompts neighbouring cells to switch on and develop into embryos. Often one embryo (usually the zygotic one) is weak or aborts, and several seedlings may emerge, but the phenomenon is what makes nucellar lines so useful in horticulture.',
      },
      { t: 'p', html: '<b>3.4 Apomixis vs parthenocarpy (a common exam item)</b>' },
      {
        t: 'p',
        html: 'The NCERT Exemplar poses this directly. The clean distinction: <b>apomixis → a seed without fertilization</b> (an embryo does form, just asexually); <b>parthenocarpy → a seedless fruit without fertilization</b> (no embryo, no seed at all). One is about making a seed asexually; the other is about making a fruit with no seed.',
      },
      { t: 'p', html: '<b>3.5 Why sex survives: the evolutionary trade-off</b>' },
      {
        t: 'p',
        html: 'If apomixis is so convenient (true-breeding seed, no fertilisation of the egg needed, though many apomicts still need pollen to form the endosperm, hybrid vigour locked in), why has sexual reproduction not been abandoned across the plant world? Because the very feature apomixis lacks is the one sexual reproduction exists to provide: <b>variation</b>. In sexual reproduction, gamete formation is preceded by <b>meiosis</b>, and the <b>crossing over</b> that happens during meiosis-I reshuffles segments of DNA between homologous chromosomes, so that the gametes (and the offspring they produce) carry many new genetic combinations. That diversity is an insurance policy: in a <b>changing environment</b>, a varied population is far more likely to contain individuals that can survive a new disease, a drought, or a shift in climate.',
      },
      {
        t: 'p',
        html: 'Apomixis trades exactly this away. Its clones are superbly adapted to today’s conditions but carry no genetic novelty for tomorrow’s. So the two strategies are complementary bets: apomixis wagers on stability, sexual reproduction on change, which is why many apomictic plants are <b>facultative</b>, keeping the sexual route available as a fallback rather than abandoning it entirely.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board · 2 marks',
        q: 'What is apomixis? State one reason it is valuable to the hybrid-seed industry.',
        steps: [
          '<b>Model answer:</b> Apomixis is the formation of <b>seeds without fertilization</b> (and, in the usual routes, without meiosis), a form of asexual reproduction that mimics sexual reproduction and yields offspring that are clones of the mother. It is valuable because hybrid plants that are apomictic would produce seeds that <b>breed true</b>, so farmers could re-sow saved seed year after year <b>without losing hybrid vigour</b>. (Full marks: state “without meiosis and fertilisation” (true of the usual routes) and “preserves hybrid vigour / true-breeding seed.”)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which one of the following generates new genetic combinations leading to variation? <b>(a)</b> Parthenogenesis <b>(b)</b> Nucellar polyembryony <b>(c)</b> Vegetative reproduction <b>(d)</b> Sexual reproduction',
        steps: [
          '<b>Fast reasoning:</b> the trap is that three of these give little or no new variation: parthenogenesis, nucellar polyembryony and vegetative reproduction all give offspring without the mixing of two genomes at fertilisation. Only <b>sexual reproduction</b> combines the genes of two parents by meiosis and fertilization.',
          'If you remember “apomixis/clonal = no variation,” you eliminate (a), (b), (c) instantly.',
        ],
        ans: '(d)',
      },
      {
        t: 'ex',
        tag: 'CUET · matching',
        q: 'Match the apomixis route with its description: (A) Diplospory (B) Apospory (C) Adventive embryony. Descriptions: (1) embryo forms directly from a diploid nucellar/integumentary cell, bypassing the embryo sac (2) MMC develops directly into a diploid embryo sac (3) a somatic cell outside the embryo sac forms an extra embryo sac.',
        steps: [
          '<b>Reasoning:</b> diplospory is the MMC route (A–2); apospory is the outside-cell embryo-sac route (B–3); adventive embryony skips the embryo sac entirely (C–1).',
        ],
        ans: 'A–2, B–3, C–1',
      },
      {
        t: 'ex',
        tag: 'NEET · Assertion–Reason',
        q: 'Key: (a) both true, R explains A; (b) both true, R not the explanation; (c) A true, R false; (d) A false, R true. Assertion (A): Apomictic offspring are genetically identical to the parent plant. Reason (R): Apomixis involves meiosis followed by syngamy.',
        steps: [
          '<b>Reasoning:</b> A is <b>true</b>: apomictic seedlings are clones. R is <b>false</b>: apomixis in the usual routes skips both meiosis and syngamy (that is precisely why the offspring are clones).',
          'This is a common apomixis trap (the book’s estimate from past papers, not official figures): the Reason states the opposite of the truth.',
        ],
        ans: '(c)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define polyembryony and name one plant in which it commonly occurs.',
            a: 'The presence of more than one embryo in a single seed; <i>Citrus</i> (orange/lemon) or mango.',
          },
          {
            q: '[NEET] From which tissue do the apomictic embryos of <i>Citrus</i> arise, and is that tissue haploid or diploid?',
            a: 'From the <b>nucellus</b> (maternal, sporophytic tissue surrounding the embryo sac); it is <b>diploid</b>.',
          },
          {
            q: '[CUET] Name the scientist who coined the term “apomixis,” and the type of cell division involved in apomictic seed formation.',
            a: '<b>Winkler (1908)</b>; <b>mitosis</b>.',
          },
          {
            q: '[NEET] State two reasons why nucellar embryos are considered superior to plants raised by ordinary vegetative propagation.',
            a: 'They are genetically uniform clones of the parent (true-breeding) and tend to be <b>disease-free</b> and to retain their vigour for a long time.',
          },
          {
            q: '[NEET · Assertion–Reason] A: An apomictic embryo sac may appear normal yet contain diploid cells. R: In diplospory, the megaspore mother cell develops into the embryo sac without undergoing meiosis. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '<b>(a)</b>: both true and R correctly explains A (skipping meiosis leaves the embryo sac diploid).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Seed formation without fertilisation in flowering plants is called:',
        opts: [
          {
            label: 'budding',
            nudge: '<b>(a) budding</b> and <b>(d) sporulation</b> are asexual modes in other organisms (yeast, fungi) that do not make seeds.',
          },
          {
            label: 'somatic hybridisation',
            nudge: '<b>(b) somatic hybridisation</b> is a tissue-culture technique (protoplast fusion), unrelated to natural seed formation.',
          },
          { label: 'apomixis', nudge: null },
          {
            label: 'sporulation',
            nudge: '<b>(a) budding</b> and <b>(d) sporulation</b> are asexual modes in other organisms (yeast, fungi) that do not make seeds.',
          },
        ],
        correct: 2,
        solution: '<b>(c) apomixis</b>: seeds produced without fertilisation (in the usual routes, without meiosis as well).',
      },
      {
        t: 'mcq',
        q: 'The apomictic embryos of <i>Citrus</i> arise from:',
        opts: [
          {
            label: 'synergids',
            nudge: '<b>(a)</b> and <b>(d)</b>: synergids and antipodal cells are cells of the embryo sac, not of the nucellus. In <i>Citrus</i> the extra embryos come from diploid nucellar cells (in a few other species, such as <i>Allium odorum</i>, embryos can arise from these cells, but that is not the <i>Citrus</i> route).',
          },
          {
            label: 'the haploid egg',
            nudge: '<b>(b)</b> the haploid egg is the sexual route; apomixis specifically bypasses it.',
          },
          { label: 'maternal sporophytic (nucellar) tissue', nudge: null },
          {
            label: 'antipodal cells',
            nudge: '<b>(a)</b> and <b>(d)</b>: synergids and antipodal cells are cells of the embryo sac, not of the nucellus. In <i>Citrus</i> the extra embryos come from diploid nucellar cells (in a few other species, such as <i>Allium odorum</i>, embryos can arise from these cells, but that is not the <i>Citrus</i> route).',
          },
        ],
        correct: 2,
        solution: '<b>(c)</b>. Nucellar (maternal, diploid) tissue produces the clonal embryos.',
      },
      {
        t: 'mcq',
        q: 'Apomixis differs from parthenocarpy in that apomixis results in:',
        opts: [
          {
            label: 'a seedless fruit',
            nudge: '<b>(a)</b> describes <b>parthenocarpy</b> (seedless fruit).',
          },
          { label: 'a seed without fertilisation', nudge: null },
          { label: 'a fruit without an ovary', nudge: '<b>(c)</b> is impossible.' },
          {
            label: 'increased genetic variation',
            nudge: '<b>(d)</b> is the reverse of the truth: apomixis is clonal and produces no new variation.',
          },
        ],
        correct: 1,
        solution: '<b>(b)</b>. Apomixis = seed (with embryo) without fertilisation.',
      },
      {
        t: 'mcq',
        q: 'Polyembryony is best defined as:',
        opts: [
          { label: 'one embryo in one seed', nudge: '<b>(a)</b> is the normal condition, not polyembryony.' },
          { label: 'more than one embryo in a seed', nudge: null },
          { label: 'more than one seed from one embryo', nudge: '<b>(c)</b> inverts the relationship.' },
          {
            label: 'seed development without an embryo',
            nudge: '<b>(d)</b> is closer to parthenocarpy (no embryo), not polyembryony.',
          },
        ],
        correct: 1,
        solution: 'More than one embryo in a single seed, as in <i>Citrus</i>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Apomixis vs parthenocarpy vs parthenogenesis.</b> Seed without fertilisation → <b>apomixis</b>; seedless fruit without fertilisation → <b>parthenocarpy</b>; an egg developing without fertilisation (the usual example is animals) → <b>parthenogenesis</b>. This trio is tested often (the book’s estimate from past papers, not official figures): keep three separate boxes.',
          '<b>“Apomixis involves meiosis/syngamy.”</b> In the usual routes it does the <b>opposite</b>: it skips both. This false statement is a common Assertion–Reason trap (the book’s estimate from past papers, not official figures).',
          '<b>Apomixis creates variation.</b> No: it is clonal, so it produces <b>no new variation</b>. If a question links apomixis (or nucellar polyembryony) to “variation,” that option is wrong.',
          '<b>Nucellar embryos are from the egg.</b> No: they are from <b>diploid nucellar (maternal) tissue</b>, which is exactly why they are clones.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy):</b> Tag every term in this topic as either <b>clonal</b> (apomixis, nucellar/adventive embryony, vegetative reproduction → no variation, diploid, maternal) or <b>sexual</b> (syngamy, normal embryo sac → variation, involves meiosis). Many MCQs here test which box a term belongs in.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Apomixis</b> = <b>seed without fertilisation</b> (usually without meiosis too)',
            note: 'asexual but mimics sexual; offspring are <b>clones</b>; term by <b>Winkler (1908)</b>; common in grasses & Asteraceae.',
          },
          {
            f: '<b>Significance</b>',
            note: 'preserves <b>hybrid vigour</b> → true-breeding seed for the hybrid-seed industry.',
          },
          {
            f: '<b>Polyembryony</b> = <b>more than 1 embryo per seed</b> (<i>Citrus</i>, <i>Mangifera</i>, onion, groundnut)',
            note: 'first seen by <b>Leeuwenhoek (1719)</b>.',
          },
          {
            f: '<b>Nucellar embryony</b>',
            note: 'embryos from <b>diploid maternal nucellar tissue</b> → clones; nucellar seedlings tend to be <b>disease-free</b> (usually virus-free) and are often described as <b>superior to plants raised by vegetative propagation</b>, so they are valued as true-to-type planting stock and rootstocks.',
          },
          {
            f: '<b>Apomixis routes (names beyond NCERT)</b>',
            note: 'agamospermy → <b>diplospory</b> (MMC → 2<i>n</i> embryo sac), <b>apospory</b> (outside cell → embryo sac), <b>adventive embryony</b> (nucellar cell → embryo, bypasses sac).',
          },
          {
            f: '<b>Diagnostic sign</b>',
            note: 'apomictic embryo sac looks normal but is <b>diploid</b> (meiosis skipped).',
          },
          {
            f: '<b>Distinguish</b>',
            note: 'apomixis = <b>seed</b> w/o fert; parthenocarpy = <b>seedless fruit</b> w/o fert; parthenogenesis = egg develops without fertilisation (animals; also a step in some apomixis).',
          },
        ],
        aids: ['“<b>Apomixis = a photocopy seed: mitosis only, mother only, no variation.</b>”'],
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 37–41 ─────────────────────────
  {
    n: 'A',
    title: 'Seed Dormancy: Types, Hormonal Mechanism, and Breaking Methods',
    extra: true,
    kalam: 'The balance: high GA:low ABA promotes germination; high ABA:low GA maintains dormancy.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This section adds five topics that NEET and CBSE questions often draw on (the book’s estimate from past papers, not official figures) beyond the main chapter text: seed dormancy and how it is broken (A); self-incompatibility genetics (B); pollen-tube guidance (C); fruit and seed dispersal (D); and the routes of apomixis (E). A closing section (Additional topic G) analyses what NEET actually asks on this chapter.',
      },
      {
        t: 'p',
        html: 'The chapter mentions dormancy only as a survival strategy: Topic 02 lists it among the advantages of the seed, and Topic 03 describes the seed drying and its metabolism slowing at the end of seed development so that it can wait out a drought or a winter. It does not name the hormones involved, classify dormancy types by cause, explain the biochemical switch at germination, or cover the practical methods horticulturalists and farmers use to overcome dormancy. These are distinct, testable layers.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Classifying dormancy by the cause of the block.</b><br>• <b>Physical dormancy (PY):</b> Caused by a hard, impermeable seed coat (testa) that prevents water uptake and gas exchange. Water cannot enter, so the embryo cannot activate. Found in many legumes, for example <i>Acacia</i>, <i>Cassia</i> and the hard seeds of some <i>Vigna</i> and <i>Canavalia</i> species.<br>• <b>Physiological dormancy (PD):</b> Caused by internal biochemical blocks: the seed contains growth inhibitors (primarily ABA) that prevent germination even when water and oxygen are available. The ABA:GA ratio is too high. Found in many temperate fruits and seeds requiring winter cold (e.g. apple seeds, peach stones).<br>• <b>Morphological dormancy (MD):</b> The embryo is underdeveloped (immature) at seed shed; it must complete its growth before germination can occur. Found in <i>Ginkgo biloba</i> and some orchids.<br>• <b>Combined dormancy:</b> Both physical and physiological barriers present. Some legumes have hard seed coats plus internal inhibitors.<br>• <b>Chilling requirement:</b> A form of physiological dormancy in which seeds need a cold period (stratification) before germinating; cold exposure lowers the ABA:GA ratio.',
      },
      {
        t: 'p',
        html: '<b>The ABA/GA biochemical switch at germination.</b> The standard teaching (NCERT Class 11, plant growth regulators) is that ABA induces seed dormancy, inhibits germination and acts as an antagonist to GAs (that GA breaks dormancy goes beyond NCERT, which credits ethylene with breaking seed dormancy); the mechanism is testable:<br>1. <b>Dry seed:</b> high ABA maintains dormancy, suppresses metabolic activity and prevents premature germination.<br>2. <b>Imbibition:</b> water uptake begins; ABA levels start to fall if conditions are favourable, and gibberellin synthesis begins in the embryo.<br>3. <b>GA synthesis:</b> the embryo produces GA which diffuses to the aleurone layer (in cereals).<br>4. <b>Aleurone response:</b> GA triggers transcription of genes encoding alpha-amylase and other hydrolytic enzymes.<br>5. <b>Starch hydrolysis:</b> alpha-amylase breaks stored starch into sugars in the endosperm.<br>6. <b>Nutrient supply:</b> sugars reach the embryo; the radicle protrudes: germination is complete.<br>7. <b>Meanwhile, ABA antagonism:</b> ABA blocks GA signalling at the aleurone layer, preventing alpha-amylase gene expression.',
      },
      {
        t: 'p',
        html: 'The balance: high GA:low ABA promotes germination; high ABA:low GA maintains dormancy.',
      },
      {
        t: 'table',
        title: 'Breaking dormancy: practical methods',
        head: ['Method', 'Target dormancy type', 'Procedure', 'Examples'],
        rows: [
          ['Scarification (mechanical)', 'Physical: hard coat', 'Nick, scrape, or sand the seed coat to allow water entry', 'Legumes'],
          ['Scarification (chemical)', 'Physical: hard coat', 'Soak in concentrated H<sub>2</sub>SO<sub>4</sub> for a set time', 'Hard-seeded legumes'],
          ['Pre-soaking in warm water (hot-water soak)', 'Physical: moderately hard coat', 'Soak in warm water for 12–24 hours', 'Some hard-seeded legumes'],
          ['Stratification', 'Physiological: cold requirement', 'Expose to cold, moist conditions (0–5 °C) for weeks', 'Apple, peach seeds'],
          ['Light exposure', 'Photo-dormancy', 'Expose to white light or red light, which converts phytochrome to its active Pfr form', 'Lettuce, <i>Arabidopsis</i>'],
          ['Temperature shock', 'Physiological: temperature-sensitive', 'Alternating warm/cold temperatures', 'Rice, many wild species'],
          ['GA<sub>3</sub> application', 'Physiological dormancy', 'Spray or soak with gibberellic acid to overcome ABA block', 'Barley (malting); cereal seeds'],
        ],
      },
      {
        t: 'p',
        html: '<b>Afterripening</b> is the loss of physiological dormancy during dry storage at room temperature. Seeds stored dry for several months show reduced ABA and increased GA sensitivity, raising the GA:ABA ratio, so freshly harvested seeds may not germinate, but after-ripened seeds of the same batch germinate readily. Wheat and barley show this.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Identifying Dormancy Type and Breaking Method.</b> Seeds of a hard-seeded legume such as <i>Cassia</i> have a hard, waxy testa that prevents water entry for several weeks after harvest. When a farmer soaks the seeds in warm water for 24 hours before sowing, germination is rapid. Identify the type of dormancy and the method used to break it.',
        steps: [
          'The hard coat physically blocks water entry: this is physical dormancy. Soaking in warm water softens the testa, allowing imbibition. This is pre-soaking in warm water (a hot-water soak), a method distinct from scarification, which damages the coat mechanically or chemically (some texts count a hot-water soak as a third kind of scarification, beside the mechanical and chemical kinds). Mechanical scarification (nicking the coat with sandpaper) would achieve the same result.',
        ],
        ans: 'Physical dormancy; broken by softening the testa through pre-soaking in warm water (a hot-water soak).',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Hormonal Mechanism in Cereal Germination.</b> During germination of a barley grain, name: (i) the hormone that stimulates alpha-amylase synthesis in the aleurone layer, (ii) the layer in which this occurs, and (iii) the hormone that antagonises this action to maintain dormancy.',
        steps: [
          '(i) Gibberellin (GA; in barley mainly GA<sub>1</sub>, while GA<sub>3</sub>, gibberellic acid, is the form applied in malting) is synthesised by the embryo and acts on the aleurone layer.<br>(ii) The aleurone layer is the outermost cell layer of the endosperm in cereal grains, surrounding the starchy endosperm.<br>(iii) Abscisic acid (ABA) antagonises by blocking GA signalling and preventing alpha-amylase gene expression, maintaining dormancy in dry or unfavourable conditions.',
        ],
        ans: '(i) Gibberellin (GA); (ii) aleurone layer; (iii) ABA antagonises.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Comparing Two Dormancy-Breaking Treatments.</b> Seeds of apple require a cold period before they germinate, while seeds of a hard-seeded legume such as <i>Cassia</i> do not. Explain this difference in terms of the dormancy type each species has, and describe the treatment a horticulturist would apply to apple seeds.',
        steps: [
          'Apple seeds have physiological dormancy: an internal ABA block that is broken only after exposure to cold, moist conditions (stratification). This is an adaptation to ensure germination in spring rather than autumn. A hard-seeded legume has physical dormancy: the hard coat is the only barrier; once water is admitted (by scarification or soaking), germination proceeds without cold.',
          'Treatment for apple: stratification (mix seeds with moist sand or peat, refrigerate at 0–5 °C for 4–12 weeks, then sow).',
        ],
        ans: 'Apple: physiological dormancy, requires stratification (cold treatment); hard-seeded legume: physical dormancy, needs only scarification or soaking (water entry through the coat).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>ABA/GA Ratio in Afterripening.</b> Seeds of wheat stored in dry conditions for three months after harvest germinate faster than freshly harvested seeds of the same batch. Explain this observation in terms of the ABA:GA ratio, and name the phenomenon.',
        steps: [
          'Freshly harvested wheat seeds have high ABA levels and a low GA:ABA ratio: they are physiologically dormant. During dry storage (afterripening), ABA is gradually catabolised and the seed’s sensitivity to GA increases, so the effective GA:ABA ratio rises. When sown, after-ripened seeds germinate readily; freshly harvested seeds of the same batch do not.',
        ],
        ans: 'Afterripening: ABA is degraded during dry storage, raising the GA:ABA ratio and breaking physiological dormancy.',
      },
      {
        t: 'ex',
        tag: 'CUET / Match',
        q: '<b>Dormancy Type and Breaking Method.</b> Column I (Seed): (P) Hard-seeded legume (<i>Cassia</i>) with a hard testa, (Q) Apple seeds, (R) Lettuce seeds requiring red light, (S) <i>Ginkgo</i> with immature embryo. Column II: (i) Stratification, (ii) Light (red/Pfr), (iii) Scarification, (iv) Time for embryo to mature.',
        steps: [
          '(P) Hard coat: scarification (iii).<br>(Q) Cold requirement: stratification (i).<br>(R) Photo-dormancy: red light exposure (ii).<br>(S) Immature embryo: needs time for morphological development (iv).',
        ],
        ans: 'P–iii, Q–i, R–ii, S–iv',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Distinguish between physical dormancy and physiological dormancy of seeds, giving one plant example of each.',
            a: 'Physical dormancy: hard, impermeable seed coat prevents water/gas entry (e.g. <i>Cassia</i>, <i>Acacia</i>). Physiological dormancy: internal biochemical blocks (ABA) prevent germination even when water is available (e.g. apple seeds).',
          },
          {
            q: '[NEET] Name the two hormones that act antagonistically to control seed germination, and state which one promotes and which one inhibits germination.',
            a: 'Gibberellin promotes germination; ABA inhibits germination.',
          },
          {
            q: '[CUET] What is meant by scarification? Name one method of scarification used for hard-seeded legumes.',
            a: 'Scarification is any treatment that damages or softens the hard seed coat to allow water entry. Methods: mechanical (scratching/sanding the coat) or chemical (soaking in concentrated H<sub>2</sub>SO<sub>4</sub>). Soaking in warm water (a hot-water soak) softens the coat too, but it is classed separately from scarification (some texts count it as a third kind of scarification).',
          },
          {
            q: '[NEET] Seeds of winter wheat stored in dry conditions for six months germinate faster than freshly harvested seeds. Name the phenomenon and explain it in terms of hormone changes.',
            a: 'Afterripening. During dry storage ABA is gradually broken down and the GA:ABA ratio rises, breaking physiological dormancy.',
          },
          {
            q: '[NEET] Explain the role of the aleurone layer and gibberellin in the germination of a barley grain.',
            a: 'In a germinating barley grain, the embryo releases GA which acts on the aleurone layer; GA stimulates the aleurone cells to synthesise and secrete alpha-amylase and other hydrolytic enzymes; these enzymes break down stored starch in the endosperm into sugars, which nourish the growing embryo until the radicle protrudes.',
          },
          {
            q: '[CBSE] Why do apple seeds require a cold period before they germinate, while seeds of a hard-seeded legume such as <i>Cassia</i> do not? Name the treatment applied to apple seeds.',
            a: 'Apple seeds have physiological dormancy (need cold to lower the ABA:GA ratio); a hard-seeded legume has physical dormancy only (hard coat, no internal block): scarification or pre-soaking is enough. Treatment: stratification (cold, moist storage at 0–5 °C).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 41–44 ─────────────────────────
  {
    n: 'B',
    title: 'Self-Incompatibility: Genetic Systems and Mechanisms',
    extra: true,
    kalam: 'Each SI species carries multiple S-alleles at a single genetic locus (the S-locus).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter introduces self-incompatibility (SI) as an outbreeding device but does not explain how it works genetically, how the two types differ, or what the <i>S</i>-allele system means in practice. These details go beyond the NCERT text; they appear in some CUET matching and assertion–reason items (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>What SI does.</b> Self-incompatibility is a genetic mechanism that prevents self-fertilisation: the pistil recognises and rejects pollen bearing the same <i>S</i>-allele as itself, allowing only genetically different pollen to effect fertilisation. It operates at the pollen–pistil interaction stage, before or during pollen tube growth.',
      },
      {
        t: 'p',
        html: '<b>The <i>S</i>-allele system.</b> Each SI species carries multiple <i>S</i>-alleles at a single genetic locus (the <i>S</i>-locus). A plant heterozygous at the <i>S</i>-locus (e.g. <i>S</i><sub>1</sub><i>S</i><sub>2</sub>) produces pollen grains of two genotypes in equal proportion: half <i>S</i><sub>1</sub> and half <i>S</i><sub>2</sub>. The pollen phenotype (how it behaves on the stigma) depends on which SI type operates.',
      },
      {
        t: 'table',
        title: 'Two SI types: the critical distinction',
        head: ['Feature', 'Gametophytic SI', 'Sporophytic SI'],
        rows: [
          ['What determines pollen phenotype', 'The pollen’s own <i>S</i>-allele genotype', 'The <i>S</i>-allele genotype of the anther (pollen parent)'],
          ['Where SI is expressed', 'Usually in the pollen tube in the style (Solanaceae, S-RNase); in <i>Papaver</i>, at the stigma', 'On the pollen surface (at the stigma)'],
          ['Dominance relationships', 'Usually no dominance: the alleles act independently', 'Alleles can show dominance (<i>S</i><sub>1</sub> > <i>S</i><sub>2</sub> etc.)'],
          ['Result', 'Heterozygous plant produces two types of compatible pollen', 'Heterozygous plant may produce only one type of functional pollen'],
          ['Examples', 'Solanaceae (tobacco, <i>Petunia</i>), <i>Papaver</i> (poppy)', 'Brassicaceae (<i>Brassica</i>, <i>Raphanus</i>)'],
        ],
      },
      {
        t: 'p',
        html: '<b>Gametophytic SI: mechanism (Solanaceae model).</b> The style produces S-RNase proteins encoded by the <i>S</i>-alleles. When a pollen tube grows into the style, if its <i>S</i>-allele matches one of the style’s <i>S</i>-alleles, the style’s S-RNase enters the pollen tube and degrades the pollen’s RNA, halting tube growth. If the pollen’s <i>S</i>-allele is different from both of the style’s alleles, S-RNase cannot act and the tube grows normally.',
      },
      {
        t: 'p',
        html: '<b>Sporophytic SI: mechanism (Brassicaceae model).</b> The anther tapetum (sporophytic tissue) coats the pollen grain with proteins determined by the parent plant’s <i>S</i>-alleles. At the stigma surface, if the pollen’s surface proteins match any of the stigma’s <i>S</i>-alleles, the stigma rejects the pollen immediately (no germination or immediate tube collapse). Dominance among <i>S</i>-alleles means pollen may show only the dominant allele’s coat even if its own genotype is recessive.',
      },
      {
        t: 'p',
        html: '<b>Why this matters for the exam.</b> In gametophytic SI, a heterozygous plant (<i>S</i><sub>1</sub><i>S</i><sub>2</sub>) produces two kinds of pollen: <i>S</i><sub>1</sub> pollen can grow in an <i>S</i><sub>2</sub><i>S</i><sub>3</sub> stigma but not in an <i>S</i><sub>1</sub><i>S</i><sub>2</sub> or <i>S</i><sub>1</sub><i>S</i><sub>3</sub> stigma. In sporophytic SI with dominance, an <i>S</i><sub>1</sub><i>S</i><sub>2</sub> plant (<i>S</i><sub>1</sub> dominant) may produce only <i>S</i><sub>1</sub>-coated pollen: functional on <i>S</i><sub>2</sub><i>S</i><sub>3</sub> but rejected on <i>S</i><sub>1</sub><i>S</i><sub>3</sub>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Predicting Compatibility in Gametophytic SI.</b> A heterozygous plant with genotype <i>S</i><sub>1</sub><i>S</i><sub>2</sub> is the female parent. An <i>S</i><sub>1</sub><i>S</i><sub>3</sub> plant is the male parent. Which pollen genotype(s) of the male parent can successfully pollinate the female?',
        steps: [
          'In gametophytic SI, the pollen’s own allele determines compatibility. The female parent (<i>S</i><sub>1</sub><i>S</i><sub>2</sub>) will reject any pollen carrying <i>S</i><sub>1</sub> or <i>S</i><sub>2</sub>. The male parent (<i>S</i><sub>1</sub><i>S</i><sub>3</sub>) produces pollen grains of two genotypes in equal ratio: half <i>S</i><sub>1</sub> and half <i>S</i><sub>3</sub>. <i>S</i><sub>1</sub> pollen is rejected (matches the female’s <i>S</i><sub>1</sub>); <i>S</i><sub>3</sub> pollen is accepted (neither <i>S</i><sub>1</sub> nor <i>S</i><sub>2</sub>). Only the <i>S</i><sub>3</sub> pollen type functions.',
        ],
        ans: 'Only <i>S</i><sub>3</sub> pollen grains (50% of the male’s pollen) can effect fertilisation; <i>S</i><sub>1</sub> pollen is rejected.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Distinguishing SI Types from Genetic Outcome.</b> In species P, a heterozygous <i>S</i><sub>1</sub><i>S</i><sub>2</sub> plant produces two functional pollen types. In species Q, the same plant produces only one functional pollen type. Identify the SI type in each species and give one example of each.',
        steps: [
          'In species P, the pollen’s own genotype determines compatibility (both <i>S</i><sub>1</sub> and <i>S</i><sub>2</sub> pollen function): this is gametophytic SI (e.g. <i>Petunia</i>, <i>Nicotiana</i>: Solanaceae). In species Q, the anther’s genotype controls the pollen coat, and if <i>S</i><sub>1</sub> dominates over <i>S</i><sub>2</sub>, all pollen carries the <i>S</i><sub>1</sub> coat: this is sporophytic SI with dominance (e.g. <i>Brassica</i>: Brassicaceae).',
        ],
        ans: 'Species P: gametophytic SI (e.g. <i>Petunia</i>); Species Q: sporophytic SI (e.g. <i>Brassica</i>).',
      },
      {
        t: 'ex',
        tag: 'NEET · Assertion–Reason',
        q: '<b>SI and Genetic Variation.</b> Assertion (A): In gametophytic self-incompatibility, a plant’s own pollen normally cannot fertilise its ovules. Reason (R): In gametophytic SI, the S-RNase mechanism destroys the RNA of pollen tubes that carry a matching <i>S</i>-allele. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
        steps: [
          'A is true: SI prevents self-fertilisation (the plant’s own pollen is rejected). R is also true: in gametophytic SI, the style’s S-RNase enters and degrades the RNA of self-pollen tubes, halting growth. R correctly explains A by giving the molecular basis of the block. Both are true and the reason is the correct explanation.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Difference Between Gametophytic and Sporophytic SI.</b> Explain with one point of difference how the expression of the <i>S</i>-allele in pollen differs between gametophytic and sporophytic self-incompatibility.',
        steps: [
          'In gametophytic SI, the pollen grain’s own <i>S</i>-allele determines its fate: the S-RNase in the style acts on the matching allele inside the pollen tube. In sporophytic SI, the S-proteins deposited on the pollen surface by the anther tapetum (a sporophytic tissue) determine the pollen’s phenotype, so the anther parent’s genotype matters, not just the pollen grain’s own allele. This is why dominance relationships among <i>S</i>-alleles can suppress recessive pollen alleles in sporophytic SI.',
        ],
        ans: 'In gametophytic SI the pollen’s own (haploid) <i>S</i>-allele genotype controls compatibility; in sporophytic SI the anther parent’s (diploid) <i>S</i>-allele genotype controls the proteins coating the pollen, allowing dominance effects.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define self-incompatibility and state one reason it is advantageous to a plant species.',
            a: 'Self-incompatibility is a genetically controlled mechanism that prevents self-fertilisation by rejecting pollen bearing the same <i>S</i>-allele as the pistil. It promotes outcrossing and maintains genetic variation in the population.',
          },
          {
            q: '[NEET] In gametophytic self-incompatibility, what determines whether a pollen grain is accepted or rejected by the pistil?',
            a: 'The compatibility of a pollen grain in gametophytic SI is determined by its own (haploid) <i>S</i>-allele. If the pollen’s <i>S</i>-allele matches either of the pistil’s <i>S</i>-alleles, S-RNase from the style enters the pollen tube, degrades its RNA, and halts growth.',
          },
          {
            q: '[CUET] Name one family in which gametophytic SI is found and one in which sporophytic SI is found.',
            a: 'Gametophytic SI: Solanaceae (<i>Petunia</i>, <i>Nicotiana</i>). Sporophytic SI: Brassicaceae (<i>Brassica</i>, <i>Raphanus</i>).',
          },
          {
            q: '[NEET] A plant has the genotype <i>S</i><sub>1</sub><i>S</i><sub>2</sub> at the <i>S</i>-locus. In sporophytic SI where <i>S</i><sub>1</sub> is dominant over <i>S</i><sub>2</sub>, what type of S-protein coat will all its pollen carry?',
            a: 'All pollen will carry the <i>S</i><sub>1</sub> coat (the dominant allele), because in sporophytic SI the anther tapetum deposits proteins encoded by the parent’s (diploid) <i>S</i>-alleles, and dominance suppresses the <i>S</i><sub>2</sub> contribution.',
          },
          {
            q: '[NEET · Assertion–Reason] A: A heterozygous plant in a gametophytic SI species can produce two types of functional pollen. R: In gametophytic SI, the compatibility of a pollen grain depends on its own <i>S</i>-allele, not on the <i>S</i>-allele of the plant that produced it. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '(a): both true and R correctly explains A.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 44–46 ─────────────────────────
  {
    n: 'C',
    title: 'Pollen Tube Guidance: Chemotropism and the Guidance Pathway',
    extra: true,
    kalam: 'The pollen tube grows toward the ovule because chemicals diffusing from the ovule and synergids create a concentration gradient.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the route in outline (stigma, style, ovary, micropyle, synergid) and says the filiform apparatus of the synergids guides the tube, but it does not explain how the tube is guided chemically or name the tissues it passes through. This material is used in statement-evaluation and diagram-based questions (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The pollen tube path.</b> After germination on the stigma, the pollen tube grows through:<br>1. Stigma surface and papillae (if wet/hairy stigma)<br>2. The transmitting tissue of the style (a specialised tissue rich in extracellular matrix that guides the tube)<br>3. The ovarian cavity (locule)<br>4. The micropyle of the ovule<br>5. Between the synergids, guided by the filiform apparatus<br>6. Into one synergid, where it discharges the male gametes',
      },
      {
        t: 'p',
        html: '<b>Chemotropism: directional growth in response to chemical gradients.</b> The pollen tube grows toward the ovule because chemicals diffusing from the ovule and synergids create a concentration gradient. The tube grows up the gradient: it is positively chemotropic. The best-established attractants are small peptides (LURE peptides) secreted by the synergids. Calcium ions (Ca<sup>2+</sup>) and boron are needed for pollen germination and tube growth.',
      },
      {
        t: 'p',
        html: '<b>The filiform apparatus.</b> The filiform apparatus (specialised wall thickenings at the micropylar tip of the synergids) plays an important role in guiding the pollen tube into the synergid. Two functions are usually described:<br>1. It helps to guide the pollen tube into the synergid (the synergids secrete the chemoattractants).<br>2. Its folded wall increases the surface for absorbing and passing nutrients into the synergid.',
      },
      {
        t: 'p',
        html: '<b>Micropylar vs chalazal guidance.</b> In the typical case (porogamy) the pollen tube enters through the micropyle, the pre-formed opening of the ovule, and is attracted to the synergids at the micropylar end of the embryo sac. Entry through the chalaza (chalazogamy, e.g. <i>Casuarina</i>) or through the integuments (mesogamy, e.g. <i>Cucurbita</i>) is a rare exception.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Tracing the Pollen Tube Path.</b> Trace the complete path of a pollen tube from germination on the stigma to discharge of male gametes in the embryo sac. Name the structure that provides the final guidance cue.',
        steps: [
          'Path: stigma surface → transmitting tissue of the style → ovarian cavity (locule) → micropyle of the ovule → space between the two synergids (guided by filiform apparatus) → entry into one synergid → discharge of two male gametes.',
          'The final guidance cue is provided by the filiform apparatus of the synergids: it guides the tube into the synergid.',
        ],
        ans: 'Stigma → style (transmitting tissue) → locule → micropyle → synergid (guided by filiform apparatus); filiform apparatus provides the final guidance.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Why Does the Pollen Tube Enter Through the Micropyle?</b> Explain why, in a typical flowering plant, the pollen tube enters the ovule through the micropyle and not through the chalaza or integuments.',
        steps: [
          'The synergids, which attract the pollen tube chemically, are located at the micropylar end of the embryo sac, and the filiform apparatus at that end guides the tube in. The chalazal end (where the antipodal cells are) produces no guidance signal. The integuments are protective coverings that the pollen tube does not normally penetrate: the micropyle is a pre-formed pore that provides the entry point.',
        ],
        ans: 'The synergids with filiform apparatus are located at the micropylar end and attract the pollen tube; the pollen tube follows this chemical gradient, entering through the micropyle, which is the designated entry point. The chalaza and integuments provide no such guidance.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Functions of the Filiform Apparatus.</b> State two functions of the filiform apparatus in a typical angiosperm embryo sac.',
        steps: [
          '1. It helps to guide the pollen tube into the synergid (chemotropism towards the synergids’ chemical attractants).<br>2. Its wall folds increase the surface for absorbing and passing nutrients into the synergid.',
        ],
        ans: '(i) Guiding the pollen tube into the synergid (chemotropism); (ii) its wall folds increase the surface for absorbing and passing nutrients into the synergid.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What is meant by chemotropism in the context of pollen tube growth? Name the structure that produces the chemotropic signal in the ovule.',
            a: 'Chemotropism is the directional growth of the pollen tube in response to a chemical gradient: the tube grows toward higher concentrations of attractant molecules. The synergids (with their filiform apparatus) provide the chemical signal.',
          },
          {
            q: '[NEET] Trace the path of a pollen tube from the stigma to the embryo sac, naming each structure it traverses.',
            a: 'Stigma → pollen tube germinates → style (transmitting tissue) → pollen tube grows through style → ovarian cavity (locule) → enters ovule through micropyle → guided between synergids by filiform apparatus → enters one synergid → discharges male gametes.',
          },
          {
            q: '[CUET] Give two functions of the filiform apparatus of a synergid.',
            a: '(i) Helps guide the pollen tube into the synergid. (ii) Its folded wall increases the surface for absorbing and passing nutrients into the synergid.',
          },
          {
            q: '[NEET] Why is it important that the pollen tube enters through the micropyle and not the chalaza?',
            a: 'The synergids containing the filiform apparatus (the guidance site) are located at the micropylar end; the micropyle is the pre-formed entry pore. The chalaza is at the opposite end and has no guidance mechanism.',
          },
        ],
      },
    ],
  },
];
