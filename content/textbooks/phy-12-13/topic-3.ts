import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 13, Topic 03: pp. 833–840 of the Class 12 Physics Master Reference,
 * word for word: the book's sub-topic 3, "Radioactivity: Decay Modes, the Decay
 * Law, Half-Life and Activity", split at its Sections 1 to 8. Figure 13.5
 * (caption p. 834, drawn on the figures page p. 835) is never referred to in the
 * text; it is set beside the formula it illustrates, "After n whole half-lives"
 * (N = N₀/2ⁿ), redrawn in lib/diagrams/physics-12-13.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 833–840 ─────────────────────────
  {
    n: '03',
    title: 'Radioactivity: Decay Modes, the Decay Law, Half-Life and Activity',
    kalam: 'The deepest and most counter-intuitive feature of radioactivity is that it is purely random.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial high-yield topic. CBSE Boards reliably ask the derivation of the decay law and definitions of half-life/mean-life (2–3 marks). NEET plants conceptual traps on half-life-vs-mean-life and decay-mode identification, plus quick activity numericals. JEE Main loves decay-constant/activity calculations linked to Avogadro’s number, and JEE Advanced sets multi-isotope or dating problems requiring logarithms and ratio reasoning.',
      },
      {
        t: 'p',
        html: 'Some nuclei are simply not at peace. They carry the wrong balance of protons and neutrons to sit still forever, and sooner or later each one spontaneously rearranges itself — flinging out a particle or a burst of energy — to settle into a more stable configuration. This spontaneous transformation of an unstable nucleus is <b>radioactivity</b>, discovered when Henri Becquerel noticed that uranium salts fogged a photographic plate locked away in the dark.',
      },
      {
        t: 'p',
        html: 'The deepest and most counter-intuitive feature of radioactivity is that it is <b>purely random</b>. You cannot point at a single nucleus and predict when it will decay — it might go in the next second or sit unchanged for a million years. There is no “ageing”: a nucleus that has survived a billion years is no more “due” to decay than a freshly made one. What we can predict, with beautiful precision, is the behaviour of a huge crowd of such nuclei.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine a giant cinema hall in a busy Indian multiplex after the film ends. You cannot predict which particular person walks out at which exact moment, but you can say that the rate at which people leave is proportional to how many are still inside. When the hall is packed, people pour out quickly; when only a handful remain, the trickle slows. Radioactive nuclei behave identically — the number decaying per second is proportional to the number still present. That single sentence is the entire physics of the decay law: d<i>N</i>/d<i>t</i> ∝ −<i>N</i>.',
      },
      {
        t: 'p',
        html: 'A radioactive nucleus can settle down by three main routes:<br>• <b>Alpha (<i>α</i>) decay</b> — it ejects a tightly bound helium nucleus, <sup>4</sup><sub>2</sub>He. The parent loses 2 protons and 2 neutrons.<br>• <b>Beta (<i>β</i>) decay</b> — inside the nucleus a neutron converts to a proton (or vice versa), emitting a fast electron (<i>β</i><sup>−</sup>) or positron (<i>β</i><sup>+</sup>) along with an (anti)neutrino. The mass number is unchanged; only <i>Z</i> shifts by one.<br>• <b>Gamma (<i>γ</i>) decay</b> — a nucleus left in an excited state after <i>α</i> or <i>β</i> decay drops to its ground state, emitting a high-energy photon. Neither <i>Z</i> nor <i>A</i> changes; only energy is released.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The exponential decay law is a statistical law — it works because <i>N</i> is enormous (a microgram already contains ∼ 10<sup>15</sup> nuclei). For a handful of nuclei, the smooth exponential curve dissolves into random jumps. Radioactivity is essentially <b>independent of external conditions</b>: heating, cooling, pressure, or chemical bonding leave the decay constant untouched (to extraordinary precision), because the action happens deep in the nucleus, shielded from the chemistry of the electrons. And crucially, <b>half-life does not depend on how much sample you start with</b> — burn half of it away and the remaining half still has the same half-life.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Radioactive decay law',
        main: '<i>N</i> = <i>N</i><sub>0</sub><i>e</i><sup>−<i>λt</i></sup>',
        legend: [
          '<i>N</i> = number of undecayed nuclei at time <i>t</i>',
          '<i>N</i><sub>0</sub> = number at <i>t</i> = 0',
          '<i>λ</i> = decay (disintegration) constant',
        ],
        note: '<i>λ</i> is the probability per unit time that a given nucleus decays. SI unit: s<sup>−1</sup>. Dimensional formula: [M<sup>0</sup> L<sup>0</sup> T<sup>−1</sup>].',
      },
      {
        t: 'formula',
        kicker: 'After <i>n</i> whole half-lives',
        main: '<i>N</i> = <i>N</i><sub>0</sub>/2<sup><i>n</i></sup><br><i>n</i> = <i>t</i>/<i>T</i><sub>1/2</sub>',
        legend: [
          '<i>N</i> = number of undecayed nuclei after time <i>t</i>',
          '<i>N</i><sub>0</sub> = number of nuclei at <i>t</i> = 0',
          '<i>n</i> = number of half-lives elapsed, <i>t</i>/<i>T</i><sub>1/2</sub> (need not be whole)',
          '<i>t</i> = time elapsed',
          '<i>T</i><sub>1/2</sub> = half-life',
        ],
        note: null,
      },
      { t: 'fig', id: 'p12-13-fig-13.5' },
      {
        t: 'formula',
        kicker: 'Half-life (time for half the sample to decay)',
        main: '<i>T</i><sub>1/2</sub> = (ln 2)/<i>λ</i> = 0.693/<i>λ</i>',
        legend: ['<i>T</i><sub>1/2</sub> = half-life', '<i>λ</i> = decay constant'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Mean (average) life',
        main: '<i>τ</i> = 1/<i>λ</i><br><i>T</i><sub>1/2</sub> = 0.693 <i>τ</i><br><i>τ</i> = 1.44 <i>T</i><sub>1/2</sub>',
        legend: ['<i>τ</i> = mean life', '<i>λ</i> = decay constant', '<i>T</i><sub>1/2</sub> = half-life'],
        note: 'Note the inequality <i>τ</i> > <i>T</i><sub>1/2</sub> always.',
      },
      {
        t: 'formula',
        kicker: 'Activity (rate of disintegration)',
        main: '<i>R</i> = <i>λN</i> = <i>R</i><sub>0</sub><i>e</i><sup>−<i>λt</i></sup><br><i>R</i><sub>0</sub> = <i>λN</i><sub>0</sub>',
        legend: [
          '<i>R</i> = activity',
          '<i>R</i><sub>0</sub> = activity at <i>t</i> = 0',
          '<i>λ</i> = decay constant',
          '<i>N</i> = number of undecayed nuclei at time <i>t</i>',
          '<i>N</i><sub>0</sub> = number at <i>t</i> = 0',
        ],
        note: 'SI unit: <b>becquerel</b> (Bq), 1 Bq = 1 decay s<sup>−1</sup>. Dimensional formula: [M<sup>0</sup> L<sup>0</sup> T<sup>−1</sup>].<br>Practical units: 1 curie (Ci) = 3.7 × 10<sup>10</sup> Bq; 1 rutherford (Rd) = 10<sup>6</sup> Bq.',
      },
      {
        t: 'formula',
        kicker: 'Displacement (Soddy–Fajans) laws',
        main: '<i>α</i>: <sup><i>A</i></sup><sub><i>Z</i></sub><i>X</i> → <sup><i>A</i>−4</sup><sub><i>Z</i>−2</sub><i>Y</i> + <sup>4</sup><sub>2</sub>He<br><i>β</i><sup>−</sup>: <sup><i>A</i></sup><sub><i>Z</i></sub><i>X</i> → <sup><i>A</i></sup><sub><i>Z</i>+1</sub><i>Y</i> + <i>e</i><sup>−</sup> + <i>ν̄</i><br><i>β</i><sup>+</sup>: <sup><i>A</i></sup><sub><i>Z</i></sub><i>X</i> → <sup><i>A</i></sup><sub><i>Z</i>−1</sub><i>Y</i> + <i>e</i><sup>+</sup> + <i>ν</i><br><i>γ</i>: <sup><i>A</i></sup><sub><i>Z</i></sub><i>X</i><sup>*</sup> → <sup><i>A</i></sup><sub><i>Z</i></sub><i>X</i> + <i>γ</i>',
        legend: [
          '<i>X</i> = parent nucleus',
          '<i>Y</i> = daughter nucleus',
          '<i>A</i> = mass number',
          '<i>Z</i> = atomic number',
          '<i>e</i><sup>−</sup> = electron (<i>β</i><sup>−</sup> particle)',
          '<i>e</i><sup>+</sup> = positron (<i>β</i><sup>+</sup> particle)',
          '<i>ν</i> = neutrino',
          '<i>ν̄</i> = antineutrino',
          '<i>X</i><sup>*</sup> = nucleus in an excited state',
        ],
        note: null,
      },

      { t: 'part', title: 'CBSE board derivations' },
      { t: 'p', html: '<b>3.1 Deriving the decay law <i>N</i> = <i>N</i><sub>0</sub><i>e</i><sup>−<i>λt</i></sup></b>' },
      {
        t: 'p',
        html: '<b>Physical premise.</b> The number of nuclei decaying in a small time interval is proportional to the number present — this is the cinema-hall idea made quantitative.',
      },
      {
        t: 'p',
        html: '<b>Step 1.</b> Write the rate of decay as proportional to <i>N</i>, with the minus sign because <i>N</i> decreases:<br>d<i>N</i>/d<i>t</i> = −<i>λN</i>.<br>Here <i>λ</i> is the constant of proportionality, the decay constant.',
      },
      {
        t: 'p',
        html: '<b>Step 2.</b> Separate the variables so each side contains only one of them — we do this because the equation is now in a form we can integrate:<br>d<i>N</i>/<i>N</i> = −<i>λ</i> d<i>t</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 3.</b> Integrate from the start (<i>t</i> = 0, <i>N</i> = <i>N</i><sub>0</sub>) to a general time (<i>t</i>, <i>N</i>):<br>∫<sub><i>N</i>₀</sub><sup><i>N</i></sup> d<i>N</i>/<i>N</i> = −<i>λ</i> ∫<sub>0</sub><sup><i>t</i></sup> d<i>t</i>   ⟹   ln(<i>N</i>/<i>N</i><sub>0</sub>) = −<i>λt</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 4.</b> Exponentiate both sides to free <i>N</i>:<br><i>N</i> = <i>N</i><sub>0</sub><i>e</i><sup>−<i>λt</i></sup>.<br>The exponential form is forced on us — any quantity whose rate of decrease is proportional to itself must decay exponentially.',
      },
      { t: 'p', html: '<b>3.2 Half-life from the decay law</b>' },
      {
        t: 'p',
        html: '<b>Step 1.</b> Half-life <i>T</i><sub>1/2</sub> is defined by <i>N</i> = <i>N</i><sub>0</sub>/2. Substitute:<br><i>N</i><sub>0</sub>/2 = <i>N</i><sub>0</sub><i>e</i><sup>−<i>λT</i>₁/₂</sup>   ⟹   <i>e</i><sup>−<i>λT</i>₁/₂</sup> = 1/2.',
      },
      {
        t: 'p',
        html: '<b>Step 2.</b> Take natural logs:<br>−<i>λT</i><sub>1/2</sub> = ln ½ = −ln 2.',
      },
      {
        t: 'p',
        html: '<b>Step 3.</b> Solve:<br><i>T</i><sub>1/2</sub> = (ln 2)/<i>λ</i> = 0.693/<i>λ</i>.<br>Notice <i>T</i><sub>1/2</sub> contains no <i>N</i><sub>0</sub> — half-life is independent of sample size.',
      },
      { t: 'p', html: '<b>3.3 Mean life <i>τ</i> = 1/<i>λ</i></b>' },
      {
        t: 'p',
        html: '<b>Reasoning.</b> The mean life is the average lifetime over all nuclei: long-lived ones pull the average up, but they are rare. We weight each lifetime <i>t</i> by the number of nuclei |d<i>N</i>| that decay at that instant and divide by the total.',
      },
      {
        t: 'p',
        html: '<b>Step 1.</b> Number decaying between <i>t</i> and <i>t</i> + d<i>t</i> is |d<i>N</i>| = <i>λN</i> d<i>t</i> = <i>λN</i><sub>0</sub><i>e</i><sup>−<i>λt</i></sup> d<i>t</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 2.</b> Average lifetime:<br><i>τ</i> = (∫<sub>0</sub><sup>∞</sup> <i>t</i> |d<i>N</i>|)/<i>N</i><sub>0</sub> = (∫<sub>0</sub><sup>∞</sup> <i>t</i> <i>λN</i><sub>0</sub><i>e</i><sup>−<i>λt</i></sup> d<i>t</i>)/<i>N</i><sub>0</sub> = <i>λ</i> ∫<sub>0</sub><sup>∞</sup> <i>t</i> <i>e</i><sup>−<i>λt</i></sup> d<i>t</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 3.</b> The standard integral ∫<sub>0</sub><sup>∞</sup> <i>t</i> <i>e</i><sup>−<i>λt</i></sup> d<i>t</i> = 1/<i>λ</i><sup>2</sup>, so<br><i>τ</i> = <i>λ</i> · 1/<i>λ</i><sup>2</sup> = 1/<i>λ</i>.<br>Combining with §3.2 gives <i>T</i><sub>1/2</sub> = 0.693 <i>τ</i>, confirming <i>τ</i> > <i>T</i><sub>1/2</sub>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A radioactive sample of initial mass 80 g has a half-life of 10 days. What mass remains undecayed after 30 days?',
        steps: [
          '<b>Given:</b> <i>T</i><sub>1/2</sub> = 10 days, <i>t</i> = 30 days, initial mass = 80 g.',
          '<b>Number of half-lives:</b> <i>n</i> = <i>t</i>/<i>T</i><sub>1/2</sub> = 30/10 = 3.',
          '<b>Remaining mass:</b> 80/2<sup>3</sup> = 80/8',
        ],
        ans: '10 g remains. (Mass tracks number of nuclei here because each decay removes one parent nucleus.)',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The activity of a source falls to 1/16 of its initial value. If the half-life is 2 hours, how long did this take?',
        steps: [
          '<b>The trap:</b> students see “1/16” and write 16 half-lives (= 32 h), or fumble with logarithms under time pressure.',
          '<b>Shortcut:</b> recognise 1/16 = (1/2)<sup>4</sup>, so exactly 4 half-lives have passed:<br><i>t</i> = 4 × <i>T</i><sub>1/2</sub> = 4 × 2',
        ],
        ans: '8 hours. Memorise the halving ladder — 1/2, 1/4, 1/8, 1/16, 1/32 ↔ 1, 2, 3, 4, 5 half-lives — and these are instant. Activity falls by the same factor as the number of nuclei, since <i>R</i> = <i>λN</i>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: '1.0 mg of pure radon-222 (<sup>222</sup>Rn, molar mass 222 g mol<sup>−1</sup>) has a half-life of 3.8 days. Find (a) the number of atoms present, (b) the decay constant in s<sup>−1</sup>, and (c) the initial activity in Bq and Ci. (Links the decay law with the mole concept.)',
        steps: [
          '<b>(a)</b> <i>N</i><sub>0</sub> = ((1.0 × 10<sup>−3</sup>)/222) × 6.022 × 10<sup>23</sup> ≈ 2.71 × 10<sup>18</sup> atoms.',
          '<b>(b)</b> <i>T</i><sub>1/2</sub> = 3.8 × 86400 = 3.28 × 10<sup>5</sup> s, so<br><i>λ</i> = 0.693/(3.28 × 10<sup>5</sup>) ≈ 2.11 × 10<sup>−6</sup> s<sup>−1</sup>.',
          '<b>(c)</b> <i>R</i><sub>0</sub> = <i>λN</i><sub>0</sub> = (2.11 × 10<sup>−6</sup>)(2.71 × 10<sup>18</sup>) ≈ 5.73 × 10<sup>12</sup> Bq. Converting:<br>(5.73 × 10<sup>12</sup>)/(3.7 × 10<sup>10</sup>)',
        ],
        ans: '<i>N</i><sub>0</sub> ≈ 2.7 × 10<sup>18</sup> atoms; <i>λ</i> ≈ 2.1 × 10<sup>−6</sup> s<sup>−1</sup>; <i>R</i><sub>0</sub> ≈ 5.7 × 10<sup>12</sup> Bq ≈ 155 Ci.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A wooden tool excavated from a site shows a <sup>14</sup>C activity of 9.0 disintegrations per minute per gram of carbon, while living wood gives 15.0 dpm g<sup>−1</sup>. Taking the half-life of <sup>14</sup>C as 5730 years, estimate the age of the tool. (Assume the atmospheric <sup>14</sup>C fraction has stayed constant.)',
        steps: [
          '<b>Set up the ratio.</b> Since both samples are compared per gram of carbon, the activity ratio equals the ratio of surviving <sup>14</sup>C:<br><i>R</i>/<i>R</i><sub>0</sub> = <i>e</i><sup>−<i>λt</i></sup> = 9.0/15.0 = 0.60.',
          '<b>Find the decay constant.</b> <i>λ</i> = 0.693/5730 = 1.21 × 10<sup>−4</sup> yr<sup>−1</sup>.',
          '<b>Solve for <i>t</i>.</b> Take logs:<br><i>t</i> = (1/<i>λ</i>) ln(<i>R</i><sub>0</sub>/<i>R</i>) = ln(15/9)/(1.21 × 10<sup>−4</sup>) = (ln 1.667)/(1.21 × 10<sup>−4</sup>) = 0.511/(1.21 × 10<sup>−4</sup>)',
        ],
        ans: 'The tool is roughly <b>4200 years</b> old. The whole method hinges on one idea — living things keep a fixed <sup>14</sup>C fraction while alive, and the clock starts ticking only at death.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define half-life and mean life of a radioactive substance, and state the relation between them. A sample has a half-life of 12 hours; what fraction remains undecayed after 2 days?',
            a: 'Fraction = 1/16 (4 half-lives).',
          },
          {
            q: '[NEET] The decay constant of a nuclide is 1.155 × 10<sup>−3</sup> s<sup>−1</sup>. Find its half-life.',
            a: '<i>T</i><sub>1/2</sub> = 600 s (= 10 min).',
          },
          {
            q: '[JEE Main] A source has an activity of 8000 Bq. After 12 hours its activity is 1000 Bq. Determine its half-life.',
            a: '<i>T</i><sub>1/2</sub> = 4 h (activity fell by factor 8 = 2<sup>3</sup>).',
          },
          {
            q: '[JEE Main] The mean life of a radioactive nucleus is 5.0 × 10<sup>3</sup> s. Find (a) its decay constant and (b) its half-life.',
            a: '(a) <i>λ</i> = 2.0 × 10<sup>−4</sup> s<sup>−1</sup>, (b) <i>T</i><sub>1/2</sub> ≈ 3465 s.',
          },
          {
            q: '[JEE Advanced] Two radioactive samples <i>A</i> and <i>B</i> have equal initial activities. The half-lives are 2 h for <i>A</i> and 4 h for <i>B</i>. After what time will the activity of <i>A</i> be one-quarter that of <i>B</i>?',
            a: '<i>t</i> = 8 h.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A radioactive sample decays to 1/8 of its initial quantity in 9 days. Its half-life is:',
        opts: [
          { label: '1 day', nudge: 'Distractor <b>(a)</b> divides 9 by 8-ish or by 9.' },
          { label: '3 days', nudge: null },
          { label: '9 days', nudge: 'Distractor <b>(c)</b> takes the full elapsed time as the half-life (no division).' },
          { label: '27 days', nudge: 'Distractor <b>(d)</b> multiplies 9 × 3 instead of dividing.' },
        ],
        correct: 1,
        solution: '1/8 = (1/2)<sup>3</sup>, so 3 half-lives fit into 9 days ⇒ <i>T</i><sub>1/2</sub> = 3 days.',
      },
      {
        t: 'mcq',
        q: 'For a radioactive substance, which relation between mean life <i>τ</i> and half-life <i>T</i><sub>1/2</sub> is correct?',
        opts: [
          {
            label: '<i>τ</i> = <i>T</i><sub>1/2</sub>',
            nudge: 'Distractors <b>(a)</b> and <b>(d)</b> contradict the fact that mean life is always longer than half-life.',
          },
          {
            label: '<i>τ</i> = 0.693 <i>T</i><sub>1/2</sub>',
            nudge: 'Distractor <b>(b)</b> is the relation written backwards (<i>T</i><sub>1/2</sub> = 0.693 <i>τ</i> is correct, not the reverse) — the single most common trap.',
          },
          { label: '<i>τ</i> = 1.44 <i>T</i><sub>1/2</sub>', nudge: null },
          {
            label: '<i>τ</i> < <i>T</i><sub>1/2</sub>',
            nudge: 'Distractors <b>(a)</b> and <b>(d)</b> contradict the fact that mean life is always longer than half-life.',
          },
        ],
        correct: 2,
        solution: '<i>τ</i> = 1/<i>λ</i> and <i>T</i><sub>1/2</sub> = 0.693/<i>λ</i>, so <i>τ</i> = <i>T</i><sub>1/2</sub>/0.693 = 1.44 <i>T</i><sub>1/2</sub>.',
      },
      {
        t: 'mcq',
        q: 'In <i>β</i><sup>−</sup> decay, the atomic number <i>Z</i> of the nucleus:',
        opts: [
          {
            label: 'decreases by 1',
            nudge: 'Distractor <b>(a)</b> describes <i>β</i><sup>+</sup> decay (or a sign error). Students who memorise “beta changes the charge” without the direction pick <b>(a)</b>.',
          },
          { label: 'increases by 1', nudge: null },
          { label: 'decreases by 2', nudge: 'Distractor <b>(c)</b> is <i>α</i> decay.' },
          { label: 'remains unchanged', nudge: 'Distractor <b>(d)</b> is <i>γ</i> decay.' },
        ],
        correct: 1,
        solution: 'A neutron converts to a proton (<i>n</i> → <i>p</i> + <i>e</i><sup>−</sup> + <i>ν̄</i>), so <i>Z</i> → <i>Z</i> + 1 while <i>A</i> is unchanged.',
      },
      {
        t: 'mcq',
        q: 'The activity of a sample is 3.7 × 10<sup>7</sup> Bq. In curie, this is:',
        opts: [
          { label: '1 Ci', nudge: 'Distractor <b>(a)</b> ignores the factor of 10<sup>3</sup>.' },
          { label: '1 mCi', nudge: null },
          {
            label: '1 μCi',
            nudge: 'Distractor <b>(c)</b> is off by a further 10<sup>3</sup> (1 μCi = 3.7 × 10<sup>4</sup> Bq).',
          },
          { label: '1 kCi', nudge: 'Distractor <b>(d)</b> inverts the conversion direction.' },
        ],
        correct: 1,
        solution: '1 Ci = 3.7 × 10<sup>10</sup> Bq, so 3.7 × 10<sup>7</sup> Bq = 10<sup>−3</sup> Ci = 1 mCi.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Swapping the <i>τ</i>–<i>T</i><sub>1/2</sub> relation.</b> Remember mean life is the longer one: <i>τ</i> = 1.44 <i>T</i><sub>1/2</sub>, while <i>T</i><sub>1/2</sub> = 0.693 <i>τ</i>. If your answer makes the half-life bigger than the mean life, you have flipped it.',
          '<b>Using the halving ladder for non-integer numbers of half-lives.</b> The clean halving ladder only works when <i>t</i> is a whole multiple of <i>T</i><sub>1/2</sub>. (The formula <i>N</i> = <i>N</i><sub>0</sub>/2<sup><i>n</i></sup> itself holds for any <i>n</i> = <i>t</i>/<i>T</i><sub>1/2</sub>, whole or not.) For odd times (e.g. activity ratio 0.6), you must go back to <i>N</i> = <i>N</i><sub>0</sub><i>e</i><sup>−<i>λt</i></sup> and use logarithms.',
          '<b>Forgetting that activity also decays exponentially.</b> Since <i>R</i> = <i>λN</i>, activity falls by exactly the same factor as the number of nuclei. Treat <i>R</i>, <i>N</i>, and mass interchangeably for ratio problems.',
          '<b>Mixing up the decay modes.</b> <i>α</i>: <i>A</i> down by 4, <i>Z</i> down by 2. <i>β</i><sup>−</sup>: <i>A</i> same, <i>Z</i> up by 1. <i>γ</i>: nothing changes but energy. A quick parent/daughter conservation check (sum of top numbers and sum of bottom numbers must balance) catches most errors.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Whenever a problem gives a “nice” ratio — 1/2, 1/4, 1/8, 1/16 — skip logarithms entirely and count half-lives off the ladder. Reserve ln for the ugly ratios. And keep ln 2 = 0.693 and 1/0.693 = 1.44 memorised cold; almost every numerical needs one of them.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Decay law',
            note: '<i>N</i> = <i>N</i><sub>0</sub><i>e</i><sup>−<i>λt</i></sup>; after <i>n</i> half-lives, <i>N</i> = <i>N</i><sub>0</sub>/2<sup><i>n</i></sup>.',
          },
          { f: 'Decay constant <i>λ</i>', note: 'probability of decay per nucleus per second; unit s<sup>−1</sup>.' },
          { f: 'Half-life', note: '<i>T</i><sub>1/2</sub> = 0.693/<i>λ</i> — independent of sample size.' },
          { f: 'Mean life', note: '<i>τ</i> = 1/<i>λ</i> = 1.44 <i>T</i><sub>1/2</sub> (always longer than half-life).' },
          {
            f: 'Activity',
            note: '<i>R</i> = <i>λN</i> = <i>R</i><sub>0</sub><i>e</i><sup>−<i>λt</i></sup>; 1 Ci = 3.7 × 10<sup>10</sup> Bq.',
          },
          {
            f: 'Decay modes',
            note: '<i>α</i> (<i>A</i> − 4, <i>Z</i> − 2); <i>β</i><sup>−</sup> (<i>A</i> same, <i>Z</i> + 1); <i>β</i><sup>+</sup> (<i>A</i> same, <i>Z</i> − 1); <i>γ</i> (no change).',
          },
        ],
        aids: ['“mean life is the <b>long</b> life (×1.44)”', '“beta-<b>minus</b> makes a <b>proton</b> (<i>Z</i> up).”'],
      },
    ],
  },
];
