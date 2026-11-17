import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 11 (Photosynthesis in Higher Plants), Topics 03 and 04:
 * pp. 663 to 680 of the Class 11 Biology Master Reference, word for word.
 * Topic 03, Chemiosmotic Hypothesis & The Calvin Cycle (pp. 663–671), and
 * Topic 04, C4 Pathway, Photorespiration & Factors Affecting Photosynthesis
 * (pp. 672–680), are each cut at the book’s Sections 1 to 8. Figures 11.6 to
 * 11.9 (captions on pp. 664, 667, 674 and 676, drawn on pp. 665, 668, 675 and
 * 677) are redrawn in lib/diagrams/biology-11-11.ts; these pages draw nothing
 * else. Emphasis italics are dropped; the book’s em dashes are written as
 * colons, commas or brackets; the book numbers its options (a) to (d), kept.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 663–671 ─────────────────────────
  {
    n: '03',
    title: 'Chemiosmotic Hypothesis & The Calvin Cycle',
    kalam: 'Think of the thylakoid as a dam on a hill river.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Heavily tested. NEET almost always carries the Calvin-cycle three-phase sequence and the <b>6 CO<sub>2</sub> ∶ 18 ATP ∶ 12 NADPH</b> stoichiometry, plus an assertion–reason on chemiosmosis (the book’s estimate from past papers, not official figures). CBSE Boards expect a labelled C<sub>3</sub> cycle or a “how is ATP synthesised across the thylakoid” answer. CUET keeps it factual: first stable product, CO<sub>2</sub> acceptor, enzyme. The proton-gradient direction (lumen vs stroma) is a classic NEET trap.',
      },
      {
        t: 'p',
        html: 'In the previous topic the light reaction “printed the money”: ATP and NADPH. But we glossed over two questions. How exactly does the membrane turn a trickle of electrons into ATP? And once the money is printed, where does it get spent to actually build sugar? This topic answers both: the <b>chemiosmotic hypothesis</b> explains the printing press, and the <b>Calvin cycle</b> is the factory floor where the cash is spent on carbon.',
      },
      {
        t: 'p',
        html: '<b>The printing press: chemiosmosis.</b> Think of the thylakoid as a dam on a hill river. During the light reaction, protons (H<sup>+</sup>) keep getting pushed into the thylakoid’s inner space (the lumen) until the water behind the dam is piled high. There is only one sluice gate in the wall, an enzyme called <b>ATP synthase</b>, and when the trapped protons finally rush out through it, the gate spins like a turbine and forges ATP from ADP. The crucial idea (Peter Mitchell’s big insight) is that the energy is stored not in any single molecule but in the <b>gradient itself</b>: the lopsided pile of protons. No gradient, no ATP, no matter how much light you shine.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> it’s exactly like the Tehri or Bhakra Nangal dam. Sunlight does the job of the monsoon: it fills the reservoir (pumps protons into the lumen). The dam wall is the thylakoid membrane, watertight except for the turbine. Whether it’s day or pitch dark, the moment water is high enough behind the wall, opening the turbine generates power. That is why a famous experiment works: take thylakoids, make their inside acidic (proton-rich) and their outside alkaline, switch off every light, and they still churn out ATP. The reservoir was pre-filled; the turbine doesn’t care where the water came from.',
      },
      {
        t: 'p',
        html: '<b>The factory: Calvin cycle.</b> Now the spending. The Calvin cycle (also called the <b>C<sub>3</sub> pathway</b>, or the “dark”/light-independent reaction) takes plain CO<sub>2</sub> from the air and, using the ATP and NADPH banked by the light reaction, welds carbon atoms together into sugar. It runs in the <b>stroma</b>, the fluid around the thylakoids. Despite the nickname “dark reaction,” it doesn’t need darkness at all; it simply doesn’t use light directly. It runs perfectly well in daylight; what it cannot do is run for long once the light reaction stops feeding it ATP and NADPH, which is why plants don’t build much sugar at night.',
      },
      {
        t: 'p',
        html: 'The factory is a true cycle: it spends a starting molecule, makes product, and rebuilds the starting molecule so the line never stops, like a steel rolling mill that recycles its own mould after every casting. The 3-carbon sugar that finally leaves the cycle (triose phosphate) is later stitched together into sucrose for transport around the plant and starch for storage: the visible “food” a leaf manufactures.',
      },
      {
        t: 'p',
        html: 'There is a neat piece of evidence that pins this picture down. If you physically rupture chloroplasts and separate the stroma from the thylakoid membranes, the <b>isolated stroma can still fix CO<sub>2</sub> on its own</b>, but only when it is handed ATP and NADPH from outside. That single result proves two things at once: the carbon-fixing machinery genuinely sits in the stroma, and it runs on the <b>products</b> of the light reaction, not on light directly. It was <b>Melvin Calvin</b> who first identified the 3-carbon acid PGA as the earliest stable product of fixation, which is exactly why the pathway carries his name.',
      },
      { t: 'p', html: '<b>Limiting conditions & assumptions.</b>' },
      {
        t: 'p',
        html: '• Chemiosmosis assumes the membrane is <b>impermeable to protons except through ATP synthase</b>: a leaky thylakoid makes no ATP.<br>• The Calvin cycle is light-independent only in the sense of not using photons directly; it is utterly <b>dependent on the products</b> of the light reaction, so it stalls in prolonged darkness.<br>• The first fixation enzyme, RuBisCO, is the same one that causes wasteful photorespiration when O<sub>2</sub> outcompetes CO<sub>2</sub>, but that, and the C<sub>4</sub> work-around, belong to the next topic.',
      },

      { t: 'part', title: 'Key definitions, structures and pathways' },
      { t: 'p', html: '<b>Chemiosmosis: the components.</b>' },
      {
        t: 'p',
        html: '• <b>Proton (H<sup>+</sup>) gradient:</b> high H<sup>+</sup> concentration in the <b>thylakoid lumen</b>, low in the <b>stroma</b>. This difference is the stored energy.<br>• <b>ATP synthase:</b> the enzyme that makes ATP. Two parts: <b>F<sub>0</sub></b>, a channel embedded in the thylakoid membrane through which protons flow (it conducts/breaks down the gradient), and <b>F<sub>1</sub></b>, the knob facing the <b>stroma</b> that actually joins ADP + P<sub>i</sub> → ATP.<br>• <b>Electron carriers driving the pump:</b> as electrons move through the chain (including the cytochrome b<sub>6</sub>f complex and a hydrogen-carrier such as plastoquinone), their movement is <b>coupled to pumping protons into the lumen</b>.',
      },
      { t: 'fig', id: 'b11-11-fig-11.6' },
      {
        t: 'proc',
        title: 'Three sources that pile H+ into the lumen',
        steps: [
          '<b>Photolysis of water</b> at PS II happens on the lumen side → dumps H<sup>+</sup> directly inside.',
          'The <b>hydrogen carrier</b> ferries H<sup>+</sup> from the stroma across to the lumen as electrons travel.',
          '<b>NADP<sup>+</sup> reduction</b> to NADPH in the stroma consumes a stromal H<sup>+</sup> → lowers stroma H<sup>+</sup>, steepening the gradient.',
        ],
      },
      { t: 'p', html: '<b>Calvin cycle (C<sub>3</sub> pathway): the molecules.</b>' },
      {
        t: 'p',
        html: '• <b>CO<sub>2</sub> acceptor: RuBP</b> (ribulose-1,5-bisphosphate), a 5-carbon sugar.<br>• <b>Key enzyme: RuBisCO</b> (ribulose-1,5-bisphosphate carboxylase/oxygenase), the most abundant enzyme on Earth.<br>• <b>First stable product: 3-PGA</b> (3-phosphoglyceric acid), a <b>3-carbon</b> acid, which is why it’s the C<sub>3</sub> pathway.<br>• <b>Reduced product: PGAL / G3P</b> (triose phosphate, 3-carbon), the actual sugar building block.<br>• <b>Site: stroma</b> of the chloroplast.<br>• <b>Discovery:</b> that PGA is the first CO<sub>2</sub>-fixation product was established by <b>Melvin Calvin</b>.',
      },
      { t: 'p', html: '<b>The three phases (sequence is fixed: examiners test it):</b>' },
      { t: 'p', html: '<b>Carboxylation → Reduction → Regeneration</b>' },
      {
        t: 'p',
        html: '<b>The stoichiometry (high-yield numeric):</b> to build <b>one molecule of glucose</b>, the cycle turns <b>6 times</b>, fixing <b>6 CO<sub>2</sub></b> and spending <b>18 ATP</b> and <b>12 NADPH</b>.<br>6 CO<sub>2</sub> + 18 ATP + 12 NADPH + 12 H<sup>+</sup> → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 18 ADP + 18 P<sub>i</sub> + 12 NADP<sup>+</sup> + 6 H<sub>2</sub>O (balanced for C, H and O; the water used in splitting ATP into ADP + P<sub>i</sub> is left out)<br>Per single turn (1 CO<sub>2</sub>): 3 ATP + 2 NADPH',
      },

      { t: 'part', title: 'Key procedures and mechanisms' },
      {
        t: 'proc',
        title: '3.1 The Chemiosmotic Hypothesis: how ATP is actually made',
        steps: [
          '<b>Build the gradient.</b> During the light reaction, the three sources above crowd protons into the lumen. In particular, as electrons pass through the <b>cytochrome b<sub>6</sub>f complex</b> sitting between the two photosystems, that electron flow is harnessed to actively pump protons from the stroma across into the lumen. The lumen turns acidic (proton-rich); the stroma stays proton-poor. A steep H<sup>+</sup> gradient now exists across the thylakoid membrane.',
          '<b>Store the energy in the gradient.</b> Because the membrane is impermeable to H<sup>+</sup> everywhere except ATP synthase, the protons are trapped: energy is held purely in the imbalance, like water behind a dam.',
          '<b>Release through the turbine.</b> Protons flow back down their gradient, from lumen to stroma, only through the <b>F<sub>0</sub></b> channel of ATP synthase.',
          '<b>Forge ATP.</b> This proton flow drives the <b>F<sub>1</sub></b> head (in the stroma), which couples the energy to phosphorylate ADP: ADP + P<sub>i</sub> → <b>ATP</b>. The ATP is released into the stroma, exactly where the Calvin cycle will need it.',
        ],
      },
      {
        t: 'p',
        html: '<b>Proof the gradient is the real currency:</b> isolated thylakoids whose lumen is artificially acidified (≈ pH 4) and then bathed in an alkaline medium (≈ pH 8) <b>in complete darkness</b> still synthesise ATP, because the imposed proton gradient alone spins ATP synthase, no light required.',
      },
      { t: 'p', html: '<b>3.2 The Calvin Cycle: three phases, step by step</b>' },
      { t: 'fig', id: 'b11-11-fig-11.7' },
      {
        t: 'p',
        html: '<b>Phase 1: Carboxylation (fixing the carbon).</b> RuBisCO attaches one CO<sub>2</sub> molecule to the 5-carbon acceptor RuBP. The unstable 6-carbon intermediate immediately splits into <b>two molecules of 3-PGA</b> (the first stable, 3-carbon product). This is the actual moment “carbon is fixed” from air into an organic molecule. No ATP/NADPH is spent here.',
      },
      {
        t: 'p',
        html: '<b>Phase 2: Reduction (building the sugar).</b> Each 3-PGA is first energised by <b>ATP</b> (becoming a phosphorylated intermediate) and then reduced by <b>NADPH</b> to form <b>PGAL (triose phosphate)</b>. This is where the cycle spends the light reaction’s currency: per CO<sub>2</sub> fixed, this phase uses <b>2 ATP and 2 NADPH</b>. After enough turns, one triose phosphate molecule can exit the cycle to be assembled into glucose; the rest remain in the loop.',
      },
      {
        t: 'p',
        html: '<b>Phase 3: Regeneration (rebuilding the acceptor).</b> Most of the triose phosphate is rearranged through a series of reactions, using one more <b>ATP</b> per CO<sub>2</sub> fixed, to reform the 5-carbon CO<sub>2</sub> acceptor <b>RuBP</b>. This closes the loop so the cycle can capture the next CO<sub>2</sub>. Without regeneration the cycle would exhaust its acceptor and grind to a halt, which is why a working Calvin cycle is self-sustaining rather than a one-shot reaction.',
      },
      {
        t: 'p',
        html: '<b>Tying it together:</b> six turns (six CO<sub>2</sub> fixed) yield enough triose phosphate for one glucose, at a total cost of <b>18 ATP and 12 NADPH</b>, all supplied by chemiosmosis and the light reaction. (The C<sub>4</sub>/Hatch–Slack route that concentrates CO<sub>2</sub> before this cycle is covered separately.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Name the three phases of the Calvin cycle in order, and state which phase consumes NADPH.',
        steps: ['(Carboxylation spends none; regeneration spends ATP but not NADPH.)'],
        ans: 'The three phases, in sequence, are <b>Carboxylation → Reduction → Regeneration</b>. NADPH is consumed in the <b>Reduction</b> phase, where 3-PGA is reduced to triose phosphate (PGAL).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'How many ATP and NADPH molecules are needed to synthesise 50 molecules of glucose via the Calvin cycle?',
        steps: [
          '<b>Reasoning.</b> Anchor the per-glucose cost: <b>18 ATP + 12 NADPH</b>. Scale by 50:',
          'ATP = 18 × 50 = 900, NADPH = 12 × 50 = 600.',
          '<b>Speed tip:</b> lock “18 and 12 per glucose”: every Calvin numeric is just this pair times a number. Don’t try to count per turn under time pressure.',
        ],
        ans: '<b>900 ATP and 600 NADPH.</b>',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: 'The CO<sub>2</sub> acceptor in the Calvin cycle and the first stable product of CO<sub>2</sub> fixation are, respectively: (a) PGA and RuBP (b) RuBP and PGA (c) PEP and OAA (d) RuBP and PGAL',
        steps: [
          '<b>Reasoning.</b> The acceptor is the 5-carbon <b>RuBP</b>; the first stable product is the 3-carbon <b>3-PGA</b>.',
          'Option (a) reverses them (a classic flip), (c) is the C<sub>4</sub> pathway’s pair, (d) names the reduced product (PGAL), not the first stable one.',
        ],
        ans: '<b>(b).</b>',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: '<b>Assertion (A):</b> Isolated thylakoids placed in the dark can still synthesise ATP if their lumen is made acidic and the surrounding medium is alkaline. <b>Reason (R):</b> In chemiosmosis, the energy for ATP synthesis is stored in the trans-thylakoid proton gradient, not directly in light. Options: (a) both true, R explains A; (b) both true, R does not explain A; (c) A true, R false; (d) A false, R true.',
        steps: [
          'Both statements are true, and R is the correct explanation of A. An artificially imposed H<sup>+</sup> gradient (acidic lumen → alkaline stroma) drives protons out through ATP synthase and makes ATP with no light at all, precisely because the energy lives in the gradient. This is the experimental backbone of Mitchell’s chemiosmotic hypothesis.',
        ],
        ans: '<b>(a).</b>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State the site of the Calvin cycle and explain why it is called “light-independent” even though it stops in prolonged darkness.',
            a: 'Stroma; it uses no light directly but depends on ATP/NADPH from the light reaction.',
          },
          {
            q: '[NEET] How many turns of the Calvin cycle are required to produce one molecule of glucose? (a) 2 (b) 3 (c) 6 (d) 12',
            a: '<b>(c)</b> 6.',
          },
          {
            q: '[CUET] Which part of ATP synthase forms the proton channel within the thylakoid membrane? (a) F<sub>1</sub> (b) F<sub>0</sub> (c) Cyt b<sub>6</sub>f (d) Plastocyanin',
            a: '<b>(b)</b> F<sub>0</sub>.',
          },
          {
            q: '[NEET] <b>Assertion:</b> The thylakoid lumen becomes acidic during the light reaction. <b>Reason:</b> Photolysis of water and proton pumping both add H<sup>+</sup> to the lumen. Choose: (a) both true, R explains A (b) both true, R unrelated (c) A true, R false (d) A false, R true',
            a: '<b>(a)</b>.',
          },
          {
            q: '[NEET High-Difficulty] In the Calvin cycle, identify the one phase that does <b>not</b> consume ATP, and justify in one line.',
            a: '<b>Carboxylation</b>: RuBisCO simply joins CO<sub>2</sub> to RuBP; ATP/NADPH are spent only in reduction and regeneration.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'During chemiosmosis in the chloroplast, protons accumulate in the:',
        opts: [
          {
            label: 'stroma',
            nudge: '<b>(a)</b> stroma (trap: students confuse this with mitochondria or simply invert the gradient; the stroma is the proton-poor side).',
          },
          { label: 'thylakoid lumen', nudge: null },
          { label: 'cytoplasm', nudge: '<b>(c)</b> cytoplasm: outside the chloroplast entirely.' },
          {
            label: 'intermembrane space of mitochondria',
            nudge: '<b>(d)</b> mitochondrial space: wrong organelle; that’s respiration’s chemiosmosis.',
          },
        ],
        correct: 1,
        solution: 'Water-splitting and proton pumping load H<sup>+</sup> into the thylakoid <b>lumen</b>, building the gradient.',
      },
      {
        t: 'mcq',
        q: 'The first stable product of CO<sub>2</sub> fixation in the Calvin cycle is a compound with:',
        opts: [
          { label: '2 carbons', nudge: '<b>(a)</b> 2 carbons: no such intermediate at fixation.' },
          { label: '3 carbons', nudge: null },
          {
            label: '4 carbons',
            nudge: '<b>(c)</b> 4 carbons: that’s OAA, the first product of the C<sub>4</sub> pathway; the most common distractor here.',
          },
          { label: '5 carbons', nudge: '<b>(d)</b> 5 carbons: that’s the acceptor RuBP, not the product.' },
        ],
        correct: 1,
        solution: '3-PGA has <b>3 carbons</b>, hence “C<sub>3</sub> pathway.”',
      },
      {
        t: 'mcq',
        q: 'Which event does <b>not</b> contribute to building the proton gradient across the thylakoid membrane?',
        opts: [
          {
            label: 'Photolysis of water in the lumen',
            nudge: '<b>(a), (b), (c)</b> all add H<sup>+</sup> to the lumen side or remove it from the stroma side, steepening the gradient.',
          },
          {
            label: 'Proton pumping by the hydrogen carrier',
            nudge: '<b>(a), (b), (c)</b> all add H<sup>+</sup> to the lumen side or remove it from the stroma side, steepening the gradient.',
          },
          {
            label: 'Reduction of NADP<sup>+</sup> in the stroma',
            nudge: '<b>(a), (b), (c)</b> all add H<sup>+</sup> to the lumen side or remove it from the stroma side, steepening the gradient.',
          },
          { label: 'Diffusion of protons through F<sub>0</sub>', nudge: null },
        ],
        correct: 3,
        solution: 'Proton flow through <b>F<sub>0</sub></b> discharges the gradient (and makes ATP); it does not build it.',
      },
      {
        t: 'mcq',
        q: 'To synthesise one molecule of glucose, the Calvin cycle consumes:',
        opts: [
          { label: '12 ATP and 18 NADPH', nudge: '<b>(a)</b> swaps the two numbers: the single most common slip.' },
          { label: '18 ATP and 12 NADPH', nudge: null },
          { label: '6 ATP and 6 NADPH', nudge: '<b>(c)</b> under-counts by forgetting it’s 6 turns.' },
          { label: '18 ATP and 18 NADPH', nudge: '<b>(d)</b> wrongly assumes equal ATP and NADPH.' },
        ],
        correct: 1,
        solution: '<b>18 ATP and 12 NADPH</b> per glucose (6 turns).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Inverting the proton gradient.</b> H<sup>+</sup> is <b>high in the lumen, low in the stroma</b>. Many students reverse it. Anchor: “water is split inside (lumen), so H<sup>+</sup> piles up inside.”',
          '<b>Swapping the 18 and 12 numbers.</b> It’s <b>18 ATP and 12 NADPH</b> per glucose: ATP is the bigger number. Reversing to “12 and 18” is the classic exam error.',
          '<b>Thinking “dark reaction” needs darkness.</b> It is light-independent, not dark-requiring; it runs in daylight but depends on light-reaction products.',
          '<b>Confusing acceptor with first product.</b> Acceptor = <b>RuBP (5C)</b>; first stable product = <b>3-PGA (3C)</b>. Don’t mix these, and don’t confuse 3-PGA (Calvin) with OAA (C<sub>4</sub>).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Map the three Calvin phases to <b>“Catch, Cook, Rebuild”</b>: Catch CO<sub>2</sub> (carboxylation), Cook it with ATP+NADPH (reduction), Rebuild the acceptor RuBP (regeneration). The only phase that spends NADPH is the middle one (“cook”), and carboxylation spends nothing.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Chemiosmosis</b>',
            note: 'H<sup>+</sup> piled into <b>lumen</b> (water-splitting + H-carrier pumping + loss of stromal H<sup>+</sup> used in NADP<sup>+</sup> reduction) → flow back through <b>ATP synthase (F<sub>0</sub> channel + F<sub>1</sub> head in stroma)</b> → ATP. Energy = the <b>gradient</b> (works even in the dark).',
          },
          {
            f: '<b>ATP synthase</b>',
            note: 'F<sub>0</sub> = membrane channel (discharges gradient); F<sub>1</sub> = stroma-facing head (makes ATP).',
          },
          {
            f: '<b>Calvin cycle (C<sub>3</sub>)</b>',
            note: 'site <b>stroma</b>; light-independent but depends on ATP + NADPH.',
          },
          {
            f: '<b>Phases</b>',
            note: '<b>Carboxylation</b> → <b>Reduction</b> → <b>Regeneration</b>. Acceptor <b>RuBP (5C)</b>; enzyme <b>RuBisCO</b>; first stable product <b>3-PGA (3C)</b>; reduced product <b>PGAL/triose</b>.',
          },
          {
            f: '<b>Stoichiometry</b>',
            note: 'per glucose = <b>6 CO<sub>2</sub> + 18 ATP + 12 NADPH</b> (6 turns); per turn = 3 ATP + 2 NADPH.',
          },
          {
            f: '<b>Overall</b>',
            note: '6 CO<sub>2</sub> + 18 ATP + 12 NADPH + 12 H<sup>+</sup> → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 18 ADP + 18 P<sub>i</sub> + 12 NADP<sup>+</sup> + 6 H<sub>2</sub>O (balanced for C, H and O; the water used in splitting ATP into ADP + P<sub>i</sub> is left out)',
          },
        ],
        aids: [
          '<b>“Catch, Cook, Rebuild”</b>: the three Calvin phases in order.',
          '<b>“18 before 12”</b>: ATP (18) always exceeds NADPH (12) per glucose.',
          '<b>“Lumen Loads, Stroma Spends”</b>: protons accumulate in the lumen; ATP/NADPH are used in the stroma.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 672–680 ─────────────────────────
  {
    n: '04',
    title: 'C4 Pathway, Photorespiration & Factors Affecting Photosynthesis',
    kalam: 'Some plants evolved a brilliant work-around: the C4 pathway (the Hatch–Slack pathway).',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Among the most heavily tested parts of the chapter. NEET reliably asks the C<sub>3</sub>-vs-C<sub>4</sub> comparison, “why photorespiration is wasteful,” and the three organelles of photorespiration (the book’s estimate from past papers, not official figures). CBSE Boards favour Kranz anatomy and a C<sub>4</sub>-pathway flow answer. CUET keeps it factual (first product, enzyme, examples). The “photorespiration is negligible in C<sub>4</sub>: why?” assertion–reason is a common NEET-style high-difficulty item.',
      },
      {
        t: 'p',
        html: 'Here is photosynthesis’s dirty secret. The enzyme that fixes carbon in the Calvin cycle, <b>RuBisCO</b>, is not a careful worker. It is supposed to grab CO<sub>2</sub> and hand it to RuBP, but it cannot reliably tell CO<sub>2</sub> and O<sub>2</sub> apart. Whichever gas is more abundant around it tends to win the binding site. On a hot, bright afternoon a plant closes its stomata to save water; CO<sub>2</sub> inside the leaf then runs low while O<sub>2</sub> (a product of the light reaction) piles up. Now RuBisCO increasingly grabs <b>O<sub>2</sub> by mistake</b>, and that triggers a wasteful process called <b>photorespiration</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine a sorting clerk at a busy Indian post office whose job is to stamp parcels (CO<sub>2</sub>) but who is short-sighted and will stamp whatever is handed to him. When the parcel queue is long (high CO<sub>2</sub>), he does useful work. But on a slow day when mostly junk envelopes (O<sub>2</sub>) reach his desk, he keeps stamping junk, burning time, ink and electricity for nothing. Photorespiration is exactly that: in bright light the plant ends up <b>consuming O<sub>2</sub> and releasing CO<sub>2</sub></b>, producing no sugar, no ATP and no NADPH. Pure loss. It even spans <b>three different organelles</b> (chloroplast, peroxisome and mitochondrion), like a botched parcel bouncing between three departments before being thrown out.',
      },
      {
        t: 'p',
        html: 'Some plants evolved a brilliant work-around: the <b>C<sub>4</sub> pathway</b> (the Hatch–Slack pathway). Instead of letting RuBisCO face the air directly, these plants first capture CO<sub>2</sub> using a sharper enzyme, <b>PEP carboxylase</b>, in their outer <b>mesophyll</b> cells, pack it into a 4-carbon acid, and ferry it inward to specialised <b>bundle-sheath</b> cells. There the acid is broken down to dump a concentrated burst of CO<sub>2</sub> right around RuBisCO. Drowning in CO<sub>2</sub>, RuBisCO almost never grabs O<sub>2</sub>, so photorespiration is <b>suppressed</b>. This is why C<sub>4</sub> crops like <b>sugarcane, maize and sorghum</b> thrive in India’s hot, sunny conditions, doing better there than C<sub>3</sub> crops like rice and wheat.',
      },
      {
        t: 'p',
        html: 'The give-away of a C<sub>4</sub> plant under the microscope is <b>Kranz anatomy</b>: a wreath of large, chloroplast-rich bundle-sheath cells ringing each vein.',
      },
      {
        t: 'p',
        html: '<b>Think about it another way (factors).</b> Finally, no matter how good the machinery, photosynthesis runs only as fast as its scarcest input allows, like a thali assembly line that moves at the speed of whichever dish is in shortest supply. This is <b>Blackman’s Law of Limiting Factors</b>.',
      },
      { t: 'p', html: '<b>Limiting conditions & assumptions.</b>' },
      {
        t: 'p',
        html: '• Photorespiration needs <b>light, green cells, and a low <frac><num>CO<sub>2</sub></num><den>O<sub>2</sub></den></frac> ratio</b>: it is not ordinary (dark/mitochondrial) respiration.<br>• The C<sub>4</sub> advantage shows up mainly in <b>hot, high-light, water-limited</b> climates; in cool, CO<sub>2</sub>-rich conditions the extra ATP cost of C<sub>4</sub> gives it no edge.<br>• Blackman’s law assumes one factor is limiting at a time; when supply of that factor rises, another soon takes over as the bottleneck.',
      },

      { t: 'part', title: 'Key definitions, structures and pathways' },
      { t: 'p', html: '<b>The C<sub>4</sub> (Hatch–Slack) pathway.</b>' },
      {
        t: 'p',
        html: '• <b>CO<sub>2</sub> acceptor: PEP</b> (phosphoenolpyruvate), a 3-carbon molecule.<br>• <b>Fixing enzyme: PEP carboxylase (PEPcase)</b>, located in the <b>mesophyll</b> cell cytoplasm; has high affinity for CO<sub>2</sub> (actually for HCO<sub>3</sub><sup>−</sup>) and, crucially, <b>no oxygenase activity</b>.<br>• <b>First stable product: OAA</b> (oxaloacetic acid), a <b>4-carbon</b> acid, hence “C<sub>4</sub>.”<br>• <b>Two cell types (division of labour): mesophyll</b> cells do the initial CO<sub>2</sub> capture (PEPcase); <b>bundle-sheath</b> cells (RuBisCO, in the stroma) run the actual Calvin cycle at high CO<sub>2</sub>.<br>• <b>Kranz anatomy:</b> the diagnostic leaf structure of C<sub>4</sub> plants: bundle-sheath cells form a tight wreath around the vascular bundles. C<sub>3</sub> plants lack it.<br>• <b>CAM:</b> a related pathway in desert succulents and epiphytes that separates the two fixation steps in <b>time</b> (PEP carboxylase fixation at night, Calvin cycle by day) rather than in <b>space</b>.',
      },
      {
        t: 'table',
        title: 'C3 vs C4: the comparison examiners love',
        head: ['Feature', 'C3 plant', 'C4 plant'],
        rows: [
          ['First CO<sub>2</sub> acceptor', 'RuBP (5C)', 'PEP (3C)'],
          ['First stable product', '3-PGA (3C)', 'OAA (4C)'],
          ['Primary fixing enzyme', 'RuBisCO', 'PEP carboxylase'],
          ['Site(s) of photosynthesis', 'Mesophyll only', 'Mesophyll <b>and</b> bundle sheath'],
          ['Kranz anatomy', 'Absent', 'Present'],
          ['Photorespiration', 'Significant', 'Negligible / suppressed'],
          ['Examples', 'Rice, wheat', 'Maize, sugarcane, sorghum'],
        ],
      },
      { t: 'p', html: '<b>Photorespiration.</b>' },
      {
        t: 'p',
        html: '• <b>Definition:</b> the light-driven uptake of O<sub>2</sub> and release of CO<sub>2</sub> that occurs when <b>RuBisCO acts as an oxygenase</b>, fixing O<sub>2</sub> onto RuBP instead of CO<sub>2</sub>. Happens in <b>green cells</b>, in the light, when the <frac><num>CO<sub>2</sub></num><den>O<sub>2</sub></den></frac> ratio is low.<br>• <b>Why RuBisCO slips:</b> RuBisCO is the <b>most abundant enzyme on Earth</b>, and although it has a greater affinity for CO<sub>2</sub> than for O<sub>2</sub>, the <b>relative concentrations</b> of the two gases decide which one it actually binds. So whenever the <frac><num>CO<sub>2</sub></num><den>O<sub>2</sub></den></frac> ratio falls, the enzyme is increasingly tipped toward the wasteful oxygenase reaction.<br>• <b>The C<sub>2</sub> clue:</b> it proceeds via a <b>2-carbon compound, glycolate</b> (glycolic acid), earning the name “C<sub>2</sub> cycle.”<br>• <b>Three organelles: chloroplast → peroxisome → mitochondrion</b>.<br>• <b>Why “wasteful”:</b> it makes <b>no sugar, no ATP and no NADPH</b>; usable carbon is lost as CO<sub>2</sub> (and some nitrogen as ammonia). It lowers the net efficiency of C<sub>3</sub> photosynthesis.',
      },
      { t: 'p', html: '<b>Factors affecting photosynthesis.</b>' },
      {
        t: 'p',
        html: '• <b>External:</b> light (intensity, quality, duration), CO<sub>2</sub> concentration, temperature, water.<br>• <b>Internal:</b> amount of chlorophyll, number/age/orientation of leaves, mesophyll cells.<br>• <b>Blackman’s Law of Limiting Factors:</b> when a process depends on several factors, its rate is set by the factor that is <b>nearest its minimum value</b> (the limiting factor). Raise that factor and the rate climbs until another factor becomes limiting.',
      },

      { t: 'part', title: 'Key procedures and mechanisms' },
      {
        t: 'proc',
        title: '3.1 The C4 (Hatch–Slack) Pathway: step by step',
        steps: [
          '<b>Capture in the mesophyll.</b> Atmospheric CO<sub>2</sub> enters a mesophyll cell, where <b>PEP carboxylase</b> attaches it to the 3-carbon acceptor <b>PEP</b>, forming the 4-carbon <b>OAA</b>. Because PEPcase is sharp and has no oxygenase side-activity, it grabs CO<sub>2</sub> even at low concentrations.',
          '<b>Convert and transport.</b> OAA is converted to a stable 4-carbon acid (commonly <b>malic acid</b>) and shuttled through plasmodesmata into the inner <b>bundle-sheath</b> cells.',
          '<b>Decarboxylation = a CO<sub>2</sub> burst.</b> Inside the bundle sheath the 4-carbon acid is <b>decarboxylated</b>, releasing CO<sub>2</sub>. Because this happens in an enclosed cell, CO<sub>2</sub> concentration around RuBisCO shoots up.',
          '<b>Calvin cycle, protected.</b> This concentrated CO<sub>2</sub> now feeds the ordinary <b>Calvin cycle</b> (RuBisCO + RuBP) in the bundle-sheath stroma. Swamped with CO<sub>2</sub>, RuBisCO rarely binds O<sub>2</sub>, so <b>photorespiration is suppressed</b>.',
          '<b>Recycle the acceptor.</b> The leftover 3-carbon <b>pyruvate</b> travels back to the mesophyll and is regenerated to PEP (at the cost of ATP), ready for the next round.',
        ],
      },
      { t: 'fig', id: 'b11-11-fig-11.8' },
      {
        t: 'p',
        html: 'The trade-off: C<sub>4</sub> plants spend <b>extra ATP</b> to run this CO<sub>2</sub> pump, but they save far more by avoiding photorespiration, a winning bargain in hot, bright climates.',
      },
      { t: 'p', html: '<b>3.2 Photorespiration: the wasteful detour</b>' },
      {
        t: 'p',
        html: 'When CO<sub>2</sub> is scarce and O<sub>2</sub> abundant, RuBisCO’s <b>oxygenase</b> activity takes over:<br>1. <b>Wrong substrate.</b> RuBisCO adds <b>O<sub>2</sub></b> (not CO<sub>2</sub>) to RuBP in the chloroplast. Instead of two molecules of 3-PGA, this yields <b>one 3-PGA and one 2-carbon phosphoglycolate</b>.<br>2. <b>Bouncing across organelles.</b> The 2-carbon glycolate is exported to the <b>peroxisome</b> and then the <b>mitochondrion</b>, where reactions release <b>CO<sub>2</sub></b>, undoing earlier carbon fixation.<br>3. <b>Net result.</b> O<sub>2</sub> is consumed, CO<sub>2</sub> is released, and <b>no sugar, ATP or NADPH</b> is produced, and it uses ATP while making none. The process simply drains the plant, hence “a wasteful process.” Its precise biological function, if any, remains uncertain.',
      },
      {
        t: 'p',
        html: '<b>Why C<sub>4</sub> plants escape it:</b> by concentrating CO<sub>2</sub> in the bundle sheath, they keep RuBisCO’s <frac><num>CO<sub>2</sub></num><den>O<sub>2</sub></den></frac> ratio high, so the oxygenase reaction barely fires. This is the main reason C<sub>4</sub> crops do better than C<sub>3</sub> crops under hot, bright conditions.',
      },
      { t: 'p', html: '<b>3.3 Factors & Blackman’s Law of Limiting Factors</b>' },
      {
        t: 'p',
        html: 'The principle: at any moment, the rate of photosynthesis is governed by whichever factor is in shortest supply. Increase that factor and the rate rises, but only until a different factor becomes the new bottleneck.',
      },
      { t: 'fig', id: 'b11-11-fig-11.9' },
      {
        t: 'p',
        html: '• <b>Light intensity:</b> rate rises with light, then <b>plateaus</b>: beyond a point, “other factors become limiting” (e.g. CO<sub>2</sub>), so more light doesn’t help.<br>• <b>CO<sub>2</sub> concentration:</b> usually the major limiting factor in nature; raising it (up to a point) boosts the rate.<br>• <b>Water:</b> under <b>water stress</b>, stomata close, cutting CO<sub>2</sub> supply, so the photosynthetic rate falls (water acts indirectly, mostly through stomata).<br>• <b>Temperature:</b> affects the enzyme-driven (dark) reactions strongly; C<sub>4</sub> plants tolerate and prefer higher temperatures.<br>• <b>NCERT values:</b> C<sub>4</sub> plants respond to higher temperatures and show a higher rate of photosynthesis, while C<sub>3</sub> plants have a much lower temperature optimum; C<sub>4</sub> plants show CO<sub>2</sub> saturation at about 360 µL L<sup>−1</sup>, while C<sub>3</sub> plants respond to increasing CO<sub>2</sub> and saturate only beyond 450 µL L<sup>−1</sup>; light saturation occurs at about 10 per cent of full sunlight, so except for plants in shade or in dense forests, light is rarely a limiting factor in nature.<br>• <b>Worked illustration:</b> during the <b>monsoon</b>, dim cloudy skies make <b>light</b> the limiting factor, lowering the photosynthetic rate of crops such as rice.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Give any three differences between C<sub>3</sub> and C<sub>4</sub> plants with respect to (a) primary CO<sub>2</sub> acceptor, (b) first stable product, and (c) presence of Kranz anatomy.',
        steps: [
          '<b>Concluding line:</b> Because C<sub>4</sub> plants concentrate CO<sub>2</sub> in their Kranz bundle-sheath cells, they largely escape photorespiration and achieve higher productivity.',
        ],
        ans: '(a) <b>Acceptor:</b> C<sub>3</sub> uses <b>RuBP (5C)</b>; C<sub>4</sub> uses <b>PEP (3C)</b>. (b) <b>First stable product:</b> C<sub>3</sub> forms <b>3-PGA (3C)</b>; C<sub>4</sub> forms <b>OAA (4C)</b>. (c) <b>Kranz anatomy:</b> <b>absent</b> in C<sub>3</sub>; <b>present</b> in C<sub>4</sub>.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Photorespiration is described as a “wasteful” process because: (a) it produces excess sugar (b) it synthesises ATP rapidly (c) it produces no sugar, ATP or NADPH while consuming O<sub>2</sub> and releasing CO<sub>2</sub> (d) it occurs only in the dark',
        steps: [
          '<b>Reasoning.</b> The whole point is that it gives <b>nothing useful back</b>, no sugar, no ATP, no NADPH, yet consumes O<sub>2</sub> and releases CO<sub>2</sub>, undoing carbon fixation.',
          '(a) inverts reality; (b) is the trap for students who confuse it with normal respiration’s ATP yield (photorespiration yields none); (d) is wrong because it is light-dependent.',
        ],
        ans: '<b>(c).</b>',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: 'In C<sub>4</sub> plants, the primary CO<sub>2</sub>-fixing enzyme and the cell type in which it acts are, respectively: (a) RuBisCO; bundle sheath (b) PEP carboxylase; mesophyll (c) RuBisCO; mesophyll (d) PEP carboxylase; bundle sheath',
        steps: [
          '<b>Reasoning.</b> Initial fixation in C<sub>4</sub> is by <b>PEP carboxylase</b> in the <b>mesophyll</b> cells.',
          'RuBisCO does act in C<sub>4</sub> plants, but later, in the bundle sheath, making (a) and (c) wrong; (d) puts PEPcase in the wrong cell.',
        ],
        ans: '<b>(b).</b>',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: '<b>Assertion (A):</b> Under hot, bright, dry conditions, C<sub>4</sub> plants outperform C<sub>3</sub> plants. <b>Reason (R):</b> C<sub>4</sub> plants concentrate CO<sub>2</sub> around RuBisCO in the bundle sheath, suppressing photorespiration. Options: (a) both true, R explains A; (b) both true, R does not explain A; (c) A true, R false; (d) A false, R true.',
        steps: [
          'Both are true and R correctly explains A. In hot, dry conditions C<sub>3</sub> plants close stomata, CO<sub>2</sub> falls, O<sub>2</sub> rises, and RuBisCO’s oxygenase activity (photorespiration) wastes carbon. C<sub>4</sub> plants largely sidestep this by using PEPcase to pump CO<sub>2</sub> into the bundle sheath, keeping RuBisCO saturated with CO<sub>2</sub>, so they keep photosynthesising efficiently exactly when C<sub>3</sub> plants falter.',
        ],
        ans: '<b>(a).</b>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the enzyme responsible for the initial fixation of CO<sub>2</sub> in C<sub>4</sub> plants and state the cell type where it operates.',
            a: '<b>PEP carboxylase</b>, in <b>mesophyll</b> cells.',
          },
          {
            q: '[NEET] The three cell organelles involved in photorespiration are: (a) chloroplast, ribosome, vacuole (b) chloroplast, peroxisome, mitochondrion (c) mitochondrion, Golgi, lysosome (d) peroxisome, nucleus, chloroplast',
            a: '<b>(b)</b>.',
          },
          {
            q: '[CUET] According to Blackman’s law of limiting factors, the rate of photosynthesis at a given time is determined by: (a) the factor present in excess (b) the factor nearest its minimum value (c) temperature alone (d) chlorophyll content only',
            a: '<b>(b)</b>.',
          },
          {
            q: '[NEET] <b>Assertion:</b> Photorespiration is negligible in C<sub>4</sub> plants. <b>Reason:</b> C<sub>4</sub> plants maintain a high CO<sub>2</sub> concentration around RuBisCO in bundle-sheath cells. Choose: (a) both true, R explains A (b) both true, R unrelated (c) A true, R false (d) A false, R true',
            a: '<b>(a)</b>.',
          },
          {
            q: '[NEET High-Difficulty] A C<sub>3</sub> crop in a sealed, brightly lit greenhouse stops gaining biomass by afternoon despite ample light and water. Suggest the most likely limiting factor and justify in one line.',
            a: '<b>CO<sub>2</sub></b>: in a sealed space, photosynthesis depletes available CO<sub>2</sub>, which then becomes the limiting factor (Blackman’s law), so light and water no longer help.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The first stable product of CO<sub>2</sub> fixation in C<sub>4</sub> plants is:',
        opts: [
          {
            label: '3-PGA',
            nudge: '<b>(a)</b> 3-PGA is the C<sub>3</sub> first product: the dominant trap for students who blur C<sub>3</sub> and C<sub>4</sub>.',
          },
          { label: 'RuBP', nudge: '<b>(b)</b> RuBP is the C<sub>3</sub> acceptor, not a product.' },
          { label: 'Oxaloacetic acid', nudge: null },
          {
            label: 'Pyruvate',
            nudge: '<b>(d)</b> Pyruvate is the molecule returned to the mesophyll for PEP regeneration, not the first product.',
          },
        ],
        correct: 2,
        solution: 'C<sub>4</sub> fixation by PEPcase yields the 4-carbon <b>OAA</b> first.',
      },
      {
        t: 'mcq',
        q: 'Photorespiration begins when RuBisCO binds:',
        opts: [
          { label: 'CO<sub>2</sub>', nudge: '<b>(a)</b> CO<sub>2</sub> binding gives the normal Calvin cycle, not photorespiration.' },
          { label: 'O<sub>2</sub>', nudge: null },
          { label: 'PEP', nudge: '<b>(c)</b> PEP is the C<sub>4</sub> acceptor, handled by PEPcase, not RuBisCO.' },
          { label: 'malate', nudge: '<b>(d)</b> malate is a C<sub>4</sub> transport acid, unrelated to RuBisCO’s substrate choice.' },
        ],
        correct: 1,
        solution: 'When CO<sub>2</sub> is low and O<sub>2</sub> high, RuBisCO acts as an <b>oxygenase</b>, binding <b>O<sub>2</sub></b> to RuBP.',
      },
      {
        t: 'mcq',
        q: 'Kranz anatomy is a characteristic feature of:',
        opts: [
          { label: 'all green plants', nudge: '<b>(a)</b> and <b>(d)</b> are simply untrue generalisations.' },
          { label: 'C<sub>3</sub> plants only', nudge: '<b>(b)</b> reverses the fact: C<sub>3</sub> plants lack it.' },
          { label: 'C<sub>4</sub> plants', nudge: null },
          { label: 'only aquatic plants', nudge: '<b>(a)</b> and <b>(d)</b> are simply untrue generalisations.' },
        ],
        correct: 2,
        solution: 'The bundle-sheath “wreath” of <b>Kranz anatomy</b> is diagnostic of <b>C<sub>4</sub></b> plants.',
      },
      {
        t: 'mcq',
        q: 'At high light intensities the rate of photosynthesis stops increasing because:',
        opts: [
          {
            label: 'chlorophyll is destroyed instantly',
            nudge: '<b>(a)</b> destruction occurs only at extreme intensities and isn’t the routine reason for the plateau.',
          },
          { label: 'another factor such as CO<sub>2</sub> becomes limiting', nudge: null },
          {
            label: 'the plant stops needing energy',
            nudge: '<b>(c)</b> plants don’t “decide” they have enough: a teleological trap.',
          },
          { label: 'water becomes unlimited', nudge: '<b>(d)</b> is irrelevant and false.' },
        ],
        correct: 1,
        solution: 'Beyond a point light is no longer the bottleneck; <b>another factor (e.g. CO<sub>2</sub>) becomes limiting</b> (Blackman’s law).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Mixing up C<sub>3</sub> and C<sub>4</sub> numbers.</b> C<sub>3</sub> → acceptor RuBP (5C), product 3-PGA (3C); C<sub>4</sub> → acceptor PEP (3C), product OAA (4C). The naming refers to the <b>first product’s carbon count</b>, not the acceptor’s.',
          '<b>Calling photorespiration “respiration in light.”</b> It is not normal respiration: it makes no ATP. It is RuBisCO’s oxygenase blunder, costing the plant carbon.',
          '<b>Forgetting which enzyme/cell does what in C<sub>4</sub>.</b> PEPcase → <b>mesophyll</b> (first capture); RuBisCO → <b>bundle sheath</b> (Calvin cycle). Reversing these is a classic error.',
          '<b>Thinking C<sub>4</sub> plants don’t use the Calvin cycle.</b> They do: RuBisCO and the Calvin cycle still operate, just safely tucked inside the bundle sheath at high CO<sub>2</sub>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Remember C<sub>4</sub> as a <b>“CO<sub>2</sub> pre-paid pump”</b>: mesophyll PEPcase loads CO<sub>2</sub> into a 4-carbon acid, bundle sheath unloads it as a concentrated burst for RuBisCO. And for limiting factors, picture a <b>thali line moving at the speed of the slowest dish</b>: raising any other ingredient won’t speed things up until you fix the slow one.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>C<sub>4</sub> (Hatch–Slack)</b>',
            note: 'acceptor <b>PEP</b>, enzyme <b>PEPcase</b> (mesophyll), first product <b>OAA (4C)</b> → malate → bundle sheath → <b>decarboxylation</b> → CO<sub>2</sub> burst → Calvin cycle (RuBisCO). <b>Kranz anatomy</b> present. Examples: maize, sugarcane, sorghum.',
          },
          {
            f: '<b>Photorespiration</b>',
            note: 'RuBisCO <b>oxygenase</b> (binds O<sub>2</sub>) at low <frac><num>CO<sub>2</sub></num><den>O<sub>2</sub></den></frac> → 2C <b>glycolate</b> → spans <b>chloroplast + peroxisome + mitochondrion</b> → releases CO<sub>2</sub>, makes <b>no sugar/ATP/NADPH</b>. Significant in <b>C<sub>3</sub></b>, negligible (suppressed) in <b>C<sub>4</sub></b>.',
          },
          {
            f: '<b>Blackman’s Law</b>',
            note: 'rate set by the factor <b>nearest its minimum</b>; raise it and another factor soon limits.',
          },
          {
            f: '<b>Factors</b>',
            note: 'light, CO<sub>2</sub>, temperature, water (external); chlorophyll, leaf number/age (internal).',
          },
          {
            f: 'Light-intensity curve plateaus when a non-light factor (CO<sub>2</sub>) becomes limiting.',
            note: '',
          },
        ],
        aids: [
          '<b>“PEP loads, RuBisCO reaps”</b>: mesophyll PEPcase captures CO<sub>2</sub>; bundle-sheath RuBisCO uses it.',
          '<b>“4 = OAA, 3 = PGA”</b>: C<sub>4</sub>’s first product OAA has 4 carbons; C<sub>3</sub>’s PGA has 3.',
          '<b>“Photorespiration = O<sub>2</sub> in, CO<sub>2</sub> out, nothing gained.”</b>',
          '<b>“Slowest dish sets the thali speed”</b>: Blackman’s limiting factor.',
        ],
      },
    ],
  },
];
