import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Topics 03–05, pp. 910–934 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word: the main chapter's
 * unnumbered sections "The Parabola" (pp. 910–917; Figure 10.3, caption
 * p. 912, drawing p. 913), "The Ellipse" (pp. 918–925; Figure 10.4, caption
 * p. 921, drawing p. 922) and "The Hyperbola" (pp. 926–934; Figure 10.5,
 * caption p. 929, drawing p. 930). The supplement starts on p. 935. Each
 * topic opens with its "Exam Relevance:" box as a part of its own, then is
 * split at its Sections 1 to 8; the "Cheat Sheet Box" is the part "Cheat
 * sheet". No unnumbered drawings on these pages. Every fraction is stacked
 * (<frac>); no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
/** A no-break space: keeps a short condition on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';
const I = (s: string) => `<i>${s}</i>`;
const sq = (s: string) => `√(${s})`;
const HALF = fr('1', '2');

const a = I('a');
const b = I('b');
const c = I('c');
const e = I('e');
const k = I('k');
const t = I('t');
const x = I('x');
const y = I('y');
const P = I('P');
const S = I('S');
const al = I('α');
const L = I('ℓ');
const X2 = `${x}<sup>2</sup>`;
const Y2 = `${y}<sup>2</sup>`;
const A2 = `${a}<sup>2</sup>`;
const B2 = `${b}<sup>2</sup>`;
const C2 = `${c}<sup>2</sup>`;
const E2 = `${e}<sup>2</sup>`;
const AE = '<i>ae</i>';
const EX = '<i>ex</i>';
const Sp = `${S}′`;
const SP = '<i>SP</i>';
const SQ = '<i>SQ</i>';
const SpP = `${Sp}${P}`;
const PS = '<i>PS</i>';
const PSp = `${PS}′`;
const SSp = '<i>SS</i>′';
const SB = '<i>SB</i>';
const SpB = `${Sp}<i>B</i>`;
const PXY = `${P}(${x},${NB}${y})`;
const t1 = `${t}<sub>1</sub>`;
const t2 = `${t}<sub>2</sub>`;
const t1s = `${t1}<sup>2</sup>`;
const t2s = `${t2}<sup>2</sup>`;
const x1 = `${x}<sub>1</sub>`;
const y1 = `${y}<sub>1</sub>`;
const lt = (l: string, r: string) => `${l}${NB}<${NB}${r}`;
const gt = (l: string, r: string) => `${l}${NB}>${NB}${r}`;
const eq = (l: string, r: string) => `${l}${NB}=${NB}${r}`;
const A_POS = gt(a, '0');
const E1 = eq(e, '1');
const E_LT1 = lt(e, '1');
const E_GT1 = gt(e, '1');
const E_BETWEEN = `0${NB}<${NB}${e}${NB}<${NB}1`;
const A_GT_B = gt(a, b);

// The parabola.
const PAR = `${Y2} = 4<i>ax</i>`;
const FOCAL_R = (n: string) => `${a}(1 + ${n})`;

// The ellipse and the hyperbola.
const ELL = `${fr(X2, A2)}${NB}+${NB}${fr(Y2, B2)}${NB}=${NB}1`;
const ELL_Y = `${fr(X2, B2)}${NB}+${NB}${fr(Y2, A2)}${NB}=${NB}1`;
const HYP = `${fr(X2, A2)}${NB}−${NB}${fr(Y2, B2)}${NB}=${NB}1`;
const HYP_Y = `${fr(Y2, A2)}${NB}−${NB}${fr(X2, B2)}${NB}=${NB}1`;
const LR = fr(`2${B2}`, a);
const BA = fr(b, a);
const AONE = fr(a, e);
const E_ELL = sq(`1 − ${fr(B2, A2)}`);
const E_HYP = sq(`1 + ${fr(B2, A2)}`);
const R_PLUS = sq(`(${x} + ${c})<sup>2</sup> + ${Y2}`);
const R_MINUS = sq(`(${x} − ${c})<sup>2</sup> + ${Y2}`);
const ASYM = `${y} = ±${BA}${x}`;
const DIR = `${x} = ±${AONE}`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 03 · pp. 910–917 ────────────────
  {
    n: '03',
    title: 'The Parabola',
    kalam: 'A parabola is the locus of a point that moves so that its distance from a fixed point (the focus S) equals its distance from a fixed line (the directrix).',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `CBSE Boards reliably ask 1–3 marks here ${ESTIMATE}: read a standard equation and report focus, axis, directrix, and latus rectum, or build the equation from given conditions. JEE Main carries 1–2 questions, usually standard-form manipulation plus the inside/outside test ${ESTIMATE}. JEE Advanced uses the parabola as a vehicle for focal-chord and reflection reasoning, often fused with another conic ${ESTIMATE}. It is also the curve behind every dish antenna and headlight you have ever seen.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Slice a cone with a plane and you get a curve. Tilt the plane gently and you get a closed loop: an ellipse. Tilt it more steeply and the loop bursts open into a sweeping U-shape that never closes. That exact borderline cut, the one made by a plane parallel to the slant side of the cone, is the <b>parabola</b>. It is the knife-edge case between “closed” and “doubly open,” and that in-between character is precisely what gives it its single, beautiful focusing property.',
      },
      {
        t: 'p',
        html: 'But you do not need a cone to define it. There is a cleaner way that an engineer or a student can actually use.',
      },
      {
        t: 'p',
        html: `Picture a long, straight boundary wall and a single flagpole planted some distance in front of it. Now ask: where can you stand so that your distance to the flagpole is exactly equal to your distance to the wall? Stand too close to the pole and the pole wins; drift toward the wall and the wall wins. There is a whole curving track of “fair” positions where the two distances stay perfectly balanced, and that track is a parabola. The flagpole is called the <b>focus</b> (${S}), the wall is the <b>directrix</b>, and the rule “distance to focus = distance to directrix” is the entire definition.`,
      },
      {
        t: 'p',
        html: `Think about it this way… imagine a tug-of-war refereed for fairness. The focus pulls you in by straight-line distance; the directrix pulls you in by perpendicular distance. The parabola is the locus of perfect ties. The ratio of those two distances is called the <b>eccentricity</b> ${e}, and for a parabola it is always exactly ${E1}: neither side ever gets an edge. (If the focus could win, ${E_LT1} and you would trace an ellipse; if the directrix could win, ${E_GT1} and you would get a hyperbola. The parabola lives exactly at ${E1}.)`,
      },
      {
        t: 'p',
        html: 'This single property is why parabolas run our daily technology. Your DTH dish, the Tata Play or Airtel dish bolted to a balcony, is a parabola spun into a bowl. Signals arriving parallel from a satellite all bounce off the dish and pile up at one point: the focus, where the receiver (LNB) sits. A solar cooker concentrates sunlight the same way. Run it in reverse and you get a car headlight or a torch: a bulb at the focus throws out a perfectly parallel beam. And the humble cricket ball, once it leaves the bat, traces a parabola through the air under gravity (very nearly: exactly, if air resistance is ignored). The curve is everywhere.',
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b><br>• <b>${E1} exactly.</b> The focus–directrix balance must be perfect. The moment the ratio drifts off 1, you no longer have a parabola.<br>• <b>Focus must not lie on the directrix.</b> If the flagpole stood inside the wall, the “curve” would collapse into a single straight line: a degenerate case, not a true parabola.<br>• <b>Standard equations assume a tidy frame.</b> The clean forms below all put the <b>vertex at the origin</b> and the <b>axis along a coordinate axis</b>. Shift or rotate the parabola and the equation grows extra terms; the geometry is identical, but the bookkeeping changes.<br>• <b>Four orientations only (in standard position):</b> opening right, left, up, or down, decided by where the focus sits relative to the vertex.`,
      },

      { t: 'part', title: 'Key definitions and formulas' },
      {
        t: 'p',
        html: `<b>Definition.</b> A parabola is the locus of a point that moves so that its distance from a fixed point (the <b>focus</b> ${S}) equals its distance from a fixed line (the <b>directrix</b>). Equivalently, eccentricity ${E1}.`,
      },
      {
        t: 'p',
        html: `<b>Key terms.</b> The <b>axis</b> is the line through the focus perpendicular to the directrix (the parabola’s line of symmetry). The <b>vertex</b> <i>A</i> is the point where the parabola meets its axis: the midpoint between focus and directrix. The <b>latus rectum</b> is the focal chord perpendicular to the axis; its length measures how “wide” the parabola opens.`,
      },
      {
        t: 'table',
        title: 'The four standard forms (vertex at origin O, a > 0)',
        head: ['Equation', 'Opens', 'Focus S', 'Directrix', 'Axis', 'Latus rectum length'],
        rows: [
          [PAR, 'right', `(${a},${NB}0)`, `${x} = −${a}`, `${x}-axis`, `4${a}`],
          [`${Y2} = −4<i>ax</i>`, 'left', `(−${a},${NB}0)`, `${x} = ${a}`, `${x}-axis`, `4${a}`],
          [`${X2} = 4<i>ay</i>`, 'up', `(0,${NB}${a})`, `${y} = −${a}`, `${y}-axis`, `4${a}`],
          [`${X2} = −4<i>ay</i>`, 'down', `(0,${NB}−${a})`, `${y} = ${a}`, `${y}-axis`, `4${a}`],
        ],
      },
      {
        t: 'p',
        html: `<b>Latus rectum endpoints</b> for ${PAR}: (${a},${NB}2${a}) and (${a},${NB}−2${a}).`,
      },
      {
        t: 'formula',
        kicker: 'Focal distance (parabola)',
        main: `of a point ${PXY} on ${PAR}:<br>${SP} = ${x} + ${a}`,
        legend: [`${SP} = the distance to the focus`, `${a} = the vertex-to-focus distance`],
        note: null,
      },
      {
        t: 'p',
        html: `(the distance to the focus equals the distance to the directrix ${x} = −${a}, which is ${x} + ${a}).`,
      },
      {
        t: 'formula',
        kicker: 'Parametric coordinates (parabola)',
        main: `of a point on ${PAR}:<br>${P} ≡ (<i>at</i><sup>2</sup>,${NB}2<i>at</i>), ${t} ∈ ℝ`,
        legend: [`${t} = the parameter (any real number)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Position of a point</b> (${x1},${NB}${y1}) relative to ${PAR}: it lies <b>outside / on / inside</b> according as ${y1}<sup>2</sup> − 4<i>a</i>${x1} is <b>positive / zero / negative</b>.`,
      },

      { t: 'part', title: 'CBSE board derivation' },
      {
        t: 'p',
        html: `<b>Deriving the standard equation ${PAR}.</b><br><b>Set up the frame so the algebra is kind to us.</b> Let the vertex sit at the origin <i>O</i>, and let the focus lie on the positive ${x}-axis at ${S}(${a},${NB}0), where ${A_POS}. Since the vertex is the midpoint of focus and directrix, the directrix must be the vertical line the same distance on the other side: ${x} = −${a}.`,
      },
      {
        t: 'p',
        html: `Now take an arbitrary point ${PXY} on the parabola. Drop a perpendicular from ${P} to the directrix, meeting it at <i>M</i>. The foot <i>M</i> has the same height as ${P} but sits on the line ${x} = −${a}, so <i>M</i> = (−${a},${NB}${y}).`,
      },
      {
        t: 'p',
        html: `The defining property says distance to focus equals distance to directrix:<br>${SP} = <i>PM</i><br>Write each distance. The distance from ${P} to the focus is<br>${SP} = ${sq(`(${x} − ${a})<sup>2</sup> + (${y} − 0)<sup>2</sup>`)}.<br>The distance from ${P} to the directrix is just the horizontal gap to the line ${x} = −${a}:<br><i>PM</i> = |${x} + ${a}|.`,
      },
      {
        t: 'p',
        html: `<b>Why we square next:</b> both sides are non-negative distances, so squaring is reversible and clears the square root and the modulus in one move without introducing false solutions:<br>(${x} − ${a})<sup>2</sup> + ${Y2} = (${x} + ${a})<sup>2</sup>.<br>Expand both squares; the trick is that the ${X2} and ${A2} terms are identical on both sides and will cancel, leaving only the cross terms:<br>${X2} − 2<i>ax</i> + ${A2} + ${Y2}<br>= ${X2} + 2<i>ax</i> + ${A2}.<br>Cancel ${X2} and ${A2}:<br>${Y2} − 2<i>ax</i> = 2<i>ax</i> ⟹ ${PAR}.`,
      },
      {
        t: 'p',
        html: `The cancellation is the whole story: the squared terms that make the distance formulas messy are exactly the ones that vanish, and what survives is the clean relation between ${Y2} and ${x}. The other three standard forms come from the same derivation with the focus placed on the negative ${x}-axis, or on the ${y}-axis up or down.`,
      },
      {
        t: 'p',
        html: `<b>Deriving the length of the latus rectum.</b><br>The latus rectum is the chord through the focus perpendicular to the axis, so it lies along the vertical line ${x} = ${a}. Substitute ${x} = ${a} into ${PAR}:<br>${Y2} = 4${a}(${a}) = 4${A2} ⟹ ${y} = ±2${a}.<br>The chord runs from (${a},${NB}2${a}) to (${a},${NB}−2${a}), so its length is<br>Latus rectum = 2${a} − (−2${a}) = 4${a}.`,
      },
      {
        t: 'p',
        html: `This is why the coefficient 4${a} is so useful: it is the latus rectum, a direct measure of how wide the parabola opens. A large 4${a} means a broad, lazy curve; a small 4${a} means a tight, narrow one.`,
      },
      { t: 'fig', id: 'm11-10-fig-10.3' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: `For the parabola ${Y2} = −12${x}, find the vertex, focus, axis, equation of the directrix, and the length of the latus rectum.`,
        steps: [
          `<b>Given:</b> ${Y2} = −12${x}. Comparing with the standard left-opening form ${Y2} = −4<i>ax</i>:<br>4${a} = 12 ⇒ ${a} = 3.`,
          `Since ${y} is squared and the sign is negative, the parabola opens <b>left</b> along the ${x}-axis.`,
          `• Vertex: (0, 0)<br>• Focus: (−${a},${NB}0) = (−3, 0)<br>• Axis: the ${x}-axis, i.e. ${y} = 0<br>• Directrix: ${x} = ${a} = 3<br>• Latus rectum: 4${a} = 12 units`,
          'Clean presentation, correct sign, units stated.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main, quick-elimination',
        q: `Find the equation of the parabola with focus (0, −3) and directrix ${y} = 3.`,
        steps: [
          `Read the geometry before computing. The focus is on the <b>${y}-axis below the origin</b>, and the directrix is the horizontal line above it. The vertex is the midpoint of focus and directrix (the origin), and the curve must open <b>downward</b> (away from the directrix, toward the focus). So the form is ${X2} = −4<i>ay</i>.`,
          `The focus is at distance ${a} = 3 from the vertex, so 4${a} = 12:<br>${X2} = −12${y}.`,
          `<b>Speed note:</b> you never needed the distance formula. Focus-below + directrix-above ⇒ opens down ⇒ ${X2} = −4<i>ay</i>; then ${a} = vertex-to-focus distance. Two seconds.`,
        ],
        ans: `${X2} = −12${y}.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main, multi-concept',
        q: `A parabola with vertex at the origin and axis along the ${y}-axis passes through (8, 4) and opens upward. Find its equation, the focal distance of the point (8, 4), and determine whether the point (3, 1) lies inside or outside the parabola.`,
        steps: [
          `Upward, axis along ${y}: form ${X2} = 4<i>ay</i>. It passes through (8, 4):<br>8<sup>2</sup> = 4${a}(4) ⇒ 64 = 16${a} ⇒ ${a} = 4.`,
          `So the parabola is ${X2} = 16${y}, with focus (0, 4) and directrix ${y} = −4.`,
          `<b>Focal distance</b> of (8, 4): for ${X2} = 4<i>ay</i>, the focal distance equals distance to the directrix ${y} = −${a}, i.e. ${y} + ${a} = 4 + 4 = 8 units.`,
          `<b>Position of (3, 1):</b> the inside/outside test for ${X2} = 4<i>ay</i> uses the sign of ${x1}<sup>2</sup> − 4<i>a</i>${y1}:<br>3<sup>2</sup> − 16(1) = 9 − 16 = −7 < 0.`,
          'A negative value means the point lies <b>inside</b> the parabola.',
          '<b>Concept link:</b> one problem chains standard-form fitting, the focal-distance shortcut, and the position test: three ideas, one curve.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `<i>PQ</i> is a focal chord of the parabola ${PAR}. Prove the harmonic property ${fr('1', SP)} + ${fr('1', SQ)} = ${fr('1', a)}, and use it to find the full length of a focal chord whose longer end satisfies ${SP} = 3${a}.`,
        steps: [
          `<b>Proof.</b> Let the ends be ${P}(<i>a</i>${t1s},${NB}2<i>a</i>${t1}) and <i>Q</i>(<i>a</i>${t2s},${NB}2<i>a</i>${t2}). A standard parametric result (provable by collinearity of ${P}, <i>Q</i>, ${S}(${a},${NB}0)) gives the focal-chord condition<br>${t1}${t2} = −1.`,
          `The focal distance of a parametric point is ${SP} = ${x} + ${a} = <i>a</i>${t1s} + ${a} = ${FOCAL_R(t1s)}, and likewise ${SQ} = ${FOCAL_R(t2s)}. Then<br>${fr('1', SP)} + ${fr('1', SQ)}<br><br>= ${fr('1', FOCAL_R(t1s))} + ${fr('1', FOCAL_R(t2s))}.`,
          `Substitute ${t2} = −${fr('1', t1)}, so ${t2s} = ${fr('1', t1s)}<br><br>and 1 + ${t2s} = ${fr(`${t1s} + 1`, t1s)}. Therefore<br><br>${fr('1', SQ)} = ${fr('1', a)} · ${fr(t1s, `1 + ${t1s}`)}.`,
          `Adding,<br>${fr('1', SP)} + ${fr('1', SQ)}<br><br>= ${fr('1', FOCAL_R(t1s))} + ${fr(t1s, FOCAL_R(t1s))}<br><br>= ${fr(`1 + ${t1s}`, FOCAL_R(t1s))} = ${fr('1', a)}. ■`,
          `The result is striking: the semi-latus rectum 2${a} is the harmonic mean of the two focal radii.`,
          `<b>Application.</b> With ${SP} = 3${a}:<br>${fr('1', `3${a}`)} + ${fr('1', SQ)} = ${fr('1', a)}<br><br>⇒ ${fr('1', SQ)} = ${fr('1', a)} − ${fr('1', `3${a}`)} = ${fr('2', `3${a}`)}<br><br>⇒ ${SQ} = ${fr(`3${a}`, '2')}.`,
          `Full chord length:<br><i>PQ</i> = ${SP} + ${SQ} = 3${a} + ${fr(`3${a}`, '2')} = ${fr(`9${a}`, '2')}.`,
          `<b>Why it is “Advanced”:</b> it rewards seeing that everything reduces to focal distances and the single condition ${t1}${t2} = −1: no tangent or normal machinery, just the definition pushed hard.`,
        ],
        ans: fr(`9${a}`, '2'),
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE] Find the focus, axis, directrix, and latus rectum of ${X2} = 20${y}.`,
            a: `Focus (0, 5); axis ${x} = 0; directrix ${y} = −5; latus rectum 20.`,
          },
          {
            q: `[JEE Main] Find the equation of the parabola with vertex at the origin, axis along the ${x}-axis, passing through (2, −6).`,
            a: `${Y2} = 18${x}.`,
          },
          {
            q: '[JEE Main] The focus of a parabola is (−4, 0) and its vertex is the origin. Write its equation and the equation of its directrix.',
            a: `${Y2} = −16${x}; directrix ${x} = 4.`,
          },
          {
            q: `[JEE Main] Determine whether the point (2, 5) lies inside, on, or outside the parabola ${Y2} = 8${x}, and find the focal distance of the point (2, 4) on it.`,
            a: `25 − 16 = 9 > 0 ⇒ outside; focal distance of (2, 4) is ${x} + ${a} = 2 + 2 = 4.`,
          },
          {
            q: `[JEE Advanced] A focal chord of ${Y2} = 12${x} has one end at the point with parameter ${t} = 2. Find the coordinates of both ends and the length of the chord.`,
            a: `Here 4${a} = 12 ⇒ ${a} = 3; ends (12, 12) at ${t} = 2 and (${fr('3', '4')}, −3) at ${t} = −${HALF};<br><br>chord length = ${SP} + ${SQ} = ${FOCAL_R(t1s)} + ${FOCAL_R(t2s)}<br>= 3(5) + 3(${fr('5', '4')})<br><br>= 15 + 3.75 = 18.75 = ${fr('75', '4')}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The length of the latus rectum of the parabola ${Y2} = 7${x} is`,
        opts: [
          { label: '7', nudge: null },
          {
            label: fr('7', '4'),
            nudge: `<b>Trap (B):</b> student computes ${a} = ${fr('7', '4')} and reports ${a} instead of 4${a}: the classic “${a} vs 4${a}” slip.`,
          },
          { label: '28', nudge: `<b>Trap (C):</b> multiplying 4${a} by 4 again.` },
          { label: fr('7', '2'), nudge: `<b>Trap (D):</b> halving by mistake, perhaps confusing with the semi-latus rectum 2${a}.` },
        ],
        correct: 0,
        solution: `Here 4${a} = 7, and the latus rectum equals the coefficient 4${a} directly, so it is 7.`,
      },
      {
        t: 'mcq',
        q: `The focus of the parabola ${X2} = −16${y} is`,
        opts: [
          { label: '(0, 4)', nudge: '<b>Trap (A):</b> ignoring the negative sign and placing the focus above.' },
          { label: '(0, −4)', nudge: null },
          {
            label: '(4, 0)',
            nudge: `<b>Trap (C)</b>, <b>(D)</b>: putting the focus on the ${x}-axis, confusing ${X2} = … (axis along ${y}) with ${Y2} = … (axis along ${x}).`,
          },
          {
            label: '(−4, 0)',
            nudge: `<b>Trap (C)</b>, <b>(D)</b>: putting the focus on the ${x}-axis, confusing ${X2} = … (axis along ${y}) with ${Y2} = … (axis along ${x}).`,
          },
        ],
        correct: 1,
        solution: `${x} is squared with a negative sign, so the parabola opens downward along the ${y}-axis with 4${a} = 16 ⇒ ${a} = 4; the focus is (0,${NB}−${a}) = (0, −4).`,
      },
      {
        t: 'mcq',
        q: `If the point (${k},${NB}4) lies on the parabola ${Y2} = 8${x}, then its focal distance is`,
        opts: [
          { label: '2', nudge: `<b>Trap (A):</b> reporting ${a} alone.` },
          { label: '4', nudge: null },
          { label: '6', nudge: `<b>Trap (C):</b> adding 2${a} instead of ${a} (2 + 4).` },
          { label: '8', nudge: `<b>Trap (D):</b> reporting the latus rectum 4${a} = 8 instead of the focal distance ${x} + ${a}.` },
        ],
        correct: 1,
        solution: `From ${Y2} = 8${x}: 16 = 8${k} ⇒ ${k} = 2, and 4${a} = 8 ⇒ ${a} = 2. Focal distance = ${x} + ${a} = 2 + 2 = 4.`,
      },
      {
        t: 'mcq',
        q: `The equation of the directrix of the parabola ${Y2} = −4<i>ax</i> (with ${A_POS}) is`,
        opts: [
          {
            label: `${x} = −${a}`,
            nudge: '<b>Trap (A):</b> placing the directrix on the same side as the focus: directrix and focus always straddle the vertex.',
          },
          { label: `${x} = ${a}`, nudge: null },
          { label: `${y} = ${a}`, nudge: `<b>Trap (C)</b>, <b>(D)</b>: writing a horizontal directrix, which would belong to a ${y}-axis parabola.` },
          { label: `${y} = −${a}`, nudge: `<b>Trap (C)</b>, <b>(D)</b>: writing a horizontal directrix, which would belong to a ${y}-axis parabola.` },
        ],
        correct: 1,
        solution: `This parabola opens left with focus (−${a},${NB}0), so the directrix is the vertical line on the opposite side of the vertex: ${x} = ${a}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>The “${a} versus 4${a}” disaster.</b> The coefficient in ${PAR} is 4${a}, not ${a}. The focus sits at distance ${a} (coefficient ÷4), while the latus rectum is the coefficient 4${a}. Mixing these up is the single biggest mark-loser in this entire topic.`,
          `<b>Putting the directrix on the wrong side.</b> The focus and directrix always sit on opposite sides of the vertex, each at distance ${a}. If your focus is at (${a},${NB}0), the directrix cannot be ${x} = ${a}: it must be ${x} = −${a}.`,
          `<b>Swapping the axis of symmetry.</b> ${PAR} (${y} squared) opens along the ${x}-axis; ${X2} = 4<i>ay</i> (${x} squared) opens along the ${y}-axis. Read which variable is squared first.`,
          '<b>Forgetting the sign sets the direction.</b> A minus sign flips the opening (left or down). Decide the direction from the sign before placing focus and directrix.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip.</b> Build a three-line reflex for any standard parabola: (1) the <b>un-squared</b> variable names the axis it opens along; (2) <b>coefficient</b> ÷4 = ${a} gives the focus/directrix distance; (3) the <b>coefficient itself = latus rectum</b>. With those three, you can read off every feature in under ten seconds: no derivation required in the exam hall.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Definition', note: `distance to focus = distance to directrix; eccentricity ${E1}.` },
          {
            f: 'Standard forms (vertex at origin)',
            note: `${Y2} = ±4<i>ax</i> (axis = ${x}-axis), ${X2} = ±4<i>ay</i> (axis = ${y}-axis); the +/− sets the opening direction.`,
          },
          { f: `For ${PAR}`, note: `focus (${a},${NB}0), directrix ${x} = −${a}, latus rectum = 4${a}, endpoints (${a},${NB}±2${a}).` },
          { f: 'Focal distance', note: `${SP} = ${x} + ${a} (the un-squared coordinate plus ${a}).` },
          {
            f: 'Parametric',
            note: `(<i>at</i><sup>2</sup>,${NB}2<i>at</i>); focal chord ⇔ ${t1}${t2} = −1; harmonic property ${fr('1', SP)} + ${fr('1', SQ)} = ${fr('1', a)}.`,
          },
          { f: 'Position test', note: `sign of ${y1}<sup>2</sup> − 4<i>a</i>${x1} → + outside, 0 on, − inside.` },
        ],
        aids: [
          `“Coefficient over four is ${a}; the coefficient itself is the latus rectum.”`,
          '“The lonely variable points the way it opens.”',
          '“Focus and directrix straddle the vertex.”',
        ],
      },
    ],
  },

  // ──────────────── Topic 04 · pp. 918–925 ────────────────
  {
    n: '04',
    title: 'The Ellipse',
    kalam: 'The ellipse is what you get when a point moves so that the sum of its distances to two fixed points stays constant.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `CBSE Boards reliably ask 1–4 marks ${ESTIMATE}: read a standard equation for foci, axes, eccentricity, and latus rectum, or build the equation from given data; the focal-sum derivation is a frequent long-answer ${ESTIMATE}. JEE Main carries 1–2 questions, usually eccentricity and latus-rectum relationships ${ESTIMATE}. JEE Advanced fuses the ellipse with focal-distance and reflection reasoning. It is also the shape of every planetary orbit and every whispering gallery.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Take the parabola’s “one focus, one wall” rule and give it a second focus. The ellipse is what you get when a point moves so that the <b>sum</b> of its distances to two fixed points stays constant. Those two points are the <b>foci</b> (${S} and ${Sp}), and “sum of distances = constant” is the whole idea.`,
      },
      {
        t: 'p',
        html: `There is a famous way to draw one that every student should try once. Push two pins into a board, loop a single thread loosely around both, and pull the loop taut with a pencil tip. Now slide the pencil all the way around, keeping the thread tight. Because the thread length never changes, the two distances from the pencil to the pins must always add up to the same total, so the pencil traces a perfect ellipse. The pins are the foci; the thread length equals the constant sum 2${a} plus the distance between the pins.`,
      },
      {
        t: 'p',
        html: 'Think about it this way… imagine two friends standing apart in a maidan, each holding one end of a fixed-length rope, and you walk around keeping the rope just taut between you and both of them. Stand on their line, past one friend, and the rope lies straight (you are at an end of the long axis). Walk out to the side and the rope bends into a wide vee (you are near an end of the short axis). The path of “rope always taut” is the ellipse. The closer the two friends stand together, the rounder it gets; pull them far apart and it stretches into a long, flat oval. When they finally stand on the same spot (both foci merge), the ellipse becomes a perfect circle. <b>A circle is just an ellipse whose two foci have collapsed into one.</b>',
      },
      {
        t: 'p',
        html: `How squashed an ellipse is gets measured by its <b>eccentricity</b> ${e}, the same ${e} from the parabola, except now ${E_BETWEEN}. An ${e} near 0 is almost circular; an ${e} near 1 is long and cigar-shaped. (At ${E1} it would burst open into a parabola, which is exactly why the parabola sits at the boundary.)`,
      },
      {
        t: 'p',
        html: 'Ellipses run quietly through real life. Every planet, including ours, orbits the Sun on an ellipse with the Sun at one focus: Kepler’s first law. The “whispering galleries” in old domed halls work because a whisper at one focus reflects off the curved ceiling and reconvenes perfectly at the other focus. Lithotripsy machines that shatter kidney stones place the stone at one focus and the shock-wave source at the other. The shape is everywhere precision-focusing is needed between two points.',
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b><br>• <b>${E_BETWEEN}.</b> At ${eq(e, '0')} the ellipse is a circle; at ${E1} it is no longer an ellipse.<br>• <b>Constant sum must exceed the focal separation:</b> 2${a} > 2${c}, i.e. the rope must be longer than the gap between the pins. If the sum equalled the separation, the “ellipse” would collapse onto the line segment joining the foci.<br>• <b>Standard equations assume a tidy frame</b>: centre at the origin, axes along the coordinate axes. Off-centre or rotated ellipses are beyond the standard forms (NCERT Class 11 treats only the centred forms; an off-centre ellipse is brought to one by completing the square, and JEE asks this).<br>• <b>The foci always lie on the major (longer) axis</b>, never the minor one. Which axis is major is decided by which denominator is larger, not by habit.`,
      },

      { t: 'part', title: 'Key definitions and formulas' },
      {
        t: 'p',
        html: `<b>Definition.</b> An ellipse is the locus of a point the sum of whose distances from two fixed foci is constant (= 2${a}). Equivalently, focus–directrix form with eccentricity ${E_BETWEEN}.`,
      },
      {
        t: 'formula',
        kicker: 'Standard equation of the ellipse',
        main: `(centre at origin, major axis along ${x}-axis, ${a}${NB}>${NB}${b}${NB}>${NB}0):<br>${ELL}`,
        legend: [`${a} = the semi-major axis`, `${b} = half the minor axis`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'The defining relationships of the ellipse',
        main: `${c} = ${AE},<br>${C2} = ${A2} − ${B2},<br>${B2} = ${A2}(1 − ${E2}),<br>${e} = ${fr(c, a)} = ${E_ELL}`,
        legend: [`${a}, ${b} = the semi-axes (${a} > ${b})`, `${c} = the centre-to-focus distance`, `${e} = the eccentricity`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Key features of</b> ${ELL} <b>(with ${A_GT_B}):</b>`,
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Value'],
        rows: [
          ['Centre', '(0, 0)'],
          ['Vertices (major-axis ends)', `(±${a},${NB}0)`],
          ['Minor-axis ends', `(0,${NB}±${b})`],
          [`Foci ${S}, ${Sp}`, `(±${AE},${NB}0)`],
          ['Major / minor axis length', `2${a}, 2${b}`],
          ['Eccentricity', `${e} = ${E_ELL}`],
          ['Directrices', DIR],
          ['Latus rectum length', `${L} = ${LR}`],
          [`Focal radii of ${PXY}`, `${SP} = ${a} − ${EX}, ${SpP} = ${a} + ${EX}`],
        ],
      },
      {
        t: 'p',
        html: `<b>If the larger denominator is under ${Y2}</b> (that is ${ELL_Y} with ${A_GT_B}), then the major axis is the ${y}-axis, foci are (0,${NB}±${AE}), and directrices are ${y} = ±${AONE}. Everything else mirrors.`,
      },

      { t: 'part', title: 'CBSE board derivation' },
      {
        t: 'p',
        html: `<b>Deriving the standard equation</b> ${ELL}<b>.</b><br><b>Set up the frame.</b> Place the centre at the origin and the two foci symmetrically on the ${x}-axis at ${S}(${c},${NB}0) and ${Sp}(−${c},${NB}0). Let ${PXY} be any point on the ellipse, and let the constant sum of focal distances be 2${a} (we use 2${a} rather than a bare constant because it will turn out to be the major axis). The definition gives<br>${SP} + ${SpP} = 2${a}<br>⟹ ${R_MINUS} + ${R_PLUS}<br>= 2${a}.`,
      },
      {
        t: 'p',
        html: `<b>Isolate one radical before squaring</b>: squaring a sum of two radicals leaves a radical behind, so we move one across first:<br>${R_MINUS}<br>= 2${a} − ${R_PLUS}.<br>Square both sides:<br>(${x} − ${c})<sup>2</sup> + ${Y2}<br>= 4${A2} − 4${a}${R_PLUS} + (${x} + ${c})<sup>2</sup> + ${Y2}.`,
      },
      {
        t: 'p',
        html: `Expand the squared brackets and cancel the common ${X2} + ${C2} + ${Y2} on both sides. The cross terms −2<i>cx</i> and +2<i>cx</i> are what survive:<br>−2<i>cx</i><br>= 4${A2} − 4${a}${R_PLUS} + 2<i>cx</i>.<br>Rearrange to isolate the surviving radical:<br>4${a}${R_PLUS}<br>= 4${A2} + 4<i>cx</i><br><br>⟹ ${R_PLUS} = ${a} + ${fr('<i>cx</i>', a)}.`,
      },
      {
        t: 'p',
        html: `<b>Square once more</b> to clear the last radical:<br><br>(${x} + ${c})<sup>2</sup> + ${Y2}<br>= ${A2} + 2<i>cx</i> + ${fr(`${C2}${X2}`, A2)}.<br><br>Expand the left side, cancel the 2<i>cx</i> that appears on both sides, and group:<br><br>${X2} + ${C2} + ${Y2} = ${A2} + ${fr(`${C2}${X2}`, A2)}<br><br>⟹ ${X2}(1 − ${fr(C2, A2)}) + ${Y2} = ${A2} − ${C2}.`,
      },
      {
        t: 'p',
        html: `Now name the positive quantity ${A2} − ${C2} as ${B2} (it is positive because ${gt(a, c)}). The bracket becomes<br><br>${fr(`${A2} − ${C2}`, A2)} = ${fr(B2, A2)}, so<br><br>${fr(B2, A2)}${X2} + ${Y2} = ${B2}.<br><br>Divide through by ${B2}:<br><br>${ELL}.`,
      },
      {
        t: 'p',
        html: 'The two squarings are the heart of it: each one trades a square root for a polynomial, and the symmetric placement of the foci makes the unwanted terms cancel in pairs.',
      },
      {
        t: 'p',
        html: `<b>The relationship and eccentricity.</b> The substitution we made is the master relationship:<br>${B2} = ${A2} − ${C2} ⟺ ${C2} = ${A2} − ${B2}.<br><br>Since ${e} = ${fr(c, a)}, dividing by ${A2} gives ${fr(B2, A2)} = 1 − ${E2}, i.e. ${B2} = ${A2}(1 − ${E2}).`,
      },
      {
        t: 'p',
        html: `<b>Length of the latus rectum.</b> The latus rectum is the focal chord perpendicular to the major axis, lying on ${x} = ${c} = ${AE}. Substitute into the equation:<br><br>${fr(`(${AE})<sup>2</sup>`, A2)}${NB}+${NB}${fr(Y2, B2)}${NB}=${NB}1<br><br>⇒ ${fr(Y2, B2)} = 1 − ${E2} = ${fr(B2, A2)}<br><br>⇒ ${y} = ±${fr(B2, a)}.<br><br>The chord runs from (${AE}, ${fr(B2, a)}) to (${AE}, −${fr(B2, a)}), so<br><br>${L} = ${LR}.`,
      },
      {
        t: 'p',
        html: `<b>An elegant fact (used later).</b> The distance from a focus to an end of the minor axis equals the <b>semi-major axis</b>:<br>${SB} = ${sq(`(${AE})<sup>2</sup> + ${B2}`)}<br>= ${sq(`${A2}${E2} + ${A2}(1 − ${E2})`)} = ${a}.`,
      },
      { t: 'fig', id: 'm11-10-fig-10.4' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: `For the ellipse ${fr(X2, '25')}${NB}+${NB}${fr(Y2, '9')}${NB}=${NB}1, find ${a}, ${b}, the eccentricity, the foci, the vertices, the lengths of the axes, and the length of the latus rectum.`,
        steps: [
          `The larger denominator (25) is under ${X2}, so the major axis is along the ${x}-axis and<br>${A2} = 25 ⇒ ${a} = 5, ${B2} = 9 ⇒ ${b} = 3.<br>${C2} = ${A2} − ${B2}<br>= 25 − 9 = 16 ⇒ ${c} = 4,<br>${e} = ${fr(c, a)} = ${fr('4', '5')}.`,
          `• Foci: (±4, 0)<br>• Vertices: (±5, 0); minor-axis ends (0, ±3)<br>• Major axis = 2${a} = 10; minor axis = 2${b} = 6<br><br>• Latus rectum = ${LR} = ${fr('2 · 9', '5')} = ${fr('18', '5')} units`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main, quick-elimination',
        q: 'In an ellipse, the distance between the foci equals the length of the minor axis. Find the eccentricity.',
        steps: [
          `Translate directly: 2${c} = 2${b} ⇒ ${c} = ${b}. Now use ${C2} = ${A2} − ${B2} with ${b} = ${c}:<br>${C2} = ${A2} − ${C2} ⇒ 2${C2} = ${A2}<br>⇒ ${fr(C2, A2)} = ${HALF} ⇒ ${e} = ${fr('1', '√2')}.`,
          `<b>Speed note:</b> whenever a condition links two of {${a}, ${b}, ${c}}, push it straight into ${C2} = ${A2} − ${B2} and read off ${e} = ${fr(c, a)}. No coordinates needed.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main, multi-concept',
        q: `An ellipse with centre at the origin and major axis along the ${x}-axis has its latus rectum equal to half its major axis. Find its eccentricity and ${fr(b, a)}, then find the two focal distances of the point on the ellipse whose ${x}-coordinate is ${fr(a, '2')}.`,
        steps: [
          `“Latus rectum = half the major axis”:<br><br>${LR} = ${HALF}(2${a}) = ${a}<br>⇒ 2${B2} = ${A2}<br><br>⇒ ${fr(B2, A2)} = ${HALF} ⇒ ${fr(b, a)} = ${fr('1', '√2')}.`,
          `Then ${E2} = 1 − ${fr(B2, A2)}<br><br>= 1 − ${HALF} = ${HALF} ⇒ ${e} = ${fr('1', '√2')}.`,
          `For the point with ${x} = ${fr(a, '2')}, use the focal-radii formulas:<br><br>${SP} = ${a} − ${EX} = ${a} − ${fr('1', '√2')} · ${fr(a, '2')}<br><br>= ${a}(1 − ${fr('1', '2√2')}),<br><br>${SpP} = ${a} + ${EX} = ${a}(1 + ${fr('1', '2√2')}).`,
          `As a check, ${SP} + ${SpP} = 2${a}. ✓`,
          `<b>Concept link:</b> one problem ties the latus-rectum relation, the eccentricity relation, and the focal-radii formulas together, and the 2${a} sum gives a free sanity check.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `${S} and ${Sp} are the foci of an ellipse and <i>B</i> is one end of its minor axis. If △<i>SBS</i>′ is equilateral, find the eccentricity and express the latus rectum in terms of ${a}.`,
        steps: [
          `<b>Reasoning.</b> The triangle has vertices ${S}(${AE},${NB}0), ${Sp}(−${AE},${NB}0), and <i>B</i>(0,${NB}${b}). Its base is ${SSp} = 2${AE}. The two slant sides are equal by symmetry, each being the focus-to-minor-extremity distance, which we proved equals the semi-major axis: ${SB} = ${SpB} = ${a}.`,
          `For the triangle to be <b>equilateral</b>, all three sides match:<br>${SSp} = ${SB} ⇒ 2${AE} = ${a} ⇒ ${e} = ${HALF}.`,
          `Then<br><br>${B2} = ${A2}(1 − ${E2}) = ${A2}(1 − ${fr('1', '4')}) = ${fr(`3${A2}`, '4')},<br><br>so the latus rectum is<br><br>${L} = ${LR} = ${fr('2', a)} · ${fr(`3${A2}`, '4')} = ${fr(`3${a}`, '2')}.`,
          `<b>Why it is “Advanced”:</b> the leap is recognising ${SB} = ${a} (that the slant side is the semi-major axis, not something you must recompute), which turns a messy triangle condition into a one-line equation. Pure definition, no calculus.`,
        ],
        ans: `${e} = ${HALF}; ${L} = ${fr(`3${a}`, '2')}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE] Find the foci, eccentricity, and latus rectum of ${fr(X2, '16')}${NB}+${NB}${fr(Y2, '36')}${NB}=${NB}1. (Watch the orientation.)`,
            a: `Larger denominator under ${Y2} ⇒ major axis along ${y}; ${A2} = 36, ${B2} = 16, ${C2} = 20, ${c} = 2√5; foci (0, ±2√5);<br><br>${e} = ${fr('√5', '3')}; latus rectum = ${LR} = ${fr('32', '6')} = ${fr('16', '3')}.`,
          },
          {
            q: `[JEE Main] Find the equation of the ellipse with centre at the origin, major axis along the ${x}-axis, eccentricity ${fr('3', '5')}, and major axis of length 10.`,
            a: `${a} = 5, ${e} = ${fr('3', '5')} ⇒ ${c} = 3, ${B2} = 16;<br><br>${fr(X2, '25')}${NB}+${NB}${fr(Y2, '16')}${NB}=${NB}1.`,
          },
          {
            q: '[JEE Main] If an ellipse’s latus rectum is half its minor axis, find its eccentricity.',
            a: `Latus rectum = half the minor axis = ${b}:<br><br>${LR} = ${b} ⇒ ${b} = ${fr(a, '2')}<br><br>⇒ ${e} = ${sq(`1 − ${fr('1', '4')}`)} = ${fr('√3', '2')}.<br><br>(${LR} = 2${b} would force ${b} = ${a}: a circle.)`,
          },
          {
            q: `[JEE Main] A point on ${fr(X2, '49')}${NB}+${NB}${fr(Y2, '24')}${NB}=${NB}1 has ${x} = 3. Find its two focal distances.`,
            a: `${a} = 7, ${B2} = 24, ${C2} = 25, ${e} = ${fr('5', '7')};<br><br>${SP} = ${a} − ${EX} = 7 − ${fr('5', '7')}(3) = ${fr('34', '7')},<br><br>${SpP} = 7 + ${fr('15', '7')} = ${fr('64', '7')} (sum = 14 = 2${a} ✓).`,
          },
          {
            q: `[JEE Advanced] ${S} and ${Sp} are the foci and <i>B</i> an end of the minor axis of an ellipse. If ∠<i>SBS</i>′ = 90°, find the eccentricity.`,
            a: `${SB} = ${SpB} = ${a} and ${SSp} = 2${AE}; right angle at <i>B</i> ⇒ ${SB}<sup>2</sup> + ${SpB}<sup>2</sup> = ${SSp}<sup>2</sup><br>⇒ 2${A2} = 4${A2}${E2} ⇒ ${e} = ${fr('1', '√2')}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `For ${fr(X2, '9')}${NB}+${NB}${fr(Y2, '25')}${NB}=${NB}1, the foci lie on`,
        opts: [
          {
            label: `the ${x}-axis`,
            nudge: `<b>Trap (A):</b> assuming the foci are always on the ${x}-axis, the single most common ellipse error.`,
          },
          { label: `the ${y}-axis`, nudge: null },
          { label: `the line ${y} = ${x}`, nudge: '<b>Trap (C)</b>, <b>(D)</b>: foci are never off-axis or at the centre for a standard ellipse.' },
          { label: 'at the origin', nudge: '<b>Trap (C)</b>, <b>(D)</b>: foci are never off-axis or at the centre for a standard ellipse.' },
        ],
        correct: 1,
        solution: `The larger denominator (25) sits under ${Y2}, so the major axis, and therefore the foci, lie on the <b>${y}-axis</b>.`,
      },
      {
        t: 'mcq',
        q: `The eccentricity of ${fr(X2, '4')}${NB}+${NB}${fr(Y2, '3')}${NB}=${NB}1 is`,
        opts: [
          { label: HALF, nudge: null },
          { label: fr('1', '√3'), nudge: `<b>Trap (B):</b> taking ${e} = ${fr(c, b)} = ${fr('1', '√3')}.` },
          { label: fr('√3', '2'), nudge: `<b>Trap (C):</b> taking ${e} = ${BA} = ${fr('√3', '2')} instead of ${E_ELL}.` },
          { label: fr('1', '4'), nudge: `<b>Trap (D):</b> reporting ${fr(C2, A2)} without the square root.` },
        ],
        correct: 0,
        solution: `${A2} = 4, ${B2} = 3, ${C2} = 1, so ${e} = ${fr(c, a)} = ${HALF}.`,
      },
      {
        t: 'mcq',
        q: `The length of the latus rectum of ${fr(X2, '36')}${NB}+${NB}${fr(Y2, '16')}${NB}=${NB}1 is`,
        opts: [
          { label: fr('16', '3'), nudge: null },
          { label: fr('8', '3'), nudge: `<b>Trap (B):</b> using ${fr(B2, a)} (forgetting the 2).` },
          { label: fr('32', '3'), nudge: `<b>Trap (C):</b> using ${fr(`4${B2}`, a)} (extra factor 2).` },
          { label: '8', nudge: `<b>Trap (D):</b> taking the minor axis 2${b} instead.` },
        ],
        correct: 0,
        solution: `Major axis along ${x}: ${a} = 6, ${B2} = 16, so ${L} = ${LR} = ${fr('32', '6')} = ${fr('16', '3')}.`,
      },
      {
        t: 'mcq',
        q: 'If the foci of an ellipse coincide (merge into one point), the curve becomes',
        opts: [
          { label: 'a parabola', nudge: `<b>Trap (A):</b> the parabola is the ${e} → 1 limit, not ${e} → 0.` },
          { label: 'a circle', nudge: null },
          { label: 'a straight line', nudge: `<b>Trap (C):</b> the line is the degenerate case 2${a} = 2${c}, not ${eq(c, '0')}.` },
          { label: 'a hyperbola', nudge: `<b>Trap (D):</b> hyperbolas have ${E_GT1}, the opposite extreme.` },
        ],
        correct: 1,
        solution: `Merged foci means ${eq(c, '0')}, so ${eq(e, '0')} and ${a} = ${b}: a <b>circle</b>, the limiting ellipse.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Assuming the major axis is always horizontal.</b> It lives under the larger denominator. If ${Y2} has the bigger denominator, the major axis and foci swing onto the ${y}-axis, and the directrices become ${y} = ±${AONE}. Check before you compute.`,
          `<b>Sign in the relationship.</b> For an ellipse ${C2} = ${A2} − ${B2} (minus). The plus sign belongs to the hyperbola. Mixing them flips your eccentricity from below 1 to above it.`,
          `<b>Latus rectum slips.</b> It is ${LR}: full numerator 2${B2}, denominator the semi-major axis ${a}. Dropping the 2 or dividing by 2${a} are both common.`,
          `<b>Confusing ${e}’s formula.</b> Eccentricity is ${E_ELL}, not ${sq(fr(B2, A2))}. A quick guard: an ellipse must give ${E_BETWEEN}; an answer ≥ 1 means you used the hyperbola’s plus sign. The guard cannot catch ${BA}, which is below 1 too: check that ${E2} + ${fr(B2, A2)} = 1.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip.</b> Lock a four-step reflex for any standard ellipse: (1) <b>bigger denominator = major axis direction = where the foci are</b>; (2) ${C2} = ${A2} − ${B2}; (3) ${e} = ${fr(c, a)}; (4) ${L} = ${LR}. And memorise the one beautiful shortcut, <b>focus to minor-axis tip</b> = ${a}: it collapses half the “Advanced” triangle problems into a single line ${ESTIMATE}.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Definition', note: `sum of distances from two foci = 2${a} (constant); eccentricity ${E_BETWEEN}.` },
          { f: `Standard form (${A_GT_B})`, note: `${ELL}; major axis under the larger denominator.` },
          { f: 'Relationships', note: `${c} = ${AE}, ${C2} = ${A2} − ${B2}, ${B2} = ${A2}(1 − ${E2}), ${e} = ${E_ELL}.` },
          { f: 'Features', note: `vertices (±${a},${NB}0), foci (±${AE},${NB}0), directrices ${DIR}, latus rectum ${LR}.` },
          { f: 'Focal radii', note: `${SP} = ${a} − ${EX}, ${SpP} = ${a} + ${EX}; their sum is always 2${a}.` },
          {
            f: 'Key facts',
            note: `focus-to-minor-tip = ${a}; circle is the ${eq(e, '0')} limit; parabola is the ${e} → 1 boundary.`,
          },
        ],
        aids: [
          '“Bigger denominator points to the foci.”',
          '“Ellipse minus, hyperbola plus.”',
          '“Latus rectum: two-bee-squared over a.”',
        ],
      },
    ],
  },

  // ──────────────── Topic 05 · pp. 926–934 ────────────────
  {
    n: '05',
    title: 'The Hyperbola',
    kalam: 'Where the ellipse was built on the sum of distances to two foci, the hyperbola is built on their difference.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `CBSE Boards ask 1–4 marks ${ESTIMATE}: read a standard equation for foci, axes, eccentricity, latus rectum, and asymptotes, or build the equation from data; the difference-of-distances derivation is a recurring long-answer ${ESTIMATE}. JEE Main carries 1–2 questions on eccentricity and asymptote relationships ${ESTIMATE}. JEE Advanced fuses it with focal and asymptotic reasoning. The hyperbola also describes the path of an unbound comet and the shadow cast by a lampshade on a wall.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `The three conics are one family separated by a single dial: the eccentricity ${e}. Turn it below 1 and the curve closes into an ellipse. Set it exactly at 1 and it opens into a parabola. Push it past 1 and the curve splits into <b>two separate branches</b> sweeping away from each other forever. That two-branched, ${E_GT1} curve is the <b>hyperbola</b>.`,
      },
      {
        t: 'p',
        html: `Where the ellipse was built on the sum of distances to two foci, the hyperbola is built on their <b>difference</b>. A point moves so that | distance to ${S} minus distance to ${Sp} | stays constant (= 2${a}). On the right branch you are always closer to the right focus by exactly 2${a}; on the left branch, closer to the left focus by the same 2${a}. The constant difference is what carves out the two arms.`,
      },
      {
        t: 'p',
        html: 'Think about it this way… imagine two cricket stadiums far apart, each with a loudspeaker, and the speakers blast the same sound a fixed split-second apart. Stand somewhere and you hear two booms; the gap between them tells you the difference in your distances to the two speakers. Every spot with the same time-gap lies on one hyperbola branch. This is not a toy example; it is exactly how old LORAN ship navigation worked: fix the time differences from several transmitters and you sit on intersecting hyperbolas, and where they cross is your location. The hyperbola is the geometry of “constant difference.”',
      },
      {
        t: 'p',
        html: 'The other unmistakable feature of a hyperbola is its pair of <b>asymptotes</b>: two straight lines through the centre that the branches hug ever more closely but never touch, like two railway tracks the curve runs parallel to as it races off to infinity. The asymptotes form an X through the centre, and the hyperbola threads through the opposite pairs of wedges. When the two asymptotes are perpendicular, the hyperbola is called <b>rectangular</b> (or equilateral), the most symmetric case.',
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b><br>• <b>${E_GT1}, always.</b> This is the hyperbola’s signature. If your computed ${e} comes out ≤ 1, something has gone wrong, most often the sign in ${C2} = ${A2} + ${B2}.<br>• <b>The two branches never join.</b> Unlike the single closed ellipse, the hyperbola is genuinely two pieces; the region between the vertices contains no part of the curve.<br>• <b>The constant difference must be less than the focal separation:</b> 2${a} < 2${c}. If they were equal, the “curve” would degenerate into two rays.<br>• <b>Standard equations assume the tidy frame</b>: centre at origin, transverse axis along a coordinate axis. Off-centre or rotated hyperbolas need shifted or rotated coordinates (NCERT Class 11 treats only the centred forms; JEE asks off-centre ones, reduced by completing the square).`,
      },

      { t: 'part', title: 'Key definitions and formulas' },
      {
        t: 'p',
        html: `<b>Definition.</b> A hyperbola is the locus of a point the difference of whose distances from two fixed foci is constant (= 2${a}). Equivalently, focus–directrix form with eccentricity ${E_GT1}.`,
      },
      {
        t: 'formula',
        kicker: 'Standard equation of the hyperbola',
        main: `(centre at origin, transverse axis along ${x}-axis):<br>${HYP}`,
        legend: [`${a} = the semi-transverse axis`, `${b} = the semi-conjugate axis`],
        note: null,
      },
      {
        t: 'p',
        html: `Here ${a} is the <b>semi-transverse axis</b> and ${b} the <b>semi-conjugate axis</b>. Note there is <b>no requirement that</b> ${A_GT_B}: either may be larger.`,
      },
      {
        t: 'formula',
        kicker: 'The defining relationships of the hyperbola (mind the + sign)',
        main: `${c} = ${AE},<br>${C2} = ${A2} + ${B2},<br>${B2} = ${A2}(${E2} − 1),<br>${e} = ${fr(c, a)} = ${E_HYP}`,
        legend: [`${a}, ${b} = the semi-transverse and semi-conjugate axes`, `${c} = the centre-to-focus distance`, `${e} = the eccentricity`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Key features of</b> ${HYP}<b>:</b>`,
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Value'],
        rows: [
          ['Centre', '(0, 0)'],
          ['Vertices (transverse-axis ends)', `(±${a},${NB}0)`],
          [`Foci ${S}, ${Sp}`, `(±${AE},${NB}0)`],
          ['Transverse / conjugate axis length', `2${a}, 2${b}`],
          ['Eccentricity', `${e} = ${E_HYP}`],
          ['Directrices', DIR],
          ['Latus rectum length', `${L} = ${LR}`],
          ['Asymptotes', ASYM],
          [`Focal radii of ${PXY}`, `${PS} = ${EX} − ${a}, ${PSp} = ${EX} + ${a} (right branch); ${PS} = ${a} − ${EX}, ${PSp} = −${EX} − ${a} (left branch)`],
        ],
      },
      {
        t: 'p',
        html: `<b>If the positive term is under ${Y2}</b> (that is ${HYP_Y}), the transverse axis is the ${y}-axis, foci are (0,${NB}±${AE}), and asymptotes are ${y} = ±${fr(a, b)}${x}.`,
      },
      {
        t: 'p',
        html: `<b>The positive term, not the larger denominator, picks the transverse axis.</b> This is the hyperbola trap: in an ellipse the larger denominator wins, but in a hyperbola the transverse axis follows the variable with the <b>plus</b> sign, whatever the denominators are.`,
      },

      { t: 'part', title: 'CBSE board derivation' },
      {
        t: 'p',
        html: `<b>Deriving the standard equation</b> ${HYP}<b>.</b><br><b>Set up the frame.</b> Centre at the origin, foci at ${S}(${c},${NB}0) and ${Sp}(−${c},${NB}0), and let the constant difference of focal distances be 2${a}. For a point ${PXY} on the branch nearer ${S},<br>${SpP} − ${SP} = 2${a}<br>⟹ ${R_PLUS} − ${R_MINUS}<br>= 2${a}.`,
      },
      {
        t: 'p',
        html: `This is the ellipse derivation with a sign changed, so the algebra runs in perfect parallel. Move one radical across and square:<br>${R_PLUS}<br>= 2${a} + ${R_MINUS},<br>(${x} + ${c})<sup>2</sup> + ${Y2}<br>= 4${A2} + 4${a}${R_MINUS} + (${x} − ${c})<sup>2</sup> + ${Y2}.<br>Cancel the common ${X2} + ${C2} + ${Y2}; the cross terms +2<i>cx</i> and −2<i>cx</i> survive:<br>4<i>cx</i> − 4${A2} = 4${a}${R_MINUS}<br><br>⟹ ${fr('<i>cx</i>', a)} − ${a} = ${R_MINUS}.`,
      },
      {
        t: 'p',
        html: `Square once more:<br><br>${fr(`${C2}${X2}`, A2)} − 2<i>cx</i> + ${A2}<br>= ${X2} − 2<i>cx</i> + ${C2} + ${Y2}.<br><br>Cancel −2<i>cx</i>, then group:<br><br>${X2}(${fr(C2, A2)} − 1) − ${Y2} = ${C2} − ${A2}.`,
      },
      {
        t: 'p',
        html: `Now the quantity ${C2} − ${A2} is <b>positive</b> here (because ${gt(c, a)} for a hyperbola), so we name it ${B2}. The bracket becomes<br><br>${fr(`${C2} − ${A2}`, A2)} = ${fr(B2, A2)}:<br><br>${fr(B2, A2)}${X2} − ${Y2} = ${B2}<br><br>⟹ ${HYP}.`,
      },
      {
        t: 'p',
        html: `The substitution again is the relationship, but with the flipped sign:<br>${B2} = ${C2} − ${A2} ⟺ ${C2} = ${A2} + ${B2}.<br><br>Dividing by ${A2} and using ${e} = ${fr(c, a)} gives ${fr(B2, A2)} = ${E2} − 1, i.e. ${B2} = ${A2}(${E2} − 1), which forces ${E_GT1}.`,
      },
      {
        t: 'p',
        html: `<b>Ellipse vs hyperbola: the whole difference in one box.</b> Ellipse: focal distances <b>add</b> to 2${a}; relationship ${C2} = ${A2} − ${B2}; ${E_LT1}. Hyperbola: focal distances <b>subtract</b> to 2${a}; relationship ${C2} = ${A2} + ${B2}; ${E_GT1}. The latus rectum formula ${LR} is identical for both.`,
      },
      {
        t: 'p',
        html: `<b>Length of the latus rectum.</b> On the line ${x} = ${c} = ${AE},<br><br>${fr(`(${AE})<sup>2</sup>`, A2)}${NB}−${NB}${fr(Y2, B2)}${NB}=${NB}1<br><br>⇒ ${fr(Y2, B2)} = ${E2} − 1 = ${fr(B2, A2)}<br><br>⇒ ${y} = ±${fr(B2, a)},<br><br>so ${L} = ${LR}.`,
      },
      {
        t: 'p',
        html: `<b>The asymptotes.</b> Solve the equation for ${y}:<br><br>${Y2} = ${B2}(${fr(X2, A2)} − 1)<br><br>= ${fr(B2, A2)}${X2}(1 − ${fr(A2, X2)}).<br><br>As |${x}| → ∞, the term ${fr(A2, X2)} → 0,<br><br>so ${Y2} → ${fr(B2, A2)}${X2}, giving<br><br>${y} → ±${BA}${x}.<br><br>(More exactly, the gap shrinks to 0: on the upper right arm, ${BA}${x} − ${y} = ${fr('<i>ab</i>', `${x} + √(${X2} − ${A2})`)} → 0.)<br><br>The branches crowd ever closer to these two lines without meeting them: the asymptotes are the hyperbola’s “rails at infinity.” When ${a} = ${b} they are ${y} = ±${x}, perpendicular: the <b>rectangular</b> hyperbola, for which ${e} = √2.`,
      },
      { t: 'fig', id: 'm11-10-fig-10.5' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: `For the hyperbola ${fr(X2, '16')}${NB}−${NB}${fr(Y2, '9')}${NB}=${NB}1, find ${a}, ${b}, the eccentricity, the foci, the vertices, the lengths of the transverse and conjugate axes, the latus rectum, and the equations of the asymptotes.`,
        steps: [
          `The positive term is under ${X2}, so the transverse axis is the ${x}-axis:<br>${A2} = 16 ⇒ ${a} = 4, ${B2} = 9 ⇒ ${b} = 3.<br>${C2} = ${A2} + ${B2}<br>= 16 + 9 = 25 ⇒ ${c} = 5,<br><br>${e} = ${fr(c, a)} = ${fr('5', '4')}.`,
          `• Foci: (±5, 0); vertices: (±4, 0)<br>• Transverse axis = 2${a} = 8; conjugate axis = 2${b} = 6<br><br>• Latus rectum = ${LR} = ${fr('18', '4')} = ${fr('9', '2')} units<br><br>• Asymptotes: ${y} = ±${fr('3', '4')}${x}`,
          `Note ${e} = ${fr('5', '4')} > 1: the built-in sanity check passes.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main, quick-elimination',
        q: 'The transverse and conjugate axes of a hyperbola are equal in length. Find its eccentricity.',
        steps: [
          `Equal axes means 2${a} = 2${b} ⇒ ${a} = ${b}. Then<br><br>${E2} = 1 + ${fr(B2, A2)} = 1 + 1 = 2 ⇒ ${e} = √2.`,
          `<b>Speed note:</b> ${a} = ${b} is the <b>rectangular</b> hyperbola, and ${e} = √2 is worth memorising outright: it appears constantly ${ESTIMATE}. Recognising “equal axes / perpendicular asymptotes / rectangular” should trigger √2 instantly.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main, multi-concept',
        q: `A hyperbola with transverse axis along the ${x}-axis has eccentricity ${fr('√13', '2')} and latus rectum 9. Find its equation, then the two focal distances of the point on it with ${x} = 4.`,
        steps: [
          `From ${e} = ${fr('√13', '2')}: ${E2} = ${fr('13', '4')} = 1 + ${fr(B2, A2)}<br><br>⇒ ${fr(B2, A2)} = ${fr('9', '4')}, so ${B2} = ${fr('9', '4')}${A2}.`,
          `From latus rectum ${LR} = 9: substitute ${B2} = ${fr('9', '4')}${A2}:<br><br>${fr(`2 · 9${A2}`, `4${a}`)} = 9 ⇒ ${fr(`9${a}`, '2')} = 9 ⇒ ${a} = 2.`,
          `Then ${A2} = 4 and ${B2} = ${fr('9', '4')} · 4 = 9. The equation is<br><br>${fr(X2, '4')}${NB}−${NB}${fr(Y2, '9')}${NB}=${NB}1.`,
          `For the point with ${x} = 4, use the focal radii (note: <b>add/subtract</b> ${a}, with <i>ex</i> first; the point is on the right branch, ${x} = 4 > ${a}):<br><br>${PS} = ${EX} − ${a}<br>= ${fr('√13', '2')} · 4 − 2<br>= 2√13 − 2,<br><br>${PSp} = ${EX} + ${a} = 2√13 + 2.`,
          `Check the difference: ${PSp} − ${PS} = 4 = 2${a}. ✓`,
          `<b>Concept link:</b> eccentricity, latus rectum, and focal radii in one chain, and the difference 2${a} gives a free check, the hyperbola’s analogue of the ellipse’s sum check.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'The angle between the asymptotes of a hyperbola (the angle containing the transverse axis) is 60°. Find its eccentricity. Then state the eccentricity if instead that angle is the obtuse one of 120°.',
        steps: [
          `<b>Reasoning.</b> The asymptotes are ${ASYM}. Each makes an angle ${al} with the ${x}-axis where<br><br>tan ${al} = ${BA}.<br><br>The angle between the two asymptotes, measured across the transverse axis, is 2${al}.`,
          `<b>Case 1:</b> 2${al} = 60° ⇒ ${al} = 30°.<br><br>${BA} = tan 30° = ${fr('1', '√3')}<br><br>⇒ ${E2} = 1 + ${fr(B2, A2)} = 1 + ${fr('1', '3')} = ${fr('4', '3')}<br><br>⇒ ${e} = ${fr('2', '√3')}.`,
          `<b>Case 2:</b> 2${al} = 120° ⇒ ${al} = 60°.<br><br>${BA} = tan 60° = √3 ⇒ ${E2} = 1 + 3 = 4 ⇒ ${e} = 2.`,
          `<b>Why it is “Advanced”:</b> the subtlety is that “the angle between the asymptotes” is ambiguous: the two lines make two supplementary angles (60° and 120°), and which one “contains the transverse axis” decides whether you use ${al} or its complement. A careful student gives both eccentricities; a careless one gives one and loses half the marks. No calculus: pure asymptote geometry.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE] Find the foci, vertices, eccentricity, latus rectum, and asymptotes of ${fr(X2, '9')}${NB}−${NB}${fr(Y2, '27')}${NB}=${NB}1.`,
            a: `${A2} = 9, ${B2} = 27, ${C2} = 36, ${c} = 6; foci (±6, 0); vertices (±3, 0); ${e} = 2;<br><br>latus rectum = ${fr('2 · 27', '3')} = 18; asymptotes ${y} = ±√3${x}.`,
          },
          {
            q: '[JEE Main] Find the equation of the hyperbola with foci (±5, 0) and transverse axis of length 6.',
            a: `${c} = 5, ${a} = 3 ⇒ ${B2} = ${C2} − ${A2} = 16;<br><br>${fr(X2, '9')}${NB}−${NB}${fr(Y2, '16')}${NB}=${NB}1.`,
          },
          {
            q: '[JEE Main] If the latus rectum of a hyperbola equals half its transverse axis, find its eccentricity.',
            a: `${LR} = ${HALF}(2${a}) = ${a} ⇒ 2${B2} = ${A2}<br><br>⇒ ${fr(B2, A2)} = ${HALF} ⇒ ${e} = ${sq(`1 + ${HALF}`)}<br><br>= ${sq(fr('3', '2'))} = ${fr('√6', '2')}.`,
          },
          {
            q: `[JEE Main] A point on ${fr(X2, '4')}${NB}−${NB}${fr(Y2, '5')}${NB}=${NB}1 has ${x} = 6. Find its two focal distances and verify their difference.`,
            a: `${a} = 2, ${B2} = 5, ${C2} = 9, ${e} = ${fr('3', '2')};<br><br>${PS} = ${EX} − ${a} = ${fr('3', '2')}(6) − 2 = 7, ${PSp} = ${EX} + ${a} = 11; difference = 4 = 2${a} ✓.`,
          },
          {
            q: `[JEE Advanced] The eccentricity of a hyperbola is the reciprocal of that of the ellipse ${fr(X2, '25')}${NB}+${NB}${fr(Y2, '16')}${NB}=${NB}1. Find its eccentricity.`,
            a: `The ellipse has ${e} = ${sq(`1 − ${fr('16', '25')}`)} = ${fr('3', '5')},<br><br>so the hyperbola has ${e} = ${fr('5', '3')} > 1, which is valid.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `For the hyperbola ${fr(Y2, '9')}${NB}−${NB}${fr(X2, '16')}${NB}=${NB}1, the transverse axis lies along`,
        opts: [
          {
            label: `the ${x}-axis`,
            nudge: `<b>Trap (A):</b> applying the ellipse rule “larger denominator wins” (16 under ${X2}).`,
          },
          { label: `the ${y}-axis`, nudge: null },
          {
            label: `the line ${y} = ${x}`,
            nudge: '<b>Trap (C)</b>, <b>(D)</b>: the transverse axis of a standard hyperbola is always a coordinate axis.',
          },
          { label: 'neither axis', nudge: '<b>Trap (C)</b>, <b>(D)</b>: the transverse axis of a standard hyperbola is always a coordinate axis.' },
        ],
        correct: 1,
        solution: `The <b>positive</b> term is under ${Y2}, so the transverse axis is the <b>${y}-axis</b>, even though 16 > 9. This question exists purely to catch the ellipse-habit.`,
      },
      {
        t: 'mcq',
        q: `The eccentricity of ${fr(X2, '16')}${NB}−${NB}${fr(Y2, '9')}${NB}=${NB}1 is`,
        opts: [
          { label: fr('3', '4'), nudge: `<b>Trap (A):</b> reporting ${BA}.` },
          { label: fr('4', '5'), nudge: `<b>Trap (B):</b> inverting the eccentricity, ${fr(a, c)} = ${fr('4', '5')}.` },
          { label: fr('5', '4'), nudge: null },
          {
            label: fr('√7', '4'),
            nudge: `<b>Trap (D):</b> using ${C2} = ${A2} − ${B2} (the ellipse relation) gives ${c} = √7 and ${e} = ${fr('√7', '4')}: the deadly sign import.`,
          },
        ],
        correct: 2,
        solution: `${C2} = 16 + 9 = 25, ${c} = 5, ${e} = ${fr(c, a)} = ${fr('5', '4')} > 1.`,
      },
      {
        t: 'mcq',
        q: `The asymptotes of ${fr(X2, '25')}${NB}−${NB}${fr(Y2, '16')}${NB}=${NB}1 are`,
        opts: [
          { label: `${y} = ±${fr('5', '4')}${x}`, nudge: `<b>Trap (A):</b> inverting to ${fr(a, b)}.` },
          { label: `${y} = ±${fr('4', '5')}${x}`, nudge: null },
          { label: `${y} = ±${x}`, nudge: `<b>Trap (C):</b> assuming rectangular without checking ${a} = ${b}.` },
          { label: `${y} = ±${fr('16', '25')}${x}`, nudge: `<b>Trap (D):</b> using ${fr(B2, A2)} instead of ${BA}.` },
        ],
        correct: 1,
        solution: `Asymptotes are ${ASYM} = ±${fr('4', '5')}${x}.`,
      },
      {
        t: 'mcq',
        q: `A hyperbola with ${e} = √2 is called`,
        opts: [
          { label: 'conjugate', nudge: '<b>Trap (A):</b> the conjugate hyperbola is a different curve, not an eccentricity condition.' },
          { label: 'rectangular', nudge: null },
          { label: 'degenerate', nudge: '<b>Trap (C):</b> degenerate conics are point/line collapses, unrelated.' },
          { label: 'auxiliary', nudge: '<b>Trap (D):</b> “auxiliary” names a circle, not a hyperbola.' },
        ],
        correct: 1,
        solution: `${e} = √2 forces ${fr(B2, A2)} = ${E2} − 1 = 1, so ${a} = ${b} and the asymptotes are perpendicular: a <b>rectangular (equilateral)</b> hyperbola.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Importing the ellipse’s minus sign.</b> For a hyperbola ${C2} = ${A2} + ${B2} (<b>plus</b>). Using the ellipse’s minus is the single most destructive error: it silently produces an ${E_LT1}, which is impossible for a hyperbola.`,
          '<b>Letting the larger denominator pick the axis.</b> That is the ellipse rule. For a hyperbola, the <b>positive term</b> names the transverse axis, regardless of denominator sizes.',
          `<b>Inverting the asymptote slope.</b> For ${HYP} the asymptotes are ${ASYM}: ${b} over ${a}, not ${a} over ${b}.`,
          '<b>Forgetting both supplementary angles between asymptotes.</b> “Angle between asymptotes” is ambiguous; check whether the angle contains the transverse axis, and give both cases when asked.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip.</b> Build a hyperbola reflex that contrasts with the ellipse: (1) <b>positive term = transverse axis = where the foci are</b>; (2) ${C2} = ${A2} + ${B2} (plus!); (3) ${e} = ${fr(c, a)} and confirm ${E_GT1}; (4) asymptotes ${ASYM}; (5) latus rectum ${LR} (same as ellipse). And lock ${e} = √2 ⇔ rectangular as an instant-recall fact.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Definition', note: `difference of distances from two foci = 2${a} (constant); eccentricity ${E_GT1}; two branches.` },
          { f: 'Standard form', note: `${HYP}; the <b>positive term</b> sets the transverse axis (${a} need not exceed ${b}).` },
          { f: 'Relationships', note: `${c} = ${AE}, ${C2} = ${A2} + ${B2}, ${B2} = ${A2}(${E2} − 1), ${e} = ${E_HYP}.` },
          { f: 'Features', note: `vertices (±${a},${NB}0), foci (±${AE},${NB}0), directrices ${DIR}, latus rectum ${LR}.` },
          { f: 'Asymptotes', note: `${ASYM}; perpendicular ⇔ ${a} = ${b} ⇔ rectangular ⇔ ${e} = √2.` },
          { f: 'Focal radii', note: `on the right branch ${PS} = ${EX} − ${a}, ${PSp} = ${EX} + ${a}; on the left, ${PS} = ${a} − ${EX}, ${PSp} = −${EX} − ${a}; the two always differ by 2${a}.` },
        ],
        aids: [
          '“Hyperbola plus, ellipse minus.”',
          '“Positive term points to the foci.”',
          '“Asymptote slope is bee-over-ay.”',
          '“Rectangular means root-two.”',
        ],
      },
    ],
  },
];
