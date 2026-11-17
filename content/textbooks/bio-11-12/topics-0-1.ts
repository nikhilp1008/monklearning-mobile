import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 12 (Respiration in Plants), Topics 00 and 01: pp. 707 to
 * 720 of the Class 11 Biology Master Reference, word for word. Topic 00, Do
 * Plants Breathe? Gaseous Exchange in Plants (pp. 707 to 712), is the chapter's
 * “Start here” (n '00'); Topic 01, Glycolysis & Fermentation (pp. 713 to 720),
 * follows. Each is cut at the book's Sections 1 to 8. Figure 12.1 (caption
 * p. 715, drawn p. 716) is the only drawing in these pages; it is redrawn in
 * lib/diagrams/biology-11-12.ts. Emphasis italics are dropped; every em dash is
 * replaced by a colon, comma, bracket or semicolon.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 00 · pp. 707–712 ─────────────────────────
  {
    n: '00',
    title: 'Do Plants Breathe? Gaseous Exchange in Plants',
    kalam: 'Plants have no specialised respiratory organs, and remarkably, they don’t need any.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This opener is a reliable CBSE 1–2 mark short-answer (“Why do plants lack respiratory organs?”) and a recurring NEET/CUET assertion–reason theme (the book’s estimate from past papers, not official figures) built on diffusion distance, lenticels, and intercellular air spaces. It is rarely a full numerical, but the conceptual logic here is exactly what discriminators in tougher NEET papers test, so understand the reasoning, not just the list.',
      },
      {
        t: 'p',
        html: 'Here is a question that sounds silly until you actually try to answer it: a banyan tree can be larger than a blue whale, yet where are its lungs? An animal that size has a heart, a vast network of blood vessels, and lungs or gills working non-stop to pull in oxygen and push out carbon dioxide. Walk up to any tree and you will find none of that: no lungs, no gills, no blood, no breathing movements. And yet every living cell in that tree is respiring this very moment, quietly oxidising sugar to release energy. So how does the oxygen get in, and how does the carbon dioxide get out?',
      },
      {
        t: 'p',
        html: 'The answer is the central idea of this whole topic: <b>plants have no specialised respiratory organs, and remarkably, they don’t need any.</b> This is one of the cleanest examples in biology of “form follows function”, and of a problem solved by not having the machinery animals evolved.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture two ways of feeding a huge household. An animal is like a city that runs on one giant central kitchen: food is cooked in one place and then transported through a delivery network (the bloodstream) to everyone. That demands organs: a kitchen (lungs), delivery vehicles (blood), and a pump (heart). A plant takes the opposite approach: it is like a sprawling joint-family settlement where every member cooks their own meal locally. Each living cell sits close enough to the outside air that it can grab its own oxygen and dump its own carbon dioxide directly, by simple diffusion, without any central organ or transport system. No kitchen, no delivery vans, no pump, because nobody is more than a step from the pantry.',
      },
      {
        t: 'p',
        html: 'Three features make this local, organ-free strategy work. First, the parts of a plant that respire most actively (leaves, young stems, growing root tips) are thin or have a huge surface area, so very few cells are buried deep inside. Second, plant tissue is loosely packed: between the cells run continuous <b>intercellular air spaces</b>, a built-in ventilation network that lets gas seep right up to each cell. Third, and easily forgotten, <b>plants have a far lower oxygen demand than animals.</b> They don’t run, don’t maintain a warm body temperature, and much of a tree’s bulk is dead wood that doesn’t respire at all. The living cells that do respire are scattered and slow, so the trickle of oxygen that diffusion provides is entirely sufficient.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Diffusion only works over short distances, so this strategy depends on living cells being close to a source of air. Where that breaks down, plants need a small assist: the living tissue of a thick woody trunk is served by <b>lenticels</b> (loose pores in the bark), and a waterlogged root in a flooded paddy field, cut off from soil air, survives because many such plants develop <b>aerenchyma</b>, exaggerated air channels that pipe oxygen down from the shoot. So the rule “plants need no respiratory organs” is really “plants need no organs, but they do need an unbroken diffusion path to air”, and where the path is long, special tissues keep it open.',
      },

      { t: 'part', title: 'Key definitions and concepts' },
      {
        t: 'def',
        term: 'Respiration',
        html: 'the enzyme-controlled breakdown of food (chiefly glucose) to release stored chemical energy as ATP. Cellular respiration is this process at the level of the individual cell.',
      },
      {
        t: 'def',
        term: 'Breathing / gaseous exchange',
        html: 'the physical exchange of O<sub>2</sub> (taken in) and CO<sub>2</sub> (given out) between an organism and its environment. In plants this happens by <b>diffusion</b>, cell by cell: there is no bulk “breathing” movement.',
      },
      {
        t: 'def',
        term: 'Respiratory organ',
        html: 'a specialised structure for gas exchange (lung, gill, trachea). <b>Plants possess none.</b>',
      },
      {
        t: 'def',
        term: 'Routes of gaseous exchange in plants',
        html: '• <b>Stomata</b>: microscopic pores, mainly on leaf surfaces and young green stems, bounded by guard cells; the principal gateway for leaf gas exchange.<br>• <b>Lenticels</b>: lens-shaped openings in the bark/periderm of woody stems and older roots; allow gas exchange where the corky surface would otherwise be sealed.<br>• <b>Root surface / root hairs</b>: exchange gases directly with air held in the spaces between soil particles (soil air).',
      },
      {
        t: 'def',
        term: 'Intercellular spaces',
        html: 'continuous air-filled gaps between loosely packed parenchyma cells, forming an internal diffusion network connecting interior cells to the surface pores.',
      },
      {
        t: 'def',
        term: 'Aerenchyma',
        html: 'specialised tissue with very large, continuous air spaces, found in hydrophytes/marsh plants (e.g. waterlogged roots), maintaining an oxygen supply line from shoot to submerged parts.',
      },
      {
        t: 'p',
        html: '(No SI units or dimensional formulas apply to this topic: it is qualitative/structural, not quantitative.)',
      },

      { t: 'part', title: 'Key reasoning and comparative framework' },
      {
        t: 'p',
        html: '<b>Why can a plant manage without respiratory organs?</b> This is a common exam question, so reason it through as a four-link chain rather than memorising a list:',
      },
      {
        t: 'proc',
        title: 'The four-link chain',
        steps: [
          '<b>Each part respires for itself.</b> Unlike an animal, a plant does not ship much oxygen from one organ to distant tissues. Roots meet their own needs, leaves meet theirs, stems meet theirs. Because there is little gas transport between organs, there is no need for a central organ to load gas into a transport fluid.',
          '<b>The diffusion distances are short.</b> The cells doing most of the respiring lie at or near the surface (a leaf is only a few cells thick, root tips are slender, growing regions are exposed). Oxygen never has to travel far, so diffusion alone is fast enough.',
          '<b>A built-in air network exists.</b> Loosely packed parenchyma leaves continuous intercellular spaces, so even cells a little below the surface stay connected to outside air through stomata and lenticels.',
          '<b>Demand is low.</b> Plant cells respire slowly compared with active animal tissue, and a large fraction of a woody plant is non-respiring dead tissue. Low demand means a modest diffusive supply suffices.',
        ],
      },
      {
        t: 'p',
        html: '<b>The photosynthesis–respiration overlap (a classic trap).</b> In a green leaf during the day, two opposite gas exchanges run at once: respiration consumes O<sub>2</sub> and releases CO<sub>2</sub>, while photosynthesis consumes CO<sub>2</sub> and releases O<sub>2</sub>. Because daytime photosynthesis usually runs faster, the leaf shows a net uptake of CO<sub>2</sub> and net release of O<sub>2</sub>, and crucially, the O<sub>2</sub> produced inside the cell by photosynthesis largely satisfies that same cell’s respiratory need, so little external O<sub>2</sub> is even required. At night, with photosynthesis switched off, the picture is simple: only respiration operates, so the plant takes in O<sub>2</sub> and gives out CO<sub>2</sub>, just like any other organism. Students who claim “plants release O<sub>2</sub> and take in CO<sub>2</sub>” have described only daytime photosynthesis and forgotten that respiration never stops.',
      },
      {
        t: 'p',
        html: '<b>Where and when: respiration versus photosynthesis (a high-yield contrast).</b> Keep these two straight and half the exam traps on this topic disappear. Respiration occurs in <b>every living cell</b>, plant or animal, green or not (roots, woody rays, seeds, petals), and it runs <b>continuously, day and night</b>, because every living cell needs a constant ATP supply. Photosynthesis is far more restricted: only <b>green, chlorophyll-containing cells</b> can do it, and only <b>in the presence of light</b>. So a root tip respires but never photosynthesises; a leaf does both by day but only respires by night. This is also why a germinating seed or a sprouting potato in a dark store keeps consuming O<sub>2</sub> and releasing CO<sub>2</sub> despite never seeing light: respiration has no “off” switch tied to sunlight. Whenever a question contrasts the two processes, anchor on this: all cells / all the time for respiration, green cells / light only for photosynthesis.',
      },
      {
        t: 'p',
        html: '<b>Respiration is not the same as burning.</b> Both oxidise glucose and both release CO<sub>2</sub>, water, and energy, but combustion dumps all the energy at once as heat and light in an uncontrolled flash, whereas respiration releases it gradually, in small enzyme-controlled steps, trapping much of it in ATP. (The stepwise machinery (glycolysis, the Krebs cycle, the electron transport chain) and the substrates other than glucose are developed in the later topics; here we only flag that respiration is controlled, stepwise oxidation, not a fire.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Give any three reasons why plants do not require specialised respiratory organs such as lungs or gills.',
        steps: [
          '<b>Model answer.</b> (i) Each plant part takes care of its own gaseous needs, so gases are not transported over long distances between organs. (ii) The actively respiring cells lie at or near the surface, keeping diffusion distances short, so diffusion alone suffices. (iii) Loosely packed cells leave continuous intercellular air spaces that connect interior cells to surface openings (stomata, lenticels). (A valid fourth point: plants have a comparatively low oxygen demand, and much of a woody plant is non-respiring dead tissue.) The examiner is checking that you justify the absence of organs by the presence of these features, not merely assert “plants don’t breathe.”',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / Match the Column',
        q: 'Match each plant region with its principal route of gaseous exchange. (A) Leaf, (B) Woody stem/bark, (C) Root, with (i) lenticels, (ii) root surface / soil air, (iii) stomata.',
        steps: [
          '<b>Reasoning.</b> Leaves exchange gases through stomata → A–iii. Older stems are sealed by corky bark, so they rely on lens-shaped lenticels → B–i. Roots exchange directly with air trapped between soil particles → C–ii.',
          'The distractor here is pairing the woody stem with stomata, but a thick bark has lost most functional stomata, which is precisely why lenticels exist.',
        ],
        ans: 'A–iii, B–i, C–ii.',
      },
      {
        t: 'ex',
        tag: 'NEET / Assertion–Reason',
        q: 'Assertion (A): A bulky tree trunk does not suffocate even though its interior is far from the air. Reason (R): Most of the interior of a mature trunk is dead, non-respiring tissue, and the living cells are served by lenticels and intercellular spaces. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
        steps: [
          '<b>Analysis.</b> A is true: large trunks do not run out of oxygen. R is true and is the correct explanation: the heartwood is dead and demands no oxygen, while the living cells near the surface and in the rays are supplied through lenticels and the intercellular air network.',
          'A tempting wrong choice is to call A false (“surely the inside suffocates”), which ignores that the inner wood isn’t even alive.',
        ],
        ans: '(a): both true, R correctly explains A.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Reasoning',
        q: 'Rice is routinely grown in flooded fields where roots sit in waterlogged, oxygen-poor soil, yet the roots respire normally. Explain the structural adaptation that makes this possible, and why an ordinary mesophyte would struggle in the same conditions.',
        steps: [
          '<b>Reasoning.</b> In waterlogged soil the air spaces between soil particles are replaced by water, cutting off the root’s normal diffusion supply of O<sub>2</sub>. Rice and similar hydrophytes solve this with <b>aerenchyma</b>: tissue riddled with large, continuous air channels that run from the well-aerated shoot down into the submerged root, effectively piping oxygen internally to the root cells. An ordinary mesophyte lacks this continuous internal air column, so once soil air is displaced its root cells cannot get oxygen by diffusion, respiration in the root falters, and the plant suffers. The deeper point: plants escape needing respiratory organs only as long as a diffusion path to air exists; when the environment severs that path, the surviving plants are those that evolved a tissue-level fix to keep the path open.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define gaseous exchange in plants and name the three main structures through which it occurs.',
            a: 'Gaseous exchange = diffusion-based intake of O<sub>2</sub> and release of CO<sub>2</sub> between plant and environment; via stomata, lenticels, and the root/soil-air surface.',
          },
          {
            q: '[CUET] State whether each is true or false: (a) Plants have lungs analogous to animals. (b) Lenticels occur in woody stems. (c) At night a plant takes in O<sub>2</sub> and releases CO<sub>2</sub>.',
            a: '(a) False, (b) True, (c) True.',
          },
          {
            q: '[NEET] Explain why the oxygen released during photosynthesis in a leaf cell reduces that cell’s need to take up oxygen from outside during the day.',
            a: 'The O<sub>2</sub> generated inside the cell by photosynthesis is available in situ for that cell’s respiration, so little external O<sub>2</sub> need diffuse in during daylight.',
          },
          {
            q: '[NEET] Why is the respiratory rate of a plant generally much lower than that of an animal of comparable mass?',
            a: 'Because plants are generally non-motile, do not keep a constant warm body temperature, and have a large proportion of dead/inactive tissue, giving a low overall O<sub>2</sub> demand.',
          },
          {
            q: '[NEET High-Difficulty] A student argues that diffusion is “too slow” to supply oxygen to a tree and that plants must therefore have a hidden transport system. Identify the flaw in this argument using the concepts of demand and distance.',
            a: 'The argument confuses animal-scale demand with plant-scale demand: plants respire slowly and their living, respiring cells lie close to air via intercellular spaces, so the short diffusion distances plus low demand make diffusion fully adequate: no transport system is required.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Plants do not possess specialised respiratory organs mainly because:',
        opts: [
          { label: 'plants do not respire at all', nudge: '<b>(a)</b> is false: plants respire continuously.' },
          { label: 'each plant part meets its own gas-exchange needs over short diffusion distances', nudge: null },
          {
            label: 'plants store oxygen in vacuoles for later use',
            nudge: '<b>(c)</b> is invented; vacuoles do not stockpile O<sub>2</sub>.',
          },
          {
            label: 'the bloodstream of plants distributes oxygen efficiently',
            nudge: '<b>(d)</b> is the classic animal-physiology import: plants have no bloodstream.',
          },
        ],
        correct: 1,
        solution: 'Local, short-range diffusion to each part removes the need for organs.',
      },
      {
        t: 'mcq',
        q: 'Lenticels are most directly associated with gaseous exchange in:',
        opts: [
          { label: 'young leaves', nudge: '<b>(a)</b> and <b>(b)</b> belong to stomatal exchange in green tissue.' },
          { label: 'guard cells', nudge: '<b>(a)</b> and <b>(b)</b> belong to stomatal exchange in green tissue.' },
          { label: 'woody stems and old roots', nudge: null },
          { label: 'root hairs', nudge: '<b>(d)</b> is the soil-air route, not a lenticel.' },
        ],
        correct: 2,
        solution:
          'Lenticels are pores in bark/periderm that ventilate woody parts whose surface is otherwise corky and sealed.',
      },
      {
        t: 'mcq',
        q: 'During the daytime, a brightly illuminated leaf shows a net:',
        opts: [
          {
            label: 'uptake of O<sub>2</sub> and release of CO<sub>2</sub>',
            nudge: '<b>(a)</b> describes night-time (respiration only): a classic trap for students who forget the day/night switch.',
          },
          { label: 'uptake of CO<sub>2</sub> and release of O<sub>2</sub>', nudge: null },
          { label: 'no gas exchange at all', nudge: '<b>(c)</b> is wrong because both processes are active.' },
          {
            label: 'release of both O<sub>2</sub> and CO<sub>2</sub>',
            nudge: '<b>(d)</b> ignores that CO<sub>2</sub> is being consumed by photosynthesis.',
          },
        ],
        correct: 1,
        solution: 'Daytime photosynthesis outpaces respiration, so the leaf nets CO<sub>2</sub> in and O<sub>2</sub> out.',
      },
      {
        t: 'mcq',
        q: 'The continuous air-filled gaps that let interior cells exchange gases with the atmosphere are the:',
        opts: [
          {
            label: 'xylem vessels',
            nudge: '<b>(a)</b> xylem carries water, not respiratory gases as its function.',
          },
          { label: 'intercellular spaces of loosely packed parenchyma', nudge: null },
          { label: 'sieve tubes', nudge: '<b>(c)</b> sieve tubes transport food.' },
          {
            label: 'cuticle pores',
            nudge: '<b>(d)</b> the cuticle is a waterproof barrier, not a gas-exchange channel.',
          },
        ],
        correct: 1,
        solution: 'The loosely packed parenchyma’s intercellular spaces form the internal ventilation network.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Plants breathe in CO<sub>2</sub> and breathe out O<sub>2</sub>.”</b> This describes only daytime photosynthesis. Respiration runs day and night and is the opposite exchange; at night the plant clearly takes in O<sub>2</sub> and gives out CO<sub>2</sub>.',
          '<b>Confusing breathing with respiration.</b> Breathing/gaseous exchange is the physical swap of gases; respiration is the biochemical energy release. Plants do the second constantly but never “breathe” in the muscular animal sense.',
          '<b>Assuming a transport system.</b> Students import animal logic and look for a plant “circulatory” route for oxygen. There isn’t one: each part largely manages its own gas exchange.',
          '<b>Forgetting woody interiors are mostly dead.</b> This is why thick trunks don’t suffocate, and it’s the key to the trickiest assertion–reason items.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> For any “why no respiratory organ?” question, answer with the pair <b>“low demand + short distance”</b> and then name the air-route relevant to the organ in question (stomata for leaves, lenticels for bark, soil air for roots). That two-part anchor plus one route earns nearly full marks and keeps you from rambling.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Plants have NO respiratory organs and need none</b>',
            note: 'gas exchange is by <b>diffusion</b>, cell by cell.',
          },
          {
            f: '<b>Four reasons</b>',
            note: 'each part self-sufficient · short diffusion distances · continuous intercellular air spaces · low O<sub>2</sub> demand (much tissue is dead/inactive).',
          },
          {
            f: '<b>Routes</b>',
            note: 'leaves → <b>stomata</b>; woody stems/old roots → <b>lenticels</b>; roots → <b>soil air / root surface</b>.',
          },
          {
            f: '<b>Day vs night</b>',
            note: 'a brightly lit daytime leaf nets CO<sub>2</sub> in / O<sub>2</sub> out (photosynthesis > respiration); night = O<sub>2</sub> in / CO<sub>2</sub> out (respiration only).',
          },
          {
            f: '<b>Aerenchyma</b> keeps waterlogged (hydrophyte) roots supplied with O<sub>2</sub> from the shoot.',
            note: '',
          },
          {
            f: '<b>Respiration ≠ combustion</b>',
            note: 'controlled, stepwise, enzyme-driven oxidation trapping energy in ATP, not an uncontrolled burn.',
          },
        ],
        aids: [
          '“Low demand, short distance”: the whole reason plants skip lungs.',
          '“Stomata–Lenticel–Soil”: leaf, bark, root, in that order.',
          '“Day breathes green, night breathes like us”: net gas direction by time of day.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 01 · pp. 713–720 ─────────────────────────
  {
    n: '01',
    title: 'Glycolysis & Fermentation',
    kalam: 'Glycolysis is the controlled breaking of glucose into two molecules of a three-carbon acid, pyruvic acid.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Glycolysis is a near-guaranteed CBSE Board short-answer (the step sequence and net ATP gain) and a high-yield NEET zone: expect 1–2 direct questions every year (the book’s estimate from past papers, not official figures) on enzymes, the substrate-level phosphorylation steps, and the alcoholic-vs-lactic fork. CUET favours match-the-column and assertion–reason framing. NEET’s tougher items hide errors inside the EMP sequence or the ATP balance sheet, so precision matters more than memory here.',
      },
      {
        t: 'p',
        html: 'Imagine a long-distance train that has to cross the entire country, but the very first leg (from the origin station to the first major junction) runs on tracks that need no electric overhead line. It works in daylight, at night, in a power cut, anywhere. Only after that junction does the train need the electrified mainline. Glycolysis is that first universal leg of cellular respiration. Essentially every living cell (your muscle, a mango leaf, a yeast bud, a bacterium) runs glycolysis in the cytoplasm, whether or not oxygen is around.',
      },
      {
        t: 'p',
        html: 'Here is the core idea. A cell stores energy in glucose, a six-carbon sugar, but it cannot use that energy in one giant burst: that would be like trying to spend a Rs. 2000 note at a tea stall. The cell needs change. Glycolysis is the controlled breaking of glucose into two molecules of a three-carbon acid, <b>pyruvic acid</b>, releasing a small, usable amount of energy along the way. The word itself says it: glykos (sugar) + lysis (splitting). The whole sequence happens in the <b>cytoplasm</b>, not inside any organelle, which is exactly why even a bacterium with no mitochondria can do it.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> the cell first spends a little energy before it earns any. It invests 2 ATP up front to “activate” the glucose (you pay a small deposit to unlock a locker), and only later does it collect 4 ATP back. The net profit is therefore modest, <b>just 2 ATP per glucose</b>, but the pathway also banks something more valuable for later: 2 molecules of <b>NADH</b>, which are like loaded batteries the cell can cash in for far more ATP if oxygen is available downstream.',
      },
      {
        t: 'p',
        html: 'That “if” is the whole drama of this topic. When oxygen is present, pyruvate marches into the mitochondria for the electrified mainline. But when oxygen runs short (a sprinter’s thigh muscle mid-race, yeast sealed in a dough, waterlogged roots in a flooded paddy field), the cell hits a problem. Glycolysis needs a steady supply of NAD<sup>+</sup> to keep going, and it only has a tiny pool of it. Without oxygen to recycle the NADH back to NAD<sup>+</sup>, glycolysis would choke within seconds. <b>Fermentation</b> is the cell’s emergency workaround: it dumps the hydrogen from NADH onto pyruvate itself, regenerating NAD<sup>+</sup> so the assembly line keeps moving. The cell sacrifices efficiency to keep the lights on.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Glycolysis is often called “anaerobic”, but that label is misleading: it does not require the absence of oxygen; it simply does not need oxygen. It runs identically in aerobic and anaerobic conditions. Fermentation, by contrast, is genuinely anaerobic and is a dead-end detour: it extracts less than 7% of the chemical energy in glucose and yields no extra ATP beyond glycolysis’s net 2. It is a survival tactic, not an energy strategy, which is why a sprinter can only sustain it for seconds before lactic acid builds up and the muscle tires.',
      },

      { t: 'part', title: 'Key definitions, pathways and net reactions' },
      {
        t: 'def',
        term: 'Glycolysis (EMP pathway)',
        html: 'the partial oxidation of one glucose molecule into two molecules of pyruvic acid, occurring in the cytoplasm. Named after <b>E</b>mbden, <b>M</b>eyerhof and <b>P</b>arnas, who worked out the scheme.',
      },
      {
        t: 'formula',
        kicker: 'Net summary of glycolysis (per glucose)',
        main: 'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 2 NAD<sup>+</sup> + 2 ADP + 2 P<sub>i</sub> → 2 C<sub>3</sub>H<sub>4</sub>O<sub>3</sub> + 2 NADH + 2 H<sup>+</sup> + 2 ATP + 2 H<sub>2</sub>O',
        legend: [],
        note: null,
      },
      { t: 'p', html: 'The accounting that students are tested on:' },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Value (per glucose)', 'Where it happens'],
        rows: [
          ['ATP invested', '2', 'hexokinase step + phosphofructokinase step'],
          ['ATP produced (gross)', '4', 'two substrate-level phosphorylation steps, ×2 trioses'],
          ['<b>Net ATP gain</b>', '<b>2</b>', '4 − 2'],
          ['NADH formed', '2', 'glyceraldehyde-3-phosphate → 1,3-BPGA'],
          ['Pyruvate formed', '2', 'end product'],
        ],
      },
      {
        t: 'def',
        term: 'Substrate-level phosphorylation',
        html: 'direct transfer of a phosphate group from a high-energy substrate to ADP, forming ATP: no electron transport chain involved. Occurs in glycolysis at two steps: 1,3-BPGA → 3-PGA and PEP → pyruvate.',
      },
      {
        t: 'def',
        term: 'Key enzymes to lock in',
        html: '• <b>Hexokinase</b>: first step; phosphorylates glucose. Blocking it halts the entire pathway.<br>• <b>Phosphofructokinase (PFK)</b>: the <b>“pacemaker”</b> / rate-limiting enzyme of glycolysis.<br>• <b>Aldolase</b>: splits the 6-C sugar into two 3-C trioses.<br>• <b>PGAL dehydrogenase</b>: the only oxidation step; produces NADH.<br>• <b>Enolase</b>: removes water from 2-phosphoglycerate to form PEP.<br>• <b>Pyruvate kinase</b>: final ATP-forming step.',
      },
      {
        t: 'def',
        term: 'Fermentation',
        html: 'anaerobic, incomplete breakdown of glucose in which pyruvate (or its derivative) acts as the final hydrogen acceptor, regenerating NAD<sup>+</sup>. Net gain stays at <b>2 ATP</b> per glucose.',
      },
      {
        t: 'formula',
        kicker: 'Alcoholic',
        main: 'Pyruvate →<sup>pyruvate decarboxylase</sup> Acetaldehyde + CO<sub>2</sub> →<sup>alcohol dehydrogenase</sup> Ethanol',
        legend: [],
        note: 'Acetaldehyde + NADH + H<sup>+</sup> → Ethanol + NAD<sup>+</sup>',
      },
      {
        t: 'formula',
        kicker: 'Lactic acid',
        main: 'Pyruvate + NADH + H<sup>+</sup> →<sup>lactate dehydrogenase</sup> Lactic acid + NAD<sup>+</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '(No SI/dimensional formulas apply: these are stoichiometric and enzymatic relationships, not dimensioned physical quantities.)',
      },

      { t: 'part', title: 'Key procedures and mechanisms' },
      {
        t: 'p',
        html: '<b>The ten-step EMP pathway, in plain logic.</b> Don’t memorise it as a chant; understand it as two phases: an investment phase and a payoff phase.',
      },
      { t: 'fig', id: 'b11-12-fig-12.1' },
      {
        t: 'p',
        html: '<b>Investment phase (steps 1–3):</b><br>1. <b>Glucose → Glucose-6-phosphate.</b> Hexokinase attaches a phosphate (from ATP). This traps glucose inside the cell and primes it. Why? A charged, phosphorylated sugar cannot leak back out through the membrane: the glucose is now held inside the cell.<br>2. <b>Glucose-6-P → Fructose-6-P.</b> An isomerisation; the molecule is rearranged so the next phosphate can be added symmetrically.<br>3. <b>Fructose-6-P → Fructose-1,6-bisphosphate.</b> Phosphofructokinase spends a second ATP. Why here? This is the committed, irreversible, rate-limiting step, the cell’s main “go/no-go” valve, which is why PFK is the pacemaker.',
      },
      {
        t: 'p',
        html: '<b>Splitting:</b><br>4. <b>Aldolase</b> cleaves the 6-carbon F-1,6-bisP into two 3-carbon trioses: glyceraldehyde-3-phosphate (G3P) and dihydroxyacetone phosphate (DHAP). Only G3P continues, so <b>triose phosphate isomerase</b> converts DHAP into a second G3P. From here, everything happens twice per glucose. (The steps here are numbered 1 to 9 because triose phosphate isomerase is folded into step 4; counted separately, glycolysis is ten reactions.)',
      },
      {
        t: 'p',
        html: '<b>Payoff phase (per G3P, so double everything):</b><br>5. <b>G3P → 1,3-bisphosphoglycerate.</b> PGAL dehydrogenase oxidises the triose, and the released hydrogen reduces NAD<sup>+</sup> to <b>NADH</b>. This is the single oxidation event of glycolysis, and the reason students must remember exactly this step when asked “where is NADH formed?”<br>6. <b>1,3-BPGA → 3-phosphoglycerate.</b> First ATP harvest, by substrate-level phosphorylation.<br>7. <b>3-PGA → 2-PGA.</b> A simple shift of the phosphate position (mutase).<br>8. <b>2-PGA → PEP.</b> Enolase removes a water molecule, creating a high-energy phosphate bond in phosphoenolpyruvate.<br>9. <b>PEP → Pyruvate.</b> Pyruvate kinase harvests the second ATP, again by substrate-level phosphorylation.',
      },
      {
        t: 'p',
        html: 'Tally per glucose: invested 2, produced 4, <b>net 2 ATP</b>, plus 2 NADH and 2 pyruvate.',
      },
      {
        t: 'p',
        html: '<b>The fermentation mechanism: why it exists.</b> Notice that step 5 consumes NAD<sup>+</sup>. The cell’s NAD<sup>+</sup> pool is tiny, so it must be continuously recycled from NADH. With oxygen, the mitochondrial electron transport chain does this recycling. Without oxygen, the cell uses pyruvate as a disposal site for the hydrogen:<br>• <b>In yeast (alcoholic):</b> pyruvate is decarboxylated (losing CO<sub>2</sub>) to acetaldehyde, which is then reduced to ethanol, and that reduction is what oxidises NADH back to NAD<sup>+</sup>. Yeast poison themselves once ethanol reaches about <b>13%</b>.<br>• <b>In animal muscle and some bacteria (lactic):</b> pyruvate is directly reduced to lactic acid by lactate dehydrogenase, regenerating NAD<sup>+</sup>. <b>No CO<sub>2</sub></b> is released: a common NEET discriminator.<br>Either way the purpose is identical: keep NAD<sup>+</sup> available so glycolysis, and its trickle of 2 ATP, never stops.',
      },
      {
        t: 'p',
        html: '<b>Pyruvate is the crossroads.</b> This is the chapter’s key branch point, the “where do I go next?” molecule, so fix it now. Glycolysis is universal: it runs in essentially every living organism, which is why pyruvate sits at a junction shared by two fates. (i) If oxygen is <b>absent,</b> pyruvate becomes the hydrogen-dumping ground of fermentation, turning into ethanol or lactic acid. (ii) If oxygen is <b>present,</b> pyruvate is instead transported into the mitochondrion, where it is oxidatively decarboxylated, losing CO<sub>2</sub> and joining the aerobic mainline (the link reaction and the Krebs cycle, covered in the next topics). The same three-carbon acid therefore decides whether the cell settles for a meagre net 2 ATP or unlocks the far larger aerobic harvest. Hold that fork in mind: everything in Respiration that follows hangs off this one branch point.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'A student writes that “glycolysis gives a net gain of 4 ATP.” Identify the error and present the correct ATP balance sheet for glycolysis.',
        steps: [
          '<b>Reasoning.</b> The figure 4 is the gross ATP produced, not the net. We must subtract the ATP invested in the priming phase.<br>• ATP produced (substrate-level, two steps × two trioses) = 4<br>• ATP consumed (hexokinase + phosphofructokinase) = 2<br>• <b>Net gain</b> = 4 − 2 =',
          'Alongside, glycolysis yields <b>2 NADH</b> and <b>2 pyruvate</b> per glucose. The student confused gross output with net output, a very common slip.',
        ],
        ans: '2 ATP per glucose',
      },
      {
        t: 'ex',
        tag: 'CUET / NEET Speed Trap',
        q: 'In which step of glycolysis is reducing power (NADH) generated, and how many NADH are produced per glucose?',
        steps: [
          '<b>Quick elimination.</b> Glycolysis has exactly one oxidation step. Scan the pathway: phosphorylations and isomerisations don’t produce NADH; only an oxidation does. That is the conversion of <b>glyceraldehyde-3-phosphate → 1,3-bisphosphoglycerate</b> (enzyme: PGAL dehydrogenase). Because each glucose yields two trioses, this step runs twice → <b>2 NADH per glucose.</b>',
          '<b>Trap to avoid:</b> a tempting distractor is “PEP → pyruvate”, because it sounds energetic, but that step makes ATP, not NADH. Reducing power = the dehydrogenase step only.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'A respiring yeast culture is abruptly sealed off from oxygen. Predict, with reasoning, what happens to (i) the rate of glycolysis, (ii) CO<sub>2</sub> output, and (iii) net ATP yield per glucose.',
        steps: [
          '<b>Reasoning.</b> (i) With oxygen gone, the mitochondrial chain can no longer recycle NADH. Yeast switches to <b>alcoholic fermentation</b> to regenerate NAD<sup>+</sup>, so glycolysis continues, often even speeds up, since it is now the cell’s only ATP source.',
          '(ii) Alcoholic fermentation decarboxylates pyruvate to acetaldehyde, so <b>CO<sub>2</sub> is still released.</b> (Had this been a muscle cell doing lactic fermentation, the answer would flip: no CO<sub>2</sub>.)',
          '(iii) Without the electron transport chain, the 2 NADH cannot be cashed in for ATP. The net yield collapses to glycolysis’s <b>2 ATP per glucose</b>, a steep drop from the aerobic figure.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: 'Assertion (A): If hexokinase is competitively inhibited, lactic acid fermentation in a muscle cell also stops (taking free glucose as the cell’s only fuel). Reason (R): Hexokinase catalyses the first reaction of glycolysis, and fermentation depends on pyruvate supplied by glycolysis. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
        steps: [
          '<b>Analysis.</b> Hexokinase catalyses step 1 (glucose → glucose-6-phosphate). Block it and glucose is never phosphorylated, so the entire pathway halts and no pyruvate is produced. Fermentation has no substrate to act on, so it stops too. <b>A is true.</b> R correctly states hexokinase’s role and correctly identifies that fermentation is downstream of glycolysis, dependent on glycolytic pyruvate. <b>R is true, and it is the correct explanation of A.</b>',
        ],
        ans: '(a): both true, R explains A.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State the location of glycolysis in the cell and name the two enzymes that consume ATP during the pathway.',
            a: 'Cytoplasm; hexokinase and phosphofructokinase.',
          },
          {
            q: '[CUET] Match the enzyme with its reaction: (A) Aldolase (B) Enolase (C) Pyruvate kinase (D) Hexokinase, with (i) PEP → pyruvate, (ii) glucose → G-6-P, (iii) F-1,6-bisP → 2 trioses, (iv) 2-PGA → PEP.',
            a: 'A–iii, B–iv, C–i, D–ii.',
          },
          {
            q: '[NEET] During vigorous exercise a sprinter’s calf muscle accumulates a 3-carbon acid and tires. Name the acid, the enzyme, and explain why no CO<sub>2</sub> is liberated.',
            a: 'Lactic acid; lactate dehydrogenase; pyruvate is reduced directly without a decarboxylation step, so no CO<sub>2</sub>.',
          },
          {
            q: '[NEET] A cell yields 2 pyruvate, 2 ATP (net) and 2 NADH from one glucose, then stops at pyruvate. Which downstream condition is missing, and what is the cell most likely doing instead?',
            a: 'Oxygen (and the functional electron transport chain) is missing; the cell is fermenting.',
          },
          {
            q: '[NEET High-Difficulty] Explain why the rate of glycolysis frequently increases when a facultative anaerobe is shifted from aerobic to anaerobic conditions, despite the ATP yield per glucose falling sharply.',
            a: 'To meet the same ATP demand from a far less efficient net-2-ATP pathway, the cell must process much more glucose per unit time (the “Pasteur effect”–type compensation).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Glycolysis is correctly described as:',
        opts: [
          {
            label: 'occurring in the mitochondrial matrix',
            nudge: '<b>(a)</b> is wrong: it occurs in the cytoplasm, a classic trap because later stages are mitochondrial.',
          },
          {
            label: 'requiring molecular oxygen',
            nudge: '<b>(b)</b> is wrong: glycolysis does not need molecular oxygen. It runs with or without O<sub>2</sub>, so do not confuse “does not require O<sub>2</sub>” with “occurs only without O<sub>2</sub>”.',
          },
          { label: 'a pathway common to both aerobic and anaerobic respiration', nudge: null },
          {
            label: 'producing 4 ATP net per glucose',
            nudge: '<b>(d)</b> is the gross–net confusion: 4 is gross, net is 2.',
          },
        ],
        correct: 2,
        solution: 'Glycolysis is the shared first stage of all respiration, oxygen-independent.',
      },
      {
        t: 'mcq',
        q: 'A molecule of CO<sub>2</sub> is released during:',
        opts: [
          {
            label: 'lactic acid fermentation',
            nudge: '<b>(a)</b> is the prime trap: students assume all fermentation releases CO<sub>2</sub>, but lactic fermentation does not.',
          },
          { label: 'alcoholic fermentation', nudge: null },
          {
            label: 'glycolysis',
            nudge: '<b>(c)</b> glycolysis releases no CO<sub>2</sub> at all (it ends at pyruvate).',
          },
          {
            label: 'the G3P → 1,3-BPGA step',
            nudge: '<b>(d)</b> is an oxidation/NADH step, not a decarboxylation.',
          },
        ],
        correct: 1,
        solution: 'Pyruvate decarboxylase removes CO<sub>2</sub> when converting pyruvate to acetaldehyde in yeast.',
      },
      {
        t: 'mcq',
        q: 'The “pacemaker” (rate-limiting) enzyme of glycolysis is:',
        opts: [
          {
            label: 'hexokinase',
            nudge: '<b>(a)</b> is the seductive distractor: hexokinase is the first enzyme, so students equate “first” with “controlling”, but it isn’t rate-limiting.',
          },
          { label: 'phosphofructokinase', nudge: null },
          {
            label: 'pyruvate kinase',
            nudge: '<b>(c)</b> and <b>(d)</b> act in the payoff phase and don’t govern pathway speed.',
          },
          {
            label: 'enolase',
            nudge: '<b>(c)</b> and <b>(d)</b> act in the payoff phase and don’t govern pathway speed.',
          },
        ],
        correct: 1,
        solution: 'PFK catalyses the committed, irreversible F-6-P → F-1,6-bisP step and controls overall flux.',
      },
      {
        t: 'mcq',
        q: 'In alcoholic fermentation, NAD<sup>+</sup> is regenerated during the:',
        opts: [
          {
            label: 'decarboxylation of pyruvate to acetaldehyde',
            nudge: '<b>(a)</b> only removes CO<sub>2</sub>; no redox recycling there.',
          },
          { label: 'reduction of acetaldehyde to ethanol', nudge: null },
          {
            label: 'conversion of glucose to G-6-P',
            nudge: '<b>(c)</b> consumes ATP, unrelated to NAD<sup>+</sup>.',
          },
          {
            label: 'oxidation of G3P',
            nudge: '<b>(d)</b> consumes NAD<sup>+</sup> (makes NADH): the opposite of regeneration.',
          },
        ],
        correct: 1,
        solution:
          'The final reduction step (acetaldehyde → ethanol) is where NADH hands off its hydrogen and becomes NAD<sup>+</sup> again.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Gross vs net ATP.</b> A very common Board/NEET error: writing 4 instead of 2. Always subtract the 2 invested.',
          '<b>“Anaerobic” mis-reading.</b> Glycolysis does not need oxygen, but it is not blocked by oxygen either: it runs in both conditions. Reserve “strictly anaerobic” for fermentation.',
          '<b>CO<sub>2</sub> in the wrong fermentation.</b> Lactic acid fermentation releases <b>no</b> CO<sub>2</sub>; only the alcoholic route does. Examiners often test this.',
          '<b>Reducing power confusion.</b> Glycolysis makes <b>NADH</b>, never NADPH (some printed diagrams get this wrong). NADPH belongs to the biosynthetic/photosynthetic side, not glycolysis.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> When asked any “how many?” question, anchor to one number (<b>2</b>) and reason outward: 2 ATP net, 2 NADH, 2 pyruvate, 2 trioses, ATP invested at 2 steps, ATP harvested at 2 steps (×2 trioses = 4 gross). Almost every glycolysis numerical falls out of that pattern, so you rarely need to recall the full ten-step chain under time pressure.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Glycolysis = EMP pathway</b>, cytoplasm, common to aerobic + anaerobic respiration; one glucose → <b>2 pyruvate</b>.',
            note: '',
          },
          {
            f: '<b>Net per glucose</b>',
            note: '2 ATP, 2 NADH, 2 pyruvate (gross 4 ATP − 2 invested).',
          },
          {
            f: '<b>ATP invested</b>',
            note: 'hexokinase (step 1) + <b>phosphofructokinase</b> (pacemaker, step 3).',
          },
          {
            f: '<b>NADH made at</b>',
            note: 'G3P → 1,3-BPGA (PGAL dehydrogenase); the only oxidation step.',
          },
          {
            f: '<b>ATP made by substrate-level phosphorylation at</b>',
            note: '1,3-BPGA → 3-PGA and PEP → pyruvate.',
          },
          {
            f: '<b>Fermentation (anaerobic, net 2 ATP, less than 7% energy)</b>',
            note: '<b>Alcoholic</b>: pyruvate → acetaldehyde (+CO<sub>2</sub>) → ethanol; yeast die ~13% alcohol. <b>Lactic</b>: pyruvate → lactic acid, <b>no CO<sub>2</sub></b>; lactic acid builds up and the muscle tires. Purpose: regenerate NAD<sup>+</sup>.',
          },
        ],
        aids: [
          '“Invest 2, earn 4, keep 2”: the ATP balance in a nutshell.',
          '“PFK Paces”: Phosphofructokinase is the Pacemaker.',
          '“Alcohol Airs CO<sub>2</sub>, Lactic Locks it in”: only alcoholic fermentation releases CO<sub>2</sub>.',
        ],
      },
    ],
  },
];
