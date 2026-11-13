import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 12, Topics 01–02, pp. 1062–1076 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's Subtopics 01
 * Limits: Concepts & Algebra (pp. 1062–1068) and 02 Standard Limits
 * (pp. 1069–1076). Each topic opens with its "Exam Relevance:" box as a part of
 * its own, then is split at its Sections 1 to 8; the "Cheat Sheet Box" is the
 * part "Cheat sheet". Figures 12.1 (caption p. 1062, drawn p. 1063), 12.2
 * (caption p. 1069, drawn p. 1070) and 12.3 (caption p. 1072, drawn p. 1073),
 * each placed where its caption is printed; no unnumbered drawings.
 * Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const lim = (s: string) => `lim<sub>${s}</sub>`;
/** A no-break space: keeps a short expression on one line. */
const NB = ' ';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const x = '<i>x</i>';
const a = '<i>a</i>';
const b = '<i>b</i>';
const h = '<i>h</i>';
const k = '<i>k</i>';
const m = '<i>m</i>';
const n = '<i>n</i>';
const y = '<i>y</i>';
const e = '<i>e</i>';
const c = '<i>c</i>';
const L = '<i>L</i>';
const M = '<i>M</i>';
const f = (s: string) => `<i>f</i>(${s})`;
const fx = f(x);
const gx = `<i>g</i>(${x})`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const X2 = sq(x);
const X3 = `${x}<sup>3</sup>`;
const XN = `${x}<sup><i>n</i></sup>`;
const XM = `${x}<sup><i>m</i></sup>`;
const AN = `${a}<sup><i>n</i></sup>`;
const NAN1 = `${n}${NB}${a}<sup><i>n</i>−1</sup>`;
const EXX = `${e}<sup><i>x</i></sup>`;
const AXX = `${a}<sup><i>x</i></sup>`;

const LXA = lim(`${x}→${a}`);
const LXAM = lim(`${x}→${a}<sup>−</sup>`);
const LXAP = lim(`${x}→${a}<sup>+</sup>`);
const LH0 = lim(`${h}→0`);
const LX0 = lim(`${x}→0`);
const LX0P = lim(`${x}→0<sup>+</sup>`);
const LX1 = lim(`${x}→1`);
const LX2 = lim(`${x}→2`);
const LX3 = lim(`${x}→3`);
const LX4 = lim(`${x}→4`);
const LXI = lim(`${x}→∞`);
const LNI = lim(`${n}→∞`);

