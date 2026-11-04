import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topic 01: Rate of Reaction & Rate Law, pp. 102–110 of the Class 12
 * Chemistry Master Reference, word for word, split at its Sections 1 to 8.
 * Figure 3.1 (caption p. 105, drawn p. 106) is placed where it illustrates the
 * text and redrawn in lib/diagrams/chemistry-12-03.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 102–110 ─────────────────────────
  {
    n: '01',
    title: 'Rate of Reaction & Rate Law',
    kalam: 'The rate of reaction is just how fast reactant concentration falls (or product concentration rises) per unit time.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the conceptual gateway to the whole chapter. CBSE Boards lift 1–3 marks from definitions (order, molecularity, rate law) and a “write the rate expression” question almost every year. NEET reliably asks one order/molecularity discriminator. JEE Main loves the initial-rate data table and the units-of-<i>k</i> trap; JEE Advanced pushes into deriving order from a proposed mechanism, where the slow-step molecularity and the overall order deliberately disagree.',
      },
      {
        t: 'p',
        html: 'Imagine you are standing on the foot-over-bridge at a busy railway station watching the ticket queue at the counter below. Two things are obviously different: how many tickets get sold in total over the whole morning versus how fast tickets are moving right now, this very second. The morning total divided by the morning hours is an <b>average rate</b>. The speed at this instant — which spikes when a train is announced and crawls during a lull — is the <b>instantaneous rate</b>. Chemical reactions behave exactly the same way. The <b>rate of reaction</b> is just how fast reactant concentration falls (or product concentration rises) per unit time.',
      },
      {
        t: 'p',
        html: 'For a reaction we measure this as a change in concentration over a change in time. If a reactant A disappears, its concentration [A] shrinks, so d[A]/d<i>t</i> is negative; we slap a minus sign in front so the rate comes out positive. Products grow, so their derivative is already positive.',
      },
      {
        t: 'p',
        html: 'Here is the subtle bit that trips up half the class. Consider:<br>N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub>',
      },
      {
        t: 'p',
        html: 'For every 1 molecule of N<sub>2</sub> that vanishes, 3 of H<sub>2</sub> vanish and 2 of NH<sub>3</sub> appear. So the three species are not changing at the same numerical speed — hydrogen drops three times faster than nitrogen. To get <b>one single number</b> that everybody agrees to call “the rate of the reaction,” we divide each species’ rate by its stoichiometric coefficient:<br>Rate = −d[N<sub>2</sub>]/d<i>t</i> = −(1/3) d[H<sub>2</sub>]/d<i>t</i> = +(1/2) d[NH<sub>3</sub>]/d<i>t</i>',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture a thali assembly line in a wedding kitchen. To plate one thali you need 1 bowl of dal, 3 rotis and you produce 2 sweets. The rotis get consumed three times as fast as the dal — but the line speed (thalis per minute) is a single agreed number. Dividing by the coefficient is how chemistry agrees on the “line speed.”',
      },
      {
        t: 'p',
        html: 'Now, what controls this rate? Experiment — and only experiment — tells us. We find that rate usually depends on the concentrations of reactants raised to certain powers:<br>Rate = <i>k</i>[A]<sup><i>x</i></sup>[B]<sup><i>y</i></sup>',
      },
      {
        t: 'p',
        html: 'This experimentally observed relationship is the <b>rate law</b>. The sum <i>x</i> + <i>y</i> is the <b>order</b> of the reaction, and <i>k</i> is the <b>rate constant</b>. Crucially, <i>x</i> and <i>y</i> are found in the lab; you cannot read them off the balanced equation. A balanced equation is bookkeeping for atoms, not a stopwatch for speed.',
      },
      {
        t: 'p',
        html: 'Sitting right next to “order” is its frequently-confused cousin, <b>molecularity</b> — the number of reactant species (atoms, ions, molecules) that take part in a single elementary step. Molecularity is something you can only count for a reaction that happens in one shot.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• Order is meaningful for any reaction (simple or multi-step); <b>molecularity is defined only for elementary reactions</b> — for a multi-step (complex) reaction the overall molecularity is meaningless because each step has its own.<br>• The rate law Rate = <i>k</i>[A]<sup><i>x</i></sup>[B]<sup><i>y</i></sup> holds at a fixed temperature; change <i>T</i> and <i>k</i> changes.<br>• Order is guaranteed to equal the stoichiometric coefficients <b>only</b> for genuinely elementary reactions. For everything else, assuming so is the single most common error in this chapter.<br>• A “zero-order” rate law (rate independent of concentration) is an idealisation that typically holds only over a limited window — e.g. a surface-catalysed decomposition while the catalyst surface stays saturated.',
      },

      { t: 'part', title: 'Key definitions, formulas and units of the rate constant' },
      {
        t: 'formula',
        kicker: 'Average rate over an interval Δ<i>t</i>',
        main: 'Rate<sub>avg</sub> = −Δ[A]/(<i>a</i> Δ<i>t</i>) = +Δ[C]/(<i>c</i> Δ<i>t</i>)',
        legend: [
          'Rate<sub>avg</sub> = average rate',
          'Δ[A] = change in the molar concentration of reactant A',
          'Δ[C] = change in the molar concentration of product C',
          '<i>a</i>, <i>c</i> = stoichiometric coefficients of A and C',
          'Δ<i>t</i> = time interval',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Instantaneous rate (from the slope of the tangent on a concentration–time curve)',
        main: 'Rate<sub>inst</sub> = −(1/<i>a</i>) d[A]/d<i>t</i> = +(1/<i>c</i>) d[C]/d<i>t</i>',
        legend: [
          'Rate<sub>inst</sub> = instantaneous rate',
          'd[A]/d<i>t</i> = rate of change of the molar concentration of reactant A',
          'd[C]/d<i>t</i> = rate of change of the molar concentration of product C',
          '<i>a</i>, <i>c</i> = stoichiometric coefficients of A and C',
        ],
        note: null,
      },
      { t: 'fig', id: 'c12-03-fig-3.1' },
      {
        t: 'formula',
        kicker: 'Rate law / rate constant for <i>a</i>A + <i>b</i>B → products',
        main: 'Rate = <i>k</i>[A]<sup><i>x</i></sup>[B]<sup><i>y</i></sup><br>Order <i>n</i> = <i>x</i> + <i>y</i>',
        legend: [
          'Rate = rate of reaction',
          '<i>k</i> = rate constant (specific reaction rate)',
          '[A], [B] = molar concentrations of A, B',
          '<i>x</i>, <i>y</i> = order w.r.t. A, B',
          '<i>n</i> = overall order',
          '<i>a</i>, <i>b</i> = stoichiometric coefficients of A and B',
        ],
        note: null,
      },
      {
        t: 'table',
        title: null,
        head: ['Symbol', 'Meaning', 'Unit'],
        rows: [
          ['[A]', 'molar concentration of A', 'mol L<sup>−1</sup>'],
          ['Rate', 'rate of reaction', 'mol L<sup>−1</sup> s<sup>−1</sup>'],
          ['<i>k</i>', 'rate constant (specific reaction rate)', 'depends on order — see below'],
          ['<i>x</i>, <i>y</i>', 'order w.r.t. A, B', 'dimensionless'],
          ['<i>n</i>', 'overall order', 'dimensionless'],
        ],
      },
      {
        t: 'p',
        html: '<b>Rate constant <i>k</i> (specific reaction rate):</b> the value of the rate when every reactant concentration equals unity. Three defining properties: <i>k</i> is <b>independent of concentration</b>, it <b>depends on temperature</b>, and, at the same concentrations for reactions of the same order, a <b>larger <i>k</i> means a faster reaction</b>.',
      },
      {
        t: 'p',
        html: '<b>Units of <i>k</i> by order</b> — the diagnostic worth memorising. Since <i>k</i> = Rate/[conc]<sup><i>n</i></sup>:',
      },
      {
        t: 'formula',
        kicker: 'Units of <i>k</i> by order',
        main: '[<i>k</i>] = (mol L<sup>−1</sup>)<sup>1−<i>n</i></sup> s<sup>−1</sup> = mol<sup>1−<i>n</i></sup> L<sup><i>n</i>−1</sup> s<sup>−1</sup>',
        legend: ['[<i>k</i>] = units of the rate constant', '<i>n</i> = overall order'],
        note: null,
      },
      {
        t: 'defgrid',
        title: 'Order n — Units of k',
        rows: [
          { k: '0', v: 'mol L<sup>−1</sup> s<sup>−1</sup>' },
          { k: '1', v: 's<sup>−1</sup>' },
          { k: '2', v: 'L mol<sup>−1</sup> s<sup>−1</sup>' },
          { k: '3', v: 'L<sup>2</sup> mol<sup>−2</sup> s<sup>−1</sup>' },
          { k: '3/2', v: 'mol<sup>−1/2</sup> L<sup>1/2</sup> s<sup>−1</sup>' },
        ],
      },
      {
        t: 'p',
        html: '<b>Molecularity:</b> number of species in an elementary step; always a whole number (1, 2, 3); never zero, fractional, or > 3 (a four-body simultaneous collision is statistically negligible).',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no single “derivation” for this topic; the examinable skill is a <b>procedure</b> — extracting the rate law from initial-rate data, and reasoning cleanly about order versus molecularity.',
      },
      {
        t: 'proc',
        title: 'Procedure A — Determine the rate law from initial-rate data (the “isolate one variable” method)',
        steps: [
          'Across two experiments, change one reactant’s concentration while holding the others fixed. <b>Reasoning:</b> if two things change at once you cannot attribute the rate change to either — the same logic as a controlled experiment in any science.',
          'Form the ratio of rates and the ratio of that concentration. The order <i>x</i> w.r.t. that reactant satisfies Rate<sub>2</sub>/Rate<sub>1</sub> = ([A]<sub>2</sub>/[A]<sub>1</sub>)<sup><i>x</i></sup>.',
          'Solve for <i>x</i> (often by inspection — doubling concentration that doubles rate ⟹ <i>x</i> = 1; doubling that quadruples rate ⟹ <i>x</i> = 2).',
          'Repeat for each reactant, then sum the exponents for overall order.',
          'Back-substitute any one experiment into Rate = <i>k</i>[A]<sup><i>x</i></sup>[B]<sup><i>y</i></sup> to extract <i>k</i> — and report its units, which double as a check on your order.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B — Decide order vs molecularity for a multi-step reaction',
        steps: [
          'Identify whether the reaction is elementary (one step) or complex (a sequence of elementary steps via a mechanism).',
          'For an <b>elementary</b> step, order = molecularity = sum of coefficients in that step. This is the only situation where the balanced equation is guaranteed to give the rate law directly.',
          'For a <b>complex</b> reaction, locate the <b>rate-determining step</b> (the slowest step — the bottleneck). <b>Reasoning:</b> a chain is only as fast as its slowest link; the kitchen line is throttled by whichever station is slowest.',
          'Write the rate in terms of the slow step’s species. If any of those species is a fast-formed intermediate, replace it using the fast (pre-equilibrium) step before reading off the order.',
        ],
      },
      {
        t: 'p',
        html: '<b>Board-level shortcut vs. the rigorous truth.</b> NCERT says the molecularity of the slowest step is generally the same as the order of the overall reaction. This is true only when the slow step contains no fast-equilibrium intermediate. The moment an intermediate must be substituted (Procedure B, step 4), the overall order can exceed the slow step’s molecularity — exactly the JEE-Advanced trap in worked example 4.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'For the reaction 2A + B → C, the experimentally determined rate law is Rate = <i>k</i>[A][B]<sup>2</sup>. <b>(i)</b> State the order with respect to A, with respect to B, and the overall order. <b>(ii)</b> Write the units of <i>k</i>. <b>(iii)</b> By what factor does the rate change if [A] is doubled and [B] is tripled simultaneously?',
        steps: [
          '<b>(i)</b> Exponent of [A] is 1 ⟹ first order in A. Exponent of [B] is 2 ⟹ second order in B. Overall order <i>n</i> = 1 + 2 = 3.',
          '<b>(ii)</b> Using [<i>k</i>] = mol<sup>1−<i>n</i></sup> L<sup><i>n</i>−1</sup> s<sup>−1</sup> with <i>n</i> = 3:<br>[<i>k</i>] = mol<sup>−2</sup> L<sup>2</sup> s<sup>−1</sup> = L<sup>2</sup> mol<sup>−2</sup> s<sup>−1</sup>',
          '<b>(iii)</b> New rate = <i>k</i>(2[A])(3[B])<sup>2</sup> = <i>k</i> · 2 · 9 · [A][B]<sup>2</sup> = 18 (old rate). The rate becomes <b>18 times</b> the original. Note we did not touch the coefficient “2” in 2A — stoichiometric coefficients never enter an experimentally given rate law.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The following initial-rate data were collected for P + Q → R (concentrations in mol L<sup>−1</sup>, initial rate in mol L<sup>−1</sup> s<sup>−1</sup>):<br>Exp 1: [P] = 0.10, [Q] = 0.10, rate = 2.0 × 10<sup>−3</sup><br>Exp 2: [P] = 0.20, [Q] = 0.10, rate = 4.0 × 10<sup>−3</sup><br>Exp 3: [P] = 0.10, [Q] = 0.30, rate = 1.8 × 10<sup>−2</sup><br>Find the overall order in under 30 seconds.',
        steps: [
          '<b>Speed solution (no algebra, just ratios).</b>',
          'Exp 1 → 2: [P] doubles, [Q] fixed, rate doubles (×2). 2 = 2<sup><i>x</i></sup> ⇒ <i>x</i> = 1.',
          'Exp 1 → 3: [Q] triples, [P] fixed, rate goes from 2.0 × 10<sup>−3</sup> to 1.8 × 10<sup>−2</sup>, i.e. ×9. 9 = 3<sup><i>y</i></sup> ⇒ <i>y</i> = 2.',
          '<b>The trap:</b> the panicked student computes <i>k</i> for every row first (wasting 90 seconds) or — worse — assumes order = 1 + 1 = 2 from the “1 P, 1 Q” stoichiometry. Always pick the two rows where only one concentration moved and read the exponent off the rate ratio. The ratio is your friend; the absolute numbers are noise.',
        ],
        ans: 'Overall order = 1 + 2 = 3',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (stoichiometric rate relations + rate law)',
        q: 'For the catalytic oxidation of ammonia, 4NH<sub>3</sub> + 5O<sub>2</sub> → 4NO + 6H<sub>2</sub>O, the rate of formation of NO at a certain instant is 3.6 × 10<sup>−3</sup> mol L<sup>−1</sup> s<sup>−1</sup>. <b>(a)</b> Express the rate of reaction in terms of every species. <b>(b)</b> Find the rate of disappearance of O<sub>2</sub> and of NH<sub>3</sub> at that instant. <b>(c)</b> The reaction is found to be first order in NH<sub>3</sub> and first order in O<sub>2</sub>. Write the rate law and give the units of <i>k</i>.',
        steps: [
          '<b>(a)</b><br>Rate = −(1/4) d[NH<sub>3</sub>]/d<i>t</i> = −(1/5) d[O<sub>2</sub>]/d<i>t</i> = +(1/4) d[NO]/d<i>t</i> = +(1/6) d[H<sub>2</sub>O]/d<i>t</i>',
          '<b>(b)</b> First the single “rate of reaction”:<br>Rate = (1/4) d[NO]/d<i>t</i> = (1/4)(3.6 × 10<sup>−3</sup>) = 9.0 × 10<sup>−4</sup> mol L<sup>−1</sup> s<sup>−1</sup>',
          'Then:<br>−d[O<sub>2</sub>]/d<i>t</i> = 5 × Rate = 5(9.0 × 10<sup>−4</sup>) = 4.5 × 10<sup>−3</sup> mol L<sup>−1</sup> s<sup>−1</sup><br>−d[NH<sub>3</sub>]/d<i>t</i> = 4 × Rate = 4(9.0 × 10<sup>−4</sup>) = 3.6 × 10<sup>−3</sup> mol L<sup>−1</sup> s<sup>−1</sup>',
          '(Sensibly, NH<sub>3</sub> disappears at the same rate NO forms — equal coefficients.)',
          '<b>(c)</b> Rate = <i>k</i>[NH<sub>3</sub>][O<sub>2</sub>], overall order 2, so<br>[<i>k</i>] = mol<sup>1−2</sup> L<sup>2−1</sup> s<sup>−1</sup> = L mol<sup>−1</sup> s<sup>−1</sup>',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (order from a mechanism — slow step ≠ overall order)',
        q: 'A reaction with overall stoichiometry 2A + B → A<sub>2</sub>B is proposed to proceed by:<br>Step 1 (fast equilibrium): A + A ⇌<sup><i>k₁</i></sup><sub><i>k₋₁</i></sub> A<sub>2</sub><br>Step 2 (slow): A<sub>2</sub> + B →<sup><i>k₂</i></sup> A<sub>2</sub>B<br>Derive the rate law, state the overall order, and compare it with the molecularity of the slow step.',
        steps: [
          'The slow step is rate-determining:<br>Rate = <i>k</i><sub>2</sub>[A<sub>2</sub>][B]',
          'But A<sub>2</sub> is a reactive <b>intermediate</b> — its concentration is not something we control, so we must eliminate it. Step 1 is a fast equilibrium, so the forward and reverse rates are essentially balanced:<br><i>k</i><sub>1</sub>[A]<sup>2</sup> = <i>k</i><sub>−1</sub>[A<sub>2</sub>] ⇒ [A<sub>2</sub>] = (<i>k</i><sub>1</sub>/<i>k</i><sub>−1</sub>)[A]<sup>2</sup>',
          'Substituting:<br>Rate = <i>k</i><sub>2</sub>(<i>k</i><sub>1</sub>/<i>k</i><sub>−1</sub>)[A]<sup>2</sup>[B] = <i>k</i><sub>obs</sub>[A]<sup>2</sup>[B], <i>k</i><sub>obs</sub> = (<i>k</i><sub>1</sub><i>k</i><sub>2</sub>)/<i>k</i><sub>−1</sub>',
          'So the overall order (3) is <b>greater</b> than the slow step’s molecularity (2). The naïve reading of NCERT, “order = molecularity of slowest step”, fails here precisely because the slow step swallows an intermediate, which carries the extra [A] dependence in through the pre-equilibrium. This is the discriminating insight JEE Advanced tests.',
        ],
        ans: 'Overall order = 2 + 1 = 3. Molecularity of the slow step (A<sub>2</sub> + B) = 2 (bimolecular).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] For A + 2B → 3C, the rate of disappearance of B is 6.0 × 10<sup>−3</sup> mol L<sup>−1</sup> s<sup>−1</sup>. Find the rate of reaction and the rate of formation of C.',
            a: 'Rate = 3.0 × 10<sup>−3</sup> mol L<sup>−1</sup> s<sup>−1</sup>; rate of formation of C = 9.0 × 10<sup>−3</sup> mol L<sup>−1</sup> s<sup>−1</sup>.',
          },
          {
            q: '[NEET] The rate law of a reaction is Rate = <i>k</i>[X]<sup>2</sup>[Y]<sup>0</sup>. If [X] is halved and [Y] is doubled, by what factor does the rate change?',
            a: '1/4 × (Y has zero order, so it is irrelevant).',
          },
          {
            q: '[JEE Main] A reaction is third order in one reactant and zero order in another. Write the general form of its rate law and the units of <i>k</i>.',
            a: 'Rate = <i>k</i>[A]<sup>3</sup>[B]<sup>0</sup> = <i>k</i>[A]<sup>3</sup>; [<i>k</i>] = L<sup>2</sup> mol<sup>−2</sup> s<sup>−1</sup>.',
          },
          {
            q: '[JEE Main] For L + M → N, tripling [L] (with [M] fixed) raises the rate ninefold, while doubling [M] (with [L] fixed) leaves the rate unchanged. Determine the order w.r.t. each reactant, the overall order, and whether the reaction can be elementary.',
            a: 'Second order in L, zero order in M, overall order 2; cannot be elementary (zero order in a reactant contradicts an elementary one-step picture).',
          },
          {
            q: '[JEE Advanced] A reaction X + 2Y → 2Z has the mechanism: (fast) X ⇌ 2W with equilibrium constant <i>K</i>; (slow) W + Y → Z, rate = <i>k</i><sub>2</sub>[W][Y]. Express the observed rate in terms of [X] and [Y], and state the overall order.',
            a: '[W] = √(<i>K</i>[X]), so Rate = <i>k</i><sub>2</sub>√<i>K</i> [X]<sup>1/2</sup>[Y]; overall order = 3/2.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which statement about the order of a reaction is <b>incorrect</b>?',
        opts: [
          { label: 'It can be a fraction.', nudge: '<b>(a)</b> is genuinely true of order.' },
          { label: 'It can be zero.', nudge: '<b>(b)</b> is genuinely true of order. Zero order is perfectly real (catalysed gas decompositions).' },
          { label: 'It is always equal to the sum of the stoichiometric coefficients.', nudge: null },
          { label: 'It is determined experimentally.', nudge: '<b>(d)</b> is genuinely true of order.' },
        ],
        correct: 2,
        solution: 'Order is guaranteed to equal the stoichiometric-coefficient sum only for elementary reactions, not in general — so as a blanket statement it is false. <b>Trap:</b> a student who memorised the elementary-reaction case overgeneralises it and picks none, or wrongly flags <b>(b)</b> thinking “order can’t be zero.”',
      },
      {
        t: 'mcq',
        q: 'The rate constant of a reaction has units mol<sup>−1/2</sup> L<sup>1/2</sup> s<sup>−1</sup>. The order of the reaction is:',
        opts: [
          { label: '1/2', nudge: '<b>(a)</b> reads the exponent magnitude 1/2 directly; a sign slip, 1 − <i>n</i> = +1/2, gives <i>n</i> = 1/2, the value in <b>(a)</b>.' },
          { label: '3/2', nudge: null },
          { label: '2', nudge: '<b>(c)</b> ignores the half-powers and defaults to “second order”.' },
          { label: '5/2', nudge: '<b>(d)</b> 5/2 is one more than the true order: it comes from adding 1 to 3/2 instead of solving 1 − <i>n</i> = −1/2.' },
        ],
        correct: 1,
        solution: 'Match [<i>k</i>] = mol<sup>1−<i>n</i></sup> L<sup><i>n</i>−1</sup> s<sup>−1</sup> to the given units: 1 − <i>n</i> = −1/2 ⇒ <i>n</i> = 3/2 (the L<sup><i>n</i>−1</sup> = L<sup>1/2</sup> exponent confirms it).',
      },
      {
        t: 'mcq',
        q: 'Which is true for an <b>elementary</b> bimolecular reaction 2A → products?',
        opts: [
          { label: 'Order is 1, molecularity is 2.', nudge: '<b>(a)</b> comes from confusing the two concepts.' },
          { label: 'Order is 2, molecularity is 2.', nudge: null },
          { label: 'Order is 2, molecularity is 1.', nudge: '<b>(c)</b> comes from confusing the two concepts.' },
          { label: 'Order may be fractional.', nudge: '<b>(d)</b> applies the “order can be fractional” rule that is true in general but never for a single elementary step.' },
        ],
        correct: 1,
        solution: 'For an elementary step, order = molecularity = sum of coefficients = 2, and the rate law must be <i>k</i>[A]<sup>2</sup>.',
      },
      {
        t: 'mcq',
        q: 'A rate law is found to be Rate = <i>k</i>[A]<sup>3/2</sup>[B]<sup>−1</sup>. Which inference is correct?',
        opts: [
          { label: 'The reaction must be elementary.', nudge: '<b>(a)</b> ignores that elementary reactions take only positive integer orders.' },
          { label: 'The reaction cannot be elementary, and B inhibits the reaction.', nudge: null },
          { label: 'Molecularity of the reaction is 1/2.', nudge: '<b>(c)</b> invents a fractional molecularity (impossible by definition).' },
          { label: 'Increasing [B] increases the rate.', nudge: '<b>(d)</b> misreads the negative exponent as ordinary positive dependence.' },
        ],
        correct: 1,
        solution: 'A fractional (and a negative) exponent both signal a multi-step mechanism — no elementary step gives 3/2 or −1. The [B]<sup>−1</sup> means rate falls as [B] rises (an inhibitor).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Reading order off the balanced equation.</b> The most expensive mistake in the chapter. The equation tells you stoichiometry, not kinetics. Only experiment (or an explicit “elementary” label) gives the rate law.',
          '<b>Confusing order with molecularity.</b> Order is experimental and may be 0, fractional, or negative; molecularity is a counted whole number (1, 2, 3) for one elementary step. If you ever write “molecularity = 1.5” or “molecularity of the overall complex reaction,” stop.',
          '<b>Dropping the 1/coefficient factor</b> when writing the single rate of reaction, so that N<sub>2</sub>, H<sub>2</sub> and NH<sub>3</sub> rates get wrongly equated. Always divide by the coefficient.',
          '<b>Forgetting to substitute intermediates</b> in a mechanism problem, leaving an undetermined intermediate concentration in the final rate law and reporting the wrong order.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + self-check):</b> Treat the <b>units of <i>k</i></b> as a free verification of your order. Computed order 2 but your <i>k</i> came out in s<sup>−1</sup>? One of them is wrong — reconcile before moving on. And in any data-table problem, change one concentration at a time and read the exponent straight off the rate ratio; never compute <i>k</i> five times first.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Rate (single value)',
            note: 'Rate = −(1/<i>a</i>) d[A]/d<i>t</i> = +(1/<i>c</i>) d[C]/d<i>t</i> — always divide by the coefficient.',
          },
          {
            f: 'Rate law (experimental)',
            note: 'Rate = <i>k</i>[A]<sup><i>x</i></sup>[B]<sup><i>y</i></sup>; <b>order</b> <i>n</i> = <i>x</i> + <i>y</i>.',
          },
          {
            f: '<b>Order</b> ↦ experimental; may be 0, fractional, or negative. <b>Molecularity</b> ↦ counted; whole number 1–3; elementary steps only.',
            note: '',
          },
          {
            f: 'Units of <i>k</i>',
            note: '[<i>k</i>] = mol<sup>1−<i>n</i></sup> L<sup><i>n</i>−1</sup> s<sup>−1</sup> → 0: mol L<sup>−1</sup> s<sup>−1</sup>; 1: s<sup>−1</sup>; 2: L mol<sup>−1</sup> s<sup>−1</sup>.',
          },
          {
            f: '<i>k</i> = specific reaction rate',
            note: 'concentration-independent, temperature-dependent, bigger <i>k</i> = faster (same concentrations, same order).',
          },
          {
            f: '<b>Elementary</b> ⟹ order = molecularity = coefficient sum. <b>Complex</b> ⟹ order set by the rate-determining step (substitute out intermediates first).',
            note: '',
          },
        ],
        aids: ['“Order is observed, molecularity is mechanistic.” And: fractions and negatives are flags for complexity.'],
      },
    ],
  },
];
