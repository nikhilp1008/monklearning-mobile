import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7 Integrals, Topics 01–03, pp. 448–468 of the Class 12 Mathematics
 * Master Reference (October 2026 edition), word for word. The book prints its
 * nine subtopics in the order 01, 04, 05, 06, 07, 08, 02, 09, 03; the app
 * numbers them by position (decision 28), so:
 *   Topic 01 = book Subtopic 01 "Foundations of Integration: Indefinite
 *              Integrals, Properties & Standard Forms" (pp. 448–457),
 *   Topic 02 = book Subtopic 04 "Integration by Substitution" (pp. 458–463),
 *   Topic 03 = book Subtopic 05 "Integration using Trigonometric Identities"
 *              (pp. 464–468).
 * The chapter's title and contents (pp. 444–447) are not copied. Each topic
 * opens with its "Exam Relevance:" box as a part of its own, then is split at
 * its Sections 1 to 8; the "Cheat Sheet Box" is the part "Cheat sheet".
 * Cross-references to the book's subtopic numbers are mapped (book 09 → Topic
 * 08). Figure 7.1 (caption p. 449, drawn p. 450) is placed where its caption
 * stands, after the "family of curves" paragraph of Topic 01. No unnumbered
 * drawings. ∫ upright, d upright and glued to its variable, + C italic, e
 * upright, csc as printed. Every fraction is stacked (<frac>); a fraction in
 * a fraction's denominator is written with ÷; no em dashes.
 * Review rm127a (decision 30): the standard-integral tables of Topics 01 and 02
 * stay as printed and also get formula cards (four cards added).
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner after an opening modulus bar, so the bar never ends a line. */
const WJ = '\u2060';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const a = I('a');
const k = I('k');
const m = I('m');
const n = I('n');
const t = I('t');
const u = I('u');
const x = I('x');
const y = I('y');
const A = I('A');
const B = I('B');
const C = I('C');
const F = I('F');
const G = I('G');
const f = I('f');
const g = I('g');

/** Differentials: an upright d glued to the integrand. */
const DX = `${NB}d${x}`;
const DU = `${NB}d${u}`;
const DT = `${NB}d${t}`;
/** d/dx, with an upright d. */
const D = fr('d', `d${x}`);
const PLUS_C = ` + ${C}`;

const of = (fn: string, s: string) => `${fn}(${s})`;
const abs = (s: string) => `|${WJ}${s}|`;
/** ln|…|, as the book prints it. */
const LN = (s: string) => `ln${abs(s)}`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const cube = (s: string) => `${s}<sup>3</sup>`;
/** A trigonometric function of an argument, with an optional power: sin² x. */
const T = (fn: string, arg: string = x, pow = '') => `${fn}${pow ? `<sup>${pow}</sup>` : ''}${NB}${arg}`;
const rel = (l: string, op: string, r: string) => `${l}${NB}${op}${NB}${r}`;

