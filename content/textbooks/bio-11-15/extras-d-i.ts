import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 15 (Body Fluids and Circulation), Additional topics D to I, word for word from the Class 11
 * Biology Master Reference (book pp. 922 to 942): D "Cardiac Output: The Exercise Equation" (opens at the foot of
 * p. 922, after Addendum C's practice answers; its practice answers end on p. 924), E "Rh Factor: Genetics and the
 * Exact Mechanism of Erythroblastosis Foetalis" (p. 924 to p. 927), F "Lymphatic Drainage: Named Ducts and Their
 * Territories" (p. 927 to p. 929), G "Anaemia: Classification by Cause" (p. 929 to p. 931), H "Bleeding Disorders and
 * Coagulation Tests" (p. 931 to p. 934) and I "What NEET Actually Asks" (the book's own "Addendum I", p. 934 to p. 942).
 *
 * Topic indexes: D to H = 7 to 11, I = 12. The book's example headings ("Example D.1 - [CBSE Board Level] Cardiac
 * Output Calculation During Exercise") become the example's tag (the bracket) and a bold lead on its question. Where
 * the book prints no answer line of its own, the example's ans is ''. A Column I / Column II list inside a question is
 * set as lines of cells separated by " | ". No drawing occurs on these pages (the Punnett square on p. 926 is a table
 * of letters, written as labelled rows).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic D · pp. 922–924 ─────────────────────────
  {
    n: 'D',
    title: 'Cardiac Output: The Exercise Equation',
    extra: true,
    kalam:
      'The chapter gives the resting cardiac output formula (CO = SV × HR ≈ 70 mL × 72/min ≈ 5 L/min) and lists the sympathetic and parasympathetic effects.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the resting cardiac output formula (CO = SV × HR ≈ 70 mL × 72/min ≈ 5 L/min) and lists the sympathetic and parasympathetic effects. What it omits is the quantitative integration of these effects during exercise: which components change, by how much, and through what mechanism. NEET can ask for this pattern in cardiac-output and blood-distribution questions (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'table',
        title: 'Cardiac output at rest and during exercise',
        head: ['Parameter', 'Rest', 'Strenuous Exercise', 'Mechanism of Change'],
        rows: [
          ['Heart rate', '~72/min', '~180–200/min', 'Sympathetic ↑ + vagal withdrawal'],
          ['Stroke volume', '~70 mL', '~120–130 mL (max)', 'Frank-Starling + sympathetic ↑ contractility'],
          ['Cardiac output', '~5 L/min', '~20–26 L/min', 'Product of the above'],
        ],
      },
      {
        t: 'p',
        html: '<b>Frank-Starling mechanism (the “length-tension” law of the heart).</b> During exercise, increased venous return stretches the ventricular wall → the cardiac muscle fibres lengthen → by the Frank-Starling mechanism, this increases the force of contraction (up to an optimal length). The result: more blood is ejected per beat (increased SV) without any increase in heart rate. This is the primary mechanism by which SV rises in the first minutes of exercise.',
      },
      {
        t: 'p',
        html: '<b>Blood distribution during exercise.</b> At rest, skeletal muscle receives ~20% of cardiac output; during maximal exercise it receives ~80–85%. This redistribution is achieved by: (1) sympathetic vasoconstriction of splanchnic (gut) and renal vessels → blood is diverted; (2) local metabolic vasodilation in active muscles overrides sympathetic constriction; (3) venoconstriction increases venous return (preload) further feeding the Frank-Starling response.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Cardiac Output Calculation During Exercise.</b> A healthy young man has a resting heart rate of 72/min and stroke volume of 70 mL. During exercise, his heart rate rises to 180/min and stroke volume increases to 120 mL. Calculate the percentage increase in cardiac output.',
        steps: [
          'Resting CO = 72 × 70 mL/min = 5040 mL/min ≈ 5.0 L/min. Exercise CO = 180 × 120 mL/min = 21,600 mL/min ≈ 21.6 L/min. Percentage increase = <frac><num>21,600 − 5,040</num><den>5,040</den></frac> × 100% = <frac><num>16,560</num><den>5,040</den></frac> × 100% ≈ 329%. Cardiac output increases by approximately 330% (about a 4.3-fold rise).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '<b>Why Does Stroke Volume Not Continue Rising Indefinitely?</b> A student states: “Stroke volume keeps increasing as heart rate increases, because the heart beats more frequently.” Is this correct?',
        steps: [
          'No. Stroke volume increases only up to a point (~120–130 mL at maximal exercise). Beyond a very high heart rate (the point varies with fitness and is higher in trained people), the diastolic filling time becomes so short that the ventricle cannot fill adequately before the next beat. SV actually falls slightly at very high rates, because end-diastolic volume (preload) falls. This is why cardiac output plateaus at very high heart rates even though the heart is beating much faster.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State two mechanisms that increase stroke volume during exercise.',
            a: '(a) Frank-Starling mechanism: increased venous return stretches ventricular wall, increasing fibre length and force of contraction; (b) Sympathetic stimulation: increases myocardial contractility (positive inotropy), ejecting more blood per beat.',
          },
          {
            q: '[NEET] A person has a cardiac output of 20 L/min at a heart rate of 200/min. Calculate the stroke volume.',
            a: 'SV = <frac><num>CO</num><den>HR</den></frac> = 20,000 mL/min ÷ 200/min = 100 mL per beat.',
          },
          {
            q: '[CUET] Name the mechanism by which increased venous return stretches the ventricle and increases the force of contraction.',
            a: 'The Frank-Starling mechanism (also called the Frank-Starling law of the heart or the length-tension relationship).',
          },
          {
            q: '[NEET] During exercise, blood flow to the gut decreases. Explain the neural mechanism responsible.',
            a: 'Sympathetic vasoconstriction of splanchnic arterioles reduces blood flow to the gut. This diverts blood to active skeletal muscles. Meanwhile, local metabolic factors (lactic acid, CO<sub>2</sub>, adenosine) cause vasodilation in the active muscles, overriding the sympathetic constriction there.',
          },
          {
            q: '[NEET High-Difficulty] Why does the resting cardiac output (~5 L/min) not equal SA node rate (~90–100/min) × 70 mL? (Hint: what factor normally overrides the intrinsic SA node rate at rest?)',
            a: 'At rest, the SA node’s intrinsic rate (~90–100/min) is reined in by dominant parasympathetic (vagal) tone from the cardiac centre in the medulla. The vagus continuously releases acetylcholine, slowing the SA node to ~70–75/min. Cardiac output = (HR overridden by vagus) × SV ≈ 72/min × 70 mL ≈ 5 L/min. The parasympathetic brake is the answer. (NCERT gives the SA node’s rate as 70–75 a minute; answer with that in a NEET paper. The 90–100 a minute is the node’s rate without vagal tone.)',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 924–927 ─────────────────────────
  {
    n: 'E',
    title: 'Rh Factor: Genetics and the Exact Mechanism of Erythroblastosis Foetalis',
    extra: true,
    kalam:
      'The chapter states that erythroblastosis foetalis results from Rh incompatibility and names the prevention method.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter states that erythroblastosis foetalis results from Rh incompatibility, names the prevention method (anti-Rh antibodies after first delivery), and identifies the mother as Rh-negative and foetus as Rh-positive. What it gives only briefly is the genetic basis of Rh status and the step-by-step sensitisation sequence with its timings; the genetics and the allele notation are new. NEET can test both in allele-notation and match-the-column questions.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Rh genetics.</b> The Rh antigen (the D antigen, the most immunogenic) is determined by the RHD gene on chromosome 1. The inheritance follows simple Mendelian dominance:<br>• <b>Rh-positive phenotype (Rh<sup>+</sup>):</b> genotype DD or Dd (at least one functional D allele)<br>• <b>Rh-negative phenotype (Rh<sup>−</sup>):</b> genotype dd (homozygous recessive; no D antigen) (the usual textbook one-gene model; in reality Rh-negative mostly means the RHD gene is absent or non-functional)',
      },
      {
        t: 'p',
        html: 'A person who is Rh-negative lacks the D antigen on their RBC surface. If they are exposed to Rh-positive blood (e.g., during a first pregnancy with an Rh-positive foetus, or a transfusion), their immune system may produce anti-D antibodies.',
      },
      {
        t: 'table',
        title: 'The sensitisation sequence in erythroblastosis foetalis',
        head: ['Pregnancy', 'Event', 'Outcome'],
        rows: [
          [
            'First Rh<sup>+</sup> pregnancy',
            'Foetal Rh<sup>+</sup> RBCs enter maternal circulation (usually at delivery)',
            'Mother is not yet sensitised; no antibodies produced at harmful levels yet',
          ],
          [
            'After first delivery',
            'Anti-Rh (anti-D) immunoglobulin given to the Rh<sup>−</sup> mother',
            'Destroys any foetal Rh<sup>+</sup> cells in maternal blood before her immune system can be primed',
          ],
          [
            'If no anti-D given',
            'Maternal immune system mounts a primary response → anti-D (IgG) produced',
            'Mother is now sensitised',
          ],
          [
            'Second Rh<sup>+</sup> pregnancy',
            'Foetal Rh<sup>+</sup> RBCs again enter maternal circulation',
            'Pre-formed maternal anti-D (IgG) crosses the placenta → attacks foetal RBCs → haemolysis',
          ],
          [
            'Clinical consequence',
            'Reticulocytosis (compensatory RBC production in foetus), progressing to anaemia, hydrops fetalis in severe cases',
            'May be fatal without intrauterine transfusion',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Key point:</b> the first pregnancy does not usually harm the foetus because the mother is not yet sensitised at the time of delivery (the initial immune response takes time). The danger lies in the second and subsequent Rh<sup>+</sup> pregnancies of a mother who has become sensitised (that is, one who did not receive anti-D after the first delivery).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Rh Genotype Inheritance.</b> An Rh-negative woman marries an Rh-positive man who is heterozygous (Dd). What Rh phenotypes are possible in their children, and what fraction of children would be Rh-negative?',
        steps: [
          'Father: Dd; Mother: dd.',
          'Punnett square (mother’s gametes across the top, father’s down the side):<br>Mother’s gametes: d, d<br>Father’s gamete D: Dd, Dd<br>Father’s gamete d: dd, dd',
          'Offspring genotypes: 50% Dd (Rh<sup>+</sup>), 50% dd (Rh<sup>−</sup>). So <frac><num>1</num><den>2</den></frac> (50%) of the children would be Rh-negative.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Why Anti-D Must Be Given After the First Delivery.</b> Explain, in immunological terms, why administering anti-Rh immunoglobulin immediately after the first delivery prevents erythroblastosis foetalis in a subsequent pregnancy, rather than treating the already-born child.',
        steps: [
          'The key is that anti-D immunoglobulin (for example Rhogam) acts before the mother’s own immune system is primed. At delivery of the first Rh<sup>+</sup> baby, foetal Rh<sup>+</sup> RBCs enter the maternal bloodstream. The maternal immune system has not yet been exposed to the D antigen in sufficient quantity to mount a primary immune response: it takes weeks, often months, for the first anti-D antibodies to appear. Anti-D immunoglobulin, given within 72 hours of delivery, destroys these foetal RBCs before they can be processed by the mother’s antigen-presenting cells. This prevents B-cell activation and the establishment of immunological memory. When the second Rh<sup>+</sup> foetus arrives, there are no pre-formed anti-D antibodies to cross the placenta. The immunoglobulin is passive immunity (preformed antibodies), not active immunity: it does not stimulate the mother’s own immune system, it provides temporary protection until the injected antibodies are degraded.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What are the possible genotypes of an Rh-positive person and an Rh-negative person?',
            a: 'Rh-positive: DD or Dd (at least one D allele); Rh-negative: dd (homozygous recessive).',
          },
          {
            q: '[NEET] An Rh-negative mother has just delivered her first Rh-positive baby. When should anti-Rh immunoglobulin be administered, and why at this time?',
            a: 'Within 72 hours after delivery. At this point, foetal Rh<sup>+</sup> RBCs have entered maternal circulation but the mother’s immune system has not yet been primed to produce her own anti-D antibodies. Anti-D immunoglobulin destroys the foetal cells before they can activate the maternal immune response.',
          },
          {
            q: '[CUET] An Rh-negative woman is sensitised. Her second pregnancy is with an Rh-negative foetus. Will erythroblastosis foetalis occur? Give a reason.',
            a: 'No. Erythroblastosis requires an Rh<sup>+</sup> foetus (bearing the D antigen). An Rh-negative foetus lacks the D antigen, so there is nothing for maternal anti-D antibodies to recognise and attack, regardless of maternal sensitisation.',
          },
          {
            q: '[NEET] Which class of immunoglobulin crosses the placenta and attacks foetal RBCs in erythroblastosis foetalis?',
            a: 'IgG (immunoglobulin G). IgG is the only immunoglobulin class that can cross the placenta. Anti-D antibodies produced by the sensitised Rh-negative mother are IgG.',
          },
          {
            q: '[NEET High-Difficulty] A woman is blood group A (heterozygous, I<sup>A</sup>i), Rh-negative. Her husband is group AB, Rh-positive (heterozygous). What is the probability that their first child will be (a) O Rh-negative, (b) AB Rh-positive?',
            a: 'Rh status: father Dd × mother dd → 50% Dd (Rh<sup>+</sup>), 50% dd (Rh<sup>−</sup>). ABO groups: father AB (I<sup>A</sup>I<sup>B</sup>) × mother A (I<sup>A</sup>i) → I<sup>A</sup>I<sup>A</sup> (A), I<sup>A</sup>i (A), I<sup>A</sup>I<sup>B</sup> (AB), I<sup>B</sup>i (B), each 25%. Combining: (a) Probability of O Rh-negative (ii dd) = 0 (the father has no i allele to pass on). (b) Probability of AB Rh-positive (I<sup>A</sup>I<sup>B</sup>Dd) = <frac><num>1</num><den>4</den></frac> (AB) × <frac><num>1</num><den>2</den></frac> (Rh<sup>+</sup>) = <frac><num>1</num><den>8</den></frac> = 12.5%.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 927–929 ─────────────────────────
  {
    n: 'F',
    title: 'Lymphatic Drainage: Named Ducts and Their Territories',
    extra: true,
    kalam: 'The chapter describes lymph as interstitial fluid returning to the blood through lymph vessels and lymph nodes.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter describes lymph as interstitial fluid returning to the blood through lymph vessels and lymph nodes, and mentions it empties into the subclavian veins. The chapter names the thoracic duct, which carries the bulk of the lymph into the left subclavian vein, and the right lymphatic duct, which drains the upper-right quadrant into the right subclavian vein, but it does not list the regions each duct drains or name the cisterna chyli. This can come up as a direct recall question (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'table',
        title: 'The two lymphatic collecting ducts',
        head: ['Duct', 'Drains', 'Empties into'],
        rows: [
          [
            'Right lymphatic duct',
            'Right upper limb, right side of thorax, right side of head and neck (the right upper quadrant of the body)',
            'Right subclavian vein (at its junction with the internal jugular vein)',
          ],
          [
            'Thoracic duct',
            'Everything else: both lower limbs, the abdomen, left side of thorax, left side of head and neck, left upper limb',
            'Left subclavian vein (junction with left internal jugular vein)',
          ],
        ],
      },
      {
        t: 'p',
        html: 'The thoracic duct is the larger of the two and drains approximately 75% of the body’s lymph. It arises from the cisterna chyli, a dilated sac at the level of L1–L2, which collects lymph from the abdomen and lower limbs. It then ascends through the thorax, receives lymph from the left bronchomediastinal, left subclavian, and left jugular trunks, and empties into the left subclavian vein. The right lymphatic duct is short (about 1–2 cm) and drains only the right upper quadrant.',
      },
      {
        t: 'p',
        html: '<b>Clinical note.</b> Injury to or obstruction of the thoracic duct (e.g., by tumour or trauma) can cause chylothorax (lymph collecting in the pleural cavity, milky with absorbed dietary fats from the lacteals).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '<b>Drainage of the Right Arm.</b> A patient with a lymphatic obstruction in the right arm develops swelling (lymphoedema). Which subclavian vein would receive reduced lymph flow from this region?',
        steps: [
          'The right arm drains via the right lymphatic duct into the right subclavian vein. Obstruction of the right lymphatic duct or its tributaries would cause right-arm lymphoedema and reduce lymph flow into the right subclavian vein, not the left.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Why the Thoracic Duct Carries Absorbed Fats.</b> Explain why lymph from the intestine appears milky (chyle), and why this lymph ultimately enters the left subclavian vein rather than the right.',
        steps: [
          'Digested fats (fatty acids and monoglycerides) are absorbed by the intestinal epithelial cells and repackaged as chylomicrons, which are too large to enter blood capillaries and so pass into the lacteals, lymphatic capillaries in the villi of the small intestine. This lymph, called chyle, has a milky appearance due to its fat content and is transported via the intestinal lymphatics to the cisterna chyli and then up the thoracic duct. It empties into the left subclavian vein because the thoracic duct drains the entire abdomen and lower body, including the intestinal tract; the intestinal lymphatics are tributaries of the thoracic duct. The right lymphatic duct drains only the right upper quadrant, which does not include the intestine.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Which lymphatic duct drains the majority of the body’s lymph?',
            a: 'The thoracic duct (drains approximately 75% of the body).',
          },
          {
            q: '[CUET] Into which subclavian vein does the thoracic duct empty?',
            a: 'The left subclavian vein (at its junction with the left internal jugular vein).',
          },
          {
            q: '[NEET] A tumour compressing the thoracic duct would most affect lymph drainage from which region?',
            a: 'The abdomen, both lower limbs, the left side of the thorax, head and neck, and the left upper limb: the territories of the thoracic duct.',
          },
          {
            q: '[CBSE] Why does lymph from the intestine appear milky, and what is this milky lymph called?',
            a: 'Lymph from the intestine contains absorbed dietary fats (chylomicrons) that are too large for blood capillaries. This milky lymph is called chyle. It is transported via the lacteals → intestinal lymphatics → mesenteric lymphatics → cisterna chyli → thoracic duct.',
          },
          {
            q: '[NEET High-Difficulty] The cisterna chyli is located at approximately which vertebral level, and what region does it primarily drain?',
            a: 'Approximately L1–L2 vertebral level. The cisterna chyli primarily receives lymph from the abdomen and lower limbs, through the intestinal and lumbar trunks.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic G · pp. 929–931 ─────────────────────────
  {
    n: 'G',
    title: 'Anaemia: Classification by Cause',
    extra: true,
    kalam: 'The chapter treats anaemia only as a shortfall of RBCs or haemoglobin (polycythaemia is the opposite state).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter treats anaemia only as a shortfall of RBCs or haemoglobin (polycythaemia is the opposite state). It does not classify anaemia by aetiology. NEET can ask this classification in match-the-column and clinical-case formats (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'table',
        title: 'Four main types of anaemia, by cause',
        head: ['Type', 'Mechanism', 'Examples'],
        rows: [
          [
            'Nutritional / Deficiency anaemia',
            'Lack of raw materials for haemoglobin or RBC synthesis',
            'Iron deficiency anaemia (most common worldwide: low Hb, microcytic hypochromic RBCs); Vitamin B<sub>12</sub> deficiency (pernicious anaemia, when intrinsic factor is lacking: neurological symptoms plus megaloblastic anaemia); Folic acid deficiency (megaloblastic anaemia in pregnancy)',
          ],
          [
            'Haemolytic anaemia',
            'Premature destruction of RBCs (haemolysis)',
            'Sickle cell anaemia (HbS mutation → crescent-shaped RBCs, fragile); Thalassaemia (defective globin chain synthesis → microcytic anaemia); Autoimmune haemolytic anaemia (autoantibodies destroy RBCs)',
          ],
          [
            'Aplastic / Hypoplastic anaemia',
            'Bone marrow failure: stem cells cannot produce enough cells',
            'Radiation, chemotherapy, certain drugs, viral infections (e.g., hepatitis), idiopathic: pancytopenia (low RBC, WBC, and platelets)',
          ],
          [
            'Blood-loss anaemia',
            'Loss of RBCs faster than they can be replaced',
            'Acute (trauma, surgery: normocytic normochromic) or chronic (GI bleeding, menorrhagia: iron-deficiency pattern)',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Note:</b><br>• Sickle cell anaemia and thalassaemia are particularly important in the Indian context; both are met again in Class 12 (Principles of Inheritance and Variation) as Mendelian disorders; they are listed here only as haemolytic patterns.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Matching Anaemia to Mechanism.</b> A patient presents with fatigue, pallor, and spoon-shaped nails (koilonychia). Blood smear shows microcytic hypochromic RBCs. What type of anaemia is this, and what is the likely cause?',
        steps: [
          'Iron deficiency anaemia: a nutritional/deficiency anaemia. The microcytic (small cell) hypochromic (pale centre) appearance indicates inadequate haemoglobin synthesis, most commonly caused by chronic blood loss (GI bleeding, hookworm, menorrhagia) or inadequate dietary iron intake. Koilonychia (spoon-shaped nails) is a classic sign of iron deficiency. The treatment is iron supplementation and addressing the underlying cause.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Distinguishing Sickle Cell from Thalassaemia.</b> Both sickle cell anaemia and beta-thalassaemia produce anaemia and involve haemoglobin abnormalities. Distinguish them by (a) the molecular defect, (b) the RBC morphology, and (c) whether the condition is haemolytic or due to ineffective erythropoiesis.',
        steps: [
          '(a) Sickle cell: a point mutation in the beta-globin gene (Glu→Val at position 6) produces abnormal haemoglobin S (HbS) that polymerises under low oxygen. Beta-thalassaemia: mutations in the beta-globin gene reduce or eliminate beta-globin chain production. (b) Sickle cell: crescent/sickle-shaped RBCs visible on smear. Thalassaemia: target cells, microcytic hypochromic cells, basophilic stippling. (c) Both cause anaemia, but sickle cell is primarily haemolytic (RBCs are destroyed in the spleen and vasculature); thalassaemia involves ineffective erythropoiesis (RBC precursors die in the bone marrow) as well as haemolysis.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Classify the following as nutritional, haemolytic, or aplastic: (a) sickle cell anaemia, (b) iron deficiency anaemia, (c) bone marrow suppression by chemotherapy.',
            a: '(a) Haemolytic, (b) Nutritional (deficiency), (c) Aplastic.',
          },
          {
            q: '[NEET] A person with pernicious anaemia lacks intrinsic factor. What vitamin is poorly absorbed, and what additional neurological symptoms would appear if untreated?',
            a: 'Vitamin B<sub>12</sub> (cobalamin) is poorly absorbed without intrinsic factor (produced by gastric parietal cells). If untreated, B<sub>12</sub> deficiency causes subacute combined degeneration of the spinal cord: demyelination of the posterior and lateral columns causing numbness, ataxia, and positive Babinski sign. Pernicious anaemia specifically refers to autoimmune destruction of parietal cells/intrinsic factor.',
          },
          {
            q: '[CUET] What is the most common type of anaemia worldwide?',
            a: 'Iron deficiency anaemia (nutritional/deficiency type, most common worldwide, particularly affecting women and children in developing countries).',
          },
          {
            q: '[NEET] A thalassaemia patient has microcytic hypochromic RBCs. What is the underlying defect in beta-thalassaemia?',
            a: 'In beta-thalassaemia, there is reduced or absent synthesis of the beta-globin chain of haemoglobin. This leads to an imbalance between alpha and beta chains: excess alpha chains precipitate and damage developing erythroblasts in the bone marrow, causing ineffective erythropoiesis and microcytic hypochromic anaemia.',
          },
          {
            q: '[NEET High-Difficulty] A pregnant woman is found to have megaloblastic anaemia. Is this more likely due to folate deficiency or B<sub>12</sub> deficiency, and why might one cause neural tube defects in the foetus while the other does not?',
            a: 'Folate deficiency is more likely in pregnancy (folate requirements increase significantly). Folate deficiency in the first trimester is associated with neural tube defects (spina bifida, anencephaly) in the foetus because folate is essential for DNA synthesis during rapid embryonic development. Folate deficiency is the classic nutritional cause of neural tube defects, which periconceptional folic acid prevents; the characteristic neurological effect of B<sub>12</sub> deficiency in adults is subacute combined degeneration of the spinal cord. Both deficiencies produce megaloblastic anaemia (large, immature RBCs): the distinction is made by measuring serum B<sub>12</sub> and folate levels.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic H · pp. 931–934 ─────────────────────────
  {
    n: 'H',
    title: 'Bleeding Disorders and Coagulation Tests',
    extra: true,
    kalam: 'The chapter mentions haemophilia (factor deficiencies) and thrombocytopenia (low platelet count) as disorders.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter describes thrombocytopenia (a fall in platelets, as in dengue) and haemophilia (factor VIII or IX deficiency) and names heparin as an anticoagulant. It does not cover von Willebrand disease or the normal values and meaning of bleeding time and clotting time (Additional topic A, answer 5, only uses the two terms). These are examinable distinctions.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'table',
        title: 'Three primary bleeding disorders, by defect type',
        head: ['Disorder', 'Defect', 'Bleeding pattern'],
        rows: [
          [
            'Thrombocytopenia',
            'Low platelet count (< 1.5 lakh/mm<sup>3</sup>)',
            'Petechiae (pinpoint skin haemorrhages), purpura, prolonged bleeding from cuts, mucosal bleeding (nosebleeds, gum bleeding)',
          ],
          [
            'Haemophilia A/B',
            'Deficiency of clotting factor VIII or IX',
            'Deep tissue bleeding into joints (haemarthrosis), muscle haematomas, prolonged bleeding after surgery or trauma; petechiae are NOT typical',
          ],
          [
            'Von Willebrand disease',
            'Deficiency or dysfunction of von Willebrand factor (vWF), which carries factor VIII and mediates platelet adhesion',
            'Mucocutaneous bleeding (nosebleeds, gum bleeding, menorrhagia), similar to platelet disorder; most common inherited bleeding disorder',
          ],
        ],
      },
      {
        t: 'table',
        title: 'Bleeding time vs clotting time: two different tests',
        head: ['Test', 'What it measures', 'Normal value', 'Prolonged in'],
        rows: [
          [
            'Bleeding time',
            'Time for a standardised skin wound to stop bleeding (platelet plug + vasoconstriction)',
            'about 2–7 minutes',
            'Thrombocytopenia, platelet dysfunction, von Willebrand disease',
          ],
          [
            'Clotting time (CT)',
            'Time for blood to clot in a test tube (measures intrinsic and common pathway)',
            '5–12 minutes (Lee-White method at 37°C)',
            'Deficiency of factors XII, XI, IX, VIII, X, V, II, fibrinogen; heparin therapy',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Key distinction:</b> bleeding time tests platelet function; clotting time tests the coagulation cascade. A patient can have a normal platelet count and a normal bleeding time but a deficient factor VIII (prolonged clotting time): classic haemophilia.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Differentiating Thrombocytopenia from Haemophilia.</b> A child presents with multiple pinpoint purple spots on the skin and prolonged bleeding after a minor cut. Platelet count is found to be 50,000/mm<sup>3</sup>. Is this more consistent with thrombocytopenia or haemophilia, and why?',
        steps: [
          'Thrombocytopenia. The pinpoint purple spots (petechiae) and prolonged bleeding from minor cuts indicate a platelet deficiency or dysfunction: platelets are the first responders to small vessel injury, forming the primary haemostatic plug. Haemophilia causes deep bleeding into joints and muscles, not petechiae. The platelet count of 50,000/mm<sup>3</sup> (normal 1.5–3.5 lakh/mm<sup>3</sup>) confirms thrombocytopenia. Common causes in children include dengue fever (mentioned in the chapter), idiopathic thrombocytopenic purpura (ITP), and leukaemia.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>A Patient with Normal Platelet Count but Prolonged Bleeding.</b> A patient with a bleeding disorder has a normal platelet count and normal bleeding time, but prolonged clotting time. What is the most likely category of defect, and give one example.',
        steps: [
          'A defect in the coagulation cascade (clotting factors), specifically the intrinsic or common pathway. Normal platelet count and normal bleeding time confirm that the primary platelet plug forms correctly. Prolonged clotting time indicates that once the platelet plug is in place, the fibrin mesh does not form efficiently. Haemophilia A (factor VIII deficiency) or Haemophilia B (factor IX deficiency) are the most common intrinsic pathway factor deficiencies. Von Willebrand disease is unlikely here, because it usually prolongs the bleeding time, which is normal in this patient.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State one difference between the bleeding pattern of thrombocytopenia and haemophilia.',
            a: 'Thrombocytopenia → petechiae (pinpoint skin haemorrhages), mucocutaneous bleeding (nosebleeds, gum bleeds), bruising. Haemophilia → deep tissue and joint bleeding (haemarthrosis), muscle haematomas, prolonged bleeding after trauma or surgery; petechiae are absent.',
          },
          {
            q: '[NEET] A test shows prolonged bleeding time but normal clotting time. Which part of haemostasis is defective?',
            a: 'Platelet function or vascular integrity (the primary haemostatic plug). Prolonged bleeding time indicates the platelet plug fails to form or stabilise quickly, even though the coagulation cascade may be intact.',
          },
          {
            q: '[CUET] Name the most common inherited bleeding disorder in humans.',
            a: 'Von Willebrand disease (vWD): affects up to about 1% of people by laboratory tests, though far fewer have symptoms; it involves deficient or dysfunctional von Willebrand factor.',
          },
          {
            q: '[NEET] Why does thrombocytopenia not prolong clotting time, even though clotting does eventually depend on platelet factor-3?',
            a: 'Clotting time (Lee-White method) measures the time for visible fibrin to form in a test tube. Even with low platelet counts, enough platelets are present for the coagulation cascade to eventually generate sufficient thrombin and fibrin: the cascade itself is intact. Clotting time is usually normal in thrombocytopenia unless the count is very low. Bleeding time, by contrast, tests the functional quality of the platelet plug in vivo, which fails much earlier.',
          },
          {
            q: '[NEET High-Difficulty] A patient with von Willebrand disease has low factor VIII activity. Is this a primary or secondary finding? Explain why von Willebrand factor is important for factor VIII stability in the blood.',
            a: 'Secondary finding. Von Willebrand factor (vWF) is synthesised by endothelial cells and megakaryocytes and circulates in plasma. One of its functions is to carry and stabilise factor VIII: vWF binds to factor VIII and protects it from rapid degradation in the circulation (factor VIII has a half-life of about 12 hours when bound to vWF, but only about 2 hours when free of it). In von Willebrand disease, deficient or dysfunctional vWF means factor VIII is not protected and is cleared from the blood more quickly, leading to secondary reduction in factor VIII activity. This is why some vWD patients have a mild haemophilia-like picture on laboratory testing even though the primary defect is in vWF, not factor VIII itself.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic I · pp. 934–942 ─────────────────────────
  {
    n: 'I',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'In recent NEET and AIPMT papers, the examiner’s attention concentrates on seven zones.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'In recent NEET and AIPMT papers, the examiner’s attention concentrates on seven zones (approximate weightage; the book’s estimate from past papers, not official figures):',
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Approximate weightage'],
        rows: [
          ['Blood components: RBC, WBC, platelet counts and functions', '1–2 questions per paper'],
          ['Blood coagulation: cascade, Ca<sup>2+</sup>, haemophilia', '1–2 questions per paper'],
          ['Blood groups: ABO, Rh, universal donor/recipient', '1–2 questions per paper'],
          ['Heart structure, valves, conduction pathway', '2–3 questions per paper'],
          ['Cardiac cycle, ECG, heart sounds', '1–2 questions per paper'],
          ['Circulation types (open/closed, single/double)', 'about 1 question'],
          ['Blood pressure and disorders', 'about 1 question'],
        ],
      },
      {
        t: 'p',
        html: 'Read these as relative weights of the zones, not as counts per paper: added together they come to more questions than one chapter usually supplies, and the book gives no official figures.',
      },
      {
        t: 'p',
        html: 'The blood-cell differential count (neutrophil vs eosinophil vs basophil roles) and the pulmonary artery/vein oxygen-content question can come up often. The conduction pathway order (SA → AV → His → Purkinje) and the Lub–dub association are tested at least once per NEET cycle (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>1. Direct Fact / Definition (single best answer, no elaboration)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A clean declarative stem: “Which one engulfs pathogens rapidly?” or “The pacemaker of the human heart is”, with four factual distractors. No passage to read; the answer lives in one line of the NCERT table.<br><b>Approach:</b> These are pure recall. If you have the tables (WBC differential, clotting factors, blood-group antigens) locked in memory, you circle the answer in under 30 seconds. If a name feels unfamiliar, eliminate by what you do know: neutrophils are the phagocytes, SA node is the pacemaker, the spleen destroys RBCs.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which one of the following engulfs pathogens most rapidly?<br><b>(a)</b> Acidophils <b>(b)</b> Monocytes <b>(c)</b> Basophils <b>(d)</b> Neutrophils',
        steps: [
          'Neutrophils constitute 60–65% of total WBCs, the largest fraction, and are the body’s chief phagocytes. Acidophils (eosinophils) handle allergic reactions; basophils are the rarest WBC (0.5–1%) and secrete histamine, not primarily phagocytose.',
        ],
        ans: '(d) Neutrophils.',
      },

      { t: 'p', html: '<b>2. Multi-Statement / “Which of the following statements is/are correct?” (pick-the-combination)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Four statements (i)–(iv) appear, followed by option codes like (a) (i) & (ii) (b) (ii) & (iii) etc. You must evaluate each statement individually before matching.<br><b>Approach:</b> Treat each statement independently. Mark it T (correct) or F (incorrect) before looking at the options. Then find the option that matches your tally. Never let an option’s framing steer you: evaluate on the facts.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which of the following statements are correct?<br>(i) Persons with blood group AB can donate blood to any person under the ABO system.<br>(ii) Calcium ions play a very important role in blood clotting.<br>(iii) Blood group A contains antigen A and anti-A antibodies.<br>(iv) Blood group O is the universal donor.<br>Options: <b>(a)</b> (i) & (iv) <b>(b)</b> (ii) & (iv) <b>(c)</b> (i), (ii) & (iv) <b>(d)</b> (ii), (iii) & (iv)',
        steps: [
          'Statements (ii) and (iv) are correct.',
          '• (i) <b>False.</b> AB is the universal recipient, not the donor. O is the universal donor.',
          '• (ii) <b>True.</b> Ca<sup>2+</sup> is needed at several steps of the clotting cascade.',
          '• (iii) <b>False.</b> Blood group A has antigen A on RBCs and anti-B antibodies in plasma.',
          '• (iv) <b>True.</b> Group O lacks both A and B antigens, so it does not trigger agglutination in any recipient.',
        ],
        ans: '(b)',
      },

      { t: 'p', html: '<b>3. Assertion–Reason (A–R)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Assertion (A) and Reason (R) are printed separately. Options: (a) both true, R explains A; (b) both true, R does not explain A; (c) A true, R false; (d) A false, R true.<br><b>Approach:</b> Always evaluate A first. If A is false, the answer is (d), A false, R true (a few papers print “both false” instead, so check R too). If A is true, then evaluate R. The reason must be a mechanistic link, not merely another true statement.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Assertion (A):</b> WBCs accumulate at the site of wounds by diapedesis.<br><b>Reason (R):</b> Diapedesis is the squeezing of leucocytes through the intact capillary wall to reach the site of injury.<br>Options: <b>(a)</b> Both true and R explains A <b>(b)</b> Both true but R does not explain A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '• A is <b>true.</b> Neutrophils and other leucocytes reach wounded tissue by squeezing through capillary walls: diapedesis.',
          '• R is <b>true</b> and gives the correct definition of diapedesis.',
          '• R explains A because the mechanism of diapedesis is precisely why WBCs can migrate to the wound site despite being inside intact vessels.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>4. Match-the-Column</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Column I (terms: cells, structures, values) matched to Column II (descriptions, functions, normal values). One-to-one mapping, no repetition.<br><b>Approach:</b> Cover Column II and name the Column I item from memory. Tick off the ones you know; the unknowns then reduce to elimination. A second pass fills remaining gaps.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Column I (Blood cell) | Column II (Description)<br>A. Erythrocyte | I. Most abundant WBC; main phagocytic cell<br>B. Eosinophil | II. Least abundant WBC; releases histamine<br>C. Lymphocyte | III. Resists infection; associated with allergic reactions<br>D. Neutrophil | IV. Contains haemoglobin; transports oxygen<br>E. Basophil | V. Antibody-producing WBCs<br><br>Options: <b>(a)</b> A–IV; B–III; C–V; D–I; E–II <b>(b)</b> A–I; B–II; C–III; D–IV; E–V <b>(c)</b> A–II; B–III; C–I; D–V; E–IV <b>(d)</b> A–IV; B–I; C–II; D–III; E–V',
        steps: [
          '• Erythrocyte → haemoglobin → IV',
          '• Eosinophil → allergic reactions → III',
          '• Lymphocyte → antibody production → V',
          '• Neutrophil → most abundant, chief phagocyte → I',
          '• Basophil → least abundant, histamine → II',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>5. Diagram / ECG Identification</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A tracing (ECG or schematic) with labelled peaks. One feature is singled out for identification.<br><b>Approach:</b> Know the physiological meaning of every wave before entering the exam room: the diagram is just a visual cue. If the question says “Peak T,” you must know it is ventricular repolarisation.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'In a standard ECG of a normal human, which one of the following is correctly interpreted?<br><b>(a)</b> Peak P: initiation of left atrial contraction only<br><b>(b)</b> QRS complex: one complete pulse<br><b>(c)</b> Peak T: initiation of total cardiac contraction<br><b>(d)</b> P wave: depolarisation of the atria',
        steps: [
          '• (a) <b>False.</b> P wave represents depolarisation of both atria, not just the left atrium.',
          '• (b) <b>False.</b> The QRS complex represents ventricular depolarisation, not “a complete pulse” (which would be one full cardiac cycle).',
          '• (c) <b>False.</b> Peak T represents ventricular repolarisation, the recovery phase, not the initiation of contraction.',
          '• (d) <b>True.</b> The P wave is atrial depolarisation, which triggers atrial contraction.',
        ],
        ans: '(d)',
      },

      { t: 'p', html: '<b>6. “Which of the following is NOT / incorrect / exception?” (inverted stem)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> The stem says not, except, incorrect, or false. Three options are true; one is the outlier.<br><b>Approach:</b> This is the most dangerous archetype: you must read the stem twice before committing. Your brain is primed for “which is true.” Force yourself to slow down.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which one of the following statements is NOT correct with reference to the circulation of blood in a mammal?<br><b>(a)</b> The left atrium receives oxygenated blood from the lungs.<br><b>(b)</b> The pulmonary artery carries deoxygenated blood from the right ventricle to the lungs.<br><b>(c)</b> Blood from the lungs returns to the heart through four pulmonary veins, two from each lung.<br><b>(d)</b> The pulmonary veins carry deoxygenated blood to the left atrium.',
        steps: [
          '• (a) <b>Correct statement:</b> the left atrium receives oxygenated blood from the lungs.',
          '• (b) <b>Correct statement:</b> the pulmonary artery carries deoxygenated blood from the heart to the lungs. This is a common trap.',
          '• (c) <b>Correct statement:</b> four pulmonary veins (two from each lung) carry oxygenated blood back to the left atrium.',
          '• (d) <b>NOT correct:</b> pulmonary veins carry oxygenated blood, so this is the statement to pick.',
        ],
        ans: '(d)',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: 'These are the specific confusions that question-setters build into the distractors:',
      },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What students do', 'Why it is wrong'],
        rows: [
          [
            'Pulmonary artery = oxygenated',
            'Students recall “artery = oxygenated”',
            'In the adult circulation the pulmonary artery is the only artery carrying deoxygenated blood; define vessels by direction, not oxygen content',
          ],
          [
            'Universal donor ↔ recipient flip',
            'Confuse O as recipient, AB as donor',
            'O lacks antigens → can give to all; AB lacks antibodies → can receive from all',
          ],
          [
            'Plasma = serum',
            'Treat them as synonyms',
            'Serum = plasma without fibrinogen and the other clotting factors used up in clotting; serum cannot clot; plasma can',
          ],
          [
            'Neutrophil = allergy',
            'Confuse with eosinophil',
            'Eosinophils mediate allergic reactions; neutrophils are the chief phagocytes',
          ],
          [
            'Spleen = RBC production (in the adult)',
            'Confuse with bone marrow',
            'Spleen is the graveyard of RBCs; bone marrow is where they are made',
          ],
          [
            'Lub = semilunar closure',
            'Reverse the two heart sounds',
            'Lub (S<sub>1</sub>) = AV valve closure; Dub (S<sub>2</sub>) = semilunar closure',
          ],
          [
            'Haemophilia A = Factor IX',
            'Swap the two haemophilia types',
            'A = Factor VIII; B = Factor IX',
          ],
          [
            'All reptiles = 3-chambered heart',
            'Miss the crocodile exception',
            'Most reptiles have a 3-chambered heart (incomplete double circulation), but crocodiles are the exception, with a 4-chambered heart',
          ],
          [
            'QRS = atrial activity',
            'Mis-assign the QRS complex',
            'QRS = ventricular depolarisation; P wave = atrial depolarisation',
          ],
          [
            '“WBCs are more than RBCs”',
            'Compare the ratios incorrectly',
            'RBCs (~5 million/mm<sup>3</sup>) outnumber WBCs (~6,000–8,000/mm<sup>3</sup>) by ~700∶1',
          ],
          [
            'A or B blood group has both antibodies',
            'Forget which antibodies each group carries',
            'A has anti-B; B has anti-A; AB has neither; O has both',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'practice',
        items: [
          {
            q: '[Level 1: Direct Recall] Which plasma protein is converted to its insoluble form during blood clotting? <b>(a)</b> Albumin <b>(b)</b> Globulin <b>(c)</b> Fibrinogen <b>(d)</b> Prothrombin',
            a: '(c). Fibrinogen (soluble) is converted by thrombin into insoluble fibrin threads that form the clot mesh. Prothrombin is the inactive precursor converted to thrombin; albumin does not take part; the globulin fraction holds some clotting factors, but the protein that becomes insoluble is fibrinogen.',
          },
          {
            q: '[Level 1: Direct Recall] The graveyard of red blood cells is the: <b>(a)</b> Liver <b>(b)</b> Bone marrow <b>(c)</b> Spleen <b>(d)</b> Thymus',
            a: '(c). RBCs have a lifespan of ~120 days and are destroyed in the spleen. The liver recycles breakdown pigments; bone marrow produces RBCs; thymus is for T-cell maturation.',
          },
          {
            q: '[Level 1: Direct Recall] Which of the following is the universal donor blood group under the ABO system? <b>(a)</b> A <b>(b)</b> B <b>(c)</b> AB <b>(d)</b> O',
            a: '(d). Group O lacks both A and B antigens on its RBCs, so it can be given to any ABO recipient without triggering agglutination.',
          },
          {
            q: '[Level 2: Single-Concept Application] A person with blood group AB is brought into the emergency ward needing urgent transfusion. Which statement about this person is correct? <b>(a)</b> Has anti-A and anti-B antibodies in plasma <b>(b)</b> Is the universal donor <b>(c)</b> Has neither anti-A nor anti-B antibodies <b>(d)</b> Cannot receive blood from group O',
            a: '(c). Group AB has both A and B antigens on RBCs and no antibodies in plasma. Because it can accept all ABO types without antibody-mediated agglutination, it is the universal recipient, not the universal donor. Option (d) is false because group O red cells carry no A or B antigen, so AB can receive them.',
          },
          {
            q: '[Level 2: Single-Concept Application] Which of the following events occurs first in the haemostatic response to a cut vessel? <b>(a)</b> Platelet plug formation <b>(b)</b> Fibrin mesh formation <b>(c)</b> Vascular spasm <b>(d)</b> Prothrombin conversion',
            a: '(c). The sequence is: (1) vascular spasm → (2) platelet plug → (3) prothrombinase formation → (4) thrombin generation → (5) fibrin mesh. Vascular spasm, driven by muscular contraction of the vessel wall, is the first response, reducing blood loss before any clotting begins.',
          },
          {
            q: '[Level 2: Single-Concept Application] The opening of the right atrium into the right ventricle is guarded by which valve? <b>(a)</b> Bicuspid <b>(b)</b> Tricuspid <b>(c)</b> Semilunar <b>(d)</b> Aortic',
            a: '(b). The tricuspid valve (three cusps) guards the right atrioventricular opening. The bicuspid (mitral) guards the left AV opening. Semilunar valves guard the ventricular outflows (aortic and pulmonary).',
          },
          {
            q: '[Level 3: Multi-Statement / Combination] Which of the following statements are correct? (i) In a resting adult the SA node sets the heart rate at about 70–75 impulses per minute and is the natural pacemaker. (ii) The AV node introduces a brief delay in impulse conduction. (iii) The bundle of His transmits the impulse from the SA node directly to the Purkinje fibres. (iv) The heart is myogenic because the impulse originates in the nervous system.<br><b>(a)</b> (i) and (ii) only <b>(b)</b> (i), (ii) and (iii) <b>(c)</b> (ii), (iii) and (iv) <b>(d)</b> (i) and (iv) only',
            a: '(a).<br>• (i) <b>True.</b> The SA node is the pacemaker and sets the resting rate at about 70–75/min.<br>• (ii) <b>True.</b> AV node delays the impulse to allow atrial contraction to complete before ventricular systole.<br>• (iii) <b>False.</b> The impulse travels SA → AV → bundle of His → Purkinje fibres. The bundle of His does not receive directly from the SA node; the AV node is the intermediary.<br>• (iv) <b>False.</b> The heart is myogenic precisely because the impulse arises within the cardiac muscle (SA node), not from the nervous system. Nerves only modulate the rate and force.',
          },
          {
            q: '[Level 3: Multi-Statement / Combination] Which of the following statements are correct about blood groups? (i) Blood group O is the universal donor. (ii) Blood group AB is the universal recipient. (iii) Blood group A contains antigen A and anti-B antibody. (iv) Rh incompatibility between an Rh<sup>−</sup> mother and an Rh<sup>+</sup> foetus usually causes erythroblastosis foetalis in the first pregnancy.<br><b>(a)</b> (i), (ii) and (iii) <b>(b)</b> (i) and (ii) only <b>(c)</b> (ii), (iii) and (iv) <b>(d)</b> (i), (iii) and (iv)',
            a: '(a).<br>• (i) <b>True.</b><br>• (ii) <b>True.</b><br>• (iii) <b>True.</b> Antigen A on RBCs; anti-B in plasma.<br>• (iv) <b>False.</b> The first pregnancy usually only sensitises the mother (mostly at delivery), so the first baby is generally unaffected. Danger rises in subsequent Rh<sup>+</sup> pregnancies when pre-formed IgG crosses the placenta.',
          },
          {
            q: '[Level 4: Assertion–Reason and Clinical] <b>Assertion (A):</b> A transplanted heart, severed from all its nerves, continues to beat rhythmically. <b>Reason (R):</b> The human heart is myogenic, meaning the rhythmic contraction is initiated by the cardiac muscle itself.<br><b>(a)</b> Both A and R are true and R is the correct explanation of A.<br><b>(b)</b> Both A and R are true but R is not the correct explanation of A.<br><b>(c)</b> A is true but R is false.<br><b>(d)</b> A is false but R is true.',
            a: '(a). A transplanted heart beats because the impulse originates in the SA node embedded in the cardiac muscle, the defining feature of a myogenic heart. This is why a denervated transplant functions. R correctly explains A.',
          },
          {
            q: '[Level 4: Assertion–Reason and Clinical] <b>Assertion (A):</b> Blood does not normally clot inside intact blood vessels. <b>Reason (R):</b> The inner surface of blood vessels releases heparin, an anticoagulant that prevents clotting.<br><b>(a)</b> Both A and R are true and R is the correct explanation of A.<br><b>(b)</b> Both A and R are true but R is not the correct explanation of A.<br><b>(c)</b> A is true but R is false.<br><b>(d)</b> A is false but R is true.',
            a: '(c).<br>• A is <b>true.</b> Normal intravascular blood is fluid.<br>• R is <b>false.</b> Heparin is produced by basophils and mast cells, not released by the inner surface of blood vessels. Blood stays fluid because the smooth, intact endothelium does not expose tissue factor and because natural anticoagulants keep thrombin in check: antithrombin III in the plasma, helped by heparan sulphate on the vessel lining and by the small amount of heparin released by basophils and mast cells.',
          },
          {
            q: '[Level 4: Assertion–Reason and Clinical] A patient is diagnosed with hypertension. Which of the following is the defining criterion for this condition? <b>(a)</b> Systolic BP ≥ 120 mmHg sustained <b>(b)</b> Diastolic BP ≥ 80 mmHg sustained <b>(c)</b> Systolic BP ≥ 140 mmHg sustained or diastolic BP ≥ 90 mmHg sustained <b>(d)</b> Systolic BP ≥ 100 mmHg on a single reading',
            a: '(c). Hypertension is defined as a sustained blood pressure of ≥ 140 over 90 mmHg (systolic over diastolic). The ideal resting BP is 120 over 80 mmHg. Values between 120 over 80 and 140 over 90 are above the ideal but below the hypertension cut-off. A single reading does not define hypertension; the condition must be sustained.',
          },
          {
            q: '[Level 5: Integration and Distinction] Which of the following correctly distinguishes the circulation of a mammal from that of a fish? <b>(a)</b> Mammals have a 4-chambered heart; fish have a 2-chambered heart; in both, blood passes through the heart once per circuit. <b>(b)</b> Mammals have double circulation with no mixing of oxygenated and deoxygenated blood; fish have single circulation where blood is oxygenated at the gills before reaching body tissues. <b>(c)</b> Mammals and fish both have complete double circulation with four-chambered hearts. <b>(d)</b> Mammals have 4-chambered hearts; fish have 3-chambered hearts with incomplete double circulation.',
            a: '(b).<br>• (a) <b>False.</b> Fish pass blood through the heart once per circuit, but in mammals blood passes through the heart twice per complete circuit (double circulation).<br>• (b) <b>True.</b> In fish, blood flows: heart → gills → body → heart (single pass). In mammals, the heart keeps oxygenated and deoxygenated streams separate; each is re-pressurised before its journey.<br>• (c) <b>False.</b> Fish have 2-chambered hearts, not 4.<br>• (d) <b>False.</b> Fish have 2-chambered hearts, not 3. Incomplete double circulation is found in amphibians and most reptiles (3-chambered).',
          },
        ],
      },
    ],
  },
];
