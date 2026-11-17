import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 9 (Biomolecules), Additional topics A to F, word for word from the
 * Class 11 Biology Master Reference: the shared introduction (p. 568, the first paragraph
 * of A's Introduction), A "Enzyme Kinetics: Michaelis-Menten Framework" (pp. 568 to 571,
 * practice answers end at the top of p. 571), B "Vitamins: Solubility Classification"
 * (pp. 571 to 574), C "Biochemical Tests for Biomolecule Identification" (pp. 574 to 577),
 * D "Cholesterol Structure and Amino Acid Metabolism" (pp. 578 to 582), E "Summary
 * Checklist" (p. 582) and F "What NEET Actually Asks" (the book's Addendum P, pp. 583 to
 * 590). Page 591 is the next chapter.
 *
 * The book's maths variables are italic, label subscripts (max, m, i, app, total) upright.
 * Every fraction is stacked, including the ones the book prints on one line. A table the
 * book prints inside a worked example is set as labelled rows or lists. The book's example
 * headings ("Example A.1 - [NEET, numerical] Finding ... from a table.") become the tag
 * (the bracket) and a bold lead on the question. The book prints (a) to (d) in these
 * additional topics and they are kept. The labelled arrows of the book's text flow
 * diagrams are written as "→ (label)".
 */

const S = '[<i>S</i>]';
const I = '[<i>I</i>]';
const v = '<i>v</i>';
const Vmax = '<i>V</i><sub>max</sub>';
const Km = '<i>K</i><sub>m</sub>';
const Ki = '<i>K</i><sub>i</sub>';
const KmApp = '<i>K</i><sub>m</sub><sup>app</sup>';
const VmaxApp = '<i>V</i><sub>max</sub><sup>app</sup>';
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const iOverKi = fr(I, Ki);
const um = 'μM';
const umin = 'μM min<sup>−1</sup>';

