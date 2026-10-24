import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Additional Topics, word for word from the Class 11 Chemistry
 * Master Reference: the shared opening of "Chapter 2: Structure of Atom —
 * Additional Topics" (p. 103, set at the head of Additional topic A's
 * Introduction), then A The Electron’s Clock (pp. 103–104), B Reading Radial
 * Probability (pp. 105–107; the graph on p. 106 is c11-02-B-d1, its caption
 * belongs to the diagram), C Spectral Arithmetic (pp. 107–109), D Degeneracy,
 * Unpaired Electrons and Spin Bookkeeping (pp. 110–111) and E, the book's
 * "Addendum P — What JEE and NEET Actually Ask" (pp. 111–116), kept as the
 * last Additional topic by Nikhil's decision. Each addendum prints its own
 * practice problems and answers, which are its Practice part. Orbital and
 * subshell labels are upright (NCERT), though the book sets them in italic.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 103–104 ─────────────────────────
  {
    n: 'A',
    title: 'The Electron’s Clock: Time Period and Frequency of Revolution',
    extra: true,
    kalam: 'The period is the scaling in which two effects compound.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter already carries the heavy machinery: the discovery experiments, Planck and the photoelectric effect, the full Bohr derivations (<i>r</i><sub><i>n</i></sub>, <i>E</i><sub><i>n</i></sub>, the Rydberg equation, de Broglie’s standing wave), Heisenberg, and the quantum-number/orbital/configuration apparatus with the node formulas. Four examinable patterns still stand outside. Addendum A completes the Bohr scaling family with the two members the chapter omits — the <b>time period and frequency of revolution</b> (<i>T</i> ∝ <i>n</i><sup>3</sup>/<i>Z</i><sup>2</sup>), which JEE Main asks straight. Addendum B teaches the <b>radial probability distribution</b> 4π<i>r</i><sup>2</sup><i>ψ</i><sup>2</sup> — NCERT shows you <i>ψ</i><sup>2</sup>(<i>r</i>) plots but the exams ask you to identify the distribution curves, whose peak count is <i>n</i> − <i>l</i>; the distinction is a standing trap. Addendum C systematises <b>spectral arithmetic</b>: counting lines per region and converting between a series limit and another series’ first line. Addendum D fixes the bookkeeping the exams test hardest in the quantum model — <b>degeneracy (hydrogen vs multi-electron), unpaired-electron counting, and net spin</b>. Additional topic E maps the previous-year papers onto all of it.',
      },
      {
        t: 'p',
        html: 'The chapter’s cheat sheet lists three orbit scaling laws: <i>r</i> ∝ <i>n</i><sup>2</sup>/<i>Z</i>, <i>E</i> ∝ <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup>, <i>v</i> ∝ <i>Z</i>/<i>n</i>. A fourth quantity — how long one revolution takes — is derivable from the first and third in one line, and it is a recurring JEE Main numerical.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Derivation (one line).</b> The circumference of the <i>n</i>-th orbit is 2π<i>r</i><sub><i>n</i></sub> and the electron covers it at speed <i>v</i><sub><i>n</i></sub>, so',
      },
      {
        t: 'formula',
        kicker: 'Time period and frequency of revolution',
        main: '<i>T</i><sub><i>n</i></sub> = 2π<i>r</i><sub><i>n</i></sub>/<i>v</i><sub><i>n</i></sub> ∝ (<i>n</i><sup>2</sup>/<i>Z</i>)/(<i>Z</i>/<i>n</i>) = <i>n</i><sup>3</sup>/<i>Z</i><sup>2</sup><br><i>f</i><sub><i>n</i></sub> = 1/<i>T</i><sub><i>n</i></sub> ∝ <i>Z</i><sup>2</sup>/<i>n</i><sup>3</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Memory hook:</b> the period is the scaling in which two effects compound. As <i>n</i> rises the orbit gets bigger (<i>r</i> ∝ <i>n</i><sup>2</sup>) and the electron moves slower (<i>v</i> ∝ 1/<i>n</i>), so the time for one lap grows as <i>n</i><sup>2</sup> × <i>n</i> = <i>n</i><sup>3</sup> — which is why the exponent on <i>n</i> is 3, not 2.',
      },
      {
        t: 'p',
        html: '<b>Absolute values for hydrogen, <i>n</i> = 1.</b> With <i>r</i><sub>1</sub> = 0.529 Å = 5.29 × 10<sup>−11</sup> m and <i>v</i><sub>1</sub> = 2.18 × 10<sup>6</sup> m s<sup>−1</sup>:<br><i>T</i><sub>1</sub> = 2π(5.29 × 10<sup>−11</sup>)/(2.18 × 10<sup>6</sup>) = 1.52 × 10<sup>−16</sup> s,   <i>f</i><sub>1</sub> = 6.56 × 10<sup>15</sup> s<sup>−1</sup>.<br>Any other orbit of any one-electron ion follows from the scaling: <i>T</i><sub><i>n</i></sub>(<i>Z</i>) = 1.52 × 10<sup>−16</sup> × <i>n</i><sup>3</sup>/<i>Z</i><sup>2</sup> s.',
      },
      {
        t: 'p',
        html: '<b>The equivalent current (JEE Advanced flavour).</b> A circling charge is a current loop: <i>I</i> = <i>e</i>/<i>T</i>. For the hydrogen ground state, <i>I</i> = (1.6 × 10<sup>−19</sup>)/(1.52 × 10<sup>−16</sup>) ≈ 1.05 × 10<sup>−3</sup> A — about a milliampere. If a problem asks for the “current due to the revolving electron,” this is the entire method: <i>I</i> = <i>ef</i>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main — Ratio of time periods',
        q: 'Find the ratio of the time periods of the electron in the 1st and 3rd orbits of the He<sup>+</sup> ion.',
        steps: [
          '<b>Fast solution.</b> Same ion, so <i>Z</i> cancels; <i>T</i> ∝ <i>n</i><sup>3</sup>:<br><i>T</i><sub>1</sub> ∶ <i>T</i><sub>3</sub> = 1<sup>3</sup> ∶ 3<sup>3</sup>',
          'The distractor 1 ∶ 9 is the radius scaling (<i>n</i><sup>2</sup>) misapplied — the single most common error in this question.',
        ],
        ans: '1 ∶ 27',
      },
      {
        t: 'ex',
        tag: 'JEE Main — Frequency of revolution',
        q: 'Calculate the frequency of revolution of the electron in the second Bohr orbit of hydrogen.',
        steps: [
          '<i>f</i><sub><i>n</i></sub> = <i>f</i><sub>1</sub>/<i>n</i><sup>3</sup> for hydrogen (<i>Z</i> = 1):<br><i>f</i><sub>2</sub> = (6.56 × 10<sup>15</sup>)/8',
          '<b>Cross-check with absolute numbers:</b> <i>r</i><sub>2</sub> = 4 × 0.529 = 2.12 Å, <i>v</i><sub>2</sub> = (2.18 × 10<sup>6</sup>)/2 = 1.09 × 10<sup>6</sup> m s<sup>−1</sup>, so <i>f</i> = <i>v</i>/(2π<i>r</i>) = (1.09 × 10<sup>6</sup>)/(2π × 2.12 × 10<sup>−10</sup>) ≈ 8.2 × 10<sup>14</sup> s<sup>−1</sup> — consistent.',
        ],
        ans: '8.2 × 10<sup>14</sup> Hz',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Show that the time period of revolution in a Bohr orbit is proportional to <i>n</i><sup>3</sup>/<i>Z</i><sup>2</sup>, starting from <i>r</i><sub><i>n</i></sub> ∝ <i>n</i><sup>2</sup>/<i>Z</i> and <i>v</i><sub><i>n</i></sub> ∝ <i>Z</i>/<i>n</i>.',
            a: '<i>T</i> = 2π<i>r</i>/<i>v</i> ∝ (<i>n</i><sup>2</sup>/<i>Z</i>) × (<i>n</i>/<i>Z</i>) = <i>n</i><sup>3</sup>/<i>Z</i><sup>2</sup>.',
          },
          {
            q: '[JEE Main] The ratio of the frequencies of revolution of the electron in the 1st orbits of H and Li<sup>2+</sup> is (a) 1 : 3 (b) 1 : 9 (c) 3 : 1 (d) 9 : 1.',
            a: '(b): same <i>n</i>, so <i>f</i> ∝ <i>Z</i><sup>2</sup>; <i>f</i><sub>H</sub> ∶ <i>f</i><sub>Li²⁺</sub> = 1 ∶ 9. (The 1 : 3 option is the velocity scaling misapplied.)',
          },
          {
            q: '[JEE Advanced] Find the equivalent current (in mA, nearest integer) produced by the electron revolving in the first Bohr orbit of hydrogen. (<i>e</i> = 1.6 × 10<sup>−19</sup> C, <i>T</i><sub>1</sub> = 1.52 × 10<sup>−16</sup> s.)',
            a: '<i>I</i> = <i>e</i>/<i>T</i> = (1.6 × 10<sup>−19</sup>)/(1.52 × 10<sup>−16</sup>) = 1.05 × 10<sup>−3</sup> A ≈ 1 mA.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 105–107 ─────────────────────────
  {
    n: 'B',
    title: 'Reading Radial Probability: ψ squared versus 4πr squared ψ squared',
    extra: true,
    kalam: 'The radial distribution is what “how far from the nucleus is the electron most likely to be found?” means.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'NCERT shows the <b>probability density</b> plots: <i>ψ</i><sup>2</sup> against <i>r</i> for the 1s and 2s orbitals, with <i>ψ</i><sup>2</sup> maximum at the nucleus for 1s, falling to zero at the 2s node, then rising to a small second maximum. JEE and NEET, however, more often ask about a different curve — the <b>radial probability distribution</b> — and the two are systematically confused.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The two curves are different objects.</b><br>• <i>ψ</i><sup>2</sup>(<i>r</i>) is the probability per unit volume at a point. For any s orbital it is largest at the nucleus (<i>r</i> = 0).<br>• 4π<i>r</i><sup>2</sup><i>ψ</i><sup>2</sup> d<i>r</i> is the probability of finding the electron in a thin spherical shell of radius <i>r</i> and thickness d<i>r</i> — at a distance <i>r</i> regardless of direction. The shell’s volume 4π<i>r</i><sup>2</sup> d<i>r</i> grows as <i>r</i><sup>2</sup>, so even where <i>ψ</i><sup>2</sup> is falling, the radial distribution can rise. At <i>r</i> = 0 the shell has zero volume, so the radial distribution <b>always starts at zero</b>, even for 1s.',
      },
      {
        t: 'p',
        html: 'The radial distribution is what “how far from the nucleus is the electron most likely to be found?” means. Its features:<br>• <b>Number of peaks</b> = (number of radial nodes) +1 = (<i>n</i> − <i>l</i> − 1) + 1 = <i>n</i> − <i>l</i>.<br>• <b>Radial nodes</b> appear as zeros of the curve between peaks (the curve touches the axis).<br>• For <b>1s</b>, the single peak sits at exactly <i>r</i> = <i>a</i><sub>0</sub> = 52.9 pm — the Bohr radius is the most probable electron–nucleus distance in ground-state hydrogen. (The average distance, ⟨<i>r</i>⟩ = 1.5 <i>a</i><sub>0</sub>, is larger — a distinction JEE Advanced has exploited.)<br>• Same <i>n</i>, different <i>l</i>: the s orbital (<i>n</i> peaks) has a small innermost peak close to the nucleus — this is the <b>penetration</b> that makes <i>E</i><sub><i>n</i>s</sub> < <i>E</i><sub><i>n</i>p</sub> < <i>E</i><sub><i>n</i>d</sub> in multi-electron atoms. The p and d curves of the same shell peak progressively farther out and have fewer peaks (<i>n</i> − 1 for p, <i>n</i> − 2 for d).',
      },
      { t: 'fig', id: 'c11-02-B-d1' },
      {
        t: 'p',
        html: '<b>Identification drill.</b> Given a printed curve, ask two questions: (i) does it start at zero? — if not, it is a <i>ψ</i><sup>2</sup> density plot, not a radial distribution; (ii) how many peaks does it have? — that number is <i>n</i> − <i>l</i> (and the node count <i>n</i> − <i>l</i> − 1 only confirms it). A two-peak radial distribution with one node could be 2s, 3p, 4d or 5f; a one-peak curve that starts at zero could be 1s, 2p, 3d or 4f (all have <i>n</i> − <i>l</i> = 1) — the <i>x</i>-axis scale or a stated shell then disambiguates.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main — Which orbitals fit this curve?',
        q: 'A radial probability distribution curve shows two peaks with one node between them, the outer peak much larger. Which orbital(s) can it represent: (a) 2p (b) 2s (c) 4d (d) 3p?',
        steps: [
          'Two peaks means <i>n</i> − <i>l</i> = 2. Check each: 2p has <i>n</i> − <i>l</i> = 1 (one peak) — out. 2s: <i>n</i> − <i>l</i> = 2, one radial node — fits. 4d: <i>n</i> − <i>l</i> = 2 as well — also fits, with two peaks and one node (at a larger absolute distance). 3p: <i>n</i> − <i>l</i> = 2 — fits too.',
          '<b>The lesson:</b> a bare peak count fixes <i>n</i> − <i>l</i>, not <i>n</i> and <i>l</i> separately. (If the exam wants a unique answer it must pin the axis scale or name the shell.)',
        ],
        ans: '(b), (c), (d) — 2s, 4d and 3p all have exactly two peaks and one radial node; only 2p is excluded.',
      },
      {
        t: 'ex',
        tag: 'NEET statement analysis — Density versus distribution',
        q: 'Statement I: For a 1s orbital, the probability density <i>ψ</i><sup>2</sup> is maximum at the nucleus.<br>Statement II: For a 1s orbital, the electron is most likely to be found at the nucleus.',
        steps: [
          'Statement I is correct — <i>ψ</i><sup>2</sup>(0) is the global maximum of the density. Statement II is <b>incorrect</b> in the radial sense that matters: the probability of a shell at distance <i>r</i> is 4π<i>r</i><sup>2</sup><i>ψ</i><sup>2</sup> d<i>r</i>, which is zero at <i>r</i> = 0 and maximal at <i>r</i> = <i>a</i><sub>0</sub>. The electron is densest per unit volume at the nucleus, but most probable at the distance <i>a</i><sub>0</sub>.',
          'The confusion between “probability density at a point” and “probability in a shell” is precisely what this question type tests.',
        ],
        ans: 'I correct, II incorrect.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced — Nodes from a curve',
        q: 'A radial distribution plot for an orbital touches the <i>r</i>-axis twice between the origin and infinity (excluding the endpoints) and shows three peaks. Identify the possible orbitals and the total node count.',
        steps: [
          'Two interior zeros = two radial nodes = <i>n</i> − <i>l</i> − 1 = 2, and three peaks confirm <i>n</i> − <i>l</i> = 3. Candidates: 3s (<i>l</i> = 0, <i>n</i> = 3), 4p (<i>l</i> = 1, <i>n</i> = 4), 5d (<i>l</i> = 2, <i>n</i> = 5), 6f (<i>l</i> = 3, <i>n</i> = 6). Total nodes = <i>n</i> − 1: 2 for 3s, 3 for 4p, 4 for 5d, 5 for 6f — the angular nodes (<i>l</i>) make up the difference and are invisible on a radial plot.',
        ],
        ans: '3s, 4p, 5d, 6f are all consistent; radial plots reveal radial nodes only — the angular nodes live in the shape, not the curve.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] For a 2s orbital, sketch/describe the variation of (i) <i>ψ</i><sup>2</sup> with <i>r</i> and (ii) 4π<i>r</i><sup>2</sup><i>ψ</i><sup>2</sup> with <i>r</i>, and mark the radial node.',
            a: '(i) <i>ψ</i><sup>2</sup>: maximum at <i>r</i> = 0, falls to zero at the node, small second maximum, then decays. (ii) 4π<i>r</i><sup>2</sup><i>ψ</i><sup>2</sup>: zero at origin, small inner peak, zero at the node, large outer peak, decays to zero.',
          },
          {
            q: '[NEET] The number of peaks in the radial probability distribution curve of 4p is (a) 1 (b) 2 (c) 3 (d) 4.',
            a: '(c): <i>n</i> − <i>l</i> = 4 − 1 = 3 peaks.',
          },
          {
            q: '[JEE Main] The most probable distance of the electron from the nucleus in ground-state hydrogen is (a) 0 (b) <i>a</i><sub>0</sub> (c) 1.5 <i>a</i><sub>0</sub> (d) 2 <i>a</i><sub>0</sub>.',
            a: '(b): the radial distribution 4π<i>r</i><sup>2</sup><i>ψ</i><sup>2</sup> of 1s peaks at exactly the Bohr radius; option (c) is the average distance, the common confusion.',
          },
          {
            q: '[JEE Advanced] A radial distribution curve has exactly one peak, starts at the origin, and its peak lies at roughly 4.2 <i>a</i><sub>0</sub>. Between 2p and 3d, which is it, and why?',
            a: '2p: both 2p and 3d have <i>n</i> − <i>l</i> = 1 (a single peak), but for <i>l</i> = <i>n</i> − 1 the peak sits at <i>r</i> = <i>n</i><sup>2</sup><i>a</i><sub>0</sub> — about 4 <i>a</i><sub>0</sub> for 2p, matching 4.2 <i>a</i><sub>0</sub>, versus about 9 <i>a</i><sub>0</sub> for 3d.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 107–109 ─────────────────────────
  {
    n: 'C',
    title: 'Spectral Arithmetic: Counting Lines by Region and Converting Between Series',
    extra: true,
    kalam: 'When atoms de-excite from level n, each series collects the transitions that end on its lower level.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the Rydberg equation, the series names and the total line count <i>n</i>(<i>n</i> − 1)/2. JEE and NEET ask the two follow-ups the chapter only touches on: how many of those lines land in the UV/visible/IR, and how a wavelength in one series converts to a wavelength in another without recomputing <i>R</i><sub>H</sub>.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Per-region counting.</b> When atoms de-excite from level <i>n</i>, each series collects the transitions that end on its lower level. From an initial level <i>n</i> (with population spread across all intermediate levels as the cascade proceeds):<br>• Lyman (end at 1, UV): transitions <i>n</i> → 1, (<i>n</i> − 1) → 1, … , 2 → 1 — count <i>n</i> − 1;<br>• Balmer (end at 2, visible): count <i>n</i> − 2 (Balmer lines from <i>n</i> ≥ 7 run into the near UV); Paschen (end at 3, IR): <i>n</i> − 3; Brackett: <i>n</i> − 4; Pfund: <i>n</i> − 5 (only if <i>n</i> ≥ 6).',
      },
      {
        t: 'p',
        html: '<b>Sanity check:</b> the sum (<i>n</i> − 1) + (<i>n</i> − 2) + ⋯ + 1 = <i>n</i>(<i>n</i> − 1)/2 — the chapter’s total.',
      },
      {
        t: 'p',
        html: '<b>Series-limit and first-line conversions.</b> The series limit (shortest wavelength) is the transition from ∞ to the lower level; the first line (longest wavelength) is from the next level up. Because <i>ν̄</i> = <i>R</i><sub>H</sub><i>Z</i><sup>2</sup>(1/<i>n</i><sub>1</sub><sup>2</sup> − 1/<i>n</i><sub>2</sub><sup>2</sup>), ratios between lines of the same ion are pure rational numbers — <i>R</i><sub>H</sub> cancels. The standard pair:',
      },
      {
        t: 'formula',
        kicker: 'Series-limit and first-line conversions',
        main: 'Lyman limit (∞ → 1): 1/<i>X</i> = <i>R</i><sub>H</sub><i>Z</i><sup>2</sup><br>Balmer first line (3 → 2): 1/<i>λ</i> = <i>R</i><sub>H</sub><i>Z</i><sup>2</sup>(1/4 − 1/9) = (5/36)<i>R</i><sub>H</sub><i>Z</i><sup>2</sup> ⇒ <i>λ</i> = (36/5)<i>X</i>',
        legend: ['<i>X</i> = wavelength of the Lyman series limit'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>General recipe.</b> To convert a known line into an unknown one for the same ion: write each <i>ν̄</i> as <i>R</i><sub>H</sub><i>Z</i><sup>2</sup> × (rational bracket), take the ratio, done. Never recompute <i>R</i><sub>H</sub>, never convert units mid-way.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET — Lyman limit to Balmer first line',
        q: 'The shortest wavelength of the Lyman series of hydrogen is <i>X</i>. Find the wavelength of the first line of the Balmer series.',
        steps: [
          'Shortest Lyman = series limit = ∞ → 1: 1/<i>X</i> = <i>R</i><sub>H</sub>. Balmer first line = 3 → 2:<br>1/<i>λ</i> = <i>R</i><sub>H</sub>(1/4 − 1/9) = 5<i>R</i><sub>H</sub>/36 = 5/(36<i>X</i>)',
          'A common wrong answer is 9<i>X</i>/5, which comes from using 5/9 for the bracket instead of 1/4 − 1/9 = 5/36 (the lower level of the Balmer series is <i>n</i> = 2, so the first term is 1/4).',
          '<b>Sanity check:</b> the 3 → 2 gap is only 5/36 of the Lyman-limit gap, so the wavelength must be about 7 times <i>X</i>, not 1.8 times — for <i>X</i> ≈ 91 nm this gives 656 nm, the red Balmer line.',
        ],
        ans: '<i>λ</i> = 36<i>X</i>/5 = 7.2<i>X</i>.',
      },
      {
        t: 'ex',
        tag: 'NEET/JEE Main — Lines by region from the fifth shell',
        q: 'A sample of hydrogen atoms is excited to the 4th excited state and de-excites to the ground state. How many lines appear (i) in total, (ii) in the UV region, (iii) in the visible region, (iv) in the Paschen series?',
        steps: [
          'The 4th excited state is <i>n</i> = 5 (the ground state is the zeroth excited state — another common slip). Counts:<br>• total: 5 × 4/2 = 10;<br>• UV = Lyman (end at 1): 5 − 1 = 4;<br>• visible = Balmer (end at 2): 5 − 2 = 3;<br>• Paschen (end at 3): 5 − 3 = 2.',
          'In the standard form of this question, the statement “one line in the Paschen series” is the incorrect one — there are 2.',
        ],
        ans: '10 total; 4 UV; 3 visible; 2 Paschen.',
      },
      {
        t: 'ex',
        tag: 'JEE Main — Identifying an unknown one-electron ion',
        q: 'For the same transition between similar orbits, the wavelength emitted by He<sup>+</sup> is 16<i>x</i> units while an unknown one-electron species emits 4<i>x</i> units. Identify the species.',
        steps: [
          'Same transition, so <i>λ</i> ∝ 1/<i>Z</i><sup>2</sup>:<br><i>λ</i><sub>He⁺</sub>/<i>λ</i><sub>unk</sub> = <i>Z</i><sub>unk</sub><sup>2</sup>/<i>Z</i><sub>He</sub><sup>2</sup> ⇒ 16<i>x</i>/(4<i>x</i>) = <i>Z</i><sub>unk</sub><sup>2</sup>/4 ⇒ <i>Z</i><sub>unk</sub><sup>2</sup> = 16',
          'The single step <i>λ</i> ∝ 1/<i>Z</i><sup>2</sup> (the chapter’s own <i>ν̄</i> ∝ <i>Z</i><sup>2</sup>) is the whole problem — the “unknown species” framing is decoration.',
        ],
        ans: '<i>Z</i> = 4, one electron: Be<sup>3+</sup>.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] List all transitions contributing to the Balmer series when hydrogen atoms de-excite from <i>n</i> = 5, and give their count.',
            a: '5 → 2, 4 → 2, 3 → 2: three lines.',
          },
          {
            q: '[JEE Main] The number of spectral lines in the visible region when electrons fall from the 5th shell to the 1st shell is (a) 10 (b) 3 (c) 4 (d) 2.',
            a: '(b) — visible = Balmer, 5 − 2 = 3; (a) is the total line count, the common distractor.',
          },
          {
            q: '[NEET] The longest wavelength of the Paschen series is how many times the longest wavelength of the Lyman series?',
            a: 'Longest Paschen: 4 → 3, <i>ν̄</i> = <i>R</i><sub>H</sub>(1/9 − 1/16) = 7<i>R</i><sub>H</sub>/144; longest Lyman: 2 → 1, <i>ν̄</i> = 3<i>R</i><sub>H</sub>/4; ratio of wavelengths = (3/4)/(7/144) = 108/7 ≈ 15.4.',
          },
          {
            q: '[JEE Advanced] The wavelength of the second line of the Balmer series of hydrogen is how many times the first line of the Lyman series?',
            a: 'Second Balmer line: 4 → 2, <i>ν̄</i> = <i>R</i><sub>H</sub>(1/4 − 1/16) = 3<i>R</i><sub>H</sub>/16; first Lyman line: 3<i>R</i><sub>H</sub>/4; wavelength ratio = (3/4)/(3/16) = 4.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 110–111 ─────────────────────────
  {
    n: 'D',
    title: 'Degeneracy, Unpaired Electrons and Spin Bookkeeping',
    extra: true,
    kalam: 'Degeneracy has two regimes — know which one you are in.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter defines the four quantum numbers, the (<i>n</i> + <i>l</i>) rule and the three filling principles. What it only touches on — and what the exams return to repeatedly — is the precise meaning of degenerate in the two regimes, and the counting of unpaired electrons and net spin from a configuration.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Degeneracy has two regimes — know which one you are in.</b><br>• <b>One-electron species (H, He<sup>+</sup>, Li<sup>2+</sup>, …):</b> energy depends on <i>n</i> alone, so all subshells of a shell are degenerate: 2s = 2p, 3s = 3p = 3d. The degeneracy of level <i>n</i> is the number of orbitals in the shell, <i>n</i><sup>2</sup> (the <i>n</i> = 3 level of hydrogen is 9-fold degenerate, not 3-fold).<br>• <b>Multi-electron atoms:</b> shielding splits the subshells; orbitals are degenerate only within a subshell (the three 2p orbitals are degenerate with each other, but 2p and 2s are not).',
      },
      {
        t: 'p',
        html: 'A pair of electrons sits in degenerate orbitals exactly when their orbitals share the same subshell in a multi-electron atom — same <i>n</i> and same <i>l</i> — or the same <i>n</i> in a one-electron species. Different <i>n</i> or different <i>l</i> (multi-electron case) means different energy.',
      },
      {
        t: 'p',
        html: '<b>Unpaired-electron counting.</b> Fill the valence subshell with Hund’s rule: spread singly, parallel spins, then pair. The unpaired count <i>n</i><sub>u</sub> drives magnetism: species with <i>n</i><sub>u</sub> = 0 are diamagnetic, <i>n</i><sub>u</sub> > 0 paramagnetic, and the spin-only magnetic moment the examiners use is <i>μ</i> = √(<i>n</i><sub>u</sub>(<i>n</i><sub>u</sub> + 2)) BM — so a d<sup>9</sup> ion (<i>n</i><sub>u</sub> = 1) is less magnetic than d<sup>3</sup> (<i>n</i><sub>u</sub> = 3), a reversal of the naive “more d electrons, more magnetic” instinct. For the d subshell: d<sup>1</sup>, d<sup>2</sup>, d<sup>3</sup>, d<sup>4</sup> have 1, 2, 3, 4 unpaired; d<sup>5</sup> has 5 (all singly occupied); then pairing begins: d<sup>6</sup>, d<sup>7</sup>, d<sup>8</sup>, d<sup>9</sup>, d<sup>10</sup> have 4, 3, 2, 1, 0.',
      },
      {
        t: 'p',
        html: '<b>Net spin sum.</b> Paired electrons cancel (+½ and −½), so the sum of spin quantum numbers over a configuration equals ±<i>n</i><sub>u</sub>/2 — for 3d<sup>7</sup> it is ±3/2, not 7/2 (that counts the paired electrons as if they all shared one spin, the common error).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main — Pairs in degenerate orbitals',
        q: 'Consider the pairs of electrons: (A) (3, 1, 1, +½) and (3, 2, 1, +½); (B) (3, 2, −2, −½) and (3, 2, −1, −½); (C) (4, 2, 2, +½) and (3, 2, 2, +½). Which pairs occupy degenerate orbitals?',
        steps: [
          'Read (<i>n</i>, <i>l</i>, <i>m</i><sub><i>l</i></sub>, <i>m</i><sub><i>s</i></sub>) and apply the multi-electron rule (same <i>n</i> and same <i>l</i>):<br>• (A): 3p vs 3d — different <i>l</i>, different energy. Not degenerate.<br>• (B): both 3d — same subshell, different orbitals of it (<i>m</i><sub><i>l</i></sub> = −2 and −1). Degenerate.<br>• (C): 4d vs 3d — different <i>n</i>. Not degenerate.',
          'The trap is pair (A): in hydrogen 3p and 3d are degenerate, but the question’s electrons-with-spins framing places it in a multi-electron atom, where the (<i>n</i> + <i>l</i>) splitting applies. Naming the regime before answering is the skill being tested.',
        ],
        ans: 'Only (B).',
      },
      {
        t: 'ex',
        tag: 'JEE Main — Lowest magnetic moment',
        q: 'Which configuration is associated with the lowest magnetic moment: d<sup>2</sup>, d<sup>3</sup>, d<sup>4</sup> or d<sup>9</sup>?',
        steps: [
          'Count unpaired electrons with Hund’s rule: d<sup>2</sup> → 2, d<sup>3</sup> → 3, d<sup>4</sup> → 4, d<sup>9</sup> → 1 (four pairs + one single). With <i>μ</i> = √(<i>n</i><sub>u</sub>(<i>n</i><sub>u</sub> + 2)) BM, the ordering of moments follows <i>n</i><sub>u</sub> exactly, so d<sup>9</sup> (<i>n</i><sub>u</sub> = 1, <i>μ</i> = √3 = 1.73 BM) is the lowest.',
          'The instinct “more electrons means more magnetism” picks d<sup>2</sup> as the lowest; Hund pairing reverses the trend after d<sup>5</sup>, so d<sup>9</sup>, with one unpaired electron, is lower still.',
        ],
        ans: 'd<sup>9</sup>.',
      },
      {
        t: 'ex',
        tag: 'NEET statement analysis — Sum of spins in 3d7',
        q: 'True or false: “the sum of the electronic spins of all electrons in a 3d<sup>7</sup> configuration is +7/2.”',
        steps: [
          'Fill five d orbitals by Hund: five singly occupied, then two orbitals pair up. Unpaired count <i>n</i><sub>u</sub> = 3. Paired electrons contribute +½ − ½ = 0 each pair, so the net sum is 3 × (±½) = ±3/2.',
          'Only the unpaired electrons contribute to the net spin.',
        ],
        ans: 'False — the sum is +3/2 or −3/2, never 7/2.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What is the degeneracy (number of same-energy orbitals) of the <i>n</i> = 4 level in a hydrogen atom? What survives of it in a multi-electron atom?',
            a: '<i>n</i><sup>2</sup> = 16 (one 4s + three 4p + five 4d + seven 4f), all degenerate in hydrogen. In a multi-electron atom shielding splits them into four distinct subshell energies; only the orbitals within each subshell stay degenerate.',
          },
          {
            q: '[NEET] The number of unpaired electrons in Fe<sup>3+</sup> (<i>Z</i> = 26) is (a) 3 (b) 4 (c) 5 (d) 6.',
            a: '(c): Fe<sup>3+</sup> is [Ar] 3d<sup>5</sup> (4s empties first); d<sup>5</sup> has five unpaired electrons.',
          },
          {
            q: '[JEE Main] Arrange d<sup>1</sup>, d<sup>5</sup>, d<sup>8</sup>, d<sup>10</sup> in increasing order of spin-only magnetic moment.',
            a: 'd<sup>10</sup> (<i>n</i><sub>u</sub> = 0) < d<sup>1</sup> (1) < d<sup>8</sup> (2) < d<sup>5</sup> (5).',
          },
          {
            q: '[JEE Advanced] In a one-electron ion, one electron has (<i>n</i>, <i>l</i>, <i>m</i><sub><i>l</i></sub>, <i>m</i><sub><i>s</i></sub>) = (4, 1, 0, +½) and another has (4, 2, −1, −½). Are their orbitals degenerate? Would your answer change for a multi-electron atom?',
            a: 'Yes in the one-electron ion — same <i>n</i> = 4 suffices. No in a multi-electron atom — 4p and 4d are split by shielding. Regime first, always.',
          },
        ],
      },
    ],
  },

  // ─────────────── Additional topic E (the book's Addendum P) · pp. 111–116 ───────────────
  {
    n: 'E',
    title: 'What JEE and NEET Actually Ask',
    extra: true,
    kalam: 'The previous-year questions on this chapter divide into six piles.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      { t: 'p', html: 'The previous-year questions on this chapter divide into six piles:' },
      {
        t: 'table',
        title: null,
        head: ['Pile', 'Number of questions', 'Typical face'],
        rows: [
          ['Subatomic particles & early models', '15', 'Rutherford’s foil metal, <i>e</i>/<i>m</i> independence of gas, isotopes/isobars/isotones, fundamental particles, Thomson model statements'],
          ['Planck, EM spectrum & photoelectric effect', '10', 'threshold/work function numericals, intensity-vs-frequency statements, EM ordering, Planck postulates'],
          ['Bohr model & spectra', '13', 'radius/energy/time-period ratios, line counts, series limits, <i>λ</i> ∝ 1/<i>Z</i><sup>2</sup> species ID'],
          ['de Broglie & Heisenberg', '3', '<i>λ</i> vs KE scaling, uncertainty numerical'],
          ['Quantum numbers, nodes & orbitals', '11', 'valid QN sets, node counts, nodal planes of d orbitals, angular momentum √(<i>l</i>(<i>l</i> + 1)) <i>h</i>/(2π), radial probability curves'],
          ['Configurations, degeneracy & spin', '8', 'filling order, ion configurations, degenerate pairs, unpaired counts, half-filled stability reasons'],
        ],
      },
      {
        t: 'p',
        html: 'Three structural observations. First, <b>NEET’s share is dominated by assertion–reason and statement items on the historical and conceptual material</b> (Thomson’s model, Planck’s postulates, isotopes, Bohr’s limits) — free marks if the facts are exact. Second, <b>JEE Main owns the numerical and matching formats</b>: quantum-number matching, radial-curve identification, time-period ratios, and the degenerate-pair items that JEE Main has set. Third, several questions are cross-topic in disguise: the 242 kJ mol<sup>−1</sup> Cl–Cl bond question is filed under bonding but is pure <i>E</i> = <i>hc</i>/<i>λ</i> per-bond arithmetic; the photoelectron-in-a-magnetic-field item is photoelectric effect plus circular motion. The chapter’s formulas are being used as tools elsewhere.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>Archetype 1 — Discovery-fact one-liners and assertion–reason pairs</b>' },
      {
        t: 'p',
        html: '<b>Shape.</b> “Rutherford’s foil was gold”; “<i>e</i>/<i>m</i> of the electron does not depend on the gas in the discharge tube”; “isobars have the same (p + n) sum but different p”; “electrons, protons and neutrons are fundamental particles… except protium has no neutron”.<br><br><b>Approach.</b> Cold recall, but with the reasons attached, because NEET’s assertion–reason format tests the linkage: e/m of cathode rays is constant because the electron is universal; isotopes share chemical behaviour because they share electronic configuration.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Assertion: the <i>e</i>/<i>m</i> ratio of cathode rays is always constant. Reason: the <i>e</i>/<i>m</i> of the neutron is zero.',
        steps: [
          'Both statements are true — cathode rays are electrons whatever the gas or electrode, and a neutral particle indeed has zero specific charge — but the neutron’s <i>e</i>/<i>m</i> does not explain the electron’s constancy.',
          'The trap options punish anyone who decides truth values without then asking the separate “does R explain A?” question.',
        ],
        ans: 'Both true, not the correct explanation.',
      },
      { t: 'p', html: '<b>Archetype 2 — Bohr scaling without a calculator</b>' },
      {
        t: 'p',
        html: '<b>Shape.</b> Ratio of radii/energies/velocities/time periods between orbits or between one-electron ions; radius of He<sup>+</sup>’s first orbit given hydrogen’s 53 pm; wavelength of He<sup>+</sup> given hydrogen’s.<br><br><b>Approach.</b> The four scalings — <i>r</i> ∝ <i>n</i><sup>2</sup>/<i>Z</i>, |<i>E</i>| ∝ <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup>, <i>v</i> ∝ <i>Z</i>/<i>n</i>, and Addendum A’s <i>T</i> ∝ <i>n</i><sup>3</sup>/<i>Z</i><sup>2</sup> — applied as pure ratios.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Bohr radius of hydrogen is 53 pm; the first orbit of He<sup>+</sup> is 53/2 = 26.5 ≈ 27 pm (JEE Main).',
        steps: ['One division; the distractors are 106 pm (multiplying by <i>Z</i> instead of dividing) and 75 pm (scaling by √<i>Z</i>).'],
        ans: '',
      },
      { t: 'p', html: '<b>Archetype 3 — Photoelectric effect: equation and vocabulary</b>' },
      {
        t: 'p',
        html: '<b>Shape.</b> Threshold frequency given, incident frequency given, find KE<sub>max</sub>; or statement sets on what intensity vs frequency control; or per-bond energy to wavelength (“longest wavelength that breaks one Cl–Cl bond, 242 kJ mol<sup>−1</sup>” → 494 nm).<br><br><b>Approach.</b> KE<sub>max</sub> = <i>hν</i> − <i>hν</i><sub>0</sub>; frequency sets the electron’s energy, intensity sets the electron count; <i>hc</i> = 1240 eV nm; per-mole energies divide by <i>N</i><sub>A</sub> before entering <i>E</i> = <i>hc</i>/<i>λ</i>.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Threshold <i>ν</i><sub>0</sub> = 5.0 × 10<sup>14</sup> s<sup>−1</sup>, incident <i>ν</i> = 8.0 × 10<sup>14</sup> s<sup>−1</sup> (NEET):',
        steps: [
          'KE<sub>max</sub> = <i>h</i>(<i>ν</i> − <i>ν</i><sub>0</sub>) = 6.626 × 10<sup>−34</sup> × 3.0 × 10<sup>14</sup>',
          'The distractor 5.3 × 10<sup>−19</sup> J is <i>hν</i> without subtracting the work function — the common slip.',
        ],
        ans: 'KE<sub>max</sub> = 2.0 × 10<sup>−19</sup> J.',
      },
      { t: 'p', html: '<b>Archetype 4 — Quantum numbers: validity, matching, and what each one means</b>' },
      {
        t: 'p',
        html: '<b>Shape.</b> “Which set is not permissible”; match-the-column orbital ↔ (<i>n</i>, <i>l</i>, <i>m</i><sub><i>l</i></sub>); statement items on what <i>m</i><sub><i>l</i></sub> tells you; “spin quantum number comes from Schrödinger’s equation” (false — it is not a Schrödinger output).<br><br><b>Approach.</b> The validity chain <i>l</i> < <i>n</i>, |<i>m</i><sub><i>l</i></sub>| ≤ <i>l</i>, <i>m</i><sub><i>s</i></sub> = ±½, plus the address meaning: <i>n</i> size/energy, <i>l</i> shape, <i>m</i><sub><i>l</i></sub> orientation, <i>m</i><sub><i>s</i></sub> spin.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which of these sets (<i>n</i>, <i>l</i>, <i>m</i><sub><i>l</i></sub>, <i>m</i><sub><i>s</i></sub>) is not permissible: (i) (3, 2, −2, +½), (ii) (2, 2, 0, −½), (iii) (4, 0, 0, +½), (iv) (3, 1, +1, −½)?',
        steps: [
          'Set (ii) is impossible because <i>l</i> must be < <i>n</i> (here 2 ≮ 2); the other three sets pass the whole chain.',
          'Ten seconds with the chain, and the chapter’s own drill.',
        ],
        ans: '',
      },
      { t: 'p', html: '<b>Archetype 5 — Nodes and orbital shapes</b>' },
      {
        t: 'p',
        html: '<b>Shape.</b> “An orbital has no angular nodes and two radial nodes — identify it” (3s); “which planes are nodal for d<sub><i>zx</i></sub>”; “nodal planes of d<sub><i>z</i>²</sub>” (none — its angular nodes are conical surfaces, not planes).<br><br><b>Approach.</b> Angular nodes = <i>l</i>, radial = <i>n</i> − <i>l</i> − 1, total = <i>n</i> − 1; then the geometry: p<sub><i>y</i></sub>’s nodal plane is the <i>xz</i>-plane; d<sub><i>xy</i></sub>, d<sub><i>yz</i></sub>, d<sub><i>zx</i></sub> each have two nodal planes (for d<sub><i>zx</i></sub>: the <i>xy</i>-plane, where <i>z</i> = 0, and the <i>yz</i>-plane, where <i>x</i> = 0); d<sub><i>x</i>²−<i>y</i>²</sub> has the planes bisecting the axes; d<sub><i>z</i>²</sub> has cones instead of planes.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '“No angular nodes” forces <i>l</i> = 0 (s orbital); “two radial nodes” forces <i>n</i> − 1 = 2, i.e. <i>n</i> = 3: the orbital is 3s (JEE Main).',
        steps: [],
        ans: '',
      },
      { t: 'p', html: '<b>Archetype 6 — Configurations, ions, degeneracy and spin</b>' },
      {
        t: 'p',
        html: '<b>Shape.</b> Filling-order sequences; ion configurations (Fe<sup>2+</sup>, Fe<sup>3+</sup>); pairs of ions with identical configuration (Fe<sup>3+</sup> and Mn<sup>2+</sup>, both 3d<sup>5</sup>); the degenerate-pair item of the first worked example of Additional topic D; unpaired counts and magnetic-moment ordering; why half-filled subshells are extra-stable.<br><br><b>Approach.</b> Write the neutral atom, strip the highest-<i>n</i> electrons for cations, apply Hund for unpaired counts, and keep the two degeneracy regimes of Addendum D separate.',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'mistakes',
        items: [
          '<b>Degeneracy regime confusion.</b> In hydrogen, 3p and 3d are degenerate; in every multi-electron atom they are not. Pair (A) of the first worked example of Additional topic D exists to catch hydrogen-thinking.',
          '<b>Time period scales as <i>n</i><sup>3</sup>, not <i>n</i><sup>2</sup>.</b> The radius scaling is the misapplied cousin; Addendum A exists because of this trap.',
          '<b>KE quadrupled ⇒ <i>λ</i> halved.</b> <i>λ</i> = <i>h</i>/√(2<i>m</i> KE), so wavelength varies inversely as the square root of kinetic energy; “quartered” and “doubled” are the common slips.',
          '<b>KE<sub>max</sub> cannot exceed the photon energy.</b> Photoelectron KE is <i>hν</i> − <i>W</i><sub>0</sub> < <i>hν</i>; brightness moves only the count, never the per-electron energy.',
          '<b>Shortest wavelength = biggest gap.</b> The series limit is ∞ → <i>n</i><sub>1</sub>; the “first line” is the longest wavelength. Swapping the two inverts every series conversion (in the first worked example of Additional topic C, taking the Balmer limit instead of its first line gives 4<i>X</i>, not 36<i>X</i>/5).',
          '<b>Cations strip 4s before 3d.</b> Fe<sup>2+</sup> is 3d<sup>6</sup>, never 3d<sup>4</sup>4s<sup>2</sup> — highest <i>n</i> leaves first.',
          '<b>4th excited state is <i>n</i> = 5.</b> Ground state is the zeroth; every “excited state” question tests this off-by-one.',
          '<b>d<sub><i>z</i>²</sub> has no nodal planes.</b> Its two angular nodes are cones — statement items count on you writing “2 planes”.',
          '<b>Spin sums ignore paired electrons.</b> 3d<sup>7</sup> has net spin ±3/2; +7/2 counts pairs that cancel.',
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      { t: 'p', html: '<b>Level 1 — Direct Recall</b>' },
      {
        t: 'practice',
        items: [
          {
            q: 'The element used in Rutherford’s scattering experiment was (a) gold (b) tin (c) silver (d) lead.',
            a: '(a). Gold is the most malleable metal and can be hammered into foil only about 100 nm thick, thin enough for most <i>α</i>-particles to pass through and for single large-angle deflections to be seen.',
          },
          {
            q: 'Which is an isobar of <sup>14</sup><sub>6</sub>C: (a) <sup>13</sup><sub>6</sub>C (b) <sup>14</sup><sub>7</sub>N (c) <sup>14</sup><sub>6</sub>C (d) <sup>15</sup><sub>7</sub>N?',
            a: '(b). Same mass number (14), different atomic number — the definition of isobars; (a) is an isotope, (c) the atom itself.',
          },
          {
            q: 'The energy of a photon is inversely proportional to its (a) wavelength (b) frequency (c) wave number (d) velocity.',
            a: '(a). <i>E</i> = <i>hc</i>/<i>λ</i>; energy is directly proportional to frequency and wave number, and <i>c</i> is constant.',
          },
        ],
      },
      { t: 'p', html: '<b>Level 2 — Applied Understanding</b>' },
      {
        t: 'practice',
        items: [
          {
            q: 'If the kinetic energy of a particle is quadrupled, its de Broglie wavelength becomes (a) quadrupled (b) doubled (c) one-fourth (d) half.',
            a: '(d). <i>λ</i> = <i>h</i>/√(2<i>m</i> KE) ∝ 1/√KE; √4 = 2, so <i>λ</i> → <i>λ</i>/2.',
          },
          {
            q: 'The orbital angular momentum of a 4d electron is (a) zero (b) √2 <i>h</i>/(2π) (c) √6 <i>h</i>/(2π) (d) 2√3 <i>h</i>/(2π).',
            a: '(c). <i>l</i> = 2, so <i>L</i> = √(<i>l</i>(<i>l</i> + 1)) <i>h</i>/(2π) = √6 <i>h</i>/(2π); (b) is the p value, (a) the s value.',
          },
          {
            q: 'How many electrons in chromium (<i>Z</i> = 24, ground state) have <i>l</i> = 2?',
            a: 'Cr is [Ar] 3d<sup>5</sup>4s<sup>1</sup> (half-filled anomaly); the five 3d electrons have <i>l</i> = 2. Answer: 5. (Writing 3d<sup>4</sup>4s<sup>2</sup> first and answering 4 is the common slip.)',
          },
          {
            q: 'The first line of the Lyman series of hydrogen is at 1216 Å. The first Lyman line of He<sup>+</sup> is at (a) 1216 Å (b) 608 Å (c) 304 Å (d) 2432 Å.',
            a: '(c). Same transition, <i>λ</i> ∝ 1/<i>Z</i><sup>2</sup>: 1216/4 = 304 Å.',
          },
        ],
      },
      { t: 'p', html: '<b>Level 3 — Multi-step Reasoning</b>' },
      {
        t: 'practice',
        items: [
          {
            q: 'The threshold frequency of a metal is 5.0 × 10<sup>14</sup> s<sup>−1</sup>. Light of frequency 8.0 × 10<sup>14</sup> s<sup>−1</sup> falls on it. Find the maximum KE of the photoelectrons in joules. (<i>h</i> = 6.626 × 10<sup>−34</sup> J s.)',
            a: 'KE<sub>max</sub> = <i>h</i>(<i>ν</i> − <i>ν</i><sub>0</sub>) = 6.626 × 10<sup>−34</sup> × 3.0 × 10<sup>14</sup> ≈ 2.0 × 10<sup>−19</sup> J.',
          },
          {
            q: 'Hydrogen atoms are excited to the 4th excited state and de-excite. Find the number of lines in the UV, visible and Paschen regions.',
            a: '4th excited state = <i>n</i> = 5: UV (Lyman) = 4, visible (Balmer) = 3, Paschen = 2 — ten lines in all.',
          },
          {
            q: 'The energy required to break one mole of Cl–Cl bonds is 242 kJ mol<sup>−1</sup>. Find the longest wavelength capable of breaking a single bond. (<i>h</i> = 6.626 × 10<sup>−34</sup> J s, <i>c</i> = 3 × 10<sup>8</sup> m s<sup>−1</sup>, <i>N</i><sub>A</sub> = 6.02 × 10<sup>23</sup> mol<sup>−1</sup>.)',
            a: 'Per bond: <i>E</i> = (242 × 10<sup>3</sup>)/(6.02 × 10<sup>23</sup>) = 4.02 × 10<sup>−19</sup> J. Then<br><i>λ</i> = <i>hc</i>/<i>E</i> = (6.626 × 10<sup>−34</sup> × 3 × 10<sup>8</sup>)/(4.02 × 10<sup>−19</sup>) = 4.94 × 10<sup>−7</sup> m = 494 nm.<br>(Longest wavelength ↔ minimum sufficient energy — exactly one bond’s worth.)',
          },
          {
            q: 'For He<sup>+</sup>, find the ratio of the time periods of revolution in the 3rd and 1st Bohr orbits.',
            a: '<i>T</i> ∝ <i>n</i><sup>3</sup>/<i>Z</i><sup>2</sup>; same ion, so <i>T</i><sub>3</sub> ∶ <i>T</i><sub>1</sub> = 27 ∶ 1.',
          },
        ],
      },

      { t: 'part', title: 'How the Addenda Fit the Chapter' },
      {
        t: 'p',
        html: 'The chapter derives <i>r</i><sub><i>n</i></sub> and <i>E</i><sub><i>n</i></sub> in full; Addendum A adds the <b>revolution clock</b> (<i>T</i>, <i>f</i> and the equivalent current) on which JEE Main ratio questions are built. NCERT’s <i>ψ</i><sup>2</sup>(<i>r</i>) plots are completed by the <b>radial probability distribution</b> 4π<i>r</i><sup>2</sup><i>ψ</i><sup>2</sup> of Addendum B, whose peak-count rule (<i>n</i> − <i>l</i>) the exams test by picture. Addendum C turns the Rydberg equation into drilled procedures for <b>line counts by region</b> and <b>series-to-series wavelength conversions</b>, and Addendum D separates the two meanings of degenerate (one-electron versus multi-electron) that JEE Main has probed.',
      },
    ],
  },
];
