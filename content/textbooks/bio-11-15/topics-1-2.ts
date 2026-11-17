import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 15 (Body Fluids and Circulation), Topics 01 and 02:
 * pp. 887 to 904 of the Class 11 Biology Master Reference, word for word. The
 * chapter title page (p. 886) and the contents box at the top of p. 887 are not
 * copied. Topic 01 Blood: Components & Coagulation (pp. 887 to 896) and Topic
 * 02 Lymph & the Human Circulatory System (pp. 897 to 904) are cut at the
 * book's Sections 1 to 8. Figures 15.1 (caption p. 889, drawn p. 890), 15.2
 * (caption p. 891, drawn p. 892), 15.3 (caption p. 893, drawn p. 894), 15.4
 * (caption p. 899, drawn p. 900) and 15.5 (caption p. 901, drawn p. 902) are
 * redrawn in lib/diagrams/biology-11-15.ts; these pages hold no unnumbered
 * drawing (the arrows with a label over them on pp. 891 and 899 are typeset
 * text). Emphasis italics are dropped; the book's MCQ and example options are
 * lettered (a) to (d).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 887–896 ─────────────────────────
  {
    n: '01',
    title: 'Blood: Components & Coagulation',
    kalam: 'Blood is a fluid connective tissue made of living cells suspended in a liquid ground substance (the plasma).',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A frequently asked topic. NEET asks 1–2 direct questions almost every year (the book’s estimate from past papers, not official figures) on blood cell types, the clotting cascade, and ABO/Rh grouping; assertion–reason and match-the-column formats are common here. CBSE Boards favour a 2–3 mark “name the components / explain clotting” question, and CUET leans on definition-recall and the universal donor/recipient logic. Coagulation factors and erythroblastosis foetalis are common high-difficulty NEET traps.',
      },
      {
        t: 'p',
        html: 'Imagine the Indian Railways at full tilt, a single network carrying passengers, parcels, food, and even repair crews to every corner of the country, never stopping. Your blood is exactly this: a flowing tissue that is simultaneously a delivery service, a defence force, and an emergency repair team. We casually call it a “red fluid,” but that is only half the story. Blood is a fluid connective tissue made of living cells suspended in a liquid ground substance (the plasma).',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> If you take blood, add an anticoagulant so it won’t clot, and spin it in a centrifuge, it neatly separates into two worlds. The lighter top layer, a pale straw-coloured liquid, is the <b>plasma</b>, the “water of the railway,” carrying everything dissolved. Plasma makes up roughly <b>55%</b> of total blood volume and is the medium that holds the blood cells in suspension. The heavier bottom layer is the <b>formed elements</b>: the red cells (RBCs), white cells (WBCs), and platelets, the passengers, soldiers, and repair crew respectively.',
      },
      {
        t: 'p',
        html: 'Each group has one job it does brilliantly. RBCs are the oxygen couriers, packed with haemoglobin. WBCs are the body’s standing army (often described as the “soldiers of the body”) that fight off harmful bacteria and disease. Platelets are the masons who rush to seal any leak. And when a vessel is cut, a beautiful cascade of chemistry kicks in to plug the gap before you lose too much: that is <b>coagulation</b>, the subject’s second half.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> A few cautions worth internalising early:',
      },
      {
        t: 'p',
        html: '• The 55% plasma / 45% cells split is an average healthy adult figure; it shifts in dehydration (plasma falls, cells appear concentrated) and anaemia (RBC fraction drops).<br>• “Blood is red” is a simplification: only oxygenated blood is bright scarlet; deoxygenated blood is a dark maroon, never blue.<br>• Clotting is meant to happen only at the site of injury. A clot forming inside an intact vessel (a thrombus) is pathological, not protective: the same machinery, in the wrong place, is dangerous.<br>• Lymph is <b>not</b> a separate magic fluid; it is essentially plasma that has leaked into tissue spaces and is being returned to blood, carrying WBCs but lacking RBCs and some large plasma proteins.',
      },

      { t: 'part', title: 'Key components and normal values' },
      { t: 'p', html: '<b>Plasma (~55% of blood)</b>' },
      {
        t: 'p',
        html: 'A straw-coloured liquid, about 90–92% water, with 6–8% dissolved proteins plus ions, glucose, amino acids, hormones, and wastes. The three major plasma proteins are <b>albumin</b> (osmotic balance), <b>globulins</b> (immunity/defence), and <b>fibrinogen</b> (clotting). Plasma also ferries dissolved nutrients (glucose, amino acids, fatty acids), respiratory gases, hormones, mineral ions (Na<sup>+</sup>, Cl<sup>−</sup>, Ca<sup>2+</sup>, HCO<sub>3</sub><sup>−</sup>), and nitrogenous wastes (urea, uric acid). Beyond transport, it helps regulate body temperature, maintains blood pH through buffers, and, via its proteins, sustains blood osmotic pressure and volume. When blood clots, the clotting proteins are consumed; the clear fluid left behind is <b>serum</b>, i.e. plasma minus the clotting factors (mainly fibrinogen, which has been used up), which is why serum does not coagulate.',
      },
      {
        t: 'p',
        html: '<b>Formed elements (~45% of blood)</b> This cellular fraction packed at the bottom of a centrifuged sample is the <b>haematocrit</b> (packed cell volume, PCV), normally about 45%, and a quick clinical index of red-cell status.',
      },
      {
        t: 'p',
        html: 'Erythrocytes (RBCs): Biconcave, enucleate discs in mammals, packed with haemoglobin. The biconcave shape maximises surface area for gas exchange and lets the cell deform to squeeze through narrow capillaries; lacking a nucleus and mitochondria, a mature RBC has more room for haemoglobin and does not consume the oxygen it ferries. They are the most numerous cells in blood, about <b>5–5.5 million per mm<sup>3</sup></b> (~7 μm across), and are formed in the <b>red bone marrow</b> (erythropoiesis). A healthy individual carries about <b>12–16 g of haemoglobin per 100 mL of blood</b>. Each RBC has an average lifespan of about <b>120 days</b>, after which it is destroyed in the <b>spleen</b> (the “graveyard of RBCs”). A shortfall of RBCs or haemoglobin causes <b>anaemia</b>; an excess is <b>polycythaemia</b>.',
      },
      {
        t: 'p',
        html: 'Leucocytes (WBCs): Colourless, nucleated, amoeboid cells that lack haemoglobin and can squeeze out through capillary walls by a process called <b>diapedesis</b>. They fall into two families, with a characteristic differential count:',
      },
      {
        t: 'table',
        title: null,
        head: ['Class', 'Cell', '~% of WBCs', 'Role'],
        rows: [
          ['Granulocytes', 'Neutrophil', '60–65%', 'Most abundant WBC; chief phagocyte'],
          ['Granulocytes', 'Eosinophil', '2–3%', 'Resist infection; allergic & inflammatory reactions'],
          ['Granulocytes', 'Basophil', '0.5–1%', 'Least abundant; secrete histamine, serotonin and heparin (inflammation)'],
          ['Agranulocytes', 'Lymphocyte', '20–25%', 'B- and T-cells; the core of immune responses'],
          ['Agranulocytes', 'Monocyte', '6–8%', 'Largest WBC; phagocytic, matures into a macrophage'],
        ],
      },
      {
        t: 'p',
        html: 'A fall in WBC count is called <b>leucopenia</b> (seen in folic-acid deficiency, AIDS, etc.). The total WBC count (~6,000–8,000 per mm<sup>3</sup>) is far lower than the RBC count; <b>granulocytes</b> (neutrophils, eosinophils, basophils) carry cytoplasmic granules, while <b>agranulocytes</b> (lymphocytes, monocytes) do not. An abnormal rise in WBCs, as in blood cancer, is <b>leukaemia</b>.',
      },
      {
        t: 'p',
        html: 'Platelets (thrombocytes): Tiny enucleate cell fragments (~1.5–3.5 lakh per mm<sup>3</sup> of blood) budded from large bone-marrow cells called <b>megakaryocytes</b>, with a short lifespan of about a week. They are the first responders to vessel injury, clumping at the wound and releasing the factors that launch clotting. A fall in their number (<b>thrombocytopenia</b>, notably in dengue fever) impairs clotting and causes abnormal bleeding.',
      },
      {
        t: 'p',
        html: '<b>Lymph</b> A clear, yellowish, slightly alkaline, coagulable fluid containing leucocytes in a fluid matrix that resembles plasma. Functionally it returns interstitial (tissue) fluid back to the blood.',
      },
      { t: 'fig', id: 'b11-15-fig-15.1' },

      { t: 'part', title: 'Key processes and mechanisms' },
      { t: 'p', html: '<b>Blood Coagulation (clotting): the repair cascade</b>' },
      {
        t: 'p',
        html: 'The moment a vessel is injured, the very first response, even before clotting begins, is <b>vascular spasm</b>: the muscular wall contracts to narrow the vessel and reduce blood loss. Almost at once, platelets stick to the exposed wound surface and to one another, forming a temporary <b>platelet plug</b> that buys time. What follows is the chemical chain reaction that turns this loose plug into a firm clot:',
      },
      {
        t: 'p',
        html: '1. <b>Trigger.</b> At the wound, platelets release <b>platelet factor-3</b>, and the injured tissue releases <b>tissue thromboplastin</b>.<br>2. <b>Prothrombinase forms.</b> These factors combine, in the presence of <b>Ca<sup>2+</sup></b> ions, to produce the enzyme complex <b>prothrombinase</b> (also called thrombokinase).<br>3. <b>Thrombin generated.</b> Prothrombinase converts inactive plasma protein <b>prothrombin → thrombin</b>.',
      },
      { t: 'p', html: 'Prothrombin → Thrombin [over the arrow: prothrombinase; under it: Ca<sup>2+</sup>]' },
      {
        t: 'p',
        html: '4. <b>Fibrin mesh.</b> Thrombin then converts soluble <b>fibrinogen → insoluble fibrin</b> threads, which form a meshwork trapping blood cells, the <b>clot</b>.',
      },
      { t: 'p', html: 'Fibrinogen (soluble) → Fibrin (insoluble) [over the arrow: thrombin]' },
      {
        t: 'p',
        html: 'Two convergent routes feed this cascade: an <b>intrinsic pathway</b> (triggered by factors within the blood contacting the damaged surface) and an <b>extrinsic pathway</b> (triggered by tissue thromboplastin), both converging on prothrombinase. <b>Ca<sup>2+</sup></b> is needed at several steps of the cascade, and <b>vitamin K</b> is needed by the liver to make clotting factors, including prothrombin.',
      },
      {
        t: 'p',
        html: '<b>The brake: anticoagulants</b> Blood naturally contains a little <b>heparin</b>, a fast-acting anticoagulant that prevents clotting inside uninjured vessels by inhibiting the conversion of prothrombin to thrombin; it is used clinically during open-heart surgery. In the body it works with the plasma protein antithrombin, which inactivates thrombin and factor Xa; it is made by basophils and mast cells. Prothrombinase, by contrast, promotes clotting. In the laboratory, blood is kept fluid for testing by agents that mop up calcium (<b>sodium citrate, potassium oxalate, or EDTA</b>), since the cascade cannot run without Ca<sup>2+</sup>.',
      },
      {
        t: 'p',
        html: '<b>Maturing and clearing the clot</b> Once fibrin forms, the fresh clot is reinforced (cross-linked) and then slowly contracts in a process called <b>clot retraction</b>, squeezing out the straw-coloured serum and drawing the wound edges together. After healing, the enzyme <b>plasmin</b> digests the fibrin mesh (<b>fibrinolysis</b>), dissolving the clot so normal flow resumes: the body’s clean-up crew once the repair is done.',
      },
      {
        t: 'p',
        html: '<b>When the cascade breaks: Haemophilia</b> (“bleeder’s disease”) is an X-linked recessive disorder of clotting. In <b>Haemophilia A</b>, clotting <b>factor VIII</b> is deficient or defective; in <b>Haemophilia B</b>, <b>factor IX</b> is deficient. Factor VIII is a cofactor for factor IXa which, with Ca<sup>2+</sup> and phospholipids, converts <b>factor X → activated Xa</b>. Even a small cut can then bleed dangerously.',
      },
      { t: 'fig', id: 'b11-15-fig-15.2' },
      { t: 'p', html: '<b>Blood Groups: the ABO and Rh systems</b>' },
      {
        t: 'p',
        html: 'The <b>ABO system</b> classifies human blood by the <b>antigens A and B carried on the RBC surface</b>, giving four types: A, B, O, and AB. It was first identified by the Austrian immunologist <b>Karl Landsteiner in 1901</b>. The plasma carries the opposite antibodies (group A has anti-B, group B has anti-A, O has both, AB has neither). Mixing incompatible blood causes <b>agglutination</b> (clumping).',
      },
      {
        t: 'p',
        html: 'Because group <b>O</b> lacks A and B antigens, it is the <b>universal donor</b>; group <b>AB</b>, lacking antibodies, is the <b>universal recipient (acceptor)</b>.',
      },
      {
        t: 'table',
        title: null,
        head: ['Group', 'Antigen on RBC', 'Antibody in plasma', 'Can donate to', 'Can receive from'],
        rows: [
          ['A', 'A', 'anti-B', 'A, AB', 'A, O'],
          ['B', 'B', 'anti-A', 'B, AB', 'B, O'],
          ['AB', 'A and B', 'none', 'AB', 'A, B, AB, O'],
          ['O', 'none', 'anti-A and anti-B', 'A, B, AB, O', 'O'],
        ],
      },
      {
        t: 'p',
        html: 'The <b>Rh factor</b> is an antigen named after the <b>Rhesus monkey</b> (Landsteiner & Wiener); about 80% of people are Rh-positive. Because O-positive blood still carries the Rh antigen, the true universal donor is <b>O-negative</b>, and the true universal recipient is <b>AB-positive</b>.',
      },
      {
        t: 'p',
        html: '<b>Erythroblastosis foetalis</b> is a haemolytic disease of the newborn caused by <b>Rh incompatibility</b>. If an Rh<sup>−</sup> mother carries an Rh<sup>+</sup> foetus, her <b>IgG antibodies cross the placenta</b> and attack foetal RBCs, causing reticulocytosis and anaemia; in severe cases the foetus develops hydrops fetalis. The first pregnancy usually sensitises the mother; danger rises in later Rh<sup>+</sup> pregnancies.',
      },
      {
        t: 'p',
        html: 'This is prevented by giving the Rh<sup>−</sup> mother <b>anti-Rh (anti-D) antibodies</b> soon after the first delivery, which destroy any foetal Rh<sup>+</sup> cells before her own immune system can be sensitised.',
      },
      { t: 'fig', id: 'b11-15-fig-15.3' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Name the soluble plasma protein that is converted into its insoluble form during clotting, name the enzyme that does this, and state the role of calcium.',
        steps: [
          '<b>Solution.</b> The soluble protein is <b>fibrinogen</b>, converted by the enzyme <b>thrombin</b> into insoluble <b>fibrin</b>, which forms the clot mesh. <b>Ca<sup>2+</sup></b> is required earlier in the cascade, to help form prothrombinase and convert prothrombin to thrombin. (Clean, sequential statement of the three named entities earns full marks.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A patient with blood group O<sup>−</sup> is brought in needing transfusion, but the bank only labels groups by ABO. A junior assistant says “O can receive from anyone.” Is this correct?',
        steps: [
          '<b>Solution. No: trap reversed.</b> O is the universal <b>donor</b>, not recipient. O-group plasma contains <b>both</b> anti-A and anti-B antibodies, so it can receive only group O blood (and, because this patient is Rh-negative, only O-negative). The mental shortcut: “O gives to all, takes from none but O; AB takes from all, gives to none but AB.” Speed elimination: any option saying “O can receive A/B/AB” is wrong.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET Level',
        q: 'A blood sample of total volume 5.0 L is centrifuged. Using the standard plasma fraction, estimate the plasma volume and the volume occupied by formed elements.',
        steps: [
          '<b>Solution.</b> Plasma ≈ 55% of blood volume.',
          'V<sub>plasma</sub> = 0.55 × 5.0 L = 2.75 L',
          'V<sub>formed elements</sub> = 5.0 − 2.75 = 2.25 L (≈ 45%)',
        ],
        ans: 'So plasma ≈ <b>2.75 L</b> and formed elements ≈ <b>2.25 L</b>.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: 'Assertion (A): Serum cannot clot. Reason (R): Serum is plasma from which the clotting factors have already been used up. <b>(a)</b> Both A and R true, R is correct explanation <b>(b)</b> Both true, R not the explanation <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Solution. (a).</b> Serum is precisely the fluid left after a clot forms, so its fibrinogen (and some other clotting factors) is spent: there is nothing left to coagulate. A is true and R correctly explains it.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] List the formed elements of blood and state one function of each.',
            a: 'RBC (O<sub>2</sub> transport), WBC (defence), platelets (clotting).',
          },
          {
            q: '[CUET] Define diapedesis and name the cell type that performs it.',
            a: 'Diapedesis = WBCs squeezing through capillary walls; performed by leucocytes.',
          },
          {
            q: '[NEET] Which clotting factors are deficient in Haemophilia A and Haemophilia B respectively?',
            a: 'Factor VIII (A); Factor IX (B).',
          },
          {
            q: '[NEET] Why is an Rh<sup>−</sup> mother’s second Rh<sup>+</sup> pregnancy more at risk than her first?',
            a: 'The first Rh<sup>+</sup> pregnancy sensitises the mother to produce anti-Rh antibodies; in the second, pre-formed IgG crosses the placenta and attacks foetal RBCs.',
          },
          {
            q: '[NEET High-Difficulty] Arrange in correct sequence: (i) fibrin mesh (ii) prothrombinase (iii) vascular spasm (iv) thrombin formation.',
            a: 'iii → ii → iv → i.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The graveyard of red blood cells is the:',
        opts: [
          {
            label: 'Liver',
            nudge: '<b>(a)</b> Liver recycles the breakdown pigments but is not the destruction site: partial-knowledge trap.',
          },
          {
            label: 'Bone marrow',
            nudge: '<b>(b)</b> Bone marrow is where RBCs are made, the opposite confusion.',
          },
          { label: 'Spleen', nudge: null },
          {
            label: 'Thymus',
            nudge: '<b>(d)</b> Thymus is a lymphoid organ for T-cell maturation, unrelated.',
          },
        ],
        correct: 2,
        solution: 'Spleen. RBCs (lifespan ~120 days) are destroyed here.',
      },
      {
        t: 'mcq',
        q: 'Which is the most abundant leucocyte and the body’s chief phagocyte?',
        opts: [
          {
            label: 'Lymphocyte',
            nudge: '<b>(a)</b> Lymphocytes are second-most abundant but are antibody/immune cells, not the chief phagocyte: a common mix-up.',
          },
          { label: 'Neutrophil', nudge: null },
          {
            label: 'Eosinophil',
            nudge: '<b>(c)</b> Eosinophils link to allergy, not general phagocytosis.',
          },
          {
            label: 'Basophil',
            nudge: '<b>(d)</b> Basophils are the least abundant: picked by students who reverse the abundance order.',
          },
        ],
        correct: 1,
        solution: 'Neutrophil (~60–65%).',
      },
      {
        t: 'mcq',
        q: 'Heparin prevents intravascular clotting by:',
        opts: [
          {
            label: 'Dissolving existing clots',
            nudge: '<b>(a)</b> confuses heparin with a clot-buster (thrombolytic): heparin prevents, it does not dissolve.',
          },
          { label: 'Inhibiting prothrombin → thrombin conversion', nudge: null },
          {
            label: 'Destroying platelets',
            nudge: '<b>(c)</b> Heparin does not lyse platelets.',
          },
          {
            label: 'Removing Ca<sup>2+</sup> permanently',
            nudge: '<b>(d)</b> Ca<sup>2+</sup> is not permanently removed in vivo; that’s a lab anticoagulant trick (citrate), not heparin’s mechanism.',
          },
        ],
        correct: 1,
        solution: '',
      },
      {
        t: 'mcq',
        q: 'A person of blood group AB:',
        opts: [
          {
            label: 'Has both anti-A and anti-B antibodies',
            nudge: '<b>(a)</b> describes group O’s plasma, not AB.',
          },
          {
            label: 'Is the universal donor',
            nudge: '<b>(b)</b> O is the universal donor: the classic swap.',
          },
          {
            label: 'Has neither A nor B antigen',
            nudge: '<b>(c)</b> describes group O’s RBC surface, not AB.',
          },
          { label: 'Is the universal recipient', nudge: null },
        ],
        correct: 3,
        solution: 'AB has both antigens and <b>no</b> antibodies, so it can receive all groups.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Donor/recipient flip.</b> A common error: confusing universal donor (O) with universal recipient (AB). Anchor it once and never lose marks.',
          '<b>Plasma vs serum.</b> Plasma has fibrinogen; serum does not. If a question mentions clotting being possible, it’s plasma.',
          '<b>“Antigens are in plasma.”</b> No: <b>antigens sit on the RBC surface; antibodies float in the plasma.</b> Swapping these wrecks every transfusion question.',
          '<b>Making vs destroying RBCs.</b> Bone marrow makes them; spleen destroys them. Don’t merge.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any clotting-sequence question, memorise the four-beat rhythm <b>“Spasm → Prothrombinase → Thrombin → Fibrin”</b> (mnemonic: <b>S</b>ome <b>P</b>eople <b>T</b>hink <b>F</b>ast). For blood groups, recall just the antigens: for the ABO groups, the antibodies are the complement of what the RBC carries, so you never need to memorise both lists (anti-D is the exception: an Rh-negative person makes it only after exposure to Rh-positive cells).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Blood = plasma (~55%) + formed elements (~45%)',
            note: 'Plasma is straw-coloured; serum = plasma − clotting factors (mainly fibrinogen).',
          },
          { f: 'RBC', note: 'Hb 12–16 g/100 mL; lifespan ~120 days; destroyed in spleen.' },
          {
            f: 'WBC order of abundance',
            note: 'Neutrophils (60–65%, chief phagocyte) > Lymphocytes > Monocytes > Eosinophils > Basophils (least). Move by <b>diapedesis</b>; ↓count = <b>leucopenia</b>.',
          },
          {
            f: 'Clotting cascade',
            note: 'Injury → spasm → prothrombinase (Ca<sup>2+</sup>) → prothrombin → thrombin → fibrinogen → fibrin. Brake = <b>heparin</b>.',
          },
          { f: 'Haemophilia', note: 'A = factor <b>VIII</b>, B = factor <b>IX</b> (X-linked recessive).' },
          {
            f: 'Blood groups',
            note: 'antigens on RBC, antibodies in plasma. <b>O = universal donor, AB = universal recipient. Erythroblastosis foetalis</b> = Rh<sup>−</sup> mother × Rh<sup>+</sup> foetus.',
          },
          { f: 'Mnemonics', note: 'clotting = Some People Think Fast; groups = “O gives all, AB takes all.”' },
        ],
        aids: [],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 897–904 ─────────────────────────
  {
    n: '02',
    title: 'Lymph & the Human Circulatory System',
    kalam: 'The heart’s genius is that it keeps two blood streams from ever mixing.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-yield area of the chapter. NEET reliably asks 2–3 questions (the book’s estimate from past papers, not official figures) on heart chambers, valves, the conduction (nodal) system, and the pulmonary-vs-systemic circulation, often as diagram-identification or match-the-column. CBSE Boards favour a 3–5 mark “describe the structure of the human heart / double circulation” question. CUET leans on artery-vs-vein and lymph definitions. The pulmonary artery “trap” (an artery carrying deoxygenated blood) appears often.',
      },
      {
        t: 'p',
        html: 'Picture a city’s water network with a single, tireless pump-house at the centre. Pipes carry fresh water out to every home, used water drains back, and the pump never rests. Your <b>circulatory system</b> is exactly this: the <b>heart</b> is the pump-house, the <b>blood vessels</b> are the pipes, and the blood is the water on its endless round trip. Then there is a quieter second network: drains that catch the water seeping out of the pipes and return it before the streets flood. That is the <b>lymphatic system</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> No tissue cell in your body sits directly in blood. Blood stays inside vessels; what actually bathes your cells is <b>tissue (interstitial) fluid</b> that leaks out of the thin-walled capillaries. Most of it seeps back into the blood, but the leftover is mopped up by lymph capillaries, and this collected interstitial fluid, once inside lymph capillaries, is <b>lymph</b>, which travels through lymph vessels to lymph nodes and finally empties into the subclavian veins, rejoining the blood. So lymph is not a separate liquid: it is blood’s overflow being recycled.',
      },
      {
        t: 'p',
        html: 'The heart’s genius is that it keeps two blood streams from ever mixing. The right side handles “dirty” (deoxygenated) blood and ships it to the lungs; the left side handles “clean” (oxygenated) blood and ships it to the body. Because blood passes through the heart <b>twice</b> in one full circuit, we call it <b>double circulation</b>. (The two streams never mix only in complete double circulation, found in crocodiles, birds and mammals.)',
      },
      { t: 'p', html: '<b>Limiting Conditions & Assumptions.</b>' },
      {
        t: 'p',
        html: '• “Arteries carry oxygenated, veins carry deoxygenated” is the general rule but has two famous exceptions: the <b>pulmonary artery</b> carries deoxygenated blood (heart→lungs) and the <b>pulmonary veins</b> carry oxygenated blood (lungs→heart). Defining vessels by oxygen content is the trap; define them by direction instead: an <b>artery carries blood away from the heart</b>, a vein carries it back.<br>• Double circulation is complete in crocodiles, birds and mammals (4-chambered heart). Amphibians and most other reptiles have a 3-chambered heart with <b>incomplete</b> double circulation: some mixing occurs.<br>• The heart beats on its own. Because it is <b>myogenic</b> (the impulse arises within the heart muscle itself), it keeps beating rhythmically even if its nerve supply is cut. Nerves only modulate the rate; they do not start it.',
      },

      { t: 'part', title: 'Key components and normal values' },
      { t: 'p', html: '<b>The Heart: chambers</b>' },
      {
        t: 'p',
        html: 'The human heart has <b>four chambers</b>: two upper <b>atria</b> (auricles) and two lower <b>ventricles</b>. The <b>right atrium</b> receives CO<sub>2</sub>-rich (deoxygenated) blood from the body; the <b>right ventricle</b> pumps it to the lungs. The <b>left atrium</b> receives oxygenated blood from the lungs; the <b>left ventricle</b> pumps it to the whole body.',
      },
      {
        t: 'p',
        html: 'The whole organ sits in a double-walled protective sac, the <b>pericardium</b>. A thin film of <b>pericardial fluid</b> between its layers reduces friction as the heart beats. Deoxygenated blood arrives at the right atrium through two great veins, the <b>superior vena cava</b> (from the upper body) and the <b>inferior vena cava</b> (from the lower body), while the left ventricle, with the thickest muscular wall, must generate enough force to drive blood through the entire systemic circuit.',
      },
      {
        t: 'p',
        html: 'The heart wall is built of <b>cardiac muscle</b>, a tissue found only in the heart (and the roots of the great vessels). It is <b>striated</b> like skeletal muscle yet <b>involuntary</b> like smooth muscle, and uniquely it is <b>autorhythmic</b>: the muscle itself generates the beat without any command from the brain. This is what makes the heart a self-running pumping station, contracting and relaxing roughly 72 times every minute for an entire lifetime without tiring.',
      },
      {
        t: 'table',
        title: 'Valves (4): one-way doors',
        head: ['Valve', 'Location', 'Cusps'],
        rows: [
          ['Tricuspid (AV)', 'Right atrium → right ventricle', '3 cusps'],
          ['Bicuspid / Mitral (AV)', 'Left atrium → left ventricle', '2 flaps'],
          ['Pulmonary (semilunar)', 'Right ventricle → pulmonary artery', '3 semilunar cusps'],
          ['Aortic (semilunar)', 'Left ventricle → aorta', '3 semilunar cusps'],
        ],
      },
      {
        t: 'p',
        html: 'Valves maintain <b>unidirectional flow</b> and prevent backflow (regurgitation); they open and close according to pressure on either side.',
      },
      {
        t: 'p',
        html: 'The <b>chordae tendineae</b> anchor the AV-valve cusps so they cannot flip back into the atria when the ventricles contract.',
      },
      { t: 'p', html: '<b>Conduction (nodal) tissue</b>' },
      {
        t: 'p',
        html: '• <b>SA node (sino-atrial node):</b> in the upper-right corner of the right atrium; the natural <b>pacemaker</b>; the resting heart beats at about <b>70–75 per minute</b> (the node’s own rate, about 90–100 per minute, is held down by the vagus at rest; see Topic 03).<br>• <b>AV node (atrio-ventricular node):</b> lower part of the right atrium near the inter-atrial/AV septum; relays and slightly delays the impulse.<br>• <b>Bundle of His:</b> specialised cardiac muscle fibres connecting atria to ventricles, running in the inter-ventricular septum.<br>• <b>Purkinje fibres:</b> spread from the AV bundle through the ventricular walls.',
      },
      { t: 'p', html: '<b>Blood Vessels</b>' },
      {
        t: 'p',
        html: '• <b>Arteries:</b> thick, elastic walls; carry blood <b>away from the heart</b>; <b>no valves along their length</b> (only the semilunar valves at the roots of the aorta and pulmonary artery). All carry oxygenated blood in the adult <b>except the pulmonary artery</b> (the umbilical arteries of the foetus also carry deoxygenated blood).<br>• <b>Capillaries:</b> the smallest vessels (walls one cell thick); form a plexus between arterioles and venules; the site where <b>exchange of gases and nutrients</b> occurs.',
      },
      {
        t: 'p',
        html: 'It is in the capillaries surrounding the tissue cells that the maximum amount of oxygen is unloaded from the blood: their single-cell-thick walls make diffusion fast and efficient.',
      },
      {
        t: 'p',
        html: '• <b>Veins:</b> thinner walls, larger lumen; carry blood <b>toward the heart</b>; <b>do possess valves</b> in many places (to stop backflow against gravity; the venae cavae and venules lack them). The pulmonary veins are the exception that carry oxygenated blood. Between the large vessels and the capillaries sit the finer <b>arterioles</b> and <b>venules</b>. The rhythmic stretch of an artery as the left ventricle ejects blood is felt as the <b>pulse</b>, measurable wherever an artery runs close to the skin: the wrist, neck, or temple.',
      },
      { t: 'p', html: '<b>Lymph</b>' },
      {
        t: 'p',
        html: 'A clear-to-pale-yellow fluid rich in white blood cells (especially <b>lymphocytes</b>), formed from interstitial fluid. Its core job is to <b>return interstitial fluid (and leaked plasma proteins) to the blood</b>.',
      },
      {
        t: 'p',
        html: 'Lymph also absorbs digested <b>fats</b> from the intestine (via lacteals) and houses immune defence in <b>lymphoid organs</b> (lymph nodes, spleen, thymus).',
      },
      { t: 'fig', id: 'b11-15-fig-15.4' },

      { t: 'part', title: 'Key processes and mechanisms' },
      { t: 'p', html: '<b>The conduction pathway: how a heartbeat spreads</b>' },
      { t: 'p', html: 'The impulse follows a fixed route:' },
      { t: 'p', html: 'SA node → AV node → Bundle of His → Purkinje fibres → ventricular contraction' },
      {
        t: 'p',
        html: 'The SA node fires, exciting the atria; the signal reaches the AV node, which briefly <b>delays</b> it (giving the ventricles time to fill); it then races down the bundle of His and Purkinje fibres to make the ventricles contract from the apex upward.',
      },
      {
        t: 'p',
        html: 'The bundle of His does not run as a single cord: in the inter-ventricular septum it splits into <b>right and left bundle branches</b>, one for each ventricle, before fraying into the Purkinje network. This branching is why both ventricles contract almost simultaneously rather than one lagging behind the other.',
      },
      { t: 'p', html: '<b>Double Circulation: blood’s two loops</b>' },
      { t: 'p', html: 'Blood completes two circuits through the heart in every round:' },
      { t: 'p', html: 'Pulmonary circuit (heart ↔ lungs):' },
      { t: 'p', html: 'Right ventricle → pulmonary artery → lungs → pulmonary veins → left atrium' },
      { t: 'p', html: 'Systemic circuit (heart ↔ body):' },
      { t: 'p', html: 'Left ventricle → aorta → body tissues → vena cava → right atrium' },
      {
        t: 'p',
        html: 'A third, smaller loop, <b>coronary circulation</b>, supplies the heart muscle itself.',
      },
      {
        t: 'p',
        html: 'Contrast this with a fish’s <b>single circulation</b>: blood passes through the heart only once per circuit (heart → gills → body → heart), so it leaves the gills oxygenated but already losing pressure before it reaches the tissues. In complete double circulation the advantage is that oxygenated and deoxygenated streams never mix and each is re-pressurised by the heart before its journey: a high-efficiency design that supports the fast metabolism of birds and mammals. The <b>aorta</b> is the largest artery (~1 inch / ~2.5 cm in diameter), receiving blood directly from the left ventricle.',
      },
      { t: 'p', html: '<b>Lymph formation and drainage</b>' },
      {
        t: 'p',
        html: '1. Plasma leaks out of capillaries into tissue spaces, becoming <b>interstitial fluid</b>.<br>2. Excess interstitial fluid enters blind-ended <b>lymph capillaries</b>, where it is now called <b>lymph</b>.<br>3. Lymph flows through lymph vessels → <b>lymph nodes</b> (filtered, immune-screened) → larger ducts.<br>4. It finally empties into the <b>right or left subclavian vein</b>, rejoining the bloodstream.',
      },
      {
        t: 'p',
        html: 'Along the way, <b>lymph nodes</b> act as filtration checkpoints, trapping pathogens and exposing them to lymphocytes, which is why nodes swell during an infection. The bulk of the body’s lymph drains through the large <b>thoracic duct</b> into the left subclavian vein, while the <b>right lymphatic duct</b> drains the upper-right quadrant into the right subclavian vein. Because lymph moves slowly and has no pump of its own, it relies on skeletal-muscle squeezing and one-way valves to keep flowing.',
      },
      {
        t: 'p',
        html: '<b>Open vs closed circulation</b> Animals move blood in one of two designs. In an <b>open circulatory system</b>, seen in <b>arthropods and molluscs</b> (cephalopod molluscs such as the octopus are closed), the heart pumps blood into open spaces (sinuses, the haemocoel) where it bathes the tissues directly before draining back; flow is usually slower and less finely regulated. In a <b>closed circulatory system</b>, seen in <b>annelids and all chordates</b> (including humans), blood always stays inside a continuous network of vessels, so its flow and distribution can be precisely and efficiently controlled. The closed plan is usually the more efficient of the two.',
      },
      {
        t: 'table',
        title: 'Comparative circulation: an evolutionary ladder',
        head: ['Group', 'Heart', 'Circulation'],
        rows: [
          ['Arthropods, molluscs', 'Arthropods: dorsal tubular heart; molluscs: heart present', 'Open (blood bathes organs in sinuses/haemocoel)'],
          ['Annelids, chordates', 'Annelids: hearts (aortic arches); chordates: see below', 'Closed (blood confined to vessels)'],
          ['Fishes', '2-chambered', 'Single circulation'],
          ['Amphibians, most other reptiles', '3-chambered', 'Incomplete double circulation'],
          ['Crocodiles, birds, mammals', '4-chambered', 'Complete double circulation'],
        ],
      },
      {
        t: 'p',
        html: 'Vertebrate and molluscan hearts are <b>myogenic</b>; the hearts of most crustaceans and some annelids are <b>neurogenic</b>. The hearts of fishes, amphibians and reptiles also carry <b>accessory chambers</b> absent in mammals: a <b>sinus venosus</b> that collects incoming venous blood and a <b>truncus arteriosus</b> that channels blood out; in birds and mammals these have been incorporated into the main chambers and great vessels.',
      },
      { t: 'fig', id: 'b11-15-fig-15.5' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Trace the path of a single drop of deoxygenated blood from the right atrium until it returns to the heart as oxygenated blood. Name every chamber, valve, and vessel it passes.',
        steps: [
          '<b>Solution.</b> Right atrium → (<b>tricuspid valve</b>) → right ventricle → (<b>pulmonary valve</b>) → <b>pulmonary artery</b> → lungs (oxygenation) → <b>pulmonary veins</b> → <b>left atrium</b>. The drop enters as deoxygenated and arrives in the left atrium oxygenated: exactly one pass through the <b>pulmonary circuit</b>.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '“All arteries carry oxygenated blood and all veins carry deoxygenated blood.” A student marks this TRUE. Where is the trap?',
        steps: [
          '<b>Solution. False.</b> Two exceptions break it: the <b>pulmonary artery</b> carries deoxygenated blood and the <b>pulmonary veins</b> carry oxygenated blood. Speed rule: define vessels by direction (artery = away from heart), never by oxygen content. Any “always/all” statement about artery oxygenation is a red flag.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET Level',
        q: 'Match the node/fibre with its role: A. SA node B. AV node C. Bundle of His D. Purkinje fibres (i) delays the impulse (ii) natural pacemaker (iii) spreads impulse through ventricular walls (iv) connects atria to ventricles',
        steps: [
          '<b>Solution.</b> A–(ii), B–(i), C–(iv), D–(iii). The order of action also runs A → B → C → D, which is the easiest way to remember the matches.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: 'Assertion (A): If the chordae tendineae of the tricuspid valve are damaged, blood flow into the pulmonary artery falls. Reason (R): Damaged chordae let the tricuspid cusps flip back into the right atrium, so the right ventricle cannot eject blood efficiently. <b>(a)</b> Both true, R explains A <b>(b)</b> Both true, R not the explanation <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Solution. (a).</b> The chordae tendineae anchor the AV cusps; if they fail, the tricuspid cusps prolapse into the right atrium during ventricular systole, blood regurgitates backward instead of moving into the pulmonary artery, and forward flow to the lungs drops. R is the correct mechanism for A.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the four valves of the human heart and state the opening each one guards.',
            a: 'Tricuspid (RA→RV), bicuspid/mitral (LA→LV), pulmonary (RV→pulmonary artery), aortic (LV→aorta).',
          },
          {
            q: '[CUET] Define lymph and state its two main functions.',
            a: 'Lymph = interstitial fluid collected in lymph capillaries, rich in lymphocytes; returns tissue fluid/proteins to blood and absorbs intestinal fats.',
          },
          {
            q: '[NEET] Which is the only artery that carries deoxygenated blood, and which is the only vein that carries oxygenated blood?',
            a: 'Pulmonary artery (deoxygenated); pulmonary veins (oxygenated): in the adult.',
          },
          {
            q: '[NEET] Distinguish complete from incomplete double circulation, with one example each.',
            a: 'Complete = no mixing of oxy/deoxy blood (crocodiles, birds, mammals, 4-chambered); incomplete = some mixing (amphibians/most other reptiles, 3-chambered).',
          },
          {
            q: '[NEET High-Difficulty] Arrange in correct conduction order and name the structure that introduces a delay: Purkinje fibres, SA node, bundle of His, AV node.',
            a: 'SA node → AV node → bundle of His → Purkinje fibres; the <b>AV node</b> delays the impulse.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The natural pacemaker of the human heart is the:',
        opts: [
          {
            label: 'AV node',
            nudge: '<b>(a)</b> AV node is the relay/delay station, the “backup” pacemaker: a common second-guess.',
          },
          { label: 'SA node', nudge: null },
          {
            label: 'Bundle of His',
            nudge: '<b>(c)</b>/<b>(d)</b> are downstream conductors, not initiators.',
          },
          {
            label: 'Purkinje fibres',
            nudge: '<b>(c)</b>/<b>(d)</b> are downstream conductors, not initiators.',
          },
        ],
        correct: 1,
        solution: 'SA node. It fires first; the resting rate is 70–75/min.',
      },
      {
        t: 'mcq',
        q: 'Which vessel carries oxygenated blood into the heart?',
        opts: [
          {
            label: 'Pulmonary artery',
            nudge: '<b>(a)</b> Pulmonary artery carries deoxygenated blood out: the classic reversal.',
          },
          {
            label: 'Vena cava',
            nudge: '<b>(b)</b> Vena cava brings deoxygenated blood in.',
          },
          { label: 'Pulmonary vein', nudge: null },
          {
            label: 'Aorta',
            nudge: '<b>(d)</b> Aorta carries oxygenated blood out, not in: direction trap.',
          },
        ],
        correct: 2,
        solution: 'Pulmonary vein.',
      },
      {
        t: 'mcq',
        q: 'Lymph differs from blood in that it:',
        opts: [
          {
            label: 'contains more RBCs',
            nudge: '<b>(a)</b> is backwards: lymph has essentially no RBCs.',
          },
          { label: 'lacks RBCs and certain plasma proteins', nudge: null },
          {
            label: 'cannot clot',
            nudge: '<b>(c)</b> false: lymph is coagulable.',
          },
          {
            label: 'contains no cells at all',
            nudge: '<b>(d)</b> false: it is rich in lymphocytes.',
          },
        ],
        correct: 1,
        solution: '',
      },
      {
        t: 'mcq',
        q: 'An organism with a 3-chambered heart and incomplete double circulation is:',
        opts: [
          {
            label: 'a fish',
            nudge: '<b>(a)</b> Fish = 2-chambered, single circulation.',
          },
          {
            label: 'a pigeon',
            nudge: '<b>(b)</b>/<b>(d)</b> Pigeon and human = 4-chambered, complete double circulation: picked by students who forget the crocodile/bird/mammal split.',
          },
          { label: 'a frog', nudge: null },
          {
            label: 'a human',
            nudge: '<b>(b)</b>/<b>(d)</b> Pigeon and human = 4-chambered, complete double circulation: picked by students who forget the crocodile/bird/mammal split.',
          },
        ],
        correct: 2,
        solution: 'Frog (amphibian).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pulmonary artery/vein reversal.</b> A common error in this topic. Lock it: pulmonary <b>a</b>rtery = <b>a</b>way to lungs = deoxygenated.',
          '<b>“Veins have no valves.”</b> Wrong: many veins have valves (to fight gravity), while arteries have none along their length (the venae cavae and venules are the exceptions). Don’t swap.',
          '<b>Confusing AV node with SA node.</b> SA starts the beat; AV delays and relays it. Order of naming = order of action.',
          '<b>Calling the heart 3-chambered for “reptiles” without exception.</b> The <b>crocodile</b> is the reptilian exception: 4 chambers.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any “trace the blood” question, chant the loop in beats of four: RA–RV–lungs–LA (pulmonary), then LV–body–RA (systemic). For the conduction system, the chain <b>S → A → His → Purkinje</b> (SA, AV, His, Purkinje) is also the functional order, so you never have to memorise the matches separately.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Heart = 4 chambers', note: 'RA & RV (deoxy, right = “to lungs”), LA & LV (oxy, left = “to body”).' },
          {
            f: '4 valves',
            note: 'tricuspid (RA→RV), bicuspid/mitral (LA→LV), pulmonary & aortic (semilunar). Chordae tendineae anchor AV cusps.',
          },
          {
            f: 'Conduction',
            note: 'SA node → AV node → Bundle of His → Purkinje. SA = pacemaker (resting heart 70–75/min); AV = delay. Heart is <b>myogenic</b>.',
          },
          {
            f: 'Vessels',
            note: 'artery = away, elastic, no valves along its length (deoxy only in pulmonary artery, in the adult); vein = toward heart, many have valves (oxy only in pulmonary veins); capillary = exchange site.',
          },
          {
            f: 'Double circulation',
            note: 'Pulmonary (RV→lungs→LA) + Systemic (LV→body→RA); + coronary loop. Aorta = largest artery.',
          },
          {
            f: 'Comparative',
            note: 'fish 2-ch (single); amphibian/most reptiles 3-ch (incomplete double); croc/bird/mammal 4-ch (complete double); arthropods = open circulation.',
          },
          {
            f: 'Lymph',
            note: 'interstitial fluid in lymph capillaries → vessels → nodes → subclavian vein; rich in lymphocytes; returns tissue fluid + absorbs fats.',
          },
          {
            f: 'Mnemonics',
            note: '“pulmonary <b>A</b>rtery = <b>A</b>way to lungs = deoxy”; conduction = S–A–His–Purkinje.',
          },
        ],
        aids: [],
      },
    ],
  },
];
