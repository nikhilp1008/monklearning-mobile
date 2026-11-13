import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 12, Additional topics A–B, pp. 1114–1123 of the Class 11 Mathematics
 * Master Reference (October 2026 edition), word for word: the supplement's
 * Addenda A "Derivatives from Functional Equations" (pp. 1114–1118) and B
 * "Finding Constants for Differentiability at a Junction" (pp. 1118–1123),
 * lettered A–B (decision 37). Addendum A starts below Topic 06's cheat sheet on
 * p. 1114 (that cheat sheet is in topic-06.ts). Each topic opens with its
 * "(extends Subtopic 03 …)" line and its Exam Relevance box (the "Exam
 * relevance" part), then the book's own run-in headings. B's closing "CHEAT
 * SHEET — DIFFERENTIABILITY AT A JUNCTION" is the part "Cheat sheet" (box title
 * not copied). Figure 12.9 (caption p. 1119, drawn p. 1120) closes B's first
 * section, where its caption is printed. No unnumbered drawings. Piecewise
 * functions (the book's brace) are written one piece per line, as Chapter 2.
 * Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const lim = (s: string) => `lim<sub>${s}</sub>`;
/** A no-break space: keeps a short expression on one line. */
const NB = ' ';

const x = '<i>x</i>';
const y = '<i>y</i>';
const h = '<i>h</i>';
const a = '<i>a</i>';
const b = '<i>b</i>';
const c = '<i>c</i>';
const t = '<i>t</i>';
const e = '<i>e</i>';
const C = '<i>C</i>';
const f = (s: string) => `<i>f</i>(${s})`;
const fp = (s: string) => `<i>f</i>′(${s})`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const rel = (l: string, op: string, r: string) => `${l}${NB}${op}${NB}${r}`;

const F = '<i>f</i>';
const fx = f(x);
const fpx = fp(x);
const X2 = sq(x);
const H0 = lim(`${h}→0`);
const DQ = fr(`${f(`${x} + ${h}`)} − ${fx}`, h);
const DQ0 = fr(`${f(h)} − ${f('0')}`, h);
const DQ1 = fr(`${f(h)} − 1`, h);
const HX = fr(h, x);
const F1HX = f(`1 + ${HX}`);
const HALF = fr('1', '2');
const THREE2 = fr('3', '2');
const D = fr('<i>d</i>', '<i>dx</i>');
const XYPOS = `${x},${NB}${y}${NB}>${NB}0`;
const AB = `(${a},${NB}${b})`;
const L1M = lim(`${x}→1<sup>−</sup>`);
const L1P = lim(`${x}→1<sup>+</sup>`);
const LCM = lim(`${x}→${c}<sup>−</sup>`);
const LCP = lim(`${x}→${c}<sup>+</sup>`);
const LH0P = lim(`${h}→0<sup>+</sup>`);
const TAG = (s: string) => `${NB}${NB}${NB}(${s})`;
const PIECE = (rule: string, cond: string) => `${fx} = ${rule},${NB}${NB}${cond}`;
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 1114–1118 ────────────────
  {
    n: 'A',
    title: 'Derivatives from Functional Equations',
    extra: true,
    kalam: 'In a functional-equation problem you are given no formula: only a rule that f obeys, such as f(x + y) = f(x)f(y) for all real x and y.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      { t: 'p', html: '(extends Topic 03: Derivatives and First Principle)' },
      {
        t: 'p',
        html: `CBSE Boards do not test this. JEE Main asks it as a one-step application: you are handed the functional equation and ${fp('0')}, and must produce ${fpx}. JEE Advanced builds full problems on it: identify ${F} from the equation, then answer a question about its roots, its range or a further derivative.`,
      },

      { t: 'part', title: 'Why the standard rules are useless here' },
      {
        t: 'p',
        html: `Every rule in Topic 04 needs an explicit formula for ${F}. In a functional-equation problem you are given no formula: only a rule that ${F} obeys, such as ${f(`${x} + ${y}`)} = ${fx}${f(y)} for all real ${x} and ${y}. The rules have nothing to act on.`,
      },
      {
        t: 'p',
        html: `The first principle, by contrast, needs only the ability to say something about ${f(`${x} + ${h}`)}. And that is precisely what a functional equation gives you: it lets you <b>split ${f(`${x} + ${h}`)} into a piece involving ${x} and a piece involving ${h}</b>. Once the ${x}-part is factored or added out, the surviving ${h}-limit is a pure number (almost always ${fp('0')} or ${fp('1')}) and the whole derivative collapses.`,
      },
      {
        t: 'p',
        html: `<b>The master move.</b> Start from<br>${fpx} = ${H0} ${DQ},<br>substitute the functional equation into ${f(`${x} + ${h}`)}, and arrange the result so that everything depending on ${x} comes outside the limit.`,
      },

      { t: 'part', title: 'Procedure' },
      {
        t: 'proc',
        title: 'Procedure: solving a functional-equation derivative problem',
        steps: [
          `<b>Find ${f('0')} (additive-type) or ${f('1')} (multiplicative-type) by substituting convenient values.</b> Typically ${x} = ${y} = 0 or ${x} = ${y} = 1. <b>Why:</b> the limit you are about to build is a derivative at that anchor point, so you must know the function’s value there.`,
          `<b>Discard the trivial solution.</b> Equations like ${f('0')} = ${f('0')}<sup>2</sup> give ${f('0')} ∈ {0, 1}; the branch ${f('0')} = 0 usually forces ${F} ≡ 0. Say so explicitly and move on. <b>Why:</b> examiners award the case discussion, and skipping it leaves the solution logically incomplete.`,
          `<b>Write the first principle and substitute the functional equation into ${f(`${x} + ${h}`)}.</b> <b>Why:</b> this is the only step that uses the given information.`,
          `<b>Factor or subtract out everything involving ${x}.</b> <b>Why:</b> what remains is a constant that the problem has told you (or that you can name as ${fp('0')} or ${fp('1')}).`,
          `<b>Recognise the surviving limit as a derivative at the anchor point</b>, using ${f('0')} or ${f('1')} from step 1. <b>Why:</b><br>${H0} ${DQ0} is literally ${fp('0')} by definition (Topic 03).`,
          `<b>Solve the resulting relation for ${F} if the question asks for the function itself.</b> <b>Why:</b> the four standard families below have known answers you can quote and then verify by substitution.`,
        ],
      },

      { t: 'part', title: 'The four standard families' },
      {
        t: 'table',
        title: null,
        head: ['Functional equation', 'Anchor value', 'Derivative relation', 'The function'],
        rows: [
          [
            `${f(`${x} + ${y}`)} = ${fx} + ${f(y)}`,
            `${f('0')} = 0`,
            `${fpx} = ${fp('0')}`,
            `${fx} = <i>kx</i>, <i>k</i> = ${fp('0')}`,
          ],
          [
            `${f(`${x} + ${y}`)} = ${fx}${NB}${f(y)}`,
            `${f('0')} = 1 (non-trivial)`,
            `${fpx} = ${fp('0')}${NB}${fx}`,
            `${fx} = ${e}<sup><i>kx</i></sup>, <i>k</i> = ${fp('0')}`,
          ],
          [
            `${f('<i>xy</i>')} = ${fx} + ${f(y)},<br>${XYPOS}`,
            `${f('1')} = 0`,
            `${fpx} = ${fr(fp('1'), x)}`,
            `${fx} = ${c} ln ${x},<br>${c} = ${fp('1')}`,
          ],
          [
            `${f('<i>xy</i>')} = ${fx}${NB}${f(y)},<br>${XYPOS}`,
            `${f('1')} = 1 (non-trivial)`,
            `${fpx} = ${fr(`${fp('1')}${NB}${fx}`, x)}`,
            `${fx} = ${x}<sup><i>n</i></sup>, <i>n</i> = ${fp('1')}`,
          ],
        ],
      },
      {
        t: 'formula',
        kicker: 'The four standard functional equations',
        main: `${f(`${x} + ${y}`)} = ${fx} + ${f(y)}: ${fpx} = ${fp('0')}, ${fx} = <i>kx</i><br>${f(`${x} + ${y}`)} = ${fx}${NB}${f(y)}: ${fpx} = ${fp('0')}${NB}${fx}, ${fx} = ${e}<sup><i>kx</i></sup><br>${f('<i>xy</i>')} = ${fx} + ${f(y)}: ${fpx} = ${fr(fp('1'), x)}, ${fx} = ${c}${NB}ln${NB}${x}<br>${f('<i>xy</i>')} = ${fx}${NB}${f(y)}: ${fpx} = ${fr(`${fp('1')}${NB}${fx}`, x)}, ${fx} = ${x}<sup><i>n</i></sup>`,
        legend: [`<i>k</i> = the constant ${fp('0')}`, `${c}, <i>n</i> = the constant ${fp('1')}`, `${x}, ${y} = any reals (positive in the last two)`, `${F} = the function (differentiable, not identically zero)`],
        note: null,
      },
      {
        t: 'p',
        html: 'Each row assumes <i>f</i> is differentiable where stated. Learn the derivative-relation column, not the last one: the derivative relation is what questions actually ask for, and it is what you can rebuild from first principle in twenty seconds if memory fails.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'A1: JEE Main Level',
        q: `Let ${F} ∶ ℝ → ℝ satisfy ${f(`${x} + ${y}`)} = ${fx}${NB}${f(y)} for all ${x}, ${y} ∈ ℝ, with ${rel(fx, '≠', '0')} for every ${x}, and suppose ${F} is differentiable at ${x} = 0 with ${fp('0')} = 2. Find ${fpx}, and hence ${fp('3')}.`,
        steps: [
          `<b>Step 1: Anchor value.</b> Put ${x} = ${y} = 0: ${f('0')} = ${f('0')}<sup>2</sup>, so ${f('0')} = 0 or ${f('0')} = 1. If ${f('0')} = 0, then for any ${x}, ${fx} = ${f(`${x} + 0`)} = ${fx}${f('0')} = 0, contradicting ${rel(fx, '≠', '0')}. Hence ${f('0')} = 1.`,
          `<b>Step 2: First principle with the equation substituted.</b><br>${fpx} = ${H0} ${DQ}<br><br>= ${H0} ${fr(`${fx}${f(h)} − ${fx}`, h)}.`,
          `<b>Step 3: Factor out the ${x}-part.</b> ${fx} does not depend on ${h}, so it comes outside:<br>${fpx} = ${fx} ${H0} ${DQ1}.`,
          `<b>Step 4: Recognise the surviving limit.</b> Since ${f('0')} = 1,<br>${H0} ${DQ1}<br><br>= ${H0} ${DQ0} = ${fp('0')} = 2.`,
          `<b>Step 5: Conclude.</b><br>${fpx} = 2${NB}${fx} for every ${x},<br>so ${fp('3')} = 2${f('3')}.`,
          `<b>Step 6: Identify ${F}.</b> The relation ${fpx} = 2${fx} with ${f('0')} = 1 is satisfied by ${fx} = ${e}<sup>2<i>x</i></sup> (check: ${f(`${x} + ${y}`)} = ${e}<sup>2<i>x</i>+2<i>y</i></sup> = ${e}<sup>2<i>x</i></sup>${e}<sup>2<i>y</i></sup> = ${fx}${f(y)}, and ${fp('0')} = 2). Hence<br>${fp('3')} = 2${e}<sup>6</sup>.`,
          `<b>Deep point.</b> Read step 3 again. You were told ${F} is differentiable only at 0: nothing was assumed anywhere else. Yet the calculation produced a finite ${fpx} at every ${x}. The functional equation propagates differentiability across the whole line. That observation is itself a favourite Advanced-level assertion-reason question ${ESTIMATE}.`,
        ],
        ans: `${fp('3')} = 2${e}<sup>6</sup>.`,
      },
      {
        t: 'ex',
        tag: 'A2: JEE Advanced Level',
        q: `A differentiable function ${F} ∶ ℝ → ℝ satisfies<br>${f(`${x} + ${y}`)} = ${fx} + ${f(y)} + 2<i>xy</i> − 1 for all ${x}, ${y} ∈ ℝ,<br>and ${fp('0')} = ${a}. Find ${fx}, and determine all values of ${a} for which the equation ${fx} = 0 has real roots.`,
        steps: [
          `<b>Step 1: Anchor value.</b> Put ${x} = ${y} = 0: ${f('0')} = 2${f('0')} − 1, hence ${f('0')} = 1.`,
          `<b>Step 2: First principle.</b><br>${fpx} = ${H0} ${DQ}<br><br>= ${H0} ${fr(`[${fx} + ${f(h)} + 2<i>xh</i> − 1] − ${fx}`, h)}.`,
          `<b>Step 3: Cancel and split.</b> The ${fx} terms cancel:<br>${fpx} = ${H0}${NB}${fr(`${f(h)} − 1 + 2<i>xh</i>`, h)}<br><br>= ${H0} ${DQ0} + ${H0} 2${x}<br><br>= ${fp('0')} + 2${x},<br>using ${f('0')} = 1 from step 1 and the algebra of limits from Topic 01.`,
          `<b>Step 4: Integrate the derivative back</b> (antidifferentiation, from Class 12). So ${fpx} = 2${x} + ${a}. A function whose derivative is 2${x} + ${a} is ${X2} + <i>ax</i> + ${C} for a constant ${C}; the condition ${f('0')} = 1 forces ${C} = 1. Therefore<br>${fx} = ${X2} + <i>ax</i> + 1.`,
          `<b>Step 5: Verify against the original equation</b> (never skip this on a constructed answer):<br>${fx} + ${f(y)} + 2<i>xy</i> − 1<br>= (${X2} + <i>ax</i> + 1) + (${sq(y)} + <i>ay</i> + 1) + 2<i>xy</i> − 1<br>= ${X2} + 2<i>xy</i> + ${sq(y)} + ${a}(${x} + ${y}) + 1,<br>which is exactly (${x} + ${y})<sup>2</sup> + ${a}(${x} + ${y}) + 1 = ${f(`${x} + ${y}`)}. The identity holds for all ${x}, ${y}.`,
          `<b>Step 6: Answer the root question.</b> ${X2} + <i>ax</i> + 1 = 0 has real roots precisely when its discriminant is non-negative:`,
        ],
        ans: `${sq(a)} − 4 ≥ 0 ⟺ |${a}| ≥ 2<br>⟺ ${a} ∈ (−∞, −2] ∪ [2, ∞).`,
      },
      {
        t: 'ex',
        tag: 'A3: JEE Advanced Level',
        q: `Let ${F} be differentiable on (0, ∞) and satisfy ${f('<i>xy</i>')} = ${fx} + ${f(y)} for all ${XYPOS}, with ${fp('1')} = 2. Find ${fpx} and the value of ${f(`${e}<sup>2</sup>`)}.`,
        steps: [
          `<b>Step 1: Anchor value.</b> Put ${x} = ${y} = 1: ${f('1')} = 2${f('1')}, so ${f('1')} = 0.`,
          `<b>Step 2: Engineer a product inside ${F}.</b> The equation splits products, not sums, so rewrite the increment as a multiplicative one. For ${rel(x, '>', '0')} and ${h} small,<br>${x} + ${h} = ${x}(1 + ${HX})<br><br>⟹ ${f(`${x} + ${h}`)} = ${fx} + ${F1HX}.<br><br>This is the whole trick of the multiplicative families: turn ${x} + ${h} into ${x} times something near 1.`,
          `<b>Step 3: First principle.</b> Write ${t} = ${HX}, so that ${h} = ${x}${t}, and ${t} → 0 as ${h} → 0:<br>${fpx} = ${H0} ${DQ}<br><br>= ${lim(`${t}→0`)} ${fr(f(`1 + ${t}`), `${x}${t}`)}.`,
          `<b>Step 4: Match the increment to the denominator.</b> Take ${fr('1', x)} outside (a constant as far as ${t} is concerned), and use ${f('1')} = 0:<br>${fpx} = ${fr('1', x)} ${lim(`${t}→0`)} ${fr(`${f(`1 + ${t}`)} − ${f('1')}`, t)}.`,
          `The limit is the definition of the derivative of ${F} at 1:<br>${fpx} = ${fr(fp('1'), x)} = ${fr('2', x)}.`,
          `<b>Step 5: Recover ${F} and evaluate.</b> A function on (0, ∞) with derivative ${fr('2', x)} is 2${NB}ln ${x} + ${C}, and ${f('1')} = 0 gives ${C} = 0. So ${fx} = 2${NB}ln ${x}, which indeed satisfies ${f('<i>xy</i>')} = 2${NB}ln(<i>xy</i>) = 2${NB}ln ${x} + 2${NB}ln ${y} = ${fx} + ${f(y)}. Hence`,
        ],
        ans: `${f(`${e}<sup>2</sup>`)} = 2${NB}ln ${e}<sup>2</sup> = 4.`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[JEE Main] ${f(`${x} + ${y}`)} = ${fx} + ${f(y)} for all real ${x}, ${y}, and ${F} is differentiable at 0 with ${fp('0')} = 5. Find ${fx} and ${f('3')}.`,
            a: `${fx} = 5${x}; ${f('3')} = 15.`,
          },
          {
            q: `[JEE Main] ${f(`${x} + ${y}`)} = ${fx}${f(y)} for all real ${x}, ${y}, ${rel(fx, '≠', '0')}, ${f('1')} = 3 and ${fp('0')} = ln${NB}3. Find ${fp('2')}.`,
            a: `${fx} = 3<sup><i>x</i></sup>, so ${fp('2')} = 9${NB}ln${NB}3.`,
          },
          {
            q: `[JEE Main] ${f(`${x} + ${y}`)} = ${fx} + ${f(y)} + 3<i>xy</i> for all real ${x}, ${y}, ${F} differentiable with ${fp('0')} = 2. Find ${fpx} and ${f('2')}.`,
            a: `${fpx} = 3${x} + 2; ${fx} = ${THREE2}${X2} + 2${x}, so ${f('2')} = 10.`,
          },
          {
            q: `[JEE Advanced] ${f('<i>xy</i>')} = ${fx} + ${f(y)} for all ${XYPOS}, ${F} differentiable with ${fp('1')} = −1. Find ${fpx} and ${f(fr('1', e))}.`,
            a: `${fpx} = −${fr('1', x)}; ${fx} = −ln ${x}, so ${f(fr('1', e))} = 1.`,
          },
          {
            q: `[JEE Advanced] ${f('<i>xy</i>')} = ${fx}${f(y)} for all ${XYPOS}, ${F} differentiable and not identically zero, with ${fp('1')} = 3. Find ${fx} and ${fp('2')}.`,
            a: `${fx} = ${x}<sup>3</sup>; ${fp('2')} = 12.`,
          },
        ],
      },

      { t: 'part', title: 'Pitfalls' },
      {
        t: 'mistakes',
        items: [
          `<b>Forgetting to establish ${f('0')} or ${f('1')} first.</b> Without it you cannot convert ${H0} ${DQ1} into ${fp('0')}, and the solution stalls at an unnamed limit.`,
          `<b>Dropping the trivial branch silently.</b> Show that ${f('0')} = 0 forces ${F} ≡ 0 before you discard it.`,
          `<b>Trying to split ${f(`${x} + ${h}`)} with a multiplicative equation, or ${f('<i>xh</i>')} with an additive one.</b> Match the operation in the functional equation to the operation you create in the increment: additive equations want ${x} + ${h}; multiplicative-argument equations want ${x}(1 + ${HX}).`,
          `<b>Quoting ${fx} = ${e}<sup><i>kx</i></sup> without checking it fits the given data.</b> Always substitute your answer back into the original equation, as in Example A2 step 5. If the given numbers are mutually inconsistent, that check is the only thing that will reveal it.`,
        ],
      },
    ],
  },

  // ──────────────── Additional topic B · pp. 1118–1123 ────────────────
  {
    n: 'B',
    title: 'Finding Constants for Differentiability at a Junction',
    extra: true,
    kalam: 'Whenever a piecewise problem gives you two unknowns and asks for a unique answer, differentiability is being tested.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      { t: 'p', html: '(extends Topic 03: Derivatives and First Principle)' },
      {
        t: 'p',
        html: `CBSE Boards (in Class 12, where continuity is taught) mostly ask the continuity-only version. JEE Main asks the differentiability version (a piecewise ${F} with unknown constants ${a} and ${b}, two conditions, two unknowns) reliably enough that it is worth drilling to reflex ${ESTIMATE}.`,
      },

      { t: 'part', title: 'The two conditions, and why there are exactly two' },
      {
        t: 'p',
        html: `Topic 01 taught you to find ${a} and ${b} so that a limit exists. Differentiability at a junction ${x} = ${c} demands strictly more, and the extra demand is what supplies the second equation.`,
      },
      {
        t: 'formula',
        kicker: `Differentiability at a junction ${c}`,
        main: `Condition 1, continuity (equation (i)):<br>${LCM} ${fx} = ${LCP} ${fx} = ${f(c)}<br>Condition 2, LHD = RHD (equation (ii)):<br>${LH0P} ${fr(`${f(`${c} − ${h}`)} − ${f(c)}`, `−${h}`)} =<br>${LH0P} ${fr(`${f(`${c} + ${h}`)} − ${f(c)}`, h)}`,
        legend: [`${c} = the junction point`, `${h} = a small positive increment (${h} → 0)`, 'LHD, RHD = the left-hand and right-hand derivatives at the junction'],
        note: null,
      },
      {
        t: 'p',
        html: `Condition 1 is not optional extra work: it is forced. Topic 03: differentiable at ${c} implies continuous at ${c}. So a function that fails continuity cannot possibly be differentiable, no matter how nicely the slopes appear to match.`,
      },
      {
        t: 'p',
        html: `<b>The order matters, and here is why.</b> The convenient shortcut (differentiate each piece separately and equate the two derivative formulas at ${c}) is only valid once you know ${F} is continuous at ${c} (and each piece is differentiable at ${c}). Impose continuity <b>first</b>. If you jump straight to matching slopes, you can find constants that make two graph pieces parallel while leaving a vertical gap between them, and a gap is a discontinuity, and a discontinuity is not differentiable. Two conditions, applied in that order, and two unknowns: the system closes.`,
      },
      { t: 'fig', id: 'm11-12-fig-12.9' },

      { t: 'part', title: 'Procedure' },
      {
        t: 'proc',
        title: 'Procedure: find a and b for differentiability at x = c',
        steps: [
          `<b>Write down the two pieces and identify the junction ${c}.</b> <b>Why:</b> everything is local to that one point; the rest of the domain is irrelevant.`,
          `<b>Impose continuity.</b> Compute ${LCM} ${fx} and ${LCP} ${fx} by substituting ${c} into each piece (legal when the pieces are polynomials, rational with non-vanishing denominator, or standard smooth functions), set them equal to each other and to ${f(c)}. This is equation (i). <b>Why:</b> differentiability forces it, and it is the cheaper of the two equations.`,
          `<b>Compute the LHD and the RHD.</b> Having secured continuity, and provided each piece is itself differentiable at ${c} (polynomials, rational functions with non-zero denominator at ${c}, and the standard smooth functions are), you may differentiate each piece and evaluate at ${c}: LHD = (left piece)′ at ${c}, RHD = (right piece)′ at ${c}. Set them equal: equation (ii). <b>Why:</b> this is the definition of ${fp(c)} existing.`,
          `<b>Solve (i) and (ii) simultaneously</b> for ${a} and ${b}.`,
          `<b>Verify.</b> Substitute your constants back and check both that the two pieces agree in value at ${c} and that they agree in slope at ${c}. <b>Why:</b> a sign slip in either equation is invisible until you check.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'B1: CBSE / JEE Main Level',
        q: `Find ${a} and ${b} so that<br>${PIECE(X2, rel(x, '≤', '1'))}<br>${PIECE(`<i>ax</i> + ${b}`, rel(x, '>', '1'))}<br>is differentiable at ${x} = 1.`,
        steps: [
          `<b>Step 1: Junction.</b> ${c} = 1, with ${f('1')} = 1<sup>2</sup> = 1.`,
          `<b>Step 2: Continuity (equation (i)).</b><br>${L1M} ${fx} = ${L1M} ${X2} = 1,<br>${L1P} ${fx} = ${L1P} (<i>ax</i> + ${b}) = ${a} + ${b}.<br>Equating, and matching ${f('1')} = 1:<br>${a} + ${b} = 1.${TAG('i')}`,
          `<b>Step 3: Slopes (equation (ii)).</b> The left piece has derivative 2${x}, giving LHD = 2(1) = 2. The right piece has derivative ${a}, giving RHD = ${a}. Hence<br>${a} = 2.${TAG('ii')}`,
          `<b>Step 4: Solve.</b> From (ii), ${a} = 2; substituting into (i), ${b} = 1 − 2 = −1.`,
          `<b>Step 5: Verify.</b> With ${a} = 2, ${b} = −1 the right piece is 2${x} − 1. At ${x} = 1 it takes the value 2(1) − 1 = 1, matching 1<sup>2</sup> = 1: continuous. Its slope is 2, matching the left slope 2(1) = 2: differentiable.`,
          `<b>Contrast worth noting:</b> if the question had asked only for <b>continuity</b>, equation (i) alone would answer it, and there would be infinitely many solutions: every pair with ${a} + ${b} = 1. It is condition (ii) that pins the answer down to one pair. Whenever a piecewise problem gives you two unknowns and asks for a unique answer, differentiability is being tested.`,
        ],
        ans: `${a} = 2, ${b} = −1`,
      },
      {
        t: 'ex',
        tag: 'B2: JEE Main Level',
        q: `Find ${a} and ${b} so that<br>${PIECE(`<i>a</i>${X2} + ${b}`, rel(x, '<', '1'))}<br><br>${PIECE(fr('1', `|${x}|`), rel(x, '≥', '1'))}<br><br>is differentiable at ${x} = 1.`,
        steps: [
          `<b>Step 1: Junction and a simplification.</b> ${c} = 1. Near ${x} = 1 we have ${rel(x, '>', '0')}, so |${x}| = ${x} and the right piece is simply ${fr('1', x)}, with ${f('1')} = 1. Making that simplification before differentiating is the entire difficulty of the problem; the modulus is there to tempt you into a sign error.`,
          `<b>Step 2: Continuity (equation (i)).</b><br>${L1M} (<i>a</i>${X2} + ${b}) = ${a} + ${b},<br><br>${L1P} ${fr('1', x)} = 1 = ${f('1')}.<br><br>${a} + ${b} = 1.${TAG('i')}`,
          `<b>Step 3: Slopes (equation (ii)).</b> Left piece: derivative 2<i>ax</i>, so LHD = 2${a}. Right piece:<br>${D}(${fr('1', x)}) = −${fr('1', X2)},<br><br>so RHD = −1.<br><br>2${a} = −1 ⟹ ${a} = −${HALF}.${TAG('ii')}`,
          `<b>Step 4: Solve.</b> From (i),<br>${b} = 1 − ${a} = 1 + ${HALF} = ${THREE2}.`,
          `<b>Step 5: Verify.</b> Left piece:<br>−${HALF}${X2} + ${THREE2}.<br><br>At ${x} = 1: −${HALF} + ${THREE2} = 1,<br><br>matching ${fr('1', '1')} = 1.<br><br>Slope at 1: 2(−${HALF})(1) = −1,<br><br>matching −${fr('1', '1<sup>2</sup>')} = −1.<br><br>Both conditions hold.`,
        ],
        ans: `${a} = −${HALF}, ${b} = ${THREE2}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE] Find ${a} and ${b} so that<br>${PIECE(`<i>ax</i> + ${b}`, rel(x, '<', '0'))}<br>${PIECE(`sin ${x}`, rel(x, '≥', '0'))}<br>is differentiable at ${x} = 0.`,
            a: `${a} = 1, ${b} = 0.`,
          },
          {
            q: `[JEE Main] Find ${a} and ${b} so that<br>${PIECE(`${X2} + 3${x} + ${a}`, rel(x, '≤', '1'))}<br>${PIECE(`<i>bx</i> + 2`, rel(x, '>', '1'))}<br>is differentiable at ${x} = 1.`,
            a: `${b} = 5, ${a} = 3.`,
          },
          {
            q: `[JEE Main] Find ${a} and ${b} so that<br>${PIECE(`${X2} + ${a}`, rel(x, '≤', '2'))}<br>${PIECE(`<i>bx</i> + 3`, rel(x, '>', '2'))}<br>is differentiable at ${x} = 2.`,
            a: `${b} = 4, ${a} = 7.`,
          },
          {
            q: `[JEE Main] Take the same piecewise function as in Exercise 1 above. Find all pairs ${AB} that make ${F} merely <b>continuous</b> at ${x} = 0, and explain why the answer is a whole family rather than a single pair.`,
            a: `Continuity alone requires only ${b} = 0, with ${a} arbitrary: a one-parameter family {(${a},${NB}0) ∶ ${a} ∈ ℝ}. Two unknowns constrained by one equation leave one degree of freedom; only the slope condition removes it.`,
          },
          {
            q: `[JEE Advanced] Show that ${fx} = ${a}${NB}|${x} − 1| + 3, where ${a} is a real constant, is differentiable at ${x} = 1 only when ${a} = 0, and identify the LHD and RHD in terms of ${a}.`,
            a: `LHD = −${a} and RHD = ${a}, so LHD = RHD forces ${a} = 0; the modulus contributes a corner at ${x} = 1 for every non-zero ${a}.`,
          },
        ],
      },

      { t: 'part', title: 'Pitfalls' },
      {
        t: 'mistakes',
        items: [
          '<b>Matching slopes without first imposing continuity.</b> Parallel pieces separated by a gap are not differentiable. Continuity is equation (i), always.',
          `<b>Substituting the junction value into the wrong piece.</b> Read the inequalities: if the left piece carries ${rel(x, '≤', c)} then ${f(c)} comes from the left piece, and the right-hand limit must be made to agree with it.`,
          `<b>Differentiating a modulus without resolving it.</b> |${x}|, |${x} − 1| and ${fr('1', `|${x}|`)} must first be rewritten without the bars on the side you are approaching from. A modulus that survives to the differentiation step is a guaranteed sign error.`,
          '<b>Assuming two unknowns always need differentiability.</b> If the question says “continuous”, one equation is all you get, and the honest answer is a family, not a pair.',
        ],
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: `Differentiable at ${c} ⇒ continuous at ${c}. So impose continuity <b>first</b>: left value = right value = ${f(c)}. That is equation (i).`,
            note: '',
          },
          { f: 'Then match one-sided derivatives', note: 'LHD = RHD. That is equation (ii).' },
          { f: `Two equations, two unknowns ⇒ a unique ${AB}. Continuity alone ⇒ a one-parameter family.`, note: '' },
          { f: 'Resolve every modulus on the correct side before differentiating.', note: '' },
          { f: 'Always verify', note: `same value at ${c}, same slope at ${c}.` },
        ],
        aids: [],
      },
    ],
  },
];
