import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Topics 03–04, pp. 148–164 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's numbered parts
 * "3 Combination Identities (Sums, Differences & Multiple Angles)" (pp.
 * 148–156) and "4 Graphs, Composite Evaluation & Simplification" (pp.
 * 157–164); the Additional Topics part starts on p. 165. Each topic opens with
 * its "Exam Relevance:" box as a part of its own, then is split at its
 * sections 3.1–3.8 / 4.1–4.8, titled from their own names. The book never
 * calls its figures in the text; each `fig` stands where its caption is
 * printed: 2.7 (caption p. 148, drawn p. 149) at the end of Topic 03's Concept
 * intuition; 2.8 (caption p. 155, drawn p. 156) after the cheat sheet; 2.9
 * (caption p. 157, drawn p. 158) at the end of Topic 04's Concept intuition;
 * 2.10 (caption p. 163, drawn p. 164) after the cheat sheet. No unnumbered
 * drawings. Every fraction is stacked (<frac>); a fraction the book sets
 * inside a fraction's numerator is written with ÷; no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const x = '<i>x</i>';
const y = '<i>y</i>';
const n = '<i>n</i>';
const N = '<i>N</i>';
const a = '<i>a</i>';
const b = '<i>b</i>';
const A = '<i>A</i>';
const B = '<i>B</i>';
const S = '<i>S</i>';
const th = '<i>θ</i>';
const XY = '<i>xy</i>';
const X2 = `${x}<sup>2</sup>`;
/** |x|, the U+2060 keeping the opening bar with its letter. */
const ABSX = `|⁠${x}|`;

const inv = (fn: string) => `${fn}<sup>−1</sup>`;
const SIN = inv('sin');
const COS = inv('cos');
const TAN = inv('tan');
const COT = inv('cot');
const SEC = inv('sec');
const CSC = inv('cosec');
/** An inverse function and its argument, glued: sin⁻¹ x. */
const of = (F: string, arg: string) => `${F}${NB}${arg}`;
/** A trig function and its argument, glued: sin θ. */
const tf = (fn: string, arg: string) => `${fn}${NB}${arg}`;

const P2 = fr('π', '2');
const P3 = fr('π', '3');
const P4 = fr('π', '4');
const P6 = fr('π', '6');
const P3_4 = fr('3π', '4');
const H = fr('1', '2');
const T3 = fr('1', '3');
const R3_2 = fr('√3', '2');
const X_2 = fr(x, '2');
const TH_2 = fr(th, '2');

/** An interval, its comma glued: [a, b]. */
const iv = (lo: string, hi: string, o = '[', c = ']') => `${o}${lo},${NB}${hi}${c}`;
const SINB = iv(`−${P2}`, P2);
const TANB = iv(`−${P2}`, P2, '(', ')');
const COSB = iv('0', 'π');

const R1MX2 = `√(1${NB}−${NB}${X2})`;
const R1PX2 = `√(1${NB}+${NB}${X2})`;
const RX2M1 = `√(${X2}${NB}−${NB}1)`;
const FSUM = fr(`${x} + ${y}`, `1 − ${XY}`);
const FDIF = fr(`${x} − ${y}`, `1 + ${XY}`);
const F2X_M = fr(`2${x}`, `1 − ${X2}`);
const F2X_P = fr(`2${x}`, `1 + ${X2}`);
const F1MX_P = fr(`1 − ${X2}`, `1 + ${X2}`);
const FAB = fr(`${a} − ${b}`, `1 + <i>ab</i>`);
const TATB = `${of(TAN, x)} + ${of(TAN, y)}`;
const FAMOUS = fr(`${R1PX2} − 1`, x);
const FCOS = fr(tf('cos', x), `1 + ${tf('sin', x)}`);
const NSQ = `1 + ${n} + ${n}<sup>2</sup>`;
const C2 = tf('cos', X_2);
const S2 = tf('sin', X_2);

