import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 12 Linear Programming, Topic 03, pp. 788–798 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word.
 *   Topic 03 = Subtopic 03 "Special Cases of LPP Solutions" (pp. 788–796),
 *   then the book's "Chapter 12: Complete Master Reference (a dash in print)" (pp. 797–798,
 *   a revision summary of the whole chapter), kept as the topic's last part,
 *   "Chapter master reference". "Subtopics 01–03" → "Topics 01–03".
 * The topic opens with its "Exam Relevance:" box as a part of its own, then is
 * split at its Sections 1 to 8. Figure 12.5 (caption p. 790, drawn p. 791) is
 * placed where its caption stands (after the detection procedures); Figure
 * 12.6 (792/793) draws the region of worked example 1 and goes on that
 * example. No unnumbered drawings on pp. 788–798. The corner-value table of
 * worked example 3 is written in its step, one row per line (DECISIONS-M12
 * item 43). No fractions on these pages; no em dashes. The expert review
 * rm1212a is applied (fx1212): its corrections change the printed words where
 * listed in reports-12/fx1212-applied.md.
 */
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner: opening a step with it keeps its bold lead inline, not a heading. */
const WJ = '\u2060';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const k = I('k');
const m = I('m');
const x = I('x');
const y = I('y');
const M = I('M');
const Z = I('Z');
const AX = I('ax');
const BY = I('by');

