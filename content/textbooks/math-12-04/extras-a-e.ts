import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Additional topics A–E, pp. 282–297 of the Class 12 Mathematics
 * Master Reference (October 2026 edition), word for word: the "Chapter 4:
 * Determinants — Additional Topics" part's Addenda A to E, with the book's
 * letters. Its heading is not copied; its p. 282 opening paragraphs are the
 * first paragraphs of A's "Introduction". Each addendum's opening text is its
 * "Introduction" part, then its own headings: Method (D: its three headings
 * D.1, D.2, D.3; E: Method and "The screen can lie: a precise statement"), the
 * run of "Example X.N" worked examples (one part, "Worked examples"), and
 * "Practice — Addendum X" ("Practice", answers set against their questions).
 * E's answers end at the top of p. 297, where Addendum P starts. The book's
 * example and part numbers in running text are reworded to what the reader
 * shows. The displayed equations stay in the prose (no formula cards, as the
 * Chapter 3 additional topics). Every determinant is a <vmat> (rows <r>,
 * cells <c>). No drawings on these pages. Every fraction is stacked (<frac>);
 * no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const grid = (tag: string, rows: string[][]) =>
  `<${tag}>${rows.map((r) => `<r>${r.map((c) => `<c>${c}</c>`).join('')}</r>`).join('')}</${tag}>`;
/** A determinant between two bars: one array per row, one string per cell. */
const vm = (...rows: string[][]) => grid('vmat', rows);
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** |…| as a determinant or modulus, the opening bar glued to what it holds. */
const bar = (s: string) => `|⁠${s}|`;
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const e = I('e');
const i = I('i');
const j = I('j');
const k = I('k');
const n = I('n');
const r = I('r');
const s = I('s');
const t = I('t');
const u = I('u');
const v = I('v');
const x = I('x');
const y = I('y');
const z = I('z');
const A = I('A');
const B = I('B');
const M = I('M');
const P = I('P');
const Q = I('Q');
const U = I('U');
const V = I('V');
const W = I('W');
const om = I('ω');
const al = I('α');
const be = I('β');
const ga = I('γ');
const de = I('δ');
const th = I('θ');
const ph = I('φ');
const lam = I('λ');
const mu = I('μ');
const sig = I('σ');
const D = 'Δ';

const sb = (base: string, s2: string) => `${base}<sub>${s2}</sub>`;
const sp = (base: string, s2: string) => `${base}<sup>${s2}</sup>`;
const sq = (s2: string) => sp(s2, '2');
const cu = (s2: string) => sp(s2, '3');
const om2 = sq(om);
const T = (s2: string) => sp(s2, 'T');
/** A short tuple kept on one line. */
const pr = (...s2: string[]) => `(${s2.join(`,${NB}`)})`;
const set = (...s2: string[]) => `{${s2.join(`,${NB}`)}}`;
const HALF = fr('1', '2');
const Cc = (s2: string) => sb(I('C'), s2);
const Cp = (s2: string) => `${I('C')}′<sub>${s2}</sub>`;
const R = (s2: string) => sb(I('R'), s2);
const Di = (s2: string) => sb(D, s2);
const SIN = (s2: string) => `sin${NB}${s2}`;
const COS = (s2: string) => `cos${NB}${s2}`;
const SIN2 = (s2: string) => `sin<sup>2</sup>${NB}${s2}`;
const COS2 = (s2: string) => `cos<sup>2</sup>${NB}${s2}`;
const DEG = (s2: string) => `${s2}°`;

