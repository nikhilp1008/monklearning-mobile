import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topic 04, Collision Theory & Temperature Dependence: pp. 127–135 of
 * the Class 12 Chemistry Master Reference, word for word, split at its Sections 1
 * to 8. Figure 3.3 (caption first on p. 130, drawn p. 131) is placed after the
 * energy-profile framework it illustrates; it is redrawn in
 * lib/diagrams/chemistry-12-03.ts. The book's "subtopic" is "topic" here. An
 * exponent holding E_a is written exp(−E_a/RT), because a subscript cannot sit
 * inside a raised exponent in the app.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 127–135 ─────────────────────────
  {
    n: '04',
    title: 'Collision Theory & Temperature Dependence',
    kalam: 'Collision theory models molecules as hard spheres that must collide to react.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This topic supplies the “why” behind reaction rates and is heavily examined. CBSE Boards reliably set a 3-mark Arrhenius numerical (activation energy from two rate constants) plus a short catalyst/energy-profile question. NEET asks 1–2 conceptual MCQs (catalyst, temperature coefficient, effective collisions). JEE Main sets graphical ln <i>k</i> vs 1/<i>T</i> problems; JEE Advanced layers in steric factors, catalysed/uncatalysed ratios, and the Maxwell-Boltzmann fraction.',
      },
      {
        t: 'p',
        html: 'You already know from everyday life that warming things up makes chemistry go faster — milk turns sour in a day on the kitchen counter but lasts a week in the fridge, and food cooks faster in a pressure cooker. A rough rule of thumb chemists have used for over a century is that the <b>rate roughly doubles for every 10 °C rise</b>. The remarkable thing is how steep this dependence is: a 10 °C rise raises the average molecular speed by only a few percent, yet the rate can double. Something other than mere speeding-up must be going on.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine a crowded Indian wedding baraat where guests need to shake hands to “react.” Two conditions must be met for a successful handshake: the two people must actually <b>bump into each other</b> (a collision), and they must be <b>facing the right way</b> with hands extended (proper orientation). Most bumps in a crowd are glancing, back-to-back, or too gentle — nothing happens. Only the rare encounter that is both energetic enough and correctly oriented produces a handshake. Chemical reactions work exactly like this, and this picture is the heart of <b>collision theory</b>.',
      },
      {
        t: 'p',
        html: 'Collision theory models molecules as hard spheres that must collide to react. But not every collision works. Two filters apply. First, an <b>energy filter</b>: the colliding molecules must carry at least a minimum energy — the <b>activation energy</b> <i>E</i><sub>a</sub> — to break old bonds and start forming new ones. Collisions softer than this just bounce apart. Second, an <b>orientation filter</b>: even an energetic collision fails if the molecules are pointed the wrong way. Only collisions passing both filters are <b>effective collisions</b>, and only these produce product.',
      },
      {
        t: 'p',
        html: 'Now the temperature mystery dissolves. At any temperature, molecular energies are spread out across a <b>Maxwell-Boltzmann distribution</b> — most molecules have middling energy, a few are sluggish, and a small tail are very energetic. The curve plots the fraction of molecules against their kinetic energy: it rises to a peak at the most probable energy, then trails off in a long high-energy tail. Two features matter for kinetics. First, the <b>total area under the curve is fixed</b> — it represents the entire population of molecules, which does not change just because they are jostling faster. Second, when you <b>raise the temperature the peak flattens and shifts to the right</b>, and the curve broadens, so that proportionally many more molecules now populate the high-energy tail. The activation energy sits out on that tail. Because raising the temperature swells the fraction of molecules beyond <i>E</i><sub>a</sub> far faster than it raises the average energy itself, even a modest temperature rise produces a large rate increase.',
      },
      {
        t: 'p',
        html: 'This is captured by the single most important relationship of the topic, the <b>Arrhenius equation</b> <i>k</i> = <i>A</i> exp(−<i>E</i><sub>a</sub>/<i>RT</i>). The term exp(−<i>E</i><sub>a</sub>/<i>RT</i>) is the fraction of molecules with energy ≥ <i>E</i><sub>a</sub>, and the factor <i>A</i> folds in how often molecules collide and how often they are correctly oriented.',
      },
      {
        t: 'p',
        html: 'A <b>catalyst</b> speeds things up by a completely different route: it offers an <b>alternative pathway with a lower</b> <i>E</i><sub>a</sub>, so a larger fraction of molecules can clear the (now lower) barrier. Critically, a catalyst does not change the energy of the reactants or products — so it leaves the enthalpy change Δ<i>H</i> and the equilibrium position untouched, and it speeds up forward and backward reactions equally.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• Collision theory treats molecules as <b>structureless hard spheres</b>, so it predicts rate constants well only for simple atoms or small molecules; for complex molecules it overestimates rates, which is why the empirical <b>steric factor</b> <i>P</i> is bolted on.<br>• The Arrhenius equation assumes <i>A</i> and <i>E</i><sub>a</sub> are <b>temperature-independent</b> over the range considered — a good approximation across modest temperature windows, not extreme ones.<br>• The “rate doubles per 10 °C” rule is a <b>rough generalisation</b>, not a law; the actual temperature coefficient varies between about 2 and 3.',
      },

      { t: 'part', title: 'Key formulas, parameters and their units' },
      {
        t: 'formula',
        kicker: 'Arrhenius equation and its working forms',
        main: '<i>k</i> = <i>A</i> exp(−<i>E</i><sub>a</sub>/<i>RT</i>)<br>ln <i>k</i> = ln <i>A</i> − <i>E</i><sub>a</sub>/(<i>RT</i>)<br>log <i>k</i> = log <i>A</i> − <i>E</i><sub>a</sub>/(2.303 <i>RT</i>)',
        legend: [
          '<i>k</i> = rate constant',
          '<i>A</i> = Arrhenius / frequency / pre-exponential factor (related to collision frequency and orientation), same units as <i>k</i>',
          '<i>E</i><sub>a</sub> = activation energy, in J mol<sup>−1</sup> (or kJ mol<sup>−1</sup>)',
          '<i>R</i> = gas constant, 8.314 J K<sup>−1</sup> mol<sup>−1</sup>',
          '<i>T</i> = temperature, in K',
          'exp(−<i>E</i><sub>a</sub>/<i>RT</i>) = fraction of molecules with energy ≥ <i>E</i><sub>a</sub> (dimensionless)',
          'exp(<i>x</i>) = <i>e</i><sup><i>x</i></sup>',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Graphical form: a plot of ln <i>k</i> vs 1/<i>T</i> is a straight line',
        main: 'slope = −<i>E</i><sub>a</sub>/<i>R</i> and intercept ln <i>A</i><br>or, using log <i>k</i>: slope = −<i>E</i><sub>a</sub>/(2.303<i>R</i>)',
        legend: [
          '<i>k</i> = rate constant',
          '<i>T</i> = temperature, in K',
          '<i>E</i><sub>a</sub> = activation energy',
          '<i>R</i> = gas constant',
          '<i>A</i> = pre-exponential factor',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Two-temperature form (eliminates <i>A</i>)',
        main: 'log(<i>k</i><sub>2</sub>/<i>k</i><sub>1</sub>) = (<i>E</i><sub>a</sub>/(2.303 <i>R</i>)) [1/<i>T</i><sub>1</sub> − 1/<i>T</i><sub>2</sub>] = (<i>E</i><sub>a</sub>/(2.303 <i>R</i>)) [(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>)/(<i>T</i><sub>1</sub><i>T</i><sub>2</sub>)]',
        legend: [
          '<i>k</i><sub>1</sub> = rate constant at <i>T</i><sub>1</sub>',
          '<i>k</i><sub>2</sub> = rate constant at <i>T</i><sub>2</sub>',
          '<i>E</i><sub>a</sub> = activation energy',
          '<i>R</i> = gas constant',
          '<i>T</i><sub>1</sub>, <i>T</i><sub>2</sub> = the two temperatures, in K',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Energy relationships',
        main: 'Threshold energy = Activation energy + (average) energy of reactants<br><i>E</i><sub>a</sub>(forward) − <i>E</i><sub>a</sub>(reverse) = Δ<i>H</i> of reaction',
        legend: [
          '<i>E</i><sub>a</sub>(forward) = activation energy of the forward reaction',
          '<i>E</i><sub>a</sub>(reverse) = activation energy of the reverse reaction',
          'Δ<i>H</i> = enthalpy change of the reaction',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Temperature coefficient',
        main: 'Temperature coefficient = <i>k</i><sub>(<i>t</i>+10)°C</sub>/<i>k</i><sub><i>t</i>°C</sub>',
        legend: [
          'Temperature coefficient = the factor by which <i>k</i> rises per 10 K, typically between 2 and 3',
          '<i>k</i><sub>(<i>t</i>+10)°C</sub> = rate constant at (<i>t</i> + 10) °C',
          '<i>k</i><sub><i>t</i>°C</sub> = rate constant at <i>t</i> °C',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Collision theory rate expression (bimolecular A + B → products)',
        main: 'Rate = <i>P</i> <i>Z</i><sub>AB</sub> exp(−<i>E</i><sub>a</sub>/<i>RT</i>)<br>Comparing with Arrhenius: <i>A</i> = <i>P</i> <i>Z</i><sub>AB</sub>',
        legend: [
          '<i>Z</i><sub>AB</sub> = collision frequency',
          '<i>P</i> = steric (probability) factor accounting for orientation',
          'exp(−<i>E</i><sub>a</sub>/<i>RT</i>) = energy criterion',
          'exp(<i>x</i>) = <i>e</i><sup><i>x</i></sup>',
          '<i>E</i><sub>a</sub> = activation energy',
          '<i>R</i> = gas constant',
          '<i>T</i> = temperature, in K',
          '<i>A</i> = pre-exponential factor',
        ],
        note: null,
      },

      { t: 'part', title: 'Key derivations and procedures' },
      {
        t: 'p',
        html: '<b>Derivation A — The two-temperature Arrhenius form</b><br>Start from the logarithmic Arrhenius equation written at two temperatures:<br>log <i>k</i><sub>1</sub> = log <i>A</i> − <i>E</i><sub>a</sub>/(2.303 <i>R</i> <i>T</i><sub>1</sub>),<br>log <i>k</i><sub>2</sub> = log <i>A</i> − <i>E</i><sub>a</sub>/(2.303 <i>R</i> <i>T</i><sub>2</sub>)',
      },
      {
        t: 'p',
        html: '<b>Reasoning:</b> the unknown log <i>A</i> is the same at both temperatures (it is temperature-independent), so subtracting the two equations eliminates it and leaves a relation purely in measurable quantities:<br>log <i>k</i><sub>2</sub> − log <i>k</i><sub>1</sub> = (<i>E</i><sub>a</sub>/(2.303 <i>R</i>)) [1/<i>T</i><sub>1</sub> − 1/<i>T</i><sub>2</sub>]<br>log(<i>k</i><sub>2</sub>/<i>k</i><sub>1</sub>) = (<i>E</i><sub>a</sub>/(2.303 <i>R</i>)) [(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>)/(<i>T</i><sub>1</sub><i>T</i><sub>2</sub>)]',
      },
      {
        t: 'p',
        html: 'This is the form used to extract <i>E</i><sub>a</sub> from two rate-constant measurements. The sign convention worth memorising: with <i>T</i><sub>2</sub> > <i>T</i><sub>1</sub>, the bracket [1/<i>T</i><sub>1</sub> − 1/<i>T</i><sub>2</sub>] is positive, so <i>k</i><sub>2</sub> > <i>k</i><sub>1</sub> — higher temperature, larger rate constant.',
      },
      {
        t: 'p',
        html: '<b>Derivation B — Why the energy term is the Boltzmann fraction</b><br>The collision-theory rate for a bimolecular reaction is written as<br>Rate = <i>Z</i><sub>AB</sub> exp(−<i>E</i><sub>a</sub>/<i>RT</i>)',
      },
      {
        t: 'p',
        html: '<b>Reasoning:</b> <i>Z</i><sub>AB</sub> counts how many collisions occur per unit time per unit volume, but only the fraction carrying energy ≥ <i>E</i><sub>a</sub> can react. From the Maxwell-Boltzmann distribution, that fraction is exp(−<i>E</i><sub>a</sub>/<i>RT</i>). Comparing this with the Arrhenius equation <i>k</i> = <i>A</i> exp(−<i>E</i><sub>a</sub>/<i>RT</i>) identifies the pre-exponential factor <i>A</i> with the collision frequency. The theory still over-predicts for real molecules because it ignores orientation, so we insert the steric factor <i>P</i>:<br>Rate = <i>P</i> <i>Z</i><sub>AB</sub> exp(−<i>E</i><sub>a</sub>/<i>RT</i>)<br>where <i>P</i> ≤ 1 corrects for the fraction of energetic collisions that also happen to be correctly oriented.',
      },
      {
        t: 'proc',
        title: 'Procedure — Determining Ea graphically',
        steps: [
          '<b>Measure <i>k</i> at several temperatures <i>T</i>.</b>',
          '<b>Tabulate</b> ln <i>k</i> against 1/<i>T</i> (with <i>T</i> in kelvin).',
          '<b>Plot and fit a straight line.</b> <b>Reasoning:</b> ln <i>k</i> = ln <i>A</i> − (<i>E</i><sub>a</sub>/<i>R</i>) · (1/<i>T</i>) is linear in 1/<i>T</i>.',
          '<b>Read the slope</b> = −<i>E</i><sub>a</sub>/<i>R</i>, so <i>E</i><sub>a</sub> = −slope × <i>R</i>; the intercept gives ln <i>A</i>.',
        ],
      },
      {
        t: 'p',
        html: '<b>Framework — The reaction energy profile</b><br>Much of this topic is examined through the <b>energy profile</b>: a plot of potential energy against the reaction coordinate (the progress of the reaction from reactants to products). The logic, step by step:<br>• Reactants begin at some energy level and must climb an <b>energy barrier</b> to react. The top of the barrier is the <b>activated complex</b> (or transition state) — a fleeting, highly unstable cluster in which old bonds are partly broken and new bonds partly formed. Its lifetime is extremely short, and it collapses either forward into products or back into reactants.<br>• The height of the barrier measured from the reactants is the <b>forward activation energy</b> <i>E</i><sub>a</sub>(forward); measured from the products it is <i>E</i><sub>a</sub>(reverse).<br>• <b>Threshold energy</b> is the total energy the activated complex sits at — that is, the reactants’ own energy plus the activation energy: Threshold = <i>E</i><sub>a</sub> + reactant energy. <b>Reasoning:</b> a colliding pair must reach this absolute energy level, not merely supply <i>E</i><sub>a</sub> out of nothing.<br>• The <b>enthalpy change</b> is the difference between product and reactant levels, which equals the difference of the two activation energies: Δ<i>H</i> = <i>E</i><sub>a</sub>(forward) − <i>E</i><sub>a</sub>(reverse). If the products sit below the reactants, <i>E</i><sub>a</sub>(forward) < <i>E</i><sub>a</sub>(reverse) and the reaction is <b>exothermic</b> (Δ<i>H</i> < 0); if the products sit above, it is <b>endothermic</b> (Δ<i>H</i> > 0). Either way an energy barrier must be climbed first — feasibility (thermodynamics) does not guarantee speed (kinetics).<br>• A <b>catalyst</b> draws a second, lower hump on the same diagram: it routes the reaction through a different activated complex of lower energy, cutting <i>E</i><sub>a</sub> for both directions while leaving the reactant and product levels — and therefore Δ<i>H</i> — exactly where they were. A <b>negative catalyst (inhibitor)</b> slows the reaction instead: it does not add a higher hump, but blocks the easier route (for example by poisoning a catalyst or removing a reactive intermediate), so the effective barrier is higher.',
      },
      { t: 'fig', id: 'c12-03-fig-3.3' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'The rate constant of a first-order reaction is 3.0 × 10<sup>−4</sup> s<sup>−1</sup> at 300 K and rises to 1.2 × 10<sup>−3</sup> s<sup>−1</sup> at 320 K. Calculate the activation energy. (log 4 = 0.602.)',
        steps: [
          'Using the two-temperature form with <i>k</i><sub>2</sub>/<i>k</i><sub>1</sub> = (1.2 × 10<sup>−3</sup>)/(3.0 × 10<sup>−4</sup>) = 4:<br>log 4 = (<i>E</i><sub>a</sub>/(2.303 <i>R</i>)) [(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>)/(<i>T</i><sub>1</sub><i>T</i><sub>2</sub>)] = (<i>E</i><sub>a</sub>/(2.303 × 8.314)) [(320 − 300)/(300 × 320)]',
          'The bracket = 20/96000 = 2.083 × 10<sup>−4</sup> K<sup>−1</sup>. Rearranging:<br><i>E</i><sub>a</sub> = (2.303 × 8.314 × 0.602)/(2.083 × 10<sup>−4</sup>) = 11.53/(2.083 × 10<sup>−4</sup>)',
        ],
        ans: '<i>E</i><sub>a</sub> ≈ 5.53 × 10<sup>4</sup> J mol<sup>−1</sup> = 55.3 kJ mol<sup>−1</sup> (55 kJ mol<sup>−1</sup> to two significant figures)',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The rate of a reaction becomes 4 times faster when the temperature is raised from 27 °C to 47 °C. Assuming a constant temperature coefficient, by what factor does the rate change when the temperature is raised from 27 °C to 57 °C?<br>(a) 6<br>(b) 8<br>(c) 9<br>(d) 16',
        steps: [
          '<b>Quick reasoning (no Arrhenius needed).</b> Count 10 °C intervals. From 27 → 47 is <b>two</b> intervals and the rate ×4, so the per-10 °C coefficient is √4 = 2. From 27 → 57 is <b>three</b> intervals, so the factor is 2<sup>3</sup>.',
          '<b>The trap:</b> students who reach for the full Arrhenius equation waste time and often misuse it; and a tempting wrong answer is “6” (linear scaling, 4 × 3/2). The temperature coefficient is multiplicative per interval, never additive — count intervals and raise to that power.',
        ],
        ans: '8. (b).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'For a gas-phase reaction, a plot of ln <i>k</i> versus 1/<i>T</i> is a straight line of slope −1.2 × 10<sup>4</sup> K. (a) Determine the activation energy. (b) Estimate the fraction of reactant molecules possessing energy equal to or greater than <i>E</i><sub>a</sub> at 300 K.',
        steps: [
          '(a) Slope = −<i>E</i><sub>a</sub>/<i>R</i>, so<br><i>E</i><sub>a</sub> = −slope × <i>R</i> = (1.2 × 10<sup>4</sup>)(8.314) = 9.98 × 10<sup>4</sup> J mol<sup>−1</sup>',
          '(b) The Boltzmann fraction is <i>f</i> = exp(−<i>E</i><sub>a</sub>/<i>RT</i>):<br><i>E</i><sub>a</sub>/(<i>RT</i>) = (9.98 × 10<sup>4</sup>)/(8.314 × 300) = (9.98 × 10<sup>4</sup>)/2494.2 ≈ 40.0 ⇒ <i>f</i> = <i>e</i><sup>−40.0</sup>',
          'So fewer than one in 10<sup>17</sup> molecules are energetic enough at 300 K — which is exactly why this high-barrier reaction is slow, and why heating it (shrinking <i>E</i><sub>a</sub>/(<i>RT</i>)) helps so dramatically. The multi-concept skill is linking the graphical Arrhenius slope to the physical Maxwell-Boltzmann fraction.',
        ],
        ans: '(a) <i>E</i><sub>a</sub> ≈ 99.8 kJ mol<sup>−1</sup> (1.0 × 10<sup>2</sup> kJ mol<sup>−1</sup> to two significant figures); (b) <i>f</i> ≈ 4.2 × 10<sup>−18</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'At 300 K, a catalyst provides an alternative pathway that lowers the activation energy of a reaction from 90 kJ mol<sup>−1</sup> to 60 kJ mol<sup>−1</sup>, while the pre-exponential factor <i>A</i> is essentially unchanged. By what factor does the rate constant increase? Comment on the effect on Δ<i>H</i>.',
        steps: [
          'Writing the Arrhenius equation for catalysed and uncatalysed paths (same <i>A</i>, same <i>T</i>):<br><i>k</i><sub>cat</sub>/<i>k</i><sub>uncat</sub> = (<i>A</i> exp(−<i>E</i><sub>a,cat</sub>/<i>RT</i>))/(<i>A</i> exp(−<i>E</i><sub>a,uncat</sub>/<i>RT</i>)) = exp((<i>E</i><sub>a,uncat</sub> − <i>E</i><sub>a,cat</sub>)/<i>RT</i>)',
          'With Δ<i>E</i><sub>a</sub> = 90 − 60 = 30 kJ mol<sup>−1</sup> = 3.0 × 10<sup>4</sup> J mol<sup>−1</sup>:<br><i>k</i><sub>cat</sub>/<i>k</i><sub>uncat</sub> = exp(3.0 × 10<sup>4</sup>/(8.314 × 300)) = <i>e</i><sup>30000/2494.2</sup> = <i>e</i><sup>12.03</sup>',
          'The rate jumps roughly <b>170,000-fold</b> from a 30 kJ mol<sup>−1</sup> reduction in barrier — a vivid demonstration of the exponential leverage of <i>E</i><sub>a</sub>. As for Δ<i>H</i>: the catalyst lowers the barrier on both the forward and reverse directions by routing through a different activated complex, so it leaves the reactant and product energies — and hence Δ<i>H</i> and the equilibrium constant — completely unchanged.',
        ],
        ans: '<i>k</i><sub>cat</sub>/<i>k</i><sub>uncat</sub> ≈ 1.7 × 10<sup>5</sup>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] The activation energy of a reaction is 75 kJ mol<sup>−1</sup>. State the effect on the rate constant of (i) increasing the temperature and (ii) adding a catalyst, giving brief reasons.',
            a: '(i) Increases (larger Boltzmann fraction clears the barrier); (ii) increases (catalyst offers a lower-<i>E</i><sub>a</sub> path).',
          },
          {
            q: '[NEET] A catalyst is added to a reaction at equilibrium. State its effect on (i) the rate of the forward reaction, (ii) Δ<i>H</i>, and (iii) the position of equilibrium.',
            a: '(i) Increases; (ii) unchanged; (iii) unchanged (forward and reverse rates rise equally).',
          },
          {
            q: '[JEE Main] The rate constant of a reaction doubles when the temperature rises from 300 K to 310 K. Calculate the activation energy. (log 2 = 0.301.)',
            a: '≈ 53.6 kJ mol<sup>−1</sup>.',
          },
          {
            q: '[JEE Main] For a reaction, <i>A</i> = 4.0 × 10<sup>10</sup> s<sup>−1</sup> and <i>E</i><sub>a</sub> = 80 kJ mol<sup>−1</sup>. Calculate the rate constant at 400 K. (<i>R</i> = 8.314 J K<sup>−1</sup> mol<sup>−1</sup>.)',
            a: '<i>k</i> = 4.0 × 10<sup>10</sup> <i>e</i><sup>−80000/(8.314×400)</sup> ≈ 4.0 × 10<sup>10</sup> × <i>e</i><sup>−24.06</sup> ≈ 1.4 × 10<sup>0</sup> s<sup>−1</sup> (≈ 1.4 s<sup>−1</sup>).',
          },
          {
            q: '[JEE Advanced] For an exothermic reaction A → B, the activation energy of the forward reaction is 50 kJ mol<sup>−1</sup> and the enthalpy change is −30 kJ mol<sup>−1</sup>. Find the activation energy of the reverse reaction, and sketch (describe) the energy profile.',
            a: '<i>E</i><sub>a</sub>(reverse) = <i>E</i><sub>a</sub>(forward) − Δ<i>H</i> = 50 − (−30) = 80 kJ mol<sup>−1</sup>; profile rises 50 to the activated complex, then falls 80 to a product level 30 below the reactant.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The role of a catalyst in a reaction is to:',
        opts: [
          { label: 'increase the activation energy', nudge: '<b>(a)</b> is the opposite of what a catalyst does: it lowers <i>E</i><sub>a</sub>.' },
          { label: 'decrease the enthalpy change', nudge: '<b>(b)</b> is wrong — Δ<i>H</i> depends only on reactant/product energies, which the catalyst does not touch.' },
          { label: 'provide an alternative path of lower activation energy', nudge: null },
          { label: 'shift the equilibrium towards products', nudge: '<b>(d)</b> is the classic trap: a catalyst speeds both directions equally and so cannot shift equilibrium.' },
        ],
        correct: 2,
        solution: 'A catalyst lowers <i>E</i><sub>a</sub> by offering a different mechanism, raising the fraction of molecules that can react.',
      },
      {
        t: 'mcq',
        q: 'In the Arrhenius equation <i>k</i> = <i>A</i> exp(−<i>E</i><sub>a</sub>/<i>RT</i>), the rate constant increases most when:',
        opts: [
          { label: '<i>E</i><sub>a</sub> increases and <i>T</i> decreases', nudge: '<b>(a)</b> drives <i>k</i> down on both counts.' },
          { label: '<i>E</i><sub>a</sub> decreases and <i>T</i> increases', nudge: null },
          { label: 'both <i>E</i><sub>a</sub> and <i>T</i> increase', nudge: '<b>(c)</b> pushes the two factors in opposing directions, giving no clear maximum.' },
          { label: 'both <i>E</i><sub>a</sub> and <i>T</i> decrease', nudge: '<b>(d)</b> pushes the two factors in opposing directions, giving no clear maximum.' },
        ],
        correct: 1,
        solution: 'Since <i>k</i> ∝ exp(−<i>E</i><sub>a</sub>/<i>RT</i>), the exponent becomes least negative — so <i>k</i> is largest — when <i>E</i><sub>a</sub> is small and <i>T</i> is large.',
      },
      {
        t: 'mcq',
        q: 'According to collision theory, the rate of a reaction is lower than the collision frequency mainly because:',
        opts: [
          { label: 'molecules are too small', nudge: '<b>(a)</b> is irrelevant to the energy/orientation filters.' },
          { label: 'only collisions with sufficient energy and proper orientation are effective', nudge: null },
          { label: 'temperature is too low', nudge: '<b>(c)</b> would lower the rate but is not the general reason the rate trails the collision frequency.' },
          { label: 'the catalyst is absent', nudge: '<b>(d)</b> confuses catalysis with the intrinsic ineffectiveness of most collisions.' },
        ],
        correct: 1,
        solution: 'Both the energy criterion (≥ <i>E</i><sub>a</sub>) and the orientation criterion (steric factor <i>P</i>) must be met; most collisions fail one or both.',
      },
      {
        t: 'mcq',
        q: 'The activation energy of a reaction can be determined by:',
        opts: [
          { label: 'measuring the rate constant at a single temperature', nudge: '<b>(a)</b> gives only one equation with two unknowns (<i>A</i> and <i>E</i><sub>a</sub>).' },
          { label: 'measuring the rate constants at two different temperatures', nudge: null },
          { label: 'measuring the collision frequency', nudge: '<b>(c)</b> does not by itself yield <i>E</i><sub>a</sub>.' },
          { label: 'adding a catalyst', nudge: '<b>(d)</b> does not by itself yield <i>E</i><sub>a</sub>.' },
        ],
        correct: 1,
        solution: 'Two (<i>k</i>, <i>T</i>) pairs feed the two-temperature Arrhenius form to solve for <i>E</i><sub>a</sub> (or a multi-point ln <i>k</i> vs 1/<i>T</i> plot).',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Thinking a catalyst changes Δ<i>H</i> or shifts equilibrium.</b> It lowers <i>E</i><sub>a</sub> for both directions equally — rate up, but Δ<i>H</i>, <i>K</i><sub>eq</sub>, and equilibrium yield untouched.',
          '<b>Sign slips in the two-temperature form.</b> With <i>T</i><sub>2</sub> > <i>T</i><sub>1</sub>, you must get <i>k</i><sub>2</sub> > <i>k</i><sub>1</sub>. If your <i>E</i><sub>a</sub> comes out negative, you have swapped <i>T</i><sub>1</sub> and <i>T</i><sub>2</sub> inside the bracket.',
          '<b>Confusing threshold energy with activation energy.</b> Threshold energy = activation energy plus the energy the reactants already possess; <i>E</i><sub>a</sub> is only the extra hump.',
          '<b>Assuming every energetic collision reacts.</b> Orientation matters too — that is the whole point of the steric factor <i>P</i>. Energy alone is necessary but not sufficient.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For “rate changes by what factor over a temperature jump” questions where a constant temperature coefficient is given or implied, skip Arrhenius — count the number of 10 °C intervals <i>n</i> and compute (temperature coefficient)<sup><i>n</i></sup>; if <i>E</i><sub>a</sub> is given, use the two-temperature form. For <i>E</i><sub>a</sub> from a graph, remember slope of ln <i>k</i> vs 1/<i>T</i> is −<i>E</i><sub>a</sub>/<i>R</i> (so multiply by <i>R</i> and flip the sign); if the plot uses log <i>k</i>, the slope is −<i>E</i><sub>a</sub>/(2.303<i>R</i>).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Arrhenius',
            note: '<i>k</i> = <i>A</i> exp(−<i>E</i><sub>a</sub>/<i>RT</i>); ln <i>k</i> = ln <i>A</i> − <i>E</i><sub>a</sub>/(<i>RT</i>); log <i>k</i> = log <i>A</i> − <i>E</i><sub>a</sub>/(2.303<i>RT</i>).',
          },
          {
            f: 'Graph',
            note: 'ln <i>k</i> vs 1/<i>T</i> → slope −<i>E</i><sub>a</sub>/<i>R</i>, intercept ln <i>A</i> (use log <i>k</i> → slope −<i>E</i><sub>a</sub>/(2.303<i>R</i>)).',
          },
          {
            f: 'Two temperatures',
            note: 'log(<i>k</i><sub>2</sub>/<i>k</i><sub>1</sub>) = (<i>E</i><sub>a</sub>/(2.303<i>R</i>)) [(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>)/(<i>T</i><sub>1</sub><i>T</i><sub>2</sub>)].',
          },
          {
            f: 'Collision theory',
            note: 'Rate = <i>P</i> <i>Z</i><sub>AB</sub> exp(−<i>E</i><sub>a</sub>/<i>RT</i>); effective collision needs <b>energy (≥ <i>E</i><sub>a</sub>) + orientation (<i>P</i>)</b>.',
          },
          {
            f: 'Energy',
            note: 'Threshold = <i>E</i><sub>a</sub> + reactant energy; <i>E</i><sub>a</sub>(forward) − <i>E</i><sub>a</sub>(reverse) = Δ<i>H</i>.',
          },
          {
            f: 'Catalyst',
            note: 'lowers <i>E</i><sub>a</sub> via alternate path; raises rate (both directions); leaves Δ<i>H</i>, <i>K</i><sub>eq</sub> unchanged.',
          },
          {
            f: 'Temperature coefficient',
            note: '<i>k</i><sub>(<i>t</i>+10)</sub>/<i>k</i><sub><i>t</i></sub> ≈ 2–3.',
          },
        ],
        aids: [
          '“Energy AND aim” — both criteria must be met for an effective collision.',
          '“Catalyst cuts the climb, not the cliff” — it lowers <i>E</i><sub>a</sub>, never Δ<i>H</i>.',
          '“Slope times <i>R</i>, flip the sign” — <i>E</i><sub>a</sub> from an ln <i>k</i> vs 1/<i>T</i> graph.',
          '“Count the tens, raise the power” — temperature-coefficient shortcut.',
        ],
      },
    ],
  },
];
