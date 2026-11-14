import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Topics 06–07, pp. 339–353 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's numbered parts
 * "6. Logarithmic & Parametric Differentiation" (pp. 339–346) and "7. Second-
 * Order Derivatives & the Mean Value Theorems" (pp. 347–353); the Additional
 * Topics part starts on p. 354. Each topic opens with its "Exam Relevance:"
 * box as a part of its own, then is split at its Sections 1 to 8, titled from
 * their own names; the "Cheat Sheet Box" is the part "Cheat sheet". No figures
 * and no unnumbered drawings on these pages. d upright in d<i>y</i>/d<i>x</i>,
 * e upright. A fraction inside a fraction's numerator or denominator (the
 * parametric dy/dt over dx/dt) is written with ÷. Every fraction is stacked
 * (<frac>); no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
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
const m = I('m');
const n = I('n');
const p = I('p');
const q = I('q');
const t = I('t');
const u = I('u');
const v = I('v');
const x = I('x');
const y = I('y');
const A = I('A');
const B = I('B');
const th = I('θ');
const pt = I('pt');

const sin = (s: string) => `sin${NB}${s}`;
const cos = (s: string) => `cos${NB}${s}`;
const ln = (s: string) => `ln${NB}${s}`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const abs = (s: string) => `|${WJ}${s}|`;
/** The book's "| · |". */
const BARS = `|${WJ}${NB}·${NB}|`;
const rel = (l: string, op: string, r: string) => `${l}${NB}${op}${NB}${r}`;
/** Intervals, the comma glued. */
const CI = (lo: string, hi: string) => `[${lo},${NB}${hi}]`;
const OI = (lo: string, hi: string) => `(${lo},${NB}${hi})`;

/** d/dx and d/dt, d upright. */
const D = fr('d', `d${x}`);
const DT = fr('d', `d${t}`);
const DYDX = fr(`d${y}`, `d${x}`);
const DYDT = fr(`d${y}`, `d${t}`);
const DXDT = fr(`d${x}`, `d${t}`);
const DTDX = fr(`d${t}`, `d${x}`);
const D2Y = fr(`d<sup>2</sup>${y}`, `d${x}<sup>2</sup>`);
const D2YT = fr(`d<sup>2</sup>${y}`, `d${t}<sup>2</sup>`);
const D2XT = fr(`d<sup>2</sup>${x}`, `d${t}<sup>2</sup>`);
/** The naive ratio d²y/dt² over d²x/dt² (a fraction of fractions: ÷). */
const NAIVE = `${D2YT} ÷ ${D2XT}`;
/** dy/dx = (dy/dt) ÷ (dx/dt). */
const PARAM1 = `${DYDT} ÷ ${DXDT}`;
/** d²y/dx² = d/dt(dy/dx) ÷ (dx/dt). */
const PARAM2 = `${DT}(${DYDX}) ÷ ${DXDT}`;
const ONE_Y = fr('1', y);
const DLNY = `${D}${NB}ln${NB}${y}`;

const fx = `${f}(${x})`;
const gx = `${g}(${x})`;
const fpx = `${f}′(${x})`;
const gpx = `${g}′(${x})`;
const ft = `${f}(${t})`;
const gt = `${g}(${t})`;
/** [f(x)]^g(x). */
const FG = `[${fx}]<sup><i>g</i>(<i>x</i>)</sup>`;
const MASTER = `${FG}[${gpx}${NB}ln${NB}${fx} + ${gx}${NB}${fr(fpx, fx)}]`;
const UV = `${u}<sup><i>v</i></sup>`;
const EXPPIECE = `${UV}${NB}ln${NB}${u} · ${v}′`;
const POWPIECE = `${v}${NB}${u}<sup><i>v</i>−1</sup>${u}′`;
const UVD = `${EXPPIECE} + ${POWPIECE}`;
const XX = `${x}<sup><i>x</i></sup>`;
const XSIN = `${x}<sup>sin${NB}<i>x</i></sup>`;
const XLN = `${x}<sup>ln${NB}<i>x</i></sup>`;
const TANCOT = `(tan${NB}${x})<sup>cot${NB}<i>x</i></sup>`;
const X5 = `${x}<sup>5</sup>`;
const FIVEX = `5<sup><i>x</i></sup>`;
const PARAMXY = `${x} = ${ft}, ${y} = ${gt}`;

const fa = `${f}(${a})`;
const fb = `${f}(${b})`;
const fpc = `${f}′(${c})`;
const AB = CI(a, b);
const OAB = OI(a, b);
const SLOPE = fr(`${fb} − ${fa}`, `${b} − ${a}`);
const MVT = `${fpc} = ${SLOPE}`;
const EX = `e<sup><i>x</i></sup>`;
const P2 = fr('π', '2');
const TH2 = fr(th, '2');
const LNBA = `ln(${fr(b, a)})`;

// Topic 06, Example 4 (p. 343).
const SINPT = sin(pt);
const COSPT = cos(pt);
const N4 = `−${sq(p)}${NB}${SINPT}${NB}${cos(t)} + ${p}${NB}${sin(t)}${NB}${COSPT}`;
const AWK = fr(`${p}${NB}${sin(t)}${NB}${COSPT}`, cos(t));

