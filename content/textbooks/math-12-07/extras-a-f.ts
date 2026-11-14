import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7 Integrals, Additional topics A–F, pp. 505–521 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word: the
 * "Chapter 7: Integrals — Additional Topics" part's Addenda A to F, with the
 * book's letters. Its heading is not copied; its p. 505 opening paragraphs
 * are the first paragraph of A's "Introduction". Each addendum's opening text
 * is its "Introduction" part, then its own headings as parts ("Method", the
 * run of "Example X.N" worked examples as one part "Worked examples", and
 * "Practice — Addendum X" as "Practice", answers set against their
 * questions). F's answers end on p. 522, where Addendum P starts (not here).
 * The book prints the subtopics in the order 01, 04, 05, 06, 07, 08, 02, 09,
 * 03 and the app numbers them by position (decision 28), so the book's
 * cross-references are mapped: Subtopic 02 → Topic 07, 03 → Topic 09,
 * 04 → Topic 02, 05 → Topic 03, 07 → Topic 05, 09 → Topic 08. The book's
 * "Walli" is corrected to Wallis (rm127c R1). No drawings on these pages.
 * ∫ upright, d upright and glued to its variable, + C italic, e upright, csc
 * as printed. Every fraction is stacked (<frac>); a fraction inside a
 * fraction is written with ÷; no em dashes.
 * Review rm127c (decision 32): a card for Tool 4, the log-sine result, added in C.
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
const f = I('f');
const g = I('g');
const h = I('h');
const k = I('k');
const m = I('m');
const n = I('n');
const p = I('p');
const r = I('r');
const s = I('s');
const t = I('t');
const u = I('u');
const v = I('v');
const x = I('x');
const y = I('y');
const A = I('A');
const B = I('B');
const C = I('C');
const F = I('F');
const G = I('G');
const H = I('H');
const J = I('J');
const L = I('L');
const T = I('T');
const W = I('W');
/** The integral called I (the italic letter; I() is the italic helper). */
const II = I('I');
const eps = I('ε');

/** Differentials: an upright d glued to the integrand. */
const DX = `${NB}d${x}`;
const DT = `${NB}d${t}`;
const DU = `${NB}d${u}`;
const DS = `${NB}d${s}`;
/** d/dx, with an upright d. */
const D = fr('d', `d${x}`);
const PLUS_C = ` + ${C}`;

const of = (fn: string, arg: string) => `${fn}(${arg})`;
const abs = (s2: string) => `|${WJ}${s2}|`;
const sb = (base: string, s2: string) => `${base}<sub>${s2}</sub>`;
const sq = (s2: string) => `${s2}<sup>2</sup>`;
const cu = (s2: string) => `${s2}<sup>3</sup>`;
/** A definite integral sign with its limits (the reader stacks them). */
const INT = (lo: string, hi: string) => `∫<sub>${lo}</sub><sup>${hi}</sup>`;
/** [F(x)] evaluated from lo to hi. */
const EV = (e: string, lo: string, hi: string) => `[${e}]<sub>${lo}</sub><sup>${hi}</sup>`;
/** lim as n → ∞. */
const LIM = `lim<sub>${n}→∞</sub>`;
/** ∑ with its limits. */
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;
const SUM1 = SUM(`${r}=1`, n);
/** A trigonometric function of an argument, with an optional power: sin² x. */
const TR = (fn: string, arg: string = x, pow = '') => `${fn}${pow ? `<sup>${pow}</sup>` : ''}${NB}${arg}`;
const LN = (s2: string) => `ln${NB}${s2}`;
const ATAN = (s2: string) => `tan<sup>−1</sup>${NB}${s2}`;

