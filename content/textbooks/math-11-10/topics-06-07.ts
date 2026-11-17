import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Topics 06–07, pp. 935–961 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word: the supplement's first two
 * units, "Parametric Forms and the Auxiliary Circle" (pp. 935–947; Figures
 * 10.6 and 10.7, captions p. 939, drawings p. 940) and "Tangents to a Conic"
 * (pp. 948–961: its cheat sheet runs onto the top of p. 961, where Normals to
 * a Conic starts; Figure 10.8, caption p. 953, drawing p. 954). The
 * supplement's heading (p. 935) is not copied. Each topic opens with its
 * "Exam Relevance:" box as a part of its own, then is split at its Sections 1
 * to 8; the "Cheat Sheet Box" is the part "Cheat sheet". No unnumbered
 * drawings on these pages. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const sb = (v: string, s: string) => `<i>${v}</i><sub>${s}</sub>`;
/** A no-break space: keeps a short condition on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const a = I('a');
const b = I('b');
const c = I('c');
const e = I('e');
const h = I('h');
const k = I('k');
const m = I('m');
const r = I('r');
const t = I('t');
const u = I('u');
const x = I('x');
const y = I('y');
const th = I('θ');
const ph = I('φ');
const P = I('P');
const Q = I('Q');
const S = I('S');
const T = I('T');
const th1 = sb('θ', '1');
const th2 = sb('θ', '2');
const t1 = sb('t', '1');
const t2 = sb('t', '2');
const m1 = sb('m', '1');
const m2 = sb('m', '2');
const x1 = sb('x', '1');
const y1 = sb('y', '1');
const S1 = sb('S', '1');
const X2 = `${x}<sup>2</sup>`;
const Y2 = `${y}<sup>2</sup>`;
const A2 = `${a}<sup>2</sup>`;
const B2 = `${b}<sup>2</sup>`;
const C2 = `${c}<sup>2</sup>`;
const H2 = `${h}<sup>2</sup>`;
const K2 = `${k}<sup>2</sup>`;
const M2 = `${m}<sup>2</sup>`;
const R2 = `${r}<sup>2</sup>`;
const X1S = '<i>x</i><sub>1</sub><sup>2</sup>';
const Y1S = '<i>y</i><sub>1</sub><sup>2</sup>';
const XX1 = '<i>xx</i><sub>1</sub>';
const YY1 = '<i>yy</i><sub>1</sub>';
const P11 = `(${x1},${NB}${y1})`;
const A2M2 = `${a}<sup>2</sup>${m}<sup>2</sup>`;
const neq0 = (v: string) => `${v}${NB}≠${NB}0`;

const HALF = fr('1', '2');
const PI2 = fr('π', '2');
const PI3 = fr('π', '3');
const PI4 = fr('π', '4');
const PI6 = fr('π', '6');
const TPI2 = fr('3π', '2');
const TWOPI3 = fr('2π', '3');
const BA = fr(b, a);

// Topic 06: the parametric points and the chords.
const ELL = `${fr(X2, A2)}${NB}+${NB}${fr(Y2, B2)}${NB}=${NB}1`;
const HYP = `${fr(X2, A2)}${NB}−${NB}${fr(Y2, B2)}${NB}=${NB}1`;
const AUX = `${X2} + ${Y2} = ${A2}`;
const PE = `(${a} cos ${th}, ${b} sin ${th})`;
const PH = `(${a} sec ${th}, ${b} tan ${th})`;
const PQ = `(${a} cos ${th}, ${a} sin ${th})`;
const PAR = `(<i>at</i><sup>2</sup>,${NB}2<i>at</i>)`;
const SUM12 = fr(`${th1} + ${th2}`, '2');
const DIF12 = fr(`${th1} − ${th2}`, '2');
const ECHORD = `${fr(x, a)} cos ${SUM12} + ${fr(y, b)} sin ${SUM12} = cos ${DIF12}`;
const HCHORD = `${fr(x, a)} cos ${DIF12} − ${fr(y, b)} sin ${SUM12} = cos ${SUM12}`;
const FOCAL = `tan ${fr(th1, '2')} tan ${fr(th2, '2')} = ${fr(`${e} − 1`, `${e} + 1`)}`;
const TANPHI = `tan ${ph} = ${BA} tan ${th}`;
const PNQN = fr('<i>PN</i>', '<i>QN</i>');

// Topic 07: tangents.
const MXC = `${y} = <i>mx</i> + ${c}`;
const GEN = `${X2} + ${Y2} + 2<i>gx</i> + 2<i>fy</i> + ${c} = 0`;
const TCIRC = `${XX1} + ${YY1} = ${R2}`;
const TGEN = `${XX1} + ${YY1} + <i>g</i>(${x} + ${x1}) + <i>f</i>(${y} + ${y1}) + ${c} = 0`;
const TPAR = `${YY1} = 2${a}(${x} + ${x1})`;
const TE = `${fr(XX1, A2)}${NB}+${NB}${fr(YY1, B2)}${NB}=${NB}1`;
const TH = `${fr(XX1, A2)}${NB}−${NB}${fr(YY1, B2)}${NB}=${NB}1`;
const TPE = `${fr(`${x} cos ${th}`, a)}${NB}+${NB}${fr(`${y} sin ${th}`, b)}${NB}=${NB}1`;
const TPH = `${fr(`${x} sec ${th}`, a)}${NB}−${NB}${fr(`${y} tan ${th}`, b)}${NB}=${NB}1`;
const SLOPE_C = `${y} = <i>mx</i> ± ${r}√(1 + ${M2})`;
const SLOPE_P = `${y} = <i>mx</i> + ${fr(a, m)}`;
const SLOPE_E = `${y} = <i>mx</i> ± √(${A2M2} + ${B2})`;
const SLOPE_H = `${y} = <i>mx</i> ± √(${A2M2} − ${B2})`;
const COND_C = `${C2} = ${R2}(1 + ${M2})`;
const COND_E = `${C2} = ${A2M2} + ${B2}`;
const COND_H = `${C2} = ${A2M2} − ${B2}`;
const PCP = `(${fr(a, M2)}, ${fr(`2${a}`, m)})`;
const PCE = `(−${fr(`${A2}${m}`, c)}, ${fr(B2, c)})`;
const PCH = `(−${fr(`${A2}${m}`, c)}, −${fr(B2, c)})`;
const T12 = `(<i>at</i><sub>1</sub><i>t</i><sub>2</sub>,${NB}${a}(${t1}${NB}+${NB}${t2}))`;
const DIR_E = `${X2} + ${Y2} = ${A2} + ${B2}`;
const DIR_H = `${X2} + ${Y2} = ${A2} − ${B2}`;
const SS1T = '<i>SS</i><sub>1</sub> = <i>T</i><sup>2</sup>';
const T0 = `${T} = 0`;
const S0 = `${S} = 0`;
const KB = fr(`${K2} − ${B2}`, `${H2} − ${A2}`);
const QUAD_M = `${M2}(${H2} − ${A2}) − 2<i>hk</i> ${m} + (${K2} − ${B2}) = 0`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 06 · pp. 935–947 ────────────────
  {
    n: '06',
    title: 'Parametric Forms and the Auxiliary Circle',
    kalam: 'Every conic has a one-number description, and for the ellipse and the hyperbola that number carries beautiful geometry.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `CBSE Boards do not ask for the parametric form by name, but the eccentric angle is the fastest legal route through the 3–4 mark “find the point on the ellipse such that…” questions that Boards ask every year ${ESTIMATE}. JEE Main tests it directly and repeatedly ${ESTIMATE}: a point handed to you as ${PE}, a chord joining two eccentric angles, or the hyperbola’s ${PH} with a branch question attached. JEE Advanced builds entire problems on the auxiliary circle, because it converts ellipse geometry into circle geometry, and circle geometry is easy. NEET does not test mathematics at all.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `You already met one parametric form in <b>The Parabola</b>: the point ${PAR}, which let you replace two coordinates by one number ${t} and made the focal-chord proof collapse to the single condition ${t1}${t2} = −1. That was not a trick special to the parabola. Every conic has a one-number description, and for the ellipse and the hyperbola that number carries beautiful geometry.`,
      },
      {
        t: 'p',
        html: `Start with the easiest case. Picture the giant wheel at a mela, a big vertical circle with seats bolted around the rim. If a friend asks where you are, you do not say “four metres right of centre and three metres up.” You say “quarter turn past the bottom.” <b>One angle locates you completely, because the radius never changes, and that is exactly what a parametric form is: trading two coordinates for one parameter that the curve’s own symmetry supplies.</b> For a circle of radius ${r} centred at the origin the seat at angle ${th} sits at (${r} cos ${th}, ${r} sin ${th}), and Pythagoras returns ${X2} + ${Y2} = ${R2} automatically.`,
      },
      {
        t: 'p',
        html: 'Now the step that unlocks the ellipse. Let the sun, high in the sky, shine on that vertical wheel and look at the shadow it throws on the ground. The shadow is not a circle any more: it is squashed in one direction and stretched in none. It is an <b>ellipse</b>. Every seat on the wheel throws its shadow to exactly one point of the ellipse, along the sun’s rays. So each point of the ellipse still has an angle attached to it: not its own angle, but the angle of the seat that made it.',
      },
      {
        t: 'p',
        html: `Think about it this way… the ellipse ${ELL} is the circle ${AUX} with every ordinate multiplied by the fixed factor ${BA}. Nothing horizontal changes; everything vertical shrinks in the same proportion. So take the circle point ${Q} = ${PQ}, shrink its height by ${BA}, and you land on<br>${P} = (${a} cos ${th}, ${BA} · ${a} sin ${th})<br>= ${PE},<br>which satisfies the ellipse equation for every ${th}. That circle of radius ${a}, the circle drawn on the <b>major axis as diameter</b>, is called the <b>auxiliary circle</b>, and the angle ${th} it hands over is called the <b>eccentric angle</b> of ${P}.`,
      },
      {
        t: 'p',
        html: `Here is the single most examined subtlety in this whole unit. The eccentric angle ${th} belongs to ${Q} on the circle, <b>not</b> to ${P} on the ellipse. If you join the centre <i>O</i> to ${P} and measure the angle that <i>OP</i> makes with the positive ${x}-axis, you get a different angle ${ph}, related by ${TANPHI}. The two agree only at the four axis ends. Students who treat ${th} as “the angle of ${P}” lose marks on this every single session.`,
      },
      {
        t: 'p',
        html: `The hyperbola needs a different pair of functions, and the reason is arithmetic before it is geometric. The ellipse equation wants two quantities whose squares <b>add</b> to 1, and cos<sup>2</sup> ${th} + sin<sup>2</sup> ${th} = 1 supplies them. The hyperbola equation wants two quantities whose squares <b>subtract</b> to 1, and the identity that does that is sec<sup>2</sup> ${th} − tan<sup>2</sup> ${th} = 1. So the parametric point is ${PH}. The hyperbola has an auxiliary circle too (again ${AUX}, drawn on the transverse axis as diameter), but the construction reaches the curve through the <b>tangent</b> to the circle rather than through a vertical shadow.`,
      },
      {
        t: 'p',
        html: `Limiting conditions and assumptions.<br>• The eccentric angle ${th} is the angle at the centre made by the <b>auxiliary-circle point</b>, not by the ellipse point. Never read ${th} off the ellipse directly.<br>• ${PE} describes an ellipse and <b>only</b> an ellipse. Feeding it to a hyperbola produces a point that is not on the curve (except at the vertices, ${th} = 0 and π): a mistake that always looks plausible and is wrong.<br>• For the hyperbola, ${th} = ${PI2} and ${th} = ${TPI2} are excluded, because sec ${th} and tan ${th} are both undefined there.<br>• The sign of sec ${th} decides the branch: cos ${th} > 0 puts the point on the right branch, cos ${th} < 0 on the left. A single parametric formula covers both branches, which is why it beats solving for ${y}.<br>• All the forms below assume the tidy frame used throughout this chapter: centre (or vertex) at the origin, axes along the coordinate axes.`,
      },

      { t: 'part', title: 'Key definitions and formulas' },
      {
        t: 'p',
        html: `<b>Definition (parametric form).</b> A parametric form of a curve is a pair of expressions ${x} = <i>f</i>(${u}), ${y} = <i>g</i>(${u}) such that as the single parameter ${u} runs over its allowed range, the point (<i>f</i>(${u}), <i>g</i>(${u})) traces the curve exactly once and satisfies the curve’s Cartesian equation identically.`,
      },
      {
        t: 'p',
        html: `<b>Definition (auxiliary circle).</b> For the ellipse ${ELL} (${a} > ${b}), the auxiliary circle is the circle described on the major axis as diameter:`,
      },
      {
        t: 'formula',
        kicker: 'Auxiliary circle',
        main: `${AUX}.`,
        legend: [`${a} = semi-major axis (ellipse) or semi-transverse axis (hyperbola)`],
        note: null,
      },
      {
        t: 'p',
        html: `For the hyperbola ${HYP}, the auxiliary circle is the circle on the transverse axis as diameter, again ${AUX}.<br>• ${a}: semi-major axis (ellipse) or semi-transverse axis (hyperbola).<br>• The auxiliary circle is <b>not</b> ${X2} + ${Y2} = ${A2} + ${B2} and <b>not</b> ${X2} + ${Y2} = ${B2}; those are different objects.`,
      },
      {
        t: 'p',
        html: `<b>Definition (eccentric angle).</b> Let ${P} lie on the ellipse. Drop the perpendicular <i>PN</i> from ${P} to the major axis and produce it to meet the auxiliary circle at ${Q} on the same side of the major axis. Then ${th} = ∠<i>QON</i>, measured anticlockwise from the positive ${x}-axis, is the eccentric angle of ${P}, and ${Q} is the <b>corresponding point</b> of ${P}.`,
      },
      {
        t: 'table',
        title: 'Master table of parametric forms',
        head: ['Conic', 'Standard equation', 'Parametric point', 'Parameter range', 'What the parameter means'],
        rows: [
          ['Circle (origin)', `${X2} + ${Y2} = ${R2}`, `(${r} cos ${th}, ${r} sin ${th})`, `${th} ∈ [0, 2π)`, 'the actual angle at the centre'],
          [
            'Circle (shifted)',
            `(${x} − ${h})<sup>2</sup> + (${y} − ${k})<sup>2</sup> = ${R2}`,
            `(${h} + ${r} cos ${th}, ${k} + ${r} sin ${th})`,
            `${th} ∈ [0, 2π)`,
            `angle at the centre (${h},${NB}${k})`,
          ],
          ['Parabola', `${Y2} = 4<i>ax</i>`, PAR, `${t} ∈ ℝ`, `${t} = ${fr(y, `2${a}`)}; tangent slope is ${fr('1', t)}`],
          ['Ellipse', ELL, PE, `${th} ∈ [0, 2π)`, 'eccentric angle on the auxiliary circle'],
          [
            'Hyperbola',
            HYP,
            PH,
            `${th} ∈ [0, 2π), ${th} ≠ ${PI2}, ${TPI2}`,
            `angle of the auxiliary-circle point whose tangent meets the transverse axis at the foot of ${P}`,
          ],
          ['Rectangular hyperbola', `<i>xy</i> = ${C2}`, `(<i>ct</i>, ${fr(c, t)})`, `${t} ∈ ℝ, ${neq0(t)}`, `${t} > 0 first quadrant, ${t} < 0 third`],
        ],
      },
      {
        t: 'p',
        html: `<b>The squash factor.</b> With <i>N</i> the foot of the ordinate of ${P} and ${Q} the corresponding auxiliary-circle point,`,
      },
      {
        t: 'formula',
        kicker: 'The squash factor',
        main: `${PNQN} = ${BA},<br><i>PQ</i> = (${a} − ${b})|sin ${th}|.`,
        legend: [`${P} = the point ${PE} of the ellipse`, `<i>N</i> = the foot of the ordinate of ${P}`, `${Q} = the corresponding auxiliary-circle point`, `${th} = the eccentric angle of ${P}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Eccentric angle versus the true central angle.</b> If ${ph} is the angle <i>OP</i> makes with the positive ${x}-axis, then`,
      },
      {
        t: 'formula',
        kicker: 'Eccentric angle versus the true central angle',
        main: `${TANPHI}.`,
        legend: [`${ph} = the angle <i>OP</i> makes with the positive ${x}-axis`, `${th} = the eccentric angle of ${P} (${ph} = ${th} only at the four axis ends)`],
        note: null,
      },
      { t: 'p', html: `Equality ${ph} = ${th} holds only at ${th} = 0, ${PI2}, π, ${TPI2}.` },
      {
        t: 'p',
        html: `<b>Chord joining two parametric points.</b> For the ellipse, the chord through the points with eccentric angles ${th1} and ${th2} is`,
      },
      {
        t: 'formula',
        kicker: 'Chord joining two parametric points (ellipse)',
        main: `${ECHORD}.`,
        legend: [`${th1}, ${th2} = the eccentric angles of the two points`, `${a}, ${b} = the semi-axes`],
        note: null,
      },
      { t: 'p', html: `For the hyperbola, the chord through the points with parameters ${th1} and ${th2} is` },
      {
        t: 'formula',
        kicker: 'Chord joining two parametric points (hyperbola)',
        main: `${HCHORD}.`,
        legend: [`${th1}, ${th2} = the parameters of the two points`, `${a}, ${b} = the semi-axes`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Focal-chord condition on the ellipse.</b> The chord joining eccentric angles ${th1}, ${th2} passes through the focus (<i>ae</i>,${NB}0) if and only if`,
      },
      {
        t: 'formula',
        kicker: 'Focal-chord condition on the ellipse',
        main: `through the focus (<i>ae</i>,${NB}0):<br>${e} cos ${SUM12} = cos ${DIF12}<br>⟺ ${FOCAL}.`,
        legend: [`${e} = the eccentricity (through (−<i>ae</i>,${NB}0) the right side is ${fr(`${e} + 1`, `${e} − 1`)})`, `${th1}, ${th2} = the eccentric angles of the chord’s ends`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>An alternative hyperbola parametrisation (for reference).</b> Because cosh<sup>2</sup> ${u} − sinh<sup>2</sup> ${u} = 1 for the hyperbolic functions cosh ${u} = ${HALF}(e<sup>${u}</sup> + e<sup>−${u}</sup>) and sinh ${u} = ${HALF}(e<sup>${u}</sup> − e<sup>−${u}</sup>) (here e is the exponential base 2.718 …, not the eccentricity), the point<br>(${a}${NB}cosh${NB}${u},${NB}${b}${NB}sinh${NB}${u}), ${u} ∈ ℝ<br>also lies on ${HYP}. Since cosh ${u} ≥ 1 always, this form sweeps out the <b>right branch only</b>; the left branch needs (−${a}${NB}cosh${NB}${u},${NB}${b}${NB}sinh${NB}${u}). It is the form used in physics and in higher mathematics, and it is worth recognising, but ${PH} is the one CBSE and JEE expect.`,
      },

      { t: 'part', title: 'CBSE board derivation' },
      { t: 'p', html: `<b>Derivation: the auxiliary circle produces ${PE}</b>` },
      {
        t: 'p',
        html: `1. Draw the ellipse ${ELL} with ${a} > ${b} > 0, and draw the auxiliary circle ${AUX} on the same centre. <b>Reason:</b> the circle has radius ${a}, so it touches the ellipse at the two vertices (±${a},${NB}0) and encloses it everywhere else.`,
      },
      {
        t: 'p',
        html: `2. Take any point ${Q} on the auxiliary circle and write it as ${Q} = ${PQ}. <b>Reason:</b> every point of a circle of radius ${a} has this form, with ${th} the genuine angle at the centre.`,
      },
      {
        t: 'p',
        html: `3. Drop the perpendicular from ${Q} to the major axis, meeting it at <i>N</i> = (${a} cos ${th}, 0). Let ${P} be the point where <i>QN</i> cuts the ellipse on the same side of the axis. <b>Reason:</b> a vertical line meets the ellipse in at most two points, one above the axis and one below; take the one matching the sign of sin ${th}.`,
      },
      {
        t: 'p',
        html: `4. ${P} has the same abscissa as ${Q}, namely ${x} = ${a} cos ${th}. Substitute into the ellipse equation:<br>${fr(`${A2} cos<sup>2</sup> ${th}`, A2)}${NB}+${NB}${fr(Y2, B2)}${NB}=${NB}1<br>⟹ ${fr(Y2, B2)} = 1 − cos<sup>2</sup> ${th} = sin<sup>2</sup> ${th}<br>⟹ ${y} = ${b} sin ${th}.<br><b>Reason:</b> choosing the same sign as sin ${th} keeps ${P} on the same side of the axis as ${Q}, which is how the correspondence was defined.`,
      },
      {
        t: 'p',
        html: `5. Hence ${P} = ${PE}, and ${th}, an angle read off the <b>circle</b>, labels the point of the <b>ellipse</b>. That angle is the eccentric angle.`,
      },
      {
        t: 'p',
        html: `6. Divide the ordinates: ${PNQN} = ${fr(`${b} sin ${th}`, `${a} sin ${th}`)} = ${BA}, a constant. <b>Reason:</b> this is the statement that the ellipse is the auxiliary circle uniformly compressed towards the major axis in the fixed ratio ${b} ∶ ${a}: the shadow picture made exact.`,
      },
      { t: 'fig', id: 'm11-10-fig-10.6' },
      { t: 'p', html: '<b>Derivation: why the hyperbola uses sec and tan</b>' },
      {
        t: 'p',
        html: `1. The hyperbola equation is ${HYP}, so you need two functions whose squares <b>differ</b> by 1. <b>Reason:</b> matching the equation term by term is what any parametrisation must do.`,
      },
      {
        t: 'p',
        html: `2. The Pythagorean identity in its second form is sec<sup>2</sup> ${th} − tan<sup>2</sup> ${th} = 1. <b>Reason:</b> divide cos<sup>2</sup> ${th} + sin<sup>2</sup> ${th} = 1 throughout by cos<sup>2</sup> ${th}.`,
      },
      {
        t: 'p',
        html: `3. Set ${fr(x, a)} = sec ${th} and ${fr(y, b)} = tan ${th}, i.e. ${x} = ${a} sec ${th}, ${y} = ${b} tan ${th}. Substituting gives sec<sup>2</sup> ${th} − tan<sup>2</sup> ${th} = 1, which is true for every admissible ${th}. <b>Reason:</b> the equation is satisfied identically, which is exactly the requirement for a parametric form.`,
      },
      {
        t: 'p',
        html: `4. Geometric meaning: on the auxiliary circle ${AUX} take ${Q} = ${PQ} and draw the <b>tangent</b> to the circle at ${Q}, namely ${x} cos ${th} + ${y} sin ${th} = ${a}. It meets the transverse axis ${y} = 0 at <i>N</i> = (${a} sec ${th}, 0). <b>Reason:</b> put ${y} = 0 and solve, giving ${x} = ${fr(a, `cos ${th}`)}.`,
      },
      {
        t: 'p',
        html: `5. The point of the hyperbola with parameter ${th} is the point vertically above or below <i>N</i>: ${P} = ${PH}. <b>Reason:</b> the abscissa is forced by step 4, and the ordinate then follows from the hyperbola equation.`,
      },
      {
        t: 'p',
        html: `6. Because |sec ${th}| ≥ 1, no parametric point ever lands in the empty strip −${a} < ${x} < ${a} between the branches: the parametrisation automatically respects the shape of the curve.`,
      },
      { t: 'fig', id: 'm11-10-fig-10.7' },
      {
        t: 'proc',
        title: 'Procedure A: convert a Cartesian point on an ellipse into its eccentric angle',
        steps: [
          'Confirm the point actually lies on the ellipse by substituting it. <b>Why:</b> an eccentric angle exists only for points of the curve, and this catches copying errors before they cost you the whole question.',
          `Write cos ${th} = ${fr(x1, a)} and sin ${th} = ${fr(y1, b)}. <b>Why:</b> these are forced by comparing ${P11} with ${PE}.`,
          `Read the quadrant from the <b>pair of signs</b>, not from one of them. <b>Why:</b> cos ${th} = ${HALF} alone allows ${th} = ${PI3} or ${fr('5π', '3')}; the sign of sin ${th} settles it.`,
          `State ${th} in [0, 2π) unless the question asks otherwise. <b>Why:</b> examiners key the principal range.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: use a parameter to remove an unknown',
        steps: [
          'Whenever a problem says “a variable point on the conic”, write that point in parametric form immediately. <b>Why:</b> it replaces two unknowns tied by one equation with a single free unknown, and the constraint is then satisfied automatically.',
          'Express whatever the question asks for (a distance, a slope, an area) as a function of the single parameter. <b>Why:</b> one variable means ordinary algebra or trigonometry, not simultaneous equations.',
          'Impose the remaining condition and solve for the parameter. <b>Why:</b> the condition is now one equation in one unknown.',
          `Convert back to coordinates at the very end. <b>Why:</b> answers are marked in coordinates; carrying ${th} to the final line loses presentation marks.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C: decide which branch a hyperbola parameter lands on',
        steps: [
          `Compute cos ${th}. <b>Why:</b> the abscissa is ${a} sec ${th}, whose sign is the sign of cos ${th}.`,
          `If cos ${th} > 0, i.e. ${th} ∈ (−${PI2},${NB}${PI2}), the point is on the <b>right</b> branch; if cos ${th} < 0, i.e. ${th} ∈ (${PI2},${NB}${TPI2}), it is on the <b>left</b> branch. <b>Why:</b> the two branches are separated exactly by the sign of ${x}.`,
          `Reject ${th} = ${PI2} and ${th} = ${TPI2}. <b>Why:</b> sec ${th} and tan ${th} are undefined there; geometrically the tangent at ${Q} is the horizontal line ${y} = ±${a}, parallel to the transverse axis.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `For the ellipse ${fr(X2, '25')}${NB}+${NB}${fr(Y2, '9')}${NB}=${NB}1, write the equation of the auxiliary circle, find the point ${P} whose eccentric angle is ${PI3}, and find the corresponding point ${Q} on the auxiliary circle.`,
        steps: [
          `Here ${A2} = 25 and ${B2} = 9, and since 25 > 9 the major axis is along the ${x}-axis, so ${a} = 5 and ${b} = 3.`,
          `The auxiliary circle is drawn on the major axis as diameter, so its radius is ${a} = 5:<br>${X2} + ${Y2} = 25.`,
          `The parametric point of the ellipse is ${PE}. At ${th} = ${PI3}:<br>${P} = (5 cos ${PI3}, 3 sin ${PI3})<br>= (5 · ${HALF}, 3 · ${fr('√3', '2')})<br>= (${fr('5', '2')}, ${fr('3√3', '2')}).`,
          `Check that ${P} is on the ellipse: (${fr('5', '2')})<sup>2</sup> = ${fr('25', '4')} and (${fr('3√3', '2')})<sup>2</sup> = ${fr('27', '4')}, so<br><br>${fr(X2, '25')} + ${fr(Y2, '9')} = ${fr('25', '100')} + ${fr('27', '36')}<br><br>= ${fr('1', '4')}${NB}+${NB}${fr('3', '4')}${NB}=${NB}1.`,
          `The corresponding point ${Q} has the same abscissa and lies on the circle of radius 5, so ${Q} = ${PQ}:<br>${Q} = (5 cos ${PI3}, 5 sin ${PI3})<br>= (${fr('5', '2')}, ${fr('5√3', '2')}),<br>and (${fr('5', '2')})<sup>2</sup> + (${fr('5√3', '2')})<sup>2</sup><br>= ${fr('25', '4')} + ${fr('75', '4')} = 25, as required.`,
          `Notice the ordinates: ${PNQN} = ${fr('3√3', '5√3')} = ${fr('3', '5')} = ${BA}: the squash factor, visible in the numbers.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `The point ${P}(2, ${fr('3√3', '2')}) lies on the ellipse ${fr(X2, '16')}${NB}+${NB}${fr(Y2, '9')}${NB}=${NB}1. Find its eccentric angle ${th}, and find the angle ${ph} that <i>OP</i> makes with the positive ${x}-axis. Comment on the difference.`,
        steps: [
          `First confirm ${P} is on the ellipse (${Y2} = ${fr('27', '4')}):<br>${fr('4', '16')} + ${fr('27', '36')} = ${fr('1', '4')}${NB}+${NB}${fr('3', '4')}${NB}=${NB}1. ✓`,
          `Here ${a} = 4, ${b} = 3. Compare ${P} with ${PE}:<br>cos ${th} = ${fr('2', '4')} = ${HALF},<br><br>sin ${th} = ${fr('3√3', '2 · 3')} = ${fr('√3', '2')}.`,
          `Both are positive, so ${th} is in the first quadrant and<br>${th} = ${PI3} = 60°.`,
          `The true central angle satisfies<br>tan ${ph} = ${fr(y, x)} = ${fr('3√3', '2 · 2')} = ${fr('3√3', '4')} ≈ 1.299<br>⟹ ${ph} ≈ 52.41°.`,
          `So ${ph} ≠ ${th}, and the relation from the Key definitions and formulas part confirms exactly why:<br>tan ${ph} = ${BA} tan ${th} = ${fr('3', '4')} tan 60°<br>= ${fr('3√3', '4')}. ✓`,
          `<b>Concept link.</b> The eccentric angle is bigger than the central angle everywhere strictly inside the first quadrant (0${NB}<${NB}${th}${NB}<${NB}${PI2}) because the vertical squash by ${BA} pulls ${P} down towards the major axis while leaving its horizontal position untouched. Away from the four axis ends, the angle you can see on the ellipse is never the angle the parametrisation is using.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: `Find the coordinates of the point on the hyperbola ${fr(X2, '16')}${NB}−${NB}${fr(Y2, '9')}${NB}=${NB}1 whose parameter is ${th} = ${TWOPI3}, and state which branch it lies on.`,
        steps: [
          `<b>The trap: importing the ellipse’s parametric form into the hyperbola.</b> The seductive answer is to write ${PE} out of habit:<br>(4 cos ${TWOPI3}, 3 sin ${TWOPI3})<br>= (−2, ${fr('3√3', '2')}).`,
          `It looks fine, the arithmetic is fine, and it is completely wrong. Substitute it back, with (${fr('3√3', '2')})<sup>2</sup> = ${fr('27', '4')}:<br><br>${fr('(−2)<sup>2</sup>', '16')} − ${fr('27', '4 · 9')}<br><br>= ${fr('4', '16')} − ${fr('27', '36')}<br><br>= ${fr('1', '4')} − ${fr('3', '4')} = −${HALF} ≠ 1.`,
          `The point is not on the curve at all. An ellipse form on a hyperbola fails the equation at every ${th} except 0 and π (the vertices, where sin ${th} = 0), because cos<sup>2</sup> ${th} + sin<sup>2</sup> ${th} adds to 1 while the hyperbola needs a difference.`,
          `<b>The correct route.</b> The hyperbola’s parametric point is ${PH} with ${a} = 4, ${b} = 3:<br>sec ${TWOPI3} = ${fr('1', `cos(${TWOPI3})`)} = ${fr('1', `−${HALF}`)} = −2,<br><br>tan ${TWOPI3} = −√3.<br>${P} = (4 · (−2), 3 · (−√3))<br>= (−8, −3√3).`,
          `Verify:<br>${fr('64', '16')} − ${fr('27', '9')} = 4 − 3 = 1. ✓`,
          `Branch: cos ${TWOPI3} < 0, so ${x} = −8 < 0 and the point is on the <b>left branch</b>, consistent with Procedure C, since ${TWOPI3} lies in (${PI2},${NB}${TPI2}).`,
          `<b>Speed note.</b> Fix the pairing in memory as a slogan: ellipse adds, so cos and sin; hyperbola subtracts, so sec and tan. Then read the sign of cos ${th} once and the branch is free.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `If the chord joining the points with eccentric angles ${th1} and ${th2} on the ellipse ${ELL} passes through the focus (<i>ae</i>,${NB}0), prove that<br>${FOCAL}.<br>Hence, for the ellipse ${fr(X2, '4')}${NB}+${NB}${fr(Y2, '3')}${NB}=${NB}1, find the second end of the focal chord one of whose ends has eccentric angle ${PI3}, and the length of that chord.`,
        steps: [
          `<b>Proof.</b> The chord through the two parametric points is<br>${ECHORD}.`,
          `(That this is the chord is immediate: substituting ${x} = ${a} cos ${th1}, ${y} = ${b} sin ${th1} gives cos ${th1} cos ${SUM12} + sin ${th1} sin ${SUM12} = cos(${th1} − ${SUM12}) = cos ${DIF12}, and the same computation with ${th2} gives cos ${fr(`${th2} − ${th1}`, '2')}, which is equal because cosine is even.)`,
          `Now force the chord through ${S}(<i>ae</i>,${NB}0). Put ${x} = <i>ae</i>, ${y} = 0:<br>${e} cos ${SUM12} = cos ${DIF12}.`,
          `Write <i>A</i> = ${fr(th1, '2')} and <i>B</i> = ${fr(th2, '2')} and expand both sides:<br>${e}(cos <i>A</i> cos <i>B</i> − sin <i>A</i> sin <i>B</i>)<br>= cos <i>A</i> cos <i>B</i> + sin <i>A</i> sin <i>B</i>.`,
          `Collect the like products:<br>(${e} − 1) cos <i>A</i> cos <i>B</i> = (${e} + 1) sin <i>A</i> sin <i>B</i>.`,
          `Divide by (${e} + 1) cos <i>A</i> cos <i>B</i>, which is non-zero unless one end is the vertex (−${a},${NB}0) (the major axis, the one focal chord this form cannot express):<br>tan <i>A</i> tan <i>B</i> = ${fr(`${e} − 1`, `${e} + 1`)}, that is<br><br>${FOCAL}.${NB}■`,
          `<b>Application.</b> For ${fr(X2, '4')}${NB}+${NB}${fr(Y2, '3')}${NB}=${NB}1 we have ${a} = 2, ${B2} = 3, so ${C2} = ${A2} − ${B2} = 4 − 3 = 1, giving ${c} = 1 and<br>${e} = ${fr(c, a)} = ${HALF}, focus ${S}(1, 0).`,
          `With ${th1} = ${PI3}:<br>tan ${PI6} · tan ${fr(th2, '2')} = ${fr(`${e} − 1`, `${e} + 1`)} with ${e} = ${HALF}; doubling top and bottom,<br><br>${fr('1 − 2', '1 + 2')} = −${fr('1', '3')}.`,
          `Since tan ${PI6} = ${fr('1', '√3')},<br>tan ${fr(th2, '2')} = −${fr('√3', '3')} = −${fr('1', '√3')}<br>⟹ ${fr(th2, '2')} = −${PI6}<br>⟹ ${th2} = −${PI3} (equivalently ${fr('5π', '3')}).`,
          `The two ends are therefore<br>${P} = (2 cos ${PI3}, √3 sin ${PI3}) = (1, ${fr('3', '2')}),<br><br>${Q} = (1, −${fr('3', '2')}),<br>and the chord length is |${fr('3', '2')} − (−${fr('3', '2')})| = 3.`,
          `<b>Independent check.</b> Both ends have ${x} = 1 = ${c}, so this focal chord is vertical through the focus: it is the <b>latus rectum</b>. Its length should be ${fr(`2${B2}`, a)} = ${fr('2 · 3', '2')} = 3, which is exactly what the parametric route produced.`,
          `<b>Why it is “Advanced”.</b> The insight is that a focal chord is a condition on <b>two eccentric angles at once</b>, and that the half-angle tangent is the right thing to combine because the chord equation is built from ${fr(`${th1} ± ${th2}`, '2')}. Once you see that, a two-point geometry problem becomes a one-line trigonometric identity, and the latus rectum falls out as a special case you can check for free.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE] Write the parametric coordinates of the circle (${x} − 2)<sup>2</sup> + (${y} + 3)<sup>2</sup> = 25, and find the point corresponding to ${th} = ${PI2}.`,
            a: `(2 + 5 cos ${th}, −3 + 5 sin ${th}); at ${th} = ${PI2} the point is (2, 2).`,
          },
          {
            q: `[CBSE] For the ellipse ${fr(X2, '36')}${NB}+${NB}${fr(Y2, '16')}${NB}=${NB}1, write the equation of the auxiliary circle and find the point whose eccentric angle is ${PI4}.`,
            a: `Auxiliary circle ${X2} + ${Y2} = 36; the point is (3√2, 2√2).`,
          },
          {
            q: `[JEE Main] Find the eccentric angle of the point (−3, 2√3) on the ellipse ${fr(X2, '36')}${NB}+${NB}${fr(Y2, '16')}${NB}=${NB}1.`,
            a: `cos ${th} = −${HALF}, sin ${th} = ${fr('√3', '2')}, so ${th} = ${TWOPI3}.`,
          },
          {
            q: `[JEE Main] Find the coordinates of the point on the hyperbola ${fr(X2, '9')}${NB}−${NB}${fr(Y2, '16')}${NB}=${NB}1 whose parameter is ${th} = ${PI4}, and state its branch.`,
            a: `(3√2, 4); since cos ${PI4} > 0 it is on the right branch.`,
          },
          {
            q: '[JEE Main] Write the parametric point of the rectangular hyperbola <i>xy</i> = 16 and evaluate it at <i>t</i> = 2.',
            a: `${C2} = 16 ⇒ ${c} = 4, so the point is (4${t}, ${fr('4', t)}); at ${t} = 2 it is (8, 2).`,
          },
          {
            q: `[JEE Main] ${P} is the point on ${fr(X2, '25')}${NB}+${NB}${fr(Y2, '9')}${NB}=${NB}1 with eccentric angle ${PI6} and ${Q} is its corresponding point on the auxiliary circle. Find the length <i>PQ</i>.`,
            a: `<i>PQ</i> = (${a} − ${b})|sin ${th}| = (5 − 3) · ${HALF} = 1.`,
          },
          {
            q: `[JEE Advanced] Find the equation of the chord of the ellipse ${fr(X2, '16')}${NB}+${NB}${fr(Y2, '9')}${NB}=${NB}1 joining the points whose eccentric angles are ${PI3} and ${TWOPI3}.`,
            a: `${fr(x, '4')} cos ${PI2} + ${fr(y, '3')} sin ${PI2} = cos(−${PI6}), i.e. ${fr(y, '3')} = ${fr('√3', '2')}, so the chord is ${y} = ${fr('3√3', '2')}.`,
          },
          {
            q: `[JEE Advanced] Find the eccentric angles of the two endpoints of the latus rectum of ${fr(X2, '25')}${NB}+${NB}${fr(Y2, '9')}${NB}=${NB}1 that lies in the half-plane ${x} > 0.`,
            a: `${c} = √(25 − 9) = 4 and the latus-rectum ends are (4, ±${fr('9', '5')}); then cos ${th} = ${fr('4', '5')} and sin ${th} = ±${fr('3', '5')}, giving ${th} = tan<sup>−1</sup> ${fr('3', '4')} and ${th} = 2π − tan<sup>−1</sup> ${fr('3', '4')}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `A point on the hyperbola ${HYP} may be written as`,
        opts: [
          {
            label: PE,
            nudge: '<b>(A)</b> is the ellipse form, imported by habit: it makes the two squared terms add, which the hyperbola forbids.',
          },
          { label: PH, nudge: null },
          {
            label: `(${a} tan ${th}, ${b} sec ${th})`,
            nudge: `<b>(C)</b> swaps the roles and produces tan<sup>2</sup> ${th} − sec<sup>2</sup> ${th} = −1, so the point satisfies ${fr(X2, A2)}${NB}−${NB}${fr(Y2, B2)}${NB}=${NB}−1, which is the <b>conjugate</b> hyperbola, not this one.`,
          },
          { label: PAR, nudge: '<b>(D)</b> is the parabola’s parametric point and belongs to a curve with only one squared term.' },
        ],
        correct: 1,
        solution: `The hyperbola needs sec<sup>2</sup> ${th} − tan<sup>2</sup> ${th} = 1 to match its minus sign.`,
      },
      {
        t: 'mcq',
        q: `The auxiliary circle of the ellipse ${fr(X2, '25')}${NB}+${NB}${fr(Y2, '9')}${NB}=${NB}1 is`,
        opts: [
          {
            label: `${X2} + ${Y2} = 9`,
            nudge: `<b>(A)</b> uses ${b} instead of ${a}: that circle is inscribed inside the ellipse and touches it at the minor-axis ends, which is a different object entirely.`,
          },
          { label: `${X2} + ${Y2} = 25`, nudge: null },
          {
            label: `${X2} + ${Y2} = 34`,
            nudge: `<b>(C)</b> is ${A2} + ${B2}, the radius-squared of the <b>director</b> circle you will meet in Tangents to a Conic; the two are often confused because both are “some circle attached to the ellipse”.`,
          },
          {
            label: `${X2} + ${Y2} = 16`,
            nudge: `<b>(D)</b> is ${C2} = ${A2} − ${B2} = 16, the square of the focal distance, which gives the circle through the two foci, not the auxiliary circle.`,
          },
        ],
        correct: 1,
        solution: `The auxiliary circle is drawn on the <b>major</b> axis as diameter, so its radius is ${a} = 5.`,
      },
      {
        t: 'mcq',
        q: `The eccentric angle of the point (2√2, √2) on the ellipse ${fr(X2, '16')}${NB}+${NB}${fr(Y2, '4')}${NB}=${NB}1 is`,
        opts: [
          {
            label: PI6,
            nudge: `<b>(A)</b> and <b>(C)</b> are guessed angles: neither ${PI6} nor ${PI3} satisfies cos ${th} = ${fr(x, a)} = ${fr('1', '√2')} and sin ${th} = ${fr(y, b)} = ${fr('1', '√2')}.`,
          },
          { label: PI4, nudge: null },
          {
            label: PI3,
            nudge: `<b>(A)</b> and <b>(C)</b> are guessed angles: neither ${PI6} nor ${PI3} satisfies cos ${th} = ${fr(x, a)} = ${fr('1', '√2')} and sin ${th} = ${fr(y, b)} = ${fr('1', '√2')}.`,
          },
          {
            label: `tan<sup>−1</sup> ${HALF}`,
            nudge: `<b>(D)</b> is the single most instructive wrong answer: it is tan<sup>−1</sup> ${fr(y, x)} = tan<sup>−1</sup> ${fr('√2', '2√2')} = tan<sup>−1</sup> ${HALF}, the <b>true central angle</b> ${ph} of ${P}, produced by the belief that the eccentric angle is the angle of ${P} itself.`,
          },
        ],
        correct: 1,
        solution: `Here ${a} = 4, ${b} = 2, so cos ${th} = ${fr('2√2', '4')} = ${fr('1', '√2')} and sin ${th} = ${fr('√2', '2')} = ${fr('1', '√2')}, giving ${th} = ${PI4}.`,
      },
      {
        t: 'mcq',
        q: `For the parametric point ${PH} of a hyperbola, the excluded values of ${th} in [0, 2π) are`,
        opts: [
          {
            label: '0 and π',
            nudge: `<b>(A)</b> picks the angles where sin ${th} = 0, which is the exclusion condition for csc and cot, not sec and tan.`,
          },
          {
            label: `${PI4} and ${fr('3π', '4')}`,
            nudge: `<b>(B)</b> picks the angles where |tan ${th}| = 1, a value that is perfectly finite and gives the honest points (±${a}√2,${NB}±${b}).`,
          },
          { label: `${PI2} and ${TPI2}`, nudge: null },
          {
            label: 'none: all values are allowed',
            nudge: '<b>(D)</b> forgets that a parametrisation inherits the domain of the functions it is built from.',
          },
        ],
        correct: 2,
        solution: `At those two angles cos ${th} = 0, so both sec ${th} and tan ${th} are undefined.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Treating the eccentric angle as the angle of ${P}.</b> The eccentric angle belongs to ${Q} on the auxiliary circle. <b>Correction:</b> always compute it from cos ${th} = ${fr(x1, a)} and sin ${th} = ${fr(y1, b)}, never from tan<sup>−1</sup> ${fr(y1, x1)}; the two agree only at the four axis ends.`,
          `<b>Using ${PE} on a hyperbola.</b> It produces a point that is not on the curve (except at the vertices, ${th} = 0 and π). <b>Correction:</b> the sign in the equation dictates the identity: plus sign takes cos, sin; minus sign takes sec, tan.`,
          `<b>Dividing by the wrong semi-axis.</b> Writing sin ${th} = ${fr(y1, a)} is the commonest single slip in this unit. <b>Correction:</b> each coordinate is divided by the semi-axis measured along its own direction: ${x} by ${a}, ${y} by ${b}.`,
          `<b>Calling ${X2} + ${Y2} = ${A2} + ${B2} the auxiliary circle.</b> That is the director circle of the ellipse. <b>Correction:</b> auxiliary means “on the major axis as diameter”, so the radius is ${a} and the equation is ${AUX}, for the hyperbola too, with ${a} the semi-transverse axis.`,
          `<b>Losing the second branch of a hyperbola.</b> Solving ${y} = ±${BA}√(${X2} − ${A2}) forces you to track signs by hand. <b>Correction:</b> the single parametric point covers both branches; just read the sign of cos ${th}.`,
          `<b>Quoting a bare ${th} from cos ${th} alone.</b> cos ${th} = ${HALF} has two solutions in [0, 2π). <b>Correction:</b> use both cos ${th} and sin ${th} to fix the quadrant before writing an answer.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip.</b> The moment a question contains the words “a variable point on the ellipse”, stop and write ${PE}. Two unknowns become one, the constraint disappears, and the whole problem becomes trigonometry. The same reflex handles ${PAR} on the parabola and ${PH} on the hyperbola.`,
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip.</b> Memorise one bridging line, ${TANPHI}, and every “eccentric angle versus actual angle” trap in JEE Main becomes a five-second substitution.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Circle',
            note: `${X2} + ${Y2} = ${R2} ⇒ (${r} cos ${th}, ${r} sin ${th}); shifted: (${h} + ${r} cos ${th}, ${k} + ${r} sin ${th}). ${th} here really is the central angle.`,
          },
          { f: 'Parabola', note: `${Y2} = 4<i>ax</i> ⇒ ${PAR}, ${t} ∈ ℝ; focal chord ⇔ ${t1}${t2} = −1.` },
          { f: 'Ellipse', note: `${ELL} ⇒ ${PE}; ${th} is the <b>eccentric angle</b>.` },
          {
            f: 'Hyperbola',
            note: `${HYP} ⇒ ${PH}; exclude ${th} = ${PI2}, ${TPI2}; cos ${th} > 0 right branch, cos ${th} < 0 left branch.`,
          },
          { f: 'Rectangular hyperbola', note: `<i>xy</i> = ${C2} ⇒ (<i>ct</i>, ${fr(c, t)}), ${neq0(t)}.` },
          { f: 'Auxiliary circle', note: `${AUX} for both the ellipse and the hyperbola, drawn on the major / transverse axis as diameter.` },
          { f: 'Squash relations', note: `${PNQN} = ${BA}; <i>PQ</i> = (${a} − ${b})|sin ${th}|; ${TANPHI}.` },
          { f: 'Ellipse chord', note: `${ECHORD}.` },
          { f: 'Ellipse focal chord', note: `${FOCAL}.` },
        ],
        aids: [
          '“Plus takes cos-sin, minus takes sec-tan.”',
          `“Auxiliary means major axis as diameter: radius ${a}, nothing else.”`,
          '“The eccentric angle lives on the circle, not on the ellipse.”',
        ],
      },
    ],
  },

  // ──────────────── Topic 07 · pp. 948–961 ────────────────
  {
    n: '07',
    title: 'Tangents to a Conic',
    kalam: 'A tangent is a line that touches a curve without crossing it, but that phrasing is a picture, not a method.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `CBSE Boards ask for the tangent at a given point on a circle or a parabola at 2–4 marks ${ESTIMATE}, usually fused with finding the centre, radius or focus first. JEE Main names the condition of tangency explicitly in its syllabus and asks it almost every session ${ESTIMATE}: “for what value of ${c} does the line touch the conic”, “find the tangent of slope ${m}”, “find the point of contact”. JEE Advanced pushes into the chord of contact, the pair of tangents ${SS1T}, and the director circle as the locus of points from which two perpendicular tangents can be drawn. This unit is the single highest-yield block in Chapter 10 ${ESTIMATE}.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'A tangent is a line that touches a curve without crossing it, but that phrasing is a picture, not a method. The method comes from a sharper idea.',
      },
      {
        t: 'p',
        html: 'Think about it this way… imagine a train on a straight track running past a circular lake, and ask how many points of track are wet. Far from the lake: none. Push the track in until it cuts the shore at two points, entering the water and leaving it. Now pull it back out: those two crossing points slide towards each other. <b>At exactly one position they merge into a single point (the line meets the curve in two coincident points), and that is what a tangent is.</b> Pull it out any further and the track is dry again.',
      },
      {
        t: 'p',
        html: 'That merging is not a metaphor. Substitute a line into a conic’s equation and you get a quadratic (unless the line is parallel to a parabola’s axis or to a hyperbola’s asymptote: then the equation is linear and the line crosses the curve once); the two roots are the two intersection points. The line is a tangent precisely when that quadratic has <b>equal roots</b>, that is when its discriminant is zero. So the whole of this unit reduces to one algebraic move you already know from Chapter 4: set the discriminant to zero. Everything else (the slope form, the condition of tangency, the point of contact) is that one move, done once for each conic and then remembered.',
      },
      {
        t: 'p',
        html: `There is a second, purely mechanical result that saves enormous time, and it is worth stating before any formula. For every conic written with all terms on the left as ${S0}, the tangent at a point ${P11} <b>on</b> the curve is obtained by a substitution rule so regular it looks like a joke:<br>${X2} → ${XX1},<br>${Y2} → ${YY1},<br><i>xy</i> → ${HALF}(<i>xy</i><sub>1</sub> + ${x1}${y}),<br>${x} → ${HALF}(${x} + ${x1}),<br>${y} → ${HALF}(${y} + ${y1}),<br>constant → same.`,
      },
      {
        t: 'p',
        html: `The result is called ${T}, and the tangent is ${T0}. One rule, four conics, no memorisation of four separate formulas. It works because ${T0} is exactly the equation of the line through ${P11} with the slope that implicit differentiation would give.`,
      },
      {
        t: 'p',
        html: `The third idea is the <b>chord of contact</b>. From a point outside a circle, a parabola or an ellipse you can draw two tangents (the hyperbola’s count is in the table of tangents from a point below); they touch at two points, and the line joining those two points is the chord of contact. Its equation is, remarkably, also ${T0}, with ${P11} now the <b>external</b> point instead of a point on the curve. The same expression does two different jobs depending on where the point sits, which is why ${T} is worth learning as an object in its own right.`,
      },
      {
        t: 'p',
        html: `Limiting conditions and assumptions.<br>• The slope form ${MXC} can never represent a <b>vertical</b> line. Every slope-form result therefore silently misses tangents parallel to the ${y}-axis: for example ${x} = 0, the tangent to ${Y2} = 4<i>ax</i> at its vertex. When a question asks for all tangents from a point, check the vertical line separately.<br>• The parabola’s slope form ${SLOPE_P} requires ${neq0(m)}: there is no tangent of slope zero to ${Y2} = 4<i>ax</i>, since a horizontal line always cuts it exactly once.<br>• The hyperbola’s slope form ${SLOPE_H} needs ${A2M2} > ${B2}, i.e. |${m}| > ${BA}. Lines flatter than an asymptote, or parallel to one, can never touch the curve.<br>• The director circle ${DIR_H} of a hyperbola is real only when ${a} > ${b}. If ${a} ≤ ${b} no point of the plane sees the hyperbola under a right angle (at ${a} = ${b} the circle shrinks to the centre, where only the asymptotes, which are not tangents, meet at a right angle).<br>• ${T0} is a <b>line</b> only for these second-degree curves; the substitution rule is not a general-purpose calculus substitute.`,
      },

      { t: 'part', title: 'Key definitions and formulas' },
      {
        t: 'p',
        html: '<b>Definition (tangent).</b> A tangent to a conic is a line meeting it in two coincident points. Equivalently, substituting the line into the conic gives a quadratic with zero discriminant.',
      },
      {
        t: 'p',
        html: `<b>Definition (condition of tangency).</b> The relation between ${c}, ${m} and the conic’s constants that makes ${MXC} a tangent.`,
      },
      {
        t: 'p',
        html: `<b>Definition (chord of contact).</b> For an external point ${P}${P11}, the line joining the two points of contact of the tangents drawn from ${P}.`,
      },
      {
        t: 'p',
        html: `<b>The universal ${T} rule.</b> Write the conic as ${S0} with everything on the left. Form ${T} by the substitutions listed in the Concept intuition part. Then:`,
      },
      {
        t: 'table',
        title: null,
        head: [`${P11} lies…`, `meaning of ${T0}`],
        rows: [
          ['on the conic', `the tangent at ${P11}`],
          ['outside the conic', `the chord of contact of the two tangents from ${P11}`],
        ],
      },
      { t: 'p', html: '<b>Tangents to the circle.</b>' },
      {
        t: 'table',
        title: null,
        head: ['Item', `${X2} + ${Y2} = ${R2}`, `${S}${NB}≡${NB}${X2}${NB}+${NB}${Y2}${NB}+${NB}2<i>gx</i> +${NB}2<i>fy</i>${NB}+${NB}${c}${NB}=${NB}0`],
        rows: [
          [`Tangent at ${P11}`, TCIRC, TGEN],
          ['Tangent at parametric point', `${x} cos ${th} + ${y} sin ${th} = ${r}`, `(${x} − ${h}) cos ${th} + (${y} − ${k}) sin ${th} = ${r} about centre (${h},${NB}${k})`],
          ['Slope form', SLOPE_C, 'shift the centre to the origin first'],
          [`Condition of tangency for ${MXC}`, COND_C, `perpendicular distance from (−<i>g</i>,${NB}−<i>f</i>) = radius`],
          ['Point of contact (slope form)', `(∓\u2009\u2060${fr('<i>rm</i>', `√(1 + ${M2})`)}, ±\u2009\u2060${fr(r, `√(1 + ${M2})`)})`, ''],
          [`Chord of contact from ${P11}`, TCIRC, T0],
          ['Director circle', `${X2} + ${Y2} = 2${R2}`, `centre same, radius ${r}√2`],
        ],
      },
      {
        t: 'p',
        html: 'The single most useful circle fact is geometric rather than algebraic: <b>a line touches a circle if and only if the perpendicular distance from the centre to the line equals the radius.</b> For circles, always reach for that before reaching for a discriminant.',
      },
      { t: 'p', html: `<b>Tangents to the parabola ${Y2} = 4<i>ax</i>.</b>` },
      {
        t: 'table',
        title: null,
        head: ['Item', 'Result', 'Conditions'],
        rows: [
          [`Tangent at ${P11}`, TPAR, `${P11} on the curve`],
          [`Tangent at (<i>at</i><sup>2</sup>,${NB}2<i>at</i>)`, `<i>ty</i> = ${x} + <i>at</i><sup>2</sup>`, `slope = ${fr('1', t)}; ${t} = 0 gives ${x} = 0`],
          ['Slope form', SLOPE_P, neq0(m)],
          ['Condition of tangency', `${c} = ${fr(a, m)}, i.e. <i>mc</i> = ${a}`, `for ${MXC}`],
          ['Point of contact (slope form)', PCP, neq0(m)],
          [`Chord of contact from ${P11}`, TPAR, `${Y1S} − 4<i>a</i>${x1} > 0`],
          [`Tangents at ${t1}, ${t2} meet at`, T12, `${t1}${NB}≠${NB}${t2}`],
          ['Perpendicular tangents meet on', `the directrix ${x} = −${a}`, 'the parabola’s “director circle”'],
        ],
      },
      { t: 'p', html: `<b>Tangents to the ellipse ${ELL}.</b>` },
      {
        t: 'table',
        title: null,
        head: ['Item', 'Result'],
        rows: [
          [`Tangent at ${P11}`, TE],
          [`Tangent at ${PE}`, TPE],
          ['Slope form', SLOPE_E],
          [`Condition of tangency for ${MXC}`, COND_E],
          [`Point of contact for ${MXC}`, PCE],
          [`Chord of contact from ${P11}`, TE],
          ['Director circle', DIR_E],
        ],
      },
      { t: 'p', html: `<b>Tangents to the hyperbola ${HYP}.</b>` },
      {
        t: 'table',
        title: null,
        head: ['Item', 'Result'],
        rows: [
          [`Tangent at ${P11}`, TH],
          [`Tangent at ${PH}`, TPH],
          ['Slope form', `${SLOPE_H}, valid for ${A2M2} > ${B2}`],
          [`Condition of tangency for ${MXC}`, COND_H],
          [`Point of contact for ${MXC}`, PCH],
          [`Chord of contact from ${P11}`, TH],
          ['Director circle', `${DIR_H} (real only if ${a} > ${b})`],
          [`Tangent to <i>xy</i> = ${C2} at (<i>ct</i>, ${fr(c, t)})`, `${x} + ${t}<sup>2</sup>${y} = 2<i>ct</i>`],
        ],
      },
      {
        t: 'formula',
        kicker: 'Condition of tangency',
        main: `circle ${X2} + ${Y2} = ${R2}: ${COND_C},<br>parabola ${Y2} = 4<i>ax</i>: ${c} = ${fr(a, m)},<br>ellipse: ${COND_E},<br>hyperbola: ${COND_H} (|${m}| > ${BA})`,
        legend: [`${m}, ${c} = the slope and intercept of ${MXC} (${neq0(m)} for the parabola)`, `${a}, ${b} = the semi-axes (for the parabola, ${a} = the focal length)`, `${r} = the radius of the circle`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Pair of tangents from an external point.</b> For any conic ${S0}, with ${S1} the value of ${S} at ${P11} and ${T} as above, the two tangents from ${P11} together form the pair`,
      },
      {
        t: 'formula',
        kicker: 'Pair of tangents from an external point',
        main: `${SS1T}.`,
        legend: [`${S} = the conic’s left side (${S0})`, `${S1} = the value of ${S} at ${P11}`, `${T} = the result of the ${T} substitutions`],
        note: null,
      },
      { t: 'p', html: '<b>Number of tangents from a point.</b>' },
      {
        t: 'table',
        title: null,
        head: ['Conic', `${S1} used`, 'Two tangents', 'One tangent', 'No tangent'],
        rows: [
          ['Circle', `${X1S} + ${Y1S} + 2<i>g</i>${x1} + 2<i>f</i>${y1} + ${c}`, `${S1} > 0`, `${S1} = 0`, `${S1} < 0`],
          ['Parabola', `${Y1S} − 4<i>a</i>${x1}`, `${S1} > 0`, `${S1} = 0`, `${S1} < 0`],
          ['Ellipse', `${fr(X1S, A2)} + ${fr(Y1S, B2)} − 1`, `${S1} > 0`, `${S1} = 0`, `${S1} < 0`],
          ['Hyperbola', `${fr(X1S, A2)} − ${fr(Y1S, B2)} − 1`, `${S1} < 0`, `${S1} = 0`, `${S1} > 0`],
        ],
      },
      {
        t: 'p',
        html: `The hyperbola row is genuinely reversed, and that is not a misprint: ${S1} > 0 places the point <b>inside a branch</b>, on the same side as a focus, and a point cradled inside a branch can see no tangent at all. ${S1} < 0 places it in the region between the branches, from which two tangents can be drawn. The exceptions are the points on an asymptote: from such a point only one tangent can be drawn (the second line degenerates into the asymptote itself), and from the centre, which lies on both, none.`,
      },

      { t: 'part', title: 'CBSE board derivation' },
      { t: 'p', html: `<b>Derivation: the tangent to ${X2} + ${Y2} = ${R2} at ${P11}</b>` },
      {
        t: 'p',
        html: `1. The radius to the point of contact is <i>O</i>(0, 0) to ${P}${P11}, with slope ${fr(y1, x1)}. <b>Reason:</b> the tangent to a circle is perpendicular to the radius at the point of contact, the one theorem from Class 10 circle geometry that survives into coordinate geometry unchanged.`,
      },
      {
        t: 'p',
        html: `2. The tangent is perpendicular to that radius, so its slope is −${fr(x1, y1)}. <b>Reason:</b> perpendicular slopes multiply to −1.`,
      },
      {
        t: 'p',
        html: `3. Using the point-slope form through ${P}:<br>${y} − ${y1} = −${fr(x1, y1)}(${x} − ${x1})<br>⟹ ${YY1} − ${Y1S} = −${XX1} + ${X1S}<br>⟹ ${XX1} + ${YY1} = ${X1S} + ${Y1S}.`,
      },
      {
        t: 'p',
        html: `4. But ${P} lies on the circle, so ${X1S} + ${Y1S} = ${R2}. Therefore<br>${TCIRC}.<br><b>Reason:</b> this substitution is the step that converts a general chord-like line into the tangent, and it is why ${T0} carries the constant ${R2} rather than ${X1S} + ${Y1S}.`,
      },
      { t: 'p', html: '<b>Derivation: the condition of tangency for the parabola, and the slope form</b>' },
      {
        t: 'p',
        html: `1. Let the line be ${MXC} and the parabola ${Y2} = 4<i>ax</i>. Substitute ${x} = ${fr(`${y} − ${c}`, m)} (taking ${neq0(m)}) into the parabola:<br>${Y2} = 4${a} · ${fr(`${y} − ${c}`, m)}<br>⟹ <i>my</i><sup>2</sup> − 4<i>ay</i> + 4<i>ac</i> = 0.<br><b>Reason:</b> eliminating ${x} gives a quadratic in ${y} whose roots are the ordinates of the two intersection points.`,
      },
      {
        t: 'p',
        html: `2. Tangency means the two intersection points coincide, so the discriminant vanishes:<br>(−4${a})<sup>2</sup> − 4(${m})(4<i>ac</i>) = 0<br>⟹ 16${A2} − 16<i>amc</i> = 0<br>⟹ ${a} = <i>mc</i>.<br><b>Reason:</b> equal roots is the algebraic translation of “the line touches”.`,
      },
      {
        t: 'p',
        html: `3. Hence the <b>condition of tangency</b> is ${c} = ${fr(a, m)}, and the tangent of slope ${m} is<br>${SLOPE_P}, ${neq0(m)}.`,
      },
      {
        t: 'p',
        html: `4. The point of contact is the repeated root: from <i>my</i><sup>2</sup> − 4<i>ay</i> + 4<i>ac</i> = 0, ${y} = ${fr(`4${a}`, `2${m}`)} = ${fr(`2${a}`, m)}, and then ${x} = ${fr(Y2, `4${a}`)} = ${fr(a, M2)}. So the point of contact is ${PCP}. <b>Reason:</b> a repeated root of <i>Ay</i><sup>2</sup> + <i>By</i> + <i>C</i> = 0 is −${fr('<i>B</i>', '2<i>A</i>')}.`,
      },
      {
        t: 'p',
        html: `5. Why ${m} = 0 is excluded: a horizontal line ${y} = ${c} meets ${Y2} = 4<i>ax</i> at exactly one point, (${fr(C2, `4${a}`)}, ${c}), but crosses the curve there rather than touching it: a single intersection is not the same as two coincident ones.`,
      },
      {
        t: 'p',
        html: `The identical three-line computation on ${ELL} gives ${COND_E}, and on ${HYP} gives ${COND_H}. The only thing that changes is the sign that the ellipse and hyperbola already differ by, the pattern the chapter has flagged since <b>The Hyperbola</b>: ellipse plus, hyperbola minus in the tangency condition, exactly opposite to ${C2} = ${A2}${NB}∓${NB}${B2}.`,
      },
      { t: 'p', html: '<b>Derivation: the director circle of the ellipse</b>' },
      { t: 'p', html: `1. Let ${P}(${h},${NB}${k}) be a point from which two perpendicular tangents can be drawn to ${ELL}.` },
      {
        t: 'p',
        html: `2. Any line through ${P} with slope ${m} is ${y} − ${k} = ${m}(${x} − ${h}), i.e. ${y} = <i>mx</i> + (${k} − <i>mh</i>), so ${c} = ${k} − <i>mh</i>. <b>Reason:</b> writing the line through ${P} in slope form lets the tangency condition become an equation in ${m} alone.`,
      },
      {
        t: 'p',
        html: `3. Impose tangency, ${COND_E}:<br>(${k} − <i>mh</i>)<sup>2</sup> = ${A2M2} + ${B2}<br>⟹ ${QUAD_M}.`,
      },
      {
        t: 'p',
        html: `4. This quadratic in ${m} has the slopes of the two tangents as its roots. Perpendicularity means ${m1}${m2} = −1:<br>${KB} = −1<br>⟹ ${K2} − ${B2} = ${A2} − ${H2}<br>⟹ ${H2} + ${K2} = ${A2} + ${B2}.<br><b>Reason:</b> the product of the roots of <i>Am</i><sup>2</sup> + <i>Bm</i> + <i>C</i> = 0 is ${fr('<i>C</i>', '<i>A</i>')} (this needs ${H2} ≠ ${A2}; at ${h} = ±${a} the tangents are ${x} = ±${a} and ${y} = ±${b}, and the points (±${a},${NB}±${b}) lie on the same circle).`,
      },
      {
        t: 'p',
        html: `5. Replacing (${h},${NB}${k}) by (${x},${NB}${y}), the locus is the <b>director circle</b><br>${DIR_E}.<br>Running the same argument with the hyperbola’s condition ${COND_H} yields ${DIR_H}, and with the parabola’s ${c} = ${fr(a, m)} yields the directrix ${x} = −${a}.`,
      },
      {
        t: 'formula',
        kicker: 'Director circle (where perpendicular tangents meet)',
        main: `ellipse: ${DIR_E},<br>circle: ${X2} + ${Y2} = 2${R2},<br>hyperbola: ${DIR_H} (${a} > ${b}),<br>parabola: the directrix ${x} = −${a}`,
        legend: [`${a}, ${b} = the semi-axes (for the parabola, ${a} = the focal length)`, `${r} = the radius of the circle`],
        note: null,
      },
      { t: 'fig', id: 'm11-10-fig-10.8' },
      {
        t: 'proc',
        title: 'Procedure A: find the tangent at a given point',
        steps: [
          `Verify the point lies on the conic by substitution. <b>Why:</b> ${T0} is the tangent only for a point on the curve; for any other point it is a chord of contact or a polar line, and you would be answering a different question.`,
          `Write the conic as ${S0} and apply the ${T} substitutions. <b>Why:</b> it is faster and less error-prone than differentiating, and it handles the general circle’s linear terms correctly.`,
          'Clear fractions and present the tangent in the form <i>Ax</i> + <i>By</i> + <i>C</i> = 0. <b>Why:</b> examiners’ keys are in integer form.',
          'Check by substituting the point of contact back into your tangent. <b>Why:</b> a tangent must pass through its own point of contact: a free, ten-second guarantee.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: find the tangent of a given slope, or test a given line',
        steps: [
          `Identify ${a}, ${b} (or ${r}) from the standard form. <b>Why:</b> the tangency conditions are written in those symbols and nothing else.`,
          `Write down the condition of tangency for that conic: ${COND_C}, ${c} = ${fr(a, m)}, ${COND_E}, or ${COND_H}.`,
          `If the slope is given, solve for ${c}: expect <b>two</b> answers for the circle and the ellipse (a tangent on each side), two for the hyperbola only when |${m}| > ${BA} (none otherwise), and <b>one</b> for the parabola. <b>Why:</b> the parabola’s condition is linear in ${c}, the others are quadratic.`,
          `If the line is given, substitute its ${m} and ${c} and check whether the condition holds. <b>Why:</b> this is a one-line yes/no answer, far quicker than solving simultaneously.`,
          'Read the point of contact from the table, or recover it as the repeated root. <b>Why:</b> many questions award the marks for the point of contact, not the line.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C: handle tangents from an external point',
        steps: [
          `Compute ${S1} and decide how many tangents exist, using the table in the Key definitions and formulas part. <b>Why:</b> writing two tangents from an interior point is a guaranteed zero.`,
          `For the chord of contact, write ${T0} with the external point’s coordinates. <b>Why:</b> one substitution replaces solving for both points of contact.`,
          `For the tangents themselves, put ${y} − ${y1} = ${m}(${x} − ${x1}) into the tangency condition and solve the resulting quadratic in ${m}. <b>Why:</b> this also delivers ${m1} + ${m2} and ${m1}${m2} directly, which is what angle and perpendicularity questions actually need.`,
          `Before solving that quadratic, check whether the question only wants a symmetric function of the slopes. <b>Why:</b> if it asks for the angle between the tangents or whether they are perpendicular, Vieta’s relations answer it without ever finding ${m1} and ${m2}.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `(a) Find the equation of the tangent to the circle ${X2} + ${Y2} − 4${x} + 6${y} − 12 = 0 at the point (5, 1).<br>(b) Find the equation of the tangent to the parabola ${Y2} = 12${x} at the point (3, 6).`,
        steps: [
          '<b>(a)</b> First check the point lies on the circle:<br>25 + 1 − 20 + 6 − 12 = 0. ✓',
          `Comparing with ${GEN} gives <i>g</i> = −2, <i>f</i> = 3, ${c} = −12. The tangent is ${T0}:<br>${TGEN}<br>5${x} + ${y} − 2(${x} + 5) + 3(${y} + 1) − 12 = 0<br>5${x} + ${y} − 2${x} − 10 + 3${y} + 3 − 12 = 0<br>3${x} + 4${y} − 19 = 0.`,
          `Check: at (5, 1), 15 + 4 − 19 = 0. Independent check by the perpendicular-distance test: the centre is (−<i>g</i>,${NB}−<i>f</i>) = (2, −3) and the radius is √(<i>g</i><sup>2</sup> + <i>f</i><sup>2</sup> − ${c}) = √(4 + 9 + 12) = 5:<br>distance = ${fr('|3(2) + 4(−3) − 19|', '√(3<sup>2</sup> + 4<sup>2</sup>)')}<br><br>= ${fr('|6 − 12 − 19|', '5')} = ${fr('25', '5')} = 5 = radius. ✓`,
          `<b>(b)</b> Check the point: 6<sup>2</sup> = 36 and 12 × 3 = 36. Comparing ${Y2} = 12${x} with ${Y2} = 4<i>ax</i> gives 4${a} = 12, so ${a} = 3. The tangent at ${P11} is ${TPAR}:<br>6${y} = 6(${x} + 3) ⟹ ${y} = ${x} + 3.`,
          `Check: the point (3, 6) gives 6 = 3 + 3. The slope is 1, matching ${fr('1', t)} with ${t} = ${fr(y1, `2${a}`)} = ${fr('6', '6')} = 1.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the values of ${c} for which the line ${y} = 2${x} + ${c} touches the hyperbola ${fr(X2, '9')}${NB}−${NB}${fr(Y2, '4')}${NB}=${NB}1, and find the corresponding points of contact.`,
        steps: [
          `Here ${A2} = 9, ${B2} = 4, ${m} = 2. The condition of tangency for a hyperbola is<br>${C2} = ${A2M2} − ${B2} = 9(4) − 4 = 32<br>⟹ ${c} = ±4√2.`,
          `(The condition ${A2M2} > ${B2} holds, since 36 > 4; equivalently |${m}| = 2 > ${BA} = ${fr('2', '3')}, so the line is steeper than the asymptotes and a tangent genuinely exists.)`,
          `The point of contact for ${MXC} on a hyperbola is<br>${PCH}<br><br>= (−${fr('18', c)}, −${fr('4', c)}).`,
          `For ${c} = 4√2:<br>(−${fr('18', '4√2')}, −${fr('4', '4√2')})<br><br>= (−${fr('9√2', '4')}, −${fr('√2', '2')}).`,
          `For ${c} = −4√2, by symmetry:<br>(${fr('9√2', '4')}, ${fr('√2', '2')}).`,
          `Verify the first one on the curve:<br>${fr('1', '9')} · ${fr('162', '16')} − ${fr('1', '4')} · ${fr('2', '4')}<br><br>= ${fr('162', '144')} − ${fr('2', '16')}<br><br>= ${fr('9', '8')}${NB}−${NB}${fr('1', '8')}${NB}=${NB}1. ✓`,
          `And on the line: 2(−${fr('9√2', '4')}) + 4√2<br><br>= −${fr('9√2', '2')} + ${fr('8√2', '2')} = −${fr('√2', '2')}. ✓`,
          `<b>Concept link.</b> Two values of ${c} means two parallel tangents, one on each side of the centre: exactly the picture for the circle and the ellipse too. Only the parabola breaks the pattern, because its tangency condition ${c} = ${fr(a, m)} is linear.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: `Find the equation of the tangent to the parabola ${Y2} = 16${x} having slope 2, together with its point of contact.`,
        steps: [
          `<b>The trap: using the coefficient 4${a} where the formula wants ${a}.</b> The slope form is ${SLOPE_P}. The seductive wrong answer reads the coefficient 16 off the equation and writes<br>${y} = 2${x} + ${fr('16', '2')} = 2${x} + 8.`,
          `It is wrong, and here is the proof that it is not merely inelegant. Substitute ${x} = ${fr(`${y} − 8`, '2')} into ${Y2} = 16${x}:<br>${Y2} = 8(${y} − 8) ⟹ ${Y2} − 8${y} + 64 = 0,<br>Δ = 64 − 256 = −192 < 0.`,
          'There are no real intersection points at all. The “tangent” misses the parabola entirely.',
          `<b>The correct route.</b> Compare ${Y2} = 16${x} with ${Y2} = 4<i>ax</i>:<br>4${a} = 16 ⟹ ${a} = 4.`,
          `Then with ${m} = 2,<br>${SLOPE_P} = 2${x} + ${fr('4', '2')} = 2${x} + 2.`,
          `Point of contact ${PCP} = (${fr('4', '4')}, ${fr('8', '2')}) = (1, 4).`,
          `Verify tangency directly: substituting ${x} = ${fr(`${y} − 2`, '2')} into ${Y2} = 16${x} gives<br>${Y2} = 8(${y} − 2) ⟹ ${Y2} − 8${y} + 16 = 0<br>⟹ (${y} − 4)<sup>2</sup> = 0,<br>a repeated root at ${y} = 4, hence ${x} = 1. Two coincident intersection points: a genuine tangent, touching at (1, 4), which does lie on the parabola since 4<sup>2</sup> = 16(1).`,
          `<b>Speed note.</b> This is the chapter’s “${a} versus 4${a} disaster” from <b>The Parabola</b>, wearing a tangent costume. Build the habit of writing “${a} = …” on its own line the moment you see a parabola, before touching any tangent or normal formula.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Prove that the locus of the point of intersection of two perpendicular tangents to the ellipse ${ELL} is the circle ${DIR_E}. Hence show that the tangents drawn from ${P}(3, 1) to the ellipse ${fr(X2, '8')}${NB}+${NB}${fr(Y2, '2')}${NB}=${NB}1 are perpendicular, and find their chord of contact.`,
        steps: [
          `<b>Proof of the locus.</b> Let ${P}(${h},${NB}${k}) be a point of intersection of two perpendicular tangents. A line through ${P} of slope ${m} is ${y} = <i>mx</i> + (${k} − <i>mh</i>), so ${c} = ${k} − <i>mh</i>. Imposing the ellipse’s condition of tangency ${COND_E}:<br>(${k} − <i>mh</i>)<sup>2</sup> = ${A2M2} + ${B2}.`,
          `Expand and gather powers of ${m}:<br>${K2} − 2<i>hkm</i> + ${M2}${H2} = ${A2M2} + ${B2}<br>⟹ ${QUAD_M}.`,
          `The roots ${m1}, ${m2} of this quadratic are the slopes of the two tangents from ${P}. Perpendicularity means ${m1}${m2} = −1, and the product of the roots is ${KB}, so<br><br>${KB} = −1<br>⟹ ${K2} − ${B2} = −${H2} + ${A2}<br>⟹ ${H2} + ${K2} = ${A2} + ${B2}.`,
          `Replacing (${h},${NB}${k}) by (${x},${NB}${y}), the locus is ${DIR_E}, the <b>director circle</b>.${NB}■`,
          `<b>Application.</b> For ${fr(X2, '8')}${NB}+${NB}${fr(Y2, '2')}${NB}=${NB}1 we have ${A2} = 8, ${B2} = 2, so the director circle is<br>${X2} + ${Y2} = 8 + 2 = 10.`,
          `The point ${P}(3, 1) satisfies 3<sup>2</sup> + 1<sup>2</sup> = 10, so ${P} lies <b>on</b> the director circle and the two tangents from it are perpendicular.`,
          `Confirm it from first principles by building the slope quadratic at ${P}(3, 1), where ${c} = 1 − 3${m}:<br>(1 − 3${m})<sup>2</sup> = 8${M2} + 2<br>⟹ 1 − 6${m} + 9${M2} = 8${M2} + 2<br>⟹ ${M2} − 6${m} − 1 = 0.`,
          `Then ${m1}${m2} = ${fr('−1', '1')} = −1, so the tangents are indeed perpendicular (their slopes being 3 ± √10, which multiply to 9 − 10 = −1).`,
          `<b>Chord of contact.</b> Since ${S1} = ${fr('9', '8')} + ${HALF} − 1 = ${fr('5', '8')} > 0, the point is external and two tangents exist. The chord of contact is ${T0} with ${P11} = (3, 1):<br>${fr(`3${x}`, '8')}${NB}+${NB}${fr(y, '2')}${NB}=${NB}1 ⟹ 3${x} + 4${y} = 8.`,
          `<b>Why it is “Advanced”.</b> The move that unlocks it is refusing to find ${m1} and ${m2}. The question asks only whether the product of the slopes is −1, and Vieta hands you that product straight off the quadratic. Recognising that a symmetric question about two tangents never requires solving for either one is the transferable skill here: it is the same instinct that turned ${t1}${t2} = −1 into the focal-chord proof in <b>The Parabola</b>.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE] Find the equation of the tangent to the circle ${X2} + ${Y2} = 25 at the point (3, −4).`,
            a: `(3, −4) satisfies 9 + 16 = 25; tangent 3${x} − 4${y} = 25.`,
          },
          {
            q: `[CBSE] Find the equation of the tangent to the parabola ${Y2} = 8${x} at the point (2, 4).`,
            a: `4${a} = 8 ⇒ ${a} = 2; tangent 4${y} = 4(${x} + 2), i.e. ${y} = ${x} + 2.`,
          },
          {
            q: `[JEE Main] For what values of ${c} is the line ${y} = 3${x} + ${c} a tangent to the circle ${X2} + ${Y2} = 9?`,
            a: `${COND_C} = 9(1 + 9) = 90, so ${c} = ±3√10.`,
          },
          {
            q: `[JEE Main] Find the equations of the tangents to the ellipse ${fr(X2, '9')}${NB}+${NB}${fr(Y2, '4')}${NB}=${NB}1 having slope ${fr('2', '3')}.`,
            a: `${COND_E} = 9 · ${fr('4', '9')} + 4 = 8, so ${c} = ±2√2 and the tangents are ${y} = ${fr('2', '3')}${x} ± 2√2.`,
          },
          {
            q: `[JEE Main] Find the chord of contact of the tangents drawn from the point (2, 3) to the circle ${X2} + ${Y2} = 4.`,
            a: `${T0} gives 2${x} + 3${y} = 4.`,
          },
          {
            q: `[JEE Main] How many tangents can be drawn to the circle ${X2} + ${Y2} − 2${x} − 4${y} + 3 = 0 from the point (1, 1)?`,
            a: `${S1} = 1 + 1 − 2 − 4 + 3 = −1 < 0, so (1, 1) is inside the circle and <b>no</b> tangent can be drawn: zero tangents.`,
          },
          {
            q: `[JEE Main] Find the equation of the tangent to the hyperbola ${fr(X2, '16')}${NB}−${NB}${fr(Y2, '9')}${NB}=${NB}1 at the point (8, 3√3).`,
            a: `The point satisfies ${fr('64', '16')} − ${fr('27', '9')} = 4 − 3 = 1; tangent ${fr(`8${x}`, '16')}${NB}−${NB}${fr(`3√3 ${y}`, '9')}${NB}=${NB}1, i.e. 3${x} − 2√3 ${y} = 6.`,
          },
          {
            q: `[JEE Advanced] Find the point of intersection of the tangents to the parabola ${Y2} = 4${x} drawn at the points with parameters ${t1} = 1 and ${t2} = 3.`,
            a: `Here ${a} = 1; the tangents are ${y} = ${x} + 1 and 3${y} = ${x} + 9, meeting at ${T12} = (3, 4).`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The line ${MXC} touches the parabola ${Y2} = 4<i>ax</i> if`,
        opts: [
          {
            label: `${c} = <i>am</i>`,
            nudge: `<b>(A)</b> inverts the relation: it is what you get by mis-remembering “${a} over ${m}” as “${a} times ${m}”, and it fails immediately on any numerical check.`,
          },
          { label: `${c} = ${fr(a, m)}`, nudge: null },
          {
            label: COND_E,
            nudge: `<b>(C)</b> is the ellipse’s condition imported wholesale; a parabola has no ${b}, so the presence of ${b} in an option is itself a red flag.`,
          },
          {
            label: `${c} = −${fr(a, m)}`,
            nudge: `<b>(D)</b> attaches a spurious minus sign; the tangent to a right-opening parabola with positive slope has a positive intercept, so the sign cannot be negative for ${m} > 0.`,
          },
        ],
        correct: 1,
        solution: `Substituting the line gives <i>my</i><sup>2</sup> − 4<i>ay</i> + 4<i>ac</i> = 0, and equal roots require 16${A2} = 16<i>amc</i>, i.e. ${a} = <i>mc</i>.`,
      },
      {
        t: 'mcq',
        q: `The tangent to the ellipse ${fr(X2, '9')}${NB}+${NB}${fr(Y2, '4')}${NB}=${NB}1 at the point (3, 0) is`,
        opts: [
          { label: `${x} = 3`, nudge: null },
          {
            label: `${x} = 9`,
            nudge: `<b>(B)</b> drops the factor ${x1} = 3 and solves ${fr(x, '9')} = 1, getting ${x} = 9 as the line.`,
          },
          {
            label: `${y} = 3`,
            nudge: '<b>(C)</b> confuses the vertex’s abscissa with an ordinate: a sign that the student is pattern-matching digits rather than reading which axis the point is on.',
          },
          {
            label: `${x} + ${y} = 3`,
            nudge: '<b>(D)</b> is the intercept form of a line through (3, 0) and (0, 3), which passes through the point but cuts the ellipse rather than touching it.',
          },
        ],
        correct: 0,
        solution: `Using ${T0}: ${fr(`3${x}`, '9')}${NB}+${NB}${fr(`0 · ${y}`, '4')}${NB}=${NB}1, so ${fr(x, '3')} = 1, that is ${x} = 3.`,
      },
      {
        t: 'mcq',
        q: `The director circle of the ellipse ${fr(X2, '16')}${NB}+${NB}${fr(Y2, '9')}${NB}=${NB}1 is`,
        opts: [
          {
            label: `${X2} + ${Y2} = 7`,
            nudge: `<b>(A)</b> uses ${A2} − ${B2}, which is the <b>hyperbola’s</b> director circle and also equals ${C2} for this ellipse: the deadly sign import that <b>The Ellipse</b> already warned about.`,
          },
          { label: `${X2} + ${Y2} = 25`, nudge: null },
          {
            label: `${X2} + ${Y2} = 16`,
            nudge: `<b>(C)</b> is the auxiliary circle ${AUX}; auxiliary and director circles are different objects with different jobs, as Parametric Forms and the Auxiliary Circle sets out.`,
          },
          { label: `${X2} + ${Y2} = 9`, nudge: `<b>(D)</b> uses ${B2}: that is the circle on the minor axis as diameter, inscribed in the ellipse and touching it at the minor-axis ends, not the director circle.` },
        ],
        correct: 1,
        solution: `The director circle is ${DIR_E} = 16 + 9 = 25.`,
      },
      {
        t: 'mcq',
        q: `The number of tangents that can be drawn to the circle ${X2} + ${Y2} = 25 from the point (3, 4) is`,
        opts: [
          { label: '0', nudge: `<b>(A)</b> is the answer for an interior point, ${S1} < 0.` },
          { label: '1', nudge: null },
          {
            label: '2',
            nudge: `<b>(C)</b> is the answer for an exterior point, ${S1} > 0, and is what a student picks by reflex without ever computing ${S1}: the whole point of the item is that “from a point” does not automatically mean “from outside”.`,
          },
          { label: 'infinitely many', nudge: '<b>(D)</b> confuses tangents with the infinitely many lines through the point.' },
        ],
        correct: 1,
        solution: `${S1} = 9 + 16 − 25 = 0, so (3, 4) lies <b>on</b> the circle, and there is exactly one tangent there, namely 3${x} + 4${y} = 25.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Using ${T0} from a point not on the conic and calling it a tangent.</b> If the point is external, ${T0} is the chord of contact, which is a completely different line. <b>Correction:</b> substitute the point into ${S} first; only ${S1} = 0 licenses the word “tangent”.`,
          `<b>Importing the wrong sign into the tangency condition.</b> Ellipse: ${COND_E}. Hyperbola: ${COND_H}. <b>Correction:</b> note that this is the <b>opposite</b> pairing to ${C2} = ${A2} − ${B2} (ellipse) and ${C2} = ${A2} + ${B2} (hyperbola). Two sign rules that look alike and point opposite ways: write both down side by side once and the confusion dissolves.`,
          `<b>The “${a} versus 4${a}” slip inside ${SLOPE_P}.</b> Reading 16 from ${Y2} = 16${x} as ${a} produces a line that misses the parabola altogether. <b>Correction:</b> convert to ${a} on a separate line before you start.`,
          `<b>Forgetting that slope form cannot produce a vertical tangent.</b> From (0, 4) to ${Y2} = 4${x} the slope form yields only ${y} = ${fr(x, '4')} + 4; the second tangent is ${x} = 0, the tangent at the vertex. <b>Correction:</b> whenever a question asks for all tangents from a point, test the vertical line separately.`,
          `<b>Claiming a tangent to a hyperbola with a slope flatter than the asymptotes.</b> ${COND_H} has no real solution when |${m}| < ${BA}, and at |${m}| = ${BA} it gives ${c} = 0, the asymptote itself. <b>Correction:</b> check that ${A2M2} − ${B2} > 0 before announcing a value of ${c}; if it is negative, the honest answer is “no such tangent exists”.`,
          `<b>Assuming two tangents always come from a positive ${S1}.</b> True for circle, parabola and ellipse; <b>reversed</b> for the hyperbola. <b>Correction:</b> use the table in the Key definitions and formulas part, and sanity-check with a sketch: a point tucked inside a branch is walled in by that branch.`,
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> For a circle, never run a discriminant. “Perpendicular distance from the centre equals the radius” turns every circle tangency question into one application of the distance-from-a-point-to-a-line formula.',
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip.</b> When two tangents are drawn from a point and the question asks about the <b>angle</b> between them, or whether they are perpendicular, or the sum of their slopes, build the quadratic in ${m} and stop. ${m1} + ${m2} = −${fr('<i>B</i>', '<i>A</i>')} and ${m1}${m2} = ${fr('<i>C</i>', '<i>A</i>')} answer the question without a single square root.`,
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip.</b> Learn ${T} once, not four tangent formulas. The substitution ${X2} → ${XX1}, ${Y2} → ${YY1}, ${x} → ${HALF}(${x} + ${x1}), ${y} → ${HALF}(${y} + ${y1}) generates the tangent, the chord of contact and (with ${SS1T}) the pair of tangents for all four conics.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'The one rule',
            note: `tangent at a point on the conic, and chord of contact from a point outside it, are both ${T0}. Pair of tangents: ${SS1T}.`,
          },
          {
            f: `Circle ${X2} + ${Y2} = ${R2}`,
            note: `tangent ${TCIRC}; parametric ${x} cos ${th} + ${y} sin ${th} = ${r}; slope form ${SLOPE_C}; condition ${COND_C}; director circle ${X2} + ${Y2} = 2${R2}.`,
          },
          {
            f: 'General circle',
            note: `tangent ${TGEN}; tangency test: distance from (−<i>g</i>,${NB}−<i>f</i>) equals √(<i>g</i><sup>2</sup> + <i>f</i><sup>2</sup> − ${c}).`,
          },
          {
            f: `Parabola ${Y2} = 4<i>ax</i>`,
            note: `tangent ${TPAR}; parametric <i>ty</i> = ${x} + <i>at</i><sup>2</sup>; slope form ${SLOPE_P} (${neq0(m)}); condition ${c} = ${fr(a, m)}; contact ${PCP}; tangents at ${t1}, ${t2} meet at ${T12}; perpendicular tangents meet on ${x} = −${a}.`,
          },
          {
            f: 'Ellipse',
            note: `tangent ${TE}; parametric ${TPE}; slope form ${SLOPE_E}; contact ${PCE}; director circle ${DIR_E}.`,
          },
          {
            f: 'Hyperbola',
            note: `tangent ${TH}; parametric ${TPH}; slope form ${SLOPE_H} needing |${m}| > ${BA}; contact ${PCH}; director circle ${DIR_H} (needs ${a} > ${b}). Tangent to <i>xy</i> = ${C2} at (<i>ct</i>, ${fr(c, t)}): ${x} + ${t}<sup>2</sup>${y} = 2<i>ct</i>.`,
          },
          {
            f: 'Counting tangents',
            note: `circle, parabola, ellipse: ${S1} > 0 two, = 0 one, < 0 none. Hyperbola, reversed: ${S1} < 0 two, = 0 one, > 0 none.`,
          },
        ],
        aids: [
          '“Tangent means equal roots.”',
          `“${T0} on the curve is a tangent, outside the curve a chord of contact.”`,
          '“Tangency flips the sign: ellipse plus, hyperbola minus.”',
          '“Circle? Distance equals radius, never a discriminant.”',
        ],
      },
    ],
  },
];
