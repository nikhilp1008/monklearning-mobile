import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11 Three Dimensional Geometry, Topics 02–03, pp. 706–724 of the
 * Class 12 Mathematics Master Reference (October 2026 edition), word for word:
 *   Topic 02 = the book's Subtopic 02 "Shortest Distance & Angle Between Two
 *              Lines" (pp. 706–715),
 *   Topic 03 = Subtopic 03 "Planes in Space: Equations, Family, Angles &
 *              Distances" (title em dash → colon) (pp. 716–724; its header line's "JEE-only" mark is
 *              kept as the first words of its Exam relevance part).
 * The header lines ("Class 12 · Mathematics · Chapter 11 … · Subtopic 0N")
 * are not copied. Each topic opens with its "Exam Relevance:" box as a part of
 * its own, then is split at its Sections 1 to 8; the "Cheat Sheet Box" is the
 * part "Cheat sheet". "Subtopic" → "topic". Figures stand where their
 * captions are printed: 11.3 (caption p. 709, drawn p. 710) after Theorem 2's
 * statement; 11.4 (caption p. 718, drawn p. 719) after Theorem 1's statement.
 * A vector is its letters and the combining arrow (escaped ARW) inside one
 * <i> (decision 36); unit vectors with hats. Every fraction is stacked
 * (<frac>); a determinant over a root is written with ÷ (a grid cannot sit in
 * a fraction's half); no em dashes.
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
const hat = (s: string) => I(`${s}${HAT}`);
const ZERO = `0${ARW}`;
const ii = I('\u00ee');
const jj = I('\u0135');
const kk = hat('k');
const nh = hat('n');

const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const abs = (s: string) => `|${WJ}${s}|`;
const rt = (s: string) => `√(${s})`;
const rel = (lhs: string, op: string, rhs: string) => `${lhs}${NB}${op}${NB}${rhs}`;
/** A point or triple, its commas glued: (1, −1, 3). */
const pt = (...s: string[]) => `(${s.join(`,${NB}`)})`;
const dot = (u: string, v: string) => `${u}${NB}·${NB}${v}`;
const cosInv = (s: string) => `cos<sup>−1</sup>(${s})`;
const sinInv = (s: string) => `sin<sup>−1</sup>(${s})`;
const tanInv = (s: string) => `tan<sup>−1</sup>(${s})`;

const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const k = I('k');
const l = I('l');
const m = I('m');
const n = I('n');
const p = I('p');
const s = I('s');
const t = I('t');
const x = I('x');
const y = I('y');
const z = I('z');
const D = I('D');
const F = I('F');
const P = I('P');
const Q = I('Q');
const th = I('θ');
const ph = I('φ');
const al = I('α');
const la = I('λ');
const mu = I('μ');
const iI = I('i');

const COS = `cos${NB}${th}`;
const SIN = `sin${NB}${ph}`;
const x1 = sb(x, '1');
const x2 = sb(x, '2');
const x3 = sb(x, '3');
const y1 = sb(y, '1');
const y2 = sb(y, '2');
const y3 = sb(y, '3');
const z1 = sb(z, '1');
const z2 = sb(z, '2');
const z3 = sb(z, '3');
const a1 = sb(a, '1');
const a2 = sb(a, '2');
const b1 = sb(b, '1');
const b2 = sb(b, '2');
const c1 = sb(c, '1');
const c2 = sb(c, '2');
const d1 = sb(d, '1');
const d2 = sb(d, '2');
const l1 = sb(l, '1');
const l2 = sb(l, '2');
const m1 = sb(m, '1');
const m2 = sb(m, '2');
const n1 = sb(n, '1');
const n2 = sb(n, '2');
const L1 = sb(I('L'), '1');
const L2 = sb(I('L'), '2');
const P1 = sb(P, '1');
const P2 = sb(P, '2');
const XYZ1 = pt(x1, y1, z1);

// Vectors.
const va = V('a');
const vb = V('b');
const vc = V('c');
const vn = V('n');
const vr = V('r');
const va1 = `${va}<sub>1</sub>`;
const va2 = `${va}<sub>2</sub>`;
const vb1 = `${vb}<sub>1</sub>`;
const vb2 = `${vb}<sub>2</sub>`;
const vn1 = `${vn}<sub>1</sub>`;
const vn2 = `${vn}<sub>2</sub>`;
const A21 = `${va2}${NB}−${NB}${va1}`;
const B1XB2 = `${vb1}${NB}×${NB}${vb2}`;
/** The scalar triple product (a2 − a1) · (b1 × b2), the vectors with arrows. */
const STP = `(${A21})${NB}·${NB}(${B1XB2})`;
const SKEW = fr(abs(STP), abs(B1XB2));
const BXA = `${vb} × (${A21})`;
const PARD = fr(abs(BXA), abs(vb));
const B1B2 = dot(vb1, vb2);
const MODS_B = `${abs(vb1)}${abs(vb2)}`;
const COS_LINES = fr(abs(B1B2), MODS_B);
const DR_DOT = `${a1}${a2}${NB}+${NB}${b1}${b2}${NB}+${NB}${c1}${c2}`;
const DC_DOT = abs(`${l1}${l2}${NB}+${NB}${m1}${m2}${NB}+${NB}${n1}${n2}`);
const DR_COS = fr(abs(DR_DOT), `${rt(`${sq(a1)} + ${sq(b1)} + ${sq(c1)}`)}${NB}${rt(`${sq(a2)} + ${sq(b2)} + ${sq(c2)}`)}`);
const PARALLEL = `${fr(a1, a2)} = ${fr(b1, b2)} = ${fr(c1, c2)}`;
/** Each squared term glued, each "+" glued to the term after it: a wrap falls before a "+ (…)²", never inside a bracket. */
const CROSS_ROOT = rt(`(${b1}${c2}${NB}−${NB}${b2}${c1})<sup>2</sup> +${NB}(${c1}${a2}${NB}−${NB}${c2}${a1})<sup>2</sup> +${NB}(${a1}${b2}${NB}−${NB}${a2}${b1})<sup>2</sup>`);
const DET_LINES = vm([`${x2} − ${x1}`, `${y2} − ${y1}`, `${z2} − ${z1}`], [a1, b1, c1], [a2, b2, c2]);
const LINE1 = `${fr(`${x} − ${x1}`, a1)} = ${fr(`${y} − ${y1}`, b1)} = ${fr(`${z} − ${z1}`, c1)}`;
const LINE2 = `${fr(`${x} − ${x2}`, a2)} = ${fr(`${y} − ${y2}`, b2)} = ${fr(`${z} − ${z2}`, c2)}`;
/** A line in symmetric form through (p, q, r) with direction ratios (u, v, w). */
const sym = (px: string, py: string, pz: string, u: string, v: string, w: string) =>
  `${fr(`${x} ${px}`, u)} = ${fr(`${y} ${py}`, v)} = ${fr(`${z} ${pz}`, w)}`;
/** A vector i, j, k combination written from its three signed parts. */
const ijk = (...parts: string[]) => parts.join(' ');

// Planes.
const vN = V('N');
const N1N2 = dot(vn1, vn2);
const COS_PLANES = fr(abs(N1N2), `${abs(vn1)}${abs(vn2)}`);
const BN = dot(vb, vn);
const SIN_LP = fr(abs(BN), `${abs(vb)}${abs(vn)}`);
const ROOT_ABC = rt(`${sq(a)} + ${sq(b)} + ${sq(c)}`);
const PLANE_AT = `${a}${x1} + ${b}${y1} + ${c}${z1} + ${d}`;
const POINT_PLANE = fr(abs(PLANE_AT), ROOT_ABC);
const PAR_PLANES = fr(abs(`${d1} − ${d2}`), ROOT_ABC);
const PLANE = `${a}${x} + ${b}${y} + ${c}${z} + ${d} = 0`;
const RN = dot(vr, vn);
const RNH = dot(vr, nh);
const PN_VEC = `(${vr}${NB}−${NB}${va})${NB}·${NB}${vn}${NB}=${NB}0`;
/** Glued whole: it fits a reading line, and a wrap left "+ b(y − y₁) + …" opening a line. */
const PN_CART = `${a}(${x}${NB}−${NB}${x1})${NB}+${NB}${b}(${y}${NB}−${NB}${y1})${NB}+${NB}${c}(${z}${NB}−${NB}${z1})${NB}=${NB}0`;
/** The same for a narrow table cell: each term glued, a wrap only before a "+", "= 0" kept with the last term. */
const PN_CART_CELL = `${a}(${x}${NB}−${NB}${x1})${NB}+ ${b}(${y}${NB}−${NB}${y1})${NB}+ ${c}(${z}${NB}−${NB}${z1})${NB}=${NB}0`;
const BA_CA = `(${vb}${NB}−${NB}${va})${NB}×${NB}(${vc}${NB}−${NB}${va})`;
const DET_PLANE = vm(
  [`${x} − ${x1}`, `${y} − ${y1}`, `${z} − ${z1}`],
  [`${x2} − ${x1}`, `${y2} − ${y1}`, `${z2} − ${z1}`],
  [`${x3} − ${x1}`, `${y3} − ${y1}`, `${z3} − ${z1}`],
);
const INTERCEPT = `${fr(x, a)} + ${fr(y, b)} + ${fr(z, c)} = 1`;
const FAMILY = `${P1} + ${la}${P2} = 0`;
const F0 = sb(F, '0');
const F0x = sb(F, `0${x}`);
const F0y = sb(F, `0${y}`);
const F0z = sb(F, `0${z}`);

export const TOPICS: Topic[] = [
  // ──────────────── Topic 02 · pp. 706–715 ────────────────
  {
    n: '02',
    title: 'Shortest Distance & Angle Between Two Lines',
    kalam: 'The shortest segment connecting two skew lines is special: it is perpendicular to both lines at once.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A guaranteed scorer. CBSE Boards regularly carry a 3–5 mark shortest-distance problem and a short angle-between-lines question ${ESTIMATE}. JEE Main asks 1–2 every year ${ESTIMATE}, usually a direct shortest-distance computation or a “find the parameter so the lines intersect” coplanarity question. JEE Advanced layers it: skew-distance feeds into plane and locus problems. (NEET has no Mathematics; ladder runs CBSE${NB}→${NB}CUET/JEE Main${NB}→${NB}JEE${NB}Advanced.)`,
      },
      {
        t: 'p',
        html: 'This is a <b>merged topic</b> with two tightly related halves: <b>(02a)</b> the angle between two lines, and <b>(02b)</b> the shortest distance between two lines. The scalar triple product quietly powers both.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Imagine two Delhi Metro tunnels being bored deep under the city. They never meet and they aren’t parallel: one runs roughly north-east and gently downward, the other east and slightly up. Two natural questions arise. First: at what angle are they set to each other, once both directions are slid to a common point? Second: what is the thinnest wall of earth between them, the closest the two tunnels ever come? The first question is the <b>angle between two lines</b>; the second is the <b>shortest distance</b>. Lines in space that neither meet nor run parallel, like these tunnels, are called <b>skew lines</b>, and they are the heart of this topic.',
      },
      {
        t: 'p',
        html: `<b>Angle first.</b> Here is the liberating idea: the angle between two lines depends only on their directions, never on where they sit. So to measure the angle between our two tunnels, we don’t need them to touch: we just slide both directions to a common point and measure between the arrows. That is exactly the dot product at work. If ${vb1} and ${vb2} are direction vectors of the two lines, then ${COS} = ${fr(B1B2, MODS_B)}. There is one subtlety: a line points two opposite ways, so the dot product might come out negative, suggesting an obtuse angle. By convention we report the <b>acute</b> angle between two lines, so we wrap the numerator in a modulus.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> the dot product is a “sameness meter.” When two directions align it is large and positive; when they’re perpendicular it is exactly zero; when they oppose it is large and negative. Strip the sign with a modulus and you have the cosine of the sharp angle between the lines. This instantly hands you two free tests: the lines are <b>perpendicular</b> when ${B1B2} = 0, and <b>parallel</b> when ${vb1} and ${vb2} are proportional.`,
      },
      {
        t: 'p',
        html: `<b>Now the shortest distance.</b> Picture again the thinnest wall between the tunnels. The shortest segment connecting two skew lines is special: it is <b>perpendicular to both</b> lines at once. Think of two pencils held crookedly in the air: the shortest gap between them is bridged by a third tiny stick that meets both pencils at right angles. Which direction must that bridging stick point? Perpendicular to both ${vb1} and ${vb2} simultaneously, and the cross product ${B1XB2} is built to be exactly that. So the shortest distance is found by taking any line joining the two lines (the vector ${A21} between their reference points) and measuring only its component along that common-perpendicular direction. Everything else in ${A21} runs along the tunnels and doesn’t count toward the gap. For two parallel lines the picture is gentler still: since they never tilt relative to one another, the gap is identical at every point, so we simply measure the perpendicular distance from any single point of one line across to the other.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> the scalar triple product ${STP} is the volume of the slanted box (parallelepiped) built on those three vectors. Divide that volume by the area of its base ${abs(B1XB2)} and you get its height, and the height is the perpendicular gap. Distance is volume per unit base area.`,
      },
      {
        t: 'p',
        html: `Before computing anything, it pays to know which of three situations you are in, because each behaves differently. Two distinct lines in space can (i) <b>intersect</b> (sharing exactly one point, so the shortest distance is zero); (ii) be <b>parallel</b> (the same direction, never meeting, a constant gap everywhere); or (iii) be <b>skew</b> (different directions yet still never meeting, like our two tunnels). Only inside a single plane are “not parallel” and “intersecting” the same statement; space adds the genuinely three-dimensional third option of skewness. One quantity separates the cases cleanly: the scalar triple product ${STP} is <b>zero</b> for intersecting and parallel lines (both are coplanar) and <b>non-zero</b> exactly for skew lines. Combine that with a glance at whether ${vb1} and ${vb2} are proportional, and all three are told apart with no heavy algebra.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions:</b><br>• The cross-product formula ${SKEW} works for any two <b>non-parallel</b> lines (it gives 0 when they intersect). For <b>parallel</b> lines ${B1XB2} = ${ZERO} and you’d divide by zero: a different formula is needed.`,
      },
      {
        t: 'p',
        html: '• If the shortest distance comes out <b>zero</b>, the lines are not skew at all: they <b>intersect</b> (or coincide). “Shortest distance = 0” is the working definition of “the lines meet”. It implies the <b>coplanarity</b> condition, but not the other way round: two distinct parallel lines are coplanar yet never meet.',
      },
      {
        t: 'p',
        html: '• The angle formula assumes genuine direction vectors (non-zero). The modulus is non-negotiable if you want the acute angle.',
      },
      {
        t: 'p',
        html: '• Once the modulus is applied the reported angle always lies in [0°, 90°]: a line with itself gives 0°, perpendicular lines give 90°, and the value never strays outside that band, a useful sanity bound on any answer.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: 'These are dimensionless or length quantities; there are no SI units beyond “units of length” for distance. The governing relations:',
      },
      {
        t: 'p',
        html: `<b>Angle between two lines (02a).</b> With direction vectors ${vb1}, ${vb2} (or direction ratios ${a1}, ${b1}, ${c1} and ${a2}, ${b2}, ${c2}, or direction cosines ${sb(l, iI)}, ${sb(m, iI)}, ${sb(n, iI)}):`,
      },
      {
        t: 'formula',
        kicker: 'Angle between two lines',
        main: `${COS} = ${COS_LINES}<br><br>= ${DR_COS}<br>= ${DC_DOT}`,
        legend: [
          `${th} = acute angle between the lines`,
          `${vb1}, ${vb2} = direction vectors`,
          `${sb(a, iI)}, ${sb(b, iI)}, ${sb(c, iI)} = direction ratios of line ${iI}`,
          `${sb(l, iI)}, ${sb(m, iI)}, ${sb(n, iI)} = direction cosines of line ${iI}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'All three expressions say the same thing: the cosine of the acute angle is the normalised, sign-stripped overlap of the two directions; choose whichever form matches the data you are handed (vectors, ratios, or cosines).',
      },
      {
        t: 'p',
        html: '<b>Perpendicular & parallel tests (02a).</b>',
      },
      {
        t: 'formula',
        kicker: 'Perpendicular & parallel tests',
        main: `Perpendicular:<br>${DR_DOT}${NB}=${NB}0<br>Parallel: ${PARALLEL}`,
        legend: [`${a1}, ${b1}, ${c1} = direction ratios of the first line`, `${a2}, ${b2}, ${c2} = direction ratios of the second line`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Shortest distance between skew lines (02b)</b>: vector form, for ${vr} = ${va1} + ${la}${vb1} and ${vr} = ${va2} + ${mu}${vb2}:`,
      },
      {
        t: 'formula',
        kicker: 'Shortest distance between skew lines (vector form)',
        main: `${d} = ${SKEW}`,
        legend: [
          `${d} = shortest distance`,
          `${va1}, ${va2} = position vectors of a known point on each line`,
          `${vb1}, ${vb2} = direction vectors`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Shortest distance: Cartesian determinant form (02b).</b> For lines<br>${LINE1}<br>and ${LINE2},<br>the numerator is the absolute value of the determinant (a distance is never negative) and the denominator is ${abs(B1XB2)}:`,
      },
      {
        t: 'formula',
        kicker: 'Shortest distance (Cartesian determinant form)',
        main: `${d} = ${fr(abs('Δ'), abs(B1XB2))}<br>Δ = ${DET_LINES}<br>${abs(B1XB2)} = ${CROSS_ROOT}`,
        legend: [
          `${d} = shortest distance`,
          `${XYZ1} = a known point on the first line`,
          `${pt(x2, y2, z2)} = a known point on the second line`,
          `${a1}, ${b1}, ${c1} = direction ratios of the first line`,
          `${a2}, ${b2}, ${c2} = direction ratios of the second line`,
          `Δ = the determinant, taken as its absolute value, so that ${d} ≥ 0`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Coplanarity / intersection condition (02b).</b> The two lines are coplanar (they intersect or are parallel) if and only if',
      },
      {
        t: 'formula',
        kicker: 'Coplanarity condition (intersecting or parallel lines)',
        main: `${STP} = 0<br>⟺ ${DET_LINES} = 0`,
        legend: [
          `${va1}, ${va2} = position vectors of a known point on each line`,
          `${vb1}, ${vb2} = direction vectors`,
          `${XYZ1} = a known point on the first line`,
          `${pt(x2, y2, z2)} = a known point on the second line`,
          `${a1}, ${b1}, ${c1} = direction ratios of the first line`,
          `${a2}, ${b2}, ${c2} = direction ratios of the second line`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: '(The determinant is simply the scalar triple product written as a 3 × 3 array, so the coplanarity test and the shortest-distance numerator are one and the same object: compute it once and it answers both questions.)',
      },
      {
        t: 'p',
        html: `<b>Shortest distance between parallel lines (02b)</b>: direction ${vb} shared:`,
      },
      {
        t: 'formula',
        kicker: 'Shortest distance between parallel lines',
        main: `${d} = ${PARD}`,
        legend: [
          `${d} = shortest distance`,
          `${vb} = the shared direction vector`,
          `${va1}, ${va2} = position vectors of a known point on each line`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Notation key:</b> ${va1}, ${va2} = position vectors of a known point on each line; ${vb1}, ${vb2} = direction vectors; ${th} = acute angle between the lines; ${d} = shortest distance; ${B1XB2}${NB}= the common-perpendicular direction; ${STP}${NB}= scalar triple product (a signed volume).`,
      },
      {
        t: 'table',
        title: null,
        head: ['Configuration', 'Quick test', 'Shortest distance'],
        rows: [
          ['Intersecting', 'STP = 0, not parallel', '0'],
          ['Parallel', `${vb1} ∥ ${vb2}`, `${NB}<br>${PARD}`],
          ['Skew', 'STP ≠ 0', `${NB}<br>${SKEW}`],
        ],
      },

      { t: 'part', title: 'Theorems and proofs' },
      {
        t: 'p',
        html: `<b>Theorem 1 (angle between two lines).</b> The acute angle ${th} between lines with direction vectors ${vb1}, ${vb2} satisfies ${COS} = ${COS_LINES}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> The angle between two lines is defined as the angle between their directions, so we may translate both direction vectors to a common origin without changing it. By the definition of the dot product, ${B1B2} = ${MODS_B} cos${NB}${ph}, where ${ph} is the angle between the two vectors. Rearranging, cos${NB}${ph} = ${fr(B1B2, MODS_B)}. Because each line has two opposite direction vectors, ${ph} could be either ${th} or π − ${th}; taking the modulus selects the <b>acute</b> value ${th}. Writing ${vb}<sub>${iI}</sub> in components gives the direction-ratio form, and if the ${vb}<sub>${iI}</sub> are unit vectors (i.e. their components are direction cosines), the denominator is 1 and we get ${COS}${NB}=${NB}${DC_DOT}.${NB}■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2 (shortest distance between skew lines).</b> For ${L1}${NB}:${NB}${vr} = ${va1} + ${la}${vb1} and ${L2}${NB}:${NB}${vr} = ${va2} + ${mu}${vb2}, the shortest distance is ${d} = ${SKEW}.`,
      },
      { t: 'fig', id: 'm12-11-fig-11.3' },
      {
        t: 'p',
        html: `<b>Proof.</b> The shortest segment between two skew lines is perpendicular to both lines simultaneously. The cross product ${B1XB2} is, by construction, perpendicular to both ${vb1} and ${vb2}, so it points along this common perpendicular. The corresponding unit vector is ${nh} = ${fr(B1XB2, abs(B1XB2))}. Now take the vector ${A21} joining a point of ${L1} to a point of ${L2}. The shortest distance is precisely the length of the projection of ${A21} onto ${nh}, because the components of ${A21} lying along either line contribute nothing to the perpendicular gap:<br>${d} = ${abs(`(${A21})${NB}·${NB}${nh}`)}<br>= ${SKEW}.<br>The modulus guarantees a non-negative length, since projections can be signed. ■`,
      },
      {
        t: 'p',
        html: `<b>Corollary (coplanarity condition: intersecting or parallel lines).</b> Setting ${rel(d, '=', '0')} forces the scalar triple product ${STP} = 0. Geometrically this says the three vectors ${A21}, ${vb1}, ${vb2} are coplanar (the slanted box collapses to zero volume), so the two lines lie in one plane and therefore <b>intersect</b> (or are parallel). In Cartesian form this is exactly the determinant of {${A21}; ${vb1}; ${vb2}} equated to zero.`,
      },
      {
        t: 'p',
        html: `<b>Why parallel lines need a different formula.</b> If ${vb1} and ${vb2} are parallel, ${B1XB2} = ${ZERO} and Theorem 2 collapses to ${fr('0', '0')}. Instead, fix the common direction ${vb} and resolve ${A21} into a part along ${vb} and a part perpendicular to it; the perpendicular part is the gap. Its length is<br>${d} = ${PARD},<br>since ${abs(BXA)} = ${abs(vb)}${abs(A21)} sin${NB}${al} already isolates exactly the perpendicular component, where ${al} is the angle between the vectors ${vb} and ${A21}.`,
      },
      {
        t: 'p',
        html: `<b>From vector to Cartesian (where the determinant comes from).</b> Writing the scalar triple product in components makes the determinant formula appear on its own. A triple product ${dot(V('u'), `(${V('v')} × ${V('w')})`)} is exactly the 3 × 3 determinant whose rows are ${V('u')}, ${V('v')}, ${V('w')}. So with ${V('u')} = ${A21} = (${x2} − ${x1}, ${y2} − ${y1}, ${z2} − ${z1}) as the top row and ${vb1} = ${pt(a1, b1, c1)}, ${vb2} = ${pt(a2, b2, c2)} beneath it, the numerator of the Cartesian shortest-distance formula is literally that determinant. The denominator ${abs(B1XB2)} expands to<br>${CROSS_ROOT}.<br>The imposing Cartesian formula is therefore just Theorem 2 written out coordinate by coordinate: no new content to memorise.`,
      },
      {
        t: 'p',
        html: `<b>Corollary (the two quick tests).</b> Both classroom tests drop straight out of Theorem 1. Perpendicular lines have ${rel(th, '=', '90°')}, so ${COS}${NB}=${NB}0, which forces the numerator ${B1B2} = ${DR_DOT}${NB}=${NB}0. Parallel lines have ${rel(th, '=', '0°')}, so ${COS}${NB}=${NB}1, which is reached only when ${vb1} and ${vb2} point the same way or exactly opposite ways, that is, when their components are proportional,<br>${PARALLEL}.<br>The two “rules” are not separate facts but the two extreme values of one cosine.`,
      },
      {
        t: 'p',
        html: '<b>Geometric remark (why “the” shortest distance is well-defined).</b> For two skew lines there is exactly one segment perpendicular to both, and its endpoints are the unique closest points on each line. That uniqueness is what lets us say the shortest distance rather than a short distance. For intersecting lines the segment shrinks to the single shared point (length zero); for parallel lines there are infinitely many perpendicular segments, all of equal length, which is exactly why the constant-gap formula gives the same answer from any starting point. This existence-and-uniqueness is special to three dimensions: in a plane two non-parallel lines are forced to cross, leaving no room for a perpendicular bridge of positive length.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level (Angle)',
        q: `Find the acute angle between the lines<br>${sym('− 1', '+ 1', '− 3', '2', '−1', '2')}<br>and ${sym('− 2', '− 1', '+ 4', '1', '2', '2')}.`,
        steps: [
          `Direction ratios: ${vb1}${NB}=${NB}${pt('2', '−1', '2')}, ${vb2}${NB}=${NB}${pt('1', '2', '2')}.`,
          `${B1B2} = (2)(1) + (−1)(2) + (2)(2)<br>= 2 − 2 + 4 = 4.`,
          `${abs(vb1)}${NB}=${NB}${rt(`4${NB}+${NB}1${NB}+${NB}4`)}${NB}=${NB}3, ${abs(vb2)}${NB}=${NB}${rt(`1${NB}+${NB}4${NB}+${NB}4`)}${NB}=${NB}3.`,
          `${COS} = ${fr('|4|', `3${NB}·${NB}3`)} = ${fr('4', '9')} ⇒ ${th} = ${cosInv(fr('4', '9'))}.`,
          `Had the dot product come out negative, say −4, the modulus would still return ${th} = cos<sup>−1</sup>${NB}${fr('4', '9')}. The equations describe the same pair of lines regardless of which way we choose to walk along each, so only the acute angle carries meaning.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / JEE Main Speed Trap (Perpendicular & Parallel tests)',
        q: `(a) Show that the lines with direction ratios ${pt('2', '−1', '1')} and ${pt('1', '1', '−1')} are perpendicular. (b) Find ${p} so that the line with direction ratios ${pt('3', p, '2')} is parallel to the line with ratios ${pt('6', '−4', '4')}.`,
        steps: [
          '(a) Perpendicularity needs only a single dot product, no angle computation:<br>(2)(1) + (−1)(1) + (1)(−1) = 2 − 1 − 1 = 0 ⇒ perpendicular.',
          `(b) Parallelism needs only ratio equality:<br>${fr('3', '6')} = ${fr(p, '−4')} = ${fr('2', '4')}<br>⇒ ${fr('1', '2')} = ${fr(p, '−4')}<br>⇒ ${p} = −2 (check ${fr('2', '4')} = ${fr('1', '2')} ✓).`,
          `<b>The trap:</b> students reach for the full ${COS} formula for part (a) (slow, and easy to fumble the modulus) or mix up the two tests, checking proportionality for perpendicularity. Lock it in: <b>dot product = 0 means perpendicular; equal ratios mean parallel.</b> A reliable habit is to write the dot product first: if it is zero you are finished (perpendicular), and only if it isn’t is it worth checking proportionality for parallelism or computing a full angle.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main · Multi-concept (Shortest distance, vector form)',
        q: `Find the shortest distance between the skew lines ${vr} = (${ijk(ii, '+', `2${jj}`, '−', kk)}) + ${la}(${ijk(`2${ii}`, '+', jj, '−', `2${kk}`)}) and ${vr} = (${ijk(`3${ii}`, '−', jj, '+', kk)}) + ${mu}(${ijk(ii, '+', `2${jj}`, '+', `2${kk}`)}).`,
        steps: [
          `Here ${va1} = ${pt('1', '2', '−1')}, ${vb1} = ${pt('2', '1', '−2')} and ${va2} = ${pt('3', '−1', '1')}, ${vb2} = ${pt('1', '2', '2')}. First the common perpendicular:<br>${B1XB2} = ${vm([ii, jj, kk], ['2', '1', '−2'], ['1', '2', '2'])}<br>= ${ii}(1${NB}·${NB}2 − (−2)${NB}·${NB}2)<br>− ${jj}(2${NB}·${NB}2 − (−2)${NB}·${NB}1)<br>+ ${kk}(2${NB}·${NB}2 − 1${NB}·${NB}1)<br>= ${pt('6', '−6', '3')}.`,
          `${abs(B1XB2)} = ${rt('36 + 36 + 9')} = √81 = 9.`,
          `Joining vector ${A21} = ${pt('2', '−3', '2')}. The scalar triple product:<br>${STP}<br>= (2)(6) + (−3)(−6) + (2)(3)<br>= 12 + 18 + 6 = 36.`,
          `${d} = ${fr('|36|', '9')} = 4 units.`,
          `Quick check that we projected along the genuine common perpendicular: ${B1XB2} = ${pt('6', '−6', '3')} should be perpendicular to both directions, and indeed ${dot(pt('6', '−6', '3'), pt('2', '1', '−2'))} = 12 − 6 − 6 = 0 and ${dot(pt('6', '−6', '3'), pt('1', '2', '2'))} = 6 − 12 + 6 = 0. The multi-concept thread: a cross product (to find the common perpendicular), then a dot product (to project the joining vector), then a magnitude: three vector operations chained into one distance.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced (Coplanarity / find the parameter)',
        q: `Find ${k} for which the lines<br>${sym('− 2', '− 1', '+ 1', '1', '2', '3')}<br>and ${fr(`${x} − 1`, '3')} = ${fr(`${y} − ${k}`, '2')} = ${fr(`${z} − 2`, '1')}<br>are coplanar, and locate their point of intersection.`,
        steps: [
          `Apply the coplanarity determinant with ${A21} = (1 − 2, ${k} − 1, 2 − (−1)) = ${pt('−1', `${k} − 1`, '3')}, ${vb1} = ${pt('1', '2', '3')}, ${vb2} = ${pt('3', '2', '1')}:<br>${vm(['−1', `${k} − 1`, '3'], ['1', '2', '3'], ['3', '2', '1'])} = 0.`,
          `Expanding along the first row:<br>−1(2${NB}·${NB}1 − 3${NB}·${NB}2) − (${k} − 1)(1${NB}·${NB}1 − 3${NB}·${NB}3) + 3(1${NB}·${NB}2 − 2${NB}·${NB}3)<br>= −1(−4) − (${k} − 1)(−8) + 3(−4)<br>= 4 + 8(${k} − 1) − 12 = 8${k} − 16 = 0 ⇒ ${k} = 2.`,
          `With ${k} = 2, write general points ${P} = (2 + ${t}, 1 + 2${t}, −1 + 3${t}) on ${L1} and ${Q} = (1 + 3${s}, 2 + 2${s}, 2 + ${s}) on ${L2}. Equating coordinates: ${t} − 3${s} = −1, 2${t} − 2${s} = 1, 3${t} − ${s} = 3. Solving the first two gives ${s} = ${fr('3', '4')}, ${t} = ${fr('5', '4')} (consistent with the third). The intersection point is<br>(${fr('13', '4')}, ${fr('7', '2')}, ${fr('11', '4')}).`,
          `As a check, both general points should land here: on ${L1}, ${t} = ${fr('5', '4')} gives<br>(2 + ${fr('5', '4')}, 1 + ${fr('5', '2')}, −1 + ${fr('15', '4')}),<br>and on ${L2}, ${s} = ${fr('3', '4')} gives<br>(1 + ${fr('9', '4')}, 2 + ${fr('3', '2')}, 2 + ${fr('3', '4')}):<br>both equal (${fr('13', '4')}, ${fr('7', '2')}, ${fr('11', '4')}), exactly as coplanarity promised. The deeper idea: coplanarity is a single scalar equation (the triple product), so a one-parameter family of line pairs has exactly the special values of ${k} that make them meet.`,
        ],
        ans: `${k} = 2; the lines meet at (${fr('13', '4')}, ${fr('7', '2')}, ${fr('11', '4')})`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the acute angle between the lines<br>${fr(`${x} − 1`, '1')} = ${fr(`${y} − 2`, '2')} = ${fr(z, '2')}<br>and ${fr(x, '2')} = ${fr(`${y} + 1`, '2')} = ${fr(`${z} − 3`, '1')}.`,
            a: cosInv(fr('8', '9')),
          },
          {
            q: `<b>[CUET / JEE Main]</b> Find ${p} if the lines with direction ratios ${pt('3', '−2', p)} and ${pt('2', p, '−1')} are perpendicular.`,
            a: `${p} = 2`,
          },
          {
            q: `<b>[JEE Main]</b> Find the shortest distance between ${vr} = (${ijk(ii, '+', jj)}) + ${la}(${ijk(`2${ii}`, '−', jj, '+', kk)}) and ${vr} = (${ijk(`2${ii}`, '+', jj, '−', kk)}) + ${mu}(${ijk(`3${ii}`, '−', `5${jj}`, '+', `2${kk}`)}).`,
            a: `${fr('10', '√59')} units`,
          },
          {
            q: `<b>[JEE Main]</b> Determine whether the lines<br>${sym('− 1', '− 2', '− 4', '2', '3', '4')}<br>and ${sym('− 2', '− 3', '− 5', '3', '4', '5')}<br>are coplanar.`,
            a: `Coplanar (the determinant evaluates${NB}to${NB}0)`,
          },
          {
            q: `<b>[JEE Advanced]</b> Find the shortest distance between the parallel lines ${vr} = (${ijk(ii, '+', `2${jj}`, '−', `3${kk}`)}) + ${la}(${ijk(`2${ii}`, '+', `3${jj}`, '−', `6${kk}`)}) and ${vr} = (${ijk(`3${ii}`, '−', jj, '+', kk)}) + ${mu}(${ijk(`2${ii}`, '+', `3${jj}`, '−', `6${kk}`)}).`,
            a: `${fr('2√145', '7')} units`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The acute angle between the lines with direction ratios ${pt('1', '2', '2')} and ${pt('2', '−1', '−2')} is`,
        opts: [
          { label: cosInv(fr('4', '9')), nudge: null },
          {
            label: cosInv(`−${fr('4', '9')}`),
            nudge: '<b>(B)</b> keeps the negative sign and reports the obtuse angle: the single most common error here.',
          },
          {
            label: cosInv(fr('4', '3')),
            nudge: '<b>(C)</b> forgets to multiply the two magnitudes in the denominator (using 3 instead of 9), giving an impossible cos > 1.',
          },
          { label: '90°', nudge: '<b>(D)</b> assumes a small/negative dot product means perpendicular.' },
        ],
        correct: 0,
        solution: `Dot product = (1)${WJ}(2)${NB}+${NB}(2)${WJ}(−1)${NB}+${NB}(2)${WJ}(−2)${NB}= 2${NB}−${NB}2${NB}−${NB}4${NB}=${NB}−4; magnitudes are 3${NB}and${NB}3. The acute angle uses the modulus: ${COS} = ${fr('|−4|', '9')} = ${fr('4', '9')}.`,
      },
      {
        t: 'mcq',
        q: `The shortest distance between two <b>parallel</b> lines ${vr} = ${va1} + ${la}${vb} and ${vr} = ${va2} + ${mu}${vb} is`,
        opts: [
          {
            label: SKEW,
            nudge: `<b>(A)</b> is the skew-line formula, which is undefined here because ${vb} × ${vb} = ${ZERO}; applying it blindly is the classic parallel-line trap.`,
          },
          { label: PARD, nudge: null },
          {
            label: abs(A21),
            nudge: '<b>(C)</b> is the full separation of the reference points, which over-counts the part running along the lines.',
          },
          { label: '0', nudge: '<b>(D)</b> is true only for coincident lines.' },
        ],
        correct: 1,
        solution: `For parallel lines the direction is shared, so the gap is the perpendicular component of ${A21} relative to ${vb}.`,
      },
      {
        t: 'mcq',
        q: `The shortest distance between ${vr} = (${ijk(`2${ii}`, '−', jj)}) + ${la}(${ijk(ii, '−', jj, '+', kk)}) and ${vr} = (${ijk(`3${ii}`, '+', kk)}) + ${mu}(${ijk(`2${ii}`, '+', jj, '−', kk)}) is`,
        opts: [
          { label: '√2', nudge: null },
          { label: '2√2', nudge: `<b>(B)</b> is a slip in simplifying ${fr('6', '3√2')}.` },
          { label: '6', nudge: `<b>(C)</b> reports the triple product 6 without dividing by ${abs(B1XB2)}.` },
          { label: '3√2', nudge: `<b>(D)</b> reports ${abs(B1XB2)} = 3√2 itself.` },
        ],
        correct: 0,
        solution: `${B1XB2} = ${pt('0', '3', '3')}, so ${abs(B1XB2)} = √18 = 3√2. With ${A21} = ${pt('1', '1', '1')}, the triple product is 0 + 3 + 3 = 6, hence ${d} = ${fr('6', '3√2')} = √2.`,
      },
      {
        t: 'mcq',
        q: `Two lines ${vr} = ${va1} + ${la}${vb1} and ${vr} = ${va2} + ${mu}${vb2} are coplanar if and only if`,
        opts: [
          { label: `${B1B2} = 0`, nudge: '<b>(A)</b> is the perpendicular condition.' },
          { label: `${STP} = 0`, nudge: null },
          { label: `${B1XB2} = ${ZERO}`, nudge: '<b>(C)</b> is the parallel condition.' },
          {
            label: `(${A21})${NB}·${NB}${vb1} = 0`,
            nudge: `<b>(D)</b> merely says ${A21} is perpendicular to one direction, which neither implies nor is implied by coplanarity.`,
          },
        ],
        correct: 1,
        solution: 'Coplanarity means the joining vector and the two directions lie in one plane: their scalar triple product (signed volume) vanishes.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Dropping the modulus in the angle formula.</b> A negative dot product yields an obtuse value; the angle between two lines is always reported as acute.',
          `<b>Treating ${B1B2} as ${COS}.</b> You must divide by both magnitudes; forgetting the denominator can even give ${COS} > 1.`,
          `<b>Swapping the perpendicular and parallel tests.</b> Perpendicular${NB}⇒${NB}dot product = 0; parallel${NB}⇒${NB}ratios equal. Students routinely apply the wrong one.`,
          `<b>Using the skew formula on parallel lines.</b> If ${vb1} ∥ ${vb2} then ${B1XB2} = ${ZERO} and the skew formula divides by zero: switch${NB}to${NB}${PARD}.`,
          '<b>Forgetting the modulus on the triple product.</b> Distance is never negative; the scalar triple product can be.',
          '<b>Not recognising coplanar ⟺ STP = 0.</b> “Show the lines intersect” is the same as “show the determinant is zero and the lines are not parallel.”',
          `<b>Pairing a point with the wrong line.</b> In ${A21}, each ${va}<sub>${iI}</sub> must be the reference point of its own line ${sb(I('L'), iI)}. Subtracting ${va1} from a second point of ${L1} (instead of a point of ${L2}), or mixing ${va1} with ${vb2}, silently corrupts the entire triple product.`,
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (sanity checks):</b> Before computing a shortest distance, glance at the two direction vectors. If they’re proportional, stop: the lines are parallel and the skew formula will fail; use the parallel formula. If the scalar triple product comes out 0, the lines meet and the distance is 0; don’t keep dividing. And every “distance” answer must be ≥ 0: a negative result means you forgot a modulus.',
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (cross product once):</b> In a shortest-distance problem, compute ${B1XB2} first. Its magnitude is your denominator and its zero-ness immediately tells you whether the lines are parallel: two pieces of information from one calculation.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Angles (02a)</b>',
            note: `${COS} = ${COS_LINES} = ${DC_DOT}: always the <b>acute</b> angle.<br>Perpendicular${NB}⇔${NB}${DR_DOT}${NB}=${NB}0. Parallel${NB}⇔${NB}${PARALLEL}.`,
          },
          {
            f: '<b>Shortest distance (02b)</b>',
            note: `Skew: ${d} = ${SKEW} (“volume${NB}÷${NB}base${NB}area”).<br>Parallel: ${d} = ${PARD}.<br>Coplanar (intersecting or parallel)${NB}⇔<br>${STP}${NB}=${NB}0${NB}⇔ determinant${NB}=${NB}0.`,
          },
        ],
        aids: [
          '“Cross to bridge, dot to project”: cross product finds the common perpendicular, dot product measures along it.',
          `“Acute by modulus”: wrap the angle numerator in |${WJ}${NB}·${NB}|.`,
          '“Zero volume, they meet”: STP = 0 means the lines are coplanar, so they meet unless they are parallel.',
          `“Parallel? cross dies”: proportional directions kill ${B1XB2}; use the parallel formula.`,
        ],
      },
    ],
  },
  // ──────────────── Topic 03 · pp. 716–724 ────────────────
  {
    n: '03',
    title: 'Planes in Space: Equations, Family, Angles & Distances',
    kalam: 'A plane is the flattest, most unbending surface in space: an infinite tabletop.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `<b>JEE only:</b> A JEE workhorse. The plane was removed from the rationalized CBSE Board syllabus, so this topic is built for JEE Main and Advanced only. JEE Main reliably carries 2–3 questions a year ${ESTIMATE}: a plane equation, an angle or distance, and very often a family-of-planes problem. JEE Advanced fuses planes with lines, spheres, and loci. (No CBSE Board worked example here; the ladder runs JEE Main warm-up${NB}→${NB}CUET/JEE Main Speed Trap${NB}→${NB}JEE Main multi-concept${NB}→${NB}JEE${NB}Advanced.)`,
      },
      {
        t: 'p',
        html: 'This is a broad <b>merged topic</b> with four diagnostic units: <b>(03a)</b> equations & forms of a plane, <b>(03b)</b> the family of planes through a line of intersection, <b>(03c)</b> angles (plane–plane and line–plane), and <b>(03d)</b> distances (point–plane and between parallel planes).',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `A plane is the flattest, most unbending surface in space: an infinite tabletop. The remarkable thing is how little information it takes to fix one completely: <b>a single point on it, plus the direction it faces.</b> The “direction it faces” is captured by a vector sticking straight out of the surface, the <b>normal vector</b> ${vn}. Tilt the normal and the whole tabletop tilts with it; slide the point and the tabletop slides parallel to itself. Everything about planes flows from this one pairing of a point and a normal.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> stand a pencil upright on a sheet of glass. The pencil is the normal ${vn}; the glass is the plane. Any point ${vr} lies on the glass exactly when the little arrow from the base point ${va} to ${vr} runs flat along the glass, that is, perpendicular to the pencil. “Perpendicular” is the dot product being zero, which gives the master equation of a plane in one stroke: ${PN_VEC}, or tidied up, ${RN} = ${d}. Every form of the plane equation is just this idea wearing different clothes. Given three points instead of a normal? Build two edge vectors and cross them to manufacture the normal. Given intercepts on the axes? That’s three points in disguise.`,
      },
      {
        t: 'p',
        html: 'When you are handed three points and no normal, the cross product is the hero. Two of the points define an edge vector lying in the plane; a third gives a second edge vector, also in the plane. Their cross product is automatically perpendicular to both edges, and therefore to the whole surface: you have manufactured a normal out of thin air. From there the point–normal equation finishes the job. This single move, “two edges, one cross product,” handles every plane defined by points, including the intercept form.',
      },
      {
        t: 'p',
        html: `<b>Angles, the smart way.</b> Here is the single most useful trick in the whole topic: a plane is most easily handled through its normal. The angle between two planes is simply the angle between their normals: ${COS} = ${COS_PLANES}. But beware the line-and-plane case, which hides a twist. When a line meets a plane, the angle we care about is measured against the surface, not against the normal, and the normal sticks up at 90° to the surface. So if ${al} is the angle between the line and the normal, the angle between the line and the plane is its <b>complement</b> 90° − ${al}. Cosine of the complement is sine, so the line–plane angle uses a <b>sine</b>: ${SIN} = ${SIN_LP}. Forgetting this single sine/cosine swap is the most common mistake on the entire topic.`,
      },
      {
        t: 'p',
        html: `<b>Distance, the smart way.</b> How far is a point from a plane? Drop a perpendicular and measure along the normal. If the plane is ${PLANE}, the perpendicular distance of ${XYZ1} is<br>${POINT_PLANE}:<br>you simply feed the point into the plane expression and divide by the length of the normal. The modulus is there because distance can’t be negative; the sign of ${PLANE_AT} (before the modulus) actually tells you which side of the plane the point is on, a fact JEE Advanced loves to exploit.`,
      },
      {
        t: 'p',
        html: `That sign idea deserves a closer look, because it solves a whole class of problems for free. Evaluate ${a}${x} + ${b}${y} + ${c}${z} + ${d} at two points: if both give the same sign, the points lie on the same side of the plane; if the signs differ, the plane separates them, and the segment joining them must cross the plane. This is exactly how you test whether a line segment is cut by a plane, or whether the origin lies on the same side as some given point, with no work beyond the distance computation you were already doing.`,
      },
      {
        t: 'p',
        html: `<b>Family of planes: the elegant shortcut.</b> When a problem says “the plane through the line where planes ${P1} and ${P2} meet,” don’t find that line. Instead write ${FAMILY}: every choice of ${la} is automatically a plane through that intersection line (for two planes that do meet, that is, are not parallel), and one extra condition (a point to pass through, a plane to be perpendicular to) pins down the single right ${la}. Geometrically, ${FAMILY} is a pencil of planes: an infinite book of pages all hinged along the same spine, which is the intersection line. Sweeping ${la} across all real values flips through every page of the book (every plane containing that line, save ${P2} itself), and the extra condition simply selects the one page you need.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions:</b><br>• The normal form ${RNH} = ${p} requires ${nh} to be a <b>unit</b> vector and ${rel(p, '≥', '0')}; only then is ${p} the true distance from the origin.`,
      },
      {
        t: 'p',
        html: '• The line–plane angle uses <b>sine</b>, the plane–plane angle uses <b>cosine</b>. They are not interchangeable.',
      },
      {
        t: 'p',
        html: '• The point–plane distance formula needs the plane written as ⋯ = 0; a stray constant on the wrong side flips a sign.',
      },
      {
        t: 'p',
        html: '• For distance between two parallel planes, their normals must first be scaled to be <b>identical</b> before comparing the constants; otherwise the gap is meaningless.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: 'These are length and angle quantities; distances carry units of length, angles are dimensionless.',
      },
      {
        t: 'p',
        html: '<b>Plane equations & forms (03a).</b>',
      },
      {
        t: 'formula',
        kicker: 'Normal form',
        main: `${RNH} = ${p} (${nh} unit, ${rel(p, '≥', '0')})<br>${l}${x} + ${m}${y} + ${n}${z} = ${p}`,
        legend: [
          `${nh} = unit normal`,
          `${p} = distance of plane from origin`,
          `${l}, ${m}, ${n} = components of the unit normal`,
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Point–normal',
        main: `${PN_VEC} ⇔ ${RN} = ${d}<br>${PN_CART}`,
        legend: [
          `${va} = position vector of a known point on the plane`,
          `${vn} = normal vector`,
          `${d} = constant in ${RN} = ${d}`,
          `${a}, ${b}, ${c} = direction ratios of the normal`,
          `${XYZ1} = the known point`,
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Three points',
        main: `${DET_PLANE}${NB}=${NB}0<br>Vector form:<br>(${vr}${NB}−${NB}${va})${NB}·${NB}[${BA_CA}]${NB}=${NB}0`,
        legend: [
          `${pt(sb(x, iI), sb(y, iI), sb(z, iI))} = the three given points`,
          `${va}, ${vb}, ${vc} = position vectors of the three points`,
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Intercept form',
        main: `${INTERCEPT}`,
        legend: [`${a}, ${b}, ${c} = intercepts on the axes`],
        note: null,
      },
      {
        t: 'p',
        html: `All four are the single equation ${RN} = ${d} in disguise; they differ only in what starting data you are given: a normal and a point, three points, or three intercepts.`,
      },
      {
        t: 'p',
        html: `<b>Family of planes through a line of intersection (03b).</b> For planes ${P1} ≡ ${sb(I('A'), '1')}${x} + ${sb(I('B'), '1')}${y} + ${sb(I('C'), '1')}${z} + ${sb(D, '1')} = 0 and ${P2} ≡ ${sb(I('A'), '2')}${x} + ${sb(I('B'), '2')}${y} + ${sb(I('C'), '2')}${z} + ${sb(D, '2')} = 0:`,
      },
      {
        t: 'formula',
        kicker: 'Family of planes through a line of intersection',
        main: `${FAMILY} (${la} ∈ ℝ)<br>Vector form:<br>(${dot(vr, vn1)}${NB}−${NB}${d1})${NB}+${NB}${la}(${dot(vr, vn2)}${NB}−${NB}${d2})${NB}=${NB}0`,
        legend: [
          `${P1}, ${P2} = the two planes’ left-hand sides`,
          `${la} = family parameter`,
          `${vn1}, ${vn2} = normals of the two planes`,
          `${d1}, ${d2} = constants of the two planes in vector form`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Angles (03c).</b>',
      },
      {
        t: 'formula',
        kicker: 'Plane–plane angle',
        main: `${COS} = ${COS_PLANES}`,
        legend: [`${th} = angle between planes`, `${vn1}, ${vn2} = normal vectors of the two planes`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Line–plane angle',
        main: `${SIN} = ${SIN_LP}`,
        legend: [`${ph} = angle between a line and a plane`, `${vb} = direction vector of a line`, `${vn} = normal vector of the plane`],
        note: null,
      },
      {
        t: 'p',
        html: `Two planes are parallel when ${vn1} ∥ ${vn2}, perpendicular when ${N1N2} = 0. A line lies in (or is parallel to) a plane when ${BN} = 0. In both angle formulas the modulus delivers the acute angle and guards against the sign ambiguity of a reversible normal.`,
      },
      {
        t: 'p',
        html: '<b>Distances (03d).</b>',
      },
      {
        t: 'formula',
        kicker: 'Point to plane',
        main: `${D} = ${POINT_PLANE}`,
        legend: [
          `${D} = distance of the point from the plane`,
          `${XYZ1} = the point`,
          `${a}, ${b}, ${c} = direction ratios of the normal`,
          `${d} = constant term, with the plane written ${PLANE}`,
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Parallel planes (same a, b, c)',
        main: `${D} = ${PAR_PLANES}`,
        legend: [
          `${D} = distance between the planes`,
          `${d1}, ${d2} = constant terms, planes written ${a}${x}${NB}+${NB}${b}${y}${NB}+${NB}${c}${z}${NB}+${NB}${sb(d, iI)}${NB}=${NB}0`,
          `${a}, ${b}, ${c} = the shared normal’s direction ratios`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Both follow one recipe (“plane expression at a point, over the length of the normal”), the parallel-plane case being the point formula applied to any point of the second plane.',
      },
      {
        t: 'p',
        html: `<b>Notation key:</b> ${vn} (or ${a}, ${b}, ${c}) = normal vector / its direction ratios; ${nh} = unit normal; ${p} = distance of plane from origin (normal form); ${d} = constant in ${RN} = ${d}; ${va} = position vector of a known point on the plane; ${vb} = direction vector of a line; ${th} = angle between planes; ${ph} = angle between a line and a plane; ${la} = family parameter.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Task', 'Key object', 'Formula'],
        rows: [
          ['Plane from point + normal', vn, PN_CART_CELL],
          ['Plane from 3 points', BA_CA, 'determinant = 0'],
          ['Plane–plane angle', 'normals', `${COS} = ${COS_PLANES}`],
          ['Line–plane angle', `${vb}, ${vn}`, `${SIN} = ${SIN_LP} (<b>sine!</b>)`],
          ['Point–plane distance', 'normal', POINT_PLANE],
        ],
      },

      { t: 'part', title: 'Theorems and procedures' },
      {
        t: 'p',
        html: `<b>Theorem 1 (point–normal equation of a plane).</b> The plane through ${va} with normal ${vn} is ${PN_VEC}.`,
      },
      { t: 'fig', id: 'm12-11-fig-11.4' },
      {
        t: 'p',
        html: `<b>Proof.</b> A point ${vr} lies on the plane if and only if the displacement ${vr}${NB}−${NB}${va} from the known point ${va} stays within the surface, i.e. is perpendicular to the normal ${vn}. Perpendicularity is exactly ${PN_VEC}. Expanding, ${RN} = ${dot(va, vn)}, a constant we call ${d}; in coordinates with ${vn} = ${pt(a, b, c)} this is ${PN_CART}, i.e. ${a}${x}${NB}+${NB}${b}${y}${NB}+${NB}${c}${z}${NB}=${NB}${d}. ■`,
      },
      {
        t: 'p',
        html: `<b>Procedure: plane through three non-collinear points.</b> Given ${I('A')}, ${I('B')}, ${I('C')}: (1) form two in-plane edge vectors ${V('AB')} = ${vb} − ${va} and ${V('AC')} = ${vc} − ${va}; (2) their cross product ${vn} = ${V('AB')} × ${V('AC')} is normal to both, hence to the plane; (3) apply Theorem 1 with this ${vn} and any one of the points. The compact determinant form packages all three steps, because expanding (${vr}${NB}−${NB}${va})${NB}·${NB}[${BA_CA}] is precisely that 3 × 3 determinant set to zero.`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2 (point–plane distance).</b> The distance of ${XYZ1} from ${PLANE} is ${POINT_PLANE}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Drop the perpendicular from the point ${P}${XYZ1} to the plane, meeting it at foot ${F}. The vector ${V('FP')} is parallel to the normal ${vn} = ${pt(a, b, c)}. The distance ${abs(V('FP'))} equals the absolute projection of ${V('P')} − ${V('F')}<sub>0</sub> onto the unit normal, where ${F0} is any point of the plane (so ${a}${F0x} + ${b}${F0y} + ${c}${F0z} = −${d}). Computing that projection:<br>${fr(abs(`(${x1} − ${F0x})${a} + (${y1} − ${F0y})${b} + (${z1} − ${F0z})${c}`), ROOT_ABC)}<br><br>= ${fr(abs(`${a}${x1} + ${b}${y1} + ${c}${z1} − (${a}${F0x} + ${b}${F0y} + ${c}${F0z})`), ROOT_ABC)}<br><br>= ${POINT_PLANE}. ■`,
      },
      {
        t: 'p',
        html: `<b>Why the line–plane angle is a sine (the key subtlety).</b> The angle ${al} between a line (direction ${vb}) and the plane’s normal ${vn} satisfies cos${NB}${al}${NB}=${NB}${SIN_LP}. But the angle ${ph} we want is between the line and the surface, and the surface is 90° from the normal, so ${ph} = 90° − ${al}. Therefore<br>${SIN} = cos${NB}${al} = ${SIN_LP}.<br>The plane equation is steered by its normal, but the reported angle is measured against the surface, hence the swap from cosine to sine.`,
      },
      {
        t: 'p',
        html: `<b>Procedure: family of planes.</b> To find a plane through the intersection of ${rel(P1, '=', '0')} and ${rel(P2, '=', '0')} meeting one extra condition: (1) write ${FAMILY}, which is automatically satisfied by every point on the intersection line for any ${la}; (2) impose the extra condition (a point lying on it ⇒ substitute and solve for ${la}; perpendicular to a given plane ⇒ set the dot product of normals to zero; parallel to an axis ⇒ set that coefficient to zero); (3) back-substitute ${la} and clear fractions.`,
      },
      {
        t: 'p',
        html: `<b>Theorem 3 (angle between two planes equals the angle between their normals).</b> ${COS}${NB}=${NB}${COS_PLANES}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Two planes meet along a line. Pick a point on that line and, within each plane, draw the ray perpendicular to the line of intersection; the angle between these two rays is the dihedral angle between the planes. Both rays lie in the plane through that point perpendicular to the line of intersection, and so do both normals (each normal is perpendicular to the line of intersection). Now rotate each ray by 90°, in the same sense, inside that perpendicular plane: each becomes its own plane’s normal (or its reverse). Rotating both arms of an angle through the same amount leaves the angle unchanged, so the angle between the normals equals the dihedral angle between the planes. The modulus picks out the acute value, since either normal may be reversed.${NB}■ Two corollaries fall out immediately: the planes are perpendicular when ${N1N2} = 0 and parallel when ${vn1} ∥ ${vn2} (their coefficients proportional); once again, the normals decide everything.`,
      },
      {
        t: 'p',
        html: `<b>Intercept form needs no separate derivation.</b> A plane meeting the axes at ${pt(a, '0', '0')}, ${pt('0', b, '0')}, ${pt('0', '0', c)} passes through those three points, so its equation must hold at each. The form ${INTERCEPT} does exactly that: at ${pt(a, '0', '0')} it reads 1 + 0 + 0 = 1, and likewise for the others. So the intercept form is just the three-point construction with especially convenient points.`,
      },
      {
        t: 'p',
        html: `<b>Procedure: foot of perpendicular and image of a point in a plane.</b> To find the foot ${F} of the perpendicular from ${P}${XYZ1} to the plane ${PLANE}: (1) the perpendicular line from ${P} has the plane’s normal as its direction, so write ${F} = (${x1} + ${a}${t}, ${y1} + ${b}${t}, ${z1} + ${c}${t}); (2) demand that ${F} satisfy the plane equation and solve the single linear equation for the parameter ${t}; (3) substitute ${t} back to locate ${F}. The <b>image</b> ${P}′ of ${P} in the plane is then found by treating ${F} as the midpoint of ${I('PP')}′, giving ${P}′${NB}=${NB}2${F}${NB}−${NB}${P}. The same normal-direction idea powers reflection problems and the perpendicular distance, which is simply ${abs(I('PF'))}. The procedure works because the perpendicular from a point to a plane is unique and must run along the normal, so searching only along the normal direction is guaranteed to find the closest point, and reflecting through that foot lands the mirror image.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main · Foundational warm-up (Forms + distance)',
        q: `Find the equation of the plane through the point ${pt('2', '−1', '3')} with normal ${vn} = ${ijk(ii, '+', `2${jj}`, '−', `2${kk}`)}, and its perpendicular distance from the origin.`,
        steps: [
          `Point–normal form:<br>1(${x} − 2) + 2(${y} + 1) − 2(${z} − 3) = 0<br>⇒ ${x} + 2${y} − 2${z} + 6 = 0.`,
          `Distance of the origin ${pt('0', '0', '0')}:<br>${D} = ${fr('|0 + 0 − 0 + 6|', rt('1 + 4 + 4'))} = ${fr('6', '3')} = 2 units.`,
          `The same answer falls out of the normal form. Dividing the plane ${x} + 2${y} − 2${z} = −6 by ${abs(vn)} = 3 gives ${fr(`${x} + 2${y} − 2${z}`, '3')} = −2; flipping signs so that the right-hand side is non-negative yields ${RNH} = 2 with ${nh} = ${fr('1', '3')}${pt('−1', '−2', '2')}, confirming the distance from the origin is ${rel(p, '=', '2')}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / JEE Main Speed Trap (Line–plane angle, the sine trap)',
        q: `Find the angle between the line ${fr(`${x} − 1`, '2')} = ${fr(y, '−1')} = ${fr(`${z} + 2`, '2')} and the plane 3${x} − 6${y} + 2${z} = 7.`,
        steps: [
          `Line direction ${vb} = ${pt('2', '−1', '2')}; plane normal ${vn} = ${pt('3', '−6', '2')}.`,
          `${BN} = (2)${WJ}(3)${NB}+ (−1)${WJ}(−6)${NB}+ (2)${WJ}(2)${NB}= 6${NB}+${NB}6${NB}+${NB}4${NB}=${NB}16,<br>${abs(vb)} = 3, ${abs(vn)} = 7.`,
          `Because this is a <b>line and a plane</b>, use sine, not cosine:<br>${SIN} = ${fr('|16|', `3${NB}·${NB}7`)} = ${fr('16', '21')} ⇒ ${ph} = ${sinInv(fr('16', '21'))}.`,
          `<b>The trap:</b> the quantity ${fr('16', '21')} is the cosine of the angle the line makes with the normal. Students who write ${cosInv(fr('16', '21'))} have reported the angle with the normal, not with the plane: its complement (the two add up to 90°). Whenever a line meets a plane, reach for sine. A built-in safeguard: ${SIN} = ${fr('16', '21')} < 1, as any genuine sine must be; had we divided by only one of the magnitudes the result here (${fr('16', '3')} or ${fr('16', '7')}) would have exceeded 1, instantly flagging the slip.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main · Multi-concept (Family of planes through a point)',
        q: `Find the equation of the plane through the line of intersection of ${x} + ${y} + ${z} = 6 and 2${x} + 3${y} + 4${z} + 5 = 0, passing through ${pt('1', '1', '1')}.`,
        steps: [
          `Write the family (${x}${NB}+${NB}${y}${NB}+${NB}${z}${NB}−${NB}6)${NB}+ ${la}(2${x}${NB}+${NB}3${y}${NB}+${NB}4${z}${NB}+${NB}5)${NB}=${NB}0. Impose the point ${pt('1', '1', '1')}:<br>(1 + 1 + 1 − 6) + ${la}(2 + 3 + 4 + 5) = 0<br>⇒ −3 + 14${la} = 0 ⇒ ${la} = ${fr('3', '14')}.`,
          `Substitute and clear the fraction (multiply through by 14):<br>14(${x} + ${y} + ${z} − 6) + 3(2${x} + 3${y} + 4${z} + 5) = 0<br>⇒ 20${x} + 23${y} + 26${z} − 69 = 0.`,
          `<b>Check:</b> at ${pt('1', '1', '1')}, 20 + 23 + 26 − 69 = 0 ✓. The multi-concept thread: the family construction avoids ever computing the intersection line, collapsing the whole problem to one linear equation in ${la}. Because the family already encodes “through the intersection line,” the single point condition fully determines the plane: no system of simultaneous equations and no parametrisation of the line is ever required.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced (Family + perpendicularity)',
        q: `Find the plane through the line of intersection of 2${x} + ${y} − ${z} = 3 and ${x} − ${y} + 2${z} = 1 that is perpendicular to the plane 3${x} + 2${y} + ${z} = 0.`,
        steps: [
          `Family: (2${x}${NB}+${NB}${y}${NB}−${NB}${z}${NB}−${NB}3)${NB}+ ${la}(${x}${NB}−${NB}${y}${NB}+${NB}2${z}${NB}−${NB}1)${NB}=${NB}0, with normal<br>${vN} = (2 + ${la}, 1 − ${la}, −1 + 2${la}).`,
          `Perpendicular to the plane 3${x} + 2${y} + ${z} = 0 means ${dot(vN, pt('3', '2', '1'))}${NB}=${NB}0:<br>3(2 + ${la}) + 2(1 − ${la}) + 1(−1 + 2${la}) = 0<br>⇒ 6 + 3${la} + 2 − 2${la} − 1 + 2${la} = 0<br>⇒ 7 + 3${la} = 0 ⇒ ${la} = −${fr('7', '3')}.`,
          `Substitute and multiply by −3:<br>(2 − ${fr('7', '3')})${x} + (1 + ${fr('7', '3')})${y}${NB}+<br>(−1${NB}−${NB}${fr('14', '3')})${z} + (−3${NB}+${NB}${fr('7', '3')})${NB}=${NB}0<br>⇒ ${x} − 10${y} + 17${z} + 2 = 0.`,
          `<b>Verification:</b> its normal ${pt('1', '−10', '17')} satisfies (1)${WJ}(3)${NB}+ (−10)${WJ}(2)${NB}+ (17)${WJ}(1)${NB}= 3${NB}−${NB}20${NB}+${NB}17${NB}=${NB}0${NB}✓, genuinely perpendicular to 3${x} + 2${y} + ${z} = 0. The advanced idea: “perpendicular to a plane” becomes a single dot-product condition on the family normal, turning a geometric demand into one equation in ${la}. Note that one condition yields exactly one plane: the family carries a single free parameter, so a single linear constraint generically leaves one surviving value of ${la}. Two independent conditions would over-determine the pencil and usually have no solution at all.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CUET / JEE Main]</b> Find the equation of the plane through ${pt('1', '0', '−2')} with normal ${ijk(`2${ii}`, '−', jj, '+', `3${kk}`)}.`,
            a: `2${x} − ${y} + 3${z} + 4 = 0`,
          },
          {
            q: `<b>[JEE Main]</b> Find the intercepts of the plane 3${x} − 2${y} + 6${z} = 12 on the axes and its distance from the origin.`,
            a: `Intercepts 4, −6, 2; distance ${fr('12', '7')} units`,
          },
          {
            q: `<b>[JEE Main]</b> Find the angle between the planes 2${x} − ${y} + 2${z} = 5 and 3${x} + 6${y} − 2${z} = 7.`,
            a: cosInv(fr('4', '21')),
          },
          {
            q: `<b>[JEE Advanced]</b> Find the plane through the line of intersection of ${x} + ${y} + ${z} = 1 and 2${x} + 3${y} − ${z} + 4 = 0 that is parallel to the ${x}-axis.`,
            a: `${y} − 3${z} + 6 = 0`,
          },
          {
            q: `<b>[JEE Advanced]</b> Find the distance between the parallel planes 2${x} − ${y} + 2${z} = 6 and 4${x} − 2${y} + 4${z} = 9.`,
            a: `${fr('1', '2')} unit`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The equation of the plane through ${pt('1', '2', '3')} and parallel to the plane 2${x} − 3${y} + 4${z} = 10 is`,
        opts: [
          { label: `2${x} − 3${y} + 4${z} = 8`, nudge: null },
          {
            label: `2${x} − 3${y} + 4${z} = 10`,
            nudge: `<b>(B)</b> just repeats the given plane, but that one doesn’t pass through ${pt('1', '2', '3')} (it gives 2 − 6 + 12 = 8 ≠ 10).`,
          },
          { label: `${x} + 2${y} + 3${z} = 14`, nudge: '<b>(C)</b> wrongly uses the point as the normal.' },
          {
            label: `2${x} − 3${y} + 4${z} = 0`,
            nudge: '<b>(D)</b> keeps the right normal but drops the constant, forcing the plane through the origin instead.',
          },
        ],
        correct: 0,
        solution: `Parallel planes share a normal, so use ${vn} = ${pt('2', '−3', '4')}:<br>2(${x} − 1) − 3(${y} − 2) + 4(${z} − 3) = 0<br>⇒ 2${x} − 3${y} + 4${z} = 8.`,
      },
      {
        t: 'mcq',
        q: `The angle between the line ${vr} = (${ijk(ii, '+', jj)}) + ${la}(${ijk(`2${ii}`, '+', `2${jj}`, '+', kk)}) and the plane ${x} + 2${y} + 2${z} = 5 is`,
        opts: [
          { label: sinInv(fr('8', '9')), nudge: null },
          { label: cosInv(fr('8', '9')), nudge: '<b>(B)</b> is the line-to-normal angle: the cosine trap.' },
          {
            label: sinInv(fr('8', '3')),
            nudge: '<b>(C)</b> forgets to multiply the magnitudes in the denominator, producing sin > 1.',
          },
          { label: tanInv(fr('8', '9')), nudge: `<b>(D)</b> uses tan instead of sin (tan${NB}${ph} = ${fr('8', '√17')}).` },
        ],
        correct: 0,
        solution: `${vb} = ${pt('2', '2', '1')}, ${vn} = ${pt('1', '2', '2')}, ${BN} = 2 + 4 + 2 = 8, ${abs(vb)} = ${abs(vn)} = 3, so ${SIN} = ${fr('8', '9')}.`,
      },
      {
        t: 'mcq',
        q: `The distance of the point ${pt('3', '−2', '1')} from the plane 2${x} − 2${y} + ${z} + 3 = 0 is`,
        opts: [
          { label: fr('14', '3'), nudge: null },
          { label: '14', nudge: `<b>(B)</b> forgets to divide by ${abs(vn)} = 3.` },
          {
            label: '2',
            nudge: `<b>(C)</b> mishandles the sign on the ${y}-term (−2(−2) read as −4, giving 6 in the numerator).`,
          },
          { label: fr('14', '9'), nudge: `<b>(D)</b> divides by ${abs(vn)}<sup>2</sup> = 9 instead of ${abs(vn)} = 3.` },
        ],
        correct: 0,
        solution: `${fr('|2(3) − 2(−2) + 1 + 3|', rt('4 + 4 + 1'))} = ${fr('|6 + 4 + 1 + 3|', '3')} = ${fr('14', '3')}.`,
      },
      {
        t: 'mcq',
        q: `Every plane of the family (${x} + ${y} + ${z} − 1) + ${la}(2${x} + ${y} − ${z} − 2) = 0 passes through`,
        opts: [
          { label: pt('1', '0', '0'), nudge: null },
          { label: 'the origin', nudge: `<b>(B)</b> gives −1 − 2${la}, zero only for one specific ${la}.` },
          { label: pt('0', '1', '0'), nudge: `<b>(C)</b> gives −${la}, zero only for ${rel(la, '=', '0')} (the point lies on ${rel(P1, '=', '0')} but not on ${rel(P2, '=', '0')}).` },
          { label: pt('1', '1', '1'), nudge: '<b>(D)</b> gives 2, never zero.' },
        ],
        correct: 0,
        solution: `A family ${FAMILY} passes, for all ${la}, exactly through the line where ${rel(P1, '=', '0')} and ${rel(P2, '=', '0')} meet. The point must satisfy both: at ${pt('1', '0', '0')}, 1 + 0 + 0 − 1 = 0 and 2 + 0 − 0 − 2 = 0 ✓. Each fails to lie on both original planes, so no single point of theirs works for every ${la}.`,
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Using cosine for the line–plane angle.</b> The line–plane angle is the complement of the line–normal angle, so it uses <b>sine</b>: ${SIN}${NB}=${NB}${SIN_LP}.`,
          `<b>Swapping the point and the normal.</b> In ${a}(${x} − ${x1}) + …, the coefficients ${pt(a, b, c)} are the normal, while ${XYZ1} is the point, never the reverse.`,
          `<b>Forgetting to normalise in the normal form.</b> ${RNH} = ${p} gives ${p} as the distance from the origin only if ${nh} is a unit vector.`,
          `<b>Dropping ${ROOT_ABC} in the distance.</b> Distance is the plane expression evaluated at the point, divided by the length of the normal.`,
          `<b>Comparing un-scaled parallel planes.</b> Before using ${PAR_PLANES}, scale both planes to identical normals; 2${x} − ${y} + 2${z} = 6 and 4${x} − 2${y} + 4${z} = 9 must first be matched.`,
          `<b>Solving for the intersection line in family problems.</b> You never need it: write ${FAMILY} and impose the single extra condition.`,
          `<b>Assuming the family captures every plane.</b> The form ${FAMILY} can never reproduce ${P2} itself (no finite ${la} gives it). If a problem’s correct answer happens to be ${P2}, the symmetric form ${mu}${P1} + ${P2} = 0 recovers it.`,
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (the normal is everything):</b> almost every plane question reduces to “find the normal.” Forms come from a normal; the plane–plane angle is the normal–normal angle; distance divides by the normal’s length. Identify the normal first and the rest follows: even the family method is, at heart, a search for the right normal among a one-parameter pencil.',
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (sine vs cosine memory hook):</b> “Plane-to-plane, cosine; line-to-plane, sine.” Two surfaces compare like two arrows (cosine); a line piercing a surface is measured against the flat, which flips cosine to sine.',
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (which side, for free):</b> to decide whether two points lie on the same side of a plane, substitute both into ${a}${x} + ${b}${y} + ${c}${z} + ${d} and compare the signs: same sign means same side, opposite signs mean the plane separates them and any segment between them is cut by the plane. No extra computation beyond the distance you were already evaluating.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Forms (03a)</b>',
            note: `Point–normal: ${PN_CART}, i.e. ${RN} = ${d}.<br>Three points: determinant of {${vr} − ${va}; ${vb} − ${va}; ${vc} − ${va}} = 0; normal = ${BA_CA}.<br>Intercept: ${INTERCEPT}. Normal form: ${RNH} = ${p} (${nh}${NB}unit).`,
          },
          { f: '<b>Family (03b)</b>', note: `${FAMILY}; fix ${la} with one extra condition.` },
          {
            f: '<b>Angles (03c)</b>',
            note: `plane–plane ${COS} = ${COS_PLANES}; line–plane ${SIN}${NB}=${NB}${SIN_LP} (<b>sine!</b>).`,
          },
          {
            f: '<b>Distances (03d)</b>',
            note: `point–plane ${POINT_PLANE};<br><br>parallel planes ${PAR_PLANES} (equal normals first).`,
          },
        ],
        aids: [
          '“A point and a normal make a plane.”',
          '“Plane-to-plane cosine, line-to-plane sine.”',
          `“Family first, line never”: use ${FAMILY} instead of solving for the intersection.`,
          `The sign of ${PLANE_AT} tells you which side of the plane the point is on.`,
        ],
      },
    ],
  },
];
