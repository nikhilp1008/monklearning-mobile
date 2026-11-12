import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Topic 07: Real Quadratic Equations: Roots, Signs and Location,
 * pp. 379–396 of the Class 11 Mathematics Master Reference (October 2026
 * edition), word for word: the supplement's Subtopic 07. The supplement's
 * heading "Chapter 4: Complex Numbers and Quadratic Equations — Supplement"
 * (p. 379) is not copied; the topic's cheat sheet ends on p. 396, and the
 * "Additional Topics" part starts on p. 397. The topic opens with its "Exam
 * Relevance:" box as a part of its own (with the paragraph printed after the
 * box, before Section 1), then is split at its Sections 1 to 8; the "CHEAT
 * SHEET BOX" is the part "Cheat sheet".
 * Figure 4.7 (caption p. 381, drawn p. 382) stands after the Extremum card,
 * where the book prints its caption; Figure 4.8 (caption p. 383, drawn p. 384)
 * after "Two remarks that decide marks", likewise. Both are redrawn in
 * lib/diagrams/mathematics-11-04.ts. The topic has no unnumbered drawing.
 * The location-of-roots table (p. 383) is set as one formula card per row.
 * Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const sb = (l: string, n: number) => `<i>${l}</i><sub>${n}</sub>`;
const a1 = sb('a', 1);
const a2 = sb('a', 2);
const b1 = sb('b', 1);
const b2 = sb('b', 2);
const c1 = sb('c', 1);
const c2 = sb('c', 2);
const k1 = sb('k', 1);
const k2 = sb('k', 2);
const f1 = sb('f', 1);
const f2 = sb('f', 2);
const CA = `${c1}${a2} − ${c2}${a1}`;
const AB = `${a1}${b2} − ${a2}${b1}`;
const BC = `${b1}${c2} − ${b2}${c1}`;
const B2A = fr('<i>b</i>', '2<i>a</i>');
const D4A = fr('<i>D</i>', '4<i>a</i>');
const VX = `−${B2A}`;
const VY = `−${D4A}`;
const QUAD = '<i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i>';
const SQ = `<i>a</i>(<i>x</i> + ${B2A})<sup>2</sup>`;
const AF = '<i>af</i>(<i>k</i>)';
const AFK1 = `<i>af</i>(${k1})`;
const AFK2 = `<i>af</i>(${k2})`;
const ABAR = '<i>α</i>̅';
const RATIOS = `${fr(a1, a2)} = ${fr(b1, b2)} = ${fr(c1, c2)}`;
const WIDTH = fr('√<i>D</i>', '|<i>a</i>|');
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';
const AND = ' <b>and</b> ';

