import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7 Integrals, Topics 07–09, pp. 486–504 of the Class 12 Mathematics
 * Master Reference (October 2026 edition), word for word. The book prints its
 * nine subtopics in the order 01, 04, 05, 06, 07, 08, 02, 09, 03; the app
 * numbers them by position (DECISIONS-M12 item 28), so:
 *   Topic 07 = book Subtopic 02 "Definite Integrals: Definition, the
 *              Fundamental Theorem & Limit of a Sum" (pp. 486–491),
 *   Topic 08 = book Subtopic 09 "Evaluation of Definite Integrals by
 *              Substitution" (pp. 492–496),
 *   Topic 09 = book Subtopic 03 "Properties of Definite Integrals: The
 *              Symmetry Toolkit" (pp. 497–504).
 * Each topic opens with its "Exam Relevance:" box as a part of its own, then
 * is split at its Sections 1 to 8; the "Cheat Sheet Box" is the part "Cheat
 * sheet". Cross-references to the book's subtopic numbers are mapped (book
 * 02 → Topic 07, 03 → Topic 09, 04 → Topic 02). No figures and no unnumbered
 * drawings on these pages. Integrals: ∫ upright, limits as a sub and a sup on
 * the sign, the differential glued with an upright d, [F(x)] with its limits
 * for evaluation; e, ln, lim upright; |…| with a word joiner after the
 * opening bar. The book's brace (P5*, P6) is written one line per piece.
 * Every fraction is stacked (<frac>); no em dashes.
 * Review rm127b (decision 30): the P0–P2 and P0–P7 tables stay as printed; five
 * property cards added (one in Topic 07, four in Topic 09).
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
const g = I('g');
const h = I('h');
const k = I('k');
const n = I('n');
const r = I('r');
const t = I('t');
const u = I('u');
const x = I('x');
const y = I('y');
const A = I('A');
const C = I('C');
const F = I('F');
const T = I('T');
/** The integral’s own name, I. */
const II = I('I');

/** Differentials: an upright d glued to the integrand. */
const DX = `${NB}d${x}`;
const DT = `${NB}d${t}`;
const DU = `${NB}d${u}`;
/** d/dx, with an upright d. */
const D = fr('d', `d${x}`);

const of = (fn: string, s: string) => `${fn}(${s})`;
const abs = (s: string) => `|${WJ}${s}|`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const cube = (s: string) => `${s}<sup>3</sup>`;
/** A trigonometric function of an argument, with an optional power: sin³ x. */
const tr = (fn: string, arg: string = x, pow = '') => `${fn}${pow ? `<sup>${pow}</sup>` : ''}${NB}${arg}`;
const rel = (l: string, op: string, rr: string) => `${l}${NB}${op}${NB}${rr}`;
/** The integral sign with its limits, bare (∫ₐᵇ = −∫ᵦᵃ). */
const IL = (lo: string, hi: string) => `∫<sub>${lo}</sub><sup>${hi}</sup>`;
/** The integral sign with its limits, kept with the integrand that follows. */
const INT = (lo: string, hi: string) => `${IL(lo, hi)}${NB}`;
/** [F(x)] from lo to hi. */
const EV = (s: string, lo: string, hi: string) => `[${s}]<sub>${lo}</sub><sup>${hi}</sup>`;
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;
const LIM = (s: string) => `lim<sub>${s}</sub>`;

