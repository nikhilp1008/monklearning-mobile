import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Additional Topics I to K, word for word from the Class 11 Mathematics
 * Master Reference (October 2026 edition), "Chapter 2: Relations and Functions —
 * Additional Topics": I Periodicity of algebraic (non-trigonometric) functions
 * (pp. 164–168; it starts on p. 164 below Practice H), J Graph transformations of the
 * standard function library (pp. 168–172) and K Functional equations at Class-11 level
 * (pp. 172–176). Chapter 3 starts on p. 177. The letters are the book's (decision 9).
 *
 * Each addendum opens with its italic "Extends …" line (the Introduction), then its own
 * run-in headings: Method (I: its long "Six facts you can prove with Class 11 tools" a
 * part of its own), Worked examples, Practice (answers set against their questions).
 * I's own "Figure 4" (p. 166) is m11-02-I-d1 and J's "Figure 5" (p. 170) is m11-02-J-d1,
 * each where the book prints it. The addenda set's closing "Combined Cheat Sheet —
 * Addenda F–K" (p. 176) is K's last part, "Cheat sheet: Additional topics F to K".
 * Every fraction is stacked (<frac>), except inside a raised run.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic I · pp. 164–168 ─────────────────────────
  {
    n: 'I',
    title: 'Periodicity of algebraic (non-trigonometric) functions',
    extra: true,
    kalam: 'No non-constant monotone function is periodic.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 03’s Key definitions, formulas and notation part (the greatest-integer and fractional-part discussion).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Periodicity is usually introduced with sines and cosines, which leaves students believing it is a trigonometric idea. It is not. The fractional part {<i>x</i>} = <i>x</i> − [<i>x</i>] is the purest periodic function a Class 11 student meets, and JEE tests it constantly: inside limits, inside integrals, and on its own (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: '<b>Definition.</b> A function <i>f</i> is <b>periodic</b> if there exists a real number <i>T</i> > 0 such that for every <i>x</i> ∈ Dom(<i>f</i>), both <i>x</i> + <i>T</i> ∈ Dom(<i>f</i>) and<br><i>f</i>(<i>x</i> + <i>T</i>) = <i>f</i>(<i>x</i>).<br>Any such <i>T</i> is called <b>a period</b>. The smallest positive period, if one exists, is the <b>fundamental period</b>.',
      },
      {
        t: 'p',
        html: '<b>The caveat nobody states and examiners like to exploit: a smallest period need not exist.</b> A constant function satisfies <i>f</i>(<i>x</i> + <i>T</i>) = <i>f</i>(<i>x</i>) for every <i>T</i> > 0, so it is periodic but has no fundamental period. “Find the fundamental period of <i>f</i>(<i>x</i>) = 7” has the answer “there is none”, not “1”.',
      },

      { t: 'part', title: 'Six facts you can prove with Class 11 tools' },
      {
        t: 'p',
        html: '<b>(P1) {<i>x</i>} = <i>x</i> − [<i>x</i>] is periodic with fundamental period 1.</b> {<i>x</i> + 1} = (<i>x</i> + 1) − [<i>x</i> + 1] = (<i>x</i> + 1) − ([<i>x</i>] + 1) = <i>x</i> − [<i>x</i>] = {<i>x</i>}, so 1 is a period. If 0 < <i>T</i> < 1 were also a period, then taking <i>x</i> = 0 gives {<i>T</i>} = <i>T</i> while {0} = 0, and <i>T</i> ≠ 0. So no smaller period exists.',
      },
      {
        t: 'p',
        html: '<b>(P2) [<i>x</i>] is not periodic.</b> Suppose <i>T</i> > 0 were a period. Taking <i>x</i> = 0 gives [<i>T</i>] = [0] = 0, so 0 < <i>T</i> < 1. Now take <i>x</i> = −<frac><num><i>T</i></num><den>2</den></frac>, which lies in (−1, 0), so [<i>x</i>] = −1; but <i>x</i> + <i>T</i> = <frac><num><i>T</i></num><den>2</den></frac> lies in (0, 1), so [<i>x</i> + <i>T</i>] = 0. Then 0 = −1, a contradiction. (This is the standard one-mark trap: {<i>x</i>} is periodic, [<i>x</i>] is not, and they differ by <i>x</i>.)',
      },
      {
        t: 'p',
        html: '<b>(P3) No non-constant monotone function is periodic.</b> If <i>f</i> is non-decreasing with period <i>T</i>, take any <i>x</i> < <i>y</i> and a whole number <i>n</i> with <i>x</i> + <i>nT</i> ≥ <i>y</i>: then <i>f</i>(<i>x</i>) ≤ <i>f</i>(<i>y</i>) ≤ <i>f</i>(<i>x</i> + <i>nT</i>) = <i>f</i>(<i>x</i>), so <i>f</i> is constant. (For non-increasing <i>f</i>, apply this to −<i>f</i>.) This kills <i>x</i>, <i>x</i><sup>3</sup>, √<i>x</i>, 2<i>x</i> + 5 in one stroke, and |<i>x</i>| and <i>x</i><sup>2</sup> follow from <i>f</i>(0) = 0 < <i>f</i>(<i>T</i>).',
      },
      {
        t: 'p',
        html: '<b>(P4) Scaling rule.</b> If <i>f</i> has period <i>T</i>, then <i>g</i>(<i>x</i>) = <i>f</i>(<i>ax</i> + <i>b</i>) with <i>a</i> ≠ 0 has period <frac><num><i>T</i></num><den>|<i>a</i>|</den></frac>. <b>Proof:</b> <i>g</i>(<i>x</i> + <frac><num><i>T</i></num><den>|<i>a</i>|</den></frac>) = <i>f</i>(<i>ax</i> + <i>b</i> ± <i>T</i>) = <i>f</i>(<i>ax</i> + <i>b</i>) = <i>g</i>(<i>x</i>). If <i>T</i> was fundamental for <i>f</i>, then <frac><num><i>T</i></num><den>|<i>a</i>|</den></frac> is fundamental for <i>g</i>. So {3<i>x</i> − 1} has fundamental period <frac><num>1</num><den>3</den></frac>, and {<frac><num><i>x</i></num><den>4</den></frac>} has fundamental period 4.',
      },
      {
        t: 'formula',
        kicker: 'Period of <i>f</i>(<i>ax</i> + <i>b</i>)',
        main: 'Period of <i>f</i>(<i>ax</i> + <i>b</i>) = <frac><num><i>T</i></num><den>|<i>a</i>|</den></frac>',
        legend: [
          '<i>T</i> = a period of <i>f</i> (if <i>T</i> is fundamental for <i>f</i>, so is <frac><num><i>T</i></num><den>|<i>a</i>|</den></frac>)',
          '<i>a</i>, <i>b</i> = real constants, <i>a</i> ≠ 0',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>(P5) Sum rule (with its warning).</b> If <i>f</i> has period <i>T</i><sub>1</sub>, <i>g</i> has period <i>T</i><sub>2</sub>, and <frac><num><i>T</i><sub>1</sub></num><den><i>T</i><sub>2</sub></den></frac> is rational, then LCM(<i>T</i><sub>1</sub>, <i>T</i><sub>2</sub>) is <b>a</b> period of <i>f</i> ± <i>g</i> and of <i>fg</i>. It <b>need not be the fundamental one</b>; always test the obvious smaller candidates. For fractions in lowest terms, LCM(<frac><num><i>p</i></num><den><i>q</i></den></frac>, <frac><num><i>r</i></num><den><i>s</i></den></frac>) = <frac><num>LCM(<i>p</i>, <i>r</i>)</num><den>HCF(<i>q</i>, <i>s</i>)</den></frac>. If <i>T</i><sub>1</sub> and <i>T</i><sub>2</sub> are the <b>fundamental</b> periods and <frac><num><i>T</i><sub>1</sub></num><den><i>T</i><sub>2</sub></den></frac> is irrational, they have no common multiple, and for the functions you will meet (for example {<i>x</i>} + {√2<i>x</i>} or {<i>x</i>} + sin <i>x</i>) the sum is not periodic. (With <i>T</i><sub>1</sub>, <i>T</i><sub>2</sub> just any periods the rule fails: 5 has period √2 and {<i>x</i>} has period 1, yet 5 + {<i>x</i>} is periodic.)',
      },
      {
        t: 'formula',
        kicker: 'LCM of fractions',
        main: 'LCM(<frac><num><i>p</i></num><den><i>q</i></den></frac>, <frac><num><i>r</i></num><den><i>s</i></den></frac>) = <frac><num>LCM(<i>p</i>, <i>r</i>)</num><den>HCF(<i>q</i>, <i>s</i>)</den></frac>',
        legend: [
          '<frac><num><i>p</i></num><den><i>q</i></den></frac>, <frac><num><i>r</i></num><den><i>s</i></den></frac> = two positive fractions, each in lowest terms (two periods, say)',
          'LCM, HCF = lowest common multiple, highest common factor',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>(P6) An outer operation never lengthens a period.</b> If <i>f</i> has period <i>T</i>, then <i>h</i>(<i>f</i>(<i>x</i>)) has <i>T</i> as a period for any <i>h</i> (on the <i>x</i> where <i>h</i>(<i>f</i>(<i>x</i>)) is defined), possibly with a shorter fundamental period. So {<i>x</i>}<sup>2</sup>, √{<i>x</i>} and sgn({<i>x</i>}) all have period 1.',
      },
      {
        t: 'table',
        title: 'The standard algebraic table',
        head: ['Function', 'Fundamental period'],
        rows: [
          ['{<i>x</i>} = <i>x</i> − [<i>x</i>]', '1'],
          ['{<i>ax</i> + <i>b</i>}, <i>a</i> ≠ 0', '<frac><num>1</num><den>|<i>a</i>|</den></frac>'],
          ['[<i>x</i>] − <i>x</i>', '1'],
          ['(−1)<sup>[<i>x</i>]</sup>', '2'],
          ['sgn({<i>x</i>})', '1'],
          ['[<i>x</i>]', 'not periodic'],
          ['<i>x</i>, <i>x</i><sup>2</sup>, <i>x</i><sup>3</sup>, |<i>x</i>|, √<i>x</i>, sgn(<i>x</i>), <frac><num>1</num><den><i>x</i></den></frac>', 'not periodic'],
          ['any constant', 'periodic; <b>no</b> fundamental period'],
        ],
      },
      { t: 'fig', id: 'm11-02-I-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Find the fundamental period of each, or show that none exists.<br>(a) <i>f</i>(<i>x</i>) = {3<i>x</i> − 1}<br>(b) <i>f</i>(<i>x</i>) = (−1)<sup>[<i>x</i>]</sup><br>(c) <i>f</i>(<i>x</i>) = [<i>x</i>]<br>(d) <i>f</i>(<i>x</i>) = {<frac><num><i>x</i></num><den>2</den></frac>} + {<frac><num><i>x</i></num><den>3</den></frac>}<br>(e) <i>f</i>(<i>x</i>) = 7',
        steps: [
          '<b>(a)</b> <frac><num>1</num><den>3</den></frac>. By (P1) the fractional part has fundamental period 1; by (P4) with <i>a</i> = 3 the period becomes <frac><num>1</num><den>3</den></frac>. Directly: {3(<i>x</i> + <frac><num>1</num><den>3</den></frac>) − 1} = {3<i>x</i> − 1 + 1} = {3<i>x</i> − 1}. For minimality, {3<i>x</i> + 3<i>T</i> − 1} = {3<i>x</i> − 1} for all <i>x</i> forces 3<i>T</i> to be a positive integer, so <i>T</i> ≥ <frac><num>1</num><den>3</den></frac>.',
          '<b>(b)</b> 2. Since [<i>x</i> + 2] = [<i>x</i>] + 2, the exponent changes by 2 and the sign does not: (−1)<sup>[<i>x</i>]+2</sup> = (−1)<sup>[<i>x</i>]</sup>. So 2 is a period. Is there a smaller one? Any period <i>T</i> must satisfy <i>f</i>(<i>T</i>) = <i>f</i>(0) = 1, so [<i>T</i>] is even, and <i>T</i> < 2 then forces 0 < <i>T</i> < 1. For such a <i>T</i> take <i>x</i> = 1 − <i>T</i> ∈ (0, 1): <i>f</i>(<i>x</i>) = (−1)<sup>0</sup> = 1, but <i>f</i>(<i>x</i> + <i>T</i>) = <i>f</i>(1) = (−1)<sup>1</sup> = −1. That is a contradiction, so no period is smaller than 2 and the fundamental period is 2.',
          '<b>(c) Not periodic</b>, by the argument of (P2). Do not be tempted by “[<i>x</i>] repeats its shape every unit”: it repeats its shape, not its values, and periodicity is about values.',
          '<b>(d)</b> 6. {<frac><num><i>x</i></num><den>2</den></frac>} has period 2 and {<frac><num><i>x</i></num><den>3</den></frac>} has period 3 by (P4); the ratio <frac><num>2</num><den>3</den></frac> is rational, so LCM(2, 3) = 6 is a period. Now prove it is fundamental, and do it by argument rather than by testing candidates. Suppose <i>T</i> > 0 is a period. Then <i>f</i>(<i>T</i>) = <i>f</i>(0) = 0. But <i>f</i>(<i>T</i>) = {<frac><num><i>T</i></num><den>2</den></frac>} + {<frac><num><i>T</i></num><den>3</den></frac>} is a sum of two non-negative numbers, so both must vanish: {<frac><num><i>T</i></num><den>2</den></frac>} = 0 and {<frac><num><i>T</i></num><den>3</den></frac>} = 0, i.e. <i>T</i> is a multiple of 2 <b>and</b> a multiple of 3. Hence <i>T</i> ≥ 6, and 6 is fundamental.',
          '<b>(e) Periodic, but there is no fundamental period.</b> Every <i>T</i> > 0 satisfies <i>f</i>(<i>x</i> + <i>T</i>) = 7 = <i>f</i>(<i>x</i>), and the set of periods (0, ∞) has no smallest element.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A function <i>f</i> : ℝ → ℝ satisfies, for a fixed <i>a</i> > 0,<br><i>f</i>(<i>x</i> + <i>a</i>) = <frac><num>1</num><den>2</den></frac> + √(<i>f</i>(<i>x</i>) − (<i>f</i>(<i>x</i>))<sup>2</sup>) for every <i>x</i> ∈ ℝ.<br>Prove that <i>f</i> is periodic, and give a period.',
        steps: [
          'The whole problem is decided by one observation made before any algebra.',
          '<b>Step 1: pin down the values of <i>f</i>.</b> For the square root to be real we need <i>f</i>(<i>x</i>) − <i>f</i>(<i>x</i>)<sup>2</sup> ≥ 0, i.e. <i>f</i>(<i>x</i>)(1 − <i>f</i>(<i>x</i>)) ≥ 0, i.e. 0 ≤ <i>f</i>(<i>x</i>) ≤ 1 for every <i>x</i>. Moreover the right-hand side is <frac><num>1</num><den>2</den></frac> plus a non-negative number, so <i>f</i>(<i>x</i> + <i>a</i>) ≥ <frac><num>1</num><den>2</den></frac> for every <i>x</i>; and as <i>x</i> runs over all of ℝ so does <i>x</i> + <i>a</i>. Therefore<br><frac><num>1</num><den>2</den></frac> ≤ <i>f</i>(<i>y</i>) ≤ 1 for every real <i>y</i>.<br>(This step is the one students skip, and without it the proof cannot be finished.)',
          '<b>Step 2: apply the relation twice.</b> Write <i>u</i> = √(<i>f</i>(<i>x</i>) − <i>f</i>(<i>x</i>)<sup>2</sup>) ≥ 0, so <i>f</i>(<i>x</i> + <i>a</i>) = <frac><num>1</num><den>2</den></frac> + <i>u</i> and 1 − <i>f</i>(<i>x</i> + <i>a</i>) = <frac><num>1</num><den>2</den></frac> − <i>u</i>. Replacing <i>x</i> by <i>x</i> + <i>a</i>:<br><i>f</i>(<i>x</i> + 2<i>a</i>) = <frac><num>1</num><den>2</den></frac> + √(<i>f</i>(<i>x</i> + <i>a</i>) − <i>f</i>(<i>x</i> + <i>a</i>)<sup>2</sup>)<br>= <frac><num>1</num><den>2</den></frac> + √(<i>f</i>(<i>x</i> + <i>a</i>)(1 − <i>f</i>(<i>x</i> + <i>a</i>)))<br>= <frac><num>1</num><den>2</den></frac> + √((<frac><num>1</num><den>2</den></frac> + <i>u</i>)(<frac><num>1</num><den>2</den></frac> − <i>u</i>))<br>= <frac><num>1</num><den>2</den></frac> + √(<frac><num>1</num><den>4</den></frac> − <i>u</i><sup>2</sup>).',
          '<b>Step 3: recognise the surd.</b> Since <i>u</i><sup>2</sup> = <i>f</i>(<i>x</i>) − <i>f</i>(<i>x</i>)<sup>2</sup>,<br><frac><num>1</num><den>4</den></frac> − <i>u</i><sup>2</sup> = <frac><num>1</num><den>4</den></frac> − <i>f</i>(<i>x</i>) + <i>f</i>(<i>x</i>)<sup>2</sup> = (<i>f</i>(<i>x</i>) − <frac><num>1</num><den>2</den></frac>)<sup>2</sup>,<br>so √(<frac><num>1</num><den>4</den></frac> − <i>u</i><sup>2</sup>) = |<i>f</i>(<i>x</i>) − <frac><num>1</num><den>2</den></frac>|.',
          '<b>Step 4: cash in Step 1.</b> Because <i>f</i>(<i>x</i>) ≥ <frac><num>1</num><den>2</den></frac>, the modulus opens with a plus sign: |<i>f</i>(<i>x</i>) − <frac><num>1</num><den>2</den></frac>| = <i>f</i>(<i>x</i>) − <frac><num>1</num><den>2</den></frac>. Hence<br><i>f</i>(<i>x</i> + 2<i>a</i>) = <frac><num>1</num><den>2</den></frac> + <i>f</i>(<i>x</i>) − <frac><num>1</num><den>2</den></frac> = <i>f</i>(<i>x</i>) for every <i>x</i>.',
          'So <i>f</i> <b>is periodic with period 2<i>a</i></b>. ■',
          '<b>Remark: why the answer is “a period”, not “the fundamental period”.</b> Take <i>f</i> constant, <i>f</i> ≡ <i>c</i>. The relation becomes <i>c</i> = <frac><num>1</num><den>2</den></frac> + √(<i>c</i> − <i>c</i><sup>2</sup>), which rearranges to 8<i>c</i><sup>2</sup> − 8<i>c</i> + 1 = 0 and gives <i>c</i> = <frac><num>2 + √2</num><den>4</den></frac> ≈ 0.8536 (the root with <i>c</i> ≥ <frac><num>1</num><den>2</den></frac>). Check: <i>c</i> − <i>c</i><sup>2</sup> = <i>c</i>(1 − <i>c</i>) = <frac><num>2 + √2</num><den>4</den></frac> · <frac><num>2 − √2</num><den>4</den></frac> = <frac><num>2</num><den>16</den></frac> = <frac><num>1</num><den>8</den></frac>, and <frac><num>1</num><den>2</den></frac> + √(<frac><num>1</num><den>8</den></frac>) = <frac><num>1</num><den>2</den></frac> + <frac><num>√2</num><den>4</den></frac> = <i>c</i>. That solution is constant, so every positive number is one of its periods and it has no fundamental period at all. The theorem can only ever promise a period.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Fundamental period of {<frac><num><i>x</i></num><den>4</den></frac>}.',
            a: '4.',
          },
          {
            q: 'Fundamental period of {2<i>x</i>}.',
            a: '<frac><num>1</num><den>2</den></frac>.',
          },
          {
            q: 'Fundamental period of {<i>x</i>} + {2<i>x</i>}.',
            a: '1. (Periods 1 and <frac><num>1</num><den>2</den></frac>; LCM = 1, and <frac><num>1</num><den>2</den></frac> fails at <i>x</i> = 0 since <i>f</i>(0) = 0 but <i>f</i>(<frac><num>1</num><den>2</den></frac>) = <frac><num>1</num><den>2</den></frac> + 0 = <frac><num>1</num><den>2</den></frac>.) More fully: any period <i>T</i> needs <i>f</i>(<i>T</i>) = <i>f</i>(0) = 0, forcing {<i>T</i>} = 0, so <i>T</i> is a positive integer.',
          },
          {
            q: 'Fundamental period of (−1)<sup>[<i>x</i>/2]</sup>.',
            a: '4.',
          },
          {
            q: 'Fundamental period of [<i>x</i>] − <i>x</i>.',
            a: '1. (It equals −{<i>x</i>}.)',
          },
          {
            q: 'Is <i>f</i>(<i>x</i>) = [<i>x</i>] + {<i>x</i>} periodic?',
            a: 'No: it equals <i>x</i>, which is strictly increasing, so (P3) applies.',
          },
          {
            q: 'Fundamental period of sgn({<i>x</i>}).',
            a: '1. It is 0 at integers and 1 elsewhere; any period <i>T</i> needs <i>f</i>(<i>T</i>) = <i>f</i>(0) = 0, so <i>T</i> must be a positive integer.',
          },
          {
            q: 'Fundamental period of {<frac><num><i>x</i></num><den>3</den></frac>} + {<frac><num><i>x</i></num><den>5</den></frac>}.',
            a: '15. Same argument as the first worked example, part (d): <i>f</i>(<i>T</i>) = 0 forces <i>T</i> to be a multiple of both 3 and 5.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic J · pp. 168–172 ─────────────────────────
  {
    n: 'J',
    title: 'Graph transformations of the standard function library',
    extra: true,
    kalam: 'Most transformed graphs you will be asked for are one of nine moves, or a chain of them, applied to a curve you already know.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 03’s Key definitions, formulas and notation part (“Graphs of the standard functions”).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Topic 03 gave you six graphs to know on sight. This additional topic turns those six into several hundred. Most transformed graphs you will be asked for are one of nine moves, or a chain of them, applied to a curve you already know.',
      },
      {
        t: 'p',
        html: '<b>Procedure J: The nine moves.</b> Assume you can draw <i>y</i> = <i>f</i>(<i>x</i>), and let <i>k</i>, <i>h</i> > 0 and <i>c</i> > 0.',
      },
      {
        t: 'table',
        title: null,
        head: ['New rule', 'What happens to the graph', 'Memory hook'],
        rows: [
          ['<i>y</i> = <i>f</i>(<i>x</i>) + <i>k</i>', 'shift <b>up</b> <i>k</i>', 'outside the bracket, does what it says'],
          ['<i>y</i> = <i>f</i>(<i>x</i>) − <i>k</i>', 'shift <b>down</b> <i>k</i>', ''],
          ['<i>y</i> = <i>f</i>(<i>x</i> − <i>h</i>)', 'shift <b>right</b> <i>h</i>', 'inside the bracket, opposite sign'],
          ['<i>y</i> = <i>f</i>(<i>x</i> + <i>h</i>)', 'shift <b>left</b> <i>h</i>', ''],
          ['<i>y</i> = <i>c</i> <i>f</i>(<i>x</i>)', 'vertical stretch by factor <i>c</i> (a squash if <i>c</i> < 1)', 'multiplies the <i>y</i>-values'],
          ['<i>y</i> = <i>f</i>(<i>cx</i>)', 'horizontal squash by factor <i>c</i> (a stretch if <i>c</i> < 1)', 'divides the <i>x</i>-values'],
          ['<i>y</i> = −<i>f</i>(<i>x</i>)', 'reflect in the <i>x</i>-axis', ''],
          ['<i>y</i> = <i>f</i>(−<i>x</i>)', 'reflect in the <i>y</i>-axis', ''],
          ['<i>y</i> = |<i>f</i>(<i>x</i>)|', 'keep everything on or above the <i>x</i>-axis; <b>flip the part below it upward</b>', 'fold about the <i>x</i>-axis'],
          ['<i>y</i> = <i>f</i>(|<i>x</i>|)', '<b>delete</b> the <i>x</i> < 0 part; copy the <i>x</i> ≥ 0 part reflected into <i>x</i> < 0', 'fold about the <i>y</i>-axis; result is always even'],
          ['|<i>y</i>| = <i>f</i>(<i>x</i>)', 'keep only where <i>f</i>(<i>x</i>) ≥ 0; draw <i>f</i> <b>and</b> its mirror −<i>f</i> there', '<b>not a function</b>: vertical line test fails'],
        ],
      },
      {
        t: 'p',
        html: '<b>Two rules that prevent most of the errors.</b><br>1. <b>Inside the bracket, everything is backwards, and it happens first.</b> To read <i>y</i> = <i>f</i>(<i>cx</i> + <i>d</i>), factor out <i>c</i> first: <i>f</i>(<i>c</i>(<i>x</i> + <frac><num><i>d</i></num><den><i>c</i></den></frac>)). Then the chain is “squash horizontally by <i>c</i>, <b>then</b> shift left <frac><num><i>d</i></num><den><i>c</i></den></frac> (right if <frac><num><i>d</i></num><den><i>c</i></den></frac> is negative)”, in that order. Trying to read <i>cx</i> + <i>d</i> as a single shift of <i>d</i> is the classic mark-loser, because the shift is <frac><num><i>d</i></num><den><i>c</i></den></frac>, not <i>d</i>.<br>2. <b>|<i>f</i>(<i>x</i>)| and <i>f</i>(|<i>x</i>|) are different pictures and almost never the same.</b> |<i>f</i>(<i>x</i>)| agrees with <i>f</i> wherever <i>f</i> ≥ 0 and mirrors it upward elsewhere; <i>f</i>(|<i>x</i>|) agrees with <i>f</i> on <i>x</i> ≥ 0 and throws away what <i>f</i> did on <i>x</i> < 0 entirely.',
      },
      { t: 'fig', id: 'm11-02-J-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE / JEE Main Level',
        q: 'Starting from <i>y</i> = |<i>x</i>|, describe the chain of transformations that produces <i>y</i> = 3 − |2<i>x</i> − 4|. State the vertex, the <i>x</i>-intercepts, the slopes of the arms and the range.',
        steps: [
          '<b>Step 1: factor inside the modulus. This is the whole trick.</b><br>|2<i>x</i> − 4| = |2(<i>x</i> − 2)| = 2|<i>x</i> − 2|, so <i>y</i> = 3 − 2|<i>x</i> − 2|.<br>Written this way, every move is now readable. Attempting to read “2<i>x</i> − 4” as a shift of 4 gives the wrong vertex and the wrong slopes.',
          '<b>Step 2: the chain, in order.</b><br>1. <i>y</i> = |<i>x</i>|: the standard V, vertex (0, 0), arms of slope ±1.<br>2. <i>y</i> = |<i>x</i> − 2|: shift <b>right</b> 2. Vertex (2, 0).<br>3. <i>y</i> = 2|<i>x</i> − 2|: vertical stretch by 2. Vertex still (2, 0); arms now slope ±2.<br>4. <i>y</i> = −2|<i>x</i> − 2|: reflect in the <i>x</i>-axis. An inverted V, vertex (2, 0), arms ∓2.<br>5. <i>y</i> = 3 − 2|<i>x</i> − 2|: shift <b>up</b> 3. Vertex (2, 3).',
          '<b>Step 3: read off the answers.</b><br>• <b>Vertex</b> (2, 3), the maximum point.<br>• <i>x</i><b>-intercepts:</b> 2|<i>x</i> − 2| = 3 ⇒ |<i>x</i> − 2| = <frac><num>3</num><den>2</den></frac> ⇒ <i>x</i> = <frac><num>1</num><den>2</den></frac> or <i>x</i> = <frac><num>7</num><den>2</den></frac>.<br>• <b>Arms</b> have slopes +2 (left of the vertex) and −2 (right of it), not ±1. The stretch in move 3 of Step 2 is exactly what factoring exposed.<br>• <b>Range</b> (−∞, 3]: the graph is a downward V, so 3 is attained at <i>x</i> = 2 and everything below it is reached.',
          '<b>Spot check:</b> <i>y</i>(0) = 3 − 2|−2| = −1 and <i>y</i>(4) = 3 − 2|2| = −1, symmetric about <i>x</i> = 2 as a V must be. And <i>y</i>(1) = <i>y</i>(3) = 1.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Let <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 4<i>x</i> + 3.<br>(a) Describe the graphs of <i>y</i> = |<i>f</i>(<i>x</i>)|, <i>y</i> = <i>f</i>(|<i>x</i>|) and |<i>y</i>| = <i>f</i>(<i>x</i>).<br>(b) Hence find, for every real <i>k</i>, the number of real solutions of |<i>x</i><sup>2</sup> − 4<i>x</i> + 3| = <i>k</i>.',
        steps: [
          '<b>Step 0: know the parent curve.</b> <i>f</i>(<i>x</i>) = (<i>x</i> − 2)<sup>2</sup> − 1: an upward parabola with roots <i>x</i> = 1 and <i>x</i> = 3 and vertex (2, −1).',
          '<b>(a)</b><br>• <i>y</i> = |<i>f</i>(<i>x</i>)|. Outside [1, 3] the parabola already sits on or above the axis and is unchanged. On (1, 3) it dips below, so that arc flips upward into a hump of height 1 peaking at (2, 1), meeting the axis in corners at (1, 0) and (3, 0).<br>• <i>y</i> = <i>f</i>(|<i>x</i>|) = <i>x</i><sup>2</sup> − 4|<i>x</i>| + 3. Keep the <i>x</i> ≥ 0 branch of the parabola and mirror it into <i>x</i> < 0. The result is even: roots at <i>x</i> = ±1 and <i>x</i> = ±3, two vertices at (±2, −1), and a local maximum at (0, 3) with a corner there.<br>• |<i>y</i>| = <i>f</i>(<i>x</i>). This needs <i>f</i>(<i>x</i>) ≥ 0, i.e. <i>x</i> ≤ 1 or <i>x</i> ≥ 3; on the strip 1 < <i>x</i> < 3 there is no graph at all. Where it does exist, it consists of the parabola together with its reflection <i>y</i> = −<i>f</i>(<i>x</i>). It fails the vertical line test at every <i>x</i> < 1 and every <i>x</i> > 3 (two points, ±<i>f</i>(<i>x</i>)), so it is <b>not</b> a function.',
          '<b>(b)</b> Count intersections of <i>y</i> = |<i>f</i>(<i>x</i>)| with the horizontal line <i>y</i> = <i>k</i>, reading straight off the hump of height 1:<br>Number of real solutions for each <i>k</i>:<br><i>k</i> < 0: 0<br><i>k</i> = 0: 2<br>0 < <i>k</i> < 1: 4<br><i>k</i> = 1: 3<br><i>k</i> > 1: 2',
          '<b>Algebraic confirmation.</b> |<i>f</i>(<i>x</i>)| = <i>k</i> means <i>f</i>(<i>x</i>) = <i>k</i> or <i>f</i>(<i>x</i>) = −<i>k</i>, i.e. (<i>x</i> − 2)<sup>2</sup> = 1 + <i>k</i> or (<i>x</i> − 2)<sup>2</sup> = 1 − <i>k</i>. For <i>k</i> ≥ 0 the first always has 2 roots; the second has 2 roots if <i>k</i> < 1, one root (<i>x</i> = 2) if <i>k</i> = 1, and none if <i>k</i> > 1. At <i>k</i> = 0 the two families coincide, giving 2 distinct roots, not 4. Adding up reproduces the table exactly.',
          '<b>Spot checks.</b> <i>k</i> = <frac><num>1</num><den>2</den></frac>: <i>x</i> = 2 ± <frac><num>√6</num><den>2</den></frac> and <i>x</i> = 2 ± <frac><num>√2</num><den>2</den></frac>; four roots. <i>k</i> = 1: <i>x</i> = 2 ± √2 and <i>x</i> = 2; three roots. <i>k</i> = 3: <i>x</i> = 0 and <i>x</i> = 4; two roots.',
          'The transferable move: <b>a “how many solutions” question about |·| is a horizontal line sliding over a folded graph.</b> Draw the fold once and read off every case at a glance, instead of solving a family of quadratics.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Give the vertex, <i>x</i>-intercepts and range of <i>y</i> = |<i>x</i> − 1| − 2.',
            a: 'Vertex (1, −2); <i>x</i>-intercepts −1 and 3; range [−2, ∞).',
          },
          {
            q: 'Give the vertex, <i>x</i>-intercepts and range of <i>y</i> = 2 − |<i>x</i> + 3|.',
            a: 'Vertex (−3, 2); <i>x</i>-intercepts −5 and −1; range (−∞, 2].',
          },
          {
            q: 'Describe <i>y</i> = −[<i>x</i>] and state its range.',
            a: 'The staircase reflected in the <i>x</i>-axis: on [<i>n</i>, <i>n</i> + 1) the value is −<i>n</i>, filled at the left end. Range ℤ.',
          },
          {
            q: 'Are <i>y</i> = [<i>x</i> − 2] and <i>y</i> = [<i>x</i>] − 2 the same function? Justify.',
            a: 'Yes. [<i>x</i> − 2] = [<i>x</i>] − 2 for every real <i>x</i>, because shifting by an integer shifts the floor by the same integer. (This would fail for a non-integer shift: [<i>x</i> − 0.5] ≠ [<i>x</i>] − 0.5.)',
          },
          {
            q: 'Find the number of real solutions of |<i>x</i><sup>2</sup> − 2<i>x</i> − 3| = <i>k</i> for <i>k</i> = 0, 2, 4, 5.',
            a: 'Here <i>f</i>(<i>x</i>) = (<i>x</i> − 1)<sup>2</sup> − 4, so the fold has height 4: <i>k</i> = 0 → 2 solutions (<i>x</i> = −1, 3); <i>k</i> = 2 → 4; <i>k</i> = 4 → 3 (<i>x</i> = 1 and <i>x</i> = 1 ± 2√2); <i>k</i> = 5 → 2 (<i>x</i> = −2, 4).',
          },
          {
            q: 'Sketch-describe <i>y</i> = <i>x</i><sup>2</sup> − 2|<i>x</i>| − 3; give its roots and its range.',
            a: 'Even; the <i>x</i> ≥ 0 branch is (<i>x</i> − 1)<sup>2</sup> − 4 mirrored into <i>x</i> < 0. Roots <i>x</i> = ±3; twin minima −4 at <i>x</i> = ±1; local maximum −3 at <i>x</i> = 0. Range [−4, ∞).',
          },
          {
            q: 'Give the chain of transformations from <i>y</i> = <frac><num>1</num><den><i>x</i></den></frac> to <i>y</i> = 2 + <frac><num>1</num><den><i>x</i> − 3</den></frac>, and name the asymptotes.',
            a: 'Shift the rectangular hyperbola right 3, then up 2. Asymptotes <i>x</i> = 3 and <i>y</i> = 2.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic K · pp. 172–176 ─────────────────────────
  {
    n: 'K',
    title: 'Functional equations at Class-11 level',
    extra: true,
    kalam: 'Never quote a standard form when the equation carries an extra term.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 03’s Key procedures and logical framework part, and uses Additional topics G and H.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'A functional equation hands you a relationship that <i>f</i> obeys and asks you to extract <i>f</i> itself, or one value of it. There is no formula to memorise, but three techniques clear most problems at this level.',
      },
      {
        t: 'p',
        html: '<b>Technique 1: Strategic substitution.</b> The equation holds for all <i>x</i> and <i>y</i>, so you may choose them. The productive choices, roughly in order:<br>• <i>x</i> = <i>y</i> = 0, to get <i>f</i>(0), when 0 is in the domain (on (0, ∞) put <i>x</i> = <i>y</i> = 1 instead, to get <i>f</i>(1)). Do this first; it anchors everything else.<br>• <i>y</i> = 0 or <i>x</i> = 0 alone, to relate <i>f</i>(<i>x</i>) to <i>f</i>(0).<br>• <i>y</i> = −<i>x</i>, to force out the parity (Additional topic H).<br>• <i>y</i> = <i>x</i>, to get a doubling relation.<br>• <i>x</i> = <i>y</i> = 1, then <i>y</i> = 1 generally, to convert the equation into a recursion in <i>x</i>.<br>• <i>y</i> = <frac><num>1</num><den><i>x</i></den></frac>, when the equation involves products.',
      },
      {
        t: 'p',
        html: '<b>Technique 2: The paired-equation trick.</b> Suppose the equation ties <i>f</i>(<i>x</i>) to <i>f</i>(<i>u</i>(<i>x</i>)) where <i>u</i> is an involution: a map with <i>u</i>(<i>u</i>(<i>x</i>)) = <i>x</i>. The standard involutions are <i>u</i>(<i>x</i>) = <frac><num>1</num><den><i>x</i></den></frac>, <i>u</i>(<i>x</i>) = −<i>x</i>, <i>u</i>(<i>x</i>) = 1 − <i>x</i> and <i>u</i>(<i>x</i>) = <i>a</i> − <i>x</i>. Replace <i>x</i> by <i>u</i>(<i>x</i>) throughout to obtain a <b>second</b> equation in the same two unknowns <i>f</i>(<i>x</i>) and <i>f</i>(<i>u</i>(<i>x</i>)), then solve the pair as an ordinary 2 × 2 linear system. (Why an involution: applying <i>u</i> a second time brings you back to <i>f</i>(<i>x</i>), so two equations in two unknowns close the system. If <i>u</i> returns only after three steps, as <i>u</i>(<i>x</i>) = <frac><num>1</num><den>1 − <i>x</i></den></frac> does, you get three equations in three unknowns, which also closes; if <i>u</i> never returns, the system never closes.)',
      },
      {
        t: 'p',
        html: '<b>Technique 3: Recursion to a closed form.</b> If a substitution produces <i>f</i>(<i>x</i> + 1) in terms of <i>f</i>(<i>x</i>), iterate from the given value, list <i>f</i>(1), <i>f</i>(2), <i>f</i>(3), <i>f</i>(4), and sum the increments with the AP or GP formulas.',
      },
      {
        t: 'p',
        html: '<b>The four standard forms.</b> Each requires a mild regularity hypothesis (continuity at one point, or monotonicity, or boundedness on an interval), which JEE problems usually grant, by saying “<i>f</i> is continuous” or by asking only for values at integers. State the hypothesis when you quote them.',
      },
      {
        t: 'table',
        title: null,
        head: ['Equation, for all x, y in the stated set', 'General solution'],
        rows: [
          ['<i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>) + <i>f</i>(<i>y</i>) on ℝ', '<i>f</i>(<i>x</i>) = <i>kx</i>, with <i>k</i> = <i>f</i>(1)'],
          ['<i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>) <i>f</i>(<i>y</i>) on ℝ', '<i>f</i>(<i>x</i>) = <i>a</i><sup><i>x</i></sup> with <i>a</i> = <i>f</i>(1) > 0, or <i>f</i> ≡ 0'],
          ['<i>f</i>(<i>xy</i>) = <i>f</i>(<i>x</i>) + <i>f</i>(<i>y</i>) on (0, ∞)', '<i>f</i>(<i>x</i>) = <i>k</i> ln <i>x</i>'],
          ['<i>f</i>(<i>xy</i>) = <i>f</i>(<i>x</i>) <i>f</i>(<i>y</i>) on (0, ∞)', '<i>f</i>(<i>x</i>) = <i>x</i><sup><i>c</i></sup> for a real constant <i>c</i> (<i>c</i> = 0 gives <i>f</i> ≡ 1), or <i>f</i> ≡ 0'],
        ],
      },
      {
        t: 'p',
        html: '<b>Never quote a standard form when the equation carries an extra term.</b> An equation such as <i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>) + <i>f</i>(<i>y</i>) + <i>xy</i> is not the first row; the +<i>xy</i> changes the answer completely, as the second worked example shows.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A real function satisfies <i>f</i>(<i>x</i>) + 2<i>f</i>(<frac><num>1</num><den><i>x</i></den></frac>) = 3<i>x</i> for every <i>x</i> ≠ 0. Find <i>f</i>(<i>x</i>), and find all <i>x</i> for which <i>f</i>(<i>x</i>) = <i>f</i>(−<i>x</i>).',
        steps: [
          'The map <i>u</i>(<i>x</i>) = <frac><num>1</num><den><i>x</i></den></frac> satisfies <i>u</i>(<i>u</i>(<i>x</i>)) = <i>x</i>, so Technique 2 applies.',
          '<b>Step 1: the second equation.</b> Replace <i>x</i> by <frac><num>1</num><den><i>x</i></den></frac> throughout (legal, since <frac><num>1</num><den><i>x</i></den></frac> ≠ 0):<br>(1) <i>f</i>(<i>x</i>) + 2<i>f</i>(<frac><num>1</num><den><i>x</i></den></frac>) = 3<i>x</i>, (2) <i>f</i>(<frac><num>1</num><den><i>x</i></den></frac>) + 2<i>f</i>(<i>x</i>) = <frac><num>3</num><den><i>x</i></den></frac>.',
          '<b>Step 2: eliminate.</b> Compute 2 × (2) − (1):<br>(2<i>f</i>(<frac><num>1</num><den><i>x</i></den></frac>) + 4<i>f</i>(<i>x</i>)) − (<i>f</i>(<i>x</i>) + 2<i>f</i>(<frac><num>1</num><den><i>x</i></den></frac>)) = <frac><num>6</num><den><i>x</i></den></frac> − 3<i>x</i> ⟹ 3<i>f</i>(<i>x</i>) = <frac><num>6</num><den><i>x</i></den></frac> − 3<i>x</i>,<br><i>f</i>(<i>x</i>) = <frac><num>2</num><den><i>x</i></den></frac> − <i>x</i>, <i>x</i> ≠ 0.',
          '<b>Step 3: verify (never skip this on a functional equation).</b><br><i>f</i>(<i>x</i>) + 2<i>f</i>(<frac><num>1</num><den><i>x</i></den></frac>) = (<frac><num>2</num><den><i>x</i></den></frac> − <i>x</i>) + 2(2<i>x</i> − <frac><num>1</num><den><i>x</i></den></frac>) = <frac><num>2</num><den><i>x</i></den></frac> − <i>x</i> + 4<i>x</i> − <frac><num>2</num><den><i>x</i></den></frac> = 3<i>x</i>. ✓',
          '<b>Step 4: solve <i>f</i>(<i>x</i>) = <i>f</i>(−<i>x</i>).</b> Here <i>f</i>(−<i>x</i>) = −<frac><num>2</num><den><i>x</i></den></frac> + <i>x</i>, so<br><frac><num>2</num><den><i>x</i></den></frac> − <i>x</i> = −<frac><num>2</num><den><i>x</i></den></frac> + <i>x</i> ⟹ <frac><num>4</num><den><i>x</i></den></frac> = 2<i>x</i> ⟹ <i>x</i><sup>2</sup> = 2 ⟹ <i>x</i> = ±√2,<br>both of which are non-zero and hence legal.',
          '<b>The one-line route, using Additional topic H.</b> Notice that <i>f</i>(<i>x</i>) = <frac><num>2</num><den><i>x</i></den></frac> − <i>x</i> is <b>odd</b>. For an odd function <i>f</i>(−<i>x</i>) = −<i>f</i>(<i>x</i>), so the condition <i>f</i>(<i>x</i>) = <i>f</i>(−<i>x</i>) collapses to <i>f</i>(<i>x</i>) = −<i>f</i>(<i>x</i>), i.e. <i>f</i>(<i>x</i>) = 0, i.e. <frac><num>2</num><den><i>x</i></den></frac> = <i>x</i>, giving <i>x</i> = ±√2 immediately. Parity turns a two-line manipulation into a one-line one, which is the point of Additional topic H.',
        ],
        ans: '<i>f</i>(<i>x</i>) = <frac><num>2</num><den><i>x</i></den></frac> − <i>x</i> on ℝ ∖ {0}; <i>x</i> = ±√2.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A continuous function <i>f</i> : ℝ → ℝ satisfies<br><i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>) + <i>f</i>(<i>y</i>) + <i>xy</i> for all real <i>x</i>, <i>y</i>, <i>f</i>(1) = 3.<br>Find <i>f</i>(<i>n</i>) for every positive integer <i>n</i>, evaluate <i>f</i>(10), and determine <i>f</i>(<i>x</i>) for all real <i>x</i>.',
        steps: [
          'Note first what this is <b>not</b>: the +<i>xy</i> means the first standard form does not apply and <i>f</i>(<i>x</i>) = <i>kx</i> is wrong.',
          '<b>Step 1: anchor at zero.</b> Put <i>x</i> = <i>y</i> = 0: <i>f</i>(0) = <i>f</i>(0) + <i>f</i>(0) + 0, so <i>f</i>(0) = 0.',
          '<b>Step 2: turn it into a recursion.</b> Put <i>y</i> = 1:<br><i>f</i>(<i>x</i> + 1) = <i>f</i>(<i>x</i>) + <i>f</i>(1) + <i>x</i> = <i>f</i>(<i>x</i>) + 3 + <i>x</i>.',
          '<b>Step 3: iterate from <i>f</i>(1) = 3.</b><br><i>f</i>(2) = 3 + 3 + 1 = 7, <i>f</i>(3) = 7 + 3 + 2 = 12, <i>f</i>(4) = 12 + 3 + 3 = 18, <i>f</i>(5) = 18 + 3 + 4 = 25.<br>Summing the increments,<br><i>f</i>(<i>n</i>) = <i>f</i>(1) + ∑<sub><i>k</i>=1</sub><sup><i>n</i>−1</sup>(3 + <i>k</i>) = 3 + 3(<i>n</i> − 1) + <frac><num>(<i>n</i> − 1)<i>n</i></num><den>2</den></frac> = 3<i>n</i> + <frac><num><i>n</i>(<i>n</i> − 1)</num><den>2</den></frac>.<br>Check: <i>n</i> = 1, 2, 3, 4, 5 give 3, 7, 12, 18, 25. Matches. Hence<br><i>f</i>(10) = 30 + <frac><num>10 · 9</num><den>2</den></frac> = 30 + 45 = 75.',
          '<b>Step 4: the closed form for all real <i>x</i>.</b> The offending term is <i>xy</i>, and <i>xy</i> is exactly what <frac><num>1</num><den>2</den></frac><i>x</i><sup>2</sup> leaves behind: <frac><num>1</num><den>2</den></frac>(<i>x</i> + <i>y</i>)<sup>2</sup> − <frac><num>1</num><den>2</den></frac><i>x</i><sup>2</sup> − <frac><num>1</num><den>2</den></frac><i>y</i><sup>2</sup> = <i>xy</i>. So try <i>f</i>(<i>x</i>) = <frac><num>1</num><den>2</den></frac><i>x</i><sup>2</sup> + <i>cx</i>. Then<br><i>f</i>(<i>x</i> + <i>y</i>) − <i>f</i>(<i>x</i>) − <i>f</i>(<i>y</i>) = <frac><num>1</num><den>2</den></frac>(<i>x</i> + <i>y</i>)<sup>2</sup> + <i>c</i>(<i>x</i> + <i>y</i>) − <frac><num>1</num><den>2</den></frac><i>x</i><sup>2</sup> − <i>cx</i> − <frac><num>1</num><den>2</den></frac><i>y</i><sup>2</sup> − <i>cy</i> = <i>xy</i><br>for <b>every</b> <i>c</i>, and <i>f</i>(1) = <frac><num>1</num><den>2</den></frac> + <i>c</i> = 3 pins <i>c</i> = <frac><num>5</num><den>2</den></frac>:<br><i>f</i>(<i>x</i>) = <frac><num><i>x</i><sup>2</sup> + 5<i>x</i></num><den>2</den></frac>',
          'Check: <i>f</i>(1) = <frac><num>6</num><den>2</den></frac> = 3 and <i>f</i>(10) = <frac><num>100 + 50</num><den>2</den></frac> = 75, agreeing with Step 3.',
          '<b>Step 5: uniqueness.</b> Let <i>g</i>(<i>x</i>) = <i>f</i>(<i>x</i>) − <frac><num><i>x</i><sup>2</sup> + 5<i>x</i></num><den>2</den></frac>. Subtracting the two functional equations, <i>g</i>(<i>x</i> + <i>y</i>) = <i>g</i>(<i>x</i>) + <i>g</i>(<i>y</i>) with <i>g</i>(1) = 0. By the first standard form (with the usual regularity hypothesis), <i>g</i>(<i>x</i>) = <i>g</i>(1) · <i>x</i> = 0. So the answer above is the only one.',
        ],
        ans: '<i>f</i>(<i>n</i>) = 3<i>n</i> + <frac><num><i>n</i>(<i>n</i> − 1)</num><den>2</den></frac>; <i>f</i>(10) = 75; <i>f</i>(<i>x</i>) = <frac><num><i>x</i><sup>2</sup> + 5<i>x</i></num><den>2</den></frac>.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '2<i>f</i>(<i>x</i>) − 3<i>f</i>(<frac><num>1</num><den><i>x</i></den></frac>) = <i>x</i><sup>2</sup> for <i>x</i> ≠ 0. Find <i>f</i>(<i>x</i>) and <i>f</i>(2).',
            a: '<i>f</i>(<i>x</i>) = −<frac><num>2<i>x</i><sup>4</sup> + 3</num><den>5<i>x</i><sup>2</sup></den></frac>; <i>f</i>(2) = −<frac><num>7</num><den>4</den></frac>. (Pair with <i>x</i> → <frac><num>1</num><den><i>x</i></den></frac> and eliminate.)',
          },
          {
            q: '2<i>f</i>(<i>x</i>) + <i>f</i>(−<i>x</i>) = 3<i>x</i> + 5 for all real <i>x</i>. Find <i>f</i>(<i>x</i>).',
            a: '<i>f</i>(<i>x</i>) = 3<i>x</i> + <frac><num>5</num><den>3</den></frac>. (Pair with <i>x</i> → −<i>x</i>; here the involution is <i>u</i>(<i>x</i>) = −<i>x</i>.)',
          },
          {
            q: '<i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>)<i>f</i>(<i>y</i>) for all real <i>x</i>, <i>y</i>, with <i>f</i>(1) = 3. Find <i>f</i>(1) + <i>f</i>(2) + <i>f</i>(3) + <i>f</i>(4) + <i>f</i>(5).',
            a: '<i>f</i>(<i>n</i>) = 3<sup><i>n</i></sup>, so the sum is 3 + 9 + 27 + 81 + 243 = 363.',
          },
          {
            q: '<i>f</i>(<i>xy</i>) = <i>f</i>(<i>x</i>)<i>f</i>(<i>y</i>) for all <i>x</i>, <i>y</i> > 0, with <i>f</i> of the form <i>x</i><sup><i>n</i></sup> and <i>f</i>(2) = 8. Find <i>f</i>(3).',
            a: '2<sup><i>n</i></sup> = 8 ⇒ <i>n</i> = 3, so <i>f</i>(3) = 27.',
          },
          {
            q: '<i>f</i>(<i>x</i> + <i>y</i>) = <i>f</i>(<i>x</i>) + <i>f</i>(<i>y</i>) + 2<i>xy</i> for all real <i>x</i>, <i>y</i>, with <i>f</i> continuous and <i>f</i>(1) = 2. Find <i>f</i>(<i>x</i>) and <i>f</i>(5).',
            a: '<i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + <i>x</i>; <i>f</i>(5) = 30. (The +2<i>xy</i> is what <i>x</i><sup>2</sup> produces.)',
          },
          {
            q: '<i>f</i>(3) = 1 and <i>f</i>(3<i>x</i>) = <i>x</i> + <i>f</i>(3<i>x</i> − 3) for all <i>x</i>. Find <i>f</i>(300).',
            a: 'Writing <i>u</i> = 3<i>x</i>, the relation is <i>f</i>(<i>u</i>) = <frac><num><i>u</i></num><den>3</den></frac> + <i>f</i>(<i>u</i> − 3). Stepping down from <i>u</i> = 300 to <i>u</i> = 3: <i>f</i>(300) = (100 + 99 + ⋯ + 2) + <i>f</i>(3) = (5050 − 1) + 1 = 5050.',
          },
          {
            q: '<i>f</i> is odd with period 4 and <i>f</i>(1) = 4. Find <i>f</i>(3), <i>f</i>(−1), <i>f</i>(0) and <i>f</i>(5).',
            a: '<i>f</i>(3) = <i>f</i>(3 − 4) = <i>f</i>(−1) = −<i>f</i>(1) = −4; <i>f</i>(−1) = −4; <i>f</i>(0) = 0 (odd, defined at 0); <i>f</i>(5) = <i>f</i>(1) = 4. (Note that period 4 and oddness are compatible, but period 2 and oddness would force <i>f</i>(1) = <i>f</i>(−1) = −<i>f</i>(1), i.e. <i>f</i>(1) = 0, contradicting <i>f</i>(1) = 4. Always test a period-plus-parity hypothesis for consistency before using it.)',
          },
        ],
      },

      { t: 'part', title: 'Cheat sheet: Additional topics F to K' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Vertical line test (F)',
            note: '<i>m</i>(<i>a</i>) = number of graph points on <i>x</i> = <i>a</i>. <i>m</i>(<i>a</i>) ≥ 2 for one <i>a</i> kills it; <i>m</i>(<i>a</i>) = 0 merely means <i>a</i> is outside the domain; <i>m</i>(<i>a</i>) = 1 on all of a declared <i>A</i> makes it a function on <i>A</i>. Even powers of <i>y</i>, |<i>y</i>| and ± are the killers; anything done to <i>x</i> alone is harmless. Piecewise rules: check the overlap points.',
          },
          {
            f: 'Composition (G)',
            note: '(<i>g</i> ∘ <i>f</i>)(<i>x</i>) = <i>g</i>(<i>f</i>(<i>x</i>)); Dom(<i>g</i> ∘ <i>f</i>) = {<i>x</i> ∈ Dom(<i>f</i>) ∶ <i>f</i>(<i>x</i>) ∈ Dom(<i>g</i>)}. Find the domain <b>before</b> simplifying. √<i>x</i><sup>2</sup> = |<i>x</i>|; (√<i>x</i>)<sup>2</sup> = <i>x</i> but only on [0, ∞). Not commutative; associative.',
          },
          {
            f: 'Even / odd (H)',
            note: 'Symmetric domain first, or the answer is “neither”. Even: <i>f</i>(−<i>x</i>) = <i>f</i>(<i>x</i>), <i>y</i>-axis symmetry. Odd: <i>f</i>(−<i>x</i>) = −<i>f</i>(<i>x</i>), half-turn symmetry, and <i>f</i>(0) = 0 if 0 is in the domain. Odd × odd = even. In a composite, an even <b>inner</b> function makes it even; with an odd inner function it copies the outer function’s parity. Decomposition <i>f</i> = <frac><num><i>f</i>(<i>x</i>) + <i>f</i>(−<i>x</i>)</num><den>2</den></frac> + <frac><num><i>f</i>(<i>x</i>) − <i>f</i>(−<i>x</i>)</num><den>2</den></frac>. Payoff: range of an odd function is symmetric about 0; compute half of it.',
          },
          {
            f: 'Periodicity (I)',
            note: '{<i>x</i>} has fundamental period 1; [<i>x</i>] is <b>not</b> periodic; a constant is periodic with <b>no</b> fundamental period. <i>f</i>(<i>ax</i> + <i>b</i>) has period <frac><num><i>T</i></num><den>|<i>a</i>|</den></frac>. Sum: LCM when the ratio of periods is rational, and it need not be fundamental. No non-constant monotone function is periodic.',
          },
          {
            f: 'Transformations (J)',
            note: 'Outside the bracket, literal; inside, opposite and first: always factor <i>f</i>(<i>cx</i> + <i>d</i>) = <i>f</i>(<i>c</i>(<i>x</i> + <frac><num><i>d</i></num><den><i>c</i></den></frac>)). |<i>f</i>(<i>x</i>)| folds about the <i>x</i>-axis; <i>f</i>(|<i>x</i>|) folds about the <i>y</i>-axis and is always even; |<i>y</i>| = <i>f</i>(<i>x</i>) is not a function. “How many solutions of |<i>f</i>(<i>x</i>)| = <i>k</i>” is a horizontal line sliding over the folded graph.',
          },
          {
            f: 'Functional equations (K)',
            note: 'Substitute <i>x</i> = <i>y</i> = 0 first (<i>x</i> = <i>y</i> = 1 if the equation lives on (0, ∞)). For <i>f</i>(<i>x</i>) tied to <i>f</i>(<frac><num>1</num><den><i>x</i></den></frac>), <i>f</i>(−<i>x</i>) or <i>f</i>(1 − <i>x</i>), replace and solve the 2 × 2 system. For <i>f</i>(<i>x</i> + 1) in terms of <i>f</i>(<i>x</i>), iterate and sum. Standard forms give <i>kx</i>, <i>a</i><sup><i>x</i></sup>, <i>k</i> ln <i>x</i>, <i>x</i><sup><i>c</i></sup>, but only when there is no extra term and some regularity is granted. Always substitute your answer back.',
          },
        ],
        aids: [],
      },
    ],
  },
];