export const TOPICS: Topic[] = [
  // ──────────────── Topic 06 · pp. 339–346 ────────────────
  {
    n: '06',
    title: 'Logarithmic & Parametric Differentiation',
    kalam: 'That single trick (take the log, then differentiate) is logarithmic differentiation.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Two reliable mark-earners. <b>CBSE Boards</b> almost always include a logarithmic-differentiation sum (variable-power functions or large products) and frequently a parametric ${DYDX}: typically 2–4 marks each ${ESTIMATE}. <b>JEE Main</b> asks 1–2 questions, favouring the second-derivative parametric trap and ${UV}-type functions ${ESTIMATE}. <b>JEE Advanced</b> combines these with differential-equation relations (e.g. “show that (1 − ${sq(x)})${y}″ − ${x}${y}′ + ${sq(p)}${y} = 0”). (NEET does not test mathematics.)`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Suppose I ask you to differentiate three functions: ${X5}, then ${FIVEX}, then ${XX}.`,
      },
      {
        t: 'p',
        html: `The first is a piece of cake; the <b>power rule</b> handles a constant exponent: ${D}${X5} = 5${x}<sup>4</sup>. The second is also routine; the <b>exponential rule</b> handles a constant base: ${D}${FIVEX} = ${FIVEX}${NB}ln${NB}5. But the third, ${XX}, has a variable in both the base and the exponent simultaneously. Neither rule applies: the power rule assumes the exponent stands still, the exponential rule assumes the base stands still, and here nothing stands still. We are stuck.`,
      },
      {
        t: 'p',
        html: `This is exactly where the <b>logarithm</b> rides in as a rescuer. Think of the logarithm as a currency converter in a busy market: it converts the “hard currency” of multiplication and powers into the “easy currency” of addition. Its famous properties (log(${x}${y}) = log${NB}${x} + log${NB}${y} and log(${x}<sup><i>n</i></sup>) = ${n}${NB}log${NB}${x}) take a tangled exponent and lay it out flat as a simple product. Once we take ln of both sides of ${y} = ${XX}, the troublesome exponent slides down to become an ordinary factor: ${ln(y)} = ${x}${NB}${ln(x)}, which we can differentiate. That single trick (<b>take the log, then differentiate</b>) is logarithmic differentiation.`,
      },
      {
        t: 'p',
        html: `It earns its keep in a second situation too: when ${y} is a long, ugly <b>product or quotient</b> of many factors, like ${y} = ${fr(`${sq(x)}√(${x} − 1)`, `(${x} + 2)<sup>3</sup>`)}. Differentiating that directly means a nightmare of product and quotient rules. But ln shatters the product into a clean sum of logs, and a sum is trivial to differentiate term by term.`,
      },
      {
        t: 'p',
        html: `Now the second idea: <b>parametric differentiation</b>. Sometimes ${x} and ${y} are not tied to each other directly; instead, both are controlled by a third, behind-the-scenes variable: a <b>parameter</b>, usually called ${t} (time) or ${th} (angle).`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> picture a cricket ball flying through the air. You don’t naturally describe its height ${y} as a function of its horizontal distance ${x}. What you actually know is how time drives both: ${x} = (horizontal speed)${NB}${t} and ${y} = (vertical speed)${NB}${t} − ${fr('1', '2')}${g}${sq(t)}. Time is the puppeteer; ${x} and ${y} are the two puppets dangling from its strings. If you want the slope of the ball’s path, ${DYDX}, “how does height change per unit horizontal distance”, you simply ask how fast each puppet responds to the puppeteer and take the ratio:<br>${DYDX} = (rate of ${y} w.r.t.${NB}${t}) ÷ (rate of ${x} w.r.t.${NB}${t})<br>= ${PARAM1}.`,
      },
      {
        t: 'p',
        html: `Or picture the giant wheel (Ferris wheel) at a village mela: your seat’s position is most naturally given by the rotation angle ${th}, as ${x} = ${I('r')}${NB}${cos(th)}, ${y} = ${I('r')}${NB}${sin(th)}. The parameter is the puppet-master; differentiation just compares the puppets’ motions.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b> Logarithmic differentiation needs the base to be <b>positive</b> (log of a non-positive number is undefined), so for ${y} = ${FG} we implicitly require ${rel(fx, '>', '0')}; for products that may go negative, work with ${BARS} or restrict the domain. Parametric differentiation needs ${rel(DXDT, '≠', '0')}; where ${DXDT} = 0 (and ${DYDT}${NB}≠${NB}0), the slope ${DYDX} blows up (a <b>vertical tangent</b>) and the formula breaks.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `<b>Logarithmic differentiation: the engine.</b> When ${y} = ${fx}, taking ln and differentiating gives the all-important relation`,
      },
      {
        t: 'formula',
        kicker: 'Logarithmic differentiation: the engine',
        main: `${D}(${ln(y)}) = ${ONE_Y}${NB}${DYDX}`,
        legend: [`${y} = the function ${fx}`],
        note: `(never forget the ${ONE_Y}: it is the chain rule on ${ln(y)}).`,
      },
      {
        t: 'p',
        html: `<b>Master formula for a variable-base, variable-exponent function</b> ${y} = ${FG}, ${rel(fx, '>', '0')}:`,
      },
      {
        t: 'formula',
        kicker: 'Master formula for a variable-base, variable-exponent function',
        main: `${DYDX} = ${MASTER}`,
        legend: [`${fx} = the base (positive)`, `${gx} = the exponent`],
        note: null,
      },
      {
        t: 'p',
        html: 'A useful way to read this: it is the <b>sum of two pieces</b>, the “exponential-rule piece” (treat the base as constant) plus the “power-rule piece” (treat the exponent as constant):',
      },
      {
        t: 'formula',
        kicker: 'Exponential-rule piece plus power-rule piece',
        main: `${D}(${UV}) = ${UVD}`,
        legend: [`${u} = the base, ${fx}`, `${v} = the exponent, ${gx}`],
        note: `[${EXPPIECE}: base frozen; ${POWPIECE}: exponent frozen]`,
      },
      { t: 'p', html: '<b>Log properties used to simplify before differentiating:</b>' },
      {
        t: 'formula',
        kicker: 'Log properties used to simplify before differentiating',
        main: `ln(${a}${b}) = ${ln(a)} + ${ln(b)}<br>ln(${fr(a, b)}) = ${ln(a)} − ${ln(b)}<br>ln(${a}<sup><i>n</i></sup>) = ${n}${NB}${ln(a)}`,
        legend: [`${a}, ${b} = positive quantities`, `${n} = the power`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Parametric differentiation.</b> If ${x} = ${ft} and ${y} = ${gt} with ${rel(DXDT, '≠', '0')}:`,
      },
      {
        t: 'formula',
        kicker: 'Parametric differentiation',
        main: `${DYDX} = ${PARAM1} (${rel(DXDT, '≠', '0')})`,
        legend: [`${t} = the parameter (${x} = ${ft}, ${y} = ${gt})`],
        note: null,
      },
      { t: 'p', html: '<b>Second derivative (read this twice):</b>' },
      {
        t: 'formula',
        kicker: 'Second derivative (parametric)',
        main: `${D2Y} = ${PARAM2}`,
        legend: [`${t} = the parameter`],
        note: null,
      },
      {
        t: 'p',
        html: `• It is <b>NOT</b> ${NAIVE}. You must differentiate the already-found slope ${DYDX} with respect to ${t}, and then divide by ${DXDT} <b>once more</b>. The reason is the chain rule: ${D} = (1 ÷ ${DXDT}) · ${DT}, applied a second time.`,
      },
      {
        t: 'p',
        html: `Here ${ft}, ${gt} are the coordinate functions of the parameter ${t}; ${DYDT}, ${DXDT} are their ordinary derivatives w.r.t. ${t}.`,
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      {
        t: 'p',
        html: `<b>Derivation 1: The master formula for ${y} = ${FG}</b><br><b>Setup.</b> Let ${y} = ${FG} with ${rel(fx, '>', '0')} (so the logarithm is defined).`,
      },
      {
        t: 'p',
        html: `<b>Step 1: take the natural log of both sides.</b> <b>Why:</b> the log pulls the exponent ${gx} down to the front, converting a power that neither the power rule nor the exponential rule can handle into a product we can handle.<br>${ln(y)} = ${gx}${NB}ln${NB}${fx}.`,
      },
      {
        t: 'p',
        html: `<b>Step 2: differentiate both sides w.r.t. ${x}.</b> The left side uses the chain rule on ${ln(y)}; the right side uses the product rule on ${gx} · ln${NB}${fx}.<br>${ONE_Y}${NB}${DYDX} = ${gpx}${NB}ln${NB}${fx} + ${gx} · ${fr(fpx, fx)}.`,
      },
      {
        t: 'p',
        html: `<b>Why the ${ONE_Y} appears:</b> ${y} is itself a function of ${x}, so ${DLNY} = ${ONE_Y} · ${DYDX}; forgetting this factor is the single most common error in the topic.`,
      },
      {
        t: 'p',
        html: `<b>Step 3: solve for ${DYDX}</b> by multiplying through by ${y}, and substitute ${y} = ${FG} back in:<br>${DYDX} = ${MASTER}. ■`,
      },
      {
        t: 'p',
        html: `<b>Derivation 2: Why the parametric second derivative is not a naive ratio</b><br><b>Setup.</b> ${PARAMXY}. We already have ${DYDX} = ${fr(`${g}′(${t})`, `${f}′(${t})`)}, which is itself a <b>function of</b> ${t}, not of ${x}.`,
      },
      {
        t: 'p',
        html: `<b>The key idea.</b> To differentiate anything with respect to ${x} when everything is written in ${t}, we route through the chain rule:<br>${D}(${NB}·${NB}) = ${DT}(${NB}·${NB}) · ${DTDX}<br>= (1 ÷ ${DXDT}) · ${DT}(${NB}·${NB}).`,
      },
      {
        t: 'p',
        html: `Apply this operator to ${DYDX}:<br>${D2Y} = ${D}(${DYDX})<br>= (1 ÷ ${DXDT}) · ${DT}(${DYDX}).`,
      },
      {
        t: 'p',
        html: `<b>The trap, made visible.</b> A student who writes ${D2Y} = ${NAIVE} has wrongly “cancelled” the d${t}’s as if they were numbers. But ${DYDX} is a quotient of ${t}-derivatives, and you cannot differentiate a quotient by differentiating top and bottom separately. The correct route is: find the slope, differentiate that whole slope w.r.t. ${t}, then divide by ${DXDT} one more time. ■`,
      },
      {
        t: 'proc',
        title: 'Procedure: Logarithmic differentiation (checklist)',
        steps: [
          `Confirm the base is positive (or wrap in ${BARS} / restrict domain).`,
          'Take ln of both sides.',
          'Use log laws to break products/quotients into sums/differences and bring exponents to the front.',
          `Differentiate implicitly: remember ${DLNY} = ${ONE_Y}${y}′.`,
          `Multiply by ${y} and substitute the original expression back for ${y}.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure: Parametric differentiation (checklist)',
        steps: [
          `Compute ${DXDT} and ${DYDT} separately.`,
          `First derivative: ${DYDX} = ${PARAM1} (require ${rel(DXDT, '≠', '0')}).`,
          `Second derivative: differentiate ${DYDX} <b>w.r.t.</b> ${t}, then divide by ${DXDT} again.`,
          'Simplify and, if asked at a particular point, substitute the parameter value last.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Differentiate ${y} = ${XSIN} with respect to ${x} (for ${rel(x, '>', '0')}).`,
        steps: [
          `<b>Step 1: take logs.</b> ${ln(y)} = ${sin(x)} · ${ln(x)}.`,
          `<b>Step 2: differentiate both sides</b> (product rule on the right, chain rule on the left):<br>${ONE_Y}${NB}${DYDX} = ${cos(x)} · ${ln(x)} + ${sin(x)} · ${fr('1', x)}.`,
          `<b>Step 3: solve and substitute back ${y} = ${XSIN}:</b>`,
        ],
        ans: `${DYDX} = ${XSIN}(${cos(x)}${NB}${ln(x)} + ${fr(sin(x), x)})`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find ${DYDX} for the astroid ${x} = ${a}${NB}cos<sup>3</sup>${NB}${t}, ${y} = ${a}${NB}sin<sup>3</sup>${NB}${t}.`,
        steps: [
          `<b>Step 1: differentiate each w.r.t. ${t}.</b><br>${DXDT} = 3${a}${NB}cos<sup>2</sup>${NB}${t}${NB}(−${sin(t)}) = −3${a}${NB}cos<sup>2</sup>${NB}${t}${NB}${sin(t)},<br>${DYDT} = 3${a}${NB}sin<sup>2</sup>${NB}${t}${NB}${cos(t)}.`,
          `<b>Step 2: take the ratio.</b><br>${DYDX} = ${fr(`3${a}${NB}sin<sup>2</sup>${NB}${t}${NB}${cos(t)}`, `−3${a}${NB}cos<sup>2</sup>${NB}${t}${NB}${sin(t)}`)}<br>= −${fr(sin(t), cos(t))} = −tan${NB}${t}.`,
          'Notice how the messy <i>a</i>’s and squared trig terms cancel cleanly: a hallmark of well-posed parametric problems.',
        ],
        ans: `−tan${NB}${t}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: `For ${x} = ${a}${sq(t)}, ${y} = 2${a}${t}, find ${D2Y}.`,
        steps: [
          `<b>The trap:</b> students “cancel the d${t}’s” and write ${D2Y} = ${NAIVE} = ${fr('0', `2${a}`)} = 0. This is <b>wrong</b>, and it is the most-tested error in parametric calculus ${ESTIMATE}.`,
          `<b>The correct route.</b> First derivative: ${DYDT} = 2${a}, ${DXDT} = 2${a}${t}, so ${DYDX} = ${fr(`2${a}`, `2${a}${t}`)} = ${fr('1', t)}.`,
          `Now differentiate this slope <b>w.r.t.</b> ${t}, then divide by ${DXDT} again:<br>${DT}(${fr('1', t)}) = −${fr('1', sq(t))},<br>${D2Y} = −${fr('1', sq(t))} ÷ (2${a}${t}) = −${fr('1', `2${a}${t}<sup>3</sup>`)}.`,
          `The naive answer 0 isn’t just numerically off: it would falsely claim the parabola has zero curvature everywhere. <b>Pro move:</b> the moment you see “second derivative, parametric,” mentally chant “slope, differentiate w.r.t. ${t}, divide by ${DXDT}.”`,
        ],
        ans: `−${fr('1', `2${a}${t}<sup>3</sup>`)}`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `If ${x} = ${sin(t)} and ${y} = ${SINPT}, prove that (1 − ${sq(x)})${NB}${D2Y} − ${x}${NB}${DYDX} + ${sq(p)}${y} = 0.`,
        steps: [
          `<b>Step 1: first derivative.</b> ${DXDT} = ${cos(t)}, ${DYDT} = ${p}${NB}${COSPT}, so<br>${y}′ ≡ ${DYDX} = ${fr(`${p}${NB}${COSPT}`, cos(t))}.`,
          `<b>Step 2: second derivative.</b> Differentiate ${y}′ w.r.t. ${t}, then divide by ${DXDT} = ${cos(t)}:<br>${DT}(${fr(`${p}${NB}${COSPT}`, cos(t))})<br>= ${p} · ${fr(`(−${p}${NB}${SINPT})${NB}${cos(t)} − ${COSPT}(−${sin(t)})`, `cos<sup>2</sup>${NB}${t}`)}<br>= ${fr(N4, `cos<sup>2</sup>${NB}${t}`)},<br><br>${y}″ ≡ ${D2Y} = ${fr('1', cos(t))} · ${fr(N4, `cos<sup>2</sup>${NB}${t}`)}<br>= ${fr(N4, `cos<sup>3</sup>${NB}${t}`)}.`,
          `<b>Step 3: assemble the expression</b>, using 1 − ${sq(x)} = 1 − sin<sup>2</sup>${NB}${t} = cos<sup>2</sup>${NB}${t}:<br>(1 − ${sq(x)})${y}″ = cos<sup>2</sup>${NB}${t} · ${fr(N4, `cos<sup>3</sup>${NB}${t}`)}<br>= −${sq(p)}${NB}${SINPT} + ${AWK}.<br><br>${x}${NB}${y}′ = ${sin(t)} · ${fr(`${p}${NB}${COSPT}`, cos(t))} = ${AWK},<br>${sq(p)}${y} = ${sq(p)}${NB}${SINPT}.`,
          `<b>Step 4: add them up:</b><br>(1 − ${sq(x)})${y}″ − ${x}${y}′ + ${sq(p)}${y}<br>= (−${sq(p)}${NB}${SINPT} + ${AWK})<br>− ${AWK} + ${sq(p)}${NB}${SINPT} = 0. ■`,
          `The two awkward ${AWK} terms annihilate, and the ±${sq(p)}${NB}${SINPT} pair cancels: the relation holds identically.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Differentiate ${y} = ${XLN} (here ${ln(x)} = log<sub>e</sub>${NB}${x}), ${rel(x, '>', '0')}.`,
            a: `${DYDX} = ${XLN} · ${fr(`2${NB}${ln(x)}`, x)}`,
          },
          {
            q: `<b>[CBSE]</b> Using logarithmic differentiation, find ${DYDX} for ${y} = ${fr(`(${x} − 1)(${x} − 2)`, `(${x} − 3)(${x} − 4)`)}.`,
            a: `${DYDX} = ${y}[${fr('1', `${x} − 1`)} + ${fr('1', `${x} − 2`)} − ${fr('1', `${x} − 3`)} − ${fr('1', `${x} − 4`)}]<br>where ${y} = ${fr(`(${x} − 1)(${x} − 2)`, `(${x} − 3)(${x} − 4)`)}`,
          },
          {
            q: `<b>[JEE Main]</b> For the cycloid ${x} = ${a}(${t} + ${sin(t)}), ${y} = ${a}(1 − ${cos(t)}), find ${DYDX}.`,
            a: `${DYDX} = tan${NB}${fr(t, '2')}`,
          },
          {
            q: `<b>[JEE Main]</b> Differentiate ${y} = ${TANCOT} with respect to ${x}.`,
            a: `${DYDX} = ${TANCOT}${NB}csc<sup>2</sup>${NB}${x}${NB}(1 − ln${NB}tan${NB}${x})`,
          },
          {
            q: `<b>[JEE Advanced]</b> For ${x} = ${a}${NB}cos<sup>3</sup>${NB}${th}, ${y} = ${a}${NB}sin<sup>3</sup>${NB}${th}, find ${D2Y}.`,
            a: `${D2Y} = ${fr(`sec<sup>4</sup>${NB}${th}${NB}csc${NB}${th}`, `3${a}`)}`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `${D}(${XX}) equals:`,
        opts: [
          {
            label: `${XX}${NB}${ln(x)}`,
            nudge: '<b>(a)</b> keeps only the “exponential-rule piece” (base frozen): the student forgot the power-rule piece.',
          },
          {
            label: `${x} · ${x}<sup><i>x</i>−1</sup>`,
            nudge: `<b>(b)</b> = ${XX} is the “power-rule piece” alone (exponent frozen): the opposite half-error.`,
          },
          { label: `${XX}(1 + ${ln(x)})`, nudge: null },
          {
            label: `${x}(1 + ${ln(x)})`,
            nudge: `<b>(d)</b> has the right bracket but the wrong prefactor: it carries ${x} in place of ${XX}.`,
          },
        ],
        correct: 2,
        solution: `Take logs: ${ln(y)} = ${x}${NB}${ln(x)} ⇒ ${fr(`${y}′`, y)} = ${ln(x)} + 1 ⇒ ${y}′ = ${XX}(1 + ${ln(x)}).`,
      },
      {
        t: 'mcq',
        q: `If ${x} = ${sq(t)} and ${y} = ${t}<sup>3</sup>, then ${D2Y} =`,
        opts: [
          {
            label: fr('3', '2'),
            nudge: `<b>(a)</b> is ${DYDX} differentiated w.r.t. ${t} but <b>not</b> divided by ${DXDT} again: the signature parametric error.`,
          },
          { label: fr('3', `4${t}`), nudge: null },
          { label: `3${t}`, nudge: `<b>(c)</b> is essentially “${NAIVE}”-style nonsense.` },
          { label: fr('3', `2${t}`), nudge: `<b>(d)</b> divides ${fr('3', '2')} by ${t} instead of by ${DXDT} = 2${t}.` },
        ],
        correct: 1,
        solution: `${DYDX} = ${fr(`3${sq(t)}`, `2${t}`)} = ${fr(`3${t}`, '2')}; then ${D2Y} = ${DT}(${fr(`3${t}`, '2')}) ÷ ${DXDT} = ${fr('3', '2')} ÷ (2${t}) = ${fr('3', `4${t}`)}.`,
      },
      {
        t: 'mcq',
        q: 'Which function genuinely requires logarithmic differentiation (cannot be done by a single standard rule)?',
        opts: [
          { label: X5, nudge: '<b>(a)</b> power rule.' },
          { label: FIVEX, nudge: '<b>(b)</b> exponential rule.' },
          { label: XSIN, nudge: null },
          { label: `sin(${X5})`, nudge: '<b>(d)</b> plain chain rule.' },
        ],
        correct: 2,
        solution: 'Variable base <b>and</b> variable exponent: neither power nor exponential rule applies alone. Only <b>(c)</b> forces the log trick.',
      },
      {
        t: 'mcq',
        q: `For a parametric curve ${PARAMXY}, the slope ${DYDX} is <b>undefined</b> (vertical tangent) when:`,
        opts: [
          { label: `${DYDT} = 0`, nudge: `<b>(a)</b> gives a horizontal tangent (${DYDX} = 0), not undefined.` },
          { label: `${DXDT} = 0`, nudge: null },
          { label: `${t} = 0`, nudge: `<b>(c)</b> ${t} = 0 is just a specific parameter value with no special meaning in general.` },
          { label: `${DYDT} = ${DXDT}`, nudge: '<b>(d)</b> merely makes the slope equal to 1.' },
        ],
        correct: 1,
        solution: `${DYDX} = ${PARAM1} blows up when the denominator ${DXDT} = 0.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Dropping the ${ONE_Y}.</b> Writing ${DLNY} = ${ONE_Y} instead of ${ONE_Y}${NB}${DYDX}. The ${y} is a function of ${x}, so the chain rule demands the extra ${DYDX}. This silently corrupts every logarithmic-differentiation answer.`,
          `<b>Half-rule on ${UV}.</b> Differentiating ${XX} as either ${XX}${NB}${ln(x)} or ${x} · ${x}<sup><i>x</i>−1</sup>. Both are halves of the truth; you need their <b>sum</b>.`,
          `<b>The parametric second-derivative ratio.</b> Using ${NAIVE}. Always: slope first, differentiate w.r.t. ${t}, divide by ${DXDT} again.`,
          `<b>Ignoring the positive-base condition.</b> Applying log differentiation to a base that can be ≤ 0 without using ${BARS} or stating the domain.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> For any ${UV}, skip re-deriving and write the answer directly as <b>“exponential piece + power piece”</b>: ${D}(${UV}) = ${UVD}. And for parametric curves, before plugging a value, simplify ${DYDX} fully; the constants almost always cancel, and a clean symbolic slope is far less error-prone to substitute into.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `<b>When to take logs:</b> variable base and exponent (${UV}), or a big product/quotient of factors.`, note: '' },
          { f: `<b>Engine:</b> ${DLNY} = ${ONE_Y}${NB}${DYDX} (never drop the ${ONE_Y}).`, note: '' },
          { f: `<b>Master ${UV} formula:</b> ${D}(${UV}) = ${UVD}`, note: 'exponential piece + power piece.' },
          { f: `<b>Parametric 1st derivative:</b> ${DYDX} = ${PARAM1} (${rel(DXDT, '≠', '0')}).`, note: '' },
          { f: `<b>Parametric 2nd derivative:</b> ${D2Y} = ${PARAM2}`, note: `<b>NOT</b> ${NAIVE}.` },
          {
            f: `<b>Domain guards:</b> log diff needs base > 0; parametric slope undefined where ${DXDT} = 0 (vertical tangent if ${DYDT}${NB}≠${NB}0).`,
            note: '',
          },
        ],
        aids: [`“Slope, then differentiate by ${t}, then divide by ${DXDT} once more.”`],
      },
    ],
  },

  // ──────────────── Topic 07 · pp. 347–353 ────────────────
  {
    n: '07',
    title: 'Second-Order Derivatives & the Mean Value Theorems',
    kalam: 'Geometrically, the second derivative tells you which way a curve bends.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A dependable scoring zone. <b>CBSE Boards</b> almost always carry a second-order-derivative relation to prove (e.g. ${y}″ + ${sq(n)}${y} = 0) for 2–4 marks ${ESTIMATE}. “Verify Rolle’s / Mean Value Theorem” questions appear in older CBSE papers, but the rationalised NCERT book and the current CBSE syllabus no longer include the two theorems (and, as far as we know, neither does the current JEE Main syllabus); JEE Advanced still uses them. <b>JEE Main</b> leans on parametric/implicit second derivatives. <b>JEE Advanced</b> uses the Mean Value Theorem as a tool: proving inequalities and bounding root counts. (NEET does not test mathematics.)`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `You already know that the first derivative ${DYDX} measures a rate of change: for a moving car, it is the speedometer reading, how fast position changes with time. So what does the derivative of the derivative measure? It measures <b>how fast the rate itself is changing</b>: for the car, that is the acceleration, how hard you are pressing (or releasing) the accelerator. That is the <b>second-order derivative</b>, written ${D2Y} or ${y}″.`,
      },
      {
        t: 'p',
        html: `Geometrically, the second derivative tells you which way a curve <b>bends</b>. Where ${rel(`${y}″`, '>', '0')} the graph is concave up, shaped like a cup ∪ that could hold water; where ${rel(`${y}″`, '<', '0')} it is concave down, a dome ∩ that sheds water. The first derivative tells you whether you’re going uphill or downhill; the second tells you whether the road is curving toward the sky or toward the ground.`,
      },
      {
        t: 'p',
        html: 'Now to the two <b>Mean Value Theorems</b>, which sound abstract but describe something you experience all the time.',
      },
      {
        t: 'p',
        html: `Start with <b>Rolle’s Theorem</b>. Throw a cricket ball straight up and catch it at exactly the same height it left your hand. Its starting height equals its ending height. Common sense says: at the very top of its flight, for one instant, the ball was neither rising nor falling; its vertical velocity was zero. Rolle’s theorem is exactly this statement made rigorous: <b>if a smooth, unbroken function has equal values at two points, ${fa} = ${fb}, then somewhere strictly between them the slope must be zero</b>, ${fpc} = 0. You went up and came back, so there had to be a flat moment at the turn.`,
      },
      {
        t: 'p',
        html: `<b>Lagrange’s Mean Value Theorem (MVT)</b> is the grown-up generalization, and it has the most satisfying real-world picture in all of calculus. Suppose you drive from Mumbai to Pune, 150 km, in exactly 2 hours. Your average speed was 75 km/h. MVT guarantees that <b>at some instant during the drive your speedometer read exactly 75 km/h</b>. You simply cannot average 75 without hitting 75 at least once. (This is precisely how the “average speed cameras” on the Expressway catch you: they’re enforcing MVT.) In symbols: there is a point ${c} where the instantaneous slope equals the average slope across the interval:<br>${MVT}.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Rolle’s theorem is nothing but MVT for the special case when the start and end heights are equal. If ${fa} = ${fb}, the average slope ${SLOPE} becomes 0, and MVT’s guaranteed point becomes a point of zero slope, which is exactly Rolle. Geometrically: MVT says some tangent is parallel to the secant joining the endpoints; Rolle is the case where that secant happens to be horizontal.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b> Both theorems demand two hypotheses: ${f} must be <b>continuous on the closed interval</b> ${AB} and <b>differentiable on the open interval</b> ${OAB} (Rolle adds the third condition ${fa} = ${fb}). Drop even one and the guarantee collapses. The standard cautionary tale is ${fx} = ${abs(x)} on ${CI('−1', '1')}: here ${f}(−1) = ${f}(1) = 1, so the “equal heights” condition holds, yet there is no point where ${fpc} = 0, because the function is not differentiable at the corner ${x} = 0. The hypothesis failed, so the conclusion is not promised. Note too that these are <b>existence</b> theorems: they guarantee at least one such ${c} exists, but say nothing about whether it is unique, and you still have to solve for it.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: '<b>Second-order derivative.</b> The derivative of the first derivative:' },
      {
        t: 'formula',
        kicker: 'Second-order derivative',
        main: `${D2Y} = ${D}(${DYDX})`,
        legend: [`${y} = the function of ${x}`],
        note: `also written ${y}″ or ${y}<sub>2</sub> (when ${y} = ${fx}).`,
      },
      {
        t: 'p',
        html: `• <b>Parametric form</b> (Topic 06): for ${PARAMXY},<br>${D2Y} = ${PARAM2}<br>(never ${NAIVE}).<br>• <b>Implicit form:</b> differentiate the relation twice w.r.t. ${x}, remembering each ${y}-term carries a ${DYDX} factor.`,
      },
      {
        t: 'p',
        html: `<b>Rolle’s Theorem.</b> Let ${f} : ${AB} → ℝ be such that (i) ${f} is continuous on ${AB}, (ii) ${f} is differentiable on ${OAB}, and (iii) ${fa} = ${fb}. Then there exists at least one ${c} ∈ ${OAB} with`,
      },
      {
        t: 'formula',
        kicker: 'Rolle’s Theorem',
        main: `${fpc} = 0`,
        legend: [
          `conditions: ${f} continuous on ${AB}, differentiable on ${OAB}, and ${fa} = ${fb}`,
          `${a}, ${b} = endpoints of the interval`,
          `${c} = the interior point the theorem guarantees`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Lagrange’s Mean Value Theorem.</b> Let ${f} : ${AB} → ℝ be (i) continuous on ${AB} and (ii) differentiable on ${OAB}. Then there exists at least one ${c} ∈ ${OAB} with`,
      },
      {
        t: 'formula',
        kicker: 'Lagrange’s Mean Value Theorem',
        main: MVT,
        legend: [
          `conditions: ${f} continuous on ${AB} and differentiable on ${OAB}`,
          `${a}, ${b} = endpoints of the interval`,
          `${c} = the (not necessarily unique) interior point the theorem guarantees`,
          `${fpc} = the instantaneous slope there`,
          `average slope (slope of the secant) = ${SLOPE}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Validity conditions</b> (the “where it applies” check): the two or three hypotheses are the validity conditions: always confirm continuity on ${AB} and differentiability on ${OAB} (and equal endpoints for Rolle) before using either conclusion. Corners, cusps or vertical tangents inside the interval, or any discontinuity on ${AB} (endpoints included), remove the guarantee: the conclusion may still happen to hold, but it is no longer promised.`,
      },

      { t: 'part', title: 'Derivations and key procedures' },
      {
        t: 'p',
        html: `<b>Derivation: Lagrange’s MVT from Rolle’s Theorem (the auxiliary-function trick)</b><br>This is the cleanest proof in the topic and a favourite at JEE Advanced ${ESTIMATE}.`,
      },
      {
        t: 'p',
        html: `<b>Goal.</b> Given ${f} continuous on ${AB} and differentiable on ${OAB}, show some ${c} ∈ ${OAB} satisfies ${MVT}.`,
      },
      {
        t: 'p',
        html: `<b>The idea.</b> Rolle’s theorem only fires when the endpoints are level. So we tilt the function to make its endpoints level, apply Rolle, and tilt back. Define an auxiliary function that subtracts off the secant line:<br>${gx} = ${fx} − [${fa} + ${SLOPE}${NB}(${x} − ${a})].`,
      },
      {
        t: 'p',
        html: `The bracketed term is exactly the straight secant joining (${a},${NB}${fa}) and (${b},${NB}${fb}). So ${gx} measures the vertical gap between the curve and that secant.`,
      },
      {
        t: 'p',
        html: `<b>Step 1: check Rolle’s hypotheses for ${g}.</b> ${g} is continuous on ${AB} and differentiable on ${OAB} (it’s ${f} minus a polynomial). And at the endpoints the curve meets the secant, so the gap is zero:<br>${g}(${a}) = ${fa} − ${fa} = 0,<br>${g}(${b}) = ${fb} − [${fa} + (${fb} − ${fa})] = 0.<br>Thus ${g}(${a}) = ${g}(${b}) = 0. <b>Why this matters:</b> we have manufactured exactly the equal-endpoints condition Rolle needs.`,
      },
      {
        t: 'p',
        html: `<b>Step 2: apply Rolle to ${g}.</b> There exists ${c} ∈ ${OAB} with ${g}′(${c}) = 0.`,
      },
      {
        t: 'p',
        html: `<b>Step 3: translate back.</b> Differentiating ${g}:<br>${g}′(${x}) = ${fpx} − ${SLOPE}.<br>Setting ${g}′(${c}) = 0 gives ${MVT}. ■`,
      },
      {
        t: 'p',
        html: 'The slickness is in Step 1: subtracting the secant is precisely the move that converts the general statement into Rolle’s special case.',
      },
      {
        t: 'proc',
        title: 'Procedure A: Verifying Rolle’s Theorem for a given f on [a, b]',
        steps: [
          `Check ${f} is <b>continuous</b> on ${AB}.`,
          `Check ${f} is <b>differentiable</b> on ${OAB}.`,
          `Check ${fa} = ${fb}. (If any of 1–3 fails, Rolle does not apply: state that and stop.)`,
          `Solve ${fpc} = 0 and confirm at least one solution lies <b>strictly inside</b> ${OAB}. That ${c} verifies the theorem.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: Verifying Lagrange’s MVT for a given f on [a, b]',
        steps: [
          `Check continuity on ${AB} and differentiability on ${OAB}.`,
          `Compute the average slope ${m} = ${SLOPE}.`,
          `Solve ${fpc} = ${m} and confirm a solution lies in ${OAB}.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Procedure C: Computing a second-order derivative</b><br>• <b>Direct:</b> differentiate ${fx} once to get ${y}′, then differentiate ${y}′ again.<br>• <b>Parametric:</b> find ${DYDX} as a function of ${t}, differentiate it w.r.t. ${t}, divide by ${DXDT}.<br>• <b>Implicit:</b> differentiate the equation twice; isolate ${D2Y}, substituting ${DYDX} where it appears.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `If ${y} = ${EX}${NB}${sin(x)}, prove that ${y}″ − 2${y}′ + 2${y} = 0.`,
        steps: [
          `<b>Step 1: first derivative</b> (product rule):<br>${y}′ = ${EX}${NB}${sin(x)} + ${EX}${NB}${cos(x)} = ${EX}(${sin(x)} + ${cos(x)}).`,
          `<b>Step 2: second derivative</b> (product rule again):<br>${y}″ = ${EX}(${sin(x)} + ${cos(x)}) + ${EX}(${cos(x)} − ${sin(x)})<br>= ${EX}(2${NB}${cos(x)}) = 2${EX}${NB}${cos(x)}.`,
          `<b>Step 3: substitute into the expression:</b><br>${y}″ − 2${y}′ + 2${y}<br>= 2${EX}${NB}${cos(x)} − 2${EX}(${sin(x)} + ${cos(x)}) + 2${EX}${NB}${sin(x)}.<br>= 2${EX}${NB}${cos(x)} − 2${EX}${NB}${sin(x)}<br>− 2${EX}${NB}${cos(x)} + 2${EX}${NB}${sin(x)} = 0. ■`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Verify Rolle’s Theorem for ${fx} = ${sin(x)} on ${CI('0', 'π')}, and find ${c}.`,
        steps: [
          `<b>Step 1: hypotheses.</b> ${sin(x)} is continuous everywhere (so on ${CI('0', 'π')}) and differentiable everywhere (so on ${OI('0', 'π')}). Endpoints: ${f}(0) = sin${NB}0 = 0 and ${f}(π) = sin${NB}π = 0, so ${f}(0) = ${f}(π). All three conditions hold. ✓`,
          `<b>Step 2: find ${c}.</b> Solve ${fpc} = 0:<br>${fpx} = ${cos(x)} = 0 ⟹ ${x} = ${P2}.`,
          `Since ${P2} ∈ ${OI('0', 'π')}, Rolle’s theorem is verified, with ${c} = ${P2}.`,
          `Geometrically, the tangent to ${y} = ${sin(x)} at its peak (${P2},${NB}1) is horizontal, parallel to the ${x}-axis joining the equal endpoints.`,
        ],
        ans: `${c} = ${P2}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main: Trap',
        q: `A student is asked to apply Rolle’s Theorem to ${fx} = ${abs(`${x} − 1`)} on ${CI('0', '2')} and find ${c}. What goes wrong?`,
        steps: [
          `<b>The trap.</b> The endpoints look perfect for Rolle: ${f}(0) = ${abs('−1')} = 1 and ${f}(2) = ${abs('1')} = 1, so ${f}(0) = ${f}(2). A student who checks only the equal-endpoints condition charges ahead, tries to solve ${fpc} = 0, finds the derivative is −1 on the left and +1 on the right, <b>never zero</b>, and panics, assuming an arithmetic error.`,
          `<b>The resolution.</b> There is no error. Rolle’s theorem <b>does not apply here</b>, because the differentiability hypothesis fails: ${fx} = ${abs(`${x} − 1`)} has a corner at ${x} = 1 ∈ ${OI('0', '2')}, where the left derivative −1 and right derivative +1 disagree. With a hypothesis violated, the conclusion ${fpc} = 0 is simply not promised, and indeed it fails.`,
          `<b>Lesson / speed move:</b> always validate continuity AND differentiability before reaching for the conclusion. The most common exam trap in this entire topic is a function engineered to satisfy the obvious condition (${fa} = ${fb}) while quietly breaking the differentiability one ${ESTIMATE}. Spot the modulus / greatest-integer / piecewise corner first.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Using the Mean Value Theorem, prove that for 0 < ${a} < ${b},<br>${fr(`${b} − ${a}`, b)} < ln${NB}${fr(b, a)} < ${fr(`${b} − ${a}`, a)}.`,
        steps: [
          `<b>Setup.</b> Apply Lagrange’s MVT to ${fx} = ${ln(x)} on ${AB}. Since ${ln(x)} is continuous and differentiable for ${rel(x, '>', '0')}, the hypotheses hold. So there exists ${c} ∈ ${OAB} with<br>${MVT}<br>⟹ ${fr('1', c)} = ${fr(`${ln(b)} − ${ln(a)}`, `${b} − ${a}`)} = ${LNBA} ÷ (${b} − ${a}).`,
          `<b>The key inequality.</b> Because ${c} lies strictly between ${a} and ${b} with 0 < ${a} < ${c} < ${b}, reciprocating (which reverses inequalities for positive numbers):<br>${fr('1', b)} < ${fr('1', c)} < ${fr('1', a)}.`,
          `<b>Substitute</b> ${fr('1', c)} = ${LNBA} ÷ (${b} − ${a}):<br>${fr('1', b)} < ${LNBA} ÷ (${b} − ${a}) < ${fr('1', a)}.`,
          `<b>Finish.</b> Multiply throughout by (${b} − ${a}) > 0 (inequalities preserved):<br>${fr(`${b} − ${a}`, b)} < ln${NB}${fr(b, a)} < ${fr(`${b} − ${a}`, a)}. ■`,
          `This is the signature power of MVT: an apparently unprovable inequality falls out in three lines once you choose the right function and read off the bounds on ${c}.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> If ${y} = ${A}${NB}cos${NB}${n}${x} + ${B}${NB}sin${NB}${n}${x}, prove that ${D2Y} + ${sq(n)}${y} = 0.`,
            a: `${y}″ = −${sq(n)}(${A}${NB}cos${NB}${n}${x} + ${B}${NB}sin${NB}${n}${x}) = −${sq(n)}${y}, hence ${y}″ + ${sq(n)}${y} = 0.`,
          },
          {
            q: `<b>[CBSE]</b> Find ${D2Y} for ${y} = ${x}<sup>3</sup>${NB}${ln(x)}.`,
            a: `${D2Y} = 6${x}${NB}${ln(x)} + 5${x} = ${x}(6${NB}${ln(x)} + 5).`,
          },
          {
            q: `<b>[JEE Advanced]</b> Verify the Mean Value Theorem for ${fx} = ${sq(x)} − 3${x} + 2 on ${CI('1', '4')} and find ${c}.`,
            a: `Hypotheses hold; average slope = ${fr(`${f}(4) − ${f}(1)`, '3')} = ${fr('6 − 0', '3')} = 2; ${fpc} = 2${c} − 3 = 2 ⇒ ${c} = ${fr('5', '2')} ∈ ${OI('1', '4')}.`,
          },
          {
            q: `<b>[JEE Main]</b> For the cycloid ${x} = ${a}(${th} − ${sin(th)}), ${y} = ${a}(1 − ${cos(th)}), find ${D2Y}.`,
            a: `${D2Y} = −1 ÷ [4${a}${NB}sin<sup>4</sup>(${TH2})] (from ${DYDX} = cot${NB}${TH2}).`,
          },
          {
            q: `<b>[JEE Advanced]</b> Using the Mean Value Theorem, prove that ${abs(`cos${NB}${a} − cos${NB}${b}`)} ≤ ${abs(`${a} − ${b}`)} for all real ${a}, ${b}.`,
            a: `Apply MVT to ${fx} = ${cos(x)}: cos${NB}${a} − cos${NB}${b} = −sin(${c})${NB}(${a} − ${b}) for some ${c}; since ${abs(sin(c))} ≤ 1, ${abs(`cos${NB}${a} − cos${NB}${b}`)} ≤ ${abs(`${a} − ${b}`)}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `On the interval ${CI('−1', '1')}, Rolle’s Theorem <b>fails to apply</b> to which function?`,
        opts: [
          {
            label: `${fx} = ${sq(x)} − 1`,
            nudge: `<b>(a)</b> ${sq(x)} − 1: smooth, ${f}(−1) = ${f}(1) = 0; applies (and gives ${c} = 0).`,
          },
          { label: `${fx} = ${abs(x)}`, nudge: null },
          { label: `${fx} = ${x}<sup>4</sup>`, nudge: `<b>(c)</b> ${x}<sup>4</sup>: smooth, ${f}(−1) = ${f}(1) = 1; applies.` },
          {
            label: `${fx} = cos(${fr(`π${x}`, '2')})`,
            nudge: `<b>(d)</b> cos(${fr(`π${x}`, '2')}): smooth, ${f}(−1) = ${f}(1) = 0; applies.`,
          },
        ],
        correct: 1,
        solution: `${abs(x)} satisfies ${f}(−1) = ${f}(1) = 1, but it is <b>not differentiable</b> at the corner ${x} = 0 ∈ ${OI('−1', '1')}, so a hypothesis fails. Only <b>(b)</b> has the non-differentiable point.`,
      },
      {
        t: 'mcq',
        q: `For ${fx} = ${sq(x)} on ${CI('1', '3')}, the value ${c} guaranteed by the Mean Value Theorem is:`,
        opts: [
          { label: '4', nudge: `<b>(a)</b> mistakes the average slope (4) for ${c} itself.` },
          { label: '2', nudge: null },
          { label: '√5', nudge: '<b>(c)</b> is the root-mean-square of the endpoints, √5 ≈ 2.24, which is not the MVT point.' },
          {
            label: '1.5',
            nudge: `<b>(d)</b> fails the test: ${f}′(1.5) = 3 ≠ 4. (For a parabola the MVT point is the midpoint, ${c} = 2.)`,
          },
        ],
        correct: 1,
        solution: `Average slope = ${fr('9 − 1', '3 − 1')} = 4; set ${fpc} = 2${c} = 4 ⇒ ${c} = 2 ∈ ${OI('1', '3')}.`,
      },
      {
        t: 'mcq',
        q: `The curve ${y} = ${x}<sup>3</sup> is concave <b>up</b> on which interval?`,
        opts: [
          { label: OI('−∞', '0'), nudge: `<b>(a)</b> is where ${rel(`${y}″`, '<', '0')}: concave down.` },
          { label: OI('0', '∞'), nudge: null },
          {
            label: OI('−∞', '∞'),
            nudge: `<b>(c)</b> wrongly assumes a single concavity throughout; the sign of ${y}″ changes at ${x} = 0 (an inflection point).`,
          },
          { label: 'nowhere', nudge: `<b>(d)</b> ignores that ${y}″ is nonzero away from the origin.` },
        ],
        correct: 1,
        solution: `Concavity is governed by ${y}″ = 6${x}, which is positive exactly when ${rel(x, '>', '0')}.`,
      },
      {
        t: 'mcq',
        q: `If ${f} is differentiable on ${AB} and ${fpx} ≠ 0 for every ${x} ∈ ${OAB}, then in ${AB} the function ${f} can have <b>at most</b>:`,
        opts: [
          {
            label: '0 roots',
            nudge: `<b>(a)</b> is too strong: ${f} may still have one root (e.g. a strictly increasing function crossing zero once).`,
          },
          { label: '1 root', nudge: null },
          { label: '2 roots', nudge: '<b>(c)</b> and <b>(d)</b> are exactly what Rolle’s theorem rules out.' },
          { label: 'infinitely many roots', nudge: '<b>(c)</b> and <b>(d)</b> are exactly what Rolle’s theorem rules out.' },
        ],
        correct: 1,
        solution: `If ${f} had two distinct roots ${p} < ${q}, then ${f}(${p}) = ${f}(${q}) = 0, and Rolle’s theorem would force some ${c} ∈ ${OI(p, q)} with ${fpc} = 0, contradicting ${rel(`${f}′`, '≠', '0')}. So at most one root.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Applying the theorem without checking hypotheses.</b> The classic ${abs(x)} / greatest-integer / piecewise trap satisfies the obvious condition while breaking continuity or differentiability. Always validate continuity on ${AB} <b>and</b> differentiability on ${OAB} first.`,
          `<b>Confusing Rolle with MVT.</b> Rolle additionally needs ${fa} = ${fb} and concludes ${fpc} = 0; MVT needs no such equality and concludes ${fpc} = average slope. Using ${fpc} = 0 when ${rel(fa, '≠', fb)} is wrong.`,
          `<b>Accepting a ${c} outside the open interval.</b> The guaranteed point must lie strictly inside ${OAB}; a solution landing on an endpoint does not count.`,
          `<b>The parametric/implicit second-derivative slip.</b> Same error as in the Key formulas and definitions part: for ${PARAMXY}, never write ${D2Y} = ${NAIVE}. Differentiate the slope w.r.t. ${t}, then divide by ${DXDT} again.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> Remember Rolle is just MVT with a horizontal secant: learn one picture, get both. For inequality proofs at JEE Advanced, MVT is the default weapon: choose ${f} so that ${fpc} is the quantity you want to bound, then squeeze using ${a} < ${c} < ${b}. And for “how many roots can this have,” reach for Rolle: two roots always manufacture a zero of ${f}′ between them.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: `<b>Second derivative:</b> ${y}″ = ${D}(${DYDX}); sign of ${y}″ gives concavity (+ = cup ∪, − = cap ∩).`,
            note: '',
          },
          {
            f: `<b>Rolle:</b> continuous on ${AB}, differentiable on ${OAB}, <b>and</b> ${fa} = ${fb} ⇒ some ${c} ∈ ${OAB} with ${fpc} = 0.`,
            note: '',
          },
          {
            f: `<b>Lagrange MVT:</b> continuous on ${AB}, differentiable on ${OAB} ⇒ some ${c} ∈ ${OAB} with ${MVT}.`,
            note: '',
          },
          { f: `<b>Link:</b> Rolle = MVT when the secant is horizontal (${fa} = ${fb}).`, note: '' },
          {
            f: `<b>Both are existence theorems:</b> guarantee at least one interior ${c}; check hypotheses first, accept only ${c} ∈ ${OAB}.`,
            note: '',
          },
        ],
        aids: ['Rolle: “same heights ⇒ a flat spot.”', 'MVT: “your average speed is your exact speed at some instant.”'],
      },
    ],
  },
];
