/**
 * KEY POINTS for Biology Class 12, Chapter 6 (Evolution).
 *
 * Written for test mode, in the form of Biology 11 Chapters 13 and 14: every
 * point is a question to answer in your head, then the answer and at most one
 * more line. Four kinds, each a section on the screen: Remember (two a topic),
 * Don't mix up, Common mistakes and Exam shortcuts (one each, where the topic
 * has them); an Additional topic has two points for its central results, except
 * the last (What NEET Actually Asks), which has one Remember and one Common
 * mistakes. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01 to 04 are 0 to 3; Additional topics A to C are 4 to 6; D
 * (the book's What NEET Actually Asks) is 7. No point refers to another topic
 * by number.
 *
 * Every fact is from the chapter text (the Master Reference book) as it
 * stands; the page (the bottom folio) is above each point. `say`: the cheat
 * sheet's memory aids, word for word, in the Chemistry form: no quotation marks
 * and no markup, the label turned into the arrow form. Topics 01 to 04 each
 * print three aids and use the first two (the third, a one-line homology aid in
 * Topic 01, the plant mnemonic in Topic 04, and the third aid of Topic 02, are
 * not used); the Additional topics have none. In Topic 02 the aid on the
 * recessive phenotype stands on the Hardy–Weinberg derivation point and the
 * aid on the disturbing factors on the conditions and factors point.
 *
 * Where the book's claim is looser or wrong, the point is true, and does not
 * repeat the claim:
 * - homology "proves" common ancestry (pp. 297, 304): said to indicate it, and
 *   analogy is said to show similar environment, not ancestry;
 * - the human–chimpanzee DNA difference "about 1.8%": given as the book's
 *   figure, with the note that the value depends on how differences are
 *   counted;
 * - Earth "~4.6 bya", RNA "~3 bya", first cells "~2000 mya", jawless fishes
 *   and amphibians both "~350 mya", dinosaur extinction "~65 mya": no
 *   chronology of chemical evolution is given; the dinosaur date is the
 *   book's with about 66 noted; the timeline points say the order is what is
 *   tested, and that the earliest cells and jawless fishes are older than the
 *   book's values;
 * - hominin dates: the book's table values are given as the book's, with NCERT's
 *   about 2 mya for Australopithecus noted; "first bipedal", "first
 *   tool-maker" and "probably did not eat meat" are not used (an early
 *   bipedal hominin; a tool-maker); the Neanderthal "left no living
 *   descendants" is not used, and the brain-capacity ladder is said to rise
 *   broadly, with Neanderthal (1400 cc) and Homo sapiens (1350 to 1600 cc)
 *   overlapping, not "monotonically";
 * - Ramapithecus is kept in the exam order with the chapter's own caveat that
 *   modern work places it near the orangutan line;
 * - the primate tree: only the order of branching of gibbon, orangutan,
 *   gorilla and chimpanzee is given; the book's "tree shrews, lemurs and
 *   tarsiers branch off earliest" is not repeated (tree shrews are not
 *   primates, and lemurs and tarsiers are not one early branch);
 * - "reptiles (the dinosaurs) to mammals" against "mammals did not evolve from
 *   dinosaurs": the points say mammals came from mammal-like reptiles (pelycosaurs,
 *   then therapsids) and coexisted with the dinosaurs, and that birds arose
 *   from a reptilian line;
 * - "never skips a station, never runs backwards": the sequence is said to be
 *   the order in which groups first appear, with the return of some lineages to
 *   water (ichthyosaurs, whales, dolphins) noted;
 * - anthropogenic resistance is said to act mostly on variants already
 *   present, with new mutations and gained resistance genes also contributing;
 * - angiosperms are given as dominant in the Cenozoic and first appearing late
 *   in the Mesozoic, not as belonging to "the later Cenozoic"; "being
 *   viviparous" is not used as a mammalian advantage;
 * - mutation is called the source of new alleles, not "the ultimate origin of
 *   all variation"; recombination is said to reshuffle alleles without by
 *   itself changing allele frequencies, though NCERT lists it as a factor;
 * - the Modern Synthesis "(1942)" is given as the date of Huxley's book, with
 *   the synthesis built over the 1930s and 1940s;
 * - "the heterozygote frequency is always 2pq": said to hold at equilibrium;
 * - Additional A, example 2: the heterozygote frequency alone gives two roots
 *   and cannot say which allele is recessive, so the "smaller value" is given
 *   as an assumption that must be stated (the rarer allele), as practice 3
 *   states it; example 1's conclusion is given as a departure from equilibrium
 *   with a heterozygote deficit, not as selection or drift on the recessive
 *   phenotype, and a chi-square test (about 10.3, 1 degree of freedom) is added
 *   as the formal check;
 * - Additional B: the book's own note that NCERT does not classify speciation
 *   as allopatric or sympatric is kept; "both result in reproductive
 *   isolation, which is the definition of speciation" is said as the
 *   biological species test;
 * - Additional C: the rate convention of the 8% and 0.5% practice (16 mya for
 *   the pair, 8 mya if the rate is per lineage); cytochrome-C "most commonly
 *   used" is not repeated;
 * - wings: a bat's and a bird's wing are homologous as forelimbs, so the analogy
 *   example is the insect's wing with the bird's (or bat's); birds and mammals
 *   both arise from reptiles and are not ordered with each other; non-random
 *   mating disturbs genotype frequencies, and a gap from the expected counts can
 *   also be chance in a small sample;
 * - Additional B: geographic isolation is the barrier, not a reproductive
 *   isolating mechanism; hybrid inviability includes a hybrid that dies before
 *   maturity; Additional C: the human and chimpanzee DNA figure is about 1.2 to
 *   1.8% by how differences are counted, and the rate is that of the pair
 *   diverging;
 * - Additional D: the strict form of Haeckel's law is rejected (von Baer), not
 *   the whole of embryology; no exam share, count, year or "every cycle" is repeated; the
 *   distribution is the book's estimate from past papers; "function is always
 *   the distractor" is not used.
 *
 * Markup is the chapter's own: <i> for scientific names, the alleles A and a,
 * the genotypes AA, Aa, aa and the variables p, q and N, <sub> and <sup>,
 * <frac> for a fraction, no em dash. A value is kept with its unit, and a range
 * with an en dash.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Origin of Life & Evidences ──
  // pp. 297–300
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the order of chemical evolution, and what did Miller and Urey show?',
    a: 'It is a staircase of gradual steps, each setting the stage for the next: a reducing atmosphere (CH<sub>4</sub>, NH<sub>3</sub>, H<sub>2</sub> and water vapour, with no free oxygen) and energy from UV, lightning and heat; inorganic molecules to organic monomers (amino acids, sugars, nitrogen bases); monomers to polymers (proteins and nucleic acids); polymers to protobionts (coacervates, membrane-bounded droplets that are not yet alive); then the first cells, thought to be non-green anaerobic chemoheterotrophs. In 1953 Stanley Miller, in Harold Urey’s lab, sparked CH<sub>4</sub>, NH<sub>3</sub>, H<sub>2</sub> and water vapour in a closed glass apparatus, and after a week the condensate held amino acids and other organic monomers. This supports the Oparin–Haldane theory: the first chemical step can happen, and it gave building blocks, not a living cell',
    why: 'Put the stages in order by size and organisation: small, large, assembled, alive. An option with protobionts before polymers is wrong.',
    say: 'origin staircase → Monomers, Polymers, Protobionts, Cells = Mo-Po-Pro-Ce.',
  },
  // pp. 298, 301–302
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the five classes of evidence for evolution, and what does each show?',
    a: 'Palaeontological (fossils: older strata hold older, simpler forms, so life has changed over geological time); biogeographical (related species track continental history, as in Wegener’s continental drift and the distinctive Australian fauna); morphological and comparative anatomy (shared body plans, homologous and vestigial organs); embryological (early development shows relatedness); molecular (the more alike the genetic material, the closer the relationship; the book gives human and chimpanzee DNA as differing in about 1.8% of bases, and the figure depends on how differences are counted). One class could be a coincidence, and the agreement of all five is what makes the case strong',
    why: 'Match the example to the class: a sequence comparison is molecular, strata are palaeontological, Pangaea is biogeographical.',
    say: 'evidence classes → F-B-A-E-M (Fossils, Biogeography, Anatomy, Embryology, Molecular).',
  },
  // pp. 296–297, 299, 302
  {
    topic: 0,
    kind: 'mixup',
    q: 'Pasteur, Oparin and Haldane, Miller and Urey, Wegener: who did what?',
    a: 'Pasteur (swan-necked flasks) disproved spontaneous generation and supports biogenesis: life today comes from pre-existing life. Oparin and Haldane proposed the theory of chemical evolution: the first life formed gradually from non-living organic molecules on the early Earth. Miller and Urey did the experiment: sparking a reducing gas mixture gave amino acids. Wegener proposed continental drift (Pangaea), which is biogeographical evidence. Biogenesis answers how life arises now and chemical evolution answers how the first life arose, so the two do not contradict each other',
    why: 'In a match-the-column item, anchor Pasteur and Wegener first, then split the theory-makers (Oparin and Haldane) from the experimenters (Miller and Urey).',
    say: null,
  },
  // pp. 297, 302, 304
  {
    topic: 0,
    kind: 'mistake',
    q: 'Is “ontogeny recapitulates phylogeny” valid, and what does embryology really show?',
    a: 'No. Haeckel’s recapitulation, that an embryo repeats the adult stages of its ancestors, is not accepted. Karl Ernst von Baer showed that embryos resemble the embryos of related forms, not their adults. Embryology is still evidence: the early embryos of fish, tortoise, chick and human are strikingly alike. So “embryological similarities are valid evidence for evolution” is true, and “because the embryo repeats the adult stages of its ancestors” is a false reason',
    why: 'In an assertion–reason item judge A and R separately: here A is true and R is false.',
    say: null,
  },
  // pp. 298, 304
  {
    topic: 0,
    kind: 'shortcut',
    q: 'How do you tell homologous from analogous organs in three seconds?',
    a: 'Ask one question: is the underlying structure the same? If yes, the organs are homologous, whatever they do (divergent evolution, which indicates common ancestry): forelimbs of human, bat, whale and horse, and the thorn of <i>Bougainvillea</i> with the tendril of <i>Cucurbita</i>. If the structure differs but the function matches, they are analogous (convergent evolution, from a similar environment, not shared ancestry): wings of insect and bird (or insect and bat; a bat’s and a bird’s wing are homologous as forelimbs), eyes of octopus and mammals, and sweet potato (a root) with potato (a stem). Adaptive radiation from one ancestral stock, as in Darwin’s finches and the Australian marsupials, produces homologous structures',
    why: 'The function is the decoy and the structure is the clue; do not reverse homology and analogy.',
    say: null,
  },

  // ── Topic 02 · Theories of Evolution & the Hardy–Weinberg Principle ──
  // pp. 310–312
  {
    topic: 1,
    kind: 'remember',
    q: 'How is the Hardy–Weinberg equation derived, and how do you use it from the recessive phenotype?',
    a: 'With two alleles, <i>A</i> (frequency <i>p</i>) and <i>a</i> (frequency <i>q</i>), <i>p</i> + <i>q</i> = 1 for alleles. Gametes carry the alleles in these proportions and random mating multiplies them: <i>AA</i> = <i>p</i><sup>2</sup>, <i>Aa</i> = 2<i>pq</i> (it forms two ways, <i>A</i>-sperm with <i>a</i>-egg or the reverse) and <i>aa</i> = <i>q</i><sup>2</sup>, so (<i>p</i> + <i>q</i>)<sup>2</sup> = <i>p</i><sup>2</sup> + 2<i>pq</i> + <i>q</i><sup>2</sup> = 1 for genotypes. The entry point is that the recessive phenotype fraction is <i>q</i><sup>2</sup>. In 10000 people with 400 affected, <i>q</i><sup>2</sup> = <frac><num>400</num><den>10000</den></frac> = 0.04, <i>q</i> = 0.2 and <i>p</i> = 0.8, carriers are 2<i>pq</i> = 0.32, which is 3200 people, and 6400 + 3200 + 400 = 10000',
    why: 'Frequencies have no units, and the check is that the three genotype frequencies sum to 1 before you commit to an option.',
    say: 'recessive phenotype → q² = the recessive phenotype fraction, root it first.',
  },
  // pp. 310–311
  {
    topic: 1,
    kind: 'remember',
    q: 'Which five conditions keep a population in Hardy–Weinberg equilibrium, and which five factors disturb it?',
    a: 'Conditions: a large population (so drift is negligible), random mating, no mutation, no gene flow and no natural selection. Each factor switches one of them off: gene flow (migration), genetic drift (the founder effect and the bottleneck effect are special cases, strongest in small populations), mutation (a slow source of new alleles), genetic recombination (crossing over shuffles alleles; strictly it makes new combinations and does not by itself change allele frequencies, though NCERT lists it) and natural selection (non-random survival and reproduction). Equilibrium is a baseline: a gap between the observed genotype frequencies and <i>p</i><sup>2</sup> : 2<i>pq</i> : <i>q</i><sup>2</sup> suggests that one of these forces (or chance, in a small sample) is acting, and a large gap suggests a stronger effect',
    why: 'Random mating is a condition for equilibrium, so non-random mating is what disturbs the genotype frequencies.',
    say: 'disturbing factors → Genes Drift, Mutate, Recombine, get Selected (Gene flow, Drift, Mutation, Recombination, Selection).',
  },
  // pp. 308–309
  {
    topic: 1,
    kind: 'mixup',
    q: 'Stabilising, directional or disruptive: what does each favour, and what happens to the curve?',
    a: 'Stabilising selection favours the average and removes both extremes, so the peak gets taller and narrower (human birth weight clustering near a mean). Directional selection favours one extreme and the peak shifts toward it (darker peppered moths in soot-darkened cities). Disruptive selection favours both extremes and removes the average, so the curve splits into two peaks (the book’s example is bill sizes splitting where the seeds are either large or small). The figure’s three panels show the population before selection, after it and the part removed by selection',
    why: 'Read the shape: one taller narrower peak is stabilising, one shifted peak is directional and two peaks is disruptive.',
    say: null,
  },
  // p. 313
  {
    topic: 1,
    kind: 'mistake',
    q: 'Which Hardy–Weinberg slips cost marks?',
    a: 'Using <i>p</i> + <i>q</i> = 1 for genotypes or the squared equation for alleles (the first is for alleles, the second for genotypes); using the recessive fraction as <i>q</i> and skipping the square root, when it is <i>q</i><sup>2</sup>; dropping the 2 in 2<i>pq</i>, since the heterozygote forms two ways; counting the <i>A</i> alleles from counts as <i>AA</i> + <i>Aa</i> instead of 2 × <i>AA</i> + <i>Aa</i> (300, 500 and 200 in 1000 plants give <i>p</i> = <frac><num>2(300) + 500</num><den>2(1000)</den></frac> = 0.55, so the expected 302.5, 495 and 202.5 are close to the observed and the population is near equilibrium); and listing random mating as a disturbing factor. Lamarck was right that use and disuse change the body and wrong that the change is inherited',
    why: 'Label each number as an allele or a genotype frequency as you write it; the heterozygote frequency is 2<i>pq</i> when the population is at equilibrium.',
    say: null,
  },
  // pp. 306–308, 314
  {
    topic: 1,
    kind: 'shortcut',
    q: 'How do you tell Lamarck, Darwin, de Vries and the Modern Synthesis apart in one line each?',
    a: 'Lamarck (1809): use and disuse of organs, with acquired characters inherited (a giraffe stretches its neck and the longer neck is passed on); wrong on inheritance, since Weismann’s germplasm theory says the germ cells carry the next generation while changes to body cells do not pass on, and mouse tails cut for 22 generations gave no tail-less young. Darwin and Wallace (1859): natural selection of small heritable variations, with branching descent and natural selection as Darwin’s two key ideas; fitness is reproductive success, the number of offspring, not strength. De Vries (1901): sudden large mutations, saltation, from his work on the evening primrose <i>Oenothera</i>. Modern Synthetic Theory: natural selection plus genetics, with variation from mutation and recombination (the book dates it to Huxley, 1942, the date of his book; the synthesis was built over the 1930s and 1940s)',
    why: 'Keywords: use and disuse is Lamarck, natural selection is Darwin, saltation is de Vries, selection plus genetics is the synthesis.',
    say: null,
  },

  // ── Topic 03 · Origin & Evolution of Man ──
  // pp. 316–317
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the order of the hominins, and what are their brain capacities?',
    a: '<i>Dryopithecus</i> and <i>Ramapithecus</i> (about 15 mya, ape-sized brain), then <i>Australopithecus</i> (the book gives about 3–4 mya, brain about 400–500 cc, an early bipedal “ape-man”), <i>Homo habilis</i> (about 2 mya, 650–800 cc, a tool-maker, the “handy man”), <i>Homo erectus</i> (about 1.5 mya, about 900 cc, used fire, Java man and Peking man), Neanderthal (100,000–40,000 years ago, 1400 cc, hides and burial of the dead, now extinct), then Cro-Magnon and <i>Homo sapiens</i> (the book gives about 75,000 years, about 1350–1600 cc, cave art, language and agriculture about 10,000 years ago). The exam order is <i>Ramapithecus</i>, <i>Australopithecus</i>, <i>H. habilis</i>, <i>H. erectus</i>; modern work places <i>Ramapithecus</i> near the orangutan line, and NCERT gives about 2 mya for <i>Australopithecus</i>, so the order matters more than the dates',
    why: 'Brain size rises broadly along this order, which helps check a sequence, but Neanderthal (1400 cc) and <i>Homo sapiens</i> (1350–1600 cc) overlap.',
    say: 'order → Ape-men Handle Erect Nights, Create Societies = Australopithecus, Habilis, Erectus, Neanderthal, Cro-magnon, Sapiens.',
  },
  // pp. 315, 317–318
  {
    topic: 2,
    kind: 'remember',
    q: 'Which trends marked human evolution, in what order, and how are humans and chimpanzees related?',
    a: 'Upright walking (bipedalism) came first and freed the hands; free hands allowed carrying and tool-making; brain size climbed from roughly 400 cc to about 1400–1600 cc; a larger brain with free hands allowed tools, fire, language and culture. Standing upright needed a remodelled skeleton: an S-shaped spine, a broad bowl-shaped pelvis, angled knees and a forward-shifted foramen magnum. Modern <i>Homo sapiens</i> arose in Africa and spread across the continents, and cave art and agriculture came late. Chimpanzees are our closest living relatives, not our ancestors: the human and chimpanzee lines diverged from a last common ancestor, and in the book’s tree gibbon and orangutan branch off, then gorilla, then chimpanzee. The success of man is put down to cranial capacity, language and self-consciousness, not to strength',
    why: 'The hands were freed before the brain grew, so bipedalism is the first step and a precondition for the rest.',
    say: 'success of man → Brain, Language, Self beats brawn.',
  },
  // pp. 316, 320, 322
  {
    topic: 2,
    kind: 'mixup',
    q: 'Tools, fire, hides and burial, cave art: which hominin goes with which fact?',
    a: 'Tools: <i>Homo habilis</i>, the “handy man”. Fire and meat-eating: <i>Homo erectus</i>. Hides to cover the body and burial of the dead: Neanderthal man. Cave art, language and agriculture: <i>Homo sapiens</i> (Cro-Magnon is known for cave paintings, and India’s Bhimbetka rock shelters preserve famous examples). Upright walking with a small brain: <i>Australopithecus</i>. Each wrong option in such an item is a fact attached to the wrong species',
    why: 'Learn one tag per species; a swapped tag is the usual trap.',
    say: null,
  },
  // pp. 315, 322
  {
    topic: 2,
    kind: 'mistake',
    q: 'Did humans evolve from chimpanzees, and does the hominin list run in a single line?',
    a: 'No. Humans and chimpanzees are cousins with a common ancestor, and neither came from the other; being a close relative is not descent. The hominin sequence simplifies a branching tree: several species overlapped in time and some lines ended. Do not place <i>Homo habilis</i> before <i>Australopithecus</i>, because the ape-men are older than the genus <i>Homo</i> (about 400 cc against 650–800 cc). Brain-capacity figures are ranges, used to order species and not to be quoted as exact',
    why: 'An assertion “humans did not evolve from chimpanzees” with the reason “both diverged from a common ancestor” has the reason as the correct explanation.',
    say: null,
  },
  // pp. 317, 322
  {
    topic: 2,
    kind: 'shortcut',
    q: 'How can brain capacity help you with a sequence question?',
    a: 'Along the list the species order and the brain capacity run broadly together: <i>Australopithecus</i> about 400 cc, <i>H. habilis</i> about 700, <i>H. erectus</i> about 900, Neanderthal 1400 and Cro-Magnon about 1600. An option that puts a larger-brained species before a smaller-brained one among these is wrong, and the same ladder answers which listed species had the largest or smallest brain. Do not use it to separate Neanderthal from <i>Homo sapiens</i>, whose ranges overlap',
    why: 'Anchor the order to the ladder when you forget it, and check the answer against the table.',
    say: null,
  },

  // ── Topic 04 · A Brief Account of Evolution ──
  // pp. 324–325
  {
    topic: 3,
    kind: 'remember',
    q: 'What is the order of life on Earth, and why does it run from water to land?',
    a: 'First cellular life, then multicellular life, invertebrates, jawless fishes, then lobefins (stout-finned fishes such as <i>Latimeria</i>, the coelacanth, a living fossil rediscovered in 1938) moving onto land to give amphibians, then reptiles (thick-shelled eggs free them from water), and then birds and mammals, which both arise from reptiles (mammals appear first in the fossil record, but exams do not order the two). Birds arose from reptiles, with <i>Archaeopteryx</i> as the connecting link. Plants reached land before animals, since the land had to be greened first. The book dates the invertebrates to about 500 mya and the dinosaurs to about 200–65 mya; its dates for the first cells (about 2000 mya) and for the fishes (about 350 mya) are rough, and the earliest cells and jawless fishes are older, so learn the order and not these numbers',
    why: 'The order of groups is what the sequence questions test: aquatic before terrestrial, invertebrates before fishes.',
    say: 'order of groups → In Fresh Air Reptiles Breathe Mostly = Invertebrates, Fishes, Amphibians, Reptiles, Birds, Mammals (birds and mammals both arise from reptiles; mammals appear first in the fossil record, but exams do not order them).',
  },
  // pp. 324, 326
  {
    topic: 3,
    kind: 'remember',
    q: 'What dominated each geological era, and what is the order of plant evolution?',
    a: 'Palaeozoic (“ancient life”): marine invertebrates, then fishes, amphibians and early reptiles, with ferns (pteridophytes), whose buried forests of the Carboniferous became coal. Mesozoic (“age of reptiles”): dinosaurs, with the first birds and mammals, and gymnosperms (conifers, cycads). Cenozoic (“age of mammals”): mammals, birds and the rise of humans, and angiosperms (flowering plants); its epochs from oldest are Palaeocene, Eocene, Oligocene, Miocene, Pliocene, Pleistocene and Holocene (the present). Plants climbed towards independence from water: algae, bryophytes (still need water for fertilisation), pteridophytes (the first vascular plants), gymnosperms (naked seeds), angiosperms (enclosed seeds, flowers and fruits). Angiosperms are dominant in the Cenozoic although they first appear late in the Mesozoic',
    why: 'Learn each era as a triplet of plants, animals and nickname.',
    say: 'eras → Pay Money Cash = Palaeozoic → Mesozoic → Cenozoic.',
  },
  // pp. 323, 325, 329–330
  {
    topic: 3,
    kind: 'mixup',
    q: 'Dinosaurs, mammals and birds: which came from which?',
    a: 'Mammals did not evolve from dinosaurs. They came from mammal-like reptiles (pelycosaurs, then therapsids), lived as small shrew-like animals beside the dinosaurs, and radiated into the vacant niches after the dinosaurs disappeared, about 65 million years ago in the book (recent work gives about 66). Birds arose from a reptilian line, with <i>Archaeopteryx</i> (reptilian teeth and tail, with feathers and wings) as the link. So “mammals diversified rapidly after the dinosaurs” is true and “because they evolved from the dinosaurs” is a false reason',
    why: 'Coexisting is not descending: it is the same error as saying humans came from chimpanzees.',
    say: null,
  },
  // pp. 324, 326–328, 330
  {
    topic: 3,
    kind: 'mistake',
    q: 'Does a pesticide, an antibiotic or soot create resistance or dark moths on demand?',
    a: 'No. Anthropogenic evolution is natural selection under a pressure that humans create, and it acts mostly on variants already present at low frequency. DDT, an antibiotic or a herbicide removes the susceptible individuals and spares resistant ones, which multiply (new mutations and, in bacteria, gained resistance genes can also contribute). In industrial melanism in the peppered moth (<i>Biston betularia</i>) soot darkened the bark, the dark form was camouflaged and the pale form was eaten, so the dark form became common within decades. The pressure, predation, stayed the same, and the environment changed which variant it favoured. Mutations are random; selection is what has a direction',
    why: 'An option that says the organism learned resistance, or that DDT induced the mutations, is the Lamarckian error.',
    say: null,
  },
  // pp. 323, 330
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Which two rules help you sort a sequence question?',
    a: 'Aquatic before terrestrial, and invertebrates, fishes, amphibians, reptiles, then birds and mammals (the last two are not ordered); plants also reach land before animals. Eliminate an option that breaks either rule and the answer follows without exact dates: among invertebrates, jawless fishes, amphibians and reptiles the order is that one. These rules give the order in which groups first appear. Some lineages later returned to water (ichthyosaurs, whales, dolphins), and older groups persisted beside newer ones',
    why: 'Use the rules for the order of appearance, not to claim that one group vanished when the next arose.',
    say: null,
  },

  // ── Additional A · Hardy–Weinberg Algebra: Solving for p, q, and Testing Equilibrium ──
  // pp. 331–333
  {
    topic: 4,
    kind: 'remember',
    q: 'How do you get <i>p</i> and <i>q</i> from genotype counts and test for equilibrium?',
    a: 'With <i>N</i> individuals there are 2<i>N</i> alleles. Count <i>A</i> as 2 × (<i>AA</i>) + (<i>Aa</i>) and <i>a</i> as (<i>Aa</i>) + 2 × (<i>aa</i>), so <i>p</i> = <frac><num>2(<i>AA</i>) + (<i>Aa</i>)</num><den>2<i>N</i></den></frac> and <i>q</i> = 1 − <i>p</i>. The expected counts are <i>p</i><sup>2</sup><i>N</i>, 2<i>pqN</i> and <i>q</i><sup>2</sup><i>N</i>, compared with the observed. For 180, 210 and 110 in 500, <i>A</i> = 570 and <i>a</i> = 430, so <i>p</i> = 0.57 and <i>q</i> = 0.43, and the expected counts are 162.45, 245.10 and 92.45; the observed differ, with fewer heterozygotes and more of both homozygotes than expected, which points to non-random mating or population structure among other causes (a chi-square test, 1.90 + 5.03 + 3.33 = 10.26, is above the 3.84 needed at 1 degree of freedom). For 490, 420 and 90 in 1000, <i>p</i> = 0.70 and the expected counts equal the observed, so no force is detected at this locus',
    why: 'Count each heterozygote as one <i>A</i> and one <i>a</i>, and check that the two allele totals add to 2<i>N</i>.',
    say: null,
  },
  // pp. 332–334
  {
    topic: 4,
    kind: 'remember',
    q: 'How do you find <i>p</i> and <i>q</i> from the dominant count, or from the heterozygote frequency?',
    a: 'From the dominant count: recessive count = <i>N</i> − (<i>AA</i> + <i>Aa</i>), so <i>q</i><sup>2</sup> = <frac><num><i>N</i> − (<i>AA</i> + <i>Aa</i>)</num><den><i>N</i></den></frac>, then <i>q</i> is the square root of <i>q</i><sup>2</sup> and <i>p</i> = 1 − <i>q</i>. With 640 dominant in 1000, the recessive count is 360, <i>q</i><sup>2</sup> = 0.36, <i>q</i> = 0.6, <i>p</i> = 0.4 and carriers are 2(0.4)(0.6) = 0.48, which is 480. From a heterozygote frequency <i>h</i>, 2<i>q</i>(1 − <i>q</i>) = <i>h</i> is a quadratic whose two roots add to 1: <i>h</i> = 0.42 gives <i>q</i> = 0.3 or 0.7, and <i>h</i> = 0.36 gives <i>q</i> of about 0.24 or 0.76',
    why: 'A heterozygote frequency cannot say which allele is the recessive one, so the question must state it, for example that the recessive allele is the rarer, to give one answer.',
    say: null,
  },

  // ── Additional B · Speciation: Modes and Isolating Mechanisms ──
  // pp. 334–336, 338
  {
    topic: 5,
    kind: 'remember',
    q: 'What are allopatric and sympatric speciation, and what must follow isolation?',
    a: 'Allopatric speciation: a physical barrier (a mountain range, ocean, river, glacier, or a drying stream) splits a population, each part meets its own selection pressures, and given time the groups become reproductively isolated and do not interbreed even if the barrier is removed. Sympatric speciation: no physical separation; isolation arises in one area through ecological (habitat preference) isolation, polyploidy (chromosome doubling, in plants) or behavioural isolation. Geographic isolation is the barrier, not yet a reproductive isolating mechanism, and it alone is not enough: the groups must also diverge genetically, by mutation, selection and drift, until reproductive isolation evolves, or they can merge back into one gene pool. Darwin’s finches are a commonly cited example of isolated island populations diverging; the book notes that NCERT itself does not sort speciation into these two modes and uses the finches and the Australian marsupials as examples of adaptive radiation',
    why: 'Ask whether a physical barrier began the split: yes is allopatric, no is sympatric.',
    say: null,
  },
  // pp. 335, 337–338
  {
    topic: 5,
    kind: 'remember',
    q: 'Which isolating mechanisms act before fertilisation, and which after?',
    a: 'Pre-zygotic (prevent fertilisation): habitat isolation (different habitats, such as <i>Rana</i> frogs in ponds against streams), temporal isolation (different breeding seasons or times), behavioural isolation (different calls or courtship, such as firefly flashes), mechanical isolation (a structural mismatch, such as flower shape and pollinator) and gametic isolation (sperm and egg incompatible, as in sea urchins). Post-zygotic (fertilisation occurs but the hybrid fails): hybrid inviability (the hybrid zygote or embryo does not develop, or the hybrid dies before maturity), hybrid sterility (a viable hybrid that cannot reproduce, as the mule from horse and donkey) and hybrid breakdown (the F<sub>1</sub> is viable but the F<sub>2</sub> or a backcross fails). Pre-zygotic barriers spare the population wasted gametes, and post-zygotic ones are the backup; both give the reproductive isolation that marks separate species on the biological species concept',
    why: 'Different breeding times are temporal isolation, not behavioural; a sterile mule is post-zygotic because it acts after fertilisation.',
    say: null,
  },

  // ── Additional C · Molecular Evolution and the Molecular Clock ──
  // pp. 338–339
  {
    topic: 6,
    kind: 'remember',
    q: 'What is the molecular clock, and how is a divergence time calculated?',
    a: 'Neutral mutations, which do not affect fitness, accumulate at a roughly constant rate, so the number of sequence differences between homologous DNA or proteins measures the time since the last common ancestor: divergence time = <frac><num>number of sequence differences</num><den>rate of divergence per million years</den></frac>, where the rate is that of the two sequences diverging from each other (both lineages together). The rate is calibrated from a split dated by fossils: rate = <frac><num><i>D</i></num><den><i>T</i></den></frac>. For 15 differences over 20 mya the rate for the pair is 0.75 per million years, so a pair with 30 differences diverged <frac><num>30</num><den>0.75</den></frac> = 40 mya. Cytochrome-C is a classic protein: human and chimpanzee cytochrome-C are identical, and human and rhesus monkey cytochrome-C differ in one amino acid',
    why: 'The clock is approximate, not exact, and an estimate is only as good as its calibration.',
    say: null,
  },
  // pp. 339–340
  {
    topic: 6,
    kind: 'remember',
    q: 'What does the clock assume, why can its dates disagree with fossils, and which rate convention matters?',
    a: 'It assumes that most mutations are neutral, that the rate stayed roughly constant, and that the two lineages evolved independently after splitting. Disagreement with fossil dates can come from calibration error (the oldest fossil need not mark the true split), rate variation (generation time, DNA repair, selection) and incomplete lineage sorting (different genes can split at different times). For 8% divergence at 0.5% per million years the time is <frac><num>8</num><den>0.5</den></frac> = 16 mya if 0.5% is the rate for the pair’s total difference, as the book works it; if 0.5% is the rate in each lineage, the two together add 2 × 0.5% per million years and the time is 8 mya. Most DNA differences are neutral, which is why a small DNA difference (about 1.8% for human and chimpanzee in the book, and about 1.2 to 1.8% depending on how differences are counted) sits beside large differences in appearance',
    why: 'State whether a rate is for the pair or for each lineage before you divide.',
    say: null,
  },

  // ── Additional D · What NEET Actually Asks ──
  // pp. 341–346
  {
    topic: 7,
    kind: 'remember',
    q: 'Which question shapes does the book say come back, and how do you crack each?',
    a: 'The weighting and the shapes are the book’s estimate from past papers, not official figures. Six shapes. Miller–Urey recall: a reducing atmosphere of CH<sub>4</sub>, NH<sub>3</sub>, H<sub>2</sub> and water vapour, amino acids as the product, support for Oparin–Haldane, and no living cell. Homology against analogy: ask whether the structure is the same (the <i>Bougainvillea</i> thorn and <i>Cucurbita</i> tendril are homologous, octopus and monkey eyes are convergent and analogous). Hardy–Weinberg numerical: the recessive fraction is <i>q</i><sup>2</sup>, take the root, <i>p</i> = 1 − <i>q</i>, and 2<i>pq</i> for the heterozygotes (<i>p</i> = 0.7 gives 0.42, <i>p</i> = 0.6 gives 0.48), checking that the three sum to 1. Assertion–reason: judge A, then R, then ask whether R explains A. Match the column: anchor the sure pairs (Darwin and <i>On the Origin of Species</i>, Lamarck and <i>Philosophie Zoologique</i>, de Vries and mutation theory, Haeckel and the biogenetic law, Weismann and germplasm theory). Diagram: the Miller apparatus (electrodes, boiling-water ocean, condenser, U-trap) and the selection graphs, where a taller narrower peak is stabilising',
    why: 'Use the weighting to decide what to revise first, not as a count of past questions.',
    say: null,
  },
  // pp. 345–349
  {
    topic: 7,
    kind: 'mistake',
    q: 'Which wrong options keep recurring in this chapter?',
    a: 'The book’s estimate, not official figures. Miller “made living cells”: he made amino acids. Haeckel’s recapitulation as the reason for embryological evidence: its strict form is rejected, and von Baer’s point stands. Forelimbs of whale, bat and horse called analogous: they are homologous. <i>Homo habilis</i> before <i>Australopithecus</i>: the ape-men are older. The recessive fraction used as <i>q</i> without a square root, or the heterozygote given as <i>pq</i> instead of 2<i>pq</i>. Random mating listed as a disturbing factor: it is a condition for equilibrium. Industrial melanism as acquired inheritance: selection acted on variants already present. “Survival of the fittest” credited to Darwin: Herbert Spencer introduced the phrase, in <i>Principles of Biology</i> (1864). Mammals from dinosaurs: they came from mammal-like reptiles and coexisted with the dinosaurs',
    why: 'Read what the option actually says: each wrong option attaches a real-sounding statement to the wrong species, theory or step.',
    say: null,
  },
];
