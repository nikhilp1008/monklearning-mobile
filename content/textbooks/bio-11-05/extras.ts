import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 5, Additional topics A to G, word for word from the Class 11 Biology
 * Master Reference, pp. 324 to 353: A "Two Families the Chapter Introduces but Does Not
 * Describe" (pp. 324 to 328), B "Morphological Comparisons the Chapter Builds but Never
 * Consolidates" (pp. 328 to 333), C "Fruit Classification and Seed Germination" (pp. 333 to
 * 336), D "Writing the Semi-Technical Description and Translating Formulae" (pp. 337 to 338),
 * E "Cheat Sheet (Consolidation)" (pp. 339 to 340), F "Practice Exercise: All Addenda
 * Combined" (pp. 340 to 341) and G "What NEET Actually Asks" (the book's "Addendum P",
 * pp. 341 to 353). Page 354 is the next chapter. The shared introduction on p. 324 is the
 * first paragraphs of A's "Introduction".
 *
 * FLORAL FORMULAE. The book sets the line under G (superior ovary) as an underline and the
 * line over G (inferior ovary) as an overline. The reader draws U+0305 as a bar over a
 * letter; for the underline there is no markup, so the combining low line U+0332 follows
 * the G. Whorl numbers are `<sub>`. The zygomorphic sign is the book's own "%".
 * Scientific names are italic; common names are upright.
 */
const SUPERIOR = '̲';
const INFERIOR = '̅';
/** Brassicaceae (the errata's form): K 2+2, C 4, A 2+4, G (2) superior. */
const BRA = `⊕ ⚥ K<sub>2+2</sub> C<sub>4</sub> A<sub>2+4</sub> G${SUPERIOR}<sub>(2)</sub>`;
/** Asteraceae, disc floret: K 0, C (5), A (5), G (2) inferior. */
const AST = `⊕ ⚥ K<sub>0</sub> C<sub>(5)</sub> A<sub>(5)</sub> G${INFERIOR}<sub>(2)</sub>`;
/** Asteraceae, ray floret. */
const RAY = `% ♀ K<sub>0</sub> C<sub>(5)</sub> A<sub>0</sub> G${INFERIOR}<sub>(2)</sub>`;
/** Fabaceae: K (5), C 1+2+(2), A (9)+1, G 1 superior. */
const FAB = `% ⚥ K<sub>(5)</sub> C<sub>1+2+(2)</sub> A<sub>(9)+1</sub> G${SUPERIOR}<sub>1</sub>`;

