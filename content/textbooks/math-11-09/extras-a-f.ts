import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Additional topics A–F, pp. 860–876 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's Patterns 1–6
 * (decision 33), "Pattern N" → "Additional topic A…F".
 * A–D are the supplement's "Addendum to Chapter 9: Four Missing Problem Patterns"
 * (pp. 860–866), starting below Topic 07's memory aids on p. 860; its one-paragraph
 * opening (heading not copied) is A's "Introduction". E–F are the "Additional Topics"
 * part (pp. 867–876): its p. 867 opening and table (heading not copied) open E's
 * "Introduction"; F's answers end on p. 876, above Subtopic 08 (Topic 08, another file).
 * Each additional topic: Introduction (its italic "extends …" line), Method, Worked
 * example(s), Practice (questions paired with the book's answers).
 * Figures: the Additional Topics part's own "Figure 1" (p. 869) is m11-09-E-d1, at the
 * end of E's Method, where its caption is printed. No other drawings.
 * Every fraction is stacked (<frac>), except inside a raised run; no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const sb = (b: string, s: string) => `<i>${b}</i><sub>${s}</sub>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const a = I('a');
const b = I('b');
const c = I('c');
const h = I('h');
const k = I('k');
const m = I('m');
const n = I('n');
const p = I('p');
const q = I('q');
const x = I('x');
const y = I('y');
const A = I('A');
const B = I('B');
const C = I('C');
const L = I('L');
const O = I('O');
const P = I('P');
const Q = I('Q');
const R = I('R');
const X = I('X');
const Y = I('Y');
const lam = I('λ');
const th = I('θ');
const ELL = 'ℓ';
const L1 = sb('L', '1');
const L2 = sb('L', '2');
const a1 = sb('a', '1');
const a2 = sb('a', '2');
const b1 = sb('b', '1');
const b2 = sb('b', '2');
const c1 = sb('c', '1');
const c2 = sb('c', '2');
const d1 = sb('d', '1');
const d2 = sb('d', '2');
const x1 = sb('x', '1');
const y1 = sb('y', '1');
const xP = `${x}<sub>${P}</sub>`;
const yP = `${y}<sub>${P}</sub>`;
const xPp = `${x}<sub>${P}′</sub>`;
const yPp = `${y}<sub>${P}′</sub>`;
const Pp = `${P}′`;
const Qp = `${Q}′`;
const HALF = fr('1', '2');
const pt = (s: string, u: string, v: string) => `${I(s)}(${u},${NB}${v})`;
const Lof = (s: string) => `${L}(${s})`;
const LP = Lof(P);
const LQ = Lof(Q);
const ratio = (u: string, v: string) => `${u}${NB}∶${NB}${v}`;
const COS = `cos${NB}${th}`;
const SIN = `sin${NB}${th}`;
const XY = `(${x},${NB}${y})`;
const HK = `(${h},${NB}${k})`;
const ABC = `<i>Ax</i> + <i>By</i> + ${C}`;
const GEN = `<i>ax</i> + <i>by</i> + ${c}`;
const GEN1 = `<i>ax</i> + <i>by</i> + ${c1}`;
const SS = `${sq(a)} + ${sq(b)}`;
const vec = (s: string) => `<i>${s}⃗</i>`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 860–861 ────────────────
  {
    n: 'A',
    title: 'Areas: a line with the axes, and three lines together',
    extra: true,
    kalam: 'Solve the three pairs of lines to get the three vertices (Topic 04), then feed them to the area determinant of Topic 00, Theorem 2.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Four extra problem patterns (Additional topics A to D) that extend Chapter 9. Each entry gives the method, one worked example and two practice items with answers.',
      },
      { t: 'p', html: '(extends Topic 02’s Worked examples part, and Topic 04’s Worked examples part)' },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Case A: one line and the two axes.</b> A line ${ABC} = 0 with ${A}, ${B}, ${C} all non-zero cuts the axes at (−${fr(C, A)}, 0) and (0, −${fr(C, B)}), so together with the origin it bounds a right triangle whose legs are the two intercepts:`,
      },
      {
        t: 'formula',
        kicker: 'Area cut off by a line with the axes',
        main: `Δ = ${HALF}|${a}||${b}| = ${fr(sq(C), `2|<i>AB</i>|`)}`,
        legend: ['Δ = the area of the triangle', `${a}, ${b} = the two intercepts`, `${A}, ${B}, ${C} = the coefficients of the line (all non-zero)`],
        note: null,
      },
      {
        t: 'p',
        html: `Read the intercepts by setting ${y} = 0 and then ${x} = 0 (the Topic 02 Pro-Tip): the signs take care of themselves and the modulus finishes the job. If ${C} = 0 the line passes through the origin and bounds no triangle; if ${A} = 0 or ${B} = 0 it is parallel to an axis and again bounds none.`,
      },
      {
        t: 'p',
        html: '<b>Case B: three given lines.</b> Solve the three <b>pairs</b> of lines to get the three vertices (Topic 04), then feed them to the area determinant of Topic 00, Theorem 2. If all three lines are concurrent, there is no triangle: the three “vertices” are one point, the determinant returns 0, and that is the correct answer, not an error. If any two of the lines are parallel, there is no triangle either: that pair never meets, so one vertex is missing and the determinant is never reached.',
      },

      { t: 'part', title: 'Worked example' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `(a) Find the area of the triangle that 3${x} − 4${y} + 12 = 0 cuts off with the coordinate axes. (b) Find the area of the triangle formed by the lines ${y} = ${x}, ${y} = 2${x} and ${x} + ${y} = 6.`,
        steps: [
          `<b>Solution (a).</b> This is the line whose intercepts you already extracted in Topic 02’s second worked example: setting ${y} = 0 gives 3${x} = −12, so ${a} = −4; setting ${x} = 0 gives −4${y} = −12, so ${b} = 3. The legs have lengths |−4| = 4 and |3| = 3:<br>Δ = ${HALF}(4)(3) = 6.`,
          `Shortcut check:<br>${fr(sq(C), `2|<i>AB</i>|`)} = ${fr(sq('12'), '2 ⋅ |3 × (−4)|')}<br><br>= ${fr('144', '24')} = 6. ✓`,
          `<b>Solution (b).</b> Three pairwise intersections:<br>• ${y} = ${x} with ${y} = 2${x}: ${x} = 2${x} ⇒ ${x} = 0, giving ${pt('P', '0', '0')}.<br>• ${y} = ${x} with ${x} + ${y} = 6: 2${x} = 6 ⇒ ${x} = 3, giving ${pt('Q', '3', '3')}.<br>• ${y} = 2${x} with ${x} + ${y} = 6: 3${x} = 6 ⇒ ${x} = 2, giving ${pt('R', '2', '4')}.`,
          `Area determinant:<br>Δ = ${HALF}|0(3 − 4) + 3(4 − 0) + 2(0 − 3)|<br><br>= ${HALF}|0 + 12 − 6| = 3.`,
        ],
        ans: '(a) 6 sq. units, (b) 3 sq. units',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the area of the triangle formed by 5${x} + 3${y} − 15 = 0 and the coordinate axes.`,
            a: `Intercepts ${a} = 3, ${b} = 5, so Δ = ${HALF}(3)(5) = ${fr('15', '2')} = 7.5 sq. units<br><br>(shortcut: ${fr(sq('15'), '2 ⋅ 15')} = 7.5).`,
          },
          {
            q: `<b>[JEE Main]</b> Find the area of the triangle formed by the lines ${y} = ${x} + 1, ${y} = −${x} + 5 and ${y} = 0.`,
            a: `Vertices (2,\u00a03), (−1,\u00a00), (5,\u00a00);<br>Δ = ${HALF}|2(0 − 0) + (−1)(0 − 3) + 5(3 − 0)|<br><br>= ${HALF}(18) = 9 sq. units.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic B · pp. 861–863 ────────────────
  {
    n: 'B',
    title: 'The fixed point of a one-parameter family of lines',
    extra: true,
    kalam: 'For a point to satisfy this for every value of λ, the coefficient of λ and the λ-free part must vanish separately.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: '(extends Topic 04’s Key formulas and definitions and Worked examples parts: the reverse of the family theorem)',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Topic 04 runs the family argument forwards: given two base lines, ${L1} + <i>λL</i><sub>2</sub> = 0 sweeps out every line through their junction. Examiners far more often run it <b>backwards</b>: they hand you a line whose coefficients are linear in a parameter and ask you to prove it always passes through a fixed point ${ESTIMATE}.`,
      },
      {
        t: 'p',
        html: `Given<br>(${a1} + <i>λa</i><sub>2</sub>)${x} + (${b1} + <i>λb</i><sub>2</sub>)${y}<br>+ (${c1} + <i>λc</i><sub>2</sub>) = 0,<br><b>regroup by powers of ${lam}:</b><br>(${a1}${x} + ${b1}${y} + ${c1})<br>+ ${lam}(${a2}${x} + ${b2}${y} + ${c2}) = 0,<br>the first bracket being ${L1} and the second ${L2}.`,
      },
      {
        t: 'p',
        html: `For a point to satisfy this for <b>every</b> value of ${lam}, the coefficient of ${lam} and the ${lam}-free part must vanish separately. So solve<br>${L1} = 0 and ${L2} = 0<br>simultaneously; the solution is the fixed point. The reasoning is exactly Theorem 1 of Topic 04 read from right to left: the fixed point is the junction of the two base lines you just uncovered.`,
      },
      {
        t: 'p',
        html: `Two conditions to respect: ${L1} and ${L2} must meet in one point (if they are proportional every member is the same line; if they are parallel every member is parallel to them and there is no fixed point), and if the parameter appears non-linearly (as ${lam}<sup>2</sup>, say), group by each power of ${lam} and set every group to zero: a fixed point then exists only if all those lines pass through one point. If <b>two</b> parameters appear, group by each in turn and set every group to zero.`,
      },

      { t: 'part', title: 'Worked example' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Show that the line (2 + ${lam})${x} + (1 − 3${lam})${y} + (${lam} − 5) = 0 passes through a fixed point for every real ${lam}, and find it.`,
        steps: [
          `<b>Step 1: regroup by ${lam}.</b> Separate the terms carrying ${lam} from those that do not:<br>2${x} + <i>λx</i> + ${y} − 3<i>λy</i> + ${lam} − 5 = 0<br>⟹ (2${x} + ${y} − 5) + ${lam}(${x} − 3${y} + 1) = 0.`,
          `<b>Step 2: read off the two base lines.</b><br>${L1} ∶ 2${x} + ${y} − 5 = 0,<br>${L2} ∶ ${x} − 3${y} + 1 = 0.<br>They are not proportional, so this is a genuine one-parameter family.`,
          `<b>Step 3: the fixed point must kill both brackets.</b> From ${L2}, ${x} = 3${y} − 1. Substituting into ${L1}:<br>2(3${y} − 1) + ${y} − 5 = 0 ⟹ 7${y} − 7 = 0<br>⟹ ${y} = 1, ${x} = 2.`,
          `<b>Step 4: verify directly, for arbitrary ${lam}.</b> Put (2,\u00a01) back into the original:<br>(2 + ${lam})(2) + (1 − 3${lam})(1) + (${lam} − 5)<br>= 4 + 2${lam} + 1 − 3${lam} + ${lam} − 5 = 0.<br>The ${lam} terms cancel identically, so the point lies on every member of the family.`,
        ],
        ans: 'Fixed point (2,\u00a01)',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[JEE Main]</b> Show that (2 + ${lam})${x} + (1 − ${lam})${y} + (${lam} − 4) = 0 always passes through a fixed point, and find it.`,
            a: `Regroup as (2${x} + ${y} − 4) + ${lam}(${x} − ${y} + 1) = 0; solving 2${x} + ${y} = 4 and ${x} − ${y} = −1 gives the fixed point (1,\u00a02). Check: (2 + ${lam})(1) + (1 − ${lam})(2) + (${lam} − 4)<br>= 2 + ${lam} + 2 − 2${lam} + ${lam} − 4 = 0 for all ${lam}.`,
          },
          {
            q: `<b>[JEE Advanced]</b> For all real ${a}, ${b} not both zero, the line (2${a} + ${b})${x} + (${a} + 3${b})${y} + (2${b} − ${a}) = 0 passes through a fixed point. Find it.`,
            a: `Group by the two parameters: ${a}(2${x} + ${y} − 1) + ${b}(${x} + 3${y} + 2) = 0. Both brackets must vanish, so 2${x} + ${y} = 1 and ${x} + 3${y} = −2, giving (1,\u00a0−1). Check: (2${a} + ${b})(1) + (${a} + 3${b})(−1) + (2${b} − ${a})<br>= (2${a} − ${a} − ${a}) + (${b} − 3${b} + 2${b}) = 0 identically.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic C · pp. 863–865 ────────────────
  {
    n: 'C',
    title: 'Ratio in which a line divides a segment, and the side test',
    extra: true,
    kalam: 'This works because “inside the triangle” means “on the same side of each side-line as the remaining vertex”.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      { t: 'p', html: '(extends Topic 03: the ratio of division and the side test)' },

      { t: 'part', title: 'Method' },
      { t: 'p', html: `Write ${L}${XY} = ${ABC}, and evaluate it at the two points: ${LP} and ${LQ}.` },
      {
        t: 'p',
        html: `<b>Side test.</b> ${L} is positive on one side of the line and negative on the other (this is the signed quantity of Topic 03’s Key formulas and definitions part, before the modulus is applied).<br>• ${LP} and ${LQ} have the <b>same</b> sign ⇒ ${P} and ${Q} are on the same side, and the line misses the segment <i>PQ</i>.<br>• <b>Opposite</b> signs ⇒ the line separates them and cuts the segment <i>PQ</i>.<br>• Either value zero ⇒ that point is on the line.`,
      },
      { t: 'p', html: `<b>Ratio.</b> The line ${L} = 0 divides the segment <i>PQ</i> in the ratio` },
      {
        t: 'formula',
        kicker: 'Ratio in which a line divides a segment',
        main: `${fr('<i>PX</i>', '<i>XQ</i>')} = −${fr(LP, LQ)}<br>positive: internal (opposite sides); negative: external (same side)`,
        legend: [
          `${L} = the expression ${ABC}`,
          `${P}, ${Q} = the ends of the segment`,
          `${X} = the point of division`,
          `${LP}, ${LQ} = the values of ${L} at ${P} and ${Q}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `where ${X} is the point of division. <b>Why it works:</b> ${L} is a first-degree (affine) expression, so if ${X} divides <i>PQ</i> in the ratio ${ratio(m, n)} then<br>${L}(${X}) = ${fr(`${m}${NB}${LQ} + ${n}${NB}${LP}`, `${m} + ${n}`)}:<br>the same weighted average that the section formula applies to the coordinates. Setting ${L}(${X}) = 0 gives ${m}${NB}${LQ} + ${n}${NB}${LP} = 0, i.e. ${ratio(m, n)} = −${LP}${NB}∶${NB}${LQ}.`,
      },
      {
        t: 'p',
        html: `Read the sign of the answer, do not discard it:<br>• <b>Positive ratio</b> ⇒ internal division ⇒ the points are on opposite sides. The two tests always agree.<br>• <b>Negative ratio</b> ⇒ external division ⇒ same side.<br>• <b>Ratio</b> = −1 ⇒ external division in the ratio ${ratio('1', '1')}, which Topic 00 told you sends the point to infinity: the line is parallel to <i>PQ</i> and never meets it.`,
      },
      {
        t: 'p',
        html: `<b>Origin-inside-a-triangle test.</b> For each side of the triangle, write the side’s line equation and compare the sign of ${L} at the origin with its sign at the <b>opposite vertex</b>. If all three comparisons agree, the origin is inside; a single disagreement puts it outside, and a zero puts it on that side. This works because “inside the triangle” means “on the same side of each side-line as the remaining vertex”.`,
      },

      { t: 'part', title: 'Worked example' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `(a) Find the ratio in which the line 2${x} + 3${y} − 12 = 0 divides the segment joining ${pt('A', '1', '2')} and ${pt('B', '5', '6')}, and state whether ${A} and ${B} lie on the same side. (b) Show that the origin lies inside the triangle with vertices ${pt('P', '3', '1')}, ${pt('Q', '−2', '2')}, ${pt('R', '0', '−3')}.`,
        steps: [
          `<b>Solution (a).</b> With ${L}${XY} = 2${x} + 3${y} − 12:<br>${Lof(A)} = 2(1) + 3(2) − 12 = −4,<br>${Lof(B)} = 2(5) + 3(6) − 12 = 16.`,
          `Opposite signs, so ${A} <b>and</b> ${B} <b>are on opposite sides</b> and the line does cut the segment. The ratio is<br>${fr('<i>AX</i>', '<i>XB</i>')} = −${fr(Lof(A), Lof(B))}<br><br>= −${fr('−4', '16')} = ${fr('1', '4')},<br><br>so the line divides <i>AB</i> internally in the ratio ${ratio('1', '4')}: positive, consistent with “opposite sides”.`,
          `<b>Verification.</b> The point dividing <i>AB</i> in ${ratio('1', '4')} from ${A} is<br>${X} = (${fr('1(5) + 4(1)', '5')}, ${fr('1(6) + 4(2)', '5')})<br><br>= (${fr('9', '5')}, ${fr('14', '5')}), and<br><br>2(${fr('9', '5')}) + 3(${fr('14', '5')}) − 12<br><br>= ${fr('18 + 42 − 60', '5')} = 0. ✓`,
          '<b>Solution (b).</b> Write each side as a line and evaluate at the origin and at the opposite vertex.',
          `<b>Side</b> <i>PQ</i> through (3,\u00a01) and (−2,\u00a02): slope = ${fr('2 − 1', '−2 − 3')} = −${fr('1', '5')},<br><br>so ${y} − 1 = −${fr('1', '5')}(${x} − 3), i.e. ${x} + 5${y} − 8 = 0.<br>At ${pt('R', '0', '−3')} ∶ 0 − 15 − 8 = −23.<br>At ${pt('O', '0', '0')} ∶ −8. Same sign.`,
          `<b>Side</b> <i>QR</i> through (−2,\u00a02) and (0,\u00a0−3): slope = ${fr('−3 − 2', '0 + 2')} = −${fr('5', '2')},<br><br>so ${y} = −${fr('5', '2')}${x} − 3, i.e. 5${x} + 2${y} + 6 = 0.<br>At ${pt('P', '3', '1')} ∶ 15 + 2 + 6 = 23.<br>At ${O} ∶ 6. Same sign.`,
          `<b>Side</b> <i>RP</i> through (0,\u00a0−3) and (3,\u00a01): slope = ${fr('1 + 3', '3 − 0')} = ${fr('4', '3')},<br><br>so ${y} = ${fr('4', '3')}${x} − 3, i.e. 4${x} − 3${y} − 9 = 0.<br>At ${pt('Q', '−2', '2')} ∶ −8 − 6 − 9 = −23.<br>At ${O} ∶ −9. Same sign.`,
          'All three agree, so the origin lies on the interior side of every edge.',
        ],
        ans: `(a) ${ratio('1', '4')} internally, opposite sides; (b) the origin is inside`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[JEE Main]</b> Find the ratio in which ${x} + 3${y} − 6 = 0 divides the segment joining ${pt('A', '−2', '1')} and ${pt('B', '4', '3')}, and state whether ${A} and ${B} are on the same side.`,
            a: `${Lof(A)} = −2 + 3 − 6 = −5 and ${Lof(B)} = 4 + 9 − 6 = 7; opposite signs, so <b>opposite sides</b>, and the ratio is<br>−${fr('−5', '7')} = ${fr('5', '7')}, i.e. internal division in ${ratio('5', '7')}.<br><br>(Check: the dividing point is (${fr('1', '2')}, ${fr('11', '6')}), and ${fr('1', '2')} + ${fr('11', '2')} − 6 = 0.)`,
          },
          {
            q: `<b>[JEE Advanced]</b> Determine whether (2,\u00a0−1) and (5,\u00a03) lie on the same side of 4${x} − 3${y} + 2 = 0, and find the ratio in which the line divides the segment joining them. Interpret your answer geometrically.`,
            a: `${L}(2,\u00a0−1) = 8 + 3 + 2 = 13 and ${L}(5,\u00a03) = 20 − 9 + 2 = 13; same sign, so <b>same side</b>. The ratio is −${fr('13', '13')} = −1: external division in the ratio ${ratio('1', '1')}, which by the Topic 00 edge case is the point at infinity. Geometrically the line never meets the segment because it is <b>parallel</b> to it: the segment’s direction (3,\u00a04) is perpendicular to the normal (4,\u00a0−3), since 4(3) + (−3)(4) = 0.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic D · pp. 865–866 ────────────────
  {
    n: 'D',
    title: 'Shifting the origin inside an equation',
    extra: true,
    kalam: 'Guard rail: the shift moves the origin, it never rotates the axes.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      { t: 'p', html: '(extends Topic 00: an Advanced use of shifting the origin)' },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Shifting the origin to ${HK} with the axes kept parallel means a point’s coordinates relabel as ${X} = ${x} − ${h}, ${Y} = ${y} − ${k}. To transform an <b>equation</b> you need the substitution in the other direction:<br>${x} = ${X} + ${h}, ${y} = ${Y} + ${k}.`,
      },
      {
        t: 'p',
        html: `Substitute, expand, and collect. Two facts make this worth doing:<br>• <b>On a line,</b> the shift changes only the constant term; the coefficients of ${x} and ${y} (hence the slope) are untouched. The new constant vanishes exactly when the new origin lies on the line.<br>• <b>On a second-degree curve with a centre</b> (a circle, an ellipse, a hyperbola), you can choose ${h} and ${k} to make the first-degree terms disappear. Setting the coefficients of ${X} and ${Y} to zero gives two equations for ${h} and ${k}; the surviving equation is the curve referred to its own centre. (A parabola has no centre: no shift removes both of its first-degree terms.) This is why translation of axes is set-up machinery in JEE Advanced: it turns a shifted conic into a standard one before you do any real work.`,
      },
      {
        t: 'p',
        html: 'Guard rail: the shift moves the origin, it never rotates the axes. Slopes, distances, angles and areas are all unchanged; only labels move.',
      },

      { t: 'part', title: 'Worked example' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `(a) The origin is shifted to (1,\u00a02), the axes remaining parallel. Find the new equation of the line 3${x} − 4${y} + 5 = 0 and interpret the result. (b) Find the point to which the origin must be shifted so that the equation ${sq(x)} + ${sq(y)} − 4${x} + 6${y} − 3 = 0 has no first-degree terms, and write the transformed equation.`,
        steps: [
          `<b>Solution (a).</b> Substitute ${x} = ${X} + 1, ${y} = ${Y} + 2:<br>3(${X} + 1) − 4(${Y} + 2) + 5<br>= 3${X} + 3 − 4${Y} − 8 + 5 = 3${X} − 4${Y} + 0.`,
          `So the new equation is 3${X} − 4${Y} = 0. <b>Interpretation:</b> the constant term vanished, which says the new origin lies on the line, and indeed 3(1) − 4(2) + 5 = 0. The coefficients 3 and −4 are unchanged, so the slope is still ${fr('3', '4')}: translating axes cannot tilt a line.`,
          `<b>Solution (b).</b> Substitute ${x} = ${X} + ${h}, ${y} = ${Y} + ${k} into ${sq(x)} + ${sq(y)} − 4${x} + 6${y} − 3 = 0:<br>(${X} + ${h})<sup>2</sup> + (${Y} + ${k})<sup>2</sup><br>− 4(${X} + ${h}) + 6(${Y} + ${k}) − 3 = 0.`,
          `Expand and group by the powers of ${X} and ${Y}:<br>${sq(X)} + ${sq(Y)} + (2${h} − 4)${X} + (2${k} + 6)${Y}<br>+ (${sq(h)} + ${sq(k)} − 4${h} + 6${k} − 3) = 0.`,
          `Kill the first-degree terms:<br>2${h} − 4 = 0 ⇒ ${h} = 2,<br>2${k} + 6 = 0 ⇒ ${k} = −3.`,
          `Constant term at ${HK} = (2,\u00a0−3):<br>4 + 9 − 8 − 18 − 3 = −16.<br>So the transformed equation is ${sq(X)} + ${sq(Y)} − 16 = 0.`,
          `<b>Check by completing the square in the original:</b> (${x} − 2)<sup>2</sup> + (${y} + 3)<sup>2</sup> = 3 + 4 + 9 = 16: a circle of centre (2,\u00a0−3) and radius 4. The shift simply moved the origin to that centre, which is exactly what “no first-degree terms” means for a circle.`,
        ],
        ans: `(a) 3${X} − 4${Y} = 0; (b) shift to (2,\u00a0−3), ${sq(X)} + ${sq(Y)} = 16`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[JEE Main]</b> Find the point to which the origin must be shifted so that ${sq(x)} + ${sq(y)} + 8${x} − 10${y} + 5 = 0 has no first-degree terms, and state the new equation.`,
            a: `Substituting ${x} = ${X} + ${h}, ${y} = ${Y} + ${k} gives first-degree coefficients 2${h} + 8 and 2${k} − 10, so ${h} = −4, ${k} = 5; the constant becomes 16 + 25 − 32 − 50 + 5 = −36, giving ${sq(X)} + ${sq(Y)} = 36 (a circle of centre (−4,\u00a05), radius 6).`,
          },
          {
            q: `<b>[CBSE]</b> The origin is shifted to (2,\u00a0−1), the axes remaining parallel. Find the new equation of the line 4${x} + 3${y} − 7 = 0 and the new coordinates of the point (5,\u00a03).`,
            a: `Substituting ${x} = ${X} + 2, ${y} = ${Y} − 1: 4${X} + 8 + 3${Y} − 3 − 7 = 0, i.e. 4${X} + 3${Y} − 2 = 0; the point becomes (${X}, ${Y}) = (5 − 2, 3 − (−1)) = (3,\u00a04), using “new equals old minus shift”.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic E · pp. 867–873 ────────────────
  {
    n: 'E',
    title: 'Locus by introducing and eliminating a parameter',
    extra: true,
    kalam: 'You cannot translate the rule until you have named the thing that is varying.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topics 00–06, Topic 07 and Additional topics A to D between them cover the whole NCERT chapter and almost all of the JEE Main and JEE Advanced syllabus entry for straight lines. Two skills deserve a fuller treatment than the chapter gives them, and this addendum supplies it, continuing the letters. It also adds one further topic, pair of straight lines, as Topic 08.',
      },
      {
        t: 'p',
        html: 'The first is <b>locus</b>. The JEE Main syllabus names “locus and its equation” as its own line item, and four separate Exam relevance parts in this chapter (Topics 00, 01, 02 and 03) promise that locus is where JEE Advanced does its damage. What the chapter actually delivers is the four-step procedure in Topic 00’s Theorems, proofs and standard derivations part, one Apollonius circle (Topic 00’s fourth worked example), one perpendicular bisector (Topic 00’s practice question 5) and Topic 05’s bisector locus (the points equidistant from two lines). Every one of those is a direct-condition locus: the rule is handed to you as a statement about the moving point, and you translate it. The variety that JEE actually sets (where the moving point is tied to a <b>variable line or a variable auxiliary point</b>, and you must introduce a parameter and then eliminate it) is named in the third step of Topic 00’s procedure but never worked anywhere in the chapter. That is Additional topic E.',
      },
      {
        t: 'p',
        html: 'The second is <b>reflecting a line in a line</b>. Topic 06 gives a correct general procedure (reflect two points, rejoin) and a good Pro-Tip for the intersecting case, but it stops one step short in two places: it offers nothing faster than reflecting two points for a mirror <b>parallel</b> to the line being reflected, where the Pro-Tip’s shortcut cannot start, and its Pitfall 3 states a rule that is too strong and costs students a fast, general technique. That is Additional topic F, which is part method and part errata.',
      },
      {
        t: 'p',
        html: '<b>Pair of straight lines.</b> This topic appears as Topic 08, continuing the chapter’s Topic 00–07 numbering. It is written as a full topic in the standard eight-section form and is optional for a Boards-only reader, since it lies outside NCERT Class 11.',
      },
      {
        t: 'table',
        title: null,
        head: ['Entry', 'Topic', 'Read after'],
        rows: [
          ['Additional topic E', 'Locus by introducing and eliminating a parameter', 'Topic 00’s Theorems, proofs and standard derivations part'],
          ['Additional topic F', 'Reflecting a line in a line: the substitution map, and the parallel mirror', 'Topic 06’s Theorems, proofs and standard derivations part'],
          ['Topic 08', 'Pair of straight lines', 'Topic 07 (the whole chapter)'],
        ],
      },
      {
        t: 'p',
        html: 'Extends Topic 00’s Theorems, proofs and standard derivations part (Procedure: Finding the equation of a locus) and its fourth worked example. Uses the intercept form of Topic 02, the distance formulas of Topic 03 and the fixed-point argument of Additional topic B.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Topic 00 gave you the four-step procedure for the case where the rule is already a statement about the moving point alone. Most JEE locus problems are not like that ${ESTIMATE}. Instead, some other object moves (a line swings about a fixed point, a rod slides with its ends on the axes, an angle sweeps) and your point is defined in terms of it. You cannot translate the rule until you have named the thing that is varying. So the procedure grows two steps in the middle:`,
      },
      {
        t: 'p',
        html: `1. <b>Name the moving point</b> ${pt('P', h, k)}. Never ${XY}: you need ${XY} free to stand for “any point” while you work.<br>2. <b>Name the parameter.</b> Look at the configuration and ask what single number decides which member of the family you are looking at. It is almost always one of: the slope ${m} of the variable line, one of its intercepts ${a} or ${b}, an inclination ${th}, or the coordinates of one auxiliary point that is itself constrained.<br>3. <b>Write</b> ${h} <b>and</b> ${k} <b>in terms of that parameter</b>, using whatever machinery the configuration hands you: section formula, intercept form, foot of perpendicular.<br>4. <b>Write the constraint</b> the parameter must satisfy (the fixed point the line passes through, the fixed length of the rod, the fixed sum of distances).<br>5. <b>Eliminate the parameter.</b> Three eliminations cover almost everything:<br>• <b>Solve and substitute</b>: get the parameter alone from one equation, push it into the other. Use when the parameter appears polynomially.<br>• <b>Square and add</b>: use when the parameter enters as ${COS} and ${SIN}, so that cos<sup>2</sup>${NB}${th} + sin<sup>2</sup>${NB}${th} = 1 does the work in one line.<br>• <b>Add or subtract</b>: use when the parameter enters the two expressions symmetrically and cancels.<br>6. <b>Replace</b> ${HK} <b>by</b> ${XY} and state any restriction (the locus is often only part of the curve you have written).`,
      },
      {
        t: 'p',
        html: `Three guard rails, in the order they are usually broken:<br>• <b>The parameter may not survive into the answer.</b> If ${m} or ${th} is still on the page, you have written a family of curves, not a locus. This is the single most common way a correct calculation scores zero.<br>• <b>Eliminate the parameter, not</b> ${h} <b>and</b> ${k}<b>.</b> Under time pressure students solve the simultaneous equations for the wrong unknowns and end up with an identity.<br>• <b>Always test one concrete member.</b> Pick the easiest line of the family, compute the point it produces, and check that point against your locus. It takes ten seconds and it catches both the factor-of-two error in this additional topic’s first worked example and any branch that squaring may have added.`,
      },
      { t: 'fig', id: 'm11-09-E-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: `A variable line passes through the fixed point ${pt('R', '3', '4')} and meets the positive ${x}-axis at ${A} and the positive ${y}-axis at ${B}. Find the locus of the midpoint of <i>AB</i>.`,
        steps: [
          `<b>Step 1: name the moving point.</b> Let the midpoint be ${pt('P', h, k)}.`,
          `<b>Step 2: name the parameter, and choose a good one.</b> The obvious parameter is the slope, but the intercepts are better here, because the midpoint is built out of them directly. Let the line have ${x}-intercept ${a} and ${y}-intercept ${b}, so ${A} = (${a}, 0) and ${B} = (0, ${b}).`,
          `<b>Step 3: write ${h}, ${k} in terms of the parameters.</b> By the midpoint formula (Topic 00),<br>${h} = ${fr(`${a} + 0`, '2')}, ${k} = ${fr(`0 + ${b}`, '2')}<br>⟹ ${a} = 2${h}, ${b} = 2${k}.<br>This inversion is the whole example. Read it aloud: <b>the intercepts are twice the midpoint’s coordinates</b>, not equal to them.`,
          `<b>Step 4: write the constraint.</b> In intercept form (Topic 02) the line is ${fr(x, a)} + ${fr(y, b)} = 1, and it must pass through ${pt('R', '3', '4')}:<br><br>${fr('3', a)} + ${fr('4', b)} = 1.`,
          `<b>Step 5: eliminate.</b> Substitute ${a} = 2${h}, ${b} = 2${k}:<br>${fr('3', `2${h}`)} + ${fr('4', `2${k}`)} = 1<br><br>⟹ ${fr('3', h)} + ${fr('4', k)} = 2.`,
          `<b>Step 6: restore ${XY} and clear fractions.</b><br>${fr('3', x)} + ${fr('4', y)} = 2 ⟹ 3${y} + 4${x} = 2<i>xy</i>,<br>a rectangular hyperbola, valid for ${x}${NB}>${NB}0, ${y}${NB}>${NB}0 (the problem restricted ${A} and ${B} to the positive axes), and with ${x}${NB}≠${NB}0, ${y}${NB}≠${NB}0 forced anyway by the intercept form.`,
          `<b>Test one member.</b> Take the line of slope −1 through ${R}: ${x} + ${y} = 7, so ${A} = (7,\u00a00), ${B} = (0,\u00a07) and the midpoint is (${fr('7', '2')}, ${fr('7', '2')}). Then<br><br>${fr('3', fr('7', '2'))} + ${fr('4', fr('7', '2'))} = ${fr('6', '7')} + ${fr('8', '7')} = 2.<br><br>Correct. Take a second, 4${x} + 3${y} = 24 (it passes through ${R} since 12 + 12 = 24): ${A} = (6,\u00a00), ${B} = (0,\u00a08), midpoint (3,\u00a04), and<br><br>${fr('3', '3')} + ${fr('4', '4')} = 2. Correct again.`,
          `<b>The trap.</b> The seductive wrong answer is ${fr('3', x)} + ${fr('4', y)} = 1, and it is produced by skipping Step 3: writing the line as<br><br>${fr(x, h)} + ${fr(y, k)} = 1<br><br>as though the midpoint were the intercept point, and then substituting ${R}. It is a tempting wrong option because it looks exactly like the intercept form you were taught, and because it passes a lazy dimensional check. The ten-second test above kills it instantly:<br><br>${fr('3', fr('7', '2'))} + ${fr('4', fr('7', '2'))} = 2${NB}≠${NB}1.<br><br><b>Whenever the moving point is a midpoint or a section point of a variable segment, the first thing you write down is the auxiliary point in terms of</b> ${HK}<b>: never the other way round.</b>`,
        ],
        ans: `4${x} + 3${y} = 2<i>xy</i> i.e. ${fr('3', x)} + ${fr('4', y)} = 2`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `As ${m} runs over all real values, the two lines<br>${L1} ∶ ${x} + <i>my</i> = 1, ${L2} ∶ <i>mx</i> − ${y} = 1<br>meet in a point. Find the locus of that point, and identify the curve geometrically.`,
        steps: [
          `<b>Solution: the algebraic route.</b> Let the intersection be ${pt('P', h, k)}, so ${h} + <i>mk</i> = 1 and <i>mh</i> − ${k} = 1. Solving the pair,<br>${h} = ${fr(`1 + ${m}`, `1 + ${sq(m)}`)}, ${k} = ${fr(`${m} − 1`, `1 + ${sq(m)}`)}.`,
          `Now eliminate ${m}. Squaring and adding is the move, because the denominators are identical:<br>${sq(h)} + ${sq(k)} = ${fr(`(1 + ${m})<sup>2</sup> + (${m} − 1)<sup>2</sup>`, `(1 + ${sq(m)})<sup>2</sup>`)}<br><br>= ${fr(`2 + 2${sq(m)}`, `(1 + ${sq(m)})<sup>2</sup>`)} = ${fr('2', `1 + ${sq(m)}`)}.`,
          `That still carries ${m}, so it is not yet an answer, but notice what a plain subtraction gives:<br>${h} − ${k} = ${fr(`(1 + ${m}) − (${m} − 1)`, `1 + ${sq(m)}`)}<br><br>= ${fr('2', `1 + ${sq(m)}`)}.`,
          `The two right-hand sides are the same object. Equating them eliminates ${m} completely:<br>${sq(h)} + ${sq(k)} = ${h} − ${k}<br>⟹ ${sq(x)} + ${sq(y)} − ${x} + ${y} = 0.`,
          `<b>The geometric route, which is faster and is the point of the example.</b> Read each line by the reverse-family method of Additional topic B (group by the parameter):<br>• ${L1}: (${x} − 1) + ${m}(${y}) = 0, so both brackets vanish at ${pt('A', '1', '0')}. Every ${L1} passes through ${A}.<br>• ${L2}: (−${y} − 1) + ${m}(${x}) = 0, so both brackets vanish at ${pt('B', '0', '−1')}. Every ${L2} passes through ${B}.`,
          `And the slopes are −${fr('1', m)} and ${m} (${m}${NB}≠${NB}0), whose product is −1: <b>the two lines are perpendicular for every</b> ${m} (at ${m} = 0 they are ${x} = 1 and ${y} = −1, perpendicular too). So ${P} is a point at which <i>AP</i> ⟂ <i>BP</i>: the classical right-angle locus, which is the circle on <i>AB</i> as diameter. Writing that circle directly,<br>(${x} − 1)(${x} − 0) + (${y} − 0)(${y} + 1) = 0<br>⟹ ${sq(x)} + ${sq(y)} − ${x} + ${y} = 0,<br>in agreement with the algebra. Its centre is (${HALF}, −${HALF}) and its radius is<br><br>${fr('1', '√2')} = ${fr('|<i>AB</i>|', '2')}.`,
          `<b>Excluded point.</b> No finite ${m} gives ${h} = ${k} = 0: ${h} = 0 forces ${m} = −1, and then ${k} = −1${NB}≠${NB}0. So the origin ${pt('O', '0', '0')}, which does lie on the circle, is reached only in the limit ${m} → ∞, where ${L1} → ${y} = 0 and ${L2} → ${x} = 0, neither of which belongs to the family. State the locus as the circle <b>less the single point</b> ${pt('O', '0', '0')} if the question asks for the exact set. (By contrast ${pt('B', '0', '−1')} is attained, at ${m} = −1, where ${L1} ∶ ${x} − ${y} = 1 and ${L2} ∶ −${x} − ${y} = 1 meet at ${B}.) This is the same kind of caveat as the “the family misses ${L2}” remark of Topic 04: a limiting position of a family of lines need not be a member of it.`,
          `<b>Why this is Advanced-flavoured:</b> the brute-force solve-and-eliminate works, but only after you notice that ${sq(h)} + ${sq(k)} and ${h} − ${k} collapse to the same expression, which is luck dressed as skill. The fixed-point-plus-perpendicularity reading gives the answer in two lines and tells you what the curve is, which is what a multi-part Advanced question goes on to ask.`,
        ],
        ans: `${sq(x)} + ${sq(y)} − ${x} + ${y} = 0; that is, the circle on ${pt('A', '1', '0')}${pt('B', '0', '−1')} as diameter.`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE] A rod of length 10 slides with one end on the ${x}-axis and the other on the ${y}-axis. Find the locus of its midpoint.`,
            a: `Ends ${pt('A', a, '0')}, ${pt('B', '0', b)} with ${sq(a)} + ${sq(b)} = 100; the midpoint gives ${a} = 2${h}, ${b} = 2${k}, so 4${sq(h)} + 4${sq(k)} = 100 and the locus is ${sq(x)} + ${sq(y)} = 25: a circle of radius 5, centred at the origin. (Sanity check: the midpoint of a segment of length 10 whose ends slide on perpendicular axes is always at distance 5 from their crossing point, because the midpoint of the hypotenuse of a right triangle is its circumcentre: Topic 07, right-triangle shortcut.)`,
          },
          {
            q: '[JEE Main] Find the locus of the foot of the perpendicular drawn from the origin to a variable line that always passes through the fixed point (4,\u00a00).',
            a: `Let the foot be ${pt('P', h, k)} and write ${R} = (4,\u00a00). The line is <i>PR</i>, and <i>OP</i> is perpendicular to it, so ${vec('PO')}${NB}⋅${NB}${vec('PR')} = 0. That is (0 − ${h})(4 − ${h}) + (0 − ${k})(0 − ${k}) = 0, i.e. ${h}(${h} − 4) + ${sq(k)} = 0, giving ${sq(x)} + ${sq(y)} − 4${x} = 0: the circle on the segment from (0,\u00a00) to (4,\u00a00) as diameter. Check with the line through (4,\u00a00) of slope 1, i.e. ${x} − ${y} − 4 = 0: its foot from the origin is (2,\u00a0−2), and 4 + 4 − 8 = 0. Correct.`,
          },
          {
            q: `[JEE Main] ${A} lies on the ${x}-axis, ${B} lies on the ${y}-axis, and <i>AB</i> = 6. Find the locus of the point ${P} dividing <i>AB</i> internally in the ratio ${ratio('1', '2')}, measured from ${A}.`,
            a: `${A} = (${a}, 0), ${B} = (0, ${b}), ${sq(a)} + ${sq(b)} = 36. The section formula with ${ratio(m, n)} = ${ratio('1', '2')} from ${A} gives<br>${P} = (${fr(`2${a}`, '3')}, ${fr(b, '3')}), so ${a} = ${fr(`3${h}`, '2')} and ${b} = 3${k}.<br><br>Then ${fr(`9${sq(h)}`, '4')} + 9${sq(k)} = 36, i.e.<br><br>${fr(sq(x), '16')} + ${fr(sq(y), '4')} = 1: an ellipse.<br><br>Check the extreme member ${a} = 6, ${b} = 0: ${P} = (4,\u00a00), and ${fr('16', '16')} + 0 = 1. Correct.`,
          },
          {
            q: `[JEE Main] As ${th} varies, find the locus of the point of intersection of ${x}${NB}${COS} + ${y}${NB}${SIN} = ${a} and ${x}${NB}${SIN} − ${y}${NB}${COS} = ${b}, where ${a} and ${b} are fixed.`,
            a: `Square and add. The cross terms ±2<i>xy</i>${NB}${COS}${NB}${SIN} cancel and cos<sup>2</sup>${NB}${th} + sin<sup>2</sup>${NB}${th} = 1 collapses the rest, leaving ${sq(x)} + ${sq(y)} = ${sq(a)} + ${sq(b)}: a circle centred at the origin of radius √(${sq(a)} + ${sq(b)}). Geometric reading, worth more than the algebra: the two lines are perpendicular for every ${th} (their normals are (${COS}, ${SIN}) and (${SIN}, −cos${NB}${th}), whose dot product is zero), and the origin sits at distance |${a}| from the first and |${b}| from the second. Those two perpendicular distances are the legs of a right triangle with hypotenuse <i>OP</i>, so <i>OP</i><sup>2</sup> = ${sq(a)} + ${sq(b)} is fixed by Pythagoras alone.`,
          },
          {
            q: `[JEE Advanced] A variable line makes intercepts ${a} and ${b} on the axes, subject to<br><br>${fr('1', sq(a))} + ${fr('1', sq(b))} = ${fr('1', sq(c))}<br><br>with ${c}${NB}>${NB}0 fixed. Find the locus of the foot of the perpendicular from the origin to the line.`,
            a: `The line is ${fr(x, a)} + ${fr(y, b)} = 1, i.e. <i>bx</i> + <i>ay</i> − <i>ab</i> = 0, and its distance from the origin is<br><br>${fr(`|<i>ab</i>|`, `√(${SS})`)} = ${fr('1', `√(${fr('1', sq(a))} + ${fr('1', sq(b))})`)} = ${c},<br><br>the same for every member of the family. The foot of the perpendicular therefore always sits at distance ${c} from the origin, so the locus is ${sq(x)} + ${sq(y)} = ${sq(c)}, less the four points (±${c}, 0) and (0, ±${c}), where the line would be parallel to an axis. Notice that the parameter never had to be eliminated by algebra: the constraint was the elimination in disguise. Check with ${c} = 2, ${a} = 4, ${b} = ${fr('4', '√3')}:<br><br>the foot is (1, √3) and 1 + 3 = 4 = ${sq(c)}. Correct.`,
          },
          {
            q: `[JEE Main] A variable line through the fixed point (${a}, ${b}) meets the axes at ${A} and ${B}. With ${O} the origin, find the locus of the <b>centroid</b> of △<i>OAB</i>, and say in one line how the answer differs from the first worked example of this additional topic and why.`,
            a: `Let ${A} = (${p}, 0), ${B} = (0, ${q}) and let the centroid be ${HK}. The centroid of △<i>OAB</i> is<br>(${fr(`0 + ${p} + 0`, '3')}, ${fr(`0 + 0 + ${q}`, '3')}),<br><br>so ${p} = 3${h} and ${q} = 3${k}. The line passes through (${a}, ${b}), so ${fr(a, p)} + ${fr(b, q)} = 1,<br><br>giving ${fr(a, `3${h}`)} + ${fr(b, `3${k}`)} = 1, i.e. ${fr(a, h)} + ${fr(b, k)} = 3 and<br><br><i>bx</i> + <i>ay</i> = 3<i>xy</i>.<br><br>The difference from the first worked example of this additional topic is the single factor 3 in place of 2, and it comes from Step 3 alone: a centroid is one <b>third</b> of the way out to the intercepts, a midpoint one half, so the inversion is ${p} = 3${h} rather than ${p} = 2${h}. Everything after Step 3 is identical. (Check with ${a} = 3, ${b} = 4 and the line 4${x} + 3${y} = 24: ${A} = (6,\u00a00), ${B} = (0,\u00a08), centroid (2, ${fr('8', '3')}), and 4(2) + 3(${fr('8', '3')}) = 16 = 3(2)(${fr('8', '3')}). Correct.)`,
          },
          {
            q: `[JEE Advanced] The sum of the perpendicular distances of a variable point ${pt('P', x, y)} from the lines ${x} + ${y} − 5 = 0 and 3${x} − 2${y} + 7 = 0 is always 10. Show that ${P} moves on a parallelogram whose sides are straight line segments, and write the equation of the side that lies in the region where both signed distances are positive.`,
            a: `With ${d1} = ${fr(`|${x} + ${y} − 5|`, '√2')} and ${d2} = ${fr(`|3${x} − 2${y} + 7|`, '√13')},<br><br>the condition ${d1} + ${d2} = 10 splits into four cases, one per sign pair, and <b>each case is first-degree in</b> ${x} <b>and</b> ${y}, because dropping a modulus leaves a linear expression and a sum of linear expressions is linear. Hence each side of the locus lies on a straight line. For the region where both signed distances are positive, multiply through by √26:<br>√13${NB}(${x} + ${y} − 5) + √2${NB}(3${x} − 2${y} + 7)<br>= 10√26,<br>that is<br>(√13 + 3√2)${NB}${x} + (√13 − 2√2)${NB}${y}<br>− (5√13 − 7√2 + 10√26) = 0.<br>The four cases together trace a <b>parallelogram</b>, one side per sign region, centred on the intersection of the two given lines. Here that intersection is (${fr('3', '5')}, ${fr('22', '5')}) and the four vertices are<br><br>(${fr('3', '5')} ± 4√2, ${fr('22', '5')} ± 6√2) (on 3${x} − 2${y} + 7 = 0) and<br><br>(${fr('3', '5')} ± 2√13, ${fr('22', '5')} ∓ 2√13) (on ${x} + ${y} − 5 = 0).<br><br>It is centrally symmetric because reflecting a point through the intersection leaves both distances ${d1} and ${d2} unchanged. This is the same shape reason that |${x}| + |${y}| = 1 is a square and not a line.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic F · pp. 873–876 ────────────────
  {
    n: 'F',
    title: 'Reflecting a line in a line: the substitution map, and the parallel mirror',
    extra: true,
    kalam: 'Reflection in a fixed line is a map of the plane to itself, and it is its own inverse: reflect twice and you are back where you started.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 06’s Theorems, proofs and standard derivations part (Procedure: Reflecting a line m in a line ℓ), its Common student pitfalls and pro-tips part, Pitfall 3, and the Pro-Tip. Contains one correction to the main text.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Topic 06 gave you two routes and both are sound:<br>• <b>Route A (always works).</b> Reflect two points of ${m} in ${ELL} and join the images.<br>• <b>Route B (faster, needs</b> ${m} <b>and</b> ${ELL} <b>to meet).</b> The reflected line passes through ${m} ∩ ${ELL} and through the image of any one point of ${m}, so one image point suffices.<br>Two situations defeat them, and each has a clean answer.`,
      },
      {
        t: 'p',
        html: `<b>Route C: the substitution map. This is the general form of the “</b>${y} = ${x}<b>? Just swap” shortcut.</b> Reflection in a fixed line is a map of the plane to itself, and it is its <b>own inverse</b>: reflect twice and you are back where you started. That single fact licenses the following: if the reflection in ${ELL} sends ${XY} to (${X}${XY}, ${Y}${XY}), then substituting ${X} and ${Y} in place of ${x} and ${y} in the equation of ${m} gives the equation of the reflected line, immediately. For a general mirror ${ELL} ∶ ${GEN} = 0, the map is just the Topic 06 image formula with (${x1}, ${y1}) left as a running ${XY}:<br>${XY} ⟼<br>(${x} − ${fr(`2${a}${NB}(${GEN})`, SS)}, ${y} − ${fr(`2${b}${NB}(${GEN})`, SS)}).`,
      },
      { t: 'p', html: `For the mirrors that turn up constantly, the map is worth knowing cold:` },
      {
        t: 'table',
        title: null,
        head: [`Mirror ${ELL}`, `Reflection map ${XY} ↦`, `Substitute into ${m}`],
        rows: [
          [`${x}-axis, ${y} = 0`, `(${x}, −${y})`, `${y} → −${y}`],
          [`${y}-axis, ${x} = 0`, `(−${x}, ${y})`, `${x} → −${x}`],
          [`${y} = ${x}`, `(${y}, ${x})`, `swap ${x} and ${y}`],
          [`${y} = −${x}`, `(−${y}, −${x})`, `${x} → −${y}, ${y} → −${x}`],
          [`${x} = ${h}`, `(2${h} − ${x}, ${y})`, `${x} → 2${h} − ${x}`],
          [`${y} = ${k}`, `(${x}, 2${k} − ${y})`, `${y} → 2${k} − ${y}`],
          [`${GEN} = 0`, 'the displayed formula above', 'both together'],
        ],
      },
      {
        t: 'p',
        html: `<b>Route D: the parallel mirror.</b> If ${m} ∶ ${GEN1} = 0 and ${ELL} ∶ ${GEN} = 0 are parallel they never meet, so Route B cannot even start and Route A, while correct, is needless work. Only the constant term moves:`,
      },
      {
        t: 'formula',
        kicker: 'Image of a line in a parallel mirror',
        main: `image of ${GEN1} = 0 in ${GEN} = 0 is:<br><i>ax</i> + <i>by</i> + (2${c} − ${c1}) = 0`,
        legend: [`${c1} = the constant term of the line being reflected`, `${c} = the constant term of the mirror`, `${a}, ${b} = the coefficients shared by both lines (rescale one first)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Why.</b> Take any ${P} on ${m}, so <i>a</i>${xP} + <i>b</i>${yP} = −${c1} and hence <i>a</i>${xP} + <i>b</i>${yP} + ${c} = ${c} − ${c1}. The image formula moves ${P} by<br>−${fr(`2(${c} − ${c1})`, SS)}(${a}, ${b}),<br><br>so for the image point <i>a</i>${xPp} + <i>b</i>${yPp} = −${c1} − 2(${c} − ${c1}) = ${c1} − 2${c}, i.e. <i>a</i>${xPp} + <i>b</i>${yPp} + (2${c} − ${c1}) = 0. Every point of ${m} lands on that one line. Read the formula as <b>“the mirror’s constant is the average of the other two”</b>:<br>${c} = ${fr(`${c1} + (2${c} − ${c1})`, '2')},<br><br>which is also the free check: the mirror must run exactly midway between ${m} and its image, at equal distance<br>${fr(`|${c} − ${c1}|`, `√(${SS})`)}<br><br>on each side.`,
      },
      {
        t: 'p',
        html: `<b>Correction to Topic 06’s Common student pitfalls and pro-tips part, Pitfall 3.</b> The main text says: “You cannot ‘reflect’ ${GEN} = 0 by tweaking coefficients (except for ${y} = ${x}, where swapping ${x}, ${y} works).” That is too strong, and it is the reason students hand-compute two image points for a mirror as easy as ${x} = 3. The accurate statement is:`,
      },
      {
        t: 'p',
        html: `You cannot reflect a line by guessing at its coefficients. But you may always reflect it by <b>substituting the reflection map</b> into its equation: that is Route C, and it is valid for every mirror, not only ${y} = ${x}. What genuinely fails is negating the equation, adding the two equations, or swapping ${x} and ${y} for a mirror that is not ${y} = ${x}.`,
      },
      {
        t: 'p',
        html: 'Everything else in Pitfall 3 stands: reflecting points is still the safe default when the mirror is awkward, and Route A is never wrong.',
      },

      { t: 'part', title: 'Worked example' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `(a) Find the reflection of the line 2${x} − 3${y} + 4 = 0 in the line ${x} + ${y} − 1 = 0.<br>(b) Find the reflection of the line 3${x} − 4${y} + 7 = 0 in the line 3${x} − 4${y} − 2 = 0.`,
        steps: [
          `<b>Solution (a): Route A, then Route C as the check.</b> The mirror is ${ELL} ∶ ${x} + ${y} − 1 = 0, so ${a} = 1, ${b} = 1, ${SS} = 2.`,
          `Pick two easy points on ${m} ∶ 2${x} − 3${y} + 4 = 0. At ${x} = 1: 2 − 3${y} + 4 = 0, so ${y} = 2, giving ${pt('P', '1', '2')}. At ${y} = 0: 2${x} + 4 = 0, so ${x} = −2, giving ${pt('Q', '−2', '0')}.`,
          `Image of ${P}: here <i>a</i>${xP} + <i>b</i>${yP} + ${c} = 1 + 2 − 1 = 2, so the step is −${fr('2(2)', '2')} = −2 and<br>${Pp} = (1 + (−2)(1), 2 + (−2)(1)) = (−1,\u00a00).`,
          `Image of ${Q}: −2 + 0 − 1 = −3, so the step is −${fr('2(−3)', '2')} = 3 and<br>${Qp} = (−2 + 3, 0 + 3) = (1,\u00a03).`,
          `Line through ${Pp}(−1,\u00a00) and ${Qp}(1,\u00a03): slope = ${fr('3 − 0', '1 − (−1)')} = ${fr('3', '2')},<br><br>so ${y} − 0 = ${fr('3', '2')}(${x} + 1), that is 3${x} − 2${y} + 3 = 0.`,
          `<b>Route C check.</b> Reflection in ${x} + ${y} − 1 = 0 sends<br>${XY} ↦ (${x} − (${x} + ${y} − 1), ${y} − (${x} + ${y} − 1))<br>= (1 − ${y}, 1 − ${x}).<br>Substituting into ${m}:<br>2(1 − ${y}) − 3(1 − ${x}) + 4<br>= 2 − 2${y} − 3 + 3${x} + 4 = 3${x} − 2${y} + 3.<br>Same line, in one line of algebra instead of six.`,
          `<b>Third check, free.</b> Route B says the answer must pass through ${m} ∩ ${ELL}. Solving 2${x} − 3${y} + 4 = 0 with ${x} + ${y} − 1 = 0 gives (−${fr('1', '5')}, ${fr('6', '5')}), and<br><br>3(−${fr('1', '5')}) − 2(${fr('6', '5')}) + 3 = −${fr('3', '5')} − ${fr('12', '5')} + 3 = 0.<br><br>It does.`,
          `<b>Solution (b): Route D.</b> The two lines have identical ${x} and ${y} coefficients, so they are parallel and there is no intersection to hang Route B on. Here ${c} = −2 and ${c1} = 7, so the image constant is 2${c} − ${c1} = −4 − 7 = −11:<br>3${x} − 4${y} − 11 = 0.`,
          `<b>Check by the midway property.</b> √(3<sup>2</sup> + 4<sup>2</sup>) = 5. Distance from ${m} to the mirror is ${fr('|7 − (−2)|', '5')} = ${fr('9', '5')};<br><br>distance from the mirror to the image is ${fr('|−2 − (−11)|', '5')} = ${fr('9', '5')}.<br><br>Equal, and the mirror’s constant −2 is the average of 7 and −11. Correct.`,
        ],
        ans: `(a) 3${x} − 2${y} + 3 = 0; (b) 3${x} − 4${y} − 11 = 0`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          { q: `[CBSE] Find the reflection of 3${x} + 2${y} − 6 = 0 in the ${x}-axis.`, a: `Substitute ${y} → −${y}: 3${x} − 2${y} − 6 = 0.` },
          {
            q: `[CBSE] Find the reflection of ${x} − 2${y} + 4 = 0 in the line ${x} = 3.`,
            a: `Substitute ${x} → 6 − ${x}: (6 − ${x}) − 2${y} + 4 = 0, i.e. ${x} + 2${y} − 10 = 0. (Check: the two lines meet on the mirror, at ${x} = 3, ${y} = ${fr('7', '2')}, and both are satisfied there.)`,
          },
          {
            q: `[JEE Main] Find the reflection of ${x} + 2${y} − 3 = 0 in the line ${y} = −${x}.`,
            a: `Substitute ${x} → −${y}, ${y} → −${x}: (−${y}) + 2(−${x}) − 3 = 0, i.e. 2${x} + ${y} + 3 = 0.`,
          },
          {
            q: `[JEE Main] Find the reflection of 5${x} − 12${y} + 13 = 0 in the parallel line 5${x} − 12${y} − 26 = 0, and state the distance between the original line and its image.`,
            a: `${c} = −26, ${c1} = 13, so the image constant is 2(−26) − 13 = −65, giving 5${x} − 12${y} − 65 = 0. With √(25 + 144) = 13, the mirror sits ${fr('|13 + 26|', '13')} = 3 from the original, so the original and its image are 6 apart:<br><br>${fr('|13 − (−65)|', '13')} = ${fr('78', '13')} = 6, as it must be.`,
          },
          {
            q: `[JEE Main] Find the image of the line 3${x} − ${y} = 2 in the line ${y} = ${x} − 1. (The mirror is ${y} = ${x} shifted; do not reach for the swap shortcut without checking it.)`,
            a: `Write the mirror as ${x} − ${y} − 1 = 0, so ${a} = 1, ${b} = −1, ${SS} = 2 and the map is<br>${XY} ↦ (${x} − (${x} − ${y} − 1), ${y} + (${x} − ${y} − 1))<br>= (${y} + 1, ${x} − 1):<br>the swap, but with the shift attached, which is exactly what the bare “just swap” rule would have lost. Substituting into 3${x} − ${y} − 2 = 0: 3(${y} + 1) − (${x} − 1) − 2 = −${x} + 3${y} + 2, so the image is<br>${x} − 3${y} = 2.<br>Check: (1,\u00a01) lies on 3${x} − ${y} = 2 and maps to (2,\u00a00), with 2 − 0 = 2; and (0,\u00a0−2) maps to (−1,\u00a0−1), with −1 + 3 = 2. Both land on the answer. Note the slope has gone from 3 to ${fr('1', '3')}, the reciprocal, as it must for any mirror parallel to ${y} = ${x}.`,
          },
          {
            q: `[JEE Advanced] Find the reflection of ${x} + ${y} − 2 = 0 in the line 2${x} − ${y} + 3 = 0, using the substitution map, and verify your answer by reflecting one point independently.`,
            a: `Mirror 2${x} − ${y} + 3 = 0: ${a} = 2, ${b} = −1, ${SS} = 5, so the map is<br>${XY} ⟼ (${fr(`−3${x} + 4${y} − 12`, '5')}, ${fr(`4${x} + 3${y} + 6`, '5')}).<br><br>Substituting into ${x} + ${y} − 2 = 0:<br>${fr(`(−3${x} + 4${y} − 12) + (4${x} + 3${y} + 6)`, '5')} − 2<br><br>= ${fr(`${x} + 7${y} − 6`, '5')} − 2 = 0,<br><br>i.e.<br>${x} + 7${y} − 16 = 0.<br>Point check: (2,\u00a00) lies on ${x} + ${y} − 2 = 0; its image is (−${fr('18', '5')}, ${fr('14', '5')}), and<br><br>−${fr('18', '5')} + 7(${fr('14', '5')}) − 16 = ${fr('−18 + 98 − 80', '5')} = 0.<br><br>And (0,\u00a02) maps to (−${fr('4', '5')}, ${fr('12', '5')}), with<br><br>−${fr('4', '5')} + ${fr('84', '5')} − 16 = 0. Both land on the answer.<br>A check that uses no map at all: the image must pass through the point where ${x} + ${y} − 2 = 0 meets the mirror, (−${fr('1', '3')}, ${fr('7', '3')}), and<br><br>−${fr('1', '3')} + ${fr('49', '3')} − 16 = 0.`,
          },
        ],
      },
    ],
  },
];
