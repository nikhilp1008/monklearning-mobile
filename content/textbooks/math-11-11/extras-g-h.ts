import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11, Additional topics G–H, pp. 1052–1059 of the Class 11 Mathematics
 * Reference (October 2026 edition), word for word: the "Additional Topics" part,
 * the book's Patterns 7–8 (decision 37), "Pattern N" → "Additional topic G…H".
 * The part's p. 1052 opening and table (heading not copied) open G's "Introduction";
 * its "Cheat Sheet Additions" (p. 1058) and "Beyond this chapter" (p. 1059) are H's
 * last two parts.
 * Each additional topic: Introduction (its italic "Extends …" line), Method, Worked
 * examples, Practice (questions paired with the book's answers).
 * Figures: the part's own "Figure 1" (p. 1053) is m11-11-G-d1 and its "Figure 2"
 * (p. 1056) is m11-11-H-d1, each at the end of its Method, where the caption is
 * printed. No other drawings.
 * Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = ' ';

const d = I('d');
const k = I('k');
const m = I('m');
const n = I('n');
const x = I('x');
const y = I('y');
const z = I('z');
const A = I('A');
const B = I('B');
const P = I('P');
const Q = I('Q');
const R = I('R');
const sq = (s: string) => `${s}<sup>2</sup>`;
/** A short triple kept whole: (a, b, c). */
const t3 = (p: string, q: string, s: string) => `(${p},${NB}${q},${NB}${s})`;
/** A named point with its triple: P(x, y, z). */
const pt = (name: string, p: string, q: string, s: string) => `${I(name)}${t3(p, q, s)}`;
const RATIO = (p: string, q: string) => `${p}${NB}∶${NB}${q}`;
const K1 = RATIO(k, '1');
const MN = RATIO(m, n);
const XY = `${I('XY')}-plane`;
const YZ = `${I('YZ')}-plane`;
const ZX = `${I('ZX')}-plane`;
const DMIN = `${d}<sub>min</sub>`;
const RP2 = `<i>RP</i><sup>2</sup>`;
const PA2 = `<i>PA</i><sup>2</sup>`;
const PB2 = `<i>PB</i><sup>2</sup>`;
const KNEG = `${k} = −${fr(m, n)}`;
const HALF = fr('1', '2');

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic G · pp. 1052–1055 ────────────────
  {
    n: 'G',
    title: 'A Point on an Axis at a Given Distance from a Fixed Point',
    extra: true,
    kalam: 'Exactly one squared term survives, the equation is a genuine quadratic, and the honest answer is usually two points, not one.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topics 01–03 and Additional topics A to F between them cover this chapter’s machinery completely, and they should: NCERT Chapter 11 is genuinely a short introductory chapter, and everything past it (direction cosines, the equation of a line or a plane, the angle between two lines, the shortest distance between skew lines) needs vectors and belongs to Class 12. This addendum therefore adds nothing new to the toolkit. It closes the last two question shapes that the chapter’s tools already answer but that neither the chapter nor Additional topics A to F ever demonstrate, and both are standing NCERT items:',
      },
      {
        t: 'table',
        title: null,
        head: ['Entry', 'Topic', 'NCERT source', 'Read after'],
        rows: [
          [
            'Additional topic G',
            'A point on an axis at a <b>given distance</b> from a fixed point: the quadratic case',
            'Miscellaneous Exercise Q4',
            'Topic 02’s Worked examples part, its third worked example',
          ],
          [
            'Additional topic H',
            `A plane cutting a segment <b>externally</b>, when ${k} comes out negative`,
            'Solved Example 10; Misc. Exercise Q5',
            'Topic 02’s Worked examples part, its second worked example',
          ],
        ],
      },
      {
        t: 'p',
        html: 'Each is a method statement, worked examples in full, and practice with answers, continuing the letters of Additional topics A to F.',
      },
      {
        t: 'p',
        html: 'Extends Topic 02’s Worked examples part, its third worked example, and Additional topic A.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Topic 02’s third worked example found the point on the ${y}-axis <b>equidistant from two points</b>, and noted that the ${sq(y)} terms cancel so the condition is linear: one unknown, one answer (unless the bisector plane happens to be parallel to the axis). Additional topic D leaned on the same cancellation. Change the condition to “at a given distance ${d} from one fixed point” and that cancellation <b>does not happen</b>. Exactly one squared term survives, the equation is a genuine quadratic, and the honest answer is usually <b>two points</b>, not one.`,
      },
      { t: 'p', html: 'The procedure is three lines.' },
      {
        t: 'p',
        html: `1. <b>Write the axis form first.</b> A point on the ${y}-axis is ${pt('R', '0', y, '0')}: one unknown, not three (Topic 01).<br>2. <b>Square before you do anything else.</b> Impose ${RP2} = ${sq(d)}, never <i>RP</i> = ${d} with the radical standing.<br>3. <b>Solve the quadratic and keep every real root.</b> Each root is a genuine point on the axis at distance ${d} from ${P}.`,
      },
      {
        t: 'p',
        html: `<b>How many answers should you expect?</b> Additional topic A gives you the check for free. The nearest point of an axis to ${P} is the foot of the perpendicular, and the distance to it is the axis distance ${DMIN}: for the ${y}-axis, ${DMIN} = √(${sq(z)} + ${sq(x)}). So<br>${d} > ${DMIN} ⇒ two points (one either side of the foot),<br>${d} = ${DMIN} ⇒ one point (the foot itself),<br>${d} < ${DMIN} ⇒ no such point.`,
      },
      {
        t: 'p',
        html: `Compute ${DMIN} before you solve and you know the answer count in advance, which is how you catch yourself when you have written down only one root.`,
      },
      { t: 'fig', id: 'm11-11-G-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the coordinates of the point on the ${y}-axis which is at a distance 5√2 from the point ${pt('P', '3', '−2', '5')}.`,
        steps: [
          `A point on the ${y}-axis has the form ${pt('R', '0', y, '0')}.`,
          `Before solving, count the answers. The distance of ${P} from the ${y}-axis is<br>√(${sq(z)} + ${sq(x)}) = √(25 + 9)<br>= √34 ≈ 5.83,<br>and the required distance is<br>5√2 = √50 ≈ 7.07.<br>Since √50 > √34, expect <b>two</b> points.`,
          `Now impose ${RP2} = (5√2)<sup>2</sup> = 50:<br>(3 − 0)<sup>2</sup> + (−2 − ${y})<sup>2</sup> + (5 − 0)<sup>2</sup> = 50<br>⟹ 9 + (${y} + 2)<sup>2</sup> + 25 = 50.`,
          `Notice what did <b>not</b> happen: there is no second point to subtract against, so the ${sq(y)} term has nothing to cancel with. Hence<br>(${y} + 2)<sup>2</sup> = 16 ⟹ ${y} + 2 = ±4<br>⟹ ${y} = 2 or ${y} = −6.`,
          `The required points are ${t3('0', '2', '0')} and ${t3('0', '−6', '0')}.`,
          `<b>Check.</b> For ${t3('0', '2', '0')}:<br>√(9 + 16 + 25) = √50 = 5√2.<br>For ${t3('0', '−6', '0')}:<br>√(9 + 16 + 25) = √50 = 5√2.<br>Both work, and note that the foot of the perpendicular from ${P} to the ${y}-axis is ${t3('0', '−2', '0')}, exactly midway between the two answers, as the figure promised.`,
          `<b>Presentation note:</b> writing only ${t3('0', '2', '0')} is the single commonest way to lose a mark here. The instant you see (${NB}·${NB})<sup>2</sup> = 16, write ±4 on the same line.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `For each of the following, find all points on the stated axis at the stated distance from ${P}, or show that none exists.<br>(i) On the ${x}-axis, at distance √41 from ${pt('P', '2', '−3', '4')}.<br>(ii) On the ${z}-axis, at distance 5 from ${pt('P', '3', '4', '7')}.<br>(iii) On the ${x}-axis, at distance 3 from ${pt('P', '1', '2', '5')}.`,
        steps: [
          `In each case compute ${DMIN} first, then solve.`,
          `<b>(i)</b> Distance of ${P} from the ${x}-axis is<br>√(${sq(y)} + ${sq(z)}) = √(9 + 16) = 5,<br>and √41 > 5, so expect two points. With ${pt('R', x, '0', '0')}:<br>(${x} − 2)<sup>2</sup> + 9 + 16 = 41<br>⟹ (${x} − 2)<sup>2</sup> = 16<br>⟹ ${x} = 6 or ${x} = −2.<br>The points are ${t3('6', '0', '0')} and ${t3('−2', '0', '0')}.`,
          `<b>(ii)</b> Distance of ${P} from the ${z}-axis is<br>√(${sq(x)} + ${sq(y)}) = √(9 + 16) = 5,<br>which is exactly the required distance. This is the boundary case, so expect one point. With ${pt('R', '0', '0', z)}:<br>9 + 16 + (${z} − 7)<sup>2</sup> = 25<br>⟹ (${z} − 7)<sup>2</sup> = 0<br>⟹ ${z} = 7 (twice).<br>The single point is ${t3('0', '0', '7')}, and it is precisely the foot of the perpendicular from ${P} to the ${z}-axis. The repeated root is the algebra telling you the two solutions have merged.`,
          `<b>(iii)</b> Distance of ${P} from the ${x}-axis is<br>√(4 + 25) = √29 ≈ 5.39,<br>and the required distance 3 is smaller. No point can be closer to ${P} than the foot of the perpendicular is, so <b>no such point exists</b>. The algebra agrees: with ${pt('R', x, '0', '0')},<br>(${x} − 1)<sup>2</sup> + 4 + 25 = 9<br>⟹ (${x} − 1)<sup>2</sup> = −20,<br>which has no real solution. A negative right-hand side in a problem of this type is never an arithmetic slip to be “fixed”: it is the correct answer, stating that the locus is empty.`,
          `<b>The structural lesson.</b> Equidistant-from-two-points is linear and gives one answer (or none, when the bisector plane is parallel to the axis, or every point of the axis, when the axis lies in that plane); fixed-distance-from-one-point is quadratic and gives two, one, or none. Additional topic F’s cheat-sheet line “each condition ${PA2} = ${PB2} is linear” applies only to the difference of two distance conditions. A single distance condition keeps its square.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the points on the ${z}-axis at a distance 7 from ${t3('2', '3', '−1')}.`,
            a: `4 + 9 + (${z} + 1)<sup>2</sup> = 49<br>⇒ (${z} + 1)<sup>2</sup> = 36<br>⇒ ${z} = 5 or ${z} = −7;<br>the points are ${t3('0', '0', '5')} and ${t3('0', '0', '−7')}.`,
          },
          {
            q: `<b>[CBSE]</b> Find the points on the ${y}-axis at a distance 13 from ${t3('3', '1', '4')}.`,
            a: `9 + (${y} − 1)<sup>2</sup> + 16 = 169<br>⇒ (${y} − 1)<sup>2</sup> = 144<br>⇒ ${y} = 13 or ${y} = −11;<br>the points are ${t3('0', '13', '0')} and ${t3('0', '−11', '0')}.`,
          },
          {
            q: `<b>[JEE Main]</b> Find the points on the ${z}-axis at a distance 13 from ${t3('3', '4', '7')}, and state how your answer relates to the second worked example of this additional topic, part (ii).`,
            a: `9 + 16 + (${z} − 7)<sup>2</sup> = 169<br>⇒ (${z} − 7)<sup>2</sup> = 144<br>⇒ ${z} = 19 or ${z} = −5;<br>the points are ${t3('0', '0', '19')} and ${t3('0', '0', '−5')}. In that part (ii) the required distance equalled ${DMIN} = 5 and the two roots coincided at the foot ${t3('0', '0', '7')}; here 13 > 5, so they have separated symmetrically, 12 units either side of that same foot.`,
          },
          {
            q: `<b>[JEE Main]</b> For what value of ${d} does the ${y}-axis contain exactly one point at distance ${d} from ${t3('6', '−1', '8')}? Give that point.`,
            a: `Exactly one point occurs only at<br>${d} = ${DMIN} = √(${sq(z)} + ${sq(x)})<br>= √(64 + 36) = 10,<br>and the point is the foot of the perpendicular, ${t3('0', '−1', '0')}.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic H · pp. 1055–1059 ────────────────
  {
    n: 'H',
    title: 'When a Coordinate Plane Divides a Segment Externally',
    extra: true,
    kalam: 'Do not report the ratio as negative and do not drop the word “externally”: both cost the mark.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 02’s Worked examples part, its second worked example, and its Crack the MCQ part, question 3.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Topic 02 gave you the workhorse: to find where a coordinate plane cuts the line through ${pt('P', `${x}<sub>1</sub>`, `${y}<sub>1</sub>`, `${z}<sub>1</sub>`)} and ${pt('Q', `${x}<sub>2</sub>`, `${y}<sub>2</sub>`, `${z}<sub>2</sub>`)}, write the general point in ${K1} form, set the one relevant coordinate to zero, and solve for ${k}. It also told you that ${k}${NB}>${NB}0 means internal and ${k}${NB}<${NB}0 means external. What it never shows you is a coordinate plane for which ${k} actually comes out <b>negative</b>: every plane-cutting instance in the chapter (Topic 02’s second worked example, its Crack the MCQ question 3, its practice question 3) happens to land on an internal division. NCERT’s own Solved Example 10 does not, and that is the case examiners set when they want to separate candidates.`,
      },
      { t: 'p', html: 'Two additions to the procedure close this.' },
      {
        t: 'p',
        html: `1. <b>Predict the sign before you compute.</b> Look at the two endpoints’ values of the relevant coordinate. If they have <b>opposite signs</b>, the endpoints straddle the plane, the plane cuts between them, and the division is <b>internal</b> (${k}${NB}>${NB}0). If they have the <b>same sign</b>, both endpoints lie on the same side, the plane cannot cut the segment at all, and the division must be <b>external</b> (${k}${NB}<${NB}0): the plane meets the extended line outside the segment. (If the two values are equal, the line is parallel to the plane and never meets it: there is no ${k}.) If one endpoint’s value is zero, that endpoint already lies on the plane.<br>2. <b>Report a negative</b> ${k} <b>correctly.</b> ${KNEG} means the plane divides <i>PQ</i> <b>externally in the ratio</b> ${MN}. Do not report the ratio as negative and do not drop the word “externally”: both cost the mark. Then, if the point itself is wanted, substitute ${k} back, or equivalently use the external formula with that ${m} and ${n}.`,
      },
      {
        t: 'p',
        html: `The sign prediction is also the fastest sanity check you own: a same-sign prediction with a positive ${k} on the page means you made an algebra slip.`,
      },
      { t: 'fig', id: 'm11-11-H-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the ratio in which the ${YZ} divides the line segment joining ${pt('A', '4', '8', '10')} and ${pt('B', '6', '10', '−8')}, and find the point of division.`,
        steps: [
          `The ${YZ} is ${x} = 0 (Topic 01).`,
          `<b>Predict first.</b> The ${x}-coordinates of ${A} and ${B} are 4 and 6: both positive, so both points lie on the same side of the ${YZ}. The plane cannot cross the segment, so the division must be external and ${k} must come out negative.`,
          `<b>Now compute.</b> Let the plane meet line <i>AB</i> in the ratio ${K1}. The ${x}-coordinate of the general point is<br>${fr(`6${k} + 4`, `${k} + 1`)},<br>and setting it to zero:<br>6${k} + 4 = 0 ⟹ ${k} = −${fr('2', '3')},<br>negative exactly as predicted. Since<br>${k} = −${fr('2', '3')} = −${fr(m, n)}<br>with ${m} = 2, ${n} = 3, the ${YZ} divides <i>AB</i> <b>externally in the ratio</b> ${RATIO('2', '3')}.`,
          `<b>The point of division.</b> Use the external formula with ${m} = 2, ${n} = 3, denominator ${m} − ${n} = −1:<br>${x} = ${fr('2(6) − 3(4)', '−1')} = ${fr('0', '−1')} = 0,<br><br>${y} = ${fr('2(10) − 3(8)', '−1')} = ${fr('−4', '−1')} = 4,<br><br>${z} = ${fr('2(−8) − 3(10)', '−1')} = ${fr('−46', '−1')} = 46.`,
          `The point is ${t3('0', '4', '46')}. Its ${x}-coordinate is 0, confirming it lies on the ${YZ}, and ${z} = 46 is nowhere between 10 and −8: visible proof that the point is outside the segment, beyond ${A} (as ${m}${NB}<${NB}${n} predicts, per Additional topic B).`,
          `<b>Contrast this with Topic 02’s practice question 3</b>, where the ${YZ} divides the join of ${t3('−2', '4', '7')} and ${t3('3', '−5', '8')}: there the ${x}-coordinates are −2 and 3, opposite in sign, so the answer is internal ${RATIO('2', '3')}. Same plane, same numerical ratio, opposite verdict, and the only thing that decided it was whether the endpoints straddled the plane.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: `Find the ratio in which the ${ZX} divides the join of ${pt('A', '3', '−4', '5')} and ${pt('B', '1', '−2', '7')}.`,
        steps: [
          `<b>Solution (the fast way).</b> The ${ZX} is ${y} = 0. The ${y}-coordinates are −4 and −2: both negative, so both endpoints sit on the same side and the answer is external before you write a single equation.<br><br>${fr(`−2${k} − 4`, `${k} + 1`)} = 0<br><br>⟹ −2${k} = 4 ⟹ ${k} = −2.`,
          `So ${k} = −${fr('2', '1')}: the plane divides <i>AB</i> <b>externally in the ratio</b> ${RATIO('2', '1')}. Here ${m} = 2${NB}>${NB}${n} = 1, so the point lies beyond ${B}; substituting gives<br>(${fr('2(1) − 1(3)', '1')}, ${fr('2(−2) − 1(−4)', '1')}, ${fr('2(7) − 1(5)', '1')})<br><br>= ${t3('−1', '0', '9')},<br>whose ${y}-coordinate is indeed 0.`,
          `<b>The trap.</b> The seductive wrong answer is “${RATIO('2', '1')} internally”. A student who solves −2${k} − 4 = 0, gets ${k} = −2, and then reports the ratio as ${RATIO('2', '1')} without reading the sign has done all the algebra correctly and still lost the mark. A second, subtler version writes the ratio as “${RATIO('−2', '1')}”, which is not how a ratio of division is stated. <b>Solve for</b> ${k}<b>, read its sign, then translate:</b> ${k}${NB}>${NB}0 ⇒ <b>internal</b> ${K1}<b>;</b> ${k}${NB}<${NB}0 ⇒ <b>external</b> ${RATIO(`|${k}|`, '1')}<b>.</b>`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `A point ${R} with ${x}-coordinate 4 lies on the line segment joining ${pt('P', '2', '−3', '4')} and ${pt('Q', '8', '0', '10')}. Find the coordinates of ${R}.`,
        steps: [
          `This is the same machinery with the target value no longer zero, which is the only thing that makes it look unfamiliar. Let ${R} divide <i>PQ</i> in the ratio ${K1}; its ${x}-coordinate is<br><br>${fr(`8${k} + 2`, `${k} + 1`)},<br><br>and we are told this equals 4:<br>8${k} + 2 = 4(${k} + 1)<br>⟹ 4${k} = 2 ⟹ ${k} = ${HALF}.`,
          `Positive, so the division is internal in the ratio ${RATIO('1', '2')}, consistent with the question’s word “segment”, and with the fact that 4 lies between the endpoint ${x}-values 2 and 8. Substituting ${k} = ${HALF} into the remaining two coordinates, top and bottom multiplied by 2:<br>${y} = ${fr('1(0) + 2(−3)', '1 + 2')} = ${fr('−6', '3')} = −2,<br><br>${z} = ${fr('1(10) + 2(4)', '1 + 2')} = ${fr('18', '3')} = 6.`,
          `Hence ${pt('R', '4', '−2', '6')}.`,
          `<b>The generalisation worth carrying.</b> “The plane ${z} = 0 cuts the segment where?” and “which point on the segment has ${x} = 4?” are the same question. Set the relevant coordinate of the ${K1} point equal to the required value (zero or otherwise), solve the single linear equation for ${k}, and the sign of ${k} tells you internal or external exactly as before.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[JEE Main]</b> Find the ratio in which the ${XY} divides the join of ${t3('1', '2', '3')} and ${t3('4', '5', '6')}, and find the point of division.`,
            a: `The ${z}-values 3 and 6 are both positive, so external.<br><br>${fr(`6${k} + 3`, `${k} + 1`)} = 0 ⇒ ${k} = −${HALF}:<br><br>externally in the ratio ${RATIO('1', '2')}, at the point ${t3('−2', '−1', '0')} (beyond the first point, since ${m}${NB}<${NB}${n}).`,
          },
          {
            q: `<b>[JEE Main]</b> Predict, without computing, whether the ${XY} divides the join of ${pt('A', '2', '−3', '4')} and ${pt('B', '−1', '−2', '1')} internally or externally; then find the ratio.`,
            a: `The ${z}-values 4 and 1 are both positive, so both endpoints lie above the ${XY} and the division is external.<br><br>${fr(`${k} + 4`, `${k} + 1`)} = 0 ⇒ ${k} = −4:<br><br>externally in the ratio ${RATIO('4', '1')}.`,
          },
          {
            q: `<b>[CBSE]</b> Find the point on the line joining ${pt('A', '1', '2', '3')} and ${pt('B', '3', '6', '9')} whose ${y}-coordinate is 5.`,
            a: `${fr(`6${k} + 2`, `${k} + 1`)} = 5 ⇒ ${k} = 3,<br><br>positive, so internal ${RATIO('3', '1')}; the point is (${fr('5', '2')}, 5, ${fr('15', '2')}).`,
          },
          {
            q: `<b>[CBSE]</b> State the ratio in which the ${YZ} divides the join of ${t3('−2', '4', '7')} and ${t3('3', '−5', '8')}, and say in one line why the answer is internal while the first worked example of this additional topic was external.`,
            a: `Internally in the ratio ${RATIO('2', '3')}. The ${x}-coordinates −2 and 3 have opposite signs, so the endpoints lie on opposite sides of the ${YZ} and the plane genuinely cuts the segment; in that worked example both ${x}-coordinates were positive, so it could not.`,
          },
        ],
      },

      { t: 'part', title: 'Cheat sheet additions' },
      {
        t: 'snapshot',
        rows: [
          {
            f: `Point on an axis at distance ${d} from ${P}`,
            note: `write the axis form (${pt('R', '0', y, '0')} and so on), impose ${RP2} = ${sq(d)}, and solve the <b>quadratic</b>. Compare ${d} with the axis distance ${DMIN} from Additional topic A: ${d} > ${DMIN} ⇒ two points, ${d} = ${DMIN} ⇒ one point (the foot of the perpendicular), ${d} < ${DMIN} ⇒ none. Writing one root where there are two is the standard mark loss.`,
          },
          {
            f: 'Linear versus quadratic',
            note: 'equidistant from two points is linear (the squares cancel); at a fixed distance from one point is quadratic (nothing cancels). Do not carry over the “always linear” habit from Additional topic D into this pattern.',
          },
          {
            f: 'Which side of the plane?',
            note: `Before solving any “in what ratio does a coordinate plane divide <i>PQ</i>” question, compare the signs of the relevant coordinate at the two endpoints: <b>opposite signs ⇒ internal, same sign ⇒ external</b> (equal values ⇒ the line is parallel to the plane: no point); one of them zero ⇒ that endpoint already lies on the plane.`,
          },
          {
            f: `Reading ${k}`,
            note: `${k}${NB}>${NB}0 ⇒ internal, ratio ${K1}. ${k}${NB}<${NB}0 ⇒ external, ratio ${RATIO(`|${k}|`, '1')}: say “externally” out loud and never write a negative ratio. With ${KNEG}: external ${MN}, landing beyond ${Q} if ${m}${NB}>${NB}${n} and beyond ${P} if ${m}${NB}<${NB}${n}.`,
          },
          {
            f: 'Same question, two disguises',
            note: `“where does the plane ${z} = 0 cut <i>PQ</i>” and “which point of <i>PQ</i> has ${x} = 4” are one method: set the relevant coordinate of the ${K1} point to the required value and solve for ${k}.`,
          },
        ],
        aids: [],
      },

      { t: 'part', title: 'Beyond this chapter' },
      {
        t: 'p',
        html: `The ratio in which a <b>general plane</b> (intercept form ${fr(x, I('a'))} + ${fr(y, I('b'))} + ${fr(z, I('c'))} = 1, or <i>Ax</i> + <i>By</i> + <i>Cz</i> + <i>D</i> = 0) divides a segment, the <b>angle between two lines</b>, the <b>equation of a line in space</b> and the <b>shortest distance between skew lines</b> all need the equation of a plane or direction cosines and ratios. None of these is part of the Class 11 syllabus for this chapter; each belongs to Class 12, in the three-dimensional geometry chapter that follows vector algebra (the equation of a plane, which the first of them needs, is no longer in the rationalised NCERT Class 12 book; it is still in the JEE Advanced syllabus). The Class 12 preview at the end of Topic 03 signposts them.`,
      },
    ],
  },
];
