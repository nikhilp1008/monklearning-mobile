/**
 * Chapter 12 · Linear Programming, Mathematics, Class 12.
 *
 * Restructured from the Drona Class 12 Mathematics Master Reference (pages 721
 * to 764) into the block system in design_handoff_textbooks/CONTENT_SPEC.md,
 * matching the voice and density of math-12-01-relations.ts.
 *
 * Editorial decisions worth recording:
 *
 * 1. FIVE topics, and the source decided the number. This is the shortest
 *    chapter in the book, 44 pages: three subtopics (Formulation and Graphical
 *    Solution, Mathematical Formulation and Applications, Special Cases), a
 *    two-page Complete Master Reference that only consolidates them, and a
 *    fourteen-page Round 2 Addendum of five inserts (A the convexity proof, B
 *    parametric objectives, C algebraic certificates of infeasibility and
 *    redundancy, D vertex enumeration, area and lattice points, E integer
 *    answers). Subtopic 02 is formulation, so it becomes topic 01. Subtopic 01
 *    is two separable skills that the source itself separates into Steps 1 to 2
 *    and Steps 3 to 4, so it splits: drawing and measuring the region becomes
 *    topic 02, with Addendum D folded in because "find the area" and "count the
 *    lattice points" are questions about a region, not about an optimum; the
 *    corner-point method becomes topic 03, with Addendum A folded in because
 *    the convexity proof is the justification of exactly that routine.
 *    Subtopic 03 becomes topic 04, with Addendum C folded in because a
 *    certificate of infeasibility is the algebraic form of "the regions do not
 *    overlap". Addenda B and E have no home in the three subtopics: both invert
 *    the standard question, one hiding the objective and one refusing
 *    fractional answers, so they share topic 05. The Master Reference is folded
 *    into snapshots and the hook, since it is revision of material already
 *    written rather than new content.
 *
 * 2. Eight `diagram` blocks, all `plot`, twenty-seven frames between them. The
 *    source asks for seven figures by name and six of them are drawn here:
 *    the sliding objective line on a bounded quadrilateral (topic 03), the
 *    bakery region with its two lines and four vertices (topic 02), the
 *    unbounded diet region with 5x + 4y = 26 touching at one corner (topic 03),
 *    the four-outcome panel (topic 04), the empty feasible set of the
 *    coaching-centre problem (topic 04, folded into the four-outcome panel as
 *    its fourth chip), and Addendum A's convex decomposition of a triangle
 *    (topic 03). The seventh, Subtopic 02's "WORD PROBLEM to LPP MODEL to
 *    OPTIMAL SOLUTION" flow diagram, is DROPPED: it is a box-and-arrow flow
 *    chart and no implemented `kind` draws one, so authoring it would have
 *    rendered an empty hole. Topic 01 therefore carries no figure, which is
 *    honest: formulation is a reading skill and the source's only figure for it
 *    is the one that cannot be drawn. Two figures are additions, both drawing
 *    something the source narrates in prose rather than something invented:
 *    topic 02's area fan and its sixteen lattice points, which is Addendum D's
 *    own worked example and doubles as the proof of the correction below; and
 *    topic 05's four objective slopes on one region, which is Addendum B's
 *    sentence "as r sweeps from 0 to infinity the optimal vertex walks C, B, A"
 *    made visible. `DiagramFrame.polygons` does the region filling throughout,
 *    with `line` and `vline` curves for the constraint boundaries; unbounded
 *    regions are polygons that run past the frame and are clipped by it.
 *
 * 3. Class 11 is quoted, not re-taught. math-11-05-inequalities.ts topic 02
 *    already covers the half-plane, the origin test, solid versus dotted
 *    boundaries, shading a system, bounded versus unbounded solution regions
 *    and reading corner points off an overlap. All of that is compressed into
 *    one paragraph and one defgrid at the head of topic 02 and then used. What
 *    is new here starts where Class 11 stopped: the overlap is no longer the
 *    answer, it is the search space.
 *
 * ERRATA (source pages 830 to 832): CHECKED, AND THERE IS NOTHING FOR THIS
 * CHAPTER. The errata lists five entries, for Chapter 1 (pages 14 and 43),
 * Chapter 3 (page 153) and Chapter 11 (pages 678 and 693), all of them
 * production clipping rather than mathematics, and it names no Chapter 12
 * page. Read in full rather than assumed.
 *
 * CORRECTIONS BEYOND THE ERRATA (found by re-solving every corner point and
 * re-evaluating the objective at each; the corrected value is what this chapter
 * teaches, and the printed one is never reproduced):
 *
 *   - Page 756, Addendum B, Practice 3 answer. For the unbounded region with
 *     corners (0, 8), (2, 4), (6, 0) and Z = px + qy, the condition for the
 *     MINIMUM to sit at (2, 4) is printed as "2p + 4q <= 8q and 2p + 4q <= 6p,
 *     i.e. 2p <= 4q and 4q <= 6p, giving 2q/3 <= p <= 2q". The second
 *     simplification is wrong: subtracting 2p from both sides of 2p + 4q <= 6p
 *     gives 4q <= 4p, that is q <= p, not 4q <= 6p. The correct condition is
 *     q <= p <= 2q. Two independent confirmations. Slopes: the edge (2, 4) to
 *     (6, 0) has slope −1 and the edge (0, 8) to (2, 4) has slope −2, so the
 *     critical ratios are p/q = 1 and p/q = 2, which are the endpoints of
 *     q <= p <= 2q and not of 2q/3 <= p <= 2q. Counterexample: p = 4, q = 5
 *     satisfies the printed condition, yet Z reads 40, 28 and 24 at the three
 *     corners, so the minimum is at (6, 0) and not at (2, 4). Taught corrected
 *     in topic 05, as a worked example whose third step spells out the
 *     subtraction, and named in that topic's `mistakes` card.
 *
 *   - Page 761, Addendum D, Example D.2. The lattice-point count for
 *     x + 2y <= 8, 3x + 2y <= 12, x, y >= 0 is printed as "Total:
 *     5 + 4 + 3 + 3 + 1 = 15 lattice points". Every strip count in the table
 *     above it is correct, and they sum to 16, not 15. Confirmed by direct
 *     enumeration: y = 0 gives x = 0..4 (5 points), y = 1 gives x = 0..3 (4),
 *     y = 2 gives x = 0..2 (3), y = 3 gives x = 0..2 (3), y = 4 gives x = 0
 *     (1). This chapter teaches 16, and the second frame of topic 02's
 *     measuring figure plots all sixteen dots so a student can count them.
 *
 *   - Pages 762 to 763, Addendum E, Example E.2. Minimising Z = 2x + 3y over
 *     x + y >= 4.5, x + 3y >= 9, x, y >= 0, the book lists the corners as
 *     (9/2, 0), (9/4, 9/4), (0, 9/2), states "check which corners belong to the
 *     region: all three do (each satisfies both inequalities)", and reports the
 *     continuous minimum as Z = 9 at (9/2, 0). (9/2, 0) is NOT feasible: it
 *     gives x + 3y = 4.5 + 0 = 4.5, which is below the required 9. On y = 0 the
 *     two bounds are x >= 4.5 and x >= 9 and the larger binds, so the corner is
 *     (9, 0), with Z = 18. The corner (0, 9/2) is also mis-attributed, to
 *     x + 3y = 9 with x = 0, which would give (0, 3); it in fact comes from
 *     x + y = 4.5 with x = 0, and (0, 3) is itself infeasible since 0 + 3 is
 *     below 4.5. The true corners are (0, 9/2), (9/4, 9/4) and (9, 0), reading
 *     13.5, 11.25 and 18, so the continuous minimum is Z = 11.25 at (9/4, 9/4),
 *     genuine because the region recedes in the +x and +y directions and Z
 *     increases along both. The book's integer answer, Z = 12 at (3, 2), is
 *     unaffected and is confirmed here: 2x + 3y = 12 gives (6, 0) which fails
 *     x + 3y >= 9, (3, 2) which satisfies both, and (0, 4) which fails
 *     x + y >= 4.5. The correct continuous optimum in fact shortens the scan
 *     from four candidate values to one, since the ceiling principle starts it
 *     at 12 rather than 9. Taught corrected in topic 05, with the feasibility
 *     check of the y-axis corner as the example's own first step.
 *
 *   - Page 763, Addendum E, Practice 2 answer, minor. Rejecting the lattice
 *     point (2, 4) for the region 2x + 3y <= 13, the check is printed as
 *     "14 <= 13? x", comparing the objective value 3(2) + 2(4) = 14 against the
 *     constraint bound 13. The constraint value at (2, 4) is 2(2) + 3(4) = 16,
 *     and 16 > 13 is what rejects the point. The verdict is right and the
 *     comparison is not; this chapter's practice answer does the check with 16.
 *
 * PDF EXTRACTION DAMAGE, distinguished from the above and re-authored rather
 * than guessed:
 *
 *   - Page 727, Example 4. The corner list prints as "(0, ), (2, 3) and
 *     (5, 0)", with the missing 4 appearing on its own at the foot of the page.
 *     The intended point is (0, 4), which the example's own closing check
 *     ("Z(0, 4) = 4q while Z(2, 3) = Z(5, 0) = 5q") confirms.
 *
 *   - Page 728, Practice answers. The same page-foot dislocation strips a digit
 *     from three answers: "Maximum Z = 0 at (2, 6)" (180), "minimum Z = 1 at
 *     (2, 2)" (16), and "maximum Z = 3 0 at (4, 2)" (340), with the loose 18, 6
 *     and 4 sitting at the bottom of the page. All three re-solve to the
 *     restored values, so this is extraction damage and not a book error.
 *     Answer 4 arrives empty; re-derived here as q = 2p, since a minimum shared
 *     by (1, 1) and (3, 0) needs p + q = 3p, and the edge joining them has
 *     slope −1/2 so the objective line must too. It is topic 05's second
 *     practice item.
 */
import type { Chapter } from '@/lib/textbooks';