const L_D = '<i>D</i> = the discriminant (<i>b</i><sup>2</sup> − 4<i>ac</i>)';
const L_A = '<i>a</i> = the leading coefficient (<i>a</i> ≠ 0)';
const L_K = '<i>k</i> = the signpost (a real number)';
const L_V = `${VX} = the <i>x</i>-coordinate of the vertex (the axis of symmetry)`;
const L_ROOTS = '<i>α</i>, <i>β</i> = the roots (<i>α</i> ≤ <i>β</i>)';
const L_K12 = `${k1}, ${k2} = the ends of the interval (${k1} < ${k2})`;
const L_F = '<i>f</i>(<i>x</i>) = the quadratic <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i>';
const L_C1 = `${a1}, ${b1}, ${c1} = the coefficients of ${f1}`;
const L_C2 = `${a2}, ${b2}, ${c2} = the coefficients of ${f2}`;
const L_F12 = `${f1}, ${f2} = the two quadratics (${a1}, ${a2} ≠ 0)`;
const L_AB = `${AB} = a quantity that must be non-zero (${AB} ≠ 0)`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 07 · pp. 379–396 ────────────────
  {
    n: '07',
    title: 'Real Quadratic Equations: Roots, Signs and Location',
    kalam: 'Location of roots is a question about a signpost, not about the roots.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `CBSE Boards test the real-coefficient side of this material at 2–4 marks: nature of roots from the discriminant, the maximum or minimum value of a quadratic expression, and simple quadratic inequalities ${ESTIMATE}. JEE Main draws two of its most reliable single-question patterns from here ${ESTIMATE}: the common root of two quadratics, and “find all values of the parameter for which ${QUAD} keeps one sign for every real <i>x</i>.” JEE Advanced pushes into location of roots (placing both roots, or exactly one root, relative to a number <i>k</i> or an interval (${k1}, ${k2})), usually with a parameter to be solved for, and usually with one boundary case designed to be missed ${ESTIMATE}. NEET does not test mathematics.`,
      },
      {
        t: 'p',
        html: `Topic 04 handled the quadratic when the discriminant sends the roots off the real line. This topic handles the far more heavily examined case where they stay on it ${ESTIMATE}. Everything here assumes <i>a</i>, <i>b</i>, <i>c</i> ∈ ℝ and <i>a</i> ≠ 0 unless stated otherwise, and everything here is built on two objects you already own from Topic 04: the discriminant <i>D</i> = <i>b</i><sup>2</sup> − 4<i>ac</i> and Vieta’s relations <i>α</i> + <i>β</i> = −${fr('<i>b</i>', '<i>a</i>')}, <i>αβ</i> = ${fr('<i>c</i>', '<i>a</i>')}.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `<b>Stop solving. Start looking at the graph.</b> Topic 04 treated ${QUAD} = 0 as something to be solved. The whole of this topic rests on refusing to solve it. Instead you look at the curve <i>y</i> = ${QUAD}, a parabola, and read the answer off its shape and position.`,
      },
      {
        t: 'p',
        html: `Think about it this way. Picture a ball hit high over the Wankhede outfield. Its flight path is a parabola opening downward. Three questions a fielder cares about are exactly the three questions this topic answers. Does the ball ever touch the ground? That is the sign question: whether ${QUAD} ever reaches zero, and it is settled entirely by the discriminant. How high does it get, and when? That is the extremum question, settled by the vertex. Does it land inside the boundary rope or outside? That is the location question: not merely whether the roots are real, but <b>where on the number line they sit</b>.`,
      },
      {
        t: 'p',
        html: `<b>Whether a quadratic keeps one sign is decided by the discriminant, not by the constant term.</b> Students look at <i>x</i><sup>2</sup> − 4<i>x</i> + 7, see the +7, and conclude it is positive. That reasoning is accidental. The correct reasoning is: <i>D</i> = 16 − 28 = −12 < 0, so the parabola never crosses the <i>x</i>-axis; having no crossing, it can never change sign; so it keeps forever the sign it has far out to the right, which is the sign of <i>a</i>. <b>A quadratic with <i>D</i> < 0 takes the sign of <i>a</i> at every real <i>x</i>, with no exceptions.</b> That single sentence is the entire sign theory. Where it fails is instructive: if <i>D</i> ≥ 0 the parabola touches or crosses the axis, and the “one sign forever” claim collapses at once.`,
      },
      {
        t: 'p',
        html: `<b>Two bus routes, one shared stop.</b> Route 1 and Route 2 run across Bengaluru on different paths. Asking whether they share a stop is asking for a common root of two equations. And here is the practical trick: if a stop is on both routes, then it is also on the “difference” of the two routes, the object you get by cancelling everything the routes have in common. Subtracting one quadratic from a suitable multiple of the other kills the <i>x</i><sup>2</sup> term and leaves a linear equation, which hands you the shared stop directly. <b>The common root, if it exists, is the root of the linear equation you get by eliminating <i>x</i><sup>2</sup>.</b> The caution is that the linear equation is a consequence, not a guarantee: it produces a candidate, and the candidate must be substituted back.`,
      },
      {
        t: 'p',
        html: `<b>Location of roots is a question about a signpost, not about the roots.</b> Suppose a Mumbai local has two scheduled halts and you want to know whether both lie beyond Dadar. You do not need the halt times. You need three readings taken at Dadar and at the vertex: are the halts real at all (<i>D</i> ≥ 0), is Dadar outside the pair (${AF} > 0), and does the pair sit to the right of Dadar (vertex ${VX} > <i>k</i>). <b>Every “both roots” location result in this topic is these same three readings in a different arrangement</b>, and the reason all three are needed is that any two of them can be satisfied by a configuration you did not want.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'The vertex form',
        main: `For <i>f</i>(<i>x</i>) = ${QUAD} with <i>a</i>, <i>b</i>, <i>c</i> ∈ ℝ, <i>a</i> ≠ 0:<br><i>f</i>(<i>x</i>) = ${SQ} − ${D4A}<br><i>D</i> = <i>b</i><sup>2</sup> − 4<i>ac</i>`,
        legend: [
          L_F,
          L_A,
          '<i>D</i> = the discriminant (as defined in Topic 04)',
          `${VX} = the <i>x</i>-coordinate of the vertex (the axis of symmetry)`,
          `${VY} = the <i>y</i>-coordinate of the vertex (the extreme value of <i>f</i>)`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• <i>D</i>: the discriminant, as defined in Topic 04.<br>• ${VX}: the <i>x</i>-coordinate of the vertex (the axis of symmetry).<br>• ${VY} = ${fr('4<i>ac</i> − <i>b</i><sup>2</sup>', '4<i>a</i>')}: the <i>y</i>-coordinate of the vertex, i.e. the extreme value of <i>f</i>.`,
      },
      {
        t: 'p',
        html: 'Validity: <i>a</i> ≠ 0 throughout. If a parameter can make <i>a</i> = 0, that case is not covered by any formula in this section and must be examined separately as a linear expression.',
      },
      { t: 'p', html: '<b>Sign and range</b>' },
      {
        t: 'table',
        title: null,
        head: ['Condition on <i>a</i> and <i>D</i>', `Behaviour of <i>f</i>(<i>x</i>) = ${QUAD}`, 'Range of <i>f</i>'],
        rows: [
          ['<i>a</i> > 0, <i>D</i> < 0', '<i>f</i>(<i>x</i>) > 0 for every real <i>x</i>', `[${VY}, ∞), and ${VY} > 0`],
          ['<i>a</i> > 0, <i>D</i> = 0', `<i>f</i>(<i>x</i>) ≥ 0 for every real <i>x</i>, with equality only at <i>x</i> = ${VX}`, '[0, ∞)'],
          ['<i>a</i> > 0, <i>D</i> > 0', '<i>f</i> < 0 strictly between the roots, <i>f</i> > 0 strictly outside them', `[${VY}, ∞), and ${VY} < 0`],
          ['<i>a</i> < 0, <i>D</i> < 0', '<i>f</i>(<i>x</i>) < 0 for every real <i>x</i>', `(−∞, ${VY}], and ${VY} < 0`],
          ['<i>a</i> < 0, <i>D</i> = 0', `<i>f</i>(<i>x</i>) ≤ 0 for every real <i>x</i>, with equality only at <i>x</i> = ${VX}`, '(−∞, 0]'],
          ['<i>a</i> < 0, <i>D</i> > 0', '<i>f</i> > 0 strictly between the roots, <i>f</i> < 0 strictly outside them', `(−∞, ${VY}], and ${VY} > 0`],
        ],
      },
      { t: 'p', html: 'The four parameter conditions you will be asked for in the exam, each an “if and only if”:' },
      {
        t: 'formula',
        kicker: 'Sign for all <i>x</i>',
        main: '<i>f</i>(<i>x</i>) > 0 ∀<i>x</i> ∈ ℝ ⟺ <i>a</i> > 0 and <i>D</i> < 0<br><i>f</i>(<i>x</i>) ≥ 0 ∀<i>x</i> ∈ ℝ ⟺ <i>a</i> > 0 and <i>D</i> ≤ 0<br><i>f</i>(<i>x</i>) < 0 ∀<i>x</i> ∈ ℝ ⟺ <i>a</i> < 0 and <i>D</i> < 0<br><i>f</i>(<i>x</i>) ≤ 0 ∀<i>x</i> ∈ ℝ ⟺ <i>a</i> < 0 and <i>D</i> ≤ 0',
        legend: [L_F, L_A, L_D],
        note: null,
      },
      {
        t: 'p',
        html: 'And the compact version: <b><i>f</i>(<i>x</i>) has the same sign as <i>a</i> for every real <i>x</i> if and only if <i>D</i> < 0.</b>',
      },
      {
        t: 'formula',
        kicker: 'Extremum',
        main: `If <i>a</i> > 0, <i>f</i> attains a minimum value ${VY} at <i>x</i> = ${VX} and has no maximum.<br>If <i>a</i> < 0, <i>f</i> attains a maximum value ${VY} at <i>x</i> = ${VX} and has no minimum.`,
        legend: [L_F, L_A, L_D],
        note: null,
      },
      { t: 'fig', id: 'm11-04-fig-4.7' },
      { t: 'p', html: '<b>Sign of a quadratic at a point: the master identity</b>' },
      {
        t: 'p',
        html: 'If <i>α</i>, <i>β</i> are the roots of <i>f</i>(<i>x</i>) = <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i>, then <i>f</i>(<i>x</i>) = <i>a</i>(<i>x</i> − <i>α</i>)(<i>x</i> − <i>β</i>), and therefore for any real <i>k</i>',
      },
      {
        t: 'formula',
        kicker: 'The master identity',
        main: `${AF} = <i>a</i><sup>2</sup>(<i>k</i> − <i>α</i>)(<i>k</i> − <i>β</i>)`,
        legend: [L_F, L_A, '<i>k</i> = any real number', '<i>α</i>, <i>β</i> = the roots of <i>f</i>'],
        note: null,
      },
      {
        t: 'p',
        html: `Since <i>a</i><sup>2</sup> > 0, the sign of ${AF} is exactly the sign of (<i>k</i> − <i>α</i>)(<i>k</i> − <i>β</i>). Hence, <b>when the roots are real</b>:<br>• ${AF} > 0 ⟺ <i>k</i> lies strictly outside the closed interval joining the roots;<br>• ${AF} < 0 ⟺ <i>k</i> lies strictly between the roots;<br>• ${AF} = 0 ⟺ <i>k</i> is itself a root.`,
      },
      {
        t: 'p',
        html: `Critical validity note: if <i>D</i> < 0 the roots are a conjugate pair <i>α</i>, ${ABAR}, and then ${AF} = <i>a</i><sup>2</sup>|<i>k</i> − <i>α</i>|<sup>2</sup> > 0 for every real <i>k</i>. So ${AF} > 0 carries no information about position unless you have separately guaranteed <i>D</i> ≥ 0. This is why <i>D</i> ≥ 0 appears as an explicit condition in every “both roots” result below.`,
      },
      {
        t: 'p',
        html: `<b>Location of roots (real coefficients, <i>a</i> ≠ 0, <i>α</i>, <i>β</i> the roots, <i>k</i>, ${k1}, ${k2} ∈ ℝ with ${k1} < ${k2})</b>`,
      },
      {
        t: 'formula',
        kicker: 'Both roots > <i>k</i>',
        main: `<i>D</i> ≥ 0${AND}${AF} > 0${AND}${VX} > <i>k</i>`,
        legend: [L_D, L_A, L_K, L_V],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Both roots ≥ <i>k</i>',
        main: `<i>D</i> ≥ 0${AND}${AF} ≥ 0${AND}${VX} ≥ <i>k</i>`,
        legend: [L_D, L_A, L_K, L_V],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Both roots < <i>k</i>',
        main: `<i>D</i> ≥ 0${AND}${AF} > 0${AND}${VX} < <i>k</i>`,
        legend: [L_D, L_A, L_K, L_V],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Both roots ≤ <i>k</i>',
        main: `<i>D</i> ≥ 0${AND}${AF} ≥ 0${AND}${VX} ≤ <i>k</i>`,
        legend: [L_D, L_A, L_K, L_V],
        note: null,
      },
      {
        t: 'formula',
        kicker: '<i>k</i> strictly between the roots (<i>α</i> < <i>k</i> < <i>β</i>)',
        main: `${AF} < 0 alone<br>(this already forces <i>D</i> > 0)`,
        legend: [L_A, L_K, L_ROOTS, L_D],
        note: null,
      },
      {
        t: 'formula',
        kicker: `Both roots in (${k1}, ${k2})`,
        main: `<i>D</i> ≥ 0${AND}${AFK1} > 0${AND}${AFK2} > 0${AND}<br>${k1} < ${VX} < ${k2}`,
        legend: [L_D, L_A, L_K12, L_V],
        note: null,
      },
      {
        t: 'formula',
        kicker: `Exactly one root in (${k1}, ${k2})`,
        main: `<i>f</i>(${k1}) <i>f</i>(${k2}) < 0 (sufficient; the cases <i>f</i>(${k1}) = 0 or <i>f</i>(${k2}) = 0 must be tested separately)`,
        legend: [L_F, L_K12],
        note: null,
      },
      {
        t: 'formula',
        kicker: `Roots straddle the interval (<i>α</i> < ${k1} < ${k2} < <i>β</i>)`,
        main: `${AFK1} < 0${AND}${AFK2} < 0`,
        legend: [L_A, L_K12, L_ROOTS],
        note: null,
      },
      {
        t: 'p',
        html: `Two remarks that decide marks. First, the strictness matches: “both roots greater than <i>k</i>” allows a repeated root greater than <i>k</i>, which is why <i>D</i> ≥ 0 and not <i>D</i> > 0. Second, the “<i>k</i> between the roots” line genuinely needs only one condition: ${AF} < 0 is impossible unless the roots are real and distinct with <i>k</i> between them, so writing <i>D</i> > 0 alongside it is harmless but redundant.`,
      },
      { t: 'fig', id: 'm11-04-fig-4.8' },
      { t: 'p', html: '<b>Common roots of two quadratics</b>' },
      {
        t: 'p',
        html: `Let ${f1}(<i>x</i>) = ${a1}<i>x</i><sup>2</sup> + ${b1}<i>x</i> + ${c1} = 0 and ${f2}(<i>x</i>) = ${a2}<i>x</i><sup>2</sup> + ${b2}<i>x</i> + ${c2} = 0 with ${a1}, ${a2} ≠ 0.`,
      },
      {
        t: 'p',
        html: `<b>Exactly one common root.</b> Provided ${AB} ≠ 0, the two equations have a common root if and only if`,
      },
      {
        t: 'formula',
        kicker: 'Common-root condition',
        main: `(${CA})<sup>2</sup><br>= (${AB})(${BC})`,
        legend: [L_F12, L_C1, L_C2, L_AB],
        note: null,
      },
      { t: 'p', html: 'and that common root is then' },
      {
        t: 'formula',
        kicker: 'The common root',
        main: `<i>α</i> = ${fr(CA, AB)} (${AB} ≠ 0)`,
        legend: ['<i>α</i> = the common root', L_F12, L_C1, L_C2],
        note: null,
      },
      {
        t: 'p',
        html: `An equivalent expression, usable when ${CA} ≠ 0, is <i>α</i> = ${fr(BC, CA)}.`,
      },
      {
        t: 'p',
        html: '<b>Both roots common.</b> The two equations have both roots in common if and only if their coefficient triples are proportional:',
      },
      {
        t: 'formula',
        kicker: 'Both roots common',
        main: `${RATIOS}<br>or ${a1}${b2} − ${a2}${b1} = ${b1}${c2} − ${b2}${c1} = ${c1}${a2} − ${c2}${a1} = 0`,
        legend: [L_F12, L_C1, L_C2],
        note: null,
      },
      {
        t: 'p',
        html: `which is safest written in the determinant form valid even when some coefficient vanishes:<br>${AB} = 0,<br>${BC} = 0,<br>${CA} = 0.`,
      },
      {
        t: 'p',
        html: `<b>A result JEE Main leans on.</b> If ${f1} and ${f2} both have <b>real</b> coefficients and share a <b>non-real</b> root, then they share both roots, and hence their coefficients are proportional. Reason: by the conjugate-root theorem of Topic 04, the conjugate of the shared root is a root of each equation as well, so both roots of each are the same pair.`,
      },
      { t: 'p', html: '<b>Nature of roots refined: rational versus irrational</b>' },
      {
        t: 'p',
        html: 'Topic 04 already gives the discriminant table for real coefficients (<i>D</i> > 0 real distinct, <i>D</i> = 0 real equal, <i>D</i> < 0 non-real conjugate pair). When the coefficients are additionally <b>rational</b>, that table subdivides:',
      },
      {
        t: 'table',
        title: null,
        head: ['<i>D</i> = <i>b</i><sup>2</sup> − 4<i>ac</i> (with <i>a</i>, <i>b</i>, <i>c</i> ∈ ℚ)', 'Roots'],
        rows: [
          ['<i>D</i> > 0 and a perfect square of a rational', 'real, distinct and <b>rational</b>'],
          ['<i>D</i> > 0 and not a perfect square', 'real, distinct and <b>irrational</b>, occurring as a conjugate surd pair <i>p</i> ± √<i>q</i>'],
          ['<i>D</i> = 0', `real, equal and rational: <i>x</i> = ${VX}`],
          ['<i>D</i> < 0', 'non-real complex conjugate pair (Topic 04)'],
        ],
      },
      {
        t: 'p',
        html: '<b>Surd conjugate-root theorem.</b> If <i>a</i>, <i>b</i>, <i>c</i> ∈ ℚ and <i>p</i> + √<i>q</i> (with <i>p</i>, <i>q</i> ∈ ℚ, <i>q</i> > 0, √<i>q</i> irrational) is a root of <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0, then <i>p</i> − √<i>q</i> is also a root. This is the exact analogue of Theorem 2 of Topic 04, with “rational coefficients” replacing “real coefficients”; it fails the moment an irrational coefficient is allowed.',
      },
      { t: 'p', html: '<b>Symmetric functions of the roots</b>' },
      {
        t: 'p',
        html: 'Vieta’s relations and the “form a quadratic from its roots” formula <i>x</i><sup>2</sup> − (<i>α</i> + <i>β</i>)<i>x</i> + <i>αβ</i> = 0 are already established in Topic 04 and are not restated here. What that topic does not do is put them to work on other expressions in <i>α</i>, <i>β</i>, and almost every symmetric expression in <i>α</i>, <i>β</i> reduces to the sum and product:',
      },
      {
        t: 'formula',
        kicker: 'Symmetric functions of the roots',
        main: `<i>α</i><sup>2</sup> + <i>β</i><sup>2</sup> = (<i>α</i> + <i>β</i>)<sup>2</sup> − 2<i>αβ</i><br>= ${fr('<i>b</i><sup>2</sup> − 2<i>ac</i>', '<i>a</i><sup>2</sup>')}<br>(<i>α</i> − <i>β</i>)<sup>2</sup> = (<i>α</i> + <i>β</i>)<sup>2</sup> − 4<i>αβ</i><br>= ${fr('<i>D</i>', '<i>a</i><sup>2</sup>')}<br>|<i>α</i> − <i>β</i>| = ${WIDTH} (<i>D</i> ≥ 0)<br><i>α</i><sup>3</sup> + <i>β</i><sup>3</sup> = (<i>α</i> + <i>β</i>)<sup>3</sup> − 3<i>αβ</i>(<i>α</i> + <i>β</i>)<br>= ${fr('3<i>abc</i> − <i>b</i><sup>3</sup>', '<i>a</i><sup>3</sup>')}<br>${fr('1', '<i>α</i>')} + ${fr('1', '<i>β</i>')} = ${fr('<i>α</i> + <i>β</i>', '<i>αβ</i>')} = −${fr('<i>b</i>', '<i>c</i>')} (<i>c</i> ≠ 0)<br>${fr('<i>α</i>', '<i>β</i>')} + ${fr('<i>β</i>', '<i>α</i>')} = ${fr('<i>α</i><sup>2</sup> + <i>β</i><sup>2</sup>', '<i>αβ</i>')} = ${fr('<i>b</i><sup>2</sup> − 2<i>ac</i>', '<i>ac</i>')} (<i>c</i> ≠ 0)`,
        legend: [
          '<i>α</i>, <i>β</i> = the roots of <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0',
          '<i>a</i>, <i>b</i>, <i>c</i> = the coefficients',
          L_D,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `The identity |<i>α</i> − <i>β</i>| = ${WIDTH} is the bridge between the discriminant and the width of the root pair, and it is the quickest route to problems that constrain how far apart the roots are.`,
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      {
        t: 'proc',
        title: 'Derivation: the vertex form, and everything it decides',
        steps: [
          `Start from <i>f</i>(<i>x</i>) = ${QUAD} and factor <i>a</i> out of the first two terms: <i>f</i>(<i>x</i>) = <i>a</i>(<i>x</i><sup>2</sup> + ${fr('<i>b</i>', '<i>a</i>')}<i>x</i>) + <i>c</i>. <b>Reason:</b> <i>a</i> ≠ 0, so the division is legal, and only the <i>x</i>-terms need completing.`,
          `Complete the square inside the bracket: <i>x</i><sup>2</sup> + ${fr('<i>b</i>', '<i>a</i>')}<i>x</i> = (<i>x</i> + ${B2A})<sup>2</sup> − ${fr('<i>b</i><sup>2</sup>', '4<i>a</i><sup>2</sup>')}. <b>Reason:</b> the same completing-the-square step that proves the quadratic formula in Theorem 1 of Topic 04.`,
          `Distribute <i>a</i> and combine the constants:<br><i>f</i>(<i>x</i>) = ${SQ} − ${fr('<i>b</i><sup>2</sup>', '4<i>a</i>')} + <i>c</i><br>= ${SQ} − ${fr('<i>b</i><sup>2</sup> − 4<i>ac</i>', '4<i>a</i>')}.<br><b>Reason:</b> −${fr('<i>b</i><sup>2</sup>', '4<i>a</i>')} + <i>c</i> = ${fr('−<i>b</i><sup>2</sup> + 4<i>ac</i>', '4<i>a</i>')}.`,
          `Hence <i>f</i>(<i>x</i>) = ${SQ} − ${D4A}. <b>Reason:</b> <i>D</i> = <i>b</i><sup>2</sup> − 4<i>ac</i> by definition.`,
          `Read off the consequences. The squared bracket is ≥ 0 always and equals 0 exactly at <i>x</i> = ${VX}. So if <i>a</i> > 0 the smallest value of <i>f</i> is ${VY}, attained there; if <i>a</i> < 0 the largest value of <i>f</i> is ${VY}, attained there. <b>Reason:</b> multiplying a non-negative quantity by a positive <i>a</i> preserves the ordering; by a negative <i>a</i> it reverses it.`,
          `Finally, if <i>D</i> < 0 then ${VY} has the same sign as <i>a</i>, and ${SQ} also has the sign of <i>a</i> or is zero, so <i>f</i>(<i>x</i>) has the sign of <i>a</i> for every real <i>x</i>. Conversely if <i>D</i> ≥ 0 the vertex value ${VY} is zero or opposite in sign to <i>a</i>, so <i>f</i> attains the value 0 or a value of the opposite sign. ■`,
        ],
      },
      {
        t: 'proc',
        title: 'Derivation: the common-root condition by cross-multiplication',
        steps: [
          `Suppose <i>α</i> satisfies both ${a1}<i>α</i><sup>2</sup> + ${b1}<i>α</i> + ${c1} = 0 and ${a2}<i>α</i><sup>2</sup> + ${b2}<i>α</i> + ${c2} = 0. <b>Reason:</b> this is the definition of a common root.`,
          `Treat these as two linear equations in the two unknowns <i>X</i> = <i>α</i><sup>2</sup> and <i>Y</i> = <i>α</i>: ${a1}<i>X</i> + ${b1}<i>Y</i> = −${c1} and ${a2}<i>X</i> + ${b2}<i>Y</i> = −${c2}. <b>Reason:</b> <i>α</i><sup>2</sup> and <i>α</i> enter linearly, which is the whole point of the manoeuvre.`,
          `Solve by determinants, assuming Δ = ${AB} ≠ 0: <i>X</i> = ${fr(BC, 'Δ')} and <i>Y</i> = ${fr(CA, 'Δ')}. <b>Reason:</b> Cramer’s rule on a 2 × 2 system with non-zero determinant.`,
          `But <i>X</i> and <i>Y</i> are not independent: <i>X</i> = <i>Y</i><sup>2</sup>. <b>Reason:</b> <i>X</i> = <i>α</i><sup>2</sup> and <i>Y</i> = <i>α</i>.`,
          `Impose it: ${fr(`(${CA})<sup>2</sup>`, 'Δ<sup>2</sup>')} = ${fr(BC, 'Δ')}, and multiply through by Δ<sup>2</sup>:<br>(${CA})<sup>2</sup><br>= (${AB})(${BC}).<br><b>Reason:</b> Δ ≠ 0 permits the multiplication.`,
          `The converse also holds. If the displayed relation is true and Δ ≠ 0, put <i>α</i> = ${fr(CA, 'Δ')}; then <i>α</i><sup>2</sup> = ${fr(BC, 'Δ')}, and substituting into ${a1}<i>x</i><sup>2</sup> + ${b1}<i>x</i> + ${c1} gives<br>${fr(`${a1}(${BC}) + ${b1}(${CA}) + ${c1}Δ`, 'Δ')}<br>= ${fr(`−${a1}${b2}${c1} + ${a2}${b1}${c1} + ${c1}(${AB})`, 'Δ')}<br>= 0,<br>and symmetrically for the second equation. <b>Reason:</b> direct expansion; the ${a1}${b1}${c2} terms cancel.`,
          'If instead Δ = 0 and a common root exists, the two equations are forced to be proportional, so both roots are common. ■',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure A: finding a common root of two quadratics',
        steps: [
          `Check the cheap case first: if ${RATIOS}, the equations are the same equation scaled, so <b>both</b> roots are common and there is nothing further to do. <b>Why:</b> this is the only way to have two common roots, and it makes every other method degenerate.`,
          'If one of the quadratics factorises on sight, factor it, get its two roots explicitly, and substitute each into the other equation in turn. <b>Why:</b> this is faster than any formula and automatically produces every valid parameter value.',
          `Otherwise eliminate <i>x</i><sup>2</sup>: compute ${a2}${f1}(<i>x</i>) − ${a1}${f2}(<i>x</i>) = 0, which reduces to the linear equation (${a2}${b1} − ${a1}${b2})<i>x</i> + (${a2}${c1} − ${a1}${c2}) = 0, giving the candidate<br><i>x</i> = ${fr(CA, AB)}.<br><b>Why:</b> any common root satisfies every linear combination of the two equations, and this particular combination has no <i>x</i><sup>2</sup> term.`,
          `<b>Substitute the candidate back into one of the original equations.</b> <b>Why:</b> step 3 is a necessary consequence only. The linear equation has a unique root exactly when ${AB} ≠ 0, and that root is a common root only if it satisfies one of the quadratics.`,
          'If the problem gives real coefficients and tells you the common root is non-real, skip all of the above and conclude immediately that the coefficients are proportional. <b>Why:</b> the conjugate of the shared root is shared too, so both roots coincide.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: solving a quadratic inequality by sign scheme',
        steps: [
          `Move everything to one side so the inequality reads <i>f</i>(<i>x</i>) > 0, ≥ 0, < 0 or ≤ 0 with <i>f</i>(<i>x</i>) = ${QUAD}. <b>Why:</b> the sign rules describe one expression against zero, never two expressions against each other.`,
          'Compute <i>D</i>. If <i>D</i> < 0, stop: <i>f</i> has the constant sign of <i>a</i>, so the answer is either all of ℝ or the empty set. <b>Why:</b> no sign change is possible without a real root.',
          'If <i>D</i> ≥ 0, find the roots <i>α</i> ≤ <i>β</i> by factorising or by the quadratic formula, and mark them on a number line. <b>Why:</b> the roots are the only points where the sign can change.',
          'Assign signs: the sign of <i>f</i> agrees with the sign of <i>a</i> on the two outer intervals and opposes it on the middle interval (<i>α</i>, <i>β</i>). <b>Why:</b> <i>f</i>(<i>x</i>) = <i>a</i>(<i>x</i> − <i>α</i>)(<i>x</i> − <i>β</i>), and (<i>x</i> − <i>α</i>)(<i>x</i> − <i>β</i>) is positive outside and negative between. This alternating pattern is the wavy-curve rule.',
          'Read the answer off the number line, then fix the endpoints: include <i>α</i>, <i>β</i> if the inequality is ≥ or ≤, exclude them if it is > or <. <b>Why:</b> <i>f</i>(<i>α</i>) = <i>f</i>(<i>β</i>) = 0, and zero satisfies a non-strict inequality but not a strict one.',
          `If <i>D</i> = 0 the two roots coincide and there is no middle interval; <i>f</i> has the sign of <i>a</i> everywhere except at the single point <i>x</i> = ${VX}, where it is zero. <b>Why:</b> <i>f</i>(<i>x</i>) = <i>a</i>(<i>x</i> − <i>α</i>)<sup>2</sup>.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C: location of roots under a parameter',
        steps: [
          `Write <i>f</i>(<i>x</i>) = ${QUAD} explicitly in terms of the parameter and confirm <i>a</i> ≠ 0; if the parameter can make <i>a</i> = 0, handle that value as a separate linear case before anything else. <b>Why:</b> every condition below assumes a genuine parabola.`,
          `Translate the requirement into the full condition set from the Key formulas and definitions part. Do not economise: write down all of <i>D</i>, ${AF} and the vertex condition that the case calls for. <b>Why:</b> each condition rules out a distinct unwanted configuration, and dropping one is the single most common source of a wrong parameter set.`,
          'Solve each condition separately as an inequality in the parameter, keeping the results as intervals. <b>Why:</b> they must be intersected, and intersecting is only reliable on explicit intervals.',
          'Intersect all the intervals. <b>Why:</b> the conditions are simultaneous, not alternative.',
          'Test the endpoints of your final interval by substituting back and finding the actual roots. <b>Why:</b> endpoints are where <i>D</i> = 0, where <i>k</i> is itself a root, or where the parameter makes <i>a</i> = 0, and these are the cases the inequalities handle by a hair.',
          `Where possible, sanity-check the answer by an independent route: factorise, or use <i>α</i> + <i>β</i> = −${fr('<i>b</i>', '<i>a</i>')} and <i>αβ</i> = ${fr('<i>c</i>', '<i>a</i>')} to describe the roots directly. <b>Why:</b> a second derivation catches a sign slip in seconds.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Show that <i>f</i>(<i>x</i>) = 2<i>x</i><sup>2</sup> − 8<i>x</i> + 11 is positive for every real <i>x</i>, find its minimum value and the point where it occurs, and state its range. Then solve <i>x</i><sup>2</sup> − 5<i>x</i> + 6 ≤ 0.',
        steps: [
          'Here <i>a</i> = 2, <i>b</i> = −8, <i>c</i> = 11, so<br><i>D</i> = (−8)<sup>2</sup> − 4(2)(11)<br>= 64 − 88 = −24.',
          'Since <i>a</i> = 2 > 0 and <i>D</i> = −24 < 0, the condition “<i>f</i>(<i>x</i>) > 0 for every real <i>x</i>” is met, so <i>f</i> is positive throughout ℝ.',
          `The minimum occurs at <i>x</i> = ${VX} = −${fr('−8', '4')} = 2, and its value is ${VY} = −${fr('−24', '8')} = 3.`,
          'Verification by direct substitution:<br><i>f</i>(2) = 2(4) − 8(2) + 11<br>= 8 − 16 + 11 = 3,<br>as claimed. Equivalently, <i>f</i>(<i>x</i>) = 2(<i>x</i> − 2)<sup>2</sup> + 3.',
          'Since <i>a</i> > 0 there is no maximum, so the range of <i>f</i> is [3, ∞).',
          'For the inequality, <i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 5<i>x</i> + 6 = (<i>x</i> − 2)(<i>x</i> − 3) has roots 2 and 3, and <i>a</i> = 1 > 0. By the sign scheme, <i>g</i> < 0 strictly between the roots and <i>g</i> > 0 strictly outside. The inequality is non-strict, so the roots themselves are included.<br><i>x</i><sup>2</sup> − 5<i>x</i> + 6 ≤ 0 ⟺ <i>x</i> ∈ [2, 3].',
          'Check at an interior point: <i>g</i>(2.5) = 6.25 − 12.5 + 6 = −0.25 < 0, consistent.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Find all real values of <i>k</i> for which the equations <i>x</i><sup>2</sup> + <i>kx</i> + 1 = 0 and <i>x</i><sup>2</sup> + <i>x</i> + <i>k</i> = 0 have at least one common root. In each case say whether one root or both roots are common.',
        steps: [
          '<b>Step 1: check for proportional coefficients.</b> Both leading coefficients are 1, so proportionality would force <i>k</i> = 1 (from the <i>x</i>-coefficients) and 1 = <i>k</i> (from the constants). These agree, so <i>k</i> = 1 is a genuine solution: both equations become <i>x</i><sup>2</sup> + <i>x</i> + 1 = 0 and <b>both</b> roots are common. (Those roots are the non-real cube roots of unity <i>ω</i>, <i>ω</i><sup>2</sup> of Topic 03, which is consistent: with real coefficients, a shared non-real root must bring its conjugate with it.)',
          '<b>Step 2: the remaining case <i>k</i> ≠ 1.</b> Subtract the second equation from the first to eliminate <i>x</i><sup>2</sup>:<br>(<i>x</i><sup>2</sup> + <i>kx</i> + 1) − (<i>x</i><sup>2</sup> + <i>x</i> + <i>k</i>)<br>= (<i>k</i> − 1)<i>x</i> + (1 − <i>k</i>)<br>= (<i>k</i> − 1)(<i>x</i> − 1) = 0.<br>Since <i>k</i> ≠ 1, the candidate common root is <i>x</i> = 1.',
          '<b>Step 3: substitute back, as Procedure A demands.</b> In <i>x</i><sup>2</sup> + <i>kx</i> + 1 = 0: 1 + <i>k</i> + 1 = 0, so <i>k</i> = −2. Confirm in the other equation: 1 + 1 + (−2) = 0, satisfied.',
          '<b>Step 4: describe the roots for <i>k</i> = −2.</b> The first equation becomes <i>x</i><sup>2</sup> − 2<i>x</i> + 1 = (<i>x</i> − 1)<sup>2</sup> = 0, with the repeated root 1. The second becomes <i>x</i><sup>2</sup> + <i>x</i> − 2 = (<i>x</i> − 1)(<i>x</i> + 2) = 0, with roots 1 and −2. They share exactly one root, namely 1.',
          `Cross-check with the formula. With ${a1} = 1, ${b1} = −2, ${c1} = 1 and ${a2} = 1, ${b2} = 1, ${c2} = −2:<br>${CA} = 1 − (−2) = 3,<br>${AB} = 1 − (−2) = 3,<br>${BC} = 4 − 1 = 3.<br>The condition reads 3<sup>2</sup> = 3 × 3, i.e. 9 = 9, and the common root is ${fr('3', '3')} = 1, exactly as found.`,
        ],
        ans: '<i>k</i> = 1 (both roots common) and <i>k</i> = −2 (exactly one common root, <i>x</i> = 1).',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: 'Find all real values of <i>a</i> for which <i>ax</i><sup>2</sup> + 4<i>x</i> + <i>a</i> > 0 for every real <i>x</i>.',
        steps: [
          '<b>The trap.</b> The problem looks like a one-line discriminant question. The seductive route is: “positive for all <i>x</i> means <i>D</i> ≤ 0, so 16 − 4<i>a</i><sup>2</sup> ≤ 0, so <i>a</i><sup>2</sup> ≥ 4, so <i>a</i> ≤ −2 or <i>a</i> ≥ 2.” That answer, |<i>a</i>| ≥ 2, is wrong on two separate counts: it loses the requirement <i>a</i> > 0, and it converts a strict inequality into a non-strict one. A third trap is the value <i>a</i> = 0, at which the expression is not quadratic at all.',
          'Case <i>a</i> = 0. The expression becomes 4<i>x</i>, which is negative for every <i>x</i> < 0. So <i>a</i> = 0 fails and is discarded. Note that no discriminant argument would have caught this, since there is no quadratic to take a discriminant of.',
          'Case <i>a</i> ≠ 0. The requirement “<i>f</i>(<i>x</i>) > 0 for every real <i>x</i>” is equivalent to the pair of conditions <i>a</i> > 0 <b>and</b> <i>D</i> < 0.<br><i>D</i> = 16 − 4<i>a</i><sup>2</sup> < 0 ⟺ <i>a</i><sup>2</sup> > 4<br>⟺ <i>a</i> < −2 or <i>a</i> > 2.<br>Intersecting with <i>a</i> > 0 leaves <i>a</i> > 2.',
          '<b>Why the discarded pieces really are wrong.</b> Take <i>a</i> = −3, which satisfies |<i>a</i>| > 2: the expression is −3<i>x</i><sup>2</sup> + 4<i>x</i> − 3 with <i>D</i> = 16 − 36 = −20 < 0 and <i>a</i> < 0, so it is negative for every real <i>x</i>, the exact opposite of what was asked. Take <i>a</i> = 2, the endpoint that <i>D</i> ≤ 0 would have admitted: the expression is 2<i>x</i><sup>2</sup> + 4<i>x</i> + 2 = 2(<i>x</i> + 1)<sup>2</sup>, which equals 0 at <i>x</i> = −1 and so is not positive for every <i>x</i>.',
        ],
        ans: '<i>a</i> > 2, i.e. <i>a</i> ∈ (2, ∞).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'For <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 2<i>mx</i> + (<i>m</i><sup>2</sup> − 1) with <i>m</i> ∈ ℝ, find all <i>m</i> such that (a) both roots lie strictly between −2 and 4; (b) exactly one root lies in the open interval (−2, 4).',
        steps: [
          `Here <i>a</i> = 1 > 0, <i>b</i> = −2<i>m</i>, <i>c</i> = <i>m</i><sup>2</sup> − 1, so the vertex sits at ${VX} = <i>m</i>, and<br><i>D</i> = 4<i>m</i><sup>2</sup> − 4(<i>m</i><sup>2</sup> − 1)<br>= 4 > 0 for every <i>m</i>,<br>so the roots are always real and distinct. Also record the two boundary values:<br><i>f</i>(−2) = 4 + 4<i>m</i> + <i>m</i><sup>2</sup> − 1<br>= <i>m</i><sup>2</sup> + 4<i>m</i> + 3<br>= (<i>m</i> + 1)(<i>m</i> + 3),<br><i>f</i>(4) = 16 − 8<i>m</i> + <i>m</i><sup>2</sup> − 1<br>= <i>m</i><sup>2</sup> − 8<i>m</i> + 15<br>= (<i>m</i> − 3)(<i>m</i> − 5).`,
          `<b>(a) Both roots in (−2, 4).</b> The full condition set is <i>D</i> ≥ 0, <i>af</i>(−2) > 0, <i>af</i>(4) > 0, and −2 < ${VX} < 4. With <i>a</i> = 1:<br>• <i>D</i> = 4 ≥ 0: satisfied for every <i>m</i>.<br>• <i>f</i>(−2) > 0: (<i>m</i> + 1)(<i>m</i> + 3) > 0 ⟺ <i>m</i> < −3 or <i>m</i> > −1.<br>• <i>f</i>(4) > 0: (<i>m</i> − 3)(<i>m</i> − 5) > 0 ⟺ <i>m</i> < 3 or <i>m</i> > 5.<br>• Vertex: −2 < <i>m</i> < 4.`,
          'Intersecting: the vertex condition confines <i>m</i> to (−2, 4); within it, <i>f</i>(−2) > 0 forces <i>m</i> > −1, leaving (−1, 4); then <i>f</i>(4) > 0 forces <i>m</i> < 3, leaving<br><i>m</i> ∈ (−1, 3).',
          'Independent check. <i>f</i>(<i>x</i>) = (<i>x</i> − <i>m</i>)<sup>2</sup> − 1, so the roots are exactly <i>m</i> − 1 and <i>m</i> + 1. Both lie in (−2, 4) precisely when <i>m</i> − 1 > −2 and <i>m</i> + 1 < 4, i.e. <i>m</i> > −1 and <i>m</i> < 3. The two routes agree.',
          '<b>(b) Exactly one root in (−2, 4).</b> The standard test is <i>f</i>(−2)<i>f</i>(4) < 0:<br>(<i>m</i> + 1)(<i>m</i> + 3)(<i>m</i> − 3)(<i>m</i> − 5) < 0.',
          'The four critical values are −3, −1, 3, 5. Testing one point per interval: at <i>m</i> = −4 the product is (−3)(−1)(−7)(−9) > 0; at <i>m</i> = −2 it is (−1)(1)(−5)(−7) < 0; at <i>m</i> = 0 it is (1)(3)(−3)(−5) > 0; at <i>m</i> = 4 it is (5)(7)(1)(−1) < 0; at <i>m</i> = 6 it is (7)(9)(3)(1) > 0. Hence the strict test gives<br><i>m</i> ∈ (−3, −1) ∪ (3, 5).',
          '<b>The boundary cases the test cannot see.</b> The product test presumes <i>f</i>(−2) ≠ 0 and <i>f</i>(4) ≠ 0, so the four values <i>m</i> = −3, −1, 3, 5 must be examined by hand.<br>• <i>m</i> = −1: roots are −2 and 0. The endpoint −2 is not in the open interval, while 0 is. So exactly one root lies in (−2, 4): <b>include</b> <i>m</i> = −1.<br>• <i>m</i> = 3: roots are 2 and 4. Here 4 is excluded and 2 is inside, so exactly one root lies in (−2, 4): <b>include</b> <i>m</i> = 3.<br>• <i>m</i> = −3: roots are −4 and −2. Neither lies in the open interval, so <b>exclude</b>.<br>• <i>m</i> = 5: roots are 4 and 6. Neither lies in the open interval, so <b>exclude</b>.',
          'Independent check for (b) using the roots <i>m</i> − 1, <i>m</i> + 1: exactly one of them lies in (−2, 4) when either <i>m</i> − 1 ∈ (−2, 4) and <i>m</i> + 1 ∉ (−2, 4), giving <i>m</i> ∈ (−1, 5) intersected with (<i>m</i> ≤ −3 or <i>m</i> ≥ 3), i.e. [3, 5); or <i>m</i> + 1 ∈ (−2, 4) and <i>m</i> − 1 ∉ (−2, 4), giving <i>m</i> ∈ (−3, 3) intersected with (<i>m</i> ≤ −1 or <i>m</i> ≥ 5), i.e. (−3, −1]. The union matches.',
        ],
        ans: '(a) <i>m</i> ∈ (−1, 3). (b) <i>m</i> ∈ (−3, −1] ∪ [3, 5).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: 'Show that <i>x</i><sup>2</sup> − 3<i>x</i> + 4 > 0 for every real <i>x</i>. Find its minimum value and the value of <i>x</i> at which the minimum occurs.',
            a: `<i>D</i> = 9 − 16 = −7 < 0 with <i>a</i> = 1 > 0, so <i>f</i> > 0 throughout. Minimum value ${VY} = ${fr('7', '4')}, attained at <i>x</i> = ${fr('3', '2')}.`,
          },
          {
            q: 'Solve the inequality 2<i>x</i><sup>2</sup> − 5<i>x</i> − 3 ≥ 0.',
            a: `2<i>x</i><sup>2</sup> − 5<i>x</i> − 3 = (2<i>x</i> + 1)(<i>x</i> − 3), roots −${fr('1', '2')} and 3, <i>a</i> > 0; answer <i>x</i> ∈ (−∞, −${fr('1', '2')}] ∪ [3, ∞).`,
          },
          {
            q: 'Find the range of <i>f</i>(<i>x</i>) = −3<i>x</i><sup>2</sup> + 12<i>x</i> − 7, and the point at which the extreme value is attained.',
            a: `<i>a</i> = −3 < 0, <i>D</i> = 144 − 84 = 60, maximum value ${VY} = 5 attained at <i>x</i> = 2; range (−∞, 5].`,
          },
          {
            q: 'The equations <i>x</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0 and <i>x</i><sup>2</sup> + <i>cx</i> + <i>b</i> = 0 have a common root, where <i>b</i> ≠ <i>c</i>. Prove that <i>b</i> + <i>c</i> + 1 = 0 and identify the common root.',
            a: 'Subtracting gives (<i>b</i> − <i>c</i>)<i>x</i> + (<i>c</i> − <i>b</i>) = (<i>b</i> − <i>c</i>)(<i>x</i> − 1) = 0; since <i>b</i> ≠ <i>c</i> the common root is <i>x</i> = 1, and substituting <i>x</i> = 1 gives 1 + <i>b</i> + <i>c</i> = 0.',
          },
          {
            q: 'Find all values of <i>k</i> for which <i>x</i><sup>2</sup> − 6<i>x</i> + 8 = 0 and <i>x</i><sup>2</sup> − 9<i>x</i> + <i>k</i> = 0 have a common root. State whether both roots can ever be common.',
            a: `<i>x</i><sup>2</sup> − 6<i>x</i> + 8 = (<i>x</i> − 2)(<i>x</i> − 4). Root 2 gives <i>k</i> = 14; root 4 gives <i>k</i> = 20. Both roots common is impossible, since ${fr('1', '1')} ≠ ${fr('−6', '−9')}. (Check: <i>x</i><sup>2</sup> − 9<i>x</i> + 14 = (<i>x</i> − 2)(<i>x</i> − 7) and <i>x</i><sup>2</sup> − 9<i>x</i> + 20 = (<i>x</i> − 4)(<i>x</i> − 5).)`,
          },
          {
            q: 'Find all real <i>p</i> for which both roots of <i>x</i><sup>2</sup> + 2(<i>p</i> + 1)<i>x</i> + (9<i>p</i> − 5) = 0 are negative.',
            a: `${fr('<i>D</i>', '4')} = (<i>p</i> + 1)<sup>2</sup> − (9<i>p</i> − 5)<br>= <i>p</i><sup>2</sup> − 7<i>p</i> + 6<br>= (<i>p</i> − 1)(<i>p</i> − 6) ≥ 0;<br><i>f</i>(0) = 9<i>p</i> − 5 > 0; vertex −(<i>p</i> + 1) < 0. Answer <i>p</i> ∈ (${fr('5', '9')}, 1] ∪ [6, ∞).`,
          },
          {
            q: 'Find all real <i>k</i> for which the number 2 lies strictly between the roots of <i>x</i><sup>2</sup> + <i>kx</i> + (<i>k</i><sup>2</sup> − 4) = 0.',
            a: '<i>f</i>(2) = 4 + 2<i>k</i> + <i>k</i><sup>2</sup> − 4 = <i>k</i>(<i>k</i> + 2) < 0, so <i>k</i> ∈ (−2, 0).',
          },
          {
            q: 'The coefficients below are integers. Without solving, state the nature of the roots of (a) 6<i>x</i><sup>2</sup> − 7<i>x</i> + 2 = 0, (b) <i>x</i><sup>2</sup> − 4<i>x</i> + 2 = 0, (c) <i>x</i><sup>2</sup> + <i>x</i> + 1 = 0.',
            a: `(a) <i>D</i> = 1, a perfect square, so the roots are rational and distinct (they are ${fr('2', '3')} and ${fr('1', '2')}). (b) <i>D</i> = 8 > 0 and not a perfect square, so the roots are irrational conjugate surds, 2 ± √2. (c) <i>D</i> = −3 < 0, so the roots are a non-real complex conjugate pair, as in Topic 04.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The expression <i>x</i><sup>2</sup> − 4<i>x</i> + <i>k</i> is positive for every real <i>x</i> if and only if',
        opts: [
          {
            label: '<i>k</i> < 4',
            nudge: '<b>(A)</b> applies <i>D</i> > 0, which is the condition for two distinct real roots: precisely when the expression is not of one sign.',
          },
          { label: '<i>k</i> > 4', nudge: null },
          {
            label: '<i>k</i> ≥ 4',
            nudge: '<b>(C)</b> uses <i>D</i> ≤ 0 instead of <i>D</i> < 0; at <i>k</i> = 4 the expression is (<i>x</i> − 2)<sup>2</sup>, which is zero at <i>x</i> = 2 and therefore not positive for every <i>x</i>. This is the strict-versus-non-strict error.',
          },
          {
            label: 'every real <i>k</i>',
            nudge: '<b>(D)</b> assumes that <i>a</i> > 0 alone forces positivity, ignoring the discriminant entirely.',
          },
        ],
        correct: 1,
        solution: '<i>a</i> = 1 > 0 already, so the requirement reduces to <i>D</i> < 0: 16 − 4<i>k</i> < 0, i.e. <i>k</i> > 4.',
      },
      {
        t: 'mcq',
        q: 'If <i>x</i><sup>2</sup> + 2<i>x</i> + 3 = 0 and <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0, with <i>a</i>, <i>b</i>, <i>c</i> ∈ ℝ and <i>a</i> ≠ 0, have a common root, then <i>a</i> ∶ <i>b</i> ∶ <i>c</i> equals',
        opts: [
          { label: '1 ∶ 2 ∶ 3', nudge: null },
          {
            label: '3 ∶ 2 ∶ 1',
            nudge: '<b>(B)</b> comes from reversing the order of the coefficients: reading <i>x</i><sup>2</sup> + 2<i>x</i> + 3 backwards as 3<i>x</i><sup>2</sup> + 2<i>x</i> + 1 matches <i>a</i> with the constant term and <i>c</i> with the leading coefficient, giving 3:2:1.',
          },
          { label: '1 ∶ 3 ∶ 2', nudge: '<b>(C)</b> permutes <i>b</i> and <i>c</i>, a transcription slip.' },
          {
            label: 'it cannot be determined',
            nudge: `<b>(D)</b> is chosen by students who reach for the one-common-root formula (${CA})<sup>2</sup> = (${AB})(${BC}), find it underdetermined with three unknowns, and give up; the point of the question is that the non-real root removes the “exactly one common root” possibility before any formula is needed.`,
          },
        ],
        correct: 0,
        solution: 'For <i>x</i><sup>2</sup> + 2<i>x</i> + 3 = 0, <i>D</i> = 4 − 12 = −8 < 0, so its roots are a non-real conjugate pair. If <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0 has real coefficients and shares one of them, the conjugate-root theorem of Topic 04 forces it to share the other too. Two quadratics with both roots common have proportional coefficients, so <i>a</i> ∶ <i>b</i> ∶ <i>c</i> = 1 ∶ 2 ∶ 3.',
      },
      {
        t: 'mcq',
        q: 'Both roots of <i>x</i><sup>2</sup> − 6<i>x</i> + <i>k</i> = 0 are greater than 2 if and only if',
        opts: [
          {
            label: '<i>k</i> > 8',
            nudge: '<b>(A)</b> keeps <i>f</i>(2) > 0 but drops <i>D</i> ≥ 0: the signature error of this topic. At <i>k</i> = 10, for instance, <i>f</i>(2) = 2 > 0 yet <i>D</i> = −4 < 0, so there are no real roots at all to be greater than 2; remember that <i>af</i>(<i>k</i>) > 0 holds automatically whenever <i>D</i> < 0 and therefore proves nothing on its own.',
          },
          { label: '8 < <i>k</i> ≤ 9', nudge: null },
          {
            label: '<i>k</i> ≥ 9',
            nudge: '<b>(C)</b> inverts the discriminant inequality, reading 36 − 4<i>k</i> ≤ 0.',
          },
          {
            label: '<i>k</i> < 9',
            nudge:
              '<b>(D)</b> keeps only <i>D</i> > 0 (giving <i>k</i> < 9) and drops <i>af</i>(2) > 0. It lets in too much: at <i>k</i> = 8 the roots are 2 and 4, and 2 is not greater than 2. It also loses <i>k</i> = 9, where the repeated root 3 is greater than 2; that is why the condition is <i>D</i> ≥ 0, not <i>D</i> > 0.',
          },
        ],
        correct: 1,
        solution: 'With <i>a</i> = 1 > 0 and <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 6<i>x</i> + <i>k</i>: <i>D</i> ≥ 0 gives 36 − 4<i>k</i> ≥ 0, i.e. <i>k</i> ≤ 9; <i>af</i>(2) > 0 gives 4 − 12 + <i>k</i> > 0, i.e. <i>k</i> > 8; the vertex is at <i>x</i> = 3 > 2 for every <i>k</i>, so that condition is automatic. Intersecting, 8 < <i>k</i> ≤ 9.',
      },
      {
        t: 'mcq',
        q: 'The minimum value of <i>f</i>(<i>x</i>) = 4<i>x</i><sup>2</sup> − 4<i>x</i> + 5 is',
        opts: [
          { label: '4', nudge: null },
          {
            label: '5',
            nudge: `<b>(B)</b> reports <i>c</i> = 5, i.e. <i>f</i>(0): the error of assuming the extremum sits at <i>x</i> = 0 rather than at <i>x</i> = ${VX}.`,
          },
          {
            label: fr('1', '2'),
            nudge: `<b>(C)</b> reports the location <i>x</i> = ${fr('1', '2')} instead of the value of the minimum, a question-misreading that costs a mark far more often than an algebra slip does.`,
          },
          {
            label: '−4',
            nudge: `<b>(D)</b> uses ${D4A} instead of ${VY}, dropping the minus sign in the vertex form.`,
          },
        ],
        correct: 0,
        solution: `<i>a</i> = 4 > 0 and <i>D</i> = 16 − 80 = −64, so the minimum value is ${VY} = ${fr('64', '16')} = 4, attained at <i>x</i> = ${VX} = ${fr('1', '2')}. Check: <i>f</i>(${fr('1', '2')}) = 1 − 2 + 5 = 4.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting the <i>a</i> = 0 case when the leading coefficient carries a parameter.</b> “Find all <i>m</i> such that <i>mx</i><sup>2</sup> + <i>bx</i> + <i>c</i> > 0 for all <i>x</i>” is not a pure discriminant question. <b>Correction:</b> split off <i>m</i> = 0 first and treat the resulting linear expression on its own; a non-constant linear expression is never of one sign on all of ℝ.',
          '<b>Using <i>D</i> < 0 alone as the condition for “always positive”.</b> <i>D</i> < 0 only says the sign never changes; it does not say which sign. <b>Correction:</b> always pair <i>D</i> < 0 with <i>a</i> > 0 for positivity, or <i>a</i> < 0 for negativity.',
          `<b>Using ${AF} > 0 to place roots without first securing <i>D</i> ≥ 0.</b> When <i>D</i> < 0, ${AF} = <i>a</i><sup>2</sup>|<i>k</i> − <i>α</i>|<sup>2</sup> > 0 for every real <i>k</i>, so the test passes vacuously and admits parameter values with no real roots at all. <b>Correction:</b> <i>D</i> ≥ 0 is a separate, non-negotiable line of the condition set.`,
          `<b>Dropping the vertex condition.</b> <i>D</i> ≥ 0 together with ${AF} > 0 says only that <i>k</i> is outside the root pair; it does not say on which side. <b>Correction:</b> the vertex condition ${VX} > <i>k</i> or ${VX} < <i>k</i> is what chooses the side.`,
          `<b>Confusing the extreme value with the point where it occurs.</b> The minimum of <i>f</i> is ${VY}; the minimising <i>x</i> is ${VX}. <b>Correction:</b> name them separately in your working, and verify by substituting ${VX} back into <i>f</i>.`,
          `<b>Sign slip in ${VY}.</b> When <i>D</i> is negative and <i>a</i> is positive, ${VY} is positive. <b>Correction:</b> sanity-check against the graph: a positive-definite parabola must have a positive minimum.`,
          `<b>Accepting the subtraction candidate as a common root without substituting back.</b> Eliminating <i>x</i><sup>2</sup> gives a candidate only when ${AB} ≠ 0; that candidate is a common root only when it satisfies an original quadratic. <b>Correction:</b> substitute back, every time.`,
          '<b>Assuming a shared root means “exactly one shared root”.</b> With real coefficients and a non-real shared root, both roots are automatically shared. <b>Correction:</b> check the discriminant of the known quadratic before choosing your method.',
          '<b>Sloppy endpoints in inequality answers.</b> <i>f</i>(<i>x</i>) ≥ 0 includes the roots; <i>f</i>(<i>x</i>) > 0 excludes them. <b>Correction:</b> decide inclusion by evaluating <i>f</i> at the root, which is 0, and testing it against the inequality sign.',
          '<b>Failing to reverse an inequality when multiplying by a negative <i>a</i>.</b> Rewriting −<i>x</i><sup>2</sup> + 4<i>x</i> − 3 > 0 as <i>x</i><sup>2</sup> − 4<i>x</i> + 3 > 0 is wrong; it becomes <i>x</i><sup>2</sup> − 4<i>x</i> + 3 < 0, giving 1 < <i>x</i> < 3. <b>Correction:</b> multiplying an inequality by −1 flips it.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips.</b><br>• When <i>a</i> > 0, the shortcut sentence for the whole sign theory is: outside the roots the quadratic agrees with <i>a</i>, between the roots it disagrees. Everything else is bookkeeping.<br>• Write the location conditions as a vertical stack (<i>D</i>, then ${AFK1}, then ${AFK2}, then vertex) before solving any of them. Under exam pressure a stack is far harder to leave incomplete than a paragraph.<br>• Prefer ${AF} to <i>f</i>(<i>k</i>) in every location problem, even when <i>a</i> is obviously positive. It makes the condition sign-of-<i>a</i> proof, so the same line works when a parameter can flip <i>a</i>.<br>• If one of the two quadratics in a common-root problem factorises, factor it. Substituting two explicit roots into the other equation is faster and safer than the cross-multiplication formula, and it never loses a case.<br>• After solving any parameter problem, substitute the two endpoints of your answer interval and find the actual roots. Endpoints are where <i>D</i> = 0, where <i>k</i> is itself a root, or where <i>a</i> = 0, and they are where the marks are.<br>• To constrain how far apart the roots are, use |<i>α</i> − <i>β</i>| = ${WIDTH} rather than solving for the roots.<br>• For “exactly one root in (${k1}, ${k2})”, start with <i>f</i>(${k1})<i>f</i>(${k2}) < 0, then immediately test the parameter values that make <i>f</i>(${k1}) = 0 or <i>f</i>(${k2}) = 0. The test is blind to those, and examiners know it.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: `<i>f</i>(<i>x</i>) = ${QUAD}, <i>a</i>, <i>b</i>, <i>c</i> ∈ ℝ, <i>a</i> ≠ 0, <i>D</i> = <i>b</i><sup>2</sup> − 4<i>ac</i>`,
            note: '',
          },
          {
            f: 'Vertex form',
            note: `<i>f</i>(<i>x</i>) = ${SQ} − ${D4A}; vertex at <i>x</i> = ${VX}, value ${VY}.`,
          },
          {
            f: 'Extremum',
            note: `<i>a</i> > 0: minimum ${VY}, range [${VY}, ∞). <i>a</i> < 0: maximum ${VY}, range (−∞, ${VY}].`,
          },
          {
            f: 'Sign for all <i>x</i>',
            note: 'Sign of <i>a</i> everywhere ⟺ <i>D</i> < 0. Then:<br><i>f</i> > 0 ∀<i>x</i> ⟺ <i>a</i> > 0, <i>D</i> < 0;<br><i>f</i> ≥ 0 ∀<i>x</i> ⟺ <i>a</i> > 0, <i>D</i> ≤ 0;<br><i>f</i> < 0 ∀<i>x</i> ⟺ <i>a</i> < 0, <i>D</i> < 0;<br><i>f</i> ≤ 0 ∀<i>x</i> ⟺ <i>a</i> < 0, <i>D</i> ≤ 0.<br>If <i>a</i> holds a parameter, test <i>a</i> = 0 separately.',
          },
          {
            f: 'Inequalities (<i>D</i> > 0, roots <i>α</i> < <i>β</i>)',
            note: '<i>af</i>(<i>x</i>) > 0 outside [<i>α</i>, <i>β</i>]; <i>af</i>(<i>x</i>) < 0 on (<i>α</i>, <i>β</i>). Endpoints in for ≥, ≤; out for >, <.',
          },
          {
            f: 'Master identity',
            note: `${AF} = <i>a</i><sup>2</sup>(<i>k</i> − <i>α</i>)(<i>k</i> − <i>β</i>). With real roots: ${AF} > 0 ⟺ <i>k</i> outside; ${AF} < 0 ⟺ <i>k</i> between; ${AF} = 0 ⟺ <i>k</i> is a root. Beware: <i>D</i> < 0 ⇒ ${AF} > 0 always.`,
          },
          {
            f: 'Location of roots',
            note: `• Both > <i>k</i>: <i>D</i> ≥ 0, ${AF} > 0, ${VX} > <i>k</i>.<br>• Both < <i>k</i>: <i>D</i> ≥ 0, ${AF} > 0, ${VX} < <i>k</i>.<br>• <i>k</i> between: ${AF} < 0 (forces <i>D</i> > 0 on its own).<br>• Both in (${k1}, ${k2}): <i>D</i> ≥ 0, ${AFK1} > 0, ${AFK2} > 0, ${k1} < ${VX} < ${k2}.<br>• Exactly one in (${k1}, ${k2}): <i>f</i>(${k1})<i>f</i>(${k2}) < 0; test <i>f</i>(${k1}) = 0 and <i>f</i>(${k2}) = 0 by hand.<br>• <i>α</i> < ${k1} < ${k2} < <i>β</i>: ${AFK1} < 0 and ${AFK2} < 0.<br>• For ≥/≤ versions, relax ${AF} > 0 to ${AF} ≥ 0 and the vertex inequality to a non-strict one.`,
          },
          {
            f: `Common roots (${a1}<i>x</i><sup>2</sup> + ${b1}<i>x</i> + ${c1} = 0, ${a2}<i>x</i><sup>2</sup> + ${b2}<i>x</i> + ${c2} = 0)`,
            note: `• One common root (when ${AB} ≠ 0):<br>(${CA})<sup>2</sup><br>= (${AB})(${BC}),<br>with <i>α</i> = ${fr(CA, AB)}.<br>• Both roots common: ${RATIOS}.<br>• Working method: eliminate <i>x</i><sup>2</sup> via ${a2}${f1} − ${a1}${f2} = 0, solve the linear equation, substitute back.<br>• Real coefficients and a non-real shared root ⇒ both roots shared.`,
          },
          {
            f: 'Nature of roots, rational coefficients',
            note: '<i>D</i> > 0 a perfect square ⇒ rational distinct; <i>D</i> > 0 non-square ⇒ irrational surd pair <i>p</i> ± √<i>q</i>; <i>D</i> = 0 ⇒ equal rational; <i>D</i> < 0 ⇒ non-real conjugate pair (Topic 04).',
          },
          {
            f: 'Symmetric functions (Vieta from Topic 04)',
            note: `<i>α</i><sup>2</sup> + <i>β</i><sup>2</sup> = ${fr('<i>b</i><sup>2</sup> − 2<i>ac</i>', '<i>a</i><sup>2</sup>')};<br>(<i>α</i> − <i>β</i>)<sup>2</sup> = ${fr('<i>D</i>', '<i>a</i><sup>2</sup>')};<br>|<i>α</i> − <i>β</i>| = ${WIDTH};<br><i>α</i><sup>3</sup> + <i>β</i><sup>3</sup> = ${fr('3<i>abc</i> − <i>b</i><sup>3</sup>', '<i>a</i><sup>3</sup>')};<br>${fr('1', '<i>α</i>')} + ${fr('1', '<i>β</i>')} = −${fr('<i>b</i>', '<i>c</i>')};<br>${fr('<i>α</i>', '<i>β</i>')} + ${fr('<i>β</i>', '<i>α</i>')} = ${fr('<i>b</i><sup>2</sup> − 2<i>ac</i>', '<i>ac</i>')}.`,
          },
        ],
        aids: [],
      },
    ],
  },
];
