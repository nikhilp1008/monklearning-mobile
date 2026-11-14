import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, Additional topic P, pp. 573–579 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's "Addendum P — What
 * JEE Actually Asks", kept with the book's letter as the chapter's last additional
 * topic (decision 2). It opens partway down p. 573, below the rule that closes
 * Addendum E's answers, and ends on p. 579; Chapter 9 starts on p. 580. The
 * opening paragraph is the "Introduction"; the headings "The distribution" …
 * "Graded practice set" are the parts. The distribution's numbered list 1–6 is one
 * paragraph; each run of papers becomes a count ("Papers cited: 4 (JEE 1, Main 2,
 * Adv 1)"; a paper before 2013 is "JEE", "IIT-JEE" included), and every other paper
 * name loses its year, date and shift ("Main April 12, 2019 (II)" → "Main"; "2004S"
 * → "JEE"; "Online April 23, 2013" → "Main Online"). Each archetype 1–8 is a worked
 * example tagged with its heading: its method paragraph and its representative
 * question are the question, the working the steps (no answer line is printed, so
 * the answer box is empty). The traps 1–8 are one mistakes block; the graded
 * practice set P1–P12 is one practice block, the working after each question its
 * answer. Every share or frequency of past questions carries the estimate label.
 * These pages print no drawing and no formula card (vector shapes: only the rules
 * between sections). ∫ upright with its limits as a sub and sup (a slash kept
 * inside a raised limit, 1/a), d upright and glued to its variable; set-builder
 * with ∶. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner after an opening modulus bar, so the bar never ends a line. */
const WJ = '\u2060';
/** The combining right arrow over a vector's letters. */
const ARW = '\u20d7';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const a = I('a');
const b = I('b');
const d = I('d');
const f = I('f');
const m = I('m');
const n = I('n');
const p = I('p');
const q = I('q');
const r = I('r');
const x = I('x');
const y = I('y');
const A = I('A');
const B = I('B');
const S = I('S');
const V = I('V');
const la = I('λ');

/** Differentials: an upright d glued to the integrand. */
const DX = `${NB}d${x}`;
const DY = `${NB}d${y}`;
/** ∫ with its limits, the lower as a sub and the upper as a sup. */
const INT = (lo: string, hi: string) => `∫<sub>${lo}</sub><sup>${hi}</sup>`;
/** The evaluation bar [F] from lo to hi. */
const EV = (s: string, lo: string, hi: string) => `[${s}]<sub>${lo}</sub><sup>${hi}</sup>`;

const of = (fn: string, s: string) => `${fn}(${s})`;
const abs = (s: string) => `|${WJ}${s}|`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const cube = (s: string) => `${s}<sup>3</sup>`;
const pw = (s: string, e: string) => `${s}<sup>${e}</sup>`;
const sb = (s: string, e: string) => `${s}<sub>${e}</sub>`;
const rel = (l: string, op: string, rt: string) => `${l}${NB}${op}${NB}${rt}`;
/** A pair or interval, its comma glued: (0, 0). */
const pt = (u: string, v: string, o = '(', cl = ')') => `${o}${u},${NB}${v}${cl}`;
/** A set-builder region {(x, y) ∶ …}. */
const REGION = (cond: string) => `{${pt(x, y)} ∶ ${cond}}`;

