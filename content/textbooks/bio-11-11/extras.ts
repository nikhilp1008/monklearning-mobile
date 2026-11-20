import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 11, Photosynthesis in Higher Plants: the Additional topics, word for word
 * from the Class 11 Biology Master Reference (book pp. 681 to 705).
 *
 * p. 681 opens "Chapter 11: Photosynthesis in Higher Plants, Additional Topics": its one
 * paragraph (before "Addendum A") is the first paragraph of Additional topic A's Introduction.
 * A "ATP and NADPH Stoichiometry: The Quantitative Calvin Cycle" (pp. 681 to 683),
 * B "The C4 Pathway in Detail: Shuttles, CAM, and Why C4 Is Not One Thing" (pp. 683 to 686),
 * C "Photorespiration: The Three-Organelle Journey and Its Cost" (pp. 686 to 688),
 * D "C3, C4, and CAM: A Systematic Comparison with Environmental Context" (pp. 688 to 690),
 * E "The Hill Reaction: Light, Water, and an Electron Acceptor" (pp. 690 to 692),
 * F "Blackman’s Law in Application: Compensation Points, Limiting-Factor Graphs, and Field
 * Scenarios" (pp. 692 to 695), G "Summary Cheat Sheet: Addendum" (p. 695, the book's
 * "Summary Cheat Sheet — Addendum", its own Additional topic) and H "What NEET Actually Asks"
 * (the book's "Addendum P", p. 695 to p. 705). p. 706 is the next chapter.
 *
 * The book prints no drawing in these pages (no raster image, no figure; the only
 * non-text strokes are table rules, page rules and the page foot), so no figure block is used.
 *
 * Each addendum prints its answers in one block after its practice questions; each is set
 * here as that question's answer. A worked example whose "Answer." is a paragraph of prose
 * has no separate result line: the paragraph is `ans` and `steps` is empty. The book's
 * "Example A.1 - [NEET] Per-Turn Count" headings become the tag (the bracket) and a bold lead
 * on the question (the words after it). Tables the book prints inside a question (H's
 * Column-I / Column-II list) are lines of cells separated by " | ". Option letters are the
 * book's (a) to (d) in these topics.
 * Scientific names are italic. A ratio of two gas concentrations (CO2 over O2) is stacked.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 681–683 ─────────────────────────
  {
    n: 'A',
    title: 'ATP and NADPH Stoichiometry: The Quantitative Calvin Cycle',
    extra: true,
    kalam: 'This section builds the counting logic from the three phases and trains speed at extracting the relevant pair from a worded problem.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Additional topics A to F address six examinable patterns the chapter introduces but does not fully work through: (A) ATP/NADPH stoichiometry, the quantitative backbone of every Calvin-cycle numerical; (B) the C<sub>4</sub> pathway’s intracellular routing, including the malate and aspartate shuttles and their cellular compartments; (C) photorespiration’s three-organelle journey, energy cost, and why C<sub>4</sub> suppression is conditional rather than absolute; (D) a systematic C<sub>3</sub>/C<sub>4</sub>/CAM comparison that extends the chapter’s table into temperature dependence, productivity data, and mixed-pathway plants; (E) the Hill reaction (its equation, what it shows, and quantitative measurement), which the chapter does not cover; and (F) Blackman’s law in application (compensation points, limiting-factor graphs, and the monsoon/rice-field worked example the chapter states but does not calculate).',
      },
      {
        t: 'p',
        html: 'The chapter gives the per-turn and per-glucose counts (3 ATP and 2 NADPH; 18 ATP and 12 NADPH), the cost of each phase, and one scaled example (50 glucose). A Calvin-cycle numerical is usually a multiple or a fraction of these two numbers. This section builds the counting logic from the three phases and trains speed at extracting the relevant pair from a worded problem.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Counting rules (learn these before any problem)',
        steps: [
          '<b>Per one CO<sub>2</sub> fixed (one turn of the cycle):</b> Carboxylation → no ATP/NADPH spent. Reduction → 2 ATP + 2 NADPH spent. Regeneration → 1 ATP spent. Total per turn: <b>3 ATP + 2 NADPH</b>.',
          '<b>Per one glucose made (6 turns):</b> Multiply per-turn costs by 6. Total: <b>18 ATP + 12 NADPH</b>.',
          '<b>The ratio:</b> ATP ∶ NADPH = 3 ∶ 2, or numerically 18 ∶ 12. Never swap these. The larger number is always ATP.',
          '<b>For worded problems:</b> Extract how many CO<sub>2</sub> molecules are fixed or how many glucose molecules are made, then scale accordingly. If the question asks for “ATP needed to produce 5 molecules of glucose,” multiply 18 × 5.',
          '<b>NADPH source:</b> Each NADPH comes from the light reaction (non-cyclic photophosphorylation). Reducing NADP<sup>+</sup> to NADPH takes 2 electrons, and in the Z-scheme each electron is lifted once at PS II and once at PS I. So one NADPH needs 2 photons at PS I (and 2 at PS II, 4 in all), and 12 NADPH need 24 photons at PS I and 48 photons in total. This photon count is seldom needed in NEET numericals, but it follows directly from the Z-scheme.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Per-Turn Count.</b> During one complete turn of the Calvin cycle, how many molecules of ATP are consumed?',
        steps: [
          'One turn fixes one CO<sub>2</sub>. Per-turn ATP cost = 3 (1 ATP in regeneration; 2 ATP in reduction).',
          '<b>Check against the chapter:</b> The chapter’s three-phase sequence says reduction consumes ATP and regeneration consumes ATP, while carboxylation consumes none. Three is correct.',
        ],
        ans: '3 ATP',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Scaling to Glucose.</b> Write the overall balanced equation for glucose synthesis via the Calvin cycle, including ATP and NADPH as reactants and ADP/NADP<sup>+</sup> as products.',
        steps: [
          'This is the atom-balanced form of the Calvin cycle: the 12 NADPH and 12 H<sup>+</sup> supply the 24 hydrogen atoms that end up in glucose (12) and in the 6 H<sub>2</sub>O released (12). The chapter (Topic 03) gives this same balanced form; its cheat sheet also gives the short count, 6 CO<sub>2</sub> + 18 ATP + 12 NADPH per glucose, which is the one to quote when a question asks only for the ATP and NADPH counts. The chapter’s overall photosynthetic equation (6CO<sub>2</sub> + 12H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> + 6H<sub>2</sub>O) adds the light reaction; this equation shows the currency, ATP and NADPH, spent inside the carbon-fixation factory.',
        ],
        ans: '6CO<sub>2</sub> + 18ATP + 12NADPH + 12H<sup>+</sup> → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 18ADP + 12NADP<sup>+</sup> + 18P<sub>i</sub> + 6H<sub>2</sub>O',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '<b>Worded Numerical.</b> A plant cell fixes 120 molecules of CO<sub>2</sub> via the Calvin cycle. How many molecules of ATP and NADPH are consumed?',
        steps: [
          '<b>Reasoning.</b> 120 CO<sub>2</sub> molecules = 120 turns. Per turn: 3 ATP + 2 NADPH. ATP = 120 × 3 = 360. NADPH = 120 × 2 = 240.',
          '<b>Speed tip:</b> the numbers 3 and 2 are the only two you ever multiply. If the question gives CO<sub>2</sub> molecules, multiply by 3 and 2. If it gives glucose molecules, first multiply by 6 to get CO<sub>2</sub> equivalents, then apply the same rule.',
        ],
        ans: '360 ATP and 240 NADPH',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>ATP Only.</b> How many ATP molecules are required to produce 10 molecules of glucose via the Calvin cycle?',
        steps: [
          '<b>Reasoning.</b> 10 glucose = 10 × 6 = 60 CO<sub>2</sub> fixed. 60 turns × 3 ATP per turn = 180 ATP.',
          '(NADPH would be 120, but the question asks for ATP only.)',
        ],
        ans: '180 ATP',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State the number of ATP and NADPH molecules consumed per molecule of glucose synthesised in the Calvin cycle.',
            a: '18 ATP; 12 NADPH.',
          },
          {
            q: '[NEET] If 30 molecules of CO<sub>2</sub> are fixed by the Calvin cycle, how many molecules of NADPH are needed? (a) 30 (b) 60 (c) 90 (d) 120',
            a: '(b) 60: 30 CO<sub>2</sub> × 2 NADPH = 60.',
          },
          {
            q: '[CUET] In one turn of the Calvin cycle, which phase consumes neither ATP nor NADPH?',
            a: 'Carboxylation: RuBisCO joins CO<sub>2</sub> to RuBP with no energy spent.',
          },
          {
            q: '[NEET] Assertion: The ratio of ATP to NADPH consumed per glucose molecule is 3 ∶ 2.<br>Reason: Per turn the cycle uses 3 ATP and 2 NADPH, and one glucose requires 6 turns.<br>Choose: (a) both true, R explains A (b) both true, R unrelated (c) A true, R false (d) A false, R true',
            a: '(a): both true and R gives the correct derivation.',
          },
          {
            q: '[NEET High-Difficulty] A photosynthetic cell uses 54 molecules of ATP to run the Calvin cycle alone. How many molecules of CO<sub>2</sub> were fixed?',
            a: '54 ÷ 3 = 18 turns → 18 CO<sub>2</sub> fixed.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 683–686 ─────────────────────────
  {
    n: 'B',
    title: 'The C4 Pathway in Detail: Shuttles, CAM, and Why C4 Is Not One Thing',
    extra: true,
    kalam: 'The chapter names the Hatch–Slack pathway, identifies PEP carboxylase and OAA, and describes Kranz anatomy.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter names the Hatch–Slack pathway, identifies PEP carboxylase and OAA, and describes Kranz anatomy. What it omits: (i) the distinct biochemical shuttles that carry the 4-carbon acid from mesophyll to bundle sheath (malate and aspartate forms, with three decarboxylation types), (ii) which cell type performs which half-reaction in each shuttle, (iii) the CAM pathway in more detail: the chapter gives it one line (fixation at night, Calvin cycle by day); this section adds the stomatal timing, malate storage in the vacuole and examples, and (iv) the precise ATP cost of the C<sub>4</sub> detour, which the chapter mentions qualitatively but never quantifies. NEET-style high-difficulty options can turn on these distinctions.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>Malate-type and aspartate-type shuttles.</b>' },
      {
        t: 'p',
        html: 'C<sub>4</sub> plants route the 4-carbon acid from mesophyll to bundle sheath in malate or aspartate form; three decarboxylation types exist (NADP-ME, NAD-ME, PEP-CK). The chapter does not distinguish them.',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Malate shuttle', 'Aspartate shuttle'],
        rows: [
          ['4-carbon acid transported', 'Malic acid (malate)', 'Aspartic acid (aspartate)'],
          [
            'Mesophyll enzyme',
            'Malate dehydrogenase (NADP-dependent) converts OAA to malate',
            'Aminotransferase converts OAA to aspartate',
          ],
          [
            'Bundle sheath reaction',
            'Malic enzyme decarboxylates malate → CO<sub>2</sub> + pyruvate',
            'Aspartate is converted back to OAA. In NAD-ME plants the OAA is reduced to malate in the mitochondria, and NAD-malic enzyme decarboxylates the malate (CO<sub>2</sub> + pyruvate); in PEP-CK plants PEP carboxykinase decarboxylates the OAA in the cytosol (CO<sub>2</sub> + PEP)',
          ],
          ['CO<sub>2</sub> release site', 'Bundle sheath chloroplast', 'Bundle sheath mitochondria (NAD-ME) or cytosol (PEP-CK)'],
          [
            'Net 4-carbon acid after decarboxylation',
            'Returns pyruvate to mesophyll',
            'Returns alanine or PEP to the mesophyll (alanine is converted to pyruvate and then PEP)',
          ],
          ['Typical plants', 'Maize, sugarcane, sorghum (NADP-ME type)', 'Aspartate-type (NAD-ME or PEP-CK) plants, for example <i>Amaranthus</i> (NAD-ME) and some grasses (PEP-CK)'],
        ],
      },
      {
        t: 'p',
        html: 'Both shuttles achieve the same goal: concentrating CO<sub>2</sub> around RuBisCO in the bundle sheath. The chapter’s simplified description (malate → bundle sheath → decarboxylation) covers the malate shuttle only.',
      },
      { t: 'p', html: '<b>CAM pathway: the temporal workaround.</b>' },
      {
        t: 'p',
        html: 'CAM plants (Crassulacean Acid Metabolism) include cacti, pineapples, and <i>Kalanchoe</i>. They live in extreme water scarcity, so they open stomata only at night when evaporation is low. The C<sub>4</sub> principle is applied across time instead of across cell types:<br>• <b>Night:</b> Stomata open. CO<sub>2</sub> enters mesophyll cells and is fixed by PEP carboxylase into OAA → malate. Malate is stored in cell vacuoles overnight.<br>• <b>Day:</b> Stomata close. Malate is transported out of the vacuole and decarboxylated, releasing CO<sub>2</sub>. This CO<sub>2</sub> is re-fixed by RuBisCO through the normal Calvin cycle in the same mesophyll cells.',
      },
      {
        t: 'p',
        html: 'The key distinction from C<sub>4</sub>: in C<sub>4</sub> plants the spatial separation is simultaneous (two cell types working at the same time); in CAM the separation is temporal (same cell, different times of day). Both achieve a high CO<sub>2</sub> concentration around RuBisCO.',
      },
      { t: 'p', html: '<b>ATP cost of the C<sub>4</sub> detour.</b>' },
      {
        t: 'p',
        html: 'The chapter says C<sub>4</sub> costs extra ATP but does not say how much. The full accounting:<br>• C<sub>4</sub> initial fixation: regenerating PEP from pyruvate in the mesophyll costs <b>2 ATP-equivalents per CO<sub>2</sub></b>. The enzyme is pyruvate–phosphate dikinase, which splits ATP into AMP + PP<sub>i</sub>; the AMP must then be re-phosphorylated with a second ATP.<br>• Compared to C<sub>3</sub>: C<sub>3</sub> spends 3 ATP per CO<sub>2</sub> fixed. C<sub>4</sub> spends 3 ATP in the Calvin cycle + 2 ATP for the PEP pump = <b>5 ATP per CO<sub>2</sub> fixed</b> (and 2 NADPH, as in C<sub>3</sub>).',
      },
      {
        t: 'p',
        html: 'Per glucose (6 CO<sub>2</sub>): C<sub>3</sub> = 18 ATP; C<sub>4</sub> = 30 ATP. The extra 12 ATP per glucose are the price of the CO<sub>2</sub>-concentrating pump. In hot, bright, dry conditions where photorespiration would otherwise drain 20–30 % of fixed carbon, C<sub>4</sub>’s extra ATP cost is more than recovered.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Identifying the Shuttles.</b> Which C<sub>4</sub> plants primarily use the malate (NADP-ME) shuttle, and which use aspartate-type shuttles?',
        steps: [],
        ans: 'The malate (NADP-malic enzyme) shuttle is found in maize, sugarcane and sorghum. Aspartate-type shuttles are found in other C<sub>4</sub> plants: NAD-ME in, for example, <i>Amaranthus</i>, and PEP-CK in some grasses. There is no fixed monocot or dicot rule. Examples of C<sub>4</sub> crops: maize, sugarcane, sorghum (monocots). A question may give species and ask which shuttle applies.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>CAM Identification.</b> Name two CAM plants and state how they differ from C<sub>4</sub> plants in the timing of their CO<sub>2</sub> fixation steps.',
        steps: [],
        ans: 'Two CAM plants: <i>Kalanchoe</i>, <i>Opuntia</i> (pineapple and agave are also CAM plants). Difference: C<sub>4</sub> plants separate the two fixation steps spatially, mesophyll and bundle sheath, and operate both simultaneously in daylight. CAM plants separate the same steps temporally: PEP carboxylase fixes CO<sub>2</sub> at night (producing malate stored in vacuoles), and RuBisCO fixes CO<sub>2</sub> the following day from the decarboxylated malate. Both achieve high CO<sub>2</sub> around RuBisCO, but by different means.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '<b>C<sub>4</sub> ATP Cost.</b> How many extra ATP molecules does the C<sub>4</sub> pathway spend per glucose molecule compared to the C<sub>3</sub> Calvin cycle?',
        steps: [
          '<b>Reasoning.</b> C<sub>3</sub> costs 18 ATP per glucose (3 ATP × 6 CO<sub>2</sub>). In a C<sub>4</sub> plant the Calvin cycle in the bundle sheath still costs 18 ATP. On top of that, the C<sub>4</sub> pump regenerates PEP from pyruvate in the mesophyll at 2 ATP-equivalents per CO<sub>2</sub> (pyruvate–phosphate dikinase: ATP → AMP + PP<sub>i</sub>), which is 2 × 6 = 12 ATP per glucose. Total C<sub>4</sub> = 18 + 12 = 30 ATP per glucose. Extra cost = 30 − 18 = <b>12 ATP per glucose</b>.',
          '<b>Check:</b> 2 extra ATP per CO<sub>2</sub> × 6 CO<sub>2</sub> = 12 ATP extra. This matches the chapter’s statement that C<sub>4</sub> plants spend extra ATP to run the CO<sub>2</sub> pump.',
        ],
        ans: '12 extra ATP per glucose (5 ATP per CO<sub>2</sub> in C<sub>4</sub> against 3 ATP in C<sub>3</sub>)',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] Name the two main shuttle types operating in C<sub>4</sub> plants and state the primary 4-carbon acid transported in each.',
            a: 'The malate shuttle (malic acid, malate) and aspartate-type shuttles (aspartic acid, aspartate).',
          },
          {
            q: '[NEET] Which of the following is a CAM plant? (a) Maize (b) Sugarcane (c) <i>Kalanchoe</i> (d) Rice',
            a: '(c) <i>Kalanchoe</i>.',
          },
          {
            q: '[CBSE] How does the CAM pathway apply the C<sub>4</sub> principle across time rather than space?',
            a: 'CO<sub>2</sub> is fixed at night by PEP carboxylase (storing malate in vacuoles); stomata close by day, malate is decarboxylated and CO<sub>2</sub> is re-fixed by RuBisCO in the same cells: separation in time, not in cell type.',
          },
          {
            q: '[NEET High-Difficulty] Assertion: C<sub>4</sub> plants spend more ATP per glucose than C<sub>3</sub> plants.<br>Reason: PEP carboxylase itself requires ATP.<br>Choose: (a) both true, R explains A (b) both true, R unrelated (c) A true, R false (d) A false, R true',
            a: '(c). A is true, R is false: PEP carboxylase needs no ATP (it adds CO<sub>2</sub>, as HCO<sub>3</sub><sup>−</sup>, to PEP). The extra ATP is spent by pyruvate–phosphate dikinase when PEP is regenerated from pyruvate.',
          },
          {
            q: '[NEET] In the malate shuttle of C<sub>4</sub> photosynthesis, the decarboxylating enzyme in the bundle sheath cell is: (a) PEP carboxylase (b) NAD-malic enzyme (c) NADP-malic enzyme (d) PEP carboxykinase',
            a: '(c) NADP-malic enzyme (NADP-ME type C<sub>4</sub> plants like maize).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 686–688 ─────────────────────────
  {
    n: 'C',
    title: 'Photorespiration: The Three-Organelle Journey and Its Cost',
    extra: true,
    kalam: 'The chapter names photorespiration, identifies RuBisCO’s oxygenase activity, and states that it spans three organelles.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter names photorespiration, identifies RuBisCO’s oxygenase activity, and states that it spans three organelles. What it omits: (i) the step-by-step path through each organelle with its intermediates (glycolate, glyoxylate, glycine, serine, glycerate), (ii) the name and role of each intermediate enzyme, (iii) the quantified energy cost in ATP and fixed carbon, and (iv) how far the suppression in C<sub>4</sub> plants goes: the chapter gives the reason (a high CO<sub>2</sub> concentration around RuBisCO in the bundle sheath) but not that a little photorespiration remains. NEET-style assertion–reason questions can turn on these points.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>The glycolate pathway (C<sub>2</sub> cycle): organelle by organelle.</b>' },
      {
        t: 'proc',
        title: 'The chapter calls photorespiration a “wasteful” process spanning chloroplast → peroxisome → mitochondrion. Here is the exact sequence:',
        steps: [
          '<b>Chloroplast:</b> RuBisCO acts as an oxygenase. RuBP + O<sub>2</sub> → phosphoglycolate (2C) + 3-PGA (3C). The 2-carbon phosphoglycolate is dephosphorylated to glycolate, and the glycolate is exported to the peroxisome. Cost: RuBisCO has bound O<sub>2</sub> instead of CO<sub>2</sub>, so one round of carbon fixation is lost.',
          '<b>Peroxisome:</b> Glycolate is oxidised to glyoxylate, consuming O<sub>2</sub> and producing H<sub>2</sub>O<sub>2</sub> (hydrogen peroxide). The H<sub>2</sub>O<sub>2</sub> is broken down by catalase to H<sub>2</sub>O + O<sub>2</sub>. Each glyoxylate then accepts an amino group from glutamate and becomes glycine, so two glyoxylate give two glycine. No useful energy is generated in the peroxisome.',
          '<b>Mitochondrion:</b> Two glycine molecules undergo oxidative decarboxylation to form one molecule of serine, releasing CO<sub>2</sub> and NH<sub>3</sub>. This is the step where fixed carbon is lost as CO<sub>2</sub>.',
          '<b>Peroxisome (again):</b> Serine is converted to glycerate, which returns to the chloroplast and enters the Calvin cycle as 3-PGA.',
        ],
      },
      {
        t: 'p',
        html: '<b>Net result:</b> 2 phosphoglycolate (4 carbons, from 2 oxygenation events) → 1 CO<sub>2</sub> released in the mitochondrion + 1 glycerate (3 carbons) returned to the Calvin cycle. In other words, one CO<sub>2</sub> molecule is released for every two oxygenation events (two O<sub>2</sub> taken up by RuBisCO). The nitrogen in the released NH<sub>3</sub> must be re-incorporated, costing ATP and glutamate.',
      },
      { t: 'p', html: '<b>Quantified cost.</b>' },
      {
        t: 'p',
        html: 'Per oxygenation event: RuBisCO produces 1 phosphoglycolate (2C) and 1 3-PGA (3C). The 3-PGA continues normally. Two phosphoglycolates (4 carbons) are needed to release one CO<sub>2</sub> in the mitochondrion, and the other 3 carbons return as glycerate. Net carbon loss = 0.5 CO<sub>2</sub> per oxygenation event (1 CO<sub>2</sub> per two events), plus the energy cost of converting glycolate back to glycerate and re-incorporating NH<sub>3</sub>. In bright light with low CO<sub>2</sub>, a C<sub>3</sub> leaf may lose 20–30 % of its newly fixed carbon to photorespiration.',
      },
      { t: 'p', html: '<b>Why C<sub>4</sub> suppresses it but does not eliminate it.</b>' },
      {
        t: 'p',
        html: 'The chapter states photorespiration is negligible in C<sub>4</sub> plants. The mechanism: C<sub>4</sub> bundle sheath cells maintain a CO<sub>2</sub> concentration several times atmospheric (about 10-fold), so RuBisCO always encounters far more CO<sub>2</sub> than O<sub>2</sub> and the oxygenase reaction is statistically unlikely. C<sub>4</sub> plants still show a small amount of photorespiration, because RuBisCO still has oxygenase activity. It is suppressed, not structurally impossible.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Tracing the Pathway.</b> Name the three organelles involved in photorespiration in the correct order, and state which organelle releases the CO<sub>2</sub>.',
        steps: [
          '<b>Check against the chapter:</b> the chapter names the three organelles and says CO<sub>2</sub> is released in the mitochondrion. This answer adds the return trip through the peroxisome to the chloroplast, and the glycine step.',
        ],
        ans: 'Chloroplast → Peroxisome → Mitochondrion → (back to) Peroxisome → Chloroplast. The CO<sub>2</sub> is released in the <b>mitochondrion</b> during the oxidation of glycine to serine.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Why It Is Wasteful.</b> State two reasons why photorespiration is considered a wasteful process.',
        steps: [],
        ans: '(1) It consumes O<sub>2</sub> and releases CO<sub>2</sub> without producing any ATP, NADPH, or sugar: it reverses the net gain of photosynthesis. (2) Ammonia is released when glycine becomes serine and must be re-assimilated at a cost in ATP. Both deplete the plant’s resources without contributing to growth.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '<b>C<sub>4</sub> Suppression Mechanism.</b> Assertion (A): Photorespiration is negligible in C<sub>4</sub> plants. Reason (R): C<sub>4</sub> plants concentrate CO<sub>2</sub> in bundle sheath cells, keeping the <frac><num>CO<sub>2</sub></num><den>O<sub>2</sub></den></frac> ratio high around RuBisCO. Choose: (a) both true, R explains A (b) both true, R unrelated (c) A true, R false (d) A false, R true',
        steps: [
          '<b>Reasoning.</b> High [CO<sub>2</sub>] in the bundle sheath means RuBisCO overwhelmingly binds CO<sub>2</sub> rather than O<sub>2</sub>. The oxygenase activity (which initiates photorespiration) becomes important when the <frac><num>CO<sub>2</sub></num><den>O<sub>2</sub></den></frac> ratio is low.',
          '<b>Speed tip:</b> whenever the question links RuBisCO’s oxygenase activity to the <frac><num>CO<sub>2</sub></num><den>O<sub>2</sub></den></frac> ratio, the answer hinges on which gas is in relative excess. C<sub>4</sub> plants engineer a CO<sub>2</sub> excess; C<sub>3</sub> plants do not.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] What is the first product when RuBisCO acts as an oxygenase?',
            a: 'Phosphoglycolate (2C) and 3-PGA (3C).',
          },
          {
            q: '[NEET] In which organelle is CO<sub>2</sub> released during photorespiration? (a) Chloroplast (b) Peroxisome (c) Mitochondrion (d) Cytoplasm',
            a: '(c) Mitochondrion: glycine oxidation releases CO<sub>2</sub>.',
          },
          {
            q: '[CBSE] Give two differences between photorespiration and mitochondrial respiration.',
            a: 'Photorespiration: occurs in light, in chloroplasts/peroxisomes/mitochondria, produces no ATP, consumes O<sub>2</sub> and releases CO<sub>2</sub>. Mitochondrial respiration: occurs in mitochondria in dark and light, produces ATP, consumes O<sub>2</sub> and releases CO<sub>2</sub>.',
          },
          {
            q: '[NEET High-Difficulty] Assertion: C<sub>4</sub> plants are almost completely free of photorespiration.<br>Reason: The PEP carboxylase enzyme has no oxygenase activity.<br>Choose: (a) both true, R explains A (b) both true, R unrelated (c) A true, R false (d) A false, R true',
            a: '(b): both A and R are true, but R does not explain A. PEP carboxylase indeed has no oxygenase activity, but photorespiration is negligible in C<sub>4</sub> plants because the CO<sub>2</sub> concentration around RuBisCO in the bundle sheath is high; RuBisCO’s own oxygenase activity is suppressed, not absent.',
          },
          {
            q: '[NEET] Photorespiration is initiated when the concentration of ______ rises relative to ______ inside the leaf. Fill in the blanks.',
            a: 'O<sub>2</sub>; CO<sub>2</sub>.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 688–690 ─────────────────────────
  {
    n: 'D',
    title: 'C3, C4, and CAM: A Systematic Comparison with Environmental Context',
    extra: true,
    kalam: 'The CO2 compensation point is the CO2 concentration at which a leaf’s net CO2 exchange is zero.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter provides a comparison table (Topic 04) covering acceptor, first product, fixing enzyme, sites of photosynthesis, Kranz anatomy, how much photorespiration occurs, and examples. What it omits: (i) the temperature optima as numbers, and why they differ, (ii) quantum yield (photosynthetic efficiency), (iii) a fuller crop list with the pathway type of each, (iv) plants that switch pathways, and (v) the CO<sub>2</sub> compensation point, the concentration at which net CO<sub>2</sub> exchange is zero. These form the basis of high-difficulty NEET and CUET questions.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>Temperature optima and the basis of the difference.</b>' },
      {
        t: 'p',
        html: 'C<sub>3</sub> plants: optimum temperature 20–25 °C. Photorespiration rises with temperature (partly because the solubility of CO<sub>2</sub> in water falls faster than that of O<sub>2</sub> as it warms, so the <frac><num>CO<sub>2</sub></num><den>O<sub>2</sub></den></frac> ratio at RuBisCO falls, and partly because RuBisCO itself favours O<sub>2</sub> more at higher temperature). Above 30 °C, C<sub>3</sub> plants lose significant carbon.',
      },
      {
        t: 'p',
        html: 'C<sub>4</sub> plants: optimum temperature 30–45 °C. Because photorespiration is suppressed by the high CO<sub>2</sub> concentration around RuBisCO, a rise in temperature raises it far less than in C<sub>3</sub> plants, so C<sub>4</sub> plants keep photosynthesising efficiently when it is hot.',
      },
      {
        t: 'p',
        html: 'This explains the geographic distribution: C<sub>3</sub> crops such as wheat dominate temperate and cool regions; C<sub>4</sub> crops (maize, sorghum, bajra) dominate hot, bright regions.',
      },
      { t: 'p', html: '<b>CO<sub>2</sub> compensation point.</b>' },
      {
        t: 'p',
        html: 'The CO<sub>2</sub> compensation point (Γ) is the atmospheric CO<sub>2</sub> concentration at which net CO<sub>2</sub> exchange is zero: uptake equals CO<sub>2</sub> released by respiration plus, in C<sub>3</sub> leaves, photorespiration. For C<sub>3</sub> plants: Γ ≈ 50 ppm. For C<sub>4</sub> plants: Γ ≈ 5–10 ppm (near zero because photorespiration is suppressed). This means C<sub>4</sub> plants can still gain carbon at CO<sub>2</sub> concentrations at which C<sub>3</sub> plants show no net gain.',
      },
      { t: 'p', html: '<b>Mixed-pathway plants.</b>' },
      {
        t: 'p',
        html: 'Some plants run more than one pathway or switch between them:<br>• <b><i>Portulaca</i> (purslane):</b> Normally a C<sub>4</sub> plant; under drought stress it can switch toward CAM (facultative CAM).<br>• <b><i>Kalanchoe</i> (including <i>Bryophyllum</i>):</b> Under normal conditions CAM, but can show C<sub>3</sub>-like traits under constant temperature and water abundance.',
      },
      { t: 'p', html: '<b>Quantum yield (brief).</b>' },
      {
        t: 'p',
        html: 'Quantum yield = moles of CO<sub>2</sub> fixed per mole of photons absorbed. C<sub>3</sub> plants lose part of the absorbed energy to photorespiration, so their quantum yield falls as temperature rises; C<sub>4</sub> plants keep theirs in hot, bright conditions; in cool, CO<sub>2</sub>-rich conditions C<sub>4</sub> has no advantage (Topic 04).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Temperature and Pathway.</b> Wheat (a C<sub>3</sub> crop) grows best in the Punjab plains in winter (rabi), while maize (a C<sub>4</sub> crop) is grown in summer (kharif). Explain in terms of photorespiration and temperature optima.',
        steps: [],
        ans: 'Wheat (C<sub>3</sub>) prefers cool-to-moderate temperatures (20–25 °C) where photorespiration is minimal and RuBisCO functions efficiently as a carboxylase. Punjab winters provide these conditions. Maize (C<sub>4</sub>) has a high temperature optimum (30–45 °C) and is little affected by photorespiration because its bundle sheath maintains high CO<sub>2</sub> around RuBisCO; the hot Punjab summer supplies abundant light and warmth, maximising C<sub>4</sub> efficiency. This is why a cool-season C<sub>3</sub> crop (wheat) and a warm-season C<sub>4</sub> crop (maize) suit different seasons in northern India.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>CO<sub>2</sub> Compensation Point.</b> Define the CO<sub>2</sub> compensation point and state one difference between C<sub>3</sub> and C<sub>4</sub> plants in this regard.',
        steps: [],
        ans: 'The CO<sub>2</sub> compensation point (Γ) is the ambient CO<sub>2</sub> concentration at which net CO<sub>2</sub> exchange is zero: uptake equals CO<sub>2</sub> released by respiration plus, in C<sub>3</sub> leaves, photorespiration. C<sub>3</sub> plants have a higher Γ (≈50 ppm) because they lose fixed carbon to photorespiration even at moderate CO<sub>2</sub> levels. C<sub>4</sub> plants have a near-zero Γ (≈5–10 ppm) because photorespiration is suppressed; they can maintain net carbon gain at very low CO<sub>2</sub> concentrations.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '<b>Pathway of an Economic Crop.</b> Groundnut is a major oilseed crop in India. Is it a C<sub>3</sub> or C<sub>4</sub> plant? [Hint: it is a legume, grown mainly in the kharif season.]',
        steps: [
          '<b>Reasoning.</b> Major C<sub>4</sub> crops: maize, sugarcane, sorghum (jowar) and bajra (pearl millet). Groundnut, soybean, mustard and sunflower are C<sub>3</sub> plants, as are wheat, rice and gram. Groundnut → C<sub>3</sub>.',
          '<b>Speed tip:</b> if you know the major C<sub>4</sub> examples (maize, sugarcane, sorghum, bajra, amaranth) and the CAM examples (<i>Kalanchoe</i>, <i>Opuntia</i>, pineapple), then most other crop plants that NEET mentions are C<sub>3</sub>.',
        ],
        ans: 'C<sub>3</sub> plant',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State two environmental conditions under which C<sub>4</sub> plants outyield C<sub>3</sub> plants, and explain why.',
            a: 'High temperature (30–45 °C) and high light intensity, because C<sub>4</sub> plants are little affected by the rise in photorespiration that limits C<sub>3</sub> plants at these conditions; their bundle sheath maintains high CO<sub>2</sub> around RuBisCO.',
          },
          {
            q: '[NEET] Which of the following is a C<sub>3</sub> crop? (a) Maize (b) Sugarcane (c) Wheat (d) Bajra',
            a: '(c) Wheat.',
          },
          {
            q: '[CUET] What is meant by the CO<sub>2</sub> compensation point? Which type of plant has a higher CO<sub>2</sub> compensation point and why?',
            a: 'See the second worked example above; C<sub>3</sub> has higher Γ (≈50 ppm) because of photorespiration.',
          },
          {
            q: '[NEET High-Difficulty] Which statement about carbon fixation pathways is correct? (a) Maize is a CAM plant (b) <i>Opuntia</i> fixes CO<sub>2</sub> at night with PEP carboxylase (c) Wheat has Kranz anatomy (d) Sorghum is a C<sub>3</sub> plant',
            a: '(b). <i>Opuntia</i> is a CAM plant: its stomata open at night and PEP carboxylase fixes CO<sub>2</sub> into OAA and malate. Maize and sorghum are C<sub>4</sub> plants, and wheat is a C<sub>3</sub> plant without Kranz anatomy.',
          },
          {
            q: '[NEET] The CO<sub>2</sub> compensation point is near zero in C<sub>4</sub> plants because: (a) they have no stomata (b) photorespiration is suppressed (c) they respire more slowly (d) PEP carboxylase works only in light',
            a: '(b) photorespiration is suppressed.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 690–692 ─────────────────────────
  {
    n: 'E',
    title: 'The Hill Reaction: Light, Water, and an Electron Acceptor',
    extra: true,
    kalam: 'The Z-scheme places water splitting at the start of non-cyclic electron flow.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter does not cover the Hill reaction, although it is the classic experimental evidence that the light reaction works on its own in isolated chloroplasts; this section defines it, writes its equation and explains how it is used experimentally. NEET-style questions may ask for the Hill reagent or the stoichiometry of oxygen release, and the concept directly explains why the light reaction can be studied in isolation from the Calvin cycle.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>Definition.</b>' },
      {
        t: 'p',
        html: 'The Hill reaction is the light-driven oxidation of water and reduction of an artificial electron acceptor (a Hill reagent) by isolated chloroplasts, accompanied by O<sub>2</sub> evolution. It was first demonstrated by Robert Hill in 1937.',
      },
      { t: 'p', html: '<b>Key features.</b>' },
      {
        t: 'p',
        html: '• It shows that the light reaction alone, without the Calvin cycle, can split water and release O<sub>2</sub>.<br>• The electron acceptor can be any oxidising agent that accepts electrons from the photosynthetic electron transport chain: dichloro-phenol-indophenol (DCPIP), or ferricyanide [Fe(CN)<sub>6</sub>]<sup>3−</sup>.<br>• DCPIP is the most common laboratory Hill reagent: it is blue when oxidised and colourless when reduced. The rate of decolourisation measures the rate of the Hill reaction.<br>• The equation using DCPIP as the acceptor:',
      },
      {
        t: 'p',
        html: '2 H<sub>2</sub>O + 2 DCPIP (oxidised, blue) →<sup>light, chloroplasts</sup> O<sub>2</sub> + 2 DCPIPH<sub>2</sub> (reduced, colourless)',
      },
      { t: 'p', html: '<b>Why it matters for the chapter’s Z-scheme.</b>' },
      {
        t: 'p',
        html: 'The Z-scheme places water splitting at the start of non-cyclic electron flow. The Hill reaction confirms that the light reaction (water oxidation and electron transport) can run without the Calvin cycle, in line with the Z-scheme and with van Niel’s hypothesis; the labelled-oxygen experiments (Ruben and Kamen) proved that the O<sub>2</sub> comes from water.',
      },
      { t: 'p', html: '<b>Stoichiometry with DCPIP.</b>' },
      {
        t: 'p',
        html: 'One DCPIP accepts 2 electrons and 2 H<sup>+</sup>; NADP<sup>+</sup> accepts 2 electrons and 1 H<sup>+</sup>. Two water molecules provide 4 electrons, releasing 1 O<sub>2</sub> molecule. Therefore:<br>2H<sub>2</sub>O → O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>−</sup><br>2DCPIP + 4e<sup>−</sup> + 4H<sup>+</sup> → 2DCPIPH<sub>2</sub><br>Two DCPIP molecules are reduced per O<sub>2</sub> evolved. In a practical measurement, the volume of O<sub>2</sub> collected or the change in DCPIP colour (absorbance at 600 nm) is used to calculate the rate of electron transport.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Definition and Significance.</b> Define the Hill reaction and state one way it supports the Z-scheme model of photosynthesis.',
        steps: [],
        ans: 'The Hill reaction is the light-dependent evolution of O<sub>2</sub> by isolated chloroplasts in the presence of an artificial electron acceptor such as DCPIP or ferricyanide. It demonstrates that water splitting and electron transport are properties of the thylakoid membrane alone, independent of the Calvin cycle, consistent with the Z-scheme’s placement of water photolysis at the beginning of non-cyclic electron flow.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '<b>Hill Reagent Identification.</b> Which of the following can act as a Hill reagent in vitro? (a) DCPIP (b) RuBP (c) O<sub>2</sub> (d) NADP<sup>+</sup> only in the dark',
        steps: [
          '<b>Reasoning.</b> A Hill reagent is an electron acceptor that is reduced in the light by photosynthetic electron transport. DCPIP (oxidised, blue) accepts electrons and turns colourless: this is the standard laboratory Hill reagent. RuBP is a Calvin cycle substrate, not an electron acceptor. O<sub>2</sub> is the product of water splitting, not an acceptor. NADP<sup>+</sup> is the natural acceptor (reduced to NADPH) in vivo, not an artificial one, so it is not what the term Hill reagent usually means; DCPIP is used in the laboratory because its colour change is easy to track.',
          '<b>Speed tip:</b> any oxidising agent that changes colour on reduction can be a Hill reagent. DCPIP is the standard answer in exams.',
        ],
        ans: '(a) DCPIP',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] Who demonstrated the Hill reaction, and what does it show about the site of water splitting?',
            a: 'Robert Hill (1937); it shows that water splitting (and thus O<sub>2</sub> evolution) occurs in the thylakoid membranes of the chloroplast, independent of the Calvin cycle in the stroma.',
          },
          {
            q: '[NEET] In the Hill reaction, the evolved O<sub>2</sub> comes from: (a) CO<sub>2</sub> (b) the electron acceptor (c) water (d) NADP<sup>+</sup>',
            a: '(c) Water: van Niel proposed it and later isotope experiments confirmed it; the Hill reaction is consistent with it.',
          },
          {
            q: '[CBSE] Write the Hill reaction using DCPIP as the electron acceptor, and state what is observed experimentally.',
            a: 'See equation above; the blue DCPIP solution becomes colourless (or the absorbance at 600 nm decreases) as it is reduced, while O<sub>2</sub> bubbles are collected.',
          },
          {
            q: '[NEET High-Difficulty] Assertion: Isolated chloroplasts can evolve O<sub>2</sub> in the light without the Calvin cycle.<br>Reason: The Hill reaction demonstrates that water splitting is a property of the thylakoid membrane alone.<br>Choose: (a) both true, R explains A (b) both true, R unrelated (c) A true, R false (d) A false, R true',
            a: '(a): both true; R is the correct mechanistic basis for A.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 692–695 ─────────────────────────
  {
    n: 'F',
    title: 'Blackman’s Law in Application: Compensation Points, Limiting-Factor Graphs, and Field Scenarios',
    extra: true,
    kalam: 'At the LCP the plant is exactly breaking even; above it the plant gains carbon.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter states Blackman’s law (Topic 04) and gives the monsoon illustration with rice. What it omits: (i) the precise definition and typical values of the light compensation point and saturation point, (ii) the CO<sub>2</sub> compensation point already covered in Additional topic D, (iii) the hormone and guard-cell mechanism (abscisic acid) behind the stomatal closure under water stress that the chapter mentions, and (iv) working through the field example with numbers. These applications appear in NEET assertion–reason questions and CUET short-answer items.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>Three compensation and saturation points (defined before using them).</b>' },
      {
        t: 'p',
        html: '• <b>Light compensation point (LCP):</b> Light intensity at which photosynthetic CO<sub>2</sub> uptake equals respiratory CO<sub>2</sub> release; net photosynthesis = 0. Below this, the plant loses carbon. At the LCP the plant is exactly breaking even; above it the plant gains carbon.<br>• <b>Light saturation point (LSP):</b> Light intensity beyond which photosynthetic rate stops increasing, even if light rises further. The rate is now limited by another factor (CO<sub>2</sub>, temperature, or enzymes). Illustrative figure for the C<sub>3</sub> LSP: ≈ 500–800 μmol photons m<sup>−2</sup> s<sup>−1</sup>. NCERT gives a rounder figure, light saturation at about 10 per cent of full sunlight; sunlit crop leaves often saturate higher, as in the illustrative figures here.<br>• <b>CO<sub>2</sub> compensation point (Γ):</b> Defined in Additional topic D. C<sub>3</sub> Γ ≈ 50 ppm; C<sub>4</sub> Γ ≈ 5–10 ppm.',
      },
      { t: 'p', html: '<b>Water stress and the stomatal relay.</b>' },
      {
        t: 'p',
        html: 'The chapter mentions water as an external factor. The mechanism: when soil water potential drops, roots produce abscisic acid (ABA). ABA causes stomatal guard cells to lose turgor and close. Stomatal closure cuts CO<sub>2</sub> entry into the leaf. Intracellular CO<sub>2</sub> concentration falls, photorespiration rises (in C<sub>3</sub> plants), and net photosynthesis declines. Water acts as a limiting factor indirectly, through stomata and CO<sub>2</sub>, rather than participating directly in the chemical reactions of photosynthesis.',
      },
      { t: 'p', html: '<b>The monsoon/rice-field example worked through.</b>' },
      {
        t: 'p',
        html: 'The chapter notes that during the monsoon, dim cloudy skies make light the limiting factor, lowering the photosynthetic rate of crops such as rice. Detailed working (illustrative figures):<br>• Normal bright sunlight in north Indian plains: ≈ 1500–2000 μmol photons m<sup>−2</sup> s<sup>−1</sup>, above the saturation point for rice. Light is not limiting.<br>• Monsoon clouds: light drops to ≈ 200–500 μmol photons m<sup>−2</sup> s<sup>−1</sup>, below the saturation point. Photosynthetic rate falls with light intensity. Rice cannot access enough photons to use its full CO<sub>2</sub>-fixation capacity. Light is now the limiting factor.<br>• Applying Blackman’s law: raising CO<sub>2</sub> further will not help (CO<sub>2</sub> is not limiting; light is). Only raising light intensity (by clearer skies) will raise the photosynthetic rate.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Explaining the Law.</b> State Blackman’s law of limiting factors and apply it to the following situation: a rice field receives abundant sunlight and adequate water, but the crop is planted in airtight glass boxes with ambient CO<sub>2</sub> (≈ 400 ppm). Would you expect the photosynthetic rate to increase if the CO<sub>2</sub> concentration inside the boxes were doubled? Give a reason.',
        steps: [],
        ans: 'Blackman’s law: at any given time, the rate of a physiological process is limited by the factor that is in shortest supply, even if all other factors are abundant. In the glass boxes, CO<sub>2</sub> may be the nearest-to-minimum factor despite being “adequate” under normal open-air conditions. Doubling CO<sub>2</sub> (to ≈ 800 ppm) would raise the rate until another factor, possibly light or temperature, becomes limiting. Therefore, yes, the rate would likely increase, but only until a new bottleneck is reached.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '<b>Identifying the Limiting Factor.</b> In a field experiment on wheat at its optimum temperature and with plenty of water, in air with the normal CO<sub>2</sub> concentration (≈ 400 ppm), the photosynthetic rate stops increasing even when light intensity is raised above 1000 μmol photons m<sup>−2</sup> s<sup>−1</sup>. Which factor is now limiting photosynthesis? (a) Light intensity (b) CO<sub>2</sub> concentration (c) Temperature (d) Water',
        steps: [
          '<b>Reasoning.</b> Light is abundant (above the saturation point), and the rate has still plateaued, so light is no longer limiting. Temperature is stated to be at its optimum and water is plentiful, so neither is limiting. That leaves CO<sub>2</sub> at its ordinary air concentration.',
          'By Blackman’s law, the rate is set by the scarcest factor; with light, temperature and water all adequate, CO<sub>2</sub> caps the rate.',
        ],
        ans: '(b) CO<sub>2</sub> concentration',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Water Stress Mechanism.</b> How does water stress reduce the rate of photosynthesis? Name the hormone involved.',
        steps: [
          '<b>Note:</b> the chapter lists water as an external factor but does not name ABA; the stomatal role of abscisic acid is covered in the chapter on Plant Growth and Development.',
        ],
        ans: 'Water stress causes the roots to synthesise and release <b>abscisic acid (ABA)</b>. ABA travels to the leaves and induces stomatal closure by triggering loss of turgor in guard cells. With stomata closed, CO<sub>2</sub> entry into the leaf drops sharply. Intracellular CO<sub>2</sub> falls, RuBisCO increasingly binds O<sub>2</sub> instead of CO<sub>2</sub> (in C<sub>3</sub> plants), and net photosynthesis declines. Water itself is not directly consumed in photosynthesis beyond the photolysis reaction; its limiting effect operates through stomatal regulation of CO<sub>2</sub> supply.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Distinguish between the light compensation point and the light saturation point of a plant.',
            a: 'Light compensation point (LCP) = light intensity where net photosynthesis = 0 (photosynthesis = respiration). Light saturation point (LSP) = light intensity beyond which rate stops increasing despite further rise in light; another factor now limits.',
          },
          {
            q: '[NEET] A leaf is kept at a light intensity exactly equal to its light compensation point. What is its net CO<sub>2</sub> exchange, and why?',
            a: 'Net CO<sub>2</sub> exchange is zero: at the compensation point, photosynthetic CO<sub>2</sub> uptake equals respiratory CO<sub>2</sub> release, so the leaf neither gains nor loses carbon. Below this light intensity the leaf loses carbon; above it the leaf gains carbon.',
          },
          {
            q: '[CUET] Name the plant hormone that mediates stomatal closure during water stress, and state the immediate effect of stomatal closure on photosynthesis.',
            a: 'Abscisic acid (ABA); stomatal closure reduces CO<sub>2</sub> entry, lowering intracellular CO<sub>2</sub> and immediately reducing the rate of carbon fixation.',
          },
          {
            q: '[NEET High-Difficulty] Assertion: Increasing CO<sub>2</sub> concentration beyond the saturation point does not increase photosynthetic rate.<br>Reason: At that CO<sub>2</sub> level, another factor such as light intensity or temperature becomes limiting.<br>Choose: (a) both true, R explains A (b) both true, R unrelated (c) A true, R false (d) A false, R true',
            a: '(a): both true; R correctly identifies the principle behind Blackman’s law of limiting factors.',
          },
          {
            q: '[CBSE] Apply Blackman’s law to explain why rice yield in eastern India drops during the monsoon season despite adequate water availability.',
            a: 'Monsoon clouds reduce light intensity below the saturation point; light becomes the limiting factor. Even with abundant water, photosynthesis cannot increase until light intensity rises.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic G · p. 695 ─────────────────────────
  {
    n: 'G',
    title: 'Summary Cheat Sheet: Addendum',
    extra: true,
    kalam: 'Per glucose in Calvin cycle: 18 ATP + 12 NADPH; per turn: 3 ATP + 2 NADPH.',
    blocks: [
      { t: 'part', title: 'Summary cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Per glucose in Calvin cycle', note: '18 ATP + 12 NADPH; per turn: 3 ATP + 2 NADPH.' },
          {
            f: 'C<sub>4</sub> ATP cost',
            note: '30 ATP per glucose against 18 for C<sub>3</sub> (5 ATP per CO<sub>2</sub> against 3); the extra 12 ATP regenerate PEP from pyruvate.',
          },
          {
            f: 'C<sub>4</sub> shuttles',
            note: 'Malate shuttle (NADP-ME: maize, sugarcane, sorghum) and aspartate-type shuttles (NAD-ME, PEP-CK).',
          },
          {
            f: 'Photorespiration',
            note: 'Chloroplast → Peroxisome → Mitochondrion → Peroxisome → Chloroplast. CO<sub>2</sub> released in mitochondrion. RuBisCO oxygenase activity is triggered by low <frac><num>CO<sub>2</sub></num><den>O<sub>2</sub></den></frac> ratio. Cost: fixed carbon lost as CO<sub>2</sub> + extra ATP to re-incorporate nitrogen.',
          },
          {
            f: 'C<sub>3</sub> vs C<sub>4</sub> temperature',
            note: 'C<sub>3</sub> optimum 20–25 °C; C<sub>4</sub> optimum 30–45 °C. C<sub>3</sub> loses to photorespiration at high temperature.',
          },
          { f: 'CO<sub>2</sub> compensation point', note: 'C<sub>3</sub> ≈ 50 ppm; C<sub>4</sub> ≈ 5–10 ppm.' },
          {
            f: 'Hill reaction (Hill, 1937)',
            note: 'Isolated chloroplasts + light + electron acceptor (DCPIP) → O<sub>2</sub> evolution. Shows that water splitting is a thylakoid function. 2 DCPIP reduced per O<sub>2</sub> evolved.',
          },
          {
            f: 'Blackman’s law',
            note: 'Rate = limited by the factor nearest its minimum value. Raise that factor until another takes over.',
          },
          {
            f: 'Light compensation point',
            note: 'the light intensity at which photosynthetic CO<sub>2</sub> uptake equals respiratory CO<sub>2</sub> release (net photosynthesis = 0).',
          },
          {
            f: 'Water stress hormone',
            note: 'Abscisic acid (ABA) → stomatal closure → CO<sub>2</sub> entry falls → photosynthesis declines.',
          },
          {
            f: 'CAM plants',
            note: 'Night fixation (PEPcase) → malate stored in vacuoles; day decarboxylation → CO<sub>2</sub> for RuBisCO. Same cells, separated in time.',
          },
        ],
        aids: [],
      },
    ],
  },

  // ───────────────────────── Additional topic H · pp. 695–705 ─────────────────────────
  {
    n: 'H',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'NEET photosynthesis questions fall into five recurring shapes.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'NEET/AIPMT questions emphasise the chapter’s topics unevenly. The indicative ratings below are rough estimates, not exact counts (the book’s own estimate, not official figures).',
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Indicative NEET emphasis', 'Typical format'],
        rows: [
          [
            '<b>Light Reaction & Photophosphorylation</b> (Topic 02)',
            '5 out of 5: 1–2 questions per paper, often 2',
            'Statement-based “incorrect” items; cyclic vs non-cyclic comparison; Z-scheme description',
          ],
          [
            '<b>Calvin Cycle & Chemiosmosis</b> (Topic 03)',
            '4 out of 5: 1 question most years',
            'Stoichiometry (ATP/NADPH per CO<sub>2</sub> or per glucose); “where do protons accumulate?”; three-phase sequence',
          ],
          [
            '<b>C<sub>4</sub> Pathway & Photorespiration</b> (Topic 04)',
            '4 out of 5: 1 question per paper',
            'C<sub>3</sub>-vs-C<sub>4</sub> distinction; enzyme-cell type pairing; why C<sub>4</sub> escapes photorespiration; organelles of photorespiration',
          ],
          [
            '<b>Early Experiments & Pigments</b> (Topic 01)',
            '3 out of 5: 1 question every 2–3 years',
            'Scientist-contribution matching; chromatogram colour order; absorption-vs-action spectrum',
          ],
          [
            '<b>Factors Affecting Photosynthesis</b> (Topic 04)',
            '2 out of 5: appears every 3–4 years',
            'Blackman’s law statement; light-intensity curve plateau',
          ],
        ],
      },
      { t: 'p', html: 'These ratings are indicative only and are not exact frequencies.' },

      { t: 'part', title: 'The Recurring Archetypes' },
      {
        t: 'p',
        html: 'NEET photosynthesis questions fall into five recurring shapes. Each archetype below is defined, the cracking strategy is given, and one representative example is reconstructed from past papers and fully re-solved.',
      },

      { t: 'p', html: '<b>Archetype 1: “Which statement is INCORRECT?” (Statement-based)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Four textbook-accurate-sounding statements are given; one contains a single false detail. The trap is that three statements are true, so students must read each one carefully.<br><br><b>Cracking approach:</b> Eliminate options you can verify first. Save the most nuanced statement for last.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Reconstructed example (re-solved):</b> Which of the following statements is incorrect?<br>(a) Photosystem-I receives electrons from photosystem-II.<br>(b) Photosystem-II receives electrons from photolytic dissociation of water.<br>(c) Formation of NADPH is associated with photosystem-II.<br>(d) Reaction centre of photosystem I is P700.',
        steps: [
          '(a) is true: electrons travel water → PS II → PS I → NADP<sup>+</sup>.',
          '(b) is true: PS II replenishes its electrons by splitting water.',
          '(d) is true: PS I reaction centre absorbs at ~700 nm (P700).',
          '(c) is false: NADPH is produced at PS I (via ferredoxin and NADP<sup>+</sup> reductase), not PS II. PS II produces O<sub>2</sub> and feeds electrons forward.',
        ],
        ans: '(c)',
      },

      { t: 'p', html: '<b>Archetype 2: Scientist–Contribution Matching</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two columns, scientists vs contributions, to be linked. Five scientists appear: Priestley, Ingenhousz, Sachs, Engelmann, van Niel.<br><br><b>Cracking approach:</b> Lock the two unique pairings first. Engelmann → first action spectrum (Engelmann’s <i>Cladophora</i> + prism + bacteria is unmistakable). van Niel → the light-driven reduction of CO<sub>2</sub> by hydrogen from an oxidisable compound (H<sub>2</sub>S in sulphur bacteria), which led to the idea that the O<sub>2</sub> of photosynthesis comes from water. The remaining three sort by elimination.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Reconstructed example (re-solved):</b> Match the scientists in Column-I with their work in Column-II and select the correct answer.<br><br>Column-I | Column-II<br>A. Priestley | I. Determined the action spectrum of photosynthesis<br>B. Jan Ingenhousz | II. Provided evidence that in green parts of plants glucose is made and stored as starch<br>C. Sachs | III. Showed that plants purify air only in the presence of light<br>D. Engelmann | IV. Demonstrated that photosynthesis is essentially a light-dependent reaction in which hydrogen from an oxidisable compound reduces CO<sub>2</sub><br>E. van Niel | V. Revealed the essential role of air in the growth of green plants<br><br>(a) A–V; B–III; C–II; D–I; E–IV<br>(b) A–V; B–I; C–II; D–III; E–IV<br>(c) A–V; B–I; C–IV; D–III; E–II<br>(d) A–V; B–I; C–III; D–IV; E–II',
        steps: [
          'Engelmann = first action spectrum → D–I. Only option (a) pairs D with I.',
          'Priestley = the essential role of air in the growth of green plants → A–V (all four options agree).',
          'Ingenhousz = plants purify air only in the presence of light → B–III.',
          'Sachs = glucose is made and stored as starch in green parts → C–II.',
          'van Niel = photosynthesis as a light-dependent reaction in which hydrogen from an oxidisable compound (such as H<sub>2</sub>S) reduces CO<sub>2</sub> → E–IV.',
          'All five pairings agree with option (a).',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>Archetype 3: Calvin Stoichiometry (Numeric)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A number of molecules of glucose is given; ATP and/or NADPH are asked. Or per-CO<sub>2</sub> cost is asked directly.<br><br><b>Cracking approach:</b> Memorise the two anchor numbers: 18 ATP and 12 NADPH per glucose (6 turns). Scale linearly. Per CO<sub>2</sub>: divide by 6 → 3 ATP and 2 NADPH per CO<sub>2</sub>.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Reconstructed example (re-solved):</b> The total requirement of ATP and NADPH for each molecule of CO<sub>2</sub> fixed and reduced in the Calvin cycle is<br>(a) 2 ATP and 2 NADPH<br>(b) 2 ATP and 3 NADPH<br>(c) 3 ATP and 2 NADPH<br>(d) 4 ATP and 3 NADPH',
        steps: [
          'Per one CO<sub>2</sub> molecule entering the cycle:<br>• Carboxylation: no ATP/NADPH<br>• Reduction: 2 ATP + 2 NADPH<br>• Regeneration: 1 ATP<br>• Total per CO<sub>2</sub> = 3 ATP + 2 NADPH',
        ],
        ans: '(c)',
      },

      { t: 'p', html: '<b>Archetype 4: C<sub>3</sub> vs C<sub>4</sub> Distinction (Pairing)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Enzyme paired with cell type; or first product paired with pathway; or a statement describing one pathway is contrasted with the other.<br><br><b>Cracking approach:</b> Build a two-row comparison table and memorise it as paired opposites:',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'C3', 'C4'],
        rows: [
          ['CO<sub>2</sub> acceptor', 'RuBP (5C)', 'PEP (3C)'],
          ['First stable product', '3-PGA (3C)', 'OAA (4C)'],
          ['Primary fixing enzyme', 'RuBisCO', 'PEP carboxylase'],
          ['Photorespiration', 'Present', 'Negligible'],
          ['Kranz anatomy', 'Absent', 'Present'],
        ],
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Reconstructed example (re-solved):</b> In C<sub>4</sub> plants, the primary CO<sub>2</sub>-fixing enzyme and the cell type in which it acts are, respectively:<br>(a) RuBisCO; bundle sheath<br>(b) PEP carboxylase; mesophyll<br>(c) RuBisCO; mesophyll<br>(d) PEP carboxylase; bundle sheath',
        steps: [
          'C<sub>4</sub> plants use PEP carboxylase for the initial CO<sub>2</sub> fixation step in mesophyll cells. RuBisCO operates later in the bundle sheath (Calvin cycle).',
          '(a) reverses both enzyme and cell.',
          '(c) names RuBisCO, which is not the primary fixing enzyme, and puts it in the mesophyll, where C<sub>4</sub> plants have little RuBisCO.',
          '(d) reverses the cell type (PEPcase is mesophyll, not bundle sheath).',
        ],
        ans: '(b)',
      },

      { t: 'p', html: '<b>Archetype 5: Assertion–Reason</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two statements (A and R) followed by four answer options combining their truth and logical relationship.<br><br><b>Cracking approach:</b> Evaluate A and R independently first. Only if both are true, ask whether R directly explains A. Watch for: both true but R is unrelated (option b); A true but R false (option c).',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Reconstructed example (re-solved):</b> Assertion (A): Under hot, bright, dry conditions, C<sub>4</sub> plants outperform C<sub>3</sub> plants.<br>Reason (R): C<sub>4</sub> plants concentrate CO<sub>2</sub> around RuBisCO in the bundle sheath, suppressing photorespiration.<br>(a) Both A and R are true and R explains A<br>(b) Both A and R are true but R does not explain A<br>(c) A is true but R is false<br>(d) A is false but R is true',
        steps: [
          'A is true: C<sub>4</sub> crops (maize, sugarcane) yield more than C<sub>3</sub> crops (rice, wheat) under heat and bright light.',
          'R is true: the C<sub>4</sub> pump (PEPcase in mesophyll → OAA → bundle sheath decarboxylation) does raise CO<sub>2</sub> around RuBisCO, suppressing the oxygenase reaction.',
          'R is the direct mechanistic explanation for A.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: 'The distractor patterns below recur in NEET-style questions (the book’s own account, not an official count). Each trap is a specific confusion the examiner deliberately engineers.',
      },
      {
        t: 'mistakes',
        items: [
          '<b>“Oxygen comes from CO<sub>2</sub>”</b><br>A very commonly tested misconception. The equation’s correct form, 6CO<sub>2</sub> + 12H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> + 6H<sub>2</sub>O, is the built-in giveaway: the 6 O<sub>2</sub> released hold 12 oxygen atoms, exactly the oxygen of the 12 H<sub>2</sub>O on the left, while the 6 H<sub>2</sub>O on the right are newly formed and take their oxygen from CO<sub>2</sub>. Any option suggesting CO<sub>2</sub> as the oxygen source is a trap.',
          '<b>PS I and PS II functions reversed</b><br>PS II splits water and releases O<sub>2</sub>; PS I reduces NADP<sup>+</sup>. The trap: students hear “PS I” and assume it acts first. In fact PS II acts first (it splits water and passes electrons on to PS I); PS I receives them and passes them on to NADP<sup>+</sup>. Never swap the jobs.',
          '<b>ATP ∶ NADPH numbers inverted (18 ∶ 12 → 12 ∶ 18)</b><br>Per glucose: 18 ATP is the larger number, 12 NADPH is the smaller. Swapping them is a very common numeric error.',
          '<b>C<sub>3</sub> and C<sub>4</sub> product/acceptor confusion</b><br>• C<sub>3</sub> first product: 3-PGA (3 carbons)<br>• C<sub>4</sub> first product: OAA (4 carbons)<br>The name “C<sub>3</sub> pathway” and “C<sub>4</sub> pathway” refers to the product’s carbon count, not the acceptor’s. Mixing these gives a common distractor in C<sub>4</sub> questions.',
          '<b>Dark reaction placed in the grana</b><br>The Calvin cycle runs in the stroma; the light reaction runs on thylakoid membranes (grana). Putting carbon fixation in the grana is a persistent trap in statement-based questions.',
          '<b>“Cyclic photophosphorylation produces oxygen”</b><br>No water is split in cyclic flow, so no O<sub>2</sub> is released. Students who confuse cyclic and non-cyclic flow will select this trap.',
          '<b>Confusing absorption spectrum with action spectrum</b><br>Absorption spectrum = how much light a pigment absorbs at each wavelength. Action spectrum = how fast photosynthesis actually proceeds. They overlap (both peak in blue and red) but are not the same graph. A common trap presents the statement “chlorophyll absorbs green light, therefore leaves look green”: this is backwards.',
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      { t: 'p', html: 'Questions 1–4 are easy, 5–8 are medium, and 9–12 are hard.' },
      {
        t: 'practice',
        items: [
          {
            q: '[Easy] Priestley’s bell-jar experiment demonstrated that plants:<br>(a) require sunlight for photosynthesis<br>(b) restore air that has been “used up” by burning or breathing<br>(c) release oxygen directly from carbon dioxide<br>(d) store food as starch in all parts',
            a: '<b>(b)</b><br>Priestley showed a mint sprig could “restore” air in which a candle had burnt out. Light dependence (a) was shown by Ingenhousz; van Niel proposed that the O<sub>2</sub> comes from water; Sachs showed starch storage.',
          },
          {
            q: '[Easy] Which pigment is directly responsible for driving the light reaction?<br>(a) Chlorophyll b<br>(b) Xanthophyll<br>(c) Chlorophyll a<br>(d) Carotenoid',
            a: '<b>(c)</b><br>Chlorophyll a is the chief pigment, the one at the reaction centre of both photosystems. Accessory pigments (chlorophyll b and the carotenoids) funnel energy to chlorophyll a but do not drive the reaction themselves.',
          },
          {
            q: '[Easy] In PS I, the reaction-centre chlorophyll a has an absorption maximum at:<br>(a) P680<br>(b) P700<br>(c) P890<br>(d) P600',
            a: '<b>(b)</b><br>P700 denotes the absorption maximum of PS I (~700 nm). P680 belongs to PS II.',
          },
          {
            q: '[Easy] The process by which water is split during the light reaction is called:<br>(a) chemiosmosis<br>(b) photophosphorylation<br>(c) photolysis<br>(d) carboxylation',
            a: '<b>(c)</b><br>Photolysis of water (2H<sub>2</sub>O → 4H<sup>+</sup> + 4e<sup>−</sup> + O<sub>2</sub>) occurs at PS II and provides the electrons that start the Z-scheme. Chemiosmosis refers to ATP synthesis; carboxylation is a Calvin-cycle step.',
          },
          {
            q: '[Medium] During chemiosmosis in the chloroplast, protons accumulate in the:<br>(a) stroma<br>(b) thylakoid lumen<br>(c) intermembrane space of mitochondria<br>(d) cytoplasm',
            a: '<b>(b)</b><br>Water splitting (on the lumen side) and proton pumping by plastoquinone add H<sup>+</sup> to the thylakoid lumen, and NADP<sup>+</sup> reduction removes H<sup>+</sup> from the stroma, so the lumen ends up proton-rich and the stroma proton-poor. The gradient across the thylakoid membrane drives ATP synthase.',
          },
          {
            q: '[Medium] Cyclic photophosphorylation differs from non-cyclic photophosphorylation because it:<br>(a) involves both PS I and PS II<br>(b) produces ATP but no NADPH and no O<sub>2</sub><br>(c) splits water<br>(d) reduces NADP<sup>+</sup> to NADPH',
            a: '<b>(b)</b><br>Cyclic flow loops electrons through PS I only, generating extra ATP without NADPH or O<sub>2</sub>. It does not split water; that is exclusive to non-cyclic flow.',
          },
          {
            q: '[Medium] How many molecules of ATP are required to produce one molecule of glucose via the Calvin cycle?<br>(a) 6<br>(b) 12<br>(c) 18<br>(d) 24',
            a: '<b>(c)</b><br>Six turns of the Calvin cycle fix six CO<sub>2</sub> molecules to produce one glucose. Each turn consumes 3 ATP: 6 × 3 = 18 ATP.',
          },
          {
            q: '[Medium] A C<sub>3</sub> crop in a sealed, brightly lit greenhouse stops gaining biomass by afternoon despite ample light and water. The most likely limiting factor is:<br>(a) light intensity<br>(b) temperature<br>(c) CO<sub>2</sub> concentration<br>(d) chlorophyll content',
            a: '<b>(c)</b><br>In a sealed space, photosynthesis continuously removes CO<sub>2</sub> from the air. Once CO<sub>2</sub> is depleted, it becomes the limiting factor (Blackman’s law), and further light or water cannot raise the rate.',
          },
          {
            q: '[Hard] Assertion: Isolated thylakoids placed in the dark can still synthesise ATP if their lumen is made acidic and the surrounding medium is alkaline.<br>Reason: In chemiosmosis, the energy for ATP synthesis is stored in the trans-thylakoid proton gradient, not directly in light.<br>(a) Both A and R are true and R explains A<br>(b) Both A and R are true but R does not explain A<br>(c) A is true but R is false<br>(d) A is false but R is true',
            a: '<b>(a)</b><br>Both statements are true. The artificially imposed H<sup>+</sup> gradient (acidic lumen → alkaline stroma) drives protons out through ATP synthase in the dark, proving that energy resides in the gradient itself. This is classic experimental support for Mitchell’s chemiosmotic hypothesis.',
          },
          {
            q: '[Hard] The first stable product of CO<sub>2</sub> fixation in C<sub>4</sub> plants is oxaloacetic acid (OAA, 4 carbons). Which of the following correctly identifies the primary CO<sub>2</sub> acceptor and the cell type where initial fixation occurs?<br>(a) RuBP, bundle sheath cells<br>(b) PEP, mesophyll cells<br>(c) RuBP, mesophyll cells<br>(d) PEP, bundle sheath cells',
            a: '<b>(b)</b><br>In C<sub>4</sub> plants, PEP (phosphoenolpyruvate) is the initial CO<sub>2</sub> acceptor, acted on by PEP carboxylase in the mesophyll cells. The 4-carbon OAA is converted to malic or aspartic acid, which moves to the bundle sheath cells, where CO<sub>2</sub> is released for the Calvin cycle.',
          },
          {
            q: '[Hard] Photorespiration is described as a wasteful process because:<br>(a) it produces excess sugar<br>(b) it synthesises ATP rapidly<br>(c) it produces no sugar, ATP, or NADPH while consuming O<sub>2</sub> and releasing CO<sub>2</sub><br>(d) it occurs only in the dark',
            a: '<b>(c)</b><br>Photorespiration begins when RuBisCO binds O<sub>2</sub> instead of CO<sub>2</sub> (low <frac><num>CO<sub>2</sub></num><den>O<sub>2</sub></den></frac> ratio). It proceeds via glycolate through three organelles, releasing CO<sub>2</sub> without producing ATP, NADPH, or sugar, a net loss for the plant. Option (b) is a trap: photorespiration yields no ATP at all, unlike mitochondrial respiration.',
          },
          {
            q: '[Hard] In Engelmann’s action-spectrum experiment, aerobic bacteria accumulated mainly in which regions of the spectrum?<br>(a) Green and yellow<br>(b) Blue and red<br>(c) Only green<br>(d) Infrared',
            a: '<b>(b)</b><br>Bacteria accumulated where O<sub>2</sub> was most abundant (they are aerobic and swim toward O<sub>2</sub>). This occurred in the blue and red regions, where chlorophyll absorbs most. This was the first action spectrum: photosynthesis is fastest in the blue and red regions where chlorophyll absorbs most, and slowest in green, where bacteria are sparse.',
          },
        ],
      },

      { t: 'part', title: 'Three Facts to Lock In' },
      {
        t: 'p',
        html: '1. Per CO<sub>2</sub> fixed, the Calvin cycle costs 3 ATP ∶ 2 NADPH (18 ATP ∶ 12 NADPH per glucose). NEET-style questions ask the per-CO<sub>2</sub> ratio directly, and the usual wrong answer is the inverted 2 ∶ 3.<br>2. H<sup>+</sup> accumulates in the thylakoid lumen, not in the stroma. Water is split on the lumen side, plastoquinone carries H<sup>+</sup> into the lumen, and NADP<sup>+</sup> reduction removes H<sup>+</sup> from the stroma; ATP synthase then lets H<sup>+</sup> flow from the lumen back to the stroma.<br>3. Absorption spectrum versus action spectrum. The absorption spectrum shows how much light a pigment absorbs at each wavelength; the action spectrum shows how fast photosynthesis runs at each wavelength. The two overlap closely, but they are different graphs.',
      },
    ],
  },
];
