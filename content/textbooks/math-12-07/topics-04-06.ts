import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Topics 04–06, pp. 469–485 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word. The book prints its nine
 * subtopics in the order 01, 04, 05, 06, 07, 08, 02, 09, 03; the app numbers
 * them by position (DECISIONS-M12 item 28), so these are book Subtopics 06
 * "Integrals of Special Forms (Quadratic Denominators & Roots)" (pp. 469–474),
 * 07 "Integration by Partial Fractions" (pp. 475–479; p. 480 is blank) and 08
 * "Integration by Parts" (pp. 481–485). Each topic opens with its "Exam
 * Relevance:" box as a part of its own, then is split at its Sections 1 to 8;
 * the "Cheat Sheet Box" is the part "Cheat sheet". No figures and no
 * unnumbered drawings on these pages. Integrals: ∫ upright and glued to its
 * integrand, the differential d<i>x</i> glued with an upright d, + <i>C</i>
 * italic; e and ln upright; |…| with a word joiner after the opening bar.
 * Every fraction is stacked (<frac>); a fraction the book prints inside a
 * numerator ("1/3 over x − 1") is written as the single fraction it equals.
 * No em dashes.
 * Review rm127a (decision 30): Topic 04's template table stays as printed and
 * also gets two formula cards (quadratic and root templates).
 */
const fr = (p: string, q: string) => `<frac><num>${p}</num><den>${q}</den></frac>`;
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
const p = I('p');
const q = I('q');
const r = I('r');
const u = I('u');
const v = I('v');
const x = I('x');
const AA = I('A');
const BB = I('B');
const C = I('C');
const DD = I('D');
const II = I('I');
const NN = I('N');
const QQ = I('Q');
const RR = I('R');
const XX = I('X');
const lam = I('λ');
const mu = I('μ');
const uv = I('uv');

const sq = (s: string) => `${s}<sup>2</sup>`;
const X2 = sq(x);
const X3 = `${x}<sup>3</sup>`;
const A2 = sq(a);
/** The differential in a numerator: d<i>x</i>, d upright. */
const dx = `d${x}`;
/** The differential after an integrand, glued to it. */
const DX = `${NB}d${x}`;
/** The integral sign glued to its integrand (as Topics 01–03). */
const int = (s: string) => `∫${s}`;
const abs = (s: string) => `|${WJ}${s}|`;
/** ln|…|, as the book prints it (as Topics 01–03). */
const ln = (s: string) => `ln${abs(s)}`;
const rt = (s: string) => `√(${s})`;
const atan = (s: string) => `tan<sup>−1</sup>${NB}${s}`;
const asin = (s: string) => `sin<sup>−1</sup>${NB}${s}`;
const sin = (s: string) => `sin${NB}${s}`;
const cos = (s: string) => `cos${NB}${s}`;
const lnx = `ln${NB}${x}`;
const EX = `e<sup>${x}</sup>`;
const EAX = `e<sup>${I('ax')}</sup>`;
const bx = I('bx');
const fx = `${f}(${x})`;
const fpx = `${f}′(${x})`;
const I1 = `${II}<sub>1</sub>`;
const I2 = `${II}<sub>2</sub>`;
const half = fr('1', '2');
const third = fr('1', '3');
const ONE_A = fr('1', a);
const ONE_2A = fr('1', `2${a}`);
const XA = fr(x, a);
const B2A = fr(b, `2${a}`);
const FPF = fr(`${f}′`, f);

// Topic 04 shapes.
const XXA2 = `${X2} + ${A2}`;
const XMA2 = `${X2} − ${A2}`;
const AMX2 = `${A2} − ${X2}`;
const LOG_XA = ln(fr(`${x} − ${a}`, `${x} + ${a}`));
const Q8 = `${X2} + 4${x} + 8`;
const R8 = rt(Q8);

// Topic 05 shapes.
const X1X2 = `(${x} − 1)(${x} + 2)`;
const AX_B = `${a}${x} + ${b}`;
const XM1 = `${x} − 1`;
const XP2 = `${x} + 2`;
const XMA = `${x} − ${a}`;

