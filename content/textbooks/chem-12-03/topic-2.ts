import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topic 02, Integrated Rate Equations & Half-Life: pp. 111–119 of the
 * Class 12 Chemistry Master Reference, word for word, split at its Sections 1 to
 * 8. Figure 3.2 (caption first on p. 113, drawn p. 114) is placed after the
 * first-order card, once both of its plots have been stated; it is redrawn in
 * lib/diagrams/chemistry-12-03.ts. The book's "Sub-01" is "Topic 01" here and its
 * "subtopic" is "topic". The answer to practice question 3 is the errata's
 * (≈ 144.6 min), which the page already shows.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 02 · pp. 111–119 ─────────────────────────
  {
    n: '02',
    title: 'Integrated Rate Equations & Half-Life',
    kalam: 'For a first-order reaction, t1/2 is completely independent of initial concentration.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the single most “numerically scored” topic of the chapter. CBSE Boards carry a guaranteed 3–5 mark numerical (first-order <i>k</i>, <i>t</i><sub>1/2</sub>, or fraction decomposed). NEET asks 1–2 fast MCQs built on the <i>t</i><sub>1/2</sub>–concentration relationship. JEE Main routinely sets a gas-phase total-pressure first-order problem; JEE Advanced pushes into <i>n</i>th-order half-life ratios and multi-step pressure bookkeeping.',
      },
      {
        t: 'p',
        html: 'In Topic 01 we wrote the differential rate law — rate as a function of concentration at an instant. That is beautiful for theory but painful in the lab: to use it you would need the slope of a tangent to a curve at every moment, which is hard to measure accurately. <b>Integrated rate equations</b> solve this by doing the calculus once, ahead of time, so that you are left with a clean relationship between concentration and clock time — two things you can actually read off an experiment directly.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine you are tracking the water level in a matka (clay pot) with a small hole at the bottom. The differential law tells you “how fast the level is dropping right now.” But what you really want is a formula that says “given the starting level, what will the level be after 10 minutes?” Integrating the rate of leakage gives exactly that — a direct level-vs-time relationship. Different leak behaviours give different shapes, and that is precisely what distinguishes a zero-order reaction from a first-order one.',
      },
      {
        t: 'p',
        html: 'A <b>zero-order</b> reaction is like a tap running at a fixed flow regardless of how full the tank is — the concentration falls in a perfectly straight line with time. A <b>first-order</b> reaction is like a steadily-decaying process such as the decomposition of N<sub>2</sub>O<sub>5</sub> or radioactive decay: the more reactant present, the faster it goes, so the concentration falls along a smooth exponential curve that never quite reaches zero.',
      },
      {
        t: 'p',
        html: 'Why would a reaction ever ignore concentration and behave as zero order? Usually because some other resource, not the bulk reactant, sets the pace. Two classic cases: a <b>surface-catalysed</b> decomposition where the catalyst surface is fully saturated — adding more gas cannot speed things up because every active site is already occupied — and a <b>photochemical</b> step limited by a fixed light intensity. In both, the reactant is in such relative abundance that its changing concentration stops mattering, and the rate flatlines at <i>k</i>. The moment that resource stops being limiting (the surface frees up, the reactant runs low), the zero-order description breaks down — which is exactly why zero-order kinetics typically holds only over a finite window rather than all the way to completion.',
      },
      {
        t: 'p',
        html: 'That last point leads to the chapter’s most famous quantity, the <b>half-life</b> <i>t</i><sub>1/2</sub> — the time for the concentration to fall to half its starting value. The deep insight, and the thing examiners love to probe, is how <i>t</i><sub>1/2</sub> depends on the starting concentration:<br>• For a <b>first-order</b> reaction, <i>t</i><sub>1/2</sub> is <b>completely independent of initial concentration</b>. Whether you start with a bucket or a drop, every halving takes the same time. This is why “75% done in two half-lives, 87.5% in three” works as a mental shortcut.<br>• For a <b>zero-order</b> reaction, <i>t</i><sub>1/2</sub> is <b>directly proportional to initial concentration</b> — start with more, and the first halving takes proportionally longer.',
      },
      {
        t: 'p',
        html: 'This single contrast lets you identify the order just by watching how the half-life behaves — no rate-law table needed.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• These tidy integrated forms are derived only for <b>zero- and first-order</b> reactions (the CBSE scope). Second- and higher-order forms exist but are reserved for competitive exams.<br>• Every formula assumes <b>constant temperature</b> (so <i>k</i> is constant) and <b>constant volume</b> for gas-phase work.<br>• A first-order reaction technically takes <b>infinite time to reach 100% completion</b> — each half-life removes only half of what remains, so “completion” is an asymptote, never an event.<br>• For gas-phase reactions we substitute <b>partial pressure for concentration</b>, which is valid only when the ideal-gas relationship <i>p</i> ∝ concentration holds at fixed <i>T</i> and <i>V</i>.',
      },

      { t: 'part', title: 'Key formulas, plots and diagnostic half-lives' },
      {
        t: 'p',
        html: 'For a reaction R → P with initial concentration [R]<sub>0</sub> and concentration [R] at time <i>t</i>:',
      },
      {
        t: 'formula',
        kicker: 'Zero order',
        main: '[R] = [R]<sub>0</sub> − <i>kt</i> ⇒ <i>k</i> = ([R]<sub>0</sub> − [R])/<i>t</i><br>Straight-line plot: [R] vs <i>t</i>, slope = −<i>k</i>, intercept = [R]<sub>0</sub><br>Units of <i>k</i>: mol L<sup>−1</sup> s<sup>−1</sup><br>Half-life: <i>t</i><sub>1/2</sub> = [R]<sub>0</sub>/(2<i>k</i>) (<i>t</i><sub>1/2</sub> ∝ [R]<sub>0</sub>)',
        legend: [
          '[R] = concentration at time <i>t</i>',
          '[R]<sub>0</sub> = initial concentration',
          '<i>k</i> = rate constant',
          '<i>t</i> = time',
          '<i>t</i><sub>1/2</sub> = half-life',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'First order',
        main: 'ln([R]<sub>0</sub>/[R]) = <i>kt</i> ⇔ [R] = [R]<sub>0</sub> <i>e</i><sup>−<i>kt</i></sup> ⇔ <i>k</i> = (2.303/<i>t</i>) log([R]<sub>0</sub>/[R])<br>Straight-line plots: ln[R] vs <i>t</i> (slope = −<i>k</i>); or log([R]<sub>0</sub>/[R]) vs <i>t</i> (slope = <i>k</i>/2.303)<br>Units of <i>k</i>: s<sup>−1</sup><br>Half-life: <i>t</i><sub>1/2</sub> = 0.693/<i>k</i> (independent of [R]<sub>0</sub>)',
        legend: [
          '[R] = concentration at time <i>t</i>',
          '[R]<sub>0</sub> = initial concentration',
          '<i>k</i> = rate constant',
          '<i>t</i> = time',
          '<i>t</i><sub>1/2</sub> = half-life',
        ],
        note: null,
      },
      { t: 'fig', id: 'c12-03-fig-3.2' },
      {
        t: 'formula',
        kicker: 'Gas-phase first order (e.g. A(g) → B(g) + C(g), start with pure A at <i>p</i><sub>i</sub>, total pressure <i>p</i><sub>t</sub> at time <i>t</i>)',
        main: '<i>k</i> = (2.303/<i>t</i>) log(<i>p</i><sub>i</sub>/(2<i>p</i><sub>i</sub> − <i>p</i><sub>t</sub>))',
        legend: [
          '<i>k</i> = rate constant',
          '<i>t</i> = time',
          '<i>p</i><sub>i</sub> = initial pressure of pure A',
          '<i>p</i><sub>t</sub> = total pressure at time <i>t</i>',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'General order-from-half-life relationship (for a reaction of order <i>n</i>)',
        main: '<i>t</i><sub>1/2</sub> ∝ [R]<sub>0</sub><sup>1−<i>n</i></sup> ⇒ log <i>t</i><sub>1/2</sub> = (1 − <i>n</i>) log[R]<sub>0</sub> + const',
        legend: [
          '<i>t</i><sub>1/2</sub> = half-life',
          '[R]<sub>0</sub> = initial concentration',
          '<i>n</i> = order of the reaction',
          'const = a constant',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'A plot of log <i>t</i><sub>1/2</sub> vs log[R]<sub>0</sub> has <b>slope</b> (1 − <i>n</i>) — the cleanest experimental route to the order.',
      },
      {
        t: 'p',
        html: '<b>Beyond the CBSE scope (useful for JEE).</b> The second-order half-life is inversely proportional to initial concentration, <i>t</i><sub>1/2</sub> = 1/(<i>k</i>[R]<sub>0</sub>), completing the pattern: zero order scales with [R]<sub>0</sub>, first order ignores it, second order scales with 1/[R]<sub>0</sub>. A compact result worth memorising for higher-fraction questions is the ratio of the three-quarter life to the half-life for an order-<i>n</i> reaction,<br><i>t</i><sub>3/4</sub>/<i>t</i><sub>1/2</sub> = 2<sup><i>n</i>−1</sup> + 1,<br>which gives 2 for first order (consistent with <i>t</i><sub>75%</sub> = 2 <i>t</i><sub>1/2</sub>) and 3 for second order — a fast consistency check on any completion-time answer.',
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: '<b>Derivation A — Zero-order integrated rate equation</b><br>For R → P, a zero-order rate means the rate is independent of concentration:<br>Rate = −d[R]/d<i>t</i> = <i>k</i>[R]<sup>0</sup> = <i>k</i>',
      },
      {
        t: 'p',
        html: '<b>Physical reasoning:</b> the reaction proceeds at a fixed pace set only by <i>k</i> (often because a catalyst surface or light intensity, not the bulk reactant, controls it). Rearranging and integrating:<br>d[R] = −<i>k</i> d<i>t</i> ⇒ ∫d[R] = −<i>k</i> ∫d<i>t</i> ⇒ [R] = −<i>kt</i> + <i>I</i>',
      },
      {
        t: 'p',
        html: 'The integration constant <i>I</i> is fixed by the initial condition: at <i>t</i> = 0, [R] = [R]<sub>0</sub>, so <i>I</i> = [R]<sub>0</sub>. Hence<br>[R] = [R]<sub>0</sub> − <i>kt</i><br>This is the equation of a straight line (<i>y</i> = <i>mx</i> + <i>c</i>) with slope −<i>k</i>.',
      },
      {
        t: 'p',
        html: '<b>Half-life:</b> set [R] = [R]<sub>0</sub>/2 at <i>t</i> = <i>t</i><sub>1/2</sub>:<br>[R]<sub>0</sub>/2 = [R]<sub>0</sub> − <i>k</i> <i>t</i><sub>1/2</sub> ⇒ <i>t</i><sub>1/2</sub> = [R]<sub>0</sub>/(2<i>k</i>)<br>showing <i>t</i><sub>1/2</sub> ∝ [R]<sub>0</sub>.',
      },
      {
        t: 'p',
        html: '<b>Derivation B — First-order integrated rate equation</b><br>For R → P with first-order kinetics:<br>−d[R]/d<i>t</i> = <i>k</i>[R] ⇒ d[R]/[R] = −<i>k</i> d<i>t</i>',
      },
      {
        t: 'p',
        html: '<b>Reasoning:</b> separating variables isolates concentration on one side and time on the other so each can be integrated independently. Integrating:<br>ln[R] = −<i>kt</i> + ln[R]<sub>0</sub><br>(the constant is ln[R]<sub>0</sub> from <i>t</i> = 0). Rearranged into the two exam-standard forms:<br>ln([R]<sub>0</sub>/[R]) = <i>kt</i> or <i>k</i> = (2.303/<i>t</i>) log([R]<sub>0</sub>/[R])',
      },
      {
        t: 'p',
        html: 'Taking the antilog gives the exponential decay form [R] = [R]<sub>0</sub> <i>e</i><sup>−<i>kt</i></sup>.',
      },
      {
        t: 'p',
        html: '<b>Half-life:</b> at <i>t</i><sub>1/2</sub>, [R] = [R]<sub>0</sub>/2, so<br><i>k</i> = (2.303/<i>t</i><sub>1/2</sub>) log([R]<sub>0</sub>/([R]<sub>0</sub>/2)) = (2.303/<i>t</i><sub>1/2</sub>) log 2 = (2.303 × 0.301)/<i>t</i><sub>1/2</sub> ⇒ <i>t</i><sub>1/2</sub> = 0.693/<i>k</i><br>The [R]<sub>0</sub> cancels — proving the first-order half-life is independent of how much you start with.',
      },
      {
        t: 'p',
        html: '<b>Derivation C — First-order kinetics from total pressure (gas phase)</b><br>For gas-phase reactions we rarely measure concentration directly; we measure <b>total pressure</b> with a manometer. Consider A(g) → B(g) + C(g) starting from pure A at initial pressure <i>p</i><sub>i</sub>. <b>Reasoning:</b> at fixed <i>T</i> and <i>V</i>, each species’ partial pressure is proportional to its moles, so we can track the reaction in pressure units exactly as we would in concentration units. Let <i>x</i> be the fall in the pressure of A at time <i>t</i>; by stoichiometry B and C each rise by <i>x</i>:',
      },
      {
        t: 'table',
        title: 'A(g) → B(g) + C(g)',
        head: ['', 'A(g)', 'B(g)', 'C(g)'],
        rows: [
          ['<i>t</i> = 0:', '<i>p</i><sub>i</sub>', '0', '0'],
          ['<i>t</i>:', '<i>p</i><sub>i</sub> − <i>x</i>', '<i>x</i>', '<i>x</i>'],
        ],
      },
      {
        t: 'p',
        html: 'The total pressure is <i>p</i><sub>t</sub> = (<i>p</i><sub>i</sub> − <i>x</i>) + <i>x</i> + <i>x</i> = <i>p</i><sub>i</sub> + <i>x</i>, so <i>x</i> = <i>p</i><sub>t</sub> − <i>p</i><sub>i</sub>, and the surviving pressure of A is<br><i>p</i><sub>A</sub> = <i>p</i><sub>i</sub> − <i>x</i> = <i>p</i><sub>i</sub> − (<i>p</i><sub>t</sub> − <i>p</i><sub>i</sub>) = 2<i>p</i><sub>i</sub> − <i>p</i><sub>t</sub>.',
      },
      {
        t: 'p',
        html: 'Substituting into the first-order law (now in pressure) gives the working equation:<br><i>k</i> = (2.303/<i>t</i>) log(<i>p</i><sub>i</sub>/<i>p</i><sub>A</sub>) = (2.303/<i>t</i>) log(<i>p</i><sub>i</sub>/(2<i>p</i><sub>i</sub> − <i>p</i><sub>t</sub>))',
      },
      {
        t: 'p',
        html: 'The single trap to remember: the manometer reads <i>p</i><sub>t</sub>, but the rate law needs <i>p</i><sub>A</sub>, which you recover from the stoichiometric balance.',
      },
      {
        t: 'p',
        html: 'When a problem hands you <i>t</i><sub>1/2</sub> at two or more initial concentrations, you can skip the rate-law table entirely:',
      },
      {
        t: 'proc',
        title: 'Procedure — Reading the order straight from half-life data',
        steps: [
          '<b>Form the ratio</b> <i>t</i><sub>1/2</sub>(run 2)/<i>t</i><sub>1/2</sub>(run 1) and compare with [R]<sub>0</sub>(run 2)/[R]<sub>0</sub>(run 1).',
          '<b>Match to</b> <i>t</i><sub>1/2</sub> ∝ [R]<sub>0</sub><sup>1−<i>n</i></sup>: if <i>t</i><sub>1/2</sub> is unchanged → <i>n</i> = 1; if <i>t</i><sub>1/2</sub> scales with [R]<sub>0</sub> → <i>n</i> = 0; if it scales with 1/[R]<sub>0</sub> → <i>n</i> = 2. <b>Reasoning:</b> the exponent on [R]<sub>0</sub> in the half-life expression is precisely (1 − <i>n</i>), so the way half-life tracks concentration is a direct fingerprint of order.',
          '<b>For graphical data,</b> plot log <i>t</i><sub>1/2</sub> vs log[R]<sub>0</sub>; the slope is (1 − <i>n</i>), giving the order in one step.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A first-order reaction has a rate constant <i>k</i> = 2.31 × 10<sup>−3</sup> s<sup>−1</sup>. Calculate (a) its half-life, and (b) the time required for 75% of the reactant to be consumed.',
        steps: [
          '(a) <i>t</i><sub>1/2</sub> = 0.693/<i>k</i> = 0.693/(2.31 × 10<sup>−3</sup>)',
          '(b) After 75% consumption, [R] = 0.25[R]<sub>0</sub>, i.e. one quarter remains — which is two successive halvings. So<br><i>t</i><sub>75%</sub> = 2 <i>t</i><sub>1/2</sub> = 2 × 300',
          '(Check via the formula: <i>t</i> = (2.303/<i>k</i>) log([R]<sub>0</sub>/(0.25[R]<sub>0</sub>)) = (2.303/(2.31 × 10<sup>−3</sup>)) log 4 = (2.303 × 0.602)/(2.31 × 10<sup>−3</sup>) ≈ 600 s.)',
        ],
        ans: '(a) <i>t</i><sub>1/2</sub> = 300 s; (b) <i>t</i><sub>75%</sub> = 600 s',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A first-order reaction is 75% complete in 60 minutes. The time required for it to be 93.75% complete is:<br>(a) 75 min (b) 90 min (c) 120 min (d) 240 min',
        steps: [
          '<b>Quick reasoning (no calculator).</b> For first order, work in half-lives using “fraction remaining = (1/2)<sup><i>m</i></sup>.” 75% complete → 25% remaining = (1/2)<sup>2</sup> → <i>m</i> = 2 half-lives = 60 min, so <i>t</i><sub>1/2</sub> = 30 min. Now 93.75% complete → 6.25% remaining = 1/16 = (1/2)<sup>4</sup> → <i>m</i> = 4 half-lives = 4 × 30',
          '<b>The trap:</b> students who grind through (2.303/<i>k</i>) log(…) twice waste two minutes and risk arithmetic slips. The instant you see “first order,” reach for the powers-of-two ladder.',
        ],
        ans: '120 min. (c).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'For the reaction A → products, the half-life is measured at two starting concentrations:<br>[A]<sub>0</sub> = 0.10 mol L<sup>−1</sup>: <i>t</i><sub>1/2</sub> = 40 min<br>[A]<sub>0</sub> = 0.20 mol L<sup>−1</sup>: <i>t</i><sub>1/2</sub> = 80 min<br>Determine the order of the reaction and the rate constant.',
        steps: [
          'When [A]<sub>0</sub> doubles, <i>t</i><sub>1/2</sub> also doubles, i.e. <i>t</i><sub>1/2</sub> ∝ [A]<sub>0</sub>. Compare with <i>t</i><sub>1/2</sub> ∝ [A]<sub>0</sub><sup>1−<i>n</i></sup>: we need 1 − <i>n</i> = 1.',
          'For zero order, <i>t</i><sub>1/2</sub> = [A]<sub>0</sub>/(2<i>k</i>). Using the first row:<br>40 = 0.10/(2<i>k</i>) ⇒ <i>k</i> = 0.10/80',
          '(Verify with row 2: <i>t</i><sub>1/2</sub> = 0.20/(2 × 1.25 × 10<sup>−3</sup>) = 80 min. ✓) The multi-concept skill is reading the order from the half-life behaviour, then feeding it into the matching integrated form to extract <i>k</i> with correct (zero-order) units.',
        ],
        ans: '<i>n</i> = 0 — a zero-order reaction; <i>k</i> = 1.25 × 10<sup>−3</sup> mol L<sup>−1</sup> min<sup>−1</sup> (1.2 × 10<sup>−3</sup> mol L<sup>−1</sup> min<sup>−1</sup> to two significant figures)',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'The gas-phase decomposition A(g) → 2B(g) + C(g) follows first-order kinetics. Starting with pure A at an initial pressure of 0.50 atm, the total pressure of the system is found to be 0.80 atm after 20 min at constant temperature and volume. Calculate the rate constant and the half-life. (Take log 1.4286 = 0.1549.)',
        steps: [
          'Let the partial pressure of A that has reacted at time <i>t</i> be <i>x</i>. By stoichiometry, B rises by 2<i>x</i> and C by <i>x</i>:<br>A(g) → 2B(g) + C(g)<br><i>t</i> = 0: A 0.50, B 0, C 0<br><i>t</i>: A 0.50 − <i>x</i>, B 2<i>x</i>, C <i>x</i>',
          'Total pressure: <i>p</i><sub>t</sub> = (0.50 − <i>x</i>) + 2<i>x</i> + <i>x</i> = 0.50 + 2<i>x</i>. Given <i>p</i><sub>t</sub> = 0.80:<br>0.80 = 0.50 + 2<i>x</i> ⇒ <i>x</i> = 0.15 atm',
          'So the remaining pressure of A is <i>p</i><sub>A</sub> = 0.50 − 0.15 = 0.35 atm. For a first-order reaction in terms of the reactant’s own pressure:<br><i>k</i> = (2.303/<i>t</i>) log(<i>p</i><sub>A,0</sub>/<i>p</i><sub>A</sub>) = (2.303/20) log(0.50/0.35) = (2.303/20) × 0.1549',
          '<i>t</i><sub>1/2</sub> = 0.693/<i>k</i> = 0.693/(1.78 × 10<sup>−2</sup>)',
          'The Advanced-level catch is the pressure bookkeeping: the measured total pressure is not the reactant pressure, so you must back out <i>p</i><sub>A</sub> from the stoichiometric balance before applying the first-order law.',
        ],
        ans: '<i>k</i> = 1.78 × 10<sup>−2</sup> min<sup>−1</sup> (1.8 × 10<sup>−2</sup> min<sup>−1</sup> to two significant figures); <i>t</i><sub>1/2</sub> ≈ 38.9 min (39 min to two significant figures)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] The decomposition of a compound is first order with <i>k</i> = 4.62 × 10<sup>−2</sup> min<sup>−1</sup>. What percentage of the compound remains after 30 minutes? (Take log as needed.)',
            a: '≈ 25% remains.',
          },
          {
            q: '[NEET] For a zero-order reaction, the half-life is 25 s when the initial concentration is 0.40 mol L<sup>−1</sup>. What is the half-life if the initial concentration is raised to 0.80 mol L<sup>−1</sup>?',
            a: '50 s (<i>t</i><sub>1/2</sub> ∝ [R]<sub>0</sub>).',
          },
          {
            q: '[JEE Main] A first-order reaction takes 20 minutes for 25% completion. Calculate the time it will take for 87.5% completion.',
            a: '≈ 144.6 min (≈ 1.4 × 10<sup>2</sup> min to two significant figures); <i>t</i><sub>1/2</sub> ≈ 48.2 min, from <i>k</i> = (2.303/20) log(4/3) ≈ 1.44 × 10<sup>−2</sup> min<sup>−1</sup>; 87.5% = 3 <i>t</i><sub>1/2</sub>.',
          },
          {
            q: '[JEE Main] For A → products, log <i>t</i><sub>1/2</sub> plotted against log[A]<sub>0</sub> gives a straight line of slope −1. State the order of the reaction and write the form of its integrated rate equation.',
            a: 'Second order (1 − <i>n</i> = −1); 1/[A] − 1/[A]<sub>0</sub> = <i>kt</i>.',
          },
          {
            q: '[JEE Advanced] For the gas-phase first-order reaction X(g) → Y(g) + Z(g), starting from pure X at 1.0 atm, the total pressure becomes 1.6 atm after 10 min. Find <i>k</i> and the total pressure at <i>t</i> = <i>t</i><sub>1/2</sub>.',
            a: '<i>k</i> ≈ 9.16 × 10<sup>−2</sup> min<sup>−1</sup> (9.2 × 10<sup>−2</sup> min<sup>−1</sup> to two significant figures); at <i>t</i><sub>1/2</sub>, <i>p</i><sub>X</sub> = 0.5 atm so <i>p</i><sub>t</sub> = 1.5 atm.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The half-life of a first-order reaction is 20 minutes. The fraction of reactant left after 1 hour is:',
        opts: [
          { label: '1/2', nudge: '<b>(a)</b> takes only one half-life.' },
          { label: '1/4', nudge: '<b>(b)</b> takes two half-lives (40 min).' },
          { label: '1/8', nudge: null },
          { label: '1/16', nudge: '<b>(d)</b> takes four half-lives (80 min) — overshooting the time.' },
        ],
        correct: 2,
        solution: '1 hour = 60 min = 3 half-lives, so fraction remaining = (1/2)<sup>3</sup> = 1/8.',
      },
      {
        t: 'mcq',
        q: 'For a zero-order reaction, doubling the initial concentration changes the half-life by a factor of:',
        opts: [
          { label: '1 (unchanged)', nudge: '<b>(a)</b> is the first-order answer — the classic confusion trap.' },
          { label: '2', nudge: null },
          { label: '1/2', nudge: '<b>(c)</b> inverts the proportionality.' },
          { label: '4', nudge: '<b>(d)</b> would require <i>t</i><sub>1/2</sub> ∝ [R]<sub>0</sub><sup>2</sup>, which is not the zero-order relationship.' },
        ],
        correct: 1,
        solution: 'For zero order <i>t</i><sub>1/2</sub> = [R]<sub>0</sub>/(2<i>k</i>) ∝ [R]<sub>0</sub>, so it doubles.',
      },
      {
        t: 'mcq',
        q: 'The straight-line plot that confirms a reaction is first order is:',
        opts: [
          { label: '[R] vs <i>t</i>', nudge: '<b>(a)</b> is linear for <b>zero</b> order, not first.' },
          { label: 'log[R] vs <i>t</i>', nudge: null },
          { label: '1/[R] vs <i>t</i>', nudge: '<b>(c)</b> is linear for <b>second</b> order.' },
          { label: '[R]<sup>2</sup> vs <i>t</i>', nudge: '<b>(d)</b> corresponds to no standard order.' },
        ],
        correct: 1,
        solution: 'Since log[R] = log[R]<sub>0</sub> − (<i>k</i>/2.303)<i>t</i>, a plot of log[R] vs <i>t</i> is linear with slope −<i>k</i>/2.303.',
      },
      {
        t: 'mcq',
        q: 'A first-order reaction is 99.9% complete in time <i>t</i>. The ratio <i>t</i>/<i>t</i><sub>1/2</sub> is closest to:',
        opts: [
          { label: '2', nudge: '<b>(a)</b> underestimates the long tail of exponential decay.' },
          { label: '5', nudge: '<b>(b)</b> underestimates the long tail of exponential decay.' },
          { label: '10', nudge: null },
          { label: '100', nudge: '<b>(d)</b> confuses the percentage figure with the time ratio.' },
        ],
        correct: 2,
        solution: '<i>t</i><sub>99.9%</sub> = (2.303/<i>k</i>) log(100/0.1) = (2.303 × 3)/<i>k</i> = 6.909/<i>k</i>, while <i>t</i><sub>1/2</sub> = 0.693/<i>k</i>, so the ratio ≈ 9.97 ≈ 10.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Swapping the half-life rules.</b> First order → <i>t</i><sub>1/2</sub> independent of [R]<sub>0</sub>; zero order → <i>t</i><sub>1/2</sub> ∝ [R]<sub>0</sub>. Mixing these up is the most common MCQ error in this topic.',
          '<b>Dropping the 2.303.</b> When using base-10 logs, the first-order constant is <i>k</i> = (2.303/<i>t</i>) log([R]<sub>0</sub>/[R]). Forgetting the 2.303 (or using it with natural logs) is a guaranteed-wrong answer.',
          '<b>Plugging total pressure into the rate law.</b> In gas-phase problems, the rate law needs the reactant’s partial pressure, which you must extract from the stoichiometric balance — never the measured total pressure directly.',
          '<b>Treating “100% completion” as finite.</b> For first order it is asymptotic (infinite time). Questions about “time for completion” are really about a stated fraction (99%, 99.9%, etc.).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For first-order fraction problems, translate the percentage into halvings before touching a calculator. 50% → 1 <i>t</i><sub>1/2</sub>, 75% → 2, 87.5% → 3, 93.75% → 4, 99.9% → ≈ 10. Most “first-order completion” MCQs collapse to counting half-lives.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Zero order',
            note: '[R] = [R]<sub>0</sub> − <i>kt</i>; plot [R] vs <i>t</i>, slope −<i>k</i>; <i>t</i><sub>1/2</sub> = [R]<sub>0</sub>/(2<i>k</i>) (∝ [R]<sub>0</sub>); units of <i>k</i>: mol L<sup>−1</sup> s<sup>−1</sup>.',
          },
          {
            f: 'First order',
            note: '<i>k</i> = (2.303/<i>t</i>) log([R]<sub>0</sub>/[R]), [R] = [R]<sub>0</sub> <i>e</i><sup>−<i>kt</i></sup>; plot log[R] vs <i>t</i>, slope −<i>k</i>/2.303; <i>t</i><sub>1/2</sub> = 0.693/<i>k</i> (independent of [R]<sub>0</sub>); units s<sup>−1</sup>.',
          },
          {
            f: 'Order from half-life',
            note: 'plot log <i>t</i><sub>1/2</sub> vs log[R]<sub>0</sub>, <b>slope</b> = 1 − <i>n</i>.',
          },
          {
            f: 'Half-life vs concentration (full pattern)',
            note: 'zero order <i>t</i><sub>1/2</sub> ∝ [R]<sub>0</sub>; first order independent of [R]<sub>0</sub>; second order <i>t</i><sub>1/2</sub> = 1/(<i>k</i>[R]<sub>0</sub>) (∝ 1/[R]<sub>0</sub>). Consistency check: <i>t</i><sub>3/4</sub>/<i>t</i><sub>1/2</sub> = 2<sup><i>n</i>−1</sup> + 1.',
          },
          {
            f: 'First-order completion ladder',
            note: '50% → 1, 75 → 2, 87.5 → 3, 99.9 → ≈ 10 half-lives.',
          },
          {
            f: 'Gas-phase first order',
            note: '<i>k</i> = (2.303/<i>t</i>) log(<i>p</i><sub>i</sub>/(2<i>p</i><sub>i</sub> − <i>p</i><sub>t</sub>)) (for A → B + C).',
          },
        ],
        aids: [
          '“First order forgets the start” — <i>t</i><sub>1/2</sub> doesn’t care about [R]<sub>0</sub>.',
          '“Zero scales with zero-time start” — zero-order <i>t</i><sub>1/2</sub> ∝ [R]<sub>0</sub>.',
          '“2.303 lives with log” — pair them or lose the marks.',
        ],
      },
    ],
  },
];
