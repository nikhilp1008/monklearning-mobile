import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12, Chapter 11 (Organisms and Populations), Topics 01 to 03: pp. 601
 * to 624 of the Class 12 Biology Master Reference, word for word. The chapter
 * title page (p. 600) and the contents box (p. 601) are not copied. Topic 01
 * (pp. 601 to 608) starts low on p. 601; Topic 02 (pp. 609 to 615) and Topic 03
 * (pp. 616 to 624) start at the top of their pages. Each topic is cut at the
 * book's eight numbered sections. Figures 11.1 (caption p. 604, drawn p. 605),
 * 11.2 (caption p. 612, drawn p. 613), 11.3 (caption p. 617, drawn p. 618) and
 * 11.4 and 11.5 (captions p. 620, drawn p. 621) are redrawn in
 * lib/diagrams/biology-12-11.ts; these pages hold no unnumbered drawing.
 * Em dashes are written as colons, commas or brackets; "subtopic" is "topic";
 * emphasis italics are dropped; population variables are italic with real
 * subscripts; every fraction is stacked.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 601–608 ─────────────────────────
  {
    n: '01',
    title: 'Organism and Its Environment: Levels of Organisation, Niche & Major Abiotic Factors',
    kalam:
      'Ecology is the study of the interactions among organisms, and between an organism and its physical (abiotic) environment.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Organisms and Populations is a high-yielding ecology chapter for NEET (typically 2–3 questions, often from abiotic factors and adaptations; the book’s estimate from past papers, not official figures). CBSE Boards ask 1–2 mark definitions (stenothermal/eurythermal, niche) and the occasional diagram-based question on levels of organisation. CUET favours direct factual recall: salinity ranges, “most ecologically relevant factor,” term-matching. This opening topic sets the vocabulary the entire chapter reuses, so locking it down early pays off in every later topic.',
      },
      {
        t: 'p',
        html: 'Picture standing at a railway window on the long haul from Kanyakumari up to Jammu. In a single journey you slide past coconut palms and paddy in the deep south, then thorny scrub and the bare Deccan, then the wheat-and-mustard plains, and finally apple orchards and deodar on the Himalayan slopes. Nobody planted these as a deliberate sequence. Each set of organisms is simply living where the physical conditions let it survive and reproduce, and refuses to live where they don’t. That refusal, and the reasons behind it, is what ecology studies.',
      },
      {
        t: 'p',
        html: 'Ecology is the study of the interactions among organisms, and between an organism and its physical (abiotic) environment. It works at four nested levels of biological organisation: the individual organism, the population (all individuals of one species in an area), the community (all the different populations sharing that area), and the biome (a large climatic zone with its characteristic vegetation, like tropical rainforest or desert). This chapter stays with the organism and the population, and with the interactions between populations (Topic 04). At the organismic level, ecology is really physiological ecology: we ask how a single organism is built and behaves so that it can cope with the conditions handed to it.',
      },
      {
        t: 'p',
        html: 'Why does the map of life look the way it does? Trace the cause backwards and you keep arriving at two master variables: temperature and water (precipitation). The Earth’s tilt and its orbit hand different latitudes different amounts of solar energy across the year, which sets temperature; temperature and rainfall together carve the planet into biomes. Every other abiotic factor (light, soil) layers on top of these two. So when you ask “why does the mango thrive in the plains but the apple needs Himachal?”, the honest first answer is almost always: temperature.',
      },
      {
        t: 'p',
        html: 'Temperature gets top billing, but the other three factors pull real levers worth naming. Water is the second master variable on land: productivity and distribution track how much is available, which is why a desert and a rainforest at the same temperature look nothing alike. In water bodies the decisive twist is not the amount of water but its salinity: an organism’s cells are constantly trading water with the medium by osmosis, so a freshwater species and a marine species face opposite problems and need opposite plumbing. Light is the currency of photosynthesis (only part of the spectrum, the photosynthetically active radiation, is usable), and beyond energy it is a clock: the changing photoperiod cues flowering in plants and the timing of reproduction, migration, and foraging in animals. A fern on a shaded forest floor and a sun-loving grass are sorted by exactly this factor. Soil, finally, is rarely glamorous but quietly decisive: its texture, grain size, pH, mineral content, and water-holding capacity decide which plants can root, and the plants decide which animals can live there. None of these acts in isolation; they stack on top of temperature to produce the actual living conditions an organism meets.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Don’t imagine an organism as a passive resident of a fixed address. Imagine it as a small chemical factory that only runs within a narrow band of operating conditions. Push the temperature too high and the enzymes denature; too low and the reactions crawl to a stop. Each species has its own tolerance band. The geography of life is really just a map of where each factory’s operating conditions happen to be met.',
      },
      {
        t: 'p',
        html: 'Two more ideas finish the setup. A habitat is where an organism lives: its physical address. Its niche is how it makes a living there: its functional role, the way it captures and uses resources, the conditions under which it can persist. The classic line is: habitat is the address, niche is the profession. Two species can share a habitat yet occupy different niches (a tree’s canopy birds versus its bark-probing woodpeckers), and this niche difference is one thing that allows many species to share a habitat.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> This topic deliberately isolates the abiotic (non-living) environment: temperature, water, light, soil. The biotic interactions (predator, prey, competitor, parasite) are real and powerful but are held back for the population topics. Also note that “most ecologically relevant factor” is a statement about general ecological influence, not a claim that temperature limits every organism: a cave organism may be limited by light/food, a desert plant by water. The framework tells you which factor to suspect first, not a universal verdict.',
      },

      { t: 'part', title: 'Key definitions and diagnostic features' },
      { t: 'p', html: '<b>Core terms</b>' },
      {
        t: 'p',
        html: '• <b>Ecology</b>: study of interactions among organisms and between organisms and their abiotic environment.<br>• <b>Levels of organisation</b>: organism → population → community → biome (chapter covers organism and population, and the interactions between populations).<br>• <b>Habitat</b>: the specific physical place an organism naturally lives (“address”).<br>• <b>Ecological niche</b>: the organism’s functional role and the total set of conditions/resources it uses (“profession”).<br>• <b>Abiotic factors</b>: non-living physical/chemical components: temperature, water, light, soil.',
      },
      {
        t: 'table',
        title: 'The four major abiotic factors',
        head: ['Factor', 'Why it matters ecologically', 'Key quantitative anchor'],
        rows: [
          [
            'Temperature',
            'Most ecologically relevant; governs enzyme kinetics, metabolic rate, and hence distribution',
            'Tolerated range spans below 0 °C (polar areas, high altitudes) to above 50 °C (tropical deserts in summer); thermal springs and hydrothermal vents exceed 100 °C',
          ],
          [
            'Water',
            'Productivity and distribution on land track water availability; in water bodies, salinity is decisive',
            'Salinity (ppt): inland waters < 5; sea 30–35; hypersaline lagoons > 100',
          ],
          [
            'Light',
            'Drives photosynthesis (PAR); photoperiod cues flowering, foraging, reproduction; UV is harmful',
            'Varies with depth (aquatic), canopy layer, season, latitude',
          ],
          [
            'Soil',
            'Texture, grain size, pH, mineral and water-holding capacity → vegetation type → dependent animals',
            'Characterised by composition, pH, percolation, topography',
          ],
        ],
      },
      {
        t: 'table',
        title: 'Tolerance-classification terms',
        head: ['Term', 'Meaning'],
        rows: [
          ['Eurythermal', 'Tolerates a wide range of temperature'],
          ['Stenothermal', 'Restricted to a narrow range of temperature'],
          ['Euryhaline', 'Tolerates a wide range of salinity'],
          ['Stenohaline', 'Restricted to a narrow range of salinity'],
          ['Range of tolerance', 'The span of an abiotic factor over which a species can survive and reproduce'],
        ],
        note: 'The book titles this table “high-frequency in MCQs”: the book’s estimate from past papers, not official figures.',
      },
      {
        t: 'p',
        html: '<b>Memory hook:</b> eury- = “eury-body welcome” (wide range); steno- = “steno-grapher, narrow column” (narrow range).',
      },

      { t: 'part', title: 'Key ecological frameworks and reasoning' },
      {
        t: 'p',
        html: 'There is no formal derivation in this topic: the abiotic-factor material is conceptual. What students actually need is a reasoning procedure: given a species and a place, decide whether the species can live there and why. Here is that framework, with the physical reasoning behind each step.',
      },
      {
        t: 'p',
        html: '<b>Step 1: Identify the candidate limiting factor.</b> Scan temperature → water/salinity → light → soil, in that order of general influence. <b>Reasoning:</b> temperature and water set the biome; checking them first usually localises the answer fastest. For an aquatic organism, jump to salinity; for a forest-floor plant, weight light heavily.',
      },
      {
        t: 'p',
        html: '<b>Step 2: Establish the species’ range of tolerance for that factor.</b> Every species survives only within a band of the factor. <b>Reasoning:</b> outside the band, metabolic machinery fails: proteins denature at high temperature, water enters or leaves cells osmotically at the wrong salinity, photosynthesis cannot meet respiratory demand in too little light. The band is a biological fact about the organism, not about the place.',
      },
      {
        t: 'p',
        html: '<b>Step 3: Classify the species (steno- vs eury-).</b> Narrow band → steno- (stenothermal/stenohaline); wide band → eury- (eurythermal/euryhaline). <b>Reasoning:</b> this single label predicts how restricted the species’ distribution will be. Stenohaline marine fish cannot invade estuaries; euryhaline ones can.',
      },
      {
        t: 'p',
        html: '<b>Step 4: Match the band against the site’s actual conditions.</b> Does the site’s value of the factor fall inside the species’ tolerance band? <b>Reasoning:</b> survival requires overlap between what the organism can take and what the place offers. If a marine, stenohaline fish is dropped into freshwater, the surrounding medium is hypotonic, water rushes in by osmosis, and the fish cannot osmoregulate against it: the band does not overlap, so it fails.',
      },
      {
        t: 'p',
        html: '<b>Step 5: Account for soil/light as secondary filters (terrestrial).</b> Even where temperature and water permit, soil texture/pH and light availability decide which plants establish, and the plants in turn decide which animals can live there. <b>Reasoning:</b> the abiotic factors cascade: soil → vegetation → fauna, so a mismatch low in the chain still excludes the organism.',
      },
      { t: 'fig', id: 'b12-11-fig-11.1' },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board, 3 marks',
        q: 'Define stenothermal and eurythermal organisms with one example each, and explain why temperature is regarded as the most ecologically relevant abiotic factor.',
        steps: [
          '<b>Model answer.</b> Stenothermal organisms tolerate only a narrow range of temperature (e.g., most coral-reef organisms, restricted to warm tropical seas). Eurythermal organisms tolerate a wide range (e.g., many fish and insects of temperate habitats). Temperature is the most ecologically relevant factor because it directly controls the kinetics of metabolic enzymes in every organism. Since the rates of biochemical reactions, and therefore growth, activity, and reproduction, depend on temperature, it ultimately governs where a species can survive. This is why temperature, together with precipitation, sets the global pattern of biomes.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET, single-best MCQ',
        q: 'Organisms that can tolerate only a narrow range of salinity are termed: <b>(a)</b> eurythermal <b>(b)</b> euryhaline <b>(c)</b> stenohaline <b>(d)</b> stenothermal',
        steps: [
          '<b>Answer: (c).</b> Salinity → -haline; narrow → steno-. Eliminate (a) and (d) immediately because they refer to temperature (-thermal). Between the two -haline options, eury- is “wide,” so (b) is the opposite of what’s asked, leaving (c).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET, MCQ with reasoning',
        q: 'A marine, stenohaline fish is transferred to a freshwater aquarium. The most likely immediate physiological problem is that: <b>(a)</b> salt continuously diffuses out, dehydrating the fish <b>(b)</b> water enters the body by osmosis faster than it can be expelled <b>(c)</b> oxygen uptake stops because freshwater holds no dissolved oxygen <b>(d)</b> its enzymes denature due to a sudden temperature change',
        steps: [
          '<b>Answer: (b).</b> Freshwater is hypotonic relative to the fish’s body fluids, so water moves into the body by osmosis. A stenohaline marine fish lacks the osmoregulatory flexibility to cope, so it cannot bail water out fast enough. <b>Trap analysis:</b> (a) reverses the osmotic direction: that’s the problem a freshwater fish faces in seawater. (c) is false; freshwater does contain dissolved oxygen. (d) wrongly invokes temperature when the change here is purely in salinity.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty, Assertion–Reason',
        q: '<b>Assertion (A):</b> Two bird species feeding in the same tree can coexist. <b>Reason (R):</b> They occupy the same habitat but different ecological niches. <b>(a)</b> Both A and R are true and R is the correct explanation of A <b>(b)</b> Both A and R are true but R is not the correct explanation of A <b>(c)</b> A is true, R is false <b>(d)</b> A is false, R is true',
        steps: [
          '<b>Answer: (a).</b> Sharing the tree means a shared habitat (address). Coexistence is possible because each species exploits resources differently: different niches (profession), e.g., one gleans insects from leaves, the other probes bark. The niche difference reduces direct competition, which is exactly why they can coexist, so R correctly explains A. <b>Why not (b):</b> the niche distinction is not incidental; it is the mechanism of coexistence, so R is the correct explanation.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Differentiate between habitat and niche with one example illustrating that two species can share a habitat but not a niche.',
            a: 'Habitat = physical address; niche = functional role/way of resource use; e.g., canopy-feeding vs bark-probing birds in one tree.',
          },
          {
            q: '[CUET] The salinity (in ppt) of typical seawater lies closest to: <b>(a)</b> 0–5 <b>(b)</b> 10–15 <b>(c)</b> 30–35 <b>(d)</b> > 100.',
            a: '(c).',
          },
          {
            q: '[NEET] Arrange the four levels of biological organisation studied in ecology from smallest to largest, and state which two this chapter focuses on.',
            a: 'organism → population → community → biome; chapter focuses on organism and population (and their interactions).',
          },
          {
            q: '[NEET] A plant species is found only on soils of a narrow pH range and fails to establish elsewhere despite suitable temperature and rainfall. Identify the limiting factor and the cascade by which it excludes dependent animals.',
            a: 'Soil pH is the limiting factor; soil → restricts vegetation → restricts the herbivores/animals dependent on that vegetation.',
          },
          {
            q: '[NEET high-difficulty] Assertion: Eurythermal species generally have wider geographic distributions than stenothermal ones. Reason: A wide range of tolerance allows survival across more sites. Choose the correct A–R option: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: '(a) Both true, R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which of the following is considered the most ecologically relevant abiotic factor?',
        opts: [
          {
            label: 'Light',
            nudge: 'Light matters greatly but is secondary at the global biome scale and irrelevant for many organisms (e.g., deep-soil fauna).',
          },
          { label: 'Soil pH', nudge: 'Soil pH is a local filter, not a global master variable.' },
          { label: 'Temperature', nudge: null },
          {
            label: 'Wind',
            nudge: 'Wind modifies microclimate but is not a primary limiting factor, chosen by students who confuse “noticeable” with “ecologically governing.”',
          },
        ],
        correct: 2,
        solution:
          'Temperature governs enzyme kinetics and metabolic rate in all organisms and, with precipitation, determines biome distribution.',
      },
      {
        t: 'mcq',
        q: '“Habitat is the address; niche is the profession”: the niche of an organism best refers to its:',
        opts: [
          { label: 'geographic range', nudge: 'This is closer to “habitat/range.”' },
          { label: 'functional role and resource use', nudge: null },
          { label: 'population size', nudge: 'This is a population attribute, not a niche.' },
          {
            label: 'body size',
            nudge: 'This is an organismal trait unrelated to the niche concept: a pure distractor for students guessing on the word “niche.”',
          },
        ],
        correct: 1,
        solution:
          'The niche is the functional description: how the organism captures and uses resources and the conditions under which it persists.',
      },
      {
        t: 'mcq',
        q: 'A fish that thrives across the full estuarine gradient from river mouth to open sea is best described as:',
        opts: [
          { label: 'stenohaline', nudge: 'This is the opposite (narrow salinity).' },
          { label: 'euryhaline', nudge: null },
          {
            label: 'stenothermal',
            nudge: '<b>(c)</b> and <b>(d)</b> refer to temperature, not salinity, selected by students who don’t separate the -thermal and -haline suffix families.',
          },
          {
            label: 'eurythermal',
            nudge: '<b>(c)</b> and <b>(d)</b> refer to temperature, not salinity, selected by students who don’t separate the -thermal and -haline suffix families.',
          },
        ],
        correct: 1,
        solution: 'Surviving a wide salinity range = eury- + -haline.',
      },
      {
        t: 'mcq',
        q: 'In ecology, the sequence “soil → vegetation → animals” illustrates that an abiotic factor can:',
        opts: [
          { label: 'act only on plants', nudge: 'This ignores the downstream animal effect.' },
          { label: 'cascade through trophic dependents', nudge: null },
          {
            label: 'replace temperature as a factor',
            nudge: '<b>(c)</b> and <b>(d)</b> are unsupported overstatements, picked by students who over-read the example as ranking factors against each other.',
          },
          {
            label: 'eliminate the need for water',
            nudge: '<b>(c)</b> and <b>(d)</b> are unsupported overstatements, picked by students who over-read the example as ranking factors against each other.',
          },
        ],
        correct: 1,
        solution:
          'Soil determines which plants grow, and the plants determine which animals can live there: a cascade of dependence.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Mixing the suffix families.</b> -thermal = temperature, -haline = salinity. A startling number of NEET marks are lost (the book’s estimate from past papers, not official figures) because a student reads “stenohaline” and thinks “temperature.” Lock it: Haline = salt (think “halite,” rock salt).',
          '<b>Calling temperature “the only” limiting factor.</b> It is the most ecologically relevant in general, not universal. For a cave or deep-soil organism, light or food limits. Read the question’s organism before reflexively answering “temperature.”',
          '<b>Swapping habitat and niche.</b> Habitat = where (address); niche = how it lives (profession). Two species in one habitat with different niches → coexistence; this is the standard NEET coexistence question (the book’s estimate from past papers, not official figures).',
          '<b>Reversing osmosis direction.</b> Marine fish in freshwater → water moves in (medium hypotonic); freshwater fish in seawater → water moves out. Draw the concentration arrow before answering.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any “wide vs narrow tolerance” MCQ, decode the term in two strokes: first the suffix (-thermal or -haline tells you the factor), then the prefix (eury- = wide, steno- = narrow). You can eliminate two of four options before reading them fully.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Ecology = interactions among organisms + with abiotic environment. Levels: organism → population → community → biome (chapter: organism + population + interactions between populations).',
            note: '',
          },
          {
            f: 'Four abiotic factors',
            note: 'temperature, water (salinity in aquatic), light, soil. Temperature = most ecologically relevant (governs enzyme kinetics; with rainfall sets biomes).',
          },
          {
            f: 'Tolerance terms',
            note: 'eury- (wide) / steno- (narrow) × -thermal (temperature) / -haline (salinity). Range of tolerance = span over which a species survives and reproduces.',
          },
          {
            f: 'Habitat vs niche',
            note: 'habitat = address (where); niche = profession (functional role). Same habitat + different niches → coexistence.',
          },
          {
            f: 'Salinity anchors (ppt)',
            note: 'inland water < 5 | sea 30–35 | hypersaline > 100.',
          },
          {
            f: 'Abiotic cascade',
            note: 'soil → vegetation → animals; abiotic effects propagate through dependents.',
          },
        ],
        aids: [
          'Haline = halite = salt; eury = everyone welcome (wide); steno = stenographer’s narrow column.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 609–615 ─────────────────────────
  {
    n: '02',
    title: 'Responses to Abiotic Factors & Adaptations',
    kalam: 'Nature has only a handful of strategies for surviving a stressful patch of environment.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A frequently tested NEET topic: expect 1–2 questions, usually matching a strategy (hibernation, diapause, migration) or an adaptation (kangaroo rat, desert plant, Allen’s rule) to its function (the book’s estimate from past papers, not official figures). CBSE Boards ask 2–3 mark answers distinguishing regulate/conform or listing desert adaptations. CUET tests straight recall (what is aestivation? which park hosts migratory birds?). Because the examples are concrete and finite, this is a scoring topic.',
      },
      {
        t: 'p',
        html: 'In Topic 01 we saw that every organism lives inside a band of tolerable conditions: temperature, water, light, soil. But the environment refuses to sit still. The desert bakes by day and chills by night; the pond dries in summer; the northern winter strips the land of food. The cell, meanwhile, is fussy: its enzymes work best within a narrow internal range. So every organism faces the same problem: the outside keeps changing, but the inside must not. How a species solves this problem is its response to abiotic factors, and the long-term, heritable solutions it evolves are its adaptations.',
      },
      {
        t: 'p',
        html: 'Nature has only a handful of strategies for surviving a stressful patch of environment, and remarkably, they map onto choices a human family might make during a brutal Indian summer. You could install an air-conditioner and hold your home at a steady 24 °C no matter what (regulate). You could simply tolerate the heat and let your house warm up with the day (conform). You could pack up and head to a hill station until the weather breaks (migrate). Or you could shut the place down, draw the curtains, and wait it out doing as little as possible (suspend). Birds, snails, fish, and bacteria make exactly these four choices.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> The deciding factor is almost always cost. Holding the inside constant (regulating) is expensive: it burns energy continuously. So the question for any species is whether the benefit of a stable internal environment is worth the fuel bill. For a large mammal it usually is; for a tiny insect with a huge surface area leaking heat, it usually is not. The strategy a species “chooses” is really the cheapest one that keeps it alive long enough to reproduce.',
      },
      {
        t: 'p',
        html: 'Once a strategy is locked in over evolutionary time, it shows up as adaptation: a feature of body form (morphological), internal function (physiological), or behaviour that fits the organism to its habitat and improves its survival and reproduction. The kangaroo rat that never needs to drink, the cactus whose leaves became spines, the desert lizard that suns itself when cold and burrows when hot: each is a frozen record of generations solving the same environmental puzzle.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> “Regulate” in the strict sense means holding the internal environment constant; many organisms are only partial regulators, regulating against mild stress and conforming when it becomes extreme. And adaptations are not acquired within a lifetime by trying hard: they are heritable traits shaped by selection over generations; an individual desert plant cannot grow spines because it is thirsty.',
      },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      {
        t: 'table',
        title: 'The four responses to a stressful abiotic environment',
        head: ['Strategy', 'What the organism does', 'Diagnostic examples'],
        rows: [
          [
            'Regulate',
            'Maintains a constant internal environment (homeostasis): thermoregulation and/or osmoregulation, regardless of external change',
            'All birds and mammals, and a very few lower vertebrates and invertebrates (NCERT); some let body temperature fall in torpor or hibernation. Humans sweat in summer (evaporative cooling), shiver in winter (heat from muscle activity)',
          ],
          [
            'Conform',
            'Lets internal state vary with the external; no constancy maintained',
            '~99% of animals and nearly all plants are conformers (NCERT’s figure)',
          ],
          [
            'Migrate',
            'Temporarily leaves the stressful habitat for a hospitable one, returning when conditions improve',
            'Migratory birds wintering at Keoladeo National Park (Bharatpur, Rajasthan); like people leaving Delhi for Shimla in peak summer',
          ],
          [
            'Suspend',
            'Reduces metabolic activity / enters dormancy until favourable conditions return',
            'Thick-walled spores (bacteria, fungi); seed dormancy; hibernation, aestivation, diapause (animals)',
          ],
        ],
      },
      {
        t: 'table',
        title: 'Dormancy sub-types (the “suspend” strategy in animals)',
        head: ['Term', 'Trigger', 'One-line meaning', 'Example'],
        rows: [
          ['Hibernation', 'Cold (winter)', '“Winter sleep”: metabolic rate dropped to escape cold', 'Bears (winter torpor), frogs'],
          ['Aestivation', 'Heat / desiccation (summer)', '“Summer sleep”: dormancy to avoid heat and water loss', 'Snails, some fish'],
          ['Diapause', 'General unfavourable period', 'A stage of suspended development', 'Zooplankton in lakes/ponds'],
        ],
      },
      { t: 'p', html: '<b>Types of adaptation</b>' },
      {
        t: 'p',
        html: '• <b>Morphological</b> (visible structural fits): cactus leaves reduced to spines (<i>Opuntia</i>), with photosynthesis shifted to flattened green stems; thick cuticle and sunken stomata in desert plants; shorter extremities in cold-climate mammals.<br>• <b>Physiological</b> (internal-chemistry fits): the kangaroo rat meeting its water needs from internal fat oxidation and excreting highly concentrated urine; Antarctic fish with antifreeze proteins; archaebacteria enzymes stable above 100 °C.<br>• <b>Behavioural</b> (action-based fits): the desert lizard basking in the sun when cool and retreating to shade or a burrow when hot, managing body temperature by behaviour rather than physiology.',
      },

      { t: 'part', title: 'Coping strategies and adaptive logic' },
      {
        t: 'p',
        html: '<b>Why so few species regulate.</b> Regulators (NCERT: all birds and mammals, and a very few lower vertebrates and invertebrates) pay a steep, continuous energy bill to hold body temperature and osmotic balance constant. The cost is worst for small animals: a small body has a large surface area relative to its volume, so it loses heat fast and must burn even more fuel to replace it. This is why very small animals are rare in the polar regions, and why the overwhelming majority of organisms simply conform. <b>Reasoning:</b> evolution is an accountant: constancy is “bought” only where its survival payoff exceeds its energy price.',
      },
      {
        t: 'p',
        html: '<b>Regulating water, not just heat.</b> Regulation is not only about temperature; many organisms must also hold their internal salt-and-water balance steady: <b>osmoregulation</b>. The stakes are vivid: drop a marine fish into freshwater and the surrounding medium is now hypotonic, so water floods into its body by endosmosis faster than it can be expelled, and the fish swells and dies. A true osmoregulator actively pumps salts and water to defend a constant internal concentration against exactly this kind of gradient; a conformer simply lets its internal concentration drift with the medium and is therefore often confined to a narrow range of salinity. <b>Reasoning:</b> the cell’s chemistry depends on a stable solute concentration just as much as on a stable temperature, so the same regulate-or-conform choice plays out for water.',
      },
      {
        t: 'p',
        html: '<b>Migration as a vote with the feet.</b> When neither regulating nor conforming will do, an organism can leave. Every winter, Keoladeo National Park in Rajasthan fills with thousands of birds escaping the lethal cold and food scarcity of Siberia and the far north; when their breeding grounds thaw, they return. Migration also exploits a cue: many animals read the seasonal change in <b>photoperiod</b> (day length) to time their foraging, reproduction, and departure, a reliable calendar the environment provides for free. <b>Reasoning:</b> if the stress is seasonal and a better habitat lies within reach, relocation beats endurance.',
      },
      {
        t: 'p',
        html: '<b>Suspension: switching the engine to idle.</b> When you cannot leave and cannot pay to regulate, you can stop. Bacteria and fungi ride out hostile spells as thick-walled spores; seeds wait, sometimes for years, in dormancy. Animals slow their metabolism: bears and frogs <b>hibernate</b> through winter cold, snails and certain fish <b>aestivate</b> through summer heat and drought, and zooplankton enter <b>diapause</b>, a suspended stage of development, until the pond is hospitable again. <b>Reasoning:</b> a dormant organism spends almost nothing, so the cost of waiting is far lower than the cost of fighting the conditions.',
      },
      {
        t: 'p',
        html: '<b>Adaptation: solutions written into the body.</b> Where the stress is permanent, selection bakes the solution into the lineage.',
      },
      {
        t: 'p',
        html: '• <b>Deserts (heat + water scarcity).</b> The <b>kangaroo rat</b> of North American deserts famously never needs to drink: it manufactures water internally by oxidising fat and conserves it by producing extraordinarily concentrated urine. Desert <b>plants</b> cut water loss with a thick waxy cuticle and sunken stomata, and many run <b>CAM photosynthesis</b>, opening stomata only at night so the day’s heat does not drain them. <i>Opuntia</i> abandons leaves altogether (they became spines) and photosynthesises through fleshy green stems.<br>• <b>Cold (heat loss).</b> Cold-climate mammals generally follow <b>Allen’s Rule</b>: shorter ears, limbs, and tails to shrink the surface area through which heat escapes. Aquatic mammals like seals carry a thick insulating layer of <b>blubber</b> (fat) under the skin.<br>• <b>Altitude (low oxygen).</b> A lowlander newly arrived at high altitude (say, near Rohtang) meets thin air and low oxygen, suffering <b>altitude sickness</b> (nausea, fatigue, palpitations). Over days the body <b>acclimatises</b>: it makes more red blood cells, haemoglobin binds oxygen less tightly, and breathing becomes faster, so the tissues receive more of the scarce oxygen. <b>Reasoning:</b> the body cannot change the mountain, so it upgrades its own oxygen-carrying machinery.<br>• <b>Extreme temperature.</b> Antarctic fish survive sub-zero water with <b>antifreeze</b> proteins; archaebacteria flourish in hot springs and hydrothermal vents above 100 °C with heat-stable enzymes, living proof of how far adaptation can stretch the band of tolerance.',
      },
      { t: 'fig', id: 'b12-11-fig-11.2' },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board, 3 marks',
        q: 'Distinguish between a regulator and a conformer with respect to internal body temperature, and state which strategy is energetically costlier and why.',
        steps: [
          '<b>Model answer.</b> A regulator keeps its internal body temperature (and/or osmotic concentration) constant despite changes in the external environment, e.g. birds and mammals. A conformer allows its internal temperature to vary with the surroundings, e.g. most animals and nearly all plants. Regulation is costlier, because maintaining a constant internal environment demands continuous energy expenditure (to generate or shed heat); this cost is especially heavy for small animals, whose large surface-area-to-volume ratio makes heat loss rapid.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET, single-best MCQ',
        q: 'A stage of suspended development that helps zooplankton survive an unfavourable period is called: <b>(a)</b> hibernation <b>(b)</b> aestivation <b>(c)</b> diapause <b>(d)</b> migration',
        steps: [
          '<b>Answer: (c).</b> Diapause = suspended development. Eliminate (a) winter sleep and (b) summer sleep: both are dormancy of activity, classically in animals like bears and snails, not “suspended development” of zooplankton; (d) is leaving, not pausing.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET, MCQ with reasoning',
        q: 'The kangaroo rat in North American deserts can survive without ever drinking water primarily because it: <b>(a)</b> stores water in its tail <b>(b)</b> obtains water by oxidising internal fat and excretes very concentrated urine <b>(c)</b> absorbs water vapour through its skin <b>(d)</b> migrates to water sources at night',
        steps: [
          '<b>Answer: (b).</b> It manufactures metabolic water from fat and minimises loss with concentrated urine. <b>Trap analysis:</b> (a) invents a water store; the kangaroo rat’s tail holds no water (a camel’s hump stores fat, not water). (c) is physiologically false for a mammal. (d) contradicts “without ever drinking.”',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty, Assertion–Reason',
        q: '<b>Assertion (A):</b> Very small animals are rarely found in polar regions. <b>Reason (R):</b> Small animals have a large surface area relative to their volume and lose body heat rapidly, making thermoregulation in extreme cold prohibitively expensive. <b>(a)</b> Both A and R true, R is the correct explanation of A <b>(b)</b> Both A and R true, R is not the correct explanation of A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Answer: (a).</b> The observation (A) follows directly from the surface-area-to-volume cost (R): small bodies bleed heat too fast to afford regulation in polar cold, so they are selected against there. R is exactly why A holds.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the four ways in which organisms cope with stressful abiotic conditions, with one example of each.',
            a: 'Regulate (birds/mammals), Conform (most animals/plants), Migrate (birds to Keoladeo NP), Suspend (bears hibernate / zooplankton diapause).',
          },
          {
            q: '[CUET] “Summer sleep” to escape heat and desiccation is termed: <b>(a)</b> hibernation <b>(b)</b> aestivation <b>(c)</b> diapause <b>(d)</b> acclimatisation.',
            a: '(b).',
          },
          {
            q: '[NEET] List three adaptations of desert plants that reduce water loss and explain how each works.',
            a: 'Thick cuticle (cuts evaporation), sunken stomata (reduces transpiration by trapping humid air), CAM photosynthesis / leaves as spines in <i>Opuntia</i> (minimises water loss during the hot day).',
          },
          {
            q: '[NEET] Why does a person newly arrived at high altitude experience altitude sickness, and how does the body acclimatise over time?',
            a: 'Low oxygen partial pressure causes nausea/fatigue/palpitations; the body acclimatises by producing more RBCs, loosening haemoglobin’s hold on oxygen and breathing faster.',
          },
          {
            q: '[NEET high-difficulty] Assertion: Allen’s Rule states that mammals of colder climates have shorter ears and limbs. Reason: Shorter extremities reduce surface area and thus minimise heat loss. Choose the correct A–R option: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: '(a) Both true, R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which group is made up almost entirely of conformers?',
        opts: [
          {
            label: 'birds',
            nudge: '<b>(a)</b> and <b>(b)</b> are the regulators: the opposite of what’s asked.',
          },
          {
            label: 'mammals',
            nudge: '<b>(a)</b> and <b>(b)</b> are the regulators: the opposite of what’s asked.',
          },
          { label: 'plants and most animals', nudge: null },
          { label: 'only reptiles', nudge: 'This is far too narrow; conforming is the norm across most groups.' },
        ],
        correct: 2,
        solution:
          'Roughly 99% of animals and nearly all plants conform (NCERT’s figure); all birds and mammals, and a very few others, regulate.',
      },
      {
        t: 'mcq',
        q: 'Every winter Keoladeo National Park (Bharatpur) hosts thousands of birds from Siberia. This illustrates the strategy of:',
        opts: [
          {
            label: 'regulation',
            nudge: '<b>(a)</b> and <b>(d)</b> are about handling conditions in place.',
          },
          {
            label: 'suspension',
            nudge: 'This is dormancy, not relocation, chosen by students who blur “escaping winter by sleeping” with “escaping winter by leaving.”',
          },
          { label: 'migration', nudge: null },
          {
            label: 'conformation',
            nudge: '<b>(a)</b> and <b>(d)</b> are about handling conditions in place.',
          },
        ],
        correct: 2,
        solution: 'The birds leave a hostile habitat for a hospitable one and return: migration.',
      },
      {
        t: 'mcq',
        q: 'The desert lizard managing its body temperature by basking when cool and sheltering when hot is an example of a/an ___ adaptation.',
        opts: [
          { label: 'morphological', nudge: '<b>(a)</b> and <b>(d)</b> refer to body form.' },
          {
            label: 'physiological',
            nudge: 'This refers to internal function, which this behaviour does not change.',
          },
          { label: 'behavioural', nudge: null },
          { label: 'anatomical', nudge: '<b>(a)</b> and <b>(d)</b> refer to body form.' },
        ],
        correct: 2,
        solution: 'It changes its behaviour, not its body structure or internal chemistry.',
      },
      {
        t: 'mcq',
        q: 'Antifreeze proteins in Antarctic fish and heat-stable enzymes in hot-spring archaebacteria are both examples of:',
        opts: [
          { label: 'behavioural adaptation', nudge: 'This involves actions, not chemistry.' },
          { label: 'physiological adaptation', nudge: null },
          { label: 'migration', nudge: 'This is relocation.' },
          { label: 'conformation', nudge: 'This is a coping mode, not an adaptation type.' },
        ],
        correct: 1,
        solution: 'Both are internal biochemical solutions: physiological adaptations.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Hibernation vs aestivation vs diapause.</b> Hibernation = winter sleep (cold). Aestivation = summer sleep (heat/drought). Diapause = suspended development (often zooplankton). Tie each to its trigger and you will not swap them.',
          '<b>Regulate vs conform direction.</b> Regulators hold the inside constant; conformers let it vary. Birds and mammals regulate (NCERT: all of them, and a very few other animals); the vast majority of organisms conform. Don’t assume “most animals regulate”: the reverse is true.',
          '<b>Adaptation is not effort.</b> Adaptations are heritable, evolved over generations: an individual does not grow them on demand within its lifetime. Watch for assertion-reason traps built on this.',
          '<b>Three adaptation types.</b> Morphological = form, physiological = internal function, behavioural = action. Classify the example by what changed.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For “which response/adaptation is this?” questions, first ask what is the stress and what did the organism change? Leave (migrate), stop (suspend), hold steady (regulate), go with the flow (conform); body shape (morphological), body chemistry (physiological), or what it does (behavioural). Naming the stress-and-change pair lands the answer faster than recalling definitions.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Core problem',
            note: 'outside changes, inside (cell/enzymes) must stay near-constant. Four responses + heritable adaptations.',
          },
          {
            f: 'Four responses',
            note: 'Regulate (constant internal env; birds, mammals; costly) · Conform (varies with outside; ~99% of animals, most plants) · Migrate (leave & return; Keoladeo NP birds) · Suspend (dormancy).',
          },
          {
            f: 'Dormancy types',
            note: 'Hibernation = winter sleep (bear, frog) · Aestivation = summer sleep (snail, fish) · Diapause = suspended development (zooplankton); spores/seeds in microbes & plants.',
          },
          {
            f: 'Why most conform',
            note: 'regulation burns energy; worst for small bodies (high surface-area : volume) → few tiny animals in polar regions.',
          },
          {
            f: 'Adaptation types',
            note: 'Morphological (cactus spines, sunken stomata, Allen’s Rule short extremities, seal blubber) · Physiological (kangaroo rat water economy, CAM, antifreeze proteins in Antarctic fish) · Behavioural (desert lizard basking/burrowing).',
          },
          {
            f: 'Altitude',
            note: 'low O<sub>2</sub> → altitude sickness → acclimatise (more RBCs, faster breathing).',
          },
        ],
        aids: [
          'responses = “Hold, Flow, Go, or Slow” (Regulate, Conform, Migrate, Suspend); dormancy = “hiber = cold, aesti = heat, diapause = pause growth.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 616–624 ─────────────────────────
  {
    n: '03',
    title: 'Population Attributes & Growth',
    kalam: 'A population has properties that no single organism can have.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is an exam-dense block of the chapter. NEET often lifts 2 questions from here (the book’s estimate from past papers, not official figures), typically one growth-model identification (J vs S, the logistic equation) and one numerical on density/rate or net change (<i>B</i> + <i>I</i>) − (<i>D</i> + <i>E</i>). CBSE Boards ask the exponential/logistic derivation or a 2-mark age-pyramid interpretation. CUET mines straight recall: meaning of <i>K</i>, what <i>r</i> stands for, Verhulst–Pearl. The growth equations here also feed the Ecosystem chapter, so locking them now pays twice.',
      },
      {
        t: 'p',
        html: 'A single individual is almost never the unit that nature works with. Ask “is the tiger in trouble?” and you are not asking about one tiger; you are asking about the population: all the tigers of one species sharing one area, interbreeding, rising and falling together. A population has properties that no single organism can have. One person cannot have a birth rate or a sex ratio or an age distribution, but a city can. These collective properties are the population attributes, and they are what ecologists actually measure.',
      },
      {
        t: 'p',
        html: 'The most basic attribute is population density: how many individuals are packed into a unit of space. But “how many” is slippery. Counting every individual is fine for a handful of Siberian cranes on a wetland, hopeless for plankton in a pond. So ecologists often switch to relative measures: percentage cover or biomass for plants, and indirect signs for shy animals (a tiger census in India famously relied on counting pugmarks and faecal pellets, not tigers). The lesson: density is a concept, and the right way to measure it depends on the organism.',
      },
      {
        t: 'p',
        html: 'Why does density change at all? Four taps fill or drain the tank. Two add water: natality (births) and immigration (arrivals from elsewhere). Two drain it: mortality (deaths) and emigration (departures). Everything that happens to a population’s size passes through these four taps.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a village pond as a bank account. Natality and immigration are deposits; mortality and emigration are withdrawals. The balance rises only when deposits beat withdrawals. Under ordinary conditions, births and deaths dominate the ledger; immigration and emigration matter mostly in special cases: a freshly colonised habitat, or a corridor that lets animals stream in.',
      },
      {
        t: 'p',
        html: 'Once we know a population can grow, the next question is how. Hand a population unlimited food and space and it does something almost frightening: it grows exponentially, doubling and redoubling, tracing a steepening J-shaped curve. This is the world Malthus warned about: organisms multiplying geometrically (1, 2, 4, 8, 16…) while resources crawl up arithmetically. But no real habitat is infinite. Sooner or later the population bumps into a ceiling: the maximum number the habitat can support, the carrying capacity (<i>K</i>). As the population nears <i>K</i>, competition for the dwindling resources bites, growth slows, and the curve flattens into a graceful S-shape (sigmoid). This is logistic growth, and it is the more realistic of the two models.',
      },
      {
        t: 'p',
        html: 'There is one more layer worth meeting now: populations don’t just grow; they evolve strategies for growing. Natural selection shapes each population towards the schedule of breeding that maximises its Darwinian (reproductive) fitness, i.e. a high <i>r</i>. The strategies fall along clear trade-offs. Some species breed only once in a lifetime, pouring everything into a single reproductive event (the Pacific salmon, bamboo); others breed many times (most birds and mammals). Some produce many small offspring and gamble on numbers (oysters, pelagic fish); others produce few large offspring and invest in each (birds, mammals). These are not random quirks: they are solutions to the constraints the habitat’s abiotic and biotic conditions impose, and they explain why a housefly and an elephant “grow” so differently as populations.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Exponential growth assumes resources are truly unlimited and crowding has no effect: a condition met only briefly (a newly invaded habitat, a lab culture in early phase). The moment resources become finite, the exponential model fails and the logistic model takes over. The logistic model in turn assumes a fixed <i>K</i> and that every added individual depresses growth equally: real carrying capacities themselves fluctuate with seasons and disturbance, so even the S-curve is an idealisation.',
      },

      { t: 'part', title: 'Key definitions and formulas' },
      { t: 'p', html: '<b>Population attributes</b>' },
      {
        t: 'p',
        html: '• <b>Population density (<i>ρ</i>)</b>: number of individuals per unit area or volume:',
      },
      {
        t: 'formula',
        kicker: 'Population density',
        main: '<i>ρ</i> = <frac><num><i>N</i></num><den><i>S</i></den></frac>',
        legend: ['<i>N</i> = total number of individuals', '<i>S</i> = area or volume'],
        note: 'Units: individuals per m<sup>2</sup>, per km<sup>2</sup>, or per unit volume.',
      },
      {
        t: 'p',
        html: '• <b>Natality / birth rate (<i>b</i>)</b>: births per capita per unit time (<i>B</i> is the number of births in the interval).<br>• <b>Mortality / death rate (<i>d</i>)</b>: deaths per capita per unit time (<i>D</i> is the number of deaths in the interval).<br>• <b>Immigration (<i>I</i>)</b> and <b>Emigration (<i>E</i>)</b>: individuals entering / leaving the habitat in the period.',
      },
      {
        t: 'p',
        html: '<b>Change in population size:</b> if <i>N</i><sub><i>t</i></sub> is the number of individuals at time <i>t</i>, then at <i>t</i> + 1:',
      },
      {
        t: 'formula',
        kicker: 'Change in population size',
        main: '<i>N</i><sub><i>t</i>+1</sub> = <i>N</i><sub><i>t</i></sub> + [(<i>B</i> + <i>I</i>) − (<i>D</i> + <i>E</i>)]',
        legend: [
          '<i>N</i><sub><i>t</i></sub> = number of individuals at time <i>t</i>',
          '<i>B</i>, <i>I</i>, <i>D</i>, <i>E</i> = births, immigrants, deaths and emigrants (numbers of individuals) during the interval',
        ],
        note: 'The population grows when (<i>B</i> + <i>I</i>) > (<i>D</i> + <i>E</i>).',
      },
      { t: 'p', html: '<b>Vital index:</b> ratio of natality to mortality:' },
      {
        t: 'formula',
        kicker: 'Vital index',
        main: 'Vital index = <frac><num>Natality</num><den>Mortality</den></frac> × 100',
        legend: [],
        note: null,
      },
      {
        t: 'def',
        term: 'Biotic potential',
        html: 'the maximum reproductive capacity of a population under optimum (ideal) conditions.',
      },
      {
        t: 'def',
        term: 'Age structure & sex ratio',
        html: 'the proportion of individuals in pre-reproductive, reproductive, and post-reproductive classes; and the ratio of one sex to the other. Plotted by age class, these give the <b>age pyramid</b>.',
      },
      { t: 'fig', id: 'b12-11-fig-11.3' },
      {
        t: 'def',
        term: 'Life-history variation',
        html: 'the evolved breeding schedule of a population: breeding once vs many times, and many-small vs few-large offspring, selected to maximise Darwinian fitness (<i>r</i>) under the habitat’s constraints.',
      },
      {
        t: 'def',
        term: 'Dispersion',
        html: 'how individuals are spread in space: uniform, random, or clumped.',
      },
      {
        t: 'table',
        title: 'Growth-model formulas',
        head: ['Model', 'Differential form', 'Integral form', 'Curve'],
        rows: [
          [
            'Exponential',
            '<frac><num>d<i>N</i></num><den>d<i>t</i></den></frac> = <i>rN</i>',
            '<i>N</i><sub><i>t</i></sub> = <i>N</i><sub>0</sub> <i>e</i><sup><i>rt</i></sup>',
            'J-shaped',
          ],
          [
            'Logistic (Verhulst–Pearl)',
            '<frac><num>d<i>N</i></num><den>d<i>t</i></den></frac> = <i>rN</i> <frac><num>(<i>K</i> − <i>N</i>)</num><den><i>K</i></den></frac>',
            '<i>N</i><sub><i>t</i></sub> = <frac><num><i>K</i></num><den>1 + (<frac><num><i>K</i> − <i>N</i><sub>0</sub></num><den><i>N</i><sub>0</sub></den></frac>) <i>e</i><sup>−<i>rt</i></sup></den></frac>',
            'S-shaped (sigmoid)',
          ],
        ],
        note: 'Derived in the part “Derivations: exponential and logistic growth” of this topic.',
      },
      {
        t: 'p',
        html: 'where <i>r</i> = <i>b</i> − <i>d</i> = <b>intrinsic rate of natural increase</b> (per unit time), <i>K</i> = <b>carrying capacity</b>, <i>N</i><sub>0</sub> = number of individuals at <i>t</i> = 0, <i>e</i> ≈ 2.71828. The parameter <i>r</i> is the master dial for assessing how any biotic or abiotic factor affects growth; characteristic values differ by species (it is small for large slow breeders, large for tiny fast breeders).',
      },

      { t: 'part', title: 'Derivations: exponential and logistic growth' },
      {
        t: 'p',
        html: 'This topic does have formal derivations, so we build both models from first principles, with the physical reasoning at each step.',
      },
      { t: 'p', html: '<b>Exponential growth</b>' },
      {
        t: 'p',
        html: '<b>Premise.</b> Resources are unlimited; every individual realises its full breeding potential; crowding exerts no brake.',
      },
      {
        t: 'p',
        html: '<b>Step 1: Write the rate of change.</b> In a small time interval, the change in number is births minus deaths. Per capita, with birth rate <i>b</i> and death rate <i>d</i>:<br><frac><num>d<i>N</i></num><den>d<i>t</i></den></frac> = (<i>b</i> − <i>d</i>) <i>N</i><br><b>Reasoning:</b> both births and deaths scale with how many individuals are already present: twice the population produces twice the babies and twice the corpses, so the change is proportional to <i>N</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 2: Collapse the constants.</b> Define the <b>intrinsic rate of natural increase</b> <i>r</i> = <i>b</i> − <i>d</i>:<br><frac><num>d<i>N</i></num><den>d<i>t</i></den></frac> = <i>rN</i><br><b>Reasoning:</b> only the net per-capita rate matters for growth, so we bundle <i>b</i> and <i>d</i> into a single <i>r</i>. If <i>r</i> > 0 the population grows; <i>r</i> < 0 it shrinks; <i>r</i> = 0 it is steady.',
      },
      {
        t: 'p',
        html: '<b>Step 3: Separate variables and integrate.</b><br><frac><num>d<i>N</i></num><den><i>N</i></den></frac> = <i>r</i> d<i>t</i> ⇒ ∫ <frac><num>1</num><den><i>N</i></den></frac> d<i>N</i> = ∫ <i>r</i> d<i>t</i> ⇒ ln <i>N</i> = <i>rt</i> + <i>C</i><br><b>Reasoning:</b> we isolate <i>N</i> on one side and <i>t</i> on the other so each can be integrated independently.',
      },
      {
        t: 'p',
        html: '<b>Step 4: Fix the constant with the initial condition.</b> At <i>t</i> = 0, <i>N</i> = <i>N</i><sub>0</sub>, so <i>C</i> = ln <i>N</i><sub>0</sub>. Substituting and exponentiating:<br>ln <frac><num><i>N</i></num><den><i>N</i><sub>0</sub></den></frac> = <i>rt</i> ⇒ <i>N</i><sub><i>t</i></sub> = <i>N</i><sub>0</sub> <i>e</i><sup><i>rt</i></sup><br><b>Reasoning:</b> <i>C</i> encodes where the population started; pinning it to <i>N</i><sub>0</sub> turns the general solution into the actual trajectory. The result is a curve that rises ever more steeply: the <b>J-shape</b>.',
      },
      { t: 'fig', id: 'b12-11-fig-11.4' },
      { t: 'p', html: '<b>Logistic growth</b>' },
      {
        t: 'p',
        html: '<b>Premise.</b> Resources are finite. A habitat can sustain <i>K</i> individuals (the carrying capacity); if <i>N</i> exceeds <i>K</i>, the growth rate becomes negative and the population falls back.',
      },
      {
        t: 'p',
        html: '<b>Step 1: Brake the exponential.</b> Multiply the exponential rate by a “room-left” factor:<br><frac><num>d<i>N</i></num><den>d<i>t</i></den></frac> = <i>rN</i> <frac><num>(<i>K</i> − <i>N</i>)</num><den><i>K</i></den></frac> = <i>rN</i> (1 − <frac><num><i>N</i></num><den><i>K</i></den></frac>)<br><b>Reasoning:</b> the term <frac><num>(<i>K</i> − <i>N</i>)</num><den><i>K</i></den></frac> is the fraction of carrying capacity still unused. When <i>N</i> is tiny it is ≈ 1, so growth is essentially exponential; as <i>N</i> → <i>K</i> it falls to 0, so growth halts. This single factor converts unlimited growth into self-limiting growth.',
      },
      {
        t: 'p',
        html: '<b>Step 2: Read off the endpoints.</b> When <i>N</i> = <i>K</i>, the factor <frac><num><i>K</i> − <i>N</i></num><den><i>K</i></den></frac> = 0, so <frac><num>d<i>N</i></num><den>d<i>t</i></den></frac> = 0: the population stops at carrying capacity. This is the <b>asymptote</b> the sigmoid approaches.',
      },
      {
        t: 'p',
        html: '<b>Step 3: Identify the phases.</b> Solving the equation (integral form below) traces a curve with four stretches: a slow <b>lag phase</b>, a steep <b>acceleration (log) phase</b>, a slowing <b>deceleration phase</b>, and a flat <b>asymptote</b> at <i>K</i>.<br><i>N</i><sub><i>t</i></sub> = <frac><num><i>K</i></num><den>1 + (<frac><num><i>K</i> − <i>N</i><sub>0</sub></num><den><i>N</i><sub>0</sub></den></frac>) <i>e</i><sup>−<i>rt</i></sup></den></frac>',
      },
      {
        t: 'p',
        html: '<b>Step 4: Locate the fastest growth.</b> Growth rate <frac><num>d<i>N</i></num><den>d<i>t</i></den></frac> is maximal where its own slope is zero, i.e. at <i>N</i> = <frac><num><i>K</i></num><den>2</den></frac>. Physically, this is the sweet spot: enough breeders present, still plenty of resources, which is why <frac><num><i>K</i></num><den>2</den></frac> is the target population for maximum sustainable harvest of fisheries and forests.',
      },
      {
        t: 'p',
        html: 'This is the <b>Verhulst–Pearl logistic model</b>, and because no real population enjoys infinite resources, it is regarded as the more realistic of the two.',
      },
      { t: 'fig', id: 'b12-11-fig-11.5' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board, 3 marks',
        q: 'A protected lake holds 800 fish at the start of a season. During the season 180 fish are born, 40 swim in from a connected stream, 110 die, and 30 leave through an outflow. Find the number of fish at the end of the season.',
        steps: [
          '<b>Given:</b> <i>N</i><sub><i>t</i></sub> = 800, <i>B</i> = 180, <i>I</i> = 40, <i>D</i> = 110, <i>E</i> = 30.',
          '<i>N</i><sub><i>t</i>+1</sub> = <i>N</i><sub><i>t</i></sub> + [(<i>B</i> + <i>I</i>) − (<i>D</i> + <i>E</i>)] = 800 + [(180 + 40) − (110 + 30)]',
          '= 800 + (220 − 140) = 800 + 80',
          'Because (<i>B</i> + <i>I</i>) = 220 > (<i>D</i> + <i>E</i>) = 140, the population rose.',
        ],
        ans: '880 fish',
      },
      {
        t: 'ex',
        tag: 'CUET, single-best MCQ',
        q: 'In the logistic equation <frac><num>d<i>N</i></num><den>d<i>t</i></den></frac> = <i>rN</i> <frac><num>(<i>K</i> − <i>N</i>)</num><den><i>K</i></den></frac>, the symbol <i>K</i> denotes: <b>(a)</b> intrinsic rate of natural increase <b>(b)</b> initial population density <b>(c)</b> carrying capacity <b>(d)</b> population density after time <i>t</i>',
        steps: [
          '<b>Answer: (c).</b> <i>K</i> is the maximum population the habitat can sustain. Eliminate (a): that is <i>r</i>; eliminate (b): that is <i>N</i><sub>0</sub>; eliminate (d): that is <i>N</i><sub><i>t</i></sub>. Only (c) survives.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET, numerical',
        q: 'A mite population of 60 individuals grows exponentially with <i>r</i> = 0.2 day<sup>−1</sup> under glut conditions. Estimate its size after 10 days. (Take <i>e</i><sup>2</sup> ≈ 7.39.)',
        steps: [
          '<i>N</i><sub><i>t</i></sub> = <i>N</i><sub>0</sub> <i>e</i><sup><i>rt</i></sup> = 60 × <i>e</i><sup>(0.2)(10)</sup> = 60 × <i>e</i><sup>2</sup> ≈ 60 × 7.39',
          '<b>Speed note:</b> recognise <i>rt</i> = 2 immediately so you only need <i>e</i><sup>2</sup>; don’t waste time computing <i>e</i><sup>0.2</sup> ten times.',
        ],
        ans: '443 mites',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty, multi-step',
        q: 'A deer population follows logistic growth with <i>r</i> = 0.1 yr<sup>−1</sup> and <i>K</i> = 2000. (i) Find the instantaneous growth rate when <i>N</i> = 500. (ii) At what population size is the growth rate the greatest, and what is that maximum rate?',
        steps: [
          '(i) <frac><num>d<i>N</i></num><den>d<i>t</i></den></frac> = <i>rN</i> <frac><num>(<i>K</i> − <i>N</i>)</num><den><i>K</i></den></frac> = 0.1 × 500 × <frac><num>2000 − 500</num><den>2000</den></frac> = 0.1 × 500 × 0.75',
          '(ii) Growth rate is maximal at <i>N</i> = <frac><num><i>K</i></num><den>2</den></frac> = 1000:',
          '<frac><num>d<i>N</i></num><den>d<i>t</i></den></frac> |<sub><i>N</i>=<i>K</i>/2</sub> = 0.1 × 1000 × <frac><num>2000 − 1000</num><den>2000</den></frac> = 0.1 × 1000 × 0.5',
          '<b>Reasoning:</b> the growth rate is a downward parabola in <i>N</i> (it is 0 at <i>N</i> = 0 and at <i>N</i> = <i>K</i>), so it peaks exactly halfway, at <frac><num><i>K</i></num><den>2</den></frac>.',
        ],
        ans: '(i) 37.5 ind. yr<sup>−1</sup>; (ii) 50 ind. yr<sup>−1</sup>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define carrying capacity and explain, using the logistic equation, why population growth stops when <i>N</i> = <i>K</i>.',
            a: '<i>K</i> = max individuals a habitat can support; at <i>N</i> = <i>K</i>, the factor <frac><num><i>K</i> − <i>N</i></num><den><i>K</i></den></frac> = 0, so <frac><num>d<i>N</i></num><den>d<i>t</i></den></frac> = 0.',
          },
          {
            q: '[CUET] The integral form of the exponential growth equation is: <b>(a)</b> <i>N</i><sub><i>t</i></sub> = <i>N</i><sub>0</sub> <i>e</i><sup>−<i>rt</i></sup> <b>(b)</b> <i>N</i><sub><i>t</i></sub> = <i>N</i><sub>0</sub> <i>e</i><sup><i>rt</i></sup> <b>(c)</b> <i>N</i><sub><i>t</i></sub> = <i>N</i><sub>0</sub> + <i>rt</i> <b>(d)</b> <i>N</i><sub><i>t</i></sub> = <frac><num><i>K</i></num><den>1 + <i>e</i><sup>−<i>rt</i></sup></den></frac>.',
            a: '(b).',
          },
          {
            q: '[NEET] A pond has 25 lotus plants at the start of the year; reproduction adds 15 new plants and none are lost. Calculate the per-capita birth rate (natality).',
            a: '<frac><num>15</num><den>25</den></frac> = 0.6 offspring per plant per year.',
          },
          {
            q: '[NEET] A bacterial culture of 1 × 10<sup>3</sup> cells grows exponentially with <i>r</i> = 0.69 h<sup>−1</sup>. Roughly how long until it doubles? (Use ln 2 ≈ 0.69.)',
            a: '<i>t</i> = <frac><num>ln 2</num><den><i>r</i></den></frac> = <frac><num>0.69</num><den>0.69</den></frac> = 1 hour.',
          },
          {
            q: '[NEET high-difficulty] Assertion: The logistic model is considered more realistic than the exponential model. Reason: No natural habitat offers truly unlimited resources, so competition eventually limits growth. Choose the correct A–R option: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: '(a) Both true, R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The number of individuals in a population increases only when:',
        opts: [
          { label: '(<i>B</i> + <i>I</i>) < (<i>D</i> + <i>E</i>)', nudge: 'This gives a decline.' },
          {
            label: '(<i>B</i> + <i>I</i>) = (<i>D</i> + <i>E</i>)',
            nudge: 'This gives a steady population (zero net change): a classic trap for students who skim the question.',
          },
          { label: '(<i>B</i> + <i>I</i>) > (<i>D</i> + <i>E</i>)', nudge: null },
          { label: 'emigration exceeds immigration', nudge: 'This alone does not give the net change, because births and deaths also count.' },
        ],
        correct: 2,
        solution: 'Inflow (births + immigration) must beat outflow (deaths + emigration).',
      },
      {
        t: 'mcq',
        q: 'The J-shaped curve is characteristic of a population in which:',
        opts: [
          { label: 'resources are unlimited and crowding has no effect', nudge: null },
          {
            label: 'carrying capacity is fixed',
            nudge: '<b>(b)</b> and <b>(c)</b> are features of logistic (S-shaped) growth, chosen by students who confuse the two models.',
          },
          {
            label: 'growth rate falls to zero at <i>K</i>',
            nudge: '<b>(b)</b> and <b>(c)</b> are features of logistic (S-shaped) growth, chosen by students who confuse the two models.',
          },
          { label: 'births equal deaths', nudge: 'This describes a static population (no growth at all).' },
        ],
        correct: 0,
        solution: 'Unlimited resources → exponential → J-shape.',
      },
      {
        t: 'mcq',
        q: 'In the logistic model, the population grows fastest when <i>N</i> equals:',
        opts: [
          { label: '<i>K</i>', nudge: 'This is where growth stops (asymptote).' },
          { label: '<frac><num><i>K</i></num><den>2</den></frac>', nudge: null },
          {
            label: '2<i>K</i>',
            nudge: '2<i>K</i> is above <i>K</i>, where <frac><num>d<i>N</i></num><den>d<i>t</i></den></frac> < 0, so the population would be declining, so 2<i>K</i> cannot be the point of fastest growth.',
          },
          { label: '0', nudge: 'This is an empty population: the rate is 0, and growth cannot start from no individuals.' },
        ],
        correct: 1,
        solution:
          'The growth rate is a parabola in <i>N</i>, zero at both <i>N</i> = 0 and <i>N</i> = <i>K</i>, so it peaks midway at <frac><num><i>K</i></num><den>2</den></frac>.',
      },
      {
        t: 'mcq',
        q: 'The intrinsic rate of natural increase (<i>r</i>) is defined as:',
        opts: [
          { label: '<i>b</i> + <i>d</i>', nudge: 'This sums them: meaningless for net change.' },
          { label: '<i>b</i> − <i>d</i>', nudge: null },
          { label: '<i>b</i> × <i>d</i>', nudge: 'This is a fabricated product.' },
          {
            label: '<i>d</i> − <i>b</i>',
            nudge: 'This reverses the sign, giving the rate of decline: the trap for students who don’t track which term leads.',
          },
        ],
        correct: 1,
        solution: '<i>r</i> is the net per-capita rate, births minus deaths.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing the two curves.</b> J-shaped = exponential = unlimited resources, no <i>K</i>. S-shaped = logistic = finite resources, fixed <i>K</i>. If a question gives a carrying capacity <i>K</i>, it is usually pointing to logistic growth.',
          '<b>Sign-flipping <i>r</i>.</b> <i>r</i> = <i>b</i> − <i>d</i>, births minus deaths. Writing <i>d</i> − <i>b</i> silently turns growth into decline and is an easy numerical slip.',
          '<b>Forgetting immigration/emigration.</b> Many students compute only <i>B</i> − <i>D</i> and miss <i>I</i> and <i>E</i>. The full ledger is (<i>B</i> + <i>I</i>) − (<i>D</i> + <i>E</i>): read the question for arrivals and departures before answering.',
          '<b>Misreading age pyramids.</b> A broad base = many pre-reproductive young = <b>expanding</b> (triangular); a bell shape = <b>stable</b>; an urn shape (narrow base) = <b>declining</b>. Base width tells the story.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For exponential numericals, compute <i>rt</i> first and look for a clean exponent (<i>rt</i> = 1, 2, ln 2 …). Questions are often set so that the exponent is a value you can evaluate mentally; if yours is ugly, recheck your arithmetic before reaching for a calculator.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Four taps of density',
            note: 'Natality (<i>B</i>), Immigration (<i>I</i>) add; Mortality (<i>D</i>), Emigration (<i>E</i>) remove. <i>N</i><sub><i>t</i>+1</sub> = <i>N</i><sub><i>t</i></sub> + [(<i>B</i> + <i>I</i>) − (<i>D</i> + <i>E</i>)]; grows if (<i>B</i> + <i>I</i>) > (<i>D</i> + <i>E</i>).',
          },
          {
            f: 'Density',
            note: '<i>ρ</i> = <frac><num><i>N</i></num><den><i>S</i></den></frac> (individuals per area/volume). Measure by % cover/biomass or indirect signs (pugmarks) when counting is impractical.',
          },
          {
            f: 'Exponential',
            note: '<frac><num>d<i>N</i></num><den>d<i>t</i></den></frac> = <i>rN</i> → <i>N</i><sub><i>t</i></sub> = <i>N</i><sub>0</sub><i>e</i><sup><i>rt</i></sup>; <b>J-shaped</b>; unlimited resources; <i>r</i> = <i>b</i> − <i>d</i> = intrinsic rate of natural increase.',
          },
          {
            f: 'Logistic (Verhulst–Pearl)',
            note: '<frac><num>d<i>N</i></num><den>d<i>t</i></den></frac> = <i>rN</i> <frac><num>(<i>K</i> − <i>N</i>)</num><den><i>K</i></den></frac>; <b>S-shaped (sigmoid)</b>; finite <i>K</i>; phases <b>Lag</b> → <b>Acceleration</b> → <b>Deceleration</b> → <b>Asymptote</b>; growth = 0 at <i>N</i> = <i>K</i>; fastest at <i>N</i> = <frac><num><i>K</i></num><den>2</den></frac>.',
          },
          {
            f: 'Age pyramids',
            note: 'broad base = <b>expanding</b>; bell = <b>stable</b>; urn = <b>declining</b>.',
          },
          {
            f: 'Other terms',
            note: 'vital index = <frac><num>natality</num><den>mortality</den></frac> × 100; biotic potential = max reproduction under ideal conditions; dispersion = uniform / random / clumped.',
          },
        ],
        aids: [
          '“J = Joyride (no limits); S = Slowed by the ceiling <i>K</i>.” And <i>r</i> is “rise” = births minus deaths.',
        ],
      },
    ],
  },
];