const fx = of(f, x);
const ft = of(f, t);
const fu = of(f, u);
const Fx = of(F, x);
const Fa = of(F, a);
const Fb = of(F, b);
const Ax = of(A, x);
const ga = of(g, a);
const gb = of(g, b);
const gx = of(g, x);
const gpx = `${g}′(${x})`;
const X2 = sq(x);
const X3 = cube(x);
const SINX = tr('sin');
const COSX = tr('cos');
const SIN3X = tr('sin', x, '3');
const PI2 = fr('π', '2');
const PI4 = fr('π', '4');
const HALF = fr('1', '2');
const AB = `[${a},${NB}${b}]`;
const N1 = `${n}−1`;
/** h = (b − a)/n. */
const H_DEF = `${h} = ${fr(`${b} − ${a}`, n)}`;
const SUM_R = `∑${NB}${r} = ${fr(`${n}(${n} − 1)`, '2')}`;
const SUM_R2 = `∑${NB}${sq(r)} = ${fr(`(${n} − 1)${n}(2${n} − 1)`, '6')}`;
const ABS_SIN = abs(SINX);
const ABS_COS = abs(COSX);
const RT_SIN = `√(${SINX})`;
const RT_COS = `√(${COSX})`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 07 · book Subtopic 02 · pp. 486–491 ────────────────
  {
    n: '07',
    title: 'Definite Integrals: Definition, the Fundamental Theorem & Limit of a Sum',
    kalam: 'A definite integral gives a single number: the net accumulation of a quantity between two endpoints.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `The definite integral is the gateway to area, average value, and every applied integral that follows. CBSE Boards test direct Fundamental-Theorem evaluation ${ESTIMATE}. The limit-of-a-sum definition was a favourite 5-mark “first-principles” question in older CBSE papers; the rationalised NCERT book and the current CBSE syllabus no longer include it, and JEE Advanced still uses it. JEE Main/CUET use definite integrals everywhere ${ESTIMATE}; JEE Advanced builds on this foundation with the properties of Topic 09.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `An indefinite integral gives a family of functions. A <b>definite integral</b> gives a single number: the net accumulation of a quantity between two endpoints. Geometrically, ${INT(a, b)}${fx}${DX} is the <b>signed area</b> between the curve ${rel(y, '=', fx)} and the ${x}-axis from ${rel(x, '=', a)} to ${rel(x, '=', b)} (area above the axis counts positive, below counts negative).`,
      },
      {
        t: 'p',
        html: `There are two ways to define this number, and the deep result of the chapter is that they agree:<br>• <b>As a limit of a sum</b> (the “first-principles” definition): slice ${AB} into thin strips, add up the rectangle areas, and let the strips shrink to zero width.<br>• <b>Via antiderivatives</b> (the practical method): find any antiderivative ${F} and compute ${Fb} − ${Fa}.`,
      },
      {
        t: 'p',
        html: 'The bridge between them is the <b>Fundamental Theorem of Calculus</b>: the statement that differentiation and integration are inverse processes. It is what makes integration computable instead of an infinite summing chore.',
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Imagine filling a tank from a tap whose flow rate varies. The limit-of-a-sum is like measuring the inflow second-by-second and adding up thousands of tiny amounts: accurate but exhausting. The Fundamental Theorem is the water meter: read it at the start (${Fa}) and at the end (${Fb}), subtract, and you instantly know the total without tracking every drop.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions:</b><br>• A definite integral is a <b>number</b>: there is <b>no</b> +${NB}${C}. The constant cancels in ${Fb} − ${Fa}.<br>• The function should be continuous (or at worst have finitely many jumps) on ${AB} for these definitions to behave.<br>• “Signed” matters: if the curve dips below the axis, that portion subtracts. Total geometric area needs ∫${abs(f)}: a distinction tested often ${ESTIMATE}.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: `<b>Definition (definite integral as a limit of a sum).</b> For ${f} continuous on ${AB}, with ${H_DEF}:`,
      },
      {
        t: 'formula',
        kicker: 'Definite integral as a limit of a sum',
        main: `${INT(a, b)}${fx}${DX} = ${LIM(`${n}→∞`)}${NB}${h}${SUM(`${r}=0`, N1)}${NB}${of(f, `${a} + ${r}${h}`)}<br>= ${LIM(`${h}→0`)}${NB}${h}[${of(f, a)} + ${of(f, `${a} + ${h}`)} + ⋯ + ${of(f, `${a}${NB}+${NB}(${n}${NB}−${NB}1)${h}`)}]`,
        legend: [
          `${f} = a function continuous on ${AB}`,
          `${n} = the number of strips`,
          `${h} = the width of each strip (${fr(`${b} − ${a}`, n)})`,
          `${r} = the strip number, 0 to ${n} − 1`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Second Fundamental Theorem (the evaluation rule).</b> If ${F} is an antiderivative of ${f} (so ${rel(`${F}′`, '=', f)}), then:`,
      },
      {
        t: 'formula',
        kicker: 'Second Fundamental Theorem (the evaluation rule)',
        main: `${INT(a, b)}${fx}${DX} = ${EV(Fx, a, b)} = ${Fb} − ${Fa}`,
        legend: [`${F} = an antiderivative of ${f} (${F}′ = ${f})`, `${a}, ${b} = the lower and upper limits`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>First Fundamental Theorem (the area function).</b> For ${f} continuous on ${AB}, define ${Ax} = ${INT(a, x)}${ft}${DT} for ${x} in ${AB}. Then ${A} is differentiable and:`,
      },
      {
        t: 'formula',
        kicker: 'First Fundamental Theorem (the area function)',
        main: `${A}′(${x}) = ${D}${NB}${INT(a, x)}${ft}${DT} = ${fx}`,
        legend: [`${Ax} = the area function (${INT(a, x)}${ft}${DT})`, `${t} = the dummy variable of integration`],
        note: null,
      },
      {
        t: 'p',
        html: 'i.e. differentiating an integral with respect to its upper limit returns the integrand. This is why antiderivatives compute areas.',
      },
      { t: 'p', html: '<b>Structural properties (owned here):</b>' },
      {
        t: 'table',
        title: null,
        head: ['#', 'Property', 'Statement'],
        rows: [
          ['P0', 'Dummy variable', `${INT(a, b)}${fx}${DX} = ${INT(a, b)}${ft}${DT}`],
          ['P1', 'Swap limits', `${INT(a, b)}${fx}${DX} = −${INT(b, a)}${fx}${DX}`],
          ['P2', 'Additivity (splitting)', `${INT(a, b)}${fx}${DX}<br>= ${INT(a, c)}${fx}${DX} + ${INT(c, b)}${fx}${DX}`],
        ],
      },
      {
        t: 'formula',
        kicker: 'Reversal and additivity',
        main: `${INT(a, b)}${fx}${DX} = −${INT(b, a)}${fx}${DX}<br>${INT(a, b)}${fx}${DX} = ${INT(a, c)}${fx}${DX} + ${INT(c, b)}${fx}${DX}`,
        legend: [`${c} = any point at which to split`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Evaluation & symmetry properties</b> (the king property, even/odd rule, the 0 → 2${a} split, and periodic integrals) are the toolkit of <b>Topic 09</b>. This topic supplies the definition and FTC they all rest on.`,
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'p',
        html: `<b>Why the First FTC holds (area-function reasoning).</b> Consider ${Ax} = ${INT(a, x)}${ft}${DT}. Increasing the upper limit by a sliver Δ${x} adds a thin strip of area ≈ ${fx}${NB}Δ${x} (a rectangle of height ${fx} and width Δ${x}). So<br>${fr(`${of(A, `${x} + Δ${x}`)} − ${Ax}`, `Δ${x}`)} ≈ ${fx},<br>and letting Δ${x} → 0 gives ${A}′(${x}) = ${fx}. The rate at which accumulated area grows is exactly the height of the curve. ■`,
      },
      {
        t: 'p',
        html: `<b>Why the Second FTC follows.</b> Since ${A}′(${x})${NB}=${NB}${fx}, ${A} is an antiderivative of ${f}. Any other antiderivative ${F} differs from ${A} by a constant: ${Fx}${NB}=${NB}${Ax} + ${k}. Then<br>${Fb} − ${Fa} = ${of(A, b)} − ${of(A, a)}<br>= ${IL(a, b)}${NB}${f} − ${IL(a, a)}${NB}${f} = ${IL(a, b)}${NB}${f} − 0.<br>Hence ${IL(a, b)}${NB}${f} = ${Fb} − ${Fa} for any antiderivative ${F}. ■`,
      },
      {
        t: 'p',
        html: `<b>Justifying P2 (additivity).</b> Accumulating from ${a} to ${b} is the same as accumulating from ${a} to an intermediate ${c}, then from ${c} to ${b}: area adds over adjacent intervals. This is the property that lets you handle piecewise integrands by splitting at the breakpoints.`,
      },
      {
        t: 'proc',
        title: 'Procedure: evaluating a definite integral (FTC method)',
        steps: [
          `Find an antiderivative ${Fx} (any one: drop the +${NB}${C}).`,
          `Substitute the upper limit: compute ${Fb}.`,
          `Substitute the lower limit: compute ${Fa}.`,
          `Subtract: ${Fb} − ${Fa}. Keep the order: upper minus lower.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure: limit of a sum (first principles)',
        steps: [
          `Set ${H_DEF}; write the sample points ${a} + ${r}${h}.`,
          `Form ${h}${SUM(`${r}=0`, N1)}${NB}${of(f, `${a} + ${r}${h}`)}.`,
          `Expand using ${SUM_R}, ${SUM_R2}, etc.`,
          `Take ${n} → ∞ (equivalently ${h} → 0).`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Evaluate ${INT('1', '2')}(3${X2} − 2${x} + 1)${DX}.`,
        steps: [
          `Antiderivative: ${Fx} = ${X3} − ${X2} + ${x}. Apply the Second FTC:<br>${of(F, '2')} = 8 − 4 + 2 = 6,${NB}${NB}${of(F, '1')} = 1 − 1 + 1 = 1`,
          `${INT('1', '2')}(3${X2} − 2${x} + 1)${DX} = ${of(F, '2')} − ${of(F, '1')} = 6 − 1 =`,
        ],
        ans: '5',
      },
      {
        t: 'ex',
        tag: 'JEE Main Speed Trap',
        q: `Evaluate ${INT('1', 'e')}${fr('1', x)}${DX}.`,
        steps: [
          `Antiderivative of ${fr('1', x)} is ln${abs(x)}:<br>${INT('1', 'e')}${fr('1', x)}${DX} = ${EV(`ln${NB}${x}`, '1', 'e')} = ln${NB}e − ln${NB}1 = 1 − 0 = 1`,
          `<b>Speed lesson:</b> recognise the standard antiderivative and the limits often chosen to make logs collapse (ln${NB}e = 1, ln${NB}1 = 0).`,
        ],
        ans: '1',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: standard forms + FTC',
        q: `Evaluate ${INT('1', '2')}(2${x} + ${fr('3', X2)})${DX}.`,
        steps: [
          `Antiderivative: ${Fx} = ${X2} − ${fr('3', x)} (since ∫3${x}<sup>−2</sup>${DX} = −3${x}<sup>−1</sup>). Then<br>${of(F, '2')} = 4 − ${fr('3', '2')} = ${fr('5', '2')},${NB}${NB}${of(F, '1')} = 1 − 3 = −2`,
          `${INT('1', '2')}(2${x} + ${fr('3', X2)})${DX} = ${fr('5', '2')} − (−2) =`,
        ],
        ans: fr('9', '2'),
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: limit of a sum',
        q: `Evaluate ${INT('0', '2')}(${X2} + 2${x})${DX} from first principles (as a limit of a sum).`,
        steps: [
          `Here ${rel(a, '=', '0')}, ${rel(b, '=', '2')}, ${h} = ${fr('2', n)}, sample points ${x}<sub>${r}</sub> = ${r}${h} = ${fr(`2${r}`, n)}:<br>${INT('0', '2')}(${X2} + 2${x})${DX}<br>= ${LIM(`${n}→∞`)}${NB}${h}${SUM(`${r}=0`, N1)}${NB}[(${fr(`2${r}`, n)})<sup>2</sup> + 2 · ${fr(`2${r}`, n)}]<br>= ${LIM(`${n}→∞`)}${NB}${fr('2', n)}${SUM(`${r}=0`, N1)}${NB}[${fr(`4${sq(r)}`, sq(n))} + ${fr(`4${r}`, n)}]<br>= ${LIM(`${n}→∞`)}${NB}[${fr('8', cube(n))}${SUM(`${r}=0`, N1)}${NB}${sq(r)} + ${fr('8', sq(n))}${SUM(`${r}=0`, N1)}${NB}${r}]<br>= ${LIM(`${n}→∞`)}${NB}[${fr('8', cube(n))} · ${fr(`(${n} − 1)${n}(2${n} − 1)`, '6')} + ${fr('8', sq(n))} · ${fr(`${n}(${n} − 1)`, '2')}]`,
          `As ${n} → ∞, the first term → ${fr('8', '6')} · 2 = ${fr('8', '3')} and the second → ${fr('8', '2')} = 4:<br>${INT('0', '2')}(${X2} + 2${x})${DX} = ${fr('8', '3')} + 4 = ${fr('20', '3')}`,
          `<b>Check (FTC):</b> ${EV(`${fr(X3, '3')} + ${X2}`, '0', '2')} = ${fr('8', '3')} + 4 = ${fr('20', '3')}. ✓`,
          '<b>Deep idea:</b> the limit-of-a-sum defines the integral; the FTC is the shortcut. Older Board papers rewarded showing they agree.',
        ],
        ans: fr('20', '3'),
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `<b>[CBSE]</b> Evaluate ${INT('0', 'π/2')}${COSX}${DX}.`, a: '1' },
          { q: `<b>[CUET]</b> Evaluate ${INT('1', '4')}${fr('1', `√${x}`)}${DX}.`, a: '2' },
          { q: `<b>[JEE Main]</b> Evaluate ${INT('0', '1')}(3${X2} + 2${x})${DX}.`, a: '2' },
          { q: `<b>[JEE Main]</b> Evaluate ${INT('1', '3')}${fr('1', x)}${DX}.`, a: `ln${NB}3` },
          { q: `<b>[JEE Advanced]</b> Evaluate ${INT('0', '1')}${X2}${DX} as a limit of a sum.`, a: fr('1', '3') },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `${INT('0', 'π')}${SINX}${DX} equals:`,
        opts: [
          { label: '0', nudge: '<b>(a)</b> results from a sign slip (−cos π − cos 0 = 0).' },
          { label: '1', nudge: '<b>(b)</b> keeps only one of the two equal terms: −cos π + cos 0 = 1 + 1 = 2, not 1.' },
          { label: '2', nudge: null },
          { label: '−2', nudge: '<b>(d)</b> reverses the FTC order (lower minus upper): cos π − cos 0 = −2.' },
        ],
        correct: 2,
        solution: `${EV(`−${COSX}`, '0', 'π')} = −cos${NB}π + cos${NB}0 = −(−1) + 1 = 2.`,
      },
      {
        t: 'mcq',
        q: `${INT(a, b)}${fx}${DX} is equal to:`,
        opts: [
          { label: `${INT(a, b)}${ft}${DT}`, nudge: null },
          { label: `${INT(a, b)}${fx}${DX} + ${C}`, nudge: `<b>(b)</b> wrongly adds a constant; a definite integral has no +${NB}${C}.` },
          { label: `${INT(b, a)}${fx}${DX}`, nudge: '<b>(c)</b> is the negative of the integral (P1).' },
          { label: `a function of ${x}`, nudge: `<b>(d)</b> is false: a definite integral is a number, not a function of ${x}.` },
        ],
        correct: 0,
        solution: `The variable of integration is a dummy (P0): renaming ${x} to ${t} changes nothing.`,
      },
      {
        t: 'mcq',
        q: `${D}${NB}${INT('0', x)}${sq(t)}${DT} equals:`,
        opts: [
          { label: fr(X3, '3'), nudge: '<b>(a)</b> is the integral itself, not its derivative.' },
          { label: X2, nudge: null },
          { label: `2${x}`, nudge: '<b>(c)</b> differentiates twice.' },
          { label: '0', nudge: '<b>(d)</b> wrongly treats the integral as a constant.' },
        ],
        correct: 1,
        solution: `By the First FTC, differentiating an integral w.r.t. its upper limit returns the integrand evaluated there: ${X2}.`,
      },
      {
        t: 'mcq',
        q: `In evaluating ${INT('0', '1')}${X2}${DX} as ${LIM(`${n}→∞`)}${NB}${fr('1', n)}${SUM(`${r}=0`, N1)}${NB}(${fr(r, n)})<sup>2</sup>, the value is:`,
        opts: [
          { label: fr('1', '3'), nudge: null },
          { label: HALF, nudge: `<b>(b)</b> sums ${r} instead of ${sq(r)}: it is the value of ${INT('0', '1')}${x}${DX}.` },
          { label: '1', nudge: `<b>(c)</b> drops the (${fr(r, n)})<sup>2</sup> and sums 1: it is the value of ${INT('0', '1')}1${DX}.` },
          { label: fr('1', '6'), nudge: `<b>(d)</b> loses the 2 of 2${n} in the power-sum: ${fr(`(${n} − 1)${n}(2${n} − 1)`, `6${cube(n)}`)} → ${fr('2', '6')}, not ${fr('1', '6')}.` },
        ],
        correct: 0,
        solution: `${fr('1', cube(n))}${SUM(`${r}=0`, N1)}${NB}${sq(r)} = ${fr(`(${n} − 1)${n}(2${n} − 1)`, `6${cube(n)}`)} → ${fr('2', '6')} = ${fr('1', '3')}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Writing +${NB}${C} on a definite integral.</b> The result is a number; the constant cancels in ${Fb} − ${Fa}. Never append +${NB}${C}.`,
          `<b>Reversing the FTC order.</b> It is ${F}(upper) − ${F}(lower). Swapping them flips the sign (that is P1).`,
          `<b>Mishandling a swap of limits.</b> Swapping limits mid-solution flips the sign: ∫${fx}${DX} from ${a} to ${b} = −∫${fx}${DX} from ${b} to ${a}.`,
          `<b>Forgetting d${x}/limit accounting in limit-of-a-sum.</b> The factor ${H_DEF} multiplies the sum; dropping it scales the answer wrongly.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> for “evaluate from first principles,” memorise the three power-sums (∑${NB}1 = ${n}, ${SUM_R}, ${SUM_R2}): almost every limit-of-a-sum question reduces to a combination of these.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Meaning</b>', note: `${IL(a, b)}${NB}${f}${DX} = signed area = net accumulation = a <b>number</b> (no +${NB}${C}).` },
          { f: '<b>Second FTC (evaluate)</b>', note: `${IL(a, b)}${NB}${f}${DX} = ${Fb} − ${Fa}, ${F} any antiderivative.` },
          { f: '<b>First FTC (differentiate)</b>', note: `${D}${NB}${INT(a, x)}${ft}${DT} = ${fx}.` },
          {
            f: '<b>Limit of a sum</b>',
            note: `${IL(a, b)}${NB}${f}${DX} = ${LIM(`${n}→∞`)}${NB}${h}${SUM(`${r}=0`, N1)}${NB}${of(f, `${a} + ${r}${h}`)}, ${H_DEF}.`,
          },
          {
            f: '<b>Structural properties</b>',
            note: `P0 dummy variable; P1 ${IL(a, b)} = −${IL(b, a)}; P2 split ${IL(a, b)} = ${IL(a, c)} + ${IL(c, b)}.`,
          },
          { f: `<b>For king / even-odd / 0 → 2${a} / periodic → Topic 09.</b>`, note: '' },
          { f: '<b>Power-sums</b>', note: `${SUM_R}, ${SUM_R2}.` },
        ],
        aids: [`<b>“Upper minus lower, no ${C}.”</b>`, '<b>“Differentiate an integral → get the integrand back.”</b>'],
      },
    ],
  },

  // ──────────────── Topic 08 · book Subtopic 09 · pp. 492–496 ────────────────
  {
    n: '08',
    title: 'Evaluation of Definite Integrals by Substitution',
    kalam: 'This is where substitution meets definite integrals, and where students lose easy marks by mishandling the limits.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is where substitution meets definite integrals, and where students lose easy marks by mishandling the limits. CBSE Boards ask 2–4 marks on it ${ESTIMATE}; JEE Main/CUET test it constantly ${ESTIMATE}; JEE Advanced combines it with the definite-integral properties from Topic 09.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'You already know two things: how to substitute (Topic 02) and how definite integrals work (Topic 07). This topic fuses them, and the only new idea is what happens to the <b>limits</b>.',
      },
      {
        t: 'p',
        html: `When you substitute ${rel(u, '=', gx)} in a definite integral, the limits ${rel(x, '=', a)} and ${rel(x, '=', b)} are values of ${x}, but your new integral is in ${u}. So the limits must be <b>converted to ${u}-values</b> too: the new lower limit is ${ga} and the new upper limit is ${gb}. Do that, and you never need to convert back to ${x} at all: you just evaluate in ${u}.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Recall the currency analogy from Topic 02. A definite integral is like a shopping trip with a fixed start and end budget marked in rupees. When you switch to the “${u} currency,” you must also convert those budget markers to the new currency; otherwise you’d be measuring distance with the wrong ruler at the ends. Convert the limits once, and the whole trip happens cleanly in ${u}.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions:</b><br>• You have <b>two valid choices</b>: (a) change the limits to ${u}-values and finish in ${u}, or (b) keep the old limits, integrate, back-substitute to ${x}, then plug in the original limits. Pick one: never mix them.<br>• The substitution must be valid across the whole interval (${g}′ continuous on ${AB}); if you have to write ${x} back in terms of ${u}, ${g} must also be one-to-one there. Watch for points where ${g} misbehaves.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: `<b>The rule.</b> If ${rel(u, '=', gx)} with d${u} = ${gpx}${DX}, then:`,
      },
      {
        t: 'formula',
        kicker: 'Substitution in a definite integral',
        main: `${INT(a, b)}${of(f, gx)}${NB}${gpx}${DX} = ${INT(ga, gb)}${fu}${DU}`,
        legend: [
          `${u} = the new variable (${u} = ${gx})`,
          `d${u} = its differential (${gpx}${DX})`,
          `${ga}, ${gb} = the new lower and upper limits`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `The limits transform with the variable: ${rel(x, '=', a)} → ${rel(u, '=', ga)} and ${rel(x, '=', b)} → ${rel(u, '=', gb)}.`,
      },
      {
        t: 'p',
        html: '<b>A useful consequence (even/odd revisited).</b> Substitution is the engine behind many property results: e.g. the king and even/odd properties of Topic 09 are proved by exactly this limit-changing mechanism.',
      },
      {
        t: 'p',
        html: `<b>Two methods, same answer:</b><br>• <b>Method A (change limits):</b> convert limits to ${u}, evaluate in ${u}. Faster; no back-substitution.<br>• <b>Method B (keep limits):</b> integrate, return to ${x}, then apply the original ${x}-limits.`,
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'p',
        html: `<b>Why the limits change: the reasoning.</b> The definite integral ${IL(a, b)} accumulates over ${x} running from ${a} to ${b}. After substitution, the same accumulation is described in terms of ${u}; but as ${x} sweeps from ${a} to ${b}, ${rel(u, '=', gx)} sweeps from ${ga} to ${gb}. To describe the identical accumulation in ${u}, the integral must run over ${u}’s actual range, namely ${ga} to ${gb}. Keeping the old ${x}-limits on a ${u}-integral would be mixing two rulers: the source of countless wrong answers.`,
      },
      {
        t: 'proc',
        title: 'Procedure (Method A)',
        steps: [
          `Choose ${rel(u, '=', gx)}; compute d${u} = ${gpx}${DX}.`,
          `<b>Convert the limits:</b> lower ${rel(x, '=', a)} → ${rel(u, '=', ga)}; upper ${rel(x, '=', b)} → ${rel(u, '=', gb)}.`,
          `Rewrite the entire integral in ${u} with the new limits.`,
          `Integrate and evaluate as ${of(F, gb)} − ${of(F, ga)}: no back-substitution needed.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Evaluate ${INT('0', '1')}${fr(x, `${X2} + 1`)}${DX}.`,
        steps: [
          `Let ${u} = ${X2} + 1, d${u} = 2${x}${DX}, so ${x}${DX} = ${HALF}${DU}. <b>Convert limits:</b> ${rel(x, '=', '0')} → ${rel(u, '=', '1')}; ${rel(x, '=', '1')} → ${rel(u, '=', '2')}. Then<br>${INT('0', '1')}${fr(x, `${X2} + 1`)}${DX} = ${HALF}${INT('1', '2')}${fr(`d${u}`, u)}<br>= ${HALF}${EV(`ln${NB}${u}`, '1', '2')} = ${HALF}(ln${NB}2 − ln${NB}1) =`,
        ],
        ans: `${HALF}${NB}ln${NB}2`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Speed Trap',
        q: `Evaluate ${INT('0', 'π/2')}${SINX} ${COSX}${DX}.`,
        steps: [
          `Let ${rel(u, '=', SINX)}, d${u} = ${COSX}${DX}. <b>Convert limits:</b> ${rel(x, '=', '0')} → ${rel(u, '=', '0')}; ${rel(x, '=', PI2)} → ${rel(u, '=', '1')}:<br>${INT('0', 'π/2')}${SINX} ${COSX}${DX} = ${INT('0', '1')}${u}${DU} = ${EV(fr(sq(u), '2'), '0', '1')} = ${HALF}`,
          `<b>Speed lesson:</b> once limits are converted, the answer pops out in ${u}: no need to return to ${x} and re-evaluate.`,
        ],
        ans: HALF,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Evaluate ${INT('1', 'e')}${fr(`ln${NB}${x}`, x)}${DX}.`,
        steps: [
          `Let ${u} = ln${NB}${x}, d${u} = ${fr('1', x)}${DX}. <b>Convert limits:</b> ${rel(x, '=', '1')} → ${u} = ln${NB}1 = 0; ${rel(x, '=', 'e')} → ${u} = ln${NB}e = 1:<br>${INT('1', 'e')}${fr(`ln${NB}${x}`, x)}${DX} = ${INT('0', '1')}${u}${DU} = ${EV(fr(sq(u), '2'), '0', '1')} =`,
        ],
        ans: HALF,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: substitution + property',
        q: `Evaluate ${II} = ${INT('0', 'π/2')}${fr(RT_SIN, `${RT_SIN} + ${RT_COS}`)}${DX}.`,
        steps: [
          `Here substitution-by-limits and a property combine. Apply the king property (Topic 09), ${x} → ${PI2} − ${x}, which swaps sin ↔ cos but keeps the limits 0 and ${PI2}:<br>${II} = ${INT('0', 'π/2')}${fr(RT_COS, `${RT_COS} + ${RT_SIN}`)}${DX}`,
          `Add the two expressions for ${II} (same denominator):<br>2${II} = ${INT('0', 'π/2')}${fr(`${RT_SIN} + ${RT_COS}`, `${RT_SIN} + ${RT_COS}`)}${DX}<br>= ${INT('0', 'π/2')}1${DX} = ${PI2} ⇒ ${rel(II, '=', PI4)}`,
          '<b>Deep idea:</b> the king substitution is a limit-preserving change of variable: the cleanest illustration of how substitution underlies the definite-integral properties.',
        ],
        ans: PI4,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `<b>[CBSE]</b> Evaluate ${INT('0', '1')}2${x}${NB}(${X2} + 1)<sup>3</sup>${DX}.`, a: fr('15', '4') },
          { q: `<b>[CUET]</b> Evaluate ${INT('0', '1')}${fr(`e<sup>${x}</sup>`, `1 + e<sup>${x}</sup>`)}${DX}.`, a: `ln${NB}${fr('1 + e', '2')}` },
          { q: `<b>[JEE Main]</b> Evaluate ${INT('0', 'π/2')}${COSX}${NB}e<sup>sin${NB}${x}</sup>${DX}.`, a: 'e − 1' },
          { q: `<b>[JEE Main]</b> Evaluate ${INT('1', '2')}${fr('1', `${x}(1 + ln${NB}${x})`)}${DX}.`, a: `ln(1 + ln${NB}2)` },
          {
            q: `<b>[JEE Advanced]</b> Evaluate ${INT('0', 'π/2')}${fr(tr('sin', x, '2'), `${SINX} + ${COSX}`)}${DX} … (use king to relate to its cosine partner; final hint: 2${II}${NB}=${NB}${INT('0', 'π/2')}${fr('1', `${SINX} + ${COSX}`)}${DX}).`,
            a: `${fr('1', '√2')}${NB}ln(√2 + 1)`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `When substituting ${u} = ${X2} + 1 in ${INT('0', '2')}${x}(${X2} + 1)${DX}, the new limits are:`,
        opts: [
          { label: '0 to 2', nudge: `<b>(a)</b> keeps the old ${x}-limits: the classic error.` },
          { label: '1 to 5', nudge: null },
          { label: '0 to 5', nudge: `<b>(c)</b> forgets the +1 at the lower limit: ${rel(x, '=', '0')} gives ${u} = 0<sup>2</sup> + 1 = 1, not 0.` },
          { label: '1 to 4', nudge: `<b>(d)</b> forgets the +1 at the upper limit: ${rel(x, '=', '2')} gives ${u} = 2<sup>2</sup> + 1 = 5, not 4.` },
        ],
        correct: 1,
        solution: `${rel(x, '=', '0')} → ${u} = 0<sup>2</sup> + 1 = 1; ${rel(x, '=', '2')} → ${u} = 2<sup>2</sup> + 1 = 5.`,
      },
      {
        t: 'mcq',
        q: `${INT('0', '1')}${fr(`2${x}`, `1 + ${X2}`)}${DX} equals:`,
        opts: [
          { label: `ln${NB}2`, nudge: null },
          { label: `${HALF}${NB}ln${NB}2`, nudge: `<b>(b)</b> inserts a spurious ${HALF} (the numerator is the full derivative, so no halving).` },
          { label: `ln${NB}${HALF}`, nudge: '<b>(c)</b> flips the log argument.' },
          { label: '1', nudge: `<b>(d)</b> is the integrand’s value at ${rel(x, '=', '1')} (${fr('2', '2')} = 1), not the integral.` },
        ],
        correct: 0,
        solution: `${u} = 1 + ${X2}, limits 1 → 2: ${INT('1', '2')}${fr(`d${u}`, u)} = ln${NB}2.`,
      },
      {
        t: 'mcq',
        q: `${INT('0', 'π/2')}${COSX}${NB}e<sup>sin${NB}${x}</sup>${DX} equals:`,
        opts: [
          { label: 'e', nudge: '<b>(a)</b> forgets to subtract the lower-limit value.' },
          { label: 'e − 1', nudge: null },
          { label: '1', nudge: `<b>(c)</b> keeps only the lower-limit value e<sup>0</sup> = 1 (or integrates ${COSX} alone and drops the exponential).` },
          { label: 'e + 1', nudge: '<b>(d)</b> adds the two values instead of subtracting: e + 1 instead of e − 1.' },
        ],
        correct: 1,
        solution: `${rel(u, '=', SINX)}, limits 0 → 1: ${INT('0', '1')}e<sup>${u}</sup>${DU} = ${EV(`e<sup>${u}</sup>`, '0', '1')} = e − 1.`,
      },
      {
        t: 'mcq',
        q: 'Which is a valid way to evaluate a definite integral by substitution?',
        opts: [
          {
            label: `substitute, keep old limits, evaluate in ${u}`,
            nudge: `<b>(a)</b> mixes ${x}-limits with a ${u}-integral: wrong.`,
          },
          { label: `substitute, change limits to ${u}-values, evaluate in ${u}`, nudge: null },
          {
            label: `substitute, change limits, then also back-substitute to ${x}`,
            nudge: '<b>(c)</b> double-handles the conversion (back-substituting and changing limits).',
          },
          { label: 'never change anything', nudge: '<b>(d)</b> is impossible for a real substitution.' },
        ],
        correct: 1,
        solution: `Change the limits to ${ga}, ${gb} and finish in ${u}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Keeping the old ${x}-limits on a ${u}-integral.</b> The single most common error. If you switch to ${u}, the limits must become ${ga} and ${gb}.`,
          '<b>Mixing both methods.</b> Either change limits or back-substitute: doing both (or neither) corrupts the bounds.',
          `<b>Forgetting d${u} scaling on the limits-changed integral.</b> The ${HALF} from ${x}${DX} = ${HALF}${DU} still applies: limits and integrand both transform.`,
          `<b>Non-monotonic substitution.</b> If ${g} isn’t one-to-one on ${AB} (e.g. ${rel(u, '=', X2)} across 0) and the integrand is not already of the form ${of(f, gx)}${NB}${gpx}, you cannot write ${x} in terms of ${u} on the whole interval: split the interval first.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> prefer Method A (change the limits): it’s faster and removes the back-substitution step entirely, eliminating a whole class of sign/limit errors. Write the new ${u}-limits immediately next to the integral sign so you can’t forget them.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Rule</b>', note: `${INT(a, b)}${of(f, gx)}${gpx}${DX} = ${INT(ga, gb)}${fu}${DU}.` },
          {
            f: '<b>Change the limits</b>',
            note: `${rel(x, '=', a)} → ${rel(u, '=', ga)}, ${rel(x, '=', b)} → ${rel(u, '=', gb)}: then finish in ${u}, no back-substitution.`,
          },
          {
            f: '<b>Two methods</b>',
            note: `(A) change limits, evaluate in ${u} [preferred]; (B) keep limits, back-substitute to ${x}, then evaluate. Never mix.`,
          },
          { f: '<b>Watch</b>', note: `non-monotonic ${g} (e.g. ${rel(u, '=', X2)} over a sign change) → split the interval.` },
        ],
        aids: ['<b>“New variable, new limits.”</b>', '<b>“Change the ends or change back, not both.”</b>'],
      },
    ],
  },

  // ──────────────── Topic 09 · book Subtopic 03 · pp. 497–504 ────────────────
  {
    n: '09',
    title: 'Properties of Definite Integrals: The Symmetry Toolkit',
    kalam: 'You are not integrating harder: you are integrating smarter, by noticing structure.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the single most leverage-heavy topic in the entire integration chapter. CBSE Boards ask a property-based proof (king or even/odd) for 2–3 marks almost every year, plus a modulus/additivity evaluation ${ESTIMATE}. In JEE Main and CUET, the difference between a 20-second answer and a hopeless 4-minute grind is recognising which property applies. JEE Advanced builds whole multi-step problems on the king and periodic properties.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Suppose a friend hands you the integral ${INT('0', 'π/2')}${fr(RT_SIN, `${RT_SIN} + ${RT_COS}`)}${DX} and asks for the value. You reach for an anti-derivative… and there isn’t one you could find quickly by hand. The brute-force route is a long, messy detour. Yet the answer is a clean ${PI4}, obtainable in two lines. How?`,
      },
      {
        t: 'p',
        html: 'That is the entire spirit of this topic. <b>The properties of definite integrals let you compute the value of an integral without ever finding the anti-derivative</b>, by exploiting symmetry in the function and the interval. You are not integrating harder: you are integrating smarter, by noticing structure.',
      },
      {
        t: 'p',
        html: `Why does symmetry help? Because a definite integral is an accumulated area, and area does not care which direction you sweep it or where you place your coordinate origin. Flip any region left-to-right about the midpoint of the interval and its area does not change, so the flipped function ${of(f, `${a} + ${b} − ${x}`)} has the same integral as ${fx}: that single observation is the <b>king property</b>. If a function is a perfect mirror image about the ${y}-axis (even) or a perfect upside-down mirror image (odd), the area on [−${a},${NB}${a}] either doubles or cancels: that is the <b>even/odd property</b>.`,
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine measuring the total daily footfall at a railway platform that has a perfectly symmetric morning and evening rush, mirrored about noon. To get the whole-day total, you don’t need to track every hour: you measure half the day and double it. That is exactly what symmetry buys you in an integral: measure the easy half, infer the rest. And if the morning crowd of arrivals were exactly cancelled by an equal evening crowd of departures (an “odd” pattern), the net change over the symmetric day would be zero: no calculation needed at all.',
      },
      {
        t: 'p',
        html: `The most powerful move of all is the king property’s signature trick: write the integral two ways (the original, and the “flipped” version), then <b>add them</b>. The flipped version often has the same denominator or a complementary numerator, so the sum collapses to the integral of 1, which is trivial. You solved for the integral algebraically, like solving 2${II} = (something easy) for ${II}.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions:</b><br>• King (${INT(a, b)}${fx}${DX} = ${INT(a, b)}${of(f, `${a} + ${b} − ${x}`)}${DX}) works for any continuous ${f}, but it only helps when ${of(f, `${a} + ${b} − ${x}`)} relates nicely to ${fx} (e.g. via sin ↔ cos on [0,${NB}${PI2}]).<br>• Even/odd cancellation requires the limits to be <b>symmetric</b>: −${a} to ${a}. On [1,${NB}3] parity tells you nothing.<br>• The periodic property needs the limits to align with whole multiples of the period; a partial period must be handled separately.<br>• These are evaluation shortcuts, not existence guarantees: the integral must already be well-defined (continuous integrand, finite limits).`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: `Throughout, ${f} is continuous on the relevant interval. The first three are structural; the rest are the symmetry toolkit. P0 to P6 are all standard NCERT properties; only the periodic property P7 goes beyond the NCERT book.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Tag', 'Name', 'Statement'],
        rows: [
          ['P0', 'Dummy variable', `${INT(a, b)}${fx}${DX} = ${INT(a, b)}${ft}${DT}`],
          ['P1', 'Reversal', `${INT(a, b)}${fx}${DX} = −${INT(b, a)}${fx}${DX};<br>${INT(a, a)}${fx}${DX} = 0`],
          ['P2', 'Additivity', `${INT(a, b)}${fx}${DX}<br>= ${INT(a, c)}${fx}${DX} + ${INT(c, b)}${fx}${DX}`],
          ['P3', 'King (general)', `${INT(a, b)}${fx}${DX} = ${INT(a, b)}${of(f, `${a} + ${b} − ${x}`)}${DX}`],
          ['P4', 'King (special)', `${INT('0', a)}${fx}${DX} = ${INT('0', a)}${of(f, `${a} − ${x}`)}${DX}`],
          ['P5', `Zero-to-2${a} split`, `${INT('0', `2${a}`)}${fx}${DX}<br>= ${INT('0', a)}${fx}${DX} + ${INT('0', a)}${of(f, `2${a} − ${x}`)}${DX}`],
          [
            'P5*',
            `2${a} corollary`,
            `${INT('0', `2${a}`)}${fx}${DX} = 2${INT('0', a)}${fx}${DX}${NB}${NB}if ${of(f, `2${a} − ${x}`)} = ${fx}<br>${INT('0', `2${a}`)}${fx}${DX} = 0${NB}${NB}if ${of(f, `2${a} − ${x}`)} = −${fx}`,
          ],
          [
            'P6',
            'Even/Odd',
            `${INT(`−${a}`, a)}${fx}${DX} = 2${INT('0', a)}${fx}${DX}${NB}${NB}${f} even<br>${INT(`−${a}`, a)}${fx}${DX} = 0${NB}${NB}${f} odd`,
          ],
          [
            'P7',
            'Periodic',
            `If ${of(f, `${x} + ${T}`)} = ${fx}, then<br>${INT('0', `${n}${T}`)}${fx}${DX} = ${n}${INT('0', T)}${fx}${DX},${NB}${rel(n, '∈', 'ℤ<sup>+</sup>')}`,
          ],
        ],
      },
      {
        t: 'formula',
        kicker: 'King property',
        main: `${INT(a, b)}${fx}${DX} = ${INT(a, b)}${of(f, `${a} + ${b} − ${x}`)}${DX}<br>${INT('0', a)}${fx}${DX} = ${INT('0', a)}${of(f, `${a} − ${x}`)}${DX}`,
        legend: [`${f} = a function continuous on ${AB}`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Zero-to-2<i>a</i> split',
        main: `${INT('0', `2${a}`)}${fx}${DX} = ${INT('0', a)}${fx}${DX} + ${INT('0', a)}${of(f, `2${a} − ${x}`)}${DX}<br>= 2${INT('0', a)}${fx}${DX} if ${of(f, `2${a} − ${x}`)} = ${fx}<br>= 0 if ${of(f, `2${a} − ${x}`)} = −${fx}`,
        legend: [`${f} = a function continuous on [0, 2${a}]`, `${a} = a positive constant (half the interval)`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Even and odd functions',
        main: `${INT(`−${a}`, a)}${fx}${DX} = 2${INT('0', a)}${fx}${DX} if ${f} is even<br>${INT(`−${a}`, a)}${fx}${DX} = 0 if ${f} is odd`,
        legend: [`${of(f, `−${x}`)} = ${fx} for an even ${f}`, `${of(f, `−${x}`)} = −${fx} for an odd ${f}`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Periodic integrand',
        main: `${INT('0', `${n}${T}`)}${fx}${DX} = ${n}${INT('0', T)}${fx}${DX}`,
        legend: [`${T} = the period (${of(f, `${x} + ${T}`)} = ${fx})`, `${n} = a positive integer`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Foundation (recap from Topic 07).</b> The First Fundamental Theorem defines the area function ${Ax} = ${INT(a, x)}${ft}${DT} and states ${A}′(${x}) = ${fx}; the Second gives ${IL(a, b)}${NB}${f} = ${Fb} − ${Fa}. The properties below are what you use after you’ve decided not to brute-force with the Second FTC.`,
      },
      {
        t: 'p',
        html: '<b>Parity arithmetic</b> (you will use this constantly): even × even = even; odd × odd = even; even × odd = odd; any constant is even.',
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      {
        t: 'p',
        html: `<b>Proof of the king property (P3).</b> Substitute ${t} = ${a} + ${b} − ${x}, so d${t} = −d${x}; when ${rel(x, '=', a)}, ${rel(t, '=', b)}, and when ${rel(x, '=', b)}, ${rel(t, '=', a)}:<br>${INT(a, b)}${fx}${DX} = ${INT(b, a)}${of(f, `${a} + ${b} − ${t}`)}${NB}(−d${t})<br>= ${INT(a, b)}${of(f, `${a} + ${b} − ${t}`)}${DT}`,
      },
      {
        t: 'p',
        html: `The −d${t} reversed the limits back to ${a} → ${b} (property P1). Renaming the dummy ${t} → ${x} gives ${INT(a, b)}${fx}${DX} = ${INT(a, b)}${of(f, `${a} + ${b} − ${x}`)}${DX}. ■ Setting ${rel(a, '=', '0')} (and writing ${a} for the upper limit) gives the special case P4.`,
      },
      {
        t: 'p',
        html: `<b>Proof of the zero-to-2${a} split (P5).</b> By additivity (P2), break at the midpoint ${a}:<br>${INT('0', `2${a}`)}${fx}${DX} = ${INT('0', a)}${fx}${DX} + ${INT(a, `2${a}`)}${fx}${DX}`,
      },
      {
        t: 'p',
        html: `In the second piece substitute ${x} = 2${a} − ${t} (d${x} = −d${t}; ${rel(x, '=', a)} ⇒ ${rel(t, '=', a)}, ${x} = 2${a} ⇒ ${rel(t, '=', '0')}):<br>${INT(a, `2${a}`)}${fx}${DX} = ${INT(a, '0')}${of(f, `2${a} − ${t}`)}${NB}(−d${t})<br>= ${INT('0', a)}${of(f, `2${a} − ${t}`)}${DT} = ${INT('0', a)}${of(f, `2${a} − ${x}`)}${DX}`,
      },
      {
        t: 'p',
        html: `Adding gives P5. If ${of(f, `2${a} − ${x}`)} = ${fx} the two pieces are equal ⇒ 2${IL('0', a)}${NB}${f}; if ${of(f, `2${a} − ${x}`)} = −${fx} they cancel ⇒ 0. ■`,
      },
      {
        t: 'p',
        html: `<b>Proof of the periodic property (P7).</b> Split the interval into ${n} blocks of length ${T} using P2, then shift each block back to [0,${NB}${T}] by ${x} = ${t} + ${k}${T} and use periodicity ${of(f, `${t} + ${k}${T}`)} = ${ft}:<br>${INT('0', `${n}${T}`)}${f}${DX} = ${SUM(`${k}=0`, N1)}${NB}${INT(`${k}${T}`, `(${k}+1)${T}`)}${fx}${DX}<br>= ${SUM(`${k}=0`, N1)}${NB}${INT('0', T)}${ft}${DT} = ${n}${INT('0', T)}${fx}${DX}${NB}${NB}■`,
      },
      { t: 'p', html: 'Before writing a single anti-derivative, run this scan:' },
      {
        t: 'proc',
        title: 'Procedure: the decision tree',
        steps: [
          `<b>Symmetric limits [−${a},${NB}${a}]?</b> Split the integrand into even and odd parts; delete every odd term (P6). Often two-thirds of the problem disappears.`,
          '<b>A modulus, greatest-integer, or piecewise integrand?</b> Find the points where the inside changes sign and split there with additivity (P2); on each piece the function is a clean formula.',
          `<b>Limits 0 → ${a} or ${a} → ${b} with</b> sin / cos <b>or an</b> ${fr(f, `${f} + ${g}`)} <b>structure?</b> Apply king (P3/P4), add original + flipped, solve 2${II} = (easy).`,
          `<b>Integrand contains a lone factor of ${x} times a function of</b> ${SINX} <b>on [0,${NB}π]?</b> King turns ${x} into π − ${x}, peeling the ${x} off (see the third worked example).`,
          '<b>Periodic integrand over a whole-number of periods?</b> Collapse with P7.',
          '<b>None of the above?</b> Fall back to the Second FTC.',
        ],
      },
      {
        t: 'p',
        html: 'The logic uniting all of these: change the variable so the interval maps to itself, then exploit how the integrand transformed.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level: additivity with a modulus',
        q: `Evaluate ${INT('0', '4')}${abs(`${x} − 2`)}${DX}.`,
        steps: [
          `The integrand changes formula where ${x} − 2 changes sign, i.e. at ${rel(x, '=', '2')}. Split with P2:<br>${INT('0', '4')}${abs(`${x} − 2`)}${DX}<br>= ${INT('0', '2')}(2 − ${x})${DX} + ${INT('2', '4')}(${x} − 2)${DX}<br>because ${abs(`${x} − 2`)} = 2 − ${x} for ${rel(x, '<', '2')} and ${x} − 2 for ${rel(x, '>', '2')}.`,
          `Evaluate each:<br>${INT('0', '2')}(2 − ${x})${DX} = ${EV(`2${x} − ${fr(X2, '2')}`, '0', '2')} = (4 − 2) = 2<br><br>${INT('2', '4')}(${x} − 2)${DX} = ${EV(`${fr(X2, '2')} − 2${x}`, '2', '4')}<br>= (8 − 8) − (2 − 4) = 0 − (−2) = 2`,
          '(Geometrically, two right triangles of area 2 each: a clean sanity check.)',
        ],
        ans: '2 + 2 = 4',
      },
      {
        t: 'ex',
        tag: 'JEE Main Speed Trap: parity',
        q: `Evaluate ${INT('−π/2', 'π/2')}(${X2}${NB}${SINX} + ${x}${NB}${COSX} + 4)${DX} mentally.`,
        steps: [
          `Symmetric limits ⇒ parity-check each term:<br>• ${X2}${NB}${SINX}: even × odd = <b>odd</b> ⇒ 0.<br>• ${x}${NB}${COSX}: odd × even = <b>odd</b> ⇒ 0.<br>• 4: even (constant) ⇒ survives.`,
          `Only the constant remains (P6):<br>${INT('−π/2', 'π/2')}4${DX} = 4${EV(x, '−π/2', 'π/2')} = 4 · π = 4π`,
          `<b>Speed lesson:</b> never integrate ${X2}${NB}${SINX} or ${x}${NB}${COSX} by parts here: symmetry deletes them before you start.`,
        ],
        ans: '4π',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: king property peeling off x',
        q: `Evaluate ${II} = ${INT('0', 'π')}${x}${NB}${SIN3X}${DX}.`,
        steps: [
          `Apply king (P4 with ${rel(a, '=', 'π')}): replace ${x} → π − ${x}. Since sin(π − ${x}) = ${SINX}, the sin<sup>3</sup> is untouched, but the lone ${x} becomes π − ${x}:<br>${II} = ${INT('0', 'π')}(π − ${x})${NB}${SIN3X}${DX}<br>= π${INT('0', 'π')}${SIN3X}${DX} − ${INT('0', 'π')}${x}${NB}${SIN3X}${DX}<br>= π${INT('0', 'π')}${SIN3X}${DX} − ${II}`,
          `So 2${II} = π${INT('0', 'π')}${SIN3X}${DX}. Now ${SIN3X} is symmetric about ${rel(x, '=', PI2)}, so<br>${INT('0', 'π')}${SIN3X}${DX} = 2${INT('0', 'π/2')}${SIN3X}${DX} = 2 · ${fr('2', '3')} = ${fr('4', '3')} (Wallis’ formula, Topic 03).<br>Therefore<br>2${II} = π · ${fr('4', '3')} ⇒ ${II} = ${fr('2π', '3')}`,
          `<b>Why it works:</b> king’s job here is to separate the awkward ${x} from the ${SIN3X}: the ${x} folds into a constant π, and the integral solves itself algebraically.`,
        ],
        ans: fr('2π', '3'),
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: periodic property',
        q: `Evaluate ${INT('0', '10π')}${ABS_SIN}${DX}.`,
        steps: [
          `The key insight is the period of the integrand. While ${SINX} has period 2π, the modulus ${ABS_SIN} folds the negative hump up, giving period π. Confirm: ${abs(`sin(${x} + π)`)} = ${abs(`−${SINX}`)} = ${ABS_SIN}. So over [0,${NB}10π] there are exactly 10 full periods. By P7,<br>${INT('0', '10π')}${ABS_SIN}${DX} = 10${INT('0', 'π')}${ABS_SIN}${DX}`,
          `On [0,${NB}π], ${rel(SINX, '≥', '0')}, so ${ABS_SIN} = ${SINX} and ${INT('0', 'π')}${SINX}${DX} = ${EV(`−${COSX}`, '0', 'π')} = 1 + 1 = 2. Therefore<br>${INT('0', '10π')}${ABS_SIN}${DX} = 10 · 2 = 20`,
          `<b>Trap avoided:</b> using period 2π (giving 5 blocks of ${INT('0', '2π')}${ABS_SIN} = 4) also gives 20, but students who use period 2π and then forget that the modulus turns the second hump positive get −2 for that hump, 0 for each block, and a wrong answer of 0. Identify the modulus period π and you cannot slip.`,
        ],
        ans: '20',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `<b>[CBSE]</b> Evaluate ${INT('−2', '2')}${abs(x)}${DX}.`, a: '4' },
          { q: `<b>[CUET]</b> Evaluate ${INT('0', 'π/2')}${fr(SINX, `${SINX} + ${COSX}`)}${DX}. (Hint: king.)`, a: PI4 },
          { q: `<b>[JEE Main]</b> Evaluate ${INT('0', '6')}${abs(`${x} − 3`)}${DX}.`, a: '9' },
          { q: `<b>[JEE Main]</b> Evaluate ${INT('−π', 'π')}${X3}${NB}${tr('cos', x, '5')}${DX}. (Hint: parity.)`, a: '0' },
          { q: `<b>[JEE Advanced]</b> Evaluate ${INT('0', '8π')}${ABS_COS}${DX}.`, a: '16' },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `${INT('−4', '4')}${fr(X3, `${x}<sup>4</sup> + 1`)}${DX} equals:`,
        opts: [
          { label: '0', nudge: null },
          {
            label: `ln${NB}257`,
            nudge: `<b>(b)</b> evaluates ln(${x}<sup>4</sup> + 1) from 0 to 4: it drops the ${fr('1', '4')} and the half of the interval below 0. From −4 to 4 the log anti-derivative gives 0 too.`,
          },
          {
            label: `${fr('1', '4')}${NB}ln${NB}257`,
            nudge: `<b>(c)</b> has the right anti-derivative, ${fr('1', '4')}${NB}ln(${x}<sup>4</sup> + 1), but evaluates it from 0 to 4 instead of −4 to 4; over the full interval it gives ${fr('1', '4')}${NB}ln${NB}257 − ${fr('1', '4')}${NB}ln${NB}257 = 0.`,
          },
          { label: '8', nudge: '<b>(d)</b> guesses from the interval width 8: irrelevant once parity kills the integral.' },
        ],
        correct: 0,
        solution: `The integrand is odd: ${of(f, `−${x}`)} = ${fr(`−${X3}`, `${x}<sup>4</sup> + 1`)} = −${fx}, and the limits are symmetric, so P6 gives 0 instantly.`,
      },
      {
        t: 'mcq',
        q: `${INT('0', 'π/2')}${fr(COSX, `${SINX} + ${COSX}`)}${DX} equals:`,
        opts: [
          { label: PI2, nudge: `<b>(a)</b> forgets to halve after adding (2${II} reported as ${II}).` },
          { label: PI4, nudge: null },
          { label: '1', nudge: `<b>(c)</b> confuses the answer with ${INT('0', 'π/2')}${COSX}${DX} = 1, ignoring the denominator.` },
          { label: fr('π', '3'), nudge: `<b>(d)</b> a blind guess; king fixes the value to ${PI4} regardless of the trig function used.` },
        ],
        correct: 1,
        solution: `King (${x} → ${PI2} − ${x}) swaps cos ↔ sin, giving the companion integral with ${SINX} on top; adding the two yields 2${II} = ${INT('0', 'π/2')}1${DX} = ${PI2}, so ${rel(II, '=', PI4)}.`,
      },
      {
        t: 'mcq',
        q: `${INT('0', '2')}${abs(`${x} − 1`)}${DX} equals:`,
        opts: [
          {
            label: '0',
            nudge: `<b>(a)</b> lets the two halves cancel as if ${abs(`${x} − 1`)} were odd about ${rel(x, '=', '1')}; it is even about ${rel(x, '=', '1')} (a V shape) and ${rel(abs(`${x} − 1`), '≥', '0')} everywhere, so the area is positive.`,
          },
          { label: '1', nudge: null },
          {
            label: '2',
            nudge: `<b>(c)</b> forgets the ${HALF} in the triangle areas: each triangle has base 1 and height 1, so area ${HALF}, not 1.`,
          },
          { label: HALF, nudge: '<b>(d)</b> computes only one of the two triangles.' },
        ],
        correct: 1,
        solution: `Split at ${rel(x, '=', '1')} (P2): ${INT('0', '1')}(1 − ${x})${DX} + ${INT('1', '2')}(${x} − 1)${DX} = ${HALF} + ${HALF} = 1.`,
      },
      {
        t: 'mcq',
        q: `${INT('0', '2π')}${ABS_SIN}${DX} equals:`,
        opts: [
          {
            label: '0',
            nudge: `<b>(a)</b> is ${INT('0', '2π')}${SINX}${DX}: the student dropped the modulus, letting the second hump cancel the first.`,
          },
          { label: '2', nudge: '<b>(b)</b> computes only one period.' },
          { label: '4', nudge: null },
          { label: '2π', nudge: '<b>(d)</b> confuses area with interval length.' },
        ],
        correct: 2,
        solution: `${ABS_SIN} has period π, and ${INT('0', 'π')}${ABS_SIN}${DX} = 2, so over two periods ${IL('0', '2π')} = 2 × 2 = 4.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Applying parity on non-symmetric limits.</b> Even/odd cancellation needs limits −${a} to ${a}. On [0,${NB}2] or [1,${NB}3], parity tells you nothing: a common reflex error.`,
          `<b>Misapplying king.</b> King replaces ${x} by (sum of limits) − ${x}, i.e. ${a} + ${b} − ${x}, not simply ${b} − ${x} (upper limit minus ${x}), which is right only when the lower limit ${a} is 0. Using the wrong replacement silently wrecks the cancellation.`,
          `<b>Forgetting to split a modulus / greatest-integer at its breakpoints.</b> ∫${abs(gx)} must be broken where ${g} changes sign; integrating ${abs(g)} as one formula is wrong.`,
          `<b>Using the wrong period for ${ABS_SIN} or ${ABS_COS}.</b> The modulus halves the period to π. Pairing period 2π with a dropped modulus is the classic double-error that returns 0.`,
          `<b>Reporting 2${II} as ${II} in the king “add” trick.</b> After 2${II} = (easy), divide by two. Skipping this doubles every king answer.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (the recognition reflex):</b> train yourself to read the limits first, integrand second. Symmetric ⇒ parity. 0 → ${a} with trig ⇒ king. Modulus/greatest-integer ⇒ split. Whole periods ⇒ collapse. Ninety percent of “hard” property problems are actually pattern-recognition ${ESTIMATE}; the algebra is the easy part once you’ve named the pattern.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>King</b>',
            note: `${INT(a, b)}${fx}${DX} = ${INT(a, b)}${of(f, `${a} + ${b} − ${x}`)}${DX}. Add original + flipped, solve 2${II} = (easy).`,
          },
          {
            f: `<b>Even/Odd on [−${a},${NB}${a}]</b>`,
            note: `even → 2${IL('0', a)}${NB}${f}; odd → 0. (Limits must be symmetric.)`,
          },
          {
            f: `<b>Zero-to-2${a}</b>`,
            note: `${IL('0', `2${a}`)}${NB}${f} = ${IL('0', a)}${NB}${f} + ${IL('0', a)}${NB}${of(f, `2${a} − ${x}`)}; equals 2${IL('0', a)}${NB}${f} or 0 by symmetry.`,
          },
          {
            f: `<b>Periodic (${of(f, `${x} + ${T}`)} = ${fx})</b>`,
            note: `${IL('0', `${n}${T}`)}${NB}${f} = ${n}${IL('0', T)}${NB}${f}. For ${ABS_SIN}, ${ABS_COS} use ${rel(T, '=', 'π')}.`,
          },
          { f: '<b>Modulus/piecewise</b>', note: 'split at sign-change points via additivity, then integrate each clean piece.' },
          { f: '<b>Always</b>', note: 'read limits before the integrand; the limits tell you which property to reach for.' },
        ],
        aids: [
          `<b>“King swaps the ends”:</b> replace ${x} by (sum of limits) − ${x}, then add.`,
          `<b>“Odd dies on a mirror”:</b> odd function on [−${a},${NB}${a}] → 0.`,
          `<b>“Modulus halves the period”:</b> ${abs('sin')}, ${abs('cos')} repeat every π.`,
          `<b>“Solve for ${II}, then halve”:</b> finish the king trick by dividing 2${II} by two.`,
        ],
      },
    ],
  },
];
