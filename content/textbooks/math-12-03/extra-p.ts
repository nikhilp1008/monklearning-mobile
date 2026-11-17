import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Additional topic P, pp. 236–242 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's "Addendum P — What
 * JEE Actually Asks", kept with the book's letter as the chapter's last additional
 * topic (decision 2). It opens partway down p. 236, below the rule that closes
 * Addendum E (the "Everything above runs on three engines …" paragraph is
 * Addendum E's), and ends on p. 242; Chapter 4 starts on p. 243. The opening
 * paragraph is the "Introduction"; the numbered headings "P.1 The distribution" …
 * "P.4 Graded practice set" are the parts, without their numbers. The
 * distribution's bullet list is one paragraph of "•" items; a bare list of papers
 * becomes a count ("papers cited: 11 (JEE 2, Main 6, Adv 3)"), and every other
 * paper name loses its year and date (a paper before 2013 is "JEE"). Each
 * archetype 1–6 is a worked example tagged with its heading: its "Shape / Method"
 * text and its worked example's data are the question, the working the steps
 * (no answer line is printed, so the answer box is empty). The traps are one
 * mistakes block; the graded practice set Q1–Q12 is one practice block, each
 * "Solution." its answer. Every share of past questions carries the estimate
 * label. These pages print no drawing and no formula card. Every grid is a
 * <pmat> or <bmat> as printed (rows <r>, cells <c>); the stacked binomial is
 * <binom>; every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const bn = (a: string, b: string) => `<binom><num>${a}</num><den>${b}</den></binom>`;
const I = (s: string) => `<i>${s}</i>`;
/** A matrix in round brackets: one array per row, one string per cell. */
const pm = (...rows: string[][]) => `<pmat>${rows.map((r) => `<r>${r.map((c) => `<c>${c}</c>`).join('')}</r>`).join('')}</pmat>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const A = I('A');
const B = I('B');
const M = I('M');
const N = I('N');
const O = I('O');
const P = I('P');
const Q = I('Q');
const R = I('R');
const X = I('X');
const Y = I('Y');
const Z = I('Z');
const a = I('a');
const i = I('i');
const j = I('j');
const k = I('k');
const n = I('n');
const p = I('p');
const q = I('q');
const r = I('r');
const x = I('x');
const y = I('y');
const z = I('z');
const al = I('α');
const th = I('θ');
const om = I('ω');
const II = I('I');
const T = '<sup>T</sup>';
const INV = '<sup>−1</sup>';
const I3 = `${II}<sub>3</sub>`;
const I2 = `${II}<sub>2</sub>`;
const AT = `${A}${T}`;
const BT = `${B}${T}`;
const AAT = `${I('AA')}${T}`;
const AINV = `${A}${INV}`;
const pw = (base: string, e: string) => `${base}<sup>${e}</sup>`;
const sq = (s: string) => pw(s, '2');
/** A pair, its comma glued: (p, q). */
const pair = (u: string, v: string) => `(${u},${NB}${v})`;
const cos = (s: string) => `cos${NB}${s}`;
const sin = (s: string) => `sin${NB}${s}`;
/** The rotation matrix with angle t. */
const rot = (t: string) => pm([cos(t), `−${sin(t)}`], [sin(t), cos(t)]);
const SET101 = `{−1,${NB}0,${NB}1}`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic P (the book's Addendum P) · pp. 236–242 ────────────────
  {
    n: 'P',
    title: 'What JEE Actually Asks',
    extra: true,
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Everything below is drawn from about 30 matrix questions from JEE Main, JEE Advanced and the JEE papers before them. Where a question is quoted, its matrices are reconstructed and re-solved; where only its pattern is described, the official answer is cited.',
      },

      { t: 'part', title: 'The distribution' },
      {
        t: 'p',
        html: `Judged from the questions surveyed, the examiners’ weight falls very unevenly ${ESTIMATE}:`,
      },
      {
        t: 'p',
        html: `• <b>High powers and hidden matrix structure</b> is the single biggest cluster: roughly a third of the questions surveyed ${ESTIMATE}. Questions cited: 11 (JEE 2, Main 6, Adv 3). The matrix always carries a concealed property (${sq(A)} = ${II}, nilpotence, ${pw(om, '3')} = 1 entries, unitriangular form) and you are asked for ${pw(A, '31')}, ${pw(A, '50')}, a sum like ${II} + ${A} + ⋯, or one entry of a high power.<br>• <b>Transpose algebra with symmetric/skew material</b>. Papers cited: 4 (JEE 1, Main 2, Adv 1). Typically classify an expression like ${pw(X, '4')}${pw(Z, '3')} − ${pw(Z, '3')}${pw(X, '4')}, or solve a system mixing ${A}, ${B} and ${BT}.<br>• <b>Orthogonality and counting under a quadratic constraint</b>: Adv (tr(${M}${T}${M}) = 5, answer 198); Main (tr(${AAT}) = 3 over ${SET101}, answer 672); Main (count ${pair(x, y)} with ${AT}${A} = 3${I3}); two Main papers (${A}${AT} = ${II} or 9${II}); Adv (${sq(P)} = −${II} over cube roots of unity, answer 1); JEE (non-singular ${om}-matrices, answer 2).<br>• <b>Matrix equation collapsed to a scalar system</b>: Main Online (2${p} + ${q} − ${r} = −3); Main Online (${y} = 2${x}).<br>• <b>Inverse read off a polynomial relation</b>: Main (10${AINV} = 6${II} − ${A}).`,
      },
      {
        t: 'p',
        html: 'What is conspicuously absent at JEE level: constructing a matrix from a rule, “express as symmetric + skew” long-answer work, and grinding an inverse by row operations. Those are school-board marks, not JEE marks.',
      },

      { t: 'part', title: 'The recurring archetypes' },
      {
        t: 'ex',
        tag: 'Archetype 1: Collapse the power: find the hidden identity',
        q: `<b>Shape:</b> “${pw(A, '2020')} = ?”, “sum of entries/column of ${pw(A, '50')}”, often with ${om} (cube root of unity) planted in the entries. <b>Method:</b> Before multiplying anything, test ${sq(A)}: is it ${II}, ${A}, ${O}, or a small combination? If ${A} = ${II} + ${N} with ${pw(N, k)} = ${O}, use the finite binomial theorem. If entries involve ${om}, reduce exponents mod 3. <b>Worked example</b> (Main Online; official answer 231):<br>${A} = ${pm(['1', '0', '0'], ['1', '1', '0'], ['1', '1', '1'])}, ${B} = ${pw(A, '20')}; find the sum of the first column of ${B}.`,
        steps: [
          `Write ${A} = ${II} + ${N}. Then<br>${N} = ${pm(['0', '0', '0'], ['1', '0', '0'], ['1', '1', '0'])},<br>${sq(N)} = ${pm(['0', '0', '0'], ['0', '0', '0'], ['1', '0', '0'])}, ${pw(N, '3')} = ${O}.`,
          `So the binomial series stops:<br>${pw(A, '20')} = ${II} + 20${N} + ${bn('20', '2')}${sq(N)}.`,
          `First column: (1,${NB}20,${NB}20 + 190) = (1,${NB}20,${NB}210); sum = 231. Brute force would need nineteen 3 × 3 multiplications; the whole point is that you never do them.`,
          `The same skeleton, other disguises: Adv built ${P} = ${II} + ${A} with ${pw(A, '3')} = ${O} and asked inside ${pw(P, '50')} − ${Q} = ${II} (expand to ${II} + 50${A} + ${bn('50', '2')}${sq(A)}); Main hid ${al} = ${om} in ${A} so that ${A} has small period and ${pw(A, '31')} reduces mod that period; Adv took ${p}<sub>${I('ij')}</sub> = ${pw(om, `${i}+${j}`)}, where<br>${sq(P)}<sub>${I('ij')}</sub> = ∑<sub>${k}</sub>${NB}${pw(om, `${i}+${k}`)}${pw(om, `${k}+${j}`)}<br>= ${pw(om, `${i}+${j}`)}∑<sub>${k}=1</sub><sup>${n}</sup>(${sq(om)})<sup>${k}</sup>,<br>which vanishes exactly when 3${NB}|${NB}${n}: hence ${sq(P)} ≠ ${O} precisely when 3${NB}∤${NB}${n}; of the options offered (55, 56, 57, 58), that is ${n} = 55, 56, 58.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 2: Rotation matrices: angles doing the arithmetic',
        q: `<b>Shape:</b> ${A} = ${rot(al)} with a condition on ${pw(A, n)}; find ${al}. (Main asked this with ${n} = 32.) <b>Method:</b> ${pw(A, n)} = ${R}(${n}${al}); convert the matrix condition into ${n}${al} ≡ (target angle) (mod 2π).`,
        steps: [
          `In that item the condition requires ${cos(`32${al}`)} = 0, ${sin(`32${al}`)} = 1, i.e. 32${al} ≡ ${fr('π', '2')} (mod 2π), giving ${al} = ${fr('π', '64')} as the principal value. Never multiply the matrix out: rotate.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 3: Counting with tr(AA′) or A′A',
        q: `<b>Shape:</b> “How many 3 × 3 matrices with entries from a small set satisfy …?” <b>Method:</b> Know cold that<br>tr(${AAT}) = ∑<sub>${i},${j}</sub>${NB}${sq(a)}<sub>${I('ij')}</sub>,<br>so the condition becomes a Diophantine statement about squared entries; then split into cases and count placements. <b>Worked example</b> (Main, answer 672): entries from ${SET101}, tr(${AAT}) = 3.`,
        steps: [
          `Since squares lie in {0,${NB}1}, exactly three cells are non-zero. Choose the cells in ${bn('9', '3')} = 84 ways, assign signs in 2<sup>3</sup> = 8 ways:<br>84 × 8 = 672.`,
          `Its harder sibling (Adv, answer 198): entries from {0,${NB}1,${NB}2}, tr(${M}${T}${M}) = 5. Cases: five 1s and four 0s, giving ${bn('9', '4')} = 126; or one 1, one 2 (2<sup>2</sup> = 4 contributes), giving 9 × 8 = 72. Total 126 + 72 = 198. Missing the second case, because 2<sup>2</sup> = 4 hides inside “= 5”, is the designed failure.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 4: Transpose systems and flip-classification',
        q: `<b>Shape:</b> Either (a) equations linking ${A}, ${B}, ${BT}; or (b) “which of these is symmetric/skew?” with products like ${pw(X, '4')}${pw(Z, '3')} − ${pw(Z, '3')}${pw(X, '4')}. <b>Method:</b> For (a), transpose the whole system to manufacture more equations, then solve linearly. For (b), apply the reversal law (${I('UVW')})${T} = ${I('W')}${T}${I('V')}${T}${I('U')}${T}, substitute ${X}${T} = −${X}, ${Z}${T} = ${Z}, and read the sign, together with the parity facts<br>(${X}<sup>even</sup>)${T} = ${X}<sup>even</sup>,<br>(${X}<sup>odd</sup>)${T} = −${X}<sup>odd</sup><br>for skew ${X}. <b>Worked example</b> (Main Online, answer (b)): ${A} + ${B} = 2${BT}, 3${A} + 2${B} = ${I3}.`,
        steps: [
          `From the first, ${A} = 2${BT} − ${B}; substituting into the second:<br>6${BT} − ${B} = ${I3}.`,
          `Transpose it: 6${B} − ${BT} = ${I3}. Eliminating ${BT} gives 35${B} = 7${I3}, so ${B} = ${A} = ${fr(I3, '5')}, and<br>10${A} + 5${B} = 2${I3} + ${I3} = 3${I3}.`,
          `<b>Advanced instance</b> (Adv, answers (c), (d)): with ${X},${NB}${Y} skew and ${Z} symmetric,<br>(${pw(X, '4')}${pw(Z, '3')} − ${pw(Z, '3')}${pw(X, '4')})${T}<br>= ${pw(Z, '3')}${pw(X, '4')} − ${pw(X, '4')}${pw(Z, '3')}<br>= −(${pw(X, '4')}${pw(Z, '3')} − ${pw(Z, '3')}${pw(X, '4')}) (skew),<br>(${pw(X, '23')} + ${pw(Y, '23')})${T} = −${pw(X, '23')} − ${pw(Y, '23')} (skew),<br>while ${pw(Y, '3')}${pw(Z, '4')} − ${pw(Z, '4')}${pw(Y, '3')} and ${pw(X, '44')} + ${pw(Y, '44')} come out symmetric. Option-designers rely on students mis-tracking which factor picks up the minus sign.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 5: The inverse hiding in a polynomial',
        q: `<b>Shape:</b> “${A} satisfies ${I('f')}(${A}) = ${O}; find ${I('c')}${AINV}.” <b>Method:</b> Peel off the constant term, factor out ${A}, divide by the scalar. <b>Worked example</b> (Main, answer (b), with the matrix reconstructed):`,
        steps: [
          `${A} = ${pm(['3', '1'], ['−1', '3'])}; ${sq(A)} = ${pm(['8', '6'], ['−6', '8'])},<br>${sq(A)} − 6${A} + 10${II} = ${O}.`,
          `Left-multiply by ${AINV}:<br>${A} − 6${II} + 10${AINV} = ${O}<br>10${AINV} = 6${II} − ${A}.`,
          `Check against the direct inverse (det${NB}${A} = 10, adj${NB}${A} = ${pm(['3', '−1'], ['1', '3'])}): indeed<br>10${AINV} = ${pm(['3', '−1'], ['1', '3'])} = 6${II} − ${A}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 6: Matrix equation as a linear system',
        q: `<b>Shape:</b> “[${I('u')}<sub>${I('ij')}</sub>] times a column of unknowns equals a given column; find a combination of the unknowns.” <b>Method:</b> Do not touch matrix machinery: write the two or three scalar rows and solve.`,
        steps: [
          `A Main Online item reduces to 4${p} + 2${q} = 0, 3${p} + 3${q} + 2${r} = 3, ${p} + 3${q} + 2${r} = 1, yielding ${p} = 1, ${q} = −2, ${r} = 3 and 2${p} + ${q} − ${r} = −3. The trap is time: students who start computing matrix products burn minutes on a two-minute problem.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'The traps' },
      { t: 'p', html: 'JEE punishes seven specific reflexes:' },
      {
        t: 'mistakes',
        items: [
          `<b>Assuming commutativity.</b> Distractors are engineered around (${A} + ${B})<sup>2</sup> = ${sq(A)} + 2${I('AB')} + ${sq(B)} and (${I('AB')})${INV} = ${AINV}${B}${INV}. Every expansion must keep both cross terms alive.`,
          `<b>Misreading tr(${AAT}).</b> It is the sum of all nine squared entries, not (tr${NB}${A})<sup>2</sup> and not a count of non-zero entries. In the ${SET101} problem, forgetting that each non-zero cell has two sign choices divides the correct count by 8 (84 instead of 672).`,
          `<b>Dropping the reversal.</b> (${I('AB')})${T} = ${BT}${AT} and (${I('AB')})${INV} = ${B}${INV}${AINV}. In flip-classification questions, writing the non-reversed order flips your final answer: exactly the wrong/right option pair offered.`,
          '<b>Ignoring the forced zero diagonal of a skew matrix.</b> Several options die instantly on this fact alone; students who don’t use it do five minutes of algebra.',
          `<b>Parity blindness for powers of skew matrices.</b> Odd powers stay skew, even powers turn symmetric. ${pw(X, '44')} + ${pw(Y, '44')} versus ${pw(X, '23')} + ${pw(Y, '23')} in Adv is purely this distinction dressed up.`,
          `<b>Believing ${I('AB')} = ${O} forces a zero factor</b>, or that proportional rows can still be inverted. Singular matrices are everywhere in JEE distractors.`,
          `<b>Brute-forcing powers.</b> The moment a power exceeds roughly 3, a structure (${sq(A)} = ${II}, nilpotence, ${pw(om, '3')} = 1, rotation angle) is planted. Computing ${pw(A, '50')} entry-by-entry is the intended wrong path.`,
        ],
      },

      { t: 'part', title: 'Graded practice set' },
      {
        t: 'practice',
        items: [
          {
            q: '(warm-up) A matrix has 36 elements. How many possible orders can it have?',
            a: 'Orders correspond to divisor pairs of 36 = 2<sup>2</sup> · 3<sup>2</sup>:<br>1 × 36, 2 × 18, 3 × 12, 4 × 9, 6 × 6,<br>36 × 1, 18 × 2, 12 × 3, 9 × 4,<br>i.e. (2 + 1)(2 + 1) = 9 orders.',
          },
          {
            q: `Let ${A} = ${pm(['1', '1'], ['0', '1'])}. Find ${a}<sub>12</sub> of ${pw(A, '10')}.`,
            a: `${A} = ${II} + ${N} with ${N} = ${pm(['0', '1'], ['0', '0'])}, ${sq(N)} = ${O}, so ${pw(A, '10')} = ${II} + 10${N} and ${a}<sub>12</sub> = 10.`,
          },
          {
            q: `${A} = ${pm(['1', '2'], ['2', '4'])}. Find ${pw(A, '5')}.`,
            a: `${sq(A)} = ${pm(['5', '10'], ['10', '20'])} = 5${A}, so by induction ${pw(A, n)} = 5<sup>${n}−1</sup>${A}. Hence<br>${pw(A, '5')} = 625${NB}${A} = ${pm(['625', '1250'], ['1250', '2500'])}.`,
          },
          {
            q: `${A} and ${B} are symmetric. Show ${I('BAB')} is symmetric.`,
            a: `(${I('BAB')})${T} = ${BT}${AT}${BT} = ${I('BAB')},<br>using the reversal law twice. Done: no entries ever needed.`,
          },
          {
            q: `How many 3 × 3 matrices with entries from ${SET101} satisfy tr(${AAT}) = 2?`,
            a: `tr(${AAT}) = ∑${NB}${sq(a)}<sub>${I('ij')}</sub>, and squares here are 0 or 1, so exactly two cells are non-zero. Choose them in ${bn('9', '2')} = 36 ways and sign them in 2<sup>2</sup> = 4 ways:<br>36 × 4 = 144.`,
          },
          {
            q: `${P} is a square matrix with ${P}${T} = −2${P} + ${II}. Compute ${P}.`,
            a: `Transpose the relation: ${P} = −2${P}${T} + ${II}. Substitute ${P}${T} = −2${P} + ${II}:<br>${P} = −2(−2${P} + ${II}) + ${II}<br>${P} = 4${P} − ${II}<br>3${P} = ${II},<br>so ${P} = ${fr(II, '3')}. (Same skeleton as a JEE question, where the answer was ${I('PX')} = −${X}.)`,
          },
          {
            q: `Solve for real ${x}, ${y}, ${z}:<br>${pm(['1', '1', '1'], ['3', '0', '1'], ['1', '−1', '0'])}${pm([x], [y], [z])} = ${pm(['6'], ['7'], ['0'])},<br>then find ${x} + ${y} − ${z}.`,
            a: `Row 3 gives ${x} = ${y}. Then rows become 2${x} + ${z} = 6 and 3${x} + ${z} = 7; subtracting, ${x} = 1, so ${y} = 1, ${z} = 4, and<br>${x} + ${y} − ${z} = −2.`,
          },
          {
            q: `Count the real matrices ${A} = ${pm([x, '2'], ['2', y])} with ${AAT} = 13${I2}.`,
            a: `${AAT} = ${pm([`${sq(x)} + 4`, `2(${x} + ${y})`], [`2(${x} + ${y})`, `${sq(y)} + 4`])} = 13${I2},<br>so ${x} = ±3, ${y} = ±3, and ${x} + ${y} = 0 forces ${y} = −${x}. Exactly <b>two</b> matrices.`,
          },
          {
            q: `${A} = ${R}(${th}) = ${rot(th)} with ${th} = ${fr('π', '9')}. Find the least positive ${n} with ${pw(A, n)} = ${II}.`,
            a: `${pw(A, n)} = ${R}(${n}${th}), and ${R}(${I('φ')}) = ${II} iff ${I('φ')} ≡ 0 (mod 2π):<br>${fr(`${n}π`, '9')} = 2${k}π ⇒ ${n} = 18${k},<br>so the least positive ${n} is <b>18</b>.`,
          },
          {
            q: `${A} = ${pm(['2', '1'], ['−1', '2'])}. Using a polynomial relation, express 5${AINV} without computing a determinant.`,
            a: `${sq(A)} = ${pm(['3', '4'], ['−4', '3'])}, and<br>${sq(A)} − 4${A} + 5${II}<br>= ${pm(['3 − 8 + 5', '4 − 4'], ['−4 + 4', '3 − 8 + 5'])} = ${O}.<br>Multiply by ${AINV}: ${A} − 4${II} + 5${AINV} = ${O}, hence<br>5${AINV} = 4${II} − ${A} = ${pm(['2', '−1'], ['1', '2'])}.<br>(Check: det${NB}${A} = 5 and the adjugate agrees.)`,
          },
          {
            q: `${X} is skew-symmetric and ${Z} is symmetric (same order). Determine the nature of ${I('ZX')} − ${I('XZ')}.`,
            a: `(${I('ZX')} − ${I('XZ')})${T} = (${I('ZX')})${T} − (${I('XZ')})${T}<br>= ${X}${T}${Z}${T} − ${Z}${T}${X}${T}<br>= (−${X})${Z} − ${Z}(−${X})<br>= ${I('ZX')} − ${I('XZ')},<br>so ${I('ZX')} − ${I('XZ')} is <b>symmetric</b>: the commutator of a symmetric and a skew matrix is symmetric, a fact worth memorising alongside its cousins.`,
          },
          {
            q: `(capstone, Adv style) Let ${N} = ${pm(['0', '1', '2'], ['0', '0', '1'], ['0', '0', '0'])} and ${P} = ${II} + ${N}. If ${Q} = ${pw(P, '50')} − ${II}, find the sum of all entries of ${Q}.`,
            a: `First map the nilpotence:<br>${sq(N)} = ${pm(['0', '0', '1'], ['0', '0', '0'], ['0', '0', '0'])}, ${pw(N, '3')} = ${O}.<br>So the binomial expansion truncates:<br>${Q} = ${pw(P, '50')} − ${II} = 50${N} + ${bn('50', '2')}${sq(N)}.<br>Sum of entries of ${N} is 1 + 2 + 1 = 4; sum of entries of ${sq(N)} is 1. Therefore<br>50 × 4 + 1225 × 1 = 1425.<br>One glance at ${pw(N, '3')} = ${O} replaces forty-nine matrix multiplications: that is the entire skill being tested.`,
          },
        ],
      },
    ],
  },
];