export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 324–328 ─────────────────────────
  {
    n: 'A',
    title: 'Two Families the Chapter Introduces but Does Not Describe',
    extra: true,
    kalam: 'The chapter gives you root, stem, leaf, inflorescence, flower, fruit, seed, and three families.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you root, stem, leaf, inflorescence, flower, fruit, seed, and three families. Five patterns that NEET and CBSE Boards regularly examine are still standing outside the door. Additional topic A adds the two economically important families the chapter introduces but never describes in full, Brassicaceae (Cruciferae) and Asteraceae (Compositae), because exam questions routinely present their floral formulae and ask you to identify the family by name. Additional topic B supplies the comparison tables the chapter builds element by element but never consolidates: underground storage organs, phylloclade versus phyllode, tendril and spine origins, and the five ovule types (orthotropous, anatropous, campylotropous, amphitropous, hemianatropous) that do not appear in the main text. Additional topic C completes the fruit-classification system (aggregate, multiple, and their subtypes) and ties seed germination to cotyledon function, both of which NEET examines as distinct question types. Additional topic D is the step-by-step routine for writing a full semi-technical description from a given specimen and for translating a plant description back into a floral formula, with worked examples at board and NEET level. Additional topic E is a cheat-sheet consolidation of the four before it.<br><br>Numbering continues from the chapter’s Topic 04. The terms below follow standard plant-morphology usage and the NCERT Class 11 Biology Chapter 5 vocabulary; where a topic goes beyond NCERT, the text says so.<br><br>The chapter names Brassicaceae as a family (mustard appears in the Topic 02 ovary-position and placentation lists and practice items) and Asteraceae by implication (sunflower is the basal-placentation and epigynous example in the Topic 02 tables, and Asteraceae is named only as an option in a Topic 02 MCQ), but neither receives a full semi-technical treatment. Exam questions can present a floral formula and ask you to name the family, or ask which family shows a composite head, and boards ask for the full description of a Brassicaceae flower. Both are supplied here.',
      },

      { t: 'part', title: 'Method: Writing a Family Description' },
      {
        t: 'p',
        html: 'The routine follows the semi-technical description in Topic 04, applied to a specific plant:<br>1. <b>Habit</b>: herb / shrub / tree; annual / biennial; erect / climbing.<br>2. <b>Vegetative characters</b>: root type, stem habit, leaf arrangement and type.<br>3. <b>Inflorescence</b>: racemose / cymose / solitary / capitulum.<br>4. <b>Flower</b>: bracteate / ebracteate; symmetry; sex; merosity.<br>5. <b>Calyx</b>: number; free / united; aestivation.<br>6. <b>Corolla</b>: number; free / united; aestivation; special shape.<br>7. <b>Androecium</b>: number; cohesion (monadelphous / diadelphous / etc.); special length patterns.<br>8. <b>Gynoecium</b>: carpel number; cohesion; ovary position; placentation.<br>9. <b>Fruit and Seed</b>: fruit type; seed (albuminous / ex-albuminous).<br>10. <b>Floral formula and diagram</b>: encode all of the above.',
      },

      { t: 'part', title: 'Family Brassicaceae (Cruciferae): the Mustard Family' },
      {
        t: 'p',
        html: 'Examples: <i>Brassica</i> (mustard, cabbage, cauliflower, broccoli), <i>Raphanus</i> (radish), <i>Erysimum</i> (wallflower), <i>Iberis</i> (candytuft), <i>Capsella</i> (shepherd’s purse).<br><br><b>Habit:</b> Annual or biennial herbs; tap root often swollen for storage.<br><br><b>Stem:</b> Herbaceous, erect, branched.<br><br><b>Leaf:</b> Alternate; simple; exstipulate; reticulate venation. Basal leaves often form a rosette.<br><br><b>Inflorescence:</b> Racemose.<br><br><b>Flower:</b> Ebracteate; bisexual; actinomorphic (radial); tetramerous (parts in fours).<br><br><b>Calyx:</b> 4 sepals, polysepalous (free); aestivation is imbricate (not given in NCERT). Two inner sepals are often saccate (bag-like, as in <i>Brassica</i>).<br><br><b>Corolla:</b> 4 petals, polypetalous (free); each petal has a distinct limb (blade) and claw (stalk). Aestivation is imbricate. The arrangement (one petal at the top, one at the bottom, one on each side) gives the family its name: “cruciform” (cross-shaped), like the four arms of a plus sign. Colour is typically yellow or white.<br><br><b>Androecium:</b> 6 stamens, tetradynamous. The two short stamens form the outer whorl (the lateral pair); the four long stamens form the inner whorl, as two median pairs (one anterior pair and one posterior pair). The prefix “tetradynamous” means “four strong”: the four long stamens dominate. This is a key identifying character of Brassicaceae.<br><br><b>Gynoecium:</b> Bicarpellary (2 carpels); syncarpous; ovary superior; unilocular at first but becomes bilocular because a false septum (a membranous partition) grows across the ovary from the replum. Placentation is parietal: ovules attached to the two inner walls. Many ovules.<br><br><b>Fruit:</b> A siliqua, a dry, dehiscent, elongated fruit that develops from a bicarpellary superior ovary. It splits open along two sutures; the valves fall away and the persistent replum is left as a frame, with the membranous false septum stretched across it. (A short, broad fruit of the same kind is called a silicula, as in <i>Capsella</i>; the long mustard pod is a siliqua.)<br><br><b>Seed:</b> Non-endospermic (ex-albuminous); food stored in two cotyledons, which are often folded around the radicle.<br><br><b>Floral formula:</b><br>' + BRA + '<br>Note: subscripts denote numbers; brackets denote fusion; the line below G marks a superior ovary.<br><br><b>Diagnostic fingerprint:</b> Cruciform corolla + tetradynamous stamens + siliqua fruit = Brassicaceae. No other family in this chapter shares all three.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: '<b>Describe a Flower of <i>Brassica</i> (Mustard).</b><br>Work through the fixed sequence:',
        steps: [
          'Habit: herb, annual. Root: tap root. Stem: herbaceous, erect. Leaf: alternate, simple, exstipulate, reticulate venation. Inflorescence: racemose. Flower: ebracteate, bisexual, actinomorphic, tetramerous. Calyx: 4 sepals, polysepalous, imbricate aestivation; two inner sepals are saccate. Corolla: 4 petals, polypetalous, each with a limb and claw; cruciform arrangement; imbricate aestivation. Androecium: 6 stamens, tetradynamous (2 short outer + 4 long inner). Gynoecium: bicarpellary, syncarpous, superior ovary, parietal placentation; false septum divides the locule. Fruit: siliqua. Seed: non-endospermic. Formula: ' + BRA + '.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Family Asteraceae (Compositae): the Sunflower / Daisy Family' },
      {
        t: 'p',
        html: 'Examples: <i>Helianthus</i> (sunflower), <i>Tagetes</i> (marigold), <i>Lactuca</i> (lettuce), <i>Carthamus</i> (safflower), <i>Zinnia</i>, <i>Dahlia</i>, <i>Gazania</i>. This is one of the two largest families of flowering plants (with Orchidaceae), and its distinctive morphology makes it immediately recognisable.<br><br><b>Habit:</b> Mostly herbs; some shrubs and small trees.<br><br><b>Stem:</b> Herbaceous, erect, often branched; may be reduced.<br><br><b>Leaf:</b> Alternate or opposite; simple; exstipulate; reticulate venation.<br><br><b>Inflorescence:</b> The key structural feature: a <b>capitulum</b> (composite head). What looks like a single flower is actually a dense cluster of many small flowers (florets) sitting on a flattened, swollen receptacle, surrounded by one or more rows of bracts called the <b>involucre</b>. The whole head mimics a single large flower to attract pollinators. This is a <b>head-type racemose</b> inflorescence in which the main axis is condensed into a flat receptacle; the oldest florets are at the periphery and the youngest at the centre (centripetal order of opening: in a flat capitulum, acropetal opening appears as centripetal).<br><br><b>Floret types.</b> Two distinct kinds of florets typically occur in the same head:<br>• <b>Ray florets</b> (strap florets): found at the periphery. They are <b>ligulate</b> (strap-shaped), usually <b>unisexual</b> (pistillate only) or sometimes neutral. The showy “petals” of a sunflower are actually entire ray florets.<br>• <b>Disc florets</b> (tubular florets): found at the centre. They are small, <b>bisexual</b>, and <b>tubular</b> (trumpet-shaped) with five fused petals, five epipetalous stamens, and a bicarpellary inferior ovary. The central disc of a sunflower is made of disc florets.<br><br><b>Calyx:</b> The calyx is <b>absent</b> in most florets. Where it persists it is modified into a ring of hairs, scales, or bristles called the <b>pappus</b>: this is the calyx, morphologically, though it looks nothing like a typical sepal. The pappus aids in fruit dispersal by wind (the fruits are technically single-seeded dry fruits called <b>cypselae</b>).<br><br><b>Corolla:</b> In disc florets: 5 petals, gamopetalous, tubular, valvate aestivation. In ray florets: 5 petals fused into a single flat strap (ligulate), which is itself the product of the corolla alone.<br><br><b>Androecium:</b> In disc florets: 5 stamens, epipetalous; filaments are free but the anthers are <b>connate</b> (fused together into a tube around the style, the “anther cone”). This is distinct from all three families covered in Topic 04.<br><br><b>Gynoecium:</b> Bicarpellary; syncarpous; <b>inferior ovary</b> (this is the family hallmark: the ovary sits below all other whorls); unilocular; <b>placentation is basal</b>: a single ovule at the base of the locule. The style pushes up through the anther cone and bears two stigmatic lobes at the tip.<br><br><b>Fruit:</b> A <b>cypsela</b>, a dry, indehiscent, single-seeded fruit developed from an inferior ovary. It is technically an achene but is called a cypsela because it derives from an inferior ovary.<br><br><b>Seed:</b> Non-endospermic (exalbuminous); the thin seed coat surrounds an embryo that fills the seed.<br><br><b>Floral formula (disc floret):</b><br>' + AST + '<br>Note: K is absent or reduced to the pappus; C is 5 fused petals; A is 5 epipetalous stamens with connate anthers; the line above G marks an inferior ovary.<br><br><b>Diagnostic fingerprint:</b> Capitulum (head) + inferior ovary + connate anthers + pappus + basal placentation = Asteraceae. No other family in this chapter has all five.',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Identify the family from the following description.</b><br>“A plant has flowers in a dense head surrounded by bracts. Individual florets are either strap-shaped at the periphery or tubular at the centre. The ovary is inferior and the fruit is a single-seeded dry indehiscent structure with a ring of hairs at the top.”',
        steps: [
          '<b>Reasoning:</b> Dense head = capitulum; strap-shaped + tubular florets = ray and disc florets; inferior ovary = epigynous flower; hairs on fruit = pappus (modified calyx); single-seeded dry indehiscent fruit from inferior ovary = cypsela. All five features point to <b>Asteraceae</b>.',
        ],
        ans: 'Family Asteraceae (Compositae). Economic uses: sunflower (oil), lettuce (food), marigold (ornamental), safflower (dye/oil), <i>Artemisia</i> (medicine).',
      },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: '<b>Give the floral formula of a disc floret of <i>Helianthus</i> (sunflower) and name the placentation type.</b>',
        steps: [
          'The disc floret of sunflower is: actinomorphic, bisexual, with the calyx absent or reduced to a pappus, 5 fused petals, 5 epipetalous stamens with connate anthers, and a bicarpellary inferior ovary with a single basal ovule. Formula: ' + AST + ' (line above G for an inferior ovary). Placentation: basal.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice: Additional topic A' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Give the distinguishing characters of family Brassicaceae and write its floral formula.',
            a: 'Family Brassicaceae: cruciform corolla, tetradynamous stamens, siliqua fruit, parietal placentation, formula ' + BRA + '.',
          },
          {
            q: '[NEET] A flower has 6 stamens, 2 short and 4 long, and its fruit is an elongated pod with a false septum. Name the family and fruit type.',
            a: 'Brassicaceae; siliqua.',
          },
          {
            q: '[CUET] Name the inflorescence type and fruit type of family Asteraceae.',
            a: 'Capitulum (head), a condensed racemose type; fruit is a cypsela.',
          },
          {
            q: '[NEET] Write the floral formula of a disc floret of a member of Asteraceae and state two characters that distinguish it from Solanaceae.',
            a: AST + ' (line above G = inferior). Two differences from Solanaceae: (i) the ovary is inferior (not superior); (ii) the anthers are connate (not just epipetalous), and the calyx is reduced to a pappus (not fused sepals).',
          },
          {
            q: '[NEET tricky] Why is a sunflower “capitulum” considered a type of racemose inflorescence and not a single flower?',
            a: 'The capitulum is not one flower because it bears many florets, each with its own calyx, corolla, stamens, and ovary. The whole structure is a condensed axis (receptacle) bearing many flowers, which is the definition of an inflorescence. The apparent single “petal” of a ray floret is an entire reduced corolla, not one petal of a single flower.',
          },
          {
            q: '[CBSE] Describe the androecium of Brassicaceae using the term “tetradynamous.”',
            a: 'The androecium has 6 stamens in two lengths: 2 short outer (lateral) stamens and 4 long inner stamens arranged as two median pairs. “Tetradynamous” means “four strong”, describing the dominance of the four long stamens.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 328–333 ─────────────────────────
  {
    n: 'B',
    title: 'Morphological Comparisons the Chapter Builds but Never Consolidates',
    extra: true,
    kalam: 'Each comparison below is a decision tree: the logic that settles a question in one step.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter introduces the underground stems (rhizome, tuber, corm, bulb) together in one row of its stem-modification table; defines phylloclade in the Topic 04 appendix and mentions phyllode only briefly; and presents five placentation types but only one ovule, drawn in Figure 5.8. Each comparison below is a decision tree: the logic that settles a question in one step.',
      },

      { t: 'part', title: 'B1: Underground Storage Organs: Corm vs Tuber vs Bulb' },
      {
        t: 'p',
        html: 'Tuber and corm are underground stems; a bulb is an underground shoot (a very short stem disc bearing fleshy leaves). All three are adapted for storage and perennation. The diagnostic test is the same as for any underground organ: check for <b>nodes, internodes, buds, and scale-leaves</b>.',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Tuber (stem)', 'Corm (stem)', 'Bulb (shoot)'],
        rows: [
          ['Examples', 'potato (<i>Solanum</i>)', 'zaminkand (<i>Amorphophallus</i>), <i>Colocasia</i>', 'onion (<i>Allium</i>), garlic, tulip'],
          ['Identity', 'swollen underground stem', 'condensed underground stem', 'underground bud with fleshy leaf bases'],
          [
            'Nodes and internodes',
            'visible as “eyes” (buds at nodes)',
            'several very short internodes; nodes seen as rings of scale-leaf scars',
            'compressed into the stem disc; internodes not visible',
          ],
          ['Buds', 'present at nodes (“eyes”)', 'present at apex (one or few)', 'at the stem disc and in leaf axils (none on the outer scale surface)'],
          ['Scale-leaves', 'roughly absent (only tiny, early-falling scale leaves at the eyes)', 'thin dry scales', 'thick fleshy scales (storage leaves)'],
          ['Origin of food', 'stored in parenchyma of pith/cortex', 'stored in starchy parenchyma', 'stored in fleshy leaf bases (not in stem)'],
          [
            'Structural unit',
            'the swollen tip of a stem, with several nodes (eyes) and short internodes',
            'a short, thick vertical stem with several very short internodes',
            'the stem disc + fleshy leaf bases',
          ],
          ['What to look for', 'eyes = nodes = stem', 'apical bud + condensed axis', 'cut in half: concentric rings of fleshy scales'],
        ],
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '“A student cuts an underground storage organ in half and finds that it consists entirely of concentric rings of fleshy scales surrounding a small stem disc. No nodes or internodes are visible and there are no buds on the outer scale surface. Name the organ.”',
        steps: [
          '<b>Reasoning:</b> Fleshy concentric rings = storage leaves (not stem tissue); no visible nodes or internodes; stem reduced to a small disc with compressed nodes. This is the textbook description of a <b>bulb</b> (e.g., onion). A corm is a solid condensed stem with an apical bud; a tuber has eyes (nodes with buds) on its surface.',
        ],
        ans: 'bulb.',
      },
      {
        t: 'p',
        html: '<b>Procedure: telling all three apart in one step.</b> Cut in half. Fleshy rings = bulb. Solid interior with an apical bud at the top = corm. Irregular surface with scattered eyes (small depressions) = tuber.',
      },

      { t: 'part', title: 'B2: Phylloclade vs Phyllode' },
      {
        t: 'p',
        html: 'The chapter defines phylloclade (Topic 04 appendix) and mentions phyllode only in passing; a “which-is-correct” item can exploit this gap.',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Phylloclade', 'Phyllode'],
        rows: [
          ['Organ modified', 'stem (axillary bud or growing point)', 'petiole'],
          [
            'Origin',
            'axillary bud or terminal bud becomes flattened/cylindrical green photosynthetic stem',
            'petiole becomes flattened, leaf-like, green, and photosynthetic',
          ],
          ['Examples', '<i>Opuntia</i> (prickly pear), <i>Euphorbia</i>, <i>Casuarina</i>', '<i>Acacia</i> (Australian wattle)'],
          ['Leaves on it', 'reduced to spines (<i>Opuntia</i>) or tiny scales', 'may be absent or reduced'],
          ['Nodes', 'present (defining it as a stem)', 'absent: the petiole has no nodes'],
          ['Function', 'photosynthesis (stem takes over in xerophytes)', 'photosynthesis (petiole takes over; lamina reduced or absent)'],
        ],
      },
      {
        t: 'p',
        html: '<b>Key memory aid.</b> Phyllo<b>clade</b>: Greek klados = branch, so a phylloclade is a flattened green branch (stem). Phyllo<b>de</b>: Greek phyllodes = leaf-like, so a phyllode is a leaf-like flattened petiole.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '“In <i>Acacia</i>, the lamina is greatly reduced or absent and the petiole is flattened, green, and photosynthetic. The leaf is described as a phyllode. What is the key morphological feature that confirms it is a petiole modification and not a flattened stem?”',
        steps: [
          '<b>Reasoning:</b> A stem has nodes and internodes. A petiole has no nodes (it is a stalk arising from the node of the leaf base). The phyllode has no nodes or buds along its surface, which rules out a stem origin. The structural continuity with the leaf base (which carries stipules) at the node confirms the petiolar origin.',
        ],
        ans: 'There are no nodes and no buds along the structure, and it is continuous with the leaf base, so it is a flattened petiole (a phyllode) and not a stem.',
      },

      { t: 'part', title: 'B3: Stem Tendrils vs Leaf Tendrils' },
      {
        t: 'p',
        html: 'The chapter mentions “stem tendrils” as aerial stem modifications arising from axillary buds. The distinction between a stem tendril and a leaf tendril is a standard question.',
      },
      {
        t: 'table',
        title: null,
        head: ['Tendril type', 'Origin', 'Examples'],
        rows: [
          ['Stem tendril', 'axillary bud (the bud in the leaf axil becomes the tendril)', 'cucumber, pumpkin, watermelon, grapevine'],
          [
            'Leaf tendril',
            'leaf or part of a leaf (leaflet, petiole, stipule or leaf tip)',
            'pea (leaflets modified into tendrils; <i>Pisum</i>), <i>Smilax</i> (stipular tendrils), <i>Gloriosa</i> (leaf-tip tendril)',
          ],
        ],
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '“A tendril in <i>Lagenaria</i> (bottle gourd) arises from the axil of a leaf. Is it a stem tendril or a leaf tendril? Justify.”',
        steps: [
          '<b>Reasoning:</b> Arises from the axil = from the axillary bud position, which is a stem feature. A leaf tendril arises from the leaf itself (leaflet, petiole, or stipule), not from the leaf axil. Therefore this is a stem tendril.',
        ],
        ans: 'Stem tendril; it originates from the axillary bud, which is a stem structure.',
      },

      { t: 'part', title: 'B4: Ovule Types (Not Covered in the Main Chapter)' },
      {
        t: 'p',
        html: 'The chapter draws one ovule (the anatropous ovule of Figure 5.8) but never introduces the five ovule types: the orientation of the ovule relative to its stalk (funicle). The five ovule types are standard embryology rather than NCERT content (NCERT shows only the anatropous ovule), but the anatropous ovule and its parts are expected knowledge.<br><b>Terms to define first:</b><br>• <b>Raphe</b>: the portion of the funicle that is fused to the body of the ovule.<br>• <b>Hilum</b>: the point where the funicle joins the ovule body.<br><br><b>The five ovule types:</b>',
      },
      {
        t: 'table',
        title: null,
        head: ['Type', 'Description', 'Body-stalk relationship', 'Examples'],
        rows: [
          [
            '<b>Orthotropous</b> (atropous)',
            'Ovule is straight; micropyle, chalaza, and hilum are in a straight line',
            'Body, chalaza, and hilum are collinear; funicle is directly below the nucellus',
            '<i>Piper</i>, <i>Polygonum</i>: the primitive type',
          ],
          [
            '<b>Anatropous</b>',
            'Ovule is inverted; body is turned 180 degrees so that the micropyle lies close to the funicle',
            'The funicle is fused to the body for almost its entire length: this fused portion is the raphe; the micropyle points downward toward the funicle',
            'most angiosperms: the most common type',
          ],
          [
            '<b>Campylotropous</b>',
            'Ovule is curved but not inverted; the micropyle is not opposite the chalaza (the body is bent)',
            'The body is bent so that the micropyle is turned inward toward the funicle; the nucellus and embryo sac are curved with it; raphe is short',
            '<i>Capsella</i> (shepherd’s purse, Brassicaceae)',
          ],
          [
            '<b>Amphitropous</b>',
            'Ovule body is transverse and the embryo sac is curved (horse-shoe shaped)',
            'The funicle is attached at the middle of the body (hilum central); it is not fused along the body',
            '<i>Papaver</i> (poppy), <i>Lemna</i>, <i>Alisma</i>',
          ],
          [
            '<b>Hemianatropous</b> (hemitropous)',
            'Ovule body is at right angles to the funicle; the nucellus is orthogonal to the funicle',
            'Neither straight nor fully inverted; a moderate tilt',
            '<i>Primula</i>',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Memory aid.</b> Orthotropous = straight; hemianatropous = tilted about 90 degrees; campylotropous = curved body; amphitropous = curved body with a horse-shoe embryo sac; anatropous = fully inverted (180 degrees). Anatropous is the most common and is the “default” ovule type in most flowers; orthotropous is the primitive type.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '“Name the most common ovule type in angiosperms, and state which type shows the funicle fused along the length of the ovule body.”',
        steps: [
          '<b>Reasoning:</b> The most common ovule type is anatropous; orthotropous is the primitive and relatively rare type. In anatropous ovule the funicle is fused to the body of the ovule for most of its length, forming the raphe. In orthotropous the funicle attaches directly below the nucellus without fusion.',
        ],
        ans: 'Anatropous is the most common; orthotropous is the primitive type. Anatropous ovule shows fusion of the funicle with the ovule body, forming the raphe.',
      },

      { t: 'part', title: 'Practice: Additional topic B' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Differentiate between a corm and a bulb. Give one example of each.',
            a: 'Corm = condensed underground stem, solid, with an apical bud (<i>Colocasia</i>, zaminkand); bulb = reduced stem disc bearing concentric fleshy storage leaves (onion, garlic). Corm: food stored in stem parenchyma. Bulb: food stored in fleshy leaf bases.',
          },
          {
            q: '[NEET] A plant has green, flattened, photosynthetic structures that bear nodes with axillary buds (or spines) along them. Is each structure a phylloclade or a phyllode? Justify.',
            a: 'Phylloclade: nodes (with buds or spines) along a flattened green structure show that it is a stem. A phyllode, being a flattened petiole, has no nodes along its surface.',
          },
          {
            q: '[CUET] Give two differences between a stem tendril and a leaf tendril.',
            a: 'Stem tendril arises from an axillary bud (stem origin); leaf tendril arises from a leaf or part of a leaf (leaflet, petiole, stipule). Examples: stem tendril: cucumber; leaf tendril: pea.',
          },
          {
            q: '[NEET] What is an anatropous ovule? Why is it the most common type in angiosperms?',
            a: 'Anatropous ovule: the ovule body is inverted 180 degrees on the funicle, the funicle is fused along the body to form the raphe, and the micropyle lies close to the funicle. It is the commonest ovule type in angiosperms (the book gives no further reason).',
          },
          {
            q: '[CBSE] Draw and label the five types of ovules.',
            a: '(Diagram answer, five labelled drawings expected: orthotropous [straight axis], hemianatropous [90-degree tilt], campylotropous [curved body], amphitropous [curved with curved embryo sac], anatropous [fully inverted, raphe fused]. Labels must include: funicle, hilum, micropyle, nucellus, chalaza, integuments, raphe where applicable.)',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 333–336 ─────────────────────────
  {
    n: 'C',
    title: 'Fruit Classification and Seed Germination',
    extra: true,
    kalam: 'An aggregate fruit develops from a single flower that has many free carpels (apocarpous gynoecium).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter defines true, false, parthenocarpic fruits and the drupe, and names berry, capsule and legume as family fruit types. It omits <b>aggregate fruits, multiple fruits</b> and <b>seed germination types</b>, all three of which NEET examines.',
      },

      { t: 'part', title: 'C1: Aggregate Fruits' },
      {
        t: 'p',
        html: 'An aggregate fruit develops from <b>a single flower</b> that has <b>many free carpels</b> (apocarpous gynoecium). Each carpel develops into a small fruitlet (drupelet, follicle or achene), and all fruitlets are gathered together on the receptacle.<br><b>Process:</b> One flower → many free carpels → each carpel matures → cluster of fruitlets on receptacle.',
      },
      {
        t: 'table',
        title: null,
        head: ['Aggregate fruit', 'Individual fruitlet', 'What it is', 'Examples'],
        rows: [
          ['<b>Etaerio of drupelets</b>', 'small drupe (drupelet)', 'ovary of each free carpel becomes a small drupe', 'raspberry, blackberry'],
          ['<b>Etaerio of follicles</b>', 'follicle', 'ovary of each free carpel becomes a follicle', '<i>Calotropis</i>, <i>Catharanthus</i> (periwinkle)'],
          [
            '<b>Etaerio of achenes</b>',
            'achene',
            'ovary matures as a dry single-seeded indehiscent fruit',
            'strawberry (<i>Fragaria</i>; achenes on a fleshy receptacle), <i>Clematis</i>, <i>Ranunculus</i>',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Critical distinction: strawberry is both aggregate and false.</b> The edible part of a strawberry is the enlarged receptacle, but the actual fruits are the tiny yellow dots (achenes) on its surface. Each “dot” is a true fruit (an achene). The strawberry itself is an <b>aggregate false fruit</b>: aggregate because the fruits come from many free carpels of one flower, and false because the fleshy edible part is the swollen receptacle. This dual nature is a classic NEET trap.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '“How is an aggregate fruit different from a multiple fruit? Give one example of each.”',
        steps: [
          '<b>Reasoning:</b> Aggregate: from one flower with many free carpels (e.g., strawberry, raspberry). Multiple: from an entire inflorescence where many flowers fuse or their fruits cohere (e.g., pineapple, fig).',
        ],
        ans: 'An aggregate fruit develops from a single flower with an apocarpous gynoecium; a multiple fruit develops from an entire inflorescence. Example: aggregate: strawberry; multiple: pineapple.',
      },

      { t: 'part', title: 'C2: Multiple Fruits' },
      {
        t: 'p',
        html: 'A multiple fruit develops from an <b>entire inflorescence</b>: the fruits of many flowers become grouped together into one mass. The individual flowers may fuse at their mature fruit walls (as in pineapple) or remain connected by their stalks and receptacle tissue (as in fig).',
      },
      {
        t: 'table',
        title: null,
        head: ['Multiple fruit', 'Origin', 'Examples'],
        rows: [
          ['Sorosis', 'fruits of many flowers on a common axis (spike or catkin) become fused; fleshy', 'pineapple (<i>Ananas</i>), mulberry'],
          [
            'Syconus',
            'hollow receptacle (fig) containing many small flowers inside',
            'fig (<i>Ficus</i>): the edible “fruit” is the fleshy, hollow inflorescence (hypanthodium) with many tiny fruitlets inside',
          ],
        ],
      },
      {
        t: 'ex',
        tag: 'NEET tricky',
        q: '“A pineapple is derived from many flowers but is classified as a multiple fruit, whereas an apple is derived from a single flower and is classified as a false fruit. Explain.”',
        steps: [
          '<b>Reasoning:</b> Pineapple: entire inflorescence (many flowers) contributes to the one fruit body. Apple: single flower, but the fleshy edible part is the swollen receptacle (accessory tissue), not the ovary; the ovary becomes only the core. Both involve non-ovary tissue but from different sources: pineapple uses many flowers, apple uses one flower + its receptacle.',
        ],
        ans: 'Pineapple is a multiple fruit (from many flowers of one inflorescence); apple is a false fruit (from one flower where the thalamus/receptacle contributes the edible part).',
      },

      { t: 'part', title: 'C3: Complete Fruit Classification Table' },
      {
        t: 'table',
        title: null,
        head: ['Fruit type', 'Origin', 'Dehiscence', 'Examples'],
        rows: [
          ['<b>Drupe</b>', 'ovary (true); 1 seed; stony endocarp', 'indehiscent', 'mango, coconut'],
          ['<b>Berry</b>', 'ovary (true); usually many seeds; no stone', 'indehiscent', 'tomato, grape, banana, brinjal'],
          ['<b>Hesperidium</b>', 'ovary (true); special berry with leathery rind and juicy multicellular hairs (juice sacs)', 'indehiscent', 'orange, lemon (<i>Citrus</i>)'],
          ['<b>Pepo</b>', 'ovary (true); from an inferior ovary; soft rind', 'indehiscent', 'cucumber, watermelon, pumpkin'],
          ['<b>Legume</b>', 'ovary (true); one carpel; two sutures dehisce', 'dehiscent along both sutures', 'gram, pea, bean'],
          ['<b>Capsule</b>', 'ovary (true); two or more carpels; multiple sutures', 'dehiscent (loculicidal / septicidal)', '<i>Datura</i>, cotton, poppy'],
          ['<b>Cypsela</b>', 'ovary (true); from an inferior ovary; single seed', 'indehiscent', 'sunflower, marigold (Asteraceae)'],
          ['<b>Aggregate fruit</b>', 'one flower, many free carpels', 'varies', 'strawberry (aggregate false fruit)'],
          ['<b>Multiple fruit</b>', 'entire inflorescence', 'indehiscent (fruitlets fused)', 'pineapple (sorosis), fig (syconus)'],
          ['<b>False fruit</b>', 'ovary + accessory tissue (thalamus)', '–', 'apple, pear, strawberry'],
        ],
      },

      { t: 'part', title: 'C4: Seed Germination Types' },
      {
        t: 'p',
        html: 'The chapter defines albuminous and non-endospermic seeds but does not cover germination types. Questions ask which plants show epigeal and which hypogeal germination.',
      },
      {
        t: 'table',
        title: null,
        head: ['Germination type', 'What happens', 'Cotyledon position', 'Examples'],
        rows: [
          [
            '<b>Epigeal</b>',
            'Cotyledons are pushed above the soil by elongation of the hypocotyl',
            'Cotyledons above ground, green and photosynthetic',
            'bean (<i>Phaseolus</i>), castor (<i>Ricinus</i>), groundnut (<i>Arachis</i>), cotton, tamarind',
          ],
          [
            '<b>Hypogeal</b>',
            'Cotyledons remain below the soil surface',
            'Cotyledons stay buried; plumule emerges above',
            'gram (<i>Cicer</i>), pea (<i>Pisum</i>), maize',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Why the difference?</b> In epigeal germination the hypocotyl elongates and arching pulls the cotyledons up. In hypogeal germination the epicotyl elongates and pushes the plumule up while the cotyledons stay in the soil. The test question asks: “Which of bean and gram shows hypogeal germination?” Bean = epigeal; Gram = hypogeal. The mnemonic: “Gram stays grounded; bean rises.”',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '“Gram (<i>Cicer arietinum</i>) shows hypogeal germination. How does this differ from epigeal germination, and what type of seed is gram?”',
        steps: [
          '<b>Reasoning:</b> Hypogeal: cotyledons remain below soil, plumule emerges. Epigeal: cotyledons are pushed above ground (as in bean). Gram is a non-endospermic (ex-albuminous) dicot seed: food is stored in the two cotyledons. There is no rule linking seed type to germination type: bean (non-endospermic) is epigeal, castor (endospermic) is epigeal, and gram (non-endospermic) is hypogeal. Germination type depends only on which part of the embryonic axis elongates.',
        ],
        ans: 'In hypogeal germination the epicotyl elongates and the cotyledons remain below the soil; in epigeal germination the hypocotyl elongates and pulls the cotyledons above it. Gram seed is non-endospermic (ex-albuminous); its germination is hypogeal.',
      },

      { t: 'part', title: 'Practice: Additional topic C' },
      {
        t: 'practice',
        items: [
          { q: '[CBSE] Define aggregate fruit. Name one aggregate true fruit and one aggregate false fruit.', a: 'Aggregate fruit: develops from a single flower with many free (apocarpous) carpels. Aggregate true fruit: <i>Calotropis</i> (etaerio of follicles); aggregate false fruit: strawberry.' },
          {
            q: '[NEET] How is a multiple fruit different from a composite fruit? (Composite = synonym for multiple in this context.)',
            a: 'Multiple fruit: develops from an entire inflorescence (many flowers); composite fruit is another name for the same type (also called a composite fruit in some books). Aggregate fruit: from one flower with many free carpels.',
          },
          { q: '[CUET] Give two differences between a drupe and a berry.', a: 'Drupe: one seed, stony endocarp, usually from a superior ovary (mango); Berry: many seeds, no stony endocarp, usually from a superior ovary (tomato).' },
          {
            q: '[NEET] Why is a pineapple classified as a multiple fruit while an apple is a false fruit, though both have fleshy edible parts derived partly from non-ovary tissue?',
            a: 'Pineapple derives its fleshy edible part from the coalesced ovaries of many flowers in one inflorescence (multiple). Apple derives its fleshy edible part from the swollen receptacle/thalamus of a single flower (false fruit from one flower). The key distinction is the number of flowers involved.',
          },
          { q: '[CBSE] Differentiate between epigeal and hypogeal germination.', a: 'Epigeal: the hypocotyl elongates and arching pushes the cotyledons above the soil surface (bean). Hypogeal: the epicotyl elongates and pushes the plumule above; cotyledons remain buried in the soil (gram, pea).' },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 337–338 ─────────────────────────
  {
    n: 'D',
    title: 'Writing the Semi-Technical Description and Translating Formulae',
    extra: true,
    kalam: 'Apply the fixed sequence from Additional topic A’s method to any plant.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 04 gives the fixed sequence with one worked specimen (the pea) and reads one formula back into words; here both directions are practised on new plants.',
      },

      { t: 'part', title: 'D1: The Routine (Specimen → Full Description)' },
      {
        t: 'p',
        html: 'Apply the fixed sequence from Additional topic A’s method to any plant. The mark scheme awards one mark per field; completeness and correct order are the only requirements.',
      },

      { t: 'part', title: 'D2: The Reverse Routine (Description → Formula)' },
      {
        t: 'p',
        html: 'Given: “A regular (radial) bisexual flower has 4 sepals, 4 petals arranged in a cross, 6 stamens (2 short and 4 long), a superior ovary, and 2 fused carpels with parietal placentation.”<br>Step 1: Symmetry and sex: actinomorphic + bisexual → ⊕ ⚥.<br>Step 2: Calyx: 4 sepals in two whorls of two, free (polysepalous) → K<sub>2+2</sub>.<br>Step 3: Corolla: 4 petals, free → C<sub>4</sub>. (Cross arrangement = cruciform; this is noted in words.)<br>Step 4: Androecium: 6 stamens, tetradynamous (2 short + 4 long) → A<sub>2+4</sub>.<br>Step 5: Gynoecium: bicarpellary, fused (syncarpous), superior ovary → G' + SUPERIOR + '<sub>(2)</sub> (line below G).<br>Step 6: Assemble: ' + BRA + '. This is the Brassicaceae formula.',
      },

      { t: 'part', title: 'D3: Worked Example at Board Level' },
      {
        t: 'ex',
        tag: 'Board level',
        q: '<b>Describe the floral features of <i>Brassica</i> (mustard) and write its floral formula.</b>',
        steps: [
          '(Habit, root, stem, leaf, inflorescence are as in the first worked example of Additional topic A. The answer below focuses on the floral whorls.)',
          'Flower: ebracteate, bisexual, actinomorphic, tetramerous. Calyx: 4 sepals, polysepalous, inner two saccate, imbricate aestivation. Corolla: 4 petals, polypetalous, cruciform, each petal with a claw and limb, imbricate aestivation. Androecium: 6 stamens, tetradynamous (2 short outer + 4 long inner), dithecous. Gynoecium: bicarpellary, syncarpous, superior ovary, parietal placentation, a false septum stretched across the replum, many ovules. Fruit: siliqua. Seed: non-endospermic.',
        ],
        ans: 'Floral formula: ' + BRA + '.',
      },

      { t: 'part', title: 'D4: Worked Example at NEET Level' },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>A student is given a flower with the following description: inflorescence is a head; ray florets are strap-shaped and usually pistillate; disc florets are tubular and bisexual; the ovary is inferior with one basal ovule; the calyx is represented by a ring of hairs on the fruit. Identify the family and write the floral formula of a disc floret.</b>',
        steps: [
          'Step 1: Identify: Head inflorescence + ray + disc florets + inferior ovary + pappus (modified calyx) + basal placentation = <b>Asteraceae</b>. Step 2: Disc floret formula:<br>• Symmetry: actinomorphic → ⊕.<br>• Sex: bisexual → ⚥.<br>• Calyx: absent or reduced to a pappus → K<sub>0</sub>.<br>• Corolla: 5 fused petals → C<sub>(5)</sub>.<br>• Androecium: 5 epipetalous stamens with connate anthers → A<sub>(5)</sub>.<br>• Gynoecium: bicarpellary, inferior → G' + INFERIOR + '<sub>(2)</sub> (line above G).',
        ],
        ans: 'Assembled: ' + AST + '.',
      },

      { t: 'part', title: 'Practice: Additional topic D' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the floral formula of <i>Brassica</i> (mustard) and state two characters that distinguish it from Solanaceae.',
            a: BRA + '. Two differences from Solanaceae: (i) tetramerous (4-part) vs pentamerous (5-part) flower; (ii) tetradynamous stamens vs 5 epipetalous stamens. (A siliqua fruit vs a berry or capsule is a further difference.)',
          },
          {
            q: '[CUET] A flower has a head inflorescence with ray and disc florets. The ovary is inferior and bears a single ovule at the base. Name the family and give two identifying characters.',
            a: 'Asteraceae (Compositae). Characters: capitulum (head) inflorescence; ray + disc florets; inferior ovary with basal placentation; pappus (modified calyx); connate anthers.',
          },
          {
            q: '[NEET] Write the floral formula of a ray floret of a member of Asteraceae.',
            a: 'Ray floret: ' + RAY + ': zygomorphic and usually pistillate (female), with a ligulate corolla of 5 petals fused into a strap and no functional stamens; the bisexual sign is not used because the ray floret is usually unisexual.',
          },
          {
            q: '[CBSE] A student is given a plant with zygomorphic bisexual flowers, a papilionaceous corolla, and diadelphous stamens. Write its floral formula and name the family.',
            a: FAB + '. Family: Fabaceae (formerly the subfamily Papilionoideae of Leguminosae).',
          },
          {
            q: '[NEET tricky] Draw and label the floral diagram of a disc floret of <i>Helianthus</i> (sunflower, family Asteraceae), indicating the position of the inferior ovary.',
            a: '(Diagram answer.) Draw the capitulum as a T.S. showing the involucre (bracts) at the periphery, the receptacle, ray florets on the outside, disc florets in the centre. For each disc floret: 5 fused perianth parts, 5 epipetalous stamens with connate anthers (drawn as a tube around the style), and at the centre a bicarpellary inferior ovary with a single basal ovule. The line above G in the floral formula indicates the inferior position.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 339–340 ─────────────────────────
  {
    n: 'E',
    title: 'Cheat Sheet (Consolidation)',
    extra: true,
    kalam: 'This section consolidates the material added in Additional topics A to D.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      { t: 'p', html: 'This section consolidates the material added in Additional topics A to D.' },

      { t: 'part', title: 'Two New Families: Diagnostic Fingerprints' },
      {
        t: 'table',
        title: null,
        head: ['Character', 'Brassicaceae (Cruciferae)', 'Asteraceae (Compositae)'],
        rows: [
          ['Symmetry', 'actinomorphic', 'actinomorphic (disc)'],
          ['Flower sex', 'bisexual', 'disc bisexual; ray often pistillate'],
          ['Calyx', '4, polysepalous, 2 inner saccate', 'absent / pappus (modified calyx)'],
          ['Corolla', '4, polypetalous, cruciform', 'disc: 5, gamopetalous tubular; ray: ligulate strap'],
          ['Androecium', '6, tetradynamous (2+4)', '5, epipetalous, connate anthers'],
          ['Gynoecium', 'bicarpellary, superior, parietal', 'bicarpellary, <b>inferior</b>, <b>basal</b>'],
          ['Fruit', '<b>siliqua</b> (or silicula)', '<b>cypsela</b>'],
          ['Floral formula (disc floret)', BRA, AST],
          ['Examples', 'mustard, radish, cabbage', 'sunflower, marigold, lettuce'],
        ],
      },

      { t: 'part', title: 'Underground Organs: Quick Decision Tree' },
      {
        t: 'p',
        html: 'Cut in half. Rings of fleshy scales = <b>bulb</b> (onion). Solid with apical bud at one end = <b>corm</b> (<i>Colocasia</i>). Irregular surface with scattered eyes (depressions with buds) = <b>tuber</b> (potato). If neither cut is possible, check for scale-leaves, nodes, and buds.',
      },

      { t: 'part', title: 'Phylloclade vs Phyllode' },
      {
        t: 'p',
        html: 'Phylloclade: flattened green stem (<i>Opuntia</i>); nodes present; arises from axillary bud. Phyllode: flattened green petiole (<i>Acacia</i>); no nodes; arises from leaf base at a node.',
      },

      { t: 'part', title: 'Ovule Types' },
      {
        t: 'p',
        html: 'Five types: orthotropous, anatropous, hemianatropous, campylotropous, amphitropous.<br>Anatropous: most common; funicle fused to body (raphe). Orthotropous: straight; primitive type; funicle directly below. Campylotropous: curved body; <i>Capsella</i> (Brassicaceae). Amphitropous: curved body + horse-shoe embryo sac.',
      },

      { t: 'part', title: 'Fruit Classification: Complete Map' },
      {
        t: 'p',
        html: '• True fruit: develops from ovary alone → drupe (mango), berry (tomato), legume (pea), capsule (<i>Datura</i>), hesperidium (orange); pepo (cucumber) and cypsela (sunflower) come from inferior ovaries.<br>• False fruit: ovary + accessory tissue → apple, pear, strawberry.<br>• Aggregate fruit: one flower, many free carpels → strawberry (aggregate + false), raspberry (aggregate true).<br>• Multiple fruit: entire inflorescence → pineapple (sorosis), fig (syconus).<br>• Parthenocarpic: seedless, no fertilisation → banana.',
      },

      { t: 'part', title: 'Germination Types' },
      {
        t: 'p',
        html: 'Epigeal: cotyledons pushed above soil (bean, castor, groundnut). Hypogeal: cotyledons stay below (gram, pea, maize).',
      },

      { t: 'part', title: 'Memory Aids' },
      {
        t: 'p',
        html: '• Brassicaceae: “4-4-6 (2+4), siliqua: the mustard cross.”<br>• Asteraceae: “Inferior Aster, Pappus for dispersal, Capitulum heads everywhere.”<br>• Ovule types: “Ortho = straight line; Anatropous = inverted back; Campy = curved.”<br>• Strawberry: “aggregate + false: dots (fruits) on the fleshy receptacle.”<br>• Pineapple: “many flowers, one fruit: multiple.”<br>• Epigeal: “E = Elevated: cotyledons rise up.”<br>• Hypogeal: “H = Hypogeal: hypocotyl stays grounded; cotyledons underground.”',
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 340–341 ─────────────────────────
  {
    n: 'F',
    title: 'Practice Exercise: All Addenda Combined',
    extra: true,
    kalam: 'Name the family with a capitulum inflorescence, pappus, and inferior ovary.',
    blocks: [
      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          { q: '[NEET] Name the family with a capitulum inflorescence, pappus, and inferior ovary.', a: 'Asteraceae' },
          { q: '[CBSE] Write the floral formula of a disc floret of <i>Helianthus</i>.', a: AST },
          { q: '[NEET] Differentiate between a corm and a bulb. Give one example each.', a: 'Corm: <i>Colocasia</i>/zaminkand; Bulb: onion/garlic' },
          { q: '[CUET] Give two differences between phylloclade and phyllode.', a: 'Stem vs petiole origin; nodes present vs absent' },
          {
            q: '[NEET] Name the most common ovule type in angiosperms and describe the orientation of its body relative to the funicle.',
            a: 'Anatropous; funicle fused to body forming raphe; micropyle points toward funicle',
          },
          {
            q: '[CBSE] Why is a strawberry described as both an aggregate and a false fruit?',
            a: 'Aggregate: from one flower with many free carpels; false: edible part is the swollen receptacle, not the ovary',
          },
          {
            q: '[NEET tricky] Gram shows hypogeal germination. Is its seed albuminous or ex-albuminous?',
            a: 'Ex-albuminous; food is stored in the cotyledons, which remain below the soil in hypogeal germination',
          },
          {
            q: '[CBSE] Write two distinguishing characters each of Brassicaceae and Asteraceae that separate them from Solanaceae.',
            a: 'Brassicaceae: tetramerous, tetradynamous, siliqua; Asteraceae: capitulum, inferior ovary, pappus',
          },
          { q: '[CUET] Name two aggregate fruits and two multiple fruits.', a: 'Aggregate: strawberry, raspberry; Multiple: pineapple, fig' },
          {
            q: '[NEET] A plant has zygomorphic bisexual flowers, 10 diadelphous stamens, and a monocarpellary ovary. Identify the family and give the floral formula.',
            a: 'Fabaceae (formerly the subfamily Papilionoideae of Leguminosae); ' + FAB,
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic G (the book’s Addendum P) · pp. 341–353 ─────────────────────────
  {
    n: 'G',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'The shares below are rough, indicative estimates of emphasis rather than exact counts.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'The shares below are rough, indicative estimates of emphasis rather than exact counts (the book’s estimate from past papers, not official figures). The following topics command NEET’s attention:',
      },
      {
        t: 'table',
        title: 'Rough weight of each topic (the book’s rough estimate, not official figures)',
        head: ['Topic', 'Rough weight', 'Key question shapes'],
        rows: [
          ['Root types, zones, and modifications (prop/stilt/pneumatophore)', '~15–18%', '“Which plant shows X?”; region-of-root; root-hair location'],
          ['Underground stems (potato, ginger, turmeric, <i>Colocasia</i>)', '~12–15%', '“Underground = root?” trap; identification by nodes/buds'],
          ['Venation (dicot vs monocot) and leaf structure', '~10–12%', 'Completion statements; reticulate/parallel reversal trap'],
          ['Flower symmetry, aestivation, androecium cohesion', '~15–18%', '“Which example pairs correctly?”; symmetry identification'],
          ['Placentation with plant examples', '~8–10%', 'Match-the-column; statement sets'],
          ['Fruit/seed (true/false, pericarp, albuminous vs ex-albuminous)', '~12–15%', 'Apple-thalamus; mango-drupe; seed-cutting descriptions'],
          ['Family identification (Solanaceae/Fabaceae/Liliaceae)', '~10–12%', 'Formula decoding; “identify the family” from feature sets'],
        ],
      },
      {
        t: 'p',
        html: '<b>Reading the table:</b> the clusters above cover questions on roots, stems, leaves, flowers and seeds, botanical names, statement-type items and match-the-column items. Questions directly testing inflorescence type (racemose vs cymose) appear less often than root and flower morphology, mainly in statement sets.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>Archetype 1: Modification–Example Pair (“Which plant shows X?”)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b><br>“Pneumatophores are found in __________.” / “Stilt roots occur in __________.” / “Prop roots of banyan tree are meant for __________.”<br><b>The approach:</b> Store every modification as a <b>triplet</b>: (structure → function → one example). NEET often asks any one leg of the triangle. “Stilt root → mechanical support → sugarcane” earns the mark; “stilt root” alone usually does not.',
      },
      {
        t: 'ex',
        tag: 'Fully worked example',
        q: '“Pneumatophores are found in: (a) marshy and saline areas (b) saline soil (c) xerophytic conditions (d) hydrophytic conditions.”',
        steps: [
          '<b>Reasoning:</b> Pneumatophores are respiratory roots of halophytic mangroves (NCERT names <i>Rhizophora</i>, whose roots are mostly stilt roots, while <i>Avicennia</i> and <i>Heritiera</i> show the classic pneumatophores) that grow in anaerobic, waterlogged, saline mud. They grow vertically upward (negatively geotropic) to reach air above the waterlogged substrate.',
          '<b>Trap:</b> (d) hydrophytic conditions tempts students who see “water” and choose general aquatic plants; but pneumatophores are specific to <b>saline mangroves</b>, not all hydrophytes.',
        ],
        ans: '(a) marshy and saline areas.',
      },

      { t: 'p', html: '<b>Archetype 2: Root-vs-Stem Decision Tree</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b><br>“Ginger has a prostrate-growing rhizome.” / “The fleshy scales of an onion bulb are modified leaves borne on a short underground stem.” / “Corm of <i>Colocasia</i> is a modified ______.”<br><b>The approach:</b> Three checks in order:<br>1. <b>Nodes, internodes, buds present?</b> → STEM regardless of depth.<br>2. <b>Scale leaves visible?</b> → STEM.<br>3. <b>Smooth, tapering, no buds?</b> → ROOT.<br>Potato = tuber (has “eyes” = axillary buds at nodes).<br>Sweet potato = storage adventitious ROOT (no buds).<br>Ginger = rhizome (nodes with scale leaves and buds).<br>Onion bulb = an underground modified shoot: a very short stem (basal disc) bearing fleshy storage leaves; it has a stem disc, so it is not a root.',
      },
      {
        t: 'ex',
        tag: 'Fully worked example',
        q: '“The edible fleshy layers of an onion bulb are modified ______ attached to a very short underground stem.”',
        steps: [
          '<b>Reasoning:</b> An onion bulb consists of fleshy, concentric scale leaves attached to a very short, compressed underground stem (the basal disc). The edible layers are storage leaves; the stem is only the small disc at the base. The underground position misleads students who equate “underground” with “root” or with “stem.”',
          '<b>Trap:</b> Calling the whole bulb a root because it is underground, or calling the fleshy layers stem tissue. Slice an onion open: concentric fleshy leaves around a small stem disc.',
        ],
        ans: '<b>leaves</b> (the whole bulb is a modified underground shoot: stem disc plus fleshy leaves).',
      },

      { t: 'p', html: '<b>Archetype 3: Venation-and-Group Flip</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b><br>“Leaves of dicotyledonous plants possess ________ venation, while ________ venation is the characteristic of most monocotyledons.”<br><b>The approach:</b> Anchor once and permanently: <b>net = dicot, parallel = monocot</b>. A venation question often tempts the reversal.',
      },
      {
        t: 'ex',
        tag: 'Fully worked example',
        q: '“Leaves of dicotyledonous plants possess reticulate venation, while parallel venation is the characteristic of most monocotyledons.”<br>(a) reticulate, parallel<br>(b) parallel, reticulate<br>(c) perpendicular, parallel<br>(d) parallel, parallel',
        steps: [
          '<b>Trap:</b> (b) reverses the pair. (c) “perpendicular” is not a venation type, and (d) ignores the contrast between the two groups. The key is never letting the sentence structure pull you into reversal.',
        ],
        ans: '(a) reticulate and parallel.',
      },

      { t: 'p', html: '<b>Archetype 4: Statement Sets (“Which of the following is/are correct?”)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b><br>Statement-set items: evaluate each of the numbered statements independently.<br><b>The approach:</b> Evaluate each statement <b>on its own terms</b> before looking at the options. Do not let a true statement influence your judgment of a separate false one. Watch for specific traps:<br>• Confusing “accessory” with “non-essential” or “non-reproductive” (calyx/corolla)<br>• Mixing placentation with ovary position<br>• Treating “non-essential” as “useless”<br>• Mixing leaf origin (shoot apical meristem, not root)',
      },
      {
        t: 'ex',
        tag: 'Fully worked example',
        q: '(i) Buds are present in the axil of leaflets of the compound leaf.<br>(ii) Pulvinus leaf-base is present in some leguminous plants.<br>(iii) In Australian <i>Acacia</i>, the petioles expand, become green and synthesize food.<br>(iv) Opposite phyllotaxy is seen in guava.<br>(a) (i), (ii) and (iii) only<br>(b) (ii), (iii) and (iv) only<br>(c) (i) and (iv) only<br>(d) all four statements',
        steps: [
          '<b>Reasoning:</b><br>(i) <b>FALSE</b>: a bud sits in the axil of the <b>whole leaf</b>, never between individual leaflets of a compound leaf. This is the defining test for compound leaf vs branch.<br>(ii) <b>TRUE</b>: pulvinus (swollen leaf base) is characteristic of leguminous plants (e.g., <i>Mimosa</i>, <i>Samanea</i>).<br>(iii) <b>TRUE</b>: in Australian <i>Acacia</i> species (e.g. <i>Acacia melanoxylon</i>), the petiole becomes a flattened, green phyllode that performs photosynthesis.<br>(iv) <b>TRUE</b>: opposite phyllotaxy (two leaves per node) is seen in guava (<i>Psidium guajava</i>).',
          'Correct statements: (ii), (iii) and (iv); (i) is incorrect.',
          '<b>Key trap:</b> Students who think (i) is true because they see “buds” on the leaf-like structure and confuse it with a branch bearing simple leaves.',
        ],
        ans: '(b).',
      },

      { t: 'p', html: '<b>Archetype 5: Match-the-Column with Elimination</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b><br>Match-the-column types: aestivation–examples, placentation–examples, stem modifications, androecium formula–family.<br><b>The approach:</b> Take the pair you are <b>certain of first</b>, then eliminate wrong options systematically.',
      },
      {
        t: 'ex',
        tag: 'Fully worked example',
        q: 'Match Column I with Column II.<br>Column I: A. Basal, B. Free central, C. Parietal, D. Axile, E. Marginal.<br>Column II: I. <i>Dianthus</i>, II. Pea, III. Lemon, IV. Marigold, V. <i>Argemone</i>.<br>(a) A–I, B–IV, C–V, D–III, E–II<br>(b) A–IV, B–I, C–III, D–V, E–II<br>(c) A–IV, B–I, C–V, D–III, E–II<br>(d) A–IV, B–I, C–V, D–II, E–III',
        steps: [
          '<b>Reasoning:</b><br>• <b>Marginal</b> is the textbook placentation of <b>pea</b> (Fabaceae): one carpel, ovules along the ventral suture → E–II.<br>• <b>Free central</b> is <i>Dianthus</i> (carnation) and Primrose → B–I.<br>• <b>Parietal</b> is <i>Argemone</i> and mustard → C–V.<br>• <b>Axile</b> is tomato, China rose, lemon → D–III (lemon has axile).<br>• <b>Basal</b> is sunflower, marigold → A–IV.',
          'The only option matching this is <b>(c) A–IV, B–I, C–V, D–III, E–II</b>.',
          '<b>Trap:</b> Option (a) reverses free central and basal. Option (d) makes lemon marginal and pea axile. Option (b) swaps parietal and axile.',
        ],
        ans: '',
      },

      { t: 'p', html: '<b>Archetype 6: Assertion–Reason</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b><br>Assertion–Reason items: a declarative A followed by an explanatory R, with four answer choices (a–d).<br><b>The approach:</b><br>1. Is A true or false?<br>2. Is R true or false?<br>3. If both true, does R <b>directly and specifically</b> explain A?',
      },
      {
        t: 'ex',
        tag: 'Fully worked example',
        q: 'Assertion (A): A simple leaf has undivided lamina.<br>Reason (R): Leaves showing pinnate and palmate venations have various types of incisions.<br>Choose: (a) Both A and R are true and R is the correct explanation of A. (b) Both A and R are true but R is NOT the correct explanation of A. (c) A is true, R is false. (d) A is false, R is true.',
        steps: [
          '<b>Reasoning:</b><br>• A is <b>TRUE</b>: a simple leaf has a single, undivided lamina.<br>• R is <b>TRUE</b>: pinnately and palmately venated leaves can have incisions to varying depths (pinnatifid, palmatifid, etc.).<br>• <b>BUT:</b> R does not explain A. The reason leaves have incisions is about venation pattern; the reason a simple leaf is undivided is that its lamina is <b>not cut into separate leaflets</b>. They are independent facts.',
          '<b>Trap:</b> (a) tempts students who see two related-looking statements and assume causation. The defining feature of a simple leaf (undivided lamina) has nothing to do with venation incisions: these are separate morphological concepts.',
        ],
        ans: '(b) Both A and R are true but R is <b>not</b> the correct explanation of A.',
      },

      { t: 'p', html: '<b>Archetype 7: Family Formula Identification</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b><br>“Floral formula of tomato/tobacco is ______.” / “Epiphyllous stamens borne on a perianth of six tepals are characteristic of ______.”<br><b>The approach:</b> Decode symbol by symbol. Lock one signature per family:<br>• <b>Fabaceae:</b> % (zygomorphic), papilionaceous corolla, A<sub>(9)+1</sub> (diadelphous), monocarpellary → marginal, legume<br>• <b>Solanaceae:</b> ⊕ (actinomorphic), K<sub>(5)</sub> C<sub>(5)</sub> A<sub>5</sub> (epipetalous), G' + SUPERIOR + '<sub>(2)</sub> superior → axile, berry<br>• <b>Liliaceae:</b> P<sub>(3+3)</sub> (tepals, not K+C), A<sub>3+3</sub> (epiphyllous), G' + SUPERIOR + '<sub>(3)</sub> → axile, capsule',
      },
      {
        t: 'ex',
        tag: 'Fully worked example',
        q: '“Epiphyllous stamens borne on a perianth of six tepals are characteristic of: (a) Fabaceae (b) Solanaceae (c) Liliaceae (d) Brassicaceae”',
        steps: [
          '<b>Reasoning:</b><br>• Epiphyllous = attached to the <b>perianth</b> (tepals).<br>• Liliaceae has P<sub>(3+3)</sub> tepals and A<sub>3+3</sub> stamens attached to the perianth → <b>(c)</b>.<br>• Fabaceae has distinct K and C with A<sub>(9)+1</sub> (diadelphous).<br>• Solanaceae has K<sub>(5)</sub> C<sub>(5)</sub> A<sub>5</sub> (epipetalous: attached to petals, not perianth).<br>• Brassicaceae has tetradynamous A (4 long + 2 short).',
          '<b>Trap:</b> (b) because Solanaceae and Liliaceae both have “5” or “3” numbers and students confuse epipetalous (on petals) with epiphyllous (on perianth/tepals).',
        ],
        ans: '(c) Liliaceae.',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What it punishes', 'The correct answer'],
        rows: [
          [
            '<b>“Underground = Root”</b>',
            'Students who equate depth in soil with organ type',
            'Ginger, turmeric, potato, <i>Colocasia</i> = <b>stems</b> (bear nodes/buds); sweet potato = <b>root</b>',
          ],
          [
            '<b>Potato ↔ Sweet Potato swap</b>',
            'Confusing the classic pair',
            'Potato = stem tuber (has eyes = buds); sweet potato = storage adventitious <b>root</b>',
          ],
          ['<b>Venation reversal</b>', 'Memorizing the pair without anchoring “net = dicot”', 'Reticulate = dicot; parallel = monocot'],
          [
            '<b>Epipetalous vs Epiphyllous</b>',
            'Confusing stamen attachment',
            'Epipetalous = on <b>petals</b> (Solanaceae); epiphyllous = on <b>perianth/tepals</b> (Liliaceae)',
          ],
          [
            '<b>Pericarp layer order</b>',
            'Scrambling epicarp/mesocarp/endocarp',
            'Outside → in: <b>E</b>picarp → <b>M</b>esocarp → <b>E</b>ndocarp',
          ],
          ['<b>True vs False fruit</b>', 'Not knowing what makes apple false', 'Apple flesh = thalamus (false); mango = ovary only (true)'],
          [
            '<b>Stamen terms mix-up</b>',
            'Confusing diadelphous/tetradynamous/epipetalous',
            'Fabaceae = A<sub>(9)+1</sub>; Brassicaceae = A<sub>2+4</sub>; Solanaceae = A<sub>5</sub>; Liliaceae = A<sub>3+3</sub>',
          ],
          [
            '<b>Leaf vs Leaflet confusion</b>',
            'Thinking buds appear in leaflet axils',
            'Bud only in axil of <b>whole</b> compound leaf, never between leaflets',
          ],
          [
            '<b>Parthenocarpic ≠ False fruit</b>',
            'Treating them as the same concept',
            'Banana = parthenocarpic (no fertilisation) but <b>true</b> fruit (from ovary); apple = false fruit but not parthenocarpic',
          ],
          [
            '<b>Non-endospermic means food in cotyledons</b>',
            'Reversing albuminous/ex-albuminous',
            'Gram/pea/bean = non-endospermic (food in cotyledons); maize/castor = endospermic',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'practice',
        items: [
          {
            q: '[Level 1: Direct Recall] A swollen underground organ has “eyes” (small depressions with buds) but no root hairs or taproot structure. Cutting it open shows it is not fleshy throughout but has a thin skin and starchy interior with no organized vascular structure branching through it. This organ is a:<br>(a) Storage tap root<br>(b) Tuber<br>(c) Rhizome<br>(d) Bulb',
            a: '<b>Answer:</b> (b) Tuber. The “eyes” are axillary buds at nodes: the definitive feature of a stem. Potato is the textbook example. Rhizomes (ginger) have visible nodes with scale leaves; bulbs (onion) have fleshy leaf scales; tap roots (carrot) lack nodes and buds entirely.',
          },
          {
            q: '[Level 1: Direct Recall] Match Column I with Column II and select the correct option:<br><br>Column I | Column II<br>P. Prop roots | 1. Sugarcane<br>Q. Stilt roots | 2. <i>Rhizophora</i><br>R. Pneumatophores | 3. Banyan<br>S. Storage roots | 4. Sweet potato<br><br>(a) P-3, Q-1, R-2, S-4<br>(b) P-1, Q-3, R-4, S-2<br>(c) P-2, Q-3, R-1, S-4<br>(d) P-4, Q-2, R-3, S-1',
            a: '<b>Answer:</b> (a).<br>• Prop roots: Banyan (<i>Ficus benghalensis</i>), thick roots descend from branches to soil for mechanical support.<br>• Stilt roots: Sugarcane (<i>Saccharum officinarum</i>), from lower nodes, prevent lodging.<br>• Pneumatophores: <i>Rhizophora</i>, vertical upward roots of mangroves for gas exchange (NCERT names <i>Rhizophora</i>; its roots are mostly stilt roots, while <i>Avicennia</i> and <i>Heritiera</i> show the classic pneumatophores).<br>• Storage roots: Sweet potato (<i>Ipomoea batatas</i>), swollen adventitious roots storing food.',
          },
          {
            q: '[Level 2: Application] A plant found in a tidal mangrove swamp has roots growing vertically <b>upward</b> out of the anaerobic mud, with small pores at their tips. The function of these roots is:<br>(a) Mechanical support against tidal currents<br>(b) Gas exchange in waterlogged anaerobic soil<br>(c) Absorption of mineral nutrients from the water surface<br>(d) Anchorage in shifting sediment',
            a: '<b>Answer:</b> (b). These are pneumatophores (respiratory roots), a modification of adventitious roots in halophytic mangroves (NCERT names <i>Rhizophora</i>, whose roots are mostly stilt roots, while <i>Avicennia</i> and <i>Heritiera</i> show the classic pneumatophores). They grow negatively geotropically (upward) to reach atmospheric oxygen above the waterlogged substrate. The pores (lenticels) allow gas exchange.<br><b>Trap:</b> (a) and (d) describe prop/stilt functions; (c) describes general root absorption, not the specific pneumatophore function.',
          },
          {
            q: '[Level 2: Application] A flower can be divided into two equal halves by <b>only one</b> particular vertical plane. Its floral formula reads: ' + FAB + '. The placentation and fruit type of this plant are, respectively:<br>(a) Marginal; berry<br>(b) Marginal; legume<br>(c) Axile; capsule<br>(d) Parietal; pod',
            a: '<b>Answer:</b> (b). The floral formula shows: zygomorphic (%), bisexual (⚥), papilionaceous corolla (1 standard + 2 wings + 2 fused keel petals, C<sub>1+2+(2)</sub>), diadelphous stamens (9 fused + 1 free), monocarpellary superior ovary, all hallmarks of <b>Fabaceae</b>. Marginal placentation (ovules along the ventral suture of the single carpel) and fruit type <b>legume</b> (a pod that splits along two sutures) are correct.',
          },
          {
            q: '[Level 3: Analysis & Synthesis] Read the following statements carefully:<br>(i) In cymose inflorescence, the main axis terminates in a flower.<br>(ii) Racemose inflorescence shows basipetal order of flower opening.<br>(iii) In cymose inflorescence, the youngest flower is at the base of the axis.<br>How many statements are <b>incorrect</b>?<br>(a) One<br>(b) Two<br>(c) Three<br>(d) None',
            a: '<b>Answer:</b> (a). Only statement (ii) is incorrect.<br>• (i) is CORRECT: cymose axis terminates in a terminal (oldest) flower, ending growth.<br>• (ii) is INCORRECT: racemose shows <b>acropetal</b> order (oldest at base, youngest at tip).<br>• (iii) is CORRECT: in cymose inflorescence the terminal flower is the oldest and the youngest is at the <b>base</b> (basipetal order).<br>The key mnemonic: <b>Racemose Rises</b> (acropetal, axis keeps growing); <b>Cymose Caps off</b> (terminal flower oldest, basipetal).',
          },
          {
            q: '[Level 3: Analysis & Synthesis] A seed cut open shows: two large fleshy cotyledons with no visible endosperm, and a small embryo nestled between them. Which of the following is TRUE about this seed?<br>(a) It is endospermic and belongs to a monocot<br>(b) It is non-endospermic and belongs to a dicot<br>(c) It is endospermic and belongs to a dicot<br>(d) It is non-endospermic and belongs to a monocot',
            a: '<b>Answer:</b> (b).<br>• <b>Two cotyledons</b> → dicot (a grass grain such as maize or wheat has one cotyledon, the scutellum).<br>• <b>No visible endosperm</b> → food stored in the cotyledons themselves → <b>non-endospermic/ex-albuminous</b>.<br>Examples: gram (<i>Cicer arietinum</i>), pea (<i>Pisum sativum</i>), bean (<i>Phaseolus vulgaris</i>).<br><b>Trap:</b> (a) confuses the presence of two cotyledons (dicot) with monocot grains (which have one cotyledon but large endosperm). (d) reverses both features.',
          },
          {
            q: '[Level 3: Analysis & Synthesis] Consider the following statements about modifications:<br>(i) Ginger is a modified stem because it bears nodes, internodes, and scale leaves.<br>(ii) Sweet potato is a modified root because it lacks nodes and buds.<br>(iii) Onion bulb is an underground modified shoot because it has a condensed stem (basal disc) bearing fleshy leaves.<br>(iv) <i>Euphorbia</i> is a modified leaf that stores water.<br>Which option lists ALL correct statements?<br>(a) (i), (ii), and (iii)<br>(b) (ii), (iii), and (iv)<br>(c) (i) and (ii) only<br>(d) (i), (ii), and (iv)',
            a: '<b>Answer:</b> (a).<br>• (i) TRUE: ginger (<i>Zingiber officinale</i>) is a rhizome with nodes, internodes, and scaly leaves.<br>• (ii) TRUE: sweet potato (<i>Ipomoea batatas</i>) is a storage adventitious root with no buds.<br>• (iii) TRUE: the onion (<i>Allium cepa</i>) bulb is a shoot: a compressed underground stem (basal disc) bearing concentric fleshy leaf scales.<br>• (iv) FALSE: <i>Euphorbia</i> has <b>phylloclades</b> (green, fleshy, flattened or cylindrical stems), not modified leaves.<br><b>Trap:</b> (iv) exploits the stem-vs-leaf modification confusion common in cactus-like plants.',
          },
          {
            q: '[Level 4: Multi-Statement Evaluation] Which of the following statements are <b>INCORRECT</b>?<br>(i) Epiphyllous stamens are found in Solanaceae.<br>(ii) Sweet potato is a modified stem.<br>(iii) Maize has prop roots.<br>(iv) Free central placentation is found in <i>Dianthus</i>.<br>(v) Perisperm is the persistent nucellus in seeds like black pepper.<br>(a) (i), (ii), and (iii)<br>(b) (ii), (iii), and (v)<br>(c) (i), (ii), (iii), and (iv)<br>(d) (i), (ii), (iii), and (v)',
            a: '<b>Answer:</b> (a).<br>• (i) INCORRECT: epiphyllous (on perianth) is Liliaceae; Solanaceae has <b>epipetalous</b> (on petals).<br>• (ii) INCORRECT: sweet potato = storage <b>root</b>.<br>• (iii) INCORRECT: maize has <b>stilt roots</b> from lower nodes; prop roots are characteristic of banyan (descend from branches).<br>• (iv) CORRECT: <i>Dianthus</i> (carnation) has free central placentation.<br>• (v) CORRECT: perisperm = persistent nucellus in <i>Piper nigrum</i> (black pepper).<br>Three incorrect statements → option (a).',
          },
          {
            q: '[Level 4: Multi-Statement Evaluation] Assertion (A): A floral diagram alone cannot tell us whether the ovary is superior or inferior.<br>Reason (R): A floral diagram is a transverse section representation, while ovary position is a feature of the vertical relationship between the ovary and other whorls, which is shown by the floral formula (a line below or above G) or by a longitudinal section, not by the diagram.<br>(a) Both A and R are true and R is the correct explanation of A.<br>(b) Both A and R are true but R is NOT the correct explanation of A.<br>(c) A is true, R is false.<br>(d) A is false, R is true.',
            a: '<b>Answer:</b> (a).<br>• A is TRUE: a floral diagram shows the arrangement of whorls as seen in cross-section; it displays aestivation and placentation but <b>cannot</b> show whether the ovary sits above, below, or at the same level as the other whorls.<br>• R is TRUE and <b>directly explains</b> why A is true: the diagram is a horizontal slice; the formula (or a longitudinal section) shows the vertical relationship, with a line above (inferior) or below (superior) the G symbol.<br><b>The trap:</b> Answering (b) if students think both are true but miss the causal link. The reason R is the <b>explanation</b> of A is precisely because the diagram’s cross-sectional nature cannot capture vertical position, which the formula (or a longitudinal section) conveys.',
          },
          {
            q: '[Level 5: Family Identification] A plant has the following characteristics:<br>• Habit: herb or shrub<br>• Leaves: alternate, pinnately compound, with stipules<br>• Flower: zygomorphic, papilionaceous corolla, 10 stamens (9 fused + 1 free)<br>• Fruit: a pod that dehisces along both sutures<br>• Seeds: non-endospermic<br>Identify the family and write its floral formula. What type of aestivation does it show?',
            a: '<b>Answer:</b> <b>Family Fabaceae</b> (formerly the subfamily Papilionoideae of Leguminosae).<br><b>Floral formula:</b> ' + FAB + '<br><b>Aestivation:</b> <b>Vexillary</b> (descending imbricate / papilionaceous); the five petals show this characteristic arrangement: one large posterior standard, two lateral wings, two anterior keel petals covering the stamens and carpels.<br><b>Additional features confirming Fabaceae:</b> alternate, pinnately compound leaves with stipules (and a pulvinate leaf base), diadelphous stamens (9+1), a legume fruit and non-endospermic seeds.',
          },
          {
            q: '[Level 5: Family Identification] Which of the following is NOT a characteristic of family Liliaceae?<br>(a) Perianth of 6 petaloid tepals (3+3)<br>(b) Androecium of 6 epiphyllous stamens<br>(c) Tricarpellary, syncarpous, inferior ovary<br>(d) Capsular fruit with endospermous seeds',
            a: '<b>Answer:</b> (c).<br>• (a) CORRECT: Liliaceae has tepals (P<sub>(3+3)</sub>), not distinct K and C.<br>• (b) CORRECT: stamens are attached to the perianth = epiphyllous (A<sub>3+3</sub>).<br>• (c) <b>INCORRECT</b>: Liliaceae has a <b>superior</b> ovary, not inferior. (Inferior ovary = epigynous = e.g., Guava, Asteraceae ray florets.)<br>• (d) CORRECT: capsule fruit and endospermous seeds are characteristic.<br><b>Trap:</b> (c) inserts “inferior” to exploit confusion between Liliaceae (superior) and Solanaceae (also superior, but bicarpellary). The inferior ovary belongs to families like Asteraceae (sunflower) and Myrtaceae (guava).',
          },
          {
            q: '[Level 6: Integrated Distractor Analysis] A student encounters the following statements in a NEET mock test and is asked to identify the <b>incorrect</b> one:<br>(i) <i>Solanum nigrum</i> (makoi) belongs to Solanaceae and has axile placentation.<br>(ii) <i>Allium sativum</i> (garlic) is a bulb: a modified underground shoot (a short stem disc with fleshy leaf scales).<br>(iii) <i>Musa paradisiaca</i> (banana) is a false fruit because it develops from the thalamus.<br>(iv) <i>Pisum sativum</i> (garden pea) has a papilionaceous corolla and diadelphous stamens.<br>(a) Only (iii)<br>(b) (ii) and (iv)<br>(c) Only (iv)<br>(d) (iii) and (iv)',
            a: '<b>Answer:</b> (a).<br>• (i) CORRECT: <i>Solanum nigrum</i> is Solanaceae with bicarpellary, syncarpous, superior ovary and axile placentation.<br>• (ii) CORRECT: garlic (<i>Allium sativum</i>) is a bulb with compressed stem (basal plate) and fleshy storage leaf scales.<br>• (iii) <b>INCORRECT</b>: banana (<i>Musa paradisiaca</i>) develops from the <b>ovary</b> (not the thalamus) and is therefore a <b>true fruit</b>. It is parthenocarpic (seedless due to lack of fertilisation), but parthenocarpy and false-fruit origin are independent concepts. Apple is a false fruit; banana is a true (parthenocarpic) fruit.<br>• (iv) CORRECT: pea (<i>Pisum sativum</i>) is the textbook Fabaceae with papilionaceous corolla and diadelphous A<sub>(9)+1</sub>.<br><b>The hardest trap here:</b> Students who know banana is seedless and assume it must be a “false” fruit (mixing parthenocarpic with false-fruit origin). The defining feature of a false fruit is that <b>floral parts other than the ovary</b> (usually the thalamus) contribute to the edible part: banana lacks this.',
          },
        ],
      },
    ],
  },
];
