import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2's five Additional Topics, word for word from the Master Reference
 * book, pages 119 to 131: the addenda's shared opening (p. 119, set at the
 * head of Addendum A), A Averaging Speeds (pp. 119 to 121), B Two Averages of
 * Velocity (pp. 122 to 124), C Vertical Flight (pp. 124 to 126), D Pursuit,
 * Crossing Under Acceleration, and the Catch Condition (pp. 126 to 128) and E
 * Velocity-Dependent Drag (pp. 129 to 131). No drawings in these pages.
 */
export const TOPICS: Topic[] = [
  {
    n: 'A',
    title: 'Averaging Speeds: n Legs, Halts, and Which Mean Applies',
    extra: true,
    kalam: 'There is exactly one law: average speed is total distance over total time.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter taught you the definitions, the graph ladder, the three equations, relative velocity, and the calculus of variable acceleration — but five examinable patterns sit just outside its fence. Addendum A generalises the average-speed machinery past the two-speed trap the chapter drills: <i>n</i> legs, uneven splits, and halts, where the harmonic-versus-arithmetic choice decides the mark. Addendum B separates the two different quantities both casually called “average velocity” — the time-average and the space-average — and derives the constant-acceleration formulas for each, a standing JEE discriminator. Addendum C derives the vertical-flight consequences the chapter quotes without proof: full-flight bookkeeping, time spent above a level, the root-product trick, delayed drops, and the meet-feasibility condition. Addendum D pushes relative velocity into pursuit and crossing problems where a catch condition, not just a time, is the answer. Addendum E finishes the drag story the chapter starts: terminal speed, the exponential approach, and the contrast between linear and quadratic drag.<br><br>Numbering starts at Addendum A. Nothing here introduces new theory; every result below is the chapter’s own machinery — first-principles averaging, the relative-frame equations, and the chain-rule relation — pointed at cases the chapter skipped.',
      },
      {
        t: 'p',
        html: 'The chapter proves the two-speed results: equal distances give the harmonic mean, equal times the arithmetic mean. JEE Main extends both in two directions — more than two legs, and journeys with halts — and the extension defeats anyone relying on memorised formulas instead of the defining ratio.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'There is exactly one law: average speed is total distance over total time. Every named mean is a shortcut whose validity must be checked against this ratio, never assumed.',
      },
      {
        t: 'p',
        html: '<b>R1 — <i>n</i> equal distances.</b> Each leg has length <i>d</i>, speeds <i>v</i><sub>1</sub>, <i>v</i><sub>2</sub>, …, <i>v</i><sub><i>n</i></sub>. Total distance <i>nd</i>, total time ∑ <i>d</i>/<i>v</i><sub><i>i</i></sub>, so<br><i>v̄</i> = <i>nd</i>/(<i>d</i>(1/<i>v</i><sub>1</sub> + ⋯ + 1/<i>v</i><sub><i>n</i></sub>)) = <i>n</i>/(1/<i>v</i><sub>1</sub> + ⋯ + 1/<i>v</i><sub><i>n</i></sub>).<br>This is the harmonic mean of the <i>n</i> speeds. Units: km/h throughout if the speeds are in km/h.',
      },
      {
        t: 'p',
        html: '<b>R2 — unequal distances.</b> Return to the ratio:<br><i>v̄</i> = (<i>d</i><sub>1</sub> + <i>d</i><sub>2</sub> + ⋯ + <i>d</i><sub><i>n</i></sub>)/(<i>d</i><sub>1</sub>/<i>v</i><sub>1</sub> + <i>d</i><sub>2</sub>/<i>v</i><sub>2</sub> + ⋯ + <i>d</i><sub><i>n</i></sub>/<i>v</i><sub><i>n</i></sub>).<br>No standard mean applies; compute the ratio directly. Notice slow legs contribute large times, dragging the average down.',
      },
      {
        t: 'p',
        html: '<b>R3 — equal or unequal times.</b> For legs lasting <i>t</i><sub>1</sub>, <i>t</i><sub>2</sub>, … at speeds <i>v</i><sub>1</sub>, <i>v</i><sub>2</sub>, …,<br><i>v̄</i> = (<i>v</i><sub>1</sub><i>t</i><sub>1</sub> + <i>v</i><sub>2</sub><i>t</i><sub>2</sub> + ⋯)/(<i>t</i><sub>1</sub> + <i>t</i><sub>2</sub> + ⋯),<br>which is a weighted arithmetic mean. Equal times collapse it to (<i>v</i><sub>1</sub> + <i>v</i><sub>2</sub> + ⋯ + <i>v</i><sub><i>n</i></sub>)/<i>n</i>.',
      },
      {
        t: 'p',
        html: '<b>R4 — halts count.</b> A halt contributes zero distance but nonzero time. Total time must include every stop. Forgetting this is the single most common error in board-level journey problems.',
      },
      {
        t: 'p',
        html: '<b>R5 — the ordering.</b> For two speeds,<br>(<i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>)/2 − 2<i>v</i><sub>1</sub><i>v</i><sub>2</sub>/(<i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>) = (<i>v</i><sub>1</sub> − <i>v</i><sub>2</sub>)<sup>2</sup>/(2(<i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>)) ≥ 0,<br>so harmonic ≤ arithmetic, with equality only when <i>v</i><sub>1</sub> = <i>v</i><sub>2</sub>. Same data split by distance always scores lower than the same data split by time.',
      },
      {
        t: 'p',
        html: '<b>R6 — round trips.</b> Any out-and-back along the same route has equal distances automatically, so <i>v̄</i> = 2<i>v</i><sub>1</sub><i>v</i><sub>2</sub>/(<i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>) regardless of where the turn happens.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A car covers three equal distances at 20, 30, and 60 km/h. Find its average speed.',
        steps: [
          'By R1:<br><i>v̄</i> = 3/(1/20 + 1/30 + 1/60) = 3/((3 + 2 + 1)/60) = 3/(6/60) = 30 km/h.',
          '<b>Cross-check.</b> Take each leg 60 km. Times: 60/20 = 3 h, 60/30 = 2 h, 60/60 = 1 h. Total: 180 km in 6 h gives 30 km/h.',
          'Note the answer sits far closer to 20 than to 60: the slow leg eats 3 of the 6 hours.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A car travels 60 km at 60 km/h, halts 30 min, then covers 60 km at 40 km/h. Find the average speed.',
        steps: [
          'Times: 60/60 = 1 h, halt 0.5 h, 60/40 = 1.5 h. Total time 3 h, total distance 120 km:<br><i>v̄</i> = (120 km)/(3 h) = 40 km/h.',
          'Without the halt the same computation gives 120/2.5 = 48 km/h — the halt costs 8 km/h off the average. The trap option in an MCQ is almost always the halt-free value.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Two drivers cover the same 120 km stretch containing two 60 km halves. Driver P drives each half at a steady speed: 30 km/h then 60 km/h. Driver Q drives the first half of the time at 30 km/h and the second half of the time at 60 km/h. Whose average speed is larger?',
        steps: [
          'Driver P (equal distances, harmonic):<br><i>v̄</i><sub><i>P</i></sub> = 2(30)(60)/(30 + 60) = 3600/90 = 40 km/h.',
          'Driver Q (equal times, arithmetic):<br><i>v̄</i><sub><i>Q</i></sub> = (30 + 60)/2 = 45 km/h.',
          'Driver Q wins, 45 km/h against 40 km/h. Identical speeds, identical road — only the split variable differs. By R5 this outcome was forced before any arithmetic.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A cyclist covers four equal stretches at 10, 20, 30, and 60 km/h. Find the average speed.',
            a: '4/(1/10 + 1/20 + 1/30 + 1/60) = 4/(12/60) = 20 km/h.',
          },
          {
            q: 'A car goes 24 km out at 48 km/h and returns along the same road at 24 km/h. Find the average speed for the round trip.',
            a: '2(48)(24)/(48 + 24) = 2304/72 = 32 km/h.',
          },
          {
            q: 'A train covers 100 km at 80 km/h, halts 15 min, then covers 90 km at 90 km/h. Find the average speed.',
            a: 'Times 1.25 + 0.25 + 1 = 2.5 h; 190 km/2.5 h = 76 km/h.',
          },
          {
            q: 'Can the average speed over several legs equal both the harmonic and the arithmetic mean of the leg speeds? State the condition.',
            a: 'Only when every leg speed is equal — R5 forces harmonic < arithmetic otherwise.',
          },
          {
            q: 'A man walks 2 km at 5 km/h and a further 2 km at 4 km/h. Find his average speed, to two decimal places.',
            a: 'Harmonic: 2(5)(4)/9 = 40/9 ≈ 4.44 km/h.',
          },
          {
            q: 'A bus covers the first one-third of the distance at 30 km/h and the remaining two-thirds at 60 km/h. Find the average speed.',
            a: 'Weighted harmonic: 3/(1/30 + 2/60) = 3/(4/60) = 45 km/h — the slow third consumes half the total time.',
          },
        ],
      },
    ],
  },

  {
    n: 'B',
    title: 'Two Averages of Velocity: Over Time and Over Distance',
    extra: true,
    kalam:
      'This addendum defines both, derives their constant-acceleration forms, and collects the equal-splitting ratios for motion from rest.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: '“The average velocity” is always Δ<i>x</i>/<i>T</i>. But JEE also deploys a second, differently built average — one that weights each piece of the path equally rather than each moment — and the two disagree whenever the speed changes. Confusing them costs the mark. This addendum defines both, derives their constant-acceleration forms, and collects the equal-splitting ratios for motion from rest.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Definition 1 (time-average — the physical one).</b><br>⟨<i>v</i>⟩<sub><i>T</i></sub> = (1/<i>T</i>) ∫<sub>0</sub><sup><i>T</i></sup> <i>v</i> d<i>t</i> = (<i>x</i>(<i>T</i>) − <i>x</i>(0))/<i>T</i>.<br>This is the chapter’s average velocity: endpoints only, units m/s.',
      },
      {
        t: 'p',
        html: '<b>Definition 2 (space-average — the weighting device).</b><br>⟨<i>v</i>⟩<sub><i>S</i></sub> = (1/<i>S</i>) ∫<sub>path</sub> <i>v</i> d<i>s</i>,<br>where the integral runs along the displacement <i>S</i>. Fast portions of the trip cover more distance, so they receive more weight here. This quantity appears in kinetic theory and in “averaged over the path” phrasing; it is not the average velocity of a journey.',
      },
      {
        t: 'p',
        html: '<b>Constant acceleration, from speed <i>u</i> to speed <i>v</i>.</b> Since <i>v</i>(<i>t</i>) is linear in <i>t</i>:<br>⟨<i>v</i>⟩<sub><i>T</i></sub> = (<i>u</i> + <i>v</i>)/2.<br>For the space average, use the chain-rule relation <i>v</i> d<i>v</i> = <i>a</i> d<i>s</i>, so d<i>s</i> = <i>v</i> d<i>v</i>/<i>a</i>:<br>∫<sub><i>u</i></sub><sup><i>v</i></sup> <i>v</i> · <i>v</i> d<i>v</i>/<i>a</i> = (<i>v</i><sup>3</sup> − <i>u</i><sup>3</sup>)/(3<i>a</i>),   <i>S</i> = (<i>v</i><sup>2</sup> − <i>u</i><sup>2</sup>)/(2<i>a</i>).<br>Dividing:<br>⟨<i>v</i>⟩<sub><i>S</i></sub> = ((<i>v</i><sup>3</sup> − <i>u</i><sup>3</sup>)/3<i>a</i>)/((<i>v</i><sup>2</sup> − <i>u</i><sup>2</sup>)/2<i>a</i>) = 2(<i>v</i><sup>2</sup> + <i>uv</i> + <i>u</i><sup>2</sup>)/(3(<i>u</i> + <i>v</i>)).',
      },
      {
        t: 'p',
        html: '<b>Comparison.</b> Subtract the time-average from the space-average:<br>⟨<i>v</i>⟩<sub><i>S</i></sub> − ⟨<i>v</i>⟩<sub><i>T</i></sub> = (<i>v</i> − <i>u</i>)<sup>2</sup>/(6(<i>u</i> + <i>v</i>)) ≥ 0,<br>with equality only when <i>u</i> = <i>v</i>. The space-average is always the larger — and it is symmetric in <i>u</i> and <i>v</i>, so it cannot tell speeding-up from slowing-down.',
      },
      {
        t: 'p',
        html: '<b>Splitting a from-rest run.</b> With <i>s</i> = ½<i>at</i><sup>2</sup>, the time to cover distance <i>s</i> is <i>t</i> = √(2<i>s</i>/<i>a</i>), so:<br>• equal <b>times</b>: successive distances go as 1 : 3 : 5 : 7 : … (Galileo, Sub-topic 03);<br>• equal <b>distances</b>: successive times go as 1 : (√2 − 1) : (√3 − √2) : …<br>The second list is the mirror image the chapter never writes down, and JEE asks for it.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A particle accelerates uniformly from rest at <i>a</i> = 2 m/s<sup>2</sup> for 6 s. Find its average velocity over the interval and its space-average over the distance covered.',
        steps: [
          'Velocity after 6 s: <i>v</i> = <i>at</i> = 12 m/s. Time-average: (0 + 12)/2 = 6 m/s. Displacement: <i>S</i> = ½(2)(6)<sup>2</sup> = 36 m.',
          'Space-average by the derived formula:<br>⟨<i>v</i>⟩<sub><i>S</i></sub> = 2(12<sup>2</sup> + 0 + 0)/(3(12)) = 288/36 = 8 m/s.',
          '<b>Direct verification.</b> Parametrise: <i>v</i> = 2<i>t</i> m/s, <i>s</i> = <i>t</i><sup>2</sup> m, so d<i>s</i> = 2<i>t</i> d<i>t</i>:<br>∫ <i>v</i> d<i>s</i> = ∫<sub>0</sub><sup>6</sup> (2<i>t</i>)(2<i>t</i> d<i>t</i>) = 4<i>t</i><sup>3</sup>/3 |<sub>0</sub><sup>6</sup> = 288,<br>and 288/36 = 8 m/s. Both routes agree; the space-average exceeds the time-average by (12)<sup>2</sup>/(6 · 12) = 2 m/s, exactly as the comparison formula demands.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A body starts from rest with constant acceleration. Find the ratio of the time taken to cover the first half of the total distance <i>S</i> to the time taken for the second half.',
        steps: [
          'From rest, <i>t</i>(<i>s</i>) = √(2<i>s</i>/<i>a</i>):<br><i>t</i><sub>1</sub> = √(2(<i>S</i>/2)/<i>a</i>) = √(<i>S</i>/<i>a</i>),   <i>t</i><sub>2</sub> = √(2<i>S</i>/<i>a</i>) − √(<i>S</i>/<i>a</i>) = (√2 − 1)√(<i>S</i>/<i>a</i>).',
          'So <i>t</i><sub>1</sub> : <i>t</i><sub>2</sub> = 1 : (√2 − 1) ≈ 1 : 0.414.',
          '<b>Numeric check.</b> With <i>a</i> = 2 m/s<sup>2</sup> and <i>S</i> = 36 m: <i>t</i>(18) = √18 ≈ 4.24 s, <i>t</i>(36) = √36 = 6 s, so the second half takes 1.76 s, and 4.24/1.76 ≈ 2.41 = 1/0.414.',
          'Contrast with the time-split: the first and second halves of the time cover 9 m and 27 m (1 : 3). Same run, opposite asymmetries — the distance-split front-loads the time, the time-split back-loads the distance.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Conceptual, both exams',
        q: 'Along a straight 100 m path, a cart moves at a steady 10 m/s for the first 50 m and a steady 20 m/s for the second 50 m. Find its average velocity and its space-average.',
        steps: [
          'Average velocity: total time = 50/10 + 50/20 = 5 + 2.5 = 7.5 s, so Δ<i>x</i>/<i>T</i> = 100/7.5 ≈ 13.33 m/s.',
          'Space-average: on each segment <i>v</i> is constant, so<br>⟨<i>v</i>⟩<sub><i>S</i></sub> = (10 × 50 + 20 × 50)/100 = 1500/100 = 15 m/s.',
          'They differ — 13.33 against 15 m/s — and only the first is “the” average velocity. If an option list contains both, the question is testing whether you know which definition the stem asked for.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A particle accelerates uniformly from 4 m/s to 12 m/s. Find its time-average and space-average velocities.',
            a: '⟨<i>v</i>⟩<sub><i>T</i></sub> = 8 m/s; ⟨<i>v</i>⟩<sub><i>S</i></sub> = 2(144 + 48 + 16)/(3 · 16) = 416/48 = 26/3 ≈ 8.67 m/s.',
          },
          {
            q: 'From rest with <i>a</i> = 8 m/s<sup>2</sup>, find the times to cover each of the first two 8 m stretches, and their ratio.',
            a: '<i>t</i><sub>1</sub> = √2 ≈ 1.414 s, <i>t</i><sub>2</sub> = √4 − √2 ≈ 0.586 s; ratio 1 : (√2 − 1).',
          },
          {
            q: 'A particle moves with <i>v</i> = 3<i>t</i><sup>2</sup> (SI units). Find its average velocity over 0 ≤ <i>t</i> ≤ 2 s and its space-average over the same trip.',
            a: 'Displacement = ∫<sub>0</sub><sup>2</sup> 3<i>t</i><sup>2</sup> d<i>t</i> = 8 m, so ⟨<i>v</i>⟩<sub><i>T</i></sub> = 4 m/s; with <i>s</i> = <i>t</i><sup>3</sup>, ∫ <i>v</i> d<i>s</i> = ∫<sub>0</sub><sup>2</sup> 9<i>t</i><sup>4</sup> d<i>t</i> = 57.6, so ⟨<i>v</i>⟩<sub><i>S</i></sub> = 57.6/8 = 7.2 m/s.',
          },
          {
            q: 'For constant-acceleration motion, under what condition do the two averages coincide?',
            a: 'Only when the speed never changes (<i>u</i> = <i>v</i>, hence <i>a</i> = 0).',
          },
          {
            q: 'A body starting from rest covers distances in successive seconds in ratio 1 : 3 : 5. In what ratio does it cover the times for successive equal distances, over the first three such stretches?',
            a: '1 : (√2 − 1) : (√3 − √2).',
          },
        ],
      },
    ],
  },

  {
    n: 'C',
    title: 'Vertical Flight: The Results the Chapter Quotes but Never Derives',
    extra: true,
    kalam:
      'Every one follows in two or three lines from the same two equations, and each is a recurring MCQ.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Sub-topic 03 hands you <i>H</i> = <i>u</i><sup>2</sup>/2<i>g</i> and <i>t</i><sub>flight</sub> = 2<i>u</i>/<i>g</i> as facts, and its practice sets rely on consequences — time above a height, delayed drops, whether two balls meet — that appear nowhere in the worked text. Every one follows in two or three lines from the same two equations, and each is a recurring MCQ.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Take up as positive, launch from the origin at <i>t</i> = 0 with speed <i>u</i>, <i>g</i> positive constant downward, air resistance ignored.',
      },
      {
        t: 'p',
        html: '<b>R1 — full-flight bookkeeping.</b> Flight time <i>T</i> = 2<i>u</i>/<i>g</i>; greatest height <i>H</i> = <i>u</i><sup>2</sup>/2<i>g</i>. Total distance = 2<i>H</i> = <i>u</i><sup>2</sup>/<i>g</i> (up <i>H</i>, down <i>H</i>); net displacement = 0. Therefore<br><i>v̄</i><sub>vel</sub> = 0,   <i>v̄</i><sub>speed</sub> = (<i>u</i><sup>2</sup>/<i>g</i>)/(2<i>u</i>/<i>g</i>) = <i>u</i>/2.<br>A full vertical flight is the extreme case of the chapter’s inequality: maximum possible gap between the two averages.',
      },
      {
        t: 'p',
        html: '<b>R2 — time above a level <i>h</i> (with <i>h</i> ≤ <i>H</i>).</b> Solve <i>ut</i> − ½<i>gt</i><sup>2</sup> = <i>h</i>:<br>½<i>gt</i><sup>2</sup> − <i>ut</i> + <i>h</i> = 0 ⟹ <i>t</i> = (<i>u</i> ± √(<i>u</i><sup>2</sup> − 2<i>gh</i>))/<i>g</i>.<br>Duration above <i>h</i>: <i>t</i><sub>2</sub> − <i>t</i><sub>1</sub> = 2√(<i>u</i><sup>2</sup> − 2<i>gh</i>)/<i>g</i>. By Vieta on the same quadratic:<br><i>t</i><sub>1</sub><i>t</i><sub>2</sub> = <i>h</i>/(<i>g</i>/2) = 2<i>h</i>/<i>g</i>,   <i>t</i><sub>1</sub> + <i>t</i><sub>2</sub> = 2<i>u</i>/<i>g</i> = <i>T</i>.<br>The sum being <i>T</i> is the symmetry of the flight made visible; the product 2<i>h</i>/<i>g</i> is independent of <i>u</i> — the favourite MCQ payoff.',
      },
      {
        t: 'p',
        html: '<b>R3 — delayed drops.</b> Ball A released at <i>t</i> = 0, ball B at <i>t</i> = <i>τ</i>, same point. For <i>t</i> ≥ <i>τ</i>:<br><i>s</i>(<i>t</i>) = ½<i>gt</i><sup>2</sup> − ½<i>g</i>(<i>t</i> − <i>τ</i>)<sup>2</sup> = <i>gτt</i> − ½<i>gτ</i><sup>2</sup> = <i>gτ</i>(<i>t</i> − <i>τ</i>/2).<br>Separation grows linearly at rate <i>gτ</i> — consistent with <i>a</i><sub>rel</sub> = 0 from Sub-topic 04, the constant relative velocity here being <i>gτ</i>.',
      },
      {
        t: 'p',
        html: '<b>R4 — meet-or-not for a dropped-and-thrown pair.</b> Ball A dropped from the top of a tower of height <i>H</i>; simultaneously ball B thrown up from the foot with speed <i>u</i>. Both accelerate at <i>g</i>, so <i>a</i><sub>rel</sub> = 0 and the 100 m-style argument of the chapter applies at any height: the gap closes at the constant rate <i>u</i>, so<br><i>t</i><sub>meet</sub> = <i>H</i>/<i>u</i>,   <i>y</i><sub>meet</sub> = <i>H</i> − ½<i>g</i>(<i>H</i>/<i>u</i>)<sup>2</sup>.<br>Meeting in mid-air needs <i>t</i><sub>meet</sub> ≤ <i>T</i><sub><i>B</i></sub> = 2<i>u</i>/<i>g</i> (B still airborne) and <i>t</i><sub>meet</sub> ≤ √(2<i>H</i>/<i>g</i>) (A not yet landed). Both reduce to the same condition:<br><i>u</i><sup>2</sup> ≥ <i>gH</i>/2.<br>At equality all three times coincide: the balls meet exactly at the ground as both arrive.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A ball is thrown up at <i>u</i> = 30 m/s (<i>g</i> = 10 m/s<sup>2</sup>). How long is it above 40 m?',
        steps: [
          'Quadratic: 5<i>t</i><sup>2</sup> − 30<i>t</i> + 40 = 0, i.e. <i>t</i><sup>2</sup> − 6<i>t</i> + 8 = 0, roots <i>t</i><sub>1</sub> = 2 s, <i>t</i><sub>2</sub> = 4 s.',
          'Duration: 2 s. Checks: product 8 = 2(40)/10; sum 6 = 2<i>u</i>/<i>g</i> = 6; <i>H</i> = 45 m ≥ 40 m so the level is reached.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Ball A is dropped from rest from a tower of height <i>H</i> = 80 m. Simultaneously, ball B is thrown upward from the base at <i>u</i> = 25 m/s. Do they meet in the air? When, and at what height?',
        steps: [
          'Feasibility: <i>u</i><sup>2</sup> = 625 against <i>gH</i>/2 = 400; the condition holds comfortably, so they meet airborne.',
          'Since <i>a</i><sub>rel</sub> = 0, the 80 m gap closes at a steady 25 m/s:<br><i>t</i><sub>meet</sub> = (80 m)/(25 m/s) = 3.2 s.',
          'Height: A has fallen ½(10)(3.2)<sup>2</sup> = 51.2 m, so<br><i>y</i><sub>meet</sub> = 80 − 51.2 = 28.8 m.',
          '<b>Ground-frame cross-check with B:</b> <i>y</i><sub><i>B</i></sub> = 25(3.2) − 5(3.2)<sup>2</sup> = 80 − 51.2 = 28.8 m. Both balls are airborne at 3.2 s (A lands at √16 = 4 s, B at 2<i>u</i>/<i>g</i> = 5 s), so the meeting is genuine.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A ball is thrown up at 20 m/s and caught at the launch point. Find its average velocity and average speed over the flight.',
            a: 'Average velocity 0; average speed <i>u</i>/2 = 10 m/s.',
          },
          {
            q: 'With <i>u</i> = 40 m/s, <i>g</i> = 10 m/s<sup>2</sup>, find how long the ball is above 60 m, and verify the root-product relation.',
            a: 'Roots of <i>t</i><sup>2</sup> − 8<i>t</i> + 12: <i>t</i> = 2, 6 s, duration 4 s; product 12 = 2(60)/10, sum 8 = 2<i>u</i>/<i>g</i>.',
          },
          {
            q: 'Two balls are dropped from the same window, 1.5 s apart. Find their separation 4 s after the first release.',
            a: '<i>gτ</i>(<i>t</i> − <i>τ</i>/2) = 10(1.5)(4 − 0.75) = 48.75 m — check directly: 80 − ½(10)(2.5)<sup>2</sup> = 80 − 31.25 = 48.75 m.',
          },
          {
            q: 'For <i>H</i> = 125 m, find the minimum launch speed <i>u</i> from the ground for a simultaneous dropped-and-thrown pair to meet before either lands.',
            a: '<i>u</i><sup>2</sup> = <i>gH</i>/2 = 625, so <i>u</i><sub>min</sub> = 25 m/s.',
          },
          {
            q: 'Show that the time a ball thrown at speed <i>u</i> spends above half its maximum height equals <i>T</i>/√2, where <i>T</i> = 2<i>u</i>/<i>g</i>.',
            a: 'Put <i>h</i> = <i>u</i><sup>2</sup>/4<i>g</i> in R2: duration = 2√(<i>u</i><sup>2</sup> − 2(<i>u</i><sup>2</sup>/4<i>g</i>)<i>g</i>)/<i>g</i> = 2(<i>u</i>/√2)/<i>g</i> = √2 <i>u</i>/<i>g</i> = <i>T</i>/√2.',
          },
        ],
      },
    ],
  },

  {
    n: 'D',
    title: 'Pursuit, Crossing Under Acceleration, and the Catch Condition',
    extra: true,
    kalam:
      'Addendum D pushes relative velocity into pursuit and crossing problems where a catch condition, not just a time, is the answer.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter solves relative-velocity problems whose answers are times. JEE Advanced frequently wants a verdict — will the chaser ever catch up, will the braking cars collide — and that verdict comes from analysing the relative quadratic, not from computing one root. This addendum packages that analysis.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Work in the frame of one body, exactly as Procedure A of Sub-topic 04 prescribes, with relative initial velocity <i>u</i><sub>rel</sub>, relative acceleration <i>a</i><sub>rel</sub>, and required relative displacement <i>s</i><sub>0</sub> (the gap, or the sum of lengths for a crossing). The governing equation is<br><i>s</i><sub>0</sub> = <i>u</i><sub>rel</sub><i>t</i> + ½<i>a</i><sub>rel</sub><i>t</i><sup>2</sup>.',
      },
      {
        t: 'p',
        html: '<b>R1 — verdict rules.</b><br>• <i>a</i><sub>rel</sub> > 0: the right side is an upward-opening parabola in <i>t</i>, so it eventually exceeds any <i>s</i><sub>0</sub> > 0. The catch always happens, however negative <i>u</i><sub>rel</sub> — the gap may widen first, but not forever.<br>• <i>a</i><sub>rel</sub> = 0 and <i>u</i><sub>rel</sub> ≤ 0: never catches.<br>• <i>a</i><sub>rel</sub> = 0 and <i>u</i><sub>rel</sub> > 0: catches at <i>t</i> = <i>s</i><sub>0</sub>/<i>u</i><sub>rel</sub> (the chapter’s one-line division).',
      },
      {
        t: 'p',
        html: '<b>R2 — braking head-on collision test.</b> Two bodies approach each other with speeds <i>v</i><sub>1</sub>, <i>v</i><sub>2</sub>, gap <i>d</i>, each able to brake at magnitude <i>a</i>. Each needs <i>v</i><sub><i>i</i></sub><sup>2</sup>/2<i>a</i> to stop. They collide if and only if<br>(<i>v</i><sub>1</sub><sup>2</sup> + <i>v</i><sub>2</sub><sup>2</sup>)/(2<i>a</i>) > <i>d</i>.<br>If the sum of the stopping distances exceeds the gap, at least one body is still moving when the gap closes.',
      },
      {
        t: 'p',
        html: '<b>R3 — crossings with finite lengths.</b> Replace <i>s</i><sub>0</sub> by <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> (two trains) or <i>L</i> (train past a point) and apply R1; if <i>a</i><sub>rel</sub> ≠ 0, the crossing time comes from the quadratic’s smaller root — the larger root describes the fictitious continuation after overlap.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Two cars approach each other on a straight road with a 60 m gap, at 20 m/s and 15 m/s. On seeing each other both brake at 5 m/s<sup>2</sup>. Do they collide? If so, when and where?',
        steps: [
          'Test R2: stopping distances 20<sup>2</sup>/10 = 40 m and 15<sup>2</sup>/10 = 22.5 m; sum 62.5 m > 60 m — they collide.',
          'Find when. Take car 1’s initial position as origin, car 1 along +<i>x</i>:<br><i>x</i><sub>1</sub> = 20<i>t</i> − 2.5<i>t</i><sup>2</sup>,   <i>x</i><sub>2</sub> = 60 − 15<i>t</i> + 2.5<i>t</i><sup>2</sup>.',
          'Setting <i>x</i><sub>1</sub> = <i>x</i><sub>2</sub>:<br>20<i>t</i> − 2.5<i>t</i><sup>2</sup> = 60 − 15<i>t</i> + 2.5<i>t</i><sup>2</sup> ⟹ <i>t</i><sup>2</sup> − 7<i>t</i> + 12 = 0 ⟹ <i>t</i> = 3 s (taking the smaller root).',
          'Place: <i>x</i><sub>1</sub> = 20(3) − 2.5(9) = 37.5 m from car 1’s start. Check with car 2: 60 − 15(3) + 2.5(9) = 60 − 45 + 22.5 = 37.5 m. The root <i>t</i> = 4 s is discarded: the cars have already met and the model ceases to describe them.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A thief cycles past a police post at a steady 10 m/s. The policeman starts from rest 5 s later and accelerates uniformly at 2 m/s<sup>2</sup>. After how long, and at what distance from the post, is the thief caught?',
        steps: [
          'Measure time <i>t</i> from the thief’s passage. Equate distances from the post:<br>½(2)(<i>t</i> − 5)<sup>2</sup> = 10<i>t</i> ⟹ (<i>t</i> − 5)<sup>2</sup> = 10<i>t</i> ⟹ <i>t</i><sup>2</sup> − 20<i>t</i> + 25 = 0.<br><i>t</i> = (20 ± √300)/2 = 10 ± 5√3.',
          'Taking <i>t</i> = 10 + 5√3 ≈ 18.66 s. Distance: 10 × (10 + 5√3) = 100 + 50√3 ≈ 186.6 m from the post.',
          '<b>Verification.</b> (<i>t</i> − 5)<sup>2</sup> = (5 + 5√3)<sup>2</sup> = 25(4 + 2√3) = 100 + 50√3, matching 10<i>t</i> = 100 + 50√3. The rejected root <i>t</i> ≈ 1.34 s precedes the policeman’s start — the algebra’s ghost, discarded on physical grounds. Note the structure: <i>u</i><sub>rel</sub> = −10 m/s, <i>a</i><sub>rel</sub> = +2 m/s<sup>2</sup>, so by R1 the catch was guaranteed from the outset despite the 5 s gift to the thief.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A car leads by 100 m at a constant 15 m/s; a chaser 100 m behind follows at 10 m/s accelerating at 2 m/s<sup>2</sup>. Find the catch time.',
            a: '<i>t</i><sup>2</sup> − 5<i>t</i> − 100 = 0 gives <i>t</i> = (5 + 5√17)/2 ≈ 12.8 s (leader then ≈ 192 m from own start).',
          },
          {
            q: 'Two trains 400 m apart approach each other at 20 m/s and 30 m/s, both braking at 2 m/s<sup>2</sup>. Do they collide? If not, what gap remains when both have stopped?',
            a: 'Stopping distances 100 + 225 = 325 m < 400 m: no collision; 75 m remain.',
          },
          {
            q: 'A thief runs at 8 m/s; police start from rest 10 s later and accelerate at 3 m/s<sup>2</sup>. Find the catch time and distance.',
            a: '3<i>t</i><sup>2</sup> − 76<i>t</i> + 300 = 0 gives <i>t</i> = (76 + 8√34)/6 ≈ 20.4 s; distance 8<i>t</i> ≈ 164 m.',
          },
          {
            q: 'Chaser and leader move at 12 m/s and 10 m/s with the same constant acceleration 1 m/s<sup>2</sup>, leader ahead by 50 m. Verdict?',
            a: 'Catches: <i>a</i><sub>rel</sub> = 1 − 1 = 0 and <i>u</i><sub>rel</sub> = 12 − 10 = +2 m/s (the chaser is closing), so by R1 (last case) <i>t</i> = <i>s</i><sub>0</sub>/<i>u</i><sub>rel</sub> = 50/2 = 25 s.',
          },
          {
            q: 'Two trains of lengths 150 m each approach at 54 km/h and 36 km/h. Find the crossing time.',
            a: 'Relative speed 15 + 10 = 25 m/s over 300 m: 12 s.',
          },
        ],
      },
    ],
  },

  {
    n: 'E',
    title: 'Velocity-Dependent Drag: Terminal Speed and the Exponential Approach',
    extra: true,
    kalam:
      'This addendum derives that solution completely, extracts the limiting-speed shortcut, and tabulates how the two drag laws differ at long times.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Sub-topic 05 names terminal velocity in passing and solves <i>a</i> = −<i>kv</i><sup>2</sup> in full, but the most examinable drag law — resistance proportional to <i>v</i> itself, giving the parachutist’s smooth approach to a terminal speed — is left with only a practice answer. This addendum derives that solution completely, extracts the limiting-speed shortcut, and tabulates how the two drag laws differ at long times.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>R1 — the terminal-speed shortcut.</b> For <i>a</i> = <i>f</i>(<i>v</i>) with <i>f</i> falling through zero, the body settles at the speed where <i>f</i> vanishes: setting <i>a</i> = 0 gives <i>v</i><sub>term</sub> instantly, no integration. For a fall with linear drag,<br><i>a</i> = <i>g</i> − <i>kv</i> = 0 ⟹ <i>v</i><sub>term</sub> = <i>g</i>/<i>k</i>,<br>with <i>k</i> in s<sup>−1</sup> and <i>v</i><sub>term</sub> in m/s. Once at <i>v</i><sub>term</sub> the acceleration is zero, so the body stays there — a stable equilibrium.',
      },
      {
        t: 'p',
        html: '<b>R2 — the full solution of <i>a</i> = <i>g</i> − <i>kv</i>.</b> Shift to the deficit <i>w</i> = <i>v</i> − <i>g</i>/<i>k</i>:<br>d<i>w</i>/d<i>t</i> = −<i>kw</i> ⟹ <i>w</i> = (<i>u</i> − <i>g</i>/<i>k</i>)<i>e</i><sup>−<i>kt</i></sup>,<br>so<br><i>v</i>(<i>t</i>) = <i>g</i>/<i>k</i> + (<i>u</i> − <i>g</i>/<i>k</i>) <i>e</i><sup>−<i>kt</i></sup>.<br>Integrating for position (launched at the origin):<br><i>x</i>(<i>t</i>) = (<i>g</i>/<i>k</i>)<i>t</i> + ((<i>u</i> − <i>g</i>/<i>k</i>)/<i>k</i>)(1 − <i>e</i><sup>−<i>kt</i></sup>).',
      },
      {
        t: 'p',
        html: '<b>Consistency check.</b> As <i>k</i> → 0, expand <i>e</i><sup>−<i>kt</i></sup> ≈ 1 − <i>kt</i> + ½<i>k</i><sup>2</sup><i>t</i><sup>2</sup>. The terms (<i>g</i>/<i>k</i>)<i>t</i> cancel against the −(<i>g</i>/<i>k</i>)<i>t</i> hidden in the second piece, leaving<br><i>x</i> → <i>ut</i> + ½<i>gt</i><sup>2</sup>,<br>the drag-free result. The solution degrades gracefully to free fall.',
      },
      {
        t: 'p',
        html: '<b>R3 — the half-time.</b> From rest, <i>v</i> = <i>v</i><sub>term</sub>(1 − <i>e</i><sup>−<i>kt</i></sup>) reaches half the terminal speed at<br><i>t</i><sub>1/2</sub> = ln 2/<i>k</i>.<br>Each further half-time halves the remaining gap: <i>v</i>/<i>v</i><sub>term</sub> = 1/2, 3/4, 7/8, …',
      },
      {
        t: 'p',
        html: '<b>R4 — the ½ d(<i>v</i><sup>2</sup>)/d<i>x</i> shortcut.</b> Since <i>v</i> d<i>v</i>/d<i>x</i> = ½ d(<i>v</i><sup>2</sup>)/d<i>x</i>, any data giving <i>v</i><sup>2</sup> as a function of <i>x</i> yields the acceleration immediately, and <i>v</i><sup>2</sup> linear in <i>x</i> signals constant acceleration — the converse of <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>as</i>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A parachutist falls from rest with <i>a</i> = <i>g</i> − <i>kv</i>, where <i>g</i> = 10 m/s<sup>2</sup> and <i>k</i> = 0.5 s<sup>−1</sup>. Find (a) the terminal speed, (b) her speed at <i>t</i> = 2 ln 2 s, and (c) her distance fallen by then.',
        steps: [
          '(a) <i>v</i><sub>term</sub> = <i>g</i>/<i>k</i> = 10/0.5 = 20 m/s.',
          '(b) With <i>u</i> = 0: <i>v</i> = 20(1 − <i>e</i><sup>−0.5×2 ln 2</sup>) = 20(1 − ½) = 10 m/s — exactly half of terminal, since <i>t</i><sub>1/2</sub> = ln 2/<i>k</i> = 2 ln 2 s here, so the given time is one half-time.',
          '(c)<br><i>x</i> = (<i>g</i>/<i>k</i>)<i>t</i> − ((<i>g</i>/<i>k</i>)/<i>k</i>)(1 − <i>e</i><sup>−<i>kt</i></sup>) = 20(2 ln 2) − 40(½) = 40 ln 2 − 20 ≈ 7.73 m.',
          '<b>Sanity check.</b> Uniform free fall would give ½(10)(1.386)<sup>2</sup> ≈ 9.61 m; drag has cost her about 1.9 m — plausible, since her speed never exceeded 10 m/s.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A particle is projected along the <i>x</i>-axis and obeys <i>v</i><sup>2</sup> = 100 − 4<i>x</i> (SI units). Find its acceleration, its stopping point, and the time to stop.',
        steps: [
          'Acceleration by R4:<br><i>a</i> = ½ d(<i>v</i><sup>2</sup>)/d<i>x</i> = ½(−4) = −2 m/s<sup>2</sup>,<br>constant — as promised, <i>v</i><sup>2</sup> linear in <i>x</i> means uniform deceleration. Initial speed √100 = 10 m/s. Stop when <i>v</i><sup>2</sup> = 0: <i>x</i> = 25 m. Cross-check with <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>as</i>: 0 = 100 + 2(−2)<i>s</i> gives <i>s</i> = 25 m. Time: <i>t</i> = <i>u</i>/|<i>a</i>| = 10/2 = 5 s.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'The two drag laws compared' },
      {
        t: 'p',
        html: 'The quadratic law was solved in the chapter and the linear law is derived above; here is what distinguishes them at long times, with the distance integrals shown.',
      },
      {
        t: 'p',
        html: '<b>Linear drag</b> <i>a</i> = −<i>kv</i> (projected at <i>u</i>): <i>v</i> = <i>ue</i><sup>−<i>kt</i></sup>, so<br><i>x</i>(<i>t</i>) = ∫<sub>0</sub><sup><i>t</i></sup> <i>ue</i><sup>−<i>kt</i>′</sup> d<i>t</i>′ = (<i>u</i>/<i>k</i>)(1 − <i>e</i><sup>−<i>kt</i></sup>) ⟶ <i>u</i>/<i>k</i>   as <i>t</i> → ∞.<br>Finite total distance: the body creeps asymptotically to rest.',
      },
      {
        t: 'p',
        html: '<b>Quadratic drag</b> <i>a</i> = −<i>kv</i><sup>2</sup>: from the chapter, <i>v</i> = <i>u</i>/(1 + <i>ukt</i>), so with 1/<i>v</i> = <i>kt</i> + 1/<i>u</i>:<br><i>x</i>(<i>t</i>) = ∫<sub>0</sub><sup><i>t</i></sup> <i>u</i> d<i>t</i>′/(1 + <i>ukt</i>′) = (1/<i>k</i>) ln(1 + <i>ukt</i>) ⟶ ∞.<br>Unbounded distance, growing only logarithmically: the body never truly stops. If an MCQ asks “under which resistive law does the body travel a finite total distance?”, the answer is the linear law.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A diver falls from rest with <i>a</i> = 10 − 0.25<i>v</i> (SI units). Find the terminal speed and the speed after 4 ln 2 s.',
            a: '<i>v</i><sub>term</sub> = 40 m/s; after 4 ln 2 s, which is one half-time (<i>k</i> = 0.25 s<sup>−1</sup> gives <i>t</i><sub>1/2</sub> = ln 2/<i>k</i> = 4 ln 2 s), <i>v</i> = 40(1 − 2<sup>−1</sup>) = 20 m/s.',
          },
          {
            q: 'With <i>a</i> = −<i>kv</i>, <i>u</i> = 20 m/s, <i>k</i> = 0.1 s<sup>−1</sup>: find <i>v</i>(<i>t</i>), the total distance travelled, and the distance covered in the first 10 s.',
            a: '<i>v</i> = 20<i>e</i><sup>−0.1<i>t</i></sup> m/s; total distance <i>u</i>/<i>k</i> = 200 m; distance in 10 s = 200(1 − <i>e</i><sup>−1</sup>) ≈ 126.4 m.',
          },
          {
            q: 'For <i>v</i><sup>2</sup> = 64 − 2<i>x</i> (SI), find <i>a</i>, the stopping point, and the stopping time.',
            a: '<i>a</i> = −1 m/s<sup>2</sup>; stops at <i>x</i> = 32 m; <i>t</i> = 8 s (initial speed 8 m/s).',
          },
          {
            q: 'Which drag law permits infinite total travel, and how does the distance grow at late times?',
            a: 'Quadratic drag; <i>x</i> = (1/<i>k</i>) ln(1 + <i>ukt</i>) grows logarithmically.',
          },
          {
            q: 'Starting from rest under linear drag, after how many half-times is a body within 5% of terminal speed?',
            a: 'Need <i>e</i><sup>−<i>kt</i></sup> ≤ 0.05, i.e. <i>t</i> ≥ (ln 20)/<i>k</i> ≈ 4.32 half-times — between the fourth and fifth.',
          },
        ],
      },
    ],
  },
];
