import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Topics 08–09, pp. 961–986 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word: the supplement's last two
 * units, "Normals to a Conic" (pp. 961–974: it starts under Tangents to a
 * Conic's cheat sheet on p. 961; Figure 10.9, caption p. 964, drawing p. 965)
 * and "Applied Problems: Conics in the Real World" (pp. 974–986: it starts
 * under Normals' cheat sheet on p. 974; Figure 10.10, caption p. 975, drawing
 * p. 976; Figures 10.11–10.14, captions pp. 977, 979, 981, 983, drawings
 * pp. 978, 980, 982, 984, each inside its worked example). The Additional
 * Topics part starts on p. 987. Each topic opens with its "Exam Relevance:"
 * box as a part of its own, then is split at its sections (Topic 09 prints
 * only Sections 1, 4, 5 and 8); the "Cheat Sheet Box" is the part "Cheat
 * sheet". No unnumbered drawings on these pages. Every fraction is stacked
 * (<frac>); no em dashes.
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
const x = I('x');
const y = I('y');
const th = I('θ');
const P = I('P');
const Q = I('Q');
const t1 = sb('t', '1');
const t2 = sb('t', '2');
const t3 = sb('t', '3');
const m1 = sb('m', '1');
const m2 = sb('m', '2');
const m3 = sb('m', '3');
const x1 = sb('x', '1');
const y1 = sb('y', '1');
const mN = `${m}<sub><i>N</i></sub>`;
const mT = `${m}<sub><i>T</i></sub>`;
const X2 = `${x}<sup>2</sup>`;
const Y2 = `${y}<sup>2</sup>`;
const A2 = `${a}<sup>2</sup>`;
const B2 = `${b}<sup>2</sup>`;
const C2 = `${c}<sup>2</sup>`;
const M2 = `${m}<sup>2</sup>`;
const R2 = `${r}<sup>2</sup>`;
const T1S = `${t1}<sup>2</sup>`;
const T2S = `${t2}<sup>2</sup>`;
const P11 = `(${x1},${NB}${y1})`;
const neq0 = (v: string) => `${v}${NB}≠${NB}0`;

const HALF = fr('1', '2');
const PI2 = fr('π', '2');
const PI4 = fr('π', '4');
const PI6 = fr('π', '6');
const TPI2 = fr('3π', '2');
const ANGLES = `${th} = 0, ${PI2}, π, ${TPI2}`;
const SPS = '∠<i>SPS</i>′';

// The conics.
const PARA = `${Y2} = 4<i>ax</i>`;
const ELL = `${fr(X2, A2)}${NB}+${NB}${fr(Y2, B2)}${NB}=${NB}1`;
const HYP = `${fr(X2, A2)}${NB}−${NB}${fr(Y2, B2)}${NB}=${NB}1`;
const GEN = `${X2} + ${Y2} + 2<i>gx</i> + 2<i>fy</i> + ${c} = 0`;
const PT = `(<i>at</i><sup>2</sup>,${NB}2<i>at</i>)`;
const PT1 = `(<i>at</i><sub>1</sub><sup>2</sup>,${NB}2<i>at</i><sub>1</sub>)`;
const PT2 = `(<i>at</i><sub>2</sub><sup>2</sup>,${NB}2<i>at</i><sub>2</sub>)`;

// Normals.
const MASTER = `${mN} = −${fr('1', mT)}`;
const N_CIRC = `${x1}${y} − ${y1}${x} = 0`;
const N_PAR_PT = `${y} − ${y1} = −${fr(y1, `2${a}`)}(${x} − ${x1})`;
const N_PAR_T = `${y} + <i>tx</i> = 2<i>at</i> + <i>at</i><sup>3</sup>`;
const N_PAR_M = `${y} = <i>mx</i> − 2<i>am</i> − <i>am</i><sup>3</sup>`;
const FOOT = `(<i>am</i><sup>2</sup>,${NB}−2<i>am</i>)`;
const CUBIC = `<i>am</i><sup>3</sup> + ${m}(2${a} − ${h}) + ${k} = 0`;
const CONORM_T = `${t1} + ${t2} + ${t3} = 0`;
const CONORM_M = `${m1} + ${m2} + ${m3} = 0`;
const AGAIN = `${t2} = −${t1} − ${fr('2', t1)}`;
const A2X = `${A2}${x}`;
const B2Y = `${B2}${y}`;
const N_ELL = `${fr(A2X, x1)}${NB}−${NB}${fr(B2Y, y1)} = ${A2}${NB}−${NB}${B2}`;
const N_HYP = `${fr(A2X, x1)}${NB}+${NB}${fr(B2Y, y1)} = ${A2}${NB}+${NB}${B2}`;
const N_ELL_TH = `<i>ax</i> sec ${th} − <i>by</i> csc ${th} = ${A2} − ${B2}`;
const N_HYP_TH = `<i>ax</i> cos ${th} + <i>by</i> cot ${th} = ${A2} + ${B2}`;
const N_ELL_M = `${y} = <i>mx</i> ∓ ${fr(`${m}(${A2} − ${B2})`, `√(${A2} + ${B2}${M2})`)}`;
const N_HYP_M = `${y} = <i>mx</i> ∓ ${fr(`${m}(${A2} + ${B2})`, `√(${A2} − ${B2}${M2})`)}`;
const SL_ELL = fr(`${A2}${y1}`, `${B2}${x1}`);
const N_RECT = `${t}<sup>3</sup>${x} − <i>ty</i> = ${c}(${t}<sup>4</sup> − 1)`;
const CT = `(<i>ct</i>, ${fr(c, t)})`;

// Applied problems.
const ELL_16_4 = `${fr(X2, '16')}${NB}+${NB}${fr(Y2, '4')}${NB}=${NB}1`;
const HYP_TOWER = `${fr(X2, '900')}${NB}−${NB}${fr(Y2, '5625')}${NB}=${NB}1`;
const Y_GE0 = `${y}${NB}≥${NB}0`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 08 · pp. 961–974 ────────────────
  {
    n: '08',
    title: 'Normals to a Conic',
    kalam: 'If the tangent is the direction you are travelling, the normal is the direction you are leaning.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `CBSE Boards ask the normal at a stated point on a circle or parabola at 2–3 marks, most often as the second half of a question whose first half was the tangent ${ESTIMATE}. JEE Main asks the slope form of the parabola’s normal, the normal at a parametric point, and “the normal at ${P} meets the curve again at ${Q}” almost every session ${ESTIMATE}. JEE Advanced uses the three-normals property (${CONORM_T}) and normal-based locus questions. The normal is also where the reflection property of the ellipse, the whispering gallery, finally becomes a theorem you can compute with instead of a story. NEET does not test mathematics.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'If the tangent is the direction you are travelling, the normal is the direction you are leaning. On a Mumbai local rounding a curve, the tangent is where the train is pointed; the normal is the line along which the outward push throws you against the door. They are perpendicular, they meet at the same point of the curve, and once you have one you have the other for free.',
      },
      {
        t: 'p',
        html: 'That “for free” is the whole practical content of this unit. <b>The normal at a point on a conic is the line through that point perpendicular to the tangent there, so every normal formula is a tangent formula with its slope inverted and negated.</b> You are not learning a second body of theory. You are learning one extra step applied to theory you already have.',
      },
      {
        t: 'p',
        html: `Think about it this way… for a circle the normal is something you have known since Class 10 without calling it that. The tangent to a circle is perpendicular to the radius at the point of contact, so <b>the normal to a circle is the radius produced: it always passes through the centre</b>. No formula is required at all: join the point to the centre and you are done. Every other conic’s normal is a departure from that comfortable picture, and the departure is measured by how far the conic has strayed from being a circle. For the ellipse the normal at ${P} misses the centre (except at the four axis ends); what it does instead is bisect the angle ${SPS} between the two focal radii, which is precisely why a whisper released at one focus of a domed hall arrives, reassembled, at the other.`,
      },
      {
        t: 'p',
        html: `The parabola deserves a warning of its own. Its normal in slope form,<br>${N_PAR_M},<br>carries a <b>cubic</b> term in ${m}. That cubic has consequences. Solving it for a normal through a given external point can produce up to <b>three</b> real values of ${m}, which is why “three normals can be drawn to a parabola from a point” is a genuine theorem and not a curiosity, and why the three feet of those normals satisfy the elegant relation ${CONORM_T}. No other conic in this chapter has a linear tangent-slope condition and a cubic normal-slope condition, and students who expect symmetry between the two are repeatedly caught.`,
      },
      {
        t: 'p',
        html: `Limiting conditions and assumptions.<br>• Where the tangent is horizontal the normal is vertical, and where the tangent is vertical the normal is horizontal. The slope forms below cannot express those cases, so handle the axis ends by inspection.<br>• The ellipse’s parametric normal ${N_ELL_TH} breaks down at ${ANGLES}, where one of sec ${th}, csc ${th} is undefined. At those four points the normal is simply the major or minor axis.<br>• For a circle ${a} = ${b}, so the right side ${A2} − ${B2} of the ellipse’s normal becomes 0 and the normal becomes ${fr(x, x1)} = ${fr(y, y1)}: the line through the centre and the point, the radius produced. That is the correct answer, arrived at by the formula quietly telling you it is not needed.<br>• All standard forms assume the tidy frame used throughout this chapter: centre or vertex at the origin, axes along the coordinate axes.`,
      },

      { t: 'part', title: 'Key definitions and formulas' },
      {
        t: 'p',
        html: `<b>Definition (normal).</b> The normal to a conic at a point ${P} on it is the straight line through ${P} perpendicular to the tangent at ${P}.`,
      },
      {
        t: 'p',
        html: `<b>Master construction.</b> If the tangent at ${P} has slope ${mT}, the normal has slope`,
      },
      {
        t: 'formula',
        kicker: 'Master construction',
        main: `${MASTER} (${mT}${NB}≠${NB}0)`,
        legend: [`${mT} = the slope of the tangent at ${P}`, `${mN} = the slope of the normal at ${P}`],
        note: null,
      },
      {
        t: 'p',
        html: `and the normal is the line through ${P} with that slope. Every entry in the tables below is this one statement, carried out.`,
      },
      { t: 'p', html: '<b>Normals to the circle.</b>' },
      {
        t: 'table',
        title: null,
        head: ['Circle', `Normal at ${P11}`, 'Note'],
        rows: [
          [`${X2} + ${Y2} = ${R2}`, `${N_CIRC}, i.e. ${y} = ${fr(y1, x1)}${x}`, 'passes through the origin'],
          [GEN, `the line through ${P11} and (−<i>g</i>,${NB}−<i>f</i>)`, 'passes through the centre'],
        ],
      },
      { t: 'p', html: `<b>Normals to the parabola ${PARA}.</b>` },
      {
        t: 'table',
        title: null,
        head: ['Item', 'Result', 'Conditions'],
        rows: [
          [`Normal at ${P11}`, N_PAR_PT, `${neq0(y1)}; at the vertex the normal is ${y} = 0`],
          [`Normal at ${PT}`, N_PAR_T, `slope = −${t}`],
          ['Slope form', N_PAR_M, `any real ${m}`],
          ['Foot of the normal (slope form)', FOOT, `corresponds to ${t} = −${m}`],
          [`Three normals from (${h},${NB}${k})`, CUBIC, 'up to three real roots'],
          ['Conormal relation', `${CONORM_T} and ${CONORM_M}`, `the cubic has no ${M2} term`],
          [`Normal at ${t1} meets the curve again at`, AGAIN, neq0(t1)],
        ],
      },
      { t: 'p', html: `<b>Normals to the ellipse ${ELL}.</b>` },
      {
        t: 'table',
        title: null,
        head: ['Item', 'Result'],
        rows: [
          [`Normal at ${P11}`, N_ELL],
          [`Normal at (${a} cos ${th}, ${b} sin ${th})`, N_ELL_TH],
          ['Slope form', N_ELL_M],
          [`Slope of the normal at ${P11}`, SL_ELL],
        ],
      },
      { t: 'p', html: `<b>Normals to the hyperbola ${HYP}.</b>` },
      {
        t: 'table',
        title: null,
        head: ['Item', 'Result'],
        rows: [
          [`Normal at ${P11}`, N_HYP],
          [`Normal at (${a} sec ${th}, ${b} tan ${th})`, N_HYP_TH],
          ['Slope form', N_HYP_M],
          [`Slope of the normal at ${P11}`, `−${SL_ELL}`],
          [`Normal to <i>xy</i> = ${C2} at ${CT}`, N_RECT],
        ],
      },
      {
        t: 'p',
        html: `Notice the pleasing pattern across the last two tables: the ellipse’s normal reads minus, minus (−${fr(B2Y, y1)} and ${A2} − ${B2}) while the hyperbola’s reads plus, plus. It is the same “ellipse minus, hyperbola plus” rhythm the chapter set up in <b>The Hyperbola</b>, and here it applies twice in the same line.`,
      },
      {
        t: 'p',
        html: `<b>Reflection (optical) property: stated as a theorem.</b><br>• <b>Parabola.</b> The tangent at ${P} makes equal angles with the focal radius <i>SP</i> and with the line through ${P} parallel to the axis. Consequence: rays arriving parallel to the axis all reflect through the focus, which is why a DTH dish works.<br>• <b>Ellipse.</b> The <b>normal</b> at ${P} bisects the interior angle ${SPS} between the two focal radii; equivalently the tangent makes equal angles with <i>SP</i> and <i>S</i>′<i>P</i>. Consequence: anything emitted from one focus converges on the other: the whispering gallery, and the lithotripsy machine.<br>• <b>Hyperbola.</b> The <b>tangent</b> at ${P} bisects the angle ${SPS} between the focal radii. Consequence: a ray aimed at one focus reflects off the curve towards the other focus.`,
      },
      { t: 'fig', id: 'm11-10-fig-10.9' },

      { t: 'part', title: 'CBSE board derivation' },
      { t: 'p', html: `<b>Derivation: the normal to ${PARA} at the parametric point ${PT}</b>` },
      {
        t: 'p',
        html: `1. From Tangents to a Conic, the tangent at ${PT} is <i>ty</i> = ${x} + <i>at</i><sup>2</sup>, so its slope is ${fr('1', t)}. <b>Reason:</b> rewrite as ${y} = ${fr(x, t)} + <i>at</i> and read the coefficient of ${x}.`,
      },
      {
        t: 'p',
        html: `2. The normal is perpendicular to the tangent, so its slope is −${t}. <b>Reason:</b><br>${MASTER}<br><br>= −${fr('1', fr('1', t))} = −${t}.`,
      },
      {
        t: 'p',
        html: `3. The normal passes through the same point, so by the point-slope form:<br>${y} − 2<i>at</i> = −${t}(${x} − <i>at</i><sup>2</sup>).`,
      },
      {
        t: 'p',
        html: `4. Expand and tidy:<br>${y} − 2<i>at</i> = −<i>tx</i> + <i>at</i><sup>3</sup><br>⟹ ${N_PAR_T}.<br><b>Reason:</b> collecting the ${x} and ${y} terms on the left gives the standard printed form, which examiners’ keys match.`,
      },
      {
        t: 'p',
        html: `5. To get the slope form, put ${m} = −${t}, so ${t} = −${m}:<br>${y} + (−${m})${x} = 2${a}(−${m}) + ${a}(−${m})<sup>3</sup><br>⟹ ${y} − <i>mx</i> = −2<i>am</i> − <i>am</i><sup>3</sup><br>⟹ ${N_PAR_M}.`,
      },
      {
        t: 'p',
        html: `6. The foot of this normal is the original point with ${t} = −${m} substituted:<br>(${a}(−${m})<sup>2</sup>, 2${a}(−${m})) = ${FOOT}.<br><b>Reason:</b> the foot of a normal is simply the point at which it was constructed, re-expressed in the new parameter.`,
      },
      {
        t: 'p',
        html: `<b>A consequence worth reading off immediately.</b> Requiring the normal to pass through a fixed point (${h},${NB}${k}) gives<br>${k} = <i>mh</i> − 2<i>am</i> − <i>am</i><sup>3</sup><br>⟹ ${CUBIC},<br>a cubic in ${m} with <b>no ${M2} term</b>. The sum of its roots is therefore zero:<br>${CONORM_M} and hence ${CONORM_T}.<br>That is the celebrated conormal-points relation, and it falls out of a missing coefficient.`,
      },
      { t: 'p', html: `<b>Derivation: the normal to ${ELL} at ${P11}</b>` },
      {
        t: 'p',
        html: `1. From Tangents to a Conic, the tangent at ${P11} is ${fr(`<i>xx</i><sub>1</sub>`, A2)}${NB}+${NB}${fr(`<i>yy</i><sub>1</sub>`, B2)}${NB}=${NB}1. Solving for ${y} shows its slope is −${fr(`${B2}${x1}`, `${A2}${y1}`)}.<br><br><b>Reason:</b> rearranging gives ${y} = −${fr(`${B2}${x1}`, `${A2}${y1}`)}${x} + ${fr(B2, y1)}.`,
      },
      {
        t: 'p',
        html: `2. The normal’s slope is the negative reciprocal:<br>${mN} = ${SL_ELL}.`,
      },
      {
        t: 'p',
        html: `3. The normal through ${P11} is therefore<br>${y} − ${y1} = ${SL_ELL}(${x} − ${x1}).`,
      },
      {
        t: 'p',
        html: `4. Cross-multiply to clear the fraction and separate the variables:<br>${fr(`${B2}(${y} − ${y1})`, y1)} = ${fr(`${A2}(${x} − ${x1})`, x1)}<br><br>⟹ ${fr(B2Y, y1)} − ${B2} = ${fr(A2X, x1)} − ${A2}.<br><b>Reason:</b> dividing each side by the coordinate that appears in it is what produces the memorable symmetric form.`,
      },
      {
        t: 'p',
        html: `5. Rearrange:<br>${N_ELL}.`,
      },
      {
        t: 'p',
        html: `6. Substituting the parametric point ${x1} = ${a} cos ${th}, ${y1} = ${b} sin ${th}:<br>${fr(A2X, `${a} cos ${th}`)} − ${fr(B2Y, `${b} sin ${th}`)} = ${A2} − ${B2}<br><br>⟹ ${N_ELL_TH}.`,
      },
      {
        t: 'p',
        html: `7. Repeating steps 1–5 on ${HYP}, where the tangent’s slope is +${fr(`${B2}${x1}`, `${A2}${y1}`)}, gives the hyperbola’s normal<br>${N_HYP},<br><br>and parametrically ${N_HYP_TH}.`,
      },
      {
        t: 'proc',
        title: 'Procedure A: find the normal at a given point',
        steps: [
          'Check the point lies on the conic. <b>Why:</b> a normal is defined only at a point of the curve.',
          'Get the tangent’s slope, either by quoting the tangent from Tangents to a Conic or by implicit differentiation. <b>Why:</b> both routes give the same number; use whichever is faster for the conic in front of you.',
          'Negate and invert to get the normal’s slope, then write the point-slope form. <b>Why:</b> this is the definition, and it works even when you cannot recall a printed formula.',
          'For a circle, skip all of this and join the point to the centre. <b>Why:</b> the radius is the normal, so the two-point form finishes the question in one line.',
          'Verify the point satisfies your final equation. <b>Why:</b> a normal must pass through its own foot.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: find the normal of a given slope',
        steps: [
          `Convert the conic to standard form and extract ${a} (and ${b}). <b>Why:</b> the slope forms are stated in those symbols; using the raw coefficient is the classic error.`,
          `Quote the slope form: parabola ${N_PAR_M};<br><br>ellipse ${N_ELL_M};<br><br>hyperbola ${N_HYP_M}.`,
          `For the parabola, write the foot immediately as ${FOOT}. <b>Why:</b> most questions want the foot, and it costs nothing once ${m} is known.`,
          'Verify by checking that the foot lies on both the conic and the line. <b>Why:</b> two independent substitutions catch every sign and cubing error this procedure can produce.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C: “the normal at P meets the curve again at Q”',
        steps: [
          `Put ${P} in parametric form, ${P} = ${PT1}. <b>Why:</b> the second intersection is much easier to describe by its parameter than by its coordinates.`,
          `Write the normal at ${t1} and substitute the general parametric point ${PT2} into it. <b>Why:</b> you are demanding that ${Q} lie on the normal, which is exactly one equation.`,
          `Factor out (${t2} − ${t1}), which must be a factor because ${t2} = ${t1} obviously satisfies the equation. <b>Why:</b> removing the known root converts a quadratic into a linear equation for ${t2}.`,
          `Read off ${AGAIN} and convert back to coordinates. <b>Why:</b> this single relation answers the entire family of “meets again” questions.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `(a) Find the equation of the normal to the parabola ${Y2} = 12${x} at the point (3, 6).<br>(b) Find the equation of the normal to the circle ${X2} + ${Y2} − 4${x} + 6${y} − 12 = 0 at the point (5, 1).`,
        steps: [
          `<b>(a)</b> Check the point: 6<sup>2</sup> = 36 = 12 × 3. Comparing ${Y2} = 12${x} with ${PARA} gives ${a} = 3.`,
          `The normal at ${P11} is<br>${N_PAR_PT}<br><br>⟹ ${y} − 6 = −${fr('6', '6')}(${x} − 3) = −(${x} − 3),<br><br>${y} − 6 = −${x} + 3 ⟹ ${x} + ${y} = 9.`,
          `Check: at (3, 6), 3 + 6 = 9. The tangent there was ${y} = ${x} + 3 with slope 1 (the first worked example of Topic 07), and the normal’s slope is −1: the two are perpendicular, as required.`,
          `<b>(b)</b> The normal to a circle is the radius produced, so it is simply the line through (5, 1) and the centre. The centre is (−<i>g</i>,${NB}−<i>f</i>) = (2, −3).`,
          `Slope = ${fr('1 − (−3)', '5 − 2')} = ${fr('4', '3')}. Using the point-slope form at (5, 1):<br><br>${y} − 1 = ${fr('4', '3')}(${x} − 5)<br>⟹ 3${y} − 3 = 4${x} − 20<br>⟹ 4${x} − 3${y} = 17.`,
          `Check both points: 4(5) − 3(1) = 17 and 4(2) − 3(−3) = 8 + 9 = 17. And the tangent at (5, 1) was 3${x} + 4${y} = 19, of slope −${fr('3', '4')}, perpendicular to ${fr('4', '3')}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the equation of the normal to the ellipse ${fr(X2, '16')}${NB}+${NB}${fr(Y2, '9')}${NB}=${NB}1 at the point whose eccentric angle is ${PI4}.`,
        steps: [
          `Here ${a} = 4 and ${b} = 3, so ${A2} − ${B2} = 16 − 9 = 7. The point is<br>${P} = (4 cos ${PI4}, 3 sin ${PI4})<br><br>= (2√2, ${fr('3', '√2')}),<br><br>which does lie on the ellipse:<br>${fr('8', '16')} + ${fr('9', '18')} = ${HALF} + ${HALF} = 1. ✓`,
          `Apply the parametric normal ${N_ELL_TH} with sec ${PI4} = csc ${PI4} = √2:<br><br>4${x}√2 − 3${y}√2 = 7<br>⟹ √2(4${x} − 3${y}) = 7<br>⟹ 4${x} − 3${y} = ${fr('7', '√2')} = ${fr('7√2', '2')}.`,
          `Equivalently, in integer-coefficient form, 4√2 ${x} − 3√2 ${y} = 7.`,
          `Check by substituting ${P}:<br>4√2(2√2) − 3√2(${fr('3', '√2')}) = 16 − 9 = 7. ✓`,
          `Cross-check via the point form ${N_ELL}:<br><br>${fr(`16${x}`, '2√2')} − ${fr(`9${y}`, fr('3', '√2'))} = 7<br><br>⟹ ${fr(`8${x}`, '√2')} − 3√2 ${y} = 7<br>⟹ 4√2 ${x} − 3√2 ${y} = 7,<br>the same line. <b>Concept link:</b> the parametric normal and the point normal are not two formulas but one formula in two costumes, exactly as the auxiliary-circle unit predicted.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: `Find the equation of the normal to the parabola ${Y2} = 8${x} having slope 2, and find its foot.`,
        steps: [
          `<b>The trap: dropping the cubic term from the normal’s slope form.</b> Students who half-remember the tangent’s shape ${y} = <i>mx</i> + ${c} write the normal as ${y} = <i>mx</i> − 2<i>am</i> and stop. With 4${a} = 8, so ${a} = 2, that gives<br>${y} = 2${x} − 2(2)(2) = 2${x} − 8.`,
          `It is a real line and it does hit the parabola, which is what makes it so convincing. Substituting ${x} = ${fr(`${y} + 8`, '2')} into ${Y2} = 8${x}:<br><br>${Y2} = 4(${y} + 8) ⟹ ${Y2} − 4${y} − 32 = 0<br>⟹ (${y} − 8)(${y} + 4) = 0.`,
          `So it meets the curve at (8, 8) and at (2, −4): two <b>distinct</b> points, so it is an ordinary chord. Worse, it is not normal at either: the tangent slope on ${Y2} = 8${x} is ${fr(`2${a}`, y)} = ${fr('4', y)}, giving ${HALF} at (8, 8) and −1 at (2, −4); a normal of slope 2 would need a tangent slope of −${HALF} at its foot, which happens at neither point.`,
          `<b>The correct route.</b> The slope form of the normal to ${PARA} carries three terms:<br>${N_PAR_M}.`,
          `With ${a} = 2 and ${m} = 2:<br>${y} = 2${x} − 2(2)(2) − 2(2)<sup>3</sup><br>= 2${x} − 8 − 16 = 2${x} − 24.`,
          `The foot is ${FOOT} = (2 · 4, −2 · 2 · 2) = (8, −8).`,
          `Verify the foot on the parabola: (−8)<sup>2</sup> = 64 and 8(8) = 64. ✓ Verify the foot on the line: 2(8) − 24 = −8. ✓ Verify perpendicularity: the tangent slope at (8, −8) is ${fr('4', y)} = ${fr('4', '−8')} = −${HALF}, and 2 × (−${HALF}) = −1. ✓`,
          `<b>Speed note.</b> Store the parabola’s two slope forms as a contrasting pair: tangent ${y} = <i>mx</i> + ${fr(a, m)} has <b>two</b> terms, normal ${N_PAR_M} has <b>three</b>. If your normal has only two terms, you have dropped the cube.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `If the normal at the point ${P}${PT1} on the parabola ${PARA} meets the curve again at ${Q}${PT2}, prove that<br>${AGAIN}.<br>Hence find where the normal at the point ${t} = 1 on ${Y2} = 4${x} meets the parabola again, and deduce how close to the vertex the second point ${Q} can ever be.`,
        steps: [
          `<b>Proof.</b> The normal at ${t1} is<br>${y} + ${t1}${x} = 2<i>at</i><sub>1</sub> + <i>at</i><sub>1</sub><sup>3</sup>.`,
          `${Q} lies on this normal, so substitute ${x} = <i>at</i><sub>2</sub><sup>2</sup>, ${y} = 2<i>at</i><sub>2</sub>:<br>2<i>at</i><sub>2</sub> + ${t1}(<i>at</i><sub>2</sub><sup>2</sup>) = 2<i>at</i><sub>1</sub> + <i>at</i><sub>1</sub><sup>3</sup>.`,
          `Divide throughout by ${a} (which is non-zero) and bring everything to one side:<br>${t1}${T2S} + 2${t2} − ${t1}<sup>3</sup> − 2${t1} = 0.`,
          `Group so that (${t2} − ${t1}) can be extracted; it must be a factor, because ${t2} = ${t1} trivially satisfies the equation:<br>${t1}(${T2S} − ${T1S}) + 2(${t2} − ${t1}) = 0<br>⟹ (${t2} − ${t1})[${t1}(${t2} + ${t1}) + 2] = 0.`,
          `Since ${Q} ≠ ${P} we have ${t2} ≠ ${t1}, so the second bracket must vanish:<br>${t1}${t2} + ${T1S} + 2 = 0 ⟹ ${AGAIN}.${NB}■`,
          `<b>Application.</b> For ${Y2} = 4${x} we have 4${a} = 4, so ${a} = 1. With ${t1} = 1:<br>${t2} = −1 − ${fr('2', '1')} = −3.`,
          `The two points are<br>${P} = (1 · 1<sup>2</sup>, 2 · 1 · 1) = (1, 2),<br>${Q} = (1 · (−3)<sup>2</sup>, 2 · 1 · (−3)) = (9, −6).`,
          `Check ${Q} on the parabola: (−6)<sup>2</sup> = 36 = 4 × 9. ✓ Check the normal: at ${t1} = 1 it is ${y} + ${x} = 2(1)(1) + 1(1)<sup>3</sup> = 3, and ${Q} gives −6 + 9 = 3. ✓`,
          `<b>The deduction.</b> Take ${t1}${NB}>${NB}0. Then<br>|${t2}| = ${t1} + ${fr('2', t1)} ≥ 2√(${t1} · ${fr('2', t1)}) = 2√2<br><br>by the AM–GM inequality, with equality when ${t1} = ${fr('2', t1)}, that is ${t1} = √2. The same bound holds for ${t1}${NB}<${NB}0 by symmetry. So no matter where ${P} sits (other than the vertex), the far end of the normal chord always has |${t2}| ≥ 2√2: the normal at any point other than the vertex lands a long way round the curve, and it lands closest to the vertex when ${t1} = ±√2. (At the vertex the normal is the axis, which meets the parabola nowhere else.)`,
          `<b>Why it is “Advanced”.</b> Two separate ideas are chained. First, the algebraic one: the factor (${t2} − ${t1}) is guaranteed in advance by the geometry, so you should look for it rather than expand blindly. Second, the analytic one: once the answer is a formula in ${t1}, it becomes an optimisation problem, and AM–GM converts a geometry question into a one-line inequality. This is exactly the habit <b>The Parabola</b> built with ${t1}${t2} = −1, pushed one level further.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE] Find the equation of the normal to the circle ${X2} + ${Y2} = 25 at the point (3, 4).`,
            a: `The normal is the radius produced, so it is ${y} = ${fr('4', '3')}${x}, i.e. 4${x} − 3${y} = 0.`,
          },
          {
            q: `[CBSE] Find the equation of the normal to the parabola ${Y2} = 4${x} at the point (4, 4).`,
            a: `${a} = 1; ${y} − 4 = −${fr('4', '2')}(${x} − 4), giving 2${x} + ${y} = 12.`,
          },
          {
            q: `[JEE Main] Find the equation of the normal to the ellipse ${fr(X2, '25')}${NB}+${NB}${fr(Y2, '9')}${NB}=${NB}1 at the point (4, ${fr('9', '5')}).`,
            a: `The point satisfies ${fr('16', '25')}${NB}+${NB}${fr('81', '225')}${NB}=${NB}1; the normal is<br><br>${fr(`25${x}`, '4')} − ${fr(`9${y}`, fr('9', '5'))} = 16,<br><br>i.e. 25${x} − 20${y} = 64.`,
          },
          {
            q: `[JEE Main] Find the equation of the normal to the hyperbola ${fr(X2, '9')}${NB}−${NB}${fr(Y2, '4')}${NB}=${NB}1 at the point (3√2, 2).`,
            a: `The point satisfies ${fr('18', '9')}${NB}−${NB}${fr('4', '4')}${NB}=${NB}1; the normal is<br><br>${fr(`9${x}`, '3√2')} + ${fr(`4${y}`, '2')} = 13,<br><br>i.e. 3√2 ${x} + 4${y} = 26.`,
          },
          {
            q: `[JEE Main] Find the equation of the normal to ${Y2} = 16${x} having slope −1, and state its foot.`,
            a: `${a} = 4; ${y} = −${x} − 2(4)(−1) − 4(−1)<sup>3</sup> = −${x} + 12, so ${x} + ${y} = 12, with foot ${FOOT} = (4, 8).`,
          },
          {
            q: `[JEE Main] Find the equation of the normal to the ellipse ${fr(X2, '16')}${NB}+${NB}${fr(Y2, '9')}${NB}=${NB}1 at the point whose eccentric angle is ${PI6}.`,
            a: `The point is (2√3, ${fr('3', '2')}); the normal is<br><br>4${x} sec ${PI6} − 3${y} csc ${PI6} = 7,<br><br>i.e. ${fr(`8${x}`, '√3')} − 6${y} = 7, or 8${x} − 6√3 ${y} = 7√3.`,
          },
          {
            q: `[JEE Advanced] The normal at the point with parameter ${t1} = 2 on the parabola ${Y2} = 8${x} meets the curve again at ${Q}. Find ${t2} and the coordinates of ${Q}.`,
            a: `${t2} = −2 − ${fr('2', '2')} = −3; with ${a} = 2, ${Q} = (2(−3)<sup>2</sup>, 2 · 2 · (−3)) = (18, −12), and the normal ${y} + 2${x} = 24 does pass through it.`,
          },
          {
            q: `[JEE Advanced] Find the equation of the normal to the rectangular hyperbola <i>xy</i> = 4 at the point (2, 2).`,
            a: `${c} = 2 and the point corresponds to ${t} = 1; ${N_RECT} gives ${x} − ${y} = 0, i.e. ${y} = ${x}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The equation of the normal to the parabola ${PARA} at the point ${PT} is`,
        opts: [
          {
            label: `<i>ty</i> = ${x} + <i>at</i><sup>2</sup>`,
            nudge: '<b>(A)</b> is the <b>tangent</b> at the same point: the most commonly chosen wrong answer, because tangent and normal formulas are learned in the same breath and stored in the same slot.',
          },
          { label: N_PAR_T, nudge: null },
          {
            label: `${y} = <i>tx</i> − 2<i>at</i> − <i>at</i><sup>3</sup>`,
            nudge: `<b>(C)</b> has the right terms but the wrong slope sign: it uses +${t} instead of −${t}, so it is parallel to nothing meaningful and does not pass through the point.`,
          },
          {
            label: `<i>tx</i> − ${y} = <i>at</i><sup>2</sup>`,
            nudge: `<b>(D)</b> has slope ${t}, the slope of neither the tangent (${fr('1', t)}) nor the normal (−${t}), and the point gives <i>at</i><sup>3</sup> − 2<i>at</i>, not <i>at</i><sup>2</sup>, so in general it does not even pass through ${PT}.`,
          },
        ],
        correct: 1,
        solution: `The tangent there has slope ${fr('1', t)}, so the normal has slope −${t}, and the point-slope form through ${PT} rearranges to ${N_PAR_T}.`,
      },
      {
        t: 'mcq',
        q: `The slope form of the normal to ${PARA} is`,
        opts: [
          {
            label: `${y} = <i>mx</i> + ${fr(a, m)}`,
            nudge: '<b>(A)</b> is the tangent’s slope form; a two-term answer where a three-term one is required is the signature of the dropped cubic.',
          },
          { label: N_PAR_M, nudge: null },
          {
            label: `${y} = <i>mx</i> + 2<i>am</i> + <i>am</i><sup>3</sup>`,
            nudge: `<b>(C)</b> has both signs flipped: it is the normal of slope ${m} to the mirror-image parabola ${Y2} = −4<i>ax</i>, not to ${PARA}. At the true foot (<i>am</i><sup>2</sup>,${NB}−2<i>am</i>) its right side gives 2<i>am</i><sup>3</sup> + 2<i>am</i>, not −2<i>am</i>.`,
          },
          {
            label: `${y} = <i>mx</i> ± √(${A2}${M2} + ${B2})`,
            nudge: `<b>(D)</b> is the <b>ellipse tangent</b> in slope form and contains a ${b}, which a parabola does not possess.`,
          },
        ],
        correct: 1,
        solution: `Substituting ${t} = −${m} into ${N_PAR_T} gives ${N_PAR_M}.`,
      },
      {
        t: 'mcq',
        q: 'The normal to a circle at any point on it always passes through',
        opts: [
          {
            label: 'the origin',
            nudge: '<b>(A)</b> is true only for a circle centred at the origin: a special case mistaken for the general rule.',
          },
          { label: 'the centre', nudge: null },
          {
            label: 'the focus',
            nudge: `<b>(C)</b> misapplies conic vocabulary: a circle has ${e} = 0 and no focus distinct from its centre, a point <b>The Circle</b> makes explicitly.`,
          },
          { label: 'no fixed point', nudge: '<b>(D)</b> denies the circle’s defining normal fact: every normal is a radius produced, so every one passes through the centre.' },
        ],
        correct: 1,
        solution: 'The tangent to a circle is perpendicular to the radius at the point of contact, so the normal is the radius produced and must pass through the centre.',
      },
      {
        t: 'mcq',
        q: `The equation of the normal to ${ELL} at ${P11} is`,
        opts: [
          {
            label: `${fr(`<i>xx</i><sub>1</sub>`, A2)}${NB}+${NB}${fr(`<i>yy</i><sub>1</sub>`, B2)}${NB}=${NB}1`,
            nudge: '<b>(A)</b> is the tangent, not the normal: the same tangent-normal slot collision as in the first MCQ.',
          },
          { label: N_ELL, nudge: null },
          {
            label: N_HYP,
            nudge: '<b>(C)</b> is the <b>hyperbola’s</b> normal: both signs are flipped together, which is precisely the “ellipse minus, hyperbola plus” rule being applied to the wrong curve.',
          },
          {
            label: `${fr(A2X, x1)}${NB}−${NB}${fr(B2Y, y1)} = ${A2}${NB}+${NB}${B2}`,
            nudge: '<b>(D)</b> mixes the two, taking the ellipse’s left-hand side with the hyperbola’s right-hand side; it is the option that catches students who remember that “one of the signs changes” but not which.',
          },
        ],
        correct: 1,
        solution: `The tangent’s slope is −${fr(`${B2}${x1}`, `${A2}${y1}`)}, so the normal’s is ${SL_ELL}, and clearing fractions in the point-slope form gives exactly <b>(B)</b>.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Answering with the tangent when the normal was asked.</b> The two formulas live next to each other in memory and get swapped under time pressure. <b>Correction:</b> after writing any normal, check that its slope times the tangent’s slope equals −1. It takes five seconds and it is decisive.',
          `<b>Dropping the cubic term in the parabola’s normal.</b> ${y} = <i>mx</i> − 2<i>am</i> is not a normal (except at ${m} = 0, where it is the axis); it is just a chord. <b>Correction:</b> count terms: the tangent slope form has two, the normal slope form has three.`,
          `<b>Using the raw coefficient instead of ${a}.</b> In ${Y2} = 16${x}, ${a} = 4, not 16, and cubing an incorrect ${a} magnifies the error enormously. <b>Correction:</b> write “${a} = …” on its own line before any slope form.`,
          `<b>Getting the ellipse and hyperbola normal signs the wrong way round.</b> Ellipse: ${N_ELL}. Hyperbola: ${N_HYP}. <b>Correction:</b> both signs move together: ellipse is minus-and-minus, hyperbola is plus-and-plus. If your answer mixes them, it belongs to no conic.`,
          `<b>Using the parametric normal at the axis ends.</b> ${N_ELL_TH} is undefined at ${ANGLES}. <b>Correction:</b> at those four points the normal is simply the major or the minor axis; read it off the picture rather than forcing the formula.`,
          `<b>Assuming a normal meets the conic only at its foot.</b> A normal to a parabola meets it again at ${AGAIN}. <b>Correction:</b> “normal” constrains the line only at the foot; everywhere else it behaves like any other line.`,
          `<b>Forgetting that up to three normals pass through a point of a parabola.</b> A question asking for “the normals from (${h},${NB}${k})” expects the cubic. <b>Correction:</b> set up ${CUBIC} and use ${CONORM_M} as a built-in check on your roots.`,
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> For a circle, never write a normal formula. Join the point to the centre with the two-point form; it is faster and cannot go wrong.',
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip.</b> For every normal you write, verify the foot twice: once in the conic, once in the line. Two substitutions catch every sign error, every cubing error and every ${a}-versus-4${a} error this topic can generate, and they cost less time than re-deriving.`,
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip.</b> When a question mentions the reflection property, the whispering gallery or a headlight, reach for the normal, not the tangent, for the ellipse: the ellipse’s <b>normal</b> bisects ${SPS}, while for the hyperbola it is the <b>tangent</b> that bisects it.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Master rule',
            note: `${MASTER}. Every normal formula is the corresponding tangent formula with the slope negated and inverted.`,
          },
          {
            f: 'Circle',
            note: `the normal is the radius produced: it always passes through the centre (−<i>g</i>,${NB}−<i>f</i>). For ${X2} + ${Y2} = ${R2} the normal at ${P11} is ${N_CIRC}.`,
          },
          {
            f: `Parabola ${PARA}`,
            note: `normal at ${P11} is ${N_PAR_PT}; at ${PT} it is ${N_PAR_T} (slope −${t}); slope form ${N_PAR_M} with foot ${FOOT}.`,
          },
          {
            f: 'Parabola extras',
            note: `three normals from (${h},${NB}${k}) satisfy ${CUBIC}, hence ${CONORM_T}; the normal at ${t1} meets the curve again at ${AGAIN}, and |${t2}| ≥ 2√2.`,
          },
          {
            f: 'Ellipse',
            note: `normal at ${P11} is ${N_ELL}; parametrically ${N_ELL_TH}; slope form ${N_ELL_M}.`,
          },
          {
            f: 'Hyperbola',
            note: `normal at ${P11} is ${N_HYP}; parametrically ${N_HYP_TH}; slope form ${N_HYP_M}. For <i>xy</i> = ${C2} at ${CT}: ${N_RECT}.`,
          },
          {
            f: 'Reflection',
            note: `parabola: parallel rays reflect through the focus; ellipse: the <b>normal</b> bisects ${SPS}, so focus reflects to focus; hyperbola: the <b>tangent</b> bisects ${SPS}.`,
          },
        ],
        aids: [
          '“Tangent two terms, normal three.”',
          '“Circle normal? Head for the centre.”',
          '“Ellipse minus-minus, hyperbola plus-plus.”',
          '“Check the foot twice: in the curve and in the line.”',
        ],
      },
    ],
  },

  // ──────────────── Topic 09 · pp. 974–986 ────────────────
  {
    n: '09',
    title: 'Applied Problems: Conics in the Real World',
    kalam: 'Every conic in this chapter so far has arrived pre-packaged: centre at the origin, axes along the coordinate axes, equation already in standard form.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `The reflector, the archway and the cable are NCERT Miscellaneous Example and Miscellaneous Exercise problems (the cooling tower is not in NCERT), and CBSE Boards ask one such problem at 3–4 marks with high reliability: the parabolic reflector, the semi-elliptical archway, the suspension-bridge cable and the hyperbolic cooling tower rotate between papers year after year ${ESTIMATE}. JEE Main occasionally dresses a standard-form question in the same clothing to test whether you can set up axes under pressure ${ESTIMATE}. This is an applications unit, so it carries only the intuition, the worked examples, the practice set and the cheat sheet: every formula it uses has already been established in <b>The Parabola</b>, <b>The Ellipse</b> and <b>The Hyperbola</b>.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Every conic in this chapter so far has arrived pre-packaged: centre at the origin, axes along the coordinate axes, equation already in standard form. Real objects do not arrive that way. A dish antenna arrives as “60 cm across and 15 cm deep”. An archway arrives as “8 m wide and 2 m high”. A cooling tower arrives as three diameters and two heights. <b>The entire difficulty of an applied conic problem is the first line of your solution, where you choose to put the origin, and once that choice is made well, the rest is arithmetic you have already mastered.</b>',
      },
      {
        t: 'p',
        html: 'Think about it this way… you are photographing the arch of a Metro viaduct and you want the shot dead centre. You do not move the arch. You move yourself until the arch is symmetric in your frame. Choosing axes is exactly that: you cannot change the object, so you place your coordinate frame where the object’s own symmetry already lives. Put the origin at the feature the curve is symmetric about (the vertex of a parabola, the centre of an ellipse or a hyperbola) and every awkward number in the problem turns into a coordinate you can substitute.',
      },
      { t: 'p', html: 'Three habits carry every problem in this unit.' },
      {
        t: 'p',
        html: '<b>Habit one: the origin goes at the vertex or the centre, never at ground level unless they coincide.</b> For a parabolic dish, the origin is the bottom of the bowl. For a suspension cable, the origin is the lowest point of the cable, which is usually above the roadway, and forgetting that gap is the single most common error in the whole topic. For an archway, the origin is the centre of the full ellipse, which sits on the ground because the arch is a semi-ellipse. For a cooling tower, the origin is the throat (the narrowest ring), which is usually well above the base.',
      },
      {
        t: 'p',
        html: '<b>Habit two: translate each given measurement into one coordinate of one point.</b> A “diameter” or a “width” is twice a coordinate whenever your chosen axis is the figure’s axis of symmetry. A “depth” or a “height above the throat” is the other coordinate, and it may be negative. Two numbers make one point, and one point on the curve is exactly what you need to pin down the last unknown constant.',
      },
      {
        t: 'p',
        html: `<b>Habit three: solve for the missing constant first, then answer the question.</b> Almost every problem here has the same skeleton: the shape fixes the standard form, one given point fixes 4${a} or ${B2}, and only then does the actual question get answered by substituting a second value.`,
      },
      {
        t: 'p',
        html: 'Where the modelling stops being exact is worth saying plainly. A real suspension cable carrying only its own weight hangs in a catenary, not a parabola; it becomes a parabola only when the load is uniform along the horizontal roadway, which is why NCERT is careful to say “uniformly loaded”. A real cooling tower is a hyperboloid, a three-dimensional surface, and what you model is its vertical cross-section through the axis, which is a hyperbola. A real dish is a paraboloid, and again you model the cross-section. In every case you are working with a two-dimensional slice of a three-dimensional object, and the slice is the conic.',
      },
      { t: 'fig', id: 'm11-10-fig-10.10' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level · The parabolic reflector',
        fig: 'm11-10-fig-10.11',
        q: 'A parabolic reflector for a solar cooker is 20 cm across at the rim and 5 cm deep at its centre.<br>(a) Find the position of its focus, so that the cooking vessel can be placed there.<br>(b) A larger reflector is manufactured with the same focal length but made 45 cm deep. Find the diameter of its rim.',
        steps: [
          `<b>Setting up.</b> Place the origin at the <b>vertex</b>, the deepest point of the bowl, with the axis of the reflector along the positive ${x}-axis. Since the reflector opens to the right and is symmetric about the ${x}-axis, its cross-section is<br>${PARA}.`,
          `<b>(a)</b> “20 cm across at the rim” means the rim has diameter 20, so its half-width is ${y} = 10. “5 cm deep” means the rim sits at ${x} = 5. So the point (5, 10) lies on the parabola:<br>10<sup>2</sup> = 4${a}(5) ⟹ 100 = 20${a} ⟹ ${a} = 5.`,
          `The focus of ${PARA} is at (${a},${NB}0), so the focus is <b>5 cm from the vertex, along the axis of the reflector</b>. The cross-section is ${Y2} = 20${x}.`,
          `Worth noticing: the focus is at ${x} = 5, exactly the depth of the rim, so the cooking vessel sits level with the rim of this particular dish. That is a coincidence of these numbers, not a general rule.`,
          `<b>(b)</b> Same focal length means the same ${a} = 5, so the same equation ${Y2} = 20${x}. Now the depth is 45 cm, so put ${x} = 45:<br>${Y2} = 20(45) = 900 ⟹ ${y} = ±30.`,
          'The rim runs from (45, −30) to (45, 30), so its diameter is<br>30 − (−30) = 60 cm.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level · The semi-elliptical archway',
        fig: 'm11-10-fig-10.12',
        q: 'An arch is in the form of a semi-ellipse. It is 8 m wide at the base and 2 m high at the centre. Find the height of the arch at a point 1.5 m from one end of the base.',
        steps: [
          `<b>Setting up.</b> The arch is the upper half of a full ellipse. Place the origin at the <b>centre of the base</b>, with the base along the ${x}-axis. Then the semi-major axis lies along ${x} and the semi-minor axis along ${y}:<br>${ELL}, ${Y_GE0}.`,
          `“8 m wide” is the full major axis, so 2${a} = 8 and ${a} = 4. “2 m high at the centre” is the semi-minor axis, so ${b} = 2. The arch is<br>${ELL_16_4}, ${Y_GE0}.`,
          `<b>Locating the point.</b> The base runs from ${x} = −4 to ${x} = 4. A point 1.5 m from one end is at distance 4 − 1.5 = 2.5 m from the centre, so ${x} = 2.5. (Taking the other end gives ${x} = −2.5, and by symmetry the same height.)`,
          `<b>Computing the height.</b><br>${fr('(2.5)<sup>2</sup>', '16')}${NB}+${NB}${fr(Y2, '4')}${NB}=${NB}1<br><br>⟹ ${fr('6.25', '16')}${NB}+${NB}${fr(Y2, '4')}${NB}=${NB}1.`,
          `Multiply throughout by 16:<br>6.25 + 4${Y2} = 16 ⟹ 4${Y2} = 9.75<br>⟹ ${Y2} = 2.4375 = ${fr('39', '16')}.<br><br>${y} = ${fr('√39', '4')} ≈ 1.56 m.`,
          'The positive root is taken because the arch is the upper half.',
          `<b>Sanity check.</b> The answer must lie strictly between 0 (at the ends) and 2 (at the centre), and it must be closer to 2 than to 0 because ${x} = 2.5 is nearer the centre than the end. The value 1.56 m satisfies both.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap · The suspension-bridge cable',
        fig: 'm11-10-fig-10.13',
        q: 'The cable of a uniformly loaded suspension bridge hangs in the form of a parabola. The roadway, which is horizontal and 100 m long, is supported by vertical wires attached to the cable; the longest wire is 30 m and the shortest is 6 m. Find the length of the supporting wire attached to the roadway 18 m from the middle.',
        steps: [
          `<b>Setting up.</b> The cable is symmetric about the mid-span, and its lowest point is where the shortest wire meets it. Place the origin at that <b>lowest point of the cable</b>, with the ${y}-axis vertical. Opening upwards:<br>${X2} = 4<i>ay</i>.`,
          `<b>Translating the data.</b> The roadway is 100 m long, so the towers stand at ${x} = ±50. The longest wires are the ones at the towers, of length 30 m, and the shortest is 6 m at the middle. The origin sits 6 m above the roadway, so the height of the cable <b>above the origin</b> at a tower is<br>30 − 6 = 24 m.`,
          `Hence (50, 24) lies on the parabola:<br>50<sup>2</sup> = 4${a}(24) ⟹ 2500 = 96${a}<br><br>⟹ 4${a} = ${fr('2500', '24')} = ${fr('625', '6')}.`,
          `The cable is ${X2} = ${fr('625', '6')}${y}.`,
          `<b>Answering the question.</b> A wire 18 m from the middle is at ${x} = 18:<br><br>18<sup>2</sup> = ${fr('625', '6')}${y} ⟹ 324 = ${fr('625', '6')}${y}<br><br>⟹ ${y} = ${fr('6 × 324', '625')} = ${fr('1944', '625')} = 3.1104 m.`,
          `<b>The trap: reporting ${y} as the wire length.</b> The seductive answer is 3.11 m. It is the height of the cable above the origin, and the origin is not the roadway: it is 6 m above the roadway, because that is what “shortest wire = 6 m” means. Every wire is measured from the roadway, so<br>wire length = 6 + ${y} = 6 + 3.1104<br>= 9.1104 ≈ 9.11 m.`,
          '<b>Why 3.11 m is impossible on inspection.</b> The shortest wire in the whole bridge is 6 m. No wire can be shorter than that, so any answer below 6 is wrong before you check the arithmetic. Building that reflex (compare your answer against the stated extremes) costs nothing and catches this trap every time.',
          `<b>Second trap, worth naming.</b> “18 m from the middle” is not “18 m from the end”. A student who sets ${x} = 50 − 18 = 32 obtains ${y} = ${fr('6 × 1024', '625')} = 9.8304 and a wire of 15.83 m, a plausible-looking number that answers a different question. Read the phrase, then mark the point on your sketch before substituting.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level · The hyperbolic cooling tower',
        fig: 'm11-10-fig-10.14',
        q: 'A cooling tower at a power plant has the shape of a hyperboloid: every vertical cross-section through its axis is a hyperbola. The tower is 150 m tall. Its base diameter is 100 m, and its narrowest cross-section, the throat, has diameter 60 m and occurs 100 m above the base. Find the diameter of the tower at the top.',
        steps: [
          `<b>Setting up.</b> Place the origin at the <b>centre of the throat</b>, with the ${y}-axis vertical along the tower’s axis. The throat is the narrowest ring, which is exactly where the two vertices of the hyperbola sit, so the transverse axis is horizontal and the cross-section is<br>${HYP}.`,
          `<b>Reading off ${a}.</b> The throat has diameter 60 m, so its radius is 30 m and<br>${a} = 30, ${A2} = 900.`,
          `<b>Finding ${b} from the base.</b> The base is 100 m below the throat, so it sits at ${y} = −100. Its diameter is 100 m, so its radius is 50 m, giving the point (50, −100) on the hyperbola:<br><br>${fr('50<sup>2</sup>', '900')}${NB}−${NB}${fr('(−100)<sup>2</sup>', B2)}${NB}=${NB}1<br><br>⟹ ${fr('2500', '900')}${NB}−${NB}${fr('10000', B2)}${NB}=${NB}1.`,
          `${fr('10000', B2)} = ${fr('2500', '900')} − 1<br><br>= ${fr('2500 − 900', '900')} = ${fr('1600', '900')} = ${fr('16', '9')}.<br><br>${B2} = 10000 × ${fr('9', '16')} = 5625 ⟹ ${b} = 75.`,
          `So the modelling hyperbola is<br>${HYP_TOWER}.`,
          `<b>Finding the top.</b> The tower is 150 m tall and the throat is 100 m above the base, so the top is 150 − 100 = 50 m <b>above</b> the throat, at ${y} = 50:<br><br>${fr(X2, '900')}${NB}−${NB}${fr('50<sup>2</sup>', '5625')}${NB}=${NB}1<br><br>⟹ ${fr(X2, '900')} = 1 + ${fr('2500', '5625')}<br><br>= 1 + ${fr('4', '9')} = ${fr('13', '9')}.<br><br>${X2} = 900 × ${fr('13', '9')} = 1300<br>⟹ ${x} = 10√13 ≈ 36.06 m.`,
          'That is the radius, so the diameter of the top is<br>2 × 10√13 = 20√13 ≈ 72.11 m.',
          '<b>Sanity checks.</b> The throat must be the narrowest section: 60 < 72.11 < 100, so the top is wider than the throat and narrower than the base, which is exactly the silhouette of a real cooling tower. And the top is 50 m from the throat while the base is 100 m from it, so the top should flare out less than the base does: it flares by 12.11 m of diameter against the base’s 40 m, consistent with the wall leaning outwards more and more the farther it is from the throat.',
          `<b>Why it is “Advanced”.</b> Three things have to be got right simultaneously, and each one is a separate decision. First, recognising that the throat, not the base and not the mid-height, is where the vertices are, which is what makes the transverse axis horizontal and the origin sit 100 m up in the air. Second, handling the <b>signed</b> height: the base is at ${y} = −100, and although ${y} is squared here, a student who places the origin at the base instead gets the shifted equation ${fr(X2, A2)}${NB}−${NB}${fr('(<i>y</i> − 100)<sup>2</sup>', B2)}${NB}=${NB}1, not the standard form. Third, remembering throughout that every stated diameter is twice a coordinate. There is no new formula in this problem: only three modelling judgements stacked on top of the standard hyperbola.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A parabolic solar cooker is 40 cm wide at the rim and 10 cm deep. Where should the cooking vessel be placed?',
            a: `Vertex at the origin, ${PARA}; the rim point is (10, 20), so 400 = 40${a} and ${a} = 10: the vessel goes at the focus, 10 cm from the vertex along the axis.`,
          },
          {
            q: `[CBSE] A satellite dish is 8 m across at the rim and 1 m deep at its centre. Find the equation of its cross-section (vertex at the origin, axis along the ${x}-axis) and the position of the receiver.`,
            a: `The rim point is (1, 4), so 16 = 4${a}(1), giving 4${a} = 16 and ${a} = 4; the cross-section is ${Y2} = 16${x} and the receiver sits at the focus (4, 0), i.e. 4 m from the vertex on the axis.`,
          },
          {
            q: '[CBSE] A semi-elliptical archway over a road is 10 m wide at the base and 4 m high at the centre. Find the height of the arch at a point 2.5 m from the centre.',
            a: `${a} = 5, ${b} = 4, so ${fr('6.25', '25')}${NB}+${NB}${fr(Y2, '16')}${NB}=${NB}1, giving ${fr(Y2, '16')} = ${fr('3', '4')}, ${Y2} = 12 and ${y} = 2√3 ≈ 3.46 m.`,
          },
          {
            q: '[JEE Main] A whispering gallery is an elliptical hall 100 m long and 50 m wide at its widest. Two people wishing to whisper to each other should stand at the foci. How far from the centre is each focus, and how far apart are the two people?',
            a: `${a} = 50, ${b} = 25, so ${C2} = 2500 − 625 = 1875 and ${c} = 25√3 ≈ 43.30 m from the centre; the two people stand 2${c} = 50√3 ≈ 86.60 m apart.`,
          },
          {
            q: '[JEE Main] A uniformly loaded suspension bridge has a span of 40 m, its towers rise 10 m above the roadway, and the cable just touches the roadway at the mid-point. Find the length of the supporting wire 10 m from the middle.',
            a: `Origin at the lowest point of the cable, which is on the roadway here, so ${X2} = 4<i>ay</i> through (20, 10) gives 4${a} = 40; at ${x} = 10, ${y} = ${fr('100', '40')} = 2.5 m.`,
          },
          {
            q: '[JEE Main] A parabolic arch bridge has a span of 20 m and a maximum height of 5 m at the centre. Find the height of the arch at a point 4 m from one end.',
            a: `Origin at the centre of the base, apex at (0, 5), parabola opening downwards: ${X2} = −4${a}(${y} − 5) through (10, 0) gives 4${a} = 20, so ${X2} = −20(${y} − 5); a point 4 m from one end is at ${x} = −6, giving 36 = −20(${y} − 5), ${y} − 5 = −1.8 and ${y} = 3.2 m.`,
          },
          {
            q: `[JEE Advanced] A cooling tower is 120 m tall. Its base diameter is 100 m and its throat, of diameter 60 m, lies 80 m above the base. Find ${b} for the modelling hyperbola, and hence the diameter of the tower at a height of 20 m above the base.`,
            a: `${a} = 30; the base point is (50, −80), so ${fr('2500', '900')}${NB}−${NB}${fr('6400', B2)}${NB}=${NB}1 gives ${fr('6400', B2)} = ${fr('16', '9')}, hence ${B2} = 3600 and ${b} = 60. At a height of 20 m above the base, ${y} = 20 − 80 = −60, so<br><br>${fr(X2, '900')} = 1 + ${fr('3600', '3600')} = 2,<br><br>giving ${x} = 30√2 and a diameter of 60√2 ≈ 84.85 m.`,
          },
          {
            q: `[JEE Advanced] A planet moves in an elliptical orbit with the Sun at one focus. Its nearest distance to the Sun is 2 astronomical units and its farthest distance is 6 astronomical units. Find the semi-major axis, the eccentricity, and the equation of the orbit referred to its centre with the major axis along the ${x}-axis.`,
            a: `Nearest = ${a} − ${c} = 2 and farthest = ${a} + ${c} = 6, so ${a} = 4 and ${c} = 2; then ${e} = ${fr(c, a)} = ${HALF} and ${B2} = ${A2} − ${C2} = 16 − 4 = 12, giving ${fr(X2, '16')}${NB}+${NB}${fr(Y2, '12')}${NB}=${NB}1.`,
          },
        ],
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'The modelling recipe',
            note: '(1) put the origin on the curve’s own symmetry feature; (2) turn every given measurement into a coordinate, remembering that a diameter or width is twice a coordinate; (3) use one point to solve for the unknown constant; (4) only then substitute to answer the actual question; (5) sanity-check the answer against the stated maxima and minima.',
          },
          {
            f: 'Parabolic reflector, dish, headlight, solar cooker',
            note: `origin at the <b>vertex</b>, axis along the ${x}-axis, ${PARA}. Rim point = (depth, ${HALF} × diameter). The bulb, receiver or vessel goes at the focus (${a},${NB}0), at distance ${a} from the vertex.`,
          },
          {
            f: 'Semi-elliptical archway',
            note: `origin at the <b>centre of the base</b>, ${ELL} with ${Y_GE0}; ${a} = ${HALF} × width, ${b} = height at the centre. “Distance from one end” = half-width minus that distance, giving |${x}|.`,
          },
          {
            f: 'Suspension-bridge cable',
            note: `origin at the <b>lowest point of the cable</b>, ${X2} = 4<i>ay</i>; the towers give the point (${HALF} × span, longest wire − shortest wire). Wire length = shortest wire + ${y}. Never report ${y} alone.`,
          },
          {
            f: 'Whispering gallery / elliptical hall',
            note: `origin at the <b>centre</b>; ${a} = ${HALF} × length, ${b} = ${HALF} × width; the two listening points are the foci at (±${c},${NB}0) with ${c} = √(${A2} − ${B2}), a distance 2${c} apart.`,
          },
          {
            f: 'Hyperbolic cooling tower',
            note: `origin at the <b>throat centre</b>, ${HYP} with ${a} = ${HALF} × throat diameter. Base at negative ${y}, top at positive ${y}; find ${B2} from the base point, then substitute the top’s ${y}. Answers are radii: double them for diameters.`,
          },
          {
            f: 'Planetary orbit',
            note: `Sun at a focus; nearest distance = ${a} − ${c}, farthest = ${a} + ${c}, so ${a} = ${HALF}(near + far), ${c} = ${HALF}(far − near), ${e} = ${fr(c, a)}, ${B2} = ${A2} − ${C2}.`,
          },
          {
            f: 'Modelling limits',
            note: 'these are two-dimensional cross-sections of three-dimensional surfaces; a suspension cable is a parabola only under a uniform horizontal load, and a freely hanging cable is a catenary instead.',
          },
        ],
        aids: [
          '“Origin on the symmetry, always.”',
          '“Diameter is two coordinates, never one.”',
          '“The cable’s zero is not the roadway’s zero.”',
          '“Answer in radii, report in diameters.”',
        ],
      },
    ],
  },
];
