import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 12 Linear Programming, Additional topics A–E, pp. 799–812 of the
 * Class 12 Mathematics Master Reference (October 2026 edition), word for
 * word: the "Chapter 12: Linear Programming (a dash in print) Additional
 * Topics" part's Addenda A to E, with the book's letters. Its heading is not
 * copied; its p. 799 opening paragraph is the first paragraph of A's
 * "Introduction". Each addendum's opening text is its "Introduction" part,
 * then its own headings as parts ("Method", the run of "Example X.N" worked
 * examples as one part "Worked examples", and "Practice (Addendum X)" as
 * "Practice", answers set against their questions). A has no worked examples.
 * The closing "Closing triage" paragraph (p. 812, after E's answers) is E's
 * last part. This chapter has no Addendum P. B's and E's numbered steps are
 * `proc` blocks ("Method", "Procedure"); D's "Step N" items are bold run-in
 * paragraphs as printed. "Subtopic 0N", "Sub-0N" → "Topic 0N"; "chapter
 * Example N" → Topic 01's worked example N; "Example X.N" → worked example N
 * (of Additional topic X); "Addendum X" → "Additional topic X". The book's
 * corner-value and strip tables inside worked examples are written in their
 * steps, one row per line (DECISIONS-M12 item 43). One drawing: A's "Figure 1"
 * (p. 801, the convex decomposition of a point of a triangle), m12-12-A-d1.
 * The formula cards repeat formulas the book prints in the prose, for the
 * Formula sheet. A vector is its letters and the combining arrow (escaped
 * ARW) inside one <i> (decision 36). Every fraction is stacked (<frac>); no
 * em dashes. The expert review rm1212b is applied (fx1212): its corrections
 * change the printed words where listed in reports-12/fx1212-applied.md.
 */
const fr = (n1: string, d1: string) => `<frac><num>${n1}</num><den>${d1}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner after an opening modulus bar, so the bar never ends a line. */
const WJ = '\u2060';
/** The combining right arrow over a vector's letters. */
const ARW = '\u20d7';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

/** A vector: its letters and the arrow, inside the italic (decision 36). */
const VEC = (s: string) => I(`${s}${ARW}`);
const abs = (s: string) => `|${WJ}${s}|`;
/** Every space in a short expression made a no-break space, so it never wraps inside. */
const g = (s: string) => s.replace(/ /g, NB);
const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
/** A short relation kept on one line. */
const rel = (l: string, op: string, r2: string) => `${l}${NB}${op}${NB}${r2}`;
/** A coordinate pair kept on one line. */
const pt = (u2: string | number, v2: string | number) => `(${u2},${NB}${v2})`;

const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const i = I('i');
const j = I('j');
const k = I('k');
const m = I('m');
const n = I('n');
const p = I('p');
const q = I('q');
const r = I('r');
const s = I('s');
const t = I('t');
const u = I('u');
const v = I('v');
const x = I('x');
const y = I('y');
const A = I('A');
const B = I('B');
const C = I('C');
const L = I('L');
const M = I('M');
const O = I('O');
const P = I('P');
const Q = I('Q');
const R = I('R');
const U = I('U');
const V = I('V');
const W = I('W');
const Z = I('Z');
const lam = I('λ');
const al = I('α');
const be = I('β');
const ga = I('γ');

const AX = I('ax');
const BY = I('by');
const PX = I('px');
const QY = I('qy');
const KY = I('ky');
/** x, y ≥ 0. */
const XYNONNEG = `${x},${NB}${rel(y, '≥', '0')}`;
/** p, q > 0. */
const PQPOS = `${p},${NB}${rel(q, '>', '0')}`;
const PQ = fr(p, q);
const HALF = fr('1', '2');
const H32 = fr('3', '2');
const Mstar = `${M}<sup>∗</sup>`;
const Zs = `${Z}<sup>∗</sup>`;
const Zint = `${Z}<sub>int</sub>`;
/** 1 − λ, 1 − s, 1 − t. */
const om = (w2: string) => `(1${NB}−${NB}${w2})`;
const Zof = (w2: string) => `${Z}(${w2})`;
const SUM = `∑<sub>${i}</sub>`;
/** The point (7/2, 2), the continuous optimum of Additional topic E. */
const OPT_E1 = `(${fr('7', '2')},${NB}2)`;
const OPT_E2 = `(${fr('9', '4')},${NB}${fr('9', '4')})`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 799–802 ────────────────
  {
    n: 'A',
    title: 'Why the Corner-Point Method Works: The Convexity Proof',
    extra: true,
    kalam: 'No feasible point beats the best vertex.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter teaches formulation, the corner-point method, and the four special cases: everything a standard CBSE LPP question demands. What it deliberately sets aside, and what Additional topics A to E supply, is the layer underneath and the layer beyond. <b>A</b> proves the two fundamental theorems for a bounded region via convex combinations, so you can reproduce the reasoning an examiner may ask you to justify in one mark. <b>B</b> handles parametric objectives: given corners, find every value of the coefficients for which the optimum sits at a chosen vertex, a reliable MCQ and short-answer pattern the chapter touches only once ${ESTIMATE}. <b>C</b> proves infeasibility and redundancy by combining inequalities algebraically, no graph needed. <b>D</b> measures the feasible region: systematic vertex enumeration, area, and lattice-point counts. <b>E</b> solves the integer-answer problem the chapter waves away with “divisibility is assumed”, including a worked demonstration that rounding the continuous optimum genuinely fails. One honest note: LP itself is not examined in JEE, but the machinery of B, C and D (comparing linear forms parametrically, deriving contradictions from inequality systems, counting lattice points in polygonal regions) transfers directly to JEE Main questions in coordinate geometry and inequalities. Nothing here uses anything beyond Chapter 12 plus the determinant formula from Class 12.`,
      },
      {
        t: 'p',
        html: `The chapter states Theorem 1 and offers a sliding-line picture. CBSE rarely asks for the formal proof, but it does ask one-mark justification questions (“why must the optimum be at a corner?”, “why does a tie at two corners give infinitely many optima?”) ${ESTIMATE}, and JEE-minded students should own the real argument. It is four lines long once one lemma is in place.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Definition (convex combination).</b> A point ${P} is a convex combination of points ${sb(P, '1')},${NB}…,${NB}${sb(P, n)} if<br>${P} = ${sb(lam, '1')}${sb(P, '1')} + ${sb(lam, '2')}${sb(P, '2')} + ⋯ + ${sb(lam, n)}${sb(P, n)},<br>where every ${sb(lam, i)}${NB}≥${NB}0 and ${sb(lam, '1')} + ⋯ + ${sb(lam, n)} = 1. Geometrically: ${P} lies somewhere in the polygon spanned by the ${sb(P, i)}.`,
      },
      {
        t: 'p',
        html: `<b>Lemma 1 (linearity of ${Z}).</b> For ${Z} = ${AX} + ${BY}, if ${P} = ${lam}${Q} + ${om(lam)}${R} with 0${NB}≤${NB}${lam}${NB}≤${NB}1, then<br>${Zof(P)} = ${lam}${Zof(Q)} + ${om(lam)}${Zof(R)}.`,
      },
      {
        t: 'formula',
        kicker: `Linearity of ${Z}`,
        main: `${Zof(P)} = ${lam}${Zof(Q)} + ${om(lam)}${Zof(R)}`,
        legend: [
          `${Z} = the objective, ${AX} + ${BY}`,
          `${P} = the point ${lam}${Q} + ${om(lam)}${R} of${NB}the${NB}segment${NB}${I('QR')}`,
          `${lam} = a weight, 0${NB}≤${NB}${lam}${NB}≤${NB}1`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Coordinates:<br>${P}${NB}=${NB}(${lam}${sb(q, x)}${NB}+${NB}${om(lam)}${sb(r, x)},${NB}${lam}${sb(q, y)}${NB}+${NB}${om(lam)}${sb(r, y)}), so<br>${Zof(P)} = ${a}[${lam}${sb(q, x)} + ${om(lam)}${sb(r, x)}] + ${b}[${lam}${sb(q, y)} + ${om(lam)}${sb(r, y)}],<br>and rearranging gives ${lam}(${a}${sb(q, x)} + ${b}${sb(q, y)}) + ${om(lam)}${WJ}(${a}${sb(r, x)} + ${b}${sb(r, y)}).${NB}■`,
      },
      {
        t: 'p',
        html: `<b>Lemma 2 (vertices generate the region).</b> Every point of a convex polygon ${R} with vertices ${sb(V, '1')},${NB}…,${NB}${sb(V, n)} is a convex combination of the vertices.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Triangulate ${R} by drawing all diagonals from ${sb(V, '1')} (this is where convexity, no dents, is used: every such diagonal stays inside ${R}); the polygon splits into ${n} − 2 triangles whose vertices are vertices of ${R}. Any ${P} ∈ ${R} lies in (or on the edge of) one of these triangles, say with vertices ${A}, ${B}, ${C}. It remains to decompose ${P} inside one triangle. Draw the ray from ${A} through ${P}; it meets the segment ${I('BC')} at some point ${Q}. Then:<br>${Q} = ${t}${B} + ${om(t)}${C} for some 0${NB}≤${NB}${t}${NB}≤${NB}1,<br>${P} = ${s}${A} + ${om(s)}${Q} for some 0${NB}≤${NB}${s}${NB}≤${NB}1.<br>Substituting the first into the second:<br>${P} = ${s}${A} + ${om(s)}${t}${B} + ${om(s)}${om(t)}${C}.<br>The three weights are non-negative, and their sum is<br>${s} + ${om(s)}${t} + ${om(s)}${om(t)}<br>= ${s} + ${om(s)}[${t} + 1 − ${t}] = 1.<br>So ${P} is a convex combination of ${A}, ${B}, ${C}, which are themselves vertices of ${R}. Points on a diagonal lie in two triangles; either decomposition works. ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 1, proved.</b> Let ${Mstar} = max{${Zof(sb(V, i))}} over the vertices. For any feasible ${P}, write ${P} = ∑${NB}${sb(lam, i)}${sb(V, i)} by Lemma 2. By Lemma 1 extended to ${n} terms,<br>${Zof(P)} = ${SUM}${NB}${sb(lam, i)}${Zof(sb(V, i))} ≤ ${SUM}${NB}${sb(lam, i)}${Mstar} = ${Mstar}.<br>No feasible point beats the best vertex. The same argument with min gives the minimum. ■`,
      },
      {
        t: 'p',
        html: `<b>Multiple optima, derived.</b> Suppose ${Zof(A)} = ${Zof(B)} = ${Mstar} at two vertices. For any point ${P} of the segment ${I('AB')}, write ${P} = ${lam}${A} + ${om(lam)}${B}; Lemma 1 gives<br>${Zof(P)} = ${lam}${Mstar} + ${om(lam)}${Mstar} = ${Mstar}.<br>Conversely, the objective line ${AX} + ${BY} = ${Mstar} passes through both ${A} and ${B}, hence contains the entire segment through them, and every point of that segment is feasible (convexity again). So the optimum is attained along the whole edge: this is the chapter’s “tie means infinite solutions” property, now proved rather than asserted.`,
      },
      {
        t: 'p',
        html: `<b>Why corner-checking alone fails on unbounded regions.</b> Theorem 1 begins “when ${Z} has an optimal value”: existence is a separate hypothesis. Concrete failure, recomputed: maximise ${Z} = 5${x} + 4${y} over ${x} + ${y} ≥ 8 in the first quadrant. The corner points are ${pt(8, 0)} and ${pt(0, 8)}, giving 40 and 32, so the largest corner value is ${rel(M, '=', '40')}. But ${pt(20, 0)} is feasible (20 ≥ 8) and gives ${Z} = 100 > 40. The largest corner value is simply wrong here, because no maximum exists at all. This is precisely why the half-plane test of Topic 01 is not bookkeeping: it is the existence check the proof requires.`,
      },
      { t: 'fig', id: 'm12-12-A-d1' },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `For the triangle with vertices ${O}${pt(0, 0)}, ${A}${pt(4, 0)}, ${B}${pt(0, 3)}, express ${P} = ${pt(1, 1)} as a convex combination of ${O}, ${A}, ${B}, and use Lemma 1 to compute ${Zof(P)} for ${Z} = ${x} + 2${y} without substituting coordinates.`,
            a: `Solving 4${al} = 1, 3${be} = 1 gives ${al} = ${fr('1', '4')}, ${be} = ${fr('1', '3')}, ${ga} = ${fr('5', '12')}, so ${P} = ${fr('1', '4')}${A} + ${fr('1', '3')}${B} + ${fr('5', '12')}${O}. Then<br>${Zof(P)} = ${fr('1', '4')}${Zof(A)} + ${fr('1', '3')}${Zof(B)} + ${fr('5', '12')}(0)<br>= ${fr('1', '4')}(4) + ${fr('1', '3')}(6) = 3.<br>Direct substitution confirms 1 + 2 = 3.`,
          },
          {
            q: `Using Lemma 1, show that if ${Z} takes equal values at two feasible points ${Q}, ${R}, it takes that value everywhere on segment ${I('QR')}.`,
            a: `Write ${P} = ${lam}${Q} + ${om(lam)}${R}; Lemma 1 gives ${Zof(P)} = ${lam}${c} + ${om(lam)}${c} = ${c} throughout the segment.`,
          },
          {
            q: `The feasible region has vertices ${pt(0, 0)}, ${pt(6, 0)}, ${pt(0, 4)} and ${Z} = 3${x} + ${y}. The point ${pt(2, 2)} is feasible. Without evaluating ${Z} at ${pt(2, 2)}, name a vertex guaranteed to beat it, and verify.`,
            a: `By Theorem 1 the best vertex dominates every feasible point. Corner values: ${Z}${pt(6, 0)} = 18, ${Z}${pt(0, 4)} = 4, ${Z}${pt(0, 0)} = 0; since 18 is the largest vertex value, ${Z}${pt(2, 2)} ≤ 18: indeed ${Z}${pt(2, 2)} = 8.`,
          },
          {
            q: 'In one sentence each: (i) why is it legitimate to check only corner points? (ii) why does that legitimacy collapse when the region is unbounded?',
            a: `(i) Every feasible point is a convex combination of vertices, and ${Z} of a combination cannot exceed the best vertex value.<br>(ii) An unbounded region is not a polygon, so Lemma 2 no longer applies: a feasible point far out is not a convex combination of the vertices, the bound ${Zof(P)} ≤ ${Mstar} loses its proof, and the existence of an optimum is no longer guaranteed. The largest corner value need not be the maximum (see the ${pt(20, 0)} example above).`,
          },
          {
            q: `Over the region ${x} + ${y} ≥ 8, ${XYNONNEG}, minimise ${Z} = 5${x} + 4${y}. Evaluate both corners, decide the minimum, and run the half-plane test to confirm it exists.`,
            a: `Corners ${pt(8, 0)} and ${pt(0, 8)} give ${Z} = 40 and ${Z} = 32; the smaller is 32. Test: does 5${x} + 4${y}${NB}<${NB}32 meet the region? Along the region, ${x} + ${y} ≥ 8 forces ${x} ≥ 8 − ${y}; the line 5${x} + 4${y} = 32 meets the region only at ${pt(0, 8)}, and moving into the region (rightward/upward) increases 5${x} + 4${y}. Minimum ${Z} = 32 at ${pt(0, 8)}, verified.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic B · pp. 802–804 ────────────────
  {
    n: 'B',
    title: 'Parametric Objectives: Pinning the Optimum to a Chosen Vertex',
    extra: true,
    kalam: 'It is nothing new: “max at vertex V” is a handful of linear inequalities in the coefficients, a tiny LP in its own right.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 01’s worked example 4 asks for the condition under which the maximum occurs at two specified vertices: one equality. The fuller examinable pattern asks for the condition on the coefficients so that the maximum occurs at one specified vertex (uniquely, or with ties allowed), or traces how the optimal vertex moves as a coefficient varies. The chapter never sets up the general machinery. It is nothing new: “max at vertex ${V}” is a handful of linear inequalities in the coefficients, a tiny LP in its own right.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Given a feasible region with corners ${sb(V, '1')},${NB}…,${NB}${sb(V, n)} and objective ${Z} = ${PX} + ${QY} with ${PQPOS}:`,
      },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          `<b>Evaluate ${Z} symbolically at every corner</b>, obtaining linear expressions in ${p} and ${q}.`,
          `<b>Write the domination conditions.</b> The maximum occurs at ${sb(V, k)}<br>if${NB}and${NB}only${NB}if ${Zof(sb(V, k))} ≥ ${Zof(sb(V, j))} for every ${j}.<br>Each condition is a linear inequality in ${p},${NB}${q}. “Maximum at ${sb(V, k)} and nowhere else” upgrades some of these to strict; “also at ${sb(V, j)}” replaces one inequality by equality.`,
          `<b>Solve the little system</b> in the ${I('pq')}-plane, keeping the sign restrictions ${PQPOS}.`,
          `<b>Cross-check with slopes.</b> The objective line ${PX} + ${QY} = ${c} has slope −${PQ}. An edge joining two corners ${A}, ${B} with slope ${m}, on the side of the region where the optimum is sought, becomes a tie-edge${NB}exactly${NB}when<br>−${PQ} = ${m},${NB}${NB}i.e.${NB}${NB}${PQ} = −${m}.`,
        ],
      },
      {
        t: 'p',
        html: `As the ratio ${r} = ${PQ} sweeps from 0 to ∞, the optimal vertex changes precisely at these critical ratios, so listing the edges’ slopes orders all possible behaviours.`,
      },
      {
        t: 'p',
        html: `<b>Why the slope criterion is exact:</b> if two distinct points ${A}, ${B} both maximise ${Z} over the region, they lie on the same level line ${PX} + ${QY} = ${c}, i.e. ${p}${sb(A, x)} + ${q}${sb(A, y)} = ${p}${sb(B, x)} + ${q}${sb(B, y)}, which rearranges to${NB}−${PQ}${NB}=${NB}${fr(`${sb(B, y)} − ${sb(A, y)}`, `${sb(B, x)} − ${sb(A, x)}`)}.<br>Level lines are parallel, so the shared level line is parallel to the edge ${I('AB')}. Conversely, if ${A} is optimal and the level line through ${A} is parallel to the edge ${I('AB')}, that line contains ${B}, so ${B} is optimal too.`,
      },
      {
        t: 'formula',
        kicker: 'Tie-edge condition (slopes)',
        main: `−${PQ} = ${m}<br>${PQ} = −${m}`,
        legend: [
          `${p}, ${q} = the coefficients of ${Z} = ${PX} + ${QY} (${PQPOS})`,
          `${m} = slope of the edge joining the two tied corners`,
        ],
        note: `For an edge on the side where the optimum is sought. The optimal vertex changes as ${r} = ${PQ} passes these critical ratios.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE HOTS / CUET',
        q: `The feasible region has corners ${O}${pt(0, 0)}, ${A}${pt(4, 0)}, ${B}${pt(2, 3)}, ${C}${pt(0, 4)} (the region of Topic 01’s worked example 1). For ${Z} = ${PX} + ${QY} with ${PQPOS}, find exactly when the maximum occurs at ${A}, at ${B}, at${NB}${C}.`,
        steps: [
          `Corner values:<br>Corner → ${Z} = ${PX} + ${QY}<br>${O}${pt(0, 0)} → 0<br>${A}${pt(4, 0)} → 4${p}<br>${B}${pt(2, 3)} → 2${p} + 3${q}<br>${C}${pt(0, 4)} → 4${q}`,
          `Since ${PQPOS}, ${Zof(O)} = 0 is always strictly smallest: ${O} can never be optimal.`,
          `<b>Max at ${A}:</b> require 4${p} ≥ 2${p} + 3${q} and 4${p} ≥ 4${q}:<br>2${p} ≥ 3${q} and ${rel(p, '≥', q)}.<br>With ${rel(q, '>', '0')}, the first implies the second, so the condition is ${p} ≥ ${H32}${q}.`,
          `<b>Max at ${C}:</b> require 4${q} ≥ 2${p} + 3${q} and 4${q} ≥ 4${p}:<br>${q} ≥ 2${p} and ${rel(q, '≥', p)},<br>so the binding condition is ${q} ≥ 2${p}, i.e. ${PQ} ≤ ${HALF}.`,
          `<b>Max at ${B}:</b> require 2${p} + 3${q} ≥ 4${p} and 2${p} + 3${q} ≥ 4${q}:<br>2${p} ≤ 3${q} and 2${p} ≥ ${q},<br>i.e. ${HALF} ≤ ${PQ} ≤ ${H32}.`,
          `<b>Slope cross-check.</b> Edge ${I('AB')} joins ${pt(4, 0)} to ${pt(2, 3)}, slope = ${fr('3 − 0', '2 − 4')} = −${H32}; critical ratio ${r} = ${H32} ✓. Edge ${I('BC')} joins ${pt(2, 3)} to ${pt(0, 4)}, slope = −${HALF}; critical ratio ${r} = ${HALF} ✓. So as ${r} = ${PQ} grows from 0 to ∞, the optimal vertex walks ${C} → ${B} → ${A}, switching at ${r} = ${HALF} and ${r} = ${H32}: matching the three intervals above exactly.`,
          `<b>Check.</b> At ${rel(r, '=', '1')} (say ${p} = ${q} = 1): values 0, 4, 5, 4: max at ${B} ✓, and 1 lies in [${HALF},${NB}${H32}]. At ${rel(r, '=', '2')}: values 0, 8, 7, 4: max at ${A} ✓.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET Speed Pattern',
        q: `Find all ${rel(k, '>', '0')} such that the maximum of ${Z} = 3${x} + ${KY} over the region with corners ${pt(0, 0)}, ${pt(5, 0)}, ${pt(3, 3)}, ${pt(0, 4)} occurs at ${pt(3, 3)}.`,
        steps: [
          `Values: ${Z}${pt(0, 0)}${NB}=${NB}0, ${Z}${pt(5, 0)}${NB}=${NB}15, ${Z}${pt(3, 3)}${NB}=${NB}9${NB}+${NB}3${k}, ${Z}${pt(0, 4)}${NB}=${NB}4${k}. Domination conditions:<br>9 + 3${k} ≥ 15 ⇒ ${rel(k, '≥', '2')},<br>9 + 3${k} ≥ 4${k} ⇒ ${rel(k, '≤', '9')},<br>and 9 + 3${k} ≥ 0 holds automatically for ${rel(k, '>', '0')}. So the answer is 2${NB}≤${NB}${k}${NB}≤${NB}9.`,
          `At the endpoints ties occur: ${rel(k, '=', '2')} makes ${Z}${pt(3, 3)} = ${Z}${pt(5, 0)} = 15 (multiple optima along that edge), and ${rel(k, '=', '9')} makes ${Z}${pt(3, 3)} = ${Z}${pt(0, 4)} = 36. If the question demands a unique optimum at ${pt(3, 3)}, the answer tightens to 2${NB}<${NB}${k}${NB}<${NB}9.`,
          `<b>Slope check.</b> Edge ${pt(5, 0)}–${pt(3, 3)} has slope −${H32}, giving ${fr('3', k)} = ${H32}, i.e. ${rel(k, '=', '2')} ✓. Edge ${pt(3, 3)}–${pt(0, 4)} has slope −${fr('1', '3')}, giving ${fr('3', k)} = ${fr('1', '3')}, i.e. ${rel(k, '=', '9')} ✓.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `A region has corners ${pt(0, 0)}, ${pt(4, 0)}, ${pt(2, 4)}, ${pt(0, 5)}. For ${Z} = ${PX} + ${QY}, ${PQPOS}, find all conditions under which the maximum occurs at ${pt(2, 4)}.`,
            a: `2${p} + 4${q} ≥ 4${p} and 2${p} + 4${q} ≥ 5${q}, i.e. 4${q} ≥ 2${p} and 2${p} ≥ ${q}; so ${fr(q, '2')} ≤ ${p} ≤ 2${q}. (The comparisons with ${Z}${pt(0, 0)} = 0 are automatic.)`,
          },
          {
            q: `For the same region, find all ${rel(k, '>', '0')} for which the maximum of ${Z} = 2${x} + ${KY} occurs at ${pt(0, 5)}.`,
            a: `Values: 8 at ${pt(4, 0)}, 4 + 4${k} at ${pt(2, 4)}, 5${k} at ${pt(0, 5)}. Need 5${k} ≥ 4 + 4${k} (i.e. ${rel(k, '≥', '4')}) and 5${k} ≥ 8 (automatic once ${rel(k, '≥', '4')}, since then 5${k} ≥ 20). Answer ${rel(k, '≥', '4')}.`,
          },
          {
            q: `A region has corners ${pt(0, 8)}, ${pt(2, 4)}, ${pt(6, 0)} (an unbounded diet region). For ${Z} = ${PX} + ${QY}, ${PQPOS}, find when the minimum occurs at ${pt(2, 4)}.`,
            a: `Domination reversed (minimum at ${pt(2, 4)}): ${Z}${pt(2, 4)} = 2${p} + 4${q} ≤ ${Z}${pt(0, 8)} = 8${q} and 2${p} + 4${q} ≤ ${Z}${pt(6, 0)} = 6${p}, i.e. 2${p} ≤ 4${q} and 4${q} ≤ 4${p}, giving ${q}${NB}≤${NB}${p}${NB}≤${NB}2${q}. (Slope check: the edges at ${pt(2, 4)} have slopes −2 and −1, so the tie ratios are ${PQ} = 2 and ${PQ} = 1.)`,
          },
          {
            q: `For the region of worked example 1, state the order in which the optimal vertex changes as ${PQ} increases from 0 to ∞, naming the switch ratios.`,
            a: `${C} (for ${PQ} < ${HALF}), then ${B} (for ${HALF} ≤ ${PQ} ≤ ${H32}), then ${A} (for ${PQ} > ${H32}); switches at ${r} = ${HALF} and ${r} = ${H32}.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic C · pp. 805–807 ────────────────
  {
    n: 'C',
    title: 'Infeasibility and Redundancy, Proved Without a Graph',
    extra: true,
    kalam: 'Lesson: infeasibility claims need a certificate; feasibility claims need only one witness.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 03 detects infeasibility and redundancy by drawing. Two problems: a hand-drawn graph can mislead when lines pass close together, and CBSE HOTS answers demand a justification, not a shading. Both facts have clean algebraic certificates, built from one lemma.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Lemma (positive combinations preserve inequalities).</b> If ${rel(u, '≤', v)} and ${u}′${NB}≤${NB}${v}′, and ${s},${NB}${rel(t, '≥', '0')}, then<br>${s}${u} + ${t}${u}′ ≤ ${s}${v} + ${t}${v}′.`,
      },
      {
        t: 'formula',
        kicker: 'Positive combinations preserve inequalities',
        main: `${s}${u} + ${t}${u}′ ≤ ${s}${v} + ${t}${v}′`,
        legend: [`${s}, ${t} = non-negative multipliers (${s},${NB}${rel(t, '≥', '0')})`, `${u}, ${v}, ${u}′, ${v}′ = the sides of the two inequalities combined, ${rel(u, '≤', v)} and ${u}′${NB}≤${NB}${v}′`],
        note: `Holds whenever ${rel(u, '≤', v)} and ${u}′${NB}≤${NB}${v}′.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> ${s}${u} ≤ ${s}${v} (multiply the first by ${s} ≥ 0) and ${t}${u}′ ≤ ${t}${v}′; add. ■`,
      },
      {
        t: 'p',
        html: 'Everything below is this lemma wearing different hats. Note the asymmetry it creates: “≤” chains survive positive scaling and addition, so contradictions are built by pushing “≤” information against “≥” information.',
      },
      {
        t: 'p',
        html: `<b>Certificate of infeasibility.</b> Combine the “≤” constraints (with non-negative multipliers, plus ${rel(x, '≥', '0')}, ${rel(y, '≥', '0')} used freely) to obtain some expression ≤ ${c}; combine the “≥” side to obtain the same expression ≥ ${d} with ${rel(d, '>', c)}. Contradiction: no feasible point exists.`,
      },
      {
        t: 'p',
        html: `<b>Certificate of redundancy.</b> To show constraint ${C} is implied by the others, derive it: manipulate the other constraints with positive combinations until ${C} falls out. Then removing ${C} changes nothing.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Prove algebraically that ${rel(x, '≥', '6')}, ${rel(y, '≥', '6')}, ${x} + ${y} ≤ 10, ${XYNONNEG} has no feasible solution (the coaching-centre problem of Topic 03’s worked example 1).`,
        steps: [
          `Adding the first two inequalities (multipliers ${s} = ${t} = 1):<br>${x} + ${y} ≥ 12.`,
          `But the third demands ${x} + ${y} ≤ 10. Since 12 > 10, contradiction. Empty region, no feasible solution: certified in two lines, no graph.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE HOTS',
        q: `Show that 2${x} + ${y} ≤ 8, ${x} + 2${y} ≤ 8, ${x} + ${y} ≥ 7 is infeasible.`,
        steps: [
          `Adding the two upper bounds:<br>3${x} + 3${y} ≤ 16 ⇒ ${x} + ${y} ≤ ${fr('16', '3')}.`,
          `Since ${fr('16', '3')} < 7, this contradicts ${x} + ${y} ≥ 7. Note the multipliers were 1 and 1, chosen so the left sides would match the expression forced by the “≥” constraint. Choosing multipliers is the only creative step in the method; aim the left-hand sides at whatever the lower bounds talk about.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'HOTS: when plain addition is not enough',
        q: `Show that ${x} + ${y} ≤ 4, ${x} + 2${y} ≥ 12, ${XYNONNEG} is infeasible.`,
        steps: [
          `Adding the two main inequalities fails: the left sides ${x} + ${y} and ${x} + 2${y} differ. Bound the pieces separately instead. From ${rel(x, '≥', '0')} and ${x} + ${y} ≤ 4:<br>${y} ≤ ${x} + ${y} ≤ 4.`,
          `Now split and reassemble:<br>${x} + 2${y} = (${x} + ${y}) + ${y} ≤ 4 + 4 = 8 < 12,<br>contradicting ${x} + 2${y} ≥ 12. The trick: extract a bound on ${y} alone from the compound inequality, then rebuild the awkward expression from bounded parts.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: `<b>(a)</b> Show ${rel(x, '≤', '12')} is redundant given ${x} + ${y} ≤ 10 and ${rel(y, '≥', '0')}.<br><b>(b)</b> Show 2${x} + ${y} ≤ 20 is redundant given ${x} + ${y} ≤ 12 and ${rel(x, '≤', '6')}.`,
        steps: [
          `<b>(a)</b> Since ${rel(y, '≥', '0')},<br>${x} ≤ ${x} + ${y} ≤ 10 < 12.<br>Every point satisfying the other constraints automatically satisfies ${rel(x, '≤', '12')}: it can never bind.`,
          `<b>(b)</b> Split and recombine:<br>2${x} + ${y} = (${x} + ${y}) + ${x} ≤ 12 + 6 = 18 < 20.<br>Done: the constraint imposes nothing beyond the other two.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Caution: a failed proof proves nothing',
        q: `Is ${x} + 2${y} ≤ 4, ${x} + ${y} ≥ 4, ${XYNONNEG} infeasible?`,
        steps: [
          `It looks contradictory: the upper bound involves 2${y}, the lower bound only ${y}. Attempt worked example 3’s manoeuvre: ${x} + 2${y} = (${x}${NB}+${NB}${y})${NB}+${NB}${y}${NB}≥${NB}4${NB}+${NB}0${NB}=${NB}4, which only meets the upper bound 4 instead of exceeding it, so no contradiction comes.`,
          `But a failed proof of infeasibility is not a proof of feasibility, so exhibit a point. Try ${rel(y, '=', '0')}: then ${rel(x, '≥', '4')} and ${rel(x, '≤', '4')} force ${rel(x, '=', '4')}, and ${pt(4, 0)} satisfies everything:<br>4 + 0 = 4 ≥ 4,${NB}${NB}4 + 2(0) = 4 ≤ 4.`,
          `The LPP is feasible (with the single feasible point ${pt(4, 0)}, a degenerate region). Lesson: infeasibility claims need a certificate; feasibility claims need only one witness.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Prove without a graph that ${x} + ${y} ≤ 3, 2${x} + 2${y} ≥ 8, ${XYNONNEG} is infeasible.`,
            a: `Halve the second inequality: ${x} + ${y} ≥ 4 > 3, contradicting the first.`,
          },
          {
            q: `Prove without a graph that 3${x} + 2${y} ≤ 6, ${rel(x, '≥', '3')}, ${rel(y, '≥', '1')} is infeasible.`,
            a: `From ${rel(x, '≥', '3')} and ${rel(y, '≥', '1')} (positive multipliers 3 and 2): 3${x} ≥ 9 and 2${y} ≥ 2, so 3${x} + 2${y} ≥ 11 > 6. Contradiction.`,
          },
          {
            q: `Show that ${rel(y, '≤', '20')} is redundant given ${x} + ${y} ≤ 15, ${XYNONNEG}.`,
            a: `${y} ≤ ${x} + ${y} ≤ 15 < 20.`,
          },
          {
            q: `Determine whether 2${x} + ${y} ≤ 4, ${x} + ${y} ≥ 3, ${XYNONNEG} is infeasible; justify whichever way you conclude.`,
            a: `Feasible: ${pt(1, 2)} gives 2 + 2 = 4 ≤ 4 and 1 + 2 = 3 ≥ 3; one witness settles it. (In fact the feasible set is the triangle with vertices ${pt(0, 3)}, ${pt(0, 4)} and ${pt(1, 2)}.)`,
          },
          {
            q: `Show that ${x} + 2${y} ≤ 10 is redundant given 2${x} + 4${y} ≤ 19.`,
            a: `Halve: ${x} + 2${y} ≤ ${fr('19', '2')} = 9.5 < 10; every admissible point satisfies the stricter bound, so the weaker one never binds.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic D · pp. 807–810 ────────────────
  {
    n: 'D',
    title: 'Measuring the Region: Vertex Enumeration, Area, Lattice Points',
    extra: true,
    kalam: 'Each pair of boundary lines gives an intersection candidate.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter always hands you the corners or lets you eyeball them. Three exam patterns need more: “find the area of the feasible region”, “how many points with integer coordinates lie in the region”, and any problem whose corners must be extracted from four or more lines reliably. All three reduce to two disciplined procedures.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Step 1: enumerate candidate vertices.</b> Each pair of boundary lines gives an intersection candidate.${NB}For<br>${sb(a, '1')}${x} + ${sb(b, '1')}${y} = ${sb(c, '1')},${NB}${NB}${sb(a, '2')}${x} + ${sb(b, '2')}${y} = ${sb(c, '2')},<br>with ${sb(a, '1')}${sb(b, '2')} − ${sb(a, '2')}${sb(b, '1')} ≠ 0, the solution is<br>${x} = ${fr(`${sb(b, '2')}${sb(c, '1')} − ${sb(b, '1')}${sb(c, '2')}`, `${sb(a, '1')}${sb(b, '2')} − ${sb(a, '2')}${sb(b, '1')}`)},${NB}${NB}${y} = ${fr(`${sb(a, '1')}${sb(c, '2')} − ${sb(a, '2')}${sb(c, '1')}`, `${sb(a, '1')}${sb(b, '2')} − ${sb(a, '2')}${sb(b, '1')}`)}.<br>Keep a candidate only if it satisfies <b>every</b> constraint. Discard duplicates where three lines concur (as in Topic 02’s worked example 2, where three boundaries meet at one vertex).`,
      },
      {
        t: 'formula',
        kicker: 'Intersection of two boundary lines',
        main: `${x} = ${fr(`${sb(b, '2')}${sb(c, '1')} − ${sb(b, '1')}${sb(c, '2')}`, `${sb(a, '1')}${sb(b, '2')} − ${sb(a, '2')}${sb(b, '1')}`)}<br>${y} = ${fr(`${sb(a, '1')}${sb(c, '2')} − ${sb(a, '2')}${sb(c, '1')}`, `${sb(a, '1')}${sb(b, '2')} − ${sb(a, '2')}${sb(b, '1')}`)}`,
        legend: [
          `${sb(a, '1')}, ${sb(b, '1')}, ${sb(c, '1')} = coefficients of the line ${sb(a, '1')}${x}${NB}+${NB}${sb(b, '1')}${y}${NB}=${NB}${sb(c, '1')}`,
          `${sb(a, '2')}, ${sb(b, '2')}, ${sb(c, '2')} = coefficients of the line ${sb(a, '2')}${x}${NB}+${NB}${sb(b, '2')}${y}${NB}=${NB}${sb(c, '2')}`,
        ],
        note: `Valid when ${sb(a, '1')}${sb(b, '2')} − ${sb(a, '2')}${sb(b, '1')} ≠ 0; keep the point only if it satisfies every constraint.`,
      },
      {
        t: 'p',
        html: '<b>Step 2: order the survivors</b> around the boundary (sort by angle about any interior point, or walk edge to edge). Convexity guarantees a clean cycle.',
      },
      {
        t: 'p',
        html: `<b>Step 3: area.</b> For a triangle with one vertex at the origin ${O} and the others at ${U} = ${pt(sb(u, '1'), sb(u, '2'))}, ${W} = ${pt(sb(I('w'), '1'), sb(I('w'), '2'))},<br>Area = ${HALF}${abs(`${sb(u, '1')}${sb(I('w'), '2')} − ${sb(u, '2')}${sb(I('w'), '1')}`)},<br>the determinant expansion of ${HALF}‖${VEC('OU')}${NB}×${NB}${VEC('OW')}‖ from the Class 12 vector/determinant toolkit: you can verify it on the right triangle with legs along the axes, where it collapses to ${HALF}(base)(height). A convex polygon with vertices ${sb(V, '1')},${NB}…,${NB}${sb(V, n)} in order fans into ${n} − 2 triangles from ${sb(V, '1')} (use the formula above with ${sb(V, '1')} moved to the origin); equivalently, the shoelace sum<br>Area = ${HALF}${abs(`${SUM}${NB}(${sb(x, i)}${sb(y, `${i}+1`)} − ${sb(x, `${i}+1`)}${sb(y, i)})`)}<br>(with indices cyclic) computes the whole thing in one pass. Always sanity-check with a second decomposition.`,
      },
      {
        t: 'formula',
        kicker: 'Area of a triangle with a vertex at the origin',
        main: `Area = ${HALF}${abs(`${sb(u, '1')}${sb(I('w'), '2')} − ${sb(u, '2')}${sb(I('w'), '1')}`)}`,
        legend: [
          `${U} = second vertex, ${pt(sb(u, '1'), sb(u, '2'))}`,
          `${W} = third vertex, ${pt(sb(I('w'), '1'), sb(I('w'), '2'))}`,
        ],
        note: `The first vertex is the origin ${O}.`,
      },
      {
        t: 'formula',
        kicker: 'Shoelace formula',
        main: `Area = ${HALF}${abs(`${SUM}${NB}(${sb(x, i)}${sb(y, `${i}+1`)} − ${sb(x, `${i}+1`)}${sb(y, i)})`)}`,
        legend: [`${pt(sb(x, i), sb(y, i))} = vertex ${sb(V, i)} of the convex polygon, taken in order`],
        note: 'Indices are cyclic.',
      },
      {
        t: 'p',
        html: `<b>Step 4: lattice points by strips.</b> Fix an integer ${y} = ${j} within the region’s vertical range; the constraints collapse to an interval ${L}(${j}) ≤ ${x} ≤ ${U}(${j}), contributing<br>⌊${U}(${j})⌋ − ⌈${L}(${j})⌉ + 1<br>integer points (zero if the interval contains none). Sum over ${j}. Horizontal strips are the right choice when constraints are given as ${x} ≤ expressions in ${y}, which is the norm after dividing through.`,
      },
      {
        t: 'formula',
        kicker: 'Lattice points on one strip',
        main: `⌊${U}(${j})⌋ − ⌈${L}(${j})⌉ + 1`,
        legend: [
          `${L}(${j}) = lower end of the interval for ${x} on the strip ${y} = ${j}`,
          `${U}(${j}) = upper end of that interval`,
        ],
        note: 'Zero if the interval contains no integer; sum over the strips.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the area of the feasible region of Topic 01’s worked example 1: ${x} + 2${y} ≤ 8, 3${x} + 2${y} ≤ 12, ${XYNONNEG}.`,
        steps: [
          `<b>Candidates.</b> Pairs of boundary lines: ${rel(x, '=', '0')} with ${rel(y, '=', '0')} gives ${pt(0, 0)}; ${x} + 2${y} = 8 with ${rel(x, '=', '0')} gives ${pt(0, 4)}; 3${x} + 2${y} = 12 with ${rel(y, '=', '0')} gives ${pt(4, 0)}; the two slanted lines: subtract to get 2${x} = 4, so ${pt(2, 3)}, and it satisfies 2 + 6 = 8 ≤ 8 ✓ and 6 + 6 = 12 ≤ 12 ✓. Corners: ${O}${pt(0, 0)}, ${A}${pt(4, 0)}, ${B}${pt(2, 3)}, ${C}${pt(0, 4)}, in order.`,
          `<b>Area by fan from ${O}.</b> Split into △${I('OAB')} and △${I('OBC')}:<br>[△${I('OAB')}] = ${HALF}${abs('4 · 3 − 0 · 2')} = 6,<br>[△${I('OBC')}] = ${HALF}${abs('2 · 4 − 3 · 0')} = 4.<br>Total 6 + 4 = 10 square units.`,
          `<b>Independent check by base–height.</b> △${I('OAB')} has base ${I('OA')} = 4 along the ${x}-axis and height equal to ${B}’s ${y}-coordinate, 3: area ${HALF}(4)${WJ}(3)${NB}=${NB}6${NB}✓. △${I('OBC')} has base ${I('OC')} = 4 along the ${y}-axis and height equal to ${B}’s ${x}-coordinate, 2: area ${HALF}(4)${WJ}(2)${NB}=${NB}4${NB}✓.`,
          `<b>Shoelace confirmation.</b><br>Area = ${HALF}${abs(`${g('(0 · 0 − 4 · 0)')} + ${g('(4 · 3 − 2 · 0)')} + ${g('(2 · 4 − 0 · 3)')} + ${g('(0 · 0 − 0 · 4)')}`)}<br>= ${HALF}${abs('12 + 8')} = 10.`,
          'Three decompositions, one answer: 10 square units.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / HOTS',
        q: 'How many points with integer coordinates lie in the region of worked example 1?',
        steps: [
          `The vertical range is 0${NB}≤${NB}${y}${NB}≤${NB}4, so strips ${y} = 0, 1, 2, 3, 4. On strip ${y} = ${j}, the constraints read<br>${x} ≤ 8 − 2${j} and 3${x} ≤ 12 − 2${j},<br>with ${rel(x, '≥', '0')} an integer. The count on each strip is<br>⌊min(8 − 2${j},${NB}${fr(`12 − 2${j}`, '3')})⌋ + 1.`,
          `${j} → 8 − 2${j} → ${fr(`12 − 2${j}`, '3')} → binding${NB}cap${NB}→<br>integer${NB}${x}${NB}count<br>0 → 8 → 4 → 4 → 5<br>1 → 6 → ${fr('10', '3')} → 3 → 4<br>2 → 4 → ${fr('8', '3')} → 2 → 3<br>3 → 2 → 2 → 2 → 3<br>4 → 0 → ${fr('4', '3')} → 0 → 1`,
          'Total: 5 + 4 + 3 + 3 + 1 = 16 lattice points.',
          `<b>Spot-check.</b> Strip ${j} = 3: ${rel(x, '≤', '2')} from both constraints, giving ${pt(0, 3)}, ${pt(1, 3)}, ${pt(2, 3)}, and indeed ${pt(2, 3)} is the corner ${B}, where the two slanted boundaries meet. The cap ${fr(`12 − 2${j}`, '3')} is the tighter one on strips ${j} = 0, 1, 2; the two caps coincide at ${j} = 3 (both equal 2); and 8 − 2${j} is the tighter one on the top strip ${j} = 4. This change of binding constraint is why the counts fall 5, 4, 3, hold at 3, then drop to 1.`,
          `<b>Useful remark (boundary counts).</b> The number of lattice points on the segment joining integer points ${P}, ${Q} is gcd(${abs(`Δ${x}`)},${NB}${abs(`Δ${y}`)}) + 1. Segment ${I('AB')} here: gcd(2,${NB}3) + 1 = 2, namely ${pt(4, 0)} and ${pt(2, 3)}, consistent with the strip table.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the area of the feasible region of ${x} + ${y} ≤ 6, ${rel(x, '≤', '4')}, ${rel(y, '≤', '3')}, ${XYNONNEG}.`,
            a: `Corners ${pt(0, 0)}, ${pt(4, 0)}, ${pt(4, 2)}, ${pt(3, 3)}, ${pt(0, 3)}. Shoelace sum: 0 + 8 + 6 + 9 + 0 = 23, area ${fr('23', '2')}. Check: the 4${NB}×${NB}3 box has area 12; the excluded top-right corner is the right triangle with legs 1, 1, area ${HALF}; 12 − ${HALF} = ${fr('23', '2')} ✓.`,
          },
          {
            q: 'Count the lattice points in the same region.',
            a: `Strips ${y} = ${j} = 0, 1, 2, 3: caps min(4,${NB}6 − ${j}) give counts 5, 5, 5, and at ${j} = 3 the cap 3 gives 4; total 19. Check: the box has 5${NB}×${NB}4 = 20 lattice points, minus the single point ${pt(4, 3)}, which violates ${x} + ${y} ≤ 6, leaves 19 ✓.`,
          },
          {
            q: 'Find the perimeter of the region of worked example 1, leaving surds in exact form.',
            a: `${I('OA')} = 4, ${I('AB')} = √((2)<sup>2</sup> + (3)<sup>2</sup>) = √13, ${I('BC')} = √((2)<sup>2</sup> + (1)<sup>2</sup>) = √5, ${I('CO')} = 4; perimeter 8 + √13 + √5.`,
          },
          {
            q: `How many lattice points lie on the boundary segment joining ${pt(0, 4)} to ${pt(2, 3)}?`,
            a: `gcd(2,${NB}1) + 1 = 2: only the endpoints.`,
          },
          {
            q: `The corners of a feasible region are ${pt(0, 0)}, ${pt(5, 0)}, ${pt(3, 3)}, ${pt(0, 4)}. Compute its area by the shoelace formula and by splitting into two triangles, and confirm agreement.`,
            a: `Shoelace: terms 0, ${g('5 · 3 − 3 · 0 = 15')}, ${g('3 · 4 − 0 · 3 = 12')}, 0; area ${HALF}(27) = ${fr('27', '2')}. Triangle split from ${pt(0, 0)}: ${HALF}${abs(g('5 · 3 − 0 · 3'))}${NB}= 7.5 and ${HALF}${abs(g('3 · 4 − 3 · 0'))}${NB}= 6; total 13.5 = ${fr('27', '2')} ✓.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic E · pp. 810–812 ────────────────
  {
    n: 'E',
    title: 'Whole-Number Answers: When the Optimum Is Fractional',
    extra: true,
    kalam: 'What is forbidden: rounding the optimal vertex, up or down, and trusting the result.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The Concept intuition part of Topic 02 admits it: “divisibility is assumed… CBSE problems are usually designed so the optimum lands on whole numbers.” Fine until a HOTS paper, a CUET tricky MCQ, or an Exemplar problem hands you a continuous optimum at ${pt('3.5', '2')} and asks for the best achievable answer. The reflex, round the optimum, is demonstrably wrong, and the fix is a small exact procedure. This is also the honest bridge to integer programming, which the syllabus stops short of.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>The ceiling principle.</b> Every lattice (integer) point of the region is a feasible point of the original LPP, so the best integer objective value never exceeds the continuous optimum ${Zs}:<br>${Zint} ≤ ${Zs}.<br>This one line turns the search finite and directed: scan candidate integer values of ${Z} downward from ${Zs}; the first value actually attained at a feasible lattice point is the answer.`,
      },
      {
        t: 'formula',
        kicker: 'The ceiling principle',
        main: `${Zint} ≤ ${Zs}`,
        legend: [`${Zint} = best objective value over the lattice points`, `${Zs} = continuous optimum (maximisation)`],
        note: `For integer minimisation the mirror image holds: ${Zint} ≥ ${Zs}.`,
      },
      {
        t: 'proc',
        title: 'Procedure',
        steps: [
          `Solve the continuous LPP; record ${Zs} and the optimal vertex.`,
          `List lattice points whose ${Z}-value is a candidate: start at the largest integer ≤ ${Zs} and step down (with whole-number coefficients ${a}, ${b}, as in every example here, ${Z} is a whole number at every lattice point). For each candidate value ${c}, find the lattice points with ${rel(Z, '=', c)} (solve ${AX} + ${BY} = ${c} over small integers) and test feasibility.`,
          'Stop at the first feasible hit: that is the integer optimum. Do not stop earlier, and do not restrict attention to points near the continuous optimum: Step 2’s scan covers the whole region, which is exactly what saves you in the example below.',
          `For integer minimisation, run the mirror image: scan upward from the smallest integer ≥ ${Zs}.`,
        ],
      },
      {
        t: 'p',
        html: '<b>What is forbidden:</b> rounding the optimal vertex, up or down, and trusting the result. The next example is constructed so that every rounding convention fails.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'HOTS / Exemplar Style',
        q: `A unit makes gadgets (${x}) and kits (${y}). Each gadget needs 2 hours on line A and 2 on line B; each kit needs 3 hours on A and 1 on B. Line A has 13 hours, line B has 9 hours. Profit is ₹5 per gadget and ₹4 per kit. Find the production plan with maximum profit, given ${x},${NB}${y} must be whole numbers.`,
        steps: [
          `<b>Continuous solve.</b> Maximise ${Z} = 5${x} + 4${y} subject to 2${x} + 3${y} ≤ 13, 2${x} + ${y} ≤ 9, ${XYNONNEG}. Corners: ${pt(0, 0)}, ${pt('4.5', '0')}, and the intersection of the two slanted lines (subtracting kills 2${x}: 2${y} = 4, so ${rel(y, '=', '2')}, then 2${x} = 13 − 6 = 7, giving ${OPT_E1}) and (0,${NB}${fr('13', '3')}). Values:<br>${Z}${pt('4.5', '0')} = 22.5,<br>${Z}${OPT_E1} = 17.5 + 8 = 25.5,<br>${Z}(0,${NB}${fr('13', '3')}) = ${fr('52', '3')} ≈ 17.3.`,
          `Continuous optimum ${Zs} = 25.5 at ${OPT_E1}: physically meaningless as a production plan.`,
          `<b>Rounding fails, three ways.</b> Up: ${pt(4, 2)} gives 2(4) + 3(2) = 14 > 13, infeasible. Down: ${pt(3, 2)} gives 6 + 6 = 12 ≤ 13 ✓, 6 + 2 = 8 ≤ 9 ✓, profit 15 + 8 = 23. Nearest overall (round half up on ${x}, keep ${y}): ${pt(4, 2)} again, infeasible. Every conventional rounding yields 23 at best.`,
          `<b>Correct scan.</b> Largest integer ≤ 25.5 is 25: solve 5${x} + 4${y} = 25 over small non-negative integers: ${pt(5, 0)} and ${pt(1, 5)}. Check ${pt(5, 0)}: 2(5) + 0 = 10 > 9 ×. ${pt(1, 5)}: 2 + 15 = 17 > 13 ×. Neither feasible.`,
          `Step down to 24: 5${x} + 4${y} = 24 gives ${pt(4, 1)} and ${pt(0, 6)}. Check ${pt(4, 1)}:<br>2(4) + 3(1) = 11 ≤ 13 ✓,<br>2(4) + 1 = 9 ≤ 9 ✓.<br>Feasible. Profit 20 + 4 = 24.`,
          `<b>Completeness check.</b> ${Z} = 25 exhausted above; ${Z} = 24 attained; so 24 is maximal among integers, consistent with the ceiling principle 24 ≤ 25.5.`,
        ],
        ans: `Maximum whole-number profit ₹24, at 4 gadgets and 1 kit, beating every rounding of the continuous optimum by ₹1, and sitting at a point no rounding rule would propose: ${pt(4, 1)} is not a rounding of ${OPT_E1}, because the extra gadget fits only if a kit is dropped; the constraint 2${x} + ${y} ≤ 9 is already tight. The scan caught it because the scan never assumed the answer lived next door to ${Zs}’s vertex.`,
      },
      {
        t: 'ex',
        tag: 'Minimisation Mirror',
        q: `Minimise ${Z} = 2${x} + 3${y} over integer points satisfying ${x} + ${y} ≥ 4.5 (equivalently 2${x} + 2${y} ≥ 9), ${x} + 3${y} ≥ 9, ${XYNONNEG} integers.`,
        steps: [
          `<b>Continuous solve.</b> The region lies above both lines and is unbounded. Its corners are ${pt(9, 0)}, from ${x} + 3${y} = 9 with ${rel(y, '=', '0')} (the ${x}-intercept 9 beats 4.5, so this is the line that bounds the region along the ${x}-axis); ${OPT_E2}, where the two lines meet (subtracting gives 2${y} = 4.5); and (0,${NB}${fr('9', '2')}), from ${x} + ${y} = 4.5 with ${rel(x, '=', '0')} (the ${y}-intercept 4.5 beats 3). Values:<br>${Z}${pt(9, 0)} = 18,<br>${Z}${OPT_E2} = 4.5 + 6.75 = 11.25,<br>${Z}(0,${NB}${fr('9', '2')}) = 13.5.`,
          `Since both coefficients are positive, a minimum exists, and it is the smallest corner value: ${Zs} = 11.25 at ${OPT_E2}.`,
          `<b>Rounding fails.</b> Rounding down gives ${pt(2, 2)}: ${x} + ${y} = 4 < 4.5, infeasible. Rounding up gives ${pt(3, 3)}: feasible, but its cost is 15, far above the true integer optimum found below.`,
          `<b>Correct upward scan.</b> Every integer point is feasible for the continuous problem, so ${Zint} ≥ ${Zs} = 11.25: no integer cost below 12 is possible, and we start the scan at the smallest integer ≥ 11.25, namely 12. Points with 2${x} + 3${y} = 12: ${pt(0, 4)}, ${pt(3, 2)}, ${pt(6, 0)}. Check each:<br>• ${pt(0, 4)}: ${x} + ${y} = 4 < 4.5 ×.<br>• ${pt(6, 0)}: ${x} + 3${y} = 6 < 9 ×.<br>• ${pt(3, 2)}: 3 + 2 = 5 ≥ 4.5 ✓ and 3 + 6 = 9 ≥ 9 ✓.<br>Feasible. Minimum integer cost ${Z} = 12 at ${pt(3, 2)}.`,
          `<b>Check.</b> The first candidate value 12 is already attained, and nothing below 11.25 is possible, so 12 is minimal. Note that the winner ${pt(3, 2)} is neither the nearest rounding nor a same-direction rounding of the continuous optimum ${OPT_E2} (it rounds ${x} up and ${y} down); the scan finds it because it works through candidate objective values rather than neighbouring points.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'State, with a one-line proof, why the best integer objective value can never exceed the continuous optimum in a maximisation problem.',
            a: `Every lattice point is feasible for the continuous LPP, and no feasible point of a maximisation LPP can exceed its continuous maximum ${Zs}; hence the integer best, being attained at a feasible point, is ≤ ${Zs}.`,
          },
          {
            q: `Maximise ${Z} = 3${x} + 2${y} over integer points of the region 2${x} + 3${y} ≤ 13, 2${x} + ${y} ≤ 9, ${XYNONNEG}.`,
            a: `${Zs}: continuous optimum at ${OPT_E1} gives 10.5 + 4 = 14.5. Scan downward: 14, 3${x} + 2${y} = 14 gives ${pt(4, 1)}: 11${NB}≤${NB}13${NB}✓, 9${NB}≤${NB}9${NB}✓, feasible. Also ${pt(2, 4)}: 2(2)${NB}+${NB}3(4)${NB}=${NB}16${NB}>${NB}13${NB}×, and ${pt(0, 7)}: 3(7)${NB}=${NB}21${NB}>${NB}13${NB}×. Maximum 14 at ${pt(4, 1)} (check no ${Z} = 15 point exists: 15 > 14.5 violates the ceiling principle).`,
          },
          {
            q: `For the region of the first worked example of Additional topic D (${x} + 2${y} ≤ 8, 3${x} + 2${y} ≤ 12, ${XYNONNEG}), find every lattice point at which ${Z} = 3${x} + 2${y} attains its maximum over lattice points.`,
            a: `Continuous max over the region: values at corners ${pt(0, 0)}, ${pt(4, 0)}, ${pt(2, 3)}, ${pt(0, 4)} are 0, 12, 12, 8, so ${Zs} = 12, attained at two corners; the ceiling principle caps lattice points at 12. Lattice points with 3${x} + 2${y} = 12 (these need ${x} even): ${pt(4, 0)}${NB}✓ (${x} + 2${y} = 4 ≤ 8), ${pt(2, 3)}${NB}✓ (${x} + 2${y} = 8 ≤ 8, so it lies on both slanted lines), ${pt(0, 6)}${NB}× (${x} + 2${y} = 12 > 8). Maximum 12, attained at exactly ${pt(4, 0)} and ${pt(2, 3)}: a tie, so by the chapter’s own multiple-optima reasoning applied on the lattice, both are optimal lattice plans.`,
          },
          {
            q: 'Explain in one sentence, referring to worked example 1, why “solve continuously, then round” is not a valid method.',
            a: `Because the optimal lattice point need not be any rounding of the optimal vertex: in worked example 1 every rounding of ${OPT_E1} is infeasible or worth ₹23, while the true optimum ₹24 lies at ${pt(4, 1)}, reachable only by scanning candidate objective values downward from ${Zs}.`,
          },
        ],
      },

      { t: 'part', title: 'Closing triage' },
      {
        t: 'p',
        html: 'Faced with any LPP question, route it: asked to justify the method → Additional topic A; coefficients unknown, vertex given → Additional topic B; “show that no feasible solution exists”/“which constraint can be dropped” → Additional topic C; “area / how many integer points” → Additional topic D; “whole-number plan” → Additional topic E. Everything else is the chapter as written.',
      },
    ],
  },
];
