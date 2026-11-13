import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Additional topic P, pp. 119–125 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's "Addendum P — What
 * JEE Actually Asks", kept with the book's letter as the chapter's last additional
 * topic (decision 2). It opens at the top of p. 119 (Addendum F ends on p. 118) and
 * ends on p. 125; Chapter 2 starts on p. 126. The opening paragraph is the
 * "Introduction"; the numbered headings "1. The distribution" … "4. Graded practice
 * set" are the parts, without their numbers. The distribution table is a table
 * block. Each archetype is a worked example tagged with its "Archetype X" heading:
 * its "Looks like / Method / Worked example" paragraph is the question, the working
 * the steps, its "Answer:" (where printed) the answer box. The traps are one
 * mistakes block; the graded practice set is one practice block, each "Solution."
 * its answer. Exam years are dropped from every question tag ("[JEE 1982]" →
 * "[JEE]"; a bare year "[1979]" → "[JEE]"), and every share or count of past
 * questions carries the estimate label. These pages print no drawing and no
 * formula card. ⁿPᵣ with an italic P, as the page sets it; the stacked binomial as
 * <binom>. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const bn = (a: string, b: string) => `<binom><num>${a}</num><den>${b}</den></binom>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const A = I('A');
const B = I('B');
const R = I('R');
const X = I('X');
const Y = I('Y');
const a = I('a');
const b = I('b');
const f = I('f');
const g = I('g');
const k = I('k');
const m = I('m');
const n = I('n');
const u = I('u');
const x = I('x');
const y = I('y');
const z = I('z');
const al = I('α');
const be = I('β');
const fx = `${f}(${x})`;
const fy = `${f}(${y})`;
const fz = `${f}(${z})`;
const gx = `${g}(${x})`;
/** f′, the prime U+2032. */
const fp = `${f}′`;
const FINV = `${f}<sup>−1</sup>`;
const x2 = `${x}<sup>2</sup>`;
const y1 = `${y}<sub>1</sub>`;
const y2 = `${y}<sub>2</sub>`;
const y3 = `${y}<sub>3</sub>`;
/** |s|, the U+2060 keeping the opening bar with its letter. */
const abs = (s: string) => `|⁠${s}|`;
/** A pair, its comma glued: (p, q). */
const pair = (p: string, q: string) => `(${p},${NB}${q})`;
/** An interval, its comma glued: [p, q). */
const iv = (p: string, q: string, o = '[', c = ']') => `${o}${p},${NB}${q}${c}`;
const ONE_X = fr('1', x);
const sinx = `sin${NB}${x}`;
const sinx2 = `sin${NB}${x2}`;
/** The power 1/n, raised (a slash inside a raised run). */
const RT = `<sup>1/${n}</sup>`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic P (the book's Addendum P) · pp. 119–125 ────────────────
  {
    n: 'P',
    title: 'What JEE Actually Asks',
    extra: true,
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This section collects the patterns that recur in JEE previous-year papers on Relations and Functions: how the examiners’ attention is distributed, the archetypal questions with worked solutions, the traps their distractors are built around, and a graded practice set. Every solution below has been worked out in full.',
      },

      { t: 'part', title: 'The distribution' },
      {
        t: 'p',
        html: `Judging from previous-year JEE papers, the examiners’ attention splits roughly as follows (the counts are approximate) ${ESTIMATE}:`,
      },
      {
        t: 'table',
        title: null,
        head: ['Cluster', 'Approx. share', 'Papers cited'],
        rows: [
          [
            'Injective / surjective / bijective classification',
            '~30% (the single biggest block)',
            '12 (JEE 5, Main 5, Adv 2)',
          ],
          [
            'Domain & range, incl. greatest-integer / fractional part',
            '~25%',
            '13 (JEE 11, Adv 2)',
          ],
          [
            'Composition and inverse',
            '~25%',
            '12+ (JEE 8, Main 4)',
          ],
          ['Counting functions (one-one, onto, constrained)', '~12%', '5 (JEE 2, Main 2, Adv 1)'],
          [
            'Relations (reflexive / symmetric / transitive)',
            '~12%, mostly recent',
            '6 (JEE 2, Main 4)',
          ],
          ['Even / odd / periodicity', '~10%', '5 (JEE 4, Adv 1)'],
          ['Functional equations', '~8%, concentrated in older papers', '4 (JEE 4)'],
        ],
      },
      {
        t: 'p',
        html: `Two honest caveats. First, these clusters overlap heavily (an Adv matching item tests domain and range and monotonicity in one question), so shares do not sum to 100%. Second, the evidence for “functional equations are dying” rests on only four items, all older ${ESTIMATE}; treat that trend as suggestive, not proven. What is unmistakable: classification of maps by monotonicity, and inverse/composite manipulation, appear in every single decade without exception ${ESTIMATE}.`,
      },

      { t: 'part', title: 'The recurring archetypes' },
      {
        t: 'ex',
        tag: 'Archetype A: Monotonicity proves bijectivity',
        q: `<b>Looks like:</b> “Is ${f} one-one? onto?” for a function mixing a polynomial with a bounded term (${sinx}, cos${NB}${x}) or a logarithm. <b>Method:</b> differentiate; show ${fp} keeps one sign, hence strictly increasing, hence one-one; then push ${x} to ±∞ and invoke continuity (IVT) for onto. <b>Worked example</b> [JEE]: ${f} : ℝ → ℝ, ${fx} = 2${x} + ${sinx}.`,
        steps: [
          `${fp}(${x}) = 2 + cos${NB}${x},<br>−1 ≤ cos${NB}${x} ≤ 1 ⇒ 1 ≤ ${fp}(${x}) ≤ 3`,
          `so ${fp} > 0 everywhere: strictly increasing, therefore one-one. As ${x} → ∞, 2${x} dominates the bounded ${sinx}, so ${fx} → ∞; likewise ${fx} → −∞. By the intermediate value theorem every real value is attained: onto.`,
        ],
        ans: 'Both one-one and onto.',
      },
      {
        t: 'ex',
        tag: 'Archetype B: Classification on a restricted interval',
        q: `<b>Looks like:</b> a cubic (or similar) on a closed interval, with codomain chosen suspiciously well. <b>Method:</b> find the critical points of ${f} (the zeros of ${fp}), tabulate ${f} at endpoints and critical points, compare the resulting range with the codomain. <b>Worked example</b> [JEE]: ${f} : ${iv('0', '3')} → ${iv('1', '29')}, ${fx} = 2${x}<sup>3</sup> − 15${x2} + 36${x} + 1.`,
        steps: [
          `${fp}(${x}) = 6${x2} − 30${x} + 36<br>= 6(${x} − 2)(${x} − 3)`,
          `${fp} is positive on ${iv('0', '2', '[', ')')} and negative on ${iv('2', '3', '(', ')')}, so ${f} is not monotonic: many-one. Values:<br>${f}(0) = 1, ${f}(2) = 29, ${f}(3) = 28`,
          `Range = ${iv('1', '29')} = codomain: onto.`,
          `(Same machinery drives [Adv]’s “${x}<sup>5</sup> − 5${x} + ${a}: how many real roots?”, where the local max/min ±4 of ${x}<sup>5</sup> − 5${x} decide everything.)`,
        ],
        ans: 'Onto but not one-one.',
      },
      {
        t: 'ex',
        tag: 'Archetype C: Counting functions with a constraint',
        q: `<b>Looks like:</b> “how many onto/one-one functions, given that some element has exactly ${k} preimages,” or a numerical-answer ${al}, ${be} comparison. <b>Method:</b> fix the constrained part by choosing preimages (${bn(n, k)}), then count freely on the remainder, subtracting the maps that miss a target (inclusion–exclusion). <b>Worked example</b> [JEE Adv]: ${abs(X)} = 5, ${abs(Y)} = 7; ${al} = one-one maps ${X} → ${Y}, ${be} = onto maps ${Y} → ${X}; find ${fr(`${be} − ${al}`, '5!')}.`,
        steps: [
          `${al} = <sup>7</sup>${I('P')}<sub>5</sub> = ${bn('7', '5')} · 5! = 21 · 120 = 2520`,
          `For ${be}, inclusion–exclusion over the 5 targets:<br>${be} = ∑<sub>${k}=0</sub><sup>5</sup>(−1)<sup>${k}</sup>${bn('5', k)}(5 − ${k})<sup>7</sup><br>= 78125 − 81920 + 21870 − 1280 + 5 = 16800`,
          `(Check by occupancy: patterns (3, 1, 1, 1, 1) give ${bn('7', '3')} · 5 · 4! = 4200; (2, 2, 1, 1, 1) give ${bn('5', '2')} · ${fr('7!', '2!2!')} = 12600; total 16800.) Hence<br>${fr(`${be} − ${al}`, '5!')} = ${fr('16800 − 2520', '120')} =`,
        ],
        ans: '119',
      },
      {
        t: 'ex',
        tag: 'Archetype D: Testing a relation defined by an identity',
        q: `<b>Looks like:</b> ${R} = {${pair(a, b)} ∶ some trig/algebraic equation}; classify it. <b>Method:</b> simplify the defining condition to its cleanest equivalent form first: the properties then become obvious. <b>Worked example</b> [Main Online]: ${I('P')} = {${pair(a, b)} ∶ sec<sup>2</sup>${NB}${a} − tan<sup>2</sup>${NB}${b} = 1} on ℝ (read: on the reals where sec and tan are defined).`,
        steps: [
          `Since sec<sup>2</sup>${NB}${a} = 1 + tan<sup>2</sup>${NB}${a}, the condition collapses to tan<sup>2</sup>${NB}${a} = tan<sup>2</sup>${NB}${b}. That is manifestly reflexive, symmetric and transitive.`,
          'Contrast [JEE]-style items where the condition is not symmetric and a single numeric counterexample settles it.',
        ],
        ans: 'An equivalence relation.',
      },
      {
        t: 'ex',
        tag: 'Archetype E: Inverses with branch discipline',
        q: `<b>Looks like:</b> invert a two-branch-producing function on a restricted domain; the wrong root is always offered as a distractor ${ESTIMATE}. <b>Method:</b> solve ${y} = ${fx} for ${x}, then use the stated domain to kill one branch. <b>Worked example</b> [JEE]: ${f} : ${iv('1', '∞', '[', ')')} → ${iv('2', '∞', '[', ')')}, ${fx} = ${x} + ${ONE_X}.`,
        steps: [
          `${y} = ${x} + ${ONE_X} ⇒ ${x2} − ${y}${x} + 1 = 0<br>⇒ ${x} = ${fr(`${y} ± √(${y}<sup>2</sup> − 4)`, '2')}`,
          `The two roots multiply to 1; the minus-root equals ${fr('2', `${y} + √(${y}<sup>2</sup> − 4)`)} < 1 for ${y} > 2, so it violates ${x} ≥ 1. Therefore<br>${FINV}(${x}) = ${fr(`${x} + √(${x2} − 4)`, '2')}, ${x} ≥ 2`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype F: Functional equations by twin substitution',
        q: `<b>Looks like:</b> one equation linking ${fx} and ${f}(transformed ${x}); find ${f} or a specific value. <b>Method:</b> substitute special values for anchors, generate the partner equation via ${x} ↦ ${ONE_X} or ${x} ↦ 1 − ${x}, eliminate linearly. <b>Worked example</b> [JEE]: ${f}(${x} + ${y}) = ${fx}${fy} on naturals, ${f}(1) = 2; find natural ${a} with<br>${f}(${a} + 1) + ${f}(${a} + 2) + ⋯ + ${f}(${a} + ${n})<br>= 16(2<sup>${n}</sup> − 1)`,
        steps: [
          `Induction on the Cauchy-product law gives ${f}(${k}) = 2<sup>${k}</sup>. (This example needs no partner equation: a Cauchy-type law on the naturals is solved by induction instead.) Factor the left side:<br>${f}(${a})(2 + 2<sup>2</sup> + ⋯ + 2<sup>${n}</sup>)<br>= ${f}(${a})(2<sup>${n}+1</sup> − 2)<br>= 2${f}(${a})(2<sup>${n}</sup> − 1)`,
          `So 2${f}(${a})(2<sup>${n}</sup> − 1) = 16(2<sup>${n}</sup> − 1), giving ${f}(${a}) = 8 = 2<sup>3</sup>, hence ${a} = 3.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype G: Floor / fractional-part equations',
        q: `<b>Looks like:</b> an equation mixing [${x}] and {${x}}. <b>Method:</b> reduce everything to [${x}] and {${x}} separately; use 0 ≤ {${x}} < 1 to bound [${x}] to finitely many values; finish case by case. <b>Worked example</b> [JEE]: solve 4{${x}} = ${x} + [${x}] with the standard conventions [${x}] = ⌊${x}⌋, {${x}} = ${x} − [${x}] ∈ ${iv('0', '1', '[', ')')}.`,
        steps: [
          `Substituting ${x} = [${x}] + {${x}}:<br>4{${x}} = 2[${x}] + {${x}}<br>⇒ 3{${x}} = 2[${x}]<br>⇒ {${x}} = ${fr('2', '3')}[${x}]`,
          `Since 0 ≤ {${x}} < 1, we get 0 ≤ [${x}] < ${fr('3', '2')}, so [${x}] ∈ {0, 1}: [${x}] = 0 forces {${x}} = 0, giving ${x} = 0; [${x}] = 1 forces {${x}} = ${fr('2', '3')}, giving ${x} = ${fr('5', '3')}.`,
          `(Convention note: some older texts take [${x}] to be the signed integer part (truncation toward zero), under which ${x} = −${fr('5', '3')} also qualifies, since then [${x}] = −1 and {${x}} = −${fr('2', '3')}. Under today’s standard JEE convention it does not: know which convention your paper uses.)`,
        ],
        ans: `${x} ∈ {0, ${fr('5', '3')}}`,
      },
      {
        t: 'ex',
        tag: 'Archetype H: Structure and logic puzzles on one-one maps',
        q: `<b>Looks like:</b> sparse information (“exactly one of these statements is true”) plus one-oneness; deduce a specific value. <b>Method:</b> exhaust the cases; one-oneness eliminates the contradictions. <b>Worked example</b> [JEE]: ${f} one-one, domain {${x}, ${y}, ${z}}, range {1, 2, 3}; among “${fx} = 1”, “${fy} ≠ 1”, “${fz} ≠ 2” exactly one is true.`,
        steps: [
          `If ${fx} = 1 is the true one, the other two fail, forcing ${fy} = 1, contradicting one-oneness.`,
          `If “${fy} ≠ 1” is true, then ${fx} ≠ 1 and, the third statement being false, ${fz} = 2; that leaves both ${fx} and ${fy} unable to be 1, yet some element must map to 1: contradiction again.`,
          `So “${fz} ≠ 2” is the true one, forcing ${fx} ≠ 1, ${fy} = 1 and ${fz} ≠ 2; the remaining values 2, 3 then give ${fx} = 2, ${fz} = 3.<br>${FINV}(1) = ${y}`,
        ],
        ans: '',
      },

      { t: 'part', title: 'The traps' },
      { t: 'p', html: 'These are the mistakes JEE distractors are built around:' },
      {
        t: 'mistakes',
        items: [
          `<b>Failing to check the rule is a function at all.</b> A classic trap: asked to classify ${f} : ${iv('0', '∞', '(', ')')} → ${iv('0', '∞', '(', ')')} with ${fx} = ln${NB}${x}, students ignore that ${f}(1) = 0 ∉ ${iv('0', '∞', '(', ')')}, so the rule does not define a function into that codomain at all. Always test well-definedness before one-one/onto.`,
          `<b>Codomain–range conflation.</b> The JEE chestnut ${f} : ℝ → ℝ, ${fx} = ${x2} punishes anyone who answers “surjective” out of habit; and [JEE] rewards those who actually compute the range on the stated interval rather than eyeballing the degree.`,
          `<b>Missing the non-obvious transitivity chain.</b> In the JEE Main relation ${x} = ${y} or ${x} = 3${y} on ℕ, everyone checks ${pair('3', '1')}, ${pair('1', '1')} and declares transitivity, but ${pair('9', '3')} and ${pair('3', '1')} force ${pair('9', '1')}, which fails. Chains through the “3×” branch are where the marks hide.`,
          `<b>Branch errors when inverting.</b> Solving a quadratic for ${x} yields two roots; the domain exists precisely to discard one (Archetype E). Distractor options are built from the discarded branch.`,
          `<b>${m}<sup>${n}</sup> versus <sup>${m}</sup>${I('P')}<sub>${n}</sub></b> (for ${abs(A)} = ${n}, ${abs(B)} = ${m}), and ignoring feasibility: no one-one map when ${abs(A)} > ${abs(B)}, no onto map when ${abs(A)} < ${abs(B)}.`,
          `<b>${FINV} read as ${fr('1', f)}.</b> Recurrent distractor across decades ${ESTIMATE}.`,
          `<b>Order reversal in</b> (${g} ∘ ${f})<sup>−1</sup> = ${FINV} ∘ ${g}<sup>−1</sup>: the same-order option is always offered ${ESTIMATE}.`,
          `<b>Log-base hygiene.</b> A base needs > 0 and ≠ 1; forgetting 1 − ${x} ≠ 1 costs the point in domain questions like practice question 8.`,
          `<b>Floor of negatives and the bounds on {${x}}.</b> Floor questions routinely exploit [−2.3] = −3 or the fact 0 ≤ {${x}} < 1 ${ESTIMATE}.`,
          `<b>Self-inverse recognition.</b> ${fx} = (${a} − ${x}<sup>${n}</sup>)${RT} (for odd ${n}) and Möbius maps of the form ${fr(`${I('ax')} + ${b}`, `${I('cx')} − ${a}`)} compose to the identity; students who grind through algebra miss that ${f} = ${FINV} was checkable in one line.`,
        ],
      },

      { t: 'part', title: 'Graded practice set' },
      { t: 'p', html: 'All twelve are adapted from previous-year JEE questions or written in their spirit.' },
      {
        t: 'practice',
        items: [
          {
            q: `(Easy) ${f} : ℝ → ℝ, ${fx} = ${x2}. Classify ${f}.`,
            a: `${f}(1) = ${f}(−1) = 1: many-one. No negative number has a preimage: into. <b>Neither injective nor surjective.</b> [cf. JEE]`,
          },
          {
            q: `(Easy) Find the domain and range of ${fx} = ${fr(x2, `1 + ${x2}`)}, and decide whether ${f} is one-one.`,
            a: `Denominator ≥ 1, so domain = ℝ. Put ${y} = ${fr(x2, `1 + ${x2}`)}: then ${x2} = ${fr(y, `1 − ${y}`)}, which needs 0 ≤ ${y} < 1; conversely every ${y} ∈ ${iv('0', '1', '[', ')')} arises. Range = ${iv('0', '1', '[', ')')}. Since ${f}(1) = ${f}(−1) = ${fr('1', '2')}, <b>not one-one</b>. [cf. JEE]`,
          },
          {
            q: `(Easy) Find the number of onto functions from ${I('E')} = {1, 2, 3, 4} to ${I('F')} = {1, 2}.`,
            a: 'Total functions 2<sup>4</sup> = 16; the two constant maps miss a target. 16 − 2 = <b>14</b>. [JEE]',
          },
          {
            q: `(Medium) On ℕ, let ${R} = {${pair(x, y)} ∶ ${x2} − 4${x}${y} + 3${y}<sup>2</sup> = 0}. Determine whether ${R} is reflexive, symmetric, transitive.`,
            a: `Factoring, (${x} − ${y})(${x} − 3${y}) = 0, so ${x} = ${y} or ${x} = 3${y}. Every ${pair(a, a)} satisfies ${x} = ${y}: <b>reflexive</b>. But ${pair('3', '1')} ∈ ${R} while ${pair('1', '3')} ∉ ${R}: <b>not symmetric</b>. For transitivity, note ${pair('9', '3')} ∈ ${R} (since 9 = 3 · 3) and ${pair('3', '1')} ∈ ${R}, yet ${pair('9', '1')} ∉ ${R} (81 − 36 + 3 ≠ 0): <b>not transitive</b>. <b>Answer: reflexive, but neither symmetric nor transitive.</b> The counterexample chain ${pair('9', '3')}, ${pair('3', '1')} is what settles transitivity. [JEE Main Online]`,
          },
          {
            q: `(Medium) Find ${f} and ${g} such that ${g}(${fx}) = ${abs(sinx)} and ${f}(${gx}) = sin<sup>2</sup>${NB}√${x}.`,
            a: `Try ${fx} = sin<sup>2</sup>${NB}${x}, ${gx} = √${x}. Then<br>${g}(${fx}) = √(sin<sup>2</sup>${NB}${x}) = ${abs(sinx)},<br>${f}(${gx}) = sin<sup>2</sup>(√${x})<br>Both identities hold, so ${fx} = sin<sup>2</sup>${NB}${x}, ${gx} = √${x}. The rival option ${fx} = ${sinx}, ${gx} = ${abs(x)} fails because ${f}(${gx}) = sin${NB}${abs(x)} ≠ sin<sup>2</sup>${NB}√${x} (at ${x} = ${fr('π<sup>2</sup>', '4')} the left side is sin(${fr('π<sup>2</sup>', '4')}) ≈ 0.62, the right side is 1). [JEE]`,
          },
          {
            q: `(Medium) ${A} has 7 elements and ${B} = {${y1}, ${y2}, ${y3}}. How many onto functions ${f} : ${A} → ${B} have exactly three elements of ${A} mapping to ${y2}?`,
            a: `Choose the three preimages of ${y2}: ${bn('7', '3')} ways. The remaining four elements must hit both ${y1} and ${y3}: 2<sup>4</sup> − 2 = 14 ways. Total<br>14 · ${bn('7', '3')} = 490<br>[JEE Main Online]`,
          },
          {
            q: `(Medium) ${f} : ${iv('1', '∞', '[', ')')} → ${iv('2', '∞', '[', ')')}, ${fx} = ${x} + ${ONE_X}. Find ${FINV}(${x}).`,
            a: `Solved in Archetype E: ${FINV}(${x}) = ${fr(`${x} + √(${x2} − 4)`, '2')} on ${iv('2', '∞', '[', ')')}; the minus-root violates ${x} ≥ 1. [JEE]`,
          },
          {
            q: `(Medium) Find the domain of ${fx} = log<sub>(1 − ${x})</sub>(${x} + 2).`,
            a: `Argument: ${x} + 2 > 0 ⇒ ${x} > −2. Base: 1 − ${x} > 0 ⇒ ${x} < 1, and 1 − ${x} ≠ 1 ⇒ ${x} ≠ 0. Intersecting:<br>${iv('−2', '1', '(', ')')} ∖ {0}<br>The argument condition is strict, so −2 is excluded; the base-equals-1 exclusion is the designed trap. [adapted from JEE]`,
          },
          {
            q: `(Hard) Show that ${fx} = (${a} − ${x}<sup>${n}</sup>)${RT} (${a} > 0, ${n} an odd positive integer) satisfies (${f} ∘ ${f})(${x}) = ${x} for all real ${x}. What changes when ${n} is even?`,
            a: `For odd ${n} the real ${n}-th root is defined on all of ℝ and (${I('t')}<sup>${n}</sup>)${RT} = ${I('t')}, so<br>${f}(${fx}) = (${a} − [(${a} − ${x}<sup>${n}</sup>)${RT}]<sup>${n}</sup>)${RT}<br>= (${a} − ${a} + ${x}<sup>${n}</sup>)${RT} = ${x}<br>The map is its own inverse. <b>True</b> for odd ${n}. For even ${n} the natural domain is ${abs(x)} ≤ ${a}${RT} and (${x}<sup>${n}</sup>)${RT} = ${abs(x)}, so ${f}(${fx}) = ${abs(x)}: the identity holds only for 0 ≤ ${x} ≤ ${a}${RT} (e.g. ${n} = 2, ${a} = 1, ${x} = −${fr('1', '2')} gives ${f}(${fx}) = ${fr('1', '2')} ≠ ${x}). [JEE, True/False]`,
          },
          {
            q: `(Hard) ${f} satisfies ${f}(${x} + ${y}) = ${fx}${fy} for all natural ${x}, ${y}, with ${f}(1) = 2. Find the natural number ${a} for which ${f}(${a} + 1) + ${f}(${a} + 2) + ⋯ + ${f}(${a} + ${n}) = 16(2<sup>${n}</sup> − 1).`,
            a: `Solved in Archetype F: ${f}(${k}) = 2<sup>${k}</sup>, the sum factors as 2${f}(${a})(2<sup>${n}</sup> − 1), so ${f}(${a}) = 8 and ${a} = <b>3</b>. [JEE]`,
          },
          {
            q: `(Hard) Let ${fx} = ${x2} and ${gx} = ${sinx} on ℝ. Solve<br>(${f} ∘ ${g} ∘ ${g} ∘ ${f})(${x}) = (${g} ∘ ${g} ∘ ${f})(${x})`,
            a: `Reading innermost-first, ${g} ∘ ${g} ∘ ${f} sends ${x} ↦ sin(${sinx2}), and ${f} ∘ ${g} ∘ ${g} ∘ ${f} squares it. Writing ${u} = sin(${sinx2}), the equation ${u}<sup>2</sup> = ${u} gives ${u} ∈ {0, 1}. Now ${u} = 1 would require ${sinx2} = ${fr('π', '2')} > 1, impossible. So sin(${sinx2}) = 0, i.e. ${sinx2} = ${n}π; since ${abs(sinx2)} ≤ 1, only ${n} = 0 survives, so<br>${x2} = ${m}π, ${m} = 0, 1, 2, …<br>⟹ ${x} = ±√(${m}π)<br>[JEE]`,
          },
          {
            q: `(Challenge) ${f} is one-one with domain {${x}, ${y}, ${z}} and range {1, 2, 3}. Exactly one of the statements “${fx} = 1”, “${fy} ≠ 1”, “${fz} ≠ 2” is true. Find ${FINV}(1).`,
            a: `Solved in Archetype H by exhausting the three cases; only “${fz} ≠ 2 true” survives, forcing ${fy} = 1.<br>${FINV}(1) = ${y}<br>[JEE]`,
          },
        ],
      },
    ],
  },
];
