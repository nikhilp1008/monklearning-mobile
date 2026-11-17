import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Additional topics A–E, pp. 419–436 of the Class 12 Mathematics
 * Master Reference (October 2026 edition), word for word: the "Chapter 6:
 * Applications of Derivatives — Additional Topics" part's Addenda A to E, with
 * the book's letters. Its heading is not copied; its p. 419 opening paragraph is
 * the first paragraph of A's "Introduction". Each addendum's opening text is its
 * "Introduction" part, then "Method", the run of "Example X.N" worked examples
 * (one part, "Worked examples"), and "Practice — Addendum X" ("Practice",
 * answers set against their questions). E's answers end partway down p. 436,
 * where Addendum P starts. The book's "Appendix A" (tangents and normals) is
 * Topic 04 here, its "Subtopic 02" Topic 02; its example numbers in running text
 * are reworded to what the reader shows. The displayed equations stay in the
 * prose; eight formula cards were added after review rm126b (decision 27). B.3's
 * parameter table is written as lines of its step; E's segment table is a table
 * block. No drawings on these pages. d upright in dy/dx, e upright. Every
 * fraction is stacked (<frac>); a fraction inside a fraction is written with ÷;
 * no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner after an opening modulus bar, so the bar never ends a line. */
const WJ = '\u2060';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const a = I('a');
const b = I('b');
const c = I('c');
const f = I('f');
const g = I('g');
const h = I('h');
const k = I('k');
const m = I('m');
const n = I('n');
const p = I('p');
const q = I('q');
const r = I('r');
const t = I('t');
const u = I('u');
const v = I('v');
const w = I('w');
const x = I('x');
const y = I('y');
const A = I('A');
const F = I('F');
const K = I('K');
const M = I('M');
const N = I('N');
const P = I('P');
const T = I('T');
const X = I('X');
const Y = I('Y');
const ph = I('φ');
const mu = I('μ');
const lam = I('λ');
const th = I('θ');
const al = I('α');
const be = I('β');

const of = (fn: string, arg: string) => `${fn}(${arg})`;
const abs = (s: string) => `|${WJ}${s}|`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const cu = (s: string) => `${s}<sup>3</sup>`;
const pw = (s: string, e: string) => `${s}<sup>${e}</sup>`;
const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
/** An interval, its comma glued. */
const iv = (lo: string, hi: string, o = '(', cl = ')') => `${o}${lo},${NB}${hi}${cl}`;
/** A point, its comma glued. */
const pt = (s1: string, s2: string) => `(${s1},${NB}${s2})`;
/** e raised to a run, e upright. */
const ex = (e: string) => `e<sup>${e}</sup>`;

