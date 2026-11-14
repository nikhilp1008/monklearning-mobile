import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8 Application of Integrals, Topics 01–03, pp. 530–559 of the Class
 * 12 Mathematics Master Reference (October 2026 edition), word for word.
 *   Topic 01 = Subtopic 01 "Area under Simple Curves" (pp. 530–540),
 *   Topic 02 = Subtopic 02 "Area between Two Curves" (pp. 541–550),
 *   Topic 03 = Subtopic 03 "Advanced Regions: Modulus, Inequalities &
 *              Composite Areas" (pp. 551–559).
 * The chapter's title and contents (top of p. 530) are not copied. Each topic
 * opens with its "Exam Relevance:" box as a part of its own, then is split at
 * its Sections 1 to 7; Section 7 ("Common Pitfalls, Pro-Tips & Cheat Sheet")
 * becomes two parts, "Common pitfalls and pro-tips" and "Cheat sheet" (in
 * Topic 03, "Chapter master cheat sheet", the book's whole-chapter summary,
 * kept as the topic's last part). "Sub-01/02/03" → "Topic 01/02/03".
 * Figures 8.1 (caption p. 531, drawn p. 532), 8.2 (541/542) and 8.3 (551/552)
 * are placed where their captions stand. No unnumbered drawings on pp.
 * 530–559. ∫ upright with its limits stacked, d upright and glued to its
 * variable, + C italic. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (p: string, q: string) => `<frac><num>${p}</num><den>${q}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner after an opening modulus bar, so the bar never ends a line. */
const WJ = '\u2060';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const f = I('f');
const g = I('g');
const i = I('i');
const k = I('k');
const n = I('n');
const p = I('p');
const q = I('q');
const r = I('r');
const s = I('s');
const x = I('x');
const y = I('y');
const A = I('A');
const C = I('C');
const S = I('S');
const XI = I('ξ');

/** Differentials: an upright d glued to the integrand. */
const DX = `${NB}d${x}`;
const DY = `${NB}d${y}`;

const of = (fn: string, arg: string) => `${fn}(${arg})`;
const abs = (h: string) => `|${WJ}${h}|`;
const sq = (h: string) => `${h}<sup>2</sup>`;
const cube = (h: string) => `${h}<sup>3</sup>`;
const rel = (l: string, op: string, rr: string) => `${l}${NB}${op}${NB}${rr}`;
/** The integral sign with its limits, bare. */
const IL = (lo: string, hi: string) => `∫<sub>${lo}</sub><sup>${hi}</sup>`;
/** The integral sign with its limits, kept with the integrand that follows. */
const INT = (lo: string, hi: string) => `${IL(lo, hi)}${NB}`;
/** [F(x)] from lo to hi. */
const EV = (h: string, lo: string, hi: string) => `[${h}]<sub>${lo}</sub><sup>${hi}</sup>`;
/** An evaluation bar, F(x)| from lo to hi, as the book prints it. */
const BAR = (lo: string, hi: string) => `|<sub>${lo}</sub><sup>${hi}</sup>`;
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;
const LIM = (h: string) => `lim<sub>${h}</sub>`;
const ASIN = (arg: string) => `sin<sup>−1</sup>${NB}${arg}`;

const fx = of(f, x);
const gx = of(g, x);
const gy = of(g, y);
const py = of(p, y);
const qy = of(q, y);
const X2 = sq(x);
const Y2 = sq(y);
const A2 = sq(a);
const R2 = sq(r);
const X3 = cube(x);
const AB = `[${a},${NB}${b}]`;
const ABSFX = abs(fx);
const HALF = fr('1', '2');
const PI2 = fr('π', '2');
const PI4 = fr('π', '4');
/** √(a² − x²), the workhorse root. */
const RT = `√(${A2} − ${X2})`;
/** The workhorse antiderivative, as the catalogue prints it. */
const WORKHORSE = `∫${RT}${DX} = ${fr(x, '2')}${RT} + ${fr(A2, '2')}${NB}${ASIN(fr(x, a))} + ${C}`;
const RTX = `√${x}`;
/** y = 2√x, the upper branch of y² = 4x. */
const ROOT2X = `2√${x}`;
const AX = I('ax');
const AY = I('ay');

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · Subtopic 01 · pp. 530–540 ────────────────
  {
    n: '01',
    title: 'Area under Simple Curves',
    kalam: 'Area under a curve is the gateway idea of this entire chapter.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Area under a curve is the gateway idea of this entire chapter. CBSE Boards almost always carry one 3- or 5-mark question here (frequently “find the area of a circle/ellipse by integration”) ${ESTIMATE}. JEE Main reliably places 1 question per paper ${ESTIMATE}, usually disguised as a region-bounded-by-a-curve-and-an-axis problem demanding the correct choice of d${x} vs d${y}. JEE Advanced rarely asks a pure area-under-one-curve question ${ESTIMATE} but builds every area-between-curves problem (Topic 02) directly on this skill, so a shaky foundation here costs marks downstream.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `You already know how to compute the area of a rectangle, a triangle, or a circle using memorised formulas. But what is the area of the region trapped under a curvy boundary, say, under the arch ${y} = ${X2} + 1 between ${rel(x, '=', '0')} and ${rel(x, '=', '2')}? There is no clean formula for that shape. This is exactly the gap that integration fills.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Imagine you are a land surveyor in rural Punjab measuring an irregular farm plot. One edge of the plot runs along a perfectly straight irrigation canal (that is our ${x}-axis). The opposite edge is a wavy natural boundary, a stream, described by some curve ${y} = ${fx}. The plot stretches from the well at ${rel(x, '=', a)} to the banyan tree at ${rel(x, '=', b)}. How do you find its area without a single neat formula?`,
      },
      {
        t: 'p',
        html: `A practical surveyor does something clever: he divides the plot into a long series of very thin vertical strips, each as narrow as a sheet of paper. Each strip is almost a rectangle: its width is a tiny d${x}, and its height is the value of the curve, ${y} = ${fx}, at that location. So one strip has area ≈ ${y}${DX} = ${fx}${DX}. To get the whole plot, he simply adds up the areas of all these strips from the well to the banyan tree. “Adding up infinitely many infinitely-thin strips” is precisely what the definite integral means:<br>Area = ${INT(a, b)}${y}${DX} = ${INT(a, b)}${fx}${DX}`,
      },
      {
        t: 'p',
        html: `That single mental picture, <b>a thin vertical strip of height ${y} and width d${x}</b>, is the whole topic. Everything else is bookkeeping about which variable to integrate and how to handle signs.`,
      },
      { t: 'fig', id: 'm12-08-fig-8.1' },
      {
        t: 'p',
        html: `If the boundary is instead measured more naturally against the vertical canal (that is, the curve is given as ${x} = ${gy} and you sweep horizontal strips up the ${y}-axis), the same logic flips axes:<br>Area = ${INT(c, d)}${x}${DY} = ${INT(c, d)}${gy}${DY}<br>Here each strip is horizontal, with height d${y} and length ${x} = ${gy}, swept from ${rel(y, '=', c)} to ${rel(y, '=', d)}.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions, when the naive formula misleads you:</b><br>1. <b>The curve must stay on one side of the axis.</b> The formula ${INT(a, b)}${fx}${DX} gives a signed number. When ${rel(fx, '≥', '0')} (curve above the ${x}-axis), the sign is positive and equals the geometric area. But when ${rel(fx, '≤', '0')} (curve below the axis), the integral comes out negative, yet area is never negative. The strip height is genuinely ${abs(y)} there.<br>2. <b>The curve must not cross the axis inside ${AB}.</b> If ${fx} is positive on part of the interval and negative on another, blindly integrating across the crossing causes the positive and negative pieces to cancel, and you get a wrong (too small, sometimes zero) answer. You must split at the roots.<br>3. <b>${f} should be continuous on ${AB}.</b> A finite jump or an unbounded spike breaks the simple strip-sum picture (improper integrals are beyond this topic).<br>4. <b>Pick the variable that matches the geometry.</b> If the region is naturally “capped above and below” by horizontal lines, d${y}-strips are cleaner; if “walled left and right” by vertical lines, d${x}-strips win. Choosing badly turns a one-line integral into a messy two-piece one.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: `<b>Area bounded by a curve and the ${x}-axis</b> (curve ${y} = ${fx}, between ordinates ${rel(x, '=', a)} and ${rel(x, '=', b)}, with ${rel(fx, '≥', '0')}):`,
      },
      {
        t: 'formula',
        kicker: `Area bounded by a curve and the ${x}-axis`,
        main: `${A} = ${INT(a, b)}${y}${DX} = ${INT(a, b)}${fx}${DX}`,
        legend: [
          `${fx} = the curve (${y} as a function of ${x}), with ${rel(fx, '≥', '0')}`,
          `${a}, ${b} = the lower and upper ordinates (${rel(x, '=', a)}, ${rel(x, '=', b)})`,
          `d${x} = the width of an elementary vertical strip`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Area bounded by a curve and the ${y}-axis</b> (curve ${x} = ${gy}, between the lines ${rel(y, '=', c)} and ${rel(y, '=', d)}, with ${rel(gy, '≥', '0')}):`,
      },
      {
        t: 'formula',
        kicker: `Area bounded by a curve and the ${y}-axis`,
        main: `${A} = ${INT(c, d)}${x}${DY} = ${INT(c, d)}${gy}${DY}`,
        legend: [
          `${gy} = the curve (${x} as a function of ${y}), with ${rel(gy, '≥', '0')}`,
          `${c}, ${d} = the lower and upper boundary lines (${rel(y, '=', c)}, ${rel(y, '=', d)})`,
          `d${y} = the height of an elementary horizontal strip`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Area when the curve lies below the ${x}-axis</b> (${rel(fx, '≤', '0')} on ${AB}):`,
      },
      {
        t: 'formula',
        kicker: `Area when the curve lies below the ${x}-axis`,
        main: `${A} = ${abs(`${INT(a, b)}${fx}${DX}`)} = −${INT(a, b)}${fx}${DX}`,
        legend: [`${fx} = the curve, with ${rel(fx, '≤', '0')} on ${AB}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Area when the curve crosses the axis</b> at ${rel(x, '=', c)} inside ${AB} (positive on [${a},${NB}${c}], negative on [${c},${NB}${b}]):`,
      },
      {
        t: 'formula',
        kicker: 'Area when the curve crosses the axis',
        main: `${A} = ${INT(a, c)}${fx}${DX} + ${abs(`${INT(c, b)}${fx}${DX}`)}<br>= ${INT(a, b)}${ABSFX}${DX}`,
        legend: [`${c} = the crossing point inside ${AB}`],
        note: null,
      },
      {
        t: 'defgrid',
        title: 'Notation key: symbol and meaning',
        rows: [
          { k: fx, v: `the curve, expressed with ${y} as a function of ${x}` },
          { k: gy, v: `the curve, expressed with ${x} as a function of ${y}` },
          { k: `${a}, ${b}`, v: `lower and upper <b>ordinates</b> (vertical boundary lines ${rel(x, '=', a)}, ${rel(x, '=', b)})` },
          { k: `${c}, ${d}`, v: `lower and upper <b>horizontal</b> boundary lines (${rel(y, '=', c)}, ${rel(y, '=', d)})` },
          { k: `d${x}`, v: 'width of an elementary <b>vertical</b> strip' },
          { k: `d${y}`, v: 'height of an elementary <b>horizontal</b> strip' },
        ],
      },
      {
        t: 'p',
        html: '<b>Standard catalogue results</b> (proved in the Theorems and proofs part, worth memorising for speed):',
      },
      {
        t: 'formula',
        kicker: 'Area of a circle',
        main: `Circle ${X2} + ${Y2} = ${A2}: ${A} = π${A2}`,
        legend: [`${a} = the radius`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Area of an ellipse',
        main: `Ellipse ${fr(X2, A2)} + ${fr(Y2, sq(b))} = 1: ${A} = π${I('ab')}`,
        legend: [`${a}, ${b} = the semi-axes`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Useful antiderivative',
        main: WORKHORSE,
        legend: [`${a} = a positive constant (valid for ${rel(abs(x), '≤', a)})`, `${C} = the constant of integration`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Symmetry property</b> (a massive time-saver): if a region is symmetric about an axis, compute the area of one symmetric part and multiply. A circle/ellipse is symmetric about both axes, so the first-quadrant area ×4 gives the total.`,
      },

      { t: 'part', title: 'Theorems and proofs' },
      {
        t: 'p',
        html: `<b>Theorem 1 (Area as the limit of a sum: the justification of the formula).</b> Let ${f} be continuous and non-negative on ${AB}. Then the area ${A} of the region bounded by ${y} = ${fx}, the ${x}-axis, and the lines ${rel(x, '=', a)}, ${rel(x, '=', b)} is ${A} = ${INT(a, b)}${fx}${DX}.`,
      },
      {
        t: 'p',
        html: `<b>Proof sketch (the strip argument made rigorous).</b> Partition ${AB} into ${n} sub-intervals each of width Δ${x} = ${fr(`${b} − ${a}`, n)}, with division points ${a} = ${x}<sub>0</sub> < ${x}<sub>1</sub> < ⋯ < ${x}<sub>${n}</sub> = ${b}. Over the ${i}-th sub-interval choose any sample point ${XI}<sub>${i}</sub>. The thin strip standing on that sub-interval is approximately a rectangle of height ${f}(${XI}<sub>${i}</sub>) and width Δ${x}, so its area is ${f}(${XI}<sub>${i}</sub>)${NB}Δ${x}. Summing all strips,<br>${A} ≈ ${S}<sub>${n}</sub> = ${SUM(`${i}=1`, n)}${NB}${f}(${XI}<sub>${i}</sub>)${NB}Δ${x}.`,
      },
      {
        t: 'p',
        html: `<b>Why this step is legitimate:</b> the thinner the strips, the smaller the sliver of error between each rectangle and the true curved strip. As we let ${n} → ∞ (so Δ${x} → 0), those slivers vanish, and the approximating sum converges to the exact area:<br>${A} = ${LIM(`${n}→∞`)}${NB}${SUM(`${i}=1`, n)}${NB}${f}(${XI}<sub>${i}</sub>)${NB}Δ${x}<br>= ${INT(a, b)}${fx}${DX},<br>where the final equality is the definition of the definite integral (Riemann sum). ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2 (Area of a circle by integration).</b> The area enclosed by ${X2} + ${Y2} = ${A2} is π${A2}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> The circle is symmetric about both axes, so the total area is 4× the first-quadrant area. In the first quadrant the upper boundary is ${y} = ${RT} and ${x} runs from 0 to ${a}:<br>${A} = 4${INT('0', a)}${RT}${DX}.`,
      },
      {
        t: 'p',
        html: `<b>Why integrate only the first quadrant:</b> it removes sign ambiguity (here ${rel(y, '≥', '0')}) and exploits symmetry so we evaluate the standard integral just once. Using the catalogue antiderivative,<br>${A} = 4${EV(`${fr(x, '2')}${RT} + ${fr(A2, '2')}${NB}${ASIN(fr(x, a))}`, '0', a)}.`,
      },
      {
        t: 'p',
        html: `At ${rel(x, '=', a)}: the first term is ${fr(a, '2')} · 0 = 0, and sin<sup>−1</sup>(1) = ${PI2}, giving ${fr(A2, '2')} · ${PI2} = ${fr(`π${A2}`, '4')}. At ${rel(x, '=', '0')} both terms vanish. Hence<br>${A} = 4 · ${fr(`π${A2}`, '4')} = π${A2}. ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 3 (Area of an ellipse by integration).</b> The area enclosed by ${fr(X2, A2)} + ${fr(Y2, sq(b))} = 1 is π${I('ab')}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Solving for the upper half, ${y} = ${fr(b, a)}${RT}. By the same two-axis symmetry,<br>${A} = 4${INT('0', a)}${fr(b, a)}${RT}${DX}<br>= ${fr(`4${b}`, a)}${INT('0', a)}${RT}${DX}.`,
      },
      {
        t: 'p',
        html: `We already evaluated ${INT('0', a)}${RT}${DX} = ${fr(`π${A2}`, '4')} in Theorem 2, so<br>${A} = ${fr(`4${b}`, a)} · ${fr(`π${A2}`, '4')} = π${I('ab')}. ■`,
      },
      {
        t: 'p',
        html: `Notice the satisfying check: setting ${rel(b, '=', a)} collapses the ellipse into a circle, and π${I('ab')} collapses into π${A2}. A formula that degenerates correctly is almost certainly right.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the area of the region bounded by the curve ${y} = ${X2} + 2, the ${x}-axis, and the lines ${rel(x, '=', '0')} and ${rel(x, '=', '2')}.`,
        steps: [
          `<b>Given:</b> ${y} = ${fx} = ${X2} + 2, ordinates ${rel(x, '=', '0')} to ${rel(x, '=', '2')}. Since ${X2} + 2 > 0 everywhere, the curve lies entirely above the axis: no sign worries.`,
          `${A} = ${INT('0', '2')}(${X2} + 2)${DX} = ${EV(`${fr(X3, '3')} + 2${x}`, '0', '2')}<br>= (${fr('8', '3')} + 4) − 0 = ${fr('8 + 12', '3')}`,
        ],
        ans: `Area = ${fr('20', '3')} square units`,
      },
      {
        t: 'ex',
        tag: 'Conceptual Trap / CUET–JEE Main Speed Trap',
        q: `Find the area bounded by ${y} = ${X3}, the ${x}-axis, between ${rel(x, '=', '−2')} and ${rel(x, '=', '2')}.`,
        steps: [
          `<b>The trap:</b> a hurried student writes ${INT('−2', '2')}${X3}${DX}. Because ${X3} is an odd function, that integral equals 0, and they tick “0”. But the region is plainly not empty; the curve dips below the axis on [−2,${NB}0] and rises above on [0,${NB}2], so the two signed pieces cancel.`,
          `<b>The fix:</b> area is ∫${ABSFX}${DX}. Split at the crossing ${rel(x, '=', '0')} and use symmetry (the two halves have equal area):<br>${A} = ${abs(`${INT('−2', '0')}${X3}${DX}`)} + ${INT('0', '2')}${X3}${DX}<br>= 2${INT('0', '2')}${X3}${DX} = 2${EV(fr(`${x}<sup>4</sup>`, '4'), '0', '2')} = 2 · ${fr('16', '4')} = 8.`,
          '<b>Mental shortcut:</b> the instant you see a curve that changes sign on the interval, stop and split; never integrate straight across a root.',
        ],
        ans: 'Area = 8 square units',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: multi-concept',
        q: `Find the area of the region in the first quadrant bounded by the parabola ${Y2} = 4${x}, the ${x}-axis, and the line ${rel(x, '=', '4')}.`,
        steps: [
          '<b>Concepts combined:</b> (i) recognising the parabola’s first-quadrant branch, (ii) integrating, (iii) a symmetry awareness check.',
          `From ${Y2} = 4${x}, the upper branch is ${y} = ${ROOT2X}. The region sits between the ${x}-axis and this branch, from ${rel(x, '=', '0')} to ${rel(x, '=', '4')}:<br>${A} = ${INT('0', '4')}${ROOT2X}${DX} = 2${INT('0', '4')}${x}<sup>1/2</sup>${DX}<br>= 2${EV(`${fr('2', '3')}${x}<sup>3/2</sup>`, '0', '4')} = ${fr('4', '3')}(4<sup>3/2</sup>) = ${fr('4', '3')} · 8 = ${fr('32', '3')}.`,
          `<b>Concept-check the examiner is testing:</b> had the question asked for the region bounded by the parabola and the line ${rel(x, '=', '4')} (both branches, above and below the axis), symmetry doubles the answer to ${fr('64', '3')}. Read whether the ${x}-axis is a stated boundary: it decides whether you take one branch or two.`,
        ],
        ans: `Area = ${fr('32', '3')} square units`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the area of the smaller region bounded by the circle ${X2} + ${Y2} = 16 and the line ${rel(x, '=', '2')} (the part of the disc lying to the right of the line).`,
        steps: [
          `<b>Setup.</b> The circle has radius 4. The line ${rel(x, '=', '2')} is a vertical chord; the “smaller region” is the cap between ${rel(x, '=', '2')} and ${rel(x, '=', '4')}. It is symmetric about the ${x}-axis, so take the upper half (${y} = √(16 − ${X2})) and double:<br>${A} = 2${INT('2', '4')}√(16 − ${X2})${DX}.`,
          `Apply the antiderivative with ${rel(a, '=', '4')}:<br>∫√(16 − ${X2})${DX} = ${fr(x, '2')}√(16 − ${X2}) + ${fr('16', '2')}${NB}${ASIN(fr(x, '4'))}<br>= ${fr(x, '2')}√(16 − ${X2}) + 8${NB}${ASIN(fr(x, '4'))}.`,
          `<b>Upper limit ${rel(x, '=', '4')}:</b> ${fr('4', '2')} · 0 + 8${NB}sin<sup>−1</sup>(1) = 8${NB}·${NB}${PI2} = 4π.`,
          `<b>Lower limit ${rel(x, '=', '2')}:</b> ${fr('2', '2')}√12 + 8${NB}sin<sup>−1</sup>(${HALF})<br>= 2√3 + 8 · ${fr('π', '6')} = 2√3 + ${fr('4π', '3')}.`,
          `Subtract and double:<br>${A} = 2[4π − (2√3 + ${fr('4π', '3')})]<br>= 2[${fr('12π − 4π', '3')} − 2√3]<br>= 2[${fr('8π', '3')} − 2√3] = ${fr('16π', '3')} − 4√3.`,
          `<b>Sanity check:</b> the full disc is 16π ≈ 50.3; a cap cut at one-half the radius taking ≈ 20% of the disc is geometrically reasonable.`,
        ],
        ans: `Area = ${fr('16π', '3')} − 4√3 square units ≈ 9.83 sq. units`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the area bounded by ${y} = 3${X2} + 1, the ${x}-axis, and the lines ${rel(x, '=', '0')}, ${rel(x, '=', '2')}.`,
            a: '10',
          },
          {
            q: `<b>[CUET / JEE Main]</b> Find the area bounded by ${y} = cos${NB}${x}, the ${x}-axis, from ${rel(x, '=', '0')} to ${rel(x, '=', 'π')}. (Watch the sign change.)`,
            a: '2',
          },
          {
            q: `<b>[JEE Main]</b> Find the area of the region bounded by the curve ${x} = 4 − ${Y2} and the ${y}-axis.`,
            a: fr('32', '3'),
          },
          {
            q: `<b>[JEE Main]</b> Find the area bounded by ${y} = ${X2}, the ${x}-axis, and the ordinates ${rel(x, '=', '1')} and ${rel(x, '=', '3')}.`,
            a: fr('26', '3'),
          },
          {
            q: `<b>[JEE Advanced]</b> Find the area of the smaller region bounded by the circle ${X2} + ${Y2} = 9 and the line ${x} = ${fr('3', '2')}.`,
            a: `3π − ${fr('9√3', '4')}`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `If ${rel(fx, '≤', '0')} throughout ${AB}, the area between the curve ${y} = ${fx} and the ${x}-axis equals:`,
        opts: [
          {
            label: `${INT(a, b)}${fx}${DX}`,
            nudge: '<b>(a)</b> is the signed integral, a negative number, and area can never be negative; this is the single most common slip.',
          },
          { label: `−${INT(a, b)}${fx}${DX}`, nudge: null },
          {
            label: '0',
            nudge: '<b>(c)</b> confuses this with the odd-function-over-symmetric-interval case, which is a different situation entirely.',
          },
          {
            label: `${HALF}${INT(a, b)}${fx}${DX}`,
            nudge: `<b>(d)</b> has no basis; the ${HALF} likely leaks in from the triangle-area formula by reflex.`,
          },
        ],
        correct: 1,
        solution: 'When the curve is below the axis the definite integral is negative, but area must be non-negative, so we negate it.',
      },
      {
        t: 'mcq',
        q: `The area bounded by ${y} = sin${NB}${x}, the ${x}-axis, from ${rel(x, '=', '0')} to ${rel(x, '=', '2π')} is:`,
        opts: [
          {
            label: '0',
            nudge: `<b>(a)</b> is the signed integral ${INT('0', '2π')}sin${NB}${x}${DX} = 0: the positive and negative humps cancel; the classic trap.`,
          },
          { label: '2', nudge: '<b>(b)</b> computes only the first hump and forgets the second.' },
          { label: '4', nudge: null },
          { label: '1', nudge: `<b>(d)</b> 1 is ${INT('0', 'π/2')}sin${NB}${x}${DX}: only half of the first hump.` },
        ],
        correct: 2,
        solution: `sin${NB}${x} ≥ 0 on [0,${NB}π] and ≤ 0 on [π,${NB}2π]. Splitting:<br>${INT('0', 'π')}sin${NB}${x}${DX} + ${abs(`${INT('π', '2π')}sin${NB}${x}${DX}`)} = 2 + 2 = 4.`,
      },
      {
        t: 'mcq',
        q: `The area of the region bounded by the curve ${x} = ${Y2}, the ${y}-axis, and the lines ${rel(y, '=', '0')}, ${rel(y, '=', '2')} is:`,
        opts: [
          { label: fr('8', '3'), nudge: null },
          {
            label: fr('4', '3'),
            nudge: `<b>(b)</b> ${fr('4', '3')} is half of the correct value ${fr('8', '3')}: it is the right integral with a stray factor ${HALF} in front.`,
          },
          {
            label: fr('16', '3'),
            nudge: `<b>(c)</b> doubles incorrectly, as if exploiting a symmetry that the stated bounds (${rel(y, '=', '0')} to 2, one side only) do not provide.`,
          },
          {
            label: '2',
            nudge: `<b>(d)</b> is what you get integrating ${INT('0', '2')}${y}${DY}, i.e. integrating ${x} = ${y} instead of ${x} = ${Y2}, the wrong-variable / wrong-curve trap.`,
          },
        ],
        correct: 0,
        solution: `The boundaries are horizontal lines, so integrate with respect to ${y}:<br>${INT('0', '2')}${Y2}${DY} = ${EV(fr(cube(y), '3'), '0', '2')} = ${fr('8', '3')}.`,
      },
      {
        t: 'mcq',
        q: `The area enclosed by the ellipse ${fr(X2, '16')}${NB}+${NB}${fr(Y2, '9')} = 1 is:`,
        opts: [
          { label: '12π', nudge: null },
          {
            label: '7π',
            nudge: `<b>(b)</b> adds the semi-axes (${a} + ${b} = 7) instead of multiplying: a formula-recall error.`,
          },
          {
            label: '144π',
            nudge: `<b>(c)</b> multiplies ${A2}${sq(b)} = 16 × 9 = 144, forgetting to take square roots of the denominators.`,
          },
          {
            label: '25π',
            nudge: `<b>(d)</b> uses ${A2} + ${sq(b)} = 25, a Pythagoras reflex that has nothing to do with area.`,
          },
        ],
        correct: 0,
        solution: `Here ${A2} = 16 ⇒ ${rel(a, '=', '4')} and ${sq(b)} = 9 ⇒ ${rel(b, '=', '3')}, so area = π${I('ab')} = π(4)(3) = 12π.`,
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Reporting a negative or zero “area.”</b> Whenever the curve goes below the axis, the raw integral is negative; if it crosses the axis, opposite pieces cancel. Always sketch first and use ∫${abs(f)}${DX}, splitting at every root.`,
          `<b>Integrating with respect to the wrong variable.</b> A region walled by the ${y}-axis and horizontal lines wants ∫${x}${DY}, not ∫${y}${DX}. Forcing d${x} here creates needless casework.`,
          `<b>Using the wrong limits.</b> Limits are the boundary lines or the points where the curve meets the axis, not arbitrary numbers. For a curve like ${y} = 4 − ${X2} bounded by the ${x}-axis, the limits are the roots ${rel(x, '=', '±2')}, which you must solve for.`,
          '<b>Forgetting to multiply back after using symmetry.</b> Computing the first-quadrant area of a circle and then forgetting the ×4 gives a quarter of the answer.',
          `<b>Mangling the ellipse formula.</b> It is π${I('ab')} (product of the semi-axes), not π${A2}${sq(b)}, not π(${a} + ${b}).`,
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (the sketch-then-split-then-symmetry reflex):</b> Before touching the integral, do three things in five seconds: (1) rough-sketch the curve and shade the region; (2) mark where it crosses the axis inside your interval and plan to split there; (3) check for symmetry so you can integrate the smallest piece and multiply. This routine kills the three biggest mark-losers (sign, limits, symmetry) before they happen.',
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (degeneration check):</b> After deriving any area formula with parameters, plug in a value that collapses it to a shape you know. The ellipse π${I('ab')} must become the circle π${A2} when ${rel(b, '=', a)}. If it doesn’t, you’ve made an error.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `<b>Vertical strips (about ${x}-axis)</b>`, note: `${A} = ${INT(a, b)}${y}${DX},${NB}${NB}${rel(y, '≥', '0')}` },
          { f: `<b>Horizontal strips (about ${y}-axis)</b>`, note: `${A} = ${INT(c, d)}${x}${DY},${NB}${NB}${rel(x, '≥', '0')}` },
          { f: '<b>Below the axis / crossing it</b>', note: `${A} = ${INT(a, b)}${ABSFX}${DX}: split at every root.` },
          {
            f: `<b>Circle</b> ${X2} + ${Y2} = ${A2}: ${A} = π${A2}`,
            note: `<b>Ellipse</b> ${fr(X2, A2)} + ${fr(Y2, sq(b))} = 1: ${A} = π${I('ab')}`,
          },
          { f: '<b>Key antiderivative</b>', note: WORKHORSE },
        ],
        aids: [
          `<b>“SLiCE”:</b> <b>S</b>ketch → <b>L</b>imits (and roots) → <b>C</b>hoose variable (d${x}/d${y}) → <b>E</b>valuate (with ${abs('·')} and symmetry). Slice the region right and the integral writes itself.`,
        ],
      },
    ],
  },

  // ──────────────── Topic 02 · Subtopic 02 · pp. 541–550 ────────────────
  {
    n: '02',
    title: 'Area between Two Curves',
    kalam: 'Master “top minus bottom” and you own this chapter.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the highest-yield idea in the whole chapter. Older CBSE papers often set a 5-mark question here (typically area between a line and a parabola, or between two parabolas), but the rationalised NCERT book no longer includes area between two curves and the current CBSE syllabus asks only for areas under simple curves (lines, circles, parabolas, ellipses), as far as we know. JEE Main places 1 reliable question per session ${ESTIMATE}, and JEE Advanced builds its toughest area problems by intersecting a curve with a circle or with itself, demanding a split into pieces. Master “top minus bottom” and you own this chapter.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `In Topic 01 you learned to find the area trapped between a single curve and an axis. But the axis is really nothing special: it is just the flat line ${rel(y, '=', '0')}. What if the floor of your region is itself a curve? Then you are looking at the area sandwiched <b>between two curves</b>, and the idea you already have generalises in one clean stroke.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Picture the strip of land between two railway tracks running across a hilly stretch of the Konkan coast. The upper track follows one curve, ${y} = ${fx}; the lower track follows another, ${y} = ${gx}. You want the area of the land in between. Slice that strip vertically into paper-thin pieces, exactly as before. Each thin vertical strip now runs from the lower track up to the upper track, so its height is not “the curve” but <b>the gap between the curves</b>: top − bottom = ${fx} − ${gx}. Its width is still d${x}, so its area is [${fx} − ${gx}]${DX}. Add up all the strips from where the tracks start (${rel(x, '=', a)}) to where they end (${rel(x, '=', b)}):<br>Area = ${INT(a, b)}[${fx} − ${gx}]${DX},<br>${rel(fx, '≥', gx)} on ${AB}.`,
      },
      {
        t: 'p',
        html: `That is the entire concept. The single-curve case of Topic 01 is just this formula with the bottom curve being the ${x}-axis, ${gx} = 0.`,
      },
      { t: 'fig', id: 'm12-08-fig-8.2' },
      {
        t: 'p',
        html: `Two genuinely new wrinkles appear that did not exist with a single curve:<br>1. <b>Where do the strips start and stop?</b> The limits ${a} and ${b} are usually not handed to you. They are the <b>points of intersection</b> of the two curves, the places where the strip-height shrinks to zero. You find them by solving ${fx} = ${gx}.<br>2. <b>Which curve is on top?</b> “Top minus bottom” only works if you know which is which. And the two curves may <b>swap roles</b>: ${f} above ${g} on one stretch, below it on another. Wherever they cross, the gap flips sign, so you must split the region at each crossing and always subtract the genuine lower curve from the genuine upper one.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions:</b><br>• You must identify top vs bottom correctly, ideally by testing one sample ${x} between the intersection points. Guessing is the number-one source of sign errors here.<br>• If the curves cross inside ${AB}, you <b>must split</b> at the crossing(s); a single integral across a swap gives a wrong (too small, sometimes zero) answer.<br>• For curves that open sideways (e.g. ${x} as a function of ${y}, like a parabola ${Y2} = 4${x}), integrating in ${y} (“right minus left”) is far cleaner than forcing d${x}.<br>• Both functions should be continuous on the interval of integration.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: `<b>Area between two curves, vertical strips</b> (curves ${y} = ${fx} and ${y} = ${gx}, with ${rel(f, '≥', g)} between intersection abscissae ${rel(x, '=', a)} and ${rel(x, '=', b)}):`,
      },
      {
        t: 'formula',
        kicker: 'Area between two curves, vertical strips',
        main: `${A} = ${INT(a, b)}[${fx} − ${gx}]${DX}`,
        legend: [
          `${fx}, ${gx} = the upper and lower curves (functions of ${x})`,
          `${a}, ${b} = the ${x}-coordinates of the points of intersection`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Area between two curves, horizontal strips</b> (curves ${x} = ${py} and ${x} = ${qy}, with ${rel(p, '≥', q)}, i.e. ${p} is the right curve, between ${rel(y, '=', c)} and ${rel(y, '=', d)}):`,
      },
      {
        t: 'formula',
        kicker: 'Area between two curves, horizontal strips',
        main: `${A} = ${INT(c, d)}[${py} − ${qy}]${DY}`,
        legend: [
          `${py}, ${qy} = the right and left curves (functions of ${y})`,
          `${c}, ${d} = the ${y}-coordinates of the points of intersection`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>When the curves cross at ${rel(x, '=', k)} inside ${AB}</b> (${rel(f, '≥', g)} on [${a},${NB}${k}], then ${rel(g, '≥', f)} on [${k},${NB}${b}]):`,
      },
      {
        t: 'formula',
        kicker: 'When the curves cross',
        main: `${A} = ${INT(a, k)}[${fx} − ${gx}]${DX} + ${INT(k, b)}[${gx} − ${fx}]${DX}<br>= ${INT(a, b)}${abs(`${fx} − ${gx}`)}${DX}`,
        legend: [`${k} = an interior crossing where top and bottom swap`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Special case (recovers Topic 01):</b> if the lower curve is the ${x}-axis, ${gx} = 0, then ${A} = ${INT(a, b)}${fx}${DX}.`,
      },
      {
        t: 'defgrid',
        title: 'Notation key: symbol and meaning',
        rows: [
          { k: `${fx}, ${gx}`, v: `upper and lower curves (functions of ${x})` },
          { k: `${py}, ${qy}`, v: `right and left curves (functions of ${y})` },
          { k: `${a}, ${b}`, v: `${x}-coordinates of the <b>points of intersection</b> (limits for d${x})` },
          { k: `${c}, ${d}`, v: `${y}-coordinates of the points of intersection (limits for d${y})` },
          { k: k, v: 'an interior crossing where top and bottom swap' },
        ],
      },
      {
        t: 'p',
        html: '<b>Standard catalogue result</b> (proved in the Theorems and proofs part):',
      },
      {
        t: 'formula',
        kicker: 'Area between the two parabolas',
        main: `Parabolas ${Y2} = 4${AX} and ${X2} = 4${AY}: ${A} = ${fr(`16${A2}`, '3')}`,
        legend: [`${a} = the parameter of both parabolas (${rel(a, '>', '0')})`],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Symmetry property:</b> if the whole region is symmetric about an axis, integrate one half and double, but make sure the symmetry is genuine before using it.',
      },

      { t: 'part', title: 'Theorems and proofs' },
      {
        t: 'p',
        html: `<b>Theorem 1 (The between-curves formula).</b> If ${f} and ${g} are continuous on ${AB} with ${rel(fx, '≥', gx)} throughout, the area of the region bounded above by ${y} = ${fx}, below by ${y} = ${gx}, and on the sides by ${rel(x, '=', a)}, ${rel(x, '=', b)} is<br>${A} = ${INT(a, b)}[${fx} − ${gx}]${DX}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Take an elementary vertical strip at position ${x} of width d${x}. Its top edge sits on ${y} = ${fx} and its bottom edge on ${y} = ${gx}, so its height is ${fx} − ${gx} and its area is [${fx} − ${gx}]${DX}. Summing over all strips from ${a} to ${b} and passing to the limit (the Riemann-sum argument of Topic 01) gives ${A} = ${INT(a, b)}[${fx} − ${gx}]${DX}.`,
      },
      {
        t: 'p',
        html: `<b>Why this holds even when a curve dips below the ${x}-axis.</b> Suppose ${rel(gx, '<', '0')} somewhere. Shift the entire picture up by a constant ${C} large enough that both curves rise above the axis. Shifting does not change the gap between them, hence not the area. The shifted area is ${INT(a, b)}[(${f} + ${C}) − (${g} + ${C})]${DX} = ${INT(a, b)}(${f} − ${g})${DX}: the constant cancels. So the formula is valid regardless of whether the curves lie above or below the axis, <b>provided</b> ${rel(f, '≥', g)}. That single proviso is the whole game. ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2 (Area between two equal parabolas).</b> The area enclosed between ${Y2} = 4${AX} and ${X2} = 4${AY} (with ${rel(a, '>', '0')}) is ${fr(`16${A2}`, '3')}.`,
      },
      {
        t: 'p',
        html: `<b>Proof. Find the intersections.</b> From the second curve, ${y} = ${fr(X2, `4${a}`)}. Substitute into the first:<br>(${fr(X2, `4${a}`)})<sup>2</sup> = 4${AX} ⇒ ${fr(`${x}<sup>4</sup>`, `16${A2}`)} = 4${AX}<br>⇒ ${x}<sup>4</sup> = 64${a}<sup>3</sup>${x} ⇒ ${x}(${X3} − 64${a}<sup>3</sup>) = 0.<br>So ${rel(x, '=', '0')} or ${x} = 4${a}. The curves meet at (0,${NB}0) and (4${a},${NB}4${a}), fixing the limits.`,
      },
      {
        t: 'p',
        html: `<b>Identify top and bottom.</b> Between ${rel(x, '=', '0')} and ${x} = 4${a}, the upper branch of ${Y2} = 4${AX} is ${y} = 2√(${AX}), while the other parabola gives ${y} = ${fr(X2, `4${a}`)}. Test ${rel(x, '=', a)}: 2√(${a} · ${a}) = 2${a} versus ${fr(A2, `4${a}`)} = ${fr(a, '4')}. Since 2${a} > ${fr(a, '4')}, the curve ${y} = 2√(${AX}) is on top.`,
      },
      {
        t: 'p',
        html: `<b>Integrate top minus bottom.</b><br>${A} = ${INT('0', `4${a}`)}[2√(${AX}) − ${fr(X2, `4${a}`)}]${DX}<br>= 2√${a} · ${fr('2', '3')}${x}<sup>3/2</sup>${BAR('0', `4${a}`)} − ${fr('1', `4${a}`)} · ${fr(X3, '3')}${BAR('0', `4${a}`)}.`,
      },
      {
        t: 'p',
        html: `Now (4${a})<sup>3/2</sup> = 8${a}<sup>3/2</sup> and (4${a})<sup>3</sup> = 64${a}<sup>3</sup>, so<br>${A} = ${fr(`4√${a}`, '3')}(8${a}<sup>3/2</sup>) − ${fr('1', `12${a}`)}(64${a}<sup>3</sup>)<br>= ${fr(`32${A2}`, '3')} − ${fr(`16${A2}`, '3')} = ${fr(`16${A2}`, '3')}. ■`,
      },
      {
        t: 'p',
        html: `<b>Check:</b> the answer scales as ${A2} (an area), exactly as it must.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level (older papers)',
        q: `Find the area of the region bounded by the line ${y} = ${x} and the parabola ${y} = ${X2}.`,
        steps: [
          `<b>Intersections:</b> ${x} = ${X2} ⇒ ${x}(${x} − 1) = 0 ⇒ ${x} = 0, 1. So ${rel(a, '=', '0')}, ${rel(b, '=', '1')}.`,
          `<b>Top vs bottom:</b> test ${x} = ${HALF}: line gives 0.5, parabola gives 0.25. The line ${y} = ${x} is on top.`,
          `${A} = ${INT('0', '1')}(${x} − ${X2})${DX} = ${EV(`${fr(X2, '2')} − ${fr(X3, '3')}`, '0', '1')} = ${HALF} − ${fr('1', '3')} = ${fr('1', '6')}.`,
        ],
        ans: `Area = ${fr('1', '6')} square units`,
      },
      {
        t: 'ex',
        tag: 'Conceptual Trap / CUET–JEE Main Speed Trap',
        q: `Find the area enclosed between ${y} = ${x} and ${y} = ${X3} for −1 ≤ ${x} ≤ 1.`,
        steps: [
          `<b>The trap:</b> the hasty move is ${INT('−1', '1')}(${x} − ${X3})${DX}, which equals 0 because the integrand is odd. But the region clearly has area: the two curves cross at ${x} = −1, 0, 1 and swap which is on top.`,
          `<b>The fix: find the swap and split.</b> On (0,${NB}1): at ${rel(x, '=', '0.5')}, ${x} = 0.5 > ${X3} = 0.125, so ${y} = ${x} is on top. On (−1,${NB}0): at ${rel(x, '=', '−0.5')}, ${X3} = −0.125 > ${x} = −0.5, so ${y} = ${X3} is on top. By symmetry the two halves are equal:<br>${A} = 2${INT('0', '1')}(${x} − ${X3})${DX} = 2${EV(`${fr(X2, '2')} − ${fr(`${x}<sup>4</sup>`, '4')}`, '0', '1')}<br>= 2(${HALF} − ${fr('1', '4')}) = ${HALF}.`,
          'The instant two curves cross inside your interval, split; never integrate straight through a crossing.',
        ],
        ans: `Area = ${HALF} square units`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: multi-concept',
        q: `Find the area of the region bounded by the parabola ${Y2} = 4${x} and the line ${y} = 2${x} − 4.`,
        steps: [
          `<b>Concepts combined:</b> intersection-solving, the smart choice to integrate in ${y}, and “right minus left.”`,
          `Both curves are easy as functions of ${y}: parabola ${x} = ${fr(Y2, '4')}, line ${x} = ${fr(`${y} + 4`, '2')}.`,
          `<b>Intersections:</b> ${fr(Y2, '4')} = ${fr(`${y} + 4`, '2')} ⇒ ${Y2} = 2${y} + 8<br>⇒ ${Y2} − 2${y} − 8 = 0 ⇒ (${y} − 4)(${y} + 2) = 0<br>⇒ ${y} = −2, 4.`,
          `<b>Right vs left:</b> at ${rel(y, '=', '0')}, line gives ${rel(x, '=', '2')}, parabola gives ${rel(x, '=', '0')}; the line is the right curve. Using horizontal strips:<br>${A} = ${INT('−2', '4')}[${fr(`${y} + 4`, '2')} − ${fr(Y2, '4')}]${DY}.`,
          `Compute piecewise:<br>${INT('−2', '4')}${fr(`${y} + 4`, '2')}${DY} = ${HALF}${EV(`${fr(Y2, '2')} + 4${y}`, '−2', '4')}<br>= ${HALF}[24 − (−6)] = 15, and<br><br>${INT('−2', '4')}${fr(Y2, '4')}${DY} = ${fr('1', '12')}${EV(cube(y), '−2', '4')}<br>= ${fr('64 + 8', '12')} = 6.`,
          `${A} = 15 − 6 = 9.`,
          `(Had we used vertical strips, the parabola’s two branches would have forced an awkward two-part integral; choosing d${y} collapses it to one.)`,
        ],
        ans: 'Area = 9 square units',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the area of the region common to the interior of the parabola ${Y2} = 4${x} and the interior of the circle ${X2} + ${Y2} = 5.`,
        steps: [
          `<b>Intersections.</b> Substitute ${Y2} = 4${x} into the circle: ${X2} + 4${x} = 5 ⇒ ${X2} + 4${x} − 5 = 0<br>⇒ (${x} + 5)(${x} − 1) = 0. Reject ${rel(x, '=', '−5')} (the parabola needs ${rel(x, '≥', '0')}); so ${rel(x, '=', '1')}, giving ${rel(y, '=', '±2')}. The curves meet at (1,${NB}2) and (1,${NB}−2).`,
          `<b>Set up the region (upper half, then double by symmetry about the ${x}-axis).</b> Moving left to right: from ${rel(x, '=', '0')} to ${rel(x, '=', '1')} the binding ceiling is the <b>parabola</b> ${y} = ${ROOT2X} (it is the smaller of the two there); from ${rel(x, '=', '1')} to ${rel(x, '=', '√5')} the binding ceiling is the <b>circle</b> ${y} = √(5 − ${X2}).<br>${A} = 2[${INT('0', '1')}${ROOT2X}${DX} + ${INT('1', '√5')}√(5 − ${X2})${DX}].`,
          `<b>First piece:</b> ${INT('0', '1')}${ROOT2X}${DX} = 2 · ${fr('2', '3')}${x}<sup>3/2</sup>${BAR('0', '1')} = ${fr('4', '3')}.`,
          `<b>Second piece</b> (use ${WORKHORSE.replace(` + ${C}`, '')} with ${A2} = 5):<br>${INT('1', '√5')}√(5 − ${X2})${DX}<br>= ${EV(`${fr(x, '2')}√(5 − ${X2}) + ${fr('5', '2')}${NB}${ASIN(fr(x, '√5'))}`, '1', '√5')}.`,
          `At ${rel(x, '=', '√5')}: 0 + ${fr('5', '2')} · ${PI2} = ${fr('5π', '4')}.<br><br>At ${rel(x, '=', '1')}: ${HALF}√4 + ${fr('5', '2')}${NB}${ASIN(fr('1', '√5'))}<br>= 1 + ${fr('5', '2')}${NB}${ASIN(fr('1', '√5'))}.`,
          `So the second piece = ${fr('5π', '4')} − 1 − ${fr('5', '2')}${NB}${ASIN(fr('1', '√5'))}.`,
          `<b>Combine:</b><br>${A} = 2[${fr('4', '3')} + ${fr('5π', '4')} − 1 − ${fr('5', '2')}${NB}${ASIN(fr('1', '√5'))}]<br>= ${fr('2', '3')} + ${fr('5π', '2')} − 5${NB}${ASIN(fr('1', '√5'))}.`,
          '<b>Sanity check:</b> the whole disc has area 5π ≈ 15.7, and the common region taking under half of it is geometrically sensible.',
        ],
        ans: `Area = ${fr('2', '3')} + ${fr('5π', '2')} − 5${NB}${ASIN(fr('1', '√5'))} square units ≈ 6.20 sq. units`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `<b>[CBSE, older papers]</b> Find the area of the region bounded by ${y} = ${X2} and ${y} = 2${x}.`, a: fr('4', '3') },
          {
            q: `<b>[CUET / JEE Main]</b> Find the area enclosed between ${y} = sin${NB}${x} and ${y} = cos${NB}${x} from ${rel(x, '=', '0')} to ${x} = ${PI4}. (Decide which is on top.)`,
            a: '√2 − 1',
          },
          { q: `<b>[JEE Main]</b> Find the area bounded by the parabola ${Y2} = ${x} and the line ${x} = 3${y}.`, a: fr('9', '2') },
          { q: `<b>[JEE Main]</b> Find the area enclosed between the parabolas ${Y2} = 4${x} and ${X2} = 4${y}.`, a: fr('16', '3') },
          {
            q: `<b>[JEE Advanced]</b> Find the area of the region {(${x},${NB}${y}) ∶ 0 ≤ ${y} ≤ ${X2} + 1, 0 ≤ ${y} ≤ ${x} + 1, 0 ≤ ${x} ≤ 2}.`,
            a: fr('23', '6'),
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The area between an upper curve ${y} = ${fx} and a lower curve ${y} = ${gx} from ${rel(x, '=', a)} to ${rel(x, '=', b)} is:`,
        opts: [
          {
            label: `${INT(a, b)}(${f} + ${g})${DX}`,
            nudge: '<b>(a)</b> adds the curves: a meaningless quantity here; a common reflex when a student blanks on the rule.',
          },
          { label: `${INT(a, b)}(${f} − ${g})${DX}`, nudge: null },
          {
            label: `${INT(a, b)}(${g} − ${f})${DX}`,
            nudge: '<b>(c)</b> is bottom minus top; it gives the negative of the area (only correct if you mislabelled which curve is upper).',
          },
          {
            label: `${INT(a, b)}(${abs(f)} − ${abs(g)})${DX}`,
            nudge: `<b>(d)</b> confuses this with the single-curve absolute-value rule from Topic 01; ${abs(f)} − ${abs(g)} is not the gap between the curves.`,
          },
        ],
        correct: 1,
        solution: `Strip height is top minus bottom, ${f} − ${g}.`,
      },
      {
        t: 'mcq',
        q: `The area of the region bounded by ${y} = ${X2} and ${y} = ${x} between their points of intersection is:`,
        opts: [
          { label: fr('1', '6'), nudge: null },
          {
            label: fr('1', '3'),
            nudge: `<b>(b)</b> is the result of integrating only the parabola, ${INT('0', '1')}${X2}${DX} = ${fr('1', '3')}, i.e. forgetting to subtract at all.`,
          },
          {
            label: HALF,
            nudge: `<b>(c)</b> is the area under the line alone, ${INT('0', '1')}${x}${DX} = ${HALF}: again a no-subtraction error.`,
          },
          {
            label: fr('5', '6'),
            nudge: `<b>(d)</b> adds the two single-curve areas ${HALF} + ${fr('1', '3')} instead of subtracting.`,
          },
        ],
        correct: 0,
        solution: `Intersections at 0, 1; line on top; ${INT('0', '1')}(${x} − ${X2})${DX} = ${HALF} − ${fr('1', '3')} = ${fr('1', '6')}.`,
      },
      {
        t: 'mcq',
        q: `The area bounded by the line ${y} = ${x} and the parabola ${Y2} = 4${x} is:`,
        opts: [
          { label: fr('8', '3'), nudge: null },
          {
            label: fr('16', '3'),
            nudge: `<b>(b)</b> ${fr('16', '3')} is ${INT('0', '4')}${RTX}${DX} alone: the factor 2 of 2${RTX} dropped and the line never subtracted.`,
          },
          {
            label: '8',
            nudge: `<b>(c)</b> 8 is the area under the line ${y} = ${x} alone (${HALF} · 4 · 4 = 8), with no subtraction.`,
          },
          { label: '4', nudge: `<b>(d)</b> 4 comes from a slip such as ${HALF} · 4 · 2 (a triangle of base 4, height 2).` },
        ],
        correct: 0,
        solution: `Intersections: ${X2} = 4${x} ⇒ ${x} = 0, 4. On (0,${NB}4) the parabola ${y} = ${ROOT2X} is above the line ${y} = ${x}.<br>${INT('0', '4')}(${ROOT2X} − ${x})${DX} = ${fr('4', '3')}${x}<sup>3/2</sup> − ${fr(X2, '2')}${BAR('0', '4')}<br>= ${fr('32', '3')} − 8 = ${fr('8', '3')}.`,
      },
      {
        t: 'mcq',
        q: `The area enclosed between the parabolas ${Y2} = 4${x} and ${X2} = 4${y} is:`,
        opts: [
          { label: fr('16', '3'), nudge: null },
          {
            label: fr('32', '3'),
            nudge: `<b>(b)</b> ${fr('32', '3')} is the area under the upper parabola alone: the classic “forgot to subtract the lower curve” trap.`,
          },
          {
            label: fr('8', '3'),
            nudge: `<b>(c)</b> ${fr('8', '3')} is only half the region: the part between one parabola and the line ${y} = ${x}. The region is symmetric about ${y} = ${x}, so the whole area is twice this.`,
          },
          {
            label: '16',
            nudge: `<b>(d)</b> 16 is the area of the 4 × 4 square with corners (0,${NB}0) and (4,${NB}4), the two intersection points: the box around the region, not the region.`,
          },
        ],
        correct: 0,
        solution: `This is the standard result ${fr(`16${A2}`, '3')} with ${rel(a, '=', '1')}.`,
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Subtracting in the wrong order.</b> Writing bottom − top flips the sign and yields a negative “area.” Always confirm which curve is higher by plugging in one sample ${x}.`,
          `<b>Inventing the limits.</b> The limits are the intersection points, found by solving ${fx} = ${gx}, not numbers copied from the question text. Skipping this step is the most common way to lose the whole question.`,
          `<b>Integrating across a swap.</b> If the curves cross inside the interval, the top/bottom roles switch; integrate ${abs(`${f} − ${g}`)} by splitting at the crossing.`,
          `<b>Fighting the geometry with the wrong variable.</b> Sideways-opening parabolas and regions capped left/right are far cleaner in ${y} (right − left). Forcing d${x} creates needless two-branch casework.`,
          '<b>Assuming false symmetry.</b> Doubling a half-area only works if the region is truly symmetric about that axis: verify before halving the work.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (the four-beat routine):</b> Intersect → Sketch → Sample → Integrate. Solve ${f} = ${g} for the limits; sketch both curves; test one interior point to fix top vs bottom (and spot any swap); then integrate top − bottom. Doing these in order eliminates the three big mark-losers before they happen.`,
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (pick the variable by the boundaries):</b> If the region’s side boundaries are the curves and its top/bottom are horizontal, use d${y}. If its top/bottom are the curves and its sides are vertical, use d${x}. Match the strip to the geometry.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Vertical strips</b>',
            note: `${A} = ${INT(a, b)}(top − bottom)${DX} = ${INT(a, b)}[${fx} − ${gx}]${DX},${NB}${NB}${rel(f, '≥', g)}`,
          },
          { f: '<b>Horizontal strips</b>', note: `${A} = ${INT(c, d)}(right − left)${DY} = ${INT(c, d)}[${py} − ${qy}]${DY}` },
          { f: '<b>Curves that cross</b>', note: `split at the crossing; ${A} = ${INT(a, b)}${abs(`${f} − ${g}`)}${DX}` },
          { f: '<b>Limits = intersection points</b>', note: `solve ${fx} = ${gx} (or ${py} = ${qy}) first.` },
          { f: '<b>Standard result</b>', note: `parabolas ${Y2} = 4${AX} and ${X2} = 4${AY} enclose ${fr(`16${A2}`, '3')}.` },
          { f: '<b>Special case</b>', note: `bottom = ${x}-axis recovers Topic 01’s single-curve area.` },
        ],
        aids: [
          '<b>“ISSI”:</b> <b>I</b>ntersect, <b>S</b>ketch, <b>S</b>ample (which is on top), <b>I</b>ntegrate. Always top minus bottom, every strip, every time.',
        ],
      },
    ],
  },

  // ──────────────── Topic 03 · Subtopic 03 · pp. 551–559 ────────────────
  {
    n: '03',
    title: 'Advanced Regions: Modulus, Inequalities & Composite Areas',
    kalam: 'The mistakes happen in the decoding, almost never in the calculus.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the JEE layer of the chapter. JEE Main and Advanced regularly hide an area question inside a modulus curve, a system of inequalities, or a region whose ceiling changes partway across ${ESTIMATE}, and each looks far scarier than it is. CBSE Boards occasionally set a modulus area (e.g. ${y} = ${abs(`${x} − 2`)}) as a 3-mark question ${ESTIMATE}. Nothing new is integrated here; the skill is decoding the boundary so the problem collapses back into Topic 01 or Topic 02.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'By now you can find the area under one curve (Topic 01) and between two curves (Topic 02). Every “hard” area problem in JEE is one of those two in disguise: the only extra work is stripping off the disguise. Three disguises appear again and again.',
      },
      {
        t: 'p',
        html: `<b>Disguise 1: the modulus (absolute value).</b> A curve like ${y} = ${abs(x)} or ${y} = ${abs(`${x} − 2`)} has a corner. The modulus simply reflects whatever part of the inside expression is negative back up to positive.`,
      },
      {
        t: 'p',
        html: `So ${y} = ${abs(x)} is a “V”: the line ${y} = ${x} for ${rel(x, '≥', '0')} and the line ${y} = −${x} for ${rel(x, '<', '0')}, joined at a kink at the origin.`,
      },
      {
        t: 'p',
        html: `To handle it, you split the interval at every corner (where the inside changes sign) and integrate each smooth piece separately, exactly the splitting you already do for curves that cross the axis.`,
      },
      {
        t: 'p',
        html: `<b>Disguise 2: the inequality.</b> A condition like ${rel(y, '≤', fx)} is not a curve; it is a region, everything on one side of the curve. A system such as {${rel(y, '≥', X2)}, ${rel(y, '≤', `${x} + 2`)}} is the overlap of two such regions. Your job is to translate each inequality into “which side,” sketch the overlap, and read off the upper and lower boundaries, after which it is a plain Topic 02 problem.`,
      },
      {
        t: 'p',
        html: '<b>Disguise 3: the composite region.</b> Sometimes the ceiling of a region is one curve for a while, then switches to a different curve. Picture a Mumbai skyline: the roofline is one building, then a taller one, then a shorter one. To find the area beneath, you split the horizontal range at each point where the tallest boundary changes, integrate each slab, and add. This is the same “split and sum” idea, now driven by which curve is on top rather than by a sign change.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Every one of these is a decoding puzzle followed by routine integration. Decode the boundary (find the corners, decide the sides, locate the switch points) and the integral writes itself. The mistakes happen in the decoding, almost never in the calculus.',
      },
      { t: 'fig', id: 'm12-08-fig-8.3' },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• <b>Find every corner / switch point.</b> Missing even one (e.g. the kink of a nested modulus) gives wrong limits and a wrong area.<br>• <b>Get the side of an inequality right.</b> Always test one easy point (often the origin) to decide which side the region is on.<br>• <b>Verify symmetry before using it.</b> Many modulus regions are symmetric, but not all; never assume.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'formula',
        kicker: 'Modulus expansion',
        main: `${ABSFX} = ${fx},${NB}${NB}${rel(fx, '≥', '0')}<br>${ABSFX} = −${fx},${NB}${NB}${rel(fx, '<', '0')}`,
        legend: [`${fx} = the expression inside the modulus`],
        note: `Split the domain at the roots of ${f}.`,
      },
      {
        t: 'p',
        html: `<b>Area under a modulus curve:</b> ${A} = ${INT(a, b)}${ABSFX}${DX} = ∑<sub>pieces</sub>${NB}∫(±${f})${DX}, one integral per smooth piece, where ±${f} is the curve on each piece with its sign there.`,
      },
      {
        t: 'p',
        html: '<b>Standard “diamond” result</b> (rhombus bounded by four modulus-lines):',
      },
      {
        t: 'formula',
        kicker: 'Standard “diamond” result',
        main: `${fr(abs(x), p)} + ${fr(abs(y), q)} ≤ 1 ⇒ ${A} = 2${I('pq')}<br>In particular: ${abs(x)} + ${abs(y)} ≤ ${a} ⇒ ${A} = 2${A2}`,
        legend: [`${p}, ${q} = the legs of the first-quadrant triangle (${rel(p, '>', '0')}, ${rel(q, '>', '0')})`, `${a} = the half-diagonal of the square (${rel(a, '>', '0')})`],
        note: null,
      },
      {
        t: 'defgrid',
        title: 'Inequality decode (which side): inequality and region',
        rows: [
          { k: rel(y, '≤', fx), v: 'below the curve' },
          { k: rel(y, '≥', fx), v: 'above the curve' },
          { k: `${X2} + ${Y2} ≤ ${R2}`, v: 'inside the circle' },
          { k: `${X2} + ${Y2} ≥ ${R2}`, v: 'outside the circle' },
          { k: rel(y, '≥', abs(x)), v: `above the V (between the lines ${y} = ${x}, ${y} = −${x})` },
        ],
      },
      {
        t: 'p',
        html: 'For a <b>system</b>, the region is the intersection of these. Confirm with a test point.',
      },
      {
        t: 'p',
        html: `<b>Composite region (ceiling switches at ${rel(x, '=', s)}):</b>`,
      },
      {
        t: 'formula',
        kicker: 'Composite region',
        main: `${A} = ${INT(a, s)}[top<sub>1</sub> − bottom]${DX}<br>+ ${INT(s, b)}[top<sub>2</sub> − bottom]${DX}`,
        legend: [`${s} = the switch point of the ceiling`, 'top<sub>1</sub>, top<sub>2</sub> = the ceilings before and after it', 'bottom = the floor of the region (the same on both slabs)'],
        note: null,
      },
      {
        t: 'table',
        title: 'Symmetry catalogue (integrate the small piece, multiply)',
        head: ['Symmetry', 'Test', 'Multiplier'],
        rows: [
          [`about ${y}-axis`, `${x} → −${x} leaves region unchanged`, '2× right half'],
          [`about ${x}-axis`, `${y} → −${y} unchanged`, '2× upper half'],
          ['about origin', `(${x},${NB}${y}) → (−${x},${NB}−${y}) unchanged`, '2× one half'],
          [`four-fold (e.g. ${abs(x)} + ${abs(y)} ≤ ${a})`, 'unchanged in all quadrants', '4× first-quadrant'],
        ],
      },

      { t: 'part', title: 'Key procedures and a theorem' },
      {
        t: 'proc',
        title: 'Procedure A: area under a modulus / piecewise curve',
        steps: [
          'Set the inside of each modulus to zero to locate the <b>corners</b>.',
          `On each sub-interval, replace the modulus by +${f} or −${f} according to its sign there.`,
          'Integrate each piece and add.',
          'Use symmetry to shorten the work if the picture is symmetric.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: area of a region from inequalities',
        steps: [
          '<b>Decode</b> each inequality into “which side” (the table in the Key definitions and properties part).',
          '<b>Sketch</b> the boundary curves and shade the overlap.',
          'Find the <b>intersection points</b> of the boundaries: these are your limits.',
          'Read off the genuine top and bottom (or right and left) boundary of the shaded region and integrate top − bottom, splitting if a boundary switches.',
          '<b>Test a point</b> to confirm you shaded the correct side.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C: composite region',
        steps: [
          'Find where the upper (or lower) boundary <b>switches</b> by solving the two candidate boundaries equal to each other.',
          'Split the range at each switch point.',
          'On each slab use the boundary that is actually extreme there (test a sample point).',
          `Sum the slabs. A triangle bounded by three lines is the simplest composite region: split at the ${x}-coordinate of its middle vertex (the one between the other two), where the top or bottom edge switches.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Theorem (the diamond area).</b> The region ${abs(x)} + ${abs(y)} ≤ ${a} (with ${rel(a, '>', '0')}) has area 2${A2}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> The region is symmetric in all four quadrants (replacing ${x} → −${x} or ${y} → −${y} leaves ${abs(x)} + ${abs(y)} ≤ ${a} unchanged), so its area is 4× the first-quadrant part. In the first quadrant ${abs(x)} = ${x} and ${abs(y)} = ${y}, so the condition becomes ${x} + ${y} ≤ ${a} with ${x},${NB}${y} ≥ 0: a right triangle with both legs of length ${a}:<br>${A} = 4 × (${HALF}${a} · ${a}) = 4 · ${fr(A2, '2')} = 2${A2}. ■`,
      },
      {
        t: 'p',
        html: `The same argument on ${fr(abs(x), p)} + ${fr(abs(y), q)} ≤ 1 gives a first-quadrant triangle of legs ${p} and ${q}, hence total area 4 · ${HALF}${I('pq')} = 2${I('pq')}.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the area of the region bounded by ${y} = ${abs(x)}, the ${x}-axis, and the lines ${rel(x, '=', '−2')} and ${rel(x, '=', '3')}.`,
        steps: [
          `The corner of ${y} = ${abs(x)} is at ${rel(x, '=', '0')}, so split there. On [−2,${NB}0], ${abs(x)} = −${x}; on [0,${NB}3], ${abs(x)} = ${x}:<br>${A} = ${INT('−2', '0')}(−${x})${DX} + ${INT('0', '3')}${x}${DX}<br>= ${EV(`−${fr(X2, '2')}`, '−2', '0')} + ${EV(fr(X2, '2'), '0', '3')}<br>= (0 − (−2)) + ${fr('9', '2')} = 2 + ${fr('9', '2')}`,
        ],
        ans: `Area = ${fr('13', '2')} square units`,
      },
      {
        t: 'ex',
        tag: 'Conceptual Trap / CUET–JEE Main Speed Trap',
        q: `Find the area of the region ${abs(x)} + ${abs(y)} ≤ 2.`,
        steps: [
          `<b>The trap:</b> students either try to set up a single messy integral with moduli still inside, or they recognise it as a square but take the half-diagonal 2 as its side and get 2<sup>2</sup> = 4 (the side is 2√2). The region is a square (a tilted diamond) with vertices (2,${NB}0), (0,${NB}2), (−2,${NB}0), (0,${NB}−2).`,
          `<b>The clean way: symmetry.</b> By the diamond theorem with ${rel(a, '=', '2')}:<br>${A} = 2${A2} = 2(2)<sup>2</sup> = 8.`,
          `(Quick check: the diagonals are each of length 4, and a square’s area is ${HALF}${d}<sub>1</sub>${d}<sub>2</sub> = ${HALF} · 4 · 4 = 8. ✓)`,
        ],
        ans: 'Area = 8 square units',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: multi-concept',
        q: `Find the area of the region {(${x},${NB}${y}) ∶ ${rel(y, '≥', X2)}, ${rel(y, '≤', `${x} + 2`)}}.`,
        steps: [
          `<b>Decode:</b> ${rel(y, '≥', X2)} is above the parabola; ${rel(y, '≤', `${x} + 2`)} is below the line. The region is the lens between them, with the <b>line on top</b> and the <b>parabola on the bottom</b>.`,
          `<b>Limits (intersections):</b> ${X2} = ${x} + 2 ⇒ ${X2} − ${x} − 2 = 0<br>⇒ (${x} − 2)(${x} + 1) = 0 ⇒ ${x} = −1, 2.`,
          `${A} = ${INT('−1', '2')}[(${x} + 2) − ${X2}]${DX}<br>= ${EV(`${fr(X2, '2')} + 2${x} − ${fr(X3, '3')}`, '−1', '2')}.`,
          `At ${rel(x, '=', '2')}: 2 + 4 − ${fr('8', '3')} = 6 − ${fr('8', '3')} = ${fr('10', '3')}.<br><br>At ${rel(x, '=', '−1')}: ${HALF} − 2 + ${fr('1', '3')} = −${fr('7', '6')}.`,
          `${A} = ${fr('10', '3')} − (−${fr('7', '6')}) = ${fr('20', '6')} + ${fr('7', '6')} = ${fr('27', '6')}`,
        ],
        ans: `Area = ${fr('9', '2')} square units`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the area of the region {(${x},${NB}${y}) ∶ ${rel(y, '≥', abs(x))}, ${X2} + ${Y2} ≤ 2}.`,
        steps: [
          `<b>Decode:</b> ${rel(y, '≥', abs(x))} is the wedge above both lines ${y} = ${x} and ${y} = −${x}; ${X2} + ${Y2} ≤ 2 is inside the circle of radius √2. The region is the slice of the disc sitting above the V.`,
          `<b>Intersections:</b> on ${y} = ${abs(x)}, the circle gives ${X2} + ${X2} = 2 ⇒ ${X2} = 1 ⇒ ${rel(x, '=', '±1')}, ${rel(y, '=', '1')}. The region is symmetric about the ${y}-axis, so take the right half (0 ≤ ${x} ≤ 1, bottom = ${y} = ${x}, top = circle ${y} = √(2 − ${X2})) and double:<br>${A} = 2${INT('0', '1')}[√(2 − ${X2}) − ${x}]${DX}.`,
          `Using ${WORKHORSE.replace(` + ${C}`, '')} with ${A2} = 2:<br>${INT('0', '1')}√(2 − ${X2})${DX} = ${EV(`${fr(x, '2')}√(2 − ${X2}) + ${ASIN(fr(x, '√2'))}`, '0', '1')}<br>= ${HALF} · 1 + ${ASIN(fr('1', '√2'))} = ${HALF} + ${PI4}.`,
          `And ${INT('0', '1')}${x}${DX} = ${HALF}, so<br>${A} = 2[(${HALF} + ${PI4}) − ${HALF}] = 2 · ${PI4} = ${PI2}.`,
          `<b>Check:</b> the wedge ${rel(y, '≥', abs(x))} subtends a right angle (90°) at the centre, so it is a quarter of the disc: ${fr('1', '4')} · π(√2)<sup>2</sup> = ${fr('1', '4')} · 2π = ${PI2}. ✓ The integration and the geometry agree.`,
        ],
        ans: `Area = ${PI2} square units`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the area bounded by ${y} = ${abs(`${x} − 2`)}, the ${x}-axis, and the lines ${rel(x, '=', '0')}, ${rel(x, '=', '4')}.`,
            a: '4',
          },
          { q: `<b>[CUET / JEE Main]</b> Find the area of the region ${abs(x)} + ${abs(y)} ≤ 3.`, a: '18' },
          {
            q: `<b>[JEE Main]</b> Find the area of the region {(${x},${NB}${y}) ∶ ${rel(y, '≥', X2)}, ${rel(y, '≤', '4')}}.`,
            a: fr('32', '3'),
          },
          { q: `<b>[JEE Main]</b> Find the area of the region enclosed by ${y} = 2 − ${X2} and ${y} = ${abs(x)}.`, a: fr('7', '3') },
          {
            q: `<b>[JEE Advanced]</b> Find the area of the region {(${x},${NB}${y}) ∶ ${rel(y, '≥', abs(x))}, ${X2} + ${Y2} ≤ 8}.`,
            a: '2π',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The area of the region ${abs(x)} + ${abs(y)} ≤ 4 is:`,
        opts: [
          {
            label: '16',
            nudge: '<b>(a)</b> 16 treats the diamond as a square of side 4 (4<sup>2</sup>), but 4 is the half-diagonal, not the side.',
          },
          { label: '32', nudge: null },
          { label: '8', nudge: `<b>(c)</b> 8 computes only one of the four triangles (${HALF} · 4 · 4).` },
          {
            label: '64',
            nudge: `<b>(d)</b> 64 squares the full diagonal (2${a})<sup>2</sup> = 8<sup>2</sup>, ignoring the ${HALF} for the tilt.`,
          },
        ],
        correct: 1,
        solution: `Diamond area = 2${A2} = 2(4)<sup>2</sup> = 32.`,
      },
      {
        t: 'mcq',
        q: `The area of the region {(${x},${NB}${y}) ∶ 0 ≤ ${y} ≤ 4 − ${X2}} is:`,
        opts: [
          { label: fr('32', '3'), nudge: null },
          { label: fr('16', '3'), nudge: '<b>(b)</b> integrates only 0 to 2 and forgets to double for symmetry.' },
          { label: fr('8', '3'), nudge: `<b>(c)</b> ${fr('8', '3')} is ${INT('0', '2')}${X2}${DX}: it integrates ${X2} instead of 4 − ${X2} (wrong integrand).` },
          { label: '16', nudge: '<b>(d)</b> treats the region as a rectangle 4 × (width 4), ignoring the curve.' },
        ],
        correct: 0,
        solution: `The parabola meets ${rel(y, '=', '0')} at ${rel(x, '=', '±2')};<br>${A} = ${INT('−2', '2')}(4 − ${X2})${DX} = 2${INT('0', '2')}(4 − ${X2})${DX}<br>= 2(8 − ${fr('8', '3')}) = ${fr('32', '3')}.`,
      },
      {
        t: 'mcq',
        q: `The area bounded by ${y} = ${abs(x)} and the ${x}-axis between ${rel(x, '=', '−1')} and ${rel(x, '=', '1')} is:`,
        opts: [
          { label: '1', nudge: null },
          {
            label: HALF,
            nudge: `<b>(b)</b> computes only the right triangle ${INT('0', '1')}${x}${DX} = ${HALF} and forgets the left half.`,
          },
          { label: '2', nudge: `<b>(c)</b> double-counts or uses base × height = 2 · 1 without the ${HALF}.` },
          {
            label: fr('1', '3'),
            nudge: `<b>(d)</b> integrates ${X2} instead of ${abs(x)}, and only over [0,${NB}1] (giving ${fr('1', '3')}).`,
          },
        ],
        correct: 0,
        solution: `By symmetry ${A} = 2${INT('0', '1')}${x}${DX} = 2 · ${HALF} = 1.`,
      },
      {
        t: 'mcq',
        q: `The area of the region {(${x},${NB}${y}) ∶ ${rel(y, '≥', abs(x))}, ${X2} + ${Y2} ≤ 8} is:`,
        opts: [
          { label: '2π', nudge: null },
          { label: 'π', nudge: '<b>(b)</b> halves the sector (uses 45° instead of 90°).' },
          {
            label: '4π',
            nudge: `<b>(c)</b> forgets the wedge restriction and takes the whole semicircle ${HALF} · 8π.`,
          },
          { label: PI2, nudge: '<b>(d)</b> uses radius √2 (from a different problem) rather than √8.' },
        ],
        correct: 0,
        solution: `The wedge ${rel(y, '≥', abs(x))} is a 90° sector of a disc of radius √8:<br>${fr('1', '4')}π(√8)<sup>2</sup> = ${fr('1', '4')} · 8π = 2π.`,
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Missing a corner of a modulus curve.</b> Every modulus contributes a kink; set each inside-expression to zero and split there. A nested modulus like ${abs(`${abs(x)} − 1`)} has three corners (${x} = −1, 0, 1).`,
          '<b>Shading the wrong side of an inequality.</b> Translate ≤ / ≥ carefully and confirm with a test point (the origin is easiest when it is not on a boundary).',
          '<b>Forgetting to split a composite region.</b> When the top boundary switches, one integral cannot cover both slabs.',
          '<b>Assuming symmetry that isn’t there, or forgetting to multiply back.</b> Symmetry is a gift only after you have verified it.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (decode before you integrate):</b> Spend the first 30 seconds turning the problem into a labelled sketch: corners marked, sides shaded, switch points found. Once the picture is right, the integral is the easy part. Almost every lost mark in this topic is a decoding error, not an integration error.',
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (geometry as a free check):</b> Diamonds, wedges, sectors, and triangles have elementary-geometry areas. Compute the answer both by integration and by the shape formula; if they disagree, you mis-decoded the boundary.',
      },

      { t: 'part', title: 'Chapter master cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Core formulas</b>', note: '' },
          { f: `Curve & ${x}-axis: ${A} = ${INT(a, b)}${y}${DX}`, note: `Curve & ${y}-axis: ${A} = ${INT(c, d)}${x}${DY}` },
          { f: `Below / crossing axis: ${A} = ${INT(a, b)}${ABSFX}${DX}`, note: '(split at roots)' },
          {
            f: `Between two curves: ${A} = ${INT(a, b)}(top − bottom)${DX}`,
            note: `= ${INT(c, d)}(right − left)${DY}`,
          },
          { f: `Curves that cross: ${A} = ${INT(a, b)}${abs(`${f} − ${g}`)}${DX}`, note: '(split at the swap)' },
          { f: '<b>Standard results</b>', note: '' },
          { f: `Circle ${X2} + ${Y2} = ${A2}: π${A2}`, note: `Ellipse ${fr(X2, A2)} + ${fr(Y2, sq(b))} = 1: π${I('ab')}` },
          {
            f: `Two parabolas ${Y2} = 4${AX}, ${X2} = 4${AY}: ${fr(`16${A2}`, '3')}`,
            note: `Diamond ${abs(x)} + ${abs(y)} ≤ ${a}: 2${A2}`,
          },
          { f: `Workhorse integral: ${WORKHORSE}`, note: '' },
          { f: '<b>Method-selection guide: which tool for which problem</b>', note: '' },
          { f: 'One curve + an axis → <b>Topic 01</b>', note: `(∫${y}${DX} or ∫${x}${DY}).` },
          { f: 'Two named curves, or curve + line → <b>Topic 02</b>', note: '(top − bottom; find intersections).' },
          {
            f: 'Modulus / inequality / “region {…}” / boundary that switches → <b>Topic 03</b>',
            note: '(decode → sketch → split → integrate).',
          },
          {
            f: '<b>The universal four-step routine</b>',
            note: `<b>Sketch → Limits (intersections/corners) → Pick variable (d${x} vs d${y}) → Integrate (with ${abs('·')}, splitting, and symmetry).</b>`,
          },
        ],
        aids: [
          '“<b>Top minus bottom, every strip, every time.</b>”',
          `“<b>Sideways curves → integrate in ${y}.</b>”`,
          '“<b>Decode the boundary; the calculus is the easy part.</b>”',
        ],
      },
    ],
  },
];
