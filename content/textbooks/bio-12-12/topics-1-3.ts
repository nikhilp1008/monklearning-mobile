import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12, Chapter 12 (Ecosystem), Topics 01 to 03: pp. 659 to 679 of the Class 12
 * Biology Master Reference, word for word. The chapter title page and contents
 * (pp. 656 to 658) are not copied. Topic 01 (Ecosystem: Structure & Productivity,
 * pp. 659 to 665), Topic 02 (Decomposition, pp. 666 to 672) and Topic 03 (Energy
 * Flow & Ecological Pyramids, pp. 673 to 679) have the book's eight sections. The
 * book prints them as "Chapter 1", "Chapter 2" and "Chapter 3"; they are Topics 01
 * to 03. "subtopic" becomes "topic". Figures 12.1 (caption p. 662, drawn p. 663),
 * 12.2 (caption p. 669, drawn p. 670) and 12.3 (caption p. 675, drawn p. 676) are
 * redrawn in lib/diagrams/biology-12-12.ts. Emphasis italics are dropped; no em dashes.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 659–665 ─────────────────────────
  {
    n: '01',
    title: 'Ecosystem: Structure & Productivity',
    kalam: 'A functional unit of nature where biotic and abiotic components interact and function as a unit.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This topic is a scoring topic. CBSE Boards ask 1–3 mark definitions and short-answers (“structural vs functional features”, “define standing crop”). CUET asks it as MCQs (components, units, GPP/NPP). NEET typically draws 1–2 questions a year on the NPP = GPP − <i>R</i> relation, productivity units, and the standing crop vs standing state trap. (These frequencies are the book’s estimate from past papers, not official figures.) Everything in energy flow and the ecological pyramids is built on the productivity ideas you lock down here.',
      },
      {
        t: 'p',
        html: 'Picture your neighbourhood <b>sabzi mandi</b> early in the morning. Vegetables arrive, money changes hands, waste piles up at the back, and a municipal cart clears it by evening. Nobody is “in charge”, yet the whole thing runs as a single working unit because its parts keep interacting. An <b>ecosystem</b> is exactly this: a functional unit of nature where living organisms interact among themselves and with their surrounding non-living environment, and keep functioning as a unit.',
      },
      {
        t: 'p',
        html: 'The “non-living” half is the <b>abiotic</b> component: light, temperature, water, soil, and the inorganic nutrients dissolved in them. The “living” half is the <b>biotic</b> component, which comes in three jobs: <b>producers</b> (autotrophs: green plants, algae, photosynthetic bacteria, that trap sunlight and build food), <b>consumers</b> (heterotrophs that eat others), and <b>decomposers</b> (saprotrophs like fungi and bacteria that break down the dead). Take any one of these away and the unit stops working properly.',
      },
      {
        t: 'p',
        html: 'An ecosystem can be as small as the <b>matka</b> of water on your balcony or a single pond, and as large as a whole sal forest or a sea. Many ecologists treat the entire <b>biosphere</b> as one global ecosystem. To make this manageable we split ecosystems into <b>terrestrial</b> (forest, grassland, desert) and <b>aquatic</b> (pond, lake, wetland, river, estuary). A <b>pond</b> is the classic teaching example because it is small, self-sustaining, and yet contains every structural and functional piece in miniature.',
      },
      {
        t: 'p',
        html: 'Look closely at that pond and you can see the whole machine running in one shallow water body. Its <b>abiotic</b> part is the water itself, with all the inorganic and organic substances dissolved in it, plus the light and warmth reaching it. Its <b>producers</b> are the floating phytoplankton, algae, and the submerged and marginal plants that trap the sun’s energy. Its <b>consumers</b> are the zooplankton and the fish that feed along the chain, and its <b>decomposers</b> (fungi, bacteria and flagellates) work mainly at the bottom, where the dead settle. None of these living members has to be brought in from outside: the pond receives sunlight every day, and the same recycled nutrients keep the unit ticking, which is exactly what “self-sustaining” means. Read the pond this way and every later idea (who eats whom, how fast biomass is built) already has a home.',
      },
      {
        t: 'p',
        html: 'Now, structure. An ecosystem has two structural faces. <b>Species composition</b> is the guest-list: which plant and animal species live here, found by identification and enumeration. <b>Stratification</b> is the seating plan: the vertical layering of species. In a forest, tall trees occupy the top stratum, shrubs the middle, and herbs and grasses the bottom. Stratification is more pronounced in a tropical rainforest than in a temperate forest, because the vertical structure there is far more complex.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Treat the ecosystem like your school. The <b>attendance register</b> (who is enrolled) is its species composition. The <b>floor each class sits on</b>, seniors upstairs, juniors below, is its stratification. The register and the floor plan together describe the structure; the actual teaching, exams and canteen sales are the function.',
      },
      {
        t: 'p',
        html: 'That brings us to the first functional aspect: <b>productivity</b>. Think of the ecosystem as a business. The producers are the only earners: they “earn” energy by photosynthesis. Some of that income is immediately spent on the producers’ own running costs (respiration). Whatever is left over is the savings that everyone higher up (herbivores, carnivores, decomposers) gets to live on. <b>Productivity is the rate at which this biomass is built</b>, per unit area per unit time. It is a flow, like monthly income, never a one-time lump.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> (1) Ecosystem boundaries are a convenience: real ecosystems are open, exchanging energy and matter with their neighbours; a pond and its catchment are not truly sealed. (2) An ecosystem can be <b>incomplete</b>: an aquarium, with few producers for its animals, or the deep aphotic ocean, with no photosynthetic producers, cannot self-sustain and depends on outside input. (3) Productivity is a <b>rate</b>; a common conceptual slip is confusing it with the amount of biomass standing there at a moment: that stock has its own name (standing crop), and the two are not interchangeable.',
      },

      { t: 'part', title: 'Key definitions and quantitative relations' },
      { t: 'def', term: 'Ecosystem', html: 'a functional unit of nature where biotic and abiotic components interact and function as a unit.' },
      { t: 'def', term: 'Species composition', html: 'the set of plant and animal species present, determined by identification and enumeration.' },
      { t: 'def', term: 'Stratification', html: 'the vertical distribution of different species occupying different levels (e.g. trees → shrubs → herbs in a forest).' },
      { t: 'def', term: 'Standing crop', html: 'the amount of living biomass present at a trophic level at a given time. Usually measured as <b>dry weight</b> (water content varies and would distort fresh-weight comparisons).' },
      { t: 'def', term: 'Standing state', html: 'the amount of nutrients (e.g. N, P, C) present in the soil at a given time. It differs between ecosystems and between seasons.' },
      { t: 'def', term: 'Productivity', html: 'the rate of biomass (organic matter) production per unit area per unit time. It is of two kinds: primary (by producers) and secondary (by consumers).' },
      { t: 'def', term: 'Gross Primary Productivity (GPP)', html: 'the total rate of organic-matter production by producers through photosynthesis, including what is later used up in respiration.' },
      { t: 'def', term: 'Net Primary Productivity (NPP)', html: 'the organic matter left with producers after their own respiratory loss; this is the biomass actually available to heterotrophs.' },
      {
        t: 'formula',
        kicker: 'Net primary productivity',
        main: 'NPP = GPP − <i>R</i>',
        legend: ['<i>R</i> = respiratory loss by the producers (not by decomposers: a classic trap)'],
        note: null,
      },
      { t: 'def', term: 'Secondary productivity', html: 'the rate of formation of new organic matter by consumers.' },
      {
        t: 'p',
        html: '<b>Units of productivity:</b> mass form g m<sup>−2</sup> yr<sup>−1</sup> or energy form kcal m<sup>−2</sup> yr<sup>−1</sup>. (Biology uses units, not dimensional formulae. Note the structure of the unit: mass or energy ÷ area ÷ time: the two divisions are what make it a rate per area.)',
      },
      {
        t: 'p',
        html: '<b>Factors governing primary productivity:</b> availability of nutrients and the photosynthetic capacity of the plants, together with environmental factors: temperature, water/precipitation, light and incident solar radiation.',
      },

      { t: 'part', title: 'Key processes and logical framework' },
      {
        t: 'p',
        html: 'Ecology has no algebraic derivations here, so the work is procedural: learning to read and account for an ecosystem rather than derive a formula.',
      },
      {
        t: 'proc',
        title: 'Framework A: describing any ecosystem’s structure',
        steps: [
          'List the <b>abiotic</b> stock: light, temperature, water, soil, inorganic nutrients.',
          'Sort the <b>biotic</b> members into the three functional jobs: producers, consumers, decomposers. <b>Why this order?</b> Energy and matter enter an ecosystem mainly through producers, so they anchor the description.',
          'Record <b>species composition</b> (who is present) and <b>stratification</b> (how they are layered). These are the two structural features: both structural, never functional.',
          'Classify as terrestrial or aquatic, and check for <b>completeness</b>: are enough producers present? If not (an aquarium with few, the deep aphotic sea with no photosynthetic ones), it is an incomplete, non-self-sustaining ecosystem.',
        ],
      },
      { t: 'p', html: 'Treat it as an income statement for the producers.' },
      {
        t: 'proc',
        title: 'Framework B: productivity bookkeeping',
        steps: [
          'Start with <b>GPP</b> = total photosynthetic production (gross income).',
          'Subtract the producers’ own <b>respiration</b> <i>R</i> (running cost): NPP = GPP − <i>R</i>. <b>Why subtract?</b> You cannot bank energy you have already burned to stay alive.',
          '<b>NPP is the savings:</b> the biomass that flows up to heterotrophs.',
          'At the consumer level, the rate of new organic-matter formation is <b>secondary productivity</b>. <b>Why is it smaller than primary, and why does it shrink up the trophic ladder?</b> Because each level only ever receives the leftover (NPP, then a fraction of that), and each spends its own respiration before passing anything on.',
        ],
      },
      {
        t: 'p',
        html: '<b>Framework C: measuring productivity.</b> Productivity shows up as an increase in <b>dry mass</b>.<br>• <b>Relative Growth Rate (RGR)</b> = increase in dry mass in unit time ÷ dry mass of the plant. (Gain per existing gram, so plants of different sizes can be compared.)<br>• <b>Net Assimilation Rate (NAR)</b> = increase in dry mass in unit time ÷ leaf area. (Gain per photosynthesising surface.)<br>• <b>Biomass</b> = total dry mass of all organisms in the ecosystem (producers + consumers + decomposers).<br>• <b>Why dry mass throughout?</b> Fresh weight swings with water content; dry weight gives a fair, repeatable measure: the same reason standing crop is reported as dry weight.',
      },
      { t: 'fig', id: 'b12-12-fig-12.1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'In a grassland plot, the gross primary productivity is measured as 25,000 kcal m<sup>−2</sup> yr<sup>−1</sup> and the respiratory loss by the producers is 9,000 kcal m<sup>−2</sup> yr<sup>−1</sup>. Calculate the net primary productivity, with units.',
        steps: [
          '<b>Given:</b> GPP = 25,000 kcal m<sup>−2</sup> yr<sup>−1</sup>, <i>R</i> = 9,000 kcal m<sup>−2</sup> yr<sup>−1</sup>. <b>Relation:</b> NPP = GPP − <i>R</i>. <b>Substitute:</b> NPP = 25,000 − 9,000.',
          'Marks are routinely lost for dropping the units or the yr<sup>−1</sup>; always carry the full rate-unit to the final line.',
        ],
        ans: 'NPP = 16,000 kcal m<sup>−2</sup> yr<sup>−1</sup>: this is the energy available to the herbivores and decomposers of the grassland.',
      },
      {
        t: 'ex',
        tag: 'CUET / Speed Trap',
        q: 'A farmer says: “I harvested 12 quintals of wheat in 0.5 hectare, 150 days after sowing.” A student labels this the field’s GPP. Is that correct? Answer fast.',
        steps: [
          '<b>Quick reasoning:</b> A productivity is a rate per area per time. The statement does give amount (12 q), area (0.5 ha) and time (150 days), so it could be expressed as a productivity. But it would be <b>net</b>, not gross: the harvested grain is matter the crop kept <i>after</i> its own respiration, i.e. it reflects <b>net</b>, not gross, productivity (and is only the harvested part of NPP). GPP would additionally include everything the plant already respired away.',
          '<b>Elimination cue:</b> any “what’s left / what we collect” wording → net; “total photosynthesis” → gross.',
        ],
        ans: 'Incorrect to call it GPP. As a per-area-per-time figure it represents <b>net</b> primary productivity (only the harvested part of it).',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'A shallow village pond and a nearby sugarcane field receive similar sunlight. The field shows much higher primary productivity. Two factors are at play. Identify the dominant factor in each system and state which functional aspect of the ecosystem productivity belongs to.',
        steps: [
          '<b>Step 1: functional placement.</b> Productivity is one of the four functional aspects of an ecosystem (productivity, decomposition, energy flow, nutrient cycling); stratification and species composition are structural. So productivity is functional.',
          '<b>Step 2: field.</b> Sugarcane is a highly efficient photosynthesiser with abundant nutrients and water from cultivation; here <b>photosynthetic capacity of the plant + nutrient availability</b> dominate.',
          '<b>Step 3: pond.</b> In water bodies, light penetration falls sharply with depth, so producers below the surface are starved of light. The dominant limiting factor is <b>light availability with depth</b>.',
        ],
        ans: 'Field → high productivity from photosynthetic capacity and nutrient supply; pond → limited by light penetration. Productivity is a <b>functional</b> aspect.',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty / Assertion–Reason',
        q: '<b>Assertion (A):</b> The net primary productivity of an ecosystem can never exceed its gross primary productivity. <b>Reason (R):</b> Net primary productivity is the biomass available to heterotrophs after the producers’ respiratory losses are met.<br>Choose: <b>(a)</b> both true, R correct explanation of A; <b>(b)</b> both true, R not the correct explanation; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          '<b>Evaluate A:</b> Since NPP = GPP − <i>R</i> and respiration <i>R</i> ≥ 0, NPP is at most equal to GPP (only if <i>R</i> = 0, which never holds for living producers). <b>A is true.</b>',
          '<b>Evaluate R:</b> NPP is indeed GPP minus producers’ respiration, and is precisely the biomass passed on to heterotrophs. <b>R is true.</b>',
          '<b>Does R explain A?</b> R states why GPP is reduced to NPP: the subtraction of a non-negative respiration term is exactly the reason NPP cannot exceed GPP. So <b>R is the correct explanation of A</b>.',
          '<b>Trap:</b> candidates who misremember the relation as NPP = GPP + <i>R</i> wrongly mark A false and pick (d).',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Distinguish between standing crop and standing state, with one example of each.',
            a: 'Standing crop = living biomass at a trophic level at a given time (e.g. dry weight of phytoplankton in a pond); standing state = nutrient amount present at a time (e.g. N or P in forest soil).',
          },
          {
            q: '[CUET] State the two units in which primary productivity is expressed, and explain why each carries a “per area per time”.',
            a: 'g m<sup>−2</sup> yr<sup>−1</sup> and kcal m<sup>−2</sup> yr<sup>−1</sup>; the “per area per time” makes it a rate, comparable across ecosystems and seasons.',
          },
          {
            q: '[NEET] The GPP of a forest is 32,000 kcal m<sup>−2</sup> yr<sup>−1</sup> and its NPP is 20,000 kcal m<sup>−2</sup> yr<sup>−1</sup>. Find the respiratory loss by the producers.',
            a: '<i>R</i> = GPP − NPP = 32,000 − 20,000 = 12,000 kcal m<sup>−2</sup> yr<sup>−1</sup>.',
          },
          {
            q: '[NEET] Why is stratification classified as a structural and not a functional feature of an ecosystem? Name the four functional features.',
            a: 'It describes vertical arrangement (a property of structure), not a process; functional features are productivity, decomposition, energy flow, nutrient cycling.',
          },
          {
            q: '[NEET high-difficulty] An aquarium is sometimes called an “incomplete ecosystem”. Justify this in terms of components, and predict what must be supplied externally for it to persist.',
            a: 'Photosynthetic producers are few compared with the consumers, and decomposition and nutrient recycling are too small, so it cannot self-sustain; food (energy), and often oxygen and nutrients, must be supplied externally.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Net primary productivity is equal to:',
        opts: [
          { label: 'GPP + respiration', nudge: '<b>(a)</b> reverses the sign: chosen by students who think respiration “adds” to the total.' },
          { label: 'GPP − respiration', nudge: null },
          { label: 'GPP × respiration', nudge: '<b>(c)</b> and <b>(d)</b> are dimensional nonsense for a difference relation.' },
          { label: 'GPP ÷ respiration', nudge: '<b>(c)</b> and <b>(d)</b> are dimensional nonsense for a difference relation.' },
        ],
        correct: 1,
        solution: 'NPP is what remains after producers meet their respiratory cost.',
      },
      {
        t: 'mcq',
        q: 'The mass of living material at a trophic level at a particular time is called:',
        opts: [
          { label: 'gross primary productivity', nudge: '<b>(a)</b> and <b>(c)</b> are rates, not amounts: the time-snapshot wording rules them out.' },
          { label: 'standing state', nudge: '<b>(b)</b> standing state is for nutrients, the favourite distractor.' },
          { label: 'net primary productivity', nudge: '<b>(a)</b> and <b>(c)</b> are rates, not amounts: the time-snapshot wording rules them out.' },
          { label: 'standing crop', nudge: null },
        ],
        correct: 3,
        solution: '“Living material … at a particular time” = standing crop.',
      },
      {
        t: 'mcq',
        q: 'Which of the following is a functional feature of an ecosystem?',
        opts: [
          { label: 'species composition', nudge: '<b>(a)</b> and <b>(b)</b> are the two structural features.' },
          { label: 'stratification', nudge: '<b>(a)</b> and <b>(b)</b> are the two structural features.' },
          { label: 'productivity', nudge: null },
          { label: 'both (a) and (b)', nudge: '<b>(d)</b> bundles both structural features and is the trap for anyone who confuses “structure” with “function”.' },
        ],
        correct: 2,
        solution: 'Productivity is functional.',
      },
      {
        t: 'mcq',
        q: 'Primary productivity of an ecosystem depends primarily on:',
        opts: [
          { label: 'availability of nutrients only', nudge: '<b>(a)</b> and <b>(b)</b> are each half-right: partial-answer traps.' },
          { label: 'photosynthetic capacity of plants only', nudge: '<b>(a)</b> and <b>(b)</b> are each half-right: partial-answer traps.' },
          { label: 'both nutrient availability and photosynthetic capacity', nudge: null },
          { label: 'decomposer activity alone', nudge: '<b>(d)</b> confuses a decomposition driver with a productivity driver.' },
        ],
        correct: 2,
        solution: 'NCERT names both nutrient availability and the plants’ photosynthetic capacity, with temperature/water/light as further factors.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Productivity (rate) vs standing crop (stock).</b> Productivity is per area per time; standing crop is the biomass sitting there now. Watch the wording: “rate of…” → productivity; “amount at a time” → standing crop.',
          '<b>The respiration trap.</b> NPP = GPP − <b><i>R</i> of producers</b>. It is not GPP minus decomposition, and definitely not GPP + <i>R</i>. Decomposers do not enter this equation.',
          '<b>Structure ↔ function mix-up.</b> Species composition and stratification are structural. Productivity, decomposition, energy flow and nutrient cycling are functional. Examiners love planting “stratification is a functional unit” as a false statement.',
          '<b>Standing crop vs standing state.</b> Crop = biomass (living matter); state = nutrients. Keep the two terms apart: mixing them costs a full mark.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Before writing any productivity answer, run the “does it have a per?” check. If the quantity isn’t per area per time, it’s a stock (standing crop / standing state), not a productivity, and you’ve probably picked the wrong term.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Ecosystem</b> = biotic + abiotic interacting as one functional unit; size ranges from a pond to the biosphere; types = terrestrial / aquatic.', note: '' },
          { f: '<b>Structure = 2 S’s:</b> <b>S</b>pecies composition + <b>S</b>tratification (both structural).', note: '' },
          { f: '<b>Functions = 4:</b> productivity, decomposition, energy flow, nutrient cycling.', note: '' },
          { f: '<b>Productivity</b> = rate of biomass production, units g m<sup>−2</sup> yr<sup>−1</sup> or kcal m<sup>−2</sup> yr<sup>−1</sup>.', note: '' },
          { f: 'Core relation', note: 'NPP = GPP − <i>R</i> (<i>R</i> = producer respiration; NPP = biomass for heterotrophs).' },
          { f: 'Stock terms', note: 'standing <b>crop</b> = living biomass (dry wt); standing <b>state</b> = nutrient amount.' },
        ],
        aids: [
          'Mnemonics: <b>“GReN”</b> order of the productivity story: <b>G</b>PP → minus <b>Re</b>spiration → <b>N</b>PP.',
          '<b>“Crop is alive, State is in the soil”</b>: crop = biomass, state = nutrients.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 666–672 ─────────────────────────
  {
    n: '02',
    title: 'Decomposition',
    kalam: 'Decomposition is nature’s recycling plant.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> CBSE Boards ask a 2–3 mark “steps of decomposition” or “factors affecting decomposition” question. CUET keeps it as MCQs. NEET draws 1–2 questions a year, usually the <b>order of the five steps</b>, the <b>humification-vs-mineralisation</b> distinction, or which conditions speed decomposition up or down. (These frequencies are the book’s estimate from past papers, not official figures.)',
      },
      {
        t: 'p',
        html: 'Every leaf that falls and every animal that dies has to go somewhere, or the world would bury itself in its own dead matter and lock all its nutrients away forever. <b>Decomposition</b> is nature’s recycling plant: the process by which <b>decomposers</b> break down complex dead organic matter into simple inorganic substances (carbon dioxide, water and mineral nutrients) that producers can use all over again. It is the step that closes the loop a nutrient cycle depends on. Consider the scale: a single forest sheds tonnes of leaf litter every year, and every gram of it must be processed and returned, or the forest would smother in its own debris within a few seasons.',
      },
      {
        t: 'p',
        html: 'The raw material decomposers work on has a name: <b>detritus</b>, dead plant remains (fallen leaves, bark, flowers), dead animal bodies, and faecal matter. It comes in two layers. <b>Above-ground detritus</b> is the leaf litter, dried plant parts, animal remains and their droppings and excretions lying on the surface; <b>below-ground detritus</b> is the dead roots and the remains of underground animals. The workers are the <b>decomposers</b> themselves, chiefly <b>fungi and bacteria</b>, also called <b>saprotrophs</b>. They have an unusual way of eating: the whole of decomposition happens <b>outside</b> their bodies. They secrete digestive enzymes onto the detritus, let the enzymes break it down externally, and then <b>absorb</b> the dissolved products. Because they feed by absorption from outside, they are also called <b>osmotrophs</b>, a useful contrast with animals, which ingest food and digest it internally.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture the <b>compost pit (khaad ka gaddha)</b> behind a village house. Vegetable peels and dry leaves go in; over weeks, worms shred them, rain washes some minerals down, microbes rot the rest, and what comes out is dark crumbly manure plus nutrients the next crop will drink up. That pit is a decomposition reactor in miniature, and the dark crumbly end-product is <b>humus</b>.',
      },
      {
        t: 'p',
        html: 'Follow a single green leaf to see the whole sequence. It falls to the ground; some of it is eaten by insects and small animals, and its nutrients and energy enter the food web. Rain then leaches some soluble nutrients down into the soil. Next, fungi and bacteria partially consume the leaf, which loses its shape and becomes <b>litter</b>. Earthworms, soil mites and more fungi and bacteria carry the breakdown further, and finally the residue settles into <b>organic-rich soil</b> from which a new tree can grow. That journey, from falling leaf to fertile soil, is decomposition told as a story, and it is happening continuously across every forest floor.',
      },
      {
        t: 'p',
        html: 'Decomposition is not a single event but a set of processes (fragmentation, leaching, catabolism, humification and mineralisation) that largely run <b>simultaneously</b> on the detritus rather than in a neat one-after-another line. The two end-products are always the same: <b>humus</b> (a dark, resistant store of nutrients) and <b>inorganic nutrients</b> released back to the soil.',
      },
      {
        t: 'p',
        html: 'Why does any of this matter so much? Because decomposition is the main process that <b>returns locked-up nutrients to circulation</b>. The carbon, nitrogen and phosphorus in a fallen log or a dead animal are useless to a living plant until decomposers free them as simple inorganic ions, so without decomposition every nutrient cycle would grind to a halt and the soil would steadily lose its fertility. It is also why decomposers are so abundant in soil: there is an enormous supply of dead matter for them to work on, far more than the living biomass that herbivores eat. Decomposition is, in short, the quiet engine that keeps the whole ecosystem supplied with raw materials.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> (1) Decomposition is an <b>oxygen-requiring (aerobic) process</b>: the microbes need oxygen, so <b>anaerobic</b> (waterlogged, airless) conditions slow it down and let organic matter pile up; this is why dead plant matter accumulates rather than rotting away in waterlogged bogs and marshes. (2) It runs <b>fastest in a warm, moist</b> environment (hence it is quickest in tropical rainforests and slowest in cold, dry places like the Antarctic or a desert). (3) The <b>chemical make-up of the detritus</b> matters: detritus rich in <b>lignin and chitin decomposes slowly</b>, while detritus rich in <b>nitrogen and water-soluble sugars decomposes quickly</b>. (4) Most decomposition happens in the <b>upper layer of the soil</b>, where detritus is most abundant and oxygen most available.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      { t: 'def', term: 'Decomposition', html: 'the breakdown of complex organic matter (detritus) into inorganic substances (CO<sub>2</sub>, water, nutrients) by decomposers.' },
      { t: 'def', term: 'Detritus', html: 'dead organic matter: fallen leaves, bark, flowers, dead animal remains and faecal matter (above-ground litter and below-ground dead roots).' },
      { t: 'def', term: 'Decomposer / saprotroph / osmotroph', html: 'organisms (mainly fungi and bacteria) that feed on detritus by secreting enzymes externally and absorbing the products.' },
      { t: 'def', term: 'Detritivore', html: 'an animal (e.g. earthworm) that breaks detritus into smaller particles: a fragmenter, not a mineraliser.' },
      { t: 'def', term: 'Humus', html: 'a dark-coloured, amorphous, colloidal organic substance, highly resistant to microbial action, that decomposes very slowly and acts as a reservoir of nutrients.' },
      {
        t: 'p',
        html: '<b>The five steps:</b><br>• <b>Fragmentation</b>: detritivores (e.g. earthworms) break detritus into smaller particles.<br>• <b>Leaching</b>: water-soluble inorganic nutrients percolate down into the soil horizon and precipitate as (often unavailable) salts.<br>• <b>Catabolism</b>: bacterial and fungal enzymes degrade detritus into simpler inorganic compounds.<br>• <b>Humification</b>: accumulation of humus.<br>• <b>Mineralisation</b>: microbes degrade the humus, releasing inorganic nutrients.',
      },
      { t: 'p', html: '(Qualitative process: no SI units or formulae apply.)' },

      { t: 'part', title: 'Key processes and logical framework' },
      {
        t: 'p',
        html: 'There is no equation to derive; the skill is getting the <b>five steps in the right order</b> and knowing why each happens.',
      },
      {
        t: 'proc',
        title: 'Framework A: the five steps, with reasoning',
        steps: [
          '<b>Fragmentation.</b> Detritivores such as earthworms (and termites) chew and break detritus into small pieces. <b>Why first / why it matters:</b> shredding hugely increases the <b>surface area</b> available for microbes and enzymes to act on, speeding everything downstream: a whole leaf rots far more slowly than the same leaf torn into a hundred fragments.',
          '<b>Leaching.</b> Percolating water carries the <b>water-soluble inorganic nutrients</b> down into the soil horizon, where they may precipitate as salts that are temporarily <b>unavailable</b> to plants. <b>Why:</b> water is the transport medium that redistributes the soluble fraction, moving it out of the litter layer and into the soil profile.',
          '<b>Catabolism.</b> Enzymes secreted by <b>bacteria and fungi</b> chemically degrade the fragmented detritus, first into simpler organic material and then into <b>simpler inorganic compounds</b>. <b>Why:</b> this is the actual chemical breakdown: the heart of decomposition, where complex molecules are dismantled bond by bond.',
          '<b>Humification.</b> Part of the detritus is only partially broken down and accumulates as <b>humus</b>: dark, amorphous, colloidal, resistant to microbes and slow to decompose, and a <b>reservoir of nutrients</b>. <b>Why it persists:</b> its colloidal, chemically complex structure resists rapid microbial attack, so it lingers in the soil for a long time, improving soil texture and water-holding capacity along the way.',
          '<b>Mineralisation.</b> Microbes slowly degrade the humus, releasing <b>inorganic nutrients</b> (minerals) back into the soil for producers to reabsorb. <b>Why last:</b> it unlocks the nutrients stored in the resistant humus, completing the recycling and feeding the nutrient cycles.',
        ],
      },
      {
        t: 'p',
        html: 'Remember these run <b>simultaneously</b> on different bits of detritus; the numbering is a logical order, not a strict timetable.',
      },
      {
        t: 'p',
        html: '<b>Framework B: what controls the rate.</b> Decomposition speeds up or slows down with:<br>• <b>Chemical nature of detritus:</b> detritus rich in <b>lignin, chitin, tannin or resin</b> → <b>slow</b>; detritus rich in <b>protein, nucleic acids, nitrogen or water-soluble sugars</b> → <b>fast</b>.<br>• <b>Climate:</b> higher <b>temperature</b> and <b>soil moisture</b> → faster (warm + moist is ideal).<br>• <b>Aeration / oxygen:</b> aerobic → faster; <b>anaerobiosis</b> → <b>slower</b> (decomposition needs oxygen).<br>• <b>Soil pH:</b> influences which microbes thrive (most work best near neutral), so <b>strongly acidic soils usually decompose litter more slowly</b>. <b>Putting it together:</b> this is exactly why decomposition is <b>fastest in a tropical rainforest</b> (warm, humid, well-aerated soil) and slowest in cold or arid regions.',
      },
      {
        t: 'p',
        html: 'It is worth understanding <b>why</b> chemistry matters so much. Lignin, chitin, tannin and resin are large, complex, chemically stable molecules that few microbial enzymes can attack quickly, so detritus loaded with them (woody twigs, bark, insect cuticle) lingers for a long time. Nitrogen-rich tissue and water-soluble sugars, by contrast, are exactly the substrates microbes prefer: they are easily taken up and metabolised, so soft, sugary, protein-rich detritus such as fresh leaves or fruit pulp disappears fast. A gardener sees this directly: green kitchen scraps rot in weeks, while a dry woody branch can sit in the compost heap for a year.',
      },
      {
        t: 'p',
        html: '<b>Framework C: the products and where it happens.</b> Whatever the detritus, decomposition yields two things: <b>humus</b> (the dark, resistant nutrient store) and <b>inorganic nutrients</b>: carbon dioxide, water and minerals released to the soil. Most of this activity is concentrated in the <b>upper layer of the soil</b>, simply because that is where detritus accumulates and where oxygen and microbes are most available; the deeper you go, the less decomposition occurs. The inorganic nutrients freed here are precisely what feeds back into the nutrient cycles, linking this topic directly to the carbon and phosphorus cycles.',
      },
      {
        t: 'p',
        html: 'One more connection is worth holding in view. The dead matter that decomposers process is also the starting point of the <b>detritus food chain (DFC)</b>: detritus → detritivores → their predators. In a terrestrial ecosystem a much larger fraction of energy actually flows through this detritus pathway than through the grazing food chain, which is another way of saying that decomposition is not a side-process but one of the main routes by which an ecosystem handles its energy and matter. So the same dead leaf is simultaneously food for a detritivore (energy) and a source of recycled minerals (nutrients): decomposition sits at the junction of both.',
      },
      { t: 'fig', id: 'b12-12-fig-12.2' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Name, in correct sequence, the five steps of decomposition, and distinguish humification from mineralisation.',
        steps: [
          '<b>Sequence:</b> fragmentation → leaching → catabolism → humification → mineralisation.',
          '<b>Distinction:</b> <b>humification</b> is the accumulation of humus (a dark, resistant store of nutrients); <b>mineralisation</b> is the later breakdown of that humus by microbes to release inorganic nutrients. One stores, the other releases.',
        ],
        ans: 'The five-step order above; humification builds humus, mineralisation frees nutrients from it.',
      },
      {
        t: 'ex',
        tag: 'CUET / Speed Trap',
        q: 'An earthworm shredding fallen leaves and a fungus releasing minerals from humus: which is a detritivore and which is a decomposer/mineraliser? And why are both grouped under “the decomposition community”?',
        steps: [
          '<b>Quick reasoning:</b> the earthworm physically breaks detritus into pieces → <b>detritivore (fragmenter)</b>; the fungus chemically frees inorganic nutrients → <b>decomposer/mineraliser</b>. They are grouped together because they work as a relay on the same dead matter: the detritivore prepares the material (more surface area) and the decomposer completes the chemical breakdown. The fungus, being a saprotroph, digests externally and absorbs, an <b>osmotroph</b>, whereas the earthworm ingests and processes internally.',
          '<b>Trap cue:</b> “breaks into pieces” ⇒ detritivore; “releases nutrients / secretes enzymes” ⇒ decomposer.',
        ],
        ans: 'Earthworm = detritivore; fungus = decomposer; together they span the physical and chemical halves of decomposition.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'Two identical piles of leaf litter are placed, one in a warm humid tropical forest and one in a cold dry alpine site. In which will decomposition be faster, and name the two climatic factors responsible.',
        steps: [
          '<b>Reasoning:</b> decomposition rate rises with <b>temperature</b> and <b>soil moisture</b>; both are high in the tropical forest and low at the alpine site.',
          'This is why tropical rainforests recycle litter fastest.',
        ],
        ans: 'Faster in the warm, humid tropical forest; the two climatic factors are <b>temperature</b> and <b>(soil) moisture</b>.',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty / Assertion–Reason',
        q: '<b>Assertion (A):</b> Detritus rich in lignin and chitin decomposes slowly. <b>Reason (R):</b> Decomposition is an oxygen-requiring process inhibited by anaerobic conditions.<br>Options: <b>(a)</b> both true, R explains A; <b>(b)</b> both true, R does not explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          '<b>Evaluate A:</b> lignin and chitin are chemically resistant, so detritus rich in them decomposes slowly. <b>A is true.</b>',
          '<b>Evaluate R:</b> decomposition does require oxygen and is slowed by anaerobiosis. <b>R is true.</b>',
          '<b>Does R explain A?</b> No: A’s slow rate is due to the <b>chemical nature</b> of lignin/chitin, not to oxygen availability. R is a true but unrelated fact.',
          '<b>Trap:</b> both statements are individually correct, tempting (a); but they describe two different controls on rate.',
        ],
        ans: '(b)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define detritus and name the organisms that carry out decomposition.',
            a: 'Detritus = dead organic matter (leaves, bark, flowers, animal remains, faeces); decomposers = fungi and bacteria (saprotrophs).',
          },
          {
            q: '[CUET] Arrange in order: catabolism, fragmentation, mineralisation, humification, leaching.',
            a: 'fragmentation → leaching → catabolism → humification → mineralisation.',
          },
          {
            q: '[NEET] State two chemical properties of detritus that slow decomposition and two that speed it up.',
            a: 'Slow: rich in lignin/chitin; fast: rich in nitrogen / water-soluble sugars.',
          },
          {
            q: '[NEET] Why is decomposition slower in a waterlogged, anaerobic soil?',
            a: 'Decomposition is aerobic; without oxygen the decomposer microbes cannot function efficiently, so organic matter accumulates.',
          },
          {
            q: '[NEET high-difficulty] Explain why humus decomposes very slowly yet is described as a reservoir of nutrients.',
            a: 'Humus is chemically resistant and colloidal, so microbes break it down only slowly (humus persists), but that same slow mineralisation steadily releases stored inorganic nutrients, hence a long-lasting reservoir.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The breakdown of detritus into smaller particles by earthworms is called:',
        opts: [
          { label: 'humification', nudge: '<b>(a)</b>/<b>(c)</b> involve humus.' },
          { label: 'fragmentation', nudge: null },
          { label: 'mineralisation', nudge: '<b>(a)</b>/<b>(c)</b> involve humus.' },
          { label: 'catabolism', nudge: '<b>(d)</b> is enzymatic chemical breakdown: the most common confusion with fragmentation.' },
        ],
        correct: 1,
        solution: 'Physical breaking into particles = fragmentation, done by detritivores.',
      },
      {
        t: 'mcq',
        q: 'The process by which humus is degraded to release inorganic nutrients is:',
        opts: [
          { label: 'leaching', nudge: '<b>(a)</b> is the washing-down of solubles.' },
          { label: 'catabolism', nudge: '<b>(b)</b> acts on detritus, not humus.' },
          { label: 'mineralisation', nudge: null },
          { label: 'fragmentation', nudge: '<b>(d)</b> is physical shredding.' },
        ],
        correct: 2,
        solution: 'Mineralisation releases inorganic nutrients from humus.',
      },
      {
        t: 'mcq',
        q: 'Decomposition is fastest in which of these?',
        opts: [
          { label: 'Antarctic', nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are all too cold and/or too dry, slowing decomposition.' },
          { label: 'tropical rainforest', nudge: null },
          { label: 'dry desert', nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are all too cold and/or too dry, slowing decomposition.' },
          { label: 'alpine meadow', nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are all too cold and/or too dry, slowing decomposition.' },
        ],
        correct: 1,
        solution: 'Warm and moist conditions maximise microbial activity.',
      },
      {
        t: 'mcq',
        q: 'Which kind of detritus decomposes the slowest?',
        opts: [
          { label: 'rich in sugars', nudge: '<b>(a)</b> and <b>(b)</b> are readily broken down: distractors for students who reverse the rule.' },
          { label: 'rich in nitrogen', nudge: '<b>(a)</b> and <b>(b)</b> are readily broken down: distractors for students who reverse the rule.' },
          { label: 'rich in lignin and chitin', nudge: null },
          { label: 'rich in water-soluble salts', nudge: '<b>(d)</b> is not lignin or chitin: water-soluble material is easy for microbes to take up, so it does not slow decomposition.' },
        ],
        correct: 2,
        solution: 'Lignin and chitin are resistant, so they decompose slowly.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Wrong step order.</b> It is <b>fragmentation → leaching → catabolism → humification → mineralisation</b>: five steps, fragmentation first, mineralisation last. Listing fewer than five, or putting mineralisation before humification, is the classic error.',
          '<b>Humification vs mineralisation.</b> Humification builds humus (stores nutrients); mineralisation breaks humus (releases nutrients). Opposite directions.',
          '<b>Detritivore vs decomposer.</b> A detritivore (earthworm) fragments; a decomposer (fungus/bacterium) mineralises. Don’t merge them.',
          '<b>Lignin/chitin is slow, not fast.</b> Resistant compounds slow decomposition; nitrogen and sugars speed it. And decomposition is <b>aerobic</b>: anaerobic conditions slow it.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Memorise the chain as the sentence <b>“Frogs Leap Carefully, Hares Move”</b>: <b>F</b>ragmentation, <b>L</b>eaching, <b>C</b>atabolism, <b>H</b>umification, <b>M</b>ineralisation. Five words = five steps, in order.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Decomposition</b> = decomposers (fungi, bacteria = saprotrophs/osmotrophs) break <b>detritus</b> into inorganic nutrients + <b>humus</b>.', note: '' },
          { f: '<b>Detritus</b> = dead leaves/bark/flowers, animal remains, faeces (above- and below-ground).', note: '' },
          { f: 'Five steps (in order)', note: 'Fragmentation → Leaching → Catabolism → Humification → Mineralisation (run simultaneously).' },
          { f: '<b>Humus</b> = dark, amorphous, colloidal, resistant, slow-decomposing nutrient reservoir.', note: '' },
          { f: '<b>Rate up:</b> warm, moist, aerobic, N-/sugar-rich detritus. <b>Rate down:</b> cold, dry, anaerobic, lignin-/chitin-rich detritus.', note: '' },
          { f: '<b>Fastest in tropical rainforest; slowest in cold/dry regions.</b> Decomposition is <b>aerobic</b>.', note: '' },
        ],
        aids: [
          'Mnemonics: <b>“Frogs Leap Carefully, Hares Move”</b>: F-L-C-H-M, the five steps in order.',
          '<b>“Humify stores, Mineralise frees.”</b>',
          '<b>“Lignin Lingers”</b>: lignin/chitin → slow decomposition.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 673–679 ─────────────────────────
  {
    n: '03',
    title: 'Energy Flow & Ecological Pyramids',
    kalam: 'The unidirectional movement and transformation of energy through an ecosystem, from the Sun to producers to consumers.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A heavily weighted topic in the book’s view. CBSE Boards routinely ask a 2–3 mark energy-flow explanation, a pyramid-type comparison, or a 10% law numerical. CUET asks it as MCQs (PAR value, pyramid orientation, food-chain type). NEET draws 2–3 questions a year, usually a 10% law calculation, an upright-vs-inverted pyramid trap, or a GFC-vs-DFC distinction. (These frequencies are the book’s estimate from past papers, not official figures.)',
      },
      {
        t: 'p',
        html: 'Money in a market circulates: the same hundred-rupee note can pass through a dozen hands and come back to you. Energy in an ecosystem does <b>not</b> behave like that. It enters once from the Sun, moves in <b>one direction</b> (Sun → producers → consumers) and leaves as heat at every step, never to return. This single fact, that <b>energy flow is unidirectional</b>, is the spine of everything in this topic.',
      },
      {
        t: 'p',
        html: 'Start at the source. The <b>Sun is the energy source</b> for nearly all ecosystems (the main exception being chemosynthetic communities, such as those at deep-sea hydrothermal vents). But producers do not get to use all of it. Of the total incident solar radiation, <b>less than 50% is Photosynthetically Active Radiation (PAR)</b>, the wavelengths plants can actually use, and of that PAR, green plants capture only about <b>2–10%</b> to run the entire living world. Everything that lives, lives off this thin sliver.',
      },
      {
        t: 'p',
        html: 'Once captured, that energy travels along a <b>food chain</b>, a sequence of “who eats whom”, where each feeding step is a <b>trophic level</b>. There are two kinds. The <b>Grazing Food Chain (GFC)</b> starts with living producers: grass → grasshopper → frog → snake. The <b>Detritus Food Chain (DFC)</b> starts with dead organic matter (detritus) and runs through detritivores and decomposers. In a terrestrial ecosystem, a much larger fraction of energy actually flows through the DFC; in an aquatic ecosystem, the GFC is the major conduit. Real ecosystems are never single chains: many chains interlink, because an animal like a crow or cockroach feeds at several points. That interlinked network is a <b>food web</b>.',
      },
      {
        t: 'p',
        html: 'It helps to see all three chain types written out concretely. A terrestrial <b>GFC</b> runs grass → grasshopper → frog → snake → hawk; the matching <b>aquatic GFC</b> runs phytoplankton → zooplankton → small fish → large fish, where the floating algae are the producers. A <b>DFC</b> runs the other way into the soil: detritus → earthworm → sparrow → falcon, beginning with dead matter rather than a living plant. A third, special case is the <b>parasitic food chain (PFC)</b>: a large host on which many smaller parasites feed, and on those parasites in turn still-smaller hyperparasites feed (tree → leaf-eating insects → parasitic mites). Notice that in a PFC the numbers climb as you go up the chain, which is why its pyramid of numbers comes out inverted, a point worth filing away for the pyramids section below. A typical chain is short, usually only <b>four to five</b> trophic levels long (a few reach six).',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a line of commission agents in a sabzi mandi. The farmer (producer) brings Rs.100 of value; each middleman keeps about 90% for his own costs and passes only about 10% up the line. By the third or fourth agent there is almost nothing left to skim. That is exactly the <b>10% law</b> (given by Lindeman, 1942): only about <b>10% of the energy</b> at one trophic level is passed to the next, while roughly <b>90% is not passed on</b> (most of it lost as heat through respiration and metabolic activity, the rest left as waste and dead matter that feed the detritus chain). Because the energy dwindles so fast, a food chain usually has only <b>4–5 trophic levels</b> (a few reach six): there is seldom enough left to feed another.',
      },
      {
        t: 'p',
        html: 'Now, <b>ecological pyramids</b>. If a food chain is the storyline, a pyramid is its bar chart drawn to scale: the producers form the broad <b>base</b>, and each higher trophic level stacks above. Depending on what you measure at each level, you get a pyramid of <b>number</b>, of <b>biomass</b>, or of <b>energy</b> (Charles Elton introduced the pyramid of numbers in 1927, so ecological pyramids are also called Eltonian pyramids; the pyramids of biomass and energy were developed later).',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> (1) A pyramid assumes a <b>simple linear food chain</b>, which never truly exists: webs do. (2) It cannot account for an organism that occupies <b>two or more trophic levels</b> at once. (3) Despite their vital role, <b>decomposers are given no place</b> in standard pyramids. (4) Most importantly: the <b>pyramid of energy, drawn as energy flow per unit area per unit time, is always upright</b> (the second law of thermodynamics forbids it from inverting) whereas pyramids of <b>number and biomass can invert</b> in certain ecosystems. Forgetting this last point is a costly error in the exam.',
      },

      { t: 'part', title: 'Key definitions and quantitative relations' },
      { t: 'def', term: 'Energy flow', html: 'the unidirectional movement and transformation of energy through an ecosystem, from the Sun to producers to consumers.' },
      { t: 'def', term: 'Photosynthetically Active Radiation (PAR)', html: 'the fraction of incident solar radiation usable in photosynthesis; <b>less than 50%</b> of total incident radiation. Producers capture only <b>~2–10%</b> of PAR.' },
      { t: 'def', term: 'Trophic level', html: 'the position an organism occupies in a food chain based on its source of nutrition (producers = 1st, herbivores = 2nd, and so on).' },
      { t: 'def', term: 'Food chain', html: 'a sequence of organisms through which food energy is transferred by eating and being eaten. Two types: <b>Grazing Food Chain (GFC)</b> (begins with living producers) and <b>Detritus Food Chain (DFC)</b> (begins with dead organic matter).' },
      { t: 'def', term: 'Food web', html: 'a network of interconnected food chains.' },
      { t: 'def', term: 'Standing crop', html: 'the mass of living material (biomass) present at a trophic level at a given time.' },
      {
        t: 'p',
        html: '<b>Laws governing flow:</b><br>• First law of thermodynamics: energy is neither created nor destroyed, only transformed.<br>• Second law of thermodynamics: every energy transformation dissipates some energy as heat; this is why energy is lost at each trophic level.',
      },
      {
        t: 'p',
        html: '<b>Ten per cent law (Lindeman, 1942):</b> only about 10% of the energy at one trophic level reaches the next.',
      },
      {
        t: 'formula',
        kicker: 'Ten per cent law (Lindeman, 1942)',
        main: '<i>E</i><sub><i>n</i>+1</sub> ≈ <frac><num>10</num><den>100</den></frac> <i>E</i><sub><i>n</i></sub> = 0.1 <i>E</i><sub><i>n</i></sub>',
        legend: [],
        note: null,
      },
      {
        t: 'def',
        term: 'Ecological pyramids (Eltonian pyramids)',
        html: 'graphical representations of number, biomass, or energy at successive trophic levels, with producers at the base. Typical units: pyramid of energy in kcal m<sup>−2</sup> yr<sup>−1</sup> (or kJ m<sup>−2</sup> yr<sup>−1</sup>); pyramid of biomass in g m<sup>−2</sup>; pyramid of numbers as count per unit area.',
      },
      {
        t: 'table',
        title: null,
        head: ['Pyramid', 'Usually upright', 'Can be inverted'],
        rows: [
          ['<b>Number</b>', 'grassland, pond', 'single large tree (with its insects/parasites); parasitic food chain'],
          ['<b>Biomass</b>', 'grassland (terrestrial)', 'sea (tiny phytoplankton biomass at base, turning over fast); some ponds'],
          ['<b>Energy</b>', '<b>always upright</b> (as energy flow per unit area per unit time)', '<b>never</b> (forbidden by 2nd law)'],
        ],
      },

      { t: 'part', title: 'Key processes and logical framework' },
      {
        t: 'p',
        html: 'Ecology offers no algebra to derive here, so the skill is tracing energy and reading pyramids correctly.',
      },
      {
        t: 'proc',
        title: 'Framework A: tracing energy down a chain',
        steps: [
          'Begin with incident solar energy; take < 50% as PAR.',
          'Producers fix only <b>~2–10%</b> of PAR as chemical energy → this is the energy entering the first trophic level. <b>Put numbers to it:</b> of the incident radiation, roughly <b>95–99% is not fixed</b> (it is lost through reflection, re-radiation and the heat of evaporation, or lies outside the PAR range), leaving at most about <b>1–5%</b> to be fixed into organic molecules, which is why the energy entering a food chain is such a small slice of the sunlight that arrives.',
          'At each step up, multiply by <b>~0.1</b> (10% law). <b>Why only 10%?</b> Each level spends most of its intake on respiration and loses it as heat (second law), and some leaves as waste and dead matter; only the small surplus is available to the next level.',
          'Stop when the residual energy is too small to sustain another level: this is why chains rarely exceed 4–5 links.',
        ],
      },
      {
        t: 'proc',
        title: 'Framework B: building and reading a pyramid',
        steps: [
          'Choose the parameter: number, biomass, or energy.',
          'Stack trophic levels with <b>producers at the base</b>, each bar scaled to its value.',
          'Decide orientation from the parameter and the ecosystem: a pyramid of <b>number</b> can invert (one banyan tree feeding thousands of insects); a pyramid of <b>biomass</b> can invert in the sea (small phytoplankton standing crop that turns over fast supports a larger consumer biomass at a moment); a pyramid of <b>energy</b> (as energy flow per unit area per unit time) <b>can never invert</b>, because energy must decrease upward by the second law.',
          'Remember the three blind spots (no food webs, no multi-level organisms, no decomposers) before drawing conclusions.',
        ],
      },
      {
        t: 'p',
        html: '<b>Framework C: GFC vs DFC accounting.</b><br>• A <b>GFC</b> moves energy from producers → herbivores → carnivores; it is the major route in <b>aquatic</b> systems.<br>• A <b>DFC</b> moves energy from dead matter → detritivores/decomposers; it carries the <b>larger share in terrestrial</b> systems.<br>• The two are not separate: omnivores (crow, cockroach) feed across both, knitting the chains into a web. <b>Why this matters:</b> energy “lost” from the GFC as dead matter and waste is not wasted: it passes to the DFC, which uses it before it is finally lost as heat.',
      },
      { t: 'fig', id: 'b12-12-fig-12.3' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'In a grassland food chain, the producers store 48,000 kJ m<sup>−2</sup> yr<sup>−1</sup> of energy. Applying the 10% law, how much energy is available to the secondary consumers? State units.',
        steps: [
          '<b>Chain:</b> producers (1st) → herbivores (2nd) → secondary consumers (3rd). <b>Apply 10% law at each step:</b> Herbivores = 0.1 × 48,000 = 4,800 kJ m<sup>−2</sup> yr<sup>−1</sup>. Secondary consumers = 0.1 × 4,800',
          'Count the levels carefully: “secondary consumer” is the <b>third</b> trophic level, so the 10% rule is applied <b>twice</b>, not once.',
        ],
        ans: '480 kJ m<sup>−2</sup> yr<sup>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'CUET / Speed Trap',
        q: 'A single old banyan tree supports thousands of leaf-eating insects, which in turn host even more parasitic mites. For this chain, state the orientation of the pyramids of number, biomass and energy. Answer fast.',
        steps: [
          '<b>Quick reasoning:</b> One producer (the tree) but a huge number of insects and a still-larger number of parasites → <b>pyramid of number is inverted</b>. The tree’s biomass dwarfs the insects’ and parasites’ → <b>pyramid of biomass is upright</b>. Energy always decreases upward → <b>pyramid of energy is upright</b>.',
          '<b>Elimination cue:</b> “single big tree / parasites” → only the number pyramid flips; energy never does.',
        ],
        ans: 'Number inverted, biomass upright, energy upright.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'Of the solar radiation incident on a meadow, the plants ultimately fix 0.6 × 10<sup>5</sup> kJ m<sup>−2</sup> yr<sup>−1</sup>. A student claims a chain here could sustain six trophic levels. Using the 10% law, evaluate the claim and find the energy at the 4th trophic level.',
        steps: [
          '<b>Step 1: energy by level (× 0.1 each step):</b> 1st (producers) = 60,000; 2nd = 6,000; 3rd = 600; <b>4th = 60 kJ m<sup>−2</sup> yr<sup>−1</sup></b>; 5th = 6; 6th = 0.6.',
          '<b>Step 2: evaluate the claim:</b> each level holds only a tenth of the one below, so the 5th and 6th levels hold only 6 and 0.6 kJ m<sup>−2</sup> yr<sup>−1</sup> here. This is why food chains seldom exceed about <b>4–5 levels</b>.',
        ],
        ans: '4th trophic level = 60 kJ m<sup>−2</sup> yr<sup>−1</sup>; the six-level claim is not realistic: the 10% law starves the upper levels.',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty / Assertion–Reason',
        q: '<b>Assertion (A):</b> A pyramid of energy can never be inverted. <b>Reason (R):</b> The pyramid of biomass is inverted in the sea.<br>Options: <b>(a)</b> both true, R explains A; <b>(b)</b> both true, R does not explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          '<b>Evaluate A:</b> energy must decrease at every trophic transfer (second law), so the bars can only shrink upward: the energy pyramid is <b>always upright</b>. <b>A is true.</b>',
          '<b>Evaluate R:</b> in the sea, the tiny standing-crop biomass of phytoplankton supports a larger biomass of consumers at a given instant, so the <b>biomass pyramid is indeed inverted</b>. <b>R is true.</b>',
          '<b>Does R explain A?</b> No: R is a fact about the biomass pyramid; it says nothing about why the energy pyramid stays upright. The two are independent statements.',
          '<b>Trap:</b> the inverted-biomass fact is true and tempting, so students wrongly mark (a); read whether R actually explains A.',
        ],
        ans: '(b)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define a food chain and distinguish between a grazing food chain and a detritus food chain, with one example each.',
            a: 'Food chain = transfer of food energy through a sequence of eating/being-eaten; GFC begins with living producers (grass → deer → tiger), DFC begins with dead matter (detritus → earthworm → bird).',
          },
          {
            q: '[CUET] What percentage of incident solar radiation is PAR, and what fraction of PAR do producers typically capture?',
            a: 'PAR < 50% of incident radiation; producers capture ~2–10% of PAR.',
          },
          {
            q: '[NEET] If 9 × 10<sup>4</sup> kJ m<sup>−2</sup> yr<sup>−1</sup> is fixed by producers, how much energy reaches the tertiary consumer (4th trophic level)?',
            a: '9 × 10<sup>4</sup> → 9 × 10<sup>3</sup> → 9 × 10<sup>2</sup> → 90 kJ m<sup>−2</sup> yr<sup>−1</sup>.',
          },
          {
            q: '[NEET] Why is the pyramid of energy always upright, while the pyramids of number and biomass can be inverted? Give one inverted example each.',
            a: 'Energy must fall at each transfer (2nd law) → energy pyramid always upright; number inverts for a single large tree/parasitic chain; biomass inverts in the sea (small phytoplankton standing crop).',
          },
          {
            q: '[NEET high-difficulty] A sea and a forest receive comparable sunlight. Explain why the biomass pyramid is inverted in the sea but upright in the forest, even though the energy pyramid is upright in both.',
            a: 'In the sea the producer (phytoplankton) standing crop at any instant is tiny but turns over fast, supporting a larger consumer biomass → inverted biomass; the forest’s massive tree biomass keeps it upright; energy, being a rate that always decreases upward, stays upright in both.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The 10% law of energy transfer was proposed by:',
        opts: [
          { label: 'Tansley', nudge: '<b>(a)</b> Tansley coined “ecosystem”.' },
          { label: 'Elton', nudge: '<b>(b)</b> Elton introduced the pyramid of numbers: the favourite distractor.' },
          { label: 'Lindeman', nudge: null },
          { label: 'Odum', nudge: '<b>(d)</b> Odum wrote influential ecology texts but did not give this law.' },
        ],
        correct: 2,
        solution: 'Lindeman (1942) gave the 10% law.',
      },
      {
        t: 'mcq',
        q: 'Which ecological pyramid is always upright?',
        opts: [
          { label: 'pyramid of number', nudge: '<b>(a)</b> and <b>(b)</b> can invert (single tree; sea), so <b>(d)</b> is wrong: picked by those who forget the number/biomass exceptions.' },
          { label: 'pyramid of biomass', nudge: '<b>(a)</b> and <b>(b)</b> can invert (single tree; sea), so <b>(d)</b> is wrong: picked by those who forget the number/biomass exceptions.' },
          { label: 'pyramid of energy', nudge: null },
          { label: 'all of these', nudge: '<b>(a)</b> and <b>(b)</b> can invert (single tree; sea), so <b>(d)</b> is wrong: picked by those who forget the number/biomass exceptions.' },
        ],
        correct: 2,
        solution: 'Energy decreases at every transfer, so its pyramid cannot invert.',
      },
      {
        t: 'mcq',
        q: 'In a terrestrial ecosystem, the larger fraction of energy flows through the:',
        opts: [
          { label: 'grazing food chain', nudge: '<b>(a)</b> is the reflex wrong answer from students who assume “grazing = main everywhere”.' },
          { label: 'detritus food chain', nudge: null },
          { label: 'parasitic food chain', nudge: '<b>(c)</b> is a minor route.' },
          { label: 'it is equal in both', nudge: '<b>(d)</b> ignores the terrestrial/aquatic contrast.' },
        ],
        correct: 1,
        solution: 'Terrestrial systems route more energy through the DFC; aquatic systems favour the GFC.',
      },
      {
        t: 'mcq',
        q: 'Of the total incident solar radiation, the proportion that is Photosynthetically Active Radiation (PAR) is:',
        opts: [
          { label: 'more than 80%', nudge: '<b>(a)</b> and <b>(b)</b> overstate PAR.' },
          { label: 'about 70%', nudge: '<b>(a)</b> and <b>(b)</b> overstate PAR.' },
          { label: 'less than 50%', nudge: null },
          { label: '2–10%', nudge: '<b>(d)</b> is the trap: 2–10% is the fraction of PAR that plants capture, not the PAR fraction itself; mixing the two is the classic slip.' },
        ],
        correct: 2,
        solution: 'PAR is under 50% of incident radiation.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Miscounting trophic levels in 10%-law sums.</b> “Secondary consumer” = 3rd level → apply 10% <b>twice</b>; “tertiary consumer” = 4th → <b>thrice</b>. Write the chain out and number it before multiplying.',
          '<b>Thinking energy cycles.</b> Nutrients cycle; <b>energy does not</b>. Flow is unidirectional and non-cyclic: it exits as heat and never re-enters.',
          '<b>“Energy pyramid can be inverted.”</b> Not for energy flow per unit area per year (NCERT’s pyramid); only the <b>number</b> and <b>biomass</b> pyramids invert. This is a frequently tested trap (the book’s view, not an official figure).',
          '<b>PAR vs capture mix-up.</b> PAR is <b>< 50% of incident radiation</b>; <b>2–10%</b> is the slice of PAR that producers actually fix. Two different numbers.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any 10% law numerical, just <b>count the arrows</b> in the chain from the given level to the target level: that many factors of ÷10. Three arrows → divide by 1000. It turns a “calculation” into a one-second power-of-ten shift.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Energy flow = one-way', note: 'Sun → producers → consumers → heat. Unidirectional, non-cyclic.' },
          { f: 'Sun’s budget', note: 'PAR < 50% of incident; producers capture ~2–10% of PAR.' },
          { f: '10% law (Lindeman, 1942)', note: '<i>E</i><sub><i>n</i>+1</sub> ≈ 0.1 <i>E</i><sub><i>n</i></sub>; ~90% not passed on (mostly lost as heat) → chains usually ~4–5 levels.' },
          { f: 'Food chains', note: 'GFC (living producers; dominant in <b>aquatic</b>) vs DFC (dead matter; dominant in <b>terrestrial</b>); interlinked chains = food web.' },
          { f: 'Pyramids (Eltonian)', note: 'number, biomass, energy. <b>Energy = always upright</b>; number & biomass <b>can invert</b> (single tree → number; sea → biomass).' },
          { f: 'Pyramid blind spots', note: 'assumes a simple chain, ignores multi-level organisms, omits decomposers.' },
        ],
        aids: [
          'Mnemonics: <b>“Energy Always Erect”</b>: the <b>E</b>nergy pyramid is <b>A</b>lways upright.',
          '<b>“Aquatic Grazes, Terra Detrits”</b>: <b>G</b>FC dominates <b>a</b>quatic; <b>D</b>FC dominates <b>t</b>errestrial.',
          '<b>“Count the arrows, count the zeros”</b>: each ÷10 step = one arrow.',
        ],
      },
    ],
  },
];
