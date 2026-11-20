import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 6 (Anatomy of Flowering Plants), Additional topics A to G, word for
 * word from the Class 11 Biology Master Reference, pp. 383 to 406. p. 383 opens the shared
 * introduction ("Chapter 6: Anatomy of Flowering Plants: Additional Topics"), which is the
 * first paragraph of A's Introduction. Topics (index in the chapter's array): A 4
 * (pp. 383 to 385), B 5 (pp. 386 to 388), C 6 (pp. 388 to 390), D 7 (pp. 390 to 392),
 * E 8 (pp. 392 to 395), F 9 (pp. 395 to 398) and G 10, "What NEET Actually Asks" (the
 * book's "Addendum P", p. 398 to p. 406). No page of this range holds a drawing (the
 * stomatal types, bundle types and every other table are plain tables), so no fig id is used.
 *
 * The book's example headings ("Example A.1 - [CBSE Board Level] Tracing ...") become the
 * example's tag (the bracket) and a bold lead on its question. A table the book prints
 * inside an example (Column I and Column II lists, the Dicot Root and Dicot Stem table) is
 * set as labelled lines inside that question. Scientific names are italic; family names
 * (Cucurbitaceae) and common names are upright. The book's "Answer" line is the example's ans.
 */
export const TOPICS: Topic[] = [
  // ───────────── Additional topic A · Embryological Origin of Tissue Systems · pp. 383 to 385 ─────────────
  {
    n: 'A',
    title: 'Embryological Origin of Tissue Systems',
    extra: true,
    kalam: 'Every tissue in the primary plant body arises from one of three primary meristems.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This section extends Chapter 6 with six topics that NEET and CBSE questions often draw on (by the book’s estimate, not official figures): the embryological origin of the tissue systems from the three primary meristems; the stomatal apparatus, its types and the stomatal index; the full range of vascular bundle types, including amphicribral and amphivasal forms; anomalous secondary growth in certain monocots; the commercial products that come from particular plant tissues; and an integrated cross-organ identification ladder that replaces rote memorisation. A final section, Additional topic G, shows how NEET frames questions from this chapter. Each additional topic is built on the diagnostic features the chapter already provides.<br><br>The chapter introduces the three tissue systems (epidermal, ground, vascular) as finished products and lists their components. It does not trace those components back to their embryological source, beyond two remarks in Topic 04: that the intrafascicular cambium is leftover procambium, and that the procambium gives the primary vascular tissue. Every tissue in the primary plant body arises from one of three primary meristems: the <b>protoderm</b> gives the epidermal system, the <b>ground meristem</b> gives the ground tissue system, and the <b>procambium</b> gives the vascular tissue system. Standard plant-anatomy texts give this sequence, and it is a common exam pairing (the book’s estimate, not official).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'The three-primary-meristem framework (trace any primary tissue to its source)',
        steps: [
          '<b>Protoderm</b>: outermost primary meristem. Divides to produce all epidermal tissues: epidermis (of root, stem, leaf), root hairs, trichomes, and the stomatal apparatus. Never produces xylem or phloem directly.',
          '<b>Ground meristem</b>: central primary meristem. Divides to produce the ground tissues: cortex (including the hypodermis and the endodermis), pith, medullary rays, and the mesophyll of leaves.',
          '<b>Procambium</b>: strand-forming primary meristem. Divides to produce primary xylem (inward) and primary phloem (outward) in a conjoint stem bundle. Continuous strands of procambium become vascular bundles.',
        ],
      },
      {
        t: 'p',
        html: '<b>Memory hook.</b> Protoderm = “first skin”; ground meristem = “filler between skin and pipes”; procambium = “first conducting strand.”',
      },
      {
        t: 'p',
        html: '<b>NCERT exactness check.</b> In a dicot stem the innermost layer of the cortex is the endodermis; its cells are rich in starch, so it is also called the <b>starch sheath</b>, and it belongs to the ground tissue system. The pericycle lies just inside the endodermis, as part of the stele: it gives rise to lateral roots and, in dicot roots, contributes to the vascular cambium during secondary growth.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Tracing Tissue Origin in a Dicot Root.</b> Name the primary meristem of embryological origin and the tissue it produces for each of the following in a dicot root: (i) the piliferous layer with root hairs, (ii) the endodermis with Casparian thickenings, (iii) the xylem vessels in the stele.',
        steps: [
          '<b>Reasoning.</b> The piliferous layer (root epidermis, from which root hairs arise) is derived from the protoderm, the outermost primary meristem. The endodermis with Casparian strips is derived from the ground meristem: it is the innermost layer of the cortex and belongs to the ground tissue system. The xylem vessels are derived from the procambium: the procambium strands differentiate into primary xylem and primary phloem (on separate radii in a root, with protoxylem exarch).',
        ],
        ans: '(i) Protoderm → piliferous layer (epidermis/root hairs); (ii) Ground meristem → endodermis; (iii) Procambium → primary xylem vessels.',
      },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Match the Column.</b><br>Column I (Tissue/Structure): A. Stomatal apparatus; B. Pith; C. Intrafascicular cambium; D. Cork cambium (phellogen)<br>Column II (Meristem of Origin): i. Protoderm; ii. Ground meristem; iii. Procambium; iv. Not from a primary meristem (arises from mature permanent cells)',
        steps: [
          '<b>Reasoning.</b> The stomatal apparatus is part of the epidermal system → protoderm (i). The pith is ground tissue → ground meristem (ii). The intrafascicular cambium is the strip of meristem left between primary xylem and primary phloem, so it comes from the procambium strand → procambium (iii). The cork cambium is a lateral (secondary) meristem: it arises later from permanent cells and is not produced by a primary meristem (iv).',
        ],
        ans: 'A-i, B-ii, C-iii, D-iv. Common trap: confusing procambium (gives vascular tissue) with ground meristem (gives cortex, endodermis, pith).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Assertion–Reason.</b> Assertion (A): In a dicot stem, the endodermis is also called the starch sheath. Reason (R): The endodermis cells of a dicot stem are rich in starch.<br>(a) Both A and R true, R is the correct explanation of A<br>(b) Both A and R true, R is not the correct explanation of A<br>(c) A true, R false<br>(d) A false, R true',
        steps: [
          '<b>Reasoning.</b> The innermost cortical layer in dicot stems is the endodermis, and its cells are rich in starch, which is why it is also called the “starch sheath”. R is true, and it is the reason for the name: the name follows from the starch the cells store. (The ground-meristem origin of the endodermis is a separate fact; it does not explain the name.)',
        ],
        ans: '(a). The name follows from the starch stored in the endodermis cells.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] From which primary meristem does the pith of a dicot stem originate?',
            a: 'Ground meristem. Pith is a ground tissue produced by the central ground meristem. (Protoderm produces epidermis; procambium produces vascular tissue.)',
          },
          {
            q: '[CBSE] Name the tissue produced by procambium on its inner and outer faces.',
            a: 'Procambium produces primary xylem on its inner face and primary phloem on its outer face (in a conjoint stem bundle). (A strip of procambium left between them stays meristematic and becomes the intrafascicular cambium.)',
          },
          {
            q: '[NEET] A tissue shows thick walls thickened only at corners, living protoplast, no intercellular spaces. From which primary meristem does its precursor arise?',
            a: 'Collenchyma is a ground tissue (simple permanent tissue of the ground system) → ground meristem. (It is not protoderm because the protoderm gives only epidermal structures.)',
          },
          {
            q: '[NEET] Distinguish between the role of the pericycle in dicot roots versus monocot roots, in terms of what it produces in each.',
            a: 'In dicot roots, the pericycle produces lateral roots and contributes cells to the vascular cambium ring. In monocot roots, the pericycle produces lateral roots only: monocot roots show no secondary growth, so it contributes to no cambium.',
          },
          {
            q: '[NEET, High Difficulty] In a herbaceous dicot stem, trace the complete embryological origin of the following in sequence from the three primary meristems: (a) epidermis with stomata, (b) collenchyma in hypodermis, (c) xylem vessels in a vascular bundle, (d) phloem sieve tubes.',
            a: '(a) Protoderm → epidermis → stomatal apparatus (guard cells and subsidiary cells).<br>(b) Ground meristem → ground tissue → cortex → collenchyma (thickened corners, living).<br>(c) Procambium → primary xylem (inward, with protoxylem in endarch position in stems).<br>(d) Procambium → primary phloem (outward, with sieve tube elements and companion cells). The procambium strand gives both xylem and phloem in the conjoint, collateral bundle.',
          },
        ],
      },
    ],
  },

  // ───────────── Additional topic B · Stomatal Apparatus: Types and Stomatal Index · pp. 386 to 388 ─────────────
  {
    n: 'B',
    title: 'Stomatal Apparatus: Types and Stomatal Index',
    extra: true,
    kalam: 'The index gives the percentage of stomata among all the epidermal units counted (stomata plus epidermal cells).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter names guard-cell shapes (kidney in dicots, dumb-bell in grasses) and identifies subsidiary cells as surrounding the guard cells. It does not develop the systematic classification of stomatal types (anomocytic, anisocytic, paracytic, diacytic) nor does it introduce the <b>stomatal index</b>: a simple quantitative measure of stomatal frequency used in practical botany, and a calculation that is easy to set as a numerical question. Both can be worked out from the anatomy you already know.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'table',
        title: 'Stomatal types (based on subsidiary cell number and arrangement around guard cells)',
        head: ['Type', 'Subsidiary Cells', 'Description'],
        rows: [
          [
            'Anomocytic (ranunculaceous)',
            'None: surrounding epidermal cells are ordinary',
            'Guard cells surrounded by ordinary epidermal cells; no distinct subsidiary cells',
          ],
          [
            'Anisocytic (cruciferous)',
            'Three subsidiary cells, one distinctly smaller',
            'Guard cells surrounded by three subsidiary cells of unequal size',
          ],
          [
            'Paracytic (rubiaceous)',
            'Two subsidiary cells parallel to guard cells',
            'One subsidiary cell on each side, lying parallel to the guard cells',
          ],
          [
            'Diacytic (caryophyllaceous)',
            'Two subsidiary cells at right angles to guard cells',
            'Guard cells enclosed by a pair of subsidiary cells whose common wall is at right angles to the guard cells',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Grass stomata.</b> Grass stomata (e.g., wheat, barley) have dumbbell-shaped guard cells with two subsidiary cells, one on each side and parallel to the guard cells: the paracytic (graminaceous) pattern. Dicot stomata (e.g., sunflower, <i>Solanum</i>) have kidney-shaped guard cells; their arrangement varies (anomocytic, anisocytic, paracytic or diacytic).',
      },
      {
        t: 'formula',
        kicker: 'Stomatal index formula (dimensionless, expressed as percentage)',
        main: '<i>SI</i> = <frac><num><i>S</i></num><den><i>E</i> + <i>S</i></den></frac> × 100',
        legend: [
          '<i>S</i> = number of stomata per unit area',
          '<i>E</i> = number of epidermal cells (including subsidiary cells) in the same unit area',
        ],
        note: 'The index gives the percentage of stomata among all the epidermal units counted (stomata plus epidermal cells).',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> Both <i>S</i> and <i>E</i> are counts (dimensionless). <i>SI</i> is a percentage.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Stomatal Index Calculation.</b> A student counts 24 stomata and 76 epidermal cells in one microscopic field of a leaf epidermis. Calculate the stomatal index.',
        steps: [
          '<b>Reasoning.</b> Apply the formula directly: <i>SI</i> = <frac><num><i>S</i></num><den><i>E</i> + <i>S</i></den></frac> × 100. Substituting: <i>S</i> = 24, <i>E</i> = 76.',
          '<i>SI</i> = <frac><num>24</num><den>24 + 76</den></frac> × 100 = <frac><num>24</num><den>100</den></frac> × 100',
        ],
        ans: 'Stomatal index = 24%: about one in four of the epidermal units counted is a stoma.',
      },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Stomatal Type Identification.</b> A leaf epidermal peel shows guard cells with no distinct subsidiary cells: the guard cells are simply surrounded by ordinary epidermal cells of varying sizes. Name the stomatal type.',
        steps: [
          '<b>Reasoning.</b> The diagnostic feature of anomocytic (ranunculaceous) stomata is the complete absence of specialised subsidiary cells. The guard cells are surrounded by ordinary epidermal cells that look no different from the rest of the epidermis. This matches the anomocytic description exactly.',
        ],
        ans: 'Anomocytic stomata (also called ranunculaceous type). Anisocytic would show three unequal subsidiary cells; paracytic would show parallel subsidiary cells.',
      },
      {
        t: 'ex',
        tag: 'CUET Level',
        q: '<b>Subsidiary Cells in Grasses.</b> In a grass leaf, the guard cells are dumbbell-shaped. How many subsidiary cells typically accompany each pair of guard cells, and what is the stomatal type called?',
        steps: [
          '<b>Reasoning.</b> Grass guard cells are dumbbell-shaped and are accompanied by subsidiary cells. The guard cells are flanked by one subsidiary cell on each side, both lying parallel to the guard cells. That parallel arrangement is the paracytic pattern, and the dumbbell shape + two parallel subsidiary cells is the defining combination for grass stomata.',
        ],
        ans: 'Two subsidiary cells, one on each side and parallel to the dumbbell-shaped guard cells; the type is paracytic (graminaceous) stomata.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] What is the stomatal index formula? Define each term.',
            a: '<i>SI</i> = <frac><num><i>S</i></num><den><i>E</i> + <i>S</i></den></frac> × 100, where <i>S</i> = number of stomata per unit area and <i>E</i> = number of epidermal cells in the same unit area.',
          },
          {
            q: '[CBSE] A leaf has 18 stomata and 42 epidermal cells in the microscopic field. Calculate the stomatal index.',
            a: '<i>SI</i> = <frac><num>18</num><den>18 + 42</den></frac> × 100 = <frac><num>18</num><den>60</den></frac> × 100 = 30%.',
          },
          {
            q: '[NEET] Name the stomatal type in which two subsidiary cells lie parallel to the long axis of the guard cells.',
            a: 'Paracytic stomata (rubiaceous type). The subsidiary cells are parallel to the guard cells.',
          },
          {
            q: '[NEET] In which plants are dumbbell-shaped guard cells found, how many subsidiary cells accompany each guard-cell pair, and what stomatal type does this represent?',
            a: 'Grasses (and sedges); two subsidiary cells, one on each side of the guard cells; paracytic (graminaceous) stomata.',
          },
          {
            q: '[NEET, High Difficulty] Two leaves, A and B, have stomatal indices of 10% and 35% respectively. Let <i>T</i> = <i>E</i> + <i>S</i> be the same total number of epidermal cells plus stomata per unit area in both leaves. Calculate the number of stomata in each leaf in terms of <i>T</i> (and for <i>T</i> = 200). If leaf A is a grass and leaf B is a dicot, predict which anatomical feature of the stomatal apparatus would distinguish them most clearly.',
            a: 'For leaf A: <i>SI</i> = 10 = <frac><num><i>S</i></num><den><i>T</i></den></frac> × 100 ⇒ <i>S</i> = 0.10 <i>T</i>. For leaf B: <i>SI</i> = 35 = <frac><num><i>S</i></num><den><i>T</i></den></frac> × 100 ⇒ <i>S</i> = 0.35 <i>T</i>. For <i>T</i> = 200 this gives 20 stomata in leaf A and 70 in leaf B. Guard cell shape distinguishes them: leaf A (a grass) has dumbbell-shaped guard cells with two parallel subsidiary cells; leaf B (dicot) has kidney-shaped guard cells.',
          },
        ],
      },
    ],
  },

  // ───────────── Additional topic C · Vascular Bundle Variations Beyond the Standard Types · pp. 388 to 390 ─────────────
  {
    n: 'C',
    title: 'Vascular Bundle Variations Beyond the Standard Types',
    extra: true,
    kalam: 'In a bicollateral bundle, the xylem occupies the centre and a band of phloem lies on both its inner and outer faces.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter names radial bundles (root) and conjoint bundles (stem/leaf), distinguishes open from closed, and identifies collateral arrangement. It also mentions bicollateral bundles. Two further geometries that exams test (the book’s estimate, not official) are named in one line in Topic 03 but not developed: <b>amphicribral</b> bundles (phloem surrounding xylem) and <b>amphivasal</b> bundles (xylem surrounding phloem), both found in certain plant groups. This additional topic also works through the <i>Cucurbita</i> example that boards favour for bicollateral bundles.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'table',
        title: 'Vascular bundle taxonomy: radial bundles, and conjoint bundles (collateral open, collateral closed, bicollateral, amphicribral, amphivasal)',
        head: ['Bundle Type', 'Geometry', 'Xylem–Phloem Relationship', 'Typical Location'],
        rows: [
          ['Radial', 'Xylem and phloem on separate radii', 'Alternating bundles', 'Dicot and monocot roots'],
          ['Collateral', 'Xylem and phloem on same radius', 'Phloem outside, xylem inside', 'Most dicot and monocot stems, leaves'],
          ['Open (collateral)', 'Collateral with cambium', 'Cambium present', 'Dicot stems'],
          ['Closed (collateral)', 'Collateral without cambium', 'Cambium absent', 'Monocot stems'],
          ['Amphicribral', 'Phloem forms a complete ring around xylem', 'Xylem central, surrounded by phloem', 'Some pteridophytes (ferns)'],
          ['Amphivasal', 'Xylem forms a complete ring around phloem', 'Phloem central, surrounded by xylem', 'Certain monocots (e.g., <i>Dracaena</i>)'],
          [
            'Bicollateral',
            'Phloem on both sides of xylem',
            'Xylem central, phloem outside on both inner and outer faces',
            '<i>Cucurbita</i> (pumpkin) stem, other Cucurbitaceae, and some Solanaceae and Convolvulaceae',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Memory hook.</b> “Amphicribral” = “amphi” (around) + “cribrum” (sieve, phloem). Phloem surrounds xylem. “Amphivasal” = “amphi” + “vas” (vessel, xylem). Xylem surrounds phloem. “Bicollateral” = “bi” (two) + “collateral”. Two phloem flanks.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Amphicribral Bundle Identification.</b> A transverse section of a plant stem shows a vascular bundle in which xylem forms a central strand completely surrounded by a ring of phloem. Name this bundle type and state one plant group where it occurs.',
        steps: [
          '<b>Reasoning.</b> The defining feature is xylem at the centre, phloem encircling it: this is amphicribral (“phloem-around-xylem”). It is the inverse of the amphivasal arrangement (xylem around phloem). Amphicribral bundles occur in certain pteridophytes (ferns).',
        ],
        ans: 'Amphicribral bundle. Found in certain pteridophytes (ferns).',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Bicollateral Bundle in a Pumpkin Stem.</b> Name the type of vascular bundle found in the stem of <i>Cucurbita</i> (pumpkin) and describe the arrangement of xylem and phloem within it.',
        steps: [
          '<b>Reasoning.</b> <i>Cucurbita</i> stems are the standard textbook example of bicollateral bundles. In a bicollateral bundle, the xylem occupies the centre and a band of phloem lies on both its inner (adaxial) and outer (abaxial) faces. This is in contrast to the standard collateral bundle of dicot stems, which has phloem only on the outer face. The inner phloem is usually smaller than the outer phloem.',
        ],
        ans: 'Bicollateral vascular bundle. Xylem forms a central strand with a cap of phloem on its outer face (as in a normal collateral bundle) and a second, smaller cap of phloem on its inner face, next to the pith; a strip of cambium lies between the xylem and the outer phloem, and often a less active one between the xylem and the inner phloem.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] What is an amphivasal vascular bundle?',
            a: 'An amphivasal bundle is one in which xylem forms a complete ring around centrally located phloem. (Compare amphicribral: phloem surrounds central xylem.)',
          },
          {
            q: '[NEET] Name two types of vascular bundles in which xylem completely surrounds phloem or vice versa.',
            a: 'Amphicribral (phloem surrounds xylem) and amphivasal (xylem surrounds phloem).',
          },
          {
            q: '[NEET] State one anatomical feature that distinguishes a bicollateral bundle from a collateral open bundle.',
            a: 'A bicollateral bundle has phloem on both the inner and outer faces of the central xylem, whereas a collateral open bundle has phloem only on the outer face (xylem on the inside, cambium present). The presence of inner phloem is the distinguishing feature.',
          },
          {
            q: '[CBSE] Name the plant in which bicollateral bundles are typically studied, and state the arrangement of tissues around the central xylem in such a bundle.',
            a: '<i>Cucurbita</i> (pumpkin) or any other member of Cucurbitaceae (bicollateral bundles also occur in some Solanaceae and Convolvulaceae). Around the central xylem strand: outer phloem with a cambium strip between it and the xylem, and inner phloem (smaller, facing the pith), often with a second, less active cambium strip.',
          },
          {
            q: '[NEET, High Difficulty] (i) In a transverse section of a <i>Dracaena</i> stem, a vascular bundle shows xylem forming a complete ring around centrally located phloem. (ii) In a transverse section of a fern rhizome, a bundle shows phloem forming a complete ring around centrally located xylem. Classify both bundle types and state the plant group or genus in which each is found.',
            a: '(i) Amphivasal: xylem surrounds central phloem. Found in <i>Dracaena</i> (a monocot with anomalous secondary growth). (ii) Amphicribral: phloem surrounds central xylem. Found in certain pteridophytes (ferns). (Both are non-collateral arrangements; the contrast between them tests the “amphi” prefix understanding.)',
          },
        ],
      },
    ],
  },

  // ───────────── Additional topic D · Anomalous Secondary Growth · pp. 390 to 392 ─────────────
  {
    n: 'D',
    title: 'Anomalous Secondary Growth',
    extra: true,
    kalam: 'The chapter states clearly that monocots generally lack secondary growth because their vascular bundles are closed (no cambium).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter states clearly that monocots generally lack secondary growth because their vascular bundles are closed (no cambium). The exception, certain monocots that thicken by a different mechanism, is only mentioned there (<i>Dracaena</i> is named in Topic 04). It lies beyond NCERT, but it explains the one well-known exception to the rule, so it is worked through here.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Anomalous secondary growth (monocot exception mechanism).</b><br>Normal monocot stems (e.g., maize): closed, scattered bundles; no cambium; no secondary growth.<br>Anomalous monocot secondary growth (e.g., <i>Dracaena</i>, <i>Yucca</i>, <i>Agave</i>, <i>Aloe</i>): these monocots produce secondary tissue by a different cambium, typically a <b>cortical cambium</b> or <b>parenchymatous cambium</b> arising in the ground tissue, that produces vascular bundles (xylem and phloem) in an anomalous (non-ring) arrangement.',
      },
      {
        t: 'table',
        title: 'Key contrast with dicot secondary growth',
        head: ['Feature', 'Dicot Secondary Growth', '<i>Dracaena</i>-type Anomalous Growth'],
        rows: [
          ['Cambium origin', 'Vascular cambium (intrafascicular + interfascicular)', 'Cortical/parenchymatous cambium'],
          ['Bundle arrangement', 'Rings of wood (concentric rings)', 'Scattered bundles (no ring formation)'],
          ['Vascular bundles', 'Secondary xylem and secondary phloem added by a continuous cambial cylinder', 'New bundles cut off inward, embedded in conjunctive tissue (no rings of wood)'],
          ['Cambium position', 'Between xylem and phloem in bundles', 'In cortex, outside existing bundles'],
        ],
      },
      {
        t: 'p',
        html: '<b>Note.</b> The NCERT rule is that monocots lack secondary growth. <i>Dracaena</i> is a rare exception beyond NCERT, described in standard plant-anatomy texts. The mechanism differs fundamentally: instead of a vascular cambium that adds rings of secondary xylem, a separate cambium outside the primary bundles cuts off new vascular bundles, embedded in conjunctive tissue, mainly toward the inside.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Assertion–Reason on Monocot Secondary Growth.</b> Assertion (A): <i>Dracaena</i>, a monocot, shows secondary growth even though monocots generally lack cambium in their vascular bundles. Reason (R): <i>Dracaena</i> produces a cortical cambium that generates new vascular bundles scattered in the ground tissue, unlike the vascular cambium of dicots that produces concentric rings.<br>(a) Both A and R true, R is the correct explanation of A<br>(b) Both A and R true, R is not the correct explanation of A<br>(c) A true, R false<br>(d) A false, R true',
        steps: [
          '<b>Reasoning.</b> A is true: <i>Dracaena</i> (a monocot) does show secondary growth. R is true: the mechanism is a cortical cambium that produces new bundles in conjunctive tissue, not the vascular cambium ring that produces concentric wood. And R is precisely the mechanism: the different cambium type explains why the secondary growth of <i>Dracaena</i> looks different from dicot wood (scattered bundles vs concentric rings).',
        ],
        ans: '(a). The “anomalous” descriptor refers to the non-standard mechanism, not to any false statement.',
      },
      {
        t: 'ex',
        tag: 'CUET Level',
        q: '<b>Distinguishing Dicot Wood from Anomalous Monocot Wood.</b> State one anatomical feature that would distinguish a transverse section of dicot wood from that of a monocot showing anomalous secondary growth.',
        steps: [
          '<b>Reasoning.</b> In dicot wood (from a vascular cambium ring), secondary xylem is deposited in concentric annual rings. In <i>Dracaena</i>-type anomalous wood (from a cortical cambium), new vascular bundles are produced embedded in a zone of conjunctive tissue inside the cambium: they do not form concentric rings. The presence or absence of concentric ring organisation in the secondary tissue is the distinguishing feature.',
        ],
        ans: 'Concentric annual rings of secondary xylem are present in dicot wood (from vascular cambium ring) but absent in anomalous monocot wood (from cortical cambium), where vascular bundles remain scattered.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] Name two monocot genera that show anomalous secondary growth.',
            a: '<i>Dracaena</i>, <i>Yucca</i>, <i>Agave</i>, <i>Aloe</i> (any two); <i>Dracaena</i> is the most common textbook example.',
          },
          {
            q: '[CBSE] State the key difference in cambium type between dicot secondary growth and <i>Dracaena</i>-type secondary growth.',
            a: 'Dicot: vascular cambium (intrafascicular + interfascicular) forms a continuous ring. <i>Dracaena</i>: cortical (or parenchymatous) cambium arises separately in the cortex and produces new bundles.',
          },
          {
            q: '[NEET] What is the arrangement of vascular bundles in anomalous secondary growth of monocots?',
            a: 'Scattered (the book’s answer): new vascular bundles are produced by the cortical cambium, remaining distributed rather than forming a continuous cylindrical ring. They lie embedded in a zone of conjunctive tissue inside the cambium, not in concentric rings.',
          },
          {
            q: '[NEET, High Difficulty] A student observes a transverse section of a monocot stem showing secondary growth. The secondary tissue shows scattered vascular bundles rather than concentric rings. Identify the growth type and name the plant genus most likely being observed, giving one anatomical reason why this is not typical dicot secondary growth.',
            a: 'Anomalous secondary growth in monocots (<i>Dracaena</i>-type). Plant genus: <i>Dracaena</i>. Reason: in dicot secondary growth, the vascular cambium produces concentric rings of secondary xylem (wood). In <i>Dracaena</i>, the cortical cambium produces vascular bundles embedded in a zone of conjunctive tissue inside the cambium, so no concentric rings form. This is a fundamentally different anatomical mechanism despite both producing increased girth.',
          },
        ],
      },
    ],
  },

  // ───────────── Additional topic E · Commercial Plant Products and Anatomical Sources · pp. 392 to 395 ─────────────
  {
    n: 'E',
    title: 'Commercial Plant Products and Anatomical Sources',
    extra: true,
    kalam: 'Phloem fibres (also called bast fibres) are dead sclerenchymatous cells of the phloem that provide mechanical strength.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter connects anatomy to everyday materials in the secondary growth section (timber, mostly from heartwood, cork from the phellem of <i>Quercus suber</i>). This applied angle can be extended: NEET has asked about commercial fibre sources (the book’s estimate, not official), and the anatomical tissue type producing each is directly testable. These questions reward linking the tissue tables in the chapter to the economic products that boards treat as implicit knowledge.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'table',
        title: 'Commercial products and their anatomical sources (each traced to a tissue the chapter describes)',
        head: ['Product', 'Plant source', 'Tissue Type', 'Cell Type'],
        rows: [
          ['Jute fibre', '<i>Corchorus capsularis</i> (jute plant)', 'Phloem (bast) fibres', 'Phloem fibres (dead, lignified sclerenchyma)'],
          ['Flax fibre', '<i>Linum usitatissimum</i>', 'Phloem (bast) fibres', 'Phloem fibres'],
          ['Hemp fibre', '<i>Cannabis sativa</i>', 'Phloem (bast) fibres', 'Phloem fibres'],
          ['Sunn hemp', '<i>Crotalaria juncea</i>', 'Phloem (bast) fibres', 'Phloem fibres'],
          ['Coconut coir', '<i>Cocos nucifera</i> (husk)', 'Sclerenchyma fibres', 'Sclerenchyma fibres (from fruit husk, not stem phloem)'],
          ['Cork (bottle stopper)', '<i>Quercus suber</i> (cork oak)', 'Phellem (part of the periderm)', 'Dead, suberised cells'],
          ['Timber/wood', 'Trees with secondary growth (dicots and gymnosperms)', 'Secondary xylem', 'Tracheids (and vessels in dicot wood), fibres, parenchyma'],
        ],
      },
      {
        t: 'p',
        html: '<b>Where each tissue is described.</b> Phloem fibres (also called bast fibres) are dead sclerenchymatous cells of the phloem that provide mechanical strength; they appear in the chapter’s treatment of complex tissues. Sclerenchyma fibres and sclereids are described under simple permanent tissues. Cork (phellem) and the cork oak are met in the section on secondary growth, where timber from secondary xylem is also connected to heartwood and sapwood.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Jute Fibre Anatomy.</b> Jute is obtained from the phloem of <i>Corchorus capsularis</i>. Name the tissue, the cell type within that tissue, and state whether these cells are living or dead at maturity.',
        steps: [
          '<b>Reasoning.</b> Jute fibre comes from the phloem (bast), specifically the sclerenchymatous fibres of the phloem. Within the phloem, the cell type providing mechanical strength is the phloem fibre (bast fibre). As the chapter notes, phloem fibres are dead, sclerenchymatous cells with thick lignified walls and simple pits: the same diagnostic features as sclerenchyma among the simple permanent tissues.',
        ],
        ans: 'Tissue: phloem (bast). Cell type: phloem fibres (bast fibres). Living/dead: dead at maturity (sclerenchymatous, lignified, no protoplast).',
      },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Match the Column.</b><br>Column I (Product): A. Cork bottle stopper; B. Jute; C. Sclereids in guava pulp; D. Timber<br>Column II (Anatomical Source): i. Phloem fibres; ii. Phellem (periderm); iii. Sclerenchyma: sclereids; iv. Secondary xylem',
        steps: [
          '<b>Reasoning.</b> Cork stopper → phellem of the cork oak <i>Quercus suber</i>, which is the outer product of the phellogen in periderm → ii. Jute → phloem fibres (bast fibres) of <i>Corchorus</i> → i. Guava pulp sclereids → stone cells, which are sclereids (short, isodiametric, dead, thick-walled) → iii. Timber → secondary xylem, the product of vascular cambium on its inner face → iv.',
        ],
        ans: 'A-ii, B-i, C-iii, D-iv. Common trap: confusing phloem (bast) fibres such as jute with sclerenchyma fibres from other tissues, such as coir from the coconut husk: both are dead and lignified, but jute specifically comes from phloem.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Assertion–Reason on Cork.</b> Assertion (A): Cork is impermeable to water and gases. Reason (R): The phellem cells of cork are dead, and their walls are impregnated with suberin.<br>(a) Both A and R true, R is the correct explanation of A<br>(b) Both A and R true, R is not the correct explanation of A<br>(c) A true, R false<br>(d) A false, R true',
        steps: [
          '<b>Reasoning.</b> A is true: cork (phellem) forms a protective, waterproof layer in the bark. R is true: the phellem cells are dead, without protoplasts, and suberin is deposited in their walls. R also explains A: suberin is a waxy, water-repellent substance, so walls loaded with it do not let water or gases through.',
        ],
        ans: '(a). The impermeability of cork follows directly from the suberised walls of its dead phellem cells.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] Name the plant that yields commercial cork and state its scientific name.',
            a: 'Cork oak; <i>Quercus suber</i>.',
          },
          {
            q: '[CBSE] Distinguish between jute fibre and coconut coir in terms of the tissue from which each is obtained.',
            a: 'Jute fibre comes from phloem (specifically phloem/bast fibres, which are dead sclerenchymatous cells of the phloem). Coconut coir comes from the fruit husk: it is sclerenchyma fibre from the mesocarp of the coconut fruit, not from the stem’s phloem. Both are sclerenchyma fibres but from different organs.',
          },
          {
            q: '[NEET] What type of cells form the gritty texture in pear pulp, and from which simple tissue are these cells derived?',
            a: 'Sclereids (stone cells); derived from sclerenchyma (simple permanent tissue, dead at maturity, thick lignified walls with narrow lumen).',
          },
          {
            q: '[NEET] State two commercial products obtained from sclerenchyma fibres, naming the tissue from which each is derived.',
            a: 'Jute (from phloem fibres/bast fibres of <i>Corchorus capsularis</i>) and flax (from phloem fibres of <i>Linum usitatissimum</i>). Both are phloem fibres: sclerenchymatous cells of the phloem that provide mechanical strength.',
          },
          {
            q: '[NEET, High Difficulty] A plant anatomy student is given a transverse section of a stem and identifies sclerenchyma fibres in the phloem region. (a) What commercial product is most likely derived from this tissue? (b) If the same fibres were found in the cortex rather than the phloem, what would they be called? (c) State one anatomical feature that is common to fibres in both locations.',
            a: '(a) Jute or any bast fibre: commercial fibre from phloem fibres. (b) If in the cortex, they would simply be called sclerenchyma fibres (the tissue is sclerenchyma regardless of location; “phloem fibre” is the location-specific name). (c) Both are dead, thick-walled, lignified, narrow cells with tapering ends and simple pits: the diagnostic features of sclerenchyma fibres.',
          },
        ],
      },
    ],
  },

  // ───────────── Additional topic F · Integrated Cross-Organ Identification Framework · pp. 395 to 398 ─────────────
  {
    n: 'F',
    title: 'Integrated Cross-Organ Identification Framework',
    extra: true,
    kalam: 'The chapter provides individual decision procedures for root, stem, and leaf.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives decision procedures for root, stem and leaf, and its Topic 03 Pro-Tip already resolves a section in two questions. NEET and CUET often set a single unknown section (the book’s estimate, not official). This additional topic sets the procedures out as one numbered ladder, with worked examples covering transitional and ambiguous cases.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>Universal three-step identification ladder for any plant organ T.S.</b>' },
      {
        t: 'p',
        html: '<b>Step 1: Bundle geometry (resolves root vs stem/leaf).</b><br>Ask: are the vascular bundles <b>radial</b> (xylem and phloem on separate, alternating radii) or <b>conjoint</b> (xylem and phloem on the same radius)?<br>• Radial → <b>root</b> (dicot or monocot). Go to Step 2.<br>• Conjoint → <b>stem or leaf</b>. Go to Step 3.',
      },
      {
        t: 'p',
        html: '<b>Step 2: Within the root (radial bundles): dicot vs monocot.</b><br>Count the xylem groups: 2–4 (diarch, triarch, tetrarch) → <b>dicot root</b>. More than six (polyarch) → <b>monocot root</b>. (Five or six groups is uncommon; settle it by the pith.) Confirm with pith: small or absent → dicot. Large, well-developed → monocot. Both dicot and monocot roots are <b>exarch</b>: do not use endarch/exarch here.',
      },
      {
        t: 'p',
        html: '<b>Step 3: Within the stem or leaf (conjoint bundles): dicot vs monocot.</b><br>For <b>stem</b>: ring of bundles → dicot stem. Scattered bundles → monocot stem. For <b>leaf</b>: palisade + spongy mesophyll (two layers) → dicot (dorsiventral). Uniform mesophyll → monocot (isobilateral). Check for bulliform cells (monocot) and stomatal distribution.',
      },
      {
        t: 'p',
        html: '<b>Universal check: the two decisive attributes for the three simple permanent tissues:</b><br>1. Living or dead at maturity?<br>2. Where is the wall thickening (corner, uniform, none)?<br>These two attributes resolve the three simple permanent tissues in nearly every exam question.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Unknown T.S. Identification.</b> You are shown a transverse section with the following features: vascular bundles are conjoint and scattered throughout the ground tissue; no cambium is visible between xylem and phloem; ground tissue is undifferentiated. Identify the organ and plant group.',
        steps: [
          '<b>Reasoning.</b> Apply Step 1: conjoint bundles → stem or leaf. Step 3: scattered bundles in stem → monocot stem (dicot stems have bundles in a ring). No cambium → closed bundles (monocot characteristic). Undifferentiated ground tissue → monocot stem. The combination of conjoint + scattered + closed + undifferentiated ground tissue is the classic pattern of a monocot stem.',
        ],
        ans: 'Monocot stem (e.g., maize). This is the textbook anatomy of a monocot stem, as described in the chapter’s treatment of tissue systems.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Cross-Organ Comparison.</b> Complete the following comparison table for a root versus a stem of the same plant species, at the level of vascular bundle anatomy.<br>Bundle type: Dicot Root (a); Dicot Stem (b)<br>Cambium present?: Dicot Root (c); Dicot Stem (d)<br>Protoxylem position: Dicot Root (e); Dicot Stem (f)<br>Pith development: Dicot Root (g); Dicot Stem (h)',
        steps: [
          '<b>Reasoning and answers.</b> Apply the universal framework:',
          '(a) Bundle type: <b>radial</b> (xylem and phloem on alternate radii).',
          '(b) Bundle type: <b>conjoint, collateral, open</b> (xylem and phloem on same radius with cambium).',
          '(c) Cambium: <b>absent</b> in the primary root (it arises later, during secondary growth); the bundles are radial.',
          '(d) Cambium: <b>present</b>: open bundles have cambium; the intrafascicular cambium joins with interfascicular cambium to form a ring.',
          '(e) Protoxylem position: <b>exarch</b> (toward the periphery).',
          '(f) Protoxylem position: <b>endarch</b> (toward the centre/pith).',
          '(g) Pith development: <b>small or absent</b> (dicot roots typically have limited pith).',
          '(h) Pith development: <b>well-developed</b> (dicot stems have a distinct pith in the centre, with medullary rays running between bundles).',
        ],
        ans: '(a) Radial, (b) Conjoint, collateral, open, (c) Absent, (d) Present, (e) Exarch, (f) Endarch, (g) Small/absent, (h) Well-developed.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Integrated Identification with Tissue Diagnosis.</b> A transverse section shows radial vascular bundles with eight xylem groups and a large pith. State the organ and plant group. If you also observe that the innermost cortical layer has Casparian thickenings and passage cells, name that layer and state its function.',
        steps: [
          '<b>Reasoning.</b> Radial bundles → root (Step 1). Eight xylem groups → polyarch (more than six) → monocot root (Step 2). Large pith confirms monocot. The innermost cortical layer with Casparian strips and passage cells is the <b>endodermis</b>: its Casparian thickenings (suberin bands on radial and transverse walls; NCERT’s text says tangential as well as radial walls, so answer an NCERT-worded question in those words) regulate water and mineral entry into the stele, and the passage cells, which stay thin-walled without the later suberin layers, still let water and minerals pass into the stele through their living cytoplasm.',
        ],
        ans: 'Organ: monocot root. Plant group: monocotyledon. The innermost cortical layer is the <b>endodermis</b>; its function is to control the passage of water and dissolved minerals between the cortex and the vascular cylinder, with the Casparian strips preventing apoplastic flow and passage cells allowing regulated transport.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] State two anatomical features that distinguish a dicot root from a monocot stem.',
            a: 'Bundle geometry (radial in the dicot root; conjoint, collateral and closed in the monocot stem) and the position of the protoxylem (exarch in the root, endarch in the stem). The layout also differs: 2–4 xylem groups around a small or absent pith in the root against many bundles scattered through undifferentiated ground tissue in the stem.',
          },
          {
            q: '[CBSE] In a transverse section of a leaf, mesophyll is differentiated into palisade and spongy layers, and stomata are observed mainly on the lower epidermis. Identify the leaf type.',
            a: 'Dicot (dorsiventral) leaf. Differentiated palisade + spongy mesophyll and lower-surface stomata are the defining features.',
          },
          {
            q: '[NEET] A student is given an unknown T.S. with the following features: conjoint bundles arranged in a ring, cambium present between xylem and phloem, a starch-rich innermost cortical layer (endodermis), and medullary rays running between bundles. Identify the organ and plant group.',
            a: 'Dicot stem. Ring of conjoint bundles with cambium (open), a starch-rich endodermis (the starch sheath), and medullary rays are all diagnostic of a dicot stem.',
          },
          {
            q: '[NEET] State one anatomical feature that would distinguish the endodermis in a root from the endodermis in a stem of a dicot.',
            a: 'In a dicot root, the endodermis is the innermost cortical layer with Casparian thickenings and passage cells. In a dicot stem, the endodermis (the starch sheath) stores starch and usually lacks Casparian strips. The presence of Casparian strips and passage cells is therefore diagnostic of the root endodermis.',
          },
          {
            q: '[NEET, High Difficulty] Design a decision ladder (maximum five questions) that could identify any of the following: dicot root, monocot root, dicot stem, monocot stem, dicot leaf, monocot leaf, using only anatomical features from this chapter. State the questions in order and the organ that each answer leads to.',
            a: 'Decision ladder:<br>• <b>Q1.</b> Are the bundles radial (xylem and phloem on separate, alternating radii)?<br>– YES → root. <b>Q2.</b> Count the xylem groups: 2–4 (di/tetrarch) → dicot root; more than six (polyarch) → monocot root.<br>– NO (conjoint bundles) → go to Q3.<br>• <b>Q3.</b> Are the conjoint bundles arranged in a ring, with cambium between xylem and phloem? YES → dicot stem. Are they scattered, with no cambium (closed)? YES → monocot stem. If the section is a flat lamina rather than a stem → go to Q4.<br>• <b>Q4.</b> Is the mesophyll differentiated into palisade and spongy parenchyma (stomata mostly on the lower side)? YES → dicot leaf. Is the mesophyll uniform, with bulliform cells and stomata on both faces? YES → monocot leaf.<br>Four questions are enough to classify all six standard organs using only anatomy from the chapter and these additional topics.',
          },
        ],
      },
    ],
  },

  // ───────────── Additional topic G (the book’s Addendum P) · What NEET Actually Asks · pp. 398 to 406 ─────────────
  {
    n: 'G',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'NEET Anatomy-of-Flowering-Plants questions fall into five repeatable shapes.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'Questions on this chapter in recent NEET papers cluster in three zones (the book’s estimate from past papers, not official figures):',
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Why it recurs'],
        rows: [
          [
            '<b>Meristematic & simple permanent tissues</b> (Topic 01 of the chapter)',
            '“Living vs dead” and “corner vs uniform thickening” are the two cheapest-to-check binary forks examiners can build; the dedifferentiation/redifferentiation pair is a high-yield trap.',
          ],
          [
            '<b>Complex permanent tissues: xylem & phloem</b> (Topic 02)',
            'Sieve-tube nucleus, vessel-as-angiosperm-feature, and tracheid vs vessel recur often; the “only living xylem cell / only anucleate living cell” uniqueness facts are single-mark facts.',
          ],
          [
            '<b>Secondary growth</b> (Topic 04)',
            'Heartwood vs sapwood, spring vs autumn wood, and phellem vs phelloderm are standard fare; the cambium-volume-imbalance logic (why phloem is thin) is the basis of assertion–reason questions.',
          ],
        ],
      },
      {
        t: 'p',
        html: 'Lower but consistent: tissue-system and organ anatomy (Topic 03) supplies a steady stream of questions, usually requiring dicot/monocot discrimination or endarch/exarch placement. The radial-vs-conjoint bundle geometry and the bulliform-cell function are two often-tested facts from this zone. (All of these frequency statements are the book’s estimate, not official.)',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      {
        t: 'p',
        html: 'NEET Anatomy-of-Flowering-Plants questions fall into five repeatable shapes. Each is cracked by a specific decision procedure, followed by one fully worked example.',
      },
      { t: 'p', html: '<b>Archetype 1: “Identify the Tissue from a Feature List” (Elimination Ladder)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> The stem describes a tissue by two or three diagnostic attributes (wall chemistry, life status, location, cell shape) and asks you to name it.<br><b>Approach that cracks it:</b> Run the first two steps of Framework B (Topic 01):<br>1. <b>Living or dead at maturity?</b> Dead → sclerenchyma (among the three simple tissues). Living → continue.<br>2. <b>Where is the wall thickened?</b> Corners (and unlignified) → collenchyma. Thin throughout → parenchyma.<br>That is the whole ladder for the three simple tissues. For complex tissues, add “has nucleus?” as a third check.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Worked example (NEET-style):</b> A plant tissue when stained showed the presence of hemicellulose and pectin in the cell walls of its cells. The cells are living, show no intercellular spaces, and occur below the epidermis of a herbaceous dicot stem. Identify the tissue.',
        steps: [
          'Step 1, living at maturity: rules out sclerenchyma.',
          'Step 2, thickening at corners (hemicellulose + pectin, not lignin): that is the definition of collenchyma.',
          'Step 3, location below epidermis in dicot stems confirms hypodermal collenchyma.',
        ],
        ans: 'Collenchyma.',
      },

      { t: 'p', html: '<b>Archetype 2: “Which Is Not True / Incorrect Statement” (Elimination)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A list of four statements, three correct and one deliberately wrong, on the same topic. Students who read all four and check each against the chapter table earn the mark; those who memorize only the correct facts often pick the first plausible option.<br><b>Approach that cracks it:</b> Do not pre-judge which is false. Read every option, mark each one True or False against the chapter text, and pick the single False statement.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Worked example (NEET-style):</b> Which of the following is NOT correct about sclereids?<br>(a) They are dead at maturity.<br>(b) They have a very narrow lumen.<br>(c) They are typically long with tapering ends.<br>(d) They occur in the pulp of pear and guava.',
        steps: [
          '(a) True: sclereids are dead at maturity.',
          '(b) True: thick lignified walls leave only a pinpoint lumen.',
          '(c) False: “long with tapering ends” describes fibres, not sclereids (sclereids are isodiametric stone cells).',
          '(d) True: sclereids are the gritty stone cells in pear/guava pulp.',
        ],
        ans: '(c).',
      },

      { t: 'p', html: '<b>Archetype 3: Assertion–Reason (Mechanism Chains)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two statements, A and R, with answer options (a) Both true, R explains A; (b) Both true, R does not explain A; (c) A true, R false; (d) A false, R true.<br><b>Approach that cracks it:</b> Judge A and R separately. If A is true and R is false, the answer is (c); if A is false and R is true, it is (d). If both are true, check whether the causal link holds: (a) if R explains A, (b) if not. The chapter’s frameworks supply the causal chains: for example the differentiation framework (Framework A of Topic 01) for living versus dead tissues, and the unequal activity of the cambium (Topic 04) for thin phloem.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Worked example (NEET-style):</b><br><b>Assertion (A):</b> Vessels are more efficient for water conduction than tracheids.<br><b>Reason (R):</b> Vessels are dead and lignified.',
        steps: [
          'A is true: the open, continuous lumen of a vessel conducts water faster than a chain of tracheids. R is true: vessels are dead and lignified.',
          'But R does <b>not</b> explain why vessels are more efficient. Efficiency comes from the open, continuous lumen (fused vessel elements) versus the pit-permeated walls of tracheids. Being dead and lignified is a precondition, not the mechanism. So both are true but R is not the correct explanation of A.',
        ],
        ans: '(b).',
      },

      { t: 'p', html: '<b>Archetype 4: Match-the-Column (Paired-Feature Grids)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Column I lists tissues, cells, or anatomical terms; Column II lists their defining features. Four A–D items must be matched to I–IV.<br><b>Approach that cracks it:</b> Memorise the <b>uniqueness facts</b>: each term has a feature the others do not share:<br>• Sclereid → isodiametric, narrow lumen, stone cells (guava/pear pulp)<br>• Sieve tube element → living, anucleate, stacked pipes<br>• Companion cell → living, retains nucleus, controls neighbour<br>• Xylem fibre → obliterated lumen, dead<br>• Vessel → fused open tube (characteristic of angiosperms)<br>• Tracheid → tapering ends, pits (found in all vascular plants; in most gymnosperms the only water-conducting element)<br>When two options both seem plausible (e.g. a sieve tube element and a companion cell are both living), resolve by the <b>exclusion fact</b>: the descriptor the others do not share.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Worked example (NEET-style):</b><br>Column I: A. Xylem vessel; B. Xylem fibre; C. Xylem tracheid; D. Xylem parenchyma<br>Column II: I. Obliterated lumen; II. Perforated end plates; III. Chisel-like tapering ends; IV. Stores food',
        steps: [
          'A → II (vessels have perforation plates at their end walls; fibres have obliterated lumen, so A cannot be I).',
          'B → I (xylem fibre = obliterated lumen).',
          'C → III (tracheids are elongated cells with chisel-like tapering ends).',
          'D → IV (xylem parenchyma is the only living xylem element and stores starch/fats).',
        ],
        ans: 'A–II, B–I, C–III, D–IV.',
      },

      { t: 'p', html: '<b>Archetype 5: “Identify the Organ / Tissue System from a Description” (T.S. Recognition Without the Diagram)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Statements describe anatomical features; you name the organ or leaf type.<br><b>Approach that cracks it:</b> Use the identification steps of Additional topic F:<br>1. <b>Radial or conjoint bundles?</b> Radial (xylem and phloem on alternate radii) → root. Conjoint → stem or leaf.<br>2. <b>If stem:</b> ring of bundles → dicot; scattered → monocot.<br><b>If leaf:</b> palisade + spongy differentiated → dicot; uniform mesophyll → monocot; bulliform cells → monocot grass.<br><b>If root:</b> di/tetrarch → dicot; polyarch → monocot; pith small/absent → dicot, pith large → monocot.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Worked example (NEET-style):</b> A plant section shows: cortex of several layers of thin-walled parenchyma; endodermis with Casparian strips; secondary growth present; pith small or inconspicuous. Identify the organ.',
        steps: [
          'Endodermis with Casparian strips → root (not stem).',
          'Secondary growth → dicot (monocot roots lack secondary growth).',
          'Small pith → dicot root.',
        ],
        ans: 'Dicotyledonous root.',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: 'The distractors in NEET questions on this chapter are not random, they are built from recurring confusions:',
      },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What the option says', 'What it should be', 'Why it catches students'],
        rows: [
          [
            '<b>“Mechanical = sclerenchyma”</b>',
            'Collenchyma described as sclerenchyma',
            'Collenchyma is living, unlignified, corner-thickened',
            'Students hear “support tissue” and over-generalise; the chapter explicitly flags this pitfall.',
          ],
          [
            '<b>Sclereid ↔ fibre swap</b>',
            '“Long with tapering ends” offered for sclereid',
            'Fibres are long/tapering; sclereids are short/isodiametric',
            'The gritty-pulp clue is the surest identifier; without it, shape descriptions blur.',
          ],
          [
            '<b>Dedifferentiation ↔ redifferentiation reversal</b>',
            '“Mature cell losing division” labelled as dedifferentiation',
            'Dedifferentiation = regain division; redifferentiation = lose it again',
            'The prefix logic trips students who learn the words phonetically rather than by meaning.',
          ],
          [
            '<b>Endarch ↔ exarch swap</b>',
            'Exarch described for a stem',
            'Endarch = protoxylem toward centre = stem; exarch = toward periphery = root',
            'Both terms appear in the same question set; students confuse “end” (centre) with “outer.”',
          ],
          [
            '<b>Heartwood vs sapwood on conduction</b>',
            'Heartwood described as conducting',
            'Heartwood is non-conducting (tyloses block vessels); sapwood conducts',
            'Students remember heartwood is “central” and infer it must be the active water pathway.',
          ],
          [
            '<b>“Conducting tissue is dead”</b>',
            'Sieve tube called dead',
            'Sieve tube is living but anucleate',
            'Over-generalisation of the xylem rule; the chapter emphasises this exact exception.',
          ],
          [
            '<b>Radial = stem</b>',
            '“Radial bundles in stems”',
            'Radial bundles occur in roots; stems have conjoint bundles',
            'The word “radial” sounds like “around a centre” and students apply it to round organs.',
          ],
          [
            '<b>Guard cell shape flip</b>',
            'Bean-shaped guard cells for monocots',
            'Dicots = kidney (bean); grasses (monocots such as wheat, maize) = dumb-bell',
            'Both shapes appear in the same topic; without the pairing mnemonic students default to the familiar kidney shape.',
          ],
          [
            '<b>Phellem vs phelloderm</b>',
            '“Cork” labelled as phelloderm',
            'Phellem = outer (dead cork); phelloderm = inner (living parenchyma)',
            'Both are products of phellogen; the spatial distinction (out vs in) is the quickest way to separate them.',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      { t: 'p', html: 'Eight questions in ascending difficulty.' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>Q1: Recall (Easy).</b> Which simple permanent tissue is living, has thin cellulose walls, may contain chloroplasts, and is involved in storage, photosynthesis and secretion?<br><b>Hint:</b> the “soft generalist.”',
            a: 'Parenchyma. Its cells are living, with thin cellulose walls, and the tissue carries out storage, photosynthesis (as chlorenchyma) and secretion, which makes it the all-purpose ground tissue.',
          },
          {
            q: '<b>Q2: Single-feature elimination (Easy–Medium).</b> Which meristem is responsible for the elongation of bamboo and grass blades after they are cut by a lawnmower?',
            a: 'Intercalary meristem. It is located at the bases of internodes (or leaf sheaths) in grasses and is left behind when the upper portion is removed, allowing rapid regrowth.',
          },
          {
            q: '<b>Q3: Feature matching (Medium).</b> A tissue shows the following features: dead cells at maturity, uniformly thickened lignified walls, and fibres in the pericycle. Identify the tissue and its sub-type precisely.',
            a: 'Sclerenchyma: fibres. The dead, lignified, uniformly thickened cells with narrow lumen occurring in strands are the definition of sclerenchymatous fibres (bast fibres when from phloem).',
          },
          {
            q: '<b>Q4: Two-way distinction (Medium).</b> Name the only living xylem element and the only anucleate living cell in phloem.',
            a: 'Xylem parenchyma (living, thin-walled, stores food); sieve tube element (living but anucleate at maturity, conducts food, controlled by companion cells).',
          },
          {
            q: '<b>Q5: Statement analysis / “which is not true” (Medium).</b> Which one of the following statements about collenchyma is incorrect?<br>(a) Its cells are living at maturity.<br>(b) Cellulose, hemicellulose and pectin are deposited at the corners of its cell walls.<br>(c) Its walls are uniformly thickened with lignin.<br>(d) It gives mechanical support to growing organs such as young stems and petioles.',
            a: '(c). Collenchyma walls are thickened only at the corners and are not lignified; uniformly thickened lignified walls belong to sclerenchyma. Statements (a), (b) and (d) are all correct for collenchyma.',
          },
          {
            q: '<b>Q6: Organ identification from description (Medium–Hard).</b> A leaf transverse section shows: undifferentiated mesophyll (all cells alike), stomata on both upper and lower surfaces, and large empty colourless cells on the adaxial (upper) epidermis. Identify the leaf type and name those empty cells.',
            a: 'Monocot (isobilateral) leaf. The empty colourless cells are bulliform (motor) cells, which help the leaf roll inward during water stress to reduce transpiration.',
          },
          {
            q: '<b>Q7: Assertion–Reason (Hard).</b> <b>Assertion (A):</b> The position of the protoxylem helps to distinguish a dicot root from a dicot stem in primary structure.<br><b>Reason (R):</b> In roots the protoxylem is exarch (toward the periphery), whereas in stems it is endarch (toward the centre/pith).<br>(a) Both A and R true, R is the correct explanation of A<br>(b) Both A and R true, R is not the correct explanation of A<br>(c) A true, R false<br>(d) A false, R true',
            a: '(a): Both A and R are true, and R correctly explains A. Exarch versus endarch arrangement of the protoxylem is a reliable root-versus-stem feature of the primary vascular tissue.',
          },
          {
            q: '<b>Q8: Multi-step causal chain (Hard).</b> Explain why the secondary phloem in a woody dicot stem remains a thin peripheral band while the secondary xylem accumulates as the bulk of the trunk. Relate your answer to the activity of the vascular cambium.',
            a: 'The vascular cambium is a continuous cylinder of initials lying between the primary xylem and primary phloem. It divides in two directions: it cuts off secondary xylem (wood) toward the inside and secondary phloem toward the outside. However, its activity is strongly biased inward: it produces many more xylem cells than phloem cells. As secondary xylem accumulates year after year, it crushes the older secondary phloem against the expanding perimeter, so the functional phloem remains thin. The xylem also forms the majority of the trunk’s cross-sectional area, which is why wood dominates the axis.',
          },
        ],
      },

      { t: 'part', title: 'How to Use the Decision Ladders' },
      {
        t: 'p',
        html: '1. <b>Reconstruct the category from words.</b> NEET questions usually describe a tissue in words and expect you to name it, rather than showing a table. Practise the two-step ladder (living or dead, then where the wall is thickened) on descriptions until it is automatic.<br>2. <b>Tie the differentiation cycle to life status.</b> Assertion–reason questions test the reason behind the fact: sclerenchyma cannot dedifferentiate because its cells are dead, while parenchyma can because its cells are alive.<br>3. <b>Triage an unlabelled section in three steps.</b> First, radial or conjoint bundles? Second, for a root count the xylem groups (di/tetrarch or polyarch), and for a stem check whether bundles form a ring or are scattered. Third, for a flat lamina, look for palisade and spongy mesophyll or uniform mesophyll with bulliform cells. This is the identification ladder of Additional topic F.',
      },
    ],
  },
];
