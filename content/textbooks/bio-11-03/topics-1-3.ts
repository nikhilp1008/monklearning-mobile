import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 3 (Plant Kingdom), Topics 01 to 03: pp. 143 to 167 of the
 * Class 11 Biology Master Reference, word for word. p. 142 is the chapter title
 * page and the contents box at the top of p. 143 is not copied. The book prints
 * these sections without numbers; they are Topic 01 Classification Systems
 * (pp. 143–148), Topic 02 Algae (pp. 148–158) and Topic 03 Bryophytes &
 * Pteridophytes (pp. 158–167, the cheat sheet runs on to the top of p. 167).
 * Each is cut at the book’s Sections 1 to 8. Figure 3.1 (caption p. 151, drawn
 * p. 152), Figure 3.2 (caption p. 153, drawn p. 154) and Figure 3.3 (caption
 * p. 161, drawn p. 162) are redrawn in lib/diagrams/biology-11-03.ts; these
 * pages draw nothing else. Scientific names are italic as the book prints them;
 * emphasis italics are dropped; the em dash is replaced by ordinary punctuation.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 143–148 ─────────────────────────
  {
    n: '01',
    title: 'Classification Systems',
    kalam: 'Each new tool let classification reflect true kinship more faithfully.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This opening topic is a reliable 1-mark scorer. CUET and NEET favour match-the-column (system ↔ basis ↔ proponent) and one-liners (“which system is based on evolutionary relationships?”). CBSE Boards may ask a 2-mark “distinguish between artificial and natural systems.” Low effort, high certainty: learn the three systems and the three modern “-taxonomies” cold.',
      },
      {
        t: 'p',
        html: 'Before we can study algae, mosses, ferns, or flowering plants as separate groups, someone has to decide how to sort the bewildering diversity of plants into groups in the first place. That sorting logic is <b>classification</b>, and it has improved over centuries as botanists found better evidence to judge “how similar are these two plants, really?”',
      },
      {
        t: 'p',
        html: 'Think of organising a huge music library. The crudest method is to sort by one easy feature, say, album colour. Quick, but it shelves a rock album next to a folk album just because both covers are blue. A better method groups by many features at once (genre, artist, era, instruments) so genuinely similar music ends up together. The best method of all sorts by lineage: which artists influenced which, who descended from whom musically. Plant classification evolved along exactly this path: from sorting by <b>one or a few visible characters</b>, to sorting by <b>many natural affinities</b>, to sorting by <b>evolutionary descent</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> the basis of classification kept getting deeper. Early botanists could only see gross form, so they classified on <b>habit and a few floral parts</b>. As microscopes, chemistry, and genetics arrived, classification could draw on <b>anatomy, embryology, chromosomes, and chemicals</b>, and finally on <b>evolutionary relationships</b>. Each new tool let classification reflect true kinship more faithfully.',
      },
      {
        t: 'p',
        html: 'Three broad systems mark this journey:<br>• <b>Artificial systems</b>: sort by one or a few easily seen characters.<br>• <b>Natural systems</b>: sort by all available characters and natural affinities.<br>• <b>Phylogenetic systems</b>: sort by evolutionary relationships (common ancestry).',
      },
      {
        t: 'p',
        html: 'Layered on top are three modern, evidence-specific approaches, <b>numerical, cyto-, and chemotaxonomy</b>, that feed extra data into classification.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & caveats.</b><br>• No single character is decisive: a feature easy to see (like flower colour) is often a poor guide to kinship because it varies with environment.<br>• “Natural” and “phylogenetic” systems overlap heavily; the difference is emphasis: overall similarity vs evolutionary descent.<br>• Classification is provisional: as new evidence (especially molecular data) arrives, groupings are revised.',
      },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      {
        t: 'table',
        title: '2.1 The three classical systems',
        head: ['System', 'Basis of grouping', 'Characters used', 'Representative proponent / work'],
        rows: [
          [
            'Artificial',
            'One or a few <b>easily observable</b> characters',
            'Mainly gross morphology (habit; vegetative & sexual characters given equal weight)',
            '<b>Linnaeus</b>: sexual system based on the <b>androecium</b> (number/arrangement of stamens)',
          ],
          [
            'Natural',
            '<b>Natural affinities</b>: overall resemblance',
            'All available characters (external + internal: morphology, anatomy, embryology)',
            '<b>Bentham & Hooker</b>: Genera Plantarum (most widely used natural system for flowering plants)',
          ],
          [
            'Phylogenetic',
            '<b>Evolutionary relationships</b> (common ancestry)',
            'All characters + evolutionary/fossil evidence',
            '<b>Engler & Prantl</b>',
          ],
        ],
      },
      {
        t: 'table',
        title: '2.2 The three modern evidence-based approaches',
        head: ['Approach', 'Information it uses'],
        rows: [
          [
            'Numerical taxonomy',
            'All observable characters, each given <b>equal weight</b>; characters coded as numbers and processed by <b>computers</b> (hundreds of characters considered at once)',
          ],
          ['Cytotaxonomy', '<b>Cytological</b> data: chromosome <b>number, structure, and behaviour</b>'],
          ['Chemotaxonomy', '<b>Chemical constituents</b> of the plant (phytochemicals)'],
        ],
      },
      { t: 'p', html: '<b>2.3 Key terms</b>' },
      {
        t: 'p',
        html: '• <b>Artificial system</b>: classification using one or a few convenient characters; fast but unnatural (it can separate truly related plants and group unrelated ones). A weakness of Linnaeus’s system was giving <b>equal importance to vegetative and sexual characters</b>, even though vegetative characters are more easily modified by the environment.<br>• <b>Natural system</b>: classification based on <b>natural affinities</b>, using as many characters as possible; related plants end up together.<br>• <b>Phylogenetic system</b>: classification reflecting <b>evolutionary descent</b>, assuming members of a taxon share a <b>common ancestor</b>.<br>• <b>Numerical / Cyto- / Chemo-taxonomy</b>: modern tools that supply extra, objective data (counts, chromosomes, chemicals) to refine classification.',
      },

      { t: 'part', title: 'Comparative characteristics and conceptual framework' },
      { t: 'p', html: '<b>3.1 How the systems differ, and why the order matters</b>' },
      {
        t: 'p',
        html: 'The three classical systems form a clear progression in <b>how much evidence</b> they use and <b>what they aim to capture</b>:<br>1. <b>Artificial → uses least evidence, captures convenience.</b> Linnaeus grouped plants by a single feature set (chiefly stamens). It was easy to apply but produced unnatural groups: two plants alike only in stamen number could be filed together despite being otherwise very different.<br>2. <b>Natural → uses broad evidence, captures overall affinity.</b> Bentham & Hooker weighed all characters, so plants that are genuinely alike in many ways group together. Their system remains the backbone of many herbaria in India because it is practical for identifying flowering plants.<br>3. <b>Phylogenetic → uses broadest evidence, captures ancestry.</b> Here groups are meant to reflect evolutionary lineage, not just resemblance. Two plants are placed together because they descend from a common ancestor.',
      },
      {
        t: 'p',
        html: 'The reliability principle to remember: <b>the more characters a system uses, and the closer it tracks evolutionary descent, the more “natural” (truthful to kinship) the classification.</b>',
      },
      { t: 'p', html: '<b>3.2 The sources of evidence</b>' },
      {
        t: 'p',
        html: 'Modern classification does not rely on appearance alone. Botanists pull data from many fields, and the three “-taxonomies” formalise this:<br>• <b>Numerical taxonomy</b> turns many characters into numbers and lets a computer weigh them equally and objectively, removing the human bias of over-valuing one striking feature.<br>• <b>Cytotaxonomy</b> uses chromosome evidence; matching chromosome number and behaviour can support a close relationship (a similar karyotype is evidence, not proof).<br>• <b>Chemotaxonomy</b> uses shared chemical compounds as kinship markers.',
      },
      {
        t: 'p',
        html: 'Together these push classification from what a plant looks like toward what a plant actually is at the cellular and molecular level.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board level · 2 marks',
        q: 'Distinguish between an artificial and a natural system of classification, with one proponent each.',
        steps: [
          '<b>Model answer:</b> An <b>artificial</b> system groups plants using <b>one or a few easily observed characters</b> (e.g., Linnaeus’s sexual system based on the androecium); it is convenient but can separate related plants. A <b>natural</b> system groups plants by their <b>natural affinities using all available characters</b> (e.g., Bentham & Hooker’s Genera Plantarum); related plants are placed together.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level · match the column',
        q: '<b>Column I:</b> A. Artificial system; B. Natural system; C. Phylogenetic system.<br><b>Column II:</b> I. Bentham & Hooker; II. Evolutionary relationships; III. Linnaeus (androecium).',
        steps: [
          '<b>Reasoning:</b> Artificial → Linnaeus’s stamen-based system (A–III). Natural → Bentham & Hooker (B–I). Phylogenetic → based on evolutionary relationships (C–II).',
        ],
        ans: 'A–III, B–I, C–II.',
      },
      {
        t: 'ex',
        tag: 'NEET level · concept application',
        q: 'A botanist classifies a set of plants by assigning equal weight to hundreds of characters, coding each numerically and processing them by computer. Name this approach and state its key advantage.',
        steps: [
          '<b>Reasoning:</b> Assigning <b>equal weight to all characters + numerical coding + computer processing</b> defines <b>numerical taxonomy</b>. Its key advantage is <b>objectivity</b>: it removes the bias of over-valuing one conspicuous character and can handle very large character sets at once.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty · assertion–reason',
        q: '<b>Assertion (A):</b> Linnaeus’s classification is described as an artificial system. <b>Reason (R):</b> It gave equal weightage to vegetative and sexual characters, even though vegetative characters are easily affected by the environment.<br>Options: (a) Both true, R correct explanation. (b) Both true, R not the correct explanation. (c) A true, R false. (d) A false, R true.',
        steps: [
          '<b>Reasoning:</b> <b>A is true</b>: Linnaeus’s system is the classic artificial system. <b>R is true</b> and is a genuine reason it is “artificial/unnatural”: weighting easily-modified vegetative characters as heavily as reproductive ones leads to unnatural groupings. R correctly explains A.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What is meant by the “natural affinities” on which a natural system is based? (2 marks)',
            a: 'Overall resemblances based on as many characters as possible, so genuinely related plants are grouped together.',
          },
          { q: '[CUET] Which system of classification is based on common ancestry?', a: 'Phylogenetic system.' },
          { q: '[NEET] Name the taxonomic approach that uses chromosome number and behaviour.', a: 'Cytotaxonomy.' },
          { q: '[NEET] Whose system is the most widely used natural system for flowering plants?', a: 'Bentham & Hooker.' },
          {
            q: '[NEET high-difficulty / AR] <b>Assertion:</b> Chemotaxonomy can support a classification scheme. <b>Reason:</b> Closely related plants often share characteristic chemical constituents. Choose from the four standard AR options: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '(a): both true and R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The sexual system of classification based on the number and arrangement of stamens was proposed by:',
        opts: [
          { label: 'Bentham & Hooker', nudge: '<b>(a)</b> gave a natural system.' },
          { label: 'Linnaeus', nudge: null },
          { label: 'Engler & Prantl', nudge: '<b>(c)</b> gave a phylogenetic system.' },
          { label: 'Hutchinson', nudge: '<b>(d)</b> is a later phylogenetic worker.' },
        ],
        correct: 1,
        solution:
          'Linnaeus classified plants chiefly by the androecium. <b>(a)</b>, <b>(c)</b> and <b>(d)</b> all trap students who recall “famous taxonomist” without the specific basis.',
      },
      {
        t: 'mcq',
        q: 'Which classification system uses the largest body of evidence to reflect evolutionary descent?',
        opts: [
          { label: 'Artificial', nudge: '<b>(a)</b>/<b>(d)</b> use the least evidence (a few characters).' },
          { label: 'Natural', nudge: '<b>(b)</b> uses many characters but emphasises overall affinity rather than ancestry.' },
          { label: 'Phylogenetic', nudge: null },
          { label: 'Sexual', nudge: '<b>(a)</b>/<b>(d)</b> use the least evidence (a few characters).' },
        ],
        correct: 2,
        solution: 'Phylogenetic systems aim to mirror common ancestry.',
      },
      {
        t: 'mcq',
        q: 'Cytotaxonomy is based primarily on:',
        opts: [
          { label: 'chemical constituents', nudge: '<b>(a)</b> is chemotaxonomy.' },
          { label: 'chromosome number and behaviour', nudge: null },
          { label: 'gross morphology', nudge: '<b>(c)</b> is the basis of artificial systems.' },
          { label: 'computer-coded characters', nudge: '<b>(d)</b> is numerical taxonomy.' },
        ],
        correct: 1,
        solution: '“Cyto-” → cells/chromosomes.',
      },
      {
        t: 'mcq',
        q: 'A weakness of Linnaeus’s artificial system was that it:',
        opts: [
          { label: 'used too many characters', nudge: '<b>(a)</b> is the opposite (it used too few).' },
          { label: 'ignored stamens', nudge: '<b>(b)</b> is false (stamens were central).' },
          { label: 'gave equal weight to vegetative and sexual characters', nudge: null },
          { label: 'relied on chromosome data', nudge: '<b>(d)</b> is anachronistic (chromosome data is cytotaxonomy).' },
        ],
        correct: 2,
        solution: 'Equal weighting of easily-modified vegetative characters produced unnatural groups.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Swapping proponents.</b> Lock the pairs: <b>Linnaeus = artificial</b> (stamens); <b>Bentham & Hooker = natural</b>; <b>phylogenetic = evolutionary relationships</b>.',
          '<b>Mixing the three “-taxonomies.” Cyto = chromosomes, Chemo = chemicals, Numerical = computer-coded equal-weight characters.</b> The prefix tells you the evidence.',
          '<b>Thinking “artificial = bad/useless.”</b> It is simply convenient but unnatural; it was a vital early step, not worthless.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> In any “which system / which taxonomy” question, decode the keyword: one/few characters → artificial; all characters / affinities → natural; evolution / ancestry → phylogenetic; chromosomes → cyto-; chemicals → chemo-; computer / equal weight → numerical.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Artificial</b>',
            note: 'few easily-seen characters; <b>Linnaeus</b> (androecium); fast but unnatural; flaw = equal weight to vegetative & sexual characters.',
          },
          {
            f: '<b>Natural</b>',
            note: 'natural affinities, all characters; <b>Bentham & Hooker</b> (Genera Plantarum); widely used for flowering plants.',
          },
          { f: '<b>Phylogenetic</b>', note: 'evolutionary relationships / common ancestry; <b>Engler & Prantl</b>.' },
          { f: '<b>Numerical taxonomy</b>', note: 'all characters, equal weight, numerically coded, computer-processed.' },
          { f: '<b>Cytotaxonomy</b>', note: 'chromosome number, structure, behaviour.' },
          { f: '<b>Chemotaxonomy</b>', note: 'chemical constituents.' },
        ],
        aids: [
          'systems by deepening evidence: “<b>A</b>rtificial → <b>N</b>atural → <b>P</b>hylogenetic” = few → many → ancestry.',
          '“-taxonomies”: “Cyto-Chromosome, Chemo-Chemical, Numerical-Numbers.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 148–158 ─────────────────────────
  {
    n: '02',
    title: 'Algae',
    kalam: 'Formally, algae are chlorophyll-bearing, simple, thalloid, autotrophic, and largely aquatic organisms.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Algae is a high-yield topic. NEET asks 1–2 direct questions almost every year (class characteristics, pigments, stored food, examples: pure recall; the book’s estimate from past papers, not official figures), and CUET leans on match-the-column and assertion–reason on the same facts. CBSE Boards may carry a 1–2 mark question on economic importance or distinguishing two classes. Almost everything here is “fact retention under time pressure,” so the goal is a clean mental table you can dump in seconds.',
      },
      {
        t: 'p',
        html: 'Picture the produce section of a busy sabzi mandi. Everything green, brown, and reddish is laid out in separate baskets, and an experienced shopper can tell at a glance which basket holds what, not by reading a label, but by <b>colour, texture, and where it came from</b>. Algae work exactly like that. They are nature’s simplest food-makers, and we sort them into baskets mostly by the colours of the pigments they carry.',
      },
      {
        t: 'p',
        html: 'Formally, <b>algae are chlorophyll-bearing, simple, thalloid, autotrophic, and largely aquatic organisms.</b> Let us unpack that, because each word is doing real work:<br>• Chlorophyll-bearing & autotrophic: every alga contains chlorophyll <i>a</i> and makes its own food by photosynthesis. They are producers, the bottom rung of nearly every aquatic food chain.<br>• Thalloid: the body is a <b>thallus</b>; there is no true root, stem, or leaf, and no vascular tissue. A <i>Spirogyra</i> filament floating in a village pond is just a chain of similar cells; it has not “decided” to become roots or shoots yet.<br>• Largely aquatic: fresh water, brackish water, the sea, but also moist stones, soils, and wood. Some live in surprising partnerships: with fungi as <b>lichens</b>, and even in the fur of the <b>sloth bear</b> (NCERT’s example; the alga best known for this grows in the fur of the tree sloth).',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> if you imagine the whole plant kingdom as a long railway line from the simplest life-makers to the most complex flowering plants, algae are the very first platform. They have solved the single hardest problem (“how do I capture sunlight and turn it into food?”) but they have not yet built any of the engineering (roots to anchor, vessels to transport water, seeds to travel) that later plants will add. This is why the chapter starts here.',
      },
      {
        t: 'p',
        html: 'The size range is genuinely dramatic and worth fixing in your head: from <b>microscopic single cells</b> like <i>Chlamydomonas</i>, through <b>colonies</b> like <i>Volvox</i> (a hollow ball of cells) and <b>filaments</b> like <i>Spirogyra</i> and <i>Ulothrix</i>, all the way up to the <b>kelps</b>, giant brown seaweeds that form massive plant bodies several metres long. Same fundamental “simple thalloid autotroph” blueprint, wildly different scale.',
      },
      {
        t: 'p',
        html: 'The classic teaching tool is to split algae into <b>three classes by pigment colour</b>: Chlorophyceae (green), Phaeophyceae (brown), and Rhodophyceae (red). Here is the crucial intuition for the whole topic: <b>all three are green underneath: every alga has chlorophyll <i>a</i>.</b> The brown and red ones simply have extra accessory pigments (fucoxanthin in brown, r-phycoerythrin in red) layered on top that <b>mask</b> the green and let the alga absorb light at depths where pure green light is gone. A red alga thriving deep in the ocean is not “less green inside”: its red pigment is a depth-adaptation that catches the bluish light that penetrates farthest.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & where the neat picture breaks down.</b> The three-colour scheme is a teaching simplification, not a hard law:<br>• Colour is not a perfectly reliable field marker. Brown algae range from olive-green to deep brown depending on how much xanthophyll they carry, so “I saw a brownish weed, it must be Phaeophyceae” can fail.<br>• “Green = freshwater, brown/red = marine” is a tendency, not a rule. Some red algae live in fresh water; some greens are marine.<br>• Algae are not plants in the strict modern sense and are not a single natural (monophyletic) group: they are an assemblage grouped for convenience. Treat the three classes as exam categories, not as a tidy evolutionary family tree.',
      },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      {
        t: 'p',
        html: 'The fastest way to lock this topic is one comparison table. Build it once, recall it forever.',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Chlorophyceae (green)', 'Phaeophyceae (brown)', 'Rhodophyceae (red)'],
        rows: [
          ['Common name', 'Green algae', 'Brown algae', 'Red algae'],
          [
            'Major pigments',
            'Chlorophyll <i>a</i>, <i>b</i>',
            'Chlorophyll <i>a</i>, <i>c</i> + <b>fucoxanthin</b> (+ carotenoids, xanthophylls)',
            'Chlorophyll <i>a</i>, <i>d</i> + <b>r-phycoerythrin</b> (phycobilins)',
          ],
          ['Reserve / stored food', '<b>Starch</b> (also oils)', '<b>Mannitol, laminarin</b>', '<b>Floridean starch</b>'],
          [
            'Cell wall',
            'Inner cellulose + outer <b>pectose</b>',
            'Cellulose + <b>algin</b>',
            'Cellulose + pectin + sulphated polysaccharides',
          ],
          ['Flagella', '2–8, equal, apical', '2, unequal, lateral', '<b>Absent</b>'],
          [
            'Habitat',
            'Mostly fresh water; some marine/brackish',
            'Mostly <b>marine</b>',
            'Mostly <b>marine</b> (some fresh water)',
          ],
          [
            'Body / special structures',
            'Often a <b>pyrenoid</b> (starch-storing body in chloroplast)',
            'Body differentiated into <b>holdfast + stipe + frond</b>',
            'Often grows attached to rocks; some calcareous (build coral reefs)',
          ],
          [
            'Type examples',
            '<i>Chlamydomonas</i>, <i>Volvox</i>, <i>Ulothrix</i>, <i>Spirogyra</i>, <i>Chara</i>',
            '<i>Ectocarpus</i>, <i>Dictyota</i>, <i>Laminaria</i>, <i>Sargassum</i>, <i>Fucus</i>',
            '<i>Polysiphonia</i>, <i>Porphyra</i>, <i>Gracilaria</i>, <i>Gelidium</i>',
          ],
        ],
      },
      { t: 'p', html: '<b>Key terms to define precisely (these are the ones exams trap you on):</b>' },
      {
        t: 'p',
        html: '• <b>Thallus</b>: an undifferentiated plant body with no true roots, stems, leaves, or vascular tissue.<br>• <b>Pyrenoid</b>: a protein-and-starch storage body located inside the chloroplast; characteristic of green algae. Note: it stores protein besides starch.<br>• <b>Holdfast / stipe / frond</b>: in a brown alga (e.g., a kelp), the holdfast anchors it to the substratum, the stipe is the stalk, and the frond is the leaf-like photosynthetic blade.',
      },
      { t: 'fig', id: 'b11-03-fig-3.1' },
      {
        t: 'p',
        html: '• <b>Floridean starch</b>: the reserve food of red algae; structurally similar to amylopectin and glycogen.<br>• <b>Algin</b> and <b>carrageen</b>: commercially valuable hydrocolloids (water-holding substances) from brown and red algae respectively.',
      },
      {
        t: 'p',
        html: '<b>Reproduction vocabulary</b> (true across the classes):<br>• <b>Vegetative</b>: by fragmentation.<br>• <b>Asexual</b>: by spores, most commonly <b>zoospores</b> (flagellated, motile spores that germinate into new plants).<br>• <b>Sexual</b>: by fusion of gametes, of three types:<br>– <b>Isogamous</b>: fusion of two morphologically similar, usually flagellated gametes (e.g., <i>Chlamydomonas</i>).<br>– <b>Anisogamous</b>: fusion of two gametes dissimilar in size (e.g., some <i>Chlamydomonas</i>).<br>– <b>Oogamous</b>: fusion of a large, non-motile female gamete with a small, motile male gamete (e.g., <i>Volvox</i>, <i>Fucus</i>).',
      },

      { t: 'part', title: 'Comparative characteristics and life cycles' },
      {
        t: 'p',
        html: 'There is no “derivation” in descriptive botany, so this part does the analogous heavy lifting: <b>how the three classes differ at a glance</b>, and <b>a high-yield idea: alternation of generations.</b>',
      },
      { t: 'p', html: '<b>3.1 Telling the three classes apart (the decision path)</b>' },
      {
        t: 'p',
        html: 'When a question hands you a feature and asks for the class, run this mental sequence:<br>1. <b>Pigment / colour cue?</b> “Fucoxanthin” or “olive-green to brown” → Phaeophyceae. “r-phycoerythrin / red / great ocean depths / coral reef” → Rhodophyceae. “Chlorophyll <i>a</i> and <i>b</i> only / pyrenoid” → Chlorophyceae.<br>2. <b>Stored food cue?</b> “Floridean starch” → red. “Mannitol / laminarin” → brown. “Starch (in a pyrenoid)” → green.<br>3. <b>Flagella cue?</b> “Flagella absent” → red (this is a clean, reliable marker). Motile flagellated gametes/zoospores → green or brown.<br>4. <b>Body cue?</b> “Holdfast, stipe, frond” → a brown seaweed. “Filament / colony / unicell in fresh water” → green.',
      },
      {
        t: 'p',
        html: 'The reliability ranking matters in a speed exam: <b>stored food and pigment are the most diagnostic; habitat is the least</b> (too many exceptions).',
      },
      { t: 'p', html: '<b>3.2 Alternation of generations: the three life-cycle patterns</b>' },
      {
        t: 'p',
        html: 'Every plant life cycle alternates between a <b>haploid gametophyte (<i>n</i>)</b> that makes gametes and a <b>diploid sporophyte (2<i>n</i>)</b> that makes spores. What changes from group to group is <b>which phase dominates</b>: which one is the larger, longer-lived, free-living, photosynthetic body. Algae are the perfect place to learn this because all three patterns appear among them.',
      },
      {
        t: 'p',
        html: '<b>Pattern A: Haplontic.</b> The dominant, free-living, photosynthetic phase is the <b>haploid gametophyte (<i>n</i>)</b>. The diploid phase is reduced to a single cell: the zygote (2<i>n</i>). The zygote does not grow into a body; it immediately undergoes <b>meiosis</b> to produce haploid spores, which grow into new gametophytes.',
      },
      {
        t: 'p',
        html: 'gametes (<i>n</i>) →<sup>fusion</sup> zygote (2<i>n</i>) →<sup>meiosis</sup> spores (<i>n</i>) → gametophyte (<i>n</i>)',
      },
      {
        t: 'p',
        html: 'The diploid generation here is just “one cell, then meiosis.” Examples: <b>many green algae: <i>Volvox</i>, <i>Spirogyra</i>, some <i>Chlamydomonas</i>.</b>',
      },
      {
        t: 'p',
        html: '<b>Pattern B: Diplontic.</b> The mirror image. The dominant, free-living phase is the <b>diploid sporophyte (2<i>n</i>)</b>; the haploid phase is reduced to the gametes alone or to a few cells. Among algae, <b><i>Fucus</i> (a brown alga)</b> follows this pattern (meiosis forms the gametes), and so do seed plants (where meiosis forms spores, which grow into much-reduced gametophytes), which is why this pattern is worth knowing well.',
      },
      {
        t: 'p',
        html: '<b>Pattern C: Haplo-diplontic.</b> The intermediate case: <b>both the gametophyte and the sporophyte are multicellular</b> and often free-living, and the cycle alternates between two visible bodies. Examples among algae: <b><i>Ectocarpus</i>, <i>Polysiphonia</i>, and the kelps (<i>Laminaria</i>)</b>, plus bryophytes and pteridophytes outside the algae.',
      },
      { t: 'fig', id: 'b11-03-fig-3.2' },
      {
        t: 'p',
        html: '• <b>Haplontic:</b> <i>Volvox</i>, <i>Spirogyra</i>, some <i>Chlamydomonas</i> (many green algae).<br>• <b>Diplontic:</b> <i>Fucus</i>; seed plants (gymnosperms + angiosperms).<br>• <b>Haplo-diplontic:</b> <i>Ectocarpus</i>, <i>Polysiphonia</i>, kelps; bryophytes; pteridophytes.',
      },
      { t: 'p', html: '<b>3.3 Economic importance (high-yield CBSE/CUET facts)</b>' },
      {
        t: 'p',
        html: '• <b>Food:</b> <i>Chlorella</i> (a unicellular green alga) and <i>Spirulina</i> (a filamentous cyanobacterium, listed with the algae in NCERT) are protein-rich food supplements; <i>Porphyra</i>, <i>Laminaria</i>, and <i>Sargassum</i> are eaten in several countries.<br>• <b>Hydrocolloids: algin</b> (from brown algae) and <b>carrageen</b> (from red algae) are commercially important water-holding substances.<br>• <b>Agar:</b> obtained from <i>Gracilaria</i> and <i>Gelidium</i> (red algae); used to <b>culture microbes</b> and to make <b>ice creams and jellies</b>.<br>• <b>Reef building:</b> some calcareous red algae deposit calcium carbonate and contribute to <b>coral reefs and limestone</b>.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'p',
        html: 'Descriptive biology has no “numericals,” so these are worked reasoning questions across the exam ladder. Read the logic, not just the answer.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board level · 2 marks',
        q: 'State any two distinguishing features each of Chlorophyceae and Rhodophyceae, and give one example of each.',
        steps: [
          '<b>Model answer (clean, mark-friendly presentation):</b><br>• <b>Chlorophyceae:</b> (i) Major pigments are chlorophyll <i>a</i> and <i>b</i>, giving a grass-green colour. (ii) Stored food is <b>starch</b>, often around a pyrenoid. Example: <i>Spirogyra</i>.<br>• <b>Rhodophyceae:</b> (i) Major pigment is <b>r-phycoerythrin</b>, masking the chlorophyll and giving a red colour. (ii) Stored food is <b>floridean starch</b>; flagella are <b>absent</b>. Example: <i>Polysiphonia</i>.',
          '<b>Why it scores:</b> the examiner wants paired, contrasting features (pigment + food) and a correct named example per class: exactly two each, no padding.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level · match the column',
        q: 'Match the alga in Column I with its correct class in Column II.<br><b>Column I:</b> A. <i>Sargassum</i>; B. <i>Chara</i>; C. <i>Gelidium</i>.<br><b>Column II:</b> I. Rhodophyceae; II. Phaeophyceae; III. Chlorophyceae.',
        steps: [
          '<b>Reasoning:</b> <i>Sargassum</i> is a classic brown seaweed → Phaeophyceae (A–II). <i>Chara</i> is a green alga → Chlorophyceae (B–III). <i>Gelidium</i> yields agar and is a red alga → Rhodophyceae (C–I).',
          '<b>Speed tip:</b> anchor on the one you are surest of. <i>Gelidium</i> → agar → red is the strongest single hook; lock C–I first and the rest fall out by elimination.',
        ],
        ans: 'A–II, B–III, C–I.',
      },
      {
        t: 'ex',
        tag: 'NEET level · multi-fact integration',
        q: 'A marine alga stores its food as mannitol and laminarin, possesses a body clearly divided into holdfast, stipe, and frond, and reproduces sexually by an oogamous method. To which class does it belong, and name its photosynthetic accessory pigment.',
        steps: [
          '<b>Reasoning:</b> Three independent clues must agree. Mannitol/laminarin as reserve → Phaeophyceae. Holdfast–stipe–frond differentiation → a large brown alga (kelp-type). Oogamy occurs in brown algae such as <i>Fucus</i>. All three converge on <b>Phaeophyceae</b>. The accessory pigment that gives the brown colour is <b>fucoxanthin</b>.',
          '<b>Why NEET likes this:</b> it stacks pigment + stored food + body plan + reproduction so a student who memorised only one column cannot answer. The discipline is to check that every clue points the same way before committing.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty · assertion–reason',
        q: '<b>Assertion (A):</b> In the haplontic life cycle of <i>Spirogyra</i>, the diploid phase is represented by a single cell. <b>Reason (R):</b> The zygote of <i>Spirogyra</i> undergoes meiosis on germination rather than mitotic growth.<br>Options: (a) Both A and R true, R is the correct explanation of A. (b) Both true, R not the correct explanation. (c) A true, R false. (d) A false, R true.',
        steps: [
          '<b>Reasoning:</b> In a haplontic cycle the only diploid cell is the zygote, so <b>A is true</b>. The reason the diploid phase never becomes a multicellular body is precisely that the zygote divides by <b>meiosis</b> immediately on germination, restoring the haploid state and producing spores, so <b>R is true,</b> and it is exactly why A holds. R is the correct explanation of A.',
          '<b>The trap:</b> students who recall “the zygote is diploid” mark A true but then misremember the zygote as dividing mitotically (confusing it with the diplontic pattern), pick R false, and land on (c). The discriminating fact is meiosis on germination.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      { t: 'p', html: 'Attempt before checking the key.' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define a thallus. Why are algae described as “thalloid”? (2 marks)',
            a: 'A plant body not differentiated into root, stem, or leaf and lacking vascular tissue; algae have exactly this undifferentiated body.',
          },
          {
            q: '[CUET] Name the stored food and the principal accessory pigment of Phaeophyceae.',
            a: 'Stored food: mannitol and laminarin; accessory pigment: fucoxanthin.',
          },
          {
            q: '[NEET] Flagella are completely absent in which class of algae? Name one example of that class.',
            a: 'Rhodophyceae; e.g., <i>Polysiphonia</i> (or <i>Porphyra</i>).',
          },
          {
            q: '[NEET] Arrange these as haplontic / diplontic / haplo-diplontic: <i>Fucus</i>, <i>Volvox</i>, <i>Ectocarpus</i>.',
            a: '<i>Fucus</i>: diplontic; <i>Volvox</i>: haplontic; <i>Ectocarpus</i>: haplo-diplontic.',
          },
          {
            q: '[NEET high-difficulty / AR] <b>Assertion:</b> Some red algae can live at great ocean depths. <b>Reason:</b> r-phycoerythrin absorbs the light wavelengths that penetrate deepest into water. Choose from the standard four assertion–reason options: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '(a): both true and R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which one of the following sets correctly lists only green algae (Chlorophyceae)?',
        opts: [
          { label: '<i>Chlamydomonas</i>, <i>Volvox</i>, <i>Ulothrix</i>', nudge: null },
          {
            label: '<i>Fucus</i>, <i>Dictyota</i>, <i>Laminaria</i>',
            nudge: '<b>(b)</b> is the <b>brown-algae trap</b>: all are Phaeophyceae.',
          },
          {
            label: '<i>Porphyra</i>, <i>Gracilaria</i>, <i>Gelidium</i>',
            nudge: '<b>(c)</b> is the <b>red-algae trap</b>: all are Rhodophyceae (note the agar-yielders).',
          },
          {
            label: '<i>Sargassum</i>, <i>Ectocarpus</i>, <i>Polysiphonia</i>',
            nudge:
              '<b>(d)</b> <b>mixes</b> brown (<i>Sargassum</i>, <i>Ectocarpus</i>) with red (<i>Polysiphonia</i>); a student who recognises only <i>Sargassum</i> may wrongly assume the whole row is uniform.',
          },
        ],
        correct: 0,
        solution: 'All three are classic green algae.',
      },
      {
        t: 'mcq',
        q: 'The reserve food material of Rhodophyceae is:',
        opts: [
          { label: 'starch', nudge: '<b>(a)</b> starch → the <b>green-algae</b> answer (Chlorophyceae).' },
          {
            label: 'laminarin',
            nudge:
              '<b>(b)</b> laminarin and <b>(d)</b> mannitol → both are <b>brown-algae</b> reserves; picked by students who blur the brown/red boundary.',
          },
          { label: 'floridean starch', nudge: null },
          {
            label: 'mannitol',
            nudge:
              '<b>(b)</b> laminarin and <b>(d)</b> mannitol → both are <b>brown-algae</b> reserves; picked by students who blur the brown/red boundary.',
          },
        ],
        correct: 2,
        solution: 'Floridean starch is the hallmark reserve of red algae.',
      },
      {
        t: 'mcq',
        q: 'Which feature is characteristic of brown algae but NOT of red algae?',
        opts: [
          {
            label: 'Presence of chlorophyll <i>a</i>',
            nudge:
              '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are <b>shared traits</b> (both have chlorophyll <i>a</i>, both are mostly marine, both have cellulose); they are distractors precisely because each is true of brown algae, tempting a reader who forgets the word “NOT.”',
          },
          { label: 'Body differentiated into holdfast, stipe, and frond', nudge: null },
          {
            label: 'Largely marine habitat',
            nudge:
              '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are <b>shared traits</b> (both have chlorophyll <i>a</i>, both are mostly marine, both have cellulose); they are distractors precisely because each is true of brown algae, tempting a reader who forgets the word “NOT.”',
          },
          {
            label: 'Cellulose in the cell wall',
            nudge:
              '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are <b>shared traits</b> (both have chlorophyll <i>a</i>, both are mostly marine, both have cellulose); they are distractors precisely because each is true of brown algae, tempting a reader who forgets the word “NOT.”',
          },
        ],
        correct: 1,
        solution: 'The holdfast–stipe–frond organisation typifies large brown algae such as kelps.',
      },
      {
        t: 'mcq',
        q: 'In the haplo-diplontic life cycle:',
        opts: [
          {
            label: 'only the gametophyte is multicellular',
            nudge:
              '<b>(a)</b> describes the <b>haplontic</b> pattern; <b>(d)</b> also describes haplontic (single-celled diploid phase).',
          },
          { label: 'only the sporophyte is multicellular', nudge: '<b>(b)</b> describes the <b>diplontic</b> pattern.' },
          { label: 'both gametophyte and sporophyte are multicellular', nudge: null },
          {
            label: 'the zygote is the only diploid cell',
            nudge:
              '<b>(a)</b> describes the <b>haplontic</b> pattern; <b>(d)</b> also describes haplontic (single-celled diploid phase).',
          },
        ],
        correct: 2,
        solution:
          'The defining feature is that both generations are multicellular. Each wrong option is a different life-cycle type, so this question is really testing whether you can separate the three.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Swapping stored foods.</b> A common slip: assigning laminarin/mannitol to red algae or floridean starch to brown. Lock it as a chant: <b>green = starch, brown = mannitol/laminarin, red = floridean starch.</b>',
          '<b>Treating colour and habitat as hard rules.</b> “Brownish, so Phaeophyceae” and “freshwater, so green” both fail on exceptions. Decide on <b>pigment name + stored food</b> first; use colour/habitat only as a tie-breaker.',
          '<b>Reversing the dominant phase in life cycles.</b> Haplontic = gametophyte dominant; diplontic = sporophyte dominant. Students flip these under time pressure. Mnemonic: <b>“Hap-loid → Haplontic dominant.”</b>',
          '<b>Missing the negative word.</b> In “which is NOT” / “incorrectly matched” items, the facts in the options are often individually correct, which is the trap. Circle “NOT” before reading options.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any “identify the alga/class” question, scan for a <b>stored-food or pigment keyword first</b>; those two columns are the most diagnostic and least exception-ridden. If the stem only gives habitat or colour, slow down: that is exactly where the examiner planted the ambiguity.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Definition</b>',
            note: 'chlorophyll-bearing, simple, <b>thalloid</b>, autotrophic, largely aquatic. Size: unicell → colony → filament → kelp.',
          },
          {
            f: '<b>Green (Chlorophyceae)</b>',
            note: 'chl <i>a</i>, <i>b</i> · <b>starch</b> · cellulose+pectose wall · <b>pyrenoid</b> · <i>Chlamydomonas</i>, <i>Volvox</i>, <i>Ulothrix</i>, <i>Spirogyra</i>, <i>Chara</i>.',
          },
          {
            f: '<b>Brown (Phaeophyceae)</b>',
            note: 'chl <i>a</i>, <i>c</i> + <b>fucoxanthin</b> · <b>mannitol/laminarin</b> · cellulose+<b>algin</b> · <b>holdfast–stipe–frond</b> · <i>Ectocarpus</i>, <i>Dictyota</i>, <i>Laminaria</i>, <i>Sargassum</i>, <i>Fucus</i>.',
          },
          {
            f: '<b>Red (Rhodophyceae)</b>',
            note: 'chl <i>a</i>, <i>d</i> + <b>r-phycoerythrin</b> · <b>floridean starch</b> · <b>flagella absent</b> · coral-reef builders · <i>Polysiphonia</i>, <i>Porphyra</i>, <i>Gracilaria</i>, <i>Gelidium</i>.',
          },
          {
            f: '<b>Reproduction</b>',
            note: 'vegetative (fragmentation) · asexual (<b>zoospores</b>) · sexual (<b>iso- / aniso- / oogamous</b>).',
          },
          {
            f: '<b>Life cycles</b>',
            note: '<b>Haplontic</b> (gametophyte dominant; zygote = only 2n cell → meiosis): <i>Volvox</i>, <i>Spirogyra</i>. <b>Diplontic</b> (sporophyte dominant): <i>Fucus</i>, seed plants. <b>Haplo-diplontic</b> (both multicellular): <i>Ectocarpus</i>, <i>Polysiphonia</i>, kelps.',
          },
          {
            f: '<b>Economic</b>',
            note: '<i>Chlorella</i> / <i>Spirulina</i> (food) · <b>algin</b> (brown) · <b>carrageen</b> (red) · <b>agar</b> from <i>Gracilaria</i> / <i>Gelidium</i>.',
          },
        ],
        aids: [
          'Reserves → “<b>G</b>reen <b>S</b>tarch, <b>B</b>rown <b>M</b>annitol, <b>R</b>ed <b>F</b>loridean” (GS–BM–RF).',
          'Red algae = “<b>R</b>ed has <b>R</b>emoved its flagella” (flagella absent).',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 158–167 ─────────────────────────
  {
    n: '03',
    title: 'Bryophytes & Pteridophytes',
    kalam: 'Bryophytes are the amphibians of the plant kingdom.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This pair is a classic: expect 1–2 questions almost every year (the book’s estimate from past papers, not official figures) on the gametophyte/sporophyte dominance switch, sex organs, heterospory, and the four pteridophyte classes. CUET leans on match-the-column (class ↔ example) and assertion–reason. CBSE Boards may ask a 2–3 mark comparison of bryophytes vs pteridophytes, or “why are bryophytes called amphibians.” The two groups are taught together because they tell one continuous story: the plant kingdom’s move onto land.',
      },
      {
        t: 'p',
        html: 'Think of the plant kingdom as the story of one long migration, from water onto dry land. Algae solved photosynthesis but never truly left the water. The next two groups are the pioneers who crawled ashore, and each solved a different part of the problem of living out of water.',
      },
      {
        t: 'p',
        html: '<b>Bryophytes are the amphibians of the plant kingdom.</b> The label is exact, and worth taking literally. A frog can hop around on land, but it must return to water to breed: its sperm still has to swim. Bryophytes (the <b>mosses, liverworts, and hornworts</b>) are in precisely this situation. Their bodies sit on land, in moist shaded corners (the damp patch on old compound walls after the monsoon, the green film on rocks near a hill stream), but they have <b>no plumbing</b>. They lack vascular tissue (no xylem, no phloem), so they cannot pump water up to any height; this is why no bryophyte is tall. And crucially, their male gametes still have to <b>swim</b> through a film of water to reach the egg. Land body, water-dependent sex life: amphibian.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> a bryophyte is like a settler who has built a hut on dry land but still has to walk down to the river every day to fetch water in a pot: no pipes, no tank. They’ve arrived on land, but they haven’t engineered the land yet.',
      },
      {
        t: 'p',
        html: '<b>Pteridophytes are the first to install the plumbing.</b> Ferns and their relatives are the <b>first terrestrial plants to possess vascular tissue</b>: true xylem and phloem. With pipes to move water and nutrients, the main plant body could finally grow upright and develop <b>true roots, a stem, and leaves</b>. This is the engineering leap: a fern is a proper land plant in a way a moss is not. (They still need a water film for fertilization, so they aren’t fully independent of water, but the body itself is built for land.)',
      },
      {
        t: 'p',
        html: 'The second big idea running through both groups is a <b>switch in who is “the plant.”</b> Every plant alternates between a haploid <b>gametophyte</b> (makes gametes) and a diploid <b>sporophyte</b> (makes spores). The question is always: which one is the dominant, visible, free-living body?<br>• In <b>bryophytes</b>, the green plant you see is the gametophyte. The sporophyte is a small dependent structure riding on top of it.<br>• In <b>pteridophytes</b>, this flips: the green fern you see is the sporophyte. The gametophyte has shrunk to a tiny, separate heart-shaped flap called a <b>prothallus</b>.',
      },
      {
        t: 'p',
        html: 'That single reversal, gametophyte-dominant → sporophyte-dominant, is a high-yield idea, and it continues all the way up to seed plants.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & nuances.</b><br>• “Bryophytes are non-vascular” is the hard rule that defines them; “small and moisture-loving” is a consequence, not the definition.<br>• Pteridophytes are seedless vascular plants: they have plumbing but have not yet invented the seed. The origin of the seed habit can, however, be traced inside the heterosporous pteridophytes (more in the Comparative characteristics and life cycles part).<br>• Both still depend on external water for fertilization. The independence from water comes only later, with seed plants.',
      },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      {
        t: 'table',
        title: '2.1 The two groups at a glance',
        head: ['Feature', 'Bryophytes', 'Pteridophytes'],
        rows: [
          [
            'Vascular tissue (xylem/phloem)',
            '<b>Absent</b> (non-vascular)',
            '<b>Present</b>: first land plants to have it',
          ],
          ['Dominant / main plant body', '<b>Gametophyte</b> (<i>n</i>)', '<b>Sporophyte</b> (2<i>n</i>)'],
          [
            'True roots, stem, leaves',
            'Absent (only rhizoids, leaf-/stem-like parts)',
            '<b>Present</b> (true root, stem, leaf)',
          ],
          [
            'Sporophyte',
            'Small, <b>attached to & dependent on</b> gametophyte',
            '<b>Independent</b>, dominant, free-living',
          ],
          [
            'Gametophyte',
            'Dominant, free-living, photosynthetic',
            '<b>Prothallus</b>: small, short-lived, free-living (in homosporous ferns)',
          ],
          [
            'Sex organs',
            'Antheridium (♂) & archegonium (♀); multicellular, jacketed',
            'Antheridium & archegonium on the prothallus',
          ],
          [
            'Water for fertilization',
            '<b>Required</b> (motile antherozoids swim)',
            '<b>Required</b> (motile antherozoids swim)',
          ],
          [
            'Examples',
            '<i>Marchantia</i>, <i>Riccia</i> (liverworts); <i>Funaria</i>, <i>Sphagnum</i>, <i>Polytrichum</i> (mosses)',
            '<i>Selaginella</i>, <i>Equisetum</i>, <i>Dryopteris</i>, <i>Adiantum</i>',
          ],
          [
            'Common tag',
            '“Amphibians of the plant kingdom”',
            '“First land plants with vascular tissue” / seedless vascular plants',
          ],
        ],
      },
      { t: 'p', html: '<b>2.2 Bryophytes: internal divisions</b>' },
      {
        t: 'p',
        html: 'Three groups: <b>liverworts, mosses, and hornworts.</b> The two you must know in detail:<br>• <b>Liverworts</b> (e.g., <i>Marchantia</i>, <i>Riccia</i>): body is a flat, dorsiventral <b>thallus</b> anchored by <b>rhizoids</b>; grow in very moist places. Asexual reproduction by <b>gemmae</b> (green, multicellular asexual buds borne in cup-like <b>gemma cups</b>) and by <b>fragmentation</b>. The sporophyte is differentiated into <b>foot, seta and capsule</b> (reduced to little more than a capsule in <i>Riccia</i>).<br>• <b>Mosses</b> (e.g., <i>Funaria</i>, <i>Polytrichum</i>, <i>Sphagnum</i>): the gametophyte has <b>two stages</b>: (i) the <b>protonema</b>, a creeping green filamentous stage that grows directly from a spore, and (ii) the <b>leafy stage</b>, an upright axis bearing spirally arranged leaf-like structures, which arises as a lateral bud on the secondary protonema. The <b>sex organs and the leafy stage</b> are where reproduction happens. The moss <b>sporophyte is more elaborate</b>: differentiated into <b>foot, seta, and capsule</b>; the capsule mouth bears a fringe of teeth (<b>peristome</b>) that aids spore dispersal.',
      },
      {
        t: 'table',
        title: '2.3 Pteridophytes: the four classes',
        head: ['Class', 'Representative examples'],
        rows: [
          ['Psilopsida', '<i>Psilotum</i>'],
          ['Lycopsida', '<i>Selaginella</i>, <i>Lycopodium</i>'],
          ['Sphenopsida', '<i>Equisetum</i> (horsetail)'],
          ['Pteropsida (true ferns)', '<i>Dryopteris</i>, <i>Pteris</i>, <i>Adiantum</i> (maidenhair fern)'],
        ],
      },
      { t: 'p', html: '<b>Key pteridophyte terms:</b>' },
      {
        t: 'p',
        html: '• <b>Sporophyll</b>: a leaf that bears <b>sporangia</b> (the spore-producing organs).<br>• <b>Microphyll / macrophyll</b>: small leaves (as in <i>Selaginella</i>) vs large leaves (as in ferns).<br>• <b>Prothallus</b>: the small, free-living, photosynthetic <b>gametophyte</b> of a homosporous fern, into which a spore germinates.<br>• <b>Homosporous</b> vs <b>heterosporous</b>: producing one kind of spore vs two kinds (micro + mega). <i>Selaginella</i> and <i>Salvinia</i> are classic <b>heterosporous</b> examples.',
      },
      { t: 'fig', id: 'b11-03-fig-3.3' },

      { t: 'part', title: 'Comparative characteristics and life cycles' },
      { t: 'p', html: '<b>3.1 Both are haplo-diplontic, but mirror images</b>' },
      {
        t: 'p',
        html: 'Both bryophytes and pteridophytes have a <b>haplo-diplontic</b> life cycle: both the gametophyte and the sporophyte are multicellular. What differs is <b>which generation is the dominant, free-living one</b>, and that single difference cascades into every other contrast between the groups.',
      },
      { t: 'p', html: '<b>Bryophyte life cycle (gametophyte-dominant):</b>' },
      {
        t: 'p',
        html: 'spore (<i>n</i>) → gametophyte (<i>n</i>) →<sup>gametes fuse</sup> zygote (2<i>n</i>) → sporophyte (2<i>n</i>, dependent) →<sup>meiosis</sup> spores (<i>n</i>)',
      },
      {
        t: 'p',
        html: 'The green moss/liverwort body is the gametophyte. Its multicellular, jacketed sex organs, <b>antheridium</b> (releases motile <b>antherozoids</b>) and the flask-shaped <b>archegonium</b> (holds a single egg), produce gametes; the antherozoid swims through water to the egg. The zygote <b>does not undergo meiosis immediately</b>. Instead it grows into a small multicellular <b>sporophyte that stays attached to the gametophyte and draws nourishment from it</b>; it is never free-living. Only inside the sporophyte’s capsule does <b>meiosis</b> finally produce the spores.',
      },
      { t: 'p', html: '<b>Pteridophyte life cycle (sporophyte-dominant):</b>' },
      {
        t: 'p',
        html: 'spore (<i>n</i>) → prothallus (<i>n</i>) →<sup>gametes fuse</sup> zygote (2<i>n</i>) → <b>sporophyte</b> (2<i>n</i>, dominant) →<sup>meiosis in sporangia</sup> spores (<i>n</i>)',
      },
      {
        t: 'p',
        html: 'Here the big leafy fern is the sporophyte. It bears <b>sporophylls</b> with <b>sporangia</b>, where <b>meiosis</b> produces spores. A spore germinates into the small, independent <b>prothallus</b> (the gametophyte), which bears antheridia and archegonia; again the antherozoid must swim to the egg. The zygote develops into a new dominant sporophyte: the embryo growing on/within the gametophyte before the fern takes over.',
      },
      { t: 'p', html: '<b>The contrast to memorise:</b>' },
      {
        t: 'table',
        title: null,
        head: ['', 'Bryophyte', 'Pteridophyte'],
        rows: [
          ['Dominant generation', 'Gametophyte (<i>n</i>)', 'Sporophyte (2<i>n</i>)'],
          ['Sporophyte status', 'Attached, <b>dependent</b>', 'Free, <b>independent</b>'],
          ['Gametophyte', 'The main body', 'Tiny <b>prothallus</b>'],
          ['Where meiosis occurs', 'Capsule of the dependent sporophyte', 'Sporangia on sporophylls'],
        ],
      },
      { t: 'p', html: '<b>3.2 Heterospory and the dawn of the seed habit</b>' },
      {
        t: 'p',
        html: 'Most pteridophytes are <b>homosporous</b> (one spore type). But a few, notably <b><i>Selaginella</i> and <i>Salvinia</i></b>, are <b>heterosporous</b>: they make small <b>microspores</b> (→ male gametophyte) and large <b>megaspores</b> (→ female gametophyte). The decisive detail is that the <b>megaspore (and female gametophyte) is retained on the parent sporophyte</b>, where the zygote develops into an embryo. This “keep the next generation at home and nourish it” arrangement is the evolutionary rough draft of the <b>seed</b>. This is why the <b>origin of the seed habit is traced to the heterosporous pteridophytes</b>, even though pteridophytes themselves bear no seeds.',
      },
      { t: 'p', html: '<b>3.3 The evolutionary sequence</b>' },
      { t: 'p', html: 'Groups arranged by increasing complexity and by the order in which each became prominent:' },
      { t: 'p', html: 'Algae → Bryophytes (mosses) → Pteridophytes (ferns) → Gymnosperms → Angiosperms<br>Ferns did not descend from mosses.' },
      {
        t: 'p',
        html: 'To colonise land successfully, plants had to evolve ways to <b>resist desiccation</b> and to <b>transport water internally</b>: bryophytes solved the first only partly and never solved the second; pteridophytes solved the second with vascular tissue.',
      },
      { t: 'p', html: '<b>3.4 Economic & ecological importance</b>' },
      {
        t: 'p',
        html: '• <b>Bryophytes:</b> mosses (with lichens) are <b>pioneers of succession</b> on bare rock: they decompose the substratum and start soil formation; dense moss mats reduce the impact of falling rain and <b>prevent soil erosion</b>. <b><i>Sphagnum</i></b> (a moss) yields <b>peat</b> (used as fuel) and is <b>hygroscopic</b>, so it is used as a packing material to keep cut flowers and live plants moist during long-distance transport.<br>• <b>Pteridophytes:</b> used <b>medicinally</b>, as <b>soil-binders</b>, and frequently grown as <b>ornamentals</b>.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board level · 3 marks',
        q: 'Give three points of difference between bryophytes and pteridophytes.',
        steps: [
          '<b>Model answer:</b><br>1. <b>Vascular tissue:</b> absent in bryophytes; present (xylem and phloem) in pteridophytes.<br>2. <b>Dominant plant body:</b> the gametophyte (<i>n</i>) in bryophytes; the sporophyte (2<i>n</i>) in pteridophytes.<br>3. <b>Sporophyte:</b> in bryophytes it is small and dependent on the gametophyte; in pteridophytes it is independent, dominant, and bears true roots, stem, and leaves.',
          '<b>Why it scores:</b> three paired, contrasting differences along clearly named axes: examiners want the axis stated, not two unrelated facts.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level · match the column',
        q: 'Match each pteridophyte in Column I with its class in Column II.<br><b>Column I:</b> A. <i>Equisetum</i>; B. <i>Selaginella</i>; C. <i>Dryopteris</i>.<br><b>Column II:</b> I. Pteropsida; II. Sphenopsida; III. Lycopsida.',
        steps: [
          '<b>Reasoning:</b> <i>Equisetum</i> (horsetail) → Sphenopsida (A–II). <i>Selaginella</i> → Lycopsida (B–III). <i>Dryopteris</i> (a true fern) → Pteropsida (C–I).',
          '<b>Speed hook:</b> “<i>Dryopteris</i> = true fern = Pteropsida” is the surest anchor; lock C–I, then <i>Equisetum</i>’s “horsetail/Spheno-” and <i>Selaginella</i>’s “Lyco-” fall out.',
        ],
        ans: 'A–II, B–III, C–I.',
      },
      {
        t: 'ex',
        tag: 'NEET level · multi-fact integration',
        q: 'An unknown land plant has a dominant, green, free-living gametophyte; its sporophyte is small, remains attached to the gametophyte, and is nourished by it; and its motile male gametes require a film of water to reach the egg. Name the plant group and state where meiosis occurs in its life cycle.',
        steps: [
          '<b>Reasoning:</b> “Gametophyte dominant” + “sporophyte attached and dependent” together pin this to <b>bryophytes</b> (the pteridophyte sporophyte is independent and dominant: the opposite). The water-dependent motile gametes are consistent (true of both, so non-discriminating, but they fit). <b>Meiosis occurs in the capsule of the sporophyte</b>, producing the haploid spores.',
          '<b>Why NEET likes it:</b> the dependent-vs-independent sporophyte is the one clue that separates the two groups; a student who fixes only on “needs water” or “produces spores” (true of both) cannot decide.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty · assertion–reason',
        q: '<b>Assertion (A):</b> The origin of the seed habit can be traced to heterosporous pteridophytes such as <i>Selaginella</i>. <b>Reason (R):</b> In these plants the megaspore is retained on the parent sporophyte, where the female gametophyte develops and the embryo is nourished.<br>Options: (a) Both true, R correctly explains A. (b) Both true, R does not explain A. (c) A true, R false. (d) A false, R true.',
        steps: [
          '<b>Reasoning:</b> <b>A is true</b>: heterospory plus retention is the recognised precursor to the seed. <b>R is true</b> and it states exactly the mechanism that makes A true: retaining the megaspore/female gametophyte on the parent and nourishing the embryo there is the rudimentary “seed” arrangement. So R is the correct explanation of A.',
          '<b>The trap:</b> students who remember “pteridophytes have no seeds” may judge A false and pick (d), missing that A claims the origin/precursor of the habit, not actual seeds.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why are bryophytes called the “amphibians of the plant kingdom”? (2 marks)',
            a: 'They live on land but depend on water for sexual reproduction (motile antherozoids must swim to the egg), and they lack vascular tissue.',
          },
          {
            q: '[CUET] Name the two stages of the moss gametophyte and state which one bears the sex organs.',
            a: 'Protonema and leafy stage; the <b>leafy stage</b> bears the sex organs.',
          },
          {
            q: '[NEET] In a fern, the prothallus represents which generation, and is it haploid or diploid?',
            a: 'The <b>gametophyte</b>; <b>haploid</b> (<i>n</i>).',
          },
          {
            q: '[NEET] Classify as homosporous or heterosporous: <i>Dryopteris</i>, <i>Selaginella</i>, <i>Salvinia</i>.',
            a: '<i>Dryopteris</i>: homosporous; <i>Selaginella</i> and <i>Salvinia</i>: heterosporous.',
          },
          {
            q: '[NEET high-difficulty / AR] <b>Assertion:</b> In bryophytes the zygote does not divide by meiosis immediately. <b>Reason:</b> The zygote develops into a multicellular sporophyte, and meiosis occurs later in the capsule. Choose from the four standard AR options: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '(a): both true and R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The dominant, photosynthetic, free-living phase in the life cycle of a moss is the:',
        opts: [
          {
            label: 'sporophyte',
            nudge: '<b>(a)</b> is the <b>pteridophyte/seed-plant answer</b>: the classic dominance-reversal trap.',
          },
          { label: 'gametophyte', nudge: null },
          { label: 'zygote', nudge: '<b>(c)</b> the zygote is a single diploid cell, never the dominant phase.' },
          {
            label: 'protonema only',
            nudge: '<b>(d)</b> the protonema is only the first stage of the gametophyte, not the whole dominant phase.',
          },
        ],
        correct: 1,
        solution: 'In bryophytes the visible green plant is the gametophyte.',
      },
      {
        t: 'mcq',
        q: 'Which feature is present in pteridophytes but absent in bryophytes?',
        opts: [
          {
            label: 'Multicellular jacketed sex organs',
            nudge:
              '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are all <b>shared</b> by both groups, so each is a distractor for a student who hasn’t isolated the one difference.',
          },
          {
            label: 'Need for water at fertilization',
            nudge:
              '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are all <b>shared</b> by both groups, so each is a distractor for a student who hasn’t isolated the one difference.',
          },
          { label: 'Vascular tissue', nudge: null },
          {
            label: 'Spore production',
            nudge:
              '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are all <b>shared</b> by both groups, so each is a distractor for a student who hasn’t isolated the one difference.',
          },
        ],
        correct: 2,
        solution: 'Vascular tissue is the defining acquisition of pteridophytes.',
      },
      {
        t: 'mcq',
        q: 'In pteridophytes, a spore germinates to produce the:',
        opts: [
          { label: 'sporophyte', nudge: '<b>(a)</b> the sporophyte arises from the zygote, not directly from a spore.' },
          { label: 'prothallus', nudge: null },
          { label: 'protonema', nudge: '<b>(c)</b> protonema is the <b>bryophyte</b> (moss) stage: a cross-group trap.' },
          { label: 'zygote', nudge: '<b>(d)</b> the zygote forms only after gamete fusion on the prothallus.' },
        ],
        correct: 1,
        solution: 'The spore gives rise to the prothallus (the gametophyte).',
      },
      {
        t: 'mcq',
        q: 'Heterospory, regarded as a precursor to the seed habit, is shown by:',
        opts: [
          {
            label: '<i>Funaria</i> and <i>Marchantia</i>',
            nudge: '<b>(a)</b> and <b>(d)</b> are <b>bryophytes</b> (mosses/liverworts): not even vascular, let alone heterosporous.',
          },
          { label: '<i>Selaginella</i> and <i>Salvinia</i>', nudge: null },
          {
            label: '<i>Dryopteris</i> and <i>Pteris</i>',
            nudge:
              '<b>(c)</b> <i>Dryopteris</i> and <i>Pteris</i> are true ferns but <b>homosporous</b>; picked by students who know they’re pteridophytes but forget the homo/hetero split.',
          },
          {
            label: '<i>Sphagnum</i> and <i>Riccia</i>',
            nudge: '<b>(a)</b> and <b>(d)</b> are <b>bryophytes</b> (mosses/liverworts): not even vascular, let alone heterosporous.',
          },
        ],
        correct: 1,
        solution: '<i>Selaginella</i> and <i>Salvinia</i> are the standard heterosporous pteridophytes.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Reversing the dominant generation.</b> A common error: saying the moss body is a sporophyte or the fern body is a gametophyte. Chant it: <b>“Bryo = gametophyte; Pterido = sporophyte.”</b>',
          '<b>Crossing protonema with prothallus.</b> Protonema is the <b>moss</b> (bryophyte) filamentous stage; prothallus is the <b>fern</b> (pteridophyte) gametophyte. Same “pro-” prefix, opposite groups.',
          '<b>“Spore makes the big plant.”</b> A spore germinates into the <b>gametophyte</b> (prothallus/protonema), never directly into the dominant sporophyte.',
          '<b>Using “needs water for fertilization” to tell them apart.</b> Both groups need water for the swimming antherozoid: it’s a shared trait, not a discriminator. Decide on <b>vascular tissue / dominant generation</b> instead.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any “identify the group” item, hunt first for two keywords: <b>vascular tissue</b> (present → pteridophyte) and <b>which generation is dominant/dependent</b>. Those two settle almost every bryophyte-vs-pteridophyte question; ignore the shared traits the examiner sprinkles in as noise.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Bryophytes = “amphibians”</b>',
            note: 'land body, but need water for sex; <b>non-vascular</b>; <b>gametophyte dominant</b>; sporophyte small & <b>dependent</b> on gametophyte; no true root/stem/leaf (only rhizoids). Groups: <b>liverworts</b> (<i>Marchantia</i>, <i>Riccia</i>; gemmae in gemma cups), <b>mosses</b> (<i>Funaria</i>, <i>Sphagnum</i>, <i>Polytrichum</i>; protonema + leafy stage; sporophyte = foot–seta–capsule), hornworts.',
          },
          {
            f: '<b>Pteridophytes = first land plants with vascular tissue</b>',
            note: '<b>vascular</b> (xylem + phloem); <b>sporophyte dominant</b> with true root/stem/leaf; gametophyte = small <b>prothallus</b>. Four classes: <b>Psilopsida</b> (<i>Psilotum</i>), <b>Lycopsida</b> (<i>Selaginella</i>, <i>Lycopodium</i>), <b>Sphenopsida</b> (<i>Equisetum</i>), <b>Pteropsida</b> (<i>Dryopteris</i>, <i>Pteris</i>, <i>Adiantum</i>).',
          },
          {
            f: '<b>Sex organs (both)</b>',
            note: 'antheridium (♂, motile antherozoids) + archegonium (♀, flask-shaped, 1 egg); multicellular, jacketed.',
          },
          {
            f: '<b>Life cycle (both haplo-diplontic)</b>',
            note: 'differ only in which generation dominates. Meiosis → spores (bryo: in capsule; pterido: in sporangia on sporophylls).',
          },
          {
            f: '<b>Heterospory → seed habit</b>',
            note: '<i>Selaginella</i>, <i>Salvinia</i> (micro + mega spores; megaspore retained on parent): origin of the seed habit.',
          },
          { f: '<b>Increasing complexity (not a descent chain)</b>', note: 'Algae → Moss → Fern → Gymnosperm → Angiosperm.' },
          {
            f: '<b>Uses</b>',
            note: '<i>Sphagnum</i> → peat (fuel) + hygroscopic packing; mosses → soil-erosion control & succession pioneers; pteridophytes → medicine, soil-binders, ornamentals.',
          },
        ],
        aids: [
          'Dominance → “<b>B</b>ryo <b>B</b>ears the gametophyte; <b>P</b>terido <b>P</b>ushes the sporophyte.”',
          'Stage names → “Mo<b>SS</b> = protonema; <b>F</b>ern = prothallus.”',
          'Pteridophyte classes → “<b>P</b>lease <b>L</b>earn <b>S</b>ome <b>P</b>lants” (Psilo–Lyco–Spheno–Ptero).',
        ],
      },
    ],
  },
];
