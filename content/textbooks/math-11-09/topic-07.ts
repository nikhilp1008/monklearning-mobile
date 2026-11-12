import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Topic 07: the supplement's Subtopic 07 "Triangle Centres in
 * Coordinates" (pp. 846–860, ending with its memory aids at the top of p. 860)
 * of the Class 11 Mathematics Master Reference (October 2026 edition), word for
 * word. The supplement's heading on p. 846 is not copied; the "Addendum to
 * Chapter 9" text and Pattern 1 on p. 860 are Additional topic A's. The Exam
 * Relevance box is the "Exam relevance" part; Sections 1–8 are the next parts,
 * titled from the section's own name in sentence case.
 * Figures: 9.9 (caption p. 847, drawn p. 848) at the end of the Concept
 * intuition's prose, where its caption is printed. No unnumbered drawings.
 * Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const sb = (b: string, s: string) => `<i>${b}</i><sub>${s}</sub>`;
const vec = (s: string) => `<i>${s}⃗</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const a = I('a');
const b = I('b');
const c = I('c');
const p = I('p');
const q = I('q');
const r = I('r');
const s = I('s');
const x = I('x');
const y = I('y');
const A = I('A');
const B = I('B');
const C = I('C');
const D = I('D');
const G = I('G');
const H = I('H');
const In = I('I');
const O = I('O');
const P = I('P');
const R = I('R');
const x1 = sb('x', '1');
const x2 = sb('x', '2');
const x3 = sb('x', '3');
const y1 = sb('y', '1');
const y2 = sb('y', '2');
const y3 = sb('y', '3');
const IA = sb('I', 'A');
const IB = sb('I', 'B');
const IC = sb('I', 'C');
const rA = sb('r', 'A');
const rB = sb('r', 'B');
const rC = sb('r', 'C');
const Ix = `${In}<sub>${x}</sub>`;
const Iy = `${In}<sub>${y}</sub>`;
const Px = `${P}<sub>${x}</sub>`;
const Py = `${P}<sub>${y}</sub>`;
const bA = '<b>A</b>';
const bB = '<b>B</b>';
const bC = '<b>C</b>';
const bP = '<b>P</b>';
const bG = '<b>G</b>';
const bH = '<b>H</b>';
const sq = (t: string) => `${t}<sup>2</sup>`;
const OA2 = sq('<i>OA</i>');
const OB2 = sq('<i>OB</i>');
const OC2 = sq('<i>OC</i>');
const R2 = sq(R);
const x2s = sq(x);
const y2s = sq(y);
const DEL = 'Δ';
const ABC = `<i>a</i> + <i>b</i> + ${c}`;
const pt = (n: string, u: string, v: string) => `${I(n)}(${u},${NB}${v})`;
const A1 = pt('A', x1, y1);
const B2 = pt('B', x2, y2);
const C3 = pt('C', x3, y3);
const ratio = (u: string, v: string) => `${u}${NB}∶${NB}${v}`;
const SIDES = `${a} = <i>BC</i>, ${b} = <i>CA</i>, ${c} = <i>AB</i>`;
const CEN_X = fr(`${x1} + ${x2} + ${x3}`, '3');
const CEN_Y = fr(`${y1} + ${y2} + ${y3}`, '3');
const CENTROID = `${G} = (${CEN_X}, ${CEN_Y})`;
const INC_X = fr(`<i>ax</i><sub>1</sub> + <i>bx</i><sub>2</sub> + <i>cx</i><sub>3</sub>`, ABC);
const INC_Y = fr(`<i>ay</i><sub>1</sub> + <i>by</i><sub>2</sub> + <i>cy</i><sub>3</sub>`, ABC);
const INCENTRE = `${In} = (${INC_X}, ${INC_Y})`;
const INC_V = fr(`<i>aA</i> + <i>bB</i> + <i>cC</i>`, ABC);
const EXA_V = fr(`−<i>aA</i> + <i>bB</i> + <i>cC</i>`, `−${a} + ${b} + ${c}`);
const EXB_V = fr(`<i>aA</i> − <i>bB</i> + <i>cC</i>`, `${a} − ${b} + ${c}`);
const EXC_V = fr(`<i>aA</i> + <i>bB</i> − <i>cC</i>`, `${a} + ${b} − ${c}`);
const EULER = `${H} = 3${G} − 2${O}`;
const HALF = fr('1', '2');
const THIRD = fr('1', '3');
const F53 = fr('5', '3');
const R_IN = `${r} = ${fr(DEL, s)}`;
const R_CIRC = `${R} = ${fr('<i>abc</i>', `4${DEL}`)}`;
const OG_GH = `<i>OG</i>${NB}∶${NB}<i>GH</i> = ${ratio('1', '2')}`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 07 · pp. 846–860 ────────────────
  {
    n: '07',
    title: 'Triangle Centres in Coordinates',
    kalam: 'The single most important structural fact in this topic is that three of the four centres are collinear.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is a verbatim, named block in both JEE syllabi: JEE Main lists the coordinates of the centroid, orthocentre and circumcentre of a triangle, and JEE Advanced adds the incentre on top. CBSE Class 11 asks the centroid outright and sets 3–4 mark problems on “find the circumcentre” by the equidistance method and “find the third vertex given the centroid” ${ESTIMATE}. JEE Main reliably carries one question that is a triangle centre in disguise: an orthocentre, or a missing vertex recovered from two known centres ${ESTIMATE}. JEE Advanced pushes into the incentre/excentre weighting and the Euler line relation, where three centres collapse into one vector equation. Nothing here is new machinery: you already own the section formula (Topic 00), perpendicularity (Topic 01), the point-to-line distance (Topic 03), concurrency (Topic 04) and the angle bisectors (Topic 05). This topic is where all five finally get pointed at the same triangle.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'A village panchayat owns a triangular plot and has to decide where to sink the borewell. Three respected elders each argue for a different spot, and, this is the point, <b>all three are right, because each of them means something different by “the centre”.</b>',
      },
      {
        t: 'p',
        html: `The first elder says: put it where the plot balances. Cut the triangle out of plywood, rest it on a pin, and there is exactly one point where it will not topple. That is the <b>centroid</b> ${G}: the meeting point of the three medians, and the average of the three corners. You already met it in Topic 00; this topic assumes that treatment and only recaps it (Theorem 1 below proves that the three medians meet).`,
      },
      {
        t: 'p',
        html: `The second elder says: put it where it is equally far from all three boundary walls, so the same circular apron of paving serves every fence. That point is the <b>incentre</b> ${In}: the centre of the largest circle that fits inside the plot. “Equally far from two lines” should ring a bell immediately: that is exactly the bisector condition of Topic 05. A point equidistant from sides <i>AB</i> and <i>AC</i> sits on the internal bisector of angle ${A}; a point equidistant from all three sides sits on all three internal bisectors at once.`,
      },
      {
        t: 'p',
        html: `The third elder says: put it where it is equally far from all three corner posts, so a single cable of one length reaches each post. That point is the <b>circumcentre</b> ${O}: the centre of the unique circle through the three vertices. “Equidistant from two points” is the perpendicular bisector, which the chapter has already built as a locus (Topic 00’s practice question 5).`,
      },
      {
        t: 'p',
        html: `Then the youngest member of the panchayat asks a question nobody expected: drop a perpendicular from each corner onto the opposite wall; do those three lines meet? They do, and their meeting point is the <b>orthocentre</b> ${H}. It has no tidy “equally far from” description at all, which is precisely why it is the one students find slippery.`,
      },
      {
        t: 'p',
        html: 'Think about it this way… every one of these four centres is a <b>concurrency statement</b>, and Topic 04 already told you what concurrency costs. Three arbitrary lines in a plane do not meet at a point: you need the determinant to vanish. So each centre is a small miracle that has to be proved, and Topic 04’s Concept intuition part explicitly held out the hook: “show the medians/altitudes meet at a point”. The Theorems, proofs and standard derivations part below finally delivers on that promise for medians, altitudes, perpendicular bisectors and internal bisectors alike.',
      },
      {
        t: 'p',
        html: `<b>The single most important structural fact in this topic is that three of the four centres are collinear.</b> For any triangle that is not equilateral, ${O}, ${G} and ${H} lie on one straight line (the <b>Euler line</b>) and ${G} always sits between the other two, dividing <i>OH</i> in the ratio ${ratio('1', '2')}. That means you never have to compute all three: find any two and the third is arithmetic. The incentre is the odd one out; it is a genuinely different kind of centre and does not sit on the Euler line except in isosceles triangles.`,
      },
      { t: 'fig', id: 'm11-09-fig-9.9' },
      {
        t: 'p',
        html: `<b>Domain of Validity & Edge Cases.</b><br>• All four centres require a genuine triangle. If ${A}, ${B}, ${C} are collinear (area = 0, Topic 00), the “sides” all lie along one line, the perpendicular bisectors are parallel and never meet, and there is no triangle to have centres.<br>• ${G} and ${In} are <b>always inside</b> the triangle. ${O} and ${H} are inside only for an acute triangle; for an obtuse triangle both fall outside.<br>• <b>Right triangle shortcut:</b> if the right angle is at ${C}, then ${H} = ${C} (two of the altitudes are the legs themselves) and ${O} is the midpoint of the hypotenuse <i>AB</i>. Use this on sight: it saves a full minute.<br>• <b>Equilateral degeneracy:</b> all four centres coincide. Since ${O}, ${G} and ${H} are the same point, the Euler line is undefined: do not “find” it.<br>• <b>Isosceles:</b> all four centres lie on the axis of symmetry, so the incentre does happen to sit on the Euler line. That is a coincidence of symmetry, not a general rule.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `Throughout, △<i>ABC</i> has vertices ${A1}, ${B2}, ${C3}, and<br>${SIDES}.`,
      },
      {
        t: 'p',
        html: `• <b>Read that line again and burn it in.</b> ${a}, ${b}, ${c} are the lengths of the sides <b>opposite</b> to ${A}, ${B}, ${C} respectively. ${a} is not the side starting at ${A}. Every incentre and excentre error in the examination hall traces back to this one line.<br>• ${s} = ${fr(ABC, '2')} is the semi-perimeter, and ${DEL} is the area (Topic 00, Theorem 2).`,
      },
      { t: 'p', html: `<b>Centroid</b> ${G}: intersection of the medians (recap; full treatment in Topic 00’s Key formulas and definitions part and its first worked example):` },
      {
        t: 'formula',
        kicker: 'Centroid of △<i>ABC</i>',
        main: `(${CEN_X}, ${CEN_Y})`,
        legend: [`${x1}, ${y1} = the coordinates of ${A}`, `${x2}, ${y2} = the coordinates of ${B}`, `${x3}, ${y3} = the coordinates of ${C}`],
        note: null,
      },
      {
        t: 'p',
        html: `• ${G} divides each median in the ratio ${ratio('2', '1')}, measured from the vertex.<br>• Validity: always defined, always interior.`,
      },
      {
        t: 'formula',
        kicker: `Incentre ${In}: intersection of the three internal angle bisectors`,
        main: INCENTRE,
        legend: [
          `${x1}, ${y1} = the coordinates of ${A}`,
          `${x2}, ${y2} = the coordinates of ${B}`,
          `${x3}, ${y3} = the coordinates of ${C}`,
          `${a} = the length of <i>BC</i> (opposite ${A})`,
          `${b} = the length of <i>CA</i> (opposite ${B})`,
          `${c} = the length of <i>AB</i> (opposite ${C})`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• Weight each vertex by the length of the side <b>opposite</b> it: ${A} gets ${a} = <i>BC</i>, ${B} gets ${b} = <i>CA</i>, ${C} gets ${c} = <i>AB</i>.<br>• The weights are lengths, so they are positive and the denominator ${ABC} never vanishes. ${In} is always interior.<br>• <b>Inradius:</b> ${R_IN}, and ${r} is the perpendicular distance from ${In} to each of the three sides (Topic 03, Theorem 1).`,
      },
      {
        t: 'p',
        html: `<b>Excentres</b> ${IA}, ${IB}, ${IC}: each is the intersection of one internal bisector with the two external bisectors of the other angles. Flip the sign of exactly one weight, in both numerator and denominator:`,
      },
      {
        t: 'table',
        title: null,
        head: ['Centre', `Formula (${x}-coordinate; ${y} identically)`, 'Which circle'],
        rows: [
          [`Incentre ${In}`, INC_X, `incircle, radius ${R_IN}`],
          [`Excentre ${IA}`, fr(`−<i>ax</i><sub>1</sub> + <i>bx</i><sub>2</sub> + <i>cx</i><sub>3</sub>`, `−${a} + ${b} + ${c}`), `escribed opposite ${A}, radius ${rA} = ${fr(DEL, `${s} − ${a}`)}`],
          [`Excentre ${IB}`, fr(`<i>ax</i><sub>1</sub> − <i>bx</i><sub>2</sub> + <i>cx</i><sub>3</sub>`, `${a} − ${b} + ${c}`), `escribed opposite ${B}, radius ${rB} = ${fr(DEL, `${s} − ${b}`)}`],
          [`Excentre ${IC}`, fr(`<i>ax</i><sub>1</sub> + <i>bx</i><sub>2</sub> − <i>cx</i><sub>3</sub>`, `${a} + ${b} − ${c}`), `escribed opposite ${C}, radius ${rC} = ${fr(DEL, `${s} − ${c}`)}`],
        ],
      },
      {
        t: 'p',
        html: `• Validity: the denominators are 2(${s} − ${a}), 2(${s} − ${b}), 2(${s} − ${c}), all strictly positive by the triangle inequality, so all three excentres always exist.<br>• Every excentre lies <b>outside</b> the triangle.`,
      },
      {
        t: 'p',
        html: `<b>Circumcentre</b> ${O}: intersection of the perpendicular bisectors; the point equidistant from the three vertices. There is no compact coordinate formula worth memorising. Characterise it instead by<br>${OA2} = ${OB2} = ${OC2} = ${R2},<br>which gives two linear equations in the unknowns (see Procedure A).<br>• <b>Circumradius:</b> ${R_CIRC}.`,
      },
      {
        t: 'p',
        html: `<b>Orthocentre</b> ${H}: intersection of the altitudes. Again, compute rather than memorise (Procedure B), or get it free from the Euler relation below.`,
      },
      {
        t: 'formula',
        kicker: 'Euler line relation (any non-equilateral triangle)',
        main: `${OG_GH}<br>${EULER} = ${A} + ${B} + ${C} − 2${O}<br>${O} = ${fr(`3${G} − ${H}`, '2')}<br>${G} = ${fr(`${H} + 2${O}`, '3')}`,
        legend: [`${O} = the circumcentre`, `${G} = the centroid`, `${H} = the orthocentre`, `${A}, ${B}, ${C} = the vertices of the triangle`],
        note: null,
      },
      {
        t: 'p',
        html: `• Validity: any triangle. For an equilateral triangle the relation still holds but reduces to ${H} = ${G} = ${O}, and no line is determined.<br>• ${H}, ${G}, ${O} in that order along the line: ${G} is two-thirds of the way from ${H} to ${O}.`,
      },

      { t: 'part', title: 'Theorems, proofs and standard derivations' },
      {
        t: 'p',
        html: `<b>Theorem 1: The three medians are concurrent, at the centroid</b><br><b>Given:</b> △<i>ABC</i> with vertices ${A1}, ${B2}, ${C3}.<br><b>To Prove:</b> the three medians meet at ${G}(${CEN_X}, ${CEN_Y}), which divides each median ${ratio('2', '1')} from the vertex.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Let ${D} be the midpoint of <i>BC</i>, so ${D} = (${fr(`${x2} + ${x3}`, '2')}, ${fr(`${y2} + ${y3}`, '2')}) (midpoint formula, Topic 00). Let ${P} be the point dividing the median <i>AD</i> internally in the ratio ${ratio('2', '1')} from ${A}. By the internal section formula with <i>m</i>${NB}∶${NB}<i>n</i> = ${ratio('2', '1')},<br>${Px} = ${fr(`(${x2} + ${x3}) + 1${NB}·${NB}${x1}`, '2 + 1')}<br><br>= ${CEN_X},<br><br>${Py} = ${CEN_Y}.`,
      },
      {
        t: 'p',
        html: `<b>Reason this finishes the proof:</b> the expression obtained is <b>completely symmetric</b> in the three vertices. Had we started from the median through ${B}, or through ${C}, the identical algebra would have produced the identical point. So one and the same point lies on all three medians, which is precisely concurrency. ■`,
      },
      {
        t: 'p',
        html: '<b>Why this matters:</b> Topic 04 promised “show the medians meet at a point” and this is the promise honoured. Note that no determinant was needed: symmetry did the work that the concurrency determinant would otherwise have to.',
      },
      {
        t: 'p',
        html: `<b>Theorem 2: The internal bisectors are concurrent, at the incentre</b><br><b>Given:</b> △<i>ABC</i> with side lengths ${SIDES}.<br><b>To Prove:</b> the three internal angle bisectors meet at ${In} = ${INC_V} (coordinate-wise).<br><b>Construction:</b> Let the internal bisector from ${A} meet <i>BC</i> at ${D}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b><br><b>Step 1: locate ${D}.</b> By the angle bisector theorem of school geometry, the internal bisector from ${A} divides the opposite side in the ratio of the adjacent sides:<br><i>BD</i>${NB}∶${NB}<i>DC</i> = <i>AB</i>${NB}∶${NB}<i>AC</i> = ${ratio(c, b)}.<br><b>Reason:</b> this is the classical bisector-of-a-triangle ratio; in coordinate language it is exactly the section formula with <i>m</i>${NB}∶${NB}<i>n</i> = ${ratio(c, b)} applied from ${B} to ${C}:<br>${D} = ${fr(`<i>cC</i> + <i>bB</i>`, `${b} + ${c}`)},<br>so (${b} + ${c})${D} = <i>bB</i> + <i>cC</i>.${NB}${NB}(∗)`,
      },
      {
        t: 'p',
        html: `<b>Step 2: locate ${In} on <i>AD</i>.</b> Apply the same bisector theorem inside △<i>ABD</i>, where <i>BI</i> bisects angle ${B} and meets <i>AD</i> at ${In}:<br>${fr('<i>AI</i>', '<i>ID</i>')} = ${fr('<i>BA</i>', '<i>BD</i>')} = ${fr(c, '<i>BD</i>')}.<br><b>Reason:</b> <i>BD</i> is a piece of <i>BC</i> of length<br><i>BD</i> = ${fr(c, `${b} + ${c}`)}${NB}·${NB}${a} = ${fr('<i>ac</i>', `${b} + ${c}`)},<br>from Step 1. Substituting,<br>${fr('<i>AI</i>', '<i>ID</i>')} = ${fr(`${c}(${b} + ${c})`, '<i>ac</i>')} = ${fr(`${b} + ${c}`, a)}.`,
      },
      {
        t: 'p',
        html: `<b>Step 3: apply the section formula to <i>AD</i>.</b> ${In} divides <i>AD</i> internally in the ratio (${b} + ${c})${NB}∶${NB}${a} from ${A}, so<br>${In} = ${fr(`(${b} + ${c})${D} + <i>aA</i>`, `(${b} + ${c}) + ${a}`)}<br><br>=<sup>(∗)</sup> ${INC_V}.`,
      },
      {
        t: 'p',
        html: `<b>Step 4: concurrency.</b> <b>Reason this finishes it:</b> the result is symmetric under simultaneously permuting (${A}, ${B}, ${C}) and (${a}, ${b}, ${c}). Starting from the bisector through ${B} or through ${C} reproduces the same point, so all three internal bisectors pass through it. ■`,
      },
      {
        t: 'p',
        html: `<b>Excentres, same machinery.</b> The external bisector from ${A} divides <i>BC</i> <b>externally</b> in the ratio ${ratio(c, b)} (Topic 00, external section formula). Running Steps 1–3 with that one external division in place of the internal one flips the sign on the weight ${a} and yields<br>${IA} = ${EXA_V},<br>and cyclically for ${IB}, ${IC}. The internal bisector from ${A} together with the external bisectors from ${B} and ${C} are the three lines that are concurrent at ${IA}.`,
      },
      {
        t: 'p',
        html: `<b>Theorem 3: The perpendicular bisectors are concurrent, at the circumcentre</b><br><b>Given:</b> △<i>ABC</i>, non-degenerate.<br><b>To Prove:</b> the perpendicular bisectors of the three sides meet at a single point ${O} with <i>OA</i> = <i>OB</i> = <i>OC</i>.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> The perpendicular bisector of a segment is precisely the locus of points equidistant from its two endpoints (Topic 00, locus method). The perpendicular bisectors of <i>AB</i> and of <i>BC</i> are perpendicular to <i>AB</i> and <i>BC</i> respectively; since <i>AB</i> and <i>BC</i> are not parallel (the triangle is non-degenerate), these two bisectors are not parallel and therefore meet, at some point ${O}.<br>Now read off what ${O} inherits:<br>${O} on perp. bisector of <i>AB</i> ⇒ <i>OA</i> = <i>OB</i>;<br>${O} on perp. bisector of <i>BC</i> ⇒ <i>OB</i> = <i>OC</i>.<br>Hence <i>OA</i> = <i>OC</i>, so ${O} is equidistant from ${A} and ${C} and therefore lies on the perpendicular bisector of <i>CA</i> as well. All three concur at ${O}, and the common value <i>OA</i> = <i>OB</i> = <i>OC</i> is the circumradius ${R}. ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 4: The altitudes are concurrent, and the Euler line</b><br><b>Given:</b> △<i>ABC</i> with circumcentre ${O}.<br><b>To Prove:</b> the three altitudes are concurrent at the point ${H} = ${A} + ${B} + ${C} − 2${O}; and ${O}, ${G}, ${H} are collinear with ${OG_GH}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Shift the origin to the circumcentre: legitimate because translating axes changes no distance and no perpendicularity (Topic 00, translation of origin). With ${O} as origin, write the vertices as position vectors ${bA}, ${bB}, ${bC}, and the defining property of ${O} becomes simply<br>|${bA}| = |${bB}| = |${bC}| = ${R}.<br>Define the candidate point ${bP} = ${bA} + ${bB} + ${bC} and test it against the altitude from ${A}:<br>(${bP} − ${bA})${NB}·${NB}(${bB} − ${bC})<br>= (${bB} + ${bC})${NB}·${NB}(${bB} − ${bC})<br>= |${bB}|<sup>2</sup> − |${bC}|<sup>2</sup><br>= ${R2} − ${R2} = 0.`,
      },
      {
        t: 'p',
        html: `<b>Reason:</b> a zero dot product means <i>AP</i> ⊥ <i>BC</i>, so ${P} lies on the line through ${A} perpendicular to <i>BC</i>, that is, on the altitude from ${A}. (If ${bP} = ${bA}, then ${bB} + ${bC} = <b>0</b>, so <i>BC</i> is a diameter, the angle at ${A} is a right angle, and ${H} = ${A} as the right-triangle shortcut predicts.)<br>The expression ${bA} + ${bB} + ${bC} is symmetric in the three vertices, so the same computation puts ${P} on the altitude from ${B} and on the altitude from ${C}. The altitudes are concurrent, and ${bH} = ${bA} + ${bB} + ${bC}. ■`,
      },
      {
        t: 'p',
        html: `<b>The Euler line falls out for free.</b> Still with ${O} at the origin, ${bG} = ${THIRD}(${bA} + ${bB} + ${bC}) = ${THIRD}${bH}. So ${bH} = 3${bG}: the points ${O} (the origin), ${G} and ${H} lie on one line through ${O}, with ${OG_GH}. Undoing the shift restores the general statement<br>${H} = ${A} + ${B} + ${C} − 2${O} = 3${G} − 2${O}.`,
      },
      {
        t: 'p',
        html: 'Procedure A below is for when you are given three vertices. It beats writing perpendicular bisectors because it never needs a slope and never trips on a vertical side.',
      },
      {
        t: 'proc',
        title: 'Procedure A: Circumcentre by the equidistance condition',
        steps: [
          `<b>Check for a right angle first.</b> Test the three dot products ${vec('AB')}${NB}·${NB}${vec('AC')}, and cyclically. If one vanishes, ${O} is the midpoint of the hypotenuse: stop, you are done. <b>Why:</b> this one check saves the entire computation on a very common exam triangle ${ESTIMATE}.`,
          `Let ${O} = (${x}, ${y}) and write ${OA2} = ${OB2}. Expand. <b>Why the squares:</b> the ${x2s} and ${y2s} terms cancel on both sides, leaving a <b>linear</b> equation: this is the whole reason we never take square roots here.`,
          `Write ${OB2} = ${OC2} and expand the same way, giving a second linear equation.`,
          'Solve the two linear equations simultaneously (Topic 04, Cramer or substitution).',
          `Compute ${R2} = ${OA2} and, as a free check, confirm ${R2} = ${OB2} = ${OC2}. <b>Why:</b> substituting the solved ${O} back into all three distances catches any slip in Steps 2–4; it checks the arithmetic, since ${OA2} = ${OC2} already follows from the two equalities you imposed.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: Orthocentre by altitudes',
        steps: [
          `<b>Check for a right angle first.</b> If the angle at ${C} is right, then ${H} = ${C}: stop.`,
          `Compute the slope of <i>BC</i> (Topic 01). The altitude from ${A} is perpendicular to <i>BC</i>, so its slope is the negative reciprocal. <b>Why:</b> flip-and-negate is the perpendicularity condition <i>m</i><sub>1</sub><i>m</i><sub>2</sub> = −1.`,
          `Write that altitude through ${A} in point-slope form (Topic 02).`,
          'Repeat for one more altitude: <b>two are enough</b>, because Theorem 4 guarantees the third passes through their intersection. <b>Why:</b> computing the third is wasted time; use it only as a verification if marks are cheap.',
          'Solve the two altitude equations simultaneously.',
          `<b>Vertical/horizontal side care.</b> If a side is horizontal, the altitude to it is the vertical line ${x} = (the opposite vertex’s ${x}). If a side is vertical, the altitude to it is horizontal. Handle these by inspection: the slope formula is undefined there.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C: Incentre and excentres by weights',
        steps: [
          `Compute the three side lengths and <b>label them by what they are opposite to</b>: ${SIDES}. Write the three labelled values down explicitly before touching the formula.`,
          `Form ${In} = ${INC_V}, coordinate by coordinate.`,
          'For the excentre opposite a vertex, negate that vertex’s weight in numerator <b>and</b> denominator. <b>Why both:</b> the formula is a weighted average; the denominator is the sum of the weights actually used.',
          `<b>Sanity-check the answer.</b> ${In} must be inside the triangle; each excentre must be outside. If the sides are along the axes, symmetry usually pins a coordinate exactly (the second worked example).`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Find the incentre of the triangle with vertices <i>A</i>(0,\u00a00), <i>B</i>(4,\u00a00), <i>C</i>(0,\u00a03), and hence its inradius.',
        steps: [
          `<b>Step 1: the three side lengths, labelled by what they are opposite.</b><br>${a} = <i>BC</i> = √((4 − 0)<sup>2</sup> + (0 − 3)<sup>2</sup>)<br>= √(16 + 9) = 5,<br>${b} = <i>CA</i> = 3, ${c} = <i>AB</i> = 4.<br>So ${ABC} = 12.`,
          `<b>Step 2: apply the weighted formula.</b><br>${Ix} = ${fr(`<i>ax</i><sub>A</sub> + <i>bx</i><sub>B</sub> + <i>cx</i><sub>C</sub>`, ABC)}<br>= ${fr('5(0) + 3(4) + 4(0)', '12')}<br>= ${fr('12', '12')} = 1,<br><br>${Iy} = ${fr(`<i>ay</i><sub>A</sub> + <i>by</i><sub>B</sub> + <i>cy</i><sub>C</sub>`, ABC)}<br>= ${fr('5(0) + 3(0) + 4(3)', '12')}<br>= ${fr('12', '12')} = 1.`,
          `<b>Step 3: the inradius.</b> ${DEL} = ${HALF}(4)(3) = 6 and ${s} = 6, so ${r} = ${fr(DEL, s)} = 1.`,
          `<b>Step 4: verify against the bisector picture (Topic 05).</b> Sides <i>AB</i> and <i>CA</i> lie along ${y} = 0 and ${x} = 0. The bisector of the angle at ${A} between those two axis-lines, taken inside the first quadrant, is ${y} = ${x}, the same first-quadrant symmetry argument you used on Topic 05’s practice question 5: both axes are symmetric about ${y} = ${x}, so the bisector is exact. The incentre must lie on that bisector, and (1,\u00a01) does. Its distance from ${y} = 0 is 1, from ${x} = 0 is 1, and from <i>BC</i>: the line <i>BC</i> is ${fr(x, '4')} + ${fr(y, '3')} = 1, i.e. 3${x} + 4${y} − 12 = 0, giving<br>${fr('|3 + 4 − 12|', '√(9 + 16)')} = ${fr('5', '5')} = 1.<br>Three equal distances, all equal to ${r}.`,
        ],
        ans: `${In} = (1,\u00a01), ${r} = 1`,
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: 'Find the incentre of the triangle with vertices <i>A</i>(0,\u00a00), <i>B</i>(12,\u00a00), <i>C</i>(0,\u00a05), fast.',
        steps: [
          `<b>Speed approach.</b> Before computing anything, notice the geometry: two sides lie along the coordinate axes, so the incentre is at perpendicular distance ${r} from both, which forces ${In} = (${r}, ${r}). <b>Whatever you compute, the two coordinates must come out equal.</b> That is your trap detector.`,
          `Now the weights, opposite-labelled:<br>${a} = <i>BC</i> = √(144 + 25) = 13,<br>${b} = <i>CA</i> = 5, ${c} = <i>AB</i> = 12,<br>${ABC} = 30.<br>${Ix} = ${fr('13(0) + 5(12) + 12(0)', '30')}<br>= ${fr('60', '30')} = 2,<br><br>${Iy} = ${fr('13(0) + 5(0) + 12(5)', '30')}<br>= ${fr('60', '30')} = 2.`,
          `Equal coordinates, as predicted. Cross-check with ${r} = ${fr(DEL, s)}: ${DEL} = ${HALF}(12)(5) = 30, ${s} = 15, ${r} = 2.`,
          `<b>The trap:</b> reading the formula ${fr(`<i>ax</i><sub>A</sub> + <i>bx</i><sub>B</sub> + <i>cx</i><sub>C</sub>`, ABC)} left-to-right and pairing each vertex with the side that starts at it: ${a} = <i>AB</i> = 12 for ${A}, ${b} = <i>BC</i> = 13 for ${B}, ${c} = <i>CA</i> = 5 for ${C}. That gives<br>${fr('12(0) + 13(12) + 5(0)', '30')}<br>= ${fr('156', '30')} = ${fr('26', '5')},<br><br>${fr('12(0) + 13(0) + 5(5)', '30')}<br>= ${fr('25', '30')} = ${fr('5', '6')},<br>i.e. the seductive wrong answer (${fr('26', '5')}, ${fr('5', '6')}), which is a trap option because it still lands inside the triangle, so it survives a lazy “is it inside?” check. The symmetry test kills it in one second: ${fr('26', '5')}${NB}≠${NB}${fr('5', '6')}, so it cannot be equidistant from the two axes. <b>The subscript on the weight tells you which vertex it multiplies; the letter tells you which side it is opposite to. They are not the same instruction.</b>`,
        ],
        ans: `${In} = (2,\u00a02), ${r} = 2`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level · multi-concept',
        q: 'For the triangle with vertices <i>A</i>(0,\u00a00), <i>B</i>(4,\u00a00), <i>C</i>(1,\u00a03), find (i) the orthocentre, (ii) the circumcentre, and (iii) verify the Euler relation.',
        steps: [
          `<b>Part (i): orthocentre by altitudes (Procedure B).</b><br><b>Right-angle check:</b> ${vec('AB')}${NB}·${NB}${vec('AC')} = (4,\u00a00)${NB}·${NB}(1,\u00a03) = 4${NB}≠${NB}0;<br>${vec('BA')}${NB}·${NB}${vec('BC')} = (−4,\u00a00)${NB}·${NB}(−3,\u00a03) = 12${NB}≠${NB}0;<br>${vec('CA')}${NB}·${NB}${vec('CB')} = (−1,\u00a0−3)${NB}·${NB}(3,\u00a0−3)<br>= −3 + 9 = 6${NB}≠${NB}0.<br>No right angle, so no shortcut.`,
          `<b>Altitude from ${C}:</b> side <i>AB</i> lies along ${y} = 0, which is horizontal, so the altitude to it is the vertical line through ${C}:<br>${x} = 1.`,
          `<b>Altitude from ${A}:</b> slope of <i>BC</i> is ${fr('3 − 0', '1 − 4')} = −1, so the altitude has slope +1 and passes through the origin:<br>${y} = ${x}.`,
          `<b>Intersect:</b> ${x} = 1 and ${y} = ${x} give ${H} = (1,\u00a01).`,
          `<b>Free verification with the third altitude:</b> slope of <i>AC</i> is 3, so the altitude from ${B}(4,\u00a00) has slope −${THIRD}: ${y} = −${THIRD}(${x} − 4). At ${x} = 1, ${y} = −${THIRD}(−3) = 1. It passes through (1,\u00a01) as Theorem 4 requires.`,
          `<b>Part (ii): circumcentre by equidistance (Procedure A).</b> Let ${O} = (${x}, ${y}).<br>${OA2} = ${OB2}: ${x2s} + ${y2s} = (${x} − 4)<sup>2</sup> + ${y2s}<br>⇒ 0 = −8${x} + 16 ⇒ ${x} = 2.<br>${OA2} = ${OC2}: ${x2s} + ${y2s} = (${x} − 1)<sup>2</sup> + (${y} − 3)<sup>2</sup><br>⇒ 0 = −2${x} + 1 − 6${y} + 9<br>⇒ 2${x} + 6${y} = 10 ⇒ ${x} + 3${y} = 5.<br>With ${x} = 2: 3${y} = 3 ⇒ ${y} = 1. So ${O} = (2,\u00a01).`,
          `<b>Check:</b> ${OA2} = 4 + 1 = 5, ${OB2} = 4 + 1 = 5, ${OC2} = 1 + 4 = 5. All agree, so ${R} = √5.`,
          `<b>Part (iii): Euler relation.</b><br>${G} = (${fr('0 + 4 + 1', '3')}, ${fr('0 + 0 + 3', '3')})<br>= (${F53}, 1). Then<br>3${G} − 2${O} = (5 − 4, 3 − 2) = (1,\u00a01) = ${H}. ✓`,
          `All three centres have ${y} = 1: the Euler line here is the horizontal line ${y} = 1, and along it <i>HG</i> = |${F53} − 1| = ${fr('2', '3')} while <i>GO</i> = |2 − ${F53}| = ${THIRD}: the promised ${ratio('2', '1')}.`,
        ],
        ans: `${H} = (1,\u00a01), ${O} = (2,\u00a01), ${G} = (${F53}, 1), Euler line ${y} = 1`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'The triangle <i>ABC</i> has vertices <i>A</i>(5,\u00a07), <i>B</i>(−2,\u00a06), <i>C</i>(2,\u00a0−2). Find its circumcentre, centroid and orthocentre, and the equation of its Euler line, computing at most one of <i>O</i> and <i>H</i> from scratch.',
        steps: [
          `The Advanced move is to refuse to compute both ${O} and ${H} directly. Compute the cheap one plus ${G}, then let Theorem 4 hand you the third.`,
          `<b>Step 1: circumcentre by equidistance.</b><br>${OA2} = ${OB2}:<br>(${x} − 5)<sup>2</sup> + (${y} − 7)<sup>2</sup><br>= (${x} + 2)<sup>2</sup> + (${y} − 6)<sup>2</sup><br>−10${x} + 25 − 14${y} + 49<br>= 4${x} + 4 − 12${y} + 36<br>⟹ −14${x} − 2${y} + 34 = 0<br>⟹ 7${x} + ${y} = 17.`,
          `${OB2} = ${OC2}:<br>(${x} + 2)<sup>2</sup> + (${y} − 6)<sup>2</sup><br>= (${x} − 2)<sup>2</sup> + (${y} + 2)<sup>2</sup><br>4${x} + 4 − 12${y} + 36<br>= −4${x} + 4 + 4${y} + 4<br>⟹ 8${x} − 16${y} + 32 = 0<br>⟹ ${x} − 2${y} = −4.`,
          `Substituting ${x} = 2${y} − 4 into 7${x} + ${y} = 17:<br>14${y} − 28 + ${y} = 17 ⇒ 15${y} = 45<br>⇒ ${y} = 3, ${x} = 2.<br>${O} = (2,\u00a03),<br>${R2} = (2 − 5)<sup>2</sup> + (3 − 7)<sup>2</sup><br>= 9 + 16 = 25 ⇒ ${R} = 5,<br>and the check holds: ${OB2} = 16 + 9 = 25, ${OC2} = 0 + 25 = 25.`,
          `<b>Step 2: centroid.</b><br>${G} = (${fr('5 − 2 + 2', '3')}, ${fr('7 + 6 − 2', '3')})<br>= (${F53}, ${fr('11', '3')}).`,
          `<b>Step 3: orthocentre, without a single altitude.</b><br>${H} = 3${G} − 2${O} = (5 − 4, 11 − 6) = (1,\u00a05).`,
          `<b>Step 4: verify, because a formula-only answer deserves one check.</b> The altitude from ${A} must be perpendicular to <i>BC</i>:<br>${vec('AH')} = (1 − 5, 5 − 7) = (−4,\u00a0−2),<br>${vec('BC')} = (4,\u00a0−8),<br>${vec('AH')}${NB}·${NB}${vec('BC')} = −16 + 16 = 0. ✓<br>And from ${B}: ${vec('BH')} = (3,\u00a0−1), ${vec('CA')} = (3,\u00a09), dot product 9 − 9 = 0. ✓`,
          `<b>Step 5: the Euler line.</b> Through ${H}(1,\u00a05) and ${O}(2,\u00a03) the slope is ${fr('3 − 5', '2 − 1')} = −2, so<br>${y} − 5 = −2(${x} − 1) ⟹ 2${x} + ${y} − 7 = 0.<br>${G} obliges: 2(${F53}) + ${fr('11', '3')}<br>= ${fr('10 + 11', '3')} = 7. ✓`,
          '<b>Why this is Advanced-flavoured:</b> the brute-force route computes <i>O</i> from two perpendicular bisectors and then <i>H</i> from two altitudes: four line equations and two simultaneous systems. The Euler relation replaces half of that with one subtraction. Examiners set the “given two centres, find the third” variant precisely because it is worthless to a student who only memorised coordinates and never met the relation between them.',
        ],
        ans: `${O} = (2,\u00a03), ${G} = (${F53}, ${fr('11', '3')}), ${H} = (1,\u00a05), Euler line 2${x} + ${y} − 7 = 0`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>[CBSE]</b> Find the circumcentre and circumradius of the triangle with vertices <i>A</i>(0,\u00a00), <i>B</i>(6,\u00a00), <i>C</i>(0,\u00a08).',
            a: `Right-angled at ${A}, so ${O} is the midpoint of the hypotenuse <i>BC</i>: ${O} = (3,\u00a04), ${R} = 5.`,
          },
          {
            q: '<b>[CBSE]</b> Find the incentre and inradius of the same triangle <i>A</i>(0,\u00a00), <i>B</i>(6,\u00a00), <i>C</i>(0,\u00a08).',
            a: `${a} = <i>BC</i> = 10, ${b} = <i>CA</i> = 8, ${c} = <i>AB</i> = 6;<br>${In} = (${fr('0 + 48 + 0', '24')}, ${fr('0 + 0 + 48', '24')}) = (2,\u00a02),<br>${r} = ${fr(DEL, s)} = ${fr('24', '12')} = 2.`,
          },
          {
            q: '<b>[JEE Main]</b> Find the orthocentre of the triangle with vertices <i>A</i>(0,\u00a00), <i>B</i>(6,\u00a00), <i>C</i>(2,\u00a04).',
            a: `${H} = (2,\u00a02) (altitude from ${C} is ${x} = 2; slope of <i>BC</i> is −1 so the altitude from ${A} is ${y} = ${x}).`,
          },
          {
            q: '<b>[JEE Main]</b> The circumcentre of a triangle is (1,\u00a02) and its centroid is (2,\u00a03). Find its orthocentre.',
            a: `${H} = 3${G} − 2${O} = (6 − 2, 9 − 4) = (4,\u00a05).`,
          },
          {
            q: '<b>[JEE Main]</b> For the triangle <i>A</i>(0,\u00a00), <i>B</i>(4,\u00a00), <i>C</i>(0,\u00a03), find the excentre opposite <i>A</i> and verify your answer by checking its distance from all three side-lines.',
            a: `${a} = 5, ${b} = 3, ${c} = 4;<br>${IA} = ${fr(`−5${A} + 3${B} + 4${C}`, '−5 + 3 + 4')} = (${fr('12', '2')}, ${fr('12', '2')}) = (6,\u00a06);<br>its distances from ${y} = 0, from ${x} = 0 and from 3${x} + 4${y} − 12 = 0 are 6, 6 and ${fr('|18 + 24 − 12|', '5')} = 6, all equal to ${rA} = ${fr(DEL, `${s} − ${a}`)} = ${fr('6', '1')} = 6.`,
          },
          {
            q: '<b>[JEE Advanced]</b> For the triangle <i>A</i>(0,\u00a00), <i>B</i>(6,\u00a00), <i>C</i>(2,\u00a04), find <i>G</i>, <i>O</i> and <i>H</i>, write the equation of the Euler line, and verify <i>HG</i> ∶ <i>GO</i> = 2 ∶ 1.',
            a: `${G} = (${fr('8', '3')}, ${fr('4', '3')}), ${O} = (3,\u00a01) (check ${OA2} = ${OB2} = ${OC2} = 10), ${H} = (2,\u00a02); Euler line ${x} + ${y} − 4 = 0; <i>HG</i> = ${fr('2√2', '3')} and <i>GO</i> = ${fr('√2', '3')}, ratio ${ratio('2', '1')}.`,
          },
          {
            q: `<b>[JEE Advanced]</b> A triangle has vertices <i>A</i>(0,\u00a00), <i>B</i>(${p}, 0), <i>C</i>(0, ${q}) with ${p}, ${q}${NB}>${NB}0. Find <i>G</i>, <i>O</i>, <i>H</i> and <i>I</i> in terms of ${p} and ${q}, and confirm that ${EULER}.`,
            a: `Right-angled at ${A}, so ${H} = ${A} = (0,\u00a00) and ${O} = (${fr(p, '2')}, ${fr(q, '2')}) (midpoint of the hypotenuse <i>BC</i>); ${G} = (${fr(p, '3')}, ${fr(q, '3')}); with ${a} = √(${sq(p)} + ${sq(q)}), ${b} = ${q}, ${c} = ${p},<br><br>${In} = (${fr('<i>pq</i>', `${p} + ${q} + √(${sq(p)} + ${sq(q)})`)}, ${fr('<i>pq</i>', `${p} + ${q} + √(${sq(p)} + ${sq(q)})`)}).<br><br>Check: 3${G} − 2${O} = (${p}${NB}−${NB}${p},${NB}${q}${NB}−${NB}${q}) = (0,\u00a00) = ${H}. ✓`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `In the incentre formula ${In} = ${INC_X} for △<i>ABC</i>, the weight ${a} is:`,
        opts: [
          { label: 'the length <i>BC</i>', nudge: null },
          {
            label: 'the length <i>AB</i>',
            nudge: `<b>(B)</b> <i>AB</i> is the classic left-to-right misreading: pairing ${A} with the side that starts at ${A}. This is the single most common incentre error and it produces a wrong point that still lies inside the triangle, so it survives casual checking.`,
          },
          { label: 'the length <i>CA</i>', nudge: '<b>(C)</b> <i>CA</i> is the same misreading run in the other rotational direction.' },
          {
            label: 'the measure of angle <i>A</i>',
            nudge: '<b>(D)</b> confuses the weights with the angles. The incentre’s weights are the opposite sides, which are proportional to sin <i>A</i>, sin <i>B</i>, sin <i>C</i>, not to the angles themselves; weighting by the angles gives a different point except in an equilateral triangle.',
          },
        ],
        correct: 0,
        solution: `The weights are side lengths labelled by the vertex they are <b>opposite</b> to, so ${SIDES}.`,
      },
      {
        t: 'mcq',
        q: 'The incentre of the triangle with vertices <i>A</i>(0,\u00a012), <i>B</i>(−5,\u00a00), <i>C</i>(5,\u00a00) is:',
        opts: [
          { label: `(0, ${fr('10', '3')})`, nudge: null },
          {
            label: '(0,\u00a04)',
            nudge: `<b>(B)</b> (0,\u00a04) is the <b>centroid</b>, (${fr('0 − 5 + 5', '3')}, ${fr('12 + 0 + 0', '3')}). Produced by the belief that “centre of a triangle” means “average of the vertices”: that is one centre, not this one.`,
          },
          {
            label: `(${fr('5', '12')}, ${fr('13', '3')})`,
            nudge: `<b>(C)</b> is the mis-ordered weighting: pairing ${A} with <i>AB</i> = 13, ${B} with <i>BC</i> = 10, ${C} with <i>CA</i> = 13. It even breaks the symmetry of an isosceles triangle, which is your tell: ${In} must lie on the axis of symmetry ${x} = 0.`,
          },
          {
            label: `(0, ${F53})`,
            nudge: `<b>(D)</b> (0, ${F53}) comes from ${r} = ${fr(DEL, 'perimeter')} = ${fr('60', '36')} instead of ${r} = ${fr(DEL, s)}. The inradius uses the <b>semi</b>-perimeter.`,
          },
        ],
        correct: 0,
        solution: `${a} = <i>BC</i> = 10, ${b} = <i>CA</i> = 13, ${c} = <i>AB</i> = 13, sum = 36. Then<br>${Ix} = ${fr('10(0) + 13(−5) + 13(5)', '36')} = 0<br>and<br>${Iy} = ${fr('10(12) + 13(0) + 13(0)', '36')}<br>= ${fr('120', '36')} = ${fr('10', '3')}.<br>Cross-check: ${DEL} = ${HALF}(10)(12) = 60, ${s} = 18, so ${r} = ${fr('60', '18')} = ${fr('10', '3')}, and since <i>BC</i> lies along ${y} = 0, the incentre’s ${y}-coordinate must equal ${r}.`,
      },
      {
        t: 'mcq',
        q: 'In a triangle right-angled at <i>C</i>, the orthocentre is:',
        opts: [
          {
            label: 'the midpoint of <i>AB</i>',
            nudge: '<b>(A)</b> is the <b>circumcentre</b> of a right triangle, not the orthocentre: the two facts are learned together and get swapped under time pressure.',
          },
          { label: 'the vertex <i>C</i>', nudge: null },
          {
            label: 'the centroid',
            nudge: `<b>(C)</b> the centroid is the vertex average ${fr(`${A} + ${B} + ${C}`, '3')}, which equals ${C} only in a degenerate figure.`,
          },
          {
            label: 'always outside the triangle',
            nudge: '<b>(D)</b> is a half-remembered rule: it is the <b>obtuse</b> triangle whose orthocentre falls outside. For a right triangle it lands exactly on the vertex, and for an acute triangle it is strictly inside.',
          },
        ],
        correct: 1,
        solution: `Two of the altitudes are the legs <i>CA</i> and <i>CB</i> themselves, and they meet at ${C}.`,
      },
      {
        t: 'mcq',
        q: 'If <i>O</i>, <i>G</i>, <i>H</i> denote the circumcentre, centroid and orthocentre of a non-equilateral triangle, then:',
        opts: [
          { label: OG_GH, nudge: null },
          {
            label: `<i>OG</i>${NB}∶${NB}<i>GH</i> = ${ratio('2', '1')}`,
            nudge: `<b>(B)</b> inverts the ratio: the trap is importing the ${ratio('2', '1')} of the median (which is measured from the vertex) into the Euler line. On the Euler line the short piece is next to ${O}.`,
          },
          {
            label: '<i>O</i>, <i>G</i>, <i>H</i> are never collinear',
            nudge: '<b>(C)</b> contradicts the Euler line entirely; it is what you would guess if you had only ever computed the centres separately and never compared them.',
          },
          {
            label: '<i>G</i> is the midpoint of <i>OH</i>',
            nudge: `<b>(D)</b> would need <i>OG</i>${NB}∶${NB}<i>GH</i> = ${ratio('1', '1')}, i.e. ${H} = 2${G} − ${O}, which fails for every non-equilateral triangle, since 2${G} − ${O} = 3${G} − 2${O} only when ${G} = ${O} (in the third worked example, 2${G} − ${O} = (${fr('10', '3')} − 2, 2 − 1) = (${fr('4', '3')}, 1)${NB}≠${NB}${H}).`,
          },
        ],
        correct: 0,
        solution: `Theorem 4 gives ${EULER}, i.e. ${vec('OH')} = 3${vec('OG')}, so ${G} divides <i>OH</i> with ${OG_GH}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Mis-ordering the incentre weights.</b> ${a}, ${b}, ${c} are the sides <b>opposite</b> ${A}, ${B}, ${C}: never the sides that begin at them. <b>Correction:</b> before writing the formula, write the three labelled lengths on their own line: “${a} = <i>BC</i> = …, ${b} = <i>CA</i> = …, ${c} = <i>AB</i> = …”. Two seconds of bookkeeping removes the chapter’s most expensive error.`,
          `<b>Negating only the numerator for an excentre.</b> ${IA} = ${EXA_V}: the sign flips <b>top and bottom</b>. <b>Correction:</b> remember that the denominator is the sum of the weights you actually used, so it must track them.`,
          `<b>Taking square roots when finding the circumcentre.</b> Setting <i>OA</i> = <i>OB</i> with radicals gives an ugly irrational equation. <b>Correction:</b> always square first: ${OA2} = ${OB2} kills the ${x2s} and ${y2s} terms and leaves a linear equation. This is the whole trick of Procedure A.`,
          '<b>Computing the third altitude or the third perpendicular bisector.</b> Concurrency is a theorem, not something you re-establish each time. <b>Correction:</b> two lines determine the centre; use the third only as a verification if you have spare time.',
          `<b>Assuming every centre is inside the triangle.</b> Only ${G} and ${In} always are. In an obtuse triangle both ${O} and ${H} fall outside, and every excentre is outside by construction. <b>Correction:</b> a negative coordinate in an all-positive-quadrant triangle is a warning for ${In}, but perfectly normal for ${O}, ${H} and the excentres.`,
          '<b>Hunting for the Euler line of an equilateral triangle.</b> All the centres coincide, so no line is determined. <b>Correction:</b> recognise equilateral (all three sides equal) and answer “all centres coincide” rather than dividing by zero.',
          `<b>Putting the incentre on the Euler line.</b> ${In} is not on it in general. <b>Correction:</b> it lies on it only when the triangle is isosceles (and not equilateral, which has no Euler line), where symmetry drags every centre onto the axis.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> Screen every triangle-centre question for a right angle before you compute anything. One dot product per vertex (${vec('CA')}${NB}·${NB}${vec('CB')} at ${C}) tells you whether ${H} and ${O} are already known (${H} at the right-angle vertex, ${O} at the hypotenuse’s midpoint). In JEE Main this shortcut converts a three-minute problem into a fifteen-second one, and setters use right triangles constantly ${ESTIMATE} because they make the arithmetic clean.`,
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> Never compute all three of ${O}, ${G}, ${H}. ${G} is free (one addition), so compute ${G} plus whichever of ${O} and ${H} looks cheaper, and get the last one from ${EULER}. If the question hands you two centres and asks for the third, that relation is the entire solution.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'p',
        html: `With ${A1}, ${B2}, ${C3} and ${SIDES} (each side <b>opposite</b> its vertex), ${s} = ${fr(ABC, '2')}, area ${DEL}:`,
      },
      {
        t: 'snapshot',
        rows: [
          { f: 'Centroid', note: `${CENTROID}; medians concur; divides each median ${ratio('2', '1')} from the vertex.` },
          { f: 'Incentre', note: `${INCENTRE}; internal bisectors concur; ${R_IN}; always interior.` },
          {
            f: 'Excentres',
            note: `flip one weight’s sign top <b>and</b> bottom:<br>${IA} = ${EXA_V},<br>${IB} = ${EXB_V},<br>${IC} = ${EXC_V};<br>${rA} = ${fr(DEL, `${s} − ${a}`)}, ${rB} = ${fr(DEL, `${s} − ${b}`)}, ${rC} = ${fr(DEL, `${s} − ${c}`)}; always exterior.`,
          },
          { f: 'Circumcentre', note: `solve ${OA2} = ${OB2} and ${OB2} = ${OC2} (two linear equations: square, never root); ${R_CIRC}.` },
          { f: 'Orthocentre', note: `intersect two altitudes (slope = −${fr('1', `<i>m</i><sub>opposite side</sub>`)}).` },
          { f: 'Euler line', note: `${EULER}; ${O}, ${G}, ${H} collinear with ${OG_GH}; ${In} is not on it (except isosceles).` },
          { f: 'Right triangle at C', note: `${H} = ${C}, ${O} = midpoint of <i>AB</i>.` },
          { f: 'Equilateral', note: 'all four centres coincide; Euler line undefined.' },
        ],
        aids: [
          `“Opposite, always opposite”: the incentre weight ${a} sits opposite vertex ${A}.`,
          `“Square it, don’t root it”: the circumcentre from ${OA2} = ${OB2}.`,
          `“${O}, ${G}, ${H}: one, two”: ${G} is the near neighbour of ${O} on the Euler line.`,
          '“Right angle? Orthocentre’s already there.”',
        ],
      },
    ],
  },
];
