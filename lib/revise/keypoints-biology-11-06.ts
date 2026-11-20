/**
 * KEY POINTS for Biology Class 11, Chapter 6 (Anatomy of Flowering Plants).
 *
 * Written for test mode, in the Chapter 1 form: every point is a question to
 * answer in your head, then the answer and at most one more line. Four kinds,
 * each a section on the screen: Remember (two a topic), Don't mix up, Common
 * mistakes and Exam shortcuts (one each); an Additional topic has two points
 * for its central results. Memory lines are a fifth, short section of their
 * own, read rather than tested: the first two of each topic.
 *
 * `topic`: Topics 01 to 04 are 0 to 3; Additional topics A to F are 4 to 9; G
 * (the book's Addendum P, What NEET Actually Asks) is 10. No point refers to
 * another topic by number.
 *
 * Every fact is from the chapter text (the Master Reference book); the page
 * (the bottom folio) is above each point. Remember: the topic's tables,
 * frameworks and Cheat sheet. Don't mix up: the confusable pair the chapter
 * itself warns about. Common mistakes: its Common student pitfalls. Exam
 * shortcuts: its Pro-Tip, with a worked example or practice answer. `say`: the
 * cheat sheet's first memory aids, word for word, in the Chemistry form: no
 * quotation marks and no markup. Topic 01's cheat sheet prints one aid, which
 * is the only line it has; Topics 02 to 04 each use their first two, so the
 * chapter has seven lines. Additional topics: the addenda's methods, worked
 * examples and practice answers; G: its distribution, archetypes and traps.
 *
 * Where the book's claim is looser or wrong, the point is true, and follows
 * the chapter text as it stands:
 * - "dead, no protoplast, so sclerenchyma" is scoped to the three simple
 *   tissues (tracheids, vessels and cork are dead too); "the gritty-pulp clue
 *   always means sclereid" and the superlatives ("the single most common
 *   error", "the top NEET error", "the single most-missed pair") are not
 *   repeated; collenchyma is "usually without intercellular spaces" (lacunar
 *   collenchyma has them), its wall is cellulose, hemicellulose and pectin
 *   throughout (the book says "cellulose + pectin" elsewhere), and meristem
 *   cells have "few or no vacuoles";
 * - tracheids occur in all vascular plants (in most gymnosperms they are the
 *   only water-conducting elements) and vessels are characteristic of
 *   angiosperms, not "gymnosperms have tracheids only" (Gnetales have vessels,
 *   and some basal angiosperms lack them); "only anucleate living cell" is scoped to
 *   the eight elements of xylem and phloem; "endarch and exarch" are a stem
 *   and root test of the protoxylem, not a bundle arrangement;
 * - guard cells are kidney (bean) shaped in dicots and dumb-bell shaped in
 *   grasses (monocots such as wheat and maize); the book's blanket "monocots
 *   dumb-bell" is not repeated;
 * - the interfascicular cambium forms from medullary-ray cells between the
 *   bundles and the cork cambium from cortical cells (not both from cortical
 *   parenchyma); radial bundles are bundles with xylem and phloem on
 *   alternate radii, the primary root bundle having no cambium (not "always
 *   closed");
 * - the pericycle is placed inside the endodermis, in the stele, and not
 *   assigned to the ground tissue system (the book lists it with the ground
 *   tissue in Topic 03, and some books place it in the stele; Additional topic
 *   A places it in the stele);
 * - bark is a non-technical term for the tissues outside the vascular
 *   cambium, "for example the secondary phloem and the periderm, together with
 *   any primary phloem and cortex still present", not a closed list;
 *   timber is mostly cut from the dark heartwood (the book's "timber is
 *   essentially heartwood" is not repeated); sapwood is functional and
 *   conducting, with living parenchyma but dead conducting elements; "the
 *   strongest" is not said of heartwood, only that it is a durable,
 *   decay-resistant support tissue protected by tannins, resins and tyloses; the phellogen arises in the cortex in a
 *   stem and from the pericycle in a dicot root (the table's "develops in
 *   cortex" is not generalised); "bast" is not used for secondary phloem;
 * - Additional topic A: the procambium gives xylem inward and phloem outward in
 *   a conjoint stem bundle only (a root has them on separate radii); the cork
 *   cambium is a lateral meristem and so not from a primary meristem; the name
 *   "starch sheath" follows from the stored starch, not from the
 *   ground-meristem origin;
 * - B: dumb-bell guard cells and the paracytic (graminaceous) pattern are given
 *   for grasses such as wheat and barley, not for every monocot;
 * - D: the dicot cell reads "secondary xylem and secondary phloem added by a
 *   continuous cambial cylinder", not "new bundles"; the contrast is
 *   concentric rings of wood against scattered bundles; the NCERT rule is that
 *   monocots lack secondary growth and Dracaena is a rare exception beyond
 *   NCERT;
 * - E: the table row for hardboard and the claim of a one-to-one mapping from
 *   the chapter's tissue tables are not used; timber is secondary xylem of
 *   trees with secondary growth (dicots and gymnosperms), not "dicot trees"
 *   only;
 * - F: the book's xylem-group ranges (2 to 4, more than six) leave five and six
 *   unclassified, so the point says to settle by the pith; the claim that the
 *   monocot-stem combination is "unique" is not repeated;
 * - G: the frequency claims ("keep appearing almost verbatim", "single-mark
 *   gold", "the highest-yield trap") are not repeated; the archetype 1 ladder
 *   is not called "the entire decision tree"; "the only reliable identifier"
 *   and "the only differentiator" are not repeated. Exam shares: no years;
 *   every share is described as the book's estimate from past papers, not
 *   official figures; assertion-reason is "judge A and R separately, then the
 *   causal link", not "judge R first".
 *
 * Markup is the chapter's own: <i> for scientific names (the whole binomial in
 * one <i>) and for the variables S, E and T, <frac> for a fraction, no em
 * dash. A value is kept with its unit, and a range with an en dash. Stomatal
 * index arithmetic recomputed: 24 over (24 + 76) is 24%, 18 over (18 + 42) is
 * 30%, and 10% and 35% of T = 200 give 20 and 70 stomata.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Meristematic & Simple Permanent Tissues ──
  // pp. 355–356, 361
  {
    topic: 0,
    kind: 'remember',
    q: 'Where do the three kinds of meristem sit, and what does each one do?',
    a: 'A meristematic cell keeps dividing, like a trainee not yet posted to a department; a permanent tissue cell has specialised and stopped dividing, and every cell in the plant body traces back to a meristem. Apical meristems sit at the tips of roots and shoots and drive primary growth: the plant grows taller and the root longer; at the shoot tip they also cut off a leaf primordium and leave an axillary bud in each leaf axil. Intercalary meristems are pockets of dividing tissue between mature regions, classically at the base of grass internodes, which is why a lawn or a sugarcane field regrows after cutting: the growth engine is low down, not at the cut tip. Lateral meristems run along the sides and thicken the axis (secondary growth): the fascicular cambium, interfascicular cambium and cork cambium. Meristem cells are small and isodiametric, with thin walls, dense cytoplasm, a large nucleus, few or no vacuoles and no intercellular spaces.',
    why: 'Regrowth after grazing or mowing is the intercalary meristem, at the bases of the internodes.',
    say: null,
  },
  // pp. 356–357, 361
  {
    topic: 0,
    kind: 'remember',
    q: 'How do parenchyma, collenchyma and sclerenchyma differ, and what are fibres and sclereids?',
    a: 'Parenchyma is living, with thin cellulose walls and isodiametric cells, usually with intercellular spaces; it stores, photosynthesises and secretes, and it comes as chlorenchyma (with chloroplasts, as in leaf mesophyll) and aerenchyma (large air spaces, buoyancy in water hyacinth). Collenchyma is living and elongated, with the wall thickened at the corners with cellulose, hemicellulose and pectin and not lignified, usually without intercellular spaces; it gives flexible support to young growing organs, in the hypodermis of young dicot stems, petioles and leaf veins. Sclerenchyma is dead at maturity, with thick, uniformly lignified, pitted walls and a narrow lumen, giving strength. Its fibres are long, narrow and tapering, in groups (bast fibres are the familiar example); its sclereids are shorter, isodiametric stone cells with a very narrow lumen and many pits, the grit in the pulp of pear, guava and sapodilla (chiku) and in nut shells, legume seed coats and tea leaves.',
    why: 'Parenchyma is the soft generalist, collenchyma the flexible supporter, sclerenchyma the dead bodyguard.',
    say: 'Para Plays, Collen Corners, Sclera Sleeps (dead).',
  },
  // pp. 357, 359–361
  {
    topic: 0,
    kind: 'mixup',
    q: 'Dedifferentiation or redifferentiation: which one regains the power to divide, and which cells can do it?',
    a: 'Differentiation is the first step: a dividing cell matures and loses the ability to divide. Dedifferentiation is a mature, already-differentiated cell regaining the capacity to divide, as the medullary-ray cells between the bundles do to form the interfascicular cambium, and cortical cells do to form the cork cambium. Redifferentiation is the cells produced by that renewed meristem losing their dividing power again and maturing into specific tissues. The full arc is divide, mature, regain division, mature again. Only a living cell can dedifferentiate, which is exactly why dead sclerenchyma never can.',
    why: 'De = regain division, re = lose it again; “a mature cell losing division” offered as dedifferentiation is the reversed trap.',
    say: null,
  },
  // pp. 355, 357, 360
  {
    topic: 0,
    kind: 'mistake',
    q: 'Does a mechanical, supporting tissue have to be sclerenchyma?',
    a: 'No. Collenchyma is also mechanical, yet it is living, unlignified and thickened at the corners. The real fork is living, unlignified and corner-thickened (collenchyma) against dead, lignified and uniformly thick (sclerenchyma). “Thick-walled” on its own is ambiguous until you say where the thickening is and whether it is lignified.',
    why: 'Living and unlignified rules out sclerenchyma, fibres and tracheids at once.',
    say: null,
  },
  // pp. 357, 359–360
  {
    topic: 0,
    kind: 'shortcut',
    q: 'A question describes a simple tissue: what is the fastest way to name it?',
    a: 'Check two attributes, in this order: is the cell living or dead at maturity, and where is the wall thickened? Among the three simple tissues, dead with no protoplast means sclerenchyma; living with corner thickening of cellulose and pectin, unlignified, means collenchyma; otherwise a thin uniform cellulose wall, often with intercellular spaces, means parenchyma. If it is sclerenchyma, long and tapering in strands is a fibre, and short and isodiametric with a very narrow lumen, in pulp, seed coats or nut walls, is a sclereid. Worked: living cells, hemicellulose and pectin in the walls, no intercellular spaces, below the epidermis of a herbaceous dicot stem: collenchyma.',
    why: 'These are exactly the two attributes distractors swap: “dead” for “living”, “uniform” for “corner”.',
    say: null,
  },

  // ── Topic 02 · Complex Permanent Tissues (Xylem & Phloem) ──
  // pp. 362–364, 368
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the four cell types of xylem and of phloem, and which are living?',
    a: 'Xylem carries water and minerals one way, upward from root to shoot, and lends support. Its four: tracheids, vessels and xylem fibres, all dead and lignified, and xylem parenchyma, the only living one, with thin cellulose walls, storing starch, fat and tannins and helping radial conduction. Tracheids and vessels are the tracheary elements, the actual pipes. Phloem carries food, and can move it either way. Its four: sieve tube elements (living, no nucleus at maturity, end walls perforated into sieve plates), companion cells (living, with a nucleus), phloem parenchyma (living, stores starch and other food) and phloem (bast) fibres (dead, support; generally absent from primary phloem, and phloem parenchyma is absent in most monocots). So the eight elements split four dead and four living. This is angiosperm phloem; gymnosperms have sieve cells and albuminous cells, with no sieve tubes or companion cells.',
    why: 'Only the conducting cells of xylem are dead; the conducting cells of phloem, the sieve tubes, are living.',
    say: 'Xylem: dead pipes carry water up. Phloem: living pipes, no brain: the companion thinks for them.',
  },
  // pp. 364–365, 368
  {
    topic: 1,
    kind: 'remember',
    q: 'Endarch or exarch: where does the protoxylem lie in a stem and in a root?',
    a: 'Primary xylem matures in a sequence: the first-formed elements are protoxylem and the later-formed are metaxylem. Protoxylem toward the centre or pith, with metaxylem toward the periphery, is endarch, the arrangement in stems. Protoxylem toward the periphery, with metaxylem toward the centre, is exarch, the arrangement in roots. The protoxylem (“first xylem”) of a stem develops inside, pointing to the pith.',
    why: 'It tells root from stem; both dicot and monocot roots are exarch, so it does not separate them.',
    say: 'Ends in the centre = endarch = stem.',
  },
  // pp. 364–367
  {
    topic: 1,
    kind: 'mixup',
    q: 'Tracheid or vessel: how do you tell them apart, and which belongs to angiosperms?',
    a: 'Both are dead, lignified, water-conducting tracheary elements, so that is a similarity, not a difference. A tracheid is a single elongated cell with tapering ends, and water seeps from cell to cell through pits, which is relatively slow. A vessel is a series of shorter cells (vessel elements) joined end to end, their cross-walls dissolved into an open continuous channel, which is fast: an open pipe. Tracheids occur in all vascular plants (in most gymnosperms they are the only water-conducting elements); vessels are characteristic of angiosperms.',
    why: 'Reason from open against closed tube and you will not reverse the two: an open vessel is a plumbing upgrade over a chain of closed tracheids.',
    say: null,
  },
  // pp. 364–365, 367–368
  {
    topic: 1,
    kind: 'mistake',
    q: 'Is all conducting tissue dead, and which of sieve tube and companion cell lacks a nucleus?',
    a: 'No: only xylem’s conducting cells are dead; the sieve tubes of phloem are living. A mature sieve tube element has lost its nucleus, its cytoplasm pushed to a thin layer round a large central vacuole, and it is run by proxy: the companion cell beside it keeps its nucleus and controls the sieve tube’s functions. Dead pipes suit water, which needs rigid, hollow, leak-proof tubes; loading and unloading sugar is an active, controlled process, so phloem’s conducting cells stay alive.',
    why: 'Living, anucleate and conducting food is the sieve tube element’s alone among the eight elements; the companion cell is living but keeps its nucleus.',
    say: null,
  },
  // pp. 365–368
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A question names a xylem or phloem cell: which two checks sort it fastest?',
    a: 'Is it living or dead, and does it have a nucleus or not? Dead: tracheid, vessel, xylem fibre, phloem fibre. A dead hollow conducting pipe is a tracheid or vessel; a dead cell with an obliterated lumen, purely supportive, is a fibre. Living: xylem parenchyma, sieve tube element, companion cell, phloem parenchyma. A living cell with no nucleus, stacked into pipes, is the sieve tube element; a living cell with a nucleus attached to a sieve tube is the companion cell. Worked match: xylem fibre, obliterated lumen; sieve tube element, living and anucleate; companion cell, living and nucleate, controls a neighbour; vessel, fused open tube.',
    why: 'These are the attributes distractors tamper with: the usual trap swaps which of sieve tube and companion cell keeps the nucleus.',
    say: null,
  },

  // ── Topic 03 · Tissue System & Organ Anatomy ──
  // pp. 369–370, 375
  {
    topic: 2,
    kind: 'remember',
    q: 'Which three tissue systems build every organ, and how are vascular bundles classified?',
    a: 'The epidermal system is the skin: the epidermis (a single layer of living cells), the cuticle, stomata, trichomes (multicellular hairs on stems) and root hairs (unicellular, on roots). The ground system is the bulk between skin and transport: cortex, endodermis, pith (medulla), medullary rays and, in leaves, the mesophyll, mostly parenchyma with collenchyma or sclerenchyma where support is needed. The vascular system is xylem and phloem, bundled into vascular bundles. Bundles are radial (xylem and phloem on alternate radii, in roots; the primary bundle has no cambium) or conjoint (on the same radius, in stems and leaves). A conjoint bundle is collateral (phloem outside, xylem inside) or bicollateral (phloem on both sides of the xylem), and open (cambium present, as in the dicot stem) or closed (no cambium, as in the monocot stem).',
    why: 'Radial describes bundle geometry, not organ shape: a stem looks round but has conjoint bundles.',
    say: 'Radial = Root.',
  },
  // pp. 370–371
  {
    topic: 2,
    kind: 'remember',
    q: 'What separates a dicot from a monocot in the root, stem and leaf?',
    a: 'Root: both are radial and exarch; dicot has di- to tetrarch xylem (2–4 groups), small or absent pith and secondary growth, with a pericycle giving lateral roots and part of the cambium; monocot has polyarch xylem (more than six), a large pith and no secondary growth, its pericycle giving lateral roots only. Stem: the dicot has a collenchymatous hypodermis, differentiated ground tissue (cortex, endodermis or starch sheath, pericycle, pith; some books place the pericycle in the stele), bundles in a ring, conjoint, collateral and open, with medullary rays; the monocot has a sclerenchymatous hypodermis, undifferentiated ground tissue, scattered closed bundles and no medullary rays. Leaf: the dicot is dorsiventral, with palisade above spongy mesophyll and stomata mainly on the lower side; the monocot is isobilateral, with uniform mesophyll, stomata roughly equal on both surfaces and bulliform cells, large, empty, colourless cells on the upper epidermis of grasses, which help the leaf roll to cut water loss.',
    why: 'A monocot stem has no secondary growth because its bundles are closed: no cambium, so no lateral meristem.',
    say: null,
  },
  // pp. 370, 372, 375
  {
    topic: 2,
    kind: 'mixup',
    q: 'Kidney or dumb-bell: which guard cells go with dicots, and what surrounds them?',
    a: 'Stomata are pores in the epidermis, mainly of leaves but also of young stems and floral parts, for gas exchange. Guard cells are kidney (bean) shaped in dicots and dumb-bell shaped in grasses (monocots such as wheat and maize). The guard cells may be surrounded by a varying number of subsidiary (accessory) cells, specialised epidermal cells. How a stoma is built is anatomy; how it opens and closes (turgor changes, transpiration) is plant physiology.',
    why: 'A structure question wants structure: a guard-cell shape is anatomy, opening and closing is not.',
    say: 'Dicot → kidney; monocot → dumb-bell.',
  },
  // pp. 371, 375
  {
    topic: 2,
    kind: 'mistake',
    q: 'Can endarch or exarch tell a dicot root from a monocot root?',
    a: 'No. Both are radial and exarch, with the protoxylem toward the periphery. To tell the two roots apart use the xylem number (di- to tetrarch against polyarch) and the pith (small or absent against large). The endarch or exarch test separates a root from a stem: an anatomically old dicot root differs from a dicot stem chiefly by the position of its protoxylem.',
    why: 'Xylem groups and pith size separate the two roots; protoxylem position separates root from stem.',
    say: null,
  },
  // pp. 371–372, 375
  {
    topic: 2,
    kind: 'shortcut',
    q: 'How do you identify any unlabelled transverse section in two questions?',
    a: 'First, are the bundles radial or conjoint? Radial means root; conjoint means stem or leaf. Second, a root: di- to tetrarch xylem with small or absent pith is dicot, polyarch with a large pith is monocot. A stem: bundles in a ring with a cambium (open) is dicot, bundles scattered with no cambium (closed) is monocot. A leaf: palisade and spongy mesophyll with stomata mainly below is dicot, uniform mesophyll with stomata on both sides and bulliform cells is monocot. A Casparian-banded endodermis with passage cells is a strong sign of a root; the pericycle gives lateral roots. Worked: uniform mesophyll, stomata on both surfaces and large empty cells on the upper epidermis is a monocot leaf.',
    why: 'Two clues classify any of the six sections without rote-learning pictures.',
    say: null,
  },

  // ── Topic 04 · Secondary Growth ──
  // pp. 376–378, 381
  {
    topic: 3,
    kind: 'remember',
    q: 'What does the cork cambium make, which side is which, and why do lenticels appear?',
    a: 'Secondary growth is the increase in girth by two lateral meristems, the vascular cambium and the cork cambium (phellogen). As girth increases the epidermis and outer cortex stretch and tear, so a cork cambium arises, in the cortex in a stem and from the pericycle in a dicot root. It cuts off cork (phellem) outward, dead, suberised and waterproof, and phelloderm (secondary cortex) inward, living parenchyma. Phellem plus phellogen plus phelloderm is the periderm. Waterproof cork would suffocate the living tissue inside, so at certain points the phellogen makes loose, rounded complementary cells that rupture the surface: lenticels, lens-shaped gas-exchange pores. Bark is a non-technical term for the tissues outside the vascular cambium, for example the secondary phloem and the periderm, together with any primary phloem and cortex still present.',
    why: 'Phellem is one layer; periderm is the whole three-layer complex.',
    say: 'cork is em-itted outward (phellem out, phelloderm in).',
  },
  // pp. 377–378, 382
  {
    topic: 3,
    kind: 'remember',
    q: 'How does the vascular cambium ring form in a dicot stem, and what does it cut off each way?',
    a: 'In each bundle a strip of cambium already lies between the primary xylem and primary phloem: the intrafascicular cambium, the leftover procambium. The medullary-ray cells between the bundles dedifferentiate into interfascicular cambium, and the two join into a continuous cambial ring. The ring cuts off secondary xylem toward the inside and secondary phloem toward the outside; the inner side is far more active, so wood is the bulk of the axis and the phloem a thin band, the older part crushed against the periphery. It also makes secondary medullary rays for radial conduction and storage. In a dicot root the cambium is secondary in origin: it forms from conjunctive tissue just below the phloem and from pericycle cells above the protoxylem, wavy at first, then circular. Secondary growth occurs in dicot stems and roots and in gymnosperms, and is essentially absent in monocots.',
    why: 'The cambium adds wood inward and phloem outward, so the oldest wood is at the centre and the oldest phloem at the outside.',
    say: 'Cambium: xylem in, phloem out, xylem wins.',
  },
  // pp. 377, 380–381
  {
    topic: 3,
    kind: 'mixup',
    q: 'Heartwood or sapwood: which conducts, which is dark, and what are tyloses?',
    a: 'Heartwood (duramen) is central and older, dark, dead and non-conducting; it holds tannins, resins, oils and gums, and its vessels are plugged by tyloses, balloon-like ingrowths. It is a durable, decay-resistant support tissue, protected by tannins, resins and tyloses, which is why furniture, railway sleepers and beams are mostly cut from the dark heartwood. Sapwood (alburnum) is peripheral and younger, light and functional, with open vessels conducting water and minerals; it contains living parenchyma, and its conducting elements are dead but functional.',
    why: 'Heartwood is central, so students infer it conducts; it does not, because tyloses block its vessels.',
    say: null,
  },
  // pp. 377, 382
  {
    topic: 3,
    kind: 'mistake',
    q: 'Does one annual ring always mean one year of growth?',
    a: 'Only where seasons contrast sharply. A layer of spring (early) wood, formed in the favourable season with high cambial activity, more numerous and wider vessels or tracheids, lighter and less dense, plus the following layer of autumn (late) wood, with low activity, fewer and narrower vessels, darker and denser, makes one annual ring. Counting rings estimates a tree’s age, the basis of dendrochronology, and ring widths record good and lean years; in uniform tropical climates the rings blur, so a count is an estimate and not a guarantee.',
    why: 'A dendrochronologist can read a trunk like a calendar, dating the tree and reconstructing past climate from ring widths.',
    say: null,
  },
  // pp. 377–378, 380–382
  {
    topic: 3,
    kind: 'shortcut',
    q: 'How do you place the layers of a woody stem, in order, without rote memory?',
    a: 'Use one compass: the cambium makes xylem inward and phloem outward, so the oldest wood is at the centre and the oldest phloem at the outside. From the centre outward: heartwood, sapwood, the vascular cambium, secondary phloem, then the periderm (phelloderm, phellogen, phellem). Worked assertion-reason: secondary phloem is far thinner than secondary xylem and is often crushed (A), because the cambium is much more active on its inner face than its outer (R); both are true and R explains A.',
    why: 'Unequal cambial activity directly produces the xylem and phloem volume imbalance.',
    say: null,
  },

  // ── Additional A · Embryological Origin of Tissue Systems ──
  // pp. 383–385
  {
    topic: 4,
    kind: 'remember',
    q: 'Which primary meristem gives which tissue system?',
    a: 'Every tissue in the primary plant body arises from one of three primary meristems. The protoderm, the outermost, gives the epidermal system: the epidermis of root, stem and leaf, root hairs, trichomes and the stomatal apparatus, and never xylem or phloem directly. The ground meristem gives the ground tissues: the cortex (including the hypodermis and endodermis), pith, medullary rays and the mesophyll of leaves; collenchyma is a ground tissue, so it comes from here. The procambium is the strand-forming meristem: it gives primary xylem and primary phloem (in a conjoint stem bundle, xylem inward and phloem outward; on separate radii in a root, with protoxylem exarch), and a strip left between them stays meristematic as the intrafascicular cambium. The cork cambium is a lateral (secondary) meristem, arising later from mature permanent cells, not from a primary meristem.',
    why: 'Protoderm is “first skin”, ground meristem the “filler between skin and pipes”, procambium the “first conducting strand”.',
    say: null,
  },
  // pp. 383–385
  {
    topic: 4,
    kind: 'remember',
    q: 'What is the starch sheath, and what does the pericycle do?',
    a: 'In a dicot stem the innermost layer of the cortex is the endodermis; its cells are rich in starch, so it is also called the starch sheath, and it belongs to the ground tissue system, from the ground meristem. The pericycle lies just inside the endodermis, as part of the stele. It gives rise to lateral roots and, in dicot roots, contributes cells to the vascular cambium during secondary growth; in monocot roots it gives lateral roots only, because they show no secondary growth.',
    why: 'The name starch sheath comes from the starch the cells store; the ground-meristem origin is a separate fact and does not explain the name.',
    say: null,
  },

  // ── Additional B · Stomatal Apparatus: Types and Stomatal Index ──
  // pp. 386–388
  {
    topic: 5,
    kind: 'remember',
    q: 'What are the four stomatal types, and what is the grass pattern?',
    a: 'They are told apart by the subsidiary cells around the guard cells. Anomocytic (ranunculaceous): none, only ordinary epidermal cells. Anisocytic (cruciferous): three subsidiary cells, one distinctly smaller. Paracytic (rubiaceous): two subsidiary cells parallel to the guard cells, one on each side. Diacytic (caryophyllaceous): two subsidiary cells whose common wall is at right angles to the guard cells. Grasses such as wheat and barley have dumbbell-shaped guard cells with two parallel subsidiary cells, one on each side: the paracytic (graminaceous) pattern. Dicots (sunflower, <i>Solanum</i>) have kidney-shaped guard cells with a varying arrangement.',
    why: 'Count and place the subsidiary cells: none, three unequal, two parallel, two at right angles.',
    say: null,
  },
  // pp. 386–388
  {
    topic: 5,
    kind: 'remember',
    q: 'How is the stomatal index worked out?',
    a: '<i>SI</i> = <frac><num><i>S</i></num><den><i>E</i> + <i>S</i></den></frac> × 100, where <i>S</i> is the number of stomata per unit area and <i>E</i> the number of epidermal cells (including subsidiary cells) in the same area. Both are counts, so the index is a percentage: the percentage of stomata among all the epidermal units counted (stomata plus epidermal cells). With 24 stomata and 76 epidermal cells, <i>SI</i> = <frac><num>24</num><den>24 + 76</den></frac> × 100 = <frac><num>24</num><den>100</den></frac> × 100 = 24%. With 18 and 42, <i>SI</i> = <frac><num>18</num><den>18 + 42</den></frac> × 100 = <frac><num>18</num><den>60</den></frac> × 100 = 30%. With <i>T</i> = <i>E</i> + <i>S</i>, an index of 10% gives <i>S</i> = 0.10 <i>T</i> and 35% gives 0.35 <i>T</i>, so for <i>T</i> = 200 that is 20 and 70 stomata.',
    why: 'The denominator is <i>E</i> + <i>S</i>, not <i>E</i> alone: <frac><num>24</num><den>76</den></frac> × 100 would give about 31.6%, not 24%.',
    say: null,
  },

  // ── Additional C · Vascular Bundle Variations Beyond the Standard Types ──
  // pp. 388–389
  {
    topic: 6,
    kind: 'remember',
    q: 'Which bundle types go beyond collateral, and what surrounds what?',
    a: 'Radial: xylem and phloem on separate, alternating radii, in roots. Collateral: on the same radius, phloem outside and xylem inside, in most stems and leaves, open when a cambium is present (dicot stems) and closed when it is absent (monocot stems). Bicollateral: xylem central with phloem on both its outer and inner faces, as in the <i>Cucurbita</i> (pumpkin) stem and other Cucurbitaceae, and in some Solanaceae and Convolvulaceae. Amphicribral: a complete ring of phloem around central xylem, in some pteridophytes (ferns). Amphivasal: a complete ring of xylem around central phloem, in certain monocots such as <i>Dracaena</i>.',
    why: 'Amphi means around, cribrum is sieve (phloem) and vas is vessel (xylem): amphicribral is phloem around xylem, amphivasal xylem around phloem.',
    say: null,
  },
  // pp. 388–390
  {
    topic: 6,
    kind: 'remember',
    q: 'How does a bicollateral bundle differ from a collateral open one?',
    a: 'A bicollateral bundle has a central xylem strand with a continuous band of phloem on its outer face and a second, smaller cap of phloem on its inner face, next to the pith, with a cambium strip between the xylem and the outer phloem and often a less active one between the xylem and the inner phloem. A collateral open bundle has phloem only on the outer face, xylem inside, and cambium. The inner phloem is the distinguishing feature, and the <i>Cucurbita</i> stem is the standard example. A bundle with a central xylem strand wholly ringed by phloem is amphicribral, the inverse of amphivasal.',
    why: 'Both amphicribral and amphivasal are non-collateral: the prefix tells you the central tissue is wrapped by the other.',
    say: null,
  },

  // ── Additional D · Anomalous Secondary Growth ──
  // pp. 390–391
  {
    topic: 7,
    kind: 'remember',
    q: 'Which monocots break the no-secondary-growth rule, and how?',
    a: 'Normal monocot stems (maize) have closed, scattered bundles, no cambium and no secondary growth, and the NCERT rule is that monocots lack secondary growth. <i>Dracaena</i>, <i>Yucca</i>, <i>Agave</i> and <i>Aloe</i> are rare exceptions beyond NCERT: they make secondary tissue by a different cambium, typically a cortical or parenchymatous cambium arising in the ground tissue, which produces new vascular bundles (xylem and phloem) in an anomalous, non-ring arrangement.',
    why: '<i>Dracaena</i> is the most common textbook example; “anomalous” refers to the non-standard mechanism, not to any false statement.',
    say: null,
  },
  // pp. 391–392
  {
    topic: 7,
    kind: 'remember',
    q: 'How does <i>Dracaena</i>-type growth differ from dicot secondary growth?',
    a: 'Dicot: the vascular cambium (intrafascicular plus interfascicular), lying between the xylem and phloem in the bundles, forms a continuous ring and lays down secondary xylem in concentric annual rings. <i>Dracaena</i>: a cortical or parenchymatous cambium in the cortex, outside the existing bundles, produces new bundles embedded in a zone of conjunctive tissue inside the cambium, so no concentric rings form. Both increase girth, by fundamentally different mechanisms.',
    why: 'Concentric rings of wood mean dicot; scattered new bundles and no rings mean <i>Dracaena</i>-type.',
    say: null,
  },

  // ── Additional E · Commercial Plant Products and Anatomical Sources ──
  // pp. 392–395
  {
    topic: 8,
    kind: 'remember',
    q: 'Which tissue does each commercial plant product come from?',
    a: 'Jute (<i>Corchorus capsularis</i>), flax (<i>Linum usitatissimum</i>), hemp (<i>Cannabis sativa</i>) and sunn hemp (<i>Crotalaria juncea</i>) are phloem (bast) fibres: dead, thick-walled sclerenchymatous cells of the phloem. Coconut coir (<i>Cocos nucifera</i>) is sclerenchyma fibre from the fruit husk, not from stem phloem. Cork for bottle stoppers is the phellem of the cork oak <i>Quercus suber</i>, from the periderm. Timber is secondary xylem, the product of the vascular cambium on its inner face, from trees with secondary growth (dicots and gymnosperms). The grit of guava and pear pulp is sclereids.',
    why: 'Jute and coir are both sclerenchyma fibres, but jute comes specifically from the phloem and coir from the fruit husk.',
    say: null,
  },
  // pp. 393–395
  {
    topic: 8,
    kind: 'remember',
    q: 'Why is cork waterproof, and what are sclerenchyma fibres called where they sit?',
    a: 'Phellem cells are dead, with no protoplast, and their walls are impregnated with suberin, a waxy, water-repellent substance, so cork does not let water or gases through; commercial cork is the phellem peeled from the thick bark of the cork oak, light, compressible and used for stoppers, insulation and floats. Sclerenchyma fibres in the phloem are phloem (bast) fibres; the same fibres in the cortex are simply sclerenchyma fibres, the location-specific name being the only difference. In both places they are dead, thick-walled, lignified and narrow, with tapering ends and simple pits.',
    why: 'Cork is impermeable because of the suberised walls of its dead phellem cells, so assertion and reason both hold and R explains A.',
    say: null,
  },

  // ── Additional F · Integrated Cross-Organ Identification Framework ──
  // pp. 395–397
  {
    topic: 9,
    kind: 'remember',
    q: 'What is the three-step ladder for any unknown transverse section?',
    a: 'Step 1, bundle geometry: radial (separate, alternating radii) is a root, go to Step 2; conjoint (same radius) is a stem or leaf, go to Step 3. Step 2, a root: 2–4 xylem groups (diarch, triarch, tetrarch) is dicot, more than six (polyarch) is monocot; confirm with the pith, small or absent for dicot and large and well-developed for monocot. Both roots are exarch, so endarch against exarch is no help here, and the book’s two ranges leave five and six unclassified, so settle those by the pith. Step 3, a stem: a ring of bundles is dicot, scattered bundles are monocot; a leaf: palisade plus spongy mesophyll is dicot (dorsiventral), uniform mesophyll is monocot (isobilateral); check bulliform cells and the stomata.',
    why: 'Worked: radial bundles, eight xylem groups and a large pith make a monocot root; conjoint scattered bundles with no cambium and undifferentiated ground tissue make a monocot stem.',
    say: null,
  },
  // pp. 396–398
  {
    topic: 9,
    kind: 'remember',
    q: 'How do a dicot root and a dicot stem compare, and how do their endodermis layers differ?',
    a: 'Dicot root: radial bundles, no cambium in the primary root (it arises later, in secondary growth), protoxylem exarch, pith small or absent. Dicot stem: conjoint, collateral, open bundles, cambium present (the intrafascicular cambium joins the interfascicular one into a ring), protoxylem endarch, a well-developed pith and medullary rays between the bundles. In the root the endodermis is the innermost cortical layer with Casparian thickenings (suberin bands) and passage cells, controlling the passage of water and minerals between the cortex and the stele; in a dicot stem it is the starch sheath, which stores starch and usually lacks Casparian strips.',
    why: 'Casparian strips with passage cells mark the root endodermis.',
    say: null,
  },

  // ── Additional G · What NEET Actually Asks ──
  // pp. 398–402
  {
    topic: 10,
    kind: 'remember',
    q: 'Which parts of the chapter does NEET ask most, and what are the five question shapes?',
    a: 'The book’s estimate from past papers, not official figures: questions cluster in the simple permanent tissues (the living-or-dead and corner-or-uniform forks, and dedifferentiation against redifferentiation), in xylem and phloem (the sieve tube nucleus, vessels as an angiosperm feature, tracheid against vessel) and in secondary growth (heartwood against sapwood, spring against autumn wood, phellem against phelloderm, and why phloem is thin); tissue-system and organ anatomy is a steady but lower stream, mostly dicot against monocot, endarch against exarch, radial against conjoint and bulliform cells. The five shapes: identify a tissue from a feature list (living or dead, then the thickening, then a nucleus check for complex tissues); which is not true (mark every option true or false against the chapter); assertion-reason (judge A and R, then the causal link); match the column (find a feature the others do not share); identify the organ from a description (radial or conjoint first).',
    why: 'Worked match: vessel has perforated end plates, xylem fibre an obliterated lumen, tracheid chisel-like tapering ends, xylem parenchyma stores food; and “vessels are dead and lignified” does not explain why they conduct better, which is their open continuous lumen.',
    say: null,
  },
  // pp. 402–406
  {
    topic: 10,
    kind: 'mistake',
    q: 'Which traps recur in the chapter’s questions?',
    a: 'Calling collenchyma sclerenchyma because it is a support tissue: it is living, unlignified and corner-thickened. Swapping sclereid and fibre: fibres are long and tapering, sclereids short and isodiametric. Reversing dedifferentiation (regain division) and redifferentiation (lose it again). Swapping endarch and exarch: endarch, protoxylem toward the centre, is a stem; exarch, toward the periphery, is a root. Calling heartwood conducting: it is non-conducting, its vessels blocked by tyloses, while sapwood conducts. Calling the sieve tube dead: it is living but anucleate. Calling radial bundles a stem’s: radial is a root, a stem has conjoint bundles. Flipping guard-cell shape: dicots kidney (bean), grasses dumb-bell. Swapping phellem and phelloderm: phellem is the outer dead cork, phelloderm the inner living parenchyma.',
    why: 'In the worked and graded sets, “sclereids are typically long with tapering ends” (the which-is-not-true example) and “collenchyma walls are uniformly thickened with lignin” (Q5) are the false statements.',
    say: null,
  },
];
