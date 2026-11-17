import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11 Three Dimensional Geometry, Topics 00–01, pp. 686–705 of the
 * Class 12 Mathematics Master Reference (October 2026 edition), word for word:
 *   Topic 00 = the book's Subtopic 00 "Foundations of 3D Coordinate Geometry"
 *              (its heading sits on p. 686 under the contents; pp. 686–695),
 *   Topic 01 = Subtopic 01 "Direction Cosines, Direction Ratios & Equations of
 *              a Line in Space" (pp. 696–705).
 * The chapter's title (p. 685) and contents (p. 686) and the header lines
 * ("Class 12 · Mathematics · Chapter 11 … · Subtopic 0N") are not copied. Each
 * topic opens with its "Exam Relevance:" box as a part of its own, then is
 * split at its Sections 1 to 8; the "Cheat Sheet Box" is the part "Cheat
 * sheet". "Subtopic" → "topic". Figures stand where their captions are
 * printed: 11.1 (caption p. 689, drawn p. 690) after Theorem 1; 11.2 (caption
 * p. 699, drawn p. 700) after the paragraph it illustrates. A vector is its
 * letters and the combining arrow (escaped ARW) inside one <i> (decision 36);
 * unit vectors with hats. Every fraction is stacked (<frac>); no em dashes.
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
const k = I('k');
const l = I('l');
const m = I('m');
const n = I('n');
const r = I('r');
const x = I('x');
const y = I('y');
const z = I('z');
const A = I('A');
const B = I('B');
const C = I('C');
const D = I('D');
const G = I('G');
const O = I('O');
const P = I('P');
const Q = I('Q');
const R = I('R');
const Vv = I('V');
const AB = I('AB');
const AC = I('AC');
const BC = I('BC');
const AD = I('AD');
const PQ = I('PQ');
const OP = I('OP');

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

const x1 = sb(x, '1');
const x2 = sb(x, '2');
const x3 = sb(x, '3');
const y1 = sb(y, '1');
const y2 = sb(y, '2');
const y3 = sb(y, '3');
const z1 = sb(z, '1');
const z2 = sb(z, '2');
const z3 = sb(z, '3');
const vAB = V('AB');
const vAC = V('AC');
const vAD = V('AD');
const mn = ratio(m, n);
const HALF = fr('1', '2');
const SIXTH = fr('1', '6');
/** (u − v)², glued: a line never breaks inside the bracket. */
const sqd = (u: string, v: string) => `(${u}${NB}−${NB}${v})<sup>2</sup>`;
/** Each squared term glued and each "+" glued to the term after it, so a wrap falls before a "+ (…)²". */
const DIST = rt(`${sqd(x2, x1)} +${NB}${sqd(y2, y1)} +${NB}${sqd(z2, z1)}`);
const DIST_XY = rt(`(${x2} − ${x1})<sup>2</sup> + (${y2} − ${y1})<sup>2</sup>`);
const INT_X = fr(`${m}${x2} + ${n}${x1}`, `${m} + ${n}`);
const EXT_X = fr(`${m}${x2} − ${n}${x1}`, `${m} − ${n}`);
const INT = `(${INT_X}, ${fr(`${m}${y2} + ${n}${y1}`, `${m} + ${n}`)}, ${fr(`${m}${z2} + ${n}${z1}`, `${m} + ${n}`)})`;
const EXT = `(${EXT_X}, ${fr(`${m}${y2} − ${n}${y1}`, `${m} − ${n}`)}, ${fr(`${m}${z2} − ${n}${z1}`, `${m} − ${n}`)})`;
const MID = `(${fr(`${x1} + ${x2}`, '2')}, ${fr(`${y1} + ${y2}`, '2')}, ${fr(`${z1} + ${z2}`, '2')})`;
const CEN = `(${fr(`${x1} + ${x2} + ${x3}`, '3')}, ${fr(`${y1} + ${y2} + ${y3}`, '3')}, ${fr(`${z1} + ${z2} + ${z3}`, '3')})`;
const TETRA = `${Vv} = ${SIXTH}${abs(`(${vAB})${NB}·${NB}(${vAC} × ${vAD})`)}`;
const AREA = `Area = ${HALF}${abs(`${vAB} × ${vAC}`)}`;
const AXIS_X = rt(`${sq(y)} + ${sq(z)}`);
const AXIS_Y = rt(`${sq(z)} + ${sq(x)}`);
const AXIS_Z = rt(`${sq(x)} + ${sq(y)}`);
const ABBCAC = `${AB} + ${BC} = ${AC}`;

