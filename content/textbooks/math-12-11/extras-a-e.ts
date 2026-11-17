import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11 Three Dimensional Geometry, Additional topics A–E, pp. 743–753 of
 * the Class 12 Mathematics Master Reference (October 2026 edition), word for
 * word: the "Chapter 11: Three Dimensional Geometry — Additional Topics"
 * part's Addenda A to E, with the book's letters. Its heading is not copied;
 * its p. 743 opening paragraph is the first paragraph of A's "Introduction".
 * Each addendum's opening text is its "Introduction" part, then its own
 * headings as parts ("Method", the run of "Example X.N" worked examples as one
 * part "Worked examples", and "Practice — Addendum X" as "Practice", answers
 * set against their questions). E's answers end on p. 753, above the rule
 * where Addendum P starts (not here). The method items (A's Step 1 and
 * Step 2, C1–C3, D1–D3, E1–E3) are bold run-in paragraphs as printed
 * ("C1 — …" → "C1: …"); the formula cards after them repeat their formulas
 * for the Formula sheet (ours; C3's added with review rm1211c, which also
 * corrects C3 and C practice 3 from "parallel" to "perpendicular").
 * "Subtopic 0N" and "unit 0Nx" → "Topic 0N"; "Addendum X" → "Additional
 * topic X". No drawings on these pages (every vector path is a section rule,
 * a page rule, a fraction bar, a radical, a vector arrow or a big bar).
 * A vector is its letters and the combining arrow (escaped ARW) inside one
 * <i> (decision 36); a two-letter vector carries the arrow on its last
 * letter; unit vectors with hats. Every fraction is stacked (<frac>); no em
 * dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
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

const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const abs = (s: string) => `|${WJ}${s}|`;
const rel = (lhs: string, op: string, rhs: string) => `${lhs}${NB}${op}${NB}${rhs}`;
/** A point or triple, its commas glued: (1, −1, 3). */
const pt = (...s: string[]) => `(${s.join(`,${NB}`)})`;
const dot = (u: string, v: string) => `${u}${NB}·${NB}${v}`;
const crs = (u: string, v: string) => `${u}${NB}×${NB}${v}`;
/** A line or plane named before its equation: L1 : r = … */
const named = (name: string) => `${name}${NB}:${NB}`;

const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const f = I('f');
const k = I('k');
const p = I('p');
const q = I('q');
const s = I('s');
const t = I('t');
const u = I('u');
const v = I('v');
const w = I('w');
const x = I('x');
const y = I('y');
const z = I('z');
const A = I('A');
const B = I('B');
const C = I('C');
const D = I('D');
const F = I('F');
const M = I('M');
const O = I('O');
const P = I('P');
const Q = I('Q');
const la = I('λ');
const mu = I('μ');
const al = I('α');
const be = I('β');
const ga = I('γ');
const ph = I('φ');
const pi = I('π');
const AM = I('AM');
const MB = I('MB');
const AB = I('AB');
const OP = I('OP');
const XY = I('xy');
const ZX = I('zx');
const YZ = I('yz');
const Bp = `${B}′`;
const ABp = `${AB}′`;
const MBp = `${MB}′`;

const HALF = fr('1', '2');
const x0 = sb(x, '0');
const y0 = sb(y, '0');
const z0 = sb(z, '0');
const d1 = sb(d, '1');
const d2 = sb(d, '2');
const P1 = sb(P, '1');
const P2 = sb(P, '2');
const L1 = sb(I('L'), '1');
const L2 = sb(I('L'), '2');
const xB = sb(x, B);
const yB = sb(y, B);
const zB = sb(z, B);

// Vectors.
const va = V('a');
const vb = V('b');
const vc = V('c');
const vd = V('d');
const vf = V('f');
const vm = V('m');
const vn = V('n');
const vp = V('p');
const vr = V('r');
const vu = V('u');
const vD = V('D');
const vN = V('N');
const vAB = V('AB');
const vAC = V('AC');
const vAD = V('AD');
const vOF = V('OF');
const va1 = sb(va, '1');
const va2 = sb(va, '2');
const vb1 = sb(vb, '1');
const vb2 = sb(vb, '2');
const vn1 = sb(vn, '1');
const vn2 = sb(vn, '2');
/** The joining vector P1P2, the arrow on its last letter. */
const vP1P2 = `${P1}${V('P')}<sub>2</sub>`;

