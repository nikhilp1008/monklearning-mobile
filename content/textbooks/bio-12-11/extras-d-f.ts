import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 11 (Organisms and Populations), Additional topics D to F, word for word from the Class 12
 * Biology Master Reference (book pp. 641 to 655): D "Functional Responses: How Predators Respond to Prey Density"
 * (opens at line 15 of p. 641, after Addendum C's practice answers; its practice answers end on p. 643),
 * E "Human Population: Demographic Transition, Age Structure, and India’s Demographics" (p. 643 line 13 to p. 646
 * line 16, its practice answers at the top of p. 646) and F "What NEET Actually Asks" (the book's "Addendum P",
 * p. 646 line 17 to p. 655). Page 656 is the next chapter.
 *
 * Topic indexes: D = 7, E = 8, F = 9 (Topics 01 to 04 = 0 to 3, Additional A to F = 4 to 9).
 * No figure and no drawing in these pages (ruled tables only; Q10's three age pyramids are a text chart of block
 * characters, written as labelled rows). Where the book prints no answer line of its own, ans is ''. Em dashes are
 * written as colons or commas. Variables are italic with real subscripts; fractions are stacked.
 */

const EST = '(the book’s estimate from past papers, not official figures)';

/** A stacked fraction. */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const N = '<i>N</i>';
const K = '<i>K</i>';
/** (K − N)/K, stacked */
const KNK = fr(`${K} − ${N}`, K);
/** N/K, stacked */
const NK = fr(N, K);
/** K/2, stacked */
const K2 = fr(K, '2');
/** dN/dt, stacked */
const DNDT = fr('d<i>N</i>', 'd<i>t</i>');
/** rN(K − N)/K */
const LOGISTIC = `<i>rN</i> ${KNK}`;

export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic D · pp. 641–643 ─────────────────────────
  {
    n: 'D',
    title: 'Functional Responses: How Predators Respond to Prey Density',
    extra: true,
    kalam: 'A functional response describes how the rate of prey consumption by a single predator changes as prey density changes.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter describes predation as a (+, −) interaction and discusses the predator’s role in population regulation. It does not develop how the rate of predation changes with prey density: Holling’s three functional responses, which NEET has begun testing in assertion-reason format ${EST}. This is a distinct, quantifiable layer.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'A functional response describes how the rate of prey consumption by a single predator changes as prey density changes. Holling (1959) identified three types:',
      },
      {
        t: 'p',
        html: '<b>Type I (Linear).</b> The number of prey eaten per predator rises in direct proportion to prey density (the proportion of prey eaten stays constant) until the predator becomes satiated. Found in filter feeders and some parasites. Mathematically: <i>R</i> = <i>aTN</i>, where <i>R</i> is prey consumed per predator, <i>a</i> is the attack rate constant, <i>T</i> is total time and <i>N</i> is prey density.',
      },
      {
        t: 'p',
        html: `<b>Type II (Hyperbolic, decelerating).</b> The number of prey eaten per predator increases with prey density, but at a decelerating rate, because the predator spends time handling each captured prey (eating, digesting). The functional response is <i>R</i> = ${fr('<i>aTN</i>', '1 + <i>aT</i><sub>h</sub><i>N</i>')}, where <i>T</i><sub>h</sub> is handling time per prey. At high prey density, the predator is saturated and cannot eat faster regardless of prey abundance. Examples often given: spiders and beetles.`,
      },
      {
        t: 'p',
        html: `<b>Type III (Sigmoid).</b> At very low prey density, the predator rarely encounters prey and spends time searching elsewhere (low efficiency). At intermediate density, the predator “learns” to hunt the prey and efficiency rises. At high density, it saturates like Type II. The functional response is <i>R</i> = ${fr('<i>aTN</i><sup>2</sup>', '1 + <i>aT</i><sub>h</sub><i>N</i><sup>2</sup>')}. Examples often given: foxes and wolves (vertebrate predators that learn).`,
      },
      {
        t: 'p',
        html: 'The key exam point: Type III responses can stabilize predator-prey dynamics because at low prey density the predator barely affects the prey population (giving prey a “refuge”), while Type II responses can drive prey to extinction more readily, because the proportion of prey killed is highest when prey are scarce.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Classifying a Functional Response.</b> A species of spider catches fruit flies in a laboratory arena. As fly density increases, the number of flies caught per spider rises quickly at first, but the increase slows progressively and levels off beyond a certain density. Classify this functional response and give the reason for the shape.',
        steps: [
          'This is a Type II functional response. The spider has a fixed handling time: it must capture, envenomate, wrap, and consume each fly before pursuing the next. At low prey density the spider spends most of its time searching, so each additional fly adds almost proportionately to the catch. As density rises, more and more of its time goes into handling prey, so the increase slows. At high density the spider is always handling a recent catch and cannot process more, so the catch rate saturates.',
        ],
        ans: 'Type II functional response; saturation occurs because handling time limits the rate at which each predator can consume prey.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Explaining Stability in Predator-Prey Systems.</b> A Type III functional response is considered more stabilising for prey populations than a Type II response. Why?',
        steps: [
          'In a Type III response, at very low prey density the predator efficiency is low (the predator rarely encounters prey and may switch to other food sources), so the prey population is given a “refuge” from predation and can recover. This prevents the predator from driving the prey to extinction, stabilising the system. In Type II, the predator kills a high proportion of the prey even at low prey density (mortality is inversely density-dependent), so a scarce prey population can be driven to extinction; in Type III the proportion killed is low when prey are scarce.',
        ],
        ans: 'Type III gives prey a low-density refuge because predator efficiency is low at low prey density; Type II lacks this stabilising feature.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] Name the three types of functional responses identified by Holling and state the key feature that distinguishes Type III from Type II.',
            a: 'Type I (linear), Type II (hyperbolic/decelerating), Type III (sigmoid). Type III differs by having a very low proportion of prey killed at low prey density (predator inefficiency or switching behaviour), creating a refuge for prey.',
          },
          {
            q: '[NEET] At very low prey density, which functional response gives the prey population the most protection from predation, and why?',
            a: 'Type III: because predator efficiency is very low at low prey density, giving the prey population a degree of protection from predation pressure.',
          },
          {
            q: '[NEET] State one example each of an organism showing Type I, Type II, and Type III functional responses.',
            a: 'Type I: filter feeders (e.g., barnacles filtering plankton). Type II: spiders, beetles (examples often given). Type III: wolves, foxes, vertebrate predators that learn to hunt (examples often given).',
          },
          {
            q: '[NEET High-Difficulty] Assertion: A predator with a Type II functional response is more likely to drive its prey to extinction than a predator with a Type III response. Reason: In Type II, the proportion of prey killed is highest at low prey density, whereas in Type III the proportion killed is low when prey are scarce. Choose the correct option:<br><b>(a)</b> Both A and R are true and R is the correct explanation of A<br><b>(b)</b> Both A and R are true but R is not the correct explanation of A<br><b>(c)</b> A is true, R is false<br><b>(d)</b> A is false, R is true',
            a: '(a) Both A and R are true, and R is the correct explanation of A.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 643–646 ─────────────────────────
  {
    n: 'E',
    title: 'Human Population: Demographic Transition, Age Structure, and India’s Demographics',
    extra: true,
    kalam: 'The age-sex pyramid of a country directly reflects its demographic stage.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter shows the J-shaped and S-shaped growth curves and reads age pyramids in general (Topic 03, Figure 11.3: broad base expanding, bell stable, urn declining), but it touches human populations only in passing (Malthus, in Topic 03): it does not cover the mechanism of demographic transition, the pyramids of real countries or India’s demographic position. These are high-yield CUET and NEET topics ${EST}.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Demographic transition.</b> The shift from high birth and death rates (Stage 1) to low birth and death rates (Stage 4) as a country develops. Four stages:',
      },
      {
        t: 'table',
        title: null,
        head: ['Stage', 'Birth rate (per 1000 per year)', 'Death rate (per 1000 per year)', 'Population Growth', 'Example'],
        rows: [
          ['Stage 1', 'High (~35–40)', 'High (~30–35)', 'Near zero, fluctuating', 'Pre-industrial societies'],
          ['Stage 2', 'High (~35–40)', 'Falls rapidly (medicine, sanitation)', 'High positive growth', 'India 1950s–1970s, Bangladesh in earlier decades'],
          ['Stage 3', 'Falls gradually (literacy, urbanisation, family planning)', 'Low and stable', 'Growth rate declines', 'India 1990s–2010s'],
          ['Stage 4', 'Low (~12–15)', 'Low (~8–10)', 'Near zero or slight growth', 'Many developed countries (for example the United Kingdom, Sweden in earlier decades)'],
        ],
      },
      {
        t: 'p',
        html: 'The fall in death rate that starts Stage 2 is driven by improved healthcare, sanitation and nutrition. The key transition from Stage 2 to Stage 3 is a fall in the birth rate, driven by female literacy and employment (smaller desired family size), urbanisation (higher cost of raising children) and family planning programmes.',
      },
      {
        t: 'p',
        html: '<b>Interpreting human age pyramids.</b> The age-sex pyramid of a country directly reflects its demographic stage:<br>• <b>Expanding pyramid</b> (broad base, narrow top): Many young dependents, high birth rate, rapid growth. This is a Stage 1 and 2 pattern. India’s pyramid until recently.<br>• <b>Stationary pyramid</b> (roughly rectangular): Balanced age distribution, low birth and death rates. Stage 3 or 4. Many developed countries in earlier decades.<br>• <b>Contracting pyramid</b> (narrow base, wide middle/top): Low birth rate, ageing population, birth rate below death rate. Some countries now (for example Japan, Germany) are beyond Stage 4, sometimes called a Stage 5.',
      },
      {
        t: 'p',
        html: '<b>India’s demographic position.</b> India’s death rate began to fall in the first half of the twentieth century and population growth accelerated after about 1950 (Stage 2, 1950s–1970s); the birth rate has fallen steadily since then, moving India into Stage 3 from the 1990s. The total fertility rate (TFR) fell below replacement level (2.1) in several states well before 2010 and nationally by about 2020. India’s population pyramid is transitioning from expanding toward stationary. The “demographic dividend” refers to the window of opportunity (roughly 2005–2055 on most estimates) when the working-age population (15–64 years) is proportionally large relative to dependents, offering a potential economic growth boost if productively employed. This dividend will close as the population ages. These dates are approximate.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Matching Country to Demographic Stage.</b> Country A: Birth rate 38 per 1000, death rate 12 per 1000. Country B: Birth rate 12 per 1000, death rate 10 per 1000. Assign each country to its demographic stage.',
        steps: [
          'Country A: High birth rate and a low death rate (a fall already under way) = Stage 2 (expanding population with high growth). Country B: Both rates low = Stage 4 (stationary population, near-zero growth).',
        ],
        ans: 'Country A is Stage 2; Country B is Stage 4.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Interpreting India’s Age Pyramid.</b> India’s age pyramid shows a broad base of individuals below 15 years, a bulging middle of 15–64 years, and a narrow top above 64 years. What does this indicate about India’s demographic stage, and what challenge does it pose?',
        steps: [
          'The wide base shows that fertility was high in the recent past (many children). The bulging working-age group indicates the demographic transition is underway. India is in Stage 3 of the transition: growth rate is positive but declining. The challenge is to provide productive employment to the large working-age cohort; if jobs are insufficient, the demographic dividend becomes a demographic burden. The narrow top shows that elderly care infrastructure is still small but will grow.',
        ],
        ans: 'India is in Stage 3 (late transition); the large working-age population creates both a demographic dividend (potential economic growth) and a challenge (employment generation).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Why Does the Death Rate Fall Before the Birth Rate?</b> In the demographic transition, the death rate falls before the birth rate. Explain why this creates a population explosion in Stage 2.',
        steps: [
          'Before the transition, birth and death rates are both high and roughly balanced (Stage 1), giving zero or slow population growth. When public health improves (medicine, sanitation, nutrition, vaccination), the death rate drops rapidly because it is sensitive to these interventions. The birth rate, however, is controlled by social factors (cultural preference for large families, lack of education, limited family planning access) that change more slowly than medical improvements. The gap between a falling death rate and a still-high birth rate produces a period of rapid population growth, the population explosion of Stage 2.',
        ],
        ans: 'Death rate falls rapidly due to improved public health; birth rate falls slowly due to slower social change. The resulting gap produces high positive growth in Stage 2.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] Define the demographic transition and state what characterises Stage 2 of the transition.',
            a: 'Demographic transition: the shift from high birth and death rates to low birth and death rates through four stages as a country develops. Stage 2 is characterised by a high birth rate and a rapidly falling death rate, producing a period of rapid population growth.',
          },
          {
            q: '[NEET] Differentiate between an expanding population pyramid and a stationary population pyramid in terms of birth rate, death rate, and growth rate.',
            a: 'Expanding pyramid: high birth rate, falling death rate, high positive growth (Stage 2). Stationary pyramid: low and balanced birth and death rates, near-zero growth (Stage 3 or 4).',
          },
          {
            q: '[CBSE] What is the demographic dividend? State two conditions necessary to convert the demographic dividend into economic benefit.',
            a: 'The demographic dividend is the period when the working-age population is proportionally large relative to dependents. Conditions: (i) productive employment for the working-age population, (ii) investment in education and health to build human capital.',
          },
          {
            q: '[NEET] Why do developed countries with very low birth rates (below replacement) not experience rapid population decline?',
            a: 'Because deaths also stay low (long life expectancy), the large cohorts born earlier are still alive or of reproductive age, and immigration can offset the shortfall, so the population falls only slowly.',
          },
          {
            q: '[NEET High-Difficulty] Assertion: India’s total fertility rate (TFR) falling below 2.1 does not immediately stop population growth. Reason: The population continues to grow due to population momentum: a large proportion of the population is already in the reproductive age group. Choose the correct option:<br><b>(a)</b> Both A and R are true and R is the correct explanation of A<br><b>(b)</b> Both A and R are true but R is not the correct explanation of A<br><b>(c)</b> A is true, R is false<br><b>(d)</b> A is false, R is true',
            a: '(a) Both A and R are true, and R is the correct explanation of A.',
          },
          {
            q: '[CUET] According to the United Nations estimate for 2023, the population of India is approximately:<br><b>(a)</b> 960 million<br><b>(b)</b> 1,020 million<br><b>(c)</b> 1,430 million<br><b>(d)</b> 2,100 million',
            a: '(c) Approximately 1,430 million (1.43 billion, the UN estimate for 2023). India passed 1 billion in about 2000, which is why (b) is a trap for older data.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 646–655 ─────────────────────────
  {
    n: 'F',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'Past-paper questions on this chapter fall into five groups, by the book’s estimate.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: `In past NEET papers, questions from this chapter fall into five groups. The shares below are approximate and show where to spend revision time ${EST}:`,
      },
      {
        t: 'table',
        title: null,
        head: ['Question group', 'Approximate share'],
        rows: [
          ['<b>Population Interactions</b> (+/−/0 table, named examples)', 'about 30 %'],
          ['<b>Abiotic Factors</b> (temperature, salinity, tolerance terms)', 'about 25 %'],
          ['<b>Population Attributes & Growth</b> (equations, age pyramids)', 'about 20 %'],
          ['<b>Responses & Adaptations</b> (regulate/conform, dormancy, adaptation types)', 'about 20 %'],
          ['<b>Diagram-based</b> (biome chart, organismic-response flow, age pyramid)', 'about 5 %'],
        ],
      },

      { t: 'part', title: 'The Recurring Archetypes' },

      { t: 'p', html: '<b>1. Definition / Classification (e.g., “stenothermal,” “euryhaline”)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A term is given; the student picks the correct meaning or the correct example. The distractor is usually the other suffix family (-thermal for temperature, -haline for salinity).<br><b>The approach that cracks it:</b> Decode in two strokes: first the suffix, then the prefix. The suffix thermal = temperature and the suffix haline = salinity; the prefix steno = narrow and the prefix eury = wide. Eliminate any option whose suffix does not match the stem in the question.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Organisms restricted to a narrow range of temperature are called:<br><b>(a)</b> stenothermal<br><b>(b)</b> eurythermal<br><b>(c)</b> thermophilic<br><b>(d)</b> ectothermal',
        steps: [
          'Narrow range → steno-; temperature → -thermal. Option (c) is a habitat preference, not a tolerance classification; (d) ectothermal describes animals whose body temperature depends on the environment, a thermoregulation category rather than a tolerance range.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>2. Sign-Pair Matching (the +/−/0 interaction table)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A scenario or named pair is described; the student must identify the interaction type or its sign pattern. Canonical examples: cattle egret, lichen, <i>Cuscuta</i>, fig–wasp, brood parasitism.<br><b>The approach that cracks it:</b> Assign the two signs first, then read off the table. “Cattle egret benefits; cattle neither gain nor lose” → (+, 0) → commensalism. Do not over-read a benefit for the unaffected partner.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'A wasp pollinating a fig flower is an example of:<br><b>(a)</b> commensalism<br><b>(b)</b> amensalism<br><b>(c)</b> parasitism<br><b>(d)</b> mutualism',
        steps: [
          'Both partners benefit: the wasp gets a brood site; the fig gets pollinated. Neither can reproduce without the other. This is the classic obligate mutualism of the NCERT.',
        ],
        ans: '(d)',
      },

      { t: 'p', html: '<b>3. Assertion–Reason (statement pairs with four A–R options)</b>' },
      {
        t: 'p',
        html: `<b>What it looks like:</b> An assertion (A) and a reason (R) are given; the student chooses: (a) both true, R explains A; (b) both true, R does not explain A; (c) A true, R false; (d) A false, R true.<br><b>The approach that cracks it:</b> Judge A and R independently before combining them. Common NEET trap: both statements are true but R does not explain A (for example R is merely a fact about the same situation), making (b) the correct answer instead of (a) ${EST}.`,
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Assertion (A):</b> In a sigmoid growth curve, the population finally stabilises. <b>Reason (R):</b> Finally, the birth rate and the death rate become equal.<br><b>(a)</b> Both A and R are true and R is the correct explanation of A<br><b>(b)</b> Both A and R are true but R is not the correct explanation of A<br><b>(c)</b> A is true, R is false<br><b>(d)</b> A is false, R is true',
        steps: [
          `When ${N} reaches ${K}, the logistic term ${KNK} falls to zero, so ${DNDT} = 0: the population stabilises. Births fall and deaths rise as intraspecific competition intensifies until the two rates are equal, so R correctly explains A.`,
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>4. Growth-Model Identification (J-shape vs S-shape, equation recognition)</b>' },
      {
        t: 'p',
        html: `<b>What it looks like:</b> A description or equation is given; the student identifies the model or its components (<i>r</i>, ${K}, (1 − ${NK})).<br><b>The approach that cracks it:</b> ${DNDT} = <i>rN</i> → exponential → J-shaped → unlimited resources → no ${K}. ${DNDT} = ${LOGISTIC} → logistic → S-shaped → finite ${K} → growth stops at ${K}, peaks at ${K2}.`,
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: `In the logistic growth equation, the factor (1 − ${NK}) represents:<br><b>(a)</b> carrying capacity<br><b>(b)</b> intrinsic rate of natural increase<br><b>(c)</b> environmental resistance (the fraction of carrying capacity not yet used)<br><b>(d)</b> biotic potential`,
        steps: [
          `${KNK} = 1 − ${NK} is the fraction of ${K} still unused. As ${N} approaches ${K} it falls to 0, which is the effect of rising environmental resistance (the limiting factors).`,
        ],
        ans: '(c)',
      },

      { t: 'p', html: '<b>5. Adaptation-Type Classification (morphological / physiological / behavioural)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> An adaptation is described; the student names the category.<br><b>The approach that cracks it:</b> Ask what changed. Body form or structure → morphological. Internal chemistry or physiology → physiological. What the organism does → behavioural.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Basking by desert lizards in sun and hiding in burrows are examples of:<br><b>(a)</b> morphological adaptation<br><b>(b)</b> physiological adaptation<br><b>(c)</b> biochemical adaptation<br><b>(d)</b> behavioural adaptation',
        steps: [
          'Both behaviours are actions the lizard chooses in response to temperature, not a change in body form or chemistry. Behavioural adaptations are changes in what the organism does in response to environmental conditions.',
        ],
        ans: '(d)',
      },

      { t: 'p', html: '<b>6. Statement-Based / Multiple-Correct (groups of five statements, pick the correct combination)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Five statements (i)–(v) are listed; the student selects the option listing which are correct.<br><b>The approach that cracks it:</b> Evaluate each statement on its own merit against NCERT facts. Do not assume a block of similar-looking statements are all right or all wrong.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '(i) Light is essential for photosynthesis, on which most life on Earth depends.<br>(ii) Many species of small plants growing under a forest canopy are adapted to photosynthesise under very low light.<br>(iii) UV radiation is harmless to most organisms.<br>(iv) Photoperiodic requirement is essential for many plants for flowering.<br>(v) Red algae can live in deeper water because of phycoerythrin.<br>How many statements are correct?',
        steps: [
          '<b>Analysis:</b><br>(i) True: photosynthesis requires light.<br>(ii) True: many small herbs and shrubs of the forest floor are adapted to photosynthesise in the low light they receive (NCERT).<br>(iii) False: NCERT states that the UV component of sunlight is harmful to many organisms; UV-B damages DNA and causes sunburn.<br>(iv) True: photoperiod regulates flowering in many angiosperms.<br>(v) True: phycoerythrin captures blue-green light that penetrates deeper water.',
        ],
        ans: '4 statements are correct (all except iii).',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: `The distractors in this chapter’s questions cluster around a small number of recurring errors ${EST}:`,
      },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What it punishes', 'How to avoid it'],
        rows: [
          ['<b>Suffix swap</b>', 'Reading stenohaline as “narrow temperature”', 'Haline = salt (think halite); thermal = temperature. Keep the two families apart.'],
          [
            '<b>Dormancy blur</b>',
            'Confusing hibernation (winter) with aestivation (summer) or diapause (suspended development)',
            'Tie each to its trigger: cold → hibernate; heat/drought → aestivate; adverse period → diapause.',
          ],
          [
            '<b>Over-reading commensalism</b>',
            'Adding a benefit to the unaffected partner (e.g., “the cattle also benefit from the egret”)',
            'Commensalism is (+, 0). If both benefit it is mutualism.',
          ],
          [
            '<b>Predation vs parasitism</b>',
            'Both are (+, −); the student must distinguish by lifestyle',
            'Predator: usually free-living, kills its prey and eats it; parasite: usually lives on or in a host and harms it more slowly.',
          ],
          [
            '<b>Logistic vs exponential</b>',
            'Matching the wrong equation or curve to the wrong model',
            `<i>rN</i> alone → exponential (J); ${LOGISTIC} → logistic (S). If ${K} is mentioned, it usually points to logistic.`,
          ],
          [
            `${KNK} <b>mislabeling</b>`,
            'Calling it “carrying capacity” or “intrinsic rate”',
            'It is the <b>room left</b>: the fraction of <i>K</i> still unused, which shrinks as environmental resistance grows.',
          ],
          [
            '<b>Age-pyramid base reading</b>',
            'Narrow base → “many young” (wrong)',
            'Narrow base = few young = the population will shrink if the pattern continues (urn shape). Broad base = many young = expanding.',
          ],
          [
            '<b>Adaptation type mix-up</b>',
            'Describing a physiological change as a behavioural one, or vice versa',
            'Ask: did the body change form (morphological), chemistry (physiological), or action (behavioural)?',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'p',
        html: 'Work through these questions in order, from direct recall to multi-step problems.',
      },
      {
        t: 'practice',
        items: [
          {
            q: '[Level 1: Direct recall] The salinity of typical seawater, in parts per thousand, is closest to:<br><b>(a)</b> 0–5<br><b>(b)</b> 10–15<br><b>(c)</b> 30–35<br><b>(d)</b> 100+',
            a: '(c) Seawater is about 30–35 ppt. NCERT gives below 5 ppt for inland waters (fresh water proper is below about 0.5 ppt) and above 100 ppt for hypersaline lagoons.',
          },
          {
            q: '[Level 1: Direct recall] An orchid growing on a mango branch, where the mango is neither helped nor harmed, illustrates:<br><b>(a)</b> mutualism<br><b>(b)</b> parasitism<br><b>(c)</b> commensalism<br><b>(d)</b> amensalism',
            a: '(c) The orchid (epiphyte) benefits from structural support; the mango is unaffected: (+, 0) → commensalism.',
          },
          {
            q: '[Level 1: Direct recall] A bear entering a dormant state during winter to escape cold is said to:<br><b>(a)</b> aestivate<br><b>(b)</b> migrate<br><b>(c)</b> hibernate<br><b>(d)</b> diapause',
            a: '(c) Hibernation is triggered by cold/winter conditions. Aestivation is summer/dry-season dormancy; diapause is suspended development (typically in zooplankton or embryos).',
          },
          {
            q: '[Level 2: Application] A marine, stenohaline fish is transferred from seawater to freshwater. The most immediate threat is:<br><b>(a)</b> salt diffusion out of the body<br><b>(b)</b> water flooding into the body by osmosis<br><b>(c)</b> oxygen unavailability<br><b>(d)</b> enzyme denaturation from temperature change',
            a: '(b) Freshwater is hypotonic relative to the fish’s body fluids; water moves in by osmosis. A stenohaline marine fish cannot osmoregulate effectively against this gradient. Trap: (a) is a real but slower, secondary effect; the immediate and chief threat is the inflow of water, which swells the cells.',
          },
          {
            q: `[Level 2: Application] In the logistic growth equation ${DNDT} = ${LOGISTIC}, the growth rate is maximal when ${N} equals:<br><b>(a)</b> 0<br><b>(b)</b> ${K}<br><b>(c)</b> ${K2}<br><b>(d)</b> 2${K}`,
            a: `(c) The logistic growth rate ${LOGISTIC} is a downward-opening parabola in ${N}; it equals zero at ${N} = 0 and ${N} = ${K}, so it peaks at the midpoint ${N} = ${K2}. This is the point of fastest growth in the logistic model.`,
          },
          {
            q: '[Level 2: Application] Which of the following is not a morphological adaptation for water conservation in desert plants?<br><b>(a)</b> Thick cuticle<br><b>(b)</b> Sunken stomata<br><b>(c)</b> CAM photosynthesis<br><b>(d)</b> Spines replacing leaves',
            a: '(c) CAM photosynthesis is a <b>physiological</b> adaptation: it is a biochemical pathway (PEP carboxylase in the dark). The thick cuticle, sunken stomata, and leaf-to-spine conversion are all structural (morphological) changes.',
          },
          {
            q: '[Level 3: Reasoning] Assertion (A): Very small animals are rarely found in polar regions.<br>Reason (R): Small animals have a large surface-area-to-volume ratio and lose heat rapidly, making thermoregulation prohibitively expensive in extreme cold.<br><b>(a)</b> Both A and R are true and R correctly explains A<br><b>(b)</b> Both A and R are true but R does not explain A<br><b>(c)</b> A is true, R is false<br><b>(d)</b> A is false, R is true',
            a: '(a) The surface-area-to-volume argument is the mechanistic basis for why small endotherms cannot survive polar cold without enormous metabolic investment. R is the correct evolutionary explanation for A. NCERT’s statement is about small endotherms such as shrews and hummingbirds; small ectotherms (springtails, mites) do live in polar regions.',
          },
          {
            q: '[Level 3: Reasoning] Two barnacle species, <i>Balanus</i> and <i>Chthamalus</i>, occupy the same rocky shore. <i>Balanus</i> (the superior competitor) excludes <i>Chthamalus</i> from the lower intertidal zone. When <i>Balanus</i> is experimentally removed, <i>Chthamalus</i> expands into the vacated zone. This expansion of <i>Chthamalus</i> after its rival is removed is called:<br><b>(a)</b> competitive exclusion<br><b>(b)</b> competitive release<br><b>(c)</b> resource partitioning<br><b>(d)</b> amensalism',
            a: '(b) Competitive <b>release</b> occurs when a superior competitor is removed, allowing the suppressed species to expand. Competitive <b>exclusion</b> is the initial elimination by the superior competitor. Resource partitioning involves the two species dividing the resource rather than one eliminating the other.',
          },
          {
            q: '[Level 3: Reasoning] A population of 200 bacteria grows exponentially with <i>r</i> = 0.3 h<sup>−1</sup>. How many will be present after 10 hours? (Take <i>e</i><sup>3</sup> ≈ 20.1)<br><b>(a)</b> ~400<br><b>(b)</b> ~4 000<br><b>(c)</b> ~20 000<br><b>(d)</b> ~60 000',
            a: '(b) Using <i>N</i><sub><i>t</i></sub> = <i>N</i><sub>0</sub><i>e</i><sup><i>rt</i></sup> = 200 × <i>e</i><sup>0.3 × 10</sup> = 200 × <i>e</i><sup>3</sup> ≈ 200 × 20.1 = 4 020 ≈ 4 000, which is option (b). Recognition: <i>rt</i> = 3 is a clean exponent, so only <i>e</i><sup>3</sup> has to be evaluated.',
          },
          {
            q: '[Level 4: Multi-step / High-difficulty] Three age pyramids have the bar lengths below (each bar is one age group; pre-reproductive is the base). Which population is declining?<br>Population (i): pre-reproductive 10, reproductive 6, post-reproductive 2<br>Population (ii): pre-reproductive 7, reproductive 8, post-reproductive 6<br>Population (iii): pre-reproductive 5, reproductive 9, post-reproductive 7<br><b>(a)</b> Population (i)<br><b>(b)</b> Population (ii)<br><b>(c)</b> Population (iii)<br><b>(d)</b> All three are stable',
            a: '(c) Population (iii) has a narrow pre-reproductive base that is wider in the reproductive and post-reproductive groups: the urn shape characteristic of a declining population, because too few young individuals are entering the reproductive group. Population (i) is expanding (broad base tapering upward); population (ii) is stable (roughly equal bars across age groups).',
          },
          {
            q: `[Level 4: Multi-step / High-difficulty] Assertion (A): In the logistic growth model, the term (1 − ${NK}) falls towards zero as environmental resistance increases.<br>Reason (R): Environmental resistance is the set of limiting factors (food, space, predation) that prevent a population from reaching its biotic potential.<br><b>(a)</b> Both A and R are true and R correctly explains A<br><b>(b)</b> Both A and R are true but R does not explain A<br><b>(c)</b> A is true, R is false<br><b>(d)</b> A is false, R is true`,
            a: `(a) ${KNK} = 1 − ${NK} is the fraction of ${K} still available; it falls as the limiting factors (food, space, predation) bite. Both statements are true and R explains A.`,
          },
          {
            q: '[Level 4: Multi-step / High-difficulty] The interaction between <i>Cuscuta</i> (a total stem parasite that has lost its leaves and chlorophyll) and its host hedge plant is:<br><b>(a)</b> (+, +); mutualism<br><b>(b)</b> (+, −); parasitism<br><b>(c)</b> (+, 0); commensalism<br><b>(d)</b> (−, −); competition',
            a: '(b) <i>Cuscuta</i> draws its food through haustoria from the host’s vascular tissue. The host is harmed; <i>Cuscuta</i> benefits: (+, −). Note: this is a <b>total stem parasite</b>, not an epiphyte (which would be commensalism). The loss of leaves and of (almost all) chlorophyll is evidence of its obligate parasitic lifestyle: it no longer needs to photosynthesise because it takes the host’s food.',
          },
        ],
      },

      { t: 'part', title: 'Key Points to Remember' },
      {
        t: 'p',
        html: `1. <b>Practise the growth equations numerically.</b> Be ready to compute ${N}<sub><i>t</i></sub> from given <i>r</i> and <i>t</i>, to place the logistic peak at ${K2}, and to tell the unused fraction of ${K}, ${KNK}, apart from biotic potential. Questions often combine these in multi-step form ${EST}.<br>2. <b>Know the named examples for every sign pair.</b> Lichen, mycorrhiza and fig–wasp (mutualism); cattle egret and sea anemone–clownfish (commensalism; the clownfish pair is often treated as mutualism); brood parasitism by the cuckoo and egg mimicry (parasitism); and <i>Penicillium</i> (amensalism) are frequently used in matching and statement-based questions ${EST}.<br>3. <b>Tie each dormancy type to its trigger.</b> Hibernation is winter dormancy, aestivation is summer or dry-season dormancy, and diapause is a suspended stage of development. Matching the trigger to the term is what questions test.`,
      },
    ],
  },
];
