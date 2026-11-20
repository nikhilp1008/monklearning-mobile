import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 17 (Locomotion and Movement), Additional topics C to G, word for word from the Class 11
 * Biology Master Reference (book pp. 1053 to 1073): C "Skeletal Development and Synovial Joint Architecture"
 * (opens mid-page on p. 1053 after Addendum B's practice answers; its answers end on p. 1057), D "Calcium Homeostasis
 * and the Muscle–Bone Connection" (p. 1057 to p. 1060), E "Musculoskeletal Responses to Exercise and Injury: Clinical
 * Integration" (p. 1060 to p. 1063), F "Practice Answer Key: Full Solutions" (p. 1063 to p. 1065, answers to
 * Addenda A to E), G "What NEET Actually Asks" (the book's "Addendum P", p. 1065 to p. 1073). Page 1074 is the next
 * chapter.
 *
 * Topic indexes: C = 7, D = 8, E = 9, F = 10, G = 11 (Topics 00 to 04 = 0 to 4, A to E = 5 to 9 by the brief).
 * The book's example headings ("Example C.1 - [NEET] ...") become the example's tag (the bracket) and the heading
 * text is the bold question. Where the book prints no answer line of its own the example's ans is ''. A Column I /
 * Column II table inside a question is set as lines of cells separated by " | ". The book's options are letters
 * (a) to (d) in this part (the numerals of Topics 00 to 04 do not occur), so the letters are kept.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic C · pp. 1053–1057 ─────────────────────────
  {
    n: 'C',
    title: 'Skeletal Development and Synovial Joint Architecture',
    extra: true,
    kalam: 'All bones begin as mesenchyme (embryonic connective tissue).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter classifies joints structurally, names the bone divisions and the three kinds of cartilage, and mentions the synovial cavity, fluid and articular cartilage, but two topics are not developed: how bones themselves are built during development (the two pathways of ossification and the epiphyseal plate) and the functional architecture of the synovial joint as a load-bearing organ (membrane, capsule, menisci, the make-up of synovial fluid). Both are examinable: ossification type identification appears at NEET level, and synovial joint structure, including the make-up of synovial fluid, is a likely short-answer topic in board-style papers (the book’s estimate; NEET asks MCQs only, and this goes beyond NCERT).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Ossification: two pathways.</b><br>All bones begin as mesenchyme (embryonic connective tissue). From this common origin they develop by one of two pathways:',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Intramembranous ossification', 'Endochondral ossification'],
        rows: [
          ['Starting tissue', 'Mesenchyme (membrane) directly', 'Pre-existing cartilage model'],
          [
            'Bones formed',
            'Flat bones of the skull vault, facial bones such as the maxilla, and most of the clavicle',
            'Most long bones (the clavicle is the exception), vertebrae, hip bone, limb bones',
          ],
          [
            'Primary ossification centre',
            'Appears in centre of mesenchymal sheet',
            'Appears in diaphysis (shaft) of cartilage model',
          ],
          [
            'Secondary ossification centre',
            'Not applicable',
            'Appears in each epiphysis (end), typically around or after birth',
          ],
          [
            'Sequence',
            'Mesenchyme → osteoprogenitor cells → osteoblasts → spongy bone → remodelling',
            'Cartilage model → primary centre → medullary cavity forms → secondary centres → epiphyseal plates persist',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Epiphyseal plate: the growth zone.</b><br>The epiphyseal plate is a cartilaginous disc between the diaphysis and epiphysis of a growing long bone. It is the site of longitudinal bone growth. Structure from epiphysis to diaphysis (the order in which a chondrocyte matures):<br>1. <b>Zone of resting cartilage</b>: small chondrocytes anchored to the epiphyseal bone.<br>2. <b>Zone of proliferation</b>: chondrocytes divide rapidly, forming stacks of cells that push the epiphysis away from the diaphysis.<br>3. <b>Zone of hypertrophy</b>: chondrocytes enlarge and accumulate glycogen.<br>4. <b>Zone of calcification</b>: matrix mineralises; chondrocytes die.<br>5. <b>Zone of ossification</b>: blood vessels and osteoprogenitor cells invade; osteoblasts lay down bone matrix on the calcified cartilage remnants.',
      },
      {
        t: 'p',
        html: 'By the end of adolescence or the early twenties (the age differs between bones and between the sexes), the epiphyseal plate is fully consumed and replaced by bone, the <b>epiphyseal line</b>, and longitudinal growth ceases. A fracture through the epiphyseal plate in a growing child can therefore impair bone lengthening.',
      },
      {
        t: 'p',
        html: '<b>Synovial joint architecture: functional detail.</b><br>The chapter names the five subtypes and states that synovial joints have a synovial cavity filled with fluid. The full architecture (beyond NCERT):',
      },
      {
        t: 'table',
        title: null,
        head: ['Component', 'Structure', 'Function'],
        rows: [
          [
            'Articular cartilage',
            'Layer of hyaline cartilage covering the articulating bone ends',
            'Provides extremely smooth, low-friction surface; distributes load over a wider area',
          ],
          [
            'Synovial membrane (synovium)',
            'Loose connective tissue lining the joint capsule internally; contains synovial cells that secrete synovial fluid',
            'Produces and maintains synovial fluid; is not a true epithelial lining',
          ],
          [
            'Synovial fluid',
            'Viscous fluid in the joint cavity; filtrate of blood plasma + hyaluronic acid secreted by synovial cells',
            'Lubrication (reduces friction between cartilage surfaces) and nutrition of avascular articular cartilage',
          ],
          [
            'Joint capsule',
            'Fibrous outer layer of dense irregular connective tissue',
            'Provides structural strength and holds the joint together',
          ],
          [
            'Ligaments',
            'Bands of dense regular connective tissue',
            'Reinforce the capsule; limit excessive movement in specific directions',
          ],
          [
            'Menisci (knee)',
            'Fibrocartilage pads within certain synovial joints',
            'Improve congruency between articular surfaces; act as shock absorbers',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Synovial fluid composition (beyond NCERT).</b> Synovial fluid is a filtrate of blood plasma (supplied by capillaries in the synovial membrane) with added hyaluronic acid (from synovial fibroblasts) and a glycoprotein called lubricin. The hyaluronic acid gives the fluid its viscous, lubricating quality. Because articular cartilage is avascular, it receives its nutrition mainly from synovial fluid by diffusion (with a minor contribution from the underlying bone), which is why joint immobility (as in prolonged bed rest) can impair cartilage health.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>A long bone is found to have a primary ossification centre in its shaft and secondary centres in its ends. State the type of ossification involved and explain why the ends of the bone develop secondary centres rather than ossifying from the primary centre.</b>',
        steps: [
          '<b>Solution.</b> The bone is forming by <b>endochondral ossification</b>, the pathway in which a pre-existing hyaline cartilage model is replaced by bone. Primary centres appear in the diaphysis during foetal life; secondary centres appear in the epiphyses around or after birth.',
          'The ends develop their own secondary centres because the epiphysis is a separate block of cartilage from the shaft. Ossification of the shaft spreads outward from the primary centre but stops at the epiphyseal plate, which stays as growing cartilage between the shaft and each end. The epiphysis is supplied by its own blood vessels and ossifies from its own centre, so a plate of cartilage remains between the two bony regions. The two ossified regions fuse only when the epiphyseal plate is itself replaced by bone at skeletal maturity. Until then, the plate allows independent growth at the ends, the structural basis for longitudinal bone lengthening.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Explain why articular cartilage is described as avascular and state how it receives its nutrition.</b>',
        steps: [
          '<b>Solution.</b> Articular cartilage covering the ends of bones within synovial joints contains no blood vessels, no nerves, and no lymphatic vessels: it is an avascular, aneural tissue. This is structurally important because blood vessels within the load-bearing surface would rupture under compression and would also reduce the smoothness required for frictionless joint movement.',
          'Nutrition reaches the cartilage by two routes:<br>• <b>Synovial fluid diffusion</b>: the joint cavity contains synovial fluid, a plasma filtrate enriched with hyaluronic acid. Dissolved nutrients (glucose, oxygen, amino acids) diffuse from this fluid directly into the cartilage matrix and into the chondrocytes embedded within it.<br>• <b>Subchondral bone</b> (minor route): nutrients diffuse from capillaries in the subchondral bone plate through the calcified cartilage zone into the deeper uncalcified cartilage.',
          'Because of this avascular nutrition, cartilage heals very slowly after injury: the bloodless environment limits the inflammatory and reparative cell influx that normally clears debris and lays down new tissue in other connective tissues.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Name the type of ossification by which the humerus is formed. State where the primary and secondary ossification centres appear in this bone.',
            a: 'Endochondral ossification. Primary centre in the diaphysis (shaft) during foetal development (from about the eighth week); secondary centres in the epiphyses (proximal and distal ends) appear around or after birth.',
          },
          {
            q: '[CUET] The cartilage disc responsible for longitudinal bone growth is called the ______; it is replaced by the ______ at skeletal maturity.',
            a: 'Epiphyseal plate; epiphyseal line (or epiphyseal scar).',
          },
          {
            q: '[NEET] State two components of synovial fluid and explain their functions.',
            a: '(i) Hyaluronic acid: secreted by synovial fibroblasts; gives synovial fluid its viscosity and helps lubricate the joint. (ii) Lubricin (a glycoprotein): coats the articular surface and reduces friction during movement. Additional component: plasma filtrate (water, glucose, proteins): supplies nutrients and maintains fluid volume.',
          },
          {
            q: '[CBSE] State one difference between intramembranous and endochondral ossification with respect to the starting tissue.',
            a: 'Intramembranous ossification begins directly in mesenchyme (embryonic connective tissue), forming bone within a membrane. Endochondral ossification begins with a pre-existing hyaline cartilage model that is later replaced by bone: bone does not form directly from mesenchyme.',
          },
          {
            q: '[NEET A-R] A: Articular cartilage cannot repair itself effectively after injury. R: Articular cartilage is avascular and receives nutrition mainly by diffusion from synovial fluid. Evaluate A, R, and whether R explains A. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'A true, R true, R explains A. Avascularity limits the delivery of inflammatory cells, fibroblasts, and blood-borne growth factors needed for effective repair. Diffusion from synovial fluid provides nutrition but is insufficient to drive a robust regenerative response, so cartilage defects typically fill with fibrocartilage (mechanically inferior) or remain unrepaired.',
          },
          {
            q: '[CUET] The type of cartilage found in the external ear is ______ cartilage.',
            a: 'Elastic (yellow) cartilage.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 1057–1060 ─────────────────────────
  {
    n: 'D',
    title: 'Calcium Homeostasis and the Muscle–Bone Connection',
    extra: true,
    kalam: 'PTH, calcitonin, and vitamin D form the core hormonal triad that a Class 11 student must connect across chapters.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter treats calcium in two places and notes that it is the same element in two very different disorders: low Ca<sup>2+</sup> in body fluid causes tetany (muscle side), and loss of bone calcium underlies osteoporosis (bone side). It does not say how blood calcium is regulated. To see the whole picture, the reader must integrate these: calcium is a single ion regulated by a single hormonal system, and the muscle and bone effects are downstream consequences of the same regulatory axis. PTH, calcitonin, and vitamin D form the core hormonal triad that a Class 11 student must connect across chapters.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>Calcium homeostasis: the hormonal axis (the three regulators).</b>' },
      {
        t: 'table',
        title: 'Source and stimulus',
        head: ['Hormone', 'Source', 'Primary stimulus'],
        rows: [
          ['Parathyroid hormone (PTH)', 'Chief cells of the parathyroid gland', 'Fall in blood Ca<sup>2+</sup>'],
          [
            'Calcitonin',
            'Parafollicular (C) cells of the thyroid gland',
            'Rise in blood Ca<sup>2+</sup>',
          ],
          [
            'Active vitamin D (calcitriol)',
            'Kidney (from 25-hydroxyvitamin D made in the liver)',
            'Low Ca<sup>2+</sup> and high PTH',
          ],
        ],
      },
      { t: 'p', html: 'Calcitriol is 1,25-dihydroxycholecalciferol, the active form of vitamin D.' },
      {
        t: 'table',
        title: 'Actions on bone, kidney and intestine',
        head: ['Hormone', 'Bone', 'Kidney', 'Intestine'],
        rows: [
          [
            'PTH',
            'Stimulates osteoclasts, so bone is resorbed and Ca<sup>2+</sup> is released',
            'Increases Ca<sup>2+</sup> reabsorption; decreases phosphate reabsorption',
            'Increases Ca<sup>2+</sup> absorption indirectly (by activating vitamin D)',
          ],
          [
            'Calcitonin',
            'Inhibits osteoclasts, reducing bone resorption',
            'Minor; increases Ca<sup>2+</sup> excretion',
            'None',
          ],
          [
            'Active vitamin D (calcitriol)',
            'Needed for bone mineralisation; low levels contribute to rickets',
            'Increases Ca<sup>2+</sup> and phosphate reabsorption',
            '<b>Major stimulator of intestinal Ca<sup>2+</sup> absorption</b>',
          ],
        ],
      },
      {
        t: 'p',
        html: 'NCERT says that PTH increases Ca<sup>2+</sup> absorption from the digested food; the table above gives the mechanism, which is through active vitamin D.',
      },
      {
        t: 'p',
        html: '<b>The tetany–osteoporosis calcium thread.</b><br>• <b>Tetany</b>: when plasma Ca<sup>2+</sup> falls below the normal range (approximately 9 to 10.5 mg/dL, a figure outside NCERT), motor nerves and muscle membranes become hyperexcitable, because Ca<sup>2+</sup> normally stabilises excitable membranes (it raises the threshold at which voltage-gated Na<sup>+</sup> channels open); with less Ca<sup>2+</sup> the threshold falls and membranes depolarise spontaneously. The result is involuntary, repetitive muscle spasms (carpopedal spasm, laryngospasm). The immediate cause is hypocalcaemia; the ultimate cause may be parathyroid malfunction (insufficient PTH → insufficient bone resorption → low serum calcium).<br>• <b>Osteoporosis</b>: chronic net bone loss in which the mineral matrix (calcium phosphate) is drawn out of bone faster than it is deposited. Estrogen deficiency (post-menopause) is the most common cause because estrogen normally suppresses osteoclast activity. Because blood calcium is held within a narrow range by PTH, calcitonin and vitamin D, the calcium lost from bone does not appear as a high blood level. In postmenopausal osteoporosis serum calcium and PTH are usually normal; the loss is from the bone compartment.',
      },
      {
        t: 'p',
        html: '<b>Key examination point:</b> Tetany and osteoporosis both involve calcium, but tetany is an acute blood-calcium problem (low serum Ca<sup>2+</sup>) while osteoporosis is a chronic bone-mass problem (low bone mineral density). Calcium is the link, but the compartment that is deficient differs.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>A patient with surgically removed parathyroid glands develops tetany. Explain the physiological mechanism linking the absent parathyroid glands to the symptoms of tetany.</b>',
        steps: [
          '<b>Solution.</b> The parathyroid glands secrete parathyroid hormone (PTH), the primary hormone that maintains blood calcium within the narrow range required for normal nerve and muscle function. When the glands are removed:',
          '1. PTH falls to near zero.',
          '2. Without PTH, the kidneys cannot activate vitamin D efficiently, so intestinal calcium absorption falls.',
          '3. Without PTH, osteoclasts in bone are not stimulated to resorb bone and release calcium into the blood.',
          '4. Without PTH, the kidneys increase calcium excretion (PTH normally promotes calcium reabsorption).',
          '5. Net result: <b>hypocalcaemia</b> (low plasma Ca<sup>2+</sup>).',
          'At normal Ca<sup>2+</sup> levels, Ca<sup>2+</sup> stabilises the membranes of neurons and muscle fibres by raising the threshold at which voltage-gated Na<sup>+</sup> channels open. With Ca<sup>2+</sup> depleted, this threshold falls, so Na<sup>+</sup> channels open at smaller depolarisations and neurons and muscle membranes fire spontaneously. The motor nerves fire repetitively, driving the skeletal muscles into involuntary, sustained contractions: tetany. The characteristic carpopedal spasm (hands and feet claw inward) and laryngospasm (dangerous narrowing of the airway) result.',
          'Treatment is calcium replacement and vitamin D supplementation to compensate for the absent PTH.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Explain why a deficiency of vitamin D in children produces soft, weak bones (rickets) while in adults the same deficiency produces bone pain and fractures (osteomalacia). Why is it called rickets only in children?</b>',
        steps: [
          '<b>Solution.</b> Both rickets and osteomalacia result from defective mineralisation of the bone matrix: the collagen scaffold is laid down normally but cannot calcify without adequate calcium and phosphate.',
          'In children, the <b>epiphyseal plates are still open</b>: the growing ends of long bones have active cartilage proliferating and attempting to ossify. Vitamin D deficiency impairs calcium absorption, so the epiphyseal plate cannot mineralise properly. The proliferating cartilage hypertrophies and accumulates unmineralised matrix, producing visible enlargement of the epiphyses (the wrist, ankle, costochondral junctions) and bowing of weight-bearing long bones. This clinical syndrome of a growing skeleton with soft, deformed bones is <b>rickets</b>.',
          'In adults, the epiphyseal plates have closed: longitudinal growth has ceased. The same defective mineralisation affects the entire bone matrix that is continuously remodelled, but no new growth plates are present to swell. Instead, the existing bone loses mineral, becoming soft and prone to bending and fracture under load. The condition is <b>osteomalacia</b> (literally “soft bone”).',
          'The term rickets is reserved for children because it specifically describes the growth-plate pathology that can only occur while the skeleton is still lengthening. Osteomalacia is the adult equivalent: the same mineralisation defect without the epiphyseal component.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Name the hormone released when blood calcium levels fall and state its primary effect on bone.',
            a: 'Parathyroid hormone (PTH); it stimulates osteoclast activity in bone, causing bone resorption and release of calcium into the blood.',
          },
          {
            q: '[CBSE] State how calcitonin lowers blood calcium levels.',
            a: 'Calcitonin is secreted by the thyroid C-cells when plasma calcium rises. It suppresses osteoclast activity, reducing bone resorption and therefore decreasing calcium release from bone into the blood. It also increases renal calcium excretion modestly.',
          },
          {
            q: '[NEET] Distinguish between rickets and osteomalacia with respect to the age group affected and the anatomical basis of bone deformity.',
            a: 'Rickets occurs in children (epiphyseal plates open); defective mineralisation at the growth plates causes epiphyseal enlargement and bowing of long bones. Osteomalacia occurs in adults (epiphyseal plates closed); the existing bone matrix demineralises, becoming soft and fracture-prone without obvious deformity at growth plates.',
          },
          {
            q: '[CUET] The active form of vitamin D that stimulates intestinal calcium absorption is called ______.',
            a: '1,25-dihydroxycholecalciferol (calcitriol).',
          },
          {
            q: '[NEET A-R] A: Osteoporosis and tetany are both caused by a low blood calcium level. R: Osteoporosis involves loss of bone mineral density, whereas tetany involves a low blood calcium level. Evaluate A and R. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'A false, R true. Both disorders involve calcium, but in different compartments. Tetany is a blood-calcium problem (low serum Ca<sup>2+</sup>); osteoporosis is a bone-mass problem (bone mineral density falls) with usually normal serum calcium, so A is false. R states the distinction correctly.',
          },
          {
            q: '[CUET] The hormone produced by the parafollicular cells of the thyroid gland is ______.',
            a: 'Calcitonin (thyrocalcitonin).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 1060–1063 ─────────────────────────
  {
    n: 'E',
    title: 'Musculoskeletal Responses to Exercise and Injury: Clinical Integration',
    extra: true,
    kalam: 'This section integrates the chapter’s content into four clinical reasoning chains.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter closes by tying each disorder to the structure it affects (Figure 5), but treats each disorder on its own. The skill these questions test is connecting normal physiology to clinical presentation: why a training adaptation occurs (adaptation within a fibre type), why an injury produces specific signs (synovial fluid in joint effusion), and why a drug produces a specific effect (acetylcholinesterase inhibitor in myasthenia gravis). This section integrates the chapter’s content into four clinical reasoning chains.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>Four clinical integration patterns (beyond NCERT).</b>' },
      {
        t: 'p',
        html: '<b>Pattern 1: Exercise adaptation → change within the fibre type.</b> Sustained aerobic training increases mitochondrial density and myoglobin content within existing slow-twitch fibres, making them more fatigue-resistant. Training does not usually turn slow fibres into fast fibres or the reverse; the fibres adapt within their type. The visible result: the muscle becomes darker red. High-resistance anaerobic training enlarges fast-twitch fibres (hypertrophy) by adding myofibrils, increasing the cross-sectional area and therefore the force available.',
      },
      {
        t: 'p',
        html: '<b>Pattern 2: Joint injury → effusion.</b> Trauma to a synovial joint (sprain, fracture into the joint) damages blood vessels in the synovial membrane or subchondral bone, causing blood to accumulate in the joint cavity: a <b>haemarthrosis</b>. Inflammation (as in gout or rheumatoid arthritis) causes the synovial membrane to secrete excess synovial fluid: a <b>joint effusion</b>. In both cases the capsule stretches, producing visible swelling and limiting movement. The fluid itself, if aspirated, distinguishes the cause: blood (haemarthrosis) versus cloudy, inflammatory fluid (gout/rheumatoid).',
      },
      {
        t: 'p',
        html: '<b>Pattern 3: Muscle strain → recruitment failure.</b> A muscle strain (tearing of fibres during eccentric loading, as in sprinting) causes local inflammation, pain, and reflex inhibition of the motor neurons supplying the damaged fibres. This is why a strained hamstring feels weak as well as painful: the nervous system actively reduces its drive to the injured tissue to prevent further damage. The weakness is partly neurological, not only structural.',
      },
      {
        t: 'p',
        html: '<b>Pattern 4: Disuse atrophy → bone loss.</b> Prolonged immobilisation (plaster cast, bed rest) removes mechanical loading from bone. Osteocytes, the mechanosensory cells embedded in bone matrix, detect the reduced strain and shift the balance toward osteoclast activity: bone is resorbed faster than it is deposited. The result is disuse osteoporosis, detectable as reduced bone mineral density even after short periods of immobilisation. Calcium is lost from the bone; in a healthy adult the blood level is held steady by PTH and calcitonin, so the loss shows up as reduced bone mineral density rather than as a high blood calcium.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>A marathon runner develops markedly increased fatigue resistance in the leg muscles over several months of training. Explain the cellular mechanism underlying this adaptation and state whether the runner’s muscle fibres change from one type to another.</b>',
        steps: [
          '<b>Solution.</b> The increased fatigue resistance results from <b>mitochondrial biogenesis</b> and increased myoglobin content within the existing slow-twitch (type I) fibres of the trained muscles. Endurance training stimulates the synthesis of new mitochondria (via PGC-1α activation, a transcriptional coactivator upregulated by repeated muscle contraction). More mitochondria increase the capacity for oxidative phosphorylation, allowing each fibre to produce ATP aerobically at a higher rate and to sustain it for longer, without accumulating the lactic acid that causes fatigue. (The ATP yield per glucose molecule is fixed by the pathway and does not change.)',
          'Myoglobin content also increases: this oxygen-storing protein holds a reserve of oxygen inside the fibre, prolonging aerobic metabolism when blood flow cannot keep pace during sustained submaximal contraction.',
          'The fibres do <b>not</b> usually change from one main type to the other: the type of a fibre is set largely by the motor neuron that supplies it, so training does not convert fast-twitch fibres into slow-twitch fibres to any useful extent. Training adapts the existing fibres within their type: slow-twitch fibres become more oxidative; fast-twitch fibres become larger (hypertrophy) but remain fast. The marathon runner’s improved fatigue resistance therefore comes from optimisation of the existing fibres, not from a type switch.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>State three differences between a sprain and a strain. Classify each as a muscle/joint injury.</b> (The book lists four; any three earn full marks.)',
        steps: [
          '<b>Solution.</b> The differences, feature by feature:',
          '<b>Structure affected.</b> Sprain: ligaments (bone-to-bone connectors), a joint injury. Strain: muscle fibres or tendons (muscle-to-bone connectors), a muscle injury.',
          '<b>Typical cause.</b> Sprain: twisting force applied to a joint that exceeds the ligament’s tensile strength. Strain: forced stretching or excessive contraction (often eccentric) of a muscle or its tendon.',
          '<b>Common sites.</b> Sprain: ankle (lateral ligament complex), knee (ACL/MCL). Strain: hamstring, quadriceps, gastrocnemius.',
          '<b>Signs.</b> Sprain: joint swelling, pain at the joint line, instability. Strain: local tenderness at the muscle belly or musculotendinous junction; weakness disproportionate to swelling.',
          'Both are soft-tissue injuries; they usually do not involve a fracture. Classification: sprain = joint injury (ligament); strain = muscle injury (muscle or tendon).',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Explain why a muscle that has been immobilised in a plaster cast for several weeks shows visible wasting (atrophy) when the cast is removed.',
            a: 'Immobilisation removes the normal tension that muscle fibres experience during activity. Without this mechanical stimulus, the balance shifts toward protein catabolism: the ubiquitin-proteasome pathway degrades myofibrillar proteins. Additionally, motor neuron firing drops, so fewer fibres are activated, reducing trophic signals that normally support muscle mass. Net result: decreased fibre cross-sectional area (atrophy). The effect is compounded by reduced blood flow during immobilisation.',
          },
          { q: '[CUET] A joint injury that involves tearing of the ligaments is called a ______.', a: 'Sprain.' },
          {
            q: '[CBSE] State one structural adaptation that occurs in skeletal muscle as a result of regular aerobic exercise.',
            a: 'Any one of: increased mitochondrial density (more oxidative capacity); increased myoglobin content (darker red colour); increased capillary density (improved oxygen delivery to fibres); greater oxidative capacity within the existing fibres. (The fibres adapt largely within their type; they do not switch between slow and fast.)',
          },
          {
            q: '[NEET] Distinguish between haemarthrosis and joint effusion with respect to the contents of the joint cavity.',
            a: 'Haemarthrosis = blood in the joint cavity (from trauma to blood vessels in the synovial membrane or subchondral bone). Joint effusion = excess synovial fluid accumulation (from inflammation; fluid may be clear or cloudy depending on cause).',
          },
          {
            q: '[NEET A-R] A: Immobilisation of a limb in a cast leads to bone loss. R: Mechanical loading of bone normally suppresses osteoclast activity; without loading, osteoclasts are disinhibited and bone is resorbed. Evaluate A, R, and whether R explains A. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'A true, R true, R explains A. Osteocytes embedded in bone matrix are mechanosensors that regulate osteoclast and osteoblast activity. Physiological loading produces strain that stimulates osteocytes to produce signals (sclerostin, osteoprotegerin) that suppress osteoclast differentiation and activity. When loading is removed (immobilisation), this inhibitory signal is lost, osteoclasts become relatively active, and bone resorption exceeds deposition, measurable as reduced bone mineral density within weeks. Note: sclerostin is not an osteoclast-suppressing signal. Osteocytes make more of it when loading falls, and it inhibits bone formation by osteoblasts. Osteoprotegerin is the signal that opposes osteoclast differentiation; when loading falls, osteocytes also make more RANKL, which favours it.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 1063–1065 ─────────────────────────
  {
    n: 'F',
    title: 'Practice Answer Key: Full Solutions',
    extra: true,
    blocks: [
      { t: 'part', title: 'Additional topic A' },
      {
        t: 'proc',
        title: 'Additional topic A',
        steps: [
          'Acetylcholinesterase; produces acetic acid and choline.',
          'Nerve impulse arrives at axon terminal → Ca<sup>2+</sup> channels open → Ca<sup>2+</sup> enters terminal → synaptic vesicles fuse and release ACh → ACh crosses cleft and binds nicotinic receptors on motor end plate → receptor channels open → Na<sup>+</sup> enters → end-plate potential generated → if above threshold, muscle action potential propagates along sarcolemma.',
          'A true; R true; R explains A: competitive antagonism at the ACh receptor is precisely the molecular mechanism by which curare blocks the NMJ.',
          'Acetyl-CoA + choline; choline acetyltransferase.',
          'AChE inhibitors slow ACh breakdown, increasing ACh concentration and dwell time at the receptor. With fewer functional receptors available (autoimmune destruction), the higher ACh concentration increases the probability that surviving receptors are occupied, partially compensating for the receptor deficit and improving signal transmission.',
        ],
      },

      { t: 'part', title: 'Additional topic B' },
      {
        t: 'proc',
        title: 'Additional topic B',
        steps: [
          'Twitch = mechanical response to a single stimulus. Three phases: latent period (action potential propagates, Ca<sup>2+</sup> released), contraction phase (tension rises as filaments slide), relaxation phase (Ca<sup>2+</sup> pumped back, tension falls).',
          'Tetanus.',
          'Phosphocreatine (creatine phosphate) stores a high-energy phosphate bond. When ATP is consumed rapidly at the onset of intense activity, creatine kinase transfers the phosphate from phosphocreatine to ADP, regenerating ATP almost instantaneously. This “ATP buffer” sustains maximum power output for the first few seconds until glycolysis and oxidative phosphorylation increase their output. Without phosphocreatine, the small ATP store would be used up within a few seconds of maximal contraction.',
          'Small motor units (slow-twitch, type I) are recruited first. This follows the size principle: it provides fine gradation of force for low-intensity tasks and conserves energy. Large units (fast-twitch, type II) are added only as force demands escalate.',
          'Incomplete tetanus: individual twitches are partially summated but small drops in tension are visible between peaks: a wavy, unfused tension curve. Complete tetanus: the stimulation frequency is higher; twitches fuse completely and tension reaches a smooth plateau at the maximal level.',
          'A true; R true; R explains A. Fast-twitch fibres rely predominantly on anaerobic glycolysis, rapidly generating ATP but also producing H<sup>+</sup> (from lactic acid) and inorganic phosphate. These metabolites lower intracellular pH, impair Ca<sup>2+</sup> binding by troponin, and inhibit cross-bridge cycling: the direct biochemical basis of rapid fatigue. Slow-twitch fibres have high oxidative capacity and do not accumulate these fatigue-inducing metabolites.',
        ],
      },

      { t: 'part', title: 'Additional topic C' },
      {
        t: 'proc',
        title: 'Additional topic C',
        steps: [
          'Endochondral ossification. Primary centre: diaphysis (shaft), appears during foetal development (from about the eighth week). Secondary centres: in each epiphysis (proximal and distal ends of the humerus); they appear around or after birth.',
          'Epiphyseal plate; epiphyseal line (or epiphyseal scar/bony bridge).',
          '(i) Hyaluronic acid: secreted by synovial fibroblasts; gives synovial fluid its viscosity and helps lubricate the joint. (ii) Lubricin: a glycoprotein that coats articular surfaces and reduces shear friction during movement. Both components are essential for near-frictionless joint motion.',
          'Intramembranous ossification begins directly within mesenchymal membrane: mesenchymal cells differentiate into osteoblasts, which lay down osteoid directly. Endochondral ossification begins with a pre-existing hyaline cartilage model that is subsequently replaced by bone: the first bone does not form in mesenchyme but within cartilage.',
          'A true; R true; R explains A. The avascular nature of articular cartilage means no blood vessels enter it, limiting the delivery of inflammatory cells and fibroblasts required for repair. Nutrition arrives mainly by diffusion from synovial fluid, which is insufficient to drive a robust regenerative response. Defects therefore heal slowly and incompletely.',
          'Elastic (yellow) cartilage.',
        ],
      },

      { t: 'part', title: 'Additional topic D' },
      {
        t: 'proc',
        title: 'Additional topic D',
        steps: [
          'Parathyroid hormone (PTH); it stimulates osteoclast activity, causing bone resorption and release of calcium into the blood.',
          'Calcitonin is secreted when plasma calcium rises. It suppresses osteoclast activity (reducing bone resorption) and increases renal calcium excretion, lowering blood calcium.',
          'Rickets: children (epiphyseal plates open); epiphyseal plates fail to mineralise, causing enlargement of epiphyses and bowing of long bones. Osteomalacia: adults (epiphyseal plates closed); existing bone matrix demineralises, producing soft, fracture-prone bones without growth-plate deformity.',
          '1,25-dihydroxycholecalciferol (calcitriol).',
          'A is false, R is true. Osteoporosis is a bone-mass problem (bone compartment) with usually normal serum calcium; tetany is a low-blood-calcium problem (serum compartment). R states this distinction correctly, and it shows why A is false.',
          'Calcitonin (thyrocalcitonin).',
        ],
      },

      { t: 'part', title: 'Additional topic E' },
      {
        t: 'proc',
        title: 'Additional topic E',
        steps: [
          'Immobilisation removes mechanical loading, eliminating the tensile stimulus that normally maintains muscle protein synthesis. Without this stimulus, the ubiquitin-proteasome proteolytic pathway is upregulated, breaking down myofibrillar proteins (actin and myosin). Motor neuron drive also falls, removing trophic support for the muscle fibres. Net result: decreased fibre diameter (atrophy), visible as muscle wasting. Also, capillaries regress without functional demand, further reducing the muscle’s metabolic capacity.',
          'Sprain.',
          'Increased mitochondrial density (more oxidative enzymes per fibre); or increased myoglobin content (darker red colour); or increased capillary density (more oxygen delivery per unit mass). Any one correctly stated earns full credit.',
          'Haemarthrosis: the joint cavity contains blood (RBCs, fibrin, inflammatory cells) from trauma to vessels in the synovial membrane or subchondral bone. Joint effusion: the cavity contains excess synovial fluid (plasma filtrate plus hyaluronic acid), which may be clear (non-inflammatory) or cloudy with inflammatory cells (gout, rheumatoid).',
          'A true; R true; R explains A. Osteocytes detect mechanical strain and respond by producing anti-resorptive signals. Immobilisation removes this stimulus, removing the brake on osteoclasts. The resulting imbalance, increased osteoclast activity relative to osteoblast activity, causes net bone loss measurable within weeks of immobilisation. (See the note under Additional topic E, practice 5: the signal that opposes osteoclasts is osteoprotegerin, not sclerostin.)',
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic G · pp. 1065–1073 ─────────────────────────
  {
    n: 'G',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'NEET recycles five distinct question shapes on this chapter.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'NEET returns to this chapter in a predictable pattern. Questions come from the chapter’s five topics, grouped here into four rows (Topics 00 and 04 share the last row), listed roughly from most to least frequently tested (the book’s estimate from past papers, not official figures):',
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Typical content'],
        rows: [
          ['<b>Muscle contraction mechanism</b>', 'Sliding filament, band changes, Ca<sup>2+</sup>/troponin role, role of ATP'],
          ['<b>Skeletal system & joints</b>', 'Joint types, bone counts, axial/appendicular division'],
          ['<b>Muscle types & structure</b>', 'Three muscle types, sarcomere, F/G actin'],
          ['<b>Movement types & disorders</b>', 'Movement vs locomotion, amoeboid/ciliary movement, disorder–cause matches'],
        ],
      },
      {
        t: 'p',
        html: 'The single highest-yield fact NEET tests is <b>“A-band stays constant during contraction”</b>: it appears in several different question formats (the book’s estimate from past papers, not official figures). The <b>axial vs appendicular skeleton split</b> and <b>joint-type-to-example matching</b> are among the most frequently repeated items (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: 'NEET recycles five distinct question shapes on this chapter. Each has a crack.' },
      { t: 'p', html: '<b>1. The “Which Band Changes?” Single-Best Answer</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A sarcomere diagram or description of contraction is given, and the student must identify which band/zone changes. The trap is always the same: students say the <b>A-band shortens</b>, which is never true.<br><b>The crack:</b> Memorise one line: <b>“A stays, I and H shrink.”</b> The thick filament (A-band) never changes length; only the thin-filament overlap zones shrink.',
      },
      {
        t: 'ex',
        tag: 'NEET pattern',
        q: 'During muscle contraction in humans, which of the following is correct?<br>(a) Actin filaments shorten<br>(b) Sarcomere does not shorten<br>(c) A-band remains the same<br>(d) A, H and I bands shorten',
        steps: [
          'The A-band equals the full length of the thick (myosin) filament and is fixed. During contraction, the I-band and H-zone shrink because thin filaments slide inward; the sarcomere shortens but the thick filament does not. Option (a) is the reverse of the sliding-filament theory. Option (b) is false: the sarcomere shortens. Option (d) claims the A-band shrinks: the most common error on this type.',
        ],
        ans: '(c)',
      },
      { t: 'p', html: '<b>2. The “Incorrect Statement” Fact Question</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Four plausible statements are listed; three are true, one is false. NEET loves this for movement vs locomotion, muscle-type features, and disorders.<br><b>The crack:</b> Read every option with the word “NOT” or “EXCEPT” in mind. The false statement is usually the one that swaps two related concepts (e.g., “All movements lead to locomotion”: the classic reversal).',
      },
      {
        t: 'ex',
        tag: 'NEET pattern',
        q: 'Which of the following statements is INCORRECT?<br>(a) All movements lead to locomotion<br>(b) Ciliary movement helps in passage of ova through the female reproductive tract<br>(c) Microfilaments are involved in amoeboid movement<br>(d) In <i>Paramecium</i>, the cilia help in movement of food through the cytopharynx and in locomotion as well',
        steps: [
          'Locomotion is a subset of movement: only whole-body relocation counts. The heart beats (movement) without relocating the body. Options (b), (c) and (d) are all correct. Option (a) inverts the logical relationship NEET tests every year (the book’s estimate from past papers, not official figures).',
        ],
        ans: '(a)',
      },
      { t: 'p', html: '<b>3. The Assertion–Reason (A–R) Item</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Assertion followed by Reason; options are (a) both true and R explains A, (b) both true but R does not explain A, (c) A true R false, (d) A false R true.<br><b>The crack:</b> Evaluate <b>each statement independently first</b>. Only if both are true ask whether R is a genuine explanation of A. The chapter’s A–R items frequently test:<br>• Whether striated = voluntary (it does not: cardiac disproves it)<br>• Whether ATP’s role is only in the power stroke (it is also needed to detach the head)<br>• Whether low Ca<sup>2+</sup> causes tetany vs. bone calcium loss causing osteoporosis (same element, different disorders)',
      },
      {
        t: 'ex',
        tag: 'NEET pattern',
        q: '<b>Assertion (A):</b> Repeated activation of muscles leads to fatigue.<br><b>Reason (R):</b> Anaerobic breakdown of glycogen in muscles can lead to accumulation of lactic acid.',
        steps: [
          'Both true; R correctly explains A. Under heavy or sustained work, oxygen supply cannot keep pace with demand, the fibre shifts to anaerobic respiration, and lactic acid accumulates: the biochemical basis of fatigue. This is the most common lactic-acid A–R on this chapter (the book’s estimate from past papers, not official figures).',
        ],
        ans: '(a)',
      },
      { t: 'p', html: '<b>4. The Match-the-Column</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two columns to pair: joint type with example, bone with count, protein with function. NEET packs multiple facts into one question.<br><b>The crack:</b> Memorise the five synovial anchors: <b>shoulder/hip = ball-socket, knee/elbow = hinge, atlas–axis = pivot, thumb = saddle, carpals = gliding.</b> These five alone resolve most joint matching questions.',
      },
      {
        t: 'ex',
        tag: 'NEET pattern',
        q: 'Match Column I (type of synovial joint) with Column II (bone involved):<br><br>Column I | Column II<br>A. Ball and socket joint | I. Carpal and metacarpal of thumb<br>B. Hinge joint | II. Humerus and pectoral girdle<br>C. Pivot joint | III. Knee<br>D. Saddle joint | IV. Atlas and axis<br><br>Options:<br>(a) A–I; B–II; C–III; D–IV<br>(b) A–II; B–III; C–IV; D–I<br>(c) A–III; B–I; C–IV; D–II<br>(d) A–IV; B–III; C–II; D–I',
        steps: [
          'Ball-socket = humerus + pectoral girdle (shoulder); Hinge = knee; Pivot = atlas + axis (neck rotation); Saddle = thumb. Option (b) is the only combination with all four correct.',
        ],
        ans: '(b)',
      },
      { t: 'p', html: '<b>5. The Diagram Identification</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A labelled figure of a sarcomere, limb bone, or skeleton region; the student identifies a structure or spots an error.<br><b>The crack:</b> Know the sarcomere picture cold: Z-line, I-band, A-band, H-zone, M-line and what happens to each during contraction. For skeleton diagrams, the two fixed anchors are: <b>humerus = upper arm</b> and <b>femur = thigh</b>; everything else in the limb is distal.',
      },
      {
        t: 'ex',
        tag: 'NEET pattern, text version of a labelled-limb question',
        q: 'Which of the following lists the bones of the human lower limb correctly in order from the hip towards the toes?<br>(a) Femur, tibia and fibula, tarsals, metatarsals, phalanges<br>(b) Femur, tarsals, tibia and fibula, metatarsals, phalanges<br>(c) Tibia and fibula, femur, tarsals, metatarsals, phalanges<br>(d) Femur, tibia and fibula, metatarsals, tarsals, phalanges',
        steps: [
          'The thigh bone (femur) is followed by the two leg bones (tibia and fibula), then the seven tarsals of the ankle, the five metatarsals of the foot and the phalanges of the toes. Option (b) places the ankle bones before the leg bones, option (c) starts below the thigh, and option (d) swaps tarsals and metatarsals. The usual diagram traps (the book’s estimate from past papers, not official figures) are confusing tarsals with carpals and labelling the femur as a leg bone.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: 'These are the specific confusions NEET builds its distractors around. They recur because they work: students fall for them every year (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'mistakes',
        items: [
          '<b>“All movements lead to locomotion” (or the reverse logic)</b><br>• The textbook says: all locomotion is movement, not all movement is locomotion. Every NEET cycle tests this distinction (the book’s estimate from past papers, not official figures).',
          '<b>Striated = voluntary</b><br>• Cardiac is striated and involuntary. Striation reports on filament arrangement; control reports on innervation. Keeping these axes separate is essential for this item (the book’s estimate from past papers, not official figures).',
          '<b>A-band shortens during contraction</b><br>• The A-band (thick filament) never changes length. The I-band and H-zone shrink. This is the single most-repeatable error NEET punishes (the book’s estimate from past papers, not official figures).',
          '<b>G-actin vs F-actin (which is monomer, which polymer?)</b><br>• G = <b>Globular</b> monomer; F = <b>Filamentous</b> polymer. Some distractors reverse these: lock the “Globular = monomer” mnemonic.',
          '<b>Joint-type to example swaps</b><br>• Shoulder = ball-and-socket, not gliding; atlas–axis = pivot, not ball-and-socket; intervertebral = cartilaginous, not fibrous. These are the three joints students most misclassify (the book’s estimate from past papers, not official figures).',
          '<b>Gout vs tetany cause swap</b><br>• Gout = <b>uric acid</b> crystals in joints. Tetany = <b>low Ca<sup>2+</sup></b> in body fluid → spasms. NEET offers one as the distractor for the other routinely (the book’s estimate from past papers, not official figures).',
          '<b>“Bony joint” as a structural class</b><br>• There are only three classes: fibrous, cartilaginous, synovial. “Bony” is not a class: it is a frequent trap in joint-classification questions (the book’s estimate from past papers, not official figures).',
          '<b>Fibrous vs cartilaginous confusion for intervertebral discs</b><br>• Intervertebral discs are cartilaginous (fibrocartilage), allowing slight movement. Students often mark them fibrous because they think “firm = immovable.”',
          '<b>Myasthenia gravis mechanism</b><br>• Autoimmune attack on the <b>neuromuscular junction</b> (ACh receptors). Not a block of myosin sliding. This wrong version is a common distractor.',
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      { t: 'p', html: 'Questions 1–4 are easy, 5–8 are medium, 9–12 are hard.' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>Q1: Easy</b><br>Which type of movement is shown by white blood cells (leucocytes) in the human body?<br>(a) Ciliary movement<br>(b) Amoeboid movement<br>(c) Muscular movement<br>(d) No movement',
            a: '(b): Leucocytes and macrophages crawl through tissues using pseudopodia formed by cytoplasmic streaming driven by the cytoskeleton (microfilaments). This is amoeboid movement, the same mechanism that <i>Amoeba</i> uses.',
          },
          {
            q: '<b>Q2: Easy</b><br>Which one of the following is a feature of red muscle fibres?<br>(a) High amount of sarcoplasmic reticulum<br>(b) Few mitochondria<br>(c) High content of myoglobin<br>(d) Anaerobic in nature',
            a: '(c): Red fibres are rich in myoglobin and mitochondria, giving them their dark colour and enabling aerobic ATP production. They fatigue slowly. The distractors describe white fibres.',
          },
          {
            q: '<b>Q3: Easy</b><br>The joint between adjacent vertebrae is:<br>(a) Fibrous joint<br>(b) Synovial joint<br>(c) Cartilaginous joint<br>(d) Pivot joint',
            a: '(c): Intervertebral discs are fibrocartilage, making these cartilaginous joints that allow slight movement. They are not fibrous (which are immovable sutures), synovial (which have a fluid cavity), or pivot joints (which allow rotation). (Strictly, the articular processes of neighbouring vertebrae also meet at small synovial gliding joints, as Topic 03 says; cartilaginous is the NCERT answer wanted here.)',
          },
          {
            q: '<b>Q4: Easy</b><br>The functional unit of contraction in a skeletal muscle fibre is the:<br>(a) Myofibril<br>(b) Sarcomere<br>(c) Sarcoplasm<br>(d) Sarcolemma',
            a: '(b): The sarcomere is the repeating structural and functional unit of a myofibril, bounded by two Z-lines. It contains the actin and myosin filaments whose sliding produces contraction.',
          },
          {
            q: '<b>Q5: Medium</b><br>During muscle contraction, which of the following does NOT change?<br>(a) I-band<br>(b) H-zone<br>(c) A-band<br>(d) Sarcomere length',
            a: '(c): The A-band equals the fixed length of the thick (myosin) filament and never changes. The I-band and H-zone shrink as thin filaments slide inward, and the sarcomere shortens.',
          },
          {
            q: '<b>Q6: Medium</b><br>Which of the following is the correct statement about cardiac muscle?<br>(a) It is striated and voluntary<br>(b) It is non-striated and involuntary<br>(c) It is striated and involuntary<br>(d) It is spindle-shaped and multinucleate',
            a: '(c): Cardiac muscle is striated (has organised sarcomeres) but involuntary (it beats on its own; the autonomic nervous system only adjusts its rate). It is also branched and uninucleate, with intercalated discs. The option describing it as voluntary is the trap; striation does not imply voluntary control.',
          },
          {
            q: '<b>Q7: Medium</b><br>A patient shows rapid spasms of hand and foot muscles. Blood tests reveal hypocalcaemia. The most likely disorder is:<br>(a) Myasthenia gravis<br>(b) Tetany<br>(c) Gout<br>(d) Muscular dystrophy',
            a: '(b): Low Ca<sup>2+</sup> in body fluid causes tetany: wild, uncontrolled muscle contractions/spasms. Myasthenia gravis causes fatigue and weakness (autoimmune NMJ attack). Gout involves uric acid crystals in joints. Muscular dystrophy is a genetic progressive muscle degeneration. The calcium context points directly to tetany.',
          },
          {
            q: '<b>Q8: Medium</b><br>When Ca<sup>2+</sup> binds to troponin in a skeletal muscle fibre, which protein is shifted along the thin filament so that the myosin-binding sites on actin are uncovered?<br>(a) Myosin<br>(b) Tropomyosin<br>(c) Titin<br>(d) Dystrophin',
            a: '(b): At rest, the troponin–tropomyosin complex masks the myosin-binding sites on actin, with tropomyosin lying along the actin filament over the sites. When Ca<sup>2+</sup> binds troponin (TpC), the complex changes shape and tropomyosin slides off the sites, exposing them. Myosin is the thick-filament protein that binds the exposed sites; titin and dystrophin are structural proteins.',
          },
          {
            q: '<b>Q9: Hard</b><br>Consider the following statements:<br>(i) Cardiac muscle is striated and involuntary.<br>(ii) Smooth muscle lacks actin and myosin.<br>(iii) The sarcoplasmic reticulum stores Ca<sup>2+</sup> for muscle contraction.<br>(iv) In red muscle fibres, fatigue occurs quickly.<br>Which of the above are correct?<br>(a) (i) and (ii) only<br>(b) (i) and (iii) only<br>(c) (ii), (iii) and (iv)<br>(d) (i), (iii) and (iv)',
            a: '(b): (i) is true (cardiac = striated + involuntary). (ii) is false: smooth muscle contains actin and myosin; it simply lacks the regular striated arrangement. (iii) is true (SR releases Ca<sup>2+</sup> on stimulation). (iv) is false: red fibres are fatigue-resistant due to aerobic metabolism and high myoglobin.',
          },
          {
            q: '<b>Q10: Hard</b><br><b>Assertion (A):</b> In a body deprived of ATP after death, muscles become stiff (rigor mortis).<br><b>Reason (R):</b> ATP is required to detach myosin heads from actin, breaking the cross-bridges.<br>The correct option is:<br>(a) Both A and R are true and R is the correct explanation of A<br>(b) Both A and R are true but R is not the correct explanation of A<br>(c) A is true but R is false<br>(d) A is false but R is true',
            a: '(a): A is true (rigor mortis is a real post-mortem phenomenon). R is true and explains A: each cross-bridge cycle requires a new ATP to detach the myosin head from actin. Without ATP, the heads cannot release, cross-bridges accumulate, and the muscle locks in a contracted state: rigor mortis. Students who only remember ATP for the power stroke and forget its detachment role mark R false; that is the trap.',
          },
          {
            q: '<b>Q11: Hard</b><br>Which of the following pairs is correctly matched?<br>(a) Ball-and-socket joint: between vertebrae<br>(b) Fibrous joint: flat skull bones<br>(c) Pivot joint: knee<br>(d) Gliding joint: humerus and glenoid cavity',
            a: '(b): Flat skull bones are joined by immovable fibrous sutures. The other three are all wrong pairings: vertebrae are cartilaginous joints; the knee is a hinge joint; the humerus–glenoid is a ball-and-socket joint. Every distractor is a real joint swapped with the wrong location: exactly the trap NEET builds here.',
          },
          {
            q: '<b>Q12: Hard</b><br>Match Column I with Column II and select the correct option:<br><br>Column I | Column II<br>A. Troponin | I. ATPase activity<br>B. Myosin head | II. Shifted off the actin active sites when Ca<sup>2+</sup> binds troponin<br>C. Tropomyosin | III. Calcium binding<br>D. G-actin | IV. Monomeric form of actin<br><br>Options:<br>(a) A–I, B–II, C–III, D–IV<br>(b) A–III, B–I, C–II, D–IV<br>(c) A–II, B–I, C–III, D–IV<br>(d) A–IV, B–I, C–II, D–III',
            a: '(b): Troponin binds Ca<sup>2+</sup> (TpC subunit); the myosin head carries ATPase activity; tropomyosin is the protein that is shifted off the actin active sites once Ca<sup>2+</sup> is bound to troponin; G-actin is the globular monomer that polymerises into F-actin. Option (b) is the only combination where each pair is correct.',
          },
        ],
      },
    ],
  },
];
