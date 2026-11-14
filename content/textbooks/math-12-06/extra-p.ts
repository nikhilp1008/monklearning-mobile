import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Additional topic P, pp. 436–443 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's "Addendum P — What
 * JEE Actually Asks", kept with the book's letter as the chapter's last additional
 * topic (decision 2). It opens partway down p. 436, below the rule that closes
 * Addendum E's answers, and ends on p. 443; Chapter 7 starts on p. 444. The opening
 * sentence is the "Introduction"; the headings "The distribution" … "Where to focus
 * beyond the chapter" are the parts. The distribution table is a table block, its
 * "Evidence" column now "Papers cited": the papers it names, counted by exam where
 * the page names them one by one (a paper before 2013 is "JEE"), and its runs of
 * years told without the years. Each archetype 1–7 is a worked example tagged with
 * its heading: its "Shape / Method" text and its representative question are the
 * question, the working the steps (no answer line is printed, so the answer box is
 * empty). The traps are one mistakes block; the graded practice set P1–P12 is one
 * practice block, the working after each question its answer. Exam years, dates
 * and shifts are dropped from every tag ("Main Jan 9, 2020 (I)" → "Main"; "JEE
 * 1983" → "JEE"; a bare year after 2012 is simply dropped), and every share of past
 * questions carries the estimate label. The book's "appendix" (Appendix A,
 * Tangents and Normals) is the app's Topic 04. These pages print no drawing and no
 * formula card. d/dx with an upright d; a fraction inside a fraction is written
 * with ÷. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const A = I('A');