export const ch12LinearProgramming: Chapter = {
  "chapter": "12",
  "title": "Linear Programming",
  "subject": "Mathematics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Turning a Paragraph into a Linear Programme",
      "chip": "01 FORMULATE",
      "kalam": "read one clause, write one inequality",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Turning a Paragraph into a Linear Programme</b><br>Formulation is the first half of every CBSE long-answer LPP question, and the board awards a chunk of the marks for the model alone. Some years it asks only for the model: <b>“Express the following as an LPP”</b>, no graph required. CUET (UG) loves formulation reasoning: one MCQ per paper on picking the right inequality for “at least”, “at most” or “cannot exceed by”. Get the translation right and you bank marks before a single line is drawn. Note the syllabus fact that shapes this whole chapter: <b>Linear Programming is not in the JEE Main or JEE Advanced syllabus</b>, so everything here is built for Boards and CUET depth, not JEE speed traps.<br><br><b>02 · The Feasible Region: Draw It, Then Measure It</b><br>The drawing is the second half of that same 5 to 6 mark board question, and it is where the marks are lost rather than won: a wrongly shaded side flips the entire region. CUET asks 2 to 3 quick MCQs on feasible regions and corner points. Two further patterns turn up in HOTS papers and CUET: <b>“find the area of the feasible region”</b> and <b>“how many points with integer coordinates lie in it”</b>. Both are ordinary coordinate geometry once the corners are right, and both transfer to JEE questions on regions and inequalities even though LP itself does not.<br><br><b>03 · The Corner-Point Method</b><br>The routine the whole chapter exists to justify, and a guaranteed scorer: almost every year CBSE carries one full 5 to 6 mark long-answer question that asks you to formulate an LPP and solve it graphically. CUET reads the optimum straight off a corner list. The one line examiners specifically hunt for is the <b>unbounded verification</b>, and it is the line most students skip. Master the routine and you rarely lose a mark here.<br><br><b>04 · The Four Ways an LPP Can End</b><br>Special cases are favourite CBSE 1-mark and short-answer questions: <b>“Does this LPP have a feasible solution?”</b>, <b>“Why does this LPP have no maximum?”</b>. They are reliable CUET MCQs too, because they test whether you understand the method or are only cranking the routine. Quick to learn, easy marks, and a common place to get tripped up: the difference between an unbounded <b>region</b> and an unbounded <b>solution</b> is asked almost verbatim.<br><br><b>05 · Unknown Coefficients and Whole-Number Answers</b><br>Two patterns beyond the standard question. The first hands you the corners and hides the objective: <b>“for which <i>p</i> and <i>q</i> does the maximum occur at this vertex?”</b>, a reliable CUET MCQ and CBSE HOTS short answer. The second is the honest version of the chapter’s own “divisibility is assumed” footnote: when the optimum lands at (3.5, 2) and the answer has to be whole gadgets, rounding is demonstrably wrong. Neither is examined in JEE, but comparing linear forms parametrically is exactly the machinery JEE Main uses in coordinate geometry."
        },
        {
          "t": "p",
          "html": "It is the week before Diwali and you run a small halwai shop. You can make two sweets, kaju katli and besan laddoo. Each kilogram of each earns you a different profit, but you have only so much khoya, only so much sugar, and only so many hours at the stove before the rush. The question that keeps you awake is easy to ask and impossible to eyeball: <b>given everything I am short of, how many kilos of each should I make so that my profit is as large as it can be?</b>"
        },
        {
          "t": "p",
          "html": "That question, in one sentence, is <b>Linear Programming</b>. It is the mathematics of squeezing the best possible outcome, the most profit or the least cost, out of <b>limited resources</b>. Three ideas do all the work. The quantity you want to push to its best value, written <i>Z</i> = <i>ax</i> + <i>by</i>, is the <b>objective function</b>. Every limit life puts on you becomes a <b>linear inequality</b>, and together those are the <b>constraints</b>. And the set of all honest choices, every (<i>x</i>, <i>y</i>) that respects all the limits at once, fills a region of the graph called the <b>feasible region</b>."
        },
        {
          "t": "p",
          "html": "“Linear” is doing real work in that name. The objective is <i>ax</i> + <i>by</i> and nothing more: no <i>x</i><sup>2</sup>, no <i>xy</i>, no square roots. Every constraint is a straight line with one side shaded. If the profit per unit changed as you made more, a bulk discount say, the whole method collapses, because the shortcut you are about to learn only holds for a straight ruler over a straight-fenced field."
        },
        {
          "t": "think",
          "html": "picture the feasible region as a fenced field and the objective <i>Z</i> = <i>ax</i> + <i>by</i> as a ruler whose reading climbs as you walk north-east. you want the spot in the field where the ruler reads highest. here is the beautiful part: for a straight ruler over a field with straight fences, that spot is <b>never</b> out in the open middle. it is always poking out at a <b>corner</b>. so you never search the field, you check its corners."
        },
        {
          "t": "def",
          "term": "Linear programming problem",
          "html": "A problem that asks you to <b>maximise or minimise</b> a linear function <i>Z</i> = <i>ax</i> + <i>by</i> of two <b>decision variables</b>, subject to a finite list of <b>linear inequalities</b> in those same two variables, always including the non-negativity conditions <i>x</i> ≥ 0 and <i>y</i> ≥ 0. Two variables is not a simplification, it is the limit of the graphical method: three or more needs the simplex algorithm, which is beyond this chapter."
        },
        {
          "t": "defgrid",
          "title": "The words examiners mark you on",
          "tag": "use them verbatim",
          "rows": [
            {
              "k": "Objective function",
              "v": "<i>Z</i> = <i>ax</i> + <i>by</i>, the quantity being optimised. <i>a</i> and <i>b</i> are the per-unit profit or cost"
            },
            {
              "k": "Decision variables",
              "v": "<i>x</i> and <i>y</i>, the quantities <b>you</b> get to choose. Always name them with their units"
            },
            {
              "k": "Constraints",
              "v": "the linear inequalities restricting the variables, one per limiting clause of the paragraph"
            },
            {
              "k": "Non-negative constraints",
              "v": "the conditions <i>x</i> ≥ 0, <i>y</i> ≥ 0. A separate named item, and marks are deducted for its absence"
            },
            {
              "k": "Feasible region",
              "v": "the common region satisfying <b>all</b> constraints, non-negativity included"
            },
            {
              "k": "Optimal solution",
              "v": "a feasible point that gives the optimum, maximum or minimum, value of <i>Z</i>"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "STANDARD FORM OF A MAXIMISATION LPP",
          "tag": "write it collected, on one page",
          "main": "Maximise Z = ax + by",
          "legend": [
            "subject to <i>c</i><sub>1</sub><i>x</i> + <i>d</i><sub>1</sub><i>y</i> ≤ <i>e</i><sub>1</sub>, <i>c</i><sub>2</sub><i>x</i> + <i>d</i><sub>2</sub><i>y</i> ≤ <i>e</i><sub>2</sub>, and so on for every resource",
            "and <i>x</i> ≥ 0, <i>y</i> ≥ 0, the non-negativity that fences the region into the first quadrant",
            "a minimisation problem is the same shape with “Minimise” and, usually, ≥ in place of ≤"
          ],
          "note": "Both a and b are real. In almost every examined problem they are positive, which is why the origin is almost never the optimal corner."
        },
        {
          "t": "p",
          "html": "Now the part the marks actually hang on. In an exam, and in life, nobody hands you inequalities. They hand you a paragraph: “A tailoring unit has 40 metres of cloth and 18 hours of machine time…”. The hardest and most marks-rich skill in this chapter is <b>turning that paragraph into mathematics</b>, and it has a name: <b>formulation</b>."
        },
        {
          "t": "think",
          "html": "think of yourself as a translator at a railway enquiry counter. a passenger speaks everyday hindi or tamil; you convert it into the exact codes the booking system understands. formulation is the same translation, from “we cannot afford more than ₹5000” into cost ≤ 5000. get the translation right and the rest is mechanical. read “at least” as “at most” and the whole answer collapses, however beautifully you draw the graph afterwards."
        },
        {
          "t": "defgrid",
          "title": "The constraint-type dictionary",
          "tag": "translate the English, then write the symbol",
          "rows": [
            {
              "k": "at most · no more than · cannot exceed · available · within",
              "v": "an <b>upper limit</b> on a resource or a capacity: ≤"
            },
            {
              "k": "at least · a minimum of · no less than · must meet · requires",
              "v": "a <b>lower limit</b>, a requirement or a demand: ≥"
            },
            {
              "k": "exactly · must equal · all of it is used",
              "v": "a <b>balance</b> or mix condition: ="
            },
            {
              "k": "number of items · hours · kg · hectares",
              "v": "hidden <b>non-negativity</b>: <i>x</i> ≥ 0, <i>y</i> ≥ 0, and it is never stated out loud"
            }
          ]
        },
        {
          "t": "p",
          "html": "Two phrasings trap almost everybody, so learn them cold. <b>“B cannot exceed A by more than <i>k</i>”</b> is a statement about the <b>difference</b>: with <i>x</i> = A and <i>y</i> = B it says <i>y</i> − <i>x</i> ≤ <i>k</i>, that is −<i>x</i> + <i>y</i> ≤ <i>k</i>. It does <b>not</b> say <i>y</i> ≤ <i>k</i>. And <b>“A is at least twice B”</b> reads <i>x</i> ≥ 2<i>y</i>: the word “twice” multiplies the <b>smaller</b> quantity, so the 2 lands on the side you were not expecting. Read the direction, do not pattern-match the numbers."
        },
        {
          "t": "proc",
          "title": "The five-step formulation procedure",
          "steps": [
            "<b>Name the decision variables, with units.</b> Ask what number the problem is asking you to decide, and write “let <i>x</i> = number of cricket bats, <i>y</i> = number of tennis racquets”. Stating the units now is what stops you mixing hours and items three lines later.",
            "<b>Write the objective function.</b> Find the per-unit profit or cost of each variable and combine them into <i>Z</i> = (rate for <i>x</i>)<i>x</i> + (rate for <i>y</i>)<i>y</i>. Say out loud whether you <b>maximise</b> (profit, output, distance) or <b>minimise</b> (cost, time, waste), and write that word down.",
            "<b>Translate each restriction, clause by clause.</b> Go through the paragraph sentence by sentence, and for each limit write one linear inequality, using the dictionary to fix ≤ against ≥. Working clause by clause is the only reliable way of never missing a hidden constraint.",
            "<b>Append non-negativity.</b> Write <i>x</i> ≥ 0, <i>y</i> ≥ 0 as its own line. Physical quantities cannot go negative, and this is also what fences the region into the first quadrant so that it has corners at all.",
            "<b>State the complete model.</b> Collect it: “Maximise <i>Z</i> = … subject to … and <i>x</i>, <i>y</i> ≥ 0”. A clean collected model is what earns the formulation marks and what stops you copying a coefficient wrongly into the graph."
          ]
        },
        {
          "t": "p",
          "html": "Once your eye is trained to hunt for those three things, every LPP starts to look the same. Factory production, diet planning, transport, scheduling: they are different costumes on one skeleton. And the <b>goal word</b> usually tells you which costume before you have read the numbers. Profit, output or distance means maximise, and you should expect ≤ constraints and a closed region. Cost or requirement means minimise, and you should expect ≥ constraints and, very often, a region that runs off to infinity."
        },
        {
          "t": "defgrid",
          "title": "The four application families",
          "tag": "spot the family, predict the shape",
          "rows": [
            {
              "k": "Manufacturing, product mix",
              "v": "maximise profit; resources ≤ available. A factory making two products from limited material or machine time"
            },
            {
              "k": "Diet, nutrition, blending",
              "v": "minimise cost; nutrients ≥ required. Mixing two foods or feeds to meet minimums cheaply"
            },
            {
              "k": "Transport, allocation",
              "v": "minimise cost or maximise use; supply ≤ and demand ≥. Splitting land or stock between two uses"
            },
            {
              "k": "Scheduling, time",
              "v": "maximise output; time ≤ available, targets ≥ promised. Dividing limited hours between two activities"
            }
          ]
        },
        {
          "t": "p",
          "html": "Three assumptions sit underneath all of it, and an examiner can ask you to name them. <b>Proportionality</b>: doubling production must exactly double the resource used and the profit earned, so a bulk discount or a one-off setup cost breaks the model. <b>Divisibility</b>: the graphical method happily returns <i>x</i> = 2.5, and most board problems are designed so the optimum lands on whole numbers anyway. And <b>hidden non-negativity</b>: number of buses, kilograms of fertiliser, hours worked, none of these can be negative, and forgetting to say so is the single most common formulation slip."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A printing press makes cartons of ruled notebooks and cartons of sketchbooks. A notebook carton needs 1 unit of paper, a sketchbook carton 2 units. The press has 100 units of paper and can finish at most 70 cartons a day in total. Sketchbook cartons cannot exceed notebook cartons by more than 20. Profit is ₹60 and ₹140 per carton. Formulate, then find the most profitable output.",
          "steps": [
            "Variables: let <i>x</i> = cartons of notebooks, <i>y</i> = cartons of sketchbooks, both per day.",
            "Objective: maximise <i>Z</i> = 60<i>x</i> + 140<i>y</i>.",
            "Paper: <i>x</i> + 2<i>y</i> ≤ 100. Total output: <i>x</i> + <i>y</i> ≤ 70. The difference clause: <i>y</i> − <i>x</i> ≤ 20, that is −<i>x</i> + <i>y</i> ≤ 20. Non-negativity: <i>x</i> ≥ 0, <i>y</i> ≥ 0.",
            "Corners: (0, 0), (70, 0), (40, 30) from <i>x</i> + <i>y</i> = 70 with <i>x</i> + 2<i>y</i> = 100, (20, 40) from <i>x</i> + 2<i>y</i> = 100 with −<i>x</i> + <i>y</i> = 20, and (0, 20).",
            "Values of <i>Z</i>: 0, 4200, 6600, <b>6800</b>, 2800."
          ],
          "ans": "20 cartons of notebooks and 40 of sketchbooks, profit ₹6800. The optimum sits exactly where −<i>x</i> + <i>y</i> = 20 is active, the very clause a careless reader drops"
        },
        {
          "t": "ex",
          "tag": "CBSE HOTS",
          "q": "A farmer has 12 hectares to split between wheat and mustard. Wheat needs 2 person-days of labour per hectare and mustard 1, with 18 person-days available. Wheat needs 1 unit of water per hectare and mustard 3, with 24 units available. Profit is ₹5000 and ₹4000 per hectare. Allocate the land for maximum profit.",
          "steps": [
            "Let <i>x</i> = hectares of wheat, <i>y</i> = hectares of mustard. Maximise <i>Z</i> = 5000<i>x</i> + 4000<i>y</i>.",
            "Land: <i>x</i> + <i>y</i> ≤ 12. Labour: 2<i>x</i> + <i>y</i> ≤ 18. Water: <i>x</i> + 3<i>y</i> ≤ 24. And <i>x</i>, <i>y</i> ≥ 0.",
            "Corners: (0, 0); (9, 0) since labour gives the tightest bound <i>x</i> ≤ 9 on the axis; (6, 6); (0, 8) since water gives the tightest bound <i>y</i> ≤ 8.",
            "Values: 0, 45000, <b>54000</b>, 32000."
          ],
          "ans": "6 hectares of wheat and 6 of mustard, profit ₹54,000. At (6, 6) all three constraints hold as equalities, 6 + 6 = 12, 12 + 6 = 18 and 6 + 18 = 24, so three lines pass through one vertex"
        },
        {
          "t": "ex",
          "tag": "CUET",
          "q": "A coach blends two protein powders, P and Q, in scoops. One scoop of P gives 12 g protein and 20 g carbohydrate; one scoop of Q gives 8 g and 30 g. A client needs at least 48 g of protein and at least 120 g of carbohydrate a day. P costs ₹15 a scoop, Q costs ₹10. Set up the LPP. Do not solve.",
          "steps": [
            "Let <i>x</i> = scoops of P, <i>y</i> = scoops of Q. The goal word is cost, so <b>minimise</b> <i>Z</i> = 15<i>x</i> + 10<i>y</i>.",
            "Protein is a requirement, so it is ≥: 12<i>x</i> + 8<i>y</i> ≥ 48, which divides down to 3<i>x</i> + 2<i>y</i> ≥ 12.",
            "Carbohydrate, likewise: 20<i>x</i> + 30<i>y</i> ≥ 120, that is 2<i>x</i> + 3<i>y</i> ≥ 12. And <i>x</i> ≥ 0, <i>y</i> ≥ 0.",
            "Family check: diet, minimise, ≥ throughout. So the region will be unbounded, and whoever solves it will owe the verification step."
          ],
          "ans": "Minimise <i>Z</i> = 15<i>x</i> + 10<i>y</i> subject to 3<i>x</i> + 2<i>y</i> ≥ 12, 2<i>x</i> + 3<i>y</i> ≥ 12, <i>x</i>, <i>y</i> ≥ 0"
        },
        {
          "t": "ex",
          "tag": "CUET PATTERN",
          "q": "A student takes two freelance gigs: data entry (<i>x</i> hours a week) and graphic design (<i>y</i> hours a week). She has at most 20 working hours a week, her client caps data entry at 12 hours, and she wants at least 5 hours of design for her portfolio. Data entry pays ₹150 an hour, design ₹250. Write the LPP and classify each constraint.",
          "steps": [
            "“At most 20 hours total” is a capacity: <i>x</i> + <i>y</i> ≤ 20.",
            "“Data entry capped at 12” is an upper bound on a single variable: <i>x</i> ≤ 12.",
            "“At least 5 hours of design” is a requirement: <i>y</i> ≥ 5.",
            "Earnings are the objective: maximise <i>Z</i> = 150<i>x</i> + 250<i>y</i>, with <i>x</i> ≥ 0. Note <i>y</i> ≥ 5 already forces <i>y</i> ≥ 0, so writing <i>y</i> ≥ 0 as well is redundant but harmless."
          ],
          "ans": "Maximise <i>Z</i> = 150<i>x</i> + 250<i>y</i> subject to <i>x</i> + <i>y</i> ≤ 20, <i>x</i> ≤ 12, <i>y</i> ≥ 5, <i>x</i> ≥ 0. The “≤ 20” caps the total, so the region is bounded"
        },
        {
          "t": "mcq",
          "q": "“Product B should be at most one-third of product A.” With <i>x</i> = A and <i>y</i> = B, the correct constraint is:",
          "correct": 0,
          "opts": [
            {
              "label": "<i>y</i> ≤ <i>x</i>/3",
              "nudge": null
            },
            {
              "label": "<i>y</i> ≥ <i>x</i>/3",
              "nudge": "The direction is flipped. “At most” is a ceiling on B, so B sits below the third, never above it."
            },
            {
              "label": "<i>x</i> ≤ <i>y</i>/3",
              "nudge": "The roles of A and B are swapped. The sentence caps B against A, so the fraction multiplies A, not B."
            },
            {
              "label": "3<i>y</i> ≥ <i>x</i>",
              "nudge": "This is the same flip as option 2 after clearing the fraction: 3<i>y</i> ≥ <i>x</i> says B is at least a third of A."
            }
          ],
          "solution": "“B at most one-third of A” reads <i>y</i> ≤ (1/3)<i>x</i> directly, and multiplying through by 3 gives the equivalent form 3<i>y</i> ≤ <i>x</i>. Write the sentence left to right before you touch the algebra: subject first, then the comparison word, then the amount."
        },
        {
          "t": "mcq",
          "q": "A diet problem asks you to minimise cost subject to meeting minimum nutrient levels. Its constraints and its feasible region are typically:",
          "correct": 1,
          "opts": [
            {
              "label": "“≤” constraints, a bounded region",
              "nudge": "That is the manufacturing signature: resources you cannot exceed. A diet problem states requirements, not stocks."
            },
            {
              "label": "“≥” constraints, an unbounded region",
              "nudge": null
            },
            {
              "label": "“=” constraints, a single point",
              "nudge": "Equalities would over-determine the mix and usually leave no freedom at all. Diet problems are built from requirements, which are inequalities."
            },
            {
              "label": "“≤” constraints, an unbounded region",
              "nudge": "Half right on the shape and wrong on the cause: it is the ≥ constraints that open the region upward and to the right."
            }
          ],
          "solution": "Requirements phrased as “at least” give ≥ constraints, which shade away from the origin and leave the region open upward and to the right. So the region is unbounded, and any minimum you read off a corner must be confirmed with the half-plane test."
        },
        {
          "t": "mcq",
          "q": "In formulating an LPP, the conditions <i>x</i> ≥ 0, <i>y</i> ≥ 0 are called:",
          "correct": 2,
          "opts": [
            {
              "label": "the objective function",
              "nudge": "That is <i>Z</i> = <i>ax</i> + <i>by</i>, the thing being optimised. These two conditions restrict the variables instead."
            },
            {
              "label": "the optimal constraints",
              "nudge": "Not a term in the syllabus. It is a distractor assembled from two real words, which is exactly why it reads plausibly."
            },
            {
              "label": "the non-negative constraints",
              "nudge": null
            },
            {
              "label": "the feasible solutions",
              "nudge": "Feasible solutions are <b>points</b> of the region, not conditions. A condition and a point are different objects."
            }
          ],
          "solution": "They are the non-negativity, or non-negative, constraints. Their job is to restrict the model to the first quadrant, which is what gives a resource problem corners in the first place, and CBSE deducts a mark when they are missing from a formulation."
        },
        {
          "t": "mcq",
          "q": "“A factory must use all 240 litres of the available dye.” This sentence becomes a constraint of which type?",
          "correct": 2,
          "opts": [
            {
              "label": "≤, an upper limit",
              "nudge": "“Available” alone would indeed give ≤ 240. But “must use all of it” tightens the ceiling into an exact demand."
            },
            {
              "label": "≥, a lower limit",
              "nudge": "That would read “use at least 240 litres”, which permits using 300. The sentence forbids that."
            },
            {
              "label": "=, an equality",
              "nudge": null
            },
            {
              "label": "a non-negativity constraint",
              "nudge": "Non-negativity is about the variables being physically possible, never about how much of a resource is consumed."
            }
          ],
          "solution": "“Must use all” forces exact consumption, so dye used = 240 and the constraint is an equality. This is the one row of the dictionary students never expect, because every other clause in a typical paragraph is an inequality."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] A bakery makes cakes and pastries. A cake needs 200 g flour and 25 g butter; a pastry needs 100 g and 50 g. There are 5 kg of flour and 1 kg of butter. Profit is ₹40 and ₹25. Formulate only.",
              "a": "Maximise <i>Z</i> = 40<i>x</i> + 25<i>y</i> subject to 200<i>x</i> + 100<i>y</i> ≤ 5000, that is 2<i>x</i> + <i>y</i> ≤ 50; and 25<i>x</i> + 50<i>y</i> ≤ 1000, that is <i>x</i> + 2<i>y</i> ≤ 40; with <i>x</i>, <i>y</i> ≥ 0. Convert kg to g before writing anything."
            },
            {
              "q": "[CUET] “The number of economy seats must be at least three times the number of business seats.” With <i>x</i> = economy and <i>y</i> = business, write the inequality.",
              "a": "<i>x</i> ≥ 3<i>y</i>, equivalently <i>x</i> − 3<i>y</i> ≥ 0. The multiplier lands on the smaller quantity, business seats."
            },
            {
              "q": "[CUET] A trader blends teas X and Y. Each kg of X gives 3 units of aroma and costs ₹90; each kg of Y gives 5 units and costs ₹120. The blend must supply at least 30 units of aroma. Formulate for minimum cost.",
              "a": "Minimise <i>Z</i> = 90<i>x</i> + 120<i>y</i> subject to 3<i>x</i> + 5<i>y</i> ≥ 30, <i>x</i>, <i>y</i> ≥ 0."
            },
            {
              "q": "[CUET] A cottage unit makes at most 60 items a day and must make at least 10 of product B for a standing order. With <i>x</i> = units of A and <i>y</i> = units of B, write every constraint.",
              "a": "<i>x</i> + <i>y</i> ≤ 60; <i>y</i> ≥ 10; <i>x</i> ≥ 0, and <i>y</i> ≥ 0 which <i>y</i> ≥ 10 already implies."
            },
            {
              "q": "[CBSE HOTS] A mini-truck carries 2 tonnes at ₹1000 a trip, a large truck 5 tonnes at ₹2000. At least 30 tonnes must move, and large-truck trips cannot exceed mini-truck trips. Formulate for minimum cost.",
              "a": "With <i>x</i> = mini-truck trips and <i>y</i> = large-truck trips: minimise <i>Z</i> = 1000<i>x</i> + 2000<i>y</i> subject to 2<i>x</i> + 5<i>y</i> ≥ 30 and <i>y</i> ≤ <i>x</i>, that is −<i>x</i> + <i>y</i> ≤ 0, with <i>x</i>, <i>y</i> ≥ 0."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Reversing ≤ and ≥.</b> “At least” is ≥ and “at most” is ≤, and this single flip turns a minimisation answer into nonsense. Underline the limiting word in the question paper before you write any symbol.",
            "<b>Dropping a hidden constraint.</b> “B cannot exceed A by more than 100” and “must produce at least 10 of B” are whole constraints hiding in ordinary English. Work clause by clause so that none escapes, and count your inequalities against your sentences at the end.",
            "<b>Forgetting non-negativity.</b> Items, hours, kilograms, hectares: none can be negative. Always append <i>x</i> ≥ 0, <i>y</i> ≥ 0 as a named line. Examiners deduct for its absence even when everything else is perfect.",
            "<b>Choosing the wrong decision variables.</b> If you cannot write the objective and <b>every</b> constraint with just your two variables, you picked them badly. Re-read the question: the variables are whatever it asks you to decide, not whatever it mentions first.",
            "<b>Mixing units mid-model.</b> 5 kg of flour and 200 g per cake belong in the same unit before they meet in an inequality. Writing the units next to <i>x</i> and <i>y</i> in step 1 is what makes this impossible to do by accident."
          ]
        },
        {
          "t": "protip",
          "html": "after formulating, run a ten-second sanity scan. (i) does the objective say max or min to match the goal word? (ii) is there exactly one constraint per limiting sentence? (iii) is non-negativity written down? (iv) do the cost and at-least problems carry ≥, and the profit and at-most problems carry ≤? four ticks and your model is almost certainly right, and you have spent ten seconds instead of losing the whole question."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "Z = ax + by, maximise or minimise",
              "note": "the objective; x and y are the decision variables"
            },
            {
              "f": "at most, cannot exceed, available ⇒ ≤",
              "note": "resource ceilings, the manufacturing signature"
            },
            {
              "f": "at least, minimum, requires ⇒ ≥",
              "note": "requirements, the diet signature"
            },
            {
              "f": "uses all, exactly ⇒ =",
              "note": "the row students never expect"
            },
            {
              "f": "B exceeds A by at most k ⇒ −x + y ≤ k",
              "note": "a difference clause, not a bound on y"
            },
            {
              "f": "A at least twice B ⇒ x ≥ 2y",
              "note": "twice multiplies the smaller quantity"
            },
            {
              "f": "always append x ≥ 0, y ≥ 0",
              "note": "a named line, worth its own mark"
            }
          ],
          "aids": [
            "“NOC-N: name variables, objective, constraints, non-negativity”",
            "“most ≤, least ≥” before you write a single symbol",
            "“goal word names the family”: profit means ≤, cost means ≥"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "The Feasible Region: Draw It, Then Measure It",
      "chip": "02 REGION",
      "kalam": "shade first, then read off every corner",
      "blocks": [
        {
          "t": "p",
          "html": "Class 11 already built the machinery, and this chapter simply uses it. A line <i>ax</i> + <i>by</i> = <i>c</i> cuts the plane into two <b>half-planes</b>, and a linear inequality in two variables is satisfied by one entire half-plane, boundary included when the sign is ≤ or ≥. To find which half, you substitute the <b>origin</b>: if (0, 0) satisfies the inequality, shade the side containing the origin, and if it does not, shade the other side. One test point settles infinitely many, because a linear expression keeps the same sign throughout each side."
        },
        {
          "t": "defgrid",
          "title": "Carried over from Class 11 inequalities",
          "tag": "assumed known, not re-derived here",
          "rows": [
            {
              "k": "Boundary line",
              "v": "replace the inequality sign with = and plot <i>ax</i> + <i>by</i> = <i>c</i> from its two intercepts"
            },
            {
              "k": "Solid or dotted",
              "v": "≤ and ≥ include the boundary and are drawn solid; strict inequalities are dotted. In LP every constraint is ≤ or ≥, so every line here is solid"
            },
            {
              "k": "Origin test",
              "v": "put (0, 0) into the inequality. True means shade the origin’s side, false means shade away"
            },
            {
              "k": "Line through the origin",
              "v": "then (0, 0) is on the boundary and decides nothing. Use any other point, (1, 0) or (0, 1)"
            },
            {
              "k": "A system",
              "v": "shade each inequality separately; the solution is the region shaded by <b>all</b> of them, the intersection"
            }
          ]
        },
        {
          "t": "p",
          "html": "What is new in Class 12 is what you do with that intersection. In Class 11 the shaded overlap was the answer. Here it is only the stage: it is the set of every honest choice open to you, and your job is to find the single point of it that reads highest on the objective. That set has a name of its own, and so does every point in it."
        },
        {
          "t": "def",
          "term": "Feasible region",
          "html": "The common region satisfying <b>all</b> the constraints of an LPP together with the non-negativity conditions. Any point inside it or on its boundary is a <b>feasible solution</b>, any point outside is an <b>infeasible solution</b>, and a feasible point that gives the best value of <i>Z</i> is an <b>optimal solution</b>. The whole method rests on one habit: the feasible region is drawn before <i>Z</i> is ever evaluated."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · WATCH THE REGION SHRINK, TAP A CONSTRAINT",
          "chips": [
            "FIRST QUADRANT",
            "ADD THE FLOUR",
            "ADD THE OVEN",
            "THE CORNERS"
          ],
          "captions": [
            "The bakery of the worked example: x batches of nankhatai, y batches of kaju cookies. Before any resource is counted, non-negativity alone has already thrown away three quarters of the plane. Everything from here on happens inside this quarter, which is why x ≥ 0 and y ≥ 0 are constraints and not decoration.",
            "Flour: each nankhatai batch takes 1 kg and each kaju batch 2 kg, and there are 8 kg, so x + 2y ≤ 8. The origin gives 0 ≤ 8, true, so the shaded side is the one containing the origin. The quarter plane has collapsed to a triangle with corners (0, 0), (8, 0) and (0, 4).",
            "Oven slots: 3 per nankhatai batch and 2 per kaju batch out of 12, so 3x + 2y ≤ 12. The origin passes again. This line slices the corner off at (8, 0), because the oven runs out long before the flour does when you bake only nankhatai. Four edges now, and the region is bounded.",
            "The corners, which are the only four points the rest of the chapter will ever evaluate. O(0, 0) and the two intercepts A(4, 0) and C(0, 4) can be read off. B(2, 3) has to be solved for: subtract x + 2y = 8 from 3x + 2y = 12 to get 2x = 4, so x = 2 and then y = 3."
          ],
          "frames": [
            {
              "x": [
                -0.8,
                9.0
              ],
              "y": [
                -0.8,
                7.0
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      0
                    ],
                    [
                      8.7,
                      0
                    ],
                    [
                      8.7,
                      6.7
                    ],
                    [
                      0,
                      6.7
                    ]
                  ],
                  "corners": false
                }
              ],
              "labels": [
                {
                  "x": 4.4,
                  "y": 3.4,
                  "text": "x ≥ 0, y ≥ 0"
                }
              ]
            },
            {
              "x": [
                -0.8,
                9.0
              ],
              "y": [
                -0.8,
                7.0
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -0.5,
                  "k": 4
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      0
                    ],
                    [
                      8,
                      0
                    ],
                    [
                      0,
                      4
                    ]
                  ],
                  "corners": false
                }
              ],
              "labels": [
                {
                  "x": 6.1,
                  "y": 1.9,
                  "text": "x + 2y = 8"
                }
              ]
            },
            {
              "x": [
                -0.8,
                9.0
              ],
              "y": [
                -0.8,
                7.0
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -0.5,
                  "k": 4,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -1.5,
                  "k": 6
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      0
                    ],
                    [
                      4,
                      0
                    ],
                    [
                      2,
                      3
                    ],
                    [
                      0,
                      4
                    ]
                  ],
                  "corners": false
                }
              ],
              "labels": [
                {
                  "x": 6.1,
                  "y": 1.9,
                  "text": "x + 2y = 8"
                },
                {
                  "x": 5.4,
                  "y": 4.6,
                  "text": "3x + 2y = 12"
                }
              ]
            },
            {
              "x": [
                -0.8,
                9.0
              ],
              "y": [
                -0.8,
                7.0
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -0.5,
                  "k": 4,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -1.5,
                  "k": 6,
                  "soft": true
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      0
                    ],
                    [
                      4,
                      0
                    ],
                    [
                      2,
                      3
                    ],
                    [
                      0,
                      4
                    ]
                  ],
                  "corners": false
                }
              ],
              "points": [
                {
                  "x": 0,
                  "y": 0,
                  "label": "O(0, 0)"
                },
                {
                  "x": 4,
                  "y": 0,
                  "label": "A(4, 0)"
                },
                {
                  "x": 2,
                  "y": 3,
                  "label": "B(2, 3)"
                },
                {
                  "x": 0,
                  "y": 4,
                  "label": "C(0, 4)"
                }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "A feasible region comes in exactly three useful shapes, and naming the shape early tells you what kind of trouble to expect. A <b>bounded</b> region can be enclosed inside a circle, like the bakery quadrilateral. An <b>unbounded</b> region runs off to infinity in some direction, which is what every set of ≥ constraints produces. And a region can be <b>empty</b>, when the constraints contradict one another and nothing satisfies all of them at once."
        },
        {
          "t": "defgrid",
          "title": "Four things a feasible region can be",
          "rows": [
            {
              "k": "Bounded",
              "v": "enclosable inside a circle. A convex polygon with finitely many corners, and both a maximum and a minimum are guaranteed"
            },
            {
              "k": "Unbounded",
              "v": "extends to infinity in some direction. Still has corners, but an optimum may or may not exist"
            },
            {
              "k": "Empty",
              "v": "no point satisfies every constraint. There is nothing to optimise and the honest answer is “no feasible solution”"
            },
            {
              "k": "Degenerate",
              "v": "a single point or a segment, when the constraints leave exactly one choice. Rare, and it is still feasible"
            }
          ]
        },
        {
          "t": "p",
          "html": "One property does the heavy lifting, and CBSE expects you to be able to state it. A bounded feasible region for a linear objective is always a <b>convex polygon</b>: no dents. Draw a straight line between any two feasible points and every point of that segment is feasible too. The reason is simple: each constraint contributes a half-plane, a half-plane is convex, and the intersection of convex sets is convex. Convexity is exactly what will let you get away with checking only the corners."
        },
        {
          "t": "def",
          "term": "Corner point, or vertex",
          "html": "A point of the feasible region formed by the intersection of <b>two boundary lines</b>, where those lines include the axes <i>x</i> = 0 and <i>y</i> = 0. A corner is a point of the region: an intersection that fails even one constraint is not a corner, it is a candidate you throw away."
        },
        {
          "t": "proc",
          "title": "Drawing the region and listing every corner",
          "steps": [
            "<b>Convert each inequality into its boundary line</b> by replacing ≤ or ≥ with =, and plot each line from its two intercepts. Include <i>x</i> = 0 and <i>y</i> = 0: the axes are boundary lines too, and most corners sit on one of them.",
            "<b>Shade the correct side of each</b> with the origin test, then shade the intersection of all of them. Confusing ≤ and ≥ here flips the entire region, so do the test in writing rather than in your head.",
            "<b>Intersect the boundary lines in pairs.</b> Every pair with a unique solution gives one candidate corner. Solve the pair simultaneously; elimination is usually one subtraction, and the axes make two of the pairs trivial.",
            "<b>Keep a candidate only if it satisfies every constraint.</b> This is the step that is skipped, and it is the step that catches the intersection lying outside the region. Substitute the candidate into each inequality and tick them off.",
            "<b>Order the survivors around the boundary</b>, anticlockwise from the origin, and discard duplicates where three lines happen to concur. Convexity guarantees a clean cycle, so if your list will not close into a polygon you have missed a corner or kept a bad one."
          ]
        },
        {
          "t": "formula",
          "kicker": "WHERE TWO BOUNDARY LINES MEET",
          "tag": "solve the pair, do not eyeball it",
          "main": "x = (b<sub>2</sub>c<sub>1</sub> − b<sub>1</sub>c<sub>2</sub>)/(a<sub>1</sub>b<sub>2</sub> − a<sub>2</sub>b<sub>1</sub>)",
          "legend": [
            "for the pair <i>a</i><sub>1</sub><i>x</i> + <i>b</i><sub>1</sub><i>y</i> = <i>c</i><sub>1</sub> and <i>a</i><sub>2</sub><i>x</i> + <i>b</i><sub>2</sub><i>y</i> = <i>c</i><sub>2</sub>, provided <i>a</i><sub>1</sub><i>b</i><sub>2</sub> − <i>a</i><sub>2</sub><i>b</i><sub>1</sub> ≠ 0",
            "and <i>y</i> = (<i>a</i><sub>2</sub><i>c</i><sub>1</sub> − <i>a</i><sub>1</sub><i>c</i><sub>2</sub>)/(<i>a</i><sub>1</sub><i>b</i><sub>2</sub> − <i>a</i><sub>2</sub><i>b</i><sub>1</sub>), the same determinant underneath",
            "a zero denominator means the lines are parallel, so that pair contributes no corner at all"
          ],
          "note": "In an exam, eliminating one variable by subtraction is faster and safer. Keep the formula for the moment two lines have awkward coefficients and you want a check."
        },
        {
          "t": "p",
          "html": "Two traps live in that procedure. The first is a candidate that is not feasible: two boundary lines will happily cross at a point that some third constraint forbids, and putting that point in your table quietly corrupts the answer. The second is the opposite, three lines concurring at a single vertex, which gives you the same corner three times over and makes it look as though you have found more corners than the polygon has. Both are cured by the same discipline: substitute every candidate into every constraint before it goes on the list."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find all the corner points of the region <i>x</i> + 2<i>y</i> ≤ 8, 3<i>x</i> + 2<i>y</i> ≤ 12, <i>x</i> ≥ 0, <i>y</i> ≥ 0.",
          "steps": [
            "Boundary lines: <i>x</i> + 2<i>y</i> = 8, 3<i>x</i> + 2<i>y</i> = 12, <i>x</i> = 0 and <i>y</i> = 0. Four lines, six pairs.",
            "Axes: <i>x</i> = 0 with <i>y</i> = 0 gives (0, 0). On <i>y</i> = 0 the two slant lines give <i>x</i> = 8 and <i>x</i> = 4, and only (4, 0) survives, since (8, 0) fails 3<i>x</i> + 2<i>y</i> ≤ 12.",
            "On <i>x</i> = 0 they give <i>y</i> = 4 and <i>y</i> = 6, and only (0, 4) survives, since (0, 6) fails <i>x</i> + 2<i>y</i> ≤ 8.",
            "The two slant lines: subtract the first from the second, 2<i>x</i> = 4, so <i>x</i> = 2 and <i>y</i> = 3. Check (2, 3): 2 + 6 = 8 ≤ 8 and 6 + 6 = 12 ≤ 12, both tight, so it is feasible."
          ],
          "ans": "O(0, 0), A(4, 0), B(2, 3), C(0, 4). Bounded, four corners, and two of the six candidate pairs were thrown away"
        },
        {
          "t": "ex",
          "tag": "CBSE HOTS",
          "q": "List the corner points of <i>x</i> + <i>y</i> ≤ 12, 2<i>x</i> + <i>y</i> ≤ 18, <i>x</i> + 3<i>y</i> ≤ 24, <i>x</i> ≥ 0, <i>y</i> ≥ 0, and say what is unusual about the region.",
          "steps": [
            "On the <i>x</i>-axis the three bounds are <i>x</i> ≤ 12, <i>x</i> ≤ 9 and <i>x</i> ≤ 24. The tightest wins: (9, 0).",
            "On the <i>y</i>-axis they are <i>y</i> ≤ 12, <i>y</i> ≤ 18 and <i>y</i> ≤ 8. The tightest wins: (0, 8).",
            "Pair the slant lines. <i>x</i> + <i>y</i> = 12 with 2<i>x</i> + <i>y</i> = 18 gives (6, 6). <i>x</i> + <i>y</i> = 12 with <i>x</i> + 3<i>y</i> = 24 gives 2<i>y</i> = 12, so (6, 6) again. And 2<i>x</i> + <i>y</i> = 18 with <i>x</i> + 3<i>y</i> = 24 gives 5<i>y</i> = 30, so (6, 6) a third time.",
            "All three slant boundaries pass through the one point (6, 6): 6 + 6 = 12, 12 + 6 = 18 and 6 + 18 = 24. Check it against nothing else is needed, it is on all three lines and in the first quadrant."
          ],
          "ans": "(0, 0), (9, 0), (6, 6), (0, 8). Three lines concur at (6, 6), so the same vertex arrives three times and <i>x</i> + <i>y</i> ≤ 12 touches the region at that single point only"
        },
        {
          "t": "ex",
          "tag": "CUET",
          "q": "Find the corner points of <i>x</i> + <i>y</i> ≥ 6, 2<i>x</i> + <i>y</i> ≥ 8, <i>x</i> ≥ 0, <i>y</i> ≥ 0, and say whether the region is bounded.",
          "steps": [
            "Both constraints are ≥, so the origin fails both and the shading runs away from the origin. The region lies above both lines and is <b>unbounded</b>.",
            "On the <i>y</i>-axis: <i>y</i> ≥ 6 from the first and <i>y</i> ≥ 8 from the second. The <b>larger</b> bound wins for a ≥, so the corner is (0, 8), not (0, 6).",
            "On the <i>x</i>-axis: <i>x</i> ≥ 6 and 2<i>x</i> ≥ 8, that is <i>x</i> ≥ 4. The larger wins again: (6, 0).",
            "The two slant lines: subtract <i>x</i> + <i>y</i> = 6 from 2<i>x</i> + <i>y</i> = 8 to get <i>x</i> = 2, then <i>y</i> = 4. Check (2, 4): 6 ≥ 6 and 8 ≥ 8, feasible. The rejected candidates (0, 6) and (4, 0) each fail the other constraint."
          ],
          "ans": "(0, 8), (2, 4), (6, 0), and the region is unbounded. With ≥ constraints the tightest bound is the <b>largest</b> one, which is the reverse of the ≤ case"
        },
        {
          "t": "formula",
          "kicker": "AREA OF THE REGION",
          "tag": "shoelace, indices cyclic",
          "main": "Area = ½ |Σ (x<sub>i</sub>y<sub>i+1</sub> − x<sub>i+1</sub>y<sub>i</sub>)|",
          "legend": [
            "over the corners <i>V</i><sub>1</sub>, …, <i>V</i><sub>n</sub> taken <b>in order</b> around the boundary, with <i>V</i><sub>n+1</sub> meaning <i>V</i><sub>1</sub>",
            "for a triangle with one vertex at the origin and the others at <i>U</i> and <i>W</i>, it collapses to ½ |<i>u</i><sub>1</sub><i>w</i><sub>2</sub> − <i>u</i><sub>2</sub><i>w</i><sub>1</sub>|",
            "a convex polygon also fans into <i>n</i> − 2 such triangles from any one vertex, which is the safest hand check"
          ],
          "note": "An unbounded region has no area, so the question can only be asked about a bounded one. If your shoelace answer is negative you walked the corners clockwise; take the modulus."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · MEASURING THE SAME REGION, TAP ONE",
          "chips": [
            "AREA BY THE FAN",
            "LATTICE POINTS"
          ],
          "captions": [
            "Fan the quadrilateral from O into two triangles along the dashed diagonal OB. Triangle OAB has base OA = 4 along the x-axis and height 3, the y-coordinate of B, so its area is 6. Triangle OBC has base OC = 4 along the y-axis and height 2, the x-coordinate of B, so its area is 4. Total 10 square units, and the shoelace sum gives the same 10.",
            "Every dot is a point of the region with whole-number coordinates. Count them by horizontal strips: y = 0 allows x = 0 to 4, five points; y = 1 allows x up to 10/3, so four; y = 2 allows x up to 8/3, so three; y = 3 allows x up to 2 from both constraints, so three; y = 4 allows x = 0 only, so one. Five plus four plus three plus three plus one is 16."
          ],
          "frames": [
            {
              "x": [
                -0.8,
                6.0
              ],
              "y": [
                -0.8,
                5.4
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      0
                    ],
                    [
                      4,
                      0
                    ],
                    [
                      2,
                      3
                    ],
                    [
                      0,
                      4
                    ]
                  ],
                  "corners": true
                }
              ],
              "segments": [
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    2,
                    3
                  ],
                  "dash": true,
                  "soft": true
                }
              ],
              "labels": [
                {
                  "x": 2.35,
                  "y": 0.85,
                  "text": "6"
                },
                {
                  "x": 0.75,
                  "y": 2.45,
                  "text": "4"
                },
                {
                  "x": 4.55,
                  "y": 4.4,
                  "text": "total 10"
                }
              ]
            },
            {
              "x": [
                -0.8,
                6.0
              ],
              "y": [
                -0.8,
                5.4
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      0
                    ],
                    [
                      4,
                      0
                    ],
                    [
                      2,
                      3
                    ],
                    [
                      0,
                      4
                    ]
                  ],
                  "corners": false,
                  "soft": true
                }
              ],
              "points": [
                {
                  "x": 0,
                  "y": 0
                },
                {
                  "x": 1,
                  "y": 0
                },
                {
                  "x": 2,
                  "y": 0
                },
                {
                  "x": 3,
                  "y": 0
                },
                {
                  "x": 4,
                  "y": 0
                },
                {
                  "x": 0,
                  "y": 1
                },
                {
                  "x": 1,
                  "y": 1
                },
                {
                  "x": 2,
                  "y": 1
                },
                {
                  "x": 3,
                  "y": 1
                },
                {
                  "x": 0,
                  "y": 2
                },
                {
                  "x": 1,
                  "y": 2
                },
                {
                  "x": 2,
                  "y": 2
                },
                {
                  "x": 0,
                  "y": 3
                },
                {
                  "x": 1,
                  "y": 3
                },
                {
                  "x": 2,
                  "y": 3
                },
                {
                  "x": 0,
                  "y": 4
                }
              ],
              "labels": [
                {
                  "x": 4.55,
                  "y": 4.4,
                  "text": "16 points"
                }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "That strip count is worth doing carefully, because it is the standard way the question is set. Fix an integer <i>y</i> = <i>j</i> inside the region's vertical range. Every constraint then collapses into an interval <i>L</i>(<i>j</i>) ≤ <i>x</i> ≤ <i>U</i>(<i>j</i>), which contributes ⌊<i>U</i>(<i>j</i>)⌋ − ⌈<i>L</i>(<i>j</i>)⌉ + 1 integer points, or none at all if the interval contains no integer. Sum over <i>j</i>. A useful companion fact: the number of lattice points on the segment joining two integer points is gcd(|Δ<i>x</i>|, |Δ<i>y</i>|) + 1, which for the edge from A(4, 0) to B(2, 3) is gcd(2, 3) + 1 = 2, that is the two endpoints and nothing between them."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "Find the area of the feasible region <i>x</i> + 2<i>y</i> ≤ 8, 3<i>x</i> + 2<i>y</i> ≤ 12, <i>x</i>, <i>y</i> ≥ 0, and check it two ways.",
          "steps": [
            "Corners in order: O(0, 0), A(4, 0), B(2, 3), C(0, 4).",
            "Fan from O. [OAB] = ½|4·3 − 0·2| = 6 and [OBC] = ½|2·4 − 3·0| = 4, so the total is 10.",
            "Base and height check. OAB has base OA = 4 and height 3, giving ½(4)(3) = 6. OBC has base OC = 4 and height 2, giving ½(4)(2) = 4.",
            "Shoelace: (0·0 − 4·0) + (4·3 − 2·0) + (2·4 − 0·3) + (0·0 − 0·4) = 0 + 12 + 8 + 0 = 20, and half of 20 is 10."
          ],
          "ans": "10 square units, agreed by three independent decompositions"
        },
        {
          "t": "ex",
          "tag": "CUET PATTERN",
          "q": "How many points with integer coordinates lie in the region <i>x</i> + 2<i>y</i> ≤ 8, 3<i>x</i> + 2<i>y</i> ≤ 12, <i>x</i>, <i>y</i> ≥ 0?",
          "steps": [
            "The region reaches from <i>y</i> = 0 to <i>y</i> = 4, so there are five strips. On the strip <i>y</i> = <i>j</i> the constraints read <i>x</i> ≤ 8 − 2<i>j</i> and <i>x</i> ≤ (12 − 2<i>j</i>)/3, with <i>x</i> ≥ 0 an integer.",
            "The count on each strip is ⌊min(8 − 2<i>j</i>, (12 − 2<i>j</i>)/3)⌋ + 1, the +1 being <i>x</i> = 0.",
            "<i>j</i> = 0: min(8, 4) = 4, so 5 points. <i>j</i> = 1: min(6, 10/3) = 10/3, so 4. <i>j</i> = 2: min(4, 8/3) = 8/3, so 3.",
            "<i>j</i> = 3: min(2, 2) = 2, so 3. <i>j</i> = 4: min(0, 4/3) = 0, so 1. Add: 5 + 4 + 3 + 3 + 1."
          ],
          "ans": "<b>16</b> lattice points. Note which cap binds: (12 − 2<i>j</i>)/3 governs the low strips and 8 − 2<i>j</i> the top one, and they cross over between <i>j</i> = 2 and <i>j</i> = 3, which is why the counts dip and then hold at 3"
        },
        {
          "t": "mcq",
          "q": "For the constraints <i>x</i> ≥ 0, <i>y</i> ≥ 0, <i>x</i> + <i>y</i> ≥ 4, <i>x</i> + 2<i>y</i> ≥ 6, the corner point on the <i>y</i>-axis is:",
          "correct": 3,
          "opts": [
            {
              "label": "(0, 2)",
              "nudge": "That satisfies neither constraint: 0 + 2 = 2 is below 4. It is not even a feasible point, let alone a corner."
            },
            {
              "label": "(0, 3)",
              "nudge": "This is where <i>x</i> + 2<i>y</i> = 6 meets the axis, but it fails the other constraint, 0 + 3 = 3 which is below 4. A candidate that is not feasible."
            },
            {
              "label": "there is none, the region is unbounded",
              "nudge": "Unbounded regions still have corners. Unboundedness is about the region running off to infinity, not about corners going missing."
            },
            {
              "label": "(0, 4)",
              "nudge": null
            }
          ],
          "solution": "On <i>x</i> = 0 the constraints read <i>y</i> ≥ 4 and 2<i>y</i> ≥ 6, that is <i>y</i> ≥ 3. For ≥ bounds the <b>larger</b> one binds, so <i>y</i> = 4 and the corner is (0, 4). Check it: 0 + 4 = 4 ≥ 4 and 0 + 8 = 8 ≥ 6, both hold."
        },
        {
          "t": "mcq",
          "q": "A feasible region has corners (0, 0), (4, 0), (4, 2), (3, 3) and (0, 3). Its area is:",
          "correct": 2,
          "opts": [
            {
              "label": "12",
              "nudge": "That is the whole 4 by 3 box. The region is the box with a corner triangle removed, so it must be smaller."
            },
            {
              "label": "11",
              "nudge": "This removes a triangle of area 1 rather than ½. The cut corner has legs of length 1, and a right triangle with legs 1 and 1 has area ½."
            },
            {
              "label": "23/2",
              "nudge": null
            },
            {
              "label": "24",
              "nudge": "Double the box. This is the shoelace sum before halving it, the single most common slip in the formula."
            }
          ],
          "solution": "Shoelace in order: 0 + 8 + 6 + 9 + 0 = 23, and half of 23 is 23/2. Check it independently: the 4 by 3 box has area 12, and the excluded top-right corner is a right triangle with legs 1 and 1 and area ½, leaving 12 − ½ = 23/2."
        },
        {
          "t": "mcq",
          "q": "Two boundary lines of an LPP cross at (5, 2), but a third constraint gives 4 at that point when it demands at least 6. The point (5, 2) is:",
          "correct": 1,
          "opts": [
            {
              "label": "a corner point of the feasible region",
              "nudge": "An intersection of two boundary lines is only a <b>candidate</b>. A corner has to lie in the region, and this point does not."
            },
            {
              "label": "an infeasible point, so not a corner",
              "nudge": null
            },
            {
              "label": "a corner, provided <i>Z</i> is largest there",
              "nudge": "The value of <i>Z</i> has nothing to do with it. Feasibility is decided by the constraints alone, before the objective is ever evaluated."
            },
            {
              "label": "a point of the region, since it is on two boundaries",
              "nudge": "Being on two boundaries of the system is not the same as satisfying the system. The third constraint is violated, so the point is outside."
            }
          ],
          "solution": "Every pair of boundary lines produces a candidate, and the candidate survives only if it satisfies <b>every</b> constraint. Here it fails one, so it is thrown away. Putting an infeasible intersection into a corner table is the quietest way to get the wrong optimum."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the corners of <i>x</i> + <i>y</i> ≤ 8, 2<i>x</i> + <i>y</i> ≤ 10, <i>x</i>, <i>y</i> ≥ 0.",
              "a": "(0, 0), (5, 0) since 2<i>x</i> ≤ 10 is the tighter axis bound, (2, 6) from subtracting the two lines, and (0, 8). Bounded."
            },
            {
              "q": "[CUET] Is the region <i>x</i> ≥ 0, <i>y</i> ≥ 0, <i>x</i> + <i>y</i> ≥ 4, <i>x</i> + 2<i>y</i> ≥ 6 bounded or unbounded? List its corners.",
              "a": "Unbounded, both constraints being ≥. Corners (0, 4), (2, 2) where the two lines meet, and (6, 0). The candidates (0, 3) and (4, 0) each fail the other constraint and are discarded."
            },
            {
              "q": "[CBSE PATTERN] Find the area of the feasible region <i>x</i> + <i>y</i> ≤ 6, <i>x</i> ≤ 4, <i>y</i> ≤ 3, <i>x</i>, <i>y</i> ≥ 0.",
              "a": "Corners (0, 0), (4, 0), (4, 2), (3, 3), (0, 3). Shoelace sum 0 + 8 + 6 + 9 + 0 = 23, area 23/2. Check: the 4 by 3 box is 12, minus a corner triangle of area ½."
            },
            {
              "q": "[CUET] Count the lattice points of that same region.",
              "a": "Strips <i>y</i> = 0, 1, 2 each cap <i>x</i> at min(4, 6 − <i>y</i>) = 4, giving 5 points each; the strip <i>y</i> = 3 caps <i>x</i> at 3, giving 4. Total 19. Check: the box holds 5 × 4 = 20 lattice points and only (4, 3) breaks <i>x</i> + <i>y</i> ≤ 6."
            },
            {
              "q": "[CBSE PATTERN] Find the perimeter of the region <i>x</i> + 2<i>y</i> ≤ 8, 3<i>x</i> + 2<i>y</i> ≤ 12, <i>x</i>, <i>y</i> ≥ 0, in exact form.",
              "a": "OA = 4, AB = √(2² + 3²) = √13, BC = √(2² + 1²) = √5, CO = 4. Perimeter 8 + √13 + √5."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Shading the wrong side.</b> Confusing ≤ and ≥ flips the whole region and every corner with it. Write the origin test down: put (0, 0) in, and if it holds shade the origin’s side, if not shade away.",
            "<b>Taking the smaller bound on a ≥ axis.</b> With <i>y</i> ≥ 6 and <i>y</i> ≥ 8 the binding one is <b>8</b>, not 6. The tightest bound is the largest for ≥ and the smallest for ≤, and students apply the ≤ habit to a diet problem every year.",
            "<b>Putting an infeasible intersection in the corner table.</b> Two lines crossing is a candidate, not a corner. Substitute it into every constraint first; the ones that fail are precisely the ones that would have corrupted your answer.",
            "<b>Missing the interior vertex.</b> Evaluating only the intercepts (<i>k</i>, 0) and (0, <i>k</i>) and skipping the point where two slanted constraints cross. That interior vertex is very often where the optimum hides.",
            "<b>Forgetting to halve the shoelace sum.</b> The sum of the cross terms is <b>twice</b> the area. And walk the corners in order around the boundary, since a scrambled order gives a self-crossing polygon and a meaningless number."
          ]
        },
        {
          "t": "protip",
          "html": "before you trust a region, run the one-point audit: pick a point clearly inside your shaded area and put it into every original inequality. all of them must hold. and if your corner list refuses to close into a polygon when you join the points in order, you have either kept a candidate that is not feasible or missed a corner: count edges against constraints, since a bounded region with four constraints has at most four edges."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "origin test decides the side",
              "note": "(0, 0) true means shade its side; false means shade away"
            },
            {
              "f": "feasible region = intersection of every half-plane",
              "note": "non-negativity included, so it lives in the first quadrant"
            },
            {
              "f": "corner = two boundary lines that meet AND are feasible",
              "note": "the axes count as boundary lines"
            },
            {
              "f": "≤ takes the smallest axis bound, ≥ takes the largest",
              "note": "this is the reversal that costs marks in diet problems"
            },
            {
              "f": "bounded ⇒ convex polygon, no dents",
              "note": "the intersection of half-planes is always convex"
            },
            {
              "f": "Area = ½ |Σ (x<sub>i</sub>y<sub>i+1</sub> − x<sub>i+1</sub>y<sub>i</sub>)|",
              "note": "corners in order, then take the modulus and halve"
            },
            {
              "f": "lattice points: ⌊U(j)⌋ − ⌈L(j)⌉ + 1 per strip",
              "note": "fix integer y = j, sum over j"
            }
          ],
          "aids": [
            "“origin test: if (0, 0) fits, shade its side”",
            "“candidate, then check, then corner”, never straight to the table",
            "“for ≥ the biggest bound wins”, the opposite of the ≤ habit"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "The Corner-Point Method",
      "chip": "03 CORNERS",
      "kalam": "tabulate the corners, then check the unbounded",
      "blocks": [
        {
          "t": "p",
          "html": "The feasible region usually holds infinitely many points, and the objective has to be compared across all of them. That sounds hopeless, and it would be, except that Linear Programming rests on one theorem that reduces the search to a list you can write in four lines. CBSE states both theorems and does not ask for a formal proof, but it does ask you to justify them in a sentence, so know them precisely and know the procedure they license."
        },
        {
          "t": "formula",
          "kicker": "THEOREM 1 · THE OPTIMUM LIVES AT A CORNER",
          "tag": "R convex, Z linear",
          "main": "Z optimal on R ⇒ Z optimal at a vertex of R",
          "legend": [
            "let <i>R</i> be the feasible region of an LPP and <i>Z</i> = <i>ax</i> + <i>by</i> the objective function",
            "when <i>Z</i> has an optimal value, maximum or minimum, subject to the constraints, that value <b>must</b> occur at a corner point of <i>R</i>",
            "the hypothesis “when <i>Z</i> has an optimal value” is doing real work, and Theorem 2 is what tells you when it holds"
          ],
          "note": "The theorem says the optimum is attained at a vertex. It does not say only at a vertex: the objective can tie across a whole edge, and both endpoints of that edge are still vertices."
        },
        {
          "t": "formula",
          "kicker": "THEOREM 2 · BOUNDED VERSUS UNBOUNDED",
          "tag": "the existence question",
          "main": "R bounded ⇒ both a max and a min exist",
          "legend": [
            "if <i>R</i> is <b>bounded</b>, then <i>Z</i> has both a maximum and a minimum on <i>R</i>, and each occurs at a corner point",
            "if <i>R</i> is <b>unbounded</b>, a maximum or a minimum <b>may or may not</b> exist, and if it exists it still occurs at a corner point",
            "so “unbounded” never means “no answer”. It means the answer has to be verified"
          ],
          "note": "This is why the very first thing to do after shading is to ask whether the region is bounded. A bounded region rules out every special case in one glance."
        },
        {
          "t": "p",
          "html": "The picture behind Theorem 1 is a sliding line, and it is worth carrying in your head. Fix a value <i>k</i> and draw <i>ax</i> + <i>by</i> = <i>k</i>. Change <i>k</i> and the line moves without ever turning: all these <b>level lines</b> are parallel, with the same slope −<i>a</i>/<i>b</i>. Increasing <i>k</i> pushes the line in one fixed direction. The last feasible point it touches before it leaves the region is always a vertex, unless the line happens to be parallel to an edge, in which case it leaves along that whole edge, whose endpoints are vertices anyway."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · SLIDE THE OBJECTIVE LINE, TAP A READING",
          "chips": [
            "Z = 100",
            "Z = 200",
            "Z = 230",
            "Z = 280"
          ],
          "captions": [
            "The bakery region again, with the objective Z = 40x + 50y. The dashed line is 40x + 50y = 100, one level line of the objective. It cuts straight through the region, so plenty of feasible points lie beyond it and read higher than 100. Slide it outward.",
            "At Z = 200 the level line has moved out and now passes exactly through the corner C(0, 4). It still cuts the region, so 200 is not the best on offer either. Notice the line has not turned at all, only translated: every level line of 40x + 50y has slope −4/5.",
            "At Z = 230 the line touches the region at the single point B(2, 3) and nowhere else. This is the last touch, and B is a vertex. That is Theorem 1 in one picture: the last point a sliding straight line touches on a straight-fenced region is a corner.",
            "Push to Z = 280 and the line has left the region entirely. No feasible point reads 280, so 230 was the maximum. The whole method is this picture with the sliding replaced by a four-row table, which is faster and does not depend on drawing accurately."
          ],
          "frames": [
            {
              "x": [
                -0.8,
                7.0
              ],
              "y": [
                -0.8,
                6.4
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -0.5,
                  "k": 4,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -1.5,
                  "k": 6,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -0.8,
                  "k": 2.0,
                  "dash": true
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      0
                    ],
                    [
                      4,
                      0
                    ],
                    [
                      2,
                      3
                    ],
                    [
                      0,
                      4
                    ]
                  ],
                  "corners": true
                }
              ],
              "labels": [
                {
                  "x": 4.7,
                  "y": 5.5,
                  "text": "Z = 100"
                }
              ]
            },
            {
              "x": [
                -0.8,
                7.0
              ],
              "y": [
                -0.8,
                6.4
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -0.5,
                  "k": 4,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -1.5,
                  "k": 6,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -0.8,
                  "k": 4.0,
                  "dash": true
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      0
                    ],
                    [
                      4,
                      0
                    ],
                    [
                      2,
                      3
                    ],
                    [
                      0,
                      4
                    ]
                  ],
                  "corners": true
                }
              ],
              "points": [
                {
                  "x": 0,
                  "y": 4,
                  "label": "C"
                }
              ],
              "labels": [
                {
                  "x": 4.9,
                  "y": 5.5,
                  "text": "Z = 200"
                }
              ]
            },
            {
              "x": [
                -0.8,
                7.0
              ],
              "y": [
                -0.8,
                6.4
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -0.5,
                  "k": 4,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -1.5,
                  "k": 6,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -0.8,
                  "k": 4.6,
                  "dash": true
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      0
                    ],
                    [
                      4,
                      0
                    ],
                    [
                      2,
                      3
                    ],
                    [
                      0,
                      4
                    ]
                  ],
                  "corners": true
                }
              ],
              "points": [
                {
                  "x": 2,
                  "y": 3,
                  "label": "B"
                }
              ],
              "labels": [
                {
                  "x": 5.2,
                  "y": 5.5,
                  "text": "Z = 230"
                }
              ]
            },
            {
              "x": [
                -0.8,
                7.0
              ],
              "y": [
                -0.8,
                6.4
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -0.5,
                  "k": 4,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -1.5,
                  "k": 6,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -0.8,
                  "k": 5.6,
                  "dash": true
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      0
                    ],
                    [
                      4,
                      0
                    ],
                    [
                      2,
                      3
                    ],
                    [
                      0,
                      4
                    ]
                  ],
                  "corners": true
                }
              ],
              "labels": [
                {
                  "x": 5.4,
                  "y": 5.5,
                  "text": "Z = 280"
                }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "The corner-point method, step by step",
          "steps": [
            "<b>Draw the feasible region.</b> Convert each inequality to its boundary line, plot it, and shade the correct side with the origin test. Say out loud whether the region is bounded or unbounded, because step 4 branches on that answer.",
            "<b>Find all the corner points.</b> Read off the ones on the axes and solve simultaneously for the ones where two slant lines cross. By Theorem 1 the answer hides at a vertex, so these are the only points worth evaluating, and a missed vertex is a wrong answer.",
            "<b>Evaluate <i>Z</i> at every corner.</b> Build a small two-column table, corner against value, and do not skip the origin even though it usually gives 0. Let <i>M</i> be the largest value found and <i>m</i> the smallest.",
            "<b>If the region is bounded, you are finished.</b> <i>M</i> is the maximum and <i>m</i> is the minimum, each at the corner where it appeared, and Theorem 2 guarantees both exist. Write the answer in the language of the problem: batches, hectares, rupees.",
            "<b>If the region is unbounded, verify before you write “answer”.</b> <i>M</i> is a genuine maximum only if the open half-plane <i>ax</i> + <i>by</i> > <i>M</i> has no point in common with the region, and <i>m</i> is a genuine minimum only if <i>ax</i> + <i>by</i> < <i>m</i> has none. Otherwise <i>Z</i> has no maximum, or no minimum, at all."
          ]
        },
        {
          "t": "p",
          "html": "That last step is the one CBSE examiners specifically look for, and it is the one students leave out. The reason it exists is easy to feel: in an unbounded region you can sometimes keep walking forever and keep improving <i>Z</i>. The half-plane test asks exactly one question, <b>can I find any feasible point that beats my best corner?</b> If the answer is no, the corner value is truly optimal. If the answer is yes, then no corner can be optimal and the honest conclusion is that no maximum exists."
        },
        {
          "t": "formula",
          "kicker": "THE UNBOUNDED VERIFICATION",
          "tag": "one line, and it is worth a mark",
          "main": "M is the maximum ⟺ ax + by > M misses R",
          "legend": [
            "<i>M</i> = the largest value of <i>Z</i> found at a corner. Draw the line <i>ax</i> + <i>by</i> = <i>M</i> and look at the open side beyond it",
            "<i>m</i> = the smallest value found. <i>m</i> is the genuine minimum exactly when the open half-plane <i>ax</i> + <i>by</i> < <i>m</i> has no point in common with the region",
            "in practice: the level line touches the region only at that corner, and moving into the region changes <i>Z</i> the wrong way"
          ],
          "note": "Only needed when the region is unbounded. On a bounded region Theorem 2 has already guaranteed the answer, and writing the test there is harmless but wastes time."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · AN UNBOUNDED REGION AND ITS CHECK, TAP A STEP",
          "chips": [
            "THE REGION",
            "THREE CORNERS",
            "THE MINIMUM HOLDS",
            "NO MAXIMUM"
          ],
          "captions": [
            "The dairy feed problem: x kg of Feed P and y kg of Feed Q, needing at least 6 units of protein and at least 8 of fibre, so x + y ≥ 6 and 2x + y ≥ 8. Both are ≥, so the origin fails both and the shading runs away from it. The region climbs to infinity up and to the right, and it has no area and no top edge.",
            "It still has exactly three corners: (0, 8) on the y-axis where the larger of the two bounds binds, (2, 4) where the lines cross, and (6, 0) on the x-axis. Against the cost Z = 5x + 4y they read 32, 26 and 30. The smallest is 26, at the interior vertex, which is where minimisation answers usually hide.",
            "Verify it, because the region is unbounded. The dashed line is 5x + 4y = 26. It meets the region at (2, 4) and nowhere else, and moving into the region, up or to the right, only increases 5x + 4y. So no feasible point beats 26 and the minimum is genuine: ₹26, at 2 kg of P and 4 kg of Q.",
            "A different problem on a similar region: maximise Z = 5x + 4y over x + y ≥ 8 in the first quadrant. The corners are (8, 0) and (0, 8), reading 40 and 32, so the largest corner value is M = 40. But (10, 0) is feasible and reads 50, and you can keep going. Z has no maximum, and the largest corner value was simply the wrong answer to a question with no answer."
          ],
          "frames": [
            {
              "x": [
                -1.0,
                11.0
              ],
              "y": [
                -1.0,
                11.0
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -1,
                  "k": 6
                },
                {
                  "c": "line",
                  "m": -2,
                  "k": 8
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      8
                    ],
                    [
                      2,
                      4
                    ],
                    [
                      6,
                      0
                    ],
                    [
                      10.8,
                      0
                    ],
                    [
                      10.8,
                      10.8
                    ],
                    [
                      0,
                      10.8
                    ]
                  ],
                  "corners": false
                }
              ],
              "labels": [
                {
                  "x": 6.8,
                  "y": 6.4,
                  "text": "feasible, and it never ends"
                }
              ]
            },
            {
              "x": [
                -1.0,
                11.0
              ],
              "y": [
                -1.0,
                11.0
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -1,
                  "k": 6,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -2,
                  "k": 8,
                  "soft": true
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      8
                    ],
                    [
                      2,
                      4
                    ],
                    [
                      6,
                      0
                    ],
                    [
                      10.8,
                      0
                    ],
                    [
                      10.8,
                      10.8
                    ],
                    [
                      0,
                      10.8
                    ]
                  ],
                  "corners": false
                }
              ],
              "points": [
                {
                  "x": 0,
                  "y": 8,
                  "label": "(0, 8)  32"
                },
                {
                  "x": 2,
                  "y": 4,
                  "label": "(2, 4)  26"
                },
                {
                  "x": 6,
                  "y": 0,
                  "label": "(6, 0)  30"
                }
              ]
            },
            {
              "x": [
                -1.0,
                11.0
              ],
              "y": [
                -1.0,
                11.0
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -1,
                  "k": 6,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -2,
                  "k": 8,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -1.25,
                  "k": 6.5,
                  "dash": true
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      8
                    ],
                    [
                      2,
                      4
                    ],
                    [
                      6,
                      0
                    ],
                    [
                      10.8,
                      0
                    ],
                    [
                      10.8,
                      10.8
                    ],
                    [
                      0,
                      10.8
                    ]
                  ],
                  "corners": false
                }
              ],
              "points": [
                {
                  "x": 2,
                  "y": 4,
                  "label": "(2, 4)"
                }
              ],
              "labels": [
                {
                  "x": 7.4,
                  "y": 8.0,
                  "text": "5x + 4y = 26 touches once"
                }
              ]
            },
            {
              "x": [
                -1.0,
                13.0
              ],
              "y": [
                -1.0,
                13.0
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -1,
                  "k": 8
                },
                {
                  "c": "line",
                  "m": -1.25,
                  "k": 10,
                  "dash": true
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      8
                    ],
                    [
                      8,
                      0
                    ],
                    [
                      12.8,
                      0
                    ],
                    [
                      12.8,
                      12.8
                    ],
                    [
                      0,
                      12.8
                    ]
                  ],
                  "corners": false
                }
              ],
              "points": [
                {
                  "x": 8,
                  "y": 0,
                  "label": "M = 40"
                },
                {
                  "x": 10,
                  "y": 0,
                  "label": "Z = 50"
                }
              ],
              "labels": [
                {
                  "x": 4.2,
                  "y": 11.4,
                  "text": "5x + 4y = 40"
                }
              ]
            }
          ]
        },
        {
          "t": "think",
          "html": "the two theorems answer two different questions and students merge them. theorem 1 asks <b>where</b> the optimum is, if there is one: at a corner. theorem 2 asks <b>whether</b> there is one at all: yes for a bounded region, maybe for an unbounded one. reading off the best corner without asking the second question is answering “where” to a question that was really “whether”."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY CHECKING CORNERS IS ENOUGH, TAP A LINE",
          "steps": [
            {
              "eq": "Z(λQ + (1 − λ)R) = λZ(Q) + (1 − λ)Z(R), for 0 ≤ λ ≤ 1",
              "why": "Lemma 1, linearity. Write the mixed point coordinate by coordinate and expand a times the x-part plus b times the y-part; the terms regroup into lambda times Z of Q plus one minus lambda times Z of R. So Z of a blend is the blend of the Z values, which is the only property of Z the whole argument uses."
            },
            {
              "eq": "every P in R is a convex combination of the vertices V₁, …, Vₙ",
              "why": "Lemma 2. Triangulate the polygon by drawing all the diagonals from one vertex, which splits it into n minus 2 triangles whose corners are corners of R. Any P lies in one of them, say with vertices A, B, C."
            },
            {
              "eq": "P = sA + (1 − s)t·B + (1 − s)(1 − t)·C",
              "why": "Inside that triangle, draw the ray from A through P; convexity, the fact that the region has no dents, guarantees it meets side BC at some point Q. Write Q as a blend of B and C, write P as a blend of A and Q, and substitute one into the other. The three weights are non-negative and add to s plus one minus s, which is 1."
            },
            {
              "eq": "Z(P) = Σ λᵢ Z(Vᵢ) ≤ Σ λᵢ M = M, where M = max Z(Vᵢ)",
              "why": "Theorem 1, proved. Replace each vertex value by the largest of them, which can only increase the sum, and the weights add to 1 so the sum collapses to M itself. No feasible point beats the best vertex. Running the same line with the smallest value gives the minimum."
            },
            {
              "eq": "Z(A) = Z(B) = M ⇒ Z(λA + (1 − λ)B) = λM + (1 − λ)M = M",
              "why": "Multiple optima, derived rather than asserted. If two vertices tie at the optimum, Lemma 1 gives that same value at every point of the segment joining them, and convexity says every one of those points is feasible. So a tie at two corners really does mean infinitely many optimal solutions."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · WHY NO INSIDE POINT CAN WIN, TAP A STEP",
          "chips": [
            "THE TRIANGLE",
            "P AS A BLEND",
            "THE LEVEL LINES"
          ],
          "captions": [
            "A convex region in its simplest form, the triangle ABC. Every point of it, boundary or interior, is going to be written as a weighted average of these three corners, with weights that are non-negative and add up to one. That single fact is the whole proof.",
            "Take the interior point P and draw the ray from A through it. Because the region has no dents, that ray must leave through the opposite side, at Q. Now Q is a blend of B and C, and P is a blend of A and Q, so substituting gives P as a blend of A, B and C directly.",
            "The two dashed lines are level lines of Z = x + y. P sits on Z = 4 and the vertex A sits on Z = 6. That is forced, not lucky: Z(P) is a weighted average of Z(A), Z(B) and Z(C), and an average of three numbers can never exceed the largest of them. So the best corner dominates every point of the region."
          ],
          "frames": [
            {
              "x": [
                -1.0,
                7.4
              ],
              "y": [
                -1.0,
                6.6
              ],
              "polygons": [
                {
                  "points": [
                    [
                      1,
                      5
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      6,
                      0
                    ]
                  ],
                  "corners": false
                }
              ],
              "points": [
                {
                  "x": 1,
                  "y": 5,
                  "label": "A"
                },
                {
                  "x": 0,
                  "y": 0,
                  "label": "B"
                },
                {
                  "x": 6,
                  "y": 0,
                  "label": "C"
                }
              ]
            },
            {
              "x": [
                -1.0,
                7.4
              ],
              "y": [
                -1.0,
                6.6
              ],
              "polygons": [
                {
                  "points": [
                    [
                      1,
                      5
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      6,
                      0
                    ]
                  ],
                  "corners": false
                }
              ],
              "segments": [
                {
                  "from": [
                    1,
                    5
                  ],
                  "to": [
                    2.6666666666666665,
                    0
                  ],
                  "dash": true
                }
              ],
              "points": [
                {
                  "x": 1,
                  "y": 5,
                  "label": "A"
                },
                {
                  "x": 0,
                  "y": 0,
                  "label": "B"
                },
                {
                  "x": 6,
                  "y": 0,
                  "label": "C"
                },
                {
                  "x": 2,
                  "y": 2,
                  "label": "P"
                },
                {
                  "x": 2.6666666666666665,
                  "y": 0,
                  "label": "Q",
                  "open": true
                }
              ]
            },
            {
              "x": [
                -1.0,
                7.4
              ],
              "y": [
                -1.0,
                6.6
              ],
              "polygons": [
                {
                  "points": [
                    [
                      1,
                      5
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      6,
                      0
                    ]
                  ],
                  "corners": false
                }
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -1,
                  "k": 4,
                  "dash": true
                },
                {
                  "c": "line",
                  "m": -1,
                  "k": 6,
                  "dash": true
                }
              ],
              "points": [
                {
                  "x": 2,
                  "y": 2,
                  "label": "P, Z = 4"
                },
                {
                  "x": 1,
                  "y": 5,
                  "label": "A, Z = 6"
                }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Notice where that proof stops. It shows no feasible point beats the best vertex, and for a bounded region that is the end of the story. On an unbounded region the polygon has no finite list of vertices to decompose into, so the decomposition never gets started and the bound never appears. That is not a technicality: maximise <i>Z</i> = 5<i>x</i> + 4<i>y</i> over <i>x</i> + <i>y</i> ≥ 8 in the first quadrant and the best corner reads 40 while (20, 0) reads 100. The half-plane test is not bookkeeping, it is the existence check the proof needs and cannot supply."
        },
        {
          "t": "defgrid",
          "title": "The corner table, written the way it is marked",
          "tag": "bakery: maximise Z = 40x + 50y",
          "rows": [
            {
              "k": "O(0, 0)",
              "v": "<i>Z</i> = 0. Always include the origin; leaving it out costs a mark even when it cannot win"
            },
            {
              "k": "A(4, 0)",
              "v": "<i>Z</i> = 160. The oven-slot intercept, not the flour intercept, because 3<i>x</i> ≤ 12 binds first"
            },
            {
              "k": "B(2, 3)",
              "v": "<i>Z</i> = 80 + 150 = <b>230</b>, the maximum. Show the two products before the sum"
            },
            {
              "k": "C(0, 4)",
              "v": "<i>Z</i> = 200. The runner-up, and the answer a student who stops at the axes writes down"
            },
            {
              "k": "Region",
              "v": "bounded, so Theorem 2 closes it: no verification line needed, and 230 is final"
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A bakery makes batches of nankhatai and kaju cookies. A nankhatai batch uses 1 kg of flour and 3 oven slots, a kaju batch 2 kg and 2 slots. There are 8 kg of flour and 12 oven slots. Profit is ₹40 and ₹50 per batch. How many of each maximises profit?",
          "steps": [
            "Let <i>x</i> = nankhatai batches and <i>y</i> = kaju batches. Maximise <i>Z</i> = 40<i>x</i> + 50<i>y</i> subject to <i>x</i> + 2<i>y</i> ≤ 8, 3<i>x</i> + 2<i>y</i> ≤ 12, <i>x</i>, <i>y</i> ≥ 0.",
            "Corners: O(0, 0), A(4, 0), C(0, 4), and for B subtract <i>x</i> + 2<i>y</i> = 8 from 3<i>x</i> + 2<i>y</i> = 12 to get 2<i>x</i> = 4, so B(2, 3).",
            "Table: <i>Z</i>(O) = 0, <i>Z</i>(A) = 160, <i>Z</i>(B) = 80 + 150 = 230, <i>Z</i>(C) = 200.",
            "The region is bounded, so by Theorem 2 the largest table entry is the maximum. No verification is owed."
          ],
          "ans": "2 batches of nankhatai and 3 of kaju cookies, for a maximum profit of ₹230"
        },
        {
          "t": "ex",
          "tag": "CBSE HOTS",
          "q": "A dairy farmer mixes Feed P and Feed Q. Each kg of P gives 1 unit of protein and 2 of fibre; each kg of Q gives 1 unit of protein and 1 of fibre. The herd needs at least 6 units of protein and 8 of fibre a day. P costs ₹5/kg, Q costs ₹4/kg. Find the cheapest mix.",
          "steps": [
            "Minimise <i>Z</i> = 5<i>x</i> + 4<i>y</i> subject to <i>x</i> + <i>y</i> ≥ 6, 2<i>x</i> + <i>y</i> ≥ 8, <i>x</i>, <i>y</i> ≥ 0. Both constraints are ≥, so the region is <b>unbounded</b>.",
            "Corners: (0, 8), since on <i>x</i> = 0 the bounds are <i>y</i> ≥ 6 and <i>y</i> ≥ 8 and the larger binds; (6, 0) likewise on <i>y</i> = 0; and (2, 4) from subtracting the two lines.",
            "Table: <i>Z</i>(0, 8) = 32, <i>Z</i>(2, 4) = 10 + 16 = 26, <i>Z</i>(6, 0) = 30. The smallest is <i>m</i> = 26.",
            "Verify. Does 5<i>x</i> + 4<i>y</i> < 26 meet the region? The line 5<i>x</i> + 4<i>y</i> = 26 touches it only at (2, 4), and moving into the region, up or to the right, only increases 5<i>x</i> + 4<i>y</i>. No feasible point falls below 26."
          ],
          "ans": "2 kg of P and 4 kg of Q, minimum cost ₹26, verified by the half-plane test"
        },
        {
          "t": "ex",
          "tag": "CBSE HOTS",
          "q": "Maximise <i>Z</i> = 5<i>x</i> + 4<i>y</i> subject to <i>x</i> + <i>y</i> ≥ 8, <i>x</i> ≥ 0, <i>y</i> ≥ 0.",
          "steps": [
            "Only ≥ and non-negativity, so the region lies above <i>x</i> + <i>y</i> = 8 and runs to infinity up and to the right. Unbounded.",
            "The boundary corners are (8, 0) and (0, 8), giving <i>Z</i> = 40 and <i>Z</i> = 32. So <i>M</i> = 40.",
            "Verify, because the region is unbounded. Does 5<i>x</i> + 4<i>y</i> > 40 meet the region? Take (20, 0): it is feasible since 20 ≥ 8, and there <i>Z</i> = 100, which beats 40. It is not close either: (100, 0) gives 500.",
            "A single feasible point beating every corner proves that no corner can carry the maximum."
          ],
          "ans": "<i>Z</i> has <b>no maximum</b>; the solution is unbounded. The same region does have a minimum, <i>Z</i> = 32 at (0, 8), since 5<i>x</i> + 4<i>y</i> < 32 misses the region entirely"
        },
        {
          "t": "ex",
          "tag": "CUET",
          "q": "The corner points of a feasible region are (0, 4), (3, 3) and (6, 0). For <i>Z</i> = 2<i>x</i> + 2<i>y</i>, where does the maximum of <i>Z</i> occur?",
          "steps": [
            "No graph is needed. Evaluate at each corner: <i>Z</i>(0, 4) = 8, <i>Z</i>(3, 3) = 12, <i>Z</i>(6, 0) = 12.",
            "The maximum 12 is reached at <b>two</b> corners, (3, 3) and (6, 0).",
            "By the multiple-optima property, when <i>Z</i> takes the same optimum at two corners it takes that value at every point of the segment joining them.",
            "Slope check: the edge from (3, 3) to (6, 0) has slope (0 − 3)/(6 − 3) = −1, and the objective line 2<i>x</i> + 2<i>y</i> = <i>c</i> also has slope −1, so the two are parallel. That is what a tie always means."
          ],
          "ans": "At <b>every point</b> of the segment joining (3, 3) and (6, 0), so there are infinitely many optimal solutions. Circling one of the two corners is the trap"
        },
        {
          "t": "mcq",
          "q": "The feasible region of an LPP is the convex polygon with vertices (0, 0), (4, 0), (2, 4) and (0, 5). The maximum of <i>Z</i> = 5<i>x</i> + 3<i>y</i> is:",
          "correct": 1,
          "opts": [
            {
              "label": "20",
              "nudge": "That is the value at (4, 0). It is what you get by testing only the <i>x</i>-axis intercept and stopping early, which skips the interior vertex."
            },
            {
              "label": "22",
              "nudge": null
            },
            {
              "label": "25",
              "nudge": "This comes from mis-reading the vertex as (5, 0), or from adding coefficients carelessly. No listed vertex gives 25."
            },
            {
              "label": "15",
              "nudge": "That is the value at (0, 5), the trap for assuming more <i>y</i> is better. The <i>y</i>-coefficient 3 is the smaller of the two."
            }
          ],
          "solution": "Evaluate all four: (0, 0) gives 0, (4, 0) gives 20, (2, 4) gives 10 + 12 = 22, and (0, 5) gives 15. The maximum is 22 at the interior vertex (2, 4), which is exactly the corner that gets skipped."
        },
        {
          "t": "mcq",
          "q": "If the feasible region of an LPP is unbounded, then the objective function <i>Z</i> = <i>ax</i> + <i>by</i>:",
          "correct": 2,
          "opts": [
            {
              "label": "always has a maximum",
              "nudge": "That is the guarantee for a <b>bounded</b> region. Theorem 2 promises nothing at all on an unbounded one."
            },
            {
              "label": "always has a minimum",
              "nudge": "The same confusion the other way round. Minimise <i>Z</i> = −<i>x</i> over <i>x</i> ≥ 0 and there is no minimum either."
            },
            {
              "label": "may or may not have a maximum or a minimum",
              "nudge": null
            },
            {
              "label": "has neither a maximum nor a minimum",
              "nudge": "An over-correction. Unbounded regions very frequently do have a minimum: every cost-minimisation diet problem is one."
            }
          ],
          "solution": "Theorem 2 guarantees nothing on an unbounded region. The optimum may or may not exist, and whichever you claim must be confirmed with the half-plane test. That single word “may” is what the question is testing."
        },
        {
          "t": "mcq",
          "q": "The minimum of <i>Z</i> = <i>x</i> + 2<i>y</i> on an unbounded region with corner points (0, 2), (1, 1) and (4, 0) is:",
          "correct": 1,
          "opts": [
            {
              "label": "4",
              "nudge": "That is the shared value at the two outer corners. You get it by forgetting the interior vertex (1, 1), which is where minimisation answers usually sit."
            },
            {
              "label": "3",
              "nudge": null
            },
            {
              "label": "2",
              "nudge": "This is the smallest single coordinate rather than a value of <i>Z</i> at any corner. No listed corner gives 2."
            },
            {
              "label": "does not exist",
              "nudge": "The reflex that unbounded means no answer. Unbounded regions can and often do have a minimum; here the half-plane test confirms one."
            }
          ],
          "solution": "Evaluate: (0, 2) gives 4, (1, 1) gives 3, (4, 0) gives 4. The smallest is 3 at (1, 1). Verify because the region is unbounded: <i>x</i> + 2<i>y</i> < 3 has no feasible point, so 3 is genuine."
        },
        {
          "t": "mcq",
          "q": "In an LPP, <i>Z</i> = <i>ax</i> + <i>by</i> has the same maximum value at two distinct corner points. It follows that:",
          "correct": 2,
          "opts": [
            {
              "label": "the LPP has no solution",
              "nudge": "The exact opposite. A tie produces <b>more</b> solutions, not none: the whole edge is optimal."
            },
            {
              "label": "the maximum occurs at exactly those two points",
              "nudge": "The most tempting wrong answer, and it forgets the segment in between. Every point of that segment reads the same value."
            },
            {
              "label": "the maximum occurs at every point of the segment joining them",
              "nudge": null
            },
            {
              "label": "<i>a</i> = <i>b</i>",
              "nudge": "True only when the tied edge happens to have slope −1. In general the condition is that −<i>a</i>/<i>b</i> equals the slope of that edge, which is rarely −1."
            }
          ],
          "solution": "This is the multiple-optima property, and Lemma 1 proves it: writing a point of the segment as λA + (1 − λ)B gives <i>Z</i> = λM + (1 − λ)M = M. Equal optimum at two corners means infinitely many optimal solutions, and geometrically the objective line is parallel to that edge."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Maximise <i>Z</i> = 30<i>x</i> + 20<i>y</i> subject to <i>x</i> + <i>y</i> ≤ 8, 2<i>x</i> + <i>y</i> ≤ 10, <i>x</i>, <i>y</i> ≥ 0. State the optimal point and value.",
              "a": "Corners (0, 0), (5, 0), (2, 6), (0, 8) with values 0, 150, 180, 160. Maximum <b><i>Z</i> = 180 at (2, 6)</b>, and the region is bounded so nothing needs verifying."
            },
            {
              "q": "[CUET] The corners of a bounded region are (0, 0), (5, 0), (3, 4) and (0, 6). Find the maximum of <i>Z</i> = 4<i>x</i> + 3<i>y</i>.",
              "a": "Values 0, 20, 12 + 12 = 24, 18. Maximum <i>Z</i> = 24 at (3, 4)."
            },
            {
              "q": "[CUET] For <i>x</i> ≥ 0, <i>y</i> ≥ 0, <i>x</i> + <i>y</i> ≥ 4, <i>x</i> + 2<i>y</i> ≥ 6, is the region bounded? Find the minimum of <i>Z</i> = 3<i>x</i> + 5<i>y</i> if it exists.",
              "a": "Unbounded. Corners (0, 4), (2, 2), (6, 0) give 20, 16, 18. Minimum <i>Z</i> = 16 at (2, 2), and 3<i>x</i> + 5<i>y</i> < 16 misses the region, so it is genuine."
            },
            {
              "q": "[CBSE HOTS] A carpenter makes stools (<i>x</i>) and chairs (<i>y</i>). A stool needs 2 hours cutting and 1 polishing, a chair 1 and 2. He has 10 cutting hours and 8 polishing hours. Profit is ₹60 and ₹50. Find the best mix.",
              "a": "Maximise <i>Z</i> = 60<i>x</i> + 50<i>y</i> subject to 2<i>x</i> + <i>y</i> ≤ 10, <i>x</i> + 2<i>y</i> ≤ 8, <i>x</i>, <i>y</i> ≥ 0. Corners (0, 0), (5, 0), (4, 2), (0, 4) give 0, 300, 340, 200. Maximum <b>₹340 at 4 stools and 2 chairs</b>."
            },
            {
              "q": "[CUET] Maximise <i>Z</i> = 3<i>x</i> + 2<i>y</i> over <i>x</i> − <i>y</i> ≥ 1, <i>x</i> ≥ 0, <i>y</i> ≥ 0. Does a maximum exist?",
              "a": "No. The region is unbounded to the right, and (100, 0) is feasible with <i>Z</i> = 300, beating any corner you name. The solution is unbounded, so <i>Z</i> has no maximum."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Stopping at the axis corners.</b> Evaluating <i>Z</i> only at (<i>k</i>, 0) and (0, <i>k</i>) and missing the interior vertex where two slanted constraints cross. That vertex is where the optimum hides in both worked examples above. List every vertex before you evaluate any of them.",
            "<b>Skipping the unbounded verification.</b> Reading off the smallest or largest corner value and writing “answer” costs the marks in an unbounded problem, and CBSE examiners look for that line specifically. If the region runs to infinity, write the half-plane sentence.",
            "<b>Treating an unbounded region as having no answer.</b> The opposite error. Cost problems have unbounded regions and perfectly good minima. Unbounded describes the geometry, not the verdict.",
            "<b>Counting a tie as two solutions.</b> When two corners share the optimum the answer is the <b>entire edge</b> between them, infinitely many points. Naming the two corners and stopping is the classic half-answer.",
            "<b>Comparing values from an incomplete corner list.</b> The largest entry in a table is only the maximum if the table holds every corner. Count your vertices against your edges before you compare a single number."
          ]
        },
        {
          "t": "protip",
          "html": "for a minimisation cost problem, evaluate the <b>interior</b> vertex first, the one where two ≥ constraints cross. it wins nearly every time, and if it does you have your candidate before you have finished the table. and the moment two corner values tie for the optimum, stop computing: the answer is the whole edge between them, because the objective line is parallel to that edge."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "Theorem 1: an optimum, if it exists, is at a corner",
              "note": "so you check a list, never a region"
            },
            {
              "f": "Theorem 2: bounded ⇒ both max and min exist",
              "note": "unbounded ⇒ may or may not; verify"
            },
            {
              "f": "draw · list every vertex · tabulate Z · read off",
              "note": "the four steps, in that order"
            },
            {
              "f": "M is the max ⟺ ax + by > M misses the region",
              "note": "the line examiners look for"
            },
            {
              "f": "m is the min ⟺ ax + by < m misses the region",
              "note": "same test, other direction"
            },
            {
              "f": "level lines ax + by = k are parallel, slope −a/b",
              "note": "sliding, never turning: that is why a corner wins"
            },
            {
              "f": "tie at two corners ⇒ the whole edge is optimal",
              "note": "infinitely many solutions, not two"
            }
          ],
          "aids": [
            "“corners, not centres” : never search the middle of the field",
            "“unbounded? verify or vanish” : always run the half-plane check",
            "“the interior vertex is the cheap one”, for cost problems"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "The Four Ways an LPP Can End",
      "chip": "04 SPECIAL",
      "kalam": "triage in five seconds, grind later",
      "blocks": [
        {
          "t": "p",
          "html": "Every problem so far behaved: one feasible region, one clean optimal corner. Real problems, and exam problems built to test you, do not always cooperate. An LPP can end in exactly <b>four</b> ways, and a complete student recognises all four on sight. One clear highest spot is the <b>unique optimal solution</b>, the usual happy case. A whole ridge at the same height is <b>multiple optimal solutions</b>. A field that never ends in the uphill direction is an <b>unbounded solution</b>, where no highest point exists. And no field at all is <b>no feasible solution</b>."
        },
        {
          "t": "think",
          "html": "picture a shopkeeper who insists “i must sell <b>at least</b> 60 items today” and also “my shelf holds <b>at most</b> 40”. no honest number satisfies both; the demand and the limit are fighting. there is nothing to optimise because there is no valid choice to begin with, and that is an infeasible LPP. now compare a daydreaming trader who says only “sell at least 10 items”, with no upper limit at all: profit grows without bound, so there is no maximum to find. that is an unbounded solution."
        },
        {
          "t": "defgrid",
          "title": "The four outcomes and their tell-tale signs",
          "rows": [
            {
              "k": "Unique optimum",
              "v": "exactly one point gives the optimum. The objective line touches the region last at a <b>single</b> corner"
            },
            {
              "k": "Multiple optima",
              "v": "infinitely many points give the <b>same</b> optimum. Two corners tie, and the objective line is parallel to the edge joining them"
            },
            {
              "k": "Unbounded solution",
              "v": "no finite maximum, or no finite minimum. The region is unbounded <b>and</b> the “better than every corner” half-plane still overlaps it"
            },
            {
              "k": "No feasible solution",
              "v": "no point satisfies all constraints. The constraints have no common shaded region and the feasible set is empty"
            },
            {
              "k": "Redundant constraint",
              "v": "not an outcome but a fifth thing to spot: a constraint that can be removed without changing the region at all"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE FOUR ENDINGS, TAP ONE",
          "chips": [
            "UNIQUE",
            "MULTIPLE",
            "NO MAXIMUM",
            "INFEASIBLE"
          ],
          "captions": [
            "Maximise Z = 3x + y over x + y ≤ 6, x ≤ 4, y ≤ 4 in the first quadrant. The dashed level line 3x + y = 14 touches the region at (4, 2) and at no other point, so the optimum is that single vertex and nothing else. Slope −3 matches no edge of the region, which is exactly why the touch is a point and not a segment.",
            "Same region, but now Z = 2x + 2y. Level lines of 2x + 2y have slope −1, which is precisely the slope of the edge from (4, 2) to (2, 4). So the line leaves along that whole edge: both corners read 12, and so does every point between them. Infinitely many optimal solutions, marked as the solid segment.",
            "Maximise Z = 5x + 4y over x + y ≥ 8 in the first quadrant. The region climbs to infinity up and to the right, and the two dashed level lines show Z increasing in exactly that direction. Every level line you draw still meets the region, so no line is ever the last one. Z has no maximum. The same region has a perfectly good minimum, 32 at (0, 8).",
            "Two demands that cannot both be met: x ≥ 6 and y ≥ 6 force x + y ≥ 12, while x + y ≤ 10 forbids it. The upper-right block and the lower-left triangle never touch, so no point satisfies all three. The feasible region is empty and there is nothing to optimise, whatever the objective happens to be."
          ],
          "frames": [
            {
              "x": [
                -0.8,
                7.0
              ],
              "y": [
                -0.8,
                6.4
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -1,
                  "k": 6,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -3,
                  "k": 14,
                  "dash": true
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      0
                    ],
                    [
                      4,
                      0
                    ],
                    [
                      4,
                      2
                    ],
                    [
                      2,
                      4
                    ],
                    [
                      0,
                      4
                    ]
                  ],
                  "corners": true
                }
              ],
              "points": [
                {
                  "x": 4,
                  "y": 2,
                  "label": "(4, 2)"
                }
              ],
              "labels": [
                {
                  "x": 5.3,
                  "y": 5.4,
                  "text": "3x + y = 14"
                }
              ]
            },
            {
              "x": [
                -0.8,
                7.0
              ],
              "y": [
                -0.8,
                6.4
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -1,
                  "k": 6,
                  "dash": true
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      0
                    ],
                    [
                      4,
                      0
                    ],
                    [
                      4,
                      2
                    ],
                    [
                      2,
                      4
                    ],
                    [
                      0,
                      4
                    ]
                  ],
                  "corners": true
                }
              ],
              "segments": [
                {
                  "from": [
                    4,
                    2
                  ],
                  "to": [
                    2,
                    4
                  ]
                }
              ],
              "points": [
                {
                  "x": 4,
                  "y": 2,
                  "label": "(4, 2)"
                },
                {
                  "x": 2,
                  "y": 4,
                  "label": "(2, 4)"
                }
              ],
              "labels": [
                {
                  "x": 5.2,
                  "y": 3.1,
                  "text": "x + y = 6"
                }
              ]
            },
            {
              "x": [
                -1.0,
                12.5
              ],
              "y": [
                -1.0,
                12.5
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -1,
                  "k": 8
                },
                {
                  "c": "line",
                  "m": -1.25,
                  "k": 10,
                  "dash": true
                },
                {
                  "c": "line",
                  "m": -1.25,
                  "k": 14,
                  "dash": true
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      8
                    ],
                    [
                      8,
                      0
                    ],
                    [
                      12.2,
                      0
                    ],
                    [
                      12.2,
                      12.2
                    ],
                    [
                      0,
                      12.2
                    ]
                  ],
                  "corners": false
                }
              ],
              "segments": [
                {
                  "from": [
                    5,
                    5
                  ],
                  "to": [
                    9,
                    9
                  ],
                  "arrow": true
                }
              ],
              "labels": [
                {
                  "x": 8.4,
                  "y": 4.0,
                  "text": "Z climbs for ever"
                }
              ]
            },
            {
              "x": [
                -1.0,
                12.5
              ],
              "y": [
                -1.0,
                12.5
              ],
              "curves": [
                {
                  "c": "vline",
                  "x": 6,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": 0,
                  "k": 6,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -1,
                  "k": 10
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      0
                    ],
                    [
                      10,
                      0
                    ],
                    [
                      0,
                      10
                    ]
                  ],
                  "corners": false,
                  "soft": true
                },
                {
                  "points": [
                    [
                      6,
                      6
                    ],
                    [
                      12.2,
                      6
                    ],
                    [
                      12.2,
                      12.2
                    ],
                    [
                      6,
                      12.2
                    ]
                  ],
                  "corners": false
                }
              ],
              "labels": [
                {
                  "x": 3.1,
                  "y": 2.6,
                  "text": "x + y ≤ 10"
                },
                {
                  "x": 9.2,
                  "y": 9.2,
                  "text": "x ≥ 6, y ≥ 6"
                }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "One distinction is worth burning into memory, because CBSE asks it almost verbatim. An <b>unbounded region</b> is a statement about geometry: the shape stretches to infinity. An <b>unbounded solution</b> is a statement about the answer: the objective has no finite optimum. They are not the same thing. Every cost-minimisation diet problem has an unbounded region and a perfectly good minimum. Region describes the shape, solution describes the verdict, and a question that swaps them is testing exactly this."
        },
        {
          "t": "p",
          "html": "A maximum fails to exist only when the region is unbounded <b>in the direction the objective increases</b>. If it runs off to infinity in some other direction, the maximum survives. And if the region is bounded, Theorem 2 has already settled it: both a maximum and a minimum exist, so no special case can arise at all. That is why the first question to ask after shading is always the same one."
        },
        {
          "t": "proc",
          "title": "Triage: five seconds before you grind",
          "steps": [
            "<b>Is there a common shaded region at all?</b> If no point satisfies every constraint, stop and write “the LPP has <b>no feasible solution</b>”. There is nothing to optimise, and hunting for corner points in an empty region is wasted time and wrong.",
            "<b>Is it bounded?</b> If yes, Theorem 2 guarantees both a maximum and a minimum at corner points, no special case can arise, and you can run the corner table with nothing to verify.",
            "<b>If it is unbounded, run the half-plane test on whichever optimum you were asked for.</b> Let <i>M</i> be the largest corner value. If <i>ax</i> + <i>by</i> > <i>M</i> shares any point with the region, write “<i>Z</i> has <b>no maximum</b>”, because a single feasible point beating every corner proves no corner can carry it. The same region may still have a valid minimum: check that separately.",
            "<b>Look for a tie.</b> If the optimum value is attained at two corners, every point of the segment between them is also optimal, so the answer is that whole edge and there are <b>infinitely many</b> optimal solutions.",
            "<b>Look for a line that never touches the region.</b> If removing one constraint leaves the region unchanged, that constraint is <b>redundant</b>: it imposes nothing beyond what the others already enforce, and the optimum is unaffected by dropping it."
          ]
        },
        {
          "t": "p",
          "html": "Detecting all this by drawing has two problems. A hand-drawn graph can mislead when two lines pass close together, and a CBSE HOTS answer wants a <b>justification</b>, not a shading. Both infeasibility and redundancy have clean algebraic certificates, and both are built from one small lemma about combining inequalities."
        },
        {
          "t": "formula",
          "kicker": "POSITIVE COMBINATIONS PRESERVE INEQUALITIES",
          "tag": "the whole of the algebraic method",
          "main": "u ≤ v and u′ ≤ v′, s, t ≥ 0 ⇒ su + tu′ ≤ sv + tv′",
          "legend": [
            "multiply the first inequality by <i>s</i> ≥ 0 and the second by <i>t</i> ≥ 0, then add. Nothing else is used anywhere below",
            "<b>certificate of infeasibility</b>: combine the ≤ constraints to get some expression ≤ <i>c</i>, combine the ≥ side to get the <b>same</b> expression ≥ <i>d</i> with <i>d</i> > <i>c</i>. Contradiction, so no feasible point exists",
            "<b>certificate of redundancy</b>: derive the constraint from the others by positive combinations. Then removing it changes nothing"
          ],
          "note": "The only creative step is choosing the multipliers. Aim the left-hand sides at whatever expression the opposing inequality already talks about."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · CERTIFYING AN EMPTY REGION, TAP A LINE",
          "steps": [
            {
              "eq": "x + y ≤ 4, x + 2y ≥ 12, x ≥ 0, y ≥ 0 : is it feasible?",
              "why": "The two main inequalities point in opposite directions but their left sides do not match, x plus y against x plus 2y, so simply adding them proves nothing. This is the case where the easy manoeuvre fails and something slightly cleverer is needed."
            },
            {
              "eq": "y ≤ x + y ≤ 4, using x ≥ 0",
              "why": "Extract a bound on y alone. Since x is non-negative, y is at most x plus y, and x plus y is at most 4. So y is at most 4. Non-negativity is a constraint like any other and it is doing real work here."
            },
            {
              "eq": "x + 2y = (x + y) + y ≤ 4 + 4 = 8",
              "why": "Split the awkward expression into pieces you already have bounds for, then reassemble. x plus 2y is x plus y, which is at most 4, plus another y, which is also at most 4."
            },
            {
              "eq": "8 < 12, contradicting x + 2y ≥ 12",
              "why": "Every point satisfying the first three constraints has x plus 2y at most 8, while the fourth demands at least 12. No point can do both, so the feasible region is empty and the LPP has no feasible solution. Certified in three lines with no graph drawn."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE PICTURE BEHIND THE CERTIFICATE, TAP ONE",
          "chips": [
            "EMPTY",
            "REDUNDANT"
          ],
          "captions": [
            "The system just certified: x + y ≤ 4 shades the small faint triangle near the origin, while x + 2y ≥ 12 shades everything beyond the far line. The gap between them is the content of the algebra: 8 is less than 12, and that gap is exactly the strip no point of either region can cross. Nothing is shaded twice, so the feasible set is empty.",
            "Now x + y ≤ 10 with x, y ≥ 0, and someone has added x ≤ 12. The dashed line x = 12 sits entirely outside the triangle and never forms a boundary of it, so it can never bind. The algebra says the same thing in one line: since y ≥ 0, x ≤ x + y ≤ 10 < 12. Remove the constraint and the region, and therefore the optimum of any linear objective, is unchanged."
          ],
          "frames": [
            {
              "x": [
                -1.0,
                13.5
              ],
              "y": [
                -1.0,
                9.0
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -1,
                  "k": 4
                },
                {
                  "c": "line",
                  "m": -0.5,
                  "k": 6
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      0
                    ],
                    [
                      4,
                      0
                    ],
                    [
                      0,
                      4
                    ]
                  ],
                  "corners": false,
                  "soft": true
                },
                {
                  "points": [
                    [
                      12,
                      0
                    ],
                    [
                      13.2,
                      0
                    ],
                    [
                      13.2,
                      8.7
                    ],
                    [
                      0,
                      8.7
                    ],
                    [
                      0,
                      6
                    ]
                  ],
                  "corners": false
                }
              ],
              "labels": [
                {
                  "x": 2.6,
                  "y": 1.4,
                  "text": "x + y ≤ 4"
                },
                {
                  "x": 8.4,
                  "y": 5.4,
                  "text": "x + 2y ≥ 12"
                }
              ]
            },
            {
              "x": [
                -1.0,
                14.0
              ],
              "y": [
                -1.0,
                11.0
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -1,
                  "k": 10
                },
                {
                  "c": "vline",
                  "x": 12,
                  "dash": true,
                  "soft": true
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      0
                    ],
                    [
                      10,
                      0
                    ],
                    [
                      0,
                      10
                    ]
                  ],
                  "corners": false
                }
              ],
              "labels": [
                {
                  "x": 3.2,
                  "y": 2.6,
                  "text": "x + y ≤ 10"
                },
                {
                  "x": 12.4,
                  "y": 7.4,
                  "text": "x = 12"
                }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "One warning about certificates. A <b>failed</b> proof of infeasibility is not a proof of feasibility. Take <i>x</i> + 2<i>y</i> ≤ 4 with <i>x</i> + <i>y</i> ≥ 4 and <i>x</i>, <i>y</i> ≥ 0. It looks contradictory, and the manoeuvre above gets nowhere because no bound on <i>y</i> alone comes out. So exhibit a point instead: put <i>y</i> = 0, and then <i>x</i> ≥ 4 with <i>x</i> ≤ 4 force <i>x</i> = 4, and (4, 0) satisfies everything. The system is feasible, with a single feasible point. <b>Infeasibility claims need a certificate; feasibility claims need only one witness.</b>"
        },
        {
          "t": "def",
          "term": "Redundant constraint",
          "html": "A constraint whose removal leaves the feasible region unchanged, because every point allowed by the other constraints already satisfies it. Its line lies entirely outside the region, or at most touches it at a single vertex. Redundancy is not an error and not an outcome: it is simply a line that shapes nothing, and spotting it saves you drawing and stops you looking for corners that are not there."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A coaching centre runs <i>x</i> morning and <i>y</i> evening batches. Staff commitments demand at least 6 of each, but the rooms allow at most 10 batches a day in total. It wants to maximise enrolment <i>Z</i> = 30<i>x</i> + 25<i>y</i>. Solve.",
          "steps": [
            "Constraints: <i>x</i> ≥ 6, <i>y</i> ≥ 6, <i>x</i> + <i>y</i> ≤ 10, <i>x</i>, <i>y</i> ≥ 0.",
            "Add the first two with multipliers 1 and 1: <i>x</i> + <i>y</i> ≥ 6 + 6 = 12.",
            "But the room constraint demands <i>x</i> + <i>y</i> ≤ 10. Since 12 > 10, no pair (<i>x</i>, <i>y</i>) can satisfy both, and the two shaded regions never overlap.",
            "So do not look for corner points. There are none, because there is no region."
          ],
          "ans": "The feasible region is <b>empty</b>: the LPP has no feasible solution and <i>Z</i> has no optimal value. In words, the staffing promise and the room capacity are in conflict and one of them must be relaxed"
        },
        {
          "t": "ex",
          "tag": "CUET",
          "q": "Maximise <i>Z</i> = 2<i>x</i> + 2<i>y</i> subject to <i>x</i> + <i>y</i> ≤ 6, <i>x</i> ≤ 4, <i>y</i> ≤ 4, <i>x</i>, <i>y</i> ≥ 0. How many optimal solutions are there?",
          "steps": [
            "Corners: (0, 0), (4, 0), (4, 2) where <i>x</i> = 4 meets <i>x</i> + <i>y</i> = 6, (2, 4) where <i>y</i> = 4 meets it, and (0, 4).",
            "Values of <i>Z</i> = 2<i>x</i> + 2<i>y</i>: 0, 8, 12, 12, 8.",
            "The maximum 12 is attained at <b>two</b> corners, (4, 2) and (2, 4), which are adjacent along the edge <i>x</i> + <i>y</i> = 6.",
            "The objective line 2<i>x</i> + 2<i>y</i> = 12 has slope −1 and so does that edge, so the two coincide: the line leaves the region along the whole edge."
          ],
          "ans": "<b>Infinitely many.</b> Every point of the segment joining (4, 2) and (2, 4) gives <i>Z</i> = 12, and answering “two” is the standard half-mark loss"
        },
        {
          "t": "ex",
          "tag": "CUET",
          "q": "A feasible region is defined by <i>x</i> + <i>y</i> ≤ 10, <i>x</i> ≤ 12, <i>x</i> ≥ 0, <i>y</i> ≥ 0. Which constraint is redundant, and does removing it change the answer to any maximisation over the region?",
          "steps": [
            "Within the first quadrant, <i>y</i> ≥ 0 gives <i>x</i> ≤ <i>x</i> + <i>y</i>, and <i>x</i> + <i>y</i> ≤ 10, so <i>x</i> ≤ 10.",
            "Since 10 < 12, every point allowed by the other constraints already satisfies <i>x</i> ≤ 12 with room to spare.",
            "So the line <i>x</i> = 12 lies entirely outside the region and never forms part of its boundary. It can never bind.",
            "The corners are (0, 0), (10, 0) and (0, 10) with or without it."
          ],
          "ans": "<i>x</i> ≤ 12 is <b>redundant</b>. Removing it leaves the region unchanged, and therefore leaves the optimum of every linear objective over it unchanged too"
        },
        {
          "t": "ex",
          "tag": "CBSE HOTS",
          "q": "Show without a graph that 2<i>x</i> + <i>y</i> ≤ 8, <i>x</i> + 2<i>y</i> ≤ 8, <i>x</i> + <i>y</i> ≥ 7 is infeasible.",
          "steps": [
            "The ≥ constraint talks about <i>x</i> + <i>y</i>, so aim the two ≤ constraints at that expression.",
            "Add them with multipliers 1 and 1: (2<i>x</i> + <i>y</i>) + (<i>x</i> + 2<i>y</i>) = 3<i>x</i> + 3<i>y</i> ≤ 16.",
            "Divide by 3: <i>x</i> + <i>y</i> ≤ 16/3, which is about 5.33.",
            "But the third constraint demands <i>x</i> + <i>y</i> ≥ 7, and 16/3 < 7."
          ],
          "ans": "Contradiction, so no point satisfies all three: the system is <b>infeasible</b>. The multipliers 1 and 1 were chosen so that the left sides would add to a multiple of the expression the lower bound talks about"
        },
        {
          "t": "mcq",
          "q": "An LPP whose feasible region is the empty set has:",
          "correct": 3,
          "opts": [
            {
              "label": "a unique solution",
              "nudge": "A solution has to be a point of the region, and there are no points at all. Nothing can be unique when nothing exists."
            },
            {
              "label": "infinitely many solutions",
              "nudge": "The same assumption in a different shape: it still needs valid points to exist. Infinitely many of nothing is still nothing."
            },
            {
              "label": "an unbounded solution",
              "nudge": "Unboundedness needs a <b>non-empty</b> region that stretches to infinity. An empty region is not unbounded, it is infeasible, and the two are different verdicts."
            },
            {
              "label": "no feasible solution",
              "nudge": null
            }
          ],
          "solution": "An empty region means no point satisfies every constraint, so there is no feasible solution and hence no optimal one. The correct exam sentence is “the LPP has no feasible solution”, not “the answer is zero” and not “the region is unbounded”."
        },
        {
          "t": "mcq",
          "q": "If a linear objective attains the same maximum value at two adjacent corner points, the number of optimal solutions is:",
          "correct": 3,
          "opts": [
            {
              "label": "1",
              "nudge": "That contradicts the tie itself. Two distinct corners already carry the optimum, so there cannot be only one optimal point."
            },
            {
              "label": "2",
              "nudge": "The classic trap: it counts the two corners and forgets everything on the edge between them, all of which reads the same value."
            },
            {
              "label": "0",
              "nudge": "The optimum is attained, twice over. Zero optimal solutions would mean the optimum is never reached, which is the unbounded case, not this one."
            },
            {
              "label": "infinite",
              "nudge": null
            }
          ],
          "solution": "Write any point of the joining segment as λA + (1 − λ)B. Linearity gives <i>Z</i> = λM + (1 − λ)M = M, and convexity says every such point is feasible. So the entire edge is optimal: infinitely many solutions."
        },
        {
          "t": "mcq",
          "q": "“Unbounded region” and “unbounded solution” are:",
          "correct": 1,
          "opts": [
            {
              "label": "the same thing",
              "nudge": "The single most common confusion in this topic, and the reason the question is set. A diet problem has the first without the second every time."
            },
            {
              "label": "different: one is the region’s shape, the other is whether a finite optimum exists",
              "nudge": null
            },
            {
              "label": "both impossible in linear programming",
              "nudge": "Both occur routinely. Every ≥ system gives an unbounded region, and maximising over one usually gives an unbounded solution."
            },
            {
              "label": "two names for an empty feasible set",
              "nudge": "An empty set is neither. It is infeasible, which is a third and separate verdict with its own exam sentence."
            }
          ],
          "solution": "“Unbounded region” describes geometry: the shape stretches to infinity. “Unbounded solution” describes the answer: the objective has no finite optimum. A region can be unbounded and still yield a finite minimum, which is exactly what every cost problem does."
        },
        {
          "t": "mcq",
          "q": "In the constraints 2<i>x</i> + <i>y</i> ≤ 20, <i>x</i> ≤ 15, <i>x</i> ≥ 0, <i>y</i> ≥ 0, the redundant constraint is:",
          "correct": 1,
          "opts": [
            {
              "label": "2<i>x</i> + <i>y</i> ≤ 20",
              "nudge": "This one shapes the region; it supplies the slanted edge and both non-trivial corners. Remove it and the region becomes the whole strip 0 ≤ <i>x</i> ≤ 15."
            },
            {
              "label": "<i>x</i> ≤ 15",
              "nudge": null
            },
            {
              "label": "<i>y</i> ≥ 0",
              "nudge": "Non-negativity is what supplies the bottom edge and the corner (10, 0). Drop it and the region runs downward without limit."
            },
            {
              "label": "none of them",
              "nudge": "One of them genuinely imposes nothing. Test each line against the region the others produce before concluding that all four matter."
            }
          ],
          "solution": "With <i>y</i> ≥ 0, the first constraint gives 2<i>x</i> ≤ 2<i>x</i> + <i>y</i> ≤ 20, so <i>x</i> ≤ 10. Since 10 < 15, the bound <i>x</i> ≤ 15 is already satisfied by every admissible point and its line never touches the region."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Does “Maximise <i>Z</i> = <i>x</i> + <i>y</i> subject to <i>x</i> + <i>y</i> ≥ 5, <i>x</i> + <i>y</i> ≤ 2, <i>x</i>, <i>y</i> ≥ 0” have a feasible solution? Justify.",
              "a": "No. The two constraints demand <i>x</i> + <i>y</i> ≥ 5 and <i>x</i> + <i>y</i> ≤ 2 of the same expression, and 5 > 2. The region is empty, so there is no feasible and no optimal solution."
            },
            {
              "q": "[CUET] For “Maximise <i>Z</i> = 3<i>x</i> + 2<i>y</i> subject to <i>x</i> − <i>y</i> ≥ 1, <i>x</i>, <i>y</i> ≥ 0”, does a maximum exist? Name the outcome type.",
              "a": "No maximum: an unbounded solution. The region is unbounded in the direction of increasing <i>Z</i>, since (<i>k</i>, 0) is feasible for every <i>k</i> ≥ 1 and gives <i>Z</i> = 3<i>k</i>."
            },
            {
              "q": "[CBSE HOTS] For “Minimise <i>Z</i> = 2<i>x</i> + 3<i>y</i> subject to <i>x</i> + <i>y</i> ≥ 6, <i>x</i>, <i>y</i> ≥ 0”, does a minimum exist? Does a maximum?",
              "a": "Minimum yes: corners (6, 0) and (0, 6) give 12 and 18, and 2<i>x</i> + 3<i>y</i> ≥ 2(<i>x</i> + <i>y</i>) ≥ 12, so <i>Z</i> = 12 at (6, 0) is genuine. Maximum no: the region is unbounded upward and <i>Z</i> grows without limit."
            },
            {
              "q": "[CUET] Prove without a graph that <i>x</i> + <i>y</i> ≤ 3, 2<i>x</i> + 2<i>y</i> ≥ 8, <i>x</i>, <i>y</i> ≥ 0 is infeasible.",
              "a": "Halve the second: <i>x</i> + <i>y</i> ≥ 4. With the first, <i>x</i> + <i>y</i> ≤ 3. Since 4 > 3 the two cannot hold together, so the region is empty."
            },
            {
              "q": "[CUET] Determine whether 2<i>x</i> + <i>y</i> ≤ 4, <i>x</i> + <i>y</i> ≥ 3, <i>x</i>, <i>y</i> ≥ 0 is infeasible, and justify whichever way you conclude.",
              "a": "Feasible. One witness settles it: (1, 2) gives 2 + 2 = 4 ≤ 4 and 1 + 2 = 3 ≥ 3. The feasible set is in fact the segment from (1, 2) to (2, 0)."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Reading “unbounded region” as “no answer”.</b> Most cost-minimisation problems have unbounded regions <b>and</b> a perfectly valid minimum. Run the half-plane test before declaring that no optimum exists.",
            "<b>Counting multiple optima as two.</b> A tie at two corners means <b>infinitely many</b> solutions, the whole edge, not the two endpoints. Write the sentence about the segment, not just the two coordinate pairs.",
            "<b>Forcing corner points onto an empty region.</b> If no common shaded region exists, stop. Do not solve pairs of lines and tabulate <i>Z</i>: state plainly that there is no feasible solution.",
            "<b>Treating every constraint as binding.</b> Some lines shape nothing. Check which constraints actually form the boundary before you go looking for corners on a line that never touches the region.",
            "<b>Concluding infeasibility because your attempted proof failed.</b> A failed certificate proves nothing. Either produce a valid combination that contradicts, or exhibit one feasible point and be done."
          ]
        },
        {
          "t": "protip",
          "html": "spend five seconds classifying the outcome before you grind through corner points. is there a common region at all? if not, infeasible, and you are finished. is it bounded? if yes, both a max and a min exist and no special case can arise. only if it is unbounded do you owe the verification test. that triage costs nothing and it prevents every classic special-case error in this topic."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "four endings: unique · multiple · unbounded · infeasible",
              "note": "and redundancy, which is a fifth thing to spot"
            },
            {
              "f": "no common shaded region ⇒ no feasible solution",
              "note": "nothing to optimise; do not list corners"
            },
            {
              "f": "unbounded region ≠ unbounded solution",
              "note": "shape versus verdict, and CBSE asks this verbatim"
            },
            {
              "f": "unbounded and ax + by > M still meets R ⇒ no maximum",
              "note": "the minimum may still exist; check it separately"
            },
            {
              "f": "two corners tie ⇒ the whole joining edge is optimal",
              "note": "infinitely many, because the level line is parallel to it"
            },
            {
              "f": "bounded region ⇒ no special case at all",
              "note": "Theorem 2 gives both a max and a min"
            },
            {
              "f": "certificate: combine ≤ against ≥ to contradict",
              "note": "positive multipliers only; feasibility needs one witness"
            }
          ],
          "aids": [
            "“no region, no answer”: an empty feasible set is infeasible",
            "“tie means the whole edge”, never two points",
            "“failed proof proves nothing”: certify, or exhibit a witness"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Unknown Coefficients and Whole-Number Answers",
      "chip": "05 BEYOND",
      "kalam": "the ratio picks the corner; the scan picks the plan",
      "blocks": [
        {
          "t": "p",
          "html": "Two questions sit just past the standard routine, and both are set regularly. The first turns the problem inside out: you are given the corners and the objective is the unknown. <b>“For which <i>p</i> and <i>q</i> does the maximum of <i>Z</i> = <i>px</i> + <i>qy</i> occur at this vertex?”</b> The second is the honest version of the divisibility footnote: when the optimum lands at (3.5, 2) and the answer has to be whole gadgets, what do you do? Rounding, it turns out, is demonstrably wrong."
        },
        {
          "t": "p",
          "html": "Start with the parametric one, and notice it is nothing new. “The maximum is at <i>V</i>” is just a handful of comparisons: <i>Z</i>(<i>V</i>) has to be at least <i>Z</i> at every other corner. Each comparison is one <b>linear inequality in <i>p</i> and <i>q</i></b>, so the whole question is a tiny linear system in the coefficients, solved the same way you solve any other."
        },
        {
          "t": "think",
          "html": "the ratio <i>p</i>/<i>q</i> is a tilt, nothing more. it does not change the region and it does not change the corners, it only rotates the family of level lines. so the question “where is the maximum?” is really the question “which corner does a line of this tilt leave through last?”, and there are only as many answers as the polygon has corners."
        },
        {
          "t": "proc",
          "title": "Pinning the optimum to a chosen vertex",
          "steps": [
            "<b>Evaluate <i>Z</i> symbolically at every corner.</b> With <i>Z</i> = <i>px</i> + <i>qy</i> each corner gives a linear expression in <i>p</i> and <i>q</i>. Note straight away that the origin gives 0, so with <i>p</i>, <i>q</i> > 0 the origin can never be optimal for a maximisation.",
            "<b>Write the domination conditions.</b> The maximum occurs at <i>V<sub>k</sub></i> exactly when <i>Z</i>(<i>V<sub>k</sub></i>) ≥ <i>Z</i>(<i>V<sub>j</sub></i>) for every other <i>j</i>. For a <b>minimum</b>, reverse every inequality. Each one is linear in <i>p</i> and <i>q</i>.",
            "<b>Adjust for the exact wording.</b> “At <i>V<sub>k</sub></i> and nowhere else” makes those inequalities strict. “Also at <i>V<sub>j</sub></i>” replaces one of them by an equality, which is the multiple-optima condition.",
            "<b>Solve the little system</b> in <i>p</i> and <i>q</i>, keeping the sign restrictions <i>p</i> > 0 and <i>q</i> > 0. Simplify each inequality all the way, since one of them usually implies another and the answer is a single interval for the ratio.",
            "<b>Cross-check with slopes.</b> The objective line has slope −<i>p</i>/<i>q</i>, and an edge joining two corners becomes a tie exactly when −<i>p</i>/<i>q</i> equals that edge's slope. So the critical ratios are the negatives of the edge slopes, and they must match the endpoints of your interval."
          ]
        },
        {
          "t": "formula",
          "kicker": "THE SLOPE CRITERION",
          "tag": "the check that catches every algebra slip",
          "main": "A and B both optimal ⟺ p/q = −(slope of AB)",
          "legend": [
            "the objective line <i>px</i> + <i>qy</i> = <i>c</i> has slope −<i>p</i>/<i>q</i>, and all its level lines are parallel",
            "as the ratio <i>r</i> = <i>p</i>/<i>q</i> sweeps from 0 to infinity, the optimal vertex changes precisely at these critical ratios",
            "so listing the negatives of the edge slopes, in order, lists every possible behaviour of the problem"
          ],
          "note": "It is exact, not a heuristic: two points both maximise Z if and only if they lie on the same level line, and that line is then parallel to the edge joining them."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE OPTIMAL VERTEX WALKS, TAP A RATIO",
          "chips": [
            "p/q = 1/4",
            "p/q = 1",
            "p/q = 3/2",
            "p/q = 2"
          ],
          "captions": [
            "The bakery region with corners O(0, 0), A(4, 0), B(2, 3), C(0, 4), and now the objective is Z = px + qy with p and q unknown. At p/q = 1/4 the level lines are nearly flat, so the last one to leave the region leaves through the top: the maximum is at C(0, 4). Small p means x is barely worth anything, so you make no nankhatai at all.",
            "Raise the ratio to 1, that is p = q. The level lines have tilted to slope −1 and the last touch has moved to the interior vertex B(2, 3), where 2p + 3q = 5 beats 4p = 4 at A and 4q = 4 at C. Between the two critical ratios the interior vertex wins.",
            "At p/q = 3/2 the level line has slope −3/2, which is exactly the slope of the edge AB. So the line leaves along that whole edge: A and B both read 12 when p = 3 and q = 2, and so does every point between them. This is the tie, and it is the boundary between B winning and A winning.",
            "Push past it to p/q = 2 and the maximum has moved to A(4, 0). So as r = p/q grows from 0 to infinity the optimal vertex walks C, then B, then A, switching at r = 1/2 and r = 3/2, the negatives of the slopes of the two edges BC and AB."
          ],
          "frames": [
            {
              "x": [
                -0.8,
                7.0
              ],
              "y": [
                -0.8,
                6.4
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -0.5,
                  "k": 4,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -1.5,
                  "k": 6,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -0.25,
                  "k": 4.0,
                  "dash": true
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      0
                    ],
                    [
                      4,
                      0
                    ],
                    [
                      2,
                      3
                    ],
                    [
                      0,
                      4
                    ]
                  ],
                  "corners": true
                }
              ],
              "points": [
                {
                  "x": 0,
                  "y": 4,
                  "label": "C"
                }
              ],
              "labels": [
                {
                  "x": 5.0,
                  "y": 3.4,
                  "text": "p/q = 1/4"
                }
              ]
            },
            {
              "x": [
                -0.8,
                7.0
              ],
              "y": [
                -0.8,
                6.4
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -0.5,
                  "k": 4,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -1.5,
                  "k": 6,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -1.0,
                  "k": 5.0,
                  "dash": true
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      0
                    ],
                    [
                      4,
                      0
                    ],
                    [
                      2,
                      3
                    ],
                    [
                      0,
                      4
                    ]
                  ],
                  "corners": true
                }
              ],
              "points": [
                {
                  "x": 2,
                  "y": 3,
                  "label": "B"
                }
              ],
              "labels": [
                {
                  "x": 5.4,
                  "y": 1.1,
                  "text": "p/q = 1"
                }
              ]
            },
            {
              "x": [
                -0.8,
                7.0
              ],
              "y": [
                -0.8,
                6.4
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -0.5,
                  "k": 4,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -1.5,
                  "k": 6,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -1.5,
                  "k": 6.0,
                  "dash": true
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      0
                    ],
                    [
                      4,
                      0
                    ],
                    [
                      2,
                      3
                    ],
                    [
                      0,
                      4
                    ]
                  ],
                  "corners": true
                }
              ],
              "segments": [
                {
                  "from": [
                    4,
                    0
                  ],
                  "to": [
                    2,
                    3
                  ]
                }
              ],
              "points": [
                {
                  "x": 4,
                  "y": 0,
                  "label": "A"
                },
                {
                  "x": 2,
                  "y": 3,
                  "label": "B"
                }
              ],
              "labels": [
                {
                  "x": 5.2,
                  "y": 4.6,
                  "text": "p/q = 3/2, a tie"
                }
              ]
            },
            {
              "x": [
                -0.8,
                7.0
              ],
              "y": [
                -0.8,
                6.4
              ],
              "curves": [
                {
                  "c": "line",
                  "m": -0.5,
                  "k": 4,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -1.5,
                  "k": 6,
                  "soft": true
                },
                {
                  "c": "line",
                  "m": -2.0,
                  "k": 8.0,
                  "dash": true
                }
              ],
              "polygons": [
                {
                  "points": [
                    [
                      0,
                      0
                    ],
                    [
                      4,
                      0
                    ],
                    [
                      2,
                      3
                    ],
                    [
                      0,
                      4
                    ]
                  ],
                  "corners": true
                }
              ],
              "points": [
                {
                  "x": 4,
                  "y": 0,
                  "label": "A"
                }
              ],
              "labels": [
                {
                  "x": 5.2,
                  "y": 5.2,
                  "text": "p/q = 2"
                }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE SLOPE CRITERION IS EXACT, TAP A LINE",
          "steps": [
            {
              "eq": "A and B both maximise Z ⟺ Z(A) = Z(B) = M",
              "why": "If two points both attain the maximum they must give the same value, and that value is the maximum. Conversely, if two feasible points share the maximum value then both attain it. So the geometric statement and the numerical one are the same statement."
            },
            {
              "eq": "pAx + qAy = pBx + qBy",
              "why": "Write out Z at each point and set them equal. This is a single linear equation relating p, q and the four coordinates, and nothing has been assumed about which region the points came from."
            },
            {
              "eq": "p(Ax − Bx) = q(By − Ay)",
              "why": "Collect the p terms on one side and the q terms on the other. This is the only algebra in the argument, and it is worth doing in this order so that the next step is a division and not a rearrangement."
            },
            {
              "eq": "−p/q = (By − Ay)/(Bx − Ax) = slope of AB",
              "why": "Divide by q times the difference in x coordinates, both non-zero for two distinct corners not on a vertical line. The left side is the slope of every level line of Z, so the level line through A and B is parallel to AB, and since it contains both points it is the line AB itself."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE HOTS",
          "q": "The feasible region has corners O(0, 0), A(4, 0), B(2, 3), C(0, 4). For <i>Z</i> = <i>px</i> + <i>qy</i> with <i>p</i>, <i>q</i> > 0, find exactly when the maximum occurs at A, at B, and at C.",
          "steps": [
            "Corner values: <i>Z</i>(O) = 0, <i>Z</i>(A) = 4<i>p</i>, <i>Z</i>(B) = 2<i>p</i> + 3<i>q</i>, <i>Z</i>(C) = 4<i>q</i>. With <i>p</i>, <i>q</i> > 0 the origin is always strictly smallest, so O can never win.",
            "Max at A: 4<i>p</i> ≥ 2<i>p</i> + 3<i>q</i> gives 2<i>p</i> ≥ 3<i>q</i>, and 4<i>p</i> ≥ 4<i>q</i> gives <i>p</i> ≥ <i>q</i>. The first implies the second, so the condition is <i>p</i> ≥ 3<i>q</i>/2.",
            "Max at C: 4<i>q</i> ≥ 2<i>p</i> + 3<i>q</i> gives <i>q</i> ≥ 2<i>p</i>, and 4<i>q</i> ≥ 4<i>p</i> gives <i>q</i> ≥ <i>p</i>. The first is the binding one: <i>p</i>/<i>q</i> ≤ 1/2.",
            "Max at B: 2<i>p</i> + 3<i>q</i> ≥ 4<i>p</i> gives 2<i>p</i> ≤ 3<i>q</i>, and 2<i>p</i> + 3<i>q</i> ≥ 4<i>q</i> gives 2<i>p</i> ≥ <i>q</i>. Together, 1/2 ≤ <i>p</i>/<i>q</i> ≤ 3/2.",
            "Slope check: AB has slope (3 − 0)/(2 − 4) = −3/2 and BC has slope (4 − 3)/(0 − 2) = −1/2, so the critical ratios are 3/2 and 1/2, matching the three intervals exactly."
          ],
          "ans": "C for <i>p</i>/<i>q</i> ≤ 1/2, B for 1/2 ≤ <i>p</i>/<i>q</i> ≤ 3/2, A for <i>p</i>/<i>q</i> ≥ 3/2. Spot check at <i>p</i> = <i>q</i> = 1: values 0, 4, 5, 4, so B wins, and 1 does lie in [1/2, 3/2]"
        },
        {
          "t": "ex",
          "tag": "CUET",
          "q": "Find all <i>k</i> > 0 such that the maximum of <i>Z</i> = 3<i>x</i> + <i>ky</i> over the region with corners (0, 0), (5, 0), (3, 3), (0, 4) occurs at (3, 3).",
          "steps": [
            "Values: <i>Z</i>(0, 0) = 0, <i>Z</i>(5, 0) = 15, <i>Z</i>(3, 3) = 9 + 3<i>k</i>, <i>Z</i>(0, 4) = 4<i>k</i>.",
            "Beat (5, 0): 9 + 3<i>k</i> ≥ 15, so <i>k</i> ≥ 2.",
            "Beat (0, 4): 9 + 3<i>k</i> ≥ 4<i>k</i>, so <i>k</i> ≤ 9. Beating the origin is automatic for <i>k</i> > 0.",
            "Slope check: the edge (5, 0) to (3, 3) has slope −3/2, so 3/<i>k</i> = 3/2 gives <i>k</i> = 2; the edge (3, 3) to (0, 4) has slope −1/3, so 3/<i>k</i> = 1/3 gives <i>k</i> = 9. Both endpoints confirmed."
          ],
          "ans": "2 ≤ <i>k</i> ≤ 9. At <i>k</i> = 2 the value 15 is tied with (5, 0) and at <i>k</i> = 9 the value 36 is tied with (0, 4), so if the question demands a <b>unique</b> optimum at (3, 3) the answer tightens to 2 < <i>k</i> < 9"
        },
        {
          "t": "ex",
          "tag": "CUET",
          "q": "An unbounded diet region has corners (0, 8), (2, 4) and (6, 0). For <i>Z</i> = <i>px</i> + <i>qy</i> with <i>p</i>, <i>q</i> > 0, find when the <b>minimum</b> occurs at (2, 4).",
          "steps": [
            "Values: <i>Z</i>(0, 8) = 8<i>q</i>, <i>Z</i>(2, 4) = 2<i>p</i> + 4<i>q</i>, <i>Z</i>(6, 0) = 6<i>p</i>. Minimising, so every domination inequality reverses.",
            "Beat (0, 8): 2<i>p</i> + 4<i>q</i> ≤ 8<i>q</i>, so 2<i>p</i> ≤ 4<i>q</i>, that is <i>p</i> ≤ 2<i>q</i>.",
            "Beat (6, 0): 2<i>p</i> + 4<i>q</i> ≤ 6<i>p</i>. Subtract 2<i>p</i> from both sides: 4<i>q</i> ≤ 4<i>p</i>, that is <i>q</i> ≤ <i>p</i>. Do the subtraction on paper, since dropping only part of the 2<i>p</i> is the standard slip here.",
            "Slope check: the edge (2, 4) to (6, 0) has slope −1 and the edge (0, 8) to (2, 4) has slope −2, so the critical ratios are 1 and 2, matching the interval exactly."
          ],
          "ans": "<i>q</i> ≤ <i>p</i> ≤ 2<i>q</i>, that is 1 ≤ <i>p</i>/<i>q</i> ≤ 2. Test <i>p</i> = 4, <i>q</i> = 5, a ratio of 0.8 which is outside: values 40, 28, 24, so the minimum has moved to (6, 0), as it should"
        },
        {
          "t": "defgrid",
          "title": "Reading the exact wording of a parametric question",
          "tag": "one word changes the answer",
          "rows": [
            {
              "k": "maximum occurs at V",
              "v": "all comparisons are ≥, ties allowed. The answer is a <b>closed interval</b> of ratios"
            },
            {
              "k": "maximum occurs at V and nowhere else",
              "v": "the comparisons become strict, so the interval <b>opens</b> at both ends"
            },
            {
              "k": "maximum occurs at both V and W",
              "v": "one comparison becomes an equality. The answer is a <b>single</b> ratio, and V and W must be adjacent"
            },
            {
              "k": "minimum occurs at V",
              "v": "every comparison reverses to ≤. Same method, and forgetting to reverse is the standard slip"
            }
          ]
        },
        {
          "t": "p",
          "html": "Now the second question. The graphical method happily returns <i>x</i> = 3.5, and Topic 1 admitted as much when it listed <b>divisibility</b> among the assumptions. Board problems are usually designed so the optimum lands on whole numbers, but an Exemplar or HOTS paper will hand you a fractional optimum and ask for the best <b>achievable</b> plan. The reflex is to round the optimal vertex. That reflex is wrong, and it is worth seeing exactly how wrong."
        },
        {
          "t": "formula",
          "kicker": "THE CEILING PRINCIPLE",
          "tag": "what makes the search finite",
          "main": "Z<sub>int</sub> ≤ Z<sub>max</sub>",
          "legend": [
            "every lattice point of the region is a feasible point of the original LPP, so no integer plan can beat the continuous optimum",
            "for maximisation, scan candidate integer values of <i>Z</i> <b>downward</b> from the continuous optimum; the first one actually attained at a feasible lattice point is the answer",
            "for minimisation, run the mirror image and scan <b>upward</b> from the continuous optimum"
          ],
          "note": "This is the whole reason the search terminates. Without it there is no upper limit on which values of Z to try, and the problem would have no finite procedure at all."
        },
        {
          "t": "proc",
          "title": "The scan, and what is forbidden",
          "steps": [
            "<b>Solve the continuous LPP first</b> and record both the optimal value and the optimal vertex. The value is your starting point and the ceiling principle guarantees you never have to look above it.",
            "<b>Take the largest integer not exceeding it</b> and call it <i>c</i>. For that <i>c</i>, find every lattice point with <i>ax</i> + <i>by</i> = <i>c</i> by solving over small non-negative integers, and test each one against the constraints.",
            "<b>Step down one candidate value at a time</b> until a feasible lattice point appears. Stop at the first hit: that value is the integer optimum, because every larger value has already been exhausted.",
            "<b>Do not restrict attention to points near the continuous optimum.</b> The scan covers the whole region by construction, and that is exactly what saves you: the winning plan is often several steps away from the fractional vertex.",
            "<b>What is forbidden: rounding the optimal vertex and trusting the result.</b> Up, down or to nearest, every convention can land outside the region or on a worse plan, and none of them is a proof of anything."
          ]
        },
        {
          "t": "ex",
          "tag": "EXEMPLAR PATTERN",
          "q": "A unit makes gadgets (<i>x</i>) and kits (<i>y</i>). A gadget needs 2 hours on line A and 2 on line B; a kit needs 3 on A and 1 on B. Line A has 13 hours, line B has 9. Profit is ₹5 a gadget and ₹4 a kit. Find the most profitable plan in whole units.",
          "steps": [
            "Continuous: maximise <i>Z</i> = 5<i>x</i> + 4<i>y</i> subject to 2<i>x</i> + 3<i>y</i> ≤ 13, 2<i>x</i> + <i>y</i> ≤ 9, <i>x</i>, <i>y</i> ≥ 0. Subtracting the lines kills 2<i>x</i>: 2<i>y</i> = 4, so <i>y</i> = 2 and <i>x</i> = 7/2. Corners (0, 0), (9/2, 0), (7/2, 2), (0, 13/3) give 0, 22.5, 25.5 and 52/3.",
            "So the continuous optimum is 25.5 at (7/2, 2), which is not a production plan.",
            "Rounding fails three ways. Up to (4, 2): 2(4) + 3(2) = 14 > 13, infeasible. Down to (3, 2): feasible, profit 23. Nearest, keeping <i>y</i>: (4, 2) again, infeasible. Every convention gives 23 at best.",
            "Scan down from 25.5. At 25: 5<i>x</i> + 4<i>y</i> = 25 gives (5, 0) and (1, 5). Check (5, 0): 2(5) = 10 > 9, out. Check (1, 5): 2 + 15 = 17 > 13, out. At 24: 5<i>x</i> + 4<i>y</i> = 24 gives (4, 1) and (0, 6). Check (4, 1): 8 + 3 = 11 ≤ 13 and 8 + 1 = 9 ≤ 9, both hold."
          ],
          "ans": "<b>4 gadgets and 1 kit, profit ₹24</b>, which beats every rounding of (3.5, 2) by ₹1 and sits at a point no rounding rule would ever propose. The scan found it because the scan never assumed the answer lived next door to the fractional vertex"
        },
        {
          "t": "ex",
          "tag": "EXEMPLAR PATTERN",
          "q": "Minimise <i>Z</i> = 2<i>x</i> + 3<i>y</i> over the integer points satisfying <i>x</i> + <i>y</i> ≥ 4.5, <i>x</i> + 3<i>y</i> ≥ 9, <i>x</i> ≥ 0, <i>y</i> ≥ 0.",
          "steps": [
            "Continuous corners first, and check each one for feasibility. On <i>y</i> = 0 the bounds are <i>x</i> ≥ 4.5 and <i>x</i> ≥ 9, and the <b>larger</b> binds, so the corner is (9, 0), not (4.5, 0). The point (4.5, 0) fails <i>x</i> + 3<i>y</i> ≥ 9 outright, since 4.5 + 0 = 4.5.",
            "On <i>x</i> = 0 the bounds are <i>y</i> ≥ 4.5 and <i>y</i> ≥ 3, so the corner is (0, 9/2). The two lines cross where 2<i>y</i> = 4.5, giving (9/4, 9/4). Corners: (0, 9/2), (9/4, 9/4), (9, 0).",
            "Values: <i>Z</i>(0, 9/2) = 13.5, <i>Z</i>(9/4, 9/4) = 4.5 + 6.75 = 11.25, <i>Z</i>(9, 0) = 18. The continuous minimum is 11.25 at (9/4, 9/4), and the region is unbounded upward and to the right where <i>Z</i> only grows, so it is genuine.",
            "Scan up from 11.25. The smallest candidate is 12: 2<i>x</i> + 3<i>y</i> = 12 gives (6, 0), (3, 2) and (0, 4). Check (6, 0): <i>x</i> + 3<i>y</i> = 6, below 9, out. Check (3, 2): <i>x</i> + <i>y</i> = 5 ≥ 4.5 and <i>x</i> + 3<i>y</i> = 9 ≥ 9, both hold. Check (0, 4): <i>x</i> + <i>y</i> = 4, below 4.5, out."
          ],
          "ans": "Minimum integer cost <b><i>Z</i> = 12 at (3, 2)</b>. Note how far it sits from the continuous optimum, and note that rounding (9/4, 9/4) up to (3, 3) would have cost 15, three rupees more than necessary"
        },
        {
          "t": "mcq",
          "q": "A region has corners (0, 0), (4, 0), (2, 4) and (0, 5). For <i>Z</i> = <i>px</i> + <i>qy</i> with <i>p</i>, <i>q</i> > 0, the maximum occurs at (2, 4) exactly when:",
          "correct": 0,
          "opts": [
            {
              "label": "<i>q</i>/2 ≤ <i>p</i> ≤ 2<i>q</i>",
              "nudge": null
            },
            {
              "label": "<i>p</i> ≥ 2<i>q</i>",
              "nudge": "That is the half of the condition where (4, 0) takes over. Beyond <i>p</i> = 2<i>q</i> the vertex (2, 4) loses to the <i>x</i>-axis corner."
            },
            {
              "label": "<i>p</i> ≤ <i>q</i>/2",
              "nudge": "That is the other end, where (0, 5) takes over. It is the complementary interval, not the one asked for."
            },
            {
              "label": "<i>p</i> = <i>q</i>",
              "nudge": "A single ratio, which would make (2, 4) optimal for one objective only. The domination conditions give an interval, not a point."
            }
          ],
          "solution": "Values: 4<i>p</i> at (4, 0), 2<i>p</i> + 4<i>q</i> at (2, 4), 5<i>q</i> at (0, 5). Beat (4, 0): 2<i>p</i> + 4<i>q</i> ≥ 4<i>p</i> gives 4<i>q</i> ≥ 2<i>p</i>, so <i>p</i> ≤ 2<i>q</i>. Beat (0, 5): 2<i>p</i> + 4<i>q</i> ≥ 5<i>q</i> gives 2<i>p</i> ≥ <i>q</i>, so <i>p</i> ≥ <i>q</i>/2. The comparison with the origin is automatic."
        },
        {
          "t": "mcq",
          "q": "For the same region, the maximum of <i>Z</i> = 2<i>x</i> + <i>ky</i> occurs at (0, 5) for:",
          "correct": 2,
          "opts": [
            {
              "label": "<i>k</i> ≥ 8/5",
              "nudge": "This comes from comparing with (4, 0) alone: 5<i>k</i> ≥ 8. But (2, 4) has to be beaten too, and it is the tighter comparison."
            },
            {
              "label": "<i>k</i> ≥ 2",
              "nudge": "Neither comparison gives 2. It looks like the right shape of answer, which is why it is offered."
            },
            {
              "label": "<i>k</i> ≥ 4",
              "nudge": null
            },
            {
              "label": "0 < <i>k</i> ≤ 4",
              "nudge": "The inequality is reversed. A larger <i>k</i> makes <i>y</i> more valuable, which is what pushes the optimum to the corner with the largest <i>y</i>."
            }
          ],
          "solution": "Values: 8 at (4, 0), 4 + 4<i>k</i> at (2, 4), 5<i>k</i> at (0, 5). Beating (2, 4) needs 5<i>k</i> ≥ 4 + 4<i>k</i>, that is <i>k</i> ≥ 4. Beating (4, 0) needs 5<i>k</i> ≥ 8, which is automatic once <i>k</i> ≥ 4 since then 5<i>k</i> ≥ 20."
        },
        {
          "t": "mcq",
          "q": "The continuous optimum of a maximisation LPP is <i>Z</i> = 25.5. The best value attainable at a point with whole-number coordinates:",
          "correct": 1,
          "opts": [
            {
              "label": "is 26, the nearest integer",
              "nudge": "Rounding the <b>value</b> upward breaks the ceiling principle: no feasible point at all reaches 26, integer coordinates or not."
            },
            {
              "label": "is at most 25",
              "nudge": null
            },
            {
              "label": "is exactly 25",
              "nudge": "At most 25, but not necessarily 25. The worked example reaches only 24, because no feasible lattice point sits on the line <i>Z</i> = 25."
            },
            {
              "label": "cannot be decided without the constraints",
              "nudge": "The bound itself needs nothing but the ceiling principle. Which value is actually attained needs the constraints, but the ceiling does not."
            }
          ],
          "solution": "Every lattice point of the region is a feasible point of the continuous LPP, so its objective value cannot exceed 25.5. If the coefficients are integers the value is an integer, so it is at most 25. Whether 25 is reached is a separate question, settled by the scan."
        },
        {
          "t": "mcq",
          "q": "In an integer LPP, rounding the continuous optimal vertex to the nearest lattice point:",
          "correct": 3,
          "opts": [
            {
              "label": "always gives the integer optimum",
              "nudge": "The worked example is a counterexample: rounding gives 23 at best while the true optimum is 24, at a point no rounding produces."
            },
            {
              "label": "always gives a feasible point",
              "nudge": "Rounding (3.5, 2) up to (4, 2) breaks 2<i>x</i> + 3<i>y</i> ≤ 13 outright. Rounding can walk straight out of the region."
            },
            {
              "label": "gives the optimum whenever the region is bounded",
              "nudge": "Boundedness is irrelevant here. The region in the worked example is bounded and rounding still fails."
            },
            {
              "label": "may be infeasible, or feasible but not optimal",
              "nudge": null
            }
          ],
          "solution": "Both failures are real and both occur in one example. (4, 2) is infeasible and (3, 2) is feasible but worth only 23, while the true integer optimum is 24 at (4, 1). Nothing short of the downward scan finds it, which is why the scan is the method and rounding is not."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CUET] For the region with corners (0, 0), (5, 0), (3, 3), (0, 4) and <i>Z</i> = 3<i>x</i> + <i>ky</i>, for which <i>k</i> > 0 is the maximum at (0, 4)?",
              "a": "Values 15 at (5, 0), 9 + 3<i>k</i> at (3, 3), 4<i>k</i> at (0, 4). Need 4<i>k</i> ≥ 9 + 3<i>k</i>, so <i>k</i> ≥ 9; and 4<i>k</i> ≥ 15 is automatic once <i>k</i> ≥ 9. Answer <i>k</i> ≥ 9, which is exactly where the tie of the worked example ends."
            },
            {
              "q": "[CBSE HOTS] The corners of a region are (0, 3), (1, 1) and (3, 0). For <i>Z</i> = <i>px</i> + <i>qy</i> with <i>p</i>, <i>q</i> > 0, find the condition for the minimum to occur at both (1, 1) and (3, 0).",
              "a": "Equal values: <i>p</i> + <i>q</i> = 3<i>p</i>, so <b><i>q</i> = 2<i>p</i></b>. Slope check: the edge from (1, 1) to (3, 0) has slope −1/2, so <i>p</i>/<i>q</i> = 1/2, the same condition. Then <i>Z</i>(0, 3) = 3<i>q</i> = 6<i>p</i> is larger than the shared 3<i>p</i>, so it really is the minimum."
            },
            {
              "q": "[CUET] For the corners O(0, 0), A(4, 0), B(2, 3), C(0, 4), list the order in which the optimal vertex changes as <i>p</i>/<i>q</i> grows from 0 to infinity, and name the switch ratios.",
              "a": "C, then B, then A, switching at <i>p</i>/<i>q</i> = 1/2 and <i>p</i>/<i>q</i> = 3/2. Those are the negatives of the slopes of BC and AB."
            },
            {
              "q": "[EXEMPLAR PATTERN] Maximise <i>Z</i> = 3<i>x</i> + 2<i>y</i> over the integer points of 2<i>x</i> + 3<i>y</i> ≤ 13, 2<i>x</i> + <i>y</i> ≤ 9, <i>x</i>, <i>y</i> ≥ 0.",
              "a": "Continuous optimum at (7/2, 2), value 10.5 + 4 = 14.5. Scan down from 14: 3<i>x</i> + 2<i>y</i> = 14 gives (4, 1), and 2(4) + 3(1) = 11 ≤ 13 with 2(4) + 1 = 9 ≤ 9, so it is feasible. Maximum <b>14 at (4, 1)</b>; 15 is impossible since 15 > 14.5 breaks the ceiling principle."
            },
            {
              "q": "[CUET] Over the region <i>x</i> + 2<i>y</i> ≤ 8, 3<i>x</i> + 2<i>y</i> ≤ 12, <i>x</i>, <i>y</i> ≥ 0, find every lattice point at which <i>Z</i> = 3<i>x</i> + 2<i>y</i> attains its maximum over lattice points.",
              "a": "Corner values are 0, 12, 12, 8, so the continuous maximum is 12 and the ceiling caps lattice points at 12. Lattice points on 3<i>x</i> + 2<i>y</i> = 12 are (4, 0), (2, 3) and (0, 6); the last fails <i>x</i> + 2<i>y</i> ≤ 8. Maximum 12, attained at <b>(4, 0) and (2, 3)</b>, a tie on the lattice."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Dropping only part of a term when simplifying a domination inequality.</b> From 2<i>p</i> + 4<i>q</i> ≤ 6<i>p</i> the correct move is to subtract 2<i>p</i> from both sides, giving 4<i>q</i> ≤ 4<i>p</i> and so <i>q</i> ≤ <i>p</i>. Leaving 6<i>p</i> on the right gives <i>p</i> ≥ 2<i>q</i>/3, a wider and wrong interval. The slope check catches it in ten seconds.",
            "<b>Forgetting to reverse every inequality for a minimum.</b> The domination conditions for a minimum are all ≤, not ≥. Half-reversing them is the fastest way to an interval that contains the wrong ratios.",
            "<b>Answering with a single ratio when an interval was asked for.</b> “Maximum at <i>V</i>” gives an interval of ratios; “maximum at <i>V</i> <b>and</b> at <i>W</i>” gives the single ratio at its endpoint. Read which of the two the question wants.",
            "<b>Rounding a fractional optimum and stopping.</b> Rounding can land outside the region, and even when it lands inside it can be worth less than a plan several steps away. Scan candidate values of <i>Z</i> instead.",
            "<b>Searching only near the fractional vertex.</b> In the worked example the integer optimum (4, 1) is not any rounding of (3.5, 2). The scan is global by construction, and that is the whole point of it."
          ]
        },
        {
          "t": "protip",
          "html": "in a parametric question, compute the negatives of the edge slopes <b>first</b>. they are the only ratios at which the optimal vertex can change, so they hand you the answer's endpoints before you write a single domination inequality, and then the algebra is just a confirmation. and for an integer question, never round: take the largest integer below the continuous optimum and start solving <i>ax</i> + <i>by</i> = <i>c</i> over small whole numbers."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "max at V<sub>k</sub> ⟺ Z(V<sub>k</sub>) ≥ Z(V<sub>j</sub>) for every j",
              "note": "each comparison is one linear inequality in p and q"
            },
            {
              "f": "for a minimum, reverse every inequality",
              "note": "all ≤, and simplify each one fully"
            },
            {
              "f": "objective line slope = −p/q",
              "note": "critical ratios are the negatives of the edge slopes"
            },
            {
              "f": "tie on edge AB ⟺ p/q = −(slope of AB)",
              "note": "the endpoints of the interval you are asked for"
            },
            {
              "f": "Z<sub>int</sub> ≤ Z<sub>max</sub>, the ceiling principle",
              "note": "every lattice point is a feasible point"
            },
            {
              "f": "scan candidate Z downward from the continuous optimum",
              "note": "upward for a minimisation; stop at the first feasible hit"
            },
            {
              "f": "rounding the vertex is not a method",
              "note": "it can be infeasible, or feasible and not optimal"
            }
          ],
          "aids": [
            "“edge slopes first, algebra second” in every parametric question",
            "“the ratio picks the corner” : small p/q favours the tall corner",
            "“scan the value, never round the point”"
          ]
        }
      ]
    }
  ]
};

export default ch12LinearProgramming;
