import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Additional topics A–F, pp. 465–489 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word. The letters are the book's.
 * A–C are the supplement's addenda (pp. 465–475): the "Addendum: Three Targeted
 * Extensions" paragraph at the foot of p. 465 (its heading not copied) opens A's
 * Introduction; the supplement's closing "Everything on One Screen" box (p. 475) is
 * C's last part. D–F are the "Additional Topics" part (pp. 476–489): its p. 476
 * introduction (heading not copied) opens D's Introduction; its closing "Everything
 * on One Screen" box (pp. 488–489) is F's last part. Chapter 6 starts on p. 490.
 * Figures: 5.9 (caption p. 466, drawn p. 467) at the end of A's Method; 5.10
 * (caption p. 469, drawn p. 470) on B's first worked example; 5.11 (caption p. 472,
 * drawn p. 473) at the end of C's Method. The Additional Topics part's own "Figure 1"
 * (p. 478), "Figure 2" (p. 483) and "Figure 3" (p. 486) are m11-05-D-d1 (end of D's
 * Standard regions), m11-05-E-d1 (on E's first worked example) and m11-05-F-d1 (end
 * of F's Method). Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const x = '<i>x</i>';
const y = '<i>y</i>';
const k = '<i>k</i>';
const a = '<i>a</i>';
const b = '<i>b</i>';
const c = '<i>c</i>';
const D = '<i>D</i>';
const f = '<i>f</i>';
const g = '<i>g</i>';
const u = '<i>u</i>';
const t = '<i>t</i>';
const n = '<i>n</i>';
const P = '<i>P</i>';
const Q = '<i>Q</i>';
const r = '<i>r</i>';
const m = '<i>m</i>';
const sq = (s: string) => `${s}<sup>2</sup>`;
const QUAD = `<i>ax</i><sup>2</sup> + <i>bx</i> + ${c}`;
const DISC = `${D} = ${b}<sup>2</sup> − 4<i>ac</i>`;
const XM1X2 = fr(`${x} − 1`, `${x} + 2`);
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 465–469 ────────────────
  {
    n: 'A',
    title: 'Quadratic Sign with a Parameter: “Positive for Every Real x”',
    extra: true,
    kalam: 'A parabola with a > 0 opens upward, so it stays strictly above the axis exactly when it never meets the axis.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Each of the three items below is a JEE pattern that the earlier topics set up but never exercised. Study Additional topic A and Additional topic B immediately after the wavy-curve algorithm in Topic 04: both build on that topic, aimed at a new target. Additional topic C finally cashes the promise the chapter repeats again and again: never square unless both sides are non-negative.',
      },
      {
        t: 'p',
        html: `Topic 04 gives you the forward fact: if ${a} > 0 and the discriminant is negative, then ${QUAD} > 0 for all ${x}. JEE Main almost always asks the reverse ${ESTIMATE}: you are handed an expression containing a parameter ${k} and asked which values of ${k} make it positive everywhere. This is the inverse direction, and it has one extra branch that decides most questions.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Let ${f}(${x}) = ${QUAD} with discriminant ${DISC}. A parabola with ${a} > 0 opens upward, so it stays strictly above the axis exactly when it never meets the axis.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Requirement', 'Condition when a ≠ 0', 'Degenerate branch a = 0'],
        rows: [
          [`${f}(${x}) > 0 for all real ${x}`, `${a} > 0 <b>and</b> ${D} < 0`, `${b} = 0 and ${c} > 0`],
          [`${f}(${x}) ≥ 0 for all real ${x}`, `${a} > 0 <b>and</b> ${D} ≤ 0`, `${b} = 0 and ${c} ≥ 0`],
          [`${f}(${x}) < 0 for all real ${x}`, `${a} < 0 <b>and</b> ${D} < 0`, `${b} = 0 and ${c} < 0`],
          [`${f}(${x}) ≤ 0 for all real ${x}`, `${a} < 0 <b>and</b> ${D} ≤ 0`, `${b} = 0 and ${c} ≤ 0`],
        ],
      },
      {
        t: 'p',
        html: `• ${a}, ${b}, ${c}: the coefficients, each of which may itself depend on the parameter ${k}.<br>• ${DISC}: the discriminant.<br>• The final answer is the <b>union</b> of the ${a} ≠ 0 solutions and the degenerate ${a} = 0 solutions.<br>• <b>The step that separates a full-mark answer from a near-miss:</b> whenever the coefficient of ${sq(x)} contains the parameter, you must test the value of ${k} that makes it zero separately, because at that value the expression is no longer a quadratic at all. Topic 01’s fourth worked example did precisely this for a linear inequality; the quadratic version works the same way.<br>• Note the strict-versus-slack difference in the discriminant. For > 0 you need ${D} < 0 (no real root at all). For ≥ 0 you may allow ${D} = 0, since a perfect square touches the axis but never dips below it.`,
      },
      { t: 'fig', id: 'm11-05-fig-5.9' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find all real values of ${k} for which ${sq(x)} + 2(${k} − 1)${x} + (${k} + 5) > 0 for every real ${x}.`,
        steps: [
          `The coefficient of ${sq(x)} is 1, which is positive and free of ${k}, so the degenerate branch cannot arise and only the discriminant condition remains.`,
          `${fr(D, '4')} = (${k} − 1)<sup>2</sup> − (${k} + 5)<br>= ${sq(k)} − 2${k} + 1 − ${k} − 5<br>= ${sq(k)} − 3${k} − 4<br>= (${k} − 4)(${k} + 1).`,
          `Requiring ${D} < 0:<br>(${k} − 4)(${k} + 1) < 0 ⟹ −1 < ${k} < 4.`,
          `<b>Check.</b> At ${k} = 0 the expression is ${sq(x)} − 2${x} + 5, whose discriminant is 4 − 20 = −16 < 0: positive everywhere, as required. At the excluded endpoint ${k} = 4 it becomes ${sq(x)} + 6${x} + 9 = (${x} + 3)<sup>2</sup>, which is zero at ${x} = −3 and therefore not strictly positive for all ${x}: correctly excluded. At ${k} = −1 it becomes ${sq(x)} − 4${x} + 4 = (${x} − 2)<sup>2</sup>, zero at ${x} = 2: correctly excluded. Both endpoints fail for the same reason, which is exactly why ${D} < 0 is strict here.`,
        ],
        ans: `${k} ∈ (−1, 4).`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find all real values of ${k} for which (${k} − 3)${sq(x)} + (${k} − 3)${x} + 4 > 0 for every real ${x}.`,
        steps: [
          `Here the parameter sits in the coefficient of ${sq(x)}, so the degenerate branch is live.`,
          `<b>Branch 1: the degenerate case ${k} = 3.</b> Substituting, every ${x} term vanishes and the expression is the constant 4. Since 4 > 0, the requirement holds for every real ${x}. <b>So ${k} = 3 is a solution.</b>`,
          `<b>Branch 2: the genuine quadratic, ${k} ≠ 3.</b> Two conditions must hold together.<br>• Upward-opening: ${k} − 3 > 0, i.e. ${k} > 3.<br>• No real roots:<br>${D} = (${k} − 3)<sup>2</sup> − 4(${k} − 3)(4)<br>= (${k} − 3)[(${k} − 3) − 16]<br>= (${k} − 3)(${k} − 19) < 0,<br>which gives 3 < ${k} < 19.`,
          `Intersecting the two conditions gives 3 < ${k} < 19.`,
          `<b>Union of the branches:</b> ${k} ∈ [3, 19).`,
          `<b>Check.</b> At ${k} = 3 the expression is the constant 4 > 0: included, and it is an isolated endpoint that the discriminant condition alone would have thrown away. At ${k} = 10: 7${sq(x)} + 7${x} + 4 with ${D} = 49 − 112 = −63 < 0 and a positive leading coefficient: positive everywhere. At the excluded endpoint ${k} = 19: 16${sq(x)} + 16${x} + 4 = 4(2${x} + 1)<sup>2</sup>, which is zero at ${x} = −${fr('1', '2')}: correctly excluded. At ${k} = 2: −${sq(x)} − ${x} + 4 opens downward and so is eventually negative: correctly excluded.`,
          `<b>Why it is Advanced-level:</b> the answer set is closed at the left end and open at the right, and the two endpoints fail or succeed for completely different reasons. The included endpoint ${k} = 3 arrives from the degenerate branch, which a discriminant-only solution never sees.`,
        ],
        ans: `${k} ∈ [3, 19).`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find all real ${k} for which ${sq(x)} + <i>kx</i> + 4 > 0 for every real ${x}.`,
            a: '(−4, 4).',
          },
          {
            q: `Find all real ${k} for which ${sq(x)} − 2<i>kx</i> + (${k} + 6) ≥ 0 for every real ${x}.`,
            a: `[−2, 3]: the slack sign permits ${D} = 0, so both endpoints are included.`,
          },
          {
            q: `Find all real ${k} for which −${sq(x)} + 2<i>kx</i> − 4 < 0 for every real ${x}.`,
            a: `(−2, 2): multiply by −1 and flip to get ${sq(x)} − 2<i>kx</i> + 4 > 0 for all ${x}, then require ${D} < 0.`,
          },
          {
            q: `Find all real ${k} for which (${k} + 1)${sq(x)} + 2(${k} + 1)${x} + 4 > 0 for every real ${x}.`,
            a: `[−1, 3): the degenerate value ${k} = −1 leaves the constant 4 > 0 and therefore belongs.`,
          },
          {
            q: `For how many integer values of ${k} is ${sq(x)} + <i>kx</i> + ${k} + 3 > 0 for every real ${x}?`,
            a: `7 integers, namely ${k} ∈ {−1, 0, 1, 2, 3, 4, 5}, from the condition −2 < ${k} < 6.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic B · pp. 469–472 ────────────────
  {
    n: 'B',
    title: 'Finding the Domain of a Function by Sign Analysis',
    extra: true,
    kalam: 'The domain is the intersection of every condition the expression generates.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 01 calls inequalities “the silent workhorse inside domain, range, and parameter problems.” This is that workhorse. Nearly every JEE Main domain question is a sign-analysis question wearing a different hat ${ESTIMATE}: you translate the function’s structural requirements into inequalities, solve them with the wavy curve of Topic 04, and intersect.`,
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: 'Read the expression from the outside in and write one condition for each structure you meet.' },
      {
        t: 'table',
        title: null,
        head: ['Structure', 'Condition it imposes'],
        rows: [
          [`√${u}`, `${u} ≥ 0`],
          [fr('1', u), `${u} ≠ 0`],
          [fr('1', `√${u}`), `${u} > 0 (both conditions at once)`],
          [`log<sub>${b}</sub> ${u}`, `${u} > 0, with base ${b} > 0, ${b} ≠ 1`],
          [fr('1', `log<sub>${b}</sub> ${u}`), `${u} > 0 and ${u} ≠ 1`],
        ],
      },
      {
        t: 'p',
        html: `• ${u}: the expression inside the structure, itself a function of ${x}.<br>• The domain is the <b>intersection</b> of every condition the expression generates. One failed condition disqualifies the point, however comfortable the others look.<br>• The distinction between ≥ and > carries all the marks. A square root standing alone allows its argument to be zero; the same square root in a denominator does not.<br>• Solve each condition by the wavy-curve algorithm, remembering that denominator roots are always hollow and numerator roots are filled only under a non-strict sign.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        fig: 'm11-05-fig-5.10',
        q: `Find the domain of ${f}(${x}) = √(${fr(`${x} − 1`, `${x} − 3`)}).`,
        steps: [
          `A square root demands a non-negative argument, so the entire question is the rational inequality<br>${fr(`${x} − 1`, `${x} − 3`)} ≥ 0.`,
          `Do not cross-multiply: the sign of ${x} − 3 is unknown. Run the wavy curve instead.`,
          `Critical points: ${x} = 1 from the numerator (filled, since the sign is non-strict) and ${x} = 3 from the denominator (hollow always, because the expression is undefined there).`,
          `Anchor on the far right: for large ${x} both factors are positive, so the quotient is positive on (3, ∞). Walking left, ${x} = 3 has multiplicity one, so the sign flips to negative on (1, 3); ${x} = 1 has multiplicity one, so it flips back to positive on (−∞, 1).`,
          'Collecting the intervals where the quotient is ≥ 0: Domain = (−∞, 1] ∪ (3, ∞).',
          `<b>Check.</b> At ${x} = 0: ${fr('−1', '−3')} = ${fr('1', '3')} ≥ 0, so 0 belongs. At ${x} = 1: the quotient is 0, and √0 = 0 is perfectly defined: the endpoint belongs. At ${x} = 2: ${fr('1', '−1')} = −1 < 0, so 2 is excluded. At ${x} = 3: the function is undefined, so 3 is excluded; note that it stays excluded even though the inequality is non-strict.`,
        ],
        ans: 'Domain = (−∞, 1] ∪ (3, ∞).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the domain of ${f}(${x}) = log<sub>10</sub>(${fr(`${x} − 2`, `${x} + 3`)}) + √(9 − ${sq(x)}).`,
        steps: [
          'Two structures, so two conditions, then intersect.',
          `<b>Condition 1: the logarithm.</b> Its argument must be strictly positive:<br>${fr(`${x} − 2`, `${x} + 3`)} > 0.`,
          `Critical points ${x} = −3 (denominator, hollow) and ${x} = 2 (numerator, hollow because the sign is strict). Anchoring positive on the far right and walking left: positive on (2, ∞), negative on (−3, 2), positive on (−∞, −3). So Condition 1 gives ${x} < −3 or ${x} > 2.`,
          `<b>Condition 2: the square root.</b> Its argument must be non-negative:<br>9 − ${sq(x)} ≥ 0 ⟹ ${sq(x)} ≤ 9<br>⟹ −3 ≤ ${x} ≤ 3.`,
          `<b>Intersect.</b> The piece ${x} < −3 shares nothing with [−3, 3]. The piece ${x} > 2 meets [−3, 3] in (2, 3].`,
          `<b>Check.</b> At ${x} = 3: the log argument is ${fr('1', '6')} > 0 and the root argument is 9 − 9 = 0, giving √0 = 0: both terms defined, so the endpoint belongs. At ${x} = 2.5: ${fr('0.5', '5.5')} > 0 and 9 − 6.25 = 2.75 > 0: defined. At ${x} = 2: the log argument is 0 and log<sub>10</sub> 0 is undefined: correctly excluded, and this is why that endpoint is open while the other is closed.`,
          '<b>The lesson to carry into JEE:</b> the two conditions came from different structures and had different strictness, and the final bracket at each end was decided by whichever condition was binding there. Never assume the domain inherits one condition’s brackets.',
        ],
        ans: 'Domain = (2, 3].',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the domain of ${f}(${x}) = √(${sq(x)} − 4${x} + 3).`,
            a: '(−∞, 1] ∪ [3, ∞).',
          },
          {
            q: `Find the domain of ${f}(${x}) = ${fr('1', `√(9 − ${sq(x)})`)}.`,
            a: '(−3, 3): strict at both ends, because the root sits in a denominator.',
          },
          {
            q: `Find the domain of ${f}(${x}) = log<sub>10</sub>(${fr(`${x} + 2`, `${x} − 5`)}).`,
            a: '(−∞, −2) ∪ (5, ∞).',
          },
          {
            q: `Find the domain of ${f}(${x}) = √(${fr(`(${x} + 1)(${x} − 2)`, `${x} − 4`)}).`,
            a: '[−1, 2] ∪ (4, ∞): the numerator roots −1 and 2 are included, the denominator root 4 is not.',
          },
          {
            q: `Find the domain of ${f}(${x}) = log<sub>10</sub>(${sq(x)} − 5${x} + 6).`,
            a: '(−∞, 2) ∪ (3, ∞).',
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic C · pp. 472–475 ────────────────
  {
    n: 'C',
    title: 'Irrational Inequalities: Controlled Squaring',
    extra: true,
    kalam: 'A radical inequality is solved by squaring, but only after the domain condition and the sign condition have been written down.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter states again and again that you must never square unless both sides are non-negative. Here is the rule doing actual work. A radical inequality is solved by squaring, but only after the domain condition and the sign condition have been written down, and those conditions are part of the answer, not preliminary throat-clearing.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: `For real expressions ${f} and ${g}:` },
      {
        t: 'formula',
        kicker: 'Controlled squaring',
        main: `√${f} < ${g} ⟺<br>${f} ≥ 0 <b>and</b> ${g} > 0 <b>and</b> ${f} < ${sq(g)}<br>√${f} > ${g} ⟺<br>[${f} ≥ 0 <b>and</b> ${g} < 0]<br><b>or</b> [${g} ≥ 0 <b>and</b> ${f} > ${sq(g)}]`,
        legend: [`${f} = the expression under the radical`, `${g} = the other side`],
        note: null,
      },
      {
        t: 'p',
        html: `• ${f}: the expression under the radical; ${f} ≥ 0 is the domain condition and can never be dropped.<br>• ${g}: the other side, whose sign drives everything.<br>• The non-strict versions replace < by ≤ and > by ≥ in the final comparison; for ≤ the sign condition ${g} > 0 also relaxes to ${g} ≥ 0. The domain condition ${f} ≥ 0 stays.<br>• <b>Why the two rules look so different.</b> For “less than” there is nothing to discuss: √${f} ≥ 0, so ${g} must be strictly positive or no solution can exist, and all three conditions are intersected. For “greater than”, a negative ${g} is an automatic win (a non-negative root always exceeds a negative number), so that branch is kept and unioned with the squared branch.<br>• In the second bracket of the “>” rule, ${f} > ${sq(g)} ≥ 0 already forces ${f} ≥ 0, so the domain condition is absorbed. In the first bracket it must be written explicitly.`,
      },
      { t: 'fig', id: 'm11-05-fig-5.11' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Solve √(${x} + 3) < ${x} + 1.`,
        steps: [
          'Write all three conditions before touching the algebra.',
          `• Domain: ${x} + 3 ≥ 0 ⟹ ${x} ≥ −3.<br>• Sign of the right side: ${x} + 1 > 0 ⟹ ${x} > −1.<br>• Squared comparison: ${x} + 3 < (${x} + 1)<sup>2</sup> = ${sq(x)} + 2${x} + 1, so 0 < ${sq(x)} + ${x} − 2 = (${x} + 2)(${x} − 1), giving ${x} < −2 or ${x} > 1.`,
          `Intersect all three. The condition ${x} > −1 annihilates the branch ${x} < −2 completely, and it is weaker than ${x} > 1, so what survives is`,
          `<b>Check.</b> At ${x} = 2: √5 ≈ 2.236 < 3, true. At the endpoint ${x} = 1: √4 = 2 and ${x} + 1 = 2, so the strict inequality fails: correctly excluded. At ${x} = 0: √3 ≈ 1.732 < 1 is false, correctly excluded: ${x} = 0 passes the domain and sign tests but fails the squared one, 3 < 1. At ${x} = −2.5: it lies in the discarded branch ${x} < −2, and indeed √0.5 ≈ 0.707 < −1.5 is false. The sign condition earned its place.`,
        ],
        ans: `${x} ∈ (1, ∞).`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Solve √(${x} + 3) > ${x} + 1.`,
        steps: [
          'Same two expressions, opposite direction, and now the answer needs both branches.',
          `Domain throughout: ${x} ≥ −3.`,
          `<b>Branch 1: the right side is negative.</b> ${x} + 1 < 0 ⟹ ${x} < −1. Combined with the domain, this gives −3 ≤ ${x} < −1, and every such ${x} satisfies the inequality automatically, since the left side is non-negative and the right side is negative.`,
          `<b>Branch 2: the right side is non-negative.</b> ${x} + 1 ≥ 0 ⟹ ${x} ≥ −1. Now both sides are non-negative, so squaring is legitimate:<br>${x} + 3 > (${x} + 1)<sup>2</sup><br>⟹ 0 > ${sq(x)} + ${x} − 2 = (${x} + 2)(${x} − 1)<br>⟹ −2 < ${x} < 1.`,
          `Intersecting with ${x} ≥ −1 gives −1 ≤ ${x} < 1.`,
          '<b>Union of the branches:</b> [−3, −1) ∪ [−1, 1) = [−3, 1).',
          `<b>Check.</b> At ${x} = −3: √0 = 0 > −2, true: the left endpoint belongs. At ${x} = 0: √3 ≈ 1.732 > 1, true. At the excluded endpoint ${x} = 1: both sides equal 2, so the strict inequality fails. At ${x} = 2: √5 ≈ 2.236 > 3 is false.`,
          '<b>The cross-check that proves both examples at once.</b> On the common domain [−3, ∞), exactly one of less than, equal to and greater than holds at each point. The previous worked example gave (1, ∞) for less than, the two sides are equal only at <i>x</i> = 1, and this example gives [−3, 1) for greater than. Those three sets are disjoint and their union is [−3, ∞): the whole domain, with nothing missing and nothing counted twice. Whenever a paper asks you for both directions, run this audit; it catches a lost branch instantly.',
        ],
        ans: '[−3, −1) ∪ [−1, 1) = [−3, 1).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          { q: `Solve √(${x} − 1) < 3.`, a: '[1, 10): the left endpoint survives because √0 = 0 < 3.' },
          {
            q: `Solve √(${sq(x)} − 4) < 3.`,
            a: `(−√13, −2] ∪ [2, √13): the domain condition ${sq(x)} ≥ 4 carves the middle out.`,
          },
          { q: `Solve √(${x} + 4) < ${x} + 2.`, a: '(0, ∞).' },
          {
            q: `Solve √(${x} − 2) ≥ ${x} − 4.`,
            a: `[2, 6]: the branch 2 ≤ ${x} < 4 holds automatically because the right side is negative there, and squaring on ${x} ≥ 4 contributes [4, 6].`,
          },
          {
            q: `Solve √(3 − ${x}) < ${x} − 1.`,
            a: `(2, 3]: the domain condition ${x} ≤ 3 supplies the closed right endpoint.`,
          },
        ],
      },

      { t: 'part', title: 'Everything on one screen' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Modulus, variable right-hand side',
            note: `|${f}| < ${g} ⟺ −${g} < ${f} < ${g} (intersect; ${g} > 0 comes free).<br>|${f}| > ${g} ⟺ ${f} > ${g} or ${f} < −${g} (union; a negative ${g} makes it universally true).`,
          },
          {
            f: 'Squaring a modulus',
            note: `legal only with a guard: ${sq(f)} < ${sq(g)} <b>and</b> ${g} > 0. Modulus against modulus needs no guard.`,
          },
          {
            f: 'Two or more moduli',
            note: `critical points → intervals → sign table → drop the bars → <b>intersect each case with its own interval</b> → union. Minimum of |${x} − ${a}| + |${x} − ${b}| is |${a} − ${b}|.`,
          },
          {
            f: `Quadratic positive for all ${x}`,
            note: `${a} > 0 <b>and</b> ${D} < 0; use ${D} ≤ 0 for ≥ 0. If the parameter sits in ${a}, test ${a} = 0 <b>separately</b> and union the result.`,
          },
          {
            f: 'Domain by sign analysis',
            note: `√${u} needs ${u} ≥ 0; ${fr('1', `√${u}`)} needs ${u} > 0; log<sub>${b}</sub> ${u} needs ${u} > 0. Solve each by the wavy curve, then <b>intersect</b>.`,
          },
          {
            f: 'Radicals',
            note: `√${f} < ${g} ⟺ ${f} ≥ 0 and ${g} > 0 and ${f} < ${sq(g)}.<br>√${f} > ${g} ⟺ [${f} ≥ 0, ${g} < 0] or [${g} ≥ 0, ${f} > ${sq(g)}].`,
          },
        ],
        aids: [
          '“A distance beats every negative number.”',
          '“Guard before you square.”',
          '“Each case goes home to its own interval.”',
          '“Domain first, algebra second.”',
        ],
      },
    ],
  },

  // ──────────────── Additional topic D · pp. 476–480 ────────────────
  {
    n: 'D',
    title: 'Modulus Regions in Two Variables',
    extra: true,
    kalam: 'The engine is Procedure B of Topic 05, run in the plane instead of on a line.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 05 taught you to solve a modulus inequality in one variable, and Additional topics A to C pointed the wavy curve at parameters, domains and radicals. Three JEE patterns are still standing outside the door, and each one is a marriage of two things the chapter already teaches separately.<br><br>Additional topic D marries Topic 02 (a linear inequality is a half-plane) to Topic 05 (a modulus is a distance): what happens when the moduli carry two variables and the answer is a region rather than an interval. Additional topic E goes back to the wavy curve of Topic 04 and replaces the drawing with arithmetic, which is the only way to survive a factor raised to the power 253. Additional topic F reverses the arrow of Topic 02: instead of shading a region from a system, you read the system off a shaded region, the Exemplar problem the Topic 02 exam-relevance note promises.<br><br>The letters continue from Additional topic C. Nothing here is new theory. Every method below is the case split of Topic 05, the sign analysis of Topic 04 or the test-point rule of Topic 02, applied one dimension over, one step earlier or in reverse.',
      },
      {
        t: 'p',
        html: `Topic 02 stopped at <i>ax</i> + <i>by</i> ≶ ${c}, whose answer is one half-plane decided by one test point. Put a modulus around either variable and that single half-plane becomes a union of half-plane pieces: a diamond, a rectangle, a band, a pair of wedges. JEE Main asks for the area of such a region or the number of lattice points inside it; JEE Advanced hides one inside a complex-number question, where |Re(<i>z</i>)| + |Im(<i>z</i>)| ≤ ${a} is exactly |${x}| + |${y}| ≤ ${a}. CBSE does not test this, so treat it as JEE-only enrichment sitting on top of Topic 02.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `The engine is Procedure B of Topic 05, run in the plane instead of on a line.<br>1. <b>Find the critical lines.</b> Set each modulus argument to zero. |${x}| gives the line ${x} = 0; |${y} − 2| gives ${y} = 2; |${x} − ${y}| gives ${y} = ${x}. With ${k} distinct critical lines the plane is cut into at most 2<sup>${k}</sup> pieces.<br>2. <b>Build a sign table</b>, one row per modulus argument, one column per piece, exactly as in Topic 05.<br>3. <b>Drop the bars on each piece.</b> What remains is a plain linear inequality in ${x} and ${y}, so its solution is a half-plane: shade it by the Topic 02 test-point rule.<br>4. <b>Intersect each piece’s half-plane with that piece.</b> This is the two-dimensional version of “every case goes home to its own interval,” and it is skipped just as often.<br>5. <b>Union the surviving pieces</b>, then read the shape.<br>6. <b>Boundary style:</b> solid for ≤ and ≥, dotted for < and >; the Topic 02 convention is unchanged.`,
      },
      {
        t: 'p',
        html: `<b>Symmetry: the shortcut that halves or quarters the work.</b> Before case-splitting, test the inequality for invariance:<br>• unchanged when ${x} → −${x}: the region is symmetric about the ${y}-axis;<br>• unchanged when ${y} → −${y}: symmetric about the ${x}-axis;<br>• unchanged when ${x} and ${y} are swapped: symmetric about the line ${y} = ${x}.`,
      },
      {
        t: 'p',
        html: `|${x}| + |${y}| ≤ ${a} passes all three. So sketch it once in the first quadrant, where it is simply ${x} + ${y} ≤ ${a} with ${x}, ${y} ≥ 0, and reflect three times.`,
      },

      { t: 'part', title: 'Standard regions' },
      { t: 'p', html: `Throughout, ${a} > 0, ${b} > 0, ${c} > 0, and every modulus has coefficient 1 inside.` },
      {
        t: 'table',
        title: null,
        head: ['Region', 'Shape', 'Measurements'],
        rows: [
          [`|${x}| ≤ ${a}, |${y}| ≤ ${b}`, 'rectangle centred at the origin', `width 2${a}, height 2${b}, area 4<i>ab</i>`],
          [`|${x}| + |${y}| ≤ ${a}`, `square with vertices (±${a}, 0), (0, ±${a})`, `diagonals 2${a} and 2${a}, side ${a}√2, area 2${sq(a)}`],
          [`|${x} − <i>h</i>| + |${y} − ${k}| ≤ ${c}`, `the same square translated to centre (<i>h</i>, ${k})`, `area 2${sq(c)}`],
          [`|${x} + ${y}| ≤ ${a} and |${x} − ${y}| ≤ ${a}`, `identical to |${x}| + |${y}| ≤ ${a}`, `area 2${sq(a)}`],
          [`|${x} − ${y}| ≤ ${a}`, `infinite band between ${y} = ${x} − ${a} and ${y} = ${x} + ${a}`, `unbounded, perpendicular width ${a}√2`],
          [`|${x}| + |${y}| ≥ ${a}`, 'everything outside that square, boundary included', 'unbounded'],
          [`|${x}| − |${y}| ≥ ${a}`, `two opposite unbounded wedges straddling the ${x}-axis, apexes at (±${a}, 0)`, 'unbounded'],
          [`|${y}| ≤ ${f}(${x})`, `the strip between ${y} = ${f}(${x}) and ${y} = −${f}(${x})`, `empty wherever ${f}(${x}) < 0`],
        ],
      },
      {
        t: 'p',
        html: `• <i>h</i>, ${k}: the coordinates of the centre; ${a}, ${b}, ${c}: the given positive bounds.<br>• The identity behind row four is max(|${x} + ${y}|, |${x} − ${y}|) = |${x}| + |${y}|, true for every real ${x} and ${y}. Bounding the larger of the two by ${a} is therefore the same statement as |${x}| + |${y}| ≤ ${a}.<br>• The square |${x}| + |${y}| ≤ ${a} has an inscribed circle of radius ${fr(a, '√2')} (the distance from the origin to the line ${x} + ${y} = ${a}) and a circumscribed circle of radius ${a}.<br>• <b>Lattice count.</b> For a non-negative integer ${n}, the number of points with integer coordinates satisfying |${x}| + |${y}| ≤ ${n} is<br>2${sq(n)} + 2${n} + 1.<br>This value is always odd, which is a free sanity check on any count you produce by hand.<br>• <b>Validity.</b> Every row assumes coefficient 1 inside each modulus. For |2${x}| + |${y}| ≤ ${a} or |${x}| + |3${y}| ≤ ${a} the shape is still a rhombus but the diagonals differ, so return to the case split.`,
      },
      { t: 'fig', id: 'm11-05-D-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Sketch the region |${x}| + |${y}| ≤ 3. Find its area and the number of points in it with integer coordinates.`,
        steps: [
          `Two moduli, so two critical lines: ${x} = 0 and ${y} = 0. They cut the plane into the four quadrants, and the sign table is as simple as it ever gets.`,
          `Quadrant: sign of ${x}, sign of ${y}; inequality becomes<br>${x} ≥ 0, ${y} ≥ 0: +, +; ${x} + ${y} ≤ 3<br>${x} < 0, ${y} ≥ 0: −, +; −${x} + ${y} ≤ 3<br>${x} < 0, ${y} < 0: −, −; −${x} − ${y} ≤ 3<br>${x} ≥ 0, ${y} < 0: +, −; ${x} − ${y} ≤ 3`,
          `Each row is a half-plane; intersecting each with its own quadrant gives a right triangle with legs 3 and 3, and the four triangles fit together along the axes into a single square with vertices (3, 0), (0, 3), (−3, 0), (0, −3). Both diagonals have length 6 and they are perpendicular, so<br>Area = ${fr('1', '2')}<i>d</i><sub>1</sub><i>d</i><sub>2</sub> = ${fr('1', '2')}(6)(6)<br>= 18 square units,<br>matching 2${sq(a)} = 2(3)<sup>2</sup> = 18.`,
          `For the lattice count, work along each horizontal line ${y} = <i>j</i> with <i>j</i> an integer from −3 to 3. There |${x}| ≤ 3 − |<i>j</i>|, which admits 2(3 − |<i>j</i>|) + 1 integer values of ${x}. Summing over <i>j</i> = −3, −2, …, 3 gives 1 + 3 + 5 + 7 + 5 + 3 + 1 = 25, and the formula agrees: 2(3)<sup>2</sup> + 2(3) + 1 = 25.`,
          '<b>Check.</b> The origin gives 0 ≤ 3, inside. The vertex (3, 0) gives 3 ≤ 3, on the boundary and included because the sign is non-strict. The point (2, 2) gives 4 ≤ 3, false: correctly outside, even though it looks close to the corner. The count 25 is odd, as the formula guarantees.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the area of the region {(${x}, ${y}) ∶ |${x}| + |${y}| ≤ 4 and |${x}| ≥ 1}.`,
        steps: [
          'Two conditions, both carrying moduli, and the second one punches a hole through the middle of the first. The temptation is to case-split all over again. Do not: identify the surviving pieces geometrically.',
          `The first condition is the square of the previous worked example’s family with ${a} = 4: vertices (±4, 0), (0, ±4), area 2(4)<sup>2</sup> = 32. The second condition, |${x}| ≥ 1, means ${x} ≥ 1 or ${x} ≤ −1, so it deletes the vertical strip −1 < ${x} < 1 and leaves two pieces. Since both defining conditions are unchanged when ${x} → −${x}, the two pieces are congruent: compute one and double.`,
          `<b>The right-hand piece</b>, where ${x} ≥ 1. It is bounded on the left by the line ${x} = 1 and on the right by the two square edges ${x} + ${y} = 4 (upper) and ${x} − ${y} = 4 (lower). The line ${x} = 1 meets those edges at (1, 3) and (1, −3), and the two edges meet each other at the vertex (4, 0). So the piece is the triangle with vertices (1, 3), (1, −3), (4, 0): base 6 along the line ${x} = 1, and height 4 − 1 = 3 measured horizontally to the apex. Its area is ${fr('1', '2')}(6)(3) = 9.`,
          'Doubling by symmetry: Area = 2 × 9 = 18 square units.',
          `<b>Independent cross-check by subtraction.</b> The deleted strip is the hexagon with vertices (−1, 3), (0, 4), (1, 3), (1, −3), (0, −4), (−1, −3). Split it into the rectangle −1 ≤ ${x} ≤ 1, −3 ≤ ${y} ≤ 3, of area 2 × 6 = 12, plus two triangular caps (the upper one has vertices (−1, 3), (0, 4), (1, 3), so base 2 and height 1, area 1, and the lower one matches). The strip is therefore 12 + 1 + 1 = 14, and 32 − 14 = 18. Two independent decompositions, one answer.`,
          `<b>Check.</b> (2, 1) satisfies 3 ≤ 4 and 2 ≥ 1, so it is in the region; (0, 2) fails |${x}| ≥ 1; (1, 3) gives 4 ≤ 4 and 1 ≥ 1, a corner sitting on both boundaries at once. The leftover 18 is just over half of 32: plausible, since the deleted strip |${x}| < 1 runs through the widest part of the square and removes 14 of its 32 square units.`,
          '<b>Why it is Advanced-level.</b> The region is defined by two moduli conditions pulling in opposite directions, so neither the standard-shape table nor a single case split settles it alone. The mark-winning move is recognising that “subtract the excluded strip” and “double one congruent half” are the same computation approached from either end, and that the symmetry of the defining inequalities is what licenses both.',
        ],
        ans: 'Area = 2 × 9 = 18 square units.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Sketch |${x}| + |${y}| ≤ 2 and state its area.`,
            a: 'A square with vertices (±2, 0), (0, ±2); area 8 square units.',
          },
          {
            q: `Sketch |${x} − 2| + |${y}| ≤ 1 and state its area.`,
            a: 'The same square translated to centre (2, 0), with vertices (1, 0), (3, 0), (2, 1), (2, −1); area 2 square units.',
          },
          {
            q: `Describe the region |${x}| ≤ 3, |${y}| ≤ 2 and find its area.`,
            a: 'A rectangle centred at the origin, 6 wide and 4 tall; area 24 square units.',
          },
          {
            q: `Find the number of points with integer coordinates satisfying |${x}| + |${y}| ≤ 5.`,
            a: '2(5)<sup>2</sup> + 2(5) + 1 = 61.',
          },
          {
            q: `Find the area of the region satisfying both |${x} + ${y}| ≤ 2 and |${x} − ${y}| ≤ 2.`,
            a: `8 square units: by the identity max(|${x} + ${y}|, |${x} − ${y}|) = |${x}| + |${y}| this is exactly |${x}| + |${y}| ≤ 2, so no fresh work is needed.`,
          },
          {
            q: `Find the area of the region {(${x}, ${y}) ∶ |${x}| + |${y}| ≤ 4, ${y} ≥ ${x}}.`,
            a: `16 square units: the line ${y} = ${x} passes through the centre of a region symmetric about that centre, and any line through the centre of a centrally symmetric region bisects its area.`,
          },
          {
            q: `Find the area of the region {(${x}, ${y}) ∶ 1 ≤ |${x}| + |${y}| ≤ 3}.`,
            a: '2(3)<sup>2</sup> − 2(1)<sup>2</sup> = 18 − 2 = 16 square units.',
          },
          {
            q: `Describe the region |${x}| − |${y}| ≥ 1, and state whether it is bounded.`,
            a: `Two unbounded wedges opening left and right, with apexes at (1, 0) and (−1, 0), bounded by the four lines ${y} = ±(${x} − 1) and ${y} = ±(${x} + 1); unbounded.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic E · pp. 480–485 ────────────────
  {
    n: 'E',
    title: 'Repeated Factors: Reduce the Inequality Before You Draw It',
    extra: true,
    kalam: 'Even powers leave no trace on the curve, only a dot in the margin.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 04 gives you the correct rule (odd multiplicity crosses, even multiplicity bounces) and its fourth worked example walks a curve past a squared factor. That is enough while the exponents are 1 and 2. JEE does not stay there. A standard reference problem asks you to solve<br>${fr(`(${x} − ${fr('1', '2')})(${x} − 2)<sup>10000</sup>(${x} − 3)<sup>75</sup>(${x} + 2)<sup>93</sup>`, `(${x} + 1)<sup>253</sup>(${x} + 8)<sup>4</sup>`)} ≥ 0,<br>and nobody draws that curve. What you do instead is reduce the expression to a product of distinct linear factors that has the same sign everywhere, run the ordinary wavy curve on the reduction, and then re-attach the points the reduction threw away. Three rules do all of it.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>R1: Denominator to numerator.</b> For real <i>p</i> and <i>q</i> with <i>q</i> ≠ 0, the quotient ${fr('<i>p</i>', '<i>q</i>')} and the product <i>pq</i> have the same sign, because ${fr('<i>p</i>', '<i>q</i>')} = ${fr('<i>pq</i>', '<i>q</i><sup>2</sup>')} and <i>q</i><sup>2</sup> > 0. Therefore`,
      },
      {
        t: 'formula',
        kicker: 'Denominator to numerator',
        main: `${fr(`${P}(${x})`, `${Q}(${x})`)} ≷ 0 ⟺ ${P}(${x}) ⋅ ${Q}(${x}) ≷ 0<br>together with ${Q}(${x}) ≠ 0`,
        legend: [`${P} = the numerator of the single quotient`, `${Q} = the denominator of the single quotient`],
        note: null,
      },
      {
        t: 'p',
        html: `• ${P}, ${Q}: the numerator and denominator after everything has been brought to one side and combined into a single quotient (Topic 04, Steps 1 and 2).<br>• The condition ${Q}(${x}) ≠ 0 is not optional bookkeeping; it is what keeps the two statements equivalent.`,
      },
      { t: 'p', html: `<b>R2: Parity of the exponent.</b> For a factor (${x} − ${r})<sup>${m}</sup>:` },
      {
        t: 'table',
        title: null,
        head: ['Exponent', 'Replace by', 'Record separately'],
        rows: [
          [`${m} even, factor in ${P}`, 'delete it', `${x} = ${r} makes the expression 0: a solution when the sign is ≤ or ≥, excluded when strict`],
          [`${m} even, factor in ${Q}`, 'delete it', `${x} = ${r} is excluded always`],
          [`${m} odd, factor in ${P}`, `(${x} − ${r})`, 'nothing'],
          [`${m} odd, factor in ${Q}`, `(${x} − ${r}), moved up by R1`, `${x} = ${r} is excluded always`],
        ],
      },
      {
        t: 'p',
        html: `• ${r}: the root; ${m}: its multiplicity.<br>• Why it is legal: (${x} − ${r})<sup>2${k}</sup> = [(${x} − ${r})<sup>${k}</sup>]<sup>2</sup> ≥ 0, so deleting it cannot change the sign anywhere except at ${x} = ${r} itself, where the whole expression was zero or undefined. And (${x} − ${r})<sup>2${k}+1</sup> = (${x} − ${r})[(${x} − ${r})<sup>${k}</sup>]<sup>2</sup> carries the sign of (${x} − ${r}) alone.`,
      },
      {
        t: 'p',
        html: `<b>R3: Constant-sign factors.</b> A quadratic ${QUAD} with ${DISC} < 0 never changes sign (Additional topic A).<br>• If ${a} > 0, it is positive everywhere: delete it, inequality unchanged.<br>• If ${a} < 0, it is negative everywhere: delete it and reverse the inequality.<br>• The same applies to numerical constants: delete a positive one, delete a negative one and reverse.`,
      },
      {
        t: 'proc',
        title: 'The procedure',
        steps: [
          `Bring everything to one side, combine into a single quotient, factor completely, and make every ${x}-coefficient positive, tracking each stray −1 into R3.`,
          'Apply R1, then R2, then R3. Write the recorded points in a margin list as you go: include candidates and exclude candidates.',
          'Run the Topic 04 wavy curve on the reduced product, which now has only distinct simple factors: no bouncing to think about, because the reduction has already absorbed it.',
          'Re-attach: delete every excluded point from the answer, and add back every included point, even if it sits alone in the middle of a rejected stretch.',
          'Substitute one value from each interval of your final answer into the original expression.',
        ],
      },
      {
        t: 'p',
        html: '<b>The error this method invites.</b> Step 2 changes the expression’s value while preserving its sign, so a root you deleted no longer appears in the reduced picture at all. Miss Step 4 and you lose an isolated solution point silently: the answer looks clean and is wrong. Write the margin list before you draw anything.',
      },
      {
        t: 'p',
        html: `<b>Substitution: when the same block repeats.</b> If one expression appears more than once, name it. For ${t} = ${fr(`<i>ax</i> + ${b}`, `<i>cx</i> + <i>d</i>`)} or ${t} = ${sq(x)} + <i>bx</i>, solve the inequality in ${t} first, then push each resulting ${t}-interval back through the substitution as its own rational inequality.<br>• Each ${t}-condition must be solved by the Topic 04 method, bringing everything to one side. Cross-multiplying ${XM1X2} ≤ 1 by ${x} + 2 is the same illegal move it always was.<br>• The final answer is the union or intersection of the pushed-back sets according to whether the ${t}-answer was a union or an intersection.<br>• Do not assume ${t} ranges over all of ℝ; a value of ${t} your ${t}-answer permits may be unreachable, in which case its push-back is simply empty.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        fig: 'm11-05-E-d1',
        q: `Solve ${fr(`(${x} − 2)<sup>3</sup>(${x} + 1)<sup>4</sup>(${x} − 5)`, `(${x} + 3)<sup>2</sup>(${x} − 1)`)} ≥ 0.`,
        steps: [
          `Every ${x}-coefficient is already positive, so no sign is hiding.`,
          `<b>Apply R1.</b> The quotient has the sign of the product<br>(${x} − 2)<sup>3</sup>(${x} + 1)<sup>4</sup>(${x} − 5)(${x} + 3)<sup>2</sup>(${x} − 1),<br>provided ${x} ≠ −3 and ${x} ≠ 1.`,
          `<b>Apply R2, keeping the margin list.</b><br>• (${x} − 2)<sup>3</sup> → (${x} − 2).<br>• (${x} + 1)<sup>4</sup>: even, from the numerator. Delete; record ${x} = −1 as an include candidate, since the sign is ≥ and the expression is 0 there.<br>• (${x} + 3)<sup>2</sup>: even, from the denominator. Delete; record ${x} = −3 as exclude.<br>• (${x} − 5) and (${x} − 1): already simple.`,
          `<b>The reduced inequality.</b><br>(${x} − 1)(${x} − 2)(${x} − 5) ≥ 0.`,
          'Roots 1, 2, 5, all simple. Anchor positive on the far right and walk left, flipping at each: positive on (5, ∞), negative on (2, 5), positive on (1, 2), negative on (−∞, 1). The reduced answer is [1, 2] ∪ [5, ∞).',
          `<b>Re-attach.</b> Delete ${x} = 1, which is a denominator root, leaving (1, 2] ∪ [5, ∞). The excluded point ${x} = −3 happens to lie outside this set already; check it anyway rather than assuming. Add the isolated point ${x} = −1.`,
          `<b>Check.</b> At ${x} = −1 the numerator vanishes, so the expression is 0 ≥ 0: included. At ${x} = 0 the original evaluates to −${fr('40', '9')}, negative: correctly outside, and note that ${x} = 0 sits between two accepted pieces, which is exactly the shape a bare wavy curve would have smoothed over. At ${x} = 1.5 the expression is positive; at ${x} = 3 it is negative; at ${x} = 2 and ${x} = 5 it is 0, so both endpoints are included. At ${x} = −3 and ${x} = 1 it is undefined.`,
        ],
        ans: `${x} ∈ {−1} ∪ (1, 2] ∪ [5, ∞).`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Solve (${XM1X2})<sup>2</sup> − 3(${XM1X2}) + 2 ≥ 0.`,
        steps: [
          `The block ${XM1X2} appears twice, so name it: let ${t} = ${XM1X2}, with ${x} ≠ −2 throughout.`,
          `<b>Solve in ${t}.</b><br>${sq(t)} − 3${t} + 2 ≥ 0<br>⟹ (${t} − 1)(${t} − 2) ≥ 0<br>⟹ ${t} ≤ 1 or ${t} ≥ 2.`,
          `A union in ${t}, so the two push-backs will be unioned.`,
          `<b>Push back the branch ${t} ≤ 1.</b> Bring to one side; do not cross-multiply:<br>${XM1X2} − 1 ≤ 0<br>⟹ ${fr(`(${x} − 1) − (${x} + 2)`, `${x} + 2`)} ≤ 0<br>⟹ ${fr('−3', `${x} + 2`)} ≤ 0.`,
          `A negative constant over ${x} + 2 is ≤ 0 exactly when ${x} + 2 > 0 (it is never 0), so this branch gives ${x} > −2.`,
          `<b>Push back the branch ${t} ≥ 2.</b><br>${XM1X2} − 2 ≥ 0<br>⟹ ${fr(`(${x} − 1) − 2(${x} + 2)`, `${x} + 2`)} ≥ 0<br>⟹ ${fr(`−(${x} + 5)`, `${x} + 2`)} ≥ 0<br>⟹ ${fr(`${x} + 5`, `${x} + 2`)} ≤ 0.`,
          `Critical points ${x} = −5 (numerator, filled since the sign is non-strict) and ${x} = −2 (denominator, always hollow). The quotient is ≤ 0 between them, so this branch gives [−5, −2).`,
          '<b>Union the branches.</b>',
          `Equivalently: every real number except ${x} = −2 and the stretch ${x} < −5.`,
          `<b>Check.</b> At ${x} = −5: ${t} = ${fr('−6', '−3')} = 2 and ${sq(t)} − 3${t} + 2 = 0, so the endpoint belongs. At ${x} = −6: ${t} = ${fr('−7', '−4')} = ${fr('7', '4')}, which lies strictly between 1 and 2, so ${sq(t)} − 3${t} + 2 = −${fr('3', '16')} < 0: correctly excluded, and it is the only kind of ${x} that is. At ${x} = 0: ${t} = −${fr('1', '2')} ≤ 1, giving ${fr('15', '4')} > 0, included. At ${x} = −2 the expression is undefined.`,
          `<b>Why it is Advanced-level.</b> The substitution is the easy half; the trap is what happens on the way back. Students who solve ${t} ≤ 1 by cross-multiplying get ${x} − 1 ≤ ${x} + 2, which is true for every ${x}, and so hand in all of ℝ minus {−2}, losing the exclusion ${x} < −5 entirely. The ${t}-answer being a union rather than an intersection is the second decision point: intersecting the two push-backs instead would give (−2, ∞) ∩ [−5, −2) = ∅, an empty answer.`,
        ],
        ans: `${x} ∈ [−5, −2) ∪ (−2, ∞).`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Solve ${fr(`(${x} − 1)<sup>2</sup>(${x} + 4)`, `${x} − 2`)} ≥ 0.`,
            a: `(−∞, −4] ∪ {1} ∪ (2, ∞): the squared numerator factor survives only as the isolated point ${x} = 1.`,
          },
          {
            q: `Solve ${fr(`(${x} + 1)(${x} − 4)`, `(${x} − 2)<sup>2</sup>`)} ≤ 0.`,
            a: `[−1, 2) ∪ (2, 4]: the even denominator root ${x} = 2 is punched out of the middle of the answer.`,
          },
          {
            q: `Solve ${fr(`(${sq(x)} − 4)<sup>2</sup>(${x} + 1)`, `(${x} − 3)<sup>4</sup>`)} ≤ 0.`,
            a: `(−∞, −1] ∪ {2}: note that ${x} = −2 is already inside the first piece while ${x} = 2 is isolated.`,
          },
          {
            q: `Solve ${fr(`(${x} + 2)<sup>3</sup>(${x} − 3)<sup>2</sup>`, `(${x} − 1)<sup>4</sup>(${x} + 5)`)} ≤ 0.`,
            a: '(−5, −2] ∪ {3}.',
          },
          {
            q: `Solve ${fr(`(${sq(x)} + ${x} + 1)(${x} − 4)`, `(${x} + 1)<sup>2</sup>`)} ≥ 0.`,
            a: `[4, ∞): the quadratic ${sq(x)} + ${x} + 1 has ${D} = −3 < 0 with a positive leading coefficient, so R3 deletes it; ${x} = −1 is excluded but lies outside the answer anyway.`,
          },
          {
            q: `Solve ${fr(`(3 − ${x})<sup>5</sup>(${x} + 2)`, `(${x} − 6)<sup>2</sup>`)} ≥ 0.`,
            a: `[−2, 3]: rewrite (3 − ${x})<sup>5</sup> as −(${x} − 3)<sup>5</sup> and let R3 reverse the inequality; (${x} − 6)<sup>2</sup> deletes with ${x} = 6 excluded.`,
          },
          {
            q: `Solve ${fr(`(${x} − 1)<sup>6</sup>(${x} + 3)`, `(${x} − 5)<sup>3</sup>`)} ≤ 0.`,
            a: `[−3, 5): the sixth power deletes and its root ${x} = 1 falls inside the interval regardless.`,
          },
          {
            q: `Solve (${fr(`${x} + 1`, `${x} − 1`)})<sup>2</sup> − 4(${fr(`${x} + 1`, `${x} − 1`)}) + 3 < 0.`,
            a: '(2, ∞).',
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic F · pp. 485–489 ────────────────
  {
    n: 'F',
    title: 'Reading a Region Backwards: Writing the System from the Picture',
    extra: true,
    kalam: 'One interior point fixes every sign.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 02 always runs in one direction: you are handed inequalities and you shade. The Boards run it the other way too. You are shown a shaded region (or, more often now ${ESTIMATE}, told only its corner points) and asked to write the system of inequalities that defines it. The same reversal is the first half of any Class 12 Linear Programming question in which the feasible region arrives as a picture and you must recover the constraints before you can optimise.<br><br>The forward direction is already in the chapter (Topic 02’s third and fourth worked examples find vertices and area, Topic 03’s fourth evaluates an objective at the corners). This is the arrow the chapter has drawn only once, in a single multiple-choice question of Topic 02, and never worked through.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `1. <b>Count the edges.</b> A region bounded by ${n} straight edges needs exactly ${n} inequalities (such a region is convex, as every region a system defines is). If a listed edge lies along the ${x}-axis, its inequality is ${y} ≥ 0 or ${y} ≤ 0; along the ${y}-axis, ${x} ≥ 0 or ${x} ≤ 0.<br>2. <b>Find each boundary line.</b> From two corner points (${x}<sub>1</sub>, ${y}<sub>1</sub>) and (${x}<sub>2</sub>, ${y}<sub>2</sub>) on the edge, use the two-point form<br>${fr(`${y} − ${y}<sub>1</sub>`, `${x} − ${x}<sub>1</sub>`)} = ${fr(`${y}<sub>2</sub> − ${y}<sub>1</sub>`, `${x}<sub>2</sub> − ${x}<sub>1</sub>`)},<br>or, when the edge cuts the axes at (<i>p</i>, 0) and (0, <i>q</i>), use the intercept form ${fr(x, '<i>p</i>')} + ${fr(y, '<i>q</i>')} = 1 and clear denominators.<br>3. <b>Decide the direction with one interior point.</b> Pick any point strictly inside the shaded region: for a bounded region the centroid of the corners always works, and for a triangle with corners <i>A</i>, <i>B</i>, <i>C</i> that is ${fr('1', '3')}(<i>A</i> + <i>B</i> + <i>C</i>). Substitute it into each boundary equation and write the sign that makes the statement true.<br>4. <b>Decide strictness from the drawing.</b> Solid edge gives ≤ or ≥; dotted edge gives < or >. If the problem lists corner points as belonging to the region, the edges meeting there are solid.<br>5. <b>Audit before you write the final answer.</b> Every listed corner must satisfy all ${n} inequalities, with equality holding in at least two of them. The interior point must satisfy all ${n}. A point just outside the middle of one edge must fail exactly that one.`,
      },
      {
        t: 'p',
        html: `<b>Bounded or unbounded.</b> The direction of the inequalities, not their number, decides this. A first-quadrant region with all constraints of the form <i>ax</i> + <i>by</i> ≤ ${c} (with ${a}, ${b}, ${c} > 0) is bounded; if the constraints read <i>ax</i> + <i>by</i> ≥ ${c}, the region is unbounded away from the origin. This is the fact that decides, in Class 12, whether a maximum exists at all.`,
      },
      { t: 'fig', id: 'm11-05-F-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A shaded region is the triangle with vertices (0, 0), (4, 0) and (0, 3), with all three boundaries drawn solid. Write the system of inequalities that defines it.',
        steps: [
          'Three edges, so three inequalities.',
          `<b>Edge along the ${y}-axis</b>, joining (0, 0) and (0, 3): the line ${x} = 0.`,
          `<b>Edge along the ${x}-axis</b>, joining (0, 0) and (4, 0): the line ${y} = 0.`,
          `<b>Slant edge</b>, joining (4, 0) and (0, 3): intercepts <i>p</i> = 4 and <i>q</i> = 3, so<br>${fr(x, '4')} + ${fr(y, '3')} = 1 ⟹ 3${x} + 4${y} = 12.`,
          `<b>Direction.</b> The centroid of the three vertices is (${fr('4', '3')}, 1); the tidier interior point (1, 1) also lies inside. Substituting (1, 1):<br>• into ${x}: 1 > 0, so the constraint is ${x} ≥ 0;<br>• into ${y}: 1 > 0, so the constraint is ${y} ≥ 0;<br>• into 3${x} + 4${y}: 3 + 4 = 7, and 7 < 12, so the constraint is 3${x} + 4${y} ≤ 12.`,
          'All three edges are solid, so all three signs are non-strict.',
          `<b>Audit.</b> (0, 0): 0 ≥ 0, 0 ≥ 0, 0 ≤ 12: satisfied, with equality in the first two. (4, 0): equality in ${y} ≥ 0 and in 3${x} + 4${y} ≤ 12. (0, 3): equality in ${x} ≥ 0 and in 3${x} + 4${y} ≤ 12. The outside point (2, 3) gives 6 + 12 = 18 > 12 and fails only the third constraint, as it should.`,
        ],
        ans: `${x} ≥ 0, ${y} ≥ 0, 3${x} + 4${y} ≤ 12.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A shaded region lies in the first quadrant, has corner points (0, 8), (2, 4) and (10, 0), is bounded below-left by two solid slant edges, and extends without limit away from the origin. Write the system of inequalities that defines it, and state whether the region is bounded.',
        steps: [
          'Here you are given no equations at all (only corners), so every line must be reconstructed.',
          `<b>Edge joining (0, 8) and (2, 4).</b> Slope = ${fr('4 − 8', '2 − 0')} = −2, so ${y} = 8 − 2${x}, that is<br>2${x} + ${y} = 8.`,
          `<b>Edge joining (2, 4) and (10, 0).</b> Slope = ${fr('0 − 4', '10 − 2')} = −${fr('1', '2')}, so ${y} − 4 = −${fr('1', '2')}(${x} − 2), giving 2${y} − 8 = −${x} + 2, that is<br>${x} + 2${y} = 10.`,
          `<b>Direction.</b> The region extends away from the origin, so test a point well out in it, say (5, 5):<br>• 2(5) + 5 = 15 ≥ 8: true, so the constraint is 2${x} + ${y} ≥ 8;<br>• 5 + 2(5) = 15 ≥ 10: true, so the constraint is ${x} + 2${y} ≥ 10.`,
          'Confirm with the origin, which must fail: 0 ≥ 8 is false and 0 ≥ 10 is false, so (0, 0) is outside both, consistent with a region pushed away from the origin.',
          `<b>The two axis constraints.</b> The region lies in the first quadrant and the corners (0, 8) and (10, 0) sit on the axes, so ${x} ≥ 0 and ${y} ≥ 0 are genuine edges of the region, not decoration.`,
          'Both slant constraints point away from the origin, so the region is <b>unbounded</b>.',
          `<b>Audit.</b> (2, 4): 2(2) + 4 = 8 and 2 + 2(4) = 10: equality in both slant constraints, which is exactly what a corner formed by their intersection must give. (0, 8): 8 ≥ 8 with equality, 16 ≥ 10, ${x} = 0: equality in two constraints. (10, 0): 20 ≥ 8, 10 ≥ 10 with equality, ${y} = 0. The point (4, 2) satisfies 2${x} + ${y} = 10 ≥ 8 but ${x} + 2${y} = 8 < 10, so it fails exactly one constraint and lies just outside the second edge: the discriminating test that a corner-only reading can otherwise miss.`,
          `<b>The Class 12 hook.</b> Because this region is unbounded, a linear objective <i>Z</i> = <i>ax</i> + <i>by</i> with ${a}, ${b} > 0 has a minimum at one of these corners but no maximum at all. Recovering the system correctly is what lets you say so; recovering it with the inequalities reversed would have produced a bounded quadrilateral with vertices (0, 0), (4, 0), (2, 4), (0, 5) and a confident wrong answer.`,
        ],
        ans: `2${x} + ${y} ≥ 8, ${x} + 2${y} ≥ 10, ${x} ≥ 0, ${y} ≥ 0.`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Write the system for the solid-edged triangle with vertices (1, 0), (4, 0), (1, 3).',
            a: `${x} ≥ 1, ${y} ≥ 0, ${x} + ${y} ≤ 4.`,
          },
          {
            q: 'A dotted line passes through (4, 0) and (0, −2), and the shaded region contains the origin. Write the inequality.',
            a: `${x} − 2${y} < 4: the line is ${x} − 2${y} = 4 and the origin gives 0 < 4, true.`,
          },
          {
            q: `Write the square |${x}| ≤ 2, |${y}| ≤ 2 as a system of four linear inequalities in ${x} and ${y}.`,
            a: `${x} ≤ 2, ${x} ≥ −2, ${y} ≤ 2, ${y} ≥ −2.`,
          },
          {
            q: 'Write the system for the solid-edged quadrilateral with vertices (0, 0), (6, 0), (4, 2), (0, 4).',
            a: `${x} ≥ 0, ${y} ≥ 0, ${x} + ${y} ≤ 6, ${x} + 2${y} ≤ 8.`,
          },
          {
            q: 'Write the system for the solid-edged triangle with vertices (0, 0), (4, 0), (2, 2).',
            a: `${y} ≥ 0, ${y} ≤ ${x}, ${x} + ${y} ≤ 4.`,
          },
          {
            q: 'A first-quadrant region has solid-edged corner points (0, 5), (1, 3), (4, 0) and extends away from the origin. Write the system and state whether it is bounded.',
            a: `2${x} + ${y} ≥ 5, ${x} + ${y} ≥ 4, ${x} ≥ 0, ${y} ≥ 0; unbounded. The edge (0, 5) to (1, 3) has slope −2 and the edge (1, 3) to (4, 0) has slope −1, so (1, 3) is a genuine corner where the two slant constraints meet with equality.`,
          },
        ],
      },

      { t: 'part', title: 'Everything on one screen' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Modulus regions in the plane',
            note: `each modulus argument = 0 gives a critical line; drop the bars on each piece, shade the half-plane, intersect with the piece, union. |${x}| + |${y}| ≤ ${a} is a square with vertices (±${a}, 0), (0, ±${a}): side ${a}√2, area 2${sq(a)}, inradius ${fr(a, '√2')}, circumradius ${a}. |${x}| ≤ ${a}, |${y}| ≤ ${b} is a rectangle of area 4<i>ab</i>. |${x} − ${y}| ≤ ${a} is an unbounded band. Integer points in |${x}| + |${y}| ≤ ${n}: 2${sq(n)} + 2${n} + 1, always odd.`,
          },
          {
            f: 'Symmetry first',
            note: `invariance under ${x} → −${x}, ${y} → −${y}, or ${x} ↔ ${y} lets you sketch one quadrant or one half and reflect. A line through the centre of a centrally symmetric region bisects its area.`,
          },
          {
            f: 'Reduce before you draw',
            note: `${fr(P, Q)} has the sign of ${P} ⋅ ${Q} with ${Q} ≠ 0. Even powers delete (record the root: include if it came from ${P} under ≤ or ≥, exclude always if from ${Q}); odd powers collapse to the single factor; a quadratic with ${D} < 0 deletes, reversing the inequality if its leading coefficient is negative.`,
          },
          {
            f: 'Re-attach, always',
            note: 'The reduced curve cannot show you an isolated solution point. Keep a margin list of include and exclude candidates and apply it to the final interval set.',
          },
          {
            f: 'Substitution',
            note: `name a repeating block ${t}, solve in ${t}, then push each ${t}-interval back as its own rational inequality, bringing to one side, never cross-multiplying. Union in ${t} gives a union in ${x}.`,
          },
          {
            f: 'Region to system',
            note: `${n} edges give ${n} inequalities. Line from two corners or from intercepts; direction from one interior point; strictness from solid versus dotted; then audit every corner and one outside point. All-≤ against the origin means bounded; all-≥ means unbounded, and an unbounded first-quadrant feasible region has no maximum for a positive objective.`,
          },
        ],
        aids: [
          '“A modulus on the line is a point pair; a modulus in the plane is a fold.”',
          '“Reduce, draw, then re-attach.”',
          '“Even powers leave no trace on the curve, only a dot in the margin.”',
          '“One interior point fixes every sign.”',
        ],
      },
    ],
  },
];