export const TOPICS: Topic[] = [
  // ──────────────── Topic 03 · pp. 148–156 ────────────────
  {
    n: '03',
    title: 'Combination Identities (Sums, Differences & Multiple Angles)',
    kalam: 'That ±π is not a special rule to memorise: it is the cage reasserting itself, exactly as in Topic 01’s range-folding.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the most heavily examined block in the chapter. <b>CBSE Boards</b> sets “prove that ${of(TAN, H)} + ${of(TAN, T3)} = ${P4}”-style questions for 3–4 marks almost every year ${ESTIMATE}. <b>CUET</b> turns the multiple-angle forms into rapid conversions. <b>JEE Main</b> lives on the ${TATB} formula, and punishes the ${XY}${NB}>${NB}1 case relentlessly. <b>JEE Advanced</b> builds telescoping infinite series and conditional-domain problems directly on these identities. If Topic 02 was about transforming one function, Topic 03 is about combining two, and the single ±π correction term separates the students who memorised from the students who understood.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `In Topic 02 every identity transformed a single inverse function. Here we combine two of <b>them</b> (add ${of(TAN, x)} and ${of(TAN, y)}, or double an angle 2${NB}${of(TAN, x)}) and ask what single inverse function results. The engine is nothing new: it is the ordinary <b>trigonometric addition formulas you already know</b>, run backwards.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way.</b> ${of(TAN, x)} and ${of(TAN, y)} are just two angles, call them ${A} and ${B}. You already know<br>tan(${A} + ${B}) = ${fr(`${tf('tan', A)} + ${tf('tan', B)}`, `1 − ${tf('tan', A)} ${tf('tan', B)}`)} = ${FSUM}.<br>So the angle ${A} + ${B} has tangent ${FSUM}, which tempts you to write ${A} + ${B} = ${of(TAN, FSUM)}.<br>And that is right… <b>as long as ${A} + ${B} hasn’t escaped the ${TAN} cage</b> ${TANB}.`,
      },
      {
        t: 'p',
        html: `Here is the whole subtlety in one image. Adding two angles is like adding two rotations of a dial. If the combined rotation stays inside the allowed window, the formula reads off the answer directly. But if the two angles are both large and positive (which, for positive ${x} and ${y}, happens exactly when ${XY}${NB}>${NB}1), their sum overshoots ${P2} and lands outside the cage, so ${of(TAN, FSUM)} gives an angle that is <b>short by</b> π, and we must add π back. Symmetrically, two large negative angles undershoot −${P2} and we subtract π. <b>That ±π is not a special rule to memorise: it is the cage reasserting itself, exactly as in</b> Topic 01’s <b>range-folding.</b>`,
      },
      {
        t: 'p',
        html: `The <b>multiple-angle</b> identities are the same story with ${y} = ${x}: 2${NB}${of(TAN, x)} is just ${of(TAN, x)} + ${of(TAN, x)}, and 3${NB}${of(SIN, x)} unpacks via sin${NB}3${th} = 3${NB}${tf('sin', th)} − 4${NB}sin<sup>3</sup>${NB}${th}. Every one of them is an addition/triple formula read backwards, fenced by a domain condition that keeps the doubled or tripled angle inside its cage.`,
      },
      {
        t: 'p',
        html: 'So the mental model for all of Topic 03 is: write the combined angle, apply the forward <b>trig formula, then check whether the result stayed in the branch: if not, correct by ±π.</b> One idea, many identities.',
      },
      { t: 'fig', id: 'm12-02-fig-2.7' },

      { t: 'part', title: 'Key identities, definitions and validity conditions' },
      {
        t: 'p',
        html: 'Notation inherited from Topic 01. All conditions are essential: an identity applied outside its domain is wrong even if the algebra is clean.',
      },
      { t: 'p', html: '<b>Sum and difference of arctangents.</b>' },
      {
        t: 'formula',
        kicker: 'Sum and difference of arctangents',
        main: `${TATB} = ${of(TAN, FSUM)}, ${XY}${NB}<${NB}1<br>${TATB} = π + ${of(TAN, FSUM)}, ${XY}${NB}>${NB}1, ${x}${NB}>${NB}0, ${y}${NB}>${NB}0<br>${TATB} = −π + ${of(TAN, FSUM)}, ${XY}${NB}>${NB}1, ${x}${NB}<${NB}0, ${y}${NB}<${NB}0<br>${of(TAN, x)} − ${of(TAN, y)} = ${of(TAN, FDIF)}, ${XY}${NB}>${NB}−1`,
        legend: [`${x}, ${y} = the arguments`],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Multiple-angle identities</b> (each is a self-combination, fenced by a domain condition):',
      },
      {
        t: 'table',
        title: null,
        head: ['Identity', 'Equivalent forms', 'Validity'],
        rows: [
          [`2${NB}${of(TAN, x)}`, `= ${of(TAN, F2X_M)}`, `−1 < ${x} < 1`],
          [`2${NB}${of(TAN, x)}`, `= ${of(SIN, F2X_P)}`, `−1 ≤ ${x} ≤ 1`],
          [`2${NB}${of(TAN, x)}`, `= ${of(COS, F1MX_P)}`, `${x} ≥ 0`],
          [`2${NB}${of(SIN, x)}`, `= ${SIN}(2${x}${R1MX2})`, `−${fr('1', '√2')} ≤ ${x} ≤ ${fr('1', '√2')}`],
          [`2${NB}${of(COS, x)}`, `= ${COS}(2${X2} − 1)`, `0 ≤ ${x} ≤ 1`],
          [`3${NB}${of(SIN, x)}`, `= ${SIN}(3${x} − 4${x}<sup>3</sup>)`, `−${H} ≤ ${x} ≤ ${H}`],
          [`3${NB}${of(COS, x)}`, `= ${COS}(4${x}<sup>3</sup> − 3${x})`, `${H} ≤ ${x} ≤ 1`],
        ],
      },
      {
        t: 'formula',
        kicker: 'Double and triple angles',
        main: `2${NB}${of(TAN, x)} = ${of(TAN, F2X_M)} (${ABSX}${NB}<${NB}1)<br>= ${of(SIN, F2X_P)} (${ABSX}${NB}≤${NB}1)<br>= ${of(COS, F1MX_P)} (${x}${NB}≥${NB}0)<br>3${NB}${of(SIN, x)} = ${SIN}(3${x} − 4${x}<sup>3</sup>) (${ABSX}${NB}≤${NB}${H})<br>3${NB}${of(COS, x)} = ${COS}(4${x}<sup>3</sup> − 3${x}) (${H}${NB}≤${NB}${x}${NB}≤${NB}1)`,
        legend: [`${x} = the argument`],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Sum of arcsines / arccosines</b> (JEE Advanced: condition-heavy, handle with care):',
      },
      {
        t: 'formula',
        kicker: 'Sum of arcsines / arccosines',
        main: `${of(SIN, x)} + ${of(SIN, y)} = ${SIN}(${x}√(1 − ${y}<sup>2</sup>) + ${y}${R1MX2}), if ${X2} + ${y}<sup>2</sup> ≤ 1 (or ${XY}${NB}<${NB}0)<br>${of(COS, x)} + ${of(COS, y)} = ${COS}(${XY} − ${R1MX2}√(1 − ${y}<sup>2</sup>)), if ${x} + ${y} ≥ 0`,
        legend: [`${x}, ${y} = the arguments`],
        note: null,
      },
      {
        t: 'p',
        html: `When the stated condition fails, the cage forces a reflection instead: ${of(SIN, x)} + ${of(SIN, y)} = π − ${SIN}(…) when ${x}, ${y}${NB}>${NB}0, and −π − ${SIN}(…) when ${x}, ${y}${NB}<${NB}0; ${of(COS, x)} + ${of(COS, y)} = 2π − ${COS}(…) when ${x} + ${y}${NB}<${NB}0. The same cage logic as the arctangent sum.`,
      },
      {
        t: 'p',
        html: `Validity check (a “unit check”): after combining, the result must lie in the combined function’s branch. If a “proof” yields ${TAN}(negative) on the right but the left side is clearly an obtuse sum, you dropped a π.`,
      },

      { t: 'part', title: 'Derivations from the addition formulas' },
      {
        t: 'p',
        html: `<b>Derivation 1: The arctangent sum, and where ±π comes from.</b> Let ${A} = ${of(TAN, x)}, ${B} = ${of(TAN, y)}, so ${A}, ${B} ∈ ${TANB} and ${tf('tan', A)} = ${x}, ${tf('tan', B)} = ${y}. Then<br>tan(${A} + ${B}) = ${fr(`${tf('tan', A)} + ${tf('tan', B)}`, `1 − ${tf('tan', A)} ${tf('tan', B)}`)} = ${FSUM}.<br>Now ${A} + ${B} ranges over ${iv('−π', 'π', '(', ')')}: wider than the ${TAN} cage. Three cases:<br>• <b>${XY}${NB}<${NB}1:</b> here ${A} + ${B} ∈ ${TANB}, inside the cage, so ${A} + ${B} = ${of(TAN, FSUM)}.<br>• <b>${XY}${NB}>${NB}1 with ${x}, ${y}${NB}>${NB}0:</b> then ${A}, ${B} are both large enough that ${A} + ${B} ∈ ${iv(P2, 'π', '(', ')')}, above the cage. ${TAN} returns the in-cage angle, which is π short; add it back:<br>${A} + ${B} = π + ${of(TAN, FSUM)}.<br>• <b>${XY}${NB}>${NB}1 with ${x}, ${y}${NB}<${NB}0:</b> symmetrically ${A} + ${B} ∈ ${iv('−π', `−${P2}`, '(', ')')}; subtract π.<br><br>The ±π is purely the branch correction: identical in spirit to folding in Topic 01.`,
      },
      {
        t: 'p',
        html: `<b>Derivation 2: 2${NB}${of(TAN, x)} = ${of(SIN, F2X_P)}.</b> Put ${th} = ${of(TAN, x)}, so ${tf('tan', th)} = ${x}, ${th} ∈ ${TANB}. Using the double-angle identity:<br>sin${NB}2${th} = ${fr(`2${NB}${tf('tan', th)}`, `1 + tan<sup>2</sup>${NB}${th}`)} = ${F2X_P}.<br>So 2${th} = ${of(SIN, F2X_P)} <b>provided</b> 2${th} ∈ ${SINB}, i.e. ${th} ∈ ${iv(`−${P4}`, P4)}, i.e. ${ABSX}${NB}≤${NB}1. Outside that, 2${th} leaves the ${SIN} cage and a π− fold is needed, which is exactly why the validity tag is ${ABSX}${NB}≤${NB}1.`,
      },
      {
        t: 'p',
        html: `<b>Derivation 3: 3${NB}${of(SIN, x)} = ${SIN}(3${x} − 4${x}<sup>3</sup>).</b> Put ${th} = ${of(SIN, x)}, so ${tf('sin', th)} = ${x}. The triple-angle identity gives<br>sin${NB}3${th} = 3${NB}${tf('sin', th)} − 4${NB}sin<sup>3</sup>${NB}${th} = 3${x} − 4${x}<sup>3</sup>.<br>So 3${th} = ${SIN}(3${x} − 4${x}<sup>3</sup>) provided 3${th} ∈ ${SINB}, i.e. ${th} ∈ ${iv(`−${P6}`, P6)}, i.e. ${x} = ${tf('sin', th)} ∈ ${iv(`−${H}`, H)}.<br>(This is a standard NCERT exercise (Ex 2.2 Q1 in the pre-2023 edition): the domain restriction is the whole point of the question.)`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Prove that ${of(TAN, H)} + ${of(TAN, T3)} = ${P4}.`,
        steps: [
          `Here ${XY} = ${H} · ${T3} = ${fr('1', '6')} < 1, so the direct formula applies:<br>${of(TAN, H)} + ${of(TAN, T3)}<br>= ${TAN}[(${H} + ${T3}) ÷ (1 − ${fr('1', '6')})]<br>= ${TAN}(${fr('5', '6')} ÷ ${fr('5', '6')}) = ${of(TAN, '1')} = ${P4}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / Speed Trap',
        q: `2${NB}${of(TAN, T3)} equals: (a) ${of(TAN, fr('3', '4'))} (b) ${of(TAN, fr('2', '3'))} (c) ${of(SIN, fr('4', '5'))} (d) ${of(TAN, fr('3', '5'))}`,
        steps: [
          `<b>Fast solution.</b> ${ABSX} = ${T3} < 1, so<br>2${NB}${of(TAN, T3)} = ${TAN}[${fr('2', '3')} ÷ (1 − ${fr('1', '9')})]<br>= ${TAN}(${fr('2', '3')} ÷ ${fr('8', '9')}) = ${of(TAN, fr('3', '4'))}.`,
          `<b>Speed tip:</b> memorise ${F2X_M} and just substitute; option (c) is the ${SIN} form of a different value.`,
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Evaluate ${of(TAN, '2')} + ${of(TAN, '3')}.`,
        steps: [
          `Check the product: ${XY} = 2 · 3 = 6 > 1, and both are positive, so the <b>+π case</b> applies:<br>${of(TAN, '2')} + ${of(TAN, '3')} = π + ${of(TAN, fr('2 + 3', '1 − 6'))}<br>= π + ${of(TAN, fr('5', '−5'))} = π + ${TAN}(−1)<br>= π − ${P4} = ${P3_4}.`,
          `(The trap answer −${P4} comes from forgetting the +π. <b>Sanity check:</b> ${of(TAN, '2')} and ${of(TAN, '3')} are each between ${P4} and ${P2}, so their sum must exceed ${P2}: only ${P3_4} qualifies.)`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find ∑<sub>${n}=1</sub><sup>∞</sup> ${TAN}(${fr('1', NSQ)}).`,
        steps: [
          `The trick is to write each term as a difference so the sum telescopes. Note<br>${fr('1', NSQ)} = ${fr(`(${n} + 1) − ${n}`, `1 + ${n}(${n} + 1)`)},<br><br>which is exactly the ${TAN} difference pattern ${FAB} with ${a} = ${n} + 1, ${b} = ${n}. Hence<br><br>${TAN}(${fr('1', NSQ)}) = ${TAN}(${n} + 1) − ${TAN}(${n}).`,
          `The partial sum collapses:<br>${S}<sub>${N}</sub> = ∑<sub>${n}=1</sub><sup>${N}</sup> [${TAN}(${n} + 1) − ${TAN}(${n})]<br>= ${TAN}(${N} + 1) − ${TAN}(1).`,
          `Let ${N} → ∞: ${TAN}(${N} + 1) → ${P2}, so<br>${S} = ${P2} − ${P4} = ${P4}.`,
          `(This is the canonical JEE telescoping series: the entire difficulty is recognising the difference pattern hidden in ${NSQ}.)`,
        ],
        ans: P4,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Prove ${of(TAN, fr('1', '7'))} + ${of(TAN, fr('1', '8'))} = ${TAN}(${fr('3', '11')}), and verify ${XY}${NB}<${NB}1.`,
            a: `${TAN}[(${fr('1', '7')} + ${fr('1', '8')}) ÷ (1 − ${fr('1', '56')})]<br>= ${TAN}(${fr('15', '56')} ÷ ${fr('55', '56')}) = ${of(TAN, fr('15', '55'))} = ${of(TAN, fr('3', '11'))}; ${XY} = ${fr('1', '56')} < 1 ✓.`,
          },
          {
            q: `<b>[CUET]</b> Evaluate 2${NB}${of(TAN, fr('1', '5'))} as a single ${TAN}.`,
            a: `${TAN}[${fr('2', '5')} ÷ (1 − ${fr('1', '25')})] = ${TAN}(${fr('2', '5')} ÷ ${fr('24', '25')}) = ${of(TAN, fr('5', '12'))}.`,
          },
          {
            q: `<b>[JEE Main]</b> Show 3${NB}${of(SIN, x)} = ${SIN}(3${x} − 4${x}<sup>3</sup>) holds for ${x} = ${H} but state why it fails for ${x} = ${R3_2}.`,
            a: `At ${x} = ${H}: ${th} = ${of(SIN, H)} = ${P6},<br>3${th} = ${P2} ∈ ${SINB} ✓.<br>At ${x} = ${R3_2}: ${th} = ${P3},<br>3${th} = π ∉ ${SINB}, so the identity (which requires ${x} ∈ ${iv(`−${H}`, H)}) fails.`,
          },
          {
            q: `<b>[JEE Main]</b> Evaluate ${of(TAN, H)} + ${of(TAN, fr('1', '5'))} + ${of(TAN, fr('1', '8'))}.`,
            a: `${of(TAN, H)} + ${of(TAN, fr('1', '5'))} = ${TAN}(${fr('7', '10')} ÷ ${fr('9', '10')}) = ${of(TAN, fr('7', '9'))}; then<br>${of(TAN, fr('7', '9'))} + ${of(TAN, fr('1', '8'))}<br>= ${TAN}[(${fr('7', '9')} + ${fr('1', '8')}) ÷ (1 − ${fr('7', '72')})]<br>= ${TAN}(${fr('65', '72')} ÷ ${fr('65', '72')}) = ${of(TAN, '1')} = ${P4}.`,
          },
          {
            q: `<b>[JEE Advanced]</b> Find ∑<sub>${n}=1</sub><sup>∞</sup> ${TAN}(${fr('2', `${n}<sup>2</sup>`)}). (Hint: ${fr('2', `${n}<sup>2</sup>`)} = ${fr(`(${n}+1)−(${n}−1)`, `1+(${n}+1)(${n}−1)`)}.)`,
            a: `${TAN}(${n} + 1) − ${TAN}(${n} − 1); telescopes to (${P2} + ${P2}) − (${of(TAN, '1')} + ${of(TAN, '0')}) = π − ${P4} = ${P3_4}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `${of(TAN, '3')} + ${of(TAN, H)} =`,
        opts: [
          { label: P4, nudge: null },
          { label: `π − ${of(TAN, '7')}`, nudge: null },
          { label: `−${P4}`, nudge: null },
          { label: P2, nudge: null },
        ],
        correct: 1,
        solution: `${XY} = 3 · ${H} = ${fr('3', '2')} > 1, both positive, so the +π case applies:<br>${of(TAN, '3')} + ${TAN}(${H})<br>= π + ${TAN}[(3 + ${H}) ÷ (1 − ${fr('3', '2')})]<br>= π + ${TAN}(−7) = π − ${of(TAN, '7')} ≈ 98.1°.<br>Only option <b>(b)</b> is obtuse. <b>Trap:</b> skipping the +π correction gives ${TAN}(−7), which matches no option.`,
      },
      {
        t: 'mcq',
        q: `2${NB}${of(TAN, x)} = ${of(COS, F1MX_P)} is valid for:`,
        opts: [
          {
            label: `all ${x}`,
            nudge: '<b>Trap (a):</b> assuming identities are unconditional: the defining error of this topic.',
          },
          { label: `${x} ≥ 0`, nudge: null },
          { label: `${ABSX} ≤ 1`, nudge: null },
          { label: `${x} ≤ 0`, nudge: null },
        ],
        correct: 1,
        solution: `The ${COS} form requires the doubled angle to land in ${COSB}, forcing ${x}${NB}≥${NB}0.`,
      },
      {
        t: 'mcq',
        q: `${of(SIN, F2X_P)} equals 2${NB}${of(TAN, x)} when:`,
        opts: [
          { label: `${x} ≥ 1`, nudge: null },
          { label: `${ABSX} ≤ 1`, nudge: null },
          { label: `${x} ≤ −1`, nudge: null },
          { label: 'always', nudge: null },
        ],
        correct: 1,
        solution: `From Derivation 2, the ${SIN} form needs ${ABSX}${NB}≤${NB}1.`,
      },
      {
        t: 'mcq',
        q: `∑<sub>${n}=1</sub><sup>∞</sup> ${of(TAN, fr('1', `2${n}<sup>2</sup>`))} =`,
        opts: [
          { label: P2, nudge: null },
          { label: P4, nudge: null },
          { label: P3_4, nudge: null },
          { label: P3, nudge: null },
        ],
        correct: 1,
        solution: `${fr('1', `2${n}<sup>2</sup>`)} = ${fr(`(2${n} + 1) − (2${n} − 1)`, `1 + (2${n} + 1)(2${n} − 1)`)} gives ${TAN}(2${n} + 1) − ${TAN}(2${n} − 1); telescoping from ${of(TAN, '1')} to ${P2} yields ${P2} − ${P4} = ${P4}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Forgetting the ±π when ${XY}${NB}>${NB}1.</b> The headline error. Always compute ${XY} first; if it exceeds 1, decide the sign correction from the signs of ${x}, ${y} before touching the formula.`,
          `<b>Ignoring the multiple-angle domain conditions.</b> 2${NB}${of(TAN, x)} = ${of(TAN, F2X_M)} only for ${ABSX}${NB}<${NB}1; 3${NB}${of(SIN, x)} = ${SIN}(3${x} − 4${x}<sup>3</sup>) only for ${ABSX}${NB}≤${NB}${H}. Quoting them outside is the most common “proof” failure.`,
          `<b>Sign error in the difference formula.</b> ${of(TAN, x)} − ${of(TAN, y)} = ${of(TAN, FDIF)}: note the <b>plus</b> in the denominator (opposite of the sum formula). Mixing the two signs is endemic.`,
          `<b>Mis-reading telescoping series.</b> The whole game is rewriting the general term as ${TAN}(${a}) − ${TAN}(${b}) where consecutive terms cancel. If your “difference” doesn’t telescope, your ${a}, ${b} split is wrong.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> Make “<b>compute ${XY} first</b>” your automatic first move on any ${TATB} problem. That one number tells you whether you’re in the clean case (${XY}${NB}<${NB}1) or the ±π case (${XY}${NB}>${NB}1), and the ±π omission is, by a wide margin, the most expensive mistake in this chapter. For series, train your eye to spot the ${FAB} shape hiding inside denominators like ${NSQ}.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `<b>Arctangent sum</b> (compute ${XY} first!):`, note: '' },
          { f: `${XY}${NB}<${NB}1`, note: `${TATB} = ${of(TAN, FSUM)}` },
          {
            f: `${XY}${NB}>${NB}1, ${x}, ${y}${NB}>${NB}0`,
            note: `+π to the above. ${XY}${NB}>${NB}1, ${x}, ${y}${NB}<${NB}0: −π.`,
          },
          {
            f: `<b>Arctangent difference:</b> ${of(TAN, x)} − ${of(TAN, y)} = ${of(TAN, FDIF)} (${XY}${NB}>${NB}−1)`,
            note: 'note the + denominator.',
          },
          {
            f: '<b>Doubles</b>',
            note: `2${NB}${of(TAN, x)} = ${of(TAN, F2X_M)} (${ABSX}${NB}<${NB}1)<br>= ${of(SIN, F2X_P)} (${ABSX}${NB}≤${NB}1)<br>= ${of(COS, F1MX_P)} (${x}${NB}≥${NB}0).`,
          },
          {
            f: '<b>Triples</b>',
            note: `3${NB}${of(SIN, x)} = ${SIN}(3${x} − 4${x}<sup>3</sup>) (${ABSX}${NB}≤${NB}${H}); 3${NB}${of(COS, x)} = ${COS}(4${x}<sup>3</sup> − 3${x}) (${x} ∈ ${iv(H, '1')}).`,
          },
          {
            f: '<b>Telescoping series</b>',
            note: `spot ${FAB} ⇒ ${of(TAN, a)} − ${of(TAN, b)}; consecutive terms cancel.`,
          },
        ],
        aids: [
          '“Sum over one-minus, difference over one-plus.”: the denominators.',
          `“${XY} over one ⇒ add a π (subtract it when both are negative).”: the correction trigger.`,
          '“Double the angle, halve your confidence: check the domain.”',
        ],
      },
      { t: 'fig', id: 'm12-02-fig-2.8' },
    ],
  },

  // ──────────────── Topic 04 · pp. 157–164 ────────────────
  {
    n: '04',
    title: 'Graphs, Composite Evaluation & Simplification',
    kalam: 'Master the right-triangle method and the standard substitutions, and most of the chapter’s “scary-looking” problems become one-liners.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This topic turns the identities into tools. <b>CBSE Boards</b> asks composite evaluations like cos(${of(SIN, fr('3', '5'))}) and substitution simplifications as 2–4 mark questions, and expects you to sketch or read inverse-function graphs. <b>CUET</b> sets rapid “find tan(${of(SIN, x)})” conversions. <b>JEE Main & Advanced</b> lean hard on the substitution technique: recognising that ${of(TAN, FAMOUS)} collapses to ${H}${NB}${of(TAN, x)} is a recurring move. Master the <b>right-triangle method</b> and the <b>standard substitutions</b>, and most of the chapter’s “scary-looking” problems become one-liners.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'This topic answers two practical questions the earlier ones set up but didn’t fully resolve: <b>“What does an inverse trig function look like?”</b> (its graph) and <b>“How do I evaluate or simplify an expression that mixes a trig function with an inverse one?”</b> (composites and substitutions).',
      },
      {
        t: 'p',
        html: `<b>Graphs: reflection across ${y} = ${x}.</b> Every inverse function is the <b>mirror image of its parent across the line</b> ${y} = ${x}, restricted to the principal branch. Take ${y} = ${tf('sin', x)} on its branch ${SINB} (a rising S-piece from ${iv(`−${P2}`, '−1', '(', ')')} to ${iv(P2, '1', '(', ')')}); flip it across ${y} = ${x} and you get ${y} = ${of(SIN, x)}, rising from ${iv('−1', `−${P2}`, '(', ')')} to ${iv('1', P2, '(', ')')}. The reflection swaps domain and range, which is why the inverse’s domain is the parent’s range and vice versa, the fact you memorised in Topic 01 now made visible. <b>Think about it this way:</b> a graph and its mirror across ${y} = ${x} agree on shape but trade axes, so monotonic-increasing stays increasing, the odd ${SIN} / ${TAN} keep their origin symmetry, and the ${COS} / ${COT} curves fall from left to right.`,
      },
      {
        t: 'p',
        html: `<b>Composites: the right-triangle method.</b> To evaluate something like cos(${of(SIN, x)}), name the inner angle: let ${th} = ${of(SIN, x)}, so ${tf('sin', th)} = ${x}. Now ${th} is a genuine angle, so draw a right triangle in which ${tf('sin', th)} = ${fr(x, '1')}: opposite = ${x}, hypotenuse = 1, and by Pythagoras the adjacent side = ${R1MX2}. Then read off whatever the outer function asks:<br>${tf('cos', th)} = ${fr(R1MX2, '1')} = ${R1MX2}.<br>The whole method is: <b>turn the inverse function into a triangle, then read the answer off the triangle.</b> It replaces memorising a dozen composite formulas with one reusable picture.`,
      },
      {
        t: 'p',
        html: `<b>Simplification: the standard substitution.</b> When an expression hides a ${R1MX2}, the substitution ${x} = ${tf('sin', th)} (or ${tf('cos', th)}) turns it into a clean trig expression; a ${R1PX2} calls for ${x} = ${tf('tan', th)}; a ${RX2M1} calls for ${x} = ${tf('sec', th)}. After substituting, the messy algebraic argument becomes a recognisable angle, the inverse function “cancels” it, and you convert back. This is the single most powerful problem-solving pattern in the chapter, and the Triangle method and substitution recipe part makes it a recipe.`,
      },
      { t: 'fig', id: 'm12-02-fig-2.9' },

      { t: 'part', title: 'Key results, conversions and graph properties' },
      {
        t: 'p',
        html: '<b>Composite-value results</b> (all from the right-triangle method; assume principal values):',
      },
      {
        t: 'table',
        title: null,
        head: ['Expression', 'Value', 'Expression', 'Value'],
        rows: [
          [`sin(${of(COS, x)})`, R1MX2, `cos(${of(SIN, x)})`, R1MX2],
          [`tan(${of(SIN, x)})`, fr(x, R1MX2), `tan(${of(COS, x)})`, fr(R1MX2, x)],
          [`sin(${of(TAN, x)})`, fr(x, R1PX2), `cos(${of(TAN, x)})`, fr('1', R1PX2)],
          [`sec(${of(TAN, x)})`, R1PX2, `tan(${of(SEC, x)})`, `${RX2M1} (${x}${NB}≥${NB}1)`],
        ],
      },
      {
        t: 'p',
        html: `<b>Conversion formulas</b> (write any inverse function as another; stated for ${x} ∈ ${iv('0', '1', '(', ')')}, adjust by sign/branch otherwise):`,
      },
      {
        t: 'formula',
        kicker: 'Conversion formulas',
        main: `${of(SIN, x)} = ${of(COS, R1MX2)} = ${of(TAN, fr(x, R1MX2))} = ${of(CSC, fr('1', x))} (0${NB}<${NB}${x}${NB}<${NB}1)<br>${of(COS, x)} = ${of(SIN, R1MX2)} = ${of(TAN, fr(R1MX2, x))} = ${of(SEC, fr('1', x))} (0${NB}<${NB}${x}${NB}<${NB}1)<br>${of(TAN, x)} = ${of(SIN, fr(x, R1PX2))} = ${of(COS, fr('1', R1PX2))} (${x}${NB}≥${NB}0)`,
        legend: [`${x} = the argument, 0${NB}<${NB}${x}${NB}<${NB}1 on the first two lines (outside it, adjust by sign and branch)`],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Standard substitutions</b> (memorise the trigger → substitution map):',
      },
      {
        t: 'table',
        title: null,
        head: ['If the expression contains…', 'Substitute', 'Because'],
        rows: [
          [`${R1MX2} or 1 − ${X2}`, `${x} = ${tf('sin', th)} or ${x} = ${tf('cos', th)}`, `1 − sin<sup>2</sup>${NB}${th} = cos<sup>2</sup>${NB}${th}`],
          [`${R1PX2} or 1 + ${X2}`, `${x} = ${tf('tan', th)}`, `1 + tan<sup>2</sup>${NB}${th} = sec<sup>2</sup>${NB}${th}`],
          [`${RX2M1} or ${X2} − 1`, `${x} = ${tf('sec', th)}`, `sec<sup>2</sup>${NB}${th} − 1 = tan<sup>2</sup>${NB}${th}`],
        ],
      },
      {
        t: 'p',
        html: '<b>Graph properties</b> (the six inverse functions at a glance):',
      },
      {
        t: 'table',
        title: null,
        head: ['y =', 'Domain', 'Range', 'Behaviour', 'Key points / asymptotes'],
        rows: [
          [
            of(SIN, x),
            iv('−1', '1'),
            SINB,
            'increasing, odd',
            `${iv('0', '0', '(', ')')}, ${iv('1', P2, '(', ')')}, ${iv('−1', `−${P2}`, '(', ')')}`,
          ],
          [of(COS, x), iv('−1', '1'), COSB, 'decreasing', `${iv('0', P2, '(', ')')}, ${iv('1', '0', '(', ')')}, ${iv('−1', 'π', '(', ')')}`],
          [of(TAN, x), 'ℝ', TANB, 'increasing, odd', `asymptotes ${y} = ±${P2}; ${iv('0', '0', '(', ')')}`],
          [of(COT, x), 'ℝ', iv('0', 'π', '(', ')'), 'decreasing', `asymptotes ${y} = 0, ${y} = π; ${iv('0', P2, '(', ')')}`],
          [of(SEC, x), `${ABSX} ≥ 1`, `${COSB} − {${P2}}`, 'increasing (each piece)', `asymptote ${y} = ${P2}`],
          [of(CSC, x), `${ABSX} ≥ 1`, `${SINB} − {0}`, 'decreasing (each piece), odd', `asymptote ${y} = 0`],
        ],
      },

      { t: 'part', title: 'The triangle method and substitution recipe' },
      {
        t: 'proc',
        title: 'Procedure A: Evaluating composites by triangle',
        steps: [
          `Name the inner angle: ${th} = (inverse function), giving one trig ratio of ${th} directly.`,
          'Build a right triangle with that ratio; use Pythagoras for the third side.',
          'Read off the outer trig function as the appropriate ratio. Mind the sign from the branch.',
        ],
      },
      {
        t: 'p',
        html: `<b>Demonstration:</b> evaluate tan(${of(COS, x)}). Let ${th} = ${of(COS, x)} ⇒ ${tf('cos', th)} = ${fr(x, '1')}: adjacent = ${x}, hyp = 1, opposite = ${R1MX2}.<br>Then ${tf('tan', th)} = ${fr(R1MX2, x)}.`,
      },
      {
        t: 'proc',
        title: 'Procedure B: Simplification by substitution',
        steps: [
          `Spot the radical signature (${R1MX2}, ${R1PX2}, ${RX2M1}) and substitute per the table.`,
          'Simplify the trig expression using half/double-angle identities until the argument becomes sin(angle), tan(angle), etc.',
          `Apply the inverse function (it cancels), then substitute ${th} back in terms of ${x}.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Demonstration (the famous one):</b> simplify ${of(TAN, FAMOUS)}. Put ${x} = ${tf('tan', th)}, so ${R1PX2} = ${tf('sec', th)}:<br>${FAMOUS} = ${fr(`${tf('sec', th)} − 1`, tf('tan', th))}<br>= ${fr(`1 − ${tf('cos', th)}`, tf('sin', th))}<br>= 2${NB}sin<sup>2</sup>(${TH_2}) ÷ [2${NB}sin(${TH_2}) cos(${TH_2})]<br>= ${tf('tan', TH_2)}.<br>Therefore ${TAN}(${tf('tan', TH_2)}) = ${TH_2} = ${H}${NB}${of(TAN, x)}. A frightening expression collapses to half an arctangent.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Evaluate cos(${of(SIN, fr('3', '5'))}).`,
        steps: [
          `Let ${th} = ${of(SIN, fr('3', '5'))} ⇒ ${tf('sin', th)} = ${fr('3', '5')} (opposite 3, hyp 5, adjacent 4). So<br>cos(${of(SIN, fr('3', '5'))}) = ${tf('cos', th)} = ${fr('4', '5')}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / Speed Trap',
        q: `sin(${of(TAN, x)}) equals: (a) ${fr(x, R1MX2)} (b) ${fr(x, R1PX2)} (c) ${fr('1', R1PX2)} (d) ${R1PX2}`,
        steps: [
          `<b>Fast solution.</b> ${th} = ${of(TAN, x)} ⇒ ${tf('tan', th)} = ${fr(x, '1')}: opposite ${x}, adjacent 1, hyp ${R1PX2}.<br>So ${tf('sin', th)} = ${fr(x, R1PX2)}.`,
          `<b>Speed tip:</b> “${TAN} ⇒ hyp is ${R1PX2}”; option (a) is the ${SIN} triangle, the classic mix-up.`,
        ],
        ans: '(b)',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Simplify ${of(SIN, F2X_P)} for ${ABSX}${NB}≤${NB}1.`,
        steps: [
          `Substitute ${x} = ${tf('tan', th)}, so ${th} = ${of(TAN, x)} and (for ${ABSX}${NB}≤${NB}1, i.e. |⁠${th}|${NB}≤${NB}${P4}):<br>${F2X_P} = ${fr(`2${NB}${tf('tan', th)}`, `1 + tan<sup>2</sup>${NB}${th}`)} = sin${NB}2${th}.`,
          `Hence ${SIN}(sin${NB}2${th}) = 2${th} (legal since 2${th} ∈ ${SINB}), giving<br>${of(SIN, F2X_P)} = 2${NB}${of(TAN, x)}.`,
          '(This is the bridge to Topic 03’s multiple-angle identity: same result, reached by substitution.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Simplify ${of(TAN, FCOS)} for ${x} ∈ ${TANB}.`,
        steps: [
          `Convert to half-angles. Using ${tf('cos', x)} = cos<sup>2</sup>${NB}${X_2} − sin<sup>2</sup>${NB}${X_2} and 1 + ${tf('sin', x)} = (${C2} + ${S2})<sup>2</sup>:<br>${FCOS}<br>= [(${C2} − ${S2})(${C2} + ${S2})] ÷ (${C2} + ${S2})<sup>2</sup><br>= (${C2} − ${S2}) ÷ (${C2} + ${S2}).`,
          `Divide top and bottom by ${C2}:<br>= (1 − ${tf('tan', X_2)}) ÷ (1 + ${tf('tan', X_2)}) = tan(${P4} − ${X_2}).`,
          `Therefore<br>${of(TAN, FCOS)} = ${P4} − ${X_2}.`,
          `(The whole problem is the recognition that 1 + ${tf('sin', x)} is a perfect square of half-angles.)`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Evaluate tan(${of(COS, fr('5', '13'))}).`,
            a: `${th} = ${of(COS, fr('5', '13'))}: adjacent 5, hyp 13, opposite 12; ${tf('tan', th)} = ${fr('12', '5')}.`,
          },
          {
            q: `<b>[CUET]</b> Find sec(${of(TAN, fr('3', '4'))}).`,
            a: `${th} = ${of(TAN, fr('3', '4'))}: opp 3, adj 4, hyp 5; ${tf('sec', th)} = ${fr('5', '4')}.`,
          },
          {
            q: `<b>[JEE Main]</b> Show ${of(COS, x)} = ${of(TAN, fr(R1MX2, x))} for ${x} ∈ ${iv('0', '1', '(', ']')} using a triangle.`,
            a: `${th} = ${of(COS, x)} ⇒ ${tf('cos', th)} = ${fr(x, '1')}, opposite ${R1MX2}, so<br>${tf('tan', th)} = ${fr(R1MX2, x)} and ${th} = ${of(TAN, fr(R1MX2, x))}.`,
          },
          {
            q: `<b>[JEE Main]</b> Simplify ${of(COS, F1MX_P)} for ${x}${NB}≥${NB}0.`,
            a: `Put ${x} = ${tf('tan', th)}: ${F1MX_P} = cos${NB}2${th}, so ${COS}(cos${NB}2${th}) = 2${th} = 2${NB}${of(TAN, x)} (valid ${x}${NB}≥${NB}0).`,
          },
          {
            q: `<b>[JEE Advanced]</b> Simplify<br>${TAN}${NB}√(${fr(`1 − ${tf('cos', x)}`, `1 + ${tf('cos', x)}`)})<br>for ${x} ∈ ${iv('0', 'π', '(', ')')}.`,
            a: `√(${fr(`1 − ${tf('cos', x)}`, `1 + ${tf('cos', x)}`)}) = √[2${NB}sin<sup>2</sup>(${X_2}) ÷ (2${NB}cos<sup>2</sup>(${X_2}))] = ${tf('tan', X_2)} (positive on ${iv('0', 'π', '(', ')')}), so the value is ${TAN}(${tf('tan', X_2)}) = ${X_2}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `cos(${of(SIN, x)}) =`,
        opts: [
          { label: x, nudge: null },
          { label: R1MX2, nudge: null },
          { label: fr('1', R1MX2), nudge: null },
          {
            label: fr(x, R1MX2),
            nudge: `<b>Trap (d):</b> that’s tan(${of(SIN, x)}), reading the wrong ratio.`,
          },
        ],
        correct: 1,
        solution: `Triangle: ${tf('sin', th)} = ${x} ⇒ ${tf('cos', th)} = ${R1MX2}.`,
      },
      {
        t: 'mcq',
        q: `The graph of ${y} = ${of(COS, x)} is:`,
        opts: [
          { label: `increasing on ${iv('−1', '1')}`, nudge: null },
          { label: `decreasing on ${iv('−1', '1')}`, nudge: null },
          { label: 'odd', nudge: 'It is not odd (it’s the π − reflection type from Topic 02).' },
          { label: 'unbounded', nudge: null },
        ],
        correct: 1,
        solution: `${COS} falls from ${iv('−1', 'π', '(', ')')} to ${iv('1', '0', '(', ')')}.`,
      },
      {
        t: 'mcq',
        q: `${of(TAN, FAMOUS)} =`,
        opts: [
          { label: of(TAN, x), nudge: null },
          { label: `${H}${NB}${of(TAN, x)}`, nudge: null },
          { label: `2${NB}${of(TAN, x)}`, nudge: null },
          { label: `${P4} − ${of(TAN, x)}`, nudge: null },
        ],
        correct: 1,
        solution: `Substitute ${x} = ${tf('tan', th)}; the argument becomes ${tf('tan', TH_2)} (the Triangle method and substitution recipe part).`,
      },
      {
        t: 'mcq',
        q: `${of(SIN, F2X_P)} = 2${NB}${of(TAN, x)} requires:`,
        opts: [
          { label: `${x} ≥ 1`, nudge: null },
          { label: `${ABSX} ≤ 1`, nudge: null },
          { label: `all ${x}`, nudge: null },
          { label: `${x} ≤ 0`, nudge: null },
        ],
        correct: 1,
        solution: `The doubled angle must stay in the ${SIN} branch ⇒ ${ABSX}${NB}≤${NB}1 (the third worked example; consistent with Topic 03).`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Reading the wrong ratio off the triangle.</b> cos(${of(SIN, x)}) = ${R1MX2} but tan(${of(SIN, x)}) = ${fr(x, R1MX2)}: set up the triangle once and label all three sides before reading.`,
          `<b>Dropping the sign/branch.</b> The triangle gives magnitudes; for negative ${x} or angles in ${iv(P2, 'π')} (the obtuse half of cosine’s branch), restore the correct sign from the range.`,
          `<b>Wrong substitution.</b> Matching the radical to its substitution is everything: ${R1PX2} → ${x} = ${tf('tan', th)}, not ${tf('sin', th)}. The wrong choice leaves an un-simplifiable mess.`,
          `<b>Forgetting the validity window after simplifying.</b> ${of(SIN, F2X_P)} = 2${NB}${of(TAN, x)} holds only for ${ABSX}${NB}≤${NB}1; outside it the answer is π − 2${NB}${of(TAN, x)} for ${x}${NB}>${NB}1 and −π − 2${NB}${of(TAN, x)} for ${x}${NB}<${NB}−1: the same branch-folding caution from every prior topic.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> For any composite <i>f</i>(<i>g</i><sup>−1</sup>(${x})), draw the triangle immediately: don’t hunt for a memorised formula. And for any expression with a radical, name its signature and substitute on reflex: ${R1MX2} → sin, ${R1PX2} → tan, ${RX2M1} → sec. These two habits convert the majority of this topic’s problems into mechanical exercises.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Graphs</b>',
            note: `each <i>f</i><sup>−1</sup> is the parent trig graph mirrored across ${y} = ${x} (restricted to the branch). Increasing: ${SIN}, ${TAN}; ${SEC} on each of its two pieces. Decreasing: ${COS}, ${COT}; ${CSC} on each of its two pieces. Odd (origin-symmetric): ${SIN}, ${TAN}, ${CSC}. Asymptotes: ${TAN} → ±${P2}, ${COT} → 0, π.`,
          },
          {
            f: '<b>Triangle method</b>',
            note: `set ${th} = inverse function, build the right triangle, read the outer ratio.`,
          },
          {
            f: `cos(${of(SIN, x)}) = ${R1MX2}, sin(${of(TAN, x)}) = ${fr(x, R1PX2)},<br>sec(${of(TAN, x)}) = ${R1PX2}, tan(${of(SEC, x)}) = ${RX2M1} (for ${x}${NB}≥${NB}1; for ${x}${NB}≤${NB}−1 it is −${RX2M1}).`,
            note: '',
          },
          {
            f: '<b>Substitution triggers</b>',
            note: `${R1MX2} ⇒ ${x} = ${tf('sin', th)}; ${R1PX2} ⇒ ${x} = ${tf('tan', th)}; ${RX2M1} ⇒ ${x} = ${tf('sec', th)}.`,
          },
          {
            f: '<b>Signature results</b>',
            note: `${of(TAN, FAMOUS)} = ${H}${NB}${of(TAN, x)};<br>${of(TAN, FCOS)} = ${P4} − ${X_2};<br>${of(SIN, F2X_P)} = 2${NB}${of(TAN, x)} (${ABSX}${NB}≤${NB}1).`,
          },
        ],
        aids: [
          `“Inverse = mirror across ${y} = ${x}.”`,
          '“Draw the triangle, read the ratio.”',
          '“Root one-minus ⇒ sine; root one-plus ⇒ tan; root minus-one ⇒ sec.”',
        ],
      },
      { t: 'fig', id: 'm12-02-fig-2.10' },
    ],
  },
];
