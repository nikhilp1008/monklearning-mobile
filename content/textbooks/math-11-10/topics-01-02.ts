import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Topics 01–02, pp. 897–909 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word: the main chapter's first
 * two unnumbered sections, "Introduction: Sections of a Cone & the Conic
 * Family" (pp. 897–902; Figure 10.1, caption p. 898, drawing p. 899) and
 * "The Circle" (pp. 903–909; Figure 10.2, caption p. 905, drawing p. 906).
 * The Parabola starts on p. 910. Each topic opens with its "Exam Relevance:"
 * box as a part of its own, then is split at its Sections 1 to 8; the "Cheat
 * Sheet Box" is the part "Cheat sheet". No unnumbered drawings on these pages.
 * Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
/** A no-break space: keeps a short condition on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const x = '<i>x</i>';
const y = '<i>y</i>';
const e = '<i>e</i>';
const al = '<i>α</i>';
const be = '<i>β</i>';
const X2 = '<i>x</i><sup>2</sup>';
const Y2 = '<i>y</i><sup>2</sup>';
const XY = '<i>xy</i>';
const DISC = '<i>B</i><sup>2</sup> − 4<i>AC</i>';
const CONIC = '<i>Ax</i><sup>2</sup> + <i>Bxy</i> + <i>Cy</i><sup>2</sup> + <i>Dx</i> + <i>Ey</i> + <i>F</i> = 0';
const eq = (l: string, r: string) => `${l}${NB}=${NB}${r}`;
const E0 = eq(e, '0');
const E1 = eq(e, '1');
const ELT = `0${NB}<${NB}${e}${NB}<${NB}1`;
const EGT = `${e}${NB}>${NB}1`;
const ELT1 = `${e}${NB}<${NB}1`;
const BA = eq(be, al);

// The circle.
const GEN = `${X2} + ${Y2} + 2<i>gx</i> + 2<i>fy</i> + <i>c</i> = 0`;
const GFC = '<i>g</i><sup>2</sup> + <i>f</i><sup>2</sup> − <i>c</i>';
const RGFC = `√(${GFC})`;
const STD = '(<i>x</i> − <i>h</i>)<sup>2</sup> + (<i>y</i> − <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup>';
const x1 = '<i>x</i><sub>1</sub>';
const x2 = '<i>x</i><sub>2</sub>';
const y1 = '<i>y</i><sub>1</sub>';
const y2 = '<i>y</i><sub>2</sub>';
const P1 = `<i>P</i>(${x1},${NB}${y1})`;
const DIAM = `(${x} − ${x1})(${x} − ${x2}) + (${y} − ${y1})(${y} − ${y2}) = 0`;
const S1 = '<i>S</i><sub>1</sub>';
const RS1 = `√${S1}`;
const LT = '<i>ℓ</i><sub>tangent</sub>';
const MGF = `(−<i>g</i>,${NB}−<i>f</i>)`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · pp. 897–902 ────────────────
  {
    n: '01',
    title: 'Introduction: Sections of a Cone & the Conic Family',
    kalam: 'A conic is the set of points whose distance to a fixed focus divided by distance to a fixed directrix equals a constant e.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `CBSE Boards ask 1–2 marks ${ESTIMATE}: identify which conic a given section or equation represents, or recall a degenerate case. JEE Main routinely hides a 1-question classification via the general second-degree equation ${ESTIMATE}. JEE Advanced expects fluency with the unifying eccentricity definition and the discriminant test. Master this and the entire chapter stops being four disconnected curves and becomes one idea seen from four angles.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Here is the single most useful realisation in this whole chapter: the circle, the parabola, the ellipse, and the hyperbola are not four unrelated curves you must memorise separately. They are <b>one family</b>: four different slices of the same object. That object is a <b>double cone</b>, and the four curves are simply what you see when you cut it at different angles. Learn the cut, and the curves explain themselves.',
      },
      {
        t: 'p',
        html: `Picture a double cone like two ice-cream cones joined tip to tip, stretching infinitely up and down. The sharp meeting point is the <b>vertex</b>; the central line through both tips is the <b>axis</b>; and any straight line lying on the surface, running from the vertex out along the slope, is a <b>generator</b>. The angle each generator makes with the axis is the <b>semi-vertical angle</b>, which we call ${al}: it is fixed for a given cone, like the steepness of the slope.`,
      },
      {
        t: 'p',
        html: 'Think about it this way… forget the cone for a second and pick up a torch in a dark room. Point it straight at the wall, beam perpendicular: you get a clean <b>circle</b> of light. Now tilt the torch a little: the circle stretches into an <b>ellipse</b>. Keep tilting. At one exact critical angle, the bottom edge of the light-cone runs parallel to the wall and the ellipse breaks open at one end, spilling off to infinity: that is a <b>parabola</b>. Tilt past that angle and the beam now strikes the wall so steeply that it opens into the two sweeping arms of a <b>hyperbola</b>. You have just produced all four conics with a torch, and the only thing you changed was the tilt angle. That tilt is exactly what the cutting plane does to the cone.',
      },
      {
        t: 'p',
        html: `Formally, let ${be} be the angle the cutting plane makes with the axis. Comparing ${be} to the cone’s own angle ${al} decides everything:<br>• Cut <b>straight across</b> (${eq(be, '90°')}, plane perpendicular to the axis) → <b>circle</b>.<br>• Cut at a <b>gentle tilt</b> (${al} < ${be} < 90°) → <b>ellipse</b>.<br>• Cut <b>parallel to a generator</b> (${BA}) → <b>parabola</b>: the knife-edge case.<br>• Cut <b>steeply</b> (0 ≤ ${be} < ${al}, plane hits both nappes) → <b>hyperbola</b>, which is why a hyperbola has two branches: the plane slices both cones.`,
      },
      {
        t: 'p',
        html: '<b>Degenerate conics.</b> There is a special situation: what if the cutting plane passes through the vertex itself? Then the slice shrinks to something trivial: a single <b>point</b> (the vertex), a single <b>straight line</b> (plane tangent along one generator), or a <b>pair of intersecting straight lines</b> (plane through the axis). These are the <b>degenerate conics</b>: the family’s “edge cases,” what you get when the curve collapses.',
      },
      {
        t: 'p',
        html: `And there is a second, equation-free way to see the family: through <b>eccentricity</b> ${e}, the focus–directrix ratio you will meet in every curve that follows. A conic is the set of points whose distance to a fixed <b>focus</b> divided by distance to a fixed <b>directrix</b> equals a constant ${e}. Dial ${e} and you sweep through the whole family: ${e}${NB}→${NB}0 gives a <b>circle</b> (the limit), ${ELT} an <b>ellipse</b>, ${E1} a <b>parabola</b>, ${EGT} a <b>hyperbola</b>. One number, four curves.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b><br>• The classification by ${be} vs ${al} assumes the plane does <b>not</b> pass through the vertex; if it does, you get a degenerate conic instead.<br>• A circle is the limiting ellipse (${e} → 0, foci merging); a parabola is the single boundary (${E1}) between the bounded ellipse and the unbounded hyperbola.<br>• The eccentricity definition needs the focus off the directrix; a focus on the directrix degenerates the locus.`,
      },

      { t: 'part', title: 'Key definitions and formulas' },
      {
        t: 'p',
        html: `<b>Cone terminology.</b> A right circular cone has an <b>axis</b>, a <b>vertex</b>, two <b>nappes</b> (the upper and lower halves), <b>generators</b> (surface lines through the vertex), and a fixed <b>semi-vertical angle</b> ${al} between axis and generator.`,
      },
      {
        t: 'table',
        title: 'Classification by cutting-plane angle β (plane not through vertex)',
        head: ['Condition', 'Conic'],
        rows: [
          [eq(be, '90°'), 'Circle'],
          [`${al} < ${be} < 90°`, 'Ellipse'],
          [BA, 'Parabola'],
          [`0 ≤ ${be} < ${al}`, 'Hyperbola (cuts both nappes)'],
        ],
      },
      {
        t: 'formula',
        kicker: 'Classification by eccentricity',
        main: `${e} = ${fr('dist. to focus', 'dist. to directrix')}<br>ellipse: ${ELT},<br>parabola: ${E1},<br>hyperbola: ${EGT},<br>circle (the limit): ${e}${NB}→${NB}0.`,
        legend: [`${e} = the eccentricity (the focus–directrix ratio)`],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Degenerate conics</b> (plane through vertex): a point, a straight line, or a pair of intersecting straight lines.',
      },
      {
        t: 'formula',
        kicker: 'General second-degree equation',
        main: `${CONIC}<br>for a non-degenerate curve:<br>${DISC} < 0 ⇒ ellipse,<br>${DISC} = 0 ⇒ parabola,<br>${DISC} > 0 ⇒ hyperbola.`,
        legend: ['<i>A</i>, <i>B</i>, <i>C</i> = the coefficients of <i>x</i><sup>2</sup>, <i>xy</i> and <i>y</i><sup>2</sup> (not all zero)', '<i>D</i>, <i>E</i>, <i>F</i> = the coefficients of <i>x</i> and <i>y</i> and the constant'],
        note: null,
      },
      {
        t: 'p',
        html: `where <i>A</i>, <i>B</i>, <i>C</i> are not all zero. The <b>discriminant</b> Δ = ${DISC} classifies the (non-degenerate) curve:`,
      },
      {
        t: 'table',
        title: null,
        head: ['Discriminant', 'Conic'],
        rows: [
          [`${DISC} < 0`, `Ellipse (circle if also <i>A</i> = <i>C</i>, <i>B</i>${NB}=${NB}0)`],
          [`${DISC} = 0`, 'Parabola'],
          [`${DISC} > 0`, 'Hyperbola'],
        ],
      },
      {
        t: 'p',
        html: `When <i>B</i> = 0 (no ${XY} term) the conic’s axes are parallel to the coordinate axes: the standard case for Class 11. A nonzero <i>B</i> means the conic is rotated.`,
      },
      { t: 'fig', id: 'm11-10-fig-10.1' },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'This topic classifies rather than derives, so the skill is reading a description or an equation and naming the curve with reasoning, not rote.',
      },
      {
        t: 'proc',
        title: 'Procedure A: Classify a section from the geometry',
        steps: [
          `Identify the cone’s semi-vertical angle ${al} and the cutting-plane angle ${be} (both measured to the axis).`,
          `Check whether the plane passes through the vertex. If yes → degenerate (point/line/pair of lines). If no → use the ${be}-vs-${al} table.`,
          `<b>Reasoning:</b> the parabola is the hinge. When the plane tilts to exactly match a generator’s direction (${BA}), the slice can no longer “close up,” so the bounded ellipse opens into the unbounded parabola; tilt further and the plane reaches the second nappe, producing the hyperbola’s second branch.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: Classify from the general equation (no xy term)',
        steps: [
          `Read off <i>A</i> (coefficient of ${X2}) and <i>C</i> (coefficient of ${Y2}); here <i>B</i> = 0.`,
          `If <i>A</i> = <i>C</i> (same sign, equal) → <b>circle</b>. If <i>A</i>, <i>C</i> same sign but unequal → <b>ellipse</b>. If one of <i>A</i>, <i>C</i> is zero → <b>parabola</b>. If <i>A</i>, <i>C</i> opposite signs → <b>hyperbola</b>. This names a non-degenerate curve only: ${X2} + ${Y2} = 0 is a single point, ${X2} + ${Y2} + 1 = 0 no real curve, ${X2} + 2${x} = 0 two parallel lines and ${X2} − ${Y2} = 0 a pair of lines.`,
          '<b>Reasoning:</b> with <i>B</i> = 0 the discriminant is −4<i>AC</i>, so the sign of the product <i>AC</i> alone decides ellipse/parabola/hyperbola: same-sign coefficients curve the graph “the same way” (closed), opposite signs curve it oppositely (open arms).',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C: Classify from the general equation (with an xy term)',
        steps: [
          `Compute Δ = ${DISC}.`,
          'Apply the discriminant table: negative → ellipse, zero → parabola, positive → hyperbola.',
          `<b>Reasoning:</b> the ${XY} term only rotates the conic; rotation cannot change what kind of curve it is, and ${DISC} is a rotation-invariant quantity: it stays fixed no matter how the axes are turned, which is exactly why it is a reliable classifier.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'A plane cuts a right circular cone of semi-vertical angle 30° at an angle of 50° to the axis, without passing through the vertex. Name the resulting conic. What would it be if the angle were exactly 30°?',
        steps: [
          `Compare ${eq(be, '50°')} with ${eq(al, '30°')}. Since ${al} < ${be} < 90° (i.e. 30° < 50° < 90°), the section is an <b>ellipse</b>.`,
          `If instead ${be} = 30° = ${al}, the plane is parallel to a generator, giving a <b>parabola</b>: the boundary case.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main, quick-elimination',
        q: `Identify the conic 3${X2} + 3${Y2} − 12${x} + 6${y} − 4 = 0.`,
        steps: [
          `No ${XY} term, and the coefficients of ${X2} and ${Y2} are <b>equal</b> (<i>A</i> = <i>C</i> = 3). That single observation is enough: it is a <b>circle</b>. No need to find the centre or radius to classify it.`,
          `<b>Speed note:</b> equal ${X2}, ${Y2} coefficients with no ${XY} term ⇒ circle, instantly. Unequal but same sign ⇒ ellipse.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main, multi-concept',
        q: `Classify 4${X2} − 9${Y2} + 8${x} + 36${y} − 68 = 0, and state its eccentricity category.`,
        steps: [
          `No ${XY} term. Coefficients <i>A</i> = 4 and <i>C</i> = −9 have <b>opposite signs</b>, so<br>${DISC} = 0 − 4(4)(−9)<br>= 144 > 0 → <b>hyperbola</b>.`,
          `By the eccentricity classification, a hyperbola has ${EGT}.`,
          `<b>Concept link:</b> the discriminant test and the eccentricity scale agree: ${DISC} > 0 and ${EGT} are two languages for the same fact.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `A curve is given by 5${X2} − 4${XY} + 8${Y2} − 16${x} − 14${y} + 5 = 0. Determine its type, and explain why the ${XY} term does not change the answer.`,
        steps: [
          `Here <i>A</i> = 5, <i>B</i> = −4, <i>C</i> = 8. Compute<br>Δ = ${DISC}<br>= (−4)<sup>2</sup> − 4(5)(8)<br>= 16 − 160 = −144 < 0,<br>so the curve is an <b>ellipse</b>.`,
          `<b>Why the ${XY} term is harmless to classification:</b> a nonzero <i>B</i> tells us the ellipse is rotated relative to the coordinate axes, but ${DISC} is invariant under rotation of axes: rotating the frame changes <i>A</i>, <i>B</i>, and <i>C</i> individually yet leaves the combination ${DISC} fixed. Since rotation cannot turn an ellipse into a parabola or hyperbola, the invariant correctly reports “ellipse” regardless of orientation.`,
          `<b>Why it is “Advanced”:</b> the insight is recognising that the discriminant is a rotation <b>invariant</b>, so you may classify without the heavy work of actually rotating the axes to eliminate the ${XY} term.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A plane perpendicular to the axis of a cone (not through the vertex) makes what section? What if the plane passes through the vertex along the axis?',
            a: 'Circle; degenerate: a pair of intersecting straight lines (plane through vertex containing the axis).',
          },
          {
            q: `[JEE Main] Identify the conic 2${X2} + 2${Y2} + 5${x} − 3${y} + 1 = 0.`,
            a: `Equal ${X2}, ${Y2} coefficients, no ${XY} → circle.`,
          },
          {
            q: `[JEE Main] Identify the conic ${Y2} − 8${x} + 6${y} + 1 = 0 and give its eccentricity value.`,
            a: `Only ${Y2} present (no ${X2}) → parabola; ${E1}.`,
          },
          {
            q: `[JEE Main] Using the discriminant, classify ${X2} + 4${XY} + 4${Y2} + 3${x} − 2 = 0.`,
            a: `${DISC} = 16 − 4(1)(4) = 0 → parabola.`,
          },
          {
            q: `[JEE Advanced] For what relation between ${al} (semi-vertical angle) and ${be} (plane angle to axis) is the section a parabola, and why is it the unique boundary between the bounded and unbounded conics?`,
            a: `${BA}; it is the single angle at which the cutting plane is parallel to a generator, so the section can neither close (ellipse, ${be} > ${al}) nor reach the second nappe (hyperbola, ${be} < ${al}): the unique transition, mirroring ${E1} between ${ELT1} and ${EGT}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A section of a double cone that has <b>two</b> separate branches is a',
        opts: [
          { label: 'parabola', nudge: '<b>Trap (A):</b> the parabola is unbounded but has a single branch.' },
          { label: 'ellipse', nudge: '<b>Trap (B)</b>, <b>(D)</b>: both are closed, single curves on one nappe.' },
          { label: 'hyperbola', nudge: null },
          { label: 'circle', nudge: '<b>Trap (B)</b>, <b>(D)</b>: both are closed, single curves on one nappe.' },
        ],
        correct: 2,
        solution: 'Two branches appear only when the cutting plane is steep enough to slice <b>both nappes</b> of the double cone: the hyperbola.',
      },
      {
        t: 'mcq',
        q: `The conic 7${X2} + 7${Y2} + 2${x} − 9 = 0 is a`,
        opts: [
          { label: 'circle', nudge: null },
          { label: 'ellipse', nudge: '<b>Trap (B):</b> ellipse needs unequal same-sign coefficients.' },
          { label: 'parabola', nudge: '<b>Trap (C):</b> parabola needs one squared term missing.' },
          { label: 'hyperbola', nudge: '<b>Trap (D):</b> hyperbola needs opposite signs.' },
        ],
        correct: 0,
        solution: `Equal coefficients of ${X2} and ${Y2} with no ${XY} term is the circle signature.`,
      },
      {
        t: 'mcq',
        q: `For the general equation, ${DISC} = 0 indicates a`,
        opts: [
          { label: 'circle', nudge: `<b>Trap (A)</b>, <b>(B)</b>: both have ${DISC} < 0.` },
          { label: 'ellipse', nudge: `<b>Trap (A)</b>, <b>(B)</b>: both have ${DISC} < 0.` },
          { label: 'parabola', nudge: null },
          { label: 'hyperbola', nudge: '<b>Trap (D):</b> hyperbola is > 0.' },
        ],
        correct: 2,
        solution: 'A zero discriminant is the parabola condition: the boundary between negative (ellipse) and positive (hyperbola).',
      },
      {
        t: 'mcq',
        q: 'A plane passing through the vertex of a cone and tangent to it along a single generator produces a',
        opts: [
          { label: 'point', nudge: '<b>Trap (A):</b> a point arises when the plane meets the vertex only.' },
          { label: 'single straight line', nudge: null },
          {
            label: 'pair of lines',
            nudge: '<b>Trap (C):</b> a pair of lines needs the plane to cut through, crossing both nappes at the vertex.',
          },
          { label: 'parabola', nudge: '<b>Trap (D):</b> a parabola requires the plane to miss the vertex.' },
        ],
        correct: 1,
        solution: 'Touching along exactly one generator collapses the section to that <b>single straight line</b>: a degenerate conic.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting the degenerate cases.</b> “Plane through the vertex” never gives a normal curve: it gives a point, a line, or a pair of lines. Exams test this precisely because students skip it.',
          `<b>Confusing the parabola condition.</b> The parabola is ${BA} (plane parallel to a generator) and ${E1}: the single boundary, not a range. Many students lump it with the ellipse.`,
          `<b>Misreading “equal coefficients.”</b> A circle needs <i>A</i> = <i>C</i> and <i>B</i> = 0. Equal ${X2}, ${Y2} coefficients with an ${XY} term present are never a circle: they give a rotated ellipse only when ${DISC} < 0 (${X2} + 4${XY} + ${Y2} = 1 is a hyperbola).`,
          `<b>Trying to rotate before classifying.</b> You never need to remove the ${XY} term to name the curve: ${DISC} already tells you.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip.</b> Two five-second classifiers cover almost every question. From geometry: compare ${be} to ${al} (and check the vertex). From an equation: if there is no ${XY} term, just look at the signs of <i>A</i> and <i>C</i>: same and equal is a circle, same and unequal is an ellipse, one missing is a parabola, opposite is a hyperbola (when the curve is not degenerate); if there is an ${XY} term, fall back on the sign of ${DISC}.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'The family', note: `all four conics are slices of a double cone; the cut angle ${be} vs the cone angle ${al} decides which.` },
          {
            f: 'By angle',
            note: `${eq(be, '90°')} circle; ${al} < ${be} < 90° ellipse; ${BA} parabola; ${be}${NB}<${NB}${al} hyperbola.`,
          },
          { f: 'By eccentricity', note: `${e}${NB}→${NB}0 circle (the limit), ${ELT} ellipse, ${E1} parabola, ${EGT} hyperbola.` },
          { f: 'Degenerate (plane through vertex)', note: 'point, single line, or pair of intersecting lines.' },
          {
            f: 'General equation',
            note: `${CONIC}; discriminant ${DISC}:<br>< 0 ellipse, = 0 parabola, > 0 hyperbola; <i>A</i> = <i>C</i>, <i>B</i>${NB}=${NB}0 circle.`,
          },
        ],
        aids: [
          '“Same sign closes, opposite opens.”',
          `“Parabola is the hinge: ${BA}, ${E1}, <i>B</i><sup>2</sup> = 4<i>AC</i>.”`,
          '“Through the vertex means degenerate.”',
        ],
      },
    ],
  },

  // ──────────────── Topic 02 · pp. 903–909 ────────────────
  {
    n: '02',
    title: 'The Circle',
    kalam: 'Of all the conics, the circle is the one your hand already knows.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `The circle is the most heavily examined conic at CBSE Board level: expect 2–4 marks finding the equation, centre, or radius ${ESTIMATE}. JEE Main carries 1–2 questions, frequently the general-form centre/radius and the position of a point ${ESTIMATE}. JEE Advanced fuses it with tangent-length and locus reasoning. It is also the gentlest conic to master, which makes it the perfect launchpad for the rest of the chapter.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Of all the conics, the circle is the one your hand already knows. Tie a goat to a peg with a rope and let it wander, keeping the rope taut: it traces a perfect circle, because every point it can reach is the same distance, the rope’s length, from the peg. That is the entire idea. A <b>circle</b> is the set of all points that lie at one fixed distance, the <b>radius</b> <i>r</i>, from one fixed point, the <b>centre</b>. No “two foci,” no “ratio of distances”: just one centre, one distance, total symmetry.',
      },
      {
        t: 'p',
        html: `In the eccentricity language of the rest of this chapter, the circle is the calmest member of the family: ${E0}. It is the limiting ellipse whose two foci have drifted together into a single point at the centre. Where an ellipse is a squashed loop with a long and short axis, the circle is the ellipse that refused to squash: equally wide in every direction.`,
      },
      {
        t: 'p',
        html: 'Think about it this way… stand at the centre of a roundabout (a traffic circle) and walk outward a fixed number of steps, then turn and keep that same distance as you go around. Your footprints draw a circle. The moment you let the distance vary (longer on one side, shorter on the other), you are no longer walking a circle; you have started tracing an ellipse. The circle is the promise to never change your distance from the centre.',
      },
      {
        t: 'p',
        html: `Because the defining condition is so clean, the equation is too. If the centre sits at a point (<i>h</i>,${NB}<i>k</i>) and a moving point (${x},${NB}${y}) keeps its distance to the centre equal to <i>r</i>, then the distance formula says √((<i>x</i> − <i>h</i>)<sup>2</sup> + (<i>y</i> − <i>k</i>)<sup>2</sup>) = <i>r</i>, and squaring both sides gives the circle’s equation directly. Everything else about the circle is just this one statement, rearranged.`,
      },
      {
        t: 'p',
        html: 'There are two faces of the same equation you must be fluent in. The <b>standard form</b> wears its centre and radius openly: you can read them off at a glance. The <b>general form</b> hides them inside a tidy quadratic, and your job is to recover the centre and radius by completing the square. Recognising that these two forms are the same circle in different costumes is most of what this topic asks.',
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b><br>• <b>The radius must be positive and real.</b> In the general form ${GEN}, the quantity under the radius, ${GFC}, must be <b>positive</b> for a genuine circle. If it is zero, the “circle” shrinks to a single <b>point</b> (a point circle). If it is negative, there is <b>no real circle</b> at all: the equation describes an imaginary one.<br>• <b>Equal ${X2} and ${Y2} coefficients, no ${XY} term.</b> Any real circle has the coefficients of ${X2} and ${Y2} equal and no cross term. If they differ, it is not a circle (an ellipse if they have the same sign, a hyperbola if opposite signs, a parabola if one is zero).<br>• A circle has no foci, directrix, or eccentricity to compute (or rather ${E0} trivially): do not go looking for them.`,
      },

      { t: 'part', title: 'Key definitions and formulas' },
      {
        t: 'p',
        html: '<b>Definition.</b> A circle is the locus of a point that moves at a constant distance (radius <i>r</i>) from a fixed point (centre <i>C</i>).',
      },
      {
        t: 'formula',
        kicker: 'Standard equation of the circle',
        main: STD,
        legend: [`(<i>h</i>,${NB}<i>k</i>) = centre`, '<i>r</i> = radius'],
        note: null,
      },
      { t: 'p', html: `Centre at the origin reduces this to ${X2} + ${Y2} = <i>r</i><sup>2</sup>.` },
      {
        t: 'formula',
        kicker: 'General equation of the circle',
        main: `${GEN}<br>Centre = ${MGF},<br>Radius = ${RGFC}.`,
        legend: [`<i>g</i>, <i>f</i> = half the coefficients of ${x} and ${y}`, '<i>c</i> = the constant term'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Nature of the circle (from the general form)',
        main: `${GFC} > 0 ⇒ real circle,<br>${GFC} = 0 ⇒ point circle,<br>${GFC} < 0 ⇒ no real (imaginary) circle.`,
        legend: [`${GFC} = <i>r</i><sup>2</sup>, the square of the radius when positive`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Diameter form',
        main: `${DIAM}.`,
        legend: [`(${x1},${NB}${y1}) = one end of the diameter`, `(${x2},${NB}${y2}) = the other end`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Position of a point',
        main: `${S1} = <i>x</i><sub>1</sub><sup>2</sup> + <i>y</i><sub>1</sub><sup>2</sup> + 2<i>g</i>${x1} + 2<i>f</i>${y1} + <i>c</i><br>${S1} > 0 ⇒ outside,<br>${S1} = 0 ⇒ on the circle,<br>${S1} < 0 ⇒ inside.`,
        legend: [`${S1} = the value of the circle’s left side at ${P1} (the circle written with ${X2}, ${Y2} coefficients 1)`],
        note: null,
      },
      {
        t: 'p',
        html: `Then <i>P</i> lies <b>outside / on / inside</b> according as ${S1} is <b>positive / zero / negative</b>.`,
      },
      {
        t: 'formula',
        kicker: 'Length of the tangent',
        main: `${LT} = ${RS1} (${S1}${NB}>${NB}0)`,
        legend: [`${LT} = the tangent length from an external point ${P1}`, `${S1} = the value of the circle’s left side at ${P1}`],
        note: null,
      },

      { t: 'part', title: 'CBSE board derivation' },
      {
        t: 'p',
        html: `<b>Deriving the standard equation.</b> Let the centre be <i>C</i>(<i>h</i>,${NB}<i>k</i>) and let <i>P</i>(${x},${NB}${y}) be any point on the circle. The defining condition is that the distance <i>CP</i> equals the radius <i>r</i>:<br><i>CP</i> = <i>r</i> ⟹ √((<i>x</i> − <i>h</i>)<sup>2</sup> + (<i>y</i> − <i>k</i>)<sup>2</sup>) = <i>r</i>.<br>Both sides are non-negative, so squaring is reversible and introduces no false points:<br>${STD}.<br>That is the whole derivation: the circle’s equation is just the distance formula with the distance pinned to <i>r</i>.`,
      },
      {
        t: 'p',
        html: `<b>Recovering centre and radius from the general form (completing the square).</b> Start from<br>${GEN}.<br>Group the ${x}-terms and the ${y}-terms, then complete each square by adding and subtracting the needed constant:<br>(${X2} + 2<i>gx</i> + <i>g</i><sup>2</sup>) + (${Y2} + 2<i>fy</i> + <i>f</i><sup>2</sup>)<br>= ${GFC},<br>(<i>x</i> + <i>g</i>)<sup>2</sup> + (<i>y</i> + <i>f</i>)<sup>2</sup> = ${GFC}.<br>Compare this with the standard form ${STD}. Matching pieces:<br><i>h</i> = −<i>g</i>, <i>k</i> = −<i>f</i>, <i>r</i><sup>2</sup> = ${GFC}.<br>So the <b>centre is</b> ${MGF} and the <b>radius is</b> ${RGFC}. The reason the radius can fail to exist is now visible: <i>r</i><sup>2</sup> equals ${GFC}, and a real radius needs that to be positive.`,
      },
      {
        t: 'p',
        html: `<b>Why the diameter form works.</b> If <i>A</i> and <i>B</i> are the ends of a diameter and <i>P</i> is any other point on the circle, then the angle ∠<i>APB</i> is a right angle (angle in a semicircle). The two segments <i>PA</i> and <i>PB</i> are therefore perpendicular, so the product of their slopes is −1, and clearing that condition of fractions gives exactly<br>${DIAM}.<br>(The slopes fail if <i>PA</i> or <i>PB</i> is vertical; Pythagoras, <i>PA</i><sup>2</sup> + <i>PB</i><sup>2</sup> = <i>AB</i><sup>2</sup>, expands to twice the same left side and covers every point, <i>A</i> and <i>B</i> included.)`,
      },
      { t: 'fig', id: 'm11-10-fig-10.2' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: `Find the centre and radius of the circle ${X2} + ${Y2} − 6${x} + 8${y} − 11 = 0.`,
        steps: [
          `Compare with ${GEN}:<br>2<i>g</i> = −6 ⇒ <i>g</i> = −3,<br>2<i>f</i> = 8 ⇒ <i>f</i> = 4,<br><i>c</i> = −11.`,
          `Centre = ${MGF} = (3, −4). Radius = ${RGFC}<br>= √(9 + 16 − (−11))<br>= √36 = 6.`,
        ],
        ans: 'So the circle has centre (3, −4) and radius 6 units.',
      },
      {
        t: 'ex',
        tag: 'JEE Main, quick-elimination',
        q: 'Find the equation of the circle with the points <i>A</i>(1, 2) and <i>B</i>(5, 6) as the ends of a diameter.',
        steps: [
          `Use the diameter form directly, no need to find the centre and radius separately:<br>(${x} − 1)(${x} − 5) + (${y} − 2)(${y} − 6) = 0.`,
          `Expand:<br>${X2} − 6${x} + 5 + ${Y2} − 8${y} + 12 = 0<br>⇒ ${X2} + ${Y2} − 6${x} − 8${y} + 17 = 0.`,
          '<b>Speed note:</b> whenever a problem hands you the two ends of a diameter, the diameter form is one line; converting via midpoint-centre and half-distance-radius is three lines and more error-prone.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main, multi-concept',
        q: 'A circle has centre (2, −1) and passes through the point (5, 3). Find its equation, and determine whether the point (4, 2) lies inside, on, or outside it.',
        steps: [
          'The radius is the distance from centre to the given point:<br><i>r</i> = √((5 − 2)<sup>2</sup> + (3 − (−1))<sup>2</sup>)<br>= √(9 + 16) = 5.',
          `Equation: (${x} − 2)<sup>2</sup> + (${y} + 1)<sup>2</sup> = 25, i.e.<br>${X2} + ${Y2} − 4${x} + 2${y} − 20 = 0.`,
          `Test (4, 2) using ${S1}:<br>${S1} = 4<sup>2</sup> + 2<sup>2</sup> − 4(4) + 2(2) − 20<br>= 16 + 4 − 16 + 4 − 20<br>= −12 < 0.`,
          `A negative ${S1} means the point lies <b>inside</b> the circle.`,
          '<b>Concept link:</b> one problem ties the distance-as-radius idea, the standard-to-general conversion, and the position test together.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'Find the equation of the circle passing through the three points <i>O</i>(0, 0), <i>A</i>(6, 0), and <i>B</i>(0, 8), and hence the length of the tangent to it from the point <i>P</i>(7, 9).',
        steps: [
          `Let the circle be ${GEN} and substitute each point.`,
          `Through <i>O</i>(0, 0): <i>c</i> = 0. Through <i>A</i>(6, 0): 36 + 12<i>g</i> + <i>c</i> = 0 ⇒ 36 + 12<i>g</i> = 0 ⇒ <i>g</i> = −3. Through <i>B</i>(0, 8): 64 + 16<i>f</i> + <i>c</i> = 0 ⇒ 64 + 16<i>f</i> = 0 ⇒ <i>f</i> = −4. So the circle is<br>${X2} + ${Y2} − 6${x} − 8${y} = 0,<br>with centre (3, 4) and radius √(9 + 16 − 0) = 5. (Sensibly, <i>OA</i> and <i>OB</i> are perpendicular chords from the origin, so <i>AB</i> is a diameter, and indeed its midpoint (3, 4) is the centre, length <i>AB</i> = 10 = 2<i>r</i>. ✓)`,
          `Length of the tangent from <i>P</i>(7, 9):<br>${S1} = 7<sup>2</sup> + 9<sup>2</sup> − 6(7) − 8(9)<br>= 49 + 81 − 42 − 72 = 16,<br>${LT} = ${RS1} = √16 = 4 units.`,
          '<b>Why it is “Advanced”:</b> it chains the three-point method (solving for <i>g</i>, <i>f</i>, <i>c</i>), a geometric sanity check (recognising <i>AB</i> as a diameter), and the tangent-length formula, and the right-angle observation lets you verify the answer independently.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE] Find the centre and radius of ${X2} + ${Y2} + 4${x} − 10${y} + 13 = 0.`,
            a: 'Centre (−2, 5), radius √(4 + 25 − 13) = √16 = 4.',
          },
          {
            q: '[JEE Main] Find the equation of the circle with centre (−3, 2) and radius 4.',
            a: `(${x} + 3)<sup>2</sup> + (${y} − 2)<sup>2</sup> = 16, i.e. ${X2} + ${Y2} + 6${x} − 4${y} − 3 = 0.`,
          },
          {
            q: '[JEE Main] Find the equation of the circle having <i>A</i>(2, −3) and <i>B</i>(−2, 5) as the ends of a diameter.',
            a: `(${x} − 2)(${x} + 2) + (${y} + 3)(${y} − 5) = 0<br>⇒ ${X2} + ${Y2} − 2${y} − 19 = 0.`,
          },
          {
            q: `[JEE Main] Determine the position of the point (1, 1) with respect to the circle ${X2} + ${Y2} − 2${x} − 4${y} + 3 = 0.`,
            a: `${S1} = 1 + 1 − 2 − 4 + 3 = −1 < 0 → inside.`,
          },
          {
            q: '[JEE Advanced] Find the equation of the circle through (1, 0), (0, 1), and (2, 1), and the length of the tangent to it from the origin.',
            a: `Circle ${X2} + ${Y2} − 2${x} − 2${y} + 1 = 0 (centre (1, 1), radius 1); tangent length from origin = ${RS1} = √(0 + 0 − 0 − 0 + 1) = 1.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The centre of the circle ${X2} + ${Y2} + 8${x} − 6${y} + 9 = 0 is`,
        opts: [
          { label: '(8, −6)', nudge: `<b>Trap (A):</b> reading (2<i>g</i>,${NB}2<i>f</i>) directly.` },
          { label: '(−4, 3)', nudge: null },
          { label: '(4, −3)', nudge: `<b>Trap (C):</b> sign error, taking (<i>g</i>,${NB}<i>f</i>) instead of ${MGF}.` },
          { label: '(−8, 6)', nudge: `<b>Trap (D):</b> taking (−2<i>g</i>,${NB}−2<i>f</i>).` },
        ],
        correct: 1,
        solution: `2<i>g</i> = 8 ⇒ <i>g</i> = 4, 2<i>f</i> = −6 ⇒ <i>f</i> = −3; centre = ${MGF} = (−4, 3).`,
      },
      {
        t: 'mcq',
        q: `For ${X2} + ${Y2} − 4${x} − 6${y} + 13 = 0, the circle is`,
        opts: [
          { label: 'a real circle of radius √13', nudge: `<b>Trap (A):</b> √13 = √(<i>g</i><sup>2</sup> + <i>f</i><sup>2</sup>): the constant <i>c</i> was left out of ${GFC}.` },
          { label: 'a point circle', nudge: null },
          { label: 'imaginary', nudge: `<b>Trap (C):</b> imaginary needs ${GFC} < 0, not = 0.` },
          { label: 'a real circle of radius 2', nudge: '<b>Trap (D):</b> assuming a positive radius without checking.' },
        ],
        correct: 1,
        solution: `<i>g</i> = −2, <i>f</i> = −3, <i>c</i> = 13, so ${GFC} = 4 + 9 − 13 = 0 → radius 0, a <b>point circle</b> (just the point (2, 3)).`,
      },
      {
        t: 'mcq',
        q: 'The equation of the circle with (3, 4) and (−1, 2) as diameter ends is',
        opts: [
          { label: `${X2} + ${Y2} − 2${x} − 6${y} + 5 = 0`, nudge: null },
          { label: `${X2} + ${Y2} + 2${x} + 6${y} + 5 = 0`, nudge: '<b>Trap (B):</b> sign errors in the linear terms.' },
          { label: `${X2} + ${Y2} − 2${x} − 6${y} − 5 = 0`, nudge: '<b>Trap (C):</b> mis-adding the constant.' },
          { label: `${X2} + ${Y2} − 4${x} − 8${y} = 0`, nudge: `<b>Trap (D):</b> this circle has centre (2, 4) and passes through neither end: (3, 4) gives 9 + 16 − 12 − 32 = −19, not 0. Put an end point into each option; only the right circle passes through both.` },
        ],
        correct: 0,
        solution: `Diameter form: (${x} − 3)(${x} + 1) + (${y} − 4)(${y} − 2) = 0<br>⇒ ${X2} − 2${x} − 3 + ${Y2} − 6${y} + 8 = 0<br>⇒ ${X2} + ${Y2} − 2${x} − 6${y} + 5 = 0.`,
      },
      {
        t: 'mcq',
        q: `The length of the tangent from (0, 0) to the circle ${X2} + ${Y2} − 4${x} − 6${y} + 12 = 0 is`,
        opts: [
          { label: '2√3', nudge: null },
          {
            label: '√13',
            nudge: '<b>Trap (B):</b> √13 is the distance from the origin to the centre (2, 3), not the tangent length, which is √<i>c</i> = √12 here.',
          },
          { label: '2', nudge: `<b>Trap (C):</b> taking ${RS1} of a wrong ${S1}.` },
          { label: 'cannot be drawn', nudge: `<b>Trap (D):</b> a tangent <b>can</b> be drawn since ${S1}${NB}>${NB}0 (point outside).` },
        ],
        correct: 0,
        solution: `${S1} = 0 + 0 − 0 − 0 + 12 = 12 > 0 (so the origin is outside), and <i>ℓ</i> = √12 = 2√3.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>The centre sign.</b> From ${GEN} the centre is ${MGF}, not (<i>g</i>,${NB}<i>f</i>) and not (2<i>g</i>,${NB}2<i>f</i>). Halve the linear coefficients <b>and</b> flip the sign.`,
          `<b>Skipping the nature check.</b> Always confirm ${GFC} > 0 before announcing a radius: a zero gives a point circle and a negative gives no real circle.`,
          '<b>Forcing the general form when given a diameter.</b> If you have the two ends of a diameter, the one-line diameter form is faster and safer than computing centre and radius.',
          `<b>Mismatched coefficients.</b> A real circle must have equal coefficients of ${X2} and ${Y2} and no ${XY} term; if a problem’s ${X2} and ${Y2} coefficients are equal but not 1, divide through by that number first; if they differ, it is not a circle.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip.</b> Reduce every general-form circle (its ${X2}, ${Y2} coefficients made 1) to three numbers in one pass: <i>g</i> = ${fr('1', '2')}(coeff of ${x}), <i>f</i> = ${fr('1', '2')}(coeff of ${y}), then centre ${MGF} and radius ${RGFC}. And memorise the one expression ${S1}: plug a point into the circle’s left side; its <b>sign</b> places the point (out/on/in) and its <b>square root</b> is the tangent length. One quantity, two jobs.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Definition', note: `locus of points at fixed distance <i>r</i> (radius) from a fixed centre; eccentricity ${E0}.` },
          { f: 'Standard form', note: `${STD}; origin-centred ${X2} + ${Y2} = <i>r</i><sup>2</sup>.` },
          { f: 'General form', note: `${GEN}; centre ${MGF}, radius ${RGFC}.` },
          { f: 'Nature', note: `${GFC}: positive (real), zero (point circle), negative (imaginary).` },
          { f: 'Diameter form', note: `${DIAM}.` },
          { f: 'Point test & tangent', note: `${S1} sign gives out/on/in; tangent length = ${RS1}.` },
        ],
        aids: [
          '“Centre is minus-g, minus-f.”',
          `“Check ${GFC} before you trust the radius.”`,
          '“Same number plugged in: sign locates, root measures.”',
        ],
      },
    ],
  },
];
