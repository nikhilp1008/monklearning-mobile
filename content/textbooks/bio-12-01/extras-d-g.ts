import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 1 (Sexual Reproduction in Flowering Plants), Additional topics D to G, word for word from the
 * Class 12 Biology Master Reference (book pp. 46 to 62): D "Fruit and Seed Dispersal: Mechanisms and Adaptations"
 * (opens mid-page 46, after Addendum C's practice answers; ends p. 49), E "Apomixis: Full Classification and
 * Distinguishing Routes" (p. 49 to p. 52), F "Quick Reference Summary: Additional Topics" (p. 52 to p. 53) and
 * G "What NEET Actually Asks" (the book's "Addendum P", heading at the foot of p. 53, text pp. 54 to 62).
 * Page 63 is the next chapter.
 *
 * Topic indexes: D = 7, E = 8, F = 9, G = 10 (Topics 01 to 04 = 0 to 3, Additional A to G = 4 to 10).
 * No figure in these pages. Where the book prints no answer line, ans is ''. Em dashes are written as colons or commas.
 */

const EST = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic D · pp. 46–49 ─────────────────────────
  {
    n: 'D',
    title: 'Fruit and Seed Dispersal: Mechanisms and Adaptations',
    extra: true,
    kalam: 'Without dispersal, seeds would fall directly beneath the parent plant.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter covers seed and fruit formation in detail and names dispersal only as one advantage of the seed (Topic 02), but it does not describe how seeds and fruits are dispersed away from the parent plant. Dispersal is a critical post-fertilisation event: it prevents seedling competition with the parent and allows colonisation of new habitats. CUET match questions and NEET diagram questions regularly test dispersal mechanisms ${EST}.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Why dispersal matters.</b> Without dispersal, seeds would fall directly beneath the parent plant. The resulting seedling would compete with the parent for light, water, and nutrients and would likely die. Dispersal is therefore a fitness trait: plants have evolved remarkable mechanisms to move their seeds away.',
      },
      {
        t: 'table',
        title: 'Four dispersal mechanisms (anemochory, hydrochory, zoochory, autochory)',
        head: ['Mechanism', 'Agent', 'Key features', 'Examples'],
        rows: [
          [
            '<b>Anemochory</b> (wind)',
            'Wind',
            'Seeds/fruits very light; wings, pappus, or feathery hairs; often large wing area to mass ratio',
            '<i>Sonchus</i> (sow thistle) and <i>Taraxacum</i> (dandelion): pappus with achenes; <i>Acer</i> (maple): winged samaras; <i>Hypochaeris</i> (cat’s ear): pappus',
          ],
          [
            '<b>Hydrochory</b> (water)',
            'Water',
            'Buoyant, waterproof coverings; fibrous husk or air spaces',
            'Coconut (<i>Cocos nucifera</i>): fibrous husk with air trapped; water lily seeds: air trapped in spongy aril',
          ],
          [
            '<b>Zoochory</b>',
            'Animals',
            'Fleshy, edible fruits: animals eat and excrete seeds (endozoochory); or seeds stick to fur/feathers (epizoochory)',
            'Guava, tomato: endozoochory (mango: the stone is usually dropped after the pulp is eaten); <i>Xanthium</i> (cocklebur), <i>Bidens</i>: epizoochory (hooks/spines)',
          ],
          [
            '<b>Autochory</b> (self-dispersal)',
            'Plant’s own mechanism',
            'Explosive or ballistic dehiscence: fruits split suddenly and fling seeds out',
            '<i>Ruellia</i>: explosive capsule; <i>Ecballium</i> (squirting cucumber): fruit detaches and squirts seeds; <i>Impatiens</i>',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Key morphological adaptations.</b><br>• <b>Wing (samara):</b> flat, light extension of the fruit wall; found in <i>Acer</i> (in <i>Shorea</i> and other dipterocarps the wings are enlarged persistent sepals). The fruit (not the seed alone) is winged in many anemochorous species.<br>• <b>Pappus:</b> a crown of bristles on an achene; in Asteraceae (<i>Sonchus</i>, <i>Taraxacum</i>), it acts as a parachute.<br>• <b>Fibrous husk of coconut:</b> the mesocarp is fibrous and traps air, providing buoyancy.<br>• <b>Hooks and spines:</b> <i>Xanthium</i> (cocklebur) has hooked spines that catch in animal fur: epizoochory.<br>• <b>Fleshy fruit:</b> the pericarp is edible; seeds inside survive digestive passage (endozoochory). Examples: guava, tomato (the mango stone is usually dropped after the pulp is eaten).<br>• <b>Explosive fruits:</b> <i>Ruellia</i> capsules dehisce explosively, scattering seeds. <i>Ecballium elaterium</i> (squirting cucumber) pressurises its fruit and squirts seeds out when the fruit detaches.',
      },
      {
        t: 'p',
        html: '<b>False fruits in dispersal.</b> Note from the main chapter that the edible part of a false fruit (e.g. apple, strawberry) comes from the thalamus: but this fleshy thalamus still attracts animals that disperse the seeds. The dispersal mechanism (zoochory) works the same way for true and false fruits.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Classifying Dispersal Mechanism.</b> Fruits of <i>Cocos nucifera</i> (coconut) float on water and can travel hundreds of kilometres across the ocean before germinating on a distant shore. Identify the dispersal mechanism and name the structural feature responsible for floatation.',
        steps: ['The coconut’s fibrous husk traps air and provides buoyancy, allowing the fruit to float. This is dispersal by water: hydrochory.'],
        ans: 'Hydrochory (water dispersal); the fibrous husk of the coconut traps air, providing buoyancy.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Matching Dispersal Type with Seed/Fruit Feature.</b> Fruits (achenes) of <i>Sonchus</i> (sow thistle) have a pappus of fine bristles. Fruits of <i>Acer</i> (maple) have a wing. Fruits of <i>Xanthium</i> (cocklebur) have hooked spines. Fruits of <i>Mangifera</i> (mango) are fleshy and edible. Classify each by dispersal mechanism.',
        steps: [
          '<i>Sonchus</i> achenes have a pappus acting as a parachute: anemochory. <i>Acer</i> winged fruits (samaras): anemochory. <i>Xanthium</i> hooked spines: epizoochory (sticks to animal fur). <i>Mangifera</i> fleshy fruit: endozoochory (animals eat and disperse).',
        ],
        ans: '<i>Sonchus</i>: anemochory; <i>Acer</i>: anemochory; <i>Xanthium</i>: epizoochory; <i>Mangifera</i>: endozoochory.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Autochory in <i>Ruellia</i>.</b> The fruit of <i>Ruellia</i> dehisces explosively, scattering seeds several metres from the parent plant. Name the dispersal mechanism and explain one adaptive advantage of this method.',
        steps: [
          'This is autochory (self-dispersal / ballistic dispersal). The advantage is that seeds are dispersed away from the parent without depending on wind, water, or animals, ensuring at least some dispersal even when external agents are scarce. The explosive mechanism can also place seeds in small cracks or soil where they may germinate more successfully.',
        ],
        ans: 'Autochory (explosive/self-dispersal); advantage: independence from external agents; seeds placed at a distance from parent and often in suitable germination sites.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define anemochory and give one plant example.',
            a: 'Anemochory is seed/fruit dispersal by wind. Example: <i>Sonchus</i> (sow thistle) or <i>Taraxacum</i> (dandelion) with pappus, or <i>Acer</i> (maple) with winged samaras.',
          },
          {
            q: '[NEET] Name two structural features that aid wind dispersal of seeds and fruits.',
            a: 'Wings/samaras (flat extensions that create drag, slowing fall); pappus (parachute of fine bristles); very light seeds.',
          },
          {
            q: '[CUET] Explain why a coconut can float on water for long distances, and name the dispersal mechanism.',
            a: 'The fibrous husk of the coconut traps air, making the fruit buoyant. Dispersal mechanism: hydrochory (water dispersal).',
          },
          {
            q: '[NEET] What is meant by epizoochory? Name one plant that disperses seeds by this method.',
            a: 'Epizoochory is dispersal when seeds/fruits attach to the fur, feathers, or skin of animals and are carried to new locations. Example: <i>Xanthium</i> (cocklebur) with hooked spines, or <i>Bidens</i> with barbed bristles.',
          },
          {
            q: '[CBSE] Distinguish between endozoochory and epizoochory, giving one example of each.',
            a: 'Endozoochory: seeds dispersed inside the body of an animal after it eats the fruit: the seeds pass through the digestive tract and are excreted (e.g. guava, tomato). Epizoochory: seeds/fruits cling to the outside of an animal’s body (e.g. <i>Xanthium</i> with hooks, Beggartick with spines).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 49–52 ─────────────────────────
  {
    n: 'E',
    title: 'Apomixis: Full Classification and Distinguishing Routes',
    extra: true,
    kalam: 'Apomixis must bypass both meiosis (which would halve the chromosome number) and fertilisation of the egg (which would introduce a second genome).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter defines apomixis as seed formation without fertilisation and, in Topic 04 (Figure 1.6), names and defines the three routes (diplospory, apospory, adventive embryony). This additional topic sets them out side by side in a table and shows how to identify each from a description. These distinctions appear in matching and reasoning questions ${EST}.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>What apomixis must avoid to make a clone.</b> To produce a seed that is genetically identical to the mother, apomixis must bypass both meiosis (which would halve the chromosome number) and fertilisation of the egg (which would introduce a second genome). The three routes differ in which step they modify.',
      },
      {
        t: 'table',
        title: 'Three routes to apomictic seeds: the classification',
        head: ['Route', 'What is modified', 'Key characteristic', 'Examples'],
        rows: [
          [
            '<b>Diplospory</b>',
            'The megaspore mother cell (MMC) bypasses meiosis and develops directly into a diploid embryo sac',
            'The embryo sac forms from the MMC by mitosis: the MMC never divided meiotically, so the sac is diploid; the egg cell is diploid and develops without fertilisation',
            'Asteraceae (e.g. <i>Parthenium</i>, some <i>Taraxacum</i> species)',
          ],
          [
            '<b>Apospory</b>',
            'A somatic cell of the nucellus (or integument) forms an additional diploid embryo sac alongside the normal (usually sexual) sac',
            'The aposporic sac arises from a diploid somatic cell, not from a megaspore; there may be two embryo sacs in one ovule',
            'For example <i>Hieracium</i> and the grasses <i>Pennisetum</i> (<i>Cenchrus</i>) and <i>Panicum maximum</i>',
          ],
          [
            '<b>Adventive (adventitious) embryony</b>',
            'Embryos bud directly from diploid somatic cells (nucellus or integument) without forming an embryo sac',
            'The embryo develops with no embryo sac stage (the nucellar cells may protrude into the sac cavity but form no egg); nucellar seedlings are the classic example',
            '<i>Citrus</i> species, <i>Mangifera</i> (mango), <i>Opuntia</i>',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>The critical distinctions.</b><br>• <b>Diplospory vs apospory:</b> In diplospory, the existing (modified) embryo sac comes from the MMC. In apospory, a new embryo sac forms from a somatic cell while the original sac (sexual) may still exist, giving two sacs in one ovule.<br>• <b>Apospory vs adventive embryony:</b> In apospory, a full embryo sac forms. In adventive embryony, no embryo sac forms: the embryo buds directly from somatic cells.<br>• <b>Nucellar embryony is adventive embryony:</b> “nucellar embryony” (embryos from nucellar tissue) is the commonest and best-known form of adventive embryony. The nucellar cells are diploid somatic cells of the ovule; they bud directly into embryos, bypassing the embryo sac.<br>• <b>Polyembryony in apomixis:</b> In <i>Citrus</i>, several nucellar embryos can form in one seed: this is apomictic polyembryony. These embryos are clones of the mother (the seed may also contain one zygotic embryo, which is not).',
      },
      {
        t: 'p',
        html: '<b>Diploid vs haploid outcome.</b> All three routes produce diploid embryos (because they arise without meiosis). This is why apomictic seedlings are clones: they carry the mother’s full diploid complement with no reduction and no mixing. The rare “non-recurrent apomixis” (a haploid egg develops without fertilisation) produces a haploid plant that cannot reproduce sexually: this is a dead end and is not the focus of the NCERT or examination.',
      },
      { t: 'p', html: '<b>Identifying the route from a description.</b> The question gives a scenario: apply this logic:' },
      {
        t: 'proc',
        title: 'Identifying the route from a description',
        steps: [
          'Does the description mention the MMC bypassing meiosis? → Diplospory.',
          'Does it mention a somatic cell forming an embryo sac (alongside the existing one)? → Apospory.',
          'Does it mention embryos budding directly from nucellar/integumentary cells without a sac? → Adventive embryony (nucellar embryony).',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Identifying the Apomixis Route.</b> A species of <i>Taraxacum</i> (dandelion) produces seeds without fertilisation. Investigation shows that the megaspore mother cell divides mitotically to form a diploid embryo sac, and the diploid egg cell develops directly into an embryo. Identify the apomixis route.',
        steps: [
          'The key is that the MMC (which should undergo meiosis) instead divided mitotically to form the embryo sac. This is the diagnostic feature of diplospory. The diploid egg (no reduction) then develops parthenogenetically, but because the sac was diploid, the embryo is also diploid and a clone.',
        ],
        ans: 'Diplospory: the MMC bypasses meiosis and develops directly into a diploid embryo sac by mitosis.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Distinguishing Apospory from Adventive Embryony.</b> In species X, a diploid somatic cell of the nucellus forms a complete embryo sac containing a diploid egg. In species Y, diploid nucellar cells bud directly to form an embryo without any embryo sac or egg cell. Name the apomixis route in each species.',
        steps: [
          'Species X: a somatic cell forms an entire embryo sac: this is apospory. Species Y: somatic cells bud to form an embryo directly, bypassing the embryo sac: this is adventive embryony (nucellar embryony).',
        ],
        ans: 'Species X: apospory; Species Y: adventive embryony (nucellar embryony).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Why Apomictic <i>Citrus</i> Seedlings Are Clones.</b> In a <i>Citrus</i> orchard, nucellar seedlings raised from polyembryonic seeds are genetically identical to the mother tree. Explain why, in terms of the cell types and divisions involved.',
        steps: [
          'The nucellus is a diploid maternal tissue (sporophytic, 2<i>n</i>). Nucellar cells bud and divide mitotically to form extra embryos. Mitosis preserves the diploid chromosome number and produces genetically identical daughter cells. Because no meiosis occurs (no reduction division) and no fertilisation occurs (no second genome introduced), every nucellar seedling carries exactly the same diploid genome as the mother plant: it is a clone.',
        ],
        ans: 'Nucellar cells are diploid and divide mitotically; mitosis produces genetically identical copies; no meiosis (no reduction) and no fertilisation (no mixing of genomes) occurs, so the seedlings are clones of the mother.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Difference Between Diplospory and Adventive Embryony.</b> Distinguish between diplospory and adventive embryony as routes to apomictic seed formation.',
        steps: [
          'Diplospory: the megaspore mother cell bypasses meiosis and develops directly into a diploid embryo sac by mitosis; the egg cell of this sac is diploid and develops parthenogenetically into a diploid embryo. Adventive embryony: diploid somatic cells (nucellus or integument) bud directly to form an embryo without producing an embryo sac; the embryo forms with no embryo sac stage. The key difference is whether an embryo sac forms from the MMC (diplospory) or embryos arise from somatic cells bypassing the sac (adventive embryony).',
        ],
        ans: 'Diplospory: MMC → mitosis → diploid embryo sac → diploid egg → embryo. Adventive embryony: nucellar/integumentary cells → direct embryo bud → embryo (no embryo sac).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the three routes to apomictic seed formation and state one distinguishing feature of each.',
            a: '(i) Diplospory: the MMC bypasses meiosis and develops into a diploid embryo sac by mitosis. (ii) Apospory: a somatic cell forms an additional diploid embryo sac alongside the existing one. (iii) Adventive embryony: embryos bud directly from diploid somatic cells (nucellus/integument) without forming an embryo sac.',
          },
          {
            q: '[NEET] Why are apomictic seedlings of <i>Citrus</i> genetically identical to the mother plant? Explain in terms of cell division type.',
            a: 'Nucellar seedlings arise from diploid nucellar cells by mitosis; mitosis produces genetically identical daughter cells; no meiosis (no reduction, no crossing over) and no fertilisation (no mixing of genomes) occurs, so the seedlings are clones of the mother.',
          },
          {
            q: '[CUET] In a species of <i>Taraxacum</i>, the megaspore mother cell develops into an embryo sac without undergoing meiosis. Name this apomixis route.',
            a: 'Diplospory.',
          },
          {
            q: '[NEET] Distinguish between apospory and adventive embryony.',
            a: 'In apospory, a somatic cell forms a complete embryo sac (with egg, synergids, central cell, etc.) alongside or replacing the sexual sac. In adventive embryony, no embryo sac is formed: the embryo buds directly from somatic cells.',
          },
          {
            q: '[CBSE] Give one example each of a plant that shows diplospory and a plant that shows adventive embryony.',
            a: 'Diplospory: <i>Taraxacum</i> (dandelion), <i>Parthenium</i>. Adventive embryony: <i>Citrus</i> species, mango (<i>Mangifera indica</i>), <i>Opuntia</i>.',
          },
          {
            q: '[NEET · Assertion–Reason] A: Apomictic seeds do not show genetic variation.<br>R: Apomixis involves meiosis followed by self-fertilisation, which produces homozygous offspring.<br>Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: '(c): Assertion is true (apomictic seedlings are clones and show no genetic variation), but the Reason is false (in the usual routes apomixis skips meiosis and fertilisation of the egg; it is clonal, not homozygous from selfing).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 52–53 ─────────────────────────
  {
    n: 'F',
    title: 'Quick Reference Summary: Additional Topics',
    extra: true,
    kalam: 'Key: all routes skip meiosis and fertilisation of the egg → diploid clone of mother.',
    blocks: [
      { t: 'part', title: 'Additional topic A: Seed Dormancy' },
      {
        t: 'p',
        html: '• Physical: hard, impermeable coat → scarification. Examples: <i>Acacia</i> and <i>Cassia</i> (many legumes).<br>• Physiological: internal ABA block → stratification, GA<sub>3</sub>, afterripening. Examples: apple seeds.<br>• Morphological: immature embryo → time for growth. Example: <i>Ginkgo</i>.<br>• Hormonal: ABA inhibits, GA promotes; GA:ABA ratio high = germination.<br>• Breaking: scarification (mechanical/chemical), pre-soaking in warm water (hot-water soak), stratification (cold), GA<sub>3</sub> application.',
      },
      { t: 'part', title: 'Additional topic B: Self-Incompatibility' },
      {
        t: 'p',
        html: '• SI prevents self-fertilisation genetically; promotes outcrossing.<br>• Gametophytic SI: pollen’s own <i>S</i>-allele determines compatibility; S-RNase mechanism; examples: Solanaceae.<br>• Sporophytic SI: anther parent <i>S</i>-alleles determine pollen coat; dominance possible; examples: Brassicaceae.<br>• Key test point: in gametophytic SI, heterozygous plants produce two functional pollen types.',
      },
      { t: 'part', title: 'Additional topic C: Pollen Tube Guidance' },
      {
        t: 'p',
        html: '• Path: stigma → style (transmitting tissue) → locule → micropyle → synergid (guided by filiform apparatus) → gamete discharge.<br>• Chemotropism: pollen tube follows chemical gradient produced by synergids.<br>• Filiform apparatus: guides the tube into the synergid; its folded wall increases the surface for absorbing nutrients.',
      },
      { t: 'part', title: 'Additional topic D: Fruit and Seed Dispersal' },
      {
        t: 'p',
        html: '• Anemochory (wind): wings, pappus, light seeds. Examples: <i>Sonchus</i>, <i>Acer</i>.<br>• Hydrochory (water): buoyant, fibrous husk. Example: coconut.<br>• Zoochory: endozoochory (fleshy fruit, e.g. guava); epizoochory (hooks/spines, e.g. <i>Xanthium</i>).<br>• Autochory (self/explosive): <i>Ruellia</i>, <i>Ecballium</i>.',
      },
      { t: 'part', title: 'Additional topic E: Apomixis Classification' },
      {
        t: 'p',
        html: '• Diplospory: MMC bypasses meiosis → diploid sac → diploid egg → embryo. Examples: <i>Taraxacum</i>, <i>Parthenium</i>.<br>• Apospory: somatic cell forms extra diploid embryo sac. Examples: <i>Hieracium</i>, <i>Pennisetum</i>.<br>• Adventive embryony: somatic cells bud directly to form embryo, bypassing sac. Examples: <i>Citrus</i> (nucellar embryony), mango.<br>• Key: all routes skip meiosis and fertilisation of the egg → diploid clone of mother.',
      },
    ],
  },

  // ───────────────────────── Additional topic G · pp. 53–62 ─────────────────────────
  {
    n: 'G',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'Six question shapes are described for this chapter.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: `The approximate distribution of NEET/AIPMT questions on this chapter (a range of past NEET and AIPMT papers) across its four topics is shown below ${EST}.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Content', 'Approximate share'],
        rows: [
          ['01', 'Pre-fertilisation: anther T.S., embryo-sac composition, megasporogenesis', '~16 questions (24 %)'],
          ['02', 'Pollination: agents, pollen–pistil interaction, artificial hybridisation', '~13 questions (19 %)'],
          ['03', 'Double fertilisation & post-fertilisation: ploidy, fruit/seed types, endosperm', '~12 questions (18 %)'],
          ['04', 'Apomixis & polyembryony', '~5 questions (7 %)'],
          ['Mixed/Applied', 'Statement bundles, assertion–reason, matching across topics', '~22 questions (32 %)'],
        ],
      },
      {
        t: 'p',
        html: `<b>What this means for your revision order:</b> Topics 01 and 02 together account for roughly 43 % of the questions. Topic 03 follows (particularly the 2<i>n</i>/3<i>n</i> ladder and true-vs-false fruit). Topic 04 has the smallest share, but the apomixis-versus-parthenocarpy comparison is worth knowing well ${EST}.`,
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      {
        t: 'p',
        html: `Six question shapes recur in NEET papers for this chapter ${EST}. Each is described below with its crack and one fully worked example.`,
      },

      { t: 'p', html: '<b>Archetype 1: The Definition/Direct-Recall Fact</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A single-sentence stem asking for one correct piece of terminology or a numerical value. Usually options are one-word answers.<br><b>The crack:</b> These are pure recall. The answer is usually the one that uses the exact NCERT term. Eliminate any option that uses a near-sound-alike or a related structure.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Filiform apparatus is found in:<br><b>(a)</b> synergids<br><b>(b)</b> anther wall<br><b>(c)</b> secondary nucleus<br><b>(d)</b> egg cell',
        steps: [
          'The filiform apparatus is the finger-like thickening of synergid cell walls at the micropylar end; it guides the pollen tube. The anther wall has no such structure; the secondary nucleus is the fused polar nuclei inside the central cell; the egg cell lacks it.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>Archetype 2: The Statement-Bundle (“Which of the following is/are correct?”)</b>' },
      {
        t: 'p',
        html: `<b>What it looks like:</b> A list of 4–6 numbered statements; the student must pick the correct combination, e.g. “(i) and (ii) only,” “All of the above.” These appear regularly in this chapter ${EST}.<br><b>The crack:</b> Treat every statement as independent. Mark each T or F on your paper before looking at the combination options. Never guess the combination from memory of the topic.`,
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which of the following statements are correct for a typical female gametophyte of a flowering plant?<br>(i) It is 8-nucleate and 7-celled at maturity.<br>(ii) It is free-nuclear during development.<br>(iii) It is situated inside the integument but outside the nucellus.<br>(iv) It has an egg apparatus situated at the chalazal end.<br><b>(a)</b> (i) and (iv)<br><b>(b)</b> (ii) and (iii)<br><b>(c)</b> (i) and (ii)<br><b>(d)</b> (ii) and (iv)',
        steps: [
          '<b>Checking each:</b><br>(i) <b>True</b>: 7 cells, 8 nuclei (central cell holds 2 polar nuclei).<br>(ii) <b>True</b>: the three mitotic divisions are free-nuclear before cellularisation.<br>(iii) <b>False</b>: the embryo sac is inside the nucellus, not outside it.<br>(iv) <b>False</b>: the egg apparatus is at the micropylar end, not the chalazal end.',
          'Correct statements are (i) and (ii).',
        ],
        ans: '(c)',
      },

      { t: 'p', html: '<b>Archetype 3: The Assertion–Reason Pair</b>' },
      {
        t: 'p',
        html: `<b>What it looks like:</b> Assertion (A) followed by Reason (R); answer key is (a) both true + R explains A, (b) both true + R does not explain, (c) A true R false, (d) A false R true. This format appears often in this chapter ${EST}.<br><b>The crack:</b> Evaluate each sentence independently first. Only then check whether R actually explains A. A common trap is that both sentences are factually true but the explanation link is wrong.`,
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Assertion (A): If a pollen mother cell has 42 chromosomes, the pollen has only 21 chromosomes.<br>Reason (R): Pollens are formed after meiosis in pollen mother cell.',
        steps: [
          'A: True. Meiosis halves the chromosome number, so 42 → 21.',
          'R: True. Microspores (which become pollen) are formed by meiosis of the PMC.',
          'R <b>does</b> correctly explain A: meiosis is the reductional division that produces the haploid pollen.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>Archetype 4: The Match-the-Column Diagram or Term Map</b>' },
      {
        t: 'p',
        html: `<b>What it looks like:</b> Two columns (structures vs descriptions/examples); the student must match A–E to I–V. Such items appear regularly ${EST}.<br><b>The crack:</b> Do not memorise the match sequence as a list. Instead, for each item in Column I, ask: what is the defining feature that only one Column-II entry can satisfy? That locks the pair, and the rest follows.`,
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Match the apomixis route with its description:<br>Column I: (A) Diplospory; (B) Apospory; (C) Adventive embryony<br>Column II:<br>(1) embryo forms directly from a diploid nucellar/integumentary cell, bypassing the embryo sac<br>(2) MMC develops directly into a diploid embryo sac<br>(3) a somatic cell outside the embryo sac forms an extra embryo sac',
        steps: [
          'Diplospory = the MMC itself avoids meiosis and becomes the embryo sac → <b>(A)–(2)</b>',
          'Apospory = a somatic (nucellar) cell outside the normal sac forms a second, aposporic sac → <b>(B)–(3)</b>',
          'Adventive embryony = embryo buds directly from nucellar/integumentary cells, with no embryo sac stage → <b>(C)–(1)</b>',
        ],
        ans: 'A–2, B–3, C–1',
      },

      { t: 'p', html: '<b>Archetype 5: The Diagram-Identification (anther T.S., embryo sac, fruit anatomy)</b>' },
      {
        t: 'p',
        html: `<b>What it looks like:</b> A labelled diagram (often reproduced from NCERT) with letters A–D; the student identifies each structure. Such items appear regularly ${EST}.<br><b>The crack:</b> You must know the exact order of layers from outside → inside for the anther T.S., and the exact spatial arrangement of the embryo sac (micropylar vs chalazal end). Draw the anther T.S. on your rough sheet the moment you open the paper: epidermis → endothecium → middle layers → tapetum → sporogenous tissue.`,
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'In a T.S. of anther, the layers from outside to inside are:<br><b>(a)</b> sporogenous tissue, tapetum, middle layers, endothecium, epidermis<br><b>(b)</b> epidermis, middle layers, endothecium, tapetum, sporogenous tissue<br><b>(c)</b> epidermis, endothecium, middle layers, tapetum, sporogenous tissue<br><b>(d)</b> epidermis, endothecium, tapetum, middle layers, sporogenous tissue',
        steps: [
          'Recalling the anther wall layers in order from the outermost surface inward:<br>1 = epidermis (outermost protective layer)<br>2 = endothecium (beneath epidermis; contributes to dehiscence)<br>3 = middle layers (1–2 cells thick; temporary)<br>4 = tapetum (innermost nutritive layer)<br>5 = sporogenous tissue (central mass of cells that become pollen mother cells)',
          'Option (c) lists exactly this sequence: epidermis → endothecium → middle layers → tapetum → sporogenous tissue. (Option (a) is the reverse, inside-to-outside order.)',
        ],
        ans: '(c)',
      },

      { t: 'p', html: '<b>Archetype 6: The Ploidy/Chromosome-Number Trace</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A question that gives the somatic chromosome count (2<i>n</i>) and asks for the chromosome number of a post-fertilisation structure, usually the endosperm. Often framed as “if the megaspore mother cell has 24 chromosomes…”<br><b>The crack:</b> Use the single rule: <b>a cell before meiosis (sporophyte cells, MMC, PMC) = 2<i>n</i>; a product of meiosis (a spore) and a gamete = <i>n</i>; the zygote = 2<i>n</i>; the endosperm = two polar nuclei (<i>n</i> + <i>n</i>) + one male gamete (<i>n</i>) = 3<i>n</i>.</b> Never try to reconstruct the whole process: just apply the ladder.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'If the somatic chromosome number of a plant is 2<i>n</i> = 24, what is the chromosome number of its endosperm?',
        steps: [
          'Somatic (2<i>n</i>) = 24 → therefore <i>n</i> = 12.',
          'Endosperm forms by triple fusion: two polar nuclei (each <i>n</i>) + one male gamete (<i>n</i>).',
          'Triple fusion ploidy = 12 + 12 + 12 = 36 = 3<i>n</i>.',
        ],
        ans: '3<i>n</i> = 36',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: `These are the specific confusions that examiners exploit. Each reflects a distractor pattern that recurs in past papers ${EST}.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What it punishes', 'The correct recall'],
        rows: [
          [
            '<b>Exine vs intine swap</b>',
            'Sporopollenin (exine) is tough and fossil-forming; students confuse it with the inner cellulose–pectin layer.',
            'Exine = sporopollenin (exterior); Intine = cellulose + pectin (interior)',
          ],
          [
            '<b>Geitonogamy vs autogamy</b>',
            'Both involve pollen landing on the same flower’s stigma or a flower on the same plant. The genetic result is the same (self), but the mechanism differs.',
            'Geitonogamy = pollen to another flower on the same plant; autogamy = pollen to the same flower',
          ],
          [
            '<b>“Apomixis involves meiosis”</b>',
            'In the usual routes apomixis bypasses meiosis and fertilisation of the egg, but a common distractor reverses this.',
            'Apomixis skips meiosis and syngamy (in the usual routes): it is the opposite of the sexual route',
          ],
          [
            '<b>Emasculation on unisexual flowers</b>',
            'Students reflexively select emasculation as a step for all artificial hybridisation; it is unnecessary for dioecious female parents.',
            'Emasculation applies only to bisexual flowers',
          ],
          [
            '<b>“Endosperm is diploid”</b>',
            'The trap pairs the number of structures fusing (two things) with the number of nuclei involved (three: two polar + one male gamete).',
            'Endosperm = 3<i>n</i> (triploid)',
          ],
          [
            '<b>Synergid = egg apparatus; antipodal = opposite</b>',
            'The egg apparatus is at the micropylar end (not chalazal), and synergids bear the filiform apparatus.',
            'Egg apparatus = egg cell + two synergids, at the micropylar end; antipodals = chalazal end',
          ],
          [
            '<b>“Water pollination = water hyacinth, water lily”</b>',
            'These two are actually insect-pollinated (or wind-pollinated) because their flowers rise above the water; genuine hydrophily is shown by <i>Vallisneria</i>, <i>Zostera</i> and <i>Hydrilla</i>.',
            '<i>Vallisneria</i> is the textbook hydrophily example',
          ],
          [
            '<b>Chasmogamous = requires pollinator</b>',
            'Chasmogamous means the flower opens and exposes its organs: it can still self-pollinate if anthers and stigma are close.',
            'Cleistogamous = flowers stay closed (normally autogamous); chasmogamous = opens (may be self or cross)',
          ],
          [
            '<b>Anther wall layer order</b>',
            'epidermis → endothecium → middle layers → tapetum is the correct sequence; many options reverse the middle and endothecium positions.',
            'Epidermis is outermost; tapetum is innermost',
          ],
        ],
      },

      { t: 'part', title: 'Graded Practice Set' },
      {
        t: 'p',
        html: 'The following 10 questions span easy → hard. Each question is modelled on past NEET/CBSE patterns.',
      },
      {
        t: 'practice',
        items: [
          {
            q: '[Easy: direct recall] The exine of a pollen grain is made of a substance that resists high temperature, strong acids and alkalis. It is:<br><b>(a)</b> Cellulose<br><b>(b)</b> Pectin<br><b>(c)</b> Sporopollenin<br><b>(d)</b> Lignin',
            a: '(c) Sporopollenin. It resists high temperature, strong acids and alkalis, and no enzyme that degrades it is known: the reason pollen fossils survive for millions of years.',
          },
          {
            q: '[Easy: definition] The point at which the funiculus attaches to the body of the ovule is called the:<br><b>(a)</b> Chalaza<br><b>(b)</b> Hilum<br><b>(c)</b> Micropyle<br><b>(d)</b> Raphe',
            a: '(b) Hilum. The chalaza is the basal region where integuments originate; the micropyle is the pore at the micropylar end.',
          },
          {
            q: '[Moderate: application of the ploidy rule] In a plant where 2<i>n</i> = 24, how many chromosomes does the primary endosperm nucleus contain?<br><b>(a)</b> 12<br><b>(b)</b> 24<br><b>(c)</b> 36<br><b>(d)</b> 48',
            a: '(c) 36. The PEN forms by triple fusion: two polar nuclei (each <i>n</i> = 12) + one male gamete (<i>n</i> = 12) = 36 = 3<i>n</i>.',
          },
          {
            q: '[Moderate: statement bundle] Which of the following statements about a typical angiospermic embryo sac are correct?<br>(i) It is 8-nucleate and 7-celled at maturity.<br>(ii) It develops from the megaspore mother cell directly.<br>(iii) The egg apparatus lies at the micropylar end.<br>(iv) Endosperm development precedes embryo development.<br><b>(a)</b> (i) and (iii)<br><b>(b)</b> (i), (iii) and (iv)<br><b>(c)</b> (ii) and (iv)<br><b>(d)</b> (iii) and (iv)',
            a: '(b). (i) is true (7 cells, 8 nuclei). (ii) is false: the MMC undergoes meiosis first to produce the functional megaspore, which then develops into the embryo sac. (iii) is true. (iv) is true: the PEN divides before the zygote divides.',
          },
          {
            q: '[Moderate: artificial hybridisation logic] A breeder wishes to produce a hybrid using a bisexual-flowered plant as the female parent. Which step is essential for this cross but would be unnecessary if the female parent were unisexual?<br><b>(a)</b> Bagging<br><b>(b)</b> Collection of pollen from the male parent<br><b>(c)</b> Emasculation<br><b>(d)</b> Re-bagging',
            a: '(c) Emasculation. Removing the anthers before dehiscence prevents self-pollination in bisexual flowers. Unisexual female flowers have no anthers to remove, so emasculation is skipped.',
          },
          {
            q: '[Moderate: assertion–reason] <b>Assertion (A):</b> Apomictic seedlings are genetically identical to the parent plant.<br><b>Reason (R):</b> Apomixis involves meiosis followed by syngamy.<br><b>(a)</b> Both A and R are true and R explains A.<br><b>(b)</b> Both A and R are true but R does not explain A.<br><b>(c)</b> A is true but R is false.<br><b>(d)</b> A is false but R is true.',
            a: '(c). A is true: apomictic seedlings are clones. R is false: apomixis specifically skips meiosis and syngamy; that skipping is exactly why the offspring are genetically identical to the mother.',
          },
          {
            q: '[Hard: matching across concepts] Match each term in Column I with its correct example/description in Column II.<br>Column I: A. Parthenocarpy; B. Polyembryony; C. Apomixis; D. Nucellar embryony<br>Column II: I. Seed without fertilisation; II. Seedless fruit; III. More than one embryo per seed; IV. Diploid embryo from nucellus<br><b>(a)</b> A–I, B–II, C–III, D–IV<br><b>(b)</b> A–II, B–III, C–I, D–IV<br><b>(c)</b> A–II, B–I, C–III, D–IV<br><b>(d)</b> A–IV, B–III, C–I, D–II',
            a: '(b). Parthenocarpy = seedless fruit (II); Polyembryony = more than one embryo per seed (III); Apomixis = seed without fertilisation (I); Nucellar embryony = diploid embryo from maternal nucellar tissue (IV).',
          },
          {
            q: '[Hard: diagram identification + terminology] In a T.S. of a young anther, the innermost wall layer, which nourishes the sporogenous tissue, is the tapetum. The layer lying just beneath the epidermis, whose thickened walls bring about anther dehiscence, is the:<br><b>(a)</b> Epidermis<br><b>(b)</b> Endothecium<br><b>(c)</b> Middle layers<br><b>(d)</b> Connective',
            a: '(b) Endothecium. The endothecium lies between the epidermis and the middle layers; its cells develop fibrous wall thickenings, which bring about anther dehiscence. The middle layers are 1–2 thin layers that usually collapse; the epidermis is the outermost protective layer.',
          },
          {
            q: '[Hard: complex statement evaluation] Consider the following:<br>(i) Geitonogamy is genetically equivalent to autogamy.<br>(ii) A dioecious plant cannot undergo either autogamy or geitonogamy.<br>(iii) Xenogamy is the type of pollination that brings genetically different pollen.<br>(iv) Self-incompatibility prevents only autogamy, not geitonogamy.<br>Which combination is correct?<br><b>(a)</b> (i), (ii) and (iii)<br><b>(b)</b> (ii), (iii) and (iv)<br><b>(c)</b> (i), (iii) and (iv)<br><b>(d)</b> All are correct',
            a: '(a). (i) True: geitonogamy is pollination between flowers on the same plant; genetically it is selfing. (ii) True: a dioecious plant bears only one sex per individual, so neither autogamy nor geitonogamy is possible. (iii) True: xenogamy is pollination between different plants, which brings genetically different pollen. (iv) False: self-incompatibility blocks both autogamy and geitonogamy (pollen from the same plant, whether from the same flower or another flower, is rejected).',
          },
          {
            q: '[Hard: embryo-sac development + numerical reasoning] A student counts the nuclei in a cleared whole-mount of a mature embryo sac. If she counts 8 nuclei but misidentifies one cell as two separate cells, she will conclude the sac is:<br><b>(a)</b> 8-celled, 8-nucleate<br><b>(b)</b> 7-celled, 8-nucleate<br><b>(c)</b> 8-celled, 7-nucleate<br><b>(d)</b> 6-celled, 8-nucleate',
            a: '(a). The correct configuration is 7 cells, 8 nuclei (the central cell contains 2 polar nuclei). If she mistakes the central cell for two separate cells, she will count 8 cells instead of 7, but the nuclei remain 8. Option (b) is the true configuration of the embryo sac, but it is not what this student would conclude. The question tests whether you know why the cell and nucleus counts differ.',
          },
        ],
      },

      { t: 'part', title: 'Points Worth Pausing On' },
      {
        t: 'p',
        html: `1. <b>Why 7 cells but 8 nuclei?</b> The two polar nuclei share the single large central cell, so the embryo sac has seven cells but eight nuclei. Assertion–reason questions often ask for exactly this reason ${EST}.<br>2. <b>Geitonogamy versus autogamy.</b> Both are genetically selfing, but in autogamy the pollen reaches the stigma of the same flower, whereas in geitonogamy it reaches another flower of the same plant. Statement-bundle questions often test this distinction ${EST}, so keep it distinct in your notes.<br>3. <b>Apomixis, parthenocarpy and polyembryony.</b> These three are often tested together ${EST}, so compare them directly:`,
      },
      {
        t: 'table',
        title: null,
        head: ['Term', 'What happens', 'Fertilisation needed?'],
        rows: [
          ['Apomixis', 'Seed formed without meiosis and without fertilisation of the egg (clone of the mother)', 'No (for the embryo; in pseudogamy the endosperm may still need fertilisation)'],
          ['Parthenocarpy', 'Fruit develops without fertilisation, so it is seedless', 'No'],
          ['Polyembryony', 'More than one embryo in a seed (e.g. nucellar embryos in <i>Citrus</i>)', 'May or may not be needed'],
        ],
      },
    ],
  },
];
