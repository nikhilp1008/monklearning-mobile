import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 17 (Locomotion and Movement), Topics 00 to 02: pp. 1013
 * to 1032 of the Class 11 Biology Master Reference, word for word. The chapter
 * title page (p. 1012) and the contents box (top of p. 1013) are not copied.
 * The book prints an unnumbered introduction ("Types of Movement") and then
 * Topics 1 to 4; the introduction is Topic 00 and the others keep their printed
 * numbers (DECISIONS-B11 4). Figures 1 (p. 1016), 2 (p. 1023) and 3 (p. 1030)
 * are drawn inline in the book and are redrawn in lib/diagrams/biology-11-17.ts;
 * these pages hold no unnumbered drawing. Emphasis italics are dropped (only
 * scientific names are italic). Em dashes are written as colons, commas or full
 * stops. Bullets the book runs together inside a paragraph are written one per
 * line.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 00 · pp. 1013–1019 ─────────────────────────
  {
    n: '00',
    title: 'Types of Movement',
    kalam: 'All locomotion is movement, but not all movement is locomotion.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A short opener that is commonly tested. NEET and CUET like the <b>movement-vs-locomotion</b> distinction and the “which cells show amoeboid/ciliary movement” one-liners (often as incorrect-statement or assertion-reason items). CBSE Boards may set a 1–2 mark “name the types of movement with one example each.” Easy marks if the three types and their examples are clean in your head.',
      },
      {
        t: 'p',
        html: 'Movement is one of the defining signs of life, but it is worth slowing down on what the word actually means, because the chapter’s title pairs two terms that students routinely treat as identical: movement and locomotion. They are not the same thing.',
      },
      {
        t: 'p',
        html: '<b>Movement</b> is any change in position of a body part: a wave of your hand, the beating of cilia in your windpipe, the churning of your gut. <b>Locomotion</b> is the special case where the movement carries the whole organism from one place to another: walking, swimming, flying. The clean logical rule to memorise: <b>all locomotion is movement, but not all movement is locomotion.</b> Your heart beats all day (movement) without taking you anywhere; you walk to class (locomotion) using movement that happens to relocate you. Exam statements like “all movements lead to locomotion” are therefore <b>false</b>, a favourite trap.',
      },
      {
        t: 'p',
        html: 'It also helps to see that movement happens at <b>several levels</b> of biological organisation. At the <b>cellular</b> level, organelles stream within the cytoplasm, chromosomes are dragged apart during cell division, and whole cells crawl or beat their cilia. At the <b>organ</b> level, the heart pumps, the gut churns its contents along, and the chest wall rises and falls in breathing. At the <b>organismal</b> level, the entire body walks, swims, runs or climbs, and that topmost level is what we call locomotion. The three movement types studied in this chapter (amoeboid, ciliary, muscular) operate chiefly at the first two levels, but the muscular type alone scales all the way up to relocate the whole organism.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture a factory. Machines inside it whirr, pistons pump, belts turn: that is movement, constant internal activity. But the factory only relocates if the entire building is loaded onto trucks and driven elsewhere: that is locomotion. Cells and organs are full of movement every second; locomotion is the rarer, whole-body event that movement is sometimes harnessed to produce.',
      },
      {
        t: 'p',
        html: 'Why do animals bother to locomote at all? Locomotion is rarely aimless: across the animal kingdom it serves clear survival purposes: searching for <b>food</b>, finding <b>shelter</b>, seeking a <b>mate</b> and suitable <b>breeding grounds</b>, migrating to <b>favourable climatic conditions</b>, and <b>escaping from predators or danger</b>. Movement in the broader sense is one of the defining properties of all living things (even rooted plants show growth movements and open their flowers), but it is animals that have evolved dedicated muscular and skeletal machinery for rapid, purposeful locomotion. A useful observation: the structures an animal uses to locomote are usually not purpose-built organs but the very same parts it uses for other movements: a frog’s hind limbs both swim and leap; our legs both walk and kick. Locomotion borrows the body’s general movement machinery.',
      },
      {
        t: 'p',
        html: 'Living cells achieve movement in three broad ways, and the human body uses all three: <b>amoeboid, ciliary, and muscular</b>. The first two are quiet, cellular, and involuntary; the third, muscular movement, is the powerful, organised type that the rest of this chapter is devoted to, because it is the basis of human locomotion.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & what to keep straight:</b><br>• Movement ≠ locomotion. Locomotion is a subset of movement.<br>• The structures that perform locomotion are not new organs invented for the job: they are the same limbs and muscles used for many other movements (a frog’s hind limbs both swim and jump). Locomotion and other movements share machinery.<br>• Amoeboid and ciliary movements are <b>involuntary</b> and cellular; of the muscular movements, only <b>skeletal-muscle</b> movement is the voluntary, large-scale type behind walking, running and most visible body actions (smooth and cardiac muscle also move involuntarily).<br>• The cellular movements (amoeboid, ciliary) and large-scale muscular movement are powered by <b>different proteins</b>: cytoskeletal microfilaments and microtubules versus the actin–myosin pair of muscle, so no single mechanism explains all movement.',
      },

      { t: 'part', title: 'Key types and diagnostic features' },
      {
        t: 'p',
        html: 'Humans show all three movement types. Learn them by what does the moving and where in the body it happens.',
      },
      {
        t: 'table',
        title: null,
        head: ['Type', 'How it works', 'Where it occurs in humans'],
        rows: [
          [
            'Amoeboid',
            'Cytoplasm streams to throw out pseudopodia (false feet); driven by the cytoskeleton (microfilaments)',
            'Leucocytes (WBCs) and macrophages crawling through tissues to engulf pathogens',
          ],
          [
            'Ciliary',
            'Coordinated beating of cilia lining internal tubular organs',
            'Trachea (sweeps dust/mucus out); female reproductive tract / oviduct (moves the ovum along)',
          ],
          [
            'Muscular',
            'Contraction of muscles acting on the skeleton',
            'Limbs, jaws, tongue: the basis of locomotion',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Key terms:</b><br>• <b>Pseudopodia</b>: temporary cytoplasmic projections (“false feet”) used to crawl and to engulf material; formed by streaming of the cytoplasm.<br>• <b>Cytoskeleton</b>: the internal protein scaffolding (microfilaments and microtubules) whose rearrangement powers amoeboid motion.<br>• <b>Cilia</b>: short, numerous hair-like projections of ciliated epithelial cells whose rhythmic beat moves fluid or particles across the surface.<br>• <b>Ciliated epithelium</b>: the lining tissue, made of cells bearing cilia, found wherever a one-way surface current is needed (e.g. trachea, oviduct).<br>• <b>Flagella</b>: longer whip-like projections (fewer per cell) that propel some cells by lashing; the human sperm’s tail is a flagellum. Cilia and flagella share the same internal architecture, a ring of microtubules, and differ mainly in length and number.<br>• <b>Microfilaments & microtubules</b>: the cytoskeletal protein fibres that power cellular movement: microfilaments drive amoeboid crawling, while microtubules form the core of cilia and flagella.',
      },

      { t: 'part', title: 'Mechanisms and examples' },
      {
        t: 'p',
        html: '<b>Amoeboid movement: crawling by pseudopodia.</b> Some body cells move exactly the way an <i>Amoeba</i> does. The cell pushes its cytoplasm forward into bulges called <b>pseudopodia</b>; as more cytoplasm streams in, the whole cell flows in that direction. The engine is the <b>cytoskeleton</b>: the assembly and disassembly of <b>microfilaments</b> (and microtubules) changes the cell’s shape and drives the streaming. In humans this is how <b>leucocytes and macrophages</b> patrol the tissues, crawling toward, surrounding, and engulfing invading microbes. So this “primitive” movement is doing front-line immune work inside you right now. In fact, the very same pseudopodial flowing underlies <b>phagocytosis</b>: a macrophage extends its cytoplasm around a bacterium until the cell has wrapped and swallowed it. Amoeboid crawling and phagocytosis use the same pseudopodial machinery of the cytoskeleton.',
      },
      {
        t: 'p',
        html: '<b>Ciliary movement: sweeping by cilia.</b> Wherever the body needs to move fluid or particles along a surface without moving the organ itself, it lines that surface with <b>ciliated epithelium</b>. The cilia beat in coordinated waves, pushing the layer of fluid in one direction. In the <b>trachea</b>, this sweeps trapped dust and mucus up and out of the airway. In the <b>female reproductive tract</b>, ciliary beating moves the <b>ovum</b> along the oviduct toward the uterus. The organ stays put; only the surface layer is propelled, the opposite design philosophy to locomotion. The power of cilia comes from coordination: thousands beat in a wave-like sequence, one row after another (much like a stadium “Mexican wave”), generating a steady one-way current rather than random flutter. In the airway this <b>mucociliary</b> sweep is itself a defence mechanism, continuously driving inhaled dust and trapped microbes, caught in mucus, up toward the throat to be cleared.',
      },
      {
        t: 'p',
        html: '<b>The cellular movements share one engine.</b> It is worth noticing that amoeboid and ciliary movement are not unrelated tricks: both are powered by the cell’s <b>cytoskeleton</b>, its internal scaffold of protein fibres. Amoeboid crawling is driven by the assembly and disassembly of <b>microfilaments</b> that push the cytoplasm into pseudopodia; ciliary beating is driven by <b>microtubules</b> arranged in a regular ring inside each cilium, which slide against one another to make the cilium bend. So the same family of cytoskeletal proteins, arranged differently, produces two very different-looking movements, a recurring theme in biology, where structure dictates function. Muscular movement, as we will see, uses yet another protein pair (actin and myosin) on a far larger, organised scale.',
      },
      {
        t: 'p',
        html: '<b>Muscular movement: the powerhouse.</b> The third type is the one that makes you go. Specialised <b>muscle</b> tissue contracts and, by pulling on the <b>skeleton</b>, swings limbs, opens and closes jaws, and moves the tongue. Unlike the other two, muscular movement is powerful, voluntary (for skeletal muscle), and organised on a large scale, which is exactly why it can relocate the whole body, i.e. produce <b>locomotion</b>. What makes muscle uniquely fit for this job is a set of four functional properties worth naming, because examiners test them directly: <b>excitability</b> (the ability to respond to a stimulus), <b>contractility</b> (the ability to shorten forcibly when adequately stimulated), <b>extensibility</b> (the ability to be stretched), and <b>elasticity</b> (the ability to recoil and resume resting length after being stretched). Together these let a muscle pull on command and then reset, ready to pull again, a cycle the other movement types never achieve with such force.',
      },
      {
        t: 'p',
        html: 'Crucially, muscular movement is never the muscle acting alone: it is a <b>system</b>. The muscle supplies the force, the <b>skeleton</b> provides the rigid levers, and the <b>joints</b> provide the pivots about which those levers swing. Remove any one component and movement fails: a muscle with nothing to pull on, or a bone with no joint, produces nothing. This three-part partnership is precisely why the rest of the chapter is organised around each component in turn: muscle (its types, structure and contraction) followed by the skeletal system and joints.',
      },
      {
        t: 'p',
        html: 'A final perspective for completeness: muscular and skeletal locomotion is only one of nature’s solutions. Across the animal kingdom the locomotory structures differ widely: pseudopodia in <i>Amoeba</i>, cilia in <i>Paramecium</i>, flagella in many microbes and in sperm cells, fins in fish, limbs in tetrapods, and wings in birds and insects; yet all rest on the same underlying principle of generating directed force against a medium or a surface. Humans, like other mammals, rely overwhelmingly on the muscular–skeletal route, which is why it occupies the remainder of this chapter.',
      },
      {
        t: 'p',
        html: '<b>The chapter’s logic in one line:</b> movement is universal → three types exist → the muscular type, working with the skeleton, is what produces human locomotion → so we now study muscle and bone in detail.',
      },
      { t: 'fig', id: 'b11-17-fig-17.1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>(short answer)</b> Name the three types of movement shown by cells of the human body, giving one example of each.',
        steps: [
          '<b>Model answer:</b> (i) <b>Amoeboid movement</b>, shown by leucocytes and macrophages, which crawl using pseudopodia. (ii) <b>Ciliary movement</b>, seen in the trachea and the female reproductive tract, where cilia move mucus or the ovum. (iii) <b>Muscular movement</b>, movement of limbs, jaws and tongue brought about by muscles. (Concluding line examiners reward: in humans, only muscular movement is large-scale enough to bring about locomotion.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>(identify the incorrect statement)</b> Which statement is INCORRECT? <b>(a)</b> All locomotion is a form of movement. <b>(b)</b> All movements result in locomotion. <b>(c)</b> Leucocytes show amoeboid movement. <b>(d)</b> Cilia help move the ovum in the female reproductive tract.',
        steps: [
          '<b>Solution (b).</b> Movement and locomotion are not equivalent: many movements (heartbeat, ciliary beating) never relocate the body. (a), (c) and (d) are all correct statements; (b) is the classic reversal that defines the trap.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>(single best answer + elimination)</b> Amoeboid movement in human cells is brought about by: <b>(a)</b> cilia <b>(b)</b> flagella <b>(c)</b> pseudopodia formed by the cytoskeleton <b>(d)</b> muscle contraction',
        steps: [
          '<b>Reasoning:</b> Amoeboid cells (leucocytes, macrophages) crawl using <b>pseudopodia</b> thrown out by cytoplasmic streaming, powered by the <b>cytoskeleton</b> → <b>(c)</b>.<br>• (a) cilia drive ciliary movement, a different type.<br>• (b) flagella drive sperm, not crawling cells; the sperm flagellum is a special case of cell motility, not “amoeboid”.<br>• (d) muscle contraction is muscular movement, not amoeboid.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: '<b>Assertion (A):</b> Ciliary movement does not bring about locomotion of the human body. <b>Reason (R):</b> In humans, cilia line internal tubular organs and merely move fluids or particles along a surface rather than relocating the whole body.<br>Options: <b>(a)</b> Both true, R explains A; <b>(b)</b> Both true, R doesn’t explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          '<b>Solution (a).</b> A is true. R is true and explains it: human cilia (trachea, oviduct) move mucus or the ovum along a fixed organ; they do not displace the body, so they cannot produce locomotion. Students who confuse movement with locomotion mismark this.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Differentiate between movement and locomotion with one example of each.',
            a: 'Movement = any change in position of a body part (e.g. heartbeat); locomotion = movement that relocates the whole organism (e.g. walking).',
          },
          {
            q: '[CUET] The type of movement shown by macrophages is ______; the cell projections they use are called ______.',
            a: 'amoeboid movement; pseudopodia.',
          },
          {
            q: '[NEET] State the type of movement that helps in (i) passage of the ovum in the oviduct and (ii) movement of the limbs.',
            a: '(i) ciliary movement (ii) muscular movement.',
          },
          {
            q: '[NEET] Name the cytoskeletal components chiefly involved in amoeboid movement.',
            a: 'Microfilaments (and microtubules) of the cytoskeleton.',
          },
          {
            q: '[NEET A-R] <b>A:</b> Not all movements are locomotion. <b>R:</b> Locomotion is that movement which results in a change in the location of the organism. Evaluate A, R, and whether R explains A. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'A true, R true, R <b>is</b> the correct explanation of A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which pair of human cells characteristically shows amoeboid movement?',
        opts: [
          { label: 'Neurons and RBCs', nudge: '<b>(a)</b> RBCs are carried passively in blood.' },
          { label: 'Leucocytes and macrophages', nudge: null },
          { label: 'Cardiac and smooth muscle', nudge: '<b>(c)</b> muscle shows muscular movement.' },
          { label: 'Ciliated epithelial cells', nudge: '<b>(d)</b> these show ciliary movement.' },
        ],
        correct: 1,
        solution: 'WBCs and macrophages crawl by pseudopodia to reach and engulf pathogens.',
      },
      {
        t: 'mcq',
        q: 'Ciliary movement in humans is best illustrated by:',
        opts: [
          { label: 'crawling of leucocytes', nudge: '<b>(a)</b> is amoeboid.' },
          { label: 'bending of the arm', nudge: '<b>(b)</b> and <b>(d)</b> are muscular.' },
          { label: 'passage of ova in the oviduct', nudge: null },
          { label: 'pumping of blood', nudge: '<b>(b)</b> and <b>(d)</b> are muscular.' },
        ],
        correct: 2,
        solution: 'Cilia of the reproductive tract propel the ovum.',
      },
      {
        t: 'mcq',
        q: 'Which statement about movement and locomotion is correct?',
        opts: [
          { label: 'They are synonyms', nudge: '<b>(a)</b>/<b>(b)</b> equate the two wrongly.' },
          { label: 'All movement is locomotion', nudge: '<b>(a)</b>/<b>(b)</b> equate the two wrongly.' },
          { label: 'All locomotion is movement, but not vice-versa', nudge: null },
          {
            label: 'Locomotion never involves muscles',
            nudge: '<b>(d)</b> is false: most locomotion, human locomotion included, is muscular.',
          },
        ],
        correct: 2,
        solution: 'Locomotion is a subset of movement.',
      },
      {
        t: 'mcq',
        q: 'The structures responsible for amoeboid movement are formed by:',
        opts: [
          { label: 'microtubules of cilia', nudge: '<b>(a)</b> describes cilia.' },
          { label: 'cytoplasmic streaming into pseudopodia', nudge: null },
          { label: 'contraction of sarcomeres', nudge: '<b>(c)</b> describes muscle.' },
          { label: 'beating of flagella', nudge: '<b>(d)</b> describes flagellar motility.' },
        ],
        correct: 1,
        solution: 'Pseudopodia arise from cytoplasmic streaming driven by the cytoskeleton.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Equating movement with locomotion.</b> Locomotion is only the whole-body-relocation subset of movement.',
          '<b>Assigning amoeboid movement to the wrong cells.</b> It is leucocytes and macrophages (immune crawlers), not RBCs or neurons.',
          '<b>Forgetting that internal cilia don’t locomote.</b> Trachea and oviduct cilia move substances, not the body.',
          '<b>Treating the three types as unrelated to the chapter.</b> Muscular movement is the bridge into the entire rest of the chapter.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any movement MCQ, ask one question: does the whole organism change place? If no, it’s movement-not-locomotion; if it’s a cell crawling, it’s amoeboid; if it’s a surface being swept, it’s ciliary; if a limb/jaw moves, it’s muscular. One filter sorts every option.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Movement vs locomotion',
            note: 'all locomotion is movement; <b>not</b> all movement is locomotion (locomotion = movement that relocates the whole organism).',
          },
          { f: 'Three types of movement', note: 'amoeboid · ciliary · muscular.' },
          {
            f: 'Amoeboid',
            note: 'pseudopodia from cytoplasmic streaming, driven by the <b>cytoskeleton (microfilaments)</b>; shown by <b>leucocytes & macrophages</b>.',
          },
          {
            f: 'Ciliary',
            note: 'beating cilia of ciliated epithelium; <b>trachea</b> (mucus/dust) and <b>oviduct</b> (ovum); moves substances, not the body.',
          },
          {
            f: 'Muscular',
            note: 'muscles pulling on the skeleton; limbs, jaws, tongue; the <b>only type that produces human locomotion</b>.',
          },
          {
            f: 'Purposes of locomotion',
            note: 'searching for food, shelter, a mate and breeding grounds, favourable climate, and escape from predators or danger.',
          },
          {
            f: 'Movement is at every level',
            note: 'cellular (streaming, crawling, cilia), organ (heart, gut), organismal (locomotion); in humans this is muscular movement.',
          },
        ],
        aids: [
          '“<b>A</b>moeboid = <b>A</b>rmy (WBCs crawl), <b>C</b>iliary = <b>C</b>onveyor (sweeps along), <b>M</b>uscular = <b>M</b>over (relocates you).”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 01 · pp. 1020–1026 ─────────────────────────
  {
    n: '01',
    title: 'Muscle Types & Structure',
    kalam: 'Before a single bone can move, something has to pull.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A frequent NEET topic: expect 1–2 direct questions almost every year (the book’s estimate from past papers, not official figures) on the three muscle types and the actin/myosin/troponin–tropomyosin set-up, very often as assertion–reason. CBSE Boards lift a 2–3 mark “differentiate the muscle types” or labelled-diagram question straight from here. CUET keeps it to single-fact MCQs and match-the-column.',
      },
      {
        t: 'p',
        html: 'Before a single bone can move, something has to pull. Bones cannot shorten themselves, joints cannot rotate on their own: every movement you make, from sprinting for a local train to the slow squeeze that pushes food down your gut, is the result of a tissue that has exactly one trick: it can shorten on command. That tissue is <b>muscle</b>, and the whole of this chapter rests on understanding how it is built.',
      },
      {
        t: 'p',
        html: 'Here is the first idea worth holding onto: your body does not use one kind of muscle for everything. That would be like a cricket team where every player bats, bowls, and keeps wickets identically: hopeless. Instead, evolution split the labour three ways. There is the muscle you decide to move (lifting your hand to answer a question), the muscle that runs your “background” plumbing without ever asking you (the slow churn of your intestines), and the muscle that must beat tirelessly your entire life without a single voluntary instruction (your heart). Three jobs, three designs: <b>skeletal</b>, <b>smooth</b>, and <b>cardiac</b> muscle.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine three kinds of workers in a railway system. The porter (skeletal muscle) is strong, fast, attached to the platform, and works only when you signal him, but he tires quickly. The conveyor belt in the parcel office (smooth muscle) runs quietly and endlessly on its own, no supervisor needed, never striped, never in a hurry. And the station clock’s mechanism (cardiac muscle) is the strange hybrid: striped and powerful like the porter, yet self-driven and untiring like the belt, ticking from before your birth to your last breath. Same raw idea (contraction), three completely different engineering solutions.',
      },
      {
        t: 'p',
        html: 'Once you can feel why three designs exist, the textbook facts stop being a list to memorise and become obvious. Skeletal muscle is striped (striated) and <b>voluntary</b> because it answers to your conscious nervous system; it is bolted to the skeleton, which is why it moves you. Smooth muscle is unstriped and <b>involuntary</b>, lining the walls of hollow organs, which is why you never have to “remember” to digest. Cardiac muscle is striped like skeletal but <b>involuntary</b> like smooth, and it is <b>resistant to fatigue</b>, the one non-negotiable design requirement for a pump that may never stop.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & where the neat story bends:</b><br>• “Striated = voluntary” is a trap, not a rule. Cardiac muscle is striated yet involuntary. Striations tell you about internal filament arrangement, <b>not</b> about who controls the muscle.<br>• “Voluntary” does not mean you control every fibre individually. You command a movement; the nervous system recruits the fibres.<br>• The three-type scheme is a teaching simplification. Real tissues blend properties (cardiac being the obvious in-between), so always reason from the defining feature asked, not from a blanket label.',
      },

      { t: 'part', title: 'Key structures, definitions and diagnostic features' },
      {
        t: 'p',
        html: 'The fastest way to lock this topic is one comparison table. Learn it by column logic, not by rote.',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Skeletal (striated)', 'Smooth (non-striated)', 'Cardiac'],
        rows: [
          [
            'Location',
            'Attached to bones & skin; limbs',
            'Walls of hollow organs: blood vessels, GI tract, bladder, uterus, bronchi',
            'Wall of the heart only',
          ],
          ['Striations', 'Present', 'Absent', 'Present'],
          ['Cell shape', 'Long, cylindrical, unbranched', 'Spindle-shaped, tapering', 'Cylindrical, branched'],
          ['Nucleus', 'Multinucleate (syncytial)', 'Uninucleate', 'Uninucleate (usually)'],
          ['Control', 'Voluntary', 'Involuntary', 'Involuntary'],
          ['Special junction', '–', '–', 'Intercalated discs (cells contract as one unit)'],
          ['Fatigue', 'Fatigues (white fibres tire sooner; red fibres resist fatigue)', 'Slow, sustained', 'Resistant to fatigue'],
          [
            'Main role',
            'Locomotion, posture, joint stability, heat',
            'Contractility of hollow organs',
            'Pumping blood',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Core definitions</b> (the terms examiners insist on):<br>• <b>Striations</b>: the alternating light/dark banding seen in skeletal & cardiac muscle, produced by the <b>specialised arrangement of myofilaments</b> (not by any pigment or membrane).<br>• <b>Sarcolemma</b>: the plasma membrane enclosing a muscle fibre (the axon terminal meets it at the neuromuscular junction).<br>• <b>Sarcoplasm</b>: the cytoplasm of the muscle fibre.<br>• <b>Sarcoplasmic reticulum (SR)</b>: the muscle’s internal membrane network that acts as the <b>calcium store</b>.<br>• <b>Myofibril</b>: a rod-like contractile thread running the length of the fibre, built from repeating units called sarcomeres.<br>• <b>Titin</b>: a giant elastic protein spanning the sarcomere that holds the thick filaments in register and supplies passive elasticity.<br>• <b>Sarcomere</b>: the <b>structural & functional unit of contraction</b>, the segment of a myofibril <b>bounded by two Z-lines</b>, containing both actin and myosin.<br>• <b>Intercalated discs</b>: communication junctions unique to cardiac muscle that fuse adjacent cells so a signal to one spreads to all, making the heart contract as a single unit.',
      },
      {
        t: 'p',
        html: '<b>A sub-classification worth knowing: red vs white skeletal fibres.</b> Not all skeletal fibres are alike. <b>Red fibres</b> are packed with <b>mitochondria</b> and the oxygen-binding pigment <b>myoglobin</b> (which gives them their colour); they rely on aerobic respiration, contract slowly, and resist fatigue, ideal for posture and endurance. <b>White fibres</b> carry <b>fewer mitochondria</b> and little myoglobin, depend on anaerobic respiration, and deliver fast, powerful but quickly-tiring contractions: think of the rapid flick of an eyelid versus the steady hold of a back muscle. Most real muscles are a mix of both, in proportions suited to their job; this is why a marathoner’s and a sprinter’s muscles behave so differently. For exams, anchor it as: <b>red = more mitochondria + myoglobin + aerobic + fatigue-resistant; white = the opposite, built for short bursts of power.</b>',
      },

      { t: 'part', title: 'Key mechanisms and processes (structural organisation of skeletal muscle)' },
      {
        t: 'p',
        html: 'For “Muscle Types & Structure,” the process to master is not contraction itself (that is Topic 02) but <b>how a skeletal muscle is built up, layer by layer</b>, from the whole organ down to a single protein. Work top-down: each level sits inside the one above it.',
      },
      {
        t: 'p',
        html: '<b>Step 1: The whole muscle.</b> A muscle (say, your biceps) is a bundle of bundles. Groups of muscle fibres are wrapped together by connective tissue (a fascicle or muscle bundle), and many fascicles together form the muscle, all sheathed in fascia.',
      },
      {
        t: 'p',
        html: '<b>Step 2: The muscle fibre (the cell).</b> Each fibre is a single, long, multinucleate cell, a syncytium, formed during development by the fusion of many precursor cells, which is why it ends up with many nuclei pushed to its periphery. Its membrane is the <b>sarcolemma</b>, its cytoplasm the <b>sarcoplasm</b>, and inside the sarcoplasm sits the calcium-storing <b>sarcoplasmic reticulum</b>. The fibre does not act alone: a motor neuron reaches it and its axon terminal meets the sarcolemma at the <b>neuromuscular junction (NMJ)</b>, the structural “doorway” through which every voluntary command physically arrives at the muscle. No NMJ, no signal, no contraction, however healthy the filaments are.',
      },
      {
        t: 'p',
        html: '<b>Step 3: The myofibrils.</b> Packed in parallel inside each fibre are hundreds of <b>myofibrils</b>. Because the dark and light regions of neighbouring myofibrils line up side by side, the whole fibre looks <b>striped</b>: that is the origin of “striated.”',
      },
      {
        t: 'p',
        html: '<b>Step 4: The sarcomere and its bands.</b> Each myofibril is a chain of <b>sarcomeres</b>, the unit <b>bounded by Z-lines</b>. Within a sarcomere:<br>• <b>A-band (anisotropic)</b>: the thick, <b>dark</b> band; contains <b>both</b> thick and thin filaments. Its length is fixed.<br>• <b>I-band (isotropic)</b>: the <b>light</b> band; contains only thin filaments and is bisected by the Z-line.<br>• <b>H-zone</b>: the lighter central region of the A-band where only thick filaments lie (no thin-filament overlap). The M-line runs through its centre.',
      },
      {
        t: 'p',
        html: 'At rest, the thin filaments are anchored to the Z-lines and reach part-way into the A-band, while the thick filaments sit centrally; the partial overlap between the two is exactly what the H-zone and I-band measure. Holding this resting picture in mind is what makes the contraction story (Topic 02) effortless: when the filaments slide, the overlap grows, so the I-band and H-zone shrink while the A-band, being the full length of the thick filament, never changes.',
      },
      {
        t: 'p',
        html: '<b>Step 5: The myofilaments (the proteins).</b> Two filament types fill the sarcomere:<br>• <b>Thin filament: actin.</b> Built from a globular monomer, <b>G-actin</b>, which polymerises into the helical <b>F-actin</b>. Twined along it lie two regulatory proteins: <b>tropomyosin</b> (a long strand) and <b>troponin</b> (a complex of three subunits, troponin C/I/T). At rest, this pair <b>masks the myosin-binding (active) sites</b> on actin.<br>• <b>Thick filament: myosin.</b> A fibrous protein whose projecting heads act as an <b>ATPase</b> (they hydrolyse ATP) and form the cross-bridges that grip actin.<br>• <b>Structural proteins.</b> Beyond the contractile pair, long proteins such as <b>titin</b> thread through the sarcomere, tethering the thick filaments to the Z-line and acting as a molecular spring that keeps everything in register and gives a resting muscle its passive springiness.',
      },
      {
        t: 'p',
        html: '<b>Why the order matters:</b> every level explains a higher-level fact. Multinucleate fibres exist because each long cell needs many “command posts.” Striations exist because sarcomeres are aligned. And contraction (Topic 02) will simply be the Z-lines being dragged inward as thin filaments slide over thick, which only makes sense once you can see the sarcomere clearly.',
      },
      { t: 'fig', id: 'b11-17-fig-17.2' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>(clean presentation / short answer)</b> A student examines three unlabelled muscle samples under a microscope. Sample X is striped, branched, and uninucleate; Sample Y is spindle-shaped, unstriped, and uninucleate; Sample Z is striped, cylindrical, and multinucleate. Identify each and give the location and type of control for each.',
        steps: [
          '<b>Approach:</b> Use two diagnostic axes only: striations and the shape/nucleus combination.<br>• Sample X: striped + <b>branched</b> is the give-away → <b>cardiac muscle</b>; located in the heart wall; involuntary.<br>• Sample Y: spindle-shaped + unstriped → <b>smooth muscle</b>; walls of hollow organs (e.g., intestine, blood vessels); involuntary.<br>• Sample Z: striped + cylindrical + multinucleate → <b>skeletal muscle</b>; attached to bones; voluntary.',
          '<b>Concluding statement:</b> Branching distinguishes cardiac from skeletal even though both are striped: a frequently tested discrimination on this topic.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>(match the column)</b> Match Column I with Column II.<br>Column I: (P) Sarcomere; (Q) Sarcoplasmic reticulum; (R) Tropomyosin–troponin; (S) Myosin head.<br>Column II: (1) Calcium store; (2) Unit bounded by Z-lines; (3) ATPase activity; (4) Masks actin’s active site.',
        steps: [
          '<b>Solution:</b> P → 2, Q → 1, R → 4, S → 3. <b>Speed cue:</b> “Z-line ⇒ sarcomere,” “store ⇒ SR,” “mask ⇒ troponin,” “ATPase ⇒ myosin.” Four anchor words, four answers: no reading the options twice.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>(single best answer + elimination)</b> Which one set correctly describes skeletal muscle? <b>(a)</b> Striated, involuntary, branched <b>(b)</b> Striated, voluntary, unbranched, multinucleate <b>(c)</b> Non-striated, voluntary, spindle-shaped <b>(d)</b> Striated, voluntary, branched, uninucleate',
        steps: [
          '<b>Reasoning:</b> Skeletal muscle is striated, voluntary, cylindrical, <b>unbranched</b>, and <b>multinucleate</b> → <b>(b)</b>.<br>• (a) “involuntary + branched” describes cardiac: eliminated.<br>• (c) “non-striated” is smooth: eliminated.<br>• (d) “branched + uninucleate” smuggles in two cardiac traits: the classic distractor that catches students who only check “striated, voluntary.”',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: '<b>Assertion (A):</b> Cardiac muscle is described as striated yet involuntary. <b>Reason (R):</b> Striations arise from the specialised arrangement of myofilaments, whereas voluntary/involuntary control is determined by the type of nervous innervation.<br>Options: <b>(a)</b> Both A and R true, R correct explanation of A; <b>(b)</b> Both true, R <b>not</b> the correct explanation; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          '<b>Solution (a).</b> A is true (cardiac is the striated-but-involuntary type). R is also true and it explains A: striation reports on internal filament geometry, while control is set by innervation: two <b>independent</b> properties, which is exactly why a muscle can be striated and still involuntary. Students who believe “striated ⇒ voluntary” wrongly mark R false and pick (c).',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] In a table, differentiate skeletal and cardiac muscle on any four features.',
            a: '(any four: striations: both present; control: voluntary vs involuntary; branching: unbranched vs branched; nuclei: multi vs uni; fatigue: tires sooner vs resistant to fatigue; location: bone vs heart).',
          },
          {
            q: '[CUET] The light, isotropic band of a sarcomere is the ______ band, and the unit between two Z-lines is the ______.',
            a: 'I-band; sarcomere.',
          },
          {
            q: '[NEET] Name (i) the pair of thin-filament proteins that mask actin’s active site (they do not store calcium) and (ii) the structure that does store calcium in a muscle fibre.',
            a: '(i) troponin–tropomyosin (ii) sarcoplasmic reticulum.',
          },
          {
            q: '[NEET] Which feature is shared by skeletal and cardiac muscle but absent in smooth muscle?',
            a: 'Striations (specialised myofilament arrangement).',
          },
          {
            q: '[NEET A-R] <b>A:</b> Smooth muscle lacks striations. <b>R:</b> Smooth muscle lacks actin and myosin entirely. State whether A and R are true/false and whether R explains A. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'A true, R <b>false</b> (smooth muscle does contain actin and myosin; it simply lacks the regular striated arrangement) → R does not explain A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The structural and functional unit of a myofibril is the:',
        opts: [
          { label: 'sarcolemma', nudge: '<b>(a)</b> is the membrane.' },
          { label: 'sarcomere', nudge: null },
          { label: 'sarcoplasm', nudge: '<b>(c)</b> the cytoplasm.' },
          { label: 'sarcoplasmic reticulum', nudge: '<b>(d)</b> the calcium store.' },
        ],
        correct: 1,
        solution:
          'Sarcomere = region between two Z-lines, the repeating contractile unit. (a), (c) and (d) are all genuine muscle terms placed as traps for students who match on the “sarco-” prefix instead of the meaning.',
      },
      {
        t: 'mcq',
        q: 'Intercalated discs are characteristic of:',
        opts: [
          { label: 'skeletal muscle', nudge: null },
          { label: 'smooth muscle', nudge: null },
          { label: 'cardiac muscle', nudge: null },
          {
            label: 'all striated muscle',
            nudge:
              '<b>(d)</b> is the trap: discs are not a feature of all striated muscle: skeletal is striated but has none.',
          },
        ],
        correct: 2,
        solution: 'Intercalated discs fuse cardiac cells so they contract as one unit.',
      },
      {
        t: 'mcq',
        q: 'The two interconvertible forms of actin are:',
        opts: [
          {
            label: 'F-actin (monomer) and G-actin (polymer)',
            nudge: '<b>(a)</b> reverses them: the single most common slip; remember “<b>G</b>lobular = monomer.”',
          },
          { label: 'G-actin (monomer) and F-actin (polymer)', nudge: null },
          { label: 'head and tail', nudge: null },
          { label: 'both globular', nudge: null },
        ],
        correct: 1,
        solution: 'G = globular monomer; F = fibrous (helical) polymer.',
      },
      {
        t: 'mcq',
        q: 'Which protein of the thin filament covers actin’s active site in a resting muscle?',
        opts: [
          {
            label: 'myosin',
            nudge: '<b>(a)</b> myosin is the thick filament that wants to bind.',
          },
          { label: 'titin', nudge: '<b>(b)</b> titin is structural/elastic.' },
          { label: 'tropomyosin–troponin', nudge: null },
          {
            label: 'sarcomere',
            nudge: '<b>(d)</b> is not a protein at all: included to catch panic-guessing.',
          },
        ],
        correct: 2,
        solution: 'The tropomyosin–troponin complex masks the binding sites until calcium intervenes.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Striated ⇒ voluntary.”</b> A very common error. Cardiac is striated and involuntary. Striation = filament arrangement; control = innervation. Keep the two axes separate.',
          '<b>Reversing F- and G-actin.</b> Lock it with “<b>G</b>lobular monomer.”',
          '<b>Calling smooth muscle “actin/myosin-free.”</b> It contracts, so it has both: it just lacks the orderly striated arrangement.',
          '<b>Assigning intercalated discs to all striated muscle.</b> They are cardiac-only.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any “identify the muscle” item, decide on <b>two questions only</b>: Striped? then Branched? Striped + branched = cardiac; striped + unbranched = skeletal; unstriped = smooth. Two binary checks resolve most muscle-type MCQs without reading every option.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Three types',
            note: 'Skeletal (striated, voluntary, unbranched, multinucleate, bone) · Smooth (non-striated, involuntary, spindle, uninucleate, hollow organs) · Cardiac (striated, <b>involuntary</b>, <b>branched</b>, intercalated discs, <b>resistant to fatigue</b>, heart).',
          },
          { f: 'Striations = specialised myofilament arrangement, not a control label.', note: '' },
          {
            f: 'Hierarchy (large → small)',
            note: 'muscle → fascicle → muscle fibre → myofibril → sarcomere → filaments.',
          },
          {
            f: 'Sarcomere = unit between two Z-lines.',
            note: 'Bands: <b>A</b> (dark, both filaments, fixed length) · <b>I</b> (light, thin only) · <b>H</b> (central A-band, thick only).',
          },
          {
            f: 'Proteins',
            note: 'thin = <b>actin</b> (G monomer ↔ F polymer) + tropomyosin–<b>troponin</b> (masks active site); thick = <b>myosin</b> (head = ATPase).',
          },
          { f: 'Calcium store = sarcoplasmic reticulum. Membrane = sarcolemma.', note: '' },
        ],
        aids: [
          '“<b>G</b>lobular = monomer”',
          'muscle-type filter = “<b>Striped? Branched?</b>”',
          'cardiac = “striped rebel, takes no orders, never tires.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 1027–1032 ─────────────────────────
  {
    n: '02',
    title: 'Muscle Contraction Mechanism',
    kalam: 'Muscle shortens without its filaments ever shortening.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is a high-yield slice of the chapter (the book’s estimate from past papers, not official figures). NEET asks the <b>sliding-filament cycle</b> almost every year (the book’s estimate from past papers, not official figures): ordering the steps, the role of Ca<sup>2+</sup>/troponin, and “which band stays constant” are recurring favourites. CBSE Boards set a 3–5 mark “explain sliding filament theory with the role of Ca<sup>2+</sup>” long-answer. CUET keeps to single MCQs and step-ordering. An assertion–reason at NEET level is common.',
      },
      {
        t: 'p',
        html: 'In Topic 01 you built the machine: the sarcomere, the thick (myosin) and thin (actin) filaments, the troponin–tropomyosin guard rail. Now we switch it on. The single most important idea, and the one students most often get wrong, is this: <b>muscle shortens without its filaments ever shortening.</b> Nothing gets smaller. The thin filaments simply slide deeper between the thick ones, so the two sets overlap more. This is the <b>sliding filament theory</b>: actin (thin) slides past myosin (thick), and neither filament changes its own length.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture a tug-of-war team (myosin heads) gripping a thick rope (the actin filament). Each member grabs the rope, pulls it a little, lets go, reaches forward, grabs again, and pulls once more. No single pull moves the rope far, but hundreds of hands cycling grab-pull-release-reach haul the rope steadily in. The rope (actin) hasn’t shrunk; it has simply been dragged past the team. In muscle, the “hands” are myosin heads, the “grab” is a <b>cross-bridge</b>, the “pull” drags actin toward the centre of the sarcomere, and the energy for every grab-and-release comes from <b>ATP</b>. Multiply this across millions of sarcomeres lined up end-to-end and the whole muscle visibly shortens.',
      },
      {
        t: 'p',
        html: 'Why doesn’t this happen all the time? Because the rope is normally covered. At rest, tropomyosin (with troponin) lies over actin’s binding sites, so the myosin hands cannot grip. The “uncovering” is triggered by one ion: <b>calcium</b>. A nerve signal floods the muscle’s interior with Ca<sup>2+</sup>, calcium grabs troponin, troponin twists tropomyosin off the binding sites, and only then can the heads take hold. Cut off the calcium, the sites are re-covered, the heads let go, and the muscle relaxes.',
      },
      {
        t: 'p',
        html: 'It helps to keep the structural picture from Topic 01 in view. The myosin heads project from the thick filaments in the centre of the sarcomere; the actin filaments are anchored at the Z-lines at either end and reach inward. Contraction is nothing more than those anchored actin filaments being reeled inward past the myosin, which is why the Z-lines visibly approach each other while the central thick-filament zone (the A-band) is never disturbed. Every molecular step that follows exists only to make, hold, or break the grip between one myosin head and one actin site.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & where students slip:</b><br>• Filaments never change length. During contraction the <b>A-band stays exactly the same width</b>; it is the <b>I-band and H-zone that shrink</b>. Saying “the A-band shortens” is an instant mark lost.<br>• No ATP, no cycle. ATP is needed both to energise the pull <b>and</b> to break each cross-bridge afterwards. (This is why a body stiffens in rigor mortis: without fresh ATP, the heads cannot release.)<br>• No Ca<sup>2+</sup>, no contraction: the trigger is calcium, not the nerve signal directly.',
      },

      { t: 'part', title: 'Key definitions and diagnostic features' },
      {
        t: 'p',
        html: '• <b>Sliding filament theory</b>: contraction occurs because thin (actin) filaments slide over stationary-length thick (myosin) filaments, increasing their overlap and shortening the sarcomere.<br>• <b>Cross-bridge</b>: the temporary attachment formed when an energised myosin head binds an exposed active site on actin; one myosin filament is surrounded by about <b>six</b> actin filaments.<br>• <b>Motor unit</b>: a single motor neuron together with <b>all</b> the muscle fibres it innervates (finer control ⇒ fewer fibres per unit).<br>• <b>Motor end plate / neuromuscular junction (NMJ)</b>: the junction where the motor neuron’s axon terminal meets the sarcolemma; here the neurotransmitter (acetylcholine) is released.<br>• <b>Regulatory vs contractile proteins</b>: contractile: actin + myosin; regulatory: troponin + tropomyosin. Thin filament = actin + tropomyosin + troponin; thick filament = myosin.<br>• <b>Troponin subunits</b>: <b>TpC</b> binds Ca<sup>2+</sup>; <b>TpI</b> inhibits actin–myosin binding; <b>TpT</b> binds tropomyosin.<br>• <b>Meromyosin</b>: the myosin monomer; its <b>HMM (heavy meromyosin) = a globular head + short arm</b>, which carries both the <b>ATPase / ATP-binding site</b> and the <b>actin-binding site</b>, while the <b>LMM (light meromyosin) = the tail</b> that bundles with other tails to form the thick filament. Geometrically, one myosin filament is ringed by about <b>six actin filaments</b>, so each head always has a thin filament within reach.',
      },
      {
        t: 'p',
        html: '<b>Sarcomere bands: rest vs contraction</b> (a frequently tested table):',
      },
      {
        t: 'table',
        title: null,
        head: ['Region', 'At rest', 'During contraction'],
        rows: [
          ['A-band (thick filaments)', 'Fixed length', 'Unchanged'],
          ['I-band (thin only)', 'Present', 'Shortens'],
          ['H-zone (centre of A-band)', 'Present', 'Shortens / disappears'],
          ['Sarcomere (Z–Z)', 'Resting length', 'Shortens (Z-lines pulled in)'],
        ],
      },
      {
        t: 'p',
        html: 'A sarcomere = one A-band + two half I-bands, bounded by Z-lines.',
      },

      { t: 'part', title: 'Key mechanisms and processes: the contraction–relaxation cycle' },
      {
        t: 'p',
        html: 'Work through it as a single chain of cause and effect: each step forces the next.',
      },
      {
        t: 'p',
        html: '<b>Excitation (getting the signal in):</b> 1. The central nervous system sends a signal along a <b>motor neuron</b> to the muscle fibre. 2. At the <b>neuromuscular junction</b>, the axon terminal releases the neurotransmitter <b>acetylcholine</b>. 3. Acetylcholine generates an <b>action potential in the sarcolemma</b>, which spreads inward through the fibre. 4. The spreading action potential triggers the <b>sarcoplasmic reticulum to release Ca<sup>2+</sup></b> into the sarcoplasm. (In skeletal muscle the Ca<sup>2+</sup> is stored in the SR, held by the protein <b>calsequestrin</b>; smooth and cardiac muscle, having a less extensive SR, also draw Ca<sup>2+</sup> from extracellular fluid.)',
      },
      {
        t: 'p',
        html: '<b>Contraction (the cross-bridge cycle):</b> 5. Ca<sup>2+</sup> binds <b>troponin (TpC)</b>. This changes the shape of the troponin–tropomyosin complex, sliding tropomyosin off the actin active sites: the sites are now <b>unmasked</b>. 6. Using energy from <b>ATP hydrolysis</b> at the myosin head’s ATPase, the head binds the exposed active site, forming a <b>cross-bridge</b>. 7. The head pivots, <b>pulling the actin filament toward the centre of the A-band</b> (the “power stroke”). The attached <b>Z-lines are dragged inward</b>, so the sarcomere shortens. 8. A <b>new ATP</b> binds the myosin head, breaking the cross-bridge; the ATP is hydrolysed, re-cocking the head, which then grips a fresh site further along. 9. Steps 6–8 repeat, many heads cycling out of step, producing continuous sliding for as long as Ca<sup>2+</sup> and ATP are present. The net energy conversion is <b>chemical</b> → <b>mechanical</b>.',
      },
      {
        t: 'p',
        html: '<b>Relaxation (switching off):</b> 10. When stimulation stops, Ca<sup>2+</sup> is <b>actively pumped back into the SR cisternae</b>. 11. With Ca<sup>2+</sup> gone from troponin, tropomyosin <b>re-masks</b> the active sites; cross-bridges can no longer form, the remaining ones break, and the filaments, pulled back by elastic elements, return the Z-lines to their resting position. The muscle <b>relaxes</b>.',
      },
      {
        t: 'p',
        html: '<b>The net visible result.</b> Each round of stimulation drives one episode of shortening followed by relaxation. Because the A-band never alters while the I-band and H-zone close up and then reopen, a working muscle viewed under the microscope shows its light bands rhythmically narrowing and widening: the direct optical signature of filaments sliding inward and sliding back.',
      },
      {
        t: 'p',
        html: '<b>The energy & fatigue footnote:</b> the immediate fuel is ATP (regenerated rapidly from creatine phosphate, then aerobically). Under heavy load, oxygen runs short and the fibre shifts to <b>anaerobic respiration</b>, accumulating <b>lactic acid</b>, the chemical basis of <b>muscle fatigue</b>. Later, much of that lactic acid is carried to the liver and rebuilt into glucose and glycogen.',
      },
      {
        t: 'p',
        html: '<b>The cross-bridge cycle, seen up close.</b> Each myosin head runs the same four-beat loop. An ATP-charged head, energised by ATP hydrolysis, <b>attaches</b> to an exposed actin site; it then <b>swivels</b> in the power stroke, dragging actin toward the sarcomere centre and releasing ADP and inorganic phosphate; a fresh ATP then binds and the head <b>detaches</b>; finally that ATP is split, <b>re-cocking</b> the head for the next site along the filament. Because the many heads cycle out of phase with one another, the pull on the sarcomere is smooth and continuous rather than jerky.',
      },
      { t: 'p', html: '<b>Energetics, fibre types, and how force is graded</b>' },
      {
        t: 'p',
        html: '<b>Red vs white fibres: two energy strategies.</b> Not all skeletal fibres are wired alike. <b>Red fibres</b> are packed with mitochondria and the oxygen-storing pigment <b>myoglobin</b>; they respire aerobically, contract slowly, and sustain force for long periods without piling up much lactic acid, exactly what posture, and the flight muscles of long-distance migratory birds, demand. <b>White fibres</b> carry fewer mitochondria and little myoglobin, lean on anaerobic respiration, and deliver fast, powerful contractions that fatigue quickly. Most real muscles blend the two in job-specific proportions, which is why a sprinter’s and a marathoner’s muscles behave so differently. The lactic acid and unmet oxygen requirement of intense effort build up an <b>oxygen debt</b>: the surplus oxygen the body must take in afterwards (the heavy breathing that continues once you stop sprinting) to clear the accumulated lactic acid and recharge the fibre’s energy stores.',
      },
      {
        t: 'p',
        html: '<b>Calcium logistics differ by muscle type.</b> In skeletal muscle the Ca<sup>2+</sup> supply is held mainly inside the sarcoplasmic reticulum, bound by the protein <b>calsequestrin</b>, and released on demand. Smooth and cardiac muscle have a less extensive SR, so they draw a major part of their Ca<sup>2+</sup> from the <b>extracellular fluid</b>, a contrast NEET likes to test directly.',
      },
      {
        t: 'p',
        html: '<b>How a whole muscle grades its force.</b> A single fibre obeys the <b>all-or-none law</b>: given a threshold stimulus it contracts fully, or not at all. So the body does not make one fibre pull “harder”; it grades the strength of a movement by <b>recruiting more motor units</b> and by <b>firing them more rapidly</b>, so individual twitches fuse (summation) into a smooth, sustained contraction. This is why you can pick up both a feather and a full bucket with the same biceps. Cardiac muscle, by contrast, behaves as a single functional unit: its <b>intercalated discs</b> spread each signal across the whole sheet, so the heart contracts in an all-or-none fashion as one.',
      },
      { t: 'fig', id: 'b11-17-fig-17.3' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>(long-answer / step description)</b> State the role of Ca<sup>2+</sup> in skeletal muscle contraction, from its release to the formation of a cross-bridge.',
        steps: [
          '<b>Model answer:</b> An action potential travelling along the sarcolemma triggers the sarcoplasmic reticulum to release <b>Ca<sup>2+</sup></b> into the sarcoplasm. Ca<sup>2+</sup> binds the <b>TpC subunit of troponin</b>, changing the complex’s shape so that <b>tropomyosin shifts off the active sites of actin</b>. With the sites now exposed, the ATP-energised <b>myosin head binds actin to form a cross-bridge</b>, enabling the power stroke. Thus Ca<sup>2+</sup> is the trigger that converts the resting, masked filament into a contraction-ready one. (Concluding line examiners reward: “Removal of Ca<sup>2+</sup> reverses every step, causing relaxation.”)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>(order the steps)</b> Arrange the events of muscle contraction in correct sequence:<br>P. Ca<sup>2+</sup> released from sarcoplasmic reticulum<br>Q. Acetylcholine released at motor end plate<br>R. Sarcomere shortens<br>S. Signal sent by CNS via motor neuron<br>T. Action potential generated in sarcolemma<br><b>(a)</b> S → Q → T → P → R <b>(b)</b> S → T → Q → P → R <b>(c)</b> S → Q → P → T → R <b>(d)</b> S → P → Q → T → R',
        steps: [
          '<b>Solution (a).</b> Signal → neurotransmitter at the junction → action potential on the membrane → Ca<sup>2+</sup> release → shortening. <b>Speed cue:</b> the neurotransmitter must act <b>before</b> the membrane can fire, so Q precedes T: that single check eliminates (b), (c), (d).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>(single best answer + elimination)</b> During contraction of a skeletal muscle fibre, which is correct? <b>(a)</b> A-band shortens, I-band unchanged <b>(b)</b> A-band unchanged, I-band and H-zone shorten <b>(c)</b> Both A- and I-bands shorten equally <b>(d)</b> Only the H-zone widens',
        steps: [
          '<b>Reasoning:</b> Filaments slide, they don’t shrink; the thick-filament <b>A-band keeps its width</b>, while overlap increases so the <b>I-band and H-zone shorten</b> → <b>(b)</b>.<br>• (a) reverses the truth: the commonest trap.<br>• (c) assumes the A-band shortens: it never does.<br>• (d) a widening H-zone describes relaxation/stretch, not contraction.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: '<b>Assertion (A):</b> In a body deprived of ATP after death, muscles become stiff (rigor mortis). <b>Reason (R):</b> ATP is required to detach myosin heads from actin, breaking the cross-bridges.<br>Options: <b>(a)</b> Both true, R explains A; <b>(b)</b> Both true, R doesn’t explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          '<b>Solution (a).</b> A is true. R is true and it explains A: a new ATP molecule is needed to break each cross-bridge (step 8). With no ATP, the heads stay locked on actin, so the muscle cannot relax and goes rigid. Students who remember ATP only for the power stroke, and forget its role in detachment, wrongly mark R false and pick (c).',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Explain why the A-band does not change in width during contraction although the sarcomere shortens.',
            a: 'Only the overlap of filaments increases as actin slides in; the thick filaments (= A-band length) are unchanged, so the A-band width is constant while I-band/H-zone shrink.',
          },
          {
            q: '[CUET] The troponin subunit that binds calcium is ______; the one that binds tropomyosin is ______.',
            a: 'TpC; TpT.',
          },
          {
            q: '[NEET] Name (i) the contractile protein with ATPase activity and (ii) the immediate source of Ca<sup>2+</sup> for contraction in skeletal muscle.',
            a: '(i) myosin (ii) sarcoplasmic reticulum.',
          },
          {
            q: '[NEET] State the relationship described by a “motor unit.”',
            a: 'A single motor neuron plus all the muscle fibres it innervates.',
          },
          {
            q: '[NEET A-R] <b>A:</b> Muscle fatigue follows prolonged strenuous exercise. <b>R:</b> Anaerobic respiration leads to accumulation of lactic acid in the fibre. Evaluate A, R, and whether R explains A. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'A true, R true, R <b>is</b> the correct explanation of A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'According to the sliding filament theory, during contraction:',
        opts: [
          { label: 'myosin slides over actin', nudge: '<b>(a)</b> reverses the moving filament.' },
          { label: 'actin slides over myosin', nudge: null },
          {
            label: 'both filaments shorten',
            nudge:
              '<b>(c)</b>/<b>(d)</b> repeat the “filaments shorten” misconception the theory exists to correct.',
          },
          {
            label: 'only myosin shortens',
            nudge:
              '<b>(c)</b>/<b>(d)</b> repeat the “filaments shorten” misconception the theory exists to correct.',
          },
        ],
        correct: 1,
        solution: 'Thin actin slides past thick myosin; lengths are unchanged.',
      },
      {
        t: 'mcq',
        q: 'Calcium ions initiate contraction by binding to:',
        opts: [
          {
            label: 'tropomyosin',
            nudge: '<b>(a)</b> tropomyosin is moved, not the Ca<sup>2+</sup> receptor.',
          },
          {
            label: 'myosin head',
            nudge: '<b>(b)</b> the head binds actin, not Ca<sup>2+</sup>.',
          },
          { label: 'troponin (TpC)', nudge: null },
          {
            label: 'actin directly',
            nudge: '<b>(d)</b> actin’s sites are uncovered, not bound by Ca<sup>2+</sup>.',
          },
        ],
        correct: 2,
        solution: 'Ca<sup>2+</sup> binds TpC, repositioning tropomyosin to expose actin’s sites.',
      },
      {
        t: 'mcq',
        q: 'The ATP-binding site that powers the power stroke lies on:',
        opts: [
          { label: 'actin', nudge: null },
          { label: 'the myosin head', nudge: null },
          { label: 'tropomyosin', nudge: null },
          { label: 'troponin', nudge: null },
        ],
        correct: 1,
        solution:
          'The myosin head carries the ATPase and ATP-binding site. Distractors are the thin-filament proteins: chosen by students who confuse where the energy is spent (myosin) with where regulation happens (thin filament).',
      },
      {
        t: 'mcq',
        q: 'Relaxation of a skeletal muscle results from:',
        opts: [
          { label: 'pumping Ca<sup>2+</sup> back into the SR and re-masking of actin', nudge: null },
          {
            label: 'more ATP only',
            nudge: '<b>(b)</b> ATP alone doesn’t relax a Ca<sup>2+</sup>-flooded fibre.',
          },
          {
            label: 'sustained cross-bridge formation',
            nudge: '<b>(c)</b>/<b>(d)</b> describe continued contraction, the opposite.',
          },
          {
            label: 'increased Ca<sup>2+</sup> in sarcoplasm',
            nudge: '<b>(c)</b>/<b>(d)</b> describe continued contraction, the opposite.',
          },
        ],
        correct: 0,
        solution: 'Ca<sup>2+</sup> is sequestered back into the SR, tropomyosin re-masks the sites, cross-bridges break.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Filaments shorten.”</b> They don’t: they slide. The whole theory is named for sliding. A-band width is the giveaway: it never changes.',
          '<b>Forgetting ATP’s second job.</b> ATP both powers the stroke and detaches the head. Rigor mortis is the exam’s favourite proof.',
          '<b>Confusing trigger with signal.</b> The nerve impulse is upstream; the direct trigger that exposes actin is <b>Ca<sup>2+</sup></b>.',
          '<b>Mixing up troponin subunits.</b> Lock it: <b>C</b>alcium → Tp<b>C</b>, <b>T</b>ropomyosin → Tp<b>T</b>, <b>I</b>nhibition → Tp<b>I</b>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any “band change” question, recite <b>“A stays, I and H shrink.”</b> For any “order the steps” question, remember the fixed spine <b>signal</b> → <b>ACh</b> → <b>action potential</b> → <b>Ca<sup>2+</sup></b> → <b>slide</b>: most NEET/CUET sequencing items are a scramble of exactly these five.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Sliding filament theory',
            note: 'actin slides over myosin; filament lengths unchanged; overlap ↑ ⇒ sarcomere shortens.',
          },
          {
            f: 'Cycle spine',
            note: 'CNS signal → ACh at NMJ → action potential in sarcolemma → <b>Ca<sup>2+</sup> from SR</b> → Ca<sup>2+</sup>–TpC → tropomyosin shifts → cross-bridge (ATP) → power stroke pulls Z-lines in → new ATP detaches head → repeat → Ca<sup>2+</sup> pumped back ⇒ relaxation.',
          },
          {
            f: '<b>Bands: A stays; I and H shrink; Z-lines move in.</b>',
            note: '(Sarcomere = 1 A-band + 2 half I-bands.)',
          },
          {
            f: 'Proteins',
            note: 'contractile = actin + myosin; regulatory = troponin + tropomyosin. Troponin: <b>TpC</b> Ca<sup>2+</sup>, <b>TpT</b> tropomyosin, <b>TpI</b> inhibition.',
          },
          {
            f: 'Energy',
            note: 'ATP at myosin-head ATPase (powers and detaches); chemical → mechanical. Fatigue = lactic acid (anaerobic); some lactic acid is rebuilt into glycogen in the liver.',
          },
          {
            f: 'Players',
            note: 'motor unit = 1 neuron + all its fibres; Ca<sup>2+</sup> store = SR (calsequestrin); O<sub>2</sub> store = myoglobin.',
          },
        ],
        aids: [
          '“<b>A stays, I and H shrink</b>”',
          'troponin = “<b>C</b>alcium, <b>T</b>ropomyosin, <b>I</b>nhibit”',
          '“no ATP ⇒ no release ⇒ rigor.”',
        ],
      },
    ],
  },
];