const X2 = sq(x);
const X3 = cu(x);
const X4 = pw(x, '4');
const X5 = pw(x, '5');
const fx = of(f, x);
const fc = of(f, c);
const fp = (s: string) => `${f}′(${s})`;
const fpp = (s: string) => `${f}″(${s})`;
const gp = (s: string) => `${g}′(${s})`;
/** The k-th derivative f⁽ᵏ⁾, the order in brackets. */
const fN = (o: string) => `${f}<sup>(${o})</sup>`;
const fNat = (o: string, s: string) => `${fN(o)}(${s})`;
const HALF = fr('1', '2');
const P2 = fr('π', '2');
const SINX = `sin${NB}${x}`;
const COSX = `cos${NB}${x}`;
const DYDX = fr(`d${y}`, `d${x}`);
const AB = iv(a, b);
const ABc = iv(a, b, '[', ']');
const fa = of(f, a);
const fb = of(f, b);
const ga = of(g, a);
const gb = of(g, b);
const a0 = sb(a, '0');
const a1 = sb(a, '1');
const a2 = sb(a, '2');
const an = sb(a, n);
const POLY = `${a0} + ${a1}${x} + ${a2}${X2} + ⋯ + ${an}${pw(x, n)}`;
const SUMC = `${a0} + ${fr(a1, '2')} + ${fr(a2, '3')} + ⋯ + ${fr(an, `${n} + 1`)}`;
const R2 = `√(1 + ${sq(m)})`;
const MT = I('MT');
const MN = I('MN');
const PT = I('PT');
const PN = I('PN');
const MY = I('my');
const AT2 = `${I('at')}<sup>2</sup>`;
const R7 = '√7';
const QP = `√(${fr(q, p)})`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 419–423 ────────────────
  {
    n: 'A',
    title: 'Rolle’s Theorem and the Mean Value Theorem',
    extra: true,
    kalam: 'An interior extremum of a differentiable function has zero derivative.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter taught you related rates, monotonicity, and maxima–minima, with Topics 04 and 05 on tangents/normals and approximations. Five examinable structures are still standing outside. Additional topic A supplies Rolle’s theorem and the Mean Value Theorem: the material the rationalised CBSE syllabus deleted, which JEE papers have long tested and JEE Advanced still uses, and the hidden engine behind the monotonicity theorem the chapter uses without proof. Additional topic B takes monotonicity to the two jobs JEE actually hires it for: counting real roots against a parameter, and proving chained inequalities by the comparative lemma. Additional topic C answers the question the chapter dodges (what happens when the Second Derivative Test returns zero) via the ${n}-th derivative test, concavity and points of inflection. Additional topic D handles absolute extrema on open and unbounded domains, where the chapter’s closed-interval working rule silently fails, plus parametrisation-based optimisation. Additional topic E completes Topic 04 with the subtangent–subnormal geometry that JEE repeatedly mines ${ESTIMATE}. Little here is new calculus: most methods are the sign chart and the critical-point audit, applied one level deeper than the chapter took them.`,
      },
      {
        t: 'p',
        html: `The chapter proves nothing about why ${fp(x)}${NB}>${NB}0 forces ${f} to increase: it cites Lagrange’s Mean Value Theorem and moves on, because MVT was deleted from the CBSE syllabus. Past JEE Main papers set it directly (“verify Rolle, find ${c}”, “use MVT to bound an expression”) ${ESTIMATE}, though as far as we know the current JEE Main syllabus no longer names it; JEE Advanced uses it as a root-existence tool. CBSE board papers no longer set it, but the theorem costs one page to learn and secures marks in JEE.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Rolle’s Theorem.</b> Let ${f} be continuous on ${ABc} and differentiable on ${AB}, with ${fa} = ${fb}. Then there exists ${c} ∈ ${AB} with<br>${fp(c)} = 0.`,
      },
      {
        t: 'p',
        html: `<b>Why it is true.</b> A continuous function on a closed interval attains a maximum and a minimum. If both sit at the endpoints, then ${fa} = ${fb} forces ${f} constant and every ${c} works. Otherwise some extremum sits at an interior point ${c}. Now the key lemma (Fermat): an interior extremum of a differentiable function has zero derivative. Suppose ${fc} is a local maximum. For small ${h}${NB}>${NB}0 the difference quotient obeys<br>${fr(`${of(f, `${c} + ${h}`)} − ${fc}`, h)} ≤ 0,<br>so the right-hand derivative is ≤${NB}0. For ${h}${NB}<${NB}0 the numerator is still ≤${NB}0 but ${h} is negative, so the quotient is ≥${NB}0, making the left-hand derivative ≥${NB}0. Both one-sided limits equal ${fp(c)}, so ${fp(c)}${NB}≤${NB}0 and ${fp(c)}${NB}≥${NB}0 simultaneously:<br>${fp(c)} = 0.`,
      },
      {
        t: 'p',
        html: `<b>Mean Value Theorem (Lagrange).</b> Let ${f} be continuous on ${ABc} and differentiable on ${AB}. Then there exists ${c} ∈ ${AB} with<br>${fb} − ${fa} = ${fp(c)}${NB}(${b} − ${a}).`,
      },
      {
        t: 'p',
        html: `<b>Why it is true.</b> Tilt the picture flat. Define<br>${of(ph, x)} = ${fx} − ${fa} − ${mu}${NB}(${x} − ${a}),<br>${mu} = ${fr(`${fb} − ${fa}`, `${b} − ${a}`)}.<br>Then ${of(ph, a)} = 0, and<br>${of(ph, b)} = ${fb} − ${fa} − ${mu}(${b} − ${a}) = 0<br>by the choice of ${mu}. Rolle applies to ${ph}: there is a ${c} ∈ ${AB} with ${ph}′(${c}) = ${fp(c)} − ${mu} = 0, which is exactly the statement. ■`,
      },
      {
        t: 'formula',
        kicker: 'Rolle’s theorem and the Mean Value Theorem',
        main: `${fa} = ${fb} ⇒ ${fp(c)} = 0 (Rolle)<br>${fp(c)} = ${fr(`${fb} − ${fa}`, `${b} − ${a}`)} (Lagrange)`,
        legend: [`${f} = continuous on ${ABc}, differentiable on ${AB}`, `${c} = some point of ${AB}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Cauchy’s Mean Value Theorem</b> (the two-function version JEE Advanced uses). If ${f} and ${g} are continuous on ${ABc}, differentiable on ${AB}, and ${gp(x)}${NB}≠${NB}0 there, then some ${c} ∈ ${AB} satisfies<br>${fr(`${fb} − ${fa}`, `${gb} − ${ga}`)} = ${fr(fp(c), gp(c))}.`,
      },
      {
        t: 'p',
        html: `<b>Why it is true.</b> Put ${lam} = ${fr(`${fb} − ${fa}`, `${gb} − ${ga}`)} and define<br>${of(F, x)} = ${fx} − ${fa} − ${lam}${NB}(${of(g, x)} − ${ga}).<br>Then ${of(F, a)} = 0 and<br>${of(F, b)} = ${fb} − ${fa} − ${lam}${NB}(${gb} − ${ga}) = 0.<br>Rolle gives ${F}′(${c}) = ${fp(c)} − ${lam}${NB}${gp(c)} = 0, and dividing by the nonzero ${gp(c)} finishes it. ■`,
      },
      {
        t: 'formula',
        kicker: 'Cauchy’s Mean Value Theorem',
        main: `${fr(`${fb} − ${fa}`, `${gb} − ${ga}`)} = ${fr(fp(c), gp(c))}`,
        legend: [`${f}, ${g} = continuous on ${ABc}, differentiable on ${AB}`, `${gp(x)} ≠ 0 on ${AB}`, `${c} = some point of ${AB}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Three consequences you will use constantly.</b><br>1. If ${fp(x)} = 0 at every point of an interval, ${f} is constant there. Proof: for any two points, MVT gives<br>${of(f, sb(x, '2'))} − ${of(f, sb(x, '1'))} = ${fp(c)}(${sb(x, '2')} − ${sb(x, '1')}) = 0.<br>2. If ${abs(fp(x))} ≤ ${M} on an interval, then ${abs(`${fb} − ${fa}`)} ≤ ${M}${NB}${abs(`${b} − ${a}`)} there. Proof: take absolute values in MVT.<br>3. Between any two distinct zeros of ${f} lies a zero of ${f}′ (this is Rolle restated). Iterating: ${n} distinct zeros of ${f} force at least ${n} − 1 zeros of ${f}′, at least ${n} − 2 of ${f}″, and so on.`,
      },
      {
        t: 'p',
        html: `<b>Hypothesis discipline.</b> All three theorems need continuity on the closed interval and differentiability on the open interval. A corner like ${abs(x)} at 0, or a hole like ${fr('1', x)} at 0, voids the contract, and examiners set traps precisely there.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board / JEE Main Level',
        q: `Verify Rolle’s theorem for ${fx} = ${X3} − 3${x} on ${iv('0', '√3', '[', ']')} and find the point ${c}.`,
        steps: [
          `Continuity and differentiability hold everywhere (polynomial). Endpoints:<br>${of(f, '0')} = 0,<br>${of(f, '√3')} = 3√3 − 3√3 = 0.`,
          `So ${of(f, '0')} = ${of(f, '√3')} and Rolle promises a ${c} ∈ ${iv('0', '√3')} with ${fp(c)} = 0. Now<br>${fp(x)} = 3${X2} − 3 = 3(${x} − 1)(${x} + 1),<br>which vanishes at ${x} = ±1. Only ${c} = 1 lies in ${iv('0', '√3')}. Verified, with ${c} = 1.`,
          `<b>Contrast: why the hypotheses matter.</b> Take ${fx} = ${abs(x)} on ${iv('−1', '1', '[', ']')}. Here ${of(f, '−1')} = ${of(f, '1')} = 1, yet no ${c} has ${fp(c)} = 0: the derivative is −1 left of 0, +1 right of it, and does not exist at 0. Differentiability on the open interval fails, the theorem does not apply, and the conclusion genuinely fails with it. A verification question expects you to check all three hypotheses, not just the endpoint values.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `For 0${NB}<${NB}${a}${NB}<${NB}${b}, prove that<br>${fr(`${b} − ${a}`, b)} < ln${NB}${fr(b, a)} < ${fr(`${b} − ${a}`, a)}.`,
        steps: [
          `Apply the MVT to ${of(f, t)} = ln${NB}${t} on ${ABc}. Everything is continuous and differentiable, so there is a ${c} ∈ ${AB} with<br>ln${NB}${b} − ln${NB}${a} = ${fr('1', c)}${NB}(${b} − ${a}).`,
          `The left side is ln(${fr(b, a)}). Now squeeze ${c}. Since ${a}${NB}<${NB}${c}${NB}<${NB}${b}, taking reciprocals reverses the inequalities:<br>${fr('1', b)} < ${fr('1', c)} < ${fr('1', a)},<br>and multiplying through by the positive number ${b} − ${a} gives the result. ■`,
          `<b>Instant corollary.</b> Put ${a} = 1, ${b} = 1 + ${x} with ${x}${NB}>${NB}0:<br>${fr(x, `1 + ${x}`)} < ln(1 + ${x}) < ${x}.<br>Both bounds come from one MVT application: this pair of inequalities is a standing JEE favourite ${ESTIMATE}.`,
        ],
        ans: '',
      },
      {
        t: 'formula',
        kicker: 'Logarithm bounds from the MVT',
        main: `${fr(`${b} − ${a}`, b)} < ln${NB}${fr(b, a)} < ${fr(`${b} − ${a}`, a)}<br>${fr(x, `1 + ${x}`)} < ln(1 + ${x}) < ${x}`,
        legend: [`${a}, ${b} = numbers with 0 < ${a} < ${b}`, `${x} = any positive number`],
        note: null,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Suppose ${SUMC} = 0. Show that the equation<br>${POLY} = 0<br>has at least one root in ${iv('0', '1')}.`,
        steps: [
          `The given sum is not the polynomial at any obvious point, so build a function whose derivative is the polynomial. Define<br>${of(F, x)} = ${a0}${x} + ${fr(`${a1}${X2}`, '2')} + ${fr(`${a2}${X3}`, '3')} + ⋯ + ${fr(`${an}${pw(x, `${n}+1`)}`, `${n} + 1`)}.`,
          `Then ${F} is a polynomial, hence continuous on ${iv('0', '1', '[', ']')} and differentiable on ${iv('0', '1')}, and term-by-term differentiation gives<br>${F}′(${x}) = ${POLY}.`,
          `Evaluate the endpoints:<br>${of(F, '0')} = 0,<br>${of(F, '1')} = ${a0} + ${fr(a1, '2')} + ⋯ + ${fr(an, `${n} + 1`)} = 0<br>by the given condition. Rolle’s theorem applies verbatim: some ${c} ∈ ${iv('0', '1')} has ${F}′(${c}) = 0, i.e. the polynomial vanishes at ${c}. ■`,
          `<b>Why it is Advanced-level.</b> Nothing in the statement mentions derivatives. The mark-winning move is recognising that a condition on a sum of coefficients is a condition on ${of(F, '1')} for a deliberately constructed antiderivative: Rolle then converts “${of(F, '0')} = ${of(F, '1')}” into a root. This antiderivative construction recurs whenever JEE hides Rolle inside a coefficient condition.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `This topic’s first worked example verifies Rolle for ${fx} = ${X3} − 3${x} on ${iv('0', '√3', '[', ']')}; now verify it for ${fx} = ${SINX} on ${iv('0', 'π', '[', ']')} and find ${c}.`,
            a: `${of(f, '0')} = ${of(f, 'π')} = 0; ${fp(x)} = ${COSX} = 0<br>gives ${c} = ${P2} ∈ ${iv('0', 'π')}.`,
          },
          {
            q: `Explain why the MVT cannot be applied to ${fx} = ${fr('1', x)} on ${iv('−1', '1', '[', ']')}, and show the conclusion fails anyway.`,
            a: `${f} is not defined (hence not continuous) at 0 ∈ ${iv('−1', '1', '[', ']')}. Conclusion fails: the MVT would give some ${c} with<br>${fp(c)} = ${fr(`${of(f, '1')} − ${of(f, '−1')}`, '1 − (−1)')} = ${fr('1 − (−1)', '2')} = 1,<br>but ${fp(x)} = −${fr('1', X2)} < 0 wherever it exists.`,
          },
          {
            q: `Using the MVT, prove ${abs(`tan${NB}${a} − tan${NB}${b}`)} ≥ ${abs(`${a} − ${b}`)} for all ${a},${NB}${b} ∈ ${iv(`−${P2}`, P2)}.`,
            a: `MVT on ${ABc} (WLOG ${a}${NB}<${NB}${b}): tan${NB}${a} − tan${NB}${b} = sec<sup>2</sup>${NB}${c}${NB}(${a} − ${b}) for some ${c}; since sec<sup>2</sup>${NB}${c} ≥ 1, taking absolute values gives the claim.`,
          },
          {
            q: `Prove that for ${x}${NB}>${NB}0, ${fr(x, `1 + ${x}`)} < ln(1 + ${x}) < ${x} without quoting this topic’s second worked example: apply the MVT directly on ${iv('0', x, '[', ']')}.`,
            a: `There is a ${c} ∈ ${iv('0', x)} with ln(1 + ${x}) − ln${NB}1 = ${fr(x, `1 + ${c}`)}; from 0${NB}<${NB}${c}${NB}<${NB}${x} get<br>${fr(x, `1 + ${x}`)} < ${fr(x, `1 + ${c}`)} < ${x}.`,
          },
          {
            q: `A cubic ${of(p, x)} has three distinct real roots. Show that ${p}′(${x}) has two distinct real roots and ${p}″(${x}) has at least one.`,
            a: `Label the roots ${sb(r, '1')} < ${sb(r, '2')} < ${sb(r, '3')}; Rolle on ${iv(sb(r, '1'), sb(r, '2'), '[', ']')} and ${iv(sb(r, '2'), sb(r, '3'), '[', ']')} gives zeros ${sb(c, '1')}${NB}≠${NB}${sb(c, '2')} of ${p}′; Rolle on ${iv(sb(c, '1'), sb(c, '2'), '[', ']')} gives a zero of ${p}″.`,
          },
          {
            q: `Given ${a0} + ${fr(a1, '2')} + ${fr(a2, '3')} = 0, show that ${a0} + ${a1}${x} + ${a2}${X2} = 0 has a root in ${iv('0', '1')}.`,
            a: `Apply this topic’s third worked example with ${n} = 2:<br>${of(F, x)} = ${a0}${x} + ${fr(`${a1}${X2}`, '2')} + ${fr(`${a2}${X3}`, '3')}<br>has ${of(F, '0')} = ${of(F, '1')} = 0, so ${F}′(${c}) = 0 for some ${c} ∈ ${iv('0', '1')}.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic B · pp. 423–426 ────────────────
  {
    n: 'B',
    title: 'Monotonicity II: Counting Roots and Comparative Inequalities',
    extra: true,
    kalam: 'The lemma converts “compare derivatives” into “compare values”, one rung at a time.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter extracts increasing/decreasing intervals and proves single inequalities anchored at one point. JEE asks monotonicity to do two harder jobs. First, root auditing: how many real solutions does an equation have, as a parameter varies, answered by reading the signs of ${f} at its successive extrema. Second, chained inequalities: proving ${SINX} squeezed between two polynomials, where one auxiliary function needs another auxiliary function to certify it. One lemma powers the second job, and one protocol powers the first.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>The comparative lemma.</b> Let ${f} and ${g} be continuous on ${iv(a, b, '[', ')')} and differentiable on ${iv(a, b)}, with<br>${fa} ≥ ${ga}${NB}${NB}and${NB}${NB}${fp(x)} > ${gp(x)} for all ${x} ∈ ${iv(a, b)}.<br>Then ${fx} > ${of(g, x)} for every ${x} ∈ ${iv(a, b)}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Put ${h} = ${f} − ${g}. Then ${of(h, a)}${NB}≥${NB}0 and ${h}′(${x})${NB}>${NB}0, so ${h} is strictly increasing on the interval (monotonicity theorem). Hence for ${x}${NB}>${NB}${a},<br>${of(h, x)} > ${of(h, a)} ≥ 0,<br>which is ${fx} > ${of(g, x)}. ■`,
      },
      {
        t: 'formula',
        kicker: 'The comparative lemma',
        main: `${fa} ≥ ${ga} and ${fp(x)} > ${gp(x)} on ${AB}<br>⇒ ${fx} > ${of(g, x)} on ${AB}`,
        legend: [`${f}, ${g} = continuous on ${iv(a, b, '[', ')')}, differentiable on ${AB}`, `with only ≥ between the derivatives, the conclusion is ≥`],
        note: null,
      },
      {
        t: 'p',
        html: `• If you only have ${fp(x)} ≥ ${gp(x)}, the conclusion weakens to ${fx} ≥ ${of(g, x)}: track strictness honestly.<br>• The anchor ${a} is usually 0, where both functions vanish. The lemma converts “compare derivatives” into “compare values”, one rung at a time.`,
      },
      {
        t: 'p',
        html: `<b>Chained inequalities.</b> To prove ${of(P, x)} < ${of(I('Q'), x)} < ${of(I('R'), x)} for ${x}${NB}>${NB}0: prove each link separately by the lemma, and allow links to borrow earlier links; proving the derivative of one auxiliary function positive may itself require the previous link. Order the proofs so borrowing is legal.`,
      },
      {
        t: 'p',
        html: `<b>Root-audit protocol.</b> To count the real roots of ${fx} = 0:<br>1. Fix the domain and confirm continuity on each piece.<br>2. Compute ${f}′, find all critical points, and sort them: ${sb(c, '1')} < ${sb(c, '2')} < ⋯<br>3. On each monotonic branch the graph crosses the axis <b>at most once</b>.<br>4. Evaluate ${f} at each critical point and take the limits at the ends of the domain (±∞, vertical asymptotes). A branch has exactly one root when its two end-values have opposite signs, and none when they have the same sign; an end-value of 0 is a root at that critical point, shared with the next branch and counted once.<br>5. Add the per-branch counts. For a parameter ${k}, the boundary between “different counts” occurs when an extremum value hits 0: solve ${of(f, sb(c, I('i')))} = 0 for ${k} and test the resulting intervals.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Prove that for all ${x}${NB}>${NB}0,<br>ln(1 + ${x}) > ${x} − ${fr(X2, '2')}.`,
        steps: [
          `Set ${of(h, x)} = ln(1 + ${x}) − ${x} + ${fr(X2, '2')}, so ${of(h, '0')} = 0. Differentiate:<br>${h}′(${x}) = ${fr('1', `1 + ${x}`)} − 1 + ${x}<br>= ${fr(`1 − (1 + ${x}) + ${x}(1 + ${x})`, `1 + ${x}`)}<br>= ${fr(X2, `1 + ${x}`)}.`,
          `For ${x}${NB}>${NB}0 the right side is strictly positive, so ${h}′${NB}>${NB}0 on ${iv('0', '∞')} and the comparative lemma (with ${g} ≡ ${of(h, '0')} = 0) gives ${of(h, x)} > ${of(h, '0')} = 0. ■`,
          `<b>Check.</b> At ${x} = 1: ln${NB}2 ≈ 0.693 versus 1 − 0.5 = 0.5: holds. As ${x} → 0<sup>+</sup> both sides tend to 0, consistent with the anchor.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Prove that for all ${x}${NB}>${NB}0,<br>${x} − ${fr(X3, '6')} < ${SINX} < ${x}.`,
        steps: [
          `<b>Upper link first.</b> Let ${of(u, x)} = ${SINX} − ${x}, so ${of(u, '0')} = 0 and<br>${u}′(${x}) = ${COSX} − 1 ≤ 0,<br>with equality only at isolated points ${x} = 2${n}π. By the sharpened monotonicity theorem (Topic 02), ${u} is strictly decreasing, so ${of(u, x)} < ${of(u, '0')} = 0 for ${x}${NB}>${NB}0. That is ${SINX} < ${x}. Record it.`,
          `<b>Lower link, borrowing the upper one.</b> Let ${of(w, x)} = ${SINX} − ${x} + ${fr(X3, '6')}, so ${of(w, '0')} = 0 and<br>${w}′(${x}) = ${COSX} − 1 + ${fr(X2, '2')}.`,
          `Whether ${w}′${NB}>${NB}0 is not immediate, so build one more auxiliary. Let ${of(v, x)} = ${COSX} − 1 + ${fr(X2, '2')}, so ${of(v, '0')} = 0 and<br>${v}′(${x}) = −${NB}${SINX} + ${x}.`,
          `But −${NB}${SINX} + ${x} > 0 for ${x}${NB}>${NB}0 is exactly the upper link just proved. So ${v}′${NB}>${NB}0, hence ${of(v, x)} > ${of(v, '0')} = 0, hence ${w}′(${x}) > 0, hence ${of(w, x)} > ${of(w, '0')} = 0. That is ${SINX} > ${x} − ${fr(X3, '6')}. ■`,
          '<b>Why it is Advanced-level.</b> The chain has a required proof order: the lower link is false to attempt before the upper link is established, because its derivative certificate consumes the upper link. Recognising which auxiliary to prove first, and reusing a proved inequality inside another derivative, is the examined skill, not the differentiation.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main rising to Advanced',
        q: `Determine the number of real roots of ${X3} − 3${x} + ${k} = 0 as ${k} ranges over ℝ.`,
        steps: [
          `Run the audit on ${fx} = ${X3} − 3${x} + ${k}. Domain ℝ, and<br>${fp(x)} = 3${X2} − 3 = 3(${x} − 1)(${x} + 1),<br>so the critical points are ${x} = −1 (local maximum) and ${x} = 1 (local minimum), since ${fpp(x)} = 6${x}. The extremum values:<br>${of(f, '−1')} = −1 + 3 + ${k} = ${k} + 2,<br>${of(f, '1')} = 1 − 3 + ${k} = ${k} − 2.`,
          `End behaviour: ${fx} → −∞ as ${x} → −∞ and ${fx} → +∞ as ${x} → +∞. Three monotonic branches, each crossing at most once:<br>• Branch ${iv('−∞', '−1', '(', ']')}: rises from −∞ to ${k} + 2. Has a root ⟺ ${k} + 2 ≥ 0 ⟺ ${k} ≥ −2.<br>• Branch ${iv('−1', '1', '[', ']')}: falls from ${k} + 2 to ${k} − 2. Has a root ⟺ ${k} + 2 ≥ 0 ≥ ${k} − 2 ⟺ −2 ≤ ${k} ≤ 2.<br>• Branch ${iv('1', '∞', '[', ')')}: rises from ${k} − 2 to +∞. Has a root ⟺ ${k} − 2 ≤ 0 ⟺ ${k} ≤ 2.`,
          `The branches share their end-points ${x} = ±1, so a root sitting exactly at a critical point is counted once; this is why the boundary values ${k} = ±2 are treated separately in the table. Combining (parameter range: real roots of ${X3} − 3${x} + ${k} = 0):<br>−2 < ${k} < 2: three distinct<br>${k} = 2 or ${k} = −2: two distinct (one double)<br>${k} < −2 or ${k} > 2: exactly one`,
          `<b>Verification of the boundary rows.</b> At ${k} = 2 the polynomial factors as (${x} − 1)<sup>2</sup>(${x} + 2): a double root at 1 (the local minimum touching the axis) and a simple root at −2. At ${k} = −2 it factors as (${x} + 1)<sup>2</sup>(${x} − 2). Both match the audit exactly.`,
          `<b>Check.</b> ${k} = 0: the table predicts three roots. Indeed ${X3} − 3${x} = ${x}(${x} − √3)(${x} + √3). ${k} = 5: predicted one root; ${of(f, '−1')} = 7 > 0 and ${of(f, '1')} = 3 > 0, so the middle and right branches stay positive and only the left branch crosses.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Prove ${ex(x)} > 1 + ${x} + ${fr(X2, '2')} for all ${x}${NB}>${NB}0.`,
            a: `Let ${h} = ${ex(x)} − 1 − ${x} − ${fr(X2, '2')}; then ${of(h, '0')} = 0 and ${h}′ = ${ex(x)} − 1 − ${x} > 0 for ${x}${NB}>${NB}0 (apply the lemma recursively, or note ${ex(x)} − 1 − ${x} has derivative ${ex(x)} − 1 > 0 and value 0 at 0). Hence ${of(h, x)} > 0.`,
          },
          {
            q: `Determine the number of real roots of 2${X3} − 9${X2} + 12${x} − 3 = 0.`,
            a: `${f}′ = 6(${x} − 1)(${x} − 2); extremum values ${of(f, '1')} = 2 > 0 and ${of(f, '2')} = 1 > 0. Left branch rises from −∞ to 2: one root. Middle branch falls from 2 to 1: none. Right branch rises from 1 to ∞: none. Exactly one real root.`,
          },
          {
            q: `Prove tan${NB}${x} > ${x} for all ${x} ∈ ${iv('0', P2)} using the comparative lemma.`,
            a: `${h} = tan${NB}${x} − ${x}, ${of(h, '0')} = 0, ${h}′ = sec<sup>2</sup>${NB}${x} − 1 = tan<sup>2</sup>${NB}${x} > 0 on ${iv('0', P2)}; lemma gives ${h}${NB}>${NB}0.`,
          },
          {
            q: `Find all real ${k} for which ${X3} − 3${x} + ${k} = 0 has exactly one real root.`,
            a: `${k}${NB}<${NB}−2 or ${k}${NB}>${NB}2.`,
          },
          {
            q: `Show that the equation ${x}${ex(x)} = 2 has exactly one real root.`,
            a: `Let ${f} = ${x}${ex(x)} − 2; ${f}′ = ${ex(x)}(1 + ${x}), so ${f} decreases on ${iv('−∞', '−1', '(', ']')} from the limit −2 (since ${x}${ex(x)} → 0<sup>−</sup>) to ${of(f, '−1')} = −${fr('1', 'e')} − 2 < 0: no root there. On ${iv('−1', '∞', '[', ')')}, ${f} increases from a negative value to +∞: exactly one root. Total: one.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic C · pp. 426–429 ────────────────
  {
    n: 'C',
    title: 'When the Second Test Is Silent: Higher Derivatives, Concavity, Inflection',
    extra: true,
    kalam: 'Same diagnostic, opposite realities.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter’s Second Derivative Test has a hole it admits but never patches: at ${X4} the origin has ${fpp('0')} = 0 and the test “fails”, while at ${X3} the same reading signals a non-extremum. Same diagnostic, opposite realities. JEE loves this border. This additional topic supplies the complete classification (the ${n}-th derivative test, with proof) and the concavity/inflection vocabulary that JEE examines.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>The fallback hierarchy.</b> At a critical point ${c} with ${fp(c)} = 0:<br>1. Try ${fpp(c)}. Nonzero ⇒ done (chapter’s test).<br>2. If ${fpp(c)} = 0, the first-derivative sign chart always settles it: build it and look for a flip.<br>3. When derivatives are cheap to compute, the ${n}-th derivative test below is the fast lane.`,
      },
      {
        t: 'p',
        html: `<b>The ${n}-th derivative test.</b> Suppose that near ${c} the derivatives of ${f} up to order ${n} exist, ${fN(n)} is continuous at ${c} (true for the polynomial, exponential and trigonometric functions exams use), and<br>${fp(c)} = ${fpp(c)} = ⋯ = ${fNat(`${n}−1`, c)} = 0,<br>${fNat(n, c)}${NB}≠${NB}0.<br>Then:<br>• ${n} <b>even</b>: ${c} is a strict local maximum if ${fNat(n, c)}${NB}<${NB}0, a strict local minimum if ${fNat(n, c)}${NB}>${NB}0.<br>• ${n} <b>odd</b>: ${c} is not an extremum; the graph crosses its horizontal tangent there: a stationary point of inflection.`,
      },
      {
        t: 'formula',
        kicker: `The ${n}-th derivative test`,
        main: `${n} even: ${fNat(n, c)} < 0 ⇒ strict local maximum<br>${fNat(n, c)} > 0 ⇒ strict local minimum<br>${n} odd: no extremum (stationary inflection)`,
        legend: [
          `${n} = the order of the first derivative that is not zero at ${c} (${fp(c)} = ⋯ = ${fNat(`${n}−1`, c)} = 0)`,
          `${fN(n)} = continuous at ${c}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Why it is true.</b> WLOG ${fNat(n, c)}${NB}>${NB}0 (otherwise reverse every sign below). By continuity, ${fN(n)}${NB}>${NB}0 on some interval around ${c}, so ${fN(`${n}−1`)} is strictly increasing there; since ${fNat(`${n}−1`, c)} = 0,<br>${fN(`${n}−1`)} < 0 just left of ${c},<br>${fN(`${n}−1`)} > 0 just right of ${c}.`,
      },
      {
        t: 'p',
        html: `So ${fN(`${n}−2`)} strictly decreases to ${c} and strictly increases after: a strict local minimum of ${fN(`${n}−2`)} at ${c}, and since ${fNat(`${n}−2`, c)} = 0,<br>${fNat(`${n}−2`, x)} > 0 for ${x}${NB}≠${NB}${c} near ${c}.`,
      },
      {
        t: 'p',
        html: `The pattern now locks in and alternates down the ladder. Each derivative at odd distance below ${n} (orders ${n} − 1, ${n} − 3, …) is strictly monotone through ${c} and changes sign there; each derivative at even distance (orders ${n} − 2, ${n} − 4, …) has a strict local minimum, value 0, at ${c}. Descending to order zero, the same steps apply to ${fx} − ${fc}, which vanishes at ${c}:<br>• ${n} even: ${fx} − ${fc} lands in an even slot ⇒ ${fx} > ${fc} for ${x}${NB}≠${NB}${c} near ${c}: strict local minimum at ${c}.<br>• ${n} odd: ${fx} − ${fc} lands in an odd slot ⇒ ${f} is strictly increasing through ${c} ⇒ no extremum, stationary inflection. ■`,
      },
      {
        t: 'p',
        html: `<b>Concavity and inflection.</b> ${f} is concave upward on intervals where ${f}″${NB}>${NB}0 and concave downward where ${f}″${NB}<${NB}0. A point of inflection is an interior domain point where the concavity changes. Two facts, both examinable:<br>• If ${f}″ is continuous and ${c} is an inflection point, then ${fpp(c)} = 0: a sign change forces a zero. Necessary, not sufficient: ${fx} = ${X4} has ${fpp('0')} = 0 yet ${f}″${NB}≥${NB}0 everywhere, so no inflection.<br>• Procedure: solve ${fpp(x)} = 0, then test the sign of ${f}″ on each side. Only sign-changers count.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Locate and classify all critical points and all inflection points of ${fx} = 3${X5} − 5${X3}.`,
        steps: [
          `First derivative:<br>${fp(x)} = 15${X4} − 15${X2}<br>= 15${X2}(${x} − 1)(${x} + 1),<br>so the critical points are ${x} = −1, 0, 1. Second derivative:<br>${fpp(x)} = 60${X3} − 30${x} = 30${x}${NB}(2${X2} − 1).`,
          `• ${x} = −1: ${fpp('−1')} = −30 < 0 ⇒ local maximum, ${of(f, '−1')} = −3 + 5 = 2.<br>• ${x} = 1: ${fpp('1')} = 30 > 0 ⇒ local minimum, ${of(f, '1')} = 3 − 5 = −2.<br>• ${x} = 0: ${fpp('0')} = 0; the test is silent. Fall back to the sign chart of ${f}′. Writing ${f}′ = 15${X2}(${x} − 1)(${x} + 1): on ${iv('−1', '0')} the signs are (+)(−)(+) = −; on ${iv('0', '1')} they are (+)(−)(+) = −. No flip ⇒ no extremum at 0.`,
          `Inflection candidates: ${f}″ = 0 at ${x} = 0 and ${x} = ±${fr('1', '√2')}. The sign of ${f}″ = 30${x}(2${X2} − 1) runs −, +, −, + across the four intervals cut by these points, changing at <b>every</b> candidate. So all three are inflection points, with values<br>${of(f, '0')} = 0,<br>${of(f, `±${fr('1', '√2')}`)} = ∓${fr('7√2', '8')}.`,
          `<b>Check.</b> ${x} = 0 is simultaneously a stationary inflection (from the ${f}′ chart) and an inflection (from the ${f}″ chart): consistent, since a stationary inflection must change concavity. The local max value 2 exceeds the local min value −2 with the origin between them: plausible for an odd-type quintic.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `<b>(a)</b> Show that ${fx} = ${X5} − 5${X4} + 10${X3} − 10${X2} + 5${x} + 2 has no extremum, and describe the behaviour at its critical point.<br><b>(b)</b> Show that ${of(g, x)} = ${X4} + 4${X3} + 6${X2} + 4${x} + 2 has a strict local minimum, and find it.`,
        steps: [
          `<b>(a)</b> Solve<br>${fp(x)} = 5${X4} − 20${X3} + 30${X2} − 20${x} + 5 = 0.<br>Rather than grind, test the suspicion of a binomial pattern: the coefficients 1, −5, 10, −10, 5 of ${f} are row five of Pascal’s triangle with alternating signs, so<br>${fx} = (${x} − 1)<sup>5</sup> + 3.`,
          `Check by expanding<br>(${x} − 1)<sup>5</sup> = ${X5} − 5${X4} + 10${X3} − 10${X2} + 5${x} − 1;<br>adding 3 reproduces ${f}. Now everything collapses:<br>${fp(x)} = 5(${x} − 1)<sup>4</sup>,<br>${fpp(x)} = 20(${x} − 1)<sup>3</sup>,<br>${fNat('3', x)} = 60(${x} − 1)<sup>2</sup>,<br>${fNat('4', x)} = 120(${x} − 1),<br>${fNat('5', x)} = 120.`,
          `At ${c} = 1: the first four derivatives vanish and ${fNat('5', '1')} = 120${NB}≠${NB}0. Here ${n} = 5 is <b>odd</b>, so by the ${n}-th derivative test ${x} = 1 is a stationary point of inflection: no maximum, no minimum. The graph crosses its horizontal tangent ${y} = 3 there.`,
          `<b>(b)</b> Similarly ${of(g, x)} = (${x} + 1)<sup>4</sup> + 1, so ${gp(x)} = 4(${x} + 1)<sup>3</sup> vanishes only at ${c} = −1, with<br>${g}″(−1) = ${g}<sup>(3)</sup>(−1) = 0,<br>${g}<sup>(4)</sup>(−1) = 24 > 0.<br>Here ${n} = 4 is <b>even</b> with a positive fourth derivative ⇒ strict local minimum, value ${of(g, '−1')} = 1. Note the Second Derivative Test alone could not have delivered this: ${g}″(−1) = 0.`,
          `<b>Why it is Advanced-level.</b> Both parts live exactly where the chapter’s toolkit stops: ${fpp(c)} = 0 at the only critical point. Part (a) rewards spotting the Pascal-row factorisation; part (b) shows the even-case half of the ${n}-th test earning its keep. In an exam where the pattern is not recognisable, the same conclusions follow from the first-derivative sign chart: slower but unconditional.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the points of inflection of ${fx} = ${X3} − 6${X2} + 9${x}.`,
            a: `${f}″ = 6${x} − 12, zero at ${x} = 2 with a sign change ⇒ inflection at ${pt('2', '2')}.`,
          },
          {
            q: `Show that ${fx} = ${X4} has a strict local minimum at 0 even though ${fpp('0')} = 0, and name which test settles it.`,
            a: `${f}′ = 4${X3} changes sign from − to + at 0 ⇒ strict local minimum by the First Derivative Test (equivalently, the ${n}-th test with ${n} = 4, ${fNat('4', '0')} = 24 > 0).`,
          },
          {
            q: `Locate and classify the critical points of ${fx} = ${X5} − 5${x} + 3.`,
            a: `${f}′ = 5(${X2} − 1)(${X2} + 1); critical points ${x} = ±1; ${f}″ = 20${X3} gives ${fpp('1')} = 20 > 0 ⇒ local min ${of(f, '1')} = −1, and ${fpp('−1')} = −20 < 0 ⇒ local max ${of(f, '−1')} = 7.`,
          },
          {
            q: `Determine whether ${fx} = ${pw(x, '7')} + ${x} has an extremum anywhere.`,
            a: `${f}′ = 7${pw(x, '6')} + 1 > 0 for all ${x} ⇒ strictly increasing, no critical points, no extremum.`,
          },
          {
            q: `[Advanced] For ${fx} = ${pw(x, '6')} − 3${X4} + 3${X2}, find all critical points, classify each, and locate all inflection points.`,
            a: `Factor ${f} = (${X2} − 1)<sup>3</sup> + 1, so ${f}′ = 6${x}(${X2} − 1)<sup>2</sup>. Critical points ${x} = 0, ±1. The sign of ${f}′ is negative on ${iv('−∞', '0')} and positive on ${iv('0', '∞')} ⇒ strict local minimum at ${x} = 0, value ${of(f, '0')} = 0; no sign change at ±1 ⇒ not extrema. Further, ${f}″ = 6(${X2} − 1)(5${X2} − 1) changes sign at ${x} = ±1 and ${x} = ±${fr('1', '√5')} ⇒ four inflection points; those at ${x} = ±1 are stationary, those at ${x} = ±${fr('1', '√5')} are not.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic D · pp. 429–433 ────────────────
  {
    n: 'D',
    title: 'Extrema on Open and Unbounded Domains; Parametrised Optimisation',
    extra: true,
    kalam: '“No global minimum” is a full-credit answer when the limits demand it.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter’s absolute-extrema rule, “evaluate at critical points and both endpoints, compare”, is a closed-interval rule. On ${iv('0', '∞')}, on ℝ, or on any domain with a missing or infinite end, there are no endpoints to evaluate, and the rule returns nothing. Yet JEE Main’s most common optimisation question lives exactly there ${ESTIMATE}: minimise ${x} + ${fr(a, x)}, find the closest point on a curve, maximise an inscribed rectangle. This additional topic supplies the existence test that replaces the endpoint audit, and the parametrisation trick that dissolves constrained problems.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Existence on an unbounded domain.</b> Let ${f} be continuous on ${iv(al, be)}, where either end may be infinite, and differentiable there except perhaps at finitely many points; suppose<br>${fx} → +∞ as ${x} → ${al}<sup>+</sup> and as ${x} → ${be}<sup>−</sup>.<br>Then ${f} attains a global minimum, and it occurs at an interior critical point.`,
      },
      {
        t: 'p',
        html: `<b>Why.</b> Fix ${sb(x, '0')} and put ${K} = ${of(f, sb(x, '0'))}. Since ${f} blows up at both ends, some closed subinterval ${iv(p, q, '[', ']')} ⊂ ${iv(al, be)} contains ${sb(x, '0')} with ${f}${NB}>${NB}${K}${NB}+${NB}1 outside it. The closed-interval working rule gives a least value ${m}${NB}≤${NB}${K} on ${iv(p, q, '[', ']')}. If that least value were attained at ${p} or ${q}, continuity would force values just outside ${iv(p, q, '[', ']')} to be close to ${m}${NB}≤${NB}${K}, contradicting ${f}${NB}>${NB}${K}${NB}+${NB}1 there. So the minimiser is interior, hence a critical point (where ${f}′ is zero or does not exist). ■`,
      },
      {
        t: 'p',
        html: 'With −∞ limits, the same argument yields a global maximum. If an end-limit is finite, that value joins the comparison list instead of winning automatically.',
      },
      {
        t: 'p',
        html: `<b>Working rule for open/unbounded domains.</b><br>1. State the domain; find all interior critical points.<br>2. Compute the limits of ${f} at every end of the domain.<br>3. If both end-limits are +∞: the smallest critical value is the global minimum. If both are −∞: the largest critical value is the global maximum. If an end-limit is finite, include it in the comparison.<br>4. Declare existence or non-existence explicitly: “no global minimum” is a full-credit answer when the limits demand it.`,
      },
      {
        t: 'p',
        html: `<b>The model family.</b> For ${p},${NB}${q}${NB}>${NB}0 and ${x}${NB}>${NB}0, ${fx} = ${I('px')} + ${fr(q, x)} has<br>${fp(x)} = ${p} − ${fr(q, X2)} = 0 ⟺ ${x} = ${QP},<br>${fpp(x)} = ${fr(`2${q}`, X3)} > 0,<br>so the global minimum is<br>${of(f, QP)} = ${p}${QP} + ${q} ÷ ${QP}<br>= √${I('pq')} + √${I('pq')} = 2√${I('pq')}.`,
      },
      {
        t: 'formula',
        kicker: `Minimum of ${I('px')} + ${q} ÷ ${x}`,
        main: `${I('px')} + ${fr(q, x)} ≥ 2√${I('pq')}<br>equality at ${x} = ${QP}`,
        legend: [`${p}, ${q} = positive constants`, `${x} = any positive number`],
        note: null,
      },
      {
        t: 'p',
        html: `Cross-check by AM–GM:<br>${I('px')} + ${fr(q, x)} ≥ 2√(${I('px')}${NB}·${NB}${fr(q, x)}) = 2√${I('pq')},<br>equality when ${I('px')} = ${fr(q, x)}. Calculus and AM–GM agree: use whichever is faster, but be able to run both.`,
      },
      {
        t: 'p',
        html: `<b>Parametrisation.</b> When the constraint is a circle or ellipse, parametrise it by angle, (${a}${NB}cos${NB}${th}, ${b}${NB}sin${NB}${th}) for an ellipse, turning a constrained problem into a single trig function. This routinely beats eliminating a variable through a square root.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the global minimum of ${fx} = ${x} + ${fr('4', X2)} for ${x}${NB}>${NB}0.`,
        steps: [
          `Domain ${iv('0', '∞')}; differentiate:<br>${fp(x)} = 1 − ${fr('8', X3)},<br>${fp(x)} = 0 ⟺ ${X3} = 8 ⟺ ${x} = 2.`,
          `Curvature: ${fpp(x)} = ${fr('24', X4)} > 0, so ${x} = 2 is a local minimum with<br>${of(f, '2')} = 2 + ${fr('4', '4')} = 3.`,
          `End-limits: ${f} → +∞ as ${x} → 0<sup>+</sup> (the ${fr('4', X2)} term explodes) and ${f} → +∞ as ${x} → ∞. Both ends dead-end upward, so by the existence test the local minimum is global:<br>min<sub>${x}>0</sub>${NB}${f} = 3 at ${x} = 2.`,
          `<b>Independent cross-check.</b> Split ${x} = ${fr(x, '2')} + ${fr(x, '2')} and apply AM–GM to the three positive terms ${fr(x, '2')}, ${fr(x, '2')}, ${fr('4', X2)}:<br>${fx} ≥ 3${NB}⋅${NB}<sup>3</sup>√(${fr(x, '2')} · ${fr(x, '2')} · ${fr('4', X2)})<br>= 3${NB}⋅${NB}<sup>3</sup>√1 = 3,<br>with equality when ${fr(x, '2')} = ${fr('4', X2)}, i.e. ${X3} = 8, i.e. ${x} = 2. Same answer, no calculus.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the greatest area of a rectangle inscribed in the ellipse ${fr(X2, sq(a))} + ${fr(sq(y), sq(b))} = 1, and the rectangle that achieves it.`,
        steps: [
          `By symmetry the maximal rectangle has sides parallel to the axes; let (${a}${NB}cos${NB}${th}, ${b}${NB}sin${NB}${th}), ${th} ∈ ${iv('0', P2)}, be its first-quadrant vertex. Then the sides are 2${a}${NB}cos${NB}${th} and 2${b}${NB}sin${NB}${th}, and<br>${of(A, th)} = 4${I('ab')}${NB}sin${NB}${th}${NB}cos${NB}${th}<br>= 2${I('ab')}${NB}sin${NB}2${th} ≤ 2${I('ab')},<br>with equality at ${th} = ${fr('π', '4')}. The greatest area is 2${I('ab')}, achieved by the rectangle with sides ${a}√2 and ${b}√2.`,
          `<b>Elimination cross-check.</b> Substitute ${y} = ${b}√(1 − ${fr(X2, sq(a))}), so<br>${of(A, x)} = 4${I('bx')}√(1 − ${fr(X2, sq(a))})<br>on 0${NB}<${NB}${x}${NB}<${NB}${a}. Maximising ${A} is equivalent to maximising<br>${sq(A)} = 16${sq(b)}(${X2} − ${fr(X4, sq(a))}),<br>whose derivative in ${x} vanishes when<br>2${x} − ${fr(`4${X3}`, sq(a))} = 0<br>(equivalently 1 − ${fr(`2${X2}`, sq(a))} = 0),<br>giving ${x} = ${fr(a, '√2')}: the same rectangle.`,
          `The parametrisation reached it in one line; elimination needed a square-root differentiation. On a circle (${a} = ${b} = ${I('R')}) the answer specialises to the familiar square of area 2${sq(I('R'))}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the point on the parabola ${sq(y)} = 4${x} closest to the point ${pt('2', '1')}, and the shortest distance.`,
        steps: [
          `Minimise squared distance (monotone in distance, and kinder to differentiate). With ${x} = ${fr(sq(y), '4')}, the target is a function of ${y} alone:<br>${of(g, y)} = (${fr(sq(y), '4')} − 2)<sup>2</sup> + (${y} − 1)<sup>2</sup>.`,
          `Expand before differentiating (the cross terms cancel):<br>${of(g, y)} = ${fr(pw(y, '4'), '16')} − ${sq(y)} + 4 + ${sq(y)} − 2${y} + 1<br>= ${fr(pw(y, '4'), '16')} − 2${y} + 5.`,
          `Then<br>${g}′(${y}) = ${fr(cu(y), '4')} − 2 = 0 ⟺ ${cu(y)} = 8 ⟺ ${y} = 2,<br>and ${g}″(${y}) = ${fr(`3${sq(y)}`, '4')} > 0 there. Since ${g} → +∞ as ${y} → ±∞, the existence test makes this the global minimum. The closest point is ${y} = 2, ${x} = 1: the point ${pt('1', '2')}, at distance<br>√((1 − 2)<sup>2</sup> + (2 − 1)<sup>2</sup>) = √2.`,
          `<b>Geometric check (ties to Topic 04).</b> The joining segment from ${pt('2', '1')} to ${pt('1', '2')} has slope −1. The tangent to ${sq(y)} = 4${x} at ${pt('1', '2')}: from 2${y}${NB}${DYDX} = 4 get ${DYDX} = ${fr('2', y)} = 1, so the tangent has slope 1 and the segment, with slope −1, is perpendicular to it. The shortest segment is normal to the curve, as it must be, since walking along the curve, the distance to a fixed point has a critical point exactly where the displacement is perpendicular to the tangent. Any answer failing this normal test is wrong on sight.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the minimum value of 2${x} + ${fr('8', x)} for ${x}${NB}>${NB}0.`,
            a: `${f}′ = 2 − ${fr('8', X2)} = 0 at ${x} = 2; ${f}″${NB}>${NB}0; value 8 (also the model family with ${p} = 2, ${q} = 8: 2√16 = 8).`,
          },
          {
            q: `Find the global maximum of ${fx} = ${x}e<sup>−${x}</sup> on ℝ, and determine whether a global minimum exists.`,
            a: `${f}′ = e<sup>−${x}</sup>(1 − ${x}) = 0 at ${x} = 1; sign of ${f}′ flips + to − ⇒ global maximum ${fr('1', 'e')} (end-limits: ${f} → 0<sup>+</sup> as ${x} → ∞, ${f} → −∞ as ${x} → −∞). No global minimum: the function descends without bound.`,
          },
          {
            q: `A rectangle has its base on the diameter of a semicircle of radius ${r} and its upper vertices on the arc. Find its greatest area.`,
            a: `Vertices ${pt(`±${x}`, '0')}, (±${x}, √(${sq(r)} − ${X2})); area ${A} = 2${x}√(${sq(r)} − ${X2}); maximise ${sq(A)} = 4${X2}(${sq(r)} − ${X2}): derivative zero at ${x} = ${fr(r, '√2')}; greatest area ${sq(r)}.`,
          },
          {
            q: `Find the minimum value of 3${X2} + ${fr('2', X3)} for ${x}${NB}>${NB}0.`,
            a: `${f}′ = 6${x} − ${fr('6', X4)} = 0 ⟺ ${X5} = 1 ⟺ ${x} = 1; ${f}″ = 6 + ${fr('24', X5)} > 0; end-limits +∞ both sides ⇒ global minimum 3 + 2 = 5.`,
          },
          {
            q: `Find the point(s) on the parabola ${y} = ${X2} closest to ${pt('0', '2')}, and the shortest distance.`,
            a: `Minimise ${g} = ${X2} + (${X2} − 2)<sup>2</sup> = ${X4} − 3${X2} + 4; ${g}′ = 2${x}(2${X2} − 3) = 0 gives ${x} = 0 (local max, ${g} = 4) and ${x} = ±√(${fr('3', '2')}) (minima, ${g}″ = 12${X2} − 6 > 0 there). Two closest points (±${fr('√6', '2')}, ${fr('3', '2')}), each at distance √(${fr('7', '4')}) = ${fr('√7', '2')}<br>(since ${g} = ${fr('9', '4')} − ${fr('9', '2')} + 4 = ${fr('7', '4')}).`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic E · pp. 433–436 ────────────────
  {
    n: 'E',
    title: 'Tangents and Normals II: Subtangent, Subnormal, Intercepts',
    extra: true,
    kalam: 'Ten minutes of setup unlocks a whole question family.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 04 gives you the equations of the tangent and normal and stops. JEE goes one step further and asks about the segments these lines cut off, the subtangent and subnormal, because for certain curves these segments are gloriously constant, and “show the subnormal of ${sq(y)} = 4${I('ax')} is constant” is a standing JEE pattern ${ESTIMATE}. Ten minutes of setup unlocks a whole question family.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Setup.</b> Let ${P} = ${pt(x, y)} be a point on ${y} = ${fx} with ${y}${NB}≠${NB}0 and ${m} = ${DYDX}${NB}≠${NB}0. Draw the vertical through ${P} meeting the ${x}-axis at ${M} = ${pt(x, '0')}. Let the tangent meet the ${x}-axis at ${T} and the normal meet it at ${N}. Four segments are named:`,
      },
      {
        t: 'table',
        title: null,
        head: ['Segment', 'Name', 'Length'],
        rows: [
          [MT, 'subtangent', abs(fr(y, m))],
          [MN, 'subnormal', abs(MY)],
          [PT, 'length of tangent', fr(`${abs(y)}${R2}`, abs(m))],
          [PN, 'length of normal', `${abs(y)}${R2}`],
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Derivations.</b> The tangent at ${P} is ${Y} − ${y} = ${m}(${X} − ${x}). Setting ${Y} = 0:<br>−${y} = ${m}(${X} − ${x}) ⟹ ${X} = ${x} − ${fr(y, m)},<br>so ${T} = (${x} − ${fr(y, m)},${NB}0) and the subtangent is ${MT} = ${abs(fr(y, m))}. The normal is ${Y} − ${y} = −${fr('1', m)}(${X} − ${x}); setting ${Y} = 0 gives −${MY} = −(${X} − ${x}), so<br>${X} = ${x} + ${MY},<br>and the subnormal is ${MN} = ${abs(MY)}.`,
      },
      {
        t: 'p',
        html: `The lengths follow from right triangles: ${PT} spans legs ${abs(y)} and ${abs(fr(y, m))}, so<br>${PT} = √(${sq(y)} + ${fr(sq(y), sq(m))}) = ${fr(`${abs(y)}${R2}`, abs(m))},<br>and ${PN} spans legs ${abs(y)} and ${abs(MY)}, giving ${PN} = ${abs(y)}${R2}.`,
      },
      {
        t: 'formula',
        kicker: 'Subtangent, subnormal and lengths',
        main: `${MT} = ${abs(fr(y, m))}, ${MN} = ${abs(MY)}<br>${PT} = ${fr(`${abs(y)}${R2}`, abs(m))}, ${PN} = ${abs(y)}${R2}`,
        legend: [`${m} = ${DYDX} at ${P} = ${pt(x, y)}, with ${y}, ${m} ≠ 0`, `${M} = foot of the ordinate`, `${T}, ${N} = where the tangent and normal meet the ${x}-axis`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Intercepts of the tangent.</b> From the same computation, the tangent’s ${x}-intercept is ${x} − ${fr(y, m)} and its ${y}-intercept (set ${X} = 0 in the tangent equation) is ${y} − ${I('mx')}. The triangle cut off from the axes therefore has area<br>${HALF}${abs(`(${x} − ${fr(y, m)})(${y} − ${I('mx')})`)}.`,
      },
      {
        t: 'p',
        html: `<b>Two classics worth memorising with their proofs.</b><br>• <b>Exponential:</b> for ${y} = ${pw(a, x)} (${a}${NB}>${NB}0, ${a}${NB}≠${NB}1), ${m} = ${pw(a, x)}${NB}ln${NB}${a}, so the subtangent is the absolute value of<br>${fr(y, m)} = ${fr(pw(a, x), `${pw(a, x)}${NB}ln${NB}${a}`)} = ${fr('1', `ln${NB}${a}`)},<br>constant, independent of the point.`,
      },
      {
        t: 'p',
        html: `• <b>Parabola:</b> for ${sq(y)} = 4${I('ax')}, differentiate to get 2${y}${NB}${DYDX} = 4${a}, so ${m} = ${fr(`2${a}`, y)}, and the subnormal is<br>${MY} = ${fr(`2${a}`, y)} · ${y} = 2${a},<br>constant: the subnormal of the parabola ${sq(y)} = 4${I('ax')} equals its latus rectum half-length at every point.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the subtangent, subnormal, tangent length and normal length for ${y} = ${X3} at the point ${pt('1', '1')}, and verify each against the actual lines.`,
        steps: [
          `Here ${m} = 3${X2} = 3 at ${x} = 1, with ${y} = 1. Directly:<br>${MT} = ${fr('1', '3')},${NB}${NB}${MN} = 3,<br>${PT} = ${fr('√10', '3')},${NB}${NB}${PN} = √10.`,
          `<b>Verification.</b> Tangent: ${y} − 1 = 3(${x} − 1), i.e. ${y} = 3${x} − 2; it meets the ${x}-axis at ${x} = ${fr('2', '3')}, so ${MT} = 1 − ${fr('2', '3')} = ${fr('1', '3')} ✓. Normal: ${y} − 1 = −${fr('1', '3')}(${x} − 1), i.e. ${y} = ${fr(`4 − ${x}`, '3')}; it meets the ${x}-axis at ${x} = 4, so ${MN} = 4 − 1 = 3 ✓.`,
          `The lengths agree with Pythagoras on the verified intercepts: ${PT} joins ${pt('1', '1')} to ${pt(fr('2', '3'), '0')}, so<br>${PT} = √((${fr('1', '3')})<sup>2</sup> + 1<sup>2</sup>) = ${fr('√10', '3')} ✓,<br>and ${PN} joins ${pt('1', '1')} to ${pt('4', '0')}: ${PN} = √(9 + 1) = √10 ✓. All four confirmed.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main / Advanced Level',
        q: `For the parabola ${sq(y)} = 4${I('ax')}, find the tangent and normal at the point ${pt(AT2, `2${I('at')}`)}, and show that the normal meets the axis at a point whose distance from the foot of the ordinate is always 2${a}.`,
        steps: [
          `Parametrise: the point ${pt(AT2, `2${I('at')}`)} satisfies ${sq(y)} = 4${sq(a)}${sq(t)} = 4${I('ax')} ✓. The slope there:<br>${m} = ${fr(`2${a}`, y)} = ${fr(`2${a}`, `2${I('at')}`)} = ${fr('1', t)}.`,
          `<b>Tangent:</b> ${y} − 2${I('at')} = ${fr('1', t)}(${x} − ${AT2}); multiply by ${t}:<br>${I('ty')} = ${x} + ${AT2}.`,
          `<b>Normal:</b> slope −${t}:<br>${y} − 2${I('at')} = −${t}(${x} − ${AT2}).`,
          `Setting ${y} = 0 (with ${t}${NB}≠${NB}0; at the vertex the normal is the axis itself): −2${I('at')} = −${t}(${x} − ${AT2}), so ${x} − ${AT2} = 2${a}, i.e. the normal meets the axis at<br>${N} = (${AT2} + 2${a},${NB}0).`,
          `The foot of the ordinate is ${M} = ${pt(AT2, '0')}, so ${MN} = 2${a} for <b>every</b> ${t}: the constant-subnormal fact of the Method part, now in parametric clothing. These two line equations, ${I('ty')} = ${x} + ${AT2} and ${y} + ${I('tx')} = 2${I('at')} + ${I('at')}<sup>3</sup>, are standard JEE currency ${ESTIMATE}; derive them once as above rather than memorising blind.`,
        ],
        ans: '',
      },
      {
        t: 'formula',
        kicker: `Tangent and normal at (${AT2}, 2${I('at')})`,
        main: `${I('ty')} = ${x} + ${AT2} (tangent)<br>${y} + ${I('tx')} = 2${I('at')} + ${I('at')}<sup>3</sup> (normal)`,
        legend: [`the parabola ${sq(y)} = 4${I('ax')}`, `${t} = the parameter of the point`, `subnormal = 2${a} at every point`],
        note: null,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find all tangents to the parabola ${y} = 4 − ${X2} that pass through the point ${pt('2', '7')}, giving the points of contact and the tangent equations.`,
        steps: [
          `Let the point of contact be ${x} = ${a}, so ${P} = (${a}, 4 − ${sq(a)}) with slope ${m} = −2${a}. The tangent line is<br>${y} = −2${I('ax')} + (${sq(a)} + 4).`,
          `Requiring it to pass through ${pt('2', '7')}:<br>7 = −4${a} + ${sq(a)} + 4<br>⟹ ${sq(a)} − 4${a} − 3 = 0<br>⟹ ${a} = 2 ± ${R7}.`,
          `Two tangents, as expected from an external point. Contact points: with ${sq(a)} = 11 ± 4${R7},<br>${y} = 4 − ${sq(a)} = −7 ∓ 4${R7},<br>so the contacts are (2 + ${R7}, −7 − 4${R7}) and (2 − ${R7}, −7 + 4${R7}). The corresponding lines are<br>${y} = −(4 + 2${R7})${NB}${x} + 15 + 4${R7}<br>and<br>${y} = (2${R7} − 4)${NB}${x} + 15 − 4${R7}.`,
          `<b>Check.</b> Each contact point satisfies the curve: (2 + ${R7})<sup>2</sup> = 11 + 4${R7} and 4 − (11 + 4${R7}) = −7 − 4${R7} ✓. Each line passes through ${pt('2', '7')}:<br>−(4 + 2${R7})(2) + 15 + 4${R7}<br>= −8 − 4${R7} + 15 + 4${R7} = 7 ✓.<br>And each line’s slope matches −2${a} at its own contact ✓.`,
          `<b>Why it is Advanced-level.</b> Topic 04 finds tangents at a known point; here the point of contact is itself the unknown, so the tangency condition becomes an equation for ${a}. Setting up “generic contact point + pass-through condition” is the transferable skill: identical machinery handles “tangent with given slope”, “tangent with given intercepts”, and “shortest-distance” problems.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the subtangent, subnormal, tangent length and normal length for ${y} = ${ex(x)} at ${pt('0', '1')}.`,
            a: `${m} = 1 at ${x} = 0: subtangent 1, subnormal 1, tangent length √2, normal length √2.`,
          },
          {
            q: `Show that ${fr(y, m)} for ${y} = ln${NB}${x} at any point equals ${x}${NB}ln${NB}${x}: the abscissa times the ordinate (the subtangent is its absolute value).`,
            a: `${m} = ${fr('1', x)}, so subtangent = ${fr(y, m)} = ${x}${NB}ln${NB}${x}.`,
          },
          {
            q: `For the parabola ${sq(y)} = 4${x}, find all points at which the subnormal equals 4.`,
            a: `None: for ${sq(y)} = 4${x} we have ${a} = 1, so the subnormal is 2${a} = 2 at every point; it can never equal 4. (A trap: for ${sq(y)} = 4${I('ax')} the subnormal is a constant of the curve, not a variable.)`,
          },
          {
            q: `At which point of ${y} = ${ex(x)} does the tangent make a 45° angle with the ${x}-axis? Write the tangent’s equation.`,
            a: `Need ${m} = tan${NB}45° = 1: ${ex(x)} = 1 gives ${x} = 0, point ${pt('0', '1')}, tangent ${y} = ${x} + 1.`,
          },
          {
            q: `Find the area of the triangle cut off from the coordinate axes by the tangent to ${y} = 4 − ${X2} at ${x} = 1.`,
            a: `At ${pt('1', '3')}, ${m} = −2; ${x}-intercept = ${x} − ${fr(y, m)} = 1 + ${fr('3', '2')} = ${fr('5', '2')}; ${y}-intercept = ${y} − ${I('mx')} = 3 + 2 = 5; area = ${HALF} · ${fr('5', '2')} · 5 = ${fr('25', '4')} square units.`,
          },
          {
            q: `Show that the normal to ${y} = ${X2} at ${pt('1', '1')} passes through the point ${pt('0', fr('3', '2'))}.`,
            a: `Normal slope = −${HALF}: ${y} − 1 = −${HALF}(${x} − 1); at ${x} = 0 this gives ${y} = ${fr('3', '2')} ✓.`,
          },
        ],
      },
    ],
  },
];
