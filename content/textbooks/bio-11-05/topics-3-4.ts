import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 5 (Morphology of Flowering Plants), Topics 03 and 04:
 * pp. 305 to 323 of the Class 11 Biology Master Reference, word for word.
 * Topic 03, Fruit, Seed & Family Solanaceae (pp. 305–314), and Topic 04,
 * Semi-technical Description & Plant Families (Fabaceae, Solanaceae,
 * Liliaceae) (pp. 315–323, ending with its Appendix, Chapter Completeness
 * Notes), are each cut at the book’s Sections 1 to 8. Figures 5.7 to 5.10
 * (captions pp. 308 and 310, drawn pp. 309 and 311) and 5.11 to 5.13
 * (captions p. 318, drawn p. 319) are redrawn in lib/diagrams/biology-11-05.ts;
 * these pages draw nothing else. Scientific names are italic as the book
 * prints them; emphasis italics are dropped. The book underlines the G of a
 * floral formula to mark a superior ovary; the markup has no underline, so the
 * G carries a combining low line (U+0332), see the report.
 */

/** The G of a floral formula, underlined (superior ovary), with its subscript. */
const G1 = 'G̲<sub>1</sub>';
const G2 = 'G̲<sub>(2)</sub>';
const G3 = 'G̲<sub>(3)</sub>';
/** The three floral formulae of the topic, as the book prints them. */
const SOL = `⊕ ⚥ K<sub>(5)</sub> C<sub>(5)</sub> A<sub>5</sub> ${G2}`;
const FAB = `% ⚥ K<sub>(5)</sub> C<sub>1+2+(2)</sub> A<sub>(9)+1</sub> ${G1}`;
const LIL = `⊕ ⚥ P<sub>(3+3)</sub> A<sub>3+3</sub> ${G3}`;

