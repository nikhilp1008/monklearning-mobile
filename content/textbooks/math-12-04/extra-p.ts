import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Additional topic P, pp. 297–305 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's "Addendum P — What
 * JEE Actually Asks", kept with the book's letter as the chapter's last additional
 * topic (decision 2). It opens partway down p. 297, below the rule that closes
 * Addendum E's answers, and ends on p. 305; Chapter 5 starts on p. 306. The
 * opening "How to read the counts" note is the "Introduction"; the numbered
 * headings "P.1 The distribution" … "P.5 Where to Spend Your Extra Practice" are
 * the parts, without their numbers. The distribution table is a table block, its
 * "Where it appears" column now "Papers cited": the count of the papers it names,
 * by exam (a paper before 2013 is "JEE"), followed by what the cell says of them
 * with the years dropped. Each archetype A1–A8 is a worked example tagged with its
 * heading: its "Shape / Method" text and its worked example's data are the
 * question, the working the steps (no answer line is printed, so the answer box is
 * empty). The traps are one mistakes block; the graded practice set P1–P10 is one
 * practice block, each "Solution." its answer. Exam years, dates and shift numbers
 * are dropped from every tag ("JEE Main, 8 Jan 2020, Shift II" → "JEE Main"; "JEE
 * 1981" → "JEE"), and every share of past questions carries the estimate label.
 * These pages print no drawing and no formula card. Every grid is a <vmat>,
 * <bmat> or <pmat> as printed (rows <r>, cells <c>); every fraction is stacked
 * (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const grid = (tag: string, rows: string[][]) =>
  `<${tag}>${rows.map((r) => `<r>${r.map((c) => `<c>${c}</c>`).join('')}</r>`).join('')}</${tag}>`;
/** A determinant: one array per row, one string per cell. */
const vm = (...rows: string[][]) => grid('vmat', rows);
/** A matrix in square brackets. */
const bm = (...rows: string[][]) => grid('bmat', rows);
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const A = I('A');
const B = I('B');
const C = I('C');
const D = I('D');
const G = I('G');
const H = I('H');
const K = I('K');
const M = I('M');
const N = I('N');
const O = I('O');
const P = I('P');
const Q = I('Q');
const X = I('X');
const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const f = I('f');
const g = I('g');
const i = I('i');
const j = I('j');
const k = I('k');
const m = I('m');
const n = I('n');
const p = I('p');
const s = I('s');
const x = I('x');
const y = I('y');
const z = I('z');
const al = I('α');
const la = I('λ');
const mu = I('μ');
const th = I('θ');
const II = I('I');
const T = '<sup>T</sup>';
const INV = '<sup>−1</sup>';
const xp = `${x}′`;
const yp = `${y}′`;
const pw = (base: string, e: string) => `${base}<sup>${e}</sup>`;
const sq = (v: string) => pw(v, '2');
const cube = (v: string) => pw(v, '3');
const sb = (base: string, e: string) => `${base}<sub>${e}</sub>`;
const D1 = sb('Δ', '1');
const D2 = sb('Δ', '2');
const D3 = sb('Δ', '3');
const Di = sb('Δ', i);
const aij = sb(a, I('ij'));
const bij = sb(b, I('ij'));
/** |s|, the U+2060 keeping the opening bar with what it holds. */
const abs = (v: string) => `|⁠${v}|`;
const ADJ = (v: string) => `adj${NB}${v}`;
const DET = (v: string) => `det${NB}${v}`;
const absA = abs(A);
const absM = abs(M);
/** A pair, its comma glued: (p, q). */
const pair = (u: string, v: string) => `(${u},${NB}${v})`;
const sin = (v: string) => `sin${NB}${v}`;
const cos = (v: string) => `cos${NB}${v}`;
const SET01 = `{0,${NB}1}`;
const SET101 = `{−1,${NB}0,${NB}1}`;
const H2 = fr('1', '2');
const DIAG = (u: string, v: string, w: string) => `diag(${u},${NB}${v},${NB}${w})`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic P (the book's Addendum P) · pp. 297–305 ────────────────
  {
    n: 'P',
    title: 'What JEE Actually Asks',
    extra: true,
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: '<b>How to read the counts.</b> The shares below are approximate, drawn from roughly 120 past-paper items. Treat them as indicative ratios, not exact census figures.',
      },

      { t: 'part', title: 'The distribution' },
      { t: 'p', html: `From roughly 120 past-paper items ${ESTIMATE}:` },
      {
        t: 'table',
        title: null,
        head: ['Sub-topic', 'Approx. share', 'Papers cited'],
        rows: [
          [
            'Consistency of linear systems (unique / infinite / none, parameters)',
            '~35%',
            '13+ (JEE 3+, Main 10+): a whole block of papers, back to the oldest; in the latest Main sessions alone, system-consistency items turn up in most papers.',
          ],
          ['Adjoint / inverse identities', '~15%', '16 (JEE 3, Main 9, Adv 4). Steady presence year after year.'],
          [
            'Properties / factorisation / “evaluate fast”',
            '~20%, spread over all decades',
            '9 (JEE 8, Adv 1): cyclic determinant, G.P. condition, digit divisibility, factorial determinant, and countless embedded uses.',
          ],
          [
            'Geometry via area/collinearity',
            '~8%',
            '4 (JEE 2, Main 2): concurrent-lines matching, area → orthocentre, area + line → parameter, a “congruent triangles” false statement built on the area determinant.',
          ],
          [
            'Counting / extremal determinants over finite entry sets',
            '~8%, Advanced-heavy',
            '9 (JEE 5, Main 1, Adv 3): passages, cube roots of unity, a trace puzzle.',
          ],
          [
            'Determinant equations → polynomials',
            'recurring',
            `5 (JEE 2, Main 2, Adv 1): (${a}${x} − 12), (tan<sup>3</sup>${NB}${x} = 1).`,
          ],
        ],
      },
      {
        t: 'p',
        html: `Two structural observations ${ESTIMATE}. First, <b>the centre of gravity has shifted hard toward systems</b>: in the oldest papers, property gymnastics dominated; in the recent ones, most Main papers carry 2–4 system-consistency or adjoint-identity items. Second, Advanced favours the counting/extremal genre almost exclusively: Main rarely touches it.`,
      },

      { t: 'part', title: 'The recurring archetypes' },
      {
        t: 'ex',
        tag: 'A1: Consistency triage for AX = B with a parameter',
        q: `<b>Shape:</b> three equations, one or two parameters; ask for “no solution”, “infinitely many”, or a numerical combination like ${la} + ${mu}.<br><b>Method:</b> compute Δ as a polynomial in the parameter; its roots are the only candidates for trouble. At each root, test ${D1}, ${D2}, ${D3}: any nonzero one means <b>no solution</b>; if all are zero, settle it by elimination (usually infinitely many, but no solution is still possible: see Additional topic E). Never assume which.<br><br><b>Worked example</b> (JEE Main): for which ${al} does<br>${al}${x} + 2${y} + 2${z} = 5<br>2${al}${x} + 3${y} + 5${z} = 8<br>4${x} + ${al}${y} + 6${z} = 10<br>fail to have a unique solution?`,
        steps: [
          `Δ = ${vm([al, '2', '2'], [`2${al}`, '3', '5'], ['4', al, '6'])}<br>= ${al}(18 − 5${al}) − 2(12${al} − 20) + 2(2${sq(al)} − 12)<br>= −(${al} + 8)(${al} − 2)`,
          `So Δ = 0 only at ${al} = −8 and ${al} = 2. At ${al} = 2, replacing column 1 by (5,${NB}8,${NB}10):<br>${D1} = ${vm(['5', '2', '2'], ['8', '3', '5'], ['10', '2', '6'])} = 40 + 4 − 28 = 16 ≠ 0`,
          `so the system is <b>inconsistent at ${al} = 2</b> (and likewise at ${al} = −8, where ${D1} = 106 ≠ 0); everywhere else it has a unique solution.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'A2: Homogeneous systems: “non-trivial solution”',
        q: `<b>Shape:</b> ${A}${X} = ${O} with trigonometric or polynomial entries; count the parameters, or identify the solution set.<br><b>Method:</b> non-trivial solutions exist <b>iff</b> Δ = 0; then solve the collapsed system. Remember the trivial solution always exists: the question is about the rest.<br><br><b>Worked example</b> (JEE Main):<br>${x} − 2${y} − 2${z} = ${la}${x},<br>${x} + 2${y} + ${z} = ${la}${y},<br>−${x} − ${y} = ${la}${z}`,
        steps: [
          `The coefficient matrix is<br>${bm([`1 − ${la}`, '−2', '−2'], ['1', `2 − ${la}`, '1'], ['−1', '−1', `−${la}`])}.<br>Expanding along row 1, the three minors are ${sb(M, '11')} = (2 − ${la})(−${la}) + 1 = (1 − ${la})<sup>2</sup>, ${sb(M, '12')} = 1 − ${la} and ${sb(M, '13')} = 1 − ${la}, giving<br>Δ = (1 − ${la})(1 − ${la})<sup>2</sup> + 2(1 − ${la}) − 2(1 − ${la})<br>= (1 − ${la})<sup>3</sup>`,
          `Non-trivial solutions exist iff ${la} = 1: a <b>singleton</b> set of values.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'A3: Elementwise-scaled determinants',
        q: `<b>Shape:</b> ${bij} = ${f}(${i})${NB}${g}(${j})${NB}${aij}; given ${abs(B)}, find ${absA} (or vice versa).<br><b>Method:</b> never pull one global factor. Split ${f}(${i})${g}(${j}) into a row factor times a column factor:<br>${B} = ${D}${A}${G} with ${D} = ${DIAG(`${f}(1)`, `${f}(2)`, `${f}(3)`)}, ${G} = ${DIAG(`${g}(1)`, `${g}(2)`, `${g}(3)`)} ⇒ ${abs(B)} = ${abs(D)}${NB}${absA}${NB}${abs(G)}<br><br><b>Worked example</b> (JEE Main): ${bij} = ${pw('3', `${i}+${j}−2`)}${aij}, ${abs(B)} = 81.`,
        steps: [
          `Since ${pw('3', `${i}+${j}−2`)} = ${pw('3', `${i}−1`)}${pw('3', `${j}−1`)},<br>${B} = ${DIAG('1', '3', '9')}${NB}${A}${NB}${DIAG('1', '3', '9')}<br>⇒ ${abs(B)} = 3<sup>6</sup>${absA}`,
          `so 81 = 729${absA} and ${absA} = ${fr('1', '9')}. (A related question, JEE, with ${bij} = ${pw('2', `${i}+${j}`)}${aij} and ${abs(P)} = 2, gives ${abs(Q)} = 2<sup>6</sup> · 2<sup>6</sup> · 2 = 2<sup>13</sup>; the wrong “pull out every entry’s factor” route multiplies by all nine factors at once, 2<sup>36</sup>, instead of 2<sup>12</sup>: see the traps.)`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'A4: Adjoint power ladders',
        q: `<b>Shape:</b> chains like ${abs(`adj(${ADJ(A)})`)}, or a condition such as ${M}${INV} = adj(${ADJ(M)}).<br><b>Method:</b> memorise the ladder for order ${n} = 3:<br>${abs(ADJ(A))} = ${sq(absA)},<br>${abs(`adj(${ADJ(A)})`)} = ${pw(absA, '4')},<br>adj(${ADJ(A)}) = ${absA}${NB}${A}<br><br><b>Worked example</b> (JEE Advanced): ${M} a 3 × 3 invertible matrix with ${M}${INV} = adj(${ADJ(M)}).`,
        steps: [
          `Since adj(${ADJ(M)}) = ${absM}${NB}${M},<br>${M}${INV} = ${absM}${M} ⇒ ${sq(M)} = ${fr('1', absM)}${NB}${II}`,
          `Taking determinants: (${DET(M)})<sup>2</sup> = (${DET(M)})<sup>−3</sup>, so (${DET(M)})<sup>5</sup> = 1, hence ${DET(M)} = 1. Then ${sq(M)} = ${II}, and finally (${ADJ(M)})<sup>2</sup> = adj(${sq(M)}) = adj(${II}) = ${II}. So ${DET(M)} = 1, ${sq(M)} = ${II} and (${ADJ(M)})<sup>2</sup> = ${II} are the statements that always hold.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'A5: Area/collinearity smuggled into coordinate geometry',
        q: `<b>Shape:</b> “triangle has area ${K}”, then find a parameter, or build a further object (line, orthocentre).<br><b>Method:</b> write the area determinant, set ${H2}|Δ| = ${K}, and expect <b>two</b> branches from the modulus.<br><br><b>Worked example</b> (JEE Main): the triangle with vertices ${pair(k, `−3${k}`)}, ${pair('5', k)}, ${pair(`−${k}`, '2')} has area 28; ${k} an integer; find the orthocentre.`,
        steps: [
          `Δ = ${vm([k, `−3${k}`, '1'], ['5', k, '1'], [`−${k}`, '2', '1'])}<br>= ${k}(${k} − 2) + 3${k}(5 + ${k}) + (10 + ${sq(k)})<br>= 5${sq(k)} + 13${k} + 10`,
          `Setting |Δ| = 56: the plus branch gives 5${sq(k)} + 13${k} − 46 = 0, i.e. ${k} = 2 or ${k} = −${fr('23', '5')}; the minus branch gives 5${sq(k)} + 13${k} + 66 = 0, negative discriminant. So ${k} = 2 and the vertices are ${A}${pair('2', '−6')}, ${B}${pair('5', '2')}, ${C}${pair('−2', '2')}.`,
          `Side ${I('BC')} is horizontal, so the altitude from ${A} is ${x} = 2. Slope of ${I('AC')} is ${fr('2 − (−6)', '−2 − 2')} = −2, so the altitude from ${B} has slope ${H2}:<br>${y} − 2 = ${H2}(${x} − 5),<br>giving at ${x} = 2 the value ${y} = ${H2}. Hence the orthocentre is<br>${H} = ${pair('2', H2)}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'A6: Instant zero and canonical factorisations',
        q: `<b>Shape:</b> “show the determinant is negative / zero iff …”.<br><b>Method:</b> scan for proportional rows, AP rows, odd-order skew-symmetry; otherwise reduce to a named form (Vandermonde, cyclic).<br><br><b>Worked example</b> (JEE): for positive ${a}, ${b}, ${c}, not all equal,<br>Δ = ${vm([a, b, c], [b, c, a], [c, a, b])}`,
        steps: [
          `= 3${I('abc')} − ${cube(a)} − ${cube(b)} − ${cube(c)}<br>= −(${a} + ${b} + ${c})(${sq(a)} + ${sq(b)} + ${sq(c)} − ${I('ab')} − ${I('bc')} − ${I('ca')})<br>= −(${a} + ${b} + ${c}) · ${H2}[(${a} − ${b})<sup>2</sup> + (${b} − ${c})<sup>2</sup> + (${c} − ${a})<sup>2</sup>] < 0`,
          `since ${a} + ${b} + ${c} > 0 and the squared sum vanishes only when ${a} = ${b} = ${c}. (Check: ${a}, ${b}, ${c} = 1, 2, 3 gives Δ = −18, and −(${a} + ${b} + ${c})(${sq(a)} + ${sq(b)} + ${sq(c)} − ${I('ab')} − ${I('bc')} − ${I('ca')}) = −6 · 3 = −18.)`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'A7: Identity chains from matrix equations',
        q: `<b>Shape:</b> ${M}${M}${T} = ${II}, ${A}${A}${T} = ${A}${T}${A}, (${A} − 3${II})(${A} − 5${II}) = ${O}; deduce determinant facts.<br><b>Method:</b> convert everything to determinants and transpose-invariance; move factors across the bar.<br><br><b>Worked example</b> (JEE): ${M} is a 3 × 3 matrix with ${DET(M)} = 1 and ${M}${M}${T} = ${II}. Prove det(${M} − ${II}) = 0:`,
        steps: [
          `det(${M} − ${II}) = det(${M} − ${M}${M}${T})<br>= det(${M}) det(${II} − ${M}${T})<br>= det((${II} − ${M})${T}) = det(${II} − ${M})<br>= det(−(${M} − ${II})) = (−1)<sup>3</sup> det(${M} − ${II})<br>= −det(${M} − ${II})`,
          `where the factor (−1)<sup>3</sup> is where odd order enters (for even order the same chain gives no information). So 2${NB}det(${M} − ${II}) = 0. (Related results: Main, ${B} = ${A}${INV}${A}${T} with ${A}${A}${T} = ${A}${T}${A} forces ${B}${B}${T} = ${II}; Adv, a matrix with negative determinant cannot be anyone’s square, since det(${sq(X)}) = (${DET(X)})<sup>2</sup> ≥ 0.)`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'A8: Counting and extremal determinants',
        q: `<b>Shape:</b> entries restricted to ${SET01}, ${SET101}, or residues mod ${p}; count matrices or maximise det.<br><b>Method:</b> enumerate structurally (what forces det > 0?), and use the expansion structure for bounds.<br><br><b>Worked example</b> (JEE): a random 2 × 2 determinant with entries 0 or 1; probability the value is positive.`,
        steps: [
          `${I('ad')} − ${I('bc')} > 0 needs ${I('ad')} = 1, so ${a} = ${d} = 1, and ${I('bc')} = 0: three choices for ${pair(b, c)}. Out of 16 equally likely matrices, 3 work:<br>Pr = ${fr('3', '16')}`,
          `(The Advanced face of this archetype, maximum det over ${SET101}<sup>3×3</sup>, is practice question 8.)`,
        ],
        ans: '',
      },

      { t: 'part', title: 'The traps' },
      { t: 'p', html: 'Built from the distractor patterns that recur in JEE options:' },
      {
        t: 'mistakes',
        items: [
          `<b>Δ = 0 does not mean “infinitely many”.</b> You must check a ${Di}. The Main no-solution item has Δ = 0 at ${k} = 1 and ${k} = 3, but only ${k} = 3 is inconsistent: at ${k} = 1 the equations collapse to one line. The distractor “both” is waiting for you.`,
          '<b>“More than two solutions” means infinitely many</b>: a linear system has exactly 0, 1, or ∞ solutions (a Main numerical exploits precisely this).',
          `<b>Scaling confusions.</b> ${abs(`${k}${A}`)} = ${pw(k, n)}${absA}, but one scaled row costs only ${k}; and an elementwise rule ${bij} = ${pw('2', `${i}+${j}`)}${aij} costs 2<sup>12</sup> · ${absA}, not 2<sup>36</sup> · ${absA} (which is what you get by pulling out all nine entry factors as if each scaled the whole determinant). Neighbouring powers such as 2<sup>10</sup>, 2<sup>11</sup>, 2<sup>12</sup> are the natural off-by-a-few distractors for 2<sup>13</sup>.`,
          `<b>Adjoint powers.</b> ${abs(ADJ(A))} = ${pw(absA, `${n}−1`)} (not ${pw(absA, n)}); iterating gives ${pw(absA, `(${n}−1)<sup>2</sup>`)} = ${pw(absA, '4')} for 3 × 3. And adj(${I('AB')}) = (${ADJ(B)})(${ADJ(A)}): reversed (the unreversed form is a classic wrong option).`,
          `<b>adj(${ADJ(A)}) = ${pw(absA, `${n}−2`)}${A}, not ${absA}(${ADJ(A)})${INV}.</b> “Which statement is not always true?” items punish pattern-matching between these look-alikes.`,
          `<b>An odd-order skew-symmetric matrix is always singular.</b> The JEE item hands you “non-singular 3 × 3 skew-symmetric ${M}, ${N}”: an impossible premise. Recognise the contradiction instead of hunting for matrices that do not exist.`,
          `<b>Homogeneous systems:</b> ${X} = ${O} always works; the question is about non-trivial solutions, which need Δ = 0. The distractor “always has a non-trivial solution” is a standard one in past papers.`,
          `<b>Area bookkeeping:</b> forget the ${H2} or the modulus and both branches collapse to one wrong answer (a Main item has ${la} = 3 and ${la} = −2).`,
          `<b>Illegal simultaneous operations</b> (${sb(I('R'), '1')} → ${sb(I('R'), '1')} + ${sb(I('R'), '2')} and ${sb(I('R'), '2')} → ${sb(I('R'), '2')} + ${sb(I('R'), '1')} in one breath) silently change Δ.`,
          `<b>Same-row vs cross-cofactor sums:</b> entries of row ${i} against cofactors of row ${i} give ${absA}; against cofactors of row ${k}${NB}≠${NB}${i} give 0. An Adv adjoint-reading question runs entirely on this.`,
        ],
      },

      { t: 'part', title: 'Graded practice set' },
      {
        t: 'practice',
        items: [
          {
            q: `Evaluate without expanding: ${vm(['1', a, `${b} + ${c}`], ['1', b, `${c} + ${a}`], ['1', c, `${a} + ${b}`])}.`,
            a: `${sb(C, '2')} → ${sb(C, '2')} + ${sb(C, '3')} makes column 2 equal to (${a} + ${b} + ${c}, ${a} + ${b} + ${c}, ${a} + ${b} + ${c})${T}, a multiple of column 1. Two proportional columns give<br>Δ = 0`,
          },
          {
            q: `(Pattern: Main.) Find the number of values of ${k} for which (${k} + 1)${x} + 8${y} = 4${k}, ${k}${x} + (${k} + 3)${y} = 3${k} − 1 has <b>no</b> solution.`,
            a: `Δ = (${k} + 1)(${k} + 3) − 8${k}<br>= ${sq(k)} − 4${k} + 3 = (${k} − 1)(${k} − 3)<br>Candidates: ${k} = 1, 3. At ${k} = 1: the equations become 2${x} + 8${y} = 4 and ${x} + 4${y} = 2: the same line, so infinitely many solutions. At ${k} = 3: 4${x} + 8${y} = 12 and 3${x} + 6${y} = 8; left sides are in ratio ${fr('4', '3')}<br>but right sides in ratio ${fr('3', '2')}: inconsistent. So exactly <b>one</b> value (${k} = 3).`,
          },
          {
            q: `${A} is 3 × 3 with ${absA} = −2. Find ${abs(ADJ(A))}, ${abs(`adj(${ADJ(A)})`)}, ${abs(`3${A}`)}, ${abs(`${A}${INV}`)}.`,
            a: `With ${n} = 3:<br>${abs(ADJ(A))} = ${sq(absA)} = 4<br>${abs(`adj(${ADJ(A)})`)} = ${pw(absA, '4')} = 16<br>${abs(`3${A}`)} = 3<sup>3</sup>(−2) = −54<br>${abs(`${A}${INV}`)} = −${H2}`,
          },
          {
            q: `(JEE Main.) Find the number of ${th} ∈ (0,${NB}π) for which<br>${x} + 3${y} + 7${z} = 0,<br>−${x} + 4${y} + 7${z} = 0,<br>(${sin(`3${th}`)})${x} + (${cos(`2${th}`)})${y} + 2${z} = 0<br>has a non-trivial solution.`,
            a: `Expand the coefficient determinant along row 3:<br>Δ = 14 − 7${NB}${sin(`3${th}`)} − 14${NB}${cos(`2${th}`)}<br>Set Δ = 0 and substitute ${sin(`3${th}`)} = 3${s} − 4${cube(s)}, ${cos(`2${th}`)} = 1 − 2${sq(s)} with ${s} = ${sin(th)}:<br>2 − (3${s} − 4${cube(s)}) − 2(1 − 2${sq(s)}) = 0<br>⇒ 4${cube(s)} + 4${sq(s)} − 3${s} = 0<br>⇒ ${s}(2${s} − 1)(2${s} + 3) = 0<br>So ${s} = 0, ${H2}, −${fr('3', '2')}.<br>On (0,${NB}π): ${s} = 0 is excluded, ${s} = −${fr('3', '2')} impossible,<br>${s} = ${H2} gives ${th} = ${fr('π', '6')} or ${fr('5π', '6')}.<br>Exactly <b>two</b> values.`,
          },
          {
            q: `(JEE.) ${P} = [${aij}] is 3 × 3 with ${abs(P)} = 2, and ${Q} = [${bij}] with ${bij} = ${pw('2', `${i}+${j}`)}${aij}. Find ${abs(Q)}.`,
            a: `Split the exponent: ${pw('2', `${i}+${j}`)} = ${pw('2', i)} · ${pw('2', j)}, so<br>${Q} = ${DIAG('2', '4', '8')}${NB}${P}${NB}${DIAG('2', '4', '8')}<br>Hence ${abs(Q)} = 2<sup>6</sup> · 2<sup>6</sup> · 2 = 2<sup>13</sup>.`,
          },
          {
            q: `(JEE Main.) If ${x} + ${y} + ${z} = 5, ${x} + 2${y} + 2${z} = 6, ${x} + 3${y} + ${la}${z} = ${m} has infinitely many solutions, find ${la} + ${m}.`,
            a: `Δ = ${vm(['1', '1', '1'], ['1', '2', '2'], ['1', '3', la])} = ${la} − 3 ⇒ ${la} = 3<br>With ${la} = 3, ${sb('Δ', y)} (second column replaced by the constants):<br>${vm(['1', '5', '1'], ['1', '6', '2'], ['1', m, '3'])}<br>= 18 − 2${m} − 5 + ${m} − 6 = 7 − ${m} ⇒ ${m} = 7<br>Consistency holds (the equations collapse to ${x} + ${y} + ${z} = 5, ${y} + ${z} = 1), so the system is genuinely infinite, and ${la} + ${m} = 10.`,
          },
          {
            q: `(JEE Main.) ${A}${pair('1', '−1')}, ${B}${pair('0', '2')}; a point ${P}${pair(xp, yp)} lies on 3${x} + ${y} − 4${la} = 0 and area(${I('PAB')}) = 5. Find a value of ${la}.`,
            a: `Δ = ${vm([xp, yp, '1'], ['1', '−1', '1'], ['0', '2', '1'])} = −3${xp} − ${yp} + 2<br>Area 5 means |Δ| = 10, i.e. 3${xp} + ${yp} = 12 or 3${xp} + ${yp} = −8. But the line says 3${xp} + ${yp} = 4${la}, so<br>4${la} = 12 or −8 ⇒ ${la} = 3 or ${la} = −2<br>Both values satisfy the conditions; in a multiple-choice setting, whichever of them appears among the options is the answer.`,
          },
          {
            q: `(Adv spirit.) Find the maximum value of ${DET(P)} over all 3 × 3 matrices with entries in ${SET101}.`,
            a: `Each of the six expansion terms lies in ${SET101}, so ${abs(DET(P))} ≤ 6. If ${abs(DET(P))} ≥ 5, at least five terms equal ±1 (all of the same sign). Each entry appears in exactly two of the six terms, so a zero entry would kill two terms and leave at most four. Hence every entry is nonzero, i.e. ${P} is a ±1 matrix. Subtract row 1 from rows 2 and 3: those rows acquire all entries in {0,${NB}±2}, so det is divisible by 4: contradicting 5 or 6. Hence the maximum is at most 4, and<br>${P} = ${bm(['−1', '1', '1'], ['1', '−1', '1'], ['1', '1', '−1'])}<br>has ${DET(P)} = −1(1 − 1) − 1(−1 − 1) + 1(1 + 1) = 4 (expanding along row 1). <b>Maximum</b> = 4.`,
          },
          {
            q: `(JEE Advanced.) ${A} is 2 × 2, tr(${A}) = 3, tr(${cube(A)}) = −18. Find ${DET(A)}.`,
            a: `Let the eigenvalues be ${la}, ${mu}: ${la} + ${mu} = 3, ${la}${mu} = ${d}. Then<br>${cube(la)} + ${cube(mu)} = (${la} + ${mu})<sup>3</sup> − 3${la}${mu}(${la} + ${mu})<br>= 27 − 9${d}<br>Given 27 − 9${d} = −18, so ${d} = 5. (Equivalently, without eigenvalues: every 2 × 2 matrix satisfies ${sq(A)} − (tr${NB}${A})${A} + (${DET(A)})${II} = ${O}, as multiplying out shows, so ${sq(A)} = 3${A} − ${d}${II}, hence ${cube(A)} = 3${sq(A)} − ${d}${A} and the same trace equation. Here ${la}, ${mu} are complex, which does not matter.)<br><b>${DET(A)} = 5</b>`,
          },
          {
            q: `(JEE, capstone.) Find all real ${la} for which<br>${la}${x} + (${sin(al)})${y} + (${cos(al)})${z} = 0<br>${x} + (${cos(al)})${y} + (${sin(al)})${z} = 0<br>−${x} + (${sin(al)})${y} − (${cos(al)})${z} = 0<br>has a non-trivial solution; then find all ${al} when ${la} = 1.`,
            a: `Expanding along row 1, the three minors are −1, −(${cos(al)} − ${sin(al)}), and ${sin(al)} + ${cos(al)}:<br>Δ = −${la} − ${sin(al)}(${sin(al)} − ${cos(al)}) + ${cos(al)}(${sin(al)} + ${cos(al)})<br>= −${la} + ${cos(`2${al}`)} + ${sin(`2${al}`)}<br>Non-trivial solutions exist iff<br>${la} = ${cos(`2${al}`)} + ${sin(`2${al}`)}<br>= √2${NB}cos(2${al} − ${fr('π', '4')})<br>Since the cosine takes every value in [−1,${NB}1], a non-trivial solution exists (for a suitable ${al}) exactly when −√2 ≤ ${la} ≤ √2.<br>For ${la} = 1: cos(2${al} − ${fr('π', '4')}) = ${fr('1', '√2')},<br>so 2${al} − ${fr('π', '4')} = 2${n}π ± ${fr('π', '4')}, giving<br>${al} = ${n}π or ${al} = ${n}π + ${fr('π', '4')}, ${n} ∈ ℤ`,
          },
        ],
      },

      { t: 'part', title: 'Where to spend your extra practice' },
      {
        t: 'p',
        html: `Topic 05 drills the CBSE matrix-method template; JEE asks for more: parameterised consistency triage, rank-level reasoning, and these genres from the set above:<br>• <b>Counting and extremal determinants</b> over restricted entry sets (practice question 8): an Advanced staple ${ESTIMATE}.<br>• <b>Trace- and polynomial-in-matrix puzzles</b> via eigenvalues or the characteristic equation (practice question 9).<br>• <b>Elementwise scaling</b> behind the 2<sup>13</sup>-style questions (practice question 5).<br>• <b>Multi-correct and numerical-answer formats</b>, where one missed branch (Δ = 0 versus ${Di} ≠ 0) costs the whole item: test every critical parameter value before you stop.`,
      },
    ],
  },
];