const fx = of(f, x);
const gx = of(g, x);
const hx = of(h, x);
const ux = of(u, x);
const vx = of(v, x);
const Fx = of(F, x);
const Gx = of(G, x);
const Hx = of(H, x);
const X2 = sq(x);
const X3 = cu(x);
const T2 = sq(t);
const N2 = sq(n);
const R2 = sq(r);
/** 1 + t², the half-angle denominator. */
const T1 = `1 + ${T2}`;
const SINX = TR('sin');
const COSX = TR('cos');
const TANX = TR('tan');
const SECX = TR('sec');
const PI2 = fr('π', '2');
const PI4 = fr('π', '4');
const HALF = fr('1', '2');
const XH = fr(x, '2');
const RN = fr(r, n);
/** ∫ from 0 to π/2 (the slash stays inside the raised limit). */
const INT_0_PI2 = INT('0', 'π/2');
const INT_0_PI = INT('0', 'π');
const INT_0_1 = INT('0', '1');
const XLNX = `${x}${NB}${LN(x)}`;
const In = sb(II, n);
const In2 = sb(II, `${n}−2`);
const Wn = sb(W, n);
const Wn2 = sb(W, `${n}−2`);
const fAX = of(f, `${a} − ${x}`);

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 505–508 ────────────────
  {
    n: 'A',
    title: 'Differentiating an Integral Whose Limits Move',
    extra: true,
    kalam: 'Fixed limits contribute nothing because their derivative is 0.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter taught you the whole standard toolkit: indefinite techniques (substitution, trig identities, quadratic templates, partial fractions, parts), the Fundamental Theorem, the limit-of-a-sum definition, and the symmetry properties of definite integrals. Six examinable patterns still stand outside it. Additional topic A differentiates an integral whose limits move: the general Leibniz rule, which JEE tests precisely because the chapter’s First Fundamental Theorem stops at a fixed lower limit. Additional topic B runs the limit-of-a-sum machinery backwards, reading a naked limit of a sum as an integral. Additional topic C upgrades the king property to its four power tools: the general quotient theorem, the ${x}-peeling theorem on [0,${NB}π], the reciprocal substitution, and the log-sine master result. Additional topic D supplies the half-angle substitution, the one universal method for rational functions of ${SINX} and ${COSX}. Additional topic E builds reduction formulas, the derivations behind the Wallis formula the chapter quotes without proof. Additional topic F handles integrands with breakpoints of a new kind (greatest integer, fractional part, min/max) and the signed-versus-total-area trap.<br><br>Nothing below needs new theory: every derivation uses the Fundamental Theorem, the king property, substitution or parts, applied one level further than the chapter took them.`,
      },
      {
        t: 'p',
        html: `The chapter proves ${D}${NB}${INT(a, x)}${NB}${of(f, t)}${DT} = ${fx}: upper limit moving, lower limit fixed. Exams move both. The fix is one line of chain rule, and it unlocks problems where the anti-derivative does not even exist in elementary form.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>The general Leibniz rule.</b> Let ${f} be continuous, and let ${ux} and ${vx} be differentiable. Define<br>${Fx} = ${INT(ux, vx)}${NB}${of(f, t)}${DT}.<br>By the First FTC (Topic 07) ${f} has an anti-derivative Φ, and by the Second ${Fx}${NB}=${NB}Φ(${vx}) − Φ(${ux}). Differentiate with the chain rule:<br>${F}′(${x}) = Φ′(${vx})${NB}${v}′(${x}) − Φ′(${ux})${NB}${u}′(${x})<br>= ${f}(${vx})${NB}${v}′(${x}) − ${f}(${ux})${NB}${u}′(${x}).`,
      },
      {
        t: 'p',
        html: `Read it as a slogan: <b>top limit in, bottom limit out</b>; evaluate ${f} at each moving limit, multiply by that limit’s derivative, upper term minus lower term. Fixed limits contribute nothing because their derivative is 0.`,
      },
      {
        t: 'formula',
        kicker: 'The general Leibniz rule',
        main: `${Fx} = ${INT(ux, vx)}${NB}${of(f, t)}${DT}<br>${F}′(${x}) = ${f}(${vx})${NB}${v}′(${x}) − ${f}(${ux})${NB}${u}′(${x})`,
        legend: [`${f} = a continuous function`, `${u}, ${v} = differentiable functions of ${x}`],
        note: null,
      },
      {
        t: 'p',
        html: `Two consequences you will use constantly:<br>• <b>Recovering the chapter’s rule:</b> with ${u} = ${a} fixed and ${v} = ${x}, the formula gives ${fx} · 1 − ${of(f, a)} · 0 = ${fx}.<br>• <b>Even-interval shortcut:</b> for symmetric limits [−${x},${NB}${x}],<br>${F}′(${x}) = ${fx} + ${of(f, `−${x}`)},<br>so if ${f} is even, ${F}′(${x}) = 2${fx}, and if ${f} is odd, ${F}′(${x})${NB}=${NB}0: the accumulated integral is constant, exactly as parity predicts.`,
      },
      {
        t: 'proc',
        title: 'Procedure',
        steps: [
          `Identify ${ux} and ${vx}.`,
          'Apply the rule mechanically.',
          'Simplify the resulting expression.',
          'Never hunt for an anti-derivative first: the rule exists precisely so you do not need one.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Let ${Fx} = ${INT('0', `${x}²`)}${NB}(3${T2} + 1)${DT}. Find ${F}′(${x}) two independent ways.`,
        steps: [
          `<b>Way 1: integrate, then differentiate.</b> The anti-derivative is ${cu(t)} + ${t}, so<br>${Fx} = ${EV(`${cu(t)} + ${t}`, '0', `${x}²`)} = ${x}<sup>6</sup> + ${X2},<br>${F}′(${x}) = 6${x}<sup>5</sup> + 2${x}.`,
          `<b>Way 2: Leibniz.</b> Here ${u} = 0 (fixed) and ${v} = ${X2}, so ${v}′ = 2${x}:<br>${F}′(${x}) = ${of(f, X2)} · 2${x}<br>= (3${x}<sup>4</sup> + 1)(2${x}) = 6${x}<sup>5</sup> + 2${x}.`,
          'Both routes agree. On an exam, Way 2 is faster whenever the anti-derivative is unpleasant.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the local minimum value of ${Fx} = ${INT('0', x)}${NB}(${t} − 1)(${t} − 2)${DT}.`,
        steps: [
          `Differentiate under the integral sign: the integrand is a polynomial, no anti-derivative required:<br>${F}′(${x}) = (${x} − 1)(${x} − 2).`,
          `Sign analysis: ${F}′${NB}>${NB}0 on (−∞,${NB}1), ${F}′${NB}<${NB}0 on (1,${NB}2), ${F}′${NB}>${NB}0 on (2,${NB}∞). So ${x} = 1 is a local maximum and ${x} = 2 is a local minimum. Compute<br>${of(F, '2')} = ${INT('0', '2')}${NB}(${T2} − 3${t} + 2)${DT}<br>= ${EV(`${fr(cu(t), '3')} − ${fr(`3${T2}`, '2')} + 2${t}`, '0', '2')}<br>= ${fr('8', '3')} − 6 + 4 = ${fr('2', '3')}.`,
          `Since ${F}′ changes sign from − to + at ${x} = 2, the local minimum value is<br>${of(F, '2')} = ${fr('2', '3')}.`,
          `<b>Not a global minimum.</b><br>${Fx} = ${fr(X3, '3')} − ${fr(`3${X2}`, '2')} + 2${x}<br>is a cubic with positive leading coefficient, so ${Fx} → −∞ as ${x} → −∞. For instance<br>${of(F, '−1')} = −${fr('1', '3')} − ${fr('3', '2')} − 2 = −${fr('23', '6')} < ${fr('2', '3')}.<br>Likewise ${of(F, '1')} = ${fr('5', '6')} is only the local maximum. Always read “minimum” in such questions as local unless the end behaviour has been checked.`,
          `<b>Check.</b> ${F}″(${x}) = 2${x} − 3, so ${F}″(2) = 1${NB}>${NB}0: confirmed minimum by the second-derivative test.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `(i) Show that ${Fx} = ${INT(x, `${x}²`)}${NB}${fr(`d${t}`, `${t}${NB}${LN(t)}`)} is constant on each of (0,${NB}1) and (1,${NB}∞), and find the constant.<br>(ii) If ${g} is continuous and ${fx} = ${INT('0', x)}${NB}(${x} − ${t})${NB}${of(g, t)}${DT}, prove ${f}″(${x}) = ${gx}.`,
        steps: [
          `<b>(i).</b> Apply Leibniz directly, with ${u} = ${x}, ${v} = ${X2}; no anti-derivative is needed:<br>${F}′(${x}) = ${fr('1', `${X2}${NB}ln(${X2})`)} · 2${x} − ${fr('1', XLNX)} · 1<br>= ${fr(`2${x}`, `2${X2}${NB}${LN(x)}`)} − ${fr('1', XLNX)}<br>= ${fr('1', XLNX)} − ${fr('1', XLNX)} = 0,<br>using ln(${X2}) = 2${NB}${LN(x)} for ${x}${NB}>${NB}0, ${x}${NB}≠${NB}1. A function with zero derivative on an interval is constant there.`,
          `To find the constant, note that ∫${fr(`d${t}`, `${t}${NB}${LN(t)}`)} = ln${abs(LN(t))}, so<br>${Fx} = ln${abs(LN(X2))} − ln${abs(LN(x))} = ${LN('2')}<br>on both intervals.`,
          `(Be careful with the look-alike ${INT(x, `${x}²`)}${NB}${fr(`d${t}`, LN(t))}: the same computation gives ${F}′(${x}) = ${fr(`2${x}`, `2${NB}${LN(x)}`)} − ${fr('1', LN(x))} = ${fr(`${x} − 1`, LN(x))}${NB}≠${NB}0, so that integral is not constant. Compare practice question 4.)`,
          `<b>(ii).</b> The variable ${x} appears both in a limit and inside the integrand, so split it first. With ${Gx} = ${INT('0', x)}${NB}${of(g, t)}${DT} and ${Hx} = ${INT('0', x)}${NB}${t}${NB}${of(g, t)}${DT},<br>${fx} = ${x}${NB}${Gx} − ${Hx}.`,
          `Differentiate, applying the chapter’s rule to ${G} and ${H}:<br>${f}′(${x}) = ${Gx} + ${x}${NB}${gx} − ${x}${NB}${gx} = ${Gx}.`,
          `The ${x}${NB}${gx} terms cancel exactly: this cancellation is the whole content of the problem. Differentiate again:<br>${f}″(${x}) = ${G}′(${x}) = ${gx}.`,
          `<b>Check for (ii).</b> Take ${of(g, t)} = 1. Then<br>${fx} = ${INT('0', x)}${NB}(${x} − ${t})${DT} = ${X2} − ${fr(X2, '2')} = ${fr(X2, '2')},<br>and indeed ${f}″(${x}) = 1 = ${gx}.`,
          '<b>Why it is Advanced-level.</b> Both parts defeat the reflex “find the anti-derivative first.” Part (i) is settled without ever looking for an anti-derivative; part (ii) needs the structural move of pulling the parameter out before differentiating.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find ${D}${NB}${INT('0', `√${x}`)}${NB}cos(${T2})${DT} for ${x}${NB}>${NB}0.`,
            a: `${COSX} · ${fr('1', `2√${x}`)} = ${fr(COSX, `2√${x}`)}.`,
          },
          {
            q: `Find ${F}′(${x}) if ${Fx} = ${INT(x, `2${x}`)}${NB}e<sup>−${t}²</sup>${DT}.`,
            a: `2e<sup>−4${x}²</sup> − e<sup>−${x}²</sup>.`,
          },
          {
            q: `Evaluate ${D}${NB}${INT(TANX, TR('cot'))}${NB}${fr(`d${t}`, `1 + ${T2}`)}.`,
            a: `−1 − 1 = −2, since ${fr(TR('csc', x, '2'), `1 + ${TR('cot', x, '2')}`)} = 1 and ${fr(TR('sec', x, '2'), `1 + ${TR('tan', x, '2')}`)} = 1.`,
          },
          {
            q: `Find ${D}${NB}${INT(`${x}²`, `${x}³`)}${NB}${fr(`d${t}`, LN(t))} for ${x}${NB}>${NB}0, ${x}${NB}≠${NB}1.`,
            a: `${fr(`3${X2}`, LN(X3))} − ${fr(`2${x}`, LN(X2))}<br>= ${fr(X2, LN(x))} − ${fr(x, LN(x))} = ${fr(`${x}(${x} − 1)`, LN(x))}.`,
          },
          {
            q: `Prove: if ${f} is even and continuous, then ${of(A, x)} = ${INT('0', x)}${NB}${of(f, t)}${DT} is odd.`,
            a: `Substitute ${t} = −${s} (so d${t} = −d${s}) in ${of(A, `−${x}`)} = ${INT('0', `−${x}`)}${NB}${of(f, t)}${DT} to get ${of(A, `−${x}`)} = −${INT('0', x)}${NB}${of(f, `−${s}`)}${DS} = −${INT('0', x)}${NB}${of(f, s)}${DS} = −${of(A, x)}, using ${of(f, `−${s}`)} = ${of(f, s)}.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic B · pp. 508–511 ────────────────
  {
    n: 'B',
    title: 'Reading a Limit Backwards: Riemann Sums in Reverse',
    extra: true,
    kalam: 'The skill is recognising any such limit as an integral in disguise.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 07 goes forward: integral first, then the limit of a sum to define it. JEE Main reverses the arrow constantly ${ESTIMATE}: it hands you<br>${LIM}${NB}${SUM1}${NB}${fr(n, `${N2} + ${R2}`)}<br>and expects ${PI4} in three lines. The skill is recognising any such limit as an integral in disguise.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `The definition from Topic 07, specialised to ${a} = 0, ${b} = 1, ${h} = ${fr('1', n)}:`,
      },
      {
        t: 'formula',
        kicker: 'A limit of a sum read as an integral',
        main: `${INT_0_1}${NB}${fx}${DX} = ${LIM}${NB}${fr('1', n)}${NB}${SUM1}${NB}${f}(${RN})`,
        legend: [`${f} = a function continuous on [0,${NB}1]`, `${n} = the number of terms`, `${r} = the term number`],
        note: null,
      },
      {
        t: 'proc',
        title: 'Procedure',
        steps: [
          `Factor ${fr('1', n)} out of the summand: this is your ${h}. Whatever remains must become a function of ${RN} alone.`,
          `To achieve that, divide numerator and denominator by the highest power of ${n} present.`,
          `Read the integration limits off the range of ${RN}: ${r} = 1, …, ${n} gives (0,${NB}1]; ${r} = ${n} + 1, …, 2${n} gives (1,${NB}2].`,
          'Write the integral and evaluate by the FTC.',
          `A constant shift inside the argument (such as ${f}(${fr(`${r} + 1`, n)})) does not change the limit: the shifted grid still fills the same interval.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Evaluate ${LIM}${NB}${SUM1}${NB}${fr(n, `${N2} + ${R2}`)}.`,
        steps: [
          `Divide numerator and denominator by ${N2}:<br>${fr(n, `${N2} + ${R2}`)} = ${fr('1', n)} · 1 ÷ (1 + (${RN})<sup>2</sup>).`,
          `So the limit is ${INT_0_1}${NB}${fr(`d${x}`, `1 + ${X2}`)}, and by row 12 of the standard table:<br>${INT_0_1}${NB}${fr(`d${x}`, `1 + ${X2}`)} = ${EV(ATAN(x), '0', '1')} = ${PI4}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Evaluate ${LIM}${NB}${fr('1', n)}${NB}${SUM(`${r}=${n}+1`, `2${n}`)}${NB}${fr(r, `√(${N2} + ${R2})`)}.`,
        steps: [
          `Divide inside the root by ${N2}:<br>${fr('1', n)}${NB}${SUM(`${r}=${n}+1`, `2${n}`)}${NB}${RN} ÷ √(1 + (${RN})<sup>2</sup>).`,
          `Here ${RN} runs over (1,${NB}2], so the limit is<br>${INT('1', '2')}${NB}${fr(x, `√(1 + ${X2})`)}${DX}.`,
          `With ${u} = 1 + ${X2}, d${u} = 2${x}${DX}:<br>${HALF}${NB}${INT('2', '5')}${NB}${fr(`d${u}`, `√${u}`)} = ${EV(`√${u}`, '2', '5')} = √5 − √2.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Evaluate ${LIM}${NB}${fr(`(${n}!)<sup>1/${n}</sup>`, n)}.`,
        steps: [
          `Call the limit ${L} and take logarithms, so the product becomes a sum:<br>${LN(L)} = ${LIM}${NB}${fr('1', n)}${NB}${SUM1}${NB}ln${NB}${RN}<br>= ${INT_0_1}${NB}${LN(x)}${DX}.`,
          `This integral is improper at 0, so cut it at ${eps} and integrate by parts (${u} = ${LN(x)}, d${v}${NB}=${NB}d${x}):<br>${INT(eps, '1')}${NB}${LN(x)}${DX} = ${EV(`${x}${NB}${LN(x)} − ${x}`, eps, '1')}<br>= −1 − ${eps}${NB}${LN(eps)} + ${eps}.`,
          `As ${eps} → 0<sup>+</sup>, ${eps}${NB}${LN(eps)} → 0 (write it as ${LN(eps)} ÷ ${fr('1', eps)}; by L’Hôpital’s rule the ratio behaves like ${fr('1', eps)} ÷ (−${fr('1', `${eps}<sup>2</sup>`)}) = −${eps} → 0). Hence ${INT_0_1}${NB}${LN(x)}${DX} = −1, and<br>${L} = e<sup>−1</sup>.`,
          '<b>Why it is Advanced-level.</b> Two moves stacked: logarithms convert the product to a Riemann sum, and the resulting integral is improper, demanding the limiting argument above rather than blind FTC.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Evaluate ${LIM}${NB}${fr('1', n)}${NB}${SUM1}${NB}√(1 + ${RN}).`,
            a: `${INT_0_1}${NB}√(1 + ${x})${DX} = ${fr('2', '3')}${EV(`(1 + ${x})<sup>3/2</sup>`, '0', '1')} = ${fr('2', '3')}(2√2 − 1).`,
          },
          {
            q: `Evaluate ${LIM}${NB}${SUM1}${NB}${fr('1', `√(${N2} + ${R2})`)}.`,
            a: `${INT_0_1}${NB}${fr(`d${x}`, `√(1 + ${X2})`)} = ln(1 + √2).`,
          },
          {
            q: `Evaluate ${LIM}${NB}${fr('1', N2)}${NB}${SUM1}${NB}${r}${NB}e<sup>${r}/${n}</sup>.`,
            a: `${fr('1', n)}${NB}∑${NB}${RN}e<sup>${r}/${n}</sup> → ${INT_0_1}${NB}${x}e<sup>${x}</sup>${DX} = ${EV(`${x}e<sup>${x}</sup> − e<sup>${x}</sup>`, '0', '1')} = 1.`,
          },
          {
            q: `Evaluate ${LIM}${NB}${SUM1}${NB}${fr(n, `${N2} + ${I('nr')} + ${R2}`)}.`,
            a: `${INT_0_1}${NB}${fr(`d${x}`, `1 + ${x} + ${X2}`)} = ${EV(`${fr('2', '√3')}${NB}${ATAN(fr(`2${x} + 1`, '√3'))}`, '0', '1')}<br>= ${fr('2', '√3')} · ${fr('π', '6')} = ${fr('π', '3√3')}.`,
          },
          {
            q: `Evaluate ${LIM}${NB}${fr('1', n)}${NB}${SUM1}${NB}(1 + ${RN})<sup>2</sup>.`,
            a: `${INT_0_1}${NB}(1 + ${x})<sup>2</sup>${DX} = ${fr('7', '3')}.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic C · pp. 511–514 ────────────────
  {
    n: 'C',
    title: 'King Property Power Plays',
    extra: true,
    kalam: 'Topic 09 teaches the king property and demonstrates it on specific integrands.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 09 teaches the king property and demonstrates it on specific integrands. Four general structures turn it from a trick into a machine, and each is a standing JEE pattern ${ESTIMATE}.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Tool 1: the quotient theorem.</b> Let ${f} be continuous on [0,${NB}${a}] with ${fx}${NB}+${NB}${fAX}${NB}≠${NB}0 there. Then`,
      },
      {
        t: 'formula',
        kicker: 'Tool 1: the quotient theorem',
        main: `${INT('0', a)}${NB}${fr(fx, `${fx} + ${fAX}`)}${DX} = ${fr(a, '2')}`,
        legend: [`${f} = a function continuous on [0,${NB}${a}], with ${fx}${NB}+${NB}${fAX}${NB}≠${NB}0 there`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Derivation.</b> Call the integral ${II}. By the special king property P4, replacing ${x} → ${a} − ${x} leaves the integral unchanged:<br>${II} = ${INT('0', a)}${NB}${fr(fAX, `${fAX} + ${fx}`)}${DX}.<br>Add the two expressions; the denominators are identical:<br>2${II} = ${INT('0', a)}${NB}${fr(`${fx} + ${fAX}`, `${fx} + ${fAX}`)}${DX}<br>= ${INT('0', a)}${NB}d${x} = ${a}. ■`,
      },
      {
        t: 'p',
        html: `<b>Tool 2: the ${x}-peeling theorem.</b> For any ${f} continuous on [0,${NB}1],`,
      },
      {
        t: 'formula',
        kicker: 'Tool 2: the x-peeling theorem',
        main: `${INT_0_PI}${NB}${x}${NB}${f}(${SINX})${DX} = ${PI2}${NB}${INT_0_PI}${NB}${f}(${SINX})${DX}`,
        legend: [`${f} = any function continuous on [0,${NB}1]`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Derivation.</b> Apply P4 with ${a} = π, replacing ${x} by π − ${x}; since sin(π − ${x}) = ${SINX},<br>${II} = ${INT_0_PI}${NB}(π − ${x})${NB}${f}(${SINX})${DX}<br>= π${NB}${INT_0_PI}${NB}${f}(${SINX})${DX} − ${II}.<br>Solve for ${II} and halve. ■ (The third worked example of Topic 09 was the special case ${f}(${SINX}) = ${TR('sin', x, '3')}; the tool now covers every case at once.)`,
      },
      {
        t: 'p',
        html: `<b>Tool 3: the reciprocal substitution.</b> For ${p}${NB}>${NB}0, substituting ${x} = ${fr('1', t)} in ${II} = ${INT(p, `1/${p}`)}${NB}${fx}${DX} gives`,
      },
      {
        t: 'formula',
        kicker: 'Tool 3: the reciprocal substitution',
        main: `${II} = ${INT(p, `1/${p}`)}${NB}(${f}(${fr('1', t)}) ÷ ${T2})${DT}`,
        legend: [`${II} = ${INT(p, `1/${p}`)}${NB}${fx}${DX}`, `${p} = a positive constant`],
        note: null,
      },
      {
        t: 'p',
        html: `If ${f}(${fr('1', x)}) ÷ ${X2} is a simple multiple of ${fx}, the integral solves algebraically. <b>Derivation:</b> d${x} = −${fr(`d${t}`, T2)}; as ${x} goes ${p} → ${fr('1', p)}, ${t} goes ${fr('1', p)} → ${p}, so the substitution reverses the limits, and the minus sign in d${x} reverses them back. The limits of the final formula are therefore the same as the original.`,
      },
      {
        t: 'p',
        html: '<b>Tool 4: the log-sine master result</b>, derived in this topic’s third worked example.',
      },
      {
        t: 'formula',
        kicker: 'Tool 4: the log-sine result',
        main: `${INT_0_PI2}${NB}ln(${SINX})${DX} = ${INT_0_PI2}${NB}ln(${COSX})${DX}<br>= −${PI2}${NB}${LN('2')}`,
        legend: [`${x} = the variable of integration (the integral converges though ln${NB}${SINX} → −∞ at 0)`],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board / JEE Main Level',
        q: `Evaluate ${II} = ${INT_0_PI2}${NB}${fr(`d${x}`, `1 + √(${TANX})`)}.`,
        steps: [
          `Here ${a} = ${PI2} and the integrand is ${fr('1', `1 + ${gx}`)} with ${gx} = √(${TANX}), which satisfies ${g}(${PI2} − ${x}) = ${fr('1', gx)}. Apply king directly (${x} → ${PI2} − ${x}):<br>${II} = ${INT_0_PI2}${NB}${fr(`d${x}`, `1 + √(${TR('cot')})`)}<br>= ${INT_0_PI2}${NB}${fr(`√(${TANX})`, `1 + √(${TANX})`)}${DX}.`,
          `Add the original and the flipped form:<br>2${II} = ${INT_0_PI2}${NB}${fr(`1 + √(${TANX})`, `1 + √(${TANX})`)}${DX} = ${PI2},<br>${II} = ${PI4}.`,
          `<b>Check.</b> Since<br>${fr('1', `1 + √(${TANX})`)} = ${fr(`√(${COSX})`, `√(${COSX}) + √(${SINX})`)},<br>Tool 1 applies with ${fx} = √(${COSX}) and ${f}(${PI2} − ${x}) = √(${SINX}), and predicts ${fr(a, '2')} = ${PI4} instantly: the general theorem and the hand computation agree.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Evaluate ${II} = ${INT_0_PI}${NB}${fr(`${x}${NB}${SINX}`, `1 + ${TR('cos', x, '2')}`)}${DX}.`,
        steps: [
          `The denominator involves ${COSX}, but ${TR('cos', x, '2')} = 1 − ${TR('sin', x, '2')}, so 1${NB}+${NB}${TR('cos', x, '2')}${NB}=${NB}2${NB}−${NB}${TR('sin', x, '2')}<br>and the integrand is<br>${fr(`${x}${NB}${SINX}`, `2 − ${TR('sin', x, '2')}`)},<br>which is exactly ${x}${NB}${f}(${SINX}) with ${of(f, u)}${NB}=${NB}${fr(u, `2 − ${sq(u)}`)}.`,
          `Tool 2 applies:<br>${II} = ${PI2}${NB}${INT_0_PI}${NB}${fr(SINX, `2 − ${TR('sin', x, '2')}`)}${DX}<br>= ${PI2}${NB}${INT_0_PI}${NB}${fr(SINX, `1 + ${TR('cos', x, '2')}`)}${DX}.`,
          `Substitute ${u} = ${COSX}, d${u} = −${SINX}${DX}; the limits run 1 → −1:<br>${INT_0_PI}${NB}${fr(SINX, `1 + ${TR('cos', x, '2')}`)}${DX} = ${INT('−1', '1')}${NB}${fr(`d${u}`, `1 + ${sq(u)}`)}<br>= ${EV(ATAN(u), '−1', '1')} = ${PI2}.`,
          `Therefore ${II} = ${PI2} · ${PI2} = ${fr('π<sup>2</sup>', '4')}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Prove that ${II} = ${INT_0_PI2}${NB}ln(${SINX})${DX} = −${PI2}${NB}${LN('2')}, and deduce ${INT_0_PI2}${NB}ln(${TANX})${DX} = 0.`,
        steps: [
          `(The integral converges even though ${LN(SINX)} → −∞ at ${x} = 0: a single logarithmic singularity is integrable.)`,
          `King with ${a} = ${PI2}: since sin(${PI2} − ${x}) = ${COSX},<br>${II} = ${INT_0_PI2}${NB}ln(${COSX})${DX}.`,
          `Add the two expressions:<br>2${II} = ${INT_0_PI2}${NB}ln(${SINX}${NB}${COSX})${DX}<br>= ${INT_0_PI2}${NB}ln(${fr(TR('sin', `2${x}`), '2')})${DX}<br>= ${INT_0_PI2}${NB}ln(${TR('sin', `2${x}`)})${DX} − ${PI2}${NB}${LN('2')},<br>where the integral is ${J}.`,
          `Evaluate ${J} by substituting ${u} = 2${x}, d${x} = ${fr(`d${u}`, '2')}, limits 0 → π:<br>${J} = ${HALF}${NB}${INT_0_PI}${NB}ln(${TR('sin', u)})${DU}.`,
          `By symmetry sin(π − ${u}) = ${TR('sin', u)}, the interval [0,${NB}π] carries two identical copies of [0,${NB}${PI2}]:<br>${J} = ${HALF} · 2${II} = ${II}.`,
          `So 2${II} = ${II} − ${PI2}${NB}${LN('2')}, giving<br>${II} = −${PI2}${NB}${LN('2')}. ■`,
          `<b>Corollary.</b> ${INT_0_PI2}${NB}ln(${TANX})${DX}<br>= ${INT_0_PI2}${NB}${LN(SINX)}${DX} − ${INT_0_PI2}${NB}${LN(COSX)}${DX}<br>= ${II} − ${II} = 0, consistent with tan(${PI2} − ${x}) = ${TR('cot')} = ${fr('1', TANX)}.`,
          `<b>Why it is Advanced-level.</b> Nothing here computes an anti-derivative of ${LN(SINX)} (there is no elementary one). Every mark comes from orchestrating king twice plus a rescaling of the interval: pure structural control.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Evaluate ${INT_0_PI}${NB}${fr(x, `1 + ${SINX}`)}${DX}.`,
            a: `Tool 2 gives ${PI2}${NB}${INT_0_PI}${NB}${fr(`d${x}`, `1 + ${SINX}`)}; multiplying by ${fr(`1 − ${SINX}`, `1 − ${SINX}`)} gives the antiderivative<br>${TANX} − ${SECX} = ${fr(`−${NB}${COSX}`, `1 + ${SINX}`)},<br>which is continuous on [0,${NB}π] and changes from −1 to 1, so the integral is 2. Answer: π.`,
          },
          {
            q: `Evaluate ${INT('1/4', '4')}${NB}${fr(LN(x), `1 + ${X2}`)}${DX}.`,
            a: `By Tool 3 the substitution ${x} = ${fr('1', t)} sends the integral to ${INT('1/4', '4')}${NB}${fr(`−${NB}${LN(t)}`, `1 + ${T2}`)}${DT} = −${II}, so ${II} = 0.`,
          },
          {
            q: `Evaluate ${INT_0_PI2}${NB}ln(${SECX})${DX}.`,
            a: `ln(${SECX}) = −${NB}${LN(COSX)}, and by king ${INT_0_PI2}${NB}${LN(COSX)}${DX} = ${INT_0_PI2}${NB}${LN(SINX)}${DX} = −${PI2}${NB}${LN('2')}, so the value is ${PI2}${NB}${LN('2')}.`,
          },
          {
            q: `Evaluate ${INT_0_PI}${NB}${fr(`${x}${NB}${SINX}`, `1 + ${TR('sin', x, '2')}`)}${DX}.`,
            a: `Tool 2 plus ${u} = ${COSX}:<br>${PI2}${NB}${INT('−1', '1')}${NB}${fr(`d${u}`, `2 − ${sq(u)}`)} = ${PI2} · ${fr('1', '√2')}${NB}ln(3 + 2√2)<br>= ${fr('π', '√2')}${NB}ln(1 + √2),<br>using ∫${fr(`d${u}`, `2 − ${sq(u)}`)} = ${fr('1', '2√2')}${NB}ln${abs(fr(`√2 + ${u}`, `√2 − ${u}`))} and ln(3 + 2√2) = 2${NB}ln(1 + √2); the value of ${INT('−1', '1')}${NB}${fr(`d${u}`, `2 − ${sq(u)}`)} is ${fr('1', '√2')}${NB}ln(3 + 2√2) = √2${NB}ln(1 + √2).`,
          },
          {
            q: `Evaluate ${INT_0_PI2}${NB}${fr(`d${x}`, `1 + ${TR('cot')}`)}.`,
            a: `${fr('1', `1 + ${TR('cot')}`)} = ${fr(SINX, `${SINX} + ${COSX}`)}, so Tool 1 with ${f} = sin gives ${PI4}.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic D · pp. 514–517 ────────────────
  {
    n: 'D',
    title: 'Rational Functions of sin x and cos x: the Half-Angle Substitution',
    extra: true,
    kalam: 'The chapter’s trig toolkit handles powers and products.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter’s trig toolkit handles powers and products. It says nothing systematic about quotients like ${fr('1', `3 + 5${NB}${COSX}`)}, and identity-juggling cracks them only case by case. One universal substitution converts every rational function of ${SINX} and ${COSX} into an ordinary rational function, which partial fractions (Topic 05) then finish.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Set<br>${t} = tan${NB}${XH}.`,
      },
      {
        t: 'p',
        html: `<b>Deriving the conversion identities.</b> From the double-angle formulas, dividing numerator and denominator by cos<sup>2</sup>(${XH}):<br>${SINX} = 2${NB}sin(${XH})${NB}cos(${XH}) ÷ 1<br>= 2${NB}tan(${XH}) ÷ (1 + tan<sup>2</sup>(${XH}))<br>= ${fr(`2${t}`, T1)},<br>${COSX} = cos<sup>2</sup>${NB}${XH} − sin<sup>2</sup>${NB}${XH} = ${fr(`1 − ${T2}`, T1)}.`,
      },
      {
        t: 'p',
        html: `For the differential, differentiate ${t} = tan(${XH}):<br>d${t} = ${HALF}${NB}sec<sup>2</sup>${NB}${XH}${DX} = ${fr(T1, '2')}${DX}<br>⟹ d${x} = ${fr(`2${NB}d${t}`, T1)}.`,
      },
      {
        t: 'formula',
        kicker: 'The half-angle substitution',
        main: `${t} = tan${NB}${XH}<br>${SINX} = ${fr(`2${t}`, T1)}<br>${COSX} = ${fr(`1 − ${T2}`, T1)}<br>d${x} = ${fr(`2${NB}d${t}`, T1)}`,
        legend: [`${t} = the new variable of integration`],
        note: null,
      },
      {
        t: 'p',
        html: `Every rational function of ${SINX} and ${COSX} becomes a rational function of ${t} over the common denominator (${T1})<sup>${k}</sup>, and one ${T1} factor cancels against d${x}, leaving an ordinary rational function for partial fractions.`,
      },
      {
        t: 'p',
        html: `<b>Validity.</b> The substitution fails at ${x} = (2${k} + 1)π (where tan(${XH}) blows up) and is non-monotone across such points, so for definite integrals confirm no odd multiple of π lies inside the interval; otherwise split first. Limits convert by ${t} = tan(${XH}) as usual (Topic 08).`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Evaluate ∫${fr(`d${x}`, `3 + 5${NB}${COSX}`)}.`,
        steps: [
          `Substitute. The denominator becomes<br>3 + 5 · ${fr(`1 − ${T2}`, T1)} = ${fr(`3(${T1}) + 5(1 − ${T2})`, T1)}<br>= ${fr(`8 − 2${T2}`, T1)}.`,
          `So<br>∫${fr(`2${NB}d${t}`, T1)} · ${fr(T1, `8 − 2${T2}`)} = ∫${fr(`d${t}`, `4 − ${T2}`)}.`,
          `Match the template ∫${fr(`d${u}`, `${sq(a)} − ${sq(u)}`)} = ${fr('1', `2${a}`)}${NB}ln${abs(fr(`${a} + ${u}`, `${a} − ${u}`))} with ${a} = 2:<br>∫${fr(`d${x}`, `3 + 5${NB}${COSX}`)} = ${fr('1', '4')}${NB}ln${abs(fr(`2 + ${t}`, `2 − ${t}`))}${PLUS_C},<br>${t} = tan${NB}${XH}.`,
          `<b>Check.</b> At ${x} = 0: ${t} = 0, the anti-derivative equals ${fr('1', '4')}${NB}${LN('1')} = 0; differentiating the answer with respect to ${t} at ${t} = 0 gives ${fr('1', '4')}(${HALF} + ${HALF}) = ${fr('1', '4')}.<br>Since ${fr(`d${t}`, `d${x}`)} = ${HALF}${NB}sec<sup>2</sup>${NB}${XH} = ${HALF} at ${x} = 0, the chain rule gives ${D}(answer) = ${fr('1', '4')} · ${HALF} = ${fr('1', '8')}, which equals the original integrand ${fr('1', `3 + 5${NB}cos${NB}0`)} = ${fr('1', '8')}. Consistent.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Evaluate ${INT_0_PI2}${NB}${fr(`d${x}`, `2 + ${COSX}`)}.`,
        steps: [
          `Limits: ${x} = 0 ⇒ ${t} = 0; ${x} = ${PI2} ⇒ ${t} = tan${NB}${PI4} = 1. Denominator:<br>2 + ${fr(`1 − ${T2}`, T1)} = ${fr(`${T2} + 3`, T1)}.`,
          `So<br>${INT_0_1}${NB}${fr(`2${NB}d${t}`, T1)} · ${fr(T1, `${T2} + 3`)} = ${INT_0_1}${NB}${fr(`2${NB}d${t}`, `${T2} + 3`)}<br>= ${EV(`${fr('2', '√3')}${NB}${ATAN(fr(t, '√3'))}`, '0', '1')}<br>= ${fr('2', '√3')} · ${fr('π', '6')} = ${fr('π', '3√3')}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Evaluate ∫${fr(`d${x}`, `${SINX} + ${TR('sin', `2${x}`)}`)}.`,
        steps: [
          `Factor the denominator first:<br>${SINX}(1${NB}+${NB}2${NB}${COSX}). In ${t}:<br>${SINX}(1 + 2${NB}${COSX}) = ${fr(`2${t}`, T1)}(1 + ${fr(`2(1 − ${T2})`, T1)})<br>= ${fr(`2${t}(3 − ${T2})`, `(${T1})<sup>2</sup>`)}.`,
          `Therefore<br>∫${fr(`2${NB}d${t}`, T1)} · ${fr(`(${T1})<sup>2</sup>`, `2${t}(3 − ${T2})`)} = ∫${fr(T1, `${t}(3 − ${T2})`)}${DT}.`,
          `Partial fractions (compare coefficients in ${T1} = ${A}(3 − ${T2}) + (${B}${t} + ${C})${t}): matching constants gives 3${A} = 1, so ${A} = ${fr('1', '3')}; matching ${t} gives ${C} = 0; matching ${T2} gives ${B} − ${A} = 1, so ${B} = ${fr('4', '3')}:<br>${fr(T1, `${t}(3 − ${T2})`)} = ${fr('1', `3${t}`)} + ${fr(`4${t}`, `3(3 − ${T2})`)}.`,
          `Integrate, using ∫${fr(`${t}${NB}d${t}`, `3 − ${T2}`)} = −${HALF}${NB}ln${abs(`3 − ${T2}`)}:<br>∫${fr(`d${x}`, `${SINX} + ${TR('sin', `2${x}`)}`)} = ${fr('1', '3')}${NB}ln${abs(t)} − ${fr('2', '3')}${NB}ln${abs(`3 − ${T2}`)}${PLUS_C},<br>${t} = tan${NB}${XH}.`,
          `<b>Check.</b> Differentiate the answer in ${t}: it gives ${fr('1', `3${t}`)} + ${fr(`4${t}`, `3(3 − ${T2})`)}, and over the common denominator 3${t}(3 − ${T2}) the numerator is (3 − ${T2}) + 4${T2} = 3(${T1}): exactly the reduced integrand. ✓`,
          `<b>Why it is Advanced-level.</b> The denominator needs factoring before the substitution, the reduced rational function keeps the quadratic factor 3 − ${T2} (so the split needs coefficient comparison rather than cover-up), and the ${t}-term integrates to a sign-sensitive log.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Derive the three conversion identities from ${t} = tan(${XH}) without looking at the text.`,
            a: `Write 1 = cos<sup>2</sup>(${XH}) + sin<sup>2</sup>(${XH}) under ${SINX} = 2${NB}sin(${XH})${NB}cos(${XH}) and under ${COSX} = cos<sup>2</sup>(${XH}) − sin<sup>2</sup>(${XH}), then divide top and bottom by cos<sup>2</sup>(${XH}): ${SINX} = ${fr(`2${t}`, T1)} and ${COSX} = ${fr(`1 − ${T2}`, T1)}. For the differential, d${t} = ${HALF}${NB}sec<sup>2</sup>(${XH})${DX} = ${fr(T1, '2')}${DX}, so d${x} = ${fr(`2${NB}d${t}`, T1)}.`,
          },
          {
            q: `Evaluate ∫${fr(`d${x}`, `5 + 3${NB}${COSX}`)}.`,
            a: `Denominator ${fr(`2${T2} + 8`, T1)}; integral = ∫${fr(`d${t}`, `${T2} + 4`)} = ${HALF}${NB}tan<sup>−1</sup>(${fr(t, '2')})${PLUS_C}.`,
          },
          {
            q: `Evaluate ${INT_0_PI2}${NB}${fr(`d${x}`, `4 + 5${NB}${COSX}`)}.`,
            a: `Denominator ${fr(`9 − ${T2}`, T1)}; integral = ${EV(`${fr('1', '3')}${NB}ln${abs(fr(`3 + ${t}`, `3 − ${t}`))}`, '0', '1')} = ${fr('1', '3')}${NB}${LN('2')}.`,
          },
          {
            q: `Evaluate ∫${fr(`d${x}`, `1 − ${SINX} + ${COSX}`)}.`,
            a: `Denominator ${fr(`2(1 − ${t})`, T1)}; integral = ∫${fr(`d${t}`, `1 − ${t}`)} = −ln${abs(`1 − tan${NB}${XH}`)}${PLUS_C}.`,
          },
          {
            q: `Evaluate ${INT_0_PI2}${NB}${fr(`d${x}`, `1 + ${SINX} + ${COSX}`)}.`,
            a: `Denominator ${fr(`2(1 + ${t})`, T1)}; integral = ${INT_0_1}${NB}${fr(`d${t}`, `1 + ${t}`)} = ${LN('2')}.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic E · pp. 517–520 ────────────────
  {
    n: 'E',
    title: 'Reduction Formulas: Integrating Powers Systematically',
    extra: true,
    kalam: 'Additional topic E builds reduction formulas, the derivations behind the Wallis formula the chapter quotes without proof.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 03 hands you Wallis’ closed form for ${INT_0_PI2}${NB}${TR('sin', x, n)}${NB}${TR('cos', x, m)}${DX} and stops. Older Board papers wanted the derivations: the recurrence relations for powers of tan, sec, and sin were 3–5 mark “prove and hence evaluate” questions ${ESTIMATE} (the rationalised NCERT book and the current CBSE syllabus no longer include reduction formulas; JEE still uses them), and they are the honest way to compute ∫${TR('sec', x, '5')}${DX}-class integrals that no identity cracks open.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Recurrence for tangent.</b> Let ${In} = ∫${TR('tan', x, n)}${DX} for ${n}${NB}≥${NB}2. Split off one ${TR('tan', x, '2')} and use ${TR('tan', x, '2')} = ${TR('sec', x, '2')} − 1:<br>${In} = ∫${TR('tan', x, `${n}−2`)}${NB}(${TR('sec', x, '2')} − 1)${DX}<br>= ∫${TR('tan', x, `${n}−2`)}${NB}${TR('sec', x, '2')}${DX} − ${In2}.<br>The first piece is exact-substitution (Topic 02), since ${D}${NB}${TANX} = ${TR('sec', x, '2')}:`,
      },
      {
        t: 'formula',
        kicker: 'Recurrence for tangent',
        main: `${In} = ${fr(TR('tan', x, `${n}−1`), `${n} − 1`)} − ${In2}`,
        legend: [`${In} = ∫${TR('tan', x, n)}${DX} for ${n}${NB}≥${NB}2`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Recurrence for secant.</b> Let ${In} = ∫${TR('sec', x, n)}${DX} for ${n}${NB}≥${NB}2. Peel one ${TR('sec', x, '2')} and apply parts with ${u} = ${TR('sec', x, `${n}−2`)}, d${v} = ${TR('sec', x, '2')}${DX}, so ${v} = ${TANX}:<br>${In} = ${TR('sec', x, `${n}−2`)}${NB}${TANX}<br>− ∫(${n} − 2)${NB}${TR('sec', x, `${n}−3`)} · ${SECX}${NB}${TANX} · ${TANX}${DX}.<br>Write ${TR('tan', x, '2')} = ${TR('sec', x, '2')} − 1 inside the remainder:<br>${In} = ${TR('sec', x, `${n}−2`)}${NB}${TANX} − (${n} − 2)∫${TR('sec', x, `${n}−2`)}(${TR('sec', x, '2')} − 1)${DX}<br>= ${TR('sec', x, `${n}−2`)}${NB}${TANX} − (${n} − 2)${In} + (${n} − 2)${In2}.<br>Collect the ${In} terms:`,
      },
      {
        t: 'formula',
        kicker: 'Recurrence for secant',
        main: `(${n} − 1)${In} = ${TR('sec', x, `${n}−2`)}${NB}${TANX} + (${n} − 2)${In2}`,
        legend: [`${In} = ∫${TR('sec', x, n)}${DX} for ${n}${NB}≥${NB}2`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Recurrence for the Wallis integral.</b> Let ${Wn} = ${INT_0_PI2}${NB}${TR('sin', x, n)}${DX} for ${n}${NB}≥${NB}2. Parts with ${u} = ${TR('sin', x, `${n}−1`)}, d${v} = ${SINX}${DX}, so ${v} = −${COSX}:<br>${Wn} = ${EV(`−${TR('sin', x, `${n}−1`)}${NB}${COSX}`, '0', 'π/2')}<br>+ (${n} − 1)${INT_0_PI2}${NB}${TR('sin', x, `${n}−2`)}${NB}${TR('cos', x, '2')}${DX}.<br>The boundary term vanishes at both ends. Replace ${TR('cos', x, '2')} = 1 − ${TR('sin', x, '2')}:<br>${Wn} = (${n} − 1)${Wn2} − (${n} − 1)${Wn}<br>⟹ ${Wn} = ${fr(`${n} − 1`, n)}${NB}${Wn2}`,
      },
      {
        t: 'formula',
        kicker: 'Recurrence for the Wallis integral',
        main: `${Wn} = ${fr(`${n} − 1`, n)}${NB}${Wn2}`,
        legend: [`${Wn} = ${INT_0_PI2}${NB}${TR('sin', x, n)}${DX} for ${n}${NB}≥${NB}2`, `${sb(W, '0')} = ${PI2}`, `${sb(W, '1')} = 1`],
        note: null,
      },
      {
        t: 'p',
        html: `Iterating down to ${sb(W, '0')} = ${PI2} (even${NB}${n}) or ${sb(W, '1')} = 1 (odd${NB}${n}) reproduces Wallis’ formula: this derivation is the proof behind the formula in Topic 03.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Evaluate ∫${TR('tan', x, '4')}${DX}.`,
        steps: [
          `Apply the recurrence twice. With ${n} = 4:<br>${sb(II, '4')} = ${fr(TR('tan', x, '3'), '3')} − ${sb(II, '2')},<br>${sb(II, '2')} = ∫${TR('tan', x, '2')}${DX} = ${TANX} − ${x}.`,
          `So<br>∫${TR('tan', x, '4')}${DX} = ${fr(TR('tan', x, '3'), '3')} − ${TANX} + ${x}${PLUS_C}.`,
          `<b>Check.</b> Differentiate:<br>${TR('tan', x, '2')}${NB}${TR('sec', x, '2')} − ${TR('sec', x, '2')} + 1<br>= ${TR('sec', x, '2')}(${TR('tan', x, '2')} − 1) + 1<br>= (${TR('tan', x, '2')} + 1)(${TR('tan', x, '2')} − 1) + 1 = ${TR('tan', x, '4')}. ✓`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Evaluate ∫${TR('sec', x, '4')}${DX}.`,
        steps: [
          `Recurrence with ${n} = 4:<br>${sb(II, '4')} = ${fr(`${TR('sec', x, '2')}${NB}${TANX}`, '3')} + ${fr('2', '3')}${sb(II, '2')},<br>${sb(II, '2')} = ∫${TR('sec', x, '2')}${DX} = ${TANX}.`,
          `So<br>∫${TR('sec', x, '4')}${DX} = ${fr(`${TR('sec', x, '2')}${NB}${TANX}`, '3')} + ${fr('2', '3')}${NB}${TANX}${PLUS_C}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Evaluate ∫${TR('sec', x, '5')}${DX} and ${INT_0_PI2}${NB}${TR('sin', x, '8')}${DX}.`,
        steps: [
          `<b>Secant.</b> Iterate: with ${n} = 5,<br>${sb(II, '5')} = ${fr(`${TR('sec', x, '3')}${NB}${TANX}`, '4')} + ${fr('3', '4')}${sb(II, '3')},<br>${sb(II, '3')} = ${fr(`${SECX}${NB}${TANX}`, '2')} + ${HALF}${sb(II, '1')}.`,
          `Here ${sb(II, '1')} = ∫${SECX}${DX} = ln${abs(`${SECX} + ${TANX}`)} (derived in Topic 02). Assemble:<br>∫${TR('sec', x, '5')}${DX} = ${fr(`${TR('sec', x, '3')}${NB}${TANX}`, '4')} + ${fr(`3${NB}${SECX}${NB}${TANX}`, '8')}<br>+ ${fr('3', '8')}${NB}ln${abs(`${SECX} + ${TANX}`)}${PLUS_C}.`,
          `<b>Sine.</b> Iterate ${Wn} = ${fr(`${n} − 1`, n)}${NB}${Wn2} from ${n} = 8 down to ${sb(W, '0')} = ${PI2}:<br>${sb(W, '8')} = ${fr('7', '8')} · ${fr('5', '6')} · ${fr('3', '4')} · ${HALF} · ${PI2}<br>= ${fr('105', '384')} · ${PI2} = ${fr('35π', '256')}.`,
          `<b>Cross-check with Wallis’ formula.</b> The closed form of Topic 03 with ${n} = 8, ${m}${NB}=${NB}0:<br>${fr('7!!', '8!!')} · ${PI2} = ${fr('7 · 5 · 3 · 1', '8 · 6 · 4 · 2')} · ${PI2}<br>= ${fr('105', '384')} · ${PI2} = ${fr('35π', '256')}. Agreement confirms both.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Derive the recurrence for ${In} = ∫${TR('tan', x, n)}${DX} from scratch.`,
            a: `Write ${TR('tan', x, n)} = ${TR('tan', x, `${n}−2`)}${NB}(${TR('sec', x, '2')} − 1), so ${In} = ∫${TR('tan', x, `${n}−2`)}${NB}${TR('sec', x, '2')}${DX} − ${In2}. With ${u} = ${TANX}, d${u} = ${TR('sec', x, '2')}${DX}, the first integral is ∫${u}<sup>${n}−2</sup>${DU} = ${fr(TR('tan', x, `${n}−1`), `${n} − 1`)}. Hence ${In} = ${fr(TR('tan', x, `${n}−1`), `${n} − 1`)} − ${In2} for ${n}${NB}≥${NB}2.`,
          },
          {
            q: `Evaluate ∫${TR('tan', x, '3')}${DX}.`,
            a: `${sb(II, '3')} = ${fr(TR('tan', x, '2'), '2')} − ${sb(II, '1')} = ${fr(TR('tan', x, '2'), '2')} + ln${abs(COSX)}${PLUS_C}.`,
          },
          {
            q: `Evaluate ∫${TR('tan', x, '5')}${DX}.`,
            a: `${sb(II, '5')} = ${fr(TR('tan', x, '4'), '4')} − ${sb(II, '3')}<br>= ${fr(TR('tan', x, '4'), '4')} − ${fr(TR('tan', x, '2'), '2')} − ln${abs(COSX)}${PLUS_C}.`,
          },
          {
            q: `Evaluate ∫${TR('sec', x, '6')}${DX}.`,
            a: `${sb(II, '6')} = ${fr(`${TR('sec', x, '4')}${NB}${TANX}`, '5')} + ${fr('4', '5')}${sb(II, '4')}<br>= ${fr(`${TR('sec', x, '4')}${NB}${TANX}`, '5')} + ${fr(`4${NB}${TR('sec', x, '2')}${NB}${TANX}`, '15')} + ${fr(`8${NB}${TANX}`, '15')}${PLUS_C}.`,
          },
          {
            q: `Evaluate ${INT_0_PI2}${NB}${TR('cos', x, '7')}${DX}.`,
            a: `By king (${x} → ${PI2} − ${x}) the integral equals ${sb(W, '7')} = ${fr('6', '7')} · ${fr('4', '5')} · ${fr('2', '3')} · ${sb(W, '1')} = ${fr('48', '105')} = ${fr('16', '35')}.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic F · pp. 520–522 ────────────────
  {
    n: 'F',
    title: 'Breakpoint Integrands II: Greatest Integer, Fractional Part, Min/Max',
    extra: true,
    kalam: 'Whenever a question says area, split at zeros; whenever it says evaluate the integral, do not.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 09 teaches splitting a modulus at its sign-change points. Three more families of integrands break the same way but were left unworked: the greatest-integer function, the fractional part, and min/max of two expressions. Each is a frequent JEE Main appearance and an occasional short CBSE question ${ESTIMATE}. Alongside them sits the single most-mark-losing distinction in the chapter: <b>signed integral versus geometric area</b>.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Notation: [${x}] = greatest integer ≤${NB}${x}; {${x}} = ${x} − [${x}].`,
      },
      {
        t: 'p',
        html: `<b>Greatest integer.</b> On any interval [${k},${NB}${k} + 1) with integer ${k}, [${x}] = ${k} is constant. So chop the interval at every integer inside it and sum rectangles:<br>${INT(m, n)}${NB}[${x}]${DX} = ${SUM(`${k}=${m}`, `${n}−1`)}${NB}${k} · 1<br>= ${fr(`(${n} − 1)${n}`, '2')} − ${fr(`(${m} − 1)${m}`, '2')}<br>for integers ${m}${NB}<${NB}${n}. Endpoint values never matter: a single point carries no width.`,
      },
      {
        t: 'formula',
        kicker: 'Greatest integer over integer limits',
        main: `${INT(m, n)}${NB}[${x}]${DX} = ${fr(`(${n} − 1)${n}`, '2')} − ${fr(`(${m} − 1)${m}`, '2')}`,
        legend: [`[${x}] = greatest integer ≤${NB}${x}`, `${m}, ${n} = integers with ${m}${NB}<${NB}${n}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Fractional part.</b> {${x}} = ${x} on [0,${NB}1), and {${x} + 1} = {${x}}, so {${x}} is periodic with period 1 and<br>${INT('0', T)}${NB}{${x}}${DX} = ${T} · ${INT_0_1}${NB}${x}${DX} = ${fr(T, '2')}<br>for any positive integer ${T} (and [${T}] · ${HALF} + ${HALF}{${T}}<sup>2</sup> otherwise).`,
      },
      {
        t: 'formula',
        kicker: 'Fractional part over whole periods',
        main: `${INT('0', T)}${NB}{${x}}${DX} = ${fr(T, '2')}`,
        legend: [`{${x}} = ${x} − [${x}]`, `${T} = a positive integer`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Min/max.</b> Solve ${gx} = ${hx} for the crossing points, split the interval there, and on each piece replace min/max by whichever function wins, decided by testing one interior point per piece.`,
      },
      {
        t: 'p',
        html: `<b>Signed vs total.</b> ${INT(a, b)}${NB}${f} counts area below the axis negatively. The geometric area is ${INT(a, b)}${NB}${abs(f)}, computed by splitting at the roots of ${f}. An odd function on [−${a},${NB}${a}] integrates to 0 while enclosing perfectly real, positive area.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Evaluate ${INT('−2', '3')}${NB}[${x}]${DX} and ${INT('0', '3')}${NB}(${x} − [${x}])${DX}.`,
        steps: [
          `<b>First.</b> The integers inside [−2,${NB}3] split the interval into five unit pieces, on which [${x}] equals −2, −1, 0, 1, 2 respectively:<br>${INT('−2', '3')}${NB}[${x}]${DX} = (−2) + (−1) + 0 + 1 + 2 = 0.`,
          `<b>Second.</b> ${x} − [${x}] = {${x}}, which is periodic with period 1; over three periods,<br>${INT('0', '3')}${NB}{${x}}${DX} = 3${INT_0_1}${NB}${x}${DX} = 3 · ${HALF} = ${fr('3', '2')}.`,
          `<b>Check.</b> ${INT('−2', '3')}${NB}${x}${DX} − ${INT('−2', '3')}${NB}[${x}]${DX}<br>= ${EV(fr(X2, '2'), '−2', '3')} − 0 = ${fr('9', '2')} − 2 = ${fr('5', '2')};<br>separately ${INT('−2', '3')}${NB}{${x}}${DX} covers five full unit cells, each contributing ${HALF}: total ${fr('5', '2')}. Consistent.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Evaluate ${INT('0', '2')}${NB}min(${X2},${NB}${x})${DX}.`,
        steps: [
          `Crossings: ${X2} = ${x} at ${x} = 0 and ${x} = 1. Test ${x} = ${HALF}: ${X2} = ${fr('1', '4')} < ${HALF}, so min = ${X2} on (0,${NB}1). Test ${x} = ${fr('3', '2')}: ${X2} = ${fr('9', '4')} > ${fr('3', '2')}, so min = ${x} on (1,${NB}2). Hence<br>${INT('0', '2')}${NB}min(${X2},${NB}${x})${DX} = ${INT_0_1}${NB}${X2}${DX} + ${INT('1', '2')}${NB}${x}${DX}<br>= ${fr('1', '3')} + ${fr('4 − 1', '2')} = ${fr('1', '3')} + ${fr('3', '2')} = ${fr('11', '6')}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the signed value of ${INT('−√3', '√3')}${NB}(${X3} − 3${x})${DX} and the total area enclosed between ${y} = ${X3} − 3${x} and the ${x}-axis.`,
        steps: [
          '<b>Signed.</b> The integrand is odd and the limits symmetric, so by P6 the integral is 0.',
          `<b>Total area.</b> The curve crosses the axis where ${x}(${X2} − 3) = 0: at ${x} = −√3, 0, √3. Sign test: positive on (−√3,${NB}0), negative on (0,${NB}√3). The two lobes are mirror images, so<br>Area = 2${abs(`${INT('0', '√3')}${NB}(${X3} − 3${x})${DX}`)}<br>= 2${abs(EV(`${fr(`${x}<sup>4</sup>`, '4')} − ${fr(`3${X2}`, '2')}`, '0', '√3'))}<br>= 2${abs(`${fr('9', '4')} − ${fr('9', '2')}`)} = 2 · ${fr('9', '4')} = ${fr('9', '2')}.`,
          '<b>The trap.</b> Writing 0 as “the area” costs every mark: the signed integral being 0 is precisely why the question demands the split-at-the-roots computation. Whenever a question says area, split at zeros; whenever it says evaluate the integral, do not.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Evaluate ${INT('0', '5')}${NB}[${x}]${DX}.`,
            a: '0 + 1 + 2 + 3 + 4 = 10.',
          },
          {
            q: `Evaluate ${INT('−1', '4')}${NB}[${x}]${DX}.`,
            a: '(−1) + 0 + 1 + 2 + 3 = 5.',
          },
          {
            q: `Evaluate ${INT('0', '2')}${NB}{${x}}${DX}.`,
            a: `Two periods: 2 · ${HALF} = 1.`,
          },
          {
            q: `Evaluate ${INT('0', '3/2')}${NB}min(${x},${NB}${X2})${DX}.`,
            a: `On (0,${NB}1), ${X2}${NB}<${NB}${x}, so min = ${X2}; on (1,${NB}${fr('3', '2')}), min = ${x}:<br>${fr('1', '3')} + (${fr('9', '8')} − ${HALF}) = ${fr('23', '24')}.`,
          },
          {
            q: `Evaluate ${INT('0', '2π')}${NB}[${SINX}]${DX}.`,
            a: `On (0,${NB}π), 0 < ${SINX} ≤ 1 gives [${SINX}] = 0 (except at the single point ${x} = ${PI2}, which carries no width); on (π,${NB}2π), −1 ≤ ${SINX} < 0 gives [${SINX}] = −1. Total = 0 · π + (−1)${NB}·${NB}π = −π.`,
          },
          {
            q: `Find the total area between ${y} = ${SINX} and the ${x}-axis for 0${NB}≤${NB}${x}${NB}≤${NB}2π.`,
            a: `Two humps of area 2 each: 4, that is, 2${INT_0_PI}${NB}${SINX}${DX} = 4, noting ${abs(SINX)} has period π (Topic 09).`,
          },
        ],
      },
    ],
  },
];
