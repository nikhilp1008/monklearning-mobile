import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 17, Locomotion and Movement: Topics 03 and 04 and Additional topics A and B,
 * word for word from the Class 11 Biology Master Reference (pp. 1033–1053).
 *
 * Topic 03 Skeletal System & Joints, pp. 1033–1039 (Figure 4: drawn p. 1036, set at the end of
 * Structural framework and joint classification). Topic 04 Disorders of the Muscular & Skeletal
 * System, pp. 1040–1046 (Figure 5: drawn p. 1043, set at the end of Key distinctions and
 * diagnostic logic). The shared opening of "Chapter 17: Locomotion and Movement, Additional Topics"
 * (p. 1047) heads Additional topic A's Introduction. A Neuromuscular Junction and Signal
 * Transmission, pp. 1047–1050 (its answers end at the top of p. 1050, where Addendum B begins);
 * B Graded Muscle Responses: Twitch, Summation, Tetanus, and Fatigue, pp. 1050–1053 (its answers
 * end on p. 1053, where Addendum C begins).
 *
 * House rules: no em dashes (each is a colon, commas, a bracket or a full stop), no fraction on one
 * line, formulas upright with real sub/superscripts. This chapter's book prints options (a) to (d),
 * kept as printed. "Topic 2" is Topic 02 and so on; "Addendum A–E" is "Additional topic A–E" and
 * "Addendum P" is Additional topic G.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 1033–1039 ─────────────────────────
  {
    n: '03',
    title: 'Skeletal System & Joints',
    kalam: 'A muscle that has nothing rigid to pull against is useless: it would just bunch up like a rubber band with no anchor.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-recall area. NEET commonly asks joint type ↔ example matching (atlas–axis, knee, shoulder, thumb) and bone-group identification (carpals/tarsals, girdle composition), frequently as match-the-column or assertion–reason. CBSE Boards set 2–3 mark questions on the axial vs appendicular division and joint classes. CUET sticks to single-fact bone/joint MCQs (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: 'A muscle that has nothing rigid to pull against is useless: it would just bunch up like a rubber band with no anchor. The <b>skeleton</b> is that rigid framework: the set of hard levers the muscles tug on, the protective casing for soft organs, and the scaffold that holds the whole body upright. But a framework of solid rods alone could not move: a steel bridge does not bend at will. Movement needs the rods to meet at points that allow controlled motion. Those meeting points are the <b>joints</b>. So this topic is really two ideas locked together: the <b>levers</b> (bones) and the <b>hinges</b> (joints) that let them swing.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture the skeleton as the framework of a construction crane. The tall central tower that bears the load is the <b>axial skeleton</b>: your skull, backbone, ribs and sternum, running down the body’s midline. The swinging arm and the wheeled base bolted onto that tower are the <b>appendicular skeleton</b>: your limbs and the girdles (shoulder and hip) that fasten them on. And wherever two parts of the crane must move relative to each other, there is a precisely engineered joint, some welded solid for strength, some pinned for a single swing, some on a ball mount for free rotation. The body uses exactly the same three engineering choices.',
      },
      {
        t: 'p',
        html: 'Two building materials make the framework. <b>Bone</b> is rigid because its matrix is hardened with calcium salts: it forms the load-bearing levers. <b>Cartilage</b> is firm but flexible: it cushions joints, caps the ends of long bones, and forms structures that must bend (like the connection of ribs to the sternum). Both are connective tissues; the difference is simply how hard the matrix is set.',
      },
      {
        t: 'p',
        html: 'Put the two together and locomotion becomes simple to picture: a muscle, anchored to one bone by a <b>tendon</b>, contracts and pulls a second bone so that it swings about the joint between them. Because a muscle can only pull and never push, bones are usually worked by <b>antagonistic pairs</b>: one muscle (a flexor) bends the joint while an opposing muscle (an extensor) straightens it again. The bone is the lever, the joint is the fulcrum, and the muscle supplies the effort. That is why the same three components (bone, joint, muscle) recur in every movement you make.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & what to keep straight:</b><br>• Joints are classified by structure into <b>three</b> classes: fibrous, cartilaginous, synovial. “Bony” is <b>not</b> one of them (a favourite trap).<br>• Not every joint moves. Skull sutures are true joints but are <b>immovable</b>: “joint” does not imply “mobile.”<br>• Don’t confuse the two strap-like connectors: a <b>tendon</b> joins muscle to bone; a <b>ligament</b> joins bone to bone.',
      },

      { t: 'part', title: 'Key structures and definitions' },
      {
        t: 'def',
        term: 'Axial skeleton',
        html: 'the bones of the body’s main axis: the <b>skull, vertebral column, sternum, and ribs</b> (plus the ear ossicles and hyoid). In all, <b>80 bones</b>.',
      },
      {
        t: 'def',
        term: 'Appendicular skeleton',
        html: 'the bones of the <b>limbs and their girdles</b> (pectoral and pelvic). In all, <b>126 bones</b>, giving a grand total of <b>206 bones</b> in the adult human.',
      },
      {
        t: 'def',
        term: 'Girdle',
        html: 'the bony framework that attaches a limb to the axial skeleton: the <b>pectoral (shoulder) girdle</b> = clavicle + scapula; the <b>pelvic (hip) girdle</b> = the fused ilium, ischium and pubis.',
      },
      {
        t: 'def',
        term: 'Glenoid cavity & acetabulum',
        html: 'the sockets of the two ball-and-socket joints: the <b>glenoid cavity</b> of the scapula receives the head of the <b>humerus</b>; the cup-shaped <b>acetabulum</b> of the pelvic girdle receives the head of the <b>femur</b>.',
      },
      {
        t: 'def',
        term: 'Ear ossicles',
        html: 'the tiny bones of the middle ear: <b>malleus, incus, stapes</b> in each ear, six in all (counted within the axial skeleton).',
      },
      {
        t: 'def',
        term: 'Tendon vs ligament',
        html: 'tendon = collagenous cord attaching <b>muscle to bone</b>; ligament = attaches <b>bone to bone</b>.',
      },
      {
        t: 'def',
        term: 'Bone landmark',
        html: 'e.g. the <b>spine</b>, a ridge on the back of the scapula, projects as the flat <b>acromion</b> process.',
      },
      {
        t: 'p',
        html: '<b>Bone and cartilage: the two skeletal tissues.</b> Both are connective tissues; what separates them is how the matrix is set.<br>• <b>Bone</b> has a hard matrix of <b>collagen hardened with calcium phosphate (calcium salts)</b>, making it the rigid, load-bearing material. Beyond support it <b>stores minerals</b> and houses the <b>bone marrow</b>, whose <b>red marrow</b> (in the ends of long bones and in flat bones) manufactures blood cells, a process called <b>haematopoiesis</b>, while <b>yellow marrow</b> stores fat.<br>• <b>Cartilage</b> is firmer-but-flexible, its matrix produced and maintained by its cells, the <b>chondrocytes</b>. It is <b>avascular</b> (no blood vessels), which is why it grows and heals slowly. Three kinds matter here:<br>• <b>Hyaline cartilage</b>: the commonest; caps the articulating ends of long bones and links ribs to the sternum.<br>• <b>Elastic (yellow) cartilage</b>: rich in the protein <b>elastin</b>; found in the <b>outer ear (pinna), eustachian tube and epiglottis</b>.<br>• <b>Fibrocartilage</b>: the toughest; forms the <b>intervertebral discs</b> that cushion the backbone.',
      },

      { t: 'part', title: 'Structural framework and joint classification' },
      { t: 'p', html: '<b>A. The skeleton, region by region</b>' },
      {
        t: 'p',
        html: 'Before the catalogue, hold the <b>five jobs</b> the skeleton does: the bones map onto them. It (1) <b>supports</b> the body as a framework, (2) <b>protects</b> soft organs (the skull shields the brain, the rib cage the heart and lungs, and the floating ribs lie over the kidneys), (3) enables <b>movement</b> by giving muscles rigid levers to pull against, (4) <b>stores minerals</b> such as calcium, and (5) <b>manufactures blood cells</b> in red bone marrow. Every region below serves one or more of these roles.',
      },
      { t: 'p', html: 'Organise the 206 bones top-down; never memorise them as a flat list.' },
      {
        t: 'p',
        html: '<b>Axial skeleton (the central axis):</b><br>• <b>Skull</b>: 22 bones (8 cranial + 14 facial). The <b>only freely movable skull bone is the mandible</b> (lower jaw). Flat skull bones meet at immovable <b>sutures</b>. (The ear ossicles and the hyoid, which NCERT also places with the skull, are movable too; the 22 here are the cranial and facial bones.)<br>• <b>Vertebral column</b>, 26 vertebrae in the adult: 7 <b>cervical</b>, 12 <b>thoracic</b>, 5 <b>lumbar</b>, then the <b>sacrum</b> (5 sacral vertebrae fused into one) and the <b>coccyx</b> (4 coccygeal vertebrae fused into one). The first two are specialised: the <b>atlas (C1)</b> lacks a centrum and carries the skull; the <b>axis (C2)</b> lets the head rotate. Joints between successive vertebrae are <b>cartilaginous</b>. The column as a whole protects the <b>spinal cord</b> and bears the body’s weight; alongside the cartilaginous joints between the vertebral bodies, the articular processes (<b>zygapophyses</b>) of adjacent vertebrae meet at small <b>gliding joints</b>.<br>• <b>Sternum & ribs</b>: a single breastbone (<b>sternum</b>) and <b>12 pairs of ribs</b>. Ribs 1–7 are <b>true ribs</b>, joined to the sternum directly; ribs 8–10 are <b>false ribs</b>; ribs 11–12 are <b>floating ribs</b>, not connected to the sternum at all and lying near the kidneys. True ribs reach the sternum each by their own <b>costal cartilage</b>, while false ribs attach indirectly, joining onto the costal cartilage of the rib above.<br>• With the 6 ear ossicles and the hyoid, these make 22 + 6 + 1 + 26 + 1 + 24 = 80.',
      },
      {
        t: 'p',
        html: '<b>Appendicular skeleton (limbs + girdles):</b><br>• <b>Pectoral girdle & upper limb</b>: clavicle + scapula anchor the arm; the scapula is a large triangular flat bone whose ridge (the spine) projects as the <b>acromion</b> process. The long bones are the <b>humerus</b> (upper arm) and <b>radius + ulna</b> (forearm), continuing to the <b>carpals (8 wrist bones)</b>, <b>metacarpals (palm)</b> and <b>phalanges (fingers)</b>.<br>• <b>Pelvic girdle & lower limb</b>: the fused ilium + ischium + pubis form each hip bone. The long bones are the <b>femur</b> (thigh) and <b>tibia + fibula</b> (shank), with the <b>patella</b> (kneecap), the <b>tarsals (7 ankle bones)</b>, <b>metatarsals (sole)</b> and <b>phalanges (toes)</b>.',
      },
      {
        t: 'p',
        html: '(Memory hook: carpals = wrist = 8; tarsals = ankle = 7. The wrist has one more bone than the ankle.)',
      },
      { t: 'p', html: '<b>B. Joints: classified by structure</b>' },
      {
        t: 'proc',
        title: 'Every joint falls into exactly three structural classes, by how the bones are held and how much they move:',
        steps: [
          '<b>Fibrous joints</b>: bones bound by fibrous tissue; essentially <b>immovable</b>. Example: the <b>sutures</b> between the flat bones of the skull, such as the joint between the two <b>parietal</b> bones.',
          '<b>Cartilaginous joints</b>: bones joined by cartilage; <b>slightly movable</b>. Examples: the joint between <b>sternum and ribs</b>, the <b>intervertebral discs</b> (fibrocartilage) between vertebral bodies, and the cartilage in the <b>growth regions of immature long bones</b>, a temporary <b>synchondrosis</b> that ossifies when growth ends.',
          '<b>Synovial joints</b>: the <b>freely movable</b> joints, defined by a fluid-filled <b>synovial cavity</b> between the articulating surfaces, lubricated by <b>synovial fluid</b>. The bone ends within are capped by smooth <b>articular cartilage</b> (hyaline) that reduces friction, and the whole joint is bound by ligaments. These split into subtypes:',
        ],
      },
      {
        t: 'table',
        title: null,
        head: ['Synovial subtype', 'What it allows', 'Classic example'],
        rows: [
          ['<b>Ball-and-socket</b>', 'Movement in all directions', '<b>Shoulder</b> (humerus + glenoid), <b>hip</b> (femur + acetabulum)'],
          ['<b>Hinge</b>', 'Back-and-forth in one plane', '<b>Knee</b>, <b>elbow</b>'],
          ['<b>Pivot</b>', 'Rotation about an axis', '<b>Atlas–axis</b> (turning the head)'],
          ['<b>Gliding</b>', 'Sliding over flat surfaces', 'Between the <b>carpals</b> (and tarsals)'],
          ['<b>Saddle</b>', 'Two-plane movement', '<b>Carpal–metacarpal of the thumb</b>'],
        ],
      },
      {
        t: 'p',
        html: 'Two special terms: a <b>symphysis</b> is a cartilaginous joint of <b>fibrocartilage</b> (e.g. pubic symphysis); a <b>synchondrosis</b> is a cartilaginous joint of hyaline cartilage; in the <b>growth plates</b> of children it is temporary and ossifies when growth ends.',
      },
      {
        t: 'p',
        html: '<b>How the framework actually moves.</b> Bones do nothing on their own: movement appears only where a <b>synovial joint</b> permits it and a muscle spans it. A skeletal muscle is tied across the joint by tendons at both ends: a fixed end (the origin) and a moving end (the insertion). When the muscle shortens it draws the insertion toward the origin, rotating the bone about the joint; the antagonistic muscle reverses the action. The freely movable synovial joints are therefore where almost all visible body movement is actually generated.',
      },
      { t: 'fig', id: 'b11-17-fig-17.4' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Classify & justify.</b> State the structural class and mobility of (i) the joint between flat skull bones, (ii) the joint between the sternum and a rib, and (iii) the shoulder joint.',
        steps: [
          '<b>Model answer:</b> (i) <b>Fibrous</b> joint (a suture), immovable, providing protection for the brain. (ii) <b>Cartilaginous</b> joint, slightly movable, allowing the rib cage to expand during breathing. (iii) <b>Synovial</b> (ball-and-socket) joint, freely movable in all directions, formed where the head of the humerus sits in the glenoid cavity. (Concluding line examiners reward: mobility increases from fibrous → cartilaginous → synovial.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Match the column.</b> Match the joint with its location.<br><br>Column I | Column II<br>(P) Pivot | (1) Knee<br>(Q) Hinge | (2) Carpal–metacarpal of thumb<br>(R) Saddle | (3) Between carpals<br>(S) Gliding | (4) Atlas and axis',
        steps: [
          '<b>Speed cue:</b> “rotation of the head = pivot = atlas–axis” and “thumb = saddle” are the two anchors; the remaining pair sorts itself (knee bends = hinge; carpals slide = gliding).',
        ],
        ans: 'P→4, Q→1, R→2, S→3.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Single best answer + elimination.</b> Which one is correctly matched? <b>(a)</b> Ball-and-socket: between vertebrae <b>(b)</b> Fibrous joint: flat skull bones <b>(c)</b> Pivot joint: knee <b>(d)</b> Gliding joint: head of humerus and glenoid cavity',
        steps: [
          '<b>Reasoning:</b> Flat skull bones are united by immovable <b>fibrous</b> sutures → <b>(b)</b>.<br>• (a) intervertebral joints are <b>cartilaginous</b>, not ball-and-socket.<br>• (c) the knee is a <b>hinge</b>, not a pivot.<br>• (d) the humerus–glenoid joint is a <b>ball-and-socket</b>, not gliding, a classic swap of socket joints.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: 'Assertion (A): Floating ribs are not counted among the bones that attach to the sternum. Reason (R): The 11th and 12th pairs of ribs are connected dorsally to the vertebral column but remain free at their ventral ends. Options: <b>(a)</b> Both true, R explains A; <b>(b)</b> Both true, R doesn’t explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          '<b>Solution (a).</b> A is true. R is true and explains it: ribs 11 and 12 join the vertebral column behind but, unlike true ribs, have no ventral attachment to the sternum, which is exactly why they are termed “floating.” Students who recall only “12 pairs of ribs” without the true/false/floating split tend to mismark R.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Distinguish the axial from the appendicular skeleton, giving two examples of bones in each.',
            a: 'Axial = central axis (e.g. skull, ribs/sternum, vertebral column); appendicular = limbs + girdles (e.g. humerus, femur, scapula, pelvic bones).',
          },
          {
            q: '[CUET] The cup-shaped socket that receives the head of the femur is the ______; the socket that receives the head of the humerus is the ______.',
            a: 'acetabulum; glenoid cavity.',
          },
          {
            q: '[NEET] Name the type of joint found (i) between the atlas and axis and (ii) between the carpal and metacarpal of the thumb.',
            a: '(i) pivot joint (ii) saddle joint.',
          },
          {
            q: '[NEET] How many bones are there in (i) the wrist and (ii) the ankle?',
            a: '(i) 8 carpals (ii) 7 tarsals.',
          },
          {
            q: '[NEET A-R] A: The mandible is described as the only movable bone of the skull. R: All other skull bones are united by immovable fibrous sutures. Evaluate A, R, and whether R explains A. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'A true, R true, R is the correct explanation of A. (R holds for the 22 cranial and facial bones; the hyoid and the ear ossicles are not joined by sutures.)',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Joints are structurally classified into all of the following EXCEPT:',
        opts: [
          { label: 'fibrous', nudge: null },
          { label: 'cartilaginous', nudge: null },
          { label: 'synovial', nudge: null },
          { label: 'bony', nudge: null },
        ],
        correct: 3,
        solution: 'The three structural classes are fibrous, cartilaginous and synovial; “bony” is not a recognised class: it is inserted purely as the trap, and it catches students who reason “bones meet, so it must be a bony joint.”',
      },
      {
        t: 'mcq',
        q: 'The pivot joint is exemplified by the articulation between:',
        opts: [
          { label: 'humerus and glenoid cavity', nudge: '<b>(a)</b> and <b>(c)</b> are ball-and-socket.' },
          { label: 'atlas and axis', nudge: null },
          { label: 'femur and acetabulum', nudge: '<b>(a)</b> and <b>(c)</b> are ball-and-socket.' },
          { label: 'carpals', nudge: '<b>(d)</b> is gliding.' },
        ],
        correct: 1,
        solution: 'Rotation of the head occurs at the atlas–axis pivot. All distractors are real joints placed to test precise type-to-location memory.',
      },
      {
        t: 'mcq',
        q: 'Which bones make up the pectoral girdle?',
        opts: [
          { label: 'ilium and ischium', nudge: '<b>(a)</b> are pelvic-girdle bones.' },
          { label: 'clavicle and scapula', nudge: null },
          { label: 'humerus and ulna', nudge: '<b>(c)</b> and <b>(d)</b> are limb long bones, not girdle bones.' },
          { label: 'femur and patella', nudge: '<b>(c)</b> and <b>(d)</b> are limb long bones, not girdle bones.' },
        ],
        correct: 1,
        solution: 'The pectoral (shoulder) girdle is the clavicle + scapula.',
      },
      {
        t: 'mcq',
        q: 'The joint between the sternum and the ribs is:',
        opts: [
          { label: 'fibrous', nudge: '<b>(a)</b>/<b>(b)</b>/<b>(d)</b> over- or under-state the mobility of this junction.' },
          { label: 'synovial', nudge: '<b>(a)</b>/<b>(b)</b>/<b>(d)</b> over- or under-state the mobility of this junction.' },
          { label: 'cartilaginous', nudge: null },
          { label: 'ball-and-socket', nudge: '<b>(a)</b>/<b>(b)</b>/<b>(d)</b> over- or under-state the mobility of this junction.' },
        ],
        correct: 2,
        solution: 'Sterno-costal joints are cartilaginous, allowing the slight rib movement needed for breathing. (Strictly, the costal cartilages of ribs 2 to 7 also meet the sternum at small synovial joints; cartilaginous is the answer wanted here.)',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Adding a “bony” joint class.</b> There are only three structural classes: fibrous, cartilaginous, synovial.',
          '<b>Assuming every joint moves.</b> Skull sutures are immovable fibrous joints.',
          '<b>Swapping ball-and-socket with hinge.</b> Shoulder/hip = ball-and-socket (all-direction); knee/elbow = hinge (one plane).',
          '<b>Tendon vs ligament.</b> Tendon = muscle→bone; ligament = bone→bone.',
          '<b>Forgetting the rib split.</b> 12 pairs total = 7 true + 3 false + 2 floating.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For joint MCQs, memorise just the <b>five synovial anchors</b>: shoulder/hip = ball-socket, knee/elbow = hinge, atlas-axis = pivot, thumb = saddle, carpals = gliding. Almost every NEET/CUET joint question is one of these five dressed in different wording (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Total 206 bones = 80 axial + 126 appendicular.</b>', note: '' },
          { f: '<b>Axial (80):</b> skull 22 (8 cranial + 14 facial; only the mandible is movable) + 6 ear ossicles (malleus, incus, stapes in each ear) + hyoid 1 + vertebral column 26 + sternum 1 + ribs 24 (12 pairs).', note: '' },
          { f: '<b>Vertebral formula (26):</b> 7 cervical, 12 thoracic, 5 lumbar, 1 sacrum (5 fused), 1 coccyx (4 fused); atlas (C1) + axis (C2) special.', note: '' },
          { f: '<b>Ribs:</b> 12 pairs = 7 true (to sternum) + 3 false + 2 floating (free, near kidneys).', note: '' },
          { f: '<b>Appendicular:</b> pectoral girdle (clavicle + scapula; glenoid→humerus) + upper limb; pelvic girdle (ilium + ischium + pubis; acetabulum→femur) + lower limb. <b>Carpals = 8, tarsals = 7.</b>', note: '' },
          { f: '<b>Joints (3 structural classes):</b> fibrous (skull sutures, immovable) · cartilaginous (sternum–ribs, intervertebral, slightly movable) · synovial (freely movable, synovial fluid).', note: '' },
          { f: '<b>Synovial subtypes:</b> ball-socket (shoulder/hip) · hinge (knee/elbow) · pivot (atlas–axis) · gliding (carpals) · saddle (thumb).', note: '' },
          { f: '<b>Connectors:</b> tendon = muscle→bone; ligament = bone→bone.', note: '' },
        ],
        aids: [
          '<b>Mnemonics:</b> “joints are F-C-S, <b>never bony</b>” · “wris<b>t</b> 8 > ankl<b>e</b> 7” · “thumb saddles up, head pivots.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 1040–1046 ─────────────────────────
  {
    n: '04',
    title: 'Disorders of the Muscular & Skeletal System',
    kalam: 'The whole chapter has been about a partnership: muscle supplying force, bone supplying levers, joints supplying pivots.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A rewarding part of the chapter for NEET. Almost every year there is a direct disorder ↔ cause match or an assertion–reason item (e.g. tetany & calcium, gout & uric acid, myasthenia & autoimmunity). CUET asks single-fact recall. CBSE Boards set a 2–3 mark “name the disorder / state its cause.” These are pure-recall marks: do not lose them (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: 'The whole chapter has been about a partnership: muscle supplying force, bone supplying levers, joints supplying pivots. This final topic asks the obvious next question: what happens when a part of that partnership fails? The six disorders you must know are simply the common ways the system breaks down, and the cleanest way to hold them is to first ask <b>which side of the partnership is affected</b>: the <b>muscle side</b> or the <b>bone/joint side</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine a crane (the body) again. Things can go wrong with the cables and motors (the muscles and the signals that drive them), or with the steel frame and its hinges (the bones and joints). Three of our disorders are “motor-side” problems: <b>myasthenia gravis, muscular dystrophy, tetany</b>; and three are “frame-side” problems: <b>arthritis, gout, osteoporosis</b>. Sort a disorder into the right side first, and the specific cause usually follows.',
      },
      {
        t: 'p',
        html: 'On the <b>muscle side</b>, the failures differ by where the fault lies. The signal can fail to cross to the muscle (<b>myasthenia gravis</b>: the body’s own immune system attacks the junction). The muscle tissue itself can waste away from a faulty gene (<b>muscular dystrophy</b>). Or the muscle can be over-excited and seize up because its calcium chemistry is off (<b>tetany</b>: too little calcium). On the <b>bone/joint side</b>, the failures are about inflammation or loss of substance: joints become inflamed generally (<b>arthritis</b>) or specifically from uric acid crystals (<b>gout</b>), and bone quietly loses its mass and strength (<b>osteoporosis</b>). The unifying lesson is that the locomotory system can be undermined at any of its links (the signal to the muscle, the muscle tissue, the muscle’s chemistry, the joint, or the bone), and each common disorder is just the named failure of one of those links. That is why sorting a disorder by which link it attacks is so much more reliable than rote-listing six names.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & what to keep straight:</b><br>• Two definitions are routinely misstated by many candidates. <b>Muscular dystrophy is genetic</b>, a progressive degeneration of muscle: it is <b>not</b> “age-related shortening.” And <b>myasthenia gravis acts at the neuromuscular junction</b> (an autoimmune attack on the receptors): it does <b>not</b> “stop myosin from sliding.” Learn the correct versions; the wrong ones are common distractors.<br>• “Arthritis” is an umbrella term (inflammation of joints); <b>gout is one specific type</b> of it, caused by uric acid. So gout is a joint inflammation, but not all joint inflammation is gout.<br>• Osteoporosis is a <b>bone</b> disorder (loss of mass), not a joint disorder: don’t file it with arthritis/gout.',
      },

      { t: 'part', title: 'Key definitions and diagnostic features' },
      {
        t: 'p',
        html: 'Memorise each disorder as a <b>cause → hallmark</b> pair. That single pairing answers almost every exam item (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'table',
        title: null,
        head: ['Disorder', 'Side', 'Cause', 'Hallmark feature'],
        rows: [
          ['<b>Myasthenia gravis</b>', 'Muscle (signal)', '<b>Autoimmune</b> attack on the <b>neuromuscular junction</b> (ACh receptors)', 'Fatigue, weakening and paralysis of <b>skeletal</b> muscle'],
          ['<b>Muscular dystrophy</b>', 'Muscle (tissue)', '<b>Genetic</b> (inherited) defect', '<b>Progressive degeneration</b> of skeletal muscle'],
          ['<b>Tetany</b>', 'Muscle (excitability)', '<b>Low Ca<sup>2+</sup></b> in body fluid', 'Rapid <b>spasms</b> (wild contractions) of muscles'],
          ['<b>Arthritis</b>', 'Joint', 'Inflammation of joints', 'Joint pain, stiffness, swelling'],
          ['<b>Gout</b>', 'Joint', 'Accumulation of <b>uric acid crystals</b> in joints', 'Inflammation of the affected joint(s)'],
          ['<b>Osteoporosis</b>', 'Bone', 'Age-related; <b>decreased bone mass</b>; often <b>low estrogen</b>', 'Brittle bones, <b>increased risk of fractures</b>'],
        ],
      },
      { t: 'p', html: '<b>Definitions (state these as written):</b>' },
      {
        t: 'def',
        term: 'Myasthenia gravis',
        html: 'an <b>autoimmune</b> disorder in which antibodies attack the <b>acetylcholine receptors</b> at the neuromuscular junction, impairing transmission of the nerve signal to the muscle and causing <b>fatigue, weakening and paralysis</b> of skeletal muscles.',
      },
      {
        t: 'def',
        term: 'Muscular dystrophy',
        html: 'a group of <b>genetically inherited</b> disorders marked by <b>progressive degeneration and weakening</b> of skeletal muscle (in Duchenne dystrophy, a defective muscle protein, dystrophin).',
      },
      {
        t: 'def',
        term: 'Tetany',
        html: '<b>rapid spasms</b> (wild, uncontrolled contractions) in muscles caused by <b>low Ca<sup>2+</sup> in the body fluid</b> (hypocalcaemia), often following parathyroid malfunction.',
      },
      {
        t: 'def',
        term: 'Arthritis',
        html: '<b>inflammation of joints</b>, producing pain, swelling and stiffness.',
      },
      {
        t: 'def',
        term: 'Gout',
        html: '<b>inflammation of joints due to the accumulation of uric acid crystals</b> within them.',
      },
      {
        t: 'def',
        term: 'Osteoporosis',
        html: 'an <b>age-related</b> disorder characterised by <b>decreased bone mass and mineral density</b> and an <b>increased risk of fractures</b>; a <b>decreased level of estrogen</b> (as after menopause) is a common cause.',
      },
      {
        t: 'p',
        html: '<b>How they present (the clinical picture).</b> Beyond the textbook cause, it helps to picture each one, because NEET often frames disorders through symptoms. <b>Myasthenia gravis</b> often shows first as <b>drooping eyelids and difficulty in swallowing or speaking</b>, with weakness that worsens through activity and eases with rest. <b>Duchenne muscular dystrophy</b> typically appears in <b>childhood</b>, with limb muscles that grow progressively weaker over years. <b>Tetany</b> produces visible <b>cramping spasms</b>, classically of the hands and feet (carpopedal spasm). <b>Arthritis</b> and <b>gout</b> present as <b>painful, swollen, stiff joints</b>, gout famously striking the base of the big toe. <b>Osteoporosis</b>, by contrast, is often <b>silent until a fracture</b> occurs from a minor fall, which is precisely what makes it dangerous in the elderly.',
      },

      { t: 'part', title: 'Key distinctions and diagnostic logic' },
      {
        t: 'p',
        html: 'The exam rarely asks a disorder in isolation; it asks you to <b>tell two confusable ones apart</b>. Here is the discriminating logic for every pair that gets tested.',
      },
      {
        t: 'p',
        html: '<b>Muscle-side trio: what is the site of the fault?</b><br>• <b>Myasthenia gravis vs muscular dystrophy.</b> Both weaken skeletal muscle, so students confuse them, but the fault site differs. In <b>myasthenia</b>, the muscle tissue is initially healthy; the problem is the <b>signal failing to arrive</b> because the immune system has attacked the <b>junction</b> (autoimmune). In <b>dystrophy</b>, the <b>muscle tissue itself degenerates</b> because of a <b>faulty gene</b>. Test cue: autoimmune + junction → myasthenia; genetic + degeneration → dystrophy.<br>• <b>Tetany stands apart</b>: it is not weakness or wasting but the opposite, <b>over-contraction (spasms)</b>, and its cause is purely chemical, <b>low calcium</b>. If a question mentions “spasms” or “low Ca<sup>2+</sup>,” it points to tetany.',
      },
      {
        t: 'p',
        html: '<b>Bone/joint-side trio: inflammation or loss of mass?</b><br>• <b>Arthritis vs gout.</b> Both are <b>joint inflammation</b>, so the discriminator is the <b>cause</b>. Plain <b>arthritis</b> is the general inflammation; <b>gout</b> is the specific case caused by <b>uric acid crystal</b> deposition. Test cue: see “uric acid” → gout; no specific cause named → arthritis.<br>• <b>Osteoporosis vs the joint disorders.</b> Osteoporosis is <b>not</b> a joint problem at all; it is a <b>bone</b> problem: the bone loses mass and becomes fracture-prone, with no joint inflammation. Test cue: “decreased bone mass / fractures / low estrogen” → osteoporosis.',
      },
      {
        t: 'p',
        html: '<b>The calcium thread (a linking question worth expecting).</b> Calcium connects two disorders in opposite ways, and examiners exploit this. <b>Low Ca<sup>2+</sup> in body fluid</b> causes <b>tetany</b> (muscle spasms). Separately, loss of <b>calcium from bone</b> (with low estrogen and ageing) underlies <b>osteoporosis</b> (weak bones). Same element, two very different disorders: one about muscle excitability, one about bone mass. Keeping that straight defuses most calcium-themed assertion–reason traps.',
      },
      {
        t: 'p',
        html: '<b>One-line discriminators to lock in:</b><br>• Autoimmune, junction → <b>myasthenia gravis</b><br>• Genetic, muscle degenerates → <b>muscular dystrophy</b><br>• Low calcium, spasms → <b>tetany</b><br>• Joint inflammation, no cause named → <b>arthritis</b><br>• Joint inflammation, uric acid → <b>gout</b><br>• Bone mass lost, fractures, low estrogen → <b>osteoporosis</b>',
      },
      {
        t: 'p',
        html: '<b>A note on arthritis subtypes.</b> “Arthritis” is an umbrella covering several joint inflammations that exams sometimes separate. <b>Osteoarthritis</b> is the wear-and-tear form, in which the articular cartilage capping the bone ends gradually erodes with age and use. <b>Rheumatoid arthritis</b> is an <b>autoimmune</b> form, in which the immune system attacks the joint lining, making it, like myasthenia gravis, an autoimmune disorder, but of joints rather than the neuromuscular junction. <b>Gouty arthritis</b> is the uric-acid form we simply call gout. So gout and rheumatoid arthritis are both “arthritis,” yet arise from entirely different causes: a distinction worth holding.',
      },
      {
        t: 'p',
        html: '<b>A name-trap worth pre-empting: osteoporosis vs osteoarthritis.</b> The near-identical names trip up many students. <b>Osteoporosis</b> = porous bone, a loss of <b>bone mass</b> (a bone disorder). <b>Osteoarthritis</b> = wear and tear of the articular cartilage of a <b>joint</b> (a degenerative type of arthritis). Despite the shared “osteo-,” they sit in opposite categories: one is about bone substance, the other about a joint.',
      },
      {
        t: 'p',
        html: '<b>Prevention and management: the practical angle.</b> Several of these disorders are partly preventable, which makes them likely “application” questions. <b>Osteoporosis</b> risk is reduced by adequate <b>calcium and vitamin D</b>, weight-bearing exercise, and (in post-menopausal women) addressing the <b>estrogen</b> decline. <b>Gout</b> is managed by lowering blood <b>uric acid</b> through diet and medication. <b>Tetany</b> is corrected by restoring <b>calcium</b> levels in the body fluid. <b>Myasthenia gravis</b> and <b>muscular dystrophy</b>, being autoimmune and genetic respectively, are far harder to prevent, and their mechanisms explain why: an immune response can be dampened with drugs, but a faulty inherited gene cannot easily be rewritten. The general principle the syllabus wants you to take away is that knowing a disorder’s <b>cause</b> immediately suggests its line of management: restore what is deficient (calcium, estrogen), remove what is in excess (uric acid), or modulate the process that has gone wrong (the autoimmune attack).',
      },
      {
        t: 'p',
        html: '<b>The chapter comes full circle.</b> Notice how each disorder maps onto a structure you have already studied. <b>Myasthenia gravis</b> strikes the <b>neuromuscular junction</b>, the very synapse where Topic 02 began the contraction cycle. <b>Tetany</b> is the other side of the calcium story Topic 02 told: there, Ca<sup>2+</sup> released inside the fibre triggers contraction; in tetany it is the low Ca<sup>2+</sup> in the body fluid that makes nerve and muscle membranes over-excitable, so the muscle fires into spasm. <b>Muscular dystrophy</b> degrades the <b>contractile muscle tissue</b> built in Topic 01. <b>Arthritis</b> and <b>gout</b> inflame the <b>synovial joints</b> classified in Topic 03, and <b>osteoporosis</b> weakens the <b>bone</b> whose matrix and marrow you met there. So this final topic is not a disconnected list to cram: it is the same locomotory machinery, viewed through what goes wrong. Understanding the normal structure is therefore the fastest route to remembering the disorder.',
      },
      { t: 'fig', id: 'b11-17-fig-17.5' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Cause & effect.</b> Name the disorder in each case and state its cause: (i) an elderly woman with reduced bone mass and frequent fractures; (ii) rapid muscle spasms in a patient with low blood calcium.',
        steps: [
          '<b>Model answer:</b> (i) <b>Osteoporosis</b>: an age-related decrease in bone mass and density, commonly associated with a <b>decreased level of estrogen</b>, leading to fragile, fracture-prone bones. (ii) <b>Tetany</b>: rapid muscle spasms caused by a <b>fall in Ca<sup>2+</sup> levels in the body fluid</b>. (Concluding line examiners reward: both involve calcium, but in osteoporosis it is calcium in the bone, in tetany it is calcium in the body fluid.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Match the column.</b> Match the disorder with its cause.<br><br>Column I | Column II<br>(P) Gout | (1) Autoimmune attack on the NMJ<br>(Q) Myasthenia gravis | (2) Genetic muscle degeneration<br>(R) Muscular dystrophy | (3) Uric acid crystal accumulation<br>(S) Tetany | (4) Low Ca<sup>2+</sup> in body fluid',
        steps: [
          '<b>Speed cue:</b> match on the unique keyword: “uric acid” (gout), “autoimmune/junction” (myasthenia), “genetic” (dystrophy), “low calcium” (tetany).',
        ],
        ans: 'P→3, Q→1, R→2, S→4.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Single best answer + elimination.</b> Which disorder is correctly paired with its cause? <b>(a)</b> Gout: low calcium in body fluid <b>(b)</b> Tetany: uric acid crystal deposition <b>(c)</b> Myasthenia gravis: autoimmune disorder affecting the neuromuscular junction <b>(d)</b> Muscular dystrophy: inflammation of joints',
        steps: [
          '<b>Reasoning:</b> Myasthenia gravis is an autoimmune attack on the NMJ → <b>(c)</b>.<br>• (a) swaps gout’s cause (uric acid) for tetany’s (low Ca<sup>2+</sup>).<br>• (b) swaps tetany’s cause (low Ca<sup>2+</sup>) for gout’s (uric acid).<br>• (d) assigns a joint-inflammation cause to a genetic muscle disease, the “frame-side vs motor-side” mix-up.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: 'Assertion (A): Myasthenia gravis leads to fatigue and progressive weakening of skeletal muscles. Reason (R): It is an autoimmune disorder in which transmission of the nerve impulse across the neuromuscular junction is impaired. Options: <b>(a)</b> Both true, R explains A; <b>(b)</b> Both true, R doesn’t explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          '<b>Solution (a).</b> A is true. R is true and explains it: by attacking the junction where the nerve signals the muscle, the autoimmune process blocks the signal from getting through, so the muscle cannot be activated properly, producing exactly the fatigue and weakening of A. Students who wrongly believe myasthenia “blocks myosin sliding” mismark R as false and choose (c).',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State the cause and one effect of (i) gout and (ii) muscular dystrophy.',
            a: '(i) Gout: uric acid crystal accumulation in joints; effect: joint inflammation/pain. (ii) Muscular dystrophy: genetic defect; effect: progressive muscle degeneration/weakness.',
          },
          {
            q: '[CUET] The disorder caused by accumulation of uric acid crystals in joints is ______; the one caused by low Ca<sup>2+</sup> in body fluid is ______.',
            a: 'gout; tetany.',
          },
          {
            q: '[NEET] Classify the following as muscle-side or bone/joint-side disorders: tetany, osteoporosis, myasthenia gravis, gout.',
            a: 'Muscle-side: tetany, myasthenia gravis; bone/joint-side: osteoporosis, gout.',
          },
          {
            q: '[NEET] Name the disorder that is autoimmune and the one that is primarily genetic.',
            a: 'Autoimmune: myasthenia gravis; genetic: muscular dystrophy.',
          },
          {
            q: '[NEET A-R] A: Osteoporosis increases the risk of bone fractures. R: It is characterised by a decrease in bone mass, commonly linked to decreased estrogen levels. Evaluate A, R, and whether R explains A. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'A true, R true, R is the correct explanation of A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Accumulation of uric acid crystals in the joints causes:',
        opts: [
          { label: 'osteoporosis', nudge: '<b>(a)</b> is bone-mass loss.' },
          { label: 'gout', nudge: null },
          { label: 'tetany', nudge: '<b>(c)</b> is a low-Ca spasm.' },
          { label: 'muscular dystrophy', nudge: '<b>(d)</b> is genetic muscle degeneration.' },
        ],
        correct: 1,
        solution: 'Uric acid crystal deposition inflames the joint: that is gout.',
      },
      {
        t: 'mcq',
        q: 'Myasthenia gravis is best described as:',
        opts: [
          { label: 'a genetic muscle-wasting disease', nudge: '<b>(a)</b> describes dystrophy.' },
          { label: 'inflammation of joints', nudge: '<b>(b)</b> describes arthritis.' },
          { label: 'an autoimmune disorder affecting the neuromuscular junction', nudge: null },
          { label: 'low-calcium muscle spasms', nudge: '<b>(d)</b> describes tetany.' },
        ],
        correct: 2,
        solution: 'Antibodies attack the NMJ, impairing the nerve-to-muscle signal. The three wrong options are the three classic distractors.',
      },
      {
        t: 'mcq',
        q: 'Rapid muscle spasms due to a fall in calcium levels characterise:',
        opts: [
          { label: 'tetany', nudge: null },
          { label: 'gout', nudge: 'The others are joint/bone disorders or have different causes.' },
          { label: 'arthritis', nudge: 'The others are joint/bone disorders or have different causes.' },
          { label: 'osteoporosis', nudge: 'The others are joint/bone disorders or have different causes.' },
        ],
        correct: 0,
        solution: 'Low Ca<sup>2+</sup> over-excites muscle, causing spasms (tetany).',
      },
      {
        t: 'mcq',
        q: 'Which of the following is a primarily genetic disorder of muscle?',
        opts: [
          { label: 'Gout', nudge: '<b>(a)</b> is uric acid.' },
          { label: 'Myasthenia gravis', nudge: '<b>(b)</b> is autoimmune.' },
          { label: 'Muscular dystrophy', nudge: null },
          { label: 'Osteoporosis', nudge: '<b>(d)</b> is age/estrogen.' },
        ],
        correct: 2,
        solution: 'Muscular dystrophy is inherited and progressive. None of the other options is a primarily genetic muscle disease.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Swapping gout and tetany causes.</b> Gout = <b>uric acid</b> (joints); tetany = <b>low calcium</b> (muscle spasms). A frequently tested swap (the book’s estimate from past papers, not official figures).',
          '<b>Believing the wrong textbook definitions.</b> Muscular dystrophy is <b>genetic degeneration</b>, not “age-related shortening”; myasthenia acts at the <b>NMJ (autoimmune)</b>, not on myosin sliding.',
          '<b>Filing osteoporosis with arthritis/gout.</b> It is a <b>bone</b> (mass-loss) disorder, not a joint-inflammation one.',
          '<b>Confusing the two calcium disorders.</b> Low blood Ca<sup>2+</sup> → tetany; loss of bone Ca → osteoporosis.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any disorder MCQ, run the two-step filter: muscle side or bone/joint side?, then what is the unique keyword (autoimmune, genetic, low-Ca, uric acid, low-estrogen). Most standard questions collapse to one keyword.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Muscle-side disorders: Myasthenia gravis</b> (autoimmune, NMJ → fatigue/paralysis) · <b>Muscular dystrophy</b> (genetic, progressive muscle degeneration) · <b>Tetany</b> (low Ca<sup>2+</sup> → muscle spasms).', note: '' },
          { f: '<b>Bone/joint-side disorders: Arthritis</b> (joint inflammation) · <b>Gout</b> (uric acid crystals → joint inflammation) · <b>Osteoporosis</b> (↓ bone mass, ↑ fractures, ↓ estrogen).', note: '' },
          { f: '<b>The calcium thread:</b> low body-fluid Ca<sup>2+</sup> → tetany; loss of bone Ca → osteoporosis.', note: '' },
          { f: '<b>Gout ⊂ arthritis:</b> gout is joint inflammation specifically from uric acid.', note: '' },
          { f: '<b>Corrected myths:</b> dystrophy = genetic (not “ageing/shortening”); myasthenia = NMJ autoimmune (not “myosin block”).', note: '' },
          { f: '<b>Clinical clues (fast ID):</b> drooping eyelids / swallowing trouble → myasthenia; childhood limb weakness → Duchenne muscular dystrophy; hand-and-foot spasms → tetany; hot swollen big-toe joint → gout; silent until a fracture → osteoporosis.', note: '' },
          { f: '<b>Arthritis subtypes:</b> osteoarthritis (wear-and-tear), rheumatoid (autoimmune), gouty (uric acid). Don’t confuse osteoporo<b>sis</b> (bone mass loss) with osteoarthr<b>itis</b> (joint).', note: '' },
        ],
        aids: [
          '<b>Mnemonic:</b> “<b>MMT</b> on the muscle side (<b>M</b>yasthenia–autoimmune, <b>M</b>uscular dystrophy–genes, <b>T</b>etany–calcium); <b>GAO</b> on the bone/joint side (<b>G</b>out–uric acid, <b>A</b>rthritis–inflammation, <b>O</b>steoporosis–bone mass).”',
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 1047–1050 ─────────────────────────
  {
    n: 'A',
    title: 'Neuromuscular Junction and Signal Transmission',
    extra: true,
    kalam: 'The motor neuron’s axon terminal sits in a groove on the sarcolemma called the motor end plate.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the three movement types, muscle structure, the sliding-filament cycle, the skeletal framework, and six disorders. Several topics that NEET and CBSE Boards also draw on are only touched on there: the neuromuscular junction as a distinct functional compartment (the step-by-step release and removal of the transmitter, and why curare paralyses; Topic 04 already says that myasthenia gravis is an autoimmune attack on the receptors), graded muscle responses (Topic 02 gives recruitment and summation in one paragraph and lactic acid as the cause of fatigue; the phases of a twitch, tetanus and the finer causes of fatigue are new), the red/white fibre classification by myosin ATPase activity rather than just mitochondria, and skeletal development (intramembranous versus endochondral ossification, the epiphyseal plate as a growth zone). Additional topic A sets out the neuromuscular transmission that begins every skeletal-muscle contraction (Topic 02, steps 1 to 3). Additional topic B looks at how a whole muscle grades its force. Additional topic C closes the skeletal story with how bones grow and how synovial joints are built for load-bearing. Additional topic D links tetany and osteoporosis through calcium homeostasis, and Additional topic E applies the chapter to exercise and injury. Additional topic F gives the printed answers to the practice questions of A to E. Additional topic G collects the question patterns NEET repeats on this chapter, with a graded practice set. Every section applies the chapter’s own content one step deeper.',
      },
      {
        t: 'p',
        html: 'The chapter’s contraction chain begins with the signal along the motor neuron (Step 1) and the release of acetylcholine at the neuromuscular junction (Step 2), but that signal reaches the muscle fibre across a specialised synapse, the neuromuscular junction (NMJ), which Topic 01 introduces as the structural doorway and Topic 02 uses for steps 2 and 3, but does not describe as a synapse. For NEET, the NMJ is a functional entity in its own right: its molecular components, the sequence of transmitter release, and the disorders that target it (curare, myasthenia gravis) are tested directly (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The NMJ as a functional sequence.</b> The motor neuron’s axon terminal sits in a groove on the sarcolemma called the motor end plate.',
      },
      {
        t: 'proc',
        title: 'The sequence from nerve impulse to muscle contraction is:',
        steps: [
          '<b>Arrival of action potential</b> at the axon terminal.',
          '<b>Entry of Ca<sup>2+</sup></b> through voltage-gated calcium channels: Ca<sup>2+</sup> is the trigger for exocytosis.',
          '<b>Release of acetylcholine (ACh)</b> from synaptic vesicles (a motor nerve terminal holds roughly 300 000 vesicles, of which a few hundred are released per impulse; each vesicle contains several thousand ACh molecules).',
          '<b>Binding of ACh</b> to nicotinic acetylcholine receptors on the sarcolemma: these are ligand-gated cation channels, and the resulting net entry of Na<sup>+</sup> depolarises the membrane locally.',
          '<b>Generation of end-plate potential (EPP)</b>: a graded depolarisation that normally exceeds threshold, triggering a muscle action potential.',
          '<b>Rapid degradation of ACh</b> by acetylcholinesterase (AChE), located in the synaptic cleft: this terminates the signal and prevents prolonged depolarisation.',
          '<b>Reuptake of choline</b> into the presynaptic terminal for resynthesis of ACh.',
        ],
      },
      {
        t: 'p',
        html: '<b>ACh synthesis (examinable details).</b><br>ACh is synthesised in the cytoplasm of the axon terminal from:<br>• Acetyl-CoA (from glucose metabolism) + choline (from the diet and from recycled choline)<br>• Enzyme: choline acetyltransferase (ChAT)<br>• Final product: acetylcholine (stored in vesicles)',
      },
      {
        t: 'p',
        html: 'ACh is broken down by acetylcholinesterase within a few milliseconds of its release, so each impulse produces only a brief depolarisation.',
      },
      {
        t: 'table',
        title: 'Disorders of the NMJ (the two that matter for exams)',
        head: ['Disorder', 'Site of action', 'Mechanism', 'Effect'],
        rows: [
          ['Myasthenia gravis', 'Postsynaptic (sarcolemma)', 'Autoantibodies block ACh receptors', 'Fewer functional receptors → weak EPP → fatigue'],
          ['Curare poisoning', 'Postsynaptic (competitive antagonist)', 'Curare binds ACh receptors without opening them', 'Competitive block → paralysis (reversible)'],
        ],
      },
      {
        t: 'p',
        html: 'The key distinction: myasthenia gravis destroys receptors over time (autoimmune); curare competes for the same binding site but the block is reversible on removal of the drug.',
      },
      {
        t: 'defgrid',
        title: 'Mini-table: NMJ components and their functions',
        rows: [
          { k: 'Motor end plate', v: 'Specialised region of sarcolemma receiving the axon terminal' },
          { k: 'Synaptic vesicles', v: 'Store ACh' },
          { k: 'Nicotinic ACh receptors', v: 'Ligand-gated cation channels (net Na<sup>+</sup> entry); open when ACh binds' },
          { k: 'Acetylcholinesterase', v: 'Hydrolyses ACh → acetic acid + choline (terminates signal)' },
          { k: 'Choline reuptake carrier', v: 'Recovers choline for ACh resynthesis' },
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'A patient shows progressive muscle weakness that worsens with repeated activity. A test reveals antibodies against acetylcholine receptors. Name the disorder and state precisely where the block occurs.',
        steps: [
          '<b>Solution.</b> The description (antibodies against ACh receptors, worsening with repeated use) is the diagnostic signature of <b>myasthenia gravis</b>. The block is <b>postsynaptic</b>: antibodies bind and destroy nicotinic acetylcholine receptors on the motor end plate, so fewer receptors are available to bind ACh. Each nerve impulse releases normal amounts of ACh, but the end-plate potential falls below threshold after repeated stimulation because insufficient receptors remain to generate a full depolarisation. Fatigue follows, not because the muscle itself is degenerating, but because the signal cannot get through. (The muscle tissue is initially healthy: the fault is in signal transmission at the NMJ, exactly as the chapter’s definition states.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: 'Curare is a paralysing poison that competes with acetylcholine for the same receptor. Explain why curare causes flaccid paralysis that wears off as the drug is cleared, while α-bungarotoxin (a krait venom toxin) causes paralysis that persists long after the venom has gone.',
        steps: [
          '<b>Solution.</b> Curare is a <b>competitive antagonist</b>: it binds the nicotinic ACh receptor without opening the channel, physically blocking ACh from reaching the site. Because it competes reversibly, removing curare from circulation restores function as fresh ACh displaces it. α-Bungarotoxin binds the same receptor <b>non-covalently but with extremely high affinity</b>, so it occupies the ACh-binding site almost permanently and the receptors stay blocked long after the toxin has been cleared from the blood; recovery has to wait for new receptors to be synthesised and inserted into the membrane, which takes days. Flaccid paralysis follows in both cases, but the <b>reversibility timescale</b> differs enormously: curare paralysis wears off as the drug is cleared (and can be hastened by an acetylcholinesterase inhibitor), whereas α-bungarotoxin paralysis persists for days. (The vesicle numbers in step 3 of the Method, the figures here and the bungarotoxin timescale go beyond NCERT.)',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Name the enzyme that hydrolyses acetylcholine at the neuromuscular junction and state what it produces.',
            a: 'Acetylcholinesterase; it hydrolyses ACh into acetic acid and choline.',
          },
          {
            q: '[CBSE] State the precise sequence of events from the arrival of a nerve impulse at the axon terminal to the generation of an action potential in the sarcolemma.',
            a: 'Nerve impulse → Ca<sup>2+</sup> entry into axon terminal → exocytosis of ACh vesicles → ACh binds nicotinic receptors on sarcolemma → Na<sup>+</sup> influx → end-plate potential → muscle action potential.',
          },
          {
            q: '[NEET A-R] A: Curare causes flaccid paralysis by blocking the neuromuscular junction. R: Curare competitively antagonises acetylcholine at the motor end plate. Evaluate A, R, and whether R explains A. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'A true, R true, R explains A (competitive antagonism at the receptor is exactly why the block occurs).',
          },
          {
            q: '[CUET] The precursors of acetylcholine are ______ and ______, and the enzyme that synthesises it is ______.',
            a: 'Acetyl-CoA + choline; choline acetyltransferase.',
          },
          {
            q: '[NEET] A patient with myasthenia gravis shows improvement after a drug that inhibits acetylcholinesterase. Explain this observation.',
            a: 'In myasthenia gravis, fewer functional ACh receptors remain. An AChE inhibitor slows ACh breakdown, so ACh persists longer in the cleft and has more chances to bind the surviving receptors: the effective signal improves, reducing fatigue. (The drug does not fix receptors; it compensates by increasing ACh concentration.)',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 1050–1053 ─────────────────────────
  {
    n: 'B',
    title: 'Graded Muscle Responses: Twitch, Summation, Tetanus, and Fatigue',
    extra: true,
    kalam: 'The chapter states that a muscle fibre obeys the all-or-none law: given a threshold stimulus it contracts fully, or not at all.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter states that a muscle fibre obeys the all-or-none law: given a threshold stimulus it contracts fully, or not at all. This is true for a single fibre, but it raises an obvious question: if each fibre is all-or-none, how does the whole muscle produce the smooth gradations of force you see when you slowly lift a glass versus lift a heavy bucket? Topic 02 gives the answer in one paragraph: the <b>whole muscle</b> grades its force by recruiting more motor units and by firing each more rapidly, so that twitches summate. This topic develops it: the phases of a twitch, summation and tetanus, which the chapter names only in passing (and tetanus not at all), and the causes of fatigue beyond the lactic acid that Topic 02 gives.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Key definitions and relationships.</b><br>• <b>Muscle twitch</b>: the mechanical response of a single motor unit (or a whole muscle) to a single, brief stimulus. A twitch has three phases: latent period (action potential propagates, Ca<sup>2+</sup> is released), contraction phase (filaments slide, tension rises), and relaxation phase (Ca<sup>2+</sup> pumped back, tension falls). The duration of a twitch depends on the muscle: roughly 10 ms in the fastest muscles (e.g. those that move the eye) to over 100 ms in slow muscles (these figures go beyond NCERT).<br>• <b>Stimulus strength and the all-or-none law</b>: within a single motor unit, a subthreshold stimulus produces zero contraction; a threshold stimulus produces a maximal contraction for that fibre. This is the all-or-none law at the fibre level. However, different motor units have different thresholds: recruitment of additional motor units produces graded increase in total tension.<br>• <b>Temporal summation (wave summation)</b>: when a second stimulus arrives before the muscle has fully relaxed from the first twitch, the second contraction adds to the residual tension. The second twitch begins from a higher starting tension, so its peak is higher. As the interval between stimuli decreases, the summed response grows.<br>• <b>Tetanus</b>: when stimuli arrive so rapidly that the muscle has little or no time to relax between them, the individual twitches fuse into a sustained contraction. Two types:<br>– <b>Complete (fused) tetanus</b>: stimuli so frequent that there is no relaxation between them; tension plateaus smoothly.<br>– <b>Incomplete (unfused) tetanus</b>: stimuli frequent enough for the twitches to summate but with partial relaxation between them; small oscillations are visible between peaks.<br>• <b>Fatigue</b>: the decline in a muscle’s ability to maintain a given force or tension during sustained activity. Causes include depletion of phosphocreatine, accumulation of inorganic phosphate and H<sup>+</sup> (from anaerobic glycolysis), and, in prolonged activity, failure of neuromuscular transmission. (NCERT gives the cause as lactic acid from the anaerobic breakdown of glycogen; the H<sup>+</sup> here is the acid part of it.)<br>• <b>Motor unit recruitment (size principle)</b>: motor units are recruited in order of increasing size: small (slow-twitch) units first for fine control, large (fast-twitch) units added as force demand increases. This minimises energy expenditure for low-force tasks.',
      },
      {
        t: 'p',
        html: '<b>Relationship between fibre type and contractile speed.</b><br>Fast-twitch (type II) fibres have:<br>• High myosin ATPase activity (fast cross-bridge cycling)<br>• Mostly low oxidative capacity (the type IIa fibres are fast but also oxidative and red)<br>• Fast contraction and, in the glycolytic fibres, rapid fatigue',
      },
      {
        t: 'p',
        html: 'Slow-twitch (type I) fibres have:<br>• Low myosin ATPase activity<br>• High oxidative capacity and myoglobin<br>• Slow contraction, fatigue-resistant',
      },
      {
        t: 'p',
        html: 'The chapter’s red/white classification maps onto this: red fibres are mostly slow-twitch (type I) with high myoglobin and oxidative enzymes; white fibres are mostly fast-twitch (type II), the glycolytic ones with low myoglobin and anaerobic capacity. Do not confuse tetanus (a state of sustained muscle contraction) with tetany (Topic 04, low Ca<sup>2+</sup>) or with the infection tetanus.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'A muscle is stimulated once and then stimulated a second time before it has relaxed from the first twitch.<br><b>(a)</b> Name the phenomenon that occurs when the second stimulus arrives.<br><b>(b)</b> If the stimulation frequency is increased until the muscle cannot relax at all, name the resulting state.<br><b>(c)</b> State one structural feature that would distinguish a muscle capable of sustained, fatigue-resistant contraction from one designed for rapid, powerful bursts.',
        steps: [
          '<b>Solution.</b> <b>(a)</b> The second stimulus arrives before full relaxation: this is <b>temporal summation</b> (or wave summation). The second twitch builds on the residual tension of the first, producing a higher peak.',
          '<b>(b)</b> When stimuli arrive so rapidly that relaxation between them becomes impossible, the summed twitches fuse into a smooth sustained contraction: this is <b>tetanus</b> (complete tetanus).',
          '<b>(c)</b> A fatigue-resistant muscle would contain <b>slow-twitch (type I) fibres</b> rich in mitochondria and myoglobin, relying on aerobic respiration for sustained ATP production. A fast, powerful burst muscle would contain mostly <b>fast-twitch (type II) fibres</b>, chiefly the glycolytic ones, with high myosin ATPase activity and large glycogen stores. The structural hallmark is the proportion of mitochondria and the myoglobin content visible in fresh muscle (dark red for slow-twitch, pale for fast-twitch).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Explain why a whole skeletal muscle can produce different levels of force even though each individual muscle fibre contracts all-or-none.',
        steps: [
          '<b>Solution.</b> The all-or-none law applies to a single fibre given a threshold stimulus. Force grading in the whole muscle works through two mechanisms:',
          '<b>Motor unit recruitment.</b> Each motor unit contains many fibres; a weak contraction recruits only a few low-threshold motor units (the size principle). Increasing force recruits additional, higher-threshold units until the maximum is reached. This is <b>recruitment</b>, or multiple motor unit summation.',
          '<b>Frequency of stimulation (temporal summation).</b> At low stimulus frequency, each twitch fully relaxes between stimuli, producing a series of low-amplitude pulses. As frequency rises, twitches summate; at very high frequency they fuse into tetanus, producing maximal sustained tension. The same motor units generate different force simply because they are stimulated more often.',
          'Together, recruitment and frequency modulation allow the nervous system to produce the entire range of force output, from a gentle eye movement to maximal leg extension, using all-or-none motor units.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Define a muscle twitch and name its three phases.',
            a: 'Twitch = mechanical response to a single stimulus. Three phases: latent period (no visible shortening), contraction phase (tension rises), relaxation phase (tension falls).',
          },
          {
            q: '[CUET] The sustained maximum contraction produced by very high-frequency stimulation is called ______.',
            a: 'Tetanus (complete or fused tetanus).',
          },
          {
            q: '[NEET] State the role of phosphocreatine in muscle contraction and explain why it is important during the first few seconds of intense activity.',
            a: 'Phosphocreatine (creatine phosphate) is a high-energy reserve that rapidly regenerates ATP from ADP during the first few seconds of intense activity. When a muscle begins maximal work, ATP is consumed faster than oxidative phosphorylation can supply it; phosphocreatine donates its phosphate group to ADP, catalysed by creatine kinase, restoring ATP almost instantaneously until glycolysis and oxidation take over.',
          },
          {
            q: '[NEET] According to the size principle of motor unit recruitment, which type of motor unit is recruited first during a graded increase in force: small or large? Give a functional reason.',
            a: 'Small motor units (with slow-twitch, type I fibres) are recruited first. This follows the size principle: it minimises energy expenditure for low-force tasks and allows fine-gradation control. Large units (fast-twitch, type II) are added only when greater force is needed.',
          },
          {
            q: '[CBSE] Differentiate between incomplete and complete tetanus with respect to the relaxation between stimuli and the resulting tension pattern.',
            a: 'Incomplete tetanus: stimuli arrive at a frequency high enough for the twitches to summate, but partial relaxation still occurs between peaks, producing small wavelets on the tension curve. Complete tetanus: the stimulus frequency is higher still; no relaxation occurs between stimuli and tension reaches a smooth plateau at the maximal level.',
          },
          {
            q: '[NEET A-R] A: Fast-twitch fibres fatigue more quickly than slow-twitch fibres. R: Fast-twitch fibres rely mainly on anaerobic glycolysis, producing lactic acid rapidly. Evaluate A, R, and whether R explains A. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'A true, R true, R explains A. Fast-twitch fibres depend heavily on anaerobic glycolysis, which rapidly produces H<sup>+</sup> (from lactic acid) and inorganic phosphate, metabolites that inhibit contractile proteins and impair calcium handling by the sarcoplasmic reticulum. Slow-twitch fibres use aerobic metabolism with abundant mitochondria and myoglobin, sustaining ATP supply without the acidic by-products that cause rapid fatigue.',
          },
        ],
      },
    ],
  },
];
