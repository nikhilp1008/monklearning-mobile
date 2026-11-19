import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 12 (Practical Chemistry), Topics 02 and 05, written fresh in our own words
 * (no source book). Topic 02: preparations (Mohr’s salt, potash alum, acetanilide,
 * p-nitroacetanilide, aniline yellow, iodoform). Topic 05: thermochemistry, sols and
 * kinetics (enthalpy of solution of CuSO₄, enthalpy of neutralisation, lyophilic and
 * lyophobic sols, iodide with hydrogen peroxide). Facts, quantities, colours and
 * conditions come from the NCERT Chemistry Laboratory Manual (Class XII Units 1, 2, 3,
 * 9, 10); every equation was balanced and every calculation recomputed twice.
 * Drawings c12-12-02-d1..d6 and c12-12-05-d1..d5 are redrawn in lib/diagrams.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 02 · Preparations ─────────────────────────
  {
    n: '02',
    title: 'Preparations',
    kalam: 'A preparation ends with a weighed, purified solid, and you must say why each step is done and how good the product is.',
    blocks: [
      // ───── Common ground: crystallisation, purity, yield
      { t: 'part', title: 'Crystallisation, purity and yield' },
      {
        t: 'p',
        html: 'Every preparation in this topic follows one plan: make the compound, separate the crude solid, purify it by crystallisation, then judge the product by its yield and its purity. The syllabus asks for the chemistry involved, so for each compound you should know the balanced equation, the reason for every condition, and how the product is tested.<br><br><b>Why crystallisation purifies.</b> The crude solid is dissolved in the smallest volume of hot solvent that will hold it. On cooling, the compound becomes less soluble and separates as crystals, while the small amount of impurity stays dissolved in the mother liquor. Slow cooling, without disturbance, gives larger and purer crystals; fast cooling traps mother liquor between small crystals.',
      },
      { t: 'fig', id: 'c12-12-02-d1' },
      {
        t: 'proc',
        title: 'Recrystallising a solid',
        steps: [
          '<b>Dissolve.</b> Heat the crude solid with a little of the chosen solvent until it just dissolves.',
          '<b>Clear.</b> If insoluble specks remain, filter the hot solution.',
          '<b>Cool slowly.</b> Leave the solution undisturbed to reach room temperature, so that crystals grow.',
          '<b>Filter and wash.</b> Collect the crystals and rinse them with a very small volume of cold solvent to remove the mother liquor that clings to them.',
          '<b>Dry and test.</b> Dry between the folds of a filter paper, weigh, and take the melting point of the perfectly dry sample.',
        ],
      },
      {
        t: 'defgrid',
        title: 'How a product is judged',
        rows: [
          { k: 'Yield', v: 'The mass of dry product actually obtained, compared with the theoretical mass. It can never honestly exceed 100 %: a figure above 100 % means the product is still wet or impure.' },
          { k: 'Appearance', v: 'Colour and crystal shape match the description of the pure compound (light green crystals, white needles, colourless crystals, a yellow solid).' },
          { k: 'Melting point', v: 'A pure compound melts sharply, over a narrow range, at its own temperature; impurity lowers the melting point and widens the range. The sample must be perfectly dry and recrystallised.' },
          { k: 'Washings', v: 'Where an acid is a by-product, the washings are tested with litmus and washing goes on until they are neutral.' },
        ],
      },
      {
        t: 'formula',
        kicker: 'Percentage yield',
        main: '% yield = (<i>m</i><sub>act</sub>/<i>m</i><sub>th</sub>) × 100<br><i>m</i><sub>th</sub> = <i>n</i> × <i>r</i> × <i>M</i>',
        legend: [
          '<i>m</i><sub>act</sub> = mass of dry product obtained',
          '<i>m</i><sub>th</sub> = mass if the reaction were complete',
          '<i>n</i> = moles of the limiting reactant',
          '<i>r</i> = moles of product per mole of reactant',
          '<i>M</i> = molar mass of the product',
        ],
        note: 'The limiting reactant is the one that gives the smaller amount of product.',
      },

      // ───── Experiment: Mohr's salt and potash alum
      { t: 'part', title: 'Mohr’s salt and potash alum: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To prepare crystals of two double salts, ferrous ammonium sulphate (Mohr’s salt) and potassium aluminium sulphate (potash alum), and to find the yield.<br><br>When a solution holding two simple salts in equimolar proportion is crystallised, one new compound with a fixed formula and a fixed amount of water of crystallisation separates. Dissolved again, a double salt behaves as a mixture of its ions, so Mohr’s salt gives the tests of Fe<sup>2+</sup>, NH<sub>4</sub><sup>+</sup> and SO<sub>4</sub><sup>2−</sup> separately. A complex compound is different: potassium trioxalatoferrate(III), for example, does not give the tests of Fe<sup>3+</sup>.<br><br><b>Why a little acid is added.</b> Fe<sup>2+</sup> and Al<sup>3+</sup> undergo hydrolysis in water:<br>Fe<sup>2+</sup> + 2H<sub>2</sub>O ⇌ Fe(OH)<sub>2</sub> + 2H<sup>+</sup><br>Al<sup>3+</sup> + 3H<sub>2</sub>O ⇌ Al(OH)<sub>3</sub> + 3H<sup>+</sup><br>Extra H<sup>+</sup> from dilute sulphuric acid pushes both equilibria to the left, so the ions stay in solution and the crystals are clean. For the same reason a solution of alum turns blue litmus red.',
      },
      {
        t: 'formula',
        kicker: 'Formation of Mohr’s salt',
        main: 'FeSO<sub>4</sub> + (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> + 6H<sub>2</sub>O → FeSO<sub>4</sub>·(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>·6H<sub>2</sub>O',
        legend: ['FeSO<sub>4</sub> = ferrous sulphate', '(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> = ammonium sulphate', 'Mohr’s salt = ferrous ammonium sulphate, 392 g mol<sup>−1</sup>'],
        note: 'The two salts are taken in equimolar amounts; the crystals are light green.',
      },
      {
        t: 'formula',
        kicker: 'Formation of potash alum',
        main: 'K<sub>2</sub>SO<sub>4</sub> + Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 24H<sub>2</sub>O → 2KAl(SO<sub>4</sub>)<sub>2</sub>·12H<sub>2</sub>O',
        legend: ['K<sub>2</sub>SO<sub>4</sub> = potassium sulphate', 'Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> = aluminium sulphate', 'alum = KAl(SO<sub>4</sub>)<sub>2</sub>·12H<sub>2</sub>O, 474 g mol<sup>−1</sup>'],
        note: 'One mole of K<sub>2</sub>SO<sub>4</sub> and one of Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> give two moles of alum; the crystals are white.',
      },

      { t: 'part', title: 'Mohr’s salt and potash alum: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> A 50 mL beaker and a 50 mL conical flask, a glass rod, a burner or hot plate, a thermometer, a funnel with filter paper, and a balance. Dilute sulphuric acid and a 1:1 mixture of cold water and alcohol are the other reagents.',
      },
      {
        t: 'proc',
        title: 'Potash alum',
        steps: [
          '<b>Dissolve the aluminium sulphate.</b> Warm 10 mL of distilled water in a 50 mL beaker to about 40 °C, dissolve 6.6 g of aluminium sulphate in it and add about 0.4 mL of dilute sulphuric acid.',
          '<b>Add potassium sulphate.</b> Add 2.4 g of powdered potassium sulphate and heat with constant stirring until it dissolves completely.',
          '<b>Cool slowly.</b> Let the solution come to room temperature slowly. White crystals of potash alum separate.',
          '<b>Wash.</b> Decant the mother liquor and wash the crystals by gentle shaking with the 1:1 cold water and alcohol mixture.',
          '<b>Dry and weigh.</b> Filter the crystals, dry them between the folds of a filter paper and note the yield.',
        ],
      },
      {
        t: 'proc',
        title: 'Mohr’s salt (ferrous ammonium sulphate)',
        steps: [
          '<b>Dissolve.</b> In a 50 mL conical flask, dissolve 3.5 g of ferrous sulphate and 1.7 g of ammonium sulphate (weighed separately) in 5 mL of distilled water by heating. Add about 0.5 mL of dilute sulphuric acid.',
          '<b>Concentrate.</b> Heat the solution until the crystallisation point is reached.',
          '<b>Cool slowly.</b> Allow the mixture to cool to room temperature slowly. Light green crystals of ferrous ammonium sulphate separate.',
          '<b>Wash.</b> Decant the mother liquor and shake the crystals with very small amounts of the cold 1:1 water and alcohol mixture to remove the mother liquor that sticks to them.',
          '<b>Dry and weigh.</b> Filter, wash with alcohol, dry between the folds of a filter paper and record the yield.',
        ],
      },
      { t: 'fig', id: 'c12-12-02-d2' },
      { t: 'p', html: '<b>Safety.</b> Concentrate the ferrous ammonium sulphate solution over a flame with care: stir, and do not heat a closed vessel.' },

      { t: 'part', title: 'Mohr’s salt and potash alum: observations and calculation' },
      {
        t: 'table',
        title: 'What to record and what to expect',
        head: ['Item', 'Mohr’s salt', 'Potash alum'],
        rows: [
          ['Crystals separating on cooling', 'light green', 'white'],
          ['Formula of the double salt', 'FeSO<sub>4</sub>·(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>·6H<sub>2</sub>O', 'KAl(SO<sub>4</sub>)<sub>2</sub>·12H<sub>2</sub>O'],
          ['Water of crystallisation per formula unit', '6', '12'],
          ['Molar mass (g mol<sup>−1</sup>)', '392', '474'],
          ['Acid added', 'about 0.5 mL dilute H<sub>2</sub>SO<sub>4</sub>', 'about 0.4 mL dilute H<sub>2</sub>SO<sub>4</sub>'],
        ],
        note: 'The manual gives masses, not formulae, for the starting salts. For Mohr’s salt the masses 3.5 g and 1.7 g are equimolar only if the ferrous sulphate is the heptahydrate, FeSO<sub>4</sub>·7H<sub>2</sub>O (278.0 g mol<sup>−1</sup>), so that is what the working below uses.',
      },
      {
        t: 'ex',
        tag: 'Yield calculation',
        q: 'In the Mohr’s salt preparation, 3.50 g of FeSO<sub>4</sub>·7H<sub>2</sub>O and 1.70 g of (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> are used and 3.90 g of dry light green crystals are obtained. Find the theoretical yield and the percentage yield. (Molar masses in g mol<sup>−1</sup>: FeSO<sub>4</sub>·7H<sub>2</sub>O 278.0, (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> 132.1, Mohr’s salt 392.1.)',
        steps: [
          '<b>Moles of each salt.</b> FeSO<sub>4</sub>·7H<sub>2</sub>O: 3.50/278.0 = 0.01259 mol. (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>: 1.70/132.1 = 0.01287 mol.',
          '<b>Limiting reactant.</b> The equation uses the two salts in 1:1 ratio, so the smaller amount decides the product: FeSO<sub>4</sub>·7H<sub>2</sub>O, 0.01259 mol. The ammonium sulphate is in about 2 % excess.',
          '<b>Theoretical yield.</b> 1 mol of Mohr’s salt forms per mole of Fe: 0.01259 × 392.1 = 4.937 g.',
          '<b>Second route.</b> Every Fe atom of the heptahydrate ends up in Mohr’s salt, so the masses are in the ratio of the formula masses: 3.50 × (392.1/278.0) = 3.50 × 1.4104 = 4.937 g. Both routes agree.',
          '<b>Percentage yield.</b> (3.90/4.937) × 100 = 79.0 %.',
          '<b>Where the rest went.</b> Some salt stays dissolved in the mother liquor, and some is lost in washing and transfer; none of this loss can be removed by better arithmetic.',
        ],
        ans: 'Theoretical yield 4.94 g; percentage yield 79 %',
      },
      {
        t: 'p',
        html: '<b>Potash alum.</b> The manual gives only masses. If the aluminium sulphate is Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>·18H<sub>2</sub>O (666 g mol<sup>−1</sup>), then 6.6 g is 0.0099 mol, and the 2.4 g of K<sub>2</sub>SO<sub>4</sub> (174.3 g mol<sup>−1</sup>) is 0.0138 mol. The aluminium sulphate would then be limiting. Each mole of it gives two moles of alum, so the theoretical yield would be 2 × 0.0099 × 474.4 = 9.4 g of KAl(SO<sub>4</sub>)<sub>2</sub>·12H<sub>2</sub>O. The same steps then give the percentage yield, as in the practice questions.',
      },

      { t: 'part', title: 'Mohr’s salt and potash alum: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> The yield of Mohr’s salt (or potash alum) is … g, which is … % of the theoretical yield. Light green crystals are Mohr’s salt; white crystals are alum.<br><br><b>Precautions.</b> Cool the solution slowly to get good crystals and avoid rapid cooling. Do not disturb the solution while it cools. Avoid prolonged heating while making ferrous ammonium sulphate, since it may oxidise Fe<sup>2+</sup> to Fe<sup>3+</sup> and change the composition of the crystals. Use dilute, not concentrated, sulphuric acid: concentrated sulphuric acid is an oxidising agent, while the dilute acid only has to suppress hydrolysis.<br><br><b>Sources of error.</b> Crystals that are not dry give a yield that is too high. Crystals left in the mother liquor, or lost in washing, give a yield that is too low. A brownish yellow tinge on Mohr’s salt shows that some Fe<sup>2+</sup> has oxidised.',
      },

      { t: 'part', title: 'Mohr’s salt and potash alum: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b>The two salts are taken in equimolar proportion,</b> not equal mass. The 3.5 g and 1.7 g of the Mohr’s salt preparation are equimolar because the molar masses are 278.0 and 132.1.',
          '<b>The acid is dilute sulphuric acid,</b> and its job is to suppress the hydrolysis of Fe<sup>2+</sup> and Al<sup>3+</sup>. It is not there to make the crystals or to supply sulphate.',
          '<b>Alum is KAl(SO<sub>4</sub>)<sub>2</sub>·12H<sub>2</sub>O,</b> equal to K<sub>2</sub>SO<sub>4</sub>·Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>·24H<sub>2</sub>O: the 24 belongs to the doubled formula, the 12 to the single one.',
          '<b>A double salt gives the tests of all its ions,</b> a complex does not. This is the usual way to distinguish them.',
          '<b>Mohr’s salt is 392 g mol<sup>−1</sup>.</b> This value is used in the titration of Topic 03, where it is oxidised by permanganate.',
          '<b>A percentage yield above 100 % is not a result.</b> It means the crystals were still wet.',
        ],
      },

      // ───── Experiment: acetanilide
      { t: 'part', title: 'Acetanilide: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To prepare acetanilide from aniline.<br><br>Acetylation replaces one hydrogen atom of the –NH<sub>2</sub> group of aniline by the CH<sub>3</sub>CO– group. In the laboratory it is usually done with acetic anhydride in the presence of glacial acetic acid. Acetyl chloride can be used instead if acetic anhydride is not available, but then dry pyridine is used with it, which takes up the hydrogen chloride that forms. The product is an amide, N-phenylacetamide; it is also the starting material of the next experiment.',
      },
      {
        t: 'formula',
        kicker: 'Acetylation of aniline',
        main: 'With acetic anhydride:<br>C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> + (CH<sub>3</sub>CO)<sub>2</sub>O → C<sub>6</sub>H<sub>5</sub>NHCOCH<sub>3</sub> + CH<sub>3</sub>COOH<br>With acetyl chloride:<br>C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> + CH<sub>3</sub>COCl → C<sub>6</sub>H<sub>5</sub>NHCOCH<sub>3</sub> + HCl',
        legend: ['aniline = C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>, 93.1 g mol<sup>−1</sup>', 'Ac<sub>2</sub>O = acetic anhydride, 102.1 g mol<sup>−1</sup>', 'acetanilide = C<sub>6</sub>H<sub>5</sub>NHCOCH<sub>3</sub>, 135.2 g mol<sup>−1</sup>'],
        note: 'One mole of acetanilide forms per mole of aniline or of acetylating agent.',
      },

      { t: 'part', title: 'Acetanilide: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> A 100 mL round-bottom flask with an air condenser, pumice stones, a sand bath and burner, a beaker, a glass rod, a funnel with filter paper, ice, and a melting-point assembly.',
      },
      {
        t: 'proc',
        title: 'Acetanilide from aniline and acetic anhydride',
        steps: [
          '<b>Mix.</b> Take 5 mL of aniline in the 100 mL round-bottom flask and add an acetylating mixture of 5 mL of acetic anhydride and 5 mL of glacial acetic acid. (Alternatively use 5 mL of acetyl chloride and 5 mL of dry pyridine.)',
          '<b>Reflux.</b> Add a few pumice stones, fit the air condenser and reflux gently for 10–15 minutes on a sand bath.',
          '<b>Precipitate.</b> Cool the mixture and pour it slowly, with stirring, into 150–200 mL of ice-cold water.',
          '<b>Wash.</b> Filter the solid and wash it with cold water, two or three times, until the filtrate is neutral to litmus.',
          '<b>Recrystallise.</b> Recrystallise a small amount from hot water containing a few drops of methanol or ethanol. White shining needle-shaped crystals form.',
          '<b>Record.</b> Dry the crystals, weigh them and note the melting point.',
        ],
      },
      {
        t: 'p',
        html: '<b>Alternative method</b> (if acetic anhydride or pyridine is not available). Mix 1 mL of aniline and 1 mL of glacial acetic acid in a dry boiling tube, then add 1 mL of acetyl chloride in lots of 0.3 mL; the mixture warms up, and the tube is cooled under the tap if it becomes too hot to hold. Heat for five minutes in a boiling water bath, cool, and stir in about 10 mL of ice-cold water. Filter the white powder, wash it until the filtrate is neutral to litmus and crystallise it from hot water.',
      },
      { t: 'fig', id: 'c12-12-02-d3' },
      { t: 'p', html: '<b>Safety.</b> Acetyl chloride fumes in air and pyridine must be dispensed in an efficient fume cupboard.' },

      { t: 'part', title: 'Acetanilide: observations and calculation' },
      {
        t: 'table',
        title: 'Observations for acetanilide',
        head: ['Stage', 'What is seen'],
        rows: [
          ['Reaction mixture poured into ice-cold water', 'solid separates'],
          ['Crude product after washing and drying', 'white powder'],
          ['After recrystallisation from hot water', 'white shining needle-shaped crystals'],
          ['Melting point', 'sharp, close to the value for pure acetanilide'],
        ],
      },
      {
        t: 'ex',
        tag: 'Yield calculation',
        q: 'A student reacts 5.0 mL of aniline (density 1.02 g mL<sup>−1</sup>) with 5.0 mL of acetic anhydride (density 1.08 g mL<sup>−1</sup>), the glacial acetic acid acting only as a medium. The dry crude product weighs 6.20 g; after recrystallisation 5.45 g of pure acetanilide is left. Find the theoretical yield, the percentage yield of crude and of pure acetanilide, and the percentage recovered on recrystallisation. (Molar masses in g mol<sup>−1</sup>: aniline 93.13, acetic anhydride 102.09, acetanilide 135.17.)',
        steps: [
          '<b>Moles.</b> Aniline: 5.0 × 1.02 = 5.10 g, and 5.10/93.13 = 0.05476 mol. Acetic anhydride: 5.0 × 1.08 = 5.40 g, and 5.40/102.09 = 0.05289 mol.',
          '<b>Limiting reactant.</b> The ratio is 1:1, so acetic anhydride (0.05289 mol) is limiting and 0.00187 mol of aniline is left over.',
          '<b>Theoretical yield.</b> 0.05289 × 135.17 = 7.15 g.',
          '<b>Second route.</b> By mass ratio, 5.40 × (135.17/102.09) = 5.40 × 1.3240 = 7.15 g.',
          '<b>Percentage yields.</b> Crude: (6.20/7.15) × 100 = 86.7 %. Pure: (5.45/7.15) × 100 = 76.2 %.',
          '<b>Recovery on recrystallisation.</b> (5.45/6.20) × 100 = 87.9 %. The overall 76.2 % is the product of the two steps: 0.867 × 0.879 = 0.762.',
        ],
        ans: 'Theoretical 7.15 g; crude 86.7 %, pure 76.2 %; recovery 87.9 %',
      },

      { t: 'part', title: 'Acetanilide: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> (a) The yield of acetanilide is … g. (b) Its melting point is … °C.<br><br><b>Precautions.</b> Handle acetic anhydride and acetyl chloride with care: they irritate the eyes. Store acetyl chloride under dry conditions. Distil pyridine before use, because it absorbs moisture and the reaction does not go in moist conditions. Wash the solid two or three times with cold water until the filtrate is neutral to litmus. Take the melting point of a perfectly dry, recrystallised sample. For the alternative method, distil aniline first if it is strongly coloured (the yield is lowered with impure aniline), use perfectly dry apparatus, and do not inhale the vapours given off when acetyl chloride is added.<br><br><b>Sources of error.</b> Moisture destroys the acetylating agent and lowers the yield. Washing that stops early leaves acetic acid in the solid. Recrystallisation always loses some product in the mother liquor, so the yield after it is lower than the yield before.',
      },

      { t: 'part', title: 'Acetanilide: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b>Acetic anhydride is preferred to acetyl chloride</b> because acetyl chloride fumes in air, must be kept dry and needs pyridine, while acetic anhydride does not.',
          '<b>The mixture is poured into ice-cold water</b> because acetanilide does not dissolve in cold water and separates as a solid, while the acetic acid formed stays in the water.',
          '<b>Wash until neutral to litmus.</b> Acid left in the solid spoils the melting point and the next step.',
          '<b>The yield is worked out from the limiting reactant,</b> which here is the acetylating agent, not the aniline.',
          '<b>The melting point is taken only on the dry, recrystallised sample.</b> A wet or impure sample melts low and over a wide range.',
          '<b>Acetanilide is the amide C<sub>6</sub>H<sub>5</sub>NHCOCH<sub>3</sub>:</b> the N has one H left, so it is a secondary amide, not a primary amine.',
        ],
      },

      // ───── Experiment: p-nitroacetanilide
      { t: 'part', title: 'p-Nitroacetanilide: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To prepare p-nitroacetanilide by nitrating acetanilide.<br><br>A mixture of concentrated nitric acid and concentrated sulphuric acid is the nitrating reagent. The two acids release the nitronium ion NO<sub>2</sub><sup>+</sup>, which attacks the benzene ring as an electrophile. The ring carries the anilide group –NHCOCH<sub>3</sub>, and the nitronium ion goes mainly to the para position, so p-nitroacetanilide is the major product: an aromatic electrophilic substitution. A little ortho isomer forms as well.<br><br>Aniline is acetylated first because free aniline would be attacked by nitric acid, which is an oxidising agent, and in strong acid its –NH<sub>2</sub> group is protonated.',
      },
      {
        t: 'formula',
        kicker: 'Nitration of acetanilide',
        main: 'The nitrating mixture:<br>HNO<sub>3</sub> + 2H<sub>2</sub>SO<sub>4</sub> → NO<sub>2</sub><sup>+</sup> + H<sub>3</sub>O<sup>+</sup> + 2HSO<sub>4</sub><sup>−</sup><br>Overall:<br>C<sub>6</sub>H<sub>5</sub>NHCOCH<sub>3</sub> + HNO<sub>3</sub> → O<sub>2</sub>N–C<sub>6</sub>H<sub>4</sub>–NHCOCH<sub>3</sub> + H<sub>2</sub>O',
        legend: ['NO<sub>2</sub><sup>+</sup> = nitronium ion, the electrophile', 'p-product = 4-nitro isomer, 180.2 g mol<sup>−1</sup>', 'acetanilide = 135.2 g mol<sup>−1</sup>'],
        note: 'Concentrated H<sub>2</sub>SO<sub>4</sub> is the medium and makes NO<sub>2</sub><sup>+</sup>; it is not used up in the overall change.',
      },
      { t: 'fig', id: 'c12-12-02-d4' },

      { t: 'part', title: 'p-Nitroacetanilide: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> A 100 mL beaker, a glass rod, a thermometer, an ice bath, a funnel with filter paper, and a melting-point assembly. Reagents: acetanilide 2 g, glacial acetic acid, concentrated sulphuric acid, concentrated nitric acid, ice and ethanol (or methanol).',
      },
      {
        t: 'proc',
        title: 'Nitration of acetanilide',
        steps: [
          '<b>Dissolve.</b> Dissolve 2 g of acetanilide in 2 mL of glacial acetic acid in a 100 mL beaker.',
          '<b>Add the acid.</b> Add 4 mL of concentrated sulphuric acid gradually, with stirring. The mixture becomes hot and clear. Cool it in an ice bath at 0–5 °C.',
          '<b>Nitrate.</b> Add a cold mixture of 1.0 mL of concentrated nitric acid and 1.0 mL of concentrated sulphuric acid drop by drop, with constant stirring, so that the temperature does not rise above 10 °C.',
          '<b>Stand.</b> Remove the beaker from the ice bath and let it come to room temperature. Leave it for about 30 minutes, stirring from time to time.',
          '<b>Precipitate.</b> Pour the mixture, stirring, on 100 g of crushed ice. Stir well and filter the solid.',
          '<b>Wash and dry.</b> Wash the compound with cold water and dry it.',
          '<b>Recrystallise.</b> Recrystallise a small amount of the pale yellow solid from alcohol. Colourless crystals of p-nitroacetanilide form; the yellow ortho isomer, present in small amount, stays dissolved in the mother liquor.',
          '<b>Record.</b> Note the yield and the melting point of the pure compound.',
        ],
      },
      { t: 'p', html: '<b>Safety.</b> The acids are concentrated and burn the skin: add the nitrating mixture slowly and carefully.' },

      { t: 'part', title: 'p-Nitroacetanilide: observations and calculation' },
      {
        t: 'table',
        title: 'Observations for p-nitroacetanilide',
        head: ['Stage', 'What is seen'],
        rows: [
          ['Acetanilide in acetic acid and sulphuric acid', 'hot, clear solution; cooled to 0–5 °C in ice'],
          ['Crude solid after pouring on ice', 'pale yellow'],
          ['After recrystallisation from alcohol', 'colourless crystals of p-nitroacetanilide'],
          ['Mother liquor', 'yellow, holding the ortho isomer'],
        ],
      },
      {
        t: 'ex',
        tag: 'Yield calculation',
        q: 'From 2.00 g of acetanilide and an excess of nitrating mixture, a student obtains 2.35 g of dry crude product and, after recrystallisation, 1.60 g of colourless crystals. Find the theoretical yield and the percentage yield of pure p-nitroacetanilide. (Molar masses in g mol<sup>−1</sup>: acetanilide 135.17, p-nitroacetanilide 180.16.)',
        steps: [
          '<b>Moles.</b> 2.00/135.17 = 0.014797 mol of acetanilide. The nitrating mixture is in excess, so acetanilide is limiting.',
          '<b>Theoretical yield.</b> One mole of p-nitroacetanilide per mole of acetanilide: 0.014797 × 180.16 = 2.666 g.',
          '<b>Second route.</b> 2.00 × (180.16/135.17) = 2.00 × 1.3328 = 2.666 g.',
          '<b>Yields.</b> Pure product: (1.60/2.666) × 100 = 60.0 %. The crude product would seem to be (2.35/2.666) × 100 = 88.2 %, but that figure includes the ortho isomer, so it is not the yield of the p-compound.',
        ],
        ans: 'Theoretical yield 2.67 g; pure p-nitroacetanilide 60 %',
      },

      { t: 'part', title: 'p-Nitroacetanilide: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> (a) The yield of p-nitroacetanilide is … g. (b) Its melting point is … °C.<br><br><b>Precautions.</b> Do not let the temperature of the mixture exceed 10 °C while the nitrating mixture is added. Add the mixture of concentrated nitric and sulphuric acids to the solution of acetanilide slowly and carefully. Wash the solid with cold water, then recrystallise it, because the crude solid is a mixture of isomers.<br><br><b>Sources of error.</b> If the temperature rises, more by-products form and the yield of the p-compound drops. Some p-nitroacetanilide always remains in the alcohol mother liquor. Product that is not completely dry gives a yield that is too high and a melting point that is too low.',
      },

      { t: 'part', title: 'p-Nitroacetanilide: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b>The electrophile is NO<sub>2</sub><sup>+</sup>,</b> not HNO<sub>3</sub> or NO<sub>3</sub><sup>−</sup>. The sulphuric acid is what generates it.',
          '<b>The product is mainly para,</b> because the –NHCOCH<sub>3</sub> group directs to the ortho and para positions and the para position is favoured. The ortho isomer is the minor product.',
          '<b>The ortho isomer is removed by recrystallisation from alcohol:</b> it is yellow and stays in the mother liquor, while p-nitroacetanilide crystallises colourless.',
          '<b>Two temperatures to remember:</b> 0–5 °C for the ice bath and never above 10 °C while the nitrating mixture is added.',
          '<b>The mixture is poured on crushed ice</b> to throw the product out of the strongly acidic solution as a solid.',
          '<b>Acetylate first, nitrate second.</b> Nitration comes after acetylation, not before, because free aniline would be oxidised by the nitric acid.',
        ],
      },

      // ───── Experiment: aniline yellow
      { t: 'part', title: 'Aniline yellow: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To prepare aniline yellow, p-aminoazobenzene, C<sub>6</sub>H<sub>5</sub>–N=N–C<sub>6</sub>H<sub>4</sub>–NH<sub>2</sub>.<br><br>An azo dye is made in two stages. In <b>diazotisation</b> a primary aromatic amine reacts at 0–5 °C with nitrous acid, which is generated in the flask from sodium nitrite and hydrochloric acid. The product is a diazonium salt. In <b>coupling</b> the diazonium ion attacks another aromatic compound. With an alkaline solution of β-naphthol it gives an orange-red dye. With an aromatic amine the coupling is carried out in a weakly acidic medium, and with aniline it gives aniline yellow.<br><br>The manual gives two routes. In the first, diazoaminobenzene, C<sub>6</sub>H<sub>5</sub>–N=N–NH–C<sub>6</sub>H<sub>5</sub>, rearranges to p-aminoazobenzene when warmed with a small quantity of aniline hydrochloride, with aniline as the solvent; this works only in weakly acidic conditions. In the second, the diazonium salt is coupled directly with aniline hydrochloride.',
      },
      {
        t: 'formula',
        kicker: 'Aniline yellow by diazotisation and coupling',
        main: 'Diazotisation (0–5 °C):<br>C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> + NaNO<sub>2</sub> + 2HCl → C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> + NaCl + 2H<sub>2</sub>O<br>Coupling (weakly acidic):<br>C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup> + C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> → C<sub>6</sub>H<sub>5</sub>–N=N–C<sub>6</sub>H<sub>4</sub>–NH<sub>2</sub> + H<sup>+</sup>',
        legend: ['NaNO<sub>2</sub> = sodium nitrite, makes HNO<sub>2</sub> with HCl', 'C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup> = benzenediazonium ion', 'aniline yellow = p-aminoazobenzene, 197.2 g mol<sup>−1</sup>'],
        note: 'In the coupling the diazonium ion attacks the para position of aniline.',
      },
      {
        t: 'formula',
        kicker: 'Rearrangement of diazoaminobenzene',
        main: 'C<sub>6</sub>H<sub>5</sub>–N=N–NH–C<sub>6</sub>H<sub>5</sub> → C<sub>6</sub>H<sub>5</sub>–N=N–C<sub>6</sub>H<sub>4</sub>–NH<sub>2</sub>',
        legend: ['Reactant = diazoaminobenzene, C<sub>12</sub>H<sub>11</sub>N<sub>3</sub>, 197.2 g mol<sup>−1</sup>', 'Product = aniline yellow, C<sub>12</sub>H<sub>11</sub>N<sub>3</sub>, 197.2 g mol<sup>−1</sup>'],
        note: 'The two compounds are isomers. A little aniline hydrochloride is the catalyst and aniline is the solvent.',
      },
      { t: 'fig', id: 'c12-12-02-d5' },

      { t: 'part', title: 'Aniline yellow: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> A 100 mL conical flask, a thermometer, a water bath, a funnel with filter paper, and a melting-point assembly. Reagents for the first route: diazoaminobenzene 3 g, aniline 7 mL, aniline hydrochloride 1.5 g, glacial acetic acid 9 mL and carbon tetrachloride.',
      },
      {
        t: 'proc',
        title: 'Aniline yellow from diazoaminobenzene',
        steps: [
          '<b>Dissolve.</b> Dissolve 3 g of finely powdered diazoaminobenzene in 7 mL of aniline in a 100 mL conical flask.',
          '<b>Add the catalyst.</b> Add 1.5 g of finely powdered aniline hydrochloride.',
          '<b>Warm.</b> Warm the mixture on a water bath at about 40–45 °C for about an hour, shaking from time to time.',
          '<b>Stand.</b> Remove the flask from the bath and leave it at room temperature for about 30 minutes.',
          '<b>Remove the excess aniline.</b> Add 9 mL of glacial acetic acid diluted with an equal volume of water and shake thoroughly, which converts the excess aniline into aniline acetate, soluble in water. Leave for 15 minutes, stirring from time to time.',
          '<b>Filter.</b> Filter the p-aminoazobenzene, wash it with a little cold water and dry it between the folds of a filter paper.',
          '<b>Recrystallise.</b> Recrystallise a small portion from carbon tetrachloride, then report the yield and melting point.',
        ],
      },
      {
        t: 'proc',
        title: 'Aniline yellow by direct coupling',
        steps: [
          '<b>Diazonium chloride.</b> Prepare benzenediazonium chloride from 2 mL of aniline: dissolve it in 6.5 mL of concentrated hydrochloric acid diluted with 6.5 mL of water, cool to 0–5 °C in an ice bath, and add 1.6 g of sodium nitrite in 8 mL of water.',
          '<b>Aniline hydrochloride.</b> Prepare a solution of 4 mL of aniline in 4 mL of 1.0 M hydrochloric acid.',
          '<b>Couple.</b> Add the cold aniline hydrochloride solution slowly to the cold diazonium chloride solution.',
          '<b>Collect.</b> Filter the yellow compound and dry it between the folds of a filter paper. Recrystallise a small amount from carbon tetrachloride, then report the yield and melting point.',
        ],
      },
      { t: 'p', html: '<b>Safety.</b> Carbon tetrachloride is a hazardous solvent: use it only in a fume cupboard.' },

      { t: 'part', title: 'Aniline yellow: observations and calculation' },
      {
        t: 'table',
        title: 'Observations for aniline yellow',
        head: ['Item', 'Observation or value'],
        rows: [
          ['Product', 'yellow solid, p-aminoazobenzene'],
          ['Temperature of the rearrangement', 'about 40–45 °C, for about an hour'],
          ['Temperature of diazotisation', '0–5 °C'],
          ['Solvent for recrystallisation', 'carbon tetrachloride'],
          ['Medium for coupling with an amine', 'weakly acidic'],
        ],
      },
      {
        t: 'ex',
        tag: 'Yield calculation',
        q: 'In the diazoaminobenzene route, 3.00 g of diazoaminobenzene gives 2.34 g of dry recrystallised p-aminoazobenzene. Both are C<sub>12</sub>H<sub>11</sub>N<sub>3</sub>. Find the percentage yield.',
        steps: [
          '<b>Molar mass.</b> C<sub>12</sub>H<sub>11</sub>N<sub>3</sub> = 12 × 12.011 + 11 × 1.008 + 3 × 14.007 = 144.13 + 11.09 + 42.02 = 197.24 g mol<sup>−1</sup>.',
          '<b>Moles of starting material.</b> 3.00/197.24 = 0.01521 mol.',
          '<b>Theoretical yield.</b> The change is an isomerisation, one mole of product per mole, so the theoretical mass equals the mass of diazoaminobenzene taken, 3.00 g. Check by moles: 0.01521 × 197.24 = 3.00 g.',
          '<b>Percentage yield.</b> (2.34/3.00) × 100 = 78.0 %.',
          '<b>The aniline</b> is the solvent and the aniline hydrochloride the catalyst, so neither is limiting.',
        ],
        ans: 'Percentage yield 78 %',
      },

      { t: 'part', title: 'Aniline yellow: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> The yield of p-aminoazobenzene is … g and its melting point is … °C.<br><br><b>Precautions.</b> Keep the reaction mixture at about 40–50 °C. Wash the crude product repeatedly with small volumes of water. Take the melting point only of the perfectly dry sample. In the diazotisation step keep the temperature within 0–5 °C. For a dye made with β-naphthol, always add the diazonium chloride solution to the alkaline β-naphthol, never the other way round.<br><br><b>Sources of error.</b> Azo syntheses are almost quantitative, so use amounts that agree closely with the equations: an excess of some reactants may decompose unused material and tar may appear. Unwashed aniline acetate or aniline hydrochloride in the product lowers the melting point.',
      },

      { t: 'part', title: 'Aniline yellow: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b>Aniline yellow is p-aminoazobenzene,</b> C<sub>6</sub>H<sub>5</sub>–N=N–C<sub>6</sub>H<sub>4</sub>–NH<sub>2</sub>. The orange-red dye from β-naphthol is phenyl-azo-β-naphthol, a different compound. (Orange-red is the manual’s word in its preparation of this dye; its amino-group test in Topic 01 calls the same dye scarlet red.)',
          '<b>Diazotisation is at 0–5 °C,</b> with NaNO<sub>2</sub> and HCl making nitrous acid in the flask.',
          '<b>Medium decides the coupling partner.</b> An amine couples in a weakly acidic medium; the β-naphthol solution is alkaline.',
          '<b>The rearrangement is an isomerisation,</b> so the theoretical yield, in grams, equals the mass of diazoaminobenzene taken.',
          '<b>The acetic acid step removes the excess aniline</b> as water-soluble aniline acetate. It is not a recrystallisation.',
          '<b>The solvent for recrystallisation is carbon tetrachloride,</b> not water.',
        ],
      },

      // ───── Experiment: iodoform
      { t: 'part', title: 'Iodoform: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To prepare iodoform, CHI<sub>3</sub>, from ethanol or acetone by the iodoform reaction.<br><br>The manual describes the iodoform reaction as a test, and the preparation uses the same reagents. Iodine in sodium hydroxide, or potassium iodide with sodium hypochlorite, gives hypoiodite, which oxidises a CH<sub>3</sub>–CH(OH)–R group to CH<sub>3</sub>COR and then replaces the hydrogens of the CH<sub>3</sub> group, the α-hydrogens, by iodine. The C–C bond is then cleaved by alkali and iodoform separates as a yellow solid. So the reaction needs a CH<sub>3</sub>CO– group, or a group that hypoiodite turns into one: ethanol and secondary alcohols with CH<sub>3</sub>–CH(OH)–R qualify.',
      },
      {
        t: 'formula',
        kicker: 'The iodoform reaction',
        main: 'Hypoiodite:<br>I<sub>2</sub> + 2NaOH → NaI + NaOI + H<sub>2</sub>O<br>From acetone:<br>CH<sub>3</sub>–CO–CH<sub>3</sub> + 3I<sub>2</sub> + 4NaOH → CHI<sub>3</sub> + CH<sub>3</sub>COONa + 3NaI + 3H<sub>2</sub>O<br>From ethanol:<br>CH<sub>3</sub>CH<sub>2</sub>OH + 4I<sub>2</sub> + 6NaOH → CHI<sub>3</sub> + HCOONa + 5NaI + 5H<sub>2</sub>O',
        legend: ['NaOI = sodium hypoiodite, the oxidising and iodinating agent', 'CHI<sub>3</sub> = iodoform, 393.7 g mol<sup>−1</sup>'],
        note: 'One mole of CHI<sub>3</sub> forms per mole of acetone or ethanol.',
      },
      { t: 'fig', id: 'c12-12-02-d6' },

      { t: 'part', title: 'Iodoform: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> Test tubes or a small conical flask, a water bath with a thermometer, a funnel with filter paper. Reagents: the compound (ethanol or acetone), 10 % aqueous potassium iodide, freshly prepared sodium hypochlorite or the potassium iodide–iodine reagent (20 g of potassium iodide and 10 g of iodine in 100 mL of water), and sodium hydroxide solution.',
      },
      {
        t: 'proc',
        title: 'Iodoform, first method (hypochlorite)',
        steps: [
          '<b>Mix.</b> Take 0.2 mL of the compound in a test tube and add 10 mL of 10 % aqueous KI and 10 mL of freshly prepared NaOCl solution.',
          '<b>Warm.</b> Warm gently. Yellow crystals of iodoform separate.',
        ],
      },
      {
        t: 'proc',
        title: 'Iodoform, second method (iodine in alkali)',
        steps: [
          '<b>Dissolve.</b> Dissolve 0.1 g (or 4 to 5 drops) of the compound in 2 mL of water. If it does not dissolve, add dioxane drop by drop until the solution is clear.',
          '<b>Add alkali and iodine.</b> Add 2 mL of 5 % sodium hydroxide, then the potassium iodide–iodine reagent dropwise with continuous shaking, until a definite dark colour of iodine persists. Leave for 2–3 minutes at room temperature.',
          '<b>Warm if needed.</b> If no iodoform separates, warm in a water bath at 60 °C and add more reagent until the iodine colour persists even after two minutes of heating.',
          '<b>Remove excess iodine.</b> Add a few drops of sodium hydroxide, with shaking, until the colour of excess iodine goes.',
          '<b>Precipitate.</b> Dilute with an equal volume of water and keep at room temperature for 10–15 minutes. A yellow precipitate of iodoform separates.',
        ],
      },
      {
        t: 'p',
        html: '<b>Purification.</b> The manual gives no purification step for iodoform. It is usual to filter the solid, wash it with water and recrystallise it from hot ethanol; this is common practice, not a step of the manual.',
      },

      { t: 'part', title: 'Iodoform: observations and calculation' },
      {
        t: 'table',
        title: 'Iodoform reaction: who reacts',
        head: ['Compound', 'Contains', 'Iodoform?'],
        rows: [
          ['ethanol', 'CH<sub>3</sub>–CH(OH)–', 'yes'],
          ['propan-2-ol', 'CH<sub>3</sub>–CH(OH)–R', 'yes'],
          ['acetone', 'CH<sub>3</sub>CO–', 'yes'],
          ['propan-1-ol', 'no CH<sub>3</sub>–CH(OH)– and no CH<sub>3</sub>CO–', 'no'],
          ['methanol', 'only one carbon: no CH<sub>3</sub>–CH(OH)– unit', 'no'],
        ],
        note: 'The product in every positive case is the yellow solid iodoform.',
      },
      {
        t: 'ex',
        tag: 'Yield calculation',
        q: 'A student starts with 0.0200 mol of ethanol, with iodine and sodium hydroxide in excess, and collects 5.90 g of dry iodoform. Find the percentage yield. (Molar mass of CHI<sub>3</sub>: 393.7 g mol<sup>−1</sup>.)',
        steps: [
          '<b>Ratio.</b> One mole of CHI<sub>3</sub> forms per mole of ethanol, since only one of the two carbon atoms ends up in iodoform; the other ends up in sodium formate.',
          '<b>Theoretical yield.</b> 0.0200 × 393.7 = 7.874 g.',
          '<b>Second route.</b> The iodine in 0.0200 mol of CHI<sub>3</sub> is 3 × 0.0200 × 126.9 = 7.614 g; adding carbon (0.240 g) and hydrogen (0.020 g) gives 7.874 g.',
          '<b>Percentage yield.</b> (5.90/7.874) × 100 = 74.9 %.',
        ],
        ans: 'Theoretical yield 7.87 g; percentage yield 74.9 %',
      },

      { t: 'part', title: 'Iodoform: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> The yield of iodoform is … g, a yellow crystalline solid.<br><br><b>Precautions.</b> Use freshly prepared sodium hypochlorite. Add the iodine reagent until the iodine colour persists, so that enough hypoiodite is present; then remove the excess with a few drops of sodium hydroxide, or the product is stained with iodine. Warm gently, in the water bath at 60 °C, and not strongly.<br><br><b>Sources of error.</b> Too little reagent leaves some compound unreacted. Stopping before the excess iodine is removed contaminates the solid. Unwashed alkali or iodide salts left on the crystals raise the apparent yield.',
      },

      { t: 'part', title: 'Iodoform: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b>The group needed is CH<sub>3</sub>CO– or CH<sub>3</sub>–CH(OH)–.</b> Ethanol is the only primary alcohol that gives the test, and methanol does not.',
          '<b>Iodoform is a yellow solid, CHI<sub>3</sub>,</b> not a gas or a colourless liquid.',
          '<b>The reagent is hypoiodite.</b> It is made from I<sub>2</sub> and NaOH, or from KI and NaOCl.',
          '<b>The second product differs with the compound:</b> sodium acetate from acetone, sodium formate from ethanol.',
          '<b>Only one carbon of the compound reaches iodoform.</b> That is why one mole of CHI<sub>3</sub> forms per mole of ethanol or acetone.',
          '<b>Iodoform needs several moles of iodine per mole of compound</b> (three for acetone, four for ethanol), so the reagent is added until the iodine colour persists, which shows it is in excess.',
        ],
      },

      // ───── Practice and MCQ
      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[Potash alum] A student dissolves 0.0100 mol of Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> and 0.0150 mol of K<sub>2</sub>SO<sub>4</sub> and collects 8.20 g of dry KAl(SO<sub>4</sub>)<sub>2</sub>·12H<sub>2</sub>O (474.4 g mol<sup>−1</sup>). Find the limiting reactant, the theoretical yield and the percentage yield.',
            a: 'K<sub>2</sub>SO<sub>4</sub> + Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 24H<sub>2</sub>O → 2KAl(SO<sub>4</sub>)<sub>2</sub>·12H<sub>2</sub>O uses the two salts 1:1, so Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> (0.0100 mol) is limiting and K<sub>2</sub>SO<sub>4</sub> is in excess. It gives 2 × 0.0100 = 0.0200 mol of alum, 0.0200 × 474.4 = 9.49 g. Yield = (8.20/9.49) × 100 = 86.4 %.',
          },
          {
            q: '[Iodoform] Acetone (0.0100 mol) is treated with excess iodine and sodium hydroxide, and 3.15 g of iodoform is collected. Write the equation and find the percentage yield.',
            a: 'CH<sub>3</sub>COCH<sub>3</sub> + 3I<sub>2</sub> + 4NaOH → CHI<sub>3</sub> + CH<sub>3</sub>COONa + 3NaI + 3H<sub>2</sub>O. One mole of CHI<sub>3</sub> forms per mole of acetone: 0.0100 × 393.7 = 3.937 g. Yield = (3.15/3.937) × 100 = 80.0 %.',
          },
          {
            q: '[Yield] A student reports 108 % yield of Mohr’s salt. Is that possible? What is the likely cause?',
            a: 'No. The actual mass cannot exceed the theoretical mass when the product is pure and dry. The crystals are most likely still wet with mother liquor or with the water–alcohol wash, so the mass includes solvent. Drying between folds of filter paper and weighing again gives the true yield.',
          },
          {
            q: '[Mohr’s salt] The Mohr’s salt crystals of a student have a brownish yellow tinge instead of a light green colour. What went wrong?',
            a: 'Some Fe<sup>2+</sup> was oxidised to Fe<sup>3+</sup>, most probably because the solution was heated for too long. This changes the composition of the crystals, so the preparation should be repeated with shorter heating and with the dilute acid present.',
          },
          {
            q: '[Iodoform] Which of the following give a positive iodoform test: ethanol, propan-1-ol, propan-2-ol, acetophenone (C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub>), methanol?',
            a: 'Ethanol (CH<sub>3</sub>–CH(OH)–), propan-2-ol (CH<sub>3</sub>–CH(OH)–CH<sub>3</sub>) and acetophenone (a CH<sub>3</sub>CO– group). Propan-1-ol has neither group, and methanol has only one carbon, so it has no CH<sub>3</sub>–CH(OH)– unit.',
          },
          {
            q: '[Acetanilide] 4.65 g of aniline reacts with 4.00 g of acetic anhydride. Find the limiting reactant, the theoretical yield of acetanilide and the percentage yield if 4.10 g is collected. (Molar masses: aniline 93.13, acetic anhydride 102.09, acetanilide 135.17 g mol<sup>−1</sup>.)',
            a: 'Aniline: 4.65/93.13 = 0.04993 mol. Acetic anhydride: 4.00/102.09 = 0.03918 mol. The ratio is 1:1, so acetic anhydride is limiting. Theoretical yield = 0.03918 × 135.17 = 5.30 g (check: 4.00 × 135.17/102.09 = 5.30 g). Yield = (4.10/5.30) × 100 = 77.4 %.',
          },
        ],
      },
      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A little dilute sulphuric acid is added when ferrous sulphate and aluminium sulphate are dissolved for the preparation of the double salts. Its purpose is',
        opts: [
          { label: 'to oxidise Fe<sup>2+</sup> to Fe<sup>3+</sup> so that the crystals are stable', nudge: 'Oxidising Fe<sup>2+</sup> is what the preparation tries to avoid; Mohr’s salt contains Fe<sup>2+</sup>, and prolonged heating that oxidises it is a listed source of error.' },
          { label: 'to supply the sulphate ions that the double salt needs', nudge: 'The two sulphates already supply every sulphate ion, and the volume of acid is only about 0.4 to 0.5 mL.' },
          { label: 'to suppress the hydrolysis of Fe<sup>2+</sup> and Al<sup>3+</sup>', nudge: null },
          { label: 'to lower the solubility of the double salt so that it crystallises faster', nudge: 'The acid does not control how soluble the double salt is; it acts on the hydrolysis equilibria of the metal ions.' },
        ],
        correct: 2,
        solution: 'Fe<sup>2+</sup> and Al<sup>3+</sup> hydrolyse in water to give hydroxides and H<sup>+</sup>. Added H<sup>+</sup> shifts these equilibria back, so the ions stay in solution and clean crystals form on cooling.',
      },
      {
        t: 'mcq',
        q: 'At the end of the acetylation of aniline, the reaction mixture is poured slowly into ice-cold water because',
        opts: [
          { label: 'acetanilide is insoluble in cold water and separates as a solid, while the acetic acid stays dissolved', nudge: null },
          { label: 'the water hydrolyses acetanilide back to aniline', nudge: 'Cold water does not hydrolyse the amide; if it did, the product would be lost and the experiment would make no sense.' },
          { label: 'the water completes the acetylation by supplying the reacting H<sub>2</sub>O', nudge: 'Acetylation by the anhydride is complete after reflux and does not need water; water is the medium for separating the product.' },
          { label: 'the cold water dissolves the acetanilide so that it can be recrystallised', nudge: 'Acetanilide does not dissolve in cold water, which is why it comes out; recrystallisation uses hot water.' },
        ],
        correct: 0,
        solution: 'Acetanilide does not dissolve in cold water and forms a solid, while acetic acid, the by-product, stays in the aqueous solution. The solid is then filtered and washed until the filtrate is neutral to litmus.',
      },
      {
        t: 'mcq',
        q: 'The attacking species in the nitration of acetanilide by a mixture of concentrated nitric acid and concentrated sulphuric acid is',
        opts: [
          { label: 'NO<sub>2</sub><sup>−</sup>', nudge: 'NO<sub>2</sub><sup>−</sup> is the nitrite ion; it is negative and would not attack an electron-rich ring as an electrophile.' },
          { label: 'NO<sub>2</sub><sup>+</sup>', nudge: null },
          { label: 'NO<sub>3</sub><sup>−</sup>', nudge: 'NO<sub>3</sub><sup>−</sup> is the nitrate ion, a negative ion; the electrophile is the positive nitronium ion.' },
          { label: 'NO<sup>+</sup>', nudge: 'NO<sup>+</sup> is the nitrosonium ion, a different species with one oxygen atom; the nitrating agent has two.' },
        ],
        correct: 1,
        solution: 'HNO<sub>3</sub> + 2H<sub>2</sub>SO<sub>4</sub> → NO<sub>2</sub><sup>+</sup> + H<sub>3</sub>O<sup>+</sup> + 2HSO<sub>4</sub><sup>−</sup>. The nitronium ion is the electrophile of this aromatic electrophilic substitution.',
      },
      {
        t: 'mcq',
        q: 'Which pair of compounds will both give the yellow precipitate of iodoform with iodine and sodium hydroxide?',
        opts: [
          { label: 'methanol and ethanol', nudge: 'Ethanol gives iodoform, but methanol has only one carbon and so no CH<sub>3</sub>–CH(OH)– unit; it does not.' },
          { label: 'propan-1-ol and butan-1-ol', nudge: 'Neither contains CH<sub>3</sub>–CH(OH)– or CH<sub>3</sub>CO–; both are primary alcohols other than ethanol.' },
          { label: 'benzaldehyde and benzyl alcohol', nudge: 'Neither has a CH<sub>3</sub>CO– or CH<sub>3</sub>–CH(OH)– group, so neither reacts.' },
          { label: 'ethanol and propan-2-ol', nudge: null },
        ],
        correct: 3,
        solution: 'Ethanol and propan-2-ol both contain the group CH<sub>3</sub>–CH(OH)–, which hypoiodite oxidises to CH<sub>3</sub>CO– before iodinating and cleaving it to CHI<sub>3</sub>.',
      },
      {
        t: 'mcq',
        q: 'A student nitrates 5.00 g of acetanilide (135.17 g mol<sup>−1</sup>) and obtains 4.00 g of pure p-nitroacetanilide (180.16 g mol<sup>−1</sup>). The percentage yield is',
        opts: [
          { label: '41.4 %', nudge: 'This comes from using the molar mass of aniline, 93.13, for the starting material instead of 135.17.' },
          { label: '60.0 %', nudge: null },
          { label: '80.0 %', nudge: 'This is 4.00/5.00, which compares the masses directly and ignores the change in molar mass.' },
          { label: '106.6 %', nudge: 'This inverts the ratio of molar masses; a yield above 100 % could not be a correct answer here.' },
        ],
        correct: 1,
        solution: 'Moles of acetanilide = 5.00/135.17 = 0.03699 mol; theoretical mass = 0.03699 × 180.16 = 6.665 g; yield = (4.00/6.665) × 100 = 60.0 %.',
      },
      {
        t: 'mcq',
        q: 'Aniline yellow, made by the rearrangement of diazoaminobenzene, is',
        opts: [
          { label: 'phenyl-azo-β-naphthol', nudge: 'That is the orange-red dye made by coupling a diazonium salt with alkaline β-naphthol; it is a different compound.' },
          { label: 'diazoaminobenzene', nudge: 'That is the starting material of the rearrangement, not its product.' },
          { label: 'p-aminoazobenzene', nudge: null },
          { label: 'p-nitroacetanilide', nudge: 'That is the nitration product of acetanilide, colourless when pure and made by an unrelated route.' },
        ],
        correct: 2,
        solution: 'Diazoaminobenzene, C<sub>6</sub>H<sub>5</sub>–N=N–NH–C<sub>6</sub>H<sub>5</sub>, rearranges to its isomer p-aminoazobenzene, C<sub>6</sub>H<sub>5</sub>–N=N–C<sub>6</sub>H<sub>4</sub>–NH<sub>2</sub>, the yellow aniline yellow.',
      },
    ],
  },

  // ───────────────────────── Topic 05 · Thermochemistry, sols and kinetics ─────────────────────────
  {
    n: '05',
    title: 'Thermochemistry, sols and kinetics',
    kalam: 'Four short experiments, each reduced to a number: a heat, a colour of a sol, a time on a stopwatch.',
    blocks: [
      // ───── Common ground: measuring heat
      { t: 'part', title: 'Measuring heat: the calorimeter and its constant' },
      {
        t: 'p',
        html: 'Most reactions in the laboratory run at atmospheric pressure, so the heat change of the reaction is an enthalpy change. The heat taken in by the solution is <i>q</i> = <i>m</i><i>c</i>Δ<i>T</i>, where <i>m</i> is the mass of the solution, <i>c</i> its specific heat and Δ<i>T</i> the temperature change (final minus initial). That heat comes from the reaction, so Δ<i>H</i> = −<i>q</i>. For dilute aqueous solutions the manual takes the product of density and heat capacity as 4.184 J mL<sup>−1</sup> K<sup>−1</sup>, the value for water. (Dilute solutions are denser than water and have a lower heat capacity; the two differences almost cancel.)<br><br>The vessel, the thermometer and the stirrer also absorb heat. The amount needed to warm all of them by 1 K is the <b>calorimeter constant</b> <i>W</i>, in J K<sup>−1</sup>. In the beaker calorimeter of the manual, a beaker stands on a wooden block inside a larger beaker, the gap is packed with cotton wool, and a cardboard cover carries the thermometer and the stirrer. A thermometer graduated to 0.1 °C is used.',
      },
      { t: 'fig', id: 'c12-12-05-d1' },
      {
        t: 'deriv',
        kicker: 'Calorimeter constant by the method of mixtures',
        steps: [
          { eq: 'heat lost by hot water = heat gained by cold water + heat gained by calorimeter', why: 'Energy is conserved and the calorimeter is insulated, so nothing leaves the system.' },
          { eq: '4.184 <i>V</i><sub>h</sub>(<i>t</i><sub>h</sub> − <i>t</i><sub>m</sub>) = 4.184 <i>V</i><sub>c</sub>(<i>t</i><sub>m</sub> − <i>t</i><sub>c</sub>) + <i>W</i>(<i>t</i><sub>m</sub> − <i>t</i><sub>c</sub>)', why: 'Water of volume <i>V</i> weighs about <i>V</i> grams and each gram needs 4.184 J per kelvin. The calorimeter warms from the cold temperature to the final one, like the cold water.' },
          { eq: '<i>W</i> = 4.184[<i>V</i><sub>h</sub>(<i>t</i><sub>h</sub> − <i>t</i><sub>m</sub>) − <i>V</i><sub>c</sub>(<i>t</i><sub>m</sub> − <i>t</i><sub>c</sub>)]/(<i>t</i><sub>m</sub> − <i>t</i><sub>c</sub>)', why: 'Solve for <i>W</i>. The temperatures are in the order <i>t</i><sub>h</sub> > <i>t</i><sub>m</sub> > <i>t</i><sub>c</sub>.' },
        ],
      },
      {
        t: 'proc',
        title: 'Finding the calorimeter constant of a beaker',
        steps: [
          '<b>Cold water.</b> Take 100 mL of water in the 250 mL beaker, set it on the wooden block in the larger beaker, pack cotton wool round it and cover it with the cardboard carrying the thermometer and stirrer. Record its temperature, <i>t</i><sub>c</sub>.',
          '<b>Hot water.</b> In another beaker take 100 mL of water at 50–60 °C and note its exact temperature <i>t</i><sub>h</sub> just before mixing.',
          '<b>Mix.</b> Lift the cover, pour the hot water into the calorimeter, stir and note the temperature of the mixture, <i>t</i><sub>m</sub>.',
          '<b>Calculate.</b> Find <i>W</i> from the expression above.',
        ],
      },
      {
        t: 'formula',
        kicker: 'Calorimeter constant',
        main: '<i>W</i> = 4.184[<i>V</i><sub>h</sub>(<i>t</i><sub>h</sub> − <i>t</i><sub>m</sub>) − <i>V</i><sub>c</sub>(<i>t</i><sub>m</sub> − <i>t</i><sub>c</sub>)]/(<i>t</i><sub>m</sub> − <i>t</i><sub>c</sub>)',
        legend: ['<i>W</i> = calorimeter constant, in J K<sup>−1</sup>', '<i>V</i><sub>h</sub> = volume of hot water, in mL', '<i>V</i><sub>c</sub> = volume of cold water, in mL', '<i>t</i><sub>h</sub> = temperature of the hot water', '<i>t</i><sub>m</sub> = temperature of the mixture', '<i>t</i><sub>c</sub> = temperature of the cold water'],
        note: 'The volumes are in mL and the density of water is taken as 1 g mL<sup>−1</sup>.',
      },
      {
        t: 'ex',
        tag: 'Experiment data',
        q: 'In finding the calorimeter constant, 100 mL of water at 27.0 °C is in the beaker. 100 mL of water at 55.0 °C is poured in, and the mixture settles at 40.0 °C. Find <i>W</i>.',
        steps: [
          '<b>Temperature changes.</b> The cold water and calorimeter rise by 40.0 − 27.0 = 13.0 K. The hot water falls by 55.0 − 40.0 = 15.0 K.',
          '<b>Formula.</b> <i>W</i> = 4.184 × (100 × 15.0 − 100 × 13.0)/13.0 = 4.184 × 200/13.0 = 64.4 J K<sup>−1</sup>.',
          '<b>Second route, heat by heat.</b> The hot water gave out 100 × 4.184 × 15.0 = 6276 J. The cold water took in 100 × 4.184 × 13.0 = 5439 J. The 837 J that remains went into the beaker over 13.0 K: 837/13.0 = 64.4 J K<sup>−1</sup>.',
        ],
        ans: '<i>W</i> = 64 J K<sup>−1</sup>',
      },
      {
        t: 'formula',
        kicker: 'Enthalpy change from a temperature change',
        main: '<i>q</i> = (<i>m</i> × 4.184 + <i>W</i>) × Δ<i>T</i><br>Δ<i>H</i> = −<i>q</i>/<i>n</i>',
        legend: ['<i>q</i> = heat gained by solution and calorimeter, in J', '<i>m</i> = mass of the solution, in g', '<i>W</i> = calorimeter constant, in J K<sup>−1</sup>', 'Δ<i>T</i> = final minus initial temperature', '<i>n</i> = moles of the reaction (solute or water formed)'],
        note: 'A fall in temperature (<i>q</i> negative) gives a positive Δ<i>H</i>; a rise gives a negative Δ<i>H</i>.',
      },

      // ───── Experiment: enthalpy of solution of CuSO4
      { t: 'part', title: 'Enthalpy of solution of CuSO₄: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To determine the enthalpy of solution of copper sulphate (CuSO<sub>4</sub>·5H<sub>2</sub>O).<br><br>The <b>enthalpy of solution</b> is the heat given out or taken in when one mole of a solute dissolves in so much solvent, usually water, that further dilution makes no heat change. Dissolving a salt is often accompanied by a temperature change of the solution. Because the calorimeter is insulated, the heat gained by the solution and the calorimeter equals, with opposite sign, the heat change of the dissolution. Dividing by the moles dissolved gives the value per mole. One mole of CuSO<sub>4</sub>·5H<sub>2</sub>O weighs 249.5 g.',
      },
      {
        t: 'formula',
        kicker: 'Enthalpy of solution',
        main: 'Δ<sub>sol</sub><i>H</i> = −[<i>W</i> + (100 + <i>w</i>) × 4.184] × Δ<i>T</i> × 249.5/<i>w</i>',
        legend: ['Δ<sub>sol</sub><i>H</i> = enthalpy of solution, in J mol<sup>−1</sup>', '<i>W</i> = calorimeter constant, in J K<sup>−1</sup>', '<i>w</i> = mass of CuSO<sub>4</sub>·5H<sub>2</sub>O dissolved, in g', 'Δ<i>T</i> = final minus initial temperature', '249.5 = molar mass of CuSO<sub>4</sub>·5H<sub>2</sub>O, in g mol<sup>−1</sup>'],
        note: 'The 100 is the mass in g of the 100 mL of water used. The manual’s printed expression multiplies <i>W</i> by 4.184 as well; since <i>W</i> is already in J K<sup>−1</sup>, it is added after multiplying the mass by 4.184, as here.',
      },

      { t: 'part', title: 'Enthalpy of solution of CuSO₄: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> The beaker calorimeter whose <i>W</i> has been found (beaker, wooden block, larger beaker, cotton wool, cardboard cover), a thermometer to 0.1 °C, a stirrer, a balance, finely powdered copper sulphate, and 100 mL of distilled water.',
      },
      {
        t: 'proc',
        title: 'Enthalpy of solution of copper sulphate',
        steps: [
          '<b>Set up.</b> Take 100 mL of distilled water in the beaker whose calorimeter constant is known, set it on the wooden block in the larger beaker, pack the gap with cotton wool and cover with the cardboard.',
          '<b>Initial temperature.</b> Record the temperature of the water, <i>t</i><sub>1</sub>′.',
          '<b>Dissolve.</b> Add a weighed amount <i>w</i> g of well powdered copper sulphate and stir until all of it dissolves.',
          '<b>Final temperature.</b> Record the temperature reached, <i>t</i><sub>2</sub>′, and calculate.',
        ],
      },
      { t: 'p', html: 'Potassium nitrate can be used in the same way in place of copper sulphate, with its own molar mass.' },

      { t: 'part', title: 'Enthalpy of solution of CuSO₄: observations and calculation' },
      {
        t: 'table',
        title: 'Readings for CuSO₄·5H₂O',
        head: ['Quantity', 'Value'],
        rows: [
          ['Calorimeter constant W (J/K)', '64.4'],
          ['Volume of water (mL)', '100'],
          ['Mass of CuSO<sub>4</sub>·5H<sub>2</sub>O, w (g)', '5.00'],
          ['Initial temperature t<sub>1</sub>′ (°C)', '27.0'],
          ['Final temperature t<sub>2</sub>′ (°C)', '26.5'],
        ],
      },
      {
        t: 'ex',
        tag: 'Experiment data',
        q: 'Use the readings in the table above to find Δ<sub>sol</sub><i>H</i> of copper sulphate pentahydrate (249.5 g mol<sup>−1</sup>) in kJ mol<sup>−1</sup>.',
        steps: [
          '<b>Temperature change.</b> Δ<i>T</i> = 26.5 − 27.0 = −0.5 K. The solution cooled.',
          '<b>Heat capacity of the contents.</b> The solution weighs 100 + 5.00 = 105 g, so it has 105 × 4.184 = 439.3 J K<sup>−1</sup>. With the calorimeter: 439.3 + 64.4 = 503.7 J K<sup>−1</sup>.',
          '<b>Heat gained by the contents.</b> <i>q</i> = 503.7 × (−0.5) = −251.9 J. The contents lost 251.9 J; it was absorbed by the dissolving salt, so the dissolution takes in heat.',
          '<b>Moles.</b> <i>n</i> = 5.00/249.5 = 0.02004 mol.',
          '<b>Enthalpy of solution.</b> Δ<sub>sol</sub><i>H</i> = +251.9/0.02004 = 12 570 J mol<sup>−1</sup>.',
          '<b>Second route, as the manual does.</b> Heat for 1 g: 251.9/5.00 = 50.4 J. For 1 mol (249.5 g): 50.4 × 249.5 = 12 570 J mol<sup>−1</sup>. The routes agree.',
          '<b>How firm is it?</b> A change of 0.5 K read on a thermometer marked to 0.1 K is uncertain by about 0.1 K, that is by 20 %. So the value is good to about two figures, about +13 kJ mol<sup>−1</sup>; 12 570 J mol<sup>−1</sup> is only the arithmetic.',
        ],
        ans: 'Δ<sub>sol</sub><i>H</i> ≈ +13 kJ mol<sup>−1</sup> (endothermic; the arithmetic gives 12 570 J mol<sup>−1</sup>)',
      },

      { t: 'part', title: 'Enthalpy of solution of CuSO₄: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> The enthalpy change in the dissolution of copper sulphate is … J mol<sup>−1</sup>.<br><br><b>Precautions.</b> Use a thermometer graduated to 0.1 °C. In the calorimeter-constant step, record the temperature of the hot water just before mixing. Avoid very large amounts of copper sulphate. Stir well so the solid dissolves, but not too much, since stirring itself produces heat. Weigh copper sulphate carefully, because it is hygroscopic. Use cotton wool for insulation between the two beakers.<br><br><b>Sources of error.</b> Heat exchanged with the room makes the observed Δ<i>T</i> too small. Neglecting <i>W</i> gives a value that is too small. Powder that dissolves slowly makes the final temperature hard to read.',
      },

      { t: 'part', title: 'Enthalpy of solution of CuSO₄: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b>The sign comes from the thermometer.</b> A falling temperature means heat was absorbed by the dissolution, so Δ<sub>sol</sub><i>H</i> is positive. A rising temperature means it is negative.',
          '<b>The answer is per mole,</b> so divide by the moles dissolved: 249.5 g mol<sup>−1</sup> is for the pentahydrate.',
          '<b>The contents weigh 100 + <i>w</i> g,</b> not 100 g; the solute is part of the solution.',
          '<b>The calorimeter constant is added to the heat capacity of the solution.</b> Leaving it out gives a value that is too small.',
          '<b>Anhydrous and hydrated copper sulphate give different values</b> for the same mass of water, because they do not start from the same state.',
          '<b>Units.</b> The working gives J; the answer is conventionally quoted in kJ mol<sup>−1</sup>.',
        ],
      },

      // ───── Experiment: enthalpy of neutralisation
      { t: 'part', title: 'Enthalpy of neutralisation: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To determine the enthalpy of neutralisation of a strong acid (HCl) with a strong base (NaOH).<br><br>Neutralisation is the combination of H<sup>+</sup>(aq) from an acid with OH<sup>−</sup>(aq) from a base to form water. It forms bonds, so the reaction is always exothermic. The <b>enthalpy of neutralisation</b> is the heat given out when 1 mol of H<sup>+</sup> from an acid combines with 1 mol of OH<sup>−</sup> from a base to form water. When both acid and base are strong, the net change is the same whichever acid and base are used, so a fixed amount of heat, 57 kJ per mole, is liberated. If the acid or the base is weak, some of the heat is used to ionise it, so less than 57 kJ mol<sup>−1</sup> is liberated, and still less if both are weak.',
      },
      {
        t: 'formula',
        kicker: 'Neutralisation of a strong acid by a strong base',
        main: 'H<sup>+</sup>(aq) + OH<sup>−</sup>(aq) → H<sub>2</sub>O(l)<br>Δ<sub>neut</sub><i>H</i> = −<i>q</i>/<i>n</i><sub>w</sub>',
        legend: ['Δ<sub>neut</sub><i>H</i> = enthalpy of neutralisation, about −57 kJ mol<sup>−1</sup>', '<i>q</i> = heat gained by solution and calorimeter', '<i>n</i><sub>w</sub> = moles of water formed'],
        note: 'The value is per mole of water formed, that is per mole of H<sup>+</sup> neutralised.',
      },

      { t: 'part', title: 'Enthalpy of neutralisation: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> The beaker calorimeter (constant <i>W</i> found as before), two further 250 mL beakers, a thermometer to 0.1 °C, a glass rod or stirrer, 100 mL of 1.0 M HCl and 100 mL of 1.0 M NaOH.',
      },
      {
        t: 'proc',
        title: 'Enthalpy of neutralisation of HCl by NaOH',
        steps: [
          '<b>Calorimeter constant.</b> Find <i>W</i> of the beaker as in the previous experiments.',
          '<b>Acid and base.</b> Take 100 mL of 1.0 M HCl in the calorimeter and cover it. In another 250 mL beaker take 100 mL of 1.0 M NaOH.',
          '<b>Initial temperature.</b> Note the temperature of both solutions, which is likely to be the same: <i>t</i><sub>1</sub>.',
          '<b>Mix.</b> Pour the NaOH solution into the calorimeter, stir, and note the final temperature of the mixture, <i>t</i><sub>2</sub>.',
          '<b>Calculate.</b> Find the heat produced, then the heat for one mole of water.',
        ],
      },
      { t: 'fig', id: 'c12-12-05-d2' },

      { t: 'part', title: 'Enthalpy of neutralisation: observations and calculation' },
      {
        t: 'table',
        title: 'Readings for HCl and NaOH',
        head: ['Quantity', 'Value'],
        rows: [
          ['Calorimeter constant W (J/K)', '64.4'],
          ['Volume of 1.0 M HCl (mL)', '100'],
          ['Volume of 1.0 M NaOH (mL)', '100'],
          ['Initial temperature t<sub>1</sub> (°C)', '27.0'],
          ['Final temperature t<sub>2</sub> (°C)', '33.3'],
        ],
        note: 'To correct for heat loss during the run, read the temperature every 30 seconds before mixing and after it, and extend the cooling line back to the moment of mixing. Taking the rise from that line is common practice and is not part of the manual’s procedure.',
      },
      {
        t: 'ex',
        tag: 'Experiment data',
        q: 'Use the readings in the table above to find the enthalpy of neutralisation in kJ per mole of water formed. Take the density and specific heat of the solutions as those of water.',
        steps: [
          '<b>Temperature rise.</b> Δ<i>T</i> = 33.3 − 27.0 = 6.3 K.',
          '<b>Heat capacity of the contents.</b> The mixture is 100 + 100 = 200 mL, about 200 g: 200 × 4.184 = 836.8 J K<sup>−1</sup>. Adding the calorimeter: 836.8 + 64.4 = 901.2 J K<sup>−1</sup>.',
          '<b>Heat produced.</b> <i>q</i> = 901.2 × 6.3 = 5677 J.',
          '<b>Moles of water.</b> 100 mL of 1.0 M HCl holds 0.100 mol of H<sup>+</sup>, and 100 mL of 1.0 M NaOH holds 0.100 mol of OH<sup>−</sup>. They combine completely, so 0.100 mol of water forms.',
          '<b>Enthalpy of neutralisation.</b> 5677/0.100 = 56 770 J mol<sup>−1</sup>, that is −56.8 kJ mol<sup>−1</sup> (the heat is given out).',
          '<b>Second route, as the manual does.</b> The heat for 1000 mL of 1 M acid with 1000 mL of 1 M base is ten times the heat above: 10 × 5.677 = 56.8 kJ. The routes agree, and the value is close to the 57 kJ mol<sup>−1</sup> expected for a strong acid and strong base.',
          '<b>What neglecting W would do.</b> Without it, 836.8 × 6.3 = 5272 J, which gives 52.7 kJ mol<sup>−1</sup>, about 7 % too low.',
        ],
        ans: 'Δ<sub>neut</sub><i>H</i> = −56.8 kJ mol<sup>−1</sup>',
      },

      { t: 'part', title: 'Enthalpy of neutralisation: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> The enthalpy change in the neutralisation of hydrochloric acid with sodium hydroxide is … kJ mol<sup>−1</sup>.<br><br><b>Precautions.</b> Record the temperatures with a thermometer graduated to 0.1 °C. Measure the volumes of acid and base carefully. Insulate properly between the two beakers. Avoid unnecessary and excessive stirring, which heats the solution by friction.<br><br><b>Sources of error.</b> Heat lost to the surroundings lowers the observed rise. Neglecting the calorimeter constant lowers it further. Solutions that are not at the same temperature before mixing make <i>t</i><sub>1</sub> uncertain. An acid or base that is not exactly 1.0 M changes the moles of water formed.',
      },

      { t: 'part', title: 'Enthalpy of neutralisation: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b>Strong acid and strong base give about −57 kJ mol<sup>−1</sup>,</b> whichever pair is used, because the net change is always H<sup>+</sup> + OH<sup>−</sup> → H<sub>2</sub>O.',
          '<b>A weak acid or base gives a smaller magnitude,</b> because part of the heat goes into ionising it.',
          '<b>The value is per mole of water formed.</b> For 100 mL of 1.0 M solutions it is 0.100 mol, not 1 mol and not 0.2 mol.',
          '<b>With unequal amounts, the smaller one decides</b> how many moles of water form.',
          '<b>The sign is negative</b> because the temperature rises: heat is given out.',
          '<b>Do not neglect the calorimeter constant.</b> Here it is about 7 % of the result.',
        ],
      },

      // ───── Experiment: sols
      { t: 'part', title: 'Lyophilic and lyophobic sols: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To prepare lyophilic and lyophobic sols.<br><br>A colloidal particle is larger than a simple molecule but small enough to stay suspended in the medium, roughly 10<sup>−9</sup> to 10<sup>−6</sup> m. A solid dispersed in a liquid is a <b>sol</b>. If the dispersed particles are attracted to the liquid, the sol is <b>lyophilic</b> (solvent attracting); if they repel it, the sol is <b>lyophobic</b> (solvent repelling). For water these are called hydrophilic and hydrophobic. Egg albumin, starch and gum form lyophilic sols; freshly prepared ferric hydroxide, aluminium hydroxide and arsenious sulphide form lyophobic sols.<br><br>Two factors stabilise a sol, the charge on the particles and their solvation. Lyophilic sols owe their stability mainly to solvation. Lyophobic sols are stabilised by charge; the like charge keeps the particles apart so they do not coagulate. The charge may be positive or negative. A positively charged sol of hydrated ferric oxide forms when FeCl<sub>3</sub> is added to excess hot water, and a negatively charged one when FeCl<sub>3</sub> is added to NaOH solution. Starch and arsenious sulphide sols are negatively charged.',
      },
      {
        t: 'table',
        title: 'Lyophilic and lyophobic sols',
        head: ['Point', 'Lyophilic', 'Lyophobic'],
        rows: [
          ['Particles and medium', 'attracted', 'repelled'],
          ['Stability', 'more stable, mainly by solvation', 'less stable, mainly by charge'],
          ['Preparation', 'direct mixing and shaking with the liquid', 'special methods only; not by direct mixing'],
          ['Examples in the manual', 'egg albumin, starch, gum', 'Fe(OH)<sub>3</sub>, Al(OH)<sub>3</sub>, As<sub>2</sub>S<sub>3</sub>'],
        ],
      },
      {
        t: 'formula',
        kicker: 'Chemistry of the lyophobic sols',
        main: 'Ferric hydroxide:<br>FeCl<sub>3</sub> + 3H<sub>2</sub>O → Fe(OH)<sub>3</sub> + 3HCl<br>Aluminium hydroxide:<br>AlCl<sub>3</sub> + 3H<sub>2</sub>O → Al(OH)<sub>3</sub> + 3HCl<br>Arsenious sulphide:<br>As<sub>2</sub>O<sub>3</sub> + 3H<sub>2</sub>S → As<sub>2</sub>S<sub>3</sub> + 3H<sub>2</sub>O',
        legend: ['Fe(OH)<sub>3</sub> = hydrated ferric oxide, brown sol', 'Al(OH)<sub>3</sub> = white sol', 'As<sub>2</sub>S<sub>3</sub> = arsenious sulphide, negative sol'],
        note: 'Hot water makes the hydrolysis of FeCl<sub>3</sub> go forward; the Fe(OH)<sub>3</sub> stays as a sol, not a precipitate.',
      },
      { t: 'fig', id: 'c12-12-05-d3' },

      { t: 'part', title: 'Lyophilic and lyophobic sols: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> Beakers of 250 mL, a watch glass, a porcelain dish, a 100 mL measuring cylinder, pipettes, and a Kipp’s apparatus for hydrogen sulphide. Materials: an egg, sodium chloride 5 g, ferric chloride 2 g, aluminium chloride 2 g, starch or gum 500 mg, arsenious oxide 0.2 g.',
      },
      {
        t: 'proc',
        title: 'Lyophilic sols',
        steps: [
          '<b>Egg albumin.</b> Prepare 100 mL of 5 % (w/v) NaCl solution in a 250 mL beaker. Break an egg in a porcelain dish, pipette out the albumin and pour it into the NaCl solution. Stir well.',
          '<b>Starch or gum.</b> Boil 100 mL of distilled water in a 250 mL beaker. Make a paste of 500 mg of starch or gum in hot water and add it to the boiling water with constant stirring. Keep it boiling and stirring for 10 minutes. Compare the sol with the original paste to judge how well it has formed.',
        ],
      },
      {
        t: 'proc',
        title: 'Lyophobic sols',
        steps: [
          '<b>Ferric hydroxide or aluminium hydroxide.</b> Boil 100 mL of distilled water in a beaker. Add 2 g of ferric chloride (or aluminium chloride) powder and stir well. Boil 100 mL of distilled water in another beaker, and pour 10 mL of the solution just made, drop by drop, into it with constant stirring. Keep the water boiling until a brown sol (iron) or a white sol (aluminium) is obtained.',
          '<b>Arsenious sulphide.</b> Add 0.2 g of arsenious oxide to 100 mL of water in a 250 mL beaker and boil. Cool and filter. Pass hydrogen sulphide through the filtered solution until it smells of H<sub>2</sub>S. Drive off the excess H<sub>2</sub>S by slow heating and filter. The filtrate is the arsenious sulphide sol.',
        ],
      },
      { t: 'p', html: '<b>Safety.</b> Arsenious oxide is poisonous: wash your hands immediately after handling it.' },

      { t: 'part', title: 'Lyophilic and lyophobic sols: observations' },
      {
        t: 'table',
        title: 'Sols prepared',
        head: ['Sol', 'How it forms', 'Type', 'What is seen'],
        rows: [
          ['Egg albumin', 'albumin stirred into 5 % NaCl', 'lyophilic', 'albumin disperses on stirring'],
          ['Starch or gum', 'paste added to boiling water, boiled 10 min', 'lyophilic', 'a sol, compared with the paste'],
          ['Ferric hydroxide', 'FeCl<sub>3</sub> solution dropped into boiling water', 'lyophobic, positive', 'brown sol'],
          ['Aluminium hydroxide', 'AlCl<sub>3</sub> solution dropped into boiling water', 'lyophobic, positive', 'white sol'],
          ['Arsenious sulphide', 'H<sub>2</sub>S passed into As<sub>2</sub>O<sub>3</sub> solution', 'lyophobic, negative', 'sol after H<sub>2</sub>S is driven off'],
        ],
        note: 'The sign of charge of the iron and aluminium sols is that of the sols prepared in the manual (FeCl<sub>3</sub> and AlCl<sub>3</sub> added to boiling water).',
      },

      { t: 'part', title: 'Lyophilic and lyophobic sols: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> The lyophilic sols of egg albumin and of starch (or gum) and the lyophobic sols of ferric hydroxide or aluminium hydroxide and of arsenious sulphide have been prepared.<br><br><b>Precautions.</b> When preparing sols of starch, gum, ferric chloride or aluminium chloride, pour the paste or the solution gradually into the boiling water with constant stirring: adding these too fast, or in excess, may cause precipitation. Wash your hands immediately after handling arsenious oxide, which is poisonous.<br><br><b>Sources of error.</b> Adding the ferric chloride solution too fast, or too much of it, may precipitate it and give no clear sol. H<sub>2</sub>S that is not driven off leaves the arsenious sulphide sol contaminated.',
      },

      { t: 'part', title: 'Lyophilic and lyophobic sols: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b>Lyophilic sols form on direct mixing and shaking;</b> lyophobic sols never do, and need a special method such as hydrolysis in boiling water or a chemical reaction.',
          '<b>The ferric hydroxide sol is positive</b> when FeCl<sub>3</sub> is added to boiling water, and negative when FeCl<sub>3</sub> is added to NaOH solution.',
          '<b>Arsenious sulphide and starch sols are negative.</b>',
          '<b>The ferric chloride goes into the water drop by drop,</b> into boiling water, with stirring.',
          '<b>Lyophilic means solvent attracting,</b> lyophobic solvent repelling; hydrophilic and hydrophobic are the terms when the solvent is water.',
          '<b>Peptization and coagulation are opposites:</b> peptization turns a precipitate into a sol, coagulation brings sol particles together into a precipitate.',
        ],
      },

      // ───── Experiment: kinetics
      { t: 'part', title: 'Iodide and hydrogen peroxide: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To study how the concentration of iodide ions changes the rate of the reaction of iodide ions with hydrogen peroxide at room temperature.<br><br>In acid solution hydrogen peroxide oxidises iodide ions to iodine. A known small amount of sodium thiosulphate and some starch are added. The thiosulphate reduces the iodine back to iodide as fast as it forms. When all the thiosulphate is used up, iodine accumulates and forms an intense blue complex with starch. The time to the blue colour is the time taken to consume a fixed amount of thiosulphate; it is reproducible, which is why the reaction is called a <b>clock reaction</b>.',
      },
      {
        t: 'formula',
        kicker: 'The clock reaction',
        main: 'Oxidation of iodide:<br>2I<sup>−</sup> + H<sub>2</sub>O<sub>2</sub> + 2H<sup>+</sup> → I<sub>2</sub> + 2H<sub>2</sub>O<br>Removal of iodine:<br>I<sub>2</sub> + 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> → S<sub>4</sub>O<sub>6</sub><sup>2−</sup> + 2I<sup>−</sup>',
        legend: ['S<sub>2</sub>O<sub>3</sub><sup>2−</sup> = thiosulphate ion, used up first', 'S<sub>4</sub>O<sub>6</sub><sup>2−</sup> = tetrathionate ion', 'I<sub>2</sub> = iodine, blue with starch once free'],
        note: 'Iodide is used and regenerated, so its concentration stays almost constant during the run; the net change is H<sub>2</sub>O<sub>2</sub> + 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> + 2H<sup>+</sup> → S<sub>4</sub>O<sub>6</sub><sup>2−</sup> + 2H<sub>2</sub>O.',
      },
      { t: 'fig', id: 'c12-12-05-d4' },

      { t: 'part', title: 'Iodide and hydrogen peroxide: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> A 500 mL conical flask (A), four 250 mL conical flasks (B, C, D, E), measuring cylinders, a stopwatch and a water bath at room temperature. Solutions: 3 % hydrogen peroxide, 2.5 M sulphuric acid, freshly prepared starch, 0.04 M sodium thiosulphate and 0.1 M potassium iodide.',
      },
      {
        t: 'proc',
        title: 'Effect of iodide concentration on the rate',
        steps: [
          '<b>Flask A.</b> Mix 25 mL of 3 % hydrogen peroxide, 25 mL of 2.5 M sulphuric acid, 5 mL of fresh starch solution and 195 mL of distilled water in the 500 mL flask. Stir and place it in a water bath at room temperature.',
          '<b>Flask B.</b> Mix 10 mL of 0.04 M sodium thiosulphate, 10 mL of 0.1 M potassium iodide and 80 mL of distilled water. Shake and keep it in the bath.',
          '<b>Flasks C and D.</b> Prepare in the same way with 20 mL (flask C) and 30 mL (flask D) of 0.1 M potassium iodide and 70 mL and 60 mL of distilled water, each with 10 mL of the thiosulphate.',
          '<b>Run.</b> Into the empty flask E measure 25 mL from flask A and add 25 mL from flask B with constant stirring. Start the stopwatch when half of the solution from B has been added. Keep E in the bath and record the time for the blue colour to appear.',
          '<b>Repeat.</b> Repeat with the solutions of flasks C and D, each time with 25 mL from flask A. Do each run twice and take the average time.',
        ],
      },
      {
        t: 'table',
        title: 'Concentrations in the 50 mL reaction mixture',
        head: ['Flask', 'KI taken (mL of 0.1 M)', 'Iodide in mixture (M)', 'Thiosulphate in mixture (M)'],
        rows: [
          ['B', '10', '0.005', '0.002'],
          ['C', '20', '0.010', '0.002'],
          ['D', '30', '0.015', '0.002'],
        ],
        note: 'Check for flask B: 10 mL of 0.1 M KI is 1.0 mmol in 100 mL, so 25 mL holds 0.25 mmol, which is 0.25/50 = 0.005 M. The thiosulphate is 0.4 mmol in 100 mL, so 25 mL holds 0.10 mmol, which is 0.002 M in 50 mL.',
      },
      { t: 'p', html: '<b>Safety.</b> Hydrogen peroxide in contact with combustible material may cause fire.' },

      { t: 'part', title: 'Iodide and hydrogen peroxide: observations and calculation' },
      {
        t: 'p',
        html: 'In the 50 mL mixture, 0.002 M thiosulphate is used up when 0.001 M of iodine has been made, since I<sub>2</sub> + 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> take two thiosulphate ions per iodine molecule, and one H<sub>2</sub>O<sub>2</sub> gives one I<sub>2</sub>. So the average rate over the run is 0.001 M divided by the time <i>t</i>. The hydrogen peroxide and acid are the same in every flask and are present in far larger amounts than the 0.001 M that is used, so their concentrations hardly change.',
      },
      {
        t: 'ex',
        tag: 'Experiment data',
        q: 'The averaged times for the blue colour are 150 s (flask B), 76 s (flask C) and 50 s (flask D). Using the concentrations in the table, find the rate in each run, the order of the reaction with respect to iodide, and the rate constant at fixed H<sub>2</sub>O<sub>2</sub> and H<sup>+</sup>.',
        steps: [
          '<b>Rates.</b> Rate = 0.001 M/<i>t</i>: flask B 0.001/150 = 6.67 × 10<sup>−6</sup> M s<sup>−1</sup>; flask C 0.001/76 = 1.32 × 10<sup>−5</sup> M s<sup>−1</sup>; flask D 0.001/50 = 2.00 × 10<sup>−5</sup> M s<sup>−1</sup>.',
          '<b>Order from two flasks.</b> Rate = <i>k</i>′[I<sup>−</sup>]<sup><i>x</i></sup>. Between B and C, [I<sup>−</sup>] doubles and the rate rises by 1.32 × 10<sup>−5</sup>/6.67 × 10<sup>−6</sup> = 1.97, so 2<sup><i>x</i></sup> = 1.97 and <i>x</i> = log 1.97/log 2 = 0.98 ≈ 1. Between B and D, [I<sup>−</sup>] triples and the rate rises 3.00-fold, so <i>x</i> = log 3/log 3 = 1.',
          '<b>Second route, rate against concentration.</b> The product <i>t</i> × [I<sup>−</sup>] is 150 × 0.005 = 0.75, 76 × 0.010 = 0.76 and 50 × 0.015 = 0.75: almost constant. When time is inversely proportional to concentration, the rate is proportional to concentration, so the order is 1. A graph of rate against [I<sup>−</sup>] is a straight line through the origin.',
          '<b>Rate constant.</b> <i>k</i>′ = rate/[I<sup>−</sup>]: 6.67 × 10<sup>−6</sup>/0.005 = 1.33 × 10<sup>−3</sup>; 1.32 × 10<sup>−5</sup>/0.010 = 1.32 × 10<sup>−3</sup>; 2.00 × 10<sup>−5</sup>/0.015 = 1.33 × 10<sup>−3</sup>. The mean is 1.33 × 10<sup>−3</sup> s<sup>−1</sup>.',
          '<b>Meaning of <i>k</i>′.</b> It is the rate constant with the H<sub>2</sub>O<sub>2</sub> and H<sup>+</sup> concentrations, which are the same in every flask, folded in. To find the order in H<sub>2</sub>O<sub>2</sub> or in H<sup>+</sup>, the same method is used with that concentration varied.',
        ],
        ans: 'Order 1 in iodide; rate = <i>k</i>′[I<sup>−</sup>] with <i>k</i>′ = 1.33 × 10<sup>−3</sup> s<sup>−1</sup>',
      },
      { t: 'fig', id: 'c12-12-05-d5' },
      {
        t: 'formula',
        kicker: 'Rate and order from the clock times',
        main: 'rate = 0.001 M/<i>t</i><br><i>x</i> = log(rate<sub>2</sub>/rate<sub>1</sub>)/log([I<sup>−</sup>]<sub>2</sub>/[I<sup>−</sup>]<sub>1</sub>)<br><i>k</i>′ = rate/[I<sup>−</sup>]<sup><i>x</i></sup>',
        legend: ['<i>t</i> = time for the blue colour, in s', '0.001 M = iodine formed when the thiosulphate is used up', '<i>x</i> = order with respect to iodide', '<i>k</i>′ = rate constant at fixed H<sub>2</sub>O<sub>2</sub> and H<sup>+</sup>'],
        note: 'The 0.001 M is for the concentrations of the manual’s design (0.002 M thiosulphate in the mixture).',
      },

      { t: 'part', title: 'Iodide and hydrogen peroxide: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> The time for the blue colour to appear falls as the concentration of iodide ions rises, so the rate of the reaction increases with iodide concentration.<br><br><b>Precautions.</b> Keep the concentration of sodium thiosulphate lower than that of potassium iodide. Always use freshly prepared starch solution. Use fresh samples of hydrogen peroxide and potassium iodide. Use the same measuring cylinders for the same solutions in the different sets, and clean a cylinder before using it for another solution. Record the time immediately when the blue colour appears.<br><br><b>Sources of error.</b> Starting the stopwatch at a different point of the mixing in different runs makes the times inconsistent; start it when half of the solution from B has been added, every time. A bath that is not at constant temperature changes the rate, which rises with temperature. Old hydrogen peroxide or old starch gives wrong times.',
      },

      { t: 'part', title: 'Iodide and hydrogen peroxide: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b>The blue colour appears when the thiosulphate is used up,</b> not when the reaction starts and not when hydrogen peroxide or iodide runs out.',
          '<b>Time and rate are inversely related.</b> Halving the time doubles the rate; it does not halve it.',
          '<b>Iodide is regenerated by the thiosulphate,</b> so its concentration stays practically constant in each run. This is what lets the average rate stand for the rate at that concentration.',
          '<b>Thiosulphate is kept lower than iodide,</b> and the starch must be fresh.',
          '<b>The oxidation number of sulphur in S<sub>4</sub>O<sub>6</sub><sup>2−</sup> is +2.5,</b> an average over four sulphur atoms: 4<i>x</i> + 6(−2) = −2. A fractional oxidation number is an average.',
          '<b>The order is found from the data, not read from the equation.</b> The equation has two I<sup>−</sup>, yet the order in iodide found here is 1.',
        ],
      },

      // ───── Practice and MCQ
      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[Calorimeter constant] 50 mL of water at 25.0 °C is in a beaker. 50 mL of water at 55.0 °C is added and the mixture settles at 39.0 °C. Find the calorimeter constant.',
            a: '<i>W</i> = 4.184[50 × (55.0 − 39.0) − 50 × (39.0 − 25.0)]/(39.0 − 25.0) = 4.184 × (800 − 700)/14.0 = 29.9 J K<sup>−1</sup>. Check by heat: the hot water gave 50 × 4.184 × 16.0 = 3347 J; the cold water took 50 × 4.184 × 14.0 = 2929 J; the beaker took the 418 J left, and 418/14.0 = 29.9 J K<sup>−1</sup>.',
          },
          {
            q: '[Enthalpy of solution] 4.99 g of CuSO<sub>4</sub>·5H<sub>2</sub>O (249.5 g mol<sup>−1</sup>) is dissolved in 100 mL of water in a calorimeter with <i>W</i> = 60 J K<sup>−1</sup>. The temperature falls by 0.47 K. Find Δ<sub>sol</sub><i>H</i>.',
            a: 'Moles = 4.99/249.5 = 0.0200 mol. Mass of solution = 104.99 g, so heat capacity = 104.99 × 4.184 + 60 = 439.3 + 60 = 499.3 J K<sup>−1</sup>. <i>q</i> = 499.3 × (−0.47) = −234.7 J. Δ<sub>sol</sub><i>H</i> = +234.7/0.0200 = 11 730 J mol<sup>−1</sup> = +11.7 kJ mol<sup>−1</sup>, positive because the temperature fell.',
          },
          {
            q: '[Enthalpy of neutralisation] 50 mL of 1.0 M HCl and 50 mL of 1.0 M NaOH, both at the same temperature, are mixed in a calorimeter with <i>W</i> = 30 J K<sup>−1</sup>. The temperature rises by 6.3 K. Find Δ<sub>neut</sub><i>H</i>.',
            a: 'Heat capacity = 100 × 4.184 + 30 = 448.4 J K<sup>−1</sup>, so <i>q</i> = 448.4 × 6.3 = 2825 J. Moles of water = 0.050 mol (50 mL of 1.0 M). Δ<sub>neut</sub><i>H</i> = −2825/0.050 = −56 500 J mol<sup>−1</sup> = −56.5 kJ mol<sup>−1</sup>. Check by ten-times route: 2.825 kJ for 0.050 mol is 56.5 kJ for 1 mol.',
          },
          {
            q: '[Weak acid] The same calorimeter (<i>W</i> = 64.4 J K<sup>−1</sup>) is used with 100 mL of 1.0 M CH<sub>3</sub>COOH and 100 mL of 1.0 M NaOH. The rise is 6.0 K, against 6.3 K for HCl and NaOH. Find the enthalpy of neutralisation and explain why its magnitude is smaller than that of HCl.',
            a: 'Heat capacity = 200 × 4.184 + 64.4 = 901.2 J K<sup>−1</sup>; <i>q</i> = 901.2 × 6.0 = 5407 J; moles of water 0.100, so Δ<sub>neut</sub><i>H</i> = −54.1 kJ mol<sup>−1</sup>. Acetic acid is a weak acid: part of the heat given out when H<sup>+</sup> and OH<sup>−</sup> combine is used to ionise the acid, so less appears as a temperature rise than for a strong acid (about −57 kJ mol<sup>−1</sup>).',
          },
          {
            q: '[Clock reaction] In the manual’s design (0.002 M thiosulphate in the mixture), the times for the blue colour are 100 s, 50 s and 25 s when [I<sup>−</sup>] is 0.004 M, 0.008 M and 0.016 M. Find the rates, the order in iodide and <i>k</i>′.',
            a: 'Rate = 0.001/<i>t</i>: 1.0 × 10<sup>−5</sup>, 2.0 × 10<sup>−5</sup> and 4.0 × 10<sup>−5</sup> M s<sup>−1</sup>. Doubling [I<sup>−</sup>] doubles the rate (and again), so the order is 1. <i>k</i>′ = 1.0 × 10<sup>−5</sup>/0.004 = 2.5 × 10<sup>−3</sup> s<sup>−1</sup>. Check on the third run: 4.0 × 10<sup>−5</sup>/0.016 = 2.5 × 10<sup>−3</sup> s<sup>−1</sup>.',
          },
          {
            q: '[Sols] A student pours 10 mL of ferric chloride solution all at once into 100 mL of boiling water, and a brown precipitate settles instead of a sol. What should have been done, what is the equation, and what would be the sign of the charge if the FeCl<sub>3</sub> had been added to NaOH solution instead?',
            a: 'The ferric chloride solution should have been added drop by drop, with constant stirring, to boiling water, which gives the sol FeCl<sub>3</sub> + 3H<sub>2</sub>O → Fe(OH)<sub>3</sub> + 3HCl. Adding too fast or in excess precipitates it. Added to excess hot water the hydrated ferric oxide sol is positive; if FeCl<sub>3</sub> is added to NaOH solution, the sol is negatively charged.',
          },
        ],
      },
      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The enthalpy of neutralisation of HCl with NaOH is about −57 kJ mol<sup>−1</sup>. For acetic acid with NaOH in the same experiment, the value is',
        opts: [
          { label: 'exactly the same, since both acids are monobasic', nudge: 'Acetic acid is weak. The value is the same only when both acid and base are strong, because then the net change is only H<sup>+</sup> + OH<sup>−</sup> → H<sub>2</sub>O.' },
          { label: 'numerically larger, because acetic acid has more atoms', nudge: 'Size has nothing to do with it; the heat used to ionise the weak acid reduces the amount liberated.' },
          { label: 'zero, because a weak acid does not neutralise a strong base', nudge: 'A weak acid does neutralise a strong base; heat is still given out, only less of it.' },
          { label: 'numerically smaller', nudge: null },
        ],
        correct: 3,
        solution: 'Some of the heat given out when H<sup>+</sup> and OH<sup>−</sup> combine is used to ionise the weak acid, so less than 57 kJ mol<sup>−1</sup> is liberated.',
      },
      {
        t: 'mcq',
        q: 'The calorimeter constant of a beaker is',
        opts: [
          { label: 'the heat needed to raise the temperature of the beaker, thermometer and stirrer by 1 K', nudge: null },
          { label: 'the heat given out when one mole of solute dissolves in the beaker', nudge: 'That describes an enthalpy of solution, which is a property of the substance, not of the beaker.' },
          { label: 'the heat needed to raise 1 g of water by 1 K', nudge: 'That is the specific heat of water, 4.184 J g<sup>−1</sup> K<sup>−1</sup>, not a property of the calorimeter.' },
          { label: 'the heat lost by the beaker to the room in one minute', nudge: 'Heat loss to the room is a source of error, which the cotton wool cuts down; it is not the calorimeter constant.' },
        ],
        correct: 0,
        solution: 'The calorimeter constant <i>W</i>, in J K<sup>−1</sup>, is the heat capacity of the vessel and its fittings that take part in the heat exchange; it is found by the method of mixtures.',
      },
      {
        t: 'mcq',
        q: 'In the reaction of iodide ions with hydrogen peroxide in the presence of thiosulphate and starch, the blue colour appears at the moment when',
        opts: [
          { label: 'all the hydrogen peroxide has been used up', nudge: 'Hydrogen peroxide is present in far larger amounts and is mostly left over when the colour appears.' },
          { label: 'all the potassium iodide has been used up', nudge: 'Iodide is regenerated by the thiosulphate, so it is not used up; its concentration stays almost constant.' },
          { label: 'all the thiosulphate has been used up, so iodine begins to accumulate', nudge: null },
          { label: 'the starch is oxidised by hydrogen peroxide', nudge: 'The starch only detects iodine, by the blue complex it forms; it is not oxidised in the experiment.' },
        ],
        correct: 2,
        solution: 'Thiosulphate reduces iodine back to iodide as fast as it forms. Only when the thiosulphate has all been used does free iodine remain, and it turns the starch blue.',
      },
      {
        t: 'mcq',
        q: 'Which method gives a lyophobic sol?',
        opts: [
          { label: 'pouring a paste of starch into boiling water', nudge: 'Starch gives a lyophilic sol, formed by simply mixing it with the hot water.' },
          { label: 'adding ferric chloride solution drop by drop to boiling water', nudge: null },
          { label: 'stirring egg albumin into 5 % sodium chloride solution', nudge: 'Albumin gives a lyophilic sol by direct mixing.' },
          { label: 'boiling gum with water for ten minutes', nudge: 'Gum forms a lyophilic sol, like starch.' },
        ],
        correct: 1,
        solution: 'Ferric chloride is hydrolysed by boiling water to hydrated ferric oxide, a lyophobic sol made by a special method and not by direct mixing. Starch, gum and albumin are lyophilic.',
      },
      {
        t: 'mcq',
        q: '100 mL of 1.0 M HNO<sub>3</sub> is mixed with 100 mL of 1.0 M KOH and the temperature rises by 6.0 K. Neglecting the calorimeter and taking 4.184 J g<sup>−1</sup> K<sup>−1</sup> for 200 g of solution, the enthalpy of neutralisation is',
        opts: [
          { label: '−5.02 kJ mol<sup>−1</sup>', nudge: 'This is the heat in kJ for the 0.100 mol that reacted; it has not been scaled up to one mole.' },
          { label: '−25.1 kJ mol<sup>−1</sup>', nudge: 'This divides the heat by 0.200 mol, the total moles of acid and base, but only 0.100 mol of water forms.' },
          { label: '−50.2 kJ mol<sup>−1</sup>', nudge: null },
          { label: '−100 kJ mol<sup>−1</sup>', nudge: 'This divides by 0.050 mol; the moles of water formed are 0.100.' },
        ],
        correct: 2,
        solution: '<i>q</i> = 200 × 4.184 × 6.0 = 5021 J = 5.02 kJ. The acid and base give 0.100 mol of water, so the enthalpy is −5.02/0.100 = −50.2 kJ mol<sup>−1</sup>.',
      },
      {
        t: 'mcq',
        q: 'In a clock-reaction series the iodide concentration is made four times larger and the time for the blue colour falls from 240 s to 60 s. The order of the reaction with respect to iodide is',
        opts: [
          { label: '0', nudge: 'A zero-order reaction would show no change in time as the concentration changes; here the time is a quarter.' },
          { label: '1', nudge: null },
          { label: '2', nudge: 'Order 2 would make the rate 16 times faster on a fourfold increase; here the rate is 4 times faster.' },
          { label: '4', nudge: 'This confuses the factor by which concentration changes with the order; order 4 would raise the rate by a factor of 256.' },
        ],
        correct: 1,
        solution: 'The time is inversely proportional to the rate, so the rate rises 240/60 = 4 times. A fourfold increase in concentration gives a fourfold increase in rate, 4<sup><i>x</i></sup> = 4, so <i>x</i> = 1.',
      },
    ],
  },
];
