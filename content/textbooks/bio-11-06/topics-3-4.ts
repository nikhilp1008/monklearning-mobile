import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 6 (Anatomy of Flowering Plants), Topics 03 and 04: pp. 369
 * to 382 of the Class 11 Biology Master Reference, word for word. Topic 03,
 * Tissue System & Organ Anatomy (pp. 369–375), and Topic 04, Secondary Growth
 * (pp. 376–382), are each cut at the book’s Sections 1 to 8. Figure 6.3 (caption
 * p. 372, drawn p. 373) and Figure 6.4 (caption p. 378, drawn p. 379) are redrawn
 * in lib/diagrams/biology-11-06.ts; these pages draw nothing else (no raster
 * images; the only vector drawings are on pp. 373 and 379). Scientific names are
 * italic as the book prints them; emphasis italics are dropped; no em dash is
 * written (a colon, comma, semicolon or bracket stands in).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 369–375 ─────────────────────────
  {
    n: '03',
    title: 'Tissue System & Organ Anatomy',
    kalam:
      'Every flowering plant organ, root, stem or leaf, is built from these same three systems, just arranged differently.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A table-heavy, diagram-labelled topic. CBSE Boards ask “distinguish dicot from monocot stem/root/leaf” as 2–3 mark comparisons and T.S. labelling. CUET tests single distinguishing features (which has scattered bundles, which guard cells are dumb-bell shaped). NEET relies on match-the-column grids and “identify the labelled T.S.” figure questions, and on the dicot-vs-monocot contrasts. A frequent topic in NEET (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: 'So far we have met individual tissues: simple (parenchyma, collenchyma, sclerenchyma) and complex (xylem, phloem). But a plant organ is not a random heap of tissues; the tissues are organised into <b>tissue systems</b>, grouped by where they sit and what role they play in the organ as a whole. Think of a city’s infrastructure organised into three departments regardless of which building you stand in: the outer wall (security/skin), the bulk of the city (housing, storage, workshops), and the transport network (roads, pipelines). Every flowering plant organ, root, stem or leaf, is built from these same three systems, just arranged differently. They are:',
      },
      {
        t: 'p',
        html: '• <b>Epidermal tissue system</b>: the plant’s “skin”. The outermost layer: the <b>epidermis</b> (a single layer of living, parenchyma-like cells), usually coated by a waxy waterproof <b>cuticle</b>, and studded with <b>stomata</b> for gas exchange, plus surface outgrowths like <b>trichomes</b> (multicellular hairs on stems) and <b>root hairs</b> (unicellular, on roots).<br>• <b>Ground tissue system</b>: everything between the skin and the transport network: the bulk “filler” tissues. This includes the <b>cortex</b>, <b>endodermis</b>, <b>pericycle</b> (some books place the pericycle in the stele, with the vascular tissue), <b>pith (medulla)</b>, and in leaves the <b>mesophyll</b>. Mostly parenchyma, with collenchyma/sclerenchyma where support is needed.<br>• <b>Vascular tissue system</b>: the transport network: <b>xylem and phloem</b>, bundled together into <b>vascular bundles</b>.',
      },
      {
        t: 'p',
        html: 'Think about it this way: the same three “departments” exist in a root, a stem and a leaf, but their layout changes with the organ’s job, and, crucially, it changes between <b>dicots</b> and <b>monocots</b>. This dicot-vs-monocot contrast is the spine of the whole topic. A handful of consistent differences (bundle arrangement, presence of a cambium, mesophyll differentiation, guard-cell shape) repeat across every organ, so once you internalise the pattern, you can reconstruct any T.S. from first principles instead of memorising six separate pictures.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions worth flagging.</b> Two cautions. First, separate structure from function ruthlessly: how a stoma is <b>built</b> (guard-cell shape, subsidiary cells) is anatomy and belongs here; how it <b>opens and closes</b> (turgor changes, transpiration) is plant physiology and belongs to a different chapter; exams deliberately bait you with the wrong one. Second, the dicot-vs-monocot “rules” are reliable generalisations for the typical primary body; this topic deals with the primary structure, before any secondary thickening reshapes the dicot.',
      },

      { t: 'part', title: 'Tissue systems and diagnostic anatomical features' },
      {
        t: 'p',
        html: '(No SI units or dimensional formulae apply; diagnostic features and dicot/monocot contrasts are tabulated.)',
      },
      {
        t: 'table',
        title: 'The three tissue systems',
        head: ['System', 'Components', 'Location', 'Role'],
        rows: [
          [
            'Epidermal',
            'Epidermis, cuticle, stomata + guard cells, trichomes, root hairs',
            'Outermost layer of the organ',
            'Protection, gas exchange, water regulation',
          ],
          [
            'Ground',
            'Cortex, endodermis, pericycle, pith, mesophyll, medullary rays',
            'Between epidermis and vascular tissue',
            'Storage, photosynthesis, support, packing',
          ],
          [
            'Vascular',
            'Xylem + phloem (as vascular bundles)',
            'Embedded within ground tissue',
            'Conduction of water and food',
          ],
        ],
      },
      {
        t: 'defgrid',
        title: 'The stomatal apparatus & epidermal outgrowths',
        rows: [
          {
            k: 'Stomata',
            v: 'Pores in the epidermis (mainly leaves; also young stems, floral parts) for gas exchange',
          },
          { k: 'Guard cells: dicot', v: '<b>Kidney (bean) shaped</b> in dicots' },
          { k: 'Guard cells: monocot', v: '<b>Dumb-bell shaped</b> in grasses (monocots such as wheat, maize)' },
          {
            k: 'Subsidiary cells',
            v: 'Specialised epidermal cells (variable number) surrounding the guard cells; also called accessory cells',
          },
          {
            k: 'Trichomes',
            v: 'Multicellular epidermal hairs on the <b>stem</b>; epidermal outgrowths',
          },
          {
            k: 'Root hairs',
            v: '<b>Unicellular</b> epidermal outgrowths on the <b>root</b> (from the epiblema)',
          },
        ],
      },
      {
        t: 'table',
        title: 'Vascular bundle classification',
        head: ['Basis', 'Types', 'Key point'],
        rows: [
          [
            'Arrangement of xylem & phloem',
            '<b>Radial</b> vs <b>Conjoint</b>',
            'Radial: xylem & phloem on <b>alternate radii</b> (in roots); the primary bundle has no cambium. Conjoint: xylem & phloem on the <b>same radius</b> (in stems & leaves)',
          ],
          [
            'Position (conjoint)',
            '<b>Collateral</b> (phloem outside, xylem inside) vs <b>Bicollateral</b> (phloem on both sides of xylem)',
            'Collateral is the common stem type',
          ],
          [
            'Presence of cambium',
            '<b>Open</b> (cambium present → can do secondary growth) vs <b>Closed</b> (no cambium)',
            'Dicot stem = open; monocot stem = closed',
          ],
        ],
      },
      {
        t: 'p',
        html: 'Two further conjoint types named for completeness: <b>amphivasal</b> (xylem surrounds phloem) and <b>amphicribral</b> (phloem surrounds xylem).',
      },
      { t: 'p', html: '<b>Dicot vs Monocot: organ-by-organ</b>' },
      { t: 'p', html: 'Root:' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Dicot root', 'Monocot root'],
        rows: [
          ['Vascular bundles', 'Radial, exarch', 'Radial, exarch'],
          ['Number of xylem groups', 'Few: di/tri/tetrarch (2–4)', 'Many: <b>polyarch</b> (>6)'],
          ['Pith', 'Small or absent', '<b>Large, well-developed</b>'],
          ['Secondary growth', 'Present', '<b>Absent</b>'],
          ['Pericycle', 'Parenchyma → lateral roots + part of cambium', 'Parenchyma → lateral roots only'],
        ],
      },
      { t: 'p', html: 'Stem:' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Dicot stem', 'Monocot stem'],
        rows: [
          ['Hypodermis', 'Collenchymatous', 'Sclerenchymatous'],
          [
            'Ground tissue',
            'Differentiated (cortex, endodermis/starch sheath, pericycle, pith)',
            '<b>Undifferentiated</b>',
          ],
          ['Vascular bundles', 'Arranged in a <b>ring</b>', '<b>Scattered</b> (numerous)'],
          ['Bundle type', 'Conjoint, collateral, <b>open</b>', 'Conjoint, collateral, <b>closed</b>'],
          ['Medullary rays', 'Present (between bundles)', 'Absent'],
        ],
      },
      { t: 'p', html: 'Leaf:' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Dicot leaf (dorsiventral)', 'Monocot leaf (isobilateral)'],
        rows: [
          [
            'Mesophyll',
            '<b>Differentiated</b> into palisade (upper) + spongy (lower)',
            '<b>Undifferentiated</b> (uniform)',
          ],
          ['Stomata', 'Mainly on lower epidermis', 'On <b>both</b> surfaces, roughly equal'],
          [
            'Bulliform cells',
            'Absent',
            '<b>Present</b>: large, empty, colourless cells on upper epidermis (grasses)',
          ],
          ['Bundle sheath', 'Present around veins', 'Present'],
        ],
      },

      { t: 'part', title: 'Comparative anatomy and sectional identification' },
      {
        t: 'p',
        html: 'Organ anatomy has no formula to derive; the examinable skill is reading a transverse section and deciding what it is. Here are the decision procedures, ordered by the most decisive clue first.',
      },
      {
        t: 'proc',
        title: 'Procedure A: Root or stem? Then dicot or monocot?',
        steps: [
          '<b>Look at the vascular bundles’ geometry.</b> If xylem and phloem sit on separate, alternating radii (a radial bundle) → it is a <b>root</b>. If they sit together on the same radius (conjoint) → it is a <b>stem or leaf</b>.',
          '<b>Within a root, count the xylem groups.</b> 2–4 (di/tetrarch) → <b>dicot root</b>; many (polyarch) → <b>monocot root</b>. Confirm with pith: small/absent (dicot) vs large (monocot).',
          '<b>Within a stem, look at the bundle layout.</b> Bundles in a neat <b>ring</b> with a cambium (open) → <b>dicot stem</b>; bundles <b>scattered</b> through the ground tissue, no cambium (closed) → <b>monocot stem</b>.',
          '<b>Both root types are exarch</b>, so don’t use endarch/exarch to tell dicot from monocot root; use xylem number and pith size instead.',
        ],
      },
      {
        t: 'p',
        html: '<b>Procedure B: Endarch vs exarch (and why it pins down root vs stem).</b><br>Recall from Topic 02: protoxylem first, metaxylem later. In a <b>root</b>, protoxylem points to the <b>periphery</b> (exarch); in a <b>stem</b>, protoxylem points to the <b>centre/pith</b> (endarch). So the endarch/exarch test is really a root-vs-stem test, not a dicot-vs-monocot one. An anatomically old dicot <b>root</b> is distinguished from a dicot <b>stem</b> chiefly by this <b>position of the protoxylem</b>.',
      },
      {
        t: 'proc',
        title: 'Procedure C: Dicot vs monocot leaf.',
        steps: [
          '<b>Is the mesophyll split into palisade + spongy layers?</b> Yes → <b>dicot (dorsiventral)</b> leaf; uniform mesophyll → <b>monocot (isobilateral)</b> leaf.',
          '<b>Where are the stomata?</b> Mostly lower side → dicot; both sides equally → monocot.',
          '<b>Are there large empty colourless cells on the upper epidermis?</b> Those are <b>bulliform cells</b> → <b>monocot</b> (grass) leaf. They are absent in dicots.',
        ],
      },
      {
        t: 'p',
        html: '<b>Procedure D: Reading the endodermis (the ground-tissue clue in roots).</b><br>The innermost cortex layer, the <b>endodermis</b>, is a barrel-shaped ring of cells with <b>Casparian thickenings</b> (suberin bands) on their walls; some cells, usually opposite the protoxylem, stay thin-walled: these <b>passage cells</b> let water through. Just inside it lies the <b>pericycle</b> (parenchyma), which gives rise to <b>lateral roots</b> (and, in dicots, contributes to the vascular cambium). Spotting a Casparian-banded endodermis with passage cells is a strong “this is a root” signal.',
      },
      { t: 'fig', id: 'b11-06-fig-6.3' },
      {
        t: 'p',
        html: '<b>Procedure E: Reading a root section from the outside in.</b><br>It helps to have the canonical layer sequence in your head so a labelled figure becomes obvious. Working inward in a <b>monocot root</b>, you pass through: <b>root hairs</b> → <b>epiblema</b> (the epidermis of the root, lacking a cuticle and stomata) → <b>cortex</b> (broad, parenchymatous) → <b>endodermis</b> (with Casparian thickenings and passage cells) → <b>pericycle</b> (parenchyma) → the <b>radial vascular bundles</b> (alternating bundles of phloem and exarch xylem, here <b>polyarch</b>) with <b>conjunctive tissue</b> (parenchyma) filling the gaps between them → a large, distinct central <b>pith</b>. A dicot root reads the same way from the outside until the vascular cylinder, where you instead find only a few xylem groups (di/tetrarch) and little or no pith. In a <b>dicot stem</b>, by contrast, note the <b>starch sheath</b> (the innermost cortex layer / endodermis stores starch), a <b>heterogeneous pericycle</b>, the ring of open bundles, and the <b>medullary rays</b> of parenchyma running radially between adjacent bundles, features absent from the undifferentiated monocot stem.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board level | Distinguish-between',
        q: 'Give three anatomical differences between a dicot stem and a monocot stem.',
        steps: [
          '<b>Reasoning & answer.</b> Anchor each on a repeating dicot/monocot axis: 1. <b>Bundle arrangement:</b> dicot: vascular bundles in a ring; monocot: scattered through the ground tissue. 2. <b>Cambium:</b> dicot bundles are conjoint, collateral and open (cambium present, capable of secondary growth); monocot bundles are closed (no cambium). 3. <b>Ground tissue:</b> dicot ground tissue is differentiated into cortex, endodermis, pericycle and pith; monocot ground tissue is undifferentiated.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level | Direct recall',
        q: 'In which plant group are the guard cells dumb-bell shaped, and what surrounds the guard cells?',
        steps: [
          '<b>Reasoning & answer.</b> Dumb-bell shaped guard cells are characteristic of <b>grasses</b> (monocots such as wheat and maize); dicots have kidney-shaped guard cells. The guard cells may be surrounded by a varying number of <b>subsidiary (accessory) cells</b>. Speed trap: don’t confuse the shape pairing; the mnemonic is “<b>di</b>cot → kid<b>n</b>ey, mono<b>cot</b> → <b>dumb-bell</b>.”',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET level | Match the column',
        q: '<b>Column I</b><br>A. Bulliform cells<br>B. Endodermis<br>C. Pericycle<br>D. Collateral bundle<br><b>Column II</b><br>i. Casparian thickenings; passage cells<br>ii. Empty colourless cells; monocot leaf<br>iii. Phloem outside, xylem inside, same radius<br>iv. Origin of lateral roots',
        steps: [
          '<b>Reasoning & answer.</b> A-ii (bulliform = empty colourless, monocot leaf), B-i (endodermis = Casparian + passage cells), C-iv (pericycle → lateral roots), D-iii (collateral = phloem out, xylem in).',
          'The trap swaps B and C (both are inner ground-tissue layers of the root): fix B by the Casparian clue and C by the lateral-root clue.',
        ],
        ans: 'A-ii, B-i, C-iv, D-iii.',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty | Assertion–Reason',
        q: 'Assertion (A): An anatomically old dicot root can be told apart from a dicot stem mainly by the position of its protoxylem. Reason (R): In roots the protoxylem is exarch, whereas in stems it is endarch. <b>(a)</b> Both A and R true, R is the correct explanation of A <b>(b)</b> Both A and R true, R not the correct explanation of A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning & answer.</b> A is true: even after secondary growth blurs many features, the radial position of the protoxylem still betrays root vs stem. R is true and is the mechanism: exarch (protoxylem peripheral) in roots vs endarch (protoxylem central) in stems is exactly the distinguishing arrangement. R explains A directly.',
          'This rewards linking Procedure B of the Comparative anatomy and sectional identification part to the protoxylem/metaxylem idea carried over from the complex-tissue topic.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the three tissue systems of a flowering plant and give one component of each.',
            a: 'Epidermal (epidermis/cuticle/stomata), ground (cortex/pericycle/pith/mesophyll), vascular (xylem/phloem), any one component each.',
          },
          {
            q: '[CUET] What type of vascular bundle is found in roots, and is it open or closed?',
            a: 'Radial; no cambium in the primary root (a dicot root forms a cambium later, in secondary growth).',
          },
          {
            q: '[NEET] State two features by which you would identify a transverse section as a monocot root rather than a dicot root.',
            a: 'Polyarch xylem (many groups) and a large, well-developed pith (dicot root is di/tetrarch with little/no pith); both are radial and exarch, so don’t use those.',
          },
          {
            q: '[NEET] Why does a monocot stem not undergo secondary growth, in terms of its vascular bundle type?',
            a: 'Its bundles are conjoint, collateral and closed: they lack a cambium, and without a cambium there is no lateral meristem to produce secondary tissue.',
          },
          {
            q: '[NEET: high difficulty] A leaf T.S. shows uniform mesophyll, stomata on both surfaces, and large empty cells on the upper epidermis. Identify the leaf type and name those large cells and their likely role.',
            a: 'Monocot (isobilateral) leaf; the cells are bulliform cells, which help roll/unroll the leaf to reduce water loss.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In a typical dicot stem, the vascular bundles are:',
        opts: [
          {
            label: 'Scattered and closed',
            nudge: '<b>(a)</b>/<b>(d)</b> “scattered” describes the monocot stem.',
          },
          { label: 'Arranged in a ring and open', nudge: null },
          { label: 'Radial and closed', nudge: '<b>(c)</b> “radial” describes a root.' },
          {
            label: 'Scattered and open',
            nudge: '<b>(a)</b>/<b>(d)</b> “scattered” describes the monocot stem.',
          },
        ],
        correct: 1,
        solution:
          'Dicot stems have bundles in a ring, conjoint-collateral-open (cambium present). Trap: choosing (a) by mixing up dicot and monocot stem layouts.',
      },
      {
        t: 'mcq',
        q: 'Radial vascular bundles are characteristically found in:',
        opts: [
          { label: 'Dicot stems', nudge: '<b>(a)</b>, <b>(d)</b>: stems and leaves have conjoint bundles.' },
          { label: 'Monocot stems', nudge: '<b>(b)</b>: monocot stems have scattered conjoint bundles.' },
          { label: 'Roots', nudge: null },
          { label: 'Dicot leaves', nudge: '<b>(a)</b>, <b>(d)</b>: stems and leaves have conjoint bundles.' },
        ],
        correct: 2,
        solution:
          'Radial bundles (xylem and phloem on alternate radii) occur in roots; the primary bundle has no cambium. Stems and leaves have conjoint bundles. Trap: associating “radial” with stems because stems look “round”; radial refers to bundle geometry, not organ shape.',
      },
      {
        t: 'mcq',
        q: 'Bulliform cells are found in the:',
        opts: [
          { label: 'Lower epidermis of a dicot leaf', nudge: '<b>(a)</b> wrong organ group.' },
          { label: 'Upper epidermis of a monocot leaf', nudge: null },
          { label: 'Cortex of a dicot root', nudge: '<b>(c)</b>/<b>(d)</b> wrong tissue entirely.' },
          { label: 'Pith of a monocot stem', nudge: '<b>(c)</b>/<b>(d)</b> wrong tissue entirely.' },
        ],
        correct: 1,
        solution:
          'Large, empty, colourless bulliform cells occur on the upper epidermis of grass (monocot) leaves. Trap: forgetting they are upper-epidermal and monocot-specific.',
      },
      {
        t: 'mcq',
        q: 'The endodermis of a root is identified by:',
        opts: [
          {
            label: 'Chloroplast-rich palisade cells',
            nudge:
              '<b>(a)</b> is leaf mesophyll, <b>(c)</b> is monocot stem, <b>(d)</b> is a monocot stoma: all distractors from elsewhere in this very topic.',
          },
          { label: 'Casparian thickenings with passage cells', nudge: null },
          {
            label: 'Scattered closed bundles',
            nudge:
              '<b>(a)</b> is leaf mesophyll, <b>(c)</b> is monocot stem, <b>(d)</b> is a monocot stoma: all distractors from elsewhere in this very topic.',
          },
          {
            label: 'Dumb-bell guard cells',
            nudge:
              '<b>(a)</b> is leaf mesophyll, <b>(c)</b> is monocot stem, <b>(d)</b> is a monocot stoma: all distractors from elsewhere in this very topic.',
          },
        ],
        correct: 1,
        solution:
          'Casparian thickenings (with passage cells) are the signature of the endodermis. Trap: the options test whether you can keep the topic’s many features in their correct compartments.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Radial = root, not stem.</b> Radial bundles mean a root; conjoint bundles mean stem/leaf. Many lose marks calling a stem “radial”.',
          '<b>Using endarch/exarch to tell dicot from monocot root.</b> Both roots are exarch. Use xylem number (di/tetrarch vs polyarch) and pith size instead.',
          '<b>Guard-cell shape mix-up.</b> Dicots = kidney (bean) shaped; grasses (monocots such as wheat, maize) = dumb-bell shaped. Mnemonic: “dicot → kidney; monocot → dumb-bell.”',
          '<b>Importing physiology.</b> Stomatal opening/closing, transpiration and guttation are plant physiology, not anatomy. A T.S./structure question wants structure.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy):</b> For any unknown T.S., resolve it in two questions, in order: (1) are the bundles radial or conjoint? (root vs stem/leaf), then (2) ring-or-scattered / di-tetrarch-or-polyarch / palisade-or-uniform? (dicot vs monocot). Two clues classify any of the six sections without rote-memorising pictures.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Three tissue systems',
            note: '<b>Epidermal</b> (epidermis, cuticle, stomata, trichomes, root hairs)<br>• <b>Ground</b> (cortex, endodermis, pericycle, pith, mesophyll)<br>• <b>Vascular</b> (xylem + phloem as bundles).',
          },
          {
            f: 'Guard cells',
            note: 'dicot <b>kidney</b>-shaped; grasses (monocots such as wheat, maize) <b>dumb-bell</b>-shaped; surrounded by <b>subsidiary cells</b>.',
          },
          {
            f: 'Vascular bundles',
            note: '<b>Radial</b> (root, alternate, no cambium in the primary bundle) vs <b>Conjoint</b> (stem/leaf, same radius); <b>collateral</b> (phloem out, xylem in); <b>open</b> (dicot stem, cambium) vs <b>closed</b> (monocot stem).',
          },
          {
            f: 'Root',
            note: 'dicot = di/tetrarch, small pith, secondary growth; monocot = <b>polyarch</b>, large pith, no secondary growth; <b>both exarch</b>.',
          },
          {
            f: 'Stem',
            note: 'dicot = bundles in a <b>ring</b>, open, collenchyma hypodermis; monocot = <b>scattered</b>, closed, undifferentiated ground tissue.',
          },
          {
            f: 'Leaf',
            note: 'dicot <b>dorsiventral</b> (palisade + spongy, lower stomata); monocot <b>isobilateral</b> (uniform mesophyll, <b>bulliform cells</b>, stomata both sides).',
          },
          {
            f: '<b>Endodermis</b> = Casparian thickenings + passage cells; <b>pericycle</b> → lateral roots.',
            note: '',
          },
        ],
        aids: [
          '“<b>Radial = Root.</b>”',
          '“<b>Di</b>cot → kid<b>n</b>ey; monocot → dumb-bell.”',
          '“Protoxylem <b>ends in the centre = endarch = stem</b>.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 376–382 ─────────────────────────
  {
    n: '04',
    title: 'Secondary Growth',
    kalam: 'A teak tree or a banyan is not slender; its trunk is massive.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-yield block. CBSE Boards favour the formation-and-activity of vascular cambium, the heartwood-vs-sapwood and spring-vs-autumn-wood distinctions, and the components of periderm as 2–3 mark questions, plus annual-ring diagram labelling. CUET tests single facts (what is phellem, what are lenticels for, which plants lack secondary growth). NEET uses match-the-column grids on periderm/wood terms and assertion–reason pairs on annual rings and heartwood function. A frequent topic in NEET (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: 'Everything so far has described the primary plant body: the slender stem and root produced by apical meristems, growing only in length. But a teak tree or a banyan is not slender; its trunk is massive. That increase in <b>girth (thickness)</b> is <b>secondary growth</b>, and it is the work of two <b>lateral meristems</b> we met by name earlier: the <b>vascular cambium</b> and the <b>cork cambium (phellogen)</b>.',
      },
      {
        t: 'p',
        html: 'Think about it this way: imagine laying a city’s water pipes (primary growth gets the network from A to B). Years later the city has grown and the old pipes are too few and too narrow. So you install a ring of pipe-laying machines just under the streets that keeps adding new pipe to the inside and new utilities to the outside, year after year. The vascular cambium is exactly that ring of machines, a thin cylinder of dividing cells that keeps manufacturing new conducting tissue: <b>wood (secondary xylem) on its inner face and secondary phloem on its outer face</b>. As the trunk swells, the original “skin” (epidermis) can’t stretch forever, so a second machine, the cork cambium, lays down a tough new bark to replace it.',
      },
      {
        t: 'p',
        html: 'Two ground rules frame the whole topic. First, <b>secondary growth occurs in the dicot stems and roots (and in gymnosperms), but is essentially absent in monocots</b>: recall why: monocot vascular bundles are closed (no cambium to begin with). Second, the cambium adds wood on its inner face and phloem on its outer face, so in the wood the <b>oldest xylem sits at the centre and the youngest next to the cambium</b>, while in the phloem the order is reversed: the youngest phloem lies next to the cambium and the oldest is pushed outward, where it is crushed. This explains almost every feature below, from heartwood to bark.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions worth flagging.</b> The neat “one ring = one year” rule (annual rings) holds only where there is a clear seasonal contrast in cambial activity; in the uniform tropics, rings can be indistinct or misleading, so ring-counting gives an estimate, not a guarantee, of age. And “secondary growth absent in monocots” is the general rule: a few monocots (e.g. <i>Dracaena</i>) show anomalous secondary growth by a different mechanism, which is beyond the core syllabus.',
      },

      { t: 'part', title: 'Key structures and diagnostic features' },
      {
        t: 'p',
        html: '(No SI units or dimensional formulae apply; structures and contrasts are tabulated.)',
      },
      {
        t: 'table',
        title: 'The two lateral meristems and their products',
        head: ['Lateral meristem', 'Also called', 'Cuts off inward', 'Cuts off outward'],
        rows: [
          [
            'Vascular cambium',
            '–',
            'Secondary <b>xylem</b> (wood)',
            'Secondary <b>phloem</b>',
          ],
          [
            'Cork cambium',
            'Phellogen',
            'Secondary cortex (<b>phelloderm</b>)',
            '<b>Cork (phellem)</b>',
          ],
        ],
      },
      {
        t: 'p',
        html: 'The vascular cambium produces far more secondary xylem than secondary phloem, so wood forms the bulk of the trunk while the primary and much of the secondary phloem get crushed against the periphery.',
      },
      { t: 'p', html: '<b>Wood through the seasons: spring vs autumn wood</b>' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Spring / Early wood', 'Autumn / Late wood'],
        rows: [
          ['Cambial activity', 'High (favourable season)', 'Low'],
          ['Vessels/tracheids', 'More numerous, <b>wider</b> lumen', 'Fewer, <b>narrower</b> lumen'],
          ['Density & colour', 'Lower density, lighter', 'Higher density, darker'],
        ],
      },
      {
        t: 'p',
        html: 'One spring-wood layer + the following autumn-wood layer = one <b>annual ring</b> (growth ring). Counting annual rings estimates a tree’s age: the basis of <b>dendrochronology</b>.',
      },
      { t: 'p', html: '<b>Heartwood vs Sapwood</b>' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Heartwood (duramen)', 'Sapwood (alburnum)'],
        rows: [
          ['Position', 'Central, older', 'Peripheral, younger'],
          ['Colour', 'Dark', 'Light'],
          ['Living/dead', 'Dead', 'Contains living parenchyma; its conducting elements are dead but functional'],
          ['Conduction', 'Non-conducting', 'Conducts water + minerals'],
          [
            'Contents',
            'Tannins, resins, oils, gums; vessels plugged by <b>tyloses</b>',
            'Open, conducting vessels',
          ],
          [
            'Role',
            'Mechanical support; durable, decay/insect-resistant',
            'Active water transport',
          ],
        ],
      },
      { t: 'p', html: '<b>Periderm: the secondary protective tissue</b>' },
      {
        t: 'table',
        title: null,
        head: ['Layer', 'Origin', 'Nature'],
        rows: [
          [
            'Phellem (cork)',
            'Outer product of phellogen',
            'Dead, <b>suberised</b> walls; impervious to water and gases',
          ],
          [
            'Phellogen (cork cambium)',
            'Develops in the cortex (stem); from the pericycle in a dicot root',
            'Meristematic; thin-walled, rectangular cells',
          ],
          ['Phelloderm (secondary cortex)', 'Inner product of phellogen', 'Living parenchyma'],
        ],
      },
      {
        t: 'p',
        html: 'Phellem + phellogen + phelloderm = <b>periderm</b>. <b>Lenticels</b> are lens-shaped openings in the periderm, regions where the phellogen cuts off loose <b>complementary cells</b> (with intercellular spaces) that rupture the surface (NCERT calls these closely arranged parenchymatous cells), allowing gas exchange across the otherwise impervious cork. <b>Bark</b> is a non-technical term for all tissues lying <b>outside the vascular cambium</b> (for example the secondary phloem and the periderm, together with any primary phloem and cortex still present); bark formed early in the season is “soft bark”, later “hard bark”.',
      },
      {
        t: 'p',
        html: '<b>Why it matters: the biology behind everyday materials.</b> Secondary growth is the origin of two of the most-used plant products. <b>Timber</b> is mostly cut from heartwood: because its vessels are blocked by tyloses and impregnated with tannins, resins and oils, it resists fungi and insects and stays dimensionally stable, which is why heartwood is preferred for furniture, railway sleepers and construction beams, while sapwood is less durable unless treated. <b>Commercial cork</b> (for bottle stoppers, insulation and floats) is the phellem peeled from the thick bark of the cork oak, <i>Quercus suber</i>; its suberised, air-filled dead cells make it light, compressible and waterproof. The same suberin that waterproofs cork is what lets a mature tree survive the loss of its original epidermis. And because cambial activity is written into the wood as annual rings, a <b>dendrochronologist</b> can read a trunk’s cross-section like a calendar, dating the tree and even reconstructing past climate from the relative widths of good and lean years.',
      },
      {
        t: 'p',
        html: '<b>Xylem vs Phloem note:</b> secondary xylem (wood) is structurally the same four element types met earlier (tracheids, vessels, fibres, parenchyma), now laid down in bulk year after year; secondary phloem likewise repeats sieve tubes, companion cells, parenchyma and fibres, but is continually renewed because the older outer phloem is crushed and shed with the bark.',
      },

      { t: 'part', title: 'Comparative anatomy and logical framework' },
      {
        t: 'p',
        html: 'No formula is derived here; the examinable reasoning is the sequence by which each cambium forms and acts. Walk them as procedures.',
      },
      {
        t: 'proc',
        title: 'Framework A: How the vascular cambium ring forms in a dicot stem.',
        steps: [
          'In each vascular bundle, a strip of cambium already exists between the primary xylem and primary phloem: the <b>intrafascicular cambium</b> (the leftover procambium).',
          'For secondary growth, the cells of the <b>medullary (pith) rays</b> that lie between the bundles, adjoining the intrafascicular strips, become meristematic again (dedifferentiation) → <b>interfascicular cambium</b>.',
          'The intrafascicular and interfascicular cambia now join up into a <b>continuous cambial ring</b>.',
          'This ring divides and cuts off <b>secondary xylem toward the inside</b> and <b>secondary phloem toward the outside</b>. Because the inner (xylem) side is far more active, wood accumulates as the bulk of the axis.',
          'At intervals, the cambium also forms <b>secondary medullary rays</b> (vascular rays): radial files of parenchyma running through the wood for <b>radial conduction and storage</b>. (The cambium itself contains two cell types that explain this: elongated <b>fusiform initials</b>, which produce the axial system of vessels, tracheids, fibres and sieve elements, and shorter <b>ray initials</b>, which produce the horizontal ray parenchyma.)',
        ],
      },
      {
        t: 'p',
        html: 'The logic to remember: inside = xylem, outside = phloem, and xylem wins the volume contest; every downstream feature (heartwood at the centre, phloem crushed at the edge) follows from this.',
      },
      {
        t: 'proc',
        title: 'Framework B: How the cork cambium acts, and why lenticels appear.',
        steps: [
          'As girth increases, the epidermis and outer cortex are stretched and torn; the plant needs a new protective layer.',
          'A <b>cork cambium (phellogen)</b> arises in the cortex.',
          'It cuts off <b>cork (phellem) outward</b> (dead, suberised, waterproof cells) and <b>phelloderm (secondary cortex) inward</b> (living parenchyma).',
          'The waterproof cork would suffocate the inner living tissue, so at certain points the phellogen instead produces loose, rounded <b>complementary cells</b> that push out and rupture the surface, forming a <b>lenticel</b>, a built-in ventilation pore.',
        ],
      },
      {
        t: 'proc',
        title: 'Framework C: Secondary growth in the dicot root (how it differs from the stem).',
        steps: [
          'In the root, the vascular cambium is <b>secondary in origin</b>: it forms partly from the <b>conjunctive tissue just below the phloem</b> and partly from the <b>pericycle cells above the protoxylem</b>.',
          'These strips join into a cambial ring that is initially wavy (following the radial xylem) but soon becomes circular as it produces more secondary xylem on the inner side.',
          'Thereafter the activity mirrors the stem: secondary xylem inward, secondary phloem outward, and a periderm from a pericycle-derived cork cambium. (Recall: the <b>pericycle</b> is the root’s multitasker; it makes lateral roots <b>and</b> contributes to the cambium.)',
        ],
      },
      { t: 'fig', id: 'b11-06-fig-6.4' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board level | Distinguish-between',
        q: 'Give three differences between heartwood and sapwood.',
        steps: [
          '<b>Reasoning & answer.</b> Anchor each on a diagnostic axis: 1. <b>Position/age:</b> heartwood is central and older; sapwood is peripheral and younger. 2. <b>Function:</b> heartwood is dead and non-conducting (only support); sapwood has living parenchyma and conducts water and minerals. 3. <b>Contents/appearance:</b> heartwood is dark, filled with tannins/resins/oils and has tylosis-plugged vessels; sapwood is lighter with open, functional vessels.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level | Direct recall',
        q: 'Name the three layers that together make up the periderm, from outside to inside.',
        steps: [
          '<b>Reasoning & answer.</b> From outside inward: <b>phellem (cork) → phellogen (cork cambium) → phelloderm (secondary cortex)</b>. Speed hook: “<b>Phellem out, phelloderm in, phellogen the maker in between.</b>” Trap: students reverse phellem and phelloderm; remember phell-em is the dead cork on the exterior.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET level | Match the column',
        q: '<b>Column I</b><br>A. Tyloses<br>B. Lenticels<br>C. Interfascicular cambium<br>D. Spring wood<br><b>Column II</b><br>i. Gas-exchange pores in the periderm<br>ii. Balloon-like ingrowths plugging heartwood vessels<br>iii. Wide-vesselled, lighter, formed in favourable season<br>iv. Arises from medullary-ray cells between bundles',
        steps: [
          '<b>Reasoning & answer.</b> A-ii (tyloses plug heartwood vessels), B-i (lenticels = gas-exchange pores), C-iv (interfascicular cambium from medullary-ray cells), D-iii (spring wood = wide vessels, light).',
          'The trap swaps A and B: both are “openings/ingrowths”, but tyloses <b>block</b> vessels while lenticels <b>open</b> the bark.',
        ],
        ans: 'A-ii, B-i, C-iv, D-iii.',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty | Assertion–Reason',
        q: 'Assertion (A): In a woody dicot stem, the secondary phloem is far thinner than the secondary xylem and is often crushed. Reason (R): The vascular cambium is much more active on its inner (xylem) face than on its outer (phloem) face. <b>(a)</b> Both A and R true, R is the correct explanation of A <b>(b)</b> Both A and R true, R not the correct explanation of A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning & answer.</b> A is true: wood dominates the axis while phloem stays a thin peripheral band and the older phloem gets crushed against the cortex. R is true: the cambium cuts off many more xylem cells inward than phloem cells outward. R is precisely the mechanism behind A: unequal cambial activity directly produces the xylem/phloem volume imbalance.',
          'This rewards linking Framework A of the Comparative anatomy and logical framework part (“xylem wins the volume contest”) to the observed structure.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the two lateral meristems responsible for secondary growth and state the tissue each produces on its inner side.',
            a: 'Vascular cambium (inner side → secondary xylem/wood) and cork cambium/phellogen (inner side → phelloderm/secondary cortex).',
          },
          {
            q: '[CUET] What is the function of lenticels?',
            a: 'Lenticels permit gas exchange between the internal living tissues and the atmosphere across the otherwise impervious cork.',
          },
          {
            q: '[NEET] Why do monocots generally not show secondary growth? Answer in terms of their vascular bundles.',
            a: 'Monocot vascular bundles are conjoint, collateral and closed: they lack a cambium, so there is no lateral meristem to generate secondary tissue.',
          },
          {
            q: '[NEET] Distinguish spring wood from autumn wood, and state what one annual ring represents.',
            a: 'Spring/early wood has more, wider vessels (lighter, less dense); autumn/late wood has fewer, narrower vessels (darker, denser); one spring-wood + autumn-wood pair = one annual ring = (typically) one year’s growth.',
          },
          {
            q: '[NEET: high difficulty] Trace, in order, the origin of the vascular cambium in a dicot root, naming the two tissues that contribute to the cambial ring.',
            a: 'Cells of the conjunctive tissue just below the phloem become meristematic, and join with meristematic pericycle cells lying above the protoxylem, forming a wavy ring that later becomes circular.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Secondary growth in a dicot stem is brought about by:',
        opts: [
          {
            label: 'Apical meristem only',
            nudge: '<b>(a)</b>/<b>(b)</b> are responsible for primary growth in length.',
          },
          {
            label: 'Intercalary meristem',
            nudge: '<b>(a)</b>/<b>(b)</b> are responsible for primary growth in length.',
          },
          { label: 'Vascular cambium and cork cambium', nudge: null },
          {
            label: 'Procambium only',
            nudge: '<b>(d)</b> procambium gives the primary vascular tissue, not secondary girth.',
          },
        ],
        correct: 2,
        solution:
          'Both lateral meristems, vascular cambium (wood/secondary phloem) and cork cambium (periderm), drive the increase in girth. Trap: choosing (a) by confusing growth in length with growth in thickness.',
      },
      {
        t: 'mcq',
        q: 'The dead, suberised, waterproof outer layer formed by the phellogen is:',
        opts: [
          { label: 'Phelloderm', nudge: '<b>(a)</b> phelloderm is the <b>living inward</b> product.' },
          { label: 'Phellem', nudge: null },
          { label: 'Pericycle', nudge: '<b>(c)</b> pericycle is a primary ground-tissue layer.' },
          {
            label: 'Periderm',
            nudge: '<b>(d)</b> periderm is the <b>whole</b> three-layer complex, not just the cork.',
          },
        ],
        correct: 1,
        solution:
          'Phellem (cork) is the dead, suberised, outward product. Trap: picking (d) by confusing the part (phellem) with the whole (periderm).',
      },
      {
        t: 'mcq',
        q: 'Tyloses are characteristically associated with:',
        opts: [
          { label: 'Sapwood', nudge: '<b>(a)</b> sapwood vessels stay open and conducting.' },
          { label: 'Heartwood', nudge: null },
          { label: 'Spring wood', nudge: '<b>(c)</b>/<b>(d)</b> are unrelated.' },
          { label: 'Cork cambium', nudge: '<b>(c)</b>/<b>(d)</b> are unrelated.' },
        ],
        correct: 1,
        solution:
          'Tyloses are balloon-like ingrowths that plug the vessels of heartwood, contributing to its non-conducting, durable nature. Trap: associating tyloses with conduction (sapwood) when they actually <b>block</b> it.',
      },
      {
        t: 'mcq',
        q: 'Which of the following lies <b>outside</b> the vascular cambium and is therefore part of the “bark”?',
        opts: [
          {
            label: 'Secondary xylem',
            nudge:
              '<b>(a)</b> secondary xylem, <b>(b)</b> heartwood and <b>(d)</b> pith all lie <b>inside</b> the cambium.',
          },
          {
            label: 'Heartwood',
            nudge:
              '<b>(a)</b> secondary xylem, <b>(b)</b> heartwood and <b>(d)</b> pith all lie <b>inside</b> the cambium.',
          },
          { label: 'Secondary phloem', nudge: null },
          {
            label: 'Pith',
            nudge:
              '<b>(a)</b> secondary xylem, <b>(b)</b> heartwood and <b>(d)</b> pith all lie <b>inside</b> the cambium.',
          },
        ],
        correct: 2,
        solution:
          'Bark = every tissue outside the vascular cambium, for example the secondary phloem and the periderm. Trap: forgetting that wood is internal and only phloem + periderm are “bark”.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Phellem vs phelloderm reversal.</b> Phellem = dead cork on the <b>outside</b>; phelloderm = living parenchyma on the <b>inside</b>; phellogen makes both. Mnemonic: “cork is <b>em</b>-itted outward.”',
          '<b>Part vs whole.</b> Phellem is <b>one layer</b>; periderm is the <b>whole</b> phellem + phellogen + phelloderm complex. Don’t equate them.',
          '<b>Heartwood is not “dead and useless”.</b> It is dead and non-conducting, but it is a durable, decay-resistant support tissue, protected by tannins, resins and tyloses.',
          '<b>Annual rings ≠ guaranteed age.</b> One ring usually equals one year <b>only</b> where seasons differ sharply; tropical/uniform climates blur them, so ring-counting is an estimate.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy):</b> Orient every secondary-growth fact from the cambium: “<b>the cambium makes xylem inward and phloem outward, so the oldest wood is at the centre and the oldest phloem at the outside.</b>” From that compass you can place heartwood (centre), sapwood (just outside it), cambium, secondary phloem and periderm in the correct order without rote memory.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Secondary growth</b> = increase in <b>girth</b> by two <b>lateral meristems</b>: <b>vascular cambium + cork cambium (phellogen)</b>. In dicot stems/roots & gymnosperms; <b>absent in monocots</b> (closed bundles).',
            note: '',
          },
          {
            f: 'Vascular cambium',
            note: 'intrafascicular + interfascicular (from medullary-ray cells) → continuous ring; cuts <b>secondary xylem inward (wood, bulk)</b>, <b>secondary phloem outward</b> (thin, crushed); also makes secondary medullary rays.',
          },
          {
            f: 'Wood seasons',
            note: '<b>spring/early wood</b> (wide vessels, light) + <b>autumn/late wood</b> (narrow, dark) = one <b>annual ring</b> → age estimation (<b>dendrochronology</b>).',
          },
          {
            f: '<b>Heartwood</b> (central, dark, dead, non-conducting, tyloses, durable) vs <b>Sapwood</b> (peripheral, light, living parenchyma, conducting).',
            note: '',
          },
          {
            f: '<b>Periderm</b> = <b>phellem</b> (dead cork, suberised, outer) + <b>phellogen</b> (cork cambium) + <b>phelloderm</b> (living, inner). <b>Lenticels</b> = gas-exchange pores with complementary cells. <b>Bark</b> = everything outside the vascular cambium (for example the secondary phloem and the periderm).',
            note: '',
          },
          {
            f: 'Root secondary growth',
            note: 'cambium from conjunctive tissue (below phloem) + pericycle (above protoxylem) → wavy → circular ring.',
          },
        ],
        aids: [
          '“cork is <b>em</b>-itted outward (phell<b>em</b> out, phello<b>derm</b> in).”',
          '“Cambium: <b>xylem in, phloem out, xylem wins.</b>”',
          '“Oldest wood at the centre, oldest phloem at the edge.”',
        ],
      },
    ],
  },
];
