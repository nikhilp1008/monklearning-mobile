import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9 Differential Equations, Topics 03–05, pp. 597–619 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word: the
 * book's "Part 3 — Separable & Homogeneous Equations" (pp. 597–604), "Part 4 —
 * Linear Differential Equations" (pp. 605–612; p. 612 carries only the last two
 * memory aids and the closing integrating-factor line, which the errata says
 * belong with the cheat sheet) and "Part 5 — Applications of Differential
 * Equations" (pp. 613–619; p. 619 carries the last four memory aids and the
 * closing line). Each topic opens with its "Exam Relevance:" box as a part of
 * its own, then is split at its Sections 1 to 8; the "Cheat Sheet Box" is the
 * part "Cheat sheet", and the bold line printed after it stays as the topic's
 * last paragraph. "Part N" in cross-references → "Topic 0N".
 * No drawings on these pages (the vector shapes are section rules, fraction
 * bars, big brackets and boxed results).
 * d upright and glued to its variable, ∫ upright, e upright, log and ln as
 * printed; IF upright; every fraction is stacked (<frac>), a slash kept only
 * inside a raised run (e<sup>∫2/x dx</sup>) or a subscript (t<sub>1/2</sub>);
 * never a fraction inside a fraction (a slope in a denominator is written
 * y · dx/dy); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner after an opening modulus bar, so the bar never ends a line. */
const WJ = '\u2060';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const a = I('a');
const c = I('c');
const g = I('g');
const h = I('h');
const k = I('k');
const m = I('m');
const n = I('n');
const t = I('t');
const v = I('v');
const x = I('x');
const y = I('y');
const A = I('A');
const C = I('C');
const F = I('F');
const K = I('K');
const M = I('M');
const N = I('N');
const P = I('P');
const Q = I('Q');
const X = I('X');
const Y = I('Y');
const TH = I('θ');
const MU = I('μ');
const LAM = I('λ');
const PHI = I('φ');
const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const cube = (s: string) => `${s}<sup>3</sup>`;
const abs = (s: string) => `|${WJ}${s}|`;
const rel = (l: string, op: string, r: string) => `${l}${NB}${op}${NB}${r}`;
/** A function name glued to its argument: "cos x". */
const fn = (name: string, arg: string) => `${name}${NB}${arg}`;
/** e raised to a power, e upright. */
const ex = (p: string) => `e<sup>${p}</sup>`;
const PLUS_C = ` + ${C}`;

/** Derivatives with an upright d. */
const d = (top: string, bottom: string) => fr(`d${top}`, `d${bottom}`);
const DYDX = d(y, x);
const DVDX = d(v, x);
const DXDY = d(x, y);
const DYDXc = d(Y, X);
const DMUDX = d(MU, x);
const DNDT = d(N, t);
const DTHDT = d(TH, t);
const DDX = fr('d', `d${x}`);
const DDV = fr('d', `d${v}`);
/** Differentials glued to the integrand. */
const DX = `${NB}d${x}`;
const DY = `${NB}d${y}`;
const DV = `${NB}d${v}`;

const X2 = sq(x);
const Y2 = sq(y);
const V2 = sq(v);
const X3 = cube(x);
const YX = fr(y, x);
const LOGX = `log${NB}${abs(x)}`;
const gx = `${g}(${x})`;
const hy = `${h}(${y})`;
const SINX = fn('sin', x);
const COSX = fn('cos', x);
const TANX = fn('tan', x);
const COTX = fn('cot', x);
const CSCX = fn('csc', x);
const SINY = fn('sin', y);
const COSY = fn('cos', y);

// Topic 04's symbols
const IF = 'IF';
const P1 = sb(P, '1');
const Q1 = sb(Q, '1');
/** e to the integral of P dx: the integral inside the raised run is plain. */
const EP = ex(`∫${P}${NB}d${x}`);
const EP1 = ex(`∫${P1}${NB}d${y}`);

// Topic 05's symbols
const N0 = sb(N, '0');
const TH0 = sb(TH, '0');
const THS = sb(TH, 's');
const C1 = sb(C, '1');
const EKT = ex(`${k}${t}`);
const EMKT = ex(`−${k}${t}`);
const LN2 = `ln${NB}2`;
const HALF = fr('1', '2');

