import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Additional topic P, pp. 371–382 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's "Addendum P — What
 * JEE Actually Asks", kept with the book's letter as the chapter's last additional
 * topic (decision 2). It opens partway down p. 371, below the rule that closes
 * Addendum E's answers, and ends on p. 382; Chapter 6 starts on p. 383. The book
 * prints no opening paragraph: the numbered headings "1. Distribution of Topics …"
 * … "5. Where to Focus Your Practice" are the parts, without their numbers, in
 * sentence case. The distribution table is a table block, its "Representative
 * years / sessions" column now "Papers cited": the count of the papers it names, by
 * exam (a paper before 2013 is "JEE"; "2019 Apr(I,II)" is two papers). Each
 * archetype 1–7 is a worked example tagged with its heading: its "What it looks
 * like / Examples / Method" text and its worked example's data are the question
 * (each "Examples:" list a count, as the table), the "Solution:" the steps, its
 * "Answer:" the answer box; where an archetype has a second worked example (1 and
 * 6), both stay in printed order in the steps and the answer box is empty. The
 * traps are a table block, as printed; the graded practice set Q1–Q8 is one
 * practice block, each "Answer:" its answer. Exam years, months and shifts are
 * dropped from every tag ("Main 2019 Apr(II)" → "Main"; "Adv 1990" → "JEE"), and
 * every share or frequency of past questions carries the estimate label. These
 * pages print no drawing and no formula card. Piecewise functions are written one
 * line per piece; d/dx with an upright d; a fraction inside a fraction is written
 * with ÷. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const A = I('A');
