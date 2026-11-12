import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Topic 08: the Additional Topics part's "Subtopic 08: Pair of
 * Straight Lines" (pp. 876–894) of the Class 11 Mathematics Master Reference
 * (October 2026 edition), word for word. Chapter 10 starts on p. 895.
 * The Exam Relevance box is the "Exam relevance" part; Sections 1–8 are the next
 * parts, titled from the section's own name in sentence case.
 * Drawings: the part's own "Figure 2" (p. 878, three regimes) is m11-09-08-d1 and
 * its "Figure 3" (p. 884, homogenising a chord) is m11-09-08-d2. The book's 3 × 3
 * determinant Δ is written as its printed expansion (the reader cannot draw a
 * determinant). Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const sb = (b: string, s: string) => `<i>${b}</i><sub>${s}</sub>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const a = I('a');
const b = I('b');
const c = I('c');
const f = I('f');
const g = I('g');
const h = I('h');
const k = I('k');
const m = I('m');
const n = I('n');
const p = I('p');
const q = I('q');
const t = I('t');
const u = I('u');
const x = I('x');
const y = I('y');
const A = I('A');
const B = I('B');
const H = I('H');
const O = I('O');
const P = I('P');
const Q = I('Q');
const S = I('S');
const X = I('X');
const Y = I('Y');
const lam = I('λ');
const al = I('α');
const be = I('β');
const th = I('θ');
const x2 = sq(x);
const y2 = sq(y);
const X2 = sq(X);
const Y2 = sq(Y);
const h2 = sq(h);
const c2 = sq(c);
const m1 = sb('m', '1');
const m2 = sb('m', '2');
const x0 = sb('x', '0');
const y0 = sb('y', '0');
const x1 = sb('x', '1');
const y1 = sb('y', '1');
const TAN = `tan${NB}`;
const ATAN = `tan<sup>−1</sup>${NB}`;
const HALF = fr('1', '2');
const DEG = '°';

const HOM = `<i>ax</i><sup>2</sup> + 2<i>hxy</i> + <i>by</i><sup>2</sup>`;
const HOM0 = `${HOM} = 0`;
const GEN = `${HOM} + 2<i>gx</i> + 2<i>fy</i> + ${c}`;
const GEN0 = `${GEN} = 0`;
const SLOPEQ = `<i>bm</i><sup>2</sup> + 2<i>hm</i> + ${a} = 0`;
const AB = '<i>ab</i>';
const H2AB = `${h2} − ${AB}`;
const ROOT = `√(${H2AB})`;
const TANF = `|${fr(`2${ROOT}`, `${a} + ${b}`)}|`;
const SINF = fr(`2${ROOT}`, `√((${a} − ${b})<sup>2</sup> + 4${h2})`);
const DELTA = `<i>abc</i> + 2<i>fgh</i> − <i>af</i><sup>2</sup> − <i>bg</i><sup>2</sup> − <i>ch</i><sup>2</sup>`;
const ABH = `${AB} − ${h2}`;
const PX = fr(`<i>hf</i> − <i>bg</i>`, ABH);
const PY = fr(`<i>gh</i> − <i>af</i>`, ABH);
const PT = `(${PX}, ${PY})`;
const SUMM = `${m1} + ${m2} = −${fr(`2${h}`, b)}`;
const PRODM = `${m1}${m2} = ${fr(a, b)}`;
const BIS = `${fr(`${x2} − ${y2}`, `${a} − ${b}`)} = ${fr('<i>xy</i>', h)}`;
const BIS2 = `<i>hx</i><sup>2</sup> − (${a} − ${b})<i>xy</i> − <i>hy</i><sup>2</sup> = 0`;
const SHIFTBIS = `${fr(`(${x} − ${al})<sup>2</sup> − (${y} − ${be})<sup>2</sup>`, `${a} − ${b}`)} = ${fr(`(${x} − ${al})(${y} − ${be})`, h)}`;
const PERP = `<i>bx</i><sup>2</sup> − 2<i>hxy</i> + <i>ay</i><sup>2</sup> = 0`;
const LM = '<i>lx</i> + <i>my</i>';
const LMN = `${LM} + ${n}`;
const U = fr(LM, `−${n}`);
const DIST_G = `2√(${fr(`${sq(g)} − <i>ac</i>`, `${a}(${a} + ${b})`)})`;
const DIST_F = `2√(${fr(`${sq(f)} − <i>bc</i>`, `${b}(${a} + ${b})`)})`;
const PRODP = fr(
  `|<i>ax</i><sub>1</sub><sup>2</sup> + 2<i>hx</i><sub>1</sub><i>y</i><sub>1</sub> + <i>by</i><sub>1</sub><sup>2</sup>|`,
  `√((${a} − ${b})<sup>2</sup> + 4${h2})`,
);
const AREA = fr(`${sq(n)}${ROOT}`, `|<i>am</i><sup>2</sup> − 2<i>hlm</i> + <i>bl</i><sup>2</sup>|`);
const DSX = fr(`∂${S}`, `∂${x}`);
const DSY = fr(`∂${S}`, `∂${y}`);
const P_X1 = `(${x1},${NB}${y1})`;
const AB_PT = `(${al},${NB}${be})`;
const HALF_H = `${h} = half the coefficient of <i>xy</i>`;
const HALF_G = `${g} = half the coefficient of ${x}`;
const HALF_F = `${f} = half the coefficient of ${y}`;
const F4 = (s: string) => fr(s, '4');
const F2 = (s: string) => fr(s, '2');

export const TOPICS: Topic[] = [
  // ──────────────── Topic 08 · pp. 876–894 ────────────────
  {
    n: '08',
    title: 'Pair of Straight Lines',
    kalam: 'One second-degree equation can carry two straight lines, and factorising is how you get them back.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This topic is <b>optional for a Boards-only reader</b>: it appears nowhere in NCERT Class 11 Chapter 9, and CBSE does not set it. It is included because every major JEE reference carries it at Class 11 level and because JEE has examined it: a single second-degree equation that secretly holds two lines is a compact way to ask four chapter skills at once (slopes, angle, bisectors, intersection), which is exactly what a JEE Main single-answer question wants. JEE Main asks the standard three (is this equation a pair, what is the angle between the lines, what is ${lam}) and JEE Advanced pushes into <b>homogenisation</b>, where a line and a curve are fused into one homogeneous equation so that a right angle at the origin becomes the one-line condition ${a} + ${b} = 0 ${ESTIMATE}. As always in mathematics, NEET does not test any of this: NEET has no mathematics paper.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `A patwari recording a village crossroads has two boundary walls to enter in the register, and only one line of the ledger. So he multiplies. If the first wall is 3${x} − 2${y} = 0 and the second is 2${x} + 3${y} = 0, he writes their product, (3${x} − 2${y})(2${x} + 3${y}) = 0, and expands it to 6${x2} + 5<i>xy</i> − 6${y2} = 0. Nothing has been lost. A product is zero exactly when one of its factors is zero, so a point satisfies the single recorded equation precisely when it lies on one wall or the other. <b>One second-degree equation can carry two straight lines, and factorising is how you get them back.</b>`,
      },
      {
        t: 'p',
        html: 'That is the entire idea, and everything in this topic is a consequence of it. The second-degree equation is called the <b>joint equation</b> or <b>combined equation</b> of the pair. Reading it forwards (two lines to one equation) is multiplication. Reading it backwards (one equation to two lines) is factorisation, and the reason this topic has a theory at all is that most of the questions can be answered without factorising, straight from the coefficients.',
      },
      {
        t: 'p',
        html: `Now specialise. Suppose both walls pass through the origin, so neither equation has a constant term. Then their product has no constant term and no ${x} or ${y} term either: every surviving term is second degree. That is a <b>homogeneous</b> equation,<br>${HOM0},<br>and the converse is the useful half: every such equation is a pair of lines through the origin. Here is why, without any algebra. If the point (${x0},${NB}${y0}) satisfies it, then so does (<i>tx</i><sub>0</sub>,${NB}<i>ty</i><sub>0</sub>) for every real ${t}, because replacing ${x}, ${y} by <i>tx</i>, <i>ty</i> multiplies the whole left side by ${sq(t)}, and ${sq(t)}${NB}·${NB}0 = 0. So the graph is made of full straight lines through the origin. Being second degree, it can hold at most two of them.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way.</b> Put ${y} = <i>mx</i> into the homogeneous equation and cancel ${x2}:<br>${SLOPEQ}.<br>The two lines of the pair are the two roots of one ordinary quadratic in the slope. The formulas of A to C in the Key formulas and definitions part are then just Vieta’s sum and product wearing coordinate-geometry clothes, and the discriminant of this quadratic, 4${h2} − 4${AB}, is what decides whether the lines exist at all.`,
      },
      {
        t: 'p',
        html: `<b>Where the idea breaks down.</b> Two places, and both are examined.<br>• If ${h2} < ${AB} the slope quadratic has no real root. The equation still has a graph, but the graph is the single point (0,\u00a00): the “two lines” are a conjugate pair of imaginary lines. The standard specimen is ${x2} + ${y2} = 0. Do not say “no solution”; say <b>the origin only</b>.<br>• A general second-degree equation with linear terms, ${GEN0}, is normally a conic: a circle, parabola, ellipse or hyperbola (Chapter 10, Conic Sections). It collapses into a pair of lines only for special coefficient values, and the price of that collapse is one exact equation, the determinant condition of the Key formulas and definitions part. A pair of lines is a <b>degenerate conic</b>: a hyperbola whose waist has been pinched shut until the two branches touch and straighten into their own asymptotes.`,
      },
      { t: 'fig', id: 'm11-09-08-d1' },
      {
        t: 'p',
        html: `<b>Domain of Validity and Edge Cases.</b><br>• ${h} is <b>half</b> the coefficient of <i>xy</i>, ${g} is half the coefficient of ${x}, and ${f} is half the coefficient of ${y}. The standard form is written with the 2s precisely so that the formulas come out clean; the cost is that you must halve on the way in. This is the single largest source of lost marks in the topic.<br>• ${SUMM} and ${PRODM} need ${b}${NB}≠${NB}0. If ${b} = 0, the equation is ${x}(<i>ax</i> + 2<i>hy</i>) = 0: one of the lines is the ${y}-axis ${x} = 0, which has no slope, and the sum-and-product formulas are meaningless. Read the factorisation off directly instead.<br>• The angle formula returns the <b>acute</b> angle when you take the modulus. If ${a} + ${b} = 0 the tangent is infinite; that is not an error, it is ${th} = 90${DEG}.<br>• The determinant condition Δ = 0 is necessary and sufficient for degeneracy, not for two real lines. You must still check ${h2} ≥ ${AB}. Both ${x2} + ${y2} = 0 and ${x2} + 4${y2} = 0 satisfy Δ = 0 and are single points. For a parallel pair (${h2} = ${AB}) check also ${sq(g)} ≥ <i>ac</i> and ${sq(f)} ≥ <i>bc</i>: ${x2} + 1 = 0 has Δ = 0 and ${h2} = ${AB} but no real points.<br>• Homogenisation requires the line <b>not</b> to pass through the origin. If it does, the origin is itself one of the intersection points and “the lines joining the origin to the intersections” is not a well-posed question.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: 'Throughout, the general second-degree equation is written' },
      {
        t: 'formula',
        kicker: 'The general second-degree equation',
        main: `${S} ≡ ${GEN0}`,
        legend: [`${a} = the coefficient of ${x2}`, `${b} = the coefficient of ${y2}`, `${c} = the constant term`, HALF_H, HALF_G, HALF_F],
        note: null,
      },
      {
        t: 'p',
        html: `<b>A. The homogeneous pair</b> ${HOM0}: two lines through the origin, ${y} = ${m1}${x} and ${y} = ${m2}${x}, where ${m1}, ${m2} are the roots of ${SLOPEQ}.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Formula', 'Conditions'],
        rows: [
          ['Sum of slopes', SUMM, `${b}${NB}≠${NB}0`],
          ['Product of slopes', PRODM, `${b}${NB}≠${NB}0`],
          ['Difference of slopes', `|${m1} − ${m2}| = ${fr(`2${ROOT}`, `|${b}|`)}`, `${b}${NB}≠${NB}0, ${h2} ≥ ${AB}`],
          ['Nature: real and distinct', `${h2} > ${AB}`, '–'],
          ['Nature: real and coincident', `${h2} = ${AB} (then ${HOM} is a perfect square)`, '–'],
          ['Nature: not real', `${h2} < ${AB}: the graph is the origin alone`, '–'],
        ],
      },
      { t: 'p', html: `<b>B. Angle between the pair.</b> If ${th} is the angle between the two lines,` },
      {
        t: 'formula',
        kicker: 'Angle between the pair',
        main: `${TAN}${th} = ${TANF}<br>sin${NB}${th} = ${SINF}`,
        legend: [`${th} = the angle between the two lines`, `${a}, ${b} = the coefficients of ${x2} and ${y2}`, HALF_H],
        note: null,
      },
      {
        t: 'table',
        title: null,
        head: ['Special case', 'Condition', 'Why'],
        rows: [
          ['Lines perpendicular', `${a} + ${b} = 0, i.e. coeff. of ${x2} + coeff. of ${y2} = 0`, `${TAN}${th} → ∞`],
          ['Lines coincident', `${h2} = ${AB}`, `${TAN}${th} = 0`],
          ['Lines equally inclined to the axes', `${h} = 0 (${m1} = −${m2})`, 'bisectors become <i>xy</i> = 0'],
          [`Lines symmetric about ${y} = ${x} and ${y} = −${x}`, `${a} = ${b} (${m1}${m2} = 1)`, `bisectors become ${x2} − ${y2} = 0`],
        ],
      },
      {
        t: 'p',
        html: `Any pair of perpendicular lines through the origin can therefore be written ${x2} + <i>λxy</i> − ${y2} = 0 for some ${lam}. And the pair <b>perpendicular</b> to ${HOM0}, drawn through the origin, is`,
      },
      {
        t: 'formula',
        kicker: `The pair through the origin perpendicular to ${HOM0}`,
        main: PERP,
        legend: [`${a}, ${b} = the coefficients of ${x2} and ${y2}`, HALF_H],
        note: `(swap ${a} and ${b}, flip the sign of ${h}).`,
      },
      {
        t: 'p',
        html: `<b>C. Bisectors of the angles between the pair.</b> For ${HOM0} the joint equation of the two angle bisectors is`,
      },
      {
        t: 'formula',
        kicker: `Bisectors of the angles between the pair ${HOM0}`,
        main: `${BIS}<br>i.e. ${BIS2}`,
        legend: [`${a}, ${b} = the coefficients of ${x2} and ${y2}`, HALF_H],
        note: null,
      },
      {
        t: 'p',
        html: `Read the second form: its ${x2} coefficient is ${h} and its ${y2} coefficient is −${h}, which sum to zero. <b>The bisectors of any pair are always perpendicular to each other</b> (the one exception, ${a}(${x2} + ${y2}) = 0, has none): the same structural fact Topic 05 proved for two separately-written lines, now visible in a single glance at the coefficients. Two degenerate readings, taken from the cross-multiplied form so that nothing is divided by zero:<br>• If ${a} = ${b} (the pair is symmetric about ${y} = ${x} and ${y} = −${x}, since ${m1}${m2} = 1), the bisectors are ${x2} − ${y2} = 0, i.e. ${y} = ${x} and ${y} = −${x}.<br>• If ${h} = 0 (the pair is equally inclined to the axes, since ${m1} = −${m2}), the bisectors are <i>xy</i> = 0, i.e. the coordinate axes themselves.`,
      },
      {
        t: 'p',
        html: `<b>D. The general equation as a pair.</b> ${GEN0} represents a pair of straight lines (real or imaginary) <b>if and only if</b>`,
      },
      {
        t: 'formula',
        kicker: 'The general equation as a pair',
        main: `Δ ≡ ${DELTA} = 0<br>real lines: ${h2} ≥ ${AB} (if ${h2} = ${AB}, also ${sq(g)} ≥ <i>ac</i>, ${sq(f)} ≥ <i>bc</i>)`,
        legend: [`${a}, ${b} = the coefficients of ${x2} and ${y2}`, `${c} = the constant term`, HALF_H, HALF_G, HALF_F],
        note: null,
      },
      { t: 'p', html: `and the pair is real when ${h2} > ${AB}, or when ${h2} = ${AB} with ${sq(g)} ≥ <i>ac</i> and ${sq(f)} ≥ <i>bc</i> (${x2} + 1 = 0 has Δ = 0 and ${h2} = ${AB} but no real points).` },
      {
        t: 'defgrid',
        title: 'Given Δ = 0',
        rows: [
          { k: 'Point of intersection', v: `${PT}, valid when ${AB}${NB}≠${NB}${h2}` },
          { k: 'Angle between the lines', v: `the same ${TAN}${th} = ${TANF}; the linear terms do not affect direction` },
          { k: 'Lines parallel (or coincident)', v: `${h2} = ${AB}` },
          { k: 'Lines perpendicular', v: `${a} + ${b} = 0` },
          { k: 'Distance between a parallel pair', v: `${DIST_G}, or ${DIST_F}` },
          { k: 'Bisectors of the angles', v: `${SHIFTBIS}, where ${AB_PT} is the point of intersection` },
          { k: 'Pair through the origin parallel to it', v: HOM0 },
        ],
      },
      {
        t: 'p',
        html: `<b>E. Homogenisation.</b> If the line ${LMN} = 0 (with ${n}${NB}≠${NB}0) cuts the curve ${S} = 0 at ${P} and ${Q}, then the joint equation of <i>OP</i> and <i>OQ</i>, where ${O} is the origin, is`,
      },
      {
        t: 'formula',
        kicker: `Homogenisation: the pair <i>OP</i>, <i>OQ</i>`,
        main: `${HOM}<br>+ (2<i>gx</i> + 2<i>fy</i>)(${U})<br>+ ${c}(${U})<sup>2</sup> = 0`,
        legend: [
          `${a}, ${b} = the coefficients of ${x2} and ${y2}`,
          `${c} = the constant term`,
          `${h}, ${g}, ${f} = half the coefficients of <i>xy</i>, of ${x} and of ${y}`,
          `<i>l</i>, ${m}, ${n} = the coefficients of the line (${n} ≠ 0)`,
          `${P}, ${Q} = where the line meets ${S} = 0`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `which is homogeneous of degree two and therefore a pair through the origin. In practice: write the line as ${U} = 1, then multiply each term of ${S} by whatever power of that expression makes it second degree.`,
      },
      { t: 'p', html: '<b>F. Two further results worth carrying.</b>' },
      {
        t: 'formula',
        kicker: 'Product of the perpendicular distances',
        main: `from ${P_X1} to the pair ${HOM0}:<br>${PRODP}`,
        legend: [`${x1}, ${y1} = the coordinates of the point`, `${a}, ${b} = the coefficients of ${x2} and ${y2}`, HALF_H],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Area of the triangle formed by a pair and a line',
        main: `formed by ${HOM0} and ${LMN} = 0:<br>${AREA}`,
        legend: [`${a}, ${b} = the coefficients of ${x2} and ${y2}`, HALF_H, `<i>l</i>, ${m}, ${n} = the coefficients of the line`],
        note: null,
      },

      { t: 'part', title: 'Derivations and key procedures' },
      {
        t: 'proc',
        title: 'Derivation 1: A homogeneous second-degree equation is a pair of lines through the origin',
        steps: [
          `Start from ${HOM0} with ${b}${NB}≠${NB}0, and look for lines through the origin, which have the form ${y} = <i>mx</i>. <b>Reason:</b> the Concept intuition part showed the graph is a union of lines through ${O}, so this loses nothing except the vertical line, handled at step 6.`,
          `Substitute ${y} = <i>mx</i>:<br><i>ax</i><sup>2</sup> + 2<i>hmx</i><sup>2</sup> + <i>bm</i><sup>2</sup><i>x</i><sup>2</sup> = 0,<br>i.e. ${x2}(<i>bm</i><sup>2</sup> + 2<i>hm</i> + ${a}) = 0.`,
          `For the line ${y} = <i>mx</i> to lie in the graph, the bracket must vanish for all ${x}, so ${SLOPEQ}. <b>Reason:</b> ${x2} is not identically zero along the line.`,
          `This quadratic has roots ${m1}, ${m2} with, by Vieta,<br>${SUMM},<br>${PRODM}.`,
          `Therefore<br>${b}(${y} − ${m1}${x})(${y} − ${m2}${x})<br>= <i>by</i><sup>2</sup> − ${b}(${m1} + ${m2})<i>xy</i> + <i>bm</i><sub>1</sub>${m2}${x2}<br>= <i>by</i><sup>2</sup> + 2<i>hxy</i> + <i>ax</i><sup>2</sup>,<br>which is the original expression. <b>Reason:</b> substitute the two Vieta values. So the equation <b>is</b> the product of two line equations.`,
          `Roots exist and are distinct precisely when the discriminant 4${h2} − 4${AB} > 0; they coincide when ${h2} = ${AB}; they are non-real when ${h2} < ${AB}. If ${b} = 0 the quadratic degenerates to a linear equation and the missing second line is ${x} = 0.`,
        ],
      },
      {
        t: 'proc',
        title: 'Derivation 2: The angle between the pair',
        steps: [
          `Let the lines be ${y} = ${m1}${x} and ${y} = ${m2}${x}. From Topic 01, ${TAN}${th} = |${fr(`${m1} − ${m2}`, `1 + ${m1}${m2}`)}|.`,
          `Build (${m1} − ${m2})<sup>2</sup> = (${m1} + ${m2})<sup>2</sup> − 4${m1}${m2}<br>= ${fr(`4${h2}`, sq(b))} − ${fr(`4${a}`, b)}<br>= ${fr(`4(${H2AB})`, sq(b))},<br>so |${m1} − ${m2}| = ${fr(`2${ROOT}`, `|${b}|`)}.<br><b>Reason:</b> Vieta from Derivation 1.`,
          `Also 1 + ${m1}${m2} = 1 + ${fr(a, b)} = ${fr(`${a} + ${b}`, b)}.`,
          `Divide, multiplying the top and bottom by |${b}|:<br><br>${TAN}${th} = ${fr(`|${m1} − ${m2}|`, `|1 + ${m1}${m2}|`)} = ${TANF}.<br><br>The ${b} cancels entirely, which is why the formula still reads correctly in the limit ${b} → 0.`,
          `<b>Corollary (perpendicular).</b> ${th} = 90${DEG} ⟺ cot${NB}${th} = 0 ⟺ ${a} + ${b} = 0.`,
          `<b>Corollary (coincident).</b> ${th} = 0 ⟺ ${ROOT} = 0 ⟺ ${h2} = ${AB}.`,
        ],
      },
      {
        t: 'proc',
        title: 'Derivation 3: The bisector pair',
        steps: [
          `A point ${P}(${x}, ${y}) is on a bisector exactly when its perpendicular distances to the two lines are equal. <b>Reason:</b> Topic 05, Theorem 1: this is the defining property.`,
          `Writing the lines as ${y} − ${m1}${x} = 0 and ${y} − ${m2}${x} = 0, that condition is<br>${fr(`${y} − ${m1}${x}`, `√(1 + <i>m</i><sub>1</sub><sup>2</sup>)`)} = ±${fr(`${y} − ${m2}${x}`, `√(1 + <i>m</i><sub>2</sub><sup>2</sup>)`)}.`,
          `Multiply the two sign cases together to get a single joint equation:<br>${fr(`(${y} − ${m1}${x})<sup>2</sup>`, `1 + <i>m</i><sub>1</sub><sup>2</sup>`)} − ${fr(`(${y} − ${m2}${x})<sup>2</sup>`, `1 + <i>m</i><sub>2</sub><sup>2</sup>`)} = 0.`,
          `Clear denominators and expand. Every term carries a factor (${m1} − ${m2}), and cancelling it (legitimate, since the lines are distinct) leaves<br>(${m1} + ${m2})(${y2} − ${x2})<br>+ 2<i>xy</i>(1 − ${m1}${m2}) = 0.`,
          `Substitute ${SUMM} and ${PRODM}, then multiply through by −${fr(b, '2')}:<br>${BIS},<br>i.e. ${BIS2}. ■`,
          `<b>Why the bisectors are always perpendicular.</b> In the result, (coefficient of ${x2}) + (coefficient of ${y2}) = ${h} + (−${h}) = 0, which is exactly the perpendicularity test of Derivation 2. Geometrically it is the supplementary-angle argument of Topic 05’s fourth worked example, unchanged.`,
          `<b>And always real.</b> For the bisector pair, ${sq(H)} − <i>AB</i> = ${fr(`(${a} − ${b})<sup>2</sup>`, '4')} + ${h2} ≥ 0 always. So even a pair whose own angle is awkward has two genuine, perpendicular bisectors, unless ${a} = ${b} and ${h} = 0 together, in which case the original equation was ${a}(${x2} + ${y2}) = 0 and there were no real lines to bisect.`,
        ],
      },
      {
        t: 'proc',
        title: 'Derivation 4: The determinant condition abc + 2fgh − af² − bg² − ch² = 0',
        steps: [
          `Suppose ${S} ≡ ${GEN0} is a pair of non-parallel lines meeting at ${AB_PT} (a parallel pair also gives Δ = 0, as the sixth practice question shows).`,
          `Shift the origin to that point: put ${x} = ${X} + ${al}, ${y} = ${Y} + ${be}. <b>Reason:</b> the pair now passes through the new origin, so by Derivation 1 the transformed equation must be homogeneous in ${X}, ${Y}: every coefficient of ${X}, of ${Y}, and the constant must vanish.`,
          `Expanding and collecting, the coefficient of ${X} is 2(<i>aα</i> + <i>hβ</i> + ${g}) and the coefficient of ${Y} is 2(<i>hα</i> + <i>bβ</i> + ${f}), so<br><i>aα</i> + <i>hβ</i> + ${g} = 0 and <i>hα</i> + <i>bβ</i> + ${f} = 0.`,
          `The new constant term is <i>aα</i><sup>2</sup> + 2<i>hαβ</i> + <i>bβ</i><sup>2</sup> + 2<i>gα</i> + 2<i>fβ</i> + ${c}, which regroups as<br>${al}(<i>aα</i> + <i>hβ</i> + ${g})<sub>=0</sub><br>+ ${be}(<i>hα</i> + <i>bβ</i> + ${f})<sub>=0</sub><br>+ (<i>gα</i> + <i>fβ</i> + ${c}),<br>so the third condition is simply <i>gα</i> + <i>fβ</i> + ${c} = 0.`,
          `The three conditions say that the three lines <i>ax</i> + <i>hy</i> + ${g} = 0, <i>hx</i> + <i>by</i> + ${f} = 0 and <i>gx</i> + <i>fy</i> + ${c} = 0 all pass through ${AB_PT}: they are <b>concurrent</b>. By the concurrency determinant of Topic 04 (rows (${a}, ${h}, ${g}), (${h}, ${b}, ${f}), (${g}, ${f}, ${c})),<br>${DELTA} = 0. ■`,
          `<b>Point of intersection, free.</b> Solving the first two conditions of step 3 for ${AB_PT} gives<br>${al} = ${PX}, ${be} = ${PY},<br>which is why the first two of the three conditions are all you ever need in a hurry.`,
          `<b>The memory device that makes this instant.</b> The two lines of step 3 are exactly ${HALF}${NB}${DSX} = 0 and ${HALF}${NB}${DSY} = 0. So the fastest route to the point of intersection is: differentiate ${S} once with respect to each variable, set both to zero, and solve the resulting linear pair. You do not need calculus to use this (${DSX} just means “differentiate treating ${y} as a constant”), but if you have met derivatives it makes the formula unforgettable.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure A: Does this equation represent a pair of straight lines?',
        steps: [
          `Read off ${a}, ${b}, ${c} directly, and ${h}, ${g}, ${f} as <b>halves</b> of the <i>xy</i>, ${x} and ${y} coefficients. Write the six numbers down before doing anything else.`,
          `Compute Δ = ${DELTA}. If Δ${NB}≠${NB}0, it is a genuine conic, not a pair. Stop.`,
          `Compute ${H2AB}. If it is negative the “pair” is imaginary and the real graph is the single point<br>${PT}.`,
          `If ${H2AB} > 0: two distinct real lines, meeting at that point. If ${H2AB} = 0: two parallel (or coincident) lines, real only if ${sq(g)} ≥ <i>ac</i> and ${sq(f)} ≥ <i>bc</i>, and the intersection formula is unusable; go to Procedure B instead.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: Separating the two lines',
        steps: [
          `<b>Try to factorise the second-degree part first.</b> ${HOM} always factorises into two real linear forms when ${h2} ≥ ${AB}; find them by inspection or by splitting the middle term.`,
          `Write the two full lines as those factors plus unknown constants, e.g. (ℓ<sub>1</sub> + ${p})(ℓ<sub>2</sub> + ${q}), expand, and match the ${x}, ${y} and constant coefficients. Three equations, two unknowns: the third is your check.`,
          `<b>If inspection fails,</b> treat the whole equation as a quadratic in ${x} with ${y} as a parameter, and apply the quadratic formula. When the equation really is a pair, the expression under the root is a perfect square in ${y}, and the ± hands you the two lines directly.`,
          'Check by substituting the point of intersection from Procedure A into both lines.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C: Homogenising a curve with a line',
        steps: [
          `Confirm the line ${LMN} = 0 does <b>not</b> pass through the origin, i.e. ${n}${NB}≠${NB}0.`,
          `Rewrite the line as a quantity equal to 1: ${u} ≡ ${U} = 1.`,
          `In the curve’s equation, multiply the linear terms 2<i>gx</i> + 2<i>fy</i> by ${u}, and the constant term ${c} by ${sq(u)}. Leave the second-degree terms alone. <b>Reason:</b> multiplying by 1 changes nothing at the two intersection points, but it makes every term degree two.`,
          `Clear denominators. The result <i>Ax</i><sup>2</sup> + 2<i>Hxy</i> + <i>By</i><sup>2</sup> = 0 is the joint equation of <i>OP</i> and <i>OQ</i>.`,
          `Answer the actual question from ${A}, ${H}, ${B}: perpendicular at ${O} means ${A} + ${B} = 0; the angle <i>POQ</i> is ${ATAN}|${fr(`2√(${sq(H)} − <i>AB</i>)`, `${A} + ${B}`)}|; the bisectors of ∠<i>POQ</i> come from C of the Key formulas and definitions part.`,
        ],
      },
      { t: 'fig', id: 'm11-09-08-d2' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'Foundation Level',
        q: `Show that 6${x2} + 5<i>xy</i> − 6${y2} = 0 represents a pair of perpendicular straight lines through the origin. Find their separate equations, and the joint equation of their angle bisectors.`,
        steps: [
          `<b>Solution.</b> Compare with ${HOM0}: ${a} = 6, 2${h} = 5 so ${h} = ${F2('5')}, ${b} = −6.`,
          `<b>Nature.</b> ${H2AB} = ${F4('25')} + 36 = ${F4('169')} > 0, so the lines are real and distinct.`,
          `<b>Perpendicularity.</b> ${a} + ${b} = 6 + (−6) = 0, so the lines are perpendicular. That is the whole of the first part: no factorisation was needed.`,
          `<b>Separate equations.</b> Split the middle term:<br>6${x2} + 9<i>xy</i> − 4<i>xy</i> − 6${y2}<br>= 3${x}(2${x} + 3${y}) − 2${y}(2${x} + 3${y})<br>= (3${x} − 2${y})(2${x} + 3${y}).<br>So the lines are<br>3${x} − 2${y} = 0 and 2${x} + 3${y} = 0.<br><br>Their slopes are ${F2('3')} and −${fr('2', '3')}, whose product is −1: the perpendicularity confirmed independently.`,
          `<b>Bisectors.</b> Use ${BIS} with ${a} − ${b} = 12 and ${h} = ${F2('5')}:<br><br>${fr(`${x2} − ${y2}`, '12')} = ${fr('2<i>xy</i>', '5')}<br><br>⟹ 5${x2} − 5${y2} = 24<i>xy</i><br>⟹ 5${x2} − 24<i>xy</i> − 5${y2} = 0.`,
          `<b>Check.</b> Coefficient of ${x2} plus coefficient of ${y2} is 5 − 5 = 0, so the bisectors are perpendicular, as they must be. Factorising, 5${x2} − 24<i>xy</i> − 5${y2} = (5${x} + ${y})(${x} − 5${y}), so the bisectors are 5${x} + ${y} = 0 (slope −5) and ${x} − 5${y} = 0 (slope ${fr('1', '5')}),<br><br>and (−5)(${fr('1', '5')}) = −1.<br><br>A second check: the original lines make angles ${ATAN}${F2('3')} ≈ 56.31${DEG} and ${ATAN}(−${fr('2', '3')}) ≈ −33.69${DEG} with the ${x}-axis, whose average is 11.31${DEG},<br><br>and ${TAN}11.31${DEG} = 0.2 = ${fr('1', '5')}. Correct.`,
        ],
        ans: `3${x} − 2${y} = 0, 2${x} + 3${y} = 0 (perpendicular); bisectors 5${x2} − 24<i>xy</i> − 5${y2} = 0`,
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: `Find the value of ${lam} for which 2${x2} + 5<i>xy</i> + 3${y2} + 6${x} + 7${y} + ${lam} = 0 represents a pair of straight lines, and find their point of intersection.`,
        steps: [
          `<b>Speed approach.</b> Halve first, then substitute. Write the six coefficients in a row before touching the determinant:<br>${a} = 2, ${b} = 3, ${c} = ${lam},<br><br>${h} = ${F2('5')}, ${g} = ${F2('6')} = 3, ${f} = ${F2('7')}.`,
          `Now Δ = ${DELTA} = 0:<br><br>6${lam} + 2(${F2('7')})(3)(${F2('5')})<br><br>− 2(${F4('49')}) − 3(9) − ${lam}(${F4('25')}) = 0,<br><br>6${lam} + ${F2('105')} − ${F2('49')} − 27 − ${F4(`25${lam}`)} = 0<br><br>⟹ 1 − ${F4(lam)} = 0 ⟹ ${lam} = 4.`,
          `Check reality: ${H2AB} = ${F4('25')} − 6 = ${F4('1')} > 0, so the lines are real and distinct. Point of intersection:<br><br>${PT}<br><br>= (${fr('35 − 36', '24 − 25')}, ${fr('30 − 28', '24 − 25')}) (top and bottom × 4)<br><br>= (${fr('−1', '−1')}, ${fr('2', '−1')}) = (1,\u00a0−2).`,
          `<b>Confirmation by factorising.</b> 2${x2} + 5<i>xy</i> + 3${y2} = (2${x} + 3${y})(${x} + ${y}), so try (2${x} + 3${y} + ${p})(${x} + ${y} + ${q}). Matching ${x}: 2${q} + ${p} = 6; matching ${y}: 3${q} + ${p} = 7; hence ${q} = 1, ${p} = 4, and the constant is <i>pq</i> = 4 = ${lam}. The lines are 2${x} + 3${y} + 4 = 0 and ${x} + ${y} + 1 = 0, which meet at (1,\u00a0−2). Everything agrees.`,
          `<b>The trap.</b> The tempting wrong answer is ${lam} = 16, and it is produced by feeding the determinant the raw coefficients ${g} = 6 and ${f} = 7 instead of their halves:<br><br>2${NB}·${NB}3${NB}·${NB}${lam} + 2(7)(6)(${F2('5')})<br><br>− 2(49) − 3(36) − ${lam}(${F4('25')})<br><br>= 4 − ${F4(lam)} = 0 ⟹ ${lam} = 16.`,
          `It is seductive because the arithmetic is cleaner than the correct route and it lands on a tidy integer: students take the tidiness as confirmation. Note that the error was only in ${g} and ${f}; the student did remember to halve ${h}, which is why the answer is wrong by a plausible-looking factor rather than absurdly. <b>Two seconds of defence:</b> with ${lam} = 16 the factorisation forced above still requires ${p} = 4, ${q} = 1, so the constant term can only be <i>pq</i> = 4. Any candidate ${lam}${NB}≠${NB}4 contradicts the very factorisation it claims to permit.`,
        ],
        ans: `${lam} = 4; lines 2${x} + 3${y} + 4 = 0 and ${x} + ${y} + 1 = 0, meeting at (1,\u00a0−2)`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level · multi-concept',
        q: `The line ${y} = 2${x} + ${c} cuts the circle ${x2} + ${y2} = 5 at ${A} and ${B}. Find the values of ${c} for which ∠<i>AOB</i> = 90${DEG}, where ${O} is the origin, and write the joint equation of <i>OA</i> and <i>OB</i> in that case.`,
        steps: [
          `<b>Solution: homogenisation.</b> The condition is about the angle at the origin subtended by a chord. Do not find ${A} and ${B}. Instead build the pair <i>OA</i>, <i>OB</i> directly and impose ${A} + ${B} = 0 on its coefficients.`,
          `<b>Step 1: write the line as “= 1”.</b> From ${y} = 2${x} + ${c} we get ${y} − 2${x} = ${c}, so ${fr(`${y} − 2${x}`, c)} = 1 (and ${c}${NB}≠${NB}0, since ${c} = 0 would put the line through the origin and make the question meaningless).`,
          `<b>Step 2: homogenise the curve.</b> In ${x2} + ${y2} − 5 = 0, only the constant −5 needs lifting to degree two, so multiply it by (${fr(`${y} − 2${x}`, c)})<sup>2</sup>:<br><br>${x2} + ${y2} − 5(${fr(`${y} − 2${x}`, c)})<sup>2</sup> = 0.<br><br>Multiply through by ${c2} and expand (${y} − 2${x})<sup>2</sup> = 4${x2} − 4<i>xy</i> + ${y2}:<br>${c2}${x2} + ${c2}${y2} − 20${x2} + 20<i>xy</i> − 5${y2} = 0,<br>i.e. (${c2} − 20)${x2} + 20<i>xy</i> + (${c2} − 5)${y2} = 0.`,
          `<b>Step 3: impose the right angle.</b> Perpendicular at the origin means (coefficient of ${x2}) + (coefficient of ${y2}) = 0:<br>(${c2} − 20) + (${c2} − 5) = 0<br>⟹ 2${c2} = 25 ⟹ ${c} = ±${fr('5', '√2')}.`,
          `<b>Step 4: the pair itself.</b> With ${c2} = ${F2('25')} the coefficients become<br><br>−${F2('15')}, 20, ${F2('15')}; dividing by −${F2('5')},<br><br>3${x2} − 8<i>xy</i> − 3${y2} = 0,<br>i.e. (3${x} + ${y})(${x} − 3${y}) = 0.`,
          `<b>Step 5: check that the line really cuts the circle.</b> The distance from ${O} to ${y} = 2${x} + ${c} is ${fr(`|${c}|`, '√5')} = ${fr('5', '√10')} ≈ 1.58, which is less than the radius √5 ≈ 2.24. Two genuine intersection points exist.`,
          `<b>Independent verification.</b> Take ${c} = ${fr('5', '√2')}. Solving with the circle gives<br><br>${A} = (−${fr('3', '√2')}, −${fr('1', '√2')}) and ${B} = (−${fr('1', '√2')}, ${fr('3', '√2')}).<br><br>Then <i>OA⃗</i>${NB}·${NB}<i>OB⃗</i> = ${F2('3')} − ${F2('3')} = 0, so ∠<i>AOB</i> = 90${DEG};<br><br>and ${A} has ${fr(y, x)} = ${fr('1', '3')} while ${B} has ${fr(y, x)} = −3, which are exactly the two lines ${x} − 3${y} = 0 and 3${x} + ${y} = 0. Correct.`,
          `<b>The general result behind this,</b> worth memorising: the lines joining the origin to the intersections of ${x2} + ${y2} = ${sq(a)} and ${y} = <i>mx</i> + ${c} are perpendicular precisely when 2${c2} = ${sq(a)}(1 + ${sq(m)}). Here 2${NB}·${NB}${F2('25')} = 5(1 + 4). Correct.`,
        ],
        ans: `${c} = ±${fr('5', '√2')}; <i>OA</i>, <i>OB</i> ∶ 3${x2} − 8<i>xy</i> − 3${y2} = 0`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Show that 3${x2} + 5<i>xy</i> − 2${y2} − 16${x} + 3${y} + 5 = 0 represents a pair of straight lines. Find their point of intersection, the angle between them, and the joint equation of the bisectors of the angles between them. Verify the bisector equation by a second, independent route.`,
        steps: [
          `<b>Solution.</b> Coefficients: ${a} = 3, ${b} = −2, ${c} = 5, ${h} = ${F2('5')}, ${g} = −8, ${f} = ${F2('3')}.`,
          `<b>(i) It is a pair.</b><br>Δ = ${DELTA}<br><br>= −30 + 2(${F2('3')})(−8)(${F2('5')})<br><br>− 3(${F4('9')}) + 2(64) − 5(${F4('25')})<br><br>= −30 − 60 − ${F4('27')} + 128 − ${F4('125')}<br><br>= 38 − 38 = 0.<br><br>And ${H2AB} = ${F4('25')} + 6 = ${F4('49')} > 0, so the two lines are real and distinct.`,
          `<b>(ii) Point of intersection.</b> With ${ABH} = −6 − ${F4('25')} = −${F4('49')},<br><br>${al} = ${PX}<br><br>= ${fr('15 − 64', '−49')} = 1 (top and bottom × 4),<br><br>${be} = ${PY}<br><br>= ${fr('−80 − 18', '−49')} = 2.<br><br>So the lines meet at (1,\u00a02).`,
          `<b>(iii) The lines themselves,</b> by Procedure B. Since 3${x2} + 5<i>xy</i> − 2${y2} = (3${x} − ${y})(${x} + 2${y}), try (3${x} − ${y} + ${p})(${x} + 2${y} + ${q}). Matching the ${x} coefficient: 3${q} + ${p} = −16; matching the ${y} coefficient: −${q} + 2${p} = 3; hence ${p} = −1, ${q} = −5, and <i>pq</i> = 5 = ${c}. The lines are<br>3${x} − ${y} − 1 = 0 and ${x} + 2${y} − 5 = 0,<br>which indeed both pass through (1,\u00a02).`,
          `<b>(iv) Angle.</b><br><br>${TAN}${th} = ${TANF}<br><br>= |${fr('7', '3 − 2')}| = 7 (as √(${H2AB}) = ${F2('7')}),<br><br>${th} = ${ATAN}7 ≈ 81.87${DEG}.<br><br>Cross-check from the slopes 3 and −${HALF}:<br><br>|${fr('6 + 1', '2 − 3')}| = |${fr('7', '−1')}| = 7 (top and bottom × 2). Correct.`,
          `<b>(v) Bisectors.</b> The bisector formula of C in the Key formulas and definitions part is stated about the origin, and this pair does not pass through the origin, so shift. Put ${X} = ${x} − 1, ${Y} = ${y} − 2. In the shifted frame the pair is homogeneous with the same ${a}, ${h}, ${b}, and its bisectors are<br><br>${fr(`${X2} − ${Y2}`, `${a} − ${b}`)} = ${fr('<i>XY</i>', h)}<br><br>⟹ ${fr(`${X2} − ${Y2}`, '5')} = ${fr('2<i>XY</i>', '5')}<br><br>⟹ ${X2} − 2<i>XY</i> − ${Y2} = 0.<br><br>Substituting back ${X} = ${x} − 1, ${Y} = ${y} − 2:<br>(${x} − 1)<sup>2</sup> − 2(${x} − 1)(${y} − 2) − (${y} − 2)<sup>2</sup> = 0<br>⟹ ${x2} − 2<i>xy</i> − ${y2} + 2${x} + 6${y} − 7 = 0.`,
          `<b>(vi) Independent verification, using Topic 05.</b> Having separated the lines in (iii), apply the ordinary two-line bisector formula. With √(3<sup>2</sup> + 1<sup>2</sup>) = √10 and √(1<sup>2</sup> + 2<sup>2</sup>) = √5,<br><br>${fr(`3${x} − ${y} − 1`, '√10')} = ±${fr(`${x} + 2${y} − 5`, '√5')}.<br><br>Multiplying the two sign cases together, which is exactly how a joint equation is built, and clearing the surds gives 7(${x2} − 2<i>xy</i> − ${y2} + 2${x} + 6${y} − 7) = 0, the same curve as in (v) up to the harmless overall factor 7. Two completely different routes, one answer.`,
          `<b>(vii) The bisectors separately, and the free check.</b> Solving ${X2} − 2<i>XY</i> − ${Y2} = 0 as a quadratic in ${X} gives ${X} = (1 ± √2)${Y}, so the bisectors are<br>(${x} − 1) = (1 + √2)(${y} − 2)<br>and (${x} − 1) = (1 − √2)(${y} − 2),<br><br>with slopes ${fr('1', '1 + √2')} = √2 − 1 ≈ 0.4142<br><br>and ${fr('1', '1 − √2')} = −(√2 + 1).<br><br>Their product is −1: perpendicular, as Derivation 3 promised. And the direct geometric check: the original lines make angles ${ATAN}3 ≈ 71.57${DEG} and ${ATAN}(−${HALF}) ≈ −26.57${DEG} with the ${x}-axis, whose average is 22.5${DEG}, and ${TAN}22.5${DEG} = √2 − 1. Correct.`,
          `<b>Why this is Advanced-flavoured.</b> Nothing in it is hard on its own. What it tests is whether you know that the origin-based formulas of A to C in the Key formulas and definitions part are frame-dependent and the coefficient-based ones (Δ, the angle) are not. A student who applies<br><br>${BIS}<br><br>to this equation without shifting gets ${x2} − 2<i>xy</i> − ${y2} = 0: a perfectly respectable pair of perpendicular lines through the origin, parallel to the true bisectors but not equal to them. It looks right and it is wrong, which is exactly the level at which Advanced likes to operate.`,
        ],
        ans: `Pair at (1,\u00a02); 3${x} − ${y} − 1 = 0, ${x} + 2${y} − 5 = 0; ${th} = ${ATAN}7<br>bisectors ${x2} − 2<i>xy</i> − ${y2} + 2${x} + 6${y} − 7 = 0`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[Foundation]</b> Find the separate equations of the lines represented by ${x2} − 5<i>xy</i> + 6${y2} = 0 and the acute angle between them.`,
            a: `(${x} − 2${y})(${x} − 3${y}) = 0, so the lines are ${x} − 2${y} = 0 and ${x} − 3${y} = 0, with slopes ${HALF} and ${fr('1', '3')}.<br><br>Here ${a} = 1, ${h} = −${F2('5')}, ${b} = 6, so ${H2AB} = ${F4('25')} − 6 = ${F4('1')}<br><br>and, as 2√(${H2AB}) = 2${NB}·${NB}${HALF} = 1, ${TAN}${th} = ${fr('1', '7')}, i.e. ${th} = ${ATAN}${fr('1', '7')}.<br><br>(Direct check: |${fr('3 − 2', '6 + 1')}| = ${fr('1', '7')} (top and bottom × 6).)`,
          },
          {
            q: `<b>[Foundation]</b> For what values of ${k} does ${x2} + <i>kxy</i> + 4${y2} = 0 represent a pair of coincident lines? Write the repeated line in each case.`,
            a: `Coincident means ${h2} = ${AB}, i.e. ${fr(sq(k), '4')} = 4, so ${k} = ±4. With ${k} = 4 the equation is (${x} + 2${y})<sup>2</sup> = 0, the doubled line ${x} + 2${y} = 0; with ${k} = −4 it is (${x} − 2${y})<sup>2</sup> = 0, the doubled line ${x} − 2${y} = 0.`,
          },
          {
            q: `<b>[JEE Main]</b> Find the joint equation of the bisectors of the angles between the lines 2${x2} − 5<i>xy</i> + 3${y2} = 0, and verify that the two bisectors are perpendicular.`,
            a: `${a} = 2, ${b} = 3, ${h} = −${F2('5')}, so ${BIS2} gives<br><br>−${F2('5')}${x2} + <i>xy</i> + ${F2('5')}${y2} = 0, i.e.<br><br>5${x2} − 2<i>xy</i> − 5${y2} = 0.<br><br>Coefficient of ${x2} plus coefficient of ${y2} is 5 − 5 = 0: perpendicular. (Numerical check: the original lines are (2${x} − 3${y})(${x} − ${y}) = 0, with slopes ${fr('2', '3')} and 1, making angles 33.69${DEG} and 45${DEG}; their average is 39.35${DEG} and ${TAN}39.35${DEG} = 0.8198, which satisfies 5${sq(m)} + 2${m} − 5 = 0, the slope equation of the bisector pair.)`,
          },
          {
            q: `<b>[JEE Main]</b> Find all values of ${lam} for which ${x2} + <i>λxy</i> + ${y2} − 5${x} − 7${y} + 6 = 0 represents a pair of straight lines, and write the lines in each case.`,
            a: `${a} = 1, ${b} = 1, ${c} = 6, ${h} = ${F2(lam)}, ${g} = −${F2('5')}, ${f} = −${F2('7')}. Then Δ = 0 reduces to 6${sq(lam)} − 35${lam} + 50 = 0, i.e. (2${lam} − 5)(3${lam} − 10) = 0, so<br><br>${lam} = ${F2('5')} or ${lam} = ${fr('10', '3')}.<br><br>Both satisfy ${h2} ≥ ${AB}, so both give real lines. For ${lam} = ${F2('5')} the equation is<br><br>${HALF}(2${x} + ${y} − 6)(${x} + 2${y} − 2) = 0:<br>the lines are 2${x} + ${y} − 6 = 0 and ${x} + 2${y} − 2 = 0.<br><br>For ${lam} = ${fr('10', '3')} it is<br><br>${fr('1', '3')}(3${x} + ${y} − 6)(${x} + 3${y} − 3) = 0:<br>the lines are 3${x} + ${y} − 6 = 0 and ${x} + 3${y} − 3 = 0.`,
          },
          {
            q: `<b>[JEE Main]</b> Find the joint equation of the lines joining the origin to the points where 2${x} + ${y} = 5 meets the circle ${x2} + ${y2} − 4${x} + 3 = 0, and hence find the angle those two lines make with each other.`,
            a: `Write the line as ${fr(`2${x} + ${y}`, '5')} = 1 and homogenise ${x2} + ${y2} − 4${x} + 3 = 0, lifting the −4${x} by one power and the +3 by two:<br><br>${x2} + ${y2} − 4${x}(${fr(`2${x} + ${y}`, '5')})<br>+ 3(${fr(`2${x} + ${y}`, '5')})<sup>2</sup> = 0.<br><br>Multiplying by 25 gives −3${x2} − 8<i>xy</i> + 28${y2} = 0, i.e.<br>3${x2} + 8<i>xy</i> − 28${y2} = 0.<br>Here ${a} = 3, ${h} = 4, ${b} = −28, so ${H2AB} = 16 + 84 = 100 and<br><br>${TAN}${th} = ${fr(`2${NB}·${NB}10`, '|3 − 28|')} = ${fr('20', '25')} = ${fr('4', '5')},<br><br>giving ${th} = ${ATAN}${fr('4', '5')} ≈ 38.66${DEG}.<br><br>(Check: the line meets the circle at ${P}(2,\u00a01) and ${Q}(${fr('14', '5')}, −${fr('3', '5')}), both of which satisfy the pair, and the angle between <i>OP⃗</i> and <i>OQ⃗</i> computes to 38.66${DEG}.)`,
          },
          {
            q: `<b>[JEE Main]</b> Show that 9${x2} + 24<i>xy</i> + 16${y2} − 12${x} − 16${y} − 12 = 0 represents a pair of parallel straight lines, and find the distance between them.`,
            a: `${a} = 9, ${b} = 16, ${c} = −12, ${h} = 12, ${g} = −6, ${f} = −8. Then ${h2} = 144 = ${AB}, so the lines are parallel, and Δ = −1728 + 1152 − 576 − 576 + 1728 = 0, so it is genuinely a pair. Since 9${x2} + 24<i>xy</i> + 16${y2} = (3${x} + 4${y})<sup>2</sup>, write (3${x} + 4${y} + ${p})(3${x} + 4${y} + ${q}) with ${p} + ${q} = −4 and <i>pq</i> = −12, giving ${p} = 2, ${q} = −6:<br>3${x} + 4${y} + 2 = 0 and 3${x} + 4${y} − 6 = 0.<br><br>The distance between them is ${fr('|2 − (−6)|', '√(9 + 16)')} = ${fr('8', '5')},<br><br>which the formula reproduces:<br><br>${DIST_G}<br><br>= 2√(${fr('36 + 108', `9${NB}·${NB}25`)})<br><br>= 2${NB}·${NB}${fr('12', '15')} = ${fr('8', '5')}.`,
          },
          {
            q: `<b>[JEE Advanced]</b> Find the area of the triangle formed by the pair ${x2} − 4<i>xy</i> + ${y2} = 0 and the line ${x} + ${y} = 1.`,
            a: `${a} = 1, ${h} = −2, ${b} = 1, and the line has <i>l</i> = 1, ${m} = 1, ${n} = −1. Then ${H2AB} = 3 and <i>am</i><sup>2</sup> − 2<i>hlm</i> + <i>bl</i><sup>2</sup> = 1 + 4 + 1 = 6, so the area is<br><br>${AREA} = ${fr('√3', '6')}.<br><br>(Direct check: the pair is ${y} = (2 ± √3)${x}; the line ${x} + ${y} = 1 cuts these at ${x} = ${fr('1', '3 ± √3')}, and the triangle <i>O</i>-<i>A</i>-<i>B</i> has area ${HALF}|${x1}<i>y</i><sub>2</sub> − <i>x</i><sub>2</sub>${y1}| = ${HALF}${NB}·${NB}${fr('2√3', '6')} = ${fr('√3', '6')}.)`,
          },
          {
            q: `<b>[JEE Advanced]</b> The pairs ${x2} − 2<i>pxy</i> − ${y2} = 0 and ${x2} − 2<i>qxy</i> − ${y2} = 0 are such that each pair bisects the angles between the other. Prove that <i>pq</i> = −1.`,
            a: `For ${x2} − 2<i>pxy</i> − ${y2} = 0 we have ${a} = 1, ${h} = −${p}, ${b} = −1, so its bisector pair is ${BIS2}, that is −<i>px</i><sup>2</sup> − 2<i>xy</i> + <i>py</i><sup>2</sup> = 0, or<br><br>${x2} + ${fr('2', p)}<i>xy</i> − ${y2} = 0 (${p}${NB}≠${NB}0).<br><br>This is to be the second pair, ${x2} − 2<i>qxy</i> − ${y2} = 0. Comparing the <i>xy</i> coefficients, ${fr('2', p)} = −2${q}, hence <i>pq</i> = −1. (Note that both pairs are perpendicular pairs, since ${a} + ${b} = 0 in each, which is why the relation comes out so symmetrically, and why starting from the second pair gives the same condition.)`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The equation ${HOM0} represents two real and distinct lines if and only if:`,
        opts: [
          {
            label: `${h2} < ${AB}`,
            nudge: `<b>(A)</b> is the imaginary case: the graph is the origin alone. Students who remember “discriminant positive” but misremember which way ${H2AB} points choose this.`,
          },
          { label: `${h2} = ${AB}`, nudge: '<b>(B)</b> is the coincident case: one line counted twice, not two distinct lines.' },
          { label: `${h2} > ${AB}`, nudge: null },
          {
            label: `${a} + ${b} = 0`,
            nudge: `<b>(D)</b> is the perpendicularity condition, which says what the angle is, not whether the lines exist. A pair can be perpendicular and imaginary only if ${a} + ${b} = 0 and ${h2} < ${AB} = −${sq(a)}, which is impossible, but the student choosing (D) has not checked that, they have simply matched the most familiar-looking condition on the page.`,
          },
        ],
        correct: 2,
        solution: `The slopes are the roots of ${SLOPEQ}, whose discriminant is 4(${H2AB}).`,
      },
      {
        t: 'mcq',
        q: `The lines represented by 3${x2} + 8<i>xy</i> − 3${y2} = 0 are:`,
        opts: [
          { label: 'coincident', nudge: `<b>(A)</b> would need ${h2} = ${AB}; here ${H2AB} = 16 + 9 = 25${NB}≠${NB}0.` },
          { label: 'perpendicular', nudge: null },
          {
            label: `inclined at 45${DEG}`,
            nudge: `<b>(C)</b> is chosen by students who compute ${TAN}${th} = ${fr('2√25', '|3 − 3|')} and, meeting a zero denominator, decide the formula has “failed” and guess. A zero denominator here is information, not failure: it is the right angle.`,
          },
          { label: 'imaginary', nudge: `<b>(D)</b> would need ${h2} < ${AB}, i.e. 16 < −9.` },
        ],
        correct: 1,
        solution: `${a} + ${b} = 3 + (−3) = 0, so ${TAN}${th} is infinite and ${th} = 90${DEG}. (The lines are 3${x} − ${y} = 0 and ${x} + 3${y} = 0, slopes 3 and −${fr('1', '3')}.)`,
      },
      {
        t: 'mcq',
        q: `The bisectors of the angles between the pair ${HOM0} are:`,
        opts: [
          { label: 'parallel to each other', nudge: '<b>(A)</b> Two lines through the origin that were parallel would coincide; the bisector pair’s <i>x</i><sup>2</sup> and <i>y</i><sup>2</sup> coefficients sum to zero, so its lines are perpendicular, never parallel.' },
          { label: 'always perpendicular to each other', nudge: null },
          {
            label: 'coincident with the original pair',
            nudge: `<b>(C)</b> is false even in the degenerate case ${h2} = ${AB}: the bisectors of a coincident pair are the line itself and the line through the vertex perpendicular to it, which is not the original (doubled) pair. For example (${x} + ${y})<sup>2</sup> = 0 has bisectors ${x2} − ${y2} = 0.`,
          },
          {
            label: `real only when ${h2} > ${AB}`,
            nudge: `<b>(D)</b> is the most instructive wrong answer. The bisector pair has its own discriminant ${fr(`(${a} − ${b})<sup>2</sup>`, '4')} + ${h2}, which is a sum of squares and therefore never negative: the bisectors are <b>always</b> real (except for ${a}(${x2} + ${y2}) = 0, where ${a} = ${b} and ${h} = 0 leave nothing to bisect), even though the original pair may not be. Students who assume every property inherits the parent condition pick this one.`,
          },
        ],
        correct: 1,
        solution: `The bisector pair is ${BIS2}, whose ${x2} and ${y2} coefficients sum to zero.`,
      },
      {
        t: 'mcq',
        q: `The equation ${x2} + 4<i>xy</i> + 4${y2} + 4${x} + 8${y} + 3 = 0 represents:`,
        opts: [
          {
            label: 'a pair of intersecting lines',
            nudge: `<b>(A)</b> is chosen by students who verify Δ = 0, conclude “pair of lines”, and stop without testing ${h2} against ${AB}. The intersection formula would then be applied with ${ABH} = 0 in the denominator: the tell-tale symptom.`,
          },
          { label: 'a pair of parallel lines', nudge: null },
          {
            label: 'a circle',
            nudge: `<b>(C)</b> is impossible for any equation with an <i>xy</i> term or with unequal ${x2} and ${y2} coefficients; both faults are present here.`,
          },
          {
            label: 'no real locus',
            nudge: `<b>(D)</b> would need an imaginary parallel pair: ${h2} = ${AB} with ${sq(g)} < <i>ac</i>, as in ${x2} + 1 = 0. Here ${sq(g)} − <i>ac</i> = 4 − 3 = 1 > 0, so the two parallel lines are real. (With ${h2} < ${AB} the locus would be a single point, which is still a locus.)`,
          },
        ],
        correct: 1,
        solution: `Here ${a} = 1, ${b} = 4, ${h} = 2, ${g} = 2, ${f} = 4, ${c} = 3, so Δ = 12 + 32 − 16 − 16 − 12 = 0 and ${h2} = 4 = ${AB}. Indeed the equation is<br>(${x} + 2${y})<sup>2</sup> + 4(${x} + 2${y}) + 3<br>= (${x} + 2${y} + 1)(${x} + 2${y} + 3) = 0,<br>two parallel lines at distance ${fr('2', '√5')} apart.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Forgetting that ${h}, ${g}, ${f} are halves.</b> The standard form is ${GEN}, so ${h}, ${g}, ${f} are half the coefficients of <i>xy</i>, ${x}, ${y}. This one slip corrupts Δ, the angle, the point of intersection and the bisectors simultaneously. <b>Correction:</b> before any calculation, write the six numbers ${a}, ${b}, ${c}, ${h}, ${g}, ${f} in a labelled row, halving as you go. The second worked example exists entirely to make this reflex permanent.`,
          `<b>Treating Δ = 0 as proof of two real lines.</b> It only proves the conic is degenerate. <b>Correction:</b> always pair it with ${h2} ≥ ${AB}. Counter-example to keep in mind: ${x2} + ${y2} = 0 has Δ = 0 but is the single point (0,\u00a00). And for a parallel pair also check ${sq(g)} ≥ <i>ac</i> and ${sq(f)} ≥ <i>bc</i>: ${x2} + 1 = 0 has Δ = 0 and ${h2} = ${AB} but no real points at all.`,
          `<b>Using the origin bisector formula on a pair that does not pass through the origin.</b> ${BIS} is stated about the vertex of the pair. <b>Correction:</b> find the point of intersection ${AB_PT} first and use<br><br>${SHIFTBIS}.<br><br>The wrong answer is parallel to the right one, so it will pass every slope-based sanity check: see the fourth worked example, part (vii).`,
          `<b>Dividing by zero in the bisector formula.</b> If ${a} = ${b} or ${h} = 0 the formula as written has a zero denominator. <b>Correction:</b> cross-multiply first to ${BIS2}, then substitute. You get ${x2} − ${y2} = 0 and <i>xy</i> = 0 respectively, both perfectly good answers.`,
          `<b>Homogenising with a line that is not written as “= 1”.</b> Multiplying by ${LM} instead of ${U} changes the curve and produces a wrong pair. <b>Correction:</b> the quantity you multiply by must equal 1 at the intersection points. Write the line in the form (something) = 1 explicitly, on its own line, before substituting.`,
          `<b>Homogenising with a line through the origin.</b> Then ${n} = 0 and the recipe divides by zero, correctly, because the question itself is degenerate: the origin is one of the two intersection points. <b>Correction:</b> check ${n}${NB}≠${NB}0 as step 1 of Procedure C.`,
          `<b>Using ${SUMM} when ${b} = 0.</b> <b>Correction:</b> if ${b} = 0 the equation is ${x}(<i>ax</i> + 2<i>hy</i>) = 0 and one line is the ${y}-axis, which has no slope. Factorise directly.`,
          `<b>Adding constants to a homogeneous pair.</b> A pair through the origin has no linear or constant terms. If your answer to “find the pair through the origin such that…” contains an ${x}, a ${y} or a bare number, it is not a pair through the origin.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip 1: the coefficient sum is the fastest question in coordinate geometry.</b> For any second-degree equation, “are these lines perpendicular?” is answered by adding two numbers: coefficient of ${x2} plus coefficient of ${y2}. It works for the homogeneous pair, for the general pair, and for a homogenised pair, which is why nearly every JEE homogenisation question ends in a right angle ${ESTIMATE}. Look for it before you look for anything else.`,
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip 2: never find the intersection points in a homogenisation question.</b> If the question asks about the angle at the origin, the perpendicularity at the origin, or the bisectors at the origin, the intersection points are irrelevant and finding them costs you three minutes and a surd. Homogenise, read ${A}, ${H}, ${B}, answer.`,
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip 3: the partial-derivative shortcut for the point of intersection.</b> Rather than remembering<br><br>${PT}<br><br>with its sign traps, differentiate ${S} with respect to ${x} (treating ${y} as constant) and with respect to ${y}, set both to zero, and solve the two linear equations. For the second worked example that is 4${x} + 5${y} + 6 = 0 and 5${x} + 6${y} + 7 = 0, giving (1,\u00a0−2) in one line of elimination.`,
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip 4: factorise as your final check, never as your first move.</b> Almost every question here (Δ, angle, perpendicularity, bisectors, homogenisation) is answered from the coefficients alone. But once you have an answer, splitting the equation into two lines and testing them takes twenty seconds and catches every arithmetic slip.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Setting up',
            note: `For ${GEN0}: ${a}, ${b}, ${c} are read straight off; ${h}, ${g}, ${f} are <b>half</b> the coefficients of <i>xy</i>, ${x}, ${y}.`,
          },
          { f: `Homogeneous pair ${HOM0}`, note: 'two lines through the origin.' },
          { f: `Slopes are the roots of ${SLOPEQ}`, note: `${SUMM}, ${PRODM}.` },
          { f: `${h2} > ${AB}: real, distinct. ${h2} = ${AB}: coincident (perfect square). ${h2} < ${AB}: origin only.`, note: '' },
          { f: `${TAN}${th} = ${TANF}`, note: `perpendicular ⟺ ${a} + ${b} = 0; coincident ⟺ ${h2} = ${AB}.` },
          { f: `Perpendicular pair through ${O}`, note: `${PERP}.` },
          {
            f: 'Bisectors',
            note: `${BIS}, i.e. ${BIS2}: <b>always perpendicular, always real</b> (except ${a} = ${b} with ${h} = 0, where there is nothing to bisect). If ${a} = ${b}: ${x2} − ${y2} = 0. If ${h} = 0: <i>xy</i> = 0.`,
          },
          { f: `Product of perpendiculars from ${P_X1}`, note: `${PRODP}.` },
          { f: `Triangle with ${LMN} = 0`, note: `area = ${AREA}.` },
          { f: 'General equation is a real pair ⟺', note: `Δ = ${DELTA} = 0 <b>and</b> ${h2} ≥ ${AB} (for ${h2} = ${AB}, also ${sq(g)} ≥ <i>ac</i> and ${sq(f)} ≥ <i>bc</i>).` },
          { f: 'Point of intersection', note: `${PT}; or solve ${DSX} = 0, ${DSY} = 0.` },
          { f: 'Angle', note: 'unchanged by the linear terms: same formula as above.' },
          { f: `Parallel pair (${h2} = ${AB})`, note: `distance = ${DIST_G} (or ${DIST_F} when ${a} = 0).` },
          { f: `Bisectors: shift to ${AB_PT} first`, note: `${SHIFTBIS}.` },
          {
            f: 'Homogenisation',
            note: `To join the origin to where ${LMN} = 0 (with ${n}${NB}≠${NB}0) cuts ${S} = 0: write ${U} = 1, multiply the linear terms of ${S} by it and the constant by its square, then clear denominators. The result is <i>Ax</i><sup>2</sup> + 2<i>Hxy</i> + <i>By</i><sup>2</sup> = 0; the two rays are perpendicular iff ${A} + ${B} = 0.`,
          },
        ],
        aids: [
          `“Halve the odd ones out”: ${h}, ${g}, ${f} carry a hidden 2; ${a}, ${b}, ${c} do not.`,
          `“${h2} versus ${AB} decides whether; ${a} + ${b} decides what angle.”`,
          `“Δ = 0 means degenerate, not real: check ${h2} ≥ ${AB} too.”`,
          `“Bisectors: swap the ${x2} − ${y2} block over ${a} − ${b}, the <i>xy</i> over ${h}, and they always cross at 90${DEG}.”`,
          '“Make the line equal one, then make the curve homogeneous.”',
        ],
      },
    ],
  },
];
