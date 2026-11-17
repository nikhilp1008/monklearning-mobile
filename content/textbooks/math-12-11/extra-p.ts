import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11 Three Dimensional Geometry, Additional topic P, pp. 753–762 of the
 * Class 12 Mathematics Master Reference (October 2026 edition), word for word:
 * the book's "Addendum P — What JEE Actually Asks", kept with the book's letter
 * as the chapter's last additional topic (decision 2). It opens partway down
 * p. 753, below the rule that closes Addendum E's answers, and ends on p. 762;
 * Chapter 12 starts on p. 763. The book prints no opening paragraph: its
 * headings "The Distribution", "The Recurring Archetypes", "The Traps", "A Graded
 * Practice Set" and "Where JEE Goes Beyond the Chapter" are the parts, in
 * sentence case. The distribution table (pp. 754–755) is a table block; its
 * "Years / sessions" and "Count" columns are one "Papers cited" column, the
 * printed count with the papers by exam ("8 (JEE 2, Main 5, Adv 1)"; a paper
 * before 2013 is "JEE", "2004S" included; "(I,II)" is two papers, as the book's
 * count has it; "Online" is "Main Online"; a bare year after 2012 is "exam not
 * named"). Each numbered archetype 1–7 is a worked example tagged with its
 * heading, without its number: its "Look / Method" text and its worked example
 * are the question, the "Solution:" the steps, its "Answer:" or closing boxed
 * result the answer box (Archetype 1 prints neither: empty). Archetypes 3 and
 * 4 print their options (from the book's own solution and Practice 6) and
 * Archetype 6 is a "show that" (review rm1211c). The traps table is
 * a table block, as printed. The graded practice set 1–8 is one practice block,
 * each item's solution (the book's "Solutions to the Graded Practice Set",
 * p. 761) its answer. Exam years, months and shifts are dropped from every tag
 * ("JEE Main 2019 Apr 8 (II)" → "JEE Main"; "JEE Main 2012" → "JEE"), and every
 * share or frequency of past questions carries the estimate label; italic words
 * in print are plain here. The book's "- " list items are "•" items. These
 * pages print no drawing and no formula card (vector shapes: only the rules
 * between sections, the box round Archetype 2's result, fraction bars, radicals
 * and vector arrows). A vector is its letters and the combining arrow (escaped
 * ARW) inside one <i> (decision 36); unit vectors with hats; a determinant a
 * <vmat>. A fraction over a fraction is written with ÷. Every fraction is
 * stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const grid = (tag: string, rows: string[][]) =>
  `<${tag}>${rows.map((r) => `<r>${r.map((c) => `<c>${c}</c>`).join('')}</r>`).join('')}</${tag}>`;
/** A determinant between two bars: one array per row, one string per cell. */
const vm = (...rows: string[][]) => grid('vmat', rows);
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner after an opening modulus bar, so the bar never ends a line. */
const WJ = '\u2060';
/** The combining right arrow over a vector's letters. */
const ARW = '\u20d7';
/** The combining hat over a unit vector's letter. */
const HAT = '\u0302';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

/** A vector: its letter(s) and the arrow, inside the italic (decision 36). */
const V = (s: string) => I(`${s}${ARW}`);
const ZERO = `0${ARW}`;
const ii = I('\u00ee');
const jj = I('\u0135');
const kk = I(`k${HAT}`);

const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const k = I('k');
const t = I('t');
const x = I('x');
const y = I('y');
const z = I('z');
const A = I('A');
const B = I('B');
const C = I('C');
const D = I('D');
const F = I('F');
const L = I('L');
const M = I('M');
const O = I('O');
const P = I('P');
const Q = I('Q');
const R = I('R');
const S = I('S');
const T = I('T');
const la = I('λ');
const mu = I('μ');
const th = I('θ');
const ph = I('φ');
const pi = I('π');

const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const abs = (s: string) => `|${WJ}${s}|`;
const rt = (s: string) => `√(${s})`;
const rel = (lhs: string, op: string, rhs: string) => `${lhs}${NB}${op}${NB}${rhs}`;
/** A point or triple, its commas glued: (1, −1, 3). */
const pt = (...s: string[]) => `(${s.join(`,${NB}`)})`;
/** A ratio m ∶ n, glued. */
const ratio = (u: string, v: string) => `${u}${NB}∶${NB}${v}`;
const dot = (u: string, v: string) => `${u}${NB}·${NB}${v}`;
/** Every space in a short expression made a no-break space, so it never wraps inside. */
const g = (s: string) => s.replace(/ /g, NB);
/** A point whose coordinates are short sums, each glued: (1 + t, −5 + t, 9 + t) never splits. */
const gpt = (...s: string[]) => g(pt(...s));
const SIN = (s: string) => `sin${NB}${s}`;
const COS = (s: string) => `cos${NB}${s}`;

const x1 = sb(x, '1');
const x2 = sb(x, '2');
const y1 = sb(y, '1');
const z1 = sb(z, '1');
const L1 = sb(L, '1');
const L2 = sb(L, '2');
const P1 = sb(P, '1');
const P2 = sb(P, '2');
const la0 = sb(la, '0');
const laS = sb(la, S);

const va = V('a');
const vb = V('b');
const vd = V('d');
const vn = V('n');
const vp = V('p');
const vr = V('r');
const vF = V('F');
const vN = V('N');
const vP = V('P');
const vPp = `${vP}′`;
const va1 = sb(va, '1');
const va2 = sb(va, '2');
const vb1 = sb(vb, '1');
const vb2 = sb(vb, '2');
const vn1 = sb(vn, '1');
const vn2 = sb(vn, '2');
const vAB = V('AB');
const vAP = V('AP');
const vPF = V('PF');
const vQT = V('QT');
const vPS = V('PS');

const A21 = `${va2}${NB}−${NB}${va1}`;
const B1XB2 = `${vb1} × ${vb2}`;
const SKEW_D = fr(abs(`(${A21})${NB}·${NB}(${B1XB2})`), abs(B1XB2));
const PAR_D = fr(abs(`${vb} × (${A21})`), abs(vb));
const COPL = `(${A21})${NB}·${NB}(${B1XB2}) = 0`;
const LA0 = fr(dot(`(${vp} − ${va})`, vb), `${abs(vb)}<sup>2</sup>`);
const PFD = fr(abs(`(${vp} − ${va}) × ${vb}`), abs(vb));
const PLANE_L = `${a}${x1} + ${b}${y1} + ${c}${z1} + ${d}`;
const ABC2 = `${sq(a)} + ${sq(b)} + ${sq(c)}`;
const TPAR = fr(PLANE_L, ABC2);
const DIST_PL = fr(abs(PLANE_L), rt(ABC2));
const COS_PP = fr(abs(dot(vn1, vn2)), `${abs(vn1)}${abs(vn2)}`);
const SIN_LP = fr(abs(dot(vb, vn)), `${abs(vb)}${abs(vn)}`);
const COS_LL = fr(abs(dot(vb1, vb2)), `${abs(vb1)}${abs(vb2)}`);
const BIS = `${fr(P1, abs(vn1))}${NB}=${NB}±${fr(P2, abs(vn2))}`;
const FAMILY = `${P1} + ${la}${P2} = 0`;
const BN0 = `${dot(vb, vn)} = 0`;

const PL_A = g(`2${x} − ${y} + 2${z} − 4`);
const PL_B = g(`${x} + 2${y} + 2${z} − 2`);
const PL_C = g(`2${x} − ${y} − 4`);
const PL_D = g(`${y} + 2${z} − 4`);
const XYZ = `${x} = ${y} = ${z}`;
const HALF = fr('1', '2');
const RT2 = fr('1', '√2');
const TEN_RT3 = `10√${WJ}3`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic P (the book's Addendum P) · pp. 753–762 ────────────────
  {
    n: 'P',
    title: 'What JEE Actually Asks',
    extra: true,
    blocks: [
      { t: 'part', title: 'The distribution' },
      {
        t: 'p',
        html: `Over four decades of JEE Main and Advanced papers, the following emphasis emerges across the six topics of the chapter ${ESTIMATE}. Each count is the number of questions listed in that row; many questions span two topics, so the rows overlap.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Topic (NCERT label)', 'Key JEE themes', 'Papers cited'],
        rows: [
          [
            '<b>Foundations</b> (distance, section formula, centroid, collinearity)',
            'Section formula with sign handling, centroid to find unknown vertex, distance from axis vs. plane, collinearity via direction ratios',
            '8 (JEE 2, Main 5, Adv 1)',
          ],
          [
            '<b>Direction Cosines / Ratios & Line Equations</b>',
            'DC/DR conversion, angle between lines via DCs, line through two points, equally inclined lines',
            '9 (JEE 3, Main 3 including one Main Online, Adv 2, exam not named 1)',
          ],
          [
            '<b>Shortest Distance & Angle Between Lines</b>',
            'Skew-line distance (vector & Cartesian), coplanarity condition, common perpendicular, parallel-line distance',
            '10 (JEE 4, Main 3, Adv 2, exam not named 1)',
          ],
          [
            '<b>Planes – Equations, Family, Angles, Distances</b>',
            `Plane through intercepts/points/line, family ${FAMILY}, angle bisectors, point–plane distance, parallel planes distance, plane perpendicular to two planes`,
            '54 (JEE 18, Main 24 including two Main Online, Adv 8, exam not named 4)',
          ],
          [
            '<b>Perpendicular Toolkit</b> (foot, distance, image in line/plane)',
            'Foot of perpendicular from point to line/plane, image of point, distance measured parallel to a line, reflection in a plane',
            '15 (JEE 2, Main 10, Adv 1, exam not named 2)',
          ],
          [
            '<b>Line–Plane &<br>Plane–Plane Configurations</b>',
            'Line–plane intersection, “parallel vs. lies in” test, plane containing given lines, projection/reflection of a line, locus of feet',
            '13 (JEE 3, Main 7, Adv 3)',
          ],
        ],
      },
      {
        t: 'p',
        html: `<b>Takeaway:</b> Planes (family, bisectors, distances) and the perpendicular toolkit (foot/image) together account for well over half of the listed questions (69 of 109) ${ESTIMATE}. The “foundations” and “direction cosines” appear mostly as building blocks inside larger problems. JEE Advanced frequently mixes 3-D geometry with vectors, loci, and polyhedra ${ESTIMATE}.`,
      },

      { t: 'part', title: 'The recurring archetypes' },
      {
        t: 'p',
        html: 'Here are the 7 question shapes that reappear most often. For each we give the look, the core method, and a <b>fully worked example</b>.',
      },
      {
        t: 'ex',
        tag: 'Shortest Distance Between Two Lines (Skew / Parallel) & Coplanarity',
        q: `<b>Look:</b> Two lines given in vector or Cartesian form (one may be the intersection of two planes). Ask for the shortest distance, or “find ${k} so that the lines are coplanar / intersect”.<br><b>Method:</b><br>• For skew lines ${vr} = ${va1} + ${la}${vb1}, ${vr} = ${va2} + ${mu}${vb2}:<br>${d} = ${SKEW_D}.<br>• For parallel lines (${vb1} ∥ ${vb2}): ${d} = ${PAR_D}.<br>• Coplanarity ⟺<br>${COPL}.<br><b>Always compute</b> ${B1XB2} <b>first</b> – its magnitude is the denominator and its zero-ness tells you instantly whether the lines are parallel.<br><b>Worked Example</b> (adapted from <b>JEE Main</b>):<br>Find the shortest distance between the line ${L1}: ${fr(`${x} + 2`, '1')} = ${fr(y, '−1')} = ${fr(`${z} − 1`, '2')} and the line ${L2} which is the intersection of the planes ${x} + ${y} + ${z} + 1 = 0 and 2${x} − ${y} + ${z} + 3 = 0.`,
        steps: [
          `${L1} passes through ${A}${pt('−2', '0', '1')} with direction ${vb1} = ${pt('1', '−1', '2')}.<br>${L2} is the intersection of the two planes. A direction vector is ${vb2} = ${vn1} × ${vn2} where ${vn1} = ${pt('1', '1', '1')}, ${vn2} = ${pt('2', '−1', '1')}.`,
          `${vb2} = ${vm([ii, jj, kk], ['1', '1', '1'], ['2', '−1', '1'])} = ${pt('2', '1', '−3')}.`,
          `A point on ${L2}: set ${rel(y, '=', '0')} in the planes ⇒ ${x} + ${z} + 1 = 0, 2${x} + ${z} + 3 = 0. Subtracting gives ${rel(x, '=', '−2')}, then ${rel(z, '=', '1')}. So ${B}${pt('−2', '0', '1')}.`,
          `${A21} = ${ZERO} – the lines <b>share the point</b> ${pt('−2', '0', '1')}! Hence they intersect and the shortest distance is <b>0</b>.`,
          `(Cross-check: ${B1XB2} = ${pt('1', '−1', '2')}${NB}×${NB}${pt('2', '1', '−3')} = ${pt('1', '7', '3')} ≠ ${ZERO}, so the lines are not parallel, and ${COPL} confirms that they meet.)`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Plane Through the Intersection of Two Planes (Family P₁ + λP₂ = 0) with an Extra Condition',
        q: `<b>Look:</b> “Find the equation of the plane through the line of intersection of planes ${rel(P1, '=', '0')} and ${rel(P2, '=', '0')} that also passes through a given point / is parallel to a given line / is perpendicular to a given plane / is at a given distance from a point.”<br><b>Method:</b> Write the family ${FAMILY} (or ${mu}${P1} + ${P2} = 0 to avoid missing ${P2}). Impose the extra condition to get a linear equation in ${la}. Substitute back and simplify.<br><br><b>Worked Example</b> (<b>JEE Main</b>):<br>Find the equation of the plane containing the line of intersection of the planes ${PL_C} = 0 and ${PL_D} = 0 and passing through the point ${pt('1', '1', '0')}.`,
        steps: [
          `Family: (${PL_C}) + ${la}(${PL_D}) = 0.`,
          `Passes through ${pt('1', '1', '0')}: (2${NB}−${NB}1${NB}−${NB}4) + ${la}(1${NB}+${NB}0${NB}−${NB}4)${NB}=${NB}0<br>⇒ −3 − 3${la} = 0 ⇒ ${rel(la, '=', '−1')}.`,
          `Substitute ${rel(la, '=', '−1')}: (${PL_C}) − (${PL_D}) = 0 ⇒ 2${x} − 2${y} − 2${z} = 0.`,
        ],
        ans: `${x} − ${y} − ${z} = 0`,
      },
      {
        t: 'ex',
        tag: 'Foot of Perpendicular & Image of a Point in a Line / Plane',
        q: `<b>Look:</b> “Find the foot / distance / image of point ${P} in the line ${L} / plane ${pi}.” Often combined: “The foot lies on which plane?” or “The image satisfies …”.<br><b>Method:</b><br>• <b>Line</b> ${vr} = ${va} + ${la}${vb}: ${la0} = ${LA0}, foot ${vF} = ${va} + ${la0}${vb}, distance ${I('PF')} = ${PFD}, image ${vPp} = 2${vF} − ${vp}.<br>• <b>Plane</b> ${a}${x} + ${b}${y} + ${c}${z} + ${d} = 0: ${t} = ${TPAR}, foot ${vF} = ${vP} − ${t}${vn}, image ${vPp} = ${vP} − 2${t}${vn}, distance${NB}=${NB}${abs(t)}${abs(vn)}${NB}=${NB}${DIST_PL}.<br><b>Always verify</b> ${dot(vPF, vb)} = 0 <b>(line) or that</b> ${F} <b>satisfies the plane equation – it catches sign errors.</b><br><b>Worked Example</b> (<b>JEE Main</b>):<br>The foot of the perpendicular drawn from the point ${P}${pt('4', '2', '3')} to the line joining ${A}${pt('1', '−2', '3')} and ${B}${pt('1', '1', '0')} lies on which plane?<br>(a) 2${x} + ${y} − ${z} = 1 (b) ${x} − ${y} − 2${z} = 1 (c) ${x} − 2${y} + ${z} = 1 (d) ${x} + 2${y} − ${z} = 1`,
        steps: [
          `Line ${I('AB')}: direction ${vb} = ${pt('0', '3', '−3')} ∥ ${pt('0', '1', '−1')}. Parametric: ${gpt('1', `−2 + ${la}`, `3 − ${la}`)}.`,
          `${vAP} = ${pt('3', '4', '0')}. ${la0} = ${fr(dot(vAP, vb), `${abs(vb)}<sup>2</sup>`)} = ${fr(dot(pt('3', '4', '0'), pt('0', '1', '−1')), '2')} = ${fr('4', '2')} = 2.`,
          `Foot ${F} = ${pt('1', '0', '1')}.`,
          `Check the options:<br>(a) 2${x} + ${y} − ${z} = 1 ⇒ 2 + 0 − 1 = 1 ✓<br>(b) ${x} − ${y} − 2${z} = 1 ⇒ 1 − 0 − 2 = −1 ×<br>(c) ${x} − 2${y} + ${z} = 1 ⇒ 1 − 0 + 1 = 2 ×<br>(d) ${x} + 2${y} − ${z} = 1 ⇒ 1 + 0 − 1 = 0 ×`,
        ],
        ans: `(a) 2${x} + ${y} − ${z} = 1.`,
      },
      {
        t: 'ex',
        tag: 'Angle Between a Line and a Plane (the Sine Trap) & Angle Between Two Planes',
        q: `<b>Look:</b> “Find the angle between the line ${fr(`${x} − ${x1}`, a)} = ${fr(`${y} − ${y1}`, b)} = ${fr(`${z} − ${z1}`, c)} and the plane ${A}${x} + ${B}${y} + ${C}${z} + ${D} = 0.” Or “Find the angle between two planes.”<br><b>Method:</b><br>• Plane–plane: ${COS(th)} = ${COS_PP}.<br>• Line–plane: <b>sine</b>, not cosine! ${SIN(ph)}${NB}=${NB}${SIN_LP} where ${vb} is the line direction and ${vn} the plane normal.<br>• Bisector planes of ${rel(P1, '=', '0')} and ${rel(P2, '=', '0')}: ${BIS} (two perpendicular planes).<br><br><b>Worked Example</b> (<b>JEE Main</b>):<br>A plane which bisects the angle between the two given planes ${PL_A} = 0 and ${PL_B} = 0 passes through which point?<br>(a) ${pt('1', '−4', '1')} (b) ${pt('1', '4', '−1')} (c) ${pt('2', '4', '1')} (d) ${pt('2', '−4', '1')}`,
        steps: [
          `${abs(vn1)}${NB}=${NB}√(4${NB}+${NB}1${NB}+${NB}4)${NB}=${NB}3, ${abs(vn2)}${NB}=${NB}√(1${NB}+${NB}4${NB}+${NB}4)${NB}=${NB}3.`,
          `Bisectors: ${fr(PL_A, '3')} = ±${fr(PL_B, '3')} ⇒<br>${PL_A} = ±(${PL_B}).`,
          `Case +: ${x} − 3${y} − 2 = 0.<br>Case −: 3${x} + ${y} + 4${z} − 6 = 0.`,
          `Test the options:<br>${pt('2', '−4', '1')} in the second plane: 3(2)${NB}+${NB}(−4)${NB}+${NB}4(1)${NB}−${NB}6 = 6${NB}−${NB}4${NB}+${NB}4${NB}−${NB}6${NB}=${NB}0${NB}✓. The other three options lie on neither bisector.`,
        ],
        ans: `(d) ${pt('2', '−4', '1')}.`,
      },
      {
        t: 'ex',
        tag: 'Line–Plane Intersection and the “Parallel vs. Lies In” Decision',
        q: `<b>Look:</b> A line and a plane are given. Determine whether they intersect (and find the point), or the line lies in the plane, or is parallel to it.<br><b>Method:</b><br>1. Compute ${dot(vb, vn)}.<br>• If ≠ 0: line <b>pierces</b> the plane. Substitute parametric point into plane, solve for ${la}.<br>• If = 0: line is <b>parallel</b> to the plane. Test any point of the line in the plane equation.<br>• Point satisfies ⇒ line <b>lies in</b> the plane.<br>• Point does not satisfy ⇒ line is <b>strictly parallel</b>.<br><b>Never stop at</b> ${BN0}<b>; the point test is mandatory.</b><br><br><b>Worked Example</b> (<b>JEE</b>):<br>Point ${P} is the intersection of the line joining ${Q}${pt('2', '3', '5')} and ${R}${pt('1', '−1', '4')} with the plane 5${x} − 4${y} − ${z} = 1. ${S} is the foot of the perpendicular from ${T}${pt('2', '1', '4')} to ${I('QR')}. Find ${I('PS')}.`,
        steps: [
          `Line ${I('QR')}: ${vr} = ${pt('2', '3', '5')} + ${la}${pt('−1', '−4', '−1')}.`,
          `Intersection ${P}: substitute into plane:<br>5(2 − ${la}) − 4(3 − 4${la}) − (5 − ${la}) = 1 ⇒<br>10${NB}−${NB}5${la}${NB}−${NB}12${NB}+${NB}16${la}${NB}−${NB}5${NB}+${NB}${la}${NB}=${NB}1 ⇒ 12${la} = 8 ⇒ ${la} = ${fr('2', '3')}.<br>${P} = ${pt(fr('4', '3'), fr('1', '3'), fr('13', '3'))}.`,
          `Foot ${S} from ${T} to ${I('QR')}: ${vQT} = ${pt('0', '−2', '−1')}, ${vd} = ${pt('−1', '−4', '−1')}, ${abs(vd)}<sup>2</sup> = 18.<br>${laS} = ${fr(dot(vQT, vd), `${abs(vd)}<sup>2</sup>`)} = ${fr('9', '18')} = ${HALF}.<br>${S} = ${pt('2', '3', '5')} + ${HALF}${pt('−1', '−4', '−1')} = ${pt(fr('3', '2'), '1', fr('9', '2'))}.`,
          `${vPS} = ${pt(fr('1', '6'), fr('2', '3'), fr('1', '6'))}, ${abs(vPS)} = √(${fr('1', '36')} + ${fr('4', '9')} + ${fr('1', '36')}) = √(${fr('18', '36')}) = ${RT2}.`,
        ],
        ans: `${RT2} (or ${fr('√2', '2')}).`,
      },
      {
        t: 'ex',
        tag: 'Plane Containing Given Lines (Intersecting / Parallel) or a Line and a Point',
        q: `<b>Look:</b> “Find the plane passing through points ${A}, ${B} and parallel to line ${L}” or “containing lines ${L1} and ${L2}” or “through point ${P} and containing lines with DRs …”.<br><b>Method:</b> The normal is always the cross product of <b>two vectors lying in the plane</b>.<br>• Two intersecting lines: ${vN} = ${B1XB2}.<br>• Two parallel lines: ${vN} = ${vb} × (${A21}).<br>• Line + external point: ${vN} = ${vb} × (${vP}${NB}−${NB}${va}).<br>Then use point–normal form.<br><br><b>Worked Example</b> (<b>JEE Main</b>):<br>Find the plane passing through ${pt('1', '2', '1')} and ${pt('2', '1', '2')} and parallel to the line 2${x} = 3${y}, ${rel(z, '=', '1')}, and show that it also passes through ${pt('−2', '0', '1')}.`,
        steps: [
          `Line 2${x} = 3${y}, ${rel(z, '=', '1')} ⇒ direction ${vb} = ${pt('3', '2', '0')} (or ${pt('−3', '−2', '0')}).`,
          `Points ${A}${pt('1', '2', '1')}, ${B}${pt('2', '1', '2')} ⇒ ${vAB} = ${pt('1', '−1', '1')}.`,
          `Normal ${vN} = ${vAB} × ${vb} = ${pt('1', '−1', '1')} × ${pt('3', '2', '0')} = ${pt('−2', '3', '5')}.`,
          `Plane through ${A}: −2(${x} − 1) + 3(${y} − 2) + 5(${z} − 1) = 0 ⇒<br>−2${x}${NB}+${NB}3${y}${NB}+${NB}5${z}${NB}−${NB}9${NB}=${NB}0 ⇒ 2${x}${NB}−${NB}3${y}${NB}−${NB}5${z}${NB}+${NB}9${NB}=${NB}0.`,
          `Check: ${pt('−2', '0', '1')} gives −4 − 0 − 5 + 9${NB}=${NB}0${NB}✓.`,
        ],
        ans: `2${x} − 3${y} − 5${z} + 9 = 0, which passes through ${pt('−2', '0', '1')}.`,
      },
      {
        t: 'ex',
        tag: 'Distance of a Point from a Plane Measured Parallel to a Given Line',
        q: `<b>Look:</b> “Distance of point ${P} from plane ${pi} measured parallel to line ${L}.”<br><b>Method:</b> Write the line through ${P} parallel to ${L} (direction ${vb}). Find its intersection ${Q} with the plane. The required distance is ${I('PQ')}.<br><br><b>Worked Example</b> (<b>JEE Main</b>):<br>Distance of the point ${pt('1', '−5', '9')} from the plane ${x} − ${y} + ${z} = 5 measured along the line ${XYZ}.`,
        steps: [
          `Line through ${P} parallel to ${XYZ} has direction ${pt('1', '1', '1')}. Parametric: ${gpt(`1 + ${t}`, `−5 + ${t}`, `9 + ${t}`)}.`,
          `Substitute into plane: ${g(`(1 + ${t}) − (−5 + ${t}) + (9 + ${t}) = 5`)} ⇒${NB}${g(`15 + ${t} = 5`)} ⇒${NB}${rel(t, '=', '−10')}.`,
          `Intersection ${Q} = ${pt('−9', '−15', '−1')}.`,
          `${g(`${I('PQ')} = √((−10)<sup>2</sup> + (−10)<sup>2</sup> + (−10)<sup>2</sup>)`)}<br>= ${TEN_RT3}.`,
        ],
        ans: `The distance ${I('PQ')} is ${TEN_RT3}.`,
      },

      { t: 'part', title: 'The traps' },
      { t: 'p', html: 'These are the specific mistakes that JEE three-dimensional geometry questions are engineered to punish.' },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'Description', 'Typical Distractor'],
        rows: [
          [
            '<b>Section-formula weight swap</b>',
            `In ${ratio(I('m'), I('n'))} from ${A}, the weight ${I('m')} multiplies the far endpoint ${B}.`,
            `Option with coordinates averaged the wrong way (e.g. midpoint instead of ${ratio('1', '3')}).`,
          ],
          [
            '<b>Negative ratio = external division</b>',
            `Solving for ${k} in ${fr(`${k}${x2} + ${x1}`, `${k} + 1`)} = 0 gives ${k} = −${fr(x1, x2)}; a negative ${k} means the plane cuts the segment externally.`,
            `Treating negative ${k} as an error or ignoring the sign.`,
          ],
          [
            '<b>Modulus in angle formula</b>',
            `${COS(th)} = ${COS_LL} – never obtuse (0° ≤ ${th} ≤ 90°).`,
            `Forgetting | · | and reporting an obtuse angle (e.g. cos<sup>−1</sup>(−${fr('4', '9')})).`,
          ],
          [
            '<b>Sine vs. cosine for line–plane angle</b>',
            `Line–plane uses <b>sine</b>:<br>${SIN(ph)} = ${SIN_LP}.`,
            `Using cosine (i.e. finding the angle with the normal) – the most common single-mark loss ${ESTIMATE}.`,
          ],
          [
            '<b>Bisector planes need normalisation</b>',
            `${BIS}.`,
            `Equating raw plane expressions ${P1} = ±${P2} – unless ${abs(vn1)} = ${abs(vn2)}, this gives a plane through the intersection but not the angle bisector.`,
          ],
          [
            '<b>Parallel vs. lies in plane</b>',
            `${BN0} only implies parallel; must test a point to distinguish “lies in” from “strictly parallel”.`,
            `Declaring “line lies in the plane” after only checking ${BN0}.`,
          ],
          [
            '<b>Wrong denominator in point–line distance</b>',
            `Distance = ${PFD} (one power of ${abs(vb)}).`,
            `Dividing by ${abs(vb)}<sup>2</sup> or omitting the denominator.`,
          ],
          [
            `<b>The parameter ${t} vs. the distance in point–plane</b>`,
            `${t} = ${TPAR} (divides by ${abs(vn)}<sup>2</sup>); distance = ${abs(t)}${abs(vn)} (divides by ${abs(vn)}).`,
            `Confusing the two – off by a factor of ${abs(vn)}.`,
          ],
          [
            '<b>Image of point = 2 × foot − point</b>',
            `${vPp} = 2${vF} − ${vP} works for both line and plane.`,
            `Reporting the foot ${vF} as the image.`,
          ],
          [
            '<b>A plane family cannot produce its own second plane</b>',
            `If the answer is ${P2} itself, use ${mu}${P1} + ${P2} = 0.`,
            `Missing the second bisector / the plane ${P2} in the family.`,
          ],
        ],
      },

      { t: 'part', title: 'A graded practice set' },
      { t: 'p', html: 'Eight questions in ascending difficulty. Full solutions are given with each question.' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[JEE Main – Easy]</b> Point ${R}${pt('4', y, z)} lies on the segment joining ${P}${pt('2', '−3', '4')} and ${Q}${pt('8', '0', '10')}. Find the distance of ${R} from the origin.`,
            a: `<b>Section formula:</b> ${R} divides ${I('PQ')} in some ratio ${ratio(la, '1')}.<br>${fr(`2 + 8${la}`, `1 + ${la}`)}${NB}=${NB}4<br>⇒ ${g(`2 + 8${la} = 4 + 4${la}`)}<br>⇒ ${g(`4${la} = 2`)} ⇒${NB}${la}${NB}=${NB}${HALF}.<br>Then ${y}${NB}=${NB}${fr(`−3 + 0 ⋅ ${la}`, `1 + ${la}`)}${NB}=${NB}−2, ${z}${NB}=${NB}${fr(`4 + 10${la}`, `1 + ${la}`)}${NB}=${NB}6.<br>${g(`${I('OR')} = √(4<sup>2</sup> + (−2)<sup>2</sup> + 6<sup>2</sup>) = √56 = 2√14`)}.<br><b>Answer:</b> 2√14.`,
          },
          {
            q: `<b>[JEE Main – Easy]</b> Triangle ${I('ABC')} has ${A}${pt('2', '3', '5')}, ${B}${pt('−1', '3', '2')}, ${C}${pt(la, '5', mu)}. The median through ${A} is equally inclined to the axes. Find ${pt(la, mu)}.`,
            a: `<b>Median equally inclined ⇒ direction ratios of</b> ${I('AD')} <b>are equal.</b><br>${D} is midpoint of ${I('BC')}: ${D}${NB}=${NB}${pt(fr(`${la} − 1`, '2'), '4', fr(`${mu} + 2`, '2'))}.<br>${V('AD')}${NB}=${NB}${pt(`${fr(`${la} − 1`, '2')}${NB}−${NB}2`, '1', `${fr(`${mu} + 2`, '2')}${NB}−${NB}5`)}<br>= ${pt(fr(`${la} − 5`, '2'), '1', fr(`${mu} − 8`, '2'))}.<br>Equal inclination${NB}⇒${NB}${fr(`${la} − 5`, '2')}${NB}=${NB}1${NB}=${NB}${fr(`${mu} − 8`, '2')}<br>⇒ ${la}${NB}=${NB}7, ${mu}${NB}=${NB}10.<br>(Equal angles with the positive axes, so ${I('l')} = ${I('m')} = ${I('n')}; reading them as angles between lines would also allow ${pt('3', '10')}, ${pt('7', '6')} and ${pt('3', '6')}.)<br><b>Answer:</b> ${pt('7', '10')}.`,
          },
          {
            q: `<b>[JEE Main – Medium]</b> Find${NB}the${NB}foot of the perpendicular from ${P}${pt('4', '2', '3')} to the line through ${A}${pt('1', '−2', '3')} and ${B}${pt('1', '1', '0')}. Which plane among 2${x} + ${y} − ${z} = 1, ${x} − ${y} − 2${z} = 1, ${x} − 2${y} + ${z} = 1, ${x} + 2${y} − ${z} = 1 contains this foot?`,
            a: `<b>Same as the third worked example above.</b> Foot ${F} = ${pt('1', '0', '1')} lies on 2${x} + ${y} − ${z} = 1.<br><b>Answer:</b> 2${x} + ${y} − ${z} = 1 (the first plane).`,
          },
          {
            q: `<b>[JEE Main – Medium]</b> The${NB}plane bisecting the segment joining ${pt('4', '−2', '3')} and ${pt('2', '4', '−1')} at${NB}right${NB}angles passes through which${NB}point?<br>(a) ${pt('4', '0', '1')} (b) ${pt('0', '−1', '1')}<br>(c) ${pt('4', '0', '−1')} (d) ${pt('0', '1', '−1')}`,
            a: `<b>Perpendicular bisector plane:</b> Midpoint ${M} = ${pt('3', '1', '1')}. Normal${NB}=${NB}direction of segment = ${pt('−2', '6', '−4')} ∥ ${pt('1', '−3', '2')}.<br>Plane:${NB}${g(`(${x} − 3) − 3(${y} − 1)`)} + ${g(`2(${z} − 1) = 0`)} ⇒${NB}${g(`${x} − 3${y} + 2${z} − 2 = 0`)}.<br>Check options: ${pt('0', '1', '−1')} gives 0 − 3 − 2 − 2 = −7; ${pt('0', '−1', '1')} gives 0 + 3 + 2 − 2 = 3; ${pt('4', '0', '−1')} gives 4 + 0 − 2 − 2 = 0 ✓.<br><b>Answer:</b> (c) ${pt('4', '0', '−1')}.`,
          },
          {
            q: `<b>[JEE Main – Medium]</b> Equation of the plane through the line of intersection of ${PL_C} = 0 and ${PL_D} = 0 and passing through ${pt('1', '1', '0')}.`,
            a: `<b>Family of planes:</b> (${PL_C})${NB}+${NB}${la}(${PL_D})${NB}=${NB}0. Through ${pt('1', '1', '0')}: ${g(`−3 − 3${la} = 0`)} ⇒${NB}${rel(la, '=', '−1')}.<br>Plane: ${g(`2${x} − ${y} − 4 − ${y} − 2${z} + 4 = 0`)} ⇒${NB}${g(`${x} − ${y} − ${z} = 0`)}.<br><b>Answer:</b> ${x} − ${y} − ${z} = 0.`,
          },
          {
            q: `<b>[JEE Main – Medium]</b> The${NB}plane bisecting the angle between ${PL_A} = 0 and ${PL_B} = 0 passes through which point?<br>(a) ${pt('1', '−4', '1')} (b) ${pt('1', '4', '−1')} (c) ${pt('2', '4', '1')} (d) ${pt('2', '−4', '1')}`,
            a: `<b>Same as the fourth worked example above.</b> Bisectors: ${x} − 3${y} − 2 = 0 and 3${x} + ${y} + 4${z} − 6 = 0. ${pt('2', '−4', '1')} satisfies the second.<br><b>Answer:</b> (d) ${pt('2', '−4', '1')}.`,
          },
          {
            q: `<b>[JEE Main – Hard]</b> Distance of ${pt('1', '−5', '9')} from the plane ${x} − ${y} + ${z} = 5 measured parallel to the line ${XYZ}.`,
            a: `<b>Same as the seventh worked example above.</b> Parametric line: ${gpt(`1 + ${t}`, `−5 + ${t}`, `9 + ${t}`)}. Intersection ${rel(t, '=', '−10')}, ${Q}${NB}=${NB}${pt('−9', '−15', '−1')}.<br>Distance = ${g('√((−10)<sup>2</sup> + (−10)<sup>2</sup> + (−10)<sup>2</sup>)')} = ${TEN_RT3}.<br><b>Answer:</b> ${TEN_RT3}.`,
          },
          {
            q: `<b>[JEE Advanced, adapted – Hard]</b> Pyramid ${I('OPQRS')} has ${O}${pt('0', '0', '0')}, ${P}${pt('3', '0', '0')}, ${R}${pt('0', '3', '0')}. Base ${I('OPQR')} is a square (${I('OP')} = 3). ${S} is above the midpoint ${T} of ${I('OQ')} with ${I('TS')} = 3. Which of the following are true?<br>(a) Acute angle between ${I('OQ')} and ${I('OS')} is cos<sup>−1</sup>${NB}${fr('1', '√3')}.<br>(b) Plane ${I('OQS')} is ${x} − ${y} = 0.<br>(c) Perpendicular distance from ${P} to plane ${I('OQS')} is ${fr('3', '√2')}.<br>(d) Perpendicular distance from ${O} to line ${I('RS')} is ${fr('√30', '2')}.`,
            a: `<b>Coordinates:</b> ${Q}${NB}=${NB}${pt('3', '3', '0')}, ${T}${NB}=${NB}${pt('1.5', '1.5', '0')}, ${S}${NB}=${NB}${pt('1.5', '1.5', '3')}.<br>(a) cos${NB}∠(${I('OQ')},${NB}${I('OS')})<br>= ${fr(dot(pt('3', '3', '0'), pt('1.5', '1.5', '3')), `√18${NB}√13.5`)} = ${fr('9', '9√3')} = ${fr('1', '√3')}${NB}–${NB}<b>true</b>.<br>(b) ${I('OQ')}${NB}×${NB}${I('OS')} = ${pt('3', '3', '0')}${NB}×${NB}${pt('1.5', '1.5', '3')}<br>= ${pt('9', '−9', '0')} ⇒${NB}${g(`${x} − ${y} = 0`)}${NB}–${NB}<b>true</b>.<br>(c) Distance from ${P}${pt('3', '0', '0')} to ${x} − ${y} = 0: ${fr(abs('3 − 0'), '√2')} = ${fr('3', '√2')}${NB}–${NB}<b>true</b>.<br>(d) ${I('RS')} = ${pt('1.5', '−1.5', '3')}, ${I('OR')}${NB}=${NB}${pt('0', '3', '0')}.<br>${abs(`${I('OR')} × ${I('RS')}`)} = ${abs(pt('9', '0', '−4.5'))} = √(81 + 20.25) = √101.25 = ${fr('9√5', '2')}.<br>${abs(I('RS'))} = √(2.25 + 2.25 + 9) = √13.5 = ${fr('3√6', '2')}.<br>Distance${NB}=${NB}${fr('9√5', '2')}${NB}·${NB}${fr('2', '3√6')}<br>= ${fr('3√5', '√6')} = ${fr('√30', '2')}${NB}–${NB}<b>true</b>.<br><b>Answer: (a), (b), (c), (d) all true.</b>`,
          },
        ],
      },

      { t: 'part', title: 'Where JEE goes beyond the chapter' },
      {
        t: 'p',
        html: `JEE routinely <b>fuses</b> the perpendicular toolkit with the family of planes ${ESTIMATE}: for example, a plane taken from a family ${FAMILY} is used as a mirror to find an image, or the foot of a perpendicular from a point to a line is immediately tested against another plane. Practise two further patterns on their own: <b>distance measured parallel to a line</b> (not perpendicular: the seventh archetype above), and <b>locus problems</b>, such as the set of feet of perpendiculars from the origin to planes through a fixed point (Additional topic E). Finally, keep the why of the line–plane formula in mind: the angle ${ph} between a line and a plane is the complement of the angle between the line and the normal, so ${SIN(ph)} = ${SIN_LP}: sine rather than cosine, and the modulus keeps ${ph} between 0° and 90°. Remembering that logic is the surest defence against the cosine trap.`,
      },
    ],
  },
];
