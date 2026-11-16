import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 5 (Morphology of Flowering Plants), Topics 01 and 02:
 * pp. 285 to 304 of the Class 11 Biology Master Reference, word for word. The
 * chapter title page (p. 284) and the contents box at the top of p. 285 are not
 * copied. Topic 01, The Root, the Stem, and the Leaf (pp. 285–294), and Topic 02,
 * Inflorescence and the Flower (pp. 295–304), are each cut at the book’s
 * Sections 1 to 8. Figures 5.1 to 5.3 (captions pp. 288 and 290, drawn pp. 289
 * and 291) and Figures 5.4 to 5.6 (captions pp. 298 and 300, drawn pp. 299 and
 * 301) are redrawn in lib/diagrams/biology-11-05.ts; these pages hold no other
 * drawing. Scientific names are italic as the book’s conventions teach; emphasis
 * italics are dropped.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 285–294 ─────────────────────────
  {
    n: '01',
    title: 'The Root, the Stem, and the Leaf',
    kalam: 'Picture a flowering plant the way you’d picture a small family business with two departments.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is one of the highest-yield vegetative-morphology topics for <b>NEET</b>, which reliably asks 2–4 questions per year (the book’s estimate from past papers, not official figures), usually plant-to-modification matching (Which plant shows stilt roots? Which is an underground stem?) and assertion–reason items. <b>CUET (Biology)</b> draws single-correct MCQs from exactly this material, and <b>CBSE Boards</b> favour 1–3 mark definition, diagram-labelling, and “distinguish between” questions. There is <b>no Biology in JEE</b>, so this topic does not appear there.',
      },
      {
        t: 'p',
        html: 'Picture a flowering plant the way you’d picture a small family business with two departments. One department works <b>underground, out of sight</b>: fetching raw materials and keeping the whole thing anchored. The other works <b>above ground, in the open</b>: manufacturing, storing, and eventually handling reproduction. The underground department is the <b>root system</b>; the above-ground department is the <b>shoot system</b> (stem, leaves, and later flowers and fruits). Together they form the plant’s body axis.',
      },
      {
        t: 'p',
        html: 'The single most useful idea in this whole topic is the difference between a <b>root</b> and a <b>stem</b>, because many trick questions are built on confusing the two. A root is the <b>descending</b>, usually non-green part. It grows down into the soil, it absorbs water and minerals, it anchors the plant, and it can store food and even make plant-growth regulators. Crucially, a root has <b>no nodes, no internodes and no leaves</b> (so no regular axillary buds; some roots can form adventitious buds), and its hairs are <b>unicellular</b>. A stem is the opposite in almost every respect: it grows up, it’s usually green when young (turning woody and brown later), it bears <b>nodes and internodes</b>, and it carries <b>buds</b>: terminal at the tip and axillary in the angle where a leaf meets the stem.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> the stem is a railway line and the <b>nodes are the stations</b>. A leaf can only board the train at a station (a leaf always arises at a node), and the stretch of empty track between two stations is the <b>internode</b>. A root has no railway line at all (no stations, no fixed boarding points), which is exactly why “absence of nodes and internodes” is the textbook way to tell a root from an underground stem. So when you dig up a potato and a sweet potato, the potato has tiny “eyes” (buds) sitting at nodes: it’s a stem; the sweet potato is a swollen <b>root</b> with no such buds. The two look alike in the basket and behave completely differently underground.',
      },
      {
        t: 'p',
        html: 'The leaf is the third member of the trio, and it has just one headline job: <b>photosynthesis</b>. It is the plant’s kitchen, its food factory: a flat green outgrowth that arises at a node and almost always carries a bud in its axil. Flatness is not an accident; a leaf is flat so it can intercept the maximum sunlight per gram of tissue, the same reason a shopkeeper spreads goods across a wide counter rather than piling them in a column.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions and what to watch for.</b> First, this topic is about <b>external morphology</b>: the form and arrangement of organs you can see with the naked eye. It is not anatomy, which deals with the internal tissues (epidermis, cortex, vascular bundles) seen under a microscope. Mixing the two is a common conceptual error here, so if a question mentions T.S. (transverse section), pericycle, casparian strips, or vascular bundles, it has left morphology and entered anatomy. Second, “underground = root” is a tempting shortcut that is <b>wrong</b>: ginger, turmeric, and potato are underground stems. Third, the root-versus-stem rules hold for the typical case; nature has exceptions (some adventitious roots arise from stem nodes), so always reason from the defining features, not from where the organ happens to sit.',
      },

      { t: 'part', title: 'Key terms, definitions and classification' },
      { t: 'p', html: '<b>Core definitions</b>' },
      {
        t: 'def',
        term: 'Root system',
        html: 'the descending, typically non-green part of the plant axis; develops from the <b>radicle</b>; lacks nodes, internodes and leaves (so no regular axillary buds; some roots can form adventitious buds); bears <b>unicellular</b> root hairs.',
      },
      {
        t: 'def',
        term: 'Shoot system',
        html: 'the ascending part developing from the <b>plumule</b>; comprises stem, leaves, buds, and later flowers and fruits.',
      },
      {
        t: 'def',
        term: 'Node',
        html: 'the point on a stem from which a leaf (or whorl of leaves) arises.',
      },
      {
        t: 'def',
        term: 'Internode',
        html: 'the region of stem between two successive nodes.',
      },
      {
        t: 'def',
        term: 'Bud',
        html: 'a compact, undeveloped shoot; <b>terminal</b> (at the apex) or <b>axillary</b> (in the axil of a leaf).',
      },
      {
        t: 'table',
        title: 'Classification of root systems',
        head: ['Type', 'Origin', 'Typical group', 'Example'],
        rows: [
          ['Tap root', 'from the radicle; one main root with laterals', 'most <b>dicots</b>', 'mustard'],
          ['Fibrous', 'many fine roots from the <b>stem base</b>; primary root short-lived', 'most <b>monocots</b>', 'wheat'],
          ['Adventitious', 'from any part other than the radicle', 'varied', 'grass, banyan, <i>Monstera</i>, maize'],
        ],
      },
      {
        t: 'p',
        html: '<b>Regions of the root tip</b> (apex → base): <b>root cap → meristematic (cell-division) zone → zone of elongation → zone of maturation (root-hair / piliferous zone)</b>.',
      },
      {
        t: 'p',
        html: 'Root hairs are confined to the zone of maturation and do the actual water + mineral absorption; the maturation zone is also where <b>lateral roots</b> originate.',
      },
      {
        t: 'table',
        title: 'Modifications of the root (root doing a job other than absorption/anchorage)',
        head: ['Modification', 'Function', 'Example'],
        rows: [
          ['Storage (tap)', 'store food, become swollen', 'carrot, turnip'],
          ['Storage (adventitious)', 'store food', 'sweet potato'],
          ['Prop / pillar', 'aerial roots hang down, support heavy branches', 'banyan (<i>Ficus benghalensis</i>)'],
          ['Stilt', 'from lower nodes of stem, give mechanical support', 'maize, sugarcane, screwpine'],
          [
            'Pneumatophore (respiratory)',
            'grow vertically <b>up</b> (negatively geotropic) for gas exchange',
            'mangroves: <i>Rhizophora</i>, <i>Avicennia</i>, <i>Heritiera</i>',
          ],
        ],
      },
      {
        t: 'table',
        title: 'Classification of stem modifications',
        head: ['Class', 'Modification', 'Job', 'Example'],
        rows: [
          [
            'Underground',
            'rhizome, tuber, corm, bulb (bulb: a very short stem disc bearing fleshy storage leaves; NCERT calls onion and garlic storage leaves)',
            'storage, perennation, vegetative propagation',
            'ginger (rhizome), potato (tuber), turmeric, zaminkand, <i>Colocasia</i>',
          ],
          [
            'Subaerial: stolon (the runner type)',
            'a slender lateral branch arises from the base of the main axis, grows aerially, then arches down to root at the tip',
            'vegetative spread',
            'mint, jasmine',
          ],
          [
            'Subaerial (offset)',
            'a short, thick lateral branch with one internode, bearing a rosette of leaves and a tuft of roots',
            'vegetative spread in aquatic plants',
            '<i>Pistia</i>, <i>Eichhornia</i>',
          ],
          [
            'Aerial',
            'stem tendril: spirally coiled, thread-like, sensitive',
            'climbing; arises from <b>axillary bud</b>',
            'cucumber, pumpkin, watermelon, grapevine',
          ],
          ['Aerial', 'thorn', 'protection from grazing/browsing animals', '<i>Citrus</i>, <i>Bougainvillea</i>'],
        ],
      },
      {
        t: 'p',
        html: '<b>Parts and features of the leaf</b><br>• <b>Leaf base</b> (attaches to stem; may bear <b>stipules</b>), <b>petiole</b> (stalk), <b>lamina / leaf blade</b> (flat green photosynthetic part with <b>midrib</b>, veins, and veinlets). Upper surface = <b>adaxial</b>; lower surface = <b>abaxial</b>.<br>• <b>Venation</b> (arrangement of veins): <b>reticulate</b> (net-like; characteristic of <b>dicots</b>) vs <b>parallel</b> (characteristic of <b>monocots</b>).<br>• <b>Simple vs compound leaf</b>: a simple leaf has a single, undivided lamina; its margin may be incised to varying depths, up to half (<b>-fid</b>), more than half (<b>-partite</b>), or nearly to the midrib/base (<b>-sect</b>), giving forms such as pinnatifid and palmatifid, but the incisions never cut the lamina into separate parts. A compound leaf has the lamina genuinely broken into distinct <b>leaflets</b>. Compound leaves are <b>pinnately compound</b> (leaflets along a central rachis, e.g. neem) or <b>palmately compound</b> (leaflets attached at the petiole tip, e.g. silk cotton).<br>• <b>Phyllotaxy</b> (arrangement of leaves on the stem): <b>alternate</b> (one leaf per node; mango, mustard, sunflower, china rose), <b>opposite</b> (two leaves per node; <i>Calotropis</i>, guava), <b>whorled</b> (more than two per node; <i>Nerium</i>; <b>NEET note:</b> NCERT’s example of whorled phyllotaxy is <i>Alstonia</i>).<br>• <b>Leaf modifications</b>: fleshy <b>storage</b> leaves (onion, garlic), <b>insectivorous</b> traps (pitcher plant, Venus flytrap), leaf <b>tendrils</b>, and leaves bearing <b>adventitious buds</b> for vegetative propagation (<i>Bryophyllum</i>, <i>Begonia</i>).',
      },

      { t: 'part', title: 'Key structures and labeled diagrams' },
      {
        t: 'p',
        html: '<b>Structure 1: The four zones of the root tip.</b> Reasoning from tip to base, in growth order: the very tip is covered by a <b>root cap</b>, a thimble of cells that protects the delicate apex as the root forces its way through soil. Just behind it is the <b>meristematic zone</b>, packed with small, thin-walled, rapidly dividing cells: this is the engine room that supplies new cells. The new cells are then pushed into the <b>zone of elongation</b>, where they stretch lengthwise; this is what actually drives the root down. Finally comes the <b>zone of maturation</b>, where cells differentiate into their final forms and the epidermis throws out <b>root hairs</b>, so this is the band that absorbs water and minerals, and also where <b>lateral roots</b> break out. The logic to remember: division happens first, elongation pushes, maturation works; absorption is therefore a little behind the tip, never at the very tip.',
      },
      { t: 'fig', id: 'b11-05-fig-5.1' },
      {
        t: 'p',
        html: '<b>Structure 2: Parts of a typical dicot leaf.</b> Trace it from the stem outward: the leaf attaches at the <b>leaf base</b>, which may carry two lateral <b>stipules</b>; from the base rises the <b>petiole</b> (the stalk that holds the blade out into the light); the petiole expands into the <b>lamina</b>, the flat green blade. Run a finger down the middle of the lamina and you meet the <b>midrib</b>, from which <b>veins</b> and finer <b>veinlets</b> spread out; these are the leaf’s plumbing and skeleton at once. Sitting in the angle between the leaf base and the stem is the <b>axillary bud</b>, which is your single best clue for the next structure.',
      },
      { t: 'fig', id: 'b11-05-fig-5.2' },
      {
        t: 'p',
        html: '<b>Procedure: telling a compound leaf from a branch bearing leaflets.</b> Students lose easy marks confusing a pinnately compound leaf with a small branch. The clean test: <b>a bud sits in the axil of a whole leaf, but never in the axils of the individual leaflets of a compound leaf.</b> So if you see buds tucked between the “leaflets,” you are looking at a branch with simple leaves, not one compound leaf. Step 1: locate the leaflets. Step 2: hunt for axillary buds between them. Step 3: no buds between them, one bud at the base of the whole structure ⇒ it’s a single compound leaf.',
      },
      { t: 'fig', id: 'b11-05-fig-5.3' },
      {
        t: 'p',
        html: '<b>Procedure: identifying an underground organ as stem or root.</b> Hand-test any swollen underground part with three checks, in order. <b>Check 1 (nodes and internodes):</b> scrape the surface and look for repeating points from which scale-leaves or buds arise. A horizontal ginger “hand” shows clear nodes carrying scaly leaves and buds in their axils: that alone marks it a <b>stem (rhizome)</b>. <b>Check 2 (buds):</b> a potato’s “eyes” are axillary buds at nodes; roots have no buds, so eyes settle it as a <b>stem (tuber)</b>. <b>Check 3 (root hairs and direction):</b> a true storage root (carrot, turnip, sweet potato) is smooth, has no nodes or scale-leaves in a regular pattern, and its hairs are unicellular; the carrot is the tap root itself, the sweet potato an adventitious root. The rule of thumb: if it carries nodes, scale-leaves, or buds, it is a stem no matter how deep it sits.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: '“Give one defining difference between a root and a stem, and use it to explain why a potato is classified as a stem while a sweet potato is classified as a root.”',
        steps: [
          '<b>Reasoning.</b> State the defining feature cleanly: a <b>stem bears nodes, internodes, and buds</b>, whereas a <b>root has none of these</b>. Now apply it. A potato, though it grows underground, has small depressions (“eyes”), and each eye is a <b>node bearing an axillary bud</b>, a feature only a stem can have. A sweet potato is a swollen organ with <b>no nodes and no buds</b>; it is an adventitious <b>root</b> modified for storage.',
        ],
        ans: 'Presence of nodes/internodes/buds is the defining feature of a stem; the potato has buds (eyes) at nodes → <b>stem (tuber)</b>; the sweet potato has none → <b>root (storage adventitious root)</b>.',
      },
      {
        t: 'ex',
        tag: 'CUET / Assertion–Reason',
        q: 'Assertion (A): A fibrous root system binds the surface layer of soil better than a single tap root does. Reason (R): In a fibrous system, numerous roots arise from the base of the stem and spread through the surface soil. Options: (a) Both A and R true, R is the correct explanation of A; (b) Both true, R not the correct explanation; (c) A true, R false; (d) A false, R true.',
        steps: [
          '<b>Reasoning.</b> R is factually correct: a fibrous system is a dense mat of roots originating from the stem base, occupying the surface layer. Does that mat explain better anchorage in loose topsoil? Yes: many roots spread laterally grip a wide patch of shallow soil, like the many guy-ropes of a tent versus a single peg. So A is true and R is its correct cause.',
        ],
        ans: '(a).',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '“A botany student examines four plants growing along a tidal mangrove creek and on a riverbank, and records: Plant W has roots growing vertically upward out of the waterlogged mud; Plant X (a large fig tree) has thick roots hanging from its branches to the ground; Plant Y (a cereal) has a dense tuft of fine roots from the stem base; Plant Z has a swollen orange storage root. Match each to the correct root type.”',
        steps: [
          '<b>Reasoning.</b> Work feature-by-feature. Vertical, upward roots from waterlogged anaerobic mud = <b>pneumatophores</b> (respiratory roots, negatively geotropic) → W. Thick roots descending from branches of a fig to support them = <b>prop roots</b> → X. A dense tuft of fine roots from the stem base of a cereal (monocot) = <b>fibrous root system</b> → Y. A single swollen storage organ that is a true root = <b>storage (tap) root</b> → Z.',
        ],
        ans: 'W = pneumatophores; X = prop roots; Y = fibrous roots; Z = storage tap root.',
      },
      {
        t: 'ex',
        tag: 'NEET tricky / multi-feature',
        q: '“Statement-I: Stem tendrils and thorns can both arise from axillary buds. Statement-II: In <i>Bryophyllum</i>, new plantlets arise from buds borne on the leaf margin, which is an example of a leaf functioning as an organ of vegetative propagation. Choose the option in which both statements are correctly evaluated, and identify the trap.”',
        steps: [
          '<b>Reasoning.</b> Statement-I: stem <b>tendrils</b> develop from axillary buds (cucurbits), and <b>thorns</b> in plants such as <i>Citrus</i> and <i>Bougainvillea</i> are also modified shoots arising from axillary buds, so I is <b>true</b>. Statement-II: <i>Bryophyllum</i> leaves carry adventitious buds at the margins that grow into new plantlets, a genuine case of the <b>leaf</b> as a propagation organ, so II is <b>true</b>. The trap is the reflex “tendrils and thorns are different things so the statement must be false,” and the second trap is assuming propagation is only ever by stem or root. Both are true; neither explains the other (they’re independent facts).',
        ],
        ans: 'Both Statement-I and Statement-II are true and independent; the distractor is treating “thorn” as non-shoot in origin.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the three types of root systems and give one example plant for each.',
            a: 'Tap (mustard), fibrous (wheat), adventitious (grass/banyan).',
          },
          {
            q: '[CUET] “All underground plant parts are roots.” State whether this is true or false and justify with two examples.',
            a: 'False: ginger, turmeric, potato are underground stems (they bear nodes/buds).',
          },
          {
            q: '[NEET] In which one of the following is the modification correctly paired with its function: (i) pneumatophore: storage, (ii) stilt root: mechanical support, (iii) stem tendril: protection, (iv) thorn: climbing?',
            a: '(ii) stilt root: mechanical support.',
          },
          {
            q: '[NEET] Arrange the regions of a root from the tip towards the base: zone of elongation, root cap, zone of maturation, meristematic zone.',
            a: 'Root cap → meristematic zone → zone of elongation → zone of maturation.',
          },
          {
            q: '[NEET tricky] A leaf-like structure bears an axillary bud at its base but no buds between its parts. Is it a simple leaf, a compound leaf, or a branch? Justify.',
            a: 'A <b>compound leaf</b>: a bud occurs in the axil of a whole leaf but never between leaflets, so the absence of buds between the parts plus a single basal axillary bud confirms one compound leaf.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A plant part is non-green, lacks nodes and internodes, and bears unicellular hairs. It is most likely a:',
        opts: [
          {
            label: 'underground stem',
            nudge:
              '<b>(a), (c), (d)</b> are all underground <b>stems</b>, which bear nodes and buds: students pick these by assuming “underground = root,” the single biggest trap in this topic.',
          },
          { label: 'root', nudge: null },
          {
            label: 'rhizome',
            nudge:
              '<b>(a), (c), (d)</b> are all underground <b>stems</b>, which bear nodes and buds: students pick these by assuming “underground = root,” the single biggest trap in this topic.',
          },
          {
            label: 'corm',
            nudge:
              '<b>(a), (c), (d)</b> are all underground <b>stems</b>, which bear nodes and buds: students pick these by assuming “underground = root,” the single biggest trap in this topic.',
          },
        ],
        correct: 1,
        solution: 'Unicellular hairs and the absence of nodes/internodes are defining root features.',
      },
      {
        t: 'mcq',
        q: 'Reticulate venation and parallel venation are characteristic, respectively, of:',
        opts: [
          {
            label: 'monocots and dicots',
            nudge:
              '<b>(a)</b> is the exact reversal: the most common error, chosen by students who memorise the pair without anchoring “net = dicot.”',
          },
          { label: 'dicots and monocots', nudge: null },
          {
            label: 'both dicots',
            nudge: '<b>(c)</b> and <b>(d)</b> ignore that the two patterns distinguish the groups.',
          },
          {
            label: 'both monocots',
            nudge: '<b>(c)</b> and <b>(d)</b> ignore that the two patterns distinguish the groups.',
          },
        ],
        correct: 1,
        solution: 'Reticulate (net-like) venation is the dicot pattern; parallel venation is the monocot pattern.',
      },
      {
        t: 'mcq',
        q: 'Stilt roots and prop roots are both:',
        opts: [
          { label: 'modifications for storage of food', nudge: '<b>(a)</b> confuses them with storage roots.' },
          { label: 'adventitious roots providing mechanical support', nudge: null },
          {
            label: 'found only in mangroves',
            nudge: '<b>(c)</b> wrongly restricts them to mangroves: stilt roots occur in maize, sugarcane and screwpine and prop roots in banyan, not only in mangroves (mangroves are the home of pneumatophores).',
          },
          {
            label: 'modified stems',
            nudge: '<b>(d)</b> is the morphology-vs-organ trap: they are roots, not stems.',
          },
        ],
        correct: 1,
        solution:
          'Both are adventitious roots whose job is mechanical support: stilt roots from lower stem nodes (maize, sugarcane), prop roots descending from branches (banyan).',
      },
      {
        t: 'mcq',
        q: 'Which one of the following correctly matches a plant with its modification?',
        opts: [
          { label: 'Ginger: modified root', nudge: '<b>(a)</b> ginger is a modified stem (rhizome), not a root.' },
          {
            label: 'Sweet potato: modified stem',
            nudge: '<b>(b)</b> sweet potato is a modified root, not a stem: the classic potato/sweet-potato swap.',
          },
          { label: 'Onion: modified leaf (fleshy storage)', nudge: null },
          { label: 'Banyan prop root: modified leaf', nudge: '<b>(d)</b> a prop root is a root, not a leaf.' },
        ],
        correct: 2,
        solution: 'The fleshy scales of an onion bulb are storage <b>leaves</b>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Underground means root.”</b> Ginger, turmeric, potato, zaminkand, and <i>Colocasia</i> are underground <b>stems</b>. Always check for nodes/buds, not depth in the soil.',
          '<b>Potato ↔ sweet potato swap.</b> Potato = stem tuber (has eyes/buds at nodes); sweet potato = storage root (no buds).',
          '<b>Venation reversal.</b> Anchor it once: <b>net = dicot, parallel = monocot.</b> Half the venation questions are deliberately worded to tempt the reversal (the book’s estimate from past papers, not official figures).',
          '<b>Compound leaf called a branch.</b> The bud test settles it: a bud sits in the axil of a whole leaf, never between leaflets.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> For every root or stem modification, store it as a <b>(structure → job → one example)</b> triplet, not as a lone word. NEET often asks the example or the function (the book’s estimate from past papers, not official figures), less often the bare term, so “stilt root → support → sugarcane” earns the mark, while “stilt root” alone usually doesn’t. And the instant a question mentions a transverse section, vascular bundles, or casparian strips, flag it: you’ve crossed from <b>morphology into anatomy</b>, and the answer lives in a different chapter.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Root vs Stem',
            note: 'Root = descending, non-green, <b>no</b> nodes/internodes/leaves (so no regular axillary buds; some roots can form adventitious buds), <b>unicellular</b> hairs, from radicle. Stem = ascending, green when young, <b>has</b> nodes/internodes/buds, from plumule.',
          },
          { f: 'Root systems', note: 'tap (dicot, mustard) · fibrous (monocot, wheat) · adventitious (banyan, grass, maize).' },
          {
            f: 'Root zones (tip→base)',
            note: 'root cap → meristematic → elongation → maturation (root-hair, absorption + lateral roots).',
          },
          {
            f: 'Root modifications',
            note: 'storage (carrot, sweet potato) · prop (banyan) · stilt (sugarcane, maize) · pneumatophore (mangroves: <i>Rhizophora</i>).',
          },
          {
            f: 'Stem modifications',
            note: 'underground (rhizome–ginger, tuber–potato) · aerial tendril (cucurbits) · thorn (<i>Citrus</i>, <i>Bougainvillea</i>).',
          },
          {
            f: 'Leaf',
            note: 'parts = leaf base (±stipules) · petiole · lamina (midrib + veins). Venation <b>net=dicot / parallel=monocot</b>. Compound = pinnate (neem) / palmate (silk cotton). Phyllotaxy = alternate (mustard) · opposite (guava) · whorled (<i>Nerium</i>).',
          },
        ],
        aids: [
          '“Roots have no Nodes, no Buds: Never Boards the leaf-train.”',
          '“Net for Dicot, Parallel for Mono.”',
          '“Potato has eyes (stem), sweet potato is blind (root).”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 295–304 ─────────────────────────
  {
    n: '02',
    title: 'Inflorescence and the Flower',
    kalam:
      'When a flowering plant is ready to reproduce, its shoot tip stops making leaves and starts making a flower instead.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is among the densest scoring zones of the whole syllabus for <b>NEET</b>, which mines it for 2–4 questions a year (the book’s estimate from past papers, not official figures), especially symmetry, aestivation, ovary position, placentation, and “how-many-of-these” counting items. <b>CUET (Biology)</b> lifts single-correct MCQs straight from this material, and <b>CBSE Boards</b> ask 2–3 mark labelled-diagram and “define/distinguish” questions, plus the occasional floral-formula construction. There is <b>no Biology in JEE</b>, so it does not appear there. The terminology is the topic: learn each term with its standard plant example.',
      },
      {
        t: 'p',
        html: 'In Topic 01 we treated the plant as a body of vegetative organs: root, stem, leaf. Now the plant switches jobs. When a flowering plant is ready to reproduce, its shoot tip stops making leaves and starts making a <b>flower</b> instead. That single sentence is the key to this entire topic: <b>a flower is nothing more than a modified shoot</b> whose growing tip has been reprogrammed to produce floral parts at its nodes rather than ordinary leaves. The internodes don’t elongate, so all those parts sit crowded together on a compressed axis, which is exactly why a flower looks like a tight rosette rather than a long stalk.',
      },
      {
        t: 'p',
        html: 'Before a single flower, there’s a logistical question: how do you arrange many flowers on a plant? A plant that produced one flower at the very tip of its main stem would be done after one bloom. So most plants spread their flowers along a branch system called the <b>inflorescence</b>: the arrangement of flowers on the floral axis. The whole point of an inflorescence is to put out more flowers and to present them well for pollinators.',
      },
      {
        t: 'p',
        html: 'There are two great strategies, and they differ in one decision: does the main axis keep growing, or does it stop by turning into a flower? In a <b>racemose</b> inflorescence the main axis keeps growing indefinitely and bears flowers along its sides, with the oldest flowers at the bottom and the youngest near the growing tip (this bottom-to-top order is called <b>acropetal</b>). In a <b>cymose</b> inflorescence the main axis stops because its tip itself becomes a flower; further flowers then arise below, so the oldest flower is at the top (<b>basipetal</b> order).',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> a racemose axis is like an escalator that never stops: it keeps rising and dropping off flowers along the way, newest near the top. A cymose axis is like a staircase that ends in a locked door at the top: the topmost step (the terminal flower) is built first and blocks further upward growth, so building continues downward. <i>Brassica</i> (mustard) is racemose; <i>Solanum</i> is cymose.',
      },
      {
        t: 'p',
        html: 'Now zoom into a single flower. A typical flower carries up to <b>four whorls</b> of parts, attached to a swollen receptacle called the <b>thalamus</b>. From outside in: the <b>calyx</b> (sepals: usually green, protective), the <b>corolla</b> (petals: often coloured, attract pollinators), the <b>androecium</b> (stamens: the male parts), and the <b>gynoecium</b> (carpels: the female parts). The calyx and corolla are accessory (non-essential) whorls; the androecium and gynoecium are the essential (reproductive) whorls. A flower with both essential whorls is <b>bisexual</b>; with only one, <b>unisexual</b>.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions / what to watch.</b> First, this is still morphology: external form and arrangement. The detailed events of reproduction (pollination, fertilisation, embryo development) belong to a separate Class 12 chapter; importing them here is a classic confusion. Second, “non-essential” does <b>not</b> mean useless: sepals protect the bud and petals recruit pollinators; the word only means “not directly reproductive.” Third, several distinctions in this topic are pairs that students reflexively swap (symmetry, aestivation classes, racemose vs cymose), so always anchor each term to its standard example.',
      },

      { t: 'part', title: 'Key terms, definitions and classification' },
      {
        t: 'table',
        title: 'Inflorescence',
        head: ['Type', 'Main axis', 'Flowering order', 'Example'],
        rows: [
          ['Racemose', 'continues growing (indefinite)', '<b>acropetal</b> (oldest at base)', 'mustard/<i>Brassica</i>'],
          ['Cymose', 'terminates in a flower (definite)', '<b>basipetal</b> (oldest at top)', '<i>Solanum</i>'],
        ],
      },
      {
        t: 'p',
        html: 'A <b>solitary</b> flower is a single flower borne alone. A <b>bract</b> is a reduced leaf at the base of the pedicel; a <b>pedicel</b> is the flower stalk.',
      },
      {
        t: 'table',
        title: 'Parts of a flower (four whorls, on the thalamus)',
        head: ['Whorl', 'Unit', 'Nature', 'Role'],
        rows: [
          ['Calyx', 'sepals', 'accessory (non-essential), usually green', 'protect the bud'],
          ['Corolla', 'petals', 'accessory, often coloured', 'attract pollinators'],
          ['Androecium', 'stamens', 'essential (male)', 'produce pollen'],
          ['Gynoecium', 'carpels', 'essential (female)', 'bear ovules'],
        ],
      },
      {
        t: 'p',
        html: 'When calyx and corolla are not distinguishable (as in lily), the undifferentiated whorl is the <b>perianth</b> (units = <b>tepals</b>).',
      },
      {
        t: 'table',
        title: 'Symmetry of the flower',
        head: ['Type', 'Division', 'Example'],
        rows: [
          ['Actinomorphic (radial)', 'into equal halves by any vertical plane through the centre', 'mustard, <i>Datura</i>, chilli'],
          ['Zygomorphic (bilateral)', 'into equal halves by only one vertical plane', 'pea, bean, <i>Cassia</i>, gulmohur'],
          ['Asymmetric', 'cannot be halved by any plane', '<i>Canna</i>'],
        ],
      },
      {
        t: 'p',
        html: '<b>Aestivation</b>: the mode of arrangement of sepals/petals in the bud relative to others of the same whorl:',
      },
      {
        t: 'table',
        title: null,
        head: ['Aestivation', 'Description', 'Example'],
        rows: [
          ['Valvate', 'margins just touch, no overlap', '<i>Calotropis</i>'],
          ['Twisted', 'one margin overlaps the next, regularly', 'China rose, cotton, lady’s finger'],
          ['Imbricate', 'margins overlap, but not in a set direction', '<i>Cassia</i>, gulmohur'],
          ['Vexillary (papilionaceous)', '5 petals: large <b>standard</b> + 2 <b>wings</b> + 2 fused <b>keel</b>', 'pea, bean'],
        ],
      },
      {
        t: 'p',
        html: '<b>Cohesion (parts of the same whorl) & adhesion (different whorls)</b><br>• <b>Gamosepalous / polysepalous</b> = sepals united / free.<br>• <b>Gamopetalous / polypetalous</b> = petals united / free.<br>• <b>Epipetalous</b> = stamens attached to petals (brinjal); <b>epiphyllous</b> = stamens attached to perianth (lily).',
      },
      {
        t: 'p',
        html: '<b>Androecium: stamen structure & fusion</b><br>• A stamen = <b>filament + anther</b> (joined by a <b>connective</b>); pollen forms in the anther. A sterile stamen is a <b>staminode</b>.<br>• Fusion of stamens: <b>monadelphous</b> (one bundle, China rose), <b>diadelphous</b> (two bundles 9+1, pea), <b>polyadelphous</b> (many bundles, <i>Citrus</i>).<br>• Special length conditions: <b>didynamous</b> (2 long + 2 short, <i>Salvia</i>/<i>Ocimum</i>), <b>tetradynamous</b> (4 long + 2 short, mustard/Brassicaceae).<br><b>NEET note:</b> NCERT’s example of didynamous stamens is <i>Salvia</i>.',
      },
      {
        t: 'p',
        html: '<b>Gynoecium: carpel structure & cohesion</b><br>• A carpel = <b>stigma + style + ovary</b>; the ovary bears <b>ovules</b>.<br>• One carpel = <b>monocarpellary</b>; many free carpels = <b>apocarpous</b>; many fused carpels = <b>syncarpous</b>.',
      },
      {
        t: 'table',
        title: 'Position of the ovary on the thalamus',
        head: ['Flower type', 'Ovary', 'Other whorls', 'Example'],
        rows: [
          ['Hypogynous', '<b>superior</b> (highest)', 'below the ovary', 'mustard, China rose, brinjal'],
          ['Perigynous', '<b>half-inferior</b> (mid-level)', 'on the rim, at ovary level', 'plum, rose, peach'],
          ['Epigynous', '<b>inferior</b> (lowest)', 'above the ovary', 'guava, cucumber, sunflower ray florets'],
        ],
      },
      {
        t: 'p',
        html: '<b>Placentation</b>: the arrangement of ovules (on the <b>placenta</b>) within the ovary:',
      },
      {
        t: 'table',
        title: null,
        head: ['Type', 'Arrangement', 'Example'],
        rows: [
          ['Marginal', 'ovules along the ventral suture, ovary unilocular', 'pea (Fabaceae)'],
          ['Axile', 'ovules on a central axis, ovary multilocular', 'China rose, tomato, lemon'],
          ['Parietal', 'ovules on the inner ovary wall/periphery', 'mustard, <i>Argemone</i>'],
          ['Free central', 'ovules on a central column, no septa', '<i>Dianthus</i>, primrose'],
          ['Basal', 'a single ovule at the base', 'sunflower, marigold'],
        ],
      },

      { t: 'part', title: 'Diagnostic identification and labeled structures' },
      {
        t: 'p',
        html: 'This topic is tested by recognition and construction: reading floral diagrams, building floral formulae, and assigning a feature from a figure. Train the routines.',
      },
      {
        t: 'p',
        html: '<b>(a) Floral diagram vs floral formula: what each one shows.</b> This is a frequently tested point, so fix it firmly. A <b>floral diagram</b> is a cross-sectional sketch of the whorls; it shows <b>aestivation</b> and <b>placentation</b> but <b>cannot</b> show the position of the ovary. A <b>floral formula</b> is a one-line symbolic summary; it <b>can</b> show ovary position (by a line above/below the G) but cannot show aestivation or placentation. So: ovary position → formula (a line below or above G) or a longitudinal section; aestivation & placentation → diagram.',
      },
      {
        t: 'p',
        html: 'The floral-formula symbols you must read:<br>• Symmetry: ⊕ actinomorphic, % zygomorphic.<br>• Sex: ♂ male, ♀ female, ⚥ bisexual.<br>• Whorls: <b>Br</b> bract, <b>K</b> calyx, <b>C</b> corolla, <b>P</b> perianth, <b>A</b> androecium, <b>G</b> gynoecium.<br>• A bracket around a number = those parts are <b>fused</b> (e.g. K<sub>(5)</sub> = five fused sepals).<br>• A <b>line above G</b> = inferior ovary (epigynous); a <b>line below G</b> = superior ovary (hypogynous).',
      },
      { t: 'fig', id: 'b11-05-fig-5.4' },
      {
        t: 'p',
        html: '<b>(b) Determining ovary position from a side view.</b> Look at where the other whorls insert relative to the ovary: insert below the ovary → hypogynous (superior); insert at the same level/on a rim → perigynous (half-inferior); insert above the ovary → epigynous (inferior). The single most reliable phrasing for marks: “ovary superior” ↔ hypogynous, “ovary inferior” ↔ epigynous.',
      },
      { t: 'fig', id: 'b11-05-fig-5.5' },
      {
        t: 'p',
        html: '<b>(c) Telling racemose from cymose at a glance.</b> Find the tip of the main axis. A flower sitting at the very tip (so the axis can’t grow further) → <b>cymose</b>, and the youngest flowers will be lower down (basipetal). No terminal flower, just a continuing growing point with flowers along the sides and the youngest near the top → <b>racemose</b> (acropetal).',
      },
      { t: 'fig', id: 'b11-05-fig-5.6' },
      {
        t: 'p',
        html: '<b>(d) Assigning aestivation from a bud cross-section.</b> Ask: do the margins overlap? No overlap, edges merely touching → valvate. Regular one-over-next overlap → twisted. Overlap but irregular/no fixed direction → imbricate. Five petals with a big outer standard, two wings, two keel → vexillary. Anchor each to its plant (<i>Calotropis</i> / China rose / <i>Cassia</i> / pea) and the matching items become automatic.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Name the four whorls of a typical flower from outside to inside, state which are essential, and give the technical term for the whorl when sepals and petals are not distinguishable.',
        steps: [
          'A clean ordered answer is what a 2–3 mark question rewards:<br>• Outermost to innermost: <b>calyx → corolla → androecium → gynoecium</b>, all borne on the thalamus.<br>• <b>Essential (reproductive)</b> whorls: androecium and gynoecium. Calyx and corolla are accessory.<br>• When calyx and corolla are indistinguishable (as in lily), the whorl is the <b>perianth</b> and its units are <b>tepals</b>.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / single-correct',
        q: 'A flower can be divided into two equal halves by only one particular vertical plane. This symmetry is: (a) actinomorphic (b) zygomorphic (c) asymmetric (d) radial',
        steps: [
          '<b>Reasoning:</b> “Only one plane gives equal halves” is the definition of <b>bilateral</b> symmetry = <b>zygomorphic</b> (e.g. pea). “Any plane” would be actinomorphic/radial; “no plane” would be asymmetric.',
        ],
        ans: '(b).',
      },
      {
        t: 'ex',
        tag: 'NEET / match the columns',
        q: 'Match the placentation type with its plant example:<br>Column I (placentation): P. Marginal; Q. Axile; R. Parietal; S. Free central.<br>Column II (example): 1. tomato; 2. <i>Dianthus</i>; 3. pea; 4. <i>Argemone</i>.',
        steps: [
          '<b>Elimination logic:</b> Marginal is the textbook one-carpel pea ovary → <b>P–3</b>. Free central belongs to <i>Dianthus</i>/primrose → <b>S–2</b>. Parietal (ovules on the wall) is <i>Argemone</i>/mustard → <b>R–4</b>. The remaining pair, and the correct one, is axile → tomato → <b>Q–1</b>.',
          '<b>Note:</b> placentation is about ovule arrangement inside the ovary, not where the ovary sits on the thalamus.',
        ],
        ans: 'P–3, Q–1, R–4, S–2.',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty / Assertion–Reason',
        q: 'Assertion (A): The position of the ovary cannot be deduced from a floral diagram alone. Reason (R): A floral diagram is a transverse (cross-sectional) representation, so the vertical relation of the ovary to the other whorls is not shown; the floral formula records it by a line below G (superior) or above G (inferior). Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
        steps: [
          '<b>Reasoning:</b> Test A: a floral diagram shows the whorls in cross-section: it conveys aestivation and placentation, but the vertical relationship between ovary and other whorls (superior/inferior) doesn’t appear. So A is <b>true</b>. Test R: the floral diagram is indeed a cross-sectional (transverse) view, and ovary position is encoded in the floral formula by a line above or below the G symbol. R is true and explains A.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define inflorescence. Distinguish racemose from cymose inflorescence on the basis of (i) growth of the main axis and (ii) order of opening of flowers.',
            a: 'Inflorescence = arrangement of flowers on the floral axis; racemose: axis continues growing (indefinite), flowers acropetal; cymose: axis ends in a terminal flower (definite), flowers basipetal.',
          },
          {
            q: '[CUET] In which aestivation do the petals merely touch at their margins without overlapping? Give one example.',
            a: 'Valvate; <i>Calotropis</i>.',
          },
          {
            q: '[NEET] Name the type of ovary (superior/half-inferior/inferior) and the corresponding flower type for: (i) mustard, (ii) plum, (iii) cucumber.',
            a: '(i) superior/hypogynous, (ii) half-inferior/perigynous, (iii) inferior/epigynous.',
          },
          {
            q: '[NEET] Of the following, how many bear a superior ovary: mustard, China rose, brinjal, guava, cucumber, sunflower?',
            a: 'Three (mustard, China rose, brinjal).',
          },
          {
            q: '[NEET high-difficulty] A flower has stamens fused into two bundles. Name this condition and give the family it characterises, along with the aestivation typical of that family.',
            a: 'Diadelphous; Fabaceae; vexillary (papilionaceous) aestivation.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In a cymose inflorescence, the youngest flower is located:',
        opts: [
          { label: 'at the base of the axis', nudge: null },
          { label: 'at the tip of the axis', nudge: '<b>(b)</b> describes racemose (acropetal).' },
          { label: 'in the middle only', nudge: '<b>(c)</b> and <b>(d)</b> ignore the ordered pattern.' },
          { label: 'randomly', nudge: '<b>(c)</b> and <b>(d)</b> ignore the ordered pattern.' },
        ],
        correct: 0,
        solution:
          'In cymose the main axis terminates in the oldest (terminal) flower, so newer flowers arise below it: youngest at the base (basipetal). The trap is mixing the two orders; anchor it as “cymose = terminal flower oldest = youngest below.”',
      },
      {
        t: 'mcq',
        q: 'Vexillary aestivation, with one standard, two wings and two keel petals, is characteristic of:',
        opts: [
          { label: 'Solanaceae', nudge: '<b>(a) Solanaceae</b> has valvate aestivation.' },
          { label: 'Fabaceae', nudge: null },
          {
            label: 'Brassicaceae',
            nudge: '<b>(c) Brassicaceae</b> is the mustard family (cruciform corolla, tetradynamous stamens).',
          },
          { label: 'Asteraceae', nudge: '<b>(d) Asteraceae</b> has small florets in a head.' },
        ],
        correct: 1,
        solution:
          'The standard–wings–keel arrangement is the papilionaceous corolla of <b>Fabaceae</b> (pea family). Students who memorise “vexillary” without its family fall for (a) or (c).',
      },
      {
        t: 'mcq',
        q: 'The position of the gynoecium (superior/inferior) is best shown by:',
        opts: [
          {
            label: 'floral diagram',
            nudge: '<b>(a)</b> shows aestivation and placentation but not ovary position.',
          },
          { label: 'floral formula', nudge: null },
          { label: 'both equally', nudge: '<b>(c)</b> wrongly gives the diagram credit for showing ovary position.' },
          { label: 'neither', nudge: '<b>(d)</b> ignores that a line above or below G in the formula shows ovary position.' },
        ],
        correct: 1,
        solution:
          'Ovary position is encoded in the <b>floral formula</b> (a line above/below G), not in the cross-sectional floral diagram.',
      },
      {
        t: 'mcq',
        q: 'Axile placentation is found in:',
        opts: [
          { label: 'pea', nudge: '<b>(a) pea</b> is marginal.' },
          { label: 'mustard', nudge: '<b>(b) mustard</b> is parietal.' },
          { label: 'tomato', nudge: null },
          { label: 'marigold', nudge: '<b>(d) marigold</b> is basal.' },
        ],
        correct: 2,
        solution:
          'Tomato (like China rose and lemon) has a multilocular ovary with ovules on a central axis = <b>axile</b>. The common error is confusing axile with marginal: remember axile needs multiple chambers with a central axis, marginal is a single chamber.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Ovary position ≠ placentation.</b> Hypogynous/perigynous/epigynous describe where the ovary sits on the thalamus; marginal/axile/parietal/etc. describe where the ovules sit inside the ovary. These are different questions about different things.',
          '<b>Aestivation example-swaps.</b> Valvate–<i>Calotropis</i>, twisted–China rose/cotton, imbricate–<i>Cassia</i>/gulmohur, vexillary–pea. Students memorise the four names but mis-pair the plants.',
          '<b>Racemose/cymose order reversed.</b> Tie it to the axis: racemose axis keeps growing (acropetal), cymose axis stops at a terminal flower (basipetal).',
          '<b>Diagram-vs-formula information.</b> A frequent 1-mark loss: claiming a floral diagram shows ovary position. It doesn’t.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & accuracy):</b><br>• For “<b>superior vs inferior ovary</b>,” translate immediately: superior = hypogynous, inferior = epigynous, half = perigynous. Questions often phrase it one way and answer the other.<br>• For counting-type items (“how many have a superior ovary”), keep a tiny mental anchor list (<b>superior:</b> mustard, China rose, brinjal; <b>inferior:</b> guava, cucumber, sunflower ray florets) and count against it instead of reasoning each plant from scratch.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Flower = modified shoot',
            note: 'four whorls on the thalamus: calyx, corolla (accessory) + androecium, gynoecium (essential).',
          },
          {
            f: 'Inflorescence',
            note: 'racemose (axis grows, acropetal, mustard) vs cymose (axis ends in flower, basipetal, <i>Solanum</i>).',
          },
          { f: 'Symmetry', note: 'actinomorphic (mustard) · zygomorphic (pea) · asymmetric (<i>Canna</i>).' },
          {
            f: 'Aestivation',
            note: 'valvate (<i>Calotropis</i>) · twisted (China rose) · imbricate (<i>Cassia</i>) · vexillary (pea).',
          },
          {
            f: 'Ovary position',
            note: 'hypogynous = superior (mustard) · perigynous = half-inferior (plum) · epigynous = inferior (guava).',
          },
          {
            f: 'Placentation',
            note: 'marginal (pea) · axile (tomato) · parietal (mustard) · free central (<i>Dianthus</i>) · basal (sunflower).',
          },
          { f: 'Formula vs diagram', note: 'ovary position → formula (a line below or above G) or a longitudinal section; aestivation & placentation → diagram.' },
        ],
        aids: [
          'Ovary position → <b>“Hypo-Super, Epi-Infer”</b> (hypogynous–superior, epigynous–inferior).',
          'Aestivation → <b>“Valvate Touches, Twisted Turns, Imbricate Irregular, Vexillary = petal flag (pea).”</b>',
          'Inflorescence → <b>“Racemose Rises (acropetal), Cymose Caps off (terminal flower).”</b>',
          'Diagram shows what you see in section (aestivation, placentation); formula adds what you can’t (ovary position).',
        ],
      },
    ],
  },
];
