import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Topics 01–02, pp. 307–322 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's numbered parts
 * "1. Continuity & Differentiability — The Foundations" (heading and Exam
 * Relevance box under the contents on p. 307, text pp. 307–316) and "2. The
 * Differentiation Toolkit — Standard Derivatives & Rules" (pp. 317–322). The
 * chapter's title and contents (pp. 306–307) are not copied. Each topic opens
 * with its "Exam Relevance:" box as a part of its own, then is split at its
 * Sections 1 to 8; the "Cheat Sheet Box" is the part "Cheat sheet".
 * Figure 5.1 (caption p. 311 under Topic 01's second worked example, drawn
 * p. 312) sits on that example as its `fig`, so the examples stay one set.
 * No unnumbered drawings. Piecewise functions (the book's brace) are written
 * one line per piece. d/dx with an upright d, e upright, LHL/RHL/LHD/RHD
 * upright (MAC-BRIEF-M12-05-06). A fraction inside a fraction's numerator is
 * written with ÷. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner after an opening modulus bar, so the bar never ends a line. */
const WJ = '\u2060';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const a = I('a');
const b = I('b');
const c = I('c');
const f = I('f');
const g = I('g');
const h = I('h');
const k = I('k');
const n = I('n');
const u = I('u');
const v = I('v');
const x = I('x');
const y = I('y');
const C = I('C');
const D2 = I('D');
const th = I('θ');
const uv = I('uv');
const of = (fn: string, s: string) => `${fn}(${s})`;
const abs = (s: string) => `|${WJ}${s}|`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const rel = (l: string, op: string, r: string) => `${l}${NB}${op}${NB}${r}`;
const lim = (s: string) => `lim<sub>${s}</sub>`;
/** A limit glued to its operand. */
const L = (s: string, op: string) => `${lim(s)}${NB}${op}`;
/** d/dx, with an upright d. */
const D = fr('d', `d${x}`);
const EX = `e<sup>${x}</sup>`;
const X2 = sq(x);
const X3 = `${x}<sup>3</sup>`;
const X4 = `${x}<sup>4</sup>`;
const SINX = `sin${NB}${x}`;
const COSX = `cos${NB}${x}`;
const TANX = `tan${NB}${x}`;
const LNX = `ln${NB}${x}`;
const INV = (fn: string) => `${fn}<sup>−1</sup>${NB}${x}`;

const fx = of(f, x);
const fc = of(f, c);
const fp = (s: string) => `${f}′(${s})`;
const gx = of(g, x);
const XC = `${x}→${c}`;
const XCM = `${x}→${c}<sup>−</sup>`;
const XCP = `${x}→${c}<sup>+</sup>`;
const H0 = `${h}→0`;
const H0P = `${h}→0<sup>+</sup>`;
const HTO0P = `${h} → 0<sup>+</sup>`;
const LHDQ = fr(`${of(f, `${c} − ${h}`)} − ${fc}`, `−${h}`);
const RHDQ = fr(`${of(f, `${c} + ${h}`)} − ${fc}`, h);
const DQ = fr(`${fx} − ${fc}`, `${x} − ${c}`);
const PIECE = (rule: string, cond: string) => `${fx} = ${rule},${NB}${NB}${cond}`;
const ONE_X = fr('1', x);
const ONE_H = fr('1', h);
const OPEN03 = `(0,${NB}3)`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · pp. 307–316 ────────────────
  {
    n: '01',
    title: 'Continuity & Differentiability: The Foundations',
    kalam: 'Every differentiable function is continuous, but a continuous function need not be differentiable.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the bedrock of all of calculus, so it shows up everywhere. <b>CBSE Boards</b> almost always carry a 1–4 mark question: checking continuity, finding an unknown constant that makes a piecewise function continuous, or examining differentiability at a join ${ESTIMATE}. <b>JEE Main</b> reliably asks 1–2 questions on piecewise, modulus, or greatest-integer functions ${ESTIMATE}. <b>JEE Advanced</b> pushes into rigorous territory: functional equations, oddly-behaved functions, and the subtle gap between “differentiable” and “smoothly differentiable.” (NEET does not test mathematics, so this topic is JEE/Boards only.)`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Imagine you are riding a Mumbai local and the track is laid out in front of you. If the rails are joined end to end with no gaps, the train glides through: that is a <b>continuous</b> journey. But suppose somewhere along the line a single rail is missing: the train cannot cross that point without a jolt or a complete stop. That missing rail is exactly what a <b>discontinuity</b> is in a function: a place where the graph “breaks.”',
      },
      {
        t: 'p',
        html: 'So at the most basic level, <b>continuity means you can draw the graph through that point without lifting your pen off the paper.</b> No jumps, no holes, no sudden teleportations.',
      },
      {
        t: 'p',
        html: `But mathematicians can’t sell “don’t lift your pen” to an examiner, so we make it precise. For a function ${f} to be continuous at a point ${x} = ${c}, three separate things must all be true and must all agree:<br>1. The function must actually <b>exist</b> at that point: ${fc} has a definite value.<br>2. The function must be <b>heading somewhere definite</b> as you approach ${c}: the limit ${L(XC, fx)} exists. This itself needs the approach from the left and the approach from the right to agree.<br>3. Where it’s heading and where it actually lands must be <b>the same place</b>: the limit equals ${fc}.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> picture yourself walking along the graph toward the point ${x} = ${c}. You can walk in from the left side, and you can walk in from the right side. Continuity demands that both paths lead you to the exact same dot, and that the dot is actually painted there. If the left path and right path arrive at different heights (a “jump”), or if they arrive at the same height but the dot is painted somewhere else (a “removable hole”), the function snaps: it is discontinuous.`,
      },
      {
        t: 'p',
        html: 'Now for the second, deeper idea: <b>differentiability</b>. Continuity only asks that the graph be unbroken. Differentiability asks for something stronger: that the graph be <b>smooth</b>, with no sharp corners.',
      },
      {
        t: 'p',
        html: 'Think of driving on the Mumbai–Pune Expressway. A long, gently banked curve lets you keep the steering wheel turning smoothly: at every instant there is one well-defined direction you are pointing. That is a <b>differentiable</b> path. Now think of a sharp hairpin in the Western Ghats where the road suddenly kinks: at the corner itself, there is no single direction; you are pointing one way the instant before and a different way the instant after. That corner is a point of <b>non-differentiability</b>, even though the road never broke.',
      },
      {
        t: 'p',
        html: `The classic mathematical hairpin is ${fx} = ${abs(x)} at ${x} = 0. The graph is a perfect “V”. It is unbroken (continuous), but at the tip the slope is −1 on the way in and +1 on the way out. There is no single tangent line, so the function is <b>continuous but not differentiable</b> there.`,
      },
      {
        t: 'p',
        html: 'This gives us the single most important relationship in the whole topic:',
      },
      {
        t: 'p',
        html: '<b>Differentiability is stronger than continuity. Every differentiable function is continuous, but a continuous function need not be differentiable.</b>',
      },
      {
        t: 'p',
        html: `In other words: smooth ⟹ unbroken, but unbroken ⇏ smooth. Memorise the direction of that arrow; examiners test it relentlessly ${ESTIMATE}.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & where smoothness fails.</b> A function fails to be differentiable for three reasons, and the first two can happen even where it is continuous: (i) a <b>corner</b>, like ${abs(x)} at 0; (ii) a <b>cusp</b> or a <b>vertical tangent</b>, like ${fx} = ${x}<sup>1/3</sup> at 0, where the slope blows up to infinity; and (iii) anywhere the function is already <b>discontinuous</b>: a break automatically kills smoothness, since you can’t have a tangent where there isn’t even a connected graph. The greatest integer (step) function ${fx} = ⌊${x}⌋ illustrates the last case: it jumps at every integer, so it is neither continuous nor differentiable there.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: `Continuity at a point ${x}${NB}=${NB}${c}`,
        main: `${L(XC, fx)} = ${fc}<br>⟺ ${L(XCM, fx)} = ${L(XCP, fx)} = ${fc}`,
        legend: [`LHL = the left-hand limit (${L(XCM, fx)})`, `RHL = the right-hand limit (${L(XCP, fx)})`],
        note: null,
      },
      {
        t: 'p',
        html: `where, writing ${HTO0P} (so ${h} is a small positive number):`,
      },
      {
        t: 'formula',
        kicker: 'LHL and RHL',
        main: `LHL = ${L(H0P, of(f, `${c} − ${h}`))}<br>RHL = ${L(H0P, of(f, `${c} + ${h}`))}`,
        legend: [
          `${fc} = the actual value of the function at the point`,
          'LHL / RHL = the left-hand and right-hand limits (the heights the two approaches aim for)',
          `${h} = a small positive number (${HTO0P})`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Continuity on an interval:</b><br>• ${f} is continuous on an <b>open</b> interval (${a},${NB}${b}) if it is continuous at every point inside it.<br>• ${f} is continuous on a <b>closed</b> interval [${a},${NB}${b}] if it is continuous on (${a},${NB}${b}) and additionally ${L(`${x}→${a}<sup>+</sup>`, fx)} = ${of(f, a)} and ${L(`${x}→${b}<sup>−</sup>`, fx)} = ${of(f, b)} (one-sided continuity at the endpoints, since you can only approach an endpoint from inside).`,
      },
      {
        t: 'formula',
        kicker: `Differentiability at a point ${x}${NB}=${NB}${c}`,
        main: `${fp(c)} = ${L(H0, RHDQ)} exists (and is finite)`,
        legend: [`${fp(c)} = the derivative of ${f} at ${c}`, `${h} = the small change in ${x}`],
        note: null,
      },
      {
        t: 'p',
        html: 'This splits into one-sided derivatives, which must be <b>equal and finite</b>:',
      },
      {
        t: 'formula',
        kicker: 'One-sided derivatives',
        main: `LHD = ${L(H0P, LHDQ)}<br>RHD = ${L(H0P, RHDQ)}<br>${f} is differentiable at ${c} ⟺ LHD = RHD = a finite number`,
        legend: [`LHD / RHD = the left-hand and right-hand derivatives at ${c}`, `${h} = a small positive number (${HTO0P})`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>The bridge theorem:</b> If ${f} is differentiable at ${c}, then ${f} is continuous at ${c}. (The converse is false.)`,
      },
      {
        t: 'p',
        html: `<b>Validity conditions (the math analogue of “where the formula applies”):</b> these tests are pointwise: always check continuity before differentiability, because if continuity already fails at ${c}, differentiability cannot hold and there is nothing further to compute. For a piecewise function, the only “doubtful” points are the <b>junctions</b> where the definition changes (and any point where a piece is individually undefined); everywhere else, standard functions (polynomials, sin, cos, ${EX}) are automatically continuous and differentiable.`,
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      {
        t: 'p',
        html: '<b>Derivation: Differentiability ⟹ Continuity</b>',
      },
      {
        t: 'p',
        html: 'This is the one proof from this topic that genuinely appears in Boards, and the reasoning is elegant.',
      },
      {
        t: 'p',
        html: `<b>To prove:</b> If ${f} is differentiable at ${x} = ${c}, then ${f} is continuous at ${x} = ${c}.`,
      },
      {
        t: 'p',
        html: `<b>Setup.</b> We are given that ${fp(c)} exists, meaning<br>${L(XC, DQ)} = ${fp(c)}<br>is a finite number. We want to conclude continuity, i.e. that ${L(XC, fx)} = ${fc}, which is the same as showing ${L(XC, `[${fx} − ${fc}]`)} = 0.`,
      },
      {
        t: 'p',
        html: `<b>The key algebraic trick:</b> multiply and divide by (${x} − ${c}). We are allowed to do this because for ${rel(x, '≠', c)} the factor (${x} − ${c}) is non-zero, so we have changed nothing:<br>${fx} − ${fc} = ${DQ} · (${x} − ${c})`,
      },
      {
        t: 'p',
        html: `<b>Why this step matters:</b> the right-hand side is now a product of two pieces whose limits we already understand: the first piece is exactly the difference quotient (its limit is ${fp(c)}), and the second piece (${x} − ${c}) obviously tends to 0.`,
      },
      {
        t: 'p',
        html: `<b>Take the limit</b> as ${x} → ${c}, using the product rule for limits (valid because both limits exist and are finite):<br>${L(XC, `[${fx} − ${fc}]`)}<br>= (${L(XC, DQ)}) · (${L(XC, `(${x} − ${c})`)})<br>= ${fp(c)} · 0 = 0`,
      },
      {
        t: 'p',
        html: `<b>Conclude.</b> Since ${L(XC, `[${fx} − ${fc}]`)} = 0, we have ${L(XC, fx)} = ${fc}, which is precisely the definition of continuity at ${c}. ■`,
      },
      {
        t: 'p',
        html: `<b>The crucial caveat (why the converse fails):</b> notice we needed ${fp(c)} to exist for the first factor to have a finite limit. If it doesn’t exist (as for ${abs(x)} at 0), the argument collapses, and indeed ${abs(x)} is continuous there without being differentiable. The arrow only runs one way.`,
      },
      {
        t: 'proc',
        title: 'Procedure A: Checking continuity at a point c',
        steps: [
          `<b>Compute ${fc}.</b> If the function isn’t even defined at ${c}, it cannot be continuous there: stop.`,
          `<b>Compute the LHL:</b> substitute ${x} = ${c} − ${h} and let ${HTO0P}.`,
          `<b>Compute the RHL:</b> substitute ${x} = ${c} + ${h} and let ${HTO0P}.`,
          `<b>Compare all three.</b> If LHL = RHL = ${fc}, the function is continuous at ${c}. If any pair disagrees, it is discontinuous (a jump if LHL ≠ RHL; a removable hole if LHL = RHL ≠ ${fc}).`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: Checking differentiability at a point c',
        steps: [
          `<b>First confirm continuity at ${c}</b> using Procedure A. If it fails, ${f} is not differentiable: stop here and save yourself the algebra.`,
          `<b>Compute the LHD</b> = ${L(H0P, LHDQ)} using the formula for the left piece.`,
          `<b>Compute the RHD</b> = ${L(H0P, RHDQ)} using the formula for the right piece.`,
          `<b>Compare.</b> If LHD = RHD and both are finite, ${f} is differentiable at ${c} and ${fp(c)} equals that common value. If they differ, there is a corner; if either is infinite, there is a vertical tangent/cusp: in both cases, not differentiable.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the value of ${k} for which the function is continuous at ${x} = 2:<br>${PIECE(`2${x} + 3`, rel(x, '≤', '2'))}<br>${PIECE(`${I('kx')} − 1`, rel(x, '>', '2'))}`,
        steps: [
          `<b>Given:</b> a piecewise function; continuity required at the junction ${x} = 2.`,
          `<b>Step 1: value at the point.</b> Using the first piece (which includes ${x} = 2): ${of(f, '2')} = 2(2) + 3 = 7.`,
          `<b>Step 2: LHL.</b> Approaching from below, we use the first piece: LHL = ${L(`${x}→2<sup>−</sup>`, `(2${x} + 3)`)} = 7.`,
          `<b>Step 3: RHL.</b> Approaching from above, we use the second piece: RHL = ${L(`${x}→2<sup>+</sup>`, `(${I('kx')} − 1)`)} = 2${k} − 1.`,
          `<b>Step 4: impose continuity.</b> Continuity needs LHL = RHL = ${of(f, '2')}:<br>2${k} − 1 = 7 ⟹ 2${k} = 8 ⟹ ${k} = 4.`,
          `<b>Conclusion:</b> for ${k} = 4 the function is continuous at ${x} = 2.`,
        ],
        ans: `${k} = 4`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        fig: 'm12-05-fig-5.1',
        q: `Examine the continuity and differentiability of the following at ${x} = 2:<br>${PIECE(X2, rel(x, '≤', '2'))}<br>${PIECE(`3${x} − 2`, rel(x, '>', '2'))}`,
        steps: [
          `<b>Continuity.</b> ${of(f, '2')} = 2<sup>2</sup> = 4;<br>LHL = ${L(`${x}→2<sup>−</sup>`, X2)} = 4;<br>RHL = ${L(`${x}→2<sup>+</sup>`, `(3${x} − 2)`)} = 4.<br>All three agree, so ${f} is <b>continuous at ${x} = 2.</b> ✓`,
          '<b>Differentiability.</b> Now compute the one-sided derivatives.',
          `LHD = ${L(H0P, fr(`${of(f, `2 − ${h}`)} − ${of(f, '2')}`, `−${h}`))}<br>= ${L(H0P, fr(`(2 − ${h})<sup>2</sup> − 4`, `−${h}`))}<br>= ${L(H0P, fr(`−4${h} + ${sq(h)}`, `−${h}`))}<br>= ${L(H0P, `(4 − ${h})`)} = 4`,
          `RHD = ${L(H0P, fr(`${of(f, `2 + ${h}`)} − ${of(f, '2')}`, h))}<br>= ${L(H0P, fr(`3(2 + ${h}) − 2 − 4`, h))}<br>= ${L(H0P, fr(`3${h}`, h))} = 3`,
          `Since LHD = 4 ≠ 3 = RHD, the function is <b>not differentiable at ${x} = 2.</b>`,
          '<b>Takeaway:</b> this is the bridge theorem’s one-way arrow in action: continuous but not differentiable. There is a corner at the join because the parabola arrives with slope 4 while the line leaves with slope 3.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: `At how many points is ${fx} = ${abs(`${X2} − 4`)} + ${abs(`${x} − 1`)} non-differentiable?`,
        steps: [
          '<b>The trap:</b> students rush to differentiate, or they treat each modulus as contributing exactly one kink. Both go wrong.',
          `<b>The fast way: count the kinks.</b> A term ${abs(gx)} (with ${g} differentiable) has a corner exactly where ${gx} = 0 and ${rel(`${g}′(${x})`, '≠', '0')}, that is, where ${g} crosses zero with non-zero slope. Where ${g} touches zero with zero slope (a vertex that does not change sign, or a crossing like ${X3} at 0) there is no corner, and elsewhere ${abs(gx)} is as smooth as ${g} itself.<br>• ${abs(`${X2} − 4`)}: the inside is zero at ${x} = −2 and ${x} = 2, and it changes sign at both, so <b>two</b> corners, at ${x} = −2 and ${x} = 2.<br>• ${abs(`${x} − 1`)}: one corner, at ${x} = 1.`,
          `The classic blunder is to also count ${x} = 0, the vertex of ${X2} − 4. But near ${x} = 0 the inside stays negative, so ${abs(`${X2} − 4`)} = 4 − ${X2} smoothly: <b>no corner there.</b>`,
          'Adding two functions can only smooth out a kink if both have one at the same place (here they don’t, since −2, 1, 2 are distinct). So the corners survive.',
        ],
        ans: `Non-differentiable at 3 points: ${x} = −2, 1, 2`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Consider<br>${PIECE(`${X2} sin ${ONE_X}`, rel(x, '≠', '0'))}<br>${PIECE('0', rel(x, '=', '0'))}<br>Show that ${f} is differentiable at ${x} = 0, yet its derivative ${f}′ is not continuous at ${x} = 0.`,
        steps: [
          'This is the gem of the topic: a function that is differentiable everywhere but whose derivative is not even continuous.',
          `<b>Step 1: Continuity at 0 (squeeze theorem).</b> Since ${abs(`sin ${ONE_X}`)} ≤ 1 for all ${rel(x, '≠', '0')},<br>0 ≤ ${abs(`${X2} sin ${ONE_X}`)} ≤ ${X2} ⟶<sub>${x}→0</sub> 0<br>⟹ ${L(`${x}→0`, fx)} = 0 = ${of(f, '0')}.<br>So ${f} is continuous at 0.`,
          `<b>Step 2: Differentiability at 0 (from first principles).</b><br>${fp('0')} = ${L(H0, fr(`${of(f, h)} − ${of(f, '0')}`, h))}<br>= ${L(H0, `(${sq(h)} sin ${ONE_H}) ÷ ${h}`)}<br>= ${L(H0, `${h} sin ${ONE_H}`)}.<br>Again by squeeze, ${abs(`${h} sin ${ONE_H}`)} ≤ ${abs(h)} → 0, so ${fp('0')} = 0. The derivative at the origin <b>exists</b>: ${f} is differentiable there.`,
          `<b>Step 3: The derivative away from 0.</b> For ${rel(x, '≠', '0')}, apply product and chain rules:<br>${fp(x)} = 2${x} sin ${ONE_X} + ${X2} cos ${ONE_X} · (−${fr('1', X2)})<br>= 2${x} sin ${ONE_X} − cos ${ONE_X}.`,
          `<b>Step 4: Is ${f}′ continuous at 0?</b> Examine ${L(`${x}→0`, fp(x))}. The first term 2${x} sin ${ONE_X} → 0 (squeeze). But the second term cos ${ONE_X} <b>oscillates</b> between −1 and 1 infinitely often as ${x} → 0 and has no limit. Therefore ${L(`${x}→0`, fp(x))} <b>does not exist</b>, so it certainly cannot equal ${fp('0')} = 0.`,
          `<b>Conclusion:</b> ${f} is differentiable at 0 with ${fp('0')} = 0, yet ${f}′ is discontinuous at 0. Differentiability does not force the derivative to be continuous, a fact that quietly separates the students who memorise from those who understand. ■`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the value of ${a} so that<br>${PIECE(`${I('ax')} + 5`, rel(x, '≤', '3'))}<br>${PIECE(`${X2} − 1`, rel(x, '>', '3'))}<br>is continuous at ${x} = 3.`,
            a: `${a} = 1`,
          },
          {
            q: `<b>[CBSE]</b> Show that ${fx} = ${abs(`${x} − 5`)} is continuous at ${x} = 5 but not differentiable there.`,
            a: `continuous (LHL = RHL = 0 = ${of(f, '5')}); LHD = −1 ≠ +1 = RHD, so not differentiable`,
          },
          {
            q: `<b>[JEE Main]</b> Examine the differentiability of<br>${PIECE(`${X2} + 1`, rel(x, '≤', '1'))}<br>${PIECE(`3 − ${x}`, rel(x, '>', '1'))}<br>at ${x} = 1.`,
            a: `continuous at ${x} = 1 (both pieces → 2) but LHD = 2 ≠ −1 = RHD ⟹ not differentiable`,
          },
          {
            q: `<b>[JEE Main]</b> Find the number of points in (−2,${NB}3) where ${fx} = ⌊${x}⌋ (greatest integer function) is discontinuous.`,
            a: `4 points (${x} = −1, 0, 1, 2)`,
          },
          {
            q: `<b>[JEE Advanced]</b> Let<br>${PIECE(fr(`1 − ${COSX}`, X2), rel(x, '≠', '0'))}<br>${PIECE(k, rel(x, '=', '0'))}.<br>Find ${k} that makes ${f} continuous at 0, and then determine whether ${f} is differentiable there.`,
            a: `${k} = ${fr('1', '2')}; ${f} is differentiable at 0 with ${fp('0')} = 0.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The greatest integer function ${fx} = ⌊${x}⌋ is discontinuous at how many points in the interval ${OPEN03}?`,
        opts: [
          {
            label: '0',
            nudge: '<b>(a)</b> picked by students who think a function defined “everywhere” must be continuous; the step function is defined everywhere yet jumps.',
          },
          { label: '1', nudge: `<b>(b)</b> comes from spotting only one integer (often forgetting ${x} = 2).` },
          { label: '2', nudge: null },
          {
            label: '3',
            nudge: `<b>(d)</b> the trap of including an endpoint: ${x} = 3 is not inside the open interval ${OPEN03}, so it doesn’t count.`,
          },
        ],
        correct: 2,
        solution: `The step function jumps at every integer, and the integers strictly inside ${OPEN03} are ${x} = 1 and ${x} = 2: two points.`,
      },
      {
        t: 'mcq',
        q: 'Which of the following functions is continuous everywhere but differentiable everywhere except at exactly one point?',
        opts: [
          {
            label: `${fx} = ${X2}`,
            nudge: '<b>(a)</b> a polynomial: smooth and differentiable everywhere, so it fails the “except one point” requirement.',
          },
          { label: `${fx} = ${abs(x)}`, nudge: null },
          {
            label: `${fx} = ⌊${x}⌋`,
            nudge: '<b>(c)</b> the greatest integer function is not even continuous (it jumps at integers), so it fails the very first condition.',
          },
          { label: `${fx} = ${ONE_X}`, nudge: `<b>(d)</b> is not defined at ${x} = 0, so it isn’t continuous everywhere to begin with (on its own domain, ${rel(x, '≠', '0')}, it is continuous; the question asks about all of ℝ).` },
        ],
        correct: 1,
        solution: `It is continuous on all of ℝ but has a single corner at ${x} = 0, the only non-differentiable point.`,
      },
      {
        t: 'mcq',
        q: `If a function ${f} is differentiable at ${x} = ${c}, which statement is necessarily true?`,
        opts: [
          { label: `${f} is continuous at ${c}`, nudge: null },
          {
            label: `${f}′ is continuous at ${c}`,
            nudge: `<b>(b)</b> is the deep trap: differentiability does not force the derivative to be continuous (recall ${X2} sin ${ONE_X}). Students who half-remember the theorem over-extend it.`,
          },
          {
            label: `${f} has a maximum at ${c}`,
            nudge: `<b>(c)</b> a derivative existing says nothing about extrema; a max would additionally require ${fp(c)} = 0 plus a sign test.`,
          },
          {
            label: `${fc} = 0`,
            nudge: `<b>(d)</b> confuses the value of the function with the value of its derivative; differentiability places no constraint on ${fc} itself.`,
          },
        ],
        correct: 0,
        solution: 'Differentiability guarantees continuity: this is the bridge theorem.',
      },
      {
        t: 'mcq',
        q: `The function<br>${PIECE(`${I('ax')} + 1`, rel(x, '≤', '1'))}<br>${PIECE(`${X2} + ${b}`, rel(x, '>', '1'))}<br>is differentiable at ${x} = 1. Then ${a} + ${b} equals:`,
        opts: [
          {
            label: '2',
            nudge: `<b>(a)</b> results from solving differentiability (${a} = 2) but forgetting that continuity is also required, then mishandling ${b}.`,
          },
          { label: '3', nudge: `<b>(b)</b> comes from a slip in the continuity equation: writing ${a} = ${b} + 1 instead of ${a} = ${b} gives ${b} = 1, so ${a} + ${b} = 3.` },
          { label: '4', nudge: null },
          { label: '5', nudge: `<b>(d)</b> comes from the opposite slip: writing ${a} + 1 = ${b} gives ${b} = 3, so ${a} + ${b} = 5.` },
        ],
        correct: 2,
        solution: `<b>Continuity at ${x} = 1:</b> ${a}(1) + 1 = (1)<sup>2</sup> + ${b} ⇒ ${a} + 1 = 1 + ${b} ⇒ ${a} = ${b}.<br><b>Differentiability at ${x} = 1:</b> LHD = ${a} (slope of ${I('ax')} + 1), RHD = 2${x}|<sub>${x}=1</sub> = 2. Setting them equal gives ${a} = 2, hence ${b} = 2, so ${a} + ${b} = 4.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>The reversed arrow.</b> Believing “continuous ⟹ differentiable.” It is the other way around. ${abs(x)} at 0 is the eternal counterexample: keep it in your pocket.`,
          `<b>Skipping the continuity check.</b> Jumping straight to LHD/RHD without first confirming continuity. If the function is already discontinuous at ${c}, it cannot be differentiable, and computing derivatives there is wasted effort (and often gives a misleading finite number).`,
          `<b>Miscounting modulus corners.</b> Treating ${abs(gx)} as one corner regardless of how many times ${g} crosses zero, or counting the vertex of the inside function (where it doesn’t change sign) as a corner. Count the zeros where the inside crosses with non-zero slope (${g}′${NB}≠${NB}0), not every zero and not the zeros of its derivative.`,
          `<b>Endpoint over-counting.</b> In an open interval like ${OPEN03}, the endpoints are excluded: don’t count discontinuities or kinks sitting exactly on 0 or 3.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> For piecewise functions, you only ever need to test the <b>junction points</b> (and any point where a piece is undefined), never the interiors, where polynomials, sin, cos, and ${EX} are automatically smooth. This collapses most “examine continuity/differentiability” problems to checking just one or two points. And always run the checks in order: <b>continuity first, differentiability second</b>; the first failing instantly settles the second.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `<b>Continuous at ${c}</b>`, note: `LHL = RHL = ${fc} (all three exist and are equal).` },
          {
            f: `<b>Differentiable at ${c}</b>`,
            note: `LHD = RHD = a finite number, where<br>LHD = ${L(H0P, LHDQ)},<br>RHD = ${L(H0P, RHDQ)}.`,
          },
          { f: '<b>The Bridge</b>', note: 'differentiable ⇒ continuous; <b>continuous ⇏ differentiable.</b> (One-way arrow.)' },
          { f: '<b>Smoothness fails at</b>', note: `corners (${abs(x)}), cusps/vertical tangents (${x}<sup>1/3</sup> at 0), and every discontinuity.` },
          { f: '<b>Strategy</b>', note: `test only junction points (when each piece is a polynomial, sin, cos or ${EX}); check continuity before differentiability.` },
        ],
        aids: ['<b>“DiCo, not CoDi”:</b> <b>Di</b>fferentiable ⇒ <b>Co</b>ntinuous, but <b>Co</b>ntinuous does not ⇒ <b>Di</b>fferentiable.'],
      },
    ],
  },

  // ──────────────── Topic 02 · pp. 317–322 ────────────────
  {
    n: '02',
    title: 'The Differentiation Toolkit: Standard Derivatives & Rules',
    kalam: 'This is the computational backbone of the whole chapter: every later technique (chain rule, implicit, log, parametric) assumes total fluency here.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'This is the computational backbone of the whole chapter: every later technique (chain rule, implicit, log, parametric) assumes total fluency here. <b>CBSE Boards</b> test it directly (differentiate a product/quotient for 2–3 marks) and indirectly everywhere. <b>JEE Main/Advanced</b> assume instant recall of every standard derivative and combine the rules under time pressure. (NEET does not test mathematics.)',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Learning to differentiate is a lot like learning to cook. You need two things: a <b>spice rack</b> of standard ingredients you know cold, and a few <b>combining techniques</b> to put them together. The spice rack is the list of standard derivatives: the derivative of ${SINX}, of ${EX}, of ${x}<sup>${n}</sup>, and so on. The combining techniques are the rules of differentiation: how to handle a sum, a product, or a quotient. Master both and you can differentiate essentially any function the chapter throws at you.`,
      },
      {
        t: 'p',
        html: 'The standard derivatives are simply facts to memorise (we derive a couple below so you trust them). The rules are where intuition matters.',
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> the most seductive mistake in all of calculus is to guess that the derivative of a product is the product of the derivatives: (${uv})′ = ${u}′${v}′. It is <b>wrong</b>. Picture a rectangle with width ${u} and height ${v}, so its area is ${uv}. Now nudge both sides up a little. The area grows by a thin strip along the top (height grows: that’s ${u}${NB}${v}′) plus a thin strip along the side (width grows: that’s ${u}′${v}). The new area gains both strips:<br>(${uv})′ = ${u}′${v} + ${uv}′.`,
      },
      {
        t: 'p',
        html: 'That picture is the product rule, and it’s why the naive guess fails: it forgets one of the strips.',
      },
      {
        t: 'p',
        html: `There is also a quieter idea hiding here: the <b>algebra of continuous functions</b>. If ${f} and ${g} are both continuous at a point ${c}, then so are ${f} + ${g}, ${f} − ${g}, ${I('fg')}, and ${fr(f, g)} (as long as the denominator isn’t zero), and so is the composite ${of(f, gx)} if ${f} is continuous at ${of(g, c)}. This is the reason that polynomials, ${SINX}, ${COSX}, ${EX}, and all their sensible combinations are continuous wherever they’re defined, and it’s precisely why, back in the foundations, we only ever needed to check continuity at the suspicious junction points of piecewise functions, never in the smooth interiors (as long as each piece is one of these).`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b> The quotient rule requires the denominator to be non-zero at the point. Every standard derivative below holds only on the domain where the function is differentiable (e.g. ${D} ${LNX} = ${ONE_X} needs ${rel(x, '>', '0')}; ${D} ${INV('sec')} needs ${abs(x)}${NB}>${NB}1). And the rules assume the pieces being combined are themselves differentiable there.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: '<b>Standard derivatives</b> (each valid on its natural domain):',
      },
      {
        t: 'formula',
        kicker: 'Standard derivatives: powers and constants',
        main: `${D}(${x}<sup>${n}</sup>) = ${n}${x}<sup>${n}−1</sup><br>${D}(${k}) = 0 (${k} constant)`,
        legend: [`${n} = the power`, `${k} = a constant`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Standard derivatives: trigonometric functions',
        main: `${D} ${SINX} = ${COSX}<br>${D} ${COSX} = −${SINX}<br>${D} ${TANX} = sec<sup>2</sup>${NB}${x}<br>${D} cot${NB}${x} = −csc<sup>2</sup>${NB}${x}<br>${D} sec${NB}${x} = sec${NB}${x} ${TANX}<br>${D} csc${NB}${x} = −csc${NB}${x} cot${NB}${x}`,
        legend: [`${x} = the variable`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Standard derivatives: exponential and logarithmic functions',
        main: `${D} ${EX} = ${EX}<br>${D} ${a}<sup>${x}</sup> = ${a}<sup>${x}</sup> ln${NB}${a}<br>${D} ${LNX} = ${ONE_X}<br>${D} log<sub>${a}</sub>${NB}${x} = ${fr('1', `${x} ln${NB}${a}`)}`,
        legend: [`${a} = the base (${a}${NB}>${NB}0, ${a}${NB}≠${NB}1)`, `${x} = the variable (${rel(x, '>', '0')} for ln and log)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Inverse trigonometric functions:</b><br>${D} ${INV('sin')} = ${fr('1', `√(1 − ${X2})`)}<br>${D} ${INV('cos')} = ${fr('−1', `√(1 − ${X2})`)}<br>${D} ${INV('tan')} = ${fr('1', `1 + ${X2}`)}<br>${D} ${INV('cot')} = ${fr('−1', `1 + ${X2}`)}<br>${D} ${INV('sec')} = ${fr('1', `${abs(x)}√(${X2} − 1)`)}<br>${D} ${INV('csc')} = ${fr('−1', `${abs(x)}√(${X2} − 1)`)}`,
      },
      {
        t: 'p',
        html: `<b>Rules of differentiation</b> (with ${u} = ${of(u, x)}, ${v} = ${of(v, x)}):`,
      },
      {
        t: 'formula',
        kicker: 'Rules of differentiation',
        main: `Sum/Difference: (${u} ± ${v})′ = ${u}′ ± ${v}′<br>Constant multiple: (${I('ku')})′ = ${k}${u}′<br>Product: (${uv})′ = ${u}′${v} + ${uv}′<br>Quotient: (${fr(u, v)})′ = ${fr(`${u}′${v} − ${uv}′`, sq(v))} (${v}${NB}≠${NB}0)`,
        legend: [`${u}, ${v} = differentiable functions of ${x}`, `${u}′, ${v}′ = their derivatives`, `${k} = a constant`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Algebra of continuous functions:</b> if ${f}, ${g} are continuous at ${c}, then ${f} ± ${g}, ${I('kf')}, ${I('fg')} are continuous at ${c}, and ${fr(f, g)} is continuous at ${c} provided ${of(g, c)}${NB}≠${NB}0; the composite ${f} ∘ ${g} is continuous at ${c} if ${g} is continuous at ${c} and ${f} is continuous at ${of(g, c)}.`,
      },
      {
        t: 'p',
        html: `<b>Validity:</b> the quotient and the quotient rule need ${v}${NB}≠${NB}0; each standard derivative is restricted to its domain (noted above).`,
      },

      { t: 'part', title: 'Key derivations and procedures' },
      {
        t: 'p',
        html: `<b>Derivation 1: ${D} ${SINX} = ${COSX} from first principles</b>`,
      },
      {
        t: 'p',
        html: `Using<br>${fp(x)} = ${L(H0, fr(`${of(f, `${x} + ${h}`)} − ${fx}`, h))}<br>with ${fx} = ${SINX}:<br><br>${fp(x)} = ${L(H0, fr(`sin(${x} + ${h}) − ${SINX}`, h))}.`,
      },
      {
        t: 'p',
        html: `Apply the identity sin${NB}${C} − sin${NB}${D2} = 2${NB}cos${NB}${fr(`${C} + ${D2}`, '2')} sin${NB}${fr(`${C} − ${D2}`, '2')}:<br><br>= ${L(H0, `2${NB}cos(${x} + ${fr(h, '2')}) sin${NB}${fr(h, '2')} ÷ ${h}`)}<br><br>= ${L(H0, `cos(${x} + ${fr(h, '2')}) · sin${NB}${fr(h, '2')} ÷ ${fr(h, '2')}`)}.`,
      },
      {
        t: 'p',
        html: `<b>Why this split helps:</b> the second factor is the famous limit ${L(`${th}→0`, fr(`sin${NB}${th}`, th))} = 1, and the first factor tends to ${COSX}. Hence ${fp(x)} = ${COSX}. ■`,
      },
      {
        t: 'p',
        html: '<b>Derivation 2: The product rule from first principles</b>',
      },
      {
        t: 'p',
        html: `For ${y} = ${of(u, x)}${of(v, x)}, the <b>add-and-subtract trick</b> is the key:<br>${y}′ = ${L(H0, fr(`${of(u, `${x} + ${h}`)}${of(v, `${x} + ${h}`)} − ${of(u, x)}${of(v, x)}`, h))}.`,
      },
      {
        t: 'p',
        html: `Subtract and add ${of(u, `${x} + ${h}`)}${of(v, x)} in the numerator (it changes nothing but lets us factor):<br><br>= ${L(H0, fr(`${of(u, `${x} + ${h}`)}[${of(v, `${x} + ${h}`)} − ${of(v, x)}] + ${of(v, x)}[${of(u, `${x} + ${h}`)} − ${of(u, x)}]`, h))}<br><br>= ${L(H0, `${of(u, `${x} + ${h}`)} · ${fr(`${of(v, `${x} + ${h}`)} − ${of(v, x)}`, h)}`)}<br><br>+ ${lim(H0)}${NB}${of(v, x)} · ${fr(`${of(u, `${x} + ${h}`)} − ${of(u, x)}`, h)}<br>= ${uv}′ + ${I('vu')}′. ■`,
      },
      {
        t: 'p',
        html: 'The two strips of the rectangle, made rigorous.',
      },
      {
        t: 'proc',
        title: 'Procedure: choosing the right rule',
        steps: [
          '<b>Identify the structure</b>: is the whole thing a sum, a product, or a quotient?',
          '<b>Differentiate the outermost structure first</b> with the matching rule, then differentiate the pieces.',
          'For products of three or more factors, either extend the product rule term by term, or take logs (logarithmic differentiation: Topic 06).',
          'Simplify; a tidy intermediate form prevents algebra slips.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Differentiate ${y} = (${X2} + 1)(${X3} + 3).`,
        steps: [
          `Using the <b>product rule</b> with ${u} = ${X2} + 1, ${v} = ${X3} + 3:<br>${y}′ = ${u}′${v} + ${uv}′<br>= (2${x})(${X3} + 3) + (${X2} + 1)(3${X2})<br>= 2${X4} + 6${x} + 3${X4} + 3${X2}`,
        ],
        ans: `5${X4} + 3${X2} + 6${x}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Differentiate ${y} = ${fr(SINX, `1 + ${COSX}`)}.`,
        steps: [
          `Using the <b>quotient rule</b> with ${u} = ${SINX}, ${v} = 1 + ${COSX}:<br>${y}′ = ${fr(`${COSX} (1 + ${COSX}) − ${SINX} (−${SINX})`, `(1 + ${COSX})<sup>2</sup>`)}<br><br>= ${fr(`${COSX} + cos<sup>2</sup>${NB}${x} + sin<sup>2</sup>${NB}${x}`, `(1 + ${COSX})<sup>2</sup>`)}<br><br>= ${fr(`${COSX} + 1`, `(1 + ${COSX})<sup>2</sup>`)} = ${fr('1', `1 + ${COSX}`)}.`,
          'The Pythagorean identity collapses the numerator beautifully: always look for that simplification.',
        ],
        ans: fr('1', `1 + ${COSX}`),
      },
      {
        t: 'ex',
        tag: 'JEE Main: Trap',
        q: `A student differentiates ${y} = ${X2} ${SINX} and writes ${y}′ = 2${x} ${COSX}. Why is this wrong, and what is the correct answer?`,
        steps: [
          `<b>The trap.</b> The student applied the false rule (${uv})′ = ${u}′${v}′, multiplying the two derivatives (2${x} and ${COSX}). This is the single most common differentiation error.`,
          `<b>The fix.</b> A product needs the <b>product rule</b>, both strips:<br>${y}′ = (${X2})′ ${SINX} + ${X2}(${SINX})′<br>= 2${x} ${SINX} + ${X2} ${COSX}<br>= ${x}(2${NB}${SINX} + ${x} ${COSX}).`,
          `<b>Speed check:</b> whenever you see two ${x}-dependent factors multiplied, the answer must have two terms, not one. A single-term answer to a product is an instant red flag.`,
        ],
        ans: `${x}(2${NB}${SINX} + ${x} ${COSX})`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find ${D} ${fr('1', `√${x}`)} from first principles, and confirm it matches the power rule.`,
        steps: [
          `${fp(x)} = ${L(H0, `(${fr('1', `√(${x} + ${h})`)} − ${fr('1', `√${x}`)}) ÷ ${h}`)}<br><br>= ${L(H0, fr(`√${x} − √(${x} + ${h})`, `${h}${NB}√${x}${NB}√(${x} + ${h})`))}.`,
          `Rationalise the numerator by multiplying top and bottom by (√${x} + √(${x} + ${h})):<br><br>= ${L(H0, fr(`${x} − (${x} + ${h})`, `${h}${NB}√${x}${NB}√(${x} + ${h}) (√${x} + √(${x} + ${h}))`))}<br><br>= ${L(H0, fr(`−${h}`, `${h}${NB}√${x}${NB}√(${x} + ${h}) (√${x} + √(${x} + ${h}))`))}.`,
          `Cancel ${h} and let ${h} → 0:<br><br>= ${fr('−1', `√${x} · √${x} · 2√${x}`)} = ${fr('−1', `2${x}<sup>3/2</sup>`)} = −${fr('1', '2')}${x}<sup>−3/2</sup>.`,
          `This is exactly the power rule applied to ${x}<sup>−1/2</sup>: (${x}<sup>−1/2</sup>)′ = −${fr('1', '2')}${x}<sup>−3/2</sup>. ■`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `<b>[CBSE]</b> Differentiate ${y} = (2${X2} − 3)(${x} + 1).`, a: `6${X2} + 4${x} − 3` },
          { q: `<b>[CBSE]</b> Differentiate ${y} = ${fr(x, `${X2} + 1`)}.`, a: fr(`1 − ${X2}`, `(${X2} + 1)<sup>2</sup>`) },
          {
            q: `<b>[JEE Main]</b> Differentiate ${y} = ${X2}${EX} ${LNX} (a triple product).`,
            a: `${x}${EX}(2${NB}${LNX} + ${x} ${LNX} + 1)<br>= ${x}${EX}[(${x} + 2) ${LNX} + 1]`,
          },
          { q: `<b>[JEE Main]</b> Differentiate ${y} = ${fr(`1 + ${TANX}`, `1 − ${TANX}`)}.`, a: fr(`2${NB}sec<sup>2</sup>${NB}${x}`, `(1 − ${TANX})<sup>2</sup>`) },
          {
            q: `<b>[JEE Advanced]</b> Find ${D} ${COSX} from first principles.`,
            a: `−${SINX} (use cos${NB}${C} − cos${NB}${D2} = −2${NB}sin${NB}${fr(`${C} + ${D2}`, '2')} sin${NB}${fr(`${C} − ${D2}`, '2')} and ${fr(`sin${NB}${th}`, th)} → 1).`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `${D}(${X2} ${COSX}) =`,
        opts: [
          { label: `2${x} (−${SINX})`, nudge: `<b>(a)</b> multiplies the derivatives: the (${uv})′ = ${u}′${v}′ trap.` },
          { label: `2${x} ${COSX} − ${X2} ${SINX}`, nudge: null },
          { label: `−${X2} ${SINX}`, nudge: '<b>(c)</b> drops the first term.' },
          {
            label: `2${x} ${COSX} + ${X2} ${SINX}`,
            nudge: `<b>(d)</b> uses +${X2} ${SINX}, forgetting that ${D} ${COSX} = −${SINX} (a sign slip).`,
          },
        ],
        correct: 1,
        solution: `Product rule: 2${x} ${COSX} + ${X2}(−${SINX}).`,
      },
      {
        t: 'mcq',
        q: `${D} ${TANX} equals:`,
        opts: [
          { label: `sec${NB}${x} ${TANX}`, nudge: `<b>(a)</b> is the derivative of sec${NB}${x}.` },
          { label: `sec<sup>2</sup>${NB}${x}`, nudge: null },
          { label: `−csc<sup>2</sup>${NB}${x}`, nudge: `<b>(c)</b> is the derivative of cot${NB}${x}.` },
          { label: `cot${NB}${x}`, nudge: '<b>(d)</b> is unrelated.' },
        ],
        correct: 1,
        solution: `A standard derivative (and quotient rule on ${fr('sin', 'cos')} confirms it). Mixing the trig-derivative table is the classic error.`,
      },
      {
        t: 'mcq',
        q: 'Which statement about continuity is <b>false</b>?',
        opts: [
          { label: 'Sum of two continuous functions is continuous.', nudge: '<b>(a), (b), (d)</b> are all true statements from the algebra of continuous functions.' },
          { label: 'Product of two continuous functions is continuous.', nudge: '<b>(a), (b), (d)</b> are all true statements from the algebra of continuous functions.' },
          { label: `If ${f} and ${g} are continuous on ℝ, then ${fr(f, g)} is continuous at every real ${x}.`, nudge: null },
          { label: 'Composite of continuous functions is continuous.', nudge: '<b>(a), (b), (d)</b> are all true statements from the algebra of continuous functions.' },
        ],
        correct: 2,
        solution: `${fr(f, g)} is not even defined where ${gx} = 0 (e.g. ${ONE_X} at ${x} = 0), so it cannot be continuous at every real ${x}; on its own domain (where ${rel(g, '≠', '0')}) it is continuous. The “every real ${x}” makes it false.`,
      },
      {
        t: 'mcq',
        q: `${D}(${fr(EX, x)}) =`,
        opts: [
          { label: fr(EX, X2), nudge: `<b>(a)</b> is ${fr(`${u}′`, sq(v))} (it drops ${v} and the −${uv}′ term).` },
          { label: fr(`${EX}(${x} − 1)`, X2), nudge: null },
          {
            label: fr(`${EX}(1 − ${x})`, X2),
            nudge: `<b>(c)</b> flips the numerator order: ${uv}′ − ${u}′${v} instead of ${u}′${v} − ${uv}′, the most common quotient-rule sign error.`,
          },
          { label: EX, nudge: '<b>(d)</b> ignores the quotient entirely.' },
        ],
        correct: 1,
        solution: `Quotient rule: ${fr(`${EX} · ${x} − ${EX} · 1`, X2)} = ${fr(`${EX}(${x} − 1)`, X2)}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>The (${uv})′ = ${u}′${v}′ trap.</b> A product’s derivative has two terms. A one-term answer to a product is wrong by inspection.`,
          `<b>Quotient-rule order.</b> It is ${fr(`${u}′${v} − ${uv}′`, sq(v))}, not ${fr(`${uv}′ − ${u}′${v}`, sq(v))}. Memorise “<b>low-d-high minus high-d-low, over low-squared</b>.”`,
          `<b>Trig-derivative sign/table mix-ups.</b> ${COSX} → −${SINX} (negative!); cot, csc, cos<sup>−1</sup>, cot<sup>−1</sup>, csc<sup>−1</sup> all carry a minus sign. Group the “negative six” mentally.`,
          `<b>Dropping domain restrictions.</b> ${D} ${INV('sec')} carries ${abs(x)}; ${D} ${LNX} needs ${rel(x, '>', '0')}.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> Before differentiating a quotient, check whether algebra simplifies it first (e.g. ${fr(SINX, `1 + ${COSX}`)}, or cancelling common factors). Simplifying before differentiating often turns a messy quotient rule into a one-line answer.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `<b>Power:</b> (${x}<sup>${n}</sup>)′ = ${n}${x}<sup>${n}−1</sup>. <b>Trig:</b> sin → cos, cos → −sin, tan → sec<sup>2</sup>.`, note: '' },
          { f: '<b>Exp/Log</b>', note: `(${EX})′ = ${EX}, (${a}<sup>${x}</sup>)′ = ${a}<sup>${x}</sup> ln${NB}${a}, (${LNX})′ = ${ONE_X}.` },
          {
            f: `<b>Product:</b> (${uv})′ = ${u}′${v} + ${uv}′ (two terms!). <b>Quotient:</b> (${fr(u, v)})′ = ${fr(`${u}′${v} − ${uv}′`, sq(v))}.`,
            note: '',
          },
          { f: '<b>The “negative six”</b>', note: 'cos, cot, csc, cos<sup>−1</sup>, cot<sup>−1</sup>, csc<sup>−1</sup> all differentiate with a minus sign.' },
          {
            f: '<b>Algebra of continuity</b>',
            note: 'sums, products, quotients (denom ≠ 0), and composites of continuous functions stay continuous, hence only piecewise junctions need checking when each piece is itself a standard function.',
          },
        ],
        aids: ['<b>Quotient:</b> “low d-high minus high d-low, all over low-squared.”'],
      },
    ],
  },
];
