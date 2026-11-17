/**
 * KEY POINTS for Mathematics Class 12, Chapter 12 (Linear Programming).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–03 each have five Remember points and one of each other kind;
 * Additional topics A–E have two Remember points and one of each other kind:
 * 49 points in all. The chapter has no past-paper analysis. Memory lines are
 * a fifth, short section of their own, read rather than tested: the first
 * two of each topic.
 *
 * `topic`: Topics 01–03 are 0–2 (the chapter's Subtopics 01–03, the Complete
 * Master Reference counted with Topic 03); Additional topics A–E are 3–7
 * (Addenda A–E). No point refers to another topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio; the addenda print "Page n of 14" beside it) is
 * above each point. Remember: the topic's key definitions, theorems and its
 * Cheat sheet. Common mistakes: its Common pitfalls and its MCQ traps (A–E,
 * which print neither: the slips their worked examples and practice answers
 * warn about). Exam shortcuts: its Pro-Tips, Speed Traps and worked examples.
 * `say`: the book's own memory aids, word for word without their quotation
 * marks or the gloss after them, with a full stop; where the quoted part is
 * only a name ("Origin test", "NOC-N"), the line is the whole aid, name and
 * gloss: Topic 01 prints four, Topic 02 three and Topic 03 three, all used,
 * the first two of each topic as its memory lines and the rest on later
 * `say`s, which are not shown as memory lines: ten in all, six of them memory
 * lines. A–E print no aids, so each has two of the book's own one-line
 * sentences (A: "No feasible point beats the best vertex." and "It is the
 * existence check the proof requires.", cut and capitalised; B: "“Max at
 * vertex V” is a handful of linear inequalities in the coefficients." and
 * "Listing the edges’ slopes orders all possible behaviours.", both cut and
 * capitalised; C: "Infeasibility claims need a certificate; feasibility
 * claims need only one witness.", capitalised, and "A failed proof proves
 * nothing.", capitalised; D: "Always sanity-check with a second
 * decomposition." and "Convexity guarantees a clean cycle."; E: "Stop at the
 * first feasible hit: that is the integer optimum." and "The reflex, round
 * the optimum, is demonstrably wrong.", cut and capitalised): ten more, all
 * memory lines.
 *
 * Where the book's wording could be read too widely, the point states the
 * exact version: the corner-point theorem holds when an optimum exists, and
 * a bounded region guarantees both optima only when it is non-empty; the
 * slope criterion for a tie is stated for an edge on the side where the
 * optimum is sought. The Exam relevance claims, the CBSE, CUET, JEE, NCERT
 * and syllabus remarks and the difficulty tags are left out.
 *
 * Markup is the chapter's own: <i> for every variable and constant letter,
 * Z = ax + by with ax and by each in one italic, |…| with a word joiner,
 * − (U+2212) for minus, ₹ for rupees. Every fraction is stacked, <frac><num>…</num><den>…</den></frac>, and never a fraction
 * inside a fraction; no em dashes; and always a space after "<", so it is
 * never read as a tag.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (t: string, b: string) => `<frac><num>${t}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const NB = '\u00a0';
const WJ = '\u2060';
const bar = (s: string) => `|${WJ}${s}|`;
const rel = (l: string, op: string, r: string) => `${l}${NB}${op}${NB}${r}`;
const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;

const k = I('k');
const m = I('m');
const p = I('p');
const q = I('q');
const s = I('s');
const t = I('t');
const u = I('u');
const v = I('v');
const x = I('x');
const y = I('y');
const A = I('A');
const B = I('B');
const C = I('C');
const M = I('M');
const O = I('O');
const P = I('P');
const Q = I('Q');
const R = I('R');
const V = I('V');
const Z = I('Z');
const la = I('λ');
const AX = I('ax');
const BY = I('by');
const PX = I('px');
const QY = I('qy');
const NONNEG = `${x},${NB}${rel(y, '≥', '0')}`;
const Zs = `${Z}<sup>∗</sup>`;
const Ms = `${M}<sup>∗</sup>`;
const Zint = sb(Z, 'int');
const Vk = sb(V, I('k'));
const Vj = sb(V, I('j'));

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Formulation & Graphical Solution ──
  // pp. 766, 775
  {
    topic: 0,
    kind: 'remember',
    q: 'Where does an optimal value of the objective sit?',
    a: `At a corner point (vertex) of the feasible region, whenever ${Z} has an optimal value: the sliding line ${AX} + ${BY} = ${k} leaves the region last at a vertex, or along an edge whose ends are vertices`,
    why: 'So only the corners are worth evaluating.',
    say: 'CORNERS, not centres.',
  },
  // pp. 766, 774–775
  {
    topic: 0,
    kind: 'remember',
    q: 'When are a maximum and a minimum guaranteed?',
    a: 'When the feasible region is bounded and non-empty: both exist, each at a corner. On an unbounded region either may or may not exist, and if one does, it is at a corner',
    why: `The polygon (0, 0), (4, 0), (2, 4), (0, 5) and ${Z} = 5${x} + 3${y}: 0, 20, 22, 15, so the maximum is 22 at (2, 4), the corner off the axes.`,
    say: null,
  },
  // pp. 766–767, 771, 775–776
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the corner-point method?',
    a: `Draw the region, list every vertex, evaluate ${Z} at each. Bounded: the largest is the maximum ${M}, the smallest the minimum. Unbounded: ${M} is the maximum only if ${AX} + ${BY} > ${M} has no point in the region; the minimum ${m} only if ${AX} + ${BY} < ${m} has none`,
    why: `${Z} = 5${x} + 4${y} with ${x} + ${y} ≥ 6, 2${x} + ${y} ≥ 8: corners give 32, 26, 30, and 5${x} + 4${y} < 26 misses the region, so ₹26 at (2, 4).`,
    say: 'Unbounded? Verify or vanish.',
  },
  // pp. 765, 767, 775–776
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the feasible region, and which side of a line do you shade?',
    a: `The region common to all the constraints, non-negativity included; its points are the feasible solutions. Test (0, 0): if it satisfies the inequality, shade its side, if not, the other (another test point if the line passes through the origin)`,
    why: 'Points outside the region are infeasible; an optimal solution is a feasible point giving the optimum.',
    say: 'Origin test: if (0, 0) fits, shade its side.',
  },
  // pp. 765, 769, 775
  {
    topic: 0,
    kind: 'remember',
    q: 'Two corners give the same optimum. How many optimal solutions?',
    a: 'Infinitely many: every point of the segment joining them, since the feasible region is convex and the objective line is parallel to that edge',
    why: `Corners (0, 4), (3, 3), (6, 0) and ${Z} = 2${x} + 2${y}: 8, 12, 12, so the whole segment from (3, 3) to (6, 0).`,
    say: null,
  },
  // pp. 765–766
  {
    topic: 0,
    kind: 'mixup',
    q: 'A bounded and an unbounded feasible region?',
    a: 'Bounded: it can be enclosed inside a circle. Unbounded: it extends to infinity in some direction',
    why: 'Two “≥” constraints with non-negativity typically open the region upward and to the right.',
    say: null,
  },
  // pp. 775–776
  {
    topic: 0,
    kind: 'mistake',
    q: '“At most 300” and “at least 6 units”: which signs?',
    a: '“At most 300” is ≤ 300; “at least 6” is ≥ 6. One mistranslated word changes the whole answer',
    why: 'Underline those words before you formulate.',
    say: 'At most = ≤, At least = ≥.',
  },
  // pp. 771, 775
  {
    topic: 0,
    kind: 'shortcut',
    q: `Corners (0, 4), (2, 3), (5, 0) and ${Z} = ${PX} + ${QY}, ${p},${NB}${rel(q, '>', '0')}. When is the maximum at both (2, 3) and (5, 0)?`,
    a: `${p} = ${q}: equal values, 2${p} + 3${q} = 5${p}`,
    why: `The objective line, slope −${fr(p, q)}, must be parallel to that edge, of slope −1.`,
    say: null,
  },

  // ── Topic 02 · Mathematical Formulation & LPP Applications ──
  // pp. 779, 786
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the steps of formulating an LPP?',
    a: `Name the decision variables with units; write the objective, maximise or minimise; translate each restriction, clause by clause; add ${NONNEG}; state the complete model`,
    why: 'If a quantity cannot be written in your two variables, you chose them badly.',
    say: 'NOC-N: Name variables, Objective, Constraints, Non-negativity.',
  },
  // pp. 778, 786
  {
    topic: 1,
    kind: 'remember',
    q: 'Which words give ≤, ≥ and =?',
    a: '“At most”, “no more than”, “cannot exceed”, “available”, “within”: ≤. “At least”, “minimum of”, “no less than”, “requires”: ≥. “Exactly”, “all of it is used”: =',
    why: '“A factory must use all 240 litres of dye” is an equality, not ≤.',
    say: 'Most ≤, Least ≥.',
  },
  // pp. 778, 786
  {
    topic: 1,
    kind: 'remember',
    q: 'How do the two tricky phrasings translate?',
    a: `“${B} cannot exceed ${A} by more than ${k}”: −${x} + ${y} ≤ ${k}, not ${y} ≤ ${k}. “${A} is at least twice ${B}”: ${x} ≥ 2${y}. Here ${x} = ${A}, ${y} = ${B}`,
    why: '“Twice” multiplies the smaller quantity.',
    say: null,
  },
  // pp. 779, 786
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the four families of LPP?',
    a: 'Product-mix: maximise profit, resources ≤. Diet or blending: minimise cost, requirements ≥, often an unbounded region. Transportation or allocation: minimise cost, supply ≤ and demand ≥. Scheduling: maximise output, time ≤ and targets ≥',
    why: 'The goal word usually names the family: profit or output, maximise; cost or requirement, minimise.',
    say: 'Min wants More.',
  },
  // p. 783
  {
    topic: 1,
    kind: 'remember',
    q: 'Wheat and mustard on 12 hectares: labour 2 and 1 per hectare (18 available), water 1 and 3 (24 available), profit ₹5000 and ₹4000. Best split?',
    a: '6 hectares each, ₹54,000: at (6, 6) land, labour and water are all used up, three boundary lines through one vertex',
    why: 'The winning corner is where the binding constraints meet, so check every corner.',
    say: null,
  },
  // p. 785
  {
    topic: 1,
    kind: 'mixup',
    q: `“Product ${B} should be at most one-third of product ${A}”, with ${x} = ${A}, ${y} = ${B}: ${y} ≤ ${fr(x, '3')} or ${y} ≥ ${fr(x, '3')}?`,
    a: `${y} ≤ ${fr(x, '3')}, that is 3${y} ≤ ${x}`,
    why: `3${y} ≥ ${x} reads “at most” as “at least”; ${x} ≤ ${fr(y, '3')} swaps the products.`,
    say: null,
  },
  // pp. 780, 782, 786
  {
    topic: 1,
    kind: 'mistake',
    q: `“Sketchbook cartons cannot exceed notebook cartons by more than 20”: a remark to skip?`,
    a: `No: it is a full constraint, −${x} + ${y} ≤ 20. Work clause by clause so none escapes`,
    why: `With ${x} + 2${y} ≤ 100, ${x} + ${y} ≤ 70 and ${Z} = 60${x} + 140${y}, the optimum (20, 40), ₹6800, lies on exactly that line.`,
    say: null,
  },
  // p. 786
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A ten-second check of a formulated model?',
    a: 'Max or min matches the goal word; one constraint per limiting sentence; non-negativity present; cost and “at least” problems carry ≥, profit and “at most” problems carry ≤',
    why: 'If all four pass, the model is almost certainly right.',
    say: null,
  },

  // ── Topic 03 · Special Cases of LPP Solutions ──
  // pp. 789, 796, 798
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the four outcomes of an LPP?',
    a: 'A unique optimum; multiple optima (infinitely many); an unbounded solution (no finite optimum); no feasible solution (an empty region)',
    why: 'A redundant constraint changes neither the region nor the answer.',
    say: null,
  },
  // pp. 789–790, 796
  {
    topic: 2,
    kind: 'remember',
    q: `${x} ≥ 6, ${y} ≥ 6, ${x} + ${y} ≤ 10. The optimum?`,
    a: `None: the first two force ${x} + ${y} ≥ 12, so the region is empty and there is no feasible solution`,
    why: 'Do not force corner points; state that there is no feasible solution.',
    say: 'No region, no answer.',
  },
  // pp. 789–790, 792, 796
  {
    topic: 2,
    kind: 'remember',
    q: `How do you show that ${Z} has no maximum?`,
    a: `The region is unbounded and ${AX} + ${BY} > ${M} still meets it, ${M} being the largest corner value: a feasible point beats every corner`,
    why: `${Z} = 5${x} + 4${y}, ${x} + ${y} ≥ 8: corners give 40 and 32, but (20, 0) gives 100. The minimum 32 at (0, 8) still exists.`,
    say: null,
  },
  // pp. 789–790, 794, 796
  {
    topic: 2,
    kind: 'remember',
    q: 'When is a constraint redundant?',
    a: 'When removing it leaves the feasible region unchanged: the others already keep every point on its allowed side, so its line never forms an edge',
    why: `${x} + ${y} ≤ 10 with ${x} ≤ 12 in the first quadrant: ${x} ≤ 12 can never bind.`,
    say: null,
  },
  // pp. 796, 798
  {
    topic: 2,
    kind: 'remember',
    q: 'Which outcomes can a bounded region give?',
    a: 'A non-empty bounded region always has a finite maximum and minimum, so never an unbounded solution; multiple optima can still occur',
    why: 'Only an unbounded region needs the verification test.',
    say: null,
  },
  // pp. 788, 795–796
  {
    topic: 2,
    kind: 'mixup',
    q: '“Unbounded region” and “unbounded solution”: the same?',
    a: 'No: the first is about the region’s shape, the second means the objective has no finite optimum. An unbounded region can still give a finite minimum',
    why: 'Most cost problems have unbounded regions and a perfectly good minimum.',
    say: 'Region unbounded ≠ solution unbounded.',
  },
  // pp. 792, 795–796
  {
    topic: 2,
    kind: 'mistake',
    q: `Maximise 2${x} + 2${y} with ${x} + ${y} ≤ 6, ${x} ≤ 4, ${y} ≤ 4: (4, 2) and (2, 4) both give 12. Two optimal solutions?`,
    a: `Infinitely many: every point of the segment joining them, on the edge ${x} + ${y} = 6`,
    why: `The objective line 2${x} + 2${y} = 12 is parallel to that edge.`,
    say: 'Tie = whole edge.',
  },
  // p. 796
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Before grinding through corners, what do you classify?',
    a: 'Is there a common region? If not, infeasible. Is it bounded? If so, both optima exist. Only an unbounded region needs the verification test',
    why: 'A five-second triage that prevents the special-case errors.',
    say: null,
  },

  // ── Additional A · Why the Corner-Point Method Works ──
  // pp. 799–800
  {
    topic: 3,
    kind: 'remember',
    q: 'Why is no feasible point better than the best vertex of a bounded region?',
    a: `Every point of a convex polygon is a convex combination of its vertices, and ${Z} of a combination is the same combination of the ${Z}-values, so it cannot exceed the largest of them`,
    why: `${Z}(${la}${Q} + (1 − ${la})${R}) = ${la}${Z}(${Q}) + (1 − ${la})${Z}(${R}), for 0 ≤ ${la} ≤ 1.`,
    say: 'No feasible point beats the best vertex.',
  },
  // p. 800
  {
    topic: 3,
    kind: 'remember',
    q: 'Why does a tie at two vertices give the whole edge?',
    a: `Any point of the segment ${I('AB')} is ${la}${A} + (1 − ${la})${B}, so ${Z} there is ${la}${Ms} + (1 − ${la})${Ms} = ${Ms}, and the segment is feasible by convexity`,
    why: 'The objective line through both vertices contains the whole segment.',
    say: null,
  },
  // p. 799
  {
    topic: 3,
    kind: 'mixup',
    q: 'A convex combination of points: any combination of them?',
    a: 'No: the weights are all ≥ 0 and add to 1, which puts the point inside the polygon the points span',
    why: `${P} = (1, 1) is ${fr('1', '4')}(4, 0) + ${fr('1', '3')}(0, 3) + ${fr('5', '12')}(0, 0).`,
    say: null,
  },
  // pp. 800–801
  {
    topic: 3,
    kind: 'mistake',
    q: 'Does the same argument let you check only the corners of an unbounded region?',
    a: 'No: such a region is not a polygon, and a far feasible point is not a convex combination of the vertices. The largest corner value need not be a maximum',
    why: `${Z} = 5${x} + 4${y} on ${x} + ${y} ≥ 8: the corners give at most 40, but (20, 0) gives 100.`,
    say: 'It is the existence check the proof requires.',
  },
  // p. 801
  {
    topic: 3,
    kind: 'shortcut',
    q: `${Z} = ${x} + 2${y} on the triangle ${O}(0, 0), ${A}(4, 0), ${B}(0, 3). ${Z} at (1, 1), from the vertex values?`,
    a: `3: (1, 1) = ${fr('1', '4')}${A} + ${fr('1', '3')}${B} + ${fr('5', '12')}${O}, so ${fr('1', '4')}(4) + ${fr('1', '3')}(6) + 0`,
    why: 'Direct substitution agrees: 1 + 2 = 3.',
    say: null,
  },

  // ── Additional B · Parametric Objectives ──
  // pp. 802–804
  {
    topic: 4,
    kind: 'remember',
    q: `When is the maximum of ${Z} = ${PX} + ${QY} at a chosen vertex ${Vk}?`,
    a: `Exactly when ${Z}(${Vk}) ≥ ${Z}(${Vj}) for every other vertex: linear inequalities in ${p} and ${q}, strict for a unique maximum, one an equality for a tie`,
    why: `Corners (0, 0), (5, 0), (3, 3), (0, 4) and ${Z} = 3${x} + ${k}${y}: the maximum is at (3, 3) for 2 ≤ ${k} ≤ 9.`,
    say: `“Max at vertex ${V}” is a handful of linear inequalities in the coefficients.`,
  },
  // pp. 802–803
  {
    topic: 4,
    kind: 'remember',
    q: 'When do two corners tie, by slopes?',
    a: `When the objective line is parallel to the edge joining them: −${fr(p, q)} = ${m}, the edge’s slope, for an edge on the side where the optimum is sought. The optimal vertex changes as ${fr(p, q)} passes these ratios`,
    why: `${O}, ${A}(4, 0), ${B}(2, 3), ${C}(0, 4): the edges give ${fr('1', '2')} and ${fr('3', '2')}, so the maximum walks ${C}, ${B}, ${A} as ${fr(p, q)} grows.`,
    say: 'Listing the edges’ slopes orders all possible behaviours.',
  },
  // p. 804
  {
    topic: 4,
    kind: 'mixup',
    q: `Maximum at (3, 3) for 2 ≤ ${k} ≤ 9, or for 2 < ${k} < 9?`,
    a: `2 ≤ ${k} ≤ 9 if ties are allowed; a unique maximum at (3, 3) needs 2 < ${k} < 9`,
    why: `At ${k} = 2 it ties with (5, 0) at 15; at ${k} = 9, with (0, 4) at 36.`,
    say: null,
  },
  // p. 804
  {
    topic: 4,
    kind: 'mistake',
    q: `A minimum at a chosen vertex: the same inequalities?`,
    a: `No: reversed, ${Z}(${Vk}) ≤ ${Z}(${Vj}) for every other vertex`,
    why: `Corners (0, 8), (2, 4), (6, 0): the minimum is at (2, 4) when ${q} ≤ ${p} ≤ 2${q}.`,
    say: null,
  },
  // pp. 803–804
  {
    topic: 4,
    kind: 'shortcut',
    q: `${p},${NB}${rel(q, '>', '0')} and the origin is a corner. Must it be compared?`,
    a: `No: ${Z}(${O}) = 0 is always the smallest, so the origin is never the maximum`,
    why: `Corners (0, 0), (4, 0), (2, 4), (0, 5): the maximum is at (2, 4) when ${fr(q, '2')} ≤ ${p} ≤ 2${q}.`,
    say: null,
  },

  // ── Additional C · Infeasibility and Redundancy Without a Graph ──
  // pp. 805–806
  {
    topic: 5,
    kind: 'remember',
    q: 'How do you prove a system has no feasible solution?',
    a: `Combine inequalities with non-negative multipliers (${s}${u} + ${t}${u}′ ≤ ${s}${v} + ${t}${v}′ when ${u} ≤ ${v}, ${u}′ ≤ ${v}′, ${s},${NB}${rel(t, '≥', '0')}) until one expression is ≤ some number and ≥ a larger one`,
    why: `2${x} + ${y} ≤ 8 and ${x} + 2${y} ≤ 8 add to ${x} + ${y} ≤ ${fr('16', '3')}, against ${x} + ${y} ≥ 7.`,
    say: 'Infeasibility claims need a certificate; feasibility claims need only one witness.',
  },
  // pp. 805–806
  {
    topic: 5,
    kind: 'remember',
    q: 'How do you prove a constraint is redundant?',
    a: 'Derive it from the others by the same positive combinations; then removing it changes nothing',
    why: `2${x} + ${y} ≤ 20 given ${x} + ${y} ≤ 12 and ${x} ≤ 6: 2${x} + ${y} = (${x} + ${y}) + ${x} ≤ 18 < 20.`,
    say: null,
  },
  // p. 806
  {
    topic: 5,
    kind: 'mixup',
    q: 'The infeasibility proof does not go through. So the system is feasible?',
    a: 'Not yet shown: a failed proof proves nothing. Feasibility needs one point that satisfies everything',
    why: `${x} + 2${y} ≤ 4, ${x} + ${y} ≥ 4, ${NONNEG}: (4, 0) satisfies all, a single feasible point.`,
    say: 'A failed proof proves nothing.',
  },
  // p. 805
  {
    topic: 5,
    kind: 'mistake',
    q: 'May the multipliers be negative?',
    a: 'No: only non-negative multipliers keep a “≤” chain a “≤” chain; a negative one reverses it',
    why: 'Contradictions come from pushing “≤” information against “≥” information.',
    say: null,
  },
  // p. 806
  {
    topic: 5,
    kind: 'shortcut',
    q: `${x} + ${y} ≤ 4, ${x} + 2${y} ≥ 12, ${NONNEG}: plain addition fails. Now what?`,
    a: `Bound a piece alone, then rebuild: ${x} ≥ 0 gives ${y} ≤ ${x} + ${y} ≤ 4, so ${x} + 2${y} = (${x} + ${y}) + ${y} ≤ 8 < 12`,
    why: 'Aim the combinations at whatever the lower bounds talk about.',
    say: null,
  },

  // ── Additional D · Measuring the Region ──
  // pp. 807–808
  {
    topic: 6,
    kind: 'remember',
    q: 'How do you find every vertex of a region with four or more boundary lines?',
    a: 'Intersect each pair of boundary lines; keep a point only if it satisfies every constraint, and drop repeats where three lines meet',
    why: `${x} + 2${y} ≤ 8, 3${x} + 2${y} ≤ 12, ${NONNEG}: the vertices (0, 0), (4, 0), (2, 3), (0, 4).`,
    say: null,
  },
  // pp. 808–809
  {
    topic: 6,
    kind: 'remember',
    q: `What is the area of the triangle ${O}, (${sb(u, '1')}, ${sb(u, '2')}), (${sb(I('w'), '1')}, ${sb(I('w'), '2')})?`,
    a: `${fr('1', '2')}${bar(`${sb(u, '1')}${sb(I('w'), '2')} − ${sb(u, '2')}${sb(I('w'), '1')}`)}; fan a polygon into triangles from one vertex, or use the shoelace sum over the vertices in order`,
    why: `(0, 0), (4, 0), (2, 3), (0, 4): 6 + 4 = 10.`,
    say: 'Always sanity-check with a second decomposition.',
  },
  // pp. 807–808
  {
    topic: 6,
    kind: 'mixup',
    q: 'Does the shoelace sum take the vertices in any order?',
    a: 'No: in order around the boundary, the indices cyclic. Sort by angle about an interior point, or walk edge to edge',
    why: 'The region is convex, so the order is a single loop.',
    say: 'Convexity guarantees a clean cycle.',
  },
  // pp. 808–809
  {
    topic: 6,
    kind: 'mistake',
    q: `Lattice points of ${x} + 2${y} ≤ 8, 3${x} + 2${y} ≤ 12, ${NONNEG} on the strip ${y} = 1: 7?`,
    a: `4: the caps are ${x} ≤ 6 and ${x} ≤ ${fr('10', '3')}, and the tighter one binds, so ${x} = 0, 1, 2, 3`,
    why: 'Over the strips 0 to 4 the counts are 5, 4, 3, 3, 1: 16 in all.',
    say: null,
  },
  // p. 809
  {
    topic: 6,
    kind: 'shortcut',
    q: 'Lattice points on the segment between two integer points?',
    a: `gcd(${bar(`Δ${x}`)}, ${bar(`Δ${y}`)}) + 1`,
    why: '(4, 0) to (2, 3): gcd(2, 3) + 1 = 2, the endpoints only.',
    say: null,
  },

  // ── Additional E · Whole-Number Answers ──
  // p. 810
  {
    topic: 7,
    kind: 'remember',
    q: 'How does the best whole-number value compare with the continuous optimum?',
    a: `For a maximum, ${rel(Zint, '≤', Zs)}; for a minimum, ${rel(Zint, '≥', Zs)}: every lattice point is a feasible point of the continuous problem`,
    why: 'This bound turns the search into a short, directed scan.',
    say: null,
  },
  // pp. 810–811
  {
    topic: 7,
    kind: 'remember',
    q: 'How do you find the best whole-number plan?',
    a: `With whole-number coefficients, scan whole values of ${Z} down from the largest integer ≤ ${Zs}; for each, list the lattice points with that value and test them. The first value met at a feasible point is the optimum`,
    why: `${Z} = 5${x} + 4${y}, 2${x} + 3${y} ≤ 13, 2${x} + ${y} ≤ 9: ${Zs} = 25.5; 25 fails at (5, 0) and (1, 5); 24 holds at (4, 1).`,
    say: 'Stop at the first feasible hit: that is the integer optimum.',
  },
  // p. 811
  {
    topic: 7,
    kind: 'mixup',
    q: 'Whole-number minimum: scan which way?',
    a: `Upward, from the smallest integer ≥ ${Zs}`,
    why: `${Z} = 2${x} + 3${y}, ${x} + ${y} ≥ 4.5, ${x} + 3${y} ≥ 9: ${Zs} = 11.25, and 12 is met at (3, 2).`,
    say: null,
  },
  // pp. 810–811
  {
    topic: 7,
    kind: 'mistake',
    q: `The continuous optimum is (${fr('7', '2')}, 2). Round it?`,
    a: `No: (4, 2) breaks 2${x} + 3${y} ≤ 13, and (3, 2) earns only ₹23. The true optimum is (4, 1), ₹24, which is no rounding of the vertex`,
    why: 'The scan works through objective values, not neighbouring points.',
    say: 'The reflex, round the optimum, is demonstrably wrong.',
  },
  // p. 812
  {
    topic: 7,
    kind: 'shortcut',
    q: `${Z} = 3${x} + 2${y} over the lattice points of 2${x} + 3${y} ≤ 13, 2${x} + ${y} ≤ 9, ${NONNEG}. Maximum?`,
    a: `14, at (4, 1): ${Zs} = 14.5, so 14 is the first candidate, and (4, 1) is feasible`,
    why: `No point can give 15: 15 > 14.5 = ${Zs}.`,
    say: null,
  },
];
