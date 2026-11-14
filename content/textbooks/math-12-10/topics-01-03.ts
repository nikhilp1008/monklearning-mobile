import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10 Vector Algebra, Topics 01–03, pp. 638–663 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word.
 *   Topic 01 = "Vector Algebra — Subtopic 01: Vector Operations & Components"
 *              (heading and Exam Relevance box under the contents, p. 638;
 *              text pp. 638–647),
 *   Topic 02 = "… Subtopic 02: Product of Two Vectors" (pp. 648–655),
 *   Topic 03 = "… Subtopic 03: Product of Three Vectors & Vector
 *              Applications" (pp. 656–663).
 * The chapter's title and contents (top of p. 638) are not copied; the
 * Additional Topics part starts on p. 664. Each topic opens with its "Exam
 * Relevance:" box as a part of its own, then is split at its Sections 1 to 8;
 * the "Cheat Sheet Box" is the part "Cheat sheet". "Subtopic" → "topic".
 * No drawings on pp. 638–663 (the vector shapes are section rules, fraction
 * and root bars, the boxes round results and white masks), so no fig blocks.
 * A vector is its letter(s) and the combining arrow (escaped ARW) inside one
 * <i> (decision 36); unit vectors i, j, k, n, a, r with hats (the
 * combining hat escaped); the dot product ·, the cross product ×, the scalar
 * triple product [a b c] as printed; every determinant a <vmat>. Every
 * fraction is stacked (<frac>); no em dashes.
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
/** The combining right arrow over a vector's letter. */
const ARW = '\u20d7';
/** The combining hat over a unit vector's letter. */
const HAT = '\u0302';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

/** A vector: its letter(s) and the arrow, inside the italic (decision 36). */
const V = (s: string) => I(`${s}${ARW}`);
/** A unit vector: its letter in italic with the hat. */
const hat = (s: string) => I(`${s}${HAT}`);
const va = V('a');
const vb = V('b');
const vc = V('c');
const vr = V('r');
const ZERO = `0${ARW}`;
const ii = I('\u00ee');
const jj = I('\u0135');
const kk = hat('k');
const ah = hat('a');
const rh = hat('r');
const nh = hat('n');

const a = I('a');
const b = I('b');
const c = I('c');
const k = I('k');
const l = I('l');
const m = I('m');
const n = I('n');
const p = I('p');
const q = I('q');
const r = I('r');
const x = I('x');
const y = I('y');
const z = I('z');
const A = I('A');
const B = I('B');
const C = I('C');
const D = I('D');
const E = I('E');
const F = I('F');
const G = I('G');
const O = I('O');
const P = I('P');
const Q = I('Q');
const R = I('R');
const S = I('S');
const Vv = I('V');
const la = I('λ');
const mu = I('μ');
const al = I('α');
const be = I('β');
const ga = I('γ');
const th = I('θ');
const ph = I('φ');

const sq = (s: string) => `${s}<sup>2</sup>`;
// A short |…| is one unit: its inner spaces never break (Android check of Ch 10, "|a⃗" / "+ b⃗|").
const glueShort = (s: string) => (s.replace(/<[^>]*>/g, '').length <= 24 ? s.replace(/ (?![^<]*>)/g, NB) : s);
const abs = (s: string) => `|${WJ}${glueShort(s)}|`;
const abs2 = (s: string) => sq(abs(s));
const rel = (lhs: string, op: string, rhs: string) => `${lhs}${NB}${op}${NB}${rhs}`;
/** A point or triple, its commas glued: (1, −1, 3). */
const pt = (...s: string[]) => `(${s.join(`,${NB}`)})`;
/** Dot and cross products, spaced as printed. */
const dot = (u: string, v: string) => `${u}${NB}·${NB}${v}`;
const cross = (u: string, v: string) => `${u} × ${v}`;
/** A ratio m ∶ n, glued. */
const ratio = (u: string, v: string) => `${u}${NB}∶${NB}${v}`;
/** A signed term: '+3' → "+ 3", '−' → "−". */
const term = (s: string) => `${s[0]} ${s.slice(1)}`;
/** Coefficients and unit vectors: ijk('2', '+', '−2') → 2i + j − 2k with hats. */
const ijk = (u: string, v: string, w: string) => `${u}${ii} ${term(v)}${jj} ${term(w)}${kk}`;
const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const COS = (s: string) => `cos${NB}${s}`;
const SIN = (s: string) => `sin${NB}${s}`;

