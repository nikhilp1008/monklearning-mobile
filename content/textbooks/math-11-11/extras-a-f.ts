import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11, Additional topics A–F, pp. 1037–1051 of the Class 11 Mathematics
 * Reference (October 2026 edition), word for word: the supplement's "Addendum to
 * Chapter 11: Missing Problem Patterns", the book's Patterns 1–6 (decision 37),
 * "Pattern N" → "Additional topic A…F". The supplement's opening (p. 1037, headings
 * not copied) is A's "Introduction"; its "Addendum Cheat Sheet" (p. 1051) is F's
 * last part, "Cheat sheet".
 * Figures: 11.7 (caption p. 1038, drawn p. 1039) at the end of A's Method; 11.8
 * (caption p. 1040, drawn p. 1041) at the end of B's Method; 11.9 (caption
 * p. 1043, drawn p. 1044) at the end of C's Method; 11.10 (caption p. 1048, drawn
 * p. 1049) in E's part 5B, before its worked example. No unnumbered drawings.
 * Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const sb = (b: string, s: string) => `<i>${b}</i><sub>${s}</sub>`;
/** A no-break space: keeps a short expression on one line. */
const NB = ' ';
/** A zero-width space: lets a long hyphenated phrase break after a hyphen. */
const ZW = '​';

const x = I('x');
const y = I('y');
const z = I('z');
const a = I('a');
const b = I('b');
const c = I('c');
const k = I('k');
const m = I('m');
const n = I('n');
const r = I('r');
const A = I('A');
const B = I('B');
const C = I('C');
const D = I('D');
const G = I('G');
const N = I('N');
const O = I('O');
const P = I('P');
const Q = I('Q');
const R = I('R');
const S = I('S');
const x1 = sb('x', '1');
const x2 = sb('x', '2');
const x3 = sb('x', '3');
const x4 = sb('x', '4');
const y1 = sb('y', '1');
const y2 = sb('y', '2');
const y3 = sb('y', '3');
const y4 = sb('y', '4');
const z1 = sb('z', '1');
const z2 = sb('z', '2');
const z3 = sb('z', '3');
const z4 = sb('z', '4');
const G1 = sb('G', '1');
const sq = (s: string) => `${s}<sup>2</sup>`;
const HALF = fr('1', '2');
/** A short triple kept whole: (a, b, c). */
const t3 = (p: string, q: string, s: string) => `(${p},${NB}${q},${NB}${s})`;
/** A named point with its triple: P(x, y, z). */
const pt = (name: string, p: string, q: string, s: string) => `${I(name)}${t3(p, q, s)}`;
const RATIO = (p: string, q: string) => `${p}${NB}∶${NB}${q}`;
const MN = RATIO(m, n);
const XY = `${I('XY')}-plane`;
const YZ = `${I('YZ')}-plane`;
const PXYZ = pt('P', x, y, z);
const RINT = `${R}<sub>int</sub>`;
const REXT = `${R}<sub>ext</sub>`;
const dx = `<i>d</i><sub>${x}</sub>`;
const dy = `<i>d</i><sub>${y}</sub>`;
const dz = `<i>d</i><sub>${z}</sub>`;
const OP2 = `${I('OP')}<sup>2</sup>`;
const SEC = (op: string, den: string) =>
  `(${fr(`<i>mx</i><sub>2</sub> ${op} <i>nx</i><sub>1</sub>`, den)}, ${fr(`<i>my</i><sub>2</sub> ${op} <i>ny</i><sub>1</sub>`, den)}, ${fr(`<i>mz</i><sub>2</sub> ${op} <i>nz</i><sub>1</sub>`, den)})`;