export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 568 to 571 ─────────────────────────
  {
    n: 'A',
    title: 'Enzyme Kinetics: Michaelis-Menten Framework',
    extra: true,
    kalam: 'Topic 04 states the rise and plateau of enzyme rate in words; this additional topic gives the equation and the numbers.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'These additional topics extend the chapter on biomolecules in four directions (A to D) that NEET and the CBSE board examinations draw on. <b>Additional topic A</b> adds the quantitative Michaelis–Menten framework to the qualitative “rate versus substrate” picture, the numerical relationships that NEET extracts from graphs and tables. <b>Additional topic B</b> classifies the vitamins by solubility and pairs each with the deficiency disease that NEET asks by name. <b>Additional topic C</b> gives the step-by-step biochemical tests (Molisch, Benedict, iodine, Biuret, Sudan III) with the positive and negative results a board student must be able to write from memory. <b>Additional topic D</b> covers cholesterol as a membrane component and the transamination–deamination sequence that carries amino-acid nitrogen into the urea cycle. Additional topic E is a revision checklist, and Additional topic F summarises how NEET has examined this chapter.',
      },
      {
        t: 'p',
        html: `Topic 04 states the rise and plateau and the two kinds of inhibition in words; this additional topic gives the equation and the numbers. The equation links the two variables numerically: the relationship from which NEET extracts the values of ${Km} and ${Vmax} that appear in its tables and graphs.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Michaelis-Menten equation.</b> For a simple single-substrate reaction:<br>${v} = ${fr(`${Vmax} ${S}`, `${Km} + ${S}`)}<br>where ${v} is the initial reaction velocity, ${S} is the substrate concentration, ${Vmax} is the maximum velocity (all enzyme molecules saturated), and ${Km} is the Michaelis constant.`,
      },
      {
        t: 'p',
        html: `<b>What ${Km} means.</b> ${Km} is the substrate concentration at which ${v} = ${fr(Vmax, '2')}: half the sites are occupied, half free. Numerically it is the substrate concentration at which the enzyme achieves half its maximum rate. A low ${Km} usually means tight binding: the enzyme reaches half-rate at a low ${S}; a high ${Km} usually means weaker binding. The qualitative statement “rate increases then plateaus” is thus made exact: the equation gives the half-rate point by name.`,
      },
      {
        t: 'p',
        html: `<b>What ${Vmax} means.</b> The maximum velocity when every enzyme active site is occupied at all times. In practice ${Vmax} is reached asymptotically: never quite achieved at any finite ${S}, but extrapolated from the curve. The catalytic turnover number <i>k</i><sub>cat</sub> relates them: ${Vmax} = <i>k</i><sub>cat</sub> [<i>E</i><sub>total</sub>].`,
      },
      {
        t: 'p',
        html: `<b>Units.</b> ${S}, ${Km}: same units (mol L<sup>−1</sup> or ${um}). ${v}, ${Vmax}: same units (concentration time<sup>−1</sup>, e.g. ${umin}).`,
      },
      {
        t: 'p',
        html: `<b>Lineweaver-Burk (double-reciprocal) plot.</b> Take the reciprocal of both sides:<br>${fr('1', v)} = ${fr(Km, Vmax)} · ${fr('1', S)} + ${fr('1', Vmax)}<br>This is the equation of a straight line: slope = ${fr(Km, Vmax)}, <i>y</i>-intercept = ${fr('1', Vmax)}, <i>x</i>-intercept = −${fr('1', Km)}.`,
      },
      {
        t: 'p',
        html: `<b>Competitive inhibition (same active site occupied).</b> The inhibitor formulas in this topic hold for pure competitive and pure non-competitive inhibition. Inhibitor <i>I</i> resembles <i>S</i> and competes:<br>• ${Vmax}: unchanged (excess ${S} out-competes <i>I</i>)<br>• ${KmApp} = ${Km}(1 + ${iOverKi}): increases`,
      },
      {
        t: 'p',
        html: `<b>Non-competitive inhibition (different site occupied).</b> Inhibitor binds at an allosteric site:<br>• ${VmaxApp} = ${fr(Vmax, `1 + ${iOverKi}`)}: decreases<br>• ${Km}: unchanged (inhibitor does not affect substrate binding)`,
      },
      {
        t: 'p',
        html: `<b>Units check.</b> ${Km} has concentration units. ${fr(Km, Vmax)} has units (concentration / velocity) = ${fr('mol L<sup>−1</sup>', 'mol L<sup>−1</sup> min<sup>−1</sup>')} = min. Slope of Lineweaver-Burk plot has units of time. Correct.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET, numerical',
        q: `<b>Finding ${Km} and ${Vmax} from a table.</b> An enzyme reaction is studied at different substrate concentrations. The data obtained:<br>${S} (${um}) = 5, ${v} (${umin}) = 10<br>${S} (${um}) = 10, ${v} (${umin}) = 16.7<br>${S} (${um}) = 20, ${v} (${umin}) = 25<br>${S} (${um}) = 50, ${v} (${umin}) = 35.7<br>${S} (${um}) = 100, ${v} (${umin}) = 41.7<br>Determine ${Vmax} and ${Km}.`,
        steps: [
          `<b>Reasoning.</b> Use ${v} = ${fr(`${Vmax}${S}`, `${Km} + ${S}`)}. The velocity is still rising at ${S} = 100 ${um} (41.7 ${umin}), so the plateau has not yet been reached and ${Vmax} must be extrapolated, not read off the table. The reliable way is the double-reciprocal plot: ${fr('1', v)} against ${fr('1', S)} for these five points is a straight line (for example ${fr('1', S)} = 0.2 → ${fr('1', v)} = 0.100 and ${fr('1', S)} = 0.01 → ${fr('1', v)} = 0.024), with <i>y</i>-intercept ${fr('1', Vmax)} = 0.02 and slope ${fr(Km, Vmax)} = 0.4 min. Hence ${Vmax} = ${fr('1', '0.02')} = 50 ${umin} and ${Km} = 0.4 × 50 = 20 ${um}.`,
          `<b>Check.</b> At ${fr(Vmax, '2')} = 25 ${umin} the table gives ${S} = 20 ${um}, which is exactly ${Km}.`,
        ],
        ans: `${Vmax} ≈ 50 ${umin}; ${Km} ≈ 20 ${um}.`,
      },
      {
        t: 'ex',
        tag: 'NEET, graph interpretation',
        q: `<b>Identifying inhibition type.</b> A Lineweaver-Burk plot is constructed for an enzyme in the presence and absence of an inhibitor. The two lines intersect on the <i>y</i>-axis. Name the inhibition type and state what happens to ${Vmax} and ${Km}.`,
        steps: [
          `<b>Reasoning.</b> In a Lineweaver-Burk plot, the <i>y</i>-axis intercept is ${fr('1', Vmax)}. If the lines share the same <i>y</i>-intercept, ${Vmax} is identical in both cases. The <i>x</i>-intercept is −${fr('1', Km)}; if the <i>x</i>-intercepts differ, ${Km} changes. Intersection on the <i>y</i>-axis (same ${fr('1', Vmax)}, different slopes) is the signature of competitive inhibition. Here the inhibitor competes for the active site with the substrate; at sufficiently high ${S}, the substrate wins, restoring ${Vmax}. ${KmApp} increases.`,
        ],
        ans: `Competitive inhibition. ${Vmax} is unchanged; ${KmApp} increases.`,
      },
      {
        t: 'ex',
        tag: 'CBSE Board, 2 marks',
        q: `Distinguish between competitive and non-competitive inhibition with respect to the effect on ${Vmax} and ${Km}.`,
        steps: [
          '<b>Reasoning.</b> The distinction is structural: competitive inhibitors bind the active site (same location as substrate); non-competitive inhibitors bind elsewhere. From this structural difference flow the kinetic consequences.',
          `Binding site. Competitive: Active site (same as <i>S</i>). Non-competitive: Allosteric site (different from <i>S</i>).<br>Effect on ${Km}. Competitive: Increases (${KmApp} rises). Non-competitive: Unchanged.<br>Effect on ${Vmax}. Competitive: Unchanged. Non-competitive: Decreases (${VmaxApp} falls).<br>Reversed by excess ${S}? Competitive: Yes. Non-competitive: No.`,
        ],
        ans: `Competitive inhibition increases ${Km} but leaves ${Vmax} unchanged; non-competitive inhibition decreases ${Vmax} but leaves ${Km} unchanged.`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `[NEET] An enzyme has ${Vmax} = 40 μmol L<sup>−1</sup> min<sup>−1</sup> and ${Km} = 10 ${um}. Calculate the reaction velocity at ${S} = 10 ${um}.`,
            a: `At ${S} = ${Km}, ${v} = ${fr(Vmax, '2')} = 20 μmol L<sup>−1</sup> min<sup>−1</sup>.`,
          },
          {
            q: `[CBSE] In the presence of a competitive inhibitor with ${Ki} = 5 ${um}, the apparent ${Km} of an enzyme doubles. If the original ${Km} = 20 ${um}, find the inhibitor concentration ${I}.`,
            a: `${KmApp} = ${Km}(1 + ${iOverKi}). Given ${KmApp} = 2${Km}: 2 = 1 + ${iOverKi} ⇒ ${iOverKi} = 1 ⇒ ${I} = ${Ki} = 5 ${um}.`,
          },
          {
            q: `[NEET] A non-competitive inhibitor reduces ${Vmax} to 60% of its original value. If ${I} = 2 mM, calculate ${Ki}.`,
            a: `${VmaxApp} = ${fr(Vmax, `1 + ${iOverKi}`)}. Given ${VmaxApp} = 0.6${Vmax}: 0.6 = ${fr('1', `1 + ${iOverKi}`)} ⇒ 1 + ${iOverKi} = ${fr('1', '0.6')} ≈ 1.667 ⇒ ${iOverKi} = 0.667 ⇒ ${Ki} = ${fr('2 mM', '0.667')} ≈ 3 mM.`,
          },
          {
            q: `[CUET] Draw the Lineweaver-Burk plot for competitive inhibition and label the axes, slope, and intercepts.`,
            a: `Axes: ${fr('1', S)} on <i>x</i>-axis (range negative to positive); ${fr('1', v)} on <i>y</i>-axis. Two lines: control (shallower slope ${fr(Km, Vmax)}) and competitive (steeper slope ${fr(KmApp, Vmax)}, same <i>y</i>-intercept = ${fr('1', Vmax)}). Control <i>x</i>-intercept = −${fr('1', Km)}; competitive <i>x</i>-intercept = −${fr('1', KmApp)}, closer to origin.`,
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 571 to 574 ─────────────────────────
  {
    n: 'B',
    title: 'Vitamins: Solubility Classification',
    extra: true,
    kalam: 'This additional topic classifies vitamins by solubility and connects each vitamin to the deficiency disease that NEET asks by name.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter lists vitamins among the micromolecules of the acid-soluble pool (strictly, only the water-soluble ones; see Method) and names NAD<sup>+</sup> and FAD as coenzymes. This additional topic classifies vitamins by solubility and connects each vitamin to the deficiency disease that NEET asks by name.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Divide by solubility: two groups, two sets of properties.</b>',
      },
      {
        t: 'p',
        html: '<b>Water-soluble vitamins (B-complex + vitamin C).</b><br>• Occur in the acid-soluble pool (Topic 01, Key definitions, structures and reagents: micromolecules, 18–800 Da).<br>• Absorbed directly into portal circulation; not stored in bulk (vitamin B<sub>12</sub> is the notable exception: the liver holds a store of it).<br>• Excess is excreted in urine: regular dietary intake needed.<br>• The B-complex vitamins function as coenzyme precursors (vitamin C acts as a direct antioxidant and as a cofactor for prolyl hydroxylase).<br>• Deficiency signs appear relatively quickly (weeks to months).',
      },
      {
        t: 'p',
        html: '<b>Fat-soluble vitamins (A, D, E, K).</b><br>• Absorbed along with dietary fats (require bile salts and chylomicron formation).<br>• Stored in liver and adipose tissue: can accumulate; toxicity possible from excess.<br>• Not water-soluble, so in tissue analysis they travel with the lipids, not in the acid-soluble pool.<br>• Have specific structural or regulatory roles (vision, calcium homeostasis, antioxidant, clotting).',
      },
      {
        t: 'p',
        html: '<b>Coenzyme function.</b> The chapter names NAD<sup>+</sup> (niacin) and FAD (riboflavin) as coenzymes; pyridoxal phosphate (from B<sub>6</sub>) is another. Each coenzyme derives from its vitamin precursor:',
      },
      {
        t: 'table',
        title: null,
        head: ['Vitamin', 'Coenzyme form', 'Primary role'],
        rows: [
          ['B<sub>1</sub> (thiamine)', 'Thiamine pyrophosphate (TPP)', 'Pyruvate dehydrogenase, transketolase'],
          ['B<sub>2</sub> (riboflavin)', 'FAD, FMN', 'Oxidation-reduction (electron carrier)'],
          ['B<sub>3</sub> (niacin)', 'NAD<sup>+</sup>, NADP<sup>+</sup>', 'Oxidation-reduction (hydride carrier)'],
          ['B<sub>6</sub> (pyridoxine)', 'Pyridoxal phosphate', 'Transamination (amino group transfer)'],
          ['B<sub>12</sub> (cobalamin)', 'Methylcobalamin, deoxyadenosylcobalamin', 'Methylmalonyl-CoA mutase, methionine synthase'],
          ['Biotin', 'Biocytin (biotin-lysine)', 'Carboxylation reactions'],
          ['Folate', 'Tetrahydrofolate (THF)', 'One-carbon transfer (purine/pyrimidine synthesis)'],
          ['Pantothenic acid', 'Coenzyme A', 'Fatty acid metabolism, citric acid cycle'],
          ['C (ascorbic acid)', 'Direct antioxidant; cofactor for prolyl hydroxylase', 'Collagen synthesis'],
        ],
      },
      {
        t: 'defgrid',
        title: 'Deficiency diseases (examinable by name)',
        rows: [
          { k: 'B<sub>1</sub>: Thiamine', v: 'Beriberi (wet: cardiac failure; dry: peripheral neuropathy)' },
          { k: 'B<sub>2</sub>: Riboflavin', v: 'Cheilosis, angular stomatitis, glossitis' },
          { k: 'B<sub>3</sub>: Niacin', v: 'Pellagra (dermatitis, diarrhoea, dementia)' },
          { k: 'B<sub>6</sub>: Pyridoxine', v: 'Convulsions (in infants), peripheral neuropathy, sideroblastic anaemia' },
          { k: 'Folate', v: 'Megaloblastic anaemia; neural-tube defects in pregnancy' },
          { k: 'B<sub>12</sub>: Cobalamin', v: 'Megaloblastic (macrocytic) anaemia; pernicious anaemia when intrinsic factor is missing' },
          { k: 'C: Ascorbic acid', v: 'Scurvy (bleeding gums, poor wound healing, joint pain)' },
          { k: 'A: Retinol', v: 'Night blindness, xerophthalmia, Bitot’s spots' },
          { k: 'D: Cholecalciferol', v: 'Rickets (children), osteomalacia (adults)' },
          { k: 'E: Tocopherol', v: 'Haemolytic anaemia, neurological deterioration' },
          { k: 'K: Phylloquinone', v: 'Prolonged bleeding, defective gamma-carboxylation of clotting factors' },
        ],
      },
      {
        t: 'p',
        html: '<b>Why not alphabetical?</b> Students who memorise vitamins A through K in order confuse the water-soluble B-complex series (eight distinct B vitamins) with the four fat-soluble vitamins. Grouping by solubility property first and then recalling each member within the group is the reliable exam method.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET, match-the-column',
        q: '<b>Vitamin–deficiency matching.</b> Column I (vitamin): B<sub>1</sub>, Niacin, Vitamin C, Vitamin A, Vitamin K.<br>Column II (deficiency): Beriberi, Pellagra, Scurvy, Night blindness, Prolonged bleeding.',
        steps: ['<b>Reasoning.</b> Apply the deficiency table directly.'],
        ans: 'B<sub>1</sub>: Beriberi; Niacin: Pellagra; Vitamin C: Scurvy; Vitamin A: Night blindness; Vitamin K: Prolonged bleeding.',
      },
      {
        t: 'ex',
        tag: 'NEET, assertion–reason',
        q: 'Assertion (A): A person with fat malabsorption is likely to be deficient in vitamin K.<br>Reason (R): Vitamin K is a fat-soluble vitamin.<br>(a) Both true, R explains A<br>(b) Both true, R does not explain A<br>(c) A true, R false<br>(d) A false, R true',
        steps: [
          '<b>Reasoning.</b> Vitamin K is fat-soluble (A is true; R is true). Fat malabsorption impairs the absorption of all fat-soluble vitamins (A, D, E, K) because they require bile salts and chylomicrons for intestinal uptake. R is the correct structural explanation for A.',
        ],
        ans: '(a) Both true, R explains A.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board, 3 marks',
        q: 'Why are B-complex vitamins (other than B<sub>12</sub>) not stored in the body to any significant extent, while vitamin A can accumulate to toxic levels?',
        steps: [
          '<b>Reasoning.</b> The solubility class determines storage behaviour. Water-soluble vitamins dissolve in plasma and intracellular fluid; excess is filtered by the kidneys and excreted. Fat-soluble vitamins dissolve in dietary fat, are packaged into chylomicrons, and get deposited in liver and adipose tissue where they resist excretion.',
        ],
        ans: 'B-complex vitamins (vitamin B<sub>12</sub> apart) are water-soluble. They circulate freely and any excess is rapidly excreted in urine. Vitamin A is fat-soluble; it is stored in the liver (as retinyl esters) and adipose tissue, and because it is not water-soluble it cannot be readily excreted, so excess accumulates and can reach toxic levels (hypervitaminosis A).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Classify into water-soluble and fat-soluble: Thiamine, Riboflavin, Niacin, Vitamin C, Vitamin A, Vitamin D, Vitamin E, Vitamin K.',
            a: 'Water-soluble: Thiamine (B<sub>1</sub>), Riboflavin (B<sub>2</sub>), Niacin (B<sub>3</sub>), Vitamin C. Fat-soluble: Vitamin A, Vitamin D, Vitamin E, Vitamin K.',
          },
          {
            q: '[CUET] Name the vitamin whose deficiency causes (i) rickets, (ii) beriberi, (iii) pellagra, (iv) scurvy, (v) prolonged bleeding.',
            a: '(i) Vitamin D: rickets; (ii) Thiamine (B<sub>1</sub>): beriberi; (iii) Niacin (B<sub>3</sub>): pellagra; (iv) Vitamin C: scurvy; (v) Vitamin K: prolonged bleeding.',
          },
          {
            q: '[NEET] Why does a strict vegan need a vitamin B<sub>12</sub> supplement while a non-vegetarian typically does not?',
            a: 'Vitamin B<sub>12</sub> is synthesised only by microorganisms. Animal products (meat, liver, eggs, dairy) contain B<sub>12</sub> from these microbes; plant foods do not. A strict vegan consumes no animal products and therefore has no dietary source of B<sub>12</sub>, requiring supplementation or fortified foods.',
          },
          {
            q: '[CBSE] State one coenzyme derived from each of the following: (i) Riboflavin, (ii) Niacin, (iii) Pyridoxine. Name the reaction type each coenzyme participates in.',
            a: '(i) Riboflavin → FAD (or FMN); participates in oxidation-reduction reactions (electron transfer). (ii) Niacin → NAD<sup>+</sup> (or NADP<sup>+</sup>); participates in oxidation-reduction (hydride transfer). (iii) Pyridoxine → Pyridoxal phosphate; participates in transamination reactions (amino group transfer).',
          },
          {
            q: '[NEET, assertion–reason] A: Niacin deficiency causes the disease pellagra. R: Niacin is the precursor of NAD<sup>+</sup>, a coenzyme in oxidation-reduction reactions. Choose the correct relationship.',
            a: 'Both A and R are true, and R correctly explains A. Niacin is the precursor of NAD<sup>+</sup>, a coenzyme in redox reactions; deficiency of the vitamin impairs these reactions, producing the clinical syndrome of pellagra.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 574 to 577 ─────────────────────────
  {
    n: 'C',
    title: 'Biochemical Tests for Biomolecule Identification',
    extra: true,
    kalam: 'Test procedure: five essential tests, each with a specific principle and a specific positive result.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter’s Procedure A ends “Analyse each fraction”, but never says how. The qualitative tests that do the analysing are given here. The board practicals and NEET sometimes ask for the result of these tests.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Test procedure: five essential tests, each with a specific principle and a specific positive result.</b>',
      },
      {
        t: 'p',
        html: '<b>Test 1: Molisch test (general test for carbohydrates).</b><br>• Reagent: α-naphthol in ethanol + conc. H<sub>2</sub>SO<sub>4</sub><br>• Procedure: Add α-naphthol to sample, then run conc. H<sub>2</sub>SO<sub>4</sub> down the side of the tube.<br>• Positive result: violet ring at the acid–sample interface.<br>• Principle: Concentrated acid dehydrates carbohydrates to furfural (from pentoses) or hydroxymethylfurfural (from hexoses), which condenses with α-naphthol to give a coloured product.<br>• Link to the chapter: the acid first hydrolyses glycosidic bonds (the reverse of the dehydration that formed them) and then dehydrates the monosaccharides released.',
      },
      {
        t: 'p',
        html: '<b>Test 2: Benedict’s test (test for reducing sugars).</b><br>• Reagent: Alkaline copper sulfate (CuSO<sub>4</sub> + sodium carbonate + sodium citrate)<br>• Procedure: Add Benedict’s reagent to sample, boil for 2–3 minutes.<br>• Positive result: Green → yellow → orange → brick-red precipitate of Cu<sub>2</sub>O, proportional to reducing sugar concentration.<br>• Principle: The aldehyde or α-hydroxy-ketone group of the reducing sugar reduces Cu<sup>2+</sup> ions to Cu<sup>+</sup> (precipitated as cuprous oxide, Cu<sub>2</sub>O) while being oxidised to a carboxylic acid.<br>• Reducing sugars: glucose, fructose, maltose, lactose.<br>• Non-reducing sugars: sucrose (the glycosidic bond locks both reactive groups).<br>• Note: Sucrose gives a negative Benedict’s test unless first hydrolysed with acid (which converts it to glucose + fructose, both reducing).',
      },
      {
        t: 'p',
        html: '<b>Test 3: Iodine test (specific for starch).</b><br>• Reagent: Dilute iodine solution (KI<sub>3</sub>)<br>• Procedure: Add iodine solution to sample.<br>• Positive result: Deep blue-black colour.<br>• Principle: Iodine molecules (I<sub>2</sub>) fit inside the helical cavities of amylose (the linear component of starch) forming a charge-transfer complex. Cellulose does not give this test because its β-1,4-linked glucose chains do not form the helical structure.<br>• Link to the chapter: starch is amylose + amylopectin; amylose is the helical component.',
      },
      {
        t: 'p',
        html: '<b>Test 4: Biuret test (test for peptide bonds / proteins).</b><br>• Reagent: Dilute CuSO<sub>4</sub> in strongly alkaline medium (NaOH)<br>• Procedure: Add CuSO<sub>4</sub> solution to alkaline protein solution.<br>• Positive result: Violet-purple colour.<br>• Principle: Peptide bonds (–CO–NH–) in proteins chelate Cu<sup>2+</sup> ions, forming a violet coordination complex. At least two peptide bonds (a tripeptide or longer chain) are needed, so proteins give a strong violet.<br>• Note: Free amino acids (e.g., glycine) give a negative test because they contain no peptide bonds.',
      },
      {
        t: 'p',
        html: '<b>Test 5: Sudan III test (test for lipids).</b><br>• Reagent: Sudan III in ethanol (or oil red O)<br>• Procedure: Add Sudan III to sample, shake.<br>• Positive result: Red-orange staining of lipid droplets.<br>• Principle: Sudan III is a fat-soluble dye that dissolves preferentially in the hydrophobic lipid phase.<br>• Alternative: The emulsion test: dissolve sample in ethanol, add water; lipids give a milky emulsion.',
      },
      {
        t: 'table',
        title: 'Summary table for revision',
        head: ['Test', 'Target', 'Reagent', 'Positive result'],
        rows: [
          ['Molisch', 'Carbohydrates (general)', 'α-naphthol + conc. H<sub>2</sub>SO<sub>4</sub>', 'Violet ring at interface'],
          ['Benedict’s', 'Reducing sugars', 'Alkaline CuSO<sub>4</sub>, boil', 'Green/yellow/orange/red Cu<sub>2</sub>O precipitate'],
          ['Iodine', 'Starch', 'KI<sub>3</sub> solution', 'Blue-black colour'],
          ['Biuret', 'Peptide bonds / proteins', 'CuSO<sub>4</sub> in NaOH', 'Violet-purple colour'],
          ['Sudan III', 'Lipids', 'Sudan III in ethanol', 'Red-orange staining'],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board, 3 marks',
        q: 'You are given three unknown solutions: one contains glucose, one contains sucrose, and one contains starch. Describe two chemical tests you would use to identify each.',
        steps: [
          '<b>Reasoning.</b> Use the test hierarchy: starch first (iodine test, specific), then reducing vs non-reducing sugar (Benedict’s test, which distinguishes glucose from sucrose, both of which give negative iodine test).',
        ],
        ans: 'Add iodine solution to all three. The starch solution turns blue-black immediately: starch identified. The remaining two give no colour with iodine. Boil Benedict’s reagent with both remaining solutions. Glucose gives a brick-red Cu<sub>2</sub>O precipitate (reducing sugar). Sucrose gives no precipitate (non-reducing sugar; would turn positive only after acid hydrolysis).',
      },
      {
        t: 'ex',
        tag: 'NEET, MCQ reasoning',
        q: 'A sample gives a violet ring in the Molisch test and a blue-black colour with iodine, but a negative Benedict’s test. What does it contain?',
        steps: [
          '<b>Reasoning.</b> Molisch positive ⇒ carbohydrate present. Iodine positive ⇒ starch present. Benedict negative ⇒ no reducing sugar. The sample contains starch and no free reducing sugar (a non-reducing carbohydrate such as sucrose is not ruled out by these three tests).',
        ],
        ans: 'Starch. The iodine test confirms starch; the negative Benedict’s test confirms no free reducing sugars are present.',
      },
      {
        t: 'ex',
        tag: 'CUET, MCQ',
        q: 'A protein solution and a glycine solution are both tested with the Biuret reagent. Which statement is correct?<br>(a) Both give a violet colour.<br>(b) Neither gives a colour.<br>(c) Protein gives violet; glycine gives no colour.<br>(d) Glycine gives violet; protein gives no colour.',
        steps: [
          '<b>Reasoning.</b> The Biuret test requires at least two peptide bonds in proximity. A protein has many peptide bonds and gives a strong violet colour. Glycine is a single amino acid; it has no peptide bonds at all and cannot give a Biuret positive. Free amino acids give negative Biuret tests.',
        ],
        ans: '(c) Protein gives violet; glycine gives no colour. The Biuret test detects peptide bonds, not amino groups.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the principle and positive result of: (i) Benedict’s test, (ii) Biuret test, (iii) Iodine test.',
            a: '(i) Benedict’s: aldehyde/α-hydroxy-ketone of reducing sugar reduces Cu<sup>2+</sup> to Cu<sup>+</sup>; brick-red Cu<sub>2</sub>O precipitate. (ii) Biuret: Cu<sup>2+</sup> forms violet complex with peptide bonds (–CO–NH–); violet colour. (iii) Iodine: I<sub>2</sub> molecules enter helical cavities of amylose; blue-black colour.',
          },
          {
            q: '[NEET] A student adds Benedict’s reagent to a solution of sucrose and boils it. The result is negative. The student then hydrolyses the sucrose with dilute acid, neutralises it, and repeats the test. What will be observed and why?',
            a: 'After acid hydrolysis: sucrose → glucose + fructose (both reducing). The second Benedict’s test will give a positive result: green/yellow/orange/red precipitate proportional to the concentration of the hydrolysis products.',
          },
          {
            q: '[CUET] An unknown sample gives a violet ring with Molisch reagent, a violet colour with Biuret reagent, and a red-orange stain with Sudan III. What biomolecule classes does it contain?',
            a: 'Molisch positive ⇒ carbohydrate present. Biuret positive ⇒ protein present. Sudan III positive ⇒ lipid present. The sample contains all three biomolecule classes.',
          },
          {
            q: '[NEET] Why does cellulose not give the iodine test, even though it is a polymer of glucose?',
            a: 'Cellulose has β-1,4-linked glucose units that form straight, inter-chain hydrogen-bonded chains, not the helical amylose structure. Iodine molecules cannot enter the tightly packed cellulose fibres, so no charge-transfer complex forms and no colour is observed.',
          },
          {
            q: '[CBSE] Distinguish between a reducing sugar and a non-reducing sugar on the basis of the Benedict’s test.',
            a: 'Reducing sugars (glucose, fructose, maltose, lactose) have a free aldehyde or α-hydroxy-ketone group that can reduce Cu<sup>2+</sup> to Cu<sup>+</sup> in Benedict’s test, giving a coloured precipitate. Non-reducing sugars (sucrose) have both reactive groups locked in the glycosidic bond and cannot reduce Cu<sup>2+</sup>; they give a negative Benedict’s test unless first hydrolysed.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 578 to 582 ─────────────────────────
  {
    n: 'D',
    title: 'Cholesterol Structure and Amino Acid Metabolism',
    extra: true,
    kalam: 'Cholesterol, the characteristic steroid of animal membranes, appears in NEET questions as a membrane component.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Two topics that NEET links to this chapter are developed here. Cholesterol, the characteristic steroid of animal membranes, appears in NEET questions as a membrane component. The chapter follows amino acids into peptides and proteins, but never follows what happens to their nitrogen. Here the nitrogen atom is followed through transamination and deamination into the urea cycle, the route of nitrogen disposal in the liver.',
      },

      { t: 'part', title: 'D1: Cholesterol: Structure and Membrane Function' },
      {
        t: 'p',
        html: '<b>Structure.</b> Cholesterol is a tetracyclic sterol (cyclopentanophenanthrene nucleus):<br>• Four fused rings (A, B, C, D): three six-membered rings and one five-membered ring.<br>• C3-hydroxyl group: the only polar part; orients toward the aqueous surface.<br>• Short hydrocarbon tail at C17 (non-polar).<br>• One double bond between C5 and C6.<br>• Two angular methyl groups (C18 on C13 and C19 on C10) at the ring junctions; the side chain carries further methyl groups.<br>• Molecular formula C<sub>27</sub>H<sub>46</sub>O; molecular weight about 387 Da.',
      },
      {
        t: 'p',
        html: '<b>Role in cell membranes (animal cells).</b><br>Lipids, above all phospholipids, form the membrane bilayer. Cholesterol is the characteristic sterol of animal membranes; plant membranes carry mainly phytosterols, with only traces of cholesterol. Its positioning within the bilayer:<br>• The planar steroid ring system slots between the fatty acid chains of phospholipids.<br>• The C3-hydroxyl group interacts with the polar head groups of phospholipids.<br>• The hydrocarbon tail buries in the hydrophobic interior.',
      },
      {
        t: 'defgrid',
        title: 'Effect on membrane properties',
        rows: [
          { k: 'High temperature', v: 'Decreases fluidity: cholesterol fills gaps between phospholipids, restricting their movement' },
          { k: 'Low temperature', v: 'Prevents tight packing of hydrocarbon chains, maintaining fluidity' },
        ],
      },
      {
        t: 'p',
        html: 'This dual regulatory role is why a standard statement is that cholesterol acts as a membrane fluidity buffer. Animal cells require cholesterol precisely because it permits function across a range of temperatures. Plant membranes, with only traces of cholesterol, use phytosterols for similar purposes.',
      },
      {
        t: 'p',
        html: '<b>As a metabolic parent molecule.</b> Cholesterol is the parent of:<br>• Steroid hormones (cortisol, aldosterone, testosterone, oestradiol: all made from cholesterol).<br>• Bile salts (cholesterol-derived emulsifiers in digestion).<br>Vitamin D<sub>3</sub> (cholecalciferol) comes from the same pathway: it is formed by UV action on 7-dehydrocholesterol, a sterol of the cholesterol pathway, in skin.',
      },

      { t: 'part', title: 'D2: Amino Acid Metabolism: Transamination and Deamination' },
      {
        t: 'p',
        html: 'Amino acids are the monomers of proteins, linked by peptide bonds. This section follows the nitrogen atom after a protein is broken down: protein → free amino acids → transamination → oxidative deamination → ammonia → urea cycle.',
      },
      {
        t: 'p',
        html: '<b>Transamination.</b><br>The reversible transfer of an α-amino group (–NH<sub>2</sub>) from an amino acid to an α-keto acid:<br>Amino acid<sub>1</sub> + α-keto acid<sub>2</sub> ⇌ α-keto acid<sub>1</sub> + Amino acid<sub>2</sub><br>Catalysed by transaminases (aminotransferases), with pyridoxal phosphate (PLP, derived from vitamin B<sub>6</sub>) as the essential cofactor.',
      },
      {
        t: 'p',
        html: 'Major transaminases:<br>• Alanine transaminase (ALT): Alanine ⇌ Pyruvate<br>• Aspartate transaminase (AST): Aspartate ⇌ Oxaloacetate<br>• Glutamate is the central collection point: most amino acids feed their nitrogen into glutamate via transamination.',
      },
      {
        t: 'p',
        html: '<b>Oxidative deamination.</b><br>Glutamate undergoes oxidative deamination by glutamate dehydrogenase (mitochondrial, in liver):<br>Glutamate + NAD<sup>+</sup> + H<sub>2</sub>O → α-ketoglutarate + NH<sub>3</sub> + NADH + H<sup>+</sup><br>The free ammonia released is toxic (especially to the brain). It must be converted to urea immediately.',
      },
      {
        t: 'p',
        html: '<b>The urea cycle (Ornithine cycle).</b><br>Named for the regenerable intermediate ornithine. Occurs mainly in the liver (mitochondria + cytosol). Net reaction:<br>NH<sub>3</sub> + CO<sub>2</sub> + 3 ATP + Aspartate + 2 H<sub>2</sub>O → Urea + Fumarate + 2 ADP + AMP + PP<sub>i</sub> + 2 P<sub>i</sub>',
      },
      {
        t: 'p',
        html: 'Five steps:<br>1. <b>Carbamoyl phosphate synthetase I</b> (mitochondria): NH<sub>3</sub> + CO<sub>2</sub> + 2 ATP → Carbamoyl phosphate.<br>2. <b>Ornithine transcarbamylase</b> (mitochondria): Carbamoyl phosphate + Ornithine → Citrulline.<br>3. <b>Argininosuccinate synthetase</b> (cytosol): Citrulline + Aspartate + ATP → Argininosuccinate + AMP + PP<sub>i</sub>.<br>4. <b>Argininosuccinate lyase</b> (cytosol): Argininosuccinate → Arginine + Fumarate.<br>5. <b>Arginase</b> (cytosol): Arginine + H<sub>2</sub>O → Ornithine + Urea.',
      },
      {
        t: 'p',
        html: 'Ornithine is regenerated and re-enters the mitochondrion: the cycle runs continuously as long as ammonia is supplied. Energy cost: 3 ATP molecules are consumed: 2 ATP → 2 ADP + 2 P<sub>i</sub> at carbamoyl phosphate synthetase I, and 1 ATP → AMP + PP<sub>i</sub> at argininosuccinate synthetase (PP<sub>i</sub> is then hydrolysed to 2 P<sub>i</sub>), equal to 4 high-energy phosphate bonds.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET, MCQ',
        q: 'Which amino acid is the central collection point for amino-group nitrogen?',
        steps: [
          '<b>Reasoning.</b> Many transaminases (for example ALT with alanine, AST with aspartate) pass the amino group to α-ketoglutarate, giving glutamate. Glutamate is then deaminated by glutamate dehydrogenase.',
        ],
        ans: 'Glutamate.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board, 3 marks',
        q: 'With the help of a flow diagram, trace the path of nitrogen from dietary protein to urea excretion in the liver.',
        steps: [
          '<b>Reasoning.</b> Protein synthesis joins monomers into a polymer; nitrogen disposal runs in the reverse direction. Each step must be named.',
        ],
        ans: 'Dietary protein → (digestion) amino acids → (absorption) blood → (uptake by liver) hepatic amino acids. In liver: amino acids undergo <b>transamination</b> (nitrogen transfers to α-ketoglutarate to form glutamate) → (oxidative deamination of glutamate) free NH<sub>3</sub>. NH<sub>3</sub> + CO<sub>2</sub> → (urea cycle) <b>urea</b>. Urea → (blood) kidneys → (urine) excreted.',
      },
      {
        t: 'ex',
        tag: 'NEET, assertion–reason',
        q: 'Assertion (A): Glutamate dehydrogenase is a key enzyme linking amino acid metabolism to the urea cycle.<br>Reason (R): Glutamate dehydrogenase produces free ammonia from glutamate, and free ammonia is the first substrate of the urea cycle.',
        steps: [
          '<b>Reasoning.</b> Both statements are true. Glutamate dehydrogenase (in mitochondria) converts glutamate to α-ketoglutarate, releasing NH<sub>3</sub>. This NH<sub>3</sub> is the immediate source of one nitrogen atom in urea (the other comes from aspartate). R is the precise biochemical mechanism connecting A.',
        ],
        ans: '(a) Both true, R explains A.',
      },
      {
        t: 'ex',
        tag: 'CUET, MCQ',
        q: 'Which of the following statements about cholesterol is incorrect?<br>(a) It is a sterol with a tetracyclic ring system.<br>(b) It is the characteristic sterol of animal cell membranes.<br>(c) Its biosynthetic pathway supplies 7-dehydrocholesterol, from which vitamin D<sub>3</sub> forms in the skin.<br>(d) It is synthesised from amino acids.',
        steps: [
          '<b>Reasoning.</b> Statements (a), (b) and (c) are true. Cholesterol is synthesised from acetyl-CoA (the two-carbon precursor), not from amino acids.',
        ],
        ans: '(d) Cholesterol is synthesised from acetyl-CoA, not from amino acids.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Draw the structure of cholesterol and label: (i) the tetracyclic ring system, (ii) the hydroxyl group, (iii) the hydrocarbon tail.',
            a: 'Structure: four fused rings labelled A–D; rings A, B and C are six-membered (ring B carries the C5=C6 double bond), ring D is five-membered. The C3-hydroxyl (–OH) is on ring A. The hydrocarbon tail extends from ring D at C17.',
          },
          {
            q: '[NEET] Explain the dual effect of cholesterol on membrane fluidity at high and low temperatures.',
            a: 'At high temperature: cholesterol fills gaps between phospholipid fatty acid chains, restricting their lateral movement, thereby decreasing fluidity (preventing the membrane from becoming too fluid). At low temperature: the rigid planar rings of cholesterol prevent the hydrocarbon chains from packing tightly and crystallising, thereby preventing the membrane from becoming too rigid: fluidity is maintained.',
          },
          {
            q: '[NEET] Define transamination and state the coenzyme required. Name one transaminase and its amino acid/keto acid pair.',
            a: 'Transamination: the reversible transfer of an amino group from an α-amino acid to an α-keto acid, catalysed by a transaminase (aminotransferase). Required coenzyme: pyridoxal phosphate (PLP), derived from vitamin B<sub>6</sub>. Example: Alanine transaminase (ALT): Alanine + α-ketoglutarate ⇌ Pyruvate + Glutamate.',
          },
          {
            q: '[CUET] Describe the role of glutamate dehydrogenase in nitrogen metabolism. Why is this step clinically important?',
            a: 'Glutamate dehydrogenase catalyses the oxidative deamination of glutamate, producing free ammonia (NH<sub>3</sub>), α-ketoglutarate, and NADH. This step is clinically important because free ammonia is highly neurotoxic; the liver must convert it to urea rapidly. Elevated blood ammonia (hyperammonaemia) causes cerebral oedema and neurological deterioration. Glutamate dehydrogenase is the gateway between transamination (which handles amino group transfer) and the urea cycle (which disposes of the released nitrogen).',
          },
          {
            q: '[NEET] With a flow diagram, show the major steps of the urea cycle up to the formation of citrulline in the mitochondria.',
            a: 'NH<sub>3</sub> + CO<sub>2</sub> + 2 ATP → (CPS I) Carbamoyl phosphate. Carbamoyl phosphate + Ornithine → (OTC) Citrulline. (Citrulline then moves to the cytosol to combine with aspartate in subsequent steps: Citrulline + Aspartate → Argininosuccinate → Arginine + Fumarate → Ornithine + Urea.)',
          },
          {
            q: '[CBSE] Why does a person with severe liver failure show elevated blood ammonia levels? Name the enzyme deficient in hereditary urea cycle disorders.',
            a: 'The liver is the main site of the urea cycle. In liver failure, urea cycle enzymes are reduced or absent, so ammonia cannot be converted to urea and accumulates in the blood. Enzymes involved include carbamoyl phosphate synthetase I (CPS I), ornithine transcarbamylase (OTC), argininosuccinate synthetase, argininosuccinate lyase, and arginase: any of which can be deficient in hereditary urea cycle disorders.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · p. 582 ─────────────────────────
  {
    n: 'E',
    title: 'Summary Checklist',
    extra: true,
    kalam: 'Use this as a final pass before the examination.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Use this as a final pass before the examination. If you can tick every item without hesitation, you have the key results of these additional topics; the topic cheat sheets cover the rest.',
      },

      { t: 'part', title: 'Summary Checklist' },
      {
        t: 'p',
        html: `□ ${Km} is the substrate concentration at ${v} = ${fr(Vmax, '2')}; ${Vmax} is the asymptote of the velocity curve.<br>□ Competitive inhibition: ${Vmax} unchanged, ${KmApp} increases; lines on Lineweaver-Burk share the <i>y</i>-intercept.<br>□ Non-competitive inhibition: ${Vmax} decreases, ${Km} unchanged; (pure non-competitive: −${fr('1', Km)} is unchanged, so the lines meet on the <i>x</i>-axis).<br>□ Water-soluble vitamins: B-complex + C; stored minimally; excreted in urine; B-complex: coenzyme precursors.<br>□ Fat-soluble vitamins: A, D, E, K; stored in liver/adipose; require fat absorption; toxicity possible.<br>□ One deficiency disease per major vitamin (beriberi, pellagra, scurvy, rickets, night blindness, prolonged bleeding).<br>□ Molisch: violet ring, carbohydrates. Benedict’s: brick-red precipitate, reducing sugars.<br>□ Iodine: blue-black, starch (not cellulose). Biuret: violet, peptide bonds / proteins.<br>□ Sudan III: red-orange staining, lipids.<br>□ Cholesterol: tetracyclic sterol; dual effect on membrane fluidity; parent of the steroid hormones and bile salts; its pathway gives 7-dehydrocholesterol, the precursor of vitamin D<sub>3</sub>.<br>□ Transamination: PLP-requiring enzymes transfer amino groups; glutamate is the collection point.<br>□ Oxidative deamination: glutamate dehydrogenase releases NH<sub>3</sub> (toxic) in the mitochondria.<br>□ Urea cycle: five steps; CPS I and OTC are mitochondrial; ornithine is regenerated; two nitrogens enter per urea molecule.<br>□ One urea cycle enzyme deficiency causes hyperammonaemia: the clinical consequence of failed nitrogen disposal.`,
      },
    ],
  },

  // ───────────────────────── Additional topic F (the book's Addendum P) · pp. 583 to 590 ─────────────────────────
  {
    n: 'F',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'This additional topic summarises how NEET and the CBSE board examinations have tested this chapter.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This additional topic summarises how NEET and the CBSE board examinations have tested this chapter: which topics are asked, the question formats that recur, the traps built into the options, and a graded practice set.',
      },

      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: `In the book’s estimate this is a regularly asked chapter, of medium difficulty. NEET typically asks <b>2–3 questions</b> from it in each paper (the book’s estimate from past papers, not official figures). They cluster around five topics:<br>• <b>Enzymes</b>: ${Km}, ${Vmax}, turnover number, holoenzyme and apoenzyme, ribozymes, inhibition.<br>• <b>Amino acids and proteins</b>: classification (acidic, basic, neutral, aromatic), structural levels, bonds.<br>• <b>Lipids and carbohydrates</b>: types, functions, glycosidic and ester bonds.<br>• <b>Nucleic acids and nucleotides</b>: structure and base pairing.<br>• <b>Analysis of tissue composition</b>: acid-soluble and acid-insoluble fractions, primary and secondary metabolites.`,
      },
      {
        t: 'p',
        html: 'In the book’s estimate, protein structure and amino-acid classification dominate the “correct/incorrect statement” format; enzymes supply the greatest variety of question types.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      {
        t: 'p',
        html: 'NEET has mostly used a small number of formats for this chapter, six of which recur. Mastering the template for each is more efficient than memorising every possible question.',
      },
      { t: 'p', html: '<b>Archetype 1: Fact/Definition Recall</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “Which of the following is the example of acidic amino acid?” or “A fat has ______.” Straight NCERT definitions; four plausible options.<br><b>Approach:</b> Read the stem and produce the answer from memory before looking at the options. If your answer isn’t there, eliminate the three that are wrong.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'The simplest amino acid is:<br>(a) Glycine<br>(b) Proline<br>(c) Leucine<br>(d) Tryptophan',
        steps: [
          '<b>Solution:</b> Glycine has a hydrogen atom as its R-group, making it the smallest (simplest) and the only achiral standard amino acid. Proline, leucine and tryptophan all have R-groups other than H, so their α-carbons are chiral.',
        ],
        ans: '(a)',
      },
      { t: 'p', html: '<b>Archetype 2: The “Find the Incorrect” Statement</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “Which of the following statement is incorrect?” or “Select the incorrect statement.” This format tests precision; three statements are true, one is not.<br><b>Approach:</b> Verify the statement you suspect is wrong. Do not assume the others are correct until checked.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Select the incorrect statement.<br>(a) Lipids are generally insoluble in water.<br>(b) Lysine is a neutral amino acid.<br>(c) Glycogen is stored in liver and muscles.<br>(d) Coenzymes are organic compounds.',
        steps: [
          '<b>Solution:</b><br>• <b>(a)</b> True. Lipids are hydrophobic and generally insoluble in water; they dissolve in organic solvents such as chloroform.<br>• <b>(b)</b> <b>False: this is the answer.</b> Lysine carries a second –NH<sub>2</sub> group on its side chain, making it a basic amino acid, not a neutral one. Neutral amino acids carry one –NH<sub>2</sub> and one –COOH.<br>• <b>(c)</b> True. Glycogen is the animal storage polysaccharide, held in liver and skeletal muscle.<br>• <b>(d)</b> True. Coenzymes are small organic molecules, often vitamin-derived (e.g. NAD<sup>+</sup> from niacin).',
        ],
        ans: '(b) (Lysine is a basic amino acid, not neutral.)',
      },
      { t: 'p', html: '<b>Archetype 3: Assertion–Reason</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> An Assertion (A) followed by a Reason (R). The student must decide whether A is true, whether R is true, and whether R correctly explains A.<br><b>Approach:</b><br>1. Is A true?<br>2. Is R true?<br>3. Does R specifically and directly cause or explain A?<br>If both are true but R does not explain A, the answer is <b>(b)</b>.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Assertion (A):</b> A coenzyme or other organic cofactor that is very tightly bound to an enzyme protein is called a prosthetic group.<br><b>Reason (R):</b> A complete, catalytically active enzyme together with its bound prosthetic group is called an apoenzyme.<br>(a) Both true, R explains A<br>(b) Both true, R not the explanation<br>(c) A true, R false<br>(d) A false, R true',
        steps: [
          '<b>Solution:</b> A is true: tightly bound organic cofactors are prosthetic groups. R is false: the complete active enzyme (apoenzyme + prosthetic group) is called a <b>holoenzyme</b>, not an apoenzyme. The apoenzyme is the inactive protein part.',
        ],
        ans: '(c)',
      },
      { t: 'p', html: '<b>Archetype 4: Match-the-Column</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Column I (biomolecules/terms) matched to Column II (examples/functions). Often involves 4–5 items per column.<br><b>Approach:</b> Match the easiest, most unique pair first. Cross out used items.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Match Column I with Column II.<br>Column I: A. Collagen; B. Trypsin; C. Insulin; D. GLUT-4<br>Column II: I. Glucose transport; II. Hormone; III. Intercellular ground substance; IV. Enzyme<br>(a) A–III; B–IV; C–II; D–I<br>(b) A–I; B–IV; C–II; D–III<br>(c) A–III; B–II; C–IV; D–I<br>(d) A–IV; B–III; C–I; D–II',
        steps: [
          '<b>Solution:</b> B (Trypsin) is an enzyme, so B matches <b>IV</b>. C (Insulin) is a hormone, so C matches <b>II</b>. D (GLUT-4) is a glucose transporter, so D matches <b>I</b>. A (Collagen) is the fibrous structural protein of connective tissue, so A matches <b>III</b>.',
        ],
        ans: '(a) A–III; B–IV; C–II; D–I',
      },
      { t: 'p', html: '<b>Archetype 5: Diagram/Structure Identification</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A structural formula or schematic is shown, and the student must identify a bond, a molecule, or a specific atom involved.<br><b>Approach:</b> For bonds (glycosidic, peptide, ester, phosphodiester), count the connecting atoms. A peptide bond links the carbon of a carbonyl group (–C(=O)–) to the nitrogen of an amino group (–N–).',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'The atoms of an amino acid are numbered below. Which two atoms are involved in forming a peptide bond with another amino acid?<br><sup>1</sup>NH<sub>2</sub> − <sup>2</sup>CH(R) − <sup>3</sup>C(= <sup>4</sup>O) − <sup>5</sup>OH<br>(a) 1 and 3<br>(b) 1 and 5<br>(c) 2 and 4<br>(d) 2 and 3',
        steps: [
          '<b>Solution:</b> A peptide bond forms between the carboxyl carbon (atom 3) of one amino acid and the amino nitrogen (atom 1) of the next, with loss of water (the –OH of the carboxyl group, atom 5, leaves). The atoms that become bonded are therefore the carbonyl carbon (3) and the amino nitrogen (1).',
        ],
        ans: '(a) 1 and 3',
      },
      { t: 'p', html: '<b>Archetype 6: “Only Secondary Metabolite” / Set Identification</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “Which set lists only secondary metabolites?” Tests the distinction between primary (housekeeping) and secondary (ecological/commercial) roles.<br><b>Approach:</b> Memorise the primary list (sugars, amino acids, nucleotides, lipids) and the secondary list (alkaloids, pigments, toxins, rubber). Anything from the primary list disqualifies a set.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which of the following sets lists only secondary metabolites?<br>(a) Glucose, Alanine, ATP<br>(b) Morphine, Rubber, Carotenoid<br>(c) Starch, Cellulose, Glycogen<br>(d) Linoleic acid, Lecithin, Glycerol',
        steps: [
          '<b>Solution:</b><br>• <b>(a)</b> All primary (energy/metabolism).<br>• <b>(b)</b> Morphine (alkaloid), rubber (polymer latex), carotenoid (pigment): all secondary.<br>• <b>(c)</b> Starch and glycogen are primary storage carbohydrates, so the set is not all secondary (cellulose is listed among the secondary polymeric substances, but one primary member disqualifies the set).<br>• <b>(d)</b> All primary (lipids and their components).',
        ],
        ans: '(b)',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: 'NEET constructs distractors from specific, predictable student errors. Being aware of the target makes the option elimination obvious.',
      },
      {
        t: 'mistakes',
        items: [
          '<b>The Lipid Paradox (Not a Polymer):</b><br><b>Trap:</b> Calling lipids “macromolecules” because they appear in the acid-insoluble fraction, or believing they are polymers of fatty acids.<br><b>Why it works:</b> The acid-insoluble placement is due to membrane aggregation, not molecular weight or polymerisation.<br><b>Fix:</b> “Lipids are small molecules that travel in big company.”',
          '<b>Apo/Holo Confusion:</b><br><b>Trap:</b> Swapping the definitions of apoenzyme (inactive protein) and holoenzyme (active whole).<br><b>Fix:</b> “Apo” = Absent (inactive). “Holo” = Whole (active).',
          '<b>The Enzyme Equilibrium Myth:</b><br><b>Trap:</b> Believing an enzyme “speeds up the reaction” means it “pushes the reaction to make more product” or shifts equilibrium.<br><b>Fix:</b> Enzymes lower the activation energy barrier for both forward and reverse reactions equally. They never change the equilibrium constant.',
          '<b>Competitive vs. Non-competitive Inhibition:</b><br><b>Trap:</b> Thinking competitive inhibitors bind “somewhere else” (that is non-competitive).<br><b>Fix:</b> Competitive inhibitors mimic the substrate and park in the active site. Non-competitive inhibitors bind elsewhere and cannot be out-competed by substrate.',
          '<b>Lysine is Basic:</b><br><b>Trap:</b> Students see the extra nitrogen and assume neutrality or forget the charge.<br><b>Fix:</b> Lysine (and arginine) are basic amino acids.',
          '<b>Chitin is NOT a Storage Polysaccharide:</b><br><b>Trap:</b> Students associate “polysaccharide” with “storage” (starch/glycogen) and pick chitin because it sounds technical.<br><b>Fix:</b> Chitin is a structural, nitrogen-containing polysaccharide (a polymer of the amino sugar N-acetylglucosamine) found in arthropod exoskeletons and fungal cell walls.',
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'p',
        html: 'The following 10 questions move from <b>Easy (Recall)</b> to <b>Hard (Analysis)</b>.',
      },
      {
        t: 'practice',
        items: [
          {
            q: '[Easy: Recall] Which reagent is used to grind living tissue for the preliminary separation of acid-soluble and acid-insoluble fractions?<br>(a) Benedict’s reagent<br>(b) Trichloroacetic acid<br>(c) Ninhydrin<br>(d) Iodine solution',
            a: '<b>Answer:</b> (b)',
          },
          {
            q: '[Easy: Definition] A nucleotide differs from a nucleoside by the presence of an additional:<br>(a) Pentose sugar<br>(b) Nitrogenous base<br>(c) Phosphate group<br>(d) Hydrogen bond',
            a: '<b>Answer:</b> (c)',
          },
          {
            q: '[Medium: Classification] Which of the following is the most basic amino acid?<br>(a) Glycine<br>(b) Histidine<br>(c) Arginine<br>(d) Glutamine',
            a: '<b>Answer:</b> (c)',
          },
          {
            q: '[Medium: Property] Unsaturated fatty acids contain:<br>(a) Only single bonds<br>(b) One or more C=C double bonds<br>(c) No hydrogen<br>(d) A fully saturated chain',
            a: '<b>Answer:</b> (b)',
          },
          {
            q: `[Medium: Kinetics] The ${Km} value of an enzyme is the substrate concentration at which the reaction reaches:<br>(a) Zero velocity<br>(b) 2${Vmax}<br>(c) ${fr('1', '2')}${Vmax}<br>(d) ${Vmax}`,
            a: '<b>Answer:</b> (c)',
          },
          {
            q: '[Medium: Definitions] Which of the following statements is correct regarding enzymes?<br>(a) Holoenzyme = Apoenzyme + Cofactor<br>(b) Coenzyme = Apoenzyme + Holoenzyme<br>(c) Holoenzyme = Coenzyme + Metal ion<br>(d) Apoenzyme = Holoenzyme + Coenzyme',
            a: '<b>Answer:</b> (a)',
          },
          {
            q: '[Medium: Statement Analysis] Select the incorrect statement:<br>(a) Proteins are linear chains of amino acids linked by peptide bonds.<br>(b) Collagen is the most abundant protein in the animal world.<br>(c) Ribozymes are proteinaceous in nature.<br>(d) Cellulose is a component of the plant cell wall.',
            a: '<b>Answer:</b> (c)',
          },
          {
            q: '[Hard: Assertion–Reason] <b>Assertion (A):</b> Human diet should compulsorily contain glycine, serine and tyrosine.<br><b>Reason (R):</b> The human body can synthesise glycine, serine and tyrosine.<br>(a) Both true, R explains A<br>(b) Both true, R not the explanation<br>(c) A true, R false<br>(d) A false, R true',
            a: '<b>Solution:</b> Glycine, serine and tyrosine are <b>non-essential</b> amino acids: the body can make them, so they need not come from the diet (R is true). Only essential amino acids must be supplied by the diet, so A is false.<br><b>Answer:</b> (d)',
          },
          {
            q: '[Hard: Matching] Match the biomolecule with its correct classification:<br>Column I: A. Lecithin; B. Tryptophan; C. Glutamic Acid; D. Palmitic Acid<br>Column II: I. Aromatic Amino Acid; II. Acidic Amino Acid; III. Phospholipid; IV. Fatty Acid<br>(a) A–I; B–II; C–III; D–IV<br>(b) A–III; B–I; C–II; D–IV<br>(c) A–II; B–IV; C–I; D–III<br>(d) A–IV; B–III; C–I; D–II',
            a: '<b>Solution:</b> Lecithin is a phospholipid (III). Tryptophan is an aromatic amino acid (I). Glutamic acid is an acidic amino acid (II). Palmitic acid is a fatty acid (IV).<br><b>Answer:</b> (b)',
          },
          {
            q: '[Hard: Concept Application] An enzyme’s catalytic cycle is listed: (i) Enzyme releases product. (ii) Active site alters shape. (iii) Substrate binds. (iv) ES complex forms product.<br>The correct sequence is:<br>(a) i, ii, iii, iv<br>(b) iv, iii, ii, i<br>(c) iii, ii, iv, i<br>(d) ii, iii, iv, i',
            a: '<b>Solution:</b> Substrate binds, the enzyme fits tighter around it (induced fit), bond breaking or formation occurs in the ES complex, and the product is released: (iii) Substrate binds, (ii) the enzyme alters shape, (iv) the ES complex forms product, (i) the enzyme releases product.<br><b>Answer:</b> (c)',
          },
        ],
      },
    ],
  },
];