export const TOPICS: Topic[] = [
  // ──────────────── Topic 03 · pp. 597–604 ────────────────
  {
    n: '03',
    title: 'Separable & Homogeneous Equations',
    kalam: 'A differential equation hands you a rule about change and dares you to recover the original function.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is where you finally solve differential equations, and it is heavily examined. CBSE Boards almost always carry a 3–5 mark “solve this” question drawn from either method, frequently with an initial condition ${ESTIMATE}. JEE Main asks 1–2 questions per year, often a homogeneous equation disguised so you must first recognise its type ${ESTIMATE}. JEE Advanced layers these into curve-finding and reducible forms. The two methods here, separation of variables and the ${rel(y, '=', I('vx'))} substitution, are the workhorses of the entire chapter.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'A differential equation hands you a rule about change and dares you to recover the original function. The honest truth is that there is no single magic trick that cracks every such equation; instead we keep a toolbox, and the first job is always <b>diagnosis</b>: what kind of equation is this? This topic gives you the two most important tools and, just as importantly, teaches you to recognise when each one applies.',
      },
      {
        t: 'p',
        html: `<b>Variables separable: the “sort the laundry” method.</b> Suppose the rate of change splits cleanly into an ${x}-part and a ${y}-part, like ${DYDX} = (something in ${x}) × (something in ${y}). Then you can physically move every ${y} (and the d${y}) to one side and every ${x} (and the d${x}) to the other, like sorting mixed laundry into two baskets, and integrate each side on its own. The whole method rests on one tidy idea: if the variables can be separated, two ordinary integrals finish the job.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Imagine splitting a shared autorickshaw fare. As long as your expenses and your friend’s expenses never get tangled together, each of you just totals up your own column. Separation of variables works the moment the ${x}-costs and ${y}-costs don’t mix: you integrate each column independently.`,
      },
      {
        t: 'p',
        html: `<b>Homogeneous equations: the “switch to ratios” method.</b> Many equations refuse to separate because ${x} and ${y} are knotted together, e.g. ${DYDX} = ${fr(`${X2} + ${Y2}`, `2${I('xy')}`)}. But look closer: the right-hand side doesn’t really care about the sizes of ${x} and ${y}, only their <b>ratio</b> ${YX}. Divide top and bottom by ${X2} and it becomes a pure function of ${rel(v, '=', YX)}. Such an equation is called <b>homogeneous</b>, and the substitution ${rel(y, '=', I('vx'))} magically untangles it back into a separable equation in ${v} and ${x}.`,
      },
      {
        t: 'p',
        html: `The deep reason this works: the right-hand side is a <b>homogeneous function of degree zero</b>. Scaling both ${x} and ${y} by the same factor ${LAM} leaves it unchanged. Anything that depends only on the ratio ${YX} has this scale-invariance, and that is precisely the signature you hunt for.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions, read carefully:</b><br>• <b>Separation can silently destroy solutions.</b> When you divide both sides by some ${hy} to separate, you quietly assume ${rel(hy, '≠', '0')}. But the constant function where ${rel(hy, '=', '0')} is often also a solution, and you’ve thrown it away. Always check for these lost <b>singular solutions</b> at the end.<br>• <b>Homogeneity requires degree zero, and no stray constants.</b> ${fr(`${x} + ${y}`, `${x} − ${y}`)} is homogeneous (degree 0). But ${fr(`${x} + ${y} + 1`, `${x} − ${y}`)} is <b>not</b>: that lone +1 breaks the scale-invariance. Forcing ${rel(y, '=', I('vx'))} onto such an equation produces nonsense; those need an origin shift instead.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: '<b>Variables Separable</b><br>A first-order equation is <b>separable</b> if it can be written as',
      },
      {
        t: 'formula',
        kicker: 'Separable equation',
        main: `${DYDX} = ${gx}${NB}${hy} ⟺ ${fr(`d${y}`, hy)} = ${gx}${DX}`,
        legend: [`${g} = a function of ${x} alone`, `${h} = a function of ${y} alone (${rel(hy, '≠', '0')} where you divide)`, `${y} = dependent variable`, `${x} = independent variable`],
        note: null,
      },
      {
        t: 'p',
        html: 'Its general solution is obtained by integrating each side:',
      },
      {
        t: 'formula',
        kicker: 'General solution of a separable equation',
        main: `∫${fr(`d${y}`, hy)} = ∫${gx}${DX}${PLUS_C}`,
        legend: [`${g} = a function of ${x} alone`, `${h} = a function of ${y} alone`, `${C} = arbitrary constant`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Homogeneous Equations</b><br>A function ${F}(${x},${NB}${y}) is <b>homogeneous of degree</b> ${n} if ${F}(${LAM}${x},${NB}${LAM}${y}) = ${LAM}<sup>${n}</sup>${F}(${x},${NB}${y}). A first-order equation<br>${DYDX} = ${F}(${x},${NB}${y})<br>is a <b>homogeneous differential equation</b> if ${F} is homogeneous of <b>degree</b> 0, equivalently, if the RHS can be written purely as a function of ${rel(v, '=', YX)}:`,
      },
      {
        t: 'formula',
        kicker: 'Homogeneous differential equation',
        main: `${DYDX} = ${PHI}(${YX})`,
        legend: [`${PHI} = a function of a single argument`, `${y} = dependent variable`, `${x} = independent variable`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Reduction substitution:</b> put ${rel(y, '=', I('vx'))}, so ${DYDX} = ${v} + ${x}${DVDX}. The equation becomes`,
      },
      {
        t: 'formula',
        kicker: 'Reduction substitution',
        main: `${v} + ${x}${DVDX} = ${PHI}(${v}) ⟹ ${fr(`d${v}`, `${PHI}(${v}) − ${v}`)} = ${fr(`d${x}`, x)}`,
        legend: [`${v} = the ratio variable, ${YX}`, `${PHI} = a function of a single argument`],
        note: null,
      },
      {
        t: 'p',
        html: `which is <b>separable</b> in ${v} and ${x}. (When ${x} is the “heavier” variable, the mirror substitution ${rel(x, '=', I('vy'))} is cleaner.)`,
      },
      {
        t: 'p',
        html: `<b>Notation key.</b> ${y}: dependent variable; ${x}: independent variable; ${rel(v, '=', YX)}: the ratio variable; ${C}, ${K}, ${A}: arbitrary constants; ${PHI}: a function of a single argument.`,
      },
      {
        t: 'p',
        html: `<b>Three properties to lock in:</b><br>1. <b>Separable ⇒ one integral per side.</b> No substitution needed; the difficulty is purely the two integrals.<br>2. <b>Homogeneous ⇒ always reduces to separable</b> via ${rel(y, '=', I('vx'))}. So homogeneous problems are really “recognise the type, substitute, then separate.”<br>3. <b>Degree-zero test.</b> Replace ${x} → ${LAM}${x}, ${y} → ${LAM}${y} in the RHS; if every ${LAM} cancels, it’s homogeneous. A fast proxy: in ${M}${DX} + ${N}${DY} = 0, the equation is homogeneous if ${M} and ${N} are homogeneous of the <b>same</b> degree.`,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'This topic is procedural, so here are the two routines with the reasoning baked in.',
      },
      {
        t: 'proc',
        title: 'Procedure A: Solving a separable equation',
        steps: [
          `<b>Separate.</b> Manipulate into ${fr(`d${y}`, hy)} = ${gx}${DX}, with all ${y}’s on the left and all ${x}’s on the right.`,
          `<b>Flag the danger.</b> Note any value making ${rel(hy, '=', '0')}: these constant functions may be singular solutions you’re about to lose by dividing.`,
          `<b>Integrate both sides</b>, adding a single arbitrary constant ${C}.`,
          `<b>Simplify</b> (combine logs, exponentiate) and, if an initial condition is given, solve for ${C}.`,
          '<b>Restore lost solutions</b> identified in step 2 if they genuinely satisfy the original equation.',
        ],
      },
      {
        t: 'p',
        html: '<b>Why a single constant:</b> the two indefinite integrals each carry a constant, but their difference is just one new arbitrary constant; writing two is redundant and a common source of confusion.',
      },
      {
        t: 'proc',
        title: 'Procedure B: Solving a homogeneous equation',
        steps: [
          `<b>Confirm the type.</b> Check degree-zero homogeneity (scale test, or “same-degree ${M}, ${N}”). If a stray constant breaks it, this is not a standard homogeneous equation: don’t substitute ${rel(y, '=', I('vx'))}.`,
          `<b>Rewrite</b> the RHS as a function of ${rel(v, '=', YX)}.`,
          `<b>Substitute</b> ${rel(y, '=', I('vx'))}, ${DYDX} = ${v} + ${x}${DVDX}.`,
          `The equation collapses to ${fr(`d${v}`, `${PHI}(${v}) − ${v}`)} = ${fr(`d${x}`, x)}: now <b>separable</b>. Solve it.`,
          `<b>Back-substitute</b> ${rel(v, '=', YX)} to return to the original variables. Never leave the answer in ${v}.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Why ${rel(y, '=', I('vx'))} works:</b> a homogeneous RHS depends only on ${YX}. Forcing the unknown to “wear” the ratio explicitly (${rel(y, '=', I('vx'))}) converts the tangled ${x}–${y} dependence into a clean ${v}–${x} dependence, and the ${x}-dependence then separates out by itself.`,
      },
      {
        t: 'p',
        html: `<b>Choosing the smarter substitution.</b> If the equation isolates ${DXDY} as a function of ${fr(x, y)} (i.e. ${x} “dominates”), use ${rel(x, '=', I('vy'))} instead. Same logic, less algebra.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level (separable)',
        q: `Solve ${DYDX} = (4${X3} + 2)${NB}${ex(`−${y}`)}.`,
        steps: [
          `<b>Separate:</b> multiply across by ${ex(y)}: ${ex(y)}${DY} = (4${X3} + 2)${DX}.`,
          `<b>Integrate both sides:</b><br>∫${ex(y)}${DY} = ∫(4${X3} + 2)${DX}<br>⟹ ${ex(y)} = ${x}<sup>4</sup> + 2${x}${PLUS_C}.`,
          `<b>Presentation tip:</b> show the separation step explicitly and carry exactly one constant ${C}: examiners look for both.`,
        ],
        ans: `${ex(y)} = ${x}<sup>4</sup> + 2${x}${PLUS_C}, i.e. ${y} = log(${x}<sup>4</sup> + 2${x}${PLUS_C})`,
      },
      {
        t: 'ex',
        tag: 'CUET / JEE Main Speed Trap (homogeneous, derivative-of-denominator shortcut)',
        q: `Solve ${DYDX} = ${fr(`${x} − ${y}`, `${x} + ${y}`)}.`,
        steps: [
          `Each of ${x} − ${y} and ${x} + ${y} is homogeneous of degree 1, so the ratio is degree 0: homogeneous. Put ${rel(y, '=', I('vx'))}:<br>${v} + ${x}${DVDX} = ${fr(`1 − ${v}`, `1 + ${v}`)}<br>⟹ ${x}${DVDX} = ${fr(`1 − ${v}`, `1 + ${v}`)} − ${v}<br>= ${fr(`1 − 2${v} − ${V2}`, `1 + ${v}`)}.`,
          `∴ ${fr(`1 + ${v}`, `1 − 2${v} − ${V2}`)}${DV} = ${fr(`d${x}`, x)}.`,
          `<b>The speed move:</b> notice ${DDV}(1 − 2${v} − ${V2}) = −2 − 2${v} = −2(1 + ${v}): the numerator is (up to a constant) the derivative of the denominator. So the left integral is an instant logarithm, no partial fractions:<br>−${HALF}${NB}log${NB}${abs(`1 − 2${v} − ${V2}`)} = ${LOGX}${PLUS_C}.`,
          `Tidy and multiply through by ${X2} after restoring ${rel(v, '=', YX)}:<br>${X2} − 2${I('xy')} − ${Y2} = ${C}.`,
          `<b>The trap:</b> students reflexively split ${fr(`1 + ${v}`, `1 − 2${v} − ${V2}`)} into partial fractions and burn two minutes. Always scan for “numerator ∝ derivative of denominator” first: it converts the integral to a single log.`,
        ],
        ans: `${X2} − 2${I('xy')} − ${Y2} = ${C}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level, multi-concept: homogeneous + trig integral + IVP',
        q: `A curve passes through (1,${NB}${fr('π', '6')}) and at every point its slope satisfies ${DYDX} = ${YX} + tan(${YX}). Find the curve.`,
        steps: [
          `The RHS is a function of ${YX} alone: homogeneous. Put ${rel(y, '=', I('vx'))}:<br>${v} + ${x}${DVDX} = ${v} + ${fn('tan', v)}<br>⟹ ${x}${DVDX} = ${fn('tan', v)}<br>⟹ ${fn('cot', v)}${DV} = ${fr(`d${x}`, x)}.`,
          `Integrate (this is where the trig integral ∫${fn('cot', v)}${DV} = log${NB}${abs(fn('sin', v))} enters):<br>log${NB}${abs(fn('sin', v))} = ${LOGX} + log${NB}${C}<br>⟹ ${fn('sin', v)} = ${C}${x}.`,
          `Back-substitute ${rel(v, '=', YX)}:<br>sin(${YX}) = ${C}${x}.`,
          `Apply the condition (1,${NB}${fr('π', '6')}): sin(${fr('π', '6')}) = ${C}(1) ⇒ ${rel(C, '=', HALF)}.`,
          '<b>Why “multi-concept”:</b> you must (i) diagnose homogeneity, (ii) recall a non-obvious trig antiderivative, and (iii) pin the constant with the initial condition: three separate skills in one question.',
        ],
        ans: `sin(${YX}) = ${fr(x, '2')}`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: reducible to homogeneous via origin shift',
        q: `Solve ${DYDX} = ${fr(`${x} − ${y} + 3`, `${x} + ${y} − 1`)}.`,
        steps: [
          `The lone constants +3 and −1 break homogeneity, so ${rel(y, '=', I('vx'))} won’t work directly. The fix: <b>shift the origin</b> to the point where both lines vanish, killing the constants.`,
          `Solve ${x} − ${y} + 3 = 0 and ${x} + ${y} − 1 = 0 simultaneously: adding gives 2${x} + 2 = 0 ⇒ ${rel(x, '=', '−1')}; then ${rel(y, '=', '2')}. Let<br>${X} = ${x} + 1,${NB}${NB}${Y} = ${y} − 2<br>(so d${X} = d${x}, d${Y} = d${y}).`,
          `Substituting, the numerator ${x} − ${y} + 3 = ${X} − ${Y} and the denominator ${x} + ${y} − 1 = ${X} + ${Y}, giving<br>${DYDXc} = ${fr(`${X} − ${Y}`, `${X} + ${Y}`)},<br>which is <b>exactly the homogeneous equation from the second worked example</b> (in ${X}, ${Y}). The only new skill here was the shift; the homogeneous core is already solved. Borrowing that result:<br>${sq(X)} − 2${I('XY')} − ${sq(Y)} = ${C}.`,
          `Restore ${X} = ${x} + 1, ${Y} = ${y} − 2:<br>(${x} + 1)<sup>2</sup> − 2(${x} + 1)(${y} − 2) − (${y} − 2)<sup>2</sup> = ${C}.`,
          `<b>Note:</b> this origin-shift trick works only when the two lines <b>intersect</b>. If they were parallel (coefficients proportional), you’d instead substitute the common linear combination (${t} = ${I('ax')} + ${I('by')}, the part both lines share) and reduce to separable: a distinct sub-case worth keeping in your back pocket. (Origin-shift reducibility is a JEE extension beyond the strict NCERT core.)`,
        ],
        ans: `(${x} + 1)<sup>2</sup> − 2(${x} + 1)(${y} − 2) − (${y} − 2)<sup>2</sup> = ${C}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'p',
        html: 'Try these yourself; final answers follow.',
      },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Solve ${DYDX} = ${X2}${y}.`,
            a: `${y} = ${A}${NB}${ex(`${x}³/3`)}`,
          },
          {
            q: `<b>[CUET]</b> Solve sec<sup>2</sup>${NB}${x} ${fn('tan', y)}${DX} + sec<sup>2</sup>${NB}${y} ${TANX}${DY} = 0.`,
            a: `${TANX} ${fn('tan', y)} = ${C}`,
          },
          {
            q: `<b>[JEE Main]</b> Solve the homogeneous equation ${DYDX} = ${fr(`${X2} + ${Y2}`, I('xy'))}.`,
            a: `${Y2} = 2${X2}(${LOGX}${PLUS_C})`,
          },
          {
            q: `<b>[JEE Main]</b> Solve ${DYDX} = ${y} ${COSX}, given ${y}(0) = 1.`,
            a: `${y} = ${ex(`sin${NB}${x}`)}`,
          },
          {
            q: `<b>[JEE Advanced]</b> Solve (${X3} + ${cube(y)})${DX} = ${I('xy')}<sup>2</sup>${DY}.`,
            a: `${cube(y)} = 3${X3}(${LOGX}${PLUS_C})`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which of the following is a homogeneous differential equation?',
        opts: [
          {
            label: `${DYDX} = ${fr(`${x} + ${y} + 1`, `${x} − ${y}`)}`,
            nudge: `<b>(A)</b> The stray +1 destroys scale-invariance: replacing ${x}, ${y} by ${LAM}${x}, ${LAM}${y} does not leave it unchanged. Not homogeneous (it’s the reducible type from the fourth worked example).`,
          },
          { label: `${DYDX} = ${fr(`${X2} + ${Y2}`, I('xy'))}`, nudge: null },
          {
            label: `${DYDX} = ${X2} + ${Y2}`,
            nudge: `<b>(C)</b> Classic confusion: ${X2} + ${Y2} is a homogeneous function (degree 2), but the equation ${DYDX} = ${X2} + ${Y2} has RHS of degree ${rel('2', '≠', '0')}, so it is <b>not</b> a homogeneous DE. Don’t conflate “homogeneous function” with “homogeneous equation.”`,
          },
          {
            label: `${DYDX} = ${I('xy')} + 1`,
            nudge: `<b>(D)</b> Degree mismatch (${I('xy')} is degree 2, the +1 is degree 0); not homogeneous.`,
          },
        ],
        correct: 1,
        solution: `Numerator and denominator are both homogeneous of degree 2, so their ratio is degree 0: the RHS is a function of ${YX} alone. Homogeneous.`,
      },
      {
        t: 'mcq',
        q: `The general solution of ${DYDX} = ${YX} is:`,
        opts: [
          { label: `${y} = ${C}${x}`, nudge: null },
          {
            label: `${y} = ${x}${PLUS_C}`,
            nudge: `<b>(B)</b> Treats the equation as d${y} = d${x}: integrating without separating the ${fr('1', y)} and ${fr('1', x)}.`,
          },
          {
            label: `${I('xy')} = ${C}`,
            nudge: `<b>(C)</b> Sign slip: integrating ${fr(`d${y}`, y)} = −${fr(`d${x}`, x)} would give ${y} = ${fr(C, x)}, i.e. ${I('xy')} = ${C}: the solution to ${DYDX} = −${YX}, not this one.`,
          },
          {
            label: `${y} = ${C}${ex(x)}`,
            nudge: `<b>(D)</b> Pattern-matches “exponential” reflexively; but the integral of ${fr('1', x)} is log${NB}${x}, not ${x}.`,
          },
        ],
        correct: 0,
        solution: `Separating, ${fr(`d${y}`, y)} = ${fr(`d${x}`, x)}<br>⇒ log${NB}${abs(y)} = ${LOGX} + log${NB}${C}<br>⇒ ${y} = ${C}${x}.`,
      },
      {
        t: 'mcq',
        q: `While solving ${DYDX} = ${Y2} by separation, one divides by ${Y2}. Which solution is lost in the process?`,
        opts: [
          { label: `${y} = 0`, nudge: null },
          {
            label: `${y} = 1`,
            nudge: `<b>(B)</b>, <b>(C)</b> are not solutions at all (${rel(y, '=', '1')} ⇒ 0 = 1; ${rel(y, '=', x)} ⇒ 1 = ${X2}), so nothing about them is “lost.”`,
          },
          {
            label: `${y} = ${x}`,
            nudge: `<b>(B)</b>, <b>(C)</b> are not solutions at all (${rel(y, '=', '1')} ⇒ 0 = 1; ${rel(y, '=', x)} ⇒ 1 = ${X2}), so nothing about them is “lost.”`,
          },
          {
            label: 'None: nothing is lost',
            nudge: '<b>(D)</b> is the complacent answer: exactly the mistake the question targets.',
          },
        ],
        correct: 0,
        solution: `Dividing by ${Y2} tacitly assumes ${rel(y, '≠', '0')}. But the constant function ${rel(y, '=', '0')} satisfies the original equation (0 = 0), so it is a genuine <b>singular solution</b> thrown away by the division.`,
      },
      {
        t: 'mcq',
        q: `Solving ${DYDX} = ${fr(`${x} + ${y}`, x)} by the substitution ${rel(y, '=', I('vx'))} gives:`,
        opts: [
          { label: `${y} = ${x}${NB}${LOGX} + ${C}${x}`, nudge: null },
          {
            label: `${y} = ${x} + ${C}${x}`,
            nudge: `<b>(B)</b> ${y} = ${x} + ${C}${x} = (1 + ${C})${x} is only a multiple of ${x}: it takes ${v} = 1 + ${C} in place of ${v} = ${LOGX}${PLUS_C} and loses the log term. Check: its ${DYDX} is 1 + ${C}, but ${fr(`${x} + ${y}`, x)} = 2 + ${C}.`,
          },
          {
            label: `${y} = ${LOGX}${PLUS_C}`,
            nudge: `<b>(C)</b> forgets to multiply back by ${x}: leaving the answer in ${v} instead of ${y}.`,
          },
          {
            label: `${y} = ${C}${x}`,
            nudge: `<b>(D)</b> is the solution to ${DYDX} = ${YX}: dropping the +1 from the numerator.`,
          },
        ],
        correct: 0,
        solution: `Here ${DYDX} = 1 + ${YX}. With ${rel(y, '=', I('vx'))}:<br>${v} + ${x}${DVDX} = 1 + ${v} ⇒ ${x}${DVDX} = 1<br>⇒ d${v} = ${fr(`d${x}`, x)} ⇒ ${v} = ${LOGX}${PLUS_C}.<br>Back-substitute ${rel(v, '=', YX)}: ${y} = ${x}${NB}${LOGX} + ${C}${x}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Losing the constant solution.</b> Dividing by ${hy} to separate can erase a valid solution ${rel(hy, '=', '0')}. Always note it before dividing and check it at the end.`,
          `<b>Forcing ${rel(y, '=', I('vx'))} onto a non-homogeneous equation.</b> A stray constant in the numerator/denominator means it isn’t homogeneous: shift the origin (or use a linear substitution) instead.`,
          `<b>Leaving the answer in ${v}.</b> After solving in ${v} and ${x}, you must back-substitute ${rel(v, '=', YX)}. An answer containing ${v} scores zero.`,
          `<b>Double constants / messy logs.</b> Carry exactly one arbitrary constant, and write log-constants as log${NB}${C} so they combine cleanly.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (diagnosis first, then speed):</b> Before touching algebra, classify: “Do the variables separate as-is? If not, is the RHS a pure function of ${YX}?” If separable, integrate two columns. If homogeneous, substitute ${rel(y, '=', I('vx'))} (or ${rel(x, '=', I('vy'))} if ${x} dominates). And inside any separation integral, scan for <b>numerator ∝ derivative of denominator</b> to turn it into an instant logarithm and skip partial fractions.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Separable</b>',
            note: `${DYDX} = ${gx}${hy} ⇒ ∫${fr(`d${y}`, hy)} = ∫${gx}${DX}${PLUS_C}. Watch for lost solutions ${rel(hy, '=', '0')}.`,
          },
          {
            f: '<b>Homogeneous</b>',
            note: `RHS is a function of ${YX} only (degree-zero). Put ${rel(y, '=', I('vx'))}, ${DYDX} = ${v} + ${x}${DVDX}, reduce to separable, then <b>back-substitute</b> ${rel(v, '=', YX)}.`,
          },
          {
            f: '<b>Type test</b>',
            note: `${F}(${LAM}${x},${NB}${LAM}${y}) = ${F}(${x},${NB}${y}) ⇒ homogeneous. A stray constant ⇒ <b>not</b> homogeneous (shift origin).`,
          },
          { f: '<b>Smart substitution</b>', note: `use ${rel(x, '=', I('vy'))} when ${x} dominates.` },
          { f: '<b>Integral shortcut</b>', note: 'numerator ∝ derivative of denominator ⇒ single log.' },
        ],
        aids: [
          '“Separate the laundry, integrate each basket.” (separable)',
          `“If it only sees the ratio ${YX}, let ${rel(y, '=', I('vx'))}.” (homogeneous)`,
          '“Divide and you might lose a root.” (singular/lost solution)',
          `“Came in as ${y}, must leave as ${y}.” (always back-substitute)`,
        ],
      },
      {
        t: 'p',
        html: `<b>Separable: split & integrate.<br>Homogeneous:</b> ${rel(y, '=', I('vx'))} ⇒ separable ⇒ back-sub.`,
      },
    ],
  },
  // ──────────────── Topic 04 · pp. 605–612 ────────────────
  {
    n: '04',
    title: 'Linear Differential Equations',
    kalam: 'These are called linear differential equations, and they have their own beautiful trick: the integrating factor.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the single most examined solving method in the chapter ${ESTIMATE}. CBSE Boards almost guarantee a 3–5 mark “solve this linear DE” question, very often with an initial condition ${ESTIMATE}. JEE Main asks 1–2 per year, frequently an integrating-factor MCQ or an equation cunningly disguised as linear in ${x} rather than ${y} ${ESTIMATE}. JEE Advanced folds the method into curve-finding and reducible forms. If you master one technique in this chapter, make it this one.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `So far the toolbox has two tools: separate the variables, or switch to ratios for homogeneous equations. But a huge family of equations resists both: equations where ${y} and its derivative ${DYDX} both appear, each only to the <b>first power</b>, with no products like ${y} · ${DYDX} and no powers like ${Y2}. These are called <b>linear</b> differential equations, and they have their own beautiful trick: the <b>integrating factor</b>.`,
      },
      {
        t: 'p',
        html: `Here’s the idea in plain words. The left side of ${DYDX}${NB}+${NB}${P}${y}${NB}=${NB}${Q} is almost the derivative of a product, but not quite. The integrating-factor method finds one magic multiplier, call it the IF, such that after you multiply the whole equation through by it, the left side becomes <b>exactly</b> the derivative of (IF × ${y}). Once the left side is a clean single derivative, you just integrate both sides and you’re done.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Imagine you’re trying to fold a fitted bedsheet: the elastic corners fight you and nothing lies flat. But there’s one specific way to tuck the corners (the “IF”) after which the whole sheet folds into a neat rectangle in one motion. The integrating factor is that tuck: it turns a messy left-hand side into a single, foldable derivative ${DDX}(IF · ${y}) that integrates in one step.`,
      },
      {
        t: 'p',
        html: `The genius is that this magic multiplier is completely predictable: for ${DYDX}${NB}+${NB}${P}${y}${NB}=${NB}${Q}, it is always:<br>IF = ${EP}.<br>You never have to guess it.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions, read carefully:</b><br>• <b>The equation must first be in standard form</b> ${DYDX}${NB}+${NB}${P}${y}${NB}=${NB}${Q}, where the coefficient of ${DYDX} is exactly 1, and ${P}, ${Q} depend on ${x} <b>only</b> (not on ${y}). If there’s a coefficient like ${x} or ${COSX} sitting in front of ${DYDX}, divide it out before reading off ${P}. Skipping this is the number-one error.<br>• <b>Linearity is about ${y}, not ${x}.</b> If ${y} appears nonlinearly but ${x} appears to the first power, the equation may be <b>linear in</b> ${x} instead: flip your viewpoint to ${DXDY}.<br>• <b>${P} and ${Q} are functions of the independent variable alone.</b> A genuine ${y} inside ${P} or ${Q} means it isn’t a standard linear DE.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'formula',
        kicker: `Standard form (linear in ${y})`,
        main: `${DYDX}${NB}+${NB}${P}${y}${NB}=${NB}${Q}<br>${P} = ${P}(${x}), ${Q} = ${Q}(${x})`,
        legend: [`${P}, ${Q} = known functions of ${x}`, `${y} = dependent variable`, `${x} = independent variable`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Integrating factor',
        main: `IF = ${EP}`,
        legend: ['IF = integrating factor', `${P} = known function of ${x}`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'General solution of a linear equation',
        main: `${y} · (IF) = ∫${Q} · (IF)${DX}${PLUS_C}`,
        legend: ['IF = integrating factor', `${Q} = known function of ${x}`, `${C} = arbitrary constant`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Mirror case, linear in ${x}:</b> when the equation is naturally first-degree in ${x}, write it as`,
      },
      {
        t: 'formula',
        kicker: `Mirror case: linear in ${x}`,
        main: `${DXDY}${NB}+${NB}${P1}${x}${NB}=${NB}${Q1}<br>${P1} = ${P1}(${y}), ${Q1} = ${Q1}(${y})`,
        legend: [`${P1}, ${Q1} = known functions of ${y}`],
        note: null,
      },
      {
        t: 'p',
        html: `with IF = ${EP1} and solution ${x} · (IF) = ∫${Q1} · (IF)${DY}${NB}+${NB}${C}.`,
      },
      {
        t: 'p',
        html: `<b>Notation key.</b> ${y}: dependent variable; ${x}: independent variable; ${P}, ${Q}: known functions of ${x}; ${P1}, ${Q1}: known functions of ${y} (mirror case); IF: integrating factor; ${C}: arbitrary constant.`,
      },
      {
        t: 'p',
        html: `<b>Three properties to lock in:</b><br>1. <b>The LHS is always a perfect derivative.</b> After multiplying by the IF,<br>${DYDX} · IF + ${P}${y} · IF = ${DDX}(${y} · IF),<br>automatically. You never expand it; you just integrate the right side.<br>2. <b>You integrate ${Q} · IF, not ${Q} alone.</b> The most common slip is integrating ${Q} by itself.<br>3. <b>Constants in ${P} inside ∫${P}${DX} matter.</b> ∫${fr('2', x)}${DX} = 2${NB}log${NB}${x} ⇒ IF = ${X2}; ∫−${fr('2', x)}${DX} = −2${NB}log${NB}${x} ⇒ IF = ${x}<sup>−2</sup>. A sign slip here flips the whole IF.`,
      },

      { t: 'part', title: 'Derivation and key procedures' },
      {
        t: 'p',
        html: `<b>The derivation: why the integrating factor is ${EP}</b><br>This is the one genuine derivation of the topic; the NCERT book finds the integrating factor the same way.`,
      },
      {
        t: 'p',
        html: `Start from the standard form and multiply through by an as-yet-unknown function ${MU}(${x}):<br>${MU}${DYDX} + ${MU}${P}${y} = ${MU}${Q}.${NB}${NB}${NB}(1)<br>We want the left side to be the derivative of a single product ${MU}${y}. By the product rule,<br>${DDX}(${MU}${y}) = ${MU}${DYDX} + ${DMUDX}${y}.${NB}${NB}${NB}(2)<br>Comparing (1) and (2), the two left sides match <b>provided</b><br>${DMUDX} = ${MU}${P}.`,
      },
      {
        t: 'p',
        html: `This is itself a separable equation for ${MU}:<br>${fr(`d${MU}`, MU)} = ${P}${DX} ⟹ log${NB}${MU} = ∫${P}${DX} ⟹ ${MU} = ${EP}.`,
      },
      {
        t: 'p',
        html: `So the magic multiplier is forced: it must be IF = ${EP}. With this choice, (1) becomes ${DDX}(${y}${NB}·${NB}IF)${NB}=${NB}${Q}${NB}·${NB}IF, and integrating both sides gives the solution ${y}${NB}·${NB}IF${NB}=${NB}∫${Q}${NB}·${NB}IF${DX}${PLUS_C}.${NB}■`,
      },
      {
        t: 'proc',
        title: 'Procedure: solving a linear DE',
        steps: [
          `<b>Reduce to standard form</b> ${DYDX}${NB}+${NB}${P}${y}${NB}=${NB}${Q}: make the coefficient of ${DYDX} equal to 1.`,
          `<b>Identify ${P} and ${Q}</b> (both functions of ${x} only).`,
          `<b>Compute</b> IF = ${EP}: watch the sign of ∫${P}${DX}.`,
          `<b>Write the solution</b> ${y} · IF = ∫${Q} · IF${DX}${PLUS_C} and perform the (often by-parts) integral.`,
          `<b>Apply any initial condition</b> to find ${C}.`,
        ],
      },
      {
        t: 'p',
        html: `<b>The flip test (linear in ${x}):</b> if step 1 won’t produce ${P}, ${Q} as functions of ${x} because ${y} is tangled nonlinearly, rewrite the equation as ${DXDY}${NB}+${NB}${P1}${x}${NB}=${NB}${Q1} and run the same five steps with the roles of ${x} and ${y} swapped.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Solve ${DYDX} + ${fr('2', x)}${y} = ${X3}.`,
        steps: [
          `<b>Standard form:</b> already there, with ${P} = ${fr('2', x)}, ${Q} = ${X3}.`,
          `<b>Integrating factor:</b> IF = ${ex(`∫2/${x}${NB}d${x}`)} = ${ex(`2${NB}log${NB}${x}`)} = ${X2}.`,
          `<b>Solution:</b> ${y} · ${X2} = ∫${X3} · ${X2}${DX}${PLUS_C}<br>= ∫${x}<sup>5</sup>${DX}${PLUS_C} = ${fr(`${x}<sup>6</sup>`, '6')}${PLUS_C}.`,
          `<b>Presentation tip:</b> show IF explicitly and integrate ${Q} · IF (here ${x}<sup>5</sup>), not ${Q} alone: both steps carry marks.`,
        ],
        ans: `${y} = ${fr(`${x}<sup>4</sup>`, '6')} + ${fr(C, X2)}`,
      },
      {
        t: 'ex',
        tag: 'CUET / JEE Main Speed Trap: the standard-form trap',
        q: `Solve ${x}${DYDX} − 3${y} = ${x}<sup>5</sup>.`,
        steps: [
          `The trap is screaming here: a coefficient ${x} sits in front of ${DYDX}, so you may <b>not</b> read ${P} = −3. Divide through by ${x} first:<br>${DYDX} − ${fr('3', x)}${y} = ${x}<sup>4</sup><br>⟹ ${P} = −${fr('3', x)}, ${Q} = ${x}<sup>4</sup>.`,
          `IF = ${ex(`∫−3/${x}${NB}d${x}`)} = ${ex(`−3${NB}log${NB}${x}`)} = ${x}<sup>−3</sup>.`,
          `${y} · ${x}<sup>−3</sup> = ∫${x}<sup>4</sup> · ${x}<sup>−3</sup>${DX}${PLUS_C}<br>= ∫${x}${DX}${PLUS_C} = ${fr(X2, '2')}${PLUS_C}.`,
          `<b>The trap, named:</b> students who skip the division use ${P} = −3, get IF = ${ex(`−3${x}`)}, and the whole problem collapses. Speed rule: <b>coefficient of ${DYDX} must be 1 before you touch ${P}.</b> And note the negative ${P} gives IF = ${x}<sup>−3</sup>: mind the sign.`,
        ],
        ans: `${y} = ${fr(`${x}<sup>5</sup>`, '2')} + ${C}${X3}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level, multi-concept: linear + trig identity + IVP',
        q: `A curve satisfies ${DYDX} + ${y}${NB}${COTX} = 4${x}${NB}${CSCX} and passes through (${fr('π', '2')},${NB}0). Find ${y}.`,
        steps: [
          `Standard form already: ${P} = ${COTX}, ${Q} = 4${x}${NB}${CSCX}.<br>IF = ${ex(`∫cot${NB}${x}${NB}d${x}`)} = ${ex(`log${NB}sin${NB}${x}`)} = ${SINX}.<br>${y}${NB}${SINX} = ∫4${x}${NB}${CSCX} · ${SINX}${DX}${PLUS_C}.`,
          `Here the <b>trig simplification</b> is the multi-concept twist: ${CSCX} · ${SINX} = 1, so the integral collapses beautifully:<br>${y}${NB}${SINX} = ∫4${x}${DX}${PLUS_C} = 2${X2}${PLUS_C}.`,
          `Apply (${fr('π', '2')},${NB}0): 0 · 1 = 2(${fr('π', '2')})<sup>2</sup>${PLUS_C} ⇒ ${C} = −${fr('π<sup>2</sup>', '2')}.`,
          `${y}${NB}${SINX} = 2${X2} − ${fr('π<sup>2</sup>', '2')}<br>⟹ ${y} = ${fr(`4${X2} − π<sup>2</sup>`, `2${NB}${SINX}`)}.`,
          `<b>Why “multi-concept”:</b> you must (i) build the IF, (ii) recognise the ${CSCX} · ${SINX} = 1 collapse to avoid a horrible integral, and (iii) pin ${C} with the point: three skills in one.`,
        ],
        ans: `${y} = ${fr(`4${X2} − π<sup>2</sup>`, `2${NB}${SINX}`)}`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: linear in x, not y',
        q: `Solve ${DYDX} = ${fr(y, `${x} + ${Y2}`)}.`,
        steps: [
          `Try to force standard form in ${y}: ${DYDX} = ${fr(y, `${x} + ${Y2}`)} has ${Y2} in the denominator, nonlinear in ${y}. Don’t fight it. <b>Flip to</b> ${DXDY}:<br>${DXDY} = ${fr(`${x} + ${Y2}`, y)} = ${fr(x, y)} + ${y}<br>⟹ ${DXDY} − ${fr('1', y)}${x} = ${y}.`,
          `Now it is <b>linear in</b> ${x}, with ${P1} = −${fr('1', y)}, ${Q1} = ${y}.<br>IF = ${ex(`∫−1/${y}${NB}d${y}`)} = ${ex(`−log${NB}${y}`)} = ${fr('1', y)}.`,
          `${x} · ${fr('1', y)} = ∫${y} · ${fr('1', y)}${DY}${PLUS_C}<br>= ∫1${DY}${PLUS_C} = ${y}${PLUS_C}.`,
          `${fr(x, y)} = ${y}${PLUS_C} ⟹ ${x} = ${Y2} + ${C}${y}.`,
          `<b>Quick verify:</b> from ${x} = ${Y2} + ${C}${y}, ${DXDY} = 2${y} + ${C}, so ${DYDX} = ${fr('1', `2${y} + ${C}`)};<br>and ${fr(y, `${x} + ${Y2}`)} = ${fr(y, `2${Y2} + ${C}${y}`)} = ${fr('1', `2${y} + ${C}`)}. ✓<br>The whole difficulty was recognising which variable the equation is linear in.`,
        ],
        ans: `${x} = ${Y2} + ${C}${y}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'p',
        html: 'Try these yourself; final answers follow.',
      },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Solve ${DYDX} + ${y} = ${ex(x)}.`,
            a: `${y} = ${HALF}${ex(x)} + ${C}${ex(`−${x}`)}`,
          },
          {
            q: `<b>[CUET]</b> Solve ${x}${DYDX} + ${y} = ${X3}.`,
            a: `${y} = ${fr(X3, '4')} + ${fr(C, x)}`,
          },
          {
            q: `<b>[JEE Main]</b> Solve ${DYDX} + 2${I('xy')} = ${x}.`,
            a: `${y} = ${HALF} + ${C}${ex(`−${x}²`)}`,
          },
          {
            q: `<b>[JEE Main]</b> Solve ${DYDX} + ${y}${NB}${TANX} = sec${NB}${x}, given ${y}(0) = 1.`,
            a: `${y} = ${SINX} + ${COSX}`,
          },
          {
            q: `<b>[JEE Advanced]</b> Solve ${DYDX} = ${fr('1', `${x}${NB}${COSY} + sin${NB}2${y}`)}.`,
            a: `${x} = ${C}${ex(`sin${NB}${y}`)} − 2(1 + ${SINY})<br>(flip to ${DXDY}${NB}−${NB}${x}${NB}${COSY} = sin${NB}2${y}, linear in ${x})`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The integrating factor of ${x}${DYDX} − 2${y} = ${x}<sup>5</sup> is:`,
        opts: [
          { label: X2, nudge: `<b>(A)</b> drops the minus sign on ${P}: using +${fr('2', x)} gives ${X2}.` },
          { label: fr('1', X2), nudge: null },
          { label: `−2${x}`, nudge: `<b>(C)</b> −2${x} is ∫${P}${DX} for the undivided ${P} = −2 (no division by ${x}), and it is left un-exponentiated: the ${IF} is ${EP}, not ∫${P}${DX} itself.` },
          { label: ex(`−2${x}`), nudge: `<b>(D)</b> forgets to divide by ${x} and treats ${P} = −2, giving ${ex(`−2${x}`)}.` },
        ],
        correct: 1,
        solution: `Reduce to standard form first: ${DYDX} − ${fr('2', x)}${y} = ${x}<sup>4</sup>, so ${P} = −${fr('2', x)} and<br>IF = ${ex(`∫−2/${x}${NB}d${x}`)} = ${ex(`−2${NB}log${NB}${x}`)} = ${x}<sup>−2</sup>.`,
      },
      {
        t: 'mcq',
        q: 'Which of the following is a linear differential equation?',
        opts: [
          { label: `${DYDX} + ${Y2} = ${x}`, nudge: `<b>(A)</b> has ${Y2}: nonlinear in ${y}.` },
          { label: `${DYDX} + ${I('xy')} = ${X2}`, nudge: null },
          { label: `(${DYDX})<sup>2</sup> + ${y} = ${x}`, nudge: `<b>(C)</b> has (${DYDX})<sup>2</sup>: nonlinear in the derivative.` },
          { label: `${y}${DYDX} + ${y} = ${x}`, nudge: `<b>(D)</b> has the product ${y}${DYDX}: nonlinear.` },
        ],
        correct: 1,
        solution: `${y} and ${DYDX} each appear to the first power, with coefficients depending on ${x} only. Linear.`,
      },
      {
        t: 'mcq',
        q: `The solution of ${DYDX} − ${y} = 2, ${y}(0) = 0 is:`,
        opts: [
          { label: `${y} = 2(${ex(x)} − 1)`, nudge: null },
          { label: `${y} = 2(${ex(`−${x}`)} − 1)`, nudge: `<b>(B)</b> puts in a decaying ${ex(`−${x}`)}, as if ${IF} = ${ex(x)} (the wrong sign of ${P}), with the signs then muddled; it is not a solution: ${y}′ − ${y} = 2 − 4${ex(`−${x}`)} ≠ 2.` },
          { label: `${y} = ${ex(x)} − 2`, nudge: `<b>(C)</b> takes ${C} = 1 in ${y} = −2 + ${C}${ex(x)}; then ${y}(0) = −1, not 0.` },
          { label: `${y} = 2${ex(x)}`, nudge: `<b>(D)</b> keeps only the ${C}${ex(x)} part, with ${C} = 2, and drops the −2: then ${y}(0) = 2, not 0.` },
        ],
        correct: 0,
        solution: `${P} = −1 ⇒ IF = ${ex(`−${x}`)}; then<br>${y}${ex(`−${x}`)} = ∫2${ex(`−${x}`)}${DX}${PLUS_C} = −2${ex(`−${x}`)}${PLUS_C},<br>so ${y} = −2 + ${C}${ex(x)}. Applying ${y}(0) = 0: 0 = −2 + ${C} ⇒ ${C} = 2, giving ${y} = 2(${ex(x)} − 1).`,
      },
      {
        t: 'mcq',
        q: `The equation ${DYDX} = ${fr('1', `${x} + ${y}`)} is most efficiently solved by treating it as:`,
        opts: [
          { label: `linear in ${y}, as written`, nudge: `<b>(A)</b> fails: as written, ${y} sits in the denominator (nonlinear in ${y}).` },
          { label: `linear in ${x}, after swapping variables`, nudge: null },
          { label: `homogeneous, via ${rel(y, '=', I('vx'))}`, nudge: `<b>(C)</b> ${fr('1', `${x} + ${y}`)} is homogeneous of degree −1, not 0, so ${rel(y, '=', I('vx'))} leaves ${x} tangled in: ${x}${DVDX} = ${fr('1', `${x}(1 + ${v})`)} − ${v}. Not a homogeneous DE.` },
          {
            label: 'variables separable',
            nudge: `<b>(D)</b> the variables don’t separate (${x} + ${y} won’t factor into an ${x}-part times a ${y}-part).`,
          },
        ],
        correct: 1,
        solution: `Inverting, ${DXDY} = ${x} + ${y}, i.e. ${DXDY} − ${x} = ${y}: linear in ${x} with ${P1} = −1.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Reading ${P} before standard form.</b> A coefficient in front of ${DYDX} must be divided out first; otherwise ${P} (and the whole IF) is wrong.`,
          `<b>Sign errors in the IF.</b> ${P} negative ⇒ ∫${P}${DX} negative ⇒ IF is a negative power or a decaying exponential. Double-check the sign before exponentiating.`,
          `<b>Integrating ${Q} instead of ${Q} · IF.</b> The solution is ${y} · IF = ∫${Q} · IF${DX}: the IF rides along into the integral.`,
          `<b>Missing “linear in ${x}.”</b> If ${y} is tangled but ${x} is first-degree, flip to ${DXDY}. Many “hard” problems are ordinary linear DEs in disguise.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (never expand the LHS):</b> once you multiply by the IF, the left side is guaranteed to be ${DDX}(${y} · IF); don’t waste time expanding or verifying it; jump straight to integrating ${Q}${NB}·${NB}IF on the right. And before solving, glance at the equation: “first power in ${y} and ${y}′, no products?” If yes, linear in ${y}; if ${y} is messy but ${x} is clean, linear in ${x}.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Standard form</b>',
            note: `${DYDX}${NB}+${NB}${P}${y}${NB}=${NB}${Q} (coefficient of ${DYDX} must be 1; ${P}, ${Q} functions of ${x}).`,
          },
          { f: '<b>Integrating factor</b>', note: `IF = ${EP}.` },
          { f: '<b>Solution</b>', note: `${y} · IF = ∫${Q} · IF${DX}${PLUS_C}.` },
          {
            f: `<b>Linear in ${x} (mirror)</b>`,
            note: `${DXDY}${NB}+${NB}${P1}${x}${NB}=${NB}${Q1}, IF = ${EP1}, ${x} · IF = ∫${Q1} · IF${DY}${PLUS_C}.`,
          },
          { f: `<b>LHS is always</b> ${DDX}(${y} · IF)`, note: 'never expand it.' },
          { f: '<b>Watch</b>', note: `standard form first; IF sign; integrate ${Q} · IF.` },
        ],
        aids: [
          `“Standard form first, ${P} second.” (divide out the leading coefficient)`,
          `“IF = e to the integral of ${P}.”`,
          `“The IF rides into the integral.” (it’s ${Q}${NB}·${NB}IF, not ${Q})`,
          `“Messy in ${y}? Try ${x}.” (flip to ${DXDY})`,
        ],
      },
      {
        t: 'p',
        html: `<b>IF</b> = ${EP}<br>⇒ ${DDX}(${y} · <b>IF</b>) = ${Q} · <b>IF</b><br>⇒ ${y} · <b>IF</b> = ∫${Q} · <b>IF</b>${DX}${PLUS_C}.`,
      },
    ],
  },
  // ──────────────── Topic 05 · pp. 613–619 ────────────────
  {
    n: '05',
    title: 'Applications of Differential Equations',
    kalam: 'Almost every “rate” sentence in science is secretly a differential equation.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is where the chapter meets the real world, and it pays off in marks. Older CBSE papers set growth/decay word problems (3–5 marks), solved as separable equations; Newton’s law of cooling is not in the NCERT Mathematics book (it is taught in Physics), and the current CBSE syllabus does not list applications of differential equations, as far as we know. JEE Main reliably asks one application a year: exponential growth/decay, Newton’s law of cooling, or a slope-defined curve ${ESTIMATE}. JEE Advanced layers in orthogonal trajectories and tangent/normal geometry. Every model here reduces to a separable or linear DE you already know how to solve (Topics 03–04).`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Almost every “rate” sentence in science is secretly a differential equation. “Bacteria multiply faster when there are more of them.” “Hot tea cools quicker when the gap with room temperature is larger.” “The steeper the slope, the faster the curve climbs.” Each statement links a <b>rate of change</b> to the <b>current state</b>, and that link is a DE waiting to be written and solved.',
      },
      {
        t: 'p',
        html: 'Three model situations cover the overwhelming majority of exam questions:',
      },
      {
        t: 'p',
        html: `<b>Growth & decay.</b> When a quantity changes at a rate proportional to its own size (populations, bacteria, radioactive atoms, compound interest), the model is ${DNDT} = ${k}${N}. With ${rel(k, '>', '0')} it grows (population); with ${rel(k, '<', '0')} it decays (radioactivity). Solving gives the famous exponential ${N} = ${N0}${EKT}.`,
      },
      {
        t: 'p',
        html: `<b>Newton’s law of cooling.</b> A hot body loses heat at a rate proportional to how much hotter it is than its surroundings, not to its own temperature. So the driver is the <b>difference</b> (${TH} − ${THS}), giving ${DTHDT} = −${k}(${TH} − ${THS}).`,
      },
      {
        t: 'p',
        html: `<b>Geometric applications.</b> Here the data is about the curve’s shape: the slope of the tangent (${DYDX}), the subnormal (${y}${DYDX}), the subtangent, or the requirement that two families cross at right angles (orthogonal trajectories). Translate the geometric condition into a DE and solve.`,
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture your hot chai again. Right out of the kettle it cools fast (huge gap with the room); near room temperature it barely cools at all (tiny gap). The rate tracks the gap, not the chai’s own temperature: that single insight is the difference between Newton’s cooling and ordinary decay, and getting it right is half the marks.',
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions, read carefully:</b><br>• <b>Get the sign of ${k} right.</b> Decay and cooling lose quantity, so the rate is negative: ${DNDT} = −${k}${N} (decay) and ${DTHDT} = −${k}(${TH} − ${THS}) with ${rel(k, '>', '0')}. A wrong sign makes a cooling body heat up forever.<br>• <b>Cooling depends on the difference, not the temperature.</b> Modelling ${DTHDT} ∝ ${TH} instead of ∝ (${TH} − ${THS}) is the classic setup error.<br>• <b>Keep time units consistent</b> and apply the given conditions in the right order (initial value fixes ${N0} or the constant; a second data point fixes ${k}).`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'formula',
        kicker: 'Exponential growth / decay',
        main: `${DNDT} = ${k}${N} ⟹ ${N} = ${N0}${NB}${EKT}`,
        legend: [
          `${N} = quantity (size/number/mass)`,
          `${N0} = initial quantity`,
          `${k} = rate constant (${rel(k, '>', '0')} growth, ${rel(k, '<', '0')} decay)`,
          `${t} = time`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `where ${N0} is the amount at ${rel(t, '=', '0')}; ${rel(k, '>', '0')} growth, ${rel(k, '<', '0')} decay.`,
      },
      {
        t: 'formula',
        kicker: 'Doubling time and half-life',
        main: `Doubling time: ${t} = ${fr(LN2, k)}<br>Half-life: ${t}<sub>1/2</sub> = ${fr(LN2, k)}`,
        legend: [`${k} = the rate constant (growth ${DNDT} = ${k}${N}; decay written ${DNDT} = −${k}${N}, ${rel(k, '>', '0')})`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Newton’s law of cooling',
        main: `${DTHDT} = −${k}(${TH} − ${THS}) ⟹<br>${TH}${NB}=${NB}${THS}${NB}+${NB}(${TH0}${NB}−${NB}${THS})${NB}${EMKT}`,
        legend: [
          `${TH} = temperature`,
          `${THS} = surrounding temperature`,
          `${TH0} = initial temperature`,
          `${k} = positive rate constant`,
          `${t} = time`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `where ${THS} is the surrounding temperature, ${TH0} the initial temperature. As ${t} → ∞, ${TH} → ${THS}.`,
      },
      {
        t: 'p',
        html: `<b>Geometric quantities</b> at a point (${x},${NB}${y}) on a curve, with slope ${m} = ${DYDX}:`,
      },
      {
        t: 'formula',
        kicker: 'Geometric quantities',
        main: `Subtangent = ${y}${NB}·${NB}${DXDY}<br>Subnormal = ${y}${NB}${DYDX}`,
        legend: [`(${x},${NB}${y}) = a point on the curve`, `${DYDX} = slope of the tangent`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Orthogonal trajectories:</b> a family cutting another family at right angles, obtained by replacing ${DYDX} with −${DXDY} in the first family’s DE and solving.`,
      },
      {
        t: 'p',
        html: `<b>Notation key.</b> ${N}: quantity (size/number/mass); ${N0}: initial quantity; ${k}: rate constant (its sign tells growth or decay in ${DNDT} = ${k}${N}; positive in the cooling law and in ${DNDT} = −${k}${N}); ${t}: time; ${TH}: temperature; ${THS}: surrounding temperature; ${TH0}: initial temperature.`,
      },
      {
        t: 'p',
        html: `<b>Three properties to lock in:</b><br>1. <b>Proportional-to-itself ⇒ exponential.</b> Any “rate ∝ amount” gives ${EKT}; the only question is the sign and the constants.<br>2. <b>Cooling has a floor.</b> The exponential term decays to zero, so temperature settles at ${THS}, never below the room.<br>3. <b>Geometry → DE by dictionary.</b> “slope = …”, “subnormal = …”, “cuts at right angles” each translate to a specific derivative condition; the rest is ordinary solving.`,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'This is procedural: the skill is <b>translating words into a DE</b>, then solving by the methods of Topics 03–04.',
      },
      {
        t: 'proc',
        title: 'Procedure: solving an application',
        steps: [
          `<b>Name the variables</b> and identify what changes with respect to what (${N} with ${t}, ${TH} with ${t}, ${y} with ${x}).`,
          `<b>Translate the rate sentence into a DE.</b> “Rate ∝ size” → ${DNDT} = ${k}${N}; “rate ∝ gap with surroundings” → ${DTHDT} = −${k}(${TH} − ${THS}); “slope = …” / “subnormal = …” → the geometric condition. Fix the <b>sign</b> by asking whether the quantity rises or falls.`,
          '<b>Solve the DE</b> (these models are separable; some geometric ones are linear).',
          `<b>Apply conditions in order:</b> the initial value pins ${N0} / the constant; a second data point pins ${k}.`,
          '<b>Answer the exact question asked</b> (a time, a temperature, a fraction, an equation of a curve), and sanity-check the limiting behaviour.',
        ],
      },
      {
        t: 'p',
        html: '<b>Translation discipline:</b> the most expensive error is mis-translating the English. Underline the rate word (“rate”, “proportional to”, “slope”, “cuts at right angles”) and the thing it’s proportional to before writing any symbols.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level (growth)',
        q: 'A bacterial culture grows at a rate proportional to its size and doubles in 4 hours. How long does it take to become 8 times its original size?',
        steps: [
          `<b>Model:</b> ${DNDT} = ${k}${N} ⇒ ${N} = ${N0}${EKT}.`,
          `<b>Find ${k} from doubling:</b> 2${N0} = ${N0}${ex(`4${k}`)}<br>⇒ ${ex(`4${k}`)} = 2 ⇒ ${k} = ${fr(LN2, '4')}.`,
          `<b>Time to reach 8${N0}:</b> 8 = ${EKT} ⇒ ${k}${t} = ln${NB}8 = 3${NB}${LN2}<br>⇒ ${t} = ${fr(`3${NB}${LN2}`, `(${LN2}) ÷ 4`)} = 12.`,
          '<b>Sanity check:</b> 8 = 2<sup>3</sup>, and each doubling takes 4 h, so 3 × 4 = 12 h: matches.',
        ],
        ans: `${t} = 12 hours`,
      },
      {
        t: 'ex',
        tag: 'CUET / JEE Main Speed Trap (decay)',
        q: 'A radioactive substance has a half-life of 1600 years. What fraction remains after 4800 years?',
        steps: [
          `<b>Solution (count half-lives, no calculus needed).</b> ${fr('4800', '1600')} = 3 half-lives. Each halves the amount:<br>(${HALF})<sup>3</sup> = ${fr('1', '8')}.`,
          `<b>The trap:</b> setting up ${N} = ${N0}${EMKT}, solving for ${k}, then plugging back: correct but slow, and easy to slip a sign. When the elapsed time is a whole number of half-lives, just count. (For non-integer multiples, fall back to ${fr(N, N0)} = (${HALF})<sup>${t}/${t}₁/₂</sup>.)`,
        ],
        ans: fr('1', '8'),
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (Newton’s law of cooling)',
        q: 'A body at 100°C is placed in a room at 25°C. It cools to 70°C in 10 minutes. Find its temperature after a further 10 minutes.',
        steps: [
          `<b>Model:</b> ${DTHDT} = −${k}(${TH} − 25)<br>⇒ ${TH} = 25 + (100 − 25)${EMKT}<br>= 25 + 75${EMKT}.`,
          `<b>Use ${rel(t, '=', '10')}, ${rel(TH, '=', '70')}:</b> 70 = 25 + 75${ex(`−10${k}`)}<br>⇒ 75${ex(`−10${k}`)} = 45 ⇒ ${ex(`−10${k}`)} = ${fr('3', '5')}.`,
          `<b>At ${rel(t, '=', '20')}:</b> ${TH} = 25 + 75${ex(`−20${k}`)} = 25 + 75(${ex(`−10${k}`)})<sup>2</sup><br>= 25 + 75 · ${fr('9', '25')} = 25 + 27.`,
          `<b>Why “(${ex(`−10${k}`)})<sup>2</sup>”:</b> writing ${ex(`−20${k}`)} as the square of the known ${ex(`−10${k}`)} avoids ever solving for ${k}: a clean shortcut whenever the second time is a multiple of the first.`,
        ],
        ans: `${TH} = 52°C`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (orthogonal trajectories)',
        q: `Find the orthogonal trajectories of the family of parabolas ${y} = ${C}${X2}.`,
        steps: [
          `First form the family’s own DE (Topic 02, Key procedures and logical framework): from ${y} = ${C}${X2}, ${DYDX} = 2${C}${x}, and ${C} = ${fr(y, X2)}, so<br>${DYDX} = 2 · ${fr(y, X2)} · ${x} = ${fr(`2${y}`, x)}.`,
          `For curves crossing this family at right angles, <b>replace</b> ${DYDX} <b>by</b> −${DXDY}:<br>${DYDX} = −${fr(x, `2${y}`)} ⟹ 2${y}${DY} = −${x}${DX}.`,
          `Integrate (separable):<br>${Y2} = −${fr(X2, '2')} + ${C1}<br>⟹ ${fr(X2, '2')} + ${Y2} = ${C1} (a family of ellipses).`,
          `<b>The picture:</b> every parabola ${y} = ${C}${X2} meets every ellipse ${fr(X2, '2')} + ${Y2} = ${C1} at 90°. This single problem chains <b>formation</b> (Topic 02, Key procedures and logical framework), the <b>orthogonality swap</b>, and <b>separable solving</b> (Topic 03, Key procedures and logical framework): exactly the kind of synthesis JEE Advanced rewards.`,
        ],
        ans: `${fr(X2, '2')} + ${Y2} = ${C1}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'p',
        html: 'Try these yourself; final answers follow.',
      },
      {
        t: 'practice',
        items: [
          {
            q: '<b>[CBSE]</b> A population grows at a rate proportional to its size and triples in 5 years. When will it be 9 times the original?',
            a: '10 years',
          },
          {
            q: '<b>[CUET]</b> A radioactive isotope has a half-life of 20 days. What fraction remains after 60 days?',
            a: fr('1', '8'),
          },
          {
            q: '<b>[JEE Main]</b> Water at 80°C is kept in a room at 20°C and cools to 50°C in 5 minutes. Find its temperature after 10 minutes.',
            a: '35°C',
          },
          {
            q: `<b>[JEE Main]</b> Find the curve passing through (1,${NB}2) whose slope at every point equals ${YX}.`,
            a: `${y} = 2${x}`,
          },
          {
            q: `<b>[JEE Advanced]</b> Find the curve through (0,${NB}1) for which the subnormal at every point is constant and equal to 2.`,
            a: `${Y2} = 4${x} + 1 (from ${y}${DYDX} = 2)`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The differential equation ${DNDT} = ${k}${N} (with ${rel(k, '>', '0')}) models:`,
        opts: [
          { label: 'exponential growth', nudge: null },
          { label: 'exponential decay', nudge: `<b>(B)</b> would need ${rel(k, '<', '0')}.` },
          { label: 'linear growth', nudge: `<b>(C)</b> “linear growth” is ${DNDT} = ${k} (constant rate), not ∝ ${N}.` },
          {
            label: 'logistic growth',
            nudge: `<b>(D)</b> logistic growth has a carrying-capacity term, ${DNDT} = ${k}${N}(1 − ${fr(N, M)}): not this equation.`,
          },
        ],
        correct: 0,
        solution: `Rate proportional to current size with ${rel(k, '>', '0')} gives ${N} = ${N0}${EKT}, unbounded exponential growth.`,
      },
      {
        t: 'mcq',
        q: `By Newton’s law of cooling, as ${t} → ∞ the temperature of a cooling body approaches:`,
        opts: [
          { label: `the surrounding temperature ${THS}`, nudge: null },
          { label: '0°', nudge: '<b>(B)</b> assumes cooling to absolute reference: it stops at the room, not zero.' },
          { label: `its initial temperature ${TH0}`, nudge: `<b>(C)</b> is the initial value, at ${rel(t, '=', '0')}.` },
          { label: 'infinity', nudge: `<b>(D)</b> is impossible for cooling (wrong sign of ${k}).` },
        ],
        correct: 0,
        solution: `${TH} = ${THS} + (${TH0} − ${THS})${EMKT}; the exponential decays to 0, leaving ${TH} → ${THS}.`,
      },
      {
        t: 'mcq',
        q: `A substance decays to ${fr('1', '4')} of its amount in 10 years. Its half-life is:`,
        opts: [
          { label: '5 years', nudge: null },
          { label: '2.5 years', nudge: '<b>(B)</b>, <b>(D)</b> misdivide the number of half-lives.' },
          { label: '10 years', nudge: '<b>(C)</b> mistakes the quarter-life for the half-life.' },
          { label: '20 years', nudge: '<b>(B)</b>, <b>(D)</b> misdivide the number of half-lives.' },
        ],
        correct: 0,
        solution: `${fr('1', '4')} = (${HALF})<sup>2</sup>, so 10 years is <b>two</b> half-lives ⇒ half-life = 5 years.`,
      },
      {
        t: 'mcq',
        q: 'If the subnormal of a curve is constant at every point, the curve is a:',
        opts: [
          { label: 'parabola', nudge: null },
          {
            label: 'circle',
            nudge: '<b>(B)</b> would arise from a constant length of normal condition, not constant subnormal.',
          },
          { label: 'straight line', nudge: '<b>(C)</b> constant slope gives a line, a different condition.' },
          {
            label: 'rectangular hyperbola',
            nudge: `<b>(D)</b> comes from ${rel(I('xy'), '=', c)}, unrelated to the subnormal condition.`,
          },
        ],
        correct: 0,
        solution: `Subnormal = ${y}${DYDX} = ${a} (constant) ⇒ ${y}${DY} = ${a}${DX} ⇒ ${Y2} = 2${I('ax')}${PLUS_C}: a parabola.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Wrong sign of ${k}.</b> Decay and cooling lose quantity: use ${DNDT} = −${k}${N} and ${DTHDT} = −${k}(${TH} − ${THS}) with ${rel(k, '>', '0')}. A sign slip makes things grow or heat without bound.`,
          `<b>Cooling modelled on temperature, not the gap.</b> It’s ∝ (${TH} − ${THS}), never ∝ ${TH}.`,
          `<b>Solving for ${k} when you don’t need to.</b> If the second time is a multiple of the first, write ${ex(`−20${k}`)} = (${ex(`−10${k}`)})<sup>2</sup> and substitute the known ratio: skip ${k} entirely.`,
          '<b>Mis-translating the English.</b> Underline the rate word and what it’s proportional to before writing symbols; “slope”, “subnormal”, “cuts at right angles” each map to a specific derivative condition.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (count, don’t compute):</b> for growth/decay over a whole number of doubling-times or half-lives, just count the doublings/halvings (2<sup>${n}</sup> or (${HALF})<sup>${n}</sup>) instead of solving for ${k}: seconds instead of minutes. Reserve the full ${EKT} machinery for awkward (non-integer) ratios.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Growth / decay</b>',
            note: `${DNDT} = ${k}${N} ⇒ ${N} = ${N0}${EKT} (${rel(k, '>', '0')} grow, ${rel(k, '<', '0')} decay); half-life/doubling = ${fr(LN2, abs(k))}.`,
          },
          {
            f: '<b>Newton’s cooling</b>',
            note: `${DTHDT} = −${k}(${TH} − ${THS}) ⇒ ${TH} = ${THS} + (${TH0} − ${THS})${EMKT}; ${TH} → ${THS} as${NB}${t}${NB}→${NB}∞.`,
          },
          { f: `<b>Subnormal</b> = ${y}${DYDX}; <b>subtangent</b> = ${y}${NB}·${NB}${DXDY}.`, note: '' },
          {
            f: '<b>Orthogonal trajectories</b>',
            note: `replace ${DYDX} → −${DXDY} in the family’s DE, then solve.`,
          },
          { f: '<b>Every model reduces to a separable or linear DE</b> (Topics 03–04).', note: '' },
        ],
        aids: [
          '“Proportional to itself ⇒ exponential.”',
          '“Cooling tracks the gap, not the heat.”',
          `“Lose ⇒ minus ${k}.”`,
          '“Right angles ⇒ negative reciprocal slope.”',
        ],
      },
      {
        t: 'p',
        html: `${DNDT} = ${k}${N} ⇒ ${N} = ${N0}${EKT};<br>${DTHDT} = −${k}(${TH} − ${THS}) ⇒ ${TH} = ${THS} + (${TH0} − ${THS})${EMKT}.`,
      },
    ],
  },
];