/** a³ + b³ + c³ − 3abc */
const CUBE = `${cu(a)} + ${cu(b)} + ${cu(c)} − 3${I('abc')}`;
/** a² + b² + c² − ab − bc − ca */
const QUAD = `${sq(a)} + ${sq(b)} + ${sq(c)} − ${I('ab')} − ${I('bc')} − ${I('ca')}`;
const SQS = `[(${a} − ${b})<sup>2</sup> + (${b} − ${c})<sup>2</sup> + (${c} − ${a})<sup>2</sup>]`;
const ABC = `${a} + ${b} + ${c}`;
const F1 = `(${a} + ${om}${b} + ${om2}${c})`;
const F2 = `(${a} + ${om2}${b} + ${om}${c})`;
const I3 = `${i}√3`;
const ONES = pr('1', '1', '1');
const VDM = `(${a}${NB}−${NB}${b})(${b}${NB}−${NB}${c})(${c}${NB}−${NB}${a})`;
const V4 = sb(V, '4');
const V3 = sb(V, '3');
const e1 = sb(e, '1');
const e2 = sb(e, '2');
const e3 = sb(e, '3');
const e4 = sb(e, '4');
const V4P = `(${b} − ${a})(${c} − ${a})(${d} − ${a})(${c} − ${b})(${d} − ${b})(${d} − ${c})`;
const PROD = `∏(${x} − ${sb(a, i)})`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 282–286 ────────────────
  {
    n: 'A',
    title: 'Circulant Determinants and the Cube Roots of Unity',
    extra: true,
    kalam: 'A circulant is a determinant whose second row is the first row shifted one place and whose third row is shifted again.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topics 01 to 06 carried you from the definition through properties, area, cofactors, inverses, systems, and the advanced toolkit. Five examinable patterns still stand outside the door. Additional topic A builds the circulant machine on the cube roots of unity, which evaluates in seconds a family of determinants the column-op method grinds through. Additional topic B handles trigonometric determinants, which appear in JEE Main almost yearly ${ESTIMATE} and which the chapter never touches. Additional topic C generalises the Vandermonde argument of Topic 02 to alternants with a missing power, the standard Advanced factorisation pattern. Additional topic D extracts three consequences of Topic 03 that exams keep asking for: concurrency of three lines, the family of lines through an intersection point, and polygon areas. Additional topic E repairs the weakest link in Topic 05: what you actually do when ${D} = 0, including the honest proof of when the ${Di(i)} screen can lie to you.<br><br>Nothing here is new theory beyond one constant ${om}. Every method below is the column operation of Topic 02, the cofactor expansion of Topic 04, or the elimination instinct of Topic 05, aimed at shapes the chapter did not draw.`,
      },
      {
        t: 'p',
        html: `Topic 06 evaluated one cyclic determinant by forcing a common factor. But the family recurs constantly, especially as coefficient matrices of 3 × 3 homogeneous systems, where JEE asks “for which ${k} does a non-trivial solution exist?”, and there is a machine that reads off the answer as a product of three linear factors. The machine runs on ${om}, a primitive cube root of unity:<br>${om} = −${HALF} + ${fr('√3', '2')}${i},${NB}${NB}${cu(om)} = 1,<br>1 + ${om} + ${om2} = 0,${NB}${NB}${om} − ${om2} = ${I3}.`,
      },
      {
        t: 'p',
        html: 'A <b>circulant</b> is a determinant whose second row is the first row shifted one place and whose third row is shifted again. Two shift directions occur in the wild, and they differ by sign:',
      },
      {
        t: 'table',
        title: null,
        head: ['Row pattern', 'Value'],
        rows: [
          [`${pr(a, b, c)}, ${pr(b, c, a)}, ${pr(c, a, b)}`, `−(${CUBE})`],
          [`${pr(a, b, c)}, ${pr(c, a, b)}, ${pr(b, c, a)}`, `+(${CUBE})`],
        ],
      },
      {
        t: 'p',
        html: `If you ever forget which sign goes with which pattern, evaluate the pattern at ${pr(a, b, c)} = ${pr('1', '2', '3')}: the determinant is −18 for the first and +18 for the second, while ${CUBE} = 18.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Step 1: The two factor forms.</b> Topic 06 proved, via ${Cc('1')} → ${Cc('1')} + ${Cc('2')} + ${Cc('3')} and row reductions,<br>${CUBE}<br>= (${ABC})(${QUAD}).`,
      },
      {
        t: 'p',
        html: `The quadratic factor has a completing-the-square form worth memorising:<br>${QUAD}<br>= ${HALF}${SQS},<br>which follows by expanding the right side: the squares contribute 2${sq(a)} + 2${sq(b)} + 2${sq(c)} and the cross terms −2${I('ab')} − 2${I('bc')} − 2${I('ca')}. Since a sum of squares vanishes only term-by-term, this proves:<br>${cu(a)} + ${cu(b)} + ${cu(c)} = 3${I('abc')}<br>⟺ ${ABC} = 0 or ${a} = ${b} = ${c}.`,
      },
      {
        t: 'formula',
        kicker: 'The sum-of-cubes factor',
        main: `${CUBE} = (${ABC})(${QUAD})<br>${QUAD} = ${HALF}${SQS}`,
        legend: [`${a}, ${b}, ${c} = real numbers (the factor vanishes iff ${ABC} = 0 or ${a} = ${b} = ${c})`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Step 2: The ${om}-machine.</b> Work with the left-shift circulant<br>${D} = ${vm([a, b, c], [b, c, a], [c, a, b])},${NB}${NB}${s} = ${ABC}.`,
      },
      {
        t: 'p',
        html: `Apply three column combinations simultaneously, each built from the original columns:<br>${Cp('1')} = ${Cc('1')} + ${Cc('2')} + ${Cc('3')},<br>${Cp('2')} = ${Cc('1')} + ${om}${Cc('2')} + ${om2}${Cc('3')},<br>${Cp('3')} = ${Cc('1')} + ${om2}${Cc('2')} + ${om}${Cc('3')}.`,
      },
      {
        t: 'p',
        html: `<b>Why this is legal:</b> any simultaneous column combination multiplies ${D} by the determinant of its coefficient matrix ${M}, where column ${j} of ${M} holds the coefficients used to build ${Cp(j)}. So the price tag is det${NB}${M}: computable, and we will pay it.`,
      },
      {
        t: 'p',
        html: `<b>Reading the new columns.</b> The first is ${pr(s, s, s)}, i.e. ${s}${pr('1', '1', '1')}. For the second, compare entries against the multiplier ${om2}:<br>${om2}${F1} = ${om2}${a} + ${b} + ${om}${c},<br>${om}${F1} = ${om}${a} + ${om2}${b} + ${c},<br>using ${cu(om)} = 1. These are exactly the second and third entries of ${Cp('2')}, so<br>${Cp('2')} = ${F1}${T(pr('1', om2, om))},<br>and identically ${Cp('3')} = ${F2}${T(pr('1', om, om2))}.`,
      },
      {
        t: 'p',
        html: `<b>Pay the bill.</b> The reduced determinant has the scalar factor<br>${s}${F1}${F2}<br>times the determinant of the array with columns ${pr('1', '1', '1')}, ${pr('1', om2, om)}, ${pr('1', om, om2)}. Subtract row 1 from rows 2 and 3:<br>${vm(['1', '1', '1'], ['1', om2, om], ['1', om, om2])}<br>= ${vm(['1', '1', '1'], ['0', `${om2} − 1`, `${om} − 1`], ['0', `${om} − 1`, `${om2} − 1`])}<br>= (${om2} − 1)<sup>2</sup> − (${om} − 1)<sup>2</sup><br>= 3(${om} − ${om2}) = 3${I3}.`,
      },
      {
        t: 'p',
        html: `The coefficient matrix ${M} has columns ${pr('1', '1', '1')}, ${pr('1', om, om2)}, ${pr('1', om2, om)}, the same array with its last two columns swapped, so det${NB}${M} = −3${I3}. Therefore<br>${D}(−3${I3})<br>= ${s}${F1}${F2}(3${I3}),<br>${D} = −(${ABC})${F1}${F2}.`,
      },
      {
        t: 'formula',
        kicker: 'Circulant in linear factors',
        main: `${vm([a, b, c], [b, c, a], [c, a, b])} = −(${ABC})${F1}${F2}`,
        legend: [`${a}, ${b}, ${c} = the entries of the first row`, `${om} = a cube root of unity (${cu(om)} = 1 and 1 + ${om} + ${om2} = 0)`, 'rows shifted the other way give the same with a plus sign'],
        note: null,
      },
      {
        t: 'p',
        html: `<b>The quadratic factor recovered.</b> Expand the conjugate pair using ${om} + ${om2} = −1 and ${cu(om)} = 1: the square terms survive as ${sq(a)} + ${sq(b)} + ${sq(c)} and every cross term carries ${om} + ${om2} = −1, giving<br>${F1}${F2}<br>= ${QUAD},<br>so the formula for ${D} agrees with Step 1. What the ${om}-machine buys is the linear factorisation: the circulant vanishes exactly when one of three explicit linear expressions vanishes (over the complex numbers, always; over the reals, via the sum or the equality case).`,
      },
      {
        t: 'p',
        html: `<b>Step 3: Exam deployments.</b><br>• <b>Instant zero:</b> if the row sums of a circulant are all equal to ${sig}, then ${A}${T(ONES)} = ${sig}${T(ONES)}; in particular ${sig} = 0 makes ${ONES} a non-trivial solution of the associated homogeneous system and forces ${D} = 0 on sight.<br>• <b>Systems:</b> a homogeneous system whose coefficient matrix is circulant in ${pr(k, b, c)} has a non-trivial solution exactly when ${cu(k)} + ${cu(b)} + ${cu(c)} − 3${I('kbc')} = 0, a cubic you can usually factor by inspection.<br>• <b>Algebra:</b> the identity ${CUBE} = (${ABC})(…) is the standard one-line proof that ${ABC} divides ${CUBE}, and that ${cu(a)} + ${cu(b)} + ${cu(c)} = 3${I('abc')} with ${ABC}${NB}≠${NB}0 forces ${a} = ${b} = ${c}.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Evaluate ${vm(['1', '5', '7'], ['5', '7', '1'], ['7', '1', '5'])}.`,
        steps: [
          `The rows follow ${pr(a, b, c)}, ${pr(b, c, a)}, ${pr(c, a, b)}, the left-shift pattern, so<br>${D} = −(1 + 125 + 343 − 3 ⋅ 1 ⋅ 5 ⋅ 7)<br>= −(469 − 105) = −364.`,
          '<b>Check</b> by expanding along row 1: 1(35 − 1) − 5(25 − 7) + 7(5 − 49)<br>= 34 − 90 − 308 = −364. Two routes, one answer.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find all real ${k} for which the system below has a non-trivial solution, and exhibit one:<br>${I('kx')} + 3${y} + 2${z} = 0,<br>2${x} + ${I('ky')} + 3${z} = 0,<br>3${x} + 2${y} + ${I('kz')} = 0.`,
        steps: [
          `The rows are ${pr(k, '3', '2')}, then shifted right, then shifted right again, the right-shift pattern, so<br>${D} = +(${cu(k)} + ${cu('3')} + ${cu('2')} − 3 ⋅ ${k} ⋅ 3 ⋅ 2)<br>= ${cu(k)} − 18${k} + 35.`,
          `A non-trivial solution of a homogeneous system requires ${D} = 0 (Topic 05). Probe roots: ${k} = −5 gives −125 + 90 + 35 = 0. Dividing:<br>${cu(k)} − 18${k} + 35 = (${k} + 5)(${sq(k)} − 5${k} + 7),<br>and the quadratic has discriminant 25 − 28 < 0, so ${k} = −5 is the only real root.`,
          `At ${k} = −5 every row sums to −5 + 3 + 2 = 0, so by Step 3 the vector ${ONES} is a non-trivial solution. Substitution confirms: −5 + 3 + 2 = 0 in each equation.`,
          `<b>Why it is Advanced-level.</b> The question is a Topic 05 homogeneous-system question wearing a Topic 06 costume. The mark-winning move is recognising the circulant before expanding, so that ${D} arrives pre-factored as a cubic with integer roots to probe, instead of arriving as nine cofactor terms you must first assemble and then factor.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Evaluate ${vm(['2', '4', '6'], ['6', '2', '4'], ['4', '6', '2'])}.`,
            a: 'Right-shift rows, so +(8 + 64 + 216 − 144) = 144.',
          },
          {
            q: `Prove that ${CUBE}<br>= (${ABC}) ⋅ ${HALF}${SQS},<br>and deduce all real solutions of ${cu(a)} + ${cu(b)} + ${cu(c)} = 3${I('abc')}.`,
            a: `Multiply out the right side: the squares give ${sq(a)} + ${sq(b)} + ${sq(c)} scaled correctly and the cross terms reproduce −${I('ab')} − ${I('bc')} − ${I('ca')}; vanishing forces ${ABC} = 0 or ${a} = ${b} = ${c}, so the solution set is the plane ${ABC} = 0 together with the line ${a} = ${b} = ${c}.`,
          },
          {
            q: `Find all real ${k} for which the system with coefficient rows ${pr(k, '1', '−2')}, ${pr('−2', k, '1')}, ${pr('1', '−2', k)} has a non-trivial solution, and exhibit one.`,
            a: `Right-shift rows: ${D} = ${cu(k)} + 1 − 8 + 6${k} = ${cu(k)} + 6${k} − 7; ${k} = 1 is a root and the quotient ${sq(k)} + ${k} + 7 has negative discriminant, so ${k} = 1; each row then sums to 0, so ${ONES} is a non-trivial solution.`,
          },
          {
            q: `If ${ABC}${NB}≠${NB}0 and ${cu(a)} + ${cu(b)} + ${cu(c)} = 3${I('abc')}, show that ${a} = ${b} = ${c}.`,
            a: `By the identity, 0 = (${ABC})(squares) with the first factor nonzero, so the sum of squares is 0, forcing ${a} = ${b} = ${c}.`,
          },
          {
            q: `Find all real ${k} for which the circulant system in ${pr(k, '1', '4')} has a non-trivial solution, and exhibit one.`,
            a: `Taking right-shift rows (the left shift only changes the sign of ${D}), ${D} = ${cu(k)} + 1 + 64 − 12${k} = ${cu(k)} − 12${k} + 65; ${k} = −5 is a root and the quotient ${sq(k)} − 5${k} + 13 has discriminant 25 − 52 < 0, so ${k} = −5; row sums are 0, so ${ONES} works.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic B · pp. 286–289 ────────────────
  {
    n: 'B',
    title: 'Trigonometric Determinants',
    extra: true,
    kalam: 'Four strategies cover nearly every papered instance, and all four are old tools pointed at new shapes.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 06 taught you to differentiate a determinant whose entries are functions; neither it nor any earlier topic evaluates one whose entries are sines and cosines. Yet JEE Main asks this routinely ${ESTIMATE}, and CBSE asks the tame versions. Four strategies cover nearly every papered instance, and all four are old tools pointed at new shapes.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>S1: Combination scan (for an instant zero).</b> Compound-angle identities are linear in the elementary functions. Expand every compound entry; if one row or column becomes a combination of the others, subtract that combination off (legal by the column version of P6: it preserves ${D}) and a zero line remains, so ${D} = 0.`,
      },
      {
        t: 'p',
        html: `<b>S2: Substitution.</b> If every entry depends on its angle through a single expression, substitute. A determinant built from 1, ${COS(th)}, ${COS2(th)} across three angles is a Vandermonde in the variables ${sb(t, i)} = ${COS(sb(th, i))}, and Topic 02 hands you the factorisation free.`,
      },
      {
        t: 'p',
        html: `<b>S3: Difference and factor.</b> For rows of parallel structure, apply ${R(i)} → ${R(i)} − ${R('1')}, then convert every difference with<br>${SIN(u)} − ${SIN(v)} = 2${NB}cos${NB}${fr(`${u} + ${v}`, '2')}${NB}sin${NB}${fr(`${u} − ${v}`, '2')},<br>${COS(u)} − ${COS(v)} = −2${NB}sin${NB}${fr(`${u} + ${v}`, '2')}${NB}sin${NB}${fr(`${u} − ${v}`, '2')}.<br>Common sine factors fall out of the rows, and what survives is a 2 × 2 of shifted cosines that collapses by the compound-angle formula<br>sin(${I('p')} − ${I('q')}) = ${SIN(I('p'))}${NB}${COS(I('q'))} − ${COS(I('p'))}${NB}${SIN(I('q'))}.`,
      },
      {
        t: 'p',
        html: '<b>S4: Expand along the zero-richest line, then burn the Pythagorean identity.</b> Many trig determinants carry a strategically placed 0; expanding there leaves two 2 × 2s whose entries combine via sin<sup>2</sup> + cos<sup>2</sup> = 1.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Show that ${vm([SIN(al), COS(al), `sin(${al} + ${de})`], [SIN(be), COS(be), `sin(${be} + ${de})`], [SIN(ga), COS(ga), `sin(${ga} + ${de})`])} = 0 for all ${de}.`,
        steps: [
          `Expand the third column with the compound-angle formula:<br>sin(${th} + ${de}) = ${SIN(th)}${NB}${COS(de)} + ${COS(th)}${NB}${SIN(de)},<br>entry by entry. So the third column equals ${COS(de)}${NB}${Cc('1')} + ${SIN(de)}${NB}${Cc('2')} regardless of the row.`,
          `Apply ${Cc('3')} → ${Cc('3')} − ${COS(de)}${NB}${Cc('1')} − ${SIN(de)}${NB}${Cc('2')}: the value of ${D} is unchanged and the third column becomes identically zero. A determinant with a zero column is 0. The answer is independent of ${de}, which is the entire point of the question.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Evaluate ${vm([`${COS(al)}${NB}${COS(be)}`, `${COS(al)}${NB}${SIN(be)}`, `−${SIN(al)}`], [`−${SIN(be)}`, COS(be), '0'], [`${SIN(al)}${NB}${COS(be)}`, `${SIN(al)}${NB}${SIN(be)}`, COS(al)])}.`,
        steps: [
          `Row 2 contains a zero, so expand along it; two terms survive:<br>${D} = (−${SIN(be)})${sb(I('C'), '21')} + ${COS(be)}${NB}${sb(I('C'), '22')}.`,
          `Compute the two cofactors. Deleting row 2, column 1 leaves<br>${sb(M, '21')} = ${vm([`${COS(al)}${NB}${SIN(be)}`, `−${SIN(al)}`], [`${SIN(al)}${NB}${SIN(be)}`, COS(al)])}<br>= ${COS2(al)}${NB}${SIN(be)} + ${SIN2(al)}${NB}${SIN(be)} = ${SIN(be)},<br>and the checkerboard sign (−1)<sup>2+1</sup> gives ${sb(I('C'), '21')} = −${SIN(be)}.`,
          `Deleting row 2, column 2 leaves<br>${sb(M, '22')} = ${vm([`${COS(al)}${NB}${COS(be)}`, `−${SIN(al)}`], [`${SIN(al)}${NB}${COS(be)}`, COS(al)])}<br>= ${COS2(al)}${NB}${COS(be)} + ${SIN2(al)}${NB}${COS(be)} = ${COS(be)},<br>with sign (−1)<sup>2+2</sup>, so ${sb(I('C'), '22')} = ${COS(be)}. Therefore<br>${D} = (−${SIN(be)})(−${SIN(be)}) + (${COS(be)})(${COS(be)})<br>= ${SIN2(be)} + ${COS2(be)} = 1.`,
          `The determinant is 1 for every ${al}, ${be}: it is the product of two rotation matrices, and a rotation has determinant 1 (it preserves volume and orientation). You were not asked to know that; the zero-rich expansion made it fall out anyway.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Show that<br>${D} = ${vm(['1', SIN(al), COS(al)], ['1', SIN(be), COS(be)], ['1', SIN(ga), COS(ga)])}<br>= −4${NB}sin${NB}${fr(`${be} − ${al}`, '2')}${NB}sin${NB}${fr(`${ga} − ${al}`, '2')}${NB}sin${NB}${fr(`${ga} − ${be}`, '2')}.`,
        steps: [
          `All three rows have parallel structure, so run S3. Apply ${R('2')} → ${R('2')} − ${R('1')} and ${R('3')} → ${R('3')} − ${R('1')} (both use the original ${R('1')}, so ${D} is unchanged) and expand down the first column:<br>${D} = (${SIN(be)} − ${SIN(al)})(${COS(ga)} − ${COS(al)})<br>− (${COS(be)} − ${COS(al)})(${SIN(ga)} − ${SIN(al)}).`,
          `Abbreviate<br>${u} = ${fr(`${al} + ${be}`, '2')}, ${v} = ${fr(`${be} − ${al}`, '2')},<br>${U} = ${fr(`${al} + ${ga}`, '2')}, ${V} = ${fr(`${ga} − ${al}`, '2')}.<br>The four differences become<br>${SIN(be)} − ${SIN(al)} = 2${NB}${COS(u)}${NB}${SIN(v)},<br>${COS(be)} − ${COS(al)} = −2${NB}${SIN(u)}${NB}${SIN(v)},<br>${SIN(ga)} − ${SIN(al)} = 2${NB}${COS(U)}${NB}${SIN(V)},<br>${COS(ga)} − ${COS(al)} = −2${NB}${SIN(U)}${NB}${SIN(V)}.`,
          `Substituting:<br>${D} = (2${NB}${COS(u)}${NB}${SIN(v)})(−2${NB}${SIN(U)}${NB}${SIN(V)})<br>− (−2${NB}${SIN(u)}${NB}${SIN(v)})(2${NB}${COS(U)}${NB}${SIN(V)})<br>= −4${NB}${SIN(v)}${NB}${SIN(V)}(${COS(u)}${NB}${SIN(U)} − ${SIN(u)}${NB}${COS(U)})<br>= −4${NB}${SIN(v)}${NB}${SIN(V)}${NB}sin(${U} − ${u}),<br>by the compound-angle formula read backwards. Finally ${U} − ${u} = ${fr(`${ga} − ${be}`, '2')}, which is the claimed factorisation.`,
          `<b>Check.</b> Take ${al} = ${DEG('60')}, ${be} = ${DEG('30')}, ${ga} = ${DEG('0')}. Direct expansion of the original gives 1 − ${fr('√3', '2')} ≈ 0.1340; the formula gives −4${NB}sin(−${DEG('15')})${NB}sin(−${DEG('30')})${NB}sin(−${DEG('15')}) ≈ 0.1340. Note the sign is sensitive to the order of the angles: swapping any two of ${al}, ${be}, ${ga} swaps two rows and flips the sign, as it must.`,
          `<b>Speed trap in the same family.</b><br>${vm([SIN2(al), COS2(al), `cos${NB}2${al}`], [SIN2(be), COS2(be), `cos${NB}2${be}`], [SIN2(ga), COS2(ga), `cos${NB}2${ga}`])} = 0<br>on sight, because ${`cos${NB}2${th}`} = ${COS2(th)} − ${SIN2(th)} makes the third column ${Cc('2')} − ${Cc('1')}: strategy S1, no expansion.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Evaluate ${vm([SIN(DEG('10')), COS(DEG('10'))], [SIN(DEG('80')), COS(DEG('80'))])}.`,
            a: `${SIN(DEG('10'))}${NB}${COS(DEG('80'))} − ${COS(DEG('10'))}${NB}${SIN(DEG('80'))}<br>= sin(−${DEG('70')}) = −${SIN(DEG('70'))} = −${COS(DEG('20'))}.`,
          },
          {
            q: `Show that ${vm([SIN(al), COS(al), `cos(${al} + ${de})`], [SIN(be), COS(be), `cos(${be} + ${de})`], [SIN(ga), COS(ga), `cos(${ga} + ${de})`])} = 0.`,
            a: `Here cos(${th} + ${de}) = ${COS(th)}${NB}${COS(de)} − ${SIN(th)}${NB}${SIN(de)}, so the third column equals ${COS(de)}${NB}${Cc('2')} − ${SIN(de)}${NB}${Cc('1')}; subtract it off and a zero column remains.`,
          },
          {
            q: `Evaluate ${vm(['1', SIN(al), COS(al)], ['1', SIN(be), COS(be)], ['1', SIN(ga), COS(ga)])} for ${al} = ${DEG('0')}, ${be} = ${DEG('90')}, ${ga} = ${DEG('180')}, directly and by the formula of this topic’s third worked example.`,
            a: `Direct: the rows are ${pr('1', '0', '1')}, ${pr('1', '1', '0')}, ${pr('1', '0', '−1')}, giving 1(−1) + 1(0 − 1) = −2; formula: −4${NB}${SIN(DEG('45'))}${NB}${SIN(DEG('90'))}${NB}${SIN(DEG('45'))} = −2.`,
          },
          {
            q: `Show that ${vm([`${COS(th)}${NB}${COS(ph)}`, `${COS(th)}${NB}${SIN(ph)}`, `−${SIN(th)}`], [`−${SIN(ph)}`, COS(ph), '0'], [`${SIN(th)}${NB}${COS(ph)}`, `${SIN(th)}${NB}${SIN(ph)}`, COS(th)])} = 1 for all ${th}, ${ph}.`,
            a: `Expand along row 2 as in this topic’s second worked example; the two minors reduce to ${SIN(ph)} and ${COS(ph)} (the angles ${th}, ${ph} play the roles of ${al}, ${be}), and the Pythagorean identity finishes it: ${D} = ${SIN2(ph)} + ${COS2(ph)} = 1 identically.`,
          },
          {
            q: `Show that ${vm([`cos(${th} − ${DEG('60')})`, `sin(${th} − ${DEG('60')})`, '1'], [COS(th), SIN(th), '1'], [`cos(${th} + ${DEG('60')})`, `sin(${th} + ${DEG('60')})`, '1'])} is independent of ${th}, and find its value.`,
            a: `Apply ${R('1')} → ${R('1')} − ${R('2')}, ${R('3')} → ${R('3')} − ${R('2')}; the differences reduce via S3 to first-column entries sin(${th} − ${DEG('30')}), −sin(${th} + ${DEG('30')}) and second-column entries −cos(${th} − ${DEG('30')}), cos(${th} + ${DEG('30')}), with the surviving 2 × 2 equal to<br>sin(${th} − ${DEG('30')})${NB}cos(${th} + ${DEG('30')})<br>− cos(${th} − ${DEG('30')})${NB}sin(${th} + ${DEG('30')})<br>= sin(−${DEG('60')}) = −${fr('√3', '2')}.<br>Expanding along the third column (whose only survivor is the middle row’s entry 1, cofactor sign −) yields ${D} = ${fr('√3', '2')}, independent of ${th}.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic C · pp. 289–292 ────────────────
  {
    n: 'C',
    title: 'Alternants with a Missing Power',
    extra: true,
    kalam: 'Brute expansion dies; two structural methods live.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 01’s practice set proved the Vandermonde determinant<br>${vm(['1', '1', '1'], [a, b, c], [sq(a), sq(b), sq(c)])} = ${VDM},<br>and Topic 02’s fourth worked example stripped factors off<br>${vm([a, b, c], [sq(a), sq(b), sq(c)], [cu(a), cu(b), cu(c)])}.<br>JEE Advanced replaces one power row with a skipped one (rows 1, ${a}, ${cu(a)} or 1, ${a}, ${sq(a)}, ${sp(a, '4')}) and asks for the factorisation. Brute expansion dies; two structural methods live.`,
      },
      {
        t: 'p',
        html: `An <b>alternant</b> is any determinant whose rows are ${sb(I('f'), '1')}(${t}), ${sb(I('f'), '2')}(${t}), … evaluated at ${t} = ${a}, ${b}, ${c}, … in the columns. Vandermonde is the alternant with ${sb(I('f'), i)}(${t}) = ${sp(t, `${i}−1`)}.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Lemma 1 (symmetric quotient).</b> If an alternant ${D} and the Vandermonde ${V} in the same variables satisfy: swapping any two variables swaps two columns of ${D} (negating it) and of ${V} (negating it), then ${Q} = ${fr(D, V)} (a genuine polynomial division, since ${V} divides every alternating polynomial) satisfies ${Q}(${a},${NB}${b},${NB}${c}) = ${Q}(${b},${NB}${a},${NB}${c}) and likewise for every swap. Hence ${Q} <b>is symmetric</b>, and for a Class 12 syllabus every symmetric polynomial in sight is built from<br>${e1} = ${a} + ${b} + ${c},${NB}${NB}${e2} = ${I('ab')} + ${I('bc')} + ${I('ca')},${NB}${NB}${e3} = ${I('abc')}.`,
      },
      {
        t: 'p',
        html: `<b>Consequence:</b> ${D} = ${V} × ${Q} where ${Q} is symmetric, and comparing total degrees pins ${Q}’s degree: deg${NB}${Q} = deg${NB}${D} − deg${NB}${V}.`,
      },
      {
        t: 'p',
        html: `<b>Procedure 1: degree, symmetry, specialise.</b> Write ${Q} as a general symmetric polynomial of the pinned degree with unknown coefficients, then substitute enough convenient triples to solve for them. One specialisation per unknown coefficient.`,
      },
      {
        t: 'p',
        html: `<b>Procedure 2: pad with ${x}.</b> When the exponent set is ${set('0', '1', '…', n)} minus exactly one member, build the full (${n} + 1) × (${n} + 1) Vandermonde by inserting one extra column headed by a new variable ${x} (the fifth column when there are four variables ${a}, ${b}, ${c}, ${d}), then equate two readings of one coefficient.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Prove that ${vm(['1', '1', '1'], [a, b, c], [I('bc'), I('ca'), I('ab')])} = ${VDM}.`,
        steps: [
          `Call the determinant ${D}. Swapping ${a} ↔ ${b} swaps columns 1 and 2, so ${D} is alternating; its entries have total degree 0 + 1 + 2 = 3. The Vandermonde ${V} = ${VDM} is also alternating of degree 3. By Lemma 1, ${D} = ${lam}${V} for a constant ${lam}.`,
          `Specialise ${a} = 1, ${b} = 2, ${c} = 3:<br>${D} = ${vm(['1', '1', '1'], ['1', '2', '3'], ['6', '3', '2'])}<br>= 1(4 − 9) − 1(2 − 18) + 1(3 − 12)<br>= −5 + 16 − 9 = 2,<br>and ${V} = (−1)(−1)(2) = 2, so ${lam} = 1. Done: no expansion of the general 3 × 3 ever happened.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Prove that<br>${D} = ${vm(['1', '1', '1', '1'], [a, b, c, d], [sq(a), sq(b), sq(c), sq(d)], [sp(a, '4'), sp(b, '4'), sp(c, '4'), sp(d, '4')])}<br>= (${a} + ${b} + ${c} + ${d})<br>${V4P}.`,
        steps: [
          `The exponent set ${set('0', '1', '2', '4')} skips 3, so Procedure 2. Insert a fifth variable ${x} and build the complete 5 × 5 Vandermonde<br>${W} = ${vm(['1', '1', '1', '1', '1'], [a, b, c, d, x], [sq(a), sq(b), sq(c), sq(d), sq(x)], [cu(a), cu(b), cu(c), cu(d), cu(x)], [sp(a, '4'), sp(b, '4'), sp(c, '4'), sp(d, '4'), sp(x, '4')])}.`,
          `<b>Read it two ways.</b> First, as a Vandermonde in the five variables ${pr(a, b, c, d, x)} in column order:<br>${W} = ${V4}(${x} − ${a})(${x} − ${b})(${x} − ${c})(${x} − ${d}),<br>${V4} = ${V4P}.`,
          `Second, expand ${W} along column 5. The only entry carrying a factor ${cu(x)} sits at row 4, column 5; its cofactor is (−1)<sup>4+5</sup> = −1 times the minor left by deleting row 4 and column 5, and that minor is exactly our ${D}. Every other entry in the column carries a different power of ${x}. So the coefficient of ${cu(x)} in ${W} equals −${D}.`,
          `Now compare with the first reading, writing<br>${PROD} = ${sp(x, '4')} − ${e1}${cu(x)} + ${e2}${sq(x)} − ${e3}${x} + ${e4}<br>with ${e1} = ${a} + ${b} + ${c} + ${d}. The coefficient of ${cu(x)} in ${V4}${PROD} is −${e1}${V4}. Equating the two readings of one coefficient:<br>−${D} = −${e1}${V4},${NB}${NB}i.e.${NB}${NB}${D} = (${a} + ${b} + ${c} + ${d})${V4}.`,
          `<b>Check numerically.</b> Take ${a}, ${b}, ${c}, ${d} = 1, 2, 3, 4: the formula predicts 10 × 12 = 120. Directly, subtract row 1 from rows 2–4 and expand down column 1:<br>${D} = ${vm(['1', '2', '3'], ['3', '8', '15'], ['15', '80', '255'])}<br>= 1(2040 − 1200) − 2(765 − 225) + 3(240 − 120)<br>= 840 − 1080 + 360 = 120.`,
          `<b>Why it is Advanced-level.</b> Direct expansion means 24 terms. Procedure 1 does work here: ${D} has degree 0 + 1 + 2 + 4 = 7 and ${V4} has degree 6, so the quotient is symmetric of degree 1, i.e. ${lam}(${a} + ${b} + ${c} + ${d}), with ${lam} fixed by one specialisation; that is the degree-and-symmetry argument of Topic 01’s fourth worked example taken one order higher. The padding argument is cleaner still: it converts one hard determinant into one coefficient comparison against a determinant you already know, with no unknown constant left to fix.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Evaluate ${vm(['1', '1', '1'], [a, b, c], [sq(a), sq(b), sq(c)])} at ${a} = 2, ${b} = 4, ${c} = 5 without expanding the general form.`,
            a: 'Vandermonde: (4 − 2)(5 − 2)(5 − 4) = 6.',
          },
          {
            q: `Using the second worked example’s method, evaluate ${vm(['1', '1', '1'], [a, b, c], [cu(a), cu(b), cu(c)])} at ${a} = 2, ${b} = 3, ${c} = 5.`,
            a: `Pad a 4 × 4 Vandermonde in ${a}, ${b}, ${c}, ${x} with exponent rows 0, 1, 2, 3. The skipped exponent is 2, so ${D} is the minor of the ${sq(x)} entry (row 3, column 4), and the coefficient of ${sq(x)} is −${D} from the column-4 expansion (cofactor sign (−1)<sup>3+4</sup> = −1). From the product form ${V3}(${x} − ${a})(${x} − ${b})(${x} − ${c}) that coefficient is −${e1}${V3}. Hence<br>${D} = (${a} + ${b} + ${c})${V3} = 10 × (1)(3)(2) = 60.`,
          },
          {
            q: `Show that ${vm(['1', '1', '1'], [sq(a), sq(b), sq(c)], [cu(a), cu(b), cu(c)])} = (${I('ab')} + ${I('bc')} + ${I('ca')})${VDM}, and verify at ${pr(a, b, c)} = ${pr('1', '2', '3')}.`,
            a: `Both sides are alternating of degree 5, and ${V3} has degree 3, so the quotient is a symmetric quadratic ${lam}${e}<sub>1</sub><sup>2</sup> + ${mu}${e2}; specialise ${pr('1', '2', '3')}: ${D} = 22, ${V3} = 2, so ${Q} = 11, with ${e}<sub>1</sub><sup>2</sup> = 36, ${e2} = 11, giving 11 = 36${lam} + 11${mu}; specialise ${pr('0', '1', '2')}: ${D} = 4, ${V3} = 2, so ${Q} = 2, with ${e}<sub>1</sub><sup>2</sup> = 9, ${e2} = 2, giving 2 = 9${lam} + 2${mu}; solving, ${lam} = 0, ${mu} = 1. Verification at ${pr('1', '2', '3')}: left side = 22, right side = 11 × 2 = 22.`,
          },
          {
            q: `Evaluate ${vm(['1', '1', '1', '1'], ['1', '2', '3', '4'], ['1', '4', '9', '16'], ['1', '16', '81', '256'])} using the result of this topic’s second worked example.`,
            a: `The array is the ${set('0', '1', '2', '4')} alternant at ${pr('1', '2', '3', '4')}: (1 + 2 + 3 + 4)(12) = 120.`,
          },
          {
            q: `<b>(Challenge.)</b> Show that ${vm(['1', '1', '1'], [a, b, c], [sp(a, '4'), sp(b, '4'), sp(c, '4')])}<br>= (${sq(a)} + ${sq(b)} + ${sq(c)} + ${I('ab')} + ${I('bc')} + ${I('ca')})${VDM}.`,
            a: `Both sides are alternating of degree 5, and ${V3} has degree 3, so the quotient is a symmetric quadratic ${A}${e}<sub>1</sub><sup>2</sup> + ${B}${e2}; specialise ${pr('1', '2', '3')}:<br>${D} = ${vm(['1', '1', '1'], ['1', '2', '3'], ['1', '16', '81'])} = 114 − 78 + 14 = 50,<br>${V3} = 2, ${e}<sub>1</sub><sup>2</sup> = 36, ${e2} = 11 gives 25 = 36${A} + 11${B}; specialise ${pr('0', '1', '2')}: ${D} = 14, ${V3} = 2, ${e}<sub>1</sub><sup>2</sup> = 9, ${e2} = 2 gives 7 = 9${A} + 2${B}; solving, ${A} = 1, ${B} = −1. Hence the quotient is ${e}<sub>1</sub><sup>2</sup> − ${e2} = ${sq(a)} + ${sq(b)} + ${sq(c)} + ${I('ab')} + ${I('bc')} + ${I('ca')}. Verification at ${pr('1', '2', '4')}: left side = 448 − 252 + 14 = 210, right side = (49 − 14) × 6 = 210.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic D · pp. 292–294 ────────────────
  {
    n: 'D',
    title: 'Concurrency, the Family of Lines, and Polygon Areas',
    extra: true,
    kalam: 'Topic 03 used determinants for one triangle at a time.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 03 used determinants for one triangle at a time. Three structures built on it are absent from the chapter and are examined constantly ${ESTIMATE}: testing whether three lines meet at a point, writing down every line through a given intersection point, and measuring regions with more than three sides.`,
      },

      { t: 'part', title: 'D.1: Three lines are concurrent' },
      {
        t: 'p',
        html: `<b>Claim.</b> For lines ${sb(a, i)}${x} + ${sb(b, i)}${y} + ${sb(c, i)} = 0, ${i} = 1, 2, 3, if the first two are not parallel then<br>the three lines are concurrent ⟺ ${vm([sb(a, '1'), sb(b, '1'), sb(c, '1')], [sb(a, '2'), sb(b, '2'), sb(c, '2')], [sb(a, '3'), sb(b, '3'), sb(c, '3')])} = 0.`,
      },
      {
        t: 'formula',
        kicker: 'Three lines concurrent',
        main: `${vm([sb(a, '1'), sb(b, '1'), sb(c, '1')], [sb(a, '2'), sb(b, '2'), sb(c, '2')], [sb(a, '3'), sb(b, '3'), sb(c, '3')])} = 0`,
        legend: [`${sb(a, i)}, ${sb(b, i)}, ${sb(c, i)} = the coefficients of line ${i} (${sb(a, i)}${x} + ${sb(b, i)}${y} + ${sb(c, i)} = 0)`, 'the first two lines must not be parallel'],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Solve the first two lines simultaneously. Their coefficient determinant is ${de} = ${sb(a, '1')}${sb(b, '2')} − ${sb(a, '2')}${sb(b, '1')}, nonzero by assumption, and Cramer (Topic 05) gives their intersection point with<br>${sb(x, '0')} = ${fr(Di('1'), de)},${NB}${NB}${sb(y, '0')} = ${fr(Di('2'), de)},<br>where ${Di('1')}, ${Di('2')} are the 2 × 2 replacements. Substitute into the third line:<br>${sb(a, '3')}${sb(x, '0')} + ${sb(b, '3')}${sb(y, '0')} + ${sb(c, '3')} = ${fr(`${sb(a, '3')}${Di('1')} + ${sb(b, '3')}${Di('2')} + ${sb(c, '3')}${de}`, de)}.`,
      },
      {
        t: 'p',
        html: `Now read the numerator: ${sb(a, '3')} times (column 1 replaced by constants), plus ${sb(b, '3')} times (column 2 replaced), plus ${sb(c, '3')} times the untouched 2 × 2: this is precisely the cofactor expansion of the big 3 × 3 determinant <b>along row 3</b>. Hence the third line passes through ${pr(sb(x, '0'), sb(y, '0'))} exactly when the 3 × 3 determinant vanishes.`,
      },
      {
        t: 'p',
        html: `<b>Forward direction without hypotheses:</b> if ${pr(sb(x, '0'), sb(y, '0'))} lies on all three lines, then ${T(pr(sb(x, '0'), sb(y, '0'), '1'))} is a nonzero solution of the homogeneous system, which forces the coefficient determinant to be 0 (otherwise Topic 05 allows only the trivial solution). <b>Caution:</b> the converse fails silently when the lines are parallel: the three lines ${x} + ${y} − 1 = 0, ${x} + ${y} − 2 = 0, 2${x} + 2${y} − 5 = 0 have determinant 0 (columns 1 and 2 identical) but no common point. Always glance for parallelism before believing a zero.`,
      },

      { t: 'part', title: 'D.2: The family through an intersection point' },
      {
        t: 'p',
        html: `If ${sb(I('L'), '1')} = 0 and ${sb(I('L'), '2')} = 0 meet at ${P}, then for every real ${lam},<br>${sb(I('L'), '1')} + ${lam}${sb(I('L'), '2')} = 0<br>is a line through ${P} (both summands vanish at ${P}), and conversely every line through ${P} except ${sb(I('L'), '2')} itself arises for exactly one ${lam}. To force the member of the family through a further point ${Q}, substitute ${Q} and solve the resulting linear equation for ${lam}: no intersection coordinates ever need to be computed.`,
      },
      {
        t: 'formula',
        kicker: 'Lines through an intersection point',
        main: `${sb(I('L'), '1')} + ${lam}${sb(I('L'), '2')} = 0`,
        legend: [`${sb(I('L'), '1')}, ${sb(I('L'), '2')} = the left sides of two lines that meet at a point`, `${lam} = any real number (every line through the point but ${sb(I('L'), '2')} = 0 arises)`],
        note: null,
      },

      { t: 'part', title: 'D.3: Polygon area by the cyclic sum' },
      {
        t: 'p',
        html: `For a polygon with vertices ${sb(P, '1')}, …, ${sb(P, n)} listed in order around the boundary,<br>Area = ${HALF}|(${sb(x, '1')}${sb(y, '2')} − ${sb(x, '2')}${sb(y, '1')}) + (${sb(x, '2')}${sb(y, '3')} − ${sb(x, '3')}${sb(y, '2')})<br>+ ⋯ + (${sb(x, n)}${sb(y, '1')} − ${sb(x, '1')}${sb(y, n)})|.`,
      },
      {
        t: 'formula',
        kicker: 'Area of a polygon',
        main: `Area = ${HALF}|(${sb(x, '1')}${sb(y, '2')} − ${sb(x, '2')}${sb(y, '1')}) + (${sb(x, '2')}${sb(y, '3')} − ${sb(x, '3')}${sb(y, '2')})<br>+ ⋯ + (${sb(x, n)}${sb(y, '1')} − ${sb(x, '1')}${sb(y, n)})|`,
        legend: [`${sb(x, i)}, ${sb(y, i)} = the vertices, listed in order around the boundary`, `${n} = the number of vertices`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Derivation for ${n} = 4.</b> Split quadrilateral ${I('ABCD')} along diagonal ${I('AC')} into triangles ${I('ABC')} and ${I('ACD')}, apply Topic 03’s formula to each, and add. Collecting the ${sb(x, 'A')} terms:<br>${HALF}${sb(x, 'A')}[(${sb(y, 'B')} − ${sb(y, 'C')}) + (${sb(y, 'C')} − ${sb(y, 'D')})] = ${HALF}${sb(x, 'A')}(${sb(y, 'B')} − ${sb(y, 'D')});<br>collecting the ${sb(x, 'C')} terms similarly gives ${HALF}${sb(x, 'C')}(${sb(y, 'D')} − ${sb(y, 'B')}); the ${sb(x, 'B')} and ${sb(x, 'D')} terms are untouched. The total is exactly the four-term cyclic sum above. (For ${n} > 4, triangulate from ${sb(P, '1')} and repeat.)`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Show that the lines ${x} + 2${y} − 4 = 0, 2${x} + ${y} − 5 = 0, 3${x} + 3${y} − 9 = 0 are concurrent, and find the point.`,
        steps: [
          `First two lines: ${de} = 1 ⋅ 1 − 2 ⋅ 2 = −3${NB}≠${NB}0, so the test applies. Expand along row 3:<br>${vm(['1', '2', '−4'], ['2', '1', '−5'], ['3', '3', '−9'])}<br>= 3${vm(['2', '−4'], ['1', '−5'])} − 3${vm(['1', '−4'], ['2', '−5'])}<br>+ (−9)${vm(['1', '2'], ['2', '1'])}<br>= 3(−10 + 4) − 3(−5 + 8) − 9(1 − 4)<br>= −18 − 9 + 27 = 0.`,
          `Concurrent. Solving the first two: doubling the first and subtracting the second gives 3${y} = 3, so ${y} = 1, ${x} = 2. Check the third: 6 + 3 − 9 = 0.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the area of the triangle formed by the lines ${x} + ${y} = 6, ${x} − ${y} = 2, ${y} = 2${x}.`,
        steps: [
          `Intersections, two lines at a time: ${x} + ${y} = 6 with ${x} − ${y} = 2 gives ${pr('4', '2')}; ${x} + ${y} = 6 with ${y} = 2${x} gives 3${x} = 6, so ${pr('2', '4')}; ${x} − ${y} = 2 with ${y} = 2${x} gives −${x} = 2, so ${pr('−2', '−4')}. Cyclic sum:<br>(4 ⋅ 4 − 2 ⋅ 2) + (2 ⋅ (−4) − 4 ⋅ (−2))<br>+ ((−2) ⋅ 2 − (−4) ⋅ 4) = 12 + 0 + 12 = 24,<br>Area = ${HALF}|24| = 12 square units.`,
          `<b>Check.</b> Base between ${pr('2', '4')} and ${pr('−2', '−4')} has length √(16 + 64) = 4√5; the distance from ${pr('4', '2')} to the line ${y} = 2${x}, i.e. 2${x} − ${y} = 0, is<br>${fr(bar('8 − 2'), '√5')} = ${fr('6', '√5')};<br>area = ${HALF} ⋅ 4√5 ⋅ ${fr('6', '√5')} = 12.<br>Agreement by an independent route.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Using a 3 × 3 determinant, test whether 2${x} − 3${y} + 5 = 0, 4${x} − 6${y} + 9 = 0, 2${x} − 2${y} + 3 = 0 are concurrent.`,
            a: `Expanding along row 1,<br>${D} = 2(−18 + 18) + 3(12 − 18) + 5(−8 + 12)<br>= 0 − 18 + 20 = 2${NB}≠${NB}0,<br>so the lines are <b>not</b> concurrent. (Indeed the first two lines are parallel and distinct: 4${x} − 6${y} + 10 = 0 versus 4${x} − 6${y} + 9 = 0, so they have no common point at all.)`,
          },
          {
            q: `Find ${k} so that ${x} + ${y} − 2 = 0, 2${x} − ${y} − 1 = 0, 3${x} + ${I('ky')} − 4 = 0 are concurrent, and state the point of concurrence.`,
            a: `Expand along row 3:<br>${D} = 3${vm(['1', '−2'], ['−1', '−1'])} − ${k}${vm(['1', '−2'], ['2', '−1'])} − 4${vm(['1', '1'], ['2', '−1'])}<br>= 3(−3) − ${k}(3) − 4(−3) = 3 − 3${k},<br>so ${k} = 1; solving the first two lines gives the point ${pr('1', '1')}.`,
          },
          {
            q: `Find the equation of the line through the intersection of ${x} + 2${y} − 3 = 0 and 2${x} − ${y} − 4 = 0 which also passes through the origin.`,
            a: `Family (${x} + 2${y} − 3) + ${lam}(2${x} − ${y} − 4) = 0; through the origin demands −3 − 4${lam} = 0, so ${lam} = −${fr('3', '4')}, giving 2${x} − 11${y} = 0.`,
          },
          {
            q: `Find the area of the quadrilateral with vertices ${pr('1', '2')}, ${pr('5', '5')}, ${pr('4', '8')}, ${pr('0', '7')} in that order.`,
            a: `Cyclic sum = (5 − 10) + (40 − 20) + (28 − 0) + (0 − 7) = 36, area = 18 square units; cross-check by splitting along the diagonal from ${pr('1', '2')} to ${pr('4', '8')}: areas 7.5 + 10.5 = 18.`,
          },
          {
            q: `Why does the concurrency determinant of ${x} + ${y} − 1 = 0, ${x} + ${y} − 2 = 0, 2${x} + 2${y} − 5 = 0 vanish, and what is the geometric truth?`,
            a: 'Columns 1 and 2 are proportional, so the determinant is 0 by P3, but the three lines are parallel with no common point; a vanishing determinant signals dependent rows, which is concurrency only when the lines are pairwise non-parallel.',
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic E · pp. 294–297 ────────────────
  {
    n: 'E',
    title: 'What to Actually Do When Δ = 0',
    extra: true,
    kalam: 'JEE Main asks you to produce the solutions; JEE Advanced asks whether the shortcut can mislead.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 05’s consistency table ends its hardest branch with “(usually; check rank)”, and never proves when the rule holds. JEE Main asks you to produce the solutions; JEE Advanced asks whether the shortcut can mislead. This additional topic supplies both.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'When Δ = 0 for AX = B with three equations in three unknowns',
        steps: [
          `<b>Screen with the ${Di(i)}</b> (replace column ${i} of ${A} by ${B}). Any nonzero ${Di(i)} certifies inconsistency immediately: no further work.`,
          `<b>All ${Di(i)} = 0: eliminate.</b> Form the augmented matrix [${A} ∣ ${B}] and row-reduce to echelon form. Identify the independent equations and the free variables.`,
          `<b>Parametrise.</b> Assign a parameter to each free variable and back-substitute. The number of free parameters is ${n} − ${r}, where ${r} is the number of independent rows.`,
          `<b>Homogeneous systems:</b> the same machinery gives the dimension of the solution space as ${n} − ${r}; the trivial solution is always there, and it is the only one exactly when ${r} = ${n}.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Why step 3 counts correctly:</b> after reduction there are ${r} independent linear equations. Choosing the ${n} − ${r} free variables arbitrarily determines the ${r} pivot variables uniquely by back-substitution, and every solution arises this way, so solutions are in bijection with the parameter choices.`,
      },

      { t: 'part', title: 'The screen can lie: a precise statement' },
      {
        t: 'p',
        html: `<b>Proposition.</b> Suppose ${D} = 0 but some 2 × 2 minor of ${A} is nonzero (equivalently, the rows of ${A} span a plane, not a line: “rank exactly 2”). Then:<br>the system is consistent ⟺ ${Di('1')} = ${Di('2')} = ${Di('3')} = 0,<br>and in that case it has infinitely many solutions.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> The augmented matrix [${A} ∣ ${B}] is 3 × 4; its 3 × 3 minors are obtained by deleting one column at a time. Deleting the last gives ${D} = 0; deleting column ${j} gives, up to sign, ${Di(j)}. If all three ${Di(j)} vanish, every 3 × 3 minor of [${A} ∣ ${B}] is 0, so [${A} ∣ ${B}] has rank at most 2. But rank${NB}[${A} ∣ ${B}] is always at least rank${NB}${A}, and rank${NB}${A} = 2 by hypothesis, so both ranks equal 2, which is precisely consistency (in words: ${B} is a combination of the columns of ${A}). Infinitely many solutions follow because ${D} = 0 rules out uniqueness. Conversely, if some ${Di(j)}${NB}≠${NB}0 then that minor of [${A} ∣ ${B}] is nonzero, rank${NB}[${A} ∣ ${B}] = 3 > rank${NB}${A}, and the system is inconsistent. ■`,
      },
      {
        t: 'p',
        html: `<b>Where the screen fails.</b> If rank${NB}${A} = 1 (all rows proportional), consistency can fail with every ${Di(i)} = 0:<br>${x} + ${y} + ${z} = 1,<br>2${x} + 2${y} + 2${z} = 3,<br>3${x} + 3${y} + 3${z} = 4.<br>Here ${D} = 0 (proportional rows), ${Di('1')} = 0 (its second and third columns are identical), and ${Di('2')} = ${Di('3')} = 0 the same way, yet the system demands ${x} + ${y} + ${z} = 1,<br>${x} + ${y} + ${z} = ${fr('3', '2')} and ${x} + ${y} + ${z} = ${fr('4', '3')}<br>all at once. Moral: <b>elimination is the judge; the ${Di(i)} are only the bailiff.</b>`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Solve completely: ${x} + ${y} + ${z} = 6,${NB}${NB}${x} + 2${y} + 3${z} = 14,${NB}${NB}2${x} + 3${y} + 4${z} = 20.`,
        steps: [
          `Expanding,<br>${D} = 1(8 − 9) − 1(4 − 6) + 1(3 − 4)<br>= −1 + 2 − 1 = 0.<br>The three replacement determinants:<br>${Di('1')} = 6(8 − 9) − 1(56 − 60) + 1(42 − 40)<br>= −6 + 4 + 2 = 0,<br>${Di('2')} = 1(56 − 60) − 6(4 − 6) + 1(20 − 28)<br>= −4 + 12 − 8 = 0,<br>${Di('3')} = 1(40 − 42) − 1(20 − 28) + 6(3 − 4)<br>= −2 + 8 − 6 = 0.`,
          `Screen passed: now eliminate. Subtract equation 1 from equation 2, and twice equation 1 from equation 3:<br>${y} + 2${z} = 8${NB}${NB}(from both: one independent equation),<br>so ${r} = 2, one free parameter. Let ${z} = ${t}. Then ${y} = 8 − 2${t} and<br>${x} = 6 − ${y} − ${z} = 6 − (8 − 2${t}) − ${t} = ${t} − 2.`,
          `<b>Check</b> in equation 2: (${t} − 2) + 2(8 − 2${t}) + 3${t}<br>= ${t} − 2 + 16 − 4${t} + 3${t} = 14. ✓`,
        ],
        ans: `(${x},${NB}${y},${NB}${z}) = (${t} − 2,${NB}8 − 2${t},${NB}${t}),${NB}${NB}${t} ∈ ℝ`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Classify: ${x} + ${y} + ${z} = 6,${NB}${NB}${x} + 2${y} + 3${z} = 14,${NB}${NB}2${x} + 3${y} + 4${z} = 21.`,
        steps: [
          `Same left sides, so ${D} = 0 again. But now<br>${Di('1')} = 6(−1) − 1(56 − 63) + 1(42 − 42)<br>= −6 + 7 + 0 = 1${NB}≠${NB}0:<br>the screen convicts the system instantly: no solution.`,
          `Elimination agrees: subtracting gives ${y} + 2${z} = 8 from the first pair and ${y} + 2${z} = 9 from equations 1 and 3: contradiction. Both routes, one verdict.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Discuss completely for all real ${lam}, ${mu}: ${x} + ${y} + ${z} = 6,${NB}${NB}${x} + 2${y} + 3${z} = 10,${NB}${NB}${x} + 2${y} + ${lam}${z} = ${mu}.`,
        steps: [
          `Expanding along row 1:<br>${D} = 1(2${lam} − 6) − 1(${lam} − 3) + 1(2 − 2) = ${lam} − 3.`,
          `<b>Case ${lam}${NB}≠${NB}3:</b> unique solution. Eliminate without computing an inverse: subtracting equation 1 from equation 2 gives ${y} + 2${z} = 4; subtracting equation 2 from equation 3 gives (${lam} − 3)${z} = ${mu} − 10. Back-substitute:<br>${z} = ${fr(`${mu} − 10`, `${lam} − 3`)},<br>${y} = 4 − ${fr(`2(${mu} − 10)`, `${lam} − 3`)},<br>${x} = 6 − ${y} − ${z} = 2 + ${fr(`${mu} − 10`, `${lam} − 3`)}.`,
          `<b>Case ${lam} = 3:</b> equations 2 and 3 have identical left sides, so the system is consistent iff ${mu} = 10. If ${mu}${NB}≠${NB}10: no solution (and indeed ${Di('2')} = 1(30 − 3${mu}) − 6(3 − 3) + 1(${mu} − 10) = 20 − 2${mu}${NB}≠${NB}0).<br>If ${mu} = 10: the screen reads zero across the board, and rank is exactly 2 (rows 1 and 2 are independent), so by the Proposition there are infinitely many solutions (one free parameter). Eliminating: ${y} + 2${z} = 4, so with ${z} = ${t},<br>(${x},${NB}${y},${NB}${z}) = (2 + ${t},${NB}4 − 2${t},${NB}${t}),${NB}${NB}${t} ∈ ℝ.`,
          '<b>Why it is Advanced-level.</b> Three decisions stack: factor Δ in the parameter, test consistency at the critical value, and count the solution family rather than merely asserting “infinitely many”. The Proposition is what licenses jumping from “screen all zero” to “infinitely many” here: rank 2 is visible on inspection (rows 1 and 2 are not proportional), so the licence is valid.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Solve completely: ${x} + ${y} + ${z} = 3,${NB}${NB}2${x} + ${y} − ${z} = 1,${NB}${NB}3${x} + 2${y} + 0${z} = 4.`,
            a: `${D} = 0 (row 3 = row 1 + row 2) and all ${Di(i)} = 0; eliminating gives ${x} − 2${z} = −2, so with ${z} = ${t}:<br>(${x},${NB}${y},${NB}${z}) = (2${t} − 2,${NB}5 − 3${t},${NB}${t});<br>check in equation 3: 3(2${t} − 2) + 2(5 − 3${t}) = 4. ✓`,
          },
          {
            q: `Classify: ${x} + ${y} + ${z} = 3,${NB}${NB}2${x} + ${y} − ${z} = 1,${NB}${NB}3${x} + 2${y} + 0${z} = 7.`,
            a: `Same left sides, so ${D} = 0; eliminating gives ${x} − 2${z} = −2 from equations 1–2 but ${x} − 2${z} = 1 from equations 1 and 3: inconsistent; equivalently<br>${Di('1')} = ${vm(['3', '1', '1'], ['1', '1', '−1'], ['7', '2', '0'])} = 3(2) − 1(7) + 1(2 − 7)<br>= 6 − 7 − 5 = −6${NB}≠${NB}0.`,
          },
          {
            q: `Find all real ${k} for which ${I('kx')} + ${y} + ${z} = 1,${NB}${NB}${x} + ${I('ky')} + ${z} = ${k},${NB}${NB}${x} + ${y} + ${I('kz')} = ${sq(k)} has (i) a unique solution, (ii) no solution, (iii) infinitely many, describing the solution set in case (iii).`,
            a: `${D} = (${k} − 1)<sup>2</sup>(${k} + 2). (i) ${k}${NB}≠${NB}1,${NB}−2. (ii) ${k} = −2: adding the three equations gives 0 = 3, contradiction: no solution. (iii) ${k} = 1: all three equations collapse to ${x} + ${y} + ${z} = 1, a plane of solutions ${pr(s, t, `1 − ${s} − ${t}`)}, two parameters.`,
          },
          {
            q: `Find the dimension of the solution space of ${x} + ${y} + ${z} = 0,${NB}${NB}${x} − ${y} + ${z} = 0,${NB}${NB}2${x} + 0${y} + 2${z} = 0, and describe it geometrically.`,
            a: `Row 3 = row 1 + row 2, so ${r} = 2 and the dimension is 3 − 2 = 1: eliminating gives ${x} + ${z} = 0 and ${y} = 0, the line ${pr(t, '0', `−${t}`)} through the origin in direction ${pr('1', '0', '−1')}.`,
          },
          {
            q: `Explain why the counterexample ${x} + ${y} + ${z} = 1, 2${x} + 2${y} + 2${z} = 3, 3${x} + 3${y} + 3${z} = 4 slips past the ${Di(i)} screen, naming the rank of ${A} and of [${A} ∣ ${B}].`,
            a: `Every row of ${A} is proportional to ${ONES}, so rank${NB}${A} = 1, below the 2 required by the Proposition. All four 3 × 3 minors of [${A} ∣ ${B}] vanish, yet rank${NB}[${A} ∣ ${B}] = 2 > 1 = rank${NB}${A}: the constants column escapes the column space while adding only one rank, so the screen’s “all zero” no longer certifies consistency. Elimination exposes it in one step: subtracting 2×(equation 1) from equation 2 gives 0 = 1, and subtracting 3×(equation 1) from equation 3 gives 0 = 1.`,
          },
        ],
      },
    ],
  },
];
