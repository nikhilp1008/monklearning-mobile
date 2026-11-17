import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Topics 02–03: the book's Subtopics 02 "Equations of a Line"
 * (pp. 808–818) and 03 "Distance Formulas" (pp. 819–826) of the Class 11
 * Mathematics Master Reference (October 2026 edition), word for word.
 * Subtopic 04 starts on p. 827. Each subtopic's Exam Relevance box is the
 * "Exam relevance" part; Sections 1–8 are the next parts, titled from the
 * section's own name in sentence case.
 * Figures: 9.4 (caption p. 808, drawn p. 809) at the end of Topic 02's
 * Concept intuition, after "Think about it this way…"; 9.5 (caption p. 811,
 * drawn p. 812) after Theorem 2; 9.6 (caption p. 813, drawn p. 814) after
 * Theorem 3; 9.7 (caption p. 819, drawn p. 820) at the end of Topic 03's
 * Concept intuition, before "Domain of Validity & Edge Cases". No unnumbered
 * drawings. Every fraction is stacked (<frac>); no em dashes.
 */
const NB = '\u00a0';
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const sb = (s: string, k: string) => `<i>${s}</i><sub>${k}</sub>`;
const PT = (u: string, v: string) => `(${u},${NB}${v})`;

const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const m = I('m');
const p = I('p');
const r = I('r');
const x = I('x');
const y = I('y');
const A = I('A');
const B = I('B');
const C = I('C');
const N = I('N');
const O = I('O');
const P = I('P');
const Q = I('Q');
const R = I('R');
const w = I('ω');
const th = I('θ');
const x0 = sb('x', '0');
const y0 = sb('y', '0');
const x1 = sb('x', '1');
const y1 = sb('y', '1');
const x2 = sb('x', '2');
const y2 = sb('y', '2');
const m1 = sb('m', '1');
const C1 = sb('C', '1');
const C2 = sb('C', '2');
const L1 = `ℓ<sub>1</sub>`;
const L2 = `ℓ<sub>2</sub>`;
const P1 = PT(x1, y1);
const P2 = PT(x2, y2);
const AB = `${A},${NB}${B}`;
const COSW = `cos${NB}${w}`;
const SINW = `sin${NB}${w}`;
const COST = `cos${NB}${th}`;
const SINT = `sin${NB}${th}`;
const GEN = `<i>Ax</i> + <i>By</i> + ${C} = 0`;
const AX1 = `<i>Ax</i><sub>1</sub> + <i>By</i><sub>1</sub>`;
const SQ = `√(${A}<sup>2</sup> + ${B}<sup>2</sup>)`;
const SQ_PM = `±√(${A}<sup>2</sup> + ${B}<sup>2</sup>)`;
const SUMSQ = `${A}<sup>2</sup> + ${B}<sup>2</sup>`;
const DIST = fr(`|${AX1} + ${C}|`, SQ);
const SIGNED = fr(`${AX1} + ${C}`, SQ);
const PARD = fr(`|${C1} − ${C2}|`, SQ);
const SYM = `${fr(`${x} − ${x1}`, COST)} = ${fr(`${y} − ${y1}`, SINT)}`;
const POINT_SLOPE = `${y} − ${y1} = ${m}(${x} − ${x1})`;
const TWO_POINT = `${y} − ${y1} = ${fr(`${y2} − ${y1}`, `${x2} − ${x1}`)}(${x} − ${x1})`;
const INTERCEPT = `${fr(x, a)} + ${fr(y, b)} = 1`;
const NORMAL = `${x}${NB}${COSW} + ${y}${NB}${SINW} = ${p}`;
const NEG_AB = `−${fr(A, B)}`;
const NEG_CA = `−${fr(C, A)}`;
const NEG_CB = `−${fr(C, B)}`;
const HALF = fr('1', '2');
const R3_2 = fr('√3', '2');
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 02 · pp. 808–818 ────────────────
  {
    n: '02',
    title: 'Equations of a Line',
    kalam: 'A line is the simplest curve there is, yet there are six different costumes it can wear.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the engine room of coordinate geometry: every later result rides on writing a line’s equation correctly. CBSE Class 11 finals reliably ask 2–4 mark questions on point-slope, intercept, or “reduce to a given form” ${ESTIMATE}. JEE Main almost guarantees a question on extracting slope/intercepts from ${GEN} or on the normal form ${ESTIMATE}. JEE Advanced rarely tests a form in isolation ${ESTIMATE} but uses these as the substrate for locus, family-of-lines, and triangle problems, and quietly punishes the sign errors that creep into the normal form.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'A line is the simplest curve there is, yet there are six different costumes it can wear. Why so many? Because in real problems, you are handed different clues: sometimes a point and a direction, sometimes two points, sometimes where the line crosses the axes, sometimes how far it sits from the origin. Each form is just the answer to “given <b>this</b> clue, what’s the fastest way to write the equation?”',
      },
      {
        t: 'p',
        html: 'Think of it like giving someone directions to a chai stall in a crowded bazaar. You could say “start at the gate and walk at this exact angle” (that’s the <b>point-slope</b> idea: one point, one direction). Or “it’s on the straight line connecting the temple and the post office” (<b>two-point form</b>). Or “it cuts the main road 3 shops in and the side lane 5 shops in” (<b>intercept form</b>). Or “stand at the central fountain, face this compass bearing, walk 7 metres, and you hit the line head-on” (<b>normal form</b>). Every description pins down the same line; they’re translations of one another.',
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> all six forms are dialects of a single sentence: ${GEN}, the <b>general form</b>. Any straight line on the plane (slanted, horizontal, or bolt upright) can be written this way, and conversely every such equation (as long as ${A} and ${B} aren’t both zero) draws a straight line. So the skill that actually matters in exams isn’t memorising six formulas; it’s fluently <b>translating</b> between them: pull the slope out of the general form, or rewrite a point-slope equation in intercept form, on demand.`,
      },
      { t: 'fig', id: 'm11-09-fig-9.4' },
      {
        t: 'p',
        html: `<b>Domain of Validity & Edge Cases.</b> Each costume has a situation where it simply doesn’t fit:<br>• <b>Slope-intercept</b> ${y} = <i>mx</i> + ${c} and <b>point-slope</b> both assume a slope exists: they cannot describe a <b>vertical line</b> (slope undefined). A vertical line is always ${x} = ${a}; a horizontal line is ${y} = ${b}.<br>• <b>Intercept form</b> ${INTERCEPT} breaks if the line passes through the <b>origin</b> (both intercepts zero: you’d divide by zero) or is parallel to either axis (one intercept missing).<br>• <b>Normal form</b> insists ${p}${NB}≥${NB}0 (a distance can’t be negative); getting ${p} right in sign is the single most common slip, covered below.<br>• <b>General form</b> is the only one that never fails; that’s why it’s the universal fallback.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `Let ${m} denote slope, ${P1} a known point, ${c} the ${y}-intercept, ${a}, ${b} the ${x}- and ${y}-intercepts.`,
      },
      {
        t: 'formula',
        kicker: 'Horizontal / vertical lines',
        main: `${y} = ${b} (horizontal), ${x} = ${a} (vertical)`,
        legend: [`${a} = the ${x}-intercept`, `${b} = the ${y}-intercept`],
        note: null,
      },
      { t: 'p', html: `<b>Point-slope form</b>: line through ${P1} with slope ${m}:` },
      {
        t: 'formula',
        kicker: 'Point-slope form',
        main: `${POINT_SLOPE} (${m} defined)`,
        legend: [`${m} = the slope`, `${P1} = the known point`],
        note: null,
      },
      { t: 'p', html: `<b>Two-point form</b>: line through ${P1} and ${P2}:` },
      {
        t: 'formula',
        kicker: 'Two-point form',
        main: `${TWO_POINT}, ${x1}${NB}≠${NB}${x2}`,
        legend: [`${P1} = the first point`, `${P2} = the second point`],
        note: null,
      },
      { t: 'p', html: `<b>Slope-intercept form</b>: slope ${m}, ${y}-intercept ${c}:` },
      {
        t: 'formula',
        kicker: 'Slope-intercept form',
        main: `${y} = <i>mx</i> + ${c}`,
        legend: [`${m} = the slope`, `${c} = the ${y}-intercept`],
        note: null,
      },
      { t: 'p', html: `<b>Intercept form</b>: ${x}-intercept ${a}, ${y}-intercept ${b}:` },
      {
        t: 'formula',
        kicker: 'Intercept form',
        main: `${INTERCEPT}<br>${a}${NB}≠${NB}0, ${b}${NB}≠${NB}0`,
        legend: [`${a} = the ${x}-intercept`, `${b} = the ${y}-intercept`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Normal (perpendicular) form</b>: perpendicular distance ${p} from origin, normal making angle ${w} with +${x}-axis:`,
      },
      {
        t: 'formula',
        kicker: 'Normal (perpendicular) form',
        main: `${NORMAL}<br>${p}${NB}≥${NB}0, 0 ≤ ${w} < 360°`,
        legend: [`${p} = the perpendicular distance from the origin`, `${w} = the angle the normal makes with the +${x}-axis`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'General form',
        main: `${GEN}<br>${AB} not both zero`,
        legend: [`${AB} = the coefficients of ${x} and ${y}`, `${C} = the constant term`],
        note: null,
      },
      { t: 'p', html: `<b>Reductions of the general form</b> (${GEN}):` },
      {
        t: 'formula',
        kicker: 'Reductions of the general form',
        main: `Slope: ${m} = ${NEG_AB} (${B}${NB}≠${NB}0); ${y}-intercept ${c}${NB}=${NB}${NEG_CB}<br>Intercepts: ${a} = ${NEG_CA} (${A}${NB}≠${NB}0), ${b} = ${NEG_CB} (${B}${NB}≠${NB}0)<br>Normal form: ${p} = ${fr(`|${C}|`, SQ)}`,
        legend: [`${m} = the slope`, `${c} = the ${y}-intercept`, `${a}, ${b} = the ${x}- and ${y}-intercepts`, `${p} = the perpendicular distance from the origin`],
        note: `Normal form: divide by ${SQ_PM}, sign chosen so the right side is positive.`,
      },

      { t: 'part', title: 'Theorems, proofs and standard derivations' },
      {
        t: 'p',
        html: `<b>Theorem 1: Point-slope form</b><br><b>Given:</b> A non-vertical line with slope ${m} through the fixed point ${P1}.<br><b>To Prove:</b> Every point ${PT(x, y)} on the line satisfies ${POINT_SLOPE}.<br><b>Proof.</b> Let ${PT(x, y)} be any point on the line other than ${P1}. The slope computed from these two points must equal the line’s slope ${m}:<br>${fr(`${y} − ${y1}`, `${x} − ${x1}`)} = ${m} ⟹ ${POINT_SLOPE}.<br>The point ${P1} itself satisfies this (both sides become 0), so the equation holds for <b>every</b> point of the line. ■`,
      },
      {
        t: 'p',
        html: `<b>Everything else descends from this.</b> Putting a second point ${P2} in place of ${m} gives the <b>two-point form</b>; setting ${x1} = 0, ${y1} = ${c} gives ${y} = <i>mx</i> + ${c}, the <b>slope-intercept form</b>.`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2: Intercept form</b><br><b>Given:</b> A line meeting the ${x}-axis at ${PT(a, '0')} and the ${y}-axis at ${PT('0', b)}, with ${a}, ${b}${NB}≠${NB}0.<br><b>To Prove:</b> ${INTERCEPT}.<br><b>Proof.</b> Apply the two-point form to ${PT(a, '0')} and ${PT('0', b)}:<br>${y} − 0 = ${fr(`${b} − 0`, `0 − ${a}`)}(${x} − ${a})<br>⟹ ${y} = −${fr(b, a)}(${x} − ${a}).<br>Multiply by ${a}, then divide by <i>ab</i>:<br><i>ay</i> = −${b}(${x} − ${a}) ⇒ <i>bx</i> + <i>ay</i> = <i>ab</i><br>⇒ ${INTERCEPT}. ■`,
      },
      { t: 'fig', id: 'm11-09-fig-9.5' },
      {
        t: 'p',
        html: `<b>Theorem 3: Normal form</b><br><b>Given:</b> A line whose perpendicular distance from the origin ${O} is ${p}${NB}>${NB}0, where the perpendicular <i>ON</i> (with ${N} the foot on the line) makes angle ${w} with the positive ${x}-axis.<br><b>To Prove:</b> ${NORMAL}.<br><b>Construction:</b> Mark the foot ${N}. Since <i>ON</i> = ${p} along direction ${w}, its coordinates are ${N} = ${PT(`${p}${NB}${COSW}`, `${p}${NB}${SINW}`)}.<br><b>Proof.</b> The line passes through ${N} and is <b>perpendicular</b> to <i>ON</i>. The direction <i>ON</i> has slope tan${NB}${w}, so the line’s slope is the negative reciprocal −${fr(COSW, SINW)}. By point-slope form through ${N}:<br>${y} − ${p}${NB}${SINW} = −${fr(COSW, SINW)}(${x} − ${p}${NB}${COSW}).<br>Multiply through by ${SINW}:<br>${y}${NB}${SINW} − ${p}${NB}sin<sup>2</sup>${NB}${w}<br>= −${x}${NB}${COSW} + ${p}${NB}cos<sup>2</sup>${NB}${w}.<br>Collect and use sin<sup>2</sup>${NB}${w} + cos<sup>2</sup>${NB}${w} = 1:<br>${NORMAL}(cos<sup>2</sup>${NB}${w} + sin<sup>2</sup>${NB}${w})<br>= ${p}.<br><br>The slopes used need sin${NB}${w}${NB}≠${NB}0 and cos${NB}${w}${NB}≠${NB}0. If <i>ON</i> lies along an axis (${w} = 0°, 90°, 180° or 270°), the line is ${x} = ±${p} or ${y} = ±${p}, and ${NORMAL} gives exactly these, so the form holds for every ${w}. ■`,
      },
      { t: 'fig', id: 'm11-09-fig-9.6' },
      { t: 'p', html: 'This is the step students fumble, so the reasoning matters:' },
      {
        t: 'proc',
        title: 'Procedure: Reducing Ax + By + C = 0 to normal form',
        steps: [
          `Move the constant to the right: <i>Ax</i> + <i>By</i> = −${C}.`,
          `Divide both sides by ${SQ}, but choose the sign of the radical so the <b>right-hand side becomes positive</b>, because that right side will be ${p} and a distance must be non-negative. Concretely, pick the sign <b>opposite to that of</b> ${C}. (If ${C} = 0, the line passes through the origin, ${p} = 0, and either sign works.)`,
          `Read off<br>${COSW} = ${fr(A, SQ_PM)},<br><br>${SINW} = ${fr(B, SQ_PM)},<br><br>${p} = ${fr(`|${C}|`, SQ)}.`,
          `Determine ${w} from the <b>signs</b> of ${COSW} and ${SINW} together (they fix the quadrant), never from ${COSW} alone.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the equation of the line passing through ${PT('−2', '5')} and ${PT('3', '−1')}, and state its ${y}-intercept.`,
        steps: [
          `First the slope:<br>${m} = ${fr('−1 − 5', '3 − (−2)')} = ${fr('−6', '5')}.`,
          `Two-point (point-slope through ${PT('−2', '5')}):<br>${y} − 5 = −${fr('6', '5')}(${x} + 2)<br>⇒ 5${y} − 25 = −6${x} − 12<br>⇒ 6${x} + 5${y} − 13 = 0.`,
          `${y}-intercept: set ${x} = 0 ⇒ 5${y} = 13 ⇒ ${y} = ${fr('13', '5')}.`,
        ],
        ans: `6${x} + 5${y} − 13 = 0, ${y}-intercept = ${fr('13', '5')}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: `For the line 3${x} − 4${y} + 12 = 0, write down its slope, ${x}-intercept, and ${y}-intercept, fast.`,
        steps: [
          `<b>Speed approach.</b> Don’t rearrange the whole thing; use the reduction formulas directly.<br>• Slope = ${NEG_AB} = −${fr('3', '−4')} = ${fr('3', '4')}.<br>• ${x}-intercept: set ${y} = 0 ⇒ 3${x} = −12 ⇒ ${x}${NB}=${NB}−4.<br>• ${y}-intercept: set ${x} = 0 ⇒ −4${y} = −12 ⇒ ${y} = 3.`,
          `<b>The trap:</b> the slope is ${NEG_AB}, <b>not</b> ${fr(A, B)}.<br>A student who writes ${fr(A, B)} = ${fr('3', '−4')} = −${fr('3', '4')} gets the sign wrong, and the two answers ±${fr('3', '4')} are both tempting.<br>Anchor: rearranging to ${y} = ${fr('3', '4')}${x} + 3 shows the slope is positive, matching the fact that the line rises to the right.`,
        ],
        ans: `${m} = ${fr('3', '4')}, ${a} = −4, ${b} = 3`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level · multi-concept',
        q: `Find the equation of the line through ${PT('2', '3')} that is perpendicular to 4${x} − 3${y} + 7 = 0, and express it in intercept form.`,
        steps: [
          `<b>Step 1: slope of the given line</b> (reduction): ${m1} = ${NEG_AB} = −${fr('4', '−3')} = ${fr('4', '3')}.`,
          `<b>Step 2: perpendicular slope</b> (Topic 01 condition, flip-and-negate): ${m} = −${fr('1', m1)} = −${fr('3', '4')}.`,
          `<b>Step 3: point-slope through ${PT('2', '3')}:</b><br>${y} − 3 = −${fr('3', '4')}(${x} − 2)<br>⇒ 4${y} − 12 = −3${x} + 6<br>⇒ 3${x} + 4${y} − 18 = 0.`,
          `<b>Step 4: intercept form:</b> write 3${x} + 4${y} = 18, divide by 18:<br>${fr(x, '6')} + ${fr(y, '4.5')} = 1.`,
        ],
        ans: `3${x} + 4${y} − 18 = 0, ${fr(x, '6')} + ${fr(y, fr('9', '2'))} = 1`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Reduce ${x} − √3${NB}${y} + 8 = 0 to normal form, finding ${p} and ${w} exactly. Then explain why a naive sign choice would give a forbidden answer.`,
        steps: [
          `Here ${A} = 1, ${B} = −√3, ${C} = 8, and ${SQ} = √(1 + 3) = 2.`,
          `Move the constant: ${x} − √3${NB}${y} = −8. We must divide by ±2 so the right side is <b>positive</b>.`,
          `Since −8${NB}<${NB}0, choose the <b>negative</b> radical:<br>${fr(x, '−2')} − ${fr(`√3${NB}${y}`, '−2')} = ${fr('−8', '−2')}<br>⟹ −${HALF}${x} + ${R3_2}${y} = 4.`,
          `So<br>${COSW} = −${HALF},<br>${SINW} = ${R3_2},<br>${p} = 4.`,
          `${COSW}${NB}<${NB}0 and ${SINW}${NB}>${NB}0 place ${w} in the <b>second quadrant</b>: ${w} = 120°.`,
          `<b>The forbidden naive answer:</b> dividing by +2 instead would give ${HALF}${x} − ${R3_2}${y} = −4, i.e. “${p} = −4”, a negative distance, which is impossible. That alone tells you the sign choice was wrong. Also note: had you computed ${w} from ${COSW} = −${HALF} alone, you’d be unsure between 120° and 240°; only checking ${SINW}${NB}>${NB}0 pins it to 120°.`,
        ],
        ans: `${x}${NB}cos${NB}120° + ${y}${NB}sin${NB}120° = 4, ${p} = 4, ${w} = 120°`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `<b>[CBSE]</b> Find the equation of the line with slope −2 passing through ${PT('4', '−1')}.`, a: `2${x} + ${y} − 7 = 0.` },
          {
            q: `<b>[CBSE]</b> Find the equation of the line making an ${x}-intercept of 3 and a ${y}-intercept of −5 (use intercept form, then clear fractions).`,
            a: `${fr(x, '3')} + ${fr(y, '−5')} = 1 ⇒ 5${x} − 3${y} − 15 = 0.`,
          },
          {
            q: `<b>[JEE Main]</b> Reduce 5${x} + 12${y} − 39 = 0 to normal form and find ${p}, ${COSW}, and ${SINW}.`,
            a: `${p} = 3, ${COSW} = ${fr('5', '13')}, ${SINW} = ${fr('12', '13')} (${w} = tan<sup>−1</sup>${NB}${fr('12', '5')} ≈ 67.4°).`,
          },
          {
            q: `<b>[JEE Main]</b> Find the equation of the line through ${PT('1', '2')} that makes <b>equal</b> (non-zero) intercepts on the axes.`,
            a: `${x} + ${y} = 3.`,
          },
          {
            q: `<b>[JEE Advanced]</b> A line has positive ${x}- and ${y}-intercepts ${a} and ${b} with ${a} + ${b} = 9, and it passes through ${PT('2', '2')}. Find <b>all</b> such lines.`,
            a: `${a}<sup>2</sup> − 9${a} + 18 = 0 ⇒ ${a} = 3, ${b} = 6 or ${a} = 6, ${b} = 3, giving 2${x} + ${y} = 6 and ${x} + 2${y} = 6.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The slope and ${y}-intercept of the line 2${x} − 5${y} + 10 = 0 are:`,
        opts: [
          { label: `(${fr('2', '5')}, 2)`, nudge: null },
          { label: `(−${fr('2', '5')}, 2)`, nudge: `<b>(B)</b> used ${m} = +${fr(A, B)} with a stray sign: the −${fr(A, B)} slip.` },
          { label: `(${fr('2', '5')}, −2)`, nudge: `<b>(C)</b> took ${c} = +${fr(C, B)}, dropping the minus on the intercept.` },
          { label: `(${fr('5', '2')}, 2)`, nudge: `<b>(D)</b> inverted the slope: ${fr('5', '2')} is −${fr(B, A)}, the reciprocal of the correct ${fr('2', '5')}.` },
        ],
        correct: 0,
        solution: `${m} = ${NEG_AB} = −${fr('2', '−5')} = ${fr('2', '5')}; ${c} = ${NEG_CB} = −${fr('10', '−5')} = 2.`,
      },
      {
        t: 'mcq',
        q: `When reducing ${GEN} to normal form ${NORMAL}, we divide both sides by:`,
        opts: [
          { label: SQ, nudge: `<b>(A)</b> ignores the sign choice, producing a negative ${p} whenever ${C}${NB}>${NB}0.` },
          { label: `${SQ_PM}, choosing the sign so that ${p}${NB}≥${NB}0`, nudge: null },
          { label: SUMSQ, nudge: `<b>(C)</b> forgot the square root, so cos<sup>2</sup>${NB}${w} + sin<sup>2</sup>${NB}${w}${NB}≠${NB}1.` },
          { label: `|${C}|`, nudge: `<b>(D)</b> confuses the divisor with the numerator of ${p}.` },
        ],
        correct: 1,
        solution: `The whole point of the ± is to force a non-negative distance ${p}.`,
      },
      {
        t: 'mcq',
        q: 'A line passes through the origin. Which form <b>cannot</b> directly represent it?',
        opts: [
          { label: `Slope-intercept ${y} = <i>mx</i> + ${c}`, nudge: `<b>(A)</b> works fine with ${c} = 0 (${y} = <i>mx</i>).` },
          { label: 'Point-slope', nudge: `<b>(B)</b> works with ${P1} = ${PT('0', '0')}.` },
          { label: `Intercept form ${INTERCEPT}`, nudge: null },
          { label: 'General form', nudge: `<b>(D)</b> works: ${C} = 0 gives <i>Ax</i> + <i>By</i> = 0, which passes through the origin.` },
        ],
        correct: 2,
        solution: `A line through the origin has both intercepts equal to 0, so ${INTERCEPT} would require dividing by zero: impossible.`,
      },
      {
        t: 'mcq',
        q: `The ${x}-intercept and ${y}-intercept of 3${x} − 4${y} = 12 are, respectively:`,
        opts: [
          { label: '4 and −3', nudge: null },
          { label: '−4 and 3', nudge: '<b>(B)</b> flipped both signs.' },
          { label: '3 and −4', nudge: '<b>(C)</b> misread the coefficients 3 and 4 as the intercepts.' },
          { label: '4 and 3', nudge: `<b>(D)</b> forgot the negative on the ${y}-intercept.` },
        ],
        correct: 0,
        solution: `${y} = 0 ⇒ 3${x} = 12 ⇒ ${x} = 4; ${x} = 0 ⇒ −4${y} = 12 ⇒ ${y} = −3.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Slope from the general form.</b> It is ${m} = ${NEG_AB}, <b>not</b> ${fr(A, B)}. Forgetting the minus is the most frequent error on this topic.`,
          `<b>Negative ${p} in normal form.</b> Distance can’t be negative. If your reduction yields ${p}${NB}<${NB}0, you chose the wrong sign for the radical: flip it.`,
          `<b>Reading ${w} from one trig value.</b> ${COSW} = −${HALF} alone leaves 120° vs 240° ambiguous. Always use the <b>signs of</b> ${COSW} <b>and</b> ${SINW} <b>together</b> to fix the quadrant.`,
          `<b>Forcing intercept form on the wrong lines.</b> Lines through the origin, or parallel to an axis, have no valid intercept form: use slope-intercept or ${x} = ${a} or ${y} = ${b} instead.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> To find intercepts of any line equation in two seconds, set ${y} = 0 for the ${x}-intercept and ${x} = 0 for the ${y}-intercept: no need to memorise ${NEG_CA}, ${NEG_CB} and risk a sign error. The substitution carries the signs for you.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Horizontal / vertical', note: `${y} = ${b} or ${x} = ${a}.` },
          { f: 'Point-slope', note: `${POINT_SLOPE}.` },
          { f: 'Two-point', note: `${TWO_POINT}.` },
          { f: 'Slope-intercept', note: `${y} = <i>mx</i> + ${c}.` },
          { f: 'Intercept', note: `${INTERCEPT} (${a}, ${b}${NB}≠${NB}0).` },
          { f: 'Normal', note: `${NORMAL} (${p}${NB}≥${NB}0).` },
          { f: 'General', note: `${GEN} ⇒ ${m} = ${NEG_AB},<br>${a} = ${NEG_CA}, ${b} = ${NEG_CB}.` },
        ],
        aids: [
          '“Minus A over B” for slope from the general form.',
          `“${p} is positive, period” for the normal-form sign check.`,
          '“Set the other to zero” to read off intercepts.',
        ],
      },
    ],
  },

  // ──────────────── Topic 03 · pp. 819–826 ────────────────
  {
    n: '03',
    title: 'Distance Formulas',
    kalam: 'The natural next question a surveyor, an architect, or an exam-setter asks is: how far is something from that line?',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A perennial favourite, because it’s short to ask and easy to trap ${ESTIMATE}. CBSE Class 11 finals carry a 2–3 mark direct distance computation almost every year ${ESTIMATE}. JEE Main reliably has one question on the distance of a point from a line or between two parallel lines ${ESTIMATE}, usually with a normalization trap baked in. JEE Advanced uses the <b>symmetric (distance) form</b> to find distances to intersection points and to set up locus problems, where it quietly outperforms brute-force algebra.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'You already know how to write a line (Topic 02). The natural next question a surveyor, an architect, or an exam-setter asks is: how far is something from that line? If a railway track is the line and your house is a point, the “distance” that matters isn’t how far you’d walk along some random diagonal; it’s the <b>shortest</b> path, the perpendicular dropped straight onto the track. That single perpendicular length is what the point–line and parallel-line formulas in this topic compute.',
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> picture the line ${GEN} and notice a quiet fact behind Topic 02’s normal form (there cos${NB}${w} and sin${NB}${w} are proportional to ${A} and ${B}): the vector ${PT(A, B)} points <b>perpendicular</b> to the line (it’s the line’s normal direction). So to measure how far a point ${P} sits from the line, you don’t need the line’s slope at all: you just project the gap between ${P} and the line onto that normal direction and read off the length. That projection idea is the engine behind the famous formula<br>${d} = ${DIST},<br>and once you see it as “project onto the normal,” the formula stops being something to memorise and becomes something you could rebuild on the spot.`,
      },
      {
        t: 'p',
        html: `Two parallel lines are just a special case: they share the same normal direction, so the distance between them is the difference of their <b>signed</b> distances from the origin (when the origin lies between the lines, the plain distances add), which collapses to a clean ${PARD}, <b>provided</b> you’ve first written both with the same ${A} and ${B}. That proviso is where most marks are lost.`,
      },
      {
        t: 'p',
        html: `There’s also a third tool, the <b>symmetric (distance) form</b>. Instead of describing a line by slope or intercepts, you describe it by “stand at point ${P}, face the inclination ${th}, and walk a signed distance ${r}.” Every point on the line is then ${PT(`${x1}${NB}+${NB}${r}${NB}${COST}`, `${y1}${NB}+${NB}${r}${NB}${SINT}`)}. The beauty is that ${r} is the distance, so if you want the point 5 units up the line, or the distance from ${P} to where the line crosses another line, you solve for ${r} directly.`,
      },
      { t: 'fig', id: 'm11-09-fig-9.7' },
      {
        t: 'p',
        html: `<b>Domain of Validity & Edge Cases.</b><br>• The point-to-line formula needs the line in general form ${GEN}; if it’s given as ${y} = <i>mx</i> + ${c}, rearrange to <i>mx</i> − ${y} + ${c} = 0 first.<br>• The parallel-lines formula is <b>only valid after normalizing</b>: both lines must show identical ${A} and ${B}. Apply it to 3${x} + 4${y} + 1 = 0 and 6${x} + 8${y} + 5 = 0 as-written and you get a wrong answer.<br>• The symmetric form uses the <b>unit</b> direction ${PT(COST, SINT)}; if you substitute un-normalized direction numbers, ${r} no longer equals the true distance.<br>• The first two give the perpendicular distance; the symmetric form gives the “slant” distance ${r} measured along the line itself.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `<b>Lead-in: Representation theorem (the one new general-equation fact):</b> every first-degree equation ${GEN} (with ${AB} not both zero) represents a straight line, and conversely every line has such an equation. This is why “general form” is the universal description; proved in the Theorems, proofs and standard derivations part.`,
      },
      { t: 'p', html: `<b>Distance of a point ${P}${P1} from the line ${GEN}:</b>` },
      {
        t: 'formula',
        kicker: 'Distance of a point from a line',
        main: `${d} = ${DIST}`,
        legend: [
          `${d} = the perpendicular distance of ${P} from the line`,
          `${P1} = the point ${P}`,
          `${AB} = the coefficients of ${x} and ${y}`,
          `${C} = the constant term`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• Validity: line in general form. The modulus guarantees ${d}${NB}≥${NB}0.<br>• The <b>signed</b> quantity ${SIGNED} (without the bars) tells you which side of the line ${P} lies on.`,
      },
      {
        t: 'p',
        html: `<b>Distance between two parallel lines</b> <i>Ax</i> + <i>By</i> + ${C1} = 0 and <i>Ax</i> + <i>By</i> + ${C2} = 0 (identical ${AB}):`,
      },
      {
        t: 'formula',
        kicker: 'Distance between two parallel lines',
        main: `${d} = ${PARD}<br>(same ${A}, ${B} in both lines)`,
        legend: [`${d} = the distance between the lines`, `${C1}, ${C2} = the two constant terms`, `${AB} = the shared coefficients of ${x} and ${y}`],
        note: null,
      },
      { t: 'p', html: `• Validity: coefficients of ${x} and ${y} must be made identical <b>first</b>.` },
      {
        t: 'p',
        html: `<b>Symmetric / distance / parametric form</b> of the line through ${P}${P1} with inclination ${th}:`,
      },
      {
        t: 'formula',
        kicker: 'Symmetric / distance / parametric form',
        main: `${SYM} = ${r}<br>i.e. ${x} = ${x1} + ${r}${NB}${COST}, ${y} = ${y1} + ${r}${NB}${SINT}`,
        legend: [
          `${P1} = the fixed point ${P}`,
          `${th} = the inclination of the line`,
          `${r} = the signed distance from ${P} along the line`,
          `${PT(x, y)} = the point reached`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `where ${r} is the <b>signed distance</b> from ${P} to the point ${PT(x, y)} along the line (${r}${NB}>${NB}0 in the direction of ${th}, ${r}${NB}<${NB}0 opposite). Equivalently ${x} = ${x1} + ${r}${NB}${COST}, ${y} = ${y1} + ${r}${NB}${SINT}; use this form for a horizontal or vertical line, where sin${NB}${th} or cos${NB}${th} is 0.`,
      },

      { t: 'part', title: 'Theorems, proofs and standard derivations' },
      {
        t: 'p',
        html: `<b>Theorem 0 (lead-in): Every first-degree equation is a line</b><br><b>Given:</b> ${GEN} with ${AB} not both zero.<br><b>To Prove:</b> its graph is a straight line.<br><b>Proof (sketch by the standard argument).</b> If ${B}${NB}≠${NB}0, rewrite as<br>${y} = ${NEG_AB}${x} − ${fr(C, B)},<br>which is the slope-intercept form ${y} = <i>mx</i> + ${c}, a line of slope ${NEG_AB}. If ${B} = 0 (so ${A}${NB}≠${NB}0), the equation is ${x} = ${NEG_CA}, a vertical line. Either way the graph is a straight line. The converse holds because each standard form derived in Topic 02 rearranges into first-degree shape. ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 1: Distance of a point from a line</b><br><b>Given:</b> Line ℓ ∶ ${GEN} and point ${P}${P1}.<br><b>To Prove:</b> ${d}(${P}, ℓ) = ${DIST}.<br><b>Proof (projection onto the normal).</b> The vector <b>n</b> = ${PT(A, B)} is normal to ℓ, with unit normal <b>n̂</b> = ${fr(PT(A, B), SQ)}. Pick <b>any</b> point ${R}${PT(x0, y0)} on ℓ, so that<br><i>Ax</i><sub>0</sub> + <i>By</i><sub>0</sub> + ${C} = 0<br>⟹ <i>Ax</i><sub>0</sub> + <i>By</i><sub>0</sub> = −${C}. (∗)<br>The perpendicular distance from ${P} to ℓ equals the length of the projection of <i>RP⃗</i> = ${PT(`${x1}${NB}−${NB}${x0}`, `${y1}${NB}−${NB}${y0}`)} onto <b>n̂</b>:<br>${d} = |<i>RP⃗</i> · <b>n̂</b>|<br>= ${fr(`|${A}(${x1} − ${x0}) + ${B}(${y1} − ${y0})|`, SQ)}<br><br>= ${fr(`|${AX1} − (<i>Ax</i><sub>0</sub> + <i>By</i><sub>0</sub>)|`, SQ)}.<br>Substituting (∗), the bracket becomes ${AX1} − (−${C}) = ${AX1} + ${C}, giving<br>${d} = ${DIST}. ■`,
      },
      {
        t: 'p',
        html: `<b>Why the choice of ${R} doesn’t matter:</b> the projection onto the normal is the same no matter which point of the line you start from; moving ${R} along ℓ changes <i>RP⃗</i> only by a vector parallel to ℓ, which is perpendicular to <b>n̂</b> and so contributes nothing to the dot product.`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2: Distance between two parallel lines</b><br><b>Given:</b> ${L1} ∶ <i>Ax</i> + <i>By</i> + ${C1} = 0 and ${L2} ∶ <i>Ax</i> + <i>By</i> + ${C2} = 0 (same ${AB}).<br><b>To Prove:</b> ${d} = ${PARD}.<br><b>Proof.</b> Parallel lines are everywhere the same distance apart, so pick a convenient point on ${L1} and measure its distance to ${L2}. If ${A}${NB}≠${NB}0, the point ${PT(`−${fr(C1, A)}`, '0')} lies on ${L1}. Its distance from ${L2} by Theorem 1, since ${A}(−${fr(C1, A)}) = −${C1}:<br>${d} = ${fr(`|−${C1} + ${C2}|`, SQ)}<br><br>= ${PARD}.<br><br>If ${A} = 0 (so ${B}${NB}≠${NB}0), use the point ${PT('0', `−${fr(C1, B)}`)} on ${L1} instead; the same working gives the same result. ■`,
      },
      {
        t: 'p',
        html: `<b>Crucial precondition:</b> this assumed ${L1}, ${L2} already share identical ${AB}. If not, normalize first, e.g. divide 6${x} + 8${y} + 5 = 0 by 2 to get 3${x} + 4${y} + 2.5 = 0 before comparing with 3${x} + 4${y} + 1 = 0.`,
      },
      {
        t: 'p',
        html: `<b>Derivation note: the symmetric form gives distance directly</b><br>A point at signed distance ${r} from ${P}${P1} along inclination ${th} has coordinates ${PT(`${x1}${NB}+${NB}${r}${NB}${COST}`, `${y1}${NB}+${NB}${r}${NB}${SINT}`)}, since ${PT(COST, SINT)} is the unit step in that direction. Rearranging each coordinate,<br>${r} = ${SYM}.<br>Because the direction is a unit vector, the parameter ${r} is the genuine distance: substitute the line’s other constraint and solve for ${r} to read distances off immediately.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the distance of the point ${PT('3', '−4')} from the line 4${x} + 3${y} − 5 = 0.`,
        steps: [
          `Here ${A} = 4, ${B} = 3, ${C} = −5, and ${P1} = ${PT('3', '−4')}.`,
          `${d} = ${fr('|4(3) + 3(−4) − 5|', '√(4<sup>2</sup> + 3<sup>2</sup>)')}<br><br>= ${fr('|12 − 12 − 5|', '√25')}<br><br>= ${fr('5', '5')} = 1.`,
        ],
        ans: `${d} = 1 unit`,
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: `Find the distance between the parallel lines 3${x} − 4${y} + 7 = 0 and 6${x} − 8${y} − 5 = 0.`,
        steps: [
          `<b>Speed approach.</b> The lines are parallel (coefficients proportional), but <b>not yet comparable</b>: the second has doubled coefficients. Normalize it first by dividing by 2:<br>6${x} − 8${y} − 5 = 0 ⟹ 3${x} − 4${y} − 2.5 = 0.`,
          `Now ${C1} = 7, ${C2} = −2.5, with √(3<sup>2</sup> + 4<sup>2</sup>) = 5:<br>${d} = ${fr('|7 − (−2.5)|', '5')} = ${fr('9.5', '5')} = 1.9.`,
          `<b>The trap:</b> plugging the lines in as-written (${fr('|7 − (−5)|', '5')} = ${fr('12', '5')} = 2.4) is the common wrong answer.<br>The formula ${PARD} is <b>only</b> valid once both lines show the same ${AB}. Always normalize before subtracting constants.`,
        ],
        ans: `${d} = 1.9 = ${fr('19', '10')} units`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level · multi-concept',
        q: `Find the perpendicular distance from the origin to the line joining ${A}${PT('1', '2')} and ${B}${PT('4', '6')}.`,
        steps: [
          `<b>Step 1: equation of line <i>AB</i></b> (slope, then point-slope form, Topic 02): slope = ${fr('6 − 2', '4 − 1')} = ${fr('4', '3')}, so<br>${y} − 2 = ${fr('4', '3')}(${x} − 1)<br>⇒ 3${y} − 6 = 4${x} − 4<br>⇒ 4${x} − 3${y} + 2 = 0.`,
          `<b>Step 2: distance from origin ${PT('0', '0')}</b> (Theorem 1):<br>${d} = ${fr('|4(0) − 3(0) + 2|', '√(4<sup>2</sup> + (−3)<sup>2</sup>)')}<br>= ${fr('2', '5')} = 0.4.`,
        ],
        ans: `${d} = ${fr('2', '5')} = 0.4 units`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `A line through ${P}${PT('1', '1')} has inclination ${th} = 60° and meets the line 2${x} + ${y} = 8 at ${Q}. Using the symmetric form, find the distance <i>PQ</i> exactly.`,
        steps: [
          `Parametrize the line through ${P} with the unit direction ${PT('cos 60°', 'sin 60°')} = ${PT(HALF, R3_2)}:<br>${x} = 1 + ${fr(r, '2')}, ${y} = 1 + ${R3_2}${r}.`,
          `The point ${Q} lies on 2${x} + ${y} = 8, so substitute and solve for ${r}, which <b>is</b> the distance <i>PQ</i>:<br>2(1 + ${fr(r, '2')}) + (1 + ${R3_2}${r}) = 8<br>⇒ 3 + ${r} + ${R3_2}${r} = 8<br>⇒ ${r}(1 + ${R3_2}) = 5.`,
          `Thus ${r} · ${fr('2 + √3', '2')} = 5<br>⇒ ${r} = ${fr('10', '2 + √3')}. Rationalize:<br><br>${r} = ${fr('10(2 − √3)', '(2 + √3)(2 − √3)')}<br><br>= ${fr('10(2 − √3)', '4 − 3')}<br>= 10(2 − √3) = 20 − 10√3.`,
          `<b>Why this beats brute force:</b> the symmetric form delivers the distance as a single solved parameter ${r}: no need to find ${Q}’s coordinates first and then apply a distance formula. The unit direction is what makes ${r} equal the true length; this fails silently if you use non-unit direction numbers.`,
        ],
        ans: `<i>PQ</i> = 10(2 − √3) = 20 − 10√3 ≈ 2.68 units`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the distance of the point ${PT('2', '3')} from the line 3${x} + 4${y} − 12 = 0.`,
            a: `${d} = ${fr('|6 + 12 − 12|', '5')} = ${fr('6', '5')} = 1.2.`,
          },
          {
            q: `<b>[CBSE]</b> Find the distance between the parallel lines 2${x} + ${y} − 3 = 0 and 2${x} + ${y} + 7 = 0.`,
            a: `${fr('|−3 − 7|', '√5')} = ${fr('10', '√5')} = 2√5.`,
          },
          {
            q: `<b>[JEE Main]</b> Find the distance between 5${x} + 12${y} − 10 = 0 and 10${x} + 24${y} + 13 = 0 (mind the normalization).`,
            a: `Normalize the second to 5${x} + 12${y} + 6.5 = 0;<br>${d} = ${fr('|−10 − 6.5|', '13')} = ${fr('16.5', '13')}<br>= ${fr('33', '26')} ≈ 1.27.`,
          },
          {
            q: `<b>[JEE Main]</b> Using the symmetric form, find the coordinates of the points on the line through ${PT('1', '2')} with inclination 30° that are at distance 4 from ${PT('1', '2')}.`,
            a: `${PT('1 + 2√3', '4')} and ${PT('1 − 2√3', '0')}.`,
          },
          {
            q: `<b>[JEE Advanced]</b> The parallel lines 3${x} − 4${y} + 5 = 0 and 3${x} − 4${y} − 10 = 0 bound a strip. Find the width of the strip and the equation of the line running exactly midway between them.`,
            a: `Width = ${fr('|5 − (−10)|', '5')} = 3; midline (average of constants) 3${x} − 4${y} − 2.5 = 0, i.e. 6${x} − 8${y} − 5 = 0.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The distance of the origin from the line 3${x} − 4${y} + 10 = 0 is:`,
        opts: [
          { label: '2', nudge: null },
          { label: '10', nudge: `<b>(B)</b> forgot to divide by ${SQ}.` },
          { label: fr('10', '7'), nudge: `<b>(C)</b> divided by |${A}| + |${B}| = 7 instead of ${SQ} = 5.` },
          { label: '−2', nudge: '<b>(D)</b> a distance can never be negative: modulus dropped.' },
        ],
        correct: 0,
        solution: `${d} = ${fr('|3(0) − 4(0) + 10|', '√(3<sup>2</sup> + 4<sup>2</sup>)')} = ${fr('10', '5')} = 2.`,
      },
      {
        t: 'mcq',
        q: `The distance between 4${x} + 3${y} − 5 = 0 and 8${x} + 6${y} + 10 = 0 is:`,
        opts: [
          { label: '2', nudge: null },
          { label: '3', nudge: `<b>(B)</b> used the un-normalized constant: ${fr('|−5 − 10|', '5')} = 3.` },
          { label: '1.5', nudge: `<b>(C)</b> used both un-normalized constant and un-normalized denominator √(64 + 36) = 10: ${fr('15', '10')} = 1.5.` },
          { label: '5', nudge: `<b>(D)</b> 5 is only the denominator √(4<sup>2</sup> + 3<sup>2</sup>): the numerator |−5 − 5| = 10 still has to be divided by it, giving 2.` },
        ],
        correct: 0,
        solution: `Normalize the second: 8${x} + 6${y} + 10 = 0 ⇒ 4${x} + 3${y} + 5 = 0. Then ${C1} = −5, ${C2} = 5, √(16 + 9) = 5, so ${d} = ${fr('|−5 − 5|', '5')} = 2.`,
      },
      {
        t: 'mcq',
        q: `The perpendicular distance of ${P}${P1} from ${GEN} is:`,
        opts: [
          { label: DIST, nudge: null },
          {
            label: SIGNED,
            nudge: '<b>(B)</b> dropped the modulus: yields a signed value that can be negative (that signed version tells you the side, not the distance).',
          },
          { label: fr(`|${AX1} + ${C}|`, SUMSQ), nudge: '<b>(C)</b> forgot the square root in the denominator.' },
          { label: fr(`|${AX1} + ${C}|`, `√(${A} + ${B})`), nudge: `<b>(D)</b> wrong radicand (√(${A} + ${B}) instead of ${SQ}).` },
        ],
        correct: 0,
        solution: `The distance is |${AX1} + ${C}| divided by the length ${SQ} of the normal ${PT(A, B)}:<br>${d} = ${DIST}.<br>Check: the origin and 3${x} − 4${y} + 10 = 0 give ${fr('10', '5')} = 2.`,
      },
      {
        t: 'mcq',
        q: `In the symmetric form ${SYM} = ${r}, the parameter ${r} represents:`,
        opts: [
          { label: 'the slope of the line', nudge: `<b>(A)</b> the slope is tan${NB}${th}, not ${r}.` },
          { label: `the signed distance from ${P1} to ${PT(x, y)} along the line`, nudge: null },
          { label: `the ${y}-intercept`, nudge: '<b>(C)</b> confuses the running distance with fixed features of the line.' },
          { label: 'the inclination', nudge: '<b>(D)</b> confuses the running distance with fixed features of the line.' },
        ],
        correct: 1,
        solution: `Because ${PT(COST, SINT)} is a unit vector, each unit of ${r} moves exactly one unit along the line, so ${r} is the genuine signed distance.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Skipping normalization for parallel lines.</b> ${PARD} is valid <b>only</b> when both lines show identical ${AB}. Always rescale one line first.`,
          '<b>Dropping the modulus in point-to-line distance.</b> Distance is non-negative; the bars are mandatory. (The signed value is useful, see the Pro-Tip, but it isn’t “the distance.”)',
          `<b>Wrong denominator.</b> It is ${SQ}, not ${SUMSQ}, and not |${A}| + |${B}|. This is the same root-sum-of-squares that appeared in the normal form (Topic 02); treat it as one recurring object.`,
          `<b>Non-unit direction in the symmetric form.</b> If you use direction numbers that aren’t ${PT(COST, SINT)}, the parameter stops equalling the true distance.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> The signed quantity ${SIGNED} tells you which <b>side</b> of the line a point is on: two points give the same sign ⇒ same side, opposite signs ⇒ the line separates them. This answers “do these points lie on the same side?” and “is the origin inside this triangle?” with no extra construction.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Point–line distance', note: `${d} = ${DIST}.` },
          { f: 'Parallel lines', note: `${d} = ${PARD} (normalize to identical ${AB} first).` },
          { f: 'Symmetric / distance form', note: `${SYM} = ${r}, with ${r} = signed distance.` },
          { f: 'Side test', note: `sign of ${AX1} + ${C} identifies which side of the line a point lies on.` },
        ],
        aids: [
          '“Normalize, then subtract” for parallel lines.',
          '“Modulus on top, root-sum-squares below.”',
          `“${r} is the ruler”: in the symmetric form the parameter is the distance.`,
        ],
      },
    ],
  },
];
