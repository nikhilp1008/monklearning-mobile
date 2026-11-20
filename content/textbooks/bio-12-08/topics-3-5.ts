import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12, Chapter 8 (Microbes in Human Welfare), Topics 03 to 05: pp. 429 to
 * 454 of the Class 12 Biology Master Reference, word for word. Topic 03 Microbes
 * in Sewage Treatment (pp. 429 to 436), Topic 04 Microbes in Production of
 * Biogas (pp. 437 to 443) and Topic 05 Microbes as Biocontrol Agents and
 * Biofertilisers (pp. 444 to 454), each cut at the book's Sections 1 to 8.
 * Figures 8.5 (caption p. 431, drawn p. 432), 8.6 (caption p. 439, drawn
 * p. 440), 8.7 (caption p. 447, drawn p. 448) and 8.8 (caption p. 449, drawn
 * p. 450) are redrawn in lib/diagrams/biology-12-08.ts; these pages hold no
 * unnumbered drawing. Emphasis italics are dropped; italics are kept only for
 * scientific names and the gene symbol cry. Em dashes became colons, commas,
 * brackets or full stops; line-break hyphens were removed; "subtopic" and
 * "section" (meaning a topic) became "topic"; "•" lists inside a paragraph are
 * set on their own lines. Every table is a `table` block (two-column ones too,
 * so the column heads stay).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 429–436 ─────────────────────────
  {
    n: '03',
    title: 'Microbes in Sewage Treatment',
    kalam: 'Every city produces a river of dirty water, the sewage (municipal waste water) from homes, drains, and industries.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A frequently tested section (the book’s estimate from past papers, not official figures), especially the <b>BOD</b> concept and the <b>two-stage</b> treatment sequence. NEET favours questions on the role of aerobic microbes, the meaning of BOD, the fate of activated sludge, and the link to biogas. CUET asks single-fact recall (what is primary vs secondary treatment). CBSE Boards set 2–3 mark questions on the steps of sewage treatment or on why effluent BOD must be reduced before discharge. Conceptually slightly deeper than the recall-only sections: students must understand why each step happens.',
      },
      {
        t: 'p',
        html: 'Every city produces a river of dirty water, the <b>sewage</b> (municipal waste water) from homes, drains, and industries. It is loaded with organic matter and swarming with microbes, many of them disease-causing. If you simply dumped it into a river, the consequences would be twofold: the pathogens would spread illness, and the flood of organic matter would feed an explosion of microbes that strip the river of its dissolved oxygen, suffocating fish and other life. So sewage cannot be discharged raw; it must first be <b>treated</b>.',
      },
      {
        t: 'p',
        html: 'Here is the elegant twist: the very thing that makes sewage dangerous, its microbes, is also the tool we use to clean it. In a <b>Sewage Treatment Plant (STP)</b>, we put <b>heterotrophic microbes</b> (which naturally occur in the sewage) to work, letting them eat up the organic matter under controlled conditions until the water is clean enough to release. We are essentially running the natural decomposition process, but speeded up and contained inside tanks.',
      },
      {
        t: 'p',
        html: 'The whole job happens in two stages with a clear division of labour. <b>Primary treatment is physical</b>: it removes solids by filtration and settling, no biology involved. <b>Secondary treatment is biological</b>: this is where microbes do the real cleaning, devouring the dissolved and suspended organic matter. The success of secondary treatment is measured by a single, beautiful number: the <b>BOD (Biochemical Oxygen Demand)</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine the organic matter in water as a buffet, and microbes as hungry guests. <b>BOD measures how much oxygen the microbial “guests” would consume to finish eating all the organic “food” in a litre of water.</b> A lot of food (high pollution) means a lot of oxygen would be eaten, so a <b>high BOD signals heavily polluted water</b>, and a <b>low BOD signals clean water</b>. The entire point of secondary treatment is to let the microbes eat the buffet inside the tank (where we supply plenty of oxygen by pumping air), so that by the time the water leaves, there is almost no food left, and therefore a low BOD, and it will not steal oxygen from the river.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b><br>• <b>The cleaning microbes are aerobic.</b> Secondary treatment depends on aerobic microbes, which is exactly why air is continuously pumped into the aeration tank. Cut off the oxygen and the cleaning fails.<br>• <b>BOD is an indirect measure.</b> It does not weigh the organic matter directly; it infers it from how much oxygen microbes use. More oxygen demand = more organic pollution.<br>• <b>Primary treatment alone is not enough.</b> Removing solids physically does not remove the dissolved organic load; without the biological second stage, the discharged water would still carry a high BOD.<br>• <b>Some sludge is recycled, not discarded.</b> A small portion of the active microbial sludge is deliberately returned to seed the next batch: it is a living inoculum, not waste.',
      },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      { t: 'p', html: '(No SI units arise; “1 litre of water” appears only inside the BOD definition.)' },
      {
        t: 'table',
        title: 'Table 3.1: The two stages of sewage treatment',
        head: ['Stage', 'Nature', 'What happens', 'Key output'],
        rows: [
          [
            '<b>Primary treatment</b>',
            'Physical',
            'Floating debris removed by filtration; grit (soil, pebbles) removed by sedimentation',
            '<b>Primary sludge</b> (settled solids) + <b>effluent</b> (supernatant)',
          ],
          [
            '<b>Secondary (biological) treatment</b>',
            'Biological',
            'Effluent aerated; aerobic microbes grow into <b>flocs</b> and consume organic matter, reducing BOD',
            'Low-BOD water + <b>activated sludge</b>',
          ],
        ],
      },
      {
        t: 'table',
        title: 'Table 3.2: Key terms',
        head: ['Term', 'Meaning (diagnostic)'],
        rows: [
          ['Sewage', 'Municipal waste water with organic matter + microbes (many pathogenic)'],
          ['Effluent', 'The liquid (supernatant) leaving primary treatment, sent to secondary treatment'],
          ['Floc', 'Mesh-like masses of bacteria held together with fungal filaments (mycelia)'],
          [
            'BOD',
            'Amount of oxygen consumed if all the organic matter in <b>one litre of water</b> were oxidised by microbes; <b>higher BOD = more polluted</b>',
          ],
          ['Activated sludge', 'Sediment of microbial flocs that settles after secondary treatment'],
          ['Anaerobic sludge digester', 'Tank where anaerobic microbes digest the leftover sludge, producing <b>biogas</b>'],
        ],
      },
      { t: 'p', html: '<b>Diagnostic features to burn in:</b>' },
      {
        t: 'p',
        html: '• <b>Primary = physical; Secondary = biological.</b> This is the single most tested distinction (the book’s estimate from past papers, not official figures).<br>• <b>BOD direction:</b> high BOD → dirty water; low BOD → clean water. The goal is to reduce BOD.<br>• <b>Flocs</b> = bacteria + fungal filaments forming a mesh.<br>• <b>Activated sludge has two fates:</b> a small part is recycled as <b>inoculum</b> into the aeration tank; the major part goes to <b>anaerobic digesters</b> → biogas.',
      },

      { t: 'part', title: 'Comparative characteristics and key processes' },
      {
        t: 'proc',
        title: 'The full sewage-treatment process, step by step',
        steps: [
          '<b>Primary treatment (physical).</b> Sewage is passed through sequential <b>filtration</b> (to remove floating debris) and <b>sedimentation</b> (to settle grit). The settled solids form the <b>primary sludge</b>, and the liquid supernatant, the <b>effluent</b>, is taken forward.',
          '<b>Secondary treatment begins: aeration.</b> The effluent is passed into large <b>aeration tanks</b> where it is constantly agitated mechanically and <b>air is pumped in</b>. <b>Why air:</b> the cleaning microbes are aerobic and need oxygen to multiply and feed.',
          '<b>Flocs form and devour organic matter.</b> Vigorous aerobic growth produces <b>flocs</b>, masses of bacteria associated with fungal filaments forming a mesh. These microbes consume the bulk of the organic matter in the effluent. <b>Result:</b> the <b>BOD of the effluent falls sharply.</b>',
          '<b>Settling.</b> Once BOD is significantly reduced, the effluent is passed into a <b>settling tank</b>, where the bacterial flocs sediment out. This sediment is the <b>activated sludge</b>.',
          '<b>Two fates of the activated sludge.</b><br>• A <b>small part</b> is pumped back into the aeration tank as an <b>inoculum</b> (living starter for the next batch).<br>• The <b>major part</b> is pumped into large <b>anaerobic sludge digesters</b>, where anaerobic bacteria digest the bacteria and fungi in the sludge.',
          '<b>Biogas is produced.</b> During anaerobic digestion, a mixture of gases (methane, hydrogen sulphide, and carbon dioxide) is produced. This mixture is <b>biogas</b>, which can be used as fuel. (This is the bridge to the biogas topic.)',
          '<b>Clean water released.</b> The treated water, now low in BOD, is discharged into natural water bodies such as rivers and streams.',
        ],
      },
      { t: 'fig', id: 'b12-08-fig-8.5' },
      { t: 'p', html: '<b>Why reducing BOD protects the river: the reasoning</b>' },
      {
        t: 'p',
        html: 'If high-BOD effluent entered a river, the river’s own microbes would multiply on the organic load and consume the river’s dissolved oxygen to oxidise it. Fish and aquatic life would then suffocate. By forcing the microbes to do their oxygen-consuming feeding inside the aeration tank (where we supply the oxygen), we deliver to the river water that no longer triggers this oxygen crash.',
      },
      { t: 'p', html: '<b>Comparison framework</b>' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Primary treatment', 'Secondary treatment'],
        rows: [
          ['Nature', 'Physical', 'Biological'],
          ['Removes', 'Solids (debris, grit)', 'Dissolved/suspended organic matter'],
          ['Microbes involved?', 'No', 'Yes (aerobic)'],
          ['Effect on BOD', 'Small; most of the fall in BOD is in secondary treatment', 'Large reduction'],
        ],
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Short answer, 3 marks.</b> What is BOD? How is the BOD of effluent reduced during secondary treatment?',
        steps: [
          '<b>Model answer.</b><br>• <b>BOD (Biochemical Oxygen Demand)</b> is the amount of oxygen that would be consumed if all the organic matter in <b>one litre of water</b> were oxidised by microbes; a <b>higher BOD indicates more organic pollution</b>.<br>• During secondary treatment, the effluent is aerated; <b>aerobic microbes grow into flocs and consume the organic matter</b>, so the organic load, and hence the BOD, <b>falls sharply</b>.',
          '<b>Full-marks tip:</b> define BOD precisely (oxygen consumed per litre, by microbial oxidation) and state the direction (high BOD = polluted).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Single-correct MCQ.</b> Primary treatment of sewage is essentially a:<br><b>(a)</b> biological process<br><b>(b)</b> physical (mechanical) process<br><b>(c)</b> chemical process<br><b>(d)</b> anaerobic process',
        steps: [
          'Primary treatment removes solids by filtration and sedimentation: purely physical. (a) describes <b>secondary</b> treatment; (c)/(d) are distractors.',
        ],
        ans: '(b)',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Match the column.</b> Match the item in Column I with its description in Column II.<br><b>Column I</b><br>A. Primary treatment<br>B. Floc<br>C. Activated sludge<br>D. Secondary treatment<br><b>Column II</b><br>i. Mesh of bacteria + fungal filaments<br>ii. Physical removal of solids<br>iii. Reduced organic load and BOD<br>iv. Settled microbial flocs after secondary treatment',
        steps: [
          '<b>Reasoning:</b> primary = physical solid removal (A–ii); floc = bacteria + fungal mesh (B–i); activated sludge = settled flocs (C–iv); secondary treatment achieves the BOD reduction (D–iii).',
        ],
        ans: 'A–ii, B–i, C–iv, D–iii',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Assertion–Reason.</b> <b>Assertion (A):</b> A small part of the activated sludge is pumped back into the aeration tank. <b>Reason (R):</b> It serves as an inoculum of microbes for the incoming effluent.<br><b>(a)</b> Both A and R true, R correctly explains A.<br><b>(b)</b> Both A and R true, R does not explain A.<br><b>(c)</b> A true, R false.<br><b>(d)</b> A false, R true.',
        steps: [
          'A is true: part of the activated sludge is recycled. R is true and is <b>the reason</b> for the recycling: the returned sludge is rich in active microbes and seeds the next batch. So R correctly explains A.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Differentiate between primary and secondary treatment of sewage in terms of the process involved. (2 marks)',
            a: 'Primary = physical (filtration + sedimentation); secondary = biological (aerobic microbial degradation).',
          },
          {
            q: '[CUET] The masses of bacteria associated with fungal filaments that form during aeration are called ______.',
            a: 'Flocs.',
          },
          {
            q: '[NEET] A high BOD value of a water sample indicates that the water is:<br>(a) very clean<br>(b) highly polluted with organic matter<br>(c) free of microbes<br>(d) rich in dissolved oxygen',
            a: '(b)',
          },
          {
            q: '[NEET] The major part of the activated sludge is pumped into:<br>(a) the aeration tank<br>(b) the river directly<br>(c) anaerobic sludge digesters<br>(d) the primary settling tank',
            a: '(c)',
          },
          {
            q: '[NEET high-difficulty] Explain why air is continuously pumped into the aeration tank, and predict what would happen to the cleaning process if the air supply failed. (Reasoning, 3 marks)',
            a: 'Air supplies oxygen for the <b>aerobic</b> microbes that consume organic matter; if the air failed, the aerobic microbes would not grow/feed properly, organic matter would not be degraded, and the BOD would remain high (treatment fails).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The microbes responsible for cleaning the effluent in secondary treatment are mainly:',
        opts: [
          { label: 'anaerobic bacteria', nudge: '<b>(a)</b>, <b>(d)</b> anaerobes/methanogens act later, in the <b>sludge digesters</b>, not the aeration tank.' },
          { label: 'aerobic heterotrophic microbes', nudge: null },
          { label: 'photosynthetic algae', nudge: '<b>(c)</b> algae are not the cleaning agents here.' },
          { label: 'methanogens', nudge: '<b>(a)</b>, <b>(d)</b> anaerobes/methanogens act later, in the <b>sludge digesters</b>, not the aeration tank.' },
        ],
        correct: 1,
        solution: 'Aerobic heterotrophs form flocs and consume the organic matter; this is why air is pumped in.',
      },
      {
        t: 'mcq',
        q: 'Which sequence is correct for sewage treatment?',
        opts: [
          { label: 'aeration → sedimentation → filtration → discharge', nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> scramble the order; primary always precedes secondary.' },
          { label: 'primary (physical) → secondary (biological) → discharge', nudge: null },
          { label: 'secondary → primary → digester → discharge', nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> scramble the order; primary always precedes secondary.' },
          { label: 'digester → aeration → filtration → discharge', nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> scramble the order; primary always precedes secondary.' },
        ],
        correct: 1,
        solution: 'Physical first, biological next, then discharge.',
      },
      {
        t: 'mcq',
        q: 'During secondary treatment, the BOD of the effluent:',
        opts: [
          { label: 'increases sharply', nudge: '<b>(a)</b>, <b>(d)</b> imply rising pollution: the opposite of the goal.' },
          { label: 'remains unchanged', nudge: '<b>(b)</b> ignores the entire purpose of the stage.' },
          { label: 'decreases sharply', nudge: null },
          { label: 'first increases then stays high', nudge: '<b>(a)</b>, <b>(d)</b> imply rising pollution: the opposite of the goal.' },
        ],
        correct: 2,
        solution: 'Microbes consume the organic matter, lowering the oxygen demand.',
      },
      {
        t: 'mcq',
        q: 'The biogas produced in anaerobic sludge digesters consists mainly of:',
        opts: [
          { label: 'oxygen', nudge: '<b>(a)</b> oxygen would mean aerobic conditions: wrong for a digester.' },
          { label: 'methane (with CO<sub>2</sub> and H<sub>2</sub>S)', nudge: null },
          { label: 'nitrogen', nudge: '<b>(c)</b>, <b>(d)</b> are not products of this process.' },
          { label: 'chlorine', nudge: '<b>(c)</b>, <b>(d)</b> are not products of this process.' },
        ],
        correct: 1,
        solution: 'Anaerobic digestion yields a methane-rich mixture (with carbon dioxide and hydrogen sulphide).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1: Reversing primary and secondary.</b> Primary = <b>physical</b>; secondary = <b>biological</b>. A very common slip (the book’s view, not a counted figure).',
          '<b>Pitfall 2: Misreading BOD direction. High BOD = dirty water.</b> Many students reverse this under pressure.',
          '<b>Pitfall 3: Thinking all the sludge is waste.</b> A <b>small part is recycled as inoculum</b>; only the major part goes to digesters. Both fates are examinable.',
          '<b>Pitfall 4: Aerobic vs anaerobic confusion.</b> Cleaning (aeration tank) = <b>aerobic</b>; biogas production (digester) = <b>anaerobic</b>. Keep the two environments separate.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> Remember the one-line spine: <b>“Filter & settle (physical) → aerate & eat (biological, BOD down) → settle sludge → recycle a bit, digest the rest → biogas → clean water out.”</b> Almost every sewage MCQ is a fragment of this spine (the book’s estimate from past papers, not official figures); locate the fragment and answer.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Sewage</b> = municipal waste water (organic matter + microbes, many pathogenic); cannot be discharged untreated.', note: '' },
          { f: '<b>Primary treatment = physical</b>', note: 'filtration + sedimentation → removes solids → gives <b>effluent</b>.' },
          {
            f: '<b>Secondary treatment = biological</b>',
            note: 'aeration tank, air pumped in, <b>aerobic microbes form flocs</b>, eat organic matter → <b>BOD drops sharply</b>.',
          },
          { f: '<b>BOD</b> = oxygen consumed to oxidise all organic matter in <b>1 L</b> of water; <b>high BOD = highly polluted</b>.', note: '' },
          {
            f: '<b>Activated sludge</b> (settled flocs)',
            note: 'small part → <b>inoculum</b> back to aeration tank; major part → <b>anaerobic digester</b> → <b>biogas</b> (methane-rich).',
          },
          { f: 'Treated, low-BOD water is released into rivers.', note: '' },
        ],
        aids: [
          '“<b>Primary = Physical; Secondary = Stuff-eating (biological).</b>”',
          '“<b>High BOD = Bad Old Dirty water.</b>”',
          '<b>Aerate to clean, anaerobic to gas.</b>',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 437–443 ─────────────────────────
  {
    n: '04',
    title: 'Microbes in Production of Biogas',
    kalam: 'Biogas is the everyday miracle of turning waste into fuel.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A compact topic: NEET often asks about <b>methanogens</b>, the composition of biogas, the role of the <b>rumen</b> of cattle, and why cattle dung (“gobar”) is used (the book’s estimate from past papers, not official figures). CUET keeps to single-fact recall (what is the main gas in biogas, who developed the technology). CBSE Boards set 2–3 mark questions on the working of a biogas plant or the role of methanogens. Short section: do not skip it.',
      },
      {
        t: 'p',
        html: 'Biogas is the everyday miracle of turning waste into fuel. <b>Biogas is a mixture of gases, predominantly methane, produced by the microbial breakdown of organic matter in the absence of oxygen, and it can be burned as a fuel</b> for cooking and lighting. In rural India it is famous as <b>“gobar gas”</b>, because it is most commonly produced from cattle dung (gobar). The same gas that bubbles harmlessly out of a marsh or a dung heap is captured in a tank and piped into a kitchen stove.',
      },
      {
        t: 'p',
        html: 'The heroes of this process are a special group of microbes called <b>methanogens</b>, literally “methane-makers”. These are microbes (archaea, which NCERT calls bacteria) that grow <b>anaerobically</b> (without oxygen) on cellulose-rich material and produce a large amount of methane along with carbon dioxide and hydrogen (NCERT’s wording for the digesting microbes as a group; strictly, other bacteria make the H<sub>2</sub> and CO<sub>2</sub>, and methanogens use them to make methane). A common example is <i>Methanobacterium</i>.',
      },
      {
        t: 'p',
        html: 'Now the clever part: where do we find these methanogens in plenty? In two places. First, in the <b>anaerobic sludge</b> during sewage treatment (the link from the previous topic). Second, and crucially, inside the <b>rumen</b> (a part of the stomach) of cattle. The rumen is packed with cellulose-digesting microbes, and among them are methanogens that help break down the cellulose in the grass the cattle eat, playing a real role in the animal’s nutrition (the cellulose is broken down mainly by other rumen microbes; methanogens use the H<sub>2</sub> and CO<sub>2</sub> released and keep the rumen working well). Because these methanogens pass out with the animal’s waste, <b>cattle dung is naturally rich in methanogens</b>, which is exactly why dung is the perfect raw material for a biogas plant.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Think of a cow as a walking fermentation tank with a four-chambered stomach. The grass it eats is mostly cellulose, which the cow itself cannot digest, so it outsources the job to a teeming community of microbes in its rumen, including methane-makers. When the dung leaves the cow, it carries this ready-made microbial starter culture. Pile that dung into a sealed, airless tank, and the methanogens simply continue what they were already doing inside the cow, making methane from the hydrogen and carbon dioxide that other microbes release, except now we trap the gas and cook our dinner with it. A biogas plant is essentially a cow’s rumen, scaled up and sealed in concrete.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b><br>• <b>It must be anaerobic.</b> Methanogens are killed or inhibited by oxygen. A biogas digester works only because it is sealed against air; expose it to oxygen and methane production stops.<br>• <b>Cellulose-rich, wet feedstock.</b> The microbes work on cellulosic organic matter in a slurry (dung + water); dry or non-organic input will not ferment.<br>• <b>The product is a mixture, not pure methane.</b> Biogas is mostly methane but also contains carbon dioxide and other gases. Calling biogas “pure methane” is wrong.<br>• <b>The spent slurry is a bonus, not waste.</b> What is left after gas production is rich in nutrients and used as <b>manure (fertiliser)</b>: nothing is wasted.',
      },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      { t: 'p', html: '(No SI units arise.)' },
      {
        t: 'table',
        title: 'Table 4.1: Key facts about biogas and methanogens',
        head: ['Item', 'Detail (diagnostic)'],
        rows: [
          ['Biogas', 'A mixture of gases, <b>predominantly methane</b>, used as fuel'],
          ['Common name', 'Gobar gas (from cattle dung)'],
          ['Producing microbes', '<b>Methanogens</b> (e.g. <i>Methanobacterium</i>)'],
          ['Nature of methanogens', '<b>Anaerobic</b> microbes (archaea; NCERT calls them bacteria); grow on cellulosic material'],
          ['Gases made in the digester', 'Methane + carbon dioxide + hydrogen (NCERT); biogas as a whole is methane (about 50 to 70 per cent), carbon dioxide, and small amounts of hydrogen and hydrogen sulphide'],
          ['Where methanogens occur', 'Anaerobic sewage sludge; <b>rumen of cattle</b>; cattle dung'],
          ['Role in cattle', 'Help break down cellulose; contribute to the <b>nutrition</b> of cattle (the cellulose is broken down mainly by other rumen microbes; methanogens use the H<sub>2</sub> and CO<sub>2</sub> released)'],
          ['Spent slurry', 'Used as <b>manure</b>'],
          [
            'Technology developed in India by',
            '<b>IARI</b> (Indian Agricultural Research Institute) and <b>KVIC</b> (Khadi and Village Industries Commission)',
          ],
        ],
      },
      {
        t: 'table',
        title: 'Table 4.2: Parts of a biogas plant',
        head: ['Part', 'Function'],
        rows: [
          ['Inlet (mixing tank)', 'Cattle dung + water slurry is fed in'],
          ['Digester', 'Sealed, airless tank where methanogens act on the slurry'],
          ['Gas holder (floating cover)', 'Rises as gas collects; stores the biogas'],
          ['Gas outlet', 'Pipes biogas to homes for cooking/lighting'],
          ['Spent-slurry outlet', 'Removes the digested residue, used as manure'],
        ],
      },
      { t: 'p', html: '<b>Diagnostic features to burn in:</b>' },
      {
        t: 'p',
        html: '• <b>Methanogens are anaerobic methane-makers</b>; <i>Methanobacterium</i> is the stock example.<br>• <b>Biogas = predominantly methane</b> (plus CO<sub>2</sub>, H<sub>2</sub> and a little H<sub>2</sub>S), not pure methane.<br>• <b>Rumen connection:</b> methanogens live in cattle rumen, aid cellulose digestion (other rumen microbes break the cellulose down; methanogens use the gases released), so <b>dung is rich in them</b>.<br>• <b>Developed by IARI and KVIC</b> in India.',
      },

      { t: 'part', title: 'Comparative characteristics and key processes' },
      {
        t: 'proc',
        title: 'How a biogas plant works, step by step',
        steps: [
          '<b>Feed the slurry.</b> Cattle dung is mixed with water to form a slurry and fed into the plant through the inlet. <b>Why dung:</b> it already carries methanogens from the cattle rumen.',
          '<b>Anaerobic digestion in the sealed tank.</b> Inside the airless digester, methanogens and other anaerobic microbes break down the cellulosic organic matter. <b>Why sealed:</b> methanogens require anaerobic conditions; oxygen would stop them.',
          '<b>Gas collects under the floating cover.</b> As biogas (methane-rich) is produced, it gathers under a floating gas holder, which rises with the accumulating gas.',
          '<b>Gas is piped out for use.</b> A gas outlet connected to the holder delivers biogas to homes for <b>cooking and lighting</b>.',
          '<b>Spent slurry is removed as manure.</b> The digested residue is taken out through a separate outlet and used as nutrient-rich <b>manure</b> in the fields.',
        ],
      },
      { t: 'fig', id: 'b12-08-fig-8.6' },
      { t: 'p', html: '<b>The rumen link: why dung is the fuel source</b>' },
      {
        t: 'p',
        html: 'Cattle eat cellulose-rich grass they cannot digest alone. Their <b>rumen</b> houses microbes, including methanogens, that ferment this cellulose, aiding the animal’s nutrition and releasing methane in the process (with other rumen microbes). Because these methanogens leave the body in the dung, <b>the dung is a ready inoculum</b> of methane-makers. Feeding dung into a digester simply continues the rumen’s work in a tank we can tap.',
      },
      { t: 'p', html: '<b>Comparison framework</b>' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Aerobic decomposition (e.g. sewage aeration)', 'Anaerobic digestion (biogas)'],
        rows: [
          ['Oxygen', 'Required', 'Absent'],
          ['Chief microbes', 'Aerobic heterotrophs', 'Methanogens'],
          ['Main outcome', 'Organic matter oxidised, BOD reduced', 'Methane-rich biogas produced'],
          ['Useful product', 'Clean water', 'Fuel + manure'],
        ],
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Short answer, 3 marks.</b> What are methanogens? State their role in cattle and explain why cattle dung is used for biogas production.',
        steps: [
          '<b>Model answer.</b><br>• <b>Methanogens</b> are <b>anaerobic</b> microbes (archaea; NCERT calls them bacteria), e.g. <i>Methanobacterium</i>, that grow on cellulosic material and produce <b>methane</b> (NCERT lists CO<sub>2</sub> and H<sub>2</sub> with it).<br>• In cattle, they live in the <b>rumen</b>, where they help <b>break down cellulose</b> and contribute to the animal’s nutrition (with other rumen microbes).<br>• Since methanogens pass out in the dung, <b>cattle dung is rich in methanogens</b>, making it an ideal raw material for biogas production.',
          '<b>Full-marks tip:</b> state “anaerobic”, name <i>Methanobacterium</i>, and connect rumen → dung → biogas explicitly.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Single-correct MCQ.</b> The predominant gas in biogas is:<br><b>(a)</b> carbon dioxide<br><b>(b)</b> hydrogen sulphide<br><b>(c)</b> methane<br><b>(d)</b> oxygen',
        steps: [
          'Biogas is predominantly methane (with smaller amounts of CO<sub>2</sub> and other gases). (a) and (b) are present but are not the predominant gas; (d) is absent, since the process is anaerobic.',
        ],
        ans: '(c)',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Match the column.</b> Match Column I with Column II.<br><b>Column I</b><br>A. <i>Methanobacterium</i><br>B. Rumen<br>C. Gas holder<br>D. Spent slurry<br><b>Column II</b><br>i. Stores the gas; rises as it fills<br>ii. A methanogen<br>iii. Site of methanogens in cattle<br>iv. Used as manure',
        steps: [
          '<b>Reasoning:</b> <i>Methanobacterium</i> = a methanogen (A–ii); rumen = where methanogens live in cattle (B–iii); gas holder = floating cover that rises with gas (C–i); spent slurry = residue used as manure (D–iv).',
        ],
        ans: 'A–ii, B–iii, C–i, D–iv',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Assertion–Reason.</b> <b>Assertion (A):</b> A biogas plant must be sealed against air. <b>Reason (R):</b> Methanogens that produce methane are anaerobic and are inhibited by oxygen.<br><b>(a)</b> Both A and R true, R correctly explains A.<br><b>(b)</b> Both A and R true, R does not explain A.<br><b>(c)</b> A true, R false.<br><b>(d)</b> A false, R true.',
        steps: [
          'A is true: the digester is airless. R is true and is <b>the reason</b>: methanogens require anaerobic conditions, so admitting oxygen would halt methane production. R correctly explains A.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name two places where methanogens are commonly found. (2 marks)',
            a: 'Rumen of cattle; anaerobic sludge of sewage treatment plants (also cattle dung).',
          },
          {
            q: '[CUET] The residue left after biogas production from cattle dung is used as ______.',
            a: 'Manure (fertiliser).',
          },
          {
            q: '[NEET] Which of the following is NOT a property of methanogens?<br>(a) They are anaerobic<br>(b) They produce methane<br>(c) They grow on cellulosic material<br>(d) They produce oxygen',
            a: '(d)',
          },
          {
            q: '[NEET] The technology of biogas production in India was developed largely by:<br>(a) ISRO and DRDO<br>(b) IARI and KVIC<br>(c) AIIMS and ICMR<br>(d) CSIR and NCERT',
            a: '(b)',
          },
          {
            q: '[NEET high-difficulty] Explain the link between sewage treatment and biogas production, naming the type of microbe responsible. (Reasoning, 3 marks)',
            a: 'In sewage treatment, the major part of the activated sludge is sent to <b>anaerobic sludge digesters</b>, where <b>anaerobic bacteria</b> digest the organic matter and <b>methanogens</b> produce a <b>methane-rich biogas</b>: so biogas is a by-product of sewage treatment.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Methanogens are:',
        opts: [
          { label: 'aerobic bacteria that produce oxygen', nudge: '<b>(a)</b> reverses both the oxygen requirement and the product.' },
          { label: 'anaerobic microbes (archaea) that produce methane', nudge: null },
          { label: 'fungi that produce alcohol', nudge: '<b>(c)</b>, <b>(d)</b> describe entirely different microbes: (c) yeast, (d) cyanobacteria.' },
          { label: 'algae that fix nitrogen', nudge: '<b>(c)</b>, <b>(d)</b> describe entirely different microbes: (c) yeast, (d) cyanobacteria.' },
        ],
        correct: 1,
        solution: 'Methanogens are anaerobic methane-producers (e.g. <i>Methanobacterium</i>).',
      },
      {
        t: 'mcq',
        q: 'Cattle dung is preferred for biogas production because it:',
        opts: [
          { label: 'is dry and burns easily', nudge: '<b>(a)</b> dung is used as a wet slurry, not burned directly here.' },
          { label: 'is rich in methanogens from the cattle rumen', nudge: null },
          { label: 'contains large amounts of oxygen', nudge: '<b>(c)</b> oxygen would inhibit the anaerobic process.' },
          { label: 'has no microbes at all', nudge: '<b>(d)</b> the opposite of the truth: it is microbe-rich.' },
        ],
        correct: 1,
        solution: 'Dung carries methanogens originating in the rumen.',
      },
      {
        t: 'mcq',
        q: 'Biogas is best described as:',
        opts: [
          { label: 'pure methane', nudge: '<b>(a)</b> the “pure methane” trap: biogas also contains CO<sub>2</sub> and others.' },
          { label: 'a mixture of gases, predominantly methane', nudge: null },
          { label: 'pure carbon dioxide', nudge: '<b>(c)</b>, <b>(d)</b> wrong dominant gas / wrong composition.' },
          { label: 'a mixture of oxygen and nitrogen', nudge: '<b>(c)</b>, <b>(d)</b> wrong dominant gas / wrong composition.' },
        ],
        correct: 1,
        solution: 'It is methane-rich but a mixture.',
      },
      {
        t: 'mcq',
        q: 'The floating cover in a biogas plant serves to:',
        opts: [
          { label: 'keep oxygen flowing into the digester', nudge: '<b>(a)</b> contradicts the anaerobic requirement.' },
          { label: 'collect and store the gas produced, rising as it fills', nudge: null },
          { label: 'remove the spent slurry', nudge: '<b>(c)</b> is the slurry outlet’s job.' },
          { label: 'filter the incoming dung', nudge: '<b>(d)</b> is not the cover’s function.' },
        ],
        correct: 1,
        solution: 'The gas holder rises as biogas accumulates.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1: “Biogas is pure methane.”</b> It is <b>predominantly</b> methane, but a <b>mixture</b> (with CO<sub>2</sub>, H<sub>2</sub> and a little H<sub>2</sub>S). State “mixture” for full marks.',
          '<b>Pitfall 2: Forgetting the anaerobic requirement.</b> Methanogens are <b>anaerobic</b>; the plant is sealed. Writing that they need air is a direct error.',
          '<b>Pitfall 3: Missing the rumen connection.</b> The reason dung works is that methanogens come from the <b>cattle rumen</b>. This causal chain is a common basis for questions.',
          '<b>Pitfall 4: Treating spent slurry as waste.</b> It is used as <b>manure</b>: a “fate” question.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> Anchor the section on one chain: <b>“rumen → methanogens → dung → anaerobic digester → methane-rich biogas (+ manure).”</b> Nearly every biogas question is a link in this chain (the book’s estimate from past papers, not official figures); identify the link and answer instantly.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Biogas</b> = mixture of gases, <b>predominantly methane</b>; common name <b>gobar gas</b>; used for <b>cooking and lighting</b>.', note: '' },
          {
            f: '<b>Methanogens</b> = <b>anaerobic</b> microbes (archaea; NCERT: bacteria), e.g. <i>Methanobacterium</i>, that grow on cellulosic matter and make methane (NCERT: with CO<sub>2</sub>, H<sub>2</sub>).',
            note: '',
          },
          {
            f: '<b>Found in</b>',
            note: 'anaerobic sewage sludge; <b>rumen of cattle</b> (aid cellulose digestion with other rumen microbes, help cattle nutrition); hence <b>dung is rich in them</b>.',
          },
          {
            f: '<b>Biogas plant parts</b>',
            note: 'inlet (slurry) → sealed <b>digester</b> → <b>floating gas holder</b> (rises with gas) → gas outlet (to stove); <b>spent slurry → manure</b>.',
          },
          { f: '<b>Developed in India by IARI and KVIC.</b>', note: '' },
        ],
        aids: [
          '“<b>Methanogens: no air, make methane.</b>”',
          '“<b>Rumen → Dung → Digester → Gas</b>”: the four-link biogas chain.',
          '<b>Spent slurry isn’t spent for the soil: it’s manure.</b>',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 05 · pp. 444–454 ─────────────────────────
  {
    n: '05',
    title: 'Microbes as Biocontrol Agents and Biofertilisers',
    kalam: 'Notice the shared logic: replace a dead chemical with a living worker.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A NEET-relevant topic: <i>Bacillus thuringiensis</i>, <i>Trichoderma</i>, Baculovirus (<i>Nucleopolyhedrovirus</i>), <i>Rhizobium</i>, <i>Glomus</i>/mycorrhiza, and cyanobacteria/<i>Azolla</i> recur almost every year as direct recall, match-the-column, and assertion-reason items (the book’s estimate from past papers, not official figures). CUET keeps it to clean single-fact MCQs (which microbe fixes nitrogen, which absorbs phosphorus). CBSE Boards favour 2–3 mark questions: “How does Bt kill insect larvae?”, “Name two biofertilisers and their roles”, or “Why are baculoviruses preferred in ecologically sensitive areas?” The reasoning depth is shallow but the organism-to-role mapping is unforgiving: one swapped name costs the mark.',
      },
      {
        t: 'p',
        html: 'For most of the twentieth century, the farmer’s answer to both problems of the field, pests eating the crop and soil running short of nutrients, was the same: pour on a chemical. Chemical pesticides to kill the insects, chemical fertilisers (urea, DAP) to feed the plants. They worked, but they came with a hidden bill: residues in food, poisoned groundwater, dead pollinators, and soil that slowly turned lifeless. This topic is about the smarter, living alternative: letting other organisms do both jobs for us. That is the whole spirit of <b>organic farming</b>: raising crops using components of biological origin instead of synthetic chemicals.',
      },
      {
        t: 'p',
        html: 'Two ideas sit at the centre. <b>Biocontrol</b> (biological control) means using living organisms (predators, bacteria, fungi, viruses) to keep crop pests and plant diseases in check, instead of spraying poison. <b>Biofertilisers</b> are living organisms (bacteria, fungi, cyanobacteria) that enrich the nutrient quality of the soil, instead of dumping in manufactured fertiliser. Notice the shared logic: replace a dead chemical with a living worker.',
      },
      {
        t: 'p',
        html: 'A crucial subtlety hides inside biocontrol. The goal is <b>not eradication</b>: you are not trying to wipe the pest off the face of the earth. You are trying to keep it at a manageable level through a natural system of checks and balances, the way a healthy ecosystem already does. A field with ladybird beetles usually keeps aphids at a harmless level, because the beetles eat the aphids down and then, lacking food, thin out themselves. That self-regulating balance is the thing we are trying to recreate.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine two ways to deal with rats in a granary. Way one: scatter rat poison everywhere; it kills the rats, but it also poisons the grain, the cat, and the children who play nearby, and you have to keep buying more. Way two: keep a cat. The cat hunts only rats, never touches the grain, costs nothing to “refill”, and naturally backs off once the rats are few. Biocontrol is the cat. A biofertiliser works on the same “living helper” principle but for nutrition: instead of buying a sack of nitrogen, you partner with a bacterium (<i>Rhizobium</i>) that pulls nitrogen straight out of the air and hands it to the plant’s roots, a tiny, self-renewing fertiliser factory living inside the root.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> The living-helper approach only works inside real biological constraints, and exams test exactly these edges:<br>• <b>Biocontrol agents should be as selective as possible.</b> A good agent controls the target pest and spares non-target organisms: plants, mammals, birds, fish, and beneficial insects. Baculoviruses are prized for this: their narrow host range. A “broad-spectrum” biological killer would be no better than a chemical.<br>• <b>Biofertilisers need the right partnership and the right host.</b> <i>Rhizobium</i> fixes nitrogen in the root nodules of <b>legumes</b> (NCERT’s example; a rare non-legume host exists); with wheat it does not form nodules. A mycorrhizal seedling often fails to establish if the fungal inoculum is absent from the soil.<br>• <b>It is slower and gentler, not instant.</b> Living agents act through biology, not a quick chemical knockdown. They depend on moisture, temperature, and soil health, and they keep pests low rather than zero. Expecting overnight, total kill is the wrong mental model.<br>• <b>Free-living vs symbiotic matters.</b> Some nitrogen-fixers (<i>Azotobacter</i>, <i>Azospirillum</i>) work alone in the soil; others (<i>Rhizobium</i>) work only in partnership. Mixing these up is a common error.',
      },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      {
        t: 'p',
        html: 'The examinable core of this topic is the <b>organism → type → role</b> mapping. Lock the tables; everything else is commentary. (No SI units arise: all content is qualitative and taxonomic.)',
      },
      {
        t: 'table',
        title: 'Table 5.1: Biocontrol agents',
        head: ['Agent', 'Type of organism', 'Target controlled', 'What it actually does (diagnostic action)'],
        rows: [
          ['Ladybird beetle', 'Insect (predator)', 'Aphids', 'Natural predation: eats aphids'],
          ['Dragonfly', 'Insect (predator)', 'Mosquitoes', 'Natural predation: eats mosquitoes/larvae'],
          [
            '<i>Bacillus thuringiensis</i> (Bt)',
            'Bacterium',
            'Butterfly caterpillars (larvae)',
            'Sprayed as dried spores; toxin released in larval gut kills the caterpillar; most other insects are spared',
          ],
          [
            '<i>Trichoderma</i>',
            'Fungus (free-living, root ecosystems)',
            'Fungal plant pathogens (soil-borne)',
            'Mycoparasitic: attacks the disease-causing fungi',
          ],
          [
            'Baculovirus (<i>Nucleopolyhedrovirus</i>)',
            'Virus',
            'Insects and other arthropods',
            'Species-specific, narrow-spectrum; no harm to non-target organisms',
          ],
        ],
      },
      {
        t: 'table',
        title: 'Table 5.2: Biofertilisers',
        head: ['Agent', 'Type', 'Association', 'Nutrient role (diagnostic)'],
        rows: [
          [
            '<i>Rhizobium</i>',
            'Bacterium',
            '<b>Symbiotic</b>: root nodules of legumes',
            'Fixes atmospheric <b>nitrogen</b> into usable organic compounds',
          ],
          ['<i>Azotobacter</i>, <i>Azospirillum</i>', 'Bacteria', '<b>Free-living</b> in soil', 'Fix atmospheric <b>nitrogen</b>, enrich soil N'],
          [
            'Cyanobacteria: <i>Anabaena</i>, <i>Nostoc</i>, <i>Oscillatoria</i>',
            'Photosynthetic prokaryotes',
            'Free-living (and some symbiotic)',
            'Fix <b>nitrogen</b> + add <b>organic matter</b>; key biofertiliser in <b>paddy fields</b>',
          ],
          [
            '<i>Azolla</i> (water fern) + <i>Anabaena azollae</i> (the traditional name; now <i>Trichormus azollae</i>, also called <i>Nostoc azollae</i>)',
            'Fern–cyanobacterium symbiosis',
            'Symbiotic (cyanobacterium in leaf cavities)',
            'Fixes nitrogen in rice fields',
          ],
          [
            'Mycorrhiza: genus <i>Glomus</i>',
            'Fungus',
            '<b>Symbiotic</b> with plant roots',
            'Absorbs <b>phosphorus</b> from soil and passes it to the plant',
          ],
        ],
      },
      { t: 'p', html: '<b>Diagnostic features worth burning in:</b>' },
      {
        t: 'p',
        html: '• <b>Nitrogen vs phosphorus is the master split.</b> Bacteria and cyanobacteria here fix nitrogen; the fungus <i>Glomus</i> (mycorrhiza) mainly supplies phosphorus (mycorrhiza also help with water and other nutrients). These two are often swapped in questions.<br>• <b>Symbiotic vs free-living nitrogen-fixers.</b> <i>Rhizobium</i> = symbiotic (needs a legume host). <i>Azotobacter</i> and <i>Azospirillum</i> = free-living. Cyanobacteria can be either.<br>• <b>Mycorrhiza = “fungus-root”.</b> A mutualistic fungus-plus-root partnership. Besides phosphorus, mycorrhizal plants gain resistance to root-borne pathogens and tolerance to salinity and drought.<br>• <b>Integrated Pest Management (IPM).</b> An environmentally sensitive approach using knowledge of pest life cycles and their interactions with the environment to keep pests below damaging levels: biocontrol agents are its tools.<br>• <b>Learn Bt’s mechanism.</b> The toxin is made and sprayed as an <b>inactive protoxin</b>; it is <b>activated by the alkaline pH of the insect gut</b>, then damages the gut-lining cells. The genes coding these toxins are the <i>cry</i> genes; some of them were engineered into <b>Bt cotton</b>.',
      },

      { t: 'part', title: 'Comparative characteristics and key processes' },
      {
        t: 'p',
        html: 'There are no life cycles or alternation of generations to draw here (this is applied microbiology), so this section lays out the <b>step-by-step processes</b> behind the most-tested examples and a clean <b>comparison framework</b>.',
      },
      {
        t: 'proc',
        title: 'How Bacillus thuringiensis kills a caterpillar',
        steps: [
          '<b>Spray the spores.</b> Bt is sold as <b>dried spores</b>, mixed with water, and sprayed onto vulnerable plants such as brassicas and fruit trees. <b>Why dried spores:</b> they are stable, easy to store, and the toxin they carry becomes active only once eaten.',
          '<b>The larva eats the toxin.</b> A feeding caterpillar ingests the spores along with the leaf.',
          '<b>The alkaline gut activates the protoxin.</b> The toxin enters the larva as an <b>inactive protoxin</b>. The caterpillar’s gut is strongly <b>alkaline</b>, this high pH dissolves the crystals, and gut enzymes (proteases) cut the protoxin into the <b>active toxin</b>. <b>Why this matters:</b> activation is conditional on the insect’s own gut chemistry, which is what makes Bt safe for organisms (like us) without that alkaline gut.',
          '<b>The gut cells are destroyed.</b> The active toxin binds the gut-lining (epithelial) cells, punching pores in them, causing the cells to swell, burst (lyse), and the larva to stop feeding and die.',
          '<b>Most non-target insects are spared.</b> Because activation and binding need the right gut conditions and receptors, a given Bt toxin kills only a limited group of insects (mainly caterpillars) and <b>leaves most other insects, such as bees, unharmed</b>: the selectivity that makes a good biocontrol agent.',
        ],
      },
      { t: 'fig', id: 'b12-08-fig-8.7' },
      {
        t: 'proc',
        title: 'How Rhizobium enriches the soil (symbiotic nitrogen fixation)',
        steps: [
          '<b>Partnership forms in the root nodules.</b> <i>Rhizobium</i> is a soil bacterium that lives <b>symbiotically inside the root nodules of leguminous plants</b> (gram, pea, beans, groundnut).',
          '<b>Atmospheric nitrogen is captured.</b> Inside the nodule the bacterium converts inert atmospheric nitrogen into nitrogen-containing organic compounds the plant can use. <b>Why a nodule:</b> it provides the low-oxygen, protected micro-environment the nitrogen-fixing machinery needs.',
          '<b>Soil nitrogen rises.</b> When the legume residues decay, the fixed nitrogen is returned to the soil, which is exactly why legumes are prized in <b>crop rotation</b>.',
        ],
      },
      {
        t: 'p',
        html: 'By contrast, <i>Azotobacter</i> and <i>Azospirillum</i> do the same job <b>free-living</b> in the soil without needing a host, so they enrich nitrogen even under non-legume crops.',
      },
      {
        t: 'proc',
        title: 'How mycorrhiza helps the plant (phosphorus nutrition)',
        steps: [
          '<b>Fungus colonises the root.</b> The mycorrhizal fungus (commonly genus <i>Glomus</i>) forms a mutualistic association with plant roots, extending fungal threads (hyphae) far out into the soil.',
          '<b>Phosphorus is mined and delivered.</b> Soil phosphorus is largely locked in forms roots cannot reach; the fungal network absorbs this phosphorus and passes it to the plant. In return, the plant supplies the fungus with sugars from photosynthesis.',
          '<b>Bonus benefits.</b> Mycorrhizal plants also show <b>resistance to root-borne pathogens</b>, <b>tolerance to salinity and drought</b>, and <b>better overall growth</b>.',
        ],
      },
      { t: 'fig', id: 'b12-08-fig-8.8' },
      { t: 'p', html: '<b>Comparison frameworks</b>' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Biocontrol agents', 'Biofertilisers'],
        rows: [
          ['Purpose', 'Control pests / plant diseases', 'Enrich soil nutrients'],
          ['Replaces', 'Chemical pesticides', 'Chemical fertilisers'],
          ['Examples', 'Bt, <i>Trichoderma</i>, baculovirus, ladybird beetle', '<i>Rhizobium</i>, <i>Azotobacter</i>, cyanobacteria, <i>Glomus</i>'],
          ['Governing idea', 'Natural predation / specificity', 'Nutrient fixation / uptake'],
        ],
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Symbiotic N-fixer', 'Free-living N-fixer'],
        rows: [
          ['Needs a host?', 'Yes', 'No'],
          ['Example', '<i>Rhizobium</i> (legume nodules)', '<i>Azotobacter</i>, <i>Azospirillum</i>'],
          ['Where it acts', 'Inside root nodules', 'Free in soil'],
        ],
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Short answer, 3 marks.</b> Explain how <i>Bacillus thuringiensis</i> acts as a biocontrol agent against caterpillars. Why does it not harm most other insects?',
        steps: [
          '<b>Model answer.</b><br>• <i>Bacillus thuringiensis</i> (Bt) is applied as <b>dried spores</b> mixed with water and sprayed on plants.<br>• When a caterpillar feeds, it ingests the toxin, which is present as an <b>inactive protoxin</b>. The <b>alkaline pH of the caterpillar’s gut activates</b> it into the toxic form, which damages the gut cells and kills the larva.<br>• It does <b>not harm most other insects</b> because activation and action are <b>selective</b>: the protoxin needs the alkaline gut to be activated and the toxin must bind specific receptors on gut cells, so it acts on a limited group of insects (mainly caterpillars) and insects lacking these conditions are largely unaffected.',
          '<b>Full-marks tip:</b> name the organism in italics, state “protoxin → activated by alkaline gut pH”, and explicitly mention that activation and binding are selective for the last mark.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Single-correct MCQ.</b> Which one of the following supplies phosphorus to plants rather than fixing nitrogen?<br><b>(a)</b> <i>Rhizobium</i><br><b>(b)</b> <i>Anabaena</i><br><b>(c)</b> <i>Glomus</i><br><b>(d)</b> <i>Azospirillum</i>',
        steps: [
          '<i>Glomus</i> forms mycorrhiza and absorbs <b>phosphorus</b>, passing it to the plant. (a) <i>Rhizobium</i>, (b) <i>Anabaena</i>, and (d) <i>Azospirillum</i> are all <b>nitrogen</b>-fixers. The whole question hinges on the nitrogen-vs-phosphorus split.',
        ],
        ans: '(c)',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Match the column.</b> Match the microbe in Column I with its role in Column II.<br><b>Column I (Microbe)</b><br>A. <i>Trichoderma</i><br>B. <i>Rhizobium</i><br>C. <i>Glomus</i><br>D. Baculovirus<br><b>Column II (Role)</b><br>i. Symbiotic nitrogen fixation in legume nodules<br>ii. Biocontrol of fungal plant pathogens<br>iii. Species-specific viral insecticide<br>iv. Phosphorus uptake via mycorrhiza',
        steps: [
          '<b>Reasoning:</b> <i>Trichoderma</i> = mycoparasitic fungus controlling other fungi (A–ii). <i>Rhizobium</i> = symbiotic N-fixer in legume nodules (B–i). <i>Glomus</i> = mycorrhizal phosphorus supplier (C–iv). Baculovirus (<i>Nucleopolyhedrovirus</i>) = narrow-spectrum viral insecticide (D–iii). The trap is pairing <i>Trichoderma</i> with insect control: it targets <b>fungi</b>, not insects.',
        ],
        ans: 'A–ii, B–i, C–iv, D–iii',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Assertion–Reason.</b> <b>Assertion (A):</b> Baculoviruses are especially suitable for use in ecologically sensitive areas under Integrated Pest Management. <b>Reason (R):</b> Baculoviruses are species-specific, narrow-spectrum agents that do not harm plants, mammals, birds, fish, or non-target insects.<br><b>(a)</b> Both A and R are true, and R is the correct explanation of A.<br><b>(b)</b> Both A and R are true, but R is <b>not</b> the correct explanation of A.<br><b>(c)</b> A is true, R is false.<br><b>(d)</b> A is false, R is true.',
        steps: [
          'A is true: their narrowness makes them ideal where broad-spectrum chemicals would cause collateral ecological damage. R is true and is <b>precisely why</b> they suit sensitive habitats, so R correctly explains A. The tempting wrong answer is (b): students accept both lines but doubt the causal link, when in fact the species-specificity is the reason for the ecological suitability.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      { t: 'p', html: 'Attempt before checking the key.' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define biofertiliser and name one bacterial, one fungal, and one cyanobacterial example. (3 marks)',
            a: 'Biofertiliser = an organism that enriches soil nutrient quality; e.g. <i>Rhizobium</i> (bacterium), <i>Glomus</i>/mycorrhiza (fungus), <i>Anabaena</i> (cyanobacterium).',
          },
          {
            q: '[CUET] The symbiont present in the leaf cavities of <i>Azolla</i> that fixes atmospheric nitrogen is ______.',
            a: '<i>Anabaena azollae</i>.',
          },
          {
            q: '[NEET] Which pair consists of <b>only free-living</b> nitrogen-fixing organisms?<br>(a) <i>Rhizobium</i> and <i>Glomus</i><br>(b) <i>Azotobacter</i> and <i>Azospirillum</i><br>(c) <i>Rhizobium</i> and <i>Anabaena</i><br>(d) <i>Glomus</i> and <i>Trichoderma</i>',
            a: '(b)',
          },
          {
            q: '[NEET] Assertion (A): In paddy fields, cyanobacteria act as important biofertilisers. Reason (R): They fix atmospheric nitrogen and add organic matter to the soil.<br>Choose:<br>(a) both true, R explains A;<br>(b) both true, R does not explain A;<br>(c) A true, R false;<br>(d) A false, R true.',
            a: '(a)',
          },
          {
            q: '[NEET high-difficulty] A farmer reports that spraying Bt controlled the caterpillars in his cabbage field but the neighbouring bee colonies were unaffected, while a broad chemical pesticide used earlier had killed the bees too. Explain, in terms of mode of action, why the two outcomes differ. (Reasoning, 3 marks)',
            a: 'Bt toxin is a protoxin <b>activated in the alkaline gut</b> of the susceptible larvae and binds receptors only on their gut cells, so it acts on a <b>narrow group (caterpillars)</b> and bees are spared; the chemical pesticide acts <b>broad-spectrum</b> on the nervous system of many insects, so it killed the bees as well.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Biological control of pests aims to:',
        opts: [
          {
            label: 'completely eradicate the pest species from the field',
            nudge: '<b>(a)</b> this is the eradication mindset: biocontrol deliberately tolerates a low pest level.',
          },
          { label: 'keep the pest at a manageable level through natural checks and balances', nudge: null },
          { label: 'replace all insects with chemical-resistant varieties', nudge: '<b>(c)</b> confuses biocontrol with breeding/biotech.' },
          { label: 'increase the pest population to feed predators', nudge: '<b>(d)</b> absurd inversion: you do not boost pests.' },
        ],
        correct: 1,
        solution: 'Biocontrol manages, it does not annihilate.',
      },
      {
        t: 'mcq',
        q: 'The group made up only of biocontrol agents is:',
        opts: [
          {
            label: '<i>Rhizobium</i>, <i>Glomus</i>, <i>Anabaena</i>',
            nudge: '<b>(a)</b> and <b>(c)</b> are <b>biofertilisers</b> (N and P), not biocontrol: the usual swap.',
          },
          { label: '<i>Trichoderma</i>, Baculovirus, <i>Bacillus thuringiensis</i>', nudge: null },
          {
            label: '<i>Azotobacter</i>, <i>Nostoc</i>, <i>Azospirillum</i>',
            nudge: '<b>(a)</b> and <b>(c)</b> are <b>biofertilisers</b> (N and P), not biocontrol: the usual swap.',
          },
          {
            label: '<i>Lactobacillus</i>, <i>Saccharomyces</i>, <i>Propionibacterium</i>',
            nudge: '<b>(d)</b> are <b>food/household</b> microbes (curd, bread, cheese) from Topic 01.',
          },
        ],
        correct: 1,
        solution: 'A fungus, a virus, and a bacterium all used to control pests/pathogens.',
      },
      {
        t: 'mcq',
        q: 'Which statement about mycorrhiza is INCORRECT?',
        opts: [
          { label: 'It is a symbiotic association of a fungus with plant roots', nudge: '(a), (c), (d) are all true.' },
          { label: 'It chiefly improves nitrogen fixation in the host', nudge: null },
          { label: 'It improves the plant’s tolerance to drought and salinity', nudge: '(a), (c), (d) are all true.' },
          { label: 'Genus <i>Glomus</i> is a common mycorrhizal partner', nudge: '(a), (c), (d) are all true.' },
        ],
        correct: 1,
        solution: 'Mycorrhiza chiefly supplies <b>phosphorus</b>, not nitrogen. The stem asks for the incorrect one: students who skim and stop at the first true line lose the mark.',
      },
      {
        t: 'mcq',
        q: 'Why is the Bt protoxin harmless until it is eaten by a susceptible insect larva?',
        opts: [
          { label: 'It is destroyed instantly by sunlight before ingestion', nudge: '<b>(a)</b> sunlight lowers field efficacy over time but does not destroy the protoxin instantly, and it is not what switches it on.' },
          { label: 'It requires the alkaline pH of the insect gut to become an active toxin', nudge: null },
          {
            label: 'It only works in the acidic stomach of mammals',
            nudge: '<b>(c)</b> reverses the chemistry: mammalian stomachs are acidic, and Bt does not target them.',
          },
          {
            label: 'It must be combined with a chemical pesticide to activate',
            nudge: '<b>(d)</b> contradicts the entire point of a stand-alone biocontrol agent.',
          },
        ],
        correct: 1,
        solution: 'Activation is conditional on the larva’s <b>alkaline gut</b>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1: Nitrogen/phosphorus mix-up.</b> Writing “<i>Glomus</i> fixes nitrogen” is a very common error (the book’s view, not a counted figure). <b>Bacteria/cyanobacteria → nitrogen; <i>Glomus</i>/mycorrhiza (fungus) → phosphorus.</b>',
          '<b>Pitfall 2: Symbiotic vs free-living.</b> <i>Rhizobium</i> needs a <b>legume host</b> (symbiotic); <i>Azotobacter</i> and <i>Azospirillum</i> are <b>free-living</b>. Pair questions can hinge on this exact distinction.',
          '<b>Pitfall 3: Crediting <i>Azolla</i> instead of its symbiont.</b> <i>Azolla</i> is the fern; the actual nitrogen-fixer is the cyanobacterium <b><i>Anabaena azollae</i></b> living in its leaf cavities.',
          '<b>Pitfall 4: “Biocontrol = total kill.”</b> It does not eradicate; it keeps pests at a <b>manageable level</b>. And <i>Trichoderma</i> fights <b>fungi</b>, not insects: a commonly mis-paired agent.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> In any match-the-column or “odd one out”, first sort each organism into one of <b>three buckets: BIOCONTROL (Bt, <i>Trichoderma</i>, Baculovirus, ladybird) · N-FIXER (<i>Rhizobium</i>, <i>Azotobacter</i>, <i>Azospirillum</i>, <i>Anabaena</i>, <i>Nostoc</i>) · P-SUPPLIER (<i>Glomus</i>/mycorrhiza).</b> Deciding the bucket eliminates two or three options before you finish reading.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Biocontrol = living pest control</b> (replaces chemical pesticides); aim = <b>manage, not eradicate</b>, via natural checks and balances.', note: '' },
          {
            f: '<b>Bt (<i>Bacillus thuringiensis</i>)</b>',
            note: 'dried spores → eaten by larva → <b>alkaline gut activates protoxin</b> → toxin → gut cells lyse → caterpillar dies; most non-target insects spared. Genes = <i>cry</i> (some also in Bt cotton).',
          },
          {
            f: '<i>Trichoderma</i> (fungus) → controls <b>fungal</b> plant pathogens. <b>Baculovirus (<i>Nucleopolyhedrovirus</i>) → species-specific, narrow-spectrum</b> viral insecticide; ideal for <b>IPM</b>.',
            note: '',
          },
          { f: '<b>Biofertiliser = living soil enricher</b> (replaces chemical fertilisers); part of <b>organic farming</b>.', note: '' },
          {
            f: '<b>Nitrogen-fixers</b>',
            note: '<i>Rhizobium</i> (symbiotic, legume nodules); <i>Azotobacter</i>, <i>Azospirillum</i> (free-living); cyanobacteria <i>Anabaena</i>/<i>Nostoc</i>/<i>Oscillatoria</i> (paddy); <i>Azolla</i> + <b><i>Anabaena azollae</i></b>.',
          },
          {
            f: '<b>Phosphorus supplier</b>',
            note: 'mycorrhiza, genus <b><i>Glomus</i></b> (also gives drought/salinity tolerance + root-pathogen resistance).',
          },
        ],
        aids: [
          '“<b>N from the bugs, P from the fungus</b>”: bacteria/cyanobacteria fix Nitrogen; the fungus <i>Glomus</i> gives Phosphorus.',
          '“<b><i>Rhizobium</i> Rests in Roots</b>” = symbiotic (needs a host); <i>Azoto</i>/<i>Azospirillum</i> are <b>Adrift</b> = free-living.',
          '<b>Bt = “Alkaline gut, then kaput.”</b>',
        ],
      },
    ],
  },
];
