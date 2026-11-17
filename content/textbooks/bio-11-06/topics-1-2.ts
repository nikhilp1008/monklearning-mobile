import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 6 (Anatomy of Flowering Plants), Topics 01 and 02: pp. 354
 * to 368 of the Class 11 Biology Master Reference, word for word. The chapter
 * title and the contents box at the top of p. 354 are not copied. Topic 01,
 * Meristematic & Simple Permanent Tissues (pp. 354–361), and Topic 02, Complex
 * Permanent Tissues (Xylem & Phloem) (pp. 362–368), are each cut at the book’s
 * Sections 1 to 8. Figure 6.1 (caption p. 357, drawn p. 358) and Figure 6.2
 * (caption p. 365, drawn p. 366) are redrawn in lib/diagrams/biology-11-06.ts;
 * these pages draw nothing else. Emphasis italics are dropped; the book’s long
 * dash used as a separator is written as a colon, comma or bracket.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 354–361 ─────────────────────────
  {
    n: '01',
    title: 'Meristematic & Simple Permanent Tissues',
    kalam:
      'A tissue is simply a group of cells that share a common origin and usually perform a common function.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A reliable scorer across every board this chapter touches. CBSE Boards favour 1–2 mark “distinguish between” and diagram-labelling questions on the three simple tissues. CUET leans on direct fact-recall (which tissue is living/dead, where each occurs). NEET pushes harder: match-the-column grids, “which is not true” elimination, and assertion–reason pairs on collenchyma corner-thickening and sclereid distribution are perennial. Tissue questions are a frequent topic in NEET (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: 'Step outside and look at any tree on your street. From the outside you see bark, leaves, a trunk. But if you could slice that trunk like a cucumber and look at the cut face under a lens, you would find it is not one uniform substance at all: it is a city. Different neighbourhoods of cells, each built for a different job: some soft and plump for storage, some reinforced at the joints for flexible support, some hardened into near-rock for sheer strength. <b>Anatomy is the study of this internal architecture of plants</b>: what the building is made of on the inside, as opposed to morphology, which describes its outside shape. Keep that wall firmly in mind: in this chapter “root”, “stem” and “leaf” mean what they look like in cross-section, not their external form.',
      },
      {
        t: 'p',
        html: 'A <b>tissue</b> is simply a group of cells that share a common origin and usually perform a common function. The word “usually” is doing real work there: it is a favourite trap. Cells of one tissue mostly do one job, but not always identically.',
      },
      {
        t: 'p',
        html: 'Now, here is one of the most important divides in the whole chapter. Think about it this way: a plant is like a growing company. Some employees are trainees in the academy: their entire job is to keep dividing, multiplying the workforce, and they have not yet been assigned a department. Others have graduated, been posted to a department, and stopped attending the academy: they now do storage, or support, or transport, and they have given up the ability to divide. The trainees are <b>meristematic tissue</b>; the posted, specialised, non-dividing staff are <b>permanent tissue</b>. Every cell in the plant body traces back to a meristem.',
      },
      { t: 'p', html: 'Meristems are classified by where they sit:' },
      {
        t: 'p',
        html: '• <b>Apical meristems</b> sit at the very tips of roots and shoots. They drive primary growth: they make the plant taller and the root longer. At the shoot tip the apical meristem also throws off a <b>leaf primordium</b> (a baby leaf) and leaves behind an <b>axillary bud</b> in the angle (axil) of each leaf, which can later become a branch.<br>• <b>Intercalary meristems</b> are pockets of dividing tissue left between mature regions, classically at the base of grass internodes. This is exactly why a lawn or a sugarcane field keeps growing back after the grazing cow or the mower takes the top off: the growth engine is low down, not at the cut tip. A clever survival design.<br>• <b>Lateral meristems</b> run along the sides of the axis and cause the plant to grow thicker (secondary growth). The fascicular cambium, interfascicular cambium, and cork cambium are the lateral meristems: we meet them properly in Topic 04.',
      },
      {
        t: 'p',
        html: 'Once a meristematic cell stops dividing and specialises, it becomes a <b>permanent tissue</b> cell. Permanent tissues come in two flavours: <b>simple</b> (all cells of one type, like a team of identical workers) and <b>complex</b> (several cell types working as one unit: that is xylem and phloem, which belong to the next topic). This topic is about the three <b>simple</b> permanent tissues: <b>parenchyma, collenchyma, and sclerenchyma</b>. A neat way to feel their personalities: parenchyma is the soft generalist, collenchyma is the flexible supporter, and sclerenchyma is the dead bodyguard.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions worth flagging early.</b> The “living vs dead” rule is clean only at the extremes: parenchyma and collenchyma are alive at maturity; sclerenchyma is dead. Do not over-extend: a tissue being “mechanical/supporting” does <b>not</b> make it sclerenchyma (collenchyma is also mechanical, yet living and unlignified). And “thick-walled” is ambiguous unless you say where the thickening is and whether it is lignified: that single distinction separates collenchyma from sclerenchyma.',
      },

      { t: 'part', title: 'Tissue types and diagnostic anatomical features' },
      {
        t: 'p',
        html: '(No SI units or dimensional formulae apply to histological tissue types. Diagnostic features are tabulated instead.)',
      },
      {
        t: 'table',
        title: 'Meristematic tissue: classification at a glance',
        head: ['Basis', 'Types', 'Key point'],
        rows: [
          [
            'Position',
            'Apical, Intercalary, Lateral',
            'Apical → tips; Intercalary → between mature tissue (grass internode bases); Lateral → sides (cambia)',
          ],
          [
            'Function/origin',
            'Primary, Secondary',
            'Primary builds the primary plant body; secondary (lateral) appears later, produces woody axis',
          ],
          [
            'Cell character',
            '–',
            'Small, isodiametric, thin-walled, dense cytoplasm, large prominent nucleus, few or no vacuoles, no intercellular spaces, high division rate',
          ],
        ],
      },
      {
        t: 'table',
        title: 'Simple permanent tissues: diagnostic comparison',
        head: ['Feature', 'Parenchyma', 'Collenchyma', 'Sclerenchyma'],
        rows: [
          ['Living/dead at maturity', 'Living', 'Living', '<b>Dead</b> (no protoplast)'],
          [
            'Cell shape',
            'Isodiametric (spherical, oval, polygonal)',
            'Elongated',
            'Fibres: long, narrow, tapering ends • Sclereids: isodiametric, irregular',
          ],
          [
            'Wall material',
            'Thin, cellulose',
            'Thick <b>at corners</b>: cellulose, hemicellulose and pectin',
            'Thick, uniformly <b>lignified</b>',
          ],
          [
            'Wall thickening',
            'Uniform/thin',
            '<b>Localised at the corners</b>',
            'Uniform, with few–many <b>pits</b>; narrow lumen',
          ],
          ['Intercellular spaces', 'Present (often)', '<b>Usually absent</b>', 'Absent'],
          ['Chloroplast', 'May be present (→ chlorenchyma)', 'May be present', 'Absent'],
          [
            'Main function',
            'Storage, photosynthesis, secretion, assimilation',
            'Mechanical support to <b>growing/young</b> organs; flexibility',
            'Mechanical strength/rigidity; tensile strength against bending and swaying',
          ],
          [
            'Typical location',
            'Throughout: cortex, pith, mesophyll',
            'Hypodermis of young dicot stems, petioles, leaf veins',
            'Cortex, pericycle, around vascular bundles; hard parts',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Special / modified parenchyma worth naming:</b> <b>Chlorenchyma</b>: parenchyma containing chloroplasts; the photosynthetic tissue (e.g. leaf mesophyll). • <b>Aerenchyma</b>: parenchyma with large air spaces; gives buoyancy to aquatic plants such as water hyacinth.',
      },
      {
        t: 'p',
        html: '<b>Two faces of sclerenchyma:</b> <b>Fibres</b>: long, narrow, dead cells with tapering ends, occurring in groups; lignified. Bast fibres (phloem fibres) are the commercially familiar example.',
      },
      {
        t: 'p',
        html: '<b>Sclereids (stone cells)</b>: shorter, often spherical/oval/cylindrical, extremely thick-walled with a very narrow lumen and numerous pits. They give the gritty texture you bite into in the pulp of <b>pear, guava and sapodilla (chiku)</b>, and form the hard walls of nut shells, the seed coats of legumes, and the toughness of tea leaves.',
      },

      { t: 'part', title: 'Comparative anatomy and logical framework' },
      {
        t: 'p',
        html: 'There is no algebraic “derivation” in tissue anatomy; instead, two reasoning frameworks are examinable: how a cell changes its dividing status, and how you identify a tissue from its features. Both are heavily tested, so let us walk them as procedures.',
      },
      {
        t: 'p',
        html: '<b>Framework A: The differentiation cycle (why a cell’s dividing power changes)</b>',
      },
      {
        t: 'p',
        html: 'A cell’s “ability to divide” is not fixed for life; it is switched on and off. The logical sequence is:<br>Meristematic cell →<sup>differentiation</sup> Mature permanent cell',
      },
      {
        t: 'proc',
        title: 'Framework A',
        steps: [
          '<b>Differentiation:</b> a meristematic (dividing) cell matures, specialises structurally and functionally, and loses the ability to divide. This is the normal one-way street from trainee to posted worker.',
          '<b>Dedifferentiation:</b> a mature, already-differentiated cell <b>regains</b> the capacity to divide. This is how living cells can spring back into meristematic activity: the medullary-ray cells between the bundles form the interfascicular cambium, and cortical cells form the cork cambium. (Reason it through: only a living cell can do this, which is exactly why dead sclerenchyma never can.)',
          '<b>Redifferentiation:</b> the cells produced by that dedifferentiated meristem then once again lose their dividing power and mature into specific tissues. So the full arc is: divide → mature → regain division → mature again.',
        ],
      },
      {
        t: 'p',
        html: 'The clean memory hook: <b>dedifferentiation = regaining division; redifferentiation = losing it again after having regained it.</b> Swapping these two is a classic error here.',
      },
      {
        t: 'p',
        html: '<b>Framework B: Identifying a simple tissue from its features (the elimination procedure)</b>',
      },
      {
        t: 'p',
        html: 'When a question hands you a description or a labelled diagram, run this decision ladder rather than guessing:',
      },
      {
        t: 'proc',
        title: 'Framework B',
        steps: [
          '<b>Is the cell living or dead at maturity?</b> Dead, no protoplast, among these three simple tissues → it must be <b>sclerenchyma</b>. Stop. (Living → continue.)',
          '<b>Where is the wall thickening?</b> Thickened only at the corners (and unlignified, with cellulose, hemicellulose and pectin) → <b>collenchyma</b>. Stop.',
          '<b>Otherwise:</b> thin uniform cellulose wall, often with intercellular spaces, living → <b>parenchyma</b>.',
          '<b>If it is sclerenchyma, sub-classify by shape:</b> long, narrow, tapering, in strands → <b>fibre</b>; short, isodiametric, very narrow lumen, in pulp/seed coats/nut walls → <b>sclereid</b>.',
        ],
      },
      {
        t: 'p',
        html: 'Notice the ladder is ordered by the most decisive feature first (life status), then the most diagnostic (corner thickening), so you rarely need step 3 explicitly. This mirrors how the strongest distractors are built: they swap a single attribute (e.g. “dead” for “living”, or “uniform” for “corner” thickening), so checking those two attributes first defuses most traps.',
      },
      { t: 'fig', id: 'b11-06-fig-6.1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board level | Distinguish-between',
        q: 'Give three structural differences between collenchyma and sclerenchyma.',
        steps: [
          '<b>Reasoning & answer.</b> Anchor each difference on a diagnostic axis from the table in Tissue types and diagnostic anatomical features rather than listing random facts:<br>1. <b>Life status:</b> Collenchyma is living at maturity and retains protoplasm; sclerenchyma is dead and lacks protoplasm.<br>2. <b>Wall chemistry & thickening:</b> Collenchyma has unlignified walls thickened with cellulose, hemicellulose and pectin at the corners; sclerenchyma has uniformly thickened, lignified walls.<br>3. <b>Function/flexibility:</b> Collenchyma gives flexible mechanical support to young, still-growing organs; sclerenchyma gives rigid strength to mature organs.',
          '(Presentation tip for full marks: write the feature name, then both tissues: examiners award the comparison, not two separate descriptions.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level | Direct recall, speed',
        q: 'The gritty stone-cell texture in the pulp of a pear is due to which tissue, and is that tissue living or dead?',
        steps: [
          '<b>Reasoning & answer.</b> “Stone cells” in fruit pulp = <b>sclereids</b>, a form of <b>sclerenchyma</b>, and it is <b>dead</b> at maturity. Speed move: the words “gritty”, “stone cell” or “pulp of pear/guava” should fire “sclereid → sclerenchyma → dead” instantly, with no further thought. Don’t be lured by “it’s inside a soft juicy fruit, so maybe parenchyma”: the grittiness itself is the signature of lignified dead cells embedded in the soft living parenchyma around them.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET level | Match the column',
        q: 'Match the tissue/feature in Column I with Column II.<br><b>Column I</b><br>A. Aerenchyma<br>B. Collenchyma<br>C. Sclereid<br>D. Dedifferentiation<br><b>Column II</b><br>i. Corner thickening of cellulose, hemicellulose and pectin<br>ii. Large air cavities; buoyancy in aquatic plants<br>iii. Regains capacity to divide<br>iv. Isodiametric dead cell, very narrow lumen',
        steps: [
          '<b>Reasoning & answer.</b> A-ii (aerenchyma = air-space parenchyma for floating), B-i (collenchyma’s defining corner thickening), C-iv (sclereid = isodiametric stone cell with pinpoint lumen), D-iii (dedifferentiation = a mature cell regaining division).',
          'The trap option usually pairs D with “losing the capacity to divide”: that is redifferentiation, not dedifferentiation.',
        ],
        ans: 'A-ii, B-i, C-iv, D-iii.',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty | Assertion–Reason',
        q: 'Assertion (A): Mature parenchyma cells of the cortex can participate in secondary growth, but mature fibres cannot. Reason (R): Dedifferentiation requires a living protoplast, which sclerenchyma lacks at maturity. <b>(a)</b> Both A and R true, R is the correct explanation of A <b>(b)</b> Both A and R true, R is not the correct explanation of A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning & answer.</b> A is true: living cortical parenchyma can <b>dedifferentiate</b> into a meristem (e.g. cork cambium), whereas dead fibres cannot. R is true: dedifferentiation means a living cell re-acquiring division, which is impossible without an active protoplast. And R is precisely why A holds: the loss of protoplast in sclerenchyma is the mechanistic reason it cannot rejoin the dividing pool. So R correctly explains A.',
          'This question rewards linking the differentiation framework (Comparative anatomy and logical framework) to the life-status row (Tissue types and diagnostic anatomical features): the two ideas are one chain, not two facts.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>[CBSE]</b> Define a tissue. Why is parenchyma often described as the “fundamental” or most primitive tissue?',
            a: 'A tissue = a group of cells of common origin usually performing a common function; parenchyma is “fundamental” because it is the most abundant, least specialised tissue from which others are derived.',
          },
          {
            q: '<b>[CUET]</b> Name the meristem responsible for regrowth of grass blades after grazing, and state its position.',
            a: 'Intercalary meristem; located at the bases of internodes (above the nodes) in grasses.',
          },
          {
            q: '<b>[NEET]</b> Which simple tissue is living, mechanically supportive, may contain chloroplasts, and has intercellular spaces absent? Justify each attribute in one phrase.',
            a: 'Collenchyma (living = retains protoplasm; supportive = corner-thickened walls; chloroplasts = often present; usually no intercellular spaces = corner thickening fills them).',
          },
          {
            q: '<b>[NEET]</b> A tissue shows long, narrow, dead cells with tapering ends, lignified walls and a few pits, occurring in strands in the pericycle. Identify it precisely (tissue and sub-type).',
            a: 'Sclerenchyma: fibres.',
          },
          {
            q: '<b>[NEET: high difficulty]</b> Arrange and name the three stages a mature cortical parenchyma cell passes through when it gives rise to a cork cambium and, through it, to cork cells, and state at which stage division capacity is present.',
            a: 'Differentiation → dedifferentiation → redifferentiation; division capacity is present at the dedifferentiation stage (when the mature cell regains it).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which one of the following is a living mechanical tissue with unlignified walls?',
        opts: [
          { label: 'Sclerenchyma', nudge: '<b>(a)</b> and <b>(c)</b> are dead and lignified.' },
          { label: 'Collenchyma', nudge: null },
          { label: 'Fibres', nudge: '<b>(a)</b> and <b>(c)</b> are dead and lignified.' },
          {
            label: 'Tracheids',
            nudge: '<b>(d)</b> tracheids are dead, lignified, and belong to xylem (complex tissue), so doubly disqualified.',
          },
        ],
        correct: 1,
        solution:
          'Collenchyma is the only tissue that is simultaneously mechanical and living with unlignified (cellulose–pectin) walls. Trap: students equate “mechanical” with “sclerenchyma” reflexively: the word “living” is the decider.',
      },
      {
        t: 'mcq',
        q: 'The corner thickenings characteristic of collenchyma are chiefly composed of:',
        opts: [
          { label: 'Lignin and suberin', nudge: '<b>(a)</b>/<b>(d)</b> bring in lignin, which would make it sclerenchyma.' },
          { label: 'Cellulose and pectin', nudge: null },
          {
            label: 'Cutin and wax',
            nudge: '<b>(c)</b> cutin/wax are surface deposits of the epidermis (a Topic 03 idea), not corner thickenings.',
          },
          { label: 'Silica and lignin', nudge: '<b>(a)</b>/<b>(d)</b> bring in lignin, which would make it sclerenchyma.' },
        ],
        correct: 1,
        solution:
          'Collenchyma corners are reinforced with cellulose, hemicellulose and pectin, never lignin. Trap: any option containing “lignin” must be rejected for collenchyma on sight.',
      },
      {
        t: 'mcq',
        q: 'Which statement about sclereids is incorrect?',
        opts: [
          { label: 'They are dead at maturity', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are all true of sclereids.' },
          { label: 'They have a very narrow lumen', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are all true of sclereids.' },
          { label: 'They are typically long with tapering ends', nudge: null },
          {
            label: 'They occur in the pulp of pear and guava',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are all true of sclereids.',
          },
        ],
        correct: 2,
        solution:
          '(The incorrect statement.) “Long with tapering ends” describes fibres, not sclereids; sclereids are short and isodiametric. Trap: candidates blur the two sclerenchyma sub-types: fibre = long/tapering, sclereid = short/stone-like. Read “incorrect” carefully.',
      },
      {
        t: 'mcq',
        q: 'A mature, fully differentiated cortical cell starts dividing again to form a cork cambium. This phenomenon is:',
        opts: [
          { label: 'Differentiation', nudge: '<b>(a)</b> differentiation is the original loss of division;' },
          {
            label: 'Redifferentiation',
            nudge: '<b>(b)</b> redifferentiation is the subsequent re-loss after dedifferentiation;',
          },
          { label: 'Dedifferentiation', nudge: null },
          { label: 'Senescence', nudge: '<b>(d)</b> senescence is ageing toward death.' },
        ],
        correct: 2,
        solution:
          'A mature cell regaining division = dedifferentiation. Trap: (b) is the deliberate near-miss: sequence matters. Regain = de-, lose-again = re-.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1: “Mechanical means sclerenchyma.”</b> Both collenchyma and sclerenchyma are mechanical. The real fork is living + unlignified + corner-thickened (collenchyma) vs dead + lignified + uniformly thick (sclerenchyma).',
          '<b>Pitfall 2: Swapping fibre and sclereid.</b> Fibre = long, narrow, tapering; sclereid = short, isodiametric stone cell. A gritty-pulp clue points to sclereids.',
          '<b>Pitfall 3: Dedifferentiation ↔ redifferentiation reversal.</b> This is a classic error. Lock it: de = regain division, re = lose it again.',
          '<b>Pitfall 4: Treating “common function” as absolute.</b> A tissue’s cells usually share a function: the NCERT wording is “usually”, and exam options exploit anyone who memorised “always”.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy):</b> For any “identify the tissue” question, decide living-or-dead first and where-the-thickening-is second. Those two attributes alone resolve all three simple tissues before you even read the remaining options, and they are exactly the attributes distractors tamper with.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Anatomy</b> = internal structure (contrast morphology = external). <b>Tissue</b> = cells of common origin, usually common function.',
            note: '',
          },
          {
            f: 'Meristem (dividing)',
            note: 'Apical (tips → primary growth) • Intercalary (between mature tissue; grass regrowth) • Lateral (sides → thickening). Cells: small, thin-walled, dense cytoplasm, few or no vacuoles, no intercellular spaces.',
          },
          {
            f: 'Parenchyma',
            note: 'living, thin cellulose walls, intercellular spaces present, isodiametric → storage/photosynthesis/secretion. Variants: <b>chlorenchyma</b> (chloroplasts), <b>aerenchyma</b> (air spaces, buoyancy).',
          },
          {
            f: 'Collenchyma',
            note: 'living, <b>corner thickening</b> of cellulose, hemicellulose and pectin (no lignin), usually no intercellular spaces → flexible support to young organs.',
          },
          {
            f: 'Sclerenchyma',
            note: '<b>dead</b>, <b>lignified</b>, pitted, narrow lumen → strength. <b>Fibres</b> (long, tapering; bast fibres) vs <b>Sclereids</b> (stone cells; pear/guava pulp, nut walls, seed coats).',
          },
          {
            f: 'Differentiation cycle',
            note: 'differentiate → <b>dedifferentiate</b> (mature cell regains division) → <b>redifferentiate</b> (loses it again). Only living cells can dedifferentiate.',
          },
        ],
        aids: ['“Para Plays, Collen Corners, Sclera Sleeps (dead).”'],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 362–368 ─────────────────────────
  {
    n: '02',
    title: 'Complex Permanent Tissues (Xylem & Phloem)',
    kalam:
      'Now meet the complex tissues: not a single cell type, but a small crew of different specialised cells working together as one functional unit.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A dense, high-yield topic. CBSE Boards repeatedly ask “name the components of xylem/phloem” and “distinguish xylem from phloem” as 2–3 mark questions, plus diagram labelling of conducting elements. CUET favours single-fact recall (which element is dead, which lacks a nucleus, what companion cells do). NEET loves match-the-column grids pairing each element with its feature, and assertion–reason pairs on the anucleate sieve tube and its companion-cell dependence. A frequent topic in NEET (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: 'In the last topic we met the simple tissues: teams of one cell type doing one job. Now meet the <b>complex</b> tissues: not a single cell type, but a small crew of different specialised cells working together as one functional unit. Picture the Indian Railways. A single train isn’t one kind of carriage; it’s a coordinated set: an engine, goods wagons, a guard’s van, a pantry car. Each is built differently, but together they accomplish one mission: moving things from one end of the country to the other. <b>Xylem and phloem are exactly that: the two transport “trains” of the plant</b>, each assembled from several distinct cell types pulling together.',
      },
      {
        t: 'p',
        html: 'The plant has two opposite cargo routes to run. Water and dissolved minerals must travel up from the roots to the leaves. Food (sugars) made in the leaves must travel out to wherever the plant is growing or storing. Nature built one specialised tissue for each: <b>xylem</b> carries water and minerals <b>upward</b> (a one-way, unidirectional route, root → shoot), while <b>phloem</b> carries food, and crucially it can move it in either direction depending on where the plant needs it. Right away you have a clean memory anchor: <b>xylem = water, up, one-way; phloem = food, both ways.</b>',
      },
      {
        t: 'p',
        html: 'Think about it this way: water moving up a tall tree is a brutal engineering problem: you need rigid, leak-proof pipes that won’t collapse under the tension of being pulled skyward. So evolution made xylem’s conducting cells <b>dead</b> at maturity: hollow, lignified pipes with no living contents to get in the way. A dead pipe is a better pipe: empty, rigid, and reinforced. Phloem faces the opposite problem: loading and unloading sugar is an active, living process that has to be controlled cell-by-cell, so phloem’s conducting cells stay <b>alive</b>, but, oddly, they lose their nucleus and hand over command to a neighbour. We’ll see why that strange arrangement is so clever.',
      },
      {
        t: 'p',
        html: '<b>Xylem, the four-member crew:</b> tracheids, vessels, xylem fibres, and xylem parenchyma. The first two (tracheids and vessels) are the actual water-conducting pipes, together called the <b>tracheary elements</b>; the fibres add strength; the parenchyma is the only living member and handles storage.',
      },
      {
        t: 'p',
        html: '<b>Phloem, the four-member crew:</b> sieve tube elements, companion cells, phloem parenchyma, and phloem fibres. The sieve tubes are the food pipes; companion cells are their life-support partners; parenchyma stores and packs; fibres strengthen.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions worth flagging.</b> “Conducting tissue is dead” is true only for xylem’s conducting cells; phloem’s sieve tubes are living (though anucleate). Don’t blur the two. Also note this topic is about the cells that make up xylem and phloem; how those cells are arranged into bundles (radial, conjoint, collateral and so on) and the physiology of how sap actually rises and food is translocated belong to later topics: keep “structure” and “transport mechanism” mentally separate, because exams deliberately mix them.',
      },

      { t: 'part', title: 'Tissue types and diagnostic anatomical features' },
      {
        t: 'p',
        html: '(No SI units or dimensional formulae apply to histological elements; diagnostic features are tabulated.)',
      },
      {
        t: 'table',
        title: 'Xylem: the four elements',
        head: ['Element', 'Living/dead', 'Wall', 'Distinctive feature', 'Role'],
        rows: [
          ['Tracheids', 'Dead', 'Lignified, thick', 'Elongated, tapering ends; water passes through pits', 'Conduction + support'],
          [
            'Vessels',
            'Dead',
            'Lignified, thick',
            'Shorter cells joined end-to-end into long open tubes (vessel = a row of vessel elements); <b>characteristic of angiosperms</b>',
            'Main water conduction',
          ],
          [
            'Xylem fibres',
            'Dead',
            'Highly thickened, <b>obliterated (nearly closed) lumen</b>; septate or aseptate',
            'Sclerenchymatous',
            'Mechanical strength',
          ],
          [
            'Xylem parenchyma',
            '<b>Living</b>',
            'Thin, cellulose',
            'The only living xylem cell',
            'Stores starch, fat, tannins; radial conduction',
          ],
        ],
      },
      {
        t: 'p',
        html: 'Together, xylem conducts water and minerals <b>unidirectionally</b>, root → top of plant, and lends mechanical support.',
      },
      {
        t: 'table',
        title: 'Phloem: the four elements',
        head: ['Element', 'Living/dead', 'Nucleus', 'Distinctive feature', 'Role'],
        rows: [
          [
            'Sieve tube elements',
            'Living',
            '<b>Absent</b> at maturity',
            'Cells stacked one above another into long pipes; end walls perforated into <b>sieve plates</b>; peripheral cytoplasm + large vacuole',
            'Conduct food',
          ],
          [
            'Companion cells',
            'Living',
            'Present',
            'Specialised parenchymatous cells closely linked to sieve tubes; <b>their nucleus controls the sieve tube’s functions</b>',
            'Life-support / regulation of sieve tube',
          ],
          [
            'Phloem parenchyma',
            'Living',
            'Present',
            'Thin-walled; packing tissue between other cells',
            'Stores starch and other food',
          ],
          [
            'Phloem fibres (bast fibres)',
            'Dead',
            '–',
            'Sclerenchymatous; thick wall with <b>simple pits</b>',
            'Mechanical strength',
          ],
        ],
      },
      {
        t: 'p',
        html: 'Note: phloem fibres are generally absent from primary phloem, and phloem parenchyma is absent in most monocots.',
      },
      {
        t: 'p',
        html: '<b>A few finer structural points worth knowing.</b> Xylem fibres may be <b>septate or aseptate</b>: that is, their elongated dead cells are sometimes subdivided by thin cross-partitions, sometimes not. Xylem parenchyma is not merely a storehouse: besides packing away starch, fats and tannins, its living cells assist in the <b>radial (sideways) conduction</b> of water and food across the tissue, complementing the axial flow through the dead pipes. On the phloem side, the <b>sieve tube element</b> is worth picturing precisely: at maturity its cytoplasm is pushed to a thin peripheral layer around a large central vacuole, and these elements stack one above another into continuous pipes that occur, like vessels, characteristically in <b>angiosperms</b>. The <b>companion cell</b> sits alongside, slender and densely cytoplasmic, and because it keeps its nucleus it acts as the sieve tube’s control centre, a striking division of labour in which one cell conducts and a second cell “thinks”.',
      },
      {
        t: 'table',
        title: 'Xylem vs Phloem: the master comparison',
        head: ['Feature', 'Xylem', 'Phloem'],
        rows: [
          ['Conducts', 'Water + minerals', 'Food (sugars)'],
          ['Direction', 'Unidirectional (up)', 'Bidirectional'],
          ['Conducting cell status', 'Dead', 'Living (but anucleate)'],
          ['Mechanical members', 'Xylem fibres', 'Phloem (bast) fibres'],
          ['Living storage member', 'Xylem parenchyma', 'Phloem parenchyma'],
        ],
      },
      {
        t: 'p',
        html: 'Note: gymnosperms conduct water through tracheids and characteristically <b>lack vessels</b>; vessels are the hallmark of angiosperm xylem.',
      },

      { t: 'part', title: 'Comparative anatomy and logical framework' },
      {
        t: 'p',
        html: 'No algebraic derivation exists for tissue anatomy. The examinable reasoning here is threefold: telling a tracheid from a vessel, reading the maturation/arrangement of primary xylem (protoxylem/metaxylem, endarch/exarch), and identifying any conducting element from its features. Walk all three as procedures.',
      },
      {
        t: 'p',
        html: '<b>Framework A: Tracheid vs vessel (and why the difference matters)</b>',
      },
      {
        t: 'p',
        html: 'Both are dead, lignified, water-conducting tracheary elements, so a single-cell glance can fool you. Decide by continuity:',
      },
      {
        t: 'proc',
        title: 'Framework A',
        steps: [
          '<b>Is it a single elongated cell with tapering ends, water seeping cell-to-cell through pits?</b> → <b>tracheid.</b> Conduction is relatively slow because water must cross pit membranes between cells.',
          '<b>Is it a series of shorter cells fused end-to-end, their cross-walls dissolved into an open continuous channel?</b> → that channel is a <b>vessel</b>, and each unit is a <b>vessel element.</b> Conduction is fast and efficient: an open pipe.',
          '<b>Decider fact:</b> vessels are the <b>characteristic feature of angiosperms.</b> If the plant is stated to be a typical gymnosperm (pine, cycad), it conducts by tracheids.',
        ],
      },
      {
        t: 'p',
        html: 'The logic: an open vessel is a plumbing upgrade over a chain of closed tracheids, which is exactly why the more advanced angiosperms evolved them. Reason from “open vs closed tube” and you will never reverse the two.',
      },
      {
        t: 'p',
        html: '<b>Framework B: Reading primary xylem: protoxylem, metaxylem, and the endarch/exarch rule</b>',
      },
      {
        t: 'p',
        html: 'Primary xylem matures in a sequence, and where the first-formed cells sit is a classic identification key:',
      },
      {
        t: 'proc',
        title: 'Framework B',
        steps: [
          'The <b>first-formed</b> primary xylem elements are <b>protoxylem</b>; the <b>later-formed</b> are <b>metaxylem.</b>',
          'Now ask where the protoxylem points:<br>• Protoxylem toward the <b>centre/pith</b>, metaxylem toward the periphery → <b>endarch.</b> This is the arrangement in <b>stems.</b><br>• Protoxylem toward the <b>periphery</b>, metaxylem toward the centre → <b>exarch.</b> This is the arrangement in <b>roots.</b>',
        ],
      },
      {
        t: 'p',
        html: 'A clean mnemonic: <b>“Ends in the centre = endarch = stem.”</b> Because the protoxylem (“first xylem”) in a stem develops inside, pointing to the pith.',
      },
      {
        t: 'p',
        html: '<b>Framework C: Identifying any conducting element (elimination ladder)</b>',
      },
      {
        t: 'proc',
        title: 'Framework C',
        steps: [
          '<b>Living or dead?</b> Dead → it’s a xylem element or a phloem (bast) fibre; Living → xylem parenchyma or a phloem living element.',
          'If <b>dead and a hollow conducting pipe</b> → tracheid/vessel (xylem). If <b>dead with obliterated lumen, purely supportive</b> → a fibre (xylem fibre or bast fibre, depending on tissue).',
          'If <b>living but lacks a nucleus</b>, stacked into pipes → <b>sieve tube element</b> (phloem). If <b>living with a nucleus, attached to a sieve tube</b> → <b>companion cell.</b>',
          'The “living, anucleate, conducts food” combination is unique to the sieve tube: it is a highly diagnostic description in the whole topic.',
        ],
      },
      { t: 'fig', id: 'b11-06-fig-6.2' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board level | Distinguish-between',
        q: 'State three differences between tracheids and vessels.',
        steps: [
          '<b>Reasoning & answer.</b> Anchor on the continuity axis from Comparative anatomy and logical framework:<br>1. <b>Cell structure:</b> a tracheid is a single elongated cell with tapering ends; a vessel is many shorter vessel elements joined end-to-end into one continuous tube.<br>2. <b>Path of water:</b> through pits across walls in tracheids; through an open, uninterrupted lumen in vessels.<br>3. <b>Occurrence:</b> tracheids occur in all vascular plants (in most gymnosperms they are the only water-conducting elements); vessels are characteristic of angiosperms.',
          '(Both are dead and lignified: don’t list that as a “difference”; it’s a similarity, and examiners penalise it.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level | Direct recall',
        q: 'Which is the only living component of xylem, and which is the conducting component of phloem that lacks a nucleus?',
        steps: [
          '<b>Reasoning & answer.</b> The only living xylem element is <b>xylem parenchyma</b> (thin cellulose walls, stores starch/fat/tannins). The anucleate conducting cell of phloem is the <b>sieve tube element</b>: living, but it loses its nucleus and is run by the companion cell. Speed trap: students often answer “companion cell” for the second blank because it’s “living”, but the companion cell keeps its nucleus; it’s the sieve tube that loses it.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET level | Match the column',
        q: '<b>Column I (element)</b><br>A. Xylem fibre<br>B. Sieve tube element<br>C. Companion cell<br>D. Vessel<br><b>Column II (feature)</b><br>i. Living, anucleate, stacked into pipes<br>ii. Highly thickened wall, obliterated lumen<br>iii. Living, retains nucleus, controls a neighbour<br>iv. Dead, shorter cells fused into an open tube',
        steps: [
          '<b>Reasoning & answer.</b> A-ii (fibre = obliterated lumen), B-i (sieve tube = living + anucleate), C-iii (companion cell = nucleate controller), D-iv (vessel = fused open tube).',
          'The trap pairs B with iii and C with i, i.e. swapping which one keeps the nucleus. The sieve tube lacks it; the companion cell has it.',
        ],
        ans: 'A-ii, B-i, C-iii, D-iv.',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty | Assertion–Reason',
        q: 'Assertion (A): The sieve tube element can conduct food efficiently despite having no nucleus. Reason (R): The companion cell, connected to the sieve tube, retains its nucleus and controls the sieve tube’s functions. <b>(a)</b> Both A and R true, R is the correct explanation of A <b>(b)</b> Both A and R true, R is not the correct explanation of A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning & answer.</b> A is true: mature sieve tube elements are living but anucleate, with only peripheral cytoplasm and a large vacuole, yet they conduct food. R is true: the companion cell keeps its nucleus and governs the sieve tube’s activity. And R is exactly why A is possible: a cell with no nucleus normally can’t sustain itself, but here a neighbouring nucleated cell runs it by proxy, so the conduction continues. R correctly explains A.',
          'This rewards linking the “no nucleus” fact (Tissue types and diagnostic anatomical features) to the companion-cell row: they are one mechanism, not two trivia points.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>[CBSE]</b> Name the four elements of phloem and state which one is dead.',
            a: 'Sieve tube elements, companion cells, phloem parenchyma, phloem (bast) fibres; the bast fibres are dead.',
          },
          {
            q: '<b>[CUET]</b> In which direction does xylem conduct, and is that direction one-way or two-way?',
            a: 'Upward (root → shoot); unidirectional (one-way).',
          },
          {
            q: '<b>[NEET]</b> A dead, heavily thickened cell with an almost closed lumen, providing only mechanical support within the xylem, is called what?',
            a: 'Xylem fibre.',
          },
          {
            q: '<b>[NEET]</b> In a transverse section of a root, the protoxylem is found toward the periphery. Name this arrangement and contrast it with what is seen in a stem.',
            a: 'Exarch (root); in stems the protoxylem lies toward the centre/pith = endarch.',
          },
          {
            q: '<b>[NEET: high difficulty]</b> Explain why xylem’s conducting cells being dead is an advantage, while phloem’s must remain living. Frame your answer around the nature of the cargo each carries.',
            a: 'Water transport needs rigid, hollow, leak-proof pipes, so dead empty lignified cells are ideal; food transport (loading/unloading sugars) is an active, regulated process needing living cytoplasm, so sieve tubes stay alive (with companion-cell support).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which xylem element is living at maturity?',
        opts: [
          { label: 'Tracheid', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are all dead and lignified.' },
          { label: 'Vessel', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are all dead and lignified.' },
          { label: 'Xylem fibre', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are all dead and lignified.' },
          { label: 'Xylem parenchyma', nudge: null },
        ],
        correct: 3,
        solution:
          'Xylem parenchyma alone is living (thin cellulose walls, stores food). Trap: students assume all xylem is dead: the parenchyma is the lone exception, and it’s a favourite single-mark catch.',
      },
      {
        t: 'mcq',
        q: 'The functions of the sieve tube are controlled by the nucleus of the:',
        opts: [
          { label: 'Sieve tube itself', nudge: '<b>(a)</b> is wrong because that nucleus is gone;' },
          { label: 'Companion cell', nudge: null },
          {
            label: 'Phloem parenchyma',
            nudge: '<b>(c)</b>/<b>(d)</b> are not directly coupled to the sieve tube’s conduction.',
          },
          {
            label: 'Phloem fibre',
            nudge: '<b>(c)</b>/<b>(d)</b> are not directly coupled to the sieve tube’s conduction.',
          },
        ],
        correct: 1,
        solution:
          'The sieve tube element lacks a nucleus at maturity, so its activity is regulated by the adjacent companion cell’s nucleus. Trap: choosing (a) by forgetting the sieve tube is anucleate.',
      },
      {
        t: 'mcq',
        q: 'Vessels are regarded as a characteristic feature of:',
        opts: [
          {
            label: 'Gymnosperms',
            nudge: '<b>(a)</b> is the classic distractor: students confuse “has well-developed water transport” with “has vessels”.',
          },
          { label: 'Pteridophytes', nudge: '<b>(b)</b> pteridophytes conduct by tracheids (vessels are rare exceptions).' },
          { label: 'Angiosperms', nudge: null },
          { label: 'Bryophytes', nudge: '<b>(d)</b> bryophytes have no xylem at all.' },
        ],
        correct: 2,
        solution:
          'Vessels (open, fused tracheary tubes) are the hallmark of angiosperm xylem; gymnosperms conduct via tracheids only (apart from Gnetales).',
      },
      {
        t: 'mcq',
        q: 'In the stem, the primary xylem arrangement in which protoxylem lies toward the pith is called:',
        opts: [
          {
            label: 'Exarch',
            nudge: '<b>(a)</b> exarch (protoxylem toward periphery) is the root pattern: the deliberate swap.',
          },
          { label: 'Endarch', nudge: null },
          {
            label: 'Mesarch',
            nudge: '<b>(c)</b> mesarch (protoxylem in the middle of the xylem, seen in some ferns) is another protoxylem position, and <b>(d)</b> radial describes bundle geometry, not protoxylem position.',
          },
          {
            label: 'Radial',
            nudge: '<b>(c)</b> mesarch (protoxylem in the middle of the xylem, seen in some ferns) is another protoxylem position, and <b>(d)</b> radial describes bundle geometry, not protoxylem position.',
          },
        ],
        correct: 1,
        solution:
          'Protoxylem toward the centre/pith = endarch, typical of stems. Trap: reversing endarch/exarch: use “ends in the centre = endarch = stem”.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1: “All conducting tissue is dead.”</b> Only xylem’s conducting cells are dead; phloem’s sieve tubes are living (just anucleate). A classic error that costs half-marks.',
          '<b>Pitfall 2: Nucleus mix-up.</b> The sieve tube loses its nucleus; the companion cell keeps it and runs the show. Reversing these is a classic error in this topic.',
          '<b>Pitfall 3: Endarch/exarch reversal.</b> Endarch = protoxylem toward centre = stem; exarch = protoxylem toward periphery = root.',
          '<b>Pitfall 4: Confusing structure with transport.</b> Questions on “how sap rises” or “pressure-flow” belong to plant physiology, not to this anatomy topic. Don’t import translocation mechanisms into a structure answer.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy):</b> For any conducting-element question, fix two attributes first: living-or-dead and has-nucleus-or-not. Those two alone sort the eight elements into dead (4) and living (4) before you read the options, and they are precisely the attributes distractors tamper with.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Complex tissue</b> = several cell types working as one unit: <b>xylem</b> and <b>phloem</b>.',
            note: '',
          },
          {
            f: 'Xylem',
            note: 'water + minerals, <b>unidirectional (up)</b>. Four elements: <b>tracheids, vessels, xylem fibres</b> (all dead) + <b>xylem parenchyma</b> (only living). Vessels = open fused tubes, <b>characteristic of angiosperms</b>; tracheids conduct via pits.',
          },
          {
            f: 'Phloem',
            note: 'food, <b>bidirectional</b>. Four elements: <b>sieve tube elements</b> (living, <b>no nucleus</b>), <b>companion cells</b> (living, nucleate, control the sieve tube), <b>phloem parenchyma</b> (storage), <b>phloem/bast fibres</b> (dead, support).',
          },
          {
            f: 'Protoxylem vs metaxylem',
            note: 'first-formed vs later-formed. <b>Endarch</b> (protoxylem → centre) = <b>stem</b>; <b>Exarch</b> (protoxylem → periphery) = <b>root</b>.',
          },
          {
            f: '<b>Only living xylem cell</b> = xylem parenchyma. <b>Only anucleate living cell among the eight elements</b> = sieve tube element.',
            note: '',
          },
        ],
        aids: [
          '<b>“Xylem: dead pipes carry water up. Phloem: living pipes, no brain: the companion thinks for them.”</b>',
          '“Ends in the centre = endarch = stem.”',
        ],
      },
    ],
  },
];