const ZZ = fr('0', '0');
const II = fr('∞', '∞');
const HALF = fr('1', '2');
const MN = fr(m, n);
const STAR = fr(`${XN} − ${AN}`, `${x} − ${a}`);
const SHORTCUT = fr(`${XM} − 1`, `${XN} − 1`);
const SINX = fr(`sin ${x}`, x);
const TANX = fr(`tan ${x}`, x);
const ASINX = fr(`sin<sup>−1</sup>${NB}${x}`, x);
const ATANX = fr(`tan<sup>−1</sup>${NB}${x}`, x);
const COS1 = fr(`1 − cos ${x}`, X2);
const COS1X = fr(`1 − cos ${x}`, x);
const COSK = fr(`1 − cos(<i>kx</i>)`, X2);
const K22 = fr(sq(k), '2');
const EX1 = fr(`${EXX} − 1`, x);
const AX1 = fr(`${AXX} − 1`, x);
const LN1X = fr(`ln(1 + ${x})`, x);
const BOX = fr('sin(box)', 'box');
const ONEINF = '1<sup>∞</sup>';
const ELIM = `${e}<sup>lim <i>g</i>(<i>f</i>−1)</sup>`;
const FG = '<i>f</i><sup><i>g</i></sup>';
const PI180 = fr('π', '180');

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · pp. 1062–1068 ────────────────
  {
    n: '01',
    title: 'Limits: Concepts & Algebra',
    kalam: 'This is the gateway to all of calculus, so its weight is felt everywhere.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the gateway to all of calculus, so its weight is felt everywhere. <b>CBSE Boards</b> ask a direct 2–3 mark evaluation (a ${ZZ} factor/rationalisation problem) almost every year ${ESTIMATE}. <b>JEE Main</b> carries 1–2 questions that are usually clean algebra-of-limits or “find ${a},${NB}${b}” type ${ESTIMATE}. In <b>JEE Advanced</b> it is rarely a standalone question but is silently assumed in continuity, differentiability and integration; get it shaky here and the whole calculus tower wobbles.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Imagine you are on the highway from Jaipur to Delhi, watching the milestones tick down: 200 km to Delhi, then 100, then 10, then 1, then 100 m. Even before your car physically reaches the Delhi border, you know with total certainty where you are heading: the milestones are pointing at a destination. That destination is the <b>limit</b>. It is the value a function is heading toward as the input gets closer and closer to some point, completely separate from whether you ever actually arrive.',
      },
      {
        t: 'p',
        html: `This is the single most important idea in the whole chapter, so let me say it plainly: <b>the limit of ${fx} as ${x} → ${a} is about the neighbourhood of ${a}, not about the point ${a} itself.</b> The function might not even be defined at ${x} = ${a} (there could be a pothole, a missing point, a divide-by-zero) and the limit can still exist perfectly well, because the milestones around it still point somewhere definite.`,
      },
      {
        t: 'p',
        html: `To make this concrete, take ${fx} = ${fr(`${X2} − 1`, `${x} − 1`)}. At ${x} = 1 this is the forbidden ${ZZ}: the function is genuinely undefined there. But watch what happens as we walk ${x} toward 1 from both sides and tabulate the milestone readings:`,
      },
      {
        t: 'table',
        title: null,
        head: ['x (from below)', 'f(x)', 'x (from above)', 'f(x)'],
        rows: [
          ['0.9', '1.9', '1.1', '2.1'],
          ['0.99', '1.99', '1.01', '2.01'],
          ['0.999', '1.999', '1.001', '2.001'],
        ],
      },
      {
        t: 'p',
        html: `Both columns are clearly homing in on 2, even though ${f('1')} does not exist. The milestones agree, so ${LX1} ${fx} = 2.<br>(And indeed ${fr(`${X2} − 1`, `${x} − 1`)} = ${fr(`(${x} − 1)(${x} + 1)`, `${x} − 1`)} = ${x} + 1 for ${x}${NB}≠${NB}1, which → 2: the table and the algebra tell the same story.)`,
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture a narrow lane in Chandni Chowk with a single shop you want to reach. Two friends walk toward that shop: one coming from the left end of the lane, the other from the right end. If both friends end up standing at the same shop, then “the place you approach” is unambiguous: the limit <b>exists</b>. But suppose the lane secretly forks just before the shop, and the left-walker lands at a sweet shop while the right-walker lands at a chai stall. Now there is no single “place you were heading”: the <b>limit does not exist</b>, even though each friend individually reached somewhere.',
      },
      {
        t: 'p',
        html: `Those two friends are exactly the <b>left-hand limit (LHL)</b> and the <b>right-hand limit (RHL)</b>:<br>• The LHL, written ${LXAM} ${fx}, is where ${fx} heads as ${x} creeps up to ${a} from values smaller than ${a}.<br>• The RHL, written ${LXAP} ${fx}, is where ${fx} heads as ${x} comes down to ${a} from values larger than ${a}.`,
      },
      { t: 'p', html: 'The limit exists <b>only when both friends meet</b>: when LHL and RHL are equal and finite.' },
      { t: 'fig', id: 'm11-12-fig-12.1' },
      {
        t: 'p',
        html: `<b>Limiting Conditions & Assumptions (when the idea breaks down):</b><br>1. <b>The value ${f(a)} is irrelevant.</b> ${f(a)} may be undefined, or defined but different from the limit. The limit ignores it.<br>2. <b>Both one-sided limits must agree</b> and be finite. If LHL ≠ RHL → no limit (a “jump”). If either runs off to ±∞ → no finite limit.<br>3. <b>Oscillation kills limits.</b> A function like sin(${fr('1', x)}) near ${x} = 0 keeps swinging between −1 and 1 forever, never settling, so no limit, even though it never blows up.<br>4. <b>“Approaching” is two-sided by default.</b> Plain ${LXA} demands agreement from both sides; one friend reaching the shop is not enough.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: '<b>Note:</b> quantities here carry no dimensional formula: a limit is a pure number. This section instead locks the <b>algebra-of-limits rules</b>, the <b>existence test</b>, and the <b>standard algebraic limit</b> you will reuse constantly.',
      },
      {
        t: 'formula',
        kicker: 'Existence test (the meeting rule)',
        main: `${LXAM} ${fx} = ${LH0} ${f(`${a} − ${h}`)}<br>${LXAP} ${fx} = ${LH0} ${f(`${a} + ${h}`)}<br>${LXA} ${fx} = ${L} ⟺ ${LXAM}${NB}${fx} = ${LXAP}${NB}${fx} = ${L} (finite)`,
        legend: [`${a} = the point approached`, `${h} = a small positive increment (${h} → 0)`, `${L} = the limit value (finite)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Algebra of Limits.</b> If ${LXA} ${fx} = ${L} and ${LXA} ${gx} = ${M} (both finite), then:`,
      },
      {
        t: 'defgrid',
        title: 'Rule and statement',
        rows: [
          { k: 'Sum / Difference', v: `lim (<i>f</i> ± <i>g</i>) = ${L} ± ${M}` },
          { k: 'Scalar multiple', v: `lim (${k}${NB}<i>f</i>) = <i>kL</i>` },
          { k: 'Product', v: `lim (<i>f</i> · <i>g</i>) = ${L} · ${M}` },
          { k: 'Quotient', v: `lim ${fr('<i>f</i>', '<i>g</i>')} = ${fr(L, M)}, <b>provided</b> ${M}${NB}≠${NB}0` },
          { k: 'Power', v: `lim (<i>f</i>)<sup><i>n</i></sup> = ${L}<sup><i>n</i></sup> (${n} a positive integer)` },
        ],
      },
      {
        t: 'formula',
        kicker: 'Limit of a polynomial or rational function',
        main: `If <i>p</i>(${x}) is a polynomial:<br>${LXA} <i>p</i>(${x}) = <i>p</i>(${a})<br>For a rational function ${fr(`<i>p</i>(${x})`, `<i>q</i>(${x})`)}:<br>${LXA} ${fr(`<i>p</i>(${x})`, `<i>q</i>(${x})`)} = ${fr(`<i>p</i>(${a})`, `<i>q</i>(${a})`)} (<i>q</i>(${a})${NB}≠${NB}0)`,
        legend: [`<i>p</i>(${x}), <i>q</i>(${x}) = polynomials`, `${x} = the approaching variable`, `${a} = the point approached`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Standard algebraic limit',
        main: `${LXA} ${STAR} = ${NAN1}<br>(${n} ∈ ℚ, ${a}${NB}>${NB}0 when ${n} non-integer)`,
        legend: [`${x} = the approaching variable`, `${a} = the point approached`, `${n} = the power (${n} ∈ ℚ)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Indeterminate forms.</b> When direct substitution gives one of ${ZZ}, ${II}, ∞ − ∞, 0 × ∞, ${ONEINF}, 0<sup>0</sup>, ∞<sup>0</sup>, the answer is <b>not</b> decided: it must be resolved by algebra. In this topic the form you will meet again and again is ${ZZ}.`,
      },
      {
        t: 'p',
        html: `<b>Variable glossary:</b> ${x} = the approaching variable; ${a} = the point approached; ${h} = small positive increment (${h} → 0); ${L}, ${M} = (finite) limit values; [${NB}·${NB}] = greatest integer function (reserved); {${NB}·${NB}} = fractional part (reserved).`,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: `<b>Why the algebra-of-limits rules are even allowed.</b> A limit is a destination. If <i>f</i> heads to ${L} and <i>g</i> heads to ${M}, then their sum is heading to ${L} + ${M}: the destinations simply add, because near ${a} the two functions are arbitrarily close to their targets, so their sum is arbitrarily close to ${L} + ${M}. The quotient rule carries its one big caveat for an obvious reason: if <i>g</i> is heading to 0, dividing by something vanishingly small makes the ratio explode or behave wildly, so ${M}${NB}≠${NB}0 is non-negotiable.`,
      },
      {
        t: 'p',
        html: `<b>Derivation of the standard limit ${LXA} ${STAR} = ${NAN1} (for positive integer ${n}).</b>`,
      },
      {
        t: 'p',
        html: `<b>Reasoning:</b> direct substitution gives ${ZZ}, so we must cancel the troublemaker (${x} − ${a}). The numerator factors cleanly because ${x} = ${a} is a root of ${XN} − ${AN}.<br>${XN} − ${AN}<br>= (${x} − ${a})(${x}<sup><i>n</i>−1</sup> + ${x}<sup><i>n</i>−2</sup>${a} + ${x}<sup><i>n</i>−3</sup>${a}<sup>2</sup> + ⋯ + ${a}<sup><i>n</i>−1</sup>)`,
      },
      {
        t: 'p',
        html: `Cancel the common (${x} − ${a}) (legal, since for the limit ${x}${NB}≠${NB}${a}, only ${x} → ${a}):<br>${STAR} = ${x}<sup><i>n</i>−1</sup> + ${x}<sup><i>n</i>−2</sup>${a} + ⋯ + ${a}<sup><i>n</i>−1</sup>`,
      },
      {
        t: 'p',
        html: `Now substitute ${x} = ${a}. There are exactly ${n} terms, each equalling ${a}<sup><i>n</i>−1</sup>:<br>${LXA} ${STAR}<br>= ${a}<sup><i>n</i>−1</sup> + ${a}<sup><i>n</i>−1</sup> + ⋯ + ${a}<sup><i>n</i>−1</sup> (${n} terms)<br>= ${NAN1}.`,
      },
      {
        t: 'p',
        html: `The result extends to all rational ${n}, with ${a}${NB}>${NB}0 when ${n} is not an integer (the algebraic proof for fractional ${n} uses substitution ${x} = ${a}${NB}<i>t</i><sup><i>k</i></sup>, but the formula is what you apply).`,
      },
      {
        t: 'proc',
        title: 'Procedure A: resolving a zero-by-zero rational limit by factoring',
        steps: [
          `<b>Substitute</b> ${x} = ${a}. If you get a clean number, you are done.`,
          `If you get ${ZZ}, that ${ZZ} is a promise that (${x} − ${a}) divides both numerator and denominator.`,
          `<b>Factor</b> out (${x} − ${a}) from top and bottom.`,
          `<b>Cancel</b> the common (${x} − ${a}).`,
          `<b>Re-substitute</b> ${x} = ${a} into the simplified expression.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: resolving a surd limit by rationalisation',
        steps: [
          `On substitution you hit ${ZZ} with a square-root term.`,
          '<b>Multiply and divide</b> by the conjugate of the surd expression.',
          `Use (√<i>p</i> − √<i>q</i>)(√<i>p</i> + √<i>q</i>) = <i>p</i> − <i>q</i> to clear the root and expose a cancellable (${x} − ${a}).`,
          'Cancel, then substitute.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Evaluate<br>${LX3} ${fr(`${X2} − 2${x} − 3`, `${x} − 3`)}.`,
        steps: [
          `<b>Step 1: Substitute.</b> At ${x} = 3: numerator = 9 − 6 − 3 = 0, denominator = 0. Form is ${ZZ} → resolve.`,
          `<b>Step 2: Factor the numerator.</b> ${X2} − 2${x} − 3 = (${x} − 3)(${x} + 1).`,
          `<b>Step 3: Cancel and substitute.</b><br>${LX3} ${fr(`(${x} − 3)(${x} + 1)`, `(${x} − 3)`)} = ${LX3} (${x} + 1)<br>= 3 + 1 = 4.`,
          `<b>Presentation note:</b> always declare the ${ZZ} form before factoring: boards award method marks for spotting it.`,
        ],
        ans: '4',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: `Evaluate ${LX1} ${fr(`${x}<sup>18</sup> − 1`, `${x}<sup>12</sup> − 1`)}.`,
        steps: [
          `<b>The trap:</b> a panicking student tries to factor a degree-18 polynomial. Don’t. Both top and bottom are of the form ${XN} − 1<sup><i>n</i></sup>, so use the standard limit as a ratio. Divide top and bottom by (${x} − 1):<br>${LX1} ${fr(`${x}<sup>18</sup> − 1`, `${x}<sup>12</sup> − 1`)}<br>= (${LX1} ${fr(`${x}<sup>18</sup> − 1`, `${x} − 1`)}) ÷ (${LX1} ${fr(`${x}<sup>12</sup> − 1`, `${x} − 1`)})<br>= ${fr('18 · 1<sup>17</sup>', '12 · 1<sup>11</sup>')} = ${fr('18', '12')} = ${fr('3', '2')}.`,
          `<b>10-second mental shortcut:</b> for ${SHORTCUT} as ${x} → 1, the answer is simply ${MN}.`,
        ],
        ans: fr('3', '2'),
      },
      {
        t: 'ex',
        tag: 'JEE Main: Multi-Concept',
        q: `Evaluate ${LX1} ${fr(`${x}<sup>1/3</sup> − 1`, `${x}<sup>1/2</sup> − 1`)}. (Combines: standard ${STAR} limit with rational exponents + ratio technique.)`,
        steps: [
          `Both pieces vanish at ${x} = 1 (${ZZ}). Split by inserting (${x} − 1):<br>${fr(`${x}<sup>1/3</sup> − 1`, `${x}<sup>1/2</sup> − 1`)}<br>= ${fr(`${x}<sup>1/3</sup> − 1<sup>1/3</sup>`, `${x} − 1`)}<br>÷ ${fr(`${x}<sup>1/2</sup> − 1<sup>1/2</sup>`, `${x} − 1`)}.`,
          `Apply ${LX1} ${fr(`${XN} − 1`, `${x} − 1`)} = ${n} · 1<sup><i>n</i>−1</sup> = ${n} to each with ${n} = ${fr('1', '3')} and ${n} = ${fr('1', '2')}:<br>= ${fr('1', '3')} ÷ ${fr('1', '2')} = ${fr('1', '3')} × ${fr('2', '1')}.`,
        ],
        ans: fr('2', '3'),
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the values of ${a} and ${b} such that<br>${LX2} ${fr(`${X2} + <i>ax</i> + ${b}`, `${X2} − ${x} − 2`)} = ${fr('5', '3')}.`,
        steps: [
          `<b>The deep idea:</b> the denominator ${X2} − ${x} − 2 = (${x} − 2)(${x} + 1) becomes 0 at ${x} = 2. For the overall limit to be a finite number, the numerator <b>must also vanish at</b> ${x} = 2: otherwise we’d have ${fr('(nonzero)', '0')} → ∞. This vanishing condition is the whole game.`,
          `<b>Condition 1 (numerator → 0):</b><br>2<sup>2</sup> + 2${a} + ${b} = 0 ⇒ 2${a} + ${b} = −4.${NB}${NB}${NB}(i)`,
          `So (${x} − 2) divides the numerator: write ${X2} + <i>ax</i> + ${b} = (${x} − 2)(${x} − ${c}) for some root ${c}.`,
          `<b>Apply the limit:</b><br>${LX2} ${fr(`(${x} − 2)(${x} − ${c})`, `(${x} − 2)(${x} + 1)`)}<br>= ${LX2} ${fr(`${x} − ${c}`, `${x} + 1`)} = ${fr(`2 − ${c}`, '3')}.`,
          `Set equal to ${fr('5', '3')}:<br>${fr(`2 − ${c}`, '3')} = ${fr('5', '3')} ⇒ 2 − ${c} = 5 ⇒ ${c} = −3.`,
          `<b>Recover ${a}, ${b}:</b> ${X2} + <i>ax</i> + ${b} = (${x}${NB}−${NB}2)(${x}${NB}+${NB}3) = ${X2} + ${x} − 6, so ${a} = 1, ${b} = −6.`,
          `<b>Check</b> against (i): 2(1) + (−6) = −4 ✓.`,
        ],
        ans: `${a} = 1, ${b} = −6`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `[CBSE] Evaluate ${LX4} ${fr(`${X2} − 16`, `${x} − 4`)}.`, a: '8' },
          { q: `[CBSE] Evaluate<br>${LX0} ${fr(`√(4 + ${x}) − 2`, x)}.`, a: fr('1', '4') },
          { q: `[JEE Main] Evaluate ${LX1} ${fr(`${x}<sup>25</sup> − 1`, `${x}<sup>5</sup> − 1`)}.`, a: '5' },
          { q: `[JEE Main] If ${LX2} ${fr(`${XN} − 2<sup><i>n</i></sup>`, `${x} − 2`)} = 80 and ${n} ∈ ℕ, find ${n}.`, a: `${n} = 5` },
          {
            q: `[JEE Advanced] Let ${fx} = {3${x} − 1,${NB}${x}${NB}<${NB}1;${NB}${NB}<i>ax</i> + ${b},${NB}${x}${NB}≥${NB}1}. Find a relation between ${a} and ${b} for which ${LX1} ${fx} exists, and state that common limit value.`,
            a: `Limit exists when ${a} + ${b} = 2; common value = 2.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `${LX0} ${fr(`|${x}|`, x)} is equal to`,
        opts: [
          { label: '1', nudge: '<b>(A)</b> picks only the RHL.' },
          { label: '0', nudge: `<b>(B)</b> comes from sloppily “cancelling” ${fr(`|${x}|`, x)} to 0 or guessing symmetry.` },
          { label: '−1', nudge: '<b>(C)</b> picks only the LHL.' },
          { label: 'does not exist', nudge: null },
        ],
        correct: 3,
        solution: `Split by sign. For ${x}${NB}>${NB}0, |${x}| = ${x}, so RHL = ${fr(x, x)} = 1. For ${x}${NB}<${NB}0, |${x}| = −${x}, so LHL = ${fr(`−${x}`, x)} = −1. Since LHL (−1) ≠ RHL (1), the limit does not exist. The whole point is that a modulus splits into two different one-sided behaviours.`,
      },
      {
        t: 'mcq',
        q: `${LX3} ${fr(`${X2} − 9`, `${X2} − 5${x} + 6`)} equals`,
        opts: [
          { label: '0', nudge: '<b>(A)</b> 0 comes from writing “numerator → 0” and stopping, ignoring that the denominator also → 0.' },
          { label: '6', nudge: null },
          { label: '1', nudge: `<b>(C)</b> 1 comes from cancelling the leading ${X2} terms.` },
          {
            label: 'limit does not exist',
            nudge: `<b>(D)</b> is the trap for students who think every ${ZZ} means “does not exist”, but ${ZZ} means resolve, not quit.`,
          },
        ],
        correct: 1,
        solution: `Form is ${ZZ}. Factor: numerator (${x} − 3)(${x} + 3), denominator (${x} − 2)(${x} − 3). Cancel (${x} − 3):<br>${LX3} ${fr(`${x} + 3`, `${x} − 2`)} = ${fr('6', '1')} = 6.`,
      },
      {
        t: 'mcq',
        q: `${LX2} ${fr(`${X3} − 8`, `${X2} − 4`)} equals`,
        opts: [
          { label: '2', nudge: `<b>(A)</b> 2 cancels the leading terms, ${fr(X3, X2)} = ${x}, and lets ${x} → 2, ignoring the constants −8 and −4.` },
          { label: '3', nudge: null },
          { label: '4', nudge: `<b>(C)</b> 4 is the denominator’s limit alone, ${fr(`${X2} − 2<sup>2</sup>`, `${x} − 2`)} → 2${NB}·${NB}2 = 4; the numerator’s 12 is never divided by it.` },
          {
            label: fr('3', '2'),
            nudge: `<b>(D)</b> ${fr('3', '2')} uses the ${MN} shortcut, which is only valid about ${x} → 1, not ${x} → 2: a classic misapplied-shortcut trap.`,
          },
        ],
        correct: 1,
        solution: `Both vanish at ${x} = 2. Using the ratio of standard limits about ${a} = 2: numerator ${fr(`${X3} − 2<sup>3</sup>`, `${x} − 2`)} → 3${NB}·${NB}2<sup>2</sup> = 12;<br>denominator ${fr(`${X2} − 2<sup>2</sup>`, `${x} − 2`)} → 2${NB}·${NB}2<sup>1</sup> = 4.<br>So limit = ${fr('12', '4')} = 3.`,
      },
      {
        t: 'mcq',
        q: `The graph of <i>f</i> has ${LXAM}${NB}${fx} = 5, ${LXAP}${NB}${fx} = 5, and ${f(a)} = 2. Then ${LXA}${NB}${fx} is`,
        opts: [
          { label: '2', nudge: '<b>(A)</b> 2 confuses limit with function value: a very common conceptual error.' },
          { label: '5', nudge: null },
          { label: 'does not exist', nudge: `<b>(C)</b> wrongly assumes that ${f(a)} differing from the limit destroys it.` },
          { label: fr('5 + 2', '2'), nudge: '<b>(D)</b> invents an averaging rule that does not exist.' },
        ],
        correct: 1,
        solution: `Both one-sided limits agree at 5, so the limit is 5. The value ${f(a)} = 2 is <b>irrelevant</b> to the limit.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Confusing ${LXA} ${fx} with ${f(a)}.</b> The limit is the destination, the value is whether you arrive. They often differ, and the limit doesn’t care about ${f(a)} at all.`,
          `<b>Treating ${ZZ} as a final answer.</b> ${ZZ} is not “zero” and not “does not exist”: it is an indeterminate form, an instruction to factor or rationalise.`,
          `<b>Applying the quotient rule when the denominator’s limit is 0.</b> The rule needs ${M}${NB}≠${NB}0. Skip this check and you’ll “prove” nonsense.`,
          `<b>Misfiring the ${MN} shortcut.</b> ${SHORTCUT} → ${MN} holds only as ${x} → 1. Around any other point, fall back to the full ${NAN1} ratio.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed + sanity):</b> Always <b>substitute first</b>. A clean number means you’re done in one line: no factoring theatrics. Only the ${ZZ} (or other indeterminate) cases earn the heavy machinery. And whenever you see “lim exists and equals (finite)” with a vanishing denominator, immediately write <b>“numerator must also → 0”</b>: that one reflex cracks almost every “find ${a},${NB}${b}” problem.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Limit = destination, not arrival.', note: `${f(a)} is irrelevant to ${LXA} ${fx}.` },
          {
            f: 'Existence rule',
            note: `${LXA} <i>f</i> = ${L} ⟺ LHL = RHL = ${L} (finite). LHL = ${LH0} ${f(`${a} − ${h}`)}, RHL = ${LH0} ${f(`${a} + ${h}`)}.`,
          },
          { f: 'Algebra of limits', note: 'sum/diff/product split freely; <b>quotient needs denominator limit ≠ 0</b>.' },
          { f: `<b>Direct substitution</b> works for polynomials and for rationals with <i>q</i>(${a})${NB}≠${NB}0.`, note: '' },
          { f: 'Star formula', note: `${LXA} ${STAR} = ${NAN1} (rational ${n}; ${a}${NB}>${NB}0 when ${n} is not an integer).` },
          { f: `${ZZ} toolkit`, note: `factor & cancel (${x} − ${a}); for surds, multiply by the conjugate.` },
        ],
        aids: [
          `“Limit cares about the neighbours, not the house.” (ignore ${f(a)})`,
          `“Zero-by-zero means do more, not done.” (${ZZ} = resolve)`,
          `“${MN} only at one.” (the shortcut ${SHORTCUT} → ${MN} is for ${x} → 1 only)`,
        ],
      },
    ],
  },

  // ──────────────── Topic 02 · pp. 1069–1076 ────────────────
  {
    n: '02',
    title: 'Standard Limits',
    kalam: 'These are the workhorse identities of all of calculus.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `These are the workhorse identities of all of calculus. <b>CBSE Boards</b> ask a direct 1–2 mark trigonometric limit (the ${SINX} family) most years ${ESTIMATE}. <b>JEE Main</b> carries 1–2 questions every session: usually a standard limit disguised inside a larger expression ${ESTIMATE}. <b>JEE Advanced</b> rarely asks them nakedly but assumes total fluency, especially inside ${ONEINF} and series problems. The ${SINX} = 1 and ${EX1} = 1 results are the two most-reused limit facts in the entire subject.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `In Topic 01, every ${ZZ} we met could be broken open: there was always a hidden (${x} − ${a}) to factor out and cancel. But now meet a troublemaker: ${LX0} ${SINX}. Substituting ${x} = 0 gives ${ZZ}, exactly as before, but there is <b>nothing to factor</b>. sin ${x} is not a polynomial; you cannot pull a clean ${x} out of it by algebra. The factoring toolkit fails completely.`,
      },
      {
        t: 'p',
        html: 'So mathematicians did the sensible thing: they proved a handful of these stubborn limits once, rigorously, and then everyone agrees to <b>memorise and reuse</b> them, exactly like multiplication tables. You don’t re-derive 7 × 8 every time; you just know it is 56. These pre-proven results are the <b>standard limits</b>.',
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> picture the Indian Railways network. To get from a small town in Bihar to a small town in Kerala, you don’t lay fresh track; you route your journey through a major junction like Mumbai Central or Itarsi. Standard limits are the junctions of calculus: whenever you face a messy trigonometric, exponential, or logarithmic ${ZZ}, your whole job is to <b>algebraically reshape it until it passes through one of these known junctions</b>, read off the value, and continue.`,
      },
      {
        t: 'p',
        html: `The flagship junction is:<br>${LX0} ${SINX} = 1.<br>Why should this be 1? Zoom your eyes right into the graph of ${y} = sin ${x} near the origin. The curve becomes indistinguishable from the straight line ${y} = ${x}: for very small angles, <b>sin ${x} and ${x} are practically twins</b>. Their ratio therefore heads to 1.`,
      },
      { t: 'fig', id: 'm11-12-fig-12.2' },
      {
        t: 'p',
        html: `The same “twins near zero” idea powers the exponential and logarithmic junctions: for small ${x}, ${EXX} ≈ 1 + ${x} (so ${EXX} − 1 ≈ ${x}), and ln(1 + ${x}) ≈ ${x}. Hence ${EX1} → 1 and ${LN1X} → 1.`,
      },
      {
        t: 'p',
        html: `<b>Limiting Conditions & Assumptions (read these or lose marks):</b><br>1. <b>Radians only.</b> ${SINX} → 1 is true only when ${x} is in radians. In degrees the answer is ${PI180}, not 1. (Radian measure is the unique one where arc length = angle × radius, which is why the twins-near-zero relationship holds.)<br>2. <b>The argument must go to 0.</b> ${SINX} → 1 as ${x} → 0, but ${SINX} as ${x} → π is just ${fr('0', 'π')} = 0. The magic only happens when the angle itself shrinks to zero.<br>3. <b>Arguments must match.</b> The result is really ${fr('sin(box)', '(same box)')} → 1. So ${fr(`sin 5${x}`, `5${x}`)} → 1, but ${fr(`sin 5${x}`, x)} → 5. Mismatch the boxes and you mismatch the answer.<br>4. <b>The denominator power matters.</b> ${COS1X} → 0, but ${COS1} → ${HALF}. Same numerator, totally different destinations.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `<b>Note:</b> standard limits are pure numbers: no dimensional formulas. This section is the junction table you must commit to memory. Every argument below (${x}, <i>kx</i>, etc.) is assumed to be in <b>radians</b> and to tend to 0.`,
      },
      {
        t: 'formula',
        kicker: 'Trigonometric standard limits',
        main: `${LX0} ${SINX} = 1<br>${LX0} ${TANX} = 1<br>${LX0} ${COS1} = ${HALF}<br>${LX0} ${COS1X} = 0<br>${LX0} ${ASINX} = 1<br>${LX0} ${ATANX} = 1`,
        legend: [`${x} = the argument (radians, → 0)`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Exponential & logarithmic standard limits',
        main: `${LX0} ${EX1} = 1<br>${LX0} ${AX1} = ln ${a} (${a}${NB}>${NB}0)<br>${LX0} ${LN1X} = 1<br>${LX0} ${fr(`log<sub><i>a</i></sub>(1 + ${x})`, x)} = ${fr('1', `ln ${a}`)} (${a}${NB}>${NB}0, ${a}${NB}≠${NB}1)`,
        legend: [`${x} = the variable (${x} → 0)`, `${a} = the base (${a}${NB}>${NB}0)`, `${e} = the base of natural logarithms (≈ 2.718)`],
        note: null,
      },
      {
        t: 'formula',
        kicker: `The number ${e} (the 1<sup>∞</sup> junctions)`,
        main: `${LX0} (1 + ${x})<sup>1/<i>x</i></sup> = ${e}<br>${LNI} (1 + ${fr('1', n)})<sup><i>n</i></sup> = ${e}`,
        legend: [`${e} = the base of natural logarithms (≈ 2.718)`, `${x} = the variable (${x} → 0)`, `${n} = a natural number (${n} → ∞)`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'The 1<sup>∞</sup> shortcut rule',
        main: `If ${fx} → 1 and ${gx} → ∞ as ${x} → ${a}, then:<br>${LXA} [${fx}]<sup><i>g</i>(<i>x</i>)</sup> = ${e}<sup>lim <i>g</i>(<i>x</i>) [<i>f</i>(<i>x</i>)−1]</sup>`,
        legend: [
          `${fx} = the base (→ 1)`,
          `${gx} = the exponent (→ ∞)`,
          `${a} = the point approached`,
          `the exponent’s limit lim ${gx}[${fx} − 1] must exist (finite, or ±∞ for 0 or ∞)`,
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Argument-matching generalisation',
        main: `For a constant ${k}:<br>${LX0} ${fr('sin(<i>kx</i>)', x)} = ${k}<br>${LX0} ${COSK} = ${K22}<br>${LX0} ${fr(`${e}<sup><i>kx</i></sup> − 1`, x)} = ${k}`,
        legend: [`${k} = a constant multiplier`, `${x} = the variable (radians, → 0)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Chained from Topic 01 (reused, not re-derived):</b><br>${LXA} ${STAR} = ${NAN1} (${n} ∈ ℚ, ${a}${NB}>${NB}0 when ${n} is not an integer).`,
      },
      {
        t: 'p',
        html: `<b>Variable glossary:</b> ${x}, <i>kx</i> = arguments (radians, → 0); ${k} = constant multiplier; ${a} = base of exponential/log; ${e} ≈ 2.718; ln ≡ log<sub><i>e</i></sub>.`,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: `<b>The Sandwich (Squeeze) Theorem: the engine behind ${SINX} = 1.</b> If <i>g</i>(${x}) ≤ ${fx} ≤ ${h}(${x}) near ${a}, and <i>g</i> and ${h} both head to the same limit ${L}, then <i>f</i> is trapped and forced to ${L} as well. A function squeezed between two slices of bread that meet has nowhere to go but the meeting point.`,
      },
      {
        t: 'p',
        html: `<b>Geometric proof that ${LX0P} ${SINX} = 1.</b><br><b>Setup:</b> take a unit circle, centre <i>O</i>, and a small angle ${x} (radians), 0 < ${x} < ${fr('π', '2')}. Mark <i>A</i> = (1,${NB}0) on the circle, <i>P</i> on the circle at angle ${x}, and <i>T</i> where the tangent at <i>A</i> meets line <i>OP</i> extended.`,
      },
      { t: 'fig', id: 'm11-12-fig-12.3' },
      {
        t: 'p',
        html: `<b>Compare three areas:</b><br>Area △<i>OAP</i> (= ${HALF} sin ${x})<br><br>≤ Area sector <i>OAP</i> (= ${HALF}${x})<br><br>≤ Area △<i>OAT</i> (= ${HALF} tan ${x}).`,
      },
      {
        t: 'p',
        html: `(The middle one is ${HALF}<i>r</i><sup>2</sup>${x} = ${HALF}${x} only because ${x} is in radians: this is the precise spot where radian measure is essential.)`,
      },
      {
        t: 'p',
        html: `Multiply through by 2 and divide by sin ${x} > 0:<br>1 ≤ ${fr(x, `sin ${x}`)} ≤ ${fr('1', `cos ${x}`)}<br><br>⟹ cos ${x} ≤ ${SINX} ≤ 1.`,
      },
      {
        t: 'p',
        html: `As ${x} → 0<sup>+</sup>, cos ${x} → 1. The ratio is sandwiched between something → 1 and 1 itself, so by the Squeeze Theorem ${SINX} → 1. By symmetry (${fr('sin(−<i>x</i>)', `−${x}`)} = ${SINX}) the left-hand limit matches, so the two-sided limit is 1. ■`,
      },
      {
        t: 'p',
        html: `<b>Derivation of ${LX0} ${COS1} = ${HALF}.</b> Use the half-angle identity 1 − cos ${x} = 2 sin<sup>2</sup>${NB}${fr(x, '2')}, and write <i>θ</i> = ${fr(x, '2')}, so ${x} = 2<i>θ</i> and <i>θ</i> → 0 as ${x} → 0:<br>${COS1} = ${fr(`2 sin<sup>2</sup>${NB}<i>θ</i>`, '4<i>θ</i><sup>2</sup>')}<br><br>= ${HALF}(${fr('sin <i>θ</i>', '<i>θ</i>')})<sup>2</sup><br><br>→ ${HALF}(1)<sup>2</sup> = ${HALF}.`,
      },
      {
        t: 'p',
        html: `<b>Why ${EX1} → 1.</b> From the series ${EXX} = 1 + ${x} + ${fr(X2, '2!')} + ⋯, we get<br>${EXX} − 1 = ${x}(1 + ${fr(x, '2!')} + ⋯), so<br><br>${EX1} = 1 + ${fr(x, '2!')} + ⋯ → 1.<br>(This takes the series of ${EXX} as known: a reason, not a proof from first principles.)<br><br>The same expansion gives ${AX1} → ln ${a} (since ${AXX} = ${e}<sup><i>x</i> ln <i>a</i></sup>).`,
      },
      {
        t: 'p',
        html: `<b>Why the ${ONEINF} rule works.</b> Write ${FG} = ${e}<sup><i>g</i> ln <i>f</i></sup>. Near a ${ONEINF} form, <i>f</i> − 1 is small, and ln <i>f</i> = ln(1 + (<i>f</i> − 1)) ≈ (<i>f</i> − 1). So <i>g</i> ln <i>f</i> ≈ <i>g</i>(<i>f</i> − 1), giving lim ${FG} = ${ELIM}.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Evaluate ${LX0} ${fr(`sin 5${x}`, `sin 3${x}`)}.`,
        steps: [
          `The plan: reshape both pieces into the canonical ${BOX} form by inserting the matching arguments.<br>${fr(`sin 5${x}`, `sin 3${x}`)} = ${fr(`sin 5${x}`, `5${x}`)} · ${fr(`3${x}`, `sin 3${x}`)} · ${fr(`5${x}`, `3${x}`)}.`,
          `As ${x} → 0: the first factor → 1, the second → 1, and the third is the constant ${fr('5', '3')}. Therefore<br>${LX0} ${fr(`sin 5${x}`, `sin 3${x}`)} = 1 · 1 · ${fr('5', '3')}.`,
        ],
        ans: fr('5', '3'),
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: `Evaluate ${LX0} ${fr(`1 − cos 4${x}`, X2)}.`,
        steps: [
          `<b>The trap:</b> students apply ${COS1} → ${HALF} and answer ${HALF}, forgetting the argument is 4${x}, not ${x}. The correct generalised junction is<br>${COSK} → ${K22}.<br>${LX0} ${fr(`1 − cos 4${x}`, X2)} = ${fr('4<sup>2</sup>', '2')} = ${fr('16', '2')} = 8.`,
          `<b>Mental shortcut:</b> for<br>${COSK}, just write ${K22}, and square the ${k}.`,
        ],
        ans: '8',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Multi-Concept',
        q: `Evaluate ${LX0} ${fr(`${e}<sup>2<i>x</i></sup> − 1`, `sin 3${x}`)}. (Combines an exponential junction with a trigonometric one.)`,
        steps: [
          `Route the numerator through the ${e}-junction and the denominator through the sin-junction:<br>${fr(`${e}<sup>2<i>x</i></sup> − 1`, `sin 3${x}`)} = ${fr(`${e}<sup>2<i>x</i></sup> − 1`, `2${x}`)} · ${fr(`3${x}`, `sin 3${x}`)} · ${fr(`2${x}`, `3${x}`)}<br><br>(${fr(`${e}<sup>2<i>x</i></sup> − 1`, `2${x}`)} → 1, ${fr(`3${x}`, `sin 3${x}`)} → 1).`,
          `The last factor is the constant ${fr('2', '3')}. Hence<br>${LX0} ${fr(`${e}<sup>2<i>x</i></sup> − 1`, `sin 3${x}`)} = 1 · 1 · ${fr('2', '3')}.`,
        ],
        ans: fr('2', '3'),
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Evaluate ${LX0} (cos ${x})<sup>1/<i>x</i><sup>2</sup></sup>.`,
        steps: [
          `<b>Identify the form.</b> As ${x} → 0, cos ${x} → 1 and ${fr('1', X2)} → ∞: this is the indeterminate form ${ONEINF}. Reach straight for the rule lim ${FG} = ${ELIM} with <i>f</i> = cos ${x}, <i>g</i> = ${fr('1', X2)}:<br>${LX0} <i>g</i>(<i>f</i> − 1) = ${LX0} ${fr(`cos ${x} − 1`, X2)}<br><br>= −${LX0} ${COS1} = −${HALF}.`,
          `Therefore<br>${LX0} (cos ${x})<sup>1/<i>x</i><sup>2</sup></sup> = ${e}<sup>−1/2</sup> = ${fr('1', `√${e}`)}.`,
          `<b>Deep point:</b> the ${ONEINF} rule converts a frightening exponent problem into a familiar ${COS1} junction in one move.`,
        ],
        ans: fr('1', `√${e}`),
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `[CBSE] Evaluate ${LX0} ${fr(`tan 7${x}`, x)}.`, a: '7' },
          { q: `[CBSE] Evaluate ${LX0} ${fr('sin <i>ax</i>', 'sin <i>bx</i>')}, (${b}${NB}≠${NB}0).`, a: fr(a, b) },
          {
            q: `[JEE Main] Evaluate ${LX0} ${fr(`${AXX} − 1`, `${b}<sup><i>x</i></sup> − 1`)}, (${a}, ${b}${NB}>${NB}0, ${b}${NB}≠${NB}1).`,
            a: fr(`ln ${a}`, `ln ${b}`),
          },
          { q: `[JEE Main] Evaluate ${LX0} ${fr(`1 − cos 6${x}`, `1 − cos 3${x}`)}.`, a: '4' },
          { q: `[JEE Advanced] Evaluate ${LX0} (1 + sin ${x})<sup>cot <i>x</i></sup>.`, a: e },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `${LX0} ${fr(`sin ${x}°`, x)} (where ${x}° means ${x} <b>degrees</b>) equals`,
        opts: [
          {
            label: '1',
            nudge: `<b>(A)</b> 1 is the classic trap here: applying ${SINX} → 1 without noticing the degree symbol.`,
          },
          { label: PI180, nudge: null },
          { label: fr('180', 'π'), nudge: '<b>(C)</b> inverts the conversion factor.' },
          { label: 'π', nudge: '<b>(D)</b> half-remembers that “π is involved.”' },
        ],
        correct: 1,
        solution: `Convert the degrees to radians: ${x}° = <i>t</i> radians, where <i>t</i> = ${fr('π<i>x</i>', '180')}, so ${x} = ${fr('180<i>t</i>', 'π')} and <i>t</i> → 0 as ${x} → 0. Then<br>${fr(`sin ${x}°`, x)} = ${fr('π sin <i>t</i>', '180<i>t</i>')}<br><br>= ${PI180} · ${fr('sin <i>t</i>', '<i>t</i>')}<br><br>→ ${PI180} · 1 = ${PI180}.`,
      },
      {
        t: 'mcq',
        q: `${LX0} ${fr(`tan<sup>−1</sup>(3${x})`, `sin(2${x})`)} equals`,
        opts: [
          { label: fr('2', '3'), nudge: `<b>(A)</b> flips the ratio (puts ${fr('2', '3')} instead of ${fr('3', '2')}).` },
          { label: fr('3', '2'), nudge: null },
          { label: '1', nudge: '<b>(C)</b> treats both junctions as “1” and forgets the leftover constant.' },
          { label: '6', nudge: '<b>(D)</b> multiplies 3 × 2 instead of dividing.' },
        ],
        correct: 1,
        solution: `Both ${fr(`tan<sup>−1</sup>(3${x})`, `3${x}`)} → 1 and ${fr(`sin 2${x}`, `2${x}`)} → 1, so<br>${fr(`tan<sup>−1</sup>(3${x})`, `sin 2${x}`)} = ${fr(`tan<sup>−1</sup>(3${x})`, `3${x}`)} · ${fr(`2${x}`, `sin 2${x}`)} · ${fr(`3${x}`, `2${x}`)}<br><br>→ 1 · 1 · ${fr('3', '2')} = ${fr('3', '2')}.`,
      },
      {
        t: 'mcq',
        q: `${LXI} (1 + ${fr('3', x)})<sup><i>x</i></sup> equals`,
        opts: [
          { label: e, nudge: `<b>(A)</b> blindly recalls “(1 + ${fr('1', x)})<sup><i>x</i></sup> → ${e}” and ignores the 3.` },
          { label: `${e}<sup>3</sup>`, nudge: null },
          { label: '3', nudge: '<b>(C)</b> reads off the constant inside.' },
          { label: '1', nudge: `<b>(D)</b> wrongly treats ${ONEINF} as just 1: the classic ${ONEINF} misconception.` },
        ],
        correct: 1,
        solution: `Form ${ONEINF}. Using the rule with <i>f</i> = 1 + ${fr('3', x)} → 1, <i>g</i> = ${x} → ∞:<br>lim ${x}(1 + ${fr('3', x)} − 1) = lim ${x} · ${fr('3', x)} = 3<br>⇒ answer = ${e}<sup>3</sup>.`,
      },
      {
        t: 'mcq',
        q: `${LX0} ${fr(`2<sup><i>x</i></sup> − 1`, x)} equals`,
        opts: [
          { label: '1', nudge: `<b>(A)</b> confuses the base-${a} result with the base-${e} result ${EX1} → 1.` },
          { label: '2', nudge: '<b>(B)</b> reads off the base.' },
          { label: 'ln 2', nudge: null },
          { label: '0', nudge: `<b>(D)</b> stops at the bare ${ZZ} without resolving.` },
        ],
        correct: 2,
        solution: `This is the junction ${AX1} → ln ${a} with ${a} = 2, giving ln 2.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Degrees instead of radians.</b> ${SINX} → 1 holds only in radians. A stray degree symbol changes the answer to ${PI180}. Always check the angle’s units first.`,
          `<b>Argument mismatch.</b> ${fr('sin(<i>kx</i>)', x)} → ${k}, not 1. The standard limit needs the same expression on top inside the function and on the bottom: match the boxes.`,
          `<b>Wrong denominator power for 1 − cos.</b> ${COS1X} → 0 but ${COS1} → ${HALF}. Note the power before you quote a value, and remember<br>${COSK} → ${K22} (square the ${k}).`,
          `<b>Base confusion in exponentials.</b> ${EX1} → 1, but ${AX1} → ln ${a}. Only base ${e} gives a clean 1.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed + accuracy):</b> make every problem pass through a junction. Multiply and divide to force each trig/exp/log piece into its canonical ${BOX} (or ${fr(`${e}<sup>box</sup> − 1`, 'box')}) shape, collect the leftover constants, and read off. And the instant you spot a power tending to infinity with a base tending to 1, don’t panic; write ${ELIM} immediately and you’ve turned a ${ONEINF} monster into an ordinary limit.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '(all arguments in radians, → 0)', note: '' },
          { f: 'Trig', note: `${SINX} → 1, ${TANX} → 1,<br>${ASINX} → 1, ${ATANX} → 1` },
          { f: 'Half-angle', note: `${COS1} → ${HALF}<br>(general: ${fr('1 − cos <i>kx</i>', X2)} → ${K22})` },
          { f: 'Exp/Log', note: `${EX1} → 1, ${AX1} → ln ${a},<br>${LN1X} → 1` },
          { f: `The ${e}-limit`, note: `(1 + ${x})<sup>1/<i>x</i></sup> → ${e}, (1 + ${fr('1', n)})<sup><i>n</i></sup> → ${e}` },
          { f: `${ONEINF} rule`, note: `lim ${FG} = ${ELIM} when <i>f</i> → 1, <i>g</i> → ∞` },
          { f: 'Argument-match', note: `${fr('sin <i>kx</i>', x)} → ${k}, ${fr(`${e}<sup><i>kx</i></sup> − 1`, x)} → ${k}` },
        ],
        aids: [
          '“Sine and angle are twins near zero, but only in radians.”',
          '“Match the box, keep the constant.” (argument-matching)',
          `“One-to-the-infinity? Lift to ${e} to the <i>g</i>(<i>f</i> − 1).”`,
          `“${e} gives one, any other base gives ln.”`,
        ],
      },
    ],
  },
];