const B = I('B');
const C = I('C');
const D = I('D');
const H = I('H');
const M = I('M');
const S = I('S');
const V = I('V');
const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const e = I('e');
const f = I('f');
const g = I('g');
const h = I('h');
const k = I('k');
const m = I('m');
const p = I('p');
const r = I('r');
const t = I('t');
const v = I('v');
const x = I('x');
const y = I('y');
const al = I('α');
const be = I('β');
const th = I('θ');
const tau = I('τ');
const sq = (s: string) => `${s}<sup>2</sup>`;
const cube = (s: string) => `${s}<sup>3</sup>`;
const sb = (s: string, n: string) => `${s}<sub>${n}</sub>`;
const X2 = sq(x);
const Y2 = sq(y);
const X3 = cube(x);
const Y3 = cube(y);
const of = (fn: string, s: string) => `${fn}(${s})`;
const fx = of(f, x);
/** f′, the prime U+2032; f″, U+2033. */
const fp = `${f}′`;
const fpp = `${f}″`;
const pp = (s: string) => `${p}′(${s})`;
/** |s|, the U+2060 keeping the opening bar with what it holds. */
const abs = (s: string) => `|\u2060${s}|`;
/** A pair or interval, its comma glued: (p, q). */
const iv = (lo: string, hi: string, o = '(', cl = ')') => `${o}${lo},${NB}${hi}${cl}`;
const rel = (l: string, op: string, rt: string) => `${l}${NB}${op}${NB}${rt}`;
/** dy/dx and friends, d upright. */
const dd = (u: string, w: string) => fr(`d${u}`, `d${w}`);
const DYDX = dd(y, x);
const DXDY = dd(x, y);
const DXDT = dd(x, t);
const DYDT = dd(y, t);
const DVDT = dd(V, t);
const DADT = dd(a, t);
const DSDT = dd(S, t);
const DRDT = dd(r, t);
const DCDT = dd(C, t);
const DVDH = dd(V, h);
const DVDY = dd(V, y);
const D2VDH2 = fr(`d<sup>2</sup>${V}`, `d${h}<sup>2</sup>`);
const DDX = fr('d', `d${x}`);
const ln = (s: string) => `ln${NB}${s}`;
const sin = (s: string) => `sin${NB}${s}`;
const cos = (s: string) => `cos${NB}${s}`;
const tan = (s: string) => `tan${NB}${s}`;
const EX = `e<sup>${x}</sup>`;
const EC = `e<sup>${c}</sup>`;
const R1X2 = `√(1${NB}+${NB}${X2})`;
const LNR = `ln(${x} + ${R1X2})`;
const H2 = fr('1', '2');
const PI3 = fr('π', '3');
const M1 = sb(m, '1');
const M2 = sb(m, '2');
const T1 = sb(t, '1');
const T2 = sb(t, '2');
const CM3 = 'cm<sup>3</sup>';
const CM2 = 'cm<sup>2</sup>';
/** The curve x² + 2xy − 3y² = 0 and the curve y³ − 3xy + 2 = 0. */
const CURVE1 = `${X2} + 2${x}${y} − 3${Y2} = 0`;
const CURVE2 = `${Y3} − 3${x}${y} + 2 = 0`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic P (the book's Addendum P) · pp. 436–443 ────────────────
  {
    n: 'P',
    title: 'What JEE Actually Asks',
    extra: true,
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This additional topic surveys the JEE previous-year questions on Applications of Derivatives, grouped by recurring pattern.',
      },

      { t: 'part', title: 'The distribution' },
      {
        t: 'p',
        html: `Judged from the JEE previous-year papers, the weight falls roughly as follows ${ESTIMATE}:`,
      },
      {
        t: 'table',
        title: null,
        head: ['Block', 'Share', 'Papers cited'],
        rows: [
          [
            'Maxima & minima',
            '~40%',
            'Present in virtually every session: Main 4, Adv 8, and a dense run of older JEE papers',
          ],
          [
            'Tangents & normals',
            '~30%',
            'Continuous across all eras: two early JEE papers, a run of eight more JEE papers, a heavy Main cluster, and again in the latest papers',
          ],
          [
            'Monotonicity & inequalities',
            '~20%',
            'Steady Main supply (4 papers); Advanced proof questions concentrated in older JEE papers',
          ],
          ['Related rates', '~7%', 'Near-absent in the older papers, then a tight cluster: Main 6'],
          ['Approximations & differentials', 'rare', '<b>Few or no questions in the surveyed papers</b>'],
        ],
      },
      {
        t: 'p',
        html: `Three facts worth acting on:<br>1. <b>The examiners recycle almost verbatim.</b> The ice-coated sphere appears identically in two Main papers: same radii, same melt rate. log<sub>e</sub>(1 + ${x}) < ${x} is asked in a JEE paper (fill-in) and again in a later JEE paper (MCQ). ${y} = ${a}${NB}ln${NB}${abs(x)} + ${b}${X2} + ${x} with extrema at −1 and 2 appears in a JEE paper and again, nearly unchanged, in Main. Working through past papers pays off: the same question can return decades later.<br>2. <b>Tangents/normals is not a side topic.</b> The chapter places it in Topic 04, outside the board syllabus, but it is the second-largest block in JEE papers (about 30%) ${ESTIMATE}, and it increasingly rides on implicit and parametric curves (${CURVE1}, ${CURVE2}, ${x} = ${a}(${cos(th)} + ${th}${NB}${sin(th)}), …), not on ${y} = ${fx}.<br>3. <b>Monotonicity at Advanced level is an engine, not a topic.</b> It powers inequality proofs (older JEE papers), root-counting via Rolle/MVT (Adv three times; JEE once), and statements about composite functions (JEE, and a recent paper). The board-level “find the intervals” version is only the entry fee.`,
      },

      { t: 'part', title: 'The recurring archetypes' },
      {
        t: 'ex',
        tag: 'Archetype 1: The related-rates chain drill',
        q: `<b>Shape.</b> Two geometric quantities linked by a formula; one rate given, one demanded “at the instant when” some length takes a stated value. Favourites: spheres with coats of ice, cubes, sliding ladders, inflating balloons, ships and bearings.<br><b>Method.</b> Write the relation in the total varying quantity, differentiate with respect to ${t} symbolically, substitute numbers last. Keep melting/shrinking rates negative.<br><br><b>Representative (Main; also asked in another Main paper):</b> A spherical iron ball of radius 10 cm is coated with ice of uniform thickness that melts at 50 ${CM3}/min. Find the rate at which the thickness decreases when the thickness is 5 cm.`,
        steps: [
          `Let ${x} be the ice thickness; the outer radius is 10 + ${x}. The melt rate drives the outer volume:<br>${V} = ${fr('4', '3')}π(10 + ${x})<sup>3</sup>,<br>${DVDT} = 4π(10 + ${x})<sup>2</sup>${DXDT}`,
          `Melting means ${DVDT} = −50. At ${rel(x, '=', '5')}: outer radius 15, so<br>−50 = 4π(15)<sup>2</sup>${DXDT}<br>⟹ ${DXDT} = −${fr('50', '900π')} = −${fr('1', '18π')} cm/min`,
          `The thickness decreases at ${fr('1', '18π')} cm/min. Note the trap the examiner repeats: 10 + ${x} is the radius, ${x} alone is not.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 2: Tangent/normal with a prescribed property, usually on an implicit curve',
        q: `<b>Shape.</b> “Find the normal at ${iv(a, b)}”; “find the point where the tangent is parallel/perpendicular to a given line”; “where does the normal meet the curve again / pass through?” Curves arrive implicitly defined.<br><b>Method.</b> Differentiate implicitly to get ${DYDX}; normal slope is −${DXDY}. For vertical tangents set the denominator of ${DYDX} to zero (equivalently ${DXDY} = 0); for horizontal tangents set the numerator to zero. Always confirm the point satisfies the curve.<br><br><b>Representative (Main):</b> Find the length of the perpendicular from the origin to the normal of ${CURVE1} at ${iv('2', '2')}.`,
        steps: [
          `Differentiate implicitly:<br>2${x} + 2${y} + 2${x}${DYDX} − 6${y}${DYDX} = 0<br>⟹ ${DYDX} = ${fr(`−(${x} + ${y})`, `${x} − 3${y}`)}`,
          `At ${iv('2', '2')}: ${DYDX} = ${fr('−4', '−4')} = 1, so the normal has slope −1:<br>${y} − 2 = −1(${x} − 2) ⟹ ${x} + ${y} = 4`,
          `Distance from origin: ${fr(abs('0 + 0 − 4'), '√2')} = 2√2.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 3: Angle between curves; touching vs intersecting',
        q: `<b>Shape.</b> Two explicit curves meet; find ${tan(th)} of the angle between them, or decide whether they touch or cross (JEE: ${Y2} = 4${a}${x} vs ${X2} = 4${a}${y}; JEE: ${Y2} = 4${x} vs a circle).<br><b>Method.</b> Solve simultaneously for intersection points, compute both slopes, apply<br>${tan(th)} = ${abs(fr(`${M1} − ${M2}`, `1 + ${M1}${M2}`))}<br>Touching ⟺ ${M1} = ${M2}; orthogonal ⟺ ${M1}${M2} = −1.<br><br><b>Representative (Main):</b> Curves ${y} = 10 − ${X2} and ${y} = 2 + ${X2}; find ${abs(tan(th))}.`,
        steps: [
          `Adding: 2${y} = 12 ⇒ ${y} = 6, then ${x} = ±2. At ${iv('2', '6')}: ${M1} = −4, ${M2} = 4. At ${iv('−2', '6')}: ${M1} = 4, ${M2} = −4. Either way,<br>${abs(tan(th))} = ${abs(fr('−4 − 4', '1 + (−16)'))} = ${fr('8', '15')}`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 4: Monotonicity as a parameter condition (and as a root-blocker)',
        q: `<b>Shape.</b> “For which ${k} is ${f} increasing on ℝ?”, “which function is monotonic?”, or, the clever variant, “show the equation has no two distinct roots in an interval.”<br><b>Method.</b> Reduce to a sign condition on ${fp}; for a quadratic ${fp} on all of ℝ demand a positive leading coefficient and discriminant ≤ 0 (non-strict!). For root questions: a strictly monotonic function cannot take the same value twice.<br><br><b>Representative (Main, twin of a JEE question):</b> ${y} = ${a}${NB}ln${NB}${abs(x)} + ${b}${X2} + ${x} has extremum at ${rel(x, '=', '−1')} and ${rel(x, '=', '2')}. Find ${a},${NB}${b}.`,
        steps: [
          `${DYDX} = ${fr(a, x)} + 2${b}${x} + 1`,
          `At ${rel(x, '=', '−1')}: −${a} − 2${b} + 1 = 0. At ${rel(x, '=', '2')}: ${fr(a, '2')} + 4${b} + 1 = 0. Solving,<br>${a} = 2<br>${b} = −${H2}`,
          `Sibling question worth knowing (Main): 2${X3} + 3${x} + ${k} = 0 cannot have two distinct real roots in ${iv('0', '1', '[', ']')} for any ${k}, because ${fp} = 6${X2} + 3 > 0 makes ${f} strictly increasing: answer “does not exist”.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 5: Local extrema (classifying, and constructing polynomials from conditions)',
        q: `<b>Shape.</b> Either classify extrema of a given quartic/quartic-in-disguise (including exponentials times polynomials), or build the least-degree polynomial with prescribed extrema and values.<br><b>Method.</b> Factor ${fp} completely, read sign changes (never trust ${fp} = 0 alone). For construction: prescribe ${p}′ as a constant times the product of (${x} − extremum) factors, integrate, fit values.<br><br><b>Representative (JEE):</b> ${of(p, x)} is a real polynomial of least degree with a local maximum at ${rel(x, '=', '1')}, a local minimum at ${rel(x, '=', '3')}, ${of(p, '1')} = 6, ${of(p, '3')} = 2. Find ${pp('0')}.`,
        steps: [
          `Least degree: cubic, so ${pp(x)} = ${k}(${x} − 1)(${x} − 3). Integrating and imposing ${of(p, '1')} = 6, ${of(p, '3')} = 2:<br>${of(p, '1')} = ${fr(`4${k}`, '3')} + ${C} = 6<br>${of(p, '3')} = ${C} = 2<br>⟹ ${k} = 3, ${C} = 2`,
          `Hence ${pp(x)} = 3(${x} − 1)(${x} − 3) and ${pp('0')} = 9.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 6: Geometric and economic optimization',
        q: `<b>Shape.</b> Rectangle under a parabola (twice), cone of max volume on a fixed slant, wire split into square + circle, open box from a cut sheet (Adv), sector fence, bus running cost, inscribed cylinder with wall thickness (Adv).<br><b>Method.</b> One-variable objective via the constraint; state the feasible domain; reject infeasible roots; confirm max vs min; answer what is asked (a value, a dimension, a ratio).<br><br><b>Representative (Main):</b> Maximum volume of a right circular cone of slant height 3 m.`,
        steps: [
          `With ${sq(r)} + ${sq(h)} = 9:<br>${V} = ${PI3}${sq(r)}${h} = ${PI3}(9${h} − ${cube(h)}),<br>${DVDH} = ${PI3}(9 − 3${sq(h)}) = 0 ⟹ ${h} = √3`,
          `Since ${D2VDH2} = −2π${h} < 0, this is a maximum, with ${sq(r)} = 6:<br>${V}<sub>max</sub> = ${PI3} ⋅ 6 ⋅ √3 = 2√3${NB}π m<sup>3</sup>`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 7: MVT/Rolle as an existence and counting engine (Advanced)',
        q: `<b>Shape.</b> “The average speed is attained at...” (Main); “exactly one solution of ${fp} = 0 per interval” (Adv); “minimum number of zeros of (${fp})<sup>2</sup> + ${fpp}${f}” (JEE); functional differential inequalities (Adv, twice).<br><b>Method.</b> Apply Rolle/Lagrange to a well-chosen auxiliary function; chain successive applications: zeros of ${f} force zeros of ${fp}, which force zeros of the next antiderivative-like object.<br><br><b>Representative (Main):</b> Position ${of(f, t)} = ${a}${sq(t)} + ${b}${t} + ${c}, ${a},${NB}${b},${NB}${c} > 1. Where is the average speed over ${iv(T1, T2, '[', ']')} attained?`,
        steps: [
          `Average speed equals the secant slope ${fr(`${of(f, T2)} − ${of(f, T1)}`, `${T2} − ${T1}`)}; by Lagrange MVT some ${tau} has ${fp}(${tau}) equal to it. Here<br>${fp}(${tau}) = 2${a}${tau} + ${b}<br>= ${fr(`${of(f, T2)} − ${of(f, T1)}`, `${T2} − ${T1}`)}<br>= ${a}(${T1} + ${T2}) + ${b}<br>⟹ ${tau} = ${fr(`${T1} + ${T2}`, '2')}`,
          `This point is unique for a quadratic: answer ${fr(`${T1} + ${T2}`, '2')}.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'The traps' },
      { t: 'p', html: 'These are the specific errors the wrong options in JEE papers are built around:' },
      {
        t: 'mistakes',
        items: [
          `<b>Thickness confused with radius.</b> The ice-ball question was asked twice in two years precisely because students write ${V} = ${fr('4', '3')}π${X3}. The melt acts on the outer sphere of radius 10 + ${x}.`,
          `<b>Factor-of-π and factor-of-2 slips in rates.</b> Options like 0.7π vs 1.4π (and related-rate options generally) punish forgetting ${DCDT} = 2π${DRDT} or ${DSDT} = 8π${r}${DRDT}.`,
          `<b>Endpoint neglect.</b> Absolute extrema on a closed interval routinely sit at endpoints (for ${fx} = ${X3} − 3${x} on ${iv('0', '3', '[', ']')} the critical point ${rel(x, '=', '1')} gives only the minimum −2, while the maximum 18 sits at the end-point ${rel(x, '=', '3')}; ${sin(x)} + ${cos(x)} on ${iv('0', fr('π', '2'), '[', ']')} tempts you with the endpoint value 1 while the answer is √2).`,
          `<b>Misclassified critical points, and inflection posing as an extremum.</b> (3${X2} + ${a}${x} − 2 − ${a})${EX} (Main) has two critical points of opposite character; students who assume “critical = extremum” get the classification backwards. Likewise ${fp}(${c}) = 0 with no sign flip (the (${x} − 1)<sup>2</sup> pattern) means no extremum.`,
          `<b>Strict vs non-strict discriminant.</b> For “${fp} is a quadratic ≥ 0 everywhere,” the answer is Δ ≤ 0: closed interval. The distractor offering the open interval catches those who write Δ < 0.`,
          `<b>Skipping the point-on-curve check.</b> In the tangent-perpendicular question (Main), ${a} and ${b} are only determined after forcing ${iv('1', '−5')} onto ${y} = ${X3} + ${a}${x} − ${b}. Options contain points from curves with one right and one wrong coefficient.`,
          `<b>Vertical tangents done backwards.</b> For implicit curves, vertical tangent ⟺ denominator of ${DYDX} vanishes (${Y3} + 3${X2} = 12${y} gives ${y} = 2 only; ${y} = −2 yields an impossible equation). And ${CURVE2} has no horizontal-tangent point at all (${H} = ∅): a favourite shock answer.`,
          '<b>Sign and unit discipline in rates.</b> Melting, draining, sliding-down are negative rates; mixing metres and centimetres in one ladder problem (a 2 m ladder with a 25 cm/s rate) cancels safely only if you convert consistently.',
          `<b>Merging monotonic intervals across domain breaks</b>, and demanding ${fp} > 0 strictly when isolated zeros are harmless (${x} − ${sin(x)} is strictly increasing).`,
        ],
      },

      { t: 'part', title: 'Graded practice set' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>(warm-up, related rates).</b> (Main) The surface area of a cube increases at 3.6 ${CM2}/s. Find the rate of change of its volume when the edge is 10 cm.`,
            a: `${S} = 6${sq(a)} ⇒ ${DSDT} = 12${a}${DADT} = 3.6 ⇒ ${DADT} = 0.03. Then<br>${DVDT} = 3${sq(a)}${DADT} = 3(100)(0.03) = 9 ${CM3}/s`,
          },
          {
            q: '<b>(ladder, mixed units).</b> (Main) A 2 m ladder leans against a wall; the top slides down at 25 cm/s. How fast does the bottom move out when the top is 1 m up?',
            a: `Work in cm: ${X2} + ${Y2} = (200)<sup>2</sup>; at ${rel(y, '=', '100')}, ${x} = 100√3. Differentiate:<br>2${x}${DXDT} + 2${y}${DYDT} = 0<br>⟹ ${DXDT} = ${fr('100 ⋅ 25', '100√3')} = ${fr('25', '√3')} cm/s`,
          },
          {
            q: `<b>(balloon).</b> (Main Online) A balloon is inflated at 35 ${CM3}/min. Find the rate of increase of surface area when the diameter is 14 cm.`,
            a: `${r} = 7:<br>${DRDT} = ${fr('35', '4π(49)')},<br>${DSDT} = 8π${r}${DRDT} = ${fr('56π ⋅ 35', '196π')} = 10 ${CM2}/min`,
          },
          {
            q: `<b>(point on a curve).</b> (Main) ${y} = ${X3} + ${a}${x} − ${b} passes through ${iv('1', '−5')}; its tangent there is perpendicular to −${x} + ${y} + 4 = 0. Find ${a} and ${b}, and show that ${iv('2', '−2')} lies on the curve.`,
            a: `Point on curve: ${a} − ${b} = −6. Tangent slope 3 + ${a}; the given line has slope 1, so 3 + ${a} = −1 ⇒ ${a} = −4, ${b} = 2. Curve: ${y} = ${X3} − 4${x} − 2. Check: ${y}(2) = 8 − 8 − 2 = −2, so ${iv('2', '−2')} lies on it.`,
          },
          {
            q: `<b>(parameters from extrema).</b> (Main) ${y} = ${a}${NB}${ln(abs(x))} + ${b}${X2} + ${x} has extrema at ${rel(x, '=', '−1')} and ${rel(x, '=', '2')}. Find ${a} and ${b}.`,
            a: `See Archetype 4: ${a} = 2, ${b} = −${H2}.`,
          },
          {
            q: `<b>(classify a quartic).</b> (Main) ${fx} = 9${x}<sup>4</sup> + 12${X3} − 36${X2} + 25.`,
            a: `${fp}(${x}) = 36${X3} + 36${X2} − 72${x} = 36${x}(${x} + 2)(${x} − 1)<br>Sign chart: ${fp} < 0 on ${iv('−∞', '−2')}, > 0 on ${iv('−2', '0')}, < 0 on ${iv('0', '1')}, > 0 on ${iv('1', '∞')}. Local minima at ${x} = −2, 1; local maximum at ${rel(x, '=', '0')}.`,
          },
          {
            q: `<b>(two poles).</b> (Main) Poles of heights 8 m and 11 m stand 10 m apart. Find ${A}${M} minimizing ${M}${sq(D)} + ${M}${sq(C)} for ${M} on ${A}${B}.`,
            a: `With ${A}${M} = ${x}: ${M}${sq(D)} = ${X2} + 64, ${M}${sq(C)} = (10 − ${x})<sup>2</sup> + 121. Sum = 2${X2} − 20${x} + 285; derivative 4${x} − 20 = 0 ⇒ ${x} = 5 m (second derivative 4 > 0).`,
          },
          {
            q: `<b>(open box from a sheet).</b> (Adv) A rectangular sheet of fixed perimeter, with sides in the ratio 8${NB}:${NB}15, is made into an open box by cutting equal squares from its four corners and folding up the sides. The box has maximum volume when the squares removed total area 100. Find the side lengths of the sheet.`,
            a: `Sides 8${x}, 15${x}; cut squares of side ${y} from each corner, so 4${Y2} = 100 and ${y} = 5. For a sheet of fixed size the cut side ${y} is the variable:<br>${V}(${y}) = ${y}(8${x} − 2${y})(15${x} − 2${y}),<br>${DVDY} = 120${X2} − 92${x}${y} + 12${Y2} = 0.<br>At the maximum ${y} = 5, so 120${X2} − 460${x} + 300 = 0, i.e. 6${X2} − 23${x} + 15 = 0 ⟹ ${x} = 3 or ${fr('5', '6')}.<br>${x} = ${fr('5', '6')} makes 8${x} − 10 < 0: rejected. Sides are 24 and 45.`,
          },
          {
            q: `<b>(tangent and normal sharing a foot on the ${x}-axis).</b> (Main) The tangent to ${y} = ${EX} at ${iv(c, EC)} and the normal to ${Y2} = 4${x} at ${iv('1', '2')} meet the ${x}-axis at the same point. Find ${c}.`,
            a: `Normal at ${iv('1', '2')}: ${DYDX} = ${fr('2', y)} = 1, normal slope −1, line ${y} = 3 − ${x}, hitting ${rel(y, '=', '0')} at ${rel(x, '=', '3')}. Tangent: ${y} = ${EC}(${x} − ${c} + 1), zero at ${x} = ${c} − 1. So ${c} − 1 = 3 ⇒ ${c} = 4.`,
          },
          {
            q: `<b>(economic speed).</b> (Main Online) Cost ${of(C, v)} = ${a}${v} + ${fr(b, v)}; ${of(C, '30')} = 75, ${of(C, '40')} = 65. Most economical speed?`,
            a: `Solving: 2250 = 900${a} + ${b} and 2600 = 1600${a} + ${b}, giving ${a} = ${H2}, ${b} = 1800. Then<br>${C}′(${v}) = ${H2} − ${fr('1800', sq(v))} = 0 ⟹ ${v} = 60 km/h`,
          },
          {
            q: `<b>(Advanced inequality).</b> (JEE) Prove 1 + ${x}${NB}${LNR} ≥ ${R1X2} for all real ${x}.`,
            a: `Let ${of(g, x)} = 1 + ${x}${NB}${LNR} − ${R1X2}, so ${of(g, '0')} = 0. Using<br>${DDX}${NB}${LNR} = ${fr('1', R1X2)},<br>${g}′(${x}) = ${LNR} + ${fr(x, R1X2)} − ${fr(x, R1X2)}<br>= ${LNR}<br>which is negative for ${rel(x, '<', '0')} and positive for ${rel(x, '>', '0')}. So ${g} decreases to ${of(g, '0')} = 0 and increases after: ${g} ≥ 0 everywhere, with equality only at ${rel(x, '=', '0')}.`,
          },
          {
            q: `<b>(Advanced counting via Rolle).</b> (JEE) On ${iv(a, e, '[', ']')} with ${a} < ${b} < ${c} < ${d} < ${e}, ${of(f, a)} = 0, ${of(f, b)} = 2, ${of(f, c)} = −1, ${of(f, d)} = 2, ${of(f, e)} = 0. Find the minimum number of zeros of ${of(g, x)} = (${fp}(${x}))<sup>2</sup> + ${fpp}(${x})${fx}.`,
            a: `Note ${g} = (${f}${NB}${fp})′. The IVT gives zeros ${al} ∈ ${iv(b, c)} and ${be} ∈ ${iv(c, d)} of ${f}, alongside ${a} and ${e}: four zeros of ${f}. Rolle forces at least three zeros of ${fp} strictly between consecutive zeros of ${f}, disjoint from them: at least seven zeros of ${f}${NB}${fp}. Applying Rolle to ${f}${NB}${fp} between consecutive zeros: at least six zeros of ${g}.`,
          },
        ],
      },

      { t: 'part', title: 'Where to focus beyond the chapter' },
      {
        t: 'p',
        html: `Three areas repay extra attention beyond the chapter’s CBSE-style practice. First, tangents and normals form one of the two largest JEE blocks ${ESTIMATE}, yet the chapter’s Topic 04 covers only explicit curves ${y} = ${fx}; the real exam works with implicit curves (${CURVE1}, ${CURVE2}), parametric forms, angles of intersection, and normals that re-meet the curve. Second, monotonicity and maxima–minima appear in Advanced through Rolle/MVT existence arguments, composite-function behaviour, inequality proofs and root-counting, which go well beyond the board template. Third, approximations and differentials are rare in JEE ${ESTIMATE}; spend the time instead on the optimization formats the exam favours: fitted-cost problems, constrained solids, and multi-correct statement questions.`,
      },
    ],
  },
];