const vAB = V('AB');
const vBA = V('BA');
const vAC = V('AC');
const vAD = V('AD');
const vAR = V('AR');
const vRB = V('RB');
const vOP = V('OP');
const vOQ = V('OQ');
const vQP = V('QP');
const vPQ = V('PQ');
const vPS = V('PS');
const vOR = V('OR');
const vOD = V('OD');
const vOG = V('OG');
const vOC = V('OC');
const vBC = V('BC');
const vOA = V('OA');
const vOB = V('OB');
const XYZ = `${x}${ii} + ${y}${jj} + ${z}${kk}`;
const ROOTXYZ = `√(${sq(x)} + ${sq(y)} + ${sq(z)})`;
const LMN = `${sq(l)} + ${sq(m)} + ${sq(n)} = 1`;
const ABSA = abs(va);
const ABSB = abs(vb);
const ABSR = abs(vr);
const AB_ = I('AB');
const AD_ = I('AD');
const BC_ = I('BC');
const CA_ = I('CA');
const AR_ = I('AR');
const RB_ = I('RB');
const SUM3 = fr(`${va} + ${vb} + ${vc}`, '3');
const MID = fr(`${va} + ${vb}`, '2');
const SEC_IN = fr(`${m}${vb} + ${n}${va}`, `${m} + ${n}`);
const SEC_EX = fr(`${m}${vb} − ${n}${va}`, `${m} − ${n}`);
const HALF = fr('1', '2');
const SIXTH = fr('1', '6');
/** The components a₁, a₂, a₃ and the like. */
const cmp = (s: string, i: string) => sb(I(s), i);
const A_COMPS = `${cmp('a', '1')}${ii} + ${cmp('a', '2')}${jj} + ${cmp('a', '3')}${kk}`;
const B_COMPS = `${cmp('b', '1')}${ii} + ${cmp('b', '2')}${jj} + ${cmp('b', '3')}${kk}`;
const ROW_IJK = [ii, jj, kk];
const ROW_A = [cmp('a', '1'), cmp('a', '2'), cmp('a', '3')];
const ROW_B = [cmp('b', '1'), cmp('b', '2'), cmp('b', '3')];
const ROW_C = [cmp('c', '1'), cmp('c', '2'), cmp('c', '3')];
const DOT_COMPS = `${cmp('a', '1')}${cmp('b', '1')} + ${cmp('a', '2')}${cmp('b', '2')} + ${cmp('a', '3')}${cmp('b', '3')}`;
const ADOTB = dot(va, vb);
const AXB = cross(va, vb);
const BXA = cross(vb, va);
const BXC = cross(vb, vc);
const ABSAXB = abs(AXB);
/** |a||b| (vectors), the two moduli side by side. */
const AB_MODS = `${ABSA}${ABSB}`;
const LAGRANGE = `(${ADOTB})<sup>2</sup> + ${abs2(AXB)} = ${abs2(va)}${abs2(vb)}`;
/** The scalar triple product [u v w]. */
const box = (u: string, v: string, w: string) => `[${u}${NB}${v}${NB}${w}]`;
const TRIPLE = box(va, vb, vc);
const ABS_TRIPLE = abs(TRIPLE);
const BAC = `(${dot(va, vc)})${vb} − (${dot(va, vb)})${vc}`;
const A_BXC = `${va} × (${BXC})`;
const AXB_C = `(${AXB}) × ${vc}`;
const vap = `${va}′`;
const vbp = `${vb}′`;
const vcp = `${vc}′`;
const ePQ = (s: string) => sb(hat('e'), s);
const d1 = sb(V('d'), '1');
const d2 = sb(V('d'), '2');
const ROOT14 = '√14';
const PROJ = `proj<sub>${vb}</sub>${va}`;
const Vtet = sb(Vv, 'tet');
const BOX4 = box(vAB, vAC, vAD);

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · Subtopic 01 · pp. 638–647 ────────────────
  {
    n: '01',
    title: 'Vector Operations & Components',
    kalam: 'We draw a vector as a directed line segment: an arrow.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the foundation block of the whole chapter. <b>JEE Main</b> reliably asks 1–2 questions every year on unit vectors, direction cosines/ratios, the section formula, and collinearity ${ESTIMATE}. <b>CBSE Boards</b> include a 1–2 mark definition or a short section-formula problem almost every paper ${ESTIMATE}. <b>CUET</b> loves direct formula plug-ins from here. <b>JEE Advanced</b> rarely tests it head-on but builds collinearity/coplanarity setups on top of it ${ESTIMATE}; get this airtight and the rest of the chapter rests on solid ground.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Imagine you are standing at Connaught Place in Delhi and you stop an auto driver. If you only say “take me 4 kilometres,” the poor driver has no idea where to go: 4 km towards Karol Bagh and 4 km towards Nehru Place land you in completely different places. The number alone (4 km) is a <b>scalar</b>: it carries only size. The moment you add “4 km towards Nehru Place,” you have given a <b>vector</b>: something with both a <b>magnitude</b> (how much) and a <b>direction</b> (which way).',
      },
      {
        t: 'p',
        html: 'That single distinction is the entire seed of this chapter. Temperature, mass, distance, speed, and your bank balance are scalars: they are fully described by one number. Displacement, velocity, force, and a fielder’s throw in a cricket match are vectors: a throw of “80 km/h” is incomplete until you say towards the stumps.',
      },
      {
        t: 'p',
        html: `We draw a vector as a <b>directed line segment</b>: an arrow. The length of the arrow is its magnitude, and the arrowhead points in its direction. If the arrow goes from point ${A} (the initial point or tail) to point ${B} (the terminal point or head), we write it as ${vAB}, and its magnitude is written ${abs(vAB)}.`,
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> a vector is really just an instruction: “move this far, in this direction.” Crucially, the instruction does not care where you start. If you and your friend both walk “200 m due east,” you have followed the same vector even though you began from different gates of the same colony. So <b>two arrows that have the same length and the same direction are the same vector</b>, no matter where they sit on the page. This is why we can freely slide a vector around to add it to another, a property we will use constantly.',
      },
      {
        t: 'p',
        html: `Now, how do we pin a vector down with numbers? We resolve it into <b>components</b>. Picture giving directions on a city grid: “go 3 blocks east, then 2 blocks north, then up 1 floor.” Those three numbers (east, north, up) completely fix where you end up. In mathematics the three perpendicular grid directions are the <b>unit vectors</b> ${ii} (along the ${x}-axis), ${jj} (along the ${y}-axis), and ${kk} (along the ${z}-axis), each of length exactly 1. Any vector ${vr} in space can then be written as<br>${vr} = ${XYZ},<br>where ${x}, ${y}, ${z} are its <b>scalar components</b>. The arrow and the triple ${pt(x, y, z)} are two faces of the same object.`,
      },
      {
        t: 'p',
        html: `<b>Limiting Conditions & Assumptions.</b> A few quiet assumptions are worth dragging into the light, because exams attack them directly:<br>• A <b>position vector</b> is not a free vector. It is deliberately tied to the origin ${O}: it points from ${O} to a specific point. You cannot slide it around like an ordinary vector without changing what it means.<br>• <b>Equality of vectors needs both conditions.</b> Two vectors are equal only if they have the same magnitude and the same direction. Equal length alone is not enough, and parallel direction alone is not enough.<br>• The <b>zero vector</b> ${ZERO} has magnitude 0 and <b>no definite direction</b>. Statements like “the direction cosines of ${ZERO}” are meaningless.<br>• A <b>unit vector</b> can only be formed from a non-zero vector, because we divide by the magnitude, and you cannot divide by zero.`,
      },
      {
        t: 'p',
        html: 'Hold these in mind: most “silly” mistakes in this topic are really violations of one of these four assumptions.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: `<b>Magnitude of a vector.</b> For ${vr} = ${XYZ}:`,
      },
      {
        t: 'formula',
        kicker: 'Magnitude of a vector',
        main: `${ABSR} = ${ROOTXYZ}`,
        legend: [`${x}, ${y}, ${z} = the scalar components of ${vr}`],
        note: null,
      },
      {
        t: 'p',
        html: `This is just the 3-D Pythagoras theorem. <b>Property:</b> ${rel(ABSR, '≥', '0')}, with equality only for the zero vector.`,
      },
      {
        t: 'p',
        html: `<b>Unit vector.</b> A vector of magnitude 1 along a given direction. The unit vector along ${va} (${rel(va, '≠', ZERO)}) is:`,
      },
      {
        t: 'formula',
        kicker: 'Unit vector',
        main: `${ah} = ${fr(va, ABSA)}`,
        legend: [`${va} = the given vector (non-zero)`, `${ABSA} = the magnitude of ${va}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Validity:</b> defined only when ${rel(va, '≠', ZERO)}.`,
      },
      {
        t: 'p',
        html: `<b>Position vector.</b> The position vector of a point ${P}${pt(x, y, z)} relative to origin ${O} is:`,
      },
      {
        t: 'formula',
        kicker: 'Position vector',
        main: `${vOP} = ${XYZ}<br>${abs(vOP)} = ${ROOTXYZ}`,
        legend: [`${x}, ${y}, ${z} = the coordinates of the point ${P}`, `${O} = the origin`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Vector joining two points.</b> If ${A} and ${B} have position vectors ${va} and ${vb}, then:`,
      },
      {
        t: 'formula',
        kicker: 'Vector joining two points',
        main: `${vAB} = ${vb} − ${va} (head minus tail)`,
        legend: [`${va} = the position vector of ${A} (the tail)`, `${vb} = the position vector of ${B} (the head)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Trap-guard:</b> ${vAB} = −${vBA}, so subtraction order is everything.`,
      },
      {
        t: 'p',
        html: `<b>Scalar multiplication.</b> For scalar ${la} and vector ${va}:`,
      },
      {
        t: 'formula',
        kicker: 'Scalar multiplication',
        main: `${abs(`${la}${va}`)} = ${abs(la)}${NB}${ABSA}`,
        legend: [`${la} = a scalar`, `${va} = a vector`],
        note: null,
      },
      {
        t: 'p',
        html: `The direction of ${la}${va} is <b>the same</b> as ${va} if ${rel(la, '>', '0')} and <b>opposite</b> if ${rel(la, '<', '0')}; if ${rel(la, '=', '0')} we get ${ZERO}.`,
      },
      {
        t: 'p',
        html: `<b>Direction cosines (DCs).</b> The cosines of the angles ${al}, ${be}, ${ga} that a vector makes with the positive ${x}-, ${y}-, ${z}-axes:`,
      },
      {
        t: 'formula',
        kicker: 'Direction cosines',
        main: `${l} = ${COS(al)}<br>${m} = ${COS(be)}<br>${n} = ${COS(ga)}`,
        legend: [`${al}, ${be}, ${ga} = the angles with the positive ${x}-, ${y}-, ${z}-axes`],
        note: null,
      },
      {
        t: 'p',
        html: `For ${vr} = ${XYZ} with ${rel(ABSR, '=', r)}:`,
      },
      {
        t: 'formula',
        kicker: 'Direction cosines from the components',
        main: `${l} = ${fr(x, r)}<br>${m} = ${fr(y, r)}<br>${n} = ${fr(z, r)}`,
        legend: [`${x}, ${y}, ${z} = the scalar components of ${vr}`, `${r} = the magnitude of ${vr}`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Fundamental identity of direction cosines',
        main: LMN,
        legend: [`${l}, ${m}, ${n} = the direction cosines`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Direction ratios (DRs).</b> Any three numbers ${pt(a, b, c)} proportional to the DCs:`,
      },
      {
        t: 'formula',
        kicker: 'Direction ratios',
        main: `${fr(l, a)} = ${fr(m, b)} = ${fr(n, c)} = ${fr('±1', `√(${sq(a)} + ${sq(b)} + ${sq(c)})`)}`,
        legend: [`${a}, ${b}, ${c} = the direction ratios`, `${l}, ${m}, ${n} = the direction cosines`],
        note: null,
      },
      {
        t: 'p',
        html: `The scalar components ${pt(x, y, z)} of a vector are themselves a valid set of DRs. <b>Key property:</b> DCs are <b>unique</b> (up to overall sign for the opposite ray), but DRs are <b>not unique</b>: ${pt('2', '−1', '2')} and ${pt('4', '−2', '4')} describe the same direction.`,
      },
      {
        t: 'p',
        html: `<b>Section formula.</b> A point ${R} dividing the join of ${A}(${va}) and ${B}(${vb}) in ratio ${ratio(m, n)}:`,
      },
      {
        t: 'formula',
        kicker: 'Section formula',
        main: `${vOR}<sub>internal</sub> = ${SEC_IN} (${rel(`${m} + ${n}`, '≠', '0')})<br>${vOR}<sub>external</sub> = ${SEC_EX} (${rel(m, '≠', n)})`,
        legend: [`${va}, ${vb} = the position vectors of ${A} and ${B}`, `${ratio(m, n)} = the ratio in which ${R} divides ${AB_}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Midpoint</b> (ratio ${ratio('1', '1')}): ${MID}.`,
      },
      {
        t: 'p',
        html: `<b>Collinearity condition.</b> Three distinct points ${A}, ${B}, ${C} are collinear${NB}⟺${NB}${vAB} = ${la}${NB}${vAC} for some scalar ${la} (equivalently, ${vb} − ${va} and ${vc} − ${va} are parallel).`,
      },
      {
        t: 'defgrid',
        title: 'Types of vectors (quick property table): type and defining property',
        rows: [
          { k: `Zero vector ${ZERO}`, v: 'magnitude 0, direction undefined' },
          { k: 'Unit vector', v: 'magnitude exactly 1' },
          { k: 'Equal vectors', v: 'same magnitude <b>and</b> same direction' },
          { k: `Negative of ${va}`, v: `same magnitude, opposite direction (−${va})` },
          { k: 'Collinear / parallel', v: `${va} = ${la}${vb} for some scalar ${la}` },
          { k: 'Coplanar', v: 'all lie in (or parallel to) one plane' },
          { k: 'Position vector', v: 'drawn from the origin to a fixed point' },
        ],
      },

      { t: 'part', title: 'Theorems and proofs' },
      {
        t: 'p',
        html: `<b>Theorem 1: The direction-cosine identity ${LMN}</b><br><b>Claim.</b> The direction cosines of any non-zero vector satisfy ${LMN}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Let ${vr} = ${XYZ} with magnitude ${r} = ${ABSR} = ${ROOTXYZ} > 0. By definition the direction cosines are the components of the unit vector ${rh}, so<br>${l} = ${fr(x, r)},${NB}${NB} ${m} = ${fr(y, r)},${NB}${NB} ${n} = ${fr(z, r)}.`,
      },
      {
        t: 'p',
        html: `<b>Why this step:</b> the DCs measure direction only, so we normalise out the length by dividing each component by ${r}. Squaring and adding,<br>${sq(l)} + ${sq(m)} + ${sq(n)} = ${fr(`${sq(x)} + ${sq(y)} + ${sq(z)}`, sq(r))}<br>= ${fr(sq(r), sq(r))} = 1.<br>The numerator collapses to ${sq(r)} precisely because ${sq(r)} = ${sq(x)} + ${sq(y)} + ${sq(z)} by the magnitude definition. ■`,
      },
      {
        t: 'p',
        html: '<b>Reading the result:</b> a set of three cosines is a legitimate direction only if their squares sum to 1. This is the fastest sanity check in the whole topic: if an option gives DCs whose squares do not add to 1, reject it on sight.',
      },
      {
        t: 'p',
        html: `<b>Theorem 2: Section Formula (internal division)</b><br><b>Claim.</b> Let ${A}, ${B} have position vectors ${va}, ${vb}. If ${R} divides ${AB_} internally in the ratio ${ratio(m, n)}, then<br>${vOR} = ${SEC_IN}.`,
      },
      {
        t: 'p',
        html: `<b>Setup.</b> “${R} divides ${AB_} internally in ratio ${ratio(m, n)}” means ${R} lies between ${A} and ${B} with ${AR_}${NB}∶${NB}${RB_} = ${ratio(m, n)}. Since ${vAR} and ${vRB} point the same way along the segment,<br>${fr(abs(vAR), abs(vRB))} = ${fr(m, n)}${NB}⟹${NB}${n}${NB}${vAR} = ${m}${NB}${vRB}.`,
      },
      {
        t: 'p',
        html: '<b>Why this step:</b> equal direction lets us promote the ratio of magnitudes to a vector equation.',
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Write the two segment vectors using “head minus tail”:<br>${vAR} = ${vr} − ${va},${NB}${NB} ${vRB} = ${vb} − ${vr},<br>where ${vr} = ${vOR}.<br>Substitute into ${n}${NB}${vAR} = ${m}${NB}${vRB}:<br>${n}(${vr} − ${va}) = ${m}(${vb} − ${vr}).<br>Expand and gather the ${vr} terms on one side:<br>${n}${vr} − ${n}${va} = ${m}${vb} − ${m}${vr}<br>⟹ (${m} + ${n})${vr} = ${m}${vb} + ${n}${va}.<br>Since ${R} lies strictly between ${A} and ${B}, we have ${rel(`${m} + ${n}`, '≠', '0')}, so we may divide:<br>${vr} = ${SEC_IN}. ■`,
      },
      {
        t: 'p',
        html: `<b>Corollary: external division.</b> If ${R} divides ${AB_} externally in ratio ${ratio(m, n)}, ${R} lies outside the segment and the directions of ${vAR}, ${vRB} are opposite, giving ${n}${NB}${vAR} = −${m}${NB}${vRB}. Repeating the algebra replaces ${n} by −${n}:<br>${vOR} = ${SEC_EX} (${rel(m, '≠', n)}).`,
      },
      {
        t: 'p',
        html: `<b>Corollary: midpoint.</b> Put ${m} = ${n} = 1: ${vOR} = ${MID}.`,
      },
      {
        t: 'p',
        html: `<b>Theorem 3: Vector test for collinearity</b><br><b>Claim.</b> <b>Distinct</b> points ${A}, ${B}, ${C} with position vectors ${va}, ${vb}, ${vc} are collinear${NB}⟺${NB}there exists a scalar ${la} with ${vb} − ${va} = ${la}(${vc} − ${va}).`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> ${A}, ${B}, ${C} lie on one line${NB}⟺${NB}the segments ${vAB} and ${vAC} point along the same line${NB}⟺${NB}one is a scalar multiple of the other, i.e. ${vAB} = ${la}${NB}${vAC}. Substituting ${vAB} = ${vb} − ${va} and ${vAC} = ${vc} − ${va} gives the stated condition. ■`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the unit vector in the direction of ${va} = ${ijk('6', '−2', '+3')}, and hence find the vector of magnitude 35 in the same direction.`,
        steps: [
          `<b>Given:</b> ${va} = ${ijk('6', '−2', '+3')}.`,
          `<b>Step 1: magnitude.</b><br>${ABSA} = √(${sq('6')} + ${sq('(−2)')} + ${sq('3')})<br>= √(36 + 4 + 9) = √49 = 7.`,
          `<b>Step 2: unit vector.</b><br>${ah} = ${fr(va, ABSA)} = ${fr('1', '7')}(${ijk('6', '−2', '+3')})<br>= ${fr('6', '7')}${ii} − ${fr('2', '7')}${jj} + ${fr('3', '7')}${kk}.`,
          `<b>Step 3: scale to magnitude 35.</b> Multiply the unit vector by 35:<br>35${NB}${ah} = 35 · ${fr('1', '7')}(${ijk('6', '−2', '+3')})<br>= 5(${ijk('6', '−2', '+3')}) = ${ijk('30', '−10', '+15')}.`,
          `(<b>Quick check:</b> ${abs(ijk('30', '−10', '+15'))} = √(900 + 100 + 225) = √1225 = 35. ✓)`,
        ],
        ans: `${ah} = ${fr('1', '7')}(${ijk('6', '−2', '+3')}), and the required vector is ${ijk('30', '−10', '+15')}.`,
      },
      {
        t: 'ex',
        tag: 'Conceptual Trap',
        q: `Points ${P}${pt('2', '−1', '3')} and ${Q}${pt('5', '3', '−1')} are given. Find the unit vector in the direction of ${vQP}.`,
        steps: [
          `<b>The trap:</b> under exam pressure students compute ${vPQ} instead of ${vQP}: the answer then comes out with every sign flipped, and it is marked wrong.`,
          `<b>Step 1: read the order carefully.</b> ${vQP} goes from ${Q} to ${P}, so it is <b>head ${P} minus tail ${Q}</b>:<br>${vQP} = ${vOP} − ${vOQ}<br>= (2 − 5)${ii} + (−1 − 3)${jj} + (3 − (−1))${kk}<br>= ${ijk('−3', '−4', '+4')}.`,
          `<b>Step 2: magnitude.</b><br>${abs(vQP)} = √(${sq('(−3)')} + ${sq('(−4)')} + ${sq('4')})<br>= √(9 + 16 + 16) = √41.`,
          `<b>Step 3: unit vector.</b><br>${fr(vQP, abs(vQP))} = ${fr('1', '√41')}(−3${ii} − 4${jj} + 4${kk}).`,
          `<b>Mental-elimination shortcut:</b> in a multiple-choice setting, first decide the signs of the answer from the order ${Q} → ${P} (${x} decreases${NB}⇒${NB}negative ${ii}, etc.) and the denominator √41. Any option with the wrong sign pattern or a denominator that is not √41 is gone instantly: no full computation needed.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (section formula + direction cosines)',
        q: `The point ${R} divides the join of ${A}${pt('3', '−2', '4')} and ${B}${pt('8', '3', '−6')} internally in the ratio ${ratio('2', '3')}. Find the position vector of ${R} and the direction cosines of ${vOR}.`,
        steps: [
          '<b>Two concepts:</b> first the section formula, then direction cosines of the result.',
          `<b>Step 1: apply the internal section formula</b> with ${va} = ${ijk('3', '−2', '+4')}, ${vb} = ${ijk('8', '+3', '−6')}, ${ratio(m, n)} = ${ratio('2', '3')}:<br>${vOR} = ${fr(`2${vb} + 3${va}`, '2 + 3')}<br>= ${fr(`2(${ijk('8', '+3', '−6')}) + 3(${ijk('3', '−2', '+4')})`, '5')}.`,
          `Compute the numerator componentwise:<br>${ii} ∶ 16 + 9 = 25,<br>${jj} ∶ 6 − 6 = 0,<br>${kk} ∶ −12 + 12 = 0.<br>${vOR} = ${fr(ijk('25', '+0', '+0'), '5')} = 5${ii}.`,
          `<b>Step 2: direction cosines of ${vOR} = 5${ii}.</b> Its magnitude is 5, so<br>${l} = ${fr('5', '5')} = 1,${NB}${NB} ${m} = ${fr('0', '5')} = 0,${NB}${NB} ${n} = ${fr('0', '5')} = 0.`,
          `(<b>Check:</b> ${sq('1')} + ${sq('0')} + ${sq('0')} = 1 ✓, consistent with Theorem 1.)`,
        ],
        ans: `${vOR} = 5${ii}, with DCs ${pt('1', '0', '0')}, i.e. ${R} lies on the positive ${x}-axis.`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (concurrency of medians via position vectors)',
        q: `In a triangle ${I('ABC')} the vertices have position vectors ${va}, ${vb}, ${vc}. Let ${D} be the midpoint of ${BC_}. Show that the point ${P} dividing the median ${AD_} in the ratio ${ratio('2', '1')} (from ${A}) is independent of which vertex you start from, hence the three medians are concurrent, and find its position vector.`,
        steps: [
          `<b>Step 1: locate ${D}</b>, the midpoint of ${BC_} (section formula, ratio ${ratio('1', '1')}):<br>${vOD} = ${fr(`${vb} + ${vc}`, '2')}.`,
          `<b>Step 2: divide median ${AD_} in ratio ${ratio('2', '1')}</b> from ${A}(${va}) to ${D}(${vOD}), i.e. ${ratio(m, n)} = ${ratio('2', '1')}:<br>${vOP} = ${fr(`2${NB}${vOD} + 1 · ${va}`, '2 + 1')}<br>= ${fr('1', '3')}(2 · ${fr(`${vb} + ${vc}`, '2')} + ${va})<br>= ${SUM3}.`,
          `<b>Step 3: symmetry argument.</b> The result ${SUM3} is <b>completely symmetric</b> in ${va}, ${vb}, ${vc}. Had we instead taken the median from ${B} to the midpoint ${E} of ${CA_}, or from ${C} to the midpoint ${F} of ${AB_}, and divided ${ratio('2', '1')}, the identical algebra would again yield<br>${SUM3}.`,
          `<b>Conclusion.</b> All three medians pass through the same point ${G} with<br>${vOG} = ${SUM3}<br>so the medians are <b>concurrent</b>, and ${G}, the <b>centroid</b>, divides each median ${ratio('2', '1')} from the vertex. The vector method delivers in three lines what coordinate geometry needs a page for. ■`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the magnitude and the unit vector in the direction of ${va} = ${ijk('2', '+', '−2')}.`,
            a: `${ABSA} = 3, ${ah} = ${fr('1', '3')}(${ijk('2', '+', '−2')}).`,
          },
          {
            q: `<b>[CBSE]</b> Find the position vector of the midpoint of the segment joining ${A}${pt('−1', '4', '2')} and ${B}${pt('5', '−2', '6')}.`,
            a: `${ijk('2', '+', '+4')}.`,
          },
          {
            q: `<b>[JEE Main]</b> A vector ${vr} has magnitude 14 and direction ratios 2, 3, −6. Find its direction cosines and its component form, given that ${vr} makes an acute angle with the ${x}-axis.`,
            a: `DCs ${pt(fr('2', '7'), fr('3', '7'), `−${fr('6', '7')}`)}; ${vr} = ${ijk('4', '+6', '−12')}.`,
          },
          {
            q: `<b>[JEE Main]</b> Find the value of ${k} for which the points ${A}${pt(k, '−10', '3')}, ${B}${pt('1', '−1', '3')} and ${C}${pt('3', '5', '3')} are collinear.`,
            a: `${k} = −2.`,
          },
          {
            q: `<b>[JEE Advanced]</b> The position vectors of ${A} and ${B} are ${va} and ${vb}. Find the position vector of the point ${C} on ${vBA} produced such that ${vBC} = ${fr('3', '2')}${vBA}.`,
            a: `${vOC} = ${HALF}(3${va} − ${vb}).`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The direction cosines of the vector ${ijk('', '−2', '+2')} are:`,
        opts: [
          { label: pt(fr('1', '3'), `−${fr('2', '3')}`, fr('2', '3')), nudge: null },
          { label: pt('1', '−2', '2'), nudge: '<b>(b)</b> gives direction ratios, not cosines: the classic DR/DC mix-up.' },
          {
            label: pt(fr('1', '9'), `−${fr('2', '9')}`, fr('2', '9')),
            nudge: `<b>(c)</b> divides components by ${abs2(vr)} = 9 instead of ${ABSR} = 3.`,
          },
          {
            label: pt(fr('1', '√5'), `−${fr('2', '√5')}`, fr('2', '√5')),
            nudge: '<b>(d)</b> uses √5: a student who summed only 1 + 4 and forgot the third component’s square.',
          },
        ],
        correct: 0,
        solution: `Magnitude = √(1 + 4 + 4) = 3, so DCs are ${pt(fr('1', '3'), `−${fr('2', '3')}`, fr('2', '3'))}; check ${fr('1', '9')} + ${fr('4', '9')} + ${fr('4', '9')} = 1 ✓.`,
      },
      {
        t: 'mcq',
        q: `If ${R} divides ${A}(${va}) and ${B}(${vb}) externally in the ratio ${ratio('3', '1')}, then ${vOR} =`,
        opts: [
          {
            label: fr(`3${vb} + ${va}`, '4'),
            nudge: '<b>(a)</b> uses the internal formula (sign and denominator both wrong).',
          },
          { label: fr(`3${vb} − ${va}`, '2'), nudge: null },
          {
            label: fr(`3${vb} − ${va}`, '4'),
            nudge: `<b>(c)</b> keeps the correct numerator but uses denominator ${m} + ${n} = 4 instead of ${m} − ${n} = 2.`,
          },
          {
            label: fr(`${va} − 3${vb}`, '2'),
            nudge: '<b>(d)</b> flips the numerator sign: equivalent to reflecting the answer through the origin.',
          },
        ],
        correct: 1,
        solution: `External formula: ${SEC_EX} = ${fr(`3${vb} − ${va}`, '3 − 1')} = ${fr(`3${vb} − ${va}`, '2')}.`,
      },
      {
        t: 'mcq',
        q: `The points ${P}${pt('1', '2', '3')}, ${Q}${pt('3', '6', '9')}, ${S}${pt('2', '4', '6')} are:`,
        opts: [
          {
            label: 'vertices of a triangle',
            nudge: '<b>(a)</b> assumes three distinct points must form a triangle: false when they line up.',
          },
          { label: 'collinear', nudge: null },
          { label: 'coincident', nudge: '<b>(c)</b> “coincident” needs all points equal, which they are not.' },
          {
            label: `forming a right angle at ${S}`,
            nudge: '<b>(d)</b> invents a right angle; nothing here was tested for perpendicularity (and that would be a later topic anyway).',
          },
        ],
        correct: 1,
        solution: `${vPQ} = ${ijk('2', '+4', '+6')} and ${vPS} = ${ijk('', '+2', '+3')}, so ${vPQ} = 2${NB}${vPS}: parallel through a common point ${P}, hence collinear.`,
      },
      {
        t: 'mcq',
        q: `A vector of magnitude 10 in the direction opposite to ${va} = 3${ii} + 4${kk} is:`,
        opts: [
          {
            label: `6${ii} + 8${kk}`,
            nudge: '<b>(a)</b> correct magnitude but <b>wrong (same) direction</b>: missed the word “opposite.”',
          },
          { label: `−6${ii} − 8${kk}`, nudge: null },
          { label: `−3${ii} − 4${kk}`, nudge: `<b>(c)</b> is just −${va}, magnitude 5 not 10.` },
          {
            label: `−${fr('3', '5')}${ii} − ${fr('4', '5')}${kk}`,
            nudge: '<b>(d)</b> is the opposite unit vector: forgot to scale up to magnitude 10.',
          },
        ],
        correct: 1,
        solution: `${ABSA} = √(9 + 16) = 5; unit vector ${fr('1', '5')}(3${ii} + 4${kk}); opposite direction and magnitude 10 gives −10 · ${fr('1', '5')}(3${ii} + 4${kk}) = −6${ii} − 8${kk}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Mixing up direction ratios and direction cosines.</b> DRs are any proportional triple; DCs are the normalised triple satisfying ${LMN}. If a question says “direction cosines,” you must divide by the magnitude.`,
          `<b>Subtraction order for ${vAB}.</b> Always <b>head minus tail</b>: ${vAB} = ${vb} − ${va}. Writing ${va} − ${vb} silently computes ${vBA} and flips every sign.`,
          `<b>Confusing internal and external section formulas.</b> Internal has a <b>plus</b> and denominator ${m} + ${n}; external has a <b>minus</b> and denominator ${m} − ${n}. A quick tell: external division puts ${R} outside the segment, so its coordinates should land beyond ${A} or ${B}.`,
          `<b>Dividing by ${abs2(vr)} instead of ${ABSR}</b> when forming a unit vector or DCs. The denominator is the magnitude itself, not its square.`,
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip: the “squares-sum-to-one” gatekeeper.</b> Whenever an option claims to be a set of direction cosines or a unit vector, square the three numbers and add. If you don’t get 1, eliminate that option without any further work. In MCQs this single check often kills two or three distractors in seconds.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Magnitude</b>', note: `${ABSR} = ${ROOTXYZ}.` },
          { f: '<b>Unit vector</b>', note: `${ah} = ${fr(va, ABSA)} (needs ${rel(va, '≠', ZERO)}); vector of magnitude ${k} along ${va} is ${k}${ah}.` },
          { f: '<b>Vector joining points</b>', note: `${vAB} = ${vb} − ${va} (head − tail); ${vAB} = −${vBA}.` },
          {
            f: '<b>Direction cosines</b>',
            note: `${l} = ${fr(x, r)}, ${m} = ${fr(y, r)}, ${n} = ${fr(z, r)}, with ${LMN}. DRs ∝ DCs (not unique).`,
          },
          { f: '<b>Section formula</b>', note: `internal ${SEC_IN}; external ${SEC_EX}; midpoint ${MID}.` },
          { f: `<b>Centroid of △${I('ABC')}</b>`, note: `${SUM3} (medians concur, ${ratio('2', '1')} from each vertex).` },
          { f: '<b>Collinearity</b>', note: `Distinct ${A}, ${B}, ${C} collinear${NB}⟺${NB}${vAB} = ${la}${NB}${vAC}.` },
        ],
        aids: [
          '“Internal adds, external subtracts.”',
          '“DC means Divided-by-magnitude; DR means Ratio-only.”',
          '“Squares of DCs always sum to one.”',
        ],
      },
    ],
  },

  // ──────────────── Topic 02 · Subtopic 02 · pp. 648–655 ────────────────
  {
    n: '02',
    title: 'Product of Two Vectors',
    kalam: 'There are two completely different ways to “multiply” two vectors, and the whole topic is built on appreciating why they are different.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is one of the highest-yield topics in the chapter. <b>JEE Main</b> asks 2–3 questions every year ${ESTIMATE}: angle between vectors, projection, area of a triangle/parallelogram, perpendicular/parallel conditions, and the unit vector perpendicular to two vectors. <b>CBSE Boards</b> routinely set 2–3 mark problems on the scalar product, projection, or area ${ESTIMATE}. <b>CUET</b> uses direct formula plug-ins. <b>JEE Advanced</b> weaves these products into geometry and constraint problems. Master both products and you own most of the chapter’s marks.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'There are two completely different ways to “multiply” two vectors, and the whole topic is built on appreciating why they are different. One multiplication asks <b>“how much do these two vectors agree in direction?”</b> and answers with a plain number. The other asks <b>“how much do these two vectors spread apart?”</b> and answers with a brand-new vector. We call them the <b>dot (scalar) product</b> and the <b>cross (vector) product</b>.',
      },
      {
        t: 'p',
        html: '<b>The dot product: overlap.</b> Picture pushing a loaded handcart (a thela) down a straight market lane. You shove at a slight angle, but only the part of your push that points along the lane actually moves the cart forward; the sideways part is wasted. The dot product measures exactly this useful overlap between two directions. When two vectors point the same way, the overlap is maximum; when they are perpendicular, there is no overlap at all and the dot product is zero. The result is a single number, a scalar, because “amount of agreement” is just a quantity, not a direction.',
      },
      {
        t: 'p',
        html: '<b>The cross product: spread and twist.</b> Now think of opening a heavy almirah door. Push near the hinge and almost nothing happens; push at the far edge, perpendicular to the door, and it swings easily. The turning effect depends on how perpendicular your push is, and the axis of the resulting rotation sticks straight out of the door, along the hinge. The cross product captures this: it is largest when the two vectors are perpendicular, zero when they are parallel, and it produces a <b>new vector pointing perpendicular to both</b> of them, along the “axis” of their spread. Its magnitude equals the <b>area of the parallelogram</b> the two vectors frame.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> the two products are mirror-image questions. The dot product is the shadow one vector casts on another: maximal when they line up, vanishing when they cross at a right angle. The cross product is the area the two vectors sweep out: vanishing when they line up, maximal when they cross at a right angle. Wherever one is large, the other tends to be small. Together they tell you everything about how two vectors are oriented relative to each other.',
      },
      {
        t: 'p',
        html: `The direction of the cross product is fixed by the <b>right-hand rule</b>: curl the fingers of your right hand from the first vector toward the second, and your thumb points along ${AXB}. Reverse the order and your thumb flips, which is why ${AXB} = −${BXA}.`,
      },
      {
        t: 'p',
        html: `<b>Limiting Conditions & Assumptions.</b><br>• <b>Zero does not mean the same thing for both.</b> For non-zero vectors, ${ADOTB} = 0 means <b>perpendicular</b>, while ${AXB} = ${ZERO} means <b>parallel (collinear)</b>. Confusing these is the single most common error here.<br>• <b>The cross product is not commutative.</b> Order matters: ${AXB} = −${BXA}. The dot product is commutative.<br>• <b>There is no vector division.</b> You cannot “divide” by a vector to undo a product; from ${ADOTB} alone you cannot recover ${vb}.<br>• <b>A scalar versus a vector.</b> ${ADOTB} is a number; ${AXB} is a vector. Writing one where the other belongs (e.g. “${ADOTB} = a vector”) is a conceptual, not arithmetic, mistake.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      { t: 'p', html: '<b>Dot (Scalar) Product</b>' },
      {
        t: 'p',
        html: `<b>Definition.</b> For vectors ${va}, ${vb} with angle ${th} (0 ≤ ${th} ≤ π) between them:`,
      },
      {
        t: 'formula',
        kicker: 'Dot product',
        main: `${ADOTB} = ${ABSA}${NB}${ABSB} ${COS(th)}`,
        legend: [`${th} = the angle between ${va} and ${vb} (0 ≤ ${th} ≤ π)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Component form.</b> If ${va} = ${A_COMPS} and ${vb} = ${B_COMPS}:`,
      },
      {
        t: 'formula',
        kicker: 'Dot product in components',
        main: `${ADOTB} = ${DOT_COMPS}`,
        legend: [
          `${cmp('a', '1')}, ${cmp('a', '2')}, ${cmp('a', '3')} = the components of ${va}`,
          `${cmp('b', '1')}, ${cmp('b', '2')}, ${cmp('b', '3')} = the components of ${vb}`,
        ],
        note: null,
      },
      { t: 'p', html: 'The result is a <b>scalar</b>.' },
      { t: 'p', html: '<b>Angle between two vectors.</b>' },
      {
        t: 'formula',
        kicker: 'Angle between two vectors',
        main: `${COS(th)} = ${fr(ADOTB, `${ABSA}${NB}${ABSB}`)}`,
        legend: [`${th} = the angle between ${va} and ${vb}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Projection.</b> The scalar projection of ${va} on ${vb} is:`,
      },
      {
        t: 'formula',
        kicker: 'Scalar projection',
        main: `${PROJ} = ${fr(ADOTB, ABSB)}`,
        legend: [`${va} = the vector being projected`, `${vb} = the vector projected onto`],
        note: null,
      },
      { t: 'p', html: 'and the projection vector is:' },
      {
        t: 'formula',
        kicker: 'Projection vector',
        main: `projection vector = ${fr(ADOTB, abs2(vb))}${NB}${vb}`,
        legend: [`${va} = the vector being projected`, `${vb} = the vector projected onto`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Key properties.</b><br>• Commutative: ${ADOTB} = ${dot(vb, va)}.<br>• Distributive: ${dot(va, `(${vb} + ${vc})`)} = ${ADOTB} + ${dot(va, vc)}.<br>• ${dot(va, va)} = ${abs2(va)}.<br>• <b>Perpendicularity:</b> for non-zero ${va}, ${vb}, ${ADOTB}${NB}=${NB}0${NB}⟺${NB}${va}${NB}⊥${NB}${vb}.<br>• Basis: ${dot(ii, ii)} = ${dot(jj, jj)} = ${dot(kk, kk)} = 1 and ${dot(ii, jj)} = ${dot(jj, kk)} = ${dot(kk, ii)} = 0.`,
      },
      { t: 'p', html: '<b>Cross (Vector) Product</b>' },
      {
        t: 'p',
        html: `<b>Definition.</b> With ${nh} the unit vector perpendicular to both ${va} and ${vb} (right-hand rule):`,
      },
      {
        t: 'formula',
        kicker: 'Cross product',
        main: `${AXB} = ${ABSA}${NB}${ABSB} ${SIN(th)}${NB}${nh}<br>${ABSAXB} = ${ABSA}${NB}${ABSB} ${SIN(th)}`,
        legend: [`${nh} = the unit vector perpendicular to both (right-hand rule)`, `${th} = the angle between ${va} and ${vb}`],
        note: null,
      },
      { t: 'p', html: '<b>Determinant (component) form.</b>' },
      {
        t: 'formula',
        kicker: 'Cross product, determinant form',
        main: `${AXB} = ${vm(ROW_IJK, ROW_A, ROW_B)}`,
        legend: [
          `${cmp('a', '1')}, ${cmp('a', '2')}, ${cmp('a', '3')} = the components of ${va}`,
          `${cmp('b', '1')}, ${cmp('b', '2')}, ${cmp('b', '3')} = the components of ${vb}`,
        ],
        note: null,
      },
      { t: 'p', html: 'The result is a <b>vector</b>.' },
      {
        t: 'p',
        html: `<b>Geometric meaning.</b><br>• Area of parallelogram with adjacent sides ${va}, ${vb}: ${ABSAXB}.<br>• Area of triangle with sides ${va}, ${vb} from one vertex: ${HALF}${ABSAXB}.<br>• Unit vector perpendicular to both ${va}, ${vb}: ${nh} = ±${fr(AXB, ABSAXB)}.`,
      },
      {
        t: 'p',
        html: `<b>Key properties.</b><br>• Anti-commutative: ${AXB} = −${BXA}.<br>• Distributive: ${va} × (${vb} + ${vc}) = ${AXB} + ${cross(va, vc)}.<br>• ${cross(va, va)} = ${ZERO}.<br>• <b>Parallelism:</b> for non-zero ${va}, ${vb}, ${va}${NB}×${NB}${vb}${NB}=${NB}${ZERO}${NB}⟺${NB}${va}${NB}∥${NB}${vb}.<br>• Basis (cyclic): ${cross(ii, jj)} = ${kk}, ${cross(jj, kk)} = ${ii}, ${cross(kk, ii)} = ${jj} (reverse order flips sign).`,
      },
      {
        t: 'p',
        html: `<b>The two products at a glance:</b> ${ADOTB} peaks at ${th} = 0 and is 0 at ${th} = 90°; ${ABSAXB} is 0 at ${th} = 0 and peaks at ${th} = 90°. They are perfectly complementary, and indeed<br>${LAGRANGE}<br>(proved below).`,
      },

      { t: 'part', title: 'Theorems and proofs' },
      {
        t: 'p',
        html: `<b>Theorem 1: Component formula for the dot product</b><br><b>Claim.</b> ${ADOTB} = ${DOT_COMPS}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Write ${va} = ${A_COMPS}, ${vb} = ${B_COMPS}. Using distributivity of the dot product,<br>${ADOTB} = ∑<sub>${p}</sub>${NB}∑<sub>${q}</sub>${NB}${cmp('a', p)}${cmp('b', q)}(${dot(ePQ(p), ePQ(q))}),<br>where ${ePQ('1')}, ${ePQ('2')}, ${ePQ('3')} denote ${ii}, ${jj}, ${kk}. <b>Why this step:</b> the dot product distributes over sums, so multiplying the two bracketed expressions produces nine basis dot products. Now invoke the basis rules: ${dot(ePQ(p), ePQ(q))} = 1 when ${rel(p, '=', q)} and 0 otherwise. Every cross term (${rel(p, '≠', q)}) dies, leaving only the three diagonal terms:<br>${ADOTB} = ${cmp('a', '1')}${cmp('b', '1')}(${dot(ii, ii)}) + ${cmp('a', '2')}${cmp('b', '2')}(${dot(jj, jj)}) + ${cmp('a', '3')}${cmp('b', '3')}(${dot(kk, kk)})<br>= ${DOT_COMPS}. ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2: Determinant formula for the cross product</b><br><b>Claim.</b> ${AXB}<br>= (${cmp('a', '2')}${cmp('b', '3')} − ${cmp('a', '3')}${cmp('b', '2')})${ii} − (${cmp('a', '1')}${cmp('b', '3')} − ${cmp('a', '3')}${cmp('b', '1')})${jj}<br>+ (${cmp('a', '1')}${cmp('b', '2')} − ${cmp('a', '2')}${cmp('b', '1')})${kk}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Expand ${AXB} by distributivity over the nine basis cross products. <b>Why this step:</b> the cross product is distributive, so the product of the two bracketed sums splits into nine terms. Three of them, ${cross(ii, ii)}, ${cross(jj, jj)}, ${cross(kk, kk)}, equal ${ZERO}. The remaining six come in pairs governed by the cyclic rules ${cross(ii, jj)} = ${kk}, ${cross(jj, kk)} = ${ii}, ${cross(kk, ii)} = ${jj} (and their reverses with a minus sign). Collecting:<br>${AXB} = (${cmp('a', '2')}${cmp('b', '3')} − ${cmp('a', '3')}${cmp('b', '2')})${ii} + (${cmp('a', '3')}${cmp('b', '1')} − ${cmp('a', '1')}${cmp('b', '3')})${jj}<br>+ (${cmp('a', '1')}${cmp('b', '2')} − ${cmp('a', '2')}${cmp('b', '1')})${kk},<br>which is exactly the cofactor expansion of<br>${vm(ROW_IJK, ROW_A, ROW_B)}<br>along the top row. The antisymmetry of the determinant in its last two rows reproduces ${AXB} = −${BXA} automatically. ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 3: Lagrange’s identity</b><br><b>Claim.</b> ${LAGRANGE}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Let ${th} be the angle between ${va} and ${vb}. Then ${ADOTB} = ${AB_MODS} ${COS(th)} and ${ABSAXB} = ${AB_MODS} ${SIN(th)}. Squaring and adding,<br>(${ADOTB})<sup>2</sup> + ${abs2(AXB)}<br>= ${abs2(va)}${abs2(vb)} cos<sup>2</sup>${NB}${th} + ${abs2(va)}${abs2(vb)} sin<sup>2</sup>${NB}${th}<br>= ${abs2(va)}${abs2(vb)}(cos<sup>2</sup>${NB}${th} + sin<sup>2</sup>${NB}${th}) = ${abs2(va)}${abs2(vb)}.<br>The Pythagorean identity cos<sup>2</sup>${NB}${th} + sin<sup>2</sup>${NB}${th} = 1 closes the proof. ■`,
      },
      {
        t: 'p',
        html: `<b>Why it matters:</b> this identity lets you find ${ABSAXB} from ${ADOTB} (or vice versa) without ever computing the angle: a frequent exam shortcut.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Given ${va} = ${ijk('2', '+3', '+')} and ${vb} = ${ijk('', '−2', '+2')}, find (i) ${ADOTB}, (ii) the angle between them, and (iii) the projection of ${va} on ${vb}.`,
        steps: [
          `<b>(i) Dot product.</b><br>${ADOTB} = (2)(1) + (3)(−2) + (1)(2)<br>= 2 − 6 + 2 = −2.`,
          `<b>(ii) Angle.</b> Magnitudes:<br>${ABSA}${NB}=${NB}√(4${NB}+${NB}9${NB}+${NB}1)${NB}=${NB}${ROOT14}, ${ABSB}${NB}=${NB}√(1${NB}+${NB}4${NB}+${NB}4)${NB}=${NB}3. So<br>${COS(th)} = ${fr(ADOTB, AB_MODS)} = ${fr('−2', `3${ROOT14}`)}<br>⇒ ${th} = cos<sup>−1</sup>(${fr('−2', `3${ROOT14}`)})<br>(obtuse, since${NB}${rel(COS(th), '<', '0')}).`,
          `<b>(iii) Projection of ${va} on ${vb}.</b><br>${PROJ} = ${fr(ADOTB, ABSB)} = ${fr('−2', '3')}.`,
          '(The negative projection correctly signals an obtuse angle.)',
        ],
        ans: `${ADOTB}${NB}=${NB}−2; ${th}${NB}=${NB}cos<sup>−1</sup>(${fr('−2', `3${ROOT14}`)}); projection${NB}=${NB}−${fr('2', '3')}.`,
      },
      {
        t: 'ex',
        tag: 'Conceptual Trap',
        q: `For what value of ${la} are the vectors ${va} = ${la}${ii} + 2${jj} − 3${kk} and ${vb} = ${ijk('3', '−', '+2')} (i) perpendicular, and (ii) parallel?`,
        steps: [
          '<b>The trap:</b> students reach for the same condition for both, or swap them. <b>Perpendicular uses the dot product; parallel uses the cross product (or proportional components).</b>',
          `<b>(i) Perpendicular${NB}⇒${NB}${ADOTB} = 0:</b><br>(${la})(3) + (2)(−1) + (−3)(2) = 3${la} − 2 − 6 = 0<br>⇒ 3${la} = 8${NB}⇒${NB}${la} = ${fr('8', '3')}.`,
          `<b>(ii) Parallel${NB}⇒${NB}components proportional:</b><br>${fr(la, '3')} = ${fr('2', '−1')} = ${fr('−3', '2')}.<br>But ${fr('2', '−1')} = −2 while ${fr('−3', '2')} = −1.5: these are <b>unequal</b>, so the last two components are not proportional. Hence <b>no value of ${la}</b> makes them parallel.`,
          `(<b>Mental check:</b> had a student wrongly used the dot product for “parallel,” they would have produced a spurious ${la}: the trap.)`,
        ],
        ans: `Perpendicular at ${la} = ${fr('8', '3')}; parallel for <b>no</b>${NB}${la}.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (area + perpendicular unit vector)',
        q: `Find the area of the triangle whose two sides from vertex ${A} are ${va} = ${ijk('3', '+', '−2')} and ${vb} = ${ijk('', '−3', '+4')}, and find a unit vector perpendicular to both.`,
        steps: [
          `<b>Step 1: cross product.</b><br>${AXB} = ${vm(ROW_IJK, ['3', '1', '−2'], ['1', '−3', '4'])}<br>= ${ii}(1 · 4 − (−2)(−3)) − ${jj}(3 · 4 − (−2)(1))<br>+ ${kk}(3(−3) − 1 · 1).`,
          `Evaluate each cofactor:<br>${ii} ∶ 4 − 6 = −2,<br>${jj} ∶ −(12 + 2) = −14,<br>${kk} ∶ −9 − 1 = −10.<br>${AXB} = ${ijk('−2', '−14', '−10')}.`,
          `<b>Step 2: magnitude.</b><br>${ABSAXB} = √(${sq('(−2)')} + ${sq('(−14)')} + ${sq('(−10)')})<br>= √(4 + 196 + 100) = √300 = 10√3.`,
          `<b>Step 3: area of triangle.</b><br>Area = ${HALF}${ABSAXB} = ${HALF} · 10√3 = 5√3 square units.`,
          `<b>Step 4: perpendicular unit vector.</b><br>${nh} = ±${fr(AXB, ABSAXB)}<br>= ±${fr('1', '10√3')}(${ijk('−2', '−14', '−10')}).`,
        ],
        ans: `Area = 5√3 sq. units; ${nh}${NB}=${NB}±${fr('1', '5√3')}(−${ii}${NB}−${NB}7${jj}${NB}−${NB}5${kk}).`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (Lagrange identity + constraints)',
        q: `Two vectors ${va} and ${vb} satisfy ${ABSA} = 5, ${ABSB} = 4, and ${ADOTB} = 10. Without finding the angle explicitly, evaluate ${ABSAXB} and then the area of the parallelogram whose diagonals are ${va} + ${vb} and ${va} − ${vb}.`,
        steps: [
          `<b>Step 1: use Lagrange’s identity</b> (Theorem 3) to get ${ABSAXB} directly:<br>${LAGRANGE}.<br>${sq('10')} + ${abs2(AXB)} = 25 · 16 = 400<br>⇒ ${abs2(AXB)} = 300${NB}⇒${NB}${ABSAXB} = 10√3.`,
          `<b>Step 2: area from the diagonals.</b> The area of a parallelogram in terms of its diagonals ${d1}, ${d2} is ${HALF}${abs(cross(d1, d2))}. With ${d1} = ${va} + ${vb} and ${d2} = ${va} − ${vb},<br>${cross(d1, d2)} = (${va} + ${vb}) × (${va} − ${vb})<br>= ${cross(va, va)} − ${AXB} + ${BXA} − ${cross(vb, vb)}<br>(${cross(va, va)} = ${ZERO}, ${cross(vb, vb)} = ${ZERO}).`,
          `Since ${BXA} = −${AXB}, this is −${AXB} − ${AXB} = −2(${AXB}).`,
          `<b>Step 3: finish.</b><br>Area = ${HALF}${abs(`−2(${AXB})`)} = ${HALF} · 2${ABSAXB}<br>= ${ABSAXB} = 10√3 square units.`,
          '(<b>Elegant outcome:</b> a parallelogram’s area equals the magnitude of the cross product of its side vectors, and here the diagonal computation reproduces it.) ■',
        ],
        ans: `${ABSAXB} = 10√3; area = 10√3 sq. units.`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> If ${va} = ${ijk('', '+', '+')} and ${vb} = ${ijk('2', '−', '+3')}, find ${ADOTB} and the projection of ${vb} on ${va}.`,
            a: `${ADOTB} = 4; projection of ${vb} on ${va} = ${fr('4', '√3')}.`,
          },
          {
            q: `<b>[CBSE]</b> Find the area of the parallelogram whose adjacent sides are ${va} = 2${ii} + ${jj} and ${vb} = ${ii} + 3${jj}.`,
            a: '5 sq. units.',
          },
          {
            q: `<b>[JEE Main]</b> Find ${la} so that ${va} = 2${ii} + ${la}${jj} + ${kk} and ${vb} = ${ijk('', '−2', '+3')} are perpendicular.`,
            a: `${la} = ${fr('5', '2')}.`,
          },
          {
            q: `<b>[JEE Main]</b> If ${ABSA} = 3, ${ABSB} = 5 and the angle between them is 60°, find ${ABSAXB} and ${ADOTB}.`,
            a: `${ABSAXB} = ${fr('15√3', '2')}; ${ADOTB} = ${fr('15', '2')}.`,
          },
          {
            q: `<b>[JEE Advanced]</b> Vectors ${va}, ${vb} satisfy ${abs(`${va} + ${vb}`)} = ${abs(`${va} − ${vb}`)}. Prove that ${va} ⊥ ${vb}.`,
            a: `Squaring both sides gives ${ADOTB} = 0, hence perpendicular.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `If ${ADOTB} = ${ABSAXB}, the angle between ${va} and ${vb} is:`,
        opts: [
          { label: '30°', nudge: '<b>(a)</b> tan 30° ≠ 1.' },
          { label: '45°', nudge: null },
          {
            label: '60°',
            nudge: `<b>(c)</b> ${th} = 60° gives tan${NB}${th} = √3, not 1: it would need ${ABSAXB} = √3(${ADOTB}).`,
          },
          {
            label: '90°',
            nudge: '<b>(d)</b> 90° makes the dot product 0 but the cross product maximal: they cannot be equal (unless both are zero).',
          },
        ],
        correct: 1,
        solution: `${AB_MODS} ${COS(th)} = ${AB_MODS} ${SIN(th)}${NB}⇒${NB}tan${NB}${th} = 1${NB}⇒${NB}${th} = 45°.`,
      },
      {
        t: 'mcq',
        q: `For non-zero vectors, ${AXB} = ${ZERO} implies:`,
        opts: [
          {
            label: `${va} ⊥ ${vb}`,
            nudge: `<b>(a)</b> ${va} ⊥ ${vb} is what a zero <b>dot</b> product says: the classic dot/cross swap.`,
          },
          { label: `${va} ∥ ${vb}`, nudge: null },
          { label: `${ABSA} = ${ABSB}`, nudge: '<b>(c)</b> equal magnitudes have nothing to do with the cross product.' },
          {
            label: `${ADOTB} = 0`,
            nudge: `<b>(d)</b> ${ADOTB} = 0 is the <b>dot</b>-product zero condition (perpendicular vectors): the classic dot/cross swap.`,
          },
        ],
        correct: 1,
        solution: `A vanishing cross product means ${SIN(th)} = 0, i.e. ${th} = 0 or π: the vectors are parallel (collinear).`,
      },
      {
        t: 'mcq',
        q: `The projection of ${va} = ${ijk('4', '−3', '+')} on ${vb} = ${ijk('2', '+', '−2')} is:`,
        opts: [
          { label: '1', nudge: null },
          {
            label: fr('3', '√26'),
            nudge: `<b>(b)</b> divides by ${ABSA} = √26 instead of ${ABSB}: projected onto the wrong vector.`,
          },
          { label: '3', nudge: `<b>(c)</b> stops at the dot product, forgetting to divide by ${ABSB}.` },
          {
            label: fr('1', '3'),
            nudge: `<b>(d)</b> divides by the squared magnitude, ${fr('3', '9')} = ${fr('1', '3')}.`,
          },
        ],
        correct: 0,
        solution: `${ADOTB} = 8 − 3 − 2 = 3; ${ABSB} = √(4 + 1 + 4) = 3; projection = ${fr('3', '3')} = 1.`,
      },
      {
        t: 'mcq',
        q: `The area of the triangle with vertices ${O}${pt('0', '0', '0')}, ${A}${pt('1', '2', '2')}, ${B}${pt('2', '1', '−2')} is:`,
        opts: [
          { label: fr('9', '2'), nudge: null },
          {
            label: '9',
            nudge: `<b>(b)</b> forgets the factor ${HALF} (parallelogram area, not triangle).`,
          },
          {
            label: fr('√161', '2'),
            nudge: `<b>(c)</b> would need ${abs2(cross(vOA, vOB))} = 161. No sign slip in the cofactors gives that (a wrong sign on a whole component, such as the ${jj} term, even leaves the magnitude 9): recompute √(36 + 36 + 9) = 9.`,
          },
          {
            label: fr('3√10', '2'),
            nudge: `<b>(d)</b> would need ${abs2(cross(vOA, vOB))} = 90, not 81: a slip in the squares or the cofactors. Keep the signs +, −, + and recompute √(36 + 36 + 9) = 9.`,
          },
        ],
        correct: 0,
        solution: `${cross(vOA, vOB)} = ${vm(ROW_IJK, ['1', '2', '2'], ['2', '1', '−2'])}<br>= ${ii}(−4 − 2) − ${jj}(−2 − 4) + ${kk}(1 − 4)<br>= ${ijk('−6', '+6', '−3')};<br>magnitude √(36 + 36 + 9) = √81 = 9; area = ${HALF} · 9 = ${fr('9', '2')}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Dot/cross zero-condition swap.</b> ${ADOTB} = 0${NB}⇒${NB}perpendicular; ${AXB} = ${ZERO}${NB}⇒${NB}parallel. Memorise them as opposites and you will never mix them up.`,
          `<b>Forgetting to divide for a projection.</b> Projection of ${va} on ${vb} is ${fr(ADOTB, ABSB)}, <b>not</b> just ${ADOTB}. And it is divided by the magnitude of the vector you project onto.`,
          `<b>Sign error in the ${jj} cofactor.</b> The determinant expansion alternates +, −, +. The middle (${jj}) term carries a minus sign: the most common cross-product slip in exams.`,
          `<b>Treating the cross product as commutative.</b> ${AXB} = −${BXA}. If a problem fixes the orientation (area is fine either way, but a perpendicular direction is not), order matters.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: let the sign of the dot product read the angle for you.</b> Before any heavy computation, note: ${ADOTB} > 0${NB}⇒${NB}acute, = 0${NB}⇒${NB}right angle, < 0${NB}⇒${NB}obtuse. This instantly sanity-checks projections (a negative projection must pair with a negative dot product) and kills wrong MCQ options.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Dot product</b>', note: `${ADOTB} = ${AB_MODS} ${COS(th)} = ${DOT_COMPS}: a <b>scalar</b>.` },
          {
            f: '<b>Cross product</b>',
            note: `${AXB} = ${AB_MODS} ${SIN(th)}${NB}${nh} = ${vm(ROW_IJK, ROW_A, ROW_B)}: a <b>vector</b>.`,
          },
          {
            f: '<b>Angle</b>',
            note: `${COS(th)} = ${fr(ADOTB, AB_MODS)}. <b>Projection of ${va} on ${vb}:</b> ${fr(ADOTB, ABSB)}.`,
          },
          { f: '<b>Conditions</b>', note: `${va} ⊥ ${vb}${NB}⟺${NB}${ADOTB} = 0; ${va} ∥ ${vb}${NB}⟺${NB}${AXB} = ${ZERO}.` },
          {
            f: '<b>Areas</b>',
            note: `parallelogram = ${ABSAXB}; triangle = ${HALF}${ABSAXB}; perpendicular unit vector = ±${fr(AXB, ABSAXB)}.`,
          },
          { f: '<b>Lagrange</b>', note: `${LAGRANGE}.` },
        ],
        aids: [
          '“Dot = aligned, Cross = crossed” (dot peaks when the vectors point the same way, cross peaks when perpendicular).',
          '“Dot zero = perpendicular; Cross zero = parallel.”',
          '“Project? Divide by the one you land ON.”',
          '“Middle sign of the determinant is minus.”',
        ],
      },
    ],
  },

  // ──────────────── Topic 03 · Subtopic 03 · pp. 656–663 ────────────────
  {
    n: '03',
    title: 'Product of Three Vectors & Vector Applications',
    kalam: 'If the three vectors all lie flat in one plane, the “box” is squashed completely flat: it has zero thickness and therefore zero volume.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Pure JEE territory. The <b>scalar triple product</b> (coplanarity, volume of a parallelepiped/tetrahedron) is a near-guaranteed 1–2 questions in <b>JEE Main</b> and a frequent building block in <b>JEE Advanced</b> ${ESTIMATE}. The <b>vector triple product</b> (the BAC–CAB identity) is a recurring <b>JEE Advanced</b> tool ${ESTIMATE}. Older CBSE papers set scalar triple product questions, but the current CBSE syllabus does not list the triple products, as far as we know, so treat this as your JEE-edge material.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'You already know two ways to multiply vectors: the dot product (a number measuring overlap) and the cross product (a vector measuring spread). The natural next question is: what happens when <b>three</b> vectors enter the picture? There are exactly two sensible combinations, and each answers a beautiful geometric question.',
      },
      {
        t: 'p',
        html: `<b>The scalar triple product: “how much space do three vectors enclose?”</b> Take three vectors ${va}, ${vb}, ${vc} sprouting from one corner. They frame a slanted box, a <b>parallelepiped</b> (think of a brick that has been pushed sideways so its faces are slanted, like a stack of books shoved out of square). The scalar triple product, written ${TRIPLE} = ${dot(va, `(${BXC})`)}, gives the <b>volume</b> of that box (up to a sign). The recipe is elegant: ${BXC} produces a vector perpendicular to the base with magnitude equal to the base’s area; dotting it with ${va} then picks out the height. Area of base × height = volume. The answer is a <b>scalar</b>, hence the name.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> if the three vectors all lie flat in one plane, the “box” is squashed completely flat: it has zero thickness and therefore zero volume. So the scalar triple product being zero is the exact signal that the three vectors are <b>coplanar</b>: they share a single plane and one of them is a “mixture” of the other two. This is the same thing as saying the three vectors are <b>linearly dependent</b>. That single fact, ${TRIPLE} = 0${NB}⟺${NB}coplanar, is the most exam-tested idea in this topic.`,
      },
      {
        t: 'p',
        html: `<b>The vector triple product: “spin a cross product again.”</b> Now cross a vector with a cross product: ${A_BXC}. Since ${BXC} is perpendicular to the plane of ${vb} and ${vc}, crossing it again with ${va} swings the result back into the plane of ${vb} and ${vc}. So ${A_BXC} is always a blend of ${vb} and ${vc}, and there is a clean formula for the blend, the famous <b>BAC–CAB rule</b>:<br>${A_BXC} = ${BAC}.`,
      },
      {
        t: 'p',
        html: `<b>Limiting Conditions & Assumptions.</b><br>• <b>The bracket is not free in its grouping.</b> The vector triple product is <b>not associative</b>: ${A_BXC} ≠ ${AXB_C} in general. The brackets genuinely matter.<br>• <b>Sign vs. magnitude.</b> ${TRIPLE} can be negative: its sign encodes orientation (right- vs left-handed). Volume is its <b>absolute value</b>: ${Vv} = ${ABS_TRIPLE}.<br>• <b>Coplanar = dependent = zero.</b> Three coplanar vectors give ${TRIPLE} = 0; equivalently they cannot form a basis for space.<br>• <b>The reciprocal system needs non-coplanarity.</b> It is only defined when ${rel(TRIPLE, '≠', '0')}, since that quantity sits in the denominator.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      { t: 'p', html: '<b>Scalar Triple Product (Box Product)</b>' },
      { t: 'p', html: '<b>Definition.</b>' },
      {
        t: 'formula',
        kicker: 'Scalar triple product',
        main: `${TRIPLE} = ${dot(va, `(${BXC})`)}`,
        legend: [`${va}, ${vb}, ${vc} = the three vectors`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Determinant form.</b> For ${va} = ${A_COMPS}, etc.:`,
      },
      {
        t: 'formula',
        kicker: 'Scalar triple product, determinant form',
        main: `${TRIPLE} = ${vm(ROW_A, ROW_B, ROW_C)}`,
        legend: [`${cmp('a', '1')}, ${cmp('a', '2')}, ${cmp('a', '3')} = the components of ${va} (likewise for ${vb} and ${vc})`],
        note: null,
      },
      { t: 'p', html: 'The result is a <b>scalar</b>.' },
      {
        t: 'p',
        html: `<b>Properties.</b><br>• <b>Cyclic invariance:</b> ${TRIPLE} = ${box(vb, vc, va)} = ${box(vc, va, vb)}.<br>• <b>Swap two${NB}⇒${NB}sign flips:</b> ${TRIPLE} = −${box(vb, va, vc)}.<br>• <b>Dot and cross are interchangeable:</b> ${dot(va, `(${BXC})`)} = ${dot(`(${AXB})`, vc)}.<br>• <b>Repeated vector${NB}⇒${NB}zero:</b> if any two of ${va}, ${vb}, ${vc} are equal (or parallel), ${TRIPLE} = 0.<br>• <b>Coplanarity / linear dependence:</b> ${TRIPLE} = 0${NB}⟺${NB}${va}, ${vb}, ${vc} are coplanar (linearly dependent).<br>• <b>Scalar factors pull out:</b> ${box(`${la}${va}`, vb, vc)} = ${la}${TRIPLE}.`,
      },
      {
        t: 'p',
        html: `<b>Geometric applications.</b><br>• <b>Volume of parallelepiped</b> with coterminous edges ${va}, ${vb}, ${vc}: ${Vv} = ${ABS_TRIPLE}.<br>• <b>Volume of tetrahedron</b> with the same coterminous edges: ${Vv} = ${SIXTH}${ABS_TRIPLE}.<br>• <b>Coplanarity of four points</b> ${A}, ${B}, ${C}, ${D}: ${BOX4}${NB}=${NB}0.`,
      },
      { t: 'p', html: '<b>Vector Triple Product</b>' },
      { t: 'p', html: '<b>Definition & expansion (BAC–CAB rule).</b>' },
      {
        t: 'formula',
        kicker: 'Vector triple product (BAC–CAB rule)',
        main: `${A_BXC} = ${BAC}<br>${AXB_C} = (${dot(va, vc)})${vb} − (${dot(vb, vc)})${va}`,
        legend: [`${va}, ${vb}, ${vc} = any three vectors`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Properties.</b><br>• The result lies in the plane of the two vectors inside the bracket.<br>• <b>Non-associative:</b> the two expansions above are generally different.<br>• ${A_BXC} + ${vb} × (${cross(vc, va)})<br>+ ${vc} × (${AXB}) = ${ZERO} (Jacobi identity).`,
      },
      {
        t: 'p',
        html: `<b>Linear Dependence & Basis</b><br>• Vectors ${va}, ${vb}, ${vc} are <b>linearly independent</b>${NB}⟺${NB}${rel(TRIPLE, '≠', '0')}${NB}⟺${NB}they are non-coplanar.<br>• Three non-coplanar vectors form a <b>basis</b>: every ${vr} can be written uniquely as ${vr} = ${x}${va} + ${y}${vb} + ${z}${vc}.`,
      },
      {
        t: 'p',
        html: `<b>Reciprocal System of Vectors (JEE Advanced)</b><br>For non-coplanar ${va}, ${vb}, ${vc} (so ${rel(TRIPLE, '≠', '0')}), the reciprocal triad is:`,
      },
      {
        t: 'formula',
        kicker: 'Reciprocal system of vectors',
        main: `${vap} = ${fr(BXC, TRIPLE)}<br>${vbp} = ${fr(cross(vc, va), TRIPLE)}<br>${vcp} = ${fr(AXB, TRIPLE)}`,
        legend: [`${vap}, ${vbp}, ${vcp} = the reciprocal triad`, `${TRIPLE} = the box product (non-zero)`],
        note: null,
      },
      {
        t: 'p',
        html: `satisfying ${dot(va, vap)} = ${dot(vb, vbp)} = ${dot(vc, vcp)} = 1 (and all “mixed” dot products = 0), with ${TRIPLE}${box(vap, vbp, vcp)} = 1.`,
      },

      { t: 'part', title: 'Theorems and proofs' },
      {
        t: 'p',
        html: `<b>Theorem 1: ${TRIPLE} equals the volume of the parallelepiped</b><br><b>Claim.</b> ${ABS_TRIPLE} is the volume of the parallelepiped with coterminous edges ${va}, ${vb}, ${vc}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Build the box on edges ${va}, ${vb}, ${vc}. Take the face spanned by ${vb} and ${vc} as the base; its area is ${abs(BXC)}, and ${BXC} points perpendicular to that base. <b>Why this step:</b> the cross product simultaneously gives the base area (as its magnitude) and the base’s normal direction (as its orientation): exactly the two things a volume needs. The height of the box is the projection of the slant edge ${va} onto that normal direction, namely ${ABSA}${NB}${COS(ph)}, where ${ph} is the angle between ${va} and ${BXC}. Then<br>${Vv} = (base area) × (height)<br>= ${abs(BXC)}(${ABSA}${NB}${COS(ph)})<br>= ${ABSA}${NB}${abs(BXC)} ${COS(ph)} = ${dot(va, `(${BXC})`)}.<br>Since ${COS(ph)} may be negative (if ${va} lies on the far side of the base plane), we take the absolute value: ${Vv} = ${ABS_TRIPLE}. ■`,
      },
      {
        t: 'p',
        html: `<b>Immediate corollary (coplanarity).</b> If ${va}, ${vb}, ${vc} are coplanar, the box is flat, ${Vv} = 0, hence ${TRIPLE} = 0, and conversely. The tetrahedron on the same three edges is one-sixth of the box, giving ${Vtet} = ${SIXTH}${ABS_TRIPLE}.`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2: Cyclic invariance and dot–cross interchange</b><br><b>Claim.</b> ${TRIPLE} = ${box(vb, vc, va)} = ${box(vc, va, vb)}, and ${dot(va, `(${BXC})`)} = ${dot(`(${AXB})`, vc)}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Write ${TRIPLE} as the determinant with rows ${va}, ${vb}, ${vc}. A cyclic permutation of three rows is an even permutation (two row swaps), and an even permutation leaves a determinant unchanged. <b>Why this step:</b> each single row swap multiplies a determinant by −1; a cyclic shift is two swaps, so (−1)<sup>2</sup> = 1. Hence all three cyclic orderings share one value. For the interchange, note ${dot(`(${AXB})`, vc)} = ${TRIPLE} by the same determinant (now read as ${dot(vc, `(${AXB})`)} = ${box(vc, va, vb)} = ${TRIPLE} by cyclic invariance). So the dot and the cross can trade places without changing the value. ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 3: The vector triple product expansion (BAC–CAB)</b><br><b>Claim.</b> ${A_BXC} = ${BAC}.`,
      },
      {
        t: 'p',
        html: `<b>Proof (structure + verification).</b> First, <b>why the result is a combination of ${vb} and ${vc}:</b> the inner product ${BXC} is perpendicular to the plane Π of ${vb} and ${vc}; crossing again with ${va} yields a vector perpendicular to ${BXC}, i.e. back in Π. So ${A_BXC} = ${la}${vb} + ${mu}${vc} for some scalars ${la}, ${mu} (for non-parallel ${vb}, ${vc}; if ${vb} ∥ ${vc}, both sides of the claim are ${ZERO}). <b>Why this step:</b> any vector in the plane Π is a linear combination of the spanning vectors ${vb} and ${vc}. To fix ${la}, ${mu}, evaluate both sides in components along the standard basis (a direct, if tedious, expansion of the determinant-defined cross products), or check the standard basis cases ${va}, ${vb}, ${vc} ∈ {${ii}, ${jj}, ${kk}}, which the identity reproduces exactly (both sides are linear in each of ${va}, ${vb}, ${vc}, so these 27 cases are enough). Dotting the claimed identity with ${va} also gives ${dot(va, `[${A_BXC}]`)} = 0, consistent with the left side being perpendicular to ${va}. The verified scalars are ${la} = ${dot(va, vc)} and ${mu} = −(${dot(va, vb)}), giving the stated rule. ■`,
      },
      {
        t: 'p',
        html: `<b>Mnemonic for the signs:</b> the surviving vectors are the two inside the bracket; each is multiplied by the dot product of the other two, and the <b>first term is positive</b> (the one whose vector is adjacent to the outer vector across the bracket). “${va} crosses (b cross c)” → “${vb} times (${dot(va, vc)}) <b>minus</b> ${vc} times (${dot(va, vb)}).”`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level (older papers)',
        q: `Find ${TRIPLE} and hence the volume of the parallelepiped with coterminous edges ${va} = ${ijk('2', '+', '−')}, ${vb} = ${ijk('', '+2', '+3')}, ${vc} = ${ijk('−', '+', '+2')}.`,
        steps: [
          `<b>Step 1: set up the determinant.</b><br>${TRIPLE} = ${vm(['2', '1', '−1'], ['1', '2', '3'], ['−1', '1', '2'])}.`,
          `<b>Step 2: expand along the first row.</b><br>= 2${vm(['2', '3'], ['1', '2'])} − 1${vm(['1', '3'], ['−1', '2'])}<br>+ (−1)${vm(['1', '2'], ['−1', '1'])}.<br>= 2(4 − 3) − 1(2 + 3) − 1(1 + 2)<br>= 2(1) − 1(5) − 1(3) = 2 − 5 − 3 = −6.`,
          `<b>Step 3: volume.</b> ${Vv} = ${ABS_TRIPLE} = |${WJ}−6| = 6 cubic units.`,
          '(The negative sign merely indicates a left-handed ordering; volume is the magnitude.)',
        ],
        ans: `${TRIPLE} = −6; volume = 6 cubic units.`,
      },
      {
        t: 'ex',
        tag: 'Conceptual Trap (coplanarity)',
        q: `Find ${la} so that the vectors ${va} = ${ijk('', '−', '+')}, ${vb} = ${ijk('2', '+', '−')}, ${vc} = ${la}${ii} − ${jj} + 2${kk} are coplanar.`,
        steps: [
          `<b>The trap:</b> students set the determinant equal to a volume value, or mishandle the alternating signs of the expansion. Coplanar means the box is <b>flat</b>, so set ${TRIPLE} = 0.`,
          `<b>Step 1: determinant = 0.</b><br>${vm(['1', '−1', '1'], ['2', '1', '−1'], [la, '−1', '2'])} = 0.`,
          `<b>Step 2: expand along row 1.</b><br>1${vm(['1', '−1'], ['−1', '2'])} − (−1)${vm(['2', '−1'], [la, '2'])}<br>+ 1${vm(['2', '1'], [la, '−1'])} = 0.<br>1(2 − 1) + 1(4 + ${la}) + 1(−2 − ${la}) = 0.<br>1 + (4 + ${la}) + (−2 − ${la}) = 0<br>⇒ 1 + 4 + ${la} − 2 − ${la} = 0${NB}⇒${NB}3 = 0.`,
          `<b>Step 3: interpret.</b> The ${la} terms cancel and we are left with 3 = 0, which is impossible. Therefore <b>no value of ${la}</b> makes these three vectors coplanar: for every ${la} they span a genuine (non-flat) box.`,
          `(The trap would have a careless student “solve” 3 = 0 or drop the middle sign and invent a spurious ${la}.)`,
        ],
        ans: `No such ${la} exists.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (tetrahedron volume from four points)',
        q: `Find the volume of the tetrahedron with vertices ${A}${pt('1', '1', '1')}, ${B}${pt('3', '2', '1')}, ${C}${pt('2', '4', '3')}, ${D}${pt('4', '3', '5')}.`,
        steps: [
          `<b>Step 1: form three edge vectors from${NB}${A}.</b><br>${vAB} = ${ijk('2', '+', '+0')},<br>${vAC} = ${ijk('', '+3', '+2')},<br>${vAD} = ${ijk('3', '+2', '+4')}.`,
          `<b>Step 2: scalar triple product.</b><br>${BOX4} = ${vm(['2', '1', '0'], ['1', '3', '2'], ['3', '2', '4'])}<br>= 2(12 − 4) − 1(4 − 6) + 0<br>= 2(8) − 1(−2) = 16 + 2 = 18.`,
          `<b>Step 3: tetrahedron volume.</b><br>${Vv} = ${SIXTH}${abs(BOX4)} = ${SIXTH}(18) = 3 cubic units.`,
          '(<b>Sanity:</b> a non-zero triple product confirms the four points are not coplanar, so a genuine tetrahedron exists.)',
        ],
        ans: '3 cubic units.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (vector triple product identity)',
        q: `Simplify ${A_BXC} + ${vb} × (${cross(vc, va)}) + ${vc} × (${AXB}), and show that if ${va} + ${vb} + ${vc} = ${ZERO} then ${AXB} = ${BXC} = ${cross(vc, va)}.`,
        steps: [
          `<b>Part 1: expand each term by BAC–CAB.</b><br>${A_BXC} = ${BAC},<br>${vb} × (${cross(vc, va)}) = (${dot(vb, va)})${vc} − (${dot(vb, vc)})${va},<br>${vc} × (${AXB}) = (${dot(vc, vb)})${va} − (${dot(vc, va)})${vb}.`,
          `Add. Group the ${va} terms: −(${dot(vb, vc)})${va} + (${dot(vc, vb)})${va} = ${ZERO} (since ${dot(vb, vc)} = ${dot(vc, vb)}). The ${vb} and ${vc} terms cancel identically by the same symmetry. So the whole sum is ${ZERO}: <b>the Jacobi identity</b>.`,
          `<b>Part 2: use ${va} + ${vb} + ${vc} = ${ZERO}.</b> Cross the equation ${va} + ${vb} + ${vc} = ${ZERO} with ${va} on the left:<br>${cross(va, va)} + ${AXB} + ${cross(va, vc)} = ${ZERO}<br>⇒ ${ZERO} + ${AXB} − ${cross(vc, va)} = ${ZERO}${NB}⇒${NB}${AXB} = ${cross(vc, va)}.`,
          `Now cross the same equation with ${vb}:<br>${BXA} + ${cross(vb, vb)} + ${BXC} = ${ZERO}<br>⇒ −${AXB} + ${ZERO} + ${BXC} = ${ZERO}${NB}⇒${NB}${BXC} = ${AXB}.`,
          `Combining, ${AXB} = ${BXC} = ${cross(vc, va)}. ■`,
          `(This is the vector engine behind the sine rule for a triangle: the three cross products having equal magnitude says ${AB_MODS}${NB}${SIN(C)} etc. are all equal.)`,
        ],
        ans: `The cyclic sum is ${ZERO} (Jacobi identity); and ${va} + ${vb} + ${vc} = ${ZERO}${NB}⇒${NB}${AXB} = ${BXC} = ${cross(vc, va)}.`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE, older papers]</b> Evaluate ${box(ii, jj, kk)} and ${box(ii, kk, jj)}.`,
            a: `${box(ii, jj, kk)} = 1; ${box(ii, kk, jj)} = −1.`,
          },
          {
            q: `<b>[CBSE, older papers]</b> Find the volume of the parallelepiped with coterminous edges ${va} = ${ii} + ${jj}, ${vb} = ${jj} + ${kk}, ${vc} = ${kk} + ${ii}.`,
            a: '2 cubic units.',
          },
          {
            q: `<b>[JEE Main]</b> Show that the points ${A}${pt('1', '2', '3')}, ${B}${pt('2', '3', '4')}, ${C}${pt('3', '4', '5')}, ${D}${pt('0', '1', '2')} are coplanar.`,
            a: `${BOX4} = 0, hence coplanar. (In fact ${vAC} = 2${vAB} and ${vAD} = −${vAB}: all four points lie on one line.)`,
          },
          {
            q: `<b>[JEE Main]</b> If ${va} = ${ijk('2', '−', '+')}, ${vb} = ${ijk('', '+2', '−3')}, ${vc} = ${ijk('3', '+', '+')}, find ${A_BXC} using the BAC–CAB rule.`,
            a: `${A_BXC} = ${BAC}<br>= 6${vb} − (−3)${vc} = 6${vb} + 3${vc} = ${ijk('15', '+15', '−15')}.`,
          },
          {
            q: `<b>[JEE Advanced]</b> Prove that [${va}${NB}+${NB}${vb}${NB}${NB}${NB}${vb}${NB}+${NB}${vc}${NB}${NB}${NB}${vc}${NB}+${NB}${va}] = 2${TRIPLE}.`,
            a: `Expand using multilinearity; cross terms with repeated vectors vanish, leaving 2${TRIPLE}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `If ${TRIPLE} = 0 for non-zero vectors, then ${va}, ${vb}, ${vc} are:`,
        opts: [
          {
            label: 'mutually perpendicular',
            nudge: '<b>(a)</b> mutually perpendicular vectors give a maximal box, not a flat one.',
          },
          { label: 'coplanar', nudge: null },
          {
            label: 'collinear',
            nudge: '<b>(c)</b> collinear is stronger than required (collinear${NB}⇒${NB}coplanar, but coplanar does not need collinear).',
          },
          { label: 'equal in magnitude', nudge: '<b>(d)</b> magnitude is irrelevant to coplanarity.' },
        ],
        correct: 1,
        solution: 'A zero box product means the parallelepiped is flat: the vectors share a plane (linearly dependent).',
      },
      {
        t: 'mcq',
        q: `${A_BXC} equals:`,
        opts: [
          {
            label: `(${dot(va, vb)})${vc} − (${dot(va, vc)})${vb}`,
            nudge: '<b>(a)</b> has both signs flipped: the classic sign reversal.',
          },
          { label: BAC, nudge: null },
          {
            label: `(${dot(va, vb)})${vc} − (${dot(vb, vc)})${va}`,
            nudge: '<b>(c)</b> matches neither expansion (wrong first term): a trap.',
          },
          {
            label: `(${dot(vb, vc)})${va} − (${dot(va, vc)})${vb}`,
            nudge: `<b>(d)</b> mixes vectors that do not belong (the answer must live in the plane of ${vb}, ${vc}, so no ${va} component can survive).`,
          },
        ],
        correct: 1,
        solution: 'Direct BAC–CAB rule.',
      },
      {
        t: 'mcq',
        q: `The volume of the tetrahedron with coterminous edges ${ii} + ${jj}, ${jj} + ${kk}, ${kk} + ${ii} is:`,
        opts: [
          { label: '2', nudge: `<b>(a)</b> is the parallelepiped volume (forgot the ${SIXTH}).` },
          {
            label: '1',
            nudge: `<b>(b)</b> halved the box like a triangle (${HALF}) rather than a tetrahedron (${SIXTH}).`,
          },
          { label: fr('1', '3'), nudge: null },
          { label: SIXTH, nudge: `<b>(d)</b> applied ${SIXTH} to a triple product of 1 instead of 2.` },
        ],
        correct: 2,
        solution: `The box product is ${vm(['1', '1', '0'], ['0', '1', '1'], ['1', '0', '1'])} = 2; tetrahedron volume = ${SIXTH}(2) = ${fr('1', '3')}.`,
      },
      {
        t: 'mcq',
        q: `${TRIPLE} is <b>not</b> equal to:`,
        opts: [
          { label: box(vb, vc, va), nudge: '<b>(a)</b> is a cyclic shift: equal.' },
          { label: dot(`(${AXB})`, vc), nudge: '<b>(b)</b> dot–cross interchange: equal.' },
          { label: box(vb, va, vc), nudge: null },
          { label: dot(va, `(${BXC})`), nudge: '<b>(d)</b> is the definition: equal.' },
        ],
        correct: 2,
        solution: `Swapping the first two entries flips the sign: ${box(vb, va, vc)} = −${TRIPLE}, so it is not equal (unless the value is zero). Only (c) breaks the equality.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Dropping the absolute value for volume.</b> ${TRIPLE} may be negative; volume is ${ABS_TRIPLE}. Never report a negative volume.`,
          `<b>Confusing the two volume factors.</b> Parallelepiped uses the full triple product; the tetrahedron uses ${SIXTH} of it. (A triangle’s ${HALF} has no place here.)`,
          `<b>Treating the vector triple product as associative.</b> ${A_BXC} ≠ ${AXB_C}. The bracket position decides which two vectors survive in the BAC–CAB expansion.`,
          '<b>Sign error in the BAC–CAB rule.</b> It is “middle vector times (dot of the outer pair), <b>minus</b> the other inner vector times (dot of the remaining pair)”: first term positive.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: coplanarity in one line.</b> To test whether three vectors are coplanar, or whether four points lie in a plane, do <b>not</b> hunt for a common plane. Just compute one determinant: ${TRIPLE} (or ${BOX4} for points). Zero${NB}⇒${NB}coplanar; non-zero${NB}⇒${NB}not. It collapses a geometry problem into a 3 × 3 determinant.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Scalar triple product</b>',
            note: `${TRIPLE} = ${dot(va, `(${BXC})`)} = ${vm(ROW_A, ROW_B, ROW_C)}: a <b>scalar</b>.`,
          },
          { f: '<b>Volumes</b>', note: `parallelepiped = ${ABS_TRIPLE}; tetrahedron${NB}=${NB}${SIXTH}${ABS_TRIPLE}.` },
          {
            f: '<b>Coplanarity</b>',
            note: `${TRIPLE} = 0${NB}⟺${NB}coplanar${NB}⟺${NB}linearly dependent; four points coplanar${NB}⟺${NB}${BOX4}${NB}=${NB}0.`,
          },
          {
            f: '<b>Cyclic / swap</b>',
            note: `${TRIPLE} = ${box(vb, vc, va)} = ${box(vc, va, vb)}; one swap flips sign; dot ↔ cross interchangeable.`,
          },
          { f: '<b>Vector triple product</b>', note: `${A_BXC} = ${BAC} (BAC–CAB); <b>non-associative</b>.` },
          {
            f: '<b>Reciprocal system</b>',
            note: `${vap} = ${fr(BXC, TRIPLE)}, etc.; ${TRIPLE}${box(vap, vbp, vcp)} = 1.`,
          },
        ],
        aids: [
          '“Box product = volume of the box.”',
          '“Flat box = zero = coplanar.”',
          '“Tetra takes a sixth.”',
          '“BAC minus CAB: middle vector first, first sign plus.”',
        ],
      },
    ],
  },
];
