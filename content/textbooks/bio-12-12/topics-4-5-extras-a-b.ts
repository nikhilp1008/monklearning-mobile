import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 12 (Ecosystem), writer 2: Topics 04 and 05 and Additional topics A and B, word for
 * word from the Class 12 Biology Master Reference (book pp. 680 to 697).
 *
 * Topic 04 "Ecological Succession & Nutrient Cycling" (the book's "Chapter 4"), pp. 680 to 686: Figure 12.4
 * is captioned on p. 683 and drawn on p. 684, set at the end of Key processes and logical framework where the
 * book's caption stands. Topic 05 "Ecosystem Services" (the book's "Chapter 5"), pp. 687 to 691: Figure 12.5
 * is captioned on p. 688 and drawn on p. 689, set at the end of Key framework and logical organisation. The
 * shared introduction to the Additional topics (p. 692 lines 1 to 8) opens Additional topic A's Introduction.
 * A "Decomposition: Mechanisms, Detritivores, and Controlling Factors", p. 692 line 9 to p. 694 (its answers
 * end on p. 694); B "Succession: Complete Seral Stages and Specific Pioneer Organisms", low on p. 694 to p. 697
 * (its answers end on p. 697, where Addendum C begins: the next writer).
 *
 * Topic indexes: Topic 04 = 3, Topic 05 = 4, A = 5, B = 6. House rules: no em dashes (each is a colon, commas,
 * a bracket or a full stop, listed in the report), no fraction on one line, formulas upright with real
 * sub/superscripts, ratios with the spaced ratio sign, units without a slash. "Chapter 4" (the book's own name
 * for Topic 04) is Topic 04, "the structure subtopic" is Topic 01.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 680–686 ─────────────────────────
  {
    n: '04',
    title: 'Ecological Succession & Nutrient Cycling',
    kalam:
      'Ecological succession is the orderly, gradual and fairly predictable change in the species composition of an area over time.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance (split):</b> Ecological Succession appears in CBSE Boards as a 3-mark sequence/definition question (hydrarch vs xerarch, primary vs secondary) and in CUET as MCQs, but check the current NTA syllabus for its status. Nutrient Cycling appears in CBSE Boards as a 2–3 mark carbon/phosphorus cycle or gaseous-vs-sedimentary question, and has carried NEET questions in past papers, most often the “phosphorus is sedimentary, not gaseous” trap or reservoir matching (the book’s estimate from past papers, not official figures); check the current NTA syllabus for its status.',
      },
      {
        t: 'p',
        html: 'These two ideas are taught together because both answer the question: how does an ecosystem keep going over time? Succession is how a community <b>builds itself up</b> on a fresh site; nutrient cycling is how it <b>keeps reusing its raw materials</b> instead of running out.',
      },
      {
        t: 'p',
        html: '<b>Ecological succession</b> is the orderly, gradual and fairly <b>predictable</b> change in the species composition of an area over time. Picture an empty plot on the edge of a growing town. First come the hardiest squatters who can survive bare ground; they make the place a little more liveable; better-established residents move in and displace them; and the cycle repeats until a stable, mature neighbourhood settles in that no longer changes much. Ecology uses exact words for each part of this story: the whole sequence of communities is a <b>sere</b>; each transitional community along the way is a <b>seral stage</b>; the very first colonisers are the <b>pioneer community</b>; and the final, stable, self-perpetuating community that sits in equilibrium with the climate is the <b>climax community</b>.',
      },
      {
        t: 'p',
        html: 'Succession comes in two flavours by where it starts. <b>Primary succession</b> begins on a site where no community ever existed: bare rock, a newly cooled lava flow, fresh sand dunes, a new pond. There is no soil yet, so it is <b>slow</b>: the pioneers themselves have to build the soil first. <b>Secondary succession</b> begins where a community was present but got wiped out: a burned forest, an abandoned farm, a flooded field. Because soil and some seeds/propagules survive, it is <b>much faster</b>. By the medium it starts in, succession is <b>hydrarch</b> (starting in water) or <b>xerarch</b> (starting on very dry land or rock); remarkably, both eventually converge towards the same balanced <b>mesic</b> climax.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Energy and nutrients behave oppositely in an ecosystem. Energy is like the monthly <b>electricity bill</b>: once consumed it is gone for good (it leaves as heat). Nutrients are like the steel <b>utensils</b> in a kitchen, washed and reused, meal after meal, year after year. That reuse is <b>nutrient cycling</b>: the movement of nutrient elements (carbon, phosphorus, nitrogen, sulphur) back and forth between living organisms and the non-living environment, also called a <b>biogeochemical cycle</b>. What cycles are these <b>essential nutrient elements</b>, not ready-made food molecules; glucose, for example, is a food molecule the plant makes, not a nutrient element that is cycled, a distinction examiners like to test.',
      },
      {
        t: 'p',
        html: 'Every nutrient cycle has a big storehouse called a <b>reservoir</b>, and cycles are sorted by where that reservoir sits. In a <b>gaseous cycle</b> the reservoir is the <b>atmosphere (or hydrosphere)</b>: carbon and nitrogen are the examples. In a <b>sedimentary cycle</b> the reservoir is the <b>Earth’s crust / rocks</b>: phosphorus and sulphur are the examples. The amount of a nutrient sitting in the soil at any given moment is its <b>standing state</b>, which varies between ecosystems and across seasons.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> (1) Succession is <b>long-term and gradual</b>; a natural or human-induced disturbance (fire, flood, grazing, deforestation) can <b>arrest</b> it at a pre-climax stage or even convert a later seral stage back to an earlier one, because the disturbance creates fresh conditions that favour some species and eliminate others. (2) The nature of the climax is governed mainly by <b>climate</b>. (3) Gaseous cycles are relatively <b>fast and “perfect”</b> (the atmospheric reservoir exchanges quickly); sedimentary cycles are <b>slow and “imperfect”</b> because nutrients get locked in rock for long periods (these “perfect” and “imperfect” labels are Odum’s, not NCERT’s). (4) The <b>phosphorus cycle has essentially no gaseous phase</b>: gaseous exchanges of phosphorus are negligible. Missing that last point is the single most-tested error in this topic (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'def',
        term: 'Ecological succession',
        html: 'the gradual, sequential and predictable change in the species composition of a given area over time.',
      },
      {
        t: 'def',
        term: 'Sere',
        html: 'the entire sequence of communities that successively replace one another in an area.',
      },
      {
        t: 'def',
        term: 'Seral stage / seral community',
        html: 'an individual transitional community within a sere.',
      },
      {
        t: 'def',
        term: 'Pioneer community',
        html: 'the first organisms to colonise a bare area (e.g. lichens on bare rock).',
      },
      {
        t: 'def',
        term: 'Climax community',
        html: 'the final, stable, self-perpetuating community in equilibrium with the environment.',
      },
      {
        t: 'def',
        term: 'Primary succession',
        html: 'succession beginning on a previously unoccupied/bare site (bare rock, cooled lava, sand dunes, new pond); slow, because soil must form first.',
      },
      {
        t: 'def',
        term: 'Secondary succession',
        html: 'succession beginning on a site that lost its community but retains soil (burned forest, abandoned farmland, flooded land); faster.',
      },
      {
        t: 'def',
        term: 'Hydrarch (hydrosere)',
        html: 'succession beginning in water, progressing towards mesic.',
      },
      {
        t: 'def',
        term: 'Xerarch (xerosere)',
        html: 'succession beginning on dry land/rock, progressing towards mesic. (A xerosere on rock is a <b>lithosere</b>; on sand, a <b>psammosere</b>.)',
      },
      {
        t: 'def',
        term: 'Nutrient cycling / biogeochemical cycle',
        html: 'the movement and repeated use of nutrient elements between the biotic and abiotic components of an ecosystem.',
      },
      {
        t: 'def',
        term: 'Standing state',
        html: 'the amount of a nutrient present in the soil at a given time.',
      },
      {
        t: 'def',
        term: 'Reservoir',
        html: 'the large pool from which a nutrient is drawn and to which it returns; the atmosphere/hydrosphere for <b>gaseous cycles</b> (carbon, nitrogen), the Earth’s crust/rocks for <b>sedimentary cycles</b> (phosphorus, sulphur).',
      },
      {
        t: 'p',
        html: '<b>Function note (phosphorus):</b> a major constituent of nucleic acids, biological membranes, cellular energy-transfer systems (ATP), and shells, bones and teeth.',
      },

      { t: 'part', title: 'Key processes and logical framework' },
      {
        t: 'p',
        html: 'There is no formula to derive here; the skill is sequencing succession correctly and tracing each nutrient through its reservoir.',
      },
      {
        t: 'p',
        html: '<b>Framework A: running a primary succession.</b> <b>Xerarch (on bare rock):</b> bare rock → <b>crustose lichens</b> (pioneers, e.g. <i>Rhizocarpon</i>, <i>Rinodina</i>; they secrete acids that weather the rock and begin soil formation) → <b>foliose lichens</b> (e.g. <i>Parmelia</i>, <i>Dermatocarpon</i>) → <b>mosses</b> (e.g. <i>Polytrichum</i>, <i>Grimmia</i>) → <b>herbs</b> → <b>shrubs</b> (e.g. <i>Rhus</i>) → <b>climax community</b> (a forest, where the climate allows). <b>Hydrarch (in open water):</b> phytoplankton (diatoms, green algae) → submerged rooted plants (e.g. <i>Hydrilla</i>, <i>Vallisneria</i>, <i>Potamogeton</i>) → free-floating and rooted floating plants (e.g. <i>Wolffia</i>, <i>Azolla</i>; <i>Nymphaea</i>, <i>Trapa</i>) → reeds and sedges (e.g. <i>Sagittaria</i>, <i>Juncus</i>, <i>Carex</i>) → mesic herb/shrub communities → <b>climax community</b> (a terrestrial forest, where the climate allows). (NCERT’s text gives phytoplankton → rooted submerged plants → rooted floating angiosperms → free-floating plants → reed-swamp → marsh-meadow → scrub → trees, and its figure shows the same stages; the example genera are ours, not NCERT’s.) <b>Why the order?</b> Each seral stage <b>modifies its own habitat</b> (adding soil, organic matter, moisture or shade), making conditions better for the next community and often worse for itself. That is the engine that drives the sequence forward, and it is why both hydrarch and xerarch routes head toward the same balanced <b>mesic</b> endpoint.',
      },
      {
        t: 'p',
        html: '<b>Framework B: primary vs secondary (a one-question test).</b> Ask: is there pre-existing soil and a seed/propagule bank on the site? If <b>no</b> (bare rock, lava, dunes) → <b>primary</b>, and expect it to be <b>slow</b>. If <b>yes</b> (burned forest, old field) → <b>secondary</b>, and expect it to be <b>fast</b>. The single deciding factor is the head-start that surviving soil provides.',
      },
      {
        t: 'p',
        html: '<b>Framework C: tracing the two NCERT nutrient cycles.</b> <b>Carbon cycle (gaseous; the reservoir is the atmosphere and hydrosphere: the air holds only about 1% of the world’s carbon and the oceans about 71%, and the oceans act as a major sink for CO<sub>2</sub>):</b> atmospheric CO<sub>2</sub> is fixed by <b>photosynthesis</b> into producers → carbon passes along the food chain → it is <b>returned to the atmosphere</b> by respiration (producers and consumers), by decomposition, and by combustion (forest fires, burning of fossil fuels). Human activities (deforestation and large-scale fossil-fuel burning) push atmospheric CO<sub>2</sub> <b>upward</b>. <b>Phosphorus cycle (sedimentary; reservoir = rock):</b> phosphorus is locked in <b>rock</b> as phosphates → <b>weathering</b> releases phosphate into the soil solution → producers take it up → it moves through the food chain → decomposers and <b>phosphate-solubilising bacteria</b> return it to the soil. Crucially, there is <b>no significant gaseous/atmospheric phase</b> and <b>no respiratory release</b> of phosphorus; some is lost to sediments and returns only slowly over geological time. <b>Why carbon is “fast” and phosphorus is “slow”:</b> carbon’s reservoir is the ever-circulating atmosphere, so exchange is quick; phosphorus’s reservoir is rock and sediment, where it can sit out of circulation for ages, making the sedimentary cycle the slower, “less perfect” one.',
      },
      {
        t: 'p',
        html: '<b>Framework D: what drives a succession.</b> It helps to know why the sequence moves at all. The causes group into three: <b>initiating causes</b> (climatic or biotic shocks such as erosion, wind, fire or flood that clear or open up a site), <b>continuing causes</b> (migration, <b>ecesis</b> (establishment), and the adjustments by which incoming species adapt and modify the population), and <b>stabilising causes</b>, chiefly the <b>climate</b>, which determines the nature of the final climatic climax. This is the deeper reason the climax depends mainly on climate: it is the stabilising force that fixes the end point of the whole sequence.',
      },
      { t: 'fig', id: 'b12-12-fig-12.4' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Succession.</b> Arrange the stages of a xerarch (primary) succession on a bare rock, from the pioneer stage to the climax, and name the pioneer community.',
        steps: [
          '<b>Sequence:</b> bare rock → crustose lichens (pioneer community) → foliose lichens → mosses → herbs → shrubs → forest (climax community). <b>Pioneer community:</b> crustose <b>lichens</b>, which weather the rock and start soil formation.',
          '<b>Common slip:</b> naming mosses or grasses as pioneers on rock: on bare rock the usual pioneers are lichens, which can live on a substratum with no soil and whose acids weather the rock.',
        ],
        ans: 'The order above; lichens are the pioneers.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Succession.</b> A forest is destroyed by fire; nearby, a fresh volcanic lava field cools. Which site will redevelop a community faster, and what type of succession occurs on each?',
        steps: [
          '<b>Reasoning:</b> the burned forest retains soil, nutrients and seeds → <b>secondary succession</b>, which is <b>fast</b>. The cooled lava is a brand-new, lifeless, soil-less surface → <b>primary succession</b>, which is <b>slow</b> (soil must form first).',
          '<b>Decision cue:</b> surviving soil ⇒ secondary ⇒ fast.',
        ],
        ans: 'The burned forest redevelops faster (secondary succession); the lava field undergoes primary succession and is slower.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Nutrient Cycling.</b> Why is the phosphorus cycle classified as sedimentary while the carbon cycle is gaseous? State two consequences of this difference.',
        steps: [
          '<b>Step 1 (reservoir):</b> carbon’s reservoir is the <b>atmosphere</b> (CO<sub>2</sub>) → gaseous cycle; phosphorus’s reservoir is <b>rock/crust</b> (phosphates) → sedimentary cycle.',
          '<b>Step 2 (consequences):</b> (i) carbon has a <b>respiratory/atmospheric release</b> and recycles quickly; phosphorus has <b>no significant gaseous phase</b> and recycles slowly. (ii) carbon is readily affected by human activities such as fossil-fuel burning; phosphorus tends to get <b>locked in sediments</b> and returns only over geological time.',
        ],
        ans: 'Classification follows the reservoir; phosphorus lacks the fast atmospheric route that carbon has.',
      },
      {
        t: 'ex',
        tag: 'NEET, high difficulty',
        q: '<b>Assertion–Reason.</b> <b>Assertion (A):</b> There is no respiratory release of phosphorus into the atmosphere. <b>Reason (R):</b> The phosphorus cycle is a sedimentary cycle with rock as its reservoir and a negligible gaseous phase. <b>Options:</b> <b>(a)</b> both true, R explains A; <b>(b)</b> both true, R does not explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          '<b>Evaluate A:</b> organisms do not exhale or release phosphorus as a gas the way they release CO<sub>2</sub>; there is no respiratory gaseous loss of phosphorus. <b>A is true.</b> <b>Evaluate R:</b> phosphorus is indeed sedimentary, reservoired in rock, with negligible gaseous exchange. <b>R is true.</b> <b>Does R explain A?</b> Yes, because the cycle is sedimentary with no meaningful gaseous phase, there is no gaseous (respiratory) release. R is the correct explanation.',
          '<b>Trap:</b> students who half-remember “carbon has respiratory release” sometimes generalise it to phosphorus and mark A false → (d).',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE: Succession] Define a climax community and state two of its characteristics.',
            a: 'The final, stable, self-perpetuating community in equilibrium with the climate; fairly constant species composition, high biomass, usually high diversity and niche specialisation.',
          },
          {
            q: '[CBSE: Nutrient] Name the reservoir of (a) the carbon cycle and (b) the phosphorus cycle, and classify each cycle.',
            a: '(a) atmosphere: gaseous cycle; (b) rock/Earth’s crust: sedimentary cycle.',
          },
          {
            q: '[CUET: Succession] Distinguish between hydrarch and xerarch succession, naming the medium each begins in and the climax both move toward.',
            a: 'Hydrarch begins in open water (pond/lake), xerarch begins on dry land or bare rock; both progress toward the same mesic climax community (a forest where the climate allows).',
          },
          {
            q: '[NEET: Nutrient] List two ways carbon returns to the atmosphere in the carbon cycle, and name the major sink for CO<sub>2</sub>.',
            a: 'Respiration (and decomposition) plus combustion of fossil fuels/forest fires; oceans are the major sink.',
          },
          {
            q: '[NEET, high difficulty: Nutrient] Explain why a sedimentary cycle is described as “slow / less perfect” compared with a gaseous cycle, using phosphorus as your example.',
            a: 'Phosphorus is reservoired in rock and is released only by slow weathering, with no fast atmospheric route and frequent long-term locking into sediments, so its return to circulation is slow, making the sedimentary cycle “less perfect” than the rapidly exchanging atmospheric carbon cycle.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: '(CBSE/CUET-scope: succession) On a bare rock, the pioneer community is usually:',
        opts: [
          { label: 'mosses', nudge: '<b>(a)</b> mosses and <b>(b)</b> grasses arrive at later seral stages, after some soil exists: the classic sequence trap.' },
          { label: 'grasses', nudge: '<b>(a)</b> mosses and <b>(b)</b> grasses arrive at later seral stages, after some soil exists: the classic sequence trap.' },
          { label: 'lichens', nudge: null },
          { label: 'shrubs', nudge: '<b>(d)</b> shrubs are near the climax end.' },
        ],
        correct: 2,
        solution: 'Correct: <b>(c)</b>. Lichens are the usual pioneers on bare rock; they weather it and begin soil formation.',
      },
      {
        t: 'mcq',
        q: '(nutrient cycling) Which of the following is a sedimentary cycle?',
        opts: [
          { label: 'carbon', nudge: '<b>(a)</b> carbon and <b>(b)</b> nitrogen are gaseous (atmospheric reservoir).' },
          { label: 'nitrogen', nudge: '<b>(a)</b> carbon and <b>(b)</b> nitrogen are gaseous (atmospheric reservoir).' },
          { label: 'phosphorus', nudge: null },
          { label: 'oxygen', nudge: '<b>(d)</b> oxygen is gaseous.' },
        ],
        correct: 2,
        solution: 'Correct: <b>(c)</b>. Phosphorus is reservoired in rock → sedimentary. Marking carbon here is the most common error (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'mcq',
        q: '(CBSE/CUET-scope: succession) Secondary succession differs from primary succession in that it:',
        opts: [
          { label: 'begins on bare rock', nudge: '<b>(a)</b> describes primary succession.' },
          { label: 'starts where soil is already present', nudge: null },
          { label: 'is always slower', nudge: '<b>(c)</b> reverses the truth: secondary is faster.' },
          { label: 'never reaches a climax', nudge: '<b>(d)</b> is wrong: both normally head toward a climax, although disturbance can arrest either.' },
        ],
        correct: 1,
        solution: 'Correct: <b>(b)</b>. Secondary succession starts on a site that retains soil (burned forest, old field), so it is <b>faster</b>.',
      },
      {
        t: 'mcq',
        q: '(nutrient cycling) The oceans are considered important in the carbon cycle because they:',
        opts: [
          { label: 'release phosphorus', nudge: '<b>(a)</b> and <b>(c)</b> confuse the carbon cycle with phosphorus.' },
          { label: 'act as a sink for CO<sub>2</sub>', nudge: null },
          { label: 'are the reservoir of the phosphorus cycle', nudge: '<b>(a)</b> and <b>(c)</b> confuse the carbon cycle with phosphorus.' },
          { label: 'fix nitrogen', nudge: '<b>(d)</b> is the nitrogen cycle.' },
        ],
        correct: 1,
        solution: 'Correct: <b>(b)</b>. Oceans absorb and store atmospheric CO<sub>2</sub>, acting as a global sink.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Phosphorus is sedimentary, not gaseous.</b> The single biggest trap (the book’s own view, not an official figure). Its reservoir is rock; it has no significant gaseous phase and no respiratory release. Carbon and nitrogen are the gaseous cycles.',
          '<b>Pioneer vs climax mix-up.</b> Pioneers are the first colonisers (lichens on rock); the climax is the final stable community. On bare rock the pioneers are lichens, not mosses or grasses, which need some soil first.',
          '<b>Primary vs secondary speed.</b> Primary (bare rock/lava) is slow (no soil); secondary (burned forest/old field) is fast (soil already there). The deciding factor is pre-existing soil.',
          '<b>Energy flows, nutrients cycle.</b> Don’t carry the one-way logic of energy into nutrients: nutrients are reused; energy is not. (And recall: standing state = nutrients, standing crop = biomass, from Topic 01.)',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any “gaseous or sedimentary?” question, ask only <b>“where is the reservoir?”</b>: atmosphere/water ⇒ gaseous (carbon, nitrogen); rock/crust ⇒ sedimentary (phosphorus, sulphur). One question settles the whole answer.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Succession</b>',
            note: 'orderly, predictable change in species composition; <b>sere</b> (whole sequence) → <b>seral stages</b> → <b>climax</b> (stable, self-perpetuating). Pioneers on rock = <b>lichens</b>.',
          },
          {
            f: '<b>Primary</b> (bare rock/lava/dunes: slow, soil must form) vs <b>secondary</b> (burned forest/old field: fast, soil present).',
            note: '',
          },
          {
            f: '<b>Hydrarch</b> (starts in water) and <b>xerarch</b> (starts on rock/dry land) both → <b>mesic climax</b>.',
            note: '',
          },
          {
            f: '<b>Nutrient cycling = biogeochemical cycle;</b> nutrients reused (unlike energy). <b>Standing state</b> = nutrient amount in soil.',
            note: '',
          },
          {
            f: '<b>Gaseous cycle:</b> reservoir = atmosphere → <b>carbon, nitrogen</b> (fast). <b>Sedimentary cycle:</b> reservoir = rock → <b>phosphorus, sulphur</b> (slow).',
            note: '',
          },
          {
            f: '<b>Carbon</b>',
            note: 'atmosphere ⇄ photosynthesis/respiration/decomposition/combustion; oceans = sink. <b>Phosphorus:</b> rock → weathering → soil → uptake → decomposers; <b>no gaseous phase</b>.',
          },
        ],
        aids: [
          '<b>Mnemonics:</b> “<b>PuSS is Sedimentary</b>”: <b>P</b>hosphorus & <b>S</b>ulphur are <b>S</b>edimentary; the rest (Carbon, Nitrogen) are gaseous.',
          '“<b>Lichens Lead, Forest Finishes</b>”: pioneer = lichens; climax = forest.',
          '“<b>Soil survives ⇒ Secondary ⇒ Speedy.</b>”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 05 · pp. 687–691 ─────────────────────────
  {
    n: '05',
    title: 'Ecosystem Services',
    kalam: 'Healthy ecosystems work for us around the clock, completely free of charge, and we almost never notice.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A short, high-recall topic. CBSE Boards ask a 1–2 mark “define ecosystem services / give examples” or a question on Robert Costanza’s valuation. CUET keeps it as direct MCQs. NEET asks it only occasionally, usually the US $33 trillion figure or identifying what counts as an ecosystem service (the book’s estimate from past papers, not official figures). Check the current NTA syllabus for its status. Little reasoning, high marks-per-word: learn the list and the number.',
      },
      {
        t: 'p',
        html: 'Healthy ecosystems work for us around the clock, completely free of charge, and we almost never notice. A forest cleans the air we breathe and the water that flows from its slopes; wetlands soak up floodwaters; soil microbes recycle the nutrients that grow our food; bees and other insects pollinate our crops. These benefits, the useful <b>products of ecosystem processes</b>, are called <b>ecosystem services</b>.',
      },
      {
        t: 'p',
        html: 'The key idea is that these services are not things we manufacture; they are by-products of an ecosystem simply functioning normally. Because they arrive without an invoice, we tend to take them for granted, which is exactly why economists eventually tried to put a price on them, to make their value visible. <b>Forests</b> are the usual example of an ecosystem that delivers many of these services at once, which is why NCERT uses forests as its example of an ecosystem that provides these services.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine your locality had to pay a company for every service nature provides free: a bill for air purification, another for flood control, another for pollinating the mango orchard, another for keeping the soil fertile. The total would be staggering. That is precisely the calculation a team of researchers led by <b>Robert Costanza</b> attempted: they put an average price tag of about <b>US $33 trillion a year</b> on nature’s fundamental life-support services, nearly <b>twice</b> the value of the entire global gross national product (GNP) of roughly US $18 trillion at the time.',
      },
      {
        t: 'p',
        html: 'So the take-home is twofold: ecosystems provide a wide range of indispensable services for free, and when we attempt to value them in money, the figure dwarfs the human economy.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> (1) These valuations are <b>estimates</b>, not market prices: nature’s services are mostly “non-market,” so any rupee or dollar figure is approximate and debated. (2) The point of the exercise is <b>awareness</b>, not literal billing: it shows how much we silently depend on intact ecosystems. (3) The services are interlinked: degrade one (say, soil), and several others (food production, carbon storage) suffer too.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'def',
        term: 'Ecosystem services',
        html: 'the beneficial products of ecosystem processes; the goods and services that healthy natural ecosystems provide, largely free of cost.',
      },
      {
        t: 'def',
        term: 'Major source',
        html: '<b>forests</b>, which deliver many services simultaneously.',
      },
      {
        t: 'p',
        html: '<b>The standard NCERT list of ecosystem services:</b><br>• purification of air and water<br>• mitigation of droughts and floods<br>• cycling of nutrients<br>• generation and maintenance of fertile soils<br>• provision of wildlife habitat<br>• maintenance of biodiversity<br>• pollination of crops<br>• provision of a storage site for carbon<br>• provision of aesthetic, cultural and spiritual values',
      },
      {
        t: 'def',
        term: 'Costanza valuation',
        html: 'the average price tag placed on fundamental ecosystem services (Costanza et al., 1997): about <b>US $33 trillion per year</b>, nearly twice the global GNP (~US $18 trillion).',
      },
      {
        t: 'def',
        term: 'Value breakdown (Costanza estimate)',
        html: '<b>soil formation</b> accounts for about <b>50%</b> of the total; <b>recreation</b> and <b>nutrient cycling</b> are <b>less than 10% each</b>; <b>climate regulation</b> and <b>wildlife habitat</b> are about <b>6% each</b>. (This split is NCERT’s wording and the one examined. In Costanza et al.’s original 1997 table the share of about half belongs to nutrient cycling, so treat these labels as NCERT’s.)',
      },
      {
        t: 'p',
        html: '(Qualitative/economic topic: no SI units; values are monetary estimates.)',
      },

      { t: 'part', title: 'Key framework and logical organisation' },
      {
        t: 'p',
        html: 'There is nothing to derive here; the value lies in being able to <b>list, recognise and organise</b> the services, and to handle the valuation figures.',
      },
      {
        t: 'p',
        html: '<b>Framework A: recognising an ecosystem service.</b> Ask: is this a benefit that an ecosystem provides simply by functioning normally? If yes (clean air, flood control, pollination, fertile soil, carbon storage, even the joy of a forest walk), it is an ecosystem service. If it is a manufactured product or a purely human activity, it is <b>not</b>. This is the exact discrimination CUET and NEET test (“which of the following is NOT an ecosystem service?”).',
      },
      {
        t: 'p',
        html: '<b>Framework B: organising the long list (enrichment lens).</b> A convenient way to remember the NCERT examples is to sort them into four families: <b>provisioning</b> (tangible goods: food, water, timber), <b>regulating</b> (control services: flood and drought mitigation, climate regulation, air/water purification), <b>supporting</b> (the background processes everything else rests on: soil formation, nutrient cycling, habitat), and <b>cultural</b> (non-material benefits: aesthetic, recreational, spiritual value). Every item in the NCERT list slots into regulating, supporting or cultural (the list has no provisioning item), which makes the list far easier to recall under exam pressure. (Treat the four-category names as a study aid; the NCERT examples themselves are what an exam will ask for.)',
      },
      {
        t: 'p',
        html: '<b>Framework C: reading the valuation.</b> The two numbers to anchor are <b>US $33 trillion yr<sup>−1</sup></b> (the value of the services) and the comparison that this is <b>about double the ~US $18 trillion</b> global GNP. Within the $33 trillion, remember the single dominant slice: <b>soil formation ≈ 50%</b>. (NCERT’s labelling; in Costanza et al.’s original table the half share is nutrient cycling.) The reasoning the figure is meant to convey is simple: if we had to replace these services with human technology, the cost would exceed everything the human economy produces, so conserving ecosystems is not sentiment but economics.',
      },
      { t: 'fig', id: 'b12-12-fig-12.5' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Define ecosystem services and list any four, naming the scientist associated with valuing them.',
        steps: [
          '<b>Definition:</b> ecosystem services are the beneficial products of ecosystem processes, provided largely free by healthy ecosystems. <b>Any four:</b> purification of air and water; mitigation of floods and droughts; pollination of crops; maintenance of fertile soil (or biodiversity, carbon storage, etc.). <b>Scientist: Robert Costanza</b> (and colleagues) valued them at about US $33 trillion a year.',
        ],
        ans: 'As above: definition + four valid examples + Costanza.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: 'Which of the following is NOT an ecosystem service: (a) crop pollination, (b) flood mitigation, (c) manufacture of fertiliser in a factory, (d) carbon storage?',
        steps: [
          '<b>Reasoning:</b> (a), (b) and (d) are benefits delivered by ecosystems functioning normally. Factory fertiliser is a <b>human industrial product</b>, not a service nature provides.',
          '<b>Discrimination rule:</b> ecosystem service = nature’s free by-product, not a manufactured good.',
        ],
        ans: '(c)',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'Robert Costanza’s team valued global ecosystem services at roughly US $33 trillion per year. How does this compare with the global GNP, and which single service contributes the largest share?',
        steps: [
          '<b>Reasoning:</b> US $33 trillion is <b>nearly twice</b> the global GNP (~US $18 trillion). Of that total, <b>soil formation</b> is the largest single contributor at about <b>50%</b>. (NCERT’s labelling; in Costanza et al.’s original table the half share is nutrient cycling.)',
        ],
        ans: 'About double the global GNP; soil formation contributes the largest share (~50%).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What are ecosystem services? Name the ecosystem regarded as their major source.',
            a: 'Beneficial products of ecosystem processes provided free by healthy ecosystems; forests are the major source.',
          },
          {
            q: '[CBSE] State the price tag Robert Costanza’s team placed on global ecosystem services, and compare it with global GNP.',
            a: 'About US $33 trillion per year, nearly twice the global GNP (~US $18 trillion).',
          },
          {
            q: '[CUET] List any five ecosystem services given in NCERT.',
            a: 'Any five of: air/water purification, drought/flood mitigation, nutrient cycling, soil fertility, wildlife habitat, biodiversity maintenance, crop pollination, carbon storage, aesthetic/cultural/spiritual value.',
          },
          {
            q: '[NEET] Which service accounts for the largest share of the Costanza valuation, and approximately what percentage?',
            a: 'Soil formation, ~50%. (NCERT’s labelling; in Costanza et al.’s original table the half share is nutrient cycling.)',
          },
          {
            q: '[NEET] Explain why ecosystem services are described as “free” and why putting a price on them is nonetheless useful.',
            a: 'They arise from ecosystems functioning normally and carry no market price, so they are “free”; valuing them makes our hidden dependence visible and strengthens the economic case for conservation.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The products of ecosystem processes are known as:',
        opts: [
          { label: 'ecosystem services', nudge: null },
          { label: 'standing crop', nudge: '<b>(b)</b> is living biomass at a level.' },
          { label: 'primary productivity', nudge: '<b>(c)</b> is a rate of biomass production.' },
          { label: 'biomagnification', nudge: '<b>(d)</b> is an unrelated toxicology term.' },
        ],
        correct: 0,
        solution: 'Correct: <b>(a)</b>. By definition. All distractors are drawn from elsewhere in the chapter.',
      },
      {
        t: 'mcq',
        q: 'Robert Costanza and colleagues valued global ecosystem services at approximately:',
        opts: [
          { label: 'US $18 trillion yr<sup>−1</sup>', nudge: '<b>(a)</b> is the global GNP figure: the favourite trap.' },
          { label: 'US $33 trillion yr<sup>−1</sup>', nudge: null },
          { label: 'US $11 trillion yr<sup>−1</sup>', nudge: '<b>(c)</b> and <b>(d)</b> are invented distractors.' },
          { label: 'US $50 trillion yr<sup>−1</sup>', nudge: '<b>(c)</b> and <b>(d)</b> are invented distractors.' },
        ],
        correct: 1,
        solution: 'Correct: <b>(b)</b>. US $33 trillion yr<sup>−1</sup>.',
      },
      {
        t: 'mcq',
        q: 'Which contributes the largest share of the valued ecosystem services?',
        opts: [
          { label: 'recreation', nudge: '<b>(a)</b> recreation and <b>(b)</b>/<b>(d)</b> are each under ~10%, so they are minor shares: distractors for students who don’t recall the breakdown.' },
          { label: 'climate regulation', nudge: '<b>(a)</b> recreation and <b>(b)</b>/<b>(d)</b> are each under ~10%, so they are minor shares: distractors for students who don’t recall the breakdown.' },
          { label: 'soil formation', nudge: null },
          { label: 'wildlife habitat', nudge: '<b>(a)</b> recreation and <b>(b)</b>/<b>(d)</b> are each under ~10%, so they are minor shares: distractors for students who don’t recall the breakdown.' },
        ],
        correct: 2,
        solution: 'Correct: <b>(c)</b>. Soil formation ≈ 50%. (NCERT’s labelling; in Costanza et al.’s original table the half share is nutrient cycling.)',
      },
      {
        t: 'mcq',
        q: 'Which one of the following is an ecosystem service?',
        opts: [
          { label: 'generating electricity in a thermal plant', nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are human industrial activities, not ecosystem services.' },
          { label: 'crop pollination by insects', nudge: null },
          { label: 'mining of coal', nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are human industrial activities, not ecosystem services.' },
          { label: 'manufacture of plastic', nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are human industrial activities, not ecosystem services.' },
        ],
        correct: 1,
        solution: 'Correct: <b>(b)</b>. Pollination by insects is a natural service.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>$33 trillion vs $18 trillion.</b> US $33 trillion is the <b>value of the services</b>; US $18 trillion is the <b>global GNP</b> they are compared with. Swapping the two is the most common error (the book’s estimate from past papers, not official figures).',
          '<b>Soil formation is the biggest slice (~50%).</b> Not recreation, not climate regulation: those are minor (<10% and ~6%). (NCERT’s labelling; in Costanza et al.’s original table the half share is nutrient cycling.)',
          '<b>“Service” means nature’s free by-product.</b> Manufactured goods (fertiliser, electricity, plastic) are never ecosystem services, however useful: a frequent “which is NOT” trap.',
          '<b>Forests are NCERT’s example</b> of an ecosystem providing these services (purifying air and water, and so on).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Lock the two numbers as a pair: <b>“33 is the gift, 18 is the GNP; the gift is nearly double the GNP.”</b> And remember <b>soil ≈ half</b> of the gift.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Ecosystem services</b> = beneficial products of ecosystem processes, provided <b>free</b>; <b>forests</b> = major source.',
            note: '',
          },
          {
            f: '<b>Examples</b>',
            note: 'air/water purification, flood & drought control, nutrient cycling, soil fertility, wildlife habitat, biodiversity, crop pollination, carbon storage, aesthetic/cultural/spiritual value.',
          },
          {
            f: '<b>Costanza valuation ≈ US $33 trillion yr<sup>−1</sup></b>: nearly <b>2×</b> global GNP (~US $18 trillion).',
            note: '',
          },
          {
            f: '<b>Value breakdown</b>',
            note: 'soil formation ≈ <b>50%</b>; recreation & nutrient cycling <b><10%</b> each; climate regulation & wildlife habitat ≈ <b>6%</b> each (NCERT’s labelling; see the note under Key definitions).',
          },
          {
            f: '<b>Test</b>',
            note: 'an ecosystem service is nature’s free by-product, never a manufactured good.',
          },
        ],
        aids: [
          '<b>Mnemonics:</b> “<b>33 is the gift, 18 is the GNP.</b>”',
          '“<b>Soil takes half</b>”: soil formation ≈ 50% of the valued services.',
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 692–694 ─────────────────────────
  {
    n: 'A',
    title: 'Decomposition: Mechanisms, Detritivores, and Controlling Factors',
    extra: true,
    kalam: 'The C:N ratio of detritus is one of the main controls on decomposition speed.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'These additional topics extend Chapter 12 (Ecosystem) with five topics the chapter touches on but does not develop to examination depth: the organisms, enzymes and C:N ratio behind decomposition, the seral stages of succession in finer detail with more organisms, the steps and microbes of the nitrogen and sulfur cycles, quantitative energy-flow calculations involving ecological efficiencies, and ecosystem-service valuation, with the keystone-species concept that the chapter does not cover. High-difficulty questions can draw on these layers.',
      },
      {
        t: 'p',
        html: 'The chapter names the five steps of decomposition, gives earthworms and termites as detritivores that fragment detritus, and says that decomposers (fungi and bacteria) mineralise it. It does not name the other organisms involved (by genus), which enzymes drive catabolism, or how the carbon-to-nitrogen (C:N) ratio of detritus governs the rate. These are distinct, testable details that NEET and CUET often examine (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Identifying the workers.</b> Fragmentation is performed by detritivores, mainly earthworms (e.g., <i>Pheretima</i>), termites, and soil arthropods (mites, collembola). Decomposition (catabolism and mineralisation) is performed by fungi (e.g., <i>Trichoderma</i>, <i>Penicillium</i>) and bacteria (e.g., <i>Bacillus</i>, <i>Pseudomonas</i>). Both groups feed on dead organic matter; the distinction is physical versus chemical breakdown.',
      },
      {
        t: 'p',
        html: '<b>Tracing catabolism.</b> Fungi secrete extracellular enzymes: cellulase breaks cellulose, ligninase breaks lignin, and proteases break proteins. Bacteria secrete similar enzymes and work faster under moist, aerobic conditions. Catabolism gives simpler organic compounds, and mineralisation then releases CO<sub>2</sub>, water, and simple inorganic ions (NH<sub>4</sub><sup>+</sup>, PO<sub>4</sub><sup>3−</sup>, SO<sub>4</sub><sup>2−</sup>).',
      },
      {
        t: 'p',
        html: '<b>C:N ratio as rate controller.</b> The C:N ratio of detritus is one of the main controls on decomposition speed. Detritus with a C:N ratio of 25–30 ∶ 1 decomposes optimally; ratios above 80 ∶ 1 (e.g., woody stems, straw) decompose slowly because decomposers must scavenge nitrogen from the soil. Below 25 ∶ 1 (e.g., animal tissue, legume residues), decomposition is rapid.',
      },
      {
        t: 'table',
        title: 'C:N bands (the book’s bands are approximate and are not in NCERT)',
        head: ['C:N ratio', 'Decomposition rate', 'Example'],
        rows: [
          ['<25 ∶ 1', 'Fast', 'Animal remains, legume litter'],
          ['25–30 ∶ 1', 'Optimal (fast and balanced: no nitrogen drawn from the soil)', 'Balanced mix of green and brown waste'],
          ['30–80 ∶ 1', 'Moderate', 'Most leaf litter'],
          ['>80 ∶ 1', 'Slow', 'Straw, woody twigs, sawdust'],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Identifying Decomposers and Their Functions.</b> Name one detritivore and one decomposer fungus involved in decomposition. State one function of each.',
        steps: [
          'A detritivore such as the earthworm (<i>Pheretima</i>) physically fragments dead organic matter, increasing surface area for microbial action. A decomposer fungus such as <i>Trichoderma</i> secretes extracellular cellulase and other hydrolytic enzymes that chemically break down cellulose into simpler organic compounds, which are later mineralised.',
        ],
        ans: 'Detritivore: earthworm (<i>Pheretima</i>); decomposer fungus: <i>Trichoderma</i>. Earthworm fragments; <i>Trichoderma</i> secretes cellulase.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Effect of C:N Ratio on Decomposition Rate.</b> Two piles of organic waste are composted. Pile X has a C:N ratio of 90 ∶ 1 (wheat straw); Pile Y has a C:N ratio of 25 ∶ 1 (green legume residue). Which pile will decompose faster, and why?',
        steps: [
          'A C:N ratio of 25 ∶ 1 lies at the optimal end of the range (25–30 ∶ 1) for microbial activity. Pile X at 90 ∶ 1 is nitrogen-poor; decomposing microbes must immobilize nitrogen from the surrounding soil, slowing their growth and the decomposition rate. Pile Y, being nitrogen-rich, supports rapid microbial colonization and enzyme secretion.',
        ],
        ans: 'Pile Y decomposes faster due to its optimal C:N ratio of 25 ∶ 1, which supports efficient microbial activity.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Effect of Temperature and Moisture.</b> Decomposition in a tropical rainforest is faster than in a temperate deciduous forest in winter. Explain this in terms of temperature and moisture, and state which step of decomposition is most affected.',
        steps: [
          'Higher temperature (25–35°C range in the tropics versus near-freezing in temperate winter) increases enzymatic reaction rates according to the <i>Q</i><sub>10</sub> principle. Higher soil moisture in the rainforest (moist but well-aerated soil) supports a larger and more active microbial biomass. The catabolism step (enzymatic degradation by fungi and bacteria) is most affected because enzyme activity and microbial growth both depend on temperature and moisture.',
        ],
        ans: 'Tropical conditions (warmth + moisture) accelerate enzymatic catabolism; the temperate winter’s near-freezing temperatures slow microbial enzyme activity, decelerating catabolism most severely.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Distinguish between a detritivore and a decomposer, giving one example of each.',
            a: 'Detritivore physically fragments detritus (e.g., earthworm <i>Pheretima</i>); decomposer chemically breaks it down via secreted enzymes (e.g., fungus <i>Trichoderma</i>).',
          },
          {
            q: '[CUET] State the optimal C:N ratio for rapid decomposition and explain what happens when the ratio exceeds 80 ∶ 1.',
            a: 'Optimal C:N = 25–30 ∶ 1. Above 80 ∶ 1, microbes immobilize soil nitrogen for their own protein synthesis, leaving insufficient nitrogen for rapid growth: decomposition slows.',
          },
          {
            q: '[NEET] Name the enzyme secreted by fungi to break down (a) cellulose and (b) lignin.',
            a: '(a) Cellulase; (b) Ligninase (or laccase).',
          },
          {
            q: '[CUET] Explain why decomposition is slower in waterlogged anaerobic soils.',
            a: 'Decomposition is largely an oxygen-requiring (aerobic) process; waterlogged soils lack oxygen, slowing decomposer metabolism. Anaerobic conditions also produce methane and sulfides rather than CO<sub>2</sub> and minerals.',
          },
          {
            q: '[NEET] In which type of ecosystem is decomposition fastest, and which climatic factors control this rate?',
            a: 'Tropical rainforest; controlled by temperature (warm = faster) and soil moisture (moist but aerated = faster).',
          },
          {
            q: '[NEET High-Difficulty] A pile of organic waste with a C:N ratio of 90 ∶ 1 decomposes slowly. After several weeks of composting with kitchen waste (C:N ~15 ∶ 1), the ratio falls to 30 ∶ 1 and decomposition accelerates. Explain this in terms of microbial nitrogen immobilization.',
            a: 'At 90 ∶ 1, microbes must scavenge nitrogen from soil to build biomass, limiting their population. Adding kitchen waste (low C:N ~15 ∶ 1) raises the overall nitrogen content, bringing the ratio toward 30 ∶ 1, where sufficient nitrogen is available for active microbial growth and rapid decomposition.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 694–697 ─────────────────────────
  {
    n: 'B',
    title: 'Succession: Complete Seral Stages and Specific Pioneer Organisms',
    extra: true,
    kalam: 'Each seral stage modifies the habitat in a way that makes room for the next.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter defines primary and secondary succession, names the pioneer community, gives the main seral stages with example organisms, and states that both hydrarch and xerarch routes lead to a mesic climax. It does not give every seral stage and organism in full, or define nudation, ecesis and reaction as separate terms. NEET and CUET questions often ask for these precise sequences (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Xerarch (rock) primary succession: seven steps from bare rock to climax',
        steps: [
          '<b>Bare rock</b>: no soil, no water retention.',
          '<b>Crustose lichens</b> (pioneer community): e.g., <i>Rhizocarpon geographicum</i>, <i>Rinodina</i> spp. They secrete organic acids, weather the rock surface, and trap dust particles, beginning soil formation.',
          '<b>Foliose lichens</b>: e.g., <i>Parmelia</i>, <i>Dermatocarpon</i> spp. They spread over the thin soil, add more organic matter, and improve water retention.',
          '<b>Mosses</b>: e.g., <i>Polytrichum</i>, <i>Grimmia</i> spp. They anchor in the developing soil and accelerate its deepening.',
          '<b>Herbs and grasses</b>: annual herbs and grasses first, then perennials. They shade out lichens and mosses, add substantial leaf litter, and further enrich the soil.',
          '<b>Shrubs</b>: e.g., <i>Rhus</i>, <i>Ziziphus</i> spp. They establish in the deeper soil and form the first woody cover.',
          '<b>Climax forest</b>: e.g., <i>Quercus</i> (oak), <i>Betula</i> (birch) in temperate regions; tropical forests reach complex climax with diverse canopy species.',
        ],
      },
      {
        t: 'proc',
        title: 'Hydrarch (water) primary succession: six seral stages',
        steps: [
          '<b>Phytoplankton</b> (pioneer community): diatoms (<i>Navicula</i>), green algae (<i>Chlorella</i>), cyanobacteria (<i>Anabaena</i>).',
          '<b>Submerged rooted plants</b>: e.g., <i>Hydrilla</i>, <i>Vallisneria</i>, <i>Potamogeton</i>.',
          '<b>Free-floating and rooted floating plants</b>: e.g., <i>Wolffia</i>, <i>Lemna</i>, <i>Azolla</i>; <i>Nymphaea</i>, <i>Trapa</i>.',
          '<b>Reed-swamp plants</b>: e.g., <i>Typha</i>, <i>Phragmites</i>, <i>Sagittaria</i>; begin filling the basin with organic matter.',
          '<b>Marsh-meadow and mesic herb/shrub communities</b>: sedges and rushes (e.g., <i>Carex</i>, <i>Juncus</i>) and then shrubs that can tolerate fluctuating moisture.',
          '<b>Climax forest</b>: terrestrial forest reaching the climatic climax.',
        ],
      },
      {
        t: 'p',
        html: '<b>Why each stage follows the previous.</b> Each seral stage modifies the habitat (adds soil, organic matter, shade, moisture) in ways that make it more suitable for the next community and less suitable for itself. This directional change (the modification of the habitat by each community, called <b>reaction</b>) is the engine driving succession.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE',
        q: '<b>Sequence of Xerarch Succession.</b> Arrange the following in correct order of a xerarch primary succession on bare rock: foliose lichens, crustose lichens, shrubs, herbs, mosses, bare rock.',
        steps: [
          'Correct order: bare rock → crustose lichens → foliose lichens → mosses → herbs → shrubs → climax forest. The crustose lichens are the pioneer community; shrubs represent the late seral stage just before the climax.',
        ],
        ans: 'Bare rock → crustose lichens → foliose lichens → mosses → herbs → shrubs → climax.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Pioneer Community in Hydrarch Succession.</b> In an open-water pond undergoing hydrarch succession, name the pioneer community and state the first group of plants that replace it.',
        steps: [
          'The pioneer community is phytoplankton: single-celled algae such as diatoms and green algae. The first plants to replace them are submerged rooted plants such as <i>Hydrilla</i> and <i>Vallisneria</i>, which require some soil substrate for root anchorage.',
        ],
        ans: 'Pioneer: phytoplankton (diatoms, green algae); replaced by: submerged rooted plants (<i>Hydrilla</i>, <i>Vallisneria</i>).',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Comparing Primary and Secondary Succession Rates.</b> Why does secondary succession reach the climax community faster than primary succession?',
        steps: [
          'Secondary succession begins on a site where soil and some seeds or propagules already exist: the burned forest floor or abandoned farmland retains a seed bank, root stocks, and accumulated nutrients. Primary succession must build these from scratch: lichens weather bare rock, mosses deepen the thin soil, and herbs and shrubs gradually construct a habitable medium. This makes primary succession much slower, often requiring centuries to thousands of years to reach the climax.',
        ],
        ans: 'Secondary succession is faster because soil, seeds, and nutrients already exist; primary must build these from zero, beginning with pioneer lichens on bare rock.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Distinguishing Nudation, Ecesis, and Reaction.</b> Define the terms nudation, ecesis, and reaction as processes in ecological succession. Give one example each.',
        steps: [
          '<b>Nudation:</b> the initial removal or destruction of the existing community, creating bare ground. Example: a volcanic eruption that deposits fresh lava, clearing all life.',
          '<b>Ecesis:</b> the establishment and growth of the first colonisers on the bare site. Example: crustose lichens landing on the cooled lava and beginning weathering.',
          '<b>Reaction:</b> the modification of the habitat by each successive community, making conditions better for the next and worse for itself. Example: mosses trapping moisture and organic matter, creating enough soil for herbs to establish.',
        ],
        ans: 'Nudation = bare ground creation (volcanic eruption); Ecesis = first colonisation (lichens on lava); Reaction = habitat modification by each seral stage (mosses building soil for herbs).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the pioneer community in a xerarch primary succession and state one function it performs on bare rock.',
            a: 'Pioneer community: crustose lichens (e.g., <i>Rhizocarpon geographicum</i>). Function: secrete organic acids that weather the rock surface, beginning soil formation.',
          },
          {
            q: '[CUET] Arrange in correct sequence: submerged rooted plants, phytoplankton, reed-swamp plants, climax forest, free-floating plants.',
            a: 'Phytoplankton → submerged rooted plants → free-floating plants → reed-swamp plants → climax forest (the marsh-meadow and mesic herb/shrub stages, which the question does not list, come between reed-swamp and climax).',
          },
          {
            q: '[NEET] Give one difference between primary and secondary succession in terms of (a) starting conditions and (b) speed to climax.',
            a: '(a) Primary begins on bare rock/lava with no soil; secondary begins where soil and a seed bank already exist. (b) Primary is very slow (centuries to thousands of years); secondary is faster (decades to a century).',
          },
          {
            q: '[CUET] State the scientific names of two crustose lichens and one foliose lichen involved in xerarch succession.',
            a: 'Crustose: <i>Rhizocarpon geographicum</i>, <i>Rinodina</i> spp. Foliose: <i>Parmelia</i> spp.',
          },
          {
            q: '[NEET] Differentiate between hydrarch and xerarch succession in terms of habitat and pioneer community, and state the kind of community both finally reach.',
            a: 'Hydrarch succession begins in water (pioneer community: phytoplankton) and proceeds from hydric to mesic conditions; xerarch succession begins on bare, dry rock (pioneer community: crustose lichens) and proceeds from xeric to mesic conditions. Both end in a mesic climax community, the climatic climax.',
          },
          {
            q: '[NEET High-Difficulty] A deforested hillside is left undisturbed for 50 years. Describe the expected seral stages from the first colonisers to the near-climax community.',
            a: 'This is secondary succession on soil that already holds a seed bank. Expect: bare soil → pioneer annual herbs and grasses → perennial herbs and shrubs → fast-growing, light-demanding trees → shade-tolerant trees of the climax forest. Fifty years brings the community well along this sequence, but a mature climax forest usually takes longer.',
          },
        ],
      },
    ],
  },
];
