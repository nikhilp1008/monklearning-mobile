/**
 * KEY POINTS for Biology Class 12, Chapter 1 (Sexual Reproduction in Flowering Plants).
 *
 * Written for test mode, in the form of the Class 11 Chapter 13 and 14 files:
 * every point is a question to answer in your head, then the answer and at
 * most one more line. Four kinds, each a section on the screen: Remember (two
 * a topic), Don't mix up, Common mistakes and Exam shortcuts (one each, where
 * the topic has them); an Additional topic has two points for its central
 * results, except the last (What NEET Actually Asks), which has one Remember
 * and one Common mistakes. Memory lines are a fifth, short section of their
 * own, read rather than tested: the first two of each topic.
 *
 * `topic`: Topics 01 to 04 are 0 to 3; Additional topics A to F are 4 to 9;
 * G (the book's What NEET Actually Asks) is 10. No point refers to another
 * topic by number.
 *
 * Every fact is from the chapter text (the Master Reference book) as it
 * stands; the page (the bottom folio) is above each point. Remember: the
 * topic's definitions, processes and Cheat sheet. Common mistakes: its Common
 * student pitfalls (or the Traps). Exam shortcuts: its Pro-Tip, with a worked
 * example or practice answer. `say`: the cheat sheet's memory aids, word for
 * word, in the Chemistry form: no quotation marks and no markup, the label
 * ("Mnemonic (embryo sac ...):") turned into the arrow form. Topics 01 to 04
 * print one aid each, so the chapter has four lines. The Additional topics have
 * none.
 *
 * Where the book's claim is looser or wrong, the point is true, and does not
 * repeat the claim:
 * - the exine "is degraded by no enzyme": the points say sporopollenin is one
 *   of the most resistant organic materials and no enzyme is known to degrade
 *   it;
 * - xenogamy "the only type bringing genetically different pollen" and
 *   cleistogamous flowers "always autogamous": xenogamy is said to bring
 *   genetically different pollen, and closed flowers to pollinate themselves,
 *   without "only" or "always";
 * - the pollen tube "reaches the ovule through the micropyle": that is the
 *   typical route (porogamy); entry through the chalaza (<i>Casuarina</i>) or
 *   the integuments (<i>Cucurbita</i>) is the rare exception the Additional
 *   topic on pollen-tube guidance names;
 * - the yucca moth "is the only creature that pollinates the yucca ... remove
 *   one and the other goes extinct", and the moth's name <i>Pronuba
 *   yuccasella</i> (now <i>Tegeticula yuccasella</i>): the points say the moth
 *   pollinates the flower and its larvae feed on some of the developing seeds,
 *   a close (obligate) partnership, with no species name;
 * - double fertilisation "found only in flowering plants, no other group":
 *   the points call it the hallmark of flowering plants and say what each
 *   fusion makes, without "only" (some gymnosperms show a second fusion that
 *   does not make endosperm);
 * - "synergids and antipodal cells degenerate after fertilization" is given as
 *   "usually degenerate"; "endosperm develops before the embryo" as usually;
 * - siphonogamy is given as delivery of the male gametes by a pollen tube,
 *   not as the angiosperm mode alone (conifers also have it);
 * - "the oldest viable seeds ... lupine", ruminate endosperm "e.g. Rubiaceae"
 *   and the tallest flower are not repeated;
 * - "parthenogenesis = an animal term": the points say parthenogenesis is an
 *   egg developing into an embryo or organism without fertilisation (the usual
 *   example is animals, such as honeybee drones; in plants the same step occurs
 *   inside some apomixis routes), kept apart from seed (apomixis) and seedless
 *   fruit (parthenocarpy);
 * - the apomixis routes "all produce diploid embryos because meiosis was
 *   skipped": the points say the embryos are diploid because they arise
 *   without meiosis (adventive embryos come from somatic cells); the vague
 *   "some grasses and ornamentals" example of apospory and the reported
 *   forty embryos in a seed (<i>Citrus unshiu</i>) are not used;
 * - "the wing (samara) of Acer and Shorea is the fruit wall": the samara is a
 *   winged fruit, and the points give <i>Acer</i> only (the wings of
 *   <i>Shorea</i> are enlarged persistent sepals);
 * - the Archetype 6 rule "anything formed from a gamete or products of
 *   meiosis = n": the points say a product of meiosis (a spore or a gamete) is
 *   n, the zygote 2n and the endosperm 3n, and that a cell before meiosis is
 *   2n;
 * - the Distribution table, "tested very frequently", "high-yield",
 *   "favourite", "dependable slot", "appear regularly", "near-certain" and "a
 *   guaranteed scoring zone" are not repeated: the What NEET Actually Asks
 *   points say the weighting is the book's estimate from past papers, not
 *   official figures, and give no counts, shares or years;
 * - Q9 of the graded set: "xenogamy is the only pollination type that brings
 *   genetically different pollen" is not repeated; self-incompatibility is
 *   said to reject pollen of the same plant, whether from the same flower or
 *   another flower of it.
 *
 * Corrected after the two reviews (2026-11-16), the chapter text now says the
 * same, and the points follow it:
 * - apomixis is defined as seed without fertilisation of the egg; "without
 *   meiosis" is said of the usual routes, and many apomicts still need pollen
 *   for the endosperm (pseudogamy);
 * - nucellar seedlings are virus-free planting stock and rootstocks, not
 *   "superior"; a Citrus seed may also hold one zygotic (non-clonal) embryo;
 * - self-incompatibility prevents self-fertilisation (the plant's own pollen
 *   cannot fertilise its ovules), not self-pollination; gametophytic SI is
 *   usually expressed in the pollen tube, with usually no dominance (Papaver
 *   rejects at the stigma);
 * - the chemoattractants named are the LURE peptides of the synergids; Ca2+ and
 *   boron support tube growth; the filiform apparatus guides the tube, and its
 *   folded wall increases the surface for absorbing nutrients (no
 *   "discharge" role);
 * - dormancy: hard-seeded legumes (Acacia, Cassia) for physical dormancy, a
 *   hot-water soak (not "hydropriming"), red light converting phytochrome to
 *   Pfr; endozoochory examples guava and tomato (a mango stone is dropped).
 *
 * Markup is the chapter's own: <i> for scientific names, the ploidy n and S
 * alleles, <sub> and <sup>, no fraction occurs, no em dash. A value is kept
 * with its unit, and a range with an en dash.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Pre-fertilisation: Structures & Events ──
  // pp. 9–11
  {
    topic: 0,
    kind: 'remember',
    q: 'How is the anther built, and how does a pollen grain form in it?',
    a: 'The anther is bilobed (dithecous) and four-sided (tetragonal): each lobe (theca) holds two microsporangia, four in all. In section a microsporangium has four wall layers, from outside in: epidermis, endothecium, middle layers and tapetum, with the sporogenous tissue at the centre. The tapetum, the innermost layer, is nutritive (dense cytoplasm, usually multinucleate) and nourishes the developing microspores. Each sporogenous cell becomes a pollen mother cell (2<i>n</i>); meiosis gives a microspore tetrad of four haploid microspores, which separate and develop into pollen grains (<i>n</i>). In most species the grain is shed at the 2-celled stage, a large vegetative cell and a small generative cell. The anther splits along its line of dehiscence to release the pollen',
    why: 'Write the wall layers as an ordered list, epidermis, endothecium, middle layers, tapetum, and use the word nutritive for the tapetum.',
    say: null,
  },
  // pp. 10–12
  {
    topic: 0,
    kind: 'remember',
    q: 'How does the embryo sac form, and what is in it at maturity?',
    a: 'In the nucellus, near the micropylar end, one cell becomes the megaspore mother cell (2<i>n</i>). Meiosis gives four haploid megaspores; three degenerate and one functional megaspore (<i>n</i>) is left, the first cell of the female gametophyte. In the common monosporic type it divides by mitosis three times (1, 2, 4, 8 nuclei), and the sac is walled into 7 cells holding 8 nuclei: the egg apparatus at the micropylar end (one egg cell and two synergids, which carry the filiform apparatus), three antipodal cells at the chalazal end, and one large central cell with two polar nuclei. Meiosis happens once, in the megaspore mother cell, and the later divisions are mitotic. The ovule is an integumented megasporangium',
    why: 'Seven cells but eight nuclei: the two polar nuclei share the central cell.',
    say: 'embryo sac 3-2-1-1 → 3 antipodals, 2 synergids, 1 egg, 1 central cell.',
  },
  // pp. 10, 13
  {
    topic: 0,
    kind: 'mixup',
    q: 'Autogamy, geitonogamy or xenogamy: which is which, and what does dioecy or monoecy prevent?',
    a: 'Autogamy is pollen reaching the stigma of the same flower (wheat, rice, pea); closed (cleistogamous) flowers such as <i>Viola</i>, <i>Commelina</i> and <i>Oxalis</i> pollinate themselves this way. Geitonogamy is pollen reaching another flower on the same plant (<i>Cucurbita</i>): functionally cross-pollination, but genetically self, because both flowers belong to one plant. Xenogamy is pollen reaching a different plant, which brings genetically different pollen (papaya). A dioecious plant (separate male and female plants) prevents both autogamy and geitonogamy; a monoecious plant, with separate male and female flowers on one plant, prevents autogamy but geitonogamy can still occur between its own flowers',
    why: 'Test the genetics: the same plant is genetically self, a different plant is genetically different.',
    say: null,
  },
  // pp. 10, 14
  {
    topic: 0,
    kind: 'mistake',
    q: 'Is sporopollenin in the exine or the intine, and what is the other layer made of?',
    a: 'Sporopollenin forms the exine, the outer wall of the pollen grain. It is one of the most resistant organic materials: it withstands high temperature, strong acids and alkalis, and no enzyme is known to degrade it, which is why pollen is preserved as fossils. The exine is broken at the germ pores, where the pollen tube later emerges. The intine, the inner wall, is a thin continuous layer of cellulose and pectin. Cellulose and pectin are real components of the pollen wall, but they belong to the intine, not the exine',
    why: 'Link ex = exterior = exceptionally tough, and in = inner = cellulose and pectin.',
    say: null,
  },
  // pp. 14–15
  {
    topic: 0,
    kind: 'shortcut',
    q: 'How do you get the ploidy of any structure in this topic without memorising each one?',
    a: 'Trace the cell back to the last meiosis. Before it, the pollen mother cell and the megaspore mother cell are 2<i>n</i>. After it, the microspore, the pollen grain, the megaspore, the embryo sac and the cells built from them by mitosis are <i>n</i>. So a pollen mother cell with 42 chromosomes gives pollen with 21, and the functional megaspore is <i>n</i> while its mother cell is 2<i>n</i>',
    why: 'This one rule answers many ploidy questions here; a cell made by fusion, such as the zygote, has its own value.',
    say: null,
  },

  // ── Topic 02 · Pollination: Agents, Pollen–Pistil Interaction & Artificial Hybridisation ──
  // pp. 16–18
  {
    topic: 1,
    kind: 'remember',
    q: 'How do wind-, water- and animal-pollinated flowers differ, and how does the yucca partnership work?',
    a: 'Wind-pollinated flowers (maize, grasses) are small, colourless, nectarless and odourless, with well-exposed stamens, light non-sticky pollen in huge numbers, large feathery stigmas and commonly a single ovule per ovary. Water pollination (hydrophily) is rare, in about 30 genera, mostly monocots such as <i>Vallisneria</i>, <i>Zostera</i> and <i>Hydrilla</i>. Animal-pollinated flowers (insects the commonest, then birds and bats) advertise with colour and scent (attractants) and pay with nectar and pollen (rewards), sometimes a safe place to lay eggs; a robber takes the reward without pollinating. The <i>Yucca</i> and its moth are a close, obligate partnership: the moth pollinates the flower and lays its eggs in the ovary, and the larvae feed on some of the developing seeds',
    why: 'Colour and scent are attractants (advertising); nectar and pollen are rewards (payment).',
    say: null,
  },
  // pp. 18–20
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the steps of artificial hybridisation, in order, and how long does pollen stay alive?',
    a: 'Select the parents; emasculate the female parent (remove the anthers from the bisexual flower bud with forceps before they dehisce); bag the flower at once with butter-paper; collect mature pollen from the male parent; dust it on the stigma when it is receptive; re-bag the flower and let the fruit develop. Pollen viability depends on temperature and humidity: in rice and wheat the pollen loses viability within about 30 minutes, while in several members of the Rosaceae, Leguminosae and Solanaceae it can stay viable for months. Pollen can be stored for years in liquid nitrogen at about −196 °C, in a pollen bank',
    why: 'Bagging before emasculation, or dusting before bagging, breaks the order.',
    say: 'hybridisation → Select, Emasculate, Bag, Dust, Re-bag: Every Bachelor Diligently Records.',
  },
  // pp. 17–18
  {
    topic: 1,
    kind: 'mixup',
    q: 'Emasculation, bagging and re-bagging: what does each do?',
    a: 'Emasculation is the removal of the anthers from a bisexual flower bud before they dehisce, so the flower cannot self-pollinate. Bagging is covering the emasculated flower with a bag (butter-paper) to prevent contamination of its stigma by unwanted pollen. Re-bagging is covering the flower again after the chosen pollen has been dusted on, so the developing fruit stays protected',
    why: 'Emasculation stops selfing; bagging stops contamination.',
    say: null,
  },
  // pp. 16–18
  {
    topic: 1,
    kind: 'mistake',
    q: 'Does pollination guarantee fertilisation, and what does the pistil do when pollen lands?',
    a: 'No. Pollination just delivers the pollen to the stigma, and the pistil then decides. Pollen–pistil interaction covers the events from pollen landing on the stigma until the pollen tube enters the ovule, and it is a recognition event. Compatible pollen is promoted: it germinates and sends a tube through the stigma and style into the ovary and, in the typical case, through the micropyle to a synergid. Incompatible pollen (the wrong species, or self-pollen in a self-incompatible plant) is inhibited or rejected. Delivery of the male gametes by a pollen tube is called siphonogamy',
    why: 'Pollination can succeed and fertilisation still fail at this recognition step.',
    say: null,
  },
  // pp. 18, 21
  {
    topic: 1,
    kind: 'shortcut',
    q: 'In a hybridisation question, how do you decide at once whether emasculation is needed?',
    a: 'Read the flower type of the female parent first. A bisexual flower has anthers, so emasculate, then bag, dust and re-bag. A unisexual female flower, as on a dioecious plant, has no anthers to remove, so skip emasculation and just bag the flower, then dust and re-bag. When a dioecious plant is the female parent, emasculation is the step that is not required, while bagging, collecting pollen and dusting still are',
    why: 'Emasculation is step 2 for a bisexual flower, so students list it by reflex.',
    say: null,
  },

  // ── Topic 03 · Double Fertilisation & Post-fertilisation ──
  // pp. 23–24
  {
    topic: 2,
    kind: 'remember',
    q: 'What happens at double fertilisation, and what is the ploidy of each product?',
    a: 'The pollen tube enters the ovule through the micropyle and discharges its two male gametes into one synergid. One male gamete fuses with the egg (syngamy) to give the zygote (2<i>n</i>). The other fuses with the two polar nuclei (triple fusion) to give the primary endosperm nucleus (3<i>n</i>), and the central cell becomes the primary endosperm cell. The synergids and antipodal cells usually degenerate afterwards. With the gamete value <i>n</i>: egg, synergid, antipodal and each male gamete are <i>n</i>, the zygote is 2<i>n</i> and the endosperm 3<i>n</i>; for 2<i>n</i> = 24 the endosperm has 36 chromosomes. Double fertilisation is the hallmark of flowering plants: the endosperm is built when an egg has been fertilised (<i>Ephedra</i> and <i>Gnetum</i> show a second fusion too, but it does not make endosperm)',
    why: 'Three nuclei fuse in triple fusion, two polar nuclei and one male gamete, so the result is triploid.',
    say: 'Triple fusion → triploid; two for the baby, three for the food.',
  },
  // pp. 24–26
  {
    topic: 2,
    kind: 'remember',
    q: 'How do the endosperm and the embryo develop?',
    a: 'The endosperm usually starts before the embryo, so food is ready. In the nuclear type, the commonest, the primary endosperm nucleus divides again and again without cell walls (free-nuclear endosperm); in the cellular type a wall forms with each division; the helobial type, mainly in monocots, is partly free-nuclear and partly cellular. In coconut the coconut water is free-nuclear endosperm and the white kernel is cellular endosperm. The zygote, at the micropylar end, divides into a proembryo. In a dicot it passes through globular and heart-shaped stages to a mature embryo with two cotyledons and an axis (epicotyl ending in the plumule, hypocotyl ending in the radicle). A monocot embryo has one cotyledon, the scutellum, with the plumule sheathed by the coleoptile and the radicle by the coleorhiza',
    why: 'Coconut water is the free-nuclear stage; the kernel is the later cellular stage.',
    say: null,
  },
  // pp. 24–25, 27–28
  {
    topic: 2,
    kind: 'mixup',
    q: 'Testa, tegmen, pericarp and perisperm: what does each come from, and what are true and false fruits?',
    a: 'In the seed, the outer integument gives the hard testa and the inner integument the papery tegmen (a bitegmic ovule; a unitegmic ovule gives a one-layered coat). The ovary wall gives the pericarp of the fruit. A persistent remnant of the nucellus is the perisperm (black pepper, beet). An albuminous seed keeps its endosperm at maturity (wheat, maize, castor); in a non-albuminous seed the embryo has used it up (pea, groundnut). A true fruit develops from the ovary alone (mango); in a false fruit other floral parts, especially the thalamus, contribute (apple, cashew, strawberry)',
    why: 'Pericarp is ovary wall and perisperm is nucellus: seed tissue and fruit tissue are different sources.',
    say: null,
  },
  // p. 28
  {
    topic: 2,
    kind: 'mistake',
    q: 'Is the endosperm diploid, and which fusion makes the zygote?',
    a: 'The endosperm is triploid (3<i>n</i>), not diploid: three nuclei fuse, two polar nuclei and one male gamete, and counting just two things fusing is the trap. Syngamy, a male gamete with the egg, gives the zygote (2<i>n</i>). Triple fusion, the second male gamete with the two polar nuclei, gives the primary endosperm nucleus (3<i>n</i>). The egg does not take part in triple fusion',
    why: 'Link tri in triple fusion to tri in triploid.',
    say: null,
  },
  // p. 28
  {
    topic: 2,
    kind: 'shortcut',
    q: 'How do you answer a ploidy question about a fertilised embryo sac quickly?',
    a: 'Write the gamete value <i>n</i> once and read the structures off the ladder: the cells of the embryo sac and the male gametes (egg, synergid, antipodal) are <i>n</i>; egg plus male gamete is 2<i>n</i>; two polar nuclei plus a male gamete is 3<i>n</i>. For 2<i>n</i> = 24, <i>n</i> = 12, the zygote is 24 and the endosperm is 12 + 12 + 12 = 36',
    why: 'You do not need to rebuild the process from the start each time.',
    say: null,
  },

  // ── Topic 04 · Apomixis & Polyembryony ──
  // pp. 30–32
  {
    topic: 3,
    kind: 'remember',
    q: 'What is apomixis, and why does the hybrid-seed industry want it?',
    a: 'Apomixis is the formation of seed without fertilisation of the egg, a form of asexual reproduction that mimics sexual reproduction; the term is Winkler’s (1908). In the usual routes the embryo sac or embryo forms without meiosis (the steps are mitotic) and no second genome enters, so the seedlings are clones of the mother with no new genetic variation. Many apomicts still need pollen to form the endosperm. It occurs in grasses (Poaceae) and Asteraceae. A hybrid that is apomictic would breed true from saved seed, so farmers could re-sow it year after year without losing hybrid vigour',
    why: 'Meiosis and fertilisation are the two steps that make variation, and the usual apomixis routes skip both.',
    say: 'Apomixis = a photocopy seed: mitosis only, mother only, no variation.',
  },
  // pp. 31–32
  {
    topic: 3,
    kind: 'remember',
    q: 'What is polyembryony, and why do nucellar embryos matter in <i>Citrus</i>?',
    a: 'Polyembryony is more than one embryo in a single seed (<i>Citrus</i>, <i>Mangifera</i>, onion, groundnut); the book credits Leeuwenhoek (1719) with first reporting it in a citrus seed. In nucellar embryony, diploid maternal cells of the nucellus divide, push into the embryo sac and develop into embryos that are clones of the mother. Nucellar seedlings breed true to type, tend to be virus-free and keep their vigour, so they are valued as true-to-type planting stock and rootstocks',
    why: 'The nucellus is maternal and diploid, which is why its embryos are clones.',
    say: null,
  },
  // pp. 30, 32
  {
    topic: 3,
    kind: 'mixup',
    q: 'Apomixis, parthenocarpy or parthenogenesis: which is which?',
    a: 'Apomixis gives a seed, with an embryo, without fertilisation. Parthenocarpy gives a seedless fruit without fertilisation (banana; it can be induced with growth hormones). Parthenogenesis is an egg developing into an embryo or organism without fertilisation (the usual example is animals, such as honeybee drones; in plants the same step occurs inside some apomixis routes); keep it apart from the two plant terms, which are about a seed and a fruit',
    why: 'Seed without fertilisation, apomixis; seedless fruit without fertilisation, parthenocarpy.',
    say: null,
  },
  // pp. 34–35
  {
    topic: 3,
    kind: 'mistake',
    q: 'Does apomixis involve meiosis and syngamy, and does it create variation?',
    a: 'No. In the usual routes apomixis skips both meiosis and syngamy, and that is why the offspring are clones. So the statement that apomictic offspring are identical to the parent is true, while the reason that apomixis involves meiosis followed by syngamy is false. It adds no variation, so an option linking apomixis or nucellar polyembryony with variation is wrong. Nucellar embryos come from diploid maternal nucellar tissue, not from the egg. An apomictic embryo sac can look normal yet hold diploid cells, the sign that meiosis was skipped',
    why: 'Read the Reason separately: it states the opposite of what apomixis does.',
    say: null,
  },
  // pp. 35
  {
    topic: 3,
    kind: 'shortcut',
    q: 'How do you sort the terms of this topic quickly?',
    a: 'Tag each term clonal or sexual. Clonal: apomixis, nucellar and adventive embryony, vegetative reproduction (no variation, diploid, maternal). Sexual: syngamy and a normal embryo sac (variation, meiosis involved). So among parthenogenesis, nucellar polyembryony, vegetative reproduction and sexual reproduction, the one that generates new genetic combinations is sexual reproduction',
    why: 'Many questions here just ask which box a term belongs in.',
    say: null,
  },

  // ── Additional A · Seed Dormancy: Types, Hormonal Mechanism, and Breaking Methods ──
  // pp. 37–40
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the types of seed dormancy, and how is each broken?',
    a: 'By the cause of the block. Physical dormancy: a hard, impermeable seed coat that stops water and gas entry (found in many legumes, for example <i>Acacia</i>, <i>Cassia</i> and the hard seeds of some <i>Vigna</i> and <i>Canavalia</i> species); broken by scarification, mechanical (nicking or sanding the coat) or chemical (concentrated H<sub>2</sub>SO<sub>4</sub>); a hot-water soak (pre-soaking in warm water) is classed separately. Physiological dormancy: internal inhibitors, mainly ABA, with a high ABA:GA ratio (apple seeds, peach stones; a chilling requirement is a form of it); broken by stratification (cold, moist, 0–5 °C for weeks), GA<sub>3</sub> or afterripening. Morphological dormancy: an immature embryo that needs time to finish growing (<i>Ginkgo biloba</i>, some orchids). Combined dormancy has both a barrier and inhibitors. Lettuce seeds that need light respond to red light, which converts phytochrome to its active Pfr form',
    why: 'Name the cause of the block first and the treatment follows.',
    say: null,
  },
  // pp. 38–40
  {
    topic: 4,
    kind: 'remember',
    q: 'How do ABA and GA switch germination off and on in a cereal grain?',
    a: 'In a dry seed high ABA keeps dormancy. After water uptake the embryo makes gibberellin (GA), which diffuses to the aleurone layer and switches on the genes for alpha-amylase and other hydrolytic enzymes. Alpha-amylase breaks the stored starch of the endosperm into sugars, which feed the embryo until the radicle protrudes. ABA blocks GA signalling at the aleurone and so prevents alpha-amylase gene expression. A high GA:ABA ratio promotes germination and a high ABA:GA ratio maintains dormancy. In afterripening, dry storage lowers ABA and raises sensitivity to GA, so freshly harvested wheat germinates poorly and after-ripened wheat readily',
    why: 'GA acts on the aleurone layer and ABA antagonises it.',
    say: null,
  },

  // ── Additional B · Self-Incompatibility: Genetic Systems and Mechanisms ──
  // pp. 41–43
  {
    topic: 5,
    kind: 'remember',
    q: 'What does self-incompatibility do, and how do the gametophytic and sporophytic types differ?',
    a: 'Self-incompatibility is a genetic block: the pistil recognises and rejects pollen carrying the same <i>S</i>-allele as its own, so genetically different pollen effects fertilisation, and it acts at the pollen–pistil stage. A species has several <i>S</i>-alleles at one locus, and a heterozygous <i>S</i><sub>1</sub><i>S</i><sub>2</sub> plant makes half <i>S</i><sub>1</sub> and half <i>S</i><sub>2</sub> pollen. In gametophytic SI the pollen’s own <i>S</i>-allele decides, it is usually expressed in the pollen tube in the style (in <i>Papaver</i>, at the stigma), the alleles usually show no dominance and a heterozygote makes two kinds of compatible pollen (Solanaceae such as tobacco and <i>Petunia</i>, and <i>Papaver</i>). In sporophytic SI the diploid <i>S</i>-alleles of the anther parent decide, through proteins the tapetum puts on the pollen surface, it is expressed at the stigma, the alleles can show dominance and a heterozygote may make one functional type (Brassicaceae such as <i>Brassica</i> and <i>Raphanus</i>)',
    why: 'Gametophytic: the pollen grain’s own genotype; sporophytic: the genotype of the plant that made the pollen.',
    say: null,
  },
  // pp. 42–44
  {
    topic: 5,
    kind: 'remember',
    q: 'How does S-RNase work, and how do you predict which pollen can pollinate?',
    a: 'In gametophytic SI the style makes S-RNase from its <i>S</i>-alleles. If the pollen tube’s <i>S</i>-allele matches either allele of the style, the S-RNase enters the tube and degrades its RNA, so growth stops; if it matches neither, the tube grows. Worked case: female <i>S</i><sub>1</sub><i>S</i><sub>2</sub>, male <i>S</i><sub>1</sub><i>S</i><sub>3</sub>. The male makes half <i>S</i><sub>1</sub> and half <i>S</i><sub>3</sub> pollen; <i>S</i><sub>1</sub> matches the female and is rejected, <i>S</i><sub>3</sub> matches neither and works, so 50% of the male’s pollen can fertilise. In sporophytic SI with <i>S</i><sub>1</sub> dominant over <i>S</i><sub>2</sub>, an <i>S</i><sub>1</sub><i>S</i><sub>2</sub> plant’s pollen carries the <i>S</i><sub>1</sub> coat, so it works on an <i>S</i><sub>2</sub><i>S</i><sub>3</sub> stigma but is rejected on an <i>S</i><sub>1</sub><i>S</i><sub>3</sub> stigma',
    why: 'Compare the pollen’s allele with both alleles of the style.',
    say: null,
  },

  // ── Additional C · Pollen Tube Guidance: Chemotropism and the Guidance Pathway ──
  // pp. 44–45
  {
    topic: 6,
    kind: 'remember',
    q: 'What is the path of the pollen tube, and what guides it?',
    a: 'The tube grows from the stigma through the transmitting tissue of the style, into the ovarian cavity (locule), to the micropyle of the ovule, then between the synergids, guided by the filiform apparatus, into one synergid, where it discharges the two male gametes. Growth is chemotropic: chemicals diffusing from the ovule and the synergids make a concentration gradient and the tube grows up it. The best-established attractants are small peptides (LURE peptides) secreted by the synergids; Ca<sup>2+</sup> and boron support pollen germination and tube growth',
    why: 'Write the order: stigma, style, locule, micropyle, synergid.',
    say: null,
  },
  // pp. 45–46
  {
    topic: 6,
    kind: 'remember',
    q: 'What does the filiform apparatus do, and why does the tube usually enter by the micropyle?',
    a: 'The filiform apparatus is the specialised wall thickening at the micropylar tip of the synergids. It guides the pollen tube into the synergid; its folded wall also increases the surface for absorbing nutrients into the synergid. The synergids, with the apparatus, sit at the micropylar end and attract the tube, and the micropyle is the pre-formed opening, so entry through the micropyle (porogamy) is the typical case. Entry through the chalaza (chalazogamy, <i>Casuarina</i>) or through the integuments (mesogamy, <i>Cucurbita</i>) is a rare exception',
    why: 'The chalazal end holds the antipodal cells and gives no guidance signal.',
    say: null,
  },

  // ── Additional D · Fruit and Seed Dispersal: Mechanisms and Adaptations ──
  // pp. 46–48
  {
    topic: 7,
    kind: 'remember',
    q: 'What are the four dispersal mechanisms, and what is an example of each?',
    a: 'Anemochory (wind): light seeds or fruits with wings, a pappus or feathery hairs (<i>Sonchus</i> and <i>Taraxacum</i> with a pappus; <i>Acer</i> with winged samaras). Hydrochory (water): buoyant seeds or fruits with a waterproof covering, fibrous husk or air spaces (coconut, <i>Cocos nucifera</i>). Zoochory (animals): endozoochory, a fleshy fruit eaten and the seeds excreted (guava, tomato; a mango stone is usually dropped after the pulp is eaten), and epizoochory, hooks or spines that catch on fur or feathers (<i>Xanthium</i>, <i>Bidens</i>). Autochory (the plant itself): explosive or squirting fruits (<i>Ruellia</i>, <i>Ecballium</i>). Dispersal keeps seedlings from competing with the parent and lets the species colonise new habitats',
    why: 'Name the agent first: wind, water, animal or the plant itself.',
    say: null,
  },
  // pp. 47–49
  {
    topic: 7,
    kind: 'remember',
    q: 'Which structure matches which dispersal mechanism, and how do endozoochory and epizoochory differ?',
    a: 'A samara (<i>Acer</i>) is a winged fruit, a flat light extension of the fruit wall, for wind. A pappus is a crown of bristles on an achene that acts as a parachute (<i>Sonchus</i>, <i>Taraxacum</i>, Asteraceae). The coconut’s fibrous mesocarp traps air and gives buoyancy. Hooked spines (<i>Xanthium</i>) catch in animal fur. A fleshy edible pericarp feeds animals whose digestive tract the seeds survive. Endozoochory is dispersal inside the animal after the fruit is eaten; epizoochory is dispersal on the outside, clinging to fur, feathers or skin. The edible thalamus of a false fruit (apple, strawberry) also attracts animals, so zoochory works for true and false fruits alike. <i>Ruellia</i> capsules burst explosively, and the squirting cucumber <i>Ecballium</i> pressurises its fruit and squirts the seeds out',
    why: 'Endo means inside the animal, epi means on its outside.',
    say: null,
  },

  // ── Additional E · Apomixis: Full Classification and Distinguishing Routes ──
  // pp. 49–50
  {
    topic: 8,
    kind: 'remember',
    q: 'What are the three routes to apomictic seeds, and how do you identify each from a description?',
    a: 'Diplospory: the megaspore mother cell skips meiosis and becomes a diploid embryo sac by mitosis, and its diploid egg develops into an embryo without fertilisation (<i>Taraxacum</i>). Apospory: a somatic cell of the nucellus (or integument) forms an extra diploid embryo sac, so one ovule can hold two sacs. Adventive embryony: embryos bud directly from diploid nucellar or integumentary cells with no embryo sac stage (<i>Citrus</i>, mango, <i>Opuntia</i>). To identify: the megaspore mother cell bypassing meiosis points to diplospory; a somatic cell forming a sac points to apospory; embryos budding directly with no sac point to adventive embryony. Match: diplospory with the diploid sac from the mother cell, apospory with the extra sac from a cell outside the sac, adventive embryony with the direct embryo',
    why: 'Ask whether a sac forms, and from which cell.',
    say: null,
  },
  // pp. 50–52
  {
    topic: 8,
    kind: 'remember',
    q: 'Why are apomictic seedlings clones, and where does nucellar embryony fit?',
    a: 'The embryos arise without meiosis (no reduction, no crossing over) and without fertilisation of the egg (no second genome), by mitosis, so each carries the mother’s diploid genome. Nucellar embryony is the commonest and best-known form of adventive embryony: diploid nucellar cells bud into embryos with no embryo sac stage, so in <i>Citrus</i> several clonal embryos can form in one seed (apomictic polyembryony; the seed may also hold one zygotic embryo, which is not a clone). In the rare non-recurrent apomixis a haploid egg develops without fertilisation and gives a haploid plant, which does not breed true',
    why: 'Diploid because they arise without meiosis; identical because no second genome is added.',
    say: null,
  },

  // ── Additional F · Quick Reference Summary: Additional Topics ──
  // pp. 52–53
  {
    topic: 9,
    kind: 'remember',
    q: 'What is the one-screen summary of dormancy, self-incompatibility and pollen-tube guidance?',
    a: 'Dormancy: physical (hard coat, scarification; <i>Acacia</i>, <i>Cassia</i>), physiological (internal ABA block; stratification, GA<sub>3</sub>, afterripening; apple seeds), morphological (immature embryo, time; <i>Ginkgo</i>); ABA inhibits, GA promotes, and a high GA:ABA ratio means germination. Self-incompatibility prevents self-fertilisation genetically and promotes outcrossing: gametophytic (the pollen’s own <i>S</i>-allele, S-RNase, Solanaceae) and sporophytic (the anther parent’s <i>S</i>-alleles, dominance possible, Brassicaceae); in gametophytic SI a heterozygous plant makes two functional pollen types. Pollen tube: stigma, style (transmitting tissue), locule, micropyle, synergid (guided by the filiform apparatus), gamete discharge, following a chemical gradient from the synergids',
    why: 'Each line names the cause or the allele that decides, then the example.',
    say: null,
  },
  // p. 53
  {
    topic: 9,
    kind: 'remember',
    q: 'What is the one-screen summary of dispersal and the apomixis routes?',
    a: 'Anemochory (wind): wings, pappus, light seeds (<i>Sonchus</i>, <i>Acer</i>). Hydrochory (water): buoyant, fibrous husk (coconut). Zoochory: endozoochory (fleshy fruit, guava) and epizoochory (hooks and spines, <i>Xanthium</i>). Autochory (self, explosive): <i>Ruellia</i>, <i>Ecballium</i>. Diplospory: the mother cell skips meiosis and gives a diploid sac, a diploid egg, an embryo (<i>Taraxacum</i>). Apospory: a somatic cell forms an extra diploid sac. Adventive embryony: somatic cells bud directly into an embryo with no sac stage (<i>Citrus</i> nucellar embryony, mango). Key: the three routes skip meiosis and fertilisation of the egg → diploid clone of the mother',
    why: 'Say the agent for dispersal, and say whether a sac forms for apomixis.',
    say: null,
  },

  // ── Additional G · What NEET Actually Asks ──
  // pp. 54–57, 59, 62
  {
    topic: 10,
    kind: 'remember',
    q: 'How should you use the book’s weighting of this chapter, and which question shapes return?',
    a: 'The weighting is the book’s estimate from past papers, not official figures: it spreads the questions across the four topics and a mixed group of statement bundles, assertion–reason and matching, and is a guide to what to revise first, not a count. Six shapes are described. Direct recall: use the exact NCERT term. Statement bundle: mark each statement true or false before looking at the combinations. Assertion–reason: judge A and R separately, then check that R explains A. Match the column: find the defining feature that fits one entry. Diagram identification: anther layers from outside in are epidermis, endothecium, middle layers, tapetum, sporogenous tissue, and the egg apparatus is at the micropylar end. Ploidy trace: a cell before meiosis is 2<i>n</i>, a product of meiosis (spore or gamete) is <i>n</i>, the zygote is 2<i>n</i> and the endosperm 3<i>n</i>, so for 2<i>n</i> = 24 the endosperm is 12 + 12 + 12 = 36',
    why: 'Treat the weighting as a guide to what to revise first, not as a count of past questions.',
    say: null,
  },
  // pp. 57–58, 60–62
  {
    topic: 10,
    kind: 'mistake',
    q: 'Which wrong options keep recurring in this chapter?',
    a: 'The book’s estimate from past papers, not official figures. Swapping exine and intine: sporopollenin is the outer exine, cellulose and pectin the inner intine. Mixing geitonogamy (pollen to another flower of the same plant) with autogamy (the same flower). Saying apomixis involves meiosis: in the usual routes it skips meiosis and syngamy. Emasculating a unisexual female flower: emasculation applies to bisexual flowers. Calling the endosperm diploid: it is 3<i>n</i>. Putting the egg apparatus at the chalazal end: it is micropylar and the antipodal cells are chalazal. Naming water hyacinth and water lily as water-pollinated: they are insect-pollinated (they can be wind-pollinated too), and <i>Vallisneria</i>, <i>Zostera</i> and <i>Hydrilla</i> are the examples of hydrophily. Calling chasmogamous flowers cross-pollinated: they open and can self or cross, while cleistogamous flowers stay closed and self-pollinate. Believing self-incompatibility blocks just autogamy: it also rejects pollen from another flower of the same plant',
    why: 'These are the swaps examiners build distractors on: check the term, the end of the sac and the type of pollination before choosing.',
    say: null,
  },
];