export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 305–314 ─────────────────────────
  {
    n: '03',
    title: 'Fruit, Seed & Family Solanaceae',
    kalam: 'After fertilisation, each ovule becomes a seed, and the whole ovary becomes a fruit.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A reliable scoring cluster for <b>NEET</b>: seed structure (dicot vs monocot), true/false/parthenocarpic fruits, and the <b>Solanaceae floral formula</b> appear regularly (the book’s estimate from past papers, not official figures), often as match-the-column or “identify the family” items. <b>CUET (Biology)</b> asks single-correct MCQs on pericarp layers and seed types; <b>CBSE Boards</b> favour labelled dicot/monocot seed diagrams and the semi-technical description of Solanaceae. <b>No Biology in JEE.</b> The boundary to guard: this is morphology of the fruit and seed, not the Class-12 reproductive events that form them.',
      },
      {
        t: 'p',
        html: 'By now the plant has flowered (Topic 02). What happens next is the quiet, decisive part: the flower’s ovary and its ovules transform. After fertilisation, <b>each ovule becomes a seed, and the whole ovary becomes a fruit.</b> Hold that one-line mapping firmly, ovule → seed, ovary → fruit, because many questions in this topic are variations on it.',
      },
      {
        t: 'p',
        html: 'A <b>seed</b> is, in plain terms, a packed lunch for the next generation: a tiny dormant plant (the <b>embryo</b>) plus a food supply, wrapped in a protective coat. The embryo is the future plant in miniature: a <b>radicle</b> that will become the root, a <b>plumule</b> that will become the shoot, and one or two <b>cotyledons</b> (seed leaves). The food is stored either in a special tissue called the <b>endosperm</b>, or pre-loaded into fat cotyledons. That single difference splits seeds into two camps: if the endosperm survives into the mature seed it’s <b>endospermic (albuminous)</b>, like a maize grain; if the embryo has eaten up the endosperm and stuffed the food into its cotyledons, it’s <b>non-endospermic (ex-albuminous)</b>, like a gram or pea.',
      },
      {
        t: 'p',
        html: 'Think about it this way… a maize grain is like buying a thali where the rice (endosperm) sits separately on the plate beside you to eat as you grow; a gram seed is like a stuffed paratha where the filling (food) is already packed inside the cotyledons themselves, so there’s no separate rice left over. Same purpose, two storage strategies.',
      },
      {
        t: 'p',
        html: 'The <b>fruit</b> is the matured ovary wrapped around those seeds. Its wall, developed from the ovary wall, is the <b>pericarp</b>, and when fleshy it has three layers you can often see in a sliced mango: a skin (<b>epicarp</b>), a juicy middle (<b>mesocarp</b>), and a hard stone around the seed (<b>endocarp</b>). Here a sharp distinction matters: a <b>true fruit</b> develops from the ovary alone, but in a <b>false fruit</b> other floral parts, usually the swollen thalamus, join in. The juicy part of an apple is mostly thalamus, not ovary, which is why the apple is the textbook false fruit. And some fruits form without fertilisation at all, staying seedless: <b>parthenocarpic</b> fruits, like the banana you eat.',
      },
      {
        t: 'p',
        html: 'Finally, the same flower-and-fruit features become a tool for <b>classification</b>. Botanists describe families by their floral and fruit characters, summarised in a one-line <b>floral formula</b>. We take <b>Solanaceae</b>, the potato/tomato/brinjal family, as our worked family: actinomorphic bisexual flowers, five fused sepals and petals, five epipetalous stamens, a bicarpellary superior ovary with axile placentation, and a berry fruit.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions / what to watch.</b> The biggest trap is scope creep into Class-12 reproduction. The structure of the seed and fruit is Class-11 morphology; the process that makes them (the embryo sac, pollination, double fertilisation, endosperm ploidy) belongs to a later chapter and must stay out of a morphology answer.',
      },
      {
        t: 'p',
        html: 'Also note: “seed = product of sexual reproduction” is true but is a reproduction statement, not a morphological description of seed parts.',
      },

      { t: 'part', title: 'Key terms, definitions and classification' },
      { t: 'p', html: '<b>A. The Ovule → Seed</b>' },
      {
        t: 'p',
        html: 'Before it is a seed, the structure is an <b>ovule</b> sitting inside the ovary. Knowing its parts makes the seed’s parts obvious, since the seed is just a fertilised, matured ovule:',
      },
      {
        t: 'table',
        title: null,
        head: ['Ovule part', 'Description'],
        rows: [
          ['Funicle', 'the stalk attaching the ovule to the placenta'],
          ['Hilum', 'the point/junction where the body of the ovule fuses with the funicle'],
          ['Integument(s)', 'one or two protective layers enclosing the ovule (→ become the seed coat)'],
          ['Micropyle', 'a small pore at the tip of the integuments; entry route for the pollen tube and, later, water'],
          ['Nucellus', 'the mass of food-rich cells within the ovule (→ may persist as perisperm)'],
          ['Chalaza', 'the basal end of the nucellus, where the integuments and nucellus merge; in an anatropous ovule it lies at the end opposite the micropyle.'],
        ],
      },
      {
        t: 'p',
        html: 'After fertilisation: integuments → <b>seed coat</b>, micropyle/hilum carry over to the seed, and the nucellus is usually absorbed (occasionally persisting as perisperm).',
      },
      { t: 'p', html: '<b>B. The Seed</b>' },
      {
        t: 'table',
        title: null,
        head: ['Part', 'Description'],
        rows: [
          ['Seed coat', 'protective covering: outer <b>testa</b> (thick, hard) + inner <b>tegmen</b> (thin, papery)'],
          ['Hilum', 'scar marking where the seed was attached (via the funicle) to the fruit'],
          ['Micropyle', 'small pore just above the hilum (as NCERT puts it); route of water entry at germination'],
          ['Embryo', 'the young plant: <b>radicle</b> (→ root), <b>plumule</b> (→ shoot), <b>cotyledon(s)</b> (seed leaves)'],
          ['Endosperm', 'food-storage tissue (when present); outermost proteinous sheet = <b>aleurone layer</b>'],
        ],
      },
      {
        t: 'table',
        title: 'Dicot vs monocot seed',
        head: ['Feature', 'Dicot seed (e.g. gram, bean)', 'Monocot seed (e.g. maize, wheat)'],
        rows: [
          ['Cotyledons', 'two', 'one, shield-shaped = <b>scutellum</b>'],
          ['Endosperm', 'usually consumed (non-endospermic)', 'usually persists (endospermic)'],
          ['Special sheaths', '–', '<b>coleoptile</b> (over plumule), <b>coleorhiza</b> (over radicle)'],
        ],
      },
      {
        t: 'table',
        title: 'Seed types by food store',
        head: ['Type', 'Food stored in', 'Examples'],
        rows: [
          ['Endospermic / albuminous', 'endosperm (persists)', 'maize, wheat, barley, castor, coconut'],
          ['Non-endospermic / ex-albuminous', 'cotyledons (endosperm used up)', 'gram, pea, bean, groundnut, sunflower'],
          ['Perispermic', '<b>perisperm</b> (persistent nucellus remnant)', 'black pepper, beet'],
        ],
      },
      { t: 'p', html: '<b>C. The Fruit</b>' },
      {
        t: 'p',
        html: '• A <b>fruit</b> is a mature/ripened <b>ovary</b>, formed after fertilisation. It consists of a <b>pericarp</b> (from the ovary wall) enclosing the <b>seed(s)</b>.<br>• By the nature of the pericarp, fruits are broadly <b>fleshy</b> (pericarp soft/juicy at maturity: guava, orange, mango) or <b>dry</b> (pericarp dry/hard at maturity).<br>• When fleshy, the pericarp differentiates into three layers (outer → inner): <b>epicarp</b> → <b>mesocarp</b> → <b>endocarp</b> (in a citrus, epicarp + mesocarp form the peel).',
      },
      {
        t: 'table',
        title: null,
        head: ['Fruit category', 'Definition', 'Example'],
        rows: [
          ['True fruit', 'develops from the <b>ovary only</b>', 'mango, tomato'],
          ['False fruit', '<b>thalamus / other floral parts</b> also contribute', 'apple, pear, strawberry, cashew'],
          ['Parthenocarpic', 'formed <b>without fertilisation</b>, hence seedless', 'banana'],
          ['Drupe', 'single-seeded, with a stony endocarp; the mesocarp is fleshy in mango and fibrous in coconut', 'mango, coconut'],
        ],
      },
      { t: 'p', html: '<b>D. Family Solanaceae</b> (the potato/tomato family)' },
      {
        t: 'table',
        title: null,
        head: ['Character', 'Description'],
        rows: [
          ['Habit / vegetative', 'herbs/shrubs; stem branched; leaves alternate, generally simple'],
          ['Inflorescence', 'solitary & axillary, or cymose'],
          ['Flower', 'actinomorphic, bisexual, hypogynous (superior ovary)'],
          ['Calyx', '5 sepals, <b>united (gamosepalous)</b>, persistent; valvate aestivation'],
          ['Corolla', '5 petals, <b>united (gamopetalous)</b>; valvate aestivation'],
          ['Androecium', '5 stamens, <b>epipetalous</b> (attached to corolla)'],
          ['Gynoecium', '<b>bicarpellary, syncarpous; superior ovary; axile placentation</b> (swollen placenta, many ovules)'],
          ['Fruit', '<b>berry</b> or capsule'],
          ['Seeds', 'many, <b>endospermous</b>'],
          ['Floral formula', `${SOL} (superior ovary)`],
          ['Examples', '<i>Solanum</i> (potato), tomato, brinjal, tobacco (<i>Nicotiana</i>), <i>Datura</i>, <i>Withania</i>, <i>Petunia</i>, chilli'],
          ['Economic importance', 'food (potato, tomato, brinjal); spice (chilli); medicine (<i>Atropa</i>, <i>Withania</i>); tobacco; ornamental (<i>Petunia</i>)'],
        ],
      },

      { t: 'part', title: 'Diagnostic identification and labeled structures' },
      {
        t: 'p',
        html: '<b>(a) Reading a dicot vs monocot seed diagram.</b> First count cotyledons. Two fleshy cotyledons, little/no endosperm, food in the cotyledons → <b>dicot</b> (gram, bean). One shield-shaped cotyledon (scutellum) pressed against a large endosperm, with a coleoptile capping the plumule and a coleorhiza over the radicle → <b>monocot</b> (maize, wheat). The presence of scutellum + coleoptile + coleorhiza is a dead giveaway for a monocot grain.',
      },
      { t: 'fig', id: 'b11-05-fig-5.7' },
      {
        t: 'p',
        html: 'Because the seed is just a matured ovule, the same routine reads an <b>ovule</b> diagram: trace the stalk (<b>funicle</b>) to where it joins the ovule body (<b>hilum</b>), find the protective <b>integuments</b> with the <b>micropyle</b> pore at their tip, the food-rich <b>nucellus</b> inside, and the <b>chalaza</b> at the end opposite the micropyle. Seeing how integument→seed coat and micropyle→seed micropyle map across makes the seed labelling automatic.',
      },
      { t: 'fig', id: 'b11-05-fig-5.8' },
      {
        t: 'p',
        html: '<b>(b) Telling a true fruit from a false fruit.</b> Ask: is the fleshy edible part developed only from the ovary, or did other parts join in? If the swollen thalamus/receptacle contributes the bulk (as in apple), it’s a <b>false fruit</b>; if the whole fruit comes from the ovary alone (as in mango or tomato), it’s a <b>true fruit</b>. Quick anchor list of false fruits: apple, pear, strawberry, cashew.',
      },
      {
        t: 'p',
        html: '<b>(c) Naming pericarp layers from a sliced fruit.</b> Work outside-in: skin = <b>epicarp</b>, fleshy middle = <b>mesocarp</b>, hard inner layer around the seed = <b>endocarp</b>. In a drupe like mango, the stone you discard is the endocarp with the seed inside. Reversing this order is a classic distractor.',
      },
      { t: 'fig', id: 'b11-05-fig-5.9' },
      {
        t: 'p',
        html: '<b>(d) Constructing/reading the Solanaceae floral formula.</b> Translate symbol by symbol: ⊕ = actinomorphic; ⚥ = bisexual; <b>K</b><sub>(5)</sub> = five fused sepals; <b>C</b><sub>(5)</sub> = five fused petals; <b>A</b><sub>5</sub> = five (epipetalous) stamens; <b>G</b><sub>(2)</sub> = bicarpellary syncarpous gynoecium; a line below the G marks a <b>superior</b> ovary (hypogynous). Read it back: “a radially symmetric bisexual flower with five fused sepals, five fused petals, five epipetalous stamens, and a superior bicarpellary ovary”: exactly the tomato/brinjal flower.',
      },
      { t: 'fig', id: 'b11-05-fig-5.10' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Distinguish between an endospermic (albuminous) and a non-endospermic (ex-albuminous) seed, with one example of each.',
        steps: [
          'A crisp 2–3 mark comparison:<br>• <b>Food store:</b> In an endospermic seed the <b>endosperm persists</b> in the mature seed and supplies the embryo (example: maize/castor). In a non-endospermic seed the endosperm is <b>used up during development</b> and food is stored in the <b>cotyledons</b> (example: gram/pea).<br>• <b>Diagnostic tip:</b> If the question shows a large endosperm with a thin embryo at one edge, it’s albuminous; if it shows two plump cotyledons and barely any endosperm, it’s ex-albuminous.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / single-correct',
        q: 'The fleshy edible part of an apple develops mainly from the: <b>(a)</b> ovary <b>(b)</b> thalamus <b>(c)</b> endocarp <b>(d)</b> seed coat',
        steps: [
          '<b>Reasoning:</b> In apple the <b>thalamus</b> swells and forms the bulk of the edible flesh, which is why apple is the standard <b>false fruit</b>. The ovary forms only the core. <b>(a)</b> would make it a true fruit; <b>(c)</b> and <b>(d)</b> are minor inner structures.',
        ],
        ans: '(b).',
      },
      {
        t: 'ex',
        tag: 'NEET / match the columns',
        q: 'Match the structure with its description:<br>Column I: P. Scutellum; Q. Testa; R. Aleurone layer; S. Fruit.<br>Column II: 1. outer hard layer of seed coat; 2. shield-shaped cotyledon of a monocot; 3. matured ovary; 4. proteinous outer layer of endosperm.',
        steps: [
          '<b>Elimination logic:</b> Scutellum is the monocot cotyledon → <b>P–2</b>. Testa is the outer seed coat → <b>Q–1</b>. The fruit is the matured ovary → <b>S–3</b>. The remaining pair, correct by definition, is the aleurone layer (proteinous endosperm sheet) → <b>R–4</b>.',
        ],
        ans: 'P–2, Q–1, R–4, S–3.',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty / Assertion–Reason',
        q: '<b>Assertion (A):</b> A banana is classified as a parthenocarpic fruit. <b>Reason (R):</b> A banana develops from the ovary without fertilisation and is therefore seedless. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
        steps: [
          '<b>Reasoning:</b> Test A: is banana parthenocarpic? Yes; the cultivated banana sets fruit without fertilisation and lacks viable seeds, so A is <b>true</b>. Test R: does it develop without fertilisation, hence seedless? That is exactly the definition of parthenocarpy, so R is <b>true</b> and it is the reason A holds: R correctly explains A.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define pericarp. Name its three layers from outside to inside and state which layer forms the stone of a mango.',
            a: 'Pericarp = the fruit wall (from the ovary wall); epicarp → mesocarp → endocarp; the stony endocarp forms the mango stone.',
          },
          {
            q: '[CUET] Which part of a seed is the scar marking its former attachment to the fruit?',
            a: 'Hilum.',
          },
          {
            q: '[NEET] Give the floral formula of family Solanaceae and state the type of placentation and fruit characteristic of the family.',
            a: `${SOL} (superior ovary); axile placentation; fruit a berry (or capsule).`,
          },
          {
            q: '[NEET] Classify as true or false fruit: (i) mango, (ii) apple, (iii) tomato, (iv) cashew.',
            a: 'True: mango, tomato; false: apple, cashew.',
          },
          {
            q: '[NEET high-difficulty] A monocot grain shows a single shield-shaped cotyledon and two protective sheaths over the embryo’s ends. Name the cotyledon and the two sheaths, and state what each sheath protects.',
            a: 'Scutellum; coleoptile (protects the plumule) and coleorhiza (protects the radicle).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Non-endospermic (ex-albuminous) seeds store their reserve food mainly in the:',
        opts: [
          { label: 'endosperm', nudge: '<b>(a)</b> describes albuminous seeds (maize).' },
          { label: 'cotyledons', nudge: null },
          { label: 'perisperm', nudge: '<b>(c)</b> perisperm is a different, rarer persistent nucellus (black pepper).' },
          { label: 'seed coat', nudge: '<b>(d)</b> the seed coat is protective, not a food store.' },
        ],
        correct: 1,
        solution: 'In ex-albuminous seeds (gram, pea) the endosperm is consumed during development and food is stored in the <b>cotyledons</b>.',
      },
      {
        t: 'mcq',
        q: 'In which of the following does the thalamus contribute to fruit formation?',
        opts: [
          { label: 'tomato', nudge: '<b>(a) tomato</b> and <b>(b) mango</b> are true fruits (ovary only).' },
          { label: 'mango', nudge: '<b>(a) tomato</b> and <b>(b) mango</b> are true fruits (ovary only).' },
          { label: 'apple', nudge: null },
          { label: 'grape', nudge: '<b>(d) grape</b> is a true berry (ovary only).' },
        ],
        correct: 2,
        solution:
          'Apple is a <b>false fruit</b>: its flesh is largely thalamus. Students who only memorise “apple = fruit” without the true/false distinction miss this.',
      },
      {
        t: 'mcq',
        q: `The floral formula ${SOL} with a superior ovary belongs to:`,
        opts: [
          {
            label: 'Fabaceae',
            nudge: '<b>(a) Fabaceae</b> is zygomorphic with vexillary aestivation and a monocarpellary ovary.',
          },
          { label: 'Liliaceae', nudge: '<b>(b) Liliaceae</b> has tepals (P<sub>(3+3)</sub>) and is trimerous.' },
          { label: 'Solanaceae', nudge: null },
          {
            label: 'Brassicaceae',
            nudge: '<b>(d) Brassicaceae</b> has tetradynamous stamens and a bicarpellary but bilocular-by-false-septum ovary.',
          },
        ],
        correct: 2,
        solution: 'Five fused sepals and petals, five epipetalous stamens, and a bicarpellary superior ovary are the <b>Solanaceae</b> signature.',
      },
      {
        t: 'mcq',
        q: 'The correct outside-to-inside order of the pericarp layers of a fleshy fruit is:',
        opts: [
          { label: 'endocarp, mesocarp, epicarp', nudge: null },
          { label: 'mesocarp, epicarp, endocarp', nudge: null },
          { label: 'epicarp, mesocarp, endocarp', nudge: null },
          { label: 'epicarp, endocarp, mesocarp', nudge: null },
        ],
        correct: 2,
        solution:
          'Outermost skin = <b>epicarp</b>, fleshy middle = <b>mesocarp</b>, innermost (around the seed) = <b>endocarp</b>. The other options scramble the order, a frequent distractor that costs an easy mark.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Straying into reproduction.</b> Seed and fruit structure is morphology; the embryo sac, double fertilisation, and endosperm ploidy are Class-12 reproduction. Don’t mix them in a morphology answer.',
          '<b>True vs false fruit.</b> “False” doesn’t mean “not a fruit”: it means parts other than the ovary (usually the thalamus) form the flesh. Apple, pear, strawberry, cashew.',
          '<b>Albuminous vs ex-albuminous reversed.</b> Albuminous = endosperm present (maize); ex-albuminous = endosperm absent, food in cotyledons (gram). The “ex-” means “without.”',
          '<b>Pericarp order scrambled</b> and <b>mango called a berry</b>: mango is a <b>drupe</b> (stony endocarp), not a berry.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed & accuracy):</b><br>• For family-ID questions, lock the <b>Solanaceae signature</b> as a single chunk: “five-five-five, epipetalous, superior bicarpellary, berry” (K<sub>(5)</sub> C<sub>(5)</sub> A<sub>5</sub>, epipetalous, ${G2} superior, berry). Many family items are won by recognising one such signature.<br>• For seed type, use the one-question test: “Where is the food?”: endosperm → albuminous; cotyledons → ex-albuminous.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Mapping', note: 'ovule → <b>seed</b>; ovary → <b>fruit</b> (after fertilisation).' },
          {
            f: 'Seed parts',
            note: 'seed coat (testa + tegmen), hilum, micropyle, embryo (radicle + plumule + cotyledons), endosperm (+ aleurone layer).',
          },
          {
            f: 'Seed types',
            note: 'albuminous/endospermic (maize) vs ex-albuminous/non-endospermic (gram); perisperm = persistent nucellus (black pepper).',
          },
          {
            f: 'Monocot grain',
            note: 'one cotyledon = scutellum; coleoptile (plumule) + coleorhiza (radicle).',
          },
          {
            f: 'Fruit',
            note: 'pericarp = epicarp → mesocarp → endocarp; true (ovary only, mango) vs false (thalamus too, apple); parthenocarpic = seedless (banana); drupe = stony endocarp (mango).',
          },
          {
            f: 'Solanaceae',
            note: `${SOL}, superior ovary, axile placentation, berry; potato/tomato/brinjal/tobacco/<i>Datura</i>.`,
          },
        ],
        aids: [
          'Seed coat → “<b>Testa Tough (outer), Tegmen Thin (inner).</b>”',
          'Pericarp → “<b>Epi-Meso-Endo, outside in.</b>”',
          'False fruits → “<b>APP-le, PE-ar, STraw-berry, CASH-ew.</b>”',
          'Solanaceae → “<b>5-5-5 epipetalous, superior berry</b>” (K<sub>(5)</sub> C<sub>(5)</sub> A<sub>5</sub>, bicarpellary superior, berry).',
          'Seed types → “<b>ex- = exit endosperm</b>” (food moves to cotyledons).',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 315–323 ─────────────────────────
  {
    n: '04',
    title: 'Semi-technical Description & Plant Families (Fabaceae, Solanaceae, Liliaceae)',
    kalam: 'Plants that share a pattern of floral characters are grouped into a family.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The capstone of the chapter and a dependable scorer. <b>NEET</b> asks questions on the three families regularly (the book’s estimate from past papers, not official figures), often floral formula, floral diagram, or “identify the family” from a feature set. <b>CUET</b> lifts direct single-correct items on family characters and economic plants. <b>CBSE Boards</b> ask the full <b>semi-technical description</b> of a given plant (with floral diagram + formula) as a 3–5 mark question, and short questions on Fabaceae/Solanaceae/Liliaceae. <b>No Biology in JEE.</b> This topic ties Topic 01 to Topic 03 together: a family description is the whole plant described organ by organ.',
      },
      {
        t: 'p',
        html: 'Everything so far, root, stem, leaf (Topic 01); inflorescence and flower (Topic 02); fruit and seed (Topic 03), was learning the vocabulary of plant form. This topic puts that vocabulary to work. When a botanist meets an unfamiliar plant, they don’t describe it in random order; they follow a fixed, agreed sequence so that any two botanists’ descriptions can be compared. That standard sequence is the <b>semi-technical description</b>, and its shorthand summary is the <b>floral formula</b> and <b>floral diagram</b>.',
      },
      {
        t: 'p',
        html: 'Think about it this way… describing a plant is like filling in a passport form: the fields always come in the same order (name, then physical features, then identifying marks), so anyone can read it the same way. For a plant the fields are: <b>habit</b> (the kind of plant) → <b>vegetative characters</b> (root, stem, leaf) → <b>floral characters</b> (inflorescence, then the flower dissected whorl by whorl) → <b>fruit and seed</b>. Skipping around or inventing your own order is a common way to lose marks.',
      },
      {
        t: 'p',
        html: 'The pay-off is <b>classification</b>. Plants that share a pattern of floral characters are grouped into a <b>family</b>. NCERT describes Solanaceae in full; older editions also described Fabaceae and Liliaceae, and NEET still asks about all three: <b>Fabaceae</b> (the pea/legume family), <b>Solanaceae</b> (the potato/tomato family, detailed in Topic 03), and <b>Liliaceae</b> (the lily family). Learn each as a single recognisable “signature,” and family questions answer themselves: the moment you see a papilionaceous corolla with diadelphous stamens, it is Fabaceae; five epipetalous stamens (free from one another, borne on the corolla) on a berry-forming plant, it is Solanaceae; six petaloid tepals with stamens on the perianth, it is Liliaceae.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions / what to watch.</b> A family description stays at the level of external morphology and floral characters, never internal tissue (that is Anatomy, Ch06) and never the reproductive events (Class 12). And “complete flower” (all four whorls present) is a different idea from “merous” (how many parts in each whorl); keep them apart.',
      },

      { t: 'part', title: 'Key terms, definitions and classification' },
      { t: 'p', html: '<b>A. The semi-technical description: fixed sequence</b>' },
      {
        t: 'table',
        title: null,
        head: ['Step', 'What to state'],
        rows: [
          ['Habit', 'herb / shrub / tree; annual / perennial; erect / climber'],
          ['Root', 'tap or fibrous or adventitious; any modification'],
          ['Stem', 'herbaceous/woody; erect/climbing; any modification'],
          ['Leaf', 'arrangement (phyllotaxy), simple/compound, venation, stipulate or not'],
          ['Inflorescence', 'racemose / cymose / solitary'],
          ['Flower', 'bracteate/ebracteate; symmetry; sex; merosity; position of ovary'],
          ['Calyx / Corolla', 'number; free/united; aestivation'],
          ['Androecium', 'number; cohesion (mona-/dia-/poly-adelphous); adhesion (epipetalous/epiphyllous)'],
          ['Gynoecium', 'carpel number; apo-/syncarpous; ovary position; placentation'],
          ['Fruit & Seed', 'fruit type; seed (endospermous or not)'],
          ['Summary', '<b>floral diagram + floral formula</b>'],
        ],
      },
      { t: 'p', html: '<b>B. Floral-formula symbol key (consolidated)</b>' },
      {
        t: 'p',
        html: '• <b>Br</b> = bracteate, <b>Ebr</b> = ebracteate.<br>• Symmetry: ⊕ actinomorphic, <b>%</b> zygomorphic.<br>• Sex: ♂ male, ♀ female, ⚥ bisexual.<br>• Whorls: <b>K</b> calyx, <b>C</b> corolla, <b>P</b> perianth, <b>A</b> androecium, <b>G</b> gynoecium.<br>• Number written as a subscript; ∞ = indefinite/numerous; brackets <b>( )</b> = fused (cohesion).<br>• Adhesion shown by joining whorl symbols with a line (e.g. corolla–androecium for epipetalous).<br>• A line <b>above</b> G = inferior ovary (epigynous); a line <b>below</b> G = superior ovary (hypogynous).',
      },
      { t: 'p', html: '<b>C. The three families at a glance</b>' },
      {
        t: 'table',
        title: null,
        head: ['Character', 'Fabaceae', 'Solanaceae', 'Liliaceae'],
        rows: [
          ['Symmetry', 'zygomorphic', 'actinomorphic', 'actinomorphic'],
          ['Perianth', 'distinct K + C', 'distinct K + C', '<b>tepals</b> (P, undifferentiated)'],
          ['Calyx/Corolla', 'K<sub>(5)</sub>, C polypetalous (papilionaceous)', 'K<sub>(5)</sub>, C<sub>(5)</sub> (valvate)', 'P<sub>(3+3)</sub> (petaloid)'],
          ['Androecium', '<b>diadelphous</b> A<sub>(9)+1</sub>', 'A<sub>5</sub> <b>epipetalous</b>', 'A<sub>3+3</sub> <b>epiphyllous</b>'],
          ['Gynoecium', 'monocarpellary, superior', 'bicarpellary, superior', 'tricarpellary, superior'],
          ['Placentation', '<b>marginal</b>', '<b>axile</b>', '<b>axile</b>'],
          ['Fruit', '<b>legume (pod)</b>', 'berry / capsule', 'capsule (rarely berry)'],
          ['Floral formula', FAB, SOL, LIL],
        ],
      },
      { t: 'p', html: '<b>D. Family Fabaceae (Papilionoideae): full description</b>' },
      {
        t: 'p',
        html: 'Habit: trees, shrubs, herbs; <b>roots bear nodules</b>. Stem erect or climbing. Leaves alternate, <b>pinnately compound</b> or simple, with a swollen <b>pulvinus</b> leaf base, stipulate, reticulate venation. Inflorescence racemose. Flower bisexual, <b>zygomorphic</b>. Calyx 5, gamosepalous; imbricate aestivation. Corolla 5, polypetalous, <b>papilionaceous</b>: one posterior <b>standard (vexillum)</b>, two lateral <b>wings</b>, two anterior fused into a <b>keel</b>; <b>vexillary (descending imbricate)</b> aestivation. Androecium 10, <b>diadelphous</b> (9 fused + 1 free), anthers dithecous. Gynoecium <b>monocarpellary</b>, ovary superior, unilocular, <b>marginal placentation</b>, many ovules. <b>Fruit a legume (pod); seeds non-endospermous. Economic importance:</b> pulses (gram, pea, arhar, beans); edible oils (soybean, groundnut); dye (<i>Indigofera</i>); fibre (sunn hemp); fodder (<i>Sesbania</i>, <i>Trifolium</i>); ornamentals (lupin, sweet pea); medicine (Mulethi/liquorice).',
      },
      { t: 'p', html: '<b>E. Family Solanaceae: recap</b> (full treatment in Topic 03)' },
      {
        t: 'p',
        html: `Actinomorphic bisexual flower; K<sub>(5)</sub> united persistent valvate; C<sub>(5)</sub> united valvate; <b>A</b><sub>5</sub> <b>epipetalous</b>; bicarpellary syncarpous <b>superior</b> ovary, <b>axile placentation</b> (swollen placenta); fruit a <b>berry</b>/capsule; seeds endospermous. <b>Formula:</b> ${SOL}. Examples: potato, tomato, brinjal, tobacco, <i>Datura</i>, <i>Withania</i>, <i>Petunia</i>, chilli.`,
      },
      { t: 'p', html: '<b>F. Family Liliaceae: full description</b>' },
      {
        t: 'p',
        html: 'Habit: mostly <b>perennial herbs</b> with <b>bulbs / corms / rhizomes</b> (underground storage). Leaves mostly <b>basal</b>, alternate, <b>linear</b>, with <b>parallel venation</b>, exstipulate. Inflorescence solitary or cymose, often an umbellate cluster. Flower bisexual, <b>actinomorphic</b>. <b>Perianth of 6 tepals (3 + 3)</b>, often united into a tube, generally <b>petaloid</b>; valvate aestivation. Androecium 6 (3 + 3), <b>epiphyllous</b> (borne on the perianth). Gynoecium <b>tricarpellary, syncarpous</b>; ovary superior, trilocular, <b>axile placentation</b>, many ovules; stigma trifid. <b>Fruit a capsule (rarely a berry); seeds endospermous. Economic importance:</b> food (<i>Allium</i>: onion, garlic); medicine (<i>Aloe</i>); ornamentals (tulip, <i>Gloriosa</i>, <i>Lilium</i>); vegetable (<i>Asparagus</i>); the drug colchicine (<i>Colchicum</i>).',
      },

      { t: 'part', title: 'Diagnostic identification and labeled structures' },
      {
        t: 'p',
        html: '<b>(a) Writing a semi-technical description (the routine).</b> Move strictly down the fixed sequence (habit → root → stem → leaf → inflorescence → flower → K → C → A → G → fruit → seed), then close with the floral diagram and formula. For each whorl, state number, then free/united, then special feature. Marks are awarded per field, so completeness and order matter more than length.',
      },
      {
        t: 'p',
        html: 'Here is the routine filled in for a pea plant (<b><i>Pisum sativum</i>, Fabaceae</b>), the model CBSE answer:',
      },
      {
        t: 'p',
        html: `<b>Habit:</b> herb, climber (weak stem with tendrils). <b>Root:</b> tap root with nodules. <b>Stem:</b> herbaceous, climbing. <b>Leaf:</b> alternate, pinnately compound, leaf base pulvinate, stipulate; terminal leaflets modified into tendrils; reticulate venation. <b>Inflorescence:</b> racemose. <b>Flower:</b> bracteate, bisexual, zygomorphic, hypogynous. <b>Calyx:</b> 5 sepals, gamosepalous. <b>Corolla:</b> 5 petals, polypetalous, papilionaceous (standard + 2 wings + 2 keel); vexillary aestivation. <b>Androecium:</b> 10 stamens, diadelphous (9 + 1). <b>Gynoecium:</b> monocarpellary, ovary superior, unilocular, marginal placentation. <b>Fruit:</b> legume. <b>Seed:</b> non-endospermous. <b>Floral formula:</b> ${FAB}.`,
      },
      {
        t: 'p',
        html: 'Notice every field is filled in the fixed order with number-then-fusion-then-feature; copy this skeleton for any plant you are given.',
      },
      {
        t: 'p',
        html: '<b>(b) The floral diagram: orientation conventions.</b> A floral diagram is always drawn relative to the <b>mother axis</b> (the stem bearing the flower), marked by a small dot at the top; the <b>bract</b> is drawn at the bottom. Working inward, it shows the number, arrangement and cohesion of each whorl, the aestivation of calyx and corolla, and a transverse section of the ovary at the centre showing the locules and placentation. In Solanaceae the two carpels sit <b>obliquely</b> to the mother axis: a small detail examiners reward.',
      },
      { t: 'fig', id: 'b11-05-fig-5.11' },
      {
        t: 'p',
        html: '<b>(c) Placentation as a family fingerprint in the floral diagram.</b> The central T.S. of the ovary tells you the family at a glance. A <b>single locule with ovules along one suture</b> is <b>marginal</b> placentation → Fabaceae (one carpel). <b>Two or three locules with ovules on a central axis</b> is <b>axile</b> → Solanaceae (two locules) or Liliaceae (three locules). Among these three families the locule count is enough: one chamber (marginal) = Fabaceae; two (axile) = Solanaceae; three (axile) = Liliaceae.',
      },
      { t: 'fig', id: 'b11-05-fig-5.12' },
      {
        t: 'p',
        html: '<b>(d) Telling the three families apart fast.</b> Use a two-question filter. Is the flower zygomorphic with a papilionaceous corolla? → <b>Fabaceae</b>. If actinomorphic, are calyx and corolla distinct (K + C) or fused into petaloid tepals (P)? → distinct with epipetalous A<sub>5</sub> and a berry → <b>Solanaceae</b>; tepals P<sub>(3+3)</sub> with epiphyllous A<sub>3+3</sub> and parallel-veined basal leaves → <b>Liliaceae</b>.',
      },
      { t: 'fig', id: 'b11-05-fig-5.13' },
      {
        t: 'p',
        html: `<b>(e) Reading a family floral formula back into words.</b> ${FAB} decodes as: a zygomorphic bisexual flower, five fused sepals, a papilionaceous corolla (1 standard + 2 wings + 2 fused keel), ten stamens in a 9-fused-plus-1-free (diadelphous) bundle, and a single superior carpel, i.e. a pea flower, Fabaceae.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Give the floral formula of family Fabaceae and name the type of aestivation and placentation it shows.',
        steps: [
          `<b>Floral formula:</b> ${FAB} (ovary superior).`,
          '<b>Aestivation:</b> vexillary (papilionaceous). <b>Placentation:</b> marginal.',
          '<b>Presentation tip:</b> draw the standard–wings–keel corolla and label the diadelphous stamens to secure full marks.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / single-correct',
        q: 'Epiphyllous stamens borne on a perianth of six tepals are characteristic of: <b>(a)</b> Fabaceae <b>(b)</b> Solanaceae <b>(c)</b> Liliaceae <b>(d)</b> Brassicaceae',
        steps: [
          '<b>Reasoning:</b> “Tepals (perianth) + epiphyllous stamens (3 + 3)” is the <b>Liliaceae</b> signature. <b>(a)</b> Fabaceae has distinct K + C and diadelphous stamens; <b>(b)</b> Solanaceae has K + C and epipetalous stamens; <b>(d)</b> Brassicaceae has tetradynamous stamens.',
        ],
        ans: '(c).',
      },
      {
        t: 'ex',
        tag: 'NEET / match the columns',
        q: 'Match the family with its fruit:<br>Column I (family): P. Fabaceae; Q. Solanaceae; R. Liliaceae.<br>Column II (fruit): 1. capsule; 2. legume; 3. berry.',
        steps: [
          '<b>Elimination logic:</b> Fabaceae’s defining fruit is the pod = legume → <b>P–2</b>. Solanaceae’s classic fruit is the berry (tomato) → <b>Q–3</b>. The remainder, correct for the lily family, is the capsule → <b>R–1</b>.',
        ],
        ans: 'P–2, Q–3, R–1.',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty / Assertion–Reason',
        q: '<b>Assertion (A):</b> In Fabaceae the androecium is described as diadelphous. <b>Reason (R):</b> Nine stamens are fused by their filaments into one bundle while the tenth stamen remains free. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
        steps: [
          '<b>Reasoning:</b> Test A: Fabaceae stamens are indeed diadelphous, so A is <b>true</b>. Test R: “diadelphous” here means a (9) + 1 arrangement: nine fused, one free; R states exactly this, so R is <b>true</b> and it is the definition underlying A: R correctly explains A.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the floral formula of family Liliaceae and state its placentation and fruit type.',
            a: `${LIL} (superior); axile placentation; capsule.`,
          },
          {
            q: '[CUET] Which family is characterised by a papilionaceous corolla and diadelphous stamens?',
            a: 'Fabaceae.',
          },
          {
            q: '[NEET] Name the modification of stem in: (i) <i>Opuntia</i>, (ii) <i>Agave</i>, (iii) <i>Asparagus</i>.',
            a: '(i) phylloclade, (ii) bulbil, (iii) cladode (phylloclade with one or a few internodes).',
          },
          {
            q: '[NEET] Distinguish “complete flower” from “trimerous flower.”',
            a: 'Complete = all four whorls present; trimerous = each whorl has parts in multiples of three (a merosity term, independent of completeness).',
          },
          {
            q: '[NEET high-difficulty] A plant has basal linear leaves with parallel venation, six petaloid tepals, six epiphyllous stamens and a tricarpellary superior ovary with axile placentation. Identify the family and write its floral formula.',
            a: `Liliaceae; ${LIL}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The floral formula ${FAB} belongs to:`,
        opts: [
          { label: 'Solanaceae', nudge: '<b>(a)</b> is actinomorphic ⊕ with A<sub>5</sub>.' },
          { label: 'Liliaceae', nudge: '<b>(b)</b> has tepals P<sub>(3+3)</sub>.' },
          { label: 'Fabaceae', nudge: null },
          { label: 'Brassicaceae', nudge: '<b>(d)</b> has tetradynamous stamens.' },
        ],
        correct: 2,
        solution: 'Zygomorphic (%), papilionaceous corolla (1 + 2 + 2), diadelphous stamens (9 + 1), monocarpellary superior ovary: the <b>Fabaceae</b> signature.',
      },
      {
        t: 'mcq',
        q: 'A phylloclade is a modification of the:',
        opts: [
          { label: 'leaf', nudge: '<b>(a)</b> a phylloclade is not a leaf.' },
          { label: 'stem', nudge: null },
          { label: 'root', nudge: '<b>(c)</b> is unrelated.' },
          { label: 'petiole', nudge: '<b>(d)</b> describes the look-alike <b>phyllode</b>, a flattened petiole (<i>Acacia</i>): the classic confusion.' },
        ],
        correct: 1,
        solution:
          'A phylloclade is a flattened or cylindrical green <b>stem</b> that takes over photosynthesis in xerophytes (<i>Opuntia</i>, <i>Euphorbia</i>).',
      },
      {
        t: 'mcq',
        q: 'Tepals are found in which family (among these)?',
        opts: [
          {
            label: 'Fabaceae',
            nudge: '<b>(a)</b> and <b>(c)</b> both have distinct calyx and corolla, so <b>(d)</b> is wrong.',
          },
          { label: 'Liliaceae', nudge: null },
          {
            label: 'Solanaceae',
            nudge: '<b>(a)</b> and <b>(c)</b> both have distinct calyx and corolla, so <b>(d)</b> is wrong.',
          },
          {
            label: 'all of these',
            nudge: '<b>(a)</b> and <b>(c)</b> both have distinct calyx and corolla, so <b>(d)</b> is wrong.',
          },
        ],
        correct: 1,
        solution:
          'When calyx and corolla are indistinguishable, the whorl is a <b>perianth</b> of <b>tepals</b>, the Liliaceae condition (P<sub>(3+3)</sub>).',
      },
      {
        t: 'mcq',
        q: 'An epicalyx, an extra whorl outside the calyx, is seen in:',
        opts: [
          { label: 'tomato', nudge: null },
          { label: 'China rose (<i>Hibiscus</i>)', nudge: null },
          { label: 'onion', nudge: null },
          { label: 'pea', nudge: null },
        ],
        correct: 1,
        solution:
          '<i>Hibiscus</i> (China rose) and cotton bear an <b>epicalyx</b> below the true calyx. The other three lack it. This rounds out the “whorls of the flower” idea introduced in Topic 02.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Mixing the three formulae.</b> Anchor one signature word per family: Fabaceae = diadelphous/papilionaceous; Solanaceae = epipetalous/berry; Liliaceae = tepals/epiphyllous.',
          '<b>Perianth vs calyx + corolla.</b> Liliaceae has one undifferentiated whorl (tepals, P), not separate K and C.',
          '<b>Phylloclade vs phyllode.</b> Phylloclade = modified <b>stem</b> (<i>Opuntia</i>); phyllode = modified <b>petiole/leaf</b> (<i>Acacia</i>). Same green flattened look, different organ.',
          '<b>Complete vs merous.</b> “Complete” counts whorls (4 present); “tri/tetra/pentamerous” counts parts per whorl. Independent ideas.',
          '<b>Description out of order.</b> Always habit → vegetative → floral → fruit/seed; per-field marking punishes a scrambled answer.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & accuracy):</b><br>• For any “identify the family” item, run the two-question filter: zygomorphic + papilionaceous? → Fabaceae; else K+C or tepals? → Solanaceae vs Liliaceae.<br>• For economic-importance items, group by family: Fabaceae = pulses/oils; Solanaceae = food/spice/tobacco; Liliaceae = onion-garlic/<i>Aloe</i>/ornamentals.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Semi-technical order',
            note: 'habit → root → stem → leaf → inflorescence → flower → K → C → A → G → fruit → seed → floral diagram + formula.',
          },
          { f: 'Fabaceae', note: `${FAB} · papilionaceous · diadelphous · marginal · legume · pulses.` },
          { f: 'Solanaceae', note: `${SOL} · epipetalous · axile · berry · potato/tomato.` },
          { f: 'Liliaceae', note: `${LIL} · tepals · epiphyllous · axile · capsule · onion/<i>Aloe</i>.` },
          { f: 'Symbols', note: '⊕ radial, % bilateral; ⚥ bisexual; ( ) fused; ∞ many; line below G = superior.' },
        ],
        aids: [
          'Family signatures → “<b>Faba Fights (zygo, diadelphous), Solana Sticks (epipetalous berry), Lily Lifts tepals (epiphyllous).</b>”',
          'Fabaceae corolla → “<b>Standard, Wings, Keel</b>” (vexillary).',
          `Liliaceae → “<b>3+3 all the way</b>” (P<sub>(3+3)</sub>, A<sub>3+3</sub>, ${G3}).`,
        ],
      },

      { t: 'part', title: 'Appendix: Chapter completeness notes' },
      {
        t: 'p',
        html: 'Items NCERT lists that complete Chapter 5 coverage; cross-referenced to where the main treatment lives.',
      },
      {
        t: 'p',
        html: '<b>Stem modifications (extends Topic 01):</b><br>• <b>Phylloclade</b>: flattened/cylindrical green photosynthetic stem of xerophytes; leaves reduced to spines (<i>Opuntia</i>, <i>Euphorbia</i>, <i>Casuarina</i>; in <i>Casuarina</i> the green jointed branchlets are the stems and the leaves are tiny scales).<br>• <b>Cladode</b>: a phylloclade of one or a few internodes (<i>Asparagus</i>, <i>Ruscus</i>).<br>• <b>Bulbil</b>: a fleshy vegetative bud that detaches and propagates the plant (<i>Agave</i>, <i>Dioscorea</i>, <i>Oxalis</i>, <i>Globba</i>).',
      },
      {
        t: 'p',
        html: '<b>Flower: descriptive terms (extends Topic 02):</b><br>• <b>Bracteate / ebracteate</b>: a flower with / without a bract (reduced leaf) at the base of its pedicel.<br>• <b>Merosity</b> (parts per whorl): <b>trimerous</b> (3s, typical of monocots), <b>tetramerous</b> (4s), <b>pentamerous</b> (5s, typical of dicots).<br>• <b>Complete / incomplete</b>: a complete flower has all four whorls (calyx, corolla, androecium, gynoecium); an incomplete flower lacks one or more.<br>• <b>Perianth / tepals</b>: the undifferentiated whorl when calyx and corolla look alike (lily).<br>• <b>Epicalyx</b>: an additional whorl just outside the calyx (<i>Hibiscus</i>, cotton).',
      },
      {
        t: 'p',
        html: '<b>Chapter 5 master map, where each topic lives:</b><br>• <b>Topic 01:</b> Root (types, regions, modifications) · Stem (features, modifications) · Leaf (parts, venation, phyllotaxy, modifications).<br>• <b>Topic 02:</b> Inflorescence (racemose/cymose) · Flower (symmetry, aestivation, cohesion/adhesion, ovary position, placentation, floral formula/diagram).<br>• <b>Topic 03:</b> Fruit (pericarp, true/false, parthenocarpic, drupe) · Seed (dicot/monocot, albuminous/ex-albuminous, perisperm) · Solanaceae.<br>• <b>Topic 04:</b> Semi-technical description · Families Fabaceae & Liliaceae (Solanaceae recap) · completeness terms above.',
      },
    ],
  },
];