const ABCSUM = `${a} + ${b} + ${c}`;
const IX = fr(`<i>ax</i><sub>1</sub> + <i>bx</i><sub>2</sub> + <i>cx</i><sub>3</sub>`, ABCSUM);
const IY = fr(`<i>ay</i><sub>1</sub> + <i>by</i><sub>2</sub> + <i>cy</i><sub>3</sub>`, ABCSUM);
const IZ = fr(`<i>az</i><sub>1</sub> + <i>bz</i><sub>2</sub> + <i>cz</i><sub>3</sub>`, ABCSUM);
/** The book's one-line triple is too wide for a card: one coordinate per line. */
const INCENTRE = `${x}<sub>${I('I')}</sub> = ${IX},<br>${y}<sub>${I('I')}</sub> = ${IY},<br>${z}<sub>${I('I')}</sub> = ${IZ}`;
const TETRA = `${x}<sub>${G}</sub> = ${fr(`${x1} + ${x2} + ${x3} + ${x4}`, '4')},<br>${y}<sub>${G}</sub> = ${fr(`${y1} + ${y2} + ${y3} + ${y4}`, '4')},<br>${z}<sub>${G}</sub> = ${fr(`${z1} + ${z2} + ${z3} + ${z4}`, '4')}`;
const SIDES = `${a} = |<i>BC</i>|, ${b} = |<i>CA</i>|, ${c} = |<i>AB</i>|`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 1037–1040 ────────────────
  {
    n: 'A',
    title: 'Distance of a Point from a Coordinate Axis',
    extra: true,
    kalam: 'The coordinate along the axis cancels, and what survives is the square root of the squares of the other two coordinates.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topics 01–03 you have just worked through give you every tool this chapter owns: the octant/plane/axis vocabulary of Topic 01, the distance and section formulas of Topic 02, and the centroid–collinearity–locus applications of Topic 03. What follows is not new machinery. It is the set of question shapes that examiners build out of that machinery and that a first pass through the chapter can leave under-drilled. Work each pattern once with a pen and it stops being a surprise in the hall.',
      },
      {
        t: 'p',
        html: 'Each treatment gives you the method in one or two lines, worked examples in full, and two practice items with answers.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Topic 01, Procedure B told you the foot of the perpendicular from ${PXYZ} onto an axis: on the ${z}-axis it is ${pt('N', '0', '0', z)}. Take the one extra step the procedure stopped short of: measure the length <i>PN</i> with the distance formula:`,
      },
      {
        t: 'formula',
        kicker: `Distance of ${PXYZ} from the ${z}-axis`,
        main: `<i>PN</i> = √((${x} − 0)<sup>2</sup> + (${y} − 0)<sup>2</sup> + (${z} − ${z})<sup>2</sup>)<br>= √(${sq(x)} + ${sq(y)})`,
        legend: [
          `<i>PN</i> = the distance of ${P} from the ${z}-axis`,
          `${N} = the foot of the perpendicular on the ${z}-axis`,
          `${x}, ${y}, ${z} = the coordinates of ${P}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'The coordinate along the axis cancels, and what survives is the square root of the squares of the <b>other two</b> coordinates. That is the whole pattern:',
      },
      {
        t: 'table',
        title: null,
        head: ['Distance of P(x, y, z) from', 'Foot of perpendicular', 'Distance'],
        rows: [
          [`the ${x}-axis`, t3(x, '0', '0'), `√(${sq(y)} + ${sq(z)})`],
          [`the ${y}-axis`, t3('0', y, '0'), `√(${sq(z)} + ${sq(x)})`],
          [`the ${z}-axis`, t3('0', '0', z), `√(${sq(x)} + ${sq(y)})`],
        ],
      },
      {
        t: 'p',
        html: `Hold this against the plane result from Topic 01’s Key definitions and relations part and the contrast is clean: <b>distance from a coordinate plane uses one coordinate; distance from a coordinate axis uses the other two.</b> A plane kills one coordinate, an axis kills two, so the plane distance is |${x}|-style and the axis distance is a two-term square root. Mixing them up is the single commonest slip on this one-marker: the distance of ${t3('2', '−6', '3')} from the ${YZ} is 2, but its distance from the ${x}-axis is √(36 + 9) = √45.`,
      },
      { t: 'fig', id: 'm11-11-fig-11.7' },
      {
        t: 'p',
        html: `<b>Locus consequence.</b> Fix that distance at a constant ${c}${NB}>${NB}0. “All points at distance ${c} from the ${z}-axis” is √(${sq(x)} + ${sq(y)}) = ${c}, that is`,
      },
      {
        t: 'formula',
        kicker: `Constant distance ${c} from the ${z}-axis: a right circular cylinder`,
        main: `${sq(x)} + ${sq(y)} = ${sq(c)}${NB}${NB}(${z} free)`,
        legend: [`${c} = the fixed distance (${c}${NB}>${NB}0)`, `${x}, ${y}, ${z} = the coordinates of a point on the cylinder`],
        note: null,
      },
      {
        t: 'p',
        html: `a <b>right circular cylinder</b> of radius ${c} with the ${z}-axis as its axis. The free coordinate is the giveaway: nothing constrains ${z}, so the circle of radius ${c} in the ${XY} is swept vertically into a tube. Compare this with the two locus results you already have: equidistant from two points gives a plane, fixed distance from a point gives a sphere, fixed distance from a line gives a cylinder.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the distance of ${pt('P', '3', '−4', '12')} from (i) the ${z}-axis, (ii) the ${x}-axis, (iii) the ${y}-axis, and (iv) the origin.`,
        steps: [
          'Apply the table, discarding in each case the coordinate that lies along the axis.',
          `(i) Distance from the ${z}-axis<br>= √(${sq(x)} + ${sq(y)}) = √(9 + 16)<br>= √25 = 5.`,
          `(ii) Distance from the ${x}-axis<br>= √(${sq(y)} + ${sq(z)}) = √(16 + 144)<br>= √160 = 4√10.`,
          `(iii) Distance from the ${y}-axis<br>= √(${sq(z)} + ${sq(x)}) = √(144 + 9)<br>= √153 = 3√17.`,
          '(iv) Distance from the origin<br>= √(9 + 16 + 144) = √169 = 13.',
          `Notice that every one of the three axis distances is smaller than <i>OP</i> = 13. That is not a coincidence: the foot of the perpendicular is the nearest point of the axis to ${P}, and the origin is itself a point of that axis, so the perpendicular can never be longer than <i>OP</i>.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `For ${pt('P', '2', '−3', '6')}, compute the three axis distances and show that the sum of their squares equals 2${OP2}.`,
        steps: [
          `${dx} = √((−3)<sup>2</sup> + 6<sup>2</sup>) = √45,<br>${dy} = √(6<sup>2</sup> + 2<sup>2</sup>) = √40,<br>${dz} = √(2<sup>2</sup> + (−3)<sup>2</sup>) = √13.`,
          `Then ${dx}<sup>2</sup> + ${dy}<sup>2</sup> + ${dz}<sup>2</sup> = 45 + 40 + 13 = 98, while ${OP2} = 4 + 9 + 36 = 49, so indeed 98 = 2(49).`,
          `The reason is structural, not arithmetical: each of ${sq(x)}, ${sq(y)}, ${sq(z)} appears in exactly two of the three axis distances, so<br>${dx}<sup>2</sup> + ${dy}<sup>2</sup> + ${dz}<sup>2</sup><br>= (${sq(y)} + ${sq(z)}) + (${sq(z)} + ${sq(x)}) + (${sq(x)} + ${sq(y)})<br>= 2(${sq(x)} + ${sq(y)} + ${sq(z)}) = 2${OP2}.`,
          'Carry this identity as a free self-check whenever a question asks for more than one axis distance.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[JEE Main]</b> Find the distance of the point ${t3('1', '2', '3')} from the ${y}-axis.`,
            a: `√(${sq(z)} + ${sq(x)}) = √(9 + 1) = √10.`,
          },
          {
            q: `<b>[JEE Main]</b> Find the equation of the locus of a point whose distance from the ${x}-axis is always 4, and name the surface.`,
            a: `${sq(y)} + ${sq(z)} = 16 (with ${x} free); a right circular cylinder of radius 4 whose axis is the ${x}-axis.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic B · pp. 1040–1042 ────────────────
  {
    n: 'B',
    title: 'Substituting into the Section Formula to Produce a Point',
    extra: true,
    kalam: 'Topic 02 gives you both formulas; this pattern is the drill of actually running numbers through them.',
    blocks: [
      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Topic 02 gives you both formulas; this pattern is the drill of actually running numbers through them. Let ${R} divide the join of ${pt('P', x1, y1, z1)} and ${pt('Q', x2, y2, z2)} in the ratio ${MN}, meaning <i>PR</i>${NB}∶${NB}<i>RQ</i> = ${MN}. Then`,
      },
      { t: 'p', html: `${RINT} = ${SEC('+', `${m} + ${n}`)},<br>${REXT} = ${SEC('−', `${m} − ${n}`)}.` },
      { t: 'p', html: 'Three habits make this error-proof under exam pressure.' },
      {
        t: 'p',
        html: `1. <b>Write down which point is</b> ${P} <b>and which is</b> ${Q} <b>before you substitute.</b> ${m} always multiplies the far point ${t3(x2, y2, z2)}. Swapping ${P} and ${Q} silently inverts your ratio.<br>2. <b>Internal adds, external subtracts</b>: in the numerator and the denominator, together. Changing one but not the other is the classic wreck.<br>3. <b>Sanity-check the external answer’s position.</b> If ${m}${NB}>${NB}${n} the external point lies beyond ${Q}; if ${m}${NB}<${NB}${n} it lies beyond ${P}; and ${m} = ${n} has no external point at all (the denominator vanishes).`,
      },
      { t: 'fig', id: 'm11-11-fig-11.8' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the coordinates of the point that divides the join of ${pt('P', '−2', '3', '5')} and ${pt('Q', '1', '−4', '6')} in the ratio ${RATIO('2', '3')} (i) internally, (ii) externally.`,
        steps: [
          `Here ${t3(x1, y1, z1)} = ${t3('−2', '3', '5')}, ${t3(x2, y2, z2)} = ${t3('1', '−4', '6')}, ${m} = 2, ${n} = 3.`,
          `<b>(i) Internal.</b> Denominator ${m} + ${n} = 5:<br>${x} = ${fr('2(1) + 3(−2)', '5')} = ${fr('2 − 6', '5')} = −${fr('4', '5')},<br><br>${y} = ${fr('2(−4) + 3(3)', '5')} = ${fr('−8 + 9', '5')} = ${fr('1', '5')},<br><br>${z} = ${fr('2(6) + 3(5)', '5')} = ${fr('12 + 15', '5')} = ${fr('27', '5')}.`,
          `The internal point is (−${fr('4', '5')}, ${fr('1', '5')}, ${fr('27', '5')}).`,
          `<b>(ii) External.</b> Same numbers, every + becoming −; denominator ${m} − ${n} = 2 − 3 = −1:<br>${x} = ${fr('2(1) − 3(−2)', '−1')} = ${fr('8', '−1')} = −8,<br><br>${y} = ${fr('2(−4) − 3(3)', '−1')} = ${fr('−17', '−1')} = 17,<br><br>${z} = ${fr('2(6) − 3(5)', '−1')} = ${fr('−3', '−1')} = 3.`,
          `The external point is ${t3('−8', '17', '3')}.`,
          `<b>Check the geometry.</b> The step from ${P} to ${Q} is ${t3('3', '−7', '1')}. The internal point sits ${fr('2', '5')} of that step past ${P}:<br>${t3('−2', '3', '5')} + ${fr('2', '5')}${t3('3', '−7', '1')}<br><br>= (−2 + ${fr('6', '5')}, 3 − ${fr('14', '5')}, 5 + ${fr('2', '5')})<br><br>= (−${fr('4', '5')}, ${fr('1', '5')}, ${fr('27', '5')}),<br><br>which matches. The external point sits 2 full steps backwards from ${P}:<br>${t3('−2', '3', '5')} − 2${t3('3', '−7', '1')}<br>= ${t3('−8', '17', '3')},<br>which also matches, and it lies beyond ${P}, exactly as the rule ${m}${NB}<${NB}${n} predicts.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the point dividing the join of ${pt('A', '1', '−2', '3')} and ${pt('B', '3', '4', '−5')} in the ratio ${RATIO('3', '1')} (i) internally, (ii) externally.`,
        steps: [
          `Now ${m} = 3, ${n} = 1, ${A} is the first point and ${B} the second.`,
          `<b>(i) Internal</b>, denominator 4:<br>${x} = ${fr('3(3) + 1(1)', '4')} = ${fr('10', '4')} = ${fr('5', '2')},<br><br>${y} = ${fr('3(4) + 1(−2)', '4')} = ${fr('10', '4')} = ${fr('5', '2')},<br><br>${z} = ${fr('3(−5) + 1(3)', '4')} = ${fr('−12', '4')} = −3,<br><br>giving (${fr('5', '2')}, ${fr('5', '2')}, −3), three-quarters of the way from ${A} to ${B}, as ${RATIO('3', '1')} internal should be.`,
          `<b>(ii) External</b>, denominator 3 − 1 = 2:<br>${x} = ${fr('3(3) − 1(1)', '2')} = ${fr('8', '2')} = 4,<br><br>${y} = ${fr('3(4) − 1(−2)', '2')} = ${fr('14', '2')} = 7,<br><br>${z} = ${fr('3(−5) − 1(3)', '2')} = ${fr('−18', '2')} = −9,<br><br>giving ${t3('4', '7', '−9')}. Since ${m}${NB}>${NB}${n} here, this point lies <b>beyond</b> ${B}; contrast the first worked example of this additional topic, where ${m}${NB}<${NB}${n} threw the point out beyond ${P}. Same formula, opposite side, and the only thing that decided it was whether ${m} − ${n} was positive or negative.`,
          `<b>A one-line link to the ${RATIO(k, '1')} form.</b> External division in the ratio ${MN} is internal division in the ratio ${m}${NB}∶${NB}(−${n}), i.e. ${k} = −${fr(m, n)} in the workhorse form of Topic 02’s Key formulas and definitions part. For the first worked example of this additional topic, ${k} = −${fr('2', '3')} gives<br><br>${x} = ${fr(`${k}(1) + (−2)`, `${k} + 1`)} = ${fr('−2 − 6', '−2 + 3')} = −8 (top and bottom multiplied by 3),<br><br>confirming the external answer.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the coordinates of the point dividing the join of ${pt('A', '2', '−1', '4')} and ${pt('B', '4', '3', '2')} in the ratio ${RATIO('1', '3')} (i) internally, (ii) externally.`,
            a: `(i) (${fr('5', '2')}, 0, ${fr('7', '2')});<br><br>(ii) ${t3('1', '−3', '5')}.`,
          },
          {
            q: `<b>[CBSE]</b> Find the point dividing the join of ${pt('A', '−1', '4', '−2')} and ${pt('B', '3', '−2', '6')} in the ratio ${RATIO('5', '2')} externally, and state on which side of the segment it lies.`,
            a: `(${fr('17', '3')}, −6, ${fr('34', '3')}); since ${m}${NB}>${NB}${n} it lies beyond ${B}.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic C · pp. 1043–1045 ────────────────
  {
    n: 'C',
    title: 'The Fourth Vertex of a Parallelogram',
    extra: true,
    kalam: 'The property that unlocks this is one line: the diagonals of a parallelogram bisect each other, so the two diagonals share a midpoint.',
    blocks: [
      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'The property that unlocks this is one line: <b>the diagonals of a parallelogram bisect each other</b>, so the two diagonals share a midpoint. For a parallelogram <i>ABCD</i> (vertices named in order round the figure, so the diagonals are <i>AC</i> and <i>BD</i>),',
      },
      {
        t: 'formula',
        kicker: 'Fourth vertex of a parallelogram <i>ABCD</i>',
        main: `midpoint of <i>AC</i> = midpoint of <i>BD</i><br>⟹ ${fr(`${A} + ${C}`, '2')} = ${fr(`${B} + ${D}`, '2')}<br>⟹ ${D} = ${A} + ${C} − ${B}`,
        legend: [`${A}, ${B}, ${C}, ${D} = the vertices in order round the figure`, '<i>AC</i>, <i>BD</i> = the diagonals'],
        note: null,
      },
      {
        t: 'p',
        html: 'read coordinate by coordinate. Topic 03’s third worked example asked the forward question (four points given, prove parallelogram), there with equal side vectors; this is the reverse question, and it is a standing NCERT miscellaneous-exercise item.',
      },
      {
        t: 'p',
        html: `<b>Watch the naming.</b> In <i>ABCD</i>, ${B} and ${D} are the opposite vertices, which is why ${B} carries the minus sign. If the question merely says “three vertices of a parallelogram are ${P}, ${Q}, ${R}” without fixing the order, there are <b>three</b> possible fourth vertices, one for each choice of which given point is opposite the new one.`,
      },
      { t: 'fig', id: 'm11-11-fig-11.9' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Three vertices of a parallelogram <i>ABCD</i> are ${pt('A', '3', '−1', '2')}, ${pt('B', '1', '2', '−4')} and ${pt('C', '−1', '1', '2')}. Find the fourth vertex ${D}.`,
        steps: [
          `Let ${pt('D', x, y, z)}. The diagonals <i>AC</i> and <i>BD</i> have the same midpoint:<br>(${fr('3 + (−1)', '2')}, ${fr('−1 + 1', '2')}, ${fr('2 + 2', '2')})<br><br>= (${fr(`1 + ${x}`, '2')}, ${fr(`2 + ${y}`, '2')}, ${fr(`−4 + ${z}`, '2')}).`,
          `The left side is ${t3('1', '0', '2')}. Equating coordinates:<br>${fr(`1 + ${x}`, '2')} = 1 ⇒ ${x} = 1,<br><br>${fr(`2 + ${y}`, '2')} = 0 ⇒ ${y} = −2,<br><br>${fr(`−4 + ${z}`, '2')} = 2 ⇒ ${z} = 8.`,
          `Hence ${pt('D', '1', '−2', '8')}.`,
          `<b>Verification (worth the ten seconds).</b> The step ${A} → ${B} is ${B} − ${A} = ${t3('−2', '3', '−6')}, and the step ${D} → ${C} is<br>${C} − ${D} = (−1 − 1, 1 + 2, 2 − 8)<br>= ${t3('−2', '3', '−6')}.<br>The two are identical, so <i>AB</i> and <i>DC</i> are equal in length and parallel in direction: the defining property of the parallelogram <i>ABCD</i>.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `The points ${pt('P', '1', '2', '3')}, ${pt('Q', '3', '−1', '5')} and ${pt('R', '4', '0', '−3')} are three vertices of a parallelogram, the labelling not being specified. Find all possible positions of the fourth vertex.`,
        steps: [
          `The unknown vertex ${S} is opposite exactly one of the three given points, and the “${D} = ${A} + ${C} − ${B}” rule says: add the two points adjacent to ${S} and subtract the one opposite it.`,
          `• ${S} opposite ${Q}: ${S} = ${P} + ${R} − ${Q}<br>= (1 + 4 − 3, 2 + 0 + 1, 3 − 3 − 5)<br>= ${t3('2', '3', '−5')}.<br>• ${S} opposite ${P}: ${S} = ${Q} + ${R} − ${P}<br>= (3 + 4 − 1, −1 + 0 − 2, 5 − 3 − 3)<br>= ${t3('6', '−3', '−1')}.<br>• ${S} opposite ${R}: ${S} = ${P} + ${Q} − ${R}<br>= (1 + 3 − 4, 2 − 1 − 0, 3 + 5 + 3)<br>= ${t3('0', '1', '11')}.`,
          `So the fourth vertex is ${t3('2', '3', '−5')}, ${t3('6', '−3', '−1')} or ${t3('0', '1', '11')}.`,
          'The three answers are not a defect in the question: three given points genuinely sit inside three different parallelograms, and a question that wants a unique answer must name the vertices in cyclic order. If the paper says “<i>ABCD</i>”, use only the opposite-vertex rule; if it says “three vertices of a parallelogram”, expect three answers unless a further condition is imposed.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Three vertices of a parallelogram <i>ABCD</i> are ${pt('A', '2', '−1', '3')}, ${pt('B', '4', '3', '−1')} and ${pt('C', '0', '5', '2')}. Find ${D}.`,
            a: `${D} = ${A} + ${C} − ${B} = ${t3('−2', '1', '6')}.`,
          },
          {
            q: `<b>[CBSE]</b> If ${pt('A', '1', '2', '3')}, ${pt('B', '−1', '−2', '−1')} and ${pt('C', '2', '3', '2')} are three consecutive vertices of a parallelogram <i>ABCD</i>, find ${D} and state, with reason, whether <i>ABCD</i> is a rhombus.`,
            a: `${D} = ${A} + ${C} − ${B} = ${t3('4', '7', '6')}. Not a rhombus: <i>AB</i> = √(4 + 16 + 16) = 6 but <i>BC</i> = √(9 + 25 + 9) = √43, and a rhombus needs all four sides equal.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic D · pp. 1045–1047 ────────────────
  {
    n: 'D',
    title: 'A Point Equidistant from Three or Four Given Points',
    extra: true,
    kalam: 'Each equidistance condition costs you one linear equation, and the problem becomes simultaneous linear equations.',
    blocks: [
      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Topic 02’s fourth worked example established the key structural fact: imposing <i>PA</i> = <i>PB</i> on a variable point ${PXYZ} produces a <b>linear</b> equation, because squaring and subtracting annihilates every ${sq(x)}, ${sq(y)}, ${sq(z)} term. So each equidistance condition costs you one linear equation, and the problem becomes simultaneous linear equations.`,
      },
      {
        t: 'p',
        html: `Count your conditions against your unknowns:<br>• <b>Two given points</b> leave a plane (one equation, three unknowns): the perpendicular bisector plane.<br>• <b>Three given points</b>, not collinear, leave a <b>line</b> (two equations), so a unique answer needs one more restriction, typically “the point lies in the ${XY}” or “on the ${y}-axis”, which is what exam questions supply, choosing the points so that the line meets that plane or axis exactly once (a line can run parallel to a plane, and it usually misses an axis altogether).<br>• <b>Four given points</b>, not coplanar, pin the point down uniquely (three equations, three unknowns); this is the circumcentre of the tetrahedron they form.`,
      },
      {
        t: 'p',
        html: `Always square both sides first. Write <i>PA</i><sup>2</sup> = <i>PB</i><sup>2</sup>, never <i>PA</i> = <i>PB</i> with radicals left standing.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the point equidistant from ${pt('O', '0', '0', '0')}, ${pt('A', '2', '0', '0')}, ${pt('B', '0', '3', '0')} and ${pt('C', '0', '0', '4')}.`,
        steps: [
          `Let ${PXYZ} be the required point, so <i>PO</i><sup>2</sup> = <i>PA</i><sup>2</sup> = <i>PB</i><sup>2</sup> = <i>PC</i><sup>2</sup>.`,
          `From <i>PO</i><sup>2</sup> = <i>PA</i><sup>2</sup>:<br>${sq(x)} + ${sq(y)} + ${sq(z)} = (${x} − 2)<sup>2</sup> + ${sq(y)} + ${sq(z)}<br>⟹ 0 = −4${x} + 4 ⟹ ${x} = 1.`,
          `From <i>PO</i><sup>2</sup> = <i>PB</i><sup>2</sup>:<br>${sq(x)} + ${sq(y)} + ${sq(z)} = ${sq(x)} + (${y} − 3)<sup>2</sup> + ${sq(z)}<br>⟹ 0 = −6${y} + 9 ⟹ ${y} = ${fr('3', '2')}.`,
          `From <i>PO</i><sup>2</sup> = <i>PC</i><sup>2</sup>:<br>${sq(x)} + ${sq(y)} + ${sq(z)} = ${sq(x)} + ${sq(y)} + (${z} − 4)<sup>2</sup><br>⟹ 0 = −8${z} + 16 ⟹ ${z} = 2.`,
          `The point is (1, ${fr('3', '2')}, 2), and the common distance is<br><br>√(1 + ${fr('9', '4')} + 4) = √(${fr('29', '4')}) = ${fr('√29', '2')}.`,
          `<b>Read the answer, don’t just compute it.</b> Each coordinate came out as exactly half of the corresponding intercept. In general, the point equidistant from ${pt('O', '0', '0', '0')}, ${pt('A', a, '0', '0')}, ${pt('B', '0', b, '0')} and ${pt('C', '0', '0', c)} is<br><br>(${fr(a, '2')}, ${fr(b, '2')}, ${fr(c, '2')}):<br><br>the centre of the rectangular box built on those three edges, which is the one place a sphere through those four corners could possibly be centred (and that sphere passes through all eight corners of the box). Knowing this converts a four-line question into a one-line answer.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the point in the ${XY} that is equidistant from ${pt('A', '2', '0', '3')}, ${pt('B', '0', '3', '2')} and ${pt('C', '0', '0', '1')}.`,
        steps: [
          `“In the ${XY}” means ${z} = 0 (Topic 01), so write the unknown as ${pt('P', x, y, '0')}: the restriction has already used up one of the three unknowns. Then<br><i>PA</i><sup>2</sup> = (${x} − 2)<sup>2</sup> + ${sq(y)} + 9,<br><i>PB</i><sup>2</sup> = ${sq(x)} + (${y} − 3)<sup>2</sup> + 4,<br><i>PC</i><sup>2</sup> = ${sq(x)} + ${sq(y)} + 1.`,
          `Impose <i>PA</i><sup>2</sup> = <i>PC</i><sup>2</sup>:<br>(${x} − 2)<sup>2</sup> + 9 = ${sq(x)} + 1<br>⟹ −4${x} + 4 + 9 = 1<br>⟹ −4${x} = −12 ⟹ ${x} = 3.`,
          `Impose <i>PB</i><sup>2</sup> = <i>PC</i><sup>2</sup>:<br>(${y} − 3)<sup>2</sup> + 4 = ${sq(y)} + 1<br>⟹ −6${y} + 9 + 4 = 1<br>⟹ −6${y} = −12 ⟹ ${y} = 2.`,
          `The point is ${t3('3', '2', '0')}. Checking:<br><i>PA</i><sup>2</sup> = 1 + 4 + 9 = 14,<br><i>PB</i><sup>2</sup> = 9 + 1 + 4 = 14,<br><i>PC</i><sup>2</sup> = 9 + 4 + 1 = 14,<br>so all three distances equal √14.`,
          `Note how the ${sq(x)} and ${sq(y)} terms cancelled every time. If a quadratic term ever survives in a problem of this type, you have made an algebra slip: go back before you go forward.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[JEE Main]</b> Find the point equidistant from ${pt('O', '0', '0', '0')}, ${pt('A', '4', '0', '0')}, ${pt('B', '0', '−6', '0')} and ${pt('C', '0', '0', '2')}, and state the common distance.`,
            a: `${t3('2', '−3', '1')}; common distance √(4 + 9 + 1) = √14.`,
          },
          {
            q: `<b>[JEE Main]</b> Find the point in the ${XY} equidistant from ${pt('A', '1', '−1', '0')}, ${pt('B', '2', '1', '2')} and ${pt('C', '3', '2', '−1')}.`,
            a: `(${fr('3', '2')}, 1, 0); the common distance is ${fr('√17', '2')}.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic E · pp. 1047–1050 ────────────────
  {
    n: 'E',
    title: 'The JEE Extensions: Incentre in 3D and the Centroid of a Tetrahedron',
    extra: true,
    kalam: 'The pattern is worth memorising as a family: a triangle’s medians split 2 ∶ 1 with denominator 3; a tetrahedron’s split 3 ∶ 1 with denominator 4.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 03 flagged both of these as beyond-CBSE extensions that JEE rewards. Here they are with the numbers filled in. Neither needs anything past the section formula.',
      },

      { t: 'part', title: '5A. Incentre: the weighted point' },
      {
        t: 'p',
        html: `<b>Method.</b> For a triangle <i>ABC</i> let the side lengths opposite the vertices be<br>${SIDES}.<br>Then the incentre (the centre of the inscribed circle, the point of the triangle’s plane, inside it, equidistant from the three sides) is the average of the vertices <b>weighted by those opposite side lengths</b>:`,
      },
      {
        t: 'formula',
        kicker: 'Incentre of a triangle',
        main: `${INCENTRE}`,
        legend: [
          `${x}<sub>${I('I')}</sub>, ${y}<sub>${I('I')}</sub>, ${z}<sub>${I('I')}</sub> = the coordinates of the incentre ${I('I')}`,
          `${a} = the side opposite ${A} (|<i>BC</i>|)`,
          `${b} = the side opposite ${B} (|<i>CA</i>|)`,
          `${c} = the side opposite ${C} (|<i>AB</i>|)`,
          `${x1}, ${y1}, ${z1} = the coordinates of ${A}`,
          `${x2}, ${y2}, ${z2} = the coordinates of ${B}`,
          `${x3}, ${y3}, ${z3} = the coordinates of ${C}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `Compare with the centroid, which is the same expression with all three weights equal to 1. The order matters and it is the order students get wrong: the weight sitting next to ${A}’s coordinates is ${a} = |<i>BC</i>|, the length of the side <b>opposite</b> ${A}.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the incentre of the triangle with vertices ${pt('A', '1', '2', '3')}, ${pt('B', '4', '8', '−3')}, ${pt('C', '9', '6', '11')}.`,
        steps: [
          `First the three side lengths, always squaring before rooting.<br>${a} = |<i>BC</i>|<br>= √((9 − 4)<sup>2</sup> + (6 − 8)<sup>2</sup> + (11 + 3)<sup>2</sup>)<br>= √(25 + 4 + 196) = √225 = 15,<br>${b} = |<i>CA</i>|<br>= √((1 − 9)<sup>2</sup> + (2 − 6)<sup>2</sup> + (3 − 11)<sup>2</sup>)<br>= √(64 + 16 + 64) = √144 = 12,<br>${c} = |<i>AB</i>|<br>= √((4 − 1)<sup>2</sup> + (8 − 2)<sup>2</sup> + (−3 − 3)<sup>2</sup>)<br>= √(9 + 36 + 36) = √81 = 9.`,
          `A 9–12–15 triangle, so ${a} + ${b} + ${c} = 36. Now weight and average:<br>${x}<sub>${I('I')}</sub> = ${fr('15(1) + 12(4) + 9(9)', '36')}<br><br>= ${fr('15 + 48 + 81', '36')} = ${fr('144', '36')} = 4,<br><br>${y}<sub>${I('I')}</sub> = ${fr('15(2) + 12(8) + 9(6)', '36')}<br><br>= ${fr('30 + 96 + 54', '36')} = ${fr('180', '36')} = 5,<br><br>${z}<sub>${I('I')}</sub> = ${fr('15(3) + 12(−3) + 9(11)', '36')}<br><br>= ${fr('45 − 36 + 99', '36')} = ${fr('108', '36')} = 3.`,
          `The incentre is ${pt('I', '4', '5', '3')}.`,
          `<b>Independent check.</b> Since 9<sup>2</sup> + 12<sup>2</sup> = 81 + 144 = 225 = 15<sup>2</sup>, the triangle is right-angled at ${A}. For a right triangle the inradius is<br><br>${r} = ${HALF}(leg + leg − hypotenuse)<br><br>= ${HALF}(9 + 12 − 15) = 3,<br><br>and the incentre of a right triangle lies at distance ${r}√2 from the right-angled vertex. Here<br><i>IA</i> = √((4 − 1)<sup>2</sup> + (5 − 2)<sup>2</sup> + (3 − 3)<sup>2</sup>)<br>= √18 = 3√2, exactly as required.`,
        ],
        ans: '',
      },

      { t: 'part', title: '5B. Centroid of a tetrahedron and its 3 ∶ 1 property' },
      {
        t: 'p',
        html: `<b>Method.</b> For a tetrahedron with vertices ${A}, ${B}, ${C}, ${D} the centroid is the plain average of all four:`,
      },
      {
        t: 'formula',
        kicker: 'Centroid of a tetrahedron',
        main: `${TETRA}<br><i>AG</i><sub>1</sub> is cut ${RATIO('3', '1')} from ${A} by ${G}`,
        legend: [
          `${x}<sub>${G}</sub>, ${y}<sub>${G}</sub>, ${z}<sub>${G}</sub> = the coordinates of the centroid ${G}`,
          `${G1} = the centroid of the face opposite ${A}`,
          `${x1}, ${y1}, ${z1} = the coordinates of ${A}`,
          `${x2}, ${y2}, ${z2} = the coordinates of ${B}`,
          `${x3}, ${y3}, ${z3} = the coordinates of ${C}`,
          `${x4}, ${y4}, ${z4} = the coordinates of ${D}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `The property that makes it examinable is the spatial cousin of the median’s ${RATIO('2', '1')} split. Join a vertex to the centroid of the opposite face; that segment is called a median of the tetrahedron, and ${G} divides it in the ratio<br>${RATIO('3', '1')}${NB}${NB}measured from the vertex.`,
      },
      {
        t: 'p',
        html: `<b>Why.</b> Let ${G1} be the centroid of face <i>BCD</i>, so ${G1} = ${fr('1', '3')}(${B} + ${C} + ${D}) coordinatewise. The point dividing <i>AG</i><sub>1</sub> internally in the ratio ${RATIO('3', '1')} is, by the section formula with ${m} = 3, ${n} = 1,<br><br>${fr(`3${G1} + 1${NB}⋅${NB}${A}`, '4')} = ${fr(`(${B} + ${C} + ${D}) + ${A}`, '4')} = ${G}.<br><br>Since the same argument works from every vertex, all four medians of a tetrahedron pass through ${G}: the exact analogue of the triangle’s case in Topic 03’s CBSE board derivations and key procedures part, where the point dividing each median ${RATIO('2', '1')} from its vertex is the same average for all three medians. The pattern is worth memorising as a family: a triangle’s medians split ${RATIO('2', '1')} with denominator 3; a tetrahedron’s split ${RATIO('3', '1')} with denominator 4.`,
      },
      { t: 'fig', id: 'm11-11-fig-11.10' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `A tetrahedron has vertices ${pt('A', '0', '0', '0')}, ${pt('B', '4', '0', '0')}, ${pt('C', '0', '8', '0')}, ${pt('D', '0', '0', '12')}. Find its centroid ${G}, and verify that ${G} divides the segment from ${A} to the centroid of face <i>BCD</i> in the ratio ${RATIO('3', '1')}.`,
        steps: [
          `Averaging all four vertices:<br>${G} = (${fr('0 + 4 + 0 + 0', '4')}, ${fr('0 + 0 + 8 + 0', '4')}, ${fr('0 + 0 + 0 + 12', '4')})<br><br>= ${t3('1', '2', '3')}.`,
          `The centroid of face <i>BCD</i> is the average of ${B}, ${C}, ${D}:<br>${G1} = (${fr('4 + 0 + 0', '3')}, ${fr('0 + 8 + 0', '3')}, ${fr('0 + 0 + 12', '3')})<br><br>= (${fr('4', '3')}, ${fr('8', '3')}, 4).`,
          `Now divide <i>AG</i><sub>1</sub> internally in the ratio ${RATIO('3', '1')}, with ${A} first and ${G1} second. Three times ${G1} is ${t3('4', '8', '12')}, and ${A} is the origin, so the point is<br>(${fr('4 + 1(0)', '4')}, ${fr('8 + 1(0)', '4')}, ${fr('12 + 1(0)', '4')})<br><br>= (${fr('4', '4')}, ${fr('8', '4')}, ${fr('12', '4')}) = ${t3('1', '2', '3')},<br><br>which is ${G}. The verification is complete.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[JEE Main]</b> Find the incentre of the triangle with vertices ${pt('A', '2', '3', '5')}, ${pt('B', '11', '3', '5')}, ${pt('C', '2', '15', '5')}.`,
            a: `Side lengths ${a} = |<i>BC</i>| = 15, ${b} = |<i>CA</i>| = 12, ${c} = |<i>AB</i>| = 9; incentre ${t3('5', '6', '5')}.`,
          },
          {
            q: `<b>[JEE Main]</b> Three vertices of a tetrahedron are ${pt('A', '2', '−1', '3')}, ${pt('B', '4', '3', '−2')}, ${pt('C', '0', '5', '1')} and its centroid is ${pt('G', '1', '2', '1')}. Find the fourth vertex ${D}.`,
            a: `Sum of the four vertices = 4${G} = ${t3('4', '8', '4')}, so<br>${D} = ${t3('4', '8', '4')} − ${t3('6', '7', '2')} = ${t3('−2', '1', '2')}.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic F · pp. 1050–1051 ────────────────
  {
    n: 'F',
    title: 'The Length of a Median',
    extra: true,
    kalam: 'The median from a vertex always runs to the midpoint of the side not containing that vertex.',
    blocks: [
      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Nothing new at all: this is the midpoint formula composed with the distance formula, in that order. To find the median through ${A} in triangle <i>ABC</i>:`,
      },
      {
        t: 'p',
        html: `1. Find ${D}, the midpoint of the opposite side <i>BC</i>, by averaging ${B} and ${C}.<br>2. Compute <i>AD</i> by the distance formula.`,
      },
      {
        t: 'p',
        html: `The one thing that goes wrong is haste: students average ${A} with something, or take the midpoint of a side that touches ${A}. The median from a vertex always runs to the midpoint of the side <b>not containing</b> that vertex.`,
      },

      { t: 'part', title: 'Worked example' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the lengths of the medians of the triangle with vertices ${pt('A', '0', '0', '6')}, ${pt('B', '0', '4', '0')}, ${pt('C', '6', '0', '0')}.`,
        steps: [
          'Take the three medians in turn.',
          `<b>Median through</b> ${A}<b>.</b> Midpoint of <i>BC</i> is<br>${D} = (${fr('0 + 6', '2')}, ${fr('4 + 0', '2')}, ${fr('0 + 0', '2')}) = ${t3('3', '2', '0')}, so<br><br><i>AD</i> = √((3 − 0)<sup>2</sup> + (2 − 0)<sup>2</sup> + (0 − 6)<sup>2</sup>)<br>= √(9 + 4 + 36) = √49 = 7.`,
          `<b>Median through</b> ${B}<b>.</b> Midpoint of <i>CA</i> is<br>${I('E')} = (${fr('6 + 0', '2')}, ${fr('0 + 0', '2')}, ${fr('0 + 6', '2')}) = ${t3('3', '0', '3')}, so<br><br><i>BE</i> = √((3 − 0)<sup>2</sup> + (0 − 4)<sup>2</sup> + (3 − 0)<sup>2</sup>)<br>= √(9 + 16 + 9) = √34.`,
          `<b>Median through</b> ${C}<b>.</b> Midpoint of <i>AB</i> is<br>${I('F')} = (${fr('0 + 0', '2')}, ${fr('0 + 4', '2')}, ${fr('6 + 0', '2')}) = ${t3('0', '2', '3')}, so<br><br><i>CF</i> = √((0 − 6)<sup>2</sup> + (2 − 0)<sup>2</sup> + (3 − 0)<sup>2</sup>)<br>= √(36 + 4 + 9) = √49 = 7.`,
          `The medians are 7, √34 and 7. Two of them being equal is not an accident:<br>|<i>AB</i>| = √(0 + 16 + 36) = √52 and<br>|<i>BC</i>| = √(36 + 16 + 0) = √52,<br>so the triangle is isosceles about ${B}, and the medians to the two equal sides must match.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the length of the median through ${A} in the triangle ${pt('A', '5', '6', '8')}, ${pt('B', '4', '0', '3')}, ${pt('C', '−2', '4', '−1')}.`,
            a: `Midpoint of <i>BC</i> is ${t3('1', '2', '1')}; median = √(16 + 16 + 49) = √81 = 9.`,
          },
          {
            q: `<b>[CBSE]</b> Find the length of the median through ${C} in the triangle ${pt('A', '2', '−3', '3')}, ${pt('B', '4', '1', '−1')}, ${pt('C', '0', '5', '3')}.`,
            a: `Midpoint of <i>AB</i> is ${t3('3', '−1', '1')}; median = √(9 + 36 + 4) = √49 = 7.`,
          },
        ],
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Distance from an axis',
            note: `= square root of the squares of the other two coordinates: from the ${x}-axis √(${sq(y)} + ${sq(z)}), from the ${y}-axis √(${sq(z)} + ${sq(x)}), from the ${z}-axis √(${sq(x)} + ${sq(y)}). (Distance from a plane uses one coordinate; distance from an axis uses two.)`,
          },
          {
            f: 'Constant distance from an axis',
            note: `⇒ a right circular cylinder: ${sq(x)} + ${sq(y)} = ${sq(c)} about the ${z}-axis.`,
          },
          {
            f: 'Section formula substitution',
            note: `${m} multiplies the far point. Internal ⇒ + and ${m} + ${n}; external ⇒ − and ${m} − ${n}. External with ${m}${NB}>${NB}${n} lands beyond ${Q}; with ${m}${NB}<${NB}${n}, beyond ${P}; ${m} = ${n} has no external point.`,
          },
          {
            f: 'Fourth vertex of parallelogram <i>ABCD</i>',
            note: `${D} = ${A} + ${C} − ${B} (diagonals share a midpoint). Order unspecified ⇒ three possible answers.`,
          },
          {
            f: `Equidistant from ${n} points`,
            note: `each condition <i>PA</i><sup>2</sup> = <i>PB</i><sup>2</sup> is linear. Two points ⇒ a plane; three non-collinear ⇒ a line (needs one more restriction); four non-coplanar ⇒ a unique point. From ${O}, ${t3(a, '0', '0')}, ${t3('0', b, '0')}, ${t3('0', '0', c)} the point is (${fr(a, '2')}, ${fr(b, '2')}, ${fr(c, '2')}).`,
          },
          {
            f: 'Incentre',
            note: `weight each vertex by the side length opposite it,<br>${I('I')} = ${fr(`<i>aA</i> + <i>bB</i> + <i>cC</i>`, ABCSUM)},<br>with ${SIDES}.`,
          },
          {
            f: 'Tetrahedron',
            note: `centroid = average of four vertices; it splits each vertex-${ZW}to-${ZW}opposite-${ZW}face-${ZW}centroid segment in the ratio ${RATIO('3', '1')} from the vertex. (Triangle: ${RATIO('2', '1')}, denominator 3. Tetrahedron: ${RATIO('3', '1')}, denominator 4.)`,
          },
          { f: 'Median length', note: 'midpoint of the far side first, distance formula second.' },
        ],
        aids: [],
      },
    ],
  },
];