const fx = of(f, x);
const gx = of(g, x);
const Fx = of(F, x);
const Gx = of(G, x);
const fpx = `${f}′(${x})`;
const gpx = `${g}′(${x})`;
const Fpx = `${F}′(${x})`;
const Gpx = `${G}′(${x})`;
const X2 = sq(x);
const X3 = cube(x);
const XN = `${x}<sup>${n}</sup>`;
const XN1 = `${x}<sup>${n}+1</sup>`;
const LNX = LN(x);
const SINX = T('sin');
const COSX = T('cos');
const TANX = T('tan');
const COTX = T('cot');
const SECX = T('sec');
const CSCX = T('csc');
const SIN2X = T('sin', x, '2');
const COS2X = T('cos', x, '2');
const SEC2X = T('sec', x, '2');
const CSC2X = T('csc', x, '2');
const TAN2X = T('tan', x, '2');
const SIN_2X = T('sin', `2${x}`);
const COS_2X = T('cos', `2${x}`);
const INV = (fn: string, arg: string = x) => `${fn}<sup>−1</sup>${NB}${arg}`;
const ROOTX = `√${x}`;
const HALF = fr('1', '2');
const PI2 = fr('π', '2');
/** ∫ from 0 to π/2 (the slash stays inside the raised limit). */
const INT_0_PI2 = '∫<sub>0</sub><sup>π/2</sup>';
/** The f′/f pattern, stacked. */
const FPF = `∫${fr(`${f}′`, f)}`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · book Subtopic 01 · pp. 448–457 ────────────────
  {
    n: '01',
    title: 'Foundations of Integration: Indefinite Integrals, Properties & Standard Forms',
    kalam: 'Integration takes a rate of change and tries to hand you back the original function.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the gateway to all of calculus integration and shows up everywhere. CBSE Boards regularly ask 1–2 mark direct integrals and 1-mark “value of ${C}” / property questions ${ESTIMATE}. JEE Main and CUET lean on the standard-form table for fast 4-mark single-correct problems, and JEE Advanced uses the inverse-of-derivative idea inside larger multi-concept questions. Master this and every later method (substitution, by parts, partial fractions) becomes mechanical.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Imagine you are watching the speedometer of a Mumbai local train, but you forgot to note where the train started. The speedometer tells you the rate at which distance is changing at every instant: that is exactly what a derivative is. Integration asks the reverse, and much harder, question: given the speed at every moment, can you recover the distance travelled?',
      },
      {
        t: 'p',
        html: 'That reverse question is the heart of integration. Differentiation takes a function and hands you its rate of change. Integration takes a rate of change and tries to hand you back the original function. Because of this, the indefinite integral is often called the <b>anti-derivative</b>: it literally “un-does” a derivative.',
      },
      {
        t: 'p',
        html: `Here is the catch, and it is the single most important idea in this entire topic. When you differentiate, every constant disappears: the derivative of ${X2} + 7 is 2${x}, and so is the derivative of ${X2} − 100, and of ${X2} alone. So when you run the process backwards and integrate 2${x}, you have no way of knowing whether the original constant was 7, −100, or 0. You have lost that information forever. To honestly admit this, we tack on an unknown constant ${C}, called the <b>constant of integration</b>:<br>∫2${x}${DX} = ${X2}${PLUS_C}`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Differentiation is like flattening a tall stack of identical books and reading only the title printed on the spine. Every book in the stack (sitting at a different height ${C}) has the same spine. When you integrate, you can read the spine perfectly, but you cannot tell which exact height the book was sitting at. So you write +${NB}${C} to mean “any book in this stack.” Each value of ${C} is a different but equally valid answer.`,
      },
      {
        t: 'p',
        html: `This is also why the answer to an indefinite integral is never a single curve: it is an entire <b>family of curves</b>, all parallel, stacked vertically. If ∫${fx}${DX} = ${Fx}${PLUS_C}, then drawing ${Fx}, ${Fx} + 1, ${Fx} + 2 and so on gives you a whole ladder of curves. Pick any vertical line ${rel(x, '=', a)}: it cuts every curve in the family, and remarkably, the tangent at each of those intersection points has the same slope. That makes sense: the slope is ${of(f, a)} for all of them, because shifting a curve up or down never changes its steepness.`,
      },
      { t: 'fig', id: 'm12-07-fig-7.1' },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b> A few honest warnings before we move on:<br>• An anti-derivative exists nicely only where the function is reasonably well-behaved (continuous on the interval of interest). Integration is not guaranteed to produce a neat formula: many perfectly continuous functions, like e<sup>−${X2}</sup>, have anti-derivatives that simply cannot be written using elementary functions.<br>• The “+${NB}${C}” is non-negotiable for an indefinite integral. Dropping it is not a small slip: it changes the answer from “a family of functions” to “one specific function,” which is mathematically false.<br>• The reverse-engineering picture (integration undoes differentiation) is exact, but only up to that constant. The two operations are inverses of each other modulo a constant, never as perfect one-to-one inverses.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: `<b>Definition (Indefinite Integral).</b> If ${D}${NB}${Fx} = ${fx}, then ${Fx} is an anti-derivative of ${fx}, and we write:`,
      },
      {
        t: 'formula',
        kicker: 'Indefinite integral',
        main: `∫${fx}${DX} = ${Fx}${PLUS_C}`,
        legend: [
          `${fx} = the integrand`,
          `${x} = the variable of integration`,
          `${Fx} = an anti-derivative of ${fx}`,
          `${C} = the constant of integration (any real number)`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `Here ${fx} is the <b>integrand</b>, ${x} is the <b>variable of integration</b>, d${x} specifies which variable we are integrating with respect to, and ${C} is the <b>constant of integration</b> (any real number). The whole symbol ∫(⋯)${DX} is read “the integral of (⋯) with respect to ${x}.”`,
      },
      {
        t: 'formula',
        kicker: 'The two operations are mutually inverse',
        main: `${D}(∫${fx}${DX}) = ${fx}<br>∫${fpx}${DX} = ${fx}${PLUS_C}`,
        legend: [`${fpx} = the derivative of ${fx}`, `${C} = the constant of integration`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Linearity properties (the workhorses)',
        main: `∫[${fx} + ${gx}]${DX} = ∫${fx}${DX} + ∫${gx}${DX}<br>∫${k}${NB}${fx}${DX} = ${k}∫${fx}${DX}`,
        legend: [`${fx}, ${gx} = functions of ${x}`, `${k} = a constant`],
        note: null,
      },
      {
        t: 'p',
        html: 'Two integrals with the same derivative describe the same family of curves, so they are treated as equivalent.',
      },
      {
        t: 'p',
        html: `<b>Standard integral table (memorise cold).</b> Every variable below is a real number; ${a} is a non-zero constant; ${C} is the constant of integration.`,
      },
      {
        t: 'table',
        title: null,
        head: ['#', 'Integral', 'Result'],
        rows: [
          ['1', `∫${XN}${DX}`, `${fr(XN1, `${n} + 1`)}${PLUS_C},${NB}${NB}${rel(n, '≠', '−1')}`],
          ['2', `∫${fr('1', x)}${DX}`, `${LNX}${PLUS_C}`],
          ['3', `∫e<sup>${x}</sup>${DX}`, `e<sup>${x}</sup>${PLUS_C}`],
          ['4', `∫${a}<sup>${x}</sup>${DX}`, `${fr(`${a}<sup>${x}</sup>`, `ln${NB}${a}`)}${PLUS_C},${NB}${NB}${rel(a, '>', '0')}, ${rel(a, '≠', '1')}`],
          ['5', `∫${COSX}${DX}`, `${SINX}${PLUS_C}`],
          ['6', `∫${SINX}${DX}`, `−${COSX}${PLUS_C}`],
          ['7', `∫${SEC2X}${DX}`, `${TANX}${PLUS_C}`],
          ['8', `∫${CSC2X}${DX}`, `−${COTX}${PLUS_C}`],
          ['9', `∫${SECX} ${TANX}${DX}`, `${SECX}${PLUS_C}`],
          ['10', `∫${CSCX} ${COTX}${DX}`, `−${CSCX}${PLUS_C}`],
          ['11', `∫${fr('1', `√(1 − ${X2})`)}${DX}`, `${INV('sin')}${PLUS_C}`],
          ['12', `∫${fr('1', `1 + ${X2}`)}${DX}`, `${INV('tan')}${PLUS_C}`],
        ],
      },
      {
        t: 'p',
        html: 'A clean way to keep the table honest: <b>differentiate the answer.</b> If differentiating the right column does not return the integrand, the row is wrong. This single check makes the entire table self-verifying.',
      },
      {
        t: 'formula',
        kicker: 'Standard integrals: powers and exponentials',
        main: `∫${XN}${DX} = ${fr(XN1, `${n} + 1`)}${PLUS_C}${NB}${NB}(${rel(n, '≠', '−1')})<br>∫${fr('1', x)}${DX} = ${LNX}${PLUS_C}<br>∫e<sup>${x}</sup>${DX} = e<sup>${x}</sup>${PLUS_C}<br>∫${a}<sup>${x}</sup>${DX} = ${fr(`${a}<sup>${x}</sup>`, `ln${NB}${a}`)}${PLUS_C}`,
        legend: [`${n} = a real constant`, `${a} = a positive constant other than 1`, `${C} = the constant of integration`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Standard integrals: trigonometric',
        main: `∫${COSX}${DX} = ${SINX}${PLUS_C}<br>∫${SINX}${DX} = −${COSX}${PLUS_C}<br>∫${SEC2X}${DX} = ${TANX}${PLUS_C}<br>∫${CSC2X}${DX} = −${COTX}${PLUS_C}<br>∫${SECX} ${TANX}${DX} = ${SECX}${PLUS_C}<br>∫${CSCX} ${COTX}${DX} = −${CSCX}${PLUS_C}`,
        legend: [`${C} = the constant of integration`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Standard integrals: inverse trigonometric',
        main: `∫${fr('1', `√(1 − ${X2})`)}${DX} = ${INV('sin')}${PLUS_C}<br>∫${fr('1', `1 + ${X2}`)}${DX} = ${INV('tan')}${PLUS_C}`,
        legend: [`${C} = the constant of integration`, `The first line holds for ${rel(abs(x), '<', '1')}`],
        note: null,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no single “derivation” of integration: it is defined as the reverse of differentiation. So the rigour here lives in (a) proving the properties and (b) the procedure for direct integration. Both matter for Boards.',
      },
      {
        t: 'p',
        html: `<b>Proof of the power rule for integration (${rel(n, '≠', '−1')}).</b> We claim ∫${XN}${DX} = ${fr(XN1, `${n} + 1`)}${PLUS_C}. Rather than “guess,” reason from the definition: an anti-derivative of ${XN} is any function whose derivative is ${XN}. Differentiate the proposed answer:<br>${D}(${fr(XN1, `${n} + 1`)}${PLUS_C})<br>= ${fr('1', `${n} + 1`)} · (${n} + 1)${x}<sup>(${n}+1)−1</sup> + 0 = ${XN}`,
      },
      {
        t: 'p',
        html: `Since the derivative returns exactly the integrand, the proposed function is an anti-derivative, which proves the rule. The condition ${rel(n, '≠', '−1')} is essential: if ${rel(n, '=', '−1')} the denominator ${n} + 1 is zero and the formula is meaningless; that case is handled separately by row 2 of the table.`,
      },
      {
        t: 'p',
        html: `<b>Proof of linearity (sum rule).</b> Let ∫${fx}${DX} = ${Fx} and ∫${gx}${DX} = ${Gx}, meaning ${Fpx} = ${fx} and ${Gpx} = ${gx}. By the sum rule for derivatives,<br>${D}[${Fx} + ${Gx}] = ${Fpx} + ${Gpx} = ${fx} + ${gx}`,
      },
      {
        t: 'p',
        html: `So ${Fx} + ${Gx} is an anti-derivative of ${fx} + ${gx}, which is precisely the statement ∫[${f} + ${g}]${DX} = ∫${f}${DX} + ∫${g}${DX}. The constant-multiple rule follows identically from ${D}[${k}${Fx}] = ${k}${Fpx} = ${k}${fx}.`,
      },
      {
        t: 'p',
        html: 'This is the “method” of this topic: solving an integral by manipulating it into table entries, without substitution or by-parts machinery.',
      },
      {
        t: 'proc',
        title: 'Procedure for direct (standard-form) integration',
        steps: [
          `<b>Simplify first, integrate second.</b> Expand brackets, split fractions term by term, cancel, or rewrite roots as powers (${ROOTX} = ${x}<sup>1/2</sup>, ${fr('1', X3)} = ${x}<sup>−3</sup>). Algebra is cheaper than calculus.`,
          '<b>Split the integral using linearity.</b> Break a sum into separate integrals and pull out constant multipliers.',
          `<b>Use trigonometric identities to reduce to standard forms.</b> For example, ${SIN2X} = ${fr(`1 − ${COS_2X}`, '2')} or 2${NB}sin${NB}${A}${NB}cos${NB}${B} = sin(${A} + ${B}) + sin(${A} − ${B}) turn awkward products into integrable sums.`,
          '<b>Apply the standard table</b> term by term.',
          `<b>Add a single ${C}</b> at the very end (not one per term: all the separate constants merge into one).`,
          '<b>Verify by differentiating</b> your answer back to the integrand.',
        ],
      },
      {
        t: 'p',
        html: `The logic of step 5 is worth stressing: if you integrate three terms you might be tempted to write ${C}<sub>1</sub> + ${C}<sub>2</sub> + ${C}<sub>3</sub>, but the sum of arbitrary constants is just another arbitrary constant, so a single ${C} captures the whole family.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Evaluate ∫(3${X2} + ${fr('4', x)} − 5${NB}${SEC2X})${DX}.`,
        steps: [
          `Split using linearity and pull out constants:<br>∫3${X2}${DX} + ∫${fr('4', x)}${DX} − ∫5${NB}${SEC2X}${DX}<br>= 3∫${X2}${DX} + 4∫${fr('1', x)}${DX} − 5∫${SEC2X}${DX}`,
          `Apply the table (rows 1, 2, 7):<br>= 3 · ${fr(X3, '3')} + 4${NB}${LNX} − 5${NB}${TANX}${PLUS_C}<br>= ${X3} + 4${NB}${LNX} − 5${NB}${TANX}${PLUS_C}`,
          `(Notice the single ${C}, and the modulus inside the log.)`,
        ],
        ans: `${X3} + 4${NB}${LNX} − 5${NB}${TANX}${PLUS_C}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Speed Trap',
        q: `Evaluate ∫${fr(`${X2} + 2${x} + 5`, x)}${DX} in under 30 seconds.`,
        steps: [
          `The trap is reaching for a substitution. Don’t: split the fraction term by term first:<br>${fr(`${X2} + 2${x} + 5`, x)} = ${x} + 2 + ${fr('5', x)}`,
          `Now every term is a standard form:<br>∫(${x} + 2 + ${fr('5', x)})${DX} = ${fr(X2, '2')} + 2${x} + 5${NB}${LNX}${PLUS_C}`,
          '<b>Speed lesson:</b> whenever a polynomial sits over a single monomial, divide through first. You will save a minute and avoid a needless substitution.',
        ],
        ans: `${fr(X2, '2')} + 2${x} + 5${NB}${LNX}${PLUS_C}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level, multi-concept: trig identity + standard forms',
        q: `Evaluate ∫${fr(COS_2X, `${COS2X} ${SIN2X}`)}${DX}.`,
        steps: [
          `Two concepts collide here: a double-angle identity and term-by-term integration. Use ${COS_2X} = ${COS2X} − ${SIN2X} and split over the denominator:<br>${fr(COS_2X, `${COS2X} ${SIN2X}`)}<br>= ${fr(`${COS2X} − ${SIN2X}`, `${COS2X} ${SIN2X}`)}<br>= ${fr(COS2X, `${COS2X} ${SIN2X}`)} − ${fr(SIN2X, `${COS2X} ${SIN2X}`)}<br>= ${fr('1', SIN2X)} − ${fr('1', COS2X)}`,
          `Recognise these as ${CSC2X} and ${SEC2X} (rows 8 and 7):<br>∫(${CSC2X} − ${SEC2X})${DX} = −${COTX} − ${TANX}${PLUS_C}`,
          `<b>Why it works:</b> the entire difficulty was algebraic: once ${COS_2X} was rewritten and the fraction split, no calculus method beyond the table was needed.`,
        ],
        ans: `−${COTX} − ${TANX}${PLUS_C}`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `A function ${f} satisfies ${fpx} = ${fr(`(${x} + 1)(${x} − 1)`, x)} for ${rel(x, '>', '0')}, and its graph passes through the point (1,${NB}${fr('3', '2')}). Find ${fx} and then determine ${f}(e).`,
        steps: [
          `This problem hides integration inside a “recover the function from its slope” question, and the passing-through condition is what pins down ${C}. First simplify the derivative:<br>${fpx} = ${fr(`${X2} − 1`, x)} = ${x} − ${fr('1', x)}`,
          `Integrate to recover the family of possible functions:<br>${fx} = ∫(${x} − ${fr('1', x)})${DX} = ${fr(X2, '2')} − ${LNX}${PLUS_C}`,
          `Now use the point (1,${NB}${fr('3', '2')}) to fix ${C}; this is the step that selects one curve from the family:<br>${fr('3', '2')} = ${fr('1<sup>2</sup>', '2')} − ln(1)${PLUS_C} = ${HALF} − 0${PLUS_C} ⇒ ${rel(C, '=', '1')}`,
          `So ${fx} = ${fr(X2, '2')} − ln${NB}${x} + 1 (we may drop the modulus since ${rel(x, '>', '0')}). Finally,<br>${f}(e) = ${fr('e<sup>2</sup>', '2')} − ln${NB}e + 1 = ${fr('e<sup>2</sup>', '2')} − 1 + 1 = ${fr('e<sup>2</sup>', '2')}`,
          '<b>Deep idea:</b> an initial/boundary condition converts the indefinite integral (a whole family) into a unique function: this is the conceptual bridge to differential equations later in the year.',
        ],
        ans: `${fx} = ${fr(X2, '2')} − ln${NB}${x} + 1, and ${f}(e) = ${fr('e<sup>2</sup>', '2')}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Evaluate ∫(2${ROOTX} + ${fr('3', X2)} − ${COSX})${DX}.`,
            a: `${fr('4', '3')}${x}<sup>3/2</sup> − ${fr('3', x)} − ${SINX}${PLUS_C}`,
          },
          {
            q: `<b>[CUET]</b> Evaluate ∫${fr(`${x}<sup>4</sup> − 1`, `${X2} − 1`)}${DX}. (Hint: factor first.)`,
            a: `${fr(X3, '3')} + ${x}${PLUS_C}`,
          },
          {
            q: `<b>[JEE Main]</b> Evaluate ∫${fr(`1 + ${COS_2X}`, '2')}${DX}.`,
            a: `${fr(x, '2')} + ${fr(SIN_2X, '4')}${PLUS_C}`,
          },
          {
            q: `<b>[JEE Main]</b> Evaluate ∫${fr(`2${X3} − 3${x} + 7`, X2)}${DX}.`,
            a: `${X2} − 3${NB}${LNX} − ${fr('7', x)}${PLUS_C}`,
          },
          {
            q: `<b>[JEE Advanced]</b> The slope of the tangent to a curve at any point (${x},${NB}${y}) is ${fr(`3${X2} + 1`, x)} for ${rel(x, '>', '0')}, and the curve passes through (1,${NB}4). Find the equation of the curve and evaluate ${y} at ${rel(x, '=', 'e')}.`,
            a: `${y} = ${fr(`3${X2}`, '2')} + ln${NB}${x} + ${fr('5', '2')}, and at ${rel(x, '=', 'e')}, ${y} = ${fr('3e<sup>2</sup>', '2')}${NB}+${NB}${fr('7', '2')}`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `∫(${SINX} + ${fr('1', x)})${DX} equals:`,
        opts: [
          {
            label: `${COSX} + ${LNX}${PLUS_C}`,
            nudge: `<b>(a)</b> flips the sign of the sin integral: the classic confusion between ∫${SINX}${DX} = −${COSX} and ∫${COSX}${DX} = +${SINX}.`,
          },
          { label: `−${COSX} + ${LNX}${PLUS_C}`, nudge: null },
          {
            label: `−${COSX} + ${fr('1', X2)}${PLUS_C}`,
            nudge: `<b>(c)</b> integrates ${fr('1', x)} as if it were ${x}<sup>−1</sup> → ${fr(`${x}<sup>0</sup>`, '0')} and “fixes” it to ${fr('1', X2)}: applying the power rule at the forbidden value ${rel(n, '=', '−1')}.`,
          },
          { label: `${COSX} − ${LNX}${PLUS_C}`, nudge: '<b>(d)</b> gets both signs wrong, a double slip.' },
        ],
        correct: 1,
        solution: `∫${SINX}${DX} = −${COSX} (row 6) and ∫${fr('1', x)}${DX} = ${LNX} (row 2).`,
      },
      {
        t: 'mcq',
        q: `If ${Fx} is an anti-derivative of ${fx}, which statement is <b>always</b> true?`,
        opts: [
          {
            label: `${Fx} is unique`,
            nudge: '<b>(a)</b> is false: there are infinitely many anti-derivatives differing by a constant.',
          },
          { label: `${Fpx} = ${fx}`, nudge: null },
          { label: `${F}(0) = 0`, nudge: '<b>(c)</b> assumes a specific value the definition never imposes.' },
          {
            label: `∫${fx}${DX} = ${Fx} with no constant`,
            nudge: `<b>(d)</b> drops the constant of integration; the correct statement is ∫${fx}${DX} = ${Fx}${PLUS_C}.`,
          },
        ],
        correct: 1,
        solution: 'By definition, an anti-derivative has derivative equal to the integrand.',
      },
      {
        t: 'mcq',
        q: `∫${fr(`${X3} + 3${X2} + 3${x} + 1`, `${x} + 1`)}${DX} equals:`,
        opts: [
          { label: `${fr(`(${x} + 1)<sup>3</sup>`, '3')}${PLUS_C}`, nudge: null },
          { label: `${fr(X3, '3')}${PLUS_C}`, nudge: '<b>(b)</b> integrates only the leading term, ignoring the rest.' },
          {
            label: `(${x} + 1)<sup>2</sup>${PLUS_C}`,
            nudge: `<b>(c)</b> “integrates” (${x} + 1)<sup>2</sup> by inspection as if the answer were the base squared, confusing differentiation and integration directions.`,
          },
          {
            label: `${fr(`(${x} + 1)<sup>2</sup>`, '2')}${PLUS_C}`,
            nudge: `<b>(d)</b> integrates (${x} + 1)<sup>2</sup> as if it were (${x} + 1)<sup>1</sup>: power-rule index error.`,
          },
        ],
        correct: 0,
        solution: `Recognise the numerator as (${x} + 1)<sup>3</sup>, so the integrand simplifies to (${x} + 1)<sup>2</sup> = ${X2} + 2${x} + 1. Integrating term by term gives ${fr(X3, '3')} + ${X2} + ${x}${PLUS_C}, which equals ${fr(`(${x} + 1)<sup>3</sup>`, '3')}${PLUS_C} (the difference is absorbed into ${C}).`,
      },
      {
        t: 'mcq',
        q: `The family of curves represented by ∫2${x}${DX} has the property that, along any vertical line ${rel(x, '=', a)}, the tangents to all members are:`,
        opts: [
          {
            label: 'perpendicular',
            nudge: '<b>(a)</b> has no basis: equal slopes make the tangents parallel, never perpendicular.',
          },
          { label: 'parallel', nudge: null },
          {
            label: 'coincident',
            nudge: '<b>(c)</b> coincident would require the curves to be identical, but they are vertically shifted.',
          },
          {
            label: 'of slope zero',
            nudge: `<b>(d)</b> slope zero only at ${rel(a, '=', '0')}, not in general: a trap for students who fixate on a single point.`,
          },
        ],
        correct: 1,
        solution: `The integral is ${X2}${PLUS_C}; the slope at ${rel(x, '=', a)} is 2${a} for every member regardless of ${C}, so all tangents along ${rel(x, '=', a)} are parallel.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Forgetting +${NB}${C}.</b> The most penalised error in Boards. An indefinite integral without its constant is incomplete and loses marks even when the function part is perfect. Train the reflex: write +${NB}${C} the instant you finish.`,
          `<b>Applying the power rule at ${rel(n, '=', '−1')}.</b> Students mechanically write ∫${fr('1', x)}${DX} = ${fr(`${x}<sup>0</sup>`, '0')}. There is no such thing: ∫${fr('1', x)}${DX} = ${LNX}${PLUS_C} is a separate, memorised result.`,
          `<b>Dropping the modulus in ${LNX}.</b> The integrand ${fr('1', x)} is defined for negative ${x} too, so the modulus is mathematically required, not decoration.`,
          `<b>Sign slips in trig integrals.</b> The pair that trips everyone: ∫${SINX}${DX} = −${COSX} but ∫${COSX}${DX} = +${SINX}. The minus lives with the sine integral.`,
          `<b>Assuming ∫(${f} · ${g}) = ∫${f} · ∫${g}.</b> Linearity covers sums and constant multiples, never products or quotients. Those need their own methods (later topics).`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (the universal safety net):</b> Differentiate your answer. Integration is one of the easiest operations to self-check: run the reverse process. If ${D}(your answer) ≠ integrand, you have a mistake: find it before the examiner does. This one habit eliminates the majority of sign and coefficient errors.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Definition</b>',
            note: `${D}${NB}${Fx} = ${fx} ⟺ ∫${fx}${DX} = ${Fx}${PLUS_C}. Integration = anti-differentiation, always “+${NB}${C}”.`,
          },
          {
            f: '<b>Geometry</b>',
            note: 'the answer is a family of parallel curves; tangents along any vertical line share the same slope.',
          },
          {
            f: '<b>Power rule</b>',
            note: `∫${XN}${DX} = ${fr(XN1, `${n} + 1`)}${PLUS_C} for ${rel(n, '≠', '−1')}; and ∫${fr('1', x)}${DX} = ${LNX}${PLUS_C}.`,
          },
          {
            f: '<b>Linearity</b>',
            note: `∫(${k}<sub>1</sub>${f} ± ${k}<sub>2</sub>${g})${DX} = ${k}<sub>1</sub>∫${f}${DX} ± ${k}<sub>2</sub>∫${g}${DX}. Works for sums/constant multiples only: <b>never products or quotients.</b>`,
          },
          { f: '<b>Trig core</b>', note: 'sin → −cos, cos → +sin, sec<sup>2</sup> → tan, csc<sup>2</sup> → −cot.' },
          {
            f: '<b>Inverse-trig core</b>',
            note: `${fr('1', `1 + ${X2}`)} → ${INV('tan')}, ${fr('1', `√(1 − ${X2})`)} → ${INV('sin')}.`,
          },
          {
            f: '<b>Strategy</b>',
            note: `Simplify → Split → Identify standard form → integrate → one ${C} → differentiate to verify.`,
          },
        ],
        aids: [
          '<b>“Co goes positive”:</b> the <b>co</b>sine integral keeps a <b>plus</b> sign (∫cos = +sin); the plain sine integral carries the minus.',
          `<b>“One over ${x} is the lonely log”:</b> ${fr('1', x)} never obeys the power rule; it always integrates to ${LNX}.`,
          `<b>“No ${C}, no marks.”</b>`,
        ],
      },
    ],
  },

  // ──────────────── Topic 02 · book Subtopic 04 · pp. 458–463 ────────────────
  {
    n: '02',
    title: 'Integration by Substitution',
    kalam: 'Substitution is the trick that reshapes an unfamiliar integral into a familiar one by temporarily renaming a chunk of it.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Substitution is the most-used integration technique in the entire chapter: almost every non-trivial integral starts here. CBSE Boards carry 2–4 marks of direct substitution every year ${ESTIMATE}; JEE Main and CUET fold it into nearly every integral ${ESTIMATE}; JEE Advanced disguises it inside harder problems where spotting the right substitution is the whole battle.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `In Topic 01 we could only integrate things that already matched a standard form. But what about ∫2${x}${NB}cos(${X2})${DX}? There’s no table entry for cos(${X2}). Substitution is the trick that reshapes an unfamiliar integral into a familiar one by temporarily renaming a chunk of it.`,
      },
      {
        t: 'p',
        html: `The idea mirrors the chain rule in reverse. The chain rule says ${D}${NB}${F}(${gx}) = ${F}′(${gx}) · ${gpx}. So if an integrand looks like “(a function of ${gx}) × (${gpx})”, it is exactly the derivative of “(the integral of that function) evaluated at ${gx}”. Substitution lets you peel off the inner function ${gx}, call it ${u}, and integrate cleanly in ${u}.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Imagine converting rupees to a foreign currency to shop abroad, then converting back at the end. The substitution ${rel(u, '=', gx)} is the currency conversion: you switch to the “${u} world” where the integral is simple, do the easy shopping (integrate), then convert your answer back to the “${x} world.” The crucial accounting step is d${u} = ${gpx}${DX}: that is the exchange rate, and forgetting it is like ignoring the conversion and getting the price catastrophically wrong.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions:</b><br>• Substitution only simplifies things when ${gpx} (or a constant multiple of it) is actually present in the integrand. If it’s missing, this method stalls: you may need a different technique.<br>• Always convert the answer <b>back to</b> ${x} for an indefinite integral. (For definite integrals you instead change the limits: that’s Topic 08.)<br>• A wrong substitution isn’t “illegal,” it just won’t help; learning which substitution works is pattern recognition built from practice.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: `<b>The substitution rule.</b> If ${rel(u, '=', gx)}, then d${u} = ${gpx}${DX} and:`,
      },
      {
        t: 'formula',
        kicker: 'The substitution rule',
        main: `∫${f}(${gx})${NB}${gpx}${DX} = ∫${of(f, u)}${DU}`,
        legend: [`${u} = the new variable (${u} = ${gx})`, `d${u} = its differential (${gpx}${DX})`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'The single most important pattern (logarithmic integral)',
        main: `∫${fr(fpx, fx)}${DX} = ${LN(fx)}${PLUS_C}`,
        legend: [`${fx} = the denominator`, `${fpx} = its derivative (the numerator)`],
        note: null,
      },
      {
        t: 'p',
        html: 'A numerator that is the derivative of the denominator integrates to the log of the denominator.',
      },
      {
        t: 'formula',
        kicker: 'Power-chain pattern',
        main: `∫[${fx}]<sup>${n}</sup>${NB}${fpx}${DX} = ${fr(`[${fx}]<sup>${n}+1</sup>`, `${n} + 1`)}${PLUS_C}${NB}${NB}(${rel(n, '≠', '−1')})`,
        legend: [`${fx} = the inner function`, `${fpx} = its derivative`, `${n} = the power`],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Standard results derived by substitution</b> (memorise):',
      },
      {
        t: 'table',
        title: null,
        head: ['Integral', 'Result'],
        rows: [
          [`∫${TANX}${DX}`, `${LN(SECX)}${PLUS_C} = −${LN(COSX)}${PLUS_C}`],
          [`∫${COTX}${DX}`, `${LN(SINX)}${PLUS_C}`],
          [`∫${SECX}${DX}`, `${LN(`${SECX} + ${TANX}`)}${PLUS_C}`],
          [`∫${CSCX}${DX}`, `${LN(`${CSCX} − ${COTX}`)}${PLUS_C}`],
        ],
      },
      {
        t: 'formula',
        kicker: 'Standard results by substitution',
        main: `∫${TANX}${DX} = ${LN(SECX)}${PLUS_C} = −${LN(COSX)}${PLUS_C}<br>∫${COTX}${DX} = ${LN(SINX)}${PLUS_C}<br>∫${SECX}${DX} = ${LN(`${SECX} + ${TANX}`)}${PLUS_C}<br>∫${CSCX}${DX} = ${LN(`${CSCX} − ${COTX}`)}${PLUS_C}`,
        legend: [`${C} = the constant of integration`],
        note: null,
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'p',
        html: `<b>Deriving ∫${TANX}${DX} by substitution.</b> Write ${TANX} = ${fr(SINX, COSX)} and let ${rel(u, '=', COSX)}, so d${u} = −${SINX}${DX}:<br>∫${TANX}${DX} = ∫${fr(SINX, COSX)}${DX} = ∫${fr(`−d${u}`, u)}<br>= −${LN(u)}${PLUS_C} = −${LN(COSX)}${PLUS_C} = ${LN(SECX)}${PLUS_C}`,
      },
      {
        t: 'p',
        html: `This is just the ${FPF} pattern in disguise (numerator −${SINX} is the derivative of denominator ${COSX}). ■`,
      },
      {
        t: 'p',
        html: `<b>Deriving ∫${SECX}${DX}.</b> Multiply top and bottom by (${SECX} + ${TANX}):<br>∫${SECX}${DX} = ∫${fr(`${SECX}(${SECX} + ${TANX})`, `${SECX} + ${TANX}`)}${DX}`,
      },
      {
        t: 'p',
        html: `The numerator ${SEC2X} + ${SECX} ${TANX} is exactly the derivative of the denominator ${SECX} + ${TANX}, so by the ${FPF} rule the result is ${LN(`${SECX} + ${TANX}`)}${PLUS_C}. ■`,
      },
      {
        t: 'proc',
        title: 'Procedure: the substitution workflow',
        steps: [
          `<b>Spot the inner function.</b> Look for a composite chunk ${gx} whose derivative ${gpx} also appears (up to a constant). Common signals: something under a root, in an exponent, inside a trig/log function, or a denominator.`,
          `<b>Set</b> ${rel(u, '=', gx)} and compute d${u} = ${gpx}${DX}.`,
          `<b>Replace</b> every ${x}-piece: the ${gx} becomes ${u}, and ${gpx}${DX} becomes d${u}. The integral must become purely in ${u}: if any ${x} survives, the substitution was wrong.`,
          `<b>Integrate in</b> ${u} using standard forms.`,
          `<b>Back-substitute</b> ${rel(u, '=', gx)} and add ${C}.`,
          '<b>Verify by differentiating</b> (chain rule should return the integrand).',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Evaluate ∫2${x}√(${X2} + 1)${DX}.`,
        steps: [
          `Let ${u} = ${X2} + 1 ⇒ d${u} = 2${x}${DX}. The 2${x}${DX} is present, so:<br>∫√${u}${DU} = ${u}<sup>3/2</sup> ÷ ${fr('3', '2')} = ${fr('2', '3')}${u}<sup>3/2</sup>`,
          `Back-substitute:<br>∫2${x}√(${X2} + 1)${DX} =`,
        ],
        ans: `${fr('2', '3')}(${X2} + 1)<sup>3/2</sup>${PLUS_C}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Speed Trap',
        q: `Evaluate ∫${fr(x, `${X2} + 4`)}${DX} in seconds.`,
        steps: [
          `Spot the ${FPF} pattern: the derivative of the denominator ${X2} + 4 is 2${x}, and the numerator is ${x} = ${HALF}(2${x}). So pull out the ${HALF}:<br>∫${fr(x, `${X2} + 4`)}${DX} = ${HALF}∫${fr(`2${x}`, `${X2} + 4`)}${DX}<br>= ${HALF}${NB}ln(${X2} + 4)${PLUS_C}`,
          `<b>Speed lesson:</b> whenever the numerator is a constant multiple of the denominator’s derivative, write “(constant) × ln(denominator)” immediately: no formal ${u} needed.`,
        ],
        ans: `${HALF}${NB}ln(${X2} + 4)${PLUS_C}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: nested substitution',
        q: `Evaluate ∫${fr(`e<sup>√${x}</sup>`, ROOTX)}${DX}.`,
        steps: [
          `Let ${u} = ${ROOTX} = ${x}<sup>1/2</sup> ⇒ d${u} = ${fr('1', `2${ROOTX}`)}${DX}, i.e. ${fr(`d${x}`, ROOTX)} = 2${DU}. Then:<br>∫${fr(`e<sup>√${x}</sup>`, ROOTX)}${DX} = ∫e<sup>${u}</sup> · 2${DU}<br>= 2e<sup>${u}</sup>${PLUS_C} = 2e<sup>√${x}</sup>${PLUS_C}`,
          `<b>Why it works:</b> the awkward ${fr('1', ROOTX)} is precisely (twice) the derivative of the exponent ${ROOTX}: the integrand was engineered for this substitution.`,
        ],
        ans: `2e<sup>√${x}</sup>${PLUS_C}`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: rationalising substitution',
        q: `Evaluate ∫${fr('1', `1 + ${ROOTX}`)}${DX}.`,
        steps: [
          `The root blocks every standard form, so substitute it away: let ${x} = ${sq(t)} (${rel(t, '≥', '0')}), so d${x} = 2${t}${DT} and ${ROOTX} = ${t}:<br>∫${fr('1', `1 + ${t}`)} · 2${t}${DT} = 2∫${fr(t, `1 + ${t}`)}${DT}<br>= 2∫(1 − ${fr('1', `1 + ${t}`)})${DT} = 2(${t} − ${LN(`1 + ${t}`)})${PLUS_C}`,
          `Back-substitute ${t} = ${ROOTX}:<br>∫${fr('1', `1 + ${ROOTX}`)}${DX} = 2${ROOTX} − 2${NB}ln(1 + ${ROOTX})${PLUS_C}`,
          `<b>Deep idea:</b> the move ${fr(t, `1 + ${t}`)} = 1 − ${fr('1', `1 + ${t}`)} (split an improper fraction before integrating) is a recurring trick: keep it handy.`,
        ],
        ans: `2${ROOTX} − 2${NB}ln(1 + ${ROOTX})${PLUS_C}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `<b>[CBSE]</b> Evaluate ∫3${X2}${NB}e<sup>${X3}</sup>${DX}.`, a: `e<sup>${X3}</sup>${PLUS_C}` },
          { q: `<b>[CUET]</b> Evaluate ∫${fr(COSX, SINX)}${DX}.`, a: `${LN(SINX)}${PLUS_C}` },
          { q: `<b>[JEE Main]</b> Evaluate ∫${fr(`(ln${NB}${x})<sup>2</sup>`, x)}${DX}.`, a: `${fr(`(ln${NB}${x})<sup>3</sup>`, '3')}${PLUS_C}` },
          { q: `<b>[JEE Main]</b> Evaluate ∫${fr('1', `${x}${NB}ln${NB}${x}`)}${DX}.`, a: `${LN(`ln${NB}${x}`)}${PLUS_C}` },
          {
            q: `<b>[JEE Advanced]</b> Evaluate ∫${fr('1', `1 + e<sup>${x}</sup>`)}${DX}. (Hint: write ${fr('1', `1 + e<sup>${x}</sup>`)} = 1 − ${fr(`e<sup>${x}</sup>`, `1 + e<sup>${x}</sup>`)}.)`,
            a: `${x} − ln(1 + e<sup>${x}</sup>)${PLUS_C}`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `∫${fr(`2${x} + 3`, `${X2} + 3${x} + 5`)}${DX} equals:`,
        opts: [
          { label: `${LN(`${X2} + 3${x} + 5`)}${PLUS_C}`, nudge: null },
          {
            label: `${HALF}${NB}${LN(`${X2} + 3${x} + 5`)}${PLUS_C}`,
            nudge: `<b>(b)</b> wrongly inserts a ${HALF}: that factor only appears when the numerator is half the derivative.`,
          },
          {
            label: `(2${x} + 3)${NB}${LN(`${X2} + 3${x} + 5`)}${PLUS_C}`,
            nudge: '<b>(c)</b> treats ln like a multiplicative constant.',
          },
          {
            label: `tan<sup>−1</sup>(${X2} + 3${x} + 5)${PLUS_C}`,
            nudge: `<b>(d)</b> confuses this with the ${fr('1', `${X2} + ${a}<sup>2</sup>`)} arctan form.`,
          },
        ],
        correct: 0,
        solution: `The numerator 2${x} + 3 is exactly the derivative of the denominator, so this is the pure ${FPF} form.`,
      },
      {
        t: 'mcq',
        q: `∫${COSX}${NB}e<sup>sin${NB}${x}</sup>${DX} equals:`,
        opts: [
          { label: `e<sup>cos${NB}${x}</sup>${PLUS_C}`, nudge: '<b>(a)</b> substitutes the wrong inner function.' },
          { label: `e<sup>sin${NB}${x}</sup>${PLUS_C}`, nudge: null },
          {
            label: `${SINX}${NB}e<sup>sin${NB}${x}</sup>${PLUS_C}`,
            nudge: '<b>(c)</b> is a product that would arise from misapplying parts; differentiate it and you won’t recover the integrand.',
          },
          {
            label: `e<sup>sin${NB}${x}</sup>${NB}${COSX}${PLUS_C}`,
            nudge: '<b>(d)</b> is the integrand itself with + C attached: nothing has been integrated; differentiate it and you won’t recover the integrand.',
          },
        ],
        correct: 1,
        solution: `Let ${rel(u, '=', SINX)}, d${u} = ${COSX}${DX}; the integral is ∫e<sup>${u}</sup>${DU} = e<sup>sin${NB}${x}</sup>${PLUS_C}.`,
      },
      {
        t: 'mcq',
        q: `∫${TANX}${DX} equals:`,
        opts: [
          { label: `${SEC2X}${PLUS_C}`, nudge: `<b>(a)</b> is the derivative of ${TANX}, not its integral.` },
          { label: `${LN(COSX)}${PLUS_C}`, nudge: '<b>(b)</b> drops the negative sign: a sign-flip error.' },
          { label: `${LN(SECX)}${PLUS_C}`, nudge: null },
          { label: `−${SECX} ${TANX}${PLUS_C}`, nudge: '<b>(d)</b> is unrelated.' },
        ],
        correct: 2,
        solution: `∫${TANX}${DX} = −${LN(COSX)} = ${LN(SECX)}${PLUS_C}.`,
      },
      {
        t: 'mcq',
        q: `Using ${x} = ${sq(t)}, ∫${fr('1', `${ROOTX}${NB}(1 + ${x})`)}${DX} equals:`,
        opts: [
          { label: `2${NB}${INV('tan', ROOTX)}${PLUS_C}`, nudge: null },
          { label: `${INV('tan', ROOTX)}${PLUS_C}`, nudge: `<b>(b)</b> forgets the factor 2 from d${x} = 2${t}${DT}.` },
          { label: `ln(1 + ${x})${PLUS_C}`, nudge: `<b>(c)</b> misreads the form as ${FPF}.` },
          { label: `2${ROOTX}${PLUS_C}`, nudge: '<b>(d)</b> ignores the denominator entirely.' },
        ],
        correct: 0,
        solution: `With ${x} = ${sq(t)}, d${x} = 2${t}${DT}, ${ROOTX} = ${t}:<br>∫${fr(`2${t}${DT}`, `${t}(1 + ${sq(t)})`)} = 2∫${fr(`d${t}`, `1 + ${sq(t)}`)} = 2${NB}${INV('tan', t)}<br>= 2${NB}${INV('tan', ROOTX)}${PLUS_C}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Forgetting to substitute d${x}.</b> You must replace ${gpx}${DX} with d${u}, not just ${gx} with ${u}. Dropping the d${u} accounting is the number-one substitution error.`,
          `<b>Leaving the answer in ${u}.</b> For an indefinite integral, always convert back to ${x}. (Definite integrals change limits instead: Topic 08.)`,
          `<b>Wrong constant factor in ${FPF}.</b> ∫${fr(x, `${X2} + ${a}<sup>2</sup>`)}${DX} carries a ${HALF}; ∫${fr(`2${x}`, `${X2} + ${a}<sup>2</sup>`)}${DX} does not. Check whether the numerator is the whole derivative or a fraction of it.`,
          `<b>Sign slip in ∫${TANX}${DX}, ∫${COTX}${DX}.</b> ∫${TANX}${DX} = +${LN(SECX)} (or −${LN(COSX)}); ∫${COTX}${DX} = +${LN(SINX)}.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> before integrating, ask “is the numerator (a constant times) the derivative of the denominator?” If yes, the answer is instantly a log: no substitution machinery required. This one reflex handles a huge fraction of exam integrals ${ESTIMATE}.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Rule</b>',
            note: `${rel(u, '=', gx)} ⇒ d${u} = ${gpx}${DX}, then ∫${f}(${gx})${gpx}${DX} = ∫${of(f, u)}${DU}.`,
          },
          {
            f: '<b>Log pattern</b>',
            note: `∫${fr(fpx, fx)}${DX} = ${LN(fx)}${PLUS_C}. (Numerator = derivative of denominator.)`,
          },
          {
            f: '<b>Power pattern</b>',
            note: `∫[${fx}]<sup>${n}</sup>${NB}${fpx}${DX} = ${fr(`[${fx}]<sup>${n}+1</sup>`, `${n} + 1`)}${PLUS_C}.`,
          },
          {
            f: '<b>Four standard results</b>',
            note: `∫tan = ${LN(SECX)}; ∫cot = ${LN(SINX)}; ∫sec = ${LN(`${SECX} + ${TANX}`)}; ∫csc = ${LN(`${CSCX} − ${COTX}`)}.`,
          },
          {
            f: '<b>Workflow</b>',
            note: `spot inner ${g} → set ${u} → replace all ${x} → integrate → back-substitute → +${NB}${C} → differentiate to check.`,
          },
        ],
        aids: [
          `<b>“Derivative on top → log on the bottom”:</b> the ${FPF} reflex.`,
          `<b>“Convert there, convert back”:</b> never leave the answer in ${u}.`,
        ],
      },
    ],
  },

  // ──────────────── Topic 03 · book Subtopic 05 · pp. 464–468 ────────────────
  {
    n: '03',
    title: 'Integration using Trigonometric Identities',
    kalam: 'Integration here is really a two-step dance: first rewrite using an identity, then integrate term by term.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Trigonometric integrals appear in almost every paper ${ESTIMATE}. CBSE Boards ask ∫${SIN2X}, ∫${COS2X}, or a product every year (2–3 marks) ${ESTIMATE}. JEE Main/CUET test products and odd/even-power tricks; JEE Advanced reaches for Wallis’ formula and higher powers of tan${NB}/${NB}sec.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `You cannot integrate ${SIN2X} directly: there’s no table entry for it. The trick is that <b>trigonometric identities convert un-integrable powers and products into sums of simple terms</b> you can integrate. Integration here is really a two-step dance: first rewrite using an identity, then integrate term by term.`,
      },
      {
        t: 'p',
        html: `The governing principle: high powers and products of sines and cosines oscillate in complicated ways, but every such expression can be re-expressed as a sum of plain sin(${I('kx')}) and cos(${I('kx')}) terms, each of which integrates instantly. Identities are the dictionary for that translation.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> A music chord sounds complex, but it’s just a sum of pure tones played together. Trig identities are like a spectrum analyser that breaks the “chord” ${SIN2X} or sin${NB}3${x}${NB}${COSX} into its pure-tone components (${COS_2X}, sin${NB}4${x}, etc.), and each pure tone is trivial to integrate.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions:</b><br>• The method needs the right identity for the shape of the integrand (even powers → double-angle; odd powers → split off one factor and substitute; products → product-to-sum).<br>• Wallis’ formula applies <b>only</b> to definite integrals over [0,${NB}${PI2}] of sin<sup>${n}</sup>${NB}${x}${NB}cos<sup>${m}</sup>${NB}${x}: never to indefinite integrals.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'formula',
        kicker: 'Power-reduction (for even powers)',
        main: `${SIN2X} = ${fr(`1 − ${COS_2X}`, '2')}<br>${COS2X} = ${fr(`1 + ${COS_2X}`, '2')}`,
        legend: [`${x} = the angle`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Triple-angle (for cubes)',
        main: `sin<sup>3</sup>${NB}${x} = ${fr(`3${NB}${SINX} − sin${NB}3${x}`, '4')}<br>cos<sup>3</sup>${NB}${x} = ${fr(`3${NB}${COSX} + cos${NB}3${x}`, '4')}`,
        legend: [`${x} = the angle`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Product-to-sum',
        main: `2${NB}sin${NB}${A}${NB}cos${NB}${B} = sin(${A} + ${B}) + sin(${A} − ${B})<br>2${NB}cos${NB}${A}${NB}cos${NB}${B} = cos(${A} + ${B}) + cos(${A} − ${B})<br>2${NB}sin${NB}${A}${NB}sin${NB}${B} = cos(${A} − ${B}) − cos(${A} + ${B})`,
        legend: [`${A}, ${B} = the two angles`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Wallis’ formula</b> (definite, [0,${NB}${PI2}]; a JEE tool, not in the NCERT book): for non-negative integers ${m},${NB}${n}:`,
      },
      {
        t: 'formula',
        kicker: 'Wallis’ formula',
        main: `${INT_0_PI2} sin<sup>${n}</sup>${NB}${x}${NB}cos<sup>${m}</sup>${NB}${x}${DX}<br>= ${fr(`(${n} − 1)!!${NB}(${m} − 1)!!`, `(${m} + ${n})!!`)} × ${PI2}${NB}${NB}(if${NB}both${NB}${m},${NB}${n}${NB}even)<br>= ${fr(`(${n} − 1)!!${NB}(${m} − 1)!!`, `(${m} + ${n})!!`)} × 1${NB}${NB}(otherwise)`,
        legend: [`${m}, ${n} = non-negative integers`, `${k}!! = ${k}(${k} − 2)(${k} − 4)⋯ down to 2 or 1 (with 0!! = (−1)!! = 1)`],
        note: null,
      },
      {
        t: 'p',
        html: `where ${k}!! = ${k}(${k} − 2)(${k} − 4)⋯ down to 2 or 1, and 0!! = (−1)!! = 1.`,
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'p',
        html: `<b>Deriving ∫${SIN2X}${DX}.</b> Apply power-reduction:<br>∫${SIN2X}${DX} = ∫${fr(`1 − ${COS_2X}`, '2')}${DX}<br>= ${HALF}(${x} − ${fr(SIN_2X, '2')})${PLUS_C}<br>= ${fr(x, '2')} − ${fr(SIN_2X, '4')}${PLUS_C}${NB}${NB}■`,
      },
      {
        t: 'proc',
        title: 'Procedure: choose by shape',
        steps: [
          '<b>Even power of</b> sin <b>or</b> cos <b>alone</b> → power-reduction (halve the power, introduce double angle); repeat if the power is 4, 6, …',
          `<b>Odd power</b> → split off one factor and substitute. E.g. sin<sup>3</sup>${NB}${x} = ${SIN2X} · ${SINX} = (1${NB}−${NB}${COS2X})${NB}${SINX}; let ${rel(u, '=', COSX)}.`,
          `<b>Product</b> sin(${I('ax')})${NB}cos(${I('bx')}) <b>etc.</b> → product-to-sum, then integrate each term.`,
          `<b>Powers of</b> tan${NB}/${NB}sec → use ${SEC2X} = 1 + ${TAN2X} and the fact that ${D}${NB}${TANX} = ${SEC2X}; peel off a ${SEC2X} to substitute.`,
          `<b>Definite,</b> ${INT_0_PI2} sin<sup>${n}</sup>${NB}${x}${NB}cos<sup>${m}</sup>${NB}${x}${DX} → Wallis’ formula directly.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Evaluate ∫${COS2X}${DX}.`,
        steps: [`Power-reduction:<br>∫${COS2X}${DX} = ∫${fr(`1 + ${COS_2X}`, '2')}${DX} =`],
        ans: `${fr(x, '2')} + ${fr(SIN_2X, '4')}${PLUS_C}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Speed Trap',
        q: `Evaluate ∫sin${NB}5${x}${NB}cos${NB}3${x}${DX}.`,
        steps: [
          `Product-to-sum: 2${NB}sin${NB}5${x}${NB}cos${NB}3${x} = sin${NB}8${x} + ${SIN_2X}, so sin${NB}5${x}${NB}cos${NB}3${x} = ${HALF}(sin${NB}8${x}${NB}+${NB}${SIN_2X}):<br>∫sin${NB}5${x}${NB}cos${NB}3${x}${DX} = ${HALF}∫(sin${NB}8${x} + ${SIN_2X})${DX}<br>= ${HALF}(−${fr(`cos${NB}8${x}`, '8')} − ${fr(COS_2X, '2')})${PLUS_C}`,
          '<b>Speed lesson:</b> never try parts on a sine–cosine product: product-to-sum turns it into two trivial integrals.',
        ],
        ans: `−${fr(`cos${NB}8${x}`, '16')} − ${fr(COS_2X, '4')}${PLUS_C}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: odd power + substitution',
        q: `Evaluate ∫sin<sup>3</sup>${NB}${x}${NB}${COS2X}${DX}.`,
        steps: [
          `Odd power of sine: split one ${SINX} off and convert the rest to cosine using ${SIN2X} = 1 − ${COS2X}:<br>∫sin<sup>3</sup>${NB}${x}${NB}${COS2X}${DX}<br>= ∫(1 − ${COS2X})${NB}${COS2X}${NB}${SINX}${DX}`,
          `Let ${rel(u, '=', COSX)}, d${u} = −${SINX}${DX}:<br>= −∫(1 − ${sq(u)})${sq(u)}${DU} = −∫(${sq(u)} − ${u}<sup>4</sup>)${DU}<br>= −(${fr(cube(u), '3')} − ${fr(`${u}<sup>5</sup>`, '5')})${PLUS_C}`,
          `Back-substitute:<br>= −${fr(`cos<sup>3</sup>${NB}${x}`, '3')} + ${fr(`cos<sup>5</sup>${NB}${x}`, '5')}${PLUS_C}`,
        ],
        ans: `${fr(`cos<sup>5</sup>${NB}${x}`, '5')} − ${fr(`cos<sup>3</sup>${NB}${x}`, '3')}${PLUS_C}`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: Wallis’ formula',
        q: `Evaluate ${INT_0_PI2} sin<sup>6</sup>${NB}${x}${NB}${COS2X}${DX}.`,
        steps: [
          `Here ${rel(n, '=', '6')}, ${rel(m, '=', '2')}, both even, so the ${PI2} branch applies:<br>${INT_0_PI2} sin<sup>6</sup>${NB}${x}${NB}${COS2X}${DX}<br>= ${fr('5!! · 1!!', '8!!')} · ${PI2} = ${fr('(5 · 3 · 1)(1)', '8 · 6 · 4 · 2')} · ${PI2}<br>= ${fr('15', '384')} · ${PI2} = ${fr('5', '128')} · ${PI2} = ${fr('5π', '256')}`,
          '<b>Why it works:</b> Wallis’ formula collapses a brutal expansion into one fraction of double-factorials: invaluable when time is short.',
        ],
        ans: fr('5π', '256'),
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `<b>[CBSE]</b> Evaluate ∫${SIN2X}${DX}.`, a: `${fr(x, '2')} − ${fr(SIN_2X, '4')}${PLUS_C}` },
          {
            q: `<b>[CUET]</b> Evaluate ∫2${NB}sin${NB}3${x}${NB}${COSX}${DX}.`,
            a: `−${fr(`cos${NB}4${x}`, '4')} − ${fr(COS_2X, '2')}${PLUS_C}`,
          },
          { q: `<b>[JEE Main]</b> Evaluate ∫cos<sup>3</sup>${NB}${x}${DX}.`, a: `${SINX} − ${fr(`sin<sup>3</sup>${NB}${x}`, '3')}${PLUS_C}` },
          {
            q: `<b>[JEE Main]</b> Evaluate ∫${TAN2X}${DX}. (Hint: ${TAN2X} = ${SEC2X} − 1.)`,
            a: `${TANX} − ${x}${PLUS_C}`,
          },
          { q: `<b>[JEE Advanced]</b> Evaluate ${INT_0_PI2} sin<sup>4</sup>${NB}${x}${DX}.`, a: fr('3π', '16') },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `∫${SIN2X}${DX} equals:`,
        opts: [
          { label: `${fr(x, '2')} − ${fr(SIN_2X, '4')}${PLUS_C}`, nudge: null },
          {
            label: `${fr(`sin<sup>3</sup>${NB}${x}`, '3')}${PLUS_C}`,
            nudge: `<b>(b)</b> treats ${SIN2X} as if the power rule applied to ${SINX}: invalid.`,
          },
          {
            label: `−${fr(`cos<sup>3</sup>${NB}${x}`, '3')}${PLUS_C}`,
            nudge: `<b>(c)</b> is ∫${COS2X}${NB}${SINX}${DX}, a different integrand.`,
          },
          {
            label: `${fr(x, '2')} + ${fr(SIN_2X, '4')}${PLUS_C}`,
            nudge: `<b>(d)</b> is ∫${COS2X}${DX}: the sign on the double-angle term is wrong for sine.`,
          },
        ],
        correct: 0,
        solution: `Power-reduction gives ∫${fr(`1 − ${COS_2X}`, '2')}${DX} = ${fr(x, '2')} − ${fr(SIN_2X, '4')}${PLUS_C}.`,
      },
      {
        t: 'mcq',
        q: `∫2${NB}cos${NB}3${x}${NB}${COSX}${DX} equals:`,
        opts: [
          { label: `${fr(`sin${NB}4${x}`, '4')} + ${fr(SIN_2X, '2')}${PLUS_C}`, nudge: null },
          { label: `sin${NB}3${x}${NB}${SINX}${PLUS_C}`, nudge: '<b>(b)</b> is a product (parts gone wrong).' },
          {
            label: `${fr(`sin${NB}4${x}`, '2')} + ${SIN_2X}${PLUS_C}`,
            nudge: '<b>(c)</b> is twice the answer: it doubles the product-to-sum result, so the 2 is counted twice.',
          },
          { label: `−${fr(`cos${NB}4${x}`, '4')}${PLUS_C}`, nudge: '<b>(d)</b> uses only one term and the wrong identity.' },
        ],
        correct: 0,
        solution: `2${NB}cos${NB}3${x}${NB}${COSX} = cos${NB}4${x} + ${COS_2X}, which integrates to ${fr(`sin${NB}4${x}`, '4')} + ${fr(SIN_2X, '2')}${PLUS_C}.`,
      },
      {
        t: 'mcq',
        q: `∫${TAN2X}${DX} equals:`,
        opts: [
          {
            label: `${fr(`tan<sup>3</sup>${NB}${x}`, '3')}${PLUS_C}`,
            nudge: `<b>(a)</b> wrongly applies the power rule to ${TANX}.`,
          },
          { label: `${TANX} − ${x}${PLUS_C}`, nudge: null },
          { label: `${SEC2X}${PLUS_C}`, nudge: `<b>(c)</b> is the derivative of ${TANX}.` },
          { label: `${LN(SECX)}${PLUS_C}`, nudge: `<b>(d)</b> is ∫${TANX}${DX}, a different integrand.` },
        ],
        correct: 1,
        solution: `${TAN2X} = ${SEC2X} − 1, so ∫(${SEC2X} − 1)${DX} = ${TANX} − ${x}${PLUS_C}.`,
      },
      {
        t: 'mcq',
        q: `${INT_0_PI2} ${SIN2X}${NB}${COS2X}${DX} equals:`,
        opts: [
          { label: fr('π', '16'), nudge: null },
          { label: fr('π', '8'), nudge: `<b>(b)</b> forgets the ${PI2} factor’s halving.` },
          { label: fr('π', '4'), nudge: `<b>(c)</b> is ${INT_0_PI2} ${SIN2X}${DX} alone: it ignores the ${COS2X} factor.` },
          { label: fr('π', '32'), nudge: '<b>(d)</b> double-counts a factor of 2.' },
        ],
        correct: 0,
        solution: `By Wallis’ formula (${rel(n, '=', m)} = 2, both even):<br>${fr('1!! · 1!!', '4!!')} · ${PI2} = ${fr('1', '4 · 2')} · ${PI2} = ${fr('1', '8')} · ${PI2} = ${fr('π', '16')}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Applying the power rule to sin<sup>${n}</sup>${NB}${x}.</b> ∫${SIN2X}${DX} ≠ ${fr(`sin<sup>3</sup>${NB}${x}`, '3')}. You must use an identity first: the power rule integrates powers of ${x}, not powers of ${SINX}.`,
          `<b>Trying integration by parts on sin(${I('ax')})${NB}cos(${I('bx')}).</b> Product-to-sum is far faster and avoids circular parts.`,
          `<b>Wrong double-angle sign.</b> ${SIN2X} uses 1 − ${COS_2X}; ${COS2X} uses 1 + ${COS_2X}. Mixing them flips a sign.`,
          `<b>Using Wallis’ formula on an indefinite integral or wrong limits.</b> Wallis’ formula is only for ${INT_0_PI2}.`,
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> classify before you compute: “even power → halve it; odd power → peel one off and substitute; product → product-to-sum.” Naming the shape picks the identity automatically.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Even powers</b>',
            note: `${SIN2X} = ${fr(`1 − ${COS_2X}`, '2')}, ${COS2X} = ${fr(`1 + ${COS_2X}`, '2')}.`,
          },
          {
            f: '<b>Odd powers</b>',
            note: 'peel one factor, convert rest via sin<sup>2</sup> = 1 − cos<sup>2</sup> (or vice-versa), substitute.',
          },
          {
            f: '<b>Products</b>',
            note: `2${NB}sin${NB}${A}${NB}cos${NB}${B} = sin(${A} + ${B}) + sin(${A} − ${B});<br>2${NB}cos${NB}${A}${NB}cos${NB}${B} = cos(${A} + ${B}) + cos(${A} − ${B}).`,
          },
          { f: `<b>tan${NB}/${NB}sec</b>`, note: `use ${SEC2X} = 1 + ${TAN2X}; peel a ${SEC2X} for substitution.` },
          {
            f: `<b>Wallis ([0,${NB}${PI2}])</b>`,
            note: `${fr(`(${n} − 1)!!(${m} − 1)!!`, `(${m} + ${n})!!`)} × (${PI2} if both even, else 1).`,
          },
        ],
        aids: [
          '<b>“Even = halve it, odd = peel it, product = split it.”</b>',
          `<b>“Wallis only on 0 to ${PI2}.”</b>`,
        ],
      },
    ],
  },
];
