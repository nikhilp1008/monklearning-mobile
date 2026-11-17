import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 7 (Structural Organisation in Animals), Additional topics C to J,
 * word for word from the Class 11 Biology Master Reference: C "Earthworm Nephridia: The
 * Segmental Method" (opens at the foot of p. 445 after Addendum B's practice answers,
 * through the top of p. 447), D "Cockroach Tracheal System and Malpighian Tubule
 * Physiology" (pp. 447–449), E "Frog: Arterial System, Metamorphosis Stages, and Renal
 * Portal System" (pp. 450–452), F "Tissue Types: The Subtype Location Matrix" (pp. 453–456),
 * G "Frog Brain: Functional Regions and Comparative Neurology" (pp. 456–458), H "Integrated
 * Practice: Mixed NEET and Board Questions" (pp. 458–461), I the book's "Summary Checklist"
 * (p. 461) and J "What NEET Actually Asks" (the book’s "Addendum P", pp. 461–469). Page 470
 * is the next chapter. These pages print no drawing: every table is a table block.
 *
 * Each worked example’s heading ("Example C.1 [NEET Level] Nephridia Identification")
 * becomes the example’s tag (the bracket) and a bold lead on its question; its
 * "Question:", "Reasoning." and "Answer:" labels are dropped, the reasoning being the
 * step. Each addendum prints its answers in one block after its practice questions; each
 * is set here as that question’s answer. A cell the book leaves blank because the row
 * above it names the group (F’s tables) repeats the group’s name. Scientific names are
 * italic; common and group names are upright. The book’s em dashes are written as colons,
 * commas, semicolons or brackets.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic C · pp. 445–447 ─────────────────────────
  {
    n: 'C',
    title: 'Earthworm Nephridia: The Segmental Method',
    extra: true,
    kalam: 'NEET asks both the segment numbers and where each type opens, so this section puts them in one table and gives a method for keeping them straight.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter lists the three nephridia types, with the segments and outlet of the septal and integumentary types, but it never says where the pharyngeal nephridia open. NEET asks both the segment numbers and where each type opens, so this section puts all three in one table and gives a method for keeping them straight.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>The segment-number rule for earthworm nephridia:</b>' },
      {
        t: 'table',
        title: null,
        head: ['Nephridia type', 'Location', 'Opening', 'Segments'],
        rows: [
          ['<b>Pharyngeal nephridia</b>', 'Paired tufts of nephridia', 'Open into the pharynx (enteronephric)', 'Segments <b>4, 5, 6</b>'],
          [
            '<b>Integumentary nephridia</b>',
            'Line the inner surface of the body wall',
            'Open directly onto the skin surface (exonephric)',
            'Segments <b>3 to the last segment</b>',
          ],
          [
            '<b>Septal nephridia</b>',
            'Attached to both sides of each septal partition (from segment 15 onward)',
            'Open into the intestine (enteronephric)',
            'Segments <b>15 to the last segment</b>',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Keeping the segment numbers straight:</b> integumentary 3 → last; pharyngeal 4–6; septal 15 → last. Segment 1 is the peristomium (the segment bearing the mouth), and the prostomium is only a lobe in front of it, so integumentary nephridia begin at segment 3, two segments behind the mouth segment. Septal nephridia begin at segment 15, so they are absent from the testis segments (10 and 11).',
      },
      {
        t: 'p',
        html: '<b>Where each type opens:</b> Integumentary nephridia open on the body surface (exonephric). Septal and pharyngeal nephridia open into the gut (enteronephric): the septal ones into the intestine and the pharyngeal ones into the pharynx. Nephridia that discharge into the gut allow water to be reabsorbed as the waste passes along the digestive tract.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Nephridia Identification.</b> Nephridia that open into the intestine of an earthworm are: (a) integumentary, (b) pharyngeal, (c) septal, (d) all three.',
        steps: [
          '<b>Reasoning.</b> Septal nephridia discharge into the intestine. Integumentary nephridia open to the skin surface. Pharyngeal nephridia open into the pharynx, not the intestine.',
        ],
        ans: '(c) Septal nephridia.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '<b>Segment Numbers.</b> Integumentary nephridia of <i>Pheretima</i> start from segment: (a) 1 (b) 3 (c) 10 (d) 15.',
        steps: [
          '<b>Speed reasoning.</b> Pharyngeal nephridia = segments 4–6. Septal nephridia start at segment 15. Integumentary nephridia start at segment 3 (they are absent from segments 1 and 2). Do not confuse with septal (15) or pharyngeal (4).',
        ],
        ans: '(b) 3.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Nephridia Types and Outlets.</b> Name the three types of nephridia in an earthworm and state where each opens.',
        steps: [
          '<b>Reasoning.</b> Classify each type by position and outlet. Integumentary nephridia (segment 3 to the last) line the body wall and open on the skin. Septal nephridia (segment 15 to the last) lie on the septa and open into the intestine. Pharyngeal nephridia (tufts in segments 4, 5 and 6) open into the pharynx.',
        ],
        ans: 'Integumentary nephridia open on the body surface (exonephric); septal nephridia open into the intestine (enteronephric); pharyngeal nephridia open into the pharynx (enteronephric).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] In which segments are pharyngeal nephridia found in <i>Pheretima</i>?',
            a: 'Segments 4, 5, and 6.',
          },
          {
            q: '[CBSE] Which nephridia of the earthworm open into the intestine? What term is used for nephridia that open into the gut?',
            a: 'Septal nephridia open into the intestine. Nephridia that open into the gut (septal and pharyngeal) are called enteronephric; integumentary nephridia, which open on the body surface, are exonephric.',
          },
          {
            q: '[NEET] Septal nephridia begin from segment: (a) 3 (b) 10 (c) 14 (d) 15.',
            a: '(d) 15. Septal nephridia occur on the septa from segment 15 to the last segment.',
          },
          {
            q: '[CUET] How do integumentary nephridia differ from septal nephridia in their site of opening?',
            a: 'Integumentary nephridia open directly onto the body surface (skin). Septal nephridia open into the intestine. This is the key anatomical difference.',
          },
          {
            q: '[NEET] Which nephridia are present in the segments bearing the testes (segments 10 and 11)? (a) integumentary only (b) septal only (c) pharyngeal only (d) septal and pharyngeal.',
            a: '(a) Integumentary only. Testes are in segments 10 and 11. Integumentary nephridia run from segment 3 to the last segment, so they are present there. Septal nephridia begin at segment 15 and pharyngeal nephridia are confined to segments 4–6, so neither is present in segments 10 and 11.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 447–449 ─────────────────────────
  {
    n: 'D',
    title: 'Cockroach Tracheal System and Malpighian Tubule Physiology',
    extra: true,
    kalam: 'The chapter states that the cockroach has a tracheal system with 10 pairs of spiracles and Malpighian tubules at the midgut-hindgut junction.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the tracheal path (10 pairs of spiracles, tracheae, tracheoles, air straight to the tissues) and says the Malpighian tubules take waste from the haemolymph and pass uric acid into the gut. It does not describe how the system is ventilated, that the tracheole ends are fluid-filled, or the three steps of tubule excretion, including water reabsorption in the hindgut. Both mechanisms are tested at NEET level.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Tracheal system: how air reaches the tissues',
        steps: [
          '<b>Spiracles</b> (10 pairs): 2 pairs on the thorax (one pair between the prothorax and mesothorax, one between the mesothorax and metathorax) and 8 pairs on abdominal segments 1–8. Each spiracle is guarded by a sphincter muscle that can close it.',
          '<b>Tracheae</b>: Large tubes leading inward from each spiracle, branching repeatedly.',
          '<b>Tracheoles</b>: Microscopic, fluid-filled endings that supply individual cells. Oxygen diffuses directly from the tracheole into the tissue; CO<sub>2</sub> diffuses out the same way.',
          '<b>Air flow mechanism</b>: Rhythmic abdominal compression and expansion help to ventilate the tracheal system, so air enters and leaves through the spiracles. It travels through the branching tubes and reaches the tissues directly; gas exchange takes place at the tracheoles by diffusion.',
        ],
      },
      { t: 'p', html: '<b>Malpighian tubule physiology: three steps to uric acid</b>' },
      {
        t: 'table',
        title: null,
        head: ['Step', 'What happens', 'Location'],
        rows: [
          [
            '<b>1. Uptake</b>',
            'Malpighian tubules take up nitrogenous waste and salts from the surrounding haemolymph',
            'Along the tubule wall',
          ],
          [
            '<b>2. Conversion</b>',
            'Tubule cells convert the nitrogenous waste into uric acid (non-toxic, nearly insoluble)',
            'Cells of the Malpighian tubule wall',
          ],
          [
            '<b>3. Water reabsorption</b>',
            'As the fluid passes into the hindgut, water is reabsorbed; the solid uric acid is eliminated with minimal water loss',
            'At the hindgut and rectum',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>The water-conservation result:</b> Because uric acid precipitates as a solid, the cockroach loses almost no water in excretion, ideal for a land arthropod. The earthworm, by contrast, is moist-soil dwelling and can afford to excrete ammonia or urea, which require water to dissolve.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Tracheal System Function.</b> In a cockroach, oxygen reaches the body tissues directly through: (a) haemolymph, (b) tracheae, (c) spiracles, (d) Malpighian tubules.',
        steps: [
          '<b>Reasoning.</b> The tracheal system delivers air directly from spiracles through tracheae and tracheoles to the tissues: no blood is involved. Haemolymph carries nutrients and waste, not oxygen. Spiracles are the openings, not the delivery tubes. Malpighian tubules are excretory.',
        ],
        ans: '(b) Tracheae.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Malpighian Tubule Function.</b> Describe how Malpighian tubules help a cockroach conserve water while excreting nitrogenous waste.',
        steps: [
          '<b>Reasoning.</b> The cockroach is a land insect that must conserve water. Malpighian tubules solve this by converting nitrogenous waste (ammonia would need large amounts of water to dissolve and excrete) into uric acid (which precipitates as a solid and can be eliminated with minimal water). The hindgut and rectum reabsorb any water still present in the fluid coming from the tubules.',
        ],
        ans: 'Malpighian tubules take up nitrogenous waste from the haemolymph and convert it to uric acid. Uric acid is non-toxic and nearly insoluble, so it precipitates as a solid paste. This solid waste can be excreted with almost no water loss. The hindgut and rectum further reabsorb water from the tubule fluid before the solid waste is eliminated, maximising water conservation.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '<b>Spiracle Count vs Heart Chambers.</b> How many pairs of spiracles does <i>Periplaneta americana</i> have? (a) 8 (b) 10 (c) 13 (d) 6.',
        steps: [
          '<b>Speed reasoning.</b> The cockroach has 10 pairs (2 thoracic + 8 abdominal). Do not confuse this with the 13-chambered heart. Option (c) “13” is the heart distractor: it is a completely different structure.',
        ],
        ans: '(b) 10.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] The spiracles of a cockroach are found on: (a) the head and thorax, (b) thorax and abdomen, (c) abdomen only, (d) head only.',
            a: '(b) Thorax and abdomen. Specifically, 2 thoracic + 8 abdominal.',
          },
          {
            q: '[CUET] Name the excretory organ of a cockroach and state its nitrogenous waste product.',
            a: 'Malpighian tubules; nitrogenous waste = uric acid (cockroach is uricotelic).',
          },
          {
            q: '[NEET] Which of these is NOT a function of Malpighian tubules? (a) Uptake of nitrogenous waste from haemolymph, (b) Conversion of nitrogenous waste to uric acid, (c) Oxygen transport, (d) Water reabsorption.',
            a: '(c) Oxygen transport. Malpighian tubules are excretory, not involved in oxygen transport. Oxygen is delivered by the tracheal system.',
          },
          {
            q: '[CBSE] How does the tracheal system of an insect differ from the respiratory system of a human?',
            a: 'Insect tracheal system delivers air directly to tissues through a branching network of tubes (tracheae and tracheoles), independent of blood. Human respiratory system involves lungs where gas exchange occurs across a moist membrane, and oxygen is carried to tissues by haemoglobin in red blood cells.',
          },
          {
            q: '[NEET] The number of spiracles in the cockroach is 10 pairs. How many are thoracic and how many abdominal?',
            a: '2 pairs are thoracic, 8 pairs are abdominal.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 450–452 ─────────────────────────
  {
    n: 'E',
    title: 'Frog: Arterial System, Metamorphosis Stages, and Renal Portal System',
    extra: true,
    kalam: 'The frog’s truncus arteriosus divides into three pairs of arteries as it leaves the single ventricle.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the frog’s three-chambered heart with its sinus venosus and truncus arteriosus, the mesonephric kidney and the life cycle (Figure 7.4). It names the hepatic and renal portal systems but does not detail the arteries leaving the truncus arteriosus, the order in which the limbs appear, or what the renal portal system does. These are NEET favourites.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>The arterial arcades: three pairs of arteries leaving the truncus arteriosus</b>' },
      {
        t: 'p',
        html: 'The frog’s truncus arteriosus divides into three pairs of arteries as it leaves the single ventricle:',
      },
      {
        t: 'table',
        title: null,
        head: ['Artery pair', 'Destination', 'Function'],
        rows: [
          ['<b>Carotid arteries</b>', 'Head and brain', 'Supply oxygenated blood to the head'],
          [
            '<b>Systemic arteries</b>',
            'Body organs, limbs, kidneys, liver',
            'Distribute blood to the body; carry mixed blood',
          ],
          [
            '<b>Pulmocutaneous arteries</b>',
            'Lungs and skin',
            'Send deoxygenated blood to the lungs and skin for oxygenation',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>The renal portal system:</b> Blood from the hindlimbs and posterior body does not go directly to the heart. Instead, it passes through the renal portal vein into the kidneys before returning to the heart. The frog also has a hepatic portal system. A renal portal system is not unique to amphibians; it also occurs in fishes, reptiles and birds.',
      },
      { t: 'p', html: '<b>Frog metamorphosis: stages in outline</b>' },
      {
        t: 'p',
        html: 'In the frog the tadpole changes into the adult by metamorphosis (the hormone thyroxine controls this; the NCERT chapter itself does not describe the stages). The stages below set the sequence out in order:',
      },
      {
        t: 'table',
        title: null,
        head: ['Stage', 'Key features'],
        rows: [
          ['<b>1. Egg</b>', 'Fertilised egg hatches into a free-swimming larva'],
          [
            '<b>2. Early tadpole</b>',
            'External gills appear first, then internal gills develop; mouth is a simple, undifferentiated opening; herbivorous (feeding on algae and plant matter)',
          ],
          [
            '<b>3. Tadpole with hindlimbs</b>',
            'Hindlimbs appear first as small buds; tail still prominent; gills functional; ammonotelic (excretes ammonia)',
          ],
          [
            '<b>4. Tadpole with forelimbs</b>',
            'Forelimbs develop (after the hindlimbs); tail begins to shorten; gills gradually replaced by lungs; skin respiration increases',
          ],
          [
            '<b>5. Froglet (tail almost gone)</b>',
            'Tail reduced to a stump; both lungs functional; carnivorous diet begins; shift from ammonotelism to ureotelism begins',
          ],
          [
            '<b>6. Adult frog</b>',
            'Tail completely absorbed; ureotelic (excretes urea); carnivorous; lungs, skin and buccal cavity breathe in air; the skin is the main surface in water',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Which limbs appear first:</b> This sequence (hindlimbs first, then forelimbs) is the regular pattern in anuran (frog and toad) metamorphosis. It is tested as a “which appears first?” fact.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Arterial System.</b> Which pair of arteries from the truncus arteriosus carries deoxygenated blood to the lungs in a frog? (a) Carotid, (b) Systemic, (c) Pulmocutaneous, (d) Hepatic.',
        steps: [
          '<b>Reasoning.</b> The carotid arteries supply the head (oxygen demand). Systemic arteries supply body organs with mixed blood. The pulmocutaneous arteries are the only ones dedicated to sending deoxygenated blood to the lungs (and skin) for oxygenation.',
        ],
        ans: '(c) Pulmocutaneous arteries.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '<b>Metamorphosis Sequence.</b> In the development of a frog, the forelimbs appear: (a) before the hindlimbs, (b) after the hindlimbs, (c) simultaneously with the hindlimbs, (d) only in the adult.',
        steps: [
          '<b>Speed reasoning.</b> In frog metamorphosis the hindlimbs appear first, then the forelimbs. Option (a) is the common wrong guess.',
        ],
        ans: '(b) After the hindlimbs.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Excretory Shift During Metamorphosis.</b> Describe the change in nitrogenous excretion during the transformation of a frog tadpole into an adult frog.',
        steps: [
          '<b>Reasoning.</b> The tadpole lives in water, where ammonia (highly toxic but requiring large water volumes to excrete) can be washed away efficiently. The adult frog lives on land, where water conservation is critical, so it switches to urea (less toxic, requires less water) as the primary nitrogenous waste.',
        ],
        ans: 'The tadpole is ammonotelic: it excretes ammonia directly into the water, which requires large volumes of water for dilution. During metamorphosis, as the tadpole develops lungs and transitions to a terrestrial habitat, the excretory pattern shifts to ureotelism. The adult frog excretes urea, which is less toxic than ammonia and requires significantly less water to eliminate, allowing water conservation on land.',
      },
      {
        t: 'ex',
        tag: 'CUET/NCERT Line-Statement',
        q: '<b>Renal Portal System.</b> In a frog, blood from the hindlimbs passes through the kidneys: (a) directly, (b) via a renal portal vein, (c) via the hepatic portal vein, (d) after oxygenation in the lungs.',
        steps: [
          '<b>Reasoning.</b> The frog has a renal portal system: blood from the posterior body and hindlimbs enters the kidney through the renal portal vein before reaching the general venous circulation. As a result, blood from the lower body passes through the kidney before it returns to the heart. A renal portal system also occurs in fishes, reptiles and birds; mammals do not have one.',
        ],
        ans: '(b) Via a renal portal vein.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Which arteries from the truncus arteriosus carry blood to the lungs and skin of a frog?',
            a: 'Pulmocutaneous arteries (one pair).',
          },
          {
            q: '[CBSE] Name the three pairs of arteries arising from the truncus arteriosus in a frog.',
            a: 'Carotid arteries (head/brain), Systemic arteries (body organs), Pulmocutaneous arteries (lungs and skin).',
          },
          {
            q: '[NEET] The excretory product of an adult frog is: (a) ammonia, (b) uric acid, (c) urea, (d) creatinine.',
            a: '(c) Urea. The adult frog is ureotelic.',
          },
          {
            q: '[NEET] Arrange the following stages of frog metamorphosis in correct order: (i) appearance of forelimbs, (ii) appearance of hindlimbs, (iii) disappearance of tail, (iv) development of gills.',
            a: 'Correct order: (iv) development of gills → (ii) appearance of hindlimbs → (i) appearance of forelimbs → (iii) disappearance of tail. This is the usual sequence in frog metamorphosis.',
          },
          {
            q: '[CUET] What is the function of the renal portal system in a frog?',
            a: 'The renal portal system receives blood from the hindlimbs and posterior body and directs it through the kidneys (by way of the renal portal vein) before it returns to the heart, so blood from the lower body passes through the kidney on its way back.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 453–456 ─────────────────────────
  {
    n: 'F',
    title: 'Tissue Types: The Subtype Location Matrix',
    extra: true,
    kalam: 'NEET asks exactly this: “simple squamous epithelium is found in:” followed by four location options.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter lists the epithelial subtypes (squamous, cuboidal, columnar, ciliated, compound) and the connective subtypes (loose, dense, specialised) with one or two example locations each, but it has no table that sets every subtype beside all its locations and its function. NEET asks exactly this: “simple squamous epithelium is found in:” followed by four location options. Here is that matrix.',
      },

      { t: 'part', title: 'F1. Epithelial Tissue: Subtype Locations and Functions' },
      {
        t: 'table',
        title: null,
        head: ['Epithelial type', 'Specific subtype', 'Location in body', 'Primary function'],
        rows: [
          [
            '<b>Simple epithelium</b>',
            'Simple squamous',
            'Alveoli of lungs; walls of blood vessels (endothelium); the glomerular (Bowman’s) capsule and the endothelium of the glomerular capillaries; mesothelium (lining of body cavities)',
            'Diffusion, filtration, friction reduction',
          ],
          [
            '<b>Simple epithelium</b>',
            'Simple cuboidal',
            'Kidney tubules; thyroid follicles; ducts of glands; surface of ovary',
            'Secretion, absorption',
          ],
          [
            '<b>Simple epithelium</b>',
            'Simple columnar',
            'Inner lining of stomach, intestine, and colon; gallbladder',
            'Secretion, absorption; may bear microvilli',
          ],
          [
            '<b>Simple epithelium</b>',
            'Ciliated columnar/cuboidal',
            'Bronchioles (respiratory tract); fallopian tubes; efferent ducts of testis',
            'Move mucus and fluids in one direction',
          ],
          [
            '<b>Compound (stratified) epithelium</b>',
            'Stratified squamous (keratinised)',
            'Skin epidermis (surface layer)',
            'Protection against abrasion and water loss',
          ],
          [
            '<b>Compound (stratified) epithelium</b>',
            'Stratified squamous (non-keratinised)',
            'Lining of mouth, oesophagus, vagina, cornea',
            'Protection against abrasion (keeps surfaces moist)',
          ],
          [
            '<b>Compound (stratified) epithelium</b>',
            'Stratified cuboidal',
            'Large ducts of sweat glands, mammary glands',
            'Protection and secretion',
          ],
          [
            '<b>Compound (stratified) epithelium</b>',
            'Stratified columnar',
            'Conjunctiva of eye; portions of urethra',
            'Protection and secretion',
          ],
          [
            '<b>Glandular epithelium</b>',
            'Exocrine',
            'Salivary glands, sweat glands, gastric glands, liver, pancreas',
            'Secrete into ducts',
          ],
          [
            '<b>Glandular epithelium</b>',
            'Endocrine',
            'Thyroid, adrenal, pituitary glands',
            'Secrete hormones directly into blood (ductless)',
          ],
        ],
      },

      { t: 'part', title: 'F2. Connective Tissue: Subtype Locations' },
      {
        t: 'table',
        title: null,
        head: ['Connective type', 'Subtype', 'Location/example', 'Key feature'],
        rows: [
          [
            '<b>Loose connective</b>',
            'Areolar',
            'Beneath skin, between muscles, around blood vessels and nerves',
            'Fibroblasts, macrophages, mast cells; semi-fluid matrix; most widely distributed',
          ],
          [
            '<b>Loose connective</b>',
            'Adipose',
            'Subcutaneous layer, around organs (kidneys, heart), bone marrow',
            'Fat-storing cells; provides insulation and cushioning',
          ],
          [
            '<b>Dense connective</b>',
            'Dense regular',
            'Tendons (muscle-to-bone), ligaments (bone-to-bone)',
            'Parallel collagen bundles; high tensile strength in one direction',
          ],
          [
            '<b>Dense connective</b>',
            'Dense irregular',
            'Dermis of skin, sclera of eye, periosteum of bone',
            'Collagen fibres in many directions; resists stress from multiple directions',
          ],
          [
            '<b>Specialised connective</b>',
            'Cartilage',
            'Ear pinna, nose tip, larynx, tracheal rings, ends of long bones',
            'Chondrocytes in solid, pliable matrix; avascular (nourishment by diffusion)',
          ],
          [
            '<b>Specialised connective</b>',
            'Bone',
            'Skeleton',
            'Osteocytes in hard calcified matrix; vascular; provides framework and protection',
          ],
          [
            '<b>Specialised connective</b>',
            'Blood',
            'Circulatory system',
            'Fluid matrix (plasma); RBCs, WBCs, platelets; transport and defence',
          ],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Tissue Location.</b> Simple squamous epithelium is NOT found in: (a) glomerulus of kidney, (b) alveoli of lungs, (c) inner lining of intestine, (d) walls of blood vessels.',
        steps: [
          '<b>Reasoning.</b> The inner lining of the intestine is simple columnar epithelium (with microvilli for absorption). Simple squamous epithelium lines the alveoli, blood vessels, and glomerulus: surfaces where diffusion and filtration occur. Option (c) is the clearly wrong match.',
        ],
        ans: '(c) Inner lining of intestine.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Tendon vs Ligament.</b> A tendon and a ligament are both types of dense regular connective tissue. How do they differ in (i) attachment, (ii) function?',
        steps: [
          '<b>Reasoning.</b> Both have parallel collagen bundles. Tendons connect muscle to bone; ligaments connect bone to bone. Both resist pulling forces.',
        ],
        ans: '(i) Tendon attaches muscle to bone; ligament attaches bone to bone. (ii) Tendon transmits the pulling force of muscle contraction to the bone; ligament holds bones together at a joint and resists excessive movement.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Ciliated epithelium is found in: (a) inner lining of intestine, (b) bronchioles and fallopian tubes, (c) kidney tubules, (d) skin epidermis.',
            a: '(b) Bronchioles and fallopian tubes. (Intestine = simple columnar with microvilli; kidney tubules = simple cuboidal; skin = stratified squamous keratinised.)',
          },
          {
            q: '[CBSE] Name the tissue that connects (i) muscle to bone, and (ii) bone to bone.',
            a: '(i) Tendon (dense regular connective tissue); (ii) Ligament (dense regular connective tissue).',
          },
          {
            q: '[NEET] The matrix of cartilage is solid and pliable. This is because it contains: (a) calcium salts, (b) chondroitin sulphate, (c) collagen fibres, (d) elastin fibres.',
            a: '(b) Chondroitin sulphate. Chondroitin (a glycosaminoglycan) gives cartilage its solid, pliable character. Calcium salts make bone hard. Collagen and elastin fibres provide tensile strength but the pliability comes from chondroitin.',
          },
          {
            q: '[CUET] Which type of epithelium forms the outermost layer of the skin?',
            a: 'Stratified squamous epithelium (keratinised).',
          },
          {
            q: '[NEET] Areolar connective tissue is characterised by the presence of: (a) only fibroblasts, (b) fibroblasts, macrophages, and mast cells, (c) only fat cells, (d) only collagen fibres.',
            a: '(b) Fibroblasts, macrophages, and mast cells. Areolar tissue is loose connective tissue with all three cell types suspended in a semi-fluid ground substance containing collagen and elastin fibres.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic G · pp. 456–458 ─────────────────────────
  {
    n: 'G',
    title: 'Frog Brain: Functional Regions and Comparative Neurology',
    extra: true,
    kalam: 'The chapter names the parts of the frog brain and says what the olfactory lobes, optic lobes, cerebellum and medulla do, and Additional topic B compares the three nervous systems. This section adds the diencephalon (epithalamus, thalamus, hypothalamus), puts each region’s function in one table, and compares the three nervous systems on brain, cord, senses and decentralisation. NEET asks these functional assignments.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter names the parts of the frog brain and says what the olfactory lobes, optic lobes, cerebellum and medulla do, and Additional topic B compares the three nervous systems. This section adds the diencephalon (epithalamus, thalamus, hypothalamus), puts each region’s function in one table, and compares the three nervous systems on brain, cord, senses and decentralisation. NEET asks these functional assignments.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>The frog brain: functional assignment</b>' },
      {
        t: 'table',
        title: null,
        head: ['Brain region', 'Sub-parts', 'Function'],
        rows: [
          [
            '<b>Forebrain</b>',
            'Olfactory lobes (anterior), cerebral hemispheres (paired), diencephalon (contains epithalamus, thalamus, hypothalamus)',
            'Olfaction (smell), higher functions (learning in limited form), regulation of body temperature, hunger, thirst (hypothalamus)',
          ],
          [
            '<b>Midbrain</b>',
            'Optic tectum (paired optic lobes)',
            'Vision: processes visual information from the eyes; the main visual centre',
          ],
          [
            '<b>Hindbrain</b>',
            'Cerebellum (small) + medulla oblongata',
            'Balance and coordination (cerebellum); vital reflexes: respiration, heart rate, swallowing (medulla); continues as spinal cord through foramen magnum',
          ],
        ],
      },
      { t: 'p', html: '<b>Comparative nervous system: earthworm, cockroach, frog</b>' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Earthworm', 'Cockroach', 'Frog'],
        rows: [
          [
            '<b>Brain location</b>',
            'Dorsal cerebral ganglia (above pharynx)',
            'Supra-oesophageal ganglion (fused head ganglia)',
            'Dorsal, inside the cranial cavity',
          ],
          [
            '<b>Nerve cord</b>',
            'Double, ventral, ganglionated',
            'Double, ventral, ganglionated (3 thoracic + 6 abdominal)',
            'Single dorsal tube (spinal cord)',
          ],
          [
            '<b>Brain complexity</b>',
            'Simple: sensory relay and local control',
            'Moderately complex: compound eyes, antennae add sensory input',
            'Well-developed: complex vision, hearing, balance',
          ],
          [
            '<b>Prominent senses</b>',
            'Chemical sense (taste/smell in skin)',
            'Compound eyes (mosaic vision), antennae (smell)',
            'Vision and hearing (optic lobes; tympanum for sound)',
          ],
          [
            '<b>Decentralisation</b>',
            'Partial: each segment has a ganglion with local control',
            'High: can survive without the head for up to about a week',
            'Low: centralised; the brain is central and the spinal cord handles reflexes below the head',
          ],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Brain Function.</b> In a frog, the optic lobes are located in the: (a) forebrain, (b) midbrain, (c) hindbrain, (d) medulla.',
        steps: [
          '<b>Reasoning.</b> The optic lobes (part of the midbrain/tectum) process visual information. The optic lobes are part of the midbrain.',
        ],
        ans: '(b) Midbrain.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Nervous System Comparison.</b> How does the nervous system of a cockroach show decentralisation?',
        steps: [
          '<b>Reasoning.</b> The cockroach has a double ventral nerve cord with segmental ganglia (3 thoracic + 6 abdominal). These ganglia can control local functions (leg movement, spiracle opening) independently. The fused head ganglia form the “brain,” but if the head is removed, the body can still move and respond to stimuli for some time because the thoracic ganglia take over locomotion.',
        ],
        ans: 'The cockroach has a ventral nerve cord with nine segmental ganglia: three in the thorax and six in the abdomen. Each ganglion controls the functions of its own segment independently, so the cockroach can survive for up to about a week and continue basic movements even after decapitation because the thoracic ganglia continue to coordinate leg movements and other functions.',
      },
      {
        t: 'ex',
        tag: 'CUET/NCERT Line-Statement',
        q: '<b>Brain Parts and Functions.</b> Read the statements about the frog brain: (i) It controls vision. (ii) It controls balance and coordination. (iii) It continues as the spinal cord. Which brain region corresponds to each statement?',
        steps: [
          '<b>Reasoning.</b> (i) Vision = optic lobes = midbrain. (ii) Balance and coordination = cerebellum = hindbrain. (iii) Continues as spinal cord = medulla oblongata = hindbrain.',
        ],
        ans: '(i) Midbrain (optic lobes/tectum); (ii) Hindbrain (cerebellum); (iii) Hindbrain (medulla oblongata continues as the spinal cord through the foramen magnum).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Which of the following is part of the frog’s forebrain? (a) Optic lobes, (b) Cerebellum, (c) Olfactory lobes, (d) Medulla oblongata.',
            a: '(c) Olfactory lobes. They belong to the forebrain, together with the cerebral hemispheres and the diencephalon. The optic lobes are in the midbrain; the cerebellum and medulla oblongata are in the hindbrain.',
          },
          {
            q: '[CBSE] Name the brain region of a frog that continues as the spinal cord.',
            a: 'Medulla oblongata (part of the hindbrain) continues as the spinal cord through the foramen magnum.',
          },
          {
            q: '[NEET] The number of pairs of cranial nerves in a frog is: (a) 8, (b) 10, (c) 12, (d) 20.',
            a: '(b) 10 pairs. Frogs have 10 pairs of cranial nerves, as other amphibians and fishes do; reptiles, birds and mammals have 12.',
          },
          {
            q: '[CUET] In which brain region of a frog is the hypothalamus located, and what is one function?',
            a: 'Hypothalamus is in the forebrain (diencephalon). Functions include regulation of body temperature, hunger and thirst.',
          },
          {
            q: '[NEET] The number of cerebral hemispheres in a frog is: (a) one, (b) two, (c) three, (d) four.',
            a: '(b) Two. The frog forebrain has a pair of cerebral hemispheres.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic H · pp. 458–461 ─────────────────────────
  {
    n: 'H',
    title: 'Integrated Practice: Mixed NEET and Board Questions',
    extra: true,
    kalam: 'This section mixes question types across the Additional topics and the chapter’s earlier topics.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      { t: 'p', html: 'This section mixes question types across the Additional topics and the chapter’s earlier topics.' },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET: Germ Layer + Tissue Type] Which of the following tissues is derived from the mesoderm and helps in body movement? (a) Skeletal muscle, (b) Ciliated epithelium of the trachea, (c) Tendon, (d) both (a) and (c).',
            a: '(d) both (a) and (c). Skeletal muscle (mesodermal, contracts to move the body) and tendon (dense regular connective tissue, mesodermal, transmits the muscle’s pull to bone) both help in movement. The ciliated epithelium of the trachea is endodermal and moves mucus, not the body.',
          },
          {
            q: '[CBSE Board: Comparative Anatomy] Give two differences between the respiratory systems of an earthworm and a cockroach.',
            a: '(i) Earthworm has no specialised respiratory organ: gas exchange occurs through the moist skin (cutaneous respiration). Cockroach has a tracheal system with 10 pairs of spiracles that delivers air directly to tissues through branching tracheae and tracheoles. (ii) Earthworm requires a moist environment for skin respiration. Cockroach can breathe dry air because its tracheal system does not depend on surface moisture.',
          },
          {
            q: '[NEET Speed Trap: Nephridia Segments] A student states that all nephridia in <i>Pheretima</i> open into the gut. This is: (a) always true, (b) true only for septal nephridia, (c) true only for integumentary nephridia, (d) false, because integumentary nephridia open on the body surface.',
            a: '(d) false. Integumentary nephridia open on the body surface (exonephric), whereas septal nephridia (into the intestine) and pharyngeal nephridia (into the pharynx) open into the gut (enteronephric). So the statement is not true of all nephridia.',
          },
          {
            q: '[CUET: Frog Metamorphosis] Arrange the following events of frog metamorphosis in the correct sequence: (a) appearance of forelimbs, (b) appearance of hindlimbs, (c) disappearance of the tail, (d) hatching of the tadpole from the egg.',
            a: 'Correct sequence: (d) hatching of the tadpole → (b) appearance of hindlimbs → (a) appearance of forelimbs → (c) disappearance of the tail. This reflects the gradual shift from the aquatic tadpole to the land-living adult.',
          },
          {
            q: '[NEET: Cockroach Tracheal System] The tracheal system of a cockroach is different from the human respiratory system because in the cockroach: (a) spiracles are absent, (b) oxygen is delivered directly to tissues without entering the blood, (c) carbon dioxide is carried by haemoglobin, (d) gas exchange occurs in the spiracles themselves.',
            a: '(b) Oxygen is delivered directly to tissues without entering the blood. This is the defining feature of the tracheal system: air tubes reach the tissues directly. The cockroach has spiracles (10 pairs). Its haemolymph has no respiratory pigment and does not carry oxygen to the tissues. Gas exchange occurs at the tracheole-tissue interface, not in spiracles.',
          },
          {
            q: '[CBSE Board: Earthworm Nephridia] Explain why septal nephridia of an earthworm are considered more water-conserving than integumentary nephridia.',
            a: 'Septal nephridia open into the intestine (enteronephric), so the nitrogenous waste is discharged into the gut, where water can be reabsorbed as the waste passes toward the anus. Integumentary nephridia open directly onto the body surface and release dilute urine to the outside, so the water it contains is lost.',
          },
          {
            q: '[NEET: Germ Layer Origin of Endocrine Glands] The pituitary gland and pineal gland are both endocrine glands. Which germ layer are they derived from? (a) Both ectoderm, (b) Both endoderm, (c) Pituitary = ectoderm, pineal = endoderm, (d) Pituitary = endoderm, pineal = mesoderm.',
            a: '(a) Both pituitary and pineal glands are ectodermal derivatives. The pituitary gland develops from Rathke’s pouch (oral ectoderm) and the pineal gland develops from the diencephalon roof (neuroectoderm). Neither is endodermal.',
          },
          {
            q: '[NEET Assertion–Reason: Frog Respiration] <b>Assertion (A):</b> A frog can survive underwater for extended periods by cutaneous respiration. <b>Reason (R):</b> The frog’s skin is thin, moist, and richly supplied with blood capillaries, allowing dissolved oxygen from water to diffuse directly into the blood.<br>Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '(a) Both A and R are true, and R correctly explains A. The moist, thin skin of the frog serves as a respiratory surface when submerged, with capillaries close to the surface for efficient diffusion of dissolved oxygen.',
          },
          {
            q: '[CUET: Cockroach Development] The development of a cockroach is described as paurometabolous because: (a) there is no egg stage, (b) the nymph resembles the adult and there is no pupal stage, (c) the larva is completely different from the adult, (d) metamorphosis occurs inside the egg.',
            a: '(b) The nymph resembles the adult and there is no pupal stage. Paurometabolous (incomplete) metamorphosis means the young (nymph) resembles the adult form and transitions to adulthood through a series of moults without passing through a pupal stage. Complete metamorphosis (holometabolous) involves egg → larva → pupa → adult.',
          },
          {
            q: '[CBSE Board: Tissue Identification from Function] Identify the tissue type from the description: “A tissue with cells that are spindle-shaped, uninucleate, involuntary and non-striated.” (a) Skeletal muscle, (b) Cardiac muscle, (c) Smooth muscle, (d) Tendon.',
            a: '(c) Smooth muscle. Spindle-shaped (fusiform) cells, single nucleus (uninucleate), involuntary control, and absence of striations are the defining features of smooth (unstriated) muscle found in the walls of hollow organs like the gut and blood vessels.',
          },
        ],
      },
    ],
  },

  // ───────────────────── Additional topic I (the book’s Summary Checklist) · p. 461 ─────────────────────
  {
    n: 'I',
    title: 'Summary Checklist',
    extra: true,
    blocks: [
      { t: 'part', title: 'Summary Checklist' },
      {
        t: 'p',
        html: 'Before the exam, verify you can answer yes to each of the following:<br>1. Can you name the germ layer origin of all four animal tissue types and their major subtypes (epithelium arises from all three germ layers)?<br>2. Can you fill in a blank 7-row table comparing earthworm, cockroach and frog on circulatory type, excretory organ, respiratory organ, nitrogenous waste, nervous system pattern, reproduction type, and development pattern?<br>3. Can you state the starting and ending segments for all three nephridia types and explain which opens where and why?<br>4. Can you name the three pairs of arteries from the frog’s truncus arteriosus and state which carries blood to the lungs?<br>5. Can you list the stages of frog metamorphosis in correct sequence?<br>6. Can you explain why the cockroach’s tracheal system makes haemolymph respiratory pigment unnecessary?<br>7. Can you identify any of the four animal tissue types from a three-line functional description?<br>8. Can you compare the cockroach and earthworm circulatory systems in three lines?',
      },
    ],
  },

  // ───────────────────── Additional topic J (the book’s Addendum P) · pp. 461–469 ─────────────────────
  {
    n: 'J',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'Questions from Chapter 7 in NEET papers fall into a clear pattern (the book’s estimate, not official figures).',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'Questions from Chapter 7 in NEET papers fall into a clear pattern (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'How often it is asked'],
        rows: [
          ['<b>Animal tissues</b> (epithelial, connective, muscular, neural)', '<b>High: a perennial favourite</b>'],
          ['<b>Cockroach</b> (<i>Periplaneta americana</i>)', '<b>Highest yield: asked almost every year (the book’s estimate)</b>'],
          ['<b>Earthworm</b> (<i>Pheretima posthuma</i>)', '<b>Moderate: usually one question</b>'],
          ['<b>Frog</b> (<i>Rana tigrina</i>)', '<b>Moderate: one question in most papers</b>'],
          ['Cell junctions and general organisation', '<b>Low but reliable</b>'],
        ],
      },
      {
        t: 'p',
        html: '<b>What this means for you:</b> Cockroach and animal tissues are the two heaviest sources of marks in this chapter. Earthworm and frog are tested less heavily but appear regularly: the questions are short and specific, rewarding students who have drilled the segment numbers and organ positions. The cockroach and animal-tissue ratings agree with the Exam Relevance notes in Topics 01 and 04. Topics 03 and 05 rate the earthworm and frog higher, so treat all five groups as worth revising.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: 'NEET structures Chapter 7 questions into four repeatable shapes. Each has a crack.' },

      { t: 'p', html: '<b>1. Pure-Recall Fact Questions (“Which tissue…?”, “The gizzard lies in segments…”)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A single-sentence stem asking for a number, a location, or a tissue name. No elaboration, no manipulation required: either you know it or you don’t.<br><b>The crack:</b> These test the exact numbers and facts from NCERT. Build a small flashcard deck of the key earthworm segment numbers, the cockroach spiracle/heart counts, and the tissue defining features. Speed here comes from pattern recognition, not reasoning.<br><b>Representative example:</b>',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'The supportive skeletal structures in the human external ear and nose tip are examples of:<br>(a) ligament<br>(b) areolar tissue<br>(c) bone<br>(d) cartilage',
        steps: [
          '<b>Solution:</b> The external ear and the tip of the nose are supported by cartilage, a flexible but firm tissue that gives shape without bone. Ligament joins bone to bone; areolar is loose connective beneath skin; bone is rigid. <b>(d) cartilage</b> is the correct answer. This tests the location and function of cartilage, a fact stated in NCERT’s connective tissue section.',
        ],
        ans: '',
      },

      { t: 'p', html: '<b>2. Statement-Sorting Questions (“Which of the following statements is/are correct?”)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two to four numbered statements; you must identify which combination is correct. Options follow the pattern (i) only / (i) and (ii) / all three / etc.<br><b>The crack:</b> Read every statement once and mark it true or false before looking at the options. This eliminates the common error of guessing based on partial reading. The statements are usually NCERT-fact checks: one wrong word or one wrong number makes a statement false.<br><b>Representative example:</b>',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which of the following statements is/are correct?<br>(i) Adipose tissue is a type of dense connective tissue located mainly beneath the skin.<br>(ii) Tendons and ligaments are examples of dense irregular connective tissue.<br>(iii) Cartilage, bones and blood are various types of specialised connective tissue.<br>(a) Only (i)<br>(b) Only (ii)<br>(c) Only (iii)<br>(d) Both (i) and (ii)',
        steps: [
          '<b>Solution:</b><br>• Statement (i): <b>False.</b> Adipose tissue is a loose connective tissue, not dense. NCERT classifies it under loose connective alongside areolar.<br>• Statement (ii): <b>False.</b> Tendons and ligaments are dense regular connective tissue: the fibres run in parallel rows. Dense irregular has fibres crossing in many directions (dermis).<br>• Statement (iii): <b>True.</b> NCERT explicitly lists cartilage, bone, and blood as specialised connective tissues.',
          'Only statement (iii) is correct, so the answer is <b>(c) Only (iii)</b>.',
        ],
        ans: '',
      },

      { t: 'p', html: '<b>3. Assertion–Reason Questions</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> An Assertion (A) statement and a Reason (R) statement. Four answer choices: both true and R explains A; both true but R does not explain A; A true R false; A false R true.<br><b>The crack:</b> Treat A and R as independent facts first. Only after confirming both are true, ask: does R directly cause A, or are they just two true facts about the same topic? A common trap is option (b): both true but unrelated as cause and effect.<br><b>Representative example:</b>',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Assertion (A):</b> Intercalated discs are important regions of cardiac muscle cells.<br><b>Reason (R):</b> Intercalated discs function as boosters for muscle contraction waves.',
        steps: [
          '<b>Solution:</b><br>• A is <b>true.</b> Intercalated discs are indeed structurally and functionally important in cardiac muscle.<br>• R is <b>true</b> in a sense: intercalated discs (containing gap junctions) allow the contraction signal to spread rapidly cell-to-cell, acting as functional “boosters” for coordinated contraction.<br>• R <b>directly explains</b> A: the importance of intercalated discs is that they enable coordinated contraction as a unit. Without them, the heart could not function as a synchronised pump.',
        ],
        ans: '<b>(a)</b> Both A and R are true, and R is the correct explanation of A.',
      },

      { t: 'p', html: '<b>4. “Odd One Out” / “Not a Characteristic” Questions</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Four options that look similar; one belongs to a different category. The stem phrases it as “which is wrongly matched,” “which is not a characteristic,” or “which of the following is not.”<br><b>The crack:</b> The wrong answer is often the one that belongs to the adjacent category, not a wildly different option. Blood is the classic trap (students think it is not a tissue; it is connective). Plasmodesmata is the plant-structure trap in animal-tissue questions.<br><b>Representative example:</b>',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which of the following type of cell junction is NOT found in animal tissues?<br>(a) Adhering junction<br>(b) Tight junction<br>(c) Gap junction<br>(d) Plasmodesmata',
        steps: [
          '<b>Solution:</b> Adhering junctions, tight junctions, and gap junctions are the three animal cell junctions. Plasmodesmata are narrow cytoplasmic channels that pass through the cell walls of plant cells; animal cells have no cell wall, so they do not occur in animal tissues. <b>(d) Plasmodesmata</b> is the answer. The trap is that students recognise “junction” terminology and pick one of the animal options; the key filter is kingdom: plasmodesmata is plant-specific.',
        ],
        ans: '(d)',
      },

      { t: 'part', title: 'The Traps' },
      { t: 'p', html: 'These are the specific confusions that NEET questions repeatedly exploit.' },
      { t: 'p', html: '<b>Trap 1: Blood is a connective tissue</b>' },
      {
        t: 'p',
        html: '<b>The trap:</b> Students intuitively feel blood “can’t be” connective because it is a fluid. NEET options repeatedly offer “epithelial” or “not a tissue” as distractors.<br><b>The fix:</b> Blood has cells (RBCs, WBCs, platelets) in a matrix (plasma), exactly the definition of connective tissue. NCERT classifies blood as a specialised connective tissue. Burn this in: <b>blood = connective tissue, fluid matrix.</b>',
      },
      { t: 'p', html: '<b>Trap 2: 13 and 10 (heart chambers vs. spiracle pairs in cockroach)</b>' },
      {
        t: 'p',
        html: '<b>The trap:</b> Cockroach questions often use two numbers: the heart has 13 chambers and there are 10 pairs of spiracles (2 thoracic + 8 abdominal). Each is offered as a distractor for the other.<br><b>The fix:</b> Keep them on separate flashcards. 13 = heart; 10 = spiracles. When a cockroach question mentions a number, pause and ask: is this about circulation or respiration?',
      },
      { t: 'p', html: '<b>Trap 3: Tadpole features applied to the adult frog</b>' },
      {
        t: 'p',
        html: '<b>The trap:</b> Questions test the frog’s aquatic larval stage against the terrestrial adult. Gills, ammonotelism and herbivory all belong to the tadpole. The adult is carnivorous, ureotelic, and lung-breathing.<br><b>The fix:</b> Use the “two-passport” check: ask “water life or land life?” for every frog feature. If the question mentions both, the adult answer is usually what NEET wants.',
      },
      { t: 'p', html: '<b>Trap 4: Tendon vs. ligament (which connects what)</b>' },
      {
        t: 'p',
        html: '<b>The trap:</b> Questions on dense regular connective tissue tempt students to swap tendon (muscle→bone) and ligament (bone→bone) or misclassify them as dense irregular.<br><b>The fix:</b> Tendon = “T” for Tugs muscle TO bone. Ligament = “L” for Links bone to bone. Both are dense regular.',
      },
      { t: 'p', html: '<b>Trap 5: Plasmodesmata in animal-tissue questions</b>' },
      {
        t: 'p',
        html: '<b>The trap:</b> Plasmodesmata are plant-only, yet the same trap works whenever “junction” or “channel between cells” appears.<br><b>The fix:</b> The three animal junctions are tight, adhering, and gap. Plasmodesmata + cell wall = plants.',
      },
      { t: 'p', html: '<b>Trap 6: Cockroach circulatory system (open vs. closed)</b>' },
      {
        t: 'p',
        html: '<b>The trap:</b> Students who know earthworm is closed may incorrectly label cockroach as closed. A typical false statement about the cockroach is “blood vascular system is of closed type”.<br><b>The fix:</b> Earthworm = closed (blood stays in vessels, Hb in plasma). Cockroach = open (haemolymph fills haemocoel, no respiratory pigment). Frog = closed (typical vertebrate pattern).',
      },

      { t: 'part', title: 'A Graded Practice Set' },
      { t: 'p', html: 'Questions are ordered from easy to hard.' },
      {
        t: 'practice',
        items: [
          {
            q: '[Easy] The inner lining of blood vessels is made of which type of epithelium? <b>(a) Cuboidal (b) Columnar (c) Ciliated columnar (d) Squamous</b>',
            a: '<b>(d) Squamous.</b> Simple squamous epithelium forms thin, flat cells that minimise resistance to blood flow: the textbook location is “walls of blood vessels and alveoli.” Cuboidal is found in kidney tubules; columnar in the gut lining.',
          },
          {
            q: '[Easy] Mast cells in the areolar connective tissue are primarily associated with the secretion of which compound? <b>(a) Insulin (b) Histamine (c) Collagen (d) Mucus</b>',
            a: '<b>(b) Histamine.</b> Mast cells are resident in areolar connective tissue and release histamine (and heparin) during allergic responses and inflammation. Insulin is from pancreatic beta cells; collagen is secreted by fibroblasts; mucus is from goblet cells.',
          },
          {
            q: '[Easy] The thyroid gland is classified as which type of gland? <b>(a) Exocrine (b) Endocrine (c) Autocrine (d) Paracrine</b>',
            a: '<b>(b) Endocrine.</b> The thyroid gland secretes hormones (T3, T4) directly into the bloodstream: ductless, blood-borne. This is the defining feature of an endocrine gland. NCERT’s epithelial gland section distinguishes exocrine (ducts) from endocrine (ductless).',
          },
          {
            q: '[Moderate] Read the following statements and identify the tissue:<br>(i) Cells are spindle-shaped and taper at both ends.<br>(ii) Striations are absent.<br>(iii) The tissue is involuntary and uninucleate.<br><b>(a) Skeletal muscle (b) Cardiac muscle (c) Smooth muscle (d) Tendon</b>',
            a: '<b>(c) Smooth muscle.</b> The three defining features of smooth muscle (spindle-shaped, non-striated, and involuntary) are all stated. Skeletal muscle is striated and voluntary; cardiac muscle is striated and branched; a tendon is dense regular connective tissue, not muscle.',
          },
          {
            q: '[Moderate] Consider the following statements about cockroach: (i) Head is formed by the fusion of 6 segments. (ii) Mouth parts are biting and chewing type. (iii) Crop is the part of the midgut. Which of the following is correct? <b>(a) Only (ii) (b) (ii) and (iii) (c) (i) and (ii) (d) Only (iii)</b>',
            a: '<b>(c) (i) and (ii).</b> Statement (i) is true: the head results from fusion of 6 embryonic segments. Statement (ii) is true: cockroach mouthparts are cutting and biting type. Statement (iii) is false: the crop is part of the foregut, not the midgut. The midgut begins after the gizzard.',
          },
          {
            q: '[Moderate] Assertion (A): Cartilage heals slowly or sometimes not at all. Reason (R): Cartilage has no blood vessels running through its matrix.<br><b>(a) Both A and R true, R correctly explains A (b) Both A and R true, R does not explain A (c) A true, R false (d) A false, R true</b>',
            a: '<b>(a).</b> Both statements are textbook facts. Cartilage is avascular: chondrocytes receive nutrients only by diffusion from the surrounding tissue fluid. This avascularity is precisely why repair is slow or absent. R directly explains A.',
          },
          {
            q: '[Moderate] Which one of the following is wrongly matched? <b>(a) Tendon: dense regular connective tissue (b) Areolar tissue: loose connective tissue (c) Cartilage: specialised connective tissue (d) Blood: epithelial tissue</b>',
            a: '<b>(d).</b> Blood is a specialised connective tissue (fluid matrix, mesodermal origin). Option (d) is the wrongly matched pair. Tendon, areolar tissue, and cartilage are all correctly classified. This is the “blood is not a tissue” trap.',
          },
          {
            q: '[Hard] In the male frog, sperm travel from the testes to the urinogenital duct by passing through which sequence? <b>(a) Oviduct (b) Vasa efferentia → kidney → Bidder’s canal (c) Truncus arteriosus (d) Ovisac</b>',
            a: '<b>(b).</b> The male frog’s sperm route is a distinctive feature: testes → vasa efferentia → kidney (where sperm enter Bidder’s canal) → urinogenital duct → cloaca. The urinogenital duct carries both urine and sperm in the male. The oviduct is female; the truncus arteriosus is part of the heart outflow tract; the ovisac is the terminal part of the oviduct in the female, where eggs are held before they are laid.',
          },
          {
            q: '[Hard] Which of the following statements about cockroach is INCORRECT? <b>(a) Blood vascular system is of the open type. (b) They are monoecious. (c) Nymph grows by moulting about 13 times to reach the adult form. (d) Heart consists of 13 chambers.</b>',
            a: '<b>(b).</b> Cockroaches are dioecious: sexes are separate (male and female individuals). They are not monoecious. Statements (a), (c), and (d) are all correct: open circulatory system, paurometabolous development with ~13 nymphal moults, and a 13-chambered dorsal heart are all NCERT facts.',
          },
          {
            q: '[Hard] The spermathecae of <i>Pheretima</i> are located in segments: <b>(a) 14 to 18 (b) 10 to 13 (c) 6 to 10 (d) 6 to 9</b>',
            a: '<b>(d) 6 to 9.</b> <i>Pheretima</i> has four pairs of spermathecae, located in segments 6, 7, 8, and 9. They store sperm received from a mating partner. A common trap is segments 14 to 18 (which take in the clitellum, 14–16), or 10 to 13 (a range that includes the testes segments, 10 and 11). The answer is uniquely 6–9.',
          },
          {
            q: '[Hard] Assertion (A): Earthworm blood is red although its blood cells are colourless. Reason (R): Haemoglobin is dissolved in the plasma of the earthworm.<br><b>(a) Both A and R true, R correctly explains A (b) Both A and R true, R does not explain A (c) A true, R false (d) A false, R true</b>',
            a: '<b>(a).</b> Both statements are true. The earthworm has no red blood cells; its blood cells are colourless and phagocytic, and the red colour comes from haemoglobin dissolved in the plasma. R is therefore the correct explanation of A.',
          },
          {
            q: '[Hard] Which of the following is NOT a characteristic of skeletal muscle? <b>(a) Voluntary control (b) Multinucleate fibres (c) Intercalated discs (d) Striated appearance</b>',
            a: '<b>(c) Intercalated discs.</b> Intercalated discs are unique to cardiac muscle: they are the cell-to-cell junctions that allow the heart to contract as a synchronised unit. Skeletal muscle is voluntary, multinucleate, and striated (the regular arrangement of actin and myosin gives the banded appearance). Confusing intercalated discs with a feature of another muscle type is a common trap.',
          },
        ],
      },

      { t: 'part', title: 'High-Yield Recall List' },
      {
        t: 'p',
        html: 'Revise these as standalone facts and as contrast pairs.<br>1. <b>Numbers to memorise.</b> Earthworm: gizzard 8–9, testes 10–11, ovary 12–13, clitellum 14–16, male pore 18, spermathecae 6–9. Cockroach: testes in abdominal segments 4–6, ovaries in abdominal segments 2–6, 10 pairs of spiracles (2 thoracic + 8 abdominal), 13-chambered heart.<br>2. <b>The earthworm–cockroach mirror.</b> The earthworm/cockroach contrast is a frequently tested comparison across both animals: closed vs. open circulation, Hb in plasma vs. no respiratory pigment, skin breathing vs. tracheal system. Revise it as one paired item.<br>3. <b>Tadpole vs. adult frog.</b> NEET asks for the differences between the two stages:',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Tadpole', 'Adult frog'],
        rows: [
          ['Respiration', 'Gills', 'Lungs, skin and buccal cavity'],
          ['Nitrogenous waste', 'Ammonotelic', 'Ureotelic'],
          ['Diet', 'Herbivorous', 'Carnivorous'],
        ],
      },
    ],
  },
];
