import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 13 (Plant Growth and Development), Topics 01 and 02:
 * pp. 765 to 782 of the Class 11 Biology Master Reference, word for word.
 * The chapter title and contents (top of p. 765) are not copied. Topic 01,
 * Growth Phases & Differentiation (pp. 765-774), and Topic 02, Plant Growth
 * Regulators (pp. 775-782), are each cut at the book’s Sections 1 to 8.
 * Figures 13.1 (caption p. 768, drawn p. 769), 13.2 (caption p. 770, drawn
 * p. 771) and 13.3 (caption p. 776, drawn p. 777) are redrawn in
 * lib/diagrams/biology-11-13.ts; these pages draw nothing else.
 * Scientific names are italic; emphasis italics are dropped; italic run-in
 * labels (Natural:, Effects:, Why this matters:) are bold, as in the other
 * chapters. The em dash is replaced throughout (colon, comma or bracket).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 765–774 ─────────────────────────
  {
    n: '01',
    title: 'Growth Phases & Differentiation',
    kalam:
      'Growth is simply a permanent, irreversible increase in the size of an organ, a part, or even a single cell.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is foundational, dependable territory. <b>CBSE Boards</b> ask 1–2 mark definitions (growth, differentiation, dedifferentiation, redifferentiation) and short numericals on growth rate. <b>CUET</b> picks up direct fact-recall MCQs (efficiency index, plasticity examples). <b>NEET</b> almost every year (the book’s estimate from past papers, not official figures) hides one trap here, usually the absolute-vs-relative growth rate comparison, the developmental sequence order, or matching de-/re-differentiation to the right tissue. The toughest <b>NEET assertion-reason</b> items exploit the “open differentiation” idea.',
      },
      {
        t: 'p',
        html: 'Imagine a small kirana shop that never stops adding shelves. A supermarket is built once and is “finished”: its size is fixed the day it opens. The kirana shop is different: as long as the owner has energy and space, he keeps bolting on one more shelf, one more counter, year after year. A plant is that kirana shop. Unlike you and me, who stop getting taller in our late teens, a plant keeps the ability to grow throughout its life. This is the single most important idea in the whole chapter, so hold on to it.',
      },
      {
        t: 'p',
        html: '<b>Growth</b> is simply a permanent, irreversible increase in the size of an organ, a part, or even a single cell. The key word is irreversible: when you blow up a balloon it gets bigger, but let the air out and it shrinks back. That is not growth. When a plant cell takes in water, lays down new wall material and new protoplasm, that increase stays. Growth always rides on top of busy metabolic activity (building molecules up and breaking them down), and all of that runs at the expense of energy.',
      },
      {
        t: 'p',
        html: 'What makes plant growth special is where it happens and how long it lasts. Plants keep small pockets of forever-young, dividing cells called <b>meristems</b> tucked away at specific locations: the tips of roots and shoots, and rings inside the stem. Because these factories of new cells keep dividing, plant growth is described as <b>open</b> (it can keep going), <b>indeterminate</b> (there is no fixed final size), <b>intrinsic</b> (driven from within), and <b>localized</b> (restricted to the meristems, not happening everywhere at once). Most higher animals grow all over and then stop; a plant grows from a few hotspots and, in principle, never stops.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a railway track being laid across the country. The completed track behind the work-crew is the mature, differentiated part of the plant: fixed, doing its job. The work-crew at the very front, hammering down fresh rails, is the meristem. The track does not lengthen everywhere at once; it grows only at the moving front. That moving front is exactly what a root tip or shoot tip is doing every single day.',
      },
      {
        t: 'p',
        html: 'Once new cells are born at the meristem, they do not all become the same thing. Some become water-pipes, some become food-pipes, some become protective skin. This sculpting of identical baby cells into specialised, different cell types is <b>differentiation</b>, and crucially, in plants this process is “open”: two cells born from the same meristem can end up looking and behaving completely differently, depending on where they sit and what the environment demands.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Two cautions. First, the tidy mathematical “growth curves” you will meet in the Key definitions, quantitative measures and growth kinetics part assume steady supply of water, oxygen, nutrients and a friendly temperature; starve the plant and the curve flattens early. Second, “indeterminate” is the general rule, not an absolute law: leaves, flowers and fruits have <b>determinate</b> (limited) growth and stop at a set size, even though the plant as a whole keeps going. Do not over-apply the slogan.',
      },

      { t: 'part', title: 'Key definitions, quantitative measures and growth kinetics' },
      {
        t: 'p',
        html: '(Physiology fork: formulas where they exist; biology carries no dimensional formulae.)',
      },
      { t: 'p', html: '<b>Core definitions</b>' },
      {
        t: 'def',
        term: 'Growth',
        html: 'permanent (irreversible) increase in size of an organ, part, or cell, accompanied by metabolism at the expense of energy.',
      },
      {
        t: 'def',
        term: 'Differentiation',
        html: 'the qualitative structural and physiological changes that cells derived from apical meristems and cambium undergo to perform specific functions.',
      },
      {
        t: 'def',
        term: 'Dedifferentiation',
        html: 'the regaining of the capacity to divide by living, already-differentiated cells.',
      },
      {
        t: 'def',
        term: 'Redifferentiation',
        html: 'the loss of dividing capacity again by dedifferentiated cells as they mature into a specific function.',
      },
      {
        t: 'def',
        term: 'Development',
        html: 'the sum of growth and differentiation: every change from seed germination to senescence.',
      },
      {
        t: 'def',
        term: 'Plasticity',
        html: 'the ability of plants to follow different developmental pathways and form different structures in response to environment or life-phase.',
      },
      {
        t: 'def',
        term: 'Efficiency index',
        html: 'the relative growth rate <i>r</i>, a measure of the plant’s ability to produce new plant material.',
      },
      { t: 'p', html: '<b>Quantitative measures of growth rate</b>' },
      {
        t: 'p',
        html: 'Arithmetic growth (only one daughter cell keeps dividing after each mitosis; the other matures):',
      },
      {
        t: 'formula',
        kicker: 'Arithmetic growth',
        main: '<i>L</i><sub><i>t</i></sub> = <i>L</i><sub>0</sub> + <i>rt</i>',
        legend: [
          '<i>L</i><sub><i>t</i></sub> = size at time <i>t</i>',
          '<i>L</i><sub>0</sub> = initial size',
          '<i>r</i> = growth rate',
        ],
        note: 'A plot of size against time is a <b>straight line</b>.',
      },
      {
        t: 'p',
        html: 'Geometric / exponential growth (both daughter cells keep dividing):',
      },
      {
        t: 'formula',
        kicker: 'Geometric (exponential) growth',
        main: '<i>W</i><sub>1</sub> = <i>W</i><sub>0</sub> <i>e</i><sup><i>rt</i></sup>',
        legend: [
          '<i>W</i><sub>1</sub> = final size/mass',
          '<i>W</i><sub>0</sub> = initial size/mass',
          '<i>r</i> = relative growth rate (the <b>efficiency index</b>)',
          '<i>t</i> = the time',
          '<i>e</i> ≈ 2.718',
        ],
        note: 'In the real world, limited resources bend this into an <b>S-shaped (sigmoid) curve</b>.',
      },
      { t: 'p', html: 'Absolute Growth Rate: total increase in size per unit time:' },
      {
        t: 'formula',
        kicker: 'Absolute growth rate (AGR)',
        main: 'AGR = <frac><num><i>W</i><sub>2</sub> − <i>W</i><sub>1</sub></num><den><i>t</i><sub>2</sub> − <i>t</i><sub>1</sub></den></frac>',
        legend: [
          '<i>W</i><sub>1</sub> = size at time <i>t</i><sub>1</sub>',
          '<i>W</i><sub>2</sub> = size at time <i>t</i><sub>2</sub>',
          '<i>t</i><sub>2</sub> − <i>t</i><sub>1</sub> = the time interval',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Relative Growth Rate: increase per unit time expressed per unit initial size (often as a percentage):',
      },
      {
        t: 'formula',
        kicker: 'Relative growth rate (RGR)',
        main: 'RGR = <frac><num><i>W</i><sub>2</sub> − <i>W</i><sub>1</sub></num><den><i>W</i><sub>1</sub> (<i>t</i><sub>2</sub> − <i>t</i><sub>1</sub>)</den></frac> × 100%',
        legend: [
          '<i>W</i><sub>1</sub> = size at time <i>t</i><sub>1</sub> (the starting size)',
          '<i>W</i><sub>2</sub> = size at time <i>t</i><sub>2</sub>',
          '<i>t</i><sub>2</sub> − <i>t</i><sub>1</sub> = the time interval',
          'This ratio form is the average relative increase per unit time over the interval. It is not the continuous rate <i>r</i> (the efficiency index) of <i>W</i><sub>1</sub> = <i>W</i><sub>0</sub> <i>e</i><sup><i>rt</i></sup>; the two agree only for small changes.',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Units.</b> Growth is measured by increase in length, area, volume, fresh/dry mass, or cell number, so its units depend on the parameter chosen (e.g. cm, cm<sup>2</sup>, g, or cell count). Growth rate therefore carries units such as cm day<sup>−1</sup> or g day<sup>−1</sup>; RGR is a ratio of sizes divided by a time, so it has the unit time<sup>−1</sup> (reported as % per unit time). There are no dimensional formulae in biology: do not invent any.',
      },

      { t: 'part', title: 'Key processes and logical framework' },
      {
        t: 'p',
        html: '<b>A. The developmental journey of a single cell.</b> Every cell follows the same ordered pipeline (note the order: NEET loves to scramble it):',
      },
      {
        t: 'p',
        html: 'Cell division → Enlargement → Differentiation → Maturation → Senescence',
      },
      {
        t: 'p',
        html: 'First the meristematic cell divides (formation of fresh protoplasm = plasmatic/protoplasmic growth). The young cell then expands by vacuolation and water uptake. Next it <b>differentiates</b>, modifying its cell wall and protoplasm to do a specific job. It matures, ages (senescence), and finally dies. Reasoning behind the order: a cell cannot specialise before it exists (division first) and cannot age before it has matured (senescence last). This chain is the life of a single cell; the three phases of growth in the next part (meristematic, elongation, maturation) are the same story read along a root tip, with differentiation happening in the maturation phase.',
      },
      {
        t: 'p',
        html: '<b>B. The three phases of growth along a root tip.</b> Walking back from the very tip of a root you pass, in order: the <b>meristematic zone</b> (small cells, dense protoplasm, thin primary walls, dividing constantly); the <b>elongation zone</b> (cells enlarge and vacuolate: this is where most visible lengthening happens); and the <b>maturation zone</b> (cells reach final size, thicken/modify their walls, and differentiate into specific tissues). Why this spatial order? Because a cell pushed away from the dividing tip ages as it travels, so distance from the tip is really a timeline of the cell’s life.',
      },
      {
        t: 'p',
        html: '<b>C. Arithmetic vs geometric growth: the logic.</b> After a cell divides, what the daughters do decides the growth pattern:<br>• If <b>only one</b> daughter keeps dividing and the other matures, the number of dividing cells stays constant: output rises by a fixed amount each cycle → <b>arithmetic (linear)</b> growth, <i>L</i><sub><i>t</i></sub> = <i>L</i><sub>0</sub> + <i>rt</i>.<br>• If <b>both</b> daughters keep dividing, the dividing population doubles each cycle → <b>geometric (exponential)</b> growth, <i>W</i><sub>1</sub> = <i>W</i><sub>0</sub><i>e</i><sup><i>rt</i></sup>. Because resources eventually run short, the exponential phase cannot last forever, producing the sigmoid curve with a slow <b>lag phase</b>, a rapid <b>log (exponential) phase</b>, a <b>phase of diminishing growth</b>, and a flat <b>stationary phase</b>. While resources are unlimited the log phase is a true exponential (J-shaped); limited resources are what flatten the whole-life curve into the S-shape.',
      },
      { t: 'fig', id: 'b11-13-fig-13.1' },
      {
        t: 'p',
        html: '<b>D. The differentiation cycle.</b> (Why each step happens, not just the names.)<br>• <b>Differentiation:</b> a meristem-derived cell commits to a function by changing its wall and protoplasm. Classic case: a cell destined to become a tracheary element (water-conducting) <b>loses its protoplasm entirely</b> and builds a strong, elastic, lignified secondary wall. The protoplasm goes because a water pipe works best as a hollow, dead, reinforced tube.<br>• <b>Dedifferentiation:</b> a living mature cell that had stopped dividing switches division back on. This is how new meristems appear mid-life, e.g. mature parenchyma between vascular bundles becomes meristematic to form the <b>interfascicular cambium</b>, and mature cells form the <b>cork cambium (phellogen)</b>.<br>• <b>Redifferentiation:</b> the products of those dedifferentiated meristems divide and then again lose the power to divide, maturing into specific tissues, e.g. <b>secondary xylem, secondary phloem, cork (phellem)</b> and <b>secondary cortex (phelloderm)</b>.',
      },
      { t: 'fig', id: 'b11-13-fig-13.2' },
      {
        t: 'p',
        html: '<b>E. Conditions required for growth.</b> Water (turgidity for cell extension; provides the medium for enzyme activity), oxygen (releases the metabolic energy growth needs), nutrients, macro and micro (raw material for protoplasm synthesis and an energy source), an optimum temperature, and, for the right tissues, light and gravity as directional cues.',
      },
      {
        t: 'p',
        html: '<b>F. Plasticity and its two faces of heterophylly.</b> Open differentiation gives plants <b>plasticity</b>: the freedom to take different developmental routes and build different structures depending on circumstances. The most visible expression is <b>heterophylly</b> (different leaf forms on the same plant), and exams split it two ways. <b>Developmental heterophylly</b> depends on the plant’s age/phase: cotton, coriander and larkspur carry one leaf shape when juvenile and a different shape at maturity, with no change in surroundings. <b>Environmental heterophylly</b> depends on the surroundings: an aquatic buttercup (<i>Ranunculus</i>) produces finely dissected, thread-like submerged leaves but broad, lobed aerial leaves on the very same individual: same genotype, two leaf forms dictated by water versus air. The logic to remember: plasticity is why a single set of genes can yield more than one structure, and the trigger (life-phase vs environment) is what separates the two heterophylly types.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'A bamboo internode measures 3.0 cm at the start of observation and 11.0 cm after 4 days. Calculate (i) its absolute growth rate and (ii) its relative growth rate.',
        steps: [
          'Given: <i>W</i><sub>1</sub> = 3.0 cm, <i>W</i><sub>2</sub> = 11.0 cm, Δ<i>t</i> = 4 days.',
          '(i) AGR = <frac><num><i>W</i><sub>2</sub> − <i>W</i><sub>1</sub></num><den>Δ<i>t</i></den></frac> = <frac><num>11.0 − 3.0</num><den>4</den></frac> = <frac><num>8.0</num><den>4</den></frac>',
          '(ii) RGR = <frac><num><i>W</i><sub>2</sub> − <i>W</i><sub>1</sub></num><den><i>W</i><sub>1</sub> Δ<i>t</i></den></frac> × 100 = <frac><num>8.0</num><den>3.0 × 4</den></frac> × 100 = <frac><num>8.0</num><den>12.0</den></frac> × 100',
        ],
        ans: 'AGR = 2.0 cm day<sup>−1</sup>; RGR ≈ 66.7% per day. (Always close with units: AGR carries length/time, RGR is a percentage.) (66.7% is the average relative increase per day over the interval. The exact continuous rate <i>r</i> in <i>W</i><sub>1</sub> = <i>W</i><sub>0</sub> <i>e</i><sup><i>rt</i></sup> is <frac><num>ln(<frac><num>11</num><den>3</den></frac>)</num><den>4</den></frac>, about 32.5% per day. The two agree only for small changes. NEET problems that give the ratio formula expect 66.7%.)',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: 'Identify the process: “Mature parenchyma cells lying between the vascular bundles regain the capacity to divide and give rise to the interfascicular cambium.” Then name the process by which this cambium later produces secondary xylem.',
        steps: [
          '<b>Step 1:</b> A living, already-mature cell switching division back on is <b>dedifferentiation</b>.',
          '<b>Step 2:</b> The cambium’s products then divide and re-lose the ability to divide as they mature into secondary xylem: this is <b>redifferentiation</b>.',
        ],
        ans: 'Dedifferentiation, then redifferentiation. (Memory hook: <b>de</b> = “back to dividing”, <b>re</b> = “retired again”.)',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'Leaf P grows from 4 cm to 8 cm; leaf Q grows from 40 cm to 44 cm, both over the same period. A student says “they grew equally.” Evaluate using AGR and RGR.',
        steps: [
          'AGR<sub><i>P</i></sub> = 8 − 4 = 4; AGR<sub><i>Q</i></sub> = 44 − 40 = 4 → <b>absolute</b> growth is indeed equal. RGR<sub><i>P</i></sub> = <frac><num>4</num><den>4</den></frac> × 100 = 100%; RGR<sub><i>Q</i></sub> = <frac><num>4</num><den>40</den></frac> × 100 = 10%.',
          'So on an absolute basis they grew equally, but <b>relative</b> to their starting size, leaf P grew ten times faster. The student is only half right.',
        ],
        ans: 'Equal AGR, very different RGR (100% vs 10%). This AGR-vs-RGR mismatch is a classic NEET trap in this topic.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: 'Assertion (A): In plants, two cells produced by the very same meristem can mature into structurally different cell types. Reason (R): Plant differentiation is “open”, so the final structure depends on the cell’s position and on environmental signals rather than being fixed at birth. Options: <b>(1)</b> Both A and R true, R is the correct explanation of A. <b>(2)</b> Both true, R not the correct explanation. <b>(3)</b> A true, R false. <b>(4)</b> A false, R true.',
        steps: [
          'A is true: it is the defining feature of plant differentiation. R is true and it is precisely why A holds: because differentiation is open (not pre-programmed), position and environment steer each cell’s fate, so siblings can diverge. R explains A.',
        ],
        ans: 'Option (1). (Trap: students who memorise “open differentiation” as a label but never connect it to cause downgrade this to option (2).)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define growth and state any two features that make plant growth differ from growth in animals.',
            a: 'Permanent irreversible size increase; plant growth is open/indeterminate and localized to meristems (in most higher animals growth is limited and diffuse).',
          },
          {
            q: '[CUET] Name the phenomenon shown by cotton, coriander and larkspur in which juvenile and mature leaves differ in shape, and state the broader property of plants it illustrates.',
            a: '(Developmental) heterophylly; illustrates plasticity.',
          },
          {
            q: '[NEET] A seedling root is 6 cm long and elongates by a constant 1.5 cm each day for 5 days. Using <i>L</i><sub><i>t</i></sub> = <i>L</i><sub>0</sub> + <i>rt</i>, find its final length, and state the shape of its length-vs-time graph.',
            a: '<i>L</i><sub>5</sub> = 6 + 1.5 × 5 = 13.5 cm; a straight line (arithmetic growth).',
          },
          {
            q: '[NEET] Arrange in correct developmental order: maturation, cell division, senescence, differentiation, cell enlargement.',
            a: 'Cell division → cell enlargement → differentiation → maturation → senescence.',
          },
          {
            q: '[NEET High-Difficulty] Explain why a tracheary element is considered a product of differentiation even though it ends up dead, and classify cork (phellem) as a product of differentiation, dedifferentiation or redifferentiation with justification.',
            a: 'It undergoes major, permanent structural change (loss of protoplasm, lignified secondary wall) to perform a specific function: that is differentiation, regardless of the final living state; cork is a product of <b>redifferentiation</b> (cork cambium itself arose by dedifferentiation, then redifferentiated into cork).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In the expression <i>W</i><sub>1</sub> = <i>W</i><sub>0</sub> <i>e</i><sup><i>rt</i></sup>, the quantity <i>r</i> is best described as the:',
        opts: [
          { label: 'absolute growth rate', nudge: '<b>(a)</b> AGR is total growth per unit time, not the exponent <i>r</i>.' },
          { label: 'relative growth rate and efficiency index', nudge: null },
          {
            label: 'total biomass',
            nudge: '<b>(c)</b> <i>W</i><sub>1</sub>/<i>W</i><sub>0</sub> are biomass; <i>r</i> is a rate, picked by students who confuse the symbols.',
          },
          {
            label: 'time constant of senescence',
            nudge: '<b>(d)</b> Invented term: a distractor that sounds plausible if you don’t know the formula.',
          },
        ],
        correct: 1,
        solution: '<i>r</i> is the relative growth rate, also called the efficiency index: the plant’s ability to produce new material per unit existing material.',
      },
      {
        t: 'mcq',
        q: 'After mitosis, only one daughter cell continues to divide while the other matures. The resulting growth pattern and graph are:',
        opts: [
          { label: 'geometric; sigmoid', nudge: '<b>(a), (c)</b> assume both daughters divide (that is the geometric case).' },
          { label: 'arithmetic; linear', nudge: null },
          { label: 'geometric; linear', nudge: '<b>(a), (c)</b> assume both daughters divide (that is the geometric case).' },
          {
            label: 'arithmetic; sigmoid',
            nudge: '<b>(d)</b> mixes the right pattern with the wrong graph, chosen by students who memorise “arithmetic” but forget it is linear, not S-shaped.',
          },
        ],
        correct: 1,
        solution: 'A constant dividing population adds a fixed amount each cycle → arithmetic growth → a straight line.',
      },
      {
        t: 'mcq',
        q: 'The formation of interfascicular cambium from mature parenchyma is an example of:',
        opts: [
          { label: 'differentiation', nudge: '<b>(a)</b> differentiation moves towards a fixed function, the opposite direction.' },
          {
            label: 'redifferentiation',
            nudge: '<b>(b)</b> redifferentiation is the next step (the cambium’s products maturing again): a classic one-step-off trap.',
          },
          { label: 'dedifferentiation', nudge: null },
          { label: 'senescence', nudge: '<b>(d)</b> senescence is ageing, unrelated.' },
        ],
        correct: 2,
        solution: 'A mature living cell regaining division capacity is dedifferentiation.',
      },
      {
        t: 'mcq',
        q: 'Which statement about plant differentiation is correct?',
        opts: [
          {
            label: 'It is closed, so a meristem’s cells all mature identically.',
            nudge: '<b>(a)</b> describes closed differentiation (more animal-like): the exact opposite, hence a strong distractor.',
          },
          { label: 'It is open, so cells of common origin may form different structures depending on position and environment.', nudge: null },
          {
            label: 'It reverses growth.',
            nudge: '<b>(c)</b> confuses differentiation with something reversible; differentiation is a maturation step.',
          },
          { label: 'It occurs only in animals.', nudge: '<b>(d)</b> factually wrong.' },
        ],
        correct: 1,
        solution: 'Open differentiation is the hallmark of plants.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>AGR ≠ RGR.</b> The deadliest trap: two organs with identical absolute growth can have wildly different relative growth. Whenever a question gives two initial sizes, expect the RGR comparison.',
          '<b>Scrambled developmental order.</b> Students flip “differentiation” and “maturation”, or push “senescence” too early. Lock the chain: divide → enlarge → differentiate → mature → senesce → die.',
          '<b>De- vs re-differentiation mix-up.</b> Dedifferentiation restores division (makes a meristem); redifferentiation removes it again (makes a final tissue). The cambium is born by dedifferentiation and yields tissues by redifferentiation: one process for each direction.',
          '<b>Calling all plant growth “indeterminate”.</b> Leaves, flowers and fruits are determinate. Don’t over-generalise.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For AGR/RGR questions, don’t compute decimals first. Glance at the initial sizes: the organ that starts smaller will always win on RGR even when AGR is equal. That instant ratio-sense lets you eliminate two options before touching a calculator.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Growth</b> = permanent, irreversible size increase; plant growth is <b>open, indeterminate, intrinsic, localized</b> (meristems).',
            note: '',
          },
          {
            f: '<b>Arithmetic</b>',
            note: '<i>L</i><sub><i>t</i></sub> = <i>L</i><sub>0</sub> + <i>rt</i> → straight line (one daughter divides).',
          },
          {
            f: '<b>Geometric</b>',
            note: '<i>W</i><sub>1</sub> = <i>W</i><sub>0</sub> <i>e</i><sup><i>rt</i></sup> → sigmoid in nature (both daughters divide); phases = lag, log, diminishing, stationary.',
          },
          {
            f: '<b>AGR</b> = <frac><num><i>W</i><sub>2</sub> − <i>W</i><sub>1</sub></num><den>Δ<i>t</i></den></frac> (per unit time); <b>RGR</b> = <frac><num><i>W</i><sub>2</sub> − <i>W</i><sub>1</sub></num><den><i>W</i><sub>1</sub> Δ<i>t</i></den></frac> × 100%; <b>efficiency index</b> = <i>r</i>.',
            note: '',
          },
          {
            f: '<b>Differentiation</b> (commit to function) → <b>Dedifferentiation</b> (regain division → cambia) → <b>Redifferentiation</b> (lose division again → secondary xylem, cork).',
            note: '',
          },
          {
            f: '<b>Development</b> = growth + differentiation; <b>plasticity</b> → heterophylly (cotton, coriander, larkspur).',
            note: '',
          },
        ],
        aids: [
          '<b>Order mnemonic:</b> <b>“Di-El-Di-Ma-Se”</b> (<b>Di</b>vision, <b>El</b>ongation, <b>Di</b>fferentiation, <b>Ma</b>turation, <b>Se</b>nescence).',
          '<b>Direction mnemonic:</b> <b>DE = Division Enabled; RE = Retired (division ends) again.</b>',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 775–782 ─────────────────────────
  {
    n: '02',
    title: 'Plant Growth Regulators',
    kalam:
      'Plants run their entire lives on a small set of chemical messengers called plant growth regulators (PGRs), also known as phytohormones.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is a frequently tested topic. <b>CBSE Boards</b> ask 2–3 mark questions on hormone functions and the auxin/gibberellin/cytokinin discovery experiments. <b>CUET</b> loves match-the-column (hormone ↔ function/application). <b>NEET</b> has often asked a PGR question (the book’s estimate from past papers, not official figures): bioassays, the auxin ∶ cytokinin ratio, or “which hormone does X”, making this essential revision.',
      },
      {
        t: 'p',
        html: 'A plant has no brain, no nerves and no muscles. So how does a root know to grow down while the shoot grows up? How does a banana “decide” to ripen, or a tree “decide” to drop its leaves before winter? The answer is chemistry. Plants run their entire lives on a small set of chemical messengers called <b>plant growth regulators (PGRs)</b>, also known as phytohormones. Think of them as text messages: tiny in size, produced in one part of the plant, carried to another, and capable of switching huge processes on or off.',
      },
      {
        t: 'p',
        html: 'Two features make PGRs remarkable. First, they work in astonishingly small amounts: a few molecules can swing the fate of a whole organ. Second, they are <b>chemically diverse</b>: there is no single “hormone formula.” Auxins are indole compounds, gibberellins are terpenes, cytokinins are adenine (purine) derivatives, abscisic acid is a carotenoid derivative, and ethylene is a simple gas. Despite this chemical zoo, biologists sort them into two camps by what they do.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine the plant’s life as a car. The <b>growth promoters</b>, auxins, gibberellins and cytokinins, are the accelerator: they drive cell division, cell enlargement, flowering, fruiting and the breaking of dormancy. The <b>growth inhibitors</b>, abscisic acid (ABA) and, in many of its roles, ethylene, are the brake: they slow things down, enforce dormancy and close stomata (ABA), and trigger ageing (ethylene). A healthy plant is constantly feathering both pedals. Growth is never about one hormone “winning”; it is about the balance and ratio between them at a given place and time.',
      },
      {
        t: 'p',
        html: 'This balance idea is the single most important takeaway. The same tissue, given a high ratio of one hormone to another, will do completely different things, a point we will make precise in the Key processes and logical framework part with the famous auxin-to-cytokinin story.',
      },
      {
        t: 'p',
        html: 'You have probably seen this chemistry at work without realising it. Why does a gardener pinch off the growing tip of a hedge to make it bushy? Because the shoot tip is an auxin factory, and that auxin streaming downward suppresses the side buds, a phenomenon called <b>apical dominance</b>. Remove the tip (decapitation), and you cut off the auxin supply; the freed lateral buds burst into growth, and a single leggy stem becomes a dense, branching hedge. This is exactly the trick used in tea plantations and hedge-making, and it is a perfect illustration of a hormone controlling form by where it is made and which growth it switches off.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Be careful with the “promoter vs inhibitor” labels: they are useful, not absolute. <b>Ethylene</b> is the classic rule-breaker: it promotes fruit ripening, flowering in pineapple, and root-hair growth (promoter-like), yet it also drives senescence and abscission (inhibitor-like). Likewise, a hormone’s effect depends on <b>concentration, tissue type and the presence of other hormones</b>: auxin that promotes shoot growth can inhibit root growth at the same dose. Never quote a hormone’s effect without its context.',
      },
      { t: 'fig', id: 'b11-13-fig-13.3' },

      { t: 'part', title: 'Key definitions and the five regulators' },
      {
        t: 'p',
        html: '(Physiology fork, descriptive variant: PGRs carry no formulae or dimensions.)',
      },
      {
        t: 'def',
        term: 'Plant growth regulator (PGR)',
        html: 'a small organic molecule of diverse chemical composition that, in trace amounts, influences plant growth and development. Two functional groups: <b>promoters</b> (auxins, gibberellins, cytokinins) and <b>inhibitors</b> (abscisic acid; ethylene in its inhibitory roles).',
      },
      {
        t: 'p',
        html: '<b>1. Auxins</b> (indole compounds).<br>• <b>Natural:</b> indole-3-acetic acid (IAA), indole-3-butyric acid (IBA). <b>Synthetic:</b> naphthalene acetic acid (NAA), 2,4-dichlorophenoxyacetic acid (2,4-D), 2,4,5-T. Auxins are transported in a characteristic <b>polar</b> (one-way, shoot-tip towards base) manner.<br>• <b>Effects:</b> cell elongation; <b>apical dominance</b> (suppresses lateral buds); root initiation in stem cuttings; prevents abscission of young leaves and fruits (but promotes the fall of older ones); induces <b>parthenocarpy</b> (seedless fruits, e.g. tomato, using dilute IAA/IBA); promotes xylem differentiation; mediates phototropism. <b>Application:</b> 2,4-D is a selective weedicide against broad-leaved (dicot) weeds.',
      },
      {
        t: 'p',
        html: '<b>2. Gibberellins</b> (terpene-based; the most studied is <b>GA<sub>3</sub></b>).<br>• <b>Nature:</b> acidic.<br>• <b>Effects:</b> internode elongation, causes <b>bolting</b> (rapid stem elongation before flowering) in rosette plants; converts genetic dwarfs to tall; breaks seed and bud dormancy; promotes seed germination; speeds early seed production in conifers; induces α-amylase synthesis in germinating cereal grains. <b>Application:</b> increases the length of grape stalks, enlarges fruit (e.g. apple), and increases sugarcane yield.',
      },
      {
        t: 'p',
        html: '<b>3. Cytokinins</b> (adenine/purine derivatives).<br>• <b>Natural:</b> <b>zeatin</b> (from maize kernels and coconut milk). <b>Synthetic:</b> <b>kinetin</b>.<br>• <b>Effects:</b> promotes <b>cell division</b> (cytokinesis); helps overcome apical dominance (promotes lateral shoot/bud growth); delays leaf senescence (the <b>Richmond–Lang effect</b>) by mobilising nutrients and controlling protein synthesis; promotes chloroplast development and nutrient mobilisation.<br>• <b>Where:</b> most abundant in sites of rapid, continuous cell division: root apices, developing shoot buds and young fruits.',
      },
      {
        t: 'p',
        html: '<b>4. Ethylene</b> (C<sub>2</sub>H<sub>4</sub>, a gaseous hormone).<br>• <b>Source:</b> synthesised from the amino acid <b>methionine</b>; commercially supplied as <b>ethephon</b> (which releases ethylene in tissue).<br>• <b>Effects:</b> hastens <b>fruit ripening</b> (climacteric: raises respiration rate); promotes senescence and <b>abscission</b> of leaves and flowers; breaks seed and bud dormancy; promotes root-hair formation; induces flowering and fruit-set synchronisation in pineapple and mango; increases the number of female flowers in cucurbits; used for fruit thinning in cotton, cherry and walnut.',
      },
      {
        t: 'p',
        html: '<b>5. Abscisic acid</b> (ABA; a carotenoid derivative, precursor violaxanthin).<br>• <b>Other names:</b> abscisin II; dormin.<br>• <b>Nature:</b> acidic; the general “<b>stress hormone</b>”.<br>• <b>Effects:</b> promotes seed and bud <b>dormancy</b>; induces <b>stomatal closure</b> under water stress: accumulating in drought-stressed leaves, it makes the guard cells lose turgor so the stomata shut and water is conserved; inhibits growth and metabolism; antagonistic to gibberellins (GA breaks dormancy, ABA enforces it).',
      },

      { t: 'part', title: 'Key processes and logical framework' },
      {
        t: 'p',
        html: '<b>A. How auxin was discovered (the logic chain).</b> Charles Darwin and his son Francis noticed that grass coleoptiles <b>bend towards light</b>. By covering different parts, they reasoned the <b>tip</b> perceives the light, yet the <b>bending happens lower down</b>, so a signal must travel from tip to growth zone. Decades later, F.W. Went collected this signal by standing cut coleoptile tips on agar blocks; the agar alone could then make a tipless coleoptile bend, proving a diffusible chemical: auxin. The deeper mechanism: light drives auxin to the <b>shaded side</b>, where extra auxin means extra elongation, so the shaded side grows faster and the shoot bends toward the light. <b>Why this matters:</b> it is the founding experiment of plant hormone biology and a perennial CBSE/NEET favourite.',
      },
      {
        t: 'p',
        html: '<b>B. The other discoveries in one breath.</b><br>• <b>Gibberellin:</b> traced to the fungus <b><i>Gibberella fujikuroi</i></b>, which causes the “foolish seedling” (bakanae) disease of rice: infected plants grow abnormally tall, revealing a growth-promoting chemical.<br>• <b>Cytokinin:</b> <b>kinetin</b> was isolated from autoclaved (degraded) <b>herring-sperm DNA</b> by Miller and Skoog, who were hunting for a cell-division factor; the natural counterpart <b>zeatin</b> was later found in maize.<br>• <b>Ethylene:</b> the observation (Cousins) that ripe oranges hastened the ripening of bananas stored nearby pointed to a volatile ripening signal: a gas.<br>• <b>ABA:</b> found independently as a growth-inhibitor (“abscisin II”) and a dormancy-inducer (“dormin”); the two names were merged into abscisic acid.',
      },
      {
        t: 'p',
        html: '<b>C. The auxin-to-cytokinin ratio: the master switch of tissue culture.</b> This is a classic, often-tested process idea in the topic. In a mass of undifferentiated cells (callus), the <b>ratio</b> of the two hormones, not their absolute amounts, decides the outcome:<br>• A <b>high auxin ∶ cytokinin</b> ratio favours <b>root</b> differentiation.<br>• A <b>high cytokinin ∶ auxin</b> ratio favours <b>shoot</b> differentiation.<br>• A <b>balanced</b> ratio keeps the callus dividing without organising. <b>Why a ratio?</b> Because the two hormones act antagonistically on the same developmental programme; the cell reads their relative levels as a coordinate that tells it which organ to build. (Memory hook: “<b>Roots need Auxin, Shoots need Cytokinin</b>: the bigger partner wins.”)',
      },
      {
        t: 'p',
        html: '<b>D. Bioassays: measuring a hormone by what it does.</b> Since hormones act in trace amounts, they are quantified by a biological response:<br>• <b>Auxin</b> → the <b><i>Avena</i> coleoptile curvature test</b> (degree of bending is proportional to auxin).<br>• <b>Gibberellin</b> → the <b>dwarf pea / dwarf corn</b> elongation test (dwarfs grow tall in proportion to GA).<br>• <b>Cytokinin</b> → the <b>cell-division / callus-growth</b> test.',
      },
      {
        t: 'p',
        html: '<b>E. Antagonisms to remember.</b> ABA opposes gibberellin (dormancy vs germination). Cytokinin opposes ethylene (anti-senescence vs senescence) and partly opposes auxin (lateral-bud release vs apical dominance). These push–pull pairs are exactly where NEET sets its assertion–reason traps.',
      },
      {
        t: 'p',
        html: '<b>F. Putting PGRs to work: agriculture and horticulture.</b> Almost every PGR earns its exam marks through a practical use, and the applications follow directly from the functions above. <b>Auxins</b> root stem cuttings in nurseries (IBA and NAA are the rooting hormones of choice), produce seedless <b>parthenocarpic</b> fruit such as tomato from dilute IAA/IBA, and, as 2,4-D, clear dicot weeds from cereal lawns and fields. <b>Gibberellins</b> lengthen the stalk and enlarge the fruit of grapes, increase the yield of sugarcane (which stores sugar in the stem), hasten maturity in young conifers, and speed the <b>malting</b> of barley by inducing α-amylase, which is why GA matters to the brewing industry. <b>Cytokinins</b> extend the <b>shelf life</b> of vegetables and cut flowers by holding off senescence. <b>Ethylene</b>, usually applied as ethephon, ripens and de-greens fruit on demand, synchronises fruit-set and induces flowering in pineapple, promotes female flowers (and hence yield) in cucurbits, and thins excess fruit in cotton, cherry and walnut. The throughline: pick the hormone whose natural job is the outcome the grower wants.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE',
        q: 'Name the plant growth regulator responsible for each: (a) closure of stomata during water stress, (b) ripening of climacteric fruits, (c) bolting in rosette plants, (d) overcoming apical dominance to promote lateral buds.',
        steps: [
          '(a) <b>Abscisic acid</b>: the stress hormone; it closes stomata to conserve water.',
          '(b) <b>Ethylene</b>: the gaseous ripening hormone (supplied commercially as ethephon).',
          '(c) <b>Gibberellin</b>: drives internode elongation, hence bolting.',
          '(d) <b>Cytokinin</b>: promotes lateral bud growth, antagonising auxin’s apical dominance.',
        ],
        ans: '(a) ABA, (b) ethylene, (c) gibberellin, (d) cytokinin. (CBSE tip: one clean line per part, hormone named first.)',
      },
      {
        t: 'ex',
        tag: 'CUET / Match-the-Column',
        q: 'Match each PGR with its agricultural use:<br><b>Column I:</b> A. 2,4-D; B. Gibberellin (GA<sub>3</sub>); C. Cytokinin; D. Ethephon.<br><b>Column II:</b> i. Hastening fruit ripening; ii. Killing broad-leaved weeds; iii. Lengthening grape/sugarcane stalk; iv. Delaying senescence of cut flowers.',
        steps: [
          '<b>Reasoning:</b> 2,4-D is a synthetic auxin weedicide → <b>A–ii</b>. GA<sub>3</sub> elongates stalks → <b>B–iii</b>. Cytokinin postpones senescence (Richmond–Lang) and keeps cut flowers fresh → <b>C–iv</b>. Ethephon releases ethylene, the ripening gas → <b>D–i</b>.',
        ],
        ans: 'A–ii, B–iii, C–iv, D–i.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'In a tissue-culture experiment, a callus is divided into three flasks. Flask 1 is given a high auxin-to-cytokinin ratio, Flask 2 a high cytokinin-to-auxin ratio, and Flask 3 a balanced ratio. Predict the outcome in each.',
        steps: [
          'The organ a callus builds is set by the ratio, not the totals. Flask 1 (auxin-dominant) → <b>roots</b> differentiate. Flask 2 (cytokinin-dominant) → <b>shoots</b> differentiate. Flask 3 (balanced) → the callus keeps <b>dividing</b> without organising into roots or shoots.',
        ],
        ans: 'Flask 1 → roots; Flask 2 → shoots; Flask 3 → undifferentiated callus growth. (This ratio is a classic, often-tested NEET concept in the topic.)',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: 'Assertion (A): 2,4-D is used to clear dicot weeds from a field of wheat without harming the crop. Reason (R): 2,4-D, a synthetic auxin, is far more lethal to broad-leaved dicots than to narrow-leaved monocots like wheat. Options: <b>(1)</b> Both true, R correctly explains A. <b>(2)</b> Both true, R not the explanation. <b>(3)</b> A true, R false. <b>(4)</b> A false, R true.',
        steps: [
          'A is true: 2,4-D is a classic selective weedicide in cereal fields. R is true and it is the precise reason: the differential sensitivity of dicots versus monocots is why the crop survives while the weeds die. R explains A.',
        ],
        ans: 'Option (1). (Trap: students who know 2,4-D is a weedicide but not the dicot–monocot selectivity downgrade this to option (2) or (3).)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define a plant growth regulator and classify the five major PGRs into promoters and inhibitors.',
            a: 'A trace-amount organic regulator of growth/development; promoters = auxin, gibberellin, cytokinin; inhibitors = ABA and (largely) ethylene.',
          },
          {
            q: '[CUET] Name the natural cytokinin found in coconut milk and maize kernels, and state the chemical class to which cytokinins belong.',
            a: 'Zeatin; adenine/purine derivatives.',
          },
          {
            q: '[NEET] Which hormone would you apply to (i) induce parthenocarpy in tomato, (ii) speed up ripening of stored mangoes, and (iii) break the dormancy of a freshly harvested seed?',
            a: '(i) auxin (dilute IAA/IBA), (ii) ethylene/ethephon, (iii) gibberellin.',
          },
          {
            q: '[NEET] Explain why ethylene is awkward to classify strictly as a “growth inhibitor,” giving one promotive and one inhibitory role.',
            a: 'Promotes ripening, flowering in pineapple and root-hair formation (promotive) yet drives senescence and abscission (inhibitory), hence not purely an inhibitor.',
          },
          {
            q: '[NEET High-Difficulty] A genetically dwarf or rosette plant that fails to elongate is suspected of lacking a hormone. Identify the most likely deficient hormone, name a bioassay used to detect it, and explain the expected result of that bioassay.',
            a: 'Gibberellin; dwarf-pea/dwarf-corn elongation bioassay; on GA application the dwarf plant elongates in proportion to the dose, confirming gibberellin activity.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which set lists only <b>synthetic</b> auxins?',
        opts: [
          {
            label: 'IAA, IBA',
            nudge: '<b>(a)</b> IAA and IBA are natural auxins: the most common trap, since IBA is sometimes mis-listed as synthetic.',
          },
          { label: 'NAA, 2,4-D', nudge: null },
          { label: 'IAA, NAA', nudge: '<b>(c)</b> mixes one natural (IAA) with one synthetic (NAA).' },
          { label: 'zeatin, kinetin', nudge: '<b>(d)</b> zeatin/kinetin are cytokinins, not auxins.' },
        ],
        correct: 1,
        solution: 'NAA and 2,4-D are man-made auxins.',
      },
      {
        t: 'mcq',
        q: 'The hormone that is gaseous and synthesised from methionine is:',
        opts: [
          { label: 'abscisic acid', nudge: '<b>(a)</b> ABA is a carotenoid derivative, not a gas.' },
          { label: 'gibberellin', nudge: '<b>(b)</b> GA is a terpene-based acid.' },
          { label: 'ethylene', nudge: null },
          {
            label: 'cytokinin',
            nudge: '<b>(d)</b> cytokinin is a purine derivative, picked by students confusing “cell division” with “ripening.”',
          },
        ],
        correct: 2,
        solution: 'Ethylene (C<sub>2</sub>H<sub>4</sub>) is the only gaseous PGR, made from methionine.',
      },
      {
        t: 'mcq',
        q: 'A high cytokinin-to-auxin ratio applied to a callus promotes the formation of:',
        opts: [
          {
            label: 'roots',
            nudge: '<b>(a)</b> is the auxin-dominant outcome: the exact reversal, hence the strongest distractor.',
          },
          { label: 'shoots', nudge: null },
          { label: 'flowers only', nudge: '<b>(c)</b> flowering is not the direct callus response to this ratio.' },
          { label: 'no growth', nudge: '<b>(d)</b> wrong; the callus actively differentiates.' },
        ],
        correct: 1,
        solution: 'Cytokinin-dominance directs shoot differentiation.',
      },
      {
        t: 'mcq',
        q: 'The Richmond–Lang effect refers to:',
        opts: [
          {
            label: 'bolting induced by gibberellin',
            nudge: '<b>(a), (c), (d)</b> attach the right mechanism names to the wrong hormones: classic terminology traps for students who memorise effects without their eponyms.',
          },
          { label: 'delay of leaf senescence by cytokinin', nudge: null },
          {
            label: 'stomatal closure by ABA',
            nudge: '<b>(a), (c), (d)</b> attach the right mechanism names to the wrong hormones: classic terminology traps for students who memorise effects without their eponyms.',
          },
          {
            label: 'phototropic bending by auxin',
            nudge: '<b>(a), (c), (d)</b> attach the right mechanism names to the wrong hormones: classic terminology traps for students who memorise effects without their eponyms.',
          },
        ],
        correct: 1,
        solution: 'Cytokinins postpone senescence by mobilising nutrients and sustaining protein synthesis.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Natural vs synthetic auxins.</b> IAA and IBA are natural; NAA, 2,4-D and 2,4,5-T are synthetic. Examiners flip these constantly. Mnemonic: “<b>I</b>ndole = natural (among auxins); the rest are lab-made.”',
          '<b>Treating ethylene as a pure inhibitor.</b> It both promotes (ripening, flowering, root hairs) and inhibits (senescence, abscission). State the role, not just the label.',
          '<b>The “abscisic acid causes abscission” misconception.</b> The name misleads: the hormone to quote for abscission is ethylene (auxin delays it in young organs); ABA’s headline jobs are dormancy and stomatal closure.',
          '<b>Reversing the auxin ∶ cytokinin ratio.</b> Lock it: auxin-high → roots; cytokinin-high → shoots. Mixing this up loses an easily won NEET mark.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For “which hormone” questions, run a two-second category check first: is the clue about growth/elongation (promoters: auxin, GA, cytokinin) or stopping/stress/ageing (inhibitors: ABA, ethylene)? That single split eliminates two or three options before you even read them carefully.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Auxins</b> (IAA/IBA natural; NAA/2,4-D synthetic)',
            note: 'cell elongation, apical dominance, rooting, parthenocarpy, 2,4-D weedicide.',
          },
          {
            f: '<b>Gibberellins</b> (GA<sub>3</sub>; terpene; acidic)',
            note: 'bolting, dwarf→tall, breaks dormancy, α-amylase in cereals.',
          },
          {
            f: '<b>Cytokinins</b> (zeatin natural, kinetin synthetic; purine)',
            note: 'cell division, delays senescence (<b>Richmond–Lang</b>), overcomes apical dominance. Coconut milk = cytokinin.',
          },
          {
            f: '<b>Ethylene</b> (C<sub>2</sub>H<sub>4</sub>; gas; from methionine; ethephon)',
            note: 'ripening, senescence, abscission, female flowers, pineapple flowering.',
          },
          {
            f: '<b>ABA</b> (carotenoid derivative; “stress hormone”; acidic)',
            note: 'dormancy + stomatal closure; antagonist of GA.',
          },
          {
            f: '<b>Ratio rule</b>',
            note: 'high auxin ∶ cytokinin → roots; high cytokinin ∶ auxin → shoots.',
          },
          {
            f: '<b>Bioassays</b>',
            note: 'auxin → <i>Avena</i> curvature; GA → dwarf pea/corn; cytokinin → cell-division test.',
          },
        ],
        aids: [
          '<b>Mnemonic:</b> promoters: “<b>A-G-C go</b>” (Auxin, Gibberellin, Cytokinin); inhibitors: “<b>ABA & Ethylene halt</b>.”',
        ],
      },
    ],
  },
];
