import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9 Differential Equations, Additional topics A–D, pp. 620–630 of the
 * Class 12 Mathematics Master Reference (October 2026 edition), word for word:
 * the "Chapter 9: Differential Equations — Additional Topics" part's Addenda A
 * to D, with the book's letters. Its heading is not copied; its p. 620 opening
 * paragraphs are A's "Introduction". Each addendum then opens with its own
 * "Exam Relevance:" paragraph (the part "Exam relevance"), then its own
 * headings as parts ("Method", "The inspection table", B's "Type 1" and
 * "Type 2" with their worked examples inside them, "The coordinate picture,
 * derived"), the run of "Example X.N" worked examples as one part "Worked
 * examples", and "Practice — Addendum X" as "Practice", answers set against
 * their questions. The "Closing note" printed on p. 630, just before Addendum
 * P (not here), is D's last part. "Parts 1 to 5", "Part 3/Part 4", "Part 4",
 * "Part 5" → Topics; "Addendum X" → "Additional topic X"; "Example C.2" →
 * "this topic’s second worked example". The book's rules stay in the prose;
 * the formula cards after them repeat their formulas for the Formula sheet.
 * No drawings on these pages (every vector path is a section rule, a fraction
 * bar, a radical, the table's rules or a page rule). d and ∂ upright and d
 * glued to its variable, ∫ upright, e upright, ln as printed, IF upright,
 * φ (U+03C6). Every fraction is stacked (<frac>); a slash stays only inside a
 * raised run (e<sup>x/a</sup>) or a plain-text title; a fraction inside a
 * fraction's denominator is written with ÷; no em dashes.
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
const k = I('k');
const m = I('m');
const n = I('n');
const p = I('p');
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
const M = I('M');
const N = I('N');
const P = I('P');
const Q = I('Q');
const T = I('T');
const X = I('X');
const Y = I('Y');
const PHI = I('φ');
const TH = I('θ');
const XY = I('xy');

const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const cube = (s: string) => `${s}<sup>3</sup>`;
const abs = (s: string) => `|${WJ}${s}|`;
const rel = (l: string, op: string, r: string) => `${l}${NB}${op}${NB}${r}`;
/** A point or a pair, its comma glued. */
const pt = (p1: string, p2: string) => `(${p1},${NB}${p2})`;
/** e raised to a power, e upright. */
const ex = (pw: string) => `e<sup>${pw}</sup>`;
const ATAN = 'tan<sup>−1</sup>';

/** Derivatives with an upright d; partial derivatives with an upright ∂. */
const d = (top: string, bottom: string) => fr(`d${top}`, `d${bottom}`);
const pd = (top: string, bottom: string) => fr(`∂${top}`, `∂${bottom}`);
const DYDX = d(y, x);
const DVDX = d(v, x);
const DPDX = d(p, x);
const DPDY = d(p, y);
/** Differentials glued to what they multiply. */
const DX = `${NB}d${x}`;
const DY = `${NB}d${y}`;
const DV = `${NB}d${v}`;

const X2 = sq(x);
const Y2 = sq(y);
const X3 = cube(x);
const Y3 = cube(y);
const YX = fr(y, x);
const XOY = fr(x, y);
const HALF = fr('1', '2');
const X2Y2 = `${X2} + ${Y2}`;
const XDY_YDX = `${x}${DY} − ${y}${DX}`;
const YDX_XDY = `${y}${DX} − ${x}${DY}`;
const LNXY = `ln${NB}${abs(XOY)}`;
const TAN_YX = `${ATAN}(${YX})`;

// Additional topic A's partial derivatives
const My = sb(M, y);
const Nx = sb(N, x);
const Fx = sb(F, x);
const Fy = sb(F, y);
const Gx = sb(G, x);
const Gy = sb(G, y);
const Hx = sb(H, x);
const EXY = ex(XY);

// Additional topic B's symbols
const YN = `${y}<sup>${n}</sup>`;
const Y1N = `${y}<sup>1−${n}</sup>`;
const EMX = ex(`−${x}`);
const a1 = sb(a, '1');
const b1 = sb(b, '1');
const c1 = sb(c, '1');
const a2 = sb(a, '2');
const b2 = sb(b, '2');
const c2 = sb(c, '2');
const SQRT1M2 = `√(1${NB}+${NB}${sq(m)})`;

// Additional topic D's symbols
const C1 = sb(C, '1');
const C2 = sb(C, '2');
const YP = `${y}′`;
const YPP = `${y}″`;
const YP2 = `(${YP})<sup>2</sup>`;
const EAX = ex(`${A}${x}`);
const E2AX = ex(`2${A}${x}`);

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 620–624 ────────────────
  {
    n: 'A',
    title: 'Exact Differential Equations and Solving by Inspection',
    extra: true,
    kalam: 'Many exam equations are not exact as written but become a sum of perfect differentials after regrouping.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topics 01 to 05 taught you to classify an equation, form one from a family of curves, and solve the three workhorse types (separable, homogeneous, and linear) plus their standard applications. Four examinable patterns are still standing outside the door. Additional topic A introduces exact equations and the inspection table of ready-made differentials, the method behind those JEE “solve” questions that fit none of the three workhorse types. Additional topic B supplies the two reducible types the chapter only gestures at: Bernoulli equations and ${DYDX} = ${f}(${I('ax')} + ${I('by')} + ${c}). Additional topic C completes the geometric dictionary: the chapter gave you subnormal and subtangent, but JEE has also set tangent length, normal length, intercept, and fixed-point conditions, mostly in its older papers (see Additional topic P). Additional topic D lowers the order of a second-order equation by substituting for ${YP}, a JEE Advanced extension that sits one level above everything the chapter attempts.`,
      },
      {
        t: 'p',
        html: 'Nothing here is new theory. Every method reduces to separation or to the integrating factor you already own; what is new is the recognition step that gets you there.',
      },

      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Exact equations are not in the NCERT book or the current CBSE syllabus, and the JEE Main syllabus names only separable, homogeneous and linear equations, as far as we know. Even so, JEE papers have set “solve the equation” questions whose equation is neither separable, nor homogeneous, nor linear: it is exact, or becomes exact after dividing by a well-chosen factor. JEE Advanced goes further and expects you to spot the perfect differential by eye. This additional topic gives the test, the construction, and the table that makes spotting mechanical.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `An equation written as<br>${M}${DX} + ${N}${DY} = 0<br>is called <b>exact</b> if there exists a function ${F}${pt(x, y)} whose total differential is exactly the left side:<br>d${F} = ${Fx}${DX} + ${Fy}${DY}<br>= ${M}${DX} + ${N}${DY},<br>so that the equation simply says d${F} = 0, and the solution is ${F}${pt(x, y)} = ${C}. The entire method rests on answering one question: given ${M} and ${N}, when does such an ${F} exist? (${Fx} means the derivative of ${F} with respect to ${x} with ${y} held constant, and ${Fy} likewise.)`,
      },
      {
        t: 'p',
        html: `<b>The test, derived.</b> If ${F} exists with ${rel(Fx, '=', M)} and ${rel(Fy, '=', N)}, then by equality of mixed partials,<br>${pd(M, y)} = ${fr(`∂<sup>2</sup>${F}`, `∂${y}${NB}∂${x}`)}<br>= ${fr(`∂<sup>2</sup>${F}`, `∂${x}${NB}∂${y}`)} = ${pd(N, x)}.<br>So ${rel(My, '=', Nx)} is necessary. It is also sufficient (when ${M}, ${N} and their first partial derivatives are continuous on a rectangle, or any region without holes), and the sufficiency proof hands you the solution algorithm for free. Assume ${rel(My, '=', Nx)}. Integrate ${M} with respect to ${x}, holding ${y} constant:<br>${G}${pt(x, y)} = ∫${M}${DX},${NB}${NB}${rel(Gx, '=', M)}.<br>Now compare ${Gy} with ${N}. Their difference ${H} = ${N} − ${Gy} satisfies<br>${Hx} = ${Nx} − (${Gy})<sub>${x}</sub><br>= ${Nx} − (${Gx})<sub>${y}</sub><br>= ${Nx} − ${My} = 0,<br>so ${H} depends on ${y} alone: ${H} = ${PHI}(${y}). Then ${F} = ${G} + ∫${PHI}(${y})${DY} has ${rel(Fx, '=', M)} and ${Fy} = ${Gy} + ${PHI} = ${N}, exactly as required. The procedure writes itself:`,
      },
      {
        t: 'proc',
        title: 'The procedure',
        steps: [
          `Write the equation as ${M}${DX} + ${N}${DY} = 0.`,
          `Compute ${My} and ${Nx}. If they differ, the equation is not exact: go to the inspection table below.`,
          `If exact, set ${G} = ∫${M}${DX} (treat ${y} as constant).`,
          `Compute ${PHI}(${y}) = ${N} − ${Gy}; it will contain no ${x}.`,
          `The solution is ${G} + ∫${PHI}(${y})${DY} = ${C}.`,
        ],
      },
      {
        t: 'formula',
        kicker: 'Test for exactness',
        main: `${M}${DX} + ${N}${DY} = 0 is exact ⟺ ${rel(My, '=', Nx)}`,
        legend: [
          `${My} = ${pd(M, y)}, the partial derivative of ${M} with respect to ${y}`,
          `${Nx} = ${pd(N, x)}, the partial derivative of ${N} with respect to ${x}`,
          `On a rectangle (a region without holes), with ${M}, ${N} and their first partial derivatives continuous`,
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Solution of an exact equation',
        main: `${G} + ∫${PHI}(${y})${DY} = ${C}`,
        legend: [
          `${G} = ∫${M}${DX}, with ${y} held constant`,
          `${PHI}(${y}) = ${N} − ${Gy}, which contains no ${x}`,
          `${C} = arbitrary constant`,
        ],
        note: null,
      },

      { t: 'part', title: 'The inspection table' },
      {
        t: 'p',
        html: `Many exam equations are not exact as written but become a sum of perfect differentials after regrouping. Five differentials cover nearly every case. Each is one line of ordinary calculus:<br>d(${XY}) = ${x}${DY} + ${y}${DX}<br>by the product rule;`,
      },
      {
        t: 'p',
        html: `d(${YX}) = ${fr(XDY_YDX, X2)},<br><br>d(${XOY}) = ${fr(YDX_XDY, Y2)}<br>by the quotient rule;`,
      },
      {
        t: 'p',
        html: `d(ln(${X2Y2})) = ${fr(`2(${x}${DX} + ${y}${DY})`, X2Y2)}<br>by the chain rule; and for ${TH} = ${TAN_YX}, differentiate tan${NB}${TH} = ${YX}:<br>sec<sup>2</sup>${NB}${TH}${NB}d${TH} = ${fr(XDY_YDX, X2)},<br><br>sec<sup>2</sup>${NB}${TH} = ${fr(X2Y2, X2)}<br>⟹ d${TH} = ${fr(XDY_YDX, X2Y2)}.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Perfect differential', 'Expanded form'],
        rows: [
          [`d(${XY})`, `${y}${DX} + ${x}${DY}`],
          [`d(${YX})`, fr(XDY_YDX, X2)],
          [`d(${XOY})`, fr(YDX_XDY, Y2)],
          [`d(ln(${X2Y2}))`, fr(`2(${x}${DX} + ${y}${DY})`, X2Y2)],
          [`d(${TAN_YX})`, fr(XDY_YDX, X2Y2)],
        ],
      },
      {
        t: 'p',
        html: `Two algebraic facts turn these into weapons:<br>${fr(`d(${XY})`, `(${XY})<sup>2</sup>`)} = −d(${fr('1', XY)}),<br><br>${fr(YDX_XDY, XY)} = d(${LNXY}).<br>The first is the chain rule applied to ${fr('1', t)}; the second is splitting the fraction into ${fr(`d${x}`, x)} − ${fr(`d${y}`, y)}.`,
      },
      {
        t: 'formula',
        kicker: 'Perfect differentials (the inspection table)',
        main: `d(${XY}) = ${y}${DX} + ${x}${DY}<br>d(${YX}) = ${fr(XDY_YDX, X2)}<br>d(${XOY}) = ${fr(YDX_XDY, Y2)}<br>d(ln(${X2Y2})) = ${fr(`2(${x}${DX} + ${y}${DY})`, X2Y2)}<br>d(${TAN_YX}) = ${fr(XDY_YDX, X2Y2)}`,
        legend: [`${x}, ${y} = the two variables`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Two algebraic facts for inspection',
        main: `${fr(`d(${XY})`, `(${XY})<sup>2</sup>`)} = −d(${fr('1', XY)})<br>${fr(YDX_XDY, XY)} = d(${LNXY})`,
        legend: [`${XY} = the product of the two variables`],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Test for exactness and solve (2${XY} + 3${X2})${DX} + (${X2} + 6${Y2})${DY} = 0.`,
        steps: [
          `Here ${M} = 2${XY} + 3${X2} and ${N} = ${X2} + 6${Y2}. Then<br>${My} = 2${x},${NB}${NB}${Nx} = 2${x},<br>equal, so the equation is exact.`,
          `Construct ${G}:<br>${G} = ∫(2${XY} + 3${X2})${DX}<br>= ${X2}${y} + ${X3}.`,
          `Then ${Gy} = ${X2}, so ${PHI}(${y}) = ${N} − ${Gy} = 6${Y2}, and<br>${X2}${y} + ${X3} + 2${Y3} = ${C}.`,
          `<b>Check.</b> Differentiate the answer implicitly: (2${XY} + 3${X2})${DX} + (${X2} + 6${Y2})${DY} = 0, recovered exactly.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Solve (${y}${EXY} + 2${x})${DX} + ${x}${EXY}${DY} = 0.`,
        steps: [
          `Test: ${My} = ${EXY} + ${XY}${EXY} and ${Nx} = ${EXY} + ${XY}${EXY}: exact.`,
          `Build ${G}:<br>${G} = ∫(${y}${EXY} + 2${x})${DX}<br>= ${EXY} + ${X2},<br>since ∫${y}${EXY}${DX} = ${EXY} (the ${y} is a spectator).`,
          `Then ${Gy} = ${x}${EXY}, so ${PHI}(${y}) = ${N} − ${Gy} = 0. The ${PHI} step is not optional even when it vanishes: skipping it is how students “confirm” wrong answers.`,
          `Solution:<br>${EXY} + ${X2} = ${C}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: inspection',
        q: `Solve ${y}(1 + ${XY})${DX} + ${x}(1 − ${XY})${DY} = 0.`,
        steps: [
          `First check exactness: ${M} = ${y} + ${x}${Y2}, ${N} = ${x} − ${X2}${y}, so ${My} = 1 + 2${XY} while ${Nx} = 1 − 2${XY}. Not exact, and no routine integrating factor suggests itself.`,
          `Expand and regroup instead:<br>${y}${DX} + ${x}${DY} + ${x}${Y2}${DX} − ${X2}${y}${DY} = 0<br>⟹ d(${XY}) + ${XY}${NB}(${YDX_XDY}) = 0.`,
          `The first group is row one of the table. To make the second group match a row, divide the whole equation by ${X2}${Y2}:<br>${fr(`d(${XY})`, `${X2}${Y2}`)} + ${fr(YDX_XDY, XY)} = 0. (This division loses the solutions ${rel(x, '=', '0')} and ${rel(y, '=', '0')}, which satisfy the original equation.)`,
          `Apply the two algebraic facts above:<br>−d(${fr('1', XY)}) + d(${LNXY}) = 0.`,
          `Integrating,<br>${LNXY} − ${fr('1', XY)} = ${C}.`,
          `<b>Why it is Advanced-level.</b> Nothing in the equation announces the divisor ${X2}${Y2}. You find it by asking: “what power of ${x} and ${y} turns each group into a tabulated differential?”, a two-second scan once the table is memorised, impossible without it.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Verify exactness and solve (2${x} + ${y})${DX} + (${x} + 2${y})${DY} = 0.`,
            a: `${My} = ${Nx} = 1; ${X2} + ${XY} + ${Y2} = ${C}.`,
          },
          {
            q: `Verify exactness and solve (${X2} − ${y})${DX} − (${x} + ${Y2})${DY} = 0.`,
            a: `${My} = ${Nx} = −1; ${fr(X3, '3')} − ${XY} − ${fr(Y3, '3')} = ${C}.`,
          },
          {
            q: `Solve cos${NB}${y}${DX} + (cos${NB}${y} − ${x}${NB}sin${NB}${y})${DY} = 0.`,
            a: `${My} = ${Nx} = −sin${NB}${y}; ${G} = ${x}${NB}cos${NB}${y}, ${PHI}(${y}) = cos${NB}${y}, so ${x}${NB}cos${NB}${y} + sin${NB}${y} = ${C}.`,
          },
          {
            q: `By inspection, solve ${fr(XDY_YDX, X2Y2)} = d${x}.`,
            a: `The left side is d(${TAN_YX}), so ${TAN_YX} = ${x} + ${C}.`,
          },
          {
            q: `Find the value of ${k} for which (6${X2} + ${I('kxy')})${DX} + (3${X2} + 5${Y2})${DY} = 0 is exact, and solve it.`,
            a: `${My} = ${k}${x} and ${Nx} = 6${x} force ${rel(k, '=', '6')}; then ${G} = 2${X3} + 3${X2}${y}, ${Gy} = 3${X2}, so ${PHI}(${y}) = ${N} − ${Gy} = 5${Y2}, and<br>2${X3} + 3${X2}${y} + ${fr('5', '3')}${Y3} = ${C}.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic B · pp. 624–626 ────────────────
  {
    n: 'B',
    title: 'Two Reducible Types: Bernoulli and f(ax + by + c)',
    extra: true,
    kalam: 'Both reduce to machinery you already own: one to the linear method, one to separation.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `The chapter’s note after its origin-shift example admits the parallel-lines case exists but never works it, and Bernoulli appears nowhere. JEE Main sets both: a Bernoulli equation disguised among linear options in an MCQ, and a tan<sup>2</sup>(${x}${NB}+${NB}${y})-style integrand in the solve section ${ESTIMATE}. Both reduce to machinery you already own: one to the linear method, one to separation.`,
      },

      { t: 'part', title: 'Type 1: Bernoulli equations' },
      {
        t: 'p',
        html: `An equation of the form<br>${DYDX} + ${P}${y} = ${Q}${YN},${NB}${NB}${n}${NB}≠${NB}0,${NB}1,<br>with ${P}, ${Q} functions of ${x}, is <b>not linear</b>: the ${YN} spoils it. But one division and one substitution make it so. Divide through by ${YN}:<br>${y}<sup>−${n}</sup>${DYDX} + ${P}${Y1N} = ${Q}.`,
      },
      {
        t: 'p',
        html: `The combination ${y}<sup>−${n}</sup>${DYDX} is begging for the substitution ${v} = ${Y1N}, because<br>${DVDX} = (1 − ${n})${NB}${y}<sup>−${n}</sup>${DYDX}.<br>Substituting and dividing by (1 − ${n}):<br>${DVDX} + (1 − ${n})${NB}${P}${v} = (1 − ${n})${NB}${Q},<br>which is linear in ${v} with the usual integrating factor ${ex(`∫(1−${n})${P}${NB}d${x}`)}. Solve for ${v}, then back-substitute ${v} = ${Y1N}. Never leave an answer containing ${v}.`,
      },
      {
        t: 'formula',
        kicker: 'Bernoulli equation',
        main: `${DYDX} + ${P}${y} = ${Q}${YN},${NB}${NB}${n}${NB}≠${NB}0,${NB}1<br>${v} = ${Y1N}:<br>${DVDX} + (1 − ${n})${NB}${P}${v} = (1 − ${n})${NB}${Q}`,
        legend: [
          `${P}, ${Q} = functions of ${x}`,
          `${v} = the new variable, in which the equation is linear, with integrating factor ${ex(`∫(1−${n})${P}${NB}d${x}`)}`,
        ],
        note: null,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Solve ${DYDX} + ${y} = ${Y2}${ex(x)}.`,
        steps: [
          `Here ${rel(n, '=', '2')}, ${rel(P, '=', '1')}, ${Q} = ${ex(x)}. Divide by ${Y2} and put ${v} = ${y}<sup>−1</sup>, so ${v}′ = −${y}<sup>−2</sup>${YP}:<br>−${v}′ + ${v} = ${ex(x)} ⟹ ${v}′ − ${v} = −${ex(x)}.`,
          `Linear, with IF = ${EMX}. Then<br>(${v}${EMX})′ = −${ex(x)} · ${EMX} = −1<br>⟹ ${v}${EMX} = −${x} + ${C}.`,
          `Back-substitute ${v} = ${fr('1', y)}:<br>${fr('1', y)} = ${ex(x)}(${C} − ${x}).`,
          `<b>Check.</b> At large positive ${x} the denominator ${ex(x)}(${C} − ${x}) dominates in size and ${y} → 0. Separately, ${rel(y, '=', '0')} satisfies the equation (0 + 0 = 0) and is the solution lost when we divided by ${Y2}: always name it.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Type 2: Equations of the form dy/dx = f(ax + by + c)' },
      {
        t: 'p',
        html: `The chapter handled ${DYDX} = ${fr(`${a1}${x} + ${b1}${y} + ${c1}`, `${a2}${x} + ${b2}${y} + ${c2}`)} when the two lines intersect (shift the origin to the intersection). When the equation involves a single linear combination, the shift is replaced by a direct substitution. Put<br>${v} = ${I('ax')} + ${I('by')} + ${c}<br>⟹ ${DVDX} = ${a} + ${b}${DYDX} = ${a} + ${b}${f}(${v}),<br>which is separable in ${v} and ${x}:<br>${fr(`d${v}`, `${a} + ${b}${f}(${v})`)} = d${x}.`,
      },
      {
        t: 'formula',
        kicker: `Reducible type ${I('f')}(${I('ax')} + ${I('by')} + ${I('c')})`,
        main: `${v} = ${I('ax')} + ${I('by')} + ${c}:<br>${fr(`d${v}`, `${a} + ${b}${f}(${v})`)} = d${x}`,
        legend: [`${v} = the single linear combination, the new variable`, `${f} = the given function`],
        note: null,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Solve ${DYDX} = tan<sup>2</sup>(${x} + ${y}).`,
        steps: [
          `Put ${v} = ${x} + ${y}, so ${v}′ = 1 + tan<sup>2</sup>${NB}${v} = sec<sup>2</sup>${NB}${v}. Separate:<br>cos<sup>2</sup>${NB}${v}${DV} = d${x}.`,
          `Use the half-angle identity cos<sup>2</sup>${NB}${v} = ${fr(`1 + cos${NB}2${v}`, '2')}:<br>∫cos<sup>2</sup>${NB}${v}${DV} = ${fr(v, '2')} + ${fr(`sin${NB}2${v}`, '4')} = ${x} + ${C}.`,
          `Restore ${v} = ${x} + ${y}:<br>${fr(`${y} − ${x}`, '2')} + ${fr(`sin(2(${x} + ${y}))`, '4')} = ${C}.`,
          `<b>Why it is Advanced-level.</b> The equation fits none of the three workhorse types: it is not separable as written, not homogeneous (the lone ${x} + ${y} is degree 1 inside a transcendental), not linear. The mark-winning move is recognising that the argument of the tangent is itself the correct new variable, which kills the transcendental and leaves a trigonometric integral.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Solve ${DYDX} + ${YX} = ${x}${Y2}.`,
            a: `With ${v} = ${fr('1', y)}: ${v}′ − ${fr(v, x)} = −${x}, IF = ${fr('1', x)}, giving ${fr('1', y)} = ${C}${x} − ${X2}.`,
          },
          {
            q: `Solve ${DYDX} = (${x} + ${y} + 1)<sup>2</sup>.`,
            a: `${v} = ${x} + ${y} + 1: ${ATAN}${NB}${v} = ${x} + ${C}, so ${x} + ${y} + 1 = tan(${x} + ${C}).`,
          },
          {
            q: `Solve ${DYDX} = cos(${x} + ${y}).`,
            a: `${v} = ${x} + ${y}: ${v}′ = 1 + cos${NB}${v} = 2${NB}cos<sup>2</sup>(${fr(v, '2')}), so tan${NB}${fr(`${x} + ${y}`, '2')} = ${x} + ${C}.`,
          },
          {
            q: `Solve ${DYDX} = (${y} − ${x})<sup>2</sup>.`,
            a: `${v} = ${y} − ${x}: ${fr(`d${v}`, `${sq(v)} − 1`)} = d${x}, so ${HALF}${NB}ln${NB}${abs(fr(`${v} − 1`, `${v} + 1`))} = ${x} + ${C} with ${v} = ${y} − ${x}.`,
          },
          {
            q: `Solve ${DYDX} − ${y} = ${x}${Y2}.`,
            a: `With ${v} = ${fr('1', y)}: ${v}′ + ${v} = −${x}, IF = ${ex(x)}, giving ${fr('1', y)} = 1 − ${x} + ${C}${EMX}.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic C · pp. 626–628 ────────────────
  {
    n: 'C',
    title: 'Geometric Conditions Beyond the Subnormal',
    extra: true,
    kalam: 'All of these translate through one coordinate picture, derived once here.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `The chapter’s application part defines subtangent and subnormal and stops. JEE papers also phrase the condition using the length of the tangent or normal, the intercepts cut off by the tangent, or the requirement that the tangent or normal passes through a fixed point. All of these translate through one coordinate picture, derived once here.`,
      },

      { t: 'part', title: 'The coordinate picture, derived' },
      {
        t: 'p',
        html: `Let ${m} = ${DYDX} at a point ${P} = ${pt(x, y)} on the curve, and let ${P}′ = ${pt(x, '0')} be the foot of the ordinate.`,
      },
      {
        t: 'p',
        html: `<b>Tangent.</b> Its equation is ${Y} − ${y} = ${m}(${X} − ${x}). Setting ${rel(Y, '=', '0')} gives its intersection with the ${x}-axis:<br>${T} = (${x} − ${fr(y, m)},${NB}0).<br>Hence the subtangent, the tangent length, and the intercepts:<br>subtangent = ${abs(fr(y, m))},<br><br>length of tangent = √(${fr(Y2, sq(m))} + ${Y2})<br>= ${fr(`${abs(y)}${SQRT1M2}`, abs(m))},<br><br>${x}-intercept = ${x} − ${fr(y, m)},<br>${y}-intercept = ${y} − ${I('mx')}.`,
      },
      {
        t: 'p',
        html: `<b>Normal.</b> Slope −${fr('1', m)}; setting ${rel(Y, '=', '0')} in ${Y} − ${y} = −${fr('1', m)}(${X} − ${x}) gives<br>${N} = (${x} + ${I('my')},${NB}0),<br>so<br>subnormal = ${abs(I('my'))},<br>length of normal = √(${sq(m)}${Y2} + ${Y2})<br>= ${abs(y)}${SQRT1M2}.`,
      },
      {
        t: 'p',
        html: 'Every geometric condition in these problems is one of these six quantities set equal to something, or a line through a named point. Translate, get a first-order DE, solve by whichever workhorse fits.',
      },
      {
        t: 'formula',
        kicker: 'Lengths of the tangent and normal',
        main: `subtangent = ${abs(fr(y, m))}<br>length of tangent = ${fr(`${abs(y)}${SQRT1M2}`, abs(m))}<br>subnormal = ${abs(I('my'))}<br>length of normal = ${abs(y)}${SQRT1M2}`,
        legend: [`${m} = ${DYDX} at the point ${pt(x, y)} of the curve`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Intercepts of the tangent',
        main: `${x}-intercept = ${x} − ${fr(y, m)}<br>${y}-intercept = ${y} − ${I('mx')}`,
        legend: [`${m} = ${DYDX} at the point of contact ${pt(x, y)}`],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the curve passing through ${pt('2', '3')} such that the portion of the tangent between the axes is bisected at the point of contact.`,
        steps: [
          `“Bisected at the point of contact” means ${P} is the midpoint of the two intercepts:<br>${x} = ${HALF}(${x} − ${fr(y, m)}),${NB}${NB}${y} = ${HALF}(${y} − ${I('mx')}).`,
          `The first equation gives 2${x} = ${x} − ${fr(y, m)}, so ${m} = −${YX}; the second gives 2${y} = ${y} − ${I('mx')}, the same statement. One DE:<br>${DYDX} = −${YX} ⟹ ${fr(`d${y}`, y)} = −${fr(`d${x}`, x)}<br>⟹ ${XY} = ${C}.`,
          `Through ${pt('2', '3')}: ${rel(C, '=', '6')}, so ${XY} = 6.`,
          `<b>Check.</b> On ${XY} = 6 at ${pt('2', '3')}: ${m} = −${fr('3', '2')}. Intercepts: ${x}-intercept = 2 − 3 ÷ (−${fr('3', '2')}) = 4, ${y}-intercept = 3 − (−${fr('3', '2')})(2) = 6. Midpoint of ${pt('4', '0')} and ${pt('0', '6')} is ${pt('2', '3')}: the contact point itself.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the curve passing through ${pt('2', '1')} whose normal at every point passes through the fixed point ${pt('1', '0')}.`,
        steps: [
          `The normal at ${P} has slope −${fr('1', m)} and passes through both ${P} and ${pt('1', '0')}, so<br>−${fr('1', m)} = ${fr(`0 − ${y}`, `1 − ${x}`)} = ${fr(y, `${x} − 1`)}<br>⟹ ${m} = ${fr(`1 − ${x}`, y)}.`,
          `Separate:<br>${y}${DY} = (1 − ${x})${DX}<br>⟹ ${fr(Y2, '2')} = ${x} − ${fr(X2, '2')} + ${C}<br>⟹ ${X2Y2} = 2${x} + ${C}′.`,
          `Through ${pt('2', '1')}: 4 + 1 = 4 + ${C}′, so ${C}′ = 1:<br>${X2Y2} = 2${x} + 1,<br>a circle centred at ${pt('1', '0')} with radius √2, exactly as geometry predicts, since every normal of a circle passes through its centre.`,
          '<b>Why it is Advanced-level.</b> The condition names no standard quantity from the list above; you must build the slope relation from the two-point formula yourself. The reward (recognising the answer as a circle and checking against theory) is the kind of closure Advanced rewards.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the curve through ${pt('1', '2')} whose subtangent at every point equals the abscissa.`,
            a: `${fr(y, m)} = ${x} gives ${DYDX} = ${YX}, so ${y} = 2${x}.`,
          },
          {
            q: `Find the curve through ${pt('2', '3')} whose subnormal is constantly 4.`,
            a: `${I('ym')} = 4 gives ${y}${DY} = 4${DX}, so ${Y2} = 8${x} − 7 (check: 9 = 16 − 7).`,
          },
          {
            q: `Show that a curve with constant subtangent ${rel(a, '>', '0')} is an exponential curve, and find it.`,
            a: `${fr(y, m)} = ${a} gives ${fr(`d${y}`, y)} = ${fr(`d${x}`, a)}, so ${y} = ${C}${ex(`${x}/${a}`)}.`,
          },
          {
            q: `Find the curve through ${pt('2', '1')} whose normals all pass through ${pt('1', '0')}.`,
            a: `As in this topic’s second worked example: ${X2Y2} = 2${x} + 1.`,
          },
          {
            q: `Find the curve through ${pt('1', '1')} whose tangent at every point cuts off equal nonzero intercepts on the axes.`,
            a: `If the tangent cuts off intercepts ${a} and ${b}, its slope is −${fr(b, a)}; equal intercepts force −${fr(b, a)} = −1, so ${DYDX} = −1 and ${x} + ${y} = 2.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic D · pp. 628–630 ────────────────
  {
    n: 'D',
    title: 'Second-Order Equations by Lowering the Order',
    extra: true,
    kalam: 'Diagnosis takes five seconds: look at what the equation omits.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Strictly beyond the board syllabus, and said so up front. JEE Advanced, however, can set an order-2 equation that contains no ${x}, or no ${y}, or is secretly first-order in ${YP}, and expects the substitution ${p} = ${DYDX} to collapse it, although its syllabus lists only first-order methods as far as we know and Additional topic P’s count of past papers shows no such cluster. Treat this as JEE-only enrichment built entirely on tools from Topics 03 and 04.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Put ${p} = ${DYDX} throughout. Two cases exhaust the examinable supply.`,
      },
      {
        t: 'p',
        html: `<b>Case 1: ${y} absent.</b> The equation reads ${YPP} = ${f}(${x},${NB}${YP}). Since ${YPP} = ${DPDX}, it becomes a first-order equation in ${p} and ${x}:<br>${DPDX} = ${f}(${x},${NB}${p}).<br>Solve it by any Topic 03/Topic 04 method to get ${p} = ${g}(${x}), then integrate once more: ${y} = ∫${g}${DX} + ${C2}. Two integrations, two constants: matching the order.`,
      },
      {
        t: 'p',
        html: `<b>Case 2: ${x} absent.</b> The equation reads ${YPP} = ${f}(${y},${NB}${YP}). Here ${p} cannot be differentiated with respect to ${x} directly without dragging ${x} back in, so switch the roles via the chain rule:<br>${YPP} = ${DPDX}<br>= ${DPDY} · ${DYDX} = ${p}${DPDY}.<br>The equation becomes ${p}${DPDY} = ${f}(${y},${NB}${p}): first order in ${p} and ${y}. Solve for ${p} as a function of ${y}, then finish with ${DYDX} = ${p}(${y}), which is separable.`,
      },
      {
        t: 'p',
        html: `Diagnosis takes five seconds: look at what the equation omits. Omits ${y}: Case 1. Omits ${x}: Case 2. Omits neither: look for a perfect derivative before giving up (the trick of practice exercises 4 and 5 below, where it is also the quickest route although a variable is missing).`,
      },
      {
        t: 'formula',
        kicker: 'Lowering the order: y absent',
        main: `${YPP} = ${f}(${x},${NB}${YP}), ${p} = ${DYDX}:<br>${DPDX} = ${f}(${x},${NB}${p})`,
        legend: [`${p} = ${DYDX}, a function of ${x}`, `${y} = ∫${p}${DX} + ${C2} once ${p} is found`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Lowering the order: x absent',
        main: `${YPP} = ${f}(${y},${NB}${YP}), ${YPP} = ${p}${DPDY}:<br>${p}${DPDY} = ${f}(${y},${NB}${p})`,
        legend: [`${p} = ${DYDX}, treated as a function of ${y}`, `${DYDX} = ${p}(${y}) finishes it, separable`],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Solve ${y}${YPP} = ${YP2}.`,
        steps: [
          `${x} is absent: Case 2. Substitute ${YPP} = ${p}${DPDY}:<br>${I('yp')}${DPDY} = ${sq(p)}.`,
          `If ${p} = 0 identically then ${y} is constant, which the final answer will include. Otherwise divide by ${p}:<br>${y}${DPDY} = ${p} ⟹ ${fr(`d${p}`, p)} = ${fr(`d${y}`, y)}<br>⟹ ${p} = ${A}${y}.`,
          `Now ${DYDX} = ${A}${y} is separable:<br>${fr(`d${y}`, y)} = ${A}${DX} ⟹ ${y} = ${B}${EAX}.`,
          `<b>Check.</b> ${YP} = ${I('AB')}${EAX}, ${YPP} = ${sq(A)}${B}${EAX}, so<br>${y}${YPP} = (${B}${EAX})(${sq(A)}${B}${EAX})<br>= ${sq(A)}${sq(B)}${E2AX}<br>and ${YP2} = ${sq(A)}${sq(B)}${E2AX}: equal. The two constants ${A}, ${B} match the order 2, and ${rel(A, '=', '0')} recovers the lost constant solutions.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Solve ${YPP} = ${YP} + ${x}.`,
        steps: [
          `Both ${x} and ${YP} appear and ${y} is absent: Case 1. With ${p} = ${YP}:<br>${DPDX} − ${p} = ${x},<br>linear in ${p} with IF = ${EMX}.`,
          `Then<br>(${p}${EMX})′ = ${x}${EMX}.`,
          `Integrating the right side by parts (${u} = ${x}, d${v} = ${EMX}${DX}):<br>∫${x}${EMX}${DX} = −${x}${EMX} − ${EMX},<br>so<br>${p}${EMX} = −(${x} + 1)${EMX} + ${C1}<br>⟹ ${p} = ${C1}${ex(x)} − ${x} − 1.`,
          `One more integration:<br>${y} = ${C1}${ex(x)} − ${fr(X2, '2')} − ${x} + ${C2}.`,
          `<b>Why it is Advanced-level.</b> The equation looks like nothing in the chapter: second order, with an ${x} on the right. The entire difficulty is the refusal to panic: one glance shows ${y} missing, one substitution drops it to a Topic 04 linear equation, and the rest is bookkeeping.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Solve ${YPP} = 1 + ${YP2}.`,
            a: `Case 1: ${p}′ = 1 + ${sq(p)} gives ${ATAN}${NB}${p} = ${x} + ${C1}, so ${y} = −ln${NB}${abs(`cos(${x} + ${C1})`)} + ${C2}.`,
          },
          {
            q: `Solve ${y}${YPP} = 2${YP2}.`,
            a: `Case 2: ${fr(`d${p}`, p)} = 2${fr(`d${y}`, y)} gives ${p} = ${A}${Y2}, then −${fr('1', y)} = ${A}${x} + ${B}, i.e. ${y} = −${fr('1', `${A}${x} + ${B}`)}.`,
          },
          {
            q: `Solve ${YPP} = ${YP} given ${y}(0) = 0 and ${YP}(0) = 1.`,
            a: `${p} = ${C1}${ex(x)} with ${C1} = 1, then ${y} = ${ex(x)} + ${C2} with ${C2} = −1: ${y} = ${ex(x)} − 1.`,
          },
          {
            q: `Solve ${x}${YPP} + ${YP} = 0 by spotting a perfect derivative.`,
            a: `${x}${YPP} + ${YP} = (${x}${YP})′ = 0, so ${x}${YP} = ${C1} and ${y} = ${C1}${NB}ln${NB}${abs(x)} + ${C2}.`,
          },
          {
            q: `Solve ${y}${YPP} + ${YP2} = 0.`,
            a: `(${y}${YP})′ = 0 gives ${y}${YP} = ${C1}, then ${Y2} = 2${C1}${x} + ${C2}: a family of parabolas, mirroring the constant-subnormal result of Topic 05.`,
          },
        ],
      },

      { t: 'part', title: 'Closing note' },
      {
        t: 'p',
        html: 'Every additional topic above ends at the same place the chapter does: a separable integral or one pass of the integrating factor. What separates the top band of candidates is not a larger toolbox but faster diagnosis: exact or not, Bernoulli or linear, which quantity is missing, which geometric quantity is named. Drill the diagnosis, and the integration takes care of itself.',
      },
    ],
  },
];
