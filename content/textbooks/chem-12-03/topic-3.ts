import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topic 03: Pseudo First Order Reactions, pp. 120–126 of the Class 12
 * Chemistry Master Reference, word for word, split at its Sections 1 to 8. The
 * book draws no figure in this topic.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 120–126 ─────────────────────────
  {
    n: '03',
    title: 'Pseudo First Order Reactions',
    kalam: 'Pseudo first order changes only the observed order; molecularity (e.g. 2 for ester hydrolysis) is unchanged.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A small but high-yield topic. CBSE Boards ask a guaranteed 1–2 mark question (“explain pseudo first order with an example”) and sometimes fold it into a numerical. NEET sets one conceptual MCQ (what the pseudo rate constant depends on). JEE Main occasionally links the observed pseudo constant to the true rate constant; JEE Advanced uses it to test whether you understand why a second-order reaction can masquerade as first order.',
      },
      {
        t: 'p',
        html: 'In Topic 01 you learned that order is experimental and need not match molecularity. Pseudo first order reactions are the most important everyday illustration of that gap — a reaction that counts as <b>bimolecular</b> (two species react) yet behaves, in the lab, exactly like a <b>first order</b> reaction.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture a small wedding with 10 guests being served by a kitchen stocked for 1,000 people. As the meal proceeds, the guests’ hunger changes dramatically — but the kitchen’s stock barely moves from 1,000 to 990. If you measured the “rate of serving,” it would appear to depend only on the guests, because the kitchen supply is, for all practical purposes, constant. The kitchen is still a participant, but its near-infinite reserve makes its concentration drop out of the visible kinetics.',
      },
      {
        t: 'p',
        html: 'That is precisely what happens chemically when <b>one reactant is present in large excess</b>. Consider the acid-catalysed hydrolysis of an ester:<br>CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O →<sup>H⁺</sup> CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH<br>The true rate law is second order: Rate = <i>k</i>[ester][H<sub>2</sub>O] (the catalyst H⁺ stays at a fixed concentration, so its effect sits inside <i>k</i>). But the reaction is run in water, so water is in enormous excess. While a little ester is consumed, the water concentration changes negligibly — staying effectively constant throughout. We can therefore absorb that constant into the rate constant:<br>Rate = <i>k</i>[ester][H<sub>2</sub>O] = (<i>k</i>[H<sub>2</sub>O])[ester] = <i>k</i>′[ester]',
      },
      {
        t: 'p',
        html: 'The reaction now looks first order, with an <b>observed (pseudo) rate constant</b> <i>k</i>′ = <i>k</i>[H<sub>2</sub>O]. Its molecularity, as NCERT counts it, is still two; only its observed order has collapsed to one — hence “pseudo first order.” (Molecularity strictly belongs to elementary steps, and this hydrolysis really runs through several. NCERT and exam papers still call it bimolecular, counting ester and water as the two reacting species, so that is the answer to give.)',
      },
      {
        t: 'p',
        html: 'A second classic example is the <b>inversion of cane sugar</b> (sucrose):<br>C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> + H<sub>2</sub>O →<sup>H⁺</sup> C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (glucose) + C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (fructose)<br>with observed Rate = <i>k</i>′[C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>], again because water is the excess reactant.',
      },
      {
        t: 'p',
        html: 'The pay-off is huge: because the reaction now obeys first order kinetics, all the first-order machinery from Topic 02 applies directly — the integrated equation <i>k</i>′ = (2.303/<i>t</i>) log([A]<sub>0</sub>/[A]), the half-life <i>t</i><sub>1/2</sub> = 0.693/<i>k</i>′ independent of the limiting reactant’s concentration, and the straight-line log[A] vs <i>t</i> plot.',
      },
      {
        t: 'p',
        html: 'This trick is not just an accident of running reactions in water — chemists use it deliberately. To measure the order of a reaction with respect to one particular reactant, you flood the system with large excesses of every other reactant, so the rate then depends only on the one you care about. This is called the <b>isolation method</b> (Ostwald’s isolation method): by isolating one reactant at a time under pseudo conditions, a complicated multi-reactant rate law is broken into a series of simple pseudo-order experiments, and the individual orders are stitched back together into the full rate law.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• The excess reactant must be in <b>large enough excess</b> that its fractional consumption is negligible (a working guide is roughly tenfold or more). If the “excess” reactant is depleted appreciably, the first-order disguise fails and the true second-order behaviour reappears.<br>• The observed <i>k</i>′ is <b>not a true constant</b> — it carries the (fixed) excess concentration inside it. Change the excess concentration and <i>k</i>′ changes, even though the true <i>k</i> does not.<br>• Pseudo first order requires that the reaction be order-one in the limiting reactant; a reaction second order in the limiting reactant would not reduce to simple first order this way.',
      },

      { t: 'part', title: 'Key definitions, formulas and relationships' },
      {
        t: 'def',
        term: 'Pseudo first order reaction',
        html: 'a reaction whose true (higher) order reduces to <b>observed order one</b> because one reactant is present in such large excess that its concentration stays effectively constant.',
      },
      {
        t: 'formula',
        kicker: 'True vs observed rate law (for a reaction first order in each of A and B, with B in excess)',
        main: 'Rate = <i>k</i>[A][B] →<sup>[B]≈const</sup> Rate = <i>k</i>′[A]<br><i>k</i>′ = <i>k</i>[B]',
        legend: [
          '<i>k</i> = true second-order rate constant, units L mol<sup>−1</sup> s<sup>−1</sup>',
          '<i>k</i>′ = observed (pseudo) first-order rate constant, units s<sup>−1</sup>',
          '[A] = concentration of the limiting reactant A',
          '[B] = concentration of the excess reactant B',
        ],
        note: 'The pseudo constant <b>depends on the concentration of the excess reactant</b> (through <i>k</i>′ = <i>k</i>[B]) but is independent of the limiting reactant [A].',
      },
      {
        t: 'formula',
        kicker: 'First-order tools that now apply (limiting reactant A)',
        main: '<i>k</i>′ = (2.303/<i>t</i>) log([A]<sub>0</sub>/[A])<br><i>t</i><sub>1/2</sub> = 0.693/<i>k</i>′',
        legend: [
          '<i>k</i>′ = observed (pseudo) first-order rate constant',
          '<i>t</i> = time',
          '[A]<sub>0</sub> = initial concentration of A',
          '[A] = concentration of A at time <i>t</i>',
          '<i>t</i><sub>1/2</sub> = half-life',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Diagnostic contrast</b> — molecularity vs observed order for the ester hydrolysis: molecularity = 2 (as NCERT counts it, two reacting species), observed order = 1 (experimental, water excluded by excess). This is the cleanest real example of order ≠ molecularity.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'Procedure A — Recognising and reducing a pseudo first order reaction',
        steps: [
          '<b>Write the true rate law</b> from the experiment, e.g. Rate = <i>k</i>[A][B]. <b>Reasoning:</b> start from the genuine dependence on all reactants.',
          '<b>Identify the excess species.</b> Whichever reactant is present in large excess (often the solvent, water) has a nearly constant concentration. <b>Reasoning:</b> if [B]<sub>0</sub> ≫ [A]<sub>0</sub>, then consuming all of A removes only a tiny fraction of B.',
          '<b>Fold the constant into the rate constant:</b> Rate = (<i>k</i>[B])[A] = <i>k</i>′[A]. <b>Reasoning:</b> a constant times a constant (<i>k</i> × [B]) is itself a constant, so the visible kinetics depend on [A] alone.',
          '<b>Apply first-order analysis</b> to the limiting reactant using <i>k</i>′. <b>Reasoning:</b> the reduced law is mathematically identical to a true first-order reaction.',
        ],
      },
      {
        t: 'p',
        html: '<b>Procedure B — Extracting the true rate constant</b><br>Given the observed pseudo constant <i>k</i>′ and the (fixed) excess concentration [B]:',
      },
      {
        t: 'formula',
        kicker: 'Extracting the true rate constant',
        main: '<i>k</i> = <i>k</i>′/[B]',
        legend: [
          '<i>k</i> = true second-order rate constant, units L mol<sup>−1</sup> s<sup>−1</sup>',
          '<i>k</i>′ = observed (pseudo) first-order rate constant, units s<sup>−1</sup>',
          '[B] = (fixed) excess concentration',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Reasoning:</b> since <i>k</i>′ = <i>k</i>[B], dividing the observed constant by the excess concentration recovers the true second-order constant — and the units shift from s<sup>−1</sup> to L mol<sup>−1</sup> s<sup>−1</sup>, a useful self-check.',
      },
      {
        t: 'p',
        html: '<b>Worked illustration of the excess assumption</b><br>For the hydrolysis of a small amount of ester in water, suppose 0.02 mol of ester reacts in 20 mol of water. Even at complete reaction, water falls from 20 to 19.98 mol — a change of 0.1%. <b>Reasoning:</b> a 0.1% change is utterly negligible, so [H<sub>2</sub>O] is constant to an excellent approximation and the first-order disguise is justified.',
      },
      {
        t: 'p',
        html: 'How do you prove a reaction is pseudo first order rather than truly first order? Run it at two or more excess concentrations:',
      },
      {
        t: 'proc',
        title: 'Procedure C — Confirming pseudo first order experimentally',
        steps: [
          '<b>Hold the limiting reactant fixed; vary the excess reactant.</b> Measure the observed constant <i>k</i>′ at each excess concentration.',
          '<b>Test the proportionality <i>k</i>′ = <i>k</i>[B].</b> If <i>k</i>′ scales linearly with the excess concentration [B], the reaction is pseudo first order; a genuinely first-order reaction would show no such dependence. <b>Reasoning:</b> only a masked higher-order reaction carries the excess concentration inside its observed constant.',
        ],
      },
      {
        t: 'p',
        html: '<b>How these reactions are followed in the lab</b><br>Because the limiting reactant is often hard to titrate directly, pseudo first order reactions are tracked through a convenient physical or chemical property that changes as the reaction proceeds:<br>• <b>Ester hydrolysis</b> is followed <b>titrimetrically</b>: the acid produced (e.g. acetic acid) is titrated against standard alkali at intervals, so the volume of alkali used is a direct measure of how far the reaction has gone.<br>• <b>Inversion of cane sugar</b> is followed <b>polarimetrically</b>: sucrose is dextrorotatory, while the glucose–fructose product mixture is net laevorotatory, so the optical rotation steadily falls (and ultimately reverses sign) as the reaction proceeds. The change in rotation with time gives the first-order constant.',
      },
      {
        t: 'p',
        html: 'In both cases the measured property is fed into the same first-order equation, <i>k</i>′ = (2.303/<i>t</i>) log([A]<sub>0</sub>/[A]), with the property differences standing in for concentrations. For the <b>titrimetric</b> ester study, if <i>V</i><sub>0</sub>, <i>V</i><sub>t</sub> and <i>V</i><sub>∞</sub> are the alkali volumes at the start, at time <i>t</i>, and at completion, then',
      },
      {
        t: 'formula',
        kicker: 'Titrimetric ester study',
        main: '<i>k</i>′ = (2.303/<i>t</i>) log((<i>V</i><sub>∞</sub> − <i>V</i><sub>0</sub>)/(<i>V</i><sub>∞</sub> − <i>V</i><sub>t</sub>))',
        legend: [
          '<i>k</i>′ = observed (pseudo) first-order rate constant',
          '<i>t</i> = time',
          '<i>V</i><sub>0</sub> = alkali volume at the start',
          '<i>V</i><sub>t</sub> = alkali volume at time <i>t</i>',
          '<i>V</i><sub>∞</sub> = alkali volume at completion',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'and for the <b>polarimetric</b> sucrose study, with <i>r</i><sub>0</sub>, <i>r</i><sub>t</sub> and <i>r</i><sub>∞</sub> the rotations at the start, at time <i>t</i>, and at completion,',
      },
      {
        t: 'formula',
        kicker: 'Polarimetric sucrose study',
        main: '<i>k</i>′ = (2.303/<i>t</i>) log((<i>r</i><sub>0</sub> − <i>r</i><sub>∞</sub>)/(<i>r</i><sub>t</sub> − <i>r</i><sub>∞</sub>))',
        legend: [
          '<i>k</i>′ = observed (pseudo) first-order rate constant',
          '<i>t</i> = time',
          '<i>r</i><sub>0</sub> = rotation at the start',
          '<i>r</i><sub>t</sub> = rotation at time <i>t</i>',
          '<i>r</i><sub>∞</sub> = rotation at completion',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'In each formula the difference between the initial and final readings (<i>V</i><sub>∞</sub> − <i>V</i><sub>0</sub>, <i>r</i><sub>0</sub> − <i>r</i><sub>∞</sub>) plays the role of [A]<sub>0</sub> and the difference between the time-<i>t</i> and final readings (<i>V</i><sub>∞</sub> − <i>V</i><sub>t</sub>, <i>r</i><sub>t</sub> − <i>r</i><sub>∞</sub>) plays the role of [A] — the first-order law unchanged, only re-expressed in measurable units.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'The acid-catalysed hydrolysis of methyl acetate is found to be pseudo first order with an observed rate constant <i>k</i>′ = 4.62 × 10<sup>−3</sup> min<sup>−1</sup>. (a) Explain why the reaction is pseudo first order. (b) Calculate the half-life and the time required for 90% of the ester to hydrolyse.',
        steps: [
          '(a) The true rate law is Rate = <i>k</i>[ester][H<sub>2</sub>O], but water is the solvent and is present in large excess, so [H<sub>2</sub>O] stays essentially constant. Absorbing it gives Rate = <i>k</i>′[ester] with <i>k</i>′ = <i>k</i>[H<sub>2</sub>O] — the reaction behaves as first order.',
          '(b) <i>t</i><sub>1/2</sub> = 0.693/<i>k</i>′ = 0.693/(4.62 × 10<sup>−3</sup>)',
          'For 90% completion, [A] = 0.10[A]<sub>0</sub>:<br><i>t</i> = (2.303/<i>k</i>′) log([A]<sub>0</sub>/(0.10[A]<sub>0</sub>)) = (2.303/(4.62 × 10<sup>−3</sup>)) log 10 = 2.303/(4.62 × 10<sup>−3</sup>)',
        ],
        ans: '<i>t</i><sub>1/2</sub> = 150 min; <i>t</i> ≈ 498 min',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The hydrolysis of ethyl acetate in dilute aqueous acid is a pseudo first order reaction. Which statement is correct?<br>(a) Its molecularity is 1<br>(b) Its observed order is 2<br>(c) The observed rate constant depends on the water concentration<br>(d) Water appears in the observed rate law',
        steps: [
          '<b>Quick reasoning.</b> Molecularity, as NCERT counts it, is the number of reacting species: ester <b>and</b> water = 2, so (a) is wrong. The observed order is 1 (water is constant), so (b) is wrong. Water is folded into <i>k</i>′, so it does <b>not</b> appear in the observed rate law — (d) is wrong. Since <i>k</i>′ = <i>k</i>[H<sub>2</sub>O], the observed constant <b>does</b> depend on the water concentration.',
          '<b>The trap:</b> students see “first order” and assume molecularity is 1, or assume the pseudo constant is a true constant independent of everything. Remember: pseudo first order means observed order 1, molecularity unchanged, and <i>k</i>′ carries the hidden excess concentration.',
        ],
        ans: '(c) is correct.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'For the hydrolysis ester + H<sub>2</sub>O → products, the true rate law is Rate = <i>k</i>[ester][H<sub>2</sub>O]. In a dilute aqueous run the water concentration is essentially constant at 55.5 mol L<sup>−1</sup>, and the observed pseudo first order rate constant is <i>k</i>′ = 2.0 × 10<sup>−3</sup> s<sup>−1</sup>. Calculate the true second order rate constant and state its units.',
        steps: [
          'Since <i>k</i>′ = <i>k</i>[H<sub>2</sub>O],<br><i>k</i> = <i>k</i>′/[H<sub>2</sub>O] = (2.0 × 10<sup>−3</sup>)/55.5',
          'The multi-concept catch is the unit change: dividing s<sup>−1</sup> by mol L<sup>−1</sup> gives L mol<sup>−1</sup> s<sup>−1</sup> — the correct second-order units, confirming the conversion is dimensionally sound.',
        ],
        ans: '<i>k</i> = 3.6 × 10<sup>−5</sup> L mol<sup>−1</sup> s<sup>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A reaction A + B → products obeys the true rate law Rate = <i>k</i>[A][B]. It is studied under pseudo first order conditions with B in large excess. The half-life of A is observed to be <b>independent of</b> [A]<sub>0</sub> but to <b>halve when</b> [B] <b>is doubled</b>. At [B] = 0.50 mol L<sup>−1</sup> the measured half-life of A is 46.2 s. (a) Explain both observations. (b) Determine the true rate constant <i>k</i>.',
        steps: [
          '(a) Under excess B, Rate = <i>k</i>′[A] with <i>k</i>′ = <i>k</i>[B], so A decays by first order kinetics. A first-order half-life <i>t</i><sub>1/2</sub> = 0.693/<i>k</i>′ does not contain [A]<sub>0</sub> — hence independence of [A]<sub>0</sub>. But <i>k</i>′ = <i>k</i>[B], so <i>t</i><sub>1/2</sub> = 0.693/(<i>k</i>[B]) ∝ 1/[B] — doubling [B] doubles <i>k</i>′ and halves the half-life. Both observations are signatures of pseudo first order behaviour.',
          '(b) From <i>t</i><sub>1/2</sub> = 0.693/(<i>k</i>[B]) at [B] = 0.50 mol L<sup>−1</sup>:<br>46.2 = 0.693/(<i>k</i> (0.50)) ⇒ <i>k</i> = 0.693/(0.50 × 46.2) = 0.693/23.1',
          'The deep point: the true constant <i>k</i> is fixed, but the observed half-life is tunable through the excess concentration — a clean demonstration that <i>k</i>′ is a composite, not a fundamental, constant.',
        ],
        ans: '<i>k</i> = 3.0 × 10<sup>−2</sup> L mol<sup>−1</sup> s<sup>−1</sup>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define a pseudo first order reaction and give one example with its observed rate law.',
            a: 'A reaction that is truly higher order but behaves as first order because one reactant is in large excess; e.g. ester hydrolysis, observed Rate = <i>k</i>′[ester].',
          },
          {
            q: '[NEET] State, with reason, the molecularity and the observed order of the acid-catalysed hydrolysis of cane sugar.',
            a: 'Molecularity 2, counted as for ester hydrolysis (sucrose + water react); observed order 1 (water in excess).',
          },
          {
            q: '[JEE Main] A pseudo first order reaction has <i>k</i>′ = 1.4 × 10<sup>−2</sup> s<sup>−1</sup> when the excess reactant concentration is 2.0 mol L<sup>−1</sup>. Calculate the true second order rate constant.',
            a: '<i>k</i> = <i>k</i>′/[B] = (1.4 × 10<sup>−2</sup>)/2.0 = 7.0 × 10<sup>−3</sup> L mol<sup>−1</sup> s<sup>−1</sup>.',
          },
          {
            q: '[JEE Main] For a pseudo first order hydrolysis, the ester concentration falls to one-fourth of its initial value in 80 minutes. Calculate the observed rate constant <i>k</i>′.',
            a: 'One-fourth remaining = 2 half-lives, so <i>t</i><sub>1/2</sub> = 40 min and <i>k</i>′ = 0.693/40 = 1.73 × 10<sup>−2</sup> min<sup>−1</sup> (1.7 × 10<sup>−2</sup> min<sup>−1</sup> to two significant figures).',
          },
          {
            q: '[JEE Advanced] A reaction first order in each of A and B is run once with [B]<sub>0</sub> = 1.0 mol L<sup>−1</sup> and once with [B]<sub>0</sub> = 3.0 mol L<sup>−1</sup>, both with [B]<sub>0</sub> ≫ [A]<sub>0</sub>. The observed pseudo constants are <i>k</i>′<sub>1</sub> and <i>k</i>′<sub>2</sub>. Find the ratio <i>k</i>′<sub>2</sub>/<i>k</i>′<sub>1</sub> and explain.',
            a: '<i>k</i>′<sub>2</sub>/<i>k</i>′<sub>1</sub> = [B]<sub>2</sub>/[B]<sub>1</sub> = 3.0/1.0 = 3, since <i>k</i>′ = <i>k</i>[B].',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A reaction is pseudo first order. This means:',
        opts: [
          { label: 'its molecularity is one', nudge: '<b>(a)</b> confuses observed order with molecularity (still 2 as NCERT counts these hydrolyses).' },
          { label: 'its true order is one', nudge: '<b>(b)</b> is wrong — the true order is higher; only the observed order is one.' },
          { label: 'it is truly higher order but behaves as first order due to one reactant in excess', nudge: null },
          { label: 'it has no rate constant', nudge: '<b>(d)</b> is nonsense; it has an observed constant <i>k</i>′.' },
        ],
        correct: 2,
        solution: 'The disguise comes from holding one reactant’s concentration constant by using it in excess.',
      },
      {
        t: 'mcq',
        q: 'The observed rate constant <i>k</i>′ of a pseudo first order reaction:',
        opts: [
          { label: 'is independent of all concentrations', nudge: '<b>(a)</b> ignores the embedded [B].' },
          { label: 'depends on the concentration of the reactant in excess', nudge: null },
          { label: 'depends on the limiting reactant', nudge: '<b>(c)</b> is wrong — <i>k</i>′ is independent of the limiting reactant.' },
          { label: 'has units L mol<sup>−1</sup> s<sup>−1</sup>', nudge: '<b>(d)</b> is the true constant’s units; <i>k</i>′ has first-order units s<sup>−1</sup>.' },
        ],
        correct: 1,
        solution: 'Since <i>k</i>′ = <i>k</i>[B<sub>excess</sub>], it scales with the excess concentration.',
      },
      {
        t: 'mcq',
        q: 'Which of the following is a pseudo first order reaction?',
        opts: [
          { label: '2HI → H<sub>2</sub> + I<sub>2</sub>', nudge: '<b>(a)</b> is genuinely second order with no excess species.' },
          { label: 'acid hydrolysis of ethyl acetate in water', nudge: null },
          { label: '2NO + O<sub>2</sub> → 2NO<sub>2</sub>', nudge: '<b>(c)</b> is genuinely third order with no excess species.' },
          { label: 'decomposition of N<sub>2</sub>O<sub>5</sub>', nudge: '<b>(d)</b> is intrinsically first order (not pseudo — there is no masked second reactant).' },
        ],
        correct: 1,
        solution: 'Water is the excess reactant, so the hydrolysis, bimolecular as NCERT counts it, behaves as first order.',
      },
      {
        t: 'mcq',
        q: 'For the inversion of cane sugar, the observed rate law is Rate = <i>k</i>′[sucrose]. The reason water does not appear is that:',
        opts: [
          { label: 'water is a catalyst', nudge: '<b>(a)</b> water is a reactant, not a catalyst (H<sup>+</sup> is the catalyst).' },
          { label: 'water is a product', nudge: '<b>(b)</b> water is consumed, not produced.' },
          { label: 'water is in large excess and essentially constant', nudge: null },
          { label: 'water has zero order intrinsically', nudge: '<b>(d)</b> misstates the cause — the constancy is due to excess, not an intrinsic zero order.' },
        ],
        correct: 2,
        solution: 'Excess water has a near-constant concentration, absorbed into <i>k</i>′.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Saying molecularity is 1 because it is “first order.”</b> Pseudo first order changes only the observed order; molecularity (e.g. 2 for ester hydrolysis, as NCERT counts it) is unchanged.',
          '<b>Treating <i>k</i>′ as a fundamental constant.</b> It is <i>k</i>′ = <i>k</i>[excess] — change the excess concentration and <i>k</i>′ changes. Only <i>k</i> is intrinsic.',
          '<b>Quoting the wrong units.</b> Observed <i>k</i>′ is in s<sup>−1</sup> (first order); the true <i>k</i> recovered as <i>k</i>′/[excess] is in L mol<sup>−1</sup> s<sup>−1</sup>.',
          '<b>Forgetting the excess requirement.</b> The first-order disguise holds only while the “excess” reactant is barely consumed; if it is depleted appreciably, true second-order behaviour returns.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy):</b> Whenever a hydrolysis “in water” or an “acid-catalysed” reaction is described as first order, suspect pseudo first order. Mentally tag the excess species, fold it into <i>k</i>′, and then reuse every first-order result from Topic 02 unchanged — half-life 0.693/<i>k</i>′, the log[A]-vs-<i>t</i> line, and the completion ladder.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Definition',
            note: 'truly higher order, but <b>observed order 1</b> because one reactant (often water/solvent) is in <b>large excess</b> → constant concentration.',
          },
          {
            f: 'Reduction',
            note: 'Rate = <i>k</i>[A][B] →<sup>[B] const</sup> <i>k</i>′[A], with <i>k</i>′ = <i>k</i>[B].',
          },
          {
            f: 'Examples',
            note: 'ester hydrolysis CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O → CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH; inversion of cane sugar C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> + H<sub>2</sub>O → glucose + fructose.',
          },
          {
            f: '<i>k</i>′ properties',
            note: 'units s<sup>−1</sup>; depends on the <b>excess</b> concentration; recover true <i>k</i> = <i>k</i>′/[excess] (units L mol<sup>−1</sup> s<sup>−1</sup>).',
          },
          {
            f: 'Tools carry over',
            note: '<i>k</i>′ = (2.303/<i>t</i>) log([A]<sub>0</sub>/[A]), <i>t</i><sub>1/2</sub> = 0.693/<i>k</i>′.',
          },
          {
            f: 'Followed in lab',
            note: 'ester (titrate the acid), <i>k</i>′ = (2.303/<i>t</i>) log((<i>V</i><sub>∞</sub> − <i>V</i><sub>0</sub>)/(<i>V</i><sub>∞</sub> − <i>V</i><sub>t</sub>)).',
          },
          {
            f: 'Sucrose inversion by optical rotation',
            note: '<i>k</i>′ = (2.303/<i>t</i>) log((<i>r</i><sub>0</sub> − <i>r</i><sub>∞</sub>)/(<i>r</i><sub>t</sub> − <i>r</i><sub>∞</sub>)). Confirm pseudo behaviour via <i>k</i>′ ∝ [excess].',
          },
          {
            f: 'Isolation method',
            note: 'flood all other reactants to excess to measure order in one reactant at a time.',
          },
          {
            f: 'Order ≠ molecularity',
            note: 'molecularity 2 (as NCERT counts it), observed order 1 — the textbook example.',
          },
        ],
        aids: [
          '“Excess hides in the constant” — water disappears into <i>k</i>′.',
          '“Pseudo = fake order, real molecularity.”',
          '“<i>k</i>′ is a costume; <i>k</i> is the person underneath” — <i>k</i>′ = <i>k</i>[excess].',
        ],
      },
    ],
  },
];
