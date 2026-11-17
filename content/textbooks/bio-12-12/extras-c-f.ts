import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 12 (Ecosystem), Additional topics C to F, word for word from the Class 12 Biology Master
 * Reference (book pp. 697 to 713): C "Nutrient Cycles Beyond Carbon: Nitrogen and Sulfur" (opens at p. 697 below
 * Addendum B's practice answers; its practice answers end on p. 699), D "Energy Flow: Ecological Efficiencies and
 * Multiple Trophic Calculations" (p. 700 to p. 702), E "Ecosystem Services: Valuation, Keystone Species, and Human
 * Impacts" (p. 702 to p. 704) and F "What NEET Actually Asks" (the book's "Addendum P", p. 704 to p. 713). Page 714 is
 * the next chapter.
 *
 * Topic indexes: C = 7, D = 8, E = 9, F = 10. The book's example headings ("Example C.1 - [NEET] Nitrogen-Fixing
 * Bacteria") become the example's tag (the bracket) and a bold lead on its question. No numbered figure and no
 * drawing falls in these pages. A table the book prints inside a question (Column I / Column II) is set as lines
 * of cells separated by " | ". Em dashes are written as colons, commas or brackets; "sub-topic" is "topic";
 * "(NEET 2019 pattern)" and the like are "(a recent NEET paper's pattern)". Where the book prints no answer line
 * of its own, the example's ans is ''.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic C · pp. 697–699 ─────────────────────────
  {
    n: 'C',
    title: 'Nutrient Cycles Beyond Carbon: Nitrogen and Sulfur',
    extra: true,
    kalam: 'These cycles share the gaseous/sedimentary distinction and involve specific microbial transformations that are tested independently.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter details the carbon (gaseous) and phosphorus (sedimentary) cycles and classifies nitrogen as gaseous and sulfur as sedimentary, but does not give the steps or the microbes of the nitrogen and sulfur cycles. These cycles share the gaseous/sedimentary distinction and involve specific microbial transformations that can be tested independently.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Classifying by reservoir.</b><br><br>• <b>Gaseous cycles:</b> reservoir in atmosphere: nitrogen (N<sub>2</sub> ~78% of atmosphere), carbon (CO<sub>2</sub>).<br>• <b>Sedimentary cycles:</b> reservoir in Earth’s crust: phosphorus (phosphates in rock), sulfur (sulfates in sedimentary rocks). Nutrients are released from rock slowly, mainly by weathering, and decomposers return what has entered living organisms.',
      },
      { t: 'p', html: '<b>Nitrogen cycle: four key transformations.</b>' },
      {
        t: 'table',
        title: null,
        head: ['Transformation', 'Process', 'Key organisms'],
        rows: [
          [
            'Nitrogen fixation',
            'N<sub>2</sub> → NH<sub>3</sub> (ammonia)',
            '<i>Azotobacter</i>, <i>Clostridium</i> (free-living); <i>Rhizobium</i> (symbiotic in legume root nodules)',
          ],
          ['Ammonification', 'Organic N → NH<sub>3</sub>', '<i>Bacillus</i> spp., fungi'],
          [
            'Nitrification',
            'NH<sub>3</sub> → NO<sub>2</sub><sup>−</sup> → NO<sub>3</sub><sup>−</sup>',
            '<i>Nitrosomonas</i> (ammonia-oxidising), <i>Nitrobacter</i> (nitrite-oxidising)',
          ],
          [
            'Denitrification',
            'NO<sub>3</sub><sup>−</sup> → N<sub>2</sub>',
            '<i>Pseudomonas</i>, <i>Thiobacillus</i> (anaerobic conditions)',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Sulfur cycle: key steps.</b><br>Sulfur reservoir is in sedimentary rocks as metal sulfides and sulfates. Weathering releases sulfate (SO<sub>4</sub><sup>2−</sup>), which plants absorb as sulfate ions. Sulfur enters the food chain in cysteine and methionine amino acids. Decomposition releases hydrogen sulfide (H<sub>2</sub>S), which <i>Thiobacillus</i> bacteria oxidise back to sulfate. Unlike carbon, sulfur has a minor atmospheric reservoir (H<sub>2</sub>S, SO<sub>2</sub>) but is predominantly sedimentary.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Nitrogen-Fixing Bacteria.</b> Name one free-living and one symbiotic nitrogen-fixing bacterium. Name the pigment present in the root nodules formed by the symbiotic partner and state its function.',
        steps: [
          'Free-living: <i>Azotobacter</i> (aerobic) or <i>Clostridium</i> (anaerobic). Symbiotic: <i>Rhizobium</i> (forms nodules on roots of leguminous plants). The nodules are pink-coloured due to the pigment leghaemoglobin, which binds free oxygen and so protects the oxygen-sensitive nitrogenase enzyme.',
        ],
        ans: 'Free-living: <i>Azotobacter</i>; Symbiotic: <i>Rhizobium</i>; pigment: leghaemoglobin (pink; binds oxygen and protects nitrogenase).',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Comparing Gaseous and Sedimentary Cycles.</b> With reference to their reservoirs, classify the nitrogen and sulfur cycles as gaseous or sedimentary. Which kind of cycle returns nutrients to the soil more slowly, and why?',
        steps: [
          'Nitrogen is gaseous (reservoir = atmosphere, N<sub>2</sub>). Sulfur is predominantly sedimentary (reservoir = Earth’s crust as metal sulfates and sulfides; its atmospheric pool of H<sub>2</sub>S and SO<sub>2</sub> is small). A <b>sedimentary cycle</b> returns nutrients more slowly, because the nutrient is released from its rock reservoir mainly by weathering and erosion, and there is no large atmospheric pool to draw on.',
        ],
        ans: 'Nitrogen = gaseous; Sulfur = sedimentary; sedimentary cycles are slower because nutrients are released from rock mainly by weathering.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Denitrification and Its Conditions.</b> Explain why denitrification occurs in waterlogged paddy fields and why it is considered a loss of usable nitrogen for crops.',
        steps: [
          'Denitrification is the conversion of nitrate (NO<sub>3</sub><sup>−</sup>) back to atmospheric nitrogen (N<sub>2</sub>) by anaerobic bacteria such as <i>Pseudomonas</i>. Waterlogged paddy fields lack oxygen, creating anaerobic conditions ideal for denitrifying bacteria. This converts plant-available nitrate into N<sub>2</sub> gas, which escapes to the atmosphere: a net loss of nitrogen from the soil that crops cannot directly use.',
        ],
        ans: 'Denitrification occurs in anaerobic (waterlogged) conditions; <i>Pseudomonas</i> reduces NO<sub>3</sub><sup>−</sup> to N<sub>2</sub>, removing usable nitrogen from the soil and returning it to the atmosphere.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State the reservoir for the nitrogen cycle and the sulfur cycle respectively.',
            a: 'Nitrogen: atmosphere (N<sub>2</sub>); Sulfur: Earth’s crust (sulfates and sulfides in rocks).',
          },
          {
            q: '[NEET] Name the bacteria that carry out (a) nitrogen fixation, (b) nitrification (first step), and (c) denitrification.',
            a: '(a) <i>Azotobacter</i> / <i>Rhizobium</i>; (b) <i>Nitrosomonas</i>; (c) <i>Pseudomonas</i>.',
          },
          {
            q: '[CUET] What is the role of leghaemoglobin in a root nodule?',
            a: 'Leghaemoglobin is a pink, oxygen-binding pigment in root nodules. It binds free oxygen, maintaining the low-oxygen environment needed to protect nitrogenase enzyme from oxidative inactivation.',
          },
          {
            q: '[NEET] Explain why the sulfur cycle is classified as sedimentary despite having an atmospheric component.',
            a: 'Sulfur’s largest pool is in Earth’s crust (sedimentary rocks); the atmospheric pool (H<sub>2</sub>S, SO<sub>2</sub>) is minor and transient. The defining reservoir is the crust, so it is classified as sedimentary.',
          },
          {
            q: '[NEET High-Difficulty] A farmer applies large quantities of nitrogenous fertiliser to a waterlogged field. Predict two nitrogen-cycling processes that may cause loss of applied nitrogen from the soil.',
            a: '(1) Denitrification: anaerobic bacteria convert NO<sub>3</sub><sup>−</sup> to N<sub>2</sub>, releasing it to the atmosphere. (2) Leaching: nitrate is water-soluble and percolates below the root zone, lost to groundwater.',
          },
          {
            q: '[CUET] Compare the carbon and nitrogen cycles in terms of (a) reservoir and (b) rate of cycling.',
            a: '(a) Carbon reservoir = atmosphere (CO<sub>2</sub>); Nitrogen reservoir = atmosphere (N<sub>2</sub>). Both are gaseous. (b) Carbon cycles quickly through photosynthesis and respiration; for nitrogen, the entry of N<sub>2</sub> into living things is limited, because only some prokaryotes (or lightning and industry) can fix it, and fixation needs a large amount of energy.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 700–702 ─────────────────────────
  {
    n: 'D',
    title: 'Energy Flow: Ecological Efficiencies and Multiple Trophic Calculations',
    extra: true,
    kalam: 'Lindeman’s ten percent law (1942): only about 10% of the energy at one trophic level is passed on to the next.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the 10% law (<i>E</i><sub><i>n</i>+1</sub> ≈ 0.1 <i>E</i><sub><i>n</i></sub>) and applies it along a food chain. It does not explore <b>ecological efficiencies</b> (how much of what a consumer ingests is assimilated and passed on) or <b>Lindeman’s efficiency</b> as a separate concept from the 10% rule, and it gives the grazing and detritus chains without energy fractions for each. These can appear in high-difficulty questions.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Lindeman’s ten percent law (1942).</b> Only about 10% of the energy at one trophic level is passed on to the next. Most of the rest is lost as heat in respiration; some leaves the level as faeces, excreta and dead matter, which enter the detritus pool.',
      },
      {
        t: 'p',
        html: '<b>Ecological efficiency =</b> <frac><num>Energy intake [or production] at level <i>n</i> + 1</num><den>Energy intake [or production] at level <i>n</i></den></frac> × 100, using the same measure at both levels. It depends on assimilation efficiency, production efficiency, and consumption efficiency. Lindeman’s law is the simplified case where the overall ecological efficiency is about 10%.',
      },
      {
        t: 'p',
        html: '<b>Components of what a consumer ingests:</b><br><br>Ingestion = Assimilation + Egestion (faeces).<br><br>Assimilation = Respiration + Production (biomass growth).<br><br>Production = Passed to next level + Death (enters detritus).',
      },
      {
        t: 'p',
        html: '<b>GFC versus DFC energy fractions.</b> In a terrestrial ecosystem, the detritus food chain (dead organic matter → detritivores → predators) carries a much larger share of the energy flow than the grazing food chain. In an aquatic ecosystem, the grazing food chain (phytoplankton → zooplankton → fish) carries the majority of energy flow.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Calculating Energy at Multiple Trophic Levels.</b> The net primary productivity of a grassland is 50,000 kJ m<sup>−2</sup> yr<sup>−1</sup>. Applying Lindeman’s 10% law, calculate the energy available at the tertiary consumer (4th trophic) level.',
        steps: [
          'The trophic levels are: 1st: producers (NPP, 50,000 kJ); 2nd: primary consumers (5,000 kJ); 3rd: secondary consumers (500 kJ); 4th: tertiary consumers (50 kJ). Each step applies the 10% transfer.',
        ],
        ans: '50 kJ m<sup>−2</sup> yr<sup>−1</sup>.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Ecological Efficiency Calculation.</b> A herbivore ingests 1,000 kJ of plant material. Of this, 400 kJ is egested as faeces, 300 kJ is lost as respiration, and the remaining energy is stored as biomass. Calculate (a) the assimilation efficiency and (b) the production, with its percentage of the ingested energy.',
        steps: [
          '(a) Assimilation = Ingestion − Egestion = 1,000 − 400 = 600 kJ. Assimilation efficiency = <frac><num>600</num><den>1,000</den></frac> × 100 = 60%.',
          '(b) Production = Assimilation − Respiration = 600 − 300 = 300 kJ. Production = 300 kJ = 30% of ingestion; this is the most that can pass to the next level, since part of it goes to the detritus when the animal dies.',
        ],
        ans: '(a) 60%; (b) production = 300 kJ (30% of ingestion), the most that can pass to the next trophic level.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Why 10% Is Only an Approximation.</b> A student claims that if producers capture 10,000 kJ, exactly 1,000 kJ will reach the primary consumer. Evaluate this statement.',
        steps: [
          'The 10% law states approximately 10% is transferred: it is an approximate average, not a fixed value or a strict upper limit. Actual transfer depends on ecological efficiency, which varies with organism type, temperature, and food quality. For example, herbivores on low-quality plant material may assimilate only 20–50% and pass far less than 10% to the next level. The statement is approximately correct as an average estimate, but the word “exactly” makes it imprecise.',
        ],
        ans: 'The 10% law is an approximate average; actual transfer depends on assimilation efficiency, respiration, and food quality. The statement overstates precision by using “exactly.”',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State Lindeman’s ten percent law of energy transfer.',
            a: 'Only about 10% of the energy at one trophic level is passed on to the next; the rest is lost, mostly as heat in respiration, with some passing to the detritus.',
          },
          {
            q: '[CUET] If producers fix 20,000 kJ m<sup>−2</sup> yr<sup>−1</sup>, how much energy is available to the secondary consumer (3rd trophic level)?',
            a: '20,000 → 2,000 (herbivores) → 200 kJ m<sup>−2</sup> yr<sup>−1</sup> (secondary consumers).',
          },
          {
            q: '[NEET] Distinguish between assimilation efficiency and ecological efficiency.',
            a: 'Assimilation efficiency = <frac><num>Energy assimilated</num><den>Energy ingested</den></frac> × 100. Ecological efficiency = <frac><num>Energy intake [or production] at level <i>n</i> + 1</num><den>Energy intake [or production] at level <i>n</i></den></frac> × 100. Ecological efficiency reflects both assimilation and production losses.',
          },
          {
            q: '[CUET] In a terrestrial ecosystem, which food chain (grazing or detritus) carries the larger fraction of energy flow? Why?',
            a: 'Detritus food chain carries the larger fraction in terrestrial ecosystems because most plant biomass dies and enters the detritus pool rather than being consumed by herbivores.',
          },
          {
            q: '[NEET] A carnivore assimilates 200 kJ from 500 kJ of prey consumed. Its respiration is 120 kJ. Calculate its production, the energy that can pass to the next trophic level.',
            a: 'Assimilation = 200 kJ. Respiration = 120 kJ. Production = 200 − 120 = 80 kJ: the energy stored in the carnivore’s body, available to the next level.',
          },
          {
            q: '[NEET High-Difficulty] Explain why a pyramid of energy is always upright despite the possibility of inverted pyramids of number and biomass.',
            a: 'Energy flow per unit area per year decreases at each transfer due to the second law of thermodynamics: some energy is dissipated as heat at every step and cannot be recovered. This makes an inverted pyramid of energy flow physically impossible, whereas number and biomass pyramids can invert when one large producer supports many small consumers.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 702–704 ─────────────────────────
  {
    n: 'E',
    title: 'Ecosystem Services: Valuation, Keystone Species, and Human Impacts',
    extra: true,
    kalam: 'The chapter defines ecosystem services and gives the Costanza valuation (US $33 trillion per year).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter defines ecosystem services and gives the Costanza valuation (US $33 trillion per year). It does not explain how the valuation is derived, what a keystone species is, or the mechanisms by which particular human activities degrade services. These are tested in NEET high-difficulty and CUET application questions.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Understanding the Costanza valuation.</b> Robert Costanza and colleagues (1997) estimated the economic value of 17 ecosystem services globally at approximately US $33 trillion per year, nearly double the global GNP at the time (~$18 trillion). The largest single component is soil formation (~50% of total value), followed by recreation and nutrient cycling (each below 10%), and then climate regulation and habitat for wildlife (about 6% each). In the original Costanza paper the half-share belongs to nutrient cycling, so these labels are the chapter’s (NCERT’s); learn them as printed for the exam.',
      },
      {
        t: 'p',
        html: '<b>Keystone species.</b> A species whose impact on ecosystem function and biodiversity is disproportionately large relative to its abundance. Removing it can trigger trophic cascades. Classic examples: sea otters (control sea urchins → protect kelp forests); elephants (create clearings and disperse seeds); bees (pollinate crops). The concept demonstrates that species are not interchangeable: some are hard to replace.',
      },
      {
        t: 'p',
        html: '<b>Human impacts on ecosystem services.</b> Deforestation reduces carbon sequestration and soil formation. Wetland drainage reduces flood control and water purification. Ocean acidification impairs shell formation in planktonic calcifiers and other marine organisms. These are the mechanisms by which human activity degrades the services the chapter lists.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Identifying a Keystone Species.</b> A coastal ecosystem has a dense population of sea urchins that overgraze kelp forests. A small number of sea otters predate the urchins, allowing kelp to recover. Explain why sea otters, and not sea urchins, are considered the keystone species.',
        steps: [
          'A keystone species is defined by its disproportionate effect on ecosystem structure relative to its abundance. Sea otters are present in small numbers but control sea urchin populations; without them, urchins overgraze kelp and the kelp forest is lost and the area can become an urchin barren. The urchins, though abundant, do not have this structuring effect. This is the classic keystone-predator example.',
        ],
        ans: 'Sea otters are keystone because, despite low numbers, they control sea urchin populations and maintain kelp forest structure; removing them can trigger a trophic cascade.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Soil Formation as the Dominant Ecosystem Service.</b> The Costanza valuation estimates soil formation at approximately 50% of total ecosystem service value. Explain why soil formation carries such a dominant share. (This split is NCERT’s labelling; in the original paper the half-share belongs to nutrient cycling. Answer as the chapter does.)',
        steps: [
          'Soil formation is slow (1 cm of topsoil takes 100–1,000 years to develop) and underpins nearly all terrestrial ecosystem services: food production, water filtration, nutrient cycling, carbon storage, and habitat provision. Because it is irreplaceable on human timescales, its loss would collapse agriculture and most terrestrial ecosystems, giving it an enormous replacement cost relative to other services.',
        ],
        ans: 'Soil formation is irreplaceable on human timescales, underpins food production and all other terrestrial services, and takes hundreds to thousands of years to form, making its economic value dominant.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Human Impact on Ecosystem Services.</b> Explain how deforestation affects two ecosystem services listed in NCERT: carbon storage and soil formation.',
        steps: [
          'Deforestation removes photosynthetic biomass that would otherwise fix atmospheric CO<sub>2</sub>, reducing the ecosystem’s carbon sequestration capacity and contributing to atmospheric CO<sub>2</sub> accumulation. It also removes tree root systems that bind soil, dramatically accelerating erosion: the topsoil formed over centuries can be lost in a single rainy season. Both carbon storage and soil formation services are degraded simultaneously.',
        ],
        ans: 'Deforestation reduces carbon storage (less photosynthesis = less CO<sub>2</sub> fixed) and soil formation (erosion accelerates, removing the nutrient-rich topsoil faster than it can regenerate).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State the approximate annual value of global ecosystem services according to Costanza and compare it with global GNP.',
            a: 'Approximately US $33 trillion per year, nearly double the global GNP of approximately US $18 trillion at the time of the estimate.',
          },
          {
            q: '[CUET] Define a keystone species and give one example.',
            a: 'A species with a disproportionately large effect on ecosystem structure relative to its abundance. Example: sea otter (<i>Enhydra lutris</i>), elephant (<i>Elephas maximus</i>), or honeybee (<i>Apis</i> spp.).',
          },
          {
            q: '[NEET] Which single ecosystem service accounts for approximately 50% of the Costanza valuation?',
            a: 'Soil formation (~50% of total value) as NCERT’s figure labels it.',
          },
          {
            q: '[CUET] Name two human activities that degrade ecosystem services and state one service affected by each.',
            a: 'Deforestation: reduces carbon storage and soil formation. Wetland drainage: reduces flood mitigation and water purification.',
          },
          {
            q: '[NEET] Explain why the loss of pollinator bees constitutes an ecosystem service degradation even though bees are small and easily overlooked.',
            a: 'Bees are small but provide pollination, a service that raises the yield of about 75% of the leading crop species and is essential for some. A small, easily overlooked group with a large effect on agriculture makes them functionally critical (a keystone-level service provider).',
          },
          {
            q: '[NEET High-Difficulty] A wetland area is drained for agriculture. Predict three ecosystem services that are lost or reduced as a result.',
            a: '(1) Flood mitigation: wetlands absorb and store excess water; drainage reduces this. (2) Water purification: wetland soils filter pollutants; drainage removes this function. (3) Nutrient cycling: wetlands recycle nitrogen and phosphorus; drainage disrupts microbial processing. (4) Habitat provision: migratory birds and fish lose breeding grounds.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F (the book’s Addendum P) · pp. 704–713 ─────────────────────────
  {
    n: 'F',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'NEET examiners build this chapter’s questions around a handful of recurring confusions.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      { t: 'p', html: 'Past NEET/AIPMT papers map onto the NCERT topics of this chapter as follows:' },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'How often it appears'],
        rows: [
          ['Ecosystem structure & productivity', 'Frequent: one or two questions in most papers'],
          ['Decomposition', 'Regular: about one question per paper'],
          ['Energy flow & ecological pyramids', 'Most frequent: often two or three questions'],
          ['Nutrient cycling', 'Regular: about one question per paper'],
          ['Ecological succession', 'Occasional'],
          ['Ecosystem services', 'Occasional one-mark question'],
        ],
        note: 'The book’s estimate from past papers, not official figures.',
      },
      {
        t: 'p',
        html: 'Check the current NTA syllabus for your attempt year to see which of these topics are examined.',
      },
      {
        t: 'p',
        html: '<b>What this means (the book’s estimate, not official figures):</b> Energy flow and ecological pyramids together carry the heaviest emphasis: they supply a large share of Ecosystem questions in past papers. The NPP = GPP − <i>R</i> relation and the distinction between standing crop and standing state are easy marks that the chapter text teaches well but that students still drop. Decomposition questions are predictable (the five-step order, humification vs mineralisation, lignin/chitin = slow). Nutrient cycling questions often turn on one trap: phosphorus is sedimentary and has no significant gaseous phase.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>1. The Definition/Fact Recall (straight MCQ)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A single sentence, one correct option from four. Tests whether you have locked a term.<br><b>Approach:</b> These are pure recall: the distractors are often the commonest student misconceptions. The trick is to eliminate by finding the one wrong modifier, not by searching for the right definition.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example, reconstructed:</b> The rate at which light energy is converted into chemical energy of organic molecules in an ecosystem is the ecosystem’s:<br>(a) net primary productivity<br>(b) gross secondary productivity<br>(c) net secondary productivity<br>(d) gross primary productivity',
        steps: [
          '<b>Worked answer:</b> The question asks for the rate of conversion of light to chemical energy. Gross primary productivity (GPP) is exactly this: the total photosynthetic production rate, before any respiratory costs are deducted. Net primary productivity is GPP minus respiration, so it is already a reduced figure. Secondary productivity refers to consumers, not producers.',
        ],
        ans: '(d)',
      },

      { t: 'p', html: '<b>2. The Statement-Based Question (two-to-four statements, “which is/are correct?”)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Three or four numbered statements; you must pick the correct combination (e.g., “statements (i) and (iii) only”). This is a frequent format.<br><b>Approach:</b> Evaluate each statement independently against the textbook. Do not assume that a correct-looking statement is true just because its neighbour is true: each must survive on its own.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example, reconstructed (a recent NEET paper’s pattern):</b> Which of the following statements is/are correct about decomposition?<br>(i) Decomposition rate is slower if detritus is rich in lignin and chitin, and quicker if detritus is rich in nitrogen and water-soluble substances like sugars.<br>(ii) Decomposition rate is slower if detritus is rich in nitrogen and water-soluble substances like sugars, and quicker if detritus is rich in lignin and chitin.<br>(iii) Decomposition rate is quicker if detritus is rich in lignin, and lower if detritus is rich in sulphur.<br>(a) Only (i)<br>(b) Only (ii)<br>(c) Only (i) and (iii)<br>(d) All are correct',
        steps: [
          '<b>Worked answer:</b> Statement (i): Lignin and chitin are chemically resistant → slow decomposition; nitrogen- and sugar-rich detritus is rapidly metabolised → fast decomposition. This is textbook. True.',
          'Statement (ii): This reverses (i) entirely. False.',
          'Statement (iii): Lignin slows decomposition, not speeds it up; the sulphur clause is not a standard determinant of decomposition rate. False.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>3. The Assertion–Reason Question</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two statements, an Assertion (A) and a Reason (R), with four option patterns:<br>• (a) Both true; R correctly explains A<br>• (b) Both true; R does not explain A<br>• (c) A true; R false<br>• (d) A false; R true<br><b>Approach:</b> Evaluate A and R independently first. Only if both are true, ask whether R is genuinely the cause of A. The most common mistake is marking (a) whenever both statements look plausible: you must check causal connection.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example, reconstructed (a recent NEET paper’s pattern):</b> Assertion (A): Net primary productivity is gross primary productivity minus respiration.<br>Reason (R): Secondary productivity is produced by heterotrophs.<br>(a) Both A and R are true, and R correctly explains A<br>(b) Both A and R are true, but R does not correctly explain A<br>(c) A is true but R is false<br>(d) A is false but R is true',
        steps: [
          '<b>Worked answer:</b> A: The NCERT definition of NPP is GPP − <i>R</i> (respiratory loss by producers). A is true.',
          'R: Secondary productivity is defined as the rate of new organic-matter formation by consumers (heterotrophs). This is a true statement but it has nothing to do with the relationship between GPP and NPP. R is true but does not explain A.',
        ],
        ans: '(b)',
      },

      { t: 'p', html: '<b>4. The Match-the-Column Question</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two columns of four items each; you must pair A–I, B–II, etc. Often includes conceptual pairings (standing state vs standing crop; gaseous vs sedimentary cycles).<br><b>Approach:</b> Draw a quick two-by-two or three-by-three table. Eliminate mismatches using hard definitions. Watch for one-to-many traps (some columns may have more than one correct match in the original paper, but the option format forces a single best pairing).',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example, reconstructed:</b> Match column I with column II and choose the correct option.<br><br>Column I | Column II<br>A. Standing state | I. Nitrogen, Carbon<br>B. Gaseous cycles | II. Amount of nutrients present in soil at a time<br>C. Standing crop | III. Sulphur, Phosphorus<br>D. Sedimentary cycles | IV. Living matter at different trophic levels<br><br>(a) A–II; B–I; C–IV; D–III<br>(b) A–I; B–II; C–III; D–IV<br>(c) A–III; B–II; C–IV; D–I<br>(d) A–I; B–IV; C–III; D–II',
        steps: [
          '<b>Worked answer:</b> A. Standing state = amount of nutrients in soil at a given time → II.',
          'B. Gaseous cycles have atmospheric reservoirs (carbon, nitrogen) → I.',
          'C. Standing crop = living biomass at trophic levels → IV.',
          'D. Sedimentary cycles are reservoired in rocks (phosphorus, sulphur) → III.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>5. The Diagram-Based Pyramid / Food-Chain Identification</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A pyramid diagram (often inverted) with trophic levels labelled PP, PC, SC, TC, or a food web with numbered organisms. You must identify which pyramid type it represents or match organisms to trophic positions.<br><b>Approach:</b> Identify the parameter being plotted (number, biomass, or energy). Check whether producers or top consumers are larger. Apply the two rules: (1) the pyramid of energy, which shows energy flow per unit area per year, is always upright; (2) biomass pyramid can invert in aquatic ecosystems. For food webs, count the arrows: each arrow = one feeding link.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example, reconstructed (a recent NEET paper’s pattern):</b> The pyramid of numbers for a parasitic food chain is:<br>(a) linear<br>(b) upright<br>(c) inverted<br>(d) spindle-shaped',
        steps: [
          '<b>Worked answer:</b> In a parasitic food chain, a single large host (the base) supports many smaller parasites, which support still smaller hyperparasites. The base is one individual; the next level has many. Therefore the number pyramid is inverted.',
        ],
        ans: '(c)',
      },

      { t: 'p', html: '<b>6. The Critical-Thinking / Application Question</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A short scenario or a single fact that requires you to apply a principle. Often asks “which of the following could be true?” or “which is the correct food chain?”<br><b>Approach:</b> Reconstruct the logical chain. For food chains, verify that each link is a genuine predator-prey pair moving from producer upward. Energy must flow in one direction: Sun → producer → herbivore → carnivore → top carnivore. If a link runs backward (e.g., eagle → snake), it is wrong.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example, reconstructed (a recent NEET paper’s pattern):</b> Which one is the correct food chain?<br>(a) Eagle → Snake → Grasshopper → Grass → Frog<br>(b) Frog → Snake → Eagle → Grasshopper → Grass<br>(c) Grasshopper → Grass → Snake → Frog → Eagle<br>(d) Grass → Grasshopper → Frog → Snake → Eagle',
        steps: [
          '<b>Worked answer:</b> A food chain must start with a producer and move forward: Grass (producer) → Grasshopper (herbivore) → Frog (primary carnivore) → Snake (secondary carnivore) → Eagle (top carnivore).',
          'Option (d) is the only sequence that respects both the direction of energy flow and a valid predator-prey relationship.',
        ],
        ans: '(d)',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: 'NEET examiners build this chapter’s questions around a handful of recurring confusions. Knowing them by name lets you scan the options and kill the wrong answer instantly.',
      },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What it looks like', 'Why it catches students'],
        rows: [
          [
            'NPP = GPP + <i>R</i>',
            'Using the wrong sign in the NPP equation; marking A false in assertion-reason because of this',
            'The subtraction is repeatedly misremembered as addition',
          ],
          [
            'PAR = 2–10 %',
            'Treating 2–10 % as the PAR fraction of total solar radiation',
            'Students confuse “PAR fraction of incident radiation” (< 50 %) with “plant capture of PAR” (2–10 %)',
          ],
          [
            'Energy pyramid can invert',
            'Any option stating or implying an inverted energy pyramid',
            'The second law of thermodynamics makes this impossible for energy flow per unit area per year, but the inversion of the biomass pyramid in the open sea is so memorable it overgeneralises',
          ],
          [
            'Lignin / chitin = fast',
            'Selecting the option that says “rich in lignin decomposes quickly”',
            'The resistance of lignin is well-known, but the trap reverses it to test whether students have actually read the factors table',
          ],
          [
            'Phosphorus has a gaseous phase',
            'Labelling phosphorus as gaseous, or saying it is released by respiration',
            'The phosphorus cycle’s defining feature is its negligible atmospheric phase',
          ],
          [
            'Pioneer on bare rock = mosses',
            'Selecting mosses or grasses as the pioneer community',
            'Lichens are the textbook pioneer on bare rock; mosses and grasses arrive in later seral stages',
          ],
          [
            'Standing crop = standing state',
            'Confusing biomass (living matter) with nutrients in the soil',
            'Both terms begin with “standing” and appear in the same section, so students mentally merge them',
          ],
          [
            '$33 trillion = global GNP',
            'Mixing up the Costanza valuation with the GNP comparison',
            '$33 trillion is the value of ecosystem services; $18 trillion is the global GNP they are compared to',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      { t: 'p', html: 'Eight questions in ascending difficulty, each checked against NCERT.' },
      {
        t: 'practice',
        items: [
          {
            q: '[Easy (recall)] The annual net primary productivity of the whole biosphere is approximately:<br>(a) 155 billion tonnes dry weight of organic matter<br>(b) 160 billion tonnes dry weight of organic matter<br>(c) 165 billion tonnes dry weight of organic matter<br>(d) 170 billion tonnes dry weight of organic matter',
            a: '(d) 170 billion tonnes.<br>Source: NCERT XII, Chapter 12: this is a direct recall number, stated explicitly in the text.',
          },
          {
            q: '[Easy (recall)] Which of the following is a sedimentary type of biogeochemical cycle?<br>(a) Carbon and carbon monoxide<br>(b) Oxygen and nitrogen<br>(c) Phosphate and nitrogen<br>(d) Phosphorus and sulphur',
            a: '(d) Phosphorus and sulphur.<br>Gaseous cycles (atmosphere reservoir): carbon, nitrogen, oxygen. Sedimentary cycles (rock/crust reservoir): phosphorus, sulphur. Note that sulphur has a minor gaseous phase, but its primary reservoir is sedimentary: the NCERT classification places it here.',
          },
          {
            q: '[Medium (application)] Two identical piles of leaf litter are placed, one in a warm humid tropical forest and one in a cold dry alpine meadow. In which will the rate of decomposition be faster, and which climatic factors primarily determine the rate?<br>(a) Alpine meadow; temperature and moisture<br>(b) Tropical forest; temperature and moisture<br>(c) Tropical forest; oxygen and nitrogen content of litter<br>(d) Both equal; light availability',
            a: '(b) Tropical forest; temperature and moisture.<br>Decomposition is fastest under warm, moist, well-aerated conditions because microbial activity is temperature- and moisture-dependent. The alpine site is cold and dry: both factors suppress decomposition.',
          },
          {
            q: '[Medium (application)] The correct order of the process of decomposition is:<br>(a) Catabolism → Fragmentation → Leaching → Humification → Mineralisation<br>(b) Fragmentation → Leaching → Catabolism → Humification → Mineralisation<br>(c) Catabolism → Leaching → Humification → Fragmentation → Mineralisation<br>(d) Humification → Mineralisation → Fragmentation → Leaching → Catabolism',
            a: '(b) Fragmentation → Leaching → Catabolism → Humification → Mineralisation.<br><b>Memory aid:</b> Frogs Leap Carefully, Hares Move (F-L-C-H-M). All five steps run simultaneously on different bits of detritus; this is their logical sequence.',
          },
          {
            q: '[Medium (application)] A single old banyan tree supports thousands of leaf-eating insects, which in turn support a larger number of parasitic mites. For this system, which pyramids are inverted?<br>(a) Pyramid of number only<br>(b) Pyramid of biomass only<br>(c) Pyramid of energy only<br>(d) Both number and biomass',
            a: '(a) Pyramid of number only.<br>One producer (banyan) but thousands of insects and still more mites → number pyramid is inverted. The tree’s biomass dwarfs its parasites → biomass pyramid is upright. The pyramid of energy, which shows energy flow per unit area per year, is always upright (second law of thermodynamics).',
          },
          {
            q: '[Hard (analysis / multi-step)] The GPP of a grassland ecosystem is 20,000 kcal m<sup>−2</sup> yr<sup>−1</sup> and the respiratory loss by the producers is 7,000 kcal m<sup>−2</sup> yr<sup>−1</sup>. What is the NPP, and how much energy is available to the secondary consumers?<br>(a) 13,000 kcal m<sup>−2</sup> yr<sup>−1</sup>; 130 kcal m<sup>−2</sup> yr<sup>−1</sup><br>(b) 13,000 kcal m<sup>−2</sup> yr<sup>−1</sup>; 1,300 kcal m<sup>−2</sup> yr<sup>−1</sup><br>(c) 27,000 kcal m<sup>−2</sup> yr<sup>−1</sup>; 270 kcal m<sup>−2</sup> yr<sup>−1</sup><br>(d) 13,000 kcal m<sup>−2</sup> yr<sup>−1</sup>; 130,000 kcal m<sup>−2</sup> yr<sup>−1</sup>',
            a: '(a) 13,000 kcal m<sup>−2</sup> yr<sup>−1</sup>; 130 kcal m<sup>−2</sup> yr<sup>−1</sup>.<br><b>Step 1 (NPP):</b><br>NPP = GPP − <i>R</i> = 20,000 − 7,000 = 13,000 kcal m<sup>−2</sup> yr<sup>−1</sup>.<br><b>Step 2 (secondary consumers, 3rd trophic level):</b><br>Producers → herbivores (× 0.1) → secondary consumers (× 0.1 again).<br>13,000 × 0.1 = 1,300; then 1,300 × 0.1 = 130 kcal m<sup>−2</sup> yr<sup>−1</sup>.',
          },
          {
            q: '[Hard (analysis / multi-step)] Assertion (A): Pyramid of energy may be upright or inverted depending on the ecosystem.<br>Reason (R): Only about 10 % of energy goes to the next trophic level.<br>(a) Both A and R are true, and R correctly explains A<br>(b) Both A and R are true, but R does not correctly explain A<br>(c) A is true but R is false<br>(d) A is false but R is true',
            a: '(d) A is false but R is true.<br>A is false: by the second law of thermodynamics, energy is lost as heat at every trophic transfer. The energy available at each successive level is strictly less than the level below it: the pyramid of energy, as energy flow per unit area per year, is always upright and cannot invert.<br>R is true: Lindeman’s 10 % law is correctly stated.',
          },
          {
            q: '[Hard (analysis / multi-step)] Assertion (A): Phosphorus has no significant respiratory release into the atmosphere.<br>Reason (R): The phosphorus cycle is a sedimentary cycle with rock as its reservoir and a negligible gaseous phase.<br>(a) Both A and R are true, and R correctly explains A<br>(b) Both A and R are true, but R does not correctly explain A<br>(c) A is true but R is false<br>(d) A is false but R is true',
            a: '(a) Both A and R are true, and R correctly explains A.<br>A is true: organisms do not release phosphorus as a gas, so there is no phosphorus analogue of CO<sub>2</sub> respiration.<br>R is true: the phosphorus cycle is sedimentary, its reservoir is rock (phosphate minerals), and it has essentially no atmospheric phase.<br>R explains A: because there is no gaseous phase, there is no respiratory release pathway for phosphorus.',
          },
        ],
      },

      { t: 'part', title: 'Three Places to Drill Before the Exam' },
      {
        t: 'p',
        html: 'Three parts of this chapter repay extra practice, because NEET often tests them.<br>1. <b>Drill the NPP = GPP − <i>R</i> equation with numericals.</b> Know it as a direct recall item and as the first step of a multi-step calculation (apply the 10 % law after finding NPP). Work at least five graded numericals at different trophic levels, not just one.<br>2. <b>Learn when each Eltonian pyramid can invert, as a decision tree.</b> Diagram questions often show an inverted pyramid and ask which type it could be. The pyramid of energy (energy flow per unit area per year) never inverts; the number pyramid inverts for a single large tree or a parasitic food chain; the biomass pyramid inverts in the open sea, where tiny phytoplankton support a larger consumer biomass.<br>3. <b>Fix which number is which in ecosystem services.</b> A common trap is swapping the two figures: US $33 trillion is the value of the services and US $18 trillion is the global GNP. Use the mnemonic “33 is the gift, 18 is the GNP.”',
      },
    ],
  },
];
