import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Topic 01, Carbohydrates: pp. 479–488 of the Class 12 Chemistry
 * Master Reference, word for word, split at its Sections 1 to 8. The title page
 * (p. 478) and the contents lines at the top of p. 479 are not copied.
 * Figure 10.1 (caption p. 482, drawn p. 483) sits in "Key procedures and
 * logical framework" after the paragraph that names D-(+)-glucose, where the
 * book prints its caption; Figure 10.2 (caption p. 482, drawn p. 483) sits
 * after "The resolution", the paragraph on the cyclic hemiacetal and its
 * anomers. Both are redrawn in lib/diagrams/chemistry-12-10.ts.
 * The book sets formulas in maths italic; here species are upright, D and L
 * plain capitals, α and β upright, rotation signs (+) and (−) with a real minus.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 479–488 ─────────────────────────
  {
    n: '01',
    title: 'Carbohydrates',
    kalam: 'Carbohydrates are a near-guaranteed scorer.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Carbohydrates are a near-guaranteed scorer. CBSE Boards routinely ask 1–3 mark questions on classification, the glucose structure-evidence list, reducing vs. non-reducing sugars, and the difference between starch and cellulose. NEET asks 1–2 direct recall/conceptual questions almost every year (often glycosidic linkages or invert sugar). JEE Main typically frames 1 question blending optical activity, anomers, or hydrolysis products, and JEE Advanced occasionally builds a structure-elucidation or stereochemistry puzzle on this base.',
      },
      {
        t: 'p',
        html: 'Picture the cash that keeps a busy Saturday market in Pune running. The vegetable vendor needs loose coins and ten-rupee notes to settle hundreds of tiny transactions instantly — that’s <b>glucose</b>, the body’s small-change currency that every cell can spend on the spot. The same vendor, at the end of the day, bundles the takings into thick wads and locks them in a steel almirah at home — that’s <b>starch</b> in plants and <b>glycogen</b> in animals: energy folded up into a compact, storable form that gets broken back into “coins” only when needed. And the wooden shelf the almirah sits on, the cotton kurta the vendor wears — that’s <b>cellulose</b>, sugar units chained together not for energy but for structure.',
      },
      {
        t: 'p',
        html: 'That single image captures almost everything about carbohydrates. They are, chemically, <b>optically active polyhydroxy aldehydes or ketones, or compounds that yield such units on hydrolysis.</b> (NCERT’s definition; the simplest ketose, dihydroxyacetone, has no chiral carbon and is its one exception to “optically active”.) The old name “carbohydrate” came from their general formula C<sub><i>x</i></sub>(H<sub>2</sub>O)<sub><i>y</i></sub> — they looked like “hydrates of carbon.” Glucose, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, neatly fits as C<sub>6</sub>(H<sub>2</sub>O)<sub>6</sub>. But that formula is a loose historical hint, not a definition: acetic acid CH<sub>3</sub>COOH also fits as C<sub>2</sub>(H<sub>2</sub>O)<sub>2</sub> yet is no sugar, while rhamnose C<sub>6</sub>H<sub>12</sub>O<sub>5</sub> is a genuine carbohydrate that doesn’t fit. So always lean on the functional-group definition, not the formula.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> every carbohydrate is built from one repeating brick — a small sugar unit. How many bricks you can knock loose by hydrolysis tells you the class:<br>• <b>Monosaccharides</b> — a single brick that cannot be hydrolysed into anything simpler (glucose, fructose, ribose). About 20 occur in nature.<br>• <b>Oligosaccharides</b> — 2 to 10 bricks; the commonest are <b>disaccharides</b> (sucrose, maltose, lactose), which hydrolyse into two monosaccharide units, same or different.<br>• <b>Polysaccharides</b> — a large number of bricks (starch, cellulose, glycogen). These are not sweet and are also called non-sugars.',
      },
      {
        t: 'p',
        html: 'A second, cross-cutting label asks whether a sugar still has a free reactive carbonyl end — a free aldehyde or keto group that can act as a reducing agent (it reduces Tollens’ or Fehling’s reagent). If yes, it’s a <b>reducing sugar</b>; if both reactive ends are locked into the bond joining the units, it’s <b>non-reducing</b>. Here’s the intuition: a reducing sugar is like a shopkeeper who still keeps one counter open for business; a non-reducing sugar like sucrose has both partners’ hands clasped in the joining handshake, leaving no counter free.',
      },
      {
        t: 'p',
        html: 'That “handshake” is the <b>glycosidic linkage</b> — when two monosaccharides join, an –OH from each comes together, a water molecule is squeezed out, and an oxygen bridge (oxide linkage) ties them. It is the single most important bond in the whole topic, because which carbons are bridged decides whether a sugar reduces, how a polysaccharide branches, and whether you can digest it.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions to keep in mind:</b><br>• The C<sub><i>x</i></sub>(H<sub>2</sub>O)<sub><i>y</i></sub> formula is descriptive, not defining — never use it to classify.<br>• “Reducing” depends on a free hemiacetal/carbonyl carbon, not merely on being a mono- or disaccharide. Maltose and lactose are reducing disaccharides; sucrose is not.<br>• D/L labels describe <b>relative configuration</b>, not the direction of optical rotation. D-glucose happens to be (+), D-fructose is (−) — the letter and the sign are independent.<br>• Glucose in solution is an <b>equilibrium</b> of open-chain and two cyclic forms; “the structure of glucose” is really a dynamic mixture, which is exactly why some open-chain reactions mysteriously fail.',
      },

      { t: 'part', title: 'Key definitions and classifications' },
      {
        t: 'p',
        html: 'Carbohydrates carry no dimensional formulae (they are structural/organic), so the “key quantities” here are definitions, formulae of the major species, and the diagnostic numbers you must memorise.',
      },
      {
        t: 'table',
        title: 'Core molecular identities',
        head: ['Species', 'Type', 'Molecular formula', 'Optical character'],
        rows: [
          ['Glucose (dextrose)', 'Aldohexose', 'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>', 'D-(+)'],
          ['Fructose', 'Ketohexose', 'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>', 'D-(−)'],
          ['Sucrose', 'Disaccharide', 'C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>', '(+) dextrorotatory'],
          ['Starch / cellulose (repeat)', 'Polysaccharide', '(C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub><i>n</i></sub>', '—'],
        ],
      },
      {
        t: 'def',
        term: 'Classification by carbonyl group',
        html: 'an <b>aldose</b> carries an aldehyde group (–CHO); a <b>ketose</b> carries a keto group (>C=O). Combine with the carbon count to get the full name — a six-carbon aldose is an aldohexose (glucose), a six-carbon ketose is a ketohexose (fructose), a five-carbon aldose is an aldopentose (ribose).',
      },
      {
        t: 'formula',
        kicker: 'Specific rotations (memorise — they drive the invert-sugar logic)',
        main: '[α]<sub>glucose</sub> = +52.5°<br>[α]<sub>fructose</sub> = −92.4°<br>[α]<sub>sucrose</sub> = +66.5°',
        legend: [
          '[α]<sub>glucose</sub> = specific rotation of glucose',
          '[α]<sub>fructose</sub> = specific rotation of fructose',
          '[α]<sub>sucrose</sub> = specific rotation of sucrose',
        ],
        note: 'Glucose’s +52.5° and fructose’s −92.4° are the values at equilibrium, after mutarotation (NCERT’s numbers). Data books often give glucose +52.7°; the difference is within measurement and changes no answer.',
      },
      {
        t: 'p',
        html: 'SI-related unit of specific rotation: degree (°); strictly deg dm<sup>−1</sup> cm<sup>3</sup> g<sup>−1</sup> (path length in dm, concentration in g cm<sup>−3</sup>), that is 10<sup>−1</sup> deg cm<sup>2</sup> g<sup>−1</sup>, but exams quote it simply in degrees.',
      },
      {
        t: 'table',
        title: 'Linkage rulebook for the named sugars (this table answers most direct questions)',
        head: ['Sugar', 'Built from', 'Glycosidic linkage', 'Reducing?'],
        rows: [
          ['Sucrose', 'α-D-glucose + β-D-fructose', 'C1(glucose)–C2(fructose)', '<b>No</b>'],
          ['Maltose', 'two α-D-glucose', 'C1–C4', '<b>Yes</b>'],
          ['Lactose', 'β-D-galactose + β-D-glucose', 'C1(galactose)–C4(glucose)', '<b>Yes</b>'],
          ['Amylose (starch)', 'α-D-glucose', 'C1–C4 (linear)', '—'],
          ['Amylopectin (starch)', 'α-D-glucose', 'C1–C4 chain + C1–C6 branch', '—'],
          ['Cellulose', 'β-D-glucose', 'C1–C4 (linear)', '—'],
          ['Glycogen', 'α-D-glucose', 'C1–C4 chain + C1–C6 (highly branched)', '—'],
        ],
      },
      {
        t: 'def',
        term: 'Ring nomenclature',
        html: 'a six-membered sugar ring is a <b>pyranose</b> (by analogy with pyran); a five-membered ring is a <b>furanose</b> (by analogy with furan). Glucose forms the pyranose ring; fructose forms the furanose ring (NCERT’s answer, and fructose’s ring in sucrose; free fructose in water is mostly the six-membered pyranose, closed by its C6–OH).',
      },
      {
        t: 'def',
        term: 'Anomeric carbon & anomers',
        html: 'the carbon that was the carbonyl carbon before ring closure (C1 in glucose, C2 in fructose) becomes a new chiral centre on cyclisation. The two ring forms that differ only in the –OH orientation at this carbon are <b>anomers</b>, labelled α (–OH down/right) and β (–OH up/left). Everything else about the two molecules is identical.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no single “derivation” here in the physics sense, but there is a beautiful chain of chemical reasoning — how the structure of glucose was deduced from evidence, and why that open-chain picture had to be upgraded to a ring. Reproducing this logic, not just the conclusion, is what separates a full-mark Board answer from a half one.',
      },
      {
        t: 'p',
        html: '<b>Part A — How glucose is prepared.</b> Before deducing its structure, note the two standard laboratory/industrial routes:<br>• <b>From sucrose:</b> boiling sucrose (cane sugar) with dilute HCl or H<sub>2</sub>SO<sub>4</sub> in alcoholic solution hydrolyses it into equal amounts of glucose and fructose.',
      },
      {
        t: 'formula',
        kicker: 'Glucose from sucrose',
        main: 'C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> + H<sub>2</sub>O →<sup>H⁺</sup> C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (glucose) + C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (fructose)',
        legend: [
          'C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> = sucrose (cane sugar)',
          'H<sub>2</sub>O = water',
          'H<sup>+</sup> = acid catalyst, dilute HCl or H<sub>2</sub>SO<sub>4</sub>',
          'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> = glucose or fructose, as labelled',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '• <b>From starch (commercial method):</b> starch is hydrolysed by boiling with dilute H<sub>2</sub>SO<sub>4</sub> at about 393 K under a pressure of 2–3 atm, yielding glucose.',
      },
      {
        t: 'formula',
        kicker: 'Glucose from starch (commercial method)',
        main: '(C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub><i>n</i></sub> + <i>n</i>H<sub>2</sub>O →<sup>H⁺</sup> <i>n</i> C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>',
        legend: [
          '(C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub><i>n</i></sub> = starch',
          '<i>n</i> = number of glucose units in the chain',
          'H<sup>+</sup> = acid catalyst, dilute H<sub>2</sub>SO<sub>4</sub>',
          '393 K, 2–3 atm = temperature and pressure of the hydrolysis',
          'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> = glucose',
        ],
        note: null,
      },
      {
        t: 'proc',
        title: 'Part B — Building the open-chain structure of glucose, evidence by evidence',
        steps: [
          '<b>Molecular formula</b> C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> establishes six carbons, twelve hydrogens, six oxygens. Where they sit is the unknown.',
          '<b>Prolonged heating with HI gives n-hexane.</b> HI strips every oxygen-bearing function down to –CH<sub>2</sub>–/–CH<sub>3</sub>; getting a straight six-carbon alkane proves all six carbons are in an <b>unbranched chain</b>.',
          '<b>Reaction with hydroxylamine gives an oxime, and with HCN a cyanohydrin.</b> Both are textbook carbonyl reactions, so a >C=O group is present.',
          '<b>Mild oxidation with bromine water gives a six-carbon monocarboxylic acid (gluconic acid).</b> Bromine water oxidises an aldehyde, not a ketone, so the carbonyl is specifically an <b>aldehydic</b> –CHO, and it sits at the chain end.',
          '<b>Acetylation with acetic anhydride gives a penta-acetate.</b> Five acetyl groups go on, so there are <b>five –OH groups</b>, and because the penta-acetate is stable, they sit on five different carbons.',
          '<b>Oxidation with conc. HNO<sub>3</sub> converts both glucose and gluconic acid into the same dicarboxylic acid (saccharic acid).</b> If the far end also oxidises to –COOH, that end must have been a primary alcohol –CH<sub>2</sub>OH.',
        ],
      },
      {
        t: 'p',
        html: 'Assemble the pieces — straight C6 chain, terminal –CHO, terminal –CH<sub>2</sub>OH, four –CHOH in between — and you reach the Fischer structure:<br>CHO–(CHOH)<sub>4</sub>–CH<sub>2</sub>OH',
      },
      {
        t: 'p',
        html: 'Fischer fixed the exact left/right placement of each –OH from further study, naming it <b>D-(+)-glucose</b>.',
      },
      { t: 'fig', id: 'c12-10-fig-10.1' },
      {
        t: 'p',
        html: '<b>Why “D” and why “(+)”:</b> the <b>D/L</b> label compares the configuration of the lowest asymmetric carbon (C5 in glucose) with that of glyceraldehyde — –OH on the right in the Fischer projection means D. The <b>(+)</b> label is an experimental fact (it rotates plane-polarised light clockwise). These two are unrelated: a D sugar can rotate either way.',
      },
      { t: 'p', html: '<b>Part C — Why the open chain isn’t the whole story (upgrade to the ring).</b>' },
      {
        t: 'p',
        html: 'Three stubborn facts refuse to fit a free –CHO:<br>• Glucose gives <b>no Schiff’s test</b> and forms <b>no hydrogensulphite addition product</b> with NaHSO<sub>3</sub>, even though aldehydes normally do both.<br>• The <b>penta-acetate of glucose does not react with hydroxylamine</b>, as if the aldehyde had vanished.<br>• Glucose exists in <b>two crystalline forms</b> — α (m.p. 419 K, from concentrated solution at 303 K) and β (m.p. 423 K, from hot saturated solution at 371 K).',
      },
      {
        t: 'p',
        html: 'The resolution: one –OH (specifically at <b>C5</b>) swings round and adds across the –CHO to form a cyclic <b>hemiacetal</b>, generating a six-membered <b>pyranose</b> ring. The former aldehyde carbon (C1) becomes a new chiral centre — the <b>anomeric carbon</b> — whose two possible orientations give the α and β anomers. In solution the open chain and the two rings sit in equilibrium, so the aldehyde is “mostly hidden,” which is exactly why open-chain reactions partly fail.',
      },
      { t: 'fig', id: 'c12-10-fig-10.2' },
      {
        t: 'p',
        html: '<b>Fructose, in parallel:</b> same formula C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, but the carbonyl is a <b>keto group at C2</b>, making it a ketohexose. Its C5 –OH adds to the C2 keto carbon to give a <b>five-membered furanose</b> ring with its own α and β anomers. It belongs to the D-series and is laevorotatory: <b>D-(−)-fructose</b>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A pure sample of D-glucose is divided into three portions and treated separately with (A) bromine water, (B) excess acetic anhydride, and (C) prolonged heating with HI. Name each product and state the single structural conclusion each reaction supports.',
        steps: [
          'Work reagent by reagent, naming the product and tying it to one structural fact:',
          '<b>(A) Bromine water</b> is a mild oxidant that attacks only an aldehyde. Glucose → <b>gluconic acid</b>, a six-carbon monocarboxylic acid. <b>Conclusion:</b> the carbonyl in glucose is a terminal <b>aldehydic</b> group (–CHO).',
          '<b>(B) Acetic anhydride</b> acetylates hydroxyl groups. Glucose → <b>glucose penta-acetate</b> (five –OCOCH<sub>3</sub> groups installed). <b>Conclusion:</b> glucose contains <b>five –OH groups</b>, on five different carbons.',
          '<b>(C) Prolonged heating with HI</b> reduces every oxygen function to hydrocarbon. Glucose → <b>n-hexane</b>. <b>Conclusion:</b> the six carbon atoms form a <b>straight, unbranched chain</b>.',
        ],
        ans: 'A = gluconic acid, B = glucose penta-acetate, C = n-hexane; supporting a terminal aldehyde, five hydroxyls, and a straight C6 chain respectively.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Among maltose, sucrose, lactose and D-fructose, how many are reducing sugars? (a) 1 (b) 2 (c) 3 (d) 4',
        steps: [
          '<b>The trap:</b> students reflexively tag every disaccharide “non-reducing” (and some doubt that a ketose like fructose can reduce), then mis-count. Every monosaccharide, fructose included, is a reducing sugar.',
          '<b>Fast reasoning (no structures drawn):</b> a sugar is reducing if it has a free carbonyl/hemiacetal end.<br>• <b>Maltose</b> — glucose–glucose joined C1–C4, so one anomeric carbon stays free → <b>reducing.</b><br>• <b>Lactose</b> — galactose–glucose joined C1–C4, the glucose C1 stays free → <b>reducing.</b><br>• <b>Fructose</b> — a free monosaccharide, free keto group → <b>reducing.</b><br>• <b>Sucrose</b> — joined C1(glucose)–C2(fructose), both reducing ends locked → <b>non-reducing.</b>',
          'Count the reducing ones: maltose, lactose, fructose → three.',
          '<b>Mental shortcut:</b> of the common sugars, sucrose is the famous exception — almost everything else on a typical list reduces.',
        ],
        ans: '(c) 3.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A chemist monitors the acid hydrolysis of a sucrose solution with a polarimeter. Sucrose itself has a specific rotation of +66.5°. After complete hydrolysis the solution contains an equimolar mixture of glucose ([α] = +52.5°) and fructose ([α] = −92.4°). (i) Predict the sign of rotation of the final mixture and (ii) explain why the technical name “invert sugar” arises. This question links <b>optical activity arithmetic</b> with the <b>reducing/non-reducing structural concept</b>.',
        steps: [
          '<b>(i)</b> For an equimolar product mixture, the net observed rotation tracks the simple average of the component specific rotations:<br>[α]<sub>mix</sub> = ((+52.5°) + (−92.4°))/2 = (−39.9°)/2 ≈ −20.0°',
          'The result is <b>negative → the mixture is laevorotatory.</b>',
          '<b>(ii)</b> The starting sucrose was <b>dextrorotatory</b> (+66.5°); the product mixture is <b>laevorotatory</b> (≈ −20°). Hydrolysis has therefore inverted the sign of optical rotation from (+) to (−), which is why the product is historically named <b>invert sugar</b>.',
          '<b>Linking the second concept:</b> the very same C1–C2 glycosidic bond that makes sucrose <b>non-reducing</b> is the bond hydrolysis breaks; breaking it liberates fructose, and fructose’s large negative rotation (−92.4°) overwhelms glucose’s modest +52.5°, producing the net inversion. So the structural fact (both ends locked) and the optical fact (sign flip on hydrolysis) are two faces of the same C1–C2 linkage.',
        ],
        ans: '(i) laevorotatory, [α]<sub>mix</sub> ≈ −20°; (ii) the dextro → laevo sign reversal on hydrolysis defines “invert sugar.”',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'An unknown D-aldohexose <b>X</b> has the straight-chain skeleton CHO–(CHOH)<sub>4</sub>–CH<sub>2</sub>OH. On vigorous oxidation with conc. HNO<sub>3</sub>, both terminal carbons become –COOH, giving an aldaric (saccharic) acid <b>Y</b>. It is observed that <b>Y is optically inactive (a meso compound)</b>, whereas the aldaric acid obtained from D-glucose is optically active. Using only this information, deduce a structural constraint on the configuration of <b>X</b>, and state whether X can be glucose.',
        steps: [
          '<b>Step 1 — what the oxidation does.</b> Conc. HNO<sub>3</sub> oxidises both ends (–CHO and –CH<sub>2</sub>OH) to –COOH. The dicarboxylic acid <b>Y</b> therefore has identical end groups: HOOC–(CHOH)<sub>4</sub>–COOH.',
          '<b>Step 2 — origin of the symmetry test.</b> Because both ends of Y are now the same group, Y can possess an <b>internal plane of symmetry</b> if and only if the configurations of the four internal –CHOH centres are arranged so the top half mirrors the bottom half. When that internal mirror exists, the molecule is <b>meso — superimposable on its mirror image — hence optically inactive</b>, even though it contains chiral centres.',
          '<b>Step 3 — apply to X.</b> We are told Y is meso (optically inactive). Therefore the four stereocentres of X must be configured with the symmetry that, after both ends become –COOH, places matching configurations symmetrically about the chain’s midpoint. In Fischer terms, reading the four internal –OH positions top-to-bottom must give a pattern that is its own reverse (e.g. right–left–left–right type pairing) so the doubly-oxidised product superimposes on its mirror image.',
          '<b>Step 4 — can X be glucose?</b> The aldaric acid of <b>D-glucose (saccharic acid) is optically active</b>, i.e. not meso — its internal configurations lack that mirror symmetry. Since X’s aldaric acid <b>is</b> meso, <b>X cannot be glucose.</b> X must instead be an aldohexose whose end-to-end oxidation yields a symmetric (meso) diacid — galactose is the classic example whose aldaric acid (mucic acid) is optically inactive.',
        ],
        ans: 'The meso (inactive) aldaric acid forces X’s four internal stereocentres into an end-to-end symmetric arrangement; this rules out glucose (whose saccharic acid is optically active) and points to a galactose-type configuration (D-galactose gives meso mucic acid; D-allose, all four –OH on the right, also gives a meso acid).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define the terms (i) reducing sugar and (ii) glycosidic linkage. Give one example of a non-reducing sugar.',
            a: '(i) a sugar with a free carbonyl/hemiacetal that reduces Tollens’/Fehling’s reagent; (ii) the O-bridge joining two monosaccharide units formed with loss of water; example of non-reducing sugar: sucrose.',
          },
          {
            q: '[NEET] A disaccharide on hydrolysis yields only two molecules of glucose linked C1–C4 and is itself a reducing sugar. Name it.',
            a: 'Maltose. (Strictly, cellobiose — two β-D-glucose units linked C1–C4, from cellulose — also fits these words; “α-linked” would make maltose the only answer.)',
          },
          {
            q: '[JEE Main] State, with one structural reason each, why amylopectin is branched while amylose is linear, and identify the two types of glycosidic linkage involved in amylopectin.',
            a: 'Amylose uses only C1–C4 linkages → linear; amylopectin uses C1–C4 along the chain and C1–C6 at branch points → branched. Linkages: C1–C4 and C1–C6.',
          },
          {
            q: '[JEE Main] Glucose forms an oxime with hydroxylamine but its penta-acetate does not. Explain this observation in terms of the equilibrium between open-chain and cyclic forms.',
            a: 'In solution glucose’s free –CHO (present via the open-chain form in equilibrium) reacts with NH<sub>2</sub>OH; once acetylated, the anomeric oxygen is blocked, the ring cannot reopen, no free –CHO is available, so no oxime forms.',
          },
          {
            q: '[JEE Advanced] An aldopentose Z exists in solution predominantly as a five-membered ring. (i) Name the ring type. (ii) Identify the anomeric carbon. (iii) Explain why Z still shows mutarotation (a slow change in optical rotation on standing) despite being mostly cyclic.',
            a: '(i) furanose; (ii) C1 (the original aldehyde carbon); (iii) the cyclic hemiacetal is in equilibrium with a small amount of open-chain aldehyde, which re-closes to either α or β form, so the α ∶ β ratio (and hence rotation) drifts to equilibrium — mutarotation.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'One molecule of sucrose on complete hydrolysis gives:',
        opts: [
          {
            label: 'two molecules of glucose',
            nudge: '<b>(a)</b> confuses sucrose with <b>maltose</b>, which does give two glucose units — a classic mix-up.',
          },
          {
            label: 'two molecules of fructose',
            nudge: '<b>(b)</b> inverts the same maltose error toward fructose; no common disaccharide gives two fructose units.',
          },
          { label: 'one molecule of glucose + one molecule of fructose', nudge: null },
          {
            label: 'two molecules of glucose + one molecule of fructose',
            nudge: '<b>(d)</b> ignores conservation: a 12-carbon disaccharide cannot yield three hexose units (18 carbons). Picking it usually means a student is “stacking” remembered fragments without a mass check.',
          },
        ],
        correct: 2,
        solution: 'Sucrose is glucose joined to fructose by a C1–C2 glycosidic bond; hydrolysis cleaves that bond into one of each.',
      },
      {
        t: 'mcq',
        q: 'Which carbon of glucose is called the anomeric carbon?',
        opts: [
          { label: 'C1', nudge: null },
          {
            label: 'C2',
            nudge: '<b>(b)</b> C2 is the anomeric carbon in fructose (a ketohexose); choosing it means overgeneralising the fructose case to glucose.',
          },
          {
            label: 'C5',
            nudge: '<b>(c)</b> C5 is the carbon whose –OH attacks to form the ring, so it’s tempting — but it is the nucleophile, not the new stereocentre.',
          },
          {
            label: 'C6',
            nudge: '<b>(d)</b> C6 is the terminal –CH<sub>2</sub>OH; it is not even chiral, so it can never be anomeric.',
          },
        ],
        correct: 0,
        solution: 'On cyclisation the aldehyde carbon (C1) becomes a new chiral centre whose α/β orientation defines anomers — that is, by definition, the anomeric carbon.',
      },
      {
        t: 'mcq',
        q: 'Cellulose differs from amylose chiefly because cellulose is built from:',
        opts: [
          {
            label: 'α-D-glucose units with C1–C6 linkages',
            nudge: '<b>(a)</b> wrongly inserts C1–C6 branching (a glycogen/amylopectin feature) into cellulose, which is unbranched.',
          },
          { label: 'β-D-glucose units with C1–C4 linkages', nudge: null },
          {
            label: 'α-D-glucose units with C1–C4 linkages',
            nudge: '<b>(c)</b> describes <b>amylose</b>, not cellulose — the single-letter α/β swap is the whole point of the question.',
          },
          {
            label: 'β-D-fructose units with C1–C2 linkages',
            nudge: '<b>(d)</b> confuses cellulose with the sucrose linkage and substitutes fructose; cellulose contains no fructose.',
          },
        ],
        correct: 1,
        solution: 'Cellulose is a linear chain of <b>β-D-glucose</b> joined <b>C1–C4</b>; the β-linkage is precisely why humans cannot digest it while we digest α-linked starch.',
      },
      {
        t: 'mcq',
        q: 'Which observation is explained only by the cyclic structure of glucose and not by its open-chain form?',
        opts: [
          {
            label: 'Glucose forms a penta-acetate with acetic anhydride.',
            nudge: '<b>(a)</b> penta-acetate formation just counts five –OH groups; the open chain explains it fully.',
          },
          {
            label: 'Glucose is oxidised by bromine water to gluconic acid.',
            nudge: '<b>(b)</b> bromine-water oxidation to gluconic acid uses the free aldehyde — pure open-chain chemistry.',
          },
          { label: 'Glucose penta-acetate does not react with hydroxylamine.', nudge: null },
          {
            label: 'Glucose reacts with HCN to form a cyanohydrin.',
            nudge: '<b>(d)</b> cyanohydrin formation is a straightforward carbonyl reaction the open chain accounts for.',
          },
        ],
        correct: 2,
        solution: 'A free –CHO would react with NH<sub>2</sub>OH; the fact that the acetylated derivative does not means the aldehyde is locked away in a ring (the anomeric oxygen is blocked) — only the cyclic picture explains this. Students pick <b>(a)</b>, <b>(b)</b> or <b>(d)</b> when they don’t notice the keyword “penta-acetate does <b>not</b> react,” which is the only anomaly.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“all disaccharides are non-reducing.”</b> Of the named disaccharides, only sucrose locks both reducing ends. Maltose and lactose keep one free and are reducing. Anchor on the linkage, not the class.',
          '<b>equating D/L with (+)/(−).</b> The letter is relative configuration (vs. glyceraldehyde, judged at the lowest asymmetric carbon); the sign is measured rotation. D-fructose is (−); D-glucose is (+). They are decided by completely different criteria.',
          '<b>swapping pyranose and furanose / α and β.</b> Glucose → six-membered <b>pyranose</b>; fructose → five-membered <b>furanose</b>. The α/β anomer label refers only to the –OH orientation at the anomeric carbon (C1 for glucose, C2 for fructose) — nothing else changes.',
          '<b>confusing cellulose with starch.</b> Both are glucose polymers, but cellulose is <b>β-D-glucose, C1–C4, linear</b> (indigestible to us), while starch is <b>α-D-glucose</b> (amylose linear C1–C4; amylopectin branched with C1–C6). The α vs. β switch is the digestibility switch.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> for any “what does hydrolysis give / is it reducing” question, mentally run a two-step check — (1) which monosaccharides come out, (2) is any anomeric carbon left free? Memorise sucrose as <b>the</b> non-reducing exception, and remember the sign-flip mnemonic “<b>sucrose goes from sweet-right to sour-left</b>” (dextro → laevo on hydrolysis = invert sugar; “sour” is only for the memory, as invert sugar is in fact sweeter than sucrose). In MCQs, always do a quick carbon-count sanity check: a disaccharide (C<sub>12</sub>) can only yield two hexose units (2 × C<sub>6</sub>), never three.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Definition',
            note: 'optically active polyhydroxy aldehydes/ketones, or compounds yielding them on hydrolysis. Formula hint C<sub><i>x</i></sub>(H<sub>2</sub>O)<sub><i>y</i></sub> is not a definition.',
          },
          {
            f: 'Classes (by hydrolysis)',
            note: 'monosaccharide → none; oligosaccharide → 2–10; polysaccharide → many. Cross-label: <b>reducing</b> (free carbonyl) vs <b>non-reducing</b> (sucrose).',
          },
          {
            f: 'Glucose',
            note: 'aldohexose, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, <b>D-(+)</b>, six-membered <b>pyranose</b> ring, anomeric carbon <b>C1</b>. Evidence chain: HI → n-hexane (straight C6); Br<sub>2</sub>/H<sub>2</sub>O → gluconic acid (aldehyde); acetic anhydride → penta-acetate (5 –OH); conc. HNO<sub>3</sub> → saccharic acid (terminal –CH<sub>2</sub>OH).',
          },
          {
            f: 'Fructose',
            note: 'ketohexose, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, <b>D-(−)</b>, five-membered <b>furanose</b> ring, anomeric carbon <b>C2</b>.',
          },
          {
            f: 'Disaccharides',
            note: 'sucrose = α-glc(C1)–β-fru(C2), <b>non-reducing</b>, dextro → laevo on hydrolysis = <b>invert sugar</b>; maltose = glc–glc C1–C4 (reducing); lactose = gal(C1)–glc(C4) (reducing).',
          },
          {
            f: 'Polysaccharides',
            note: 'starch (α-glucose: amylose linear C1–C4 + amylopectin branched C1–C6); cellulose (β-glucose, linear C1–C4); glycogen (animal starch, highly branched).',
          },
          {
            f: 'Rotation arithmetic',
            note: '[α]<sub>glc</sub> = +52.5°, [α]<sub>fru</sub> = −92.4° ⇒ equimolar mix ≈ −20° (laevo).',
          },
        ],
        aids: [
          '“Sucrose is the lone non-reducing famous sugar”',
          '“glucose Pyranose (6) / fructose Furanose (5)”',
          '“D/L ≠ +/−.”',
        ],
      },
    ],
  },
];