// Topic 06 shapes.
const XCOSX = `${x}${NB}${cos(x)}`;
const XSINX = `${x}${NB}${sin(x)}`;
const EXSINX = `${EX}${NB}${sin(x)}`;
const EXCOSX = `${EX}${NB}${cos(x)}`;
const EF = `${EX}[${fx}${NB}+${NB}${fpx}]`;
const EFF = `${EX}[${f} + ${f}′]`;
const UDV = `${int(`${u}${NB}d${v}`)} = ${uv} − ${int(`${v}${NB}d${u}`)}`;
const ATANX = `tan<sup>−1</sup>${NB}${x}`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 04 (book Subtopic 06) · pp. 469–474 ────────────────
  {
    n: '04',
    title: 'Integrals of Special Forms (Quadratic Denominators & Roots)',
    kalam: 'A whole family of integrals reduces to just a handful of templates whose answers are inverse-trig or logarithm functions.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `These standard forms are a JEE Main/CUET staple: typically 1–2 single-correct questions that are pure formula-recognition once you complete the square ${ESTIMATE}. CBSE Boards ask the cleaner ${fr('1', XXA2)} and ${fr('1', rt(AMX2))} forms; JEE Advanced combines them with linear numerators and roots of quadratics.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'A whole family of integrals reduces to just a handful of templates whose answers are <b>inverse-trig</b> or <b>logarithm</b> functions. The skill is not memorising dozens of results: it’s learning to reshape any quadratic into one of a few canonical shapes, mainly by <b>completing the square</b>.',
      },
      {
        t: 'p',
        html: `Why completing the square? Because sin<sup>−1</sup>, tan<sup>−1</sup>, and the log-forms are built for expressions like ${AMX2}, ${A2} + ${X2}, ${XMA2}. A messy ${X2} + ${b}${x} + ${c} doesn’t match, until you rewrite it as (${x} + ${fr(b, '2')})<sup>2</sup> + (constant), which is a perfect ${sq(XX)} ± ${sq(AA)} shape in the shifted variable ${XX} = ${x} + ${fr(b, '2')}.`,
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> It’s like fitting an odd-shaped parcel into standard-size boxes at a courier office. You can’t ship the parcel as-is, but a little repacking (completing the square) makes it fit a standard box (a known integral template), and then the shipping rate (the formula) is fixed.',
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions:</b><br>• The log-forms ${fr('1', XMA2)} require ${X2}${NB}≠${NB}${A2}; the sin<sup>−1</sup> form requires ${abs(x)}${NB}<${NB}${a}.<br>• For a linear numerator over a quadratic, you must first split it into “(derivative-of-quadratic part) + (constant part)”: the two parts use different templates.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      { t: 'p', html: `<b>The core templates</b> (${a}${NB}>${NB}0, ${C} understood):` },
      {
        t: 'table',
        title: null,
        head: ['Integral', 'Result'],
        rows: [
          [int(fr(dx, XXA2)), `${ONE_A} ${atan(XA)}`],
          [int(fr(dx, XMA2)), `${ONE_2A} ${LOG_XA}`],
          [int(fr(dx, AMX2)), `${ONE_2A} ${ln(fr(`${a} + ${x}`, `${a} − ${x}`))}`],
          [int(fr(dx, rt(AMX2))), asin(XA)],
          [int(fr(dx, rt(XXA2))), ln(`${x} + ${rt(XXA2)}`)],
          [int(fr(dx, rt(XMA2))), ln(`${x} + ${rt(XMA2)}`)],
        ],
      },
      {
        t: 'formula',
        kicker: 'Quadratic templates',
        main: `${int(fr(dx, XXA2))} = ${ONE_A} ${atan(XA)} + ${C}<br>${int(fr(dx, XMA2))} = ${ONE_2A} ${LOG_XA} + ${C}<br>${int(fr(dx, AMX2))} = ${ONE_2A} ${ln(fr(`${a} + ${x}`, `${a} − ${x}`))} + ${C}`,
        legend: [`${a} = a positive constant`, `${C} = the constant of integration`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Root templates',
        main: `${int(fr(dx, rt(AMX2)))} = ${asin(XA)} + ${C}<br>${int(fr(dx, rt(XXA2)))} = ${ln(`${x} + ${rt(XXA2)}`)} + ${C}<br>${int(fr(dx, rt(XMA2)))} = ${ln(`${x} + ${rt(XMA2)}`)} + ${C}`,
        legend: [`${a} = a positive constant`, `${C} = the constant of integration`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Square-root integrals',
        main: [
          `${int(rt(AMX2))}${DX} = ${fr(x, '2')}${NB}${rt(AMX2)}<br>+ ${fr(A2, '2')} ${asin(XA)} + ${C}`,
          `${int(rt(XXA2))}${DX} = ${fr(x, '2')}${NB}${rt(XXA2)}<br>+ ${fr(A2, '2')} ${ln(`${x} + ${rt(XXA2)}`)} + ${C}`,
          `${int(rt(XMA2))}${DX} = ${fr(x, '2')}${NB}${rt(XMA2)}<br>− ${fr(A2, '2')} ${ln(`${x} + ${rt(XMA2)}`)} + ${C}`,
        ].join('<br>'),
        legend: [`${a} = a positive constant`, `${C} = the constant of integration`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>General quadratic.</b> For ${a}${X2} + ${b}${x} + ${c}, complete the square: ${a}[(${x} + ${B2A})<sup>2</sup> + ${fr(c, a)} − ${fr(sq(b), `4${A2}`)}], then match a template with ${XX} = ${x} + ${B2A}.`,
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'p',
        html: `<b>Deriving ${int(fr(dx, XMA2))} (partial fractions preview).</b> Factor and split:<br>${fr('1', XMA2)} = ${fr('1', `(${x} − ${a})(${x} + ${a})`)}<br>= ${ONE_2A}(${fr('1', `${x} − ${a}`)} − ${fr('1', `${x} + ${a}`)})`,
      },
      {
        t: 'p',
        html: `Integrate each log:<br>${int(fr(dx, XMA2))} = ${ONE_2A}(ln${abs(`${x} − ${a}`)} − ln${abs(`${x} + ${a}`)})<br>= ${ONE_2A} ${LOG_XA} + ${C} ■`,
      },
      {
        t: 'proc',
        title: 'Procedure for a general quadratic',
        steps: [
          `<b>Constant numerator over a quadratic?</b> Complete the square in the denominator, substitute ${XX} = ${x} + ${B2A}, match a template.`,
          `<b>Linear numerator ${p}${x} + ${q}?</b> Write ${p}${x} + ${q} = ${lam}${NB}${fr('d', dx)}(quadratic) + ${mu}. Solve for ${lam}, ${mu}. The ${lam}-part is an ${int(FPF)} (→ log) or ${int(fr(`${f}′`, `√${f}`))} (→${NB}root); the ${mu}-part is a pure template after completing the square.`,
          `<b>Square-root of a quadratic?</b> Complete the square, then apply the ${rt(AMX2)} or ${rt(`${X2} ± ${A2}`)} results.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Evaluate ${int(fr(dx, `${X2} + 9`))}.`,
        steps: [`Match ${int(fr(dx, XXA2))} with ${a} = 3:<br>${int(fr(dx, `${X2} + 9`))} =`],
        ans: `${third} ${atan(fr(x, '3'))} + ${C}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Speed Trap',
        q: `Evaluate ${int(fr(dx, `${X2} − 16`))}.`,
        steps: [
          `Match ${int(fr(dx, XMA2))} with ${a} = 4, so ${ONE_2A} = ${fr('1', '8')}:<br>${int(fr(dx, `${X2} − 16`))} = ${fr('1', '8')} ${ln(fr(`${x} − 4`, `${x} + 4`))} + ${C}`,
          `<b>Speed lesson:</b> ${XMA2} in the denominator → log of a ratio; ${XXA2} → arctan. Read the sign first.`,
        ],
        ans: `${fr('1', '8')} ${ln(fr(`${x} − 4`, `${x} + 4`))} + ${C}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: completing the square',
        q: `Evaluate ${int(fr(dx, `${X2} + 4${x} + 13`))}.`,
        steps: [
          `Complete the square: ${X2} + 4${x} + 13 = (${x} + 2)<sup>2</sup> + 9. With ${XX} = ${x} + 2, ${a} = 3:<br>${int(fr(`d${XX}`, `${sq(XX)} + 9`))} = ${third} ${atan(fr(XX, '3'))} + ${C}<br>=`,
        ],
        ans: `${third} ${atan(fr(`${x} + 2`, '3'))} + ${C}`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: linear over root of quadratic',
        q: `Evaluate ${int(fr(`2${x} + 3`, R8))}${DX}.`,
        steps: [
          `Split the numerator into a derivative-of-quadratic part plus a constant. The derivative of ${Q8} is 2${x} + 4. Write<br>2${x} + 3 = (2${x} + 4) − 1`,
          `So the integral splits as<br>${int(fr(`2${x} + 4`, R8))}${DX}<br>− ${int(fr('1', R8))}${DX}<br>= ${I1} − ${I2}`,
          `<b>${I1}:</b> numerator is exactly the derivative of the inside, so ${I1} = 2${R8} (since ${int(fr(`${f}′`, `√${f}`))} = 2√${f}). <b>${I2}:</b> complete the square ${Q8} = (${x} + 2)<sup>2</sup> + 4; with ${XX} = ${x} + 2, ${a} = 2, ${I2} = ${ln(`${XX} + ${rt(`${sq(XX)} + 4`)}`)}<br>= ${ln(`(${x}${NB}+${NB}2) + ${R8}`)}. Combine:<br>${int(fr(`2${x} + 3`, R8))}${DX}<br>= 2${R8}<br>− ${ln(`(${x}${NB}+${NB}2) + ${R8}`)} + ${C}`,
          `<b>Deep idea:</b> the “split a linear numerator into derivative-part + constant-part” move is the master key for every ${fr('linear', 'quadratic')} integral, with or without a root.`,
        ],
        ans: `2${R8}<br>− ${ln(`(${x}${NB}+${NB}2) + ${R8}`)} + ${C}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `<b>[CBSE]</b> Evaluate ${int(fr(dx, rt(`25 − ${X2}`)))}.`, a: `${asin(fr(x, '5'))} + ${C}` },
          { q: `<b>[CUET]</b> Evaluate ${int(fr(dx, `${X2} + 2${x} + 5`))}.`, a: `${half} ${atan(fr(`${x} + 1`, '2'))} + ${C}` },
          {
            q: `<b>[JEE Main]</b> Evaluate ${int(fr(dx, rt(`${X2} + 6${x} + 13`)))}.`,
            a: `${ln(`(${x} + 3) + ${rt(`${X2} + 6${x} + 13`)}`)} + ${C}`,
          },
          {
            q: `<b>[JEE Main]</b> Evaluate ${int(fr(dx, `9 − 4${X2}`))}. (Hint: factor the 4 out.)`,
            a: `${fr('1', '12')} ${ln(fr(`3 + 2${x}`, `3 − 2${x}`))} + ${C}`,
          },
          {
            q: `<b>[JEE Advanced]</b> Evaluate ${int(rt(`4 − ${X2}`))}${DX}.`,
            a: `${fr(x, '2')}${NB}${rt(`4 − ${X2}`)} + 2${NB}${asin(fr(x, '2'))} + ${C}`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `${int(fr(dx, `${X2} + 25`))} equals:`,
        opts: [
          { label: `${fr('1', '5')} ${atan(fr(x, '5'))} + ${C}`, nudge: null },
          { label: `5${NB}${atan(fr(x, '5'))} + ${C}`, nudge: `<b>(b)</b> inverts the ${ONE_A} factor.` },
          {
            label: `${fr('1', '10')} ${ln(fr(`${x} − 5`, `${x} + 5`))} + ${C}`,
            nudge: `<b>(c)</b> is the ${XMA2} (log) form: wrong sign in the denominator.`,
          },
          { label: `${asin(fr(x, '5'))} + ${C}`, nudge: `<b>(d)</b> is the ${fr('1', rt(AMX2))} form: there’s no root here.` },
        ],
        correct: 0,
        solution: `${int(fr(dx, XXA2))} = ${ONE_A} ${atan(XA)} with ${a} = 5.`,
      },
      {
        t: 'mcq',
        q: `${int(fr(dx, rt(`9 − ${X2}`)))} equals:`,
        opts: [
          { label: `ln${abs(`${x} + ${rt(`9 − ${X2}`)}`)} + ${C}`, nudge: `<b>(a)</b> is a ${rt(XXA2)} log form.` },
          { label: `${asin(fr(x, '3'))} + ${C}`, nudge: null },
          { label: `${third} ${asin(fr(x, '3'))} + ${C}`, nudge: `<b>(c)</b> inserts a spurious ${third}.` },
          { label: `${third} ${atan(fr(x, '3'))} + ${C}`, nudge: '<b>(d)</b> is the arctan (non-root) form.' },
        ],
        correct: 1,
        solution: `${int(fr(dx, rt(AMX2)))} = ${asin(XA)} with ${a} = 3: note <b>no</b> ${ONE_A} factor here.`,
      },
      {
        t: 'mcq',
        q: `${int(fr(dx, `${X2} − 2${x} + 5`))} equals:`,
        opts: [
          { label: `${half} ${atan(fr(`${x} − 1`, '2'))} + ${C}`, nudge: null },
          { label: `tan<sup>−1</sup>(${x} − 1) + ${C}`, nudge: `<b>(b)</b> forgets the ${ONE_A} factor and uses ${a} = 1.` },
          {
            label: `${fr('1', '4')} ${ln(fr(`${x} − 1 − 2`, `${x} − 1 + 2`))} + ${C}`,
            nudge: `<b>(c)</b> uses the log form: the denominator is ${sq(XX)} + ${A2}, not ${sq(XX)} − ${A2}.`,
          },
          {
            label: `${half} ${atan(fr(`${x} + 1`, '2'))} + ${C}`,
            nudge: `<b>(d)</b> completes the square with the wrong sign (${x} + 1 instead of ${x} − 1).`,
          },
        ],
        correct: 0,
        solution: `${X2} − 2${x} + 5 = (${x} − 1)<sup>2</sup> + 4, so with ${a} = 2: ${half} ${atan(fr(`${x} − 1`, '2'))}.`,
      },
      {
        t: 'mcq',
        q: `${int(fr(x, `${X2} + 4`))}${DX} equals:`,
        opts: [
          { label: `${half} ${atan(fr(x, '2'))} + ${C}`, nudge: `<b>(a)</b> is the template for numerator 1, not ${x}.` },
          { label: `${half} ln(${X2} + 4) + ${C}`, nudge: null },
          { label: `ln(${X2} + 4) + ${C}`, nudge: `<b>(c)</b> forgets the ${half}.` },
          { label: `${half} ${asin(fr(x, '2'))} + ${C}`, nudge: '<b>(d)</b> wrong template entirely.' },
        ],
        correct: 1,
        solution: `Numerator ${x} = ${half}(2${x}) is half the derivative of the denominator → ${int(FPF)} form → ${half} ln(${X2} + 4).`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Confusing ${XXA2} (arctan) with ${XMA2} (log).</b> The sign in the denominator picks the function: + → tan<sup>−1</sup>, − → log-of-ratio. Read it first.`,
          `<b>Inserting or dropping the ${ONE_A} factor.</b> ${int(fr(dx, XXA2))} has ${ONE_A}; ${int(fr(dx, rt(AMX2)))} = ${asin(XA)} has <b>none.</b> Memorise which forms carry the factor.`,
          `<b>Numerator ${x} vs numerator 1.</b> With no root, numerator ${x} → log (via ${FPF}); numerator constant → arctan/arcsin. Under a root, numerator ${x} → a root instead. They are different problems on the same denominator.`,
          `<b>Forgetting to complete the square.</b> Any ${X2} + ${b}${x} + ${c} must be reshaped before a template applies.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> decide the answer-type in one glance: denominator sign chooses log vs arctan; presence of a root chooses arcsin/log-root; numerator ${x} vs 1 chooses log vs arctan (log becomes root under a square root). Three binary checks pin the template before you write anything.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `${int(fr(dx, XXA2))} = ${ONE_A} ${atan(XA)};<br>${int(fr(dx, XMA2))} = ${ONE_2A} ${LOG_XA}.`, note: '' },
          {
            f: `${int(fr(dx, rt(AMX2)))} = ${asin(XA)} (no ${ONE_A}!);<br>${int(fr(dx, rt(`${X2} ± ${A2}`)))} = ${ln(`${x} + ${rt(`${X2} ± ${A2}`)}`)}.`,
            note: '',
          },
          { f: '<b>General quadratic</b>', note: `complete the square → substitute ${XX} = ${x} + ${B2A} → match a template.` },
          { f: '<b>Linear over quadratic</b>', note: `${p}${x} + ${q} = ${lam} · (quad)′ + ${mu}; ${lam}-part → log/root, ${mu}-part → template.` },
        ],
        aids: ['“Plus is arctan, minus is log.”', `“Root with ${AMX2} is arcsin, and arcsin has no ${ONE_A}.”`],
      },
    ],
  },

  // ──────────────── Topic 05 (book Subtopic 07) · pp. 475–479 ────────────────
  {
    n: '05',
    title: 'Integration by Partial Fractions',
    kalam: 'The fix is to break one complicated fraction into a sum of simpler fractions, each of which integrates to a log or an arctan.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Partial fractions is a near-certain CBSE Board question (3–5 marks) and a frequent JEE Main/CUET tool for rational integrands ${ESTIMATE}. JEE Advanced uses it inside longer problems, often after a substitution turns something into a rational function.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Some rational functions, like ${fr('1', X1X2)}, have no direct integral, because there’s no single substitution that simplifies them. The fix is to <b>break one complicated fraction into a sum of simpler fractions</b>, each of which integrates to a log or an arctan. This breaking-apart is “partial fractions,” and it’s just addition of fractions run in reverse.`,
      },
      {
        t: 'p',
        html: `When you add ${fr(AA, XM1)} + ${fr(BB, XP2)} you get a single fraction over ${X1X2}. Partial fractions undoes that: given the combined fraction, it recovers the unknown numerators ${AA} and ${BB}. Each recovered piece is then a textbook integral.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> A restaurant hands your table one combined bill, but you want to split it by who ordered what. Partial fractions is that itemisation: the messy total ${fr('stuff', X1X2)} gets itemised into each diner’s share ${fr(AA, XM1)} and ${fr(BB, XP2)}, and now each share is easy to “pay” (integrate).`,
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• The method needs a <b>proper</b> fraction (numerator degree < denominator degree). If it’s improper, do polynomial long division first; integrate the quotient separately.<br>• The denominator must be factorised. Each factor type gets a specific partial-fraction template (see below).',
      },

      { t: 'part', title: 'Key definitions and properties' },
      { t: 'p', html: 'For a proper fraction, assign one partial fraction per factor:' },
      {
        t: 'table',
        title: null,
        head: ['Denominator factor', 'Partial-fraction term'],
        rows: [
          [`Linear (${AX_B})`, fr(AA, AX_B)],
          [`Repeated linear (${AX_B})<sup>2</sup>`, `${fr(AA, AX_B)} + ${fr(BB, `(${AX_B})<sup>2</sup>`)}`],
          [
            `Repeated linear (${AX_B})<sup>3</sup>`,
            `${fr(AA, AX_B)} + ${fr(BB, `(${AX_B})<sup>2</sup>`)} + ${fr(C, `(${AX_B})<sup>3</sup>`)}`,
          ],
          [`Irreducible quadratic (${a}${X2} + ${b}${x} + ${c})`, fr(`${AA}${x} + ${BB}`, `${a}${X2} + ${b}${x} + ${c}`)],
        ],
      },
      {
        t: 'p',
        html: `After splitting, each term integrates to a <b>log</b> (linear factors), a <b>power</b> (the squared and higher terms of a repeated factor, e.g. ${int(fr(dx, `(${XMA})<sup>2</sup>`))} = −${fr('1', XMA)}), or a <b>log + arctan</b> (quadratic factors).`,
      },
      {
        t: 'p',
        html: `<b>Cover-up shortcut</b> (distinct linear factors): to find the numerator over (${x} − ${r}), delete that factor from the original and substitute ${x} = ${r} into what remains.`,
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'proc',
        title: 'Procedure',
        steps: [
          `<b>Check proper/improper.</b> If numerator degree ≥ denominator degree, divide first: ${fr(NN, DD)} = ${QQ} + ${fr(RR, DD)} with deg${NB}${RR} < deg${NB}${DD}.`,
          '<b>Factor the denominator</b> completely into linear and irreducible-quadratic factors.',
          '<b>Write the template</b> (one term per factor, per the table).',
          `<b>Clear denominators</b> (multiply through by ${DD}) to get an identity in the numerators.`,
          `<b>Solve for the constants:</b> either substitute convenient ${x}-values (roots, for speed) or compare coefficients.`,
          '<b>Integrate each simple fraction.</b>',
        ],
      },
      {
        t: 'p',
        html: `<b>Worked derivation of the constants (cover-up).</b> For<br>${fr('1', X1X2)} = ${fr(AA, XM1)} + ${fr(BB, XP2)},<br>clear denominators: 1 = ${AA}(${x} + 2) + ${BB}(${x} − 1). Put ${x} = 1: 1 = 3${AA} ⇒ ${AA} = ${third}. Put ${x} = −2: 1 = −3${BB} ⇒ ${BB} = −${third}. The root-substitution kills one unknown at a time. ■`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Evaluate ${int(fr(dx, X1X2))}.`,
        steps: [
          `Decompose:<br>${fr('1', X1X2)} = ${fr('1', `3(${XM1})`)} − ${fr('1', `3(${XP2})`)}<br>(from the worked derivation in the Key procedures and derivations part).`,
          `Integrate:<br>∫ = ${third} ln${abs(XM1)} − ${third} ln${abs(XP2)} + ${C}<br>=`,
        ],
        ans: `${third} ${ln(fr(XM1, XP2))} + ${C}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Speed Trap: cover-up',
        q: `Evaluate ${int(fr(`3${x} + 1`, `(${x} + 1)(${x} − 2)`))}${DX}.`,
        steps: [
          `Cover-up for each constant. Over (${x} + 1): delete it, set ${x} = −1 →<br>${fr('3(−1) + 1', '(−1 − 2)')} = ${fr('−2', '−3')} = ${fr('2', '3')}.`,
          `Over (${x} − 2): set ${x} = 2 →<br>${fr('3(2) + 1', '(2 + 1)')} = ${fr('7', '3')}. So<br>${fr(`3${x} + 1`, `(${x} + 1)(${x} − 2)`)} = ${fr('2', `3(${x} + 1)`)} + ${fr('7', `3(${x} − 2)`)}`,
          `∫ = ${fr('2', '3')} ln${abs(`${x} + 1`)} + ${fr('7', '3')} ln${abs(`${x} − 2`)} + ${C}`,
          '<b>Speed lesson:</b> cover-up finds each constant in one mental step: no system of equations.',
        ],
        ans: `${fr('2', '3')} ln${abs(`${x} + 1`)} + ${fr('7', '3')} ln${abs(`${x} − 2`)} + ${C}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: repeated factor',
        q: `Evaluate ${int(fr(x, `(${XM1})<sup>2</sup>(${x} + 1)`))}${DX}.`,
        steps: [
          `Template with a repeated linear factor:<br>${fr(x, `(${XM1})<sup>2</sup>(${x} + 1)`)}<br>= ${fr(AA, XM1)} + ${fr(BB, `(${XM1})<sup>2</sup>`)} + ${fr(C, `${x} + 1`)}`,
          `Clear: ${x} = ${AA}(${XM1})(${x} + 1) + ${BB}(${x} + 1) + ${C}(${XM1})<sup>2</sup>. Put ${x} = 1: 1 = 2${BB} ⇒ ${BB} = ${half}. Put ${x} = −1: −1 = 4${C} ⇒ ${C} = −${fr('1', '4')}. Compare ${X2} coefficients: 0 = ${AA} + ${C} ⇒ ${AA} = ${fr('1', '4')}.`,
          `So<br>∫ = ${fr('1', '4')} ln${abs(XM1)} − ${half} · ${fr('1', XM1)} − ${fr('1', '4')} ln${abs(`${x} + 1`)} + ${C}`,
        ],
        ans: `${fr('1', '4')} ${ln(fr(XM1, `${x} + 1`))} − ${fr('1', `2(${XM1})`)} + ${C}`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: improper + quadratic factor',
        q: `Evaluate ${int(fr(X3, `${X2} + 1`))}${DX}.`,
        steps: [
          `Improper (numerator degree 3 ≥ 2); divide first:<br>${fr(X3, `${X2} + 1`)} = ${x} − ${fr(x, `${X2} + 1`)}<br>(since ${x} · (${X2} + 1) = ${X3} + ${x}, leaving remainder −${x}).`,
          `Integrate each piece; the second is an ${int(FPF)} form:<br>${int(`(${x} − ${fr(x, `${X2} + 1`)})`)}${DX}<br>= ${fr(X2, '2')} − ${half} ln(${X2} + 1) + ${C}`,
          '<b>Deep idea:</b> always test degree first: skipping the division step on an improper fraction is the most common way this problem goes wrong.',
        ],
        ans: `${fr(X2, '2')} − ${half} ln(${X2} + 1) + ${C}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `<b>[CBSE]</b> Evaluate ${int(fr(dx, `(${x} − 2)(${x} − 3)`))}.`, a: `${ln(fr(`${x} − 3`, `${x} − 2`))} + ${C}` },
          { q: `<b>[CUET]</b> Evaluate ${int(fr('1', `${X2} − 9`))}${DX}.`, a: `${fr('1', '6')} ${ln(fr(`${x} − 3`, `${x} + 3`))} + ${C}` },
          {
            q: `<b>[JEE Main]</b> Evaluate ${int(fr(`2${x} + 1`, `${x}(${x} + 1)`))}${DX}.`,
            a: `ln${abs(x)} + ln${abs(`${x} + 1`)} + ${C}`,
          },
          {
            q: `<b>[JEE Main]</b> Evaluate ${int(fr(dx, `${x}(${x} + 1)<sup>2</sup>`))}.`,
            a: `${ln(fr(x, `${x} + 1`))} + ${fr('1', `${x} + 1`)} + ${C}`,
          },
          {
            q: `<b>[JEE Advanced]</b> Evaluate ${int(fr(X2, `${X2} + 4`))}${DX}. (Hint: improper, divide first.)`,
            a: `${x} − 2${NB}${atan(fr(x, '2'))} + ${C}`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `In ${fr('1', X1X2)} = ${fr(AA, XM1)} + ${fr(BB, XP2)}, the pair (${AA},${NB}${BB}) is:`,
        opts: [
          { label: `(${third}, −${third})`, nudge: null },
          { label: `(${third}, ${third})`, nudge: `<b>(b)</b> gets the sign of ${BB} wrong.` },
          { label: '(1, −1)', nudge: '<b>(c)</b> forgets to divide by the value of the other factor (1 + 2 = 3 and −2 − 1 = −3).' },
          { label: `(−${third}, ${third})`, nudge: '<b>(d)</b> swaps both signs.' },
        ],
        correct: 0,
        solution: `Cover-up: ${AA} = ${fr('1', '1 + 2')} = ${third} at ${x} = 1; ${BB} = ${fr('1', '−2 − 1')} = −${third} at ${x} = −2.`,
      },
      {
        t: 'mcq',
        q: `${int(fr(dx, `${X2} − 1`))} equals:`,
        opts: [
          { label: `${ATANX} + ${C}`, nudge: `<b>(a)</b> is the ${X2} + 1 arctan form.` },
          { label: `${half} ${ln(fr(XM1, `${x} + 1`))} + ${C}`, nudge: null },
          {
            label: `ln${abs(`${X2} − 1`)} + ${C}`,
            nudge: `<b>(c)</b> treats the whole denominator as an ${int(FPF)}, but the numerator is 1, not 2${x}.`,
          },
          {
            label: `${half} ln${abs(`${X2} − 1`)} + ${C}`,
            nudge: `<b>(d)</b> is ${int(fr(x, `${X2} − 1`))}${DX}: it needs numerator ${x}, but the numerator is 1.`,
          },
        ],
        correct: 1,
        solution: `${fr('1', `${X2} − 1`)} = ${half}(${fr('1', XM1)} − ${fr('1', `${x} + 1`)}) → ${half} ${ln(fr(XM1, `${x} + 1`))}.`,
      },
      {
        t: 'mcq',
        q: `Before applying partial fractions to ${fr(X2, `${X2} − 1`)}, you must first:`,
        opts: [
          { label: 'factor only', nudge: '<b>(a)</b> skips the required division.' },
          { label: 'complete the square', nudge: '<b>(b)</b> is for irreducible quadratics, not this case.' },
          { label: 'divide (it’s improper)', nudge: null },
          { label: `substitute ${u} = ${X2}`, nudge: '<b>(d)</b> doesn’t simplify the form.' },
        ],
        correct: 2,
        solution: `Numerator degree = denominator degree, so it’s improper: divide to get 1 + ${fr('1', `${X2} − 1`)} first.`,
      },
      {
        t: 'mcq',
        q: `The correct partial-fraction template for ${fr('1', `(${x} − 2)<sup>2</sup>(${x} + 3)`)} is:`,
        opts: [
          {
            label: `${fr(AA, `${x} − 2`)} + ${fr(BB, `${x} + 3`)}`,
            nudge: '<b>(a)</b>, <b>(b)</b> omit one of the two required repeated-factor terms.',
          },
          {
            label: `${fr(AA, `(${x} − 2)<sup>2</sup>`)} + ${fr(BB, `${x} + 3`)}`,
            nudge: '<b>(a)</b>, <b>(b)</b> omit one of the two required repeated-factor terms.',
          },
          { label: `${fr(AA, `${x} − 2`)} + ${fr(BB, `(${x} − 2)<sup>2</sup>`)} + ${fr(C, `${x} + 3`)}`, nudge: null },
          {
            label: `${fr(`${AA}${x} + ${BB}`, `(${x} − 2)<sup>2</sup>`)} + ${fr(C, `${x} + 3`)}`,
            nudge: '<b>(d)</b> uses a linear numerator, which is only for irreducible quadratic factors.',
          },
        ],
        correct: 2,
        solution: `A repeated linear factor (${x} − 2)<sup>2</sup> needs both ${fr(AA, `${x} − 2`)} and ${fr(BB, `(${x} − 2)<sup>2</sup>`)}, plus ${fr(C, `${x} + 3`)}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Skipping division on improper fractions.</b> If numerator degree ≥ denominator degree, you must divide first. Forcing partial fractions on an improper fraction gives wrong constants.',
          `<b>Missing a repeated-factor term.</b> (${XMA})<sup>2</sup> needs both ${fr(AA, XMA)} and ${fr(BB, `(${XMA})<sup>2</sup>`)}, not just one.`,
          `<b>Linear vs constant numerator.</b> An irreducible quadratic factor takes a linear numerator ${AA}${x} + ${BB}; a linear factor takes a constant ${AA}.`,
          `<b>Sign errors when combining logs.</b> ln${abs(a)} − ln${abs(b)} = ln${abs(fr(a, b))}: keep track of which factor is on top.`,
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> for distinct linear factors, skip the linear system entirely and use cover-up: each constant drops out in one substitution. Reserve coefficient-comparison for repeated or quadratic factors.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>First:</b> proper? If not, divide. <b>Then:</b> factor the denominator.', note: '' },
          {
            f: '<b>Templates</b>',
            note: `linear → ${fr(AA, AX_B)}; repeated → add ${fr(BB, `(${AX_B})<sup>2</sup>`)} etc.; irreducible quadratic → ${fr(`${AA}${x} + ${BB}`, `${a}${X2} + ${b}${x} + ${c}`)}.`,
          },
          { f: '<b>Find constants</b>', note: 'cover-up (distinct linear) or compare coefficients (repeated/quadratic).' },
          {
            f: '<b>Integrate</b>',
            note: `linear → log; repeated → power (${int(fr(dx, `(${XMA})<sup>2</sup>`))} = −${fr('1', XMA)}); quadratic → log + arctan.`,
          },
        ],
        aids: ['“Improper? Divide before you decide.”', '“Repeated factor → repeated terms.”', '“Quadratic on bottom → linear on top.”'],
      },
    ],
  },

  // ──────────────── Topic 06 (book Subtopic 08) · pp. 481–485 ────────────────
  {
    n: '06',
    title: 'Integration by Parts',
    kalam: 'Integration by parts is the technique built for products: it’s the reverse of the product rule for differentiation.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Integration by parts is a near-certain CBSE Board question (3–5 marks: ${int(XCOSX)}, ${int(lnx)}, ${int(EXSINX)}) and a JEE Main/CUET regular ${ESTIMATE}. JEE Advanced leans on the ${int(EF)} recognition and parts-based reduction.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Substitution handles integrands that are a function-times-its-own-derivative. But what about a product of two unrelated functions, like ${XCOSX} or ${x}${EX}? There’s no inner-function-and-its-derivative to exploit. Integration by parts is the technique built for products: it’s the reverse of the <b>product rule</b> for differentiation.`,
      },
      {
        t: 'p',
        html: `The product rule says (${uv})′ = ${u}′${v} + ${uv}′. Rearranging and integrating gives a formula that trades one integral for another: you integrate the “easy” factor and differentiate the “hard” one, hoping the new integral is simpler than the original. The art is choosing which factor to differentiate.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> It’s like a relay race where you hand off the baton. You can’t integrate ${XCOSX} in one runner’s leg, so you “hand off”: differentiate the ${x} (it becomes the simpler 1) and integrate the ${cos(x)}. After the handoff, the leftover integral ${int(`1${NB}·${NB}${sin(x)}`)}${DX} is something a single runner can finish. The skill is choosing who carries the baton first so the race actually ends.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions:</b><br>• Parts helps only if the new integral ${int(`${v}${NB}d${u}`)} is easier than the original. A bad choice makes it harder: then swap your ${u} and d${v}.<br>• Some integrals (like ${int(EXSINX)}) cycle back to themselves after two applications; you then solve algebraically for the integral.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'formula',
        kicker: 'Integration by parts',
        main: UDV,
        legend: [`${u} = the function you differentiate`, `d${v} = the part you integrate (to get ${v})`],
        note: null,
      },
      {
        t: 'p',
        html: `Equivalently, for a product ${u}(${x}) · ${v}(${x}) where you differentiate ${u} and integrate ${v}′:<br>${int(`${u}${NB}${v}′`)}${DX} = ${u}${NB}${v} − ${int(`${u}′${NB}${v}`)}${DX}`,
      },
      {
        t: 'p',
        html: `<b>ILATE: choosing ${u}.</b> Pick the function to differentiate (${u}) by whichever comes first in: <b>I</b>nverse trig, <b>L</b>ogarithm, <b>A</b>lgebraic, <b>T</b>rigonometric, <b>E</b>xponential. The earlier it appears, the better it is as ${u} (because differentiating it simplifies things). ILATE is a rule of thumb, not a law: ${int(`${X3}e<sup>${X2}</sup>`)}${DX}, for example, needs ${u} = ${X2}, d${v} = ${x}e<sup>${X2}</sup>${DX}.`,
      },
      {
        t: 'formula',
        kicker: 'Three high-value standard results',
        main: [
          `${int(EF)}${DX} = ${EX}${fx} + ${C}`,
          `${int(`${EAX}${NB}${sin(bx)}`)}${DX} = ${fr(`${EAX}(${a}${NB}${sin(bx)} − ${b}${NB}${cos(bx)})`, `${A2} + ${sq(b)}`)} + ${C}`,
          `${int(`${EAX}${NB}${cos(bx)}`)}${DX} = ${fr(`${EAX}(${a}${NB}${cos(bx)} + ${b}${NB}${sin(bx)})`, `${A2} + ${sq(b)}`)} + ${C}`,
        ].join('<br>'),
        legend: [`${fx} = a differentiable function`, `${a}, ${b} = constants`, `${C} = the constant of integration`],
        note: null,
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'p',
        html: `<b>Deriving the formula.</b> Integrate the product rule (${uv})′ = ${u}′${v} + ${uv}′:<br>${uv} = ${int(`${u}′${v}`)}${DX} + ${int(`${uv}′`)}${DX}<br>⇒ ${int(`${uv}′`)}${DX} = ${uv} − ${int(`${u}′${v}`)}${DX} ■`,
      },
      {
        t: 'p',
        html: `<b>Deriving ${int(EFF)}${DX} = ${EX}${f}.</b> Apply parts to ${int(`${EX}${fx}`)}${DX} with ${u} = ${fx}, d${v} = ${EX}${NB}d${x}:<br>${int(`${EX}${fx}`)}${DX} = ${EX}${fx} − ${int(`${EX}${fpx}`)}${DX}`,
      },
      {
        t: 'p',
        html: `Move the second integral over:<br>${int(`${EX}${fx}`)}${DX} + ${int(`${EX}${fpx}`)}${DX} = ${EX}${fx}<br>⇒ ${int(EF)}${DX} = ${EX}${fx} + ${C} ■`,
      },
      {
        t: 'proc',
        title: 'Procedure',
        steps: [
          `<b>Identify ${u} and d${v}</b> using ILATE (differentiate the ILATE-earlier function).`,
          `<b>Compute d${u} and ${v}</b> (differentiate ${u}, integrate d${v}).`,
          `<b>Apply</b> ${UDV}.`,
          `<b>If the new integral cycles back</b> to the original (e.g. ${int(EXSINX)}), apply parts once more, then solve algebraically.`,
          `<b>Special trick:</b> if the integrand is ${EX} times “a function plus its own derivative,” jump straight to ${EX}${fx}.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Evaluate ${int(XCOSX)}${DX}.`,
        steps: [
          `ILATE: Algebraic (${x}) before Trig (${cos(x)}), so ${u} = ${x}, d${v} = ${cos(x)}${DX}. Then d${u} = d${x}, ${v} = ${sin(x)}:<br>${int(XCOSX)}${DX} = ${XSINX} − ${int(sin(x))}${DX}<br>=`,
        ],
        ans: `${XSINX} + ${cos(x)} + ${C}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Speed Trap: the ln x trick',
        q: `Evaluate ${int(lnx)}${DX}.`,
        steps: [
          `There’s only one function, but treat it as ${lnx} · 1. ILATE: Log before Algebraic, so ${u} = ${lnx}, d${v} = 1${DX}. Then d${u} = ${fr('1', x)}${DX}, ${v} = ${x}:<br>${int(lnx)}${DX} = ${x}${NB}${lnx} − ${int(`${x} · ${fr('1', x)}`)}${DX}<br>= ${x}${NB}${lnx} − ${int('1')}${DX}<br>= ${x}${NB}${lnx} − ${x} + ${C}`,
          `<b>Speed lesson:</b> lone ${lnx} or ${ATANX} → pair with an invisible “×1” and apply parts.`,
        ],
        ans: `${x}${NB}${lnx} − ${x} + ${C}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: the cycling integral',
        q: `Evaluate ${II} = ${int(EXSINX)}${DX}.`,
        steps: [
          `Parts with ${u} = ${sin(x)}, d${v} = ${EX}${DX}:<br>${II} = ${EXSINX} − ${int(EXCOSX)}${DX}. Apply parts again to the new integral (${u} = ${cos(x)}, d${v} = ${EX}${DX}): ${int(EXCOSX)}${DX} = ${EXCOSX} + ${int(EXSINX)}${DX} = ${EXCOSX} + ${II}. Substitute back:<br>${II} = ${EXSINX} − (${EXCOSX} + ${II})<br>= ${EXSINX} − ${EXCOSX} − ${II}`,
          `⇒ 2${II} = ${EX}(${sin(x)} − ${cos(x)})<br>⇒ ${II} = ${fr(`${EX}(${sin(x)} − ${cos(x)})`, '2')} + ${C}`,
          `<b>Why it works:</b> the integral reappears, so you solve for ${II} like an algebraic unknown.`,
        ],
        ans: `${fr(`${EX}(${sin(x)} − ${cos(x)})`, '2')} + ${C}`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: the f + f′ recognition',
        q: `Evaluate ${int(`${EX}(${fr('1', x)} − ${fr('1', X2)})`)}${DX}.`,
        steps: [
          `Spot the structure: let ${fx} = ${fr('1', x)}. Then ${fpx} = −${fr('1', X2)}, so the integrand is exactly ${EX}[${fx}${NB}+${NB}${fpx}]. By the standard result:<br>${int(`${EX}(${fr('1', x)} − ${fr('1', X2)})`)}${DX}<br>= ${EX} · ${fr('1', x)} + ${C} = ${fr(EX, x)} + ${C}`,
          `<b>Deep idea:</b> recognising ${EFF} turns a hard-looking integral into a one-line answer: always check for it when you see ${EX} times a sum.`,
        ],
        ans: `${fr(EX, x)} + ${C}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `<b>[CBSE]</b> Evaluate ${int(`${x}${EX}`)}${DX}.`, a: `${EX}(${x} − 1) + ${C}` },
          { q: `<b>[CUET]</b> Evaluate ${int(XSINX)}${DX}.`, a: `−${XCOSX} + ${sin(x)} + ${C}` },
          {
            q: `<b>[JEE Main]</b> Evaluate ${int(ATANX)}${DX}. (Hint: pair with ×1.)`,
            a: `${x}${NB}${ATANX} − ${half} ln(1 + ${X2}) + ${C}`,
          },
          { q: `<b>[JEE Main]</b> Evaluate ${int(`${X2}${NB}${lnx}`)}${DX}.`, a: `${fr(X3, '3')} ${lnx} − ${fr(X3, '9')} + ${C}` },
          {
            q: `<b>[JEE Advanced]</b> Evaluate<br>${int(`${EX}(${ATANX}${NB}+${NB}${fr('1', `1 + ${X2}`)})`)}${DX}. (Hint: ${f} + ${f}′.)`,
            a: `${EX}${NB}${ATANX} + ${C}`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `Using ILATE, for ${int(`${x}${EX}`)}${DX} the correct choice of ${u} is:`,
        opts: [
          { label: EX, nudge: '<b>(a)</b> is the worse choice (the algebraic part should be differentiated).' },
          { label: x, nudge: null },
          { label: `${x}${EX}`, nudge: '<b>(c)</b> isn’t a valid split.' },
          { label: 'either works equally', nudge: '<b>(d)</b> is false: the wrong choice complicates the new integral.' },
        ],
        correct: 1,
        solution: `Algebraic (${x}) precedes Exponential (${EX}) in ILATE, so differentiate ${x}. Choosing ${u} = ${EX} makes the integral harder.`,
      },
      {
        t: 'mcq',
        q: `${int(lnx)}${DX} equals:`,
        opts: [
          { label: `${fr('1', x)} + ${C}`, nudge: `<b>(a)</b> is the derivative of ${lnx}.` },
          { label: `${x}${NB}${lnx} + ${x} + ${C}`, nudge: '<b>(b)</b> has the wrong sign on the second term.' },
          { label: `${x}${NB}${lnx} − ${x} + ${C}`, nudge: null },
          { label: `${fr(`(${lnx})<sup>2</sup>`, '2')} + ${C}`, nudge: `<b>(d)</b> wrongly treats ${lnx} as if substitution applied.` },
        ],
        correct: 2,
        solution: `Parts with ${u} = ${lnx}, d${v} = d${x} gives ${x}${NB}${lnx}${NB}−${NB}${x} + ${C}.`,
      },
      {
        t: 'mcq',
        q: `${int(`${EX}(${sin(x)} + ${cos(x)})`)}${DX} equals:`,
        opts: [
          { label: `${EXSINX} + ${C}`, nudge: null },
          {
            label: `${EXCOSX} + ${C}`,
            nudge: `<b>(b)</b> uses ${f} = ${cos(x)}, but then ${f}′ = −${sin(x)} ≠ ${cos(x)}, so the structure doesn’t match.`,
          },
          { label: `${EX}(${sin(x)} − ${cos(x)}) + ${C}`, nudge: `<b>(c)</b> is 2${int(EXSINX)}${DX}, a different integrand.` },
          { label: `${fr(`${EX}(${sin(x)} + ${cos(x)})`, '2')} + ${C}`, nudge: '<b>(d)</b> misapplies the cycling-integral result.' },
        ],
        correct: 0,
        solution: `With ${f} = ${sin(x)}, ${f}′ = ${cos(x)}, the integrand is ${EFF}, so the answer is ${EXSINX} + ${C}.`,
      },
      {
        t: 'mcq',
        q: `${int(XSINX)}${DX} equals:`,
        opts: [
          { label: `−${XCOSX} + ${sin(x)} + ${C}`, nudge: null },
          { label: `${XCOSX} − ${sin(x)} + ${C}`, nudge: '<b>(b)</b> flips every sign.' },
          { label: `−${XCOSX} − ${sin(x)} + ${C}`, nudge: `<b>(c)</b> has the wrong sign on ${sin(x)}.` },
          { label: `${XSINX} + ${cos(x)} + ${C}`, nudge: `<b>(d)</b> is ${int(XCOSX)}${DX}.` },
        ],
        correct: 0,
        solution: `${u} = ${x}, d${v} = ${sin(x)}${DX} → ${v} = −${cos(x)}: −${XCOSX} + ${int(cos(x))}${DX} = −${XCOSX} + ${sin(x)} + ${C}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Choosing ${u} and d${v} backwards.</b> Differentiate the ILATE-earlier function. The wrong split makes ${int(`${v}${NB}d${u}`)} harder than the original.`,
          `<b>Sign error from ${v} = ${int(sin(x))}${DX} = −${cos(x)}.</b> Integrating sin introduces a minus; carry it through both terms of the formula.`,
          `<b>Forgetting the cycling trick.</b> For ${int(EXSINX)}, after two applications the original reappears: solve for it, don’t loop forever.`,
          `<b>Missing the ${EFF} shortcut.</b> When you see ${EX} times a sum, check whether the second term is the derivative of the first.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> before grinding through parts on an ${EX}(…) integral, test the ${f} + ${f}′ pattern: it converts many “hard” problems into instant answers. And for a lone ${lnx}, ${ATANX}, or sin<sup>−1</sup>${NB}${x}, remember the invisible “×1.”`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Formula</b>', note: `${UDV}.` },
          { f: `<b>Choose ${u} by ILATE</b>`, note: 'Inverse-trig, Log, Algebraic, Trig, Exponential (earlier → differentiate it).' },
          {
            f: '<b>Cycling</b>',
            note: `${int(`${EAX}${NB}${sin(bx)}`)}, ${int(`${EAX}${NB}${cos(bx)}`)} reappear after two applications → solve algebraically.`,
          },
          { f: '<b>Golden shortcut</b>', note: `${int(EF)}${DX} = ${EX}${fx} + ${C}.` },
          { f: '<b>Lone log / inverse-trig</b>', note: 'pair with ×1, then apply parts.' },
        ],
        aids: [
          '“ILATE: differentiate the one that comes first.”',
          `“${EX} times (${f} plus ${f}-prime) = ${EX} times ${f}.”`,
          '“Sine integrates to minus cosine: mind the sign.”',
        ],
      },
    ],
  },
];
