import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 11 (Photosynthesis in Higher Plants), Topics 01 and 02:
 * pp. 643 to 662 of the Class 11 Biology Master Reference, word for word. The
 * chapter title page (p. 642) and the contents box at the top of p. 643 are not
 * copied. Topic 01, Foundations, Early Experiments & Photosynthetic Pigments
 * (pp. 643–652), and Topic 02, Light Reaction & Photophosphorylation
 * (pp. 653–662), are each cut at the book’s Sections 1 to 8. Figures 11.1 and
 * 11.2 (captions p. 645, drawn p. 646), 11.3 (caption p. 647, drawn p. 648),
 * 11.4 (caption p. 654, drawn p. 655) and 11.5 (caption p. 656, drawn p. 657)
 * are redrawn in lib/diagrams/biology-11-11.ts; these pages draw nothing else.
 * Scientific names are italic as the book prints them (Cladophora); emphasis
 * italics are dropped. The book’s MCQ options are lettered (a) to (d): kept.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 643–652 ─────────────────────────
  {
    n: '01',
    title: 'Foundations, Early Experiments & Photosynthetic Pigments',
    kalam: 'Photosynthesis is, in fact, the most important anabolic (building-up) process on the planet.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The chapter’s opening, and a high-yield source of easy marks. NEET and CUET love <b>scientist–contribution matching</b> (Priestley, Ingenhousz, Engelmann, van Niel), the <b>pigment colours/chromatography order</b>, and the <b>absorption-vs-action spectrum</b> distinction. CBSE Boards favour the overall equation or the half-leaf experiment. The “O<sub>2</sub> comes from water, not CO<sub>2</sub>” point (van Niel) is a classic assertion–reason trap.',
      },
      {
        t: 'p',
        html: 'Every samosa you eat, every litre of petrol burnt in a bus, every breath of oxygen you take: trace it back far enough and you arrive at a green leaf quietly doing photosynthesis. Plants are <b>autotrophs</b>: unlike us, they don’t eat: they manufacture their own food from three almost-free ingredients (carbon dioxide from the air, water from the soil, and sunlight) using the green pigment <b>chlorophyll</b>. In doing so they perform the single most important chemical job on Earth: capturing the Sun’s energy into food, releasing the oxygen we breathe, and locking atmospheric carbon into sugar.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> a leaf is the original “Make in India” factory. Raw materials (CO<sub>2</sub> + H<sub>2</sub>O) arrive for free, the Sun is the unpaid power supply, chlorophyll is the machinery, and the finished product is glucose, with oxygen released as a clean by-product out the chimney. Animals, fungi, and even non-green plant parts are all customers of this factory; they cannot run it themselves.',
      },
      {
        t: 'p',
        html: 'Photosynthesis is, in fact, the <b>most important anabolic (building-up) process on the planet</b>. Almost every food chain begins with it (the energy in a tiger ultimately traces back to grass that photosynthesised) and even the coal, oil and natural gas we burn are sunlight captured by photosynthetic organisms (land plants, and algae and plankton) millions of years ago. Strip photosynthesis away and nearly all life would soon lose its food and oxygen.',
      },
      {
        t: 'p',
        html: 'Where does the factory sit? Chiefly in the <b>mesophyll cells of green leaves</b>, which are packed with chloroplasts, though any green part (a young stem, a green fruit) can do a little. A classic schoolroom demonstration, the <b>half-leaf experiment</b>, proves what the factory needs: cover part of a leaf so light cannot reach it (or seal part of it in a tube with KOH to absorb CO<sub>2</sub>), leave it in sunlight, then test the whole leaf with iodine. Only the part that received light (or CO<sub>2</sub>) turns blue-black, proof that it made starch; a variegated leaf shows that <b>chlorophyll</b> is essential too. Water is the fourth requirement but is not tested here.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way (the two shifts)…</b> the factory runs in two shifts. The <b>light (photochemical) phase</b> captures sunlight and banks energy as ATP and NADPH; the <b>biosynthetic phase</b> then spends that energy to build sugar. The second shift is loosely called the “dark reaction,” but that name is misleading: it doesn’t need darkness, it simply doesn’t use light directly. (The machinery of both shifts is the subject of the next topics; here we lay the groundwork.)',
      },
      {
        t: 'p',
        html: 'One beautiful subtlety worth flagging early: the oxygen a plant releases does <b>not</b> come from the CO<sub>2</sub> it breathes in; it comes from the <b>water</b> it splits. That single insight took decades of clever experiments to establish, which is exactly where we turn next.',
      },
      { t: 'p', html: '<b>Limiting conditions & assumptions.</b>' },
      {
        t: 'p',
        html: '• Photosynthesis needs <b>all four</b> of chlorophyll, light, CO<sub>2</sub> and water; remove any one and it stops: non-green tissues simply can’t do it.<br>• “Autotroph” here means photoautotroph; a few bacteria are autotrophs by other means and don’t release oxygen.<br>• The overall equation is a net summary: it hides the dozens of real steps inside.',
      },

      { t: 'part', title: 'Key definitions, structures and pathways' },
      {
        t: 'p',
        html: '<b>The overall equation of photosynthesis</b> (the net summary every student must know):<br>6 CO<sub>2</sub> + 12 H<sub>2</sub>O →<sup>light, chlorophyll</sup> C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> + 6 H<sub>2</sub>O<br>Read it carefully: <b>12</b> water molecules go in and <b>6</b> come out, written this way precisely because the <b>released O<sub>2</sub> originates from the water</b>, not from CO<sub>2</sub>. Glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) is the representative carbohydrate product.',
      },
      {
        t: 'def',
        term: 'Autotroph / photoautotroph',
        html: 'an organism that synthesises its own organic food from inorganic raw materials using light. Green plants, algae and cyanobacteria are photoautotrophs. Some bacteria (e.g. <b>green and purple sulphur bacteria</b>) are photoautotrophs too, but they use <b>H<sub>2</sub>S</b> instead of water and therefore liberate <b>sulphur, not oxygen</b>, a key exception.',
      },
      {
        t: 'p',
        html: '<b>The photosynthetic pigments.</b> Leaf pigments can be separated on a strip by <b>paper chromatography</b>, which resolves them into four bands. With their characteristic colours, in the order NCERT lists them (not the order of the bands on the strip):',
      },
      {
        t: 'table',
        title: null,
        head: ['Pigment', 'Colour on the chromatogram'],
        rows: [
          ['Chlorophyll a', 'bright or blue-green'],
          ['Chlorophyll b', 'yellow-green'],
          ['Xanthophylls', 'yellow'],
          ['Carotenoids (carotenes)', 'yellow to yellow-orange'],
        ],
      },
      {
        t: 'p',
        html: '• <b>Chief pigment: chlorophyll a</b>, the pigment at the reaction centre of both photosystems; the accessory pigments pass their energy to it.<br>• <b>Accessory pigments:</b> chlorophyll b, xanthophylls and carotenoids. Their three jobs: (i) <b>widen the range</b> of wavelengths the plant can harvest, (ii) <b>funnel</b> that absorbed energy to chlorophyll a, and (iii) <b>protect</b> chlorophyll a from photo-oxidation (sun damage). (How these pigments are organised into photosystems is covered in the Light-Reaction topic.)',
      },
      { t: 'p', html: '<b>Absorption spectrum vs action spectrum</b> (students mix these up constantly):' },
      {
        t: 'p',
        html: '• <b>Absorption spectrum:</b> a graph of how much light a pigment absorbs at each wavelength. Chlorophyll a absorbs most strongly in the <b>blue (~430 nm)</b> and <b>red (~660 nm)</b> regions, and least in green, which is why leaves look green (green light is reflected).<br>• <b>Action spectrum:</b> a graph of how fast photosynthesis itself proceeds at each wavelength. Its peaks line up closely with chlorophyll a’s absorption peaks, confirming that <b>chlorophyll a is the main pigment</b> responsible. Blue and red light are most effective; green is least.',
      },
      { t: 'fig', id: 'b11-11-fig-11.1' },

      { t: 'part', title: 'Key experiments and procedures' },
      { t: 'p', html: '(This part presents the landmark experiments in historical order.)' },
      {
        t: 'p',
        html: '<b>1. Joseph Priestley (1770s): plants restore “used” air.</b> Priestley placed a burning candle inside a sealed bell jar; the flame soon went out (the air was “spoiled”). A mouse placed in such air suffocated. But when he kept a <b>sprig of mint</b> in the jar for a few days, the air was restored: a candle would burn again and a mouse could live.',
      },
      { t: 'fig', id: 'b11-11-fig-11.2' },
      {
        t: 'p',
        html: 'His conclusion: <b>plants restore to the air whatever breathing animals and burning candles remove</b>, the first hint that plants release oxygen. (Priestley didn’t yet know it required light.)',
      },
      {
        t: 'p',
        html: '<b>2. Jan Ingenhousz: light and green parts are essential.</b> Ingenhousz showed Priestley’s effect works <b>only in sunlight</b>, and only the <b>green parts</b> of a plant do it. He observed tiny <b>oxygen bubbles</b> forming around the green portions of a submerged plant in the light, but not in the dark or around non-green parts.',
      },
      {
        t: 'p',
        html: '<b>3. Julius von Sachs (1854): the product is glucose, stored as starch.</b> Sachs demonstrated that the green parts of a plant produce <b>glucose</b>, and that glucose is usually stored as <b>starch</b> within the chloroplasts of those green cells. This was a major step: it pinned the food-making down to the green, chloroplast-containing tissue and identified the actual product. It is also the basis of the <b>iodine starch test</b>: a leaf region that has photosynthesised turns blue-black with iodine, while a region kept in the dark or starved of CO<sub>2</sub> does not. The <b>half-leaf experiment</b> uses exactly this test and proves that <b>CO<sub>2</sub> is essential</b> for photosynthesis.',
      },
      {
        t: 'p',
        html: '<b>4. T. W. Engelmann: the first action spectrum.</b> Engelmann took the filamentous green alga <b><i>Cladophora</i></b>, split a beam of light into its colours with a <b>prism</b>, and laid the spectrum across the alga. He then added <b>aerobic bacteria</b> (which gather wherever O<sub>2</sub> is most abundant) and watched where they crowded. The bacteria accumulated mainly in the <b>blue and red</b> regions of the spectrum, exactly where photosynthesis, and thus O<sub>2</sub> release, was greatest. Because aerobic bacteria swim toward the highest oxygen concentration, they acted as living oxygen-detectors, marking the wavelengths that drove the most photosynthesis. This gave the <b>first action spectrum of photosynthesis.</b>',
      },
      { t: 'fig', id: 'b11-11-fig-11.3' },
      {
        t: 'p',
        html: '<b>5. Cornelius van Niel: oxygen comes from water.</b> Studying photosynthetic <b>sulphur bacteria</b> (which use H<sub>2</sub>S and deposit sulphur instead of releasing O<sub>2</sub>), van Niel reasoned by analogy and proposed the first hypothesis that, in green plants, the <b>O<sub>2</sub> released is derived from water</b>, not CO<sub>2</sub>. He generalised photosynthesis as a light-driven splitting of a hydrogen donor (H<sub>2</sub>A):<br>2 H<sub>2</sub>A + CO<sub>2</sub> →<sup>light</sup> 2 A + CH<sub>2</sub>O + H<sub>2</sub>O<br>For green plants the donor H<sub>2</sub>A is <b>water (H<sub>2</sub>O)</b>, so A is oxygen, neatly explaining why O<sub>2</sub> is the by-product. (Later isotope experiments confirmed him.)',
      },
      {
        t: 'p',
        html: '<b>Procedure: separating pigments by paper chromatography.</b> Grind leaf tissue in a solvent to extract the pigments; spot the extract near one end of a chromatography paper strip; dip the end in solvent. As the solvent climbs, the pigments travel at <b>different rates</b> by solubility and adsorption, separating into the four coloured bands listed in the Key definitions, structures and pathways part: chlorophyll a, chlorophyll b, xanthophylls and carotenoids. Reading the strip tells you which pigments a leaf contains.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Write the overall balanced equation of photosynthesis and state the source of the oxygen released.',
        steps: [
          '<b>Answer.</b><br>6 CO<sub>2</sub> + 12 H<sub>2</sub>O →<sup>light, chlorophyll</sup> C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> + 6 H<sub>2</sub>O',
          'The oxygen released comes from <b>water</b> (which is why 12 H<sub>2</sub>O appear as reactants and 6 H<sub>2</sub>O as products), not from carbon dioxide, first proposed by van Niel.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Match the scientist with the contribution and pick the correct set: Priestley, Ingenhousz, Engelmann, van Niel, with (P) O<sub>2</sub> comes from water, (Q) restored “used” air, (R) first action spectrum, (S) light & green parts essential.',
        steps: [
          '<b>Reasoning.</b> Anchor the two most distinctive: <b>Engelmann = action spectrum (R)</b> and <b>van Niel = O<sub>2</sub> from water (P)</b>; these never move. That leaves Priestley and Ingenhousz for Q and S; Priestley’s bell-jar = “restored air (Q)”, Ingenhousz added the “light + green parts (S)” refinement.',
          '<b>Speed tip:</b> lock the two unique pairings first; the rest fall out by elimination.',
        ],
        ans: 'Priestley–Q, Ingenhousz–S, Engelmann–R, van Niel–P.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: 'On a chromatogram, arrange the four leaf pigments and give the colour of the topmost-travelling, least-polar pigment.',
        steps: [
          '<b>Reasoning.</b> The four pigments are chlorophyll a (bright/blue-green), chlorophyll b (yellow-green), xanthophylls (yellow) and carotenoids (yellow to yellow-orange). The carotenoids (carotenes) are least polar and most soluble in the running solvent, so they travel farthest; their colour is <b>yellow to yellow-orange</b>.',
        ],
        ans: 'carotenoids, yellow-orange.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: 'Assertion (A): In green plants, the oxygen evolved during photosynthesis comes from water. Reason (R): Photosynthetic sulphur bacteria use H<sub>2</sub>S instead of H<sub>2</sub>O and release sulphur rather than oxygen. Options: <b>(a)</b> both true, R explains A; <b>(b)</b> both true, R does not explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          'Both are true; R is the evidence (by analogy) that led van Niel to A, so (a). van Niel’s whole argument was the analogy: if sulphur bacteria split H<sub>2</sub>S and deposit <b>S</b>, then green plants splitting <b>H<sub>2</sub>O</b> must release <b>O<sub>2</sub></b>, establishing water as the oxygen source. The bacterial behaviour (R) is precisely the evidence that led to A.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Describe the half-leaf experiment and state what it shows is essential for photosynthesis.',
            a: 'Cover part of a leaf (light) or seal part in KOH (CO<sub>2</sub>), keep in sunlight, test with iodine: only the part that got light or CO<sub>2</sub> turns blue-black, because only it made starch, and a variegated leaf shows chlorophyll is needed too. So light, CO<sub>2</sub> and chlorophyll are each shown to be essential; water is the fourth requirement but is not tested here.',
          },
          {
            q: '[NEET] Which scientist gave the first action spectrum of photosynthesis? <b>(a)</b> Priestley <b>(b)</b> Ingenhousz <b>(c)</b> Engelmann <b>(d)</b> Calvin',
            a: '<b>(c)</b> Engelmann.',
          },
          {
            q: '[CUET] Name the chief photosynthetic pigment and list the three accessory pigments separable by chromatography.',
            a: 'Chief = <b>chlorophyll a</b>; accessory = <b>chlorophyll b, xanthophylls, carotenoids</b>.',
          },
          {
            q: '[NEET] Photoautotrophic sulphur bacteria release ______ instead of oxygen, because they use ______ as the hydrogen donor. <b>(a)</b> CO<sub>2</sub>; H<sub>2</sub>O <b>(b)</b> sulphur; H<sub>2</sub>S <b>(c)</b> oxygen; CO<sub>2</sub> <b>(d)</b> hydrogen; H<sub>2</sub>S',
            a: '<b>(b)</b>.',
          },
          {
            q: '[NEET High-Difficulty] Assertion: Leaves appear green. Reason: Chlorophyll a absorbs most strongly in the green region of the spectrum. Choose: <b>(a)</b> both true, R explains A <b>(b)</b> both true, R unrelated <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
            a: '<b>(c)</b>. A is true but R is false: chlorophyll a absorbs blue and red and reflects green, which is why leaves look green.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The oxygen liberated during photosynthesis in green plants comes from:',
        opts: [
          {
            label: 'CO<sub>2</sub>',
            nudge:
              '<b>(a)</b> CO<sub>2</sub>: the classic misconception; the carbon and oxygen of CO<sub>2</sub> end up in glucose and water, while the released O<sub>2</sub> comes from the splitting of water.',
          },
          {
            label: 'glucose',
            nudge: '<b>(b)</b> glucose: glucose is a product, not a source of the released O<sub>2</sub>.',
          },
          { label: 'water', nudge: null },
          {
            label: 'chlorophyll',
            nudge: '<b>(d)</b> chlorophyll: a pigment/catalyst, not consumed into O<sub>2</sub>.',
          },
        ],
        correct: 2,
        solution: 'van Niel established that O<sub>2</sub> originates from the <b>photolysis of water</b>.',
      },
      {
        t: 'mcq',
        q: 'In Engelmann’s experiment, aerobic bacteria accumulated mainly in the regions of the spectrum corresponding to:',
        opts: [
          {
            label: 'green and yellow light',
            nudge:
              '<b>(a)/(c)</b> green light is least effective; bacteria are sparse there, a trap for students who forget leaves reflect green.',
          },
          { label: 'blue and red light', nudge: null },
          {
            label: 'only green light',
            nudge:
              '<b>(a)/(c)</b> green light is least effective; bacteria are sparse there, a trap for students who forget leaves reflect green.',
          },
          {
            label: 'infrared',
            nudge: '<b>(d)</b> infrared is not used in the visible action spectrum.',
          },
        ],
        correct: 1,
        solution: 'Bacteria gathered where O<sub>2</sub> release (hence photosynthesis) peaked, the <b>blue and red</b> bands.',
      },
      {
        t: 'mcq',
        q: 'Which sequence correctly lists leaf pigments by the colour of their chromatogram bands?',
        opts: [
          { label: 'chl a – yellow; chl b – blue-green; xanthophyll – orange', nudge: null },
          { label: 'chl a – blue-green; chl b – yellow-green; xanthophyll – yellow', nudge: null },
          { label: 'chl a – yellow-orange; carotenoid – blue-green', nudge: null },
          { label: 'chl b – orange; xanthophyll – blue-green', nudge: null },
        ],
        correct: 1,
        solution:
          'Chlorophyll a is bright/blue-green, chlorophyll b yellow-green, xanthophylls yellow. The other options scramble the colours, typically by swapping chlorophyll a’s blue-green with a carotenoid’s yellow-orange.',
      },
      {
        t: 'mcq',
        q: 'Priestley’s bell-jar experiment primarily demonstrated that:',
        opts: [
          {
            label: 'light is essential for photosynthesis',
            nudge: '<b>(a)</b> Ingenhousz, not Priestley, showed the light requirement.',
          },
          { label: 'plants restore the air spoiled by burning or breathing', nudge: null },
          { label: 'oxygen comes from water', nudge: '<b>(c)</b> van Niel.' },
          { label: 'glucose is stored as starch', nudge: '<b>(d)</b> Sachs.' },
        ],
        correct: 1,
        solution: 'A mint sprig restored air in which a candle had burnt out: <b>plants renew “used” air.</b>',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Oxygen comes from CO<sub>2</sub>.”</b> It does <b>not</b>: it comes from <b>water</b>. This is a very commonly tested misconception; the 12-H<sub>2</sub>O-in / 6-H<sub>2</sub>O-out form of the equation is the giveaway.',
          '<b>Mixing up absorption and action spectra.</b> Absorption = what a pigment soaks up; action = how fast photosynthesis runs. They overlap but are different graphs.',
          '<b>Crediting the wrong scientist.</b> Keep the unique pairs straight: <b>Engelmann → action spectrum</b>, <b>van Niel → O<sub>2</sub> from water</b>, <b>Priestley → restored air</b>, <b>Ingenhousz → light + green parts</b>.',
          '<b>Thinking leaves are green because chlorophyll absorbs green.</b> The opposite: chlorophyll reflects green and absorbs blue/red.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For scientist-matching questions, pin the two most distinctive contributions first (Engelmann’s action spectrum and van Niel’s water-source), then the remaining options sort themselves out by elimination, far faster than recalling all four cold.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Photosynthesis',
            note: 'autotrophs make food from CO<sub>2</sub> + H<sub>2</sub>O using light + chlorophyll; source of Earth’s food, O<sub>2</sub> and fixed carbon.',
          },
          {
            f: 'Overall equation',
            note: '6 CO<sub>2</sub> + 12 H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> + 6 H<sub>2</sub>O. <b>O<sub>2</sub> comes from water.</b>',
          },
          {
            f: 'Scientists',
            note: 'Priestley (restored air) · Ingenhousz (light + green parts) · Sachs (glucose → starch) · Engelmann (first action spectrum, <i>Cladophora</i> + prism + bacteria) · van Niel (O<sub>2</sub> from water; 2 H<sub>2</sub>A + CO<sub>2</sub> → 2 A + CH<sub>2</sub>O + H<sub>2</sub>O).',
          },
          {
            f: 'Pigments (chromatogram)',
            note: 'chl a (blue-green, chief) · chl b (yellow-green) · xanthophylls (yellow) · carotenoids (yellow-orange). Accessory pigments widen range, funnel energy, protect chl a.',
          },
          {
            f: 'Spectra',
            note: 'absorption (pigment) and action (photosynthesis) both peak in <b>blue & red</b>; green least effective → leaves look green.',
          },
          {
            f: 'Sulphur bacteria',
            note: 'use H<sub>2</sub>S → release <b>S, not O<sub>2</sub></b>.',
          },
        ],
        aids: [
          '“<b>Pigs In Sachs’s Engine, Never CO<sub>2</sub></b>”: <b>P</b>riestley, <b>I</b>ngenhousz, <b>S</b>achs, <b>E</b>ngelmann, <b>N</b>iel (in order); “Never CO<sub>2</sub>” = O<sub>2</sub> comes from water.',
          '“<b>a-b-X-C → blue-green → yellow-green → yellow → yellow-orange</b>”: chromatogram colours of chl <b>a</b>, chl <b>b</b>, <b>X</b>anthophyll, <b>C</b>arotenoid.',
          'Reading the mnemonic: a-b-X-C is blue-green → yellow-green → yellow → yellow-orange, so the two “greens” are blue-green (chl a) then yellow-green (chl b).',
          '“<b>Blue & Red feed the plant; Green is sent back</b>”: most/least effective wavelengths.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 653–662 ─────────────────────────
  {
    n: '02',
    title: 'Light Reaction & Photophosphorylation',
    kalam: 'Think of a leaf as a tiny solar power station.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial favourite. NEET asks 1–2 questions almost every year (the book’s estimate from past papers, not official figures), leaning on the cyclic-vs-non-cyclic comparison, the Z-scheme, and which photosystem does what. CBSE Boards expect a labelled Z-scheme or a 2–3 mark “differentiate” answer. CUET keeps it factual (sites, products, pigments). The toughest NEET assertion–reason items hide here, especially “NADPH from PS I, not PS II” and “cyclic produces no oxygen.”',
      },
      {
        t: 'p',
        html: 'Think of a leaf as a tiny solar power station. Sunlight pours in for free, but a plant cannot run the machinery of life on raw light any more than your home can run directly on a lightning bolt. The light has to be converted into a steady, usable currency. In photosynthesis that conversion happens in two stages, and the <b>light reaction</b> is the first one: the part that actually captures sunlight and banks it as chemical energy. Everything the plant builds later (sugar, starch, your morning poha) is paid for using the currency minted here.',
      },
      {
        t: 'p',
        html: 'That currency comes in exactly two notes: <b>ATP</b> (energy) and <b>NADPH</b> (reducing power, i.e. a carrier loaded with high-energy electrons). The whole job of the light reaction is to print these two notes. To do it, the plant needs three raw inputs (light, water, and the pigment machinery) and it produces one famous by-product: oxygen, the air you are breathing right now.',
      },
      {
        t: 'p',
        html: 'Here is the central trick. Light by itself cannot lift an electron all the way “uphill” to make NADPH in a single jump. So plants use a clever two-stage booster, like a relay race rather than a single sprinter. <b>Photosystem II (PS II)</b> catches a photon first and kicks an electron up; that electron slides downhill through a chain of carriers (releasing energy that is banked as ATP), and then <b>Photosystem I (PS I)</b> catches a second photon and gives the same electron a second kick, high enough now to reduce NADP<sup>+</sup> to NADPH. Two photons, two boosts, one electron carried all the way from water to NADPH.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture a relay of dabbawalas on the Mumbai locals. A single runner can’t carry a heavy tiffin from Churchgate all the way to the suburbs in one go. So one dabbawala hauls it up onto the train (first energy boost = PS II), the train coasts along handing the tiffin from person to person (the electron transport chain, each hand-off doing a bit of useful work = ATP), and a second dabbawala lifts it off and up the final staircase to the kitchen (second boost = PS I, delivering to NADP<sup>+</sup>). And where does the very first electron come from? From <b>splitting water</b>: the plant tears water apart to keep feeding fresh electrons into PS II, and the leftover oxygen is simply thrown away as exhaust.',
      },
      {
        t: 'p',
        html: 'This zig-zag of “up-down-up” energy, when you plot it on an energy scale, looks like the letter <b>Z</b>, which is exactly why it’s called the <b>Z-scheme</b>.',
      },
      { t: 'p', html: '<b>Limiting conditions & assumptions.</b> A few honest caveats:' },
      {
        t: 'p',
        html: '• The light reaction needs light, full stop: switch off the lamp and it stops within moments. (The next stage, the Calvin cycle, can coast a little on stored ATP/NADPH but soon stops too.)<br>• The “oxygen is released” story is true only for <b>non-cyclic</b> flow. Plants can also run a <b>cyclic</b> mode using PS I alone: that makes extra ATP but no NADPH and no oxygen.<br>• This is plant/cyanobacterial behaviour. Some photosynthetic bacteria use a single photosystem and don’t split water, so they release no oxygen: a useful exception examiners love.',
      },

      { t: 'part', title: 'Key definitions, structures and pathways' },
      {
        t: 'p',
        html: '<b>Where it happens: chloroplast geography.</b> The light reaction is membrane-bound. Inside the chloroplast, flattened sacs called <b>thylakoids</b> stack up into coin-pile structures called <b>grana</b>; long thylakoids connecting grana are <b>stromal (intergranal) lamellae</b>. The fluid matrix around them is the <b>stroma</b>. Light reaction → on the thylakoid membranes (grana). Dark reaction (Calvin) → in the stroma.',
      },
      { t: 'fig', id: 'b11-11-fig-11.4' },
      { t: 'p', html: '<b>Pigments.</b>' },
      {
        t: 'p',
        html: '• <b>Chlorophyll a</b>, the chief pigment, the pigment at the reaction centre of both photosystems; the accessory pigments pass their energy to it. Absorbs mainly in the blue (~430 nm) and red (~660 nm) regions.<br>• <b>Accessory pigments:</b> chlorophyll b, xanthophylls and carotenoids. They (i) widen the range of wavelengths the plant can use, (ii) funnel the captured energy to chlorophyll a, and (iii) shield chlorophyll a from photo-oxidation (sun damage).',
      },
      {
        t: 'def',
        term: 'Light Harvesting Complex (LHC) / antenna',
        html: 'Hundreds of pigment molecules bound to proteins, embedded in the thylakoid membrane. They behave like a satellite dish, collecting photons over a wide area and channelling that energy inward to a single chlorophyll a molecule, the <b>reaction centre</b>.',
      },
      {
        t: 'def',
        term: 'Photosystems',
        html: 'Each photosystem = one LHC antenna + one reaction-centre chlorophyll a.<br>• <b>Photosystem II (PS II):</b> reaction centre <b>P680</b> (absorption maximum ≈ 680 nm). Does the <b>photolysis of water</b> and releases O<sub>2</sub>.<br>• <b>Photosystem I (PS I):</b> reaction centre <b>P700</b> (absorption maximum ≈ 700 nm). Hands the energised electron to NADP<sup>+</sup>, making <b>NADPH</b>.',
      },
      { t: 'p', html: '<b>The two pathways (this is the high-yield comparison):</b>' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Non-cyclic photophosphorylation', 'Cyclic photophosphorylation'],
        rows: [
          ['Photosystems used', 'PS I <b>and</b> PS II', 'PS I <b>only</b>'],
          ['Path of electron', 'Water → PS II → PS I → NADP<sup>+</sup> (open, “non-cyclic”)', 'P700 → carriers → back to P700 (closed loop)'],
          ['Water split?', 'Yes', 'No'],
          ['O<sub>2</sub> released?', '<b>Yes</b>', '<b>No</b>'],
          ['NADPH made?', '<b>Yes</b>', '<b>No</b>'],
          ['ATP made?', 'Yes', 'Yes (only product)'],
          ['Where (mainly)', 'Grana thylakoids', 'Stromal lamellae'],
        ],
      },
      {
        t: 'p',
        html: '<b>Overall light-reaction summary equation</b> (water as the electron donor):<br>2 H<sub>2</sub>O + 2 NADP<sup>+</sup> + <i>n</i> ADP + <i>n</i> P<sub>i</sub> →<sup>light, pigments</sup> 2 NADPH + 2 H<sup>+</sup> + <i>n</i> ATP + O<sub>2</sub>',
      },
      {
        t: 'p',
        html: '<b>Key term: Photophosphorylation</b> = the synthesis of ATP from ADP and inorganic phosphate using light energy. The term and the cyclic/non-cyclic distinction are credited to <b>Arnon</b>.',
      },

      { t: 'part', title: 'Key procedures and mechanisms' },
      {
        t: 'proc',
        title: 'The Z-scheme, step by step',
        steps: [
          '<b>Antenna capture.</b> Photons strike the LHC pigments of PS II; the energy is funnelled to the P680 reaction centre.',
          '<b>First boost.</b> P680 absorbs the energy, gets excited, and ejects a high-energy electron to a primary acceptor. P680 is now “electron-hungry” (oxidised).',
          '<b>Photolysis of water (refilling PS II).</b> To replace its lost electron, PS II pulls electrons from water. Water is split:<br>2 H<sub>2</sub>O ⟶ 4 H<sup>+</sup> + 4 <i>e</i><sup>−</sup> + O<sub>2</sub><br>The electrons refill P680, the protons (H<sup>+</sup>) are dumped inside the thylakoid lumen, and the oxygen is released as waste. Note the direction of supply: <b>water reduces PS II, PS II reduces PS I, PS I reduces NADP<sup>+</sup></b>, an open chain, hence non-cyclic.',
          '<b>Downhill slide = ATP.</b> The electron travels “downhill” on the redox scale through an electron transport chain (plastoquinone → a cytochrome complex → plastocyanin). The energy released along the way is used to build ATP. The carriers placed in order of redox potential are what give the scheme its zig-zag <b>Z</b> shape.',
          '<b>Second boost.</b> Plastocyanin delivers the electron to <b>P700</b> (PS I). A second photon re-excites it to a high enough energy.',
          '<b>NADPH formation.</b> From PS I the electron passes via ferredoxin to the enzyme NADP<sup>+</sup> reductase, which reduces NADP<sup>+</sup> to <b>NADPH</b> (using an H<sup>+</sup> from the stroma). The two energy notes, ATP and NADPH, are now printed.',
        ],
      },
      { t: 'fig', id: 'b11-11-fig-11.5' },
      { t: 'p', html: '<b>Cyclic photophosphorylation</b>' },
      {
        t: 'p',
        html: 'When the plant has plenty of NADPH but still needs ATP, it short-circuits the route. Working with <b>PS I alone</b>, the electron expelled from P700 travels through the carrier chain and returns to P700, a closed loop. Because water is never split, there is <b>no O<sub>2</sub> and no NADPH</b>; the loop simply spins to mint extra <b>ATP</b>. This balances the ATP ∶ NADPH ratio the cell needs, and it is the mode used by some photosynthetic bacteria that lack PS II.',
      },
      { t: 'p', html: '<b>How the membrane actually makes ATP: chemiosmosis</b>' },
      {
        t: 'p',
        html: 'The ATP isn’t made “by magic” as the electron slides down: it is made by building up a <b>proton (H<sup>+</sup>) gradient</b> across the thylakoid membrane, exactly the principle examiners call <b>chemiosmosis</b>. Three things build the gradient: two add protons to the thylakoid lumen, and one removes them from the stroma:',
      },
      {
        t: 'p',
        html: '1. <b>Water splitting</b> happens on the inner (lumen) side, releasing H<sup>+</sup> directly inside.<br>2. As electrons move through the chain, a carrier (plastoquinone) physically ferries H<sup>+</sup> from the stroma across to the lumen.<br>3. NADP<sup>+</sup> reduction removes an H<sup>+</sup> from the stroma side.',
      },
      {
        t: 'p',
        html: 'The result: lots of protons trapped inside the lumen, few outside: a steep concentration difference, like water held behind a dam. The membrane then offers exactly one gate for these protons to rush back out: the enzyme <b>ATP synthase</b> (with its F<sub>0</sub> channel embedded in the membrane and F<sub>1</sub> head facing the stroma). As protons gush through F<sub>0</sub>, the enzyme spins like a turbine in a hydroelectric dam, and that mechanical turning forces ADP + P<sub>i</sub> together into <b>ATP</b>.',
      },
      {
        t: 'p',
        html: 'This is the logic behind the classic experiment: isolated thylakoids made acidic inside (lumen ≈ pH 4) and then dropped into an alkaline bath (stroma side ≈ pH 8) <b>in the dark</b> still make ATP, because the artificial proton gradient alone, with no light at all, is enough to spin ATP synthase. Energy lives in the gradient, not in the light directly.',
      },
      {
        t: 'p',
        html: '(Depth note: why two photosystems at all?) Emerson found that photosynthesis falls off sharply beyond ~680 nm even though chlorophyll still absorbs there (the <b>Red Drop</b>), and that shining two wavelengths together produced more than the sum of each alone (the <b>Enhancement Effect</b>). The clean explanation: two cooperating photosystems, absorbing at slightly different peaks, must both be driven for full non-cyclic flow.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Differentiate cyclic and non-cyclic photophosphorylation on the basis of (a) photosystems involved, (b) evolution of oxygen, and (c) products formed.',
        steps: [
          '<b>Answer.</b> (a) <b>Photosystems:</b> Cyclic uses <b>PS I only</b>; non-cyclic uses <b>both PS I and PS II</b>. (b) <b>Oxygen:</b> Cyclic involves <b>no photolysis of water → no O<sub>2</sub></b>; non-cyclic splits water → <b>O<sub>2</sub> is evolved</b>. (c) <b>Products:</b> Cyclic forms <b>only ATP</b>; non-cyclic forms <b>ATP and NADPH</b> (plus O<sub>2</sub>).',
          '<b>Concluding line:</b> Hence non-cyclic flow is the route that supplies both energy and reducing power for the Calvin cycle, while cyclic flow tops up ATP alone.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The electrons released by the photolysis of water during non-cyclic flow ultimately end up in: <b>(a)</b> glucose <b>(b)</b> ATP <b>(c)</b> H<sub>2</sub>O <b>(d)</b> NADPH',
        steps: [
          '<b>Reasoning.</b> Don’t overthink the path. Water → PS II → PS I → <b>NADP<sup>+</sup></b>. The electron’s final resting place in the light reaction is NADPH. Glucose (a) is tempting but glucose is made later, in the Calvin cycle: that’s the trap. ATP (b) is energised by the electron’s journey, not its destination. H<sub>2</sub>O (c) is the source, not the sink.',
          '<b>Speed tip:</b> “Light reaction’s electron always dies in NADPH; carbon’s electron later dies in sugar.”',
        ],
        ans: '(d).',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: 'Which statement about non-cyclic photophosphorylation is INCORRECT? <b>(a)</b> Water is oxidised in PS II but not in PS I. <b>(b)</b> Photons are needed to activate both PS I and PS II. <b>(c)</b> Photolysis of water and formation of ATP + NADPH occur. <b>(d)</b> Production of NADPH is associated with PS II, not PS I.',
        steps: [
          '<b>Reasoning.</b> (a), (b), (c) are all textbook-true. (d) reverses the roles: <b>NADPH is produced at PS I</b>, not PS II (PS II’s job is water-splitting).',
        ],
        ans: '(d), it is the incorrect statement.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Application',
        q: 'In a field, a weedicide is sprayed that blocks electron transport from PS II to PS I. Predict the consequence for the light reaction, and explain.',
        steps: [
          '<b>Answer.</b> Blocking the PS II → PS I link breaks the open electron path. Two things fail at once:',
          '• <b>ATP lost or sharply reduced:</b> without electrons sliding down the carriers, little proton gradient is built across that stretch, so the ATP made by the non-cyclic chain is lost or sharply reduced (some ATP may still come from cyclic flow around PS I).<br>• <b>No NADP<sup>+</sup> reduction:</b> No NADPH is made because electrons never reach PS I. With NADPH missing, the Calvin cycle halts, starved of its reducing power, and carbon fixation stops; the plant effectively cannot photosynthesise; together with the light damage that the blocked chain causes, this is how such herbicides kill weeds. (This is the mechanism of DCMU-type inhibitors, which clamp the PS II acceptor side.)',
          'Hence NADP<sup>+</sup> reduction fails and chain-linked ATP synthesis is lost or sharply reduced.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the reaction-centre pigments of PS I and PS II and state the absorption maximum each is named after.',
            a: 'PS I → <b>P700</b> (≈ 700 nm), PS II → <b>P680</b> (≈ 680 nm).',
          },
          {
            q: '[NEET] Which event is common to both cyclic and non-cyclic photophosphorylation? <b>(a)</b> involvement of both PS I and PS II <b>(b)</b> formation of ATP <b>(c)</b> release of O<sub>2</sub> <b>(d)</b> formation of NADPH',
            a: '<b>(b)</b>.',
          },
          {
            q: '[CUET] State the precise site of the light reaction within the chloroplast, and the site of the Calvin cycle.',
            a: 'Light reaction → <b>thylakoid membranes / grana</b>; Calvin cycle → <b>stroma</b>.',
          },
          {
            q: '[NEET] Assertion: Cyclic photophosphorylation produces no oxygen. Reason: It does not involve photolysis of water. Choose: <b>(a)</b> both true, R explains A <b>(b)</b> both true, R does not explain A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
            a: '<b>(a)</b>.',
          },
          {
            q: '[NEET High-Difficulty] Isolated thylakoids are acidified internally to pH 4, then transferred to a pH 8 medium and kept in the dark. Predict whether ATP forms and justify in one line.',
            a: '<b>Yes, ATP forms</b>: the artificial H<sup>+</sup> gradient drives ATP synthase by chemiosmosis, no light needed.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'During the light reaction, which one of the following directly reduces NADP<sup>+</sup> to NADPH?',
        opts: [
          {
            label: 'Photosystem II',
            nudge:
              '<b>(a)</b> PS II: trap: students who remember “PS II is first” wrongly assume it does everything; PS II splits water and passes electrons on; it does not reduce NADP<sup>+</sup>.',
          },
          { label: 'Photosystem I', nudge: null },
          {
            label: 'Plastoquinone',
            nudge:
              '<b>(c)</b> Plastoquinone: a mid-chain carrier between the photosystems; it shuttles electrons/protons but never touches NADP<sup>+</sup>.',
          },
          {
            label: 'Water',
            nudge: '<b>(d)</b> Water: the electron source, not the reducer of NADP<sup>+</sup>.',
          },
        ],
        correct: 1,
        solution: 'NADP<sup>+</sup> reduction is the terminal step of PS I (via ferredoxin and NADP<sup>+</sup> reductase).',
      },
      {
        t: 'mcq',
        q: 'In the Z-scheme, the overall movement of electrons (excluding the two photon-driven jumps) is best described as:',
        opts: [
          {
            label: 'uphill on the redox-potential scale',
            nudge:
              '<b>(a)</b> “uphill”: describes only the two instantaneous photon kicks, not the overall slide; a classic reversed-direction trap.',
          },
          { label: 'downhill on the redox-potential scale', nudge: null },
          {
            label: 'horizontal, no energy change',
            nudge: '<b>(c)</b> horizontal: would mean no energy released, contradicting ATP formation.',
          },
          {
            label: 'random',
            nudge: '<b>(d)</b> random: carriers are arranged in a fixed redox sequence; nothing random about it.',
          },
        ],
        correct: 1,
        solution:
          'Between the two light-driven boosts, electrons flow downhill (to more positive redox potential), releasing energy that powers ATP synthesis.',
      },
      {
        t: 'mcq',
        q: 'Which set correctly matches a scientist with a contribution to photosynthesis?',
        opts: [
          {
            label: 'Priestley: plants restore spoiled air',
            nudge:
              'Picking any single option (a/b/c) is the trap of stopping at the first true statement: all three are individually correct, so the combined answer wins.',
          },
          {
            label: 'Ingenhousz: green parts release O<sub>2</sub> in light',
            nudge:
              'Picking any single option (a/b/c) is the trap of stopping at the first true statement: all three are individually correct, so the combined answer wins.',
          },
          {
            label: 'Sachs: glucose stored as starch in green parts',
            nudge:
              'Picking any single option (a/b/c) is the trap of stopping at the first true statement: all three are individually correct, so the combined answer wins.',
          },
          { label: 'All of the above', nudge: null },
        ],
        correct: 3,
        solution:
          'Priestley showed plants restore “spent” air; Ingenhousz showed only green parts release O<sub>2</sub> and only in light; Sachs showed glucose is made and stored as starch in green tissue.',
      },
      {
        t: 'mcq',
        q: 'Cyclic photophosphorylation differs from non-cyclic in that it:',
        opts: [
          {
            label: 'produces NADPH but no ATP',
            nudge: '<b>(a)</b> reverses the products: cyclic makes ATP, not NADPH.',
          },
          { label: 'produces ATP but no NADPH and no O<sub>2</sub>', nudge: null },
          {
            label: 'splits water',
            nudge: '<b>(c)</b> splitting water is exclusive to PS II / non-cyclic flow.',
          },
          {
            label: 'requires both photosystems',
            nudge: '<b>(d)</b> “both photosystems” describes non-cyclic; cyclic is PS I alone.',
          },
        ],
        correct: 1,
        solution: 'Cyclic flow loops electrons through PS I only, minting ATP without making NADPH or O<sub>2</sub>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Swapping the photosystem jobs.</b> A very commonly tested confusion: PS II splits water; PS I reduces NADP<sup>+</sup>. Students reverse it because PS I “sounds first.” Remember by <b>number-vs-order</b>: PS II acts first in the electron’s journey even though it carries the higher number.',
          '<b>Saying cyclic flow makes oxygen.</b> No water is split in cyclic flow, so <b>no O<sub>2</sub> and no NADPH</b>, only ATP. Examiners often plant this in assertion–reason questions.',
          '<b>Confusing absorption spectrum with action spectrum.</b> Absorption spectrum = how much light a pigment (chlorophyll a) soaks up; action spectrum = how fast photosynthesis actually runs at each wavelength. They overlap but are not the same graph.',
          '<b>Locating the dark reaction wrongly.</b> Light reaction is on the <b>thylakoid membrane</b>; the Calvin cycle is in the <b>stroma</b>. Don’t put carbon fixation “in the grana.”',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any “what does each photosystem do” question, lock in one anchor line and derive the rest: <b>“Water → II → I → NADP<sup>+</sup>.”</b> It instantly tells you PS II handles water/O<sub>2</sub>, PS I handles NADPH, and the flow is non-cyclic (open-ended). If a question removes PS II, you’re automatically in cyclic, ATP-only territory.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Light reaction site',
            note: 'thylakoid membrane (grana). Products banked: <b>ATP + NADPH</b>, by-product <b>O<sub>2</sub></b>.',
          },
          {
            f: 'Photosystems',
            note: 'PS II = <b>P680</b>, splits water, releases O<sub>2</sub>. PS I = <b>P700</b>, makes <b>NADPH</b>. Electron route: <b>H<sub>2</sub>O → PS II → PS I → NADP<sup>+</sup></b>.',
          },
          {
            f: 'Z-scheme',
            note: 'up (photon) → down (ETC, makes ATP) → up (photon) → down to NADPH. Zig-zag on the redox-potential scale.',
          },
          {
            f: 'Photophosphorylation (Arnon)',
            note: '<b>non-cyclic</b> = both PS, water split, O<sub>2</sub> + ATP + NADPH; <b>cyclic</b> = PS I only, loop, <b>ATP only</b>, no O<sub>2</sub>, no NADPH.',
          },
          {
            f: 'Chemiosmosis',
            note: 'H<sup>+</sup> piled into the lumen (water-splitting + carrier shuttle) and stromal H<sup>+</sup> used up in NADP<sup>+</sup> reduction → rush back through <b>ATP synthase (F<sub>0</sub>–F<sub>1</sub>)</b> → ATP. Gradient = the real energy store (works even in the dark).',
          },
          {
            f: 'Photolysis of water',
            note: '2 H<sub>2</sub>O → 4 H<sup>+</sup> + 4 <i>e</i><sup>−</sup> + O<sub>2</sub>',
          },
        ],
        aids: [
          '“<b>Water → II → I → NADP</b>”: fixes both the order and every photosystem’s job.',
          '“<b>Cyclic = Coin-only</b>”: cyclic flow makes only ATP (the coin), no NADPH, no oxygen.',
          '“<b>Two-Eighty splits, Seven-Hundred ships</b>”: P<b>680</b> splits water; P<b>700</b> ships electrons to NADPH.',
        ],
      },
    ],
  },
];
