import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 12 Linear Programming, Topics 01–02, pp. 764–787 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word.
 *   Topic 01 = Subtopic 01 "Formulation & Graphical Solution" (pp. 764–776),
 *   Topic 02 = Subtopic 02 "Mathematical Formulation & LPP Applications"
 *              (pp. 777–787).
 * The chapter's title and contents (p. 763) are not copied. Each topic opens
 * with its "Exam Relevance:" box (with the box's italic note) as a part of its
 * own, then is split at its Sections 1 to 8. "Sub-01" / "Subtopic 01" →
 * "Topic 01". Figures 12.1 (caption p. 767, drawn p. 768) and 12.4 (780/781)
 * are placed where their captions stand; 12.2 (769/770) and 12.3 (771/772)
 * draw the regions of worked examples 1 and 3 of Topic 01 and go on those
 * examples. No unnumbered drawings on pp. 764–787. The book's tables of corner
 * values sit inside worked examples: each is written in its example's step,
 * one row per line (a `table` block would cut the example card in two).
 * Every fraction is stacked (<frac>); no em dashes. The expert review rm1212a
 * is applied (fx1212): its corrections change the printed words where listed
 * in reports-12/fx1212-applied.md.
 */
const fr = (p: string, q: string) => `<frac><num>${p}</num><den>${q}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const e = I('e');
const k = I('k');
const m = I('m');
const p = I('p');
const q = I('q');
const x = I('x');
const y = I('y');
const A = I('A');
const B = I('B');
const C = I('C');
const M = I('M');
const O = I('O');
const R = I('R');
const Z = I('Z');
const AX = I('ax');
const BY = I('by');

/** A short relation kept on one line. */
const rel = (l: string, op: string, r: string) => `${l}${NB}${op}${NB}${r}`;
/** A coordinate pair kept on one line. */
const P = (u: string | number, v: string | number) => `(${u},${NB}${v})`;
/** Z = ax + by. */
const ZAXBY = `${Z} = ${AX} + ${BY}`;
/** x ≥ 0, y ≥ 0. */
const NONNEG = `${rel(x, '≥', '0')}, ${rel(y, '≥', '0')}`;
/** x, y ≥ 0. */
const XYNONNEG = `${x},${NB}${rel(y, '≥', '0')}`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · Subtopic 01 · pp. 764–776 ────────────────
  {
    n: '01',
    title: 'Formulation & Graphical Solution',
    kalam: 'A clean, predictable topic: once you master the corner-point routine, you rarely lose marks here.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Linear Programming is a guaranteed scorer in <b>CBSE Boards</b>: almost every year there is a question that asks you to formulate or solve an LPP graphically (recent papers set it as a short answer of about <b>3 marks</b>; older papers had a full <b>5–6 mark</b> long answer) ${ESTIMATE}. In <b>CUET (UG)</b> it shows up as <b>2–3 quick MCQs</b> on feasible regions, corner points, and reading off the optimum ${ESTIMATE}. A clean, predictable topic: once you master the corner-point routine, you rarely lose marks here.<br><br><b>Syllabus note:</b> This chapter is <b>not</b> part of the JEE Main / JEE Advanced syllabus, so we build it for Boards and CUET depth, not JEE speed traps.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Imagine you run a small halwai shop in the week before Diwali. You can make two sweets: kaju katli and besan laddoo. Every kilogram of each earns you a different profit, but you only have so much khoya, so much sugar, and so many hours at the stove before the festival rush. The question that keeps you up at night is simple to ask and hard to eyeball: given everything I’m short on, exactly how many kilos of each sweet should I make so my profit is as large as possible?',
      },
      {
        t: 'p',
        html: 'That, in one sentence, is <b>Linear Programming</b>. It is the mathematics of squeezing the best possible outcome (most profit, least cost) out of <b>limited resources</b>.',
      },
      {
        t: 'p',
        html: `Three ideas do all the work:<br>1. <b>The thing you want to push to its best value</b>: your total profit, or your total cost.${NB}We write it as a formula like ${ZAXBY} and call it the <b>objective function</b>.${NB}“Objective” because it’s literally your objective; “linear” because ${x} and ${y} appear only to the first power (no ${x}<sup>2</sup>, no ${I('xy')}).<br>2. <b>The limits life puts on you</b>: only 8 kg of khoya, only 12 hours of stove time, and the obvious fact that you cannot make a negative number of laddoos.${NB}Each limit becomes a <b>linear inequality</b>, and together they are your <b>constraints</b>.<br>3. <b>The set of all honest choices</b>: every ${P(x, y)} pair that respects all the limits at once.${NB}Plot them and they fill a region of the graph.${NB}This is the <b>feasible region</b>, and your answer is guaranteed to live inside it (or on its edge).`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Picture the feasible region as a fenced field, and the objective function ${ZAXBY} as a ruler whose reading goes up as you walk in a fixed direction (say, north-east). You want to stand at the spot in the field where the ruler reads highest. Here’s the beautiful part: for a straight-line ruler over a field with straight fences, that best spot is <b>never</b> in the open middle of the field. It is always poking out at a <b>corner</b>. That single fact is what makes LP so easy: you don’t search the whole field, you just check the corners.`,
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions, when this works (and when it bites):</b><br>• <b>Everything must be linear.</b> If profit per unit changed as you made more (a bulk discount, say), the objective stops being a straight line and the corner-point shortcut fails.<br>• <b>The feasible region may be unbounded.</b> If your field stretches off to infinity in some direction, a maximum might not exist at all (you could keep walking and keep gaining). The same region might still have a perfectly good minimum. So “unbounded” does <b>not</b> automatically mean “no answer”: it means check carefully.<br>• <b>The optimum can be a whole edge, not a single point.</b> If your ruler happens to line up parallel to one of the fences, then every point along that fence reads the same maximum. There are then infinitely many optimal solutions.<br>• <b>We assume two decision variables.</b> The graphical method only works in 2D: two products, two foods, two machines. With three or more variables you’d need algebra (the simplex method), which is beyond this chapter.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: 'Linear Programming has no SI units or dimensional formulae: it is a method, so the “key facts” here are precise <b>definitions</b> and the <b>terminology</b> examiners expect you to use verbatim.',
      },
      { t: 'p', html: '<b>The objective function:</b>' },
      {
        t: 'formula',
        kicker: 'The objective function',
        main: ZAXBY,
        legend: [
          `${Z} = the quantity being optimised (profit, cost, distance, etc.)`,
          `${x}, ${y} = the <b>decision variables</b> (the quantities you get to choose)`,
          `${a}, ${b} = constants (profit or cost per unit)`,
        ],
        note: 'Both are real numbers; in most problems they are positive.',
      },
      { t: 'p', html: '<b>Standard form of a maximisation LPP:</b>' },
      {
        t: 'formula',
        kicker: 'Standard form of a maximisation LPP',
        main: `Maximise ${ZAXBY}<br>subject to ${c}<sub>1</sub>${x}${NB}+${NB}${d}<sub>1</sub>${y}${NB}≤${NB}${e}<sub>1</sub>, ${c}<sub>2</sub>${x}${NB}+${NB}${d}<sub>2</sub>${y}${NB}≤${NB}${e}<sub>2</sub>, …<br>and ${NONNEG}`,
        legend: [`${c}<sub>1</sub>, ${d}<sub>1</sub>, ${e}<sub>1</sub>, … = constants of the constraints`],
        note: null,
      },
      {
        t: 'defgrid',
        title: 'Terminology table: learn these exact words',
        rows: [
          { k: 'Optimisation problem', v: 'A problem that asks to maximise or minimise some function.' },
          { k: 'Constraints', v: 'The linear inequalities/restrictions on the variables.' },
          { k: 'Non-negative constraints', v: `The conditions ${NONNEG}.` },
          { k: 'Feasible region', v: 'The common region satisfying all constraints, including non-negativity.' },
          { k: 'Feasible solution', v: 'Any point inside or on the boundary of the feasible region.' },
          { k: 'Infeasible solution', v: 'Any point outside the feasible region.' },
          { k: 'Optimal solution', v: `A feasible point that gives the optimum (max or min) value of ${Z}.` },
          { k: 'Bounded region', v: 'A feasible region that can be enclosed inside a circle.' },
          { k: 'Unbounded region', v: 'A feasible region that extends to infinity in some direction.' },
          { k: 'Corner point (vertex)', v: 'A point of the region formed by the intersection of two boundary lines.' },
        ],
      },
      {
        t: 'p',
        html: `<b>Two properties you should be able to state from memory:</b><br>• A feasible region cut out by linear constraints is always <b>convex</b> (a <b>convex polygon</b> when it is bounded): no dents. A straight line joining any two feasible points stays entirely inside the region.<br>• If ${Z} takes the <b>same</b> optimum value at <b>two</b> corner points, then it takes that same value at <b>every</b> point on the line segment joining them (infinitely many optima).`,
      },

      { t: 'part', title: 'Theorems and the corner-point method' },
      {
        t: 'p',
        html: 'LP rests on two theorems. CBSE states them (it does not ask for a formal proof), so know them precisely, and, crucially, know the <b>procedure</b> they justify.',
      },
      { t: 'p', html: '<b>The Two Fundamental Theorems</b>' },
      {
        t: 'p',
        html: `<b>Theorem 1 (Optimum lives at a corner).</b> Let ${R} be the feasible region (a convex polygon) for an LPP, and let ${ZAXBY} be the objective function. When ${Z} has an optimal value (maximum or minimum), subject to the linear constraints, that optimal value <b>must occur at a corner point (vertex)</b> of ${R}.`,
      },
      {
        t: 'p',
        html: `<b>Why this is believable:</b> As you slide the line ${AX} + ${BY} = ${k} across the region (increasing ${k} pushes it in one fixed direction), the last feasible point it touches before leaving the region is always a vertex, unless the line is parallel to an edge, in which case it leaves along a whole edge whose endpoints are still vertices. Either way, a vertex carries the optimum.`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2 (Bounded vs unbounded).</b> Let ${R} be the feasible region and ${ZAXBY} the objective function.<br>• If ${R} is <b>bounded</b> (and non-empty), then ${Z} has <b>both</b> a maximum and a minimum on ${R}, and each occurs at a corner point.<br>• If ${R} is <b>unbounded</b>, then a maximum (or minimum) <b>may or may not</b> exist. If it exists, it still occurs at a corner point.`,
      },
      {
        t: 'p',
        html: 'The unbounded case is where students lose marks, so it gets its own verification step below.',
      },
      {
        t: 'proc',
        title: 'The Corner-Point Method: step by step',
        steps: [
          `<b>Draw the feasible region.</b> Convert each inequality to its boundary line (replace ≤ or ≥ with${NB}=), plot the line, and shade the correct side. <b>Reasoning:</b> a quick test: substitute the origin ${P(0, 0)}. If it satisfies the inequality, shade the side containing the origin; if not, shade the other side. (Use a different test point if a line passes through the origin.)`,
          '<b>Find all corner points.</b> Read off the vertices where boundary lines cross. <b>Reasoning:</b> by Theorem 1 the answer hides at a vertex, so these are the only points worth evaluating. Find them by inspection or by solving the two intersecting line equations simultaneously.',
          `<b>Evaluate ${Z} at every corner point.</b> Build a small table of (corner point, value of ${Z}). Let ${M} = largest value found, ${m} = smallest value found.`,
          `<b>Read off the answer.</b> • If the region is <b>bounded</b>: ${M} is the maximum and ${m} is the minimum. Done.<br>• If the region is <b>unbounded</b>, you must verify:<br>– ${M} is the genuine maximum <b>only if</b> the open half-plane ${AX} + ${BY}${NB}>${NB}${M} has <b>no point in common</b> with the feasible region. Otherwise ${Z} has no maximum.<br>– ${m} is the genuine minimum <b>only if</b> the open half-plane ${AX} + ${BY}${NB}<${NB}${m} has <b>no point in common</b> with the feasible region. Otherwise ${Z} has no minimum.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Reasoning for Step 4:</b> in an unbounded region you can sometimes keep walking forever and keep improving ${Z}. The half-plane test asks, “can I find any feasible point that beats my best corner?” If the answer is no, your corner value is truly optimal.`,
      },
      { t: 'fig', id: 'm12-12-fig-12.1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A bakery in Pune makes two kinds of cookies each morning: nankhatai and kaju (cashew) cookies, measured in batches. Each batch of nankhatai uses 1 kg of flour and 3 oven-slots; each batch of kaju cookies uses 2 kg of flour and 2 oven-slots. The bakery has 8 kg of flour and 12 oven-slots available. Profit is ₹40 per batch of nankhatai and ₹50 per batch of kaju cookies. How many batches of each should it bake to maximise profit?',
        fig: 'm12-12-fig-12.2',
        steps: [
          `<b>Formulation.</b> Let ${x} = batches of nankhatai, ${y} = batches of kaju cookies.<br>Maximise ${Z} = 40${x} + 50${y}<br>subject to ${x} + 2${y} ≤ 8 (flour)<br>3${x} + 2${y} ≤ 12 (oven-slots)<br>${NONNEG}`,
          `<b>Find the corner points.</b> Plot ${x} + 2${y} = 8 and 3${x} + 2${y} = 12. Their intersection: subtract the first from the second, 2${x} = 4 ⇒ ${rel(x, '=', '2')}, then ${rel(y, '=', '3')}. The feasible region ${I('OABC')} is bounded with vertices:<br>${O}${P(0, 0)}, ${A}${P(4, 0)}, ${B}${P(2, 3)}, ${C}${P(0, 4)}.`,
          `<b>Evaluate ${Z}.</b><br>Corner point → ${Z} = 40${x} + 50${y}<br>${O}${P(0, 0)} → 0<br>${A}${P(4, 0)} → 160<br>${B}${P(2, 3)} → 80 + 150 = <b>230</b>${NB}←${NB}Maximum<br>${C}${P(0, 4)} → 200`,
        ],
        ans: 'The bakery should bake <b>2 batches of nankhatai and 3 batches of kaju cookies</b> for a maximum profit of <b>₹230</b>.',
      },
      {
        t: 'ex',
        tag: 'CUET Speed Trap / Conceptual',
        q: `The corner points of a feasible region are ${P(0, 4)}, ${P(3, 3)} and ${P(6, 0)}. For the objective function ${Z} = 2${x} + 2${y}, the maximum of ${Z} occurs at: (a) ${P(3, 3)}${NB}only (b) ${P(6, 0)}${NB}only (c) every point on the segment joining ${P(3, 3)} and ${P(6, 0)} (d) ${P(0, 4)}${NB}only`,
        steps: [
          `<b>Fast solve: no graph needed.</b> Evaluate at each corner:<br>${P(0, 4)} → 8,${NB}${NB}${P(3, 3)} → 12,${NB}${NB}${P(6, 0)} → 12.`,
          `The maximum value 12 is reached at <b>two</b> corners, ${P(3, 3)} and ${P(6, 0)}.`,
          `<b>The trap:</b> a hurried student circles (a) or (b), whichever they wrote down first. But by the multiple-optima property, when ${Z} hits the same optimum at two corners, every point on the segment joining them is also optimal.`,
          '<b>Speed tip:</b> the moment two corner values tie for the optimum, your answer is the whole edge between them: the objective line is parallel to that edge.',
        ],
        ans: '(c)',
      },
      {
        t: 'ex',
        tag: 'CUET / CBSE HOTS: Unbounded region',
        q: 'A dairy farmer mixes two feeds, Feed P and Feed Q (in kg). Each kg of P supplies 1 unit of protein and 2 units of fibre; each kg of Q supplies 1 unit of protein and 1 unit of fibre. The herd needs at least 6 units of protein and at least 8 units of fibre daily. Feed P costs ₹5/kg and Feed Q costs ₹4/kg. Find the mix of minimum cost.',
        fig: 'm12-12-fig-12.3',
        steps: [
          `<b>Formulation.</b> Let ${x} = kg of P, ${y} = kg of Q.<br>Minimise ${Z} = 5${x} + 4${y}<br>subject to ${x} + ${y} ≥ 6 (protein), 2${x} + ${y} ≥ 8 (fibre), ${NONNEG}`,
          `<b>Corner points.</b> Both inequalities are “≥”, so the region is <b>unbounded</b>, lying above both lines. Intersection of ${x} + ${y} = 6 and 2${x} + ${y} = 8: subtract ⇒ ${rel(x, '=', '2')}, ${rel(y, '=', '4')}. The corner points on the boundary of the feasible region are:<br>${P(0, 8)}, ${P(2, 4)}, ${P(6, 0)}.`,
          `<b>Evaluate ${Z}.</b><br>Corner point → ${Z} = 5${x} + 4${y}<br>${P(0, 8)} → 32<br>${P(2, 4)} → 10 + 16 = <b>26</b>${NB}←${NB}smallest<br>${P(6, 0)} → 30`,
          `<b>Verify (because the region is unbounded).</b> Is 26 truly the minimum? Test whether the open half-plane 5${x} + 4${y}${NB}<${NB}26 shares any point with the feasible region. The line 5${x} + 4${y} = 26 touches the region only at the corner ${P(2, 4)}; moving into the feasible region (up and to the right) only increases 5${x} + 4${y}. So no feasible point gives a value below 26.`,
        ],
        ans: `Minimum cost is <b>₹26</b>, at ${rel(x, '=', '2')} kg of P and ${rel(y, '=', '4')} kg of Q.`,
      },
      {
        t: 'ex',
        tag: 'CUET / Reasoning Level',
        q: `The corner points of a feasible region are ${P(0, 4)}, ${P(2, 3)} and ${P(5, 0)}. The objective function is ${Z} = ${I('px')} + ${I('qy')} with ${p},${NB}${rel(q, '>', '0')}. Find the condition on ${p} and ${q} so that the maximum of ${Z} occurs at both ${P(2, 3)} and ${P(5, 0)}.`,
        steps: [
          `<b>Reasoning.</b> For the maximum to be shared by two corners, ${Z} must take equal values there:<br>${Z}${P(2, 3)} = ${Z}${P(5, 0)}<br>⇒ 2${p} + 3${q} = 5${p} + 0<br>⇒ 3${q} = 3${p} ⇒ ${rel(p, '=', q)}.`,
          `<b>Why this makes geometric sense.</b> The edge joining ${P(2, 3)} and ${P(5, 0)} has slope<br>${fr('0 − 3', '5 − 2')} = −1.<br>The objective line ${I('px')} + ${I('qy')} = ${c} has slope −${fr(p, q)}. The optimum spreads across the whole edge exactly when the objective line is <b>parallel</b> to that edge:<br>−${fr(p, q)} = −1 ⇒ ${rel(p, '=', q)},<br>confirming the algebra. (A quick sanity check: with ${rel(p, '=', q)}, ${Z}${P(0, 4)} = 4${q} while ${Z}${P(2, 3)} = ${Z}${P(5, 0)} = 5${q}, so the shared maximum is exactly the segment from ${P(2, 3)} to ${P(5, 0)}.)`,
        ],
        ans: rel(p, '=', q),
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Maximise ${Z} = 30${x} + 20${y} subject to ${x} + ${y} ≤ 8, 2${x} + ${y} ≤ 10, ${NONNEG}. State the optimal point and value.`,
            a: `Maximum ${Z} = 180 at ${P(2, 6)}.`,
          },
          {
            q: `<b>[CUET]</b> The corner points of a bounded feasible region are ${P(0, 0)}, ${P(5, 0)}, ${P(3, 4)} and ${P(0, 6)}. Find the maximum of ${Z} = 4${x} + 3${y}.`,
            a: `Maximum ${Z} = 24 at ${P(3, 4)}.`,
          },
          {
            q: `<b>[CUET]</b> For the constraints ${NONNEG}, ${x} + ${y} ≥ 4, ${x} + 2${y} ≥ 6, is the feasible region bounded or unbounded? Find the minimum of ${Z} = 3${x} + 5${y} if it exists.`,
            a: `Unbounded region; minimum ${Z} = 16 at ${P(2, 2)} (verified by the half-plane test).`,
          },
          {
            q: `<b>[CUET]</b> The corner points of a feasible region are ${P(0, 3)}, ${P(1, 1)} and ${P(3, 0)}. For ${Z} = ${I('px')} + ${I('qy')} with ${p},${NB}${rel(q, '>', '0')}, find the condition on ${p}, ${q} so that the minimum occurs at both ${P(1, 1)} and ${P(3, 0)}.`,
            a: `${rel(q, '=', `2${p}`)}.`,
          },
          {
            q: `<b>[CBSE HOTS]</b> A carpenter makes stools (${x}) and chairs (${y}). Each stool needs 2 hours of cutting and 1 hour of polishing; each chair needs 1 hour of cutting and 2 hours of polishing. He has 10 cutting hours and 8 polishing hours weekly. Profit is ₹60 per stool and ₹50 per chair. Formulate the LPP and find the most profitable mix.`,
            a: `Maximise ${Z} = 60${x} + 50${y} s.t. 2${x} + ${y} ≤ 10, ${x} + 2${y} ≤ 8, ${XYNONNEG}; maximum ${Z} = 340 at ${P(4, 2)}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The feasible region of an LPP is the convex polygon with vertices ${P(0, 0)}, ${P(4, 0)}, ${P(2, 4)} and ${P(0, 5)}. The maximum of ${Z} = 5${x} + 3${y} is:`,
        opts: [
          {
            label: '20',
            nudge: `<b>(A)</b> 20: the value at ${P(4, 0)}; chosen by a student who tests only the ${x}-axis intercepts and stops early.`,
          },
          { label: '22', nudge: null },
          {
            label: '25',
            nudge: `<b>(C)</b> 25: comes from mis-reading the vertex as ${P(5, 0)} or adding coefficients carelessly.`,
          },
          {
            label: '15',
            nudge: `<b>(D)</b> 15: the value at ${P(0, 5)}; the trap for someone who assumes “more ${y} is better” without checking all corners.`,
          },
        ],
        correct: 1,
        solution: `Evaluate: ${P(0, 0)} → 0, ${P(4, 0)} → 20, ${P(2, 4)} → 10 + 12 = 22, ${P(0, 5)} → 15. Maximum = 22 at ${P(2, 4)}.`,
      },
      {
        t: 'mcq',
        q: `If the feasible region of an LPP is <b>unbounded</b>, then the objective function ${ZAXBY}:`,
        opts: [
          {
            label: 'always has a maximum',
            nudge: `<b>(A)</b>: confuses the bounded case (which guarantees both) with the unbounded case; on a region that runs off to the upper right, ${Z} = 5${x} + 4${y} has no maximum (Topic 03, worked example 2).`,
          },
          {
            label: 'always has a minimum',
            nudge: `<b>(B)</b>: confuses the bounded case (which guarantees both) with the unbounded case; a minimum can fail too (on the first quadrant, ${Z} = −${x} − ${y} has no minimum).`,
          },
          { label: 'may or may not have a maximum or minimum', nudge: null },
          {
            label: 'has neither',
            nudge: '<b>(D)</b>: over-corrects; unbounded regions frequently do have, say, a minimum (the cost problem in worked example 3), just not necessarily a maximum.',
          },
        ],
        correct: 2,
        solution: 'By Theorem 2, an unbounded region guarantees nothing: the optimum may or may not exist, and must be verified with the half-plane test.',
      },
      {
        t: 'mcq',
        q: `The minimum value of ${Z} = ${x} + 2${y} on the feasible region with corner points ${P(0, 2)}, ${P(1, 1)}, ${P(4, 0)} (region unbounded, opening upward-right) is:`,
        opts: [
          {
            label: '4',
            nudge: `<b>(A)</b> 4: the value at the two “end” corners; picked if you forget the vertex ${P(1, 1)} off the axes.`,
          },
          { label: '3', nudge: null },
          {
            label: '2',
            nudge: `<b>(C)</b> 2: the value of ${x} + ${y} at ${P(1, 1)}, which drops the 2 in front of ${y}; no corner gives ${x} + 2${y} = 2.`,
          },
          {
            label: 'does not exist',
            nudge: '<b>(D)</b>: wrong reflex of “unbounded ⇒ no answer.” Unbounded regions can still have a minimum.',
          },
        ],
        correct: 1,
        solution: `${P(0, 2)} → 4, ${P(1, 1)} → 3, ${P(4, 0)} → 4. Smallest = 3 at ${P(1, 1)}; the half-plane ${x} + 2${y}${NB}<${NB}3 has no feasible point, so 3 is genuine.`,
      },
      {
        t: 'mcq',
        q: `In an LPP, if ${ZAXBY} has the same maximum value at two distinct corner points, then:`,
        opts: [
          { label: 'the LPP has no solution', nudge: '<b>(A)</b>: the opposite; there are more solutions, not none.' },
          {
            label: 'the maximum occurs at exactly those 2 points',
            nudge: '<b>(B)</b>: the most tempting wrong choice; it forgets the segment in between.',
          },
          { label: 'the maximum occurs at every point on the segment joining them', nudge: null },
          {
            label: rel(a, '=', b),
            nudge: '<b>(D)</b>: true only in special coordinate setups (when that edge has slope −1); not a general consequence.',
          },
        ],
        correct: 2,
        solution: 'This is the multiple-optima property: equal optimum at two corners means the whole connecting segment is optimal, infinitely many solutions.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Stopping at the axis corners.</b> Many students evaluate ${Z} only at the corners on the axes and miss the vertex off the axes where two slanted constraints cross, which is very often where the optimum hides (see worked examples 1 and 3). <b>Always list every vertex.</b>`,
          '<b>Forgetting the unbounded check.</b> Reading off the smallest/largest corner value and writing “answer” without the half-plane verification costs the marks in an unbounded problem. CBSE examiners specifically look for that verification line.',
          `<b>Shading the wrong side.</b> Confusing ≤ and ≥ when shading flips your entire region. <b>Use the origin test:</b> plug ${P(0, 0)} into the inequality: if it holds, shade the origin’s side; if not, shade away.`,
          '<b>Mixing up “at most / at least”.</b> “At most 300” is ≤ 300; “at least 6 units” is ≥ 6. A single mis-translated word changes a maximisation answer entirely. Underline these words while formulating.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed for CUET):</b> When two corner values tie for the optimum, don’t recompute: the answer is the <b>entire edge</b> between them (objective line parallel to that edge). And for minimisation cost problems, the optimum is often at the vertex where two “≥” constraints intersect, so evaluate that one first; but still check every corner, because it can sit on an axis instead.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Objective</b>', note: `${ZAXBY} → maximise (profit) or minimise (cost).` },
          { f: '<b>Constraints</b>', note: `linear inequalities + non-negativity ${NONNEG}.` },
          { f: '<b>Feasible region</b> = common shaded region of all constraints.', note: '' },
          { f: '<b>Theorem 1</b>', note: 'if an optimum exists, it is always at a <b>corner point</b>.' },
          { f: '<b>Theorem 2</b>', note: '<b>bounded</b> (non-empty) → both max & min exist; <b>unbounded</b> → may or may not.' },
          { f: '<b>Corner-Point Method</b>', note: `draw region → list vertices → tabulate ${Z} → pick best (verify if unbounded).` },
          {
            f: '<b>Unbounded verify</b>',
            note: `max ${M} valid if and only if ${AX} + ${BY}${NB}>${NB}${M} misses the region; min ${m} valid if and only if ${AX} + ${BY}${NB}<${NB}${m} misses the region.`,
          },
          { f: '<b>Tie at two corners</b> → optimum along the <b>whole edge</b> (infinitely many solutions).', note: '' },
        ],
        aids: [
          '<b>“CORNERS, not centres”:</b> never search the middle of the region.',
          '<b>“At most = ≤, At least = ≥”:</b> underline the words before you formulate.',
          `<b>“Origin test”:</b> if ${P(0, 0)} fits, shade its side.`,
          '<b>“Unbounded? Verify or vanish”:</b> always run the half-plane check.',
        ],
      },
    ],
  },

  // ──────────────── Topic 02 · Subtopic 02 · pp. 777–787 ────────────────
  {
    n: '02',
    title: 'Mathematical Formulation & LPP Applications',
    kalam: 'Master the translation from words to math and you bank marks before a single graph is drawn.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Formulation is the first half of every CBSE LPP word problem, and CBSE often awards a chunk of marks for the model <b>alone</b>, sometimes asking “Express the following as an LPP” without solving ${ESTIMATE}. <b>CUET</b> loves formulation-reasoning MCQs ${ESTIMATE}: spotting the right inequality for “at least,” “at most,” or “cannot exceed by.” Master the translation from words to math and you bank marks before a single graph is drawn.<br><br>Builds directly on Topic 01: for the graphical/corner-point solving used here, see Topic 01. This topic focuses on <b>building</b> the model and recognising <b>problem types</b>. (LP is not in the JEE syllabus; this is a Boards + CUET skill.)`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'In Topic 01 you learned how to solve an LPP once it’s written in clean mathematical form. But in a real exam, and in real life, nobody hands you the inequalities. They hand you a paragraph: “A tailoring unit has 40 metres of cloth and 18 hours of machine time…” The hardest, most marks-rich skill in this chapter is <b>turning that paragraph into mathematics</b>. That skill is called <b>formulation</b>.',
      },
      {
        t: 'p',
        html: 'Think of yourself as a translator at a railway enquiry counter. A passenger speaks to you in everyday Hindi or Tamil; you must convert it into the precise codes the booking system understands. <b>Formulation is exactly this translation</b>: from the loose language of “we can’t afford more than ₹5000” into the exact symbol (cost) ≤ 5000. Get the translation right and the rest is mechanical. Get one word wrong (read “at least” as “at most”) and the entire answer collapses, no matter how perfectly you draw the graph afterwards.',
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Every word problem, no matter how it’s dressed up (sweaters or sand, calculators or crops), is built from the <b>same three questions</b>:`,
      },
      {
        t: 'p',
        html: `1. <b>What am I choosing?</b> The unknown quantities I control become the <b>decision variables</b> ${x} and ${y}. (How many tables? How many hectares? How many scoops?)`,
      },
      {
        t: 'p',
        html: `2. <b>What am I trying to make best?</b> The total profit or total cost I want to push up or down becomes the <b>objective function</b> ${ZAXBY}.`,
      },
      {
        t: 'p',
        html: `3. <b>What’s stopping me?</b> Every limit (material, money, time, demand, a promise to a customer) becomes a <b>constraint</b>, a linear inequality.`,
      },
      {
        t: 'p',
        html: 'Once you train your eye to hunt for these three things in any paragraph, every LPP starts to look the same. The “applications” you’ll meet (factory production, diet planning, transport, scheduling) are just different <b>costumes on the same skeleton</b>.',
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions to watch:</b>`,
      },
      {
        t: 'p',
        html: `• <b>Proportionality must hold.</b> Doubling production must exactly double the resource used and the profit earned. If there’s a bulk discount or a setup cost, the model is no longer linear and this method doesn’t apply.`,
      },
      {
        t: 'p',
        html: `• <b>Divisibility is assumed.</b> The graphical method allows fractional answers like ${rel(x, '=', '2.5')}. Many real problems (you can’t make half a sweater) silently assume you’ll round sensibly, and CBSE problems are usually designed so the optimum lands on whole numbers.`,
      },
      {
        t: 'p',
        html: `• <b>Watch hidden non-negativity.</b> “Number of buses,” “kg of fertiliser,” “hours worked” can never be negative. Forgetting ${NONNEG} is the single most common formulation slip.`,
      },
      {
        t: 'p',
        html: `• <b>Read every clause.</b> A sentence like “type B cannot exceed type A by more than 100” is an entire constraint hiding in plain English. Skipping it changes the answer.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: 'Formulation has its own vocabulary. Beyond the terms from Topic 01 (objective function, decision variables, constraints, non-negativity), the key idea here is recognising the <b>type</b> of each constraint from the language used.',
      },
      {
        t: 'p',
        html: `<b>The anatomy of a formulated LPP:</b><br>Maximise / Minimise ${ZAXBY} [objective]<br>subject to (structural constraints) [the limits],<br>${NONNEG} [non-negativity]`,
      },
      {
        t: 'table',
        title: 'Constraint-type dictionary: translate the English',
        head: ['English phrase', 'Constraint type', 'Symbol'],
        rows: [
          ['“at most”, “no more than”, “cannot exceed”, “available”, “within”', '<b>upper limit</b> (resource/capacity)', '≤'],
          ['“at least”, “minimum of”, “no less than”, “must meet”, “requires”', '<b>lower limit</b> (requirement/demand)', '≥'],
          ['“exactly”, “must equal”, “all of it is used”', '<b>equality</b> (balance/mix)', '='],
          ['“cannot be negative” (number of items, hours, kg)', '<b>non-negativity</b>', XYNONNEG],
        ],
      },
      {
        t: 'p',
        html: `<b>Two phrasings that trap students, learn them cold:</b><br>• <b>“B cannot exceed A by more than ${k}”</b> means ${y} − ${x} ≤ ${k}, i.e. −${x} + ${y} ≤ ${k}. (Here ${x} = A, ${y} = B.) It does <b>not</b> mean ${rel(y, '≤', k)}.<br>• <b>“A is at least twice B”</b> means ${x} ≥ 2${y}, i.e. ${x} − 2${y} ≥ 0. Read the direction carefully: “twice” multiplies the smaller quantity.`,
      },
      {
        t: 'p',
        html: `<b>Property: the objective and constraints share their variables.</b> Every constraint and the objective are written in the same two decision variables. If a quantity in the paragraph cannot be expressed using ${x} and ${y} alone, you have probably chosen your decision variables badly: go back to Step 1.`,
      },

      { t: 'part', title: 'The formulation procedure and application taxonomy' },
      {
        t: 'p',
        html: 'Formulation is a procedure, not a theorem, so here is the disciplined framework, followed by the family resemblances that let you recognise a problem on sight.',
      },
      {
        t: 'proc',
        title: 'The 5-Step Formulation Procedure',
        steps: [
          `<b>Name the decision variables.</b> Read the question: what number is the problem asking you to decide? Let those be ${x} and ${y}, and <b>write their units explicitly</b> (“let ${x} = number of cricket bats, ${y} = number of tennis racquets”). <b>Reasoning:</b> stating units now prevents you from mixing “hours” and “items” later.`,
          `<b>Write the objective function.</b> Find the per-unit profit or per-unit cost of each variable and combine: ${Z} = (rate<sub>${x}</sub>)${NB}${x} + (rate<sub>${y}</sub>)${NB}${y}. State clearly whether you <b>maximise</b> (profit, distance, output) or <b>minimise</b> (cost, time, waste). <b>Reasoning:</b> the objective is what the question actually wants: pin it down before drowning in constraints.`,
          '<b>Translate each restriction into a constraint.</b> Go through the paragraph sentence by sentence. For each limit, write a linear inequality, using the constraint-type dictionary to fix the direction of ≤ or ≥. <b>Reasoning:</b> working clause-by-clause means you never miss a hidden constraint.',
          `<b>Add non-negativity.</b> Append ${NONNEG}. <b>Reasoning:</b> physical quantities can’t go negative; this also fences the region into the first quadrant.`,
          `<b>State the complete model.</b> Write the full LPP together: “Maximise ${Z} = … subject to …”, so it’s ready to hand to the graphical method of Topic 01. <b>Reasoning:</b> a clean, collected model is what earns the formulation marks and prevents copying errors.`,
        ],
      },
      { t: 'p', html: '<b>The Four Application Families</b>' },
      {
        t: 'p',
        html: 'Almost every LPP you’ll meet is one of these. Spot the family and you already know the shape of the answer:',
      },
      {
        t: 'table',
        title: null,
        head: ['Family', 'Goal', 'Constraint signature', 'Typical story'],
        rows: [
          ['<b>Manufacturing / Product-mix</b>', '<b>Maximise</b> profit', 'resources ≤ available', 'factory making two products from limited material/machine time'],
          ['<b>Diet / Nutrition / Blending</b>', '<b>Minimise</b> cost', 'nutrients ≥ required', `mixing two foods/feeds/powders to meet minimum${NB}requirements cheaply`],
          ['<b>Transportation / Allocation</b>', '<b>Minimise</b> cost (or maximise use)', 'supply ≤, demand ≥', 'distributing goods, or splitting land/resources between two uses'],
          ['<b>Scheduling / Time</b>', '<b>Maximise</b> output / earnings', 'time ≤, minimum targets ≥', 'dividing limited hours between two activities'],
        ],
      },
      {
        t: 'p',
        html: '<b>Reading tip:</b> the goal word (“profit” vs “cost”) usually tells you the family. Profit/output/distance → maximise → expect ≤ constraints. Cost/requirement → minimise → expect ≥ constraints and (often) an <b>unbounded</b> region, so the verification step from Topic 01 will matter.',
      },
      { t: 'fig', id: 'm12-12-fig-12.4' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level: Product-mix with a “difference” constraint',
        q: 'A printing press makes cartons of ruled notebooks and cartons of sketchbooks. Each carton of notebooks needs 1 unit of paper; each carton of sketchbooks needs 2 units (thicker pages). The press has 100 units of paper and can finish at most 70 cartons in total per day. Also, because sketchbook demand is limited, sketchbook cartons cannot exceed notebook cartons by more than 20. Profit is ₹60 per notebook carton and ₹140 per sketchbook carton. Formulate as an LPP and find the most profitable output.',
        steps: [
          `<b>Step 1: Variables.</b> Let ${x} = cartons of notebooks, ${y} = cartons of sketchbooks.`,
          `<b>Step 2: Objective.</b> Maximise ${Z} = 60${x} + 140${y}.`,
          `<b>Step 3: Constraints (clause by clause).</b><br>• Paper: ${x} + 2${y} ≤ 100.<br>• Total output: ${x} + ${y} ≤ 70.<br>• “Sketchbooks cannot exceed notebooks by more than 20”: ${y} − ${x} ≤ 20 ⇒ −${x} + ${y} ≤ 20.`,
          `<b>Step 4: Non-negativity.</b> ${NONNEG}.`,
          `<b>Step 5: The model.</b><br>Maximise ${Z} = 60${x} + 140${y}<br>s.t. ${x} + 2${y} ≤ 100, ${x} + ${y} ≤ 70, −${x} + ${y} ≤ 20, ${XYNONNEG}.`,
          `<b>Solve (corner-point method).</b> Corners: ${P(0, 0)}, ${P(70, 0)}, ${P(40, 30)}, ${P(20, 40)}, ${P(0, 20)}.<br>Corner → ${Z} = 60${x} + 140${y}<br>${P(0, 0)} → 0<br>${P(70, 0)} → 4200<br>${P(40, 30)} → 2400 + 4200 = 6600<br>${P(20, 40)} → 1200${NB}+${NB}5600${NB}= <b>6800</b>${NB}←${NB}Maximum<br>${P(0, 20)} → 2800`,
          `Notice the optimum sits exactly where the “difference” constraint −${x} + ${y} = 20 is active: the very clause a careless reader would have dropped.`,
        ],
        ans: 'Make <b>20 cartons of notebooks and 40 of sketchbooks</b> for a maximum profit of <b>₹6800</b>.',
      },
      {
        t: 'ex',
        tag: 'CBSE HOTS: Allocation problem (three binding constraints)',
        q: 'A farmer has 12 hectares to split between wheat and mustard. Wheat needs 2 person-days of labour per hectare, mustard needs 1; only 18 person-days are available. Wheat needs 1 unit of water per hectare, mustard needs 3; only 24 units of water are available. Expected profit is ₹5000 per hectare of wheat and ₹4000 per hectare of mustard. How should the land be allocated for maximum profit?',
        steps: [
          `<b>Formulation.</b> Let ${x} = hectares of wheat, ${y} = hectares of mustard.<br>Maximise ${Z} = 5000${x} + 4000${y}<br>s.t. ${x} + ${y} ≤ 12 (land), 2${x} + ${y} ≤ 18 (labour), ${x} + 3${y} ≤ 24 (water), ${XYNONNEG}.`,
          `<b>Solve.</b> Corner points ${P(0, 0)}, ${P(9, 0)}, ${P(6, 6)}, ${P(0, 8)}.<br>Corner → ${Z} = 5000${x} + 4000${y}<br>${P(0, 0)} → 0<br>${P(9, 0)} → 45000<br>${P(6, 6)} → 30000${NB}+${NB}24000${NB}= <b>54000</b>${NB}←${NB}Maximum<br>${P(0, 8)} → 32000`,
          `<b>The HOTS twist:</b> at the optimum ${P(6, 6)}, <b>all three</b> constraints are satisfied as equalities: land (6 + 6 = 12), labour (12 + 6 = 18) and water (6 + 18 = 24) are all fully used. Three lines pass through one vertex. This is why you must always check every corner: the winning point is the one where the binding constraints intersect.`,
        ],
        ans: 'Plant <b>6 hectares of wheat and 6 of mustard</b> for a maximum profit of <b>₹54,000</b>.',
      },
      {
        t: 'ex',
        tag: 'CUET: Diet/blending, formulation only',
        q: 'A fitness coach blends two protein powders, P and Q (measured in scoops). One scoop of P gives 12 g protein and 20 g carbohydrate; one scoop of Q gives 8 g protein and 30 g carbohydrate. A client needs at least 48 g of protein and at least 120 g of carbohydrate per day. P costs ₹15 per scoop and Q costs ₹10 per scoop. Set up the LPP to meet the requirement at minimum cost.',
        steps: [
          `<b>Variables.</b> Let ${x} = scoops of P, ${y} = scoops of Q.`,
          `<b>Objective.</b> Minimise cost: ${Z} = 15${x} + 10${y}.`,
          `<b>Constraints (note the “≥”: these are requirements, not limits):</b><br>• Protein: 12${x} + 8${y} ≥ 48 ⇒ 3${x}${NB}+${NB}2${y}${NB}≥${NB}12.<br>• Carbohydrate: 20${x} + 30${y} ≥ 120 ⇒ 2${x}${NB}+${NB}3${y}${NB}≥${NB}12.<br>• Non-negativity: ${NONNEG}.`,
          `<b>The model.</b><br>Minimise ${Z} = 15${x} + 10${y}<br>s.t. 3${x} + 2${y} ≥ 12, 2${x} + 3${y} ≥ 12, ${XYNONNEG}.`,
          `<b>Recognise the family:</b> a diet problem${NB}→ minimise${NB}→ “≥” constraints${NB}→ the feasible region is <b>unbounded</b>, so when you go on to solve it, you must run the open-half-plane verification from Topic 01. (Question asked for formulation only: model complete.)`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / Formulation Reasoning',
        q: `Translate each condition into a constraint. A student earns from two freelance gigs: data-entry (${x} hours/week) and graphic design (${y} hours/week). (i) She has at most 20 working hours a week. (ii) Her client caps data-entry at 12 hours. (iii) To build her portfolio she wants at least 5 hours of design. (iv) Data-entry pays ₹150/hour and design ₹250/hour; she wants maximum earnings. Write the LPP and classify each constraint.`,
        steps: [
          `<b>Translation, clause by clause:</b><br>Condition${NB}→ Constraint${NB}→ Type<br>(i) at most 20 hours total${NB}→ ${x}${NB}+${NB}${y}${NB}≤${NB}20${NB}→ upper limit (capacity)<br>(ii) data-entry capped at 12${NB}→ ${rel(x, '≤', '12')}${NB}→ upper limit (bound${NB}on${NB}one${NB}variable)<br>(iii) at least 5 hours design${NB}→ ${rel(y, '≥', '5')}${NB}→ lower limit (requirement)<br>(iv) maximise earnings${NB}→ ${Z}${NB}=${NB}150${x}${NB}+${NB}250${y}${NB}→ objective (maximise)`,
          `<b>The model.</b><br>Maximise ${Z} = 150${x} + 250${y}<br>s.t. ${x} + ${y} ≤ 20, ${rel(x, '≤', '12')}, ${rel(y, '≥', '5')}, ${rel(x, '≥', '0')}.<br>(Here ${rel(y, '≥', '5')} already forces ${rel(y, '≥', '0')}, so a separate ${rel(y, '≥', '0')} is redundant but harmless to write.)`,
          '<b>Reasoning check:</b> the region is <b>bounded</b> (the “≤ 20” caps total hours), so by Theorem 2 (Topic 01) both a maximum and minimum exist at corner points, ready for the graphical method. The lesson: a single mixed bag of “at most / at least / capped at” phrases becomes four clean lines once you translate each clause separately.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>[CBSE]</b> A bakery makes cakes and pastries. Each cake needs 200 g flour and 25 g butter; each pastry needs 100 g flour and 50 g butter. There are 5 kg flour and 1 kg butter. Profit is ₹40 per cake and ₹25\u00a0per\u00a0pastry. Formulate the LPP for maximum profit (do not solve).',
            a: `With ${x} = cakes, ${y} = pastries:<br>Max${NB}${Z}${NB}=${NB}40${x}${NB}+${NB}25${y} s.t.<br>200${x}${NB}+${NB}100${y}${NB}≤${NB}5000${NB}⇒ 2${x}${NB}+${NB}${y}${NB}≤${NB}50;<br>25${x} + 50${y}${NB}≤${NB}1000${NB}⇒${NB}${x}${NB}+${NB}2${y}${NB}≤${NB}40;<br>${XYNONNEG}.`,
          },
          {
            q: `<b>[CUET]</b> “The number of economy seats must be at least three times the number of business seats.” If ${x} = economy seats, ${y} = business seats, which inequality is correct? Write it.`,
            a: `${x} ≥ 3${y} (i.e. ${x} − 3${y} ≥ 0).`,
          },
          {
            q: '<b>[CUET]</b> A trader blends two teas, X and Y. Each kg of X gives 3 units of aroma and costs ₹90; each kg of Y gives 5 units of aroma and costs ₹120. The blend must supply at least 30 units of aroma. Formulate the cost-minimisation LPP.',
            a: `With ${x} = kg of X, ${y} = kg of Y:<br>Min${NB}${Z}${NB}=${NB}90${x}${NB}+${NB}120${y} s.t. 3${x} + 5${y} ≥ 30; ${XYNONNEG}.`,
          },
          {
            q: `<b>[CUET]</b> A cottage unit can produce at most 60 items a day and must produce at least 10 of product B for a standing order. If ${x} = units of A and ${y} = units of B, write all the constraints (including non-negativity).`,
            a: `${x} + ${y} ≤ 60; ${rel(y, '≥', '10')}; ${rel(x, '≥', '0')} (and ${rel(y, '≥', '0')}, implied).`,
          },
          {
            q: '<b>[CBSE HOTS]</b> A transporter uses mini-trucks and large trucks. A mini-truck carries 2 tonnes and costs ₹1000/\u2060trip; a large truck carries 5 tonnes and costs ₹2000/\u2060trip. At least 30 tonnes must be moved, and the number of large trucks cannot exceed the number of mini-trucks. Formulate the cost-minimisation LPP.',
            a: `Min${NB}${Z}${NB}=${NB}1000${x}${NB}+${NB}2000${y} s.t.<br>2${x} + 5${y} ≥ 30; ${rel(y, '≤', x)}${NB}⇒${NB}−${x}${NB}+${NB}${y}${NB}≤${NB}0;<br>${XYNONNEG}, where ${x}${NB}=${NB}mini-truck trips, ${y}${NB}=${NB}large-truck trips.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `“Product B should be at most one-third of product A.” With ${x} = ${A}, ${y} = ${B}, the correct constraint is:`,
        opts: [
          { label: `${y} ≤ ${fr(x, '3')}`, nudge: null },
          {
            label: `${y} ≥ ${fr(x, '3')}`,
            nudge: '<b>(B)</b>: flips the inequality; the trap for reading “at most” as “at least.”',
          },
          {
            label: `${x} ≤ ${fr(y, '3')}`,
            nudge: '<b>(C)</b>: swaps the roles of A and B; chosen by mislabelling which variable is which.',
          },
          {
            label: `3${y} ≥ ${x}`,
            nudge: '<b>(D)</b>: is (B) multiplied through by 3, so it flips the inequality in the same way; the trap for reading “at most” as “at least.”',
          },
        ],
        correct: 0,
        solution: `“B at most one-third of A” → ${y} ≤ ${fr('1', '3')}${x}, i.e. 3${y} ≤ ${x}.`,
      },
      {
        t: 'mcq',
        q: 'A diet problem asks to minimise cost subject to meeting minimum nutrient levels. Which pair is typical (constraint sign, feasible region)?',
        opts: [
          { label: '“≤”, bounded', nudge: '<b>(A)</b>: “≤” constraints and a bounded region are the manufacturing (product-mix) signature, not diet.' },
          { label: '“≥”, unbounded', nudge: null },
          {
            label: '“=”, a single point',
            nudge: '<b>(C)</b>: equalities would over-determine the problem; not how diet LPPs are built.',
          },
          { label: '“≤”, unbounded', nudge: '<b>(D)</b>: “≤” is the manufacturing signature, not diet; minimum-nutrient requirements are “at least” conditions, so they give “≥”.' },
        ],
        correct: 1,
        solution: 'Requirements (“at least”) give “≥” constraints, which open the region upward/right (unbounded), so the minimum must be verified.',
      },
      {
        t: 'mcq',
        q: `In formulating an LPP, the conditions ${NONNEG} are called:`,
        opts: [
          { label: 'the objective function', nudge: `<b>(A)</b>: that’s ${ZAXBY}.` },
          { label: 'the optimal constraints', nudge: '<b>(B)</b>: not a standard term; a distractor built from real words.' },
          { label: 'the non-negative constraints', nudge: null },
          {
            label: 'the feasible solutions',
            nudge: '<b>(D)</b>: feasible solutions are points in the region, not these conditions.',
          },
        ],
        correct: 2,
        solution: 'These are the non-negativity (non-negative) constraints, restricting the model to the first quadrant.',
      },
      {
        t: 'mcq',
        q: '“A factory must use all 240 litres of available dye.” This sentence translates to a constraint of which type?',
        opts: [
          {
            label: '≤ (upper limit)',
            nudge: '<b>(A)</b>: “available” alone would be “≤”, but “must use all of it” tightens it to “=”.',
          },
          { label: '≥ (lower limit)', nudge: '<b>(B)</b>: would mean “use at least 240,” which the sentence doesn’t say.' },
          { label: '= (equality)', nudge: null },
          {
            label: 'non-negativity',
            nudge: '<b>(D)</b>: unrelated; non-negativity is about variables, not resource usage.',
          },
        ],
        correct: 2,
        solution: '“Must use all” forces exact consumption → an <b>equality</b> constraint (dye used = 240).',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Reversing ≤ and ≥.</b> “At least” is ≥; “at most” is ≤. This single flip turns a minimisation answer into nonsense. <b>Underline the limiting words</b> before writing any symbol.',
          '<b>Dropping a hidden constraint.</b> Sentences like “B cannot exceed A by more than 100” or “must produce at least 10 of B” are full constraints. Work <b>clause by clause</b> so none escapes.',
          `<b>Forgetting non-negativity.</b> Items, hours, kilograms, hectares: none can be negative. Always append ${NONNEG}; examiners deduct marks for its absence even if the rest is perfect.`,
          '<b>Choosing the wrong decision variables.</b> If you can’t write the objective and every constraint using just your two variables, you picked them badly. Re-read the question: the variables are whatever the problem asks you to decide.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & accuracy):</b> After formulating, run a 10-second <b>sanity scan</b>: (i) does the objective say max or min to match the goal word? (ii) is there one constraint per limiting sentence? (iii) is non-negativity present? (iv) do “cost/at-least” problems carry “≥” and “profit/at-most” problems carry “≤”? If all four check out, your model is almost certainly right.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>5-step formulation</b>',
            note: `name variables (with units) → write ${Z} (max/min) → translate each clause to a constraint → add ${XYNONNEG} → state the full model.`,
          },
          {
            f: '<b>Translate the words</b>',
            note: '“at most / cannot exceed / available” → ≤<br>“at least / minimum / requires” → ≥<br>“uses all / exactly” → =',
          },
          {
            f: '<b>Tricky phrases</b>',
            note: `“B exceeds A by at most ${k}” → −${x} + ${y} ≤ ${k}; “A at least twice B” → ${x} ≥ 2${y}.`,
          },
          {
            f: '<b>Four families</b>',
            note: 'product-mix (max, ≤)\u00a0· diet/blend (min, ≥)\u00a0· transport/allocation (min; ≤ & ≥)\u00a0· scheduling (max; time ≤, target ≥).',
          },
          {
            f: '<b>Goal word = family</b>',
            note: 'profit/output → maximise, expect\u00a0≤. cost/requirement → minimise, expect\u00a0≥ (often unbounded → verify).',
          },
          { f: '<b>Always</b> append non-negativity; <b>always</b> solve with the corner-point method (Topic 01).', note: '' },
        ],
        aids: [
          '<b>“NOC-N”:</b> <b>N</b>ame variables, <b>O</b>bjective, <b>C</b>onstraints, <b>N</b>on-negativity.',
          '<b>“Most ≤, Least ≥”:</b> the four words that decide every inequality direction.',
          '<b>“Min wants More”:</b> minimisation/cost problems use “at least” (≥) and usually open (unbounded) regions.',
        ],
      },
    ],
  },
];