// Topic 01
const al = I('α');
const be = I('β');
const ga = I('γ');
const th = I('θ');
const la = I('λ');
const va = V('a');
const vb = V('b');
const vr = V('r');
const vPQ = V('PQ');
const COS = (s: string) => `cos${NB}${s}`;
const COS2 = (s: string) => `cos<sup>2</sup>${NB}${s}`;
const SIN2 = (s: string) => `sin<sup>2</sup>${NB}${s}`;
const LMN = `${sq(l)} + ${sq(m)} + ${sq(n)}`;
const ABC2 = `${sq(a)} + ${sq(b)} + ${sq(c)}`;
const COS_SUM = `${COS2(al)}${NB}+${NB}${COS2(be)}${NB}+${NB}${COS2(ga)}${NB}=${NB}1`;
const CART = `${fr(`${x} − ${x1}`, a)} = ${fr(`${y} − ${y1}`, b)} = ${fr(`${z} − ${z1}`, c)}`;
const CART2 = `${fr(`${x} − ${x1}`, `${x2} − ${x1}`)} = ${fr(`${y} − ${y1}`, `${y2} − ${y1}`)} = ${fr(`${z} − ${z1}`, `${z2} − ${z1}`)}`;
const LINE = `${vr} = ${va} + ${la}${vb}`;
/** Coefficients and unit vectors, as printed: ijk('', '+ 4', '− 2') → i + 4j − 2k with hats. */
const ijk = (u: string, v: string, w: string) => `${u}${ii} ${v}${jj} ${w}${kk}`;
const RT2 = fr('1', '√2');
const RT6 = (s: string) => fr(s, '√6');
const DEG = (s: string) => `${s}°`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 00 · pp. 686–695 ────────────────
  {
    n: '00',
    title: 'Foundations of 3D Coordinate Geometry',
    kalam: 'Everything in this chapter lives in three-dimensional space, so we first need a reliable way to pin down where a point is.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `These are the load-bearing basics the rest of the chapter stands on. These results are Class 11 work (the current NCERT Class 11 book keeps the distance formula but not the section formula, as far as we know), so CBSE Boards use them inside line questions rather than asking them directly. JEE Main slips them inside larger problems every year (ratios of division, centroids, collinearity) ${ESTIMATE}. JEE Advanced uses the tetrahedron-volume idea in mixed vector–geometry questions. Master these and every later topic becomes mechanical. None of the formulae here are hard to memorise; what trips students up is sign-handling, weight placement in the section formula, and confusing “distance from an axis” with “distance from a plane.” This topic therefore spends as much effort on why each formula looks the way it does as on the formula itself, because understanding kills those errors at the source.`,
      },
      {
        t: 'p',
        html: 'Everything that follows in Chapter 11 (direction cosines, lines, planes, perpendicular distances, reflections) is ultimately a statement about points and the distances and directions between them. So although this material formally belongs to the Class 11 introduction to three-dimensional geometry, treating it as the genuine foundation of the Class 12 chapter is the right mindset: a student who is fluent here will find that later topics mostly add notation, not new ideas.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Everything in this chapter lives in three-dimensional space, so we first need a reliable way to pin down where a point is. Picture the corner of a room: three mutually perpendicular edges meet there. Call them the <b>x-axis</b>, <b>y-axis</b>, and <b>z-axis</b>, and the corner itself the <b>origin</b> ${O}. Any point ${P} in the room is reached by walking ${x} steps along the first edge, ${y} along the second, and ${z} up the third, giving the ordered triple ${pt(x, y, z)}. Those three numbers are the point’s <b>coordinates</b>.`,
      },
      {
        t: 'p',
        html: `The three axes, taken in pairs, define three flat walls: the <b>xy-plane</b> (where ${rel(z, '=', '0')}), the <b>yz-plane</b> (where ${rel(x, '=', '0')}), and the <b>zx-plane</b> (where ${rel(y, '=', '0')}). These three planes slice all of space into <b>eight compartments called octants</b>, the 3D cousins of the four quadrants you know from 2D. The first octant is the friendly one where all three coordinates are positive; the others carry various sign combinations. Throughout, we use the standard <b>right-handed</b> system: curl the fingers of your right hand from the positive x-axis toward the positive y-axis and your thumb points along the positive z-axis. Every formula in this chapter assumes this orientation.`,
      },
      {
        t: 'p',
        html: `It pays to see how a point relates to the axes and planes directly. The <b>projection</b> of ${P}${pt(x, y, z)} onto the xy-plane is ${pt(x, y, '0')}: you flatten the height to zero; its projections onto the other two coordinate planes drop the appropriate coordinate. Projecting onto an axis keeps only one coordinate: onto the x-axis, ${P} lands at ${pt(x, '0', '0')}. These projections make distances easy to picture. The distance of ${P} from the <b>x-axis</b> is the length of the leg spanning the other two directions, ${AXIS_X}, while the distance of ${P} from the <b>xy-plane</b> is simply ${abs(z)}. Reading “distance from an axis” as a two-coordinate Pythagoras and “distance from a plane” as a single coordinate saves genuine time under exam pressure.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> distance in 3D is just the Pythagoras theorem used twice. To find how far ${P}${pt(x, y, z)} is from the origin, first find the distance across the floor to the point ${pt(x, y, '0')}: that’s the ordinary 2D hypotenuse ${AXIS_Z}. Then climb height ${z} and apply Pythagoras again:<br>${rt(`(${AXIS_Z})<sup>2</sup> + ${sq(z)}`)} = ${rt(`${sq(x)} + ${sq(y)} + ${sq(z)}`)}.<br>The familiar two-term formula simply grows a third term. This single idea, Pythagoras stacked, generates the entire distance formula between any two points.`,
      },
      {
        t: 'p',
        html: `Next comes <b>division of a segment</b>. Suppose a rope is stretched between two pegs ${A} and ${B}, and you want the point that splits it in a given ratio, say ${ratio('2', '3')} measured from ${A}. In each coordinate separately, the splitting point is a weighted average of the endpoints, and crucially, the same weights apply to ${x}, ${y}, and ${z} at once. That is the <b>section formula</b>, and the midpoint is just its simplest case with equal weights.`,
      },
      {
        t: 'p',
        html: `It is worth seeing why it is a weighted average rather than a plain one. If the point sits closer to ${B} (a large ${m}, the weight on the far endpoint), it should inherit more of ${B}’s coordinates, so the heavier weight rides the endpoint you are nearer to. A common slip is to attach the weights to the wrong ends; the safe reading is “the weight named after the first part of the ratio multiplies the second (far) endpoint.” The midpoint, with weights ${ratio('1', '1')}, lands halfway and reduces to the ordinary average, which is the sanity check you should run whenever a section-formula answer looks suspicious.`,
      },
      {
        t: 'p',
        html: `The <b>centroid</b> extends this averaging idea to three or four points at once. Physically it is the balance point: place equal masses at the vertices of a triangle and they balance at ${G} = ${fr('1', '3')}(${A} + ${B} + ${C}); do the same for a tetrahedron and the balance point is ${fr('1', '4')} of the vertex sum. Because the centroid is a plain average of the vertices, it is one of the few formulas in this chapter with no weights or signs to misplace, which is exactly why examiners like to bury an unknown vertex inside a centroid condition and ask you to recover it.`,
      },
      {
        t: 'p',
        html: `Finally, <b>collinearity</b>. Three points lie on one straight line exactly when there’s no “bend” at the middle one, equivalently, when the direction from ${A} to ${B} matches the direction from ${B} to ${C}. We can test this either through proportional direction ratios or, more elementarily, by checking that the three pairwise distances satisfy ${ABBCAC} (the middle point sits between the other two with no detour). A third route, handy when ratios are awkward, is the triangle area: collinear points enclose zero area.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions:</b><br>• The internal section formula needs the ratio written as ${mn} with both parts positive; <b>external</b> division flips one sign and is used when the dividing point lies outside the segment.`,
      },
      {
        t: 'p',
        html: '• The distance formula assumes a standard right-handed rectangular coordinate system, the usual setup for this entire chapter.',
      },
      {
        t: 'p',
        html: `• The ${ABBCAC} collinearity test only works when the points are labelled in the order they appear along the line; otherwise use proportional direction ratios, which never depend on ordering.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: 'All quantities here are lengths (units of length) or pure ratios; no special dimensional formulae apply. Every result in this section is built from the single picture of the previous one (a point located by three perpendicular measurements), so although the list looks long, it is really one idea (coordinate-wise Pythagoras and coordinate-wise averaging) applied in different ways.',
      },
      {
        t: 'p',
        html: `<b>Distance between two points</b> ${P}${pt(x1, y1, z1)} and ${Q}${pt(x2, y2, z2)}:`,
      },
      {
        t: 'formula',
        kicker: 'Distance between two points',
        main: `${PQ} = ${DIST}<br>Distance from the origin: ${OP} = ${rt(`${sq(x1)} + ${sq(y1)} + ${sq(z1)}`)}`,
        legend: [`${pt(x1, y1, z1)} = the coordinates of ${P}`, `${pt(x2, y2, z2)} = the coordinates of ${Q}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Section formula (internal division):</b> point dividing ${AB} in ratio ${mn} from ${A}:`,
      },
      {
        t: 'formula',
        kicker: 'Section formula (internal division)',
        main: INT,
        legend: [`${mn} = the division ratio, from ${A}`, `${pt(sb(x, I('i')), sb(y, I('i')), sb(z, I('i')))} = the coordinates of the ${I('i')}-th point`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Section formula (external division)</b> in ratio ${mn}:`,
      },
      {
        t: 'formula',
        kicker: 'Section formula (external division)',
        main: EXT,
        legend: [`${mn} = the division ratio`, `${pt(sb(x, I('i')), sb(y, I('i')), sb(z, I('i')))} = the coordinates of the ${I('i')}-th point`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Midpoint</b> of ${AB}:`,
      },
      {
        t: 'formula',
        kicker: 'Midpoint',
        main: MID,
        legend: [`${pt(sb(x, I('i')), sb(y, I('i')), sb(z, I('i')))} = the coordinates of the ${I('i')}-th point`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Centroid of a triangle</b> with vertices ${A}, ${B},${NB}${C}:`,
      },
      {
        t: 'formula',
        kicker: 'Centroid of a triangle',
        main: `${G} = ${CEN}`,
        legend: [`${G} = the centroid`, `${pt(sb(x, I('i')), sb(y, I('i')), sb(z, I('i')))} = the coordinates of the ${I('i')}-th vertex`],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Centroid of a tetrahedron</b> with four vertices: the average of all four coordinates (divide by 4).',
      },
      {
        t: 'p',
        html: `<b>Volume of a tetrahedron</b> with vertices ${A}, ${B}, ${C}, ${D} (using edge vectors from ${A}):`,
      },
      {
        t: 'formula',
        kicker: 'Volume of a tetrahedron',
        main: TETRA,
        legend: [`${Vv} = the tetrahedron volume`, `${vAB}, ${vAC}, ${vAD} = the edge vectors from ${A}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Area of a triangle</b> with vertices ${A}, ${B},${NB}${C}:`,
      },
      {
        t: 'formula',
        kicker: 'Area of a triangle',
        main: AREA,
        legend: [`${vAB}, ${vAC} = the edge vectors from ${A}`],
        note: null,
      },
      {
        t: 'p',
        html: 'This doubles as a collinearity test: the three points are collinear exactly when this area is zero (the “triangle” has collapsed to a segment).',
      },
      {
        t: 'p',
        html: `<b>Collinearity of three points:</b> either the direction ratios of ${vAB} and ${vAC} are proportional, or (with correct ordering) ${ABBCAC}.`,
      },
      {
        t: 'p',
        html: `<b>Distance of a point</b> ${P}${pt(x, y, z)} <b>from the axes and coordinate planes:</b>`,
      },
      {
        t: 'formula',
        kicker: 'Distance of a point from the axes and coordinate planes',
        main: `from x-axis = ${AXIS_X}<br>from y-axis = ${AXIS_Y}<br>from z-axis = ${AXIS_Z}<br>from yz-plane = ${abs(x)}<br>from zx-plane = ${abs(y)}<br>from xy-plane = ${abs(z)}`,
        legend: [`${x}, ${y}, ${z} = the coordinates of ${P}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Projections of ${P}:</b> onto the xy-plane, ${pt(x, y, '0')}; onto the x-axis, ${pt(x, '0', '0')}; the other projections drop the remaining coordinate(s) the same way.`,
      },
      {
        t: 'p',
        html: `<b>Notation key:</b> ${pt(sb(x, I('i')), sb(y, I('i')), sb(z, I('i')))} = coordinates of the ${I('i')}-th point; ${mn}${NB}=${NB}division ratio; ${G}${NB}=${NB}centroid; ${Vv}${NB}=${NB}tetrahedron volume; ${vAB}${NB}=${NB}displacement vector with components (${x2} − ${x1}, ${y2} − ${y1}, ${z2} − ${z1}).`,
      },
      {
        t: 'table',
        title: null,
        head: ['Task', 'Formula'],
        rows: [
          ['Distance', rt(`∑(${x2} − ${x1})<sup>2</sup>`)],
          [`Internal division ${mn}`, `${INT_X} (per coordinate)`],
          [`External division ${mn}`, `${EXT_X} (per coordinate)`],
          ['Midpoint', 'average of endpoints'],
          ['Centroid (triangle)', 'average of 3 vertices'],
          ['Tetrahedron volume', `${SIXTH}|scalar triple product|`],
        ],
      },

      { t: 'part', title: 'Theorems and procedures' },
      {
        t: 'p',
        html: `<b>Theorem 1 (distance formula).</b><br>${PQ}${NB}=${NB}${DIST}.`,
      },
      { t: 'fig', id: 'm12-11-fig-11.1' },
      {
        t: 'p',
        html: `<b>Proof.</b> Build the axis-aligned rectangular box (cuboid) that has ${P} and ${Q} as opposite corners. Its three edge lengths are ${abs(`${x2} − ${x1}`)}, ${abs(`${y2} − ${y1}`)}, and ${abs(`${z2} − ${z1}`)}. The diagonal of the base rectangle has length ${DIST_XY} by the 2D Pythagoras theorem. That base diagonal and the vertical edge ${abs(`${z2} − ${z1}`)} form a right triangle whose hypotenuse is the space diagonal ${PQ}. Applying Pythagoras a second time:<br>${sq(PQ)} = [(${x2} − ${x1})<sup>2</sup> + (${y2} − ${y1})<sup>2</sup>] + (${z2} − ${z1})<sup>2</sup>,<br>and taking the positive square root gives the result. ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2 (section formula, internal).</b> The point ${R} dividing ${AB} in ratio ${mn} from ${A} has coordinates (${INT_X}, …).`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Work one coordinate at a time. Let ${R}${NB}=${NB}${pt(x, y, z)} divide ${AB} so that ${I('AR')} ∶ ${I('RB')} = ${mn}. Projecting onto the x-axis, the projections of ${A}, ${R}, ${B} divide in the same ratio (parallel projection preserves ratios), so<br>${fr(`${x} − ${x1}`, `${x2} − ${x}`)} = ${fr(m, n)}.<br>Cross-multiplying,<br>${n}(${x} − ${x1}) = ${m}(${x2} − ${x})<br>⇒ ${n}${x} − ${n}${x1} = ${m}${x2} − ${m}${x}<br>⇒ ${x}(${m} + ${n}) = ${m}${x2} + ${n}${x1},<br>hence<br>${x} = ${INT_X}.<br>Identical reasoning on the other two axes completes the proof. Setting ${rel(m, '=', n)} recovers the midpoint. ■`,
      },
      {
        t: 'proc',
        title: 'Procedure: testing collinearity of three points',
        steps: [
          `Form ${vAB} = (${x2} − ${x1}, ${y2} − ${y1}, ${z2} − ${z1}) and ${vAC} = (${x3} − ${x1}, ${y3} − ${y1}, ${z3} − ${z1}).`,
          `Check whether their components are proportional, i.e.<br>${fr(`${x2} − ${x1}`, `${x3} − ${x1}`)} = ${fr(`${y2} − ${y1}`, `${y3} − ${y1}`)} = ${fr(`${z2} − ${z1}`, `${z3} − ${z1}`)}.`,
          `If yes, the three points are collinear; the common ratio even tells you how ${B} divides ${AC}. This test is preferred over distances because it never depends on the order of the points.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Procedure: area as a collinearity check.</b> When direction ratios are awkward to compare (a zero denominator, say), compute ${vAB} × ${vAC} instead. Half its magnitude is the area of triangle ${I('ABC')}; if the cross product is the zero vector, the area is zero and the points are collinear. This single computation handles both “find the area” and “are they collinear” questions, and it never divides by anything, so no coordinate difference can break it.`,
      },
      {
        t: 'p',
        html: `<b>Procedure: recovering a missing coordinate or vertex.</b> Many problems give a target (a midpoint, a centroid, or a ratio) and ask for an unknown vertex. Write the relevant formula coordinate-by-coordinate, set each equal to the known target component, and solve the three independent linear equations. For example, if ${G} is the known centroid of ${A}, ${B}, ${C} and ${C} is unknown, then ${C} = 3${G} − ${A} − ${B} coordinatewise: the formula simply rearranges.`,
      },
      {
        t: 'p',
        html: `<b>Where the axis and plane distances come from.</b> These are not new results but immediate consequences of Theorem 1. The nearest point on the x-axis to ${P}${pt(x, y, z)} is its projection ${pt(x, '0', '0')}; the distance to${NB}it${NB}is<br>${rt(`(${x} − ${x})<sup>2</sup> + (${y} − 0)<sup>2</sup> + (${z} − 0)<sup>2</sup>`)} = ${AXIS_X}:<br>the ${x}-term vanishes because the axis already matches ${P} in ${x}. The nearest point on the yz-plane is the projection ${pt('0', y, z)}, at distance ${rt(`(${x}${NB}−${NB}0)<sup>2</sup>${NB}+${NB}0${NB}+${NB}0`)}${NB}=${NB}${abs(x)}. So “distance from an axis” loses the one coordinate the axis shares, and “distance from a plane” keeps only the one coordinate the plane sets to zero. Re-deriving them this way, rather than memorising, means you never confuse the two.`,
      },
      {
        t: 'p',
        html: `<b>Procedure: finding the ratio in which a coordinate plane divides a segment.</b> A coordinate plane is defined by one coordinate being zero (e.g. the yz-plane is ${rel(x, '=', '0')}). Let the ratio be ${ratio(k, '1')}. Write the dividing point’s relevant coordinate via the section formula, set it to 0, and solve for ${k}. A <b>positive</b> ${k} means internal division; a <b>negative</b> ${k} means external division (the plane cuts the line outside the segment).`,
      },
      {
        t: 'p',
        html: `<b>Theorem 3 (the centroid divides each median in 2 ∶ 1).</b> In triangle ${I('ABC')} the centroid ${G} lies on every median and splits it, from the vertex to the midpoint of the opposite side, in the ratio ${ratio('2', '1')}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Let ${D} be the midpoint of ${BC}, so ${D} = ${HALF}(${B} + ${C}). The point dividing median ${AD} in the ratio ${ratio('2', '1')} from ${A} is, by the section formula,<br>${fr(`2${D} + 1${NB}·${NB}${A}`, '2 + 1')} = ${fr('1', '3')}(2${NB}·${NB}${fr(`${B} + ${C}`, '2')} + ${A}) =${fr(`${A} + ${B} + ${C}`, '3')},<br>which is exactly the centroid ${G}. By the symmetry of this expression in ${A}, ${B}, ${C}, the identical argument applies to the other two medians, so all three medians pass through ${G} and are cut by it in the ratio ${ratio('2', '1')}. ■`,
      },
      {
        t: 'p',
        html: `<b>Why external division flips a sign.</b> External division in ratio ${mn} places the dividing point outside the segment, on the extension, with ${I('AR')} ∶ ${I('RB')} = ${mn} measured in opposite senses. Formally this is internal division with ${n} replaced by −${n}, which turns<br>${INT_X} into ${EXT_X}.<br>That single sign flip, in both numerator and denominator, is the only difference between the internal and external formulas, which is why a negative answer for ${k} in the plane-cut procedure simply signals an external cut.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level (Distance, Class 11 basics)',
        q: `Find the distance between ${A}${pt('1', '−2', '3')} and ${B}${pt('4', '2', '−1')}.`,
        steps: [
          `${AB} = ${rt('(4 − 1)<sup>2</sup> + (2 − (−2))<sup>2</sup> + (−1 − 3)<sup>2</sup>')}<br>= ${rt('3<sup>2</sup> + 4<sup>2</sup> + (−4)<sup>2</sup>')}<br>= ${rt('9 + 16 + 16')}<br>= √41 units.`,
          `Notice each bracket is a difference of coordinates, and the sign of that difference disappears once squared, so it does not matter which point you call ${A} and which ${B}. The single most common error here is sign-handling in 2${NB}−${NB}(−2)${NB}=${NB}4; writing 2${NB}−${NB}2${NB}=${NB}0 would silently lose a term. Always expand the double negative explicitly.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / JEE Main (Section formula)',
        q: `Find the point that divides the join of ${A}${pt('2', '−1', '4')} and ${B}${pt('4', '3', '2')} internally in the ratio ${ratio('1', '3')}.`,
        steps: [
          `With ${mn} = ${ratio('1', '3')}:<br>(${fr(`1${NB}·${NB}4 + 3${NB}·${NB}2`, '4')}, ${fr(`1${NB}·${NB}3 + 3${NB}·${NB}(−1)`, '4')}, ${fr(`1${NB}·${NB}2 + 3${NB}·${NB}4`, '4')})<br>= (${fr('10', '4')}, ${fr('0', '4')}, ${fr('14', '4')})<br>= ${pt(fr('5', '2'), '0', fr('7', '2'))}.`,
          `The weight ${rel(m, '=', '1')} multiplied the far endpoint ${B} and ${rel(n, '=', '3')} multiplied the near endpoint ${A}; because ${n} is larger, the answer leans toward ${A}, which is the quick geometric check: a ${ratio('1', '3')} split from ${A} should land nearer ${A}, and indeed ${pt(fr('5', '2'), '0', fr('7', '2'))} is closer to ${A}${pt('2', '−1', '4')} than to ${B}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main · Multi-concept (Plane-cut ratio + sign meaning)',
        q: `In what ratio is the segment joining ${A}${pt('2', '4', '5')} and ${B}${pt('3', '5', '−4')} divided by the yz-plane?`,
        steps: [
          `The yz-plane is ${rel(x, '=', '0')}. Let the ratio be ${ratio(k, '1')} (from ${A}). The x-coordinate of the dividing point is<br>${fr(`${k}${NB}·${NB}3 + 1${NB}·${NB}2`, `${k} + 1`)}.`,
          `Setting it to 0:<br>3${k} + 2 = 0 ⇒ ${k} = −${fr('2', '3')}.`,
          `The negative value signals <b>external</b> division: the yz-plane meets the line outside the segment, dividing it externally in the ratio ${ratio('2', '3')}. The sign carried the geometric meaning: a recurring JEE Main theme ${ESTIMATE}. Geometrically this makes sense: both ${A} and ${B} have positive ${x}-coordinates (2 and 3), so they lie on the same side of the yz-plane (${rel(x, '=', '0')}), and a plane cannot pass between two points on the same side; it can only meet their line on an extension, i.e. externally.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced (Tetrahedron volume)',
        q: `Find the volume of the tetrahedron with vertices ${A}${pt('1', '1', '1')}, ${B}${pt('3', '2', '1')}, ${C}${pt('2', '4', '2')}, ${D}${pt('1', '2', '5')}.`,
        steps: [
          `Edge vectors from ${A}: ${vAB} = ${pt('2', '1', '0')}, ${vAC} = ${pt('1', '3', '1')}, ${vAD} = ${pt('0', '1', '4')}.`,
          `${vAC} × ${vAD} = ${vm([ii, jj, kk], ['1', '3', '1'], ['0', '1', '4'])}<br>= ${ii}(12 − 1) − ${jj}(4 − 0) + ${kk}(1 − 0)<br>= ${pt('11', '−4', '1')}.`,
          `${dot(vAB, pt('11', '−4', '1'))} = (2)${WJ}(11) + (1)${WJ}(−4) + (0)${WJ}(1)<br>= 22 − 4 = 18.`,
          `${Vv} = ${SIXTH}|18| = 3 cubic units.`,
          'The scalar triple product is the volume of the slanted box (parallelepiped) built on the three edges; one-sixth of it is the tetrahedron sitting inside. Two things are worth internalising. First, the absolute value is essential: a negative triple product only means the three edges form a left-handed set, and a volume can never be negative. Second, you may use the edges from any vertex; the volume is the same, which is a useful cross-check if your first computation looks wrong.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE, Class 11 basics]</b> Find the distance between ${pt('0', '3', '−2')} and ${pt('6', '−5', '1')}.`,
            a: `${rt('36 + 64 + 9')} = √109 units`,
          },
          {
            q: `<b>[CUET / JEE Main]</b> Find the midpoint of the segment joining ${pt('4', '−2', '6')} and ${pt('−2', '8', '−4')}.`,
            a: pt('1', '3', '1'),
          },
          {
            q: `<b>[JEE Main]</b> Find the point dividing the join of ${pt('1', '3', '5')} and ${pt('4', '−3', '2')} externally in the ratio ${ratio('2', '1')}.`,
            a: pt('7', '−9', '−1'),
          },
          {
            q: `<b>[JEE Main]</b> Show that ${A}${pt('1', '2', '3')}, ${B}${pt('3', '4', '7')}, ${C}${pt('0', '1', '1')} are collinear, and find the ratio ${ratio(AB, BC)}.`,
            a: `Collinear: ${vAB} = ${pt('2', '2', '4')} = −2${NB}·${NB}${vAC} where ${vAC} = ${pt('−1', '−1', '−2')}; also ${ratio(AB, BC)} = ${ratio('2', '3')}.`,
          },
          {
            q: `<b>[JEE Advanced]</b> Find the volume of the tetrahedron with vertices ${pt('0', '0', '0')}, ${pt('2', '0', '0')}, ${pt('0', '3', '0')}, ${pt('0', '0', '4')}.`,
            a: '4 cubic units',
          },
          {
            q: `<b>[CUET / JEE Main]</b> Find the area of the triangle with vertices ${A}${pt('1', '1', '1')}, ${B}${pt('2', '3', '4')}, ${C}${pt('4', '3', '2')}.`,
            a: `${vAB} = ${pt('1', '2', '3')}, ${vAC} = ${pt('3', '2', '1')}, ${vAB}${NB}×${NB}${vAC}${NB}=${NB}${pt('−4', '8', '−4')},<br>area = ${HALF}${rt('16 + 64 + 16')} = ${HALF}${NB}·${NB}4√6${NB}= 2√6${NB}sq${NB}units`,
          },
          {
            q: `<b>[JEE Main]</b> The centroid of triangle ${I('ABC')} is ${G}${pt('2', '2', '2')}. If ${A}${pt('1', '3', '2')} and ${B}${pt('2', '1', '4')}, find ${C}.`,
            a: `${C} = 3${G} − ${A} − ${B}<br>= (6 − 1 − 2, 6 − 3 − 1, 6 − 2 − 4)<br>= ${pt('3', '2', '0')}`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The distance of the point ${pt('3', '−4', '12')} from the origin is`,
        opts: [
          { label: '13', nudge: null },
          { label: '√13', nudge: '<b>(B)</b> takes a stray square root of 13 instead of 169.' },
          { label: '19', nudge: `<b>(C)</b> adds ${abs('3')} + ${abs('−4')} + ${abs('12')} = 19: a sum of magnitudes, not the root of the sum of squares.` },
          { label: '169', nudge: '<b>(D)</b> stops at 169 and forgets the square root.' },
        ],
        correct: 0,
        solution: `${rt('9 + 16 + 144')} = √169 = 13. The recurring lesson across all three wrong answers is that the distance formula is a single square root of a sum of squares: neither the squaring nor the rooting may be skipped, and the terms are added, never taken in absolute value.`,
      },
      {
        t: 'mcq',
        q: `The point dividing the join of ${pt('1', '2', '3')} and ${pt('3', '6', '7')} in the ratio ${ratio('1', '1')} is`,
        opts: [
          { label: pt('2', '4', '5'), nudge: null },
          { label: pt('4', '8', '10'), nudge: '<b>(B)</b> adds the coordinates without halving.' },
          { label: pt('1', '2', '2'), nudge: `<b>(C)</b> halves the differences (3 − 1, 6 − 2, 7 − 3) instead of the sums: the midpoint averages, it adds before halving.` },
          { label: pt('2', '4', '4'), nudge: `<b>(D)</b> averages x and y correctly but mishandles the z-coordinate average ${fr('3 + 7', '2')} = 5.` },
        ],
        correct: 0,
        solution: `Ratio ${ratio('1', '1')} is the midpoint: averages give ${pt('2', '4', '5')}.`,
      },
      {
        t: 'mcq',
        q: `The ratio in which the xy-plane divides the join of ${pt('2', '3', '5')} and ${pt('4', '1', '−3')} is`,
        opts: [
          { label: `${ratio('5', '3')} internally`, nudge: null },
          { label: `${ratio('5', '3')} externally`, nudge: `<b>(B)</b> reads the positive ${k} as external.` },
          { label: `${ratio('3', '5')} internally`, nudge: '<b>(C)</b> inverts the ratio.' },
          { label: ratio('1', '1'), nudge: '<b>(D)</b> ignores the unequal z-coordinates.' },
        ],
        correct: 0,
        solution: `The xy-plane is ${rel(z, '=', '0')}. With ratio ${ratio(k, '1')},<br>${fr(`${k}(−3) + 1(5)`, `${k} + 1`)} = 0<br>⇒ −3${k} + 5 = 0<br>⇒ ${k} = ${fr('5', '3')}, positive, so <b>internal</b> ${ratio('5', '3')}.<br>A fast check: the endpoints have ${rel(z, '=', '5')} and ${rel(z, '=', '−3')}, opposite signs, so they straddle the xy-plane and the cut must be internal, confirming the positive ${k}.`,
      },
      {
        t: 'mcq',
        q: `${A}${pt('2', '3', '4')}, ${B}${pt('−1', '2', '−3')}, ${C}${pt('5', '4', '11')} are`,
        opts: [
          { label: 'collinear', nudge: null },
          { label: 'vertices of a right triangle', nudge: '<b>(B)</b> assumes a genuine right triangle, but proportional direction ratios collapse it to a line.' },
          { label: 'vertices of an equilateral triangle', nudge: `<b>(C)</b> assumes a genuine triangle with equal sides; here ${BC} = 2√59 is the sum of ${AB} = ${AC} = √59, so the “triangle” is a line.` },
          { label: 'coincident', nudge: '<b>(D)</b> requires identical coordinates, which these are not.' },
        ],
        correct: 0,
        solution: `${vAB} = ${pt('−3', '−1', '−7')} and ${vAC} = ${pt('3', '1', '7')} = −${vAB}: proportional, so the points are collinear (with ${A} between ${B} and ${C}). Equivalently, ${vAB} × ${vAC} = ${ZERO}, so the enclosed area is zero.`,
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Mismatching weights in the section formula.</b> The weight ${m} multiplies the far endpoint ${x2}, and ${n} the near endpoint ${x1}. Swapping them places the point on the wrong side.`,
          `<b>Forgetting that a negative ratio means external division.</b> When solving for ${k}, a negative answer is not an error: it tells you the cut lies outside the segment.`,
          `<b>Summing magnitudes instead of squaring.</b> Distance is the root of the sum of squared differences, never ${abs(`Δ${x}`)} + ${abs(`Δ${y}`)} + ${abs(`Δ${z}`)}.`,
          `<b>Using ${ABBCAC} with the wrong ordering.</b> The additive distance test only works when the middle point is genuinely between the others; otherwise switch to proportional direction ratios.`,
          `<b>Confusing distance from an axis with distance from a plane.</b> Distance from the x-axis drops the ${x}-term and keeps two (${AXIS_X}); distance from the yz-plane keeps only ${abs(x)}. Mixing these up is a frequent one-mark loss.`,
          '<b>Dropping the modulus in area or volume.</b> A cross product or triple product can come out negative or point “backwards”; area and volume are magnitudes, so the absolute value is non-negotiable.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (let signs talk):</b> in division-ratio problems, solve for ${ratio(k, '1')} and read the sign: positive is internal, negative is external. You get the ratio and its type from one calculation.`,
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (collinearity the safe way):</b> prefer proportional direction ratios over the distance test. It is order-independent, avoids square roots, and generalises straight into the line-equation work of the next topic. When a coordinate difference is zero (making a ratio undefined), fall back on the cross-product/area test, which never divides and so never breaks on a vanishing denominator.',
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (sanity-check with the midpoint):</b> any section-formula answer can be sanity-checked by the rough position it should occupy: a small first weight pulls the point toward the near endpoint, equal weights land exactly at the midpoint average. A quick “does it lean the right way?” catches most weight-swapping slips before they cost marks. The same instinct works for the centroid: it must lie strictly inside the triangle, so a centroid that comes out beyond any vertex is an immediate signal that a coordinate was added or divided wrongly.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Distance', note: `${PQ} = ${DIST}.` },
          { f: `Internal${NB}${mn}: (${INT_X}, …); External${NB}${mn}: (${EXT_X}, …).`, note: '' },
          { f: `Midpoint: average of endpoints. Centroid: average of vertices (÷3 triangle, ÷4 tetrahedron); centroid cuts each median ${ratio('2', '1')}.`, note: '' },
          { f: `Area of triangle: ${HALF}${abs(`${vAB} × ${vAC}`)}. Tetrahedron volume: ${Vv} = ${SIXTH}${abs(`${vAB}${NB}·${NB}(${vAC} × ${vAD})`)}.`, note: '' },
          { f: `Distance from x-axis = ${AXIS_X}; from yz-plane = ${abs(x)} (cycle for the others).`, note: '' },
          { f: `Collinear${NB}⇔ direction ratios proportional${NB}⇔ triangle${NB}area${NB}=${NB}0.`, note: '' },
        ],
        aids: [
          '“Pythagoras, twice”: the 3D distance is the 2D one with a third squared term.',
          `“Far weight first”: in ${mn} from ${A}, ${m} rides the far endpoint.`,
          `“Negative ratio = outside”: a minus sign on ${k} means external division.`,
          '“Axis drops one, plane keeps one”: distance from an axis loses the shared coordinate; from a plane keeps only the zeroed one.',
        ],
      },
    ],
  },

  // ──────────────── Topic 01 · pp. 696–705 ────────────────
  {
    n: '01',
    title: 'Direction Cosines, Direction Ratios & Equations of a Line in Space',
    kalam: 'Any set of numbers proportional to the direction cosines is called a set of direction ratios (DRs).',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the foundation stone of the whole chapter. CBSE Boards almost always carry a 1–2 mark direct question (find direction cosines / write a line’s equation) ${ESTIMATE}. For JEE Main expect 1–2 questions every year ${ESTIMATE}, often disguised inside problems on angles, collinearity, or feet of perpendiculars. JEE Advanced rarely asks it in isolation ${ESTIMATE} but builds skew-line and plane problems directly on top of it. (NEET has no Mathematics section, so this ladder runs CBSE${NB}→${NB}CUET/JEE Main${NB}→${NB}JEE${NB}Advanced.)`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Picture yourself standing in the corner of your classroom, exactly where two walls meet the floor. That corner is the <b>origin</b>. One edge of the floor runs to your right (the <b>x-axis</b>), another runs straight ahead of you (the <b>y-axis</b>), and the line going straight up the corner where the two walls meet is the <b>z-axis</b>. Now stretch a thread tightly from that corner to any point in the room: to the tip of the ceiling fan, say. That taut thread is a <b>line in space</b>. The single most important question we can ask about it is simple: which way is it pointing?',
      },
      {
        t: 'p',
        html: `In two dimensions we’d answer with one number: a slope, or a single angle. But in 3D, “which way” needs to be pinned down against all three axes at once. So we measure the angle the thread makes with the x-axis (call it ${al}), with the y-axis (${be}), and with the z-axis (${ga}). Instead of carrying around three angles, we carry their cosines: ${l} = ${COS(al)}, ${m} = ${COS(be)}, ${n} = ${COS(ga)}. These three numbers are the <b>direction cosines</b> of the line. They are the line’s “address” in terms of orientation: a compact fingerprint of the direction.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> direction cosines are like splitting a budget. Suppose a direction has a fixed total “strength” of 1, and it must spend that strength across the three axes. A line lying flat along the x-axis spends everything there: ${pt(l, m, n)} = ${pt('1', '0', '0')}. A line tilted equally between all three shares it evenly. The hidden rule that makes this a budget and not a free-for-all is the master identity<br>${LMN} = 1.<br>The squares of the direction cosines must always add to exactly one. This is what guarantees they describe a genuine unit direction and not just any old triple of numbers.`,
      },
      {
        t: 'p',
        html: `There is a second, even more physical way to read those three cosines. Take any point on the line at distance ${r} from the origin and drop a perpendicular from it onto each axis. The shadow it casts (its projection) lands at ${r}${NB}${COS(al)} on the x-axis, ${r}${NB}${COS(be)} on the y-axis, and ${r}${NB}${COS(ga)} on the z-axis. So the direction cosines are simply the fractions of the full length spent along each axis. Equivalently: a single unit step along the line (a step of length exactly 1) moves you ${l} to the right, ${m} forward, and ${n} upward. In one sentence, <b>direction cosines are the components of the unit vector pointing along the line</b>, and committing that sentence to memory makes half the chapter’s formulae feel inevitable rather than memorised.`,
      },
      {
        t: 'p',
        html: `Now, in practice, nobody wants to compute three cosines from scratch every time. If a line passes through ${pt('1', '2', '3')} and ${pt('4', '8', '11')}, the natural “step” along it is ${pt('3', '6', '8')}: just the coordinate differences. These three numbers, 3, 6, 8, are not the direction cosines (their squares don’t sum to 1), but they are <b>proportional</b> to them. Any set of numbers proportional to the direction cosines is called a set of <b>direction ratios</b> (DRs). Think of direction ratios like a recipe given as a ratio: “tamarind ∶ jaggery ∶ chilli = 3 ∶ 6 ∶ 8.” The ratio fixes the flavour completely; you can scale it up for a wedding or down for one plate. Direction ratios fix the direction completely; to get the unique unit version (the direction cosines) you simply divide each ratio by the length ${rt('3<sup>2</sup> + 6<sup>2</sup> + 8<sup>2</sup>')}.`,
      },
      {
        t: 'p',
        html: 'Once you know a single point on a line <b>and</b> its direction, the line is completely determined, like knowing a train’s starting station and the exact bearing\u00a0of\u00a0the\u00a0track. That single idea gives us the <b>equation of a line</b>: start at a known point, then walk any distance in the fixed direction.',
      },
      {
        t: 'p',
        html: `It is worth pausing on how cleanly this separates two ideas. A line carries two completely independent pieces of information: where it is (any one point on it) and which way it goes (its direction). Keep the direction but shift the point and you slide to a parallel line; keep the point but rotate the direction and you pivot the line about that point. Direction cosines and ratios capture only the second piece (the “which way”), which is exactly why the same direction ratios describe infinitely many parallel lines scattered across space. To name one specific line you must marry a direction to a point, and that is precisely what ${LINE} does: ${va} supplies the “where”, ${vb} the “which way”, and the parameter ${la} slides you up and down the track.`,
      },
      {
        t: 'p',
        html: `A handful of special lines are worth keeping at your fingertips. A line along the x-axis has direction cosines ${pt('1', '0', '0')}: it makes 0° with x and 90° with the other two. A line lying entirely inside the xy-plane makes 90° with the z-axis, so ${n} = cos${NB}90° = 0; the vanishing of a single direction cosine always flags a line parallel to a coordinate plane (perpendicular to one axis). And a line equally inclined to all three axes must, by the budget rule, satisfy 3${sq(l)} = 1, giving ${l} = ${m} = ${n} = ±${fr('1', '√3')}, a value worth memorising outright, because it surfaces often ${ESTIMATE}.`,
      },
      {
        t: 'p',
        html: `If all of this feels heavier than the slope you used in Class 11, that is because three dimensions genuinely demand more bookkeeping. In a plane, one number (the slope tan${NB}${th}) fixed a line’s direction, because there was only a single “other” axis to measure against. In space there are three axes, and one angle can no longer pin you down: a line tilted 30° from the x-axis could still swing through an entire cone of orientations. Three cosines, locked together by one constraint, are the minimum honest description, which is why we trade the lone slope for the triple ${pt(l, m, n)}.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions to respect:</b><br>• Direction cosines belong to a directed line. Reverse the arrow and every sign flips: ${pt(l, m, n)}${NB}→${NB}${pt(`−${l}`, `−${m}`, `−${n}`)}. So an undirected line really has <b>two</b> valid DC sets, which is why the ± keeps appearing.`,
      },
      {
        t: 'p',
        html: `• Direction ratios are <b>never unique</b>: ${pt('2', '3', '−1')}, ${pt('4', '6', '−2')} and ${pt('−2', '−3', '1')} all describe the same direction. Only direction cosines are unique (up to that single ±).`,
      },
      {
        t: 'p',
        html: `• The zero triple ${pt('0', '0', '0')} has no direction and is meaningless as DRs.`,
      },
      {
        t: 'p',
        html: `• The angle ${al} is measured with the <b>axis itself</b>, not with a coordinate plane. Confusing “angle with the z-axis” and “angle with the xy-plane” (which are complementary) is the single most common slip on this topic.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: 'Unlike Physics quantities, these objects are <b>pure numbers</b>: direction cosines are dimensionless ratios, so there are no SI units or dimensional formulae attached. What replaces “units & dimensions” here is the family of algebraic constraints they must obey.',
      },
      {
        t: 'p',
        html: `<b>Direction cosines.</b> If a directed line makes angles ${al}, ${be}, ${ga} with the positive x-, y-, z-axes:`,
      },
      {
        t: 'formula',
        kicker: 'Direction cosines',
        main: `${l} = ${COS(al)}<br>${m} = ${COS(be)}<br>${n} = ${COS(ga)}<br>${LMN} = 1`,
        legend: [`${al}, ${be}, ${ga} = the angles with the positive x-, y-, z-axes`, `${l}, ${m}, ${n} = the direction cosines`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Direction ratios.</b> Any triple ${pt(a, b, c)} with ${a} ∶ ${b} ∶ ${c} = ${l} ∶ ${m} ∶ ${n}. Conversion to direction cosines:`,
      },
      {
        t: 'formula',
        kicker: 'Direction cosines from direction ratios',
        main: `${l} = ±${fr(a, rt(ABC2))}<br>${m} = ±${fr(b, rt(ABC2))}<br>${n} = ±${fr(c, rt(ABC2))}`,
        legend: [`${a}, ${b}, ${c} = the direction ratios`, `${l}, ${m}, ${n} = the direction cosines`],
        note: null,
      },
      {
        t: 'p',
        html: 'The single ± (same sign for all three) reflects the two possible directions of the line.',
      },
      {
        t: 'p',
        html: `<b>Direction ratios as projections.</b> A fast way to recognise direction ratios in the wild: the scalar components of any vector lying along the line form a valid set of direction ratios, no normalisation required. If ${vb} = ${ijk(a, `+ ${b}`, `+ ${c}`)} points along the line, then ${pt(a, b, c)} are direction ratios automatically. This is exactly why coordinate differences between two points serve as direction ratios, and why you may freely scale or reverse them: for instance, ${pt('2', '−1', '3')}, ${pt('4', '−2', '6')} and ${pt('−2', '1', '−3')} all describe the same direction, yet only the normalised triple (${fr('2', '√14')}, −${fr('1', '√14')}, ${fr('3', '√14')}) (up to sign) is the unique set of direction cosines.`,
      },
      {
        t: 'p',
        html: `<b>Direction cosines / ratios of a line through two points</b> ${P}${pt(x1, y1, z1)} and ${Q}${pt(x2, y2, z2)}. Direction ratios are simply<br>(${x2} − ${x1}, ${y2} − ${y1}, ${z2} − ${z1}),<br>and dividing by<br>${PQ} = ${DIST}<br>gives the direction cosines.`,
      },
      {
        t: 'p',
        html: `<b>Vector equation of a line</b> through point with position vector ${va}, parallel to direction ${vb}:`,
      },
      {
        t: 'formula',
        kicker: 'Vector equation of a line',
        main: `${LINE}, ${la} ∈ ℝ`,
        legend: [`${va} = the position vector of a fixed point on the line`, `${vb} = a direction vector`, `${la} = the free parameter`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Cartesian equation</b> through ${pt(x1, y1, z1)} with direction ratios ${a}, ${b}, ${c} (equivalently DCs ${l}, ${m}, ${n}):`,
      },
      {
        t: 'formula',
        kicker: 'Cartesian equation of a line',
        main: CART,
        legend: [`${pt(x1, y1, z1)} = a point on the line`, `${a}, ${b}, ${c} = the direction ratios`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Line through two points</b> (vector and Cartesian), with ${va}, ${vb} here the position vectors of the two points:`,
      },
      {
        t: 'formula',
        kicker: 'Line through two points',
        main: `${vr} = ${va} + ${la}(${vb} − ${va})<br>${CART2}`,
        legend: [`${va}, ${vb} = the position vectors of the two points`, `${pt(x1, y1, z1)} = the first point`, `${pt(x2, y2, z2)} = the second point`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Notation key:</b> ${al}, ${be}, ${ga} = angles with the three axes; ${l}, ${m}, ${n} = direction cosines; ${a}, ${b}, ${c} = direction ratios; ${va} = position vector of a fixed point on the line; ${vb} = a direction vector (DRs are its components); ${la} = free parameter; ${PQ} = distance between two points.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Symbol(s)', 'Unique?', 'Key constraint'],
        rows: [
          ['Direction cosines', `${l}, ${m}, ${n}`, 'Yes (up to ±)', `${LMN} = 1`],
          ['Direction ratios', `${a}, ${b}, ${c}`, 'No (any scalar multiple)', 'not all zero'],
          ['Angles with axes', `${al}, ${be}, ${ga}`, 'Yes', COS_SUM],
        ],
      },

      { t: 'part', title: 'Theorems and proofs' },
      {
        t: 'p',
        html: `<b>Theorem 1 (the master identity).</b> For any directed line, ${LMN} = 1.`,
      },
      { t: 'fig', id: 'm12-11-fig-11.2' },
      {
        t: 'p',
        html: `<b>Proof.</b> Place the line through the origin and let ${P}${pt(x, y, z)} be a point on it at distance ${r} = ${OP} from the origin. The foot of the perpendicular from ${P} to the x-axis sits at ${pt(x, '0', '0')}, so in the right triangle formed, the x-coordinate is the projection of ${OP} onto the x-axis:<br>${x} = ${r}${NB}${COS(al)} = ${r}${NB}${l}.<br>By the identical argument on the other two axes, ${y} = ${r}${NB}${m} and ${z} = ${r}${NB}${n}. Now the distance of ${P} from the origin satisfies ${sq(r)} = ${sq(x)} + ${sq(y)} + ${sq(z)}. Substituting,<br>${sq(r)} = (${I('rl')})<sup>2</sup> + (${I('rm')})<sup>2</sup> + (${I('rn')})<sup>2</sup> = ${sq(r)}(${LMN}).<br>Dividing by ${sq(r)} (non-zero, since ${rel(P, '≠', O)}) gives ${LMN} = 1. ■`,
      },
      {
        t: 'p',
        html: `A useful corollary drops straight out: since ${COS2(th)} = 1 − ${SIN2(th)},<br>${SIN2(al)} + ${SIN2(be)} + ${SIN2(ga)} = 3 − (${LMN}) = 2.`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2 (direction cosines from direction ratios).</b> If ${pt(a, b, c)} are direction ratios, the direction cosines are ±${fr(a, rt(ABC2))}, and similarly for the others.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> By definition of direction ratios, there is a non-zero constant ${k} with ${a} = ${I('kl')}, ${b} = ${I('km')}, ${c} = ${I('kn')}. Then<br>${ABC2} = ${sq(k)}(${LMN}) = ${sq(k)}${NB}·${NB}1 = ${sq(k)},<br>so ${k} = ±${rt(ABC2)}. Hence<br>${l} = ${fr(a, k)} = ±${fr(a, rt(ABC2))},<br>and likewise for ${m}, ${n}. The shared sign of ${k} produces the single ± for the directed line. ■`,
      },
      {
        t: 'p',
        html: `<b>Derivation of the Cartesian equation of a line.</b> Start from the vector form ${LINE}, where ${va} = ${x1}${ii} + ${y1}${jj} + ${z1}${kk} and ${vb} = ${ijk(a, `+ ${b}`, `+ ${c}`)} (the components ${a}, ${b}, ${c} being direction ratios). Writing ${vr} = ${ijk(x, `+ ${y}`, `+ ${z}`)} and comparing components:<br>${x} = ${x1} + ${la}${a},<br>${y} = ${y1} + ${la}${b},<br>${z} = ${z1} + ${la}${c}.<br>Each equation isolates the same parameter:<br>${la} = ${CART}.<br>Eliminating ${la} leaves the symmetric Cartesian form. The reasoning behind each step is physical: ${la} measures “how far along the direction” we have travelled, so setting the three expressions equal simply says all three coordinates advance in lock-step as we move along the line. ■`,
      },
      {
        t: 'p',
        html: `(One caution baked into the derivation: ${la} equals true distance from ${pt(x1, y1, z1)} <b>only when</b> ${vb} is a unit vector, i.e. when ${a}, ${b}, ${c} are the direction cosines themselves. With arbitrary direction ratios, ${la} is just a parameter, not a length.)`,
      },
      {
        t: 'p',
        html: `<b>Theorem 3 (direction cosines of a line through two points).</b> The line through ${P}${pt(x1, y1, z1)} and ${Q}${pt(x2, y2, z2)} has direction cosines<br>${fr(`${x2} − ${x1}`, PQ)}, ${fr(`${y2} − ${y1}`, PQ)}, ${fr(`${z2} − ${z1}`, PQ)},<br>where ${PQ} = ${DIST}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> The vector ${vPQ}${NB}=${NB}(${x2}${NB}−${NB}${x1})${ii}${NB}+${NB}(${y2}${NB}−${NB}${y1})${jj}${NB}+${NB}(${z2}${NB}−${NB}${z1})${kk} lies along the line, so its components are a set of direction ratios. Its magnitude is exactly ${PQ}. By Theorem 2, dividing each direction ratio by the length ${PQ} yields the direction cosines, which is the stated result. The choice of overall sign corresponds to travelling from ${P} towards ${Q} rather than ${Q} towards ${P}. ■`,
      },
      {
        t: 'p',
        html: '<b>Proposition (parallel lines & the collinearity test).</b> Two lines are parallel if and only if their direction ratios are proportional; equivalently, their direction cosines are equal up to a common sign.',
      },
      {
        t: 'p',
        html: `<b>Reasoning.</b> Parallelism means the two lines share a direction. Because direction ratios are fixed by the direction alone, two lines pointing the same way must have proportional ratios; conversely, proportional ratios force a common direction vector. Passing to unit vectors collapses the proportionality constant to ±1, so the direction cosines agree up to one overall sign. This is the engine behind every collinearity check: three points ${A}, ${B}, ${C} are collinear precisely when the direction ratios of ${vAB} and ${vAC} are proportional, the exact criterion applied in the third worked example of this topic.`,
      },
      {
        t: 'p',
        html: `<b>Procedure: converting between the two forms of a line.</b> Vector and Cartesian equations carry identical information; switching between them is a routine but heavily-tested skill ${ESTIMATE}. <b>Vector → Cartesian:</b> read off the fixed point from ${va} and the direction ratios from the components of ${vb}, then drop them into<br>${CART}.<br><b>Cartesian → vector:</b> first force the equation into standard form (each numerator written as ${x} − ${x1}, denominators as plain coefficients), read the point ${pt(x1, y1, z1)} and ratios ${pt(a, b, c)}, and assemble<br>${vr} = (${x1}${ii} + ${y1}${jj} + ${z1}${kk}) + ${la}(${ijk(a, `+ ${b}`, `+ ${c}`)}).<br>The only place students lose marks is skipping the standardise step: a denominator like ${fr(`3 − ${y}`, '4')} secretly carries the ratio −4, not 4.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `A line has direction ratios 2, −3, 6. Find its direction cosines, and write the vector and Cartesian equations of the line passing through ${pt('1', '4', '−2')} parallel to it.`,
        steps: [
          `<b>Given:</b> ${a}, ${b}, ${c} = 2, −3, 6.`,
          `${rt(ABC2)} = ${rt('4 + 9 + 36')} = √49 = 7.`,
          `Direction cosines:<br>${l} = ${fr('2', '7')}, ${m} = −${fr('3', '7')}, ${n} = ${fr('6', '7')}.`,
          `<b>Check:</b> ${fr('4', '49')} + ${fr('9', '49')} + ${fr('36', '49')} = ${fr('49', '49')} = 1.${NB}✓`,
          `Vector equation (with ${va} = ${ijk('', '+ 4', '− 2')}, ${vb} = ${ijk('2', '− 3', '+ 6')}):<br>${vr} = (${ijk('', '+ 4', '− 2')}) + ${la}(${ijk('2', '− 3', '+ 6')}).`,
          `Cartesian equation:<br>${fr(`${x} − 1`, '2')} = ${fr(`${y} − 4`, '−3')} = ${fr(`${z} + 2`, '6')}.`,
          'Notice how the answer simply reuses the direction ratios as the denominators and the point’s coordinates (with signs flipped) as the constants: the equation of a line is, in effect, just its direction and a point written side by side.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / JEE Main Speed Trap',
        q: 'A line makes angles 60° and 45° with the positive x- and y-axes respectively. What angle does it make with the z-axis?',
        steps: [
          `Use ${COS_SUM} directly, no need to find direction cosines fully:<br>${COS2(DEG('60'))} + ${COS2(DEG('45'))} + ${COS2(ga)} = 1<br>⇒ ${fr('1', '4')} + ${fr('1', '2')} + ${COS2(ga)} = 1.`,
          `${COS2(ga)} = ${fr('1', '4')}<br>⇒ ${COS(ga)} = ±${fr('1', '2')}<br>⇒ ${ga} = 60° or 120°.`,
          `<b>The trap:</b> most students stop at 60° and lose the mark. Because ${COS(ga)} = −${fr('1', '2')} is equally valid, the line may dip below the xy-plane and make 120° with the z-axis. <b>Both</b> are correct. Speed move: once you see ${COS2(ga)} alone, immediately remember to write two answers.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main · Multi-concept',
        q: `The points ${A}${pt('3', '−1', '2')}, ${B}${pt('1', '3', '4')}, ${C}${pt('5', k, '0')} are collinear. Find ${k}, and then the direction cosines of the line.`,
        steps: [
          `This links <b>collinearity</b> (direction ratios of ${vAB} and ${vAC} must be proportional) with the <b>DR → DC</b> conversion.`,
          `${vAB} = (1 − 3, 3 + 1, 4 − 2) = ${pt('−2', '4', '2')},<br>${vAC} = (5 − 3, ${k} + 1, 0 − 2) = (2, ${k} + 1, −2).`,
          `Proportionality:<br>${fr('−2', '2')} = ${fr(`${k} + 1`, '4')} = ${fr('2', '−2')}.`,
          `The first and third ratios both equal −1 (consistent${NB}✓). From the middle:<br>${fr(`${k} + 1`, '4')} = −1 ⇒ ${k} + 1 = −4 ⇒ ${k} = −5.`,
          `Now use ${vAB} = ${pt('−2', '4', '2')}, with ${abs(vAB)}${NB}=${NB}${rt(`4${NB}+${NB}16${NB}+${NB}4`)}${NB}=${NB}√24${NB}=${NB}2√6:<br>${l}, ${m}, ${n} = (${fr('−2', '2√6')}, ${fr('4', '2√6')}, ${fr('2', '2√6')})<br>= (−${RT6('1')}, ${RT6('2')}, ${RT6('1')}).`,
          `The cross-check is automatic: ${fr('1', '6')} + ${fr('4', '6')} + ${fr('1', '6')} = 1, confirming the normalisation. Note too that any scalar multiple of ${pt('−2', '4', '2')}, for instance ${pt('−1', '2', '1')}, would have served equally well as direction ratios; we normalised only at the very last step, which is the disciplined order of operations and the surest guard against reporting ratios where cosines were asked.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `The direction cosines of two lines satisfy the relations ${rel(`3${l} + ${m} + 5${n}`, '=', '0')} and ${rel(`6${I('mn')} − 2${I('nl')} + 5${I('lm')}`, '=', '0')}. Find the acute angle between the two lines.`,
        steps: [
          `From the linear relation, ${m} = −(3${l} + 5${n}). Substitute into the quadratic:<br>6${n}(−(3${l} + 5${n})) − 2${I('nl')} + 5${l}(−(3${l} + 5${n})) = 0.<br>−18${I('ln')} − 30${sq(n)} − 2${I('nl')} − 15${sq(l)} − 25${I('ln')} = 0<br>⇒ −15${sq(l)} − 45${I('ln')} − 30${sq(n)} = 0.`,
          `Divide by −15:<br>${sq(l)} + 3${I('ln')} + 2${sq(n)} = 0<br>⇒ (${l} + ${n})(${l} + 2${n}) = 0<br>⇒ ${l} = −${n} or ${l} = −2${n}.`,
          `<b>Case 1</b> (${l} = −${n}): ${m} = −(3(−${n}) + 5${n}) = −2${n}, so ${pt(l, m, n)} ∝ ${pt('−1', '−2', '1')}, i.e. ${pt('1', '2', '−1')}.`,
          `<b>Case 2</b> (${l} = −2${n}): ${m} = −(3(−2${n}) + 5${n}) = ${n}, so ${pt(l, m, n)} ∝ ${pt('−2', '1', '1')}, i.e. ${pt('2', '−1', '−1')}.`,
          `Both direction vectors have magnitude √6. The angle:<br>${COS(th)} = ${fr('(1)(2) + (2)(−1) + (−1)(−1)', `√6${NB}·${NB}√6`)}<br>= ${fr('2 − 2 + 1', '6')} = ${fr('1', '6')}.`,
          'Two observations make this problem tractable. First, one linear together with one quadratic relation among <i>l</i>, <i>m</i>, <i>n</i> generically carves out <b>two</b> directions, not one, which is exactly why such questions usually refer to two lines. Second, we never needed the actual direction cosines: the two relations alone pin down two direction ratio vectors, and because the angle formula is scale-free, the answer drops straight out. Had the question instead asked us to prove perpendicularity, we would simply have checked whether that final dot product came to zero (here it is 1, so the lines are not perpendicular).',
        ],
        ans: `${th} = cos<sup>−1</sup>(${fr('1', '6')}) ≈ 80.4°.`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>[CBSE]</b> Find the direction cosines of a line whose direction ratios are 6, −2, 3.',
            a: `(${fr('6', '7')}, −${fr('2', '7')}, ${fr('3', '7')})`,
          },
          {
            q: '<b>[CUET / JEE Main]</b> A line makes an angle of 120° with the x-axis and 60° with the y-axis. Find the angle it makes with the z-axis.',
            a: '45° or 135°',
          },
          {
            q: `<b>[JEE Main]</b> Find the vector and Cartesian equations of the line passing through the points ${pt('2', '−1', '3')} and ${pt('4', '2', '1')}.`,
            a: `${vr} = (${ijk('2', '−', '+ 3')}) + ${la}(${ijk('2', '+ 3', '− 2')});<br>${fr(`${x} − 2`, '2')} = ${fr(`${y} + 1`, '3')} = ${fr(`${z} − 3`, '−2')}`,
          },
          {
            q: `<b>[JEE Main]</b> If ${A}${pt('1', '2', '3')}, ${B}${pt('3', a, '5')}, ${C}${pt('5', '4', b)} are collinear, find ${a} and ${b}.`,
            a: `${a} = 3, ${b} = 7`,
          },
          {
            q: `<b>[JEE Advanced]</b> A line ${OP} from the origin makes equal angles with the three coordinate axes; a second line ${I('OQ')} has direction ratios 1, −1, 0. Find the angle between ${OP} and ${I('OQ')}.`,
            a: '90° (the lines are perpendicular)',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A line makes angles 90°, 135°, 45° with the x-, y-, z-axes respectively. Its direction cosines are',
        opts: [
          { label: `(0, −${RT2}, ${RT2})`, nudge: null },
          { label: `(0, ${RT2}, ${RT2})`, nudge: `<b>(B)</b> flips the sign of cos${NB}135°: picked by students who ignore that 135° is obtuse.` },
          { label: `(1, −${RT2}, ${RT2})`, nudge: `<b>(C)</b> uses cos${NB}90° = 1 instead of 0, the classic axis-angle blunder.` },
          { label: `(0, −${fr('1', '2')}, ${fr('1', '2')})`, nudge: `<b>(D)</b> uses cos${NB}45° = ${fr('1', '2')} (confusing it with cos${NB}60°), and the squares no longer sum to 1.` },
        ],
        correct: 0,
        solution: `cos${NB}90°${NB}=${NB}0, cos${NB}135°${NB}=${NB}−${RT2}, cos${NB}45°${NB}=${NB}${RT2}; check 0${NB}+${NB}${fr('1', '2')}${NB}+${NB}${fr('1', '2')}${NB}=${NB}1.${NB}✓`,
      },
      {
        t: 'mcq',
        q: 'If a line has direction ratios proportional to 1, −2, 2, the direction cosine measured against the y-axis is',
        opts: [
          { label: fr('2', '3'), nudge: '<b>(A)</b> drops the negative sign.' },
          { label: `−${fr('2', '3')}`, nudge: null },
          { label: fr('1', '3'), nudge: `<b>(C)</b> takes the wrong component: ${fr('1', '3')} is the x-direction cosine, not the y one.` },
          { label: `−${fr('1', '3')}`, nudge: `<b>(D)</b> takes the wrong component (${fr('1', '3')} is the x-direction cosine) and adds a stray minus sign.` },
        ],
        correct: 1,
        solution: `${rt('1 + 4 + 4')} = 3, so ${m} = ${fr('−2', '3')}. Trap source: not tracking which ratio belongs to which axis.`,
      },
      {
        t: 'mcq',
        q: `The direction ratios of the line<br>${fr(`${x} − 1`, '2')} = ${fr(`3 − ${y}`, '4')} = ${fr(`2${z} − 5`, '6')}<br>are`,
        opts: [
          { label: '2, 4, 6', nudge: `<b>(A)</b> reads off the raw denominators 2, 4, 6, ignoring the sign on ${y} and the coefficient on ${z}.` },
          { label: '2, −4, 3', nudge: null },
          { label: '2, −4, 6', nudge: `<b>(C)</b> fixes the ${y}-sign but forgets that 2${z} halves the denominator.` },
          { label: '1, 3, 5', nudge: `<b>(D)</b> grabs the constants in the numerators; they are not even the point, which is (1, 3, ${fr('5', '2')}).` },
        ],
        correct: 1,
        solution: `The equation must first be put in <b>standard form</b><br>${CART}.<br>Now<br>${fr(`3 − ${y}`, '4')} = ${fr(`−(${y} − 3)`, '4')} = ${fr(`${y} − 3`, '−4')},<br>and<br>${fr(`2${z} − 5`, '6')} = ${fr(`${z} − 5${NB}÷${NB}2`, '3')}.<br>Hence DRs = 2, −4, 3. This is the most-failed type in JEE Main: <b>always standardise before reading direction ratios.</b>`,
      },
      {
        t: 'mcq',
        q: `The direction cosines of the line joining ${P}${pt('2', '3', '5')} and ${Q}${pt('−1', '3', '2')} are`,
        opts: [
          { label: `(−${RT2}, 0, −${RT2})`, nudge: null },
          { label: pt('−3', '0', '−3'), nudge: '<b>(B)</b> reports direction ratios as if they were direction cosines (no normalisation).' },
          { label: `(−${RT2}, 1, −${RT2})`, nudge: '<b>(C)</b> sets the middle term to 1 instead of 0: a panic reaction to a zero component.' },
          { label: `(${fr('3', '√18')}, 0, ${fr('3', '√18')})`, nudge: `<b>(D)</b> normalises but flips the sign, ignoring the direction ${P} → ${Q}.` },
        ],
        correct: 0,
        solution: `${vPQ}${NB}=${NB}${pt('−3', '0', '−3')}, ${abs(PQ)}${NB}=${NB}${rt(`9${NB}+${NB}0${NB}+${NB}9`)}${NB}=${NB}3√2, so<br>DCs = (${fr('−3', '3√2')}, 0, ${fr('−3', '3√2')})<br>= (−${RT2}, 0, −${RT2}).`,
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Direction ratios masquerading as direction cosines.</b> Writing ${pt(a, b, c)} as the answer without dividing by ${rt(ABC2)}. Always finish with the normalisation step.`,
          `<b>Forgetting the ±.</b> An undirected line has two opposite direction-cosine sets; problems with ${COS2(ga)}${NB}=${NB}… usually have <b>two</b> angle answers.`,
          '<b>Axis vs. plane angle confusion.</b> The angle with the z-axis and the angle with the xy-plane are complementary, not equal.',
          `<b>Reading denominators without standardising.</b> A line written as ${fr(`3 − ${y}`, '4')} or ${fr(`2${z} − 5`, '6')} hides its true direction ratios until you force the${NB}${fr(`${x} − ${x1}`, a)}${NB}shape.`,
          `<b>Treating the parameter ${la} as a distance.</b> ${la} is a true length only when the direction vector is a unit vector (i.e. you used direction cosines).`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed & accuracy):</b> For “angle with an axis” questions, skip computing all three direction cosines: go straight to ${COS_SUM} and solve for the missing one. And after every direction-cosine answer, do a one-second sanity check: square them and confirm the sum is 1. If it isn’t, you forgot to normalise.`,
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (form conversion):</b> When a Cartesian equation looks “ugly” (fractions buried in the numerators, or coefficients sitting on ${x}, ${y}, ${z}), resist reading the ratios off by eye. Spend three seconds rewriting it as<br>${CART}<br>first. Examiners disguise the standard form precisely because that one skipped step is the cheapest mark on the page to harvest.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Direction cosines', note: `${l} = ${COS(al)}, ${m} = ${COS(be)}, ${n} = ${COS(ga)}, with ${LMN} = 1.` },
          { f: 'Bonus identity', note: `${SIN2(al)} + ${SIN2(be)} + ${SIN2(ga)} = 2.` },
          { f: 'DR → DC', note: `${l}, ${m}, ${n} = ±${fr(pt(a, b, c), rt(ABC2))}.` },
          { f: 'Line through two points', note: `DRs = (${x2} − ${x1}, ${y2} − ${y1}, ${z2} − ${z1}).` },
          { f: `Vector form: ${LINE}. Cartesian: ${CART}.`, note: '' },
        ],
        aids: [
          '“Cosines on a unit budget”: direction cosines spend a total of 1 in squares.',
          '“Ratios are a recipe, cosines are the dish”: divide ratios by their length to plate up the unique direction cosines.',
          '“Standardise, then read”: never lift direction ratios off un-standardised denominators.',
          'DC sets always come in a ± pair: one line, two directions.',
        ],
      },
    ],
  },
];
