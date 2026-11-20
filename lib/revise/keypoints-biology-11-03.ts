/**
 * KEY POINTS for Biology Class 11, Chapter 3 (Plant Kingdom).
 *
 * Written for test mode, in the form of the Chapter 1 file: every point is a
 * question to answer in your head, then the answer and at most one more line.
 * Four kinds, each a section on the screen: Remember (two a topic), Don't mix
 * up, Common mistakes and Exam shortcuts (one each); an Additional topic has
 * two points for its central results. Memory lines are a fifth, short section
 * of their own, read rather than tested: the first two of each topic.
 *
 * `topic`: Topics 01 to 06 are 0 to 5; Additional topics A to F are 6 to 11;
 * G (Practice Exercise: Full Addendum Review) is 12 and has no points, being a
 * practice set with nothing new to remember; H (What NEET Actually Asks) is 13.
 * No point refers to another topic by number.
 *
 * Every fact is from the chapter text (the Master Reference book); the page
 * (the bottom folio) is above each point. Remember: the topic's Key terms,
 * tables and Cheat sheet. Common mistakes: its Common student pitfalls. Exam
 * shortcuts: its Pro-Tip, with a worked example or practice answer. `say`: the
 * cheat sheet's first two memory aids, word for word, in the Chapter 1 form: no
 * quotation marks and no markup (only the bold lettering of the capitals is
 * lost; the capitals themselves are kept). Each of the six topics prints two or
 * three aids; the first two are used, so the chapter has twelve lines. Additional
 * topics: the methods, worked examples, tables and practice answers; H: its
 * distribution, archetypes and traps.
 *
 * Where the book’s claim is looser or wrong, the point is true, and follows the
 * chapter text as it stands:
 * - haplontic examples: “most algae” is worded “many algae”, since the brown and
 *   red algae named beside them are haplo-diplontic or diplontic;
 * - the Pteropsida name is the book’s (now Polypodiopsida) and is not repeated;
 *   the pteridophyte point says “the first land plants with vascular tissue”,
 *   not the book’s “first true land plants” (bryophytes are land plants too);
 * - no point says that gymnosperm xylem has no vessels, that double fertilisation
 *   is found in no other group, that Cycas has “the largest sperm”, or that Cycas
 *   is “closer to pteridophytes”; the point says double fertilisation is the
 *   angiosperm event, with triple fusion making triploid endosperm;
 * - the embryo sac count (7 cells, 8 nuclei) is given for a typical mature embryo
 *   sac of the Polygonum type; pollen is given as 2-celled in most angiosperms, with
 *   the note that some (as in grasses) shed it 3-celled;
 * - diplontic: the haploid phase is the gametes alone in Fucus, which is the clear
 *   case of gametic meiosis, and a few cells in the seed plants, which NCERT also
 *   calls diplontic (sporophyte dominant) although their meiosis forms spores;
 *   ferns are haplo-diplontic, not diplontic;
 * - Spirulina is a filamentous cyanobacterium, listed with the algae in NCERT; the
 *   book’s chapter references in the economic table are not used;
 * - Spirogyra: NCERT classes it as isogamous (non-flagellated gametes of similar
 *   size); “physiological anisogamy” is given only as the further observation
 *   that one gamete behaves as male; NCERT’s anisogamy example is species of
 *   Chlamydomonas;
 * - the Selaginella male gametophyte is “retained within the microspore wall,
 *   never free-living”; oogamy is not said to be found in all animals;
 * - the book’s Archetype 4 rule “if A is false, mark (c) or (d)” is not used
 *   (only (d) is A false): the point says to check A first on its own;
 * - the book’s “one question in three” for 19 of 52 is “a little over a third”;
 *   superlatives (“the single most-tested”, “the highest-yield”) are dropped or
 *   worded “high-yield”; exam shares are the book’s estimate from past papers,
 *   not official figures, with no years;
 * - water for fertilisation is not needed from outside in the seed plants (the
 *   sperm of Cycas and Ginkgo swim in the ovule’s own fluid), and bryophytes need
 *   standing water for fertilisation, not for photosynthesis;
 * - the embryo sac points state only the cell and nucleus count and where the two
 *   polar nuclei lie; they use neither of the book’s embryo sac assertion-reason
 *   keys.
 *
 * A book title such as Genera Plantarum is plain text, not italic; scientific
 * names are in <i>, the whole binomial in one <i> (<i>Pinus gerardiana</i>),
 * names above the genus upright, and the variable n as <i>n</i>.
 *
 * Markup is the chapter’s own: <i> for scientific names and for the variable n,
 * no em dash. A value is kept with its unit, and a range with an en dash.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Classification Systems ──
  // pp. 144–146
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the three classical systems of plant classification, and what does each group on?',
    a: 'Artificial: one or a few easily seen characters, mainly gross morphology, with vegetative and sexual characters given equal weight; Linnaeus’s sexual system, based on the androecium (the number and arrangement of stamens). Natural: natural affinities, the overall resemblance across all available characters, external and internal (morphology, anatomy, embryology); Bentham and Hooker’s Genera Plantarum, the most widely used natural system for flowering plants. Phylogenetic: evolutionary relationships, common ancestry, using all characters plus evolutionary and fossil evidence; Engler and Prantl. The more characters a system uses, and the closer it tracks descent, the more natural the classification',
    why: 'The three are a progression in how much evidence they use: the artificial the least, the natural a broad body, the phylogenetic the broadest.',
    say: 'systems by deepening evidence: Artificial → Natural → Phylogenetic = few → many → ancestry.',
  },
  // pp. 144–145, 148
  {
    topic: 0,
    kind: 'remember',
    q: 'What do numerical taxonomy, cytotaxonomy and chemotaxonomy each add?',
    a: 'Three modern tools that feed extra, objective data into classification. Numerical taxonomy takes all observable characters, gives each equal weight, codes them as numbers and lets a computer process them, hundreds at once; its key advantage is objectivity, since it removes the bias of over-valuing one striking character. Cytotaxonomy uses cytological data: chromosome number, structure and behaviour, so similar chromosome number and behaviour can support a close relationship (evidence, not proof). Chemotaxonomy uses the chemical constituents of the plant (phytochemicals) as markers of kinship',
    why: 'Together they push classification from what a plant looks like toward what it is at the cellular and molecular level.',
    say: '-taxonomies: Cyto-Chromosome, Chemo-Chemical, Numerical-Numbers.',
  },
  // p. 148
  {
    topic: 0,
    kind: 'mixup',
    q: 'Linnaeus, Bentham and Hooker, Engler and Prantl: which system is whose?',
    a: 'Lock the pairs: Linnaeus is the artificial system (stamens); Bentham and Hooker the natural; Engler and Prantl the phylogenetic, based on evolutionary relationships. The three “-taxonomies” are told apart by their prefix, which names the evidence: cyto is chromosomes, chemo is chemicals, numerical is computer-coded equal-weight characters',
    why: 'The usual match: artificial with Linnaeus (androecium), natural with Bentham and Hooker, phylogenetic with evolutionary relationships.',
    say: null,
  },
  // pp. 145, 148
  {
    topic: 0,
    kind: 'mistake',
    q: 'Is an artificial system worthless, and what was the flaw in Linnaeus’s?',
    a: 'No. An artificial system is simply convenient but unnatural: fast to apply, but it can separate truly related plants and group unrelated ones (two plants alike only in stamen number could be filed together). It was a vital early step, not a useless one. The flaw in Linnaeus’s system was giving equal importance to vegetative and sexual characters, although vegetative characters are more easily modified by the environment',
    why: 'The weakness is the equal weight, not too many characters (it used too few) and not chromosome data.',
    say: null,
  },
  // pp. 146, 148
  {
    topic: 0,
    kind: 'shortcut',
    q: 'A question describes a system or a “-taxonomy”: how do you decode it fastest?',
    a: 'Decode the keyword: one or few characters means artificial; all characters or affinities, natural; evolution or ancestry, phylogenetic; chromosomes, cyto-; chemicals, chemo-; computer or equal weight, numerical. So a botanist who gives equal weight to hundreds of characters, codes each numerically and has a computer process them is using numerical taxonomy, and a system based on common ancestry is the phylogenetic one',
    why: 'If only a famous name is given, recall the basis it stands for: the stamen-based sexual system is Linnaeus’s.',
    say: null,
  },

  // ── Topic 02 · Algae ──
  // pp. 149–151, 158
  {
    topic: 1,
    kind: 'remember',
    q: 'Which stored food, pigments and cell wall go with green, brown and red algae?',
    a: 'Every alga has chlorophyll <i>a</i> and is autotrophic; the brown and red carry extra accessory pigments that mask the green and let them absorb light at depth. Green (Chlorophyceae): chlorophyll <i>a</i> and <i>b</i>, starch, inner cellulose with an outer layer of pectose, often a pyrenoid. Brown (Phaeophyceae): chlorophyll <i>a</i> and <i>c</i> with fucoxanthin, mannitol and laminarin, cellulose with algin. Red (Rhodophyceae): chlorophyll <i>a</i> and <i>d</i> with r-phycoerythrin, floridean starch, cellulose with pectin and sulphated polysaccharides',
    why: 'Stored food and pigment are the most diagnostic columns; habitat is the least, since it has too many exceptions.',
    say: 'Reserves → Green Starch, Brown Mannitol, Red Floridean (GS–BM–RF).',
  },
  // pp. 148–151, 158
  {
    topic: 1,
    kind: 'remember',
    q: 'How are algae defined, and what marks the three classes beyond pigment: flagella, body and examples?',
    a: 'Algae are chlorophyll-bearing, simple, thalloid, autotrophic and largely aquatic organisms: the body is a thallus, with no true root, stem, leaf or vascular tissue, and sizes run from single cells (<i>Chlamydomonas</i>) through colonies (<i>Volvox</i>) and filaments (<i>Spirogyra</i>, <i>Ulothrix</i>) to kelps several metres long. Green: 2–8 equal, apical flagella; <i>Chlamydomonas</i>, <i>Volvox</i>, <i>Ulothrix</i>, <i>Spirogyra</i>, <i>Chara</i>. Brown: 2 unequal, lateral flagella and a body of holdfast, stipe and frond; <i>Ectocarpus</i>, <i>Dictyota</i>, <i>Laminaria</i>, <i>Sargassum</i>, <i>Fucus</i>. Red: flagella absent, some calcareous and reef-building; <i>Polysiphonia</i>, <i>Porphyra</i>, <i>Gracilaria</i>, <i>Gelidium</i>',
    why: 'Among the three classes, flagella absent is a clean marker for the red algae.',
    say: 'Red algae = Red has Removed its flagella (flagella absent).',
  },
  // pp. 153–154, 157–158
  {
    topic: 1,
    kind: 'mixup',
    q: 'Haplontic, diplontic or haplo-diplontic: which algae follow which?',
    a: 'Ask which phase is the dominant, free-living body. Haplontic: the gametophyte (<i>n</i>) dominates, and the zygote is the only diploid cell, dividing by meiosis at once; <i>Volvox</i>, <i>Spirogyra</i>, some <i>Chlamydomonas</i> (many green algae). Diplontic: the sporophyte (2<i>n</i>) dominates and the haploid phase is reduced to the gametes alone (<i>Fucus</i>) or to a few cells (seed plants); <i>Fucus</i>, and the seed plants. Haplo-diplontic: gametophyte and sporophyte are both multicellular; <i>Ectocarpus</i>, <i>Polysiphonia</i> and the kelps (<i>Laminaria</i>). Among the brown algae, then, <i>Ectocarpus</i> and <i>Fucus</i> differ',
    why: 'Students flip haplontic and diplontic under time pressure: haploid dominant, haplontic.',
    say: null,
  },
  // pp. 149, 151, 157
  {
    topic: 1,
    kind: 'mistake',
    q: 'Do colour and habitat settle which class an alga belongs to?',
    a: 'No: the three-colour scheme is a teaching simplification. Brown algae range from olive-green to deep brown with the amount of xanthophyll, so “brownish” can fail; “green is fresh water, brown and red are marine” is a tendency, not a rule, since some red algae live in fresh water and some greens are marine. Decide on the pigment name and the stored food first, and use colour and habitat only as a tie-breaker',
    why: 'Algae are not a single natural group but an assemblage grouped for convenience, so treat the three classes as exam categories.',
    say: null,
  },
  // pp. 151, 156–157
  {
    topic: 1,
    kind: 'shortcut',
    q: 'An item asks you to identify the alga or its class: what is the fastest route?',
    a: 'Scan for a stored-food or pigment keyword first: floridean starch means red, mannitol or laminarin brown, starch (in a pyrenoid) green; fucoxanthin means brown, r-phycoerythrin red. So a marine alga that stores mannitol and laminarin, has a holdfast, stipe and frond, and reproduces oogamously is a brown alga (Phaeophyceae), and its accessory pigment is fucoxanthin: three clues, all pointing the same way',
    why: 'If the stem gives only habitat or colour, slow down: that is where the examiner planted the ambiguity.',
    say: null,
  },

  // ── Topic 03 · Bryophytes & Pteridophytes ──
  // pp. 158–160, 162–164, 167
  {
    topic: 2,
    kind: 'remember',
    q: 'How do bryophytes and pteridophytes differ in vascular tissue and in the dominant body?',
    a: 'Bryophytes (mosses, liverworts, hornworts) are the “amphibians” of the plant kingdom: a land body, but the male gametes must swim through a film of water. They have no vascular tissue, no true roots, stem or leaves (only rhizoids); the gametophyte (<i>n</i>) is the dominant, free-living, photosynthetic body, and the small sporophyte is attached to it and dependent on it. Pteridophytes are the first land plants with vascular tissue (xylem and phloem): the sporophyte (2<i>n</i>) is the dominant, independent body with true root, stem and leaf, and the gametophyte is a small, free-living prothallus. Both have antheridia and archegonia and both are haplo-diplontic',
    why: 'The status of the sporophyte settles it: dependent in bryophytes, independent in pteridophytes.',
    say: 'Dominance → Bryo Bears the gametophyte; Pterido Pushes the sporophyte.',
  },
  // pp. 160–161, 167
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the four pteridophyte classes, and what do sporophyll, microphyll and heterosporous mean?',
    a: 'Psilopsida (<i>Psilotum</i>), Lycopsida (<i>Selaginella</i>, <i>Lycopodium</i>), Sphenopsida (<i>Equisetum</i>, the horsetail) and the true ferns (<i>Dryopteris</i>, <i>Pteris</i>, <i>Adiantum</i>, the maidenhair fern). A sporophyll is a leaf that bears sporangia; microphylls are small leaves, as in <i>Selaginella</i>, macrophylls large ones, as in ferns. Homosporous plants make one kind of spore, heterosporous plants two (micro and mega): <i>Selaginella</i> and <i>Salvinia</i> are the classic heterosporous examples, and because the megaspore is retained on the parent, the origin of the seed habit is traced to them',
    why: 'Anchor on <i>Dryopteris</i>, a true fern; then “Spheno-” goes with <i>Equisetum</i> and “Lyco-” with <i>Selaginella</i>.',
    say: null,
  },
  // pp. 160, 166–167
  {
    topic: 2,
    kind: 'mixup',
    q: 'Protonema or prothallus: which belongs to the moss and which to the fern?',
    a: 'Same “pro-” prefix, opposite groups. The protonema is the creeping, green, filamentous first stage of the moss gametophyte, growing directly from a spore; the leafy stage arises later as a lateral bud on the secondary protonema and bears the sex organs. The prothallus is the small, free-living, photosynthetic gametophyte of the fern, into which a spore germinates. Either way a spore germinates into the gametophyte, never directly into the dominant sporophyte; the moss sporophyte is foot, seta and capsule',
    why: 'Liverworts, by contrast, spread asexually by gemmae, green multicellular buds borne in gemma cups.',
    say: 'Stage names → MoSS = protonema; Fern = prothallus.',
  },
  // pp. 159, 166
  {
    topic: 2,
    kind: 'mistake',
    q: 'Can “needs water for fertilisation” tell a bryophyte from a pteridophyte?',
    a: 'No: in both, the motile antherozoid must swim through water to the egg, so it is a shared trait, not a discriminator. Decide on vascular tissue or on the dominant generation instead. The biggest error is reversing the dominant generation: the green moss or liverwort body is the gametophyte, and the big leafy fern is the sporophyte',
    why: 'Independence from water for fertilisation comes only later, with the seed plants.',
    say: null,
  },
  // pp. 164–166
  {
    topic: 2,
    kind: 'shortcut',
    q: 'An item asks which group a plant belongs to: which two clues settle it?',
    a: 'Look first for vascular tissue (present means pteridophyte) and for which generation is dominant or dependent; ignore the shared traits sprinkled in as noise. A plant with a dominant, green, free-living gametophyte, a small sporophyte attached to it and nourished by it, and motile male gametes that need a film of water is a bryophyte, and meiosis occurs in the capsule of its sporophyte, producing the haploid spores',
    why: 'Needing water and producing spores are true of both groups, so they cannot decide.',
    say: null,
  },

  // ── Topic 04 · Gymnosperms ──
  // pp. 167–168, 175
  {
    topic: 3,
    kind: 'remember',
    q: 'Why are gymnosperms so named, and which plants are they?',
    a: 'Gymnos (naked) plus sperma (seed): the seeds are not enclosed in an ovary or fruit but lie exposed on the cone scales; there are cones, no flowers and no fruits. They are seed-bearing vascular plants, about 900 living species (the book’s figure; current counts run nearer 1,000), typically woody trees and shrubs with a tap root, dominant in cold, high-altitude and temperate regions. The conifers (<i>Pinus</i>, <i>Cedrus</i>) are the largest group, with the cycads (<i>Cycas</i>), <i>Ginkgo</i>, a single surviving species, and <i>Gnetum</i>: not every gymnosperm is a conifer. The dominant body is the sporophyte (2<i>n</i>), and the gametophytes are not free-living',
    why: 'Naked seeds, no fruit, is the defining feature of the whole group.',
    say: 'Gymno = naked (no fruit).',
  },
  // pp. 168–169, 172, 174–175
  {
    topic: 3,
    kind: 'remember',
    q: 'What do <i>Pinus</i> and <i>Cycas</i> each show?',
    a: '<i>Pinus</i> is a conifer, monoecious (male and female cones on one tree), with winged pollen (the “sulphur shower”) and roots with mycorrhiza (a fungus); it gives resin and turpentine, and chilgoza comes from <i>Pinus gerardiana</i>. <i>Cycas</i> is palm-like, dioecious (separate male and female plants), with coralloid roots that house nitrogen-fixing cyanobacteria, young leaves coiled like a fern’s (circinate vernation) and motile sperm, a leftover from fern-like ancestry; sago comes from <i>Cycas revoluta</i>. Canada balsam, a mounting medium for slides, comes from <i>Abies</i>, and the conifers give softwood timber',
    why: 'Do not swap the root partners: <i>Pinus</i> with a fungus, <i>Cycas</i> with cyanobacteria.',
    say: null,
  },
  // pp. 168–170, 174–175
  {
    topic: 3,
    kind: 'mixup',
    q: 'Gymnosperm or angiosperm endosperm: which is haploid and which triploid, and when does each form?',
    a: 'Exact opposites on both counts. Gymnosperm endosperm is haploid (<i>n</i>), the female gametophyte tissue, and forms before fertilisation. Angiosperm endosperm is triploid (3<i>n</i>), the product of triple fusion, and forms after fertilisation. Memorise it as a paired contrast, never singly',
    why: 'A question on the endosperm of one group nearly always offers the other group’s rule as a distractor.',
    say: 'Gymno-vs-Angio endosperm: Gymno 1n Before, Angio 3n After.',
  },
  // pp. 168, 174
  {
    topic: 3,
    kind: 'mistake',
    q: 'Do gymnosperms show double fertilisation, or make a fruit?',
    a: 'No. Gymnosperms have a single fertilisation and no fruit, because there is no ovary. Double fertilisation, in which a second male gamete fuses with the two polar nuclei (triple fusion) to make triploid endosperm, is the angiosperm event (NCERT treats the triple fusion giving triploid endosperm as unique to angiosperms). In gymnosperms pollination is by wind straight to the micropyle, with no stigma, and a pollen tube delivers the male gamete, so no external water is needed (<i>Cycas</i> sperm are still motile)',
    why: 'The female gametophyte of a gymnosperm bears archegonia, whereas the angiosperm embryo sac has none.',
    say: null,
  },
  // pp. 173–174
  {
    topic: 3,
    kind: 'shortcut',
    q: 'A gymnosperm-versus-angiosperm question: which checklist settles it?',
    a: 'Run four facts in order: seed (naked or covered), fertilisation (single or double), endosperm (<i>n</i> or 3<i>n</i>), archegonia (present or absent). Almost every such question tests exactly one of them, so find which and ignore the rest. A tall woody plant of cold regions with two kinds of cones and seeds exposed on the cone scales is a gymnosperm: no double fertilisation, and an endosperm that is haploid and formed before fertilisation',
    why: 'The last two facts, no double fertilisation and haploid endosperm, are the pair most often inverted with the angiosperms.',
    say: null,
  },

  // ── Topic 05 · Angiosperms ──
  // pp. 175–176, 183
  {
    topic: 4,
    kind: 'remember',
    q: 'What makes an angiosperm, and how do dicots and monocots differ?',
    a: 'Angio (covered) plus sperma: a flowering plant whose seeds are enclosed in a fruit, developed from the ovary of the carpel (pistil). The visible plant is the sporophyte (2<i>n</i>); the gametophytes are microscopic and never free-living, the male a pollen grain (a vegetative, or tube, cell and a generative cell that forms two male gametes), the female the embryo sac. Dicots: two cotyledons, reticulate venation, tap root, floral parts in fours or fives, vascular bundles in a ring and open (with cambium); mango, pea, sunflower, mustard. Monocots: one cotyledon, parallel venation, fibrous (adventitious) root, floral parts in threes, bundles scattered and closed (no cambium); wheat, maize, rice, lily',
    why: 'Learn the five features as a set, so a mismatched-hybrid distractor cannot catch you; they are tendencies, with exceptions.',
    say: 'Angio = covered seed (in fruit).',
  },
  // pp. 177–178, 181–183
  {
    topic: 4,
    kind: 'remember',
    q: 'What is the structure of a typical mature embryo sac, and why is it 7 cells but 8 nuclei?',
    a: 'At the micropylar end lies the egg apparatus, one egg cell and two synergids (3 cells); at the chalazal end three antipodal cells (3 cells); in the centre one large central cell holding two polar nuclei (1 cell). So 3 + 3 + 1 = 7 cells, and the six single-nucleus cells plus the two nuclei of the central cell make 8 nuclei. It is a high-yield numerical fact',
    why: 'Sketch it: egg and two synergids at one end, three antipodals at the other, one central cell with two nuclei in the middle.',
    say: 'Embryo sac: 3 + 3 + 1 = 7 cells, but 8 nuclei (centre has 2).',
  },
  // pp. 179, 182–183
  {
    topic: 4,
    kind: 'mixup',
    q: 'Syngamy or triple fusion: what does each make?',
    a: 'The pollen tube delivers two male gametes into the embryo sac. Syngamy: one male gamete fuses with the egg, giving the diploid (2<i>n</i>) zygote and then the embryo. Triple fusion: the other male gamete fuses with the two polar nuclei of the central cell, giving the triploid (3<i>n</i>) primary endosperm nucleus and then the endosperm, the embryo’s food supply. Together they are double fertilisation, and the endosperm forms after fertilisation',
    why: 'Syngamy gives 2<i>n</i> and triple fusion 3<i>n</i>: keep the products straight.',
    say: null,
  },
  // pp. 181–182
  {
    topic: 4,
    kind: 'mistake',
    q: 'Is the embryo sac 8-celled?',
    a: 'No: a typical mature embryo sac is 7-celled and 8-nucleate. The central cell is binucleate, with two polar nuclei, which is the whole reason cells and nuclei differ; never write “8 cells”',
    why: 'The 8 nuclei are the six single nuclei of the other cells plus the two polar nuclei.',
    say: null,
  },
  // pp. 180–182
  {
    topic: 4,
    kind: 'shortcut',
    q: 'What is the fastest way through an embryo-sac or fusion question?',
    a: 'Draw the quick mental picture: egg and two synergids at the micropylar end, three antipodals at the chalazal end, one central cell with two nuclei in the middle; the answer falls out of the sketch. A male gamete fusing with the two polar nuclei is triple fusion, its product is the triploid primary endosperm nucleus, and it forms the endosperm; this is the angiosperm event, whereas gymnosperm endosperm is haploid and formed before fertilisation',
    why: 'Count the cells first and the nuclei second: 7, then 8.',
    say: null,
  },

  // ── Topic 06 · Plant Life Cycles & Alternation of Generations ──
  // pp. 183–185
  {
    topic: 5,
    kind: 'remember',
    q: 'What is alternation of generations, and what links the two phases?',
    a: 'Every plant cycles between a haploid gametophyte (<i>n</i>), the gamete-producing phase, and a diploid sporophyte (2<i>n</i>), the spore-producing phase. Fertilisation takes it from haploid to diploid and meiosis from diploid back to haploid, like batons passed in a relay. The phases are defined by ploidy and function, not size, so a reduced gametophyte is still a gametophyte; what differs between groups is which phase dominates, the free-living, longer-lived body. From the algae to the angiosperms the sporophyte progressively takes over while the gametophyte shrinks',
    why: 'Meiosis happens once per cycle; where it happens separates the three patterns, with the seed plants the exception (diplontic, though their meiosis forms spores).',
    say: null,
  },
  // pp. 184–185, 187–188
  {
    topic: 5,
    kind: 'remember',
    q: 'How do you tell the three life-cycle patterns apart from where meiosis happens?',
    a: 'Zygotic meiosis is haplontic: the zygote is the only diploid cell and divides by meiosis at once, so the gametophyte dominates (<i>Volvox</i>, <i>Spirogyra</i>, some <i>Chlamydomonas</i>). Gametic meiosis is diplontic: meiosis forms the gametes, so the sporophyte dominates (<i>Fucus</i>). Seed plants are also called diplontic (sporophyte dominant) by NCERT’s convention, though in them meiosis forms spores, and the haploid phase is a few cells. Sporic meiosis is haplo-diplontic: meiosis forms spores and both phases are multicellular, the gametophyte larger in bryophytes and the sporophyte larger in pteridophytes (<i>Ectocarpus</i>, <i>Polysiphonia</i> and the kelps as well)',
    why: 'Strictly, meiosis in seed plants forms spores, and <i>Fucus</i> is the clear case of gametic meiosis.',
    say: 'meiosis site → Zygotic-haplontic, Gametic-diplontic, Sporic-haplo-diplontic (Z-G-S).',
  },
  // pp. 185–186, 188
  {
    topic: 5,
    kind: 'mixup',
    q: 'Does “haplo-diplontic” tell you which phase dominates?',
    a: 'No. Bryophytes and pteridophytes are both haplo-diplontic, yet the gametophyte dominates in the one and the sporophyte in the other; among the brown algae, <i>Ectocarpus</i> is haplo-diplontic and <i>Fucus</i> diplontic. Dominance is about the free-living, independent, longer-lived body, not merely which looks bigger in a single drawing',
    why: 'Haplo-diplontic fixes only that both phases are multicellular; the group fixes which one is larger.',
    say: 'Haplontic = Haploid runs the show; Diplontic = Diploid runs the show.',
  },
  // p. 188
  {
    topic: 5,
    kind: 'mistake',
    q: 'Are ferns diplontic?',
    a: 'No. Ferns are sporophyte-dominant but have a free-living gametophyte, the prothallus, so they are haplo-diplontic. By NCERT’s convention the diplontic plants are the seed plants, whose gametophytes are much reduced and never free-living, with <i>Fucus</i> a clear case among the algae',
    why: 'The distractor works because a fern looks like a dominant sporophyte.',
    say: null,
  },
  // pp. 186–188
  {
    topic: 5,
    kind: 'shortcut',
    q: 'A life-cycle question: which two steps answer it?',
    a: 'First, where is meiosis? That fixes the pattern, except in the seed plants, which are diplontic by NCERT’s convention although their meiosis forms spores. Second, the pattern fixes the dominant phase: haplontic the gametophyte, diplontic the sporophyte, haplo-diplontic needs the group checked. An alga whose zygote is the only diploid cell and undergoes meiosis on germination is haplontic, with the gametophyte dominant, for example <i>Spirogyra</i>',
    why: 'This two-step route beats memorising every example.',
    say: null,
  },

  // ── Additional A · Sexual Reproduction in Algae: Conjugation and Gamete Fusion Types ──
  // pp. 189–191
  {
    topic: 6,
    kind: 'remember',
    q: 'What are isogamy, anisogamy and oogamy, and which algae show each?',
    a: 'Isogamy: fusion of morphologically similar gametes, usually flagellated, between “+” and “−” mating types (a physiological, not a morphological, difference); <i>Chlamydomonas</i>, <i>Ulothrix</i>, and <i>Spirogyra</i> (non-flagellated gametes of similar size). Anisogamy: both gametes motile but unlike in size, the smaller male and the larger female; some <i>Chlamydomonas</i> species (NCERT’s example). Oogamy: a large, non-motile egg fuses with a small, motile antherozoid; <i>Volvox</i> (oospheres and antherozoids from cells of the colony, fertilisation inside it), <i>Fucus</i> (each oogonium releases eight eggs into seawater, antheridia many antherozoids), <i>Chara</i> (a flask-shaped oogonium with one egg, and an antheridium with biciliate antherozoids)',
    why: 'Anisogamy is the intermediate condition between isogamy and oogamy.',
    say: null,
  },
  // pp. 190–192
  {
    topic: 6,
    kind: 'remember',
    q: 'How does conjugation in <i>Spirogyra</i> work, and what is special about its gametes?',
    a: 'Two filaments lie parallel and opposite cells grow conjugation tubes that meet and fuse. The protoplast of each cell rounds up as a gamete, non-motile, and one moves through the tube into the opposite, receiving cell, where the two fuse to form a zygospore. The zygospore gets a thick, ornamented wall and resists desiccation while the parent filaments disintegrate; on germination its diploid nucleus undergoes meiosis, three of the four haploid nuclei degenerate and the survivor grows out as a new filament. The fusing gametes are alike in size and non-flagellated, so NCERT classes <i>Spirogyra</i> as isogamous, and “physiological anisogamy” is only the further observation that one gamete behaves as male; ladder-like tubes between side-by-side filaments make scalariform conjugation',
    why: 'No motile gamete is involved at all, which is why conjugation stands out among the fusion types.',
    say: null,
  },

  // ── Additional B · Pteridophyte Reproduction: Sori, Sporangia, and the Heterosporous Life Cycle ──
  // pp. 192, 194–195
  {
    topic: 7,
    kind: 'remember',
    q: 'What is a sorus, and how are the sporangia of a true fern arranged?',
    a: 'In true ferns (<i>Dryopteris</i>, <i>Pteris</i>, <i>Adiantum</i>) the sporangia are grouped into sori, clusters on the underside of the frond, in many ferns each covered by a protective flap, the indusium, which guards the immature sporangia against desiccation. In <i>Dryopteris</i> the sori are circular under a reniform (kidney-shaped) indusium; in <i>Adiantum</i> the sori are linear, covered by the folded-back margin of the pinnule, a false indusium. Each sporangium is a stalked capsule with an incomplete ring of thick-walled cells, the annulus, which on drying tears the capsule open at the thin-walled stomium to release the spores',
    why: 'A sorus is the site where spores are produced by meiosis.',
    say: null,
  },
  // pp. 192–195
  {
    topic: 7,
    kind: 'remember',
    q: 'Why is heterospory in <i>Selaginella</i> the precursor of the seed habit?',
    a: 'Microspores, small and many, grow into male gametophytes that are retained within the microspore wall, never free-living, each releasing many antherozoids. Megaspores are large and few, a tetrad of four from each megaspore mother cell in <i>Selaginella</i>, retained in the megasporangium on the parent sporophyte for a variable period, where the female gametophyte makes archegonia. An antherozoid still swims through a film of water to the egg, and the embryo, with a suspensor that pushes it into the gametophyte tissue, develops on the parent. This retained, provisioned embryo is the seed-habit precursor, though not a true seed: there is no seed coat from the integuments',
    why: 'Homospory differs: in <i>Dryopteris</i> one spore type gives a free-living prothallus that bears both antheridia and archegonia.',
    say: null,
  },

  // ── Additional C · Gymnosperm Reproduction: Pollination, Fertilisation, and Seed Formation ──
  // pp. 195–197
  {
    topic: 8,
    kind: 'remember',
    q: 'How do pollination and fertilisation work in <i>Pinus</i>, and why is it single fertilisation?',
    a: 'Wind carries the winged pollen (two air sacs that aid buoyancy) from the male cone to the micropyle of the ovule on the female cone; there is no stigma, style or ovary, and the pollen lands directly on the nucellus, where a pollination droplet may capture it. The pollen tube grows through the nucellus toward the female gametophyte, carrying two non-motile male cells, and discharges them into the egg cell at the archegonium. One male cell fuses with the egg nucleus to give the zygote and the second degenerates: single fertilisation, one zygote, one embryo',
    why: 'Double fertilisation is the angiosperm event of syngamy plus triple fusion, a second fusion that does not occur here.',
    say: null,
  },
  // pp. 196–198
  {
    topic: 8,
    kind: 'remember',
    q: 'How is a <i>Pinus</i> seed formed, and what does <i>Cycas</i> keep from its ancestry?',
    a: 'After fertilisation the zygote forms an embryo with a suspensor, radicle, plumule and several cotyledons; the female gametophyte (<i>n</i>) is the haploid endosperm; the integuments harden into the seed coat (2<i>n</i>); the ovuliferous scale contributes the wing. The seed is naked, exposed on the scale of the female cone. <i>Cycas</i> retains motile, multiflagellate sperm, a holdover from its fern-like ancestry: the sperm is released into the archegonial chamber and swims to the egg, whereas in <i>Pinus</i> the male cells are non-motile',
    why: 'Origins in the seed: coat 2<i>n</i> from the integuments, endosperm <i>n</i> from the female gametophyte, embryo 2<i>n</i> from the zygote.',
    say: null,
  },

  // ── Additional D · Microsporogenesis, Megasporogenesis, and Pollen Tube Growth ──
  // pp. 198–200
  {
    topic: 9,
    kind: 'remember',
    q: 'How do the pollen grain and the embryo sac arise from their mother cells?',
    a: 'Microsporogenesis: in the anther, archesporial cells give a primary parietal cell (the wall layers) and a primary sporogenous cell; these divide to sporogenous cells, each of which becomes a diploid microspore mother cell, which undergoes meiosis (through a dyad) to a tetrad of four haploid microspores. Each microspore divides once, unequally, by mitosis into a small generative cell and a large vegetative (tube) cell: the 2-celled pollen grain of most angiosperms (3-celled in some, as in grasses). Megasporogenesis: in the ovule the diploid megaspore mother cell undergoes meiosis to a linear tetrad (the monosporic, Polygonum type); the three micropylar megaspores degenerate and the chalazal one is functional; three mitotic divisions give 8 nuclei, and cellularisation gives the 7-celled, 8-nucleate embryo sac',
    why: 'Meiosis forms the microspores; mitosis forms the generative and vegetative cells.',
    say: null,
  },
  // pp. 199–201
  {
    topic: 9,
    kind: 'remember',
    q: 'What is the sequence from pollen tube entry to the zygote and the primary endosperm nucleus?',
    a: 'The pollen grain germinates on the stigma and the tube grows chemotropically, guided by chemical signals from the ovule, down the style, through the micropyle and into the embryo sac through a synergid, discharging two male gametes and the vegetative nucleus. One male gamete fuses with the egg nucleus (syngamy), giving the diploid zygote; the other fuses with the two polar nuclei (triple fusion), giving the triploid primary endosperm nucleus; the receptive synergid degenerates. The whole process is double fertilisation (NCERT treats the triple fusion giving triploid endosperm as unique to angiosperms)',
    why: 'Gymnosperms have no second fusion: their second male cell degenerates.',
    say: null,
  },

  // ── Additional E · Economic Importance: Comprehensive NCERT Coverage ──
  // pp. 201–204
  {
    topic: 10,
    kind: 'remember',
    q: 'Which products come from algae, bryophytes, pteridophytes and gymnosperms?',
    a: 'Algae: <i>Chlorella</i> (a unicellular green alga) and <i>Spirulina</i> (a filamentous cyanobacterium, listed with the algae in NCERT) as protein-rich food supplements; agar from the red algae <i>Gracilaria</i> and <i>Gelidium</i>, a culture medium for microbes and used for jellies and ice creams; carrageen from red algae; algin from brown algae, with <i>Laminaria</i> and <i>Sargassum</i> eaten as food; calcareous red algae build reefs. Bryophytes: <i>Sphagnum</i> gives peat, a fuel, and hygroscopic packing for cut flowers; mosses control soil erosion and pioneer succession on bare rock. Pteridophytes: medicine, soil-binders, ornamentals. Gymnosperms: resin and turpentine from <i>Pinus</i>, chilgoza from <i>Pinus gerardiana</i>, sago from <i>Cycas revoluta</i>, Canada balsam from <i>Abies</i>, softwood timber',
    why: 'The usual match: agar with <i>Gracilaria</i> (Rhodophyceae), algin with brown algae, peat with <i>Sphagnum</i>, resin with <i>Pinus</i>.',
    say: null,
  },
  // pp. 202–204
  {
    topic: 10,
    kind: 'remember',
    q: 'Which angiosperm products give food, fibre, drugs and spices?',
    a: 'Angiosperms contribute the most to human food: cereals (rice, wheat, maize), pulses (gram, pea), sugar from sugarcane (<i>Saccharum officinarum</i>), vegetables and fruits. Fibres: cotton (<i>Gossypium</i>), jute (<i>Corchorus</i>), flax (<i>Linum usitatissimum</i>). Drugs: quinine, an antimalarial, from <i>Cinchona</i>; morphine, an analgesic, from the poppy (<i>Papaver somniferum</i>); reserpine, an antihypertensive, from <i>Rauwolfia serpentina</i>. Also tea (<i>Camellia sinensis</i>), coffee (<i>Coffea arabica</i>) and the spices pepper (<i>Piper nigrum</i>), clove (<i>Syzygium aromaticum</i>) and cardamom (<i>Elettaria cardamomum</i>)',
    why: 'The cereals are grasses, monocots; the pulses are dicots.',
    say: null,
  },

  // ── Additional F · Comprehensive Comparison Tables and Conceptual Traps ──
  // pp. 204–205, 207
  {
    topic: 11,
    kind: 'remember',
    q: 'How do the five plant groups compare on dominant phase, vascular tissue, seeds and endosperm?',
    a: 'Dominant phase: the gametophyte in bryophytes; the sporophyte in pteridophytes, gymnosperms and angiosperms. Life cycle: bryophytes and pteridophytes haplo-diplontic, gymnosperms and angiosperms diplontic (NCERT’s convention); the algae show all three patterns. Vascular tissue: absent in algae and bryophytes, present in the other three. Seeds: absent in the first three groups, naked in gymnosperms (cones), enclosed in a fruit in angiosperms (flowers). Double fertilisation: only angiosperms. Endosperm: gymnosperms haploid and before fertilisation, angiosperms triploid and after. Water is needed for fertilisation in bryophytes and pteridophytes, not from outside in the seed plants (the motile sperm of <i>Cycas</i> and <i>Ginkgo</i> swim in the ovule’s own fluid)',
    why: 'The gametophytes of the seed plants (the pollen grain, and the female gametophyte inside the ovule, the embryo sac in angiosperms) are never free-living.',
    say: null,
  },
  // p. 208
  {
    topic: 11,
    kind: 'remember',
    q: 'Which false statements does the chapter list as conceptual traps?',
    a: 'Brown algae have no chlorophyll: false, all algae have chlorophyll <i>a</i> and fucoxanthin masks it. Red algae never occur in fresh water: false, some do, and habitat is a tendency. The moss plant is the sporophyte: false, it is the gametophyte, the sporophyte being the capsule on a stalk. Ferns are diplontic: false, haplo-diplontic. Gymnosperm endosperm is triploid: false, haploid and formed before fertilisation. Double fertilisation occurs in gymnosperms: false, they have single fertilisation. The embryo sac is 8-celled: false, 7 cells and 8 nuclei. Bryophytes need free water outside the plant only for photosynthesis: false, the gametophyte photosynthesises in air, and the standing water is for fertilisation. <i>Cycas</i> is a palm: false, a cycad and a gymnosperm. Heterospory is not only spores of two sizes: the microspore gives the male and the megaspore the female gametophyte, which is retained on the parent',
    why: 'Each trap flips one word: decide on pigment and stored food first, and on the dominant generation for the life cycles.',
    say: null,
  },

  // ── Additional H · What NEET Actually Asks ──
  // pp. 211–215
  {
    topic: 13,
    kind: 'remember',
    q: 'Which parts of the chapter does NEET ask most, and what are the five question shapes that recur?',
    a: 'The book’s estimate from past papers, not official figures, sorting 52 questions by main topic: algae 19 (a little over a third), mixed statement sets 10, bryophytes 9, gymnosperms 4, classification systems 4, pteridophytes 3, angiosperms 2, life cycles 1. The five shapes: the pigment, food and flagella column match; the life-cycle identification (where is meiosis, then which group); the gymnosperm-versus-angiosperm contrast (seed, fertilisation, endosperm, archegonia); assertion-reason (check A first on its own, then ask whether R is the reason); and the multi-statement “which are correct” item, where pigments and stored food are high-error',
    why: 'Algae lead because three classes with distinct pigment, food and flagella columns are easy to array as distractors.',
    say: null,
  },
  // pp. 216–217
  {
    topic: 13,
    kind: 'mistake',
    q: 'Which five confusion zones recur in the Plant Kingdom questions?',
    a: 'The stored-food swap (green starch, brown mannitol and laminarin, red floridean starch: GS–BM–RF). The reversal of dominance (the visible moss is the gametophyte, the visible fern the sporophyte). The endosperm inversion (gymnosperm haploid and before fertilisation, angiosperm triploid and after, with the other group’s rule used as the distractor). The “NOT” or “incorrect” filter: the options are individually true facts, so circle the negative word first. And ferns are haplo-diplontic, not diplontic, because the prothallus is free-living',
    why: 'In a stem with “NOT”, the right option is the one false statement, not the one true fact.',
    say: null,
  },
];
