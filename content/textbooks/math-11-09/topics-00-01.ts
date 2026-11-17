import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Topic 00 (the opening "Start here" topic) and Topic 01, pp. 791–807
 * of the Class 11 Mathematics Master Reference (October 2026 edition), word for
 * word: the book's Subtopic 00 Coordinate Foundations (pp. 791–797) and
 * Subtopic 01 Slope of a Line and Angles (pp. 798–807). Subtopic 02 starts on
 * p. 808. Each topic opens with its "Exam Relevance:" box as a part of its own,
 * then is split at its Sections 1 to 8; the "Cheat Sheet Box" is the part
 * "Cheat sheet".
 * Figures: 9.1 (caption p. 792, drawn p. 793) after Topic 00's Theorem 1;
 * 9.2 (caption p. 798, drawn p. 799) in Topic 01's Concept intuition, where its
 * caption is printed; 9.3 (caption p. 801, drawn p. 802) after the Construction
 * of Topic 01's Theorem 1. No unnumbered drawings. Every fraction is stacked
 * (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const sb = (b: string, s: string) => `<i>${b}</i><sub>${s}</sub>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const h = I('h');
const k = I('k');
const m = I('m');
const n = I('n');
const x = I('x');
const y = I('y');
const P = I('P');
const th = I('θ');
const x1 = sb('x', '1');
const x2 = sb('x', '2');
const x3 = sb('x', '3');
const y1 = sb('y', '1');
const y2 = sb('y', '2');
const y3 = sb('y', '3');
const m1 = sb('m', '1');
const m2 = sb('m', '2');
const th1 = sb('θ', '1');
const th2 = sb('θ', '2');
const xP = `${x}<sub>${P}</sub>`;
const yP = `${y}<sub>${P}</sub>`;
const M1M2 = `${m1}${m2}`;
const HALF = fr('1', '2');
const TAN = `tan${NB}`;
const MN = `${m}${NB}∶${NB}${n}`;
const pt = (name: string, a: string, b: string) => `${I(name)}(${a},${NB}${b})`;
const A1 = pt('A', x1, y1);
const B2 = pt('B', x2, y2);
const C3 = pt('C', x3, y3);
const SEC_IN_X = fr(`<i>mx</i><sub>2</sub> + <i>nx</i><sub>1</sub>`, `${m} + ${n}`);
const SEC_IN_Y = fr(`<i>my</i><sub>2</sub> + <i>ny</i><sub>1</sub>`, `${m} + ${n}`);
const SEC_EX_X = fr(`<i>mx</i><sub>2</sub> − <i>nx</i><sub>1</sub>`, `${m} − ${n}`);
const SEC_EX_Y = fr(`<i>my</i><sub>2</sub> − <i>ny</i><sub>1</sub>`, `${m} − ${n}`);
const DIST = `√((${x2} − ${x1})<sup>2</sup> + (${y2} − ${y1})<sup>2</sup>)`;
const AREA_IN = `${x1}(${y2} − ${y3}) + ${x2}(${y3} − ${y1}) + ${x3}(${y1} − ${y2})`;
const AREA = `Δ = ${HALF}|${AREA_IN}|`;
const SLOPE2 = fr(`${y2} − ${y1}`, `${x2} − ${x1}`);
const ANGLE = `|${fr(`${m2} − ${m1}`, `1 + ${M1M2}`)}|`;
const XBAR = `${x}̅`;
const ell = I('ℓ');

export const TOPICS: Topic[] = [
  // ──────────────── Topic 00 · pp. 791–797 ────────────────
  {
    n: '00',
    title: 'Coordinate Foundations',
    kalam: 'Think of this topic as learning the grammar before writing sentences.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `These are the load-bearing prerequisites for the entire chapter: every later result quietly uses them. CBSE asks the section formula, midpoint, and area of a triangle directly (2–3 marks) ${ESTIMATE}. JEE Main reliably has a question on area, collinearity, or the centroid ${ESTIMATE}. JEE Advanced uses the <b>locus method</b> and <b>translation of axes</b> as setup machinery in harder problems. Master these cold and the rest of Straight Lines becomes bookkeeping.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Before you can talk about lines, you need to be fluent with points: how far apart they are, how to split the gap between them, how to measure the area they enclose, and how to describe a moving point by the rule it obeys. Think of this topic as learning the grammar before writing sentences.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> the coordinate plane turns geometry into arithmetic. “How far is Jaipur from Delhi on the map?” becomes a subtraction-and-square-root. “Where is the town exactly one-third of the way along the highway?” becomes the section formula. “Do these three survey markers lie on one straight boundary?” becomes “is the area of their triangle zero?” Geometry questions become formula questions: that’s the whole power of Descartes’ idea.',
      },
      {
        t: 'p',
        html: 'The last big idea here is <b>locus</b>: the path traced by a point that obeys a rule. A goat tied to a peg traces a circle (rule: “stay 5 m from the peg”); a point equidistant from two villages traces the perpendicular bisector of the line joining them (a straight line!). Finding the equation of a locus is the bridge from a verbal rule to an algebraic curve, and almost every “find the equation of the path/set of points such that…” problem is a locus problem in disguise.',
      },
      {
        t: 'p',
        html: `<b>Domain of Validity & Edge Cases.</b><br>• The <b>section formula</b> for internal division uses ${m} + ${n} in the denominator; the external version uses ${m} − ${n}, which blows up when ${m} = ${n} (you can’t externally divide a segment in a 1${NB}∶${NB}1 ratio: that point is at infinity).<br>• The <b>area</b> formula gives 0 exactly when the three points are <b>collinear</b>: that’s not a failure, it’s a feature you’ll exploit.<br>• <b>Translation of axes</b> shifts the origin but never rotates the axes; slopes and distances are unchanged, only coordinates relabel.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: `For points ${A1}, ${B2}, ${C3}:` },
      {
        t: 'formula',
        kicker: 'Distance between two points',
        main: `<i>AB</i> = ${DIST}`,
        legend: [`<i>AB</i> = the distance from <i>A</i> to <i>B</i>`, `${x1}, ${y1} = the coordinates of <i>A</i>`, `${x2}, ${y2} = the coordinates of <i>B</i>`],
        note: null,
      },
      {
        t: 'formula',
        kicker: `Section formula (point dividing <i>AB</i> in ratio ${MN})`,
        main: `Internal: (${SEC_IN_X}, ${SEC_IN_Y})<br>External: (${SEC_EX_X}, ${SEC_EX_Y}), ${m}${NB}≠${NB}${n}`,
        legend: [`${m}, ${n} = the parts of the ratio`, `${x1}, ${y1} = the coordinates of <i>A</i>`, `${x2}, ${y2} = the coordinates of <i>B</i>`],
        note: null,
      },
      {
        t: 'formula',
        kicker: `Midpoint (ratio 1${NB}∶${NB}1)`,
        main: `(${fr(`${x1} + ${x2}`, '2')}, ${fr(`${y1} + ${y2}`, '2')})`,
        legend: [`${x1}, ${y1} = the coordinates of <i>A</i>`, `${x2}, ${y2} = the coordinates of <i>B</i>`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Centroid of △<i>ABC</i>',
        main: `(${fr(`${x1} + ${x2} + ${x3}`, '3')}, ${fr(`${y1} + ${y2} + ${y3}`, '3')})`,
        legend: [`${x1}, ${y1} = the coordinates of <i>A</i>`, `${x2}, ${y2} = the coordinates of <i>B</i>`, `${x3}, ${y3} = the coordinates of <i>C</i>`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Area of a triangle',
        main: `Δ = ${HALF}|${x1}(${y2} − ${y3})<br>+ ${x2}(${y3} − ${y1})<br>+ ${x3}(${y1} − ${y2})|`,
        legend: ['Δ = the area of △<i>ABC</i>', `${x1}, ${y1} = the coordinates of <i>A</i>`, `${x2}, ${y2} = the coordinates of <i>B</i>`, `${x3}, ${y3} = the coordinates of <i>C</i>`],
        note: null,
      },
      { t: 'p', html: '• <b>Collinearity test:</b> <i>A</i>, <i>B</i>, <i>C</i> are collinear ⟺ Δ = 0.' },
      {
        t: 'p',
        html: `<b>Locus:</b> the set of all points obeying a given geometric condition; its equation is the relation ${x}, ${y} must satisfy.`,
      },
      {
        t: 'p',
        html: `<b>Translation (shift) of origin</b> to (${h}, ${k}): a point with old coordinates (${x}, ${y}) has new coordinates (<i>X</i>,\u00a0<i>Y</i>) = (${x} − ${h}, ${y} − ${k}); to rewrite an equation, substitute ${x} = <i>X</i> + ${h}, ${y} = <i>Y</i> + ${k}.`,
      },

      { t: 'part', title: 'Theorems, proofs and standard derivations' },
      {
        t: 'p',
        html: `<b>Theorem 1: Internal section formula</b><br><b>Given:</b> ${A1}, ${B2}, and ${P} dividing <i>AB</i> internally in ratio ${MN}.<br><b>To Prove:</b> ${P} = (${SEC_IN_X}, ${SEC_IN_Y}).`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Drop perpendiculars from <i>A</i>, ${P}, <i>B</i> to the ${x}-axis. By similar triangles (the line cuts them proportionally), ${fr('<i>AP</i>', '<i>PB</i>')} = ${fr(m, n)} projects onto the ${x}-coordinates:<br>${fr(`${xP} − ${x1}`, `${x2} − ${xP}`)} = ${fr(m, n)}<br>⇒ ${n}(${xP} − ${x1}) = ${m}(${x2} − ${xP})<br>⇒ ${xP}(${m} + ${n}) = <i>mx</i><sub>2</sub> + <i>nx</i><sub>1</sub>.<br><br>So ${xP} = ${SEC_IN_X}, and identically ${yP} = ${SEC_IN_Y}. ■`,
      },
      { t: 'fig', id: 'm11-09-fig-9.1' },
      {
        t: 'p',
        html: `<b>Theorem 2: Area of a triangle</b><br><b>Given:</b> vertices ${A1}, ${B2}, ${C3}.<br><b>To Prove:</b> ${AREA}.`,
      },
      {
        t: 'p',
        html: `<b>Proof (trapezium decomposition).</b> Drop perpendiculars to the ${x}-axis from each vertex, forming three trapezia. The triangle’s area is the algebraic sum of trapezium areas:<br>Δ = ${HALF}(${x1} − ${x2})(${y1} + ${y2})<br>+ ${HALF}(${x2} − ${x3})(${y2} + ${y3})<br>+ ${HALF}(${x3} − ${x1})(${y3} + ${y1}).<br><br>Expanding and collecting terms collapses to ${HALF}[${AREA_IN}]; the modulus removes orientation sign. ■`,
      },
      {
        t: 'proc',
        title: 'Procedure: Finding the equation of a locus',
        steps: [
          `Let the moving point be ${P}(${h}, ${k}).`,
          `Translate every geometric condition into an equation in ${h}, ${k} using the formulas in the Key formulas and definitions part.`,
          `Eliminate any parameters until only ${h}, ${k} (and constants) remain.`,
          `Replace (${h}, ${k}) by (${x}, ${y}): that relation is the locus.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Find the centroid of the triangle with vertices <i>A</i>(2,\u00a0−3), <i>B</i>(−4,\u00a05), <i>C</i>(8,\u00a01).',
        steps: [`<i>G</i> = (${fr('2 − 4 + 8', '3')}, ${fr('−3 + 5 + 1', '3')})<br>= (${fr('6', '3')}, ${fr('3', '3')})`],
        ans: '<i>G</i> = (2,\u00a01)',
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: 'Are the points (1,\u00a04), (3,\u00a0−2), and (−3,\u00a016) collinear?',
        steps: [
          '<b>Speed approach.</b> Don’t compute three slopes; use area = 0 as the one-shot test:<br>2Δ = |1(−2 − 16) + 3(16 − 4) + (−3)(4 + 2)|<br>= |−18 + 36 − 18| = 0.',
          'Area is 0, so <b>yes, collinear</b>.',
          '<b>The trap:</b> students laboriously find slope(<i>AB</i>), slope(<i>BC</i>) and risk a sign error in each. The area determinant does it in one line and the modulus shields you from orientation mistakes.',
        ],
        ans: 'Collinear',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level · multi-concept',
        q: `The point ${P} divides the segment from <i>A</i>(−1,\u00a03) to <i>B</i>(5,\u00a0−9) such that <i>AP</i>${NB}∶${NB}<i>PB</i> = 2${NB}∶${NB}1. Find ${P}, then find the distance <i>OP</i> from the origin.`,
        steps: [
          `<b>Step 1: section formula</b> (${MN} = 2${NB}∶${NB}1):<br>${P} = (${fr('2(5) + 1(−1)', '3')}, ${fr('2(−9) + 1(3)', '3')})<br>= (${fr('9', '3')}, ${fr('−15', '3')}) = (3,\u00a0−5).`,
          '<b>Step 2: distance from origin:</b><br><i>OP</i> = √(3<sup>2</sup> + (−5)<sup>2</sup>)',
        ],
        ans: `${P} = (3,\u00a0−5), <i>OP</i> = √34`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Find the locus of a point that moves so that its distance from (4,\u00a00) is always twice its distance from (1,\u00a00).',
        steps: [
          `Let ${P}(${h}, ${k}). The condition <i>PA</i> = 2${NB}<i>PB</i> with <i>A</i>(4,\u00a00), <i>B</i>(1,\u00a00) gives, on squaring,<br>(${h} − 4)<sup>2</sup> + ${k}<sup>2</sup> = 4[(${h} − 1)<sup>2</sup> + ${k}<sup>2</sup>].`,
          `Expand:<br>${h}<sup>2</sup> − 8${h} + 16 + ${k}<sup>2</sup> = 4${h}<sup>2</sup> − 8${h} + 4 + 4${k}<sup>2</sup><br>⇒ 0 = 3${h}<sup>2</sup> + 3${k}<sup>2</sup> − 12.`,
          `So ${h}<sup>2</sup> + ${k}<sup>2</sup> = 4. Replacing (${h}, ${k}) → (${x}, ${y}): ${x}<sup>2</sup> + ${y}<sup>2</sup> = 4.`,
          `It is a circle of radius 2 centred at the origin (an Apollonius circle). Note how the linear −8${h} terms cancelled: that happens here because 4 = 2<sup>2</sup>${NB}·${NB}1, so the circle is centred at the origin. In general an Apollonius circle need not be.`,
        ],
        ans: `${x}<sup>2</sup> + ${y}<sup>2</sup> = 4`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: '<b>[CBSE]</b> Find the distance between (−2,\u00a05) and (4,\u00a0−3).', a: '√(36 + 64) = 10.' },
          { q: '<b>[CBSE]</b> Find the midpoint of the segment joining (7,\u00a0−1) and (−3,\u00a09).', a: '(2,\u00a04).' },
          {
            q: '<b>[JEE Main]</b> Find the area of the triangle with vertices (0,\u00a00), (4,\u00a00), (0,\u00a06), and state whether the points (2,\u00a03), (4,\u00a06), (6,\u00a09) are collinear.',
            a: 'Area = 12; the three points are collinear (area = 0).',
          },
          {
            q: `<b>[JEE Main]</b> The point (2, ${k}) divides the segment from (0,\u00a00) to (6,\u00a09) internally in some ratio; find that ratio and ${k}.`,
            a: `Ratio 1${NB}∶${NB}2, ${k} = 3.`,
          },
          {
            q: '<b>[JEE Advanced]</b> Find the locus of a point equidistant from <i>A</i>(3,\u00a02) and <i>B</i>(−1,\u00a04).',
            a: `Perpendicular bisector 2${x} − ${y} + 1 = 0 (i.e. 8${x} − 4${y} + 4 = 0 ⇒ 2${x} − ${y} + 1 = 0).`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The midpoint of the segment joining (<i>a</i>,\u00a0<i>b</i>) and (3<i>a</i>,\u00a0−<i>b</i>) is:',
        opts: [
          { label: '(2<i>a</i>,\u00a00)', nudge: null },
          { label: '(2<i>a</i>,\u00a0<i>b</i>)', nudge: `<b>(B)</b> forgot the ${y}-coordinates cancel.` },
          { label: '(<i>a</i>,\u00a00)', nudge: `<b>(C)</b> averaged only one ${x} term.` },
          { label: '(4<i>a</i>,\u00a00)', nudge: `<b>(D)</b> added instead of averaging ${x}.` },
        ],
        correct: 0,
        solution: `(${fr('<i>a</i> + 3<i>a</i>', '2')}, ${fr('<i>b</i> − <i>b</i>', '2')}) = (2<i>a</i>,\u00a00).`,
      },
      {
        t: 'mcq',
        q: `If (1,\u00a02), (4, ${y}), (7,\u00a08) are collinear, then ${y} =`,
        opts: [
          { label: '4', nudge: `<b>(A)</b> 4 fails the slope check: ${fr('4 − 2', '4 − 1')} = ${fr('2', '3')}, but ${fr('8 − 4', '7 − 4')} = ${fr('4', '3')}.` },
          { label: '5', nudge: null },
          { label: '6', nudge: `<b>(C)</b> 6 fails the slope check: ${fr('6 − 2', '4 − 1')} = ${fr('4', '3')}, but ${fr('8 − 6', '7 − 4')} = ${fr('2', '3')}.` },
          { label: '3', nudge: `<b>(D)</b> 3 fails the slope check: ${fr('3 − 2', '4 − 1')} = ${fr('1', '3')}, but ${fr('8 − 3', '7 − 4')} = ${fr('5', '3')}.` },
        ],
        correct: 1,
        solution: `Collinear ⇒ the middle point is the midpoint here since ${x}-values are equally spaced: ${y} = ${fr('2 + 8', '2')} = 5. (Or set area = 0.)`,
      },
      {
        t: 'mcq',
        q: 'The centroid of a triangle is (3,\u00a01) and two of its vertices are (2,\u00a0−1) and (5,\u00a04). The third vertex is:',
        opts: [
          { label: '(2,\u00a00)', nudge: null },
          { label: '(2,\u00a02)', nudge: `<b>(B)</b> (2,\u00a02) has the right ${x} but the wrong ${y}: the ${y}-coordinates must add to 3(1) = 3, and −1 + 4 + 2 = 5. Solve ${y3} = 3(1) − (−1) − 4 = 0; the −(−1) term is the usual trap.` },
          { label: '(8,\u00a02)', nudge: `<b>(C)</b> (8,\u00a02) fails both checks: 2 + 5 + 8 = 15, not 3(3) = 9, and −1 + 4 + 2 = 5, not 3(1) = 3. Multiply the centroid by 3 first: ${x3} = 9 − 2 − 5 = 2.` },
          { label: '(4,\u00a00)', nudge: `<b>(D)</b> subtracted only one vertex in ${x} (9 − 5 = 4).` },
        ],
        correct: 0,
        solution: `${x3} = 3(3) − 2 − 5 = 2, ${y3} = 3(1) − (−1) − 4 = 0, giving (2,\u00a00).`,
      },
      {
        t: 'mcq',
        q: 'Translating the origin to (2,\u00a0−1), the point with old coordinates (5,\u00a03) has new coordinates:',
        opts: [
          { label: '(3,\u00a04)', nudge: null },
          { label: '(7,\u00a02)', nudge: '<b>(B)</b> added the shift instead of subtracting.' },
          { label: '(3,\u00a02)', nudge: `<b>(C)</b> mishandled the negative ${k}.` },
          { label: '(−3,\u00a0−4)', nudge: '<b>(D)</b> negated the whole result.' },
        ],
        correct: 0,
        solution: '(<i>X</i>,\u00a0<i>Y</i>) = (5 − 2, 3 − (−1)) = (3,\u00a04).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Internal vs external section formula.</b> Internal uses ${m} + ${n}; external uses ${m} − ${n}. Picking the wrong one flips the point to the wrong side.`,
          '<b>Dropping the modulus in area.</b> Area is non-negative; without the bars you may report a negative “area.”',
          `<b>Forgetting to scale the centroid.</b> ${x1} + ${x2} + ${x3} = 3${XBAR}: multiply the centroid by 3 before solving for a missing vertex.`,
          `<b>Sign of the shift in translation.</b> New = old − shift: (<i>X</i>,\u00a0<i>Y</i>) = (${x} − ${h}, ${y} − ${k}). Adding instead of subtracting is the classic slip.`,
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For collinearity, the area determinant beats comparing slopes: it’s one computation, it never divides by zero (no vertical-line worry), and the modulus protects you from orientation sign errors.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Distance', note: `${DIST}.` },
          { f: `Section (${MN} internal)`, note: `(${SEC_IN_X}, ${SEC_IN_Y}); midpoint is the 1${NB}∶${NB}1 case.` },
          { f: 'Centroid', note: `(${fr(`∑${NB}${x}`, '3')}, ${fr(`∑${NB}${y}`, '3')}).` },
          { f: 'Area', note: `${HALF}|${AREA_IN}|; = 0 ⇔ collinear.` },
          { f: 'Locus', note: `put ${P}(${h}, ${k}), translate the rule, replace (${h}, ${k}) → (${x}, ${y}).` },
          { f: `Shift of origin to (${h}, ${k})`, note: `<i>X</i> = ${x} − ${h}, <i>Y</i> = ${y} − ${k}.` },
        ],
        aids: [
          `“Internal adds, external subtracts” (the ${m} ± ${n} denominator).`,
          '“Area zero means in a row” (collinear).',
          '“New equals old minus shift.”',
        ],
      },
    ],
  },

  // ──────────────── Topic 01 · pp. 798–807 ────────────────
  {
    n: '01',
    title: 'Slope of a Line and Angles',
    kalam: '“Slope” is just the number that captures how steeply a line tilts, and the beautiful thing is that one number does the whole job.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Slope is the single most-used idea in all of coordinate geometry, so it shows up everywhere. CBSE Class 11 finals lean on the inclination–slope link and the parallel/perpendicular conditions for 2–4 mark questions ${ESTIMATE}. JEE Main almost always has a question riding on the angle-between-lines formula or a collinearity/perpendicularity condition ${ESTIMATE}, and JEE Advanced folds slope into locus and multi-line problems where the vertical-line edge case is the whole trap.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Imagine you are walking along the Konkan Railway track as it climbs out of a valley. Some stretches are almost flat: you barely feel the rise. Other stretches are steep, and your legs know it instantly. “Slope” is just the number that captures how steeply a line tilts, and the beautiful thing is that one number does the whole job.',
      },
      {
        t: 'p',
        html: `Here is the cleanest way to see it. Stand a line on the coordinate plane and ask: starting from the positive ${x}-axis, how much do I have to rotate <b>anticlockwise</b> until I’m pointing along the line? That rotation angle is the line’s <b>inclination</b>, written ${th}. A line lying flat along the ${x}-axis has ${th} = 0°. Tilt it up and ${th} grows; stand it straight up (parallel to the ${y}-axis) and ${th} = 90°; tilt it the other way (going down as you move right) and ${th} is obtuse, somewhere between 90° and 180°. By convention we keep 0° ≤ ${th} < 180°, because a line and the same line rotated by 180° are identical: there is no “arrow” on a line.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> the inclination ${th} is an angle, but angles are clumsy to compute with. So we convert the angle into a pure number using the tangent function: the <b>slope</b> is ${m} = ${TAN}${th}. Why tangent and not sine or cosine? Because slope should answer “for every step I take to the right, how far do I rise?”, and that is exactly rise over run, which is the tangent of the inclination. A gentle 30° track has slope ${TAN}30° ≈ 0.58 (rise a little for each step). A 45° track has slope exactly 1 (rise equals run). Past 45° the slope shoots up fast, and a line going downhill to the right has a negative slope, because the rise is negative.`,
      },
      { t: 'fig', id: 'm11-09-fig-9.2' },
      {
        t: 'p',
        html: 'This single number tells you almost everything about a line’s direction (not its position: a line can have slope 2 while sitting anywhere on the plane). Two lines with the same slope point the same way: they are <b>parallel</b>. Two lines whose slopes multiply to −1 meet at a perfect right angle: they are <b>perpendicular</b>. And three points lie on one straight line exactly when the slope you measure between the first two equals the slope between the last two (or, when no slope exists, all three share one <i>x</i>-coordinate: a vertical line).',
      },
      {
        t: 'p',
        html: `<b>Domain of Validity & Edge Cases.</b> The slope idea has exactly one place where it breaks, and exam-setters love it: the <b>vertical line</b>. A vertical line has inclination 90°, and ${TAN}90° does not exist: it runs off to infinity. So we say the slope of a vertical line is undefined (never “infinite”, and never “zero”: zero is the horizontal line, ${TAN}0° = 0). The whole rise-over-run machinery also assumes the two points you use are genuinely different and not stacked vertically; if ${x1} = ${x2} the denominator collapses, which is just the vertical-line case showing up in algebra. Keep these two poles straight (horizontal means slope 0, vertical means slope undefined) and half the slope mistakes vanish.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `<b>Inclination ${th}:</b> the angle a line makes with the positive direction of the ${x}-axis, measured anticlockwise.<br>• Convention / validity: 0° ≤ ${th} < 180° (equivalently ${th} ∈ [0, π) in radians).<br>• Horizontal line: ${th} = 0°. Vertical line: ${th} = 90°.`,
      },
      {
        t: 'formula',
        kicker: `Slope (gradient) ${m}`,
        main: `${m} = ${TAN}${th}, ${th} ≠ 90°`,
        legend: [`${m} = the slope`, `${th} = the inclination`],
        note: null,
      },
      {
        t: 'p',
        html: `• Validity: defined for every non-vertical line. <b>Undefined</b> when ${th} = 90°.<br>• Range: ${m} ∈ (−∞, ∞) as ${th} ranges over [0°, 180°) ∖ {90°}.`,
      },
      {
        t: 'formula',
        kicker: `Slope from two points ${pt('P', x1, y1)}, ${pt('Q', x2, y2)}`,
        main: `${m} = ${SLOPE2}, ${x1} ≠ ${x2}`,
        legend: [`${m} = the slope of <i>PQ</i>`, `${x1}, ${y1} = the coordinates of ${P}`, `${x2}, ${y2} = the coordinates of <i>Q</i>`],
        note: null,
      },
      {
        t: 'p',
        html: `• The result is independent of which point you call “first”: ${m}(<i>PQ</i>) = ${m}(<i>QP</i>). A line segment carries no direction when we speak of slope.`,
      },
      {
        t: 'formula',
        kicker: 'Parallel lines',
        main: `equal inclinations ⇒ ${m1} = ${m2}<br>(both lines non-vertical)`,
        legend: [`${m1}, ${m2} = the slopes of the two lines`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Perpendicular lines',
        main: `inclinations differ by 90° ⇒<br>${M1M2} = −1 ⟺ ${m2} = −${fr('1', m1)}<br>(both slopes defined)`,
        legend: [`${m1}, ${m2} = the slopes of the two lines`],
        note: null,
      },
      {
        t: 'p',
        html: '• Validity: holds only when both slopes are defined. If one line is vertical, the perpendicular to it is horizontal: handle this pair by inspection, not by the product rule.',
      },
      {
        t: 'formula',
        kicker: `Angle between two lines with slopes ${m1}, ${m2} (acute angle ${th})`,
        main: `${TAN}${th} = ${ANGLE}, 1 + ${M1M2} ≠ 0`,
        legend: [`${th} = the acute angle between the lines`, `${m1}, ${m2} = the slopes of the two lines`],
        note: null,
      },
      {
        t: 'p',
        html: `• The two lines actually form two supplementary angles, ${th} and 180° − ${th}; the modulus picks out the acute one.<br>• Degenerate case: 1 + ${M1M2} = 0 makes the right side blow up: that is precisely the perpendicular case, ${th} = 90°.`,
      },
      {
        t: 'formula',
        kicker: 'Collinearity of <i>A</i>, <i>B</i>, <i>C</i>',
        main: 'slope(<i>AB</i>) = slope(<i>BC</i>)<br>(not for points on a vertical line)',
        legend: ['<i>A</i>, <i>B</i>, <i>C</i> = the three points'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Equally inclined to the axes',
        main: `${th} = 45° or 135°<br>⇒ ${m} = ${TAN}45° = 1 or ${TAN}135° = −1<br>i.e. ${m} = ±1`,
        legend: [`${th} = the inclination`, `${m} = the slope`],
        note: null,
      },

      { t: 'part', title: 'Theorems, proofs and standard derivations' },
      {
        t: 'p',
        html: `<b>Theorem 1: Slope in terms of two points</b><br><b>Given:</b> A non-vertical line ${ell} with inclination ${th}, passing through ${pt('P', x1, y1)} and ${pt('Q', x2, y2)}.<br><b>To Prove:</b> ${m} = ${TAN}${th} = ${SLOPE2}.<br><b>Construction:</b> Drop perpendiculars from ${P} and <i>Q</i> to the ${x}-axis, meeting it at <i>L</i> and <i>M</i>. From ${P}, drop a perpendicular <i>PN</i> onto <i>QM</i>, so that △<i>QPN</i> is right-angled at <i>N</i>.`,
      },
      { t: 'fig', id: 'm11-09-fig-9.3' },
      {
        t: 'p',
        html: `<b>Proof.</b> Because <i>PN</i> is horizontal (parallel to the ${x}-axis), the angle ∠<i>QPN</i> that the line makes with <i>PN</i> equals the inclination ${th} (corresponding angles with the parallel ${x}-axis). In right triangle <i>QPN</i>,<br><i>PN</i> = <i>LM</i> = ${x2} − ${x1} (horizontal run),<br><i>QN</i> = <i>QM</i> − <i>NM</i> = ${y2} − ${y1} (vertical rise).<br>Therefore<br>${TAN}${th} = ${fr('opposite', 'adjacent')} = ${fr('<i>QN</i>', '<i>PN</i>')} = ${SLOPE2}.<br><br>Since ${m} = ${TAN}${th} by definition, the result follows. If ${x1} = ${x2}, then <i>PN</i> = 0, the triangle degenerates, ${th} = 90°, and ${m} is undefined: the vertical line. (For an obtuse ${th}, ∠<i>QPN</i> = 180° − ${th}, and the same working with signed differences gives the same formula.) ■`,
      },
      {
        t: 'p',
        html: `<b>Why each step matters:</b> we built a right triangle on purpose so that the geometric inclination ${th} becomes a ratio of coordinate differences. The horizontal auxiliary line <i>PN</i> is the bridge that turns “angle” into “rise over run.”`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2: Condition for perpendicularity</b><br><b>Given:</b> Two non-vertical lines ${sb('ℓ', '1')}, ${sb('ℓ', '2')} with inclinations ${th1}, ${th2} and slopes ${m1} = ${TAN}${th1}, ${m2} = ${TAN}${th2}, meeting at right angles.<br><b>To Prove:</b> ${M1M2} = −1.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> If the lines are perpendicular, their inclinations differ by a right angle; take ${th2} = ${th1} + 90° (naming the lines so that ${th1} is the smaller inclination). Then<br>${m2} = ${TAN}(${th1} + 90°)<br>= −cot${NB}${th1} = −${fr('1', `${TAN}${th1}`)} = −${fr('1', m1)},<br><br>using the identity ${TAN}(<i>α</i> + 90°) = −cot${NB}<i>α</i>. Cross-multiplying gives ${M1M2} = −1. The converse runs backward through the same identity. ■`,
      },
      { t: 'p', html: `Given slopes ${m1} and ${m2}:` },
      {
        t: 'proc',
        title: 'Procedure: Finding the acute angle between two lines',
        steps: [
          `<b>Check the special poles first.</b> If either line is vertical (slope undefined), compute the angle directly from inclinations (the acute angle is |90° − ${th}|, ${th} being the other line’s inclination). The formula below assumes both slopes exist.`,
          `Compute 1 + ${M1M2}. If it equals 0, the lines are perpendicular: answer is 90°, stop.`,
          `Otherwise evaluate ${TAN}${th} = ${ANGLE}. The modulus guarantees you get tan of the acute angle.`,
          `Take ${th} = tan<sup>−1</sup>(that value). The obtuse angle, if asked, is 180° − ${th}.`,
        ],
      },
      {
        t: 'p',
        html: '<b>Reasoning behind the modulus:</b> dropping the bars gives a signed value whose sign tells you whether you measured the angle from line 1 to line 2 clockwise or anticlockwise. For “the angle between the lines,” the acute angle is wanted, so we take the absolute value.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A line passes through the points <i>A</i>(−3,\u00a02) and <i>B</i>(5,\u00a0−4). Find its slope, and state its inclination’s nature (acute or obtuse).',
        steps: [
          `<b>Given:</b> ${A1} = (−3,\u00a02), ${B2} = (5,\u00a0−4).`,
          `Apply the two-point slope formula:<br>${m} = ${SLOPE2} = ${fr('−4 − 2', '5 − (−3)')}<br>= ${fr('−6', '8')} = −${fr('3', '4')}.`,
          `Since ${m} < 0, the line falls as we move to the right, so its inclination is <b>obtuse</b> (90° < ${th} < 180°).`,
        ],
        ans: `${m} = −${fr('3', '4')}, inclination obtuse`,
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: `The line through (2,\u00a07) and (${k}, 1) is perpendicular to the line through (0,\u00a0−3) and (4,\u00a05). Find ${k}, fast.`,
        steps: [
          `<b>Speed approach.</b> First nail the known line’s slope:<br>${m2} = ${fr('5 − (−3)', '4 − 0')} = ${fr('8', '4')} = 2.`,
          `Perpendicular means the first line’s slope is the <b>negative reciprocal</b>, ${m1} = −${HALF}: don’t recompute anything, just flip and negate. Now set up the first slope:<br>${fr('1 − 7', `${k} − 2`)} = −${HALF}<br>⇒ ${fr('−6', `${k} − 2`)} = −${HALF}<br>⇒ ${k} − 2 = 12 ⇒ ${k} = 14.`,
          `<b>The trap:</b> students rush and write ${m1} = +${HALF} (forgetting the negative), landing on ${k} = −10, a classic wrong turn. The fix is a one-second sanity check: perpendicular slopes, when both exist, always have opposite signs. Since ${m2} = +2, ${m1} <b>must</b> be negative.`,
        ],
        ans: `${k} = 14`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level · multi-concept',
        q: `Three points are given: ${P}(1,\u00a01), <i>Q</i>(4,\u00a07), and <i>R</i>(<i>a</i>, <i>a</i> + 5). (i) Find <i>a</i> so that ${P}, <i>Q</i>, <i>R</i> are collinear. (ii) For that <i>a</i>, find the acute angle the line makes with the line ${y} = ${x}.`,
        steps: [
          `<b>Part (i): collinearity (slope + collinearity).</b><br>slope(<i>PQ</i>) = ${fr('7 − 1', '4 − 1')} = ${fr('6', '3')} = 2.`,
          `For collinearity, slope(<i>PR</i>) = slope(<i>PQ</i>):<br>${fr('(<i>a</i> + 5) − 1', '<i>a</i> − 1')} = 2<br>⇒ <i>a</i> + 4 = 2(<i>a</i> − 1)<br>⇒ <i>a</i> + 4 = 2<i>a</i> − 2 ⇒ <i>a</i> = 6.`,
          `So <i>R</i> = (6,\u00a011), and the three points lie on a line of slope ${m1} = 2.`,
          `<b>Part (ii): angle between lines (slope + angle formula).</b> The line ${y} = ${x} has slope ${m2} = 1. Then<br>${TAN}${th} = ${ANGLE}<br>= |${fr('1 − 2', '1 + 2(1)')}| = |${fr('−1', '3')}| = ${fr('1', '3')}.`,
        ],
        ans: `<i>a</i> = 6, ${th} = tan<sup>−1</sup>${NB}${fr('1', '3')} ≈ 18.43°`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `A line ${ell} makes an angle of 45° with the line 3${x} − ${y} + 5 = 0. Find <b>both</b> possible slopes of ${ell}, and identify which (if any) is vertical.`,
        steps: [
          `<b>Reasoning.</b> The given line has slope ${m2} = 3 (rearranged to ${y} = 3${x} + 5). Let ${ell} have slope ${m}. Because “45° with a line” can be measured on either side, we must <b>not</b> keep only the + sign; set the signed tangent equal to ±${NB}${TAN}45° = ±1:<br>${fr(`${m} − 3`, `1 + 3${m}`)} = ±1.`,
          `<b>Case +1:</b><br>${m} − 3 = 1 + 3${m} ⇒ −2${m} = 4 ⇒ ${m} = −2.`,
          `<b>Case −1:</b><br>${m} − 3 = −(1 + 3${m})<br>⇒ ${m} − 3 = −1 − 3${m}<br>⇒ 4${m} = 2 ⇒ ${m} = ${HALF}.`,
          `<b>Vertical-line check (the Advanced subtlety):</b> the formula silently assumed ${ell} is non-vertical. Could a vertical line also make 45° with the given line? A vertical line has inclination 90°; the given line has inclination tan<sup>−1</sup>${NB}3 ≈ 71.57°, so the angle between them is ≈ 18.43° ≠ 45°. So no vertical solution: both genuine slopes come from the algebra.`,
          `<b>Why this is Advanced-flavoured:</b> the careless route is to write |${fr(`${m} − 3`, `1 + 3${m}`)}| = 1 and then drop the bars as if only +1 were possible, which loses one of the <b>two</b> solutions (one line on each side of the given line); it also ignores the vertical-line possibility entirely. Both must be addressed for full marks.`,
        ],
        ans: `${m} = −2 or ${m} = ${HALF}; neither line is vertical`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>[CBSE]</b> Find the slope of the line joining (6,\u00a0−2) and (−4,\u00a03), and state whether its inclination is acute or obtuse.',
            a: `${m} = −${HALF}, obtuse.`,
          },
          {
            q: '<b>[CBSE]</b> A line has inclination 120°. Find its slope, and find the slope of any line perpendicular to it.',
            a: `${m} = −√3; perpendicular slope = ${fr('1', '√3')}.`,
          },
          {
            q: `<b>[JEE Main]</b> For what value of <i>p</i> is the line through (<i>p</i>,\u00a04) and (2,\u00a0−3) parallel to the line through (0,\u00a00) and (7,\u00a014)?`,
            a: `<i>p</i> = ${fr('11', '2')}.`,
          },
          {
            q: `<b>[JEE Main]</b> Find the acute angle between the lines with slopes ${m1} = ${HALF} and ${m2} = −3.`,
            a: `tan<sup>−1</sup>${NB}7 ≈ 81.87°.`,
          },
          {
            q: '<b>[JEE Advanced]</b> The points <i>A</i>(0,\u00a02), <i>B</i>(3,\u00a00), <i>C</i>(6,\u00a0−2) are claimed to be collinear, and a fourth point <i>D</i>(<i>t</i>,\u00a05) is to lie on the perpendicular to line <i>AB</i> drawn through <i>A</i>. Find <i>t</i> (verify the collinearity claim first).',
            a: `<i>A</i>, <i>B</i>, <i>C</i> are collinear (slope −${fr('2', '3')} throughout); the perpendicular through <i>A</i> has slope ${fr('3', '2')}, giving <i>t</i> = 2.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The slope of a line equally inclined to both coordinate axes can be:',
        opts: [
          { label: 'only 1', nudge: '<b>(A)</b> captures only one of the two valid orientations: the classic “forgot the other diagonal” error.' },
          { label: 'only −1', nudge: '<b>(B)</b> captures only one of the two valid orientations: the classic “forgot the other diagonal” error.' },
          { label: '1 or −1', nudge: null },
          { label: '0 or undefined', nudge: '<b>(D)</b> confuses “equally inclined to the axes” with “parallel to an axis,” which is the opposite situation.' },
        ],
        correct: 2,
        solution: `“Equally inclined to the axes” means the line makes 45° with each, so its inclination is 45° or 135°, giving ${m} = ${TAN}45° = 1 or ${m} = ${TAN}135° = −1.`,
      },
      {
        t: 'mcq',
        q: `Two lines are perpendicular. One has slope ${fr('2', '3')}. The other’s slope is:`,
        opts: [
          { label: fr('3', '2'), nudge: '<b>(A)</b> reciprocates but drops the negative sign: the most common slip.' },
          { label: `−${fr('3', '2')}`, nudge: null },
          { label: `−${fr('2', '3')}`, nudge: '<b>(C)</b> negates but forgets to reciprocate.' },
          { label: 'undefined', nudge: `<b>(D)</b> would be right only if the first line were horizontal (slope 0), not slope ${fr('2', '3')}.` },
        ],
        correct: 1,
        solution: `Perpendicular slopes satisfy ${M1M2} = −1, so ${m2} = −${fr('1', `(${fr('2', '3')})`)} = −${fr('3', '2')}.`,
      },
      {
        t: 'mcq',
        q: `The angle between the lines ${y} = √3${NB}${x} + 1 and the ${x}-axis is:`,
        opts: [
          {
            label: '30°',
            nudge: `<b>(A)</b> comes from reading tan<sup>−1</sup>${NB}√3 as 30° (mixing up ${TAN}30° = ${fr('1', '√3')} with ${TAN}60° = √3).`,
          },
          { label: '45°', nudge: '<b>(B)</b> assumes slope 1.' },
          { label: '60°', nudge: null },
          { label: '90°', nudge: '<b>(D)</b> assumes the line is vertical.' },
        ],
        correct: 2,
        solution: `The line has slope √3, and inclination ${th} = tan<sup>−1</sup>${NB}√3 = 60°. Since the ${x}-axis has inclination 0°, the angle between them is 60°.`,
      },
      {
        t: 'mcq',
        q: `The points <i>A</i>(2,\u00a03), <i>B</i>(4,\u00a07) and <i>C</i>(5, ${k}) are collinear. Then ${k} equals:`,
        opts: [
          {
            label: '5',
            nudge: `<b>(A)</b> 5: sign-flipped the denominator of slope(<i>AB</i>) to (2 − 4) = −2, giving ${k} = 7 + (−2) = 5.`,
          },
          { label: '9', nudge: null },
          {
            label: '11',
            nudge: `<b>(C)</b> 11: used the rise (4) instead of the slope (2), writing ${k} = 7 + 4, confusing Δ${y} with ${m}.`,
          },
          { label: '3', nudge: '<b>(D)</b> 3: misread “collinear” as “horizontal,” forcing <i>C</i> to share <i>A</i>’s <i>y</i>-coordinate.' },
        ],
        correct: 1,
        solution: `Collinearity requires slope(<i>AB</i>) = slope(<i>BC</i>). Compute slope(<i>AB</i>) = ${fr('7 − 3', '4 − 2')} = 2, then<br>slope(<i>BC</i>) = ${fr(`${k} − 7`, '5 − 4')} = ${k} − 7 = 2 ⇒ ${k} = 9.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Slope of a vertical line is infinity / zero.”</b> It is undefined, full stop. Zero is the horizontal line. Mixing these two poles is the most common slope error in board scripts.',
          `<b>Perpendicular = reciprocal (forgetting the minus).</b> ${M1M2} = −1, not ${M1M2} = 1. If both your perpendicular slopes have the same sign, you’ve already made the mistake.`,
          `<b>Modulus on the angle formula when two answers exist.</b> For “find the line making angle <i>α</i> with a given line,” set the signed ratio equal to ±${NB}${TAN}<i>α</i>: there are genuinely two such lines through a given point (one of them may be vertical, with no slope: see the next pitfall). Use the modulus only when asked for the angle between two given lines.`,
          `<b>Ignoring the vertical-line case in Advanced problems.</b> Whenever you “let the slope be ${m},” you’ve quietly excluded vertical lines. Check separately whether a vertical line also satisfies the condition.`,
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Before any slope computation, glance at the geometry. Rising left-to-right ⇒ slope positive; falling ⇒ negative; flat ⇒ 0; upright ⇒ undefined. This 2-second sign check catches most arithmetic slips before they cost marks.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `Inclination ${th}`, note: `anticlockwise from +${x}-axis, 0° ≤ ${th} < 180°.` },
          { f: 'Slope', note: `${m} = ${TAN}${th} (undefined at ${th} = 90°, i.e. vertical lines).` },
          { f: 'Two points', note: `${m} = ${SLOPE2} (needs ${x1} ≠ ${x2}).` },
          { f: 'Parallel', note: `${m1} = ${m2}. <b>Perpendicular:</b> ${M1M2} = −1.` },
          { f: 'Angle between lines', note: `${TAN}${th} = ${ANGLE}; denominator 0 ⇒ perpendicular.` },
          { f: 'Collinear', note: 'slope(<i>AB</i>) = slope(<i>BC</i>); on a vertical line no slope exists, so use area = 0.' },
        ],
        aids: ['“Horizontal Zero, Vertical Void”: slope 0 vs undefined.', '“Flip and Negate” for perpendicular slopes.', '“Equally inclined ⇒ ±1.”'],
      },
    ],
  },
];
