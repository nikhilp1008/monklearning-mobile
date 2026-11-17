import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 19 (Chemical Coordination and Integration), Additional topic H "What NEET Actually Asks"
 * (the book's "Addendum P"), word for word from the Class 11 Biology Master Reference, pp. 1161 to 1170.
 * It starts at the top of p. 1161 (after Additional topic G, the Master Summary, which ends on p. 1160) and ends
 * on p. 1170; p. 1171 is the errata. Topic index 19. The book prints no drawing in these pages, so there is no fig block.
 *
 * Parts are the book's five headings. The book's "Worked example (NEET-style)" items are ex blocks tagged
 * "Worked representative"; a table printed inside a question (Column-I / Column-II, structure / name) is set as lines of
 * cells separated by " | ". Where the book prints no answer line of its own the ans is ''; every example here has one.
 * Assertion-reason items that print no options (Archetype 3 and Q6) carry the standard four, written as new wording.
 */
export const TOPICS: Topic[] = [
  {
    n: 'H',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'An analysis of past NEET and AIPMT questions on this chapter shows a reliable hierarchy of tested topics.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'An analysis of past NEET and AIPMT questions on this chapter shows a reliable hierarchy of tested topics. The shares below are approximate and indicative (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Approximate share of questions'],
        rows: [
          ['<b>Pituitary & Hypothalamus</b> (GH, prolactin, FSH/LH/ACTH/TSH, ADH, oxytocin, MSH)', '~25 %'],
          [
            '<b>Thyroid & Parathyroid</b> (T<sub>3</sub>/T<sub>4</sub>, calcitonin, PTH, goitre, cretinism, Graves’)',
            '~15 %',
          ],
          ['<b>Pancreas</b> (insulin, glucagon, somatostatin, diabetes)', '~12 %'],
          ['<b>Adrenal</b> (cortisol, aldosterone, adrenaline, disorders)', '~10 %'],
          ['<b>Gonads & Reproduction</b> (testosterone, estrogen, progesterone, corpus luteum)', '~10 %'],
          [
            '<b>Mechanism of hormone action</b> (receptor location, second messengers, steroid vs peptide)',
            '~10 %',
          ],
          ['<b>Pineal, Thymus, GI hormones, ANF, EPO</b>', '~8 %'],
          ['<b>General concepts</b> (definition, feedback, antagonism)', '~10 %'],
        ],
      },
      {
        t: 'p',
        html: '<b>Pattern:</b> The pituitary-thyroid axis and the insulin-glucagon pair are tested very frequently. A question on the mechanism of hormone action appears in most exam cycles (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>1. Fact/Definition: “Which gland/cell secretes X?”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A single-sentence question asking for the source of a hormone or the identity of a disorder. Four options are single words or short phrases.<br><b>Approach:</b> Use the gland → hormone → action → disorder summary table in this chapter as your lookup. NEET rarely asks about obscure glands; it rotates through the same 10–12 glands (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Glycogenesis is promoted by the hormone secreted from:<br>(a) alpha cells of pancreas<br>(b) beta cells of pancreas<br>(c) thyroid gland<br>(d) adrenal gland',
        steps: [
          'Glycogenesis = conversion of glucose into glycogen, which is the storage reaction. Insulin (from beta cells) promotes glycogenesis. Glucagon (alpha cells) does the opposite (glycogenolysis). The thyroid and adrenal cortex raise blood glucose, not lower it.',
        ],
        ans: '(b)',
      },

      { t: 'p', html: '<b>2. Statement-Type: “Which statement is correct?”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> The stem states a biological claim; you must judge its truth. Often the options contain a single correct statement among three plausible wrong ones.<br><b>Approach:</b> Treat each statement as a true/false test. Common wrong statements in this chapter:<br>• “Releasing hormones are produced by the pituitary” (they are produced by the <b>hypothalamus</b>).<br>• “Neurohypophysis secretes its own hormones” (it <b>stores and releases</b>, it does not synthesize).<br>• “Glucagon is formed by β-cells” (β-cells make <b>insulin</b>; α-cells make glucagon).',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which statement regarding glucagon hormone is correct?<br>(a) It has the opposite effect to insulin.<br>(b) It converts glucose to glycogen.<br>(c) It is used to treat diabetes mellitus.<br>(d) It is formed by β-cells of Islets of Langerhans.',
        steps: [
          'Option (a): <b>True</b>: glucagon raises blood glucose; insulin lowers it.',
          'Option (b): <b>False</b>: glucagon converts glycogen to glucose (glycogenolysis), not glucose to glycogen.',
          'Option (c): <b>False</b>: glucagon raises blood glucose and cannot replace insulin, which diabetes mellitus needs.',
          'Option (d): <b>False</b>: β-cells secrete insulin; α-cells secrete glucagon.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>3. Assertion–Reason: “Both A and R are true, and R explains A”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two statements linked; answer choices are combinations like “Both true, R explains A”.<br><b>Approach:</b> Evaluate A and R independently first, before looking at the answer choices. Never assume that because both are true, the reason must explain the assertion: that is the trap.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Assertion (A):</b> Hormone calcitonin has an antagonistic effect to that of parathormone.<br><b>Reason (R):</b> Calcitonin decreases blood calcium level while parathormone increases blood calcium level.<br>Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
        steps: [
          'A: True: calcitonin and PTH are antagonistic pairs for calcium homeostasis.',
          'R: True: calcitonin lowers Ca<sup>2+</sup>; PTH raises Ca<sup>2+</sup>.',
          'Does R explain A? Yes: antagonism is defined by opposite effects on the same variable (blood calcium).',
        ],
        ans: '(a)',
      },
      {
        t: 'p',
        html: '<b>Common trap in this chapter:</b> Statements that swap diabetes insipidus and diabetes mellitus, or that confuse the effect of vasopressin (it decreases urine volume, not increases). When R says the opposite of what is physiologically correct, R is false, so the answer is <b>(c) A true, R false</b>. When it is A that is wrong and R is a true statement, the answer is <b>(d) A false, R true</b>.',
      },

      { t: 'p', html: '<b>4. Match-the-Column: “Gland–Hormone–Function–Disorder”</b>' },
      { t: 'p', html: '<b>What it looks like:</b> Two columns of items that must be paired correctly.' },
      {
        t: 'proc',
        title: 'Approach',
        steps: [
          'Identify the easiest pairing first (usually the one with a unique, unmistakable item).',
          'Eliminate options that pair that item wrong.',
          'Repeat.',
        ],
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Column-I lists the hormone source and Column-II the hormone. Match them.<br><br>Column-I | Column-II<br>A. α-cell | I. Inhibin<br>B. β-cell | II. Glucagon<br>C. Leydig cell | III. Insulin<br>D. Sertoli cells | IV. Testosterone<br><br>Options:<br>(a) A–I, B–III, C–IV, D–II<br>(b) A–III, B–II, C–IV, D–I<br>(c) A–I, B–III, C–II, D–IV<br>(d) A–II, B–III, C–IV, D–I',
        steps: [
          'Leydig cells → testosterone (Leydig cells are in the testis interstitium and secrete androgens). C must be IV. Eliminate (c), which pairs C with II.',
          'Sertoli cells → inhibin (Sertoli cells secrete inhibin for FSH feedback). D must be I. Eliminate (a), which pairs D with II.',
          'α-cells → glucagon. A must be II. Eliminate (b), which pairs A with III.',
          'β-cells → insulin. B must be III, which agrees with (d).',
        ],
        ans: '(d) A–II, B–III, C–IV, D–I',
      },

      { t: 'part', title: 'The Traps' },
      { t: 'p', html: 'Examiners repeatedly use the following confusions:' },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'How it appears', 'Why it is wrong'],
        rows: [
          [
            '<b>Pituitary lobe confusion</b>',
            'Options list oxytocin/ADH as anterior-pituitary products',
            'Anterior pituitary makes FSH, LH, ACTH, TSH, PRL, GH; oxytocin and ADH are made in hypothalamus, stored in posterior pituitary',
          ],
          [
            '<b>α vs β cell reversal</b>',
            'Glucagon matched to β-cells; insulin matched to α-cells',
            'β-cells → insulin; α-cells → glucagon',
          ],
          [
            '<b>Neurohypophysis misconception</b>',
            '“Neurohypophysis secretes its own hormones”',
            'It stores and releases only; synthesis is in the hypothalamus',
          ],
          [
            '<b>Diabetes insipidus ↔ mellitus swap</b>',
            '“Failure of vasopressin causes diabetes mellitus”',
            'Vasopressin deficiency → diabetes <b>insipidus</b> (water problem); insulin deficiency → diabetes <b>mellitus</b> (glucose problem)',
          ],
          [
            '<b>Melatonin misplaced</b>',
            'Options list it as a pituitary or thyroid product',
            'Pineal gland, not pituitary',
          ],
          [
            '<b>Thyroxine vs parathormone on calcium</b>',
            'Thyroxine given as the antagonist to PTH',
            'The calcium antagonist is <b>calcitonin</b>, not thyroxine',
          ],
          [
            '<b>Releasing hormones location</b>',
            '“Releasing hormones are produced by the pituitary”',
            'Produced by <b>hypothalamus</b>, travel via hypophyseal portal system',
          ],
          [
            '<b>Second messenger red herrings</b>',
            'Sodium listed as a second messenger',
            'Second messengers include cAMP, cGMP, IP<sub>3</sub>, DAG and Ca<sup>2+</sup>; sodium is not',
          ],
          [
            '<b>Steroid vs peptide receptor location</b>',
            'Insulin listed alongside cortisol as an intracellular-receptor hormone',
            'Insulin is a peptide → surface receptor (not an intracellular one); steroid and thyroid hormones are the ones that use intracellular receptors',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      { t: 'p', html: 'Each question is modelled on past NEET/CBSE patterns.' },
      {
        t: 'practice',
        items: [
          {
            q: '[Level 1: Direct recall] Which of the following is not a protein/peptide hormone?<br>(a) Insulin<br>(b) Glucagon<br>(c) Cortisol<br>(d) Oxytocin',
            a: '(c): Cortisol is a steroid hormone (from adrenal cortex). Insulin, glucagon, and oxytocin are all peptides/proteins.',
          },
          {
            q: '[Level 1: Direct recall] The hormone that helps in water reabsorption from kidney tubules is:<br>(a) Aldosterone<br>(b) ADH<br>(c) ANF<br>(d) PTH',
            a: '(b): ADH (vasopressin) acts on the collecting ducts to increase water reabsorption. Aldosterone conserves Na<sup>+</sup> (water follows only secondarily); ANF lowers blood pressure; PTH raises calcium.',
          },
          {
            q: '[Level 2: Concept application] A patient is diagnosed with a disorder characterized by high blood glucose, glycosuria, and ketone body formation. The doctor prescribes insulin injections. Which of the following correctly describes the mechanism of insulin action?<br>(a) Binds intracellular receptors and regulates gene expression<br>(b) Binds cell-surface receptors and generates cAMP as second messenger<br>(c) Binds cell-surface receptors and activates tyrosine kinase signaling<br>(d) Diffuses through the plasma membrane and binds nuclear receptors',
            a: '(c): Insulin is a peptide hormone; it cannot cross the membrane. It binds a receptor tyrosine kinase (RTK) on the cell surface; the receptor autophosphorylates and triggers the IRS–PI3K–Akt pathway leading to GLUT4 translocation and glucose uptake. cAMP is the second messenger for glucagon and adrenaline, not insulin.',
          },
          {
            q: '[Level 2: Concept application] Which of the following correctly represents the antagonistic pair controlling blood calcium?<br>(a) PTH and calcitonin<br>(b) Insulin and glucagon<br>(c) Aldosterone and ANF<br>(d) TSH and TRH',
            a: '(a): PTH raises blood Ca<sup>2+</sup> (bone resorption, kidney reabsorption, gut absorption); calcitonin lowers it (inhibits bone resorption). Insulin and glucagon are antagonists for glucose; aldosterone and ANF are antagonists for blood pressure; TRH and TSH are successive steps of the thyroid axis, not an antagonistic pair.',
          },
          {
            q: '[Level 3: Statement evaluation] Consider the following statements:<br>(i) The thymus secretes thymosin which helps in the differentiation of T-lymphocytes.<br>(ii) The thymus is prominent in early life and gradually degenerates with age.<br>(iii) Thymosin is secreted by the pineal gland.<br>Which statement(s) is/are correct?<br>(a) (i) only<br>(b) (i) and (ii) only<br>(c) (ii) and (iii) only<br>(d) All three',
            a: '(b): (i) is true: thymosin drives T-cell differentiation. (ii) is true: the thymus is largest relative to body size in early life and degenerates with age, weakening immunity in the elderly. (iii) is false: thymosin is secreted by the <b>thymus</b>; the pineal gland secretes <b>melatonin</b>.',
          },
          {
            q: '[Level 3: Statement evaluation] Assertion (A): Steroid hormones produce slower but longer-lasting effects than peptide hormones.<br>Reason (R): Steroid hormones act on intracellular receptors and regulate gene expression, while peptide hormones act on surface receptors via second messengers.<br>Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: '(a): Both A and R are true, and R is the correct biochemical explanation for A. Steroids must enter the cell and the nucleus, where the hormone–receptor complex binds DNA and the cell synthesizes new proteins → slow onset, durable effect. Peptides generally act on existing enzymes, often via second messengers → fast, brief effect.',
          },
          {
            q: '[Level 4: Diagram / matching] In the hypophyseal portal system, releasing and inhibiting hormones from the hypothalamus are transported directly to the:<br>(a) Posterior pituitary<br>(b) Anterior pituitary<br>(c) Pineal gland<br>(d) Thyroid gland',
            a: '(b): The hypophyseal (hypophysial) portal system is a specialized blood connection between the hypothalamus and the anterior pituitary. It carries hypothalamic releasing/inhibiting hormones directly to the anterior lobe without dilution in the systemic circulation. The posterior pituitary receives neural connections (axon tracts), not portal blood.',
          },
          {
            q: '[Level 4: Diagram / matching] Match the hormone in Column-I with its source cell in Column-II:<br><br>Column-I | Column-II<br>A. Testosterone | I. β-cells of Islets<br>B. Inhibin | II. α-cells of Islets<br>C. Insulin | III. Leydig cells<br>D. Glucagon | IV. Sertoli cells<br><br>(a) A–III, B–IV, C–I, D–II<br>(b) A–IV, B–III, C–II, D–I<br>(c) A–II, B–I, C–III, D–IV<br>(d) A–III, B–I, C–IV, D–II',
            a: '(a): Leydig cells secrete testosterone (A → III). Sertoli cells secrete inhibin (B → IV). β-cells secrete insulin (C → I). α-cells secrete glucagon (D → II).',
          },
          {
            q: '[Level 4: Diagram / matching] A newborn shows stunted growth, mental retardation, and a protruding tongue. The same hormone deficiency in an adult produces puffy skin and low metabolic rate. The gland involved and the two disorders are respectively:<br>(a) Thyroid: cretinism (newborn) and myxoedema (adult)<br>(b) Pituitary: cretinism (newborn) and acromegaly (adult)<br>(c) Thyroid: acromegaly (newborn) and myxoedema (adult)<br>(d) Parathyroid: tetany (newborn) and osteitis fibrosa (adult)',
            a: '(a): Thyroid hormone (T<sub>3</sub>/T<sub>4</sub>) deficiency in the foetus/infant → cretinism (stunted growth, mental retardation, protruding tongue). The same deficiency in adults → myxoedema (Gull’s disease; puffy skin, low BMR, sluggish metabolism). The age-dependent presentation is partly described in the chapter (stunted growth, mental retardation, myxoedema).',
          },
          {
            q: '[Level 5: Integrated / multi-step] A patient with Addison’s disease is found to have deficiency of both cortisol and aldosterone. Which of the following would be an expected clinical finding?<br>(a) Hyperglycaemia<br>(b) Hypernatremia and hypokalemia<br>(c) Hyponatremia and hyperkalemia<br>(d) Increased urine output with dilute urine',
            a: '(c): Addison’s disease = adrenal cortex insufficiency → deficiency of both cortisol (glucocorticoid) and aldosterone (mineralocorticoid). Aldosterone normally promotes Na<sup>+</sup> reabsorption and K<sup>+</sup> excretion. Its deficiency → <b>hyponatremia</b> (low Na<sup>+</sup>) and <b>hyperkalemia</b> (high K<sup>+</sup>). There is no hyperglycaemia (cortisol deficiency causes hypoglycemia, not hyperglycaemia). Urine output is not the primary issue; the problem is electrolyte imbalance.',
          },
          {
            q: '[Level 5: Integrated / multi-step] Which of the following statements about the mechanism of hormone action is INCORRECT?<br>(a) Hormones that bind to cell-surface receptors generally act faster than those that bind intracellular receptors.<br>(b) cAMP is a second messenger for peptide hormones like glucagon.<br>(c) Steroid hormones bind cell-surface receptors and act through cAMP as the second messenger.<br>(d) Protein hormones are stored in secretory granules and released by exocytosis, while steroid hormones diffuse out of the cell as soon as they are synthesized.',
            a: '(c): Statement (c) is incorrect. Steroid hormones are lipophilic; they cross the plasma membrane and bind <b>intracellular</b> receptors, and the hormone-receptor complex then acts on DNA to alter gene expression. cAMP is a second messenger of many peptide and amine hormones that use surface receptors. Statements (a), (b) and (d) are correct: surface-receptor hormones act faster, cAMP serves glucagon, and steroids are not stored but diffuse out as they are made, whereas protein hormones are stored in granules and released by exocytosis.',
          },
          {
            q: '[Level 5: Integrated / multi-step] In the thyroid axis, the structures are arranged as shown below (A stimulates B, and B stimulates C):<br><br>Structure | Name<br>A | Hypothalamus<br>B | Anterior pituitary<br>C | Thyroid gland<br><br>If structure A secretes excess hormone, which of the following will happen to the secretions of B and C?<br>(a) Secretions of both B and C will increase<br>(b) Secretions of both B and C will decrease<br>(c) Secretion of B will increase and C will decrease<br>(d) Secretion of B will decrease and C will increase',
            a: '(a): This tests the hypothalamo-pituitary-thyroid axis. A (hypothalamus) secretes TRH → B (anterior pituitary) secretes TSH → C (thyroid) secretes T<sub>3</sub>/T<sub>4</sub>. Excess TRH from A raises TSH from B, and the extra TSH raises T<sub>3</sub>/T<sub>4</sub> from C, so both B and C increase. A rise in T<sub>3</sub>/T<sub>4</sub> from C (the thyroid) would lower the secretions of A and B through negative feedback: rising T<sub>3</sub>/T<sub>4</sub> suppress TRH and TSH release.',
          },
        ],
      },

      { t: 'part', title: 'Two Topics Worth Contrasting' },
      {
        t: 'p',
        html: '<b>Diabetes insipidus versus diabetes mellitus.</b> These two conditions are easily confused, and the book says assertion–reason questions often test the difference. They share the word “diabetes” and the symptoms of thirst and passing large volumes of urine, but arise from entirely different hormone systems.',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Diabetes insipidus', 'Diabetes mellitus'],
        rows: [
          ['Hormone involved', 'ADH (vasopressin)', 'Insulin'],
          ['Defect', 'ADH deficiency (central form)', 'Insulin deficiency (type 1)'],
          [
            'Main effect',
            'Kidney cannot conserve water: large volumes of dilute urine, thirst',
            'High blood glucose, glycosuria, thirst, frequent urination',
          ],
          ['Blood glucose', 'Normal', 'High'],
        ],
      },
      {
        t: 'p',
        html: '<b>Hormones of the heart, kidney and GI tract.</b> ANF (heart) lowers blood pressure; erythropoietin (kidney) stimulates RBC formation; gastrin, secretin, CCK and GIP are the four GI hormones named in this chapter. Learn each hormone together with its source and one action.',
      },
    ],
  },
];
