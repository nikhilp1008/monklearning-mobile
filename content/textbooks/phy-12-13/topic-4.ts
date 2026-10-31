import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 13, Topic 04: pp. 841–847 of the Class 12 Physics Master Reference,
 * word for word: the book's sub-topic 4, "Nuclear Energy: Fission, Fusion, and
 * the Power of the Stars", split at its Sections 1 to 8. Figure 13.6 (caption
 * p. 842, drawn on the "CHAPTER 13 · FIGURES" page 843) is never referred to in
 * the text; it is set beside the text it illustrates, after the Concept
 * intuition's fission and fusion paragraphs, redrawn in
 * lib/diagrams/physics-12-13.ts. The book's "In the previous unit" (the
 * binding-energy curve) is rewritten "In Topic 02".
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 841–847 ─────────────────────────
  {
    n: '04',
    title: 'Nuclear Energy: Fission, Fusion, and the Power of the Stars',
    kalam: 'Fission is the splitting of a heavy nucleus.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A favourite across all exams. CBSE Boards ask for fission/fusion definitions, the nuclear reactor and its components, and energy-release calculations (3–5 marks). NEET sets conceptual questions on fuel, moderators, and fission-vs-fusion energetics. JEE Main asks Q-value and energy-per-fission numericals; JEE Advanced links reactor power to fission rate and fuel consumption.',
      },
      {
        t: 'p',
        html: 'In Topic 02, the binding-energy-per-nucleon curve handed us a master key: nuclei release energy whenever they rearrange themselves to climb toward the peak near iron. There are two ways to make that climb, and between them they power our reactors and every star in the sky.',
      },
      {
        t: 'p',
        html: '<b>Fission</b> is the splitting of a heavy nucleus. Fire a slow neutron at a uranium-235 nucleus and it wobbles, elongates, and breaks into two medium-sized fragments, flinging out two or three fresh neutrons and a burst of energy — about <b>200 MeV per fission</b>. Why so much? The fragments sit higher on the BE/A curve (around 8.5 MeV per nucleon) than uranium did (∼ 7.6 MeV), and that difference, multiplied over ∼ 236 nucleons, is the energy released.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture a tall, top-heavy stack of bricks (the heavy nucleus) held together against its own tendency to topple. A single nudge (the incoming neutron) sends it crashing into two stabler piles, and the crash releases the energy that was stored in its precarious arrangement. The freed bricks (neutrons) can then nudge neighbouring stacks — and that is a <b>chain reaction</b>.',
      },
      {
        t: 'p',
        html: 'Those two or three liberated neutrons are the secret to sustained power. If, on average, one of them goes on to split another nucleus, the reaction is self-sustaining and steady — this is a <b>controlled chain reaction</b>, the basis of a nuclear reactor. If more than one does, the rate multiplies explosively. The dividing line is set by the <b>critical mass</b>: too little fuel and neutrons escape before causing fission; enough fuel and the chain sustains itself.',
      },
      {
        t: 'p',
        html: '<b>Fusion</b> is the opposite climb: very light nuclei merge into a heavier one, moving up the steep left side of the curve. Fuse two hydrogen isotopes into helium and you release energy too — and per nucleon, fusion releases even more than fission. The catch is the entrance fee. Both nuclei are positively charged and ferociously repel each other; only at enormous temperatures (tens of millions of kelvin) do they slam together hard enough to fuse. This is why fusion is called <b>thermonuclear</b>, and why it happens naturally only in the crushing heat of stellar cores. Our Sun fuses hydrogen into helium through the <b>proton–proton chain</b>, converting about 4 million tonnes of mass into sunlight every second.',
      },
      { t: 'fig', id: 'p12-13-fig-13.6' },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Fission of <sup>235</sup>U is most efficient with slow (thermal) neutrons, so reactors must slow down the fast neutrons that fission produces. Fusion demands temperatures and confinement so extreme that controlled, commercially viable fusion on Earth is still unrealised — the plasma must be held together long enough and hot enough simultaneously. Fission, though practical, leaves behind long-lived radioactive waste.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Q-value of a nuclear reaction (energy released)',
        main: '<i>Q</i> = [(mass of reactants) − (mass of products)]<i>c</i><sup>2</sup> = Δ<i>m</i> × 931.5 MeV',
        legend: [
          '<i>Q</i> = energy released in the reaction',
          'Δ<i>m</i> = mass defect of the reaction, (mass of reactants) − (mass of products), in u',
          '<i>c</i> = speed of light in vacuum',
        ],
        note: '<i>Q</i> > 0: exothermic (energy released); <i>Q</i> < 0: endothermic (energy absorbed). Dimensional formula of <i>Q</i>: [M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>].',
      },
      {
        t: 'formula',
        kicker: 'A representative fission reaction',
        main: '<sup>1</sup><sub>0</sub><i>n</i> + <sup>235</sup><sub>92</sub>U → <sup>141</sup><sub>56</sub>Ba + <sup>92</sup><sub>36</sub>Kr + 3 <sup>1</sup><sub>0</sub><i>n</i> + <i>Q</i> (≈ 200 MeV)',
        legend: ['<sup>1</sup><sub>0</sub><i>n</i> = neutron', '<i>Q</i> = energy released per fission'],
        note: '(≈ 200 MeV per fission, averaged over the ways of splitting)',
      },
      {
        t: 'def',
        term: 'Neutron multiplication factor <i>k</i> (criticality)',
        html: '<i>k</i> = average number of neutrons from one fission that go on to cause another fission. <i>k</i> < 1: subcritical (reaction dies out); <i>k</i> = 1: critical (steady, controlled); <i>k</i> > 1: supercritical (runs away).',
      },
      {
        t: 'formula',
        kicker: 'Representative fusion reactions',
        main: '<sup>2</sup><sub>1</sub>H + <sup>2</sup><sub>1</sub>H → <sup>3</sup><sub>2</sub>He + <sup>1</sup><sub>0</sub><i>n</i> + 3.27 MeV<br><sup>2</sup><sub>1</sub>H + <sup>3</sup><sub>1</sub>H → <sup>4</sup><sub>2</sub>He + <sup>1</sup><sub>0</sub><i>n</i> + 17.6 MeV',
        legend: ['<sup>2</sup><sub>1</sub>H = deuterium', '<sup>3</sup><sub>1</sub>H = tritium', '<sup>1</sup><sub>0</sub><i>n</i> = neutron'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Net proton–proton cycle in the Sun (overall)',
        main: '4 <sup>1</sup><sub>1</sub>H + 2<i>e</i><sup>−</sup> → <sup>4</sup><sub>2</sub>He + 2<i>ν</i> + 6<i>γ</i> + 26.7 MeV',
        legend: [
          '<i>e</i><sup>−</sup> = electron (the two positrons made in the cycle annihilate with two electrons)',
          '<i>ν</i> = neutrino',
          '<i>γ</i> = gamma-ray photon',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Reactor components (definitions):</b> fuel (uranium enriched in <sup>235</sup>U); moderator (light water, heavy water, or graphite — slows neutrons to thermal speeds); control rods (cadmium or boron — absorb excess neutrons to hold <i>k</i> = 1); coolant (carries heat to a boiler); shielding (concrete, absorbs radiation).',
      },

      { t: 'part', title: 'Key procedures and mechanisms' },
      {
        t: 'proc',
        title: '3.1 Procedure: computing the Q-value of a reaction',
        steps: [
          '<b>Sum the rest masses of the reactants</b> and <b>of the products</b> (in u), using consistent atomic masses.',
          '<b>Take the difference:</b> Δ<i>m</i> = ∑ <i>m</i><sub>reactants</sub> − ∑ <i>m</i><sub>products</sub>.',
          '<b>Convert:</b> <i>Q</i> = Δ<i>m</i> × 931.5 MeV.',
          '<b>Interpret the sign:</b> positive ⇒ energy released as kinetic energy of the products; negative ⇒ energy must be supplied. The logic is pure mass-energy bookkeeping — any mass that disappears reappears as the kinetic energy carried off by the products.',
        ],
      },
      { t: 'p', html: '<b>3.2 How a controlled chain reaction works</b>' },
      {
        t: 'p',
        html: 'Each fission emits 2–3 fast neutrons. Left alone, most either escape the fuel or are too fast to be captured efficiently by <sup>235</sup>U. A reactor manages them in three steps:<br>• The <b>moderator</b> slows the fast neutrons to thermal speeds through elastic collisions, because slow neutrons are far more likely to cause <sup>235</sup>U fission.<br>• The <b>control rods</b> absorb just enough neutrons so that, on average, exactly one neutron per fission goes on to cause the next — keeping <i>k</i> = 1.<br>• The <b>coolant</b> removes the heat, which boils water to drive a turbine and generate electricity. Insert the rods further and the reaction slows (<i>k</i> < 1); withdraw them and it speeds up (<i>k</i> > 1). This delicate balance is what separates a power station from a bomb.',
      },
      { t: 'p', html: '<b>3.3 Why fusion needs the heat of stars</b>' },
      {
        t: 'p',
        html: 'Two positive nuclei must approach within ∼ a few femtometres for the attractive nuclear force to grab them — but the Coulomb repulsion forms a steep energy barrier guarding that distance. Only particles moving fast enough can punch through, and in practice “fast enough” means temperatures of order 10<sup>7</sup> K. Even then the average thermal kinetic energy (about 1 keV) is a few hundred times smaller than the barrier (several hundred keV): fusion happens only because the fastest nuclei in the thermal distribution tunnel through the barrier quantum-mechanically. In the Sun’s core, gravity supplies exactly this crushing temperature and pressure, igniting the proton–proton chain. On Earth, reproducing such conditions in a controlled way — confining a 10<sup>8</sup> K plasma with magnetic fields (tokamaks) or laser implosion (inertial confinement) — is the central challenge of fusion research.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'If each fission of <sup>235</sup>U releases 200 MeV, calculate the energy released by the complete fission of 1.0 g of <sup>235</sup>U.',
        steps: [
          '<b>Number of nuclei:</b> <i>N</i> = (1.0/235) × 6.022 × 10<sup>23</sup> = 2.563 × 10<sup>21</sup>.',
          '<b>Total energy:</b> <i>E</i> = <i>N</i> × 200 MeV = 2.563 × 10<sup>21</sup> × 200 = 5.13 × 10<sup>23</sup> MeV.',
          '<b>In joules:</b> <i>E</i> = 5.13 × 10<sup>23</sup> × 1.6 × 10<sup>−13</sup>',
        ],
        ans: 'About 8.2 × 10<sup>10</sup> J from a single gram — roughly the energy from burning 2.5 tonnes of coal. This is the staggering energy density that makes nuclear power compelling.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which statement is correct? (i) Fission is caused most efficiently by fast neutrons. (ii) Per nucleon, fusion releases more energy than fission. (iii) A moderator speeds up neutrons.',
        steps: [
          '<b>The trap:</b> students assume “fast neutrons = more powerful = better for fission,” and that a moderator (sounds like “accelerator’s opposite?”) still somehow speeds things up.',
          '• (i) <b>False</b> — <sup>235</sup>U fissions most readily with slow (thermal) neutrons.<br>• (ii) <b>True</b> — fusion climbs the steep part of the BE/A curve, releasing more energy per nucleon.<br>• (iii) <b>False</b> — a moderator slows neutrons down.',
          '<b>Speed rule:</b> slow neutrons for fission, and fusion wins per nucleon.',
        ],
        ans: 'Only (ii) is correct.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Calculate the energy released in the fusion reaction <sup>2</sup><sub>1</sub>H + <sup>3</sup><sub>1</sub>H → <sup>4</sup><sub>2</sub>He + <sup>1</sup><sub>0</sub><i>n</i>. Given atomic masses: <sup>2</sup>H = 2.014102 u, <sup>3</sup>H = 3.016049 u, <sup>4</sup>He = 4.002603 u, <i>n</i> = 1.008665 u. (Combines the Q-value procedure with reaction balancing.)',
        steps: [
          '<b>Mass of reactants:</b> 2.014102 + 3.016049 = 5.030151 u.',
          '<b>Mass of products:</b> 4.002603 + 1.008665 = 5.011268 u.',
          '<b>Mass defect:</b> Δ<i>m</i> = 5.030151 − 5.011268 = 0.018883 u.',
          '<b>Energy released:</b> <i>Q</i> = 0.018883 × 931.5',
        ],
        ans: '<i>Q</i> ≈ 17.6 MeV — the deuterium–tritium reaction, the most promising candidate for terrestrial fusion power precisely because of this large yield at (relatively) attainable temperatures.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A nuclear reactor delivers 300 MW of power. If each fission of <sup>235</sup>U releases 200 MeV, find (a) the number of fissions per second and (b) the mass of <sup>235</sup>U consumed per day. (Assume all of this power comes from <sup>235</sup>U fission.)',
        steps: [
          '<b>(a)</b> Energy per fission = 200 MeV = 200 × 1.6 × 10<sup>−13</sup> = 3.2 × 10<sup>−11</sup> J. Power = 300 MW = 3.0 × 10<sup>8</sup> J s<sup>−1</sup>, so<br>fissions per second = (3.0 × 10<sup>8</sup>)/(3.2 × 10<sup>−11</sup>) = 9.4 × 10<sup>18</sup> s<sup>−1</sup>.',
          '<b>(b)</b> Fissions per day = 9.4 × 10<sup>18</sup> × 86400 = 8.1 × 10<sup>23</sup>. Mass = (8.1 × 10<sup>23</sup>)/(6.022 × 10<sup>23</sup>) × 235 ≈ 1.35 × 235 ≈ 316 g.',
        ],
        ans: 'About 9.4 × 10<sup>18</sup> fissions per second, consuming roughly 0.32 kg of <sup>235</sup>U per day. (The actual fuel loaded is far larger, since only the fissile fraction is consumed.)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Distinguish between nuclear fission and nuclear fusion, giving one example reaction of each. State which releases more energy per nucleon.',
            a: 'Fusion releases more energy per nucleon.',
          },
          {
            q: '[NEET] In a nuclear reactor, name the materials commonly used as (i) moderator and (ii) control rods, and state the function of each.',
            a: '(i) graphite/heavy water — slows neutrons; (ii) cadmium/boron rods — absorb neutrons to control rate.',
          },
          {
            q: '[JEE Main] Calculate the Q-value of the reaction <sup>2</sup><sub>1</sub>H + <sup>2</sup><sub>1</sub>H → <sup>3</sup><sub>2</sub>He + <sup>1</sup><sub>0</sub><i>n</i>. Given <sup>2</sup>H = 2.014102 u, <sup>3</sup>He = 3.016029 u, <i>n</i> = 1.008665 u.',
            a: 'Δ<i>m</i> = 0.003510 u ⇒ <i>Q</i> ≈ 3.27 MeV.',
          },
          {
            q: '[JEE Main] How much energy (in joules) is released when 2.0 kg of a substance is completely converted to energy according to <i>E</i> = <i>mc</i><sup>2</sup>?',
            a: '<i>E</i> = 2.0 × (3 × 10<sup>8</sup>)<sup>2</sup> = 1.8 × 10<sup>17</sup> J.',
          },
          {
            q: '[JEE Advanced] A star radiates energy at 4 × 10<sup>26</sup> W by fusing hydrogen to helium, with the net cycle 4 <sup>1</sup>H → <sup>4</sup>He releasing 26.7 MeV. Estimate the mass of hydrogen consumed per second.',
            a: '≈ 6 × 10<sup>11</sup> kg s<sup>−1</sup> of hydrogen (each cycle ≈ 26.7 MeV = 4.3 × 10<sup>−12</sup> J consumes 4 <i>m</i><sub>H</sub> ≈ 6.7 × 10<sup>−27</sup> kg).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In the fission of <sup>235</sup>U, the energy released appears mainly as:',
        opts: [
          { label: 'gamma rays only', nudge: 'Distractor <b>(a)</b> — gammas carry only a small share.' },
          { label: 'kinetic energy of the fission fragments and neutrons', nudge: null },
          { label: 'sound energy', nudge: 'Distractor <b>(c)</b> is non-physical at the nuclear scale.' },
          { label: 'potential energy stored in products', nudge: 'Distractor <b>(d)</b> misreads the energy release as storage.' },
        ],
        correct: 1,
        solution: 'Most of the ∼ 200 MeV appears as kinetic energy of the recoiling fragments and emitted neutrons, later turning into heat.',
      },
      {
        t: 'mcq',
        q: 'The role of a moderator in a nuclear reactor is to:',
        opts: [
          { label: 'absorb neutrons to stop the reaction', nudge: 'Distractor <b>(a)</b> describes control rods.' },
          { label: 'speed up neutrons', nudge: 'Distractor <b>(b)</b> is the opposite of a moderator’s job.' },
          { label: 'slow down fast neutrons', nudge: null },
          { label: 'generate neutrons', nudge: 'Distractor <b>(d)</b> — neutrons come from fission, not the moderator.' },
        ],
        correct: 2,
        solution: 'A moderator slows fast neutrons to thermal speeds so they fission <sup>235</sup>U efficiently.',
      },
      {
        t: 'mcq',
        q: 'Compared with fission, nuclear fusion is harder to achieve on Earth mainly because:',
        opts: [
          { label: 'it releases less total energy', nudge: 'Distractor <b>(a)</b> is not the reason: per kilogram of fuel fusion releases more energy than fission (per single reaction it releases less, 17.6 MeV against about 200 MeV), and how much energy a reaction releases has nothing to do with how hard it is to start.' },
          { label: 'the nuclei must overcome strong Coulomb repulsion at very high temperature', nudge: null },
          { label: 'it produces no neutrons', nudge: 'Distractor <b>(c)</b> is false for D–T fusion, which produces a neutron, and irrelevant to the difficulty anyway.' },
          { label: 'it violates conservation of charge', nudge: 'Distractor <b>(d)</b> is false; charge is conserved.' },
        ],
        correct: 1,
        solution: 'Fusing two positive nuclei requires temperatures of ∼ 10<sup>7</sup> K to beat the Coulomb barrier.',
      },
      {
        t: 'mcq',
        q: 'For a self-sustaining controlled chain reaction, the neutron multiplication factor <i>k</i> must be:',
        opts: [
          { label: '<i>k</i> > 1', nudge: 'Distractor <b>(a)</b> is supercritical (runaway).' },
          { label: '<i>k</i> = 1', nudge: null },
          { label: '<i>k</i> < 1', nudge: 'Distractor <b>(c)</b> dies out.' },
          { label: '<i>k</i> = 0', nudge: 'Distractor <b>(d)</b> means no reaction at all.' },
        ],
        correct: 1,
        solution: '<i>k</i> = 1 means exactly one neutron per fission triggers the next — steady output.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Thinking fast neutrons are best for fission.</b> <sup>235</sup>U fissions most readily with slow (thermal) neutrons — hence the moderator. Mixing up the moderator’s and control rods’ jobs is the most common reactor mistake.',
          '<b>Believing fusion is “easier” because the nuclei are small.</b> Small nuclei still carry positive charge; the Coulomb barrier makes fusion harder to ignite than fission, despite the larger energy yield per nucleon.',
          '<b>Sign errors in the Q-value.</b> <i>Q</i> = (reactant masses − product masses)<i>c</i><sup>2</sup>. If your products are heavier, <i>Q</i> is negative and energy must be supplied — don’t force a positive answer.',
          '<b>Forgetting to convert MeV to joules</b> in power/energy problems, or mixing per-fission and per-gram quantities. Track your units explicitly.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For “energy from <i>m</i> grams” problems, compute the number of nuclei (<i>N</i> = (<i>m</i>/<i>M</i>)<i>N</i><sub>A</sub>) first, then multiply by the per-event energy. For reactor power problems, run it the other way: divide the power by the per-fission energy to get the fission rate. Same chain of logic, opposite direction.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Q-value', note: '<i>Q</i> = Δ<i>m</i> × 931.5 MeV; <i>Q</i> > 0 releases energy.' },
          { f: 'Fission', note: 'heavy nucleus + slow neutron → two fragments + 2–3 neutrons + ∼ 200 MeV.' },
          { f: 'Chain reaction', note: 'sustained when <i>k</i> = 1 (critical); needs the critical mass of fuel.' },
          {
            f: 'Reactor parts',
            note: 'fuel (<sup>235</sup>U), moderator (slows neutrons), control rods (absorb neutrons, Cd/B), coolant, shielding.',
          },
          {
            f: 'Fusion',
            note: 'light nuclei → heavier + energy; needs ∼ 10<sup>7</sup> K (thermonuclear); powers stars via the p–p cycle (≈ 26.7 MeV).',
          },
          { f: '<b>Per nucleon, fusion > fission</b> in energy yield.', note: '' },
        ],
        aids: ['“Slow neutrons split uranium; hot nuclei fuse”', '“Moderator <b>slows</b>, control rods <b>soak up</b>.”'],
      },
    ],
  },
];
