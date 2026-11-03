import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11, Topics 05 to 07, pp. 775–794 of the Class 11 Physics Master
 * Reference, word for word: Heat Engines, Refrigerators & Heat Pumps (pp. 775
 * to 780), The Second Law of Thermodynamics & Reversibility (pp. 781 to 787)
 * and The Carnot Engine & Carnot’s Theorem (pp. 788 to 794), each split at the
 * book's Sections 1 to 8. Figures 11.8 (caption p. 775, drawn on p. 776), 11.9
 * (caption p. 782, drawn on p. 783) and 11.10 (caption p. 789, drawn on p. 790).
 */
export const TOPICS: Topic[] = [
  {
    n: '05',
    title: 'Heat Engines, Refrigerators & Heat Pumps',
    kalam: 'A refrigerator or heat pump is simply a heat engine running in reverse.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This topic turns the first law into machines. CBSE Boards ask the definition of a heat engine, the efficiency formula, and the schematic energy-flow diagram, plus refrigerator coefficient of performance. NEET likes one-step efficiency and COP numericals and the conceptual difference between an engine and a refrigerator. JEE Main combines <i>η</i> and COP with the first-law identity <i>Q</i><sub>1</sub> = <i>W</i> + <i>Q</i><sub>2</sub>. JEE Advanced links these to the second law and Carnot limits (Topics 06 and 07). Lock down <i>η</i> = 1 − <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> and the two COP formulas.',
      },
      {
        t: 'p',
        html: 'The first law says energy is conserved; it does not say energy is useful. A <b>heat engine</b> is any device that does the most economically important trick in physics: it converts heat — the most disordered form of energy — into ordered mechanical work, over and over, in a cycle. Every car engine, steam turbine, and power-plant boiler is a heat engine.',
      },
      {
        t: 'p',
        html: 'The picture is always the same three-part story. A working substance (steam, petrol-air mixture, a gas) draws heat <i>Q</i><sub>1</sub> from a <b>hot reservoir</b> at temperature <i>T</i><sub>1</sub>, converts part of it into work <i>W</i>, and dumps the leftover <i>Q</i><sub>2</sub> into a <b>cold reservoir</b> at temperature <i>T</i><sub>2</sub>. The phrase “part of it” is the whole drama: you can never convert all the heat into work — some must always be thrown away to the cold reservoir. Because the substance returns to its starting state each cycle (Δ<i>U</i> = 0), the first law forces <i>W</i> = <i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>. The <b>efficiency</b> is the fraction of the purchased heat that becomes useful work: <i>η</i> = <i>W</i>/<i>Q</i><sub>1</sub> = 1 − <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Think of <i>Q</i><sub>1</sub> as your monthly salary drawn from the bank (hot reservoir). <i>W</i> is the money you actually get to spend on yourself; <i>Q</i><sub>2</sub> is the unavoidable tax and fees siphoned off to the government (cold reservoir). Efficiency is the take-home fraction. No matter how clever your accounting, the “tax” <i>Q</i><sub>2</sub> can never be zero — and the second law (Topic 06) explains exactly why. A 100%-efficient engine (<i>Q</i><sub>2</sub> = 0) is as impossible as a job with zero deductions.',
      },
      {
        t: 'p',
        html: '<b>Running the movie backwards.</b> A <b>refrigerator</b> or <b>heat pump</b> is simply a heat engine running in reverse. Instead of heat flowing naturally hot→cold and producing work, you supply work <i>W</i> to force heat to flow the unnatural way: cold→hot. The fridge extracts heat <i>Q</i><sub>2</sub> from the cold interior (your food), you pay work <i>W</i> (the compressor, run by electricity), and the total <i>Q</i><sub>1</sub> = <i>Q</i><sub>2</sub> + <i>W</i> is dumped into the warm kitchen (the coils at the back). A heat pump is the identical machine, but now you care about the heat <i>Q</i><sub>1</sub> delivered to the warm side (heating a house in winter). Same hardware, different goal — and therefore a different “figure of merit,” the <b>coefficient of performance</b> (COP), defined as “what you want ÷ what you pay.”',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> (1) These definitions assume a cyclic device, so the working substance returns to its initial state and Δ<i>U</i><sub>cycle</sub> = 0 — that is why <i>W</i> = <i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>. (2) “Reservoir” means a body so large its temperature does not change as heat is exchanged. (3) Efficiency and COP as defined here are general; the maximum possible values are set by the Carnot limit (Topic 07) and depend only on the reservoir temperatures. (4) COP can exceed 1 (and usually does) — it is not a percentage, so do not “cap” it at 100%.',
      },
      { t: 'fig', id: 'p11-11-fig-11.8' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Heat engine (per cycle)',
        main: 'Working substance absorbs <i>Q</i><sub>1</sub> from the hot reservoir, rejects <i>Q</i><sub>2</sub> to the cold reservoir, does net work <i>W</i>. Since Δ<i>U</i><sub>cycle</sub> = 0:<br><i>W</i> = <i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Thermal efficiency',
        main: '<i>η</i> = <i>W</i>/<i>Q</i><sub>1</sub> = (<i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>)/<i>Q</i><sub>1</sub> = 1 − <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub>, 0 ≤ <i>η</i> < 1',
        legend: [],
        note: 'Often quoted as a percentage; <i>η</i> = 1 (<i>Q</i><sub>2</sub> = 0) is forbidden by the second law.',
      },
      {
        t: 'formula',
        kicker: 'Refrigerator',
        main: '(goal: remove heat <i>Q</i><sub>2</sub> from the cold space; you pay work <i>W</i>, and <i>Q</i><sub>1</sub> = <i>Q</i><sub>2</sub> + <i>W</i> is rejected to the hot surroundings):<br>COP<sub>ref</sub> = <i>Q</i><sub>2</sub>/<i>W</i> = <i>Q</i><sub>2</sub>/(<i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Heat pump',
        main: '(goal: deliver heat <i>Q</i><sub>1</sub> to the warm space; same machine, you pay work <i>W</i>):<br>COP<sub>hp</sub> = <i>Q</i><sub>1</sub>/<i>W</i> = <i>Q</i><sub>1</sub>/(<i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Universal relations',
        main: '(from <i>Q</i><sub>1</sub> = <i>Q</i><sub>2</sub> + <i>W</i>):<br>COP<sub>hp</sub> = COP<sub>ref</sub> + 1<br>COP<sub>ref</sub> = 1/<i>η</i><sub>engine</sub> − 1 (for a reversible machine, run as an engine between the same reservoirs)',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: 'Quantity reference',
        head: ['Quantity', 'Symbol', 'Notes'],
        rows: [
          ['Heat absorbed (hot)', '<i>Q</i><sub>1</sub>', 'from reservoir at <i>T</i><sub>1</sub> (the “input” for an engine)'],
          ['Heat rejected (cold)', '<i>Q</i><sub>2</sub>', 'to reservoir at <i>T</i><sub>2</sub> (always > 0 in practice)'],
          ['Net work per cycle', '<i>W</i>', '= <i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub> (engine) or supplied (fridge/pump)'],
          ['Efficiency', '<i>η</i>', 'dimensionless, 0 ≤ <i>η</i> < 1'],
          ['Coefficient of performance', 'COP', 'dimensionless, can exceed 1'],
        ],
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: '3.1 Why W = Q₁ − Q₂ (the cyclic argument)',
        steps: [
          'Over one complete cycle the working substance returns to its starting state, so Δ<i>U</i><sub>cycle</sub> = 0.',
          'The first law over the cycle: <i>Q</i><sub>net</sub> = <i>W</i><sub>net</sub>, i.e. (<i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>) = <i>W</i>. (Heat absorbed counts +, heat rejected −.)',
          'Efficiency is “useful out ÷ costly in” = <i>W</i>/<i>Q</i><sub>1</sub> = 1 − <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub>. The same energy bookkeeping, divided differently, gives the fridge and heat-pump COPs.',
        ],
      },
      {
        t: 'proc',
        title: '3.2 Procedure: engine vs. refrigerator numericals',
        steps: [
          'Identify the device: does it produce work (engine) or consume work (fridge/pump)?',
          'Write the energy balance <i>Q</i><sub>1</sub> = <i>Q</i><sub>2</sub> + <i>W</i> — this single equation links all three.',
          'Pick the figure of merit by the goal: engine → <i>η</i> = <i>W</i>/<i>Q</i><sub>1</sub>; fridge → COP = <i>Q</i><sub>2</sub>/<i>W</i>; heat pump → COP = <i>Q</i><sub>1</sub>/<i>W</i>.',
          'For maximum (ideal) values, replace heat ratios with temperature ratios via the Carnot result <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> (justified in Topic 07).',
        ],
      },
      {
        t: 'p',
        html: '<b>3.3 The link to the second law (preview)</b><br>An engine with <i>Q</i><sub>2</sub> = 0 (<i>η</i> = 1) would convert heat entirely into work with no other effect — forbidden by the Kelvin–Planck statement. A refrigerator with <i>W</i> = 0 (COP = ∞) would move heat cold→hot with no work — forbidden by the Clausius statement. These two impossibilities are the subject of Topic 06, and they are why <i>η</i> < 1 and COP is finite.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'In each cycle a heat engine absorbs 1000 J from a hot reservoir and rejects 600 J to a cold reservoir. Find (a) the work done per cycle and (b) the efficiency.',
        steps: [
          '<b>Solution.</b> (a) <i>W</i> = <i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub> = 1000 − 600',
          '(b) <i>η</i> = <i>W</i>/<i>Q</i><sub>1</sub> = 400/1000',
        ],
        ans: '<i>W</i> = 400 J, <i>η</i> = 40%',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A refrigerator extracts 200 J of heat from its interior for every 50 J of electrical work supplied. What is its coefficient of performance, and how much heat is dumped into the room per cycle?',
        steps: [
          '<b>Speed solution.</b> COP<sub>ref</sub> = <i>Q</i><sub>2</sub>/<i>W</i> = 200/50',
          'Heat dumped <i>Q</i><sub>1</sub> = <i>Q</i><sub>2</sub> + <i>W</i> = 200 + 50',
          '<b>The trap:</b> students compute <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = 200/250 = 0.8 and call it the COP, borrowing an engine-style heat ratio. For a fridge the denominator is the work, not the hot-side heat — and the COP of 4 (exceeding 1) is perfectly normal.',
        ],
        ans: 'COP = 4; heat rejected <i>Q</i><sub>1</sub> = 250 J',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A heat engine has efficiency 25% and delivers 500 J of useful work per cycle. Find (a) the heat absorbed from the hot reservoir and (b) the heat rejected to the cold reservoir per cycle.',
        steps: [
          '<b>Solution.</b> (a) <i>η</i> = <i>W</i>/<i>Q</i><sub>1</sub> ⇒ <i>Q</i><sub>1</sub> = <i>W</i>/<i>η</i> = 500/0.25',
          '(b) <i>Q</i><sub>2</sub> = <i>Q</i><sub>1</sub> − <i>W</i> = 2000 − 500',
          'A 25% engine throws away three-quarters of the heat it buys — a vivid reminder of why <i>Q</i><sub>2</sub> is never negligible.',
        ],
        ans: '<i>Q</i><sub>1</sub> = 2000 J, <i>Q</i><sub>2</sub> = 1500 J',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A device operates between a cold space at <i>T</i><sub>2</sub> = 250 K and warm surroundings at <i>T</i><sub>1</sub> = 300 K. Treating it as ideal (Carnot), find (a) its COP when used as a refrigerator, (b) its COP when the same machine is used as a heat pump, (c) verify COP<sub>hp</sub> = COP<sub>ref</sub> + 1, and (d) the electrical work needed to remove 1000 J from the cold space as a refrigerator.',
        steps: [
          '<b>Solution.</b> For an ideal (Carnot) device, <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>, so:',
          '(a) COP<sub>ref</sub> = <i>Q</i><sub>2</sub>/(<i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>) = <i>T</i><sub>2</sub>/(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>) = 250/(300 − 250) = 250/50',
          '(b) COP<sub>hp</sub> = <i>Q</i><sub>1</sub>/(<i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>) = <i>T</i><sub>1</sub>/(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>) = 300/50',
          '(c) 5 + 1 = 6 ✓.',
          '(d) COP<sub>ref</sub> = <i>Q</i><sub>2</sub>/<i>W</i> ⇒ <i>W</i> = <i>Q</i><sub>2</sub>/COP = 1000/5',
          '<b>Notice the leverage:</b> 200 J of electrical work pumps 1000 J of heat out of the cold space — and as a heat pump, 200 J of work would deliver 1200 J of heating. This “more heat than work paid” is exactly why heat pumps beat resistive heaters, and the COP shrinks as <i>T</i><sub>1</sub> − <i>T</i><sub>2</sub> grows.',
        ],
        ans: 'COP<sub>ref</sub> = 5, COP<sub>hp</sub> = 6, <i>W</i> = 200 J to move 1000 J',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A heat engine absorbs 800 J per cycle and does 200 J of work. Find the heat rejected and the efficiency.',
            a: '<i>Q</i><sub>2</sub> = 800 − 200 = 600 J; <i>η</i> = 200/800 = 25%.',
          },
          {
            q: '[NEET] State, in one line each, the difference between a refrigerator and a heat pump in terms of which heat is the “desired” output.',
            a: 'Refrigerator: desired output is the heat <i>Q</i><sub>2</sub> removed from the cold space; heat pump: desired output is the heat <i>Q</i><sub>1</sub> delivered to the warm space (same machine, opposite goal).',
          },
          {
            q: '[JEE Main] An engine of efficiency 30% rejects 1400 J of heat per cycle. Find the heat absorbed and the work done.',
            a: '<i>η</i> = <i>W</i>/<i>Q</i><sub>1</sub> = 1 − <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> ⇒ <i>Q</i><sub>1</sub> = <i>Q</i><sub>2</sub>/(1 − <i>η</i>) = 1400/0.70 = 2000 J; <i>W</i> = <i>ηQ</i><sub>1</sub> = 0.30 × 2000 = 600 J.',
          },
          {
            q: '[JEE Main] A refrigerator has COP = 4.5 and removes 900 J from the cold chamber per cycle. Find the work input and the heat rejected to the room.',
            a: '<i>W</i> = <i>Q</i><sub>2</sub>/COP = 900/4.5 = 200 J; <i>Q</i><sub>1</sub> = <i>Q</i><sub>2</sub> + <i>W</i> = 1100 J.',
          },
          {
            q: '[JEE Advanced] An ideal (Carnot) refrigerator works between <i>T</i><sub>2</sub> = 270 K and <i>T</i><sub>1</sub> = 300 K. Find its COP and the minimum work to extract 600 J from the cold reservoir.',
            a: 'COP<sub>ref</sub> = <i>T</i><sub>2</sub>/(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>) = 270/30 = 9; <i>W</i><sub>min</sub> = <i>Q</i><sub>2</sub>/COP = 600/9 ≈ 66.7 J.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The efficiency of a heat engine is given by:',
        opts: [
          { label: '<i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub>', nudge: '<b>(A)</b> is the rejected fraction, not efficiency.' },
          { label: '1 − <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub>', nudge: null },
          { label: '<i>Q</i><sub>1</sub>/<i>W</i>', nudge: '<b>(C)</b> inverts the definition.' },
          { label: '1 − <i>Q</i><sub>1</sub>/<i>Q</i><sub>2</sub>', nudge: '<b>(D)</b> has the ratio upside-down (and would be negative).' },
        ],
        correct: 1,
        solution: '<i>η</i> = <i>W</i>/<i>Q</i><sub>1</sub> = (<i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>)/<i>Q</i><sub>1</sub>.',
      },
      {
        t: 'mcq',
        q: 'A refrigerator’s coefficient of performance can be:',
        opts: [
          { label: 'only less than 1', nudge: '<b>(A)</b>,<b>(B)</b> wrongly treat COP like a capped percentage.' },
          { label: 'exactly 1 always', nudge: '<b>(A)</b>,<b>(B)</b> wrongly treat COP like a capped percentage.' },
          { label: 'greater than 1', nudge: null },
          { label: 'negative', nudge: '<b>(D)</b> impossible — both <i>Q</i><sub>2</sub> and <i>W</i> are positive.' },
        ],
        correct: 2,
        solution: 'COP = <i>Q</i><sub>2</sub>/<i>W</i>; since useful heat moved often exceeds the work paid, COP routinely exceeds 1.',
      },
      {
        t: 'mcq',
        q: 'For a device run as a refrigerator and as a heat pump between the same reservoirs, COP<sub>hp</sub> − COP<sub>ref</sub> equals:',
        opts: [
          { label: '0', nudge: '<b>(A)</b> ignores the +1.' },
          { label: '1', nudge: null },
          { label: '<i>η</i>', nudge: '<b>(C)</b>,<b>(D)</b> confuse with engine quantities.' },
          { label: '<i>Q</i><sub>1</sub>/<i>Q</i><sub>2</sub>', nudge: '<b>(C)</b>,<b>(D)</b> confuse with engine quantities.' },
        ],
        correct: 1,
        solution: 'COP<sub>hp</sub> = <i>Q</i><sub>1</sub>/<i>W</i>, COP<sub>ref</sub> = <i>Q</i><sub>2</sub>/<i>W</i>, and <i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub> = <i>W</i>, so the difference is <i>W</i>/<i>W</i> = 1.',
      },
      {
        t: 'mcq',
        q: 'A heat engine with <i>η</i> = 1 (<i>Q</i><sub>2</sub> = 0) is impossible because it would violate:',
        opts: [
          {
            label: 'the first law',
            nudge: '<b>(A)</b> the first law is satisfied by <i>η</i> = 1 (energy still balances) — which is why a second law is needed.',
          },
          { label: 'the zeroth law', nudge: '<b>(B)</b>,<b>(D)</b> unrelated.' },
          { label: 'the second law (Kelvin–Planck)', nudge: null },
          { label: 'conservation of momentum', nudge: '<b>(B)</b>,<b>(D)</b> unrelated.' },
        ],
        correct: 2,
        solution: 'Converting heat entirely into work with no other effect is exactly what the Kelvin–Planck statement forbids.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Putting <i>Q</i><sub>1</sub> in the COP denominator.</b> For a fridge/pump the denominator is the work <i>W</i>, not the hot-side heat. COP = <i>Q</i><sub>2</sub>/<i>W</i> (fridge) or <i>Q</i><sub>1</sub>/<i>W</i> (pump).',
          '<b>Treating COP as a percentage capped at 100%.</b> COP is a ratio that is normally > 1. Never write “COP = 80%.”',
          '<b>Forgetting <i>Q</i><sub>1</sub> = <i>Q</i><sub>2</sub> + <i>W</i> for a fridge.</b> The hot-side heat is the cold-side heat plus the work you paid — the room gets warmer than just the food’s heat.',
          '<b>Confusing efficiency with rejected fraction.</b> <i>η</i> = 1 − <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub>, not <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & accuracy):</b> Always start from the single balance <i>Q</i><sub>1</sub> = <i>Q</i><sub>2</sub> + <i>W</i>; everything else is one division away. For ideal-limit problems, swap the heat ratio for the temperature ratio: <i>η</i><sub>max</sub> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>, COP<sub>ref,max</sub> = <i>T</i><sub>2</sub>/(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>), COP<sub>hp,max</sub> = <i>T</i><sub>1</sub>/(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>). Notice that (<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>) sits in the numerator of <i>η</i><sub>max</sub> but the denominator of both COPs — a small temperature gap means a great fridge but a feeble engine.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Energy balance (cyclic)',
            note: '<i>Q</i><sub>1</sub> = <i>Q</i><sub>2</sub> + <i>W</i> (Δ<i>U</i><sub>cycle</sub> = 0).',
          },
          {
            f: 'Engine efficiency',
            note: '<i>η</i> = <i>W</i>/<i>Q</i><sub>1</sub> = 1 − <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub>, with 0 ≤ <i>η</i> < 1.',
          },
          {
            f: 'Refrigerator',
            note: 'COP<sub>ref</sub> = <i>Q</i><sub>2</sub>/<i>W</i> = <i>Q</i><sub>2</sub>/(<i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>).',
          },
          {
            f: 'Heat pump',
            note: 'COP<sub>hp</sub> = <i>Q</i><sub>1</sub>/<i>W</i> = <i>Q</i><sub>1</sub>/(<i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>).',
          },
          { f: 'Relation', note: 'COP<sub>hp</sub> = COP<sub>ref</sub> + 1.' },
          {
            f: 'Ideal (Carnot) limits',
            note: '<i>η</i><sub>max</sub> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>; COP<sub>ref,max</sub> = <i>T</i><sub>2</sub>/(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>); COP<sub>hp,max</sub> = <i>T</i><sub>1</sub>/(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>).',
          },
          { f: '<i>η</i> = 1 violates Kelvin–Planck; COP = ∞ violates Clausius.', note: '' },
        ],
        aids: [
          '“Engine: pay heat, get work. Fridge: pay work, move heat.”',
          '“Figure of merit = what you want ÷ what you pay.”',
          '“COP can beat 100% — it’s a ratio, not a percentage.”',
        ],
      },
    ],
  },

  {
    n: '06',
    title: 'The Second Law of Thermodynamics & Reversibility',
    kalam: 'The second law is about direction: it forbids energy-conserving processes that never occur in Nature.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> If the first law is the chapter’s workhorse, the second law is its conscience — it decides which energy-conserving processes Nature actually permits. CBSE Boards ask for the two statements (Kelvin–Planck and Clausius), the definition of reversible vs. irreversible, and “why is a process irreversible.” NEET fires one-line conceptual traps (entropy increases, heat flows hot→cold spontaneously, <i>η</i> = 1 is impossible). JEE Main asks you to spot which statement a hypothetical device violates. JEE Advanced probes the equivalence of the two statements and the precise meaning of reversibility. This is the conceptual bridge to the Carnot engine.',
      },
      {
        t: 'p',
        html: 'The first law is generous to a fault. It will happily allow a cup of coffee to grow hotter while the room cools, or a ball lying on the floor to spontaneously gather heat from the tiles and leap upward — because none of these violates energy conservation. Yet you have never once seen them happen. Something beyond energy balance forbids them. That “something” is the <b>second law of thermodynamics</b>, and it is fundamentally a law about direction: it tells us which way the movie of the universe is allowed to run.',
      },
      {
        t: 'p',
        html: 'Watch any everyday process and you notice an arrow. Heat flows from hot to cold, never the reverse on its own. A drop of ink spreads through water but never re-gathers into a drop. A swinging pendulum slows and stops as its ordered motion bleeds into disordered heat in the air and pivot — but a warm, still pendulum never spontaneously starts swinging by cooling itself. Every one of these is energy-conserving in both directions; only one direction ever occurs. The second law names this universal one-wayness.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture shuffling a brand-new deck of cards stacked in perfect order. A few shuffles and it is hopelessly mixed. Keep shuffling forever and it will essentially never return to perfect order — not because order is forbidden by any law of card-motion, but because there is exactly one ordered arrangement and astronomically many disordered ones. Nature drifts toward the overwhelmingly more probable (disordered) states. Heat spreading out, ink diffusing, motion dissipating — all are the physical world “shuffling toward” its most probable condition. The second law is the bookkeeping of that drift, later quantified by <b>entropy</b> (Topic 08).',
      },
      {
        t: 'p',
        html: '<b>Two faces of one law.</b> Historically the second law was stated two ways, born from two practical frustrations. Engineers building engines found they could never convert heat fully into work — the <b>Kelvin–Planck</b> statement captures this. Engineers building refrigerators found they could never move heat from cold to hot without paying work — the <b>Clausius</b> statement captures that. Remarkably, these two “no free lunch” rules turn out to be logically equivalent: assume you could break one, and you could rig a machine that breaks the other. They are the same prohibition seen from the engine end and the fridge end.',
      },
      {
        t: 'p',
        html: '<b>Reversible and irreversible.</b> A <b>reversible</b> process is an idealised limit: carried out infinitely slowly (quasi-statically) through a continuous chain of equilibrium states, with no dissipative effects (no friction, no turbulence, no finite-temperature-gap heat flow). Run it backwards and both system and surroundings retrace their states exactly, leaving no trace. No real process is truly reversible — it is a frictionless, infinitely-patient ideal — but it is the crucial benchmark, because reversible engines set the ceiling on efficiency (Carnot, Topic 07). Every <b>irreversible</b> process (which is to say, every real one) generates entropy and cannot be undone without leaving a permanent mark on the surroundings.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> (1) The second law is a statement about spontaneous (unaided) processes; you can of course force heat cold→hot by supplying work (that is a refrigerator) — what is forbidden is doing it with no other effect. (2) Reversibility requires both quasi-static evolution and the absence of dissipation; quasi-static alone is not enough (a slow process with friction is still irreversible). (3) These statements concern cyclic devices and macroscopic systems; the “arrow” is statistical, overwhelmingly — not metaphysically — certain.',
      },
      { t: 'fig', id: 'p11-11-fig-11.9' },

      { t: 'part', title: 'Key definitions and statements' },
      {
        t: 'def',
        term: 'Kelvin–Planck statement (engine form)',
        html: 'No process is possible whose sole result is the complete conversion of heat absorbed from a single reservoir into work. Equivalently: no heat engine can have efficiency <i>η</i> = 1; some heat must always be rejected to a colder reservoir.',
      },
      {
        t: 'def',
        term: 'Clausius statement (refrigerator form)',
        html: 'No process is possible whose sole result is the transfer of heat from a colder body to a hotter body. Equivalently: heat cannot flow spontaneously cold→hot; doing so always requires work input.',
      },
      {
        t: 'def',
        term: 'Equivalence',
        html: 'The two statements are logically identical: a violation of either can be used to construct a violation of the other (proof in Key procedures and logical framework).',
      },
      {
        t: 'def',
        term: 'Reversible process',
        html: 'A process carried out quasi-statically (through equilibrium states) and free of all dissipative effects, such that reversing it restores both system and surroundings to their initial states with no net change anywhere. An ideal limit; the maximum-efficiency benchmark.',
      },
      {
        t: 'def',
        term: 'Irreversible process',
        html: 'Any process that cannot be reversed without leaving a permanent change in the surroundings. Causes include: finite-temperature-difference heat flow, friction and viscosity, free (unrestrained) expansion, mixing of gases, and any sudden (non-quasi-static) change. Every real process is irreversible.',
      },
      {
        t: 'table',
        title: 'Quantity / concept reference',
        head: ['Concept', 'Statement form', 'One-line essence'],
        rows: [
          ['Kelvin–Planck', 'engine', 'no <i>η</i> = 1; can’t fully convert heat to work'],
          ['Clausius', 'refrigerator', 'no spontaneous heat cold→hot'],
          ['Reversible', 'idealisation', 'quasi-static + no dissipation; retraceable'],
          ['Irreversible', 'reality', 'generates entropy; leaves a permanent mark'],
        ],
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: '<b>3.1 Why the two statements are equivalent (the JEE-Advanced classic)</b><br>The cleanest way to prove “Statement A ⇔ Statement B” is to show that violating one lets you violate the other. We show the contrapositive both ways.',
      },
      {
        t: 'p',
        html: '<b>(i) A Clausius-violator builds a Kelvin–Planck-violator.</b> Suppose a magic device <i>C</i> moves heat <i>Q</i><sub>2</sub> from the cold reservoir (<i>T</i><sub>2</sub>) to the hot reservoir (<i>T</i><sub>1</sub>) with no work input (violating Clausius). Now run an ordinary engine <i>E</i> between the same reservoirs: it draws <i>Q</i><sub>1</sub> from hot, does work <i>W</i> = <i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>, and rejects exactly <i>Q</i><sub>2</sub> to cold. Combine <i>C</i> and <i>E</i> into one composite device. The cold reservoir’s net heat change is zero (+<i>Q</i><sub>2</sub> from <i>E</i>’s rejection, −<i>Q</i><sub>2</sub> taken back by <i>C</i>). The sole net result of the composite is: heat (<i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>) drawn from the hot reservoir alone, converted entirely into work <i>W</i>, with no other effect — a Kelvin–Planck violation.',
      },
      {
        t: 'p',
        html: '<b>(ii) A Kelvin–Planck-violator builds a Clausius-violator.</b> Suppose a magic engine <i>K</i> takes heat <i>Q</i> from the hot reservoir and converts it entirely to work <i>W</i> = <i>Q</i>, rejecting nothing (violating Kelvin–Planck). Feed that work into an ordinary refrigerator running between the same two reservoirs: it uses <i>W</i> to pump heat <i>Q</i><sub>2</sub> from cold to hot, dumping <i>Q</i><sub>2</sub> + <i>W</i> into the hot reservoir. The hot reservoir gives <i>Q</i> to <i>K</i> and receives <i>Q</i><sub>2</sub> + <i>W</i> = <i>Q</i><sub>2</sub> + <i>Q</i>, a net gain of <i>Q</i><sub>2</sub>. The composite’s sole result: heat <i>Q</i><sub>2</sub> moved from cold to hot with no work input — a Clausius violation. ■',
      },
      {
        t: 'proc',
        title: '3.2 Procedure: decide if a claimed device is allowed',
        steps: [
          'List every reservoir touched and the heat exchanged with each (sign it: + absorbed, − rejected).',
          'Identify the sole net effect after one full cycle (Δ<i>U</i> = 0).',
          'If the sole effect is “heat from one reservoir → pure work,” it violates Kelvin–Planck. If it is “heat cold→hot with no work,” it violates Clausius. Either way, impossible.',
          'If work is genuinely supplied (fridge) or heat is genuinely rejected to a colder body (engine), the device is allowed — check only that <i>η</i> or COP does not exceed the Carnot limit (Topic 07).',
        ],
      },
      {
        t: 'p',
        html: '<b>3.3 Procedure: classify a process as reversible or irreversible</b><br>Ask two questions. Is it quasi-static (slow chain of equilibrium states)? Is it free of dissipation (no friction, no finite-gap heat flow, no turbulence)? Only “yes” to both earns “reversible.” A single “no” — e.g. a gas expanding into vacuum (not quasi-static), or slow sliding with friction (dissipative) — makes it irreversible.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'State the Kelvin–Planck and Clausius statements of the second law, and give one everyday process that illustrates the “natural direction” the law enforces.',
        steps: [
          '<b>Solution.</b> <b>Kelvin–Planck:</b> no engine can, in a cycle, take heat from a single reservoir and convert it entirely into work — some heat must be rejected to a colder body. <b>Clausius:</b> heat cannot flow on its own from a colder to a hotter body; work must be supplied. <b>Everyday illustration:</b> a hot cup of tea always cools to room temperature, transferring heat to the cooler room; it never spontaneously draws heat from the cool room to grow hotter — exactly the Clausius direction.',
        ],
        ans: 'Two statements correctly given; tea cooling to the room illustrates the forbidden reverse (Clausius).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which of the following processes is reversible? (A) Free expansion of a gas into vacuum (B) Heat flow across a large temperature difference (C) A frictionless quasi-static isothermal expansion in contact with a reservoir at the gas’s own temperature (D) A block sliding to rest by friction.',
        steps: [
          '<b>Speed solution.</b> Reversible needs quasi-static AND dissipation-free. (A) is sudden and uncontrolled — not quasi-static. (B) finite temperature gap — dissipative heat flow. (D) friction — dissipative. Only (C) satisfies both.',
          '<b>The trap:</b> students equate “slow” with “reversible.” Slowness (quasi-static) is necessary but not sufficient — a slow process with friction is still irreversible.',
        ],
        ans: '(C). Free expansion, finite-gap heat flow, and friction are all irreversibility sources.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'An inventor claims a cyclic engine that, in each cycle, absorbs 500 J from a reservoir at 400 K and produces 500 J of work, rejecting no heat. Does this violate the first law, the second law, both, or neither?',
        steps: [
          '<b>Solution.</b> First-law check: energy in = 500 J, energy out (work) = 500 J, Δ<i>U</i><sub>cycle</sub> = 0. Energy balances, so the first law is satisfied. Second-law check: the sole result is complete conversion of heat from a single reservoir into work with nothing rejected — precisely the Kelvin–Planck prohibition.',
          'This is the canonical reason a second law was needed at all: energy conservation alone does not forbid the device.',
        ],
        ans: 'Violates the second law only (Kelvin–Planck); the first law is satisfied.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Show that if a hypothetical device could transfer 100 J from a cold reservoir at <i>T</i><sub>2</sub> to a hot reservoir at <i>T</i><sub>1</sub> with no work input, one could combine it with an ordinary engine (drawing 250 J from hot, rejecting 100 J to cold) to manufacture a Kelvin–Planck violator. Identify the net effect.',
        steps: [
          '<b>Solution.</b> Let the ordinary engine <i>E</i> draw <i>Q</i><sub>1</sub> = 250 J from the hot reservoir, do work <i>W</i> = <i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub> = 250 − 100 = 150 J, and reject <i>Q</i><sub>2</sub> = 100 J to the cold reservoir. The magic Clausius-violating device <i>C</i> then carries that same 100 J back from cold to hot, free of charge.',
          '<b>Net effect on the cold reservoir:</b> +100 (received from <i>E</i>) − 100 (taken by <i>C</i>) = 0. The cold reservoir is untouched on balance. <b>Net effect overall:</b> the hot reservoir loses 250 − 100 = 150 J, all of which appears as work <i>W</i> = 150 J, with no other change.',
          'This concrete-number version of the equivalence proof is a favourite JEE Advanced reasoning question.',
        ],
        ans: 'Composite sole effect: 150 J drawn from the hot reservoir alone, fully converted to work — a Kelvin–Planck violation. Hence “Kelvin–Planck holds ⇒ Clausius holds.”',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define a reversible process and list any two sources of irreversibility in real processes.',
            a: 'Reversible = quasi-static and dissipation-free, so reversing it restores system + surroundings with no net change. Irreversibility sources (any two): friction/viscosity, finite-temperature-gap heat flow, free expansion, mixing, sudden non-quasi-static change.',
          },
          {
            q: '[NEET] A claim states heat flowed from a 280 K body to a 310 K body with no external work. Which statement of the second law does this violate?',
            a: 'Clausius statement (spontaneous heat cold→hot).',
          },
          {
            q: '[JEE Main] An engine absorbs 1200 J and produces 1200 J of work per cycle from a single reservoir. Which law(s) does it violate?',
            a: 'Second law only (Kelvin–Planck); the first law is satisfied since energy balances.',
          },
          {
            q: '[JEE Main] Classify each as reversible or irreversible: (a) very slow isothermal compression with a frictionless piston in contact with a reservoir at the same temperature; (b) sudden bursting of a balloon; (c) mixing of hot and cold water.',
            a: '(a) reversible; (b) irreversible (sudden, non-quasi-static); (c) irreversible (finite-gap heat flow / mixing).',
          },
          {
            q: '[JEE Advanced] Using the equivalence argument, explain in 3–4 lines why a refrigerator that needs zero work to operate would also make a 100%-efficient single-reservoir engine possible.',
            a: 'A zero-work refrigerator is a Clausius-violator; couple it with an ordinary engine so its pumped-back heat exactly cancels the engine’s rejected heat at the cold reservoir; the composite then draws heat from the hot reservoir alone and turns it fully into work — a Kelvin–Planck violator. Thus breaking Clausius breaks Kelvin–Planck.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The Kelvin–Planck statement of the second law forbids:',
        opts: [
          { label: 'heat flowing hot→cold', nudge: '<b>(A)</b> is the allowed natural direction.' },
          { label: 'an engine converting heat from one reservoir entirely into work', nudge: null },
          { label: 'work converting fully into heat', nudge: '<b>(C)</b> work→heat is freely allowed (friction does it constantly).' },
          { label: 'any heat engine at all', nudge: '<b>(D)</b> engines are allowed — just not with <i>η</i> = 1.' },
        ],
        correct: 1,
        solution: 'The prohibition is specifically against complete heat→work conversion from a single reservoir.',
      },
      {
        t: 'mcq',
        q: 'Which is not a source of irreversibility?',
        opts: [
          {
            label: 'friction',
            nudge: '<b>(A)</b>,<b>(B)</b>,<b>(D)</b> are all classic dissipative / non-quasi-static sources of irreversibility.',
          },
          {
            label: 'finite-temperature-difference heat flow',
            nudge: '<b>(A)</b>,<b>(B)</b>,<b>(D)</b> are all classic dissipative / non-quasi-static sources of irreversibility.',
          },
          { label: 'a quasi-static, frictionless process', nudge: null },
          {
            label: 'free expansion into vacuum',
            nudge: '<b>(A)</b>,<b>(B)</b>,<b>(D)</b> are all classic dissipative / non-quasi-static sources of irreversibility.',
          },
        ],
        correct: 2,
        solution: 'Quasi-static and frictionless is precisely the reversible ideal.',
      },
      {
        t: 'mcq',
        q: '“Heat cannot flow from a colder to a hotter body without external work” is:',
        opts: [
          {
            label: 'the first law',
            nudge: '<b>(A)</b> is energy conservation; <b>(B)</b> defines temperature; <b>(D)</b> relates <i>C</i><sub><i>P</i></sub> and <i>C</i><sub><i>V</i></sub>. All unrelated to direction.',
          },
          {
            label: 'the zeroth law',
            nudge: '<b>(A)</b> is energy conservation; <b>(B)</b> defines temperature; <b>(D)</b> relates <i>C</i><sub><i>P</i></sub> and <i>C</i><sub><i>V</i></sub>. All unrelated to direction.',
          },
          { label: 'the Clausius statement', nudge: null },
          {
            label: 'Mayer’s relation',
            nudge: '<b>(A)</b> is energy conservation; <b>(B)</b> defines temperature; <b>(D)</b> relates <i>C</i><sub><i>P</i></sub> and <i>C</i><sub><i>V</i></sub>. All unrelated to direction.',
          },
        ],
        correct: 2,
        solution: 'This is the refrigerator form of the second law.',
      },
      {
        t: 'mcq',
        q: 'A process is reversible only if it is:',
        opts: [
          { label: 'fast', nudge: '<b>(A)</b> the opposite — reversibility demands slowness.' },
          { label: 'quasi-static and free of dissipation', nudge: null },
          {
            label: 'adiabatic',
            nudge: '<b>(C)</b>,<b>(D)</b> particular process types, neither necessary nor sufficient for reversibility.',
          },
          {
            label: 'isothermal',
            nudge: '<b>(C)</b>,<b>(D)</b> particular process types, neither necessary nor sufficient for reversibility.',
          },
        ],
        correct: 1,
        solution: 'Both conditions are required together.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Slow = reversible.”</b> Quasi-static is necessary but not sufficient; dissipation (friction, finite-gap heat flow) makes even a slow process irreversible.',
          '<b>Thinking the second law bans heat cold→hot outright.</b> It bans it only as a sole effect; with work input (a fridge) it is perfectly allowed.',
          '<b>Confusing the two statements.</b> Kelvin–Planck is the engine (heat→work) prohibition; Clausius is the refrigerator (heat cold→hot) prohibition.',
          '<b>Believing a Kelvin–Planck violator breaks the first law.</b> It does not — energy is conserved. The whole point is that the second law forbids things the first law permits.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & accuracy):</b> In any “is this device possible?” question, reduce it to its sole net effect over one cycle. “Heat from one reservoir → pure work” = Kelvin–Planck violation. “Heat cold→hot, no work” = Clausius violation. If neither, it is allowed — then (and only then) check it against the Carnot ceiling. And remember the direction of the equivalence proof: assume one violation, bolt on an ordinary engine or fridge, cancel the cold-reservoir heat, read off the other violation.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'The second law is about direction: it forbids energy-conserving processes that never occur in Nature.', note: '' },
          {
            f: 'Kelvin–Planck',
            note: 'no cyclic engine converts heat from a single reservoir entirely into work (<i>η</i> < 1 always).',
          },
          { f: 'Clausius', note: 'heat does not flow spontaneously cold→hot; work is required.' },
          { f: 'The two statements are equivalent (violating one constructs a violation of the other).', note: '' },
          {
            f: '<b>Reversible</b> = quasi-static and dissipation-free; retraceable with no net change. An ideal limit (the efficiency ceiling).',
            note: '',
          },
          {
            f: '<b>Irreversible</b> = every real process; sources: friction/viscosity, finite-gap heat flow, free expansion, mixing, sudden change.',
            note: '',
          },
          { f: 'The first law permits; the second law selects which permitted processes actually happen.', note: '' },
        ],
        aids: [
          '“First law: you can’t win. Second law: you can’t even break even.”',
          '“Kelvin = engine (no <i>η</i> = 1); Clausius = fridge (no free cold→hot).”',
          '“Reversible needs slow and clean — slow alone isn’t enough.”',
        ],
      },
    ],
  },

  {
    n: '07',
    title: 'The Carnot Engine & Carnot’s Theorem',
    kalam: 'This is the crown of the chapter — the engine that sets the absolute speed limit on every heat engine ever built.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the crown of the chapter — the engine that sets the absolute speed limit on every heat engine ever built. CBSE Boards ask for the four steps of the Carnot cycle, the efficiency formula <i>η</i> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>, and a clean numerical. NEET loves one-line “find the efficiency” or “find <i>T</i><sub>2</sub>” traps and the fact that <i>η</i> depends only on the two temperatures. JEE Main asks multi-part numericals (heat rejected, work, raising efficiency). JEE Advanced derives <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> from the cycle and probes Carnot’s theorem (no engine beats Carnot; all reversible engines tie). Get <i>η</i> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> and the derivation airtight.',
      },
      {
        t: 'p',
        html: 'The second law told us efficiency must be less than 1 — but how close to 1 can we get? In 1824 a young French engineer, Sadi Carnot, asked the deepest possible version of this question: of all conceivable engines working between a hot reservoir at <i>T</i><sub>1</sub> and a cold one at <i>T</i><sub>2</sub>, which is the best, and what limits it? His answer is one of the most beautiful results in physics: the best engine is a fully reversible one, its efficiency depends only on the two temperatures (not on the gas, the size, or the design), and that efficiency is <i>η</i> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>.',
      },
      {
        t: 'p',
        html: 'The <b>Carnot engine</b> is the idealised, perfectly reversible engine that achieves this ceiling. Its cycle is built from exactly the two reversible ways to move a gas that we already mastered in Topic 03: isothermal steps (in contact with a reservoir, temperature pinned) and adiabatic steps (perfectly insulated, no heat crosses). Stitch two of each together into a closed loop and you have the Carnot cycle.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Why insist on reversibility for the best engine? Because every irreversibility — friction, a finite temperature gap during heat transfer, turbulence — is wasted opportunity, energy degraded into useless heat that you could otherwise have captured as work. A reversible engine wastes nothing; it operates at the exact boundary the second law allows. It is the “frictionless, lossless” ideal in the same spirit as a frictionless pulley in mechanics — never quite achievable, but the perfect yardstick against which every real engine is measured. A real power plant quoting “42% efficient” is really saying “we convert 42% of the heat into work, against a Carnot ceiling set by our boiler and cooling-tower temperatures.”',
      },
      {
        t: 'p',
        html: 'The Carnot cycle runs through four reversible steps, returning the gas to its start:',
      },
      {
        t: 'proc',
        title: 'The four strokes',
        steps: [
          '<b>Isothermal expansion</b> at <i>T</i><sub>1</sub>: the gas, touching the hot reservoir, expands slowly and absorbs heat <i>Q</i><sub>1</sub>. (Since Δ<i>U</i> = 0 here, <i>Q</i><sub>1</sub> = <i>W</i><sub>by gas</sub>.)',
          '<b>Adiabatic expansion</b> (<i>T</i><sub>1</sub> → <i>T</i><sub>2</sub>): the gas is insulated and expands further, doing work at the cost of its internal energy, cooling from <i>T</i><sub>1</sub> to <i>T</i><sub>2</sub>.',
          '<b>Isothermal compression</b> at <i>T</i><sub>2</sub>: touching the cold reservoir, the gas is compressed slowly, rejecting heat <i>Q</i><sub>2</sub>.',
          '<b>Adiabatic compression</b> (<i>T</i><sub>2</sub> → <i>T</i><sub>1</sub>): insulated again, the gas is compressed back to its starting state, warming from <i>T</i><sub>2</sub> to <i>T</i><sub>1</sub>.',
        ],
      },
      {
        t: 'p',
        html: 'The net work per cycle is the area enclosed by this loop on the <i>P</i>–<i>V</i> diagram, and <i>W</i> = <i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub> as always.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> (1) Every step is reversible (quasi-static, dissipation-free) — this is what makes Carnot the maximum; any real engine falls short. (2) Heat is exchanged only during the two isothermal steps (the adiabatic steps have <i>Q</i> = 0). (3) The result <i>η</i> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> uses <i>T</i> in kelvin and assumes only two reservoirs. (4) Although derived here with an ideal gas as the working substance, Carnot’s theorem guarantees the efficiency is independent of the working substance — the ideal gas is just a convenient vehicle for the derivation.',
      },
      { t: 'fig', id: 'p11-11-fig-11.10' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'def',
        term: 'Carnot cycle',
        html: 'two reversible isothermals (at <i>T</i><sub>1</sub> and <i>T</i><sub>2</sub>) joined by two reversible adiabatics.',
      },
      {
        t: 'formula',
        kicker: 'Heat exchanged',
        main: '(only on the isothermals, for <i>n</i> moles of ideal gas):<br><i>Q</i><sub>1</sub> = <i>nRT</i><sub>1</sub> ln(<i>V</i><sub><i>B</i></sub>/<i>V</i><sub><i>A</i></sub>) (absorbed at <i>T</i><sub>1</sub>)<br><i>Q</i><sub>2</sub> = <i>nRT</i><sub>2</sub> ln(<i>V</i><sub><i>C</i></sub>/<i>V</i><sub><i>D</i></sub>) (rejected at <i>T</i><sub>2</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'The key ratio',
        main: '(derived in Key derivations and logical framework using the adiabatic relations, which force <i>V</i><sub><i>B</i></sub>/<i>V</i><sub><i>A</i></sub> = <i>V</i><sub><i>C</i></sub>/<i>V</i><sub><i>D</i></sub>):<br><i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> (Carnot, <i>T</i> in kelvin)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Carnot efficiency',
        main: '<i>η</i><sub>Carnot</sub> = 1 − <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> = (<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/<i>T</i><sub>1</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Carnot refrigerator / heat pump',
        main: '(same cycle reversed):<br>COP<sub>ref</sub> = <i>T</i><sub>2</sub>/(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>), COP<sub>hp</sub> = <i>T</i><sub>1</sub>/(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'def',
        term: 'Carnot’s theorem',
        html: '(a) No engine operating between two given reservoirs can be more efficient than a reversible (Carnot) engine working between the same two. (b) All reversible engines operating between the same two reservoirs have the same efficiency, regardless of working substance. Consequently <i>η</i> depends only on <i>T</i><sub>1</sub> and <i>T</i><sub>2</sub>.',
      },
      {
        t: 'table',
        title: 'Quantity reference',
        head: ['Quantity', 'Symbol / formula', 'Notes'],
        rows: [
          ['Hot-reservoir temperature', '<i>T</i><sub>1</sub> (K)', 'source; higher ⇒ better'],
          ['Cold-reservoir temperature', '<i>T</i><sub>2</sub> (K)', 'sink; lower ⇒ better'],
          ['Carnot efficiency', '<i>η</i> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>', 'depends only on <i>T</i><sub>1</sub>, <i>T</i><sub>2</sub>'],
          ['Carnot heat ratio', '<i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>', 'defines thermodynamic temperature'],
        ],
      },

      { t: 'part', title: 'Key derivations and logical framework' },
      {
        t: 'p',
        html: '<b>3.1 Deriving <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> (the board/JEE derivation)</b><br>Work the four steps with an ideal gas; label the corners <i>A</i> → <i>B</i> → <i>C</i> → <i>D</i> → <i>A</i> as in the diagram.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — heat on the two isothermals.</b> On <i>A</i> → <i>B</i> (isothermal at <i>T</i><sub>1</sub>), Δ<i>U</i> = 0, so the heat absorbed equals the work done:<br><i>Q</i><sub>1</sub> = <i>nRT</i><sub>1</sub> ln(<i>V</i><sub><i>B</i></sub>/<i>V</i><sub><i>A</i></sub>).<br>On <i>C</i> → <i>D</i> (isothermal at <i>T</i><sub>2</sub>), the gas is compressed, rejecting heat (magnitude):<br><i>Q</i><sub>2</sub> = <i>nRT</i><sub>2</sub> ln(<i>V</i><sub><i>C</i></sub>/<i>V</i><sub><i>D</i></sub>).',
      },
      {
        t: 'p',
        html: '<b>Step 2 — apply the adiabatic relation to the two insulated steps.</b> Using <i>TV</i><sup><i>γ</i>−1</sup> = const:<br><i>B</i> → <i>C</i>: <i>T</i><sub>1</sub><i>V</i><sub><i>B</i></sub><sup><i>γ</i>−1</sup> = <i>T</i><sub>2</sub><i>V</i><sub><i>C</i></sub><sup><i>γ</i>−1</sup>,   <i>D</i> → <i>A</i>: <i>T</i><sub>2</sub><i>V</i><sub><i>D</i></sub><sup><i>γ</i>−1</sup> = <i>T</i><sub>1</sub><i>V</i><sub><i>A</i></sub><sup><i>γ</i>−1</sup>.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — divide to eliminate temperatures.</b> Dividing the first relation by the reversed second:<br>(<i>T</i><sub>1</sub><i>V</i><sub><i>B</i></sub><sup><i>γ</i>−1</sup>)/(<i>T</i><sub>1</sub><i>V</i><sub><i>A</i></sub><sup><i>γ</i>−1</sup>) = (<i>T</i><sub>2</sub><i>V</i><sub><i>C</i></sub><sup><i>γ</i>−1</sup>)/(<i>T</i><sub>2</sub><i>V</i><sub><i>D</i></sub><sup><i>γ</i>−1</sup>) ⟹ (<i>V</i><sub><i>B</i></sub>/<i>V</i><sub><i>A</i></sub>)<sup><i>γ</i>−1</sup> = (<i>V</i><sub><i>C</i></sub>/<i>V</i><sub><i>D</i></sub>)<sup><i>γ</i>−1</sup>.<br>Rearranging gives the crucial volume identity:<br><i>V</i><sub><i>B</i></sub>/<i>V</i><sub><i>A</i></sub> = <i>V</i><sub><i>C</i></sub>/<i>V</i><sub><i>D</i></sub>.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — take the ratio of the two heats.</b> The two logarithms are therefore equal, and they cancel:<br><i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = (<i>nRT</i><sub>2</sub> ln(<i>V</i><sub><i>C</i></sub>/<i>V</i><sub><i>D</i></sub>))/(<i>nRT</i><sub>1</sub> ln(<i>V</i><sub><i>B</i></sub>/<i>V</i><sub><i>A</i></sub>)) = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>.',
      },
      {
        t: 'p',
        html: '<b>Step 5 — efficiency.</b> Substitute into <i>η</i> = 1 − <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub>:<br><i>η</i><sub>Carnot</sub> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>.<br>The working substance has vanished from the answer — a preview of Carnot’s theorem.',
      },
      {
        t: 'proc',
        title: '3.2 Carnot’s theorem and why η is substance-independent',
        steps: [
          '<b>Claim (a):</b> no engine <i>X</i> between <i>T</i><sub>1</sub>, <i>T</i><sub>2</sub> can beat a reversible engine <i>R</i> between the same reservoirs. <b>Proof sketch:</b> if <i>η</i><sub><i>X</i></sub> > <i>η</i><sub><i>R</i></sub>, run <i>R</i> backwards (as a refrigerator) driven by <i>X</i>’s work. Because <i>X</i> is more efficient, it needs less heat from the hot reservoir than <i>R</i> pumps back into it — the net effect is heat delivered cold→hot with no external work, a Clausius violation. Hence <i>η</i><sub><i>X</i></sub> ≤ <i>η</i><sub><i>R</i></sub>.',
          '<b>Claim (b):</b> two reversible engines <i>R</i><sub>1</sub>, <i>R</i><sub>2</sub> must tie. Apply the argument of (a) once with <i>R</i><sub>1</sub> driving <i>R</i><sub>2</sub>-reversed, then again the other way. Each gives <i>η</i><sub><i>R</i>₁</sub> ≤ <i>η</i><sub><i>R</i>₂</sub> and <i>η</i><sub><i>R</i>₂</sub> ≤ <i>η</i><sub><i>R</i>₁</sub>, so <i>η</i><sub><i>R</i>₁</sub> = <i>η</i><sub><i>R</i>₂</sub>.',
          '<b>Consequence:</b> since all reversible engines tie regardless of working substance, <i>η</i> can depend only on the two reservoir temperatures — which is exactly what <i>η</i> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> says. This substance-independence is also what lets us define an absolute (thermodynamic) temperature scale via <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>.',
        ],
      },
      {
        t: 'proc',
        title: '3.3 Procedure: any Carnot numerical',
        steps: [
          'Convert both temperatures to kelvin.',
          '<i>η</i> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> gives efficiency directly.',
          'Use <i>η</i> = <i>W</i>/<i>Q</i><sub>1</sub> and <i>Q</i><sub>2</sub> = <i>Q</i><sub>1</sub> − <i>W</i> (or <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>) for heats and work.',
          'To raise <i>η</i>: compare “raise <i>T</i><sub>1</sub>” vs. “lower <i>T</i><sub>2</sub>” by the same amount — lowering <i>T</i><sub>2</sub> helps more (it sits in the numerator of <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> and shrinks the rejected fraction faster).',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A Carnot engine operates between a hot reservoir at 500 K and a cold reservoir at 300 K. Find its efficiency.',
        steps: [
          '<b>Solution.</b> <i>η</i> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> = 1 − 300/500 = 1 − 0.60',
          'No detail of the gas or engine size is needed — the two temperatures alone fix the ceiling.',
        ],
        ans: '<i>η</i> = 0.40 = 40%',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A Carnot engine has efficiency 50% with the cold reservoir at 300 K. To raise the efficiency to 60% keeping the cold reservoir fixed, by how much must the hot-reservoir temperature increase?',
        steps: [
          '<b>Speed solution.</b> From <i>η</i> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>, i.e. <i>T</i><sub>1</sub> = <i>T</i><sub>2</sub>/(1 − <i>η</i>). At 50%: <i>T</i><sub>1</sub> = 300/0.50 = 600 K. At 60%: <i>T</i><sub>1</sub>′ = 300/0.40 = 750 K. Increase = 750 − 600',
          '<b>The trap:</b> students try to scale <i>T</i><sub>1</sub> linearly with <i>η</i> (e.g. “+10% efficiency ⇒ +10% temperature”). Always invert the formula cleanly via <i>T</i><sub>1</sub> = <i>T</i><sub>2</sub>/(1 − <i>η</i>).',
        ],
        ans: 'Raise <i>T</i><sub>1</sub> from 600 K to 750 K, an increase of 150 K.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A Carnot engine working between 400 K and 300 K absorbs 1200 J from the hot reservoir per cycle. Find (a) the efficiency, (b) the work done per cycle, and (c) the heat rejected.',
        steps: [
          '<b>Solution.</b> (a) <i>η</i> = 1 − 300/400 = 0.25',
          '(b) <i>W</i> = <i>ηQ</i><sub>1</sub> = 0.25 × 1200',
          '(c) <i>Q</i><sub>2</sub> = <i>Q</i><sub>1</sub> − <i>W</i> = 1200 − 300 (check: <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = 900/1200 = 0.75 = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> ✓).',
        ],
        ans: '<i>η</i> = 25%, <i>W</i> = 300 J, <i>Q</i><sub>2</sub> = 900 J',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A reversible engine operates between <i>T</i><sub>1</sub> = 600 K and <i>T</i><sub>2</sub> = 300 K. An inventor claims a different engine between the same reservoirs with efficiency 60%. (a) Find the Carnot efficiency. (b) Is the claim possible? (c) If the inventor instead claims 45%, is that possible, and if so is the engine necessarily reversible?',
        steps: [
          '<b>Solution.</b> (a) <i>η</i><sub>Carnot</sub> = 1 − 300/600 = 0.50',
          '(b) The claimed 60% > 50% exceeds the Carnot ceiling — by Carnot’s theorem no engine between these reservoirs can beat 50%, so the claim is impossible (it would enable a Clausius violation).',
          '(c) 45% < 50% is below the ceiling, so it is possible — but being below the maximum means it must be irreversible; only a reversible engine reaches the full 50%.',
          'This three-part question is the essence of Carnot’s theorem: the reversible efficiency is simultaneously the maximum and the value all reversible engines share.',
        ],
        ans: '(a) 50%. (b) Impossible — exceeds the Carnot ceiling. (c) Possible, and necessarily irreversible (reversible engines achieve exactly 50%).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A Carnot engine works between 727°C and 27°C. Find its efficiency. (Convert to kelvin first!)',
            a: '<i>T</i><sub>1</sub> = 1000 K, <i>T</i><sub>2</sub> = 300 K; <i>η</i> = 1 − 300/1000 = 70%.',
          },
          {
            q: '[NEET] A Carnot engine has efficiency 40% when the sink is at 300 K. Find the source temperature.',
            a: '<i>T</i><sub>1</sub> = <i>T</i><sub>2</sub>/(1 − <i>η</i>) = 300/0.60 = 500 K.',
          },
          {
            q: '[JEE Main] A Carnot engine between 500 K and 400 K does 250 J of work per cycle. Find the heat absorbed and the heat rejected.',
            a: '<i>η</i> = 1 − 400/500 = 0.20; <i>Q</i><sub>1</sub> = <i>W</i>/<i>η</i> = 250/0.20 = 1250 J; <i>Q</i><sub>2</sub> = <i>Q</i><sub>1</sub> − <i>W</i> = 1000 J.',
          },
          {
            q: '[JEE Main] For a Carnot engine with <i>T</i><sub>1</sub> = 400 K, <i>T</i><sub>2</sub> = 300 K: would lowering <i>T</i><sub>2</sub> by 50 K or raising <i>T</i><sub>1</sub> by 50 K give the higher efficiency? Show both.',
            a: 'Lower <i>T</i><sub>2</sub>: <i>η</i> = 1 − 250/400 = 37.5%. Raise <i>T</i><sub>1</sub>: <i>η</i> = 1 − 300/450 = 33.3%. Lowering the sink wins.',
          },
          {
            q: '[JEE Advanced] A Carnot engine’s cycle has isothermal expansion volume ratio <i>V</i><sub><i>B</i></sub>/<i>V</i><sub><i>A</i></sub> = 2 at <i>T</i><sub>1</sub> = 500 K, with <i>n</i> = 1 mol. Find <i>Q</i><sub>1</sub>, and using <i>η</i> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> with <i>T</i><sub>2</sub> = 300 K, find <i>W</i> and <i>Q</i><sub>2</sub>. (ln 2 = 0.693, <i>R</i> = 8.314.)',
            a: '<i>Q</i><sub>1</sub> = <i>nRT</i><sub>1</sub> ln(<i>V</i><sub><i>B</i></sub>/<i>V</i><sub><i>A</i></sub>) = (1)(8.314)(500)(0.693) ≈ 2881 J; <i>η</i> = 1 − 300/500 = 0.40; <i>W</i> = <i>ηQ</i><sub>1</sub> ≈ 1152 J; <i>Q</i><sub>2</sub> = <i>Q</i><sub>1</sub> − <i>W</i> ≈ 1729 J (check <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> ≈ 0.60 = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> ✓).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The efficiency of a Carnot engine depends on:',
        opts: [
          {
            label: 'the working substance',
            nudge: '<b>(A)</b>,<b>(C)</b>,<b>(D)</b> all leave <i>η</i> unchanged — size and amount drop out of the derivation (the volume logarithms cancel, leaving only <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>), and Carnot’s theorem, not the ideal-gas derivation, makes it independent of the working substance.',
          },
          { label: 'the two reservoir temperatures only', nudge: null },
          {
            label: 'the size of the engine',
            nudge: '<b>(A)</b>,<b>(C)</b>,<b>(D)</b> all leave <i>η</i> unchanged — size and amount drop out of the derivation (the volume logarithms cancel, leaving only <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>), and Carnot’s theorem, not the ideal-gas derivation, makes it independent of the working substance.',
          },
          {
            label: 'the amount of gas',
            nudge: '<b>(A)</b>,<b>(C)</b>,<b>(D)</b> all leave <i>η</i> unchanged — size and amount drop out of the derivation (the volume logarithms cancel, leaving only <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>), and Carnot’s theorem, not the ideal-gas derivation, makes it independent of the working substance.',
          },
        ],
        correct: 1,
        solution: '<i>η</i> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>; by Carnot’s theorem the working substance, size, and amount all cancel out.',
      },
      {
        t: 'mcq',
        q: 'A Carnot engine is most efficient when:',
        opts: [
          { label: '<i>T</i><sub>1</sub> and <i>T</i><sub>2</sub> are close', nudge: '<b>(A)</b>,<b>(C)</b> give <i>η</i> → 0 (no gap, no work).' },
          { label: '<i>T</i><sub>2</sub> is as low and <i>T</i><sub>1</sub> as high as possible', nudge: null },
          { label: '<i>T</i><sub>2</sub> = <i>T</i><sub>1</sub>', nudge: '<b>(A)</b>,<b>(C)</b> give <i>η</i> → 0 (no gap, no work).' },
          { label: '<i>T</i><sub>2</sub> > <i>T</i><sub>1</sub>', nudge: '<b>(D)</b> is impossible for an engine (would reverse the heat flow).' },
        ],
        correct: 1,
        solution: 'A large temperature gap (low sink, high source) maximises 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>.',
      },
      {
        t: 'mcq',
        q: 'In a Carnot cycle, heat is exchanged with the reservoirs during:',
        opts: [
          { label: 'the two adiabatic steps', nudge: '<b>(A)</b> reverses it.' },
          { label: 'the two isothermal steps', nudge: null },
          { label: 'all four steps', nudge: '<b>(C)</b> ignores the adiabatic condition.' },
          { label: 'none of the steps', nudge: '<b>(D)</b> would mean no engine at all.' },
        ],
        correct: 1,
        solution: 'Adiabatic steps have <i>Q</i> = 0 by definition; heat enters/leaves only on the isothermals.',
      },
      {
        t: 'mcq',
        q: 'No engine between two reservoirs can exceed the Carnot efficiency because doing so would violate:',
        opts: [
          { label: 'the first law', nudge: '<b>(A)</b> energy still balances.' },
          { label: 'the zeroth law', nudge: '<b>(B)</b>,<b>(D)</b> unrelated to engine efficiency limits.' },
          { label: 'the second law', nudge: null },
          { label: 'Mayer’s relation', nudge: '<b>(B)</b>,<b>(D)</b> unrelated to engine efficiency limits.' },
        ],
        correct: 2,
        solution: 'A super-Carnot engine could be coupled to a reversed Carnot engine to move heat cold→hot with no work — a Clausius (second-law) violation.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting to convert to kelvin.</b> <i>η</i> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> is valid only in kelvin. Plugging in Celsius gives nonsense (and sometimes <i>η</i> > 1).',
          '<b>Thinking heat is exchanged on all four steps.</b> Only the two isothermals exchange heat; the adiabatics are insulated (<i>Q</i> = 0).',
          '<b>Believing a real engine can reach Carnot efficiency.</b> Carnot is the reversible ceiling; every real (irreversible) engine falls strictly below it.',
          '<b>Confusing “raise <i>T</i><sub>1</sub>” with “lower <i>T</i><sub>2</sub>.”</b> For equal temperature changes, lowering the sink <i>T</i><sub>2</sub> raises efficiency more than raising the source <i>T</i><sub>1</sub>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & accuracy):</b> Memorise the engine in one line: “two isotherms, two adiabats; heat only on the isotherms; <i>η</i> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> in kelvin.” For any numerical, get <i>η</i> from the temperatures first, then use <i>W</i> = <i>ηQ</i><sub>1</sub> and <i>Q</i><sub>2</sub> = <i>Q</i><sub>1</sub> − <i>W</i>. The volume-ratio identity <i>V</i><sub><i>B</i></sub>/<i>V</i><sub><i>A</i></sub> = <i>V</i><sub><i>C</i></sub>/<i>V</i><sub><i>D</i></sub> is the single algebraic fact that collapses the derivation — it is what makes the two logarithms cancel. And whenever an inventor’s claimed <i>η</i> exceeds 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>, declare it impossible on the spot (Carnot’s theorem); no calculation needed.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Cycle',
            note: 'reversible — isothermal expansion (absorb <i>Q</i><sub>1</sub> at <i>T</i><sub>1</sub>) → adiabatic expansion (<i>T</i><sub>1</sub> → <i>T</i><sub>2</sub>) → isothermal compression (reject <i>Q</i><sub>2</sub> at <i>T</i><sub>2</sub>) → adiabatic compression (<i>T</i><sub>2</sub> → <i>T</i><sub>1</sub>).',
          },
          {
            f: 'Key ratio',
            note: '<i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> (kelvin), from <i>V</i><sub><i>B</i></sub>/<i>V</i><sub><i>A</i></sub> = <i>V</i><sub><i>C</i></sub>/<i>V</i><sub><i>D</i></sub>.',
          },
          {
            f: 'Efficiency',
            note: '<i>η</i><sub>Carnot</sub> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> = (<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/<i>T</i><sub>1</sub> — the maximum for those reservoirs.',
          },
          {
            f: 'Reversed (fridge/pump)',
            note: 'COP<sub>ref</sub> = <i>T</i><sub>2</sub>/(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>), COP<sub>hp</sub> = <i>T</i><sub>1</sub>/(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>).',
          },
          {
            f: 'Carnot’s theorem',
            note: '(a) no engine beats a reversible one between the same reservoirs; (b) all reversible engines tie, independent of working substance.',
          },
          { f: 'Heat exchanged only on the isothermals; adiabatics have <i>Q</i> = 0.', note: '' },
          { f: 'Lower the sink <i>T</i><sub>2</sub> to gain efficiency faster than raising the source <i>T</i><sub>1</sub>.', note: '' },
        ],
        aids: [
          '“Iso–adia–iso–adia, heat only on the isos.”',
          '“<i>η</i> = 1 − <i>T</i><sub>cold</sub>/<i>T</i><sub>hot</sub>, always in kelvin.”',
          '“Carnot is the ceiling: reach it only in the reversible dream, never in the real lab.”',
        ],
      },
    ],
  },
];
