import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 11, Organisms and Populations: Topic 04 and Additional topics A to C, word for
 * word from the Class 12 Biology Master Reference (pp. 625–641).
 *
 * Topic 04 Population Interactions, pp. 625–631 (Figure 11.6: caption p. 628, drawing p. 629, set at
 * the end of Key mechanisms and coevolutionary dynamics where the book's caption stands). The shared
 * opening of "Additional Topics: Organisms and Populations" (p. 632) heads Additional topic A's
 * Introduction. A Solving Population-Growth Equations, pp. 632–635; B Population Regulation,
 * pp. 636–638 (begins at the top of p. 636, its answers end mid-p. 638); C Ecological Niche, Gause's
 * Principle, and Resource Partitioning, pp. 638–641 (begins low on p. 638, its answers end at the top
 * of p. 641, where Addendum D begins).
 *
 * House rules: no em dashes (each is a colon, commas, a bracket or a full stop), no fraction on one
 * line (the only slashes kept are inside a subscript), variables italic with real sub/superscripts,
 * scientific names italic. This book prints options (a) to (d), kept as printed. "Addendum" is
 * "additional topic".
 */

const fr = (n: string, d: string): string => `<frac><num>${n}</num><den>${d}</den></frac>`;

const N = '<i>N</i>';
const N0 = '<i>N</i><sub>0</sub>';
const Nt = '<i>N</i><sub><i>t</i></sub>';
const K = '<i>K</i>';
const r = '<i>r</i>';
const t = '<i>t</i>';
const tK2 = '<i>t</i><sub><i>K</i>/2</sub>';
const ert = '<i>e</i><sup><i>rt</i></sup>';
const emrt = '<i>e</i><sup>−<i>rt</i></sup>';
const KH = fr(K, '2');

export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 625–631 ─────────────────────────
  {
    n: '04',
    title: 'Population Interactions',
    kalam: 'For each of the two species, ask only one question: did the relationship help it, hurt it, or leave it untouched?',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A heavily tested block of the chapter for NEET: expect 1–2 questions, almost always either the (+/−/0) effect table or matching a named example (lichen, <i>Cuscuta</i>, cuckoo) to its interaction. CBSE Boards ask 2–3 mark answers on predation’s role, competitive exclusion, or mutualism examples. CUET mines the effect signs and one-line definitions. Several “trap” examples (cattle egret, sea anemone–clownfish, fig–wasp) are often asked, so example fluency is a high-return skill here (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: 'No organism is an island. A plant cannot fruit without a pollinator; it cannot feed without soil microbes recycling nutrients; it must fend off the insects that would eat it. The moment two different species’ lives touch, ecologists call it an <b>interspecific interaction</b>, and the whole drama of a community is woven from these threads.',
      },
      {
        t: 'p',
        html: 'There is a beautifully simple bookkeeping for these relationships. For each of the two species involved, ask only one question: did this relationship help it, hurt it, or leave it untouched? Mark a benefit with +, a harm with −, and no effect with 0. Every named interaction is just a pair of these signs. Both gain (+, +)? Mutualism. Both lose (−, −)? Competition. One gains while the other loses (+, −)? Predation or parasitism. One gains and the other is indifferent (+, 0)? Commensalism. One loses and the other is indifferent (−, 0)? Amensalism. Six interactions, built from two columns of plus, minus, and zero.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a crowded Indian vegetable market. Two vendors selling the same brinjal at the same corner undercut each other’s sales, both worse off: that’s <b>competition</b> (−, −). The chaiwala whose stall draws a crowd that the nearby flower-seller also profits from, while the chaiwala neither gains nor loses from the flowers: that’s <b>commensalism</b> (+, 0) for the flower-seller. The crop plant and the bee that pollinates it while collecting nectar both walk away richer: <b>mutualism</b> (+, +). The signs are just a ledger of who profited from the encounter.',
      },
      {
        t: 'p',
        html: 'Two cautions sharpen the picture. First, these signs describe the <b>net</b> effect on each species’ fitness (its reproductive success, captured by <i>r</i>), not a single dramatic event: competition lowers a species’ fitness because a superior rival leaves it fewer resources, even if no individual is directly attacked. Second, “interspecific” means between two species; competition within one species (<b>intraspecific</b>) is a separate, often fiercer, struggle and is not one of the six.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The +/−/0 scheme is a simplification: real relationships can shift sign with circumstance (a mutualist can turn parasitic if the cost outweighs the benefit), and the “0” in commensalism and amensalism is an approximation: close study often reveals a faint effect. The categories are a powerful first map, not the final territory.',
      },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      {
        t: 'table',
        title: 'The six interspecific interactions (sign = effect on each species’ fitness)',
        head: ['Interaction', 'Species A', 'Species B', 'One-line diagnosis'],
        rows: [
          ['Mutualism', '+', '+', 'Both benefit; often obligate'],
          ['Competition', '−', '−', 'Both usually harmed, through a shared resource or interference (one may suffer far more)'],
          ['Predation', '+', '−', 'Predator eats prey (kills it)'],
          ['Parasitism', '+', '−', 'Parasite feeds on living host (usually does not kill quickly)'],
          ['Commensalism', '+', '0', 'One benefits, other unaffected'],
          ['Amensalism', '−', '0', 'One harmed, other unaffected'],
        ],
      },
      {
        t: 'p',
        html: '<b>Diagnostic features & canonical NCERT examples</b>',
      },
      {
        t: 'p',
        html: '• <b>Predation</b>: a free-living organism catches, kills, and eats another (the prey). Tiger–deer. Also the route by which energy moves to higher trophic levels. Carnivores eat animals; herbivores eating plants are predators in the broad sense.<br>• <b>Competition</b>: two species need the same resource that is in short supply; the fitness of the weaker is usually depressed by the stronger’s presence. NCERT adds two points: totally unrelated species can also compete for the same resource (flamingos and resident fishes compete for zooplankton in some shallow South American lakes; on the Galápagos, introduced goats drove out the Abingdon tortoise by out-browsing it), and resources need not be limiting for competition to occur: in interference competition one species lowers the other’s feeding efficiency even when food and space are plentiful. Barnacles <i>Balanus</i> (superior) excluding <i>Chthamalus</i> on Scottish rocky shores (Connell’s classic case).<br>• <b>Parasitism</b>: one species (parasite) lives on/in a host, takes food and shelter, and harms it. <b>Ectoparasites:</b> lice on humans, ticks on dogs, copepods on marine fish. <b>Endoparasites:</b> liver fluke, <i>Plasmodium</i>, tapeworm. <b>Brood parasitism:</b> cuckoo (koel) laying eggs in a host’s nest. <i>Cuscuta</i>: a total stem parasite that lost its leaves and chlorophyll.<br>• <b>Commensalism</b>: orchid (epiphyte) on a mango branch; barnacles riding a whale’s back; cattle egret following grazing cattle; sea anemone and clownfish (many ecologists now class this pair as mutualism, because the fish also defends the anemone).<br>• <b>Mutualism</b>: lichen (fungus + alga/cyanobacterium); mycorrhiza (fungus + plant roots, e.g. <i>Glomus</i>); fig and its specific wasp pollinator; <i>Ophrys</i> orchid and its bee; <i>Yucca</i> and the <i>Pronuba</i> moth.<br>• <b>Amensalism</b>: <i>Penicillium</i> secreting penicillin that kills bacteria, while the mould is unaffected.',
      },
      {
        t: 'p',
        html: '<b>Caution: same signs, different interaction.</b> Predation and parasitism are both (+, −). Distinguish by outcome and lifestyle: a predator <b>kills then consumes</b> quickly and is free-living; a parasite <b>lives on a living host</b> and harms it gradually. Commensalism and amensalism are both “+/− with a 0”: tell them apart by who the 0 belongs to (the unaffected partner) and whether the affected one gained or lost.',
      },

      { t: 'part', title: 'Key mechanisms and coevolutionary dynamics' },
      {
        t: 'p',
        html: '<b>Why predators matter (beyond eating).</b> A predator does three jobs the table doesn’t show. (1) It channels energy upward to higher trophic levels. (2) It keeps prey populations in check: when a prickly-pear cactus (<i>Opuntia</i>) was introduced to Australia without its natural enemies it ran riot, and only a control agent could rein it in. (3) Most subtly, it <b>maintains species diversity</b>: in Robert Paine’s famous rocky-intertidal experiment, removing the starfish <i>Pisaster</i> let its prey outcompete one another until many of the prey species vanished (NCERT gives more than ten): the predator had been the <b>keystone</b> holding diversity up. <b>Reasoning:</b> by cropping the dominant competitor, a predator prevents any one prey species from monopolising the habitat.',
      },
      {
        t: 'p',
        html: '<b>The prey strike back: defences.</b> Prey are not passive. Defences include <b>camouflage</b> (cryptically coloured insects and frogs), <b>chemical deterrents</b> (the monarch butterfly is distasteful from toxins it stored as a caterpillar feeding on poisonous weeds; <i>Calotropis</i> loads its tissues with cardiac glycosides so cattle avoid it), and, in plants, <b>morphological armour</b> (thorns of <i>Acacia</i> and cactus) plus toxins that sicken herbivores. <b>Reasoning:</b> predation is a relentless selection pressure, so any heritable trick that lowers the chance of being eaten spreads.',
      },
      {
        t: 'p',
        html: '<b>Competition’s three outcomes.</b> When two species contest a limited resource, three things can happen. (1) <b>Competitive exclusion</b> (Gause’s principle): two closely related species competing for the same limiting resource, with the same niche, cannot coexist indefinitely; the competitively inferior one is eliminated (this holds only when the resource is limiting). (2) <b>Competitive release</b>: remove the superior competitor and the suppressed species expands its range dramatically, showing that competition had been holding it back. (3) <b>Resource partitioning</b>: rather than fight to extinction, species evolve to use the resource differently (different feeding times or foraging zones), enabling coexistence. <b>Reasoning:</b> selection favours any divergence that sidesteps the cost of head-to-head competition; this is why competition is, as Darwin saw, a force in evolution.',
      },
      {
        t: 'p',
        html: '<b>Parasite specialisation.</b> Endoparasites face a strange world inside the host, and evolution has streamlined them ruthlessly: <b>loss of unnecessary organs</b> (even the digestive system, in some), <b>adhesive organs and suckers</b> to cling on, and <b>enormous reproductive output</b> to offset the long odds of reaching a new host. Their life cycles are often <b>complex</b>, threading through intermediate hosts or vectors (the human liver fluke needs both a snail and a fish; malaria needs the <i>Anopheles</i> mosquito as vector). Ectoparasites, living on the surface, often have simpler life cycles. <b>Reasoning:</b> the host is both habitat and obstacle, so parasites trade away self-sufficiency for specialisation.',
      },
      {
        t: 'p',
        html: '<b>The cost to the host, and the parasite’s dilemma.</b> Parasitism is rarely lethal in a hurry, but it is far from harmless: the majority of parasites reduce the host’s survival, growth, and reproduction, lowering its population density, and a parasite-weakened host is often left more vulnerable to predators. Yet a parasite that kills its host too quickly destroys its own home, so natural selection often nudges parasites toward an uneasy truce: the “ideal” parasite thrives within the host without finishing it off. <b>Reasoning:</b> the parasite’s fitness is yoked to the host’s survival, so unrestrained exploitation is self-defeating; this tension is exactly what drives host–parasite coevolution, considered next.',
      },
      {
        t: 'p',
        html: '<b>Coevolution: interaction as an arms race.</b> Tight interactions lock partners into reciprocal evolution. Brood-parasite eggs evolve to <b>mimic the host’s eggs</b> in size and colour so the host won’t eject them. In mutualism the coupling can become so intimate that neither partner can reproduce alone: the <i>Yucca</i> and its <i>Pronuba</i> moth (<i>Tegeticula</i> in current usage) each depend obligately on the other, the fig and its own species of wasp (each fig species has a pollinating wasp species of its own) are similarly locked together (the wasp pollinates the fig and rears its larvae inside it), and the <i>Ophrys</i> orchid lures its bee by <b>sexual deceit</b>: one petal mimicking a female bee so closely that the male attempts to mate with it and pollinates the flower in the process. <b>Reasoning:</b> when two species’ reproductive fates intertwine, every adaptive move by one sets the selective stage for the other.',
      },
      { t: 'fig', id: 'b12-11-fig-11.6' },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board, 3 marks',
        q: 'Name the interaction in each case and give its sign-pair: <b>(a)</b> a tropical reef clownfish sheltering unharmed among a sea anemone’s tentacles while the anemone is unaffected; <b>(b)</b> two species of <i>Paramecium</i> in one flask both growing more slowly than they would alone; <b>(c)</b> a tapeworm in a goat’s gut.',
        steps: [
          '<b>Model answer.</b> <b>(a)</b> <b>Commensalism</b> (+, 0), as NCERT lists it: the clownfish gains protection and the anemone is taken as unaffected (many ecologists now class this pair as mutualism, because the fish also defends the anemone). <b>(b)</b> <b>Competition</b> (−, −): sharing one limited resource lowers both species’ growth. <b>(c)</b> <b>Parasitism</b> (+, −): the tapeworm (endoparasite) benefits at the host goat’s expense.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET, single-best MCQ',
        q: 'In the (+/−/0) scheme, the interaction represented by (−, 0) is: <b>(a)</b> commensalism <b>(b)</b> amensalism <b>(c)</b> parasitism <b>(d)</b> mutualism',
        steps: [
          'One species harmed (−), the other unaffected (0) = amensalism. Eliminate <b>(a)</b>: that is (+, 0); <b>(c)</b>: (+, −); <b>(d)</b>: (+, +).',
        ],
        ans: '(b)',
      },
      {
        t: 'ex',
        tag: 'NEET, MCQ with reasoning',
        q: 'Removing the top predator from a rocky shore caused several prey species to disappear within a year. The best explanation is: <b>(a)</b> the prey starved without the predator’s leftovers <b>(b)</b> the predator had suppressed a dominant competitor, so its removal let one prey exclude the others <b>(c)</b> the prey could not reproduce without predation pressure <b>(d)</b> the habitat’s carrying capacity fell to zero',
        steps: [
          'This is the keystone-predator effect: by cropping the strongest competitor, the predator had kept weaker prey alive; remove it and <b>competitive exclusion</b> takes over. <b>Trap analysis:</b> <b>(a)</b> invents a feeding relationship that does not exist. <b>(c)</b> is biologically backwards: predation limits prey, it does not enable their reproduction. <b>(d)</b> misuses “carrying capacity”; resources did not vanish, the competitive balance shifted.',
        ],
        ans: '(b)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty, Assertion–Reason',
        q: 'Assertion (A): The eggs of a brood-parasitic cuckoo closely resemble the eggs of its host. Reason (R): This mimicry reduces the chance that the host detects and ejects the foreign eggs. <b>(a)</b> Both A and R true, R is the correct explanation of A <b>(b)</b> Both A and R true, R is not the correct explanation of A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          'Egg mimicry is real, and it persists because hosts that spot odd eggs throw them out: so selection favours ever-closer mimicry. R is precisely the evolutionary reason for A. <b>Why not (b):</b> the mimicry is not a coincidence alongside R; it is caused by the selective pressure R describes.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define mutualism and give two NCERT examples, stating what each partner gains.',
            a: 'Mutualism = both species benefit; e.g. mycorrhiza (fungus gets carbohydrates, plant gets minerals/water) and fig–wasp (fig is pollinated, wasp gets a site to lay eggs).',
          },
          {
            q: '[CUET] Lichens are a classic example of: <b>(a)</b> parasitism <b>(b)</b> commensalism <b>(c)</b> mutualism <b>(d)</b> amensalism.',
            a: '(c).',
          },
          {
            q: '[NEET] <i>Cuscuta</i> growing on a hedge plant has lost its chlorophyll and leaves. Name the interaction and the specific parasitic category, and explain the organ loss.',
            a: 'Parasitism, a total stem parasite; it lost photosynthetic organs because it draws all nutrition from the host and no longer needs to make its own food.',
          },
          {
            q: '[NEET] State Gause’s competitive exclusion principle and explain how resource partitioning allows two competitors to coexist instead.',
            a: 'Two species that use the same limiting resource in the same niche cannot coexist indefinitely: the inferior is eliminated. Resource partitioning (different times or zones) reduces the overlap, so both can persist.',
          },
          {
            q: '[NEET high-difficulty] Assertion: The antibiotic action of <i>Penicillium</i> on bacteria is an example of amensalism. Reason: In amensalism one organism secretes a chemical that harms another while remaining unaffected itself. Choose the correct A–R option: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: '(a) Both true, R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which pair of interactions shares the sign-pattern (+, −)?',
        opts: [
          { label: 'mutualism and competition', nudge: '<b>(a)</b> is (+, +) and (−, −).' },
          { label: 'predation and parasitism', nudge: null },
          { label: 'commensalism and amensalism', nudge: '<b>(c)</b> is (+, 0) and (−, 0).' },
          { label: 'competition and amensalism', nudge: '<b>(d)</b> is (−, −) and (−, 0).' },
        ],
        correct: 1,
        solution: 'Both predation and parasitism benefit one partner and harm the other. Students who don’t memorise the table guess by “feel.”',
      },
      {
        t: 'mcq',
        q: 'The cattle egret feeding on insects flushed up by grazing cattle, with no effect on the cattle, is an example of:',
        opts: [
          { label: 'mutualism', nudge: '<b>(a)</b> wrongly assumes the cattle also benefit.' },
          { label: 'predation', nudge: '<b>(b)</b> and <b>(d)</b> wrongly assume the cattle are harmed.' },
          { label: 'commensalism', nudge: null },
          { label: 'parasitism', nudge: '<b>(b)</b> and <b>(d)</b> wrongly assume the cattle are harmed.' },
        ],
        correct: 2,
        solution: 'The egret benefits; the cattle are unaffected → (+, 0). This is a common slip because students over-read a benefit to the cattle.',
      },
      {
        t: 'mcq',
        q: 'Gause’s competitive exclusion principle is most likely to hold when:',
        opts: [
          { label: 'resources are unlimited', nudge: '<b>(a)</b> removes the very scarcity that drives exclusion.' },
          { label: 'the two species occupy different niches', nudge: '<b>(b)</b> describes the escape from exclusion (partitioning), not its operation.' },
          { label: 'resources are limited', nudge: null },
          { label: 'the species are unrelated', nudge: '<b>(d)</b> is not the condition: NCERT states the principle for closely related species, which compete most strongly; what drives exclusion is a shared, scarce resource and the same niche.' },
        ],
        correct: 2,
        solution: 'Exclusion bites only when the shared resource is scarce.',
      },
      {
        t: 'mcq',
        q: 'The <i>Ophrys</i> orchid achieves pollination by:',
        opts: [
          { label: 'offering nectar reward to bees', nudge: '<b>(a)</b> describes ordinary reward pollination: the point of <i>Ophrys</i> is that it gives no reward.' },
          { label: 'sexual deceit: a petal mimicking a female bee', nudge: null },
          { label: 'trapping insects like <i>Nepenthes</i>', nudge: '<b>(c)</b> confuses pollination with carnivory (<i>Nepenthes</i> is a pitcher plant, predation-like).' },
          { label: 'wind dispersal of pollen', nudge: '<b>(d)</b> ignores the named insect pollinator.' },
        ],
        correct: 1,
        solution: 'A petal mimics a female bee; the male’s attempted mating (pseudocopulation) transfers pollen.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Predation vs parasitism.</b> Both are (+, −). A predator kills and eats (free-living); a parasite lives on/in a living host and harms it slowly. If the victim dies immediately, think predation; if it limps along hosting the freeloader, think parasitism.',
          '<b>Over-reading the “0”.</b> In commensalism and amensalism one partner is taken as unaffected. The egret–cattle and orchid–mango cases are commensalism, not mutualism: don’t invent a benefit for the unaffected species.',
          '<b>Confusing exclusion, release, and partitioning.</b> Exclusion = inferior wiped out. Release = suppressed species expands when rival removed. Partitioning = peaceful coexistence by dividing the resource. They are three different outcomes of the same competition.',
          '<b>Mislabelling <i>Cuscuta</i> and lichens.</b> <i>Cuscuta</i> = parasite (total stem parasite). Lichen and mycorrhiza = mutualism. These are easy marks to lose.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any “what interaction is this?” question, assign the two signs first, then read off the table. Deciding “+ for the bee, 0 for nobody-loses” lands you on the answer faster than trying to recall the definition cold: the sign-pair is unambiguous where the wording can be slippery.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>The ledger:</b> mark each species + (benefit), − (harm), 0 (no effect). The pair names the interaction.', note: '' },
          { f: '<b>Six interactions:</b> Mutualism (+, +) · Competition (−, −) · Predation (+, −) · Parasitism (+, −) · Commensalism (+, 0) · Amensalism (−, 0).', note: '' },
          { f: '<b>Predator roles:</b> energy to higher trophic level · checks prey · maintains diversity (keystone, <i>Pisaster</i>) · biocontrol (<i>Opuntia</i>).', note: '' },
          { f: '<b>Prey/plant defences:</b> camouflage · toxins (monarch, <i>Calotropis</i>) · thorns (<i>Acacia</i>, cactus).', note: '' },
          { f: '<b>Competition trio:</b> exclusion (Gause) · competitive release · resource partitioning.', note: '' },
          { f: '<b>Parasite types:</b> ecto (lice, ticks) · endo (liver fluke, <i>Plasmodium</i>; complex cycles, vectors) · brood (cuckoo, egg mimicry). <i>Cuscuta</i> = total stem parasite.', note: '' },
          { f: '<b>Mutualism stars:</b> lichen · mycorrhiza · fig–wasp · <i>Ophrys</i>–bee (sexual deceit) · <i>Yucca</i>–<i>Pronuba</i> moth.', note: '' },
        ],
        aids: [
          '<b>Mnemonic:</b> “Mutual = both +; Comp = both −; Comm = one rides free; Amens = one gets hurt, the bully shrugs.”',
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 632–635 ─────────────────────────
  {
    n: 'A',
    title: 'Solving Population-Growth Equations: Time, Rate Extraction, and Mixed Problems',
    extra: true,
    kalam: 'Three patterns deserve extra practice: time to a target, extracting r from two counts, and choosing the model.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This section adds five topics that go beyond the main chapter text (and beyond NCERT); the book judges that NEET, CUET and CBSE questions draw on them (its estimate from past papers, not official figures): (A) solving population-growth equations for time and extracting the intrinsic rate from data, by inverting the two growth models; (B) the Allee effect and the top-down versus bottom-up debate in population regulation, which answers the question “what controls population size?”; (C) Gause’s competitive exclusion principle with the full barnacle mechanism, including how resource partitioning restores coexistence; (D) functional responses (Holling’s three types), which connect predation to prey density; and (E) human population dynamics: demographic transition, India’s age pyramid and the demographic dividend. A final section, “What NEET Actually Asks”, maps the recurring question types and traps.',
      },
      {
        t: 'p',
        html: `The chapter introduces the exponential model ${Nt} = ${N0}${ert} and the logistic model ${fr('d' + N, 'd' + t)} = ${r}${N}${fr(`(${K} − ${N})`, K)}, and shows that ${r} is the difference between the per capita birth and death rates (${r} = <i>b</i> − <i>d</i>). Three patterns deserve extra practice: solving each model for the time ${t} needed to reach a target population, extracting ${r} from two population counts when ${K} is unknown, and choosing the correct model from mixed-data clues.`,
      },

      { t: 'part', title: 'Method statement' },
      {
        t: 'p',
        html: `<b>Solving exponential growth for time.</b> Starting from ${Nt} = ${N0}${ert}, take natural logarithms:<br>ln ${Nt} = ln ${N0} + ${r}${t} ⇒ ${t} = ${fr(`ln ${Nt} − ln ${N0}`, r)} = ${fr('1', r)} ln(${fr(Nt, N0)}).<br>Use this when the question gives initial population, growth rate, and a target final size.`,
      },
      {
        t: 'p',
        html: `<b>Doubling time of exponential growth.</b> Setting ${Nt} = 2${N0}:<br>2${N0} = ${N0}<i>e</i><sup><i>rt</i></sup> when <i>t</i> = <i>t</i><sub>d</sub>, so 2 = <i>e</i><sup><i>rt</i></sup> at <i>t</i> = <i>t</i><sub>d</sub> and <i>t</i><sub>d</sub> = ${fr('ln 2', r)} = ${fr('0.693', r)}.<br>The doubling time depends only on ${r}, not on ${N0}.`,
      },
      {
        t: 'p',
        html: `<b>Extracting ${r} from two data points.</b> If a population grows from <i>N</i><sub>1</sub> to <i>N</i><sub>2</sub> in time Δ${t} under exponential growth:<br>${r} = ${fr('ln <i>N</i><sub>2</sub> − ln <i>N</i><sub>1</sub>', `Δ${t}`)} = ${fr('ln(' + fr('<i>N</i><sub>2</sub>', '<i>N</i><sub>1</sub>') + ')', `Δ${t}`)}.<br>This is the logarithmic form of relative growth rate (RGR), and it works even when ${K} is unknown.`,
      },
      {
        t: 'p',
        html: `<b>Solving logistic growth for time.</b> The integral logistic equation is:<br>${Nt} = ${fr(K, `1 + (${fr(`${K} − ${N0}`, N0)})${emrt}`)}.<br>To solve for ${t} when ${Nt} is given, rearrange:<br>${fr(`${K} − ${N0}`, N0)} · ${emrt} = ${fr(K, Nt)} − 1 ⇒ ${emrt} = ${fr(`${N0}(${K} − ${Nt})`, `${Nt}(${K} − ${N0})`)}.<br>Taking natural logs:<br>${t} = ${fr('1', r)} ln[${fr(`${Nt}(${K} − ${N0})`, `${N0}(${K} − ${Nt})`)}].<br>This is rarely needed in full form at NCERT level; instead, the useful case is the time at which ${Nt} = ${KH}, which simplifies dramatically.`,
      },
      {
        t: 'p',
        html: `<b>When ${Nt} = ${KH}, the logistic time simplifies.</b> Substituting ${Nt} = ${KH} into the integral form:<br>${KH} = ${fr(K, `1 + (${fr(`${K} − ${N0}`, N0)})${emrt}`)}.<br>Cross-multiplying and simplifying gives ${emrt} = ${fr(N0, `${K} − ${N0}`)}, so:<br>${tK2} = ${fr('1', r)} ln(${fr(`${K} − ${N0}`, N0)}).`,
      },
      {
        t: 'p',
        html: `<b>Choosing the model.</b> If the question gives ${K} and mentions resources becoming scarce, the answer is logistic. If it says “unlimited resources” or “ideal conditions,” the answer is exponential. If ${K} is not mentioned and the growth looks steady, extract ${r} from data and apply the exponential formula.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: `<b>Exponential Time-to-Target.</b> A bacterial culture has 500 cells and grows exponentially with ${r} = 0.3 h<sup>−1</sup>. How many hours to reach 10,000 cells?`,
        steps: [
          `${t} = ${fr('1', r)} ln(${fr(Nt, N0)}) = ${fr('1', '0.3')} ln(${fr('10,000', '500')}) = ${fr('1', '0.3')} ln(20).`,
          `ln(20) = 2.996. So:<br>${t} = ${fr('2.996', '0.3')} = 9.99`,
        ],
        ans: 'Approximately 10 hours.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: `<b>Extracting ${r} and Finding Doubling Time.</b> A yeast population grows from 1000 cells to 8000 cells in 6 hours under ideal conditions. Find (i) the intrinsic rate of increase ${r} and (ii) the doubling time.`,
        steps: [
          `(i) Extracting ${r}:<br>${r} = ${fr('ln(8000) − ln(1000)', '6')} = ${fr('ln(8)', '6')} = ${fr('2.079', '6')}`,
          `(ii) Doubling time:<br><i>t</i><sub>d</sub> = ${fr('0.693', r)} = ${fr('0.693', '0.347')}`,
        ],
        ans: `(i) ${r} = 0.347 h<sup>−1</sup>; (ii) <i>t</i><sub>d</sub> = 2 hours.`,
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: `<b>Logistic Growth: Time to Reach ${KH}.</b> A forest has carrying capacity ${K} = 5000 trees. It starts with ${N0} = 100 trees and ${r} = 0.05 year<sup>−1</sup>. How many years to reach half the carrying capacity?`,
        steps: [
          `${tK2} = ${fr('1', r)} ln(${fr(`${K} − ${N0}`, N0)}) = ${fr('1', '0.05')} ln(${fr('5000 − 100', '100')}) = 20 × ln(49).`,
          `ln(49) = 3.892. So:<br>${tK2} = 20 × 3.892 = 77.84`,
        ],
        ans: 'Approximately 78 years.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: `<b>Mixed Model: Choose and Apply.</b> A fish population of 200 in a lake grows to 350 in one year. A scientist notes that the lake can sustain a maximum of 1000 fish. (i) Was this growth likely exponential or logistic? (ii) Estimate ${r} assuming exponential growth over this period.`,
        steps: [
          `(i) The lake has a defined carrying capacity (${K} = 1000) and the population is already a substantial fraction of it (20% of ${K} at the start, 35% at the end of the year). The logistic “brake” ${fr(`(${K} − ${N})`, K)} falls from 0.80 to 0.65 over the year, so growth is already slowing under crowding if the logistic model holds; the logistic model is the appropriate one whenever ${K} is given and resources are limiting. (ii) If exponential growth is assumed over this year, the extraction formula gives:<br>${r} = ${fr('ln(350) − ln(200)', '1')} = ln(${fr('350', '200')}) = ln(1.75) = 0.560 year<sup>−1</sup>.`,
        ],
        ans: `(i) Logistic is the appropriate model, because ${K} is given and ${N} is already a sizeable fraction of ${K}; (ii) assuming exponential growth, ${r} ≈ 0.56 year<sup>−1</sup> (this is the average net rate over the year and underestimates the intrinsic rate, because crowding slowed growth).`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE] A population of 1000 individuals grows with ${r} = 0.2 month<sup>−1</sup>. How many months to reach 8000 individuals?`,
            a: `${t} = ${fr('1', '0.2')} ln(8) = 5 × 2.079 = 10.4 months.`,
          },
          {
            q: `[NEET] A bacterial culture doubles in number every 30 minutes under ideal conditions. What is the intrinsic rate of increase ${r} in per hour units?`,
            a: `Doubling time <i>t</i><sub>d</sub> = 0.5 hour, so ${r} = ${fr('ln 2', '0.5')} = 1.386 h<sup>−1</sup>.`,
          },
          {
            q: `[NEET] A population follows logistic growth with ${K} = 500 and ${r} = 0.1 day<sup>−1</sup>. If ${N0} = 50, calculate the time (in days) for the population to reach ${Nt} = 250 (half of ${K}).`,
            a: `${tK2} = ${fr('1', '0.1')} ln[${fr('500 − 50', '50')}] = 10 × ln(9) = 10 × 2.197 = 21.97 ≈ 22 days.`,
          },
          {
            q: '[CUET] State one condition under which the exponential growth model is appropriate and one condition under which the logistic model is appropriate.',
            a: 'Exponential: unlimited resources, no crowding effect (e.g., bacteria in fresh medium, species colonising a new habitat). Logistic: resources are finite, competition limits growth as population approaches <i>K</i> (e.g., populations in a bounded ecosystem).',
          },
          {
            q: `[NEET High-Difficulty] A yeast culture has 50 cells at ${t} = 0 and 400 cells at ${t} = 8 hours. Calculate the value of ${r} assuming exponential growth. If the culture medium can support a maximum of 10,000 cells, was the growth truly exponential over this 8-hour period? Give a reason.`,
            a: `${r} = ${fr('ln(' + fr('400', '50') + ')', '8')} = ${fr('ln(8)', '8')} = ${fr('2.079', '8')} = 0.260 h<sup>−1</sup>. The growth was approximately exponential because 400 is far below the ${K} of 10,000, so resource limitation was negligible.`,
          },
          {
            q: `[NEET] The intrinsic rate of natural increase (${r}) for a population is 0.05 per year. How many years will it take for this population to double?`,
            a: `<i>t</i><sub>d</sub> = ${fr('0.693', '0.05')} = 13.86 ≈ 14 years.`,
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 636–638 ─────────────────────────
  {
    n: 'B',
    title: 'Population Regulation: The Allee Effect and Top-Down versus Bottom-Up Control',
    extra: true,
    kalam: 'In most populations the per capita growth rate declines at high density; the Allee effect is the opposite.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter introduces the logistic model and defines carrying capacity (${K}) as the number the habitat can support. It does not name the Allee effect or use the terms top-down and bottom-up control, although Topic 04 shows predators keeping prey in check (the prickly pear, Paine’s starfish). Two patterns are added here: the Allee effect (populations that grow worse when rare than when common, the inverse of density dependence) and the contrast between top-down control (predators limiting prey) and bottom-up control (resources limiting consumers).`,
      },

      { t: 'part', title: 'Method statement' },
      {
        t: 'p',
        html: '<b>The Allee effect.</b> In most populations, per capita growth rate declines at high density (competition for resources). The Allee effect is the opposite: per capita growth rate declines at low density. This occurs when:',
      },
      {
        t: 'p',
        html: '• Cooperative feeding: predators need a group to hunt effectively (wolves, lions).<br>• Mate-finding: finding a mate becomes difficult in very sparse populations.<br>• Predator dilution: in prey species, a large group dilutes predation risk per individual.<br>• Environmental modification: some species modify their environment to their own benefit (e.g., beaver dams create wetland habitat).',
      },
      {
        t: 'p',
        html: `Mathematically, the Allee effect introduces a threshold population size below which the population cannot recover:<br>${fr('d' + N, 'd' + t)} = ${r}${N}(1 − ${fr(N, K)})(${fr(N, '<i>A</i>')} − 1),<br>where <i>A</i> is the Allee threshold. When ${N} < <i>A</i> the factor (${fr(N, '<i>A</i>')} − 1) is negative, so the growth rate is negative and the population declines toward extinction; between <i>A</i> and ${K} the population grows; above ${K} it declines back toward ${K}.`,
      },
      {
        t: 'p',
        html: '<b>Top-down versus bottom-up regulation.</b> In the logistic model the limit <i>K</i> is set by resources, a bottom-up view. Natural populations are also controlled by predation (top-down) and by disease.',
      },
      {
        t: 'p',
        html: '• <b>Bottom-up control</b>: Plant productivity → herbivore density → carnivore density. Resources (food, nutrients) limit the maximum population size. The logistic model’s limit <i>K</i> is a bottom-up (resource) limit.<br>• <b>Top-down control</b>: Predator density → prey density → plant community. Predation limits the prey population, which in turn affects the vegetation. Robert Paine’s starfish (<i>Pisaster ochraceus</i>) removal experiment showed that removing the top predator caused a cascade: prey diversity collapsed because one competitively dominant prey species excluded others.',
      },
      {
        t: 'p',
        html: `The Lotka–Volterra predator-prey equations give the coupled oscillations:<br>${fr('d' + N, 'd' + t)} = ${r}${N} − <i>aNP</i> (prey), ${fr('d<i>P</i>', 'd' + t)} = <i>caNP</i> − <i>mP</i> (predator),<br>where <i>a</i> is the predation rate constant, <i>c</i> is the conversion efficiency (prey turned into predator), and <i>m</i> is the predator death rate.`,
      },
      {
        t: 'p',
        html: 'The key exam point: both mechanisms operate simultaneously, and which one dominates depends on the trophic level and ecosystem conditions.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Identifying the Allee Effect.</b> A small population of endangered tigers in a forest reserve shows declining numbers even though food is abundant and there is no poaching. Which phenomenon best explains this, and why does it occur?',
        steps: [
          'The Allee effect. At very low density, tigers face difficulty finding mates, and the population growth rate becomes negative despite adequate resources. Small populations also suffer inbreeding and chance (demographic) fluctuations, which add to the Allee effect. Below a critical threshold the population cannot recover and heads toward extinction; the Allee effect can start a downward spiral that conservation biologists call an “extinction vortex.”',
        ],
        ans: 'The Allee effect; caused by difficulty in mate-finding and by inbreeding and chance (demographic) effects at low density.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Top-Down or Bottom-Up?</b> In a grassland ecosystem, the biomass of grass determines how many zebras can live there, and the number of zebras determines how many lions can survive. What type of population regulation does this illustrate?',
        steps: [
          'This is bottom-up regulation. Grass (primary production) is the base that limits zebra density (herbivore), which in turn limits lion density (carnivore). Energy and nutrients flow upward from plants to herbivores to carnivores.',
        ],
        ans: 'Bottom-up regulation (resource-driven).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Interpreting Predator-Prey Oscillations.</b> The graph of predator and prey populations over time shows that when prey density is high, predator density rises after a short lag, and when predators peak, prey numbers fall. Name this pattern and explain why it occurs.',
        steps: [
          'This is a Lotka–Volterra predator-prey oscillation. When prey are abundant, predators have plenty of food, so their birth rate rises and predator density increases. The increased predator population then eats more prey, causing prey numbers to drop. With fewer prey available, predator death exceeds birth and their population declines. The cycle repeats.',
        ],
        ans: 'Lotka–Volterra predator-prey oscillation; prey abundance drives predator growth (with lag), which then reduces prey, which then causes predator decline.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] Define the Allee effect and give two biological situations where it occurs.',
            a: 'The Allee effect: per capita growth rate declines at low density. Occurs in mate-finding difficulty (rare plants, solitary animals) and cooperative hunting (wolves, lions need group coordination).',
          },
          {
            q: '[NEET] Distinguish between top-down and bottom-up population regulation with one example of each.',
            a: 'Bottom-up: resources limit population (grass biomass limits zebra numbers). Top-down: predators limit prey (wolves control elk populations).',
          },
          {
            q: '[NEET] In the Lotka–Volterra predator-prey model, what happens to the predator population when the prey population crashes?',
            a: 'When prey crash, predators run out of food, so predator birth rate falls and death rate rises: the predator population declines with a lag behind the prey crash.',
          },
          {
            q: '[NEET High-Difficulty] Assertion: Some populations face a higher extinction risk when their numbers are very low, even if habitat quality is high. Reason: This is due to the Allee effect, where cooperative behaviours and mate-finding become difficult at low density. Choose the correct option: <b>(a)</b> Both A and R are true and R is the correct explanation of A; <b>(b)</b> Both A and R are true but R is not the correct explanation of A; <b>(c)</b> A is true, R is false; <b>(d)</b> A is false, R is true.',
            a: '(a) Both A and R are true, and R is the correct explanation of A.',
          },
          {
            q: '[CUET] In Yellowstone National Park, wolves were exterminated by the 1920s; elk numbers rose and browsed riverside vegetation heavily. This is usually cited as an example of <b>(a)</b> bottom-up regulation <b>(b)</b> top-down regulation <b>(c)</b> mutualism <b>(d)</b> competitive exclusion.',
            a: '(b) Top-down regulation. The wolves (top predator) controlled elk; removing them allowed elk to browse heavily, showing a predator’s effect cascading down the food chain (the extent of the later stream effects is still debated).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 638–641 ─────────────────────────
  {
    n: 'C',
    title: 'Ecological Niche, Gause’s Principle, and Resource Partitioning: The Barnacle Story',
    extra: true,
    kalam: 'Complete competitors for the same limited resource cannot coexist indefinitely.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 04 states Gause’s competitive exclusion principle, competitive release and resource partitioning, and names the barnacle case (<i>Balanus</i> and <i>Chthamalus</i>). It does not develop how the two barnacle species are separated along the shore, why one excludes the other at each tidal height, what Connell’s removal experiment showed, or the full set of ways species partition resources, with MacArthur’s warblers as the classic case. This additional topic fills that gap.',
      },

      { t: 'part', title: 'Method statement' },
      {
        t: 'p',
        html: '<b>Gause’s competitive exclusion principle.</b> Complete competitors, species with identical niches that compete for the same limiting resource in a stable environment, cannot coexist indefinitely; the better competitor excludes the other from the area. NCERT states it for closely related species and only where resources are limiting. The principle holds when:',
      },
      {
        t: 'p',
        html: '• The resource is truly limiting.<br>• The niches are identical (complete overlap).<br>• There is no evolutionary escape (no partitioning).',
      },
      {
        t: 'p',
        html: '<b>The barnacle case study.</b> Joseph Connell’s 1961 work on the Scottish rocky shore studied two barnacles: <i>Balanus balanoides</i> (now <i>Semibalanus balanoides</i>; the better competitor for space on the lower shore) and <i>Chthamalus stellatus</i> (tolerates higher tidal levels where <i>Balanus</i> cannot survive).',
      },
      {
        t: 'p',
        html: '• In the lower-shore zone (optimal for <i>Balanus</i>): <i>Balanus</i> outcompetes <i>Chthamalus</i> for space and excludes it.<br>• In the upper-shore zone (too harsh for <i>Balanus</i>): <i>Chthamalus</i> survives because <i>Balanus</i> cannot tolerate the conditions, not because <i>Chthamalus</i> outcompetes it.',
      },
      {
        t: 'p',
        html: 'Connell’s experiment: he removed <i>Balanus</i> from the lower shore. <i>Chthamalus</i> survived and grew there, showing that <i>Chthamalus</i> was excluded by competition, not by physical intolerance. Connell also found that young <i>Balanus</i> settling in the upper-shore zone are killed by desiccation and heat during long aerial exposure at low tide, so <i>Balanus</i> is limited there by physical factors, not by competition from <i>Chthamalus</i>.',
      },
      {
        t: 'p',
        html: '<b>Resource partitioning.</b> When two species compete for similar resources, they can coexist if they divide the resource along some axis:',
      },
      {
        t: 'p',
        html: '• <b>Spatial</b>: different vertical zones on a shore (as with barnacles), different canopy heights in a forest.<br>• <b>Temporal</b>: different feeding times (nocturnal vs diurnal competitors).<br>• <b>Dietary</b>: different food types or sizes (different seed sizes taken by different finch species).<br>• <b>Behavioural</b>: different foraging zones within the same habitat.',
      },
      {
        t: 'p',
        html: 'The classic example is the five closely related species of warblers feeding on the same spruce trees in the forests of north-eastern USA, studied by Robert MacArthur. Each species forages in a different part of the tree canopy, reducing direct competition.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Explaining the Barnacle Result.</b> In Connell’s experiment, why does <i>Chthamalus</i> disappear from the lower shore even when it can tolerate those physical conditions?',
        steps: [
          '<i>Chthamalus</i> is outcompeted by <i>Balanus</i> for space on the lower shore. Although <i>Chthamalus</i> can physically tolerate the conditions there, <i>Balanus</i> is the superior competitor for the limiting resource (rocky substrate/space). When Connell removed <i>Balanus</i>, <i>Chthamalus</i> readily colonized and survived, showing that the exclusion was competitive, not physical.',
        ],
        ans: '<i>Chthamalus</i> is competitively excluded by <i>Balanus</i> in the lower-shore zone; removal of <i>Balanus</i> allowed <i>Chthamalus</i> to survive, confirming competition, not physical intolerance.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Applying Gause’s Principle.</b> Two species of <i>Paramecium</i> (<i>Paramecium caudatum</i> and <i>Paramecium aurelia</i>) grown separately in culture with the same bacterial food both survive indefinitely. When grown together in the same culture, one species eventually dies out. Explain this using Gause’s principle.',
        steps: [
          'Gause’s principle predicts that two complete competitors for the same limited resource (bacterial food in this case) cannot coexist indefinitely. In pure culture, each species has enough food and survives. When together, both compete for the same food resource. The species with the slightly faster growth rate under those conditions will outcompete the other, eventually eliminating it from the culture. This is competitive exclusion.',
        ],
        ans: 'The two species compete for the same food resource; the superior competitor eliminates the other from the culture, illustrating Gause’s competitive exclusion principle.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Identifying Resource Partitioning.</b> Five species of warblers on the same spruce tree feed at different canopy heights. Which ecological phenomenon does this illustrate, and why does it allow coexistence?',
        steps: [
          'This is resource partitioning (spatial partitioning along a vertical gradient). By feeding at different heights, the five warbler species divide the common resource (insect prey on the tree), reducing direct competition. Each species occupies a distinct niche within the same habitat, which allows coexistence: exactly as predicted by the niche differentiation component of competitive theory.',
        ],
        ans: 'Spatial resource partitioning; it allows coexistence by reducing niche overlap between competing species.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State Gause’s competitive exclusion principle and describe how Connell’s barnacle experiment tested it.',
            a: 'Gause’s principle: complete competitors for the same limited resource cannot coexist indefinitely. Connell removed <i>Balanus</i> from the lower shore and found <i>Chthamalus</i> survived and grew there, showing exclusion was competitive, not physical. Connell also found that young <i>Balanus</i> settling on the upper shore die from desiccation, so it is physically excluded there.',
          },
          {
            q: '[CUET] What is resource partitioning? Give two examples of how species partition resources to avoid competitive exclusion.',
            a: 'Resource partitioning: dividing a limited resource to reduce competition. Examples: different vertical foraging zones (warblers), different feeding times (nocturnal vs diurnal predators), different seed sizes (Darwin’s finches).',
          },
          {
            q: '[NEET] Two species of seed-eating birds feed exclusively on seeds of the same size in the same habitat. What outcome does competitive exclusion theory predict? How might the birds escape this outcome?',
            a: 'Competitive exclusion theory predicts that one species will be excluded from the habitat (local extinction). They might escape this by partitioning the seed resource (e.g., different seed sizes, different foraging times), by which each specializes and reduces direct competition.',
          },
          {
            q: '[NEET] In Connell’s experiment, why did <i>Balanus</i> not expand into the upper-shore zone even when <i>Chthamalus</i> was removed?',
            a: '<i>Balanus</i> cannot survive on the upper shore because it cannot tolerate prolonged aerial exposure and desiccation, so it is physically excluded, not competitively excluded. Removing <i>Chthamalus</i> would not change this physical constraint.',
          },
          {
            q: '[NEET High-Difficulty] Assertion: The absence of <i>Chthamalus</i> from the lower shore in the presence of <i>Balanus</i> is an example of competitive exclusion. Reason: <i>Chthamalus</i> is better adapted to lower-shore conditions but is displaced by the superior competitor <i>Balanus</i>. Choose the correct option: <b>(a)</b> Both A and R are true and R is the correct explanation of A; <b>(b)</b> Both A and R are true but R is not the correct explanation of A; <b>(c)</b> A is true, R is false; <b>(d)</b> A is false, R is true.',
            a: '(c) A is true, R is false. <i>Chthamalus</i> is excluded from the lower shore by <i>Balanus</i> through competition, so A is true. R is false: <i>Chthamalus</i> is not better adapted to the lower shore; <i>Balanus</i> is the superior competitor there, and <i>Chthamalus</i> merely tolerates those conditions but loses to competition.',
          },
        ],
      },
    ],
  },
];
