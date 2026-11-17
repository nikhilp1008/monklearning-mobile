/**
 * KEY POINTS for Mathematics Class 12, Chapter 2 (Inverse Trigonometric
 * Functions).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–04 each have three or more Remember points (Topic 01, the
 * branches, the checks and folding, and Topic 04, graphs, triangles,
 * composites, substitutions and conversions, have five), at least one of
 * each other kind and one Exam shortcut; Additional topics A–E have two
 * Remember points and one of each other kind; Additional P, the past-paper
 * analysis, has five points (three archetypes as Remember and Exam
 * shortcuts, two traps): 60 points in all. Memory lines are a fifth, short
 * section of their own, read rather than tested: the first two of each topic.
 *
 * `topic`: Topics 01–04 are 0–3 (the chapter's four numbered parts);
 * Additional topics A–E are 4–8 (Addenda A–E) and Additional P is 9
 * (Addendum P, What JEE Actually Asks). No point refers to another topic by
 * number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic's key
 * definitions, identities, derivations and its Cheat sheet. Common mistakes:
 * its Common student pitfalls and its MCQ traps (A–E, which print neither:
 * the extraneous roots, lost roots and over-quoted identities their worked
 * examples and practice answers warn about; P: its traps). Exam shortcuts:
 * its Pro-Tip, Speed Trap and worked examples. `say`: the book's own memory
 * aids, word for word without their quotation marks and the gloss after
 * them ("branch shapes", "the deleted points", …): Topics 01–04 print three
 * each, all twelve here, eight of them shown as memory lines. A–E and P
 * print no aids, so each has two of the book's own one-line sentences (A:
 * "Narrow the domain first." and "An unverified root in this topic is not a
 * risk; it is usually a planted trap."; B: "Sin and cos cannot vanish
 * together.", cut from its note and capitalised, and "Note the direction of
 * travel: the angle condition implies the algebraic relation."; C: "Do not
 * manipulate; tabulate." and "Read the table as a comparison of two
 * functions of x.", capitalised; D: "Bound the search space before
 * sweeping." and "Reject any piecewise candidate that lands outside the
 * piece that produced it.", from its mark-winning habits; E: "Reduce the
 * expression to a single inverse function." and "The domain gate comes
 * first.", cut from their sentences; P: "Compute xy before touching the
 * formula." and "Check the branch first."): twenty-four in all, twenty of
 * them memory lines.
 *
 * Where the book over-states a rule, the point states it only with its true
 * condition: "each inverse function is increasing or decreasing on its whole
 * domain" (sec⁻¹ and cosec⁻¹ are monotonic only on each of their two
 * pieces: sec⁻¹(−1) = π > 0 = sec⁻¹ 1); and the conversion formulas, which the
 * book prints without the "x ∈ (0, 1)" that the sentence before them gives
 * (the card and the point both carry it). The exam-frequency claims, the
 * past-paper volume and distribution table, the NCERT exercise numbers and
 * convention remarks, the CBSE and syllabus remarks, and the closing "What
 * the chapter text under-serves" are left out; the cot⁻¹ convention point
 * names the branch (0, π) instead of the textbook it comes from.
 *
 * Markup is the chapter's own: sin<sup>−1</sup> with a no-break space before
 * its argument, <i> for variables, π upright, intervals with their comma
 * glued, |x| with a word joiner, − (U+2212) for minus. Every fraction is
 * stacked, <frac><num>…</num><den>…</den></frac>, and never a fraction
 * inside a numerator (a half-angle inside one is said in words); no em
 * dashes; and always a space after "<", so it is never read as a tag.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (t: string, b: string) => `<frac><num>${t}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const NB = ' ';
const WJ = '⁠';
const x = I('x');
const y = I('y');
const z = I('z');
const a = I('a');
const b = I('b');
const c = I('c');
const n = I('n');
const t = I('t');
const N = I('N');
const th = I('θ');
const al = I('α');
const be = I('β');
const XY = I('xy');
const XYZ = I('xyz');
const sq = (s: string) => `${s}<sup>2</sup>`;
const X2 = sq(x);
const ABSX = `|${WJ}${x}|`;
const inv = (fn: string) => `${fn}<sup>−1</sup>`;
const SIN = inv('sin');
const COS = inv('cos');
const TAN = inv('tan');
const COT = inv('cot');
const SEC = inv('sec');
const CSC = inv('cosec');
/** An inverse function and its argument, glued: sin⁻¹ x. */
const of = (F: string, arg: string) => `${F}${NB}${arg}`;
/** An inverse function of a bracketed argument: sin⁻¹(…). */
const ofp = (F: string, arg: string) => `${F}(${arg})`;
/** A trig function and its argument, glued: sin θ. */
const tf = (fn: string, arg: string) => `${fn}${NB}${arg}`;
const P2 = fr('π', '2');
const P3 = fr('π', '3');
const P4 = fr('π', '4');
const P6 = fr('π', '6');
const P2_3 = fr('2π', '3');
const P3_2 = fr('3π', '2');
const P3_4 = fr('3π', '4');
const P5_6 = fr('5π', '6');
const P7_6 = fr('7π', '6');
const P4_3 = fr('4π', '3');
const H = fr('1', '2');
const R3_2 = fr('√3', '2');
const INVX = fr('1', x);
const iv = (lo: string, hi: string, o = '[', cl = ']') => `${o}${lo},${NB}${hi}${cl}`;
const SINB = iv(`−${P2}`, P2);
const TANB = iv(`−${P2}`, P2, '(', ')');
const COSB = iv('0', 'π');
const COTB = iv('0', 'π', '(', ')');
const M11 = iv('−1', '1');
const R1MX2 = `√(1 − ${X2})`;
const R1PX2 = `√(1 + ${X2})`;
const RX2M1 = `√(${X2} − 1)`;
const FSUM = fr(`${x} + ${y}`, `1 − ${XY}`);
const FDIF = fr(`${x} − ${y}`, `1 + ${XY}`);
const F2X_M = fr(`2${x}`, `1 − ${X2}`);
const F2X_P = fr(`2${x}`, `1 + ${X2}`);
const F1MX_P = fr(`1 − ${X2}`, `1 + ${X2}`);
const TATB = `${of(TAN, x)} + ${of(TAN, y)}`;
const SUM3 = `${of(TAN, x)} + ${of(TAN, y)} + ${of(TAN, z)}`;
const NSQ = `1 + ${n} + ${sq(n)}`;

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Principal Value Branches ──
  // pp. 127–128, 130
  {
    topic: 0,
    kind: 'remember',
    q: 'Why does inverting sine need a principal value branch?',
    a: `Sine is many-to-one: ${P6}, ${fr('5π', '6')}, ${fr('13π', '6')}, … all have sine ${H}, and an inverse must return exactly one answer. So sine is restricted to a stretch where it is one-to-one and still sweeps its whole range, ${SINB}, and ${SIN} returns the one angle in that branch`,
    why: `The output of an inverse trig function is an angle trapped in its branch: ${ofp(SIN, 'something')} = ${P2_3} is already an error.`,
    say: 'Sin & tan hug zero; cos & cot climb to pi.',
  },
  // pp. 128–129, 135
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the domains and principal value branches of the six inverse functions?',
    a: `${SIN}: ${M11} → ${SINB}. ${COS}: ${M11} → ${COSB}. ${TAN}: ℝ → ${TANB}. ${COT}: ℝ → ${COTB}. ${SEC}: ${ABSX} ≥ 1 → ${COSB} − {${P2}}. ${CSC}: ${ABSX} ≥ 1 → ${SINB} − {0}`,
    why: `tan’s branch is open because tan is undefined at ±${P2}; cot’s because cot is undefined at 0 and π.`,
    say: 'Sec drops half-pi, cosec drops zero.',
  },
  // pp. 129–130
  {
    topic: 0,
    kind: 'remember',
    q: `Why these branches, and why do ${SEC} and ${CSC} each delete a point?`,
    a: `Each branch is the origin-nearest stretch on which the function is strictly monotonic and sweeps its whole range: centred on 0 for the odd pair sin, tan; from 0 to π for cos, cot. ${SEC} borrows cosine’s ${COSB} and deletes ${P2}, where cos = 0 and sec is undefined; ${CSC} borrows sine’s branch and deletes 0. Their domains exclude (−1,${NB}1): a reciprocal of sin or cos never lies strictly between −1 and 1`,
    why: `${ofp(SEC, H)} does not exist: |${WJ}${tf('sec', th)}| ≥ 1 always.`,
    say: null,
  },
  // pp. 129, 135
  {
    topic: 0,
    kind: 'remember',
    q: 'What two free checks does every inverse-trig answer get?',
    a: `A domain check before you start: is ${x} a legal input? ${of(SIN, '2')}, ${ofp(COS, '−3')} and ${of(SEC, '0.5')} do not exist. A branch check after you finish: is the output angle in the branch? A negative ${COS} value, or a ${SIN} value above ${P2}, is an error, guaranteed`,
    why: `Among −2, −${H}, 0, ${fr('3', '4')} and 3, ${SEC} is undefined at −${H}, 0 and ${fr('3', '4')}: three values.`,
    say: null,
  },
  // pp. 130–131, 135
  {
    topic: 0,
    kind: 'remember',
    q: `When is ${ofp(SIN, tf('sin', th))} = ${th}, and what do you do otherwise?`,
    a: `Only when ${th} already lies in the branch ${SINB}. Otherwise read the outer branch, replace ${th} by an equivalent angle inside it with a value-preserving identity (${tf('sin', `(π − ${th})`)} = ${tf('sin', th)}, ${tf('cos', `(2π − ${th})`)} = ${tf('cos', th)}, ${tf('tan', `(${th} ± π)`)} = ${tf('tan', th)}), and the inverse returns that angle`,
    why: `${ofp(COS, tf('cos', P7_6))} = ${P5_6}: ${tf('cos', P7_6)} = ${tf('cos', `(2π − ${P7_6})`)} = ${tf('cos', P5_6)}, and ${P5_6} ∈ ${COSB}.`,
    say: 'Check the cage, fold the angle.',
  },
  // pp. 128, 135
  {
    topic: 0,
    kind: 'mixup',
    q: `Is ${of(SIN, x)} the same as ${fr('1', tf('sin', x))}?`,
    a: `No: ${of(SIN, x)} is an angle, the inverse function; ${fr('1', tf('sin', x))} = ${tf('cosec', x)} is a ratio, written (${tf('sin', x)})<sup>−1</sup>. The −1 is an inverse-function marker, not an exponent`,
    why: `Principal values are stated in radians in higher exams: ${P6}, not 30°, unless the question asks otherwise.`,
    say: null,
  },
  // pp. 134–135
  {
    topic: 0,
    kind: 'mistake',
    q: `Is ${ofp(SIN, tf('sin', P2_3))} = ${P2_3}?`,
    a: `No: ${P3}. ${P2_3} lies outside ${SINB}, so fold with ${tf('sin', `(π − ${th})`)} = ${tf('sin', th)}. −${P3} folds with the wrong sign (${th} − π); ${P6} confuses ${tf('sin', P2_3)} = ${R3_2} with ${H}`,
    why: `Likewise the branch of ${COS} is closed, ${COSB}: (0,${NB}π) wrongly drops ${ofp(COS, '±1')} = 0 and π.`,
    say: null,
  },
  // pp. 132–133, 135
  {
    topic: 0,
    kind: 'shortcut',
    q: `What is the two-second ritual for any ${inv(I('f'))}(${I('f')}(${th})) question?`,
    a: `Write the branch, ask “is ${th} in it?”, and if not, fold; then branch-check the final value. It turns the single most common trap of the chapter into a sure mark`,
    why: `${ofp(COS, `cos(−680°)`)}: cos is even and 680° = 720° − 40°, so the value is 40° = ${fr('2π', '9')}; ${ofp(TAN, tf('tan', P3_4))} = −${P4}.`,
    say: null,
  },

  // ── Topic 02 · Self-Map Identities ──
  // pp. 138–139, 141, 146
  {
    topic: 1,
    kind: 'remember',
    q: `What is ${ofp(inv(I('f')), `−${x}`)} for each of the six inverse functions?`,
    a: `Split by branch shape. Zero-centred branches are odd: ${ofp(SIN, `−${x}`)} = −${of(SIN, x)}, ${ofp(TAN, `−${x}`)} = −${of(TAN, x)}, ${ofp(CSC, `−${x}`)} = −${of(CSC, x)}. Branches on ${COSB} reflect through ${P2}: ${ofp(COS, `−${x}`)} = π − ${of(COS, x)}, ${ofp(SEC, `−${x}`)} = π − ${of(SEC, x)}, ${ofp(COT, `−${x}`)} = π − ${of(COT, x)}`,
    why: `A ${COSB} cage can never output a negative angle, so it cannot be odd: ${ofp(COS, `−${R3_2}`)} = π − ${P6} = ${P5_6}.`,
    say: 'Sin, tan, cosec flip the sign; cos, sec, cot reflect to π minus.',
  },
  // pp. 139, 141, 146
  {
    topic: 1,
    kind: 'remember',
    q: `Which pairs of inverse functions add to ${P2}, and for which ${x}?`,
    a: `${of(SIN, x)} + ${of(COS, x)} = ${P2} for ${x} ∈ ${M11}; ${of(TAN, x)} + ${of(COT, x)} = ${P2} for every real ${x}; ${of(CSC, x)} + ${of(SEC, x)} = ${P2} for ${ABSX} ≥ 1. Proof: with ${y} = ${of(SIN, x)}, ${tf('cos', `(${P2} − ${y})`)} = ${tf('sin', y)} = ${x} and ${P2} − ${y} ∈ ${COSB}. The sign of ${x} does not matter`,
    why: `${ofp(SIN, `−${R3_2}`)} + ${ofp(COS, `−${R3_2}`)} = −${P3} + ${P5_6} = ${P2}.`,
    say: 'Co-pair adds to ninety.',
  },
  // pp. 139, 141, 146
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the reciprocal identities, and their conditions?',
    a: `${of(SIN, INVX)} = ${of(CSC, x)} and ${of(COS, INVX)} = ${of(SEC, x)} for ${ABSX} ≥ 1, so that ${INVX} lies in ${M11}. ${of(TAN, INVX)} = ${of(COT, x)} only for ${x} > 0; for ${x} < 0 it is ${of(COT, x)} − π, because ${of(COT, x)} then lies in (${P2},${NB}π), outside the branch of ${TAN}`,
    why: `So ${of(TAN, x)} + ${of(TAN, INVX)} is ${P2} for ${x} > 0 and −${P2} for ${x} < 0.`,
    say: 'Reciprocal only goes co-, and tan↔cot only when x is positive.',
  },
  // p. 144
  {
    topic: 1,
    kind: 'remember',
    q: `If ${of(SIN, x)} + ${of(SIN, y)} = ${P2}, how are ${x} and ${y} related?`,
    a: `${of(SIN, y)} = ${P2} − ${of(SIN, x)} = ${of(COS, x)}, so ${x} = ${tf('cos', `(${of(SIN, y)})`)} = √(1 − ${sq(y)}): ${X2} + ${sq(y)} = 1, with ${x} ≥ 0 and ${y} ≥ 0`,
    why: `Similarly ${ofp(SEC, `−${x}`)} + ${ofp(CSC, `−${x}`)} = (π − ${of(SEC, x)}) − ${of(CSC, x)} = π − ${P2} = ${P2} for ${ABSX} ≥ 1.`,
    say: null,
  },
  // pp. 142–143, 145
  {
    topic: 1,
    kind: 'mixup',
    q: `Is ${ofp(COT, '−√3')} = −${P6}?`,
    a: `No: ${P5_6}. ${COT} is a π− function, so ${ofp(COT, '−√3')} = π − ${of(COT, '√3')} = π − ${P6}. −${P6} is the odd-function reflex; ${P6} ignores the sign`,
    why: `Hence ${of(TAN, '√3')} − ${ofp(COT, '−√3')} = ${P3} − ${P5_6} = −${P2}; the odd reflex gives ${P2}.`,
    say: null,
  },
  // pp. 145–146
  {
    topic: 1,
    kind: 'mistake',
    q: `For ${x} < 0, is ${of(TAN, INVX)} = ${of(COT, x)}?`,
    a: `No: ${of(COT, x)} − π. The identity without the −π holds only for ${x} > 0, the headline trap of this topic. The other listed slips: “all six are odd” (only ${SIN}, ${TAN}, ${CSC} are), quoting an identity outside its domain gate, and “correcting” ${of(SIN, x)} + ${of(COS, x)} = ${P2} for negative ${x}`,
    why: `Of ${COS}, ${COT}, ${TAN} and ${SEC}, only ${TAN} satisfies ${ofp(inv(I('f')), `−${x}`)} = −${ofp(inv(I('f')), x)}.`,
    say: null,
  },
  // pp. 144, 146
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A negative argument inside an inverse function: what is the reflex?',
    a: `If the function is cos, sec or cot, write “π −” first and evaluate second; if it is sin, tan or cosec, pull the minus sign out. Then branch-check the value`,
    why: `${ofp(SEC, '−2')} = π − ${P3} = ${P2_3}, while ${ofp(CSC, '−2')} = −${P6}.`,
    say: null,
  },

  // ── Topic 03 · Combination Identities ──
  // pp. 148, 150–151, 154
  {
    topic: 2,
    kind: 'remember',
    q: `${TATB}: what single inverse function, and when?`,
    a: `${ofp(TAN, FSUM)} if ${XY} < 1; π + that if ${XY} > 1 with ${x}, ${y} > 0; −π + that if ${XY} > 1 with ${x}, ${y} < 0. The ±π is the branch correction: the sum of the two angles ranges over (−π,${NB}π), wider than the cage ${TANB}, and leaves it exactly when ${XY} > 1`,
    why: `${of(TAN, '2')} + ${of(TAN, '3')} = π + ${ofp(TAN, '−1')} = ${P3_4}: each term lies between ${P4} and ${P2}, so the sum must exceed ${P2}.`,
    say: `${XY} over one ⇒ add a π (subtract it when both are negative).`,
  },
  // pp. 150, 154
  {
    topic: 2,
    kind: 'remember',
    q: `What is ${of(TAN, x)} − ${of(TAN, y)}?`,
    a: `${ofp(TAN, FDIF)} for ${XY} > −1: a plus in the denominator, the opposite of the sum formula`,
    why: `${fr('1', NSQ)} = ${fr(`(${n} + 1) − ${n}`, `1 + ${n}(${n} + 1)`)}, so its arctangent is ${ofp(TAN, `${n} + 1`)} − ${of(TAN, n)}.`,
    say: 'Sum over one-minus, difference over one-plus.',
  },
  // pp. 150–151, 154
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the double- and triple-angle forms, with their windows?',
    a: `2${NB}${of(TAN, x)} = ${ofp(TAN, F2X_M)} for −1 < ${x} < 1, = ${ofp(SIN, F2X_P)} for −1 ≤ ${x} ≤ 1, = ${ofp(COS, F1MX_P)} for ${x} ≥ 0. 2${NB}${of(SIN, x)} = ${ofp(SIN, `2${x}${R1MX2}`)} for ${ABSX} ≤ ${fr('1', '√2')}; 2${NB}${of(COS, x)} = ${ofp(COS, `2${X2} − 1`)} for 0 ≤ ${x} ≤ 1. 3${NB}${of(SIN, x)} = ${ofp(SIN, `3${x} − 4${x}<sup>3</sup>`)} for ${ABSX} ≤ ${H}; 3${NB}${of(COS, x)} = ${ofp(COS, `4${x}<sup>3</sup> − 3${x}`)} for ${H} ≤ ${x} ≤ 1`,
    why: `Each window keeps the doubled or tripled angle in the outer cage: 3${th} ∈ ${SINB} needs ${th} ∈ ${iv(`−${P6}`, P6)}, i.e. ${x} ∈ ${iv(`−${H}`, H)}.`,
    say: 'Double the angle, halve your confidence: check the domain.',
  },
  // p. 150
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the sums of two arcsines and of two arccosines?',
    a: `${of(SIN, x)} + ${of(SIN, y)} = ${ofp(SIN, `${x}√(1 − ${sq(y)}) + ${y}${R1MX2}`)} if ${X2} + ${sq(y)} ≤ 1 (or ${XY} < 0); ${of(COS, x)} + ${of(COS, y)} = ${ofp(COS, `${XY} − ${R1MX2}√(1 − ${sq(y)})`)} if ${x} + ${y} ≥ 0. When the condition fails, the cage forces a reflection: π − ${SIN}(…) for ${x}, ${y} > 0, −π − ${SIN}(…) for ${x}, ${y} < 0, and 2π − ${COS}(…) for ${x} + ${y} < 0`,
    why: 'After combining, the result must lie in the combined function’s branch: an obtuse sum written as a negative arctangent has dropped a π.',
    say: null,
  },
  // pp. 153–154
  {
    topic: 2,
    kind: 'mixup',
    q: `2${NB}${of(TAN, x)} as ${ofp(COS, F1MX_P)} and as ${ofp(SIN, F2X_P)}: the same window?`,
    a: `No. The ${COS} form needs ${x} ≥ 0 (the doubled angle in ${COSB}); the ${SIN} form needs ${ABSX} ≤ 1 (the doubled angle in ${SINB}); the ${TAN} form needs ${ABSX} < 1`,
    why: `2${NB}${of(TAN, fr('1', '3'))} = ${of(TAN, fr('3', '4'))}, since ${fr('1', '3')} < 1; ${of(SIN, fr('4', '5'))} is a distractor built from a different value.`,
    say: null,
  },
  // pp. 153–154
  {
    topic: 2,
    kind: 'mistake',
    q: `What is ${of(TAN, '3')} + ${of(TAN, H)}?`,
    a: `π − ${of(TAN, '7')}, about 98.1°: ${XY} = ${fr('3', '2')} > 1 with both positive, so π + ${ofp(TAN, '−7')}. Skipping the π gives ${ofp(TAN, '−7')}. The other listed slips: quoting multiple-angle forms outside their windows, the sign in the difference formula, and a “difference” that does not telescope`,
    why: `Compute ${XY} first: it decides at once between the clean case and the ±π case.`,
    say: null,
  },
  // pp. 151–154
  {
    topic: 2,
    kind: 'shortcut',
    q: 'How do you sum a series of arctangents?',
    a: `Rewrite the general term as ${of(TAN, a)} − ${of(TAN, b)}, spotting the shape ${fr(`${a} − ${b}`, `1 + ${I('ab')}`)} inside its denominator, and let consecutive terms cancel; read the limit off the end terms`,
    why: `∑${NB}${ofp(TAN, fr('1', NSQ))}: the partial sums are ${ofp(TAN, `${N} + 1`)} − ${of(TAN, '1')} → ${P2} − ${P4} = ${P4}.`,
    say: null,
  },

  // ── Topic 04 · Graphs, Composite Evaluation & Simplification ──
  // pp. 157, 159, 163
  {
    topic: 3,
    kind: 'remember',
    q: 'How is the graph of an inverse trig function obtained, and how do the six behave?',
    a: `Reflect the parent graph on its branch in ${y} = ${x}: domain and range swap. Increasing: ${SIN}, ${TAN}, and ${SEC} on each piece; decreasing: ${COS}, ${COT}, and ${CSC} on each piece. Odd: ${SIN}, ${TAN} and ${CSC}. Asymptotes: ${y} = ±${P2} for ${TAN}; ${y} = 0 and ${y} = π for ${COT}; ${y} = ${P2} for ${SEC}; ${y} = 0 for ${CSC}`,
    why: `${COS} falls from (−1,${NB}π) to (1,${NB}0), and it is not odd.`,
    say: 'Inverse = mirror across y = x.',
  },
  // pp. 157, 160, 163
  {
    topic: 3,
    kind: 'remember',
    q: `How do you evaluate ${tf('cos', `(${of(SIN, x)})`)} and similar composites?`,
    a: `Name the inner angle: ${th} = ${of(SIN, x)}, so ${tf('sin', th)} = ${fr(x, '1')}. Draw a right triangle with opposite ${x} and hypotenuse 1, so the adjacent side is ${R1MX2}, and read the outer ratio: ${tf('cos', th)} = ${R1MX2}. Mind the sign from the branch`,
    why: `${tf('cos', `(${of(SIN, fr('3', '5'))})`)} = ${fr('4', '5')}: opposite 3, hypotenuse 5, adjacent 4.`,
    say: 'Draw the triangle, read the ratio.',
  },
  // pp. 159, 163
  {
    topic: 3,
    kind: 'remember',
    q: 'What are the standard composite values?',
    a: `${tf('sin', `(${of(COS, x)})`)} = ${tf('cos', `(${of(SIN, x)})`)} = ${R1MX2}; ${tf('tan', `(${of(SIN, x)})`)} = ${fr(x, R1MX2)}; ${tf('tan', `(${of(COS, x)})`)} = ${fr(R1MX2, x)}; ${tf('sin', `(${of(TAN, x)})`)} = ${fr(x, R1PX2)}; ${tf('cos', `(${of(TAN, x)})`)} = ${fr('1', R1PX2)}; ${tf('sec', `(${of(TAN, x)})`)} = ${R1PX2}; ${tf('tan', `(${of(SEC, x)})`)} = ${RX2M1} for ${x} ≥ 1 and −${RX2M1} for ${x} ≤ −1`,
    why: `${tf('sec', `(${of(TAN, fr('3', '4'))})`)} = ${fr('5', '4')}: opposite 3, adjacent 4, hypotenuse 5.`,
    say: null,
  },
  // pp. 157, 159–160, 163
  {
    topic: 3,
    kind: 'remember',
    q: 'Which substitution does each radical call for?',
    a: `${R1MX2}: ${x} = ${tf('sin', th)} or ${tf('cos', th)}, since 1 − sin<sup>2</sup>${NB}${th} = cos<sup>2</sup>${NB}${th}. ${R1PX2}: ${x} = ${tf('tan', th)}, since 1 + tan<sup>2</sup>${NB}${th} = sec<sup>2</sup>${NB}${th}. ${RX2M1}: ${x} = ${tf('sec', th)}, since sec<sup>2</sup>${NB}${th} − 1 = tan<sup>2</sup>${NB}${th}. Simplify until the inverse function cancels, then convert back`,
    why: `${ofp(TAN, fr(`${R1PX2} − 1`, x))}: with ${x} = ${tf('tan', th)} the argument is ${fr(`1 − ${tf('cos', th)}`, tf('sin', th))} = ${tf('tan', fr(th, '2'))}, so the value is ${H}${NB}${of(TAN, x)}.`,
    say: 'Root one-minus ⇒ sine; root one-plus ⇒ tan; root minus-one ⇒ sec.',
  },
  // pp. 159, 161
  {
    topic: 3,
    kind: 'remember',
    q: `For which ${x} do the conversion formulas hold as printed?`,
    a: `For ${x} ∈ (0,${NB}1): ${of(SIN, x)} = ${of(COS, R1MX2)} = ${ofp(TAN, fr(x, R1MX2))} = ${ofp(CSC, INVX)}, and ${of(COS, x)} = ${of(SIN, R1MX2)} = ${ofp(TAN, fr(R1MX2, x))} = ${ofp(SEC, INVX)}; ${of(TAN, x)} = ${ofp(SIN, fr(x, R1PX2))} = ${ofp(COS, fr('1', R1PX2))} for ${x} ≥ 0. Elsewhere, adjust by sign and branch`,
    why: `${of(COS, x)} = ${ofp(TAN, fr(R1MX2, x))} for ${x} ∈ (0,${NB}1], from a triangle with ${tf('cos', th)} = ${fr(x, '1')}.`,
    say: null,
  },
  // pp. 160, 162
  {
    topic: 3,
    kind: 'mixup',
    q: `${tf('cos', `(${of(SIN, x)})`)} and ${tf('tan', `(${of(SIN, x)})`)}: the same reading?`,
    a: `Same triangle, different ratio: ${tf('cos', `(${of(SIN, x)})`)} = ${R1MX2}, ${tf('tan', `(${of(SIN, x)})`)} = ${fr(x, R1MX2)}. Label all three sides before reading. And for ${tf('sin', `(${of(TAN, x)})`)} the hypotenuse is ${R1PX2}: ${fr(x, R1MX2)} there is the ${SIN} triangle, the classic mix-up`,
    why: `${R1PX2} calls for ${x} = ${tf('tan', th)}, not ${tf('sin', th)}: the wrong substitution leaves an unsimplifiable mess.`,
    say: null,
  },
  // p. 162
  {
    topic: 3,
    kind: 'mistake',
    q: `Is ${ofp(SIN, F2X_P)} = 2${NB}${of(TAN, x)} for every ${x}?`,
    a: `No: only for ${ABSX} ≤ 1; for ${x} > 1 it is π − 2${NB}${of(TAN, x)}, and for ${x} < −1 it is −π − 2${NB}${of(TAN, x)}. And the triangle gives magnitudes: for negative ${x}, or angles in ${iv(P2, 'π')}, restore the sign from the range`,
    why: `The doubled angle must stay in the ${SIN} branch, and 2${NB}${of(TAN, x)} passes ${P2} once ${x} > 1.`,
    say: null,
  },
  // pp. 161, 163
  {
    topic: 3,
    kind: 'shortcut',
    q: `${ofp(TAN, fr(tf('cos', x), `1 + ${tf('sin', x)}`))} for ${x} ∈ ${TANB}: the fast simplification?`,
    a: `${P4} − ${fr(x, '2')}. 1 + ${tf('sin', x)} = (${tf('cos', fr(x, '2'))} + ${tf('sin', fr(x, '2'))})<sup>2</sup> and ${tf('cos', x)} = (${tf('cos', fr(x, '2'))} − ${tf('sin', fr(x, '2'))})(${tf('cos', fr(x, '2'))} + ${tf('sin', fr(x, '2'))}); cancel, divide top and bottom by ${tf('cos', fr(x, '2'))}, and the argument is ${tf('tan', `(${P4} − ${fr(x, '2')})`)}`,
    why: `Likewise ${ofp(TAN, `√(${fr(`1 − ${tf('cos', x)}`, `1 + ${tf('cos', x)}`)})`)} = ${fr(x, '2')} for ${x} ∈ (0,${NB}π).`,
    say: null,
  },

  // ── Additional A · Solving Inverse Trigonometric Equations ──
  // pp. 165–166
  {
    topic: 4,
    kind: 'remember',
    q: 'What is the route for solving an inverse-trig equation?',
    a: `Narrow the domain first (arguments of ${SIN} and ${COS} in ${M11}, of ${SEC} and ${CSC} with |${WJ}${t}| ≥ 1; ${TAN} and ${COT} accept anything); isolate one inverse term; apply the matching forward function to both sides; solve the algebra completely; verify every candidate in the original equation, domain and branch both`,
    why: 'Taking the cosine of both sides replaces “the angles are equal” by “the angles have equal cosine”, a weaker statement: that is where impostor roots come from.',
    say: 'Narrow the domain first.',
  },
  // pp. 166–167
  {
    topic: 4,
    kind: 'remember',
    q: `Why can ${of(TAN, I('u'))} + ${of(TAN, I('v'))} = ${P4} be solved with the plain addition formula?`,
    a: `${P4} sits inside ${TANB}, and the ±π cases give sums beyond ±${P2}, so any genuine solution has ${I('uv')} < 1. Then ${fr(`${I('u')} + ${I('v')}`, `1 − ${I('uv')}`)} = 1`,
    why: `${ofp(TAN, fr(`${x} − 1`, `${x} − 2`))} + ${ofp(TAN, fr(`${x} + 1`, `${x} + 2`))} = ${P4} gives ${X2} = ${H}, ${x} = ±${fr('1', '√2')}, and ${I('uv')} = ${fr('1', '7')} < 1 confirms both.`,
    say: 'An unverified root in this topic is not a risk; it is usually a planted trap.',
  },
  // p. 165
  {
    topic: 4,
    kind: 'mixup',
    q: `${COT} of a negative number: positive or negative?`,
    a: `Positive on the branch ${COTB}, which this chapter uses. Some preparation sources use ${iv(`−${P2}`, P2, '(', ']')}, under which it comes out negative; any expression with ${COT} of a negative number changes value between the two, so stay with ${COTB} until your paper says otherwise`,
    why: `${ofp(COT, '−√3')} = ${P5_6} on ${COTB}.`,
    say: null,
  },
  // pp. 167–168
  {
    topic: 4,
    kind: 'mistake',
    q: `${of(TAN, x)} + ${of(TAN, `2${x}`)} = ${of(TAN, '3')}: are ${x} = ${H} and ${x} = −1 both roots?`,
    a: `No: only ${H}. At ${x} = −1 both arguments are negative with product 2 > 1, so the true sum is −π + ${of(TAN, '3')}, about −1.89, not ${of(TAN, '3')}: extraneous. Roots can also be lost: in ${of(SIN, x)} + ${ofp(SIN, `1 − ${x}`)} = ${of(COS, x)}, ${x} = 0 dies in a division by ${x} and survives only by direct substitution`,
    why: `That equation’s answer is ${x} = 0 or ${x} = ${H}.`,
    say: null,
  },
  // p. 168
  {
    topic: 4,
    kind: 'shortcut',
    q: `${of(SIN, x)} + ${of(SIN, y)} = ${P2_3} and ${of(COS, x)} − ${of(COS, y)} = ${P3}: the fastest route?`,
    a: `Convert the second with ${of(COS, t)} = ${P2} − ${of(SIN, t)}: it becomes ${of(SIN, y)} − ${of(SIN, x)} = ${P3}. Adding, 2${NB}${of(SIN, y)} = π, so ${y} = 1, and ${of(SIN, x)} = ${P6}, so ${x} = ${H}`,
    why: `Likewise 3${NB}${of(TAN, x)} + ${of(COT, x)} = π becomes 2${NB}${of(TAN, x)} = ${P2}: ${x} = 1.`,
    say: null,
  },

  // ── Additional B · Conditional Identities ──
  // pp. 168–169
  {
    topic: 5,
    kind: 'remember',
    q: `For ${x}, ${y}, ${z} > 0, when does ${SUM3} equal π, and when ${P2}?`,
    a: `π ⟺ ${x} + ${y} + ${z} = ${XYZ}; ${P2} ⟺ ${XY} + ${I('yz')} + ${I('zx')} = 1. With ${I('A')}, ${I('B')}, ${I('C')} the three angles, ${tf('sin', `(${I('A')} + ${I('B')} + ${I('C')})`)} and ${tf('cos', `(${I('A')} + ${I('B')} + ${I('C')})`)} equal ${tf('cos', I('A'))}${NB}${tf('cos', I('B'))}${NB}${tf('cos', I('C'))} times (${x} + ${y} + ${z} − ${XYZ}) and (1 − ${XY} − ${I('yz')} − ${I('zx')}), and every cosine is positive`,
    why: `${of(TAN, '1')} + ${of(TAN, '2')} + ${of(TAN, '3')} = π, since 1 + 2 + 3 = 6 = 1 · 2 · 3.`,
    say: 'Sin and cos cannot vanish together.',
  },
  // pp. 169–170
  {
    topic: 5,
    kind: 'remember',
    q: `Given ${x} + ${y} + ${z} = ${XYZ} with ${x}, ${y}, ${z} > 0, why is the sum of the arctangents exactly π?`,
    a: `Each angle lies in (0,${NB}${P2}), so the sum ${I('S')} lies in (0,${NB}${P3_2}) and the cosines are positive; the identity gives ${tf('sin', I('S'))} = 0, and π is the only zero of sin in (0,${NB}${P3_2})`,
    why: `For ${P2}: ${tf('cos', I('S'))} = 0 with ${tf('sin', I('S'))} ≠ 0 leaves only ${I('S')} = ${P2}; at ${x} = ${y} = ${z} = ${fr('1', '√3')} the sum is three copies of ${P6}.`,
    say: 'Note the direction of travel: the angle condition implies the algebraic relation.',
  },
  // p. 170
  {
    topic: 5,
    kind: 'mixup',
    q: `${of(COS, x)} + ${of(COS, y)} + ${of(COS, z)} = π implies ${X2} + ${sq(y)} + ${sq(z)} + 2${XYZ} = 1. Does the converse hold as stated?`,
    a: `No: the converse needs extra hypotheses and is not claimed; quoting it backwards is a known trap. The forward proof is sign-safe because every angle lies in [0,${NB}π], so all the sines involved are non-negative`,
    why: `From ${I('A')} + ${I('B')} = π − ${I('C')}: ${R1MX2}√(1 − ${sq(y)}) = ${XY} + ${z}; square only the sine equation, ${x}√(1 − ${sq(y)}) + ${y}${R1MX2} = √(1 − ${sq(z)}).`,
    say: null,
  },
  // pp. 170–171
  {
    topic: 5,
    kind: 'mistake',
    q: `${of(SIN, x)} + ${of(COS, y)} = π: is ${X2} + ${sq(y)} = 1 the whole answer?`,
    a: `No: the restrictions are part of it. ${of(COS, y)} ≤ π forces ${of(SIN, x)} ≥ 0, so ${x} ∈ ${iv('0', '1')}, and ${y} = −${R1MX2} ∈ ${iv('−1', '0')}. Likewise ${of(SIN, x)} + ${of(SIN, y)} = ${P2} gives ${X2} + ${sq(y)} = 1 with ${x}, ${y} ≥ 0`,
    why: `${of(COS, x)} + ${of(COS, y)} = ${P2} gives ${y} = ${tf('sin', `(${of(COS, x)})`)} = ${R1MX2}: ${X2} + ${sq(y)} = 1.`,
    say: null,
  },
  // p. 170
  {
    topic: 5,
    kind: 'shortcut',
    q: `${TATB} = ${P2} with ${x}, ${y} > 0: the relation, fast?`,
    a: `${XY} = 1: the cosine of the sum is 0, and dividing by the positive ${tf('cos', I('A'))}${NB}${tf('cos', I('B'))} leaves 1 − ${XY} = 0`,
    why: `The three-term version is the same move: ${XY} + ${I('yz')} + ${I('zx')} = 1 ⟺ the sum is ${P2}.`,
    say: null,
  },

  // ── Additional C · Multiple Angles Over the Whole Real Line ──
  // pp. 171–172
  {
    topic: 6,
    kind: 'remember',
    q: `${ofp(SIN, F2X_P)} in terms of ${of(TAN, x)}, for every real ${x}?`,
    a: `2${NB}${of(TAN, x)} for ${ABSX} ≤ 1; π − 2${NB}${of(TAN, x)} for ${x} > 1; −π − 2${NB}${of(TAN, x)} for ${x} < −1. With ${th} = ${of(TAN, x)} the argument is ${tf('sin', `2${th}`)}, and for ${x} > 1, 2${th} ∈ (${P2},${NB}π) folds to π − 2${th}`,
    why: `At ${x} = √3: π − ${P2_3} = ${P3} = ${of(SIN, R3_2)}.`,
    say: 'Do not manipulate; tabulate.',
  },
  // p. 172
  {
    topic: 6,
    kind: 'remember',
    q: `${ofp(COS, F1MX_P)} and ${ofp(TAN, F2X_M)} over the whole line?`,
    a: `${ofp(COS, F1MX_P)} = 2${NB}${of(TAN, x)} for ${x} ≥ 0 and −2${NB}${of(TAN, x)} for ${x} < 0. ${ofp(TAN, F2X_M)}, ${x} ≠ ±1: 2${NB}${of(TAN, x)} for ${ABSX} < 1, 2${NB}${of(TAN, x)} − π for ${x} > 1, 2${NB}${of(TAN, x)} + π for ${x} < −1`,
    why: `${ofp(TAN, fr(`3${x} − ${x}<sup>3</sup>`, `1 − 3${X2}`))} is 3${NB}${of(TAN, x)} for ${ABSX} < ${fr('1', '√3')}, 3${NB}${of(TAN, x)} − π for ${x} > ${fr('1', '√3')} and 3${NB}${of(TAN, x)} + π for ${x} < −${fr('1', '√3')}.`,
    say: `Read the table as a comparison of two functions of ${x}.`,
  },
  // p. 172
  {
    topic: 6,
    kind: 'mixup',
    q: `Do the sine row and the cosine row break at the same ${x}?`,
    a: `No: the sine row breaks at ${x} = ±1, where 2${th} reaches ±${P2}; the cosine row at ${x} = 0, because the cage ${COSB} already holds all of [0,${NB}π) and only a negative 2${th} needs reflecting`,
    why: `For ${SIN} and ${TAN} the breakpoints sit where the multiple angle hits an odd multiple of ${P2}; for ${COS}, where it hits a multiple of π.`,
    say: null,
  },
  // p. 173
  {
    topic: 6,
    kind: 'mistake',
    q: `For which real ${x} is 2${NB}${of(TAN, x)} = ${ofp(SIN, F2X_P)}?`,
    a: `Only ${x} ∈ ${M11}, not every ${x}. For ${x} > 1 the right side is π − 2${NB}${of(TAN, x)}, smaller than the left by 4${NB}${of(TAN, x)} − π > 0; for ${x} < −1 the mismatch mirrors`,
    why: `${ofp(COS, F1MX_P)} = −2${NB}${of(TAN, x)} holds exactly for ${x} ≤ 0, the case ${x} = 0 included.`,
    say: null,
  },
  // pp. 172–173
  {
    topic: 6,
    kind: 'shortcut',
    q: `${ofp(SIN, fr(`2${a}`, `1 + ${sq(a)}`))} + ${ofp(COS, fr(`1 − ${sq(a)}`, `1 + ${sq(a)}`))} for ${a} > 1?`,
    a: `π: the rows give (π − 2${NB}${of(TAN, a)}) + 2${NB}${of(TAN, a)}, and the variable parts cancel. For 0 ≤ ${a} ≤ 1 the same sum is 4${NB}${of(TAN, a)} and varies`,
    why: `${of(SIN, fr('4', '5'))} = π − 2${NB}${of(TAN, '2')}, since 2 > 1.`,
    say: null,
  },

  // ── Additional D · The Folded Composites as Functions ──
  // p. 174
  {
    topic: 7,
    kind: 'remember',
    q: `What does ${ofp(SIN, tf('sin', x))} look like as a function of ${x}?`,
    a: `A triangle wave: odd, period 2π, range ${SINB}, slopes ±1, corners at ${x} = ${P2} + ${I('k')}π. It is ${x} − 2${I('k')}π on [−${P2} + 2${I('k')}π,${NB}${P2} + 2${I('k')}π] and (2${I('k')} + 1)π − ${x} on [${P2} + 2${I('k')}π,${NB}${P3_2} + 2${I('k')}π]`,
    why: `${ofp(SIN, tf('sin', '10'))} = 3π − 10, about −0.575: 10 lies in [${fr('5π', '2')},${NB}${fr('7π', '2')}].`,
    say: 'Bound the search space before sweeping.',
  },
  // p. 174
  {
    topic: 7,
    kind: 'remember',
    q: `And ${ofp(COS, tf('cos', x))} and ${ofp(TAN, tf('tan', x))}?`,
    a: `${ofp(COS, tf('cos', x))} is an even triangle wave of period 2π: ${x} on ${COSB} and 2π − ${x} on [π,${NB}2π], corners at multiples of π, range ${COSB}. ${ofp(TAN, tf('tan', x))} is a sawtooth of period π: ${x} − ${I('k')}π on (−${P2} + ${I('k')}π,${NB}${P2} + ${I('k')}π), jumping from ${P2} down to −${P2} at ${x} = ${P2} + ${I('k')}π, where it is undefined`,
    why: `${ofp(COS, tf('cos', '4'))} = 2π − 4, about 2.283; ${ofp(TAN, tf('tan', fr('7π', '4')))} = −${P4}.`,
    say: 'Reject any piecewise candidate that lands outside the piece that produced it.',
  },
  // pp. 174–175
  {
    topic: 7,
    kind: 'mixup',
    q: `${ofp(SIN, tf('sin', x))} = ${c}: how many solutions per period?`,
    a: `Two for |${WJ}${c}| < ${P2}, one on each linear piece; at ${c} = ±${P2} the two fuse at a corner into one`,
    why: `${ofp(SIN, tf('sin', x))} = 0.6 has four solutions in [−2π,${NB}2π]: 0.6, π − 0.6, 0.6 − 2π and −π − 0.6.`,
    say: null,
  },
  // p. 175
  {
    topic: 7,
    kind: 'mistake',
    q: `${ofp(SIN, tf('sin', x))} = ${P4} on [0, 2π]: three solutions, one per piece?`,
    a: `No: two, ${P4} and ${P3_4}. On the third piece, ${x} − 2π = ${P4} gives ${fr('9π', '4')}, outside the interval: a candidate outside the piece that produced it is rejected`,
    why: 'Sweep the pieces covering the interval, and check each candidate against its own piece.',
    say: null,
  },
  // p. 175
  {
    topic: 7,
    kind: 'shortcut',
    q: `How many real solutions has ${ofp(COS, tf('cos', x))} = ${fr(ABSX, '2')}?`,
    a: `Three: 0 and ±${P4_3}. Both sides are even, so take ${x} ≥ 0; the left side is at most π, so ${x} ≤ 2π closes the search. On ${COSB}, ${x} = ${fr(x, '2')} gives 0; on [π,${NB}2π], 2π − ${x} = ${fr(x, '2')} gives ${P4_3}`,
    why: 'Bounding the search from the range came free: no sweep past 2π is needed.',
    say: null,
  },

  // ── Additional E · Domains and Ranges of Composite Inverse Trigonometric Functions ──
  // p. 176
  {
    topic: 8,
    kind: 'remember',
    q: 'How do you find the domain of a function built from inverse trig parts?',
    a: `One constraint per part (arguments of ${SIN} and ${COS} in ${M11}, of ${SEC} and ${CSC} with modulus at least 1, ${TAN} and ${COT} free, plus the radicals, denominators and logarithms around them), then intersect. For a quadratic argument complete the square: one side is often automatic. For a fractional argument split on the sign of the denominator rather than multiplying blindly`,
    why: `${ofp(COS, `${X2} − 4${x} + 3`)}: (${x} − 2)<sup>2</sup> ≤ 2 and (${x} − 2)<sup>2</sup> ≥ 0, so the domain is [2 − √2,${NB}2 + √2] and the range ${COSB}.`,
    say: 'The domain gate comes first.',
  },
  // pp. 176–177
  {
    topic: 8,
    kind: 'remember',
    q: 'How do you find the range?',
    a: `Reduce to a single inverse function with the complementary laws, the most profitable move; then use monotonicity: where every part increases (or every part decreases) on an interval, the extremes sit at its endpoints. ${SEC} and ${CSC} are monotonic only on each of their two pieces: ${ofp(SEC, '−1')} = π, yet ${of(SEC, '1')} = 0`,
    why: `${of(SIN, x)} + ${of(TAN, x)} on ${M11} is increasing: range [−${P3_4},${NB}${P3_4}].`,
    say: 'Reduce the expression to a single inverse function.',
  },
  // p. 177
  {
    topic: 8,
    kind: 'mixup',
    q: `Domain of ${ofp(SIN, fr(`${x} + 1`, `${x} − 2`))}: multiply through by ${x} − 2?`,
    a: `Only once you know its sign. As 1 + ${fr('3', `${x} − 2`)}, the condition ≤ 1 forces ${x} < 2, so ${x} − 2 < 0, and multiplying the condition ≥ −1 by it reverses the inequality: ${x} ≤ ${H}. Domain (−∞,${NB}${H}]`,
    why: `At ${x} = 1 the argument is −2: correctly excluded, since 1 > ${H}.`,
    say: null,
  },
  // p. 178
  {
    topic: 8,
    kind: 'mistake',
    q: `Range of ${of(SIN, x)} + ${of(SEC, x)}: an interval?`,
    a: `No: the domain is ${M11} ∩ {${ABSX} ≥ 1} = {−1, 1}, two points, and both give ${P2}: the range is {${P2}}, a constant. Run the domain gate before any formula`,
    why: `${of(SEC, x)} + ${of(TAN, x)}, by contrast, has domain (−∞,${NB}−1] ∪ [1,${NB}∞).`,
    say: null,
  },
  // p. 177
  {
    topic: 8,
    kind: 'shortcut',
    q: `Range of 2${NB}${of(SIN, x)} − ${of(COS, x)}, fast?`,
    a: `[−2π,${NB}π]: the complementary law turns it into 3${NB}${of(SIN, x)} − ${P2}, and ${of(SIN, x)} runs over ${SINB}`,
    why: `${ofp(COS, `${x} − 1`)} + ${ofp(SIN, `1 − ${x}`)} is defined for ${x} ∈ [0,${NB}2]: three integers.`,
    say: null,
  },

  // ── Additional P · What JEE Actually Asks ──
  // p. 179
  {
    topic: 9,
    kind: 'shortcut',
    q: `Find the set of ${x} with ${ofp(TAN, `2${x}`)} + ${ofp(TAN, `3${x}`)} = ${P4}.`,
    a: `{${fr('1', '6')}}, a singleton. Taking the tangent gives ${fr(`5${x}`, `1 − 6${X2}`)} = 1, so 6${X2} + 5${x} − 1 = 0, with roots ${fr('1', '6')} and −1. At ${x} = −1 both entries are negative with product 6 > 1, so the sum lies in (−π,${NB}−${P2}): reject it`,
    why: `Indeed ${ofp(TAN, '−2')} + ${ofp(TAN, '−3')} = −${P3_4}.`,
    say: `Compute ${XY} before touching the formula.`,
  },
  // pp. 180–181
  {
    topic: 9,
    kind: 'shortcut',
    q: `${al} = 3${NB}${of(SIN, fr('2', '3'))}, ${be} = 3${NB}${of(COS, fr('1', '3'))}: which of cos ${be} > 0, sin ${be} < 0, cos(${al} + ${be}) > 0, cos ${al} < 0 hold?`,
    a: `The last three. Sandwich each angle between special angles: ${P6} < ${of(SIN, fr('2', '3'))} < ${P4} gives ${P2} < ${al} < ${P3_4}; ${P3} < ${of(COS, fr('1', '3'))} < ${P2} gives π < ${be} < ${P3_2}; and ${P3_2} < ${al} + ${be} < 2π`,
    why: 'Never evaluate a multiple angle numerically without a sandwich proof.',
    say: null,
  },
  // p. 180
  {
    topic: 9,
    kind: 'remember',
    q: `${I('f')}(${x}) = 2${NB}${of(TAN, x)} + ${ofp(SIN, F2X_P)}: what is ${I('f')}(5)?`,
    a: `π. With ${th} = ${of(TAN, '5')}, about 78.7°, 2${th} > ${P2} lies outside the ${SIN} cage, which returns π − 2${th}. In fact ${I('f')} is π for ${x} > 1, −π for ${x} < −1 and 4${NB}${of(TAN, x)} for ${ABSX} ≤ 1`,
    why: `Cancelling blindly gives 4${NB}${of(TAN, '5')}, which is not π.`,
    say: 'Check the branch first.',
  },
  // pp. 181–182
  {
    topic: 9,
    kind: 'mistake',
    q: `How many real solutions has ${of(SIN, x)} = 2${NB}${of(TAN, x)}?`,
    a: `Three: −1, 0 and 1. For 0 < ${x} < 1, ${tf('sin', `(2${NB}${of(TAN, x)})`)} = ${F2X_P} > ${x}, so 2${NB}${of(TAN, x)} > ${of(SIN, x)}: no interior roots. But ${x} = ±1 sit exactly on the branch boundaries and do count, and so does 0`,
    why: 'Students who feel the endpoints are excluded miscount.',
    say: null,
  },
  // pp. 181–182
  {
    topic: 9,
    kind: 'mistake',
    q: 'Which wrong options do the distractors of this chapter build on?',
    a: `The missing ±π when ${XY} > 1 (both the corrected and the uncorrected value are offered); the unfolded angle in an ${inv(I('f'))}(${I('f')}(${th})) question; a multiple-angle form quoted outside its window; a root left unaudited after taking tan or squaring; negating where cot, sec or cos reflect; and a single formula where the expression is piecewise`,
    why: `${ofp(SIN, `3${x} − 4${x}<sup>3</sup>`)} = 3${NB}${of(SIN, x)} fails loudly at ${x} = ${R3_2}: π on the left, 0 on the right.`,
    say: null,
  },
];
