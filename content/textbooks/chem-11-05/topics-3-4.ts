import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Topics 03 and 04: pp. 227–238 of the Class 11 Chemistry Master
 * Reference, word for word: Entropy, Gibbs Free Energy, Spontaneity & the
 * Second/Third Laws (pp. 227–232) and Calorimetry, Thermodynamic Processes &
 * Additional Enthalpy Changes (pp. 233–238), each split at its Sections 1 to 8.
 * Neither topic prints a drawing (the lattice–hydration cycle on p. 235 is a
 * typeset line), so there are no fig blocks here.
 *
 * Notation: IUPAC/NCERT signs throughout (w is work done ON the system,
 * ΔU = q + w), as the book states on p. 234. Δ upright; H, S, G, U, q, w, p,
 * P, V, T, n, R, K, Q italic. Label subscripts upright (Δ<sub>sol</sub><i>H</i>,
 * Δ<i>S</i><sub>surr</sub>, <i>q</i><sub>rev</sub>, <i>C</i><sub>cal</sub>,
 * Δ<i>n</i><sub>g</sub>, <i>p</i><sub>ext</sub>, <i>T</i><sub>b</sub>); the held-constant
 * variable stays italic, in the book's case (<i>q</i><sub><i>V</i></sub>,
 * <i>q</i><sub><i>P</i></sub>, <i>C</i><sub><i>v</i></sub>, <i>C</i><sub><i>p</i></sub>),
 * as in the Physics thermodynamics chapters. Standard state ° written after
 * the symbol (Δ<i>G</i>°). Formulas upright (NH<sub>4</sub>Cl; the book sets
 * some in maths italic).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 227–232 ─────────────────────────
  {
    n: '03',
    title: 'Entropy, Gibbs Free Energy, Spontaneity & the Second/Third Laws',
    kalam: 'ΔG < 0 says a reaction can happen, not that it happens quickly.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The conceptual climax of the chapter and a guaranteed scorer. CBSE Boards set 2–3 mark questions on Δ<i>G</i> = Δ<i>H</i> − <i>T</i>Δ<i>S</i>, the meaning of entropy, or the third law. NEET asks 1–2 questions yearly on spontaneity and the sign of Δ<i>S</i>. JEE Main reliably carries a Δ<i>G</i>, Δ<i>S</i>, or crossover-temperature numerical. JEE Advanced layers it — Δ<i>S</i><sub>total</sub>, the Δ<i>G</i>°–<i>K</i> link, and temperature-dependent spontaneity in one multi-step problem.',
      },
      {
        t: 'p',
        html: 'In Topics 01 and 02 we learned to count energy: the first law conserves it, and thermochemistry tracks the heat of reactions. But energy bookkeeping alone cannot answer the most natural question in chemistry — which way will a reaction actually go on its own? A process that happens by itself, needing no continuous outside push, is <b>spontaneous</b>: iron rusting, ice melting on a summer afternoon in Chennai, a drop of ink spreading through water.',
      },
      {
        t: 'p',
        html: 'Your first instinct might be “spontaneous = exothermic,” since so many natural reactions release heat. But that instinct breaks immediately: ice melting absorbs heat yet is spontaneous above 0 °C; dissolving NH<sub>4</sub>Cl in water is endothermic yet happens eagerly (the beaker turns cold). So energy lowering cannot be the whole story. Nature is chasing a second prize, and that prize is <b>disorder</b>.',
      },
      {
        t: 'p',
        html: '<b>Entropy (<i>S</i>)</b> is the measure of that disorder — more precisely, the number of ways the particles and their energy can be arranged. A tidy hostel room left to itself drifts towards mess, never the reverse; a deck of cards shuffled never spontaneously sorts itself; incense smoke lit in one corner of a room always spreads to fill it. Each is entropy increasing because the disordered arrangement is overwhelmingly more probable. Solids (rigid, ordered) have low entropy, liquids more, and gases by far the most.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Spontaneity is a tug-of-war between two desires: systems “want” to lower their energy (Δ<i>H</i> < 0, favourable) and “want” to increase their disorder (Δ<i>S</i> > 0, favourable). Temperature is the referee deciding how much the disorder term counts. The <b>second law of thermodynamics</b> declares the final verdict at the scale of the whole universe: in any spontaneous process, the total entropy of the universe increases, Δ<i>S</i><sub>universe</sub> > 0; at equilibrium (or for an idealised reversible change) it stays put, Δ<i>S</i><sub>universe</sub> = 0. The arrow of every natural change points towards greater total entropy.',
      },
      {
        t: 'p',
        html: 'Tracking both system and surroundings is clumsy, though. So chemists folded the surroundings’ entropy into a single system-only quantity, the <b>Gibbs free energy</b>, <i>G</i> = <i>H</i> − <i>TS</i>. Its beauty is that for a process at constant temperature and pressure, the universe’s entropy test collapses to one tidy rule about the system alone: Δ<i>G</i> < 0 <b>means spontaneous.</b> The defining equation Δ<i>G</i> = Δ<i>H</i> − <i>T</i>Δ<i>S</i> is the tug-of-war written in symbols, with <i>T</i> as the referee’s weighting on disorder.',
      },
      {
        t: 'p',
        html: 'Finally, the <b>third law</b> gives entropy something the first two laws never gave energy: an absolute zero point. At 0 K a perfectly ordered pure crystal has only one possible arrangement, so its entropy is exactly zero. That datum lets us tabulate absolute entropies of substances — unlike <i>U</i> and <i>H</i>, where we only ever had changes.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> (1) The Δ<i>G</i> < 0 criterion holds at <b>constant <i>T</i> and <i>P</i></b>; the Δ<i>S</i><sub>universe</sub> > 0 form is the truly general statement. (2) The third law’s zero applies to a perfect, pure crystalline solid — solutions, supercooled liquids and glasses retain residual entropy at 0 K. (3) Most important: Δ<i>G</i> predicts <b>thermodynamic feasibility, not speed.</b> The conversion of diamond to graphite has Δ<i>G</i> < 0 — perfectly spontaneous — yet takes geological ages. Spontaneity is a question for thermodynamics; how fast is a question for kinetics.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'def',
        term: 'Spontaneous process',
        html: 'one that occurs on its own under a given set of conditions, without sustained external intervention.',
      },
      {
        t: 'def',
        term: 'Entropy (<i>S</i>)',
        html: 'a measure of disorder / number of accessible microstates; a <b>state function</b> and an <b>extensive</b> property. For a reversible exchange of heat at temperature <i>T</i>:',
      },
      {
        t: 'formula',
        kicker: 'Entropy change, reversible exchange of heat',
        main: 'Δ<i>S</i> = <i>q</i><sub>rev</sub>/<i>T</i>',
        legend: ['Δ<i>S</i> = entropy change (SI unit J K<sup>−1</sup> mol<sup>−1</sup>)', '<i>q</i><sub>rev</sub> = heat exchanged reversibly', '<i>T</i> = temperature of the exchange'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Entropy of a phase transition (at the transition temperature)',
        main: 'Δ<i>S</i><sub>trans</sub> = Δ<i>H</i><sub>trans</sub>/<i>T</i><sub>trans</sub><br>e.g. Δ<i>S</i><sub>fus</sub> = Δ<i>H</i><sub>fus</sub>/<i>T</i><sub>m</sub>',
        legend: [
          'Δ<i>H</i><sub>trans</sub> = enthalpy of the transition',
          '<i>T</i><sub>trans</sub> = transition temperature',
          '<i>T</i><sub>m</sub> = melting point (for fusion)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Second law of thermodynamics',
        main: 'Δ<i>S</i><sub>total</sub> = Δ<i>S</i><sub>system</sub> + Δ<i>S</i><sub>surroundings</sub><br>Δ<i>S</i><sub>total</sub> > 0 spontaneous<br>Δ<i>S</i><sub>total</sub> = 0 equilibrium / reversible<br>Δ<i>S</i><sub>total</sub> < 0 non-spontaneous<br>with, at constant pressure:<br>Δ<i>S</i><sub>surr</sub> = −Δ<i>H</i><sub>sys</sub>/<i>T</i>',
        legend: [
          'Δ<i>S</i><sub>total</sub> = total entropy change (system + surroundings)',
          'Δ<i>H</i><sub>sys</sub> = enthalpy change of the system',
          '<i>T</i> = temperature',
        ],
        note: null,
      },
      {
        t: 'def',
        term: 'Third law of thermodynamics',
        html: 'the entropy of a perfectly crystalline pure substance is zero at 0 K. This enables <b>absolute (standard) molar entropies</b>, <i>S</i>°.',
      },
      {
        t: 'formula',
        kicker: 'Gibbs free energy (<i>G</i>)',
        main: '<i>G</i> = <i>H</i> − <i>TS</i><br>For a change at constant <i>T</i>:<br>Δ<i>G</i> = Δ<i>H</i> − <i>T</i>Δ<i>S</i>',
        legend: [
          '<i>G</i> = Gibbs free energy, a state function and extensive',
          '<i>H</i> = enthalpy',
          '<i>S</i> = entropy',
          '<i>T</i> = temperature',
        ],
        note: null,
      },
      {
        t: 'def',
        term: 'Criterion of spontaneity (constant <i>T</i>, <i>P</i>)',
        html: 'Δ<i>G</i> < 0 spontaneous; Δ<i>G</i> = 0 equilibrium; Δ<i>G</i> > 0 non-spontaneous. Also, −Δ<i>G</i> equals the <b>maximum non-expansion (useful) work</b> obtainable.',
      },
      {
        t: 'formula',
        kicker: 'Gibbs energy and the equilibrium constant',
        main: 'Δ<i>G</i>° = −<i>RT</i> ln <i>K</i> = −2.303 <i>RT</i> log <i>K</i>',
        legend: ['Δ<i>G</i>° = standard Gibbs energy change', '<i>R</i> = gas constant', '<i>T</i> = temperature', '<i>K</i> = equilibrium constant'],
        note: null,
      },
      {
        t: 'table',
        title: 'Temperature dependence — the four cases of ΔG = ΔH − TΔS',
        head: ['ΔH', 'ΔS', 'Result'],
        rows: [
          ['−', '+', 'Spontaneous at <b>all</b> temperatures'],
          ['−', '−', 'Spontaneous only at <b>low</b> <i>T</i>'],
          ['+', '+', 'Spontaneous only at <b>high</b> <i>T</i>'],
          ['+', '−', '<b>Non</b>-spontaneous at all temperatures'],
        ],
      },
      {
        t: 'formula',
        kicker: 'Crossover temperature',
        main: 'The crossover temperature (where Δ<i>G</i> = 0) is:<br><i>T</i> = Δ<i>H</i>/Δ<i>S</i>',
        legend: ['Δ<i>H</i> = enthalpy change', 'Δ<i>S</i> = entropy change'],
        note: null,
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'p',
        html: '<b>3.1 Why Δ<i>G</i> < 0 means spontaneous (deriving Gibbs from the second law)</b><br>Start from the universal test, with the surroundings’ entropy written in terms of the system’s enthalpy (constant <i>P</i>):<br>Δ<i>S</i><sub>total</sub> = Δ<i>S</i><sub>sys</sub> + Δ<i>S</i><sub>surr</sub> = Δ<i>S</i><sub>sys</sub> − Δ<i>H</i><sub>sys</sub>/<i>T</i> > 0 (spontaneous)<br>Multiply throughout by −<i>T</i> (<i>T</i> is positive, so −<i>T</i> is negative and the inequality flips):<br>Δ<i>H</i><sub>sys</sub> − <i>T</i>Δ<i>S</i><sub>sys</sub> < 0<br>The left side is exactly Δ<i>G</i> for the system. Hence Δ<i>G</i> < 0 for a spontaneous change. <b>Why this is powerful:</b> it converts a statement about the entire universe into one needing only system quantities — Δ<i>H</i> and Δ<i>S</i> — which is why Δ<i>G</i> is the working criterion of chemistry.',
      },
      {
        t: 'p',
        html: '<b>3.2 Reading the four-case table</b><br>Because Δ<i>G</i> = Δ<i>H</i> − <i>T</i>Δ<i>S</i>, the sign of Δ<i>G</i> depends on the signs of Δ<i>H</i> and Δ<i>S</i> and on how large <i>T</i> is. When both terms pull the same way (row 1 favourable, row 4 unfavourable), temperature cannot overturn the result. When they conflict (rows 2 and 3), temperature is the deciding referee, and the tipping point is the crossover <i>T</i> = Δ<i>H</i>/Δ<i>S</i>. <b>Procedure:</b> identify the signs, check whether they agree; if they conflict, compute <i>T</i> = Δ<i>H</i>/Δ<i>S</i> (keep Δ<i>H</i> and Δ<i>S</i> in the same energy unit!) to find the boundary.',
      },
      {
        t: 'p',
        html: '<b>3.3 From Δ<i>G</i> to the equilibrium constant</b><br>The general relation is Δ<i>G</i> = Δ<i>G</i>° + <i>RT</i> ln <i>Q</i>, where <i>Q</i> is the reaction quotient. At equilibrium the system has no further drive to change, so Δ<i>G</i> = 0 and <i>Q</i> = <i>K</i>:<br>0 = Δ<i>G</i>° + <i>RT</i> ln <i>K</i> ⇒ Δ<i>G</i>° = −<i>RT</i> ln <i>K</i><br>A negative Δ<i>G</i>° therefore gives <i>K</i> > 1 (products favoured), and a positive Δ<i>G</i>° gives <i>K</i> < 1.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'For a reaction at 298 K, Δ<i>H</i> = −92.4 kJ mol<sup>−1</sup> and Δ<i>S</i> = −198.3 J K<sup>−1</sup> mol<sup>−1</sup>. Calculate Δ<i>G</i> and state whether the reaction is spontaneous.',
        steps: [
          '<b>Convert Δ<i>S</i> to kJ:</b> −198.3 J K<sup>−1</sup> = −0.1983 kJ K<sup>−1</sup>.',
          'Δ<i>G</i> = Δ<i>H</i> − <i>T</i>Δ<i>S</i> = −92.4 − (298)(−0.1983) = −92.4 + 59.1',
        ],
        ans: 'Δ<i>G</i> = −33.3 kJ mol<sup>−1</sup>. Since Δ<i>G</i> < 0, the reaction is <b>spontaneous</b> at 298 K. (The single most common slip — leaving Δ<i>S</i> in J while Δ<i>H</i> is in kJ — would have given nonsense.)',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'An endothermic reaction has Δ<i>H</i> = +30.0 kJ mol<sup>−1</sup> and Δ<i>S</i> = +100 J K<sup>−1</sup> mol<sup>−1</sup>. Above what temperature does it become spontaneous?',
        steps: [
          '<b>Speed approach:</b> signs conflict (Δ<i>H</i> unfavourable, Δ<i>S</i> favourable) → row 3 of the table → spontaneous at <b>high</b> <i>T</i>, with the boundary at<br><i>T</i> = Δ<i>H</i>/Δ<i>S</i> = (30000 J)/(100 J K<sup>−1</sup>)',
          '<b>Trap watch:</b> convert Δ<i>H</i> to joules to match Δ<i>S</i> (or both to kJ); and recognise instantly that “+Δ<i>H</i>, +Δ<i>S</i>” is the high-temperature case — don’t grind through a full Δ<i>G</i> calculation when the table gives it in seconds.',
        ],
        ans: 'Spontaneous <b>above 300 K</b>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — multi-concept',
        q: 'A reaction at 350 K has Δ<i>H</i> = −150 kJ mol<sup>−1</sup> and Δ<i>S</i><sub>sys</sub> = −90 J K<sup>−1</sup> mol<sup>−1</sup>. Decide spontaneity using the total-entropy criterion, and confirm with Δ<i>G</i>.',
        steps: [
          '<b>Surroundings’ entropy:</b> Δ<i>S</i><sub>surr</sub> = −Δ<i>H</i><sub>sys</sub>/<i>T</i> = −(−150000)/350 = +428.6 J K<sup>−1</sup> mol<sup>−1</sup>.',
          '<b>Total:</b> Δ<i>S</i><sub>total</sub> = Δ<i>S</i><sub>sys</sub> + Δ<i>S</i><sub>surr</sub> = −90 + 428.6 = +338.6 J K<sup>−1</sup> mol<sup>−1</sup> > 0 → spontaneous.',
          '<b>Cross-check with Δ<i>G</i>:</b> Δ<i>G</i> = Δ<i>H</i> − <i>T</i>Δ<i>S</i><sub>sys</sub> = −150 − (350)(−0.090) = −150 + 31.5 = −118.5 kJ mol<sup>−1</sup> < 0. ✓',
        ],
        ans: 'Spontaneous by both routes. The point of the exercise is that Δ<i>S</i><sub>total</sub> > 0 and Δ<i>G</i> < 0 are the same statement — the strongly exothermic reaction dumps enough heat into the surroundings to raise the universe’s entropy even though the system itself becomes more ordered.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'At 298 K a reaction has Δ<i>H</i>° = +55.0 kJ mol<sup>−1</sup> and Δ<i>S</i>° = +175 J K<sup>−1</sup> mol<sup>−1</sup>. (a) Find Δ<i>G</i>° and the equilibrium constant <i>K</i> at 298 K. (b) Find the temperature at which <i>K</i> = 1.',
        steps: [
          '<b>(a)</b> Δ<i>G</i>° = Δ<i>H</i>° − <i>T</i>Δ<i>S</i>° = 55000 − (298)(175) = 55000 − 52150 = +2850 J mol<sup>−1</sup>.',
          'ln <i>K</i> = −Δ<i>G</i>°/(<i>RT</i>) = −2850/((8.314)(298)) = −1.150 ⇒ <i>K</i> = <i>e</i><sup>−1.150</sup> ≈ 0.32',
          'So at 298 K, Δ<i>G</i>° = +2.85 kJ mol<sup>−1</sup> and <i>K</i> ≈ 0.32 (reactant-favoured, as expected for Δ<i>G</i>° > 0).',
          '<b>(b)</b> <i>K</i> = 1 ⇒ ln <i>K</i> = 0 ⇒ Δ<i>G</i>° = 0 ⇒ <i>T</i> = Δ<i>H</i>°/Δ<i>S</i>° = 55000/175',
        ],
        ans: '<i>K</i> ≈ 0.32 at 298 K; <i>K</i> = 1 at about <b>314 K</b>. Above this temperature Δ<i>G</i>° turns negative and products become favoured — the rigor lies in chaining the Δ<i>G</i>–<i>K</i> relation to the crossover-temperature idea in one problem.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A reaction has Δ<i>H</i> = +31.4 kJ mol<sup>−1</sup> and Δ<i>S</i> = +96 J K<sup>−1</sup> mol<sup>−1</sup> at 298 K. Find Δ<i>G</i> and state whether it is spontaneous.',
            a: 'Δ<i>G</i> = +2.79 kJ mol<sup>−1</sup> → non-spontaneous at 298 K',
          },
          {
            q: '[NEET] Calculate the entropy change when 2 mol of ice melts at its melting point (273 K), given Δ<sub>fus</sub><i>H</i> = 6.0 kJ mol<sup>−1</sup>.',
            a: 'Δ<i>S</i> = 2(6000)/273 ≈ +44.0 J K<sup>−1</sup>',
          },
          {
            q: '[JEE Main] For the decomposition CaCO<sub>3</sub>(s) → CaO(s) + CO<sub>2</sub>(g), Δ<i>H</i> = +178 kJ mol<sup>−1</sup> and Δ<i>S</i> = +160 J K<sup>−1</sup> mol<sup>−1</sup>. Above what temperature is it spontaneous?',
            a: '<i>T</i> > 178000/160 ≈ 1113 K',
          },
          {
            q: '[JEE Main] A reaction releases Δ<i>H</i> = −286 kJ mol<sup>−1</sup> at 298 K. Calculate the entropy change of the surroundings.',
            a: 'Δ<i>S</i><sub>surr</sub> = +286000/298 ≈ +960 J K<sup>−1</sup>',
          },
          {
            q: '[JEE Advanced] At 298 K a reaction has Δ<i>G</i>° = −13.8 kJ mol<sup>−1</sup>. Calculate its equilibrium constant <i>K</i>.',
            a: 'ln <i>K</i> = 13800/((8.314)(298)) = 5.57 ⇒ <i>K</i> ≈ 2.6 × 10<sup>2</sup>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'For a process to be spontaneous at constant temperature and pressure, the necessary condition is:',
        opts: [
          {
            label: 'Δ<i>S</i><sub>system</sub> > 0',
            nudge: '<b>(a)</b> the system’s entropy may fall (as in worked example 3) provided the surroundings gain more.',
          },
          { label: 'Δ<i>G</i> < 0', nudge: null },
          {
            label: 'Δ<i>H</i> < 0',
            nudge: '<b>(c)</b> exothermicity is neither necessary nor sufficient (endothermic spontaneous processes exist).',
          },
          {
            label: 'Δ<i>S</i><sub>universe</sub> < 0',
            nudge: '<b>(d)</b> has the sign backwards — the universe’s entropy increases.',
          },
        ],
        correct: 1,
        solution: 'At constant <i>T</i>, <i>P</i> the single valid criterion is Δ<i>G</i> < 0.',
      },
      {
        t: 'mcq',
        q: 'According to the third law of thermodynamics, the entropy of a perfectly crystalline pure substance at absolute zero is:',
        opts: [
          { label: 'zero', nudge: null },
          {
            label: 'a small positive value',
            nudge: '<b>(b)</b> is true only for impure/imperfect solids and glasses (residual entropy).',
          },
          { label: 'negative', nudge: '<b>(c)</b> entropy is never negative on the absolute scale.' },
          { label: 'infinite', nudge: '<b>(d)</b> describes the high-temperature limit, not 0 K.' },
        ],
        correct: 0,
        solution: 'A perfect crystal at 0 K has a single arrangement, so <i>S</i> = 0.',
      },
      {
        t: 'mcq',
        q: 'A reaction has Δ<i>H</i> < 0 and Δ<i>S</i> < 0. It will be spontaneous:',
        opts: [
          { label: 'at all temperatures', nudge: '<b>(a)</b> is the Δ<i>H</i> < 0, Δ<i>S</i> > 0 case.' },
          { label: 'only at high temperature', nudge: '<b>(b)</b> is the Δ<i>H</i> > 0, Δ<i>S</i> > 0 case.' },
          { label: 'only at low temperature', nudge: null },
          { label: 'never', nudge: '<b>(d)</b> is Δ<i>H</i> > 0, Δ<i>S</i> < 0.' },
        ],
        correct: 2,
        solution: 'With Δ<i>G</i> = Δ<i>H</i> − <i>T</i>Δ<i>S</i> and Δ<i>S</i> < 0, the −<i>T</i>Δ<i>S</i> term is positive and grows with <i>T</i>; only at <b>low</b> <i>T</i> does the favourable Δ<i>H</i> win.',
      },
      {
        t: 'mcq',
        q: 'If the equilibrium constant <i>K</i> of a reaction is greater than 1, then its standard Gibbs energy change Δ<i>G</i>° is:',
        opts: [
          { label: 'negative', nudge: null },
          { label: 'positive', nudge: '<b>(b)</b> corresponds to <i>K</i> < 1.' },
          { label: 'zero', nudge: '<b>(c)</b> to <i>K</i> = 1.' },
          { label: 'cannot be determined', nudge: '<b>(d)</b> ignores the direct logarithmic relation.' },
        ],
        correct: 0,
        solution: 'From Δ<i>G</i>° = −<i>RT</i> ln <i>K</i>, <i>K</i> > 1 ⇒ ln <i>K</i> > 0 ⇒ Δ<i>G</i>° < 0.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>The kJ/J unit clash.</b> Δ<i>H</i> is almost always quoted in kJ and Δ<i>S</i> in J. Convert one before using Δ<i>G</i> = Δ<i>H</i> − <i>T</i>Δ<i>S</i> — this is the number-one error in the whole topic.',
          '<b>Sign of Δ<i>S</i><sub>surr</sub>.</b> It is −Δ<i>H</i><sub>sys</sub>/<i>T</i>: an exothermic reaction (Δ<i>H</i><sub>sys</sub> < 0) gives a positive Δ<i>S</i><sub>surr</sub>. Drop the minus sign and your spontaneity verdict flips.',
          '<b>Confusing spontaneity with rate.</b> Δ<i>G</i> < 0 says a reaction can happen, not that it happens quickly. Diamond → graphite is spontaneous yet effectively never observed.',
          '<b>Mixing up the four cases.</b> Remember the two unambiguous anchors: (−, +) = always spontaneous; (+, −) = never. The conflicting pair is decided by <i>T</i> versus Δ<i>H</i>/Δ<i>S</i>.',
          '<b>Over-applying the third law.</b> <i>S</i> = 0 at 0 K is for perfect, pure crystals only — not solutions or glassy solids.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + sanity):</b> For “above/below what temperature” questions, skip the full Δ<i>G</i> computation — go straight to the crossover <i>T</i> = Δ<i>H</i>/Δ<i>S</i> (same units!). And sanity-check any <i>K</i>: a negative Δ<i>G</i>° must give <i>K</i> > 1; if your arithmetic says otherwise, you have a sign error.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Spontaneity (const <i>T</i>, <i>P</i>)',
            note: 'Δ<i>G</i> = Δ<i>H</i> − <i>T</i>Δ<i>S</i>; Δ<i>G</i> < 0 spontaneous, = 0 equilibrium, > 0 non-spontaneous.',
          },
          {
            f: 'Second law',
            note: 'Δ<i>S</i><sub>total</sub> = Δ<i>S</i><sub>sys</sub> + Δ<i>S</i><sub>surr</sub> > 0 for spontaneous; Δ<i>S</i><sub>surr</sub> = −Δ<i>H</i><sub>sys</sub>/<i>T</i>.',
          },
          {
            f: 'Entropy',
            note: 'state function, Δ<i>S</i> = <i>q</i><sub>rev</sub>/<i>T</i>; phase transition Δ<i>S</i> = Δ<i>H</i><sub>trans</sub>/<i>T</i>; gas > liquid > solid.',
          },
          { f: 'Third law', note: 'perfect pure crystal ⇒ <i>S</i> = 0 at 0 K ⇒ absolute entropies exist.' },
          {
            f: 'Equilibrium link',
            note: 'Δ<i>G</i>° = −<i>RT</i> ln <i>K</i> = −2.303 <i>RT</i> log <i>K</i>; crossover <i>T</i> = Δ<i>H</i>/Δ<i>S</i>.',
          },
          { f: 'Four cases', note: '(−, +) always · (−, −) low <i>T</i> · (+, +) high <i>T</i> · (+, −) never.' },
        ],
        aids: [
          '“Δ<i>G</i> = enthalpy pulls down, entropy pulls up, <i>T</i> is the referee.”',
          '“Exothermic warms the surroundings → +Δ<i>S</i><sub>surr</sub>.”',
          '“Δ<i>G</i> tells you if, not how fast.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 233–238 ─────────────────────────
  {
    n: '04',
    title: 'Calorimetry, Thermodynamic Processes & Additional Enthalpy Changes',
    kalam: 'For an ideal gas, ΔU and ΔH depend only on ΔT, never on the path — a fact that turns many process problems into one-line answers.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The “applications” capstone of the chapter. CBSE Boards set bomb-calorimeter and solution-enthalpy numericals. NEET asks process identification and the sign of solution/hydration enthalpies (cold packs, hot packs). JEE Main reliably tests work in the four standard processes. JEE Advanced layers adiabatic Poisson relations, solution enthalpy via lattice + hydration cycles, and Kirchhoff/Trouton enrichments.',
      },
      {
        t: 'p',
        html: 'The first three topics built the machinery; this one puts it to work, answering three practical questions a chemist actually faces.',
      },
      {
        t: 'p',
        html: '<b>First: how do we measure the heat of a reaction?</b> We trap the reaction inside an insulated vessel — a <b>calorimeter</b> — and watch the temperature change. Two designs matter. A <b>bomb calorimeter</b> is a sealed, rigid steel chamber: because its volume cannot change, no expansion work is done, so the heat it registers is exactly Δ<i>U</i> (recall <i>q</i><sub><i>V</i></sub> = Δ<i>U</i> from Topic 01). A simple open <b>constant-pressure calorimeter</b> (the lab “coffee-cup”) sits at atmospheric pressure, so the heat it registers is Δ<i>H</i> (<i>q</i><sub><i>P</i></sub> = Δ<i>H</i>). The instrument literally chooses which quantity you measure.',
      },
      {
        t: 'p',
        html: '<b>Second: what are the standard ways a gas can change state?</b> Think of four rules of a game, each freezing one variable. <b>Think about it this way…</b> picture a gas in a cylinder with a piston:<br>• <b>Isothermal</b> — keep the temperature fixed (cylinder sitting in a large water bath). Heat flows freely to hold <i>T</i> constant.<br>• <b>Adiabatic</b> — wrap the cylinder in perfect insulation so no heat crosses (<i>q</i> = 0); the gas can only change its energy by doing or receiving work, so it cools on expansion and heats on compression. A diesel engine compressing air until it is hot enough to ignite fuel is nearly adiabatic.<br>• <b>Isobaric</b> — hold the pressure fixed (a free, weighted piston); the gas expands or contracts as it is heated.<br>• <b>Isochoric</b> — lock the piston so the volume is fixed (<i>w</i> = 0); all heat goes straight into internal energy.',
      },
      {
        t: 'p',
        html: '<b>Third: what happens, energetically, when something dissolves?</b> Dissolving an ionic solid is a tug-of-war between two steps: the crystal lattice must be pulled apart (costs energy — the lattice enthalpy from Topic 02, endothermic) and the freed ions are then surrounded and stabilised by water (releases energy — <b>hydration</b>, exothermic). The <b>enthalpy of solution</b> is the net of the two. When lattice-breaking wins, dissolving cools the water — this is exactly how an instant cold pack (NH<sub>4</sub>NO<sub>3</sub> in water) works; when hydration wins, the solution warms (CaCl<sub>2</sub>, used in hand warmers).',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> (1) Calorimetry assumes the vessel is perfectly insulated and that we know its heat capacity (its “water equivalent”). (2) The clean process formulas (<i>w</i> = −<i>nRT</i> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>), <i>w</i> = <i>nC</i><sub><i>v</i></sub>Δ<i>T</i>, etc.) are for an <b>ideal gas</b>; the adiabatic Poisson relations additionally assume a reversible path. (3) For an ideal gas, Δ<i>U</i> and Δ<i>H</i> depend <b>only on</b> Δ<i>T</i>, never on the path — a fact that turns many process problems into one-line answers.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'formula',
        kicker: 'Calorimetry',
        main: 'Heat exchanged:<br><i>q</i> = <i>C</i>Δ<i>T</i> = <i>mc</i>Δ<i>T</i>',
        legend: [
          '<i>C</i> = heat capacity of the body (J K<sup>−1</sup>)',
          '<i>c</i> = specific heat (J g<sup>−1</sup> K<sup>−1</sup>)',
          '<i>m</i> = mass',
          'Δ<i>T</i> = temperature change',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'The <b>water equivalent</b> is the mass of water having the same heat capacity as the calorimeter.',
      },
      {
        t: 'formula',
        kicker: 'Bomb calorimeter (constant volume)',
        main: '<i>q</i><sub><i>V</i></sub> = Δ<i>U</i> = −<i>C</i><sub>cal</sub> Δ<i>T</i><sub>cal</sub>',
        legend: [
          '<i>q</i><sub><i>V</i></sub> = heat of the reaction at constant volume',
          '<i>C</i><sub>cal</sub> = the calorimeter’s heat capacity',
          'Δ<i>T</i><sub>cal</sub> = temperature rise of the calorimeter',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Constant-pressure calorimeter',
        main: '<i>q</i><sub><i>P</i></sub> = Δ<i>H</i><br>Convert between them with:<br>Δ<i>H</i> = Δ<i>U</i> + Δ<i>n</i><sub>g</sub><i>RT</i> (Topic 01)',
        legend: [
          '<i>q</i><sub><i>P</i></sub> = heat of the reaction at constant pressure',
          'Δ<i>n</i><sub>g</sub> = change in the number of moles of gas',
          '<i>R</i> = gas constant',
          '<i>T</i> = temperature',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>The four idealised processes (ideal gas).</b> With <i>w</i> = work done on the system:',
      },
      {
        t: 'table',
        title: null,
        head: ['Process', 'Constraint', 'w (on system)', 'q', 'ΔU', 'ΔH'],
        rows: [
          [
            'Isothermal (rev.)',
            'Δ<i>T</i> = 0',
            '−<i>nRT</i> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>)',
            '−<i>w</i>',
            '0',
            '0',
          ],
          [
            'Adiabatic',
            '<i>q</i> = 0',
            '<i>nC</i><sub><i>v</i></sub>Δ<i>T</i>',
            '0',
            '<i>nC</i><sub><i>v</i></sub>Δ<i>T</i>',
            '<i>nC</i><sub><i>p</i></sub>Δ<i>T</i>',
          ],
          [
            'Isobaric',
            'Δ<i>P</i> = 0',
            '−<i>p</i> Δ<i>V</i> = −<i>nR</i>Δ<i>T</i>',
            '<i>nC</i><sub><i>p</i></sub>Δ<i>T</i>',
            '<i>nC</i><sub><i>v</i></sub>Δ<i>T</i>',
            '<i>nC</i><sub><i>p</i></sub>Δ<i>T</i>',
          ],
          [
            'Isochoric',
            'Δ<i>V</i> = 0',
            '0',
            '<i>nC</i><sub><i>v</i></sub>Δ<i>T</i>',
            '<i>nC</i><sub><i>v</i></sub>Δ<i>T</i>',
            '<i>nC</i><sub><i>p</i></sub>Δ<i>T</i>',
          ],
        ],
      },
      {
        t: 'formula',
        kicker: 'Reversible adiabatic (Poisson) relations',
        main: '<i>PV</i><sup><i>γ</i></sup> = const<br><i>TV</i><sup><i>γ</i>−1</sup> = const<br><i>P</i><sup>1−<i>γ</i></sup><i>T</i><sup><i>γ</i></sup> = const',
        legend: ['<i>γ</i> = ratio of heat capacities, <i>C</i><sub><i>p</i></sub>/<i>C</i><sub><i>v</i></sub>'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Additional enthalpy changes (thermochemistry, extending Topic 02):</b>',
      },
      {
        t: 'def',
        term: 'Enthalpy of solution (Δ<sub>sol</sub><i>H</i>)',
        html: 'enthalpy change when one mole of a substance dissolves in excess solvent (so that further dilution causes no further heat change). For an ionic solid:',
      },
      {
        t: 'formula',
        kicker: 'Enthalpy of solution of an ionic solid',
        main: 'Δ<sub>sol</sub><i>H</i> = Δ<sub>lattice</sub><i>H</i> + Δ<sub>hyd</sub><i>H</i>',
        legend: [
          'Δ<sub>sol</sub><i>H</i> = enthalpy of solution',
          'Δ<sub>lattice</sub><i>H</i> = lattice enthalpy (dissociation, positive)',
          'Δ<sub>hyd</sub><i>H</i> = enthalpy of hydration (negative)',
        ],
        note: null,
      },
      {
        t: 'def',
        term: 'Enthalpy of dilution',
        html: 'enthalpy change when a solution of one mole of solute is diluted from one concentration to another.',
      },
      {
        t: 'def',
        term: 'Enthalpy of hydration (Δ<sub>hyd</sub><i>H</i>)',
        html: 'enthalpy change when one mole of anhydrous (or gaseous) ions combines with the required water; generally exothermic, e.g. CuSO<sub>4</sub>(s) + 5H<sub>2</sub>O(l) → CuSO<sub>4</sub>·5H<sub>2</sub>O(s), Δ<sub>hyd</sub><i>H</i> = −78.21 kJ mol<sup>−1</sup>.',
      },
      {
        t: 'formula',
        kicker: 'Trouton’s rule',
        main: 'Δ<sub>vap</sub><i>S</i> = Δ<sub>vap</sub><i>H</i>/<i>T</i><sub>b</sub> ≈ 85–88 J K<sup>−1</sup> mol<sup>−1</sup>',
        legend: [
          'Δ<sub>vap</sub><i>S</i> = molar entropy of vaporisation at the normal boiling point, roughly constant for many non-associated liquids',
          'Δ<sub>vap</sub><i>H</i> = enthalpy of vaporisation',
          '<i>T</i><sub>b</sub> = normal boiling point',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Kirchhoff’s equation (temperature dependence of reaction enthalpy)',
        main: 'Δ<sub>r</sub><i>H</i>(<i>T</i><sub>2</sub>) = Δ<sub>r</sub><i>H</i>(<i>T</i><sub>1</sub>) + Δ<i>C</i><sub><i>p</i></sub>(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>)<br>Δ<i>C</i><sub><i>p</i></sub> = Σ<i>C</i><sub><i>p</i></sub>(products) − Σ<i>C</i><sub><i>p</i></sub>(reactants)',
        legend: [
          'Δ<sub>r</sub><i>H</i>(<i>T</i>) = reaction enthalpy at temperature <i>T</i>',
          'Δ<i>C</i><sub><i>p</i></sub> = change in heat capacity at constant pressure',
        ],
        note: null,
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'p',
        html: '<b>3.1 Work in a reversible adiabatic change (<i>w</i> = <i>nC</i><sub><i>v</i></sub>Δ<i>T</i>)</b><br>For an adiabatic process <i>q</i> = 0, so the first law Δ<i>U</i> = <i>q</i> + <i>w</i> collapses to Δ<i>U</i> = <i>w</i>. Since for an ideal gas Δ<i>U</i> = <i>nC</i><sub><i>v</i></sub>Δ<i>T</i> along any path,<br><i>w</i><sub>(on system)</sub> = <i>nC</i><sub><i>v</i></sub>Δ<i>T</i><br><b>Physical reading:</b> with no heat allowed in, the only way the gas can do work on the surroundings (expansion) is to spend its own internal energy, so it <b>cools</b> (Δ<i>T</i> < 0 ⇒ <i>w</i> < 0, i.e. work done by the gas). Compression does the reverse and heats it.',
      },
      {
        t: 'p',
        html: '<b>3.2 Bomb-calorimeter measurement</b><br>A known mass of substance is burnt in excess oxygen inside the sealed bomb. The heat released raises the temperature of the bomb-plus-water assembly by Δ<i>T</i><sub>cal</sub>. Because the volume is fixed, that heat is Δ<i>U</i>:<br>Δ<i>U</i> = −<i>C</i><sub>cal</sub> Δ<i>T</i><sub>cal</sub><br>(the minus sign because an exothermic reaction releases heat while the surroundings warm). <i>C</i><sub>cal</sub>, the calorimeter’s heat capacity, is found beforehand by burning a substance of known Δ<i>U</i>. To report Δ<i>H</i>, apply Δ<i>H</i> = Δ<i>U</i> + Δ<i>n</i><sub>g</sub><i>RT</i>.',
      },
      {
        t: 'p',
        html: '<b>3.3 Enthalpy of solution from a lattice–hydration cycle</b><br>Dissolving is modelled by Hess’s law (Topic 02) as two steps:<br>Ionic solid →<sup>Δ<sub>lattice</sub><i>H</i> (+)</sup> gaseous ions →<sup>Δ<sub>hyd</sub><i>H</i> (−)</sup> aqueous ions<br>so Δ<sub>sol</sub><i>H</i> = Δ<sub>lattice</sub><i>H</i> + Δ<sub>hyd</sub><i>H</i>. If lattice (endothermic) dominates, Δ<sub>sol</sub><i>H</i> > 0 and the solution cools; if hydration dominates, it warms. The heat of hydration of a salt can itself be obtained from the <b>integral heats of solution</b> of its anhydrous and hydrated forms.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Burning 0.50 g of a fuel in a bomb calorimeter (heat capacity 8.2 kJ K<sup>−1</sup>) raises the temperature by 1.20 K. Find the internal energy change of combustion per gram of fuel.',
        steps: [
          '<b>Constant volume</b> ⇒ <i>q</i><sub><i>V</i></sub> = Δ<i>U</i> = −<i>C</i><sub>cal</sub>Δ<i>T</i><sub>cal</sub>:',
          'Δ<i>U</i> = −(8.2)(1.20) = −9.84 kJ for 0.50 g ⇒ −9.84/0.50',
        ],
        ans: 'Δ<i>U</i> = −19.7 kJ g<sup>−1</sup>. (Negative — combustion is exothermic; the bomb gives Δ<i>U</i>, not Δ<i>H</i>, because <i>V</i> is fixed.)',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'For sodium chloride, Δ<sub>lattice</sub><i>H</i> = +788 kJ mol<sup>−1</sup> (dissociation) and Δ<sub>hyd</sub><i>H</i> = −784 kJ mol<sup>−1</sup>. Find Δ<sub>sol</sub><i>H</i> and state whether dissolving NaCl warms or cools the water.',
        steps: [
          '<b>Speed approach:</b> Δ<sub>sol</sub><i>H</i> = Δ<sub>lattice</sub><i>H</i> + Δ<sub>hyd</sub><i>H</i> = 788 + (−784)',
          '<b>Trap watch:</b> use the lattice value in its dissociation (positive) sense to match the cycle; flipping its sign gives a wildly wrong, strongly exothermic answer.',
        ],
        ans: 'Δ<sub>sol</sub><i>H</i> = +4 kJ mol<sup>−1</sup> — slightly <b>endothermic</b>, so dissolving NaCl very mildly cools the water.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — multi-concept',
        q: '2 mol of an ideal monoatomic gas (<i>C</i><sub><i>v</i></sub> = (3/2)<i>R</i>) expands reversibly and adiabatically, cooling from 400 K to 300 K. Find <i>w</i>, <i>q</i>, Δ<i>U</i> and Δ<i>H</i>.',
        steps: [
          'Adiabatic ⇒ <i>q</i> = 0. With <i>C</i><sub><i>v</i></sub> = (3/2)(8.314) = 12.47 J K<sup>−1</sup> mol<sup>−1</sup> and <i>C</i><sub><i>p</i></sub> = (5/2)<i>R</i> = 20.79:',
          'Δ<i>U</i> = <i>nC</i><sub><i>v</i></sub>Δ<i>T</i> = 2(12.47)(300 − 400) = −2494 J = <i>w</i>',
          'Δ<i>H</i> = <i>nC</i><sub><i>p</i></sub>Δ<i>T</i> = 2(20.79)(−100) = −4157 J, <i>q</i> = 0',
        ],
        ans: '<i>q</i> = 0, <i>w</i> = Δ<i>U</i> = −2.49 kJ, Δ<i>H</i> = −4.16 kJ. The gas does 2.49 kJ of work entirely at the expense of its internal energy. The multi-concept catch: Δ<i>U</i> and Δ<i>H</i> still follow <i>nC</i><sub><i>v</i></sub>Δ<i>T</i> and <i>nC</i><sub><i>p</i></sub>Δ<i>T</i> even though the path is adiabatic.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: '1 mol of an ideal monoatomic gas (<i>γ</i> = 5/3) at 300 K and 1.00 atm expands reversibly and adiabatically until the pressure falls to 0.25 atm. Find the final temperature and the work done.',
        steps: [
          '<b>Poisson relation</b> <i>P</i><sup>1−<i>γ</i></sup><i>T</i><sup><i>γ</i></sup> = const, i.e. <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> = (<i>P</i><sub>2</sub>/<i>P</i><sub>1</sub>)<sup>(<i>γ</i>−1)/<i>γ</i></sup>, with (<i>γ</i> − 1)/<i>γ</i> = (2/3)/(5/3) = 0.40:',
          '<i>T</i><sub>2</sub> = 300 (0.25)<sup>0.40</sup> = 300 × 0.574 = 172.3 K',
          '<b>Work</b> (adiabatic, <i>C</i><sub><i>v</i></sub> = (3/2)<i>R</i> = 12.47):',
          '<i>w</i> = <i>nC</i><sub><i>v</i></sub>Δ<i>T</i> = (1)(12.47)(172.3 − 300)',
        ],
        ans: '<i>T</i><sub>2</sub> ≈ 172 K; <i>w</i> ≈ −1.59 kJ (the gas does about 1.59 kJ of work, cooling sharply). The rigor lies in pairing the correct Poisson exponent with the first-law work expression.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Calculate the heat needed to raise the temperature of 200 g of water by 25 K. (specific heat of water = 4.18 J g<sup>−1</sup> K<sup>−1</sup>)',
            a: '<i>q</i> = <i>mc</i>Δ<i>T</i> = 200(4.18)(25) = 2.09 × 10<sup>4</sup> J = 20.9 kJ',
          },
          {
            q: '[NEET] For KCl, Δ<sub>lattice</sub><i>H</i> = +718 and Δ<sub>hyd</sub><i>H</i> = −685 kJ mol<sup>−1</sup>. Find Δ<sub>sol</sub><i>H</i> and state endo/exothermic.',
            a: 'Δ<sub>sol</sub><i>H</i> = +33 kJ mol<sup>−1</sup> (endothermic)',
          },
          {
            q: '[JEE Main] 3 mol of an ideal gas is heated at constant pressure through 40 K. Calculate the work done on the gas.',
            a: '<i>w</i> = −<i>nR</i>Δ<i>T</i> = −3(8.314)(40) ≈ −998 J',
          },
          {
            q: '[JEE Main] An ideal gas undergoes free expansion into vacuum under adiabatic conditions. State the values of <i>q</i>, <i>w</i>, Δ<i>U</i> and Δ<i>T</i>.',
            a: '<i>q</i> = 0, <i>w</i> = 0, Δ<i>U</i> = 0, Δ<i>T</i> = 0 (free expansion: <i>p</i><sub>ext</sub> = 0)',
          },
          {
            q: '[JEE Advanced] 1 mol of an ideal diatomic gas (<i>γ</i> = 7/5) at 300 K is compressed reversibly and adiabatically to half its volume. Find the final temperature.',
            a: '<i>T</i><sub>2</sub> = <i>T</i><sub>1</sub>(<i>V</i><sub>1</sub>/<i>V</i><sub>2</sub>)<sup><i>γ</i>−1</sup> = 300(2)<sup>0.4</sup> ≈ 396 K.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A bomb calorimeter measures the heat of a reaction at constant:',
        opts: [
          { label: 'pressure', nudge: '<b>(a)</b> describes the coffee-cup calorimeter (gives Δ<i>H</i>).' },
          { label: 'volume', nudge: null },
          {
            label: 'temperature',
            nudge: '<b>(c)</b> no calorimeter holds <i>T</i> constant — the temperature rise is what we measure.',
          },
          { label: 'enthalpy', nudge: '<b>(d)</b> enthalpy is a quantity, not a constraint.' },
        ],
        correct: 1,
        solution: 'The rigid sealed bomb fixes the volume, so <i>w</i> = 0 and the measured heat is <i>q</i><sub><i>V</i></sub> = Δ<i>U</i>.',
      },
      {
        t: 'mcq',
        q: 'Which is always true for an adiabatic process?',
        opts: [
          { label: '<i>q</i> = 0', nudge: null },
          { label: 'Δ<i>T</i> = 0', nudge: '<b>(b)</b> is isothermal.' },
          { label: '<i>w</i> = 0', nudge: '<b>(c)</b> is isochoric.' },
          {
            label: 'Δ<i>U</i> = 0',
            nudge: '<b>(d)</b> would require Δ<i>T</i> = 0, which adiabatic expansion/compression violates (the temperature changes precisely because <i>q</i> = 0).',
          },
        ],
        correct: 0,
        solution: '“Adiabatic” means no heat crosses the boundary, <i>q</i> = 0.',
      },
      {
        t: 'mcq',
        q: 'Dissolving NH<sub>4</sub>NO<sub>3</sub> in water makes the solution noticeably cold. Its enthalpy of solution is therefore:',
        opts: [
          { label: 'negative', nudge: '<b>(a)</b> would warm the water (e.g. CaCl<sub>2</sub>).' },
          { label: 'zero', nudge: '<b>(b)</b> implies no temperature change.' },
          { label: 'positive', nudge: null },
          { label: 'cannot be determined', nudge: '<b>(d)</b> ignores the direct observation.' },
        ],
        correct: 2,
        solution: 'A cooling solution absorbs heat from its surroundings, so the process is endothermic, Δ<sub>sol</sub><i>H</i> > 0 (lattice-breaking outweighs hydration).',
      },
      {
        t: 'mcq',
        q: 'In the reversible isothermal expansion of an ideal gas, which quantity is zero?',
        opts: [
          { label: '<i>w</i>', nudge: '<b>(a)</b> work is done during expansion.' },
          { label: '<i>q</i>', nudge: '<b>(b)</b> heat is absorbed to keep <i>T</i> fixed.' },
          { label: 'Δ<i>U</i>', nudge: null },
          { label: 'Δ<i>S</i>', nudge: '<b>(d)</b> entropy increases as the gas spreads out.' },
        ],
        correct: 2,
        solution: 'For an ideal gas Δ<i>U</i> depends only on <i>T</i>; isothermal means Δ<i>T</i> = 0, so Δ<i>U</i> = 0 (and hence <i>q</i> = −<i>w</i>).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Bomb vs coffee-cup.</b> Constant volume (bomb) gives Δ<i>U</i>; constant pressure gives Δ<i>H</i>. Mixing them up — or forgetting the Δ<i>n</i><sub>g</sub><i>RT</i> conversion between them — is the classic calorimetry error.',
          '<b>“Adiabatic” ≠ “isothermal”.</b> Adiabatic means <i>q</i> = 0 (temperature changes); isothermal means Δ<i>T</i> = 0 (heat flows). Swapping them inverts every sign in the problem.',
          '<b>Sign of lattice enthalpy in Δ<sub>sol</sub><i>H</i>.</b> Use the dissociation (endothermic, +) value so the lattice–hydration cycle balances; the hydration term is the negative one.',
          '<b>Free expansion confusion.</b> With <i>p</i><sub>ext</sub> = 0, <i>w</i> = 0 even though the volume changes; and for an ideal gas Δ<i>U</i> = 0, so Δ<i>T</i> = 0 and <i>q</i> = 0 as well.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + sanity):</b> Memorise the process by what it freezes — iso<b>thermal</b> <i>T</i>, <b>a</b>diabatic heat (<i>q</i> = 0), iso<b>baric</b> <i>P</i>, iso<b>choric</b> <i>V</i>. And for any ideal-gas path, jump straight to Δ<i>U</i> = <i>nC</i><sub><i>v</i></sub>Δ<i>T</i> and Δ<i>H</i> = <i>nC</i><sub><i>p</i></sub>Δ<i>T</i> — both depend only on Δ<i>T</i>, so you never need the path to get them.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Calorimetry',
            note: '<i>q</i> = <i>C</i>Δ<i>T</i> = <i>mc</i>Δ<i>T</i>; bomb (const <i>V</i>) ⇒ <i>q</i><sub><i>V</i></sub> = Δ<i>U</i>; coffee-cup (const <i>P</i>) ⇒ <i>q</i><sub><i>P</i></sub> = Δ<i>H</i>.',
          },
          {
            f: 'Four processes (ideal gas)',
            note: 'isothermal Δ<i>U</i> = Δ<i>H</i> = 0, <i>w</i> = −<i>nRT</i> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>) · adiabatic <i>q</i> = 0, <i>w</i> = Δ<i>U</i> = <i>nC</i><sub><i>v</i></sub>Δ<i>T</i> · isobaric <i>w</i> = −<i>nR</i>Δ<i>T</i>, <i>q</i><sub><i>P</i></sub> = <i>nC</i><sub><i>p</i></sub>Δ<i>T</i> · isochoric <i>w</i> = 0, <i>q</i><sub><i>V</i></sub> = <i>nC</i><sub><i>v</i></sub>Δ<i>T</i>.',
          },
          {
            f: 'Adiabatic (rev.)',
            note: '<i>PV</i><sup><i>γ</i></sup> = const, <i>TV</i><sup><i>γ</i>−1</sup> = const, <i>γ</i> = <i>C</i><sub><i>p</i></sub>/<i>C</i><sub><i>v</i></sub>.',
          },
          {
            f: 'Solution',
            note: 'Δ<sub>sol</sub><i>H</i> = Δ<sub>lattice</sub><i>H</i> + Δ<sub>hyd</sub><i>H</i> (lattice wins → cools; hydration wins → warms).',
          },
          {
            f: 'Trouton',
            note: 'Δ<sub>vap</sub><i>S</i> ≈ 85–88 J K<sup>−1</sup> mol<sup>−1</sup>. <b>Kirchhoff:</b> Δ<sub>r</sub><i>H</i>(<i>T</i><sub>2</sub>) = Δ<sub>r</sub><i>H</i>(<i>T</i><sub>1</sub>) + Δ<i>C</i><sub><i>p</i></sub>Δ<i>T</i>.',
          },
          {
            f: 'Universal shortcut',
            note: 'ideal gas ⇒ Δ<i>U</i> = <i>nC</i><sub><i>v</i></sub>Δ<i>T</i>, Δ<i>H</i> = <i>nC</i><sub><i>p</i></sub>Δ<i>T</i> on every path.',
          },
        ],
        aids: [
          '“Bomb = box = Δ<i>U</i>; open cup = Δ<i>H</i>.”',
          '“Adiabatic kills <i>q</i>, isothermal kills Δ<i>T</i>.”',
          '“Cold pack = endothermic dissolving.”',
        ],
      },
    ],
  },
];
