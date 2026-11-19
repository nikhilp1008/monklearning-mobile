import type { Topic } from '@/lib/textbooks';

/**
 * Chemistry 12, Chapter 12 Practical Chemistry, Writer A: Topic 01 (organic
 * analysis: Lassaigne's test and the tests for the hydroxyl, carbonyl, carboxyl
 * and amino groups) and Topic 03 (volumetric analysis: acid-base titrations,
 * the choice of indicator, KMnO4 against oxalic acid and against Mohr's salt).
 *
 * ORIGINAL TEXT in our own words. Every colour, precipitate, indicator colour,
 * temperature, reagent and observation is taken from the NCERT Chemistry
 * Laboratory Manual (Class XI Units 6 and 7, Class XII Units 6 and 8), checked
 * against GRB OP Tandon; where they differ the NCERT manual is followed.
 * Figure ids: c12-12-01-d1 to d3 and c12-12-03-d1 to d3 (see the writer report).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 ─────────────────────────
  {
    n: '01',
    title: 'Organic analysis: elements and functional groups',
    kalam: 'Organic compounds hide their nitrogen, sulphur and halogens until sodium fusion turns them into ions you can test.',
    blocks: [
      { t: 'part', title: 'Lassaigne’s test: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To detect the extra elements nitrogen, sulphur and the halogens (chlorine, bromine, iodine) in an organic compound.',
      },
      {
        t: 'p',
        html: 'In an organic compound these elements are held by covalent bonds, so the compound gives no ions in water and a direct test with silver nitrate or iron salts gets nowhere. The fix is to <b>fuse the compound with sodium metal</b>. At red heat the carbon of the compound and its other elements are converted into <b>ionic sodium salts</b> that dissolve in water. The aqueous solution is the <b>sodium extract</b>, also called Lassaigne’s extract or filtrate, and the ordinary tests for the cyanide, sulphide and halide ions are then run on it. NCERT prefers sodium to potassium because it is easier to get and its reaction is easier to control.',
      },
      {
        t: 'formula',
        kicker: 'Sodium fusion',
        main: 'Na + C + N → NaCN<br>2Na + S → Na<sub>2</sub>S<br>Na + X → NaX',
        legend: ['X = Cl, Br or I from the compound'],
        note: 'Carbon must come from the compound itself, so a nitrogen compound with no carbon in it gives no cyanide.',
      },
      {
        t: 'p',
        html: '<b>When nitrogen and sulphur are both present</b> the fusion can give sodium thiocyanate instead: Na + C + N + S → NaSCN. NCERT says this happens when only a little sodium is used. With plenty of sodium the thiocyanate is broken down again, NaSCN + 2Na → NaCN + Na<sub>2</sub>S, and cyanide and sulphide are then found separately, as in the first four rows of the observation table below. The extract is <b>alkaline</b>, because the unused sodium reacts with water to give NaOH.',
      },
      { t: 'fig', id: 'c12-12-01-d1' },

      { t: 'part', title: 'Lassaigne’s test: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus and materials.</b> Ignition (fusion) tube, china dish, funnel and filter paper, tripod with wire gauze, tongs, test tubes, about 100 mg of the compound, about 30 mL of distilled water and a small piece of sodium kept under kerosene. Never use chloroform or carbon tetrachloride as the sample: it can explode with sodium. <b>Safety:</b> sodium reacts violently with water, so dry the ignition tube, use only a small piece of sodium and keep the dish covered when the red-hot tube goes in.',
      },
      {
        t: 'proc',
        title: 'Making the sodium extract',
        steps: [
          '<b>Cut the sodium.</b> Dry a small piece of sodium between the folds of filter paper, cut off a small clean piece and drop it into a dry ignition tube.',
          '<b>Melt it.</b> Heat the tube gently until the sodium melts into a shining globule, then let the tube cool slightly.',
          '<b>Add the compound.</b> Add a pinch of the compound so that it covers the sodium completely.',
          '<b>Fuse.</b> Heat gently. If a vigorous reaction starts, take the tube out of the flame until it dies down, then continue. When the compound has reacted completely, heat the tube strongly until it is red hot.',
          '<b>Quench.</b> Quickly drop the red-hot tube into a china dish holding about 15 mL of distilled water and cover the dish at once with wire gauze. Break the tube. Repeat with two or three more tubes if the extract is too dilute.',
          '<b>Boil and filter.</b> Boil the contents of the dish for about 10 minutes and filter. The filtrate is the sodium extract. It is alkaline.',
        ],
      },
      {
        t: 'proc',
        title: 'Testing the sodium extract (about 1 mL each time)',
        steps: [
          '<b>Nitrogen.</b> Add 3–4 drops of freshly prepared saturated ferrous sulphate (or a few crystals), boil and cool. A green precipitate of Fe(OH)<sub>2</sub> shows the solution is alkaline enough; if it does not appear, add a little NaOH, boil and cool again. Acidify with dilute H<sub>2</sub>SO<sub>4</sub>, warm, and add FeCl<sub>3</sub> solution.',
          '<b>Sulphur, when nitrogen is absent.</b> To one portion add a few drops of freshly prepared sodium nitroprusside. To another, acidify with acetic acid and add lead acetate solution.',
          '<b>Nitrogen and sulphur together.</b> Acidify with dilute HCl and add a few drops of FeCl<sub>3</sub> solution. Shake.',
          '<b>Halogens.</b> If nitrogen or sulphur is present, acidify with a few drops of concentrated HNO<sub>3</sub> and boil for 1–2 minutes. Cool, add AgNO<sub>3</sub> solution and note the precipitate; then test its solubility in ammonium hydroxide.',
          '<b>Layer test for Br and I.</b> Take a fresh portion (boiled with concentrated HNO<sub>3</sub> first if N or S is present), add a little CCl<sub>4</sub>, then excess chlorine water, and shake vigorously. Note the colour of the lower layer.',
        ],
      },

      { t: 'part', title: 'Lassaigne’s test: observations and calculation' },
      {
        t: 'table',
        title: 'Tests on the sodium extract',
        head: ['Element', 'Test', 'Positive result', 'Responsible species'],
        rows: [
          ['Nitrogen', 'FeSO<sub>4</sub>, boil; dilute H<sub>2</sub>SO<sub>4</sub>, warm; FeCl<sub>3</sub>', 'Prussian blue precipitate, or a green or blue colour', 'Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub>, from CN<sup>−</sup>'],
          ['Sulphur', 'Sodium nitroprusside', 'Purple colour', '[Fe(CN)<sub>5</sub>NOS]<sup>4−</sup>, from S<sup>2−</sup>'],
          ['Sulphur', 'Acetic acid, then lead acetate', 'Black precipitate', 'PbS'],
          ['Nitrogen and sulphur together', 'Dilute HCl, then FeCl<sub>3</sub>', 'Blood red colour', 'Fe(SCN)<sub>3</sub>, from SCN<sup>−</sup>'],
          ['Chlorine', 'Boil with HNO<sub>3</sub> if N or S is present; AgNO<sub>3</sub>', 'White precipitate, soluble in NH<sub>4</sub>OH', 'AgCl'],
          ['Bromine', 'As above', 'Yellow precipitate, partially soluble in NH<sub>4</sub>OH', 'AgBr'],
          ['Iodine', 'As above', 'Dark yellow precipitate, insoluble in NH<sub>4</sub>OH', 'AgI'],
          ['Bromine', 'CCl<sub>4</sub> and excess chlorine water, shake', 'Orange colour in the CCl<sub>4</sub> layer', 'Br<sub>2</sub>, from 2Br<sup>−</sup> + Cl<sub>2</sub>'],
          ['Iodine', 'CCl<sub>4</sub> and excess chlorine water, shake', 'Purple or violet colour in the CCl<sub>4</sub> layer', 'I<sub>2</sub>, from 2I<sup>−</sup> + Cl<sub>2</sub>'],
        ],
        note: 'Some older books call AgBr pale yellow and AgI yellow. The NCERT manual words are used here; the layer test settles a doubtful case.',
      },
      {
        t: 'p',
        html: '<b>Chemistry of the nitrogen test.</b> Cyanide from the extract and iron(II) hydroxide form the hexacyanidoferrate(II) ion. Some Fe<sup>2+</sup> is oxidised to Fe<sup>3+</sup> by air in the acid (or FeCl<sub>3</sub> is added), and Fe<sup>3+</sup> with hexacyanidoferrate(II) gives the Prussian blue.',
      },
      {
        t: 'formula',
        kicker: 'Prussian blue (nitrogen test)',
        main: '6NaCN + Fe(OH)<sub>2</sub> → Na<sub>4</sub>[Fe(CN)<sub>6</sub>] + 2NaOH<br>4Fe<sup>3+</sup> + 3[Fe(CN)<sub>6</sub>]<sup>4−</sup> → Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub>',
        legend: ['Prussian blue = Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub>'],
        note: 'With a little nitrogen the blue stays colloidal and the solution only looks green. With excess hexacyanidoferrate(II) a soluble blue complex forms instead of a precipitate.',
      },
      {
        t: 'formula',
        kicker: 'Sulphur and thiocyanate tests',
        main: 'S<sup>2−</sup> + [Fe(CN)<sub>5</sub>NO]<sup>2−</sup> → [Fe(CN)<sub>5</sub>NOS]<sup>4−</sup><br>Pb<sup>2+</sup> + S<sup>2−</sup> → PbS<br>Fe<sup>3+</sup> + 3SCN<sup>−</sup> → Fe(SCN)<sub>3</sub>',
        legend: ['Purple = [Fe(CN)<sub>5</sub>NOS]<sup>4−</sup>', 'PbS = black precipitate', 'Fe(SCN)<sub>3</sub> = blood red colour'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Why the halogen test needs boiling with HNO<sub>3</sub>.</b> If nitrogen and sulphur are present, AgNO<sub>3</sub> would also precipitate cyanide and sulphide (white AgCN, black Ag<sub>2</sub>S) and hide the halide. Boiling with nitric acid drives them off as gases:<br>NaCN + HNO<sub>3</sub> → NaNO<sub>3</sub> + HCN<br>Na<sub>2</sub>S + 2HNO<sub>3</sub> → 2NaNO<sub>3</sub> + H<sub>2</sub>S<br>The sulphide and cyanide must be removed first; the layer test is not disturbed by them.',
      },
      {
        t: 'formula',
        kicker: 'Halide tests',
        main: 'Ag<sup>+</sup> + X<sup>−</sup> → AgX<br>AgCl + 2NH<sub>3</sub> → [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> + Cl<sup>−</sup><br>2Br<sup>−</sup> + Cl<sub>2</sub> → 2Cl<sup>−</sup> + Br<sub>2</sub><br>2I<sup>−</sup> + Cl<sub>2</sub> → 2Cl<sup>−</sup> + I<sub>2</sub>',
        legend: ['X = Cl, Br or I'],
        note: 'Chlorine water is a stronger oxidising agent than bromine or iodine, so it frees them; they dissolve in CCl<sub>4</sub> and colour it.',
      },
      {
        t: 'ex',
        tag: 'Reading a set of observations',
        q: 'Tests on the sodium extract of an organic liquid gave these results. (a) FeSO<sub>4</sub>, boil, dilute H<sub>2</sub>SO<sub>4</sub>, FeCl<sub>3</sub>: a Prussian blue precipitate. (b) Sodium nitroprusside: a purple colour. (c) Dilute HCl and FeCl<sub>3</sub>: no blood red colour. (d) Boiled with concentrated HNO<sub>3</sub>, then AgNO<sub>3</sub>: a yellow precipitate, partially soluble in NH<sub>4</sub>OH. (e) The same solution with CCl<sub>4</sub> and excess chlorine water: an orange lower layer. Which elements are present?',
        steps: [
          'Test (a): Prussian blue means CN<sup>−</sup> was in the extract, so the compound contains <b>nitrogen</b> (and the carbon needed to make cyanide).',
          'Test (b): purple [Fe(CN)<sub>5</sub>NOS]<sup>4−</sup> means S<sup>2−</sup> was present, so the compound contains <b>sulphur</b>.',
          'Test (c): no blood red colour means there is no thiocyanate. That is not a contradiction: cyanide and sulphide are both present, so the sodium was in excess and the thiocyanate that may have formed was split into NaCN and Na<sub>2</sub>S.',
          'Test (d): the extract was first boiled with HNO<sub>3</sub> to remove CN<sup>−</sup> and S<sup>2−</sup> as HCN and H<sub>2</sub>S, so the silver precipitate is a halide. A yellow precipitate only partially soluble in NH<sub>4</sub>OH points to AgBr, not AgCl (white, soluble) and not AgI (dark yellow, insoluble).',
          'Test (e): 2Br<sup>−</sup> + Cl<sub>2</sub> → 2Cl<sup>−</sup> + Br<sub>2</sub>, and Br<sub>2</sub> in CCl<sub>4</sub> is orange. This settles the doubtful colour in (d).',
        ],
        ans: 'Nitrogen, sulphur and bromine are present.',
      },
      {
        t: 'ex',
        tag: 'A nitrogen test that fails',
        q: 'Hydrazine hydrochloride, NH<sub>2</sub>NH<sub>2</sub>·HCl, contains nitrogen. Why does Lassaigne’s test fail to show it, while urea, NH<sub>2</sub>CONH<sub>2</sub>, passes?',
        steps: [
          'The test depends on forming sodium cyanide, Na + C + N → NaCN. The cyanide ion needs carbon and nitrogen from the same compound.',
          'Urea has a C–N bond, so on fusion it gives NaCN and the Prussian blue appears.',
          'Hydrazine hydrochloride has no carbon at all. Fusing it with sodium cannot make cyanide, so no Prussian blue forms even though nitrogen is present.',
        ],
        ans: 'No carbon, so no cyanide: the test is negative for hydrazine hydrochloride.',
      },

      { t: 'part', title: 'Lassaigne’s test: result, precautions and sources of error' },
      {
        t: 'p',
        html: '<b>Result.</b> Write what the colours show in the form “The compound contains nitrogen, sulphur and bromine”, naming only the elements for which a confirmed test is positive.',
      },
      {
        t: 'p',
        html: '<b>Precautions.</b><br>• Sodium is highly reactive. Never touch it with the fingers, and dry it between filter paper before use.<br>• Use only distilled water for the extract and rinse the test tubes with distilled water before the halogen tests.<br>• The ignition tube must be dry. Moisture reacts vigorously with sodium.<br>• Take only a small piece of sodium; unreacted sodium reacts violently with water when the tube is broken in the dish.<br>• Dissolve silver halide precipitates in ammonium hydroxide only briefly: acidify those solutions with 2 M HNO<sub>3</sub> and discard them at once to avoid a serious explosion.<br>• Sodium nitroprusside solution is not stable, so use it freshly prepared.',
      },
      {
        t: 'p',
        html: '<b>Sources of error.</b> Too little sodium or an incomplete fusion leaves the compound partly unreacted. A weak extract (too much water) gives faint colours; repeating the fusion with more tubes concentrates it. Skipping the HNO<sub>3</sub> boil when N or S is present gives false silver precipitates.',
      },
      {
        t: 'p',
        html: '<b>Beilstein test (a quick check for halogens).</b> A clean copper wire is heated until it no longer colours the flame, dipped in the compound and heated again. A green or blue-green flame suggests a halogen, through volatile copper halides. It is very sensitive but not always reliable, because some halogen-free compounds such as urea, thiourea, pyridine, quinoline and purines also colour the flame.',
      },
      {
        t: 'mistakes',
        items: [
          '<b>Fusion needs carbon in the compound.</b> A compound with nitrogen but no carbon (hydrazine hydrochloride) gives no cyanide, so the nitrogen test is negative.',
          '<b>Blood red means a thiocyanate.</b> It needs both N and S and a limited amount of sodium. If sodium is in excess, you get Prussian blue and purple (or black PbS) separately, not blood red.',
          '<b>Boil with HNO<sub>3</sub> before AgNO<sub>3</sub>.</b> The aim is to remove CN<sup>−</sup> and S<sup>2−</sup>, not to make the solution clear. Skipping it gives false AgCN or Ag<sub>2</sub>S precipitates.',
          '<b>Colours of silver halides are close.</b> AgCl is white and dissolves in NH<sub>4</sub>OH, AgBr is yellow and only partly dissolves, AgI is dark yellow and does not dissolve. The orange (Br) or violet (I) CCl<sub>4</sub> layer is the decisive test.',
          '<b>Nitrogen test needs Fe<sup>3+</sup> too.</b> The ferric ions come from air oxidising ferrous sulphate in the acid, or from the FeCl<sub>3</sub> added. Without them the blue does not form.',
          '<b>The extract is alkaline.</b> The alkali is NaOH from leftover sodium, which is why Fe(OH)<sub>2</sub> precipitates when FeSO<sub>4</sub> is added.',
        ],
      },
      { t: 'fig', id: 'c12-12-01-d2' },

      { t: 'part', title: 'Hydroxyl groups: alcoholic and phenolic' },
      {
        t: 'p',
        html: '<b>Aim.</b> To detect an alcoholic or a phenolic –OH group and to tell a primary, a secondary and a tertiary alcohol apart.',
      },
      {
        t: 'p',
        html: '<b>Principle.</b> An alcohol R–OH is neutral. Three of its reactions are used: it forms a <b>red complex with ceric ammonium nitrate</b>; it reacts with HCl and zinc chloride (the <b>Lucas test</b>) at a rate that depends on whether it is primary, secondary or tertiary; and ethanol or a CH<sub>3</sub>CH(OH)R alcohol gives <b>iodoform</b> with iodine and alkali. A phenol has –OH on an aromatic ring. It is weakly acidic, so it dissolves in NaOH but not in NaHCO<sub>3</sub>, and it gives <b>coloured complexes with neutral ferric chloride</b>.',
      },
      {
        t: 'proc',
        title: 'Tests for the alcoholic –OH group',
        steps: [
          '<b>Ceric ammonium nitrate.</b> Dissolve the compound in a suitable solvent and take 1 mL. Add a few drops of ceric ammonium nitrate solution and look for a red colour.',
          '<b>Iodoform, first method.</b> Take 0.2 mL of the compound, add 10 mL of 10% aqueous KI and 10 mL of freshly prepared NaOCl solution, and warm gently.',
          '<b>Iodoform, second method.</b> Dissolve 4–5 drops of the compound in 2 mL of water (add dioxane drop by drop if it does not dissolve). Add 2 mL of 5% NaOH, then KI–iodine reagent dropwise, shaking, until the dark colour of iodine stays. Leave 2–3 minutes; if nothing separates, warm in a water bath at about 60 °C and add more reagent. Remove excess iodine with a few drops of NaOH, dilute with an equal volume of water and leave 10–15 minutes.',
          '<b>Lucas test.</b> To 1 mL of the alcohol add 10 mL of Lucas reagent (zinc chloride in concentrated HCl), shake well and note the time for two distinct layers to form.',
        ],
      },
      {
        t: 'proc',
        title: 'Tests for the phenolic –OH group',
        steps: [
          '<b>Neutral ferric chloride.</b> To 2 mL of an aqueous or alcoholic solution of the compound add neutral FeCl<sub>3</sub> dropwise and note the colour. Neutral FeCl<sub>3</sub> is made by adding dilute NaOH to FeCl<sub>3</sub> drop by drop until a small permanent brown precipitate appears, then filtering.',
          '<b>Phthalein dye test.</b> Heat 0.1 g of the compound with 0.1 g of phthalic anhydride and 1–2 drops of concentrated H<sub>2</sub>SO<sub>4</sub> in a dry test tube for about 1 minute in an oil bath. Cool, and pour carefully into 15 mL of dilute NaOH in a beaker.',
        ],
      },
      { t: 'part', title: 'Hydroxyl groups: observations and chemistry' },
      {
        t: 'table',
        title: 'Results of the hydroxyl tests',
        head: ['Test', 'Positive result', 'Notes'],
        rows: [
          ['Ceric ammonium nitrate', 'Red colour (complex)', 'Colour fades on standing and when excess reagent is added'],
          ['Lucas, tertiary alcohol', 'Layers separate immediately', 'Alkyl halide is insoluble in the reagent'],
          ['Lucas, secondary alcohol', 'Layers separate in about 1–5 minutes', 'Reaction slower'],
          ['Lucas, primary alcohol', 'No layers separate', 'Reaction may take 10 minutes to several days'],
          ['Iodoform', 'Yellow crystals or precipitate', 'Ethanol and CH<sub>3</sub>CH(OH)R alcohols'],
          ['Neutral FeCl<sub>3</sub>, phenol', 'Violet colour', 'Complex ion'],
          ['Neutral FeCl<sub>3</sub>, resorcinol or a cresol', 'Violet or blue colour', 'Not a single colour for every phenol'],
          ['Neutral FeCl<sub>3</sub>, catechol', 'Green that darkens quickly', ''],
          ['Neutral FeCl<sub>3</sub>, 1- and 2-naphthol', 'No characteristic colour', 'A negative that does not rule out a phenol'],
          ['Phthalein dye test', 'Pink, blue, green or red in dilute NaOH', 'Colour vanishes in a large excess of NaOH'],
        ],
        note: 'In the phthalein test phenol gives dark pink (phenolphthalein), o-cresol red, m-cresol bluish-purple, catechol usually blue (slow to appear), resorcinol green fluorescence, and p-cresol no colour.',
      },
      {
        t: 'formula',
        kicker: 'Ceric ammonium nitrate test',
        main: '(NH<sub>4</sub>)<sub>2</sub>[Ce(NO<sub>3</sub>)<sub>6</sub>] + 3ROH → [Ce(NO<sub>3</sub>)<sub>4</sub>(ROH)<sub>3</sub>] + 2NH<sub>4</sub>NO<sub>3</sub>',
        legend: ['R = alkyl group', 'Red complex = [Ce(NO<sub>3</sub>)<sub>4</sub>(ROH)<sub>3</sub>]'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Lucas test',
        main: 'R<sub>2</sub>CH–OH + HCl → R<sub>2</sub>CH–Cl + H<sub>2</sub>O<br>R<sub>3</sub>C–OH + HCl → R<sub>3</sub>C–Cl + H<sub>2</sub>O',
        legend: ['R = alkyl group'],
        note: 'ZnCl<sub>2</sub> is the catalyst in the reagent. A primary alcohol RCH<sub>2</sub>OH reacts very slowly or not at all. The alcohol dissolves in the reagent but the alkyl chloride does not, so two layers show that a reaction took place; the test works only for alcohols that dissolve in the reagent.',
      },
      {
        t: 'formula',
        kicker: 'Iodoform test',
        main: 'CH<sub>3</sub>CH<sub>2</sub>OH + 4I<sub>2</sub> + 6NaOH → CHI<sub>3</sub> + HCOONa + 5NaI + 5H<sub>2</sub>O<br>R–CO–CH<sub>3</sub> + 3I<sub>2</sub> + 4NaOH → CHI<sub>3</sub> + R–COONa + 3NaI + 3H<sub>2</sub>O',
        legend: ['R = alkyl or aryl group', 'CHI<sub>3</sub> = iodoform, yellow solid'],
        note: 'The reagent first oxidises a CH<sub>3</sub>CH(OH)– group to CH<sub>3</sub>CO–, then replaces the three α-hydrogens by iodine, and the C–C bond breaks to give iodoform. Methyl ketones and acetaldehyde also respond.',
      },
      {
        t: 'formula',
        kicker: 'Phenol and ferric chloride',
        main: '6C<sub>6</sub>H<sub>5</sub>OH + FeCl<sub>3</sub> → [Fe(C<sub>6</sub>H<sub>5</sub>O)<sub>6</sub>]<sup>3−</sup> + 3HCl + 3H<sup>+</sup>',
        legend: ['Violet = [Fe(C<sub>6</sub>H<sub>5</sub>O)<sub>6</sub>]<sup>3−</sup>'],
        note: 'Phenols dissolve in NaOH but are too weakly acidic to dissolve in NaHCO<sub>3</sub>. Strongly acidic phenols such as 2,4-dinitrophenol and 2,4,6-trinitrophenol do dissolve in NaHCO<sub>3</sub>.',
      },
      {
        t: 'ex',
        tag: 'Naming the alcohol from the Lucas and iodoform tests',
        q: 'An unknown alcohol of formula C<sub>3</sub>H<sub>8</sub>O gives a cloudy second layer with Lucas reagent after about 3 minutes and a yellow precipitate in the iodoform test. Identify it.',
        steps: [
          'C<sub>3</sub>H<sub>8</sub>O has two alcohol isomers: propan-1-ol, CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH, and propan-2-ol, CH<sub>3</sub>CH(OH)CH<sub>3</sub>.',
          'Layers separating in 1–5 minutes is the secondary alcohol result; a primary alcohol would show no layers. That points to propan-2-ol.',
          'Propan-2-ol contains the CH<sub>3</sub>CH(OH)– group, so it is oxidised to propanone, CH<sub>3</sub>COCH<sub>3</sub>, and then iodinated to CHI<sub>3</sub>. Propan-1-ol has no CH<sub>3</sub>CH(OH)– group and gives no iodoform.',
          'Both observations agree on the same alcohol.',
        ],
        ans: 'Propan-2-ol, CH<sub>3</sub>CH(OH)CH<sub>3</sub>.',
      },
      {
        t: 'p',
        html: '<b>Result, precautions and errors.</b> State the group found: “An alcoholic –OH group is present; the Lucas result shows it is secondary” or “A phenolic –OH group is present.” Use freshly prepared reagents. Use a neutral, very dilute FeCl<sub>3</sub> solution (an acidic one gives wrong colours). Do not add excess ceric ammonium nitrate, which removes the red colour. Phenol is toxic and corrosive, so handle it with care. A positive FeCl<sub>3</sub> test with a compound that also turns blue litmus red can mean a phenol or a carboxylic acid; the NaHCO<sub>3</sub> test below separates them.',
      },

      { t: 'part', title: 'Carbonyl group: aldehydes and ketones' },
      {
        t: 'p',
        html: '<b>Aim.</b> To detect the carbonyl group >C=O, and to tell an aldehyde from a ketone.',
      },
      {
        t: 'p',
        html: '<b>Principle.</b> Two reactions of the carbonyl group are used. <b>Addition</b> of an ammonia derivative such as 2,4-dinitrophenylhydrazine (2,4-DNP) gives a coloured hydrazone with both aldehydes and ketones. <b>Oxidation</b> separates them: an aldehyde is oxidised easily and so reduces mild oxidising reagents, while a ketone needs a much stronger oxidant and does not. Tollens’ reagent is an alkaline solution of silver ion complexed with ammonia. Fehling’s reagent is an alkaline Cu<sup>2+</sup> solution complexed with tartrate; Benedict’s reagent is the same idea with citrate, in one solution that keeps better. Schiff’s reagent is a colourless solution of the dye p-rosaniline hydrochloride, decolourised with sodium sulphite or SO<sub>2</sub>, and aldehydes restore a pink colour.',
      },
      {
        t: 'proc',
        title: 'Tests for the carbonyl group',
        steps: [
          '<b>2,4-DNP (aldehydes and ketones).</b> Take 2–3 drops of the liquid, or a few crystals dissolved in 2–3 mL of alcohol. Add a few drops of alcoholic 2,4-dinitrophenylhydrazine. If nothing appears at room temperature, warm in a water bath for a few minutes and cool.',
          '<b>Schiff’s test.</b> Take 3–4 drops of the liquid (or crystals dissolved in alcohol) and add 2–3 drops of Schiff’s reagent.',
          '<b>Fehling’s test.</b> Mix about 1 mL each of Fehling’s solution A (aqueous CuSO<sub>4</sub>) and Fehling’s solution B (alkaline sodium potassium tartrate, Rochelle salt) in a clean tube. The reagent is freshly mixed because the mixture deteriorates on keeping. Add 2–3 drops of the compound (or about 2 mL of its solution) and heat in a water bath for about 2 minutes.',
          '<b>Benedict’s test.</b> Add 5 drops of the compound or its solution to 2 mL of Benedict’s reagent and place the tube in a boiling water bath for 5 minutes.',
          '<b>Tollens’ test.</b> To 1 mL of freshly prepared AgNO<sub>3</sub> solution (about 2%) add 1–2 drops of NaOH; a dark brown precipitate of silver oxide forms. Dissolve it with ammonium hydroxide added dropwise. Add the compound and warm in a water bath for about 5 minutes.',
        ],
      },
      {
        t: 'table',
        title: 'Results of the carbonyl tests',
        head: ['Test', 'Aldehyde', 'Ketone'],
        rows: [
          ['2,4-DNP', 'Yellow, orange or orange-red precipitate', 'Same'],
          ['Schiff’s reagent', 'Pink colour', 'No colour'],
          ['Fehling’s solution', 'Brick red precipitate of Cu<sub>2</sub>O (aliphatic aldehydes only)', 'No change'],
          ['Benedict’s reagent', 'Orange-red precipitate', 'No change'],
          ['Tollens’ reagent', 'Silver mirror on the inside of the tube', 'No mirror'],
        ],
        note: 'Aromatic aldehydes, such as benzaldehyde, do not give Fehling’s test. Methyl ketones also give the iodoform test of the previous part.',
      },
      {
        t: 'formula',
        kicker: 'Carbonyl and 2,4-DNP',
        main: 'R<sub>2</sub>C=O + H<sub>2</sub>N–NH–C<sub>6</sub>H<sub>3</sub>(NO<sub>2</sub>)<sub>2</sub> → R<sub>2</sub>C=N–NH–C<sub>6</sub>H<sub>3</sub>(NO<sub>2</sub>)<sub>2</sub> + H<sub>2</sub>O',
        legend: ['R = alkyl, aryl or H', 'R<sub>2</sub>C=N–NH–Ar = 2,4-dinitrophenylhydrazone'],
        note: 'The reaction is catalysed by acid or base but fails in strongly acidic or strongly basic solution, so the pH has to be controlled.',
      },
      {
        t: 'formula',
        kicker: 'Tollens’ and Fehling’s tests',
        main: 'RCHO + 2[Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> + 2OH<sup>−</sup> → 2Ag + 3NH<sub>3</sub> + H<sub>2</sub>O + RCOONH<sub>4</sub><br>RCHO + 2Cu<sup>2+</sup> + 5OH<sup>−</sup> → RCOO<sup>−</sup> + Cu<sub>2</sub>O + 3H<sub>2</sub>O',
        legend: ['R = alkyl or aryl group', 'Ag = silver mirror', 'Cu<sub>2</sub>O = brick red solid'],
        note: 'The second equation uses Cu<sup>2+</sup> as it is complexed with tartrate in the reagent. In Benedict’s test, Cu<sup>2+</sup> is reduced to Cu<sup>+</sup> in the same way.',
      },
      {
        t: 'ex',
        tag: 'Telling two C3 carbonyl compounds apart',
        q: 'Propanal, CH<sub>3</sub>CH<sub>2</sub>CHO, and propanone, CH<sub>3</sub>COCH<sub>3</sub>, are both liquids that give an orange precipitate with 2,4-DNP. Give two tests that tell them apart, with the result for each compound.',
        steps: [
          'The 2,4-DNP result is the same for both, because both contain >C=O. It cannot separate them.',
          'Tollens’ test: propanal is oxidised by [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>, which is reduced to a silver mirror. Propanone gives no mirror.',
          'Schiff’s test: propanal gives a pink colour; propanone does not.',
          'Iodoform is the one test that points the other way. Propanone has a CH<sub>3</sub>CO– group and gives yellow CHI<sub>3</sub>; propanal, CH<sub>3</sub>CH<sub>2</sub>CHO, has no CH<sub>3</sub>CO– group and does not.',
        ],
        ans: 'Propanal gives a silver mirror (Tollens’) and pink (Schiff’s); propanone gives neither but gives iodoform.',
      },
      {
        t: 'p',
        html: '<b>Result, precautions and errors.</b> Use freshly prepared reagents. Do not heat the reaction mixture directly on a flame: use a water bath. After the Tollens’ test destroy the silver mirror with dilute nitric acid and flush the solution away with plenty of water. A positive 2,4-DNP test only shows a carbonyl group; the group is called an aldehyde only if one of the oxidation tests is also positive. Formic acid, H–COOH, gives a positive Tollens’ test because it still carries an –CHO group.',
      },

      { t: 'part', title: 'Carboxyl group' },
      {
        t: 'p',
        html: '<b>Aim.</b> To detect the carboxyl group –COOH. Its name joins carbonyl and hydroxyl, the two groups it contains.',
      },
      {
        t: 'p',
        html: '<b>Principle.</b> Carboxylic acids turn blue litmus red and react with sodium hydrogencarbonate to give effervescence of CO<sub>2</sub>. A phenol also turns litmus red, but it is too weak an acid to decompose NaHCO<sub>3</sub>; this is the test that separates a carboxylic acid from a phenol. Acids also react with an alcohol, with concentrated H<sub>2</sub>SO<sub>4</sub> as catalyst, to give a sweet-smelling ester.',
      },
      {
        t: 'proc',
        title: 'Tests for the carboxyl group',
        steps: [
          '<b>Litmus test.</b> Put a drop of the liquid, or of its solution, with a glass rod on moist blue litmus paper. A change to red shows a carboxylic acid or a phenol.',
          '<b>Sodium hydrogencarbonate test.</b> Take 2 mL of saturated aqueous NaHCO<sub>3</sub> and add a few drops of the liquid or a few crystals of the solid, slowly, so that the effervescence can be seen. Brisk effervescence of CO<sub>2</sub> shows a carboxyl group.',
          '<b>Ester test.</b> Warm about 0.1 g of the compound with 1 mL of ethanol or methanol and 2–3 drops of concentrated H<sub>2</sub>SO<sub>4</sub> for 10–15 minutes in a hot water bath at about 50 °C. Pour the mixture into aqueous sodium carbonate, which removes excess acids. A sweet smell shows an ester has formed.',
        ],
      },
      {
        t: 'formula',
        kicker: 'Carboxylic acid tests',
        main: 'RCOOH + NaHCO<sub>3</sub> → RCOONa + H<sub>2</sub>O + CO<sub>2</sub><br>RCOOH + R′OH ⇌ RCOOR′ + H<sub>2</sub>O',
        legend: ['R = alkyl or aryl group', 'R′ = alkyl group of the alcohol'],
        note: 'Concentrated H<sub>2</sub>SO<sub>4</sub> and warming are used for the esterification. CO<sub>2</sub> turns lime water milky.',
      },

      { t: 'part', title: 'Amino group' },
      {
        t: 'p',
        html: '<b>Aim.</b> To detect the amino group –NH<sub>2</sub> and to tell a primary aromatic amine from other amines.',
      },
      {
        t: 'p',
        html: '<b>Principle.</b> Amino compounds are basic, so they react with acids to form salts that dissolve in water. An amine is primary (–NH<sub>2</sub>, two hydrogens on N), secondary (–NH–) or tertiary (no H on N). Two tests are specific. In the <b>carbylamine test</b> an aliphatic or aromatic <b>primary</b> amine is heated with chloroform and alcoholic KOH to give an isocyanide with an obnoxious smell. In the <b>azo dye test</b> an <b>aromatic primary</b> amine is diazotised at 0–5 °C with nitrous acid made from NaNO<sub>2</sub> and HCl, and the diazonium salt couples with β-naphthol to give a scarlet red dye.',
      },
      {
        t: 'proc',
        title: 'Tests for the amino group',
        steps: [
          '<b>Solubility.</b> To 1 mL of the compound add a few drops of dilute HCl and shake. Dissolving shows an amine (anilinium chloride in the case of aniline).',
          '<b>Carbylamine.</b> To 2–3 drops of the compound add 2–3 drops of chloroform and an equal volume of 0.5 M alcoholic KOH. Heat gently. A foul smell shows a primary amine. <b>Safety:</b> the isocyanide is highly poisonous; do not breathe the vapour, and destroy it at once with concentrated HCl.',
          '<b>Azo dye, part 1.</b> Dissolve about 0.2 g of the compound in 2 mL of dilute HCl and cool the tube in ice. Add 2 mL of cold 2.5% NaNO<sub>2</sub> solution.',
          '<b>Azo dye, part 2.</b> Dissolve about 0.2 g of β-naphthol in dilute NaOH in another tube, cool it, and add the diazonium chloride solution slowly into it, shaking.',
        ],
      },
      {
        t: 'formula',
        kicker: 'Amine tests',
        main: 'RNH<sub>2</sub> + CHCl<sub>3</sub> + 3KOH → RNC + 3KCl + 3H<sub>2</sub>O<br>C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> + HCl → C<sub>6</sub>H<sub>5</sub>NH<sub>3</sub><sup>+</sup> + Cl<sup>−</sup><br>C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> + NaNO<sub>2</sub> + 2HCl → C<sub>6</sub>H<sub>5</sub>N<sub>2</sub>Cl + NaCl + 2H<sub>2</sub>O',
        legend: ['R = alkyl or aryl group', 'RNC = isocyanide (carbylamine)', 'C<sub>6</sub>H<sub>5</sub>N<sub>2</sub>Cl = diazonium chloride'],
        note: 'The diazonium salt is unstable above 5 °C. With alkaline β-naphthol it gives a scarlet red azo dye that is only sparingly soluble in water.',
      },
      {
        t: 'table',
        title: 'Summary of the group tests',
        head: ['Group', 'Test', 'Positive result'],
        rows: [
          ['Alcoholic –OH', 'Ceric ammonium nitrate', 'Red colour'],
          ['Phenolic –OH', 'Neutral FeCl<sub>3</sub>', 'Violet, blue, green or red colour'],
          ['Aldehyde', 'Tollens’, Fehling’s, Benedict’s, Schiff’s', 'Silver mirror, brick red, orange-red, pink'],
          ['Aldehyde or ketone', '2,4-DNP', 'Yellow, orange or orange-red precipitate'],
          ['Carboxyl –COOH', 'NaHCO<sub>3</sub>', 'Brisk effervescence of CO<sub>2</sub>'],
          ['Primary amino –NH<sub>2</sub>', 'Carbylamine test', 'Obnoxious smell of isocyanide'],
          ['Aromatic primary amine', 'Diazotisation, then β-naphthol', 'Scarlet red dye'],
        ],
        note: null,
      },
      { t: 'fig', id: 'c12-12-01-d3' },
      {
        t: 'ex',
        tag: 'Identify the group from three observations',
        q: 'A solid compound of formula C<sub>7</sub>H<sub>6</sub>O<sub>2</sub> turns blue litmus red and gives brisk effervescence with saturated NaHCO<sub>3</sub>. With neutral FeCl<sub>3</sub> it gives no violet colour. Which group does it contain, and which compound of this formula is it likely to be?',
        steps: [
          'Litmus turning red shows a carboxylic acid or a phenol.',
          'Brisk CO<sub>2</sub> with NaHCO<sub>3</sub> means the compound is a stronger acid than carbonic acid. A phenol does not do this (except a strongly acidic nitrophenol), so the group is –COOH.',
          'No violet colour with neutral FeCl<sub>3</sub> agrees: no phenolic –OH is present.',
          'C<sub>7</sub>H<sub>6</sub>O<sub>2</sub> is benzene ring (C<sub>6</sub>H<sub>5</sub>–) plus –COOH, that is benzoic acid.',
        ],
        ans: 'A carboxyl group; the compound is benzoic acid, C<sub>6</sub>H<sub>5</sub>COOH.',
      },
      { t: 'part', title: 'Functional-group tests: result, precautions and exam traps' },
      {
        t: 'p',
        html: '<b>Result.</b> Name the group and the evidence: “The compound contains a carboxyl group: it turns blue litmus red and gives brisk effervescence with NaHCO<sub>3</sub>.” One test is rarely enough, so each group needs two confirmatory observations.<br><br><b>Precautions.</b> Use freshly prepared reagents. Perform each test with the quantities given, and note a negative as carefully as a positive. Keep the test tubes clean and dry.',
      },
      {
        t: 'mistakes',
        items: [
          '<b>Lucas test is for alcohols that dissolve in the reagent.</b> It depends on a second layer of insoluble alkyl chloride, so it does not work on alcohols that do not dissolve. Tertiary reacts at once, secondary in about 1–5 minutes, primary shows no layers.',
          '<b>Iodoform.</b> Among primary alcohols only ethanol gives it; the others need a CH<sub>3</sub>CH(OH)– group (as in propan-2-ol) or a CH<sub>3</sub>CO– group. Propan-1-ol, methanol and tertiary alcohols give none.',
          '<b>Excess ceric ammonium nitrate removes the red colour</b> of the alcohol complex, and the colour also fades on standing.',
          '<b>FeCl<sub>3</sub> must be neutral.</b> Naphthols give no characteristic colour, so a negative FeCl<sub>3</sub> test does not exclude every phenol.',
          '<b>Phenol or acid?</b> Both turn litmus red. Only the carboxylic acid decomposes NaHCO<sub>3</sub>, except strongly acidic nitrophenols such as 2,4,6-trinitrophenol, which do too.',
          '<b>Fehling’s does not test aromatic aldehydes</b>, but Tollens’ does. Ketones give neither, and 2,4-DNP is positive for both aldehydes and ketones.',
          '<b>Formic acid</b> is a carboxylic acid that also gives a positive Tollens’ test, because it carries –CHO.',
          '<b>Carbylamine is for primary amines only</b> (aliphatic and aromatic); the azo dye test is for aromatic primary amines only, at 0–5 °C, with the diazonium solution added into alkaline β-naphthol and never the other way round.',
        ],
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Name the compound formed in the sodium extract by a compound containing both N and S when the amount of sodium is small, and give the colour it produces with FeCl<sub>3</sub>.',
            a: 'Sodium thiocyanate, NaSCN. With FeCl<sub>3</sub> in acid it gives the blood red Fe(SCN)<sub>3</sub>: Fe<sup>3+</sup> + 3SCN<sup>−</sup> → Fe(SCN)<sub>3</sub>.',
          },
          {
            q: '[CBSE] Why must the sodium extract be boiled with concentrated HNO<sub>3</sub> before AgNO<sub>3</sub> is added in the test for halogens, if the compound also contains nitrogen and sulphur? Give the two equations.',
            a: 'To remove CN<sup>−</sup> and S<sup>2−</sup>, which would give white AgCN and black Ag<sub>2</sub>S with AgNO<sub>3</sub>. NaCN + HNO<sub>3</sub> → NaNO<sub>3</sub> + HCN; Na<sub>2</sub>S + 2HNO<sub>3</sub> → 2NaNO<sub>3</sub> + H<sub>2</sub>S.',
          },
          {
            q: '[JEE Main] In the nitrogen test with FeSO<sub>4</sub>, the solution is acidified with dilute H<sub>2</sub>SO<sub>4</sub> before FeCl<sub>3</sub> is added. What is the function of the acid, and where does the Fe<sup>3+</sup> needed for the Prussian blue come from if no FeCl<sub>3</sub> is added?',
            a: 'The acid dissolves the iron(II) and iron(III) hydroxides that would otherwise colour the solution and hide the blue. Fe<sup>3+</sup> comes from partial oxidation of Fe<sup>2+</sup> by air in the acid solution, which is why FeCl<sub>3</sub> is sometimes unnecessary.',
          },
          {
            q: '[JEE Main] Give one test each that distinguishes (a) phenol from benzoic acid and (b) aniline from N,N-dimethylaniline. State what is seen for each compound.',
            a: '(a) Saturated NaHCO<sub>3</sub>: benzoic acid gives brisk CO<sub>2</sub> effervescence, phenol does not (neutral FeCl<sub>3</sub> also colours phenol violet). (b) Carbylamine test: aniline, a primary amine, gives the obnoxious smell of phenyl isocyanide; N,N-dimethylaniline, a tertiary amine, gives none.',
          },
          {
            q: '[NEET] Write the balanced equation for the iodoform reaction of ethanol with iodine and NaOH, and name which functional unit of the molecule is responsible.',
            a: 'CH<sub>3</sub>CH<sub>2</sub>OH + 4I<sub>2</sub> + 6NaOH → CHI<sub>3</sub> + HCOONa + 5NaI + 5H<sub>2</sub>O. The CH<sub>3</sub>CH(OH)– unit: it is oxidised to CH<sub>3</sub>CHO, the three α-hydrogens are iodinated and the C–C bond breaks.',
          },
          {
            q: '[JEE Main] An organic compound gives an orange precipitate with 2,4-DNP, no silver mirror with Tollens’ reagent, no pink colour with Schiff’s reagent, and a yellow precipitate in the iodoform test. Name the group present and a compound that fits.',
            a: 'A ketone carbonyl group with a CH<sub>3</sub>CO– unit: for example propanone. 2,4-DNP shows >C=O; the negative Tollens’ and Schiff’s tests rule out an aldehyde; iodoform shows the CH<sub>3</sub>CO– group.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Lassaigne’s test for nitrogen will fail with:',
        opts: [
          { label: 'Urea, NH<sub>2</sub>CONH<sub>2</sub>', nudge: '<b>(a)</b> urea contains both carbon and nitrogen, so it fuses to NaCN and gives Prussian blue; the test does not fail.' },
          { label: 'Hydrazine hydrochloride, NH<sub>2</sub>NH<sub>2</sub>·HCl', nudge: null },
          { label: 'Aniline, C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>', nudge: '<b>(c)</b> aniline has a C–N bond and carbon in the molecule, so NaCN forms on fusion and the test is positive.' },
          { label: 'Acetamide, CH<sub>3</sub>CONH<sub>2</sub>', nudge: '<b>(d)</b> acetamide contains carbon and nitrogen together, so cyanide forms and the test works.' },
        ],
        correct: 1,
        solution: 'The nitrogen is detected as cyanide, which needs carbon and nitrogen from the same compound. Hydrazine hydrochloride has no carbon, so it cannot form NaCN and the test fails even though the compound contains nitrogen.',
      },
      {
        t: 'mcq',
        q: 'The sodium extract of a compound is acidified with dilute HCl and a few drops of FeCl<sub>3</sub> are added. A blood red colour appears. This shows:',
        opts: [
          { label: 'nitrogen only, as NaCN', nudge: '<b>(a)</b> cyanide alone gives Prussian blue (or green) after FeSO<sub>4</sub> and acid, not a blood red colour.' },
          { label: 'sulphur only, as Na<sub>2</sub>S', nudge: '<b>(b)</b> sulphide alone gives a purple colour with nitroprusside or black PbS with lead acetate; it does not give blood red with FeCl<sub>3</sub>.' },
          { label: 'both nitrogen and sulphur, as sodium thiocyanate', nudge: null },
          { label: 'a halogen, as a sodium halide', nudge: '<b>(d)</b> halides are tested with AgNO<sub>3</sub> or by the CCl<sub>4</sub> layer test; they do not form a coloured complex with FeCl<sub>3</sub>.' },
        ],
        correct: 2,
        solution: 'Fe<sup>3+</sup> + 3SCN<sup>−</sup> → Fe(SCN)<sub>3</sub>, the blood red thiocyanate. SCN<sup>−</sup> contains both N and S, so the colour shows both elements together.',
      },
      {
        t: 'mcq',
        q: 'To the sodium extract of a halogen compound, chlorine water and CCl<sub>4</sub> are added and the mixture is shaken. The lower layer turns purple. The halogen is:',
        opts: [
          { label: 'chlorine', nudge: '<b>(a)</b> chlorine water adds Cl<sub>2</sub> but gives no colour change that identifies Cl; chlorine in the compound is found as a white precipitate with AgNO<sub>3</sub>.' },
          { label: 'bromine', nudge: '<b>(b)</b> bromine would give an orange CCl<sub>4</sub> layer, not purple.' },
          { label: 'iodine', nudge: null },
          { label: 'sulphur', nudge: '<b>(d)</b> sulphur is not a halogen and gives no layer colour with chlorine water; it is tested with nitroprusside or lead acetate.' },
        ],
        correct: 2,
        solution: '2I<sup>−</sup> + Cl<sub>2</sub> → 2Cl<sup>−</sup> + I<sub>2</sub>; iodine dissolves in CCl<sub>4</sub> and gives the purple or violet layer.',
      },
      {
        t: 'mcq',
        q: 'Which alcohol gives turbidity (a second layer) immediately with Lucas reagent at room temperature?',
        opts: [
          { label: 'Butan-1-ol', nudge: '<b>(a)</b> a primary alcohol; layers do not separate, or only after a very long time.' },
          { label: 'Butan-2-ol', nudge: '<b>(b)</b> a secondary alcohol; the layers take about 1–5 minutes, not immediately.' },
          { label: '2-Methylpropan-2-ol', nudge: null },
          { label: '2-Methylpropan-1-ol', nudge: '<b>(d)</b> a primary alcohol (even though branched); it reacts very slowly with Lucas reagent.' },
        ],
        correct: 2,
        solution: '2-Methylpropan-2-ol is tertiary, and tertiary alcohols give the insoluble alkyl chloride and separate layers almost at once.',
      },
      {
        t: 'mcq',
        q: 'A compound gives an orange precipitate with 2,4-DNP, a silver mirror with Tollens’ reagent and a pink colour with Schiff’s reagent, but no brick red precipitate with Fehling’s solution. The compound is most likely:',
        opts: [
          { label: 'Propanone', nudge: '<b>(a)</b> a ketone does not give the silver mirror or the pink Schiff’s colour.' },
          { label: 'Ethanal', nudge: '<b>(b)</b> an aliphatic aldehyde would also give the brick red precipitate with Fehling’s solution.' },
          { label: 'Benzaldehyde', nudge: null },
          { label: 'Ethanoic acid', nudge: '<b>(d)</b> a carboxylic acid does not react with 2,4-DNP, give a mirror or colour Schiff’s reagent.' },
        ],
        correct: 2,
        solution: 'It is an aldehyde, since Tollens’ and Schiff’s are positive. Fehling’s is negative, which fits an aromatic aldehyde such as benzaldehyde.',
      },
      {
        t: 'mcq',
        q: 'A solid turns blue litmus red, gives no effervescence with saturated NaHCO<sub>3</sub>, and gives a violet colour with neutral FeCl<sub>3</sub>. It is most likely:',
        opts: [
          { label: 'Benzoic acid', nudge: '<b>(a)</b> benzoic acid would give brisk effervescence with NaHCO<sub>3</sub>.' },
          { label: 'Phenol', nudge: null },
          { label: 'Aniline', nudge: '<b>(c)</b> aniline is basic: it does not turn blue litmus red and it dissolves in dilute HCl.' },
          { label: 'Benzaldehyde', nudge: '<b>(d)</b> an aldehyde does not turn blue litmus red and does not give a violet colour with FeCl<sub>3</sub>.' },
        ],
        correct: 1,
        solution: 'A weak acid that cannot decompose NaHCO<sub>3</sub> but gives a violet complex with neutral FeCl<sub>3</sub> is a phenol.',
      },
    ],
  },

  // ───────────────────────── Topic 03 ─────────────────────────
  {
    n: '03',
    title: 'Volumetric analysis',
    kalam: 'A burette, a pipette and one sharp colour change turn a measured volume into a concentration.',
    blocks: [
      { t: 'part', title: 'Titration: vocabulary, standards and the working formula' },
      {
        t: 'p',
        html: '<b>Aim.</b> To find the concentration of an unknown solution from the volume of a solution of known concentration that reacts with it exactly.',
      },
      {
        t: 'p',
        html: 'A <b>titration</b> adds a solution of accurately known concentration, the <b>titrant</b> (standard solution), from a burette to a measured volume of the substance being determined, the <b>titrand</b>, until the reaction is just complete. That point is the <b>equivalence point</b> (theoretical or stoichiometric end point). It is recognised by a colour change, either of an added <b>indicator</b> or of the reagent itself, called the <b>end point</b>. Any gap between the visible end point and the true equivalence point is the <b>titration error</b>. Three or more readings that agree closely are <b>concordant readings</b>; the volume used in the calculation is their value, and a rough first titration only tells you where to slow down.',
      },
      {
        t: 'p',
        html: '<b>Primary and secondary standards.</b> A primary standard is pure (impurities not more than 0.01–0.02%), stable in air (not hygroscopic, not oxidised, not affected by CO<sub>2</sub>), of high molar mass so that weighing errors are small, and readily soluble; its reaction must be instantaneous and stoichiometric. Its standard solution is made by weighing directly. NCERT lists sodium carbonate, sodium tetraborate, potassium hydrogenphthalate, oxalic acid and ferrous ammonium sulphate (Mohr’s salt) as usable primary standards. A <b>secondary standard</b> has to be standardised against a primary one first and cannot be made by direct weighing. Sodium hydroxide and potassium permanganate are examples.',
      },
      {
        t: 'formula',
        kicker: 'Titration working formulas',
        main: '<i>N</i> = <i>a</i><i>M</i><br><i>a</i><sub>1</sub><i>M</i><sub>1</sub><i>V</i><sub>1</sub> = <i>a</i><sub>2</sub><i>M</i><sub>2</sub><i>V</i><sub>2</sub><br>Strength (g L<sup>−1</sup>) = <i>M</i> × molar mass',
        legend: [
          '<i>N</i> = normality',
          '<i>M</i> = molarity',
          '<i>a</i> = n-factor',
          '<i>V</i> = volume',
        ],
        note: 'The n-factor <i>a</i> is the basicity of an acid, the acidity of a base, or the number of electrons gained or lost per formula unit in a redox reaction. Subscript 1 is one solution, 2 the other. The volumes must be in the same unit.',
      },
      {
        t: 'p',
        html: '<b>Equivalent masses.</b> Equivalent mass of an acid = molar mass/basicity, of a base = molar mass/acidity. For oxalic acid dihydrate, (COOH)<sub>2</sub>·2H<sub>2</sub>O, the molar mass is 126 g mol<sup>−1</sup> and the basicity is 2, so the equivalent mass is 63. For NaOH, molar mass 40, equivalent mass 40. For Mohr’s salt, FeSO<sub>4</sub>(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>·6H<sub>2</sub>O, the molar mass is 392 g mol<sup>−1</sup> and one Fe<sup>2+</sup> gives up one electron, so the equivalent mass is 392. For KMnO<sub>4</sub> in acid, 158/5 = 31.6.',
      },

      { t: 'part', title: 'Indicators and the choice of indicator' },
      {
        t: 'p',
        html: '<b>Phenolphthalein</b> is a weak acid, HPh. In acid solution it stays un-ionised and is colourless; in alkali the H<sup>+</sup> it releases is removed by OH<sup>−</sup>, so ionisation rises and the Ph<sup>−</sup> ion gives a <b>pink</b> colour. <b>Methyl orange</b> is a weak base, yellow in its un-ionised form; the anion accepts a proton and changes from the benzenoid to the deeper-coloured quinonoid form, giving a <b>pinkish red</b> colour in acid. So phenolphthalein changes colour on the alkaline side of neutrality and methyl orange on the acid side.',
      },
      {
        t: 'p',
        html: '<b>The rule.</b> The indicator must change colour over the steep part of the titration curve, which contains the equivalence point. Near the equivalence point of a strong acid and a strong base a single drop changes the pH by many units, so either indicator works. When a weak acid is titrated with a strong base, the salt formed is hydrolysed and the solution is alkaline at equivalence; when a strong acid is titrated with a weak base, the salt gives an acidic solution at equivalence. A weak acid and a weak base give no sharp change at all, so no indicator is suitable and a physical method is used instead.',
      },
      {
        t: 'table',
        title: 'Indicator for each acid-base pair',
        head: ['Acid and base', 'Solution at equivalence', 'Suitable indicator', 'End-point colour change'],
        rows: [
          ['Strong acid and strong base (HCl and NaOH)', 'Neutral, pH about 7', 'Either one', 'Phenolphthalein: colourless to pink; methyl orange: yellow to pinkish red'],
          ['Weak acid and strong base (oxalic acid and NaOH)', 'Alkaline, above 7', 'Phenolphthalein', 'Colourless to faint permanent pink'],
          ['Strong acid and weak base (HCl and Na<sub>2</sub>CO<sub>3</sub>)', 'Acidic, below 7', 'Methyl orange', 'Yellow to pinkish red'],
          ['Weak acid and weak base', 'Near 7, no sharp change', 'None is suitable', 'No clear end point'],
        ],
        note: 'The equivalence-point values for the first three rows are explained in the worked example below.',
      },
      {
        t: 'ex',
        tag: 'Why the indicator choice matters',
        q: 'Estimate the pH at equivalence when 0.100 M CH<sub>3</sub>COOH is titrated with 0.100 M NaOH, and when 0.100 M NH<sub>3</sub> is titrated with 0.100 M HCl. Take <i>K</i><sub>a</sub> (acetic acid) and <i>K</i><sub>b</sub> (ammonia) both as 1.8 × 10<sup>−5</sup> and <i>K</i><sub>w</sub> = 1.0 × 10<sup>−14</sup>.',
        steps: [
          'Equal volumes are mixed at equivalence, so the salt concentration is half of 0.100 M, that is 0.050 M.',
          'Acetic acid and NaOH: the salt CH<sub>3</sub>COONa hydrolyses, CH<sub>3</sub>COO<sup>−</sup> + H<sub>2</sub>O ⇌ CH<sub>3</sub>COOH + OH<sup>−</sup>. Its <i>K</i><sub>h</sub> = <i>K</i><sub>w</sub>/<i>K</i><sub>a</sub> = (1.0 × 10<sup>−14</sup>)/(1.8 × 10<sup>−5</sup>) = 5.56 × 10<sup>−10</sup>.',
          '[OH<sup>−</sup>] = √(<i>K</i><sub>h</sub> × 0.050) = √(2.78 × 10<sup>−11</sup>) = 5.27 × 10<sup>−6</sup> M. pOH = 5.28, so pH = 14 − 5.28 = 8.72.',
          'Ammonia and HCl: NH<sub>4</sub>Cl hydrolyses, NH<sub>4</sub><sup>+</sup> ⇌ NH<sub>3</sub> + H<sup>+</sup>, with <i>K</i><sub>h</sub> = <i>K</i><sub>w</sub>/<i>K</i><sub>b</sub> = 5.56 × 10<sup>−10</sup> again, so [H<sup>+</sup>] = 5.27 × 10<sup>−6</sup> M and pH = 5.28.',
          'Second route: the two answers add to 14, 8.72 + 5.28 = 14.00, as they must when <i>K</i><sub>a</sub> = <i>K</i><sub>b</sub>. Phenolphthalein (alkaline side) fits the first titration; methyl orange (acid side) fits the second. Using phenolphthalein for the ammonia titration would show its colour change while the solution is still short of acid.',
        ],
        ans: 'pH ≈ 8.7 (use phenolphthalein) and pH ≈ 5.3 (use methyl orange).',
      },
      { t: 'fig', id: 'c12-12-03-d1' },

      { t: 'part', title: 'NaOH against oxalic acid: aim, principle and procedure' },
      {
        t: 'p',
        html: '<b>Aim.</b> To find the concentration (strength) of a given sodium hydroxide solution by titrating it against a standard solution of oxalic acid, with phenolphthalein as indicator.',
      },
      {
        t: 'p',
        html: '<b>Principle.</b> Oxalic acid is a weak, dibasic acid and NaOH is a strong, monoacidic base, so the neutralisation is H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> + 2NaOH → Na<sub>2</sub>C<sub>2</sub>O<sub>4</sub> + 2H<sub>2</sub>O, with <i>a</i><sub>1</sub> = 2 for the acid and <i>a</i><sub>2</sub> = 1 for the base. The standard solution is the oxalic acid, because NaOH is a secondary standard. The alkali is put in the burette and the acid in the flask, so that the colour change is from colourless to pink, which is easier to see than pink to colourless.',
      },
      {
        t: 'p',
        html: '<b>Apparatus.</b> 50 mL burette and stand, 10 mL pipette, 100 mL conical flask, funnel, white glazed tile, 100 mL measuring flask, oxalic acid, NaOH solution and phenolphthalein. <b>Standard solution.</b> For 100 mL of 0.1 M oxalic acid dissolve 126 × 0.1 × 0.1 = 1.260 g of the dihydrate in a little water in the measuring flask and make up to the mark.',
      },
      {
        t: 'proc',
        title: 'Titrating NaOH against oxalic acid',
        steps: [
          '<b>Prepare the burette.</b> Wash it with distilled water and rinse it with a little NaOH solution, then clamp it vertically and fill with NaOH through a funnel above the zero mark.',
          '<b>Remove the air gap.</b> Run solution quickly through the nozzle until it is full. Remove the funnel and make sure no drop hangs from the nozzle.',
          '<b>Read.</b> Note the initial reading with the eye at the level of the lower meniscus.',
          '<b>Measure the acid.</b> Rinse the pipette with the oxalic acid solution and pipette 10 mL into a washed conical flask. Add 1–2 drops of phenolphthalein and place the flask on the white tile.',
          '<b>Titrate.</b> Run in NaOH in small amounts at first and then dropwise, swirling, until one drop gives a very faint permanent pink.',
          '<b>Repeat.</b> Read the final level, subtract, and repeat until three concordant readings are obtained.',
        ],
      },
      { t: 'fig', id: 'c12-12-03-d2' },

      { t: 'part', title: 'NaOH against oxalic acid: observations and calculation' },
      {
        t: 'table',
        title: 'Observations: NaOH against 10.0 mL of 0.100 M oxalic acid',
        head: ['Titration', 'Initial / mL', 'Final / mL', 'Volume of NaOH / mL'],
        rows: [
          ['Rough', '0.0', '20.4', '20.4'],
          ['1', '0.5', '20.6', '20.1'],
          ['2', '20.6', '40.7', '20.1'],
          ['3', '0.0', '20.1', '20.1'],
        ],
        note: 'Rough reading omitted. Concordant volume = 20.10 mL.',
      },
      {
        t: 'ex',
        tag: 'Molarity and strength of NaOH',
        q: 'Using the readings above (10.0 mL of 0.100 M oxalic acid, 20.10 mL of NaOH), find the molarity of NaOH and its strength in g L<sup>−1</sup>.',
        steps: [
          '<i>a</i><sub>1</sub><i>M</i><sub>1</sub><i>V</i><sub>1</sub> = <i>a</i><sub>2</sub><i>M</i><sub>2</sub><i>V</i><sub>2</sub> with <i>a</i><sub>1</sub> = 2 (oxalic acid) and <i>a</i><sub>2</sub> = 1 (NaOH).',
          '2 × 0.100 × 10.0 = 1 × <i>M</i><sub>2</sub> × 20.10, so <i>M</i><sub>2</sub> = 2.00/20.10 = 0.09950 M.',
          'Strength = molarity × molar mass = 0.09950 × 40 = 3.980 g L<sup>−1</sup>.',
          '<b>Check by moles.</b> Moles of oxalic acid = 0.100 × 0.0100 = 1.000 × 10<sup>−3</sup> mol, which needs 2.000 × 10<sup>−3</sup> mol NaOH. Dividing by 0.02010 L gives 0.09950 M.',
          '<b>Check by normality.</b> <i>N</i> of oxalic acid = 2 × 0.100 = 0.200 N, and 0.200 × 10.0 = <i>N</i><sub>2</sub> × 20.10 gives <i>N</i><sub>2</sub> = 0.09950 N; for NaOH normality equals molarity.',
        ],
        ans: '0.09950 M, which is 3.980 g L<sup>−1</sup> of NaOH.',
      },
      {
        t: 'p',
        html: '<b>Result.</b> The concentration of the NaOH solution is 0.0995 M, or about 3.98 g L<sup>−1</sup>. NCERT asks for four places of decimals in the strength.<br><br><b>Precautions and sources of error.</b><br>• Rinse the burette and the pipette with the solution to be put in them, but never rinse the conical flask with the experimental solution.<br>• Remove the air gap from the nozzle, and take out the funnel before reading, with no drop hanging at the tip.<br>• Read the lower meniscus for colourless solutions, with the eye at the level of the meniscus; read the upper meniscus for dark coloured solutions.<br>• Never hold the pipette by the bulb, never suck strong acid or alkali with the mouth, keep its lower end in the liquid while sucking, and do not blow out the last drop from the jet.<br>• Parallax and over-shooting the end point (more than a faint pink) are the usual errors.',
      },

      { t: 'part', title: 'HCl against sodium carbonate' },
      {
        t: 'p',
        html: '<b>Aim.</b> To find the strength of a given hydrochloric acid solution by titrating it against a standard solution of sodium carbonate, with methyl orange as indicator.',
      },
      {
        t: 'p',
        html: '<b>Principle.</b> Sodium carbonate can be weighed directly, so it makes the standard solution: 106 × 0.1 × 0.1 = 1.0600 g in 100 mL gives 0.1 M. The reaction is Na<sub>2</sub>CO<sub>3</sub> + 2HCl → 2NaCl + CO<sub>2</sub> + H<sub>2</sub>O. A carbonate solution is weakly alkaline, because the carbonate ion is hydrolysed, CO<sub>3</sub><sup>2−</sup> + H<sub>2</sub>O ⇌ HCO<sub>3</sub><sup>−</sup> + OH<sup>−</sup>. For the base, <i>a</i><sub>1</sub> = 2 (acidity of Na<sub>2</sub>CO<sub>3</sub>) and for HCl, <i>a</i><sub>2</sub> = 1 (basicity). The acid is in the burette and the carbonate in the flask. Methyl orange is yellow in the flask; the last drop of acid at the end point turns it pinkish red. The solution at equivalence is acidic, which is why methyl orange suits this pair.',
      },
      {
        t: 'table',
        title: 'Observations: HCl against 10.0 mL of 0.100 M Na2CO3',
        head: ['Titration', 'Initial / mL', 'Final / mL', 'Volume of HCl / mL'],
        rows: [
          ['Rough', '0.0', '20.3', '20.3'],
          ['1', '0.0', '19.8', '19.8'],
          ['2', '19.8', '39.6', '19.8'],
          ['3', '0.2', '20.0', '19.8'],
        ],
        note: 'Concordant volume = 19.80 mL.',
      },
      {
        t: 'ex',
        tag: 'Strength of hydrochloric acid',
        q: 'Calculate the molarity and the strength in g L<sup>−1</sup> of the HCl, given that 10.0 mL of 0.100 M Na<sub>2</sub>CO<sub>3</sub> needed 19.80 mL of the acid. Molar mass of HCl = 36.5 g mol<sup>−1</sup>.',
        steps: [
          '<i>a</i><sub>1</sub><i>M</i><sub>1</sub><i>V</i><sub>1</sub> = <i>a</i><sub>2</sub><i>M</i><sub>2</sub><i>V</i><sub>2</sub> with <i>a</i><sub>1</sub> = 2 for Na<sub>2</sub>CO<sub>3</sub> and <i>a</i><sub>2</sub> = 1 for HCl.',
          '2 × 0.100 × 10.0 = 1 × <i>M</i><sub>2</sub> × 19.80, so <i>M</i><sub>2</sub> = 2.00/19.80 = 0.1010 M (0.10101).',
          'Strength = 0.10101 × 36.5 = 3.687 g L<sup>−1</sup>.',
          '<b>Check by moles.</b> Na<sub>2</sub>CO<sub>3</sub> taken = 0.100 × 0.0100 = 1.000 × 10<sup>−3</sup> mol. Each mole needs 2 mol HCl, so HCl = 2.000 × 10<sup>−3</sup> mol in 0.01980 L, which is 0.10101 M. As a mass, 2.000 × 10<sup>−3</sup> × 36.5 = 0.0730 g in 19.80 mL, and 0.0730/0.01980 = 3.687 g L<sup>−1</sup>.',
        ],
        ans: '0.1010 M, which is 3.687 g L<sup>−1</sup> of HCl.',
      },
      {
        t: 'p',
        html: '<b>Result and precautions.</b> The strength of the HCl is about 3.69 g L<sup>−1</sup>. The precautions are those of the previous experiment, plus: handle the acid with care, and calculate the strength to the fourth decimal place. Potassium hydrogenphthalate, KHC<sub>8</sub>H<sub>4</sub>O<sub>4</sub>, a monobasic acid, is another primary standard, used to standardise NaOH with phenolphthalein.',
      },

      { t: 'part', title: 'Permanganate titrations: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To find the molarity of a KMnO<sub>4</sub> solution by titrating it against a standard solution of (a) oxalic acid and (b) Mohr’s salt (ferrous ammonium sulphate).',
      },
      {
        t: 'p',
        html: '<b>Principle.</b> KMnO<sub>4</sub> is a strong oxidising agent and is used in acid medium. In acid, MnO<sub>4</sub><sup>−</sup> is reduced to Mn<sup>2+</sup> by taking 5 electrons, so its n-factor is 5. Oxalic acid and Fe<sup>2+</sup> are reducing agents. <b>Dilute sulphuric acid</b> is the acid used. Nitric acid is itself an oxidising agent, and hydrochloric acid is avoided because KMnO<sub>4</sub> oxidises it to chlorine, which is also an oxidising agent: 2KMnO<sub>4</sub> + 16HCl → 2KCl + 2MnCl<sub>2</sub> + 5Cl<sub>2</sub> + 8H<sub>2</sub>O. Enough H<sub>2</sub>SO<sub>4</sub> also prevents the formation of a brown precipitate of manganese dioxide during the titration.',
      },
      {
        t: 'p',
        html: '<b>Self-indicator.</b> The violet of MnO<sub>4</sub><sup>−</sup> is discharged as long as a reducing agent is present. After the last of it is used up, one extra drop gives a light pink colour that stays, and that is the end point. No other indicator is needed.',
      },
      {
        t: 'formula',
        kicker: 'KMnO4 in acid medium',
        main: 'MnO<sub>4</sub><sup>−</sup> + 8H<sup>+</sup> + 5e<sup>−</sup> → Mn<sup>2+</sup> + 4H<sub>2</sub>O<br>2MnO<sub>4</sub><sup>−</sup> + 5C<sub>2</sub>O<sub>4</sub><sup>2−</sup> + 16H<sup>+</sup> → 2Mn<sup>2+</sup> + 10CO<sub>2</sub> + 8H<sub>2</sub>O<br>MnO<sub>4</sub><sup>−</sup> + 5Fe<sup>2+</sup> + 8H<sup>+</sup> → Mn<sup>2+</sup> + 5Fe<sup>3+</sup> + 4H<sub>2</sub>O',
        legend: ['e<sup>−</sup> = electron', 'C<sub>2</sub>O<sub>4</sub><sup>2−</sup> = oxalate ion', 'Fe<sup>2+</sup> = from Mohr’s salt'],
        note: 'Oxalate gives 2 electrons and Fe<sup>2+</sup> gives 1, hence the 2 ∶ 5 and 1 ∶ 5 ratios.',
      },
      {
        t: 'formula',
        kicker: 'Molarity of KMnO4',
        main: 'Oxalic acid: <i>M</i><sub>2</sub> = 2<i>M</i><sub>1</sub><i>V</i><sub>1</sub>/(5<i>V</i><sub>2</sub>)<br>Mohr’s salt: <i>M</i><sub>2</sub> = <i>M</i><sub>1</sub><i>V</i><sub>1</sub>/(5<i>V</i><sub>2</sub>)',
        legend: [
          '<i>M</i><sub>1</sub> = reductant molarity',
          '<i>V</i><sub>1</sub> = reductant volume',
          '<i>M</i><sub>2</sub> = KMnO<sub>4</sub> molarity',
          '<i>V</i><sub>2</sub> = KMnO<sub>4</sub> volume',
        ],
        note: 'These follow from <i>a</i><sub>1</sub><i>M</i><sub>1</sub><i>V</i><sub>1</sub> = <i>a</i><sub>2</sub><i>M</i><sub>2</sub><i>V</i><sub>2</sub> with <i>a</i><sub>2</sub> = 5 for KMnO<sub>4</sub>, <i>a</i><sub>1</sub> = 2 for oxalic acid and <i>a</i><sub>1</sub> = 1 for Mohr’s salt.',
      },
      {
        t: 'p',
        html: '<b>Why oxalic acid is heated and Mohr’s salt is not.</b> The oxalate reaction is slow at room temperature, so the acidified oxalic acid is warmed to 50–60 °C. The first drops of KMnO<sub>4</sub> are decolourised slowly. As Mn<sup>2+</sup> builds up it acts as a catalyst for the reaction, so the rate rises as the titration goes on. Mohr’s salt reacts quickly even at room temperature, and heating is avoided because the Fe<sup>2+</sup> could be oxidised to Fe<sup>3+</sup> by the oxygen of the air and introduce an error. Ferrous ammonium sulphate must be a fresh sample.',
      },
      { t: 'fig', id: 'c12-12-03-d3' },

      { t: 'part', title: 'Permanganate titrations: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> 50 mL burette with a <b>glass stopcock</b> (rubber is attacked by permanganate), stand, 10 mL pipette, 100 mL or 250 mL measuring flask, conical flask, white glazed tile, funnel, weighing bottle, KMnO<sub>4</sub> solution, dilute 1.0 M H<sub>2</sub>SO<sub>4</sub>, and oxalic acid or ferrous ammonium sulphate.',
      },
      {
        t: 'proc',
        title: 'KMnO4 against 0.1 M oxalic acid',
        steps: [
          '<b>Burette.</b> Rinse and fill the clean burette with KMnO<sub>4</sub> solution, and remove any air bubble from the nozzle.',
          '<b>Flask.</b> Pipette 10 mL of 0.1 M oxalic acid into a conical flask and add about 5 mL (half a test tube) of 1.0 M H<sub>2</sub>SO<sub>4</sub>.',
          '<b>Heat.</b> Warm the flask to 50–60 °C and place it on a white tile under the nozzle.',
          '<b>Titrate.</b> Add KMnO<sub>4</sub> in small volumes while swirling. The violet colour is discharged on reaction. Stop at the first permanent light pink.',
          '<b>Read upper meniscus.</b> KMnO<sub>4</sub> is dark, so the burette reading is taken at the upper meniscus. Repeat until three concordant readings are obtained.',
        ],
      },
      {
        t: 'proc',
        title: 'KMnO4 against 0.05 M Mohr’s salt',
        steps: [
          '<b>Standard solution.</b> Weigh 4.9000 g of ferrous ammonium sulphate and transfer it through a funnel to a 250 mL measuring flask. Wash the funnel, add dilute H<sub>2</sub>SO<sub>4</sub> drop by drop until the solution is clear, dissolve and make up to the mark. Molar mass is 392 g mol<sup>−1</sup>, so 4.9000/392 = 0.0125 mol in 0.250 L = 0.0500 M.',
          '<b>Flask.</b> Pipette 10 mL of the Mohr’s salt solution into a conical flask and add about 5 mL of 1.0 M H<sub>2</sub>SO<sub>4</sub>. Do not heat.',
          '<b>Titrate.</b> Run in KMnO<sub>4</sub> from the burette, swirling, until the solution changes to a permanent pink.',
          '<b>Repeat</b> until three concordant readings are obtained, and calculate the molarity and the strength of KMnO<sub>4</sub>.',
        ],
      },

      { t: 'part', title: 'Permanganate titrations: observations and calculation' },
      {
        t: 'table',
        title: 'Observations: KMnO4 against 10.0 mL of 0.100 M oxalic acid',
        head: ['Titration', 'Initial / mL', 'Final / mL', 'Volume of KMnO4 / mL'],
        rows: [
          ['Rough', '0.0', '20.0', '20.0'],
          ['1', '0.0', '19.6', '19.6'],
          ['2', '19.6', '39.2', '19.6'],
          ['3', '0.4', '20.0', '19.6'],
        ],
        note: 'Upper-meniscus readings. Concordant volume = 19.60 mL.',
      },
      {
        t: 'ex',
        tag: 'Molarity of KMnO4 from oxalic acid',
        q: 'Find the molarity and the strength of the KMnO<sub>4</sub> solution (molar mass 158 g mol<sup>−1</sup>) from the table: 10.0 mL of 0.100 M oxalic acid needed 19.60 mL.',
        steps: [
          'The balanced equation shows 2 mol MnO<sub>4</sub><sup>−</sup> for 5 mol C<sub>2</sub>O<sub>4</sub><sup>2−</sup>. Moles of oxalic acid = 0.100 × 0.0100 = 1.000 × 10<sup>−3</sup> mol.',
          'Moles of MnO<sub>4</sub><sup>−</sup> = (2/5) × 1.000 × 10<sup>−3</sup> = 4.000 × 10<sup>−4</sup> mol, in 0.01960 L.',
          '<i>M</i><sub>2</sub> = 4.000 × 10<sup>−4</sup>/0.01960 = 0.02041 M.',
          'Strength = 0.02041 × 158 = 3.225 g L<sup>−1</sup>.',
          '<b>Check by normality.</b> <i>N</i> of oxalic acid = 0.100 × 2 = 0.200 N, so 0.200 × 10.0 = <i>N</i><sub>2</sub> × 19.60 gives <i>N</i><sub>2</sub> = 0.10204 N. KMnO<sub>4</sub> has <i>a</i> = 5, so <i>M</i> = 0.10204/5 = 0.02041 M. The same result by formula: <i>M</i><sub>2</sub> = (2/5) × 0.100 × 10.0/19.60 = 0.02041 M.',
        ],
        ans: '0.02041 M, which is 3.225 g L<sup>−1</sup> of KMnO<sub>4</sub>.',
      },
      {
        t: 'ex',
        tag: 'Purity of a Mohr’s salt sample',
        q: 'A 5.000 g sample of impure Mohr’s salt is dissolved in dilute H<sub>2</sub>SO<sub>4</sub> and made up to 250 mL. A 25.0 mL portion needs 12.20 mL of 0.0200 M KMnO<sub>4</sub> in three concordant titrations. Find the mass of FeSO<sub>4</sub>(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>·6H<sub>2</sub>O in the sample and its percentage purity (molar mass 392 g mol<sup>−1</sup>).',
        steps: [
          'Moles of MnO<sub>4</sub><sup>−</sup> used = 0.0200 × 0.01220 = 2.440 × 10<sup>−4</sup> mol.',
          'MnO<sub>4</sub><sup>−</sup> + 5Fe<sup>2+</sup> + 8H<sup>+</sup> → Mn<sup>2+</sup> + 5Fe<sup>3+</sup> + 4H<sub>2</sub>O, so Fe<sup>2+</sup> in the 25.0 mL portion = 5 × 2.440 × 10<sup>−4</sup> = 1.220 × 10<sup>−3</sup> mol.',
          'The whole 250 mL is ten times that: 1.220 × 10<sup>−2</sup> mol. Each mole of Mohr’s salt carries one Fe<sup>2+</sup>, so the mass is 1.220 × 10<sup>−2</sup> × 392 = 4.782 g.',
          'Purity = 4.782/5.000 × 100 = 95.65%.',
          '<b>Check by normality.</b> <i>N</i> of KMnO<sub>4</sub> = 5 × 0.0200 = 0.100 N. 0.100 × 12.20 = <i>N</i> × 25.0 gives <i>N</i> (Mohr’s salt) = 0.04880 N, which is 0.04880 M because <i>a</i> = 1. In grams per litre, 0.04880 × 392 = 19.13 g L<sup>−1</sup>, and the 0.250 L flask holds 19.13 × 0.250 = 4.782 g.',
        ],
        ans: '4.782 g of Mohr’s salt, purity about 95.7%.',
      },
      {
        t: 'p',
        html: '<b>Result.</b> State the molarity and the strength of the KMnO<sub>4</sub> to four places of decimals.<br><br><b>Precautions and sources of error.</b><br>• Use dilute H<sub>2</sub>SO<sub>4</sub> only (not HCl or HNO<sub>3</sub>), and enough of it, or brown MnO<sub>2</sub> may form.<br>• Heat the oxalic acid and H<sub>2</sub>SO<sub>4</sub> mixture to 50–60 °C before titrating; do not heat Mohr’s salt.<br>• Use a burette with a glass stopcock and read the upper meniscus, because the solution is dark.<br>• Never rinse the conical flask with the experimental solutions; rinse the burette and the pipette with the solutions they will hold.<br>• Remove air gaps and funnel, and do not let a drop hang from the tip.<br>• Use a fresh sample of ferrous ammonium sulphate to prepare its standard solution.<br>• KMnO<sub>4</sub> is a secondary standard and is not weighed directly to make a standard solution.',
      },
      {
        t: 'mistakes',
        items: [
          '<b>Pick the indicator from the equivalence point</b>, not from the starting colour. Weak acid with strong base: phenolphthalein. Strong acid with weak base (Na<sub>2</sub>CO<sub>3</sub>, NH<sub>3</sub>): methyl orange. Strong with strong: either. Weak with weak: none.',
          '<b>Use the n-factor on both sides.</b> Oxalic acid has <i>a</i> = 2 in both NaOH and KMnO<sub>4</sub> titrations; Na<sub>2</sub>CO<sub>3</sub> has <i>a</i> = 2 with HCl; KMnO<sub>4</sub> has <i>a</i> = 5 in acid; Mohr’s salt has <i>a</i> = 1.',
          '<b>The mole ratios are not 1 ∶ 1.</b> The mole ratio KMnO<sub>4</sub> ∶ oxalic acid is 2 ∶ 5, and KMnO<sub>4</sub> ∶ Mohr’s salt is 1 ∶ 5.',
          '<b>Acid for permanganate:</b> dilute H<sub>2</sub>SO<sub>4</sub> only. HCl is oxidised to Cl<sub>2</sub> and HNO<sub>3</sub> is itself an oxidiser.',
          '<b>Heating:</b> oxalic acid at 50–60 °C because the reaction is slow at first (Mn<sup>2+</sup> then catalyses it, so the rate rises); Mohr’s salt cold, because heating lets air oxidise Fe<sup>2+</sup>.',
          '<b>Meniscus:</b> lower for colourless solutions, upper for dark ones such as KMnO<sub>4</sub>. KMnO<sub>4</sub> needs a glass stopcock, not a rubber-tube pinch-cock.',
          '<b>The permanganate end point is permanent light pink</b> (self-indicator), reached with one extra drop; a deep pink means over-shooting.',
          '<b>With phenolphthalein only half of the carbonate is neutralised</b> (Na<sub>2</sub>CO<sub>3</sub> goes to NaHCO<sub>3</sub>); with methyl orange the neutralisation is complete.',
        ],
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] In an experiment 20.0 mL of a NaOH solution of unknown molarity was neutralised by 15.0 mL of 0.100 M oxalic acid with phenolphthalein. Find the molarity and the strength of the NaOH in g L<sup>−1</sup>.',
            a: '2 × 0.100 × 15.0 = 1 × <i>M</i> × 20.0 gives <i>M</i> = 0.150 M. Strength = 0.150 × 40 = 6.00 g L<sup>−1</sup>. Check by moles: 1.500 × 10<sup>−3</sup> mol acid needs 3.000 × 10<sup>−3</sup> mol NaOH in 0.0200 L, which is 0.150 M.',
          },
          {
            q: '[CBSE] What mass of ferrous ammonium sulphate hexahydrate (molar mass 392 g mol<sup>−1</sup>) is dissolved to make 100 mL of 0.0500 M solution?',
            a: 'Mass = 392 × 0.0500 × 0.100 = 1.96 g. Check by proportion: NCERT’s 4.9000 g in 250 mL is 0.0500 M, so 100 mL needs 4.9 × 100/250 = 1.96 g.',
          },
          {
            q: '[JEE Main] 25.0 mL of 0.0500 M oxalic acid, acidified with H<sub>2</sub>SO<sub>4</sub>, requires 20.0 mL of a KMnO<sub>4</sub> solution. Find the molarity and the strength (g L<sup>−1</sup>) of KMnO<sub>4</sub>, taking molar mass 158 g mol<sup>−1</sup>.',
            a: 'Moles of oxalic acid = 0.0500 × 0.0250 = 1.25 × 10<sup>−3</sup> mol, which reacts with (2/5) × 1.25 × 10<sup>−3</sup> = 5.00 × 10<sup>−4</sup> mol of MnO<sub>4</sub><sup>−</sup>. <i>M</i> = 5.00 × 10<sup>−4</sup>/0.0200 = 0.0250 M. Strength = 0.0250 × 158 = 3.95 g L<sup>−1</sup>. Check: <i>N</i> of oxalic acid = 0.100, 0.100 × 25.0 = <i>N</i> × 20.0 gives 0.125 N, and 0.125/5 = 0.0250 M.',
          },
          {
            q: '[NEET] A student standardises KMnO<sub>4</sub> against oxalic acid but acidifies with hydrochloric acid instead of sulphuric acid. Will the volume of KMnO<sub>4</sub> used be larger or smaller than the correct one? Give the reason.',
            a: 'Larger. Some KMnO<sub>4</sub> oxidises HCl to Cl<sub>2</sub> (2KMnO<sub>4</sub> + 16HCl → 2KCl + 2MnCl<sub>2</sub> + 5Cl<sub>2</sub> + 8H<sub>2</sub>O), so extra permanganate is consumed besides what the oxalic acid needs.',
          },
          {
            q: '[JEE Main] 0.100 M NH<sub>3</sub> is titrated with 0.100 M HCl. Which of phenolphthalein and methyl orange is suitable, and what colour change marks the end point? Why is the other unsuitable?',
            a: 'Methyl orange, yellow to pinkish red. At equivalence the solution contains NH<sub>4</sub>Cl, which is acidic (pH about 5.3). Phenolphthalein changes colour on the alkaline side of 7, so its colour would disappear before the equivalence point was reached.',
          },
          {
            q: '[JEE Main] A 0.980 g sample of impure Mohr’s salt, dissolved in dilute H<sub>2</sub>SO<sub>4</sub>, required 24.00 mL of 0.0200 M KMnO<sub>4</sub>. Find the percentage purity.',
            a: 'MnO<sub>4</sub><sup>−</sup> = 0.0200 × 0.02400 = 4.800 × 10<sup>−4</sup> mol; Fe<sup>2+</sup> = 5 × 4.800 × 10<sup>−4</sup> = 2.400 × 10<sup>−3</sup> mol; mass = 2.400 × 10<sup>−3</sup> × 392 = 0.9408 g. Purity = 0.9408/0.980 × 100 = 96.0%. Check by normality: 0.100 N × 24.00 = 2.400 meq; 2.400 × 10<sup>−3</sup> eq × 392 = 0.9408 g.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The most suitable indicator for the titration of 0.1 M acetic acid against 0.1 M NaOH is:',
        opts: [
          { label: 'Methyl orange', nudge: '<b>(a)</b> methyl orange changes on the acid side of 7, but the equivalence point is alkaline (pH about 8.7), so it would change colour too early.' },
          { label: 'Phenolphthalein', nudge: null },
          { label: 'Either one equally well', nudge: '<b>(c)</b> that applies only to a strong acid with a strong base; a weak acid needs an indicator that changes on the alkaline side.' },
          { label: 'No indicator can be used', nudge: '<b>(d)</b> that is the case for a weak acid with a weak base, not for a weak acid with a strong base.' },
        ],
        correct: 1,
        solution: 'Sodium acetate is hydrolysed, so the solution at equivalence is alkaline (pH about 8.7). Phenolphthalein, which is colourless in acid and pink in alkali, changes colour in that region.',
      },
      {
        t: 'mcq',
        q: 'Which acid is used to acidify the solution in a KMnO<sub>4</sub> titration?',
        opts: [
          { label: 'Concentrated HCl', nudge: '<b>(a)</b> KMnO<sub>4</sub> oxidises HCl to Cl<sub>2</sub>, which wastes permanganate and is itself an oxidiser.' },
          { label: 'Dilute HNO<sub>3</sub>', nudge: '<b>(b)</b> nitric acid is itself an oxidising agent and would interfere.' },
          { label: 'Dilute H<sub>2</sub>SO<sub>4</sub>', nudge: null },
          { label: 'Acetic acid', nudge: '<b>(d)</b> a weak acid supplies too little H<sup>+</sup> for the 8H<sup>+</sup> in the half-reaction, and MnO<sub>2</sub> may form.' },
        ],
        correct: 2,
        solution: 'Dilute sulphuric acid supplies H<sup>+</sup> and neither oxidises nor is oxidised by permanganate.',
      },
      {
        t: 'mcq',
        q: 'In the titration of oxalic acid with KMnO<sub>4</sub>, the oxalic acid solution is warmed to 50–60 °C because:',
        opts: [
          { label: 'KMnO<sub>4</sub> does not dissolve in cold water', nudge: '<b>(a)</b> KMnO<sub>4</sub> is in the burette as a solution already; its solubility has nothing to do with heating the flask.' },
          { label: 'the reaction is slow at room temperature at the start', nudge: null },
          { label: 'Mn<sup>2+</sup> is oxidised to MnO<sub>2</sub> on heating', nudge: '<b>(c)</b> MnO<sub>2</sub> forms when there is too little acid, not because of heating; Mn<sup>2+</sup> is a product that catalyses the reaction.' },
          { label: 'the indicator works only when hot', nudge: '<b>(d)</b> no separate indicator is used; KMnO<sub>4</sub> is its own indicator at any temperature.' },
        ],
        correct: 1,
        solution: 'The oxalate reaction is slow when cold, and heating gets it going; the Mn<sup>2+</sup> formed then catalyses it, so the rate rises during the titration.',
      },
      {
        t: 'mcq',
        q: 'What volume of 0.0200 M KMnO<sub>4</sub> is needed to titrate 10.0 mL of 0.0500 M Mohr’s salt in acid solution?',
        opts: [
          { label: '5.00 mL', nudge: null },
          { label: '10.0 mL', nudge: '<b>(b)</b> this uses the oxalic acid ratio 2 ∶ 5; for Fe<sup>2+</sup> the ratio is 1 ∶ 5.' },
          { label: '25.0 mL', nudge: '<b>(c)</b> this treats the reaction as 1 ∶ 1 and ignores the 5 electrons taken by MnO<sub>4</sub><sup>−</sup>.' },
          { label: '125 mL', nudge: '<b>(d)</b> this multiplies by 5 where it should divide by 5.' },
        ],
        correct: 0,
        solution: 'Moles of Fe<sup>2+</sup> = 0.0500 × 0.0100 = 5.00 × 10<sup>−4</sup> mol, so MnO<sub>4</sub><sup>−</sup> needed = 1.00 × 10<sup>−4</sup> mol, and the volume is 1.00 × 10<sup>−4</sup>/0.0200 = 5.00 × 10<sup>−3</sup> L = 5.00 mL. Check: 0.100 N × <i>V</i> = 0.0500 N × 10.0 gives <i>V</i> = 5.00 mL.',
      },
      {
        t: 'mcq',
        q: 'In the titration of Na<sub>2</sub>CO<sub>3</sub> solution with standard HCl using methyl orange, the colour change at the end point is:',
        opts: [
          { label: 'colourless to pink', nudge: '<b>(a)</b> that is the phenolphthalein change in an alkali titration, not methyl orange.' },
          { label: 'pink to colourless', nudge: '<b>(b)</b> that is the reverse of the phenolphthalein change and is not given by methyl orange.' },
          { label: 'yellow to pinkish red', nudge: null },
          { label: 'pale pink to deep pink', nudge: '<b>(d)</b> that is the over-shooting of a permanganate end point, not an indicator change.' },
        ],
        correct: 2,
        solution: 'Methyl orange is yellow in the carbonate solution and turns pinkish red when the last drop of acid is added at the end point.',
      },
      {
        t: 'mcq',
        q: 'A KMnO<sub>4</sub> burette reading is taken at the upper meniscus because:',
        opts: [
          { label: 'the solution is coloured and dark, so the lower meniscus is hard to see', nudge: null },
          { label: 'KMnO<sub>4</sub> has a higher density than water', nudge: '<b>(b)</b> density does not decide which meniscus is read; the reason is how clearly the meniscus can be seen.' },
          { label: 'the burette has a rubber nozzle', nudge: '<b>(c)</b> the opposite: a rubber tube must not be used with KMnO<sub>4</sub> because the ions attack it.' },
          { label: 'the lower meniscus is always more accurate', nudge: '<b>(d)</b> the lower meniscus is read for transparent solutions only; for dark ones it cannot be seen clearly.' },
        ],
        correct: 0,
        solution: 'Lower meniscus for colourless and transparent solutions, upper for dark coloured ones such as KMnO<sub>4</sub>, where the lower meniscus is hidden by the colour.',
      },
    ],
  },
];
