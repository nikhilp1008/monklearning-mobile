import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topic 06: pp. 196–205 of the Class 12 Physics Master Reference,
 * word for word: Combination of Cells (Series, Parallel & Mixed), split at its
 * Sections 1 to 8. Figure 3.14 (referred to p. 197, drawn p. 198) and Figure
 * 3.15 (referred to p. 200, drawn p. 201) are redrawn in lib/diagrams.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 06 · pp. 196–205 ─────────────────────────
  {
    n: '06',
    title: 'Combination of Cells (Series, Parallel & Mixed)',
    kalam: 'Series multiplies the push; parallel multiplies the stamina.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A reliable source of questions. CBSE Boards ask for the equivalent EMF and internal resistance of series and parallel combinations (2–3 marks). JEE Main sets numericals on grouping and on the two-different-cells parallel formula; JEE Advanced loves the mixed-grouping optimisation (condition for maximum current). NEET tests quick recognition of when to group cells in series vs parallel.',
      },
      {
        t: 'p',
        html: 'One cell can only push so hard and supply so much. To get more, we combine cells — and how we combine them decides whether we gain <b>voltage</b> or <b>current capacity</b>.',
      },
      {
        t: 'p',
        html: '<b>Cells in series</b> are stacked head-to-tail, like several people lifting a load to successive shelves: each adds its lift, so the EMFs <b>add up</b>. But each cell also brings its own internal resistance into the line, so those add too. Series grouping is what you want when the external resistance is <b>large</b> — you need a big push (high voltage) and the modest extra internal resistance hardly matters. (This is why a TV remote stacks two AA cells in series for 3 V.)',
      },
      {
        t: 'p',
        html: '<b>Cells in parallel</b> are placed side by side, all positive terminals joined, all negatives joined — like several people sharing the same lifting job. The voltage stays the same (one cell’s worth), but now the internal resistances are in parallel, so the combined internal resistance <b>drops</b>. Parallel grouping is what you want when the external resistance is <b>small</b> — you need to supply a large current without the internal resistance choking it.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Series is like joining batteries end-to-end in a torch to get a brighter beam (more voltage). Parallel is like wiring two identical car batteries together to crank a heavy engine (more current, same voltage). Series multiplies the push; parallel multiplies the stamina.',
      },
      {
        t: 'p',
        html: 'For the best of both, we use <b>mixed grouping</b>: rows of cells in series, with several such rows in parallel. By choosing how many cells go in each row and how many rows, you can tune the combination to deliver maximum current into a given load — which turns out to happen when the combination’s internal resistance exactly matches the external resistance.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The clean “EMFs add” rule for series assumes all cells point the same way; if one is reversed, its EMF subtracts. The simple parallel result <i>r</i><sub>eq</sub> = <i>r</i>/<i>n</i> assumes the cells are <b>identical</b>; for unequal cells you must use the general weighted formula. Throughout we treat each cell as an ideal EMF in series with a constant internal resistance, in the steady state.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Series combination',
        main: '(<i>n</i> cells, EMFs <i>E</i><sub><i>i</i></sub>, internal resistances <i>r</i><sub><i>i</i></sub>, all aiding):<br><i>E</i><sub>eq</sub> = Σ<i>E</i><sub><i>i</i></sub><br><i>r</i><sub>eq</sub> = Σ<i>r</i><sub><i>i</i></sub><br><i>I</i> = <i>E</i><sub>eq</sub>/(<i>R</i> + <i>r</i><sub>eq</sub>)<br>For <i>n</i> identical cells: <i>E</i><sub>eq</sub> = <i>nE</i>, <i>r</i><sub>eq</sub> = <i>nr</i>, so <i>I</i> = <i>nE</i>/(<i>R</i> + <i>nr</i>)',
        legend: [],
        note: '(If <i>k</i> of the <i>n</i> identical cells are reversed: net EMF = (<i>n</i> − 2<i>k</i>)<i>E</i>.)',
      },
      {
        t: 'formula',
        kicker: 'Parallel combination',
        main: '(<i>n</i> <b>identical</b> cells):<br><i>E</i><sub>eq</sub> = <i>E</i><br><i>r</i><sub>eq</sub> = <i>r</i>/<i>n</i><br><i>I</i> = <i>E</i>/(<i>R</i> + <i>r</i>/<i>n</i>) = <i>nE</i>/(<i>nR</i> + <i>r</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Two different cells in parallel',
        main: '(<i>E</i><sub>1</sub>, <i>r</i><sub>1</sub> and <i>E</i><sub>2</sub>, <i>r</i><sub>2</sub>):<br><i>E</i><sub>eq</sub> = (<i>E</i><sub>1</sub><i>r</i><sub>2</sub> + <i>E</i><sub>2</sub><i>r</i><sub>1</sub>)/(<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub>) = (<i>E</i><sub>1</sub>/<i>r</i><sub>1</sub> + <i>E</i><sub>2</sub>/<i>r</i><sub>2</sub>)/(1/<i>r</i><sub>1</sub> + 1/<i>r</i><sub>2</sub>)<br><i>r</i><sub>eq</sub> = <i>r</i><sub>1</sub><i>r</i><sub>2</sub>/(<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Mixed grouping',
        main: '(<i>m</i> rows in parallel, each row <i>n</i> identical cells in series; total <i>mn</i> cells):<br><i>E</i><sub>eq</sub> = <i>nE</i><br><i>r</i><sub>eq</sub> = <i>nr</i>/<i>m</i><br><i>I</i> = <i>nE</i>/(<i>R</i> + <i>nr</i>/<i>m</i>) = <i>mnE</i>/(<i>mR</i> + <i>nr</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Maximum current',
        main: 'when external resistance equals internal:<br><i>R</i> = <i>nr</i>/<i>m</i> (i.e. <i>mR</i> = <i>nr</i>)<br>giving: <i>I</i><sub>max</sub> = <i>nE</i>/(2<i>R</i>) = <i>mnE</i>/(2<i>nr</i>)',
        legend: [
          '<i>E</i> = EMF (V)',
          '<i>r</i> = internal resistance (Ω)',
          '<i>R</i> = external load (Ω)',
          '<i>I</i> = current (A)',
          '<i>n</i>, <i>m</i> = counts',
        ],
        note: 'For a fixed number of cells <i>N</i> = <i>mn</i> and a given <i>R</i>: choose the grouping.',
      },

      { t: 'part', title: 'Derivations' },
      { t: 'p', html: '<b>3.1 Cells in Series</b>' },
      {
        t: 'p',
        html: 'Consider <i>n</i> identical cells, each EMF <i>E</i> and internal resistance <i>r</i>, connected head-to-tail (all aiding) across an external resistance <i>R</i>.',
      },
      { t: 'fig', id: 'p12-03-fig-3.14' },
      {
        t: 'p',
        html: 'Going around the loop (loop rule), every cell contributes +<i>E</i> to the driving EMF and <i>r</i> to the resistance in the path, plus the external <i>R</i>:<br><i>nE</i> = <i>I</i>(<i>R</i> + <i>nr</i>) ⇒ <i>I</i> = <i>nE</i>/(<i>R</i> + <i>nr</i>).<br>So the series group behaves like one cell of <i>E</i><sub>eq</sub> = <i>nE</i> and <i>r</i><sub>eq</sub> = <i>nr</i>. <b>Why series boosts voltage:</b> the pushes act in the same direction and stack additively. <b>When it helps:</b> if <i>R</i> ≫ <i>nr</i>, then <i>I</i> ≈ <i>nE</i>/<i>R</i> — <i>n</i> times the single-cell current. Series wins for <b>large</b> external resistance.',
      },
      { t: 'p', html: '<b>3.2 Cells in Parallel (identical)</b>' },
      {
        t: 'p',
        html: 'Consider <i>n</i> identical cells, positives joined and negatives joined, across <i>R</i>. Each cell has EMF <i>E</i>, so the combined EMF is just <i>E</i> (they don’t add — same potential difference). The <i>n</i> internal resistances are in parallel, giving <i>r</i><sub>eq</sub> = <i>r</i>/<i>n</i>. Thus<br><i>I</i> = <i>E</i>/(<i>R</i> + <i>r</i>/<i>n</i>) = <i>nE</i>/(<i>nR</i> + <i>r</i>).<br><b>Why parallel boosts current capacity:</b> the EMF is unchanged but the internal resistance is slashed by <i>n</i>. <b>When it helps:</b> if <i>R</i> ≪ <i>r</i>/<i>n</i>, then <i>I</i> ≈ <i>nE</i>/<i>r</i> — <i>n</i> times the single-cell short-circuit current. Parallel wins for <b>small</b> external resistance.',
      },
      { t: 'p', html: '<b>3.3 Mixed Grouping and the Condition for Maximum Current</b>' },
      {
        t: 'p',
        html: 'Consider <i>m</i> rows in parallel, each row containing <i>n</i> identical cells in series. Each row has EMF <i>nE</i> and resistance <i>nr</i>; <i>m</i> such rows in parallel give <i>E</i><sub>eq</sub> = <i>nE</i> and <i>r</i><sub>eq</sub> = <i>nr</i>/<i>m</i>. The current through external <i>R</i> is<br><i>I</i> = <i>nE</i>/(<i>R</i> + <i>nr</i>/<i>m</i>) = <i>mnE</i>/(<i>mR</i> + <i>nr</i>).<br>With the total number of cells <i>N</i> = <i>mn</i> fixed, this current is maximised when the denominator <i>mR</i> + <i>nr</i> is minimised. By the AM–GM inequality, for a fixed product (<i>mR</i>)(<i>nr</i>) = <i>mnRr</i> = <i>NRr</i> (constant), the sum <i>mR</i> + <i>nr</i> is smallest when the two terms are <b>equal</b>:<br><i>mR</i> = <i>nr</i> ⇒ <i>R</i> = <i>nr</i>/<i>m</i> = <i>r</i><sub>eq</sub>.',
      },
      {
        t: 'p',
        html: '<b>The result, in words:</b> arrange the cells so that the combination’s internal resistance equals the external resistance. At this match,<br><i>I</i><sub>max</sub> = <i>mnE</i>/(2<i>nr</i>) = <i>nE</i>/(2<i>R</i>).<br><b>Why this matters:</b> it tells an engineer how to physically arrange a battery pack for a given load to squeeze out the most current.',
      },
      { t: 'fig', id: 'p12-03-fig-3.15' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Three identical cells, each of EMF 2 V and internal resistance 0.5 Ω, are connected in <b>series</b> across an external resistance of 4.5 Ω. Find the current in the circuit.',
        steps: [
          '<b>Equivalent source:</b> <i>E</i><sub>eq</sub> = 3 × 2 = 6 V, <i>r</i><sub>eq</sub> = 3 × 0.5 = 1.5 Ω.',
          '<b>Current:</b><br><i>I</i> = <i>E</i><sub>eq</sub>/(<i>R</i> + <i>r</i><sub>eq</sub>) = 6/(4.5 + 1.5) = 6/6',
        ],
        ans: '<i>I</i> = 1 A',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Four identical cells, each 1.5 V with internal resistance 1 Ω, are connected in <b>parallel</b> across a 2 Ω resistor. Find the current through the resistor.',
        steps: [
          '<b>The trap:</b> Students add the EMFs (“4 × 1.5 = 6 V”) — but EMFs do <b>not</b> add in parallel.',
          '<b>Fast move:</b> Parallel identical cells: <i>E</i><sub>eq</sub> = 1.5 V (unchanged), <i>r</i><sub>eq</sub> = <i>r</i>/<i>n</i> = 1/4 = 0.25 Ω.<br><i>I</i> = <i>E</i><sub>eq</sub>/(<i>R</i> + <i>r</i><sub>eq</sub>) = 1.5/(2 + 0.25) = 1.5/2.25',
          '<b>Hook:</b> Parallel keeps the voltage, shrinks the internal resistance. Adding EMFs is the series move.',
        ],
        ans: '<i>I</i> = 0.67 A',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: two different cells in parallel',
        q: 'Two cells are connected in parallel: cell 1 has <i>E</i><sub>1</sub> = 4 V, <i>r</i><sub>1</sub> = 1 Ω; cell 2 has <i>E</i><sub>2</sub> = 2 V, <i>r</i><sub>2</sub> = 1 Ω. This combination drives an external resistance <i>R</i> = 2.5 Ω. Find the current through <i>R</i>.',
        steps: [
          '<b>Equivalent EMF</b> (weighted by conductances):<br><i>E</i><sub>eq</sub> = (<i>E</i><sub>1</sub><i>r</i><sub>2</sub> + <i>E</i><sub>2</sub><i>r</i><sub>1</sub>)/(<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub>) = ((4)(1) + (2)(1))/(1 + 1) = 6/2 = 3 V.',
          '<b>Equivalent internal resistance:</b><br><i>r</i><sub>eq</sub> = <i>r</i><sub>1</sub><i>r</i><sub>2</sub>/(<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub>) = (1 × 1)/2 = 0.5 Ω.',
          '<b>Current through the load:</b><br><i>I</i> = <i>E</i><sub>eq</sub>/(<i>R</i> + <i>r</i><sub>eq</sub>) = 3/(2.5 + 0.5) = 3/3',
          '<b>Note:</b> the stronger cell (4 V) effectively drives some current backward through the weaker cell — the equivalent EMF of 3 V lies between the two, closer to neither extreme because the internal resistances are equal.',
        ],
        ans: '<i>I</i> = 1 A',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: mixed-grouping optimisation',
        q: 'You have 24 identical cells, each of EMF 1.5 V and internal resistance 0.5 Ω, to drive an external resistance <i>R</i> = 3 Ω. Arrange them as <i>m</i> rows of <i>n</i> series cells (with <i>mn</i> = 24) to deliver the <b>maximum</b> current, and find that current.',
        steps: [
          '<b>Condition for maximum current:</b> <i>R</i> = <i>nr</i>/<i>m</i>, i.e. <i>mR</i> = <i>nr</i>:<br><i>m</i>(3) = <i>n</i>(0.5) ⇒ <i>n</i>/<i>m</i> = 3/0.5 = 6 ⇒ <i>n</i> = 6<i>m</i>.',
          'Combine with <i>mn</i> = 24:<br><i>m</i>(6<i>m</i>) = 24 ⇒ 6<i>m</i><sup>2</sup> = 24 ⇒ <i>m</i><sup>2</sup> = 4 ⇒ <i>m</i> = 2,   <i>n</i> = 12.',
          'So arrange <b>2 rows of 12 cells in series</b>. The equivalent source is <i>E</i><sub>eq</sub> = <i>nE</i> = 12 × 1.5 = 18 V and <i>r</i><sub>eq</sub> = <i>nr</i>/<i>m</i> = (12 × 0.5)/2 = 3 Ω (equal to <i>R</i>, as required).',
          '<b>Maximum current:</b><br><i>I</i><sub>max</sub> = <i>E</i><sub>eq</sub>/(<i>R</i> + <i>r</i><sub>eq</sub>) = 18/(3 + 3) = 18/6',
          '<b>Sanity:</b> at the match, <i>r</i><sub>eq</sub> = <i>R</i> = 3 Ω — exactly the maximum-power-transfer condition from Topic 04, now realised as the maximum-current condition by choosing the grouping.',
        ],
        ans: '<i>I</i><sub>max</sub> = 3 A',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Two cells, each of EMF 1.5 V and internal resistance 0.2 Ω, are connected in series across a 2.6 Ω resistor. Find the current.',
            a: '<i>I</i> = 1 A',
          },
          {
            q: '[NEET] Five identical cells, each 2 V with internal resistance 0.5 Ω, are connected in parallel across a 1.9 Ω resistor. Find the current through the resistor.',
            a: '<i>E</i><sub>eq</sub> = 2 V, <i>r</i><sub>eq</sub> = 0.1 Ω, <i>I</i> = 1 A',
          },
          {
            q: '[JEE Main] Two cells in parallel have <i>E</i><sub>1</sub> = 6 V, <i>r</i><sub>1</sub> = 2 Ω and <i>E</i><sub>2</sub> = 4 V, <i>r</i><sub>2</sub> = 2 Ω. Find the equivalent EMF and internal resistance.',
            a: '<i>E</i><sub>eq</sub> = 5 V, <i>r</i><sub>eq</sub> = 1 Ω',
          },
          {
            q: '[JEE Main] Three identical cells of EMF 2 V, <i>r</i> = 1 Ω are connected in series, but <b>one cell is reversed</b>. If the external resistance is 1 Ω, find the current.',
            a: 'Net EMF = (3 − 2) × 2 = 2 V, <i>r</i><sub>eq</sub> = 3 Ω, <i>I</i> = 2/(1 + 3) = 0.5 A',
          },
          {
            q: '[JEE Advanced] 32 identical cells, each 1.2 V with <i>r</i> = 0.4 Ω, must drive a 0.8 Ω load with maximum current. Find the best arrangement (<i>m</i> rows of <i>n</i> series cells, <i>mn</i> = 32) and the resulting current.',
            a: '<i>mR</i> = <i>nr</i> ⇒ <i>n</i>/<i>m</i> = 2, with <i>mn</i> = 32 ⇒ <i>m</i> = 4, <i>n</i> = 8; <i>E</i><sub>eq</sub> = 9.6 V, <i>r</i><sub>eq</sub> = 0.8 Ω, <i>I</i><sub>max</sub> = 6 A',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: '<i>n</i> identical cells (EMF <i>E</i>, internal resistance <i>r</i>) are connected in parallel. The equivalent EMF and internal resistance are:',
        opts: [
          { label: '<i>nE</i> and <i>nr</i>', nudge: '<b>(A)</b> is the series result.' },
          { label: '<i>E</i> and <i>r</i>/<i>n</i>', nudge: null },
          {
            label: '<i>nE</i> and <i>r</i>/<i>n</i>',
            nudge: '<b>(C)</b> and <b>(D)</b> mix one series feature with one parallel feature — the classic confusion.',
          },
          {
            label: '<i>E</i> and <i>nr</i>',
            nudge: '<b>(C)</b> and <b>(D)</b> mix one series feature with one parallel feature — the classic confusion.',
          },
        ],
        correct: 1,
        solution: 'In parallel the EMF stays <i>E</i> (cells don’t stack) while the internal resistances combine in parallel to <i>r</i>/<i>n</i>.',
      },
      {
        t: 'mcq',
        q: 'To deliver a large current to a <b>small</b> external resistance, identical cells should be connected:',
        opts: [
          {
            label: 'in series',
            nudge: '<b>(A)</b> series raises voltage but also raises internal resistance — best for large <i>R</i>.',
          },
          { label: 'in parallel', nudge: null },
          { label: 'one cell only', nudge: '<b>(C)</b> wastes the other cells.' },
          { label: 'it makes no difference', nudge: '<b>(D)</b> is false — the grouping matters a lot.' },
        ],
        correct: 1,
        solution: 'Parallel slashes the internal resistance (<i>r</i>/<i>n</i>), which is what limits current when <i>R</i> is small.',
      },
      {
        t: 'mcq',
        q: 'Three identical cells of EMF 2 V are in series, but one is connected with reversed polarity. The net EMF of the combination is:',
        opts: [
          { label: '6 V', nudge: '<b>(A)</b> assumes all aiding.' },
          {
            label: '4 V',
            nudge: '<b>(B)</b> subtracts only one <i>E</i> instead of two (a reversed cell changes the sum by 2<i>E</i>).',
          },
          { label: '2 V', nudge: null },
          { label: '0 V', nudge: '<b>(D)</b> would need balanced opposition.' },
        ],
        correct: 2,
        solution: 'Two cells aid (+2<i>E</i>) and one opposes (−<i>E</i>); reversing a cell turns its +<i>E</i> into −<i>E</i>: net = (3 − 2 · 1)<i>E</i> = 1 × 2 = 2 V.',
      },
      {
        t: 'mcq',
        q: 'A fixed number of identical cells in mixed grouping drives a given external resistance <i>R</i>. Over all possible groupings, the current through <i>R</i> is maximum when:',
        opts: [
          { label: '<i>R</i> is as large as possible', nudge: '<b>(A)</b> large <i>R</i> throttles the current.' },
          { label: '<i>R</i> equals the equivalent internal resistance', nudge: null },
          {
            label: 'all cells are in series',
            nudge: '<b>(C)</b> and <b>(D)</b> are special arrangements that are optimal only for particular <i>R</i> values, not in general; the matching condition is what’s universal.',
          },
          {
            label: 'all cells are in parallel',
            nudge: '<b>(C)</b> and <b>(D)</b> are special arrangements that are optimal only for particular <i>R</i> values, not in general; the matching condition is what’s universal.',
          },
        ],
        correct: 1,
        solution: 'Current peaks when <i>R</i> = <i>r</i><sub>eq</sub> = <i>nr</i>/<i>m</i> — the matched condition.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Adding EMFs in parallel.</b> Identical cells in parallel give EMF = <i>E</i>, not <i>nE</i>. Only series stacks EMFs.',
          '<b>Forgetting a reversed cell counts double.</b> Reversing one cell changes the net series EMF by 2<i>E</i> (it goes from +<i>E</i> to −<i>E</i>), not by <i>E</i>.',
          '<b>Using <i>r</i>/<i>n</i> for non-identical parallel cells.</b> The <i>r</i><sub>eq</sub> = <i>r</i>/<i>n</i> shortcut needs identical cells; for unequal cells use <i>r</i><sub>eq</sub> = <i>r</i><sub>1</sub><i>r</i><sub>2</sub>/(<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub>) and the weighted EMF.',
          '<b>Choosing the wrong grouping for the load.</b> Series for large <i>R</i>, parallel for small <i>R</i>, mixed (matched) for maximum current.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> Reduce any grouping to a single equivalent cell (<i>E</i><sub>eq</sub>, <i>r</i><sub>eq</sub>) first, then use <i>I</i> = <i>E</i><sub>eq</sub>/(<i>R</i> + <i>r</i><sub>eq</sub>) — one clean formula handles every case. For mixed-grouping optimisation, jump straight to <i>mR</i> = <i>nr</i> together with <i>mn</i> = <i>N</i> and solve the two simultaneously.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Series (<i>n</i> identical)',
            note: '<i>E</i><sub>eq</sub> = <i>nE</i>, <i>r</i><sub>eq</sub> = <i>nr</i>; best for <b>large</b> <i>R</i>. (Reversed cell: net EMF changes by 2<i>E</i>.)',
          },
          {
            f: 'Parallel (<i>n</i> identical)',
            note: '<i>E</i><sub>eq</sub> = <i>E</i>, <i>r</i><sub>eq</sub> = <i>r</i>/<i>n</i>; best for <b>small</b> <i>R</i>.',
          },
          {
            f: 'Two unequal in parallel',
            note: '<i>E</i><sub>eq</sub> = (<i>E</i><sub>1</sub><i>r</i><sub>2</sub> + <i>E</i><sub>2</sub><i>r</i><sub>1</sub>)/(<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub>), <i>r</i><sub>eq</sub> = <i>r</i><sub>1</sub><i>r</i><sub>2</sub>/(<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub>).',
          },
          {
            f: 'Mixed (<i>m</i> rows of <i>n</i>)',
            note: '<i>E</i><sub>eq</sub> = <i>nE</i>, <i>r</i><sub>eq</sub> = <i>nr</i>/<i>m</i>, <i>I</i> = <i>mnE</i>/(<i>mR</i> + <i>nr</i>).',
          },
          {
            f: 'Max current (mixed)',
            note: '<i>R</i> = <i>nr</i>/<i>m</i> (match internal to external), <i>I</i><sub>max</sub> = <i>nE</i>/(2<i>R</i>).',
          },
        ],
        aids: [
          '“Series stacks voltage; parallel stacks stamina.”',
          '“Parallel keeps EMF, cuts resistance.”',
          'Max current ⇒ match <i>R</i> to <i>r</i><sub>eq</sub>.',
        ],
      },
    ],
  },
];