const X2 = sq(x);
const Y2 = sq(y);
const X3 = cube(x);
const Y3 = cube(y);
const SINX = `sin${NB}${x}`;
const COSX = `cos${NB}${x}`;
const TANX = `tan${NB}${x}`;
const ABS_X = abs(x);
const ABS_Y = abs(y);
const COS_SIN = abs(`cos${NB}${x} − sin${NB}${x}`);
const HALF = fr('1', '2');
const PI2 = fr('π', '2');
const PI4 = fr('π', '4');
const NINE2 = fr('9', '2');
const INV_A = fr('1', a);
const AN = sb(A, n);
const AN2 = sb(A, `${n}−2`);
const N1 = `${n} − 1`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic P (the book's Addendum P) · pp. 573–579 ────────────────
  {
    n: 'P',
    title: 'What JEE Actually Asks',
    extra: true,
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This section maps the area questions that recur in JEE Main and JEE Advanced onto the methods of the chapter and Additional topics A to E: how the questions are distributed, the eight archetypes they fall into, the traps their wrong options are built around, and a graded practice set. Every worked solution is complete and can be checked line by line.',
      },

      { t: 'part', title: 'The distribution' },
      { t: 'p', html: `Judged from past papers, the examiners’ attention splits cleanly ${ESTIMATE}:` },
      {
        t: 'p',
        html: `<b>1. Area between two curves: the backbone.</b> A line and a sideways-opening parabola, or the twin parabolas ${Y2} = 4${a}${x} and ${X2} = 4${a}${y}, account for the largest single block ${ESTIMATE}. Papers cited: 6 (JEE 3, Main 3, one of them Main Online), and several more recent papers. In the modern MCQ era <b>essentially every JEE Main session carries exactly one area question</b> ${ESTIMATE}, usually of this or the next type.<br><b>2. Regions given as set-builder inequalities.</b> The fastest-growing pattern ${ESTIMATE}: ${REGION('…')} with two or three conditions: Main (${rel(Y2, '≤', `2${x}`)}, ${rel(y, '≥', `4${x} − 1`)}); Main (${rel(Y2, '≥', `2${x}`)} inside ${X2} + ${Y2} ≤ 4${x}); Main (${X2} + ${Y2} ≤ 1, ${rel(Y2, '≥', `1 − ${x}`)}); two more Main papers; Main (${ABS_X} + ${ABS_Y} ≤ 1 with 2${Y2} ≤ ${ABS_X}). Papers cited: 6 (Main 6). The examiner is testing decoding, not integration.<br><b>3. Modulus boundaries.</b> Trig modulus: Main Online (${COS_SIN}) and Advanced (${SINX} + ${COSX} vs ${COS_SIN}). Algebraic modulus/diamond: JEE (${y} = ${ABS_X} − 1 vs ${y} = −${ABS_X} + 1), Main (${X2} ≤ ${y} ≤ ${abs(`3 − 2${x}`)}). Papers cited: 4 (JEE 1, Main 2, Adv 1).<br><b>4. Circle cut by a line or parabola.</b> Main (circle minus a parabola–line lens); two more Main papers; and the old descriptive JEE problem with ${abs(`4 − ${X2}`)} inside a circle. Papers cited: 4 (JEE 1, Main 3). These reward the sector/standard-integral shortcut.<br><b>5. Inverse problems: “the area is given, find the parameter.”</b> Main (find ${la}); JEE (find ${a}); JEE (find ${m}, two valid answers); JEE (find the bisecting ordinate ${b}). Papers cited: 4 (JEE 3, Main 1). These end in a polynomial equation in the parameter and are chronically under-practised.<br><b>6. Advanced-only shapes.</b> In the older papers, the JEE asked 3–10 mark descriptive area questions almost every year ${ESTIMATE}, including proofs and envelope problems (max of three curves; a recurrence for ${AN}). Papers cited: 20, all JEE. In the objective era Advanced appears sporadically with multi-curve or multi-condition regions. Papers cited: 6, all Adv.`,
      },

      { t: 'part', title: 'The recurring archetypes' },
      {
        t: 'ex',
        tag: 'Archetype 1: Sideways parabola and a line: integrate in y',
        q: `Intersect, then use horizontal strips (“right minus left”). Forcing d${x} creates a two-branch mess.<br><br><b>Representative (Main).</b> The area bounded by ${Y2} = 4${la}${x} and ${y} = ${la}${x} (${rel(la, '>', '0')}) is ${fr('1', '9')}; find ${la}.`,
        steps: [
          `Intersection: ${sq(la)}${X2} = 4${la}${x} ⇒ ${rel(x, '=', '0')} or ${x} = ${fr('4', la)}. As functions of ${y}: parabola ${x} = ${fr(Y2, `4${la}`)}, line ${x} = ${fr(y, la)}, meeting at ${y} = 0, 4. The line is the right curve:<br>${A} = ${INT('0', '4')}(${fr(y, la)} − ${fr(Y2, `4${la}`)})${DY}<br>= ${fr('1', la)}${EV(`${fr(Y2, '2')} − ${fr(Y3, '12')}`, '0', '4')}<br>= ${fr('1', la)}(8 − ${fr('16', '3')}) = ${fr('8', `3${la}`)}.`,
          `Setting ${fr('8', `3${la}`)} = ${fr('1', '9')} gives ${la} = 24. ✓ Check: ${fr('8', '3 ⋅ 24')} = ${fr('1', '9')}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 2: Twin parabolas: y² = ax, x² = ay (or y = ax², x = ay²)',
        q: `Memorise the mechanics. The parabolas ${Y2} = ${a}${x} and ${X2} = ${a}${y} meet at ${pt('0', '0')} and ${pt(a, a)}, and the area between them is ${fr(sq(a), '3')}; replacing ${a} by 4${a} gives the standard result for ${Y2} = 4${a}${x} and ${X2} = 4${a}${y}, namely ${fr(`16${sq(a)}`, '3')}. For ${y} = ${a}${X2} and ${x} = ${a}${Y2} the second meeting point is ${pt(INV_A, INV_A)} and the area is ${fr('1', `3${sq(a)}`)}, as the example below finds.<br><br><b>Representative (JEE).</b> The area enclosed between ${y} = ${a}${X2} and ${x} = ${a}${Y2} (${rel(a, '>', '0')}) is 1 sq unit; find ${a}.`,
        steps: [
          `Intersections: substituting ${x} = ${a}${Y2} = ${a}(${a}${X2})<sup>2</sup> gives ${rel(x, '=', '0')} or ${X3} = ${pw(a, '−3')}, so ${x} = ${INV_A}: points ${pt(INV_A, INV_A)} and the origin. Test ${x} = ${fr('1', `2${a}`)}: the root-curve ${y} = √(${fr(x, a)}) sits above ${y} = ${a}${X2}. So<br>${A} = ${INT('0', `1/${a}`)}(${fr(`√${x}`, `√${a}`)} − ${a}${X2})${DX}<br>= ${fr('2', `3${sq(a)}`)} − ${fr('1', `3${sq(a)}`)} = ${fr('1', `3${sq(a)}`)}.`,
          `Then ${fr('1', `3${sq(a)}`)} = 1 ⇒ ${a} = ${fr('1', '√3')}. ✓`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 3: Set-builder region: decode, sketch, split',
        q: `Translate each inequality into a side, take the overlap, and let the intersection points fix the limits. Integrate in whichever variable keeps one smooth boundary.<br><br><b>Representative (Main).</b> Region ${REGION(`${rel(Y2, '≤', `2${x}`)}, ${rel(y, '≥', `4${x} − 1`)}`)}.`,
        steps: [
          `Decode: ${x} ≥ ${fr(Y2, '2')} (right of the parabola) and ${x} ≤ ${fr(`${y} + 1`, '4')} (left of the line). Horizontal strips are natural. Intersections:<br>${fr(Y2, '2')} = ${fr(`${y} + 1`, '4')} ⇒ 2${Y2} − ${y} − 1 = 0 ⇒ ${y} = −${HALF}, 1.`,
          `Then<br>${A} = ${INT('−1/2', '1')}(${fr(`${y} + 1`, '4')} − ${fr(Y2, '2')})${DY}<br>= ${EV(`${fr(Y2, '8')} + ${fr(y, '4')} − ${fr(Y3, '6')}`, '−1/2', '1')}<br>= ${fr('20', '96')} + ${fr('7', '96')} = ${fr('9', '32')}. ✓`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 4: Modulus ceiling: locate every corner, split there',
        q: `Set each inside-expression to zero; the corners partition the interval.<br><br><b>Representative (Main Online).</b> Area under ${y} = ${COS_SIN} above the ${x}-axis, 0 ≤ ${x} ≤ ${PI2}.`,
        steps: [
          `Corner where ${COSX} = ${SINX}, i.e. ${x} = ${PI4}. Left of it cos ≥ sin; right of it sin ≥ cos:<br>${A} = ${INT('0', 'π/4')}(${COSX} − ${SINX})${DX}<br>+ ${INT('π/4', 'π/2')}(${SINX} − ${COSX})${DX}<br>= (√2 − 1) + (√2 − 1) = 2√2 − 2. ✓`,
          `Integrating straight across ${PI4} without the modulus gives 0: the planted distractor.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 5: Circle cut by a parabola or line: sector + workhorse integral',
        q: `Complete the square, recognise circular segments, and deploy ∫√(${sq(a)} − ${X2})${DX} rather than grinding.<br><br><b>Representative (Main).</b> Region ${REGION(`${rel(Y2, '≥', `2${x}`)}, ${X2} + ${Y2} ≤ 4${x}, ${rel(x, '≥', '0')}, ${rel(y, '≥', '0')}`)}.`,
        steps: [
          `The circle is (${x} − 2)<sup>2</sup> + ${Y2} = 4. Intersections with ${Y2} = 2${x}: 2${x} = 4${x} − ${X2} ⇒ ${x} = 0, 2, i.e. ${pt('0', '0')} and ${pt('2', '2')}. The region is inside the circle, above the parabola ${y} = √(2${x}) (equivalently, to its left, since ${rel(Y2, '≥', `2${x}`)}), in the first quadrant:`,
          `${A} = ${INT('0', '2')}${NB}√(4${x} − ${X2})${DX} − ${INT('0', '2')}${NB}√(2${x})${DX}<br>= π − ${fr('8', '3')},<br>since the first integral is a quarter-disc of radius 2, and ${INT('0', '2')}${NB}√(2${x})${DX} = ${fr('8', '3')}. ✓`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 6: Inverse problem: given the area, find the parameter',
        q: `Compute the area as a function of the parameter; the given value produces an equation in it. Expect more than one admissible answer.<br><br><b>Representative (JEE).</b> For which ${m} does the region between ${y} = ${x} − ${X2} and ${y} = ${m}${x} have area ${NINE2}?`,
        steps: [
          `Intersection: ${x} − ${X2} = ${m}${x} ⇒ ${rel(x, '=', '0')} or ${x} = 1 − ${m} (${rel(m, '≠', '1')}). The signed gap integrates to<br>${abs(`${INT('0', `1−${m}`)}(${x}(1 − ${m}) − ${X2})${DX}`)}<br>= ${abs(`${fr(`(1 − ${m})<sup>3</sup>`, '2')} − ${fr(`(1 − ${m})<sup>3</sup>`, '3')}`)}<br>= ${fr(`${abs(`1 − ${m}`)}<sup>3</sup>`, '6')}.`,
          `Setting ${fr(`${abs(`1 − ${m}`)}<sup>3</sup>`, '6')} = ${NINE2} gives ${abs(`1 − ${m}`)}<sup>3</sup> = 27, so ${m} = −2 or ${m} = 4. ✓ Both values are admissible: for ${rel(m, '<', '1')} the second intersection ${x} = 1 − ${m} lies to the right of the origin, for ${rel(m, '>', '1')} it lies to the left, and either way the region between the line and the parabola has area ${NINE2}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 7: Envelope / composite ceiling (Advanced)',
        q: `When the boundary is “max” of several curves or switches mid-range, find each switch point, integrate slab by slab.<br><br><b>Representative (JEE).</b> ${of(f, x)} = max{${X2},${NB}(1${NB}−${NB}${x})<sup>2</sup>,${NB}2${x}(1${NB}−${NB}${x})} on ${pt('0', '1', '[', ']')}; area under ${y} = ${of(f, x)}.`,
        steps: [
          `Switches: ${X2} = 2${x}(1 − ${x}) at ${x} = ${fr('2', '3')}; (1 − ${x})<sup>2</sup> = 2${x}(1 − ${x}) at ${x} = ${fr('1', '3')}. Sampling shows (1 − ${x})<sup>2</sup> leads on ${pt('0', fr('1', '3'), '[', ']')}, 2${x}(1 − ${x}) on ${pt(fr('1', '3'), fr('2', '3'), '[', ']')}, ${X2} on ${pt(fr('2', '3'), '1', '[', ']')}:`,
          `${A} = ${INT('0', '1/3')}(1 − ${x})<sup>2</sup>${DX} + ${INT('1/3', '2/3')}${NB}2${x}(1 − ${x})${DX}<br>+ ${INT('2/3', '1')}${NB}${X2}${DX}<br>= ${fr('19', '81')} + ${fr('13', '81')} + ${fr('19', '81')} = ${fr('17', '27')}. ✓`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 8: Proof-flavoured area (old JEE)',
        q: `Small area quantities tied together by a reduction, exploiting monotonicity of the integrand.<br><br><b>Representative (JEE).</b> ${AN} = area under ${y} = (${TANX})<sup>${n}</sup> from ${rel(x, '=', '0')} to ${x} = ${PI4}. Show ${AN} + ${AN2} = ${fr('1', N1)} for ${rel(n, '>', '2')}, and deduce ${AN} → 0.`,
        steps: [
          `${AN} + ${AN2} = ${INT('0', 'π/4')}(${TANX})<sup>${n}−2</sup>${NB}sec<sup>2</sup>${NB}${x}${DX}<br>= ${EV(fr(`(${TANX})<sup>${n}−1</sup>`, N1), '0', 'π/4')} = ${fr('1', N1)}.`,
          `On ${pt('0', PI4)} we have 0 < ${TANX} < 1, so ${AN} < ${AN2}, hence 2${AN} < ${fr('1', N1)} and ${AN} < ${fr('1', `2(${N1})`)} → 0. ✓`,
        ],
        ans: '',
      },

      { t: 'part', title: 'The traps' },
      { t: 'p', html: 'These are the mistakes that the wrong options in past papers are built to catch:' },
      {
        t: 'mistakes',
        items: [
          `<b>The zero-area lure.</b> Odd integrand over a symmetric interval integrates to 0; the area does not. Questions with ${y} = ${COS_SIN} (Main Online, Advanced) and the twin-V curves of a JEE paper exist precisely to punish integrating through a sign change.`,
          `<b>“Forgot to subtract.”</b> A recurring wrong option equals the area under the upper curve alone (the ${fr('32', '3')}-vs-${fr('16', '3')} pattern in the two-parabola questions). Always compute top minus bottom.`,
          '<b>Sign flip.</b> Bottom-minus-top yields a negative; an absolute value taken at the end cannot rescue an answer whose split points were wrong.',
          `<b>Limits invented, not solved.</b> The limits are intersections/corners. In one Main item the roots ${x} = −1, 3 come from 4${X2} = 8${x} + 12: students who grab convenient numbers lose everything.`,
          `<b>Extraneous and rejected intersections.</b> Squaring manufactures roots (solving √${x} = ${x} − 2 by squaring gives ${rel(x, '=', '1')} and ${rel(x, '=', '4')}, but ${rel(x, '=', '1')} fails because the right side is negative), and domain constraints kill roots (${Y2} = 4${x} has no points with ${rel(x, '<', '0')}, so a root such as ${rel(x, '=', '−5')} must be rejected). Check every intersection against the original curves and the stated quadrant conditions.`,
          `<b>Tangency misread.</b> In the JEE problem ${X2} = ${y} and ${Y2} = 4${x} − 3 touch at ${pt('1', '1')}: same tangent (slope 2), not a crossing. Treating a touch as a pass-through corrupts the region.`,
          `<b>Wrong strip variable.</b> Every ${Y2} = (stuff) region punished with d${x} costs a two-branch integral and, empirically, arithmetic slips. If side walls are curves and top/bottom are horizontal, use d${y}.`,
          `<b>Ignoring stated quadrant/restriction clauses.</b> “${rel(x, '≥', '0')}, ${rel(y, '≥', '0')}”, “first quadrant”, “smaller region” halve or reshape the answer (two Main papers); ignoring them doubles work in the wrong direction.`,
        ],
      },

      { t: 'part', title: 'Graded practice set' },
      {
        t: 'practice',
        items: [
          {
            q: `Area between ${y} = ${SINX} and the ${x}-axis for 0 ≤ ${x} ≤ ${fr('3π', '2')}.`,
            a: `Split at ${rel(x, '=', 'π')}:<br>${A} = ${INT('0', 'π')}${NB}${SINX}${DX} + ${abs(`${INT('π', '3π/2')}${NB}${SINX}${DX}`)}<br>= 2 + 1 = 3.<br>(The raw integral gives 1: the sign trap.)`,
          },
          {
            q: `Area between ${y} = ${X2} and ${y} = 2${x}.`,
            a: `Intersections ${x} = 0, 2; line on top:<br>${A} = ${INT('0', '2')}(2${x} − ${X2})${DX} = ${EV(`${X2} − ${fr(X3, '3')}`, '0', '2')}<br>= 4 − ${fr('8', '3')} = ${fr('4', '3')}.`,
          },
          {
            q: `Area of the region bounded by ${y} = ${ABS_X} and ${y} = 2 − ${ABS_X}.`,
            a: `Corners at ${rel(x, '=', '0')} and crossings at ${ABS_X} = 1. The region is the square with vertices ${pt('0', '0')}, ${pt('1', '1')}, ${pt('0', '2')}, ${pt('−1', '1')}; its diagonals are both 2:<br>${A} = ${fr(`${sb(d, '1')}${sb(d, '2')}`, '2')} = 2.<br>Cross-check by integration: 2${INT('0', '1')}(2 − 2${x})${DX} = 2. ✓`,
          },
          {
            q: `Area between ${y} = −2${X2} and ${y} = 1 − 3${X2}.`,
            a: `Intersections: −2${X2} = 1 − 3${X2} ⇒ ${x} = ±1, and 1 − 3${X2} is the upper curve throughout:<br>${A} = ${INT('−1', '1')}(1 − ${X2})${DX} = 2(1 − ${fr('1', '3')}) = ${fr('4', '3')}.`,
          },
          {
            q: `Area bounded by ${y} = ${X2} + 2, the lines ${y} = ${x} + 1, ${rel(x, '=', '0')}, ${rel(x, '=', '3')} (Main).`,
            a: `Here the vertical lines fix the limits: do not intersect the two curves (they never meet: ${X2} − ${x} + 1 > 0 for every ${x}). The parabola is on top:<br>${A} = ${INT('0', '3')}(${X2} + 2 − ${x} − 1)${DX}<br>= ${INT('0', '3')}(${X2} − ${x} + 1)${DX}<br>= 9 − ${NINE2} + 3 = ${fr('15', '2')}.`,
          },
          {
            q: `Area bounded by ${Y2} = 4${x} and the line ${x} + ${y} = 3.`,
            a: `In ${y}: parabola ${x} = ${fr(Y2, '4')} (left), line ${x} = 3 − ${y} (right). Intersections: ${fr(Y2, '4')} = 3 − ${y} ⇒ ${Y2} + 4${y} − 12 = 0 ⇒ ${y} = 2, −6:<br>${A} = ${INT('−6', '2')}(3 − ${y} − ${fr(Y2, '4')})${DY}<br>= ${EV(`3${y} − ${fr(Y2, '2')} − ${fr(Y3, '12')}`, '−6', '2')}<br>= ${fr('10', '3')} + 18 = ${fr('64', '3')}.`,
          },
          {
            q: `Area of ${REGION(`${X2} ≤ ${y} ≤ ${abs(`3 − 2${x}`)}`)} (Main).`,
            a: `For ${x} ≤ ${fr('3', '2')} the modulus opens as 3 − 2${x}; solving ${X2} = 3 − 2${x} gives ${x} = −3, 1 (the other branch 2${x} − 3 = ${X2} has no real root). The region lives on ${pt('−3', '1', '[', ']')}:<br>${A} = ${INT('−3', '1')}(3 − 2${x} − ${X2})${DX}<br>= ${EV(`3${x} − ${X2} − ${fr(X3, '3')}`, '−3', '1')}<br>= ${fr('5', '3')} + 9 = ${fr('32', '3')}.`,
          },
          {
            q: `Area of ${REGION(`4${X2} ≤ ${y} ≤ 8${x} + 12`)} (Main).`,
            a: `Intersections: 4${X2} = 8${x} + 12 ⇒ (${x} + 1)(${x} − 3) = 0, so ${x} = −1, 3:<br>${A} = ${INT('−1', '3')}(8${x} + 12 − 4${X2})${DX}<br>= ${EV(`4${X2} + 12${x} − ${fr(`4${X3}`, '3')}`, '−1', '3')}<br>= 36 + ${fr('20', '3')} = ${fr('128', '3')}.`,
          },
          {
            q: `Area of the region ${REGION(`${ABS_X} + ${ABS_Y} ≤ 1, 2${Y2} ≤ ${ABS_X}`)} (Main).`,
            a: `Four-fold symmetry. First quadrant: ${x} ≥ 2${Y2}, ${x} + ${y} ≤ 1; they cross where 2${Y2} = 1 − ${y}, i.e. ${y} = ${HALF}:<br>${A} = 4${INT('0', '1/2')}(1 − ${y} − 2${Y2})${DY}<br>= 4(${HALF} − ${fr('1', '8')} − ${fr('1', '12')})<br>= 4 ⋅ ${fr('7', '24')} = ${fr('7', '6')}.`,
          },
          {
            q: `Area of ${REGION(`${X2} + ${Y2} ≤ 1, ${rel(Y2, '≥', `1 − ${x}`)}`)} (Main).`,
            a: `The second condition says ${x} ≥ 1 − ${Y2} (right of the leftward parabola). Symmetric about the ${x}-axis; upper half runs ${x} from 1 − ${Y2} to √(1 − ${Y2}) for 0 ≤ ${y} ≤ 1:<br>${A} = 2${INT('0', '1')}(√(1 − ${Y2}) − 1 + ${Y2})${DY}<br>= 2(${PI4} − 1 + ${fr('1', '3')}) = ${PI2} − ${fr('4', '3')}.`,
          },
          {
            q: `Area of the region ${REGION(`${x}${y} ≤ 8, 1 ≤ ${y} ≤ ${X2}, ${rel(x, '>', '0')}`)} (Advanced).`,
            a: `Taking ${rel(x, '>', '0')} (for ${rel(x, '<', '0')} the condition ${x}${y} ≤ 8 holds automatically and the set would be unbounded), the vertices are ${pt('1', '1')}, ${pt('2', '4')} (where ${X2} = ${fr('8', x)}), ${pt('8', '1')}. Split at ${rel(x, '=', '2')}, where the ceiling changes from ${y} = ${X2} to ${y} = ${fr('8', x)}:<br>${A} = ${INT('1', '2')}(${X2} − 1)${DX} + ${INT('2', '8')}(${fr('8', x)} − 1)${DX}<br>= ${fr('4', '3')} + (16${NB}ln${NB}2 − 6)<br>= 16${NB}ln${NB}2 − ${fr('14', '3')}.`,
          },
          {
            q: `<b>(hard).</b> ${f} is a quadratic with ${of(f, '−1')} = ${of(f, '1')} = ${fr('3', '4')} and ${of(f, '2')} = 0; its maximum point is ${V}, and ${A} = ${pt('−2', '0')} is one of the two points where the graph meets the ${x}-axis. The chord ${I('AB')}, with ${B} on the graph, subtends a right angle at ${V}. Find the area ${S} between the graph and chord ${I('AB')} (adapted from JEE).`,
            a: `Write ${of(f, x)} = ${p}${X2} + ${q}${x} + ${r}. From ${of(f, '−1')} = ${of(f, '1')}: ${q} = 0, so ${of(f, x)} = ${p}${X2} + ${r}: ${p} + ${r} = ${fr('3', '4')} and 4${p} + ${r} = 0, so ${p} = −${fr('1', '4')}, ${r} = 1:<br>${of(f, x)} = 1 − ${fr(X2, '4')}, ${V} = ${pt('0', '1')}, ${A} = ${pt('−2', '0')}.<br>${I(`VA${ARW}`)} = ${pt('−2', '−1')}; the line through ${V} perpendicular to it has direction ${pt('1', '−2')}: ${y} = 1 − 2${x}. Meeting the parabola again: 1 − 2${x} = 1 − ${fr(X2, '4')} ⇒ ${rel(x, '=', '8')}, so ${B} = ${pt('8', '−15')}. Chord ${I('AB')}: slope −${fr('15', '10')} = −${fr('3', '2')}, i.e. ${y} = −${fr('3', '2')}${x}${NB}−${NB}3. Then<br>${S} = ${INT('−2', '8')}(1 − ${fr(X2, '4')} + ${fr(`3${x}`, '2')} + 3)${DX}<br>= ${EV(`4${x} + ${fr(`3${X2}`, '4')} − ${fr(X3, '12')}`, '−2', '8')}<br>= ${fr('112', '3')} + ${fr('13', '3')} = ${fr('125', '3')} sq units.`,
          },
        ],
      },
    ],
  },
];
