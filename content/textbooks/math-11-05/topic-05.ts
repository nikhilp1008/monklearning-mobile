import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Topic 05: Modulus Inequalities & Case Analysis, pp. 451–465 of
 * the Class 11 Mathematics Master Reference (October 2026 edition), word for
 * word: the supplement's Unit 5. The supplement's heading "Chapter 5: Linear
 * Inequalities — Supplement" (p. 451) is not copied; its two introduction
 * paragraphs open the Exam relevance part, before the box text. The
 * supplement's "boundary re-test" of Unit 3's Practice exercise 3 (p. 451) is
 * in Topic 03, not here. The topic ends with its cheat sheet on p. 465; the
 * "Addendum: Three Targeted Extensions" text below it starts Additional A.
 * Figure 5.7 (caption p. 456, drawn p. 457) stands after Procedure B, where
 * the book prints its caption; Figure 5.8 (caption p. 459, drawn p. 460) is on
 * the first worked example, after which the book prints its caption. Both are
 * redrawn in lib/diagrams/mathematics-11-05.ts. The topic has no unnumbered
 * drawing. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const H32 = fr('3', '2');
const E83 = fr('8', '3');
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';
const KEY = 'the Key formulas and definitions part';

const L_FG = '<i>f</i>, <i>g</i> = any real expressions in <i>x</i>';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 05 · pp. 451–465 ────────────────
  {
    n: '05',
    title: 'Modulus Inequalities & Case Analysis',
    kalam: 'When the right-hand side of a modulus inequality contains the variable, its sign becomes part of the problem.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'Topics 01 to 04 of this chapter give you the complete NCERT syllabus plus the wavy-curve machinery that JEE runs on. Topic 05 and Additional topics A to C add the material those topics promise but do not drill: modulus inequalities where the right-hand side is not a plain number, inequalities carrying two or more moduli, the parameter question “for which <i>k</i> is this quadratic positive for every <i>x</i>?”, the use of sign analysis to hand you the domain of a function, and the controlled squaring of a radical inequality.<br><br>Read Topic 05 as part of the chapter itself, and Additional topics A to C as three short extensions. Nothing here is new theory: it is the same sign analysis you already know, pointed at the places where JEE points it.',
      },
      {
        t: 'p',
        html: `The CBSE Boards touch this lightly: NCERT’s own chapter sets none, but the NCERT Exemplar carries modulus items such as |<i>x</i> − 2| ≥ 5, typically worth 2 marks, usually with a numerical right-hand side ${ESTIMATE}. JEE Main takes it much further: expect a modulus inequality with a variable right-hand side, or a “how many integers satisfy” count, in almost every recent paper ${ESTIMATE}. JEE Advanced pushes into two or more moduli at once, solved by splitting the number line at the critical points and reassembling the answer from the pieces: the skill this topic exists to build. (No NEET relevance: Mathematics is outside the NEET syllabus.)`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Drive out of Mumbai on the Expressway and you pass kilometre stones: 0, 1, 2, and so on to Pune. Suppose the Khalapur toll plaza sits at stone 42 and you are somewhere at stone <i>x</i>. How far are you from the toll? Not <i>x</i> − 42: that is negative if you have not reached it yet, and there is no such thing as being minus eleven kilometres from a toll plaza. The honest answer is |<i>x</i> − 42|.',
      },
      {
        t: 'p',
        html: '<b>That is the whole idea: |<i>x</i> − <i>a</i>| is the distance on the number line between <i>x</i> and <i>a</i>, and distance never carries a sign.</b> Once you hold that picture, every modulus inequality becomes a sentence about distance, and most of them can be read off a number line rather than ground out algebraically.<br>• |<i>x</i> − 42| < 5 says “you are within 5 km of the toll”: the stretch from stone 37 to stone 47.<br>• |<i>x</i> − 42| > 5 says “you are more than 5 km away”: everything outside that stretch, in two separate pieces, one on each side.',
      },
      {
        t: 'p',
        html: 'This is why “less than locks you in, greater than lets you out,” the mnemonic from Topic 04. It is not a rule to memorise; it is what distance means.',
      },
      {
        t: 'p',
        html: 'Think about it this way… now put a second toll plaza on the road, at stone 50. The quantity |<i>x</i> − 42| + |<i>x</i> − 50| is your total distance to the two plazas added together. Walk along the road and watch that total. Anywhere between the two plazas it is exactly 8 km, no matter where you stand: you are simply splitting the gap. Step outside the pair and the total starts climbing, gaining 2 km for every 1 km you walk away. Two facts fall out immediately, and both are examinable:<br>• The total can never be less than 8, the gap between the plazas. So |<i>x</i> − 42| + |<i>x</i> − 50| < 6 has <b>no solution at all</b>, and you can say so without writing a single line of algebra.<br>• Whenever the bound does exceed 8, the solution is a single interval symmetric about the midpoint stone 46.',
      },
      {
        t: 'p',
        html: `Now the harder case, and the one JEE asks most often ${ESTIMATE}. What does |<i>x</i> − 1| < <i>x</i> + 2 mean? The left side is a distance, so it is never negative. The right side is an expression, which may be positive, zero, or negative depending on <i>x</i>. A non-negative quantity can never be strictly less than a negative one, so any <i>x</i> making <i>x</i> + 2 negative is dead on arrival. <b>When the right-hand side of a modulus inequality contains the variable, its sign becomes part of the problem.</b> Handle it and the question is routine; ignore it and you will collect solutions that do not exist.`,
      },
      {
        t: 'p',
        html: 'There are two standard honest ways to handle it, and you will learn both:<br>• <b>The equivalence route.</b> Convert the modulus into a double inequality or a union in one stroke, using results that are valid whatever the sign of the right-hand side.<br>• <b>The case-split route.</b> Break the number line at every point where a modulus argument changes sign, remove the modulus bars on each piece, and solve there. This is the general route for two or more moduli.',
      },
      {
        t: 'p',
        html: `<b>Limiting conditions and assumptions.</b><br>• |<i>f</i>(<i>x</i>)| is defined wherever <i>f</i>(<i>x</i>) is; the modulus itself never restricts the domain. Radicals and logarithms do, and those are handled in Additional topic B and Additional topic C.<br>• The critical point of a modulus is where its argument is zero, not where the constant inside it sits. The critical point of |2<i>x</i> + 3| is <i>x</i> = −${H32}, not <i>x</i> = −3.<br>• In a case split, a solution found inside a case is only valid if it also lies in that case’s own interval. Skipping that intersection is the single most expensive error in this topic.<br>• Squaring is legitimate only when both sides are known to be non-negative. |<i>f</i>| < <i>g</i> does <b>not</b> become <i>f</i><sup>2</sup> < <i>g</i><sup>2</sup> on its own.<br>• The distance shortcuts above assume the coefficient of <i>x</i> inside each modulus is 1. For |<i>x</i> − 2| + |2<i>x</i> + 3| they do not apply, and you must case-split.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: '<b>Definition.</b> The modulus (or absolute value) of a real number <i>x</i> is' },
      {
        t: 'formula',
        kicker: 'The modulus (absolute value)',
        main: '|<i>x</i>| = <i>x</i>, <i>x</i> ≥ 0<br>|<i>x</i>| = −<i>x</i>, <i>x</i> < 0',
        legend: ['<i>x</i> = any real number'],
        note: null,
      },
      {
        t: 'p',
        html: '• <i>x</i>: any real number.<br>• The output |<i>x</i>| is always non-negative, and |<i>x</i>| = 0 if and only if <i>x</i> = 0.',
      },
      { t: 'p', html: '<b>Basic properties.</b> For all real <i>x</i>, <i>y</i>:' },
      {
        t: 'formula',
        kicker: 'Basic properties of the modulus',
        main: [
          '|<i>x</i>| ≥ 0',
          '|<i>xy</i>| = |<i>x</i>| |<i>y</i>|',
          '|<i>x</i>|<sup>2</sup> = <i>x</i><sup>2</sup>',
          '√<i>x</i><sup>2</sup> = |<i>x</i>|',
          '−|<i>x</i>| ≤ <i>x</i> ≤ |<i>x</i>|',
          '|<i>x</i> + <i>y</i>| ≤ |<i>x</i>| + |<i>y</i>|',
          '| |<i>x</i>| − |<i>y</i>| | ≤ |<i>x</i> − <i>y</i>|',
        ].join('<br>'),
        legend: ['<i>x</i>, <i>y</i> = any real numbers'],
        note: null,
      },
      {
        t: 'p',
        html: '• The last two are the triangle inequality and its reverse form; both are standard JEE Advanced tools.<br>• |<i>x</i> − <i>a</i>| is the distance between the points <i>x</i> and <i>a</i> on the number line. In particular |<i>x</i>| = |<i>x</i> − 0| is the distance from the origin.',
      },
      {
        t: 'p',
        html: '<b>Standard results: constant right-hand side.</b> These are the Topic 04 results, restated for comparison. Here <i>a</i> > 0 and <i>f</i> is any expression in <i>x</i>:',
      },
      {
        t: 'p',
        html: '|<i>f</i>| < <i>a</i> ⟺ −<i>a</i> < <i>f</i> < <i>a</i><br>|<i>f</i>| > <i>a</i> ⟺ <i>f</i> < −<i>a</i> or <i>f</i> > <i>a</i>',
      },
      {
        t: 'p',
        html: '• Validity: <i>a</i> > 0 is required. If <i>a</i> ≤ 0, read the general forms below instead.',
      },
      {
        t: 'p',
        html: '<b>Standard results: variable right-hand side.</b> Let <i>f</i> and <i>g</i> be any expressions in <i>x</i>. These four equivalences hold for <b>every</b> real value of <i>g</i>, positive or negative, with no side condition:',
      },
      {
        t: 'table',
        title: null,
        head: ['Inequality', 'Equivalent form', 'What happens to the sign of <i>g</i>'],
        rows: [
          ['|<i>f</i>| < <i>g</i>', '−<i>g</i> < <i>f</i> < <i>g</i>', '<i>g</i> > 0 is forced by the double inequality itself'],
          ['|<i>f</i>| ≤ <i>g</i>', '−<i>g</i> ≤ <i>f</i> ≤ <i>g</i>', '<i>g</i> ≥ 0 is forced'],
          ['|<i>f</i>| > <i>g</i>', '<i>f</i> > <i>g</i> <b>or</b> <i>f</i> < −<i>g</i>', 'if <i>g</i> < 0 the union covers everything, correctly'],
          ['|<i>f</i>| ≥ <i>g</i>', '<i>f</i> ≥ <i>g</i> <b>or</b> <i>f</i> ≤ −<i>g</i>', 'if <i>g</i> < 0 the union covers everything, correctly'],
        ],
      },
      {
        t: 'p',
        html: '• <i>f</i>, <i>g</i>: any real expressions in <i>x</i>; no positivity assumption on either.<br>• Read the first row carefully: if −<i>g</i> < <i>f</i> < <i>g</i> holds then −<i>g</i> < <i>g</i>, hence <i>g</i> > 0. You never need to impose “<i>g</i> > 0” as a separate case; solving the double inequality does it for you.<br>• Read the third row the same way: if <i>g</i> happens to be negative then |<i>f</i>| ≥ 0 > <i>g</i> automatically, and the union <i>f</i> > <i>g</i> or <i>f</i> < −<i>g</i> does cover all reals. Again nothing extra to impose.<br>• The <b>“and” versus “or”</b> distinction is what you must get right. The < rows are a double inequality, so the two conditions are <b>intersected</b>. The > rows are a union, so the two conditions are <b>added together</b>.',
      },
      {
        t: 'p',
        html: '<b>Squared forms.</b> Squares are blind to sign, which makes them useful, but only under a guard:',
      },
      {
        t: 'formula',
        kicker: 'Squared forms',
        main: [
          '|<i>f</i>| < <i>g</i> ⟺ <i>f</i><sup>2</sup> < <i>g</i><sup>2</sup> <b>and</b> <i>g</i> > 0',
          '|<i>f</i>| > <i>g</i> ⟺ <i>f</i><sup>2</sup> > <i>g</i><sup>2</sup> <b>or</b> <i>g</i> < 0',
          '|<i>f</i>| < |<i>h</i>| ⟺ <i>f</i><sup>2</sup> < <i>h</i><sup>2</sup> (no condition needed)',
        ].join('<br>'),
        legend: [L_FG, '<i>h</i> = any expression in <i>x</i>'],
        note: null,
      },
      {
        t: 'p',
        html: '• <i>h</i>: any expression in <i>x</i>.<br>• The last result is the free lunch of this topic: <b>when each side is a single modulus, square immediately.</b> The guard clauses are only needed when a bare expression faces a modulus.',
      },
      {
        t: 'p',
        html: '<b>The two-distance results.</b> For real constants <i>a</i> < <i>b</i> and a real constant <i>c</i>:',
      },
      {
        t: 'formula',
        kicker: 'The two-distance results',
        main: [
          '|<i>x</i> − <i>a</i>| + |<i>x</i> − <i>b</i>| ≥ <i>b</i> − <i>a</i><br>(equality exactly on [<i>a</i>, <i>b</i>])',
          `|<i>x</i> − <i>a</i>| + |<i>x</i> − <i>b</i>| ≤ <i>c</i> ⟺ <i>x</i> ∈ [${fr('<i>a</i> + <i>b</i> − <i>c</i>', '2')}, ${fr('<i>a</i> + <i>b</i> + <i>c</i>', '2')}] (when <i>c</i> ≥ <i>b</i> − <i>a</i>)`,
          '|<i>x</i> − <i>a</i>| + |<i>x</i> − <i>b</i>| ≤ <i>c</i> has no solution (when <i>c</i> < <i>b</i> − <i>a</i>)',
        ].join('<br>'),
        legend: [
          '<i>x</i> = any real number',
          '<i>a</i>, <i>b</i> = the two fixed points (<i>a</i> < <i>b</i>)',
          '<i>b</i> − <i>a</i> = the gap between them',
          '<i>c</i> = the bound on the total distance',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '• <i>a</i>, <i>b</i>: the two fixed points; <i>b</i> − <i>a</i> is the gap between them.<br>• <i>c</i>: the bound on the total distance.<br>• The strict version < <i>c</i> gives the corresponding open interval when <i>c</i> > <i>b</i> − <i>a</i>, and ∅ when <i>c</i> ≤ <i>b</i> − <i>a</i>.<br>• <b>Validity condition:</b> the coefficient of <i>x</i> inside each modulus must be exactly 1. This shortcut is a checking tool and a speed weapon, not a replacement for the case-split method.',
      },
      {
        t: 'p',
        html: '<b>Rigor checkpoints.</b><br>• Every modulus inequality answer is a union of intervals; state it in interval notation with the endpoint brackets justified by strict versus non-strict.<br>• A non-strict inequality includes the endpoints where equality holds. Always test them explicitly rather than inheriting them from the algebra.<br>• After any case split, confirm that the pieces you union together are pairwise consistent with their own intervals.',
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      {
        t: 'p',
        html: '<b>Claim.</b> For any real expressions <i>f</i> and <i>g</i>, the statement |<i>f</i>| < <i>g</i> is true precisely when −<i>g</i> < <i>f</i> < <i>g</i> is true.',
      },
      {
        t: 'proc',
        title: 'Derivation: Why |f| < g is exactly −g < f < g, whatever the sign of g',
        steps: [
          '<b>Forward direction.</b> Assume |<i>f</i>| < <i>g</i>.<br>|<i>f</i>| ≥ 0 by definition of modulus. <b>Reason:</b> a modulus is never negative.',
          'Therefore <i>g</i> > |<i>f</i>| ≥ 0, so <i>g</i> > 0. <b>Reason:</b> a number strictly exceeding a non-negative number is positive. This is where the right-hand side earns its positivity: it is a consequence, not an assumption.',
          '<i>f</i> ≤ |<i>f</i>| < <i>g</i>, so <i>f</i> < <i>g</i>. <b>Reason:</b> <i>t</i> ≤ |<i>t</i>| for every real <i>t</i>.',
          '−<i>f</i> ≤ |<i>f</i>| < <i>g</i>, so −<i>f</i> < <i>g</i>, and multiplying by −1 flips it to <i>f</i> > −<i>g</i>. <b>Reason:</b> −<i>t</i> ≤ |<i>t</i>| for every real <i>t</i>, then the sign-flip rule proved in Topic 01.',
          'Steps 3 and 4 together give −<i>g</i> < <i>f</i> < <i>g</i>.',
          '<b>Converse direction.</b> Assume −<i>g</i> < <i>f</i> < <i>g</i>.<br>From <i>f</i> < <i>g</i> and <i>f</i> > −<i>g</i> we get −<i>f</i> < <i>g</i>. <b>Reason:</b> multiply <i>f</i> > −<i>g</i> by −1 and flip.',
          'By definition |<i>f</i>| equals either <i>f</i> or −<i>f</i>. <b>Reason:</b> the two-case definition of modulus.',
          'Both <i>f</i> < <i>g</i> and −<i>f</i> < <i>g</i> hold, so whichever of the two |<i>f</i>| happens to be, |<i>f</i>| < <i>g</i>. ■',
        ],
      },
      {
        t: 'p',
        html: '<b>What the proof buys you.</b> No case analysis on the sign of <i>g</i> is ever required for the < form. Students who split into “<i>g</i> > 0” and “<i>g</i> ≤ 0” branches are doing work the double inequality already does, and they usually mis-handle the second branch. The same argument run with the inequalities reversed establishes the companion result |<i>f</i>| > <i>g</i> ⟺ <i>f</i> > <i>g</i> or <i>f</i> < −<i>g</i>, again for every real <i>g</i>; in that form, a negative <i>g</i> makes the union trivially all of ℝ, which is correct because a modulus always beats a negative number.',
      },
      {
        t: 'proc',
        title: 'Procedure A: A single modulus with a variable right-hand side',
        steps: [
          `<b>Isolate the modulus.</b> Get the inequality into the shape |<i>f</i>(<i>x</i>)| ⋈ <i>g</i>(<i>x</i>) with exactly one modulus term alone on the left. <b>Why:</b> every rule in ${KEY} is stated for that shape; a stray term outside the bars invalidates them.`,
          '<b>Read the direction.</b> < or ≤ means a double inequality and an <b>intersection</b>; > or ≥ means two branches and a <b>union</b>. <b>Why:</b> this single reading decides the shape of your answer, and reversing it produces the complement of the truth.',
          `<b>Write the equivalent form</b> from the table in ${KEY}. <b>Why:</b> these forms are valid for every sign of <i>g</i>, so no separate sign discussion is needed.`,
          '<b>Solve each part as a linear (or polynomial) inequality</b> by the methods of Topic 01 and Topic 04. <b>Why:</b> once the bars are gone, nothing new is happening.',
          '<b>Combine.</b> Intersect for the < family, union for the > family. <b>Why:</b> the double inequality demands both parts simultaneously; the branch form demands only one.',
          '<b>Test the endpoints and one interior point.</b> <b>Why:</b> it costs seconds and catches an inverted direction or a wrong bracket immediately.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: Two or more moduli, the critical-point case split',
        steps: [
          '<b>Find the critical points.</b> Set each modulus argument to zero and solve. <b>Why:</b> these are the only places where a modulus changes its algebraic identity, so between them nothing about the expression’s form changes.',
          '<b>Order them on the number line.</b> With <i>n</i> distinct critical points you obtain <i>n</i> + 1 intervals covering ℝ. <b>Why:</b> the intervals must cover everything, or you will lose solutions.',
          '<b>Build a sign table.</b> One row per modulus argument, one column per interval, entering + or −. <b>Why:</b> the table tells you mechanically whether |<i>u</i>| becomes <i>u</i> or −<i>u</i> in each column, which is where careless work goes wrong.',
          '<b>Rewrite and solve on each interval.</b> In a column where the argument <i>u</i> is negative, replace |<i>u</i>| by −<i>u</i>; where it is positive or zero, replace |<i>u</i>| by <i>u</i>. Solve the resulting modulus-free inequality. <b>Why:</b> on that interval the expression genuinely equals the rewritten one, so the rewritten inequality is exactly equivalent there.',
          '<b>Intersect each case’s solution with that case’s own interval.</b> <b>Why:</b> a value that solves the rewritten inequality but lies outside the interval does not solve the original, because the rewriting was only valid inside. This is the step students skip, and it is worth the whole question.',
          '<b>Union the surviving pieces</b> and merge adjacent intervals into the tidiest form. <b>Why:</b> the cases are exhaustive and disjoint, so every genuine solution appears in exactly one of them.',
        ],
      },
      { t: 'fig', id: 'm11-05-fig-5.7' },
      {
        t: 'p',
        html: `<b>Worked illustration of the routine.</b> Solve |<i>x</i> − 1| + |<i>x</i> + 2| < 5.<br>Critical points: <i>x</i> = 1 and <i>x</i> = −2, splitting ℝ into (−∞, −2), [−2, 1) and [1, ∞).<br>• <b>On (−∞, −2):</b> both arguments are negative, so |<i>x</i> − 1| = 1 − <i>x</i> and |<i>x</i> + 2| = −<i>x</i> − 2. The inequality becomes −2<i>x</i> − 1 < 5, i.e. <i>x</i> > −3. Intersect with (−∞, −2): this gives (−3, −2).<br>• <b>On [−2, 1):</b> <i>x</i> − 1 < 0 and <i>x</i> + 2 ≥ 0, so the sum is (1 − <i>x</i>) + (<i>x</i> + 2) = 3. The inequality reads 3 < 5, which is true regardless of <i>x</i>. Intersect with [−2, 1): all of [−2, 1).<br>• <b>On [1, ∞):</b> both arguments are non-negative, so the sum is 2<i>x</i> + 1 < 5, i.e. <i>x</i> < 2. Intersect with [1, ∞): this gives [1, 2).`,
      },
      {
        t: 'p',
        html: `Union: (−3, −2) ∪ [−2, 1) ∪ [1, 2) = (−3, 2).<br><br>The distance shortcut confirms it in one line: with <i>a</i> = −2, <i>b</i> = 1 and <i>c</i> = 5 > 3 = <i>b</i> − <i>a</i>, the solution is the open interval from ${fr('−2 + 1 − 5', '2')} = −3 to ${fr('−2 + 1 + 5', '2')} = 2.`,
      },
      { t: 'p', html: '<b>Procedure C: Modulus against modulus</b>' },
      {
        t: 'p',
        html: 'When each side is a single modulus with no loose additive terms (for instance |<i>f</i>| < |<i>h</i>|) do not case-split. Square both sides at once, since both are non-negative, and solve <i>f</i><sup>2</sup> − <i>h</i><sup>2</sup> < 0 by factoring the difference of squares and running the wavy curve of Topic 04. <b>Why it is safe:</b> squaring is order-preserving on non-negative numbers, so the equivalence is exact with no guard condition.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Solve |<i>x</i> + 3| < 2<i>x</i> and represent the solution on a number line.',
        fig: 'm11-05-fig-5.8',
        steps: [
          `The right-hand side is 2<i>x</i>, an expression rather than a number, so reach for the general form from the table in ${KEY}:<br>|<i>x</i> + 3| < 2<i>x</i> ⟺ −2<i>x</i> < <i>x</i> + 3 < 2<i>x</i>.<br>This is a double inequality, so both parts must hold at once.`,
          'Left part:<br>−2<i>x</i> < <i>x</i> + 3 ⟹ −3<i>x</i> < 3 ⟹ <i>x</i> > −1<br>(dividing by −3, a negative number, flips the sign: the Topic 01 rule).',
          'Right part:<br><i>x</i> + 3 < 2<i>x</i> ⟹ 3 < <i>x</i> ⟹ <i>x</i> > 3.',
          'Intersect the two, because the double inequality demands both: <i>x</i> > 3, that is <i>x</i> ∈ (3, ∞).',
          '<b>Check.</b> At <i>x</i> = 4: |4 + 3| = 7 and 2(4) = 8, and 7 < 8 holds. At the endpoint <i>x</i> = 3: |6| = 6 and 2(3) = 6, and 6 < 6 is false, so 3 is correctly excluded. At <i>x</i> = 0: |3| = 3 < 0 is false, correctly excluded.',
          'Notice you never had to argue separately that 2<i>x</i> must be positive. It is: every <i>x</i> > 3 makes 2<i>x</i> > 6 > 0. The double inequality enforced it silently.',
        ],
        ans: '<i>x</i> > 3, that is <i>x</i> ∈ (3, ∞).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Solve |<i>x</i> − 3| ≥ <i>x</i>.',
        steps: [
          `The direction is ≥, so the table in ${KEY} gives a <b>union</b> of two branches:<br>|<i>x</i> − 3| ≥ <i>x</i> ⟺ <i>x</i> − 3 ≥ <i>x</i> or <i>x</i> − 3 ≤ −<i>x</i>.`,
          '<b>Branch 1:</b> <i>x</i> − 3 ≥ <i>x</i> ⟹ −3 ≥ 0. This is false for every <i>x</i>, so this branch contributes nothing. (A branch collapsing to a false numerical statement is normal; do not treat it as an error.)',
          `<b>Branch 2:</b> <i>x</i> − 3 ≤ −<i>x</i> ⟹ 2<i>x</i> ≤ 3 ⟹ <i>x</i> ≤ ${H32}.`,
          `Union of the branches: <i>x</i> ∈ (−∞, ${H32}].`,
          `<b>Check.</b> At <i>x</i> = ${H32}: |${H32} − 3| = ${H32} and the right side is ${H32}, so equality holds and the endpoint belongs (the inequality is non-strict). At <i>x</i> = 2: |−1| = 1 ≥ 2 is false, correctly excluded. At <i>x</i> = −5: |−8| = 8 ≥ −5 is true, correctly included.`,
          'That last check is the conceptual pay-off. Every negative <i>x</i> satisfies the inequality automatically, because a modulus is non-negative and therefore already beats a negative right-hand side. The general form handled this for you without a separate case, which is exactly why it is stated for all real <i>g</i>.',
        ],
        ans: `<i>x</i> ∈ (−∞, ${H32}].`,
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: 'Solve |<i>x</i> − 3| < 2<i>x</i> − 5.',
        steps: [
          '<b>The trap: squaring both sides on autopilot.</b> The modulus is annoying, squares are clean, and |<i>x</i> − 3|<sup>2</sup> = (<i>x</i> − 3)<sup>2</sup> is genuinely true, so the temptation is overwhelming:<br>(<i>x</i> − 3)<sup>2</sup> < (2<i>x</i> − 5)<sup>2</sup><br>⟹ <i>x</i><sup>2</sup> − 6<i>x</i> + 9 < 4<i>x</i><sup>2</sup> − 20<i>x</i> + 25<br>⟹ 0 < 3<i>x</i><sup>2</sup> − 14<i>x</i> + 16.',
          `Factoring, 3<i>x</i><sup>2</sup> − 14<i>x</i> + 16 = (<i>x</i> − 2)(3<i>x</i> − 8), whose roots are <i>x</i> = 2 and <i>x</i> = ${E83}; a positive leading coefficient means “> 0 outside the roots”. <b>The seductive wrong answer is (−∞, 2) ∪ (${E83}, ∞).</b>`,
          'It is wrong, and one substitution exposes it. Take <i>x</i> = 0, which sits inside that first interval: the original inequality reads |0 − 3| < 2(0) − 5, that is 3 < −5. False. A distance can never be less than a negative number, yet the squaring “solution” hands you an entire infinite interval of such values. Squaring destroyed the sign information: it turns the false 3 < −5 into the true 3<sup>2</sup> < (−5)<sup>2</sup>.',
          '<b>The correct solution.</b> Use the equivalence, which is valid whatever the sign of 2<i>x</i> − 5:<br>|<i>x</i> − 3| < 2<i>x</i> − 5<br>⟺ −(2<i>x</i> − 5) < <i>x</i> − 3 < 2<i>x</i> − 5.',
          `Left part:<br>−2<i>x</i> + 5 < <i>x</i> − 3 ⟹ 8 < 3<i>x</i> ⟹ <i>x</i> > ${E83}.`,
          'Right part:<br><i>x</i> − 3 < 2<i>x</i> − 5 ⟹ 2 < <i>x</i>.',
          `Intersecting, <i>x</i> > ${E83} (since ${E83} > 2): <i>x</i> ∈ (${E83}, ∞).`,
          `<b>Check.</b> At <i>x</i> = 3: |0| = 0 < 1, true. At <i>x</i> = 2.7: |−0.3| = 0.3 < 0.4, true. At <i>x</i> = 2.6: 0.4 < 0.2, false, correctly excluded, and note 2.6 < ${E83} ≈ 2.667. At the endpoint <i>x</i> = ${E83}: both sides equal ${fr('1', '3')}, so strict inequality fails and the endpoint is correctly open.`,
          `<b>Naming the trap:</b> squaring without the sign guard, and trusting the result. If you do want to square, you must carry the guard: |<i>f</i>| < <i>g</i> is equivalent to <i>f</i><sup>2</sup> < <i>g</i><sup>2</sup> <b>and</b> <i>g</i> > 0. Here <i>g</i> > 0 means 2<i>x</i> − 5 > 0, i.e. <i>x</i> > ${fr('5', '2')}. Intersecting that with (−∞, 2) ∪ (${E83}, ∞) kills the spurious branch and returns (${E83}, ∞), the right answer. The squaring route is legal; it is simply never legal alone.`,
        ],
        ans: `<i>x</i> ∈ (${E83}, ∞).`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Solve |<i>x</i> − 2| + |2<i>x</i> + 3| ≤ 7, and state how many integers satisfy it.',
        steps: [
          'Two moduli, and the second has a coefficient of 2 inside, so the two-distance shortcut does not apply and the case split is mandatory.',
          `<b>Step 1: critical points.</b> <i>x</i> − 2 = 0 gives <i>x</i> = 2; 2<i>x</i> + 3 = 0 gives <i>x</i> = −${H32}. Note carefully that the second critical point is −${H32}, not −3.`,
          `<b>Step 2: the three intervals.</b> (−∞, −${H32}), [−${H32}, 2), [2, ∞).`,
          `<b>Step 3: sign table.</b><br>Interval: sign of <i>x</i> − 2, sign of 2<i>x</i> + 3; expression becomes<br>(−∞, −${H32}): −, −;<br>(2 − <i>x</i>) + (−2<i>x</i> − 3) = −3<i>x</i> − 1<br>[−${H32}, 2): −, +;<br>(2 − <i>x</i>) + (2<i>x</i> + 3) = <i>x</i> + 5<br>[2, ∞): +, +;<br>(<i>x</i> − 2) + (2<i>x</i> + 3) = 3<i>x</i> + 1`,
          `<b>Step 4 and 5: solve on each interval and intersect.</b><br>• <b>Case A, <i>x</i> < −${H32}:</b> −3<i>x</i> − 1 ≤ 7 ⟹ −3<i>x</i> ≤ 8 ⟹ <i>x</i> ≥ −${E83} (dividing by −3 flips). Intersecting with <i>x</i> < −${H32} gives [−${E83}, −${H32}), since −${E83} ≈ −2.67 < −1.5.<br>• <b>Case B, −${H32} ≤ <i>x</i> < 2:</b> <i>x</i> + 5 ≤ 7 ⟹ <i>x</i> ≤ 2. Every point of the interval already satisfies this, so Case B contributes all of [−${H32}, 2).<br>• <b>Case C, <i>x</i> ≥ 2:</b> 3<i>x</i> + 1 ≤ 7 ⟹ <i>x</i> ≤ 2. Intersecting with <i>x</i> ≥ 2 leaves the single point {2}.`,
          `<b>Step 6: union.</b><br>[−${E83}, −${H32}) ∪ [−${H32}, 2) ∪ {2}<br>= [−${E83}, 2].`,
          `<b>Integer count.</b> Since −${E83} ≈ −2.67, the integers in [−${E83}, 2] are −2, −1, 0, 1, 2: <b>five integers</b>.`,
          `<b>Check.</b> At <i>x</i> = −${E83}: |−${E83} − 2| = ${fr('14', '3')} and |2(−${E83}) + 3| = |−${fr('7', '3')}| = ${fr('7', '3')}; the sum is ${fr('21', '3')} = 7, so equality holds and the endpoint belongs. At <i>x</i> = 2: 0 + 7 = 7, equality again. At <i>x</i> = −3: 5 + 3 = 8 > 7, correctly excluded. At <i>x</i> = 3: 1 + 9 = 10 > 7, correctly excluded.`,
          '<b>Why it is Advanced-level:</b> three separate traps fire in one question. The critical point of |2<i>x</i> + 3| is a fraction, not the visible integer. Case C looks empty but yields a lone boundary point that the final interval needs. And Case B’s inequality is satisfied identically, which students misread as “no solutions here” rather than “all of this interval.” Miss any one and both the interval and the integer count come out wrong.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: '[CBSE] Solve |<i>x</i> + 2| ≤ 3<i>x</i> and write the answer in interval notation.', a: '[1, ∞).' },
          { q: '[JEE Main] Solve |2<i>x</i> − 1| > <i>x</i> + 3.', a: `(−∞, −${fr('2', '3')}) ∪ (4, ∞).` },
          { q: '[JEE Main] Solve |<i>x</i> − 5| ≥ <i>x</i> − 1.', a: '(−∞, 3].' },
          { q: '[JEE Main] Solve |<i>x</i>| + |<i>x</i> − 3| ≤ 5.', a: '[−1, 4].' },
          { q: '[JEE Main] Solve |<i>x</i> + 1| − |<i>x</i> − 2| > 1.', a: '(1, ∞).' },
          {
            q: '[JEE Advanced] Find the solution set of |<i>x</i> − 1| + |<i>x</i> + 3| ≤ 8 and the number of integers in it.',
            a: '[−5, 3]; 9 integers.',
          },
          {
            q: '[JEE Advanced] Solve |<i>x</i> − 1| + |<i>x</i> − 3| < 1.',
            a: '∅: the two points are 2 apart, so the sum of distances is never below 2, let alone below 1.',
          },
          {
            q: '[JEE Advanced] Solve |<i>x</i> − 1| < |<i>x</i> + 3|.',
            a: '(−1, ∞): both sides are moduli, so square directly: (<i>x</i> − 1)<sup>2</sup> < (<i>x</i> + 3)<sup>2</sup> reduces to −8<i>x</i> < 8.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The solution set of |<i>x</i> − 2| < <i>x</i> is',
        opts: [
          { label: '(1, ∞)', nudge: null },
          {
            label: '(−∞, 1)',
            nudge: '<b>(b)</b> comes from mis-solving −<i>x</i> < <i>x</i> − 2 as <i>x</i> < 1: the sign-flip error of Topic 01 applied to the left half of the double inequality.',
          },
          {
            label: '(1, 2)',
            nudge: '<b>(c)</b> comes from assuming that because the direction is “<”, the answer must be a bounded interval, and closing it off at the critical point <i>x</i> = 2. The “less than locks you in” mnemonic describes a constant right-hand side; with a variable right-hand side one of the two bounds can be vacuous.',
          },
          {
            label: 'all real <i>x</i> except 2',
            nudge: '<b>(d)</b> is the solution of |<i>x</i> − 2| > 0: it drops the right-hand side <i>x</i> and only removes the point <i>x</i> = 2 where the modulus vanishes.',
          },
        ],
        correct: 0,
        solution: 'Write −<i>x</i> < <i>x</i> − 2 < <i>x</i>. The left part gives 2 < 2<i>x</i>, i.e. <i>x</i> > 1; the right part gives −2 < 0, true for every <i>x</i>. Intersecting leaves <i>x</i> > 1.',
      },
      {
        t: 'mcq',
        q: 'The number of integers satisfying |<i>x</i>| + |<i>x</i> − 4| ≤ 6 is',
        opts: [
          {
            label: '5',
            nudge: '<b>(a)</b> 5 comes from solving only the middle case and counting the integers 0 through 4: the classic failure to examine the outer intervals at all.',
          },
          {
            label: '6',
            nudge: '<b>(b)</b> 6 comes from assuming <i>x</i> ≥ 0 because moduli are involved, which loses the interval [−1, 0) and with it the integer −1, leaving [0, 5].',
          },
          { label: '7', nudge: null },
          {
            label: '9',
            nudge: '<b>(d)</b> 9 comes from splitting the sum into two separate bounds, |<i>x</i>| ≤ 6 and |<i>x</i> − 4| ≤ 6, and intersecting [−6, 6] with [−2, 10] to get [−2, 6]. A sum of two moduli cannot be bounded term by term.',
          },
        ],
        correct: 2,
        solution: 'Critical points 0 and 4. For <i>x</i> < 0: −<i>x</i> + (4 − <i>x</i>) = 4 − 2<i>x</i> ≤ 6 gives <i>x</i> ≥ −1, so [−1, 0). For 0 ≤ <i>x</i> < 4: the sum is exactly 4 ≤ 6, true throughout. For <i>x</i> ≥ 4: 2<i>x</i> − 4 ≤ 6 gives <i>x</i> ≤ 5, so [4, 5]. The solution set is [−1, 5], containing the integers −1, 0, 1, 2, 3, 4, 5, seven of them.',
      },
      {
        t: 'mcq',
        q: 'If |<i>x</i> − 1| ≥ 2<i>x</i> + 1, then <i>x</i> belongs to',
        opts: [
          {
            label: '(−∞, −2]',
            nudge: '<b>(a)</b> keeps only the first branch: the reader stopped after one case and never wrote the “or” half.',
          },
          { label: '(−∞, 0]', nudge: null },
          {
            label: '[−2, 0]',
            nudge: '<b>(c)</b> takes the two branch boundaries −2 and 0 as the ends of one bounded interval, the “less than locks you in” reflex, wrongly applied to a “≥” inequality.',
          },
          {
            label: '[0, ∞)',
            nudge: '<b>(d)</b> comes from solving 3<i>x</i> ≤ 0 as <i>x</i> ≥ 0, a sign slip in the final division.',
          },
        ],
        correct: 1,
        solution: 'The ≥ form gives two branches. Branch 1: <i>x</i> − 1 ≥ 2<i>x</i> + 1 ⟹ −2 ≥ <i>x</i>, so <i>x</i> ≤ −2. Branch 2: <i>x</i> − 1 ≤ −(2<i>x</i> + 1) ⟹ 3<i>x</i> ≤ 0, so <i>x</i> ≤ 0. The union of (−∞, −2] and (−∞, 0] is (−∞, 0].',
      },
      {
        t: 'mcq',
        q: 'The number of real values of <i>x</i> satisfying |<i>x</i> − 3| + |<i>x</i> − 6| < 2 is',
        opts: [
          {
            label: 'exactly one',
            nudge: '<b>(a)</b> comes from testing only the midpoint <i>x</i> = 4.5, where the sum is 1.5 + 1.5 = 3, and mis-recording it as a success.',
          },
          {
            label: 'infinitely many',
            nudge: '<b>(b)</b> is what you get by case-splitting and then failing to intersect each case with its own interval. On <i>x</i> < 3 the inequality becomes 9 − 2<i>x</i> < 2, i.e. <i>x</i> > 3.5, inconsistent with <i>x</i> < 3, so it must be discarded. On <i>x</i> ≥ 6 it becomes 2<i>x</i> − 9 < 2, i.e. <i>x</i> < 5.5, again inconsistent. Keeping both un-intersected gives “<i>x</i> > 3.5 or <i>x</i> < 5.5”, which is all of ℝ. This is the most damaging error in the topic and it produces an answer that looks confident.',
          },
          { label: 'none', nudge: null },
          {
            label: 'exactly two',
            nudge: '<b>(d)</b> reports the two case boundaries 3.5 and 5.5 as though they were solutions; substituting <i>x</i> = 3.5 gives 0.5 + 2.5 = 3, which is not less than 2.',
          },
        ],
        correct: 2,
        solution: 'The points 3 and 6 are 3 apart, so |<i>x</i> − 3| + |<i>x</i> − 6| ≥ 3 for every real <i>x</i>. A quantity that is never below 3 can never be below 2. The solution set is empty.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Squaring a modulus inequality without the sign guard.</b> |<i>f</i>| < <i>g</i> is not <i>f</i><sup>2</sup> < <i>g</i><sup>2</sup>. The correct statement carries a companion condition: <i>f</i><sup>2</sup> < <i>g</i><sup>2</sup> <b>and</b> <i>g</i> > 0. Drop the guard and you import an entire interval of false solutions, as the third worked example shows.',
          '<b>Forgetting to intersect a case with its own interval.</b> When you replace |<i>x</i> − 1| by 1 − <i>x</i> you have assumed <i>x</i> < 1; any solution you then find is only real if it also satisfies <i>x</i> < 1. Write the interval beside each case before you start solving it, so the intersection is impossible to forget.',
          '<b>Confusing “and” with “or”.</b> The < family produces a double inequality whose two halves are intersected; the > family produces two branches that are unioned. Reversing this returns the complement of the correct answer: a full-mark loss that looks like a small slip.',
          `<b>Taking the critical point from the constant rather than the argument.</b> |2<i>x</i> + 3| switches at <i>x</i> = −${H32}; |3 − 4<i>x</i>| switches at <i>x</i> = ${fr('3', '4')}. Always solve “argument = 0” in writing.`,
          '<b>Panicking at a case that collapses.</b> A case reducing to −3 ≥ 0 contributes nothing and a case reducing to 3 < 5 contributes its entire interval. Both are ordinary outcomes, not signals that something has gone wrong.',
          '<b>Losing endpoints under a non-strict sign.</b> With ≤ or ≥, every value where the two sides are equal belongs to the answer, including isolated points such as the {2} that Case C contributed in the fourth worked example.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: read two moduli as distances before writing anything.</b> For |<i>x</i> − <i>a</i>| + |<i>x</i> − <i>b</i>| with unit coefficients, the minimum value is |<i>a</i> − <i>b</i>|, achieved everywhere between <i>a</i> and <i>b</i>. So |<i>x</i> − 4| + |<i>x</i> − 9| < 3 is empty on sight, and |<i>x</i> − 4| + |<i>x</i> − 9| ≤ 11 solves instantly to<br>[${fr('4 + 9 − 11', '2')}, ${fr('4 + 9 + 11', '2')}] = [1, 12].<br>In a timed paper this converts a four-line case split into a five-second read. Use it to check your case-split answer even when the coefficients are not 1; the shortcut will not apply, but the minimum still sits at one of the critical points, so evaluating the sum there tells you whether an empty answer is plausible.`,
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip: the endpoint audit.</b> Every modulus answer has endpoints where the two sides are exactly equal. Substitute each one into the original inequality and decide inclusion from that substitution, never from the shape of your last algebraic line. This single habit fixes almost every bracket error in this topic.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Meaning',
            note: '|<i>x</i> − <i>a</i>| is the distance from <i>x</i> to <i>a</i>; |<i>x</i>| ≥ 0 always, and √<i>x</i><sup>2</sup> = |<i>x</i>|.',
          },
          {
            f: 'Variable right-hand side (valid for every real <i>g</i>, no side conditions)',
            note: '|<i>f</i>| < <i>g</i> ⟺ −<i>g</i> < <i>f</i> < <i>g</i> (<b>and</b>: intersect)<br>|<i>f</i>| > <i>g</i> ⟺ <i>f</i> > <i>g</i> or <i>f</i> < −<i>g</i> (<b>or</b>: union)<br>Non-strict versions replace < by ≤ and > by ≥ throughout.',
          },
          {
            f: 'Squaring',
            note: '|<i>f</i>| < <i>g</i> ⟺ <i>f</i><sup>2</sup> < <i>g</i><sup>2</sup> <b>and</b> <i>g</i> > 0.<br>|<i>f</i>| > <i>g</i> ⟺ <i>f</i><sup>2</sup> > <i>g</i><sup>2</sup> <b>or</b> <i>g</i> < 0.<br>But |<i>f</i>| < |<i>h</i>| ⟺ <i>f</i><sup>2</sup> < <i>h</i><sup>2</sup> with no guard: when each side is a single modulus, square at once.',
          },
          {
            f: 'Two or more moduli, case split',
            note: 'critical points from each argument = 0 → order them into <i>n</i> + 1 intervals → sign table → drop the bars on each interval → <b>intersect each case’s answer with its own interval</b> → union.',
          },
          {
            f: 'Distance shortcut (unit coefficients only, <i>a</i> < <i>b</i>)',
            note: `|<i>x</i> − <i>a</i>| + |<i>x</i> − <i>b</i>| ≥ <i>b</i> − <i>a</i> always. For <i>c</i> ≥ <i>b</i> − <i>a</i>, |<i>x</i> − <i>a</i>| + |<i>x</i> − <i>b</i>| ≤ <i>c</i> solves to<br>[${fr('<i>a</i> + <i>b</i> − <i>c</i>', '2')}, ${fr('<i>a</i> + <i>b</i> + <i>c</i>', '2')}];<br>for <i>c</i> < <i>b</i> − <i>a</i> the solution is ∅.`,
          },
          {
            f: 'Endpoints',
            note: 'decide inclusion by substituting into the original inequality, not by inspecting the last line of algebra.',
          },
        ],
        aids: [
          '“Less-than is an <b>and</b>, greater-than is an <b>or</b>.”',
          '“Square only with a guard; modulus against modulus needs no guard.”',
          '“Every case must go home to its own interval.”',
        ],
      },
    ],
  },
];
