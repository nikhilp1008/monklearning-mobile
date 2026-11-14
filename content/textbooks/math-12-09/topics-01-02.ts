import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Topics 01–02, pp. 581–596 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's "Part 1 — Order,
 * Degree & Solutions" (its heading and Exam Relevance box sit on p. 581 under
 * the chapter's contents; text pp. 581–589) and "Part 2 — Formation of
 * Differential Equations" (pp. 590–596; p. 596 carries only the cheat sheet's
 * closing line, which the errata says belongs with the cheat sheet). The
 * chapter's title and contents (pp. 580–581) are not copied. Each topic opens
 * with its "Exam Relevance:" box as a part of its own, then is split at its
 * Sections 1 to 8; the "Cheat Sheet Box" is the part "Cheat sheet", and the
 * bold line printed after it stays as the topic's last paragraph.
 * No drawings on these pages (the vector shapes are section rules, fraction
 * bars, radical bars, table rules and boxed results).
 * d/dx with an upright d, e upright; every fraction is stacked (<frac>), a
 * slash kept only inside a raised run (e<sup>dy/dx</sup>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const a = I('a');
const b = I('b');
const c = I('c');
const f = I('f');
const g = I('g');
const k = I('k');
const m = I('m');
const n = I('n');
const r = I('r');
const w = I('w');
const x = I('x');
const y = I('y');
const A = I('A');
const B = I('B');
const C = I('C');
const D = I('D');
const F = I('F');
const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const c1 = sb(c, '1');
const c2 = sb(c, '2');
const c3 = sb(c, '3');
const c4 = sb(c, '4');
const c5 = sb(c, '5');
const a1 = sb(a, '1');
const a2 = sb(a, '2');
const an = sb(a, n);
const sq = (s: string) => `${s}<sup>2</sup>`;
/** A function name glued to its argument: "cos x". */
const fn = (name: string, arg: string) => `${name}${NB}${arg}`;
const SINX = fn('sin', x);
const COSX = fn('cos', x);
const ex = (p: string) => `e<sup>${p}</sup>`;

/** dy/dx, d²y/dx², d³y/dx³, dⁿy/dxⁿ, dᵏy/dxᵏ, with an upright d. */
const dy = fr(`d${y}`, `d${x}`);
const dN = (p: string) => fr(`d<sup>${p}</sup>${y}`, `d${x}<sup>${p}</sup>`);
const d2y = dN('2');
const d3y = dN('3');
const dny = dN(n);
const dky = dN(k);
/** e raised to dy/dx: the slash stays inside the raised run. */
const EDY = ex(`d${y}/d${x}`);
const EDOT = ex('(·)');
const ATAN = 'tan<sup>−1</sup>';
const YX = fr(y, x);
const X2 = sq(x);
const Y2 = sq(y);
const CIRCLE = `${X2} + ${Y2} + 2${I('gx')} + 2${I('fy')} + ${c} = 0`;
const C12 = `(${c1} + ${c2})`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · pp. 581–589 ────────────────
  {
    n: '01',
    title: 'Order, Degree & Solutions',
    kalam: 'A differential equation is simply any equation that contains a derivative of an unknown function.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the gateway topic of the chapter and one of the most reliably scored topics in all of Class 12 calculus. CBSE Boards almost always carry a guaranteed 1-mark question asking for order and/or degree ${ESTIMATE}. JEE Main runs 1–2 questions a year, usually an arbitrary-constants-to-order count or an order and degree read inside a formation problem; the pure “degree is not defined” trap is more a Board and CUET favourite ${ESTIMATE}. JEE Advanced rarely asks it in isolation but uses the order concept as a hidden first step in curve-family and functional-equation problems ${ESTIMATE}. Master this and you bank easy marks while building the vocabulary the rest of the chapter assumes.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Imagine you are watching a cup of hot chai cool down on a winter morning in Shimla. You cannot easily write a formula that tells you the exact temperature at 9:47 a.m.; that’s hard. But you can state something simpler and truer: <b>the rate at which the chai cools is proportional to how much hotter it is than the room.</b> That sentence, a statement about a rate of change rather than about the value itself, is the soul of a differential equation.',
      },
      {
        t: 'p',
        html: 'A <b>differential equation</b> is simply any equation that contains a derivative of an unknown function. Instead of handing you the function directly, it hands you a rule about how the function changes, and your job later in the chapter is to “undo” that rule and recover the function. For now, in this topic, we are not solving anything: we are learning to <b>read, classify, and verify</b> these equations. Think of it as learning to read the scoreboard before you learn to play the match.',
      },
      {
        t: 'p',
        html: `Two quick classifications you must internalise. If the unknown function depends on <b>one</b> independent variable (say everything is a function of ${x}), the equation is an <b>ordinary differential equation (ODE)</b>: this is all of Class 12. If it involves partial derivatives with respect to <b>several</b> independent variables, it is a <b>partial differential equation (PDE)</b>: you will meet those in engineering, not here.`,
      },
      {
        t: 'p',
        html: 'Now, the two numbers that fingerprint every differential equation:',
      },
      {
        t: 'p',
        html: `<b>Order</b> is the order of the <b>highest</b> derivative appearing in the equation. If the biggest derivative you can spot is ${d2y}, the order is 2, no matter how many lower derivatives crowd around it. Order answers the question: “What is the deepest level of change this equation talks about?”`,
      },
      {
        t: 'p',
        html: '<b>Degree</b> is subtler. Once the equation has been written as a <b>polynomial in its derivatives</b> (no roots, no fractions, no derivative trapped inside a sine or an exponential), the degree is the <b>power of the highest-order derivative</b>. Degree answers: “To what power is that deepest derivative raised, after we tidy the equation up?”',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture the derivatives as players in a cricket team batting order. The order of the equation is the rank of your top-order batsman: the highest one who walks out. The degree is how many runs that exact top batsman scores once the innings is cleaned up (radicals cleared, fractions removed). You never read the degree off a messy scorecard; you settle the match first, then count.',
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions, read this twice:</b><br>• <b>Degree exists only when the equation is a polynomial in all its derivatives.</b> The moment a derivative sits inside a transcendental function (sin(${dy}), ${EDY}, log(${d2y})), the degree is <b>not defined</b>, because expanding such a function gives an infinite series of powers of the derivative. There is no single “highest power” to point to.<br>• <b>You must clear radicals and fractional powers before reading the degree.</b> A √ or a power like ${fr('3', '2')} over a derivative is not yet a polynomial form. Order is unaffected by this tidying, but degree absolutely is.<br>• <b>Degree is always a positive integer when it exists</b>: never a fraction, never negative.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: `A general differential equation of order ${n} can be written abstractly as:`,
      },
      {
        t: 'formula',
        kicker: `General differential equation of${NB}order${NB}${n}`,
        main: `${F}(${x}, ${y}, ${dy}, ${d2y}, …, ${dny}) = 0`,
        legend: [`${n} = the order of the equation`, `${y} = the dependent variable`, `${x} = the independent variable`],
        note: null,
      },
      {
        t: 'table',
        title: null,
        head: ['Term', 'Definition'],
        rows: [
          ['Differential equation', `An equation relating an unknown function ${y}, the independent variable ${x}, and one or more derivatives of ${y}.`],
          ['Ordinary DE (ODE)', 'Involves derivatives with respect to a single independent variable.'],
          ['Partial DE (PDE)', 'Involves derivatives with respect to more than one independent variable.'],
          ['Order', 'The order of the highest-order derivative present.'],
          ['Degree', 'The power of the highest-order derivative, <b>after</b> the equation is made polynomial in its derivatives. Defined only if such a polynomial form exists.'],
          ['Solution', `Any relation between ${x} and ${y} (free of derivatives) that satisfies the differential equation.`],
          ['General solution', 'A solution containing exactly <b>as many independent arbitrary constants as the order</b> of the equation.'],
          ['Particular solution', 'A solution obtained from the general solution by fixing the arbitrary constants: it contains <b>no</b> arbitrary constants.'],
        ],
      },
      {
        t: 'p',
        html: `<b>Notation key.</b> ${y} is the dependent variable; ${x} is the independent variable; ${dny} (or the prime form ${y}<sup>(${n})</sup>) is the ${n}-th derivative; arbitrary constants are written ${A}, ${B}, ${C}, ${c1}, ${c2}, …`,
      },
      {
        t: 'p',
        html: `<b>Three structural properties worth memorising:</b><br>1. <b>Order = number of independent arbitrary constants</b> in the general solution. A general solution of an order-3 equation carries exactly three free constants: no more, no fewer.<br>2. <b>Degree need not equal order.</b> They are independent fingerprints. The equation<br>(${d2y})<sup>4</sup> + ${dy} = 0<br>has order 2 but degree 4.<br>3. <b>A particular solution is just the general solution with its constants pinned down</b> by initial/boundary conditions (e.g. “${y}${NB}=${NB}2 when ${x}${NB}=${NB}0”).`,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no formal proof attached to order/degree: this topic is procedural. Here are the four routines you will use on every problem, with the reasoning behind each step.',
      },
      {
        t: 'proc',
        title: 'Procedure A: Finding the order',
        steps: [
          'Scan the equation for every derivative present.',
          `Identify the one with the <b>highest order</b> (the deepest ${dky}).`,
          `That ${k} is the order. Ignore the powers entirely: powers are a degree question, not an order question.`,
        ],
      },
      {
        t: 'p',
        html: '<b>Why it works:</b> order measures the “depth” of change the equation encodes, and depth is set by the highest derivative regardless of how it is dressed up.',
      },
      {
        t: 'proc',
        title: 'Procedure B: Finding the degree',
        steps: [
          `<b>Check the gate first:</b> is every derivative free of transcendental wrappers (sin, cos, log, ${EDOT}, ${ATAN}, …)? If no, stop: <b>degree is not defined.</b>`,
          '<b>Clean the equation:</b> clear all radicals and fractional powers (usually by raising both sides to a suitable integer power) and clear denominators, so the equation is a genuine polynomial in the derivatives.',
          'Read off the <b>power of the highest-order derivative</b> in this cleaned form. That power is the degree.',
        ],
      },
      {
        t: 'p',
        html: `<b>Why the cleaning step matters:</b> “degree” is only meaningful for polynomials. A square root or a ${fr('3', '2')} power is not polynomial; squaring converts it into one. (The squared equation can admit extra solutions, those of the equation with the root’s sign reversed, but the order and degree are read from this cleared form.) The order is invariant under this step: only the readable degree changes.`,
      },
      {
        t: 'p',
        html: `<b>A worked micro-example of the gate.</b> For ${d2y} + ${EDY} = 0, the term ${EDY} expands as<br>1 + ${dy} + ${fr('1', '2!')}(${dy})<sup>2</sup> + ⋯,<br>an infinite chain of powers of ${dy}. There is no highest power, so <b>degree is not defined</b>, even though the order is comfortably 2.`,
      },
      {
        t: 'proc',
        title: 'Procedure C: Counting arbitrary constants → order',
        steps: [
          'Write the family of solutions/curves.',
          'Count the <b>independent</b> arbitrary constants: constants that cannot be merged into one another.',
          'That count is the order of the differential equation the family satisfies.',
        ],
      },
      {
        t: 'p',
        html: `<b>Critical subtlety:</b> constants can disguise themselves. In ${y} = ${I('Ax')} + ${A}<sup>3</sup>, both terms come from the single constant ${A}, so there is only <b>one</b> independent constant ⇒ order 1, not 2. Likewise ${c1} + ${c2} behaves as a single constant. Always ask “can these be combined?” before counting.`,
      },
      {
        t: 'proc',
        title: 'Procedure D: Verifying a proposed solution',
        steps: [
          `From the candidate ${y}, compute every derivative the equation needs.`,
          `Substitute ${y} and its derivatives into the <b>left-hand side</b>.`,
          `Simplify. If the LHS reduces identically to the RHS for all ${x}, the candidate is a genuine solution; otherwise it is not.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the order and degree of<br>${d3y} + 5(${d2y})<sup>2</sup> − 7${dy} + 4${y} = ${COSX}.`,
        steps: [
          '<b>Given:</b> the equation above.',
          `<b>Highest derivative present:</b> ${d3y} ⇒ <b>order</b> = 3.`,
          `<b>Degree gate:</b> every derivative appears as a plain polynomial term: no derivative inside a sine, exponential, or root. (The ${COSX} on the right involves ${x}, <b>not</b> a derivative, so it does not break the gate.) Degree is defined.`,
          `<b>Power of the highest-order derivative</b> ${d3y} is 1 ⇒ <b>degree</b> = 1.`,
          '<b>Presentation tip for the exam:</b> always write the two as a labelled pair, “Order = 3, Degree = 1”: examiners award the mark on the explicit statement.',
        ],
        ans: 'Order 3, degree 1',
      },
      {
        t: 'ex',
        tag: 'CUET / JEE Main Speed Trap',
        q: `State the degree of each, in under fifteen seconds:<br>(i) ${d2y} = sin(${dy})<br>(ii) √(1 + (${dy})<sup>2</sup>) = ${d2y}.`,
        steps: [
          `<b>Solution (mental-elimination style).</b> <b>(i)</b> The derivative ${dy} is trapped inside a sine. <b>Trip the gate immediately</b>: a transcendental function of a derivative means <b>degree not defined.</b> Don’t compute anything.`,
          `<b>(ii)</b> There’s a square root over a derivative expression: not yet polynomial. Square both sides first:<br>1 + (${dy})<sup>2</sup> = (${d2y})<sup>2</sup>.`,
          `Now it’s polynomial. The highest-order derivative is ${d2y}, and its power is 2 ⇒ <b>degree</b> = 2 (order is 2).`,
          '<b>The trap:</b> students square first in (i) too, “rescue” the sine somehow, and invent a degree, or they read degree = 1 off (ii) without squaring. Speed rule: <b>see a root over a derivative → square; see a transcendental wrapper → stop, undefined.</b>',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level, multi-concept: formation + order',
        q: `A family of curves is given by ${y} = ${a}${NB}${ex(`2${x}`)} + ${b}${NB}${ex(`−2${x}`)}. Form its differential equation and hence state its order and degree.`,
        steps: [
          'This links formation (Procedure C) with order/degree reading.',
          `There are <b>two</b> independent arbitrary constants, ${a} and ${b}, so we differentiate twice and eliminate both.`,
          `${y} = ${a}${ex(`2${x}`)} + ${b}${ex(`−2${x}`)}<br>${dy} = 2${a}${ex(`2${x}`)} − 2${b}${ex(`−2${x}`)}<br>${d2y} = 4${a}${ex(`2${x}`)} + 4${b}${ex(`−2${x}`)}<br>= 4(${a}${ex(`2${x}`)} + ${b}${ex(`−2${x}`)}) = 4${y}.`,
          `Therefore the differential equation is ${d2y} − 4${y} = 0.`,
          `Two arbitrary constants ⇒ we expected order 2, and indeed the highest derivative is ${d2y} ⇒ <b>order</b> = 2.`,
          'It is polynomial in the derivative, power 1 ⇒ <b>degree</b> = 1.',
          '<b>Cross-check (Procedure C consistency):</b> number of independent constants (2) matches the order (2): a built-in sanity check that your formation was done correctly.',
        ],
        ans: `${d2y} − 4${y} = 0`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: the arbitrary-constant collapse',
        q: `Find the order of the differential equation whose general solution is<br>${y} = ${C12}${NB}${ex(`${x}+${c}₃`)} + ${c4}${NB}sin(${x} + ${c5}),<br>where ${c1}, ${c2}, ${c3}, ${c4}, ${c5} are arbitrary constants.`,
        steps: [
          'The naive answer “5” is the trap. The order equals the number of independent arbitrary constants, so we must check which of these five genuinely cannot be merged.',
          `Look term by term:<br>• ${C12}${NB}${ex(`${x}+${c}₃`)} = ${C12}${NB}${ex(`${c}₃`)} · ${ex(x)}. The whole prefactor ${C12}${NB}${ex(`${c}₃`)} collapses into a <b>single</b> new constant, call it ${A}. So this term is just ${A}${NB}${ex(x)}: <b>one</b> independent constant from three original ones.<br>• ${c4}${NB}sin(${x} + ${c5})<br>= ${c4}(${SINX} cos${NB}${c5} + ${COSX} sin${NB}${c5})<br>= (${c4} cos${NB}${c5})${NB}${SINX} + (${c4} sin${NB}${c5})${NB}${COSX}.<br>This contributes <b>two</b> independent constants (the coefficients of ${SINX} and ${COSX}).`,
          'Independent count = 1 + 2 = 3.',
          `<b>The deep point:</b> arbitrary constants are independent only if no algebraic identity lets you fuse them. Sums inside the same coefficient, and constants hiding inside ${EDOT} exponents, almost always collapse. Train your eye to simplify before you count.`,
        ],
        ans: 'Order = 3',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'p',
        html: 'Attempt these on your own; final answers follow.',
      },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the order and degree of 2${d2y} + 3${dy} + ${y} = 0.`,
            a: 'order 2, degree 1',
          },
          {
            q: `<b>[CUET]</b> Write the degree of ${d2y} + cos(${dy}) = 0.`,
            a: 'degree not defined',
          },
          {
            q: `<b>[JEE Main]</b> Find the order and degree of (1 + ${dy})<sup>3</sup> = (${d2y})<sup>2</sup>.`,
            a: 'order 2, degree 2',
          },
          {
            q: `<b>[JEE Main]</b> Form the differential equation of the family ${y} = ${I('mx')}, where ${m} is an arbitrary constant, and state its order.`,
            a: `${dy} = ${YX} (equivalently ${x}${dy} − ${y} = 0), order 1`,
          },
          {
            q: `<b>[JEE Advanced]</b> Determine the order of the differential equation whose general solution is ${y} = ${A}${NB}cos(2${x} + ${B}) + ${C}${ex(I('Dx'))}, where ${A}, ${B}, ${C}, ${D} are arbitrary constants.`,
            a: `order 4 (independent constants number four: two from ${A}${NB}cos(2${x} + ${B}), two from ${C}${ex(I('Dx'))})`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The order and degree of<br>[1 + (${dy})<sup>2</sup>]<sup>3/2</sup> = ${k}${d2y}<br>are respectively:`,
        opts: [
          {
            label: '2, 3',
            nudge: `<b>(A)</b> comes from reading the 3 in the exponent ${fr('3', '2')} as the degree without squaring: confusing the power on the first-derivative bracket with the degree.`,
          },
          { label: '2, 2', nudge: null },
          {
            label: '2, 1',
            nudge: `<b>(C)</b> comes from reading degree off the unsquared form (power 1 on ${d2y}): forgetting that fractional powers must be cleared first.`,
          },
          { label: '1, 2', nudge: '<b>(D)</b> misreads the order; the curvature term is second order, not first.' },
        ],
        correct: 1,
        solution: `Squaring both sides to clear the ${fr('3', '2')} power gives<br>[1 + (${dy})<sup>2</sup>]<sup>3</sup> = ${k}<sup>2</sup>(${d2y})<sup>2</sup>.<br>Highest derivative ${d2y} ⇒ order 2; its power is now 2 ⇒ degree 2.`,
      },
      {
        t: 'mcq',
        q: `The degree of the differential equation<br>${d2y} + 3(${dy})<sup>2</sup> = ${x}${NB}log(${d2y})<br>is:`,
        opts: [
          {
            label: '1',
            nudge: `<b>(A)</b> picks the power of ${d2y} on the left and ignores the right side entirely: a partial-reading error.`,
          },
          {
            label: '2',
            nudge: `<b>(B)</b> picks up the 2 from (${dy})<sup>2</sup>, but that’s a lower-order derivative; degree is about the highest one anyway.`,
          },
          { label: '3', nudge: '<b>(C)</b> is a distractor with no basis: chosen by students who feel “undefined” can’t be a real option.' },
          { label: 'not defined', nudge: null },
        ],
        correct: 3,
        solution: `The highest-order derivative ${d2y} appears inside a logarithm on the right. A transcendental function of a derivative cannot be reduced to a polynomial form, so <b>degree is not defined.</b>`,
      },
      {
        t: 'mcq',
        q: `The differential equation of the family ${y} = ${c1}${ex(`3${x}`)} + ${c2}${ex(`3${x}`)} has order:`,
        opts: [
          { label: '0', nudge: '<b>(A)</b> would require zero free constants (a particular solution), which is false.' },
          { label: '1', nudge: null },
          { label: '2', nudge: `<b>(C)</b> is the trap: counting two written constants ${c1}, ${c2} without noticing they merge.` },
          { label: 'not defined', nudge: '<b>(D)</b> confuses order with the degree-undefined situation; order is always defined here.' },
        ],
        correct: 1,
        solution: `Since both terms have the same exponential ${ex(`3${x}`)}, we have ${y} = ${C12}${ex(`3${x}`)} = ${A}${ex(`3${x}`)}, a <b>single</b> independent constant. One constant ⇒ order 1 (the equation is ${dy} = 3${y}).`,
      },
      {
        t: 'mcq',
        q: `Which of the following functions is a solution of ${d2y} + 9${y} = 0?`,
        opts: [
          {
            label: `${y} = ${ex(`3${x}`)}`,
            nudge: `<b>(A)</b>, <b>(D)</b> give ${d2y} = 9${y}, so the LHS becomes 9${y} + 9${y} = 18${y} ≠ 0: wrong sign of curvature (these solve ${y}″ − 9${y} = 0, the trap of mismatching the sign).`,
          },
          { label: `${y} = ${fn('cos', `3${x}`)}`, nudge: null },
          {
            label: `${y} = ${COSX}`,
            nudge: `<b>(C)</b> ${y} = ${COSX} gives ${d2y} = −${COSX}, so LHS = −${COSX} + 9${NB}${COSX} = 8${NB}${COSX} ≠ 0: right family, wrong frequency (forgot the factor 3 inside).`,
          },
          {
            label: `${y} = ${ex(`−3${x}`)}`,
            nudge: `<b>(A)</b>, <b>(D)</b> give ${d2y} = 9${y}, so the LHS becomes 9${y} + 9${y} = 18${y} ≠ 0: wrong sign of curvature (these solve ${y}″ − 9${y} = 0, the trap of mismatching the sign).`,
          },
        ],
        correct: 1,
        solution: `Verify by Procedure D: for ${y} = ${fn('cos', `3${x}`)},<br>${dy} = −3${NB}${fn('sin', `3${x}`)},<br><br>${d2y} = −9${NB}${fn('cos', `3${x}`)}.<br><br>Then ${d2y} + 9${y} = −9${NB}${fn('cos', `3${x}`)} + 9${NB}${fn('cos', `3${x}`)} = 0. ✓`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Reading degree off a messy equation.</b> Students announce the degree before clearing radicals, fractional powers, or denominators. Always reach the polynomial-in-derivatives form first.',
          `<b>Forcing a degree onto a non-polynomial equation.</b> If a derivative hides inside sin, log, ${EDOT}, ${ATAN}, etc., the honest answer is “<b>not defined</b>”, and that is a complete, correct answer, not a cop-out.`,
          `<b>Taking the power of the wrong derivative.</b> Degree uses the power of the <b>highest-order</b> derivative, not the largest power anywhere. In (${dy})<sup>5</sup> + ${d2y} = 0, the degree is 1 (power of ${d2y}), even though a 5 is staring at you.`,
          `<b>Counting written constants instead of independent ones.</b> ${c1} + ${c2}, ${c1}${c2}, and constants buried in exponents collapse. Simplify, then count.`,
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> Run a two-second gate on every order/degree question: <b>“Is any derivative inside a sine/log/exp, or under a root?”</b> If inside a transcendental → degree undefined, done. If under a root → square, then read. If neither → read the power of the top derivative directly. This single reflex prevents three of the four mistakes above.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Order</b> = order of the <b>highest</b> derivative present.', note: '(Powers don’t matter for order.)' },
          { f: '<b>Degree</b> = power of the highest-order derivative, <b>only after</b> the equation is polynomial in its derivatives.', note: '' },
          { f: `<b>Degree is NOT defined</b> if any derivative sits inside a transcendental function (sin, log, ${EDOT}, ${ATAN}, …).`, note: '' },
          { f: '<b>Clear radicals & fractional powers first</b>', note: 'order stays, degree changes.' },
          {
            f: '<b>Order</b> = <b>number of independent arbitrary constants</b> in the general solution.',
            note: 'Collapse hidden constants before counting.',
          },
          { f: '<b>General solution:</b> constants = order. <b>Particular solution:</b> no constants.', note: '' },
        ],
        aids: [
          '“Order is the rank of the boss derivative; degree is the boss’s power, after the room is cleaned.”',
          '“No polynomial, no degree.”',
          '“Clean before you count.” (radicals/fractions out, then read degree)',
          '“Constants = Order” (independent ones only).',
        ],
      },
      {
        t: 'p',
        html: '<b>Order: highest derivative.<br>Degree: its power, polynomial form, else undefined.</b>',
      },
    ],
  },

  // ──────────────── Topic 02 · pp. 590–596 ────────────────
  {
    n: '02',
    title: 'Formation of Differential Equations',
    kalam: 'Eliminate the arbitrary constants of a family to get its differential equation.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Older CBSE papers often set a 2–3 mark question here (“form the differential equation of the family…”), but the rationalised NCERT book no longer includes formation of differential equations and the current CBSE syllabus does not list it, as far as we know. JEE Main asks it as an order-counting MCQ once a year, often with a constant-collapse trap ${ESTIMATE}. It is the reverse of solving and the conceptual bridge between “what is a solution” (Topic 01) and “how to solve” (Topics 03–04), so it cements the whole chapter.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Solving a differential equation takes you from a DE to a family of curves. <b>Formation goes the other way</b>: you start with a whole family of curves (described by an equation carrying one or more arbitrary constants) and you hunt for the single differential equation that every member of that family obeys.',
      },
      {
        t: 'p',
        html: `Think of a family like “all straight lines through the origin,” written ${y} = ${I('mx')}. The constant ${m} is a dial: turn it and you get a different line, but all of them share one property: at every point the slope equals ${YX}. That shared property, written with derivatives and <b>stripped of the dial</b> ${m}, is the differential equation of the family:<br>${dy} = ${YX}.<br>The arbitrary constant has been eliminated; what remains is the family’s “DNA.”`,
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A family of curves is like a batch of biscuits from one cutter: different positions on the tray (the arbitrary constants), identical shape (the underlying rule). Formation is reverse-engineering the cutter from the biscuits: you differentiate to expose the rule and then erase the position information (the constants).',
      },
      {
        t: 'p',
        html: 'The single most important fact controls everything: <b>the number of independent arbitrary constants equals the order of the resulting differential equation.</b> One constant ⇒ differentiate once ⇒ order-1 DE. Two constants ⇒ differentiate twice ⇒ order-2 DE. Each differentiation gives you one more equation, and you need exactly enough equations to eliminate every constant.',
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions, read carefully:</b><br>• <b>Count independent constants, not written ones.</b> Constants that merge (${c1} + ${c2}, or a constant buried in an exponent like ${ex(c)}) count as one. Miscounting here gives the wrong order.<br>• <b>You must differentiate exactly as many times as there are independent constants</b>: no fewer (you couldn’t eliminate them all) and the result must be <b>free of every arbitrary constant</b>. A constant left in the “answer” means the job isn’t done.<br>• <b>The final DE must contain only ${x}, ${y}, and derivatives</b>: never the arbitrary constants and never a brand-new constant introduced along the way.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: `A <b>family of curves</b> with ${n} independent arbitrary constants ${a1}, ${a2}, …, ${an} is written:`,
      },
      {
        t: 'formula',
        kicker: 'Family of curves',
        main: `${F}(${x}, ${y}, ${a1}, ${a2}, …, ${an}) = 0`,
        legend: [`${F} = a relation among ${x}, ${y} and the constants`, `${a1}, …, ${an} = the arbitrary constants of the family`, `${n} = the number of independent constants`],
        note: null,
      },
      {
        t: 'p',
        html: `Its <b>differential equation</b> is the relation obtained by eliminating all ${n} constants, and it has the form:`,
      },
      {
        t: 'formula',
        kicker: 'Differential equation of the family',
        main: `Φ(${x}, ${y}, ${dy}, …, ${dny}) = 0`,
        legend: [`Φ = the resulting relation among ${x}, ${y} and derivatives`, `${n} = the order (the number of independent constants)`],
        note: `A differential equation of <b>order</b> ${n}, free of the constants.`,
      },
      {
        t: 'defgrid',
        title: 'Notation key: symbol and meaning',
        rows: [
          { k: `${a1}, …, ${an} (or ${A}, ${B}, ${C}, ${m}, ${c})`, v: 'arbitrary constants of the family' },
          { k: n, v: 'number of independent constants = order of the formed DE' },
          { k: 'Φ', v: `the resulting relation among ${x}, ${y} and derivatives` },
        ],
      },
      {
        t: 'p',
        html: `<b>Three properties to lock in:</b><br>1. <b>Order = number of independent arbitrary constants.</b> This is the same principle as in Topic 01, read backwards: solving an order-${n} DE produces ${n} constants; forming a DE from ${n} constants requires order ${n}.<br>2. <b>Differentiations needed = number of constants.</b> With the original equation plus ${n} derivative equations, you have ${n} + 1 relations: exactly enough to eliminate ${n} unknown constants and keep one constant-free equation.<br>3. <b>Geometric families hide their constant count.</b> “All circles of radius ${r} with centre on the ${x}-axis” has one free parameter (the centre’s ${x}-coordinate) ⇒ order 1; “all circles in the plane”<br>${CIRCLE}<br>has three (${g},${NB}${f},${NB}${c}) ⇒ order 3.`,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'This is a procedure, not a proof. Here is the routine with the reasoning behind each step.',
      },
      {
        t: 'proc',
        title: 'Procedure: forming the differential equation',
        steps: [
          `<b>Count the independent arbitrary constants</b>, ${n}. Merge any that collapse (sums in one coefficient, constants inside exponents).`,
          `<b>Differentiate the given equation ${n} times</b> with respect to ${x}. Each differentiation produces a new equation.`,
          `<b>Eliminate the ${n} constants</b> using the original equation together with the ${n} derivative equations, by substitution or by treating the relations as simultaneous equations in the constants.`,
          `<b>Write the result</b> purely in ${x}, ${y}, and derivatives. Confirm no arbitrary constant survives.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Why differentiate ${n} times:</b> each independent constant is one “degree of freedom.” Differentiating once removes a purely additive constant immediately, but in general you need ${n} independent relations beyond the original to solve for and cancel ${n} unknowns. Stopping early leaves a constant behind; differentiating more often than needed only gives an equation of higher order, which a larger family also satisfies, so stop at ${n}.`,
      },
      {
        t: 'p',
        html: '<b>Quick check before you start:</b> glance at the family and predict the order from the constant count. If your final DE’s order doesn’t match, you either miscounted constants (collapse!) or under-differentiated.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level (older papers)',
        q: `Form the differential equation of the family of parabolas ${Y2} = 4${I('ax')}, where ${a} is an arbitrary constant.`,
        steps: [
          `<b>Independent constants:</b> just ${a} ⇒ ${n} = 1 ⇒ differentiate once, order-1 DE expected.`,
          `<b>Differentiate:</b> 2${y}${dy} = 4${a} ⇒ 4${a} = 2${y}${dy}.`,
          `<b>Eliminate ${a}:</b> substitute 4${a} into ${Y2} = 4${I('ax')}:<br>${Y2} = (2${y}${dy})${x} ⟹ ${y} = 2${x}${dy}.`,
          '<b>Presentation tip:</b> state the constant count and the expected order up front: examiners reward the reasoning, and it catches mistakes early.',
        ],
        ans: `2${x}${dy} − ${y} = 0 (order 1, degree 1)`,
      },
      {
        t: 'ex',
        tag: 'CUET / JEE Main Speed Trap',
        q: `Form the differential equation of ${y} = ${A}${NB}${COSX} + ${B}${NB}${SINX}.`,
        steps: [
          `Two independent constants ${A}, ${B} ⇒ ${n} = 2 ⇒ differentiate <b>twice</b>, expect order 2. The speed move is to recognise the family: ${A}${NB}${COSX} + ${B}${NB}${SINX} is the general sinusoid, so its DE is the simple-harmonic equation: you can almost write the answer on sight.`,
          `${dy} = −${A}${NB}${SINX} + ${B}${NB}${COSX},<br><br>${d2y} = −${A}${NB}${COSX} − ${B}${NB}${SINX}<br>= −(${A}${NB}${COSX} + ${B}${NB}${SINX}) = −${y}.`,
          `<b>The trap:</b> students differentiate only <b>once</b>, then panic when ${A} and ${B} won’t cancel, leaving constants in the “answer.” Two constants always need two differentiations.`,
        ],
        ans: `${d2y} + ${y} = 0`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level, multi-concept: product rule + double elimination',
        q: `Form the differential equation of ${y} = ${ex(x)}(${A}${NB}${COSX} + ${B}${NB}${SINX}).`,
        steps: [
          'Two constants ⇒ order 2. This one tests the <b>product rule</b> alongside elimination.',
          `${dy} = ${ex(x)}(${A}${NB}${COSX} + ${B}${NB}${SINX})<br>+ ${ex(x)}(−${A}${NB}${SINX} + ${B}${NB}${COSX})<br>= ${y} + ${ex(x)}(−${A}${NB}${SINX} + ${B}${NB}${COSX}).`,
          `Let ${w} = ${ex(x)}(−${A}${NB}${SINX} + ${B}${NB}${COSX}), so ${dy} = ${y} + ${w} ⇒ ${w} = ${dy} − ${y}. Differentiate again:<br>${d2y} = ${dy} + ${w}′,<br>${w}′ = ${ex(x)}(−${A}${NB}${SINX} + ${B}${NB}${COSX})<br>+ ${ex(x)}(−${A}${NB}${COSX} − ${B}${NB}${SINX})<br>= ${w} − ${y}.`,
          `So ${d2y} = ${dy} + (${w} − ${y})<br>= ${dy} + (${dy} − ${y}) − ${y}.`,
          `<b>Why “multi-concept”:</b> you apply the product rule twice <b>and</b> carry an intermediate quantity ${w} through two eliminations: a small system, not a one-liner.`,
        ],
        ans: `${d2y} − 2${dy} + 2${y} = 0`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: geometric family, cross-link to homogeneous',
        q: `Form the differential equation of all circles passing through the origin with centres on the ${x}-axis: ${X2} + ${Y2} = 2${I('ax')}.`,
        steps: [
          `One free parameter ${a} (the centre is (${a},${NB}0), and every such circle passes through the origin) ⇒ order 1.`,
          `Differentiate: 2${x} + 2${y}${dy} = 2${a} ⟹ ${a} = ${x} + ${y}${dy}.`,
          `Substitute into ${X2} + ${Y2} = 2${I('ax')}:<br>${X2} + ${Y2} = 2${x}(${x} + ${y}${dy})<br>= 2${X2} + 2${I('xy')}${dy}<br>⟹ ${Y2} − ${X2} = 2${I('xy')}${dy}.`,
          `<b>The cross-link worth noticing:</b> written as ${dy} = ${fr(`${Y2} − ${X2}`, `2${I('xy')}`)}, the right-hand side depends only on ${YX}: this is a <b>homogeneous</b> differential equation (Topic 03’s Key definitions and properties part). Forming a DE here lands you exactly on a type you will learn to solve in Topic 03. <b>Remark:</b> the family of <b>all</b> circles ${CIRCLE} has three independent constants (${g},${NB}${f},${NB}${c}), so its differential equation has <b>order 3</b>: a classic exam fact.`,
        ],
        ans: `${dy} = ${fr(`${Y2} − ${X2}`, `2${I('xy')}`)} (order 1)`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'p',
        html: 'Try these yourself; final answers follow.',
      },
      {
        t: 'practice',
        items: [
          { q: `<b>[CBSE, older papers]</b> Form the DE of the family ${y} = ${C}${X2}.`, a: `${x}${dy} = 2${y}` },
          {
            q: `<b>[CBSE, older papers]</b> Form the DE of the family ${y} = ${a}${X2} + ${I('bx')} (${a}, ${b} arbitrary).`,
            a: `${X2}${d2y} − 2${x}${dy} + 2${y} = 0`,
          },
          { q: `<b>[JEE Main]</b> Form the DE of ${y} = ${A}${ex(`3${x}`)} + ${B}${ex(`−3${x}`)}.`, a: `${d2y} − 9${y} = 0` },
          { q: `<b>[JEE Main]</b> Form the DE of the family of all straight lines ${y} = ${I('mx')} + ${c}.`, a: `${d2y} = 0` },
          { q: `<b>[JEE Advanced]</b> Form the DE of the family of rectangular hyperbolas ${I('xy')}${NB}=${NB}${c}.`, a: `${x}${dy} + ${y} = 0` },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The differential equation of the family ${y} = ${I('mx')} (${m} arbitrary) is:`,
        opts: [
          { label: `${dy} = ${YX}`, nudge: null },
          { label: `${dy} = ${fr(x, y)}`, nudge: '<b>(B)</b> inverts the ratio.' },
          { label: `${dy} = ${m}`, nudge: `<b>(C)</b> leaves the arbitrary constant ${m} in the “answer”: the constant must be eliminated.` },
          { label: `${x}${dy} + ${y} = 0`, nudge: `<b>(D)</b> is the DE of ${I('xy')}${NB}=${NB}${c}, a different family.` },
        ],
        correct: 0,
        solution: `${dy} = ${m} and ${m} = ${YX}, so ${dy} = ${YX}.`,
      },
      {
        t: 'mcq',
        q: `The differential equation whose general solution is ${y} = ${A}${NB}${SINX} + ${B}${NB}${COSX} is:`,
        opts: [
          { label: `${d2y} − ${y} = 0`, nudge: `<b>(A)</b> is the DE of ${A}${ex(x)} + ${B}${ex(`−${x}`)} (sign flip: exponential, not sinusoidal).` },
          { label: `${d2y} + ${y} = 0`, nudge: null },
          { label: `${dy} + ${y} = 0`, nudge: '<b>(C)</b> is order 1: too few differentiations for two constants.' },
          { label: `${d2y} + ${dy} = 0`, nudge: '<b>(D)</b> doesn’t annihilate the sinusoid.' },
        ],
        correct: 1,
        solution: `Two constants ⇒ order 2; differentiating twice gives ${y}″ = −${y}.`,
      },
      {
        t: 'mcq',
        q: `The order of the differential equation of the family of all circles ${CIRCLE} is:`,
        opts: [
          { label: '1', nudge: '<b>(A)</b>/<b>(B)</b> undercount the constants.' },
          { label: '2', nudge: '<b>(A)</b>/<b>(B)</b> undercount the constants.' },
          { label: '3', nudge: null },
          { label: '4', nudge: '<b>(D)</b> overcounts: there is no fourth independent parameter.' },
        ],
        correct: 2,
        solution: `Three independent arbitrary constants ${g}, ${f}, ${c} ⇒ order 3.`,
      },
      {
        t: 'mcq',
        q: `The order of the differential equation of the family ${y} = ${C12}${ex(x)} + ${c3} is:`,
        opts: [
          { label: '1', nudge: `<b>(A)</b> misses the additive ${c3}.` },
          { label: '2', nudge: null },
          { label: '3', nudge: '<b>(C)</b> counts all three written constants without spotting the collapse: the headline trap.' },
          { label: 'not defined', nudge: '<b>(D)</b> confuses order with the degree-undefined case.' },
        ],
        correct: 1,
        solution: `${c1} + ${c2} collapses to a single constant, so the independent count is 2 (one from ${C12}${ex(x)}, one from ${c3}). Order 2.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Counting dependent constants as independent.</b> ${c1} + ${c2}, ${c1}${c2}, and constants inside exponents collapse: simplify before counting.`,
          `<b>Under-differentiating.</b> ${n} constants need ${n} differentiations; stopping early strands a constant in the answer.`,
          `<b>Leaving an arbitrary constant in the final DE.</b> The formed equation must contain only ${x}, ${y}, and derivatives. A surviving ${a}, ${m}, ${A}, … means the elimination is incomplete.`,
          `<b>Miscounting geometric families.</b> Translate the geometry to a parameter count first: “circles on the ${x}-axis through origin” → one parameter; “all circles” → three.`,
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (predict, then verify):</b> before differentiating, count the independent constants and write down the expected order. After eliminating, check the order matches. A mismatch instantly flags a collapse you missed or a differentiation you skipped, far faster than re-checking algebra line by line.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Goal:</b>', note: 'eliminate the arbitrary constants of a family to get its differential equation.' },
          { f: '<b>Order</b> = <b>number of independent arbitrary constants.</b>', note: '' },
          { f: '<b>Differentiate the equation as many times as there are constants</b>, then eliminate them.', note: '' },
          { f: '<b>Final DE must be free of all arbitrary constants</b>', note: `only ${x}, ${y}, derivatives remain.` },
          { f: '<b>Collapse first:</b>', note: `${c1} + ${c2} → one constant; constants in exponents merge.` },
          { f: '<b>Geometry → parameters:</b>', note: 'one free parameter ⇒ order 1; general circle ⇒ order 3.' },
        ],
        aids: [
          '“Constants in, derivatives out.” (eliminate constants via differentiation)',
          '“Count the dials = count the order.”',
          '“Differentiate once per constant.”',
          '“No constant may survive the answer.”',
        ],
      },
      {
        t: 'p',
        html: `${n} independent constants ⇒ differentiate ${n} times ⇒ order-${n} DE, constant-free.`,
      },
    ],
  },
];
