import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11, Topics 01–03, pp. 1010–1036 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's Subtopic 01
 * Coordinate Axes, Planes, and Octants (pp. 1010–1019), Subtopic 02 Distance
 * and Section Formulas in 3D (pp. 1020–1028) and Subtopic 03 Applications:
 * Centroid, Collinearity & Locus (pp. 1029–1036). Each topic opens with its
 * "Exam Relevance:" box as a part of its own, then is split at its Sections 1
 * to 8; the "Cheat Sheet" is the part "Cheat sheet".
 * Figures: 11.1 (caption p. 1010, drawn p. 1011) in Topic 01's Concept
 * intuition; 11.2 (caption p. 1013, drawn p. 1014) after Procedure B; 11.3
 * (caption p. 1016, drawn p. 1017) on Topic 01's fourth worked example; 11.4
 * (caption p. 1020, drawn p. 1021) in Topic 02's Concept intuition; 11.5
 * (caption p. 1025, drawn p. 1026) on Topic 02's fourth worked example; 11.6
 * (caption p. 1033, drawn p. 1034) on Topic 03's fourth worked example. No
 * unnumbered drawings. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const sb = (b: string, s: string) => `<i>${b}</i><sub>${s}</sub>`;
/** A no-break space: keeps a short expression on one line. */
const NB = ' ';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const x = I('x');
const y = I('y');
const z = I('z');
const k = I('k');
const m = I('m');
const n = I('n');
const a = I('a');
const b = I('b');
const c = I('c');
const r = I('r');
const P = I('P');
const x1 = sb('x', '1');
const x2 = sb('x', '2');
const x3 = sb('x', '3');
const y1 = sb('y', '1');
const y2 = sb('y', '2');
const y3 = sb('y', '3');
const z1 = sb('z', '1');
const z2 = sb('z', '2');
const z3 = sb('z', '3');
const HALF = fr('1', '2');
/** A short triple kept whole: (a, b, c). */
const t3 = (p: string, q: string, s: string) => `(${p},${NB}${q},${NB}${s})`;
/** A named point with its triple: P(x, y, z). */
const pt = (name: string, p: string, q: string, s: string) => `${I(name)}${t3(p, q, s)}`;
const RATIO = (p: string, q: string) => `${p}${NB}∶${NB}${q}`;
const MN = RATIO(m, n);
const K1 = RATIO(k, '1');
const XY = `${I('XY')}-plane`;
const YZ = `${I('YZ')}-plane`;
const ZX = `${I('ZX')}-plane`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const P1 = pt('P', x1, y1, z1);
const Q2 = pt('Q', x2, y2, z2);
const A1 = pt('A', x1, y1, z1);
const B2 = pt('B', x2, y2, z2);
const C3 = pt('C', x3, y3, z3);
/** A squared difference kept whole: (x₂ − x₁)², so a long line breaks only before a "+" between two of them. */
const sqd = (p: string, q: string) => `(${p}${NB}−${NB}${q})<sup>2</sup>`;
const DIST = `√(${sqd(x2, x1)} + ${sqd(y2, y1)} + ${sqd(z2, z1)})`;
const SEC = (op: string, den: string) => [
  fr(`<i>mx</i><sub>2</sub> ${op} <i>nx</i><sub>1</sub>`, den),
  fr(`<i>my</i><sub>2</sub> ${op} <i>ny</i><sub>1</sub>`, den),
  fr(`<i>mz</i><sub>2</sub> ${op} <i>nz</i><sub>1</sub>`, den),
];
const [SIX, SIY, SIZ] = SEC('+', `${m} + ${n}`);
const [SEX, SEY, SEZ] = SEC('−', `${m} − ${n}`);
const KX = fr(`<i>kx</i><sub>2</sub> + ${x1}`, `${k} + 1`);
const KY = fr(`<i>ky</i><sub>2</sub> + ${y1}`, `${k} + 1`);
const KZ = fr(`<i>kz</i><sub>2</sub> + ${z1}`, `${k} + 1`);
const GX = fr(`${x1} + ${x2} + ${x3}`, '3');
const GY = fr(`${y1} + ${y2} + ${y3}`, '3');
const GZ = fr(`${z1} + ${z2} + ${z3}`, '3');
const CENTROID = `<i>G</i> = (${GX}, ${GY}, ${GZ})`;
const SPHERE = `(${x} − ${a})<sup>2</sup> + (${y} − ${b})<sup>2</sup> + (${z} − ${c})<sup>2</sup> = ${r}<sup>2</sup>`;
const ROOT_M5 = `√((${x} − 5)<sup>2</sup> + ${sq(y)} + ${sq(z)})`;
const ROOT_P5 = `√((${x} + 5)<sup>2</sup> + ${sq(y)} + ${sq(z)})`;
const vec = (s: string) => `<i>${s}⃗</i>`;
const SIGNS_X = ['+', '−', '−', '+', '+', '−', '−', '+'];
const SIGNS_Y = ['+', '+', '−', '−', '+', '+', '−', '−'];
const SIGNS_Z = ['+', '+', '+', '+', '−', '−', '−', '−'];
const OCTANTS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · pp. 1010–1019 ────────────────
  {
    n: '01',
    title: 'Coordinate Axes, Planes, and Octants',
    kalam: 'Which octant a point sits in is decided entirely by the sign pattern of (x, y, z).',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `In <b>JEE Main</b> this surfaces as quick one-markers (naming an octant, the equation of a coordinate plane/axis, or the foot of a perpendicular) and as the silent foundation of every later vector and 3D-line problem ${ESTIMATE}. <b>JEE Advanced</b> rarely asks it bare but leans on it inside locus and symmetry arguments ${ESTIMATE}. <b>CBSE Boards</b> typically pose a 1–3 mark short-answer on octant signs or coordinates of a projected point ${ESTIMATE}.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `You already live comfortably in two dimensions. On graph paper you fix an origin, draw two perpendicular lines (the ${x}-axis and ${y}-axis) and any point is pinned down by an ordered pair (${x},${NB}${y}). Those two axes slice the flat sheet into <b>four quadrants</b>. Everything so far has happened on the paper.`,
      },
      {
        t: 'p',
        html: `Now lift your pen straight off the page. That upward direction is a brand-new, third independent direction the flat sheet never had. Call it the ${z}-axis. We now have three mutually perpendicular lines meeting at a single point <i>O</i>, the <b>origin</b>, and we have stepped from a flat world into the room you are actually sitting in.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Look at the corner of your room where two walls meet the floor. That corner is the origin <i>O</i>. The three edges running away from it (one along the floor to your right, one along the floor away from you, one straight up the wall) are the three <b>coordinate axes</b> ${t3(x, y, z)}. The three flat surfaces meeting at that corner are the three <b>coordinate planes</b>:<br>• the <b>floor</b> is the ${XY},<br>• one <b>wall</b> is the ${YZ},<br>• the other <b>wall</b> is the ${ZX}.`,
      },
      { t: 'fig', id: 'm11-11-fig-11.1' },
      {
        t: 'p',
        html: `To locate any point ${P} in this room, we ask three questions: how far right, how far in, how far up? Those three signed numbers are the coordinates ${t3(x, y, z)}. Here is the cleaner way to say what each one means, and it is the idea examiners love to test: <b>a coordinate is the signed perpendicular distance of ${P} from a coordinate plane.</b> Precisely, ${x} is the distance of ${P} from the ${YZ}, ${y} from the ${ZX}, and ${z} from the ${XY}. The sign records which side of the plane you are on.`,
      },
      {
        t: 'p',
        html: `Now extend each wall and the floor straight through the corner to the other side, so each plane becomes a full, infinite plane. The corner of one room becomes the shared corner of <b>eight</b> rooms stacked around the origin. Each of these eight regions of space is an <b>octant</b>. This is the exact 3D cousin of the four quadrants: two perpendicular lines cut a plane into 2<sup>2</sup> = 4 pieces; three perpendicular planes cut space into 2<sup>3</sup> = 8 pieces.`,
      },
      {
        t: 'p',
        html: `Which octant a point sits in is decided entirely by the <b>sign pattern</b> of ${t3(x, y, z)}. The room you are physically in, everything positive, is the <b>first octant</b>. Diagonally opposite, where all three are negative, is the <b>seventh octant</b>.`,
      },
      {
        t: 'p',
        html: `<b>Edge cases & assumptions.</b> Three quiet assumptions are baked in. First, the axes are <b>rectangular</b> (mutually perpendicular) and we use a <b>right-handed</b> system by convention. Second, and this is where students slip, the neat sign rule for octants only applies to points that are strictly inside a region. A point that sits <b>on a coordinate plane</b> has one coordinate equal to zero (e.g. a point on the floor has ${z} = 0), a point <b>on an axis</b> has two coordinates zero, and the <b>origin</b> has all three zero. Such points lie on the boundaries between octants and belong to <b>no octant at all</b>. So “which octant?” is a fair question only when none of ${x}, ${y}, ${z} is zero.`,
      },

      { t: 'part', title: 'Key definitions and relations' },
      {
        t: 'p',
        html: 'These quantities are pure numbers (dimensionless); attach units only when a physical context, say a girder of length 3 m, is explicitly given.',
      },
      {
        t: 'formula',
        kicker: 'The three coordinate planes',
        main: `${XY}: ${z} = 0<br>${YZ}: ${x} = 0<br>${ZX}: ${y} = 0`,
        legend: [`${x}, ${y}, ${z} = the coordinates of a point`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'The three coordinate axes',
        main: `${x}-axis: ${y} = 0, ${z} = 0<br>${y}-axis: ${x} = 0, ${z} = 0<br>${z}-axis: ${x} = 0, ${y} = 0`,
        legend: [`${x}, ${y}, ${z} = the coordinates of a point`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Coordinates as signed distances from the planes',
        main: `${x} = dist(${P}, ${YZ})<br>${y} = dist(${P}, ${ZX})<br>${z} = dist(${P}, ${XY})`,
        legend: [`${x}, ${y}, ${z} = the coordinates of ${P}`, 'dist = the signed perpendicular distance (its size is |<i>x</i>|, |<i>y</i>|, |<i>z</i>|)'],
        note: null,
      },
      {
        t: 'p',
        html: `So the <b>distance of ${P} from a coordinate plane</b> is the absolute value of the matching coordinate: distance from the ${YZ} = |${x}|, from the ${ZX} = |${y}|, from the ${XY} = |${z}|.`,
      },
      {
        t: 'defgrid',
        title: 'Standard forms of special points (location, coordinate form)',
        rows: [
          { k: `On ${x}-axis`, v: t3(x, '0', '0') },
          { k: `On ${y}-axis`, v: t3('0', y, '0') },
          { k: `On ${z}-axis`, v: t3('0', '0', z) },
          { k: `On ${XY}`, v: t3(x, y, '0') },
          { k: `On ${YZ}`, v: t3('0', y, z) },
          { k: `On ${ZX}`, v: t3(x, '0', z) },
          { k: 'Origin', v: t3('0', '0', '0') },
        ],
      },
      {
        t: 'p',
        html: '<b>The octant sign table</b> (NCERT convention), the single most useful object in this topic:',
      },
      {
        t: 'table',
        title: null,
        // one row per octant, so each octant's (±, ±, ±) pattern reads across a single line on a phone
        head: ['Octant', `Sign of ${x}`, `Sign of ${y}`, `Sign of ${z}`],
        rows: OCTANTS.map((o, i) => [o, SIGNS_X[i], SIGNS_Y[i], SIGNS_Z[i]]),
      },
      {
        t: 'p',
        html: `Read it as: octants <b>I–IV</b> all sit above the floor (${z} > 0) and cycle the (${x},${NB}${y}) signs exactly like the four quadrants of the plane; octants <b>V–VIII</b> are their mirror images below the floor (${z} < 0).`,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no algebraic “derivation” of axes and octants (they are a construction), so the skill here is procedural. Three procedures cover almost every exam question, and each rests on one idea.',
      },
      {
        t: 'proc',
        title: 'Procedure A: Identify the octant of a point',
        steps: [
          'Discard the magnitudes; keep only the <b>sign</b> of each coordinate. The size of a number never affects which octant it is in: only its sign does.',
          'Read the sign triple against the octant sign table.',
        ],
      },
      {
        t: 'p',
        html: `<b>Why it works:</b> each coordinate plane is a “sign-decider.” The ${YZ} decides the sign of ${x} (right = +, left = −), the ${ZX} decides ${y}, the ${XY} decides ${z}. Three independent yes/no choices give 2<sup>3</sup> = 8 outcomes: exactly the eight octants. That is the whole logical skeleton of the chapter: <b>octant count = 2<sup>number of axes</sup>.</b>`,
      },
      {
        t: 'p',
        html: `<b>Example logic:</b> ${pt('P', '−7', '3', '−2')} has sign pattern ${t3('−', '+', '−')}. Scanning the table, that column is octant <b>VI</b>. Notice the 7 and 2 played no role whatsoever.`,
      },
      {
        t: 'p',
        html: `<b>Procedure B: Foot of perpendicular onto a plane or an axis.</b><br>• <b>Onto a coordinate plane:</b> drop the coordinate that the plane “kills.” Projecting ${pt('P', x, y, z)} onto the ${XY} sets ${z} → 0, giving ${t3(x, y, '0')}. Onto ${I('YZ')}: ${t3('0', y, z)}. Onto ${I('ZX')}: ${t3(x, '0', z)}.<br>• <b>Onto a coordinate axis:</b> keep only the coordinate that lies along that axis; zero the other two. The foot on the ${x}-axis is ${t3(x, '0', '0')}; on the ${y}-axis ${t3('0', y, '0')}; on the ${z}-axis ${t3('0', '0', z)}.`,
      },
      {
        t: 'p',
        html: `<b>Why it works:</b> the perpendicular from ${P} to the ${XY} runs purely in the ${z}-direction, so it changes nothing about ${x} or ${y}; it lands when the height ${z} becomes 0. Projecting onto a line is stricter still: only the displacement along that line survives.`,
      },
      { t: 'fig', id: 'm11-11-fig-11.2' },
      {
        t: 'p',
        html: `<b>Procedure C: Reflection (image) of a point in a plane or axis.</b><br>• <b>In a coordinate plane:</b> flip the sign of the one coordinate perpendicular to that plane. Image of ${pt('P', x, y, z)} in the ${XY} is ${t3(x, y, `−${z}`)}; in ${I('YZ')} it is ${t3(`−${x}`, y, z)}; in ${I('ZX')} it is ${t3(x, `−${y}`, z)}.<br>• <b>In a coordinate axis:</b> flip the signs of the <b>two</b> coordinates perpendicular to that axis. Image in the ${x}-axis is ${t3(x, `−${y}`, `−${z}`)}.<br>• <b>In the origin:</b> flip <b>all three</b> signs: ${t3(`−${x}`, `−${y}`, `−${z}`)}.`,
      },
      {
        t: 'p',
        html: '<b>Why it works:</b> a mirror reverses only the direction across it and leaves directions within it untouched. A plane is “two directions wide,” so reflecting in it touches only the one perpendicular direction. An axis is “one direction wide,” so the two perpendicular directions both flip.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `A point ${P} has coordinates ${t3('5', '−4', '9')}. (a) State the octant in which ${P} lies. (b) Find the foot of the perpendicular from ${P} to the ${ZX}. (c) Find the distance of ${P} from the ${XY}.`,
        steps: [
          `(a) Sign pattern of ${t3('5', '−4', '9')} is ${t3('+', '−', '+')}. From the octant table this is octant <b>IV</b>.`,
          `(b) The ${ZX} is ${y} = 0, so projecting kills the ${y}-coordinate: foot = ${t3('5', '0', '9')}.`,
          `(c) Distance from the ${XY} = |${z}| = |9| = 9 units.`,
          `<b>Presentation note:</b> always quote the rule you used (“${ZX} ⇒ ${y} = 0”) before substituting: it earns method marks even if arithmetic slips.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: `Among the points ${pt('A', '−1', '−2', '−3')}, ${pt('B', '2', '−5', '4')}, ${pt('C', '−6', '7', '−1')}, ${pt('D', '3', '8', '−2')}, exactly how many lie in octants that are entirely below the ${XY}?`,
        steps: [
          `<b>Solution (the fast way).</b> “Below the ${XY}” means ${z} < 0: that is octants <b>V–VIII</b>. Don’t bother naming each octant; just scan the <b>${z}-coordinate sign</b>:<br>• <i>A</i>: ${z} = −3 (< 0) ✓<br>• <i>B</i>: ${z} = 4 (> 0) ✗<br>• <i>C</i>: ${z} = −1 (< 0) ✓<br>• <i>D</i>: ${z} = −2 (< 0) ✓`,
          'Three points.',
          '<b>The trap:</b> a rushed student starts fully classifying each point into octants I–VIII and burns a minute. The question only cares about one coordinate’s sign. Read what is actually asked before computing.',
        ],
        ans: '3',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `The reflection of point ${pt('P', '4', '−3', '7')} in the ${YZ} is <i>Q</i>. The reflection of <i>Q</i> in the ${x}-axis is <i>R</i>. In which octant does <i>R</i> lie?`,
        steps: [
          'Apply the reflection rules in order (Procedure C).',
          `• Reflection of ${P} in the ${YZ} flips the perpendicular coordinate ${x}:<br><i>Q</i> = ${t3('−4', '−3', '7')}.`,
          `• Reflection of <i>Q</i> in the ${x}-axis flips the two coordinates perpendicular to that axis, namely ${y} and ${z}:<br><i>R</i> = ${t3('−4', '3', '−7')}.`,
          `• Sign pattern of <i>R</i> is ${t3('−', '+', '−')}, which is octant <b>VI</b>.`,
          '<b>This links two ideas</b>, reflection in a plane (one flip) versus reflection in an axis (two flips), and the sequencing matters: doing the operations in the wrong order, or flipping the wrong number of signs, lands you in a different octant.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        fig: 'm11-11-fig-11.3',
        q: `Find the locus of all points equidistant from the ${XY} and the ${YZ}, and describe the surface(s) geometrically.`,
        steps: [
          `Let a general point be ${pt('P', x, y, z)}.<br>• Distance of ${P} from the ${XY} is |${z}|.<br>• Distance of ${P} from the ${YZ} is |${x}|.`,
          `Equidistance demands<br>|${x}| = |${z}| ⟹ ${sq(x)} = ${sq(z)}<br>⟹ ${sq(x)} − ${sq(z)} = 0<br>⟹ (${x} − ${z})(${x} + ${z}) = 0.`,
          `So the locus is <b>not a single surface</b> but the <b>pair of planes</b><br>${x} = ${z} and ${x} = −${z},<br>each containing the entire ${y}-axis (note ${y} is completely free: the condition never constrained it). Geometrically these are the two planes that <b>bisect the dihedral angles</b> between the ${I('XY')}- and ${YZ}s; together they form an “×”-shaped pair when viewed down the ${y}-axis.`,
          '<b>The rigor lesson:</b> writing the distances as <b>absolute values</b> is non-negotiable. Dropping the modulus and solving <i>x</i> = <i>z</i> alone silently throws away half the locus: the classic JEE Advanced “you found only one of the two planes” deduction.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Name the octants in which the points ${t3('2', '1', '3')}, ${t3('−2', '1', '3')}, and ${t3('2', '−1', '−3')} lie.`,
            a: 'I, II, VIII.',
          },
          {
            q: `<b>[CBSE]</b> Write the coordinates of the foot of the perpendicular drawn from ${t3('6', '−2', '5')} to (i) the ${y}-axis and (ii) the ${XY}.`,
            a: `(i) ${t3('0', '−2', '0')} (ii) ${t3('6', '−2', '0')}.`,
          },
          {
            q: `<b>[JEE Main]</b> A point lies on the ${YZ} and is at a distance 4 from the ${ZX} and 3 from the ${XY}, with both relevant coordinates positive. Find the point.`,
            a: `${t3('0', '4', '3')}.`,
          },
          {
            q: `<b>[JEE Main]</b> The image of ${t3('−2', '5', '−7')} in the ${ZX} is reflected again in the origin. State the octant of the final point.`,
            a: `Image in ${ZX} = ${t3('−2', '−5', '−7')}; reflected in origin = ${t3('2', '5', '7')}, octant <b>I</b>.`,
          },
          {
            q: `<b>[JEE Advanced]</b> Find the locus of points equidistant from all three coordinate planes that also satisfy ${x},${NB}${y},${NB}${z} > 0, and identify the set so obtained.`,
            a: `|${x}| = |${y}| = |${z}| with all positive gives ${x} = ${y} = ${z} > 0: the ray from the origin (the origin itself excluded) along the line ${x} = ${y} = ${z} into the first octant (the space-diagonal direction).`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The point ${t3('−3', '0', '5')} lies`,
        opts: [
          {
            label: 'in octant II',
            nudge: '<b>(A)</b>, <b>(B)</b> trap students who ignore the zero and force a sign pattern, but a zero coordinate disqualifies a point from any octant.',
          },
          {
            label: 'in octant III',
            nudge: '<b>(A)</b>, <b>(B)</b> trap students who ignore the zero and force a sign pattern, but a zero coordinate disqualifies a point from any octant.',
          },
          { label: `on the ${ZX}`, nudge: null },
          {
            label: `on the ${z}-axis`,
            nudge: `<b>(D)</b> tempts those who think “two-ish coordinates look special”; the ${z}-axis requires ${x} = 0 <b>and</b> ${y} = 0, but here ${x} = −3 ≠ 0.`,
          },
        ],
        correct: 2,
        solution: `The ${y}-coordinate is 0, and ${y} = 0 is the ${ZX}, so the point lies on that plane and in <b>no octant</b>.`,
      },
      {
        t: 'mcq',
        q: `How many of the eight octants contain points with a negative ${z}-coordinate?`,
        opts: [
          { label: '2', nudge: `<b>(A)</b> confuses “negative ${z}” with one specific octant.` },
          { label: '4', nudge: null },
          {
            label: '6',
            nudge: `<b>(C)</b>, <b>(D)</b> come from vaguely thinking “lots of octants have some negative coordinate,” conflating the ${z}-sign with the overall sign mix.`,
          },
          {
            label: '8',
            nudge: `<b>(C)</b>, <b>(D)</b> come from vaguely thinking “lots of octants have some negative coordinate,” conflating the ${z}-sign with the overall sign mix.`,
          },
        ],
        correct: 1,
        solution: `Negative ${z} characterises octants <b>V, VI, VII, VIII</b>: exactly four.`,
      },
      {
        t: 'mcq',
        q: `The reflection of ${pt('P', '7', '−2', '−4')} in the ${x}-axis is`,
        opts: [
          { label: t3('−7', '−2', '−4'), nudge: `<b>(A)</b> flips ${x} only: that is reflection in the ${YZ}, not the ${x}-axis.` },
          { label: t3('7', '2', '4'), nudge: null },
          { label: t3('−7', '2', '4'), nudge: '<b>(C)</b> flips all three: that is reflection in the <b>origin</b>.' },
          { label: t3('7', '−2', '4'), nudge: `<b>(D)</b> flips one wrong coordinate (${z} only): reflection in the ${XY}, not an axis.` },
        ],
        correct: 1,
        solution: `Reflection in the ${x}-axis flips the two coordinates perpendicular to it (${y} and ${z}):<br>${t3('7', '−2', '−4')} → ${t3('7', '2', '4')}.`,
      },
      {
        t: 'mcq',
        q: `The distance of the point ${t3('2', '−6', '3')} from the ${YZ} is`,
        opts: [
          { label: '2', nudge: null },
          { label: '6', nudge: `<b>(B)</b> uses |${y}|: that is the distance from the ${ZX}.` },
          { label: '3', nudge: `<b>(C)</b> uses |${z}|: distance from the ${XY}.` },
          {
            label: '7',
            nudge: `<b>(D)</b> 7 = √(2<sup>2</sup> + 6<sup>2</sup> + 3<sup>2</sup>) is the distance from the origin, not from the ${YZ}.`,
          },
        ],
        correct: 0,
        solution: `Distance from the ${YZ} (${x} = 0) is |${x}| = |2| = 2.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Memorising octant names instead of signs.</b> Trying to recall “<i>OX</i>′<i>YZ</i> is the second octant” is fragile. Recall the <b>sign table</b> instead: the signs are the definition; the Roman numeral is just a label.',
          `<b>Confusing a coordinate with a distance.</b> The distance of ${P} from the ${YZ} is |${x}|, <b>not</b> ${x}. For ${t3('−5', '1', '2')} the distance is 5, not −5. Distances are never negative.`,
          '<b>Forcing a zero point into an octant.</b> If any coordinate is 0, the point is on a plane or axis and belongs to <b>no</b> octant. Examiners plant a stray zero precisely to catch this.',
          '<b>Reflection sign errors.</b> Plane → flip <b>one</b> sign (the perpendicular one). Axis → flip <b>two</b>. Origin → flip <b>three</b>. Count before you flip.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> Only two octants have an all-same sign pattern: octant <b>I</b> is all +, octant <b>VII</b> is all −. Anchor on those two, then read the rest off the ${z}-sign: ${z} > 0 ⇒ octants I–IV (behaving just like the 2D quadrants), ${z} < 0 ⇒ octants V–VIII (the same quadrant pattern, mirrored below the floor).`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Three axes, three planes, eight octants', note: 'Octant count = 2<sup>3</sup> = 8 (three independent sign choices).' },
          { f: 'Plane equations', note: `${XY}:${NB}${z}${NB}=${NB}0, ${YZ}:${NB}${x}${NB}=${NB}0, ${ZX}:${NB}${y}${NB}=${NB}0.` },
          { f: 'Axis equations', note: `${x}-axis:${NB}${y}${NB}=${NB}${z}${NB}=${NB}0; ${y}-axis:${NB}${x}${NB}=${NB}${z}${NB}=${NB}0; ${z}-axis:${NB}${x}${NB}=${NB}${y}${NB}=${NB}0.` },
          {
            f: 'Coordinates = signed perpendicular distances from planes',
            note: `${x} from ${I('YZ')}, ${y} from ${I('ZX')}, ${z} from ${I('XY')}. Distance from a plane = absolute value of that coordinate.`,
          },
          {
            f: 'Octant signs (NCERT)',
            // one line per octant, its three signs in a triple, so no sign has to be counted along a row
            note: [`Octant: ${t3(x, y, z)}`, ...OCTANTS.map((o, i) => `${o}: ${t3(SIGNS_X[i], SIGNS_Y[i], SIGNS_Z[i])}`)].join('<br>'),
          },
          { f: 'Reflections: flip count', note: 'plane → 1 sign, axis → 2 signs, origin → 3 signs.' },
        ],
        aids: [
          '“I am all positive; VII is all negative; the rest you read off the table.”',
          '“Top four (I–IV) above the floor, bottom four (V–VIII) below: same quadrant dance, one upstairs, one down.”',
        ],
      },
    ],
  },

  // ──────────────── Topic 02 · pp. 1020–1028 ────────────────
  {
    n: '02',
    title: 'Distance and Section Formulas in 3D',
    kalam: 'Distance is just Pythagoras, used twice.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is high-yield. <b>JEE Main</b> asks it almost every cycle: collinearity, the ratio of division, classifying a triangle or quadrilateral, or the point where a plane cuts a segment ${ESTIMATE}. <b>JEE Advanced</b> uses these as the entry move into locus problems. <b>CBSE Boards</b> reliably set a 2–4 mark section-formula or collinearity question ${ESTIMATE}, and miscellaneous-exercise proofs (“show ABCD is a parallelogram”) come straight from here.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'In Topic 01 we learned to name a point in space. Now we learn to measure with it: how far apart are two points, and where does a point sit that splits the segment between them in a given ratio?',
      },
      {
        t: 'p',
        html: `<b>Distance is just Pythagoras, used twice.</b> On flat paper you already know that the gap between two points is √((Δ${x})<sup>2</sup> + (Δ${y})<sup>2</sup>): the hypotenuse of a right triangle. Space adds a third, perpendicular direction, so you apply the same idea one extra time.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Picture a small drone hovering in a room. To reach it from the corner <i>O</i>, first walk across the <b>floor</b> to the spot directly beneath it; that horizontal hop is an ordinary 2D distance, √((Δ${x})<sup>2</sup> + (Δ${y})<sup>2</sup>). Then rise <b>straight up</b> by Δ${z}. The drone’s true straight-line distance is the hypotenuse of a right triangle whose legs are “floor distance” and “height”:<br>distance<sup>2</sup> = [(Δ${x})<sup>2</sup> + (Δ${y})<sup>2</sup>] (floor leg)<br>+ (Δ${z})<sup>2</sup> (height leg).<br><br>That single picture is the 3D distance formula. It is also why the longest rod that fits diagonally across a room is the space-diagonal of that box.`,
      },
      { t: 'fig', id: 'm11-11-fig-11.4' },
      {
        t: 'p',
        html: `<b>Section division is three 1D splits at once.</b> Imagine the Mumbai–Pune expressway. If a toll booth sits at the point that divides the route (taken as one straight stretch) in the ratio ${RATIO('2', '3')}, then every milestone-coordinate of that booth (its easting, its northing, its altitude) is the same ${RATIO('2', '3')} split of the endpoints’ corresponding coordinates. The deep reason: a coordinate is a <b>projection onto an axis</b>, and parallel projection preserves ratios. So a single 3D division quietly becomes three independent, identical 1D divisions: one per axis. That is the whole secret of the section formula.`,
      },
      {
        t: 'p',
        html: `<b>Internal vs external.</b> If the dividing point <i>R</i> lies between ${P} and <i>Q</i>, the division is <b>internal</b> (think: the booth is on the road). If <i>R</i> lies on the line <i>PQ</i> but outside the segment (beyond ${P} or beyond <i>Q</i>), the division is <b>external</b> (the “split point” is an extrapolation, like predicting where the road would reach a ratio if extended past the city). Internally the ratio parts add; externally they subtract, which is exactly the sign difference you will see in the two formulas.`,
      },
      {
        t: 'p',
        html: `<b>Edge cases & assumptions.</b><br>• The section formula assumes <i>R</i> is <b>collinear</b> with ${P} and <i>Q</i>: it gives the point on line <i>PQ</i>, nothing off it.<br>• <b>Midpoint</b> is simply the ${RATIO('1', '1')} internal case.<br>• <b>External division is undefined when ${m} = ${n}</b>: the denominator ${m} − ${n} vanishes, which matches the geometry: equal external parts push the point off to infinity (no point of the line has <i>PR</i> = <i>RQ</i> outside the segment).<br>• A negative ratio is just external division in disguise: dividing in ${MN} externally = dividing in ${RATIO(m, `(−${n})`)} internally. Watch the signs, not the words.<br>• Distance is always ≥ 0: there is no “negative distance,” even though coordinate differences can be negative (they get squared away).`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `Let ${P1} and ${Q2}. All quantities are dimensionless unless a physical length is specified.`,
      },
      {
        t: 'formula',
        kicker: 'Distance between two points',
        main: `<i>PQ</i> = ${DIST}`,
        legend: [
          '<i>PQ</i> = the distance from <i>P</i> to <i>Q</i>',
          `${x1}, ${y1}, ${z1} = the coordinates of ${P}`,
          `${x2}, ${y2}, ${z2} = the coordinates of <i>Q</i>`,
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Distance from the origin',
        main: `<i>OP</i> = √(${x1}<sup>2</sup> + ${y1}<sup>2</sup> + ${z1}<sup>2</sup>)`,
        legend: ['<i>OP</i> = the distance of <i>P</i> from the origin', `${x1}, ${y1}, ${z1} = the coordinates of ${P}`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Section formula: internal division',
        main: `<i>R</i> = (${SIX}, ${SIY}, ${SIZ})`,
        legend: [
          '<i>R</i> = the point dividing <i>PQ</i> internally',
          `${m}, ${n} = the parts of the ratio <i>PR</i>${NB}∶${NB}<i>RQ</i>`,
          `${x1}, ${y1}, ${z1} = the coordinates of ${P}`,
          `${x2}, ${y2}, ${z2} = the coordinates of <i>Q</i>`,
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Section formula: external division',
        main: `<i>R</i> = (${SEX}, ${SEY}, ${SEZ})<br>${m}${NB}≠${NB}${n}`,
        legend: [
          '<i>R</i> = the point dividing <i>PQ</i> externally',
          `${m}, ${n} = the parts of the ratio <i>PR</i>${NB}∶${NB}<i>RQ</i>`,
          `${x1}, ${y1}, ${z1} = the coordinates of ${P}`,
          `${x2}, ${y2}, ${z2} = the coordinates of <i>Q</i>`,
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: `Midpoint (the ${RATIO('1', '1')} case)`,
        main: `<i>M</i> = (${fr(`${x1} + ${x2}`, '2')}, ${fr(`${y1} + ${y2}`, '2')}, ${fr(`${z1} + ${z2}`, '2')})`,
        legend: [
          '<i>M</i> = the midpoint of <i>PQ</i>',
          `${x1}, ${y1}, ${z1} = the coordinates of ${P}`,
          `${x2}, ${y2}, ${z2} = the coordinates of <i>Q</i>`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>The ${K1} form</b>: the workhorse for “find the ratio” problems. Setting ${MN} = ${K1}, a general point on line <i>PQ</i> is`,
      },
      {
        t: 'formula',
        kicker: `The ${K1} form`,
        main: `<i>R</i> = (${KX}, ${KY}, ${KZ})${NB}${NB}(${k}${NB}≠${NB}−1)<br>${k} > 0 ⇒ internal<br>${k} < 0 ⇒ external`,
        legend: [
          '<i>R</i> = a point of the line <i>PQ</i> (every point except <i>Q</i>)',
          `${k} = the ratio <i>PR</i>${NB}∶${NB}<i>RQ</i> as a single number`,
          `${x1}, ${y1}, ${z1} = the coordinates of ${P}`,
          `${x2}, ${y2}, ${z2} = the coordinates of <i>Q</i>`,
        ],
        note: null,
      },
      { t: 'p', html: `<b>Centroid of a triangle</b> with vertices ${A1}, ${B2}, ${C3}:<br>${CENTROID}.` },
      {
        t: 'p',
        html: '<b>[Beyond CBSE · JEE extension] Centroid of a tetrahedron</b> with four vertices: the same idea with a denominator of 4: average all four position triples.',
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: `<b>Derivation 1: The distance formula (rectangular parallelepiped method).</b><br><b>Setup.</b> Take ${P1} and ${Q2}. Through each point draw three planes parallel to the coordinate planes. These six planes box in a <b>rectangular parallelepiped</b> with <i>PQ</i> as its space diagonal and all edges parallel to the axes.`,
      },
      {
        t: 'p',
        html: `<b>Step 1: split off the height.</b> Let <i>A</i> be the vertex of the box at the same height as ${P} but directly below <i>Q</i> in the vertical sense, so that edge <i>AQ</i> runs purely along the ${z}-direction and the triangle <i>PAQ</i> is right-angled at <i>A</i>. Then<br>${sq('<i>PQ</i>')} = ${sq('<i>PA</i>')} + ${sq('<i>AQ</i>')}.${NB}${NB}${NB}(1)<br>The physical reasoning: <i>AQ</i> is vertical and <i>PA</i> lies in a horizontal plane, so they are perpendicular; Pythagoras applies.`,
      },
      {
        t: 'p',
        html: `<b>Step 2: resolve the horizontal leg.</b> The segment <i>PA</i> lies in a horizontal plane and is itself the hypotenuse of a right triangle <i>PNA</i> with legs along the ${x}- and ${y}-directions:<br>${sq('<i>PA</i>')} = ${sq('<i>PN</i>')} + ${sq('<i>NA</i>')}.${NB}${NB}${NB}(2)`,
      },
      {
        t: 'p',
        html: `<b>Step 3: read off the edge lengths.</b> Because every edge is parallel to an axis, each edge length is just the gap in that coordinate:<br><i>PN</i> = |${x2} − ${x1}|,<br><i>NA</i> = |${y2} − ${y1}|,<br><i>AQ</i> = |${z2} − ${z1}|.`,
      },
      {
        t: 'p',
        html: `<b>Step 4: combine.</b> Substituting (2) into (1):<br>${sq('<i>PQ</i>')} = (${x2} − ${x1})<sup>2</sup> + (${y2} − ${y1})<sup>2</sup><br>+ (${z2} − ${z1})<sup>2</sup>,<br><i>PQ</i> = ${DIST}.<br><br>The squares erase the absolute-value signs, which is why direction never matters for distance.`,
      },
      {
        t: 'p',
        html: `<b>Derivation 2: The section formula (internal division).</b><br><b>Setup.</b> Let ${pt('R', x, y, z)} divide <i>PQ</i> internally so that <i>PR</i>${NB}∶${NB}<i>RQ</i> = ${MN}.`,
      },
      {
        t: 'p',
        html: `<b>Key idea: projection preserves ratio.</b> Drop perpendiculars from ${P}, <i>R</i>, <i>Q</i> onto the ${XY} (recall from Topic 01 that this plane is ${z} = 0), meeting it at <i>L</i>, <i>N</i>, <i>M</i>. These three perpendiculars are parallel (all perpendicular to the same plane). A fundamental fact of parallel projection: <b>if <i>R</i> divides <i>PQ</i> in the ratio ${MN}, then its projection <i>N</i> divides <i>LM</i> in the same ratio ${MN}.</b> Tracking heights (the ${z}-coordinates) through this projection gives, by similar triangles,<br>${fr('<i>PR</i>', '<i>RQ</i>')} = ${fr(`${z} − ${z1}`, `${z2} − ${z}`)} = ${fr(m, n)}.`,
      },
      {
        t: 'p',
        html: `<b>Step: solve for ${z}.</b> Cross-multiplying:<br>${n}(${z} − ${z1}) = ${m}(${z2} − ${z})<br>⇒ ${z}(${m} + ${n}) = <i>mz</i><sub>2</sub> + <i>nz</i><sub>1</sub>,<br>hence<br>${z} = ${SIZ}.`,
      },
      {
        t: 'p',
        html: `<b>Symmetry.</b> The identical construction, projecting instead onto the ${I('YZ')}- and ${ZX}s, yields<br>${x} = ${SIX}, ${y} = ${SIY}.<br><br>For <b>external</b> division, <i>R</i> lies outside the segment, so <i>RQ</i> is measured in the opposite sense: replace ${n} by −${n} throughout, producing the ${m} − ${n} denominator.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Show that the points ${pt('A', '0', '7', '10')}, ${pt('B', '−1', '6', '6')}, and ${pt('C', '−4', '9', '6')} are the vertices of a right-angled isosceles triangle.`,
        steps: [
          `Compute the three side-lengths via the distance formula.<br>${sq('<i>AB</i>')} = (−1 − 0)<sup>2</sup> + (6 − 7)<sup>2</sup> + (6 − 10)<sup>2</sup><br>= 1 + 1 + 16 = 18,<br>${sq('<i>BC</i>')} = (−4 + 1)<sup>2</sup> + (9 − 6)<sup>2</sup> + (6 − 6)<sup>2</sup><br>= 9 + 9 + 0 = 18,<br>${sq('<i>CA</i>')} = (0 + 4)<sup>2</sup> + (7 − 9)<sup>2</sup> + (10 − 6)<sup>2</sup><br>= 16 + 4 + 16 = 36.`,
          `Since ${sq('<i>AB</i>')} = ${sq('<i>BC</i>')}, two sides are equal ⇒ <b>isosceles</b>. Since ${sq('<i>AB</i>')} + ${sq('<i>BC</i>')} = 18 + 18 = 36 = ${sq('<i>CA</i>')}, the converse of Pythagoras gives a <b>right angle at <i>B</i></b>. Hence △<i>ABC</i> is right-angled and isosceles. ■`,
          `<b>Presentation note:</b> work with ${sq('<i>AB</i>')} throughout and take roots only if asked: it keeps arithmetic clean and the Pythagoras check exact.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: `In what ratio does the ${XY} divide the segment joining ${pt('P', '2', '−3', '5')} and ${pt('Q', '4', '6', '−10')}?`,
        steps: [
          `<b>Solution (the fast way).</b> The ${XY} is ${z} = 0 (from Topic 01). Use the ${K1} form and force only the ${z}-coordinate to zero; ignore ${x} and ${y} entirely:<br>${fr(`${k}(−10) + 5`, `${k} + 1`)} = 0<br>⇒ −10${k} + 5 = 0 ⇒ ${k} = ${HALF}.`,
          `So the ratio is ${K1} = ${RATIO(HALF, '1')} = <b>${RATIO('1', '2')}</b>, and since ${k} > 0 it is <b>internal</b>.`,
          `<b>The trap:</b> students set up all three coordinates and hunt for a point, or they get ${k} = ${HALF} and forget that the sign of ${k} already told them internal vs external. For a plane ${z} = 0, only the ${z}-coordinate equation matters: one line of algebra.`,
        ],
        ans: `${RATIO('1', '2')} internally`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the point on the ${y}-axis that is equidistant from ${pt('A', '3', '1', '2')} and ${pt('B', '−1', '5', '−4')}.`,
        steps: [
          `From Topic 01, any point on the ${y}-axis has the form ${pt('R', '0', y, '0')}: this single fact collapses three unknowns to one. Impose <i>RA</i> = <i>RB</i>, i.e. ${sq('<i>RA</i>')} = ${sq('<i>RB</i>')}:<br>${sq('<i>RA</i>')} = 9 + (${y} − 1)<sup>2</sup> + 4<br>= 1 + (${y} − 5)<sup>2</sup> + 16 = ${sq('<i>RB</i>')}.`,
          `Expand:<br>13 + ${sq(y)} − 2${y} + 1 = 17 + ${sq(y)} − 10${y} + 25,<br>so ${sq(y)} − 2${y} + 14 = ${sq(y)} − 10${y} + 42. The ${sq(y)} terms cancel:<br>−2${y} + 14 = −10${y} + 42<br>⇒ 8${y} = 28 ⇒ ${y} = ${fr('7', '2')}.`,
          `The required point is ${t3('0', fr('7', '2'), '0')}.`,
          `<b>This links two ideas</b>, the Topic 01 “point on an axis” form and the distance formula, and the cancellation of ${sq(y)} is the structural hint that an “equidistant from two points” condition is always linear, not quadratic.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        fig: 'm11-11-fig-11.5',
        q: `Find the equation of the set of all points equidistant from ${pt('A', '1', '2', '3')} and ${pt('B', '3', '2', '−1')}, and describe the surface.`,
        steps: [
          `Let ${pt('P', x, y, z)} be a general point with <i>PA</i> = <i>PB</i>, hence ${sq('<i>PA</i>')} = ${sq('<i>PB</i>')}:<br>(${x} − 1)<sup>2</sup> + (${y} − 2)<sup>2</sup> + (${z} − 3)<sup>2</sup><br>= (${x} − 3)<sup>2</sup> + (${y} − 2)<sup>2</sup> + (${z} + 1)<sup>2</sup>.`,
          `The (${y} − 2)<sup>2</sup> terms cancel. Expand the rest:<br>${sq(x)} − 2${x} + 1 + ${sq(z)} − 6${z} + 9<br>= ${sq(x)} − 6${x} + 9 + ${sq(z)} + 2${z} + 1.`,
          `All squared terms cancel, exactly as foreshadowed in the third worked example of this topic, leaving a <b>linear</b> equation:<br>−2${x} − 6${z} + 10 = −6${x} + 2${z} + 10<br>⇒ 4${x} − 8${z} = 0 ⇒ ${x} − 2${z} = 0.`,
          `The locus is a <b>plane</b>: the perpendicular bisector plane of segment <i>AB</i>. This is the spatial cousin of Topic 01’s “equidistant from two coordinate planes” result: there the equidistance gave a pair of planes; here equidistance between two points gives a single plane that slices space exactly halfway between them, perpendicular to <i>AB</i>.`,
          '<b>The rigor lesson:</b> recognise before expanding that an “equidistant from two fixed points” condition kills every quadratic term and must collapse to a plane. Spotting this saves a full page of algebra under exam pressure.',
        ],
        ans: `${x} − 2${z} = 0`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the distance between ${t3('2', '3', '5')} and ${t3('4', '3', '1')}, and verify whether ${t3('1', '0', '0')}, ${t3('0', '1', '0')}, ${t3('0', '0', '1')} form an equilateral triangle.`,
            a: 'Distance = √20 = 2√5; yes, all three sides = √2, so equilateral.',
          },
          {
            q: `<b>[CBSE]</b> Find the coordinates of the point dividing the segment joining ${t3('−2', '3', '5')} and ${t3('1', '−4', '6')} in the ratio ${RATIO('2', '3')} (i) internally, (ii) externally.`,
            a: `(i) (−${fr('4', '5')}, ${fr('1', '5')}, ${fr('27', '5')}), (ii) ${t3('−8', '17', '3')}.`,
          },
          {
            q: `<b>[JEE Main]</b> Find the ratio in which the ${YZ} divides the segment joining ${t3('−2', '4', '7')} and ${t3('3', '−5', '8')}.`,
            a: `${RATIO('2', '3')} internally.`,
          },
          {
            q: `<b>[JEE Main]</b> Show that ${pt('A', '2', '−3', '4')}, ${pt('B', '−1', '2', '1')}, ${pt('C', '0', fr('1', '3'), '2')} are collinear, and find the ratio in which <i>B</i> divides <i>AC</i>.`,
            a: `<i>B</i> divides <i>AC</i> externally in the ratio ${RATIO('3', '1')} (so <i>A</i>, <i>B</i>, <i>C</i> are collinear).`,
          },
          {
            q: `<b>[JEE Advanced]</b> Find the equation of the set of points ${P} such that ${sq('<i>PA</i>')} + ${sq('<i>PB</i>')} = 2${k}<sup>2</sup>, where ${pt('A', '3', '4', '5')} and ${pt('B', '−1', '3', '−7')}, and identify the type of surface.`,
            a: `A sphere:<br>${sq(x)} + ${sq(y)} + ${sq(z)} − 2${x} − 7${y} + 2${z}<br>+ ${fr('109', '2')} − ${k}<sup>2</sup> = 0,<br>with centre (1, ${fr('7', '2')}, −1) and radius<sup>2</sup> = ${k}<sup>2</sup> − ${fr('161', '4')} (real when ${k}<sup>2</sup> > ${fr('161', '4')}).`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The distance of the point ${t3('1', '−2', '2')} from the origin is`,
        opts: [
          { label: '3', nudge: null },
          { label: '√5', nudge: '<b>(B)</b> drops one term, e.g. computes √(1 + 4).' },
          { label: '9', nudge: '<b>(C)</b> forgets the square root.' },
          { label: '√3', nudge: '<b>(D)</b> squares 1 and 2 but adds the −2 unsquared: √(1<sup>2</sup> + (−2) + 2<sup>2</sup>) = √3.' },
        ],
        correct: 0,
        solution: '√(1<sup>2</sup> + (−2)<sup>2</sup> + 2<sup>2</sup>) = √(1 + 4 + 4) = √9 = 3.',
      },
      {
        t: 'mcq',
        q: `The midpoint of the segment joining ${t3('4', '−1', '7')} and ${t3('−2', '5', '3')} is`,
        opts: [
          { label: t3('1', '2', '5'), nudge: null },
          { label: t3('3', '3', '2'), nudge: `<b>(B)</b> halves the gaps instead of the sums: (${fr('4 + 2', '2')}, ${fr('5 + 1', '2')}, ${fr('7 − 3', '2')}) = ${t3('3', '3', '2')}.` },
          { label: t3('6', '−6', '4'), nudge: '<b>(C)</b> computes the difference of coordinates, not the average.' },
          { label: t3('2', '4', '10'), nudge: '<b>(D)</b> computes the sum without halving.' },
        ],
        correct: 0,
        solution: `Averages: (${fr('4 − 2', '2')}, ${fr('−1 + 5', '2')}, ${fr('7 + 3', '2')}) = ${t3('1', '2', '5')}.`,
      },
      {
        t: 'mcq',
        q: `The ${XY} divides the segment joining ${t3('1', '2', '−3')} and ${t3('3', '4', '5')} in the ratio`,
        opts: [
          { label: `${RATIO('3', '5')} internally`, nudge: null },
          { label: `${RATIO('5', '3')} internally`, nudge: `<b>(B)</b> swaps the ratio order (used ${fr('5', '3')}, i.e. reversed which point is “1”).` },
          { label: `${RATIO('3', '5')} externally`, nudge: `<b>(C)</b> misreads positive ${k} as external.` },
          {
            label: RATIO('1', '1'),
            nudge: `<b>(D)</b> assumes the plane bisects: true only if the endpoints’ ${z}-values were equal and opposite, which they are not (−3 vs 5).`,
          },
        ],
        correct: 0,
        solution: `${XY} is ${z} = 0:<br>${fr(`${k}(5) + (−3)`, `${k} + 1`)} = 0 ⇒ ${k} = ${fr('3', '5')}.<br>Positive ⇒ internal, ratio ${RATIO('3', '5')}.`,
      },
      {
        t: 'mcq',
        q: `If ${t3('2', '4', '−1')}, ${t3('3', '6', '−1')}, and ${t3('4', '8', '−1')} are three points, then they are`,
        opts: [
          { label: 'collinear', nudge: null },
          {
            label: 'vertices of a right triangle',
            nudge: '<b>(B)</b>, <b>(C)</b> tempt students who jump to “three points ⇒ triangle” without checking collinearity first.',
          },
          {
            label: 'vertices of an equilateral triangle',
            nudge: '<b>(B)</b>, <b>(C)</b> tempt students who jump to “three points ⇒ triangle” without checking collinearity first.',
          },
          { label: 'coincident', nudge: '<b>(D)</b> confuses “collinear” with “identical.”' },
        ],
        correct: 0,
        solution: `The middle point is the midpoint of the outer two:<br>(${fr('2 + 4', '2')}, ${fr('4 + 8', '2')}, ${fr('−1 − 1', '2')}) = ${t3('3', '6', '−1')},<br>so all three lie on one line (in fact the middle one divides the other two in ${RATIO('1', '1')}).`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Internal/external sign flip.</b> Internal uses ${m} + ${n} in the denominator and a + in the numerator; external uses ${m} − ${n} and a −. Mixing them is the single most common error: write “INT ⇒ add, EXT ⇒ subtract” in the margin before substituting.`,
          `<b>Ratio order swap.</b> ${MN} means <i>PR</i>${NB}∶${NB}<i>RQ</i>, so ${m} pairs with the second point <i>Q</i> in the numerator (<i>mx</i><sub>2</sub> + <i>nx</i><sub>1</sub>). Reversing which point is ${P} and which is <i>Q</i> silently inverts your ratio: the classic ${RATIO('3', '5')} vs ${RATIO('5', '3')} trap.`,
          '<b>Forgetting to square (or to root).</b> Coordinate differences must be <b>squared</b> inside the formula and the whole sum <b>rooted</b> at the end. Skipping either is an instant wrong answer.',
          '<b>Assuming a triangle without checking collinearity.</b> Three given points may be collinear: always test (midpoint, or section ratio, or <i>AB</i> + <i>BC</i> = <i>AC</i>) before claiming a triangle.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> For every “find the ratio” or “where does a plane cut the segment” question, jump straight to the <b>${K1} form</b>. It uses one unknown instead of two, and the <b>sign of ${k} hands you internal (${k} > 0) vs external (${k} < 0) for free</b>: no separate case analysis. (If you later study vectors, the same section formula reads ${vec('r')} = ${fr(`${m}${vec('r')}<sub>2</sub> + ${n}${vec('r')}<sub>1</sub>`, `${m} + ${n}`)}: identical structure, position vectors instead of coordinates.)`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Distance', note: `<i>PQ</i> = ${DIST}; from origin = √(${sq(x)} + ${sq(y)} + ${sq(z)}).` },
          { f: `Section (internal, ${MN})`, note: `(${SIX}, ${SIY}, ${SIZ}).` },
          { f: `Section (external, ${MN})`, note: `same with ${m} − ${n} denominators and − in numerators.` },
          { f: 'Midpoint', note: `averages of the coordinates (${RATIO('1', '1')} case).` },
          {
            f: `${K1} form`,
            note: `(${KX}, …); ${k} > 0 internal, ${k} < 0 external. <b>Use it for all “ratio” problems.</b>`,
          },
          { f: 'Centroid (triangle)', note: 'average of 3 vertices; <b>(tetrahedron, beyond-CBSE):</b> average of 4.' },
          {
            f: 'Plane cuts segment',
            note: `set the matching coordinate to 0 (${XY}: ${z} = 0, ${YZ}: ${x} = 0, ${ZX}: ${y} = 0) and solve for ${k}.`,
          },
        ],
        aids: [
          '“Internal adds, external subtracts.”',
          `“${m} goes with the far point (${x2}).”`,
          '“Equidistant from two points ⇒ a flat plane (the perpendicular bisector).”',
        ],
      },
    ],
  },

  // ──────────────── Topic 03 · pp. 1029–1036 ────────────────
  {
    n: '03',
    title: 'Applications: Centroid, Collinearity & Locus',
    kalam: 'Everything in this topic is an application of just two results you already own: the distance formula and the section formula.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is where the two tools of Topic 02 start earning marks. <b>CBSE Boards</b> regularly set centroid, collinearity, and “type of quadrilateral” questions (2–4 marks) and a “find the equation of the set of points” locus problem ${ESTIMATE}. <b>JEE Main</b> asks collinearity and ratio problems almost every cycle ${ESTIMATE}. <b>JEE Advanced</b> uses locus derivations as the opening move of harder questions, and rewards knowing the incentre and tetrahedron-centroid formulas (formula block only).`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Everything in this topic is an <b>application</b> of just two results you already own: the distance formula and the section formula. No new machinery: only new questions.',
      },
      {
        t: 'p',
        html: `<b>Centroid: the balance point.</b> Cut a triangle out of stiff card and try to balance it on a fingertip. The single point where it balances is the <b>centroid</b> <i>G</i>. Geometrically it is where the three medians meet, and each median is split by <i>G</i> in the ratio ${RATIO('2', '1')} (measured from the vertex). In coordinates this collapses to something delightfully simple: <i>G</i> is just the <b>average</b> of the three vertices. The reason it is an average (and not something messier) is the same independence idea from Topic 02: each coordinate behaves on its own, so balancing in 3D is three separate 1D balancing acts.`,
      },
      {
        t: 'p',
        html: `<b>Collinearity: when the triangle collapses.</b> Three points are <b>collinear</b> when they lie on one straight line, i.e. they fail to make a triangle. There are two honest ways to detect this:<br>• <b>Distance lens:</b> if <i>B</i> lies between <i>A</i> and <i>C</i>, then the long hop equals the two short hops: <i>AB</i> + <i>BC</i> = <i>AC</i>.<br>• <b>Section lens:</b> if the points are collinear, then <i>B</i> must <b>divide</b> <i>AC</i> in some real ratio ${K1}, and crucially, the same ${k} must work for the ${x}, ${y}, <b>and</b> ${z} coordinates simultaneously.`,
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture three milestones along the Mumbai–Pune expressway. If they are truly on the road (a straight stretch of it), then the middle one splits the distance between the outer two in a fixed proportion that is consistent whether you measure easting, northing, or altitude. If even one of those three proportions disagrees, the “middle” milestone is off the road: no straight line through all three.',
      },
      {
        t: 'p',
        html: '<b>Locus: sculpting space with a rule.</b> A <b>locus</b> is the set of all points obeying a stated condition; in 3D, distance conditions carve out surfaces. Two carry the chapter:<br>• “Equidistant from two fixed points” ⇒ a flat <b>plane</b> (the perpendicular bisector: you proved a case of this in Topic 02).<br>• “At fixed distance from one fixed point” ⇒ a <b>sphere</b>, like every spot a tethered goat can graze.<br><br>A richer condition, “the sum of distances from two fixed points is constant,” bends space into an <b>ellipsoid</b>, the 3D cousin of the ellipse.',
      },
      {
        t: 'p',
        html: `<b>Edge cases & assumptions.</b><br>• The centroid of a triangle always exists and is unique; it has nothing to do with side lengths (unlike the incentre, which weights by them).<br>• Collinearity makes the triangle’s “area” zero: a useful sanity flag.<br>• A sphere ${sq(x)} + ${sq(y)} + ${sq(z)} + ⋯ = 0 is a <b>real</b> sphere only if its computed radius-squared is positive; a negative value means the locus is the <b>empty set</b>, and exactly zero means a single point.<br>• The sum-of-distances ellipsoid is real only if the constant sum exceeds the distance between the two fixed points (you cannot beat the straight line).`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `For ${A1}, ${B2}, ${C3}. All quantities dimensionless unless a physical length is given.`,
      },
      {
        t: 'formula',
        kicker: 'Centroid of a triangle',
        main: `${CENTROID}<br><i>AG</i>${NB}∶${NB}<i>GD</i> = ${RATIO('2', '1')}`,
        legend: [
          '<i>G</i> = the centroid',
          `<i>D</i> = the midpoint of <i>BC</i> (the same ${RATIO('2', '1')} holds on every median)`,
          `${x1}, ${y1}, ${z1} = the coordinates of <i>A</i>`,
          `${x2}, ${y2}, ${z2} = the coordinates of <i>B</i>`,
          `${x3}, ${y3}, ${z3} = the coordinates of <i>C</i>`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Collinearity criteria</b> (any one suffices):<br>1. <i>AB</i> + <i>BC</i> = <i>AC</i> (distance test, with <i>B</i> between <i>A</i> and <i>C</i>);<br>2. <i>B</i> divides <i>AC</i> in a ratio ${K1} with the <b>same</b> ${k} satisfying all three coordinates.`,
      },
      {
        t: 'p',
        html: '<b>Locus: standard surfaces:</b><br>• Equidistant from <i>A</i> and <i>B</i>: <i>PA</i> = <i>PB</i> ⇒ the <b>perpendicular bisector plane</b> of <i>AB</i> (a linear equation).',
      },
      {
        t: 'formula',
        kicker: 'Equation of a sphere',
        main: `${SPHERE}`,
        legend: [
          `${t3(a, b, c)} = the centre`,
          `${r} = the radius (${r}${NB}>${NB}0; ${r} = 0 is the centre alone)`,
          `${x}, ${y}, ${z} = the coordinates of a point on the sphere`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• Sum of distances from two fixed points = 2${a} (with foci 2${c} apart, ${b}<sup>2</sup> = ${a}<sup>2</sup> − ${c}<sup>2</sup>): an <b>ellipsoid of revolution</b>.`,
      },
      {
        t: 'p',
        html: `<b>[Beyond CBSE · JEE extension] Incentre of a triangle</b> (weighted by opposite side lengths):<br><i>I</i> = (${fr(`<i>ax</i><sub>1</sub> + <i>bx</i><sub>2</sub> + <i>cx</i><sub>3</sub>`, `${a} + ${b} + ${c}`)}, …, …), with ${a} = |<i>BC</i>|, ${b} = |<i>CA</i>|, ${c} = |<i>AB</i>|.`,
      },
      {
        t: 'p',
        html: '<b>[Beyond CBSE · JEE extension] Centroid of a tetrahedron</b> with vertices <i>A</i>, <i>B</i>, <i>C</i>, <i>D</i>: the average of all four, denominator 4.',
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      {
        t: 'p',
        html: `<b>Derivation: the centroid formula (via the section formula).</b><br><b>Setup.</b> Let the triangle be ${A1}, ${B2}, ${C3}. Take the median from <i>A</i> to the midpoint <i>D</i> of <i>BC</i>.`,
      },
      {
        t: 'p',
        html: `<b>Step 1: midpoint of <i>BC</i>.</b> By the midpoint formula (Topic 02),<br><i>D</i> = (${fr(`${x2} + ${x3}`, '2')}, ${fr(`${y2} + ${y3}`, '2')}, ${fr(`${z2} + ${z3}`, '2')}).`,
      },
      {
        t: 'p',
        html: `<b>Step 2: use the known median ratio.</b> A standard property of any triangle is that the centroid divides each median in the ratio ${RATIO('2', '1')} from the vertex; so take <i>G</i> as the point of <i>AD</i> with <i>AG</i>${NB}∶${NB}<i>GD</i> = ${RATIO('2', '1')} (the last line below shows this point lies on all three medians).`,
      },
      {
        t: 'p',
        html: `<b>Step 3: apply the section formula</b> (internal, ratio ${RATIO('2', '1')}, with <i>A</i> as the “first” point and <i>D</i> as the “second”):<br><i>x</i><sub>G</sub> = ${fr(`2<i>x</i><sub>D</sub> + 1${NB}·${NB}${x1}`, '2 + 1')}, where 2<i>x</i><sub>D</sub> = ${x2} + ${x3} (<i>x</i><sub>D</sub> = the ${x}-coordinate of <i>D</i>), so<br><i>x</i><sub>G</sub> = ${fr(`(${x2} + ${x3}) + ${x1}`, '3')} = ${GX}.`,
      },
      {
        t: 'p',
        html: `By identical work on the other coordinates,<br>${CENTROID}. ■<br><br>Notice the medians from <i>B</i> and <i>C</i>, worked the same way, give the same average (it is symmetric in <i>A</i>, <i>B</i>, <i>C</i>): the point dividing each median ${RATIO('2', '1')} from its vertex is one and the same point, which proves that the three medians are concurrent.`,
      },
      { t: 'p', html: '<b>Procedure: testing collinearity (two methods).</b>' },
      {
        t: 'proc',
        title: 'Method A: distance',
        steps: [
          'Compute the three pairwise distances <i>AB</i>, <i>BC</i>, <i>CA</i>.',
          'The points are collinear <b>iff</b> the largest equals the sum of the other two. (If <i>AB</i> + <i>BC</i> = <i>AC</i>, then <i>B</i> lies between <i>A</i> and <i>C</i>.)',
        ],
      },
      {
        t: 'proc',
        title: 'Method B: section-ratio consistency (faster, and what JEE rewards)',
        steps: [
          `Suppose <i>B</i> divides <i>AC</i> in the ratio ${K1}. From the ${x}-coordinate alone, solve ${fr(`<i>kx</i><sub>3</sub> + ${x1}`, `${k} + 1`)} = ${x2} for ${k}.`,
          `<b>Verify</b> that this same ${k} reproduces ${y2} and ${z2}.`,
          'If all three agree, the points are collinear (and you have the dividing ratio for free); if any disagrees, they are not.',
        ],
      },
      {
        t: 'p',
        html: `<b>Why the verification step is non-negotiable:</b> a single coordinate can match by coincidence. Collinearity is a statement about all three coordinates locking to one ratio: checking only ${x} is the classic false positive.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `(a) Find the centroid of the triangle with vertices ${pt('A', '2', '−1', '4')}, ${pt('B', '6', '3', '−2')}, ${pt('C', '1', '4', '5')}. (b) If two vertices of a triangle are ${t3('2', '−1', '4')} and ${t3('6', '3', '−2')} and its centroid is ${t3('3', '2', fr('7', '3'))}, find the third vertex.`,
        steps: [
          `(a) Average the coordinates:<br><i>G</i> = (${fr('2 + 6 + 1', '3')}, ${fr('−1 + 3 + 4', '3')}, ${fr('4 − 2 + 5', '3')})<br>= ${t3('3', '2', fr('7', '3'))}.`,
          `(b) Let the third vertex be ${pt('C', x, y, z)}. Since <i>G</i> is the average, multiply through by 3:<br>${x} = 3(3) − 2 − 6 = 1,<br>${y} = 3(2) − (−1) − 3 = 4,<br>${z} = 3(${fr('7', '3')}) − 4 − (−2) = 5.`,
          `The third vertex is ${t3('1', '4', '5')}, consistent with part (a), as expected.`,
          '<b>Presentation note:</b> the reverse problem is just “sum = 3× centroid”; the only common slip is forgetting the factor of 3.',
        ],
        ans: t3('1', '4', '5'),
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: `Are the points ${pt('A', '2', '1', '−1')}, ${pt('B', '4', '4', '3')}, ${pt('C', '8', '10', '11')} collinear?`,
        steps: [
          `<b>Solution (the fast way).</b> Use Method B. Let <i>B</i> divide <i>AC</i> in ${K1} and solve from the ${x}-coordinate only:<br>${fr(`8${k} + 2`, `${k} + 1`)} = 4 ⇒ 8${k} + 2 = 4${k} + 4<br>⇒ ${k} = ${HALF}.`,
          `Now the <b>mandatory check</b> with ${k} = ${HALF} (multiply the top and bottom of the ${K1} form by 2):<br>${y}: ${fr(`10 + 2${NB}·${NB}1`, '1 + 2')} = ${fr('12', '3')} = 4 = <i>y</i><sub>B</sub> ✓,<br><br>${z}: ${fr(`11 + 2${NB}·${NB}(−1)`, '1 + 2')} = ${fr('9', '3')} = 3 = <i>z</i><sub>B</sub> ✓.`,
          `All three agree, so the points are <b>collinear</b>, with <i>B</i> dividing <i>AC</i> in ${RATIO('1', '2')}.`,
          `<b>The trap:</b> a rushed student stops after the ${x}-coordinate gives a clean ${k}, or “eyeballs” two distances and declares collinear. If the ${y}- or ${z}-check had failed, the answer flips entirely. One coordinate is never proof.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Show that ${pt('A', '1', '0', '2')}, ${pt('B', '4', '2', '3')}, ${pt('C', '5', '7', '2')}, ${pt('D', '2', '5', '1')} are the vertices of a parallelogram <i>ABCD</i>, and determine whether it is a rectangle.`,
        steps: [
          `A quadrilateral <i>ABCD</i> is a parallelogram if both pairs of opposite sides are equal and parallel: cleanest to compare side vectors.<br>${vec('AB')} = ${t3('3', '2', '1')}, ${vec('DC')} = <i>C</i> − <i>D</i> = ${t3('3', '2', '1')}<br>⇒ ${vec('AB')} = ${vec('DC')},<br>${vec('AD')} = ${t3('1', '5', '−1')}, ${vec('BC')} = <i>C</i> − <i>B</i> = ${t3('1', '5', '−1')}<br>⇒ ${vec('AD')} = ${vec('BC')}.`,
          'Opposite sides are equal and parallel, so <i>ABCD</i> is a <b>parallelogram</b>.',
          `<b>Rectangle?</b> A parallelogram is a rectangle iff its diagonals are equal:<br>|<i>AC</i>|<sup>2</sup> = 4<sup>2</sup> + 7<sup>2</sup> + 0<sup>2</sup> = 65,<br>|<i>BD</i>|<sup>2</sup> = (−2)<sup>2</sup> + 3<sup>2</sup> + (−2)<sup>2</sup> = 17.`,
          `Since 65 ≠ 17, the diagonals are unequal, so it is <b>not</b> a rectangle. (Equivalently, ${vec('AB')} · ${vec('AD')} = 3 + 10 − 1 = 12 ≠ 0, so adjacent sides are not perpendicular.)`,
          '<b>This links two ideas:</b> equal-and-parallel sides for the parallelogram, then the diagonal/perpendicularity test for the rectangle.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        fig: 'm11-11-fig-11.6',
        q: `Find the equation of the locus of a point ${P} the sum of whose distances from ${pt('A', '5', '0', '0')} and ${pt('B', '−5', '0', '0')} is 12. Identify the surface.`,
        steps: [
          `Let ${pt('P', x, y, z)} with <i>PA</i> + <i>PB</i> = 12:<br>${ROOT_M5}<br>+ ${ROOT_P5} = 12.`,
          `Isolate one radical and square:<br>${ROOT_M5}<br>= 12 − ${ROOT_P5}.`,
          `Squaring both sides and cancelling the common ${sq(x)} + ${sq(y)} + ${sq(z)} + 25 terms:<br>−10${x} = 144 − 24${ROOT_P5} + 10${x}<br>⇒ 24${ROOT_P5} = 144 + 20${x}.`,
          `Divide by 4 and square again:<br>36[(${x} + 5)<sup>2</sup> + ${sq(y)} + ${sq(z)}] = (36 + 5${x})<sup>2</sup>.`,
          `Expanding and simplifying (the ${x}-linear terms cancel):<br>36${sq(x)} + 360${x} + 900 + 36${sq(y)} + 36${sq(z)}<br>= 1296 + 360${x} + 25${sq(x)},<br>11${sq(x)} + 36${sq(y)} + 36${sq(z)} = 396<br>⇒ ${fr(sq(x), '36')} + ${fr(sq(y), '11')} + ${fr(sq(z), '11')} = 1.`,
          `This is an <b>ellipsoid of revolution</b> (a prolate spheroid) with semi-axis ${a} = 6 along the ${x}-axis and ${b} = √11 across it: exactly the spatial analogue of an ellipse with foci at (±5,${NB}0,${NB}0), since ${b}<sup>2</sup> = ${a}<sup>2</sup> − ${c}<sup>2</sup> = 36 − 25 = 11.`,
          '<b>The rigor lesson:</b> the double-radical must be killed in two careful squaring rounds, isolating one root each time. Squaring the sum directly in one shot is the standard wreck.',
        ],
        ans: `${fr(sq(x), '36')} + ${fr(sq(y), '11')} + ${fr(sq(z), '11')} = 1`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the centroid of the triangle with vertices ${t3('3', '−1', '2')}, ${t3('1', '2', '−4')}, ${t3('−1', '5', '2')}.`,
            a: `${t3('1', '2', '0')}.`,
          },
          {
            q: `<b>[CBSE]</b> Find the coordinates of the points that trisect the segment joining ${pt('P', '4', '2', '−6')} and ${pt('Q', '10', '−16', '6')}.`,
            a: `${t3('8', '−10', '2')} and ${t3('6', '−4', '−2')}.`,
          },
          {
            q: `<b>[JEE Main]</b> Show that ${pt('A', '−2', '3', '5')}, ${pt('B', '1', '2', '3')}, ${pt('C', '7', '0', '−1')} are collinear, and find the ratio in which <i>B</i> divides <i>AC</i>.`,
            a: `Collinear; <i>B</i> divides <i>AC</i> in ${RATIO('1', '2')}.`,
          },
          {
            q: `<b>[JEE Main]</b> Find the equation of the set of points equidistant from ${pt('A', '0', '1', '2')} and ${pt('B', '4', '3', '2')}, and name the surface.`,
            a: `2${x} + ${y} − 6 = 0, a plane (perpendicular bisector of <i>AB</i>).`,
          },
          {
            q: `<b>[JEE Advanced]</b> Find the equation of the sphere that is the locus of points at distance 5 from the centre ${t3('2', '−1', '3')}, and state its radius.`,
            a: `(${x} − 2)<sup>2</sup> + (${y} + 1)<sup>2</sup> + (${z} − 3)<sup>2</sup> = 25; radius 5.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The centroid of the triangle with vertices ${t3('2', '3', '−1')}, ${t3('4', '−1', '3')}, ${t3('0', '4', '1')} is`,
        opts: [
          { label: t3('2', '2', '1'), nudge: null },
          { label: t3('6', '6', '3'), nudge: '<b>(B)</b> forgets to divide by 3 (gives the sum).' },
          { label: t3('2', '2', '3'), nudge: `<b>(C)</b> gets ${x} and ${y} right but takes ${z} = 3 from one vertex instead of averaging.` },
          { label: t3('3', '3', '1.5'), nudge: '<b>(D)</b> divides by 2 instead of 3: confusing centroid with midpoint.' },
        ],
        correct: 0,
        solution: `Averages: (${fr('2 + 4 + 0', '3')}, ${fr('3 − 1 + 4', '3')}, ${fr('−1 + 3 + 1', '3')}) = ${t3('2', '2', '1')}.`,
      },
      {
        t: 'mcq',
        q: `Points ${t3('1', '2', '3')}, ${t3('2', '3', '4')}, ${t3(k, '5', '6')} are collinear. Then ${k} =`,
        opts: [
          { label: '3', nudge: `<b>(A)</b> advances only 2 steps (matches ${z} = 5, not 6).` },
          { label: '4', nudge: null },
          { label: '5', nudge: `<b>(C)</b>, <b>(D)</b> over-advance: they would need ${z} = 7 or 8.` },
          { label: '6', nudge: `<b>(C)</b>, <b>(D)</b> over-advance: they would need ${z} = 7 or 8.` },
        ],
        correct: 1,
        solution: `The first two give a direction ${t3('1', '1', '1')}. From ${t3('1', '2', '3')}, reaching ${z} = 6 needs +3 in each coordinate: ${x} = 1 + 3 = 4. Check ${y} = 2 + 3 = 5 ✓.`,
      },
      {
        t: 'mcq',
        q: `The set of points equidistant from ${t3('0', '0', '0')} and ${t3('2', '0', '0')} is`,
        opts: [
          { label: `the line ${x} = 1`, nudge: `<b>(A)</b> forgets that in 3D, “${x} = 1” is a plane, not a line (that was the 2D habit).` },
          { label: `the plane ${x} = 1`, nudge: null },
          { label: `the sphere ${sq(x)} + ${sq(y)} + ${sq(z)} = 1`, nudge: '<b>(C)</b> confuses equidistance-between-two-points with distance-from-one-point.' },
          { label: `the point ${t3('1', '0', '0')}`, nudge: '<b>(D)</b> gives only the midpoint, not the full locus.' },
        ],
        correct: 1,
        solution: `${sq('<i>PA</i>')} = ${sq('<i>PB</i>')}<br>⇒ ${sq(x)} + ${sq(y)} + ${sq(z)} = (${x} − 2)<sup>2</sup> + ${sq(y)} + ${sq(z)}<br>⇒ 4${x} = 4 ⇒ ${x} = 1, a whole <b>plane</b>.`,
      },
      {
        t: 'mcq',
        q: `The centroid <i>G</i> divides a median of a triangle in the ratio (vertex${NB}∶${NB}midpoint)`,
        opts: [
          { label: RATIO('1', '1'), nudge: '<b>(A)</b> confuses the centroid with the midpoint of the median.' },
          { label: RATIO('1', '2'), nudge: '<b>(B)</b> reverses the ratio (midpoint-to-vertex).' },
          { label: RATIO('2', '1'), nudge: null },
          { label: RATIO('3', '1'), nudge: `<b>(D)</b> ${RATIO('3', '1')} is the tetrahedron’s ratio (vertex to the centroid of the opposite face), not the triangle’s.` },
        ],
        correct: 2,
        solution: `The centroid sits twice as far from the vertex as from the opposite midpoint, i.e. ${RATIO('2', '1')} from the vertex.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Declaring collinearity from one coordinate.</b> Solving for ${k} from ${x} and stopping is the top error. Always confirm the same ${k} fits ${y} and ${z}.`,
          '<b>Centroid vs midpoint vs incentre.</b> Centroid divides by 3 (triangle) or 4 (tetrahedron); midpoint divides by 2; the incentre is a weighted average by side lengths: don’t average the incentre.',
          '<b>Forgetting the ×3 in reverse centroid problems.</b> “Sum of vertices = 3<i>G</i>,” not <i>G</i>.',
          '<b>Locus sign/squaring slips.</b> Equidistant-from-two-points is linear (a plane); distance-from-one-point is quadratic (a sphere). For sum-of-distances, isolate and square one radical at a time.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> For any “are these collinear / what ratio” question, go straight to the section-ratio method: solve ${k} from one coordinate, then verify across the other two. It is faster than three distance computations and hands you the dividing ratio as a bonus. For “type of figure,” first show a parallelogram (diagonals bisect each other), then:<br>equal adjacent sides ⇒ rhombus, equal diagonals ⇒ rectangle, both ⇒ square.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Centroid (triangle)',
            note: `(${fr(`∑${NB}${x}`, '3')}, ${fr(`∑${NB}${y}`, '3')}, ${fr(`∑${NB}${z}`, '3')}); divides each median ${RATIO('2', '1')} from the vertex. (<b>Tetrahedron:</b> denominator 4.)`,
          },
          { f: 'Collinear', note: `⇔ one ratio ${K1} fits ${x}, ${y}, ${z} together, <b>or</b> <i>AB</i> + <i>BC</i> = <i>AC</i>.` },
          {
            f: 'Figure type',
            note: 'first prove a parallelogram (diagonals bisect each other);<br>then equal adjacent sides ⇒ rhombus, equal diagonals ⇒ rectangle, both ⇒ square.',
          },
          {
            f: 'Locus',
            note: `equidistant from two points ⇒ <b>plane</b> (perp. bisector); distance ${r} from a centre ⇒ <b>sphere</b> ${SPHERE}; constant sum of distances ⇒ <b>ellipsoid</b> (${b}<sup>2</sup> = ${a}<sup>2</sup> − ${c}<sup>2</sup>).`,
          },
          { f: '[JEE] Incentre', note: `weight vertices by opposite side lengths ${a}, ${b}, ${c}.` },
        ],
        aids: [
          '“Centroid = plain average; incentre = weighted average.”',
          '“Collinear needs all three coordinates to agree on one ratio.”',
          '“Two points → plane, one point → sphere.”',
        ],
      },
      {
        t: 'p',
        html: '<b>Where this leads (Class 12 preview):</b> these coordinates are the launch pad for <b>direction cosines & ratios</b>, the <b>equations of a line and a plane</b> in space, the <b>angle between lines/planes</b>, and <b>shortest distance between skew lines</b>: the entire Class 12 “Three Dimensional Geometry” chapter. Everything there is built on the distance, section, and locus ideas you have just locked down here.',
      },
    ],
  },
];