// Additional topic A.
const SYM0 = `${fr(`${x} − ${x0}`, sb(d, x))} = ${fr(`${y} − ${y0}`, sb(d, y))} = ${fr(`${z} − ${z0}`, sb(d, z))}`;
// Additional topic B.
const B1XB2 = crs(vb1, vb2);
const SYS1 = `${la}${NB}${sq(abs(vb1))} − ${mu}${NB}(${dot(vb1, vb2)}) = ${dot(vc, vb1)}`;
const SYS2 = `${la}${NB}(${dot(vb1, vb2)}) − ${mu}${NB}${sq(abs(vb2))} = ${dot(vc, vb2)}`;
// Additional topic D.
const ABC2 = `${sq(a)} + ${sq(b)} + ${sq(c)}`;
const AL2 = `${sq(al)} + ${sq(be)} + ${sq(ga)}`;
const PLANE = `${a}${x} + ${b}${y} + ${c}${z} = ${d}`;
const FOOT = `${F} = ${fr(d, ABC2)}${NB}${pt(a, b, c)}`;
const FOOT_PLANE = `${al}${x} + ${be}${y} + ${ga}${z} = ${AL2}`;
const MIRROR = `${AM} + ${MB} = ${AM} + ${MBp} ≥ ${ABp}`;
// Additional topic E.
const BISECT = `2${NB}${dot(vp, `(${vb} − ${va})`)} = ${sq(abs(vb))} − ${sq(abs(va))}`;
const SPHERE = `${sq(x)} + ${sq(y)} + ${sq(z)} = ${x0}${x} + ${y0}${y} + ${z0}${z}`;
const MID = `${a}${x} + ${b}${y} + ${c}${z} + ${fr(`${d1} + ${d2}`, '2')} = 0`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 743–745 ────────────────
  {
    n: 'A',
    title: 'The Line Where Two Planes Meet',
    extra: true,
    kalam: 'Shortcut worth memorising: a point lies on the line of intersection if and only if it satisfies both plane equations.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topics 00 to 05 gave you the complete standard toolkit: distances and section formulae, direction cosines, the skew-line distance formula, the family ${P1} + ${la}${P2} = 0, and the foot–distance–image routine for lines and planes. Five working procedures are nevertheless missing, and every one of them is a live examinable pattern built strictly from tools the chapter already hands you. Additional topic A parametrises the line where two planes meet; the chapter repeatedly tells you to avoid this line, but projection, three-plane consistency and several Advanced questions require it explicitly. Additional topic B finds both endpoints of the shortest bridge between skew lines, not merely its length. Additional topic C extends coplanarity from two lines to four points and completes the plane-building table of Topic 05. Additional topic D collects the origin-foot patterns and the mirror trick behind every shortest-path-with-reflection problem. Additional topic E translates geometric conditions into equations: the locus skill the chapter uses (Topic 05’s bisector planes are one) but never sets out as a method. Nothing below introduces new theory; each additional topic is an old tool pointed at a configuration the chapter skipped.`,
      },
      {
        t: 'p',
        html: 'Topic 03 insists you never compute the intersection line, and for family-of-planes problems that advice stands. But the moment a question asks for the angle that intersection line makes with something, or its shortest distance to another line, or whether a third plane cuts it, you need the line itself. Writing it down is a two-step routine.',
      },
      {
        t: 'p',
        html: '(Entirely JEE territory: the plane is outside the rationalised CBSE syllabus.)',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Step 1: the direction is the crossed normals.</b> Let the planes be<br>${named('Π<sub>1</sub>')}${dot(vr, vn1)} = ${d1},<br>${named('Π<sub>2</sub>')}${dot(vr, vn2)} = ${d2}.<br>If ${vu} is the displacement between any two points lying on both planes, then<br>${dot(vu, vn1)} = 0,${NB}${NB}${dot(vu, vn2)} = 0,<br>because both points satisfy each plane equation, so the difference cancels each right-hand side. A vector perpendicular to both normals is parallel to ${crs(vn1, vn2)}. Hence the line of intersection has direction<br>${vd} = ${crs(vn1, vn2)}.`,
      },
      {
        t: 'p',
        html: `<b>Step 2: one point, by killing a coordinate.</b> Set one variable, usually ${z}, equal to zero, and solve the remaining 2 × 2 linear system. If that system is inconsistent (no solution), the line does not pierce that coordinate plane; return the favour by zeroing a different variable. Write the result in symmetric form<br>${SYM0},<br>or, if a direction component vanishes, in the restricted form demonstrated in practice question 2.`,
      },
      {
        t: 'p',
        html: '<b>Shortcut worth memorising:</b> a point lies on the line of intersection if and only if it satisfies both plane equations. Testing membership never requires the parametrisation at all.',
      },
      {
        t: 'formula',
        kicker: 'Line of intersection of two planes',
        main: `Direction: ${vd} = ${crs(vn1, vn2)}<br>${SYM0}`,
        legend: [
          `${vn1}, ${vn2} = the normals of the two planes`,
          `${pt(x0, y0, z0)} = a point on both planes`,
          `${sb(d, x)}, ${sb(d, y)}, ${sb(d, z)} = the components of ${vd}`,
        ],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the line of intersection of ${x} + ${y} + ${z} = 6 and 2${x} − ${y} + ${z} = 3, and the point where it meets the plane 2${x} − ${y} + 3${z} = 9.`,
        steps: [
          `Direction:<br>${vd} = ${pt('1', '1', '1')} × ${pt('2', '−1', '1')} = ${pt('2', '1', '−3')}.`,
          `Set ${rel(z, '=', '0')}: the system ${x} + ${y} = 6 and 2${x} − ${y} = 3 adds to give 3${x} = 9, so ${rel(x, '=', '3')}, ${rel(y, '=', '3')}. The line is<br>${fr(`${x} − 3`, '2')} = ${fr(`${y} − 3`, '1')} = ${fr(z, '−3')},<br>i.e. ${pt(`3 + 2${t}`, `3 + ${t}`, `−3${t}`)}.`,
          `Substitute into the third plane:<br>2(3 + 2${t}) − (3 + ${t}) + 3(−3${t})<br>= 3 − 6${t} = 9 ⟹ ${rel(t, '=', '−1')}.`,
          `Meeting point: ${pt('1', '2', '3')}. <b>Check:</b> it satisfies both original planes, since 1 + 2 + 3 = 6 and 2 − 2 + 3 = 3.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the shortest distance between the line where ${x} + ${y} = 2 meets ${x} + ${z} = 3, and the line through ${pt('1', '2', '4')} with direction ${pt('1', '1', '1')}.`,
        steps: [
          `Parametrise the intersection line. Its normals are ${pt('1', '1', '0')} and ${pt('1', '0', '1')}, so<br>${vd} = ${pt('1', '1', '0')} × ${pt('1', '0', '1')} = ${pt('1', '−1', '−1')}.`,
          `Setting ${rel(y, '=', '0')} forces ${rel(x, '=', '2')} and ${rel(z, '=', '1')}, giving the point ${pt('2', '0', '1')}. So ${L1} has ${va1} = ${pt('2', '0', '1')}, ${vb1} = ${pt('1', '−1', '−1')}; and ${L2} has ${va2} = ${pt('1', '2', '4')}, ${vb2} = ${pt('1', '1', '1')}.`,
          `Common-perpendicular direction:<br>${B1XB2} = ${pt('0', '−2', '2')},${NB}${NB}${abs(B1XB2)} = 2√2.`,
          `Joining vector ${va2} − ${va1} = ${pt('−1', '2', '3')}. Scalar triple product:<br>${dot(pt('−1', '2', '3'), pt('0', '−2', '2'))}<br>= 0 − 4 + 6 = 2 ≠ 0,<br>so the lines are genuinely skew, and<br>${d} = ${fr(abs('2'), '2√2')} = ${fr('1', '√2')} units.`,
          `The entire difficulty of the problem was Step 1: everything after “read off ${va1}, ${vb1}” is Topic 02 verbatim.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the symmetric equation of the line of intersection of ${x} + ${y} + ${z} = 6 and 2${x} + 3${y} + ${z} = 11.`,
            a: `Direction ${pt('−2', '1', '1')}; point ${pt('7', '−1', '0')} from ${rel(z, '=', '0')}; line<br>${fr(`${x} − 7`, '−2')} = ${fr(`${y} + 1`, '1')} = ${z}.`,
          },
          {
            q: `Find the line of intersection of 2${x} + ${y} − ${z} = 3 and ${x} − ${y} + ${z} = 1. (Watch the direction.)`,
            a: `Direction ${pt('0', '−3', '−3')} ∝ ${pt('0', '1', '1')}; the ${x}-component dies, so the symmetric form is illegal: the line is ${x}${NB}=${NB}${fr('4', '3')} together with${NB}${y}${NB}−${NB}${z}${NB}=${NB}${fr('1', '3')}<br>(point ${pt(fr('4', '3'), fr('1', '3'), '0')} from ${rel(z, '=', '0')}).`,
          },
          {
            q: `Find the angle between the line of intersection of ${x} + 2${y} + 2${z} = 5 and 2${x} + ${y} + 2${z} = 7 and the ${XY}-plane.`,
            a: `Direction ${pt('2', '2', '−3')}, ${abs(vd)} = √17; against the ${XY}-plane use sine with the plane’s normal ${pt('0', '0', '1')}:<br>sin${NB}${ph} = ${fr('3', '√17')}, so ${ph} = sin<sup>−1</sup>${NB}${fr('3', '√17')}.`,
          },
          {
            q: `Without parametrising anything, decide whether ${P}${pt('5', '4', '−3')} and ${Q}${pt('4', '4', '−3')} lie on the line of intersection of ${x} + ${y} + ${z} = 6 and 2${x} − ${y} + ${z} = 3.`,
            a: `${P} lies on the line (5 + 4 − 3 = 6 and 10 − 4 − 3 = 3, both satisfied); ${Q} does not (4 + 4 − 3 = 5 ≠ 6).`,
          },
          {
            q: `Show that the planes ${x} + ${y} + ${z} = 1, 2${x} − ${y} + 2${z} = 3 and ${x} + ${z} = 5 have no common point.`,
            a: `Subtracting the third plane from the first gives ${rel(y, '=', '−4')}; substituting back, plane 1 gives ${x} + ${z} = 5 but plane 2 gives 2${x} − (−4) + 2${z} = 3, i.e. ${x} + ${z} = −${HALF}: a contradiction, so no point satisfies all three; equivalently the first two planes’ intersection line has direction ${pt('1', '0', '−1')}, which is perpendicular to ${pt('1', '0', '1')}, so it runs parallel to the third plane and${NB}off${NB}it.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic B · pp. 745–747 ────────────────
  {
    n: 'B',
    title: 'Both Ends of the Bridge: Closest Points on Skew Lines',
    extra: true,
    kalam: 'A positive-definite quadratic has one critical point and it is the global minimum.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Theorem 2 of Topic 02 delivers the length of the common perpendicular in one shot. But JEE Advanced regularly wants the points where that perpendicular lands ${ESTIMATE}, “find the shortest distance and the points between which it is measured”, and the formula is silent about them. The fix is to go back to first principles and minimise directly.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Take general points ${P1} = ${va1} + ${la}${vb1} on ${L1} and ${P2} = ${va2} + ${mu}${vb2} on ${L2}, and write the joining vector with ${vc} = ${va2} − ${va1}:<br>${vP1P2} = ${vD}(${la},${NB}${mu}) = ${vc} + ${mu}${vb2} − ${la}${vb1}.<br>Minimise ${f}(${la},${NB}${mu}) = ${sq(abs(vD))}. Setting both partial derivatives to zero:<br>${fr(`∂${f}`, `∂${la}`)} = −2${NB}${dot(vD, vb1)} = 0,<br><br>${fr(`∂${f}`, `∂${mu}`)} = 2${NB}${dot(vD, vb2)} = 0,<br>which is exactly the statement that ${vD} is perpendicular to both lines: the critical point automatically builds the common perpendicular. Expanding the two dot products gives a 2 × 2 linear system:<br>${SYS1},<br>${SYS2}.`,
      },
      {
        t: 'p',
        html: `<b>Why the solution is the minimum:</b> the quadratic part of ${f} is ${sq(abs(`${la}${vb1} − ${mu}${vb2}`))}, which is positive definite whenever ${vb1}, ${vb2} are not proportional (Cauchy–Schwarz is strict). A positive-definite quadratic has one critical point and it is the global minimum. When the lines are parallel the two equations become dependent: no unique solution, matching the fact that parallel lines need the separate Topic 02 formula.`,
      },
      {
        t: 'p',
        html: `The distance is then ${abs(vD)} at the solved (${la},${NB}${mu}), and as a free cross-check it must equal the triple-product value<br>${fr(abs(dot(vc, `(${B1XB2})`)), abs(B1XB2))}.`,
      },
      {
        t: 'formula',
        kicker: 'Closest points on two skew lines',
        main: `${SYS1}<br>${SYS2}`,
        legend: [
          `${vc} = the joining vector ${va2} − ${va1}`,
          `${vb1}, ${vb2} = the directions of ${L1}, ${L2}`,
          `${la}, ${mu} = the parameters of the closest points ${P1}, ${P2}`,
        ],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Topic 02’s third worked example found the shortest distance between<br>${named(L1)}${vr} = (${ii} + 2${jj} − ${kk}) + ${la}(2${ii} + ${jj} − 2${kk}),<br>${named(L2)}${vr} = (3${ii} − ${jj} + ${kk}) + ${mu}(${ii} + 2${jj} + 2${kk})<br>to be 4 units. Locate the two closest points.`,
        steps: [
          `Here ${va1} = ${pt('1', '2', '−1')}, ${vb1} = ${pt('2', '1', '−2')}, ${va2} = ${pt('3', '−1', '1')}, ${vb2} = ${pt('1', '2', '2')}, so ${vc} = ${pt('2', '−3', '2')}. The data:<br>${sq(abs(vb1))} = 9,${NB}${NB}${sq(abs(vb2))} = 9,${NB}${NB}${dot(vb1, vb2)} = 0,<br>${dot(vc, vb1)} = 4 − 3 − 4 = −3,<br>${dot(vc, vb2)} = 2 − 6 + 4 = 0.`,
          `The system decouples beautifully:<br>9${la} = −3 ⟹ ${la} = −${fr('1', '3')},<br>−9${mu} = 0 ⟹ ${rel(mu, '=', '0')}.`,
          `Closest points:<br>${P1} = ${pt('1', '2', '−1')} − ${fr('1', '3')}${pt('2', '1', '−2')}<br>= ${pt(fr('1', '3'), fr('5', '3'), `−${fr('1', '3')}`)}, ${P2} = ${pt('3', '−1', '1')}.`,
          `Distance: ${vD} = ${pt(fr('8', '3'), `−${fr('8', '3')}`, fr('4', '3'))}, so<br>${abs(vD)} = ${fr('√(64 + 64 + 16)', '3')} = ${fr('12', '3')} = 4,<br>matching the chapter’s triple-product answer. <b>Checks:</b> ${dot(vD, vb1)} = ${fr('16 − 8 − 8', '3')} = 0<br>and ${dot(vD, vb2)} = ${fr('8 − 16 + 8', '3')} = 0: genuinely the common perpendicular.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the shortest distance between the lines<br>${named(L1)}${vr} = ${la}(${ii} + ${jj}),<br>${named(L2)}${vr} = (${ii} + 2${kk}) + ${mu}(${jj} + ${kk}),<br>and the points at which it is attained.`,
        steps: [
          `Here ${va1} = ${pt('0', '0', '0')}, ${vb1} = ${pt('1', '1', '0')}, ${va2} = ${pt('1', '0', '2')}, ${vb2} = ${pt('0', '1', '1')}, so ${vc} = ${pt('1', '0', '2')}. Data:<br>${sq(abs(vb1))} = 2,${NB}${NB}${sq(abs(vb2))} = 2,${NB}${NB}${dot(vb1, vb2)} = 1,<br>${dot(vc, vb1)} = 1,${NB}${NB}${dot(vc, vb2)} = 2.`,
          `This time the coupling term is alive; the system is<br>2${la} − ${mu} = 1,${NB}${NB}${la} − 2${mu} = 2.`,
          `From the first, ${mu} = 2${la} − 1; substitute into the second:<br>${la} − 4${la} + 2 = 2 ⟹ ${rel(la, '=', '0')},${NB}${NB}${rel(mu, '=', '−1')}.`,
          `Closest points:<br>${P1} = ${pt('0', '0', '0')},<br>${P2} = ${pt('1', '0', '2')} + (−1)${pt('0', '1', '1')} = ${pt('1', '−1', '1')}.`,
          `Distance: ${vD} = ${pt('1', '−1', '1')}, ${abs(vD)} = √3. <b>Cross-check by triple product:</b> ${B1XB2} = ${pt('1', '−1', '1')}, of magnitude √3, and ${dot(vc, pt('1', '−1', '1'))}${NB}=${NB}3, giving ${fr('3', '√3')} = √3: agreement. <b>Checks:</b> ${dot(vD, vb1)} = 1 − 1 = 0 and ${dot(vD, vb2)} = −1 + 1 = 0.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the closest points on the ${x}-axis and the line through ${pt('0', '1', '1')} with direction ${pt('0', '1', '−1')}, and the distance between them.`,
            a: `${rel(la, '=', '0')}, ${rel(mu, '=', '0')}; points ${pt('0', '0', '0')} and ${pt('0', '1', '1')}; distance √2 (and ${pt('0', '1', '1')} is perpendicular to both directions).`,
          },
          {
            q: `For ${named(L1)}${vr} = (${ii} + 2${jj} + 3${kk}) + ${la}(${ii} − ${jj} + ${kk}) and ${named(L2)}${vr} = (2${ii} + ${jj}) + ${mu}(2${ii} + ${jj} + 2${kk}), find the closest points and the shortest distance; verify with the triple-product formula.`,
            a: `System 3${la} − 3${mu} = −1, 3${la} − 9${mu} = −5 gives ${la} = ${fr('1', '3')}, ${mu} = ${fr('2', '3')};<br>points ${pt(fr('4', '3'), fr('5', '3'), fr('10', '3'))} and ${pt(fr('10', '3'), fr('5', '3'), fr('4', '3'))};<br>${vD} = ${pt('2', '0', '−2')}, distance 2√2; cross-check: ${B1XB2} = ${pt('−3', '0', '3')}, triple product −12, distance<br>${fr('12', '3√2')} = 2√2.`,
          },
          {
            q: 'Explain why the 2 × 2 system has no unique solution when the lines are parallel, and say what replaces it.',
            a: `When ${vb2} ∝ ${vb1} both equations carry the same information, so the system is rank-one with infinitely many solutions: every transversal perpendicular to the shared direction has equal length; use the parallel-lines formula<br>${fr(abs(crs(vb, `(${va2} − ${va1})`)), abs(vb))}${NB}instead.`,
          },
          {
            q: `Using both methods (closest points, then triple product), find the shortest distance between ${L1}, defined by ${rel(x, '=', '1')} and ${rel(y, '=', '2')}, and ${named(L2)}${vr} = 3${kk} + ${mu}(${ii} + ${jj}).`,
            a: `${va1} = ${pt('1', '2', '0')}, ${vb1} = ${pt('0', '0', '1')}, ${va2} = ${pt('0', '0', '3')}, ${vb2} = ${pt('1', '1', '0')}, ${vc} = ${pt('−1', '−2', '3')}; the system ${rel(la, '=', '3')}, −2${mu} = −3 gives points ${pt('1', '2', '3')} and ${pt(fr('3', '2'), fr('3', '2'), '3')},<br>${vD} = ${pt(fr('1', '2'), `−${fr('1', '2')}`, '0')}, distance ${fr('1', '√2')};<br>triple product route: ${pt('0', '0', '1')} × ${pt('1', '1', '0')} = ${pt('−1', '1', '0')}, ${dot(vc, pt('−1', '1', '0'))} = −1, distance ${fr('1', '√2')}: identical.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic C · pp. 748–749 ────────────────
  {
    n: 'C',
    title: 'Four Points, One Plane: Coplanarity and Extended Plane-Building',
    extra: true,
    kalam: 'Four points are coplanar if and only if their triple product dies.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 02 tests coplanarity of two lines; Topic 05 builds planes through intersecting lines, a line and a point, or parallel lines. Three examinable extensions are missing: deciding whether four scattered points share a plane, building a plane through a line that must run parallel to a given direction, and building one that must run perpendicular to a given plane.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>C1: Four points are coplanar if and only if their triple product dies.</b> For points ${A}, ${B}, ${C}, ${D}, form the three difference vectors ${vAB}, ${vAC}, ${vAD}. If ${A}, ${B}, ${C} are non-collinear, ${crs(vAB, vAC)} is a normal to the plane through them, and ${D} lies in that plane exactly when ${vAD} is perpendicular to that normal:<br>(${crs(vAB, vAC)})${NB}·${NB}${vAD} = 0.<br>If ${A}, ${B}, ${C} happen to be collinear, the cross product is ${ZERO} and the condition holds identically, correctly, since a line and a fourth point always share some plane. One computation, no special cases.`,
      },
      {
        t: 'formula',
        kicker: 'Four coplanar points',
        main: `(${crs(vAB, vAC)})${NB}·${NB}${vAD} = 0`,
        legend: [`${A}, ${B}, ${C}, ${D} = the four points`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>C2: Plane through a line, parallel to a direction ${vm}.</b> The desired plane must contain ${vb} (along its line) and admit ${vm} as an in-plane direction, so its normal is perpendicular to both:<br>${vN} = ${crs(vb, vm)},${NB}${NB}plane: (${vr} − ${va})${NB}·${NB}(${crs(vb, vm)}) = 0,<br>with ${va} any point of the line. Caveats: if ${rel(vm, '∥', vb)} the construction collapses (${vN} = ${ZERO}), but then every plane through the line qualifies, so the answer is “not unique”; if the data is a second line ${M} rather than a bare direction, the plane exists uniquely whenever the directions differ, and ${M} will automatically be parallel to the result (test its own point to see whether it is contained).`,
      },
      {
        t: 'formula',
        kicker: 'Plane through a line, parallel to a direction',
        main: `${vN} = ${crs(vb, vm)}<br>(${vr} − ${va})${NB}·${NB}(${crs(vb, vm)}) = 0`,
        legend: [
          `${va} = any point of the line`,
          `${vb} = the line’s direction`,
          `${vm} = the given direction (not parallel${NB}to${NB}${vb})`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>C3: Plane through a line, perpendicular to a given plane with normal ${vn}.</b> The desired normal must be perpendicular to ${vb} (to contain the line) and to ${vn} (to make the new plane perpendicular to the given one):<br>${vN} = ${crs(vb, vn)}.<br>Caveat: if ${rel(vb, '∥', vn)} the line is itself normal to the given plane, so every plane through the line is perpendicular to it and the answer is “not unique”; the cross product announcing itself as ${ZERO} is the diagnosis. (A plane through the line <b>parallel</b> to the given plane is a different question: it exists only when ${dot(vb, vn)} = 0, and is then (${vr} − ${va})${NB}·${NB}${vn} = 0.)`,
      },
      {
        t: 'formula',
        kicker: 'Plane through a line, perpendicular to a given plane',
        main: `${vN} = ${crs(vb, vn)}<br>(${vr} − ${va})${NB}·${NB}(${crs(vb, vn)}) = 0`,
        legend: [
          `${va} = any point of the line`,
          `${vb} = the line’s direction`,
          `${vn} = the given plane’s normal (not parallel${NB}to${NB}${vb})`,
        ],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Show that ${pt('1', '2', '3')}, ${pt('3', '2', '1')}, ${pt('2', '3', '1')}, ${pt('6', '0', '0')} are coplanar, and find the plane.`,
        steps: [
          `With ${A} = ${pt('1', '2', '3')}: ${vAB} = ${pt('2', '0', '−2')}, ${vAC} = ${pt('1', '1', '−2')}, ${vAD} = ${pt('5', '−2', '−3')}. First the normal:<br>${crs(vAB, vAC)} = ${pt('2', '2', '2')}.`,
          `Triple product:<br>${dot(pt('2', '2', '2'), pt('5', '−2', '−3'))} = 10${NB}−${NB}4${NB}−${NB}6${NB}=${NB}0: coplanar. The plane has normal proportional to ${pt('1', '1', '1')} and passes through ${A}:<br>1(${x} − 1) + 1(${y} − 2) + 1(${z} − 3) = 0<br>⟹ ${x} + ${y} + ${z} = 6.`,
          '<b>Check:</b> the remaining three points each sum to 6.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `(a) Find the plane containing the line ${vr} = (${ii} + ${kk}) + ${la}(${ii} + ${jj}) and parallel to the line ${vr} = (2${ii} + ${jj} + 3${kk}) + ${mu}(${jj} + ${kk}). (b) How far is the second line from this plane?`,
        steps: [
          `(a) Here ${va} = ${pt('1', '0', '1')}, ${vb} = ${pt('1', '1', '0')}, ${vm} = ${pt('0', '1', '1')}, and ${vb} ∦ ${vm}, so the plane is unique:<br>${vN} = ${crs(vb, vm)} = ${pt('1', '−1', '1')}.`,
          `Through ${pt('1', '0', '1')}:<br>1(${x} − 1) − 1(${y} − 0) + 1(${z} − 1) = 0<br>⟹ ${x} − ${y} + ${z} = 2.`,
          `<b>Verification:</b> the line’s point ${pt('1', '0', '1')} gives 2; its displaced point ${pt('2', '1', '1')} gives 2; the direction satisfies ${dot(pt('1', '1', '0'), pt('1', '−1', '1'))}${NB}=${NB}0; and the second line’s direction satisfies ${dot(pt('0', '1', '1'), pt('1', '−1', '1'))}${NB}=${NB}0: parallel as demanded, while its point ${pt('2', '1', '3')} gives 4${NB}≠${NB}2, so it sits strictly off the plane rather than inside it.`,
          `(b) The whole of the second line is equidistant from the plane (its direction is parallel), so measure from ${pt('2', '1', '3')}:<br>${fr(abs('2 − 1 + 3 − 2'), '√(1 + 1 + 1)')} = ${fr('2', '√3')} units.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Determine whether ${pt('1', '1', '1')}, ${pt('2', '3', '4')}, ${pt('5', '3', '2')}, ${pt('1', '2', '3')} are coplanar; if the first three define a plane, state it.`,
            a: `${crs(vAB, vAC)} = ${pt('−4', '11', '−6')}; triple product with ${vAD} = ${pt('0', '1', '2')} is 0${NB}+${NB}11${NB}−${NB}12${NB}=${NB}−1${NB}≠${NB}0: not coplanar. The plane through the first three is 4${x} − 11${y} + 6${z} + 1 = 0, at which the fourth point evaluates to 1.`,
          },
          {
            q: `Find the plane through the line ${vr} = (${jj} + 2${kk}) + ${la}(2${ii} + ${jj} − ${kk}) that is parallel to the ${z}-axis.`,
            a: `${vN} = ${pt('2', '1', '−1')} × ${pt('0', '0', '1')} = ${pt('1', '−2', '0')}; plane through ${pt('0', '1', '2')}: ${x} − 2${y} + 2 = 0.`,
          },
          {
            q: `Find the plane through the line ${vr} = (${ii} + ${jj} + ${kk}) + ${la}(2${ii} − ${jj} + ${kk}) perpendicular to the plane ${x} + 2${y} − ${z} = 0.`,
            a: `${vN} = ${pt('2', '−1', '1')} × ${pt('1', '2', '−1')} = ${pt('−1', '3', '5')}; plane through ${pt('1', '1', '1')}: ${x} − 3${y} − 5${z} + 7 = 0; check ${dot(pt('−1', '3', '5'), pt('1', '2', '−1'))} = 0 confirms that the two planes are perpendicular.`,
          },
          {
            q: `Find ${k} so that ${pt('1', '0', '0')}, ${pt('0', '1', '0')}, ${pt('0', '0', '1')}, ${pt('1', '1', k)} are coplanar.`,
            a: `${crs(vAB, vAC)} = ${pt('1', '1', '1')} and ${vAD} = ${pt('0', '1', k)}, so the triple product is 1 + ${k}: ${rel(k, '=', '−1')} (equivalently, ${D} must sit on ${x} + ${y} + ${z} = 1).`,
          },
          {
            q: 'Prove that if three of four points are collinear, all four are automatically coplanar.',
            a: `Collinearity of the first three forces ${crs(vAB, vAC)} = ${ZERO}, so the triple product with any ${vAD} vanishes: the condition holds identically, and some plane through the line contains the fourth point.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic D · pp. 749–751 ────────────────
  {
    n: 'D',
    title: 'Mirror Shortcuts: Origin Feet, Coordinate Walls, Shortest Paths',
    extra: true,
    kalam: 'Any shortest path that must touch a flat mirror becomes a straight line once one endpoint is imaged.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Two small results do disproportionate work in JEE papers ${ESTIMATE}. The first converts between a plane and the foot of the perpendicular dropped to it from the origin, in both directions. The second is the reflection principle: any shortest path that must touch a flat mirror becomes a straight line once one endpoint is imaged. The origin-foot patterns appear nowhere in the chapter, and Topic 04 only mentions the reflection principle in passing; both are one line away from Topic 04.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>D1: Foot from the origin, and back again.</b> If the foot of the perpendicular from ${O} to ${PLANE} is ${F}, then ${F} lies on the plane and ${I('OF')} runs along the normal, so ${F} = ${s}${pt(a, b, c)} for some scalar ${s}. Substituting:<br>${s}(${ABC2}) = ${d}<br>⟹ ${FOOT}.<br>The reverse direction is the exam favourite ${ESTIMATE}. If the foot is given as ${pt(al, be, ga)}, the normal is parallel to ${pt(al, be, ga)} and the plane passes through ${pt(al, be, ga)}, so<br>${FOOT_PLANE}.<br>Free check: the origin’s distance from this plane, namely the right side over √(${AL2}), must equal ${abs(vOF)} = √(${AL2}), and it does.`,
      },
      {
        t: 'formula',
        kicker: 'Foot of the perpendicular from the origin',
        main: FOOT,
        legend: [`${F} = the foot on the plane ${PLANE}`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Plane from the foot of its perpendicular from the origin',
        main: FOOT_PLANE,
        legend: [`${pt(al, be, ga)} = the foot of the perpendicular from the origin (not the origin itself)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>D2: Images in the coordinate walls.</b> The foot of ${pt(x, y, z)} in the ${XY}-plane is ${pt(x, y, '0')}, so the image is 2${pt(x, y, '0')} − ${pt(x, y, z)} = ${pt(x, y, `−${z}`)}: flip one sign. Reflecting in an axis flips the two signs of the other coordinates: the image of ${pt(x, y, z)} in the ${x}-axis is ${pt(x, `−${y}`, `−${z}`)}. These are instant: no ${t}, no formula.`,
      },
      {
        t: 'p',
        html: `<b>D3: The mirror trick.</b> Let ${A} and ${B} lie on the same side of a plane ${pi}, and let ${Bp} be the image of ${B} in${NB}${pi}. Every point ${M} of ${pi} is equidistant from ${B} and ${Bp}: for instance with ${pi} the ${XY}-plane, ${B} = ${pt(xB, yB, zB)}, ${Bp} = ${pt(xB, yB, `−${zB}`)} and ${M} = ${pt(u, v, '0')},<br>${sq(MB)} = (${u} − ${xB})<sup>2</sup> + (${v} − ${yB})<sup>2</sup> + ${sq(zB)} = ${MBp}<sup>2</sup>.<br>Hence for every admissible ${M},<br>${MIRROR},<br>with equality exactly when ${M} is the point where segment ${ABp} crosses${NB}${pi}. So: reflect, join, read the crossing point; the straight length ${ABp} is the minimum path.`,
      },
      {
        t: 'formula',
        kicker: 'The mirror trick (shortest path via a plane)',
        main: MIRROR,
        legend: [`${A}, ${B} = the two endpoints, on the same side of the mirror`, `${Bp} = the image of ${B} in the mirror plane`, `${M} = a point of the mirror`],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `(a) Find the foot of the perpendicular from the origin to the plane 2${x} + 3${y} + 6${z} = 42.<br>(b) A plane has foot of perpendicular from the origin at ${pt('1', '2', '2')}; find the plane.`,
        steps: [
          `(a) ${ABC2} = 4 + 9 + 36 = 49, so<br>${F} = ${fr('42', '49')}${pt('2', '3', '6')}<br>= ${pt(fr('12', '7'), fr('18', '7'), fr('36', '7'))}.`,
          `Sanity check: the distance from the origin is ${fr('42', '7')} = 6, and indeed<br>${abs(F)} = ${fr('6', '7')}${NB}·${NB}7 = 6.`,
          `(b) By D1 reversed, the plane is<br>1${NB}·${NB}${x} + 2${NB}·${NB}${y} + 2${NB}·${NB}${z} = 1 + 4 + 4 = 9,<br>i.e. ${x} + 2${y} + 2${z} = 9.`,
          `Check: distance from origin = ${fr('9', '3')} = 3 = ${abs(pt('1', '2', '2'))}, consistent.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `A ray travels from ${A}${pt('1', '1', '2')}, reflects off the ${XY}-plane, and reaches ${B}${pt('3', '4', '6')}. Find the point of contact and the total path length.`,
        steps: [
          `Reflect ${B} in the ${XY}-plane: ${Bp} = ${pt('3', '4', '−6')}. The straight segment from ${A} to ${Bp} has direction ${pt('2', '3', '−8')}; parametrise it:<br>${pt(`1 + 2${t}`, `1 + 3${t}`, `2 − 8${t}`)}.`,
          `It meets the mirror where ${rel(z, '=', '0')}: 2 − 8${t} = 0, giving ${t} = ${fr('1', '4')} and<br>${M} = ${pt(fr('3', '2'), fr('7', '4'), '0')},<br>which lies on the mirror and strictly between ${A} and ${Bp}. Total path:<br>${AM} + ${MB} = ${ABp}<br>= √(2<sup>2</sup> + 3<sup>2</sup> + (−8)<sup>2</sup>) = √77 units.`,
          `<b>Direct verification that the pieces really sum to √77:</b> ${AM} runs over ${pt(HALF, fr('3', '4'), '−2')}, whose squared length is<br>${fr('1', '4')} + ${fr('9', '16')} + 4 = ${fr('77', '16')},<br>so ${AM} = ${fr('√77', '4')}; ${MB} runs over ${pt(fr('3', '2'), fr('9', '4'), '6')}, whose squared length is<br>${fr('36 + 81 + 576', '16')} = ${fr('693', '16')} = ${fr(`9${NB}·${NB}77`, '16')},<br>so ${MB} = ${fr('3√77', '4')}. The sum is √77, exactly as promised: the mirror trick did not approximate, it computed.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the foot of the perpendicular from the origin to 3${x} − 4${y} + 12${z} = 26, and the plane’s distance from the origin.`,
            a: `${sq(abs(vn))} = 169, ${s} = ${fr('26', '169')} = ${fr('2', '13')};<br>foot ${pt(fr('6', '13'), `−${fr('8', '13')}`, fr('24', '13'))};<br>distance ${fr('26', '13')} = 2.`,
          },
          {
            q: `The foot of the perpendicular from the origin to a plane is ${pt('2', '−1', '2')}. Find the plane.`,
            a: `2${x} − ${y} + 2${z} = 9.`,
          },
          {
            q: `Write the images of ${pt('3', '−4', '5')} in the ${YZ}-plane, and in the ${x}-axis.`,
            a: `In the ${YZ}-plane: ${pt('−3', '−4', '5')}; in the ${x}-axis: ${pt('3', '4', '−5')}.`,
          },
          {
            q: `Find the point where the shortest path from ${pt('0', '1', '1')} to ${pt('2', '3', '5')} touches the ${ZX}-plane, and the path’s length.`,
            a: `Reflect the far endpoint: ${Bp} = ${pt('2', '−3', '5')}; segment ${pt('0', '1', '1')} + ${t}${pt('2', '−4', '4')} hits ${rel(y, '=', '0')} at ${t} = ${fr('1', '4')}, so ${M} = ${pt(HALF, '0', '2')}; length ${abs(ABp)}${NB}=${NB}√(4${NB}+${NB}16${NB}+${NB}16)${NB}=${NB}6.`,
          },
          {
            q: `Prove the claim used in D3: every point of the ${ZX}-plane is equidistant from ${B}${pt(u, v, w)} and its image there.`,
            a: `For ${M} = ${pt(p, '0', q)}: ${sq(MB)} = (${p}${NB}−${NB}${u})<sup>2</sup> + ${sq(v)} + (${q}${NB}−${NB}${w})<sup>2</sup> while ${MBp}<sup>2</sup> with ${Bp} = ${pt(u, `−${v}`, w)} is (${p}${NB}−${NB}${u})<sup>2</sup> + ${sq(v)} + (${q}${NB}−${NB}${w})<sup>2</sup>: identical.`,
          },
          {
            q: `The foot of the perpendicular from the origin to a plane is ${pt('1', '1', '1')} and the plane passes through ${pt('3', '0', '0')}: find it, or declare the data inconsistent.`,
            a: `Consistent: the foot fixes ${x} + ${y} + ${z} = 3, and ${pt('3', '0', '0')} satisfies it; the plane is ${x} + ${y} + ${z} = 3.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic E · pp. 751–753 ────────────────
  {
    n: 'E',
    title: 'Locus Problems: Turning Geometry into Equations',
    extra: true,
    kalam: 'Linear means plane, quadratic with equal squared coefficients and no cross terms means sphere.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Every “find the locus of…” question in this chapter is the same move: name a generic point ${pt(x, y, z)}, translate the stated condition into an equation, and recognise the surface: linear means plane, quadratic with equal squared coefficients and no cross terms means a sphere (once the completed square leaves a positive number on the right). The chapter uses this machinery (Topic 05’s bisector planes) but never states it as a method, and JEE Main and Advanced both ask it cold.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>E1: Equidistance from two points: the perpendicular bisector plane.</b> Locus of ${P} with ${I('PA')} = ${I('PB')}. Square both sides and cancel the quadratic terms:<br>${sq(abs(`${vp} − ${va}`))} = ${sq(abs(`${vp} − ${vb}`))}<br>⟹ −2${NB}${dot(vp, va)} + ${sq(abs(va))} = −2${NB}${dot(vp, vb)} + ${sq(abs(vb))},<br>so${NB}${BISECT}.<br>A linear equation: a plane with normal ${vb} − ${va} (along the segment, as geometry demands) passing through the midpoint (substitute ${HALF}(${va} + ${vb}) to confirm).`,
      },
      {
        t: 'formula',
        kicker: 'Perpendicular bisector plane',
        main: BISECT,
        legend: [
          `${va}, ${vb} = the position vectors of the two fixed points`,
          `${vp} = the position vector of a point of the locus`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>E2: Feet of perpendiculars from the origin: a sphere on ${OP} as diameter.</b> Let every admissible plane pass through the fixed point ${P}, and let ${F} be the foot from ${O} to such a plane. The plane’s normal is parallel to ${vf} = ${vOF} and it contains both ${F} and ${P}, so the in-plane vector ${vp} − ${vf} is perpendicular to the normal:<br>(${vp} − ${vf})${NB}·${NB}${vf} = 0 ⟹ ${dot(vf, vp)} = ${sq(abs(vf))}.<br>Writing ${vf} = ${pt(x, y, z)} and ${vp} = ${pt(x0, y0, z0)}:<br>${SPHERE},<br>a sphere passing through ${O} and through ${P}, with centre ${HALF}${vp} and radius ${HALF}${abs(vp)}: the sphere on ${OP} as diameter. Complete the square to report it in standard form.`,
      },
      {
        t: 'formula',
        kicker: 'Locus of the feet of perpendiculars from the origin',
        main: SPHERE,
        legend: [
          `${pt(x0, y0, z0)} = the fixed point ${P} every plane passes through`,
          `${pt(x, y, z)} = the foot of the perpendicular from the origin`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>E3: Equidistance from two planes:</b> intersecting planes give the bisector pair of Topic 05; parallel planes ${a}${x} + ${b}${y} + ${c}${z} + ${d1} = 0 and ${a}${x} + ${b}${y} + ${c}${z} + ${d2} = 0 give the single mid-plane<br>${MID}.`,
      },
      {
        t: 'formula',
        kicker: 'Mid-plane of two parallel planes',
        main: MID,
        legend: [`${d1}, ${d2} = the constant terms of the two parallel planes`],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the locus of points equidistant from ${A}${pt('1', '2', '3')} and ${B}${pt('3', '4', '5')}, and verify it geometrically.`,
        steps: [
          `With ${vb} − ${va} = ${pt('2', '2', '2')} and ${sq(abs(vb))}${NB}−${NB}${sq(abs(va))}${NB}= 50${NB}−${NB}14${NB}=${NB}36:<br>2(2${x} + 2${y} + 2${z}) = 36 ⟹ ${x} + ${y} + ${z} = 9.`,
          `<b>Geometric verification:</b> the midpoint ${pt('2', '3', '4')} satisfies 2 + 3 + 4 = 9; the normal ${pt('1', '1', '1')} is parallel to ${vAB} = ${pt('2', '2', '2')}: it is the perpendicular bisector plane, exactly as E1 predicts.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Planes pass through the fixed point ${P}${pt('2', '4', '4')}. Find the locus of the foot of the perpendicular from the origin to these planes, and describe it.`,
        steps: [
          `By E2 with ${vp} = ${pt('2', '4', '4')}:<br>${sq(x)} + ${sq(y)} + ${sq(z)} = 2${x} + 4${y} + 4${z}.`,
          `Completing squares:<br>(${x} − 1)<sup>2</sup> + (${y} − 2)<sup>2</sup> + (${z} − 2)<sup>2</sup><br>= 1 + 4 + 4 = 9.`,
          `The locus is a sphere of radius 3 centred at ${pt('1', '2', '2')}: precisely ${HALF}${vp} and ${HALF}${abs(vp)}${NB}=${NB}3, the sphere on ${OP} as diameter. <b>Checks:</b> the origin satisfies 0 = 0; the point ${P} satisfies 4 + 16 + 16 = 4 + 16 + 16; both endpoints of the claimed diameter lie on the locus, as the theory demands.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the perpendicular bisector plane of the segment joining ${pt('2', '−1', '3')} and ${pt('4', '3', '−1')}.`,
            a: `${vb} − ${va} = ${pt('2', '4', '−4')}, ${sq(abs(vb))}${NB}−${NB}${sq(abs(va))}${NB}= 26${NB}−${NB}14${NB}=${NB}12; locus 2${x} + 4${y} − 4${z} = 6, i.e. ${x} + 2${y} − 2${z} = 3 (midpoint ${pt('3', '1', '1')} satisfies${NB}it).`,
          },
          {
            q: `Planes pass through the fixed point ${pt('1', '2', '2')}. Find the locus of the foot of the perpendicular from the origin, in standard form.`,
            a: `${sq(x)} + ${sq(y)} + ${sq(z)} = ${x} + 2${y} + 2${z}, i.e.<br>(${x} − ${HALF})<sup>2</sup> + (${y} − 1)<sup>2</sup> + (${z} − 1)<sup>2</sup> = ${fr('9', '4')}:<br>sphere, centre ${pt(HALF, '1', '1')}, radius ${fr('3', '2')}.`,
          },
          {
            q: `Find the locus of points equidistant from the parallel planes ${x} + ${y} + ${z} = 1 and ${x} + ${y} + ${z} = 7.`,
            a: `The mid-plane ${x} + ${y} + ${z} = 4.`,
          },
          {
            q: `Find the point on the ${z}-axis equidistant from ${pt('1', '2', '3')} and ${pt('2', '3', '4')}.`,
            a: `For ${pt('0', '0', t)}: ${sq(t)} − 6${t} + 14 = ${sq(t)} − 8${t} + 29 gives ${t} = ${fr('15', '2')};<br>point ${pt('0', '0', fr('15', '2'))}.`,
          },
          {
            q: 'Show that the locus in Question 2 always passes through the origin and the fixed point.',
            a: `Substituting ${pt('0', '0', '0')} gives 0 = 0; substituting ${pt('1', '2', '2')} gives 1 + 4 + 4 = 1 + 4 + 4: both satisfy the unsquared equation identically, confirming the diameter property for any fixed point.`,
          },
          {
            q: `Find the locus of points at distance 2 from the plane ${x} + 2${y} + 2${z} − 9 = 0.`,
            a: `${fr(abs(`${x} + 2${y} + 2${z} − 9`), '3')} = 2 splits into two parallel planes ${x} + 2${y} + 2${z} = 15 and ${x} + 2${y} + 2${z} = 3.`,
          },
        ],
      },
    ],
  },
];
