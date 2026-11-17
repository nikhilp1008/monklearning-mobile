import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 3 (Plant Kingdom), Additional topics A to H, word for word from the Class 11
 * Biology Master Reference, pp. 189 to 220: the shared introduction (p. 189, joined to A’s
 * Introduction), A "Sexual Reproduction in Algae: Conjugation and Gamete Fusion Types" (pp. 189 to
 * 192), B "Pteridophyte Reproduction: Sori, Sporangia, and the Heterosporous Life Cycle" (pp. 192
 * to 195), C "Gymnosperm Reproduction: Pollination, Fertilisation, and Seed Formation" (pp. 195 to
 * 198), D "Microsporogenesis, Megasporogenesis, and Pollen Tube Growth" (pp. 198 to 201), E
 * "Economic Importance: Comprehensive NCERT Coverage" (pp. 201 to 204), F "Comprehensive
 * Comparison Tables and Conceptual Traps" (pp. 204 to 210), G "Practice Exercise: Full Addendum
 * Review" (pp. 210 to 211) and H "What NEET Actually Asks" (the book’s Addendum P, pp. 211 to 220).
 * Page 221 is the next chapter.
 *
 * Numbered runs of steps that sit under a bold heading (with or without a lead-in sentence) are kept
 * in one paragraph as numbered lines, so the heading, the lead-in and the steps stay in the book’s
 * order and the genus names in the headings can stay italic (a procedure title takes no markup).
 * A table the book prints inside a worked example or a practice answer is written as labelled rows.
 * The book’s "Answer:" of a worked example is the example’s steps (a list or several paragraphs) or,
 * when it is one paragraph, the answer box. Scientific names are italic; common names are upright.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 189–192 ─────────────────────────
  {
    n: 'A',
    title: 'Sexual Reproduction in Algae: Conjugation and Gamete Fusion Types',
    extra: true,
    kalam:
      'Topic 02 names three types of sexual reproduction in algae (isogamous, anisogamous, oogamous), defines each in one line and gives one or two examples (Chlamydomonas; some Chlamydomonas; Volvox and Fucus).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the classification systems, the five plant groups (algae through angiosperms), and the framework of alternation of generations. Six examinable patterns still stand outside the door. Additional topic A adds what Topic 02 leaves out of sexual reproduction in algae: conjugation in <i>Spirogyra</i>, and the cellular events and further examples behind the three gamete-fusion types. Additional topic B deepens pteridophyte reproduction: sorus structure, sporangium types, the heterospory mechanism, and the <i>Selaginella</i> life cycle worked step-by-step. Additional topic C works through what Topic 04 states in one line: the pollen tube pathway, <i>Cycas</i> sperm delivery, and seed formation on the cone scale. Additional topic D supplies the stages behind the pollen grain and embryo sac that Topic 05 describes as finished structures: microsporogenesis, megasporogenesis, and pollen tube growth to the embryo sac. Additional topic E gathers the economic products named in Topics 02 to 05 into one table by group, with the scientific names of the main angiosperm products. Additional topic F is the comparison toolkit: six tables that pit any two groups against each other on every axis simultaneously, plus the ten conceptual traps that separate 300-markers from 600-markers.<br><br>Every pattern below is biology the chapter already introduces, applied one step deeper or one comparison wider.',
      },
      {
        t: 'p',
        html: 'Topic 02 names three types of sexual reproduction in algae (isogamous, anisogamous, oogamous), defines each in one line and gives one or two examples (<i>Chlamydomonas</i>; some <i>Chlamydomonas</i>; <i>Volvox</i> and <i>Fucus</i>). It does not show the cellular events, the further organisms (<i>Ulothrix</i>, <i>Chara</i>), conjugation in <i>Spirogyra</i>, or the NEET-style questions these distinctions generate. This additional topic supplies all four.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The three fusion types: what actually happens, and which organisms do it.</b>',
      },
      {
        t: 'p',
        html: '<b>Isogamy:</b> Two morphologically similar (identical in size, shape, and motility) gametes fuse. Both gametes are usually flagellated and photosynthetic. Fusion takes place between compatible mating types (“+” and “−”); this distinction is physiological, not morphological.<br>• <b><i>Chlamydomonas</i></b> (unicellular green alga): cells act as gametes; they are motile, similar in size, and fuse to form a quadriflagellate zygote that later undergoes meiosis.<br>• <b><i>Ulothrix</i></b> (filamentous green alga): gametes are released from filaments, both are motile and similar.',
      },
      {
        t: 'p',
        html: '<b>Anisogamy:</b> The two gametes differ in size (and sometimes motility), but both are motile. The smaller is the male; the larger is the female. This is the intermediate condition between isogamy and oogamy.<br>• <b><i>Chlamydomonas</i></b> (some species): shows anisogamy under certain conditions: smaller male gametes fuse with larger female gametes.',
      },
      {
        t: 'p',
        html: '<b>Oogamy:</b> The female gamete is large, non-motile, and packed with cytoplasm (the egg); the male gamete is small, motile, and flagellated (the antherozoid/sperm). This is the condition found in most animals and in many advanced plants.<br>• <b><i>Volvox</i></b> (colonial green alga): the colony contains somatic cells (for growth) and a few specialized reproductive cells. Some cells become large non-motile oospheres (eggs); others divide to produce many small, flagellated antherozoids.<br>• <b><i>Fucus</i></b> (brown alga): the conceptacles of the receptacles produce oogonia (each oogonium contains and releases eight eggs) and antheridia (each releasing many antherozoids). The egg is released into seawater; antherozoids swim to it.<br>• <b><i>Chara</i></b> (green alga): the oogonium (nucule) is a large, flask-shaped female organ containing a single egg; the antheridium (globule) produces numerous biciliate antherozoids.',
      },
      {
        t: 'p',
        html: '<b>Conjugation: a special sexual process in <i>Spirogyra</i>.</b><br>Topic 02 mentions <i>Spirogyra</i> under Chlorophyceae but does not explain how it reproduces sexually. Conjugation is the answer, and it is a high-yield NEET item precisely because it is unusual: there is no motile gamete at all.',
      },
      {
        t: 'p',
        html: '<b>Step-by-step conjugation in <i>Spirogyra</i>:</b><br>1. Two adjacent filaments align parallel to each other.<br>2. Opposite cells on each filament develop small outgrowths called <b>conjugation tubes</b>, one from each cell, growing toward each other.<br>3. The conjugation tubes meet and fuse, forming a continuous channel between the two cells.<br>4. The protoplast (cytoplasm + nucleus) of each cell rounds up and contracts slightly: the <b>gamete</b> (though it is non-motile). One gamete moves through the conjugation tube into the opposite cell (the receiving cell is designated female).<br>5. The two protoplasts (the two gametes) fuse inside the receiving cell to form a <b>zygospore</b>.<br>6. The zygospore develops a thick, ornamented wall and becomes resistant to desiccation. The parental filaments disintegrate.<br>7. When conditions improve, the zygospore germinates: the diploid nucleus undergoes meiosis, three of the four haploid nuclei degenerate, and the single surviving haploid nucleus plus cytoplasm grow out as a new filament.',
      },
      {
        t: 'p',
        html: '<b>Key distinction:</b> conjugation in <i>Spirogyra</i> is physiological anisogamy: the fusing cells are similar in size (so it is not morphological anisogamy), but one functions as male and migrates. NCERT classes <i>Spirogyra</i> as isogamous, with non-flagellated gametes of similar size. Give “isogamous” as the answer in an examination; “physiological anisogamy” is the further observation that one gamete behaves as male. When two filaments lie side by side and are joined by ladder-like conjugation tubes, the process is called <b>scalariform conjugation</b>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Identify the Fusion Type.</b> An alga releases gametes that are identical in size, shape, and number of flagella. When two such gametes meet, they fuse end-to-end. Name the type of sexual reproduction and give one example of an alga that shows it. Also state whether the zygote is motile.',
        steps: [
          'Type: <b>Isogamy</b> (fusion of morphologically similar gametes).',
          'Example: <b><i>Chlamydomonas</i></b> or <b><i>Ulothrix</i></b>.',
          'Zygote motility: In <i>Chlamydomonas</i>, the zygote (called a zygospore) is initially quadriflagellate and motile; it later loses flagella and forms a thick-walled resistant structure. In <i>Ulothrix</i>, the zygote is also quadriflagellate and motile at first, and then becomes a non-motile, thick-walled zygospore.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Conjugation in <i>Spirogyra</i>.</b> In <i>Spirogyra</i>, the migrating (male) gametes from one filament move through conjugation tubes to fuse with the receiving (female) gametes in an adjacent filament. State (i) whether the two kinds of gametes are morphologically similar or dissimilar, (ii) whether they are motile or non-motile, and (iii) the name of the diploid structure formed after fusion.',
        steps: [],
        ans: '(i) The two kinds of gametes are <b>morphologically similar</b> (both are rounded protoplasts of roughly equal size); this is why conjugation is considered physiological anisogamy. (ii) They are <b>non-motile</b>: there are no flagella; one protoplast migrates through the conjugation tube. (iii) The diploid structure formed after fusion is the <b>zygospore</b>. NCERT classes <i>Spirogyra</i> as isogamous, with non-flagellated gametes of similar size. Give “isogamous” as the answer in an examination; “physiological anisogamy” is the further observation that one gamete behaves as male.',
      },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Oogamy in <i>Volvox</i>.</b> <i>Volvox</i> forms two types of specialised cells within the colony. Describe (i) the cell that produces the female gamete, (ii) the cell that produces the male gametes, and (iii) where fertilisation occurs.',
        steps: [],
        ans: '(i) Certain cells in the <i>Volvox</i> colony enlarge and develop into <b>oospheres</b> (eggs): large, non-motile, packed with cytoplasm. These are formed within the parent colony. (ii) Other cells divide repeatedly to produce many small, biciliate <b>antherozoids</b> (male gametes). (iii) Fertilisation occurs <b>inside the parent colony</b>: antherozoids swim to the oosphere, one penetrates, and syngamy occurs. The zygote is retained in the colony until it is released.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] What type of gametes fuse in <i>Chlamydomonas</i>? Are they motile or non-motile?',
            a: 'Isogamous fusion of morphologically similar gametes; both gametes are motile (flagellated).',
          },
          {
            q: '[NEET] Name the process of sexual reproduction in <i>Spirogyra</i> and state whether the gametes are motile.',
            a: 'Conjugation; the gametes are non-motile (no flagella): one protoplast migrates through the conjugation tube.',
          },
          {
            q: '[CBSE] Distinguish between isogamy and anisogamy. Give one example of each.',
            a: 'Isogamy: fusion of morphologically similar gametes (<i>Chlamydomonas</i>). Anisogamy: fusion of dissimilar gametes in size/motility (some <i>Chlamydomonas</i> species).',
          },
          {
            q: '[NEET] In <i>Fucus</i>, name the structure that produces the female gamete and the structure that produces the male gamete. How many eggs does each oogonium release?',
            a: 'Oogonium produces the eggs; antheridium produces many antherozoids. Each oogonium releases <b>eight eggs</b>.',
          },
          {
            q: '[NEET] The zygospore of <i>Spirogyra</i> is diploid. What happens to it when conditions become favourable?',
            a: 'The diploid zygospore germinates: the diploid nucleus undergoes meiosis → three haploid nuclei degenerate → one surviving haploid nucleus grows out as a new filament.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 192–195 ─────────────────────────
  {
    n: 'B',
    title: 'Pteridophyte Reproduction: Sori, Sporangia, and the Heterosporous Life Cycle',
    extra: true,
    kalam: 'In true ferns, the sporangia are grouped into sori, discrete clusters on the underside of the frond.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 03 names the four pteridophyte classes, states that <i>Selaginella</i> and <i>Salvinia</i> are heterosporous, says in section 3.2 that microspores give male and megaspores female gametophytes, with the megaspore retained on the parent (the origin of the seed habit), and shows sori on a <i>Dryopteris</i> frond in Fig 3.3. It does not explain what a sorus and its indusium are, how a sporangium is built and opens, or how the <i>Selaginella</i> life cycle works step-by-step. This additional topic supplies those mechanisms.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Sorus structure in ferns.</b><br>In true ferns (Pteropsida: <i>Dryopteris</i>, <i>Pteris</i>, <i>Adiantum</i>), the sporangia are grouped into <b>sori</b>: discrete clusters on the underside of the frond. Each sorus is covered by a protective flap of tissue called the <b>indusium</b> (derived from the leaf tissue). The indusium protects the immature sporangia and prevents desiccation.<br>• In <b><i>Dryopteris</i></b>, the sori are circular and covered by a reniform (kidney-shaped) indusium.<br>• In <b><i>Adiantum</i></b> (maidenhair fern), the sori are linear and covered by the reflexed (folded-back) margin of the pinnule itself; this is called a <b>false indusium</b>.<br>• Inside each sorus, numerous sporangia develop. Each sporangium has a <b>bilipped (bivalved) capsule</b> with a vertical annulus (a band of thickened cells) that runs around the capsule and breaks open at the <b>stomium</b> to release the spores.',
      },
      {
        t: 'p',
        html: '<b>Heterospory: microspores and megaspores.</b><br>In heterosporous pteridophytes (<i>Selaginella</i>, <i>Salvinia</i>), two types of spores are produced:<br>• <b>Microspores</b> are small, produced in large numbers in <b>microsporangia</b> on microsporophylls. Each microspore germinates into a <b>male gametophyte</b> that is retained within the spore wall; it never becomes free-living. The male gametophyte releases <b>antherozoids</b>.<br>• <b>Megaspores</b> are large and few in number (in <i>Selaginella</i>, usually four per megasporangium), produced in <b>megasporangia</b> on megasporophylls. The megaspore is retained on the parent sporophyte. It germinates into the <b>female gametophyte</b> inside the spore wall. The female gametophyte produces <b>archegonia</b>. The egg is fertilised in place, and the embryo develops while attached to the parent; this is the seed-habit precursor condition.',
      },
      {
        t: 'p',
        html: '<b>The <i>Selaginella</i> life cycle: worked step-by-step.</b><br><i>Selaginella</i> is a <b>lycopsid</b> (class Lycopsida). Its life cycle demonstrates heterospory and the seed-habit precursor.<br>1. <b>Sporophyte (2n):</b> The dominant plant body bears two types of strobili (cones): <b>strobili</b> containing microsporophylls and strobili containing megasporophylls. These may be on the same axis (mixed cone) or on separate branches.<br>2. <b>Microsporangia → Microspores:</b> Each microsporophyll bears a microsporangium. Inside, a microspore mother cell undergoes meiosis → four <b>microspores</b> (n). Each microspore is a <b>male gametophyte in miniature</b>. It germinates inside the spore wall: the spore coat ruptures, and a small <b>prothallial cell</b> and an <b>antheridial cell</b> are formed. The antheridial cell divides repeatedly to produce numerous <b>antherozoids</b> (biflagellate male gametes). The male gametophyte is highly reduced and stays within the microspore wall.<br>3. <b>Megasporangia → Megaspores:</b> On the megasporophyll, a megaspore mother cell undergoes meiosis → a tetrad of four <b>megaspores</b> (n); usually all four are functional (in a few species fewer). The megaspores are retained inside the megasporangium on the parent sporophyte. Inside, a megaspore germinates: the megaspore wall ruptures, and the <b>female gametophyte</b> grows out as a small cellular tissue. It produces <b>archegonia</b> (each with one egg). The gametophyte is <b>photosynthetic</b> initially, then becomes non-green.<br>4. <b>Fertilisation:</b> An antherozoid swims through a film of water (note: water is still required, as in all pteridophytes) to reach the archegonium. It fuses with the egg → <b>zygote (2n)</b>.<br>5. <b>Embryo development:</b> The zygote divides and develops into an <b>embryo</b> while still attached to the parent female gametophyte, which is in turn attached to the parent sporophyte. The embryo has a <b>suspensor</b> (a file of cells that pushes the embryo into the gametophyte tissue for nourishment) and develops a root, shoot, and cotyledon(s). This retained, provisioned, embryo-on-parent arrangement is the <b>seed-habit precursor condition</b>.<br>6. <b>Dispersal:</b> The megasporophyll (with the megasporangium containing the developing embryo) may be shed, or the sporangium may dehisce and release the megaspore with its embryo; this structure functions as a seed even though it is not a true seed (no seed coat from the integuments, though the spore wall is thickened).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Microspore vs Megaspore Fate.</b> In <i>Selaginella</i>, a microspore germinates to form the male gametophyte. State (i) whether one microspore produces a single antherozoid or many, (ii) whether the male gametophyte is free-living or retained, and (iii) how many megaspores result from meiosis of one megaspore mother cell and whether they remain on the parent.',
        steps: [],
        ans: '(i) Each microspore produces <b>numerous antherozoids</b> (biflagellate male gametes). (ii) The male gametophyte is <b>retained within the microspore wall, never free-living</b>. (iii) Meiosis of a megaspore mother cell gives a tetrad of <b>four megaspores</b>; in <i>Selaginella</i> usually all four are functional, and each is retained within the megasporangium on the parent sporophyte, where it gives rise to a female gametophyte.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Sorus Structure.</b> With reference to a fern (<i>Dryopteris</i>), explain what a sorus is. How is it protected? Name the structure that covers the sorus and state its shape.',
        steps: [],
        ans: 'A sorus is a cluster of sporangia on the underside of a fern frond, the site where spores are produced by meiosis. In <i>Dryopteris</i>, the sorus is covered by a protective flap of tissue called the <b>indusium</b>. The indusium of <i>Dryopteris</i> is <b>reniform (kidney-shaped)</b>. Beneath it, numerous sporangia develop, each containing spores.',
      },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Why Heterospory is Significant.</b> State two ways in which heterospory in <i>Selaginella</i> differs from homospory in <i>Dryopteris</i>, and explain why heterospory is considered a precursor to the seed habit.',
        steps: [
          '<b>Differences:</b><br>1. <i>Dryopteris</i> produces one type of spore (homosporous); <i>Selaginella</i> produces two types: microspores and megaspores (heterosporous).<br>2. In <i>Dryopteris</i> the spores germinate into free-living prothalli that bear both antheridia and archegonia; in <i>Selaginella</i>, microspores give rise to male gametophytes (antheridia only) and megaspores give rise to female gametophytes (archegonia only); the female gametophyte is retained in the megaspore on the parent sporophyte, and the male gametophyte stays inside the microspore wall.',
          '<b>Significance:</b> The megaspore is retained on the parent sporophyte, and the female gametophyte develops in place and nourishes the embryo. This “keep the next generation at home and feed it” arrangement is the evolutionary forerunner of the seed. True seeds add a protective seed coat from the integuments, but the heterosporous pteridophyte condition already shows retention, nourishment, and embryo protection.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What is a sorus? Name the fern in which the sorus is covered by a reniform indusium.',
            a: 'A sorus is a cluster of sporangia on the undersurface of a fern frond. It is found in <b><i>Dryopteris</i></b> and is covered by a reniform (kidney-shaped) indusium.',
          },
          {
            q: '[NEET] In <i>Selaginella</i>, does one microspore give rise to a single antherozoid or to many?',
            a: '<b>Many</b>: the antheridial cell divides repeatedly to form numerous antherozoids.',
          },
          {
            q: '[NEET] State one difference between a microspore and a megaspore in <i>Selaginella</i> with regard to the gametophyte they produce.',
            a: 'A microspore produces a male gametophyte bearing <b>antheridia</b> (male sex organs); a megaspore produces a female gametophyte bearing <b>archegonia</b> (female sex organs).',
          },
          {
            q: '[NEET] What is the role of the suspensor in <i>Selaginella</i> embryo development?',
            a: 'The suspensor is a file of cells that <b>pushes the embryo deep into the female gametophyte tissue</b>, ensuring proper anchorage and nourishment of the developing embryo.',
          },
          {
            q: '[CBSE] Why is heterospory considered significant in the evolution of seed plants?',
            a: 'Heterospory involves retention of the megaspore and female gametophyte on the parent sporophyte, where fertilisation and embryo development occur. This “retained, provisioned embryo” condition is the direct evolutionary precursor to the seed habit of gymnosperms and angiosperms.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 195–198 ─────────────────────────
  {
    n: 'C',
    title: 'Gymnosperm Reproduction: Pollination, Fertilisation, and Seed Formation',
    extra: true,
    kalam:
      'Topic 04 states that gymnosperms bear naked seeds, no fruits, no double fertilisation and haploid endosperm, that pollination is by wind to the micropyle with a pollen tube carrying the male gamete, that Cycas keeps motile sperm, and that the ovule becomes a naked, winged seed.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 04 states that gymnosperms bear naked seeds, no fruits, no double fertilisation and haploid endosperm, that pollination is by wind to the micropyle with a pollen tube carrying the male gamete, that <i>Cycas</i> keeps motile sperm, and that the ovule becomes a naked, winged seed. It does not give the detail: the air sacs of the winged pollen and the pollination droplet, the two non-motile male cells and the fate of each, how the <i>Cycas</i> sperm swims to the egg, or the origin and ploidy of each part of the seed. This additional topic supplies that detail.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Pollination in gymnosperms: wind pollination to the micropyle.</b><br>Conifers such as <i>Pinus</i> are wind-pollinated (anemophilous): there is no animal vector, no nectar and no flower. The steps:<br>1. The <b>male cone</b> (microsporangiate strobilus) bears numerous microsporophylls, each with two microsporangia on its lower surface.<br>2. Inside each microsporangium, microspore mother cells undergo meiosis → four <b>microspores</b> (n). Each microspore develops into a <b>pollen grain</b>.<br>3. The mature pollen grain in <i>Pinus</i> is <b>winged</b>: it has two balloon-like air sacs (wings) that aid buoyancy and wind dispersal. This is the “sulphur shower” in pine forests.<br>4. When the male cone matures, the microsporangia dehisce and release millions of pollen grains into the air.<br>5. Some pollen grains land on the <b>ovule</b> of a female cone. The ovule has a <b>micropyle</b>, a small opening in the integument, through which the pollen grain enters.<br>6. There is <b>no stigma, no style, no ovary</b>. The pollen lands directly on the nucellus (megasporangium) near the micropyle. A <b>pollination droplet</b> may exude from the micropyle and capture pollen.',
      },
      {
        t: 'p',
        html: '<b>Pollen tube growth and fertilisation in <i>Pinus</i>.</b><br>1. After pollination, the pollen grain germinates: the <b>vegetative cell</b> elongates to form the <b>pollen tube</b>. The <b>generative cell</b> divides into two <b>male cells (male gametes)</b>; these are non-motile.<br>2. The pollen tube grows through the nucellar tissue, toward the female gametophyte.<br>3. When the pollen tube tip reaches the archegonium, it discharges its two male cells into the cytoplasm of the egg cell.<br>4. <b>One male cell fuses with the egg nucleus</b> (syngamy) → diploid zygote.<br>5. The second male cell degenerates; there is no second fusion.<br>6. This is <b>single fertilisation</b>, not double fertilisation. The outcome is one zygote → one embryo.',
      },
      {
        t: 'p',
        html: '<b>Note on <i>Cycas</i>:</b> <i>Cycas</i> retains an ancestral feature: the male gametes are <b>motile, multiflagellate sperm</b>. The pollen tube delivers the sperm cell to the vicinity of the archegonium, and the sperm is released into the archegonial fluid where it swims to the egg. <i>Cycas</i> has among the largest sperm in the plant kingdom, visible to the naked eye. The sperm’s flagella are a holdover from its fern-like ancestry.',
      },
      {
        t: 'p',
        html: '<b>Seed formation on the cone scale.</b><br>1. After fertilisation, the zygote divides and develops into an embryo. The embryo has a <b>suspensor</b>, a <b>radicle</b> (future root), a <b>plumule</b> (future shoot), and <b>two to many cotyledons</b> (the embryo of <i>Pinus</i> is polycotyledonous).<br>2. Meanwhile, the <b>female gametophyte</b> (n) has been developing in the ovule and serves as the food-storing tissue: the <b>haploid endosperm</b>.<br>3. The <b>integuments</b> of the ovule harden to become the <b>seed coat</b>. In <i>Pinus</i>, the ovuliferous scale contributes to the seed wing.<br>4. The mature <b>seed</b> consists of: embryo (2n, with cotyledons), endosperm (n), and seed coat (2n, from integuments). The seed is <b>naked</b>: it sits exposed on the upper surface of the ovuliferous scale of the female cone.<br>5. The seed is dispersed (often by wind: the wing aids this) and germinates into a new sporophyte.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Pollen Tube and Fertilisation.</b> In <i>Pinus</i>, the pollen tube delivers two male cells to the archegonium. State (i) the fate of the first male cell, (ii) the fate of the second male cell, and (iii) why this is not called double fertilisation.',
        steps: [],
        ans: '(i) The first male cell fuses with the egg nucleus (syngamy) → diploid zygote. (ii) The second male cell degenerates. (iii) This is <b>not double fertilisation</b> because double fertilisation (unique to angiosperms; NCERT treats the triple fusion giving triploid endosperm as unique to angiosperms) involves two distinct fusion events: one male gamete fuses with the egg (syngamy → zygote) AND a second male gamete fuses with the two polar nuclei (triple fusion → triploid endosperm). In <i>Pinus</i>, the second male cell degenerates; there is only one fusion event. Hence: <b>single fertilisation</b>.',
      },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Why <i>Cycas</i> Sperm is Significant.</b> State two ways in which fertilisation in <i>Cycas</i> differs from fertilisation in <i>Pinus</i>. What does the presence of motile sperm indicate about <i>Cycas</i>’s evolutionary history?',
        steps: [
          '(i) In <i>Pinus</i>, the male gametes are <b>non-motile</b>: they are carried to the egg by the pollen tube. In <i>Cycas</i>, the male gametes are <b>multiflagellate and motile</b>: they swim through the archegonial fluid. (ii) In both, fertilisation is single (one male cell fuses with the egg), but in <i>Cycas</i> the sperm must actively swim to the egg.',
          '<b>Evolutionary significance:</b> Motile flagellated sperm are a <b>primitive character</b> inherited from the aquatic ancestors of land plants (like pteridophytes). <i>Cycas</i> has retained this ancestral feature, while <i>Pinus</i> (and most other gymnosperms) have lost it and evolved the pollen-tube mechanism. This places <i>Cycas</i> lower on the gymnosperm evolutionary tree and shows that it keeps fern-like features such as motile sperm and circinate vernation.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Seed Structure in <i>Pinus</i>.</b> Draw a labelled diagram of a <i>Pinus</i> seed showing (i) seed coat, (ii) endosperm, and (iii) embryo. State the ploidy and origin of each part.',
        steps: [],
        ans: '(i) <b>Seed coat</b>, ploidy: <b>diploid (2n)</b>; origin: the <b>integuments</b> of the ovule. (ii) <b>Endosperm</b>, ploidy: <b>haploid (n)</b>; origin: the <b>female gametophyte</b> tissue that formed <b>before fertilisation</b>. (iii) <b>Embryo</b>, ploidy: <b>diploid (2n)</b>; origin: the <b>zygote</b> (fusion of egg + male gamete) → divides mitotically to form the embryo with radicle, plumule, and cotyledons.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] How does pollination occur in gymnosperms? Why is no animal involvement required?',
            a: 'Pollination is by <b>wind</b> (anemophily). Pollen grains are released in vast numbers from male cones and carried by air currents to the micropyle of the ovule on female cones. In conifers no animal is needed, because there are no flowers, nectar or scent to attract pollinators.',
          },
          {
            q: '[NEET] State two differences between fertilisation in <i>Pinus</i> and fertilisation in an angiosperm.',
            a: '<i>Pinus</i>: single fertilisation (one male cell + egg → zygote; second male cell degenerates); no triple fusion. Angiosperm: <b>double fertilisation</b> (one male cell + egg → zygote; second male cell + two polar nuclei → triploid endosperm). Also: gymnosperm pollen lands directly on the nucellus; angiosperm pollen lands on the stigma.',
          },
          {
            q: '[NEET] What is the function of the air sacs on a <i>Pinus</i> pollen grain?',
            a: 'The air sacs increase the <b>buoyancy</b> of the pollen grain in air, aiding wind dispersal over longer distances.',
          },
          {
            q: '[CBSE] Name the structure in <i>Cycas</i> that houses the motile sperm. State one other characteristic of <i>Cycas</i> that shows its primitive nature.',
            a: 'The sperm are released into the <b>archegonial chamber</b> (the fluid-filled space above the archegonium) and swim through it. Another primitive feature of <i>Cycas</i> is <b>circinate vernation</b> (young leaves coiled like a fern’s).',
          },
          {
            q: '[NEET] State the ploidy and origin of the endosperm in a gymnosperm seed.',
            a: 'The endosperm is <b>haploid (n)</b> in origin and is the <b>female gametophyte tissue</b>. It forms <b>before fertilisation</b>: the female gametophyte develops from the megaspore in the ovule and stores food; it is not a product of fertilisation (unlike angiosperm endosperm).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 198–201 ─────────────────────────
  {
    n: 'D',
    title: 'Microsporogenesis, Megasporogenesis, and Pollen Tube Growth',
    extra: true,
    kalam:
      'Topic 05 gives the mature pollen grain (2-celled) and embryo sac (7 cells, 8 nuclei), and outlines the route (mother cell, meiosis, microspores and megaspores, one functional megaspore).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 05 gives the mature pollen grain (2-celled) and embryo sac (7 cells, 8 nuclei), and outlines the route (mother cell, meiosis, microspores and megaspores, one functional megaspore). It gives the outcome but not the stages: the archesporial, parietal and sporogenous cells, the dyad and tetrad, the three mitotic divisions of the functional megaspore, chemotropic growth of the tube and its entry through a synergid. This gap matters for NEET because the developmental story links meiosis to the adult structures students memorise.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Microsporogenesis: pollen grain formation.</b><br>1. In the <b>anther</b> (microsporangium), a layer of hypodermal cells differentiates into <b>archesporial cells</b>.<br>2. Each archesporial cell divides to form a <b>primary parietal cell</b> (toward the periphery, giving the anther wall layers) and a <b>primary sporogenous cell</b> (toward the centre, giving the spore-producing tissue).<br>3. The primary sporogenous cells undergo mitotic divisions to form a mass of <b>sporogenous cells</b>.<br>4. Each sporogenous cell becomes a <b>microspore mother cell (pollen mother cell, PMC)</b>, a diploid (2n) cell.<br>5. Each PMC undergoes <b>meiosis I</b> → two <b>dyad cells</b> → <b>meiosis II</b> → a <b>tetrad of four haploid microspores</b>.<br>6. The four microspores separate. Each microspore is initially <b>tetrahedral</b> (pyramid-shaped).<br>7. The microspore undergoes a single mitotic division, <b>unequal mitosis</b>, producing two cells:<br>• A <b>small generative cell</b> (pressed against the spore wall): will later divide to form the two male gametes.<br>• A <b>large vegetative (tube) cell</b>: will form the pollen tube.<br>8. The mature <b>2-celled pollen grain</b> consists of: vegetative cell nucleus + generative cell. The generative cell later floats into the vegetative cell cytoplasm. At this stage the pollen is shed (in 2-celled condition in most angiosperms; some shed at 3-celled stage where the generative cell has already divided).',
      },
      {
        t: 'p',
        html: '<b>Megasporogenesis: embryo sac formation.</b><br>1. In the <b>ovule</b> (megasporangium), a sub-epidermal cell becomes the <b>archesporial cell</b>. This may directly become the <b>megaspore mother cell (MMC)</b> or may divide to form a parietal cell + MMC.<br>2. The MMC is <b>diploid (2n)</b>. It undergoes <b>meiosis I</b> → two <b>dyad cells</b>. Meiosis II follows.<br>3. In the <b>monosporic (Polygonum) type</b> (the most common pattern in angiosperms):<br>• Both dyad cells undergo <b>meiosis II</b>, giving a linear tetrad of four megaspores.<br>• The three <b>micropylar</b> megaspores degenerate; only the <b>chalazal</b> megaspore is functional.<br>4. The <b>functional megaspore</b> (n) is the only survivor out of four. It lies at the <b>chalazal end</b> of the tetrad and is the embryo sac initial.<br>5. The functional megaspore undergoes <b>three mitotic divisions</b>:<br>• Division 1: two nuclei → one at micropylar end, one at chalazal end.<br>• Division 2: four nuclei: two move to each pole.<br>• Division 3: eight nuclei: four at each pole.<br>6. <b>Cellularisation:</b> one nucleus from each pole moves to the centre → <b>two polar nuclei</b> (in the central cell). At the micropylar pole, three cells form: <b>one egg cell + two synergid cells</b> (the egg apparatus). At the chalazal pole, three cells form: <b>three antipodal cells</b>. The central cell contains the two polar nuclei.<br>7. Result: <b>7 cells, 8 nuclei</b>: the mature embryo sac.',
      },
      {
        t: 'p',
        html: '<b>Pollen tube growth to the embryo sac.</b><br>1. After pollination, the pollen grain germinates on the stigma: the <b>vegetative cell</b> elongates as a <b>pollen tube</b> down through the style.<br>2. The <b>generative cell</b> divides (if not already) to produce two <b>male gametes</b> (cells with male nuclei).<br>3. The pollen tube grows chemotropically (guided by chemical signals from the ovule) down the style, through the micropyle, into the <b>embryo sac</b>.<br>4. The pollen tube enters through the <b>synergid cell</b>: it discharges its contents (two male gametes + vegetative nucleus) into the synergid cytoplasm.<br>5. One male gamete moves to and fuses with the <b>egg nucleus</b> (syngamy → zygote, 2n). The other male gamete moves to and fuses with the <b>two polar nuclei</b> of the central cell (triple fusion → primary endosperm nucleus, 3n).<br>6. The receptive <b>synergid</b> degenerates after pollen tube discharge.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Microspore Mother Cell to Pollen Grain.</b> Starting from a microspore mother cell in an anther, describe the steps that lead to a mature 2-celled pollen grain. Name the type of cell division that forms the microspores and the type that forms the generative and vegetative cells.',
        steps: [
          'Microspore mother cell (2n) → <b>meiosis</b> → tetrad of four haploid microspores.',
          'Microspores separate.',
          'Each microspore undergoes <b>one mitotic division</b> (unequal) → a small <b>generative cell</b> and a large <b>vegetative (tube) cell</b>.',
          'Result: mature <b>2-celled pollen grain</b> (vegetative cell + generative cell).',
        ],
        ans: '• Meiosis forms microspores.<br>• Mitosis forms generative and vegetative cells from the microspore.',
      },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Embryo Sac Development.</b> In a typical angiosperm, the embryo sac develops from one functional megaspore. State (i) the location of the functional megaspore relative to the megaspore tetrad, (ii) how many mitotic divisions the functional megaspore undergoes, and (iii) how many cells and nuclei the mature embryo sac contains.',
        steps: [],
        ans: '(i) The functional megaspore is at the <b>chalazal end</b> (the lower pole of the tetrad); the other three megaspores degenerate. (ii) It undergoes <b>three mitotic divisions</b>. (iii) The mature embryo sac contains <b>7 cells</b> (egg + 2 synergids + 3 antipodals + 1 central cell) and <b>8 nuclei</b> (2 polar nuclei in the central cell + 6 uninucleate cells).',
      },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Double Fertilisation Sequence.</b> Describe the sequence of events from pollen tube entry into the embryo sac to the formation of zygote and primary endosperm nucleus.',
        steps: [
          'Pollen tube enters the embryo sac through the <b>micropyle</b>, typically through the synergid cell.',
          'The pollen tube tip ruptures, releasing: <b>two male gametes</b> + the <b>vegetative (tube) nucleus</b>.',
          'One male gamete moves to the egg cell and fuses with the egg nucleus: <b>syngamy → diploid zygote (2n)</b>.',
          'The second male gamete moves to the central cell and fuses with the <b>two polar nuclei</b>: <b>triple fusion → triploid primary endosperm nucleus (3n)</b>.',
          'The receptive <b>synergid</b> degenerates after pollen tube discharge.',
          'This entire process is called <b>double fertilisation</b> and is unique to angiosperms (NCERT treats the triple fusion giving triploid endosperm as unique to angiosperms).',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] From which cell in the anther does the microspore mother cell originate? What type of division produces microspores?',
            a: 'The microspore mother cell originates from the <b>primary sporogenous cell</b> (formed from the archesporial cell). <b>Meiosis</b> (meiosis I is the reductional division, meiosis II is equational) produces four haploid microspores.',
          },
          {
            q: '[NEET] How many mitotic divisions occur in the functional megaspore to form the embryo sac?',
            a: '<b>Three</b> mitotic divisions.',
          },
          {
            q: '[CBSE] State the number of cells and nuclei in a mature embryo sac. Name the cell that contains two nuclei.',
            a: '<b>7 cells, 8 nuclei.</b> The central cell contains two polar nuclei.',
          },
          {
            q: '[NEET] What happens to the second male gamete in double fertilisation?',
            a: 'It fuses with the two polar nuclei of the central cell (triple fusion) to form the <b>triploid primary endosperm nucleus</b>.',
          },
          {
            q: '[NEET] Name the type of cell division that produces the generative cell from the microspore.',
            a: '<b>Mitosis</b> (specifically one unequal mitotic division).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 201–204 ─────────────────────────
  {
    n: 'E',
    title: 'Economic Importance: Comprehensive NCERT Coverage',
    extra: true,
    kalam: 'Topics 02 to 05 each give the economic importance of their group in a short section.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topics 02 to 05 each have a short economic importance section, one per group. This additional topic gathers them into one reference table by organism, product and group, and adds the scientific names of the main angiosperm products. Use the table to check that every product is matched to the right source.',
      },

      { t: 'part', title: 'Economic Importance Table' },
      {
        t: 'table',
        title: null,
        head: ['Group', 'Organism', 'Product / Use', 'Chapter reference'],
        rows: [
          ['<b>Chlorophyceae (Green Algae)</b>', '<i>Chlorella</i>', 'Protein-rich food supplement; single-cell protein', 'Topic 02, section 3.3'],
          ['<b>Cyanobacteria</b> (listed with the algae in NCERT)', '<i>Spirulina</i>', 'Protein-rich food supplement; single-cell protein', 'Topic 02, section 3.3'],
          ['<b>Rhodophyceae (Red Algae)</b>', '<i>Gracilaria</i>', 'Agar (culture medium for microbes; food industry for jellies and ice creams)', 'Topic 02, section 3.3'],
          ['<b>Rhodophyceae</b>', '<i>Gelidium</i>', 'Agar (alternative source)', 'Topic 02, section 3.3'],
          ['<b>Rhodophyceae</b>', 'Various (e.g., <i>Chondrus</i>)', '<b>Carrageen</b>: hydrocolloid used in food, pharmaceuticals', 'Topic 02, section 3.3'],
          ['<b>Rhodophyceae</b>', 'Calcareous red algae', 'Reef-building; calcium carbonate deposition', 'Topic 02, section 3.3'],
          ['<b>Phaeophyceae (Brown Algae)</b>', '<i>Laminaria</i>, <i>Sargassum</i>', 'Food (eaten in several countries)', 'Topic 02, section 3.3'],
          ['<b>Phaeophyceae</b>', 'Brown algae (general)', '<b>Algin</b>: hydrocolloid (water-holding) used in food, textiles, pharmaceuticals', 'Topic 02, section 3.3'],
          ['<b>Bryophytes</b>', '<i>Sphagnum</i> (moss)', '<b>Peat</b>: used as fuel; <b>hygroscopic packing material</b> for cut flowers and live plants during transport', 'Topic 03, section 3.4'],
          ['<b>Bryophytes</b>', 'Mosses (general)', 'Soil-erosion control; <b>pioneers of ecological succession</b> on bare rock', 'Topic 03, section 3.4'],
          ['<b>Pteridophytes</b>', 'Various (e.g., <i>Dryopteris</i>, <i>Pteris</i>)', 'Medicinal uses; soil-binders; ornamental plants', 'Topic 03, section 3.4'],
          ['<b>Gymnosperms</b>', '<i>Pinus</i>', '<b>Resin and turpentine</b>: obtained from the resin canals; turpentine used as solvent', 'Topic 04, section 3.4'],
          ['<b>Gymnosperms</b>', '<i>Pinus gerardiana</i>', '<b>Chilgoza</b>: edible pine nuts (food)', 'Topic 04, section 3.4'],
          ['<b>Gymnosperms</b>', '<i>Cycas revoluta</i>', '<b>Sago</b>: starch obtained from the stem pith (food)', 'Topic 04, section 3.4'],
          ['<b>Gymnosperms</b>', '<i>Abies</i>', '<b>Canada balsam</b>: mounting medium for microscope slides', 'Topic 04, section 3.4'],
          ['<b>Gymnosperms</b>', 'Conifers (general)', '<b>Softwood timber</b>: construction, paper pulp', 'Topic 04, section 3.4'],
          ['<b>Gymnosperms</b>', '<i>Sequoia</i>', '<b>Redwood timber</b>; tallest tree species', 'Topic 04, section 3.4'],
          ['<b>Angiosperms</b>', 'Cereals: rice, wheat, maize', 'Staple food', 'Topic 05, section 3.5'],
          ['<b>Angiosperms</b>', 'Pulses: gram, pea', 'Protein food', 'Topic 05, section 3.5'],
          ['<b>Angiosperms</b>', '<i>Saccharum officinarum</i>', 'Sugarcane: sugar', 'Topic 05, section 3.5'],
          ['<b>Angiosperms</b>', '<i>Gossypium</i>', '<b>Cotton</b>: fibre for textiles', 'Topic 05, section 3.5'],
          ['<b>Angiosperms</b>', '<i>Corchorus</i>', '<b>Jute</b>: fibre', 'Topic 05, section 3.5'],
          ['<b>Angiosperms</b>', '<i>Linum usitatissimum</i>', '<b>Flax</b>: linen fibre', 'Topic 05, section 3.5'],
          ['<b>Angiosperms</b>', '<i>Cinchona</i>', '<b>Quinine</b>: antimalarial drug', 'Topic 05, section 3.5'],
          ['<b>Angiosperms</b>', '<i>Papaver somniferum</i>', '<b>Morphine</b>: analgesic', 'Topic 05, section 3.5'],
          ['<b>Angiosperms</b>', '<i>Rauwolfia serpentina</i>', '<b>Reserpine</b>: antihypertensive', 'Topic 05, section 3.5'],
          ['<b>Angiosperms</b>', '<i>Camellia sinensis</i>', 'Tea', 'Topic 05, section 3.5'],
          ['<b>Angiosperms</b>', '<i>Coffea arabica</i>', 'Coffee', 'Topic 05, section 3.5'],
          ['<b>Angiosperms</b>', '<i>Piper nigrum</i>', 'Pepper (spice)', 'Topic 05, section 3.5'],
          ['<b>Angiosperms</b>', '<i>Syzygium aromaticum</i>', 'Clove (spice)', 'Topic 05, section 3.5'],
          ['<b>Angiosperms</b>', '<i>Elettaria cardamomum</i>', 'Cardamom (spice)', 'Topic 05, section 3.5'],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Economic Products.</b> Match the following products with their plant source and group:<br>(A) Agar: (i) <i>Gracilaria</i>, Rhodophyceae<br>(B) Algin: (ii) Brown algae, Phaeophyceae<br>(C) Peat: (iii) <i>Sphagnum</i>, Bryophyte<br>(D) Resin: (iv) <i>Pinus</i>, Gymnosperm',
        steps: [],
        ans: 'A-(i), B-(ii), C-(iii), D-(iv). All four pairs are correct.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Economic Importance of Bryophytes.</b> State two economic uses of bryophytes and two of gymnosperms, with specific organism names.',
        steps: [
          '<b>Bryophytes:</b><br>1. <i>Sphagnum</i> (moss) yields <b>peat</b>, used as fuel and as hygroscopic packing material for transporting cut flowers.<br>2. Mosses are <b>pioneers of ecological succession</b> on bare rock: they decompose the substratum and help form soil, also reducing soil erosion.',
          '<b>Gymnosperms:</b><br>1. <i>Pinus</i> yields <b>resin and turpentine</b> (from resin canals), used as solvents and in paints.<br>2. <i>Cycas revoluta</i> provides <b>sago</b> (starch from stem pith), used as food.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] From which alga is agar obtained? Name one other commercial product from algae.',
            a: 'Agar is obtained from <i>Gracilaria</i> and <i>Gelidium</i> (red algae). Another commercial product is <b>algin</b> from brown algae.',
          },
          {
            q: '[NEET] Name the gymnosperm from which resin and turpentine are obtained.',
            a: '<i>Pinus</i>: resin and turpentine.',
          },
          {
            q: '[CBSE] State one economic use each of <i>Sphagnum</i>, <i>Pinus</i>, and <i>Cycas</i>.',
            a: '<i>Sphagnum</i>: peat as fuel/hygroscopic packing. <i>Pinus</i>: resin and turpentine; timber. <i>Cycas</i>: sago from stem pith; ornamental.',
          },
          {
            q: '[NEET] Name the drug obtained from <i>Cinchona</i> and its medical use.',
            a: '<b>Quinine</b>: antimalarial drug.',
          },
          {
            q: '[NEET] Which plant group contributes the most to human food? Name three food categories derived from it.',
            a: '<b>Angiosperms</b> (flowering plants). Three food categories: <b>cereals</b> (rice, wheat), <b>pulses</b> (gram, pea), <b>vegetables and fruits</b>.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 204–210 ─────────────────────────
  {
    n: 'F',
    title: 'Comprehensive Comparison Tables and Conceptual Traps',
    extra: true,
    kalam:
      'Topics 02 to 06 each give their own comparison, but there is no table across all five plant groups.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topics 02 to 06 each give their own comparison (the three algal classes, bryophytes versus pteridophytes, gymnosperms versus angiosperms, dicots versus monocots, the three life-cycle patterns) but there is no table across all five plant groups. This additional topic adds that table (Matrix 1), sets the five single-topic tables beside it, and ends with ten conceptual traps.',
      },

      { t: 'part', title: 'Comparison matrices' },
      {
        t: 'table',
        title: 'Comparison Matrix 1: Plant Groups by Life Cycle and Dominance',
        head: ['Feature', 'Algae', 'Bryophytes', 'Pteridophytes', 'Gymnosperms', 'Angiosperms'],
        rows: [
          ['Dominant phase', 'Usually gametophyte (haplontic)', 'Gametophyte', 'Sporophyte', 'Sporophyte', 'Sporophyte'],
          ['Life cycle pattern', 'Haplontic, diplontic or haplo-diplontic', 'Haplo-diplontic', 'Haplo-diplontic', 'Diplontic', 'Diplontic'],
          ['Vascular tissue', 'Absent', 'Absent', 'Present', 'Present', 'Present'],
          ['Seeds', 'Absent', 'Absent', 'Absent', '<b>Naked</b>', '<b>Enclosed in fruit</b>'],
          ['Flowers / cones', 'Absent', 'Absent', 'Absent', 'Cones (strobili)', 'Flowers'],
          ['Water for fertilisation', 'Usually (gametes motile in most; non-motile in red algae and in <i>Spirogyra</i>)', 'Required', 'Required', 'Not required from outside (the motile sperm of <i>Cycas</i> and <i>Ginkgo</i> swim in the ovule’s own fluid)', 'Not required'],
          ['Double fertilisation', 'Absent', 'Absent', 'Absent', 'Absent', '<b>Present</b>'],
          ['Endosperm', 'Absent', 'Absent', 'Absent', '<b>Haploid (n), pre-fertilisation</b>', '<b>Triploid (3n), post-fertilisation</b>'],
          ['Free-living gametophyte', 'Usually yes', 'Gametophyte free-living', 'Prothallus free-living in homosporous ferns; retained in the spore wall in <i>Selaginella</i> and <i>Salvinia</i>', 'No (pollen grain, embryo sac)', 'No (pollen grain, embryo sac)'],
        ],
      },
      {
        t: 'table',
        title: 'Comparison Matrix 2: Algal Classes (Complete)',
        head: ['Feature', 'Chlorophyceae', 'Phaeophyceae', 'Rhodophyceae'],
        rows: [
          ['Common name', 'Green algae', 'Brown algae', 'Red algae'],
          ['Major pigments', 'Chl a, b', 'Chl a, c + <b>fucoxanthin</b>', 'Chl a, d + <b>r-phycoerythrin</b>'],
          ['Stored food', '<b>Starch</b> (around pyrenoid)', '<b>Mannitol, laminarin</b>', '<b>Floridean starch</b>'],
          ['Cell wall', 'Cellulose + pectose', 'Cellulose + algin', 'Cellulose + pectin + sulphated polysaccharides'],
          ['Flagella', '2–8, equal, apical', '2, unequal, lateral', '<b>Absent</b>'],
          ['Habitat', 'Mostly freshwater', 'Mostly marine', 'Mostly marine'],
          ['Body special structures', 'Often pyrenoid', '<b>Holdfast, stipe, frond</b>', 'Some calcareous (reef-builders)'],
          [
            'Examples',
            '<i>Chlamydomonas</i>, <i>Volvox</i>, <i>Ulothrix</i>, <i>Spirogyra</i>, <i>Chara</i>',
            '<i>Ectocarpus</i>, <i>Dictyota</i>, <i>Laminaria</i>, <i>Sargassum</i>, <i>Fucus</i>',
            '<i>Polysiphonia</i>, <i>Porphyra</i>, <i>Gracilaria</i>, <i>Gelidium</i>',
          ],
          [
            'Life cycle examples',
            'Haplontic (<i>Volvox</i>, <i>Spirogyra</i>)',
            'Diplontic (<i>Fucus</i>), Haplo-diplontic (<i>Ectocarpus</i>, <i>Laminaria</i>)',
            'Haplo-diplontic (<i>Polysiphonia</i>)',
          ],
        ],
      },
      {
        t: 'table',
        title: 'Comparison Matrix 3: Bryophytes vs Pteridophytes',
        head: ['Feature', 'Bryophytes', 'Pteridophytes'],
        rows: [
          ['Vascular tissue', '<b>Absent</b>', '<b>Present</b>'],
          ['True roots', 'Absent (rhizoids)', 'Present'],
          ['Dominant plant body', '<b>Gametophyte (n)</b>', '<b>Sporophyte (2n)</b>'],
          ['Sporophyte', 'Small, attached, dependent', 'Independent, dominant, free-living'],
          ['Gametophyte', 'Large, free-living, photosynthetic', 'Small prothallus, free-living in homosporous ferns; retained in the spore wall in <i>Selaginella</i> and <i>Salvinia</i>'],
          ['Sex organs', 'Antheridium + archegonium', 'Antheridium + archegonium'],
          ['Where meiosis occurs', 'Capsule of sporophyte', 'Sporangia on sporophylls'],
          ['Heterospory', 'No', 'Some (<i>Selaginella</i>, <i>Salvinia</i>)'],
          ['Seed formation', 'No', 'No'],
          ['Common tag', '“Amphibians of the plant kingdom”', '“First vascular land plants” / “Seedless vascular plants”'],
        ],
      },
      {
        t: 'table',
        title: 'Comparison Matrix 4: Gymnosperms vs Angiosperms',
        head: ['Feature', 'Gymnosperms', 'Angiosperms'],
        rows: [
          ['Seeds', '<b>Naked</b> (no ovary, no fruit)', '<b>Enclosed in fruit</b> (ovary develops to fruit)'],
          ['Reproductive structure', '<b>Cones (strobili)</b>: no flowers', '<b>Flowers</b>'],
          ['Fruit', 'Absent', 'Present'],
          ['Double fertilisation', '<b>Absent</b> (single fertilisation)', '<b>Present</b>'],
          ['Endosperm', '<b>Haploid (n), pre-fertilisation</b>', '<b>Triploid (3n), post-fertilisation</b>'],
          ['Female gametophyte', 'Retained in ovule; bears <b>archegonia</b>', 'Embryo sac; <b>no archegonia</b>'],
          ['Male gametophyte', 'Pollen grain (a few cells, highly reduced)', 'Pollen grain (2 or 3 cells)'],
          ['Xylem', '<b>Tracheids only (vessels absent, apart from <i>Gnetum</i>)</b>', 'Vessels usually present'],
          ['Pollinating agent', 'Mostly wind', 'Wind, insects, animals, etc.'],
          ['Endosperm origin', 'Female gametophyte (n)', 'Triple fusion product (3n)'],
          ['Examples', '<i>Cycas</i>, <i>Pinus</i>, <i>Ginkgo</i>, <i>Sequoia</i>', 'Mango, wheat, sunflower'],
        ],
      },
      {
        t: 'table',
        title: 'Comparison Matrix 5: Dicot vs Monocot (Angiosperms)',
        head: ['Feature', 'Dicotyledonae', 'Monocotyledonae'],
        rows: [
          ['Cotyledons', '<b>Two</b>', '<b>One</b>'],
          ['Leaf venation', '<b>Reticulate</b> (net-like)', '<b>Parallel</b>'],
          ['Root system', '<b>Tap root</b>', '<b>Fibrous (adventitious)</b>'],
          ['Floral parts', 'Tetramerous or pentamerous (4s or 5s)', '<b>Trimerous (3s)</b>'],
          ['Vascular bundles in stem', '<b>Arranged in a ring</b>; <b>open</b> (with cambium)', '<b>Scattered</b>; <b>closed</b> (no cambium)'],
          ['Secondary growth', 'Usually present', 'Usually absent'],
          ['Examples', 'Mango, pea, sunflower, mustard', 'Wheat, maize, rice, lily'],
        ],
      },
      {
        t: 'table',
        title: 'Comparison Matrix 6: Life Cycle Patterns (Complete)',
        head: ['Pattern', 'Dominant phase', 'Other phase', 'Where meiosis occurs', 'Examples'],
        rows: [
          [
            '<b>Haplontic</b>',
            'Gametophyte (n)',
            'Sporophyte = single-celled zygote',
            'Zygotic: the zygote divides by meiosis immediately',
            '<i>Volvox</i>, <i>Spirogyra</i>, <i>Chlamydomonas</i>',
          ],
          [
            '<b>Diplontic</b>',
            'Sporophyte (2n)',
            'Gametophyte = gametes only (or a few cells)',
            'Gametic: meiosis forms the gametes (as in <i>Fucus</i>)',
            '<i>Fucus</i>; seed plants (NCERT convention, see the Note)',
          ],
          [
            '<b>Haplo-diplontic</b>',
            'Both multicellular',
            'Both multicellular',
            'Sporic: meiosis in sporangia produces spores',
            'Bryophytes (gametophyte-dominant), pteridophytes (sporophyte-dominant), <i>Ectocarpus</i>, <i>Polysiphonia</i>, kelps',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Note:</b> NCERT places seed plants under the diplontic pattern because their gametophytes are greatly reduced. Strictly, meiosis in seed plants forms spores (microspores and megaspores), as Additional topics C and D show; only <i>Fucus</i> is a clear case of gametic meiosis.',
      },

      { t: 'part', title: 'Ten Conceptual Traps' },
      {
        t: 'p',
        html: 'These are the specific misconceptions that NEET consistently plants (the book’s estimate from past papers, not official figures), and that separate 600-markers from 300-markers.',
      },
      {
        t: 'p',
        html: '<b>Trap 1:</b> “Brown algae have no chlorophyll.” False. All algae have chlorophyll a. Brown algae have additional fucoxanthin that masks the green.',
      },
      {
        t: 'p',
        html: '<b>Trap 2:</b> “Red algae never occur in fresh water.” False. Most red algae are marine, but some live in fresh water. Habitat is a tendency, not a rule. Decide on pigment and stored food first.',
      },
      {
        t: 'p',
        html: '<b>Trap 3:</b> “The moss plant is the sporophyte.” False. The green moss/liverwort is the gametophyte. The sporophyte is the small capsule on a stalk attached to it.',
      },
      {
        t: 'p',
        html: '<b>Trap 4:</b> “Ferns are diplontic.” False. Ferns are haplo-diplontic (both generations multicellular, sporophyte dominant). Seed plants and <i>Fucus</i> (and its relatives) are diplontic.',
      },
      {
        t: 'p',
        html: '<b>Trap 5:</b> “Gymnosperm endosperm is triploid.” False. Gymnosperm endosperm is haploid (n) and forms before fertilisation (it IS the female gametophyte). Angiosperm endosperm is triploid (3n) and forms after fertilisation.',
      },
      {
        t: 'p',
        html: '<b>Trap 6:</b> “Double fertilisation occurs in gymnosperms.” False. Double fertilisation is unique to angiosperms (NCERT treats the triple fusion giving triploid endosperm as unique to angiosperms). Gymnosperms have single fertilisation.',
      },
      {
        t: 'p',
        html: '<b>Trap 7:</b> “The embryo sac is 8-celled.” False. It is 7-celled (3 + 3 + 1) but 8-nucleate (because the central cell has two polar nuclei).',
      },
      {
        t: 'p',
        html: '<b>Trap 8:</b> “Heterospory is only about spores of two sizes.” Incomplete. The deeper meaning is that the microspore gives the male gametophyte and the megaspore gives the female gametophyte, which is retained on the parent. The significance is the retention of the female generation.',
      },
      {
        t: 'p',
        html: '<b>Trap 9:</b> “Bryophytes need free water outside the plant only for photosynthesis.” False. Their gametophyte photosynthesises in air. The standing water they need is for fertilisation: the antherozoid must swim to the archegonium.',
      },
      {
        t: 'p',
        html: '<b>Trap 10:</b> “<i>Cycas</i> is a palm.” False. <i>Cycas</i> is a gymnosperm (a cycad), not an angiosperm. Its palm-like appearance is convergent evolution.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Mixed Comparison.</b> A seedless plant has vascular tissue, produces two types of spores, and the female gametophyte is retained on the parent sporophyte. To which group does it belong, and does it have flowers, fruits, and double fertilisation?',
        steps: [
          'Group: <b>Pteridophytes</b> (specifically a heterosporous pteridophyte like <i>Selaginella</i> or <i>Salvinia</i>).',
          'Flowers: <b>No</b> (cones, not flowers).',
          'Fruits: <b>No</b> (no ovary).',
          'Double fertilisation: <b>No</b> (single fertilisation; no triple fusion).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Life Cycle Identification.</b> A certain alga has a dominant, free-living haploid plant body. The diploid phase is represented by a single cell that undergoes meiosis immediately. Name the pattern and give two examples.',
        steps: [
          'Pattern: <b>Haplontic</b>.',
          'Examples: <i>Volvox</i>, <i>Spirogyra</i>, <i>Chlamydomonas</i> (most algae).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Comprehensive Comparison.</b> Prepare a comparative table of five features (vascular tissue, dominant phase, seeds, water for fertilisation, double fertilisation) across bryophytes, pteridophytes, gymnosperms, and angiosperms.',
        steps: [
          '<b>Vascular tissue:</b> Bryophytes: Absent; Pteridophytes: Present; Gymnosperms: Present; Angiosperms: Present.',
          '<b>Dominant phase:</b> Bryophytes: Gametophyte (n); Pteridophytes: Sporophyte (2n); Gymnosperms: Sporophyte (2n); Angiosperms: Sporophyte (2n).',
          '<b>Seeds:</b> Bryophytes: Absent; Pteridophytes: Absent; Gymnosperms: Naked; Angiosperms: In fruit.',
          '<b>Water for fertilisation:</b> Bryophytes: Required; Pteridophytes: Required; Gymnosperms: Not required; Angiosperms: Not required.',
          '<b>Double fertilisation:</b> Bryophytes: Absent; Pteridophytes: Absent; Gymnosperms: Absent; Angiosperms: Present.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] A plant has vessels in xylem, enclosed seeds, and double fertilisation. Name the group.',
            a: '<b>Angiosperms</b> (flowering plants).',
          },
          {
            q: '[CBSE] Distinguish between homospory and heterospory. Give one example of each.',
            a: 'Homospory: one type of spore produced; one kind of gametophyte bearing both antheridia and archegonia (e.g., <i>Dryopteris</i>). Heterospory: two types of spores (micro and mega) produced; male and female gametophytes are separate (e.g., <i>Selaginella</i>).',
          },
          {
            q: '[NEET] State two ways in which a pteridophyte differs from a gymnosperm.',
            a: '(i) Seeds: absent in pteridophytes; naked seeds in gymnosperms. (ii) Gametophytes: pteridophytes (mostly homosporous) have a free-living prothallus, whereas gymnosperms (heterosporous) keep their gametophytes within the sporophyte. (Both have xylem made of tracheids, so vascular tissue is not a point of difference.)',
          },
          {
            q: '[NEET] Why is <i>Selaginella</i> placed in pteridophytes even though it shows heterospory?',
            a: '<i>Selaginella</i> is placed in pteridophytes because it is a <b>seedless vascular plant</b> (lacks true seeds). It is heterosporous, which represents the <b>origin of the seed habit</b>, but it does not form true seeds (no seed coat from integuments, embryo not fully packaged). The heterosporous condition is a precursor to seeds, not seeds themselves.',
          },
          {
            q: '[CBSE] Draw a table comparing the three life-cycle patterns with respect to (i) dominant phase, (ii) where meiosis occurs, and (iii) one example each.',
            a: '<b>The three patterns compared:</b><br><b>Haplontic:</b> dominant phase Gametophyte (n); meiosis occurs in Zygote (zygotic meiosis); example <i>Spirogyra</i>.<br><b>Diplontic:</b> dominant phase Sporophyte (2n); meiosis occurs in Gamete mother cells (gametic meiosis, as in <i>Fucus</i>); example <i>Fucus</i>; seed plants (NCERT convention).<br><b>Haplo-diplontic:</b> dominant phase Both multicellular; meiosis occurs in Sporangia (sporic meiosis); example <i>Dryopteris</i> (sporophyte dominant).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic G · pp. 210–211 ─────────────────────────
  {
    n: 'G',
    title: 'Practice Exercise: Full Addendum Review',
    extra: true,
    kalam: 'The following questions integrate content from all six additional topics.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The following questions integrate content from all six additional topics. Attempt them under timed conditions before checking the key.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Name the type of sexual reproduction in <i>Spirogyra</i>. Are the gametes motile?',
            a: 'Conjugation; No: the gametes are non-motile (no flagella). One protoplast migrates through the conjugation tube.',
          },
          {
            q: '[NEET] In the life cycle of <i>Selaginella</i>, how many megaspores are produced from one megaspore mother cell? What does each functional megaspore develop into?',
            a: '<b>Four</b> megaspores (usually all four are functional). Each functional megaspore develops into a <b>female gametophyte</b> (bearing archegonia) retained within the megaspore wall.',
          },
          {
            q: '[NEET] State one difference between fertilisation in <i>Pinus</i> and fertilisation in an angiosperm.',
            a: 'Any one: (i) <i>Pinus</i> shows <b>single fertilisation</b> (second male cell degenerates); angiosperm shows <b>double fertilisation</b> (second male cell undergoes triple fusion). (ii) <i>Pinus</i> pollen lands directly on the nucellus; angiosperm pollen lands on the stigma. (iii) Gymnosperm endosperm is haploid (n); angiosperm endosperm is triploid (3n).',
          },
          {
            q: '[NEET] From how many mitotic divisions does the embryo sac arise from the functional megaspore?',
            a: '<b>Three</b> mitotic divisions.',
          },
          {
            q: '[CBSE] Name two economic products of red algae and two of gymnosperms.',
            a: 'Red algae: <b>agar</b> (from <i>Gracilaria</i>, <i>Gelidium</i>) and <b>carrageen</b> (from various red algae). Gymnosperms: <b>resin and turpentine</b> (from <i>Pinus</i>) and <b>sago</b> (from <i>Cycas revoluta</i>); also timber.',
          },
          {
            q: '[NEET] Which pteridophyte class does <i>Selaginella</i> belong to? Name one other member of that class.',
            a: '<i>Selaginella</i> belongs to <b>Lycopsida</b>. Another member: <i>Lycopodium</i>.',
          },
          {
            q: '[NEET] Assertion-Reason: Assertion (A): A mature typical (Polygonum-type) angiosperm embryo sac contains 8 nuclei. Reason (R): The central cell of the embryo sac contains two polar nuclei. Choose from: (a) Both A and R true, R explains A; (b) Both true, R does not explain A; (c) A true, R false; (d) A false, R true.',
            a: '<b>(b)</b>: both A and R are true, but R is not the explanation of A. The eight nuclei arise from three successive mitotic divisions of the functional megaspore nucleus (2<sup>3</sup> = 8); the two polar nuclei are two of those eight, so R is a true fact about the embryo sac but not the reason for the count.',
          },
          {
            q: '[CBSE] Distinguish between isogamy and oogamy with reference to the gametes involved.',
            a: 'Isogamy: fusion of <b>morphologically similar</b> gametes (both motile, similar size); e.g., <i>Chlamydomonas</i>. Oogamy: fusion of a large, non-motile <b>egg</b> with a small, motile <b>antherozoid</b>; e.g., <i>Fucus</i>, <i>Volvox</i>.',
          },
          {
            q: '[NEET] A sorus is found on the underside of a fern frond. What is the function of the indusium?',
            a: 'The indusium is a <b>protective flap of tissue</b> that covers the immature sporangia in the sorus, preventing desiccation and mechanical damage until the spores are mature.',
          },
          {
            q: '[NEET] Name the largest group of living gymnosperms. State any two economic uses of gymnosperms.',
            a: '<b>Conifers</b> (largest group). Any two economic uses, e.g. (i) <b>Softwood timber</b> from conifers for construction and paper pulp; (ii) <b>Resin and turpentine</b> from <i>Pinus</i>; (iii) <b>Sago</b> from <i>Cycas</i>; (iv) <b>Canada balsam</b> from <i>Abies</i>; (v) <b>Chilgoza (pine nuts)</b> from <i>Pinus gerardiana</i>.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic H (the book’s Addendum P) · pp. 211–220 ─────────────────────────
  {
    n: 'H',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'Exam-style questions on this chapter (NEET, AIPMT and NCERT-based practice sets) follow a stable pattern.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'Exam-style questions on this chapter (NEET, AIPMT and NCERT-based practice sets) follow a stable pattern. Sorting 52 of them by main topic gives the picture below; a few questions sit between two topics, so read the counts as approximate (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Questions', 'What gets asked'],
        rows: [
          ['<b>Algae</b>', '19', 'pigments, stored food, flagella, class examples, gamete types, economic products: the most-asked topic (a little over a third)'],
          ['<b>Mixed statement sets</b>', '10', '“which statements are correct” items that combine algae, bryophytes, pteridophytes, gymnosperms and angiosperms'],
          ['<b>Bryophytes</b>', '9', 'amphibian tag, protonema and leafy stage, sex organs, gemmae, succession on bare rock'],
          ['<b>Gymnosperms</b>', '4', 'naked seeds, cones, monoecious versus dioecious, <i>Cycas</i> and <i>Pinus</i> specifics'],
          ['<b>Classification systems</b>', '4', 'Linnaeus, Bentham & Hooker, the phylogenetic system, the “-taxonomies”'],
          ['<b>Pteridophytes</b>', '3', 'four classes, heterospory, <i>Selaginella</i>'],
          ['<b>Angiosperms</b>', '2', 'double fertilisation, dicot and monocot'],
          ['<b>Life cycles</b>', '1', 'haplontic pattern (life-cycle ideas also appear inside the mixed statement sets)'],
        ],
      },
      {
        t: 'p',
        html: '<b>What this means for preparation:</b> Algae dominates because three classes with distinct pigment, food and flagella columns are easy to array as MCQ distractors. Gymnosperms versus angiosperms is another frequently asked pairing because four clean contrasts (naked versus covered seed, single versus double fertilisation, haploid versus triploid endosperm, archegonia present versus absent) can be shuffled into any combination. Life-cycle questions are fewer on their own but turn up inside the mixed statement sets, usually asking which pattern an example follows, or where meiosis occurs.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      {
        t: 'p',
        html: 'Five question shapes recur in this chapter. Below is each archetype, the crack strategy, and one fully worked example.',
      },
      { t: 'p', html: '<b>Archetype 1: The Pigment/Food/Flagella Column Match</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> The stem names an alga or a class and asks for its stored food, major pigment, flagella number/position, or cell-wall composition. Alternatively it presents a feature and asks for the class.<br><b>The approach that cracks it:</b> Build the three-column table for Chlorophyceae, Phaeophyceae, and Rhodophyceae once and memorise it as a block. The most reliable discriminators are:<br>• <b>Stored food:</b> Starch → green; Mannitol/laminarin → brown; <b>Floridean starch → red</b> (most frequently tested; the book’s estimate from past papers, not official figures).<br>• <b>Flagella absent → red</b> (the only one of these three classes without flagella).<br>• <b>Fucoxanthin → brown; r-phycoerythrin → red.</b>',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which of the following correctly matches the algal class with its stored food?<br><b>(a)</b> Chlorophyceae: floridean starch<br><b>(b)</b> Phaeophyceae: mannitol and laminarin<br><b>(c)</b> Rhodophyceae: starch<br><b>(d)</b> Chlorophyceae: mannitol and laminarin',
        steps: [
          '<b>Working:</b> Scanning the table:<br>• (a) Chlorophyceae stores starch, not floridean starch → false.<br>• (b) Phaeophyceae stores mannitol and laminarin → <b>true</b>.<br>• (c) Rhodophyceae stores floridean starch, not starch → false.<br>• (d) Chlorophyceae stores starch, not mannitol/laminarin → false.',
        ],
        ans: '(b)',
      },

      { t: 'p', html: '<b>Archetype 2: The Dominant-Generation / Life-Cycle Pattern Identification</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> The stem describes a plant’s life cycle (usually by naming an organism or stating where meiosis occurs) and asks for the pattern or which generation is dominant. Occasionally it reverses the question: gives the pattern and asks for the example.<br><b>The approach that cracks it:</b> Run the two-step decision tree:<br>1. <b>Where does meiosis occur?</b> Zygotic → haplontic. Gametic → diplontic. Sporic → haplo-diplontic.<br>2. <b>If haplo-diplontic, which group?</b> Bryophytes → gametophyte dominant. Pteridophytes → sporophyte dominant. <i>Ectocarpus</i>/kelps → both multicellular (haplo-diplontic).',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'In a certain alga, the zygote is the only diploid cell and it undergoes meiosis on germination. The dominant, photosynthetic phase is the free-living gametophyte. Which life-cycle pattern is described?<br><b>(a)</b> Diplontic<br><b>(b)</b> Haplontic<br><b>(c)</b> Haplo-diplontic<br><b>(d)</b> Triphasic',
        steps: [
          '<b>Working:</b> “Zygote is the only diploid cell” + “zygote undergoes meiosis on germination” = <b>zygotic meiosis</b>. This defines the <b>haplontic</b> pattern, in which the gametophyte (n) is the dominant free-living phase. Diplontic would have sporophyte dominant with only gametes as the haploid phase. Haplo-diplontic would have both generations multicellular (not the case here).',
        ],
        ans: '(b)',
      },

      { t: 'p', html: '<b>Archetype 3: The Gymnosperm-vs-Angiosperm Contrast</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A stem presents features of a seed plant (or asks directly which group has a specific feature) and the correct answer hinges on one of four contrasts: naked vs enclosed seed, single vs double fertilisation, haploid vs triploid endosperm, archegonia present vs absent.<br><b>The approach that cracks it:</b> Run the four-fact checklist in order. The moment the stem gives you one of these four facts, the answer is locked:',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Gymnosperms', 'Angiosperms'],
        rows: [
          ['Seeds', 'Naked (no ovary)', 'Enclosed in fruit'],
          ['Fertilisation', 'Single', 'Double (syngamy + triple fusion)'],
          ['Endosperm', 'Haploid (n), pre-fertilisation', 'Triploid (3n), post-fertilisation'],
          ['Archegonia', 'Present in female gametophyte', 'Absent'],
        ],
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'A tall woody plant of cold mountainous regions bears two types of cones. Its xylem consists mainly of tracheids, and the seeds are exposed on the surface of cone scales. Which of the following is true about its reproductive process?<br><b>(a)</b> Double fertilisation occurs<br><b>(b)</b> The endosperm is triploid<br><b>(c)</b> The endosperm is haploid and forms before fertilisation<br><b>(d)</b> The female gametophyte is free-living',
        steps: [
          '<b>Working:</b> “Two types of cones” + “xylem mainly of tracheids” + “naked seeds on cone scales” = <b>gymnosperm</b> (<i>Pinus</i>/<i>Cedrus</i>). Gymnosperms show <b>single fertilisation only</b> (no double fertilisation) → (a) false. Gymnosperm endosperm is <b>haploid (n)</b>, formed from the female gametophyte <b>before</b> fertilisation → (c) is correct. (b) is the angiosperm rule (3n, post-fertilisation). (d) is false because gymnosperm female gametophytes are retained within the ovule and are not free-living.',
        ],
        ans: '(c)',
      },

      { t: 'p', html: '<b>Archetype 4: The Assertion–Reason (A–R)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two statements, A and R, followed by four options: (a) both true and R explains A; (b) both true but R does not explain A; (c) A true, R false; (d) A false, R true.<br><b>The approach that cracks it:</b> Evaluate <b>A first, independently</b>. If A is false, mark (d) and stop. Only if A is true do you evaluate R and ask whether R is the mechanistic reason for A, not merely a related fact.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Assertion (A):</b> The seeds of gymnosperms are described as naked.<br><b>Reason (R):</b> The ovules of gymnosperms are not enclosed within an ovary wall.<br><b>(a)</b> Both A and R are true and R is the correct explanation of A.<br><b>(b)</b> Both A and R are true but R is not the correct explanation of A.<br><b>(c)</b> A is true but R is false.<br><b>(d)</b> A is false but R is true.',
        steps: [
          '<b>Working:</b> A is <b>true</b>: gymnosperm seeds lie exposed on the cone scales, with no fruit around them. R is also <b>true</b>, and it is exactly why A holds: with no ovary wall around the ovule, the seed that develops from it cannot be enclosed in a fruit. R therefore correctly explains A → (a).',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>Archetype 5: The Multi-Statement “Which is/are Correct” (1-to-4 Items)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A stem lists 3–5 numbered statements and asks how many are correct, or to select the correct combination. This is the most common statement-type format in exam questions on this chapter (the book’s estimate from past papers, not official figures).<br><b>The approach that cracks it:</b> Treat each numbered statement as a True/False binary. Read only the statements relevant to your knowledge gaps; skip the ones you know cold. Watch for two specific traps:<br>• Statements about examples must match the named organism with the correct group (<i>Selaginella</i> → heterosporous, not a moss).<br>• Statements about pigments and stored food are high-error because the three-class table must be exact.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which of the following statements with respect to the major pigments and stored food in the different groups of algae are correct?<br>(i) In Chlorophyceae, the stored food material is starch and the major pigments are chlorophyll-a and b.<br>(ii) In Phaeophyceae, laminarin is the stored food and the major pigments are chlorophyll-a and b.<br>(iii) In Rhodophyceae, floridean starch is the stored food and the major pigments are chlorophyll-a, d and phycoerythrin.<br><b>(a)</b> (i) is correct, (ii) and (iii) are incorrect<br><b>(b)</b> (i) and (ii) are correct, (iii) is incorrect<br><b>(c)</b> (i) and (iii) are correct, (ii) is incorrect<br><b>(d)</b> (iii) is correct, (i) and (ii) are incorrect',
        steps: [
          '<b>Working:</b><br>• (i) Chlorophyceae: the stored food is starch and the major pigments are chlorophyll-a and b, so (i) is <b>correct</b>.<br>• (ii) Phaeophyceae: laminarin is indeed the stored food, but the major pigments are chlorophyll-a and <b>c</b> (plus fucoxanthin), not a and b, so (ii) is <b>incorrect</b>.<br>• (iii) Rhodophyceae: floridean starch is the stored food and the pigments are chlorophyll-a, d and phycoerythrin, so (iii) is <b>correct</b>.',
          'Only (i) and (iii) are correct.',
        ],
        ans: '(c)',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: 'NEET’s Plant Kingdom questions are built around five recurring confusion zones:',
      },
      {
        t: 'p',
        html: '<b>1. The stored-food swap (green ↔ brown ↔ red)</b><br>The single most-tested fact is also the most-miscopied (the book’s estimate from past papers, not official figures). Starch belongs to <b>Chlorophyceae</b>. Mannitol and laminarin belong to <b>Phaeophyceae</b>. <b>Floridean starch</b> belongs to <b>Rhodophyceae</b>. Questions routinely put the wrong food next to the right organism, banking on rote error. The chant: “GS–BM–RF” (Green Starch, Brown Mannitol/laminarin, Red Floridean).',
      },
      {
        t: 'p',
        html: '<b>2. The gametophyte/sporophyte reversal in bryophytes vs pteridophytes</b><br>In bryophytes the <b>visible green plant is the gametophyte</b> (n); the sporophyte is a small dependent capsule. In pteridophytes the <b>visible fern is the sporophyte</b> (2n); the gametophyte is a tiny prothallus. Questions test exactly this inversion: they give the correct description of one group and ask you to name the other, or they give the wrong dominant generation as a distractor.',
      },
      {
        t: 'p',
        html: '<b>3. The endosperm timing and ploidy inversion (gymnosperm vs angiosperm)</b><br>Gymnosperm endosperm = <b>haploid (n), formed before fertilisation</b> (it is the female gametophyte). Angiosperm endosperm = <b>triploid (3n), formed after fertilisation</b> (product of triple fusion). These are exact opposites on both axes. Any question asking “which is true about gymnosperm/angiosperm endosperm?” will use the opposite group’s rule as a distractor.',
      },
      {
        t: 'p',
        html: '<b>4. The “NOT” / “incorrect” filter (or lack of one)</b><br>Questions that ask “which of the following is <b>NOT</b> correct” list individually true facts as options: only one option is the specific falsehood in the stem. Students who only check whether each option is a true statement (rather than whether it answers the question) pick the wrong answer. The word “NOT” or “incorrect” must be circled before reading the options.',
      },
      {
        t: 'p',
        html: '<b>5. Ferns are not diplontic</b><br>Ferns are <b>haplo-diplontic</b> (both generations multicellular, sporophyte dominant). They are not diplontic because they have a free-living prothallus. Seed plants and <i>Fucus</i> (and its relatives) are diplontic. The distractor works because ferns look like the dominant sporophyte, tempting the student to call them diplontic.',
      },

      { t: 'part', title: 'A Graded Practice Set' },
      { t: 'p', html: 'The answers follow NCERT.' },
      {
        t: 'practice',
        items: [
          {
            q: '[Question 1: Recall (Easy)] The natural system of classification for flowering plants was given by:<br><b>(a)</b> Linnaeus<br><b>(b)</b> Bentham and Hooker<br><b>(c)</b> Engler and Prantl<br><b>(d)</b> Whittaker',
            a: '<b>Answer: (b)</b><br>Bentham and Hooker’s Genera Plantarum (1862–1883) is the most widely used natural system for flowering plants. Linnaeus proposed an artificial system; Engler and Prantl a phylogenetic system.',
          },
          {
            q: '[Question 2: Recall (Easy)] Which class of algae is mostly found in salt water?<br><b>(a)</b> Chlorophyceae<br><b>(b)</b> Phaeophyceae<br><b>(c)</b> Rhodophyceae<br><b>(d)</b> Both (b) and (c)',
            a: '<b>Answer: (d)</b><br>Phaeophyceae (brown algae) and Rhodophyceae (red algae) are both predominantly marine, so (d) is the answer. Chlorophyceae (green algae) are mostly freshwater.',
          },
          {
            q: '[Question 3: Application (Medium)] Which of the following statements about bryophytes is correct?<br><b>(a)</b> The sporophyte is the dominant, free-living phase.<br><b>(b)</b> The main plant body is haploid.<br><b>(c)</b> They possess vascular tissue.<br><b>(d)</b> They produce seeds.',
            a: '<b>Answer: (b)</b><br>In bryophytes the main plant body is the <b>haploid gametophyte</b> (n): green, photosynthetic, and free-living. The sporophyte is small, multicellular, and dependent on the gametophyte. Bryophytes are non-vascular (no xylem/phloem) and produce spores, not seeds.',
          },
          {
            q: '[Question 4: Application (Medium)] A marine alga stores food as mannitol and laminarin, has a body differentiated into holdfast, stipe, and frond, and reproduces by oogamy. It belongs to:<br><b>(a)</b> Chlorophyceae<br><b>(b)</b> Phaeophyceae<br><b>(c)</b> Rhodophyceae<br><b>(d)</b> Both (a) and (b)',
            a: '<b>Answer: (b)</b><br>Mannitol and laminarin are the stored foods of <b>Phaeophyceae</b> (brown algae). The holdfast–stipe–frond body plan is characteristic of large brown algae (kelps). Oogamy occurs in brown algae such as <i>Fucus</i>. Chlorophyceae stores starch; Rhodophyceae stores floridean starch and does not usually show the holdfast/stipe/frond organisation.',
          },
          {
            q: '[Question 5: Application (Medium)] In pteridophytes, the prothallus represents the:<br><b>(a)</b> sporophyte, which is diploid<br><b>(b)</b> gametophyte, which is haploid<br><b>(c)</b> sporophyte, which is haploid<br><b>(d)</b> gametophyte, which is diploid',
            a: '<b>Answer: (b)</b><br>The prothallus is the small, free-living, heart-shaped gametophyte (n) of a pteridophyte. It bears antheridia and archegonia on its underside. The dominant fern plant is the diploid sporophyte (2n).',
          },
          {
            q: '[Question 6: Multi-statement (Medium-Hard)] Which of the following statements are correct?<br>(i) In gymnosperms, the male and female gametophytes do not have an independent free-living existence.<br>(ii) The multicellular female gametophyte is retained within the megasporangium.<br>(iii) Gymnosperms are heterosporous.<br><b>(a)</b> Only (i) and (ii)<br><b>(b)</b> Only (ii) and (iii)<br><b>(c)</b> Only (i) and (iii)<br><b>(d)</b> All (i), (ii) and (iii)',
            a: '<b>Answer: (d)</b><br>(i) True: gymnosperm gametophytes develop within sporophyte structures (pollen grain; ovule) and are never free-living.<br>(ii) True: the female gametophyte is retained within the megasporangium (nucellus) of the ovule.<br>(iii) True: gymnosperms produce microspores and megaspores (heterosporous).<br>All three are correct.',
          },
          {
            q: '[Question 7: Assertion–Reason (Hard)] <b>Assertion (A):</b> The origin of the seed habit can be traced to heterosporous pteridophytes such as <i>Selaginella</i>.<br><b>Reason (R):</b> In these plants the megaspore is retained on the parent sporophyte, where the female gametophyte develops and the embryo is nourished.<br><b>(a)</b> Both A and R are true and R correctly explains A.<br><b>(b)</b> Both A and R are true but R does not correctly explain A.<br><b>(c)</b> A is true but R is false.<br><b>(d)</b> A is false but R is true.',
            a: '<b>Answer: (a)</b><br>A is true: heterospory with megaspore retention is the evolutionary precursor to the seed habit. R is true and states exactly the mechanism: retaining the megaspore/female gametophyte on the parent and nourishing the embryo is the seed-equivalent arrangement. R correctly explains A. The trap (picking d) comes from students who know pteridophytes bear no true seeds and misread A as claiming they do.',
          },
          {
            q: '[Question 8: Concept application (Hard)] Which of the following correctly describes the haplo-diplontic life cycle?<br><b>(a)</b> The gametophyte is always dominant.<br><b>(b)</b> The sporophyte is always dominant.<br><b>(c)</b> Both gametophyte and sporophyte are multicellular.<br><b>(d)</b> Only the zygote is diploid.',
            a: '<b>Answer: (c)</b><br>“Haplo-diplontic” means both the gametophyte and sporophyte are multicellular (sporic meiosis). Whether the gametophyte or sporophyte dominates varies by group: gametophyte dominant in bryophytes, sporophyte dominant in pteridophytes. (a) and (b) over-claim a fixed dominance; (d) describes the haplontic pattern.',
          },
          {
            q: '[Question 9: Integration (Hard)] A student states that double fertilisation occurs in gymnosperms. Which one of the following is the most precise correction?<br><b>(a)</b> Double fertilisation occurs only in angiosperms; gymnosperms show single fertilisation.<br><b>(b)</b> Double fertilisation occurs in both, but gymnosperm endosperm is triploid.<br><b>(c)</b> Double fertilisation occurs only in gymnosperms; angiosperms show single fertilisation.<br><b>(d)</b> Double fertilisation is absent in both groups.',
            a: '<b>Answer: (a)</b><br>Double fertilisation (syngamy + triple fusion) is <b>unique to angiosperms</b> (NCERT treats the triple fusion giving triploid endosperm as unique to angiosperms). Gymnosperms show a single fertilisation event (male gamete + egg → zygote). The endosperm in gymnosperms is haploid (n), formed before fertilisation from the female gametophyte: the opposite of angiosperm triploid post-fertilisation endosperm. (c) reverses both groups; (b) wrongly gives gymnosperms double fertilisation; (d) is right for gymnosperms but wrong for angiosperms.',
          },
          {
            q: '[Question 10: Higher-order (Hard)] The leaves in gymnosperms are well adapted to withstand extremes of temperature, humidity, and wind. Which feature contributes most to this adaptation?<br><b>(a)</b> Large surface area for photosynthesis<br><b>(b)</b> Needle-like shape, thick cuticle, and sunken stomata<br><b>(c)</b> Presence of stomata on both surfaces<br><b>(d)</b> Deciduous nature',
            a: '<b>Answer: (b)</b><br>Gymnosperm leaves (e.g., <i>Pinus</i> needles) are xerophytic adaptations: needle-like form reduces surface area, a thick cuticle minimises water loss, and sunken stomata reduce transpiration. Large surface area (a) and stomata on both surfaces (c) would increase water loss. Deciduous nature (d) is not the adaptation: shedding leaves does not protect them from extremes, and most conifers are evergreen.',
          },
        ],
      },
    ],
  },
];
