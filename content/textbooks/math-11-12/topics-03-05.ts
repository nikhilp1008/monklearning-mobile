import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 12, Topics 03–05, pp. 1077–1097 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's Subtopics 03
 * Derivatives and First Principle (pp. 1077–1083), 04 Rules of Differentiation
 * (pp. 1084–1089) and 05 Limits at Infinity & Special Cases of Existence
 * (pp. 1090–1095), then the book's "Master Reference — Chapter 12 at a Glance"
 * (pp. 1096–1097), kept as the last parts of Topic 05. The supplement starts on
 * p. 1098. Each topic opens with its "Exam Relevance:" box as a part of its own,
 * then is split at its Sections 1 to 8; the "Cheat Sheet Box" is the part
 * "Cheat sheet". Figures 12.4 (p. 1078), 12.5 (p. 1085) and 12.6 (p. 1091); no
 * unnumbered drawings. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
/** A no-break space: keeps a short expression on one line. */
const NB = ' ';
/** A thin space: sets a stacked fraction off the letter after it. */
const TH = ' ';
/** A word joiner: no line break between its two neighbours. */
const WJ = '\u2060';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const x = '<i>x</i>';
const h = '<i>h</i>';
const a = '<i>a</i>';
const t = '<i>t</i>';
const u = '<i>u</i>';
const v = '<i>v</i>';
const n = '<i>n</i>';
const k = '<i>k</i>';
const y = '<i>y</i>';
const b = '<i>b</i>';
const e = '<i>e</i>';
const lim = (s: string) => `lim<sub>${s}</sub>`;
const LH = lim(`${h}→0`);
const LXA = lim(`${x}→${a}`);
const LXI = lim(`${x}→∞`);
const LTX = lim(`${t}→${x}`);
const LX0P = lim(`${x}→0<sup>+</sup>`);
const f = (s: string) => `<i>f</i>(${s})`;
const fp = (s: string) => `<i>f</i>′(${s})`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const pw = (s: string, p: string) => `${s}<sup>${p}</sup>`;
const D = fr('<i>d</i>', '<i>dx</i>');
const dd = (top: string, bot: string) => fr(`<i>${top}</i>`, `<i>${bot}</i>`);
const DYDX = dd('dy', 'dx');
const DYDU = dd('dy', 'du');
const DUDX = dd('du', 'dx');
const CHAIN = `${DYDX} = ${DYDU} · ${DUDX}`;
const DQ = fr(`${f(`${x} + ${h}`)} − ${f(x)}`, h);
const DQA = fr(`${f(`${a} + ${h}`)} − ${f(a)}`, h);
const DQX = fr(`${f(x)} − ${f(a)}`, `${x} − ${a}`);
const DQT = fr(`${f(t)} − ${f(x)}`, `${t} − ${x}`);
const EX = pw(e, x);
const XN = pw(x, n);
const NXN1 = `${n}${pw(x, '<i>n</i>−1')}`;
const H2 = fr(h, '2');
const RX = `√${x}`;
const RXH = `√(${x} + ${h})`;
const PROD = `(${u}${v})′ = ${u}′${v} + ${u}${v}′`;
const QUOT = `(${fr(u, v)})′ = ${fr(`${u}′${v} − ${u}${v}′`, sq(v))}`;
const POWCH = `${D}[<i>g</i>]<sup><i>n</i></sup> = ${n}[<i>g</i>]<sup><i>n</i>−1</sup><i>g</i>′`;
const GIF = `[${x}]`;
const INV_X = fr('1', x);
const DOT = '[·]';
const CSC2 = `csc<sup>2</sup>${NB}${x}`;
const SEC2 = `sec<sup>2</sup>${NB}${x}`;
const DTAN = `${D} tan ${x} = ${SEC2}`;
const DCOT = `${D} cot ${x} = −${CSC2}`;
const DSEC = `${D} sec ${x} = sec ${x} tan ${x}`;
const DCSC = `${D} csc ${x} = −csc ${x} cot ${x}`;
const DXN = `${D}${TH}${XN} = ${NXN1}`;
const DSIN = `${D} sin ${x} = cos ${x}`;
const DCOS = `${D} cos ${x} = −sin ${x}`;
const DEX = `${D}${TH}${EX} = ${EX}`;
const DLN = `${D} ln ${x} = ${INV_X}`;
const DAX = `${D}${TH}${pw(a, x)} = ${pw(a, x)} ln ${a}`;
const SINX_X = fr(`sin ${x}`, x);
const EXP1 = fr(`${EX} − 1`, x);
const AXP1 = fr(`${pw(a, x)} − 1`, x);
const LN1X = fr(`ln(1 + ${x})`, x);
const COS1 = fr(`1 − cos ${x}`, sq(x));
const ZZ = fr('0', '0');
const II = fr('∞', '∞');
const FRACPART = `{${INV_X}}`;
const ONE_INF = '1<sup>∞</sup>';
const EPOW = `${e}<sup>lim <i>g</i>(<i>f</i>−1)</sup>`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 03 · pp. 1077–1083 ────────────────
  {
    n: '03',
    title: 'Derivatives and First Principle',
    kalam: 'Here is a genuinely deep question: how fast is your car going right now, at this exact instant?',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `“Find the derivative of <i>f</i> <b>from first principle</b>” is a near-guaranteed <b>CBSE Boards</b> question (2–3 marks) every year ${ESTIMATE}. <b>JEE Main</b> tests the limit-definition both directly and disguised inside difference-quotient limits. <b>JEE Advanced</b> leans on it for differentiability-from-definition and functional-equation problems where the standard rules don’t apply.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Here is a genuinely deep question: how fast is your car going right now, at this exact instant? Average speed is easy: total distance over total time for the Jaipur–Delhi drive. But “right now” is a single instant, and in a single instant no time passes, so it looks like we’d be computing ${fr('change', '0')}, which is nonsense. Yet your speedometer displays an answer confidently. How?`,
      },
      {
        t: 'p',
        html: 'The speedometer cheats cleverly: it measures the distance covered over a tiny sliver of time and divides, then makes the sliver smaller and smaller. As the time-window shrinks toward zero, that average-over-a-sliver settles onto a single definite number: your <b>instantaneous</b> speed. <b>That limiting process (average rate of change, with the interval squeezed to zero) is exactly the derivative.</b>',
      },
      { t: 'fig', id: 'm11-12-fig-12.4' },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> the same idea is purely geometric. Pick two points on a curve and draw the straight line (a secant) joining them; its slope is the average rate of change between them. Now slide the second point toward the first. The secant pivots, and in the limit it becomes the <b>tangent</b> line that just grazes the curve at that single point. The slope of that tangent is the derivative. Equivalently: zoom into any smooth curve far enough and it looks like a straight line; the derivative is the slope of that local straightening.',
      },
      {
        t: 'p',
        html: `Formalising both pictures gives the <b>first principle</b> (also called the ab-initio or delta method):<br>${fp(x)} = ${LH}${NB}${DQ}.<br>The numerator is the change in output; the ${h} in the denominator is the shrinking sliver of input. The whole expression is a ${ZZ} limit, which is why everything you learned about limits in Topics 01 and 02 is the machinery that makes derivatives work.`,
      },
      {
        t: 'p',
        html: `<b>Limiting Conditions & Assumptions:</b><br>1. <b>The limit must exist.</b> The derivative exists at ${x}${NB}=${NB}${a} only if the difference-quotient limit exists, i.e. its left-hand and right-hand versions (LHD and RHD) are finite and agree. This is the existence rule from Topic 01, applied to the difference quotient.<br>2. <b>Smoothness required.</b> A sharp corner (like |${x}| at ${x}${NB}=${NB}0), a jump, or a vertical tangent all kill the derivative even when the function is perfectly well-defined there.<br>3. <b>Differentiable ⇒ continuous, but not the reverse.</b> If <i>f</i> is differentiable at ${a} it must be continuous there, yet continuity alone is not enough (|${x}| is continuous everywhere but not differentiable at 0).<br>4. <b>${fp(a)} is a number; ${fp(x)} is a function.</b> Evaluate the derivative at every point and you get a brand-new function.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `<b>Note:</b> as a pure mathematical object a derivative is a number/function with no dimensional formula; units appear only when the variables carry physical meaning (e.g. ${dd('ds', 'dt')} in m/s). This section locks the definition, the standard derivative results, and the algebra rules.`,
      },
      {
        t: 'formula',
        kicker: 'Definition (two equivalent forms)',
        main: `${fp(x)} = ${LH}${NB}${DQ}<br>${fp(a)} = ${LXA}${NB}${DQX}`,
        legend: [
          `<i>f</i> = the function being differentiated`,
          `${fp(x)} = the derivative of <i>f</i> at ${x}`,
          `${h} = the small change in ${x}`,
          `${a} = the point where the derivative is taken`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Notations (all mean the same thing):</b> ${fp(x)}, ${DYDX}, ${D}[${f(x)}], <i>Df</i>.`,
      },
      {
        t: 'p',
        html: `<b>Interpretations.</b> Geometric: ${fp(a)} = slope of the tangent to ${y} = ${f(x)} at ${x} = ${a} = tan <i>ψ</i>, where <i>ψ</i> is the angle the tangent makes with the positive ${x}-axis. Physical: if <i>s</i>(${t}) is position, <i>s</i>′(${t}) is the instantaneous velocity.`,
      },
      {
        t: 'defgrid',
        title: 'Standard derivatives (each provable from first principle): f(x) and f′(x)',
        rows: [
          { k: '<i>c</i> (constant)', v: '0' },
          { k: XN, v: `${n}${NB}${pw(x, '<i>n</i>−1')}` },
          { k: `sin ${x}`, v: `cos ${x}` },
          { k: `cos ${x}`, v: `−sin ${x}` },
          { k: EX, v: EX },
          { k: pw(a, x), v: `${pw(a, x)} ln ${a}` },
          { k: `ln ${x}`, v: INV_X },
          { k: `tan ${x}`, v: SEC2 },
        ],
      },
      {
        t: 'p',
        html: '<b>Algebra of derivatives.</b> Derivatives combine across +, −, ×, ÷ via the sum, product, and quotient rules: the subject of <b>Topic 04 (Rules of Differentiation).</b> The product rule is derived from first principle in the Key procedures and logical framework part below (since that is genuinely first-principles work); its fluent application as a computational tool lives in Topic 04.',
      },
      {
        t: 'p',
        html: `<b>Chained tools (from Topics 01 and 02, used in the derivations below):</b><br>${LXA} ${fr(`${XN} − ${pw(a, n)}`, `${x} − ${a}`)} = ${n}${NB}${pw(a, '<i>n</i>−1')} (${a}${NB}>${NB}0 when ${n} is not an integer)<br>${LH} ${fr(`sin ${h}`, h)} = 1,${NB}${NB}${LH} ${fr(`${pw(e, h)} − 1`, h)} = 1.`,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: `<b>From secant to tangent (the geometric derivation).</b> Through <i>P</i> = (${x}, ${f(x)}) and <i>Q</i> = (${x} + ${h}, ${f(`${x} + ${h}`)}), the secant slope is the difference${NB}quotient<br>${DQ} = tan(∠<i>QPR</i>),<br>where <i>R</i> = (${x} + ${h}, ${f(x)}), so <i>PR</i> is horizontal, <i>RQ</i> vertical and the right angle is at <i>R</i>.<br>As ${h} → 0, <i>Q</i> slides into <i>P</i>, the chord <i>PQ</i> becomes the tangent at <i>P</i>, and the slope limit is ${fp(x)}. This is why “derivative = slope of tangent.”`,
      },
      {
        t: 'proc',
        title: 'The first-principle procedure (use this on any CBSE problem)',
        steps: [
          `Write ${f(`${x} + ${h}`)} by substituting ${x} + ${h} into the function.`,
          `Form the difference quotient<br>${DQ}.`,
          `Simplify the numerator so the ${h} in the denominator can be dealt with (expand, factor, or rationalise).`,
          `Take ${LH}, routing through a standard limit where needed.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Derivative of ${XN}: from Topic 01.</b> Using the second form of the definition with ${f(x)} = ${XN}:<br>${fp(x)} = ${LTX} ${fr(`${pw(t, n)} − ${XN}`, `${t} − ${x}`)} = ${n}${NB}${pw(x, '<i>n</i>−1')}.<br>The derivative of ${XN} is literally the star limit from Topic 01: no new work needed.`,
      },
      {
        t: 'p',
        html: `<b>Derivative of sin ${x}: the Topic 02 trig junction.</b> With the identity sin(${x} + ${h}) − sin ${x} = 2${NB}cos(${x} + ${H2}) sin ${H2}, write <i>θ</i> = ${H2}, so ${h} = 2<i>θ</i> and <i>θ</i> → 0 as ${h} → 0:<br>${fp(x)} = ${lim('<i>θ</i>→0')} ${fr(`2 cos(${x} + <i>θ</i>) sin <i>θ</i>`, '2<i>θ</i>')}<br>= ${lim('<i>θ</i>→0')} cos(${x} + <i>θ</i>) · ${fr('sin <i>θ</i>', '<i>θ</i>')}<br>= cos ${x}<br>(${fr('sin <i>θ</i>', '<i>θ</i>')} → 1).`,
      },
      {
        t: 'p',
        html: `<b>Derivative of ${EX}: uses the Topic 02 exponential junction.</b><br>${fp(x)} = ${LH} ${fr(`${pw(e, `${x}+${h}`)} − ${EX}`, h)}<br>= ${EX} ${LH} ${fr(`${pw(e, h)} − 1`, h)}<br>= ${EX} · 1 = ${EX}.<br>This is the famous self-replicating property: ${EX} is its own derivative.`,
      },
      {
        t: 'p',
        html: `<b>Why the product rule is ${u}′${v} + ${u}${v}′ and not ${u}′${v}′.</b> From first principle, add-and-subtract the cross term:<br>(${u}${v})′ = ${LH} ${fr(`${u}(${x} + ${h})${v}(${x} + ${h}) − ${u}(${x})${v}(${x})`, h)}.<br>Insert −${u}(${x} + ${h})${v}(${x}) + ${u}(${x} + ${h})${v}(${x}) in the numerator and split:<br>= ${LH} [${u}(${x} + ${h}) ${fr(`${v}(${x} + ${h}) − ${v}(${x})`, h)} + ${v}(${x}) ${fr(`${u}(${x} + ${h}) − ${u}(${x})`, h)}]<br>= ${u}${NB}${v}′ + ${v}${NB}${u}′.<br>The cross term is exactly why two derivatives can’t simply multiply.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the derivative of ${f(x)} = ${RX} from first principle.`,
        steps: [
          `<b>Step 1–2 (difference quotient):</b><br>${fr(`${RXH} − ${RX}`, h)}: substituting ${h} = 0 gives ${ZZ}.`,
          `<b>Step 3 (rationalise: the Topic 01 surd technique):</b> multiply by the conjugate:<br>${fr(`${RXH} − ${RX}`, h)}<br>· ${fr(`${RXH} + ${RX}`, `${RXH} + ${RX}`)}<br>= ${fr(`(${x} + ${h}) − ${x}`, `${h}(${RXH} + ${RX})`)}<br>= ${fr('1', `${RXH} + ${RX}`)}.`,
          `<b>Step 4 (limit):</b><br>${fp(x)} = ${LH} ${fr('1', `${RXH} + ${RX}`)} = ${fr('1', `2${RX}`)}.`,
          `(consistent with ${x}<sup>1/2</sup> ⇒ ${fr('1', '2')}${x}<sup>−1/2</sup>.)`,
        ],
        ans: `${D} ${RX} = ${fr('1', `2${RX}`)}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: `Evaluate<br>${LH} ${fr(`(2 + ${h})<sup>10</sup> − 2<sup>10</sup>`, h)}.`,
        steps: [
          `<b>The trap:</b> a student starts binomially expanding (2${NB}+${NB}${h})<sup>10</sup>: minutes lost. <b>Recognise the disguise:</b> this is precisely the first-principle definition of ${fp('2')} for ${f(x)} = ${pw(x, '10')}. So<br>${LH} ${fr(`(2 + ${h})<sup>10</sup> − 2<sup>10</sup>`, h)}<br>= ${fp('2')} = 10 · 2<sup>9</sup><br>= 10 · 512 = 5120.`,
          `<b>Reflex:</b> any limit shaped like<br>${DQA} is a derivative: read off ${fp(a)} instead of grinding.`,
        ],
        ans: '5120',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Multi-Concept',
        q: `Find the derivative of ${f(x)} = ${pw(a, x)} (${a}${NB}>${NB}0) from first principle. (Combines this with the Topic 02 exponential junction ${fr(`${pw(a, h)} − 1`, h)} → ln ${a}.)`,
        steps: [
          `Form the difference quotient and factor out the base function:<br>${fp(x)} = ${LH} ${fr(`${pw(a, `${x}+${h}`)} − ${pw(a, x)}`, h)}<br>= ${LH} ${pw(a, x)} · ${fr(`${pw(a, h)} − 1`, h)}<br>= ${pw(a, x)} ${LH} ${fr(`${pw(a, h)} − 1`, h)}.`,
          `The remaining limit is the standard exponential limit from Topic 02, equal to ln ${a}. Therefore<br>${DAX}.`,
          `(Setting ${a} = ${e} recovers ${DEX}, since ln ${e} = 1: a clean self-consistency check.)`,
        ],
        ans: DAX,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Let ${f(x)} = {${sq(x)} sin ${INV_X},${NB}${x}${NB}≠${NB}0;${NB}${NB}0,${NB}${x}${NB}=${NB}0}. Show that <i>f</i> is differentiable at ${x} = 0 and find ${fp('0')}.`,
        steps: [
          `<b>The subtlety:</b> sin ${INV_X} oscillates wildly near 0, so you cannot just “plug in.” Go to the definition at the point:<br>${fp('0')} = ${LH} ${fr(`${f(h)} − ${f('0')}`, h)}.<br><br>Here ${f(h)} − ${f('0')} = ${sq(h)} sin ${fr('1', h)} − 0, and divided by ${h} it gives<br><br>${fp('0')} = ${LH} ${h} sin ${fr('1', h)}.`,
          `<b>Squeeze</b> (Topic 02 Sandwich Theorem): since |sin ${fr('1', h)}| ≤ 1,<br>−|${h}| ≤ ${h} sin ${fr('1', h)} ≤ |${h}|.`,
          `Both bounds → 0 as ${h} → 0, so the trapped quantity → 0. Therefore ${fp('0')} = 0.`,
          `<b>Deep point:</b> <i>f</i> is differentiable at 0, yet <i>f</i>′ is <b>not</b> continuous at 0 (away from 0, ${fp(x)} = 2${x} sin ${INV_X} − cos ${INV_X}, which has no limit as ${x} → 0). Differentiable does not imply continuously differentiable: a favourite Advanced trap.`,
        ],
        ans: `${fp('0')} = 0`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `[CBSE] Find the derivative of ${f(x)} = ${sq(x)} + 3${x} from first principle.`, a: `2${x} + 3` },
          { q: `[CBSE] Find the derivative of ${f(x)} = cos ${x} from first principle.`, a: `−sin ${x}` },
          { q: `[JEE Main] Evaluate ${LH} ${fr(`${pw(e, `3+${h}`)} − ${pw(e, '3')}`, h)}.`, a: pw(e, '3') },
          { q: `[JEE Main] Find ${fp(x)} if ${f(x)} = ${sq(x)}${EX}.`, a: `${EX}(${sq(x)} + 2${x}) = ${x}${NB}${EX}(${x} + 2)` },
          {
            q: `[JEE Advanced] Is ${f(x)} = |${x} − 2| differentiable at ${x} = 2? Justify using LHD and RHD.`,
            a: `Not differentiable; LHD = −1, RHD = +1, so ${fp('2')} does not exist (corner point).`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The derivative of ${f(x)} = ${RX} at ${x} = 4 is`,
        opts: [
          { label: fr('1', '4'), nudge: null },
          { label: fr('1', '2'), nudge: `<b>(B)</b> drops the ${RX} and just halves.` },
          { label: '4', nudge: `<b>(C)</b> 4 is just the point ${x} = 4 read back as the answer.` },
          { label: '2', nudge: '<b>(D)</b> gives √4, the function value, not the slope.' },
        ],
        correct: 0,
        solution: `Since ${fp(x)} = ${fr('1', `2${RX}`)}, at ${x} = 4 we get ${fr('1', '2·2')} = ${fr('1', '4')}.`,
      },
      {
        t: 'mcq',
        q: `If ${f(x)} = sin ${x} and ${a} = ${fr('π', '6')}, then<br>${LH} ${DQA} equals`,
        opts: [
          { label: fr('1', '2'), nudge: `<b>(A)</b> computes sin ${fr('π', '6')}: the function value, not its derivative.` },
          { label: fr('√3', '2'), nudge: null },
          { label: `−${fr('√3', '2')}`, nudge: `<b>(C)</b> attaches a stray minus to cos${NB}${fr('π', '6')}: the minus belongs to the derivative of cos${NB}${x} (−sin${NB}${x}), not of sin${NB}${x}.` },
          { label: '1', nudge: '<b>(D)</b> guesses the “standard limit = 1” reflex without identifying the derivative.' },
        ],
        correct: 1,
        solution: `This limit is ${fp(fr('π', '6'))} = cos ${fr('π', '6')} = ${fr('√3', '2')}.`,
      },
      {
        t: 'mcq',
        q: `If a function <i>f</i> is differentiable at ${x} = ${a}, then at ${x} = ${a} the function <i>f</i> is necessarily`,
        opts: [
          { label: 'continuous', nudge: null },
          { label: 'constant', nudge: '<b>(B)</b> confuses “has a derivative” with “derivative is zero.”' },
          { label: 'increasing', nudge: '<b>(C)</b> assumes a positive slope.' },
          { label: 'only bounded, not continuous', nudge: `<b>(D)</b> denies the very continuity that differentiability guarantees (differentiable at ${a} ⇒ continuous at ${a}). <i>f</i> is bounded near ${a} too, but “not continuous” is false.` },
        ],
        correct: 0,
        solution: `Differentiability at a point forces continuity there (the converse fails: |${x}| at 0).`,
      },
      {
        t: 'mcq',
        q: `${D}(tan ${x}) equals`,
        opts: [
          { label: SEC2, nudge: null },
          { label: `−${CSC2}`, nudge: `<b>(B)</b> is the derivative of cot ${x}.` },
          { label: `sec ${x} tan ${x}`, nudge: `<b>(C)</b> is the derivative of sec ${x}.` },
          { label: `cot ${x}`, nudge: '<b>(D)</b> confuses the derivative with the cofunction.' },
        ],
        correct: 0,
        solution: `From the quotient rule, ${DTAN}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Mixing up ${fp(a)} and ${fp(x)}.</b> ${fp(a)} is a single number (a slope at one point); ${fp(x)} is a whole new function. Boards penalise leaving an ${x} where a number belongs.`,
          `<b>The wrong product rule.</b> (${u}${v})′ ≠ ${u}′${v}′. It is ${u}′${v} + ${u}${v}′: the cross term is non-negotiable.`,
          `<b>Cancelling ${h} too early / skipping the limit.</b> You may only cancel ${h} after simplifying the numerator, and you must still write the ${LH} step; dropping it loses method marks and hides errors.`,
          `<b>Assuming continuous ⇒ differentiable.</b> It’s one-way. Corners (|${x}|), cusps, and vertical tangents are continuous but not differentiable.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed + accuracy):</b> train your eye to spot a <b>disguised derivative</b>: any limit of the form<br>${DQA}<br>or ${DQX} is just ${fp(a)}; never expand it by hand. And in every first-principle derivation of a sin, cos, or ${EX}, your single goal is to manufacture a standard limit (${fr('sin <i>θ</i>', '<i>θ</i>')} or ${fr(`${pw(e, '<i>θ</i>')} − 1`, '<i>θ</i>')}): factor out the base function and the junction appears.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Definition', note: `${fp(x)} = ${LH} ${DQ}<br>= ${LTX} ${DQT}` },
          { f: 'Means', note: 'slope of the tangent (= tan <i>ψ</i>) = instantaneous rate of change.' },
          { f: 'Standard set', note: `${DXN};<br>${DSIN};<br>${DCOS};<br>${DEX};<br>${DLN};<br>${DTAN}` },
          {
            f: 'Product rule (derived here from first principle)',
            note: `${PROD}. Full rule set (quotient, chain) → <b>Topic 04.</b>`,
          },
          {
            f: 'Existence',
            note: `${fp(a)} exists ⟺ LHD = RHD (both finite). <b>Differentiable</b> ⇒ <b>continuous</b> (not conversely).`,
          },
        ],
        aids: [
          '“Secant slides into tangent.” (the geometric meaning)',
          `“Product rule: first-d-second plus second-d-first.” (${u}′${v} + ${u}${v}′)`,
          `“${DQA} is a derivative in disguise.”`,
          `“${EX} is its own echo.” (derivative of ${EX} is ${EX})`,
        ],
      },
    ],
  },

  // ──────────────── Topic 04 · pp. 1084–1089 ────────────────
  {
    n: '04',
    title: 'Rules of Differentiation',
    kalam: 'Every rule answers one question: how does the derivative interact with an arithmetic operation?',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'This is the computational engine of calculus: once the rules are in hand, almost nothing needs first principles again. <b>CBSE Boards</b> test products and quotients directly (3–4 marks). <b>JEE Main</b> uses these rules in essentially every calculus question. <b>JEE Advanced</b> assumes total fluency, especially the chain rule. (Note: the chain rule formally sits in the Class 12 syllabus, but it is standard in Class 11 JEE coaching and is included here as a bridge.)',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'In Topic 03 you ground out derivatives the honest way: from the limit definition. It works, but it is slow, like grinding wheat into atta by hand. Nobody does that daily. Once a few key derivatives and combination rules are proven from first principle (which we did), we switch to the <b>flour mill</b>: a small set of rules that produce the same answers in a fraction of the time. This topic is that mill.',
      },
      {
        t: 'p',
        html: `Every rule answers one question: how does the derivative interact with an arithmetic operation?<br>• <b>Addition</b> is friendly; derivatives just add: (${u} + ${v})${WJ}′ = ${u}′ + ${v}′.<br>• <b>Multiplication</b> is the first surprise: derivatives do <b>not</b> simply multiply. The correct law is the <b>product rule</b> ${PROD}, and the reason (Topic 03) is the leftover cross-term.<br>• <b>Division</b> has its own <b>quotient rule</b>.<br>• <b>Composition</b>, a function inside another function, is the subtle and most powerful one: the <b>chain rule</b>.`,
      },
      {
        t: 'p',
        html: `<b>The chain rule, intuitively: rates multiply.</b> Suppose ${y} changes 3 times as fast as ${u}, and ${u} changes 2 times as fast as ${x}. Then how fast does ${y} change with ${x}? Six times. The rates cascade by multiplication.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> picture a set of gears. A large gear turns a medium gear, which turns a small wheel. If the medium gear spins twice for each turn of the large one, and the wheel spins three times per medium turn, the wheel spins six times per large turn: you multiply the gear ratios. Or think of currency:<br>${fr('rupees', 'dollar')} × ${fr('dollars', 'euro')} = ${fr('rupees', 'euro')}.<br>The intermediate unit cancels, and the rates chain. That is exactly<br>${CHAIN}.`,
      },
      { t: 'fig', id: 'm11-12-fig-12.5' },
      {
        t: 'p',
        html: `<b>Limiting Conditions & Assumptions:</b><br>1. <b>Quotient rule needs</b> ${v}${NB}≠${NB}0 at the point: you cannot divide by a vanishing denominator.<br>2. <b>Chain rule needs both links differentiable</b>: the inner function <i>g</i> at ${x}, and the outer function <i>f</i> at ${u} = <i>g</i>(${x}). (The rule needs this; the composite itself can be differentiable without it: |${x}|<sup>2</sup> = ${sq(x)} at ${x} = 0.)<br>3. <b>Don’t reach for a rule when algebra is faster.</b> If an expression simplifies first (e.g. ${fr(`${sq(x)} + 1`, x)} = ${x} + ${INV_X}), simplify, then differentiate.<br>4. <b>Product rule extends to many factors</b>: differentiate one factor at a time and add the results.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `<b>Note:</b> these are operational identities. Throughout, ${u} = ${f(x)} and ${v} = <i>g</i>(${x}) are differentiable functions and <i>c</i> is a constant.`,
      },
      {
        t: 'formula',
        kicker: 'Sum, product, quotient and reciprocal rules',
        main: `(${u} ± ${v})′ = ${u}′ ± ${v}′<br>(<i>c</i>${NB}${u})′ = <i>c</i>${NB}${u}′<br>Product: ${PROD}<br>Quotient: ${QUOT} (${v}${NB}≠${NB}0)<br>Reciprocal: (${fr('1', v)})′ = −${fr(`${v}′`, sq(v))}`,
        legend: [
          `${u} = a differentiable function ${f(x)}`,
          `${v} = a differentiable function <i>g</i>(${x})`,
          `${u}′, ${v}′ = the derivatives of ${u} and ${v}`,
          '<i>c</i> = a constant',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Product of three functions',
        main: `(${u}${v}<i>w</i>)′ = ${u}′${v}<i>w</i> + ${u}${v}′<i>w</i> + ${u}${v}<i>w</i>′`,
        legend: [`${u}, ${v}, <i>w</i> = differentiable functions of ${x}`],
        note: null,
      },
      {
        t: 'formula',
        kicker: `Chain rule (composite ${y} = ${f(u)}, ${u}${NB}=${NB}<i>g</i>(${x}))`,
        main: `${CHAIN}<br>= ${fp(`<i>g</i>(${x})`)} · <i>g</i>′(${x})`,
        legend: [
          `${y} = the outer function ${f(u)}`,
          `${u} = the inner function <i>g</i>(${x}) (<i>g</i> differentiable at ${x}, <i>f</i> at ${u})`,
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Power chain rule (the most-used special case)',
        main: `${D}[<i>g</i>(${x})]<sup><i>n</i></sup> = ${n}${NB}[<i>g</i>(${x})]<sup><i>n</i>−1</sup> · <i>g</i>′(${x})`,
        legend: [`<i>g</i>(${x}) = the inner function`, `${n} = the power`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Standard derivatives',
        main: `${DXN}<br>${DSIN}<br>${DCOS}<br>${DEX}<br>${DLN}`,
        legend: [`${x} = the variable (${x}${NB}>${NB}0 for ln ${x})`, `${n} = the power`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Derivatives of tan, cot, sec and csc',
        main: `${DTAN}<br>${DCOT}<br>${DSEC}<br>${DCSC}`,
        legend: [`${x} = the variable`],
        note: null,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: '<b>Product rule</b>, proven from first principle in Topic 03 (add-and-subtract cross-term trick). Here we simply use it.',
      },
      {
        t: 'p',
        html: `<b>Quotient rule, derived elegantly from the product rule.</b> Let ${y} = ${fr(u, v)}, so ${u} = ${y}${NB}${v}. Differentiate both sides with the product rule:<br>${u}′ = ${y}′${NB}${v} + ${y}${NB}${v}′.<br>Solve for ${y}′ and substitute ${y} = ${fr(u, v)}:<br>${y}′ = ${fr(`${u}′ − ${y}${NB}${v}′`, v)}<br>= ${fr(`${u}′${v} − ${u}${v}′`, sq(v))}.<br>Notice the rules interlock: the quotient rule is just the product rule rearranged. (This is also why the order ${u}′${v} − ${u}${v}′ matters: swap it and the sign flips.)`,
      },
      {
        t: 'p',
        html: `<b>Completing the trig table with the quotient rule.</b> The three reciprocal trig derivatives are quick consequences. For cot ${x} = ${fr(`cos ${x}`, `sin ${x}`)}:<br>${D} cot ${x}<br>= ${fr(`(−sin ${x})(sin ${x}) − (cos ${x})(cos ${x})`, `sin<sup>2</sup>${NB}${x}`)}<br>= ${fr(`−(sin<sup>2</sup>${NB}${x} + cos<sup>2</sup>${NB}${x})`, `sin<sup>2</sup>${NB}${x}`)}<br>= −${fr('1', `sin<sup>2</sup>${NB}${x}`)} = −${CSC2}.<br><br>For sec ${x} = ${fr('1', `cos ${x}`)}, the reciprocal rule gives<br>${D} sec ${x} = −${fr(`−sin ${x}`, `cos<sup>2</sup>${NB}${x}`)}<br>= ${fr(`sin ${x}`, `cos<sup>2</sup>${NB}${x}`)} = sec ${x} tan ${x};<br>identically, ${DCSC}. That closes the full set of six.`,
      },
      {
        t: 'p',
        html: `<b>Chain rule: why rates multiply.</b> For a composite ${y} = <i>f</i>(<i>g</i>(${x})), look at the average rates over a small step and insert the intermediate change Δ${u}:<br>${fr(`Δ${y}`, `Δ${x}`)} = ${fr(`Δ${y}`, `Δ${u}`)} · ${fr(`Δ${u}`, `Δ${x}`)}.<br>As Δ${x} → 0, Δ${u} → 0 too (the inner function is continuous), and each factor tends to its derivative, giving ${CHAIN}. (A fully rigorous proof patches the case Δ${u} = 0, but the cancelling-rates picture is the right intuition.)`,
      },
      {
        t: 'proc',
        title: 'Procedure: how to differentiate any expression',
        steps: [
          '<b>Simplify first</b> if algebra makes it cleaner (expand products, split fractions).',
          '<b>Identify the outermost operation</b>: is the whole thing a sum, a product, a quotient, or a composition?',
          'Apply that rule, generating derivative-of-sub-pieces as new sub-problems.',
          '<b>For compositions, peel outside-in:</b> differentiate the outer function (keeping the inside intact), then multiply by the derivative of the inside, and repeat for each nested layer.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Differentiate ${y} = ${pw(x, '3')} sin ${x}.`,
        steps: [
          `A product of ${u} = ${pw(x, '3')} and ${v} = sin ${x}, with ${u}′ = 3${sq(x)}, ${v}′ = cos ${x}. By the product rule:<br>${DYDX} = ${u}′${v} + ${u}${v}′<br>= 3${sq(x)} sin ${x} + ${pw(x, '3')} cos ${x}.`,
        ],
        ans: `${sq(x)}(3 sin ${x} + ${x} cos ${x})`,
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: `Differentiate ${y} = ${fr(`${sq(x)} + 1`, x)}.`,
        steps: [
          `<b>The trap:</b> students immediately fire the quotient rule and wade through<br>${fr(`(2${x})(${x}) − (${sq(x)} + 1)(1)`, sq(x))}. It works, but it’s slow and error-prone. <b>Simplify first:</b><br>${y} = ${fr(`${sq(x)} + 1`, x)} = ${x} + ${INV_X}<br>= ${x} + ${pw(x, '−1')}<br>⇒ ${DYDX} = 1 − ${pw(x, '−2')} = 1 − ${fr('1', sq(x))}.`,
          '<b>Lesson:</b> always ask “can I simplify before I differentiate?”: it often turns a quotient-rule slog into one line.',
        ],
        ans: `1 − ${fr('1', sq(x))}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main: Multi-Concept',
        q: `Differentiate ${y} = ${sq(x)} cos(3${x}). (Combines the product rule with the chain rule.)`,
        steps: [
          `Product of ${u} = ${sq(x)} and ${v} = cos(3${x}). For ${v}′, the chain rule: outer cos(·) → −sin(·), inner 3${x} → 3, so ${v}′ = −sin(3${x}) · 3 = −3${NB}sin(3${x}). Then:<br>${DYDX} = ${u}′${v} + ${u}${v}′<br>= 2${x} cos(3${x}) + ${sq(x)}(−3 sin(3${x})).`,
        ],
        ans: `2${x} cos(3${x}) − 3${sq(x)} sin(3${x})`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Differentiate ${y} = sin(cos(${sq(x)})).`,
        steps: [
          `<b>Three nested layers</b>; peel outside-in:<br>• Outermost: sin(box), derivative cos(box), keep box = cos(${sq(x)}) intact ⇒ cos(cos(${sq(x)})).<br>• Next layer: derivative of cos(${sq(x)}) is −sin(${sq(x)}) · (derivative of ${sq(x)}).<br>• Innermost: derivative of ${sq(x)} is 2${x}.`,
          `Multiply the chain of all three:<br>${DYDX} = cos(cos(${sq(x)})) · (−sin(${sq(x)})) · 2${x}<br>= −2${x} sin(${sq(x)}) cos(cos(${sq(x)})).`,
          '<b>Skill tested:</b> disciplined layer-by-layer chaining: one missed inner derivative and the whole answer is wrong.',
        ],
        ans: `−2${x} sin(${sq(x)}) cos(cos(${sq(x)}))`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `[CBSE] Differentiate ${y} = ${pw(x, '4')} + 3${sq(x)} − 7.`, a: `4${pw(x, '3')} + 6${x}` },
          { q: `[CBSE] Differentiate ${y} = (2${x} + 1)(${x} − 3).`, a: `4${x} − 5` },
          { q: `[JEE Main] Differentiate ${y} = ${fr(x, `${sq(x)} + 1`)}.`, a: fr(`1 − ${sq(x)}`, `(${sq(x)} + 1)<sup>2</sup>`) },
          { q: `[JEE Main] Differentiate ${y} = cos(5${sq(x)}).`, a: `−10${x} sin(5${sq(x)})` },
          {
            q: `[JEE Advanced] Differentiate ${y} = (1 + ${sq(x)})<sup>10</sup> sin ${x}.`,
            a: `20${x}(1 + ${sq(x)})<sup>9</sup> sin ${x} + (1 + ${sq(x)})<sup>10</sup> cos ${x}`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `${D}[(${sq(x)} + 1)<sup>3</sup>] equals`,
        opts: [
          {
            label: `3(${sq(x)} + 1)<sup>2</sup>`,
            nudge: '<b>(A)</b> is the single most common chain-rule error: forgetting to multiply by the inner derivative.',
          },
          { label: `6${x}(${sq(x)} + 1)<sup>2</sup>`, nudge: null },
          {
            label: `3(${sq(x)} + 1)<sup>2</sup> · 2`,
            nudge: `<b>(C)</b> uses 2 (a stray constant) instead of the inner derivative 2${x}.`,
          },
          { label: `2${x}`, nudge: '<b>(D)</b> keeps only the inner derivative and drops the outer.' },
        ],
        correct: 1,
        solution: `Power chain rule:<br>3(${sq(x)} + 1)<sup>2</sup> · ${D}(${sq(x)} + 1)<br>= 3(${sq(x)} + 1)<sup>2</sup> · 2${x}<br>= 6${x}(${sq(x)} + 1)<sup>2</sup>.`,
      },
      {
        t: 'mcq',
        q: `${D}(${x} sin ${x}) equals`,
        opts: [
          { label: `cos ${x}`, nudge: '<b>(A)</b> and <b>(C)</b> each keep only one term of the product rule.' },
          { label: `sin ${x} + ${x} cos ${x}`, nudge: null },
          { label: `${x} cos ${x}`, nudge: '<b>(A)</b> and <b>(C)</b> each keep only one term of the product rule.' },
          { label: `sin ${x} − ${x} cos ${x}`, nudge: '<b>(D)</b> mis-signs the second term (no minus appears in the product rule).' },
        ],
        correct: 1,
        solution: `Product rule: (1) sin ${x} + ${x}(cos ${x}) = sin ${x} + ${x} cos ${x}.`,
      },
      {
        t: 'mcq',
        q: `If ${y} = ${pw(u, '3')} and ${u} = 2${x} + 1, then ${DYDX} at ${x} = 0 equals`,
        opts: [
          { label: '3', nudge: `<b>(A)</b> uses only ${DYDU} = 3${sq(u)} = 3.` },
          { label: '6', nudge: null },
          { label: '2', nudge: `<b>(C)</b> uses only ${DUDX} = 2.` },
          {
            label: '12',
            nudge: `<b>(D)</b> substitutes ${u} = 2 rather than ${u} = 1 and stops at 3${sq(u)}, giving 3 · 4 = 12: a substitution slip.`,
          },
        ],
        correct: 1,
        solution: `Chain rule: ${CHAIN} = 3${sq(u)} · 2. At ${x} = 0, ${u} = 1, so = 3(1)<sup>2</sup> · 2 = 6.`,
      },
      {
        t: 'mcq',
        q: `${D}[sin(${sq(x)})] equals`,
        opts: [
          { label: `cos(${sq(x)})`, nudge: '<b>(A)</b> forgets the inner derivative (the chain-rule classic).' },
          { label: `2${x} cos(${sq(x)})`, nudge: null },
          { label: `2${x} cos ${x}`, nudge: `<b>(C)</b> keeps the inner derivative 2${x} but drops the square inside the cosine: the outer derivative is cos(${sq(x)}), with the inside kept whole, not cos ${x}.` },
          { label: `cos(2${x})`, nudge: '<b>(D)</b> puts the inner derivative inside the cosine instead of multiplying by it: there is no such rule.' },
        ],
        correct: 1,
        solution: `Chain rule: cos(${sq(x)}) · ${D}(${sq(x)}) = 2${x} cos(${sq(x)}).`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Forgetting the inner derivative (chain rule).</b> ${D} sin(${sq(x)}) = cos(${sq(x)}) is <b>wrong</b>; it’s 2${x}${NB}cos(${sq(x)}). Every composition contributes a “×${NB}derivative of the inside.”`,
          `<b>Wrong product rule.</b> (${u}${v})′ ≠ ${u}′${v}′. It is ${u}′${v} + ${u}${v}′: always two terms.`,
          `<b>Quotient-rule order/sign.</b> The numerator is ${u}′${v} − ${u}${v}′ (top-derivative-times-bottom first). Reversing it flips the sign and the answer.`,
          '<b>Skipping simplification.</b> Differentiating an unsimplified quotient or product wastes time and multiplies error chances. Simplify, then differentiate.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed + accuracy):</b> for compositions, say the mantra <b>“derivative of the outside (inside kept whole), times derivative of the inside,”</b> and repeat for each layer until you hit ${x}. For three-or-more-factor products, <b>differentiate one factor at a time and add</b>: no need to group. And before any rule, glance for an algebraic simplification that makes the whole thing trivial.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Sum/scalar', note: `(${u} ± ${v})′ = ${u}′ ± ${v}′; (<i>c</i>${u})′ = <i>c</i>${u}′` },
          { f: 'Product', note: `${PROD} (three: ${u}′${v}<i>w</i> + ${u}${v}′<i>w</i> + ${u}${v}<i>w</i>′)` },
          { f: 'Quotient', note: `${QUOT}, ${v}${NB}≠${NB}0` },
          { f: 'Chain', note: `${CHAIN};<br><b>Power chain:</b> ${POWCH}` },
          { f: 'Simplify before differentiating whenever you can.', note: '' },
        ],
        aids: [
          '“Low d-high minus high d-low, over low-squared, away we go.” (quotient rule)',
          '“First d-second plus second d-first.” (product rule)',
          '“Outside derivative, times inside derivative.” (chain rule: never drop the inside)',
          '“Rates cascade: gears multiply.” (chain rule intuition)',
        ],
      },
    ],
  },

  // ──────────────── Topic 05 · pp. 1090–1097 ────────────────
  {
    n: '05',
    title: 'Limits at Infinity & Special Cases of Existence',
    kalam: 'This topic closes the two situations the earlier ones set aside: what happens as x runs to infinity, and what happens at a jump.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `<b>JEE Main</b> reliably asks one limit-at-infinity question (rational end-behaviour or an ∞ − ∞ surd) every session ${ESTIMATE}. <b>CBSE Boards</b> test rational end-behaviour and a “does the limit exist” greatest-integer/modulus case (1–2 marks). <b>JEE Advanced</b> favours these inside assertion-reason and sandwich-theorem problems. This topic closes the two situations the earlier ones set aside: what happens as ${x} runs to infinity, and what happens at a jump.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `So far every limit asked the same question: as ${x} creeps up to a finite point ${a}, what finite value does <i>f</i> approach? Two situations escape that mould, and a complete picture of limits needs both.`,
      },
      {
        t: 'p',
        html: `<b>First: end behaviour, where does <i>f</i> head as ${x} → ∞?</b> Picture zooming out on a graph until the fine detail vanishes and only the overall trend remains. For a function like ${fr(`3${sq(x)} + 5`, `6${sq(x)} − ${x}`)}, the small terms (+5, −${x}) become irrelevant far out: only the highest powers matter, and the function settles toward ${fr('3', '6')} = ${fr('1', '2')}. The dominant term wins, the way the single ₹500 note in your wallet decides its value no matter how many coins rattle alongside it.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> for a rational function as ${x} → ∞, mentally erase everything except the highest power of ${x} on top and bottom. Their ratio is the limit. Everything else is noise that ${INV_X} → 0 washes away.`,
      },
      {
        t: 'p',
        html: `<b>Second: the limit can fail at a jump, or be infinite.</b> Think of an autorickshaw fare meter, or electricity billed in slabs: the charge holds flat, then jumps at each boundary. Approach a boundary from the left and you read the lower slab; approach from the right and you read the higher one. The two disagree, so there is no single value being approached: the limit <b>does not exist</b> at the jump. The <b>greatest integer function</b> ${GIF} (the largest integer ≤ ${x}) is exactly this staircase, and it is the classic exam vehicle for testing whether you really understand one-sided limits.`,
      },
      { t: 'fig', id: 'm11-12-fig-12.6' },
      {
        t: 'p',
        html: `<b>Limiting Conditions & Assumptions:</b><br>1. <b>∞ is a direction, not a number.</b> You cannot do ordinary arithmetic with it. ∞ − ∞ and ${II} are <b>indeterminate</b>: they must be resolved, never assumed to be 0 or 1.<br>2. <b>“Limit = ∞” describes behaviour, not a value.</b> It means <i>f</i> grows without bound; in the strict finite sense the limit does not exist, but we write ∞ to record how it fails.<br>3. <b>One-sided infinite limits can disagree in sign.</b> ${INV_X} → +∞ as ${x} → 0<sup>+</sup> but → −∞ as ${x} → 0<sup>−</sup>.<br>4. <b>At any jump, existence is a one-sided question.</b> For greatest-integer, modulus, signum, or piecewise functions, you must compute LHL and RHL separately (the Topic 01 existence rule): never substitute blindly.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: '<b>Note:</b> this section gives the end-behaviour rules and the facts about jump functions.' },
      {
        t: 'formula',
        kicker: `Powers at infinity (for ${k}${NB}>${NB}0)`,
        main: `${LXI} ${fr('1', pw(x, k))} = 0<br>${LXI} ${pw(x, k)} = ∞`,
        legend: [`${k} = a positive power`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Rational functions at infinity (the degree rule)',
        main: `${LXI} ${fr(`<i>a</i><sub><i>m</i></sub>${pw(x, '<i>m</i>')} + ⋯`, `<i>b</i><sub><i>n</i></sub>${XN} + ⋯`)}<br>= 0${NB}${NB}(<i>m</i>${NB}<${NB}${n})<br>= ${fr('<i>a</i><sub><i>m</i></sub>', '<i>b</i><sub><i>n</i></sub>')}${NB}${NB}(<i>m</i>${NB}=${NB}${n})<br>= ±∞${NB}${NB}(<i>m</i>${NB}>${NB}${n}; the sign of ${fr('<i>a</i><sub><i>m</i></sub>', '<i>b</i><sub><i>n</i></sub>')})`,
        legend: [
          '<i>m</i> = the degree of the numerator',
          `${n} = the degree of the denominator`,
          '<i>a</i><sub><i>m</i></sub> = the leading coefficient on top',
          '<i>b</i><sub><i>n</i></sub> = the leading coefficient below',
          `${x} = the variable (${x} → ∞)`,
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Infinite limits (vertical-asymptote behaviour)',
        main: `${lim(`${x}→0`)} ${fr('1', sq(x))} = +∞<br>${LX0P} ${INV_X} = +∞<br>${lim(`${x}→0<sup>−</sup>`)} ${INV_X} = −∞`,
        legend: [`${x} = the variable approaching 0`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Limits of the greatest integer function',
        main: `For an <b>integer</b> ${n}:<br>${lim(`${x}→${n}<sup>−</sup>`)}${GIF} = ${n} − 1<br>${lim(`${x}→${n}<sup>+</sup>`)}${GIF} = ${n}<br>⇒ ${lim(`${x}→${n}`)}${GIF} <b>does not exist</b><br>For a <b>non-integer</b> ${a}:<br>${LXA}${GIF} = [${a}] (since ${GIF} is locally constant there)`,
        legend: [`${GIF} = the largest integer ≤ ${x}`, `${n} = an integer`, `${a} = a non-integer`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Modulus & signum',
        main: `${LXA} |${x}| = |${a}| (exists everywhere)<br>${lim(`${x}→0`)} ${fr(`|${x}|`, x)} <b>does not exist</b> (LHL = −1, RHL = +1)`,
        legend: [`${x} = the variable`, `${a} = any real point`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Indeterminate ∞-forms to watch:</b> ${II}, ∞ − ∞, 0 × ∞, ${ZZ} (the last reappears here too).`,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: `<b>Procedure A: rational limit as ${x} → ∞ (the divide-by-highest-power method).</b> Divide every term in numerator and denominator by the <b>highest power of ${x} in the denominator</b>, then send each ${fr('1', pw(x, k))} → 0. The survivors give the answer. (The degree rule in the Key formulas and definitions part is just the shortcut this method always produces.)`,
      },
      {
        t: 'p',
        html: `<b>Procedure B: the ∞ − ∞ surd trick.</b> A difference like √big − √big is indeterminate. <b>Rationalise</b> by the conjugate to turn it into a single fraction, then divide by the highest power:<br>√(${sq(x)} + ${b}${x}) − ${x}<br>= (√(${sq(x)} + ${b}${x}) − ${x})<br>· ${fr(`√(${sq(x)} + ${b}${x}) + ${x}`, `√(${sq(x)} + ${b}${x}) + ${x}`)}<br>= ${fr(`${b}${x}`, `√(${sq(x)} + ${b}${x}) + ${x}`)}<br>→<sup>÷${x}</sup> ${fr(b, `√(1 + ${fr(b, x)}) + 1`)} → ${fr(b, '2')}.`,
      },
      { t: 'p', html: 'Never substitute. Instead:' },
      {
        t: 'proc',
        title: 'Procedure C: existence at a jump (piecewise / greatest-integer / modulus)',
        steps: [
          'Identify which rule/piece applies just to the <b>left</b> of the point, and compute the LHL.',
          'Identify which applies just to the <b>right</b>, and compute the RHL.',
          '<b>Compare:</b> equal and finite ⇒ the limit exists and equals that common value; otherwise it does not exist. (This is the Topic 01 existence rule doing all the work.)',
        ],
      },
      {
        t: 'p',
        html: `For the greatest integer function near an integer ${n}: just below ${n}, ${GIF} = ${n} − 1; just above, ${GIF} = ${n}. The two differ by 1, so the limit always fails at integers: the signature result.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Evaluate<br>${LXI} ${fr(`3${sq(x)} + 2${x} − 1`, `5${sq(x)} − ${x} + 4`)}.`,
        steps: [
          `Divide every term by ${sq(x)} (highest power in the denominator):<br>${LXI} ${fr(`3 + ${fr('2', x)} − ${fr('1', sq(x))}`, `5 − ${INV_X} + ${fr('4', sq(x))}`)}.`,
          `As ${x} → ∞, every ${fr('1', pw(x, k))} → 0, leaving ${fr('3', '5')}.`,
          '(Equal degrees ⇒ ratio of leading coefficients: the shortcut in the Key formulas and definitions part agrees.)',
        ],
        ans: fr('3', '5'),
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: `Evaluate ${LXI} (√(${sq(x)} + ${x}) − ${x}).`,
        steps: [
          `<b>The trap:</b> writing “∞ − ∞ = 0.” It is indeterminate. Rationalise:<br>√(${sq(x)} + ${x}) − ${x}<br>= ${fr(`(${sq(x)} + ${x}) − ${sq(x)}`, `√(${sq(x)} + ${x}) + ${x}`)}<br>= ${fr(x, `√(${sq(x)} + ${x}) + ${x}`)}.`,
          `Divide top and bottom by ${x} (note √${sq(x)} = ${x} for ${x} → +∞):<br>= ${fr('1', `√(1 + ${INV_X}) + 1`)}<br>→ ${fr('1', '√1 + 1')}.`,
        ],
        ans: fr('1', '2'),
      },
      {
        t: 'ex',
        tag: 'JEE Main: Multi-Concept',
        q: `Evaluate ${LXI} (${fr(`${sq(x)} + 1`, `${x} + 1`)} − ${x}). (A disguised ∞ − ∞ that combines algebraic simplification with the degree rule.)`,
        steps: [
          `Combine over a common denominator first:<br>${fr(`${sq(x)} + 1`, `${x} + 1`)} − ${x}<br>= ${fr(`${sq(x)} + 1 − ${x}(${x} + 1)`, `${x} + 1`)}<br>= ${fr(`${sq(x)} + 1 − ${sq(x)} − ${x}`, `${x} + 1`)}<br>= ${fr(`1 − ${x}`, `${x} + 1`)}.`,
          `Now it is an ordinary rational limit (equal degrees, leading coefficients −1 and 1):<br>${LXI} ${fr(`1 − ${x}`, `${x} + 1`)} = ${fr('−1', '1')}.`,
        ],
        ans: '−1',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Evaluate ${LX0P} ${x}${NB}[${INV_X}], where ${DOT} is the greatest integer function.`,
        steps: [
          `<b>The idea:</b> ${DOT} resists substitution, so bound it. By definition [${INV_X}] = ${INV_X} − ${FRACPART}, where the fractional part satisfies 0 ≤ ${FRACPART} < 1. Multiply by ${x}${NB}>${NB}0:<br>${x}${NB}[${INV_X}] = ${x}(${INV_X} − ${FRACPART})<br>= 1 − ${x}${NB}${FRACPART}.`,
          `Since 0 ≤ ${x}${NB}${FRACPART} < ${x}, and ${x} → 0<sup>+</sup>, the <b>sandwich theorem</b> (Topic 02) forces ${x}${NB}${FRACPART} → 0. Therefore<br>${LX0P} ${x}${NB}[${INV_X}] = 1 − 0 = 1.`,
          '<b>Deep point:</b> a greatest-integer expression that looks hopeless becomes a clean sandwich once you split off the fractional part.',
        ],
        ans: '1',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `[CBSE] Evaluate ${LXI} ${fr(`4${x} + 3`, `2${x} − 1`)}.`, a: '2' },
          { q: `[CBSE] Evaluate ${LXI} ${fr(`${sq(x)} + 1`, `${pw(x, '3')} + ${x}`)}.`, a: '0' },
          { q: `[JEE Main] Evaluate ${LXI} (√(4${sq(x)} + ${x}) − 2${x}).`, a: fr('1', '4') },
          {
            q: `[JEE Main] Does ${lim(`${x}→1`)}${GIF} exist (${DOT} = greatest integer)? Justify with one-sided limits.`,
            a: 'Does <b>not</b> exist (LHL = 0, RHL = 1)',
          },
          {
            q: `[JEE Advanced] Evaluate ${LXI} (${fr(`3${pw(x, '4')} + 2${sq(x)}`, `${sq(x)} − 1`)} − 3${sq(x)}).`,
            a: '5',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `${LXI} ${fr(`5${pw(x, '3')} + 2${x}`, `3${pw(x, '3')} − ${sq(x)} + 1`)} equals`,
        opts: [
          { label: fr('5', '3'), nudge: null },
          { label: '0', nudge: `<b>(B)</b> is the <i>m</i>${NB}<${NB}${n} case (wrong here).` },
          { label: '∞', nudge: `<b>(C)</b> is the <i>m</i>${NB}>${NB}${n} case.` },
          { label: '5', nudge: '<b>(D)</b> forgets to divide by the denominator’s leading coefficient 3.' },
        ],
        correct: 0,
        solution: `Equal degrees (<i>m</i> = ${n} = 3) ⇒ ratio of leading coefficients = ${fr('5', '3')}.`,
      },
      {
        t: 'mcq',
        q: `${LX0P} ${INV_X} equals`,
        opts: [
          { label: '0', nudge: `<b>(A)</b> confuses ${INV_X} at large ${x} with small ${x}.` },
          { label: '+∞', nudge: null },
          { label: '−∞', nudge: '<b>(C)</b> is the left-hand limit (wrong side).' },
          { label: '1', nudge: `<b>(D)</b> has no basis: near 0<sup>+</sup>, ${INV_X} is not near 1; it passes every number.` },
        ],
        correct: 1,
        solution: `Approaching 0 from the positive side, ${INV_X} grows without bound to +∞.`,
      },
      {
        t: 'mcq',
        q: `${lim(`${x}→2`)}${GIF}, where ${DOT} is the greatest integer function, is`,
        opts: [
          { label: '2', nudge: '<b>(A)</b> reports only the RHL (or the value [2] = 2).' },
          { label: '1', nudge: '<b>(B)</b> reports only the LHL.' },
          { label: 'does not exist', nudge: null },
          { label: '1.5', nudge: '<b>(D)</b> invents an average.' },
        ],
        correct: 2,
        solution: `Just below 2, ${GIF} = 1 (LHL = 1); just above, ${GIF} = 2 (RHL = 2). They differ, so the limit does not exist.`,
      },
      {
        t: 'mcq',
        q: `${LXI} (√(${sq(x)} + 3${x}) − ${x}) equals`,
        opts: [
          { label: '0', nudge: '<b>(A)</b> is the “∞ − ∞ = 0” fallacy.' },
          { label: fr('3', '2'), nudge: null },
          { label: '∞', nudge: '<b>(C)</b> assumes the root dominates without cancellation.' },
          { label: '3', nudge: '<b>(D)</b> keeps the 3 but forgets the ÷2.' },
        ],
        correct: 1,
        solution: `Rationalising gives<br>${fr(`3${x}`, `√(${sq(x)} + 3${x}) + ${x}`)} → ${fr('3', '2')} (the ${fr(b, '2')} rule with ${b} = 3).`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Treating ∞ − ∞ = 0 or ${II} = 1.</b> Both are indeterminate; rationalise or use the degree rule.`,
          `<b>Substituting into a jump function.</b> For ${GIF}, ${fr(`|${x}|`, x)}, signum, or piecewise functions, you must split into LHL and RHL: direct substitution is meaningless at the jump.`,
          '<b>Dividing by the wrong power.</b> For rational limits at ∞, divide by the highest power in the denominator; picking the wrong power scrambles the answer.',
          '<b>Treating ∞ as a number.</b> “lim = ∞” is a behaviour statement, not a value you can add or cancel.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed + accuracy):</b> for any rational function as ${x} → ∞, skip the algebra and use the <b>three-case degree rule</b>: smaller-top → 0, equal → leading-coefficient ratio, bigger-top → ±∞. For surd ∞ − ∞, rationalise on sight. And for anything with ${DOT}, |·|, signum, or a piecewise definition, your first reflex is always <b>“split into LHL and RHL.”</b>`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Powers', note: `${fr('1', pw(x, k))} → 0, ${pw(x, k)} → ∞ (${k}${NB}>${NB}0, ${x} → ∞).` },
          { f: 'Rational at ∞ (degree rule)', note: 'top-degree < bottom → 0; = → ratio of leading coeffs; > → ±∞.' },
          { f: '∞ − ∞ surds', note: 'rationalise by the conjugate, then divide by the highest power.' },
          { f: 'Infinite limits', note: `${fr('1', sq(x))} → +∞ (${x} → 0); ${INV_X} → +∞ (0<sup>+</sup>), −∞ (0<sup>−</sup>).` },
          {
            f: `Greatest integer at integer ${n}`,
            note: `LHL = ${n} − 1, RHL = ${n} ⇒ limit <b>DNE</b>; at a non-integer ${a}, ${LXA}${GIF} = [${a}].`,
          },
          { f: 'Existence at a jump', note: 'always split into LHL & RHL and compare.' },
        ],
        aids: [
          '“Far out, only the top powers matter.” (rational end-behaviour)',
          '“∞ − ∞ is a question, not zero.”',
          '“Steps and bars and bends: split it into two ends.” (GIF/modulus/piecewise existence)',
        ],
      },

      // The book's "Master Reference — Chapter 12 at a Glance" (pp. 1096–1097).
      { t: 'part', title: 'Chapter 12 at a glance' },
      {
        t: 'p',
        html: '<b>How to use this section.</b> Everything taught across topics 01–05 is consolidated here for revision and exam-day recall. Learn the methods from the topics; use this page to lock the results and the decision-making.',
      },
      { t: 'p', html: `Faced with any ${LXA} ${f(x)}, work down this list and stop at the first that applies:` },
      {
        t: 'proc',
        title: 'Limit-Evaluation Decision Guide',
        steps: [
          `<b>Substitute ${x} = ${a}.</b> If the function is continuous at ${a} and you get a finite number, that is the limit. (Works for polynomials always, and rationals when the denominator ≠ 0; never at the jump of a jump function: go to step 5.)`,
          `<b>Got ${ZZ}?</b> Resolve it:<br>• <b>Algebraic / rational:</b> factor out (${x} − ${a}) and cancel (Topic 01).<br>• <b>Surds:</b> multiply by the conjugate (Topic 01).<br>• <b>Trig / exponential / logarithmic:</b> reshape into a <b>standard limit</b>: ${SINX_X}, ${COS1}, ${EXP1}, ${LN1X} (Topic 02).`,
          `<b>Is ${x} → ∞ (or an ∞-form)?</b> Use the <b>degree rule</b> for rationals, or rationalise an ∞ − ∞ surd, then send ${fr('1', pw(x, k))} → 0 (Topic 05).`,
          `<b>Form ${ONE_INF}?</b> Use lim <i>f</i><sup><i>g</i></sup> = ${EPOW} (Topic 02).`,
          `<b>Is it a jump function</b>: ${GIF}, |${x}|, signum, or piecewise? <b>Split into LHL and RHL</b> and compare; equal & finite ⇒ exists (Topics 01 and 05).`,
        ],
      },

      { t: 'part', title: 'Master formula sheet: limits' },
      {
        t: 'p',
        html: `<b>Existence:</b> ${LXA} ${f(x)} = <i>L</i> ⟺<br>${lim(`${x}→${a}<sup>−</sup>`)} <i>f</i> = ${lim(`${x}→${a}<sup>+</sup>`)} <i>f</i> = <i>L</i> (finite).<br><br><b>Algebra of limits:</b> sum, difference, product, scalar, power split freely; quotient needs denominator-limit ≠ 0.<br><br><b>Algebraic standard limit:</b><br>${LXA} ${fr(`${XN} − ${pw(a, n)}`, `${x} − ${a}`)} = ${n}${NB}${pw(a, '<i>n</i>−1')} (${n} ∈ ℚ; ${a}${NB}>${NB}0 if ${n} is not an integer).`,
      },
      {
        t: 'p',
        html: `<b>Trigonometric</b> (radians, → 0):<br>${SINX_X} → 1,<br>${fr(`tan ${x}`, x)} → 1,<br>${COS1} → ${fr('1', '2')},<br>${fr(`sin<sup>−1</sup>${NB}${x}`, x)} → 1,<br>${fr(`tan<sup>−1</sup>${NB}${x}`, x)} → 1.<br><br><b>Exponential / logarithmic:</b><br>${EXP1} → 1,<br>${AXP1} → ln ${a},<br>${LN1X} → 1.`,
      },
      {
        t: 'p',
        html: `<b>The number ${e}</b><b> / ${ONE_INF}:</b><br>(1 + ${x})<sup>1/<i>x</i></sup> → ${e},<br>(1 + ${fr('1', n)})<sup><i>n</i></sup> → ${e},<br>lim <i>f</i><sup><i>g</i></sup> = ${EPOW}.<br><br><b>At infinity:</b> ${fr('1', pw(x, k))} → 0; rational degree rule (top${NB}<${NB}bottom → 0; = → leading-coeff ratio; > → ±∞).<br><br><b>Greatest integer:</b> at integer ${n}, LHL = ${n} − 1, RHL = ${n} ⇒ DNE; at non-integer ${a}, lim${GIF} = [${a}].`,
      },

      { t: 'part', title: 'Master formula sheet: derivatives' },
      {
        t: 'p',
        html: `<b>Definition:</b><br>${fp(x)} = ${LH} ${DQ}<br>= ${LTX} ${DQT}:<br>slope of tangent = instantaneous rate.<br><br><b>Existence:</b> ${fp(a)} exists ⟺ LHD and RHD are finite and equal. <b>Differentiable</b> ⇒ <b>continuous</b> (converse false: |${x}| at 0).`,
      },
      {
        t: 'p',
        html: `<b>Standard derivatives:</b><br>${DXN},<br>${DEX},<br>${DAX},<br>${DLN}.<br>${DSIN},<br>${DCOS},<br>${DTAN},<br>${DCOT},<br>${DSEC},<br>${DCSC}.`,
      },
      {
        t: 'p',
        html: `<b>Rules:</b> (${u} ± ${v})′ = ${u}′ ± ${v}′;<br>(<i>c</i>${u})′ = <i>c</i>${u}′;<br>${PROD};<br>${QUOT};<br><b>chain</b> ${DYDX} = ${DYDU}${NB}${DUDX};<br><b>power chain</b> ${POWCH}.`,
      },

      { t: 'part', title: 'Concept map: how the chapter connects' },
      {
        t: 'p',
        html: '<b>The chapter spine:</b> <b>Idea of a limit</b> (LHL = RHL) → <b>standard limits</b> → <b>the derivative</b> (itself a limit) → <b>rules of differentiation</b> → <b>limits at infinity & special cases</b>.',
      },
      {
        t: 'p',
        html: `• <b>Limits (Topic 01)</b> establish the one engine (approach, don’t arrive) and the existence test LHL = RHL.<br>• <b>Standard limits (Topic 02)</b> are proven junctions that crack the ${ZZ} forms algebra can’t.<br>• <b>The derivative (Topic 03)</b> is a limit, the difference-quotient ${ZZ}, so its existence test (LHD = RHD) is the same one-sided rule from Topic 01, and its results use the junctions from Topic 02 (${D} sin ${x} needs ${fr(`sin ${h}`, h)} → 1; ${D}${TH}${EX} needs ${fr(`${pw(e, h)} − 1`, h)} → 1).<br>• <b>Rules (Topic 04)</b> turn the slow limit definition into a fast algebra.<br>• <b>Infinity & special cases (Topic 05)</b> extend the same existence reasoning to jumps and end-behaviour.`,
      },
      {
        t: 'p',
        html: 'The whole chapter hangs on one thread: <b>a limit is the value you approach, and existence means both sides agree.</b> Derivatives, rules, and end-behaviour are all that single idea, reused.',
      },

      { t: 'part', title: 'Top exam traps (consolidated)' },
      {
        t: 'p',
        html: `• <b>Limit ≠ function value.</b> ${f(a)} is irrelevant to ${LXA}${NB}<i>f</i>.<br>• <b>${ZZ} means “resolve,” not “zero” or “does not exist.”</b><br>• <b>Radians only</b> for ${lim(`${x}→0`)} ${SINX_X} = 1; degrees give ${fr('π', '180')}.<br>• <b>Match the argument:</b> as ${x} → 0, ${fr(`sin ${k}${x}`, x)} → ${k}, and ${fr(`1 − cos ${k}${x}`, sq(x))} → ${fr(sq(k), '2')} (square the ${k}).<br>• <b>${e} vs other base:</b> ${EXP1} → 1 but ${AXP1} → ln ${a}.<br>• <b>Product rule has a cross term:</b> ${PROD}, never ${u}′${v}′.<br>• <b>Chain rule keeps the inside derivative:</b> ${D} sin(${sq(x)}) = 2${x} cos(${sq(x)}).<br>• <b>∞ − ∞ ≠ 0;</b> rationalise. <b>Jump functions</b> (${GIF}, |${x}|, piecewise) always need LHL vs RHL.<br>• <b>Differentiable ⇒ continuous,</b> but continuous ⇏ differentiable.`,
      },
    ],
  },
];