const C = I('C');
const a = I('a');
const b = I('b');
const c = I('c');
const f = I('f');
const g = I('g');
const k = I('k');
const m = I('m');
const n = I('n');
const p = I('p');
const q = I('q');
const t = I('t');
const u = I('u');
const v = I('v');
const x = I('x');
const y = I('y');
const th = I('θ');
const sq = (s: string) => `${s}<sup>2</sup>`;
const X2 = sq(x);
const X3 = `${x}<sup>3</sup>`;
const of = (fn: string, s: string) => `${fn}(${s})`;
const fx = of(f, x);
const fy = of(f, y);
const gx = of(g, x);
const gy = of(g, y);
/** f′, the prime U+2032. */
const fp = (s: string) => `${f}′(${s})`;
const gp = (s: string) => `${g}′(${s})`;
const yp = `${y}′`;
const ypp = `${y}″`;
/** |s|, the U+2060 keeping the opening bar with what it holds. */
const abs = (s: string) => `|\u2060${s}|`;
/** A pair or open interval, its comma glued: (p, q). */
const iv = (lo: string, hi: string, o = '(', cl = ')') => `${o}${lo},${NB}${hi}${cl}`;
/** The greatest-integer bracket, as the page prints it: [x]. */
const GI = (s: string) => `[${s}]`;
const lim = (s: string) => `lim<sub>${s}</sub>`;
/** d/dx, d upright. */
const D = fr('d', `d${x}`);
const DYDX = fr(`d${y}`, `d${x}`);
const D2YDX2 = fr(`d<sup>2</sup>${y}`, `d${x}<sup>2</sup>`);
const DTH = fr('d', `d${th}`);
const DXDTH = fr(`d${x}`, `d${th}`);
const DYDTH = fr(`d${y}`, `d${th}`);
const DXDT = fr(`d${x}`, `d${t}`);
const DYDT = fr(`d${y}`, `d${t}`);
const D2YDT2 = fr(`d<sup>2</sup>${y}`, `d${t}<sup>2</sup>`);
const D2XDT2 = fr(`d<sup>2</sup>${x}`, `d${t}<sup>2</sup>`);
const D2YDTH2 = fr(`d<sup>2</sup>${y}`, `d${th}<sup>2</sup>`);
const D2XDTH2 = fr(`d<sup>2</sup>${x}`, `d${th}<sup>2</sup>`);
/** The evaluation bar: (…)|ₓ₌₁. */
const at = (s: string) => `|<sub>${s}</sub>`;
const AT_PI = at(`${th}=π`);
const sin = (s: string) => `sin${NB}${s}`;
const cos = (s: string) => `cos${NB}${s}`;
const tan = (s: string) => `tan${NB}${s}`;
const cot = (s: string) => `cot${NB}${s}`;
const ln = (s: string) => `ln${NB}${s}`;
const SIN_INV = 'sin<sup>−1</sup>';
const TAN_INV = 'tan<sup>−1</sup>';
const COS_INV = 'cos<sup>−1</sup>';
const H2 = fr('1', '2');
const P2 = fr('π', '2');
const P4 = fr('π', '4');
const TH_2 = fr(th, '2');
const TH3_2 = fr(`3${th}`, '2');
const R1MX2 = `√(1${NB}−${NB}${X2})`;
const F2X_1M = fr(`2${x}`, `1 − ${X2}`);
const F2X_1P = fr(`2${x}`, `1 + ${X2}`);
const F2_1P = fr('2', `1 + ${X2}`);
const IR2 = fr('1', '√2');
/** −π/2 < … < π/2 style intervals, stacked. */
const HALF_PI = iv(`−${P2}`, P2);
const HALF_PI_C = iv(`−${P2}`, P2, '[', ']');
/** The eight jump points of [x²] sin(πx) in (−2, 3). */
const JUMPS = `±√2, ±√3, √5, √6, √7, √8`;
const SINPX = `sin(π${x})`;
const PT = `${p}${t}`;
const NUM2011 = `−${sq(p)}${NB}${sin(PT)}${NB}${cos(t)} + ${p}${NB}${sin(t)}${NB}${cos(PT)}`;
const PIECE = (rule: string, cond: string) => `${fx} = ${rule},${NB}${NB}${cond}`;
const rel = (l: string, op: string, r: string) => `${l}${NB}${op}${NB}${r}`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic P (the book's Addendum P) · pp. 371–382 ────────────────
  {
    n: 'P',
    title: 'What JEE Actually Asks',
    extra: true,
    blocks: [
      { t: 'part', title: 'Distribution of topics (JEE Main and Advanced)' },
      {
        t: 'p',
        html: `Across roughly <b>140 JEE Main and Advanced questions</b> on this chapter, the following patterns emerge ${ESTIMATE}.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Approx. number of questions', 'Papers cited'],
        rows: [
          [
            '<b>Continuity of piecewise functions</b> (parameters, modulus, greatest integer)',
            '25–30',
            '19 (JEE 8, Main 9, Adv 2)',
          ],
          [
            '<b>Differentiability at a point</b> (LHD/RHD, corners, cusps, max/min, greatest integer)',
            '20–25',
            '31 (JEE 17, Main 8, Adv 6)',
          ],
          [
            '<b>Chain rule & derivatives of composite functions</b> (including inverse trig, log, exponential)',
            '15–20',
            '29 (JEE 16, Main 8, Adv 5)',
          ],
          ['<b>Implicit differentiation</b>', '5–8', '15 (JEE 12, Main 2, Adv 1)'],
          [
            '<b>Inverse trigonometric derivatives</b> (substitution / double-angle simplification)',
            '10–12',
            '14 (JEE 6, Main 5, Adv 3)',
          ],
          [
            '<b>Logarithmic differentiation</b> (variable exponent, large products)',
            '8–10',
            '15 (JEE 8, Main 5, Adv 2)',
          ],
          [
            '<b>Parametric differentiation</b> (first and second derivatives)',
            '10–12',
            '15 (JEE 8, Main 6, Adv 1)',
          ],
          [
            `<b>Second-order derivatives</b> (direct, parametric, implicit, relations like ${ypp} + ${p}(${x})${yp} + ${q}(${x})${y} = 0)`,
            '12–15',
            '26 (JEE 16, Main 7, Adv 3)',
          ],
          [
            '<b>Mean Value Theorems</b> (Rolle’s, Lagrange – existence of c, inequality proofs, root bounding)',
            '10–12',
            '20 (JEE 11, Main 7, Adv 2)',
          ],
        ],
      },
      { t: 'p', html: `In eight of the nine rows the book names more papers than its own approximate number of questions, so read both columns as rough guides ${ESTIMATE}.` },
      {
        t: 'p',
        html: `<b>Key observation:</b> Continuity/differentiability of piecewise functions (especially with greatest integer and modulus) and parametric/second-order derivatives are the <b>most heavily tested</b> in JEE Main ${ESTIMATE}. JEE Advanced favours <b>functional equations</b>, <b>inverse-trig substitutions</b>, <b>MVT-based inequality proofs</b>, and <b>subtle differentiability questions</b> (e.g. derivative exists but is not continuous) ${ESTIMATE}.`,
      },

      { t: 'part', title: 'Recurring archetypes (the 7 question shapes that keep returning)' },
      {
        t: 'p',
        html: 'For each archetype we give: <b>what it looks like</b>, <b>the method that cracks it</b>, and <b>one fully worked representative example</b>.',
      },
      {
        t: 'ex',
        tag: 'Archetype 1: Piecewise Continuity / Differentiability with Unknown Parameters',
        q: `<b>What it looks like:</b><br>A function defined by different formulas on intervals, with one or more unknown constants. “Find ${a},${NB}${b} so that ${f} is continuous/differentiable at the junction(s).”<br>Examples: 7 papers cited (JEE 2, Main 5).<br><b>Method:</b><br>1. Write the continuity condition: LHL = RHL = ${of(f, c)}.<br>2. If differentiability is also required, first enforce continuity, then set LHD = RHD (finite).<br>3. Solve the resulting linear equations for the parameters.<br><br><b>Worked Example (in the style of Main):</b><br>Let<br>${PIECE(`${a}${x} + ${b}`, rel(x, '<', '1'))}<br>${PIECE(`${X2} + 3`, rel(x, '=', '1'))}<br>${PIECE(`${X2} + 3${x}`, rel(x, '>', '1'))}<br>Find ${a},${NB}${b} so that ${f} is differentiable at ${rel(x, '=', '1')}.`,
        steps: [
          `Continuity at ${rel(x, '=', '1')} first:<br>${lim(`${x}→1<sup>−</sup>`)}${NB}(${a}${x} + ${b}) = ${a} + ${b},<br>${of(f, '1')} = 4,<br>${lim(`${x}→1<sup>+</sup>`)}${NB}(${X2} + 3${x}) = 4.`,
          `Continuity ⇒ ${a} + ${b} = 4.<br>Differentiability: LHD = ${a}, while<br>RHD = ${D}(${X2} + 3${x})${at(`${x}=1`)} = (2${x} + 3)${at(`${x}=1`)} = 5.<br>LHD = RHD ⇒ ${a} = 5, and then ${b} = 4 − ${a} = −1.`,
          `<b>Answer:</b> ${a} = 5, ${b} = −1. With these values LHL = RHL = ${of(f, '1')} = 4 and LHD = RHD = 5: continuous and differentiable at ${rel(x, '=', '1')}.`,
          `<b>Second representative (Main type):</b><br>${PIECE(`${k}${x} + 1`, rel(x, '≤', 'π'))}<br>${PIECE(cos(x), rel(x, '>', 'π'))}<br>Find ${k} for continuity at ${rel(x, '=', 'π')}.`,
          `<b>Solution:</b><br>${of(f, 'π')} = ${k}π + 1.<br>LHL = ${k}π + 1, RHL = ${lim(`${x}→π<sup>+</sup>`)}${NB}${cos(x)} = −1.<br>Continuity ⇒ ${k}π + 1 = −1 ⇒ ${k} = −${fr('2', 'π')}.`,
          `<b>Differentiability add-on (Main type):</b><br>If we also require differentiability, then after continuity we need<br>LHD = ${k}, RHD = −${sin('π')} = 0 ⇒ ${k} = 0. But then continuity fails (0 ⋅ π + 1 = 1 ≠ −1). Hence no such ${k} exists: a common “no solution” conclusion.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 2: Greatest Integer & Modulus Functions: Counting Discontinuities / Non-differentiable Points',
        q: `<b>What it looks like:</b><br>${fx} = ${sq(GI(x))} − ${GI(X2)}, ${fx} = ${abs(`${X2} − 4`)} + ${abs(`${x} − 1`)}, ${fx} = ${GI(x)}${NB}${SINPX}, etc. Asked: “Number of points of discontinuity in ${iv(a, b)}” or “Set of points where ${f} is not differentiable.”<br>Examples: 8 papers cited (JEE 3, Main 3, Adv 2).<br><b>Method:</b><br>• <b>Greatest integer ${GI(gx)}:</b> with ${g} continuous, discontinuous at ${c} exactly when ${of(g, c)} is an integer ${m} and ${g} takes values below ${m} arbitrarily close to ${c}: a crossing, or a local maximum sitting on the level (Additional topic E); continuous where ${g} merely touches the level from above. Differentiable nowhere at those jumps; elsewhere the derivative is 0.<br>• <b>Modulus ${abs(gx)}:</b> Non-differentiable exactly at zeros ${c} of ${g} with ${gp(c)} ≠ 0 (simple zeros, where ${g} crosses the axis at a nonzero slope: Lemma B.2). At a zero with ${gp(c)} = 0 (e.g. ${X2} or ${X3} at 0), ${abs(g)} stays differentiable.<br>• <b>Combinations:</b> Corners add unless they cancel (same location, opposite slopes). Always check endpoints of the interval: open intervals exclude endpoints.<br><br><b>Worked Example (in the style of Main & Adv):</b><br>Find the number of points in ${iv('−2', '3')} where ${fx} = ${GI(X2)}${NB}${SINPX} is discontinuous.`,
        steps: [
          `${GI(X2)} jumps where ${X2} crosses an integer transversally, i.e. at ${x} = ±√${n}, ${n} ∈ ℕ. (At ${rel(x, '=', '0')} the level 0 is touched at a minimum: ${GI(X2)} = 0 on all of ${iv('−1', '1')}, so there is no jump.) In ${iv('−2', '3')} the candidates are ${x} = ±1, ±√2, ±√3, 2, √5, √6, √7, √8; the points ${rel(x, '=', '−2')} and ${rel(x, '=', '3')} themselves lie on the excluded boundary.`,
          `Multiplication by ${SINPX} kills a jump exactly at the integers: if ${x}<sub>0</sub> is an integer then ${SINPX} → 0 as ${x} → ${x}<sub>0</sub> while ${GI(X2)} stays bounded, so both one-sided limits of the product equal 0 = ${f}(${x}<sub>0</sub>). For instance at ${rel(x, '=', '2')}: LHL = ${lim(`${x}→2<sup>−</sup>`)}${NB}3${NB}${SINPX} = 0, RHL = ${lim(`${x}→2<sup>+</sup>`)}${NB}4${NB}${SINPX} = 0, ${of(f, '2')} = 0: continuous; likewise at ${x} = ±1.`,
          `At the non-integer candidates, ${SINPX} is continuous and non-zero, so the unit jump of ${GI(X2)} survives in the product: ${f} is discontinuous at ${x} = ${JUMPS}.`,
        ],
        ans: '8 points.',
      },
      {
        t: 'ex',
        tag: 'Archetype 3: Functional Equations Leading to Differentiability',
        q: `<b>What it looks like:</b><br>${of(f, `${x} + ${y}`)} = ${fx} + ${fy} (Cauchy), ${of(f, `${x} + ${y}`)} = ${fx}${fy}, ${of(f, `${x} − ${y}`)} = ${fx}${gy} − ${fy}${gx}, etc. Given differentiability at one point (often 0), find derivative everywhere or a specific value.<br>Examples: 7 papers cited (JEE 6, Main 1), the Main one on ${of(f, `${x} + ${y}`)} = ${fx}${fy}.<br><b>Method:</b><br>1. Use the functional equation to find ${of(f, '0')} (usually 0 or 1).<br>2. Differentiate the equation with respect to one variable, then set that variable to 0.<br>3. Obtain a differential equation for ${f} (e.g. ${fp(x)} = ${fp('0')}${fx}).<br>4. Solve with the initial condition.<br><br><b>Worked Example (in the style of JEE / Main):</b><br>${f} : ℝ → ℝ, ${of(f, `${x} + ${y}`)} = ${fx}${fy} for all ${x},${NB}${y}, ${fx} ≠ 0, differentiable at 0 with ${fp('0')} = 2. Find ${fx} and ${fp('3')}.`,
        steps: [
          `Put ${x} = ${y} = 0: ${of(f, '0')} = ${of(f, '0')}<sup>2</sup> ⇒ ${of(f, '0')} = 1 (since ${fx} ≠ 0).`,
          `Differentiate both sides with respect to ${y} at ${rel(y, '=', '0')} (the right side is differentiable there, so the left side is too): ${fp(x)} = ${fx}${fp('0')} = 2${fx}.`,
          `Solve: ${fr(`${f}′`, f)} = 2 ⇒ ${ln(fx)} = 2${x} + ${C} ⇒ ${fx} = ${A}e<sup>2${x}</sup>. ${of(f, '0')} = 1 ⇒ ${A} = 1. So ${fx} = e<sup>2${x}</sup>.<br>Then ${fp(x)} = 2e<sup>2${x}</sup>, so ${fp('3')} = 2e<sup>6</sup> ≈ 806.9.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 4: Inverse Trigonometric Derivatives via Substitution (Double-Angle Simplification)',
        q: `<b>What it looks like:</b><br>Differentiate ${y} = ${TAN_INV}${NB}${F2X_1M}, ${y} = ${SIN_INV}(2${x}${R1MX2}), ${y} = ${COS_INV}${NB}${fr(`1 − ${X2}`, `1 + ${X2}`)}, etc. Domain restrictions are crucial.<br>Examples: 8 papers cited (JEE 1, Main 4, Adv 3).<br><b>Method:</b><br>1. Identify the pattern: ${F2X_1M} suggests ${x} = ${tan(th)}; 2${x}${R1MX2} suggests ${x} = ${sin(th)}; ${fr(`1 − ${X2}`, `1 + ${X2}`)} suggests ${x} = ${tan(th)}.<br>2. Substitute, simplify using double-angle formulas, and <b>state the valid range</b> of ${th} (hence ${x}) where the inverse cancels cleanly.<br>3. Differentiate the simplified expression.<br>4. Check if the derivative changes sign outside the principal range (piecewise derivative).<br><br><b>Worked Example (in the style of Main / Adv):</b><br>Differentiate ${y} = ${SIN_INV}${NB}${F2X_1P} and state where the formula holds.`,
        steps: [
          `Let ${x} = ${tan(th)}, ${th} ∈ ${HALF_PI}. Then<br>${F2X_1P} = ${fr(`2${NB}${tan(th)}`, `1 + tan<sup>2</sup>${NB}${th}`)} = ${sin(`2${th}`)}.<br>So ${y} = ${SIN_INV}(${sin(`2${th}`)}).`,
          `${SIN_INV}(${sin(`2${th}`)}) = 2${th} only when 2${th} ∈ ${HALF_PI_C}, i.e. ${th} ∈ ${iv(`−${P4}`, P4, '[', ']')} ⇒ ${x} ∈ ${iv('−1', '1', '[', ']')}.`,
          `For ${x} ∈ ${iv('−1', '1', '[', ']')}, ${y} = 2${NB}${TAN_INV}${NB}${x}, so ${yp} = ${F2_1P}.`,
          `For ${rel(x, '>', '1')}, 2${th} ∈ ${iv(P2, 'π')}, so ${SIN_INV}(${sin(`2${th}`)}) = π − 2${th} = π − 2${NB}${TAN_INV}${NB}${x}, derivative −${F2_1P}.`,
          `For ${rel(x, '<', '−1')}: 2${th} ∈ ${iv('−π', `−${P2}`)}, so ${SIN_INV}(${sin(`2${th}`)}) = −π − 2${th} = −π − 2${NB}${TAN_INV}${NB}${x}, giving derivative −${F2_1P}.`,
        ],
        ans: `${yp} = ${F2_1P} for ${abs(x)}${NB}<${NB}1, and ${yp} = −${F2_1P} for ${abs(x)}${NB}>${NB}1. At ${x} = ±1 the derivative does not exist (corner: the one-sided slopes are 1 and −1).`,
      },
      {
        t: 'ex',
        tag: 'Archetype 5: Logarithmic Differentiation (Variable Exponent or Complicated Product)',
        q: `<b>What it looks like:</b><br>${y} = ${x}<sup>${x}</sup>, ${y} = (${sin(x)})<sup>tan${NB}${x}</sup>, ${y} = ${fr(`(${x} − 1)(${x} − 2)`, `(${x} − 3)(${x} − 4)`)}, ${y} = ${x}<sup>sin${NB}${x}</sup>.<br>Examples: 14 papers cited (JEE 8, Main 4, Adv 2).<br><b>Method:</b><br>1. Take ln of both sides (use | ⋅ | if base can be negative).<br>2. Use log laws to convert powers to products, products to sums.<br>3. Differentiate implicitly: ${fr('1', y)}${yp} = (derivative of RHS).<br>4. Multiply by ${y} and substitute back the original ${y}.<br><b>Shortcut for ${u}<sup>${v}</sup>:</b> ${D}(${u}<sup>${v}</sup>) = ${u}<sup>${v}</sup>(${v}′${NB}${ln(u)} + ${v}${fr(`${u}′`, u)}) (exponential piece + power piece).<br><br><b>Worked Example (in the style of Main / JEE):</b><br>Differentiate ${y} = (${tan(x)})<sup>cot${NB}${x}</sup>.`,
        steps: [
          `${ln(y)} = ${cot(x)}${NB}ln(${tan(x)}).<br>Differentiate:<br>${fr(yp, y)} = −csc<sup>2</sup>${NB}${x}${NB}ln(${tan(x)}) + ${cot(x)} ⋅ ${fr(`sec<sup>2</sup>${NB}${x}`, tan(x))}.`,
          `${cot(x)} ⋅ ${fr(`sec<sup>2</sup>${NB}${x}`, tan(x))}<br>= ${cot(x)} ⋅ ${fr('1', `cos<sup>2</sup>${NB}${x}`)} ⋅ ${fr(cos(x), sin(x))}<br>= ${cot(x)} ⋅ ${fr('1', `${sin(x)}${NB}${cos(x)}`)}<br>= ${fr(cos(x), sin(x))} ⋅ ${fr('1', `${sin(x)}${NB}${cos(x)}`)}<br>= csc<sup>2</sup>${NB}${x}.`,
          `So ${fr(yp, y)} = csc<sup>2</sup>${NB}${x}(1 − ln${NB}${tan(x)}).<br>${yp} = (${tan(x)})<sup>cot${NB}${x}</sup>${NB}csc<sup>2</sup>${NB}${x}(1 − ln${NB}${tan(x)}).`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 6: Parametric Differentiation (First & Second Derivatives)',
        q: `<b>What it looks like:</b><br>${x} = ${of(f, t)}, ${y} = ${of(g, t)}. Find ${DYDX} and ${D2YDX2}. Classic trap:<br>${D2YDX2} ≠ ${D2YDT2} ÷ ${D2XDT2}.<br>Examples: 15 papers cited (JEE 8, Main 6, Adv 1).<br><b>Method:</b><br>1. ${DYDX} = ${DYDT} ÷ ${DXDT} (provided ${DXDT} ≠ 0). Simplify <b>fully</b> before substituting any value.<br>2. ${D2YDX2} = ${fr('d', `d${t}`)}(${DYDX}) ÷ ${DXDT}.<br>3. For “value at a point”, find the corresponding ${t} first, then substitute.<br><br><b>Worked Example (in the style of Main / JEE):</b><br>${x} = 2${NB}${sin(th)} − ${sin(`2${th}`)}, ${y} = 2${NB}${cos(th)} − ${cos(`2${th}`)}. Find ${D2YDX2} at ${th} = π.`,
        steps: [
          `${DXDTH} = 2${NB}${cos(th)} − 2${NB}${cos(`2${th}`)}, ${DYDTH} = −2${NB}${sin(th)} + 2${NB}${sin(`2${th}`)}.<br>${DYDX} = ${fr(`${sin(`2${th}`)} − ${sin(th)}`, `${cos(th)} − ${cos(`2${th}`)}`)}.`,
          `Sum-to-product: ${sin(`2${th}`)} − ${sin(th)} = 2${NB}cos${NB}${TH3_2}${NB}sin${NB}${TH_2} and ${cos(th)} − ${cos(`2${th}`)} = 2${NB}sin${NB}${TH3_2}${NB}sin${NB}${TH_2}, so the factors 2${NB}sin${NB}${TH_2} cancel and<br>${DYDX} = cot${NB}${TH3_2}.`,
          `At ${th} = π: ${DYDX} = cot${NB}${fr('3π', '2')} = 0.`,
          `For the second derivative, differentiate the slope with respect to ${th} and divide by ${DXDTH}:<br>${DTH}(${DYDX}) = −${fr('3', '2')}${NB}csc<sup>2</sup>${NB}${TH3_2},<br>which equals −${fr('3', '2')} at ${th} = π, while ${DXDTH}${AT_PI} = −2 − 2 = −4. Hence<br>${D2YDX2}${AT_PI} = (−${fr('3', '2')}) ÷ (−4) = ${fr('3', '8')}.`,
          `<b>Answer:</b> ${DYDX}${AT_PI} = 0 and ${D2YDX2}${AT_PI} = ${fr('3', '8')}. Note the trap in action: ${D2YDTH2}${AT_PI} = 6 and ${D2XDTH2}${AT_PI} = 0, so the naive ratio ${D2YDTH2} ÷ ${D2XDTH2} does not even exist here: the slope-first quotient of the Method box is indispensable.`,
          `<b>Worked Example (JEE):</b><br>If ${x} = ${sin(t)}, ${y} = ${sin(PT)}, prove<br>(1 − ${X2})${D2YDX2} − ${x}${DYDX} + ${sq(p)}${y} = 0.`,
          `<b>Solution:</b><br>${DXDT} = ${cos(t)}, ${DYDT} = ${p}${NB}${cos(PT)}.<br>${DYDX} = ${fr(`${p}${NB}${cos(PT)}`, cos(t))}.`,
          `${fr('d', `d${t}`)}(${DYDX})<br>= ${p} ⋅ ${fr(`(−${p}${NB}${sin(PT)})${NB}${cos(t)} − ${cos(PT)}(−${sin(t)})`, `cos<sup>2</sup>${NB}${t}`)}<br>= ${fr(NUM2011, `cos<sup>2</sup>${NB}${t}`)}.`,
          `${D2YDX2} = ${fr('1', cos(t))} ⋅ ${fr(NUM2011, `cos<sup>2</sup>${NB}${t}`)}<br>= ${fr(NUM2011, `cos<sup>3</sup>${NB}${t}`)}.`,
          `Now 1 − ${X2} = cos<sup>2</sup>${NB}${t}.<br>(1 − ${X2})${ypp} = cos<sup>2</sup>${NB}${t} ⋅ ${fr(NUM2011, `cos<sup>3</sup>${NB}${t}`)}<br>= ${fr(NUM2011, cos(t))}.`,
          `−${x}${yp} = −${sin(t)} ⋅ ${fr(`${p}${NB}${cos(PT)}`, cos(t))} = ${fr(`−${p}${NB}${sin(t)}${NB}${cos(PT)}`, cos(t))}.`,
          `Adding: (1 − ${X2})${ypp} − ${x}${yp} = ${fr(`−${sq(p)}${NB}${sin(PT)}${NB}${cos(t)}`, cos(t))}<br>= −${sq(p)}${NB}${sin(PT)} = −${sq(p)}${y}.<br>Hence (1 − ${X2})${ypp} − ${x}${yp} + ${sq(p)}${y} = 0. ■`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 7: Mean Value Theorems (Rolle’s / Lagrange) for Existence, Inequalities, Root Bounding',
        q: `<b>What it looks like:</b><br>• “Verify Rolle’s/Lagrange’s theorem for ${fx} = ... on ${iv(a, b, '[', ']')} and find ${c}.”<br>• “Using MVT, prove ${fr(`${b} − ${a}`, b)} < ${ln(fr(b, a))} < ${fr(`${b} − ${a}`, a)} for 0 < ${a} < ${b}.”<br>• “If ${fp(x)} ≠ 0 on ${iv(a, b)}, how many roots can ${f} have?”<br>Examples: 20 papers cited (JEE 11, Main 7, Adv 2).<br><b>Method:</b><br>• <b>Verification:</b> Check hypotheses (continuity on ${iv(a, b, '[', ']')}, differentiability on ${iv(a, b)}, ${of(f, a)} = ${of(f, b)} for Rolle). Then solve ${fp(c)} = 0 or ${fp(c)} = ${fr(`${of(f, b)} − ${of(f, a)}`, `${b} − ${a}`)} and confirm ${c} ∈ ${iv(a, b)}.<br>• <b>Inequality proofs:</b> Choose ${f} such that ${fp(c)} is the quantity to bound. Use ${a} < ${c} < ${b} to squeeze ${fp(c)}.<br>• <b>Root bounding:</b> If ${f} has two distinct roots, Rolle gives a point where ${f}′ = 0. Contrapositive: if ${f}′ ≠ 0, at most one root.<br><br><b>Worked Example (in the style of Adv / Main):</b><br>Using Lagrange’s Mean Value Theorem, prove that for 0 < ${a} < ${b},<br>${fr(`${b} − ${a}`, b)} < ${ln(fr(b, a))} < ${fr(`${b} − ${a}`, a)}.`,
        steps: [
          `Apply MVT to ${fx} = ${ln(x)} on ${iv(a, b, '[', ']')}. ${f} is continuous on ${iv(a, b, '[', ']')}, differentiable on ${iv(a, b)}.<br>∃${c} ∈ ${iv(a, b)} such that ${fp(c)} = ${fr(`${ln(b)} − ${ln(a)}`, `${b} − ${a}`)}.`,
          `${fp(c)} = ${fr('1', c)}. Since ${a} < ${c} < ${b}, we have ${fr('1', b)} < ${fr('1', c)} < ${fr('1', a)}.<br>Thus ${fr('1', b)} < ${fr(`${ln(b)} − ${ln(a)}`, `${b} − ${a}`)} < ${fr('1', a)}.`,
          `Multiply by ${b} − ${a} > 0:<br>${fr(`${b} − ${a}`, b)} < ${ln(fr(b, a))} < ${fr(`${b} − ${a}`, a)}. ■`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Traps: the mistakes JEE questions are built to punish' },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'Description', 'Typical Distractor'],
        rows: [
          ['<b>Reversed arrow</b>', 'Believing “continuous ⇒ differentiable”.', `${abs(x)} at 0 is the eternal counterexample.`],
          [
            '<b>Skipping continuity check</b>',
            'Jumping to LHD/RHD without verifying continuity first. If discontinuous, differentiability is impossible, but computing LHD/RHD may misleadingly give finite numbers.',
            'Piecewise function with a jump; student computes derivatives of both pieces and equates them, missing the discontinuity.',
          ],
          [
            '<b>Miscounting modulus corners</b>',
            `Treating ${abs(gx)} as a corner at every zero of ${g}, ignoring that a corner needs ${gp(c)} ≠ 0. Also counting the vertex of ${g} (e.g. ${rel(x, '=', '0')} for ${abs(`${X2} − 4`)}) as a corner.`,
            `${abs(`${X2} − 4`)} has corners at ${x} = ±2 only, not at ${rel(x, '=', '0')}.`,
          ],
          [
            '<b>Endpoint overcounting</b>',
            `Including endpoints of an open interval ${iv(a, b)} when counting discontinuities/kinks.`,
            `“Discontinuous in ${iv('0', '3')}” → integers are 1,2 only (not 0,3).`,
          ],
          [
            '<b>Dropping the chain factor in implicit differentiation</b>',
            `Writing ${D}(${sq(y)}) = 2${y} instead of 2${y}${DYDX}.`,
            `The differentiated equation has a ${y}-term but no ${DYDX}: instant red flag.`,
          ],
          [
            '<b>Ignoring principal range in inverse-trig substitution</b>',
            `Writing ${SIN_INV}(${sin(`2${th}`)}) = 2${th} for all ${th}, missing that the identity holds only when 2${th} ∈ ${HALF_PI_C}. This flips the sign of the derivative on part of the domain. (For ${TAN_INV}(${tan(`2${th}`)}) the correction is only a constant ±π, which leaves the derivative unchanged.)`,
            `${SIN_INV}(2${x}${R1MX2}) has derivative ${fr('2', R1MX2)} only for ${abs(x)}${NB}<${NB}${IR2}; for ${IR2} < ${abs(x)} < 1 it is −${fr('2', R1MX2)}.`,
          ],
          [
            `<b>Half-rule on ${u}<sup>${v}</sup></b>`,
            `Differentiating ${x}<sup>${x}</sup> as either ${x}<sup>${x}</sup>${NB}${ln(x)} (exponential piece only) or ${x} ⋅ ${x}<sup>${x}−1</sup> (power piece only). The correct derivative is the sum.`,
            'Options often include the two half-answers.',
          ],
          [
            '<b>Parametric second-derivative ratio</b>',
            `Using ${D2YDX2} = ${D2YDT2} ÷ ${D2XDT2} (cancelling d${t}’s incorrectly).`,
            `This yields 3${t} for the curve ${x} = ${sq(t)}, ${y} = ${t}<sup>3</sup>, where the true second derivative is ${fr('3', `4${t}`)}.`,
          ],
          [
            '<b>Applying MVT/Rolle without checking hypotheses</b>',
            `Using the theorem on functions with corners, cusps, or discontinuities inside the interval (e.g. ${abs(x)} on ${iv('−1', '1', '[', ']')}).`,
            'The equal-endpoints condition holds but differentiability fails → conclusion not guaranteed.',
          ],
          [
            '<b>Confusing Rolle with Lagrange</b>',
            `Using ${fp(c)} = 0 when ${of(f, a)} ≠ ${of(f, b)}.`,
            `Lagrange gives ${fp(c)} = ${fr(`${of(f, b)} − ${of(f, a)}`, `${b} − ${a}`)}; Rolle is the special case ${of(f, a)} = ${of(f, b)}.`,
          ],
        ],
      },

      { t: 'part', title: 'Graded practice set (8 questions, ascending difficulty)' },
      { t: 'p', html: 'These eight questions are modelled on recurring JEE patterns.' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[Easy – Continuity with parameter]</b> Find ${k} so that<br>${PIECE(`${k}${x} + 3`, rel(x, '≤', '2'))}<br>${PIECE(`${X2} − 1`, rel(x, '>', '2'))}<br>is continuous at ${rel(x, '=', '2')}.`,
            a: `${of(f, '2')} = 2${k} + 3. LHL = 2${k} + 3. RHL = ${lim(`${x}→2<sup>+</sup>`)}${NB}(${X2} − 1) = 3.<br>Continuity ⇒ 2${k} + 3 = 3 ⇒ ${k} = 0.`,
          },
          {
            q: `<b>[Easy – Differentiability of max/min function]</b> Let ${fx} = max{${x},${NB}${X2}}. Find the set of points where ${f} is not differentiable.`,
            a: `${fx} = ${X2} for ${rel(x, '≤', '0')} and ${rel(x, '≥', '1')}; ${fx} = ${x} for 0 ≤ ${x} ≤ 1.<br>Corners at ${rel(x, '=', '0')} (slope 0 from left, 1 from right) and ${rel(x, '=', '1')} (slope 1 from left, 2 from right).<br>Set: {0,${NB}1}.`,
          },
          {
            q: `<b>[Medium – Greatest integer discontinuities]</b> ${fx} = ${GI(X2)}${NB}${SINPX}. Number of points of discontinuity in ${iv('−2', '3')}?`,
            a: `8 (at ${x} = ${JUMPS}).<br>Reasoning: ${GI(X2)} jumps at ${x} = ±√${n}. In ${iv('−2', '3')} the non-integer jump points are ${JUMPS}, where ${SINPX} ≠ 0, so the jumps survive. At the integer candidates ${x} = −1, 1, 2 the factor ${SINPX} = 0 sends both one-sided limits of the product to 0, the value of ${f} there, so ${f} is continuous there; ${rel(x, '=', '0')} is a minimum-touch (no jump at all), and ${x} = −2, 3 are excluded endpoints.`,
          },
          {
            q: `<b>[Medium – Inverse trig substitution]</b> Differentiate ${y} = ${TAN_INV}${NB}${F2X_1M} for ${abs(x)}${NB}<${NB}1. State the derivative for ${abs(x)}${NB}>${NB}1.`,
            a: `For ${abs(x)}${NB}<${NB}1: ${x} = ${tan(th)}, ${th} ∈ ${iv(`−${P4}`, P4)} ⇒ ${F2X_1M} = ${tan(`2${th}`)}.<br>${y} = 2${th} = 2${NB}${TAN_INV}${NB}${x} ⇒ ${yp} = ${F2_1P}.<br>For ${rel(x, '>', '1')}: 2${th} ∈ ${iv(P2, 'π')}, so ${TAN_INV}(${tan(`2${th}`)}) = 2${th} − π and ${y} = 2${NB}${TAN_INV}${NB}${x} − π ⇒ ${yp} = ${F2_1P}.<br>For ${rel(x, '<', '−1')}: 2${th} ∈ ${iv('−π', `−${P2}`)}, so ${TAN_INV}(${tan(`2${th}`)}) = 2${th} + π and ${y} = 2${NB}${TAN_INV}${NB}${x} + π ⇒ ${yp} = ${F2_1P}.<br>So ${yp} = ${F2_1P} for every ${x} ≠ ±1: the extra ±π is a constant, unlike the ${SIN_INV}(${sin(`2${th}`)}) case of Archetype 4, where the sign flips. (Check at ${x} = √3: ${y} = ${TAN_INV}(−√3) = −${fr('π', '3')} = 2 ⋅ ${fr('π', '3')} − π.)`,
          },
          {
            q: `<b>[Medium – Logarithmic differentiation]</b> Differentiate ${y} = ${x}<sup>sin${NB}${x}</sup> (${rel(x, '>', '0')}).`,
            a: `${ln(y)} = ${sin(x)}${NB}${ln(x)}.<br>${fr(yp, y)} = ${cos(x)}${NB}${ln(x)} + ${fr(sin(x), x)}.<br>${yp} = ${x}<sup>sin${NB}${x}</sup>(${cos(x)}${NB}${ln(x)} + ${fr(sin(x), x)}).`,
          },
          {
            q: `<b>[Hard – Parametric second derivative]</b> ${x} = ${a}(${th} − ${sin(th)}), ${y} = ${a}(1 − ${cos(th)}). Find ${D2YDX2}.`,
            a: `${DXDTH} = ${a}(1 − ${cos(th)}), ${DYDTH} = ${a}${NB}${sin(th)}.<br>${DYDX} = ${fr(sin(th), `1 − ${cos(th)}`)} = cot${NB}${TH_2}.<br>${DTH}(${DYDX}) = −${H2}${NB}csc<sup>2</sup>${NB}${TH_2}.<br>${D2YDX2} = (−${H2}${NB}csc<sup>2</sup>${NB}${TH_2}) ÷ [${a}(1 − ${cos(th)})]<br>= (−${H2}${NB}csc<sup>2</sup>${NB}${TH_2}) ÷ (${a} ⋅ 2${NB}sin<sup>2</sup>${NB}${TH_2})<br>= −${fr('1', `4${a}`)}${NB}csc<sup>4</sup>${NB}${TH_2}.`,
          },
          {
            q: `<b>[Hard – MVT inequality]</b> Let ${fx} = e<sup>${x}</sup>. Use Lagrange’s MVT on ${iv('0', x, '[', ']')} (${rel(x, '>', '0')}) to prove e<sup>${x}</sup> > 1 + ${x}.`,
            a: `${f} continuous on ${iv('0', x, '[', ']')}, differentiable on ${iv('0', x)}.<br>∃${c} ∈ ${iv('0', x)} : ${fp(c)} = ${fr(`e<sup>${x}</sup> − 1`, x)}.<br>${fp(c)} = e<sup>${c}</sup>. Since ${rel(c, '>', '0')}, e<sup>${c}</sup> > 1.<br>Thus ${fr(`e<sup>${x}</sup> − 1`, x)} > 1 ⇒ e<sup>${x}</sup> − 1 > ${x} ⇒ e<sup>${x}</sup> > 1 + ${x}.`,
          },
          {
            q: `<b>[Advanced – Functional equation + differentiability]</b> ${f} : ℝ → ℝ satisfies ${of(f, `${x} + ${y}`)} = ${fx} + ${fy} for all ${x},${NB}${y}. ${f} is differentiable at 0 with ${fp('0')} = 3. Find ${fx} and ${fp('5')}.`,
            a: `${of(f, '0')} = 0. Differentiate both sides with respect to ${y} at ${rel(y, '=', '0')} (the right side is differentiable there, so the left side is too): ${fp(x)} = ${fp('0')} = 3.<br>So ${fx} = 3${x} + ${C}. ${of(f, '0')} = 0 ⇒ ${C} = 0. Thus ${fx} = 3${x}, ${fp('5')} = 3.`,
          },
        ],
      },

      { t: 'part', title: 'Where to focus your practice' },
      {
        t: 'p',
        html: `1. <b>Functional equations</b> (Cauchy, exponential, trigonometric) appear repeatedly in JEE (four papers cited). Practise using differentiation, or continuity at a single point, to pin down ${f}: Additional topic C supplies the machinery.<br>2. <b>Inverse-trigonometric substitution.</b> Always state the range of ${th} for which the double-angle identity holds; JEE Advanced routinely penalises answers that ignore the piecewise nature of the derivative ${ESTIMATE}.<br>3. <b>Parametric second derivative.</b> Drill the rhythm “slope → differentiate with respect to the parameter → divide by ${DXDTH}”, and keep the trap ${D2YDX2} ≠ ${D2YDT2} ÷ ${D2XDT2} in mind.<br>4. <b>MVT as an inequality tool.</b> Practise choosing the right ${f} and interval so that ${fp(c)} is exactly the quantity you need to bound (Additional topic D and Archetype 7).`,
      },
    ],
  },
];
