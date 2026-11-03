import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Additional topic G: part C of the Master Appendix, "Integrated
 * Problem Set (mixes subtopics, full solutions)", pp. 232–233 of the Class 12
 * Physics Master Reference, word for word. The appendix's A (Master Formula
 * Sheet), B (Units & Dimensions table) and D (Rapid-Revision Facts) are not
 * copied (founder decision). Each problem carries a full worked solution, so
 * each is a worked example; the set prints no drawings.
 */
export const TOPICS: Topic[] = [
  // ──────────────────── Additional topic G · pp. 232–233 ────────────────────
  {
    n: 'G',
    title: 'Integrated Problem Set',
    extra: true,
    kalam: 'These are the problems that test whether you know the whole chapter, not just one piece.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'These are the problems that test whether you know the whole chapter, not just one piece.',
      },

      { t: 'part', title: 'Integrated problems' },
      {
        t: 'ex',
        tag: 'JEE Main — Cells in parallel + power',
        q: 'Two cells, <i>E</i><sub>1</sub> = 6 V (<i>r</i><sub>1</sub> = 1 Ω) and <i>E</i><sub>2</sub> = 4 V (<i>r</i><sub>2</sub> = 1 Ω), are connected in parallel (same polarity) across <i>R</i> = 4 Ω. Find the current through <i>R</i> and the power delivered to it.',
        steps: [
          '<b>Solution.</b> Equivalent cell (parallel, different EMF):<br><i>E</i><sub>eq</sub> = (<i>E</i><sub>1</sub>/<i>r</i><sub>1</sub> + <i>E</i><sub>2</sub>/<i>r</i><sub>2</sub>)/(1/<i>r</i><sub>1</sub> + 1/<i>r</i><sub>2</sub>) = (6 + 4)/(1 + 1) = 5 V,   <i>r</i><sub>eq</sub> = <i>r</i><sub>1</sub><i>r</i><sub>2</sub>/(<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub>) = 0.5 Ω.',
          '<i>I</i> = <i>E</i><sub>eq</sub>/(<i>R</i> + <i>r</i><sub>eq</sub>) = 5/4.5 = 10/9,   <i>P</i><sub><i>R</i></sub> = <i>I</i><sup>2</sup><i>R</i> = (10/9)<sup>2</sup> × 4',
        ],
        ans: '<i>I</i> ≈ 1.11 A, <i>P</i><sub><i>R</i></sub> ≈ 4.94 W',
      },
      {
        t: 'ex',
        tag: 'JEE Main — Network reduction + internal resistance',
        q: 'A battery (<i>E</i> = 12 V, <i>r</i> = 0.5 Ω) feeds a 4 Ω resistor in series with a parallel pair 6 Ω ‖ 3 Ω. Find (a) battery current, (b) terminal voltage, (c) power lost inside the battery, (d) current in the 6 Ω.',
        steps: [
          '<b>Solution.</b> Parallel pair: 6‖3 = (6 × 3)/9 = 2 Ω. External <i>R</i> = 4 + 2 = 6 Ω; total = 6.5 Ω.',
          '<i>I</i> = 12/6.5,   <i>V</i> = <i>E</i> − <i>Ir</i> = 12 − (1.846)(0.5),<br><i>P</i><sub>internal</sub> = <i>I</i><sup>2</sup><i>r</i> = (1.846)<sup>2</sup>(0.5).',
          'Voltage across the parallel section = <i>I</i> × 2 = 3.69 V, so <i>I</i><sub>6Ω</sub> = 3.69/6 (and <i>I</i><sub>3Ω</sub> ≈ 1.23 A; they sum to 1.85 A ✓).',
        ],
        ans: '(a) <i>I</i> ≈ 1.85 A; (b) <i>V</i> ≈ 11.08 V; (c) <i>P</i><sub>internal</sub> ≈ 1.70 W; (d) <i>I</i><sub>6Ω</sub> ≈ 0.62 A',
      },
      {
        t: 'ex',
        tag: 'NEET / JEE — Stretching + combination',
        q: 'A 4 Ω wire is stretched until its length doubles, then cut into two equal halves joined in parallel. Find the final resistance.',
        steps: [
          '<b>Solution.</b> Constant volume ⇒ <i>R</i> ∝ <i>L</i><sup>2</sup>. Doubling length: <i>R</i>′ = 4 × 2<sup>2</sup> = 16 Ω. Each half: 16/2 = 8 Ω. Two 8 Ω in parallel: 8/2',
        ],
        ans: '4 Ω',
      },
      {
        t: 'ex',
        tag: 'CBSE / JEE Main — Potentiometer + internal resistance',
        q: 'A cell balances at 240 cm on a potentiometer. With <i>R</i> = 2 Ω across the cell, balance shifts to 160 cm. Find the cell’s internal resistance.',
        steps: [
          '<b>Solution.</b><br><i>r</i> = <i>R</i>(<i>l</i><sub>1</sub> − <i>l</i><sub>2</sub>)/<i>l</i><sub>2</sub> = 2 × (240 − 160)/160 = 2 × 80/160',
        ],
        ans: '<i>r</i> = 1 Ω',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced flavour — Optimal cell grouping',
        q: 'Arrange 24 identical cells (<i>E</i> = 1.5 V, <i>r</i> = 0.5 Ω) in <i>m</i> rows of <i>n</i> to deliver maximum current to <i>R</i> = 3 Ω. Find the arrangement and the maximum current.',
        steps: [
          '<b>Solution.</b> Mixed grouping <i>I</i> = <i>nE</i>/(<i>R</i> + <i>nr</i>/<i>m</i>) is maximised when <i>mR</i> = <i>nr</i>, i.e. <i>n</i>/<i>m</i> = <i>R</i>/<i>r</i> = 6. With <i>mn</i> = 24: <i>m</i>(6<i>m</i>) = 24 ⇒ <i>m</i> = 2, <i>n</i> = 12.',
          '<i>I</i><sub>max</sub> = <i>nE</i>/(<i>R</i> + <i>nr</i>/<i>m</i>) = (12 × 1.5)/(3 + (12)(0.5)/2) = 18/6',
        ],
        ans: '<i>I</i><sub>max</sub> = 3 A',
      },
    ],
  },
];