/** A short relation kept on one line. */
const rel = (l: string, op: string, r: string) => `${l}${NB}${op}${NB}${r}`;
/** A coordinate pair kept on one line. */
const P = (u: string | number, v: string | number) => `(${u},${NB}${v})`;
/** Z = ax + by. */
const ZAXBY = `${Z} = ${AX} + ${BY}`;
/** x, y ≥ 0. */
const XYNONNEG = `${x},${NB}${rel(y, '≥', '0')}`;
/** ax + by > M, ax + by < m. */
const ABOVE_M = `${AX} + ${BY}${NB}>${NB}${M}`;
const BELOW_m = `${AX} + ${BY}${NB}<${NB}${m}`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 03 · Subtopic 03 · pp. 788–798 ────────────────
  {
    n: '03',
    title: 'Special Cases of LPP Solutions',
    kalam: 'An LPP can end in one of four ways, and a complete student must recognise all four on sight.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `“Special cases” are favourite <b>1-mark and short-answer</b> CBSE questions (“Does this LPP have a feasible solution?”, “Why does this LPP have no maximum?”) and reliable <b>CUET MCQs</b> ${ESTIMATE}. They test whether you truly understand the method rather than just cranking the corner-point routine. Quick to learn, easy marks, and a common place to get tripped up. (Boards + CUET; LP is not in the JEE syllabus.)`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'So far almost every LPP we solved behaved nicely: one feasible region, one clean optimal corner. But real problems, and exam problems designed to test you, don’t always cooperate. An LPP can end in <b>one of four ways</b>, and a complete student must recognise all four on sight.',
      },
      {
        t: 'p',
        html: 'Think of solving an LPP like searching a fenced field for the highest point your ruler reads. Four things can happen:',
      },
      {
        t: 'p',
        html: '1. <b>One clear highest spot</b>: the unique optimal solution. The usual, happy case.',
      },
      {
        t: 'p',
        html: '2. <b>A whole ridge at the same height</b>: multiple optimal solutions. Your ruler lies flat along one fence, so every point on that fence ties for best.',
      },
      {
        t: 'p',
        html: '3. <b>The field never ends in the uphill direction</b>: an unbounded solution. You can keep walking and keep climbing forever; there is <b>no</b> highest point, so the maximum simply doesn’t exist.',
      },
      {
        t: 'p',
        html: '4. <b>There is no field at all</b>: no feasible solution. The fences contradict each other so badly that no point satisfies all of them. The region is empty and the problem has no answer.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a shopkeeper who insists “I must sell at least 60 items today” but also “my shelf holds at most 40 items.” No honest number of items can satisfy both: the demand and the limit fight each other. There’s nothing to optimise because there’s no valid choice to begin with. That’s an <b>infeasible</b> LPP. Compare that with a daydreaming trader who says only “sell at least 10 items” with no upper limit and no cost: profit can grow without bound, so there’s no maximum profit to find. That’s an <b>unbounded</b> solution. Spotting which trap a question is setting is the whole skill here.',
      },
      {
        t: 'p',
        html: '<b>One distinction worth burning into memory:</b> an <b>unbounded region</b> (the shape stretches to infinity) is <b>not</b> the same as an <b>unbounded solution</b> (the objective has no finite optimum). Many unbounded regions still give a perfectly good minimum: every feasible cost-minimisation diet problem does (its costs are positive, so the cost can never fall below 0). “Unbounded region” describes geometry; “unbounded solution” describes the answer. Never confuse the two.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• For a non-empty region, a maximum fails to exist only when the region is unbounded <b>in the direction the objective increases</b>. If the region is non-empty and bounded, Theorem 2 (Topic 01) guarantees both a max and a min, so no unbounded case arises (multiple optima still can).<br>• “No feasible solution” can only happen when constraints genuinely contradict; a single redundant constraint does not cause it.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'table',
        title: null,
        head: ['Outcome', 'What it means', 'Tell-tale sign on the graph'],
        rows: [
          ['<b>Unique optimal solution</b>', 'Exactly one point gives the optimum.', 'The objective line touches the region last at a single corner.'],
          [
            '<b>Multiple optimal solutions</b>',
            'Infinitely many points give the same optimum.',
            'Two corners tie for the optimum; the objective line is parallel to the edge joining them.',
          ],
          [
            '<b>Unbounded solution</b>',
            'The objective has no finite maximum (or no finite minimum).',
            'The region is unbounded and the open half-plane “better than every corner” still overlaps the region.',
          ],
          [
            '<b>No feasible solution (infeasible)</b>',
            'No point satisfies all constraints.',
            'The constraints have <b>no common shaded region</b>: the feasible region is empty.',
          ],
          [
            '<b>Redundant constraint</b>',
            'A constraint that can be removed without changing the region.',
            'The region formed by the others already lies on its allowed side: its line misses that region or only touches its boundary.',
          ],
        ],
      },
      {
        t: 'p',
        html: `<b>Properties to state precisely:</b><br>${WJ}• <b>Multiple optima (recap):</b> if ${ZAXBY} attains its optimum at two corner points, it attains the same value at every point on the segment joining them: infinitely many optimal solutions.<br>${WJ}• <b>Unbounded solution test:</b> for a maximisation problem on an unbounded region with largest corner value ${M}, the maximum <b>fails to exist</b> if the open half-plane ${ABOVE_M} has points in common with the feasible region.<br>${WJ}• <b>Infeasibility:</b> if the intersection of all constraint half-planes (including ${XYNONNEG}) is the empty set, the LPP has <b>no feasible solution</b> and hence no optimal solution.<br>${WJ}• <b>Redundancy:</b> removing a redundant constraint leaves the feasible region, and therefore the optimal solution, unchanged.`,
      },

      { t: 'part', title: 'Detection procedures' },
      { t: 'p', html: 'How to identify each special case while solving, step by step.' },
      {
        t: 'proc',
        title: 'To detect NO feasible solution',
        steps: [
          'Plot and shade every constraint as usual.',
          'Look for a region common to all of them (in the first quadrant).',
          'If <b>no such common region exists</b>, stop: write “the LPP has <b>no feasible solution</b>.” There is nothing to optimise. <b>Reasoning:</b> optimisation only makes sense over a non-empty set of valid choices.',
        ],
      },
      {
        t: 'proc',
        title: 'To detect an UNBOUNDED solution (no maximum)',
        steps: [
          'Confirm the feasible region is <b>unbounded</b>.',
          `Evaluate ${Z} at all corner points; let ${M} be the largest.`,
          `Test the open half-plane ${ABOVE_M}. If it shares <b>any</b> point with the region, the objective can exceed ${M}, so write “${Z} has <b>no maximum</b>.” <b>Reasoning:</b> a single feasible point beating every corner proves no corner can be the maximum. (The same region may still have a valid minimum: check separately.)`,
        ],
      },
      {
        t: 'proc',
        title: 'To detect MULTIPLE optimal solutions',
        steps: [
          `Evaluate ${Z} at all corners.`,
          'If the optimum value is attained at <b>two</b> corners, every point on the segment between them is also optimal. <b>Reasoning:</b> the objective line coincides with that edge, so all its points share the value.',
        ],
      },
      {
        t: 'proc',
        title: 'To detect a REDUNDANT constraint',
        steps: [
          'Draw the region using all constraints.',
          'If removing one line leaves the region unchanged (its line never forms an edge of the region), that constraint is <b>redundant</b>. <b>Reasoning:</b> it imposes no real restriction beyond what the others already enforce.',
        ],
      },
      { t: 'fig', id: 'm12-12-fig-12.5' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level: No feasible solution',
        q: `A coaching centre wants to run ${x} morning batches and ${y} evening batches. It must run at least 6 morning and at least 6 evening batches (staff commitments), but its rooms allow at most 10 batches in total per day. It wishes to maximise total enrolment ${Z} = 30${x} + 25${y}. Solve.`,
        fig: 'm12-12-fig-12.6',
        steps: [
          `<b>Constraints.</b><br>${rel(x, '≥', '6')}, ${rel(y, '≥', '6')}, ${x} + ${y} ≤ 10, ${XYNONNEG}.`,
          `<b>Analysis.</b> The first two constraints force ${x} + ${y} ≥ 6 + 6 = 12. But the room constraint demands ${x} + ${y} ≤ 10. No pair ${P(x, y)} can satisfy ${x} + ${y} ≥ 12 and ${x} + ${y} ≤ 10 simultaneously: the shaded regions never overlap.`,
          '(Interpretation: the centre’s staffing promise and its room capacity are in conflict; one must be relaxed.)',
        ],
        ans: `The feasible region is <b>empty</b>, so the LPP has <b>no feasible solution</b>; there is no optimal value of ${Z}.`,
      },
      {
        t: 'ex',
        tag: 'CBSE HOTS: Unbounded solution (no maximum)',
        q: `Maximise ${Z} = 5${x} + 4${y} subject to ${x} + ${y} ≥ 8, ${rel(x, '≥', '0')}, ${rel(y, '≥', '0')}.`,
        steps: [
          `<b>Region.</b> Only “≥” and non-negativity constraints: the region lies above the line ${x} + ${y} = 8 and stretches to infinity up and to the right. It is <b>unbounded</b>.`,
          `<b>Corner evaluation.</b> The boundary corner points are ${P(8, 0)} and ${P(0, 8)}:<br>${Z}${P(8, 0)} = 40,${NB}${NB}${Z}${P(0, 8)} = 32.<br>Largest corner value ${rel(M, '=', '40')}.`,
          `<b>Unbounded test.</b> Does 5${x} + 4${y}${NB}>${NB}40 overlap the region? Take the feasible point ${P(20, 0)} (it satisfies ${x} + ${y} = 20 ≥ 8): there ${Z} = 100 > 40. A feasible point beats the best corner, and we can push further (${P(100, 0)} ⇒ ${Z} = 500, and so on without limit).`,
          `(Note: this same region does have a minimum, ${Z} = 32 at ${P(0, 8)}, verified since 5${x} + 4${y}${NB}<${NB}32 misses the region.) This is the textbook trap: an unbounded region with no maximum but a perfectly good minimum.`,
        ],
        ans: `${Z} has <b>no maximum</b>: the solution is <b>unbounded</b>.`,
      },
      {
        t: 'ex',
        tag: 'CUET: Multiple optimal solutions',
        q: `Maximise ${Z} = 2${x} + 2${y} subject to ${x} + ${y} ≤ 6, ${rel(x, '≤', '4')}, ${rel(y, '≤', '4')}, ${XYNONNEG}. How many optimal solutions are there?`,
        steps: [
          `<b>Corners.</b> ${P(0, 0)}, ${P(4, 0)}, ${P(4, 2)}, ${P(2, 4)}, ${P(0, 4)}.<br>Corner → ${Z} = 2${x} + 2${y}<br>${P(0, 0)} → 0<br>${P(4, 0)} → 8<br>${P(4, 2)} → <b>12</b><br>${P(2, 4)} → <b>12</b><br>${P(0, 4)} → 8`,
          `The maximum 12 is attained at <b>two</b> corners, ${P(4, 2)} and ${P(2, 4)}.`,
        ],
        ans: `There are <b>infinitely many</b> optimal solutions: every point on the segment joining ${P(4, 2)} and ${P(2, 4)} (which lies on the edge ${x} + ${y} = 6) gives ${rel(Z, '=', '12')}. The objective line 2${x} + 2${y} = 12 is parallel to that edge.`,
      },
      {
        t: 'ex',
        tag: 'CUET: Spot the redundant constraint',
        q: `A feasible region is defined by ${x} + ${y} ≤ 10, ${rel(x, '≤', '12')}, ${rel(x, '≥', '0')}, ${rel(y, '≥', '0')}. Which constraint is redundant, and does removing it change the answer to any maximisation over this region?`,
        steps: [
          `<b>Analysis.</b> Within the first quadrant, ${x} + ${y} ≤ 10 already forces ${rel(x, '≤', '10')}. So ${rel(x, '≤', '12')} can never bind: every point allowed by the other constraints automatically satisfies ${rel(x, '≤', '12')}. Its line lies entirely outside the region.`,
          '(Lesson: not every line you’re given actually shapes the region; always check which constraints truly form the boundary.)',
        ],
        ans: `${rel(x, '≤', '12')} is <b>redundant</b>. Removing it leaves the region (and hence the optimum of any linear objective over it) completely unchanged.`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Does the LPP “Maximise ${Z} = ${x} + ${y} s.t. ${x} + ${y} ≥ 5, ${x} + ${y} ≤ 2, ${XYNONNEG}” have a feasible solution? Justify.`,
            a: `No feasible solution: ${x} + ${y} ≥ 5 and ${x} + ${y} ≤ 2 contradict; region empty.`,
          },
          {
            q: `<b>[CUET]</b> For “Maximise ${Z} = 3${x} + 2${y} s.t. ${x} − ${y} ≥ 1, ${rel(x, '≥', '0')}, ${rel(y, '≥', '0')}”, does a maximum exist? State the outcome type.`,
            a: `No maximum (unbounded solution); the region is unbounded in the increasing direction of ${Z}.`,
          },
          {
            q: `<b>[CUET]</b> The maximum of ${Z} = ${x} + ${y} is attained at both ${P(0, 5)} and ${P(5, 0)} of a feasible region. How many optimal solutions does the LPP have?`,
            a: `Infinitely many (every point on the segment joining ${P(0, 5)} and ${P(5, 0)}).`,
          },
          {
            q: `<b>[CUET]</b> In the constraints 2${x} + ${y} ≤ 20, ${rel(x, '≤', '15')}, ${XYNONNEG}, which constraint is redundant?`,
            a: `${rel(x, '≤', '15')} is redundant (2${x} + ${y} ≤ 20 with ${XYNONNEG} already forces ${rel(x, '≤', '10')}).`,
          },
          {
            q: `<b>[CBSE HOTS]</b> “Minimise ${Z} = 2${x} + 3${y} s.t. ${x} + ${y} ≥ 6, ${XYNONNEG}.” Does a minimum exist? Does a maximum exist? Explain both.`,
            a: `Minimum exists (${Z} = 12 at ${P(6, 0)}, verified); maximum does <b>not</b> exist (region unbounded upward, ${Z} grows without limit).`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'An LPP whose feasible region is the empty set has:',
        opts: [
          { label: 'a unique solution', nudge: '<b>(A)</b>: a unique solution needs one feasible point that is optimal; an empty region has no points at all.' },
          { label: 'infinitely many solutions', nudge: '<b>(B)</b>: infinitely many solutions need a whole optimal edge of feasible points; an empty region has none.' },
          {
            label: 'an unbounded solution',
            nudge: '<b>(C)</b>: “unbounded” needs a non-empty region that stretches to infinity; an empty region is not unbounded, it’s infeasible.',
          },
          { label: 'no feasible solution', nudge: null },
        ],
        correct: 3,
        solution: 'Empty region ⇒ no point satisfies all constraints ⇒ no feasible (and no optimal) solution.',
      },
      {
        t: 'mcq',
        q: 'A feasible region is unbounded. For a maximisation LPP, the maximum:',
        opts: [
          { label: 'always exists', nudge: '<b>(A)</b>: confuses with the bounded case.' },
          {
            label: 'never exists',
            nudge: `<b>(B)</b>: too strong; an unbounded region still has a maximum when the objective does not increase in any direction the region runs off in (on ${XYNONNEG}, ${Z} = −${x} − ${y} has maximum 0 at ${P(0, 0)}).`,
          },
          { label: 'may or may not exist', nudge: null },
          { label: 'equals the minimum', nudge: '<b>(D)</b>: unrelated; no such rule.' },
        ],
        correct: 2,
        solution: 'An unbounded region may still have a maximum, or may not: it must be checked with the half-plane test.',
      },
      {
        t: 'mcq',
        q: 'If a linear objective attains the same maximum value at two adjacent corner points, the number of optimal solutions is:',
        opts: [
          { label: '1', nudge: '<b>(A)</b>: contradicts the tie: two corners are already optimal, so there is more than one solution.' },
          {
            label: '2',
            nudge: '<b>(B)</b>: the classic trap: counts only the two corners, forgetting the edge between them.',
          },
          { label: '0', nudge: '<b>(C)</b>: contradicts the tie: the two corners themselves are optimal solutions, so there cannot be none.' },
          { label: 'infinite', nudge: null },
        ],
        correct: 3,
        solution: 'Every point on the connecting edge is optimal ⇒ infinitely many.',
      },
      {
        t: 'mcq',
        q: '“Unbounded region” and “unbounded solution” are:',
        opts: [
          { label: 'the same thing', nudge: '<b>(A)</b>: the most common confusion; they are distinct.' },
          {
            label: 'different: one is about the region’s shape, the other\u00a0about\u00a0whether a finite optimum exists',
            nudge: null,
          },
          {
            label: 'both impossible in LP',
            nudge: '<b>(C)</b>: false; both occur in LP (worked example 2 has an unbounded region and an unbounded solution).',
          },
          {
            label: 'terms for an empty feasible set',
            nudge: '<b>(D)</b>: false; neither describes an empty set: an empty feasible set means no feasible solution.',
          },
        ],
        correct: 1,
        solution: '“Unbounded region” = geometry stretches to infinity; “unbounded solution” = the objective has no finite optimum. A region can be unbounded yet still yield a finite minimum.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Unbounded region” ⇒ “no answer.”</b> Wrong. Most cost-minimisation problems have unbounded regions and a perfectly valid minimum. Always run the half-plane test before declaring “no optimum.”',
          '<b>Counting multiple optima as “two”.</b> A tie at two corners means infinitely many solutions (the whole edge), not two.',
          '<b>Missing infeasibility.</b> If you can’t find a common shaded region, don’t force corner points: state plainly that there is <b>no feasible solution</b>.',
          '<b>Treating every constraint as binding.</b> Some constraints are redundant. Check which lines actually form the boundary before solving.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Before grinding through corner points, take <b>5 seconds to classify the outcome</b>: Is there a common region? (else infeasible). Is it bounded? (if yes, both max & min exist: finite optimum). Only if it’s unbounded do you need the verification test. This quick triage saves time and prevents the classic special-case errors.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Four outcomes</b>',
            note: 'unique optimum · multiple optima (infinite) · unbounded solution (no finite optimum) · no feasible solution (empty region).',
          },
          { f: '<b>No feasible solution</b>', note: 'constraints contradict ⇒ no common shaded region ⇒ no answer.' },
          {
            f: '<b>Unbounded solution</b>',
            note: `unbounded region <b>and</b> ${ABOVE_M} still meets the region ⇒ no maximum. (Min may still exist!)`,
          },
          { f: '<b>Multiple optima</b>', note: 'two corners tie for the optimum ⇒ the whole joining edge is optimal (infinitely many).' },
          { f: '<b>Redundant constraint</b>', note: 'removing it doesn’t change the region or the answer.' },
          {
            f: '<b>Bounded region ⇒ no unbounded case</b> (if it is non-empty, Theorem 2 of Topic 01 guarantees both max & min); multiple optima can still occur.',
            note: '',
          },
        ],
        aids: [
          '<b>“No region, no answer”:</b> empty feasible set = infeasible.',
          '<b>“Region unbounded ≠ solution unbounded”:</b> geometry vs the objective.',
          '<b>“Tie = whole edge”:</b> two equal corners ⇒ infinitely many optima.',
        ],
      },

      // The book's "Chapter 12: Complete Master Reference (a dash in print)", pp. 797–798.
      { t: 'part', title: 'Chapter master reference' },
      { t: 'p', html: 'One-stop revision for the entire chapter. Everything below is consolidated from Topics 01–03.' },
      {
        t: 'p',
        html: `<b>A. Core terminology</b><br>Objective function ${ZAXBY} (the quantity to optimise)${NB}· decision variables ${x},${NB}${y} (what you choose)${NB}· constraints (linear inequalities)${NB}· non-negative constraints ${XYNONNEG}${NB}· feasible region (common region of all constraints)${NB}· feasible / infeasible / optimal solutions${NB}· bounded vs unbounded region${NB}· corner point (vertex).`,
      },
      {
        t: 'p',
        html: `<b>B. The two fundamental theorems</b><br>1. <b>Corner-point theorem:</b> if an optimum exists, it occurs at a <b>corner point</b> of the feasible region.<br>2. <b>Existence theorem:</b> if the region is non-empty and <b>bounded</b>, ${Z} has <b>both</b> a maximum and a minimum (each at a corner); if <b>unbounded</b>, an optimum <b>may or may not</b> exist.`,
      },
      {
        t: 'proc',
        title: 'C. Corner-Point Method (to solve)',
        steps: [
          'Draw and shade each constraint (origin test for the correct side).',
          'Identify all corner points.',
          `Evaluate ${Z} at every corner; record largest ${M}, smallest ${m}.`,
          `${WJ}<b>Bounded:</b>${NB}${rel(M, '=', 'max')}, ${rel(m, '=', 'min')}. <b>Unbounded:</b> verify: ${M} is the max only if ${ABOVE_M} misses the region; ${m} is the min only if ${BELOW_m} misses the region.`,
        ],
      },
      {
        t: 'p',
        html: `<b>D. The 5-Step Formulation Procedure (to model)</b><br>Name variables (with units) → write objective (max/min) → translate each clause to a constraint → add ${XYNONNEG} → state the complete LPP.`,
      },
      {
        t: 'p',
        html: `<b>E. Constraint-type dictionary</b><br>“at most / cannot exceed / available” → ≤${NB}· “at least / minimum / requires” → ≥${NB}· “uses all / exactly” → =. Tricky: “B exceeds A by at most ${k}” → −${x} + ${y} ≤ ${k}; “A at least twice B” → ${rel(x, '≥', `2${y}`)}.`,
      },
      {
        t: 'p',
        html: `<b>F. The four application families</b><br>Product-mix (maximise; resources ≤)${NB}· diet/blend (minimise; nutrients ≥)${NB}· transport/allocation (minimise; supply ≤ & demand ≥)${NB}· scheduling (maximise; time ≤ & targets ≥). Goal word tells the family: profit/output → max, expect${NB}≤; cost/requirement → min, expect${NB}≥ (often unbounded → verify).`,
      },
      {
        t: 'p',
        html: `<b>G. The four solution outcomes</b><br>Unique optimum${NB}· multiple optima (tie at two corners ⇒ whole edge, infinitely many)${NB}· unbounded solution (no finite optimum)${NB}· no feasible solution (empty region). <b>Bounded region ⇒ no unbounded case;</b> multiple optima can still occur.`,
      },
      {
        t: 'p',
        html: '<b>H. Chapter revision checklist</b><br>• I can translate any word problem into a complete LPP (objective + constraints + non-negativity).',
      },
      {
        t: 'p',
        html: '• I can draw a feasible region and locate every corner point.',
      },
      {
        t: 'p',
        html: '• I can apply the corner-point method, including the unbounded verification test.',
      },
      {
        t: 'p',
        html: '• I can recognise all four outcomes, including infeasible and unbounded.',
      },
      {
        t: 'p',
        html: '• I know the constraint-type dictionary and the tricky phrasings cold.',
      },
      {
        t: 'p',
        html: '• I can identify the application family and a redundant constraint.',
      },
    ],
  },
];
