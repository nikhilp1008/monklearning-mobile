import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Topics 04–06: the book's Subtopics 04 "Point of Intersection,
 * Concurrency & Family of Lines" (pp. 827–832), 05 "Angle Bisectors of Two
 * Lines" (pp. 833–838) and 06 "Foot of Perpendicular, Image & Reflection"
 * (pp. 839–845) of the Class 11 Mathematics Master Reference (October 2026
 * edition), word for word. Subtopic 07 starts on p. 846. Each subtopic's Exam
 * Relevance box is the "Exam relevance" part; Sections 1–8 are the next parts,
 * titled from the section's own name in sentence case.
 * Figures: 9.8 (caption p. 840, drawn p. 841) after Topic 06's Theorem 1, where
 * its caption is printed. No unnumbered drawings. The book's determinants are
 * written as their expansions (the reader cannot draw a determinant). Every
 * fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const sb = (b: string, s: string) => `<i>${b}</i><sub>${s}</sub>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const a = I('a');
const b = I('b');
const c = I('c');
const k = I('k');
const m = I('m');
const t = I('t');
const x = I('x');
const y = I('y');
const A = I('A');
const B = I('B');
const J = I('J');
const P = I('P');
const Q = I('Q');
const lam = I('λ');
const al = I('α');
const Pp = `${P}′`;
const a1 = sb('a', '1');
const a2 = sb('a', '2');
const a3 = sb('a', '3');
const b1 = sb('b', '1');
const b2 = sb('b', '2');
const b3 = sb('b', '3');
const c1 = sb('c', '1');
const c2 = sb('c', '2');
const c3 = sb('c', '3');
const ai = sb('a', I('i'));
const bi = sb('b', I('i'));
const ci = sb('c', I('i'));
const x0 = sb('x', '0');
const y0 = sb('y', '0');
const x1 = sb('x', '1');
const y1 = sb('y', '1');
const L1 = sb('L', '1');
const L2 = sb('L', '2');
const L3 = sb('L', '3');
const m1 = sb('m', '1');
const m2 = sb('m', '2');
const lamL2 = `<i>λL</i><sub>2</sub>`;
const FAM = `${L1} + ${lamL2}`;
const FAMILY = `${FAM} = 0`;
const J0 = `${J}(${x0}, ${y0})`;
const P1 = `${P}(${x1}, ${y1})`;
const LINE1 = `${a1}${x} + ${b1}${y} + ${c1}`;
const LINE2 = `${a2}${x} + ${b2}${y} + ${c2}`;
const LINEI = `${ai}${x} + ${bi}${y} + ${ci}`;
const D12 = `${a1}${b2} − ${a2}${b1}`;
const A1A2 = `${a1}${a2} + ${b1}${b2}`;
const DET = `det[${ai}${NB}${bi}${NB}${ci}]`;
const C12POS = `${c1}, ${c2}${NB}>${NB}0`;
const ELL = 'ℓ';
const LINE = `<i>ax</i> + <i>by</i> + ${c}`;
const ELL_EQ = `${ELL} ∶ ${LINE} = 0`;
const AX1 = `<i>ax</i><sub>1</sub> + <i>by</i><sub>1</sub> + ${c}`;
const SS = `${a}<sup>2</sup> + ${b}<sup>2</sup>`;
const SQ = `√(${SS})`;
const SQ1 = `√(${a1}<sup>2</sup> + ${b1}<sup>2</sup>)`;
const SQ2 = `√(${a2}<sup>2</sup> + ${b2}<sup>2</sup>)`;
const BIS = `${fr(LINE1, SQ1)} = ±${fr(LINE2, SQ2)}`;
const BIS_ABS = `${fr(`|${LINE1}|`, SQ1)} = ${fr(`|${LINE2}|`, SQ2)}`;
const BIS_PLUS = `${fr(LINE1, SQ1)} = +${fr(LINE2, SQ2)}`;
const RATIO = `${fr(`${x} − ${x1}`, a)} = ${fr(`${y} − ${y1}`, b)}`;
const RATIO_P = `${fr(`${x}′ − ${x1}`, a)} = ${fr(`${y}′ − ${y1}`, b)}`;
const FOOT_T = `−${fr(AX1, SS)}`;
const IMG_T = `−${fr(`2(${AX1})`, SS)}`;
const FOOT = `${RATIO} = ${FOOT_T}`;
const IMAGE = `${RATIO_P} = ${IMG_T}`;
const HALF = fr('1', '2');
const F25 = (n: string) => fr(n, '25');

export const TOPICS: Topic[] = [
  // ──────────────── Topic 04 · pp. 827–832 ────────────────
  {
    n: '04',
    title: 'Point of Intersection, Concurrency & Family of Lines',
    kalam: 'Two roads that aren’t parallel cross at exactly one junction.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A JEE staple ${ESTIMATE}. CBSE may ask the intersection point or a simple concurrency check (3–4 marks). JEE Main almost always carries a concurrency or family-of-lines question ${ESTIMATE}. JEE Advanced loves the <b>family trick</b> ${FAMILY}: it lets you write a line through an intersection without ever finding the intersection point, which is exactly the elegance examiners reward.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Two roads that aren’t parallel cross at exactly one junction. Finding that junction algebraically is just solving the two line equations together: the (${x}, ${y}) that satisfies both is the crossing point. That’s the whole idea of <b>point of intersection</b>.`,
      },
      {
        t: 'p',
        html: `Now scale up: when do three roads all meet at a single roundabout? That’s <b>concurrency</b>, and it’s a surprisingly common exam setup (“show the medians/altitudes meet at a point”) ${ESTIMATE}. You could find where two of them cross and then check the third passes through it, but there’s a slicker determinant test that does it in one shot.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> here’s the cleverest idea in the chapter. Suppose two lines ${L1} = 0 and ${L2} = 0 cross at a point ${J}. Consider the combination<br>${FAMILY}<br>for some number ${lam}. At the junction ${J}, both ${L1} and ${L2} are zero, so the combination is automatically zero too, meaning <b>every</b> such line passes through ${J}, no matter what ${lam} is! So ${FAMILY} is a “family” of all lines through the junction (one for each ${lam}). If you need the line through ${J} that also satisfies one more condition (passes through a given point, has a given slope, is perpendicular to something), just impose that condition to pin down ${lam}: you never have to compute ${J} itself. It feels like magic the first time.`,
      },
      {
        t: 'p',
        html: `<b>Domain of Validity & Edge Cases.</b><br>• Two lines have a <b>unique</b> intersection only when they’re not parallel: ${D12}${NB}≠${NB}0. If this is zero they’re parallel (no intersection) or coincident (infinitely many).<br>• The family ${FAMILY} captures every line through ${J} <b>except ${L2} = 0 itself</b> (you’d need ${lam} → ∞). If your answer might be ${L2}, check it separately.<br>• The concurrency determinant being zero is <b>necessary</b> for concurrency; the converse (determinant zero ⇒ concurrent) needs the lines not all parallel, so check that no two of them are parallel.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Point of intersection of two lines (Cramer’s rule)',
        main: `${x} = ${fr(`${b1}${c2} − ${b2}${c1}`, D12)}<br>${y} = ${fr(`${c1}${a2} − ${c2}${a1}`, D12)}<br>${D12}${NB}≠${NB}0`,
        legend: [
          `${a1}, ${b1}, ${c1} = the coefficients of the first line`,
          `${a2}, ${b2}, ${c2} = the coefficients of the second line`,
          `${x}, ${y} = the coordinates of the point of intersection`,
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Condition for two lines to be parallel / intersecting / coincident',
        main: `${fr(a1, a2)} = ${fr(b1, b2)} ≠ ${fr(c1, c2)} (parallel)<br>${fr(a1, a2)} ≠ ${fr(b1, b2)} (intersecting)<br>${fr(a1, a2)} = ${fr(b1, b2)} = ${fr(c1, c2)} (coincident)<br>(when a coefficient is 0, cross-multiply: parallel or coincident ⟺ ${a1}${b2} = ${a2}${b1})`,
        legend: [`${a1}, ${b1}, ${c1} = the coefficients of the first line`, `${a2}, ${b2}, ${c2} = the coefficients of the second line`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Concurrency of three lines',
        main: `they are concurrent if:<br>${a1}(${b2}${c3} − ${b3}${c2})<br>− ${b1}(${a2}${c3} − ${a3}${c2})<br>+ ${c1}(${a2}${b3} − ${a3}${b2}) = 0<br>(provided no two are parallel)`,
        legend: [
          `${a1}, ${b1}, ${c1} = the coefficients of the first line`,
          `${a2}, ${b2}, ${c2} = the coefficients of the second line`,
          `${a3}, ${b3}, ${c3} = the coefficients of the third line`,
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: `Family of lines through the intersection of ${L1} = 0 and ${L2} = 0`,
        main: `${FAMILY} (${lam} ∈ ℝ)<br>every line through their common point except ${L2} = 0`,
        legend: [`${L1}, ${L2} = the left sides of the two line equations`, `${lam} = any real number`],
        note: null,
      },

      { t: 'part', title: 'Theorems, proofs and standard derivations' },
      {
        t: 'p',
        html: `<b>Theorem 1: The family ${FAMILY} passes through the intersection</b><br><b>Given:</b> ${L1} ≡ ${LINE1} = 0 and ${L2} ≡ ${LINE2} = 0 meeting at ${J0}.<br><b>To Prove:</b> For every ${lam}, the line ${FAMILY} passes through ${J}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Since ${J} lies on both, ${L1}(${x0}, ${y0}) = 0 and ${L2}(${x0}, ${y0}) = 0. Then<br>${L1}(${x0}, ${y0}) + ${lamL2}(${x0}, ${y0})<br>= 0 + ${lam}${NB}·${NB}0 = 0,<br>so ${J} satisfies ${FAMILY} for every ${lam}. Because ${FAMILY} is itself first-degree (a line) whenever ${L1}, ${L2} are not parallel (as here, since they meet at ${J}), it is a line through ${J}. ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2: Concurrency determinant</b><br><b>Given:</b> three lines <i>L</i><sub><i>i</i></sub> ≡ ${LINEI} = 0, no two parallel.<br><b>To Prove:</b> they are concurrent ⟺ ${DET} = 0.`,
      },
      {
        t: 'p',
        html: `<b>Proof (sketch).</b> Let ${L1}, ${L2} meet at ${J0}. Concurrency means ${L3} also passes through ${J}, i.e. ${a3}${x0} + ${b3}${y0} + ${c3} = 0. The three statements ${ai}${x0} + ${bi}${y0} + ${ci} = 0 say the system<br>${a1}${x0} + ${b1}${y0} + ${c1} = 0<br>${a2}${x0} + ${b2}${y0} + ${c2} = 0<br>${a3}${x0} + ${b3}${y0} + ${c3} = 0<br>has the <b>nonzero</b> solution (${x0}, ${y0}, 1). A homogeneous system has a nonzero solution iff its coefficient determinant vanishes, giving det = 0. Conversely, if det = 0 the system has a nonzero solution (<i>u</i>, <i>v</i>, <i>w</i>); <i>w</i>${NB}≠${NB}0, or (<i>u</i>,\u00a0<i>v</i>) would be perpendicular to all three normals and the lines would all be parallel, so (${fr('<i>u</i>', '<i>w</i>')}, ${fr('<i>v</i>', '<i>w</i>')}) lies on all three. ■`,
      },
      { t: 'p', html: `To find the line through the intersection of ${L1} = 0, ${L2} = 0 satisfying one extra condition:` },
      {
        t: 'proc',
        title: 'Procedure: Using the family trick',
        steps: [
          `Write ${FAMILY} and expand into <i>Ax</i> + <i>By</i> + <i>C</i> = 0 form (coefficients now contain ${lam}).`,
          `Impose the extra condition (passes through a point ⇒ substitute it; given slope ⇒ set −${fr(A, B)} equal; perpendicular to a line ⇒ slope product = −1).`,
          `Solve for ${lam}, substitute back.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the point of intersection of 2${x} + 3${y} − 8 = 0 and ${x} − ${y} + 1 = 0.`,
        steps: [`From the second, ${x} = ${y} − 1. Substitute:<br>2(${y} − 1) + 3${y} − 8 = 0<br>⇒ 5${y} − 10 = 0 ⇒ ${y} = 2, ${x} = 1.`],
        ans: '(1,\u00a02)',
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: `Check whether the lines ${x} + ${y} − 2 = 0, 2${x} − ${y} − 1 = 0, and 4${x} − ${y} − 5 = 0 are concurrent.`,
        steps: [
          `<b>Speed approach.</b> Drop straight into the determinant of the rows (1, 1, −2), (2, −1, −1), (4, −1, −5); don’t solve two and test the third:<br>1[(−1)(−5) − (−1)(−1)]<br>− 1[2(−5) − (−1)(4)]<br>+ (−2)[2(−1) − (−1)(4)]<br>= 1[5 − 1] − 1[−10 + 4] − 2[−2 + 4]<br>= 4 − (−6) − 4 = 6${NB}≠${NB}0.`,
          'Determinant ≠ 0 ⇒ <b>not concurrent</b>.',
          '<b>The trap:</b> sign errors in the cofactor expansion. Anchor the alternating signs + − + across the top row and expand slowly; rushing the middle minor (the −1[…] term) is where most marks vanish.',
        ],
        ans: 'Not concurrent',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level · multi-concept',
        q: `Find the equation of the line passing through the intersection of ${x} + 2${y} − 5 = 0 and 3${x} − ${y} + 1 = 0 that also passes through the point (2,\u00a01), using the family method.`,
        steps: [
          `Family: (${x} + 2${y} − 5) + ${lam}(3${x} − ${y} + 1) = 0. Impose passage through (2,\u00a01):<br>(2 + 2 − 5) + ${lam}(6 − 1 + 1) = 0<br>⇒ (−1) + ${lam}(6) = 0 ⇒ ${lam} = ${fr('1', '6')}.`,
          `Substitute:<br>(${x} + 2${y} − 5) + ${fr('1', '6')}(3${x} − ${y} + 1) = 0<br>⇒ 6${x} + 12${y} − 30 + 3${x} − ${y} + 1 = 0<br>⇒ 9${x} + 11${y} − 29 = 0.`,
          'Notice we never computed the intersection point: that’s the payoff.',
        ],
        ans: `9${x} + 11${y} − 29 = 0`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `For what value of ${a} are the lines <i>ax</i> + 2${y} + 1 = 0, 2${x} + <i>ay</i> + 2 = 0, and ${x} + ${y} − 1 = 0 concurrent? (Find all real ${a}, and discard any that make two lines parallel.)`,
        steps: [
          `Set the determinant of the rows (${a}, 2, 1), (2, ${a}, 2), (1, 1, −1) to zero. Expand along the top row:<br>${a}[${a}(−1) − 2(1)]<br>− 2[2(−1) − 2(1)]<br>+ 1[2(1) − ${a}(1)] = 0`,
          `${a}[−${a} − 2] − 2[−2 − 2] + [2 − ${a}]<br>= −${a}<sup>2</sup> − 2${a} + 8 + 2 − ${a}<br>= −${a}<sup>2</sup> − 3${a} + 10 = 0.`,
          `So ${a}<sup>2</sup> + 3${a} − 10 = 0<br>⇒ (${a} + 5)(${a} − 2) = 0<br>⇒ ${a} = −5 or ${a} = 2.`,
          `<b>Parallel-check (the Advanced subtlety):</b> at ${a} = 2, the first two lines become 2${x} + 2${y} + 1 = 0 and 2${x} + 2${y} + 2 = 0: <b>parallel</b> (and distinct), so they never meet and concurrency is impossible; discard ${a} = 2 (the third line ${x} + ${y} − 1 = 0 is parallel to them too: three parallel lines, which is how the determinant vanished). At ${a} = −5 no two lines are parallel, so it is valid.`,
        ],
        ans: `${a} = −5`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the point of intersection of 3${x} − 2${y} − 1 = 0 and ${x} + 2${y} − 7 = 0.`,
            a: `(2, ${fr('5', '2')}).`,
          },
          {
            q: `<b>[CBSE]</b> Check whether ${x} + ${y} − 3 = 0, 2${x} − ${y} = 0, and ${x} − 2 = 0 are concurrent.`,
            a: `First two meet at (1,\u00a02); the third line ${x} = 2 does <b>not</b> pass through it ⇒ <b>not</b> concurrent.`,
          },
          {
            q: `<b>[JEE Main]</b> Using the family method, find the line through the intersection of 2${x} − 3${y} + 4 = 0 and ${x} + ${y} − 3 = 0 that is parallel to the ${x}-axis.`,
            a: `Family (2${x} − 3${y} + 4) + ${lam}(${x} + ${y} − 3) = 0; parallel to the ${x}-axis needs the ${x}-coefficient 2 + ${lam} = 0 ⇒ ${lam} = −2, giving −5${y} + 10 = 0, i.e. ${y} = 2.`,
          },
          {
            q: `<b>[JEE Main]</b> Find ${k} if the lines ${x} + ${y} − 1 = 0, 2${x} − ${y} + 3 = 0, and <i>kx</i> + ${y} + 1 = 0 are concurrent.`,
            a: `${k} = 4.`,
          },
          {
            q: `<b>[JEE Advanced]</b> Find the line through the intersection of ${x} + 2${y} + 3 = 0 and 3${x} + 4${y} + 7 = 0 that is perpendicular to ${x} − 2${y} + 5 = 0.`,
            a: `Intersection is (−1,\u00a0−1); perpendicular slope to ${x} − 2${y} + 5 = 0 (slope ${HALF}) is −2; line: 2${x} + ${y} + 3 = 0.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The lines ${LINE1} = 0 and ${LINE2} = 0 are parallel (and distinct) when:`,
        opts: [
          { label: `${D12}${NB}≠${NB}0`, nudge: '<b>(A)</b> is the intersecting condition.' },
          { label: `${fr(a1, a2)} = ${fr(b1, b2)} = ${fr(c1, c2)}`, nudge: '<b>(B)</b> is coincident.' },
          { label: `${fr(a1, a2)} = ${fr(b1, b2)} ≠ ${fr(c1, c2)}`, nudge: null },
          { label: `${A1A2} = 0`, nudge: '<b>(D)</b> is the perpendicular condition.' },
        ],
        correct: 2,
        solution: 'Equal direction ratios but a different constant ratio means parallel and distinct.',
      },
      {
        t: 'mcq',
        q: `Every member of the family (2${x} − ${y} + 1) + ${lam}(${x} + 3${y} − 2) = 0 passes through:`,
        opts: [
          { label: 'the origin', nudge: `<b>(A)</b> The origin would lie on every member only if it lay on both base lines; here 2(0) − 0 + 1 = 1${NB}≠${NB}0.` },
          { label: `the intersection of 2${x} − ${y} + 1 = 0 and ${x} + 3${y} − 2 = 0`, nudge: null },
          { label: '(1,\u00a01)', nudge: `<b>(C)</b> (1,\u00a01) is on neither base line (2 − 1 + 1 = 2 and 1 + 3 − 2 = 2), so it lies on just one member of the family (${lam} = −1), not on all.` },
          { label: 'no common point', nudge: '<b>(D)</b> contradicts the family theorem.' },
        ],
        correct: 1,
        solution: `By construction the family passes through the common point of the two base lines for every ${lam}.`,
      },
      {
        t: 'mcq',
        q: 'Three lines are concurrent if the determinant of their coefficients is zero, provided:',
        opts: [
          { label: 'all three pass through the origin', nudge: '<b>(A)</b> Lines through the origin all have <i>c</i> = 0, so the determinant is 0 and they do meet, at the origin; but that is one special case, not the proviso the test needs.' },
          { label: 'no two of them are parallel', nudge: null },
          { label: 'they have equal slopes', nudge: '<b>(C)</b> is the opposite of the proviso: three lines with equal slopes are parallel, make the determinant 0, and share no point.' },
          { label: 'one is vertical', nudge: '<b>(D)</b> A vertical line only has <i>b</i> = 0; it changes nothing in the determinant test.' },
        ],
        correct: 1,
        solution: 'A zero determinant is necessary for concurrency; to read it the other way (zero ⇒ concurrent) the test presumes no two lines are parallel, because three parallel lines also make it zero yet share no finite point.',
      },
      {
        t: 'mcq',
        q: `The point of intersection of ${x} − ${y} = 0 and ${x} + ${y} − 4 = 0 is:`,
        opts: [
          { label: '(2,\u00a02)', nudge: null },
          { label: '(0,\u00a04)', nudge: '<b>(B)</b> satisfies only the second line.' },
          { label: '(4,\u00a00)', nudge: '<b>(C)</b> satisfies only the second line.' },
          { label: '(2,\u00a0−2)', nudge: `<b>(D)</b> satisfies neither line (it gives ${x} − ${y} = 4 and ${x} + ${y} − 4 = −4).` },
        ],
        correct: 0,
        solution: `${x} = ${y} and ${x} + ${y} = 4 ⇒ 2${x} = 4 ⇒ ${x} = ${y} = 2.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Solving for the intersection when the family trick is faster.</b> If the question wants a line through an intersection plus one condition, use ${FAMILY} and skip finding the point.`,
          '<b>Forgetting the parallel-check after the concurrency determinant.</b> det = 0 is also satisfied when all three lines are parallel: verify no two lines are parallel.',
          `<b>The family misses ${L2} = 0.</b> ${FAMILY} can produce every line through the junction except ${L2} itself; test that case separately if needed.`,
          '<b>Sign errors in cofactor expansion.</b> Keep the + − + pattern explicit across the chosen row.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> When a problem says “line through the intersection of … and …”, reach for ${FAMILY} immediately. Finding the intersection point first is almost always the slower path and introduces extra arithmetic to slip on.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Intersection (Cramer)', note: `${x} = ${fr(`${b1}${c2} − ${b2}${c1}`, D12)}, ${y} = ${fr(`${c1}${a2} − ${c2}${a1}`, D12)}.` },
          {
            f: 'Parallel',
            note: `${fr(a1, a2)} = ${fr(b1, b2)} ≠ ${fr(c1, c2)}; <b>intersecting:</b> ${fr(a1, a2)} ≠ ${fr(b1, b2)}; <b>coincident:</b> all three ratios equal.`,
          },
          { f: 'Concurrency', note: `${DET} = 0 (no two parallel).` },
          { f: 'Family through a junction', note: `${FAMILY}.` },
        ],
        aids: ['“Both zero ⇒ sum zero”: why the family passes through the junction.', '“Determinant dies ⇒ they meet” (with the no-two-parallel caveat).'],
      },
    ],
  },

  // ──────────────── Topic 05 · pp. 833–838 ────────────────
  {
    n: '05',
    title: 'Angle Bisectors of Two Lines',
    kalam: 'The defining property is beautifully simple: a point lies on an angle bisector exactly when it is equidistant from the two original lines.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Rarely on CBSE, but a reliable JEE Main/Advanced topic ${ESTIMATE}, and the engine behind incentre/excentre problems. The signature exam skill is not writing the two bisector equations (easy) but <b>identifying which is which</b>: acute vs obtuse, and which bisector contains the origin or a given point. That identification is where the marks live.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'When two roads cross, they make four angles: two pairs of equal “opposite” angles. The <b>angle bisectors</b> are the two lines that split these angles exactly in half. Crucially, the two bisectors are always <b>perpendicular to each other</b> (they bisect supplementary angles), so once you have one, the other is at right angles to it.',
      },
      {
        t: 'p',
        html: 'The defining property is beautifully simple: a point lies on an angle bisector exactly when it is <b>equidistant</b> from the two original lines. (Think of standing where you’re the same perpendicular distance from both roads: that path is a bisector.) Since we already know the distance of a point from a line (Topic 03), setting the two distances equal gives the bisector equations directly.',
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> distance from a line is ${fr(`|${LINE}|`, SQ)}. “Equidistant from both lines” means<br>${BIS_ABS}.<br><br>Dropping the moduli introduces a ±, and that is the whole story: the <b>two</b> signs give the <b>two</b> bisectors. The hard part, and the part exams test, is deciding which sign corresponds to the acute-angle bisector, and which to the bisector through the origin.`,
      },
      {
        t: 'p',
        html: `<b>Domain of Validity & Edge Cases.</b><br>• The origin rule requires both equations written with <b>positive constant terms</b> ${C12POS} first (so neither line passes through the origin). Skip that normalization and the origin rule inverts on you. (The acute/obtuse reading by the sign of ${A1A2} picks the same line whichever signs you use, provided the “+” bisector is formed from the same equations.)<br>• If ${A1A2} = 0 the original lines are already perpendicular; both “angles” are 90° and the acute/obtuse distinction degenerates.<br>• The two bisectors are always mutually perpendicular: a free check on your answer.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Angle bisectors of two lines',
        main: BIS,
        legend: [`${a1}, ${b1}, ${c1} = the coefficients of the first line`, `${a2}, ${b2}, ${c2} = the coefficients of the second line`],
        note: null,
      },
      { t: 'p', html: `<b>Identification rules:</b> first rewrite both lines so that ${c1}${NB}>${NB}0 and ${c2}${NB}>${NB}0. Then:` },
      {
        t: 'table',
        title: null,
        head: ['Quantity', '“+” sign gives', '“−” sign gives'],
        rows: [
          ['Bisector of angle <b>containing the origin</b>', 'the + bisector', '–'],
          [`If ${A1A2} > 0`, '<b>obtuse</b>-angle bisector', 'acute-angle bisector'],
          [`If ${A1A2} < 0`, '<b>acute</b>-angle bisector', 'obtuse-angle bisector'],
        ],
      },
      {
        t: 'p',
        html: `So with ${C12POS}: the <b>origin-containing</b> bisector is always the “+” one; whether that is the acute or obtuse bisector is decided by the sign of ${A1A2}.`,
      },
      { t: 'p', html: `<b>Mutual perpendicularity:</b> the two bisectors are always perpendicular: ${m}<sub><i>b</i>₁</sub>${NB}${m}<sub><i>b</i>₂</sub> = −1 when both have slopes (if one is vertical, the other is horizontal).` },

      { t: 'part', title: 'Theorems, proofs and standard derivations' },
      {
        t: 'p',
        html: `<b>Theorem 1: The bisector locus</b><br><b>Given:</b> intersecting lines ${L1} ∶ ${LINE1} = 0 and ${L2} ∶ ${LINE2} = 0.<br><b>To Prove:</b> the locus of points equidistant from ${L1} and ${L2} is<br>${BIS}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> A point ${P}(${x}, ${y}) is equidistant from the two lines iff<br>${BIS_ABS}<br><br>by the point–line distance formula (Topic 03). Removing the moduli, two cases arise (the expressions equal or are negatives of each other), which is exactly the ±. Each sign yields a first-degree equation, hence a line; together they are the two bisectors. ■`,
      },
      {
        t: 'proc',
        title: 'Procedure: Identifying the origin-containing bisector',
        steps: [
          'Rewrite both lines so the constant terms are <b>positive</b> (multiply an equation by −1 if needed).',
          `Form ${BIS_PLUS}: this is the bisector of the angle <b>containing the origin</b>.`,
          `To label acute vs obtuse, compute ${A1A2} (with the positive-${c} forms): if it is > 0, the “+” bisector is the <b>obtuse</b> one; if < 0, the “+” bisector is the <b>acute</b> one.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Why positive constants matter:</b> the side of a line on which the origin lies is encoded in the sign of the constant term; forcing ${C12POS} pins the origin to the “positive” side of both, which is what makes the “+” sign correspond to the origin’s angle.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the equations of the bisectors of the angles between 3${x} − 4${y} + 7 = 0 and 5${x} + 12${y} − 2 = 0.`,
        steps: [
          `Here √(3<sup>2</sup> + 4<sup>2</sup>) = 5 and √(5<sup>2</sup> + 12<sup>2</sup>) = 13. The bisectors:<br>${fr(`3${x} − 4${y} + 7`, '5')} = ±${fr(`5${x} + 12${y} − 2`, '13')}.`,
          `Cross-multiply (take “+” first): 13(3${x} − 4${y} + 7) = 5(5${x} + 12${y} − 2)<br>39${x} − 52${y} + 91 = 25${x} + 60${y} − 10<br>⇒ 14${x} − 112${y} + 101 = 0.`,
          `“−” sign: 13(3${x} − 4${y} + 7) = −5(5${x} + 12${y} − 2)<br>⇒ 39${x} − 52${y} + 91 = −25${x} − 60${y} + 10`,
        ],
        ans: `14${x} − 112${y} + 101 = 0 and 64${x} + 8${y} + 81 = 0`,
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: `For the lines 4${x} + 3${y} − 6 = 0 and 5${x} + 12${y} + 9 = 0, find the bisector of the angle that contains the origin, quickly.`,
        steps: [
          `<b>Speed approach.</b> First make both constants positive. The first has ${c} = −6 < 0, so multiply by −1: −4${x} − 3${y} + 6 = 0. The second already has ${c} = +9 > 0. Now take the “+” bisector:<br>${fr(`−4${x} − 3${y} + 6`, '5')} = +${fr(`5${x} + 12${y} + 9`, '13')}.`,
          `13(−4${x} − 3${y} + 6) = 5(5${x} + 12${y} + 9)<br>⇒ −52${x} − 39${y} + 78 = 25${x} + 60${y} + 45<br>⇒ 77${x} + 99${y} − 33 = 0,<br>i.e. 7${x} + 9${y} − 3 = 0.`,
          `<b>The trap:</b> using the lines as given (with ${c} = −6) and taking “+” gives the wrong bisector: the rule only works after both constants are made positive. Forgetting that normalization is the single most common error here.`,
        ],
        ans: `7${x} + 9${y} − 3 = 0`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level · multi-concept',
        q: `For ${x} + ${y} − 2 = 0 and 7${x} − ${y} + 3 = 0 (after suitable normalization), identify the acute-angle bisector.`,
        steps: [
          `Make constants positive: rewrite the first as −${x} − ${y} + 2 = 0 (${c} = 2 > 0); the second has ${c} = 3 > 0. Now<br>${A1A2} = (−1)(7) + (−1)(−1)<br>= −7 + 1 = −6 < 0.`,
          `By the rule, with constants positive and ${A1A2} < 0, the <b>“+” sign gives the acute bisector.</b><br>${fr(`−${x} − ${y} + 2`, '√2')} = +${fr(`7${x} − ${y} + 3`, '√50')}.`,
          `Since √50 = 5√2: multiply both sides by 5√2: 5(−${x} − ${y} + 2) = 7${x} − ${y} + 3<br>⇒ −5${x} − 5${y} + 10 = 7${x} − ${y} + 3`,
        ],
        ans: `Acute-angle bisector: 12${x} + 4${y} − 7 = 0`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'The bisectors of the angles between two lines are mutually perpendicular. Verify this for the bisectors found in the first worked example of this topic, and explain why it must always hold.',
        steps: [
          `The first worked example gave 14${x} − 112${y} + 101 = 0 (slope ${m1} = ${fr('14', '112')} = ${fr('1', '8')}) and 64${x} + 8${y} + 81 = 0 (slope ${m2} = −${fr('64', '8')} = −8). Then<br>${m1}${m2} = ${fr('1', '8')} × (−8) = −1,<br>confirming perpendicularity.`,
          `<b>Why it must hold:</b> the two bisectors split the two supplementary angles formed at the crossing. If one angle is 2${al}, the other is 2(90° − ${al}), and their half-lines differ in direction by exactly 90°. So the internal and external bisectors of any pair of intersecting lines are always perpendicular: a structural fact, not a coincidence, and a free sanity check on every bisector computation.`,
        ],
        ans: `Always perpendicular (${m1}${m2} = −1 when both slopes exist)`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Write the pair of bisector equations for 3${x} + 4${y} − 5 = 0 and 5${x} − 12${y} + 1 = 0 (set-up only; leave in ± form simplified).`,
            a: `${fr(`3${x} + 4${y} − 5`, '5')} = ±${fr(`5${x} − 12${y} + 1`, '13')}.`,
          },
          {
            q: `<b>[JEE Main]</b> Find the bisector of the angle containing the origin for ${x} − 2${y} + 1 = 0 and 2${x} + ${y} − 3 = 0.`,
            a: `Make constants positive (${x} − 2${y} + 1 = 0 has ${c} = 1 > 0; rewrite −2${x} − ${y} + 3 = 0): “+” gives<br>${fr(`${x} − 2${y} + 1`, '√5')} = ${fr(`−2${x} − ${y} + 3`, '√5')}<br>⇒ 3${x} − ${y} − 2 = 0.`,
          },
          {
            q: `<b>[JEE Main]</b> For 3${x} − 4${y} + 1 = 0 and 12${x} + 5${y} − 2 = 0, determine whether the origin lies in the acute or obtuse angle.`,
            a: `${A1A2} = −16 < 0 (line 2 rewritten as −12${x} − 5${y} + 2 = 0) ⇒ origin in acute angle.`,
          },
          {
            q: `<b>[JEE Main]</b> Verify that the two bisectors of ${x} + ${y} = 0 and ${x} − ${y} = 0 are the coordinate axes.`,
            a: `The bisectors are ${x} = 0 and ${y} = 0 (the axes).`,
          },
          {
            q: `<b>[JEE Advanced]</b> Find the incentre-relevant bisector: the bisector of the angle between 4${x} + 3${y} = 0 and 3${x} + 4${y} = 0 that lies in the first quadrant.`,
            a: `By symmetry the first-quadrant bisector is ${x} = ${y} (i.e. ${x} − ${y} = 0).`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A point lies on an angle bisector of two lines if and only if it is:',
        opts: [
          { label: 'equidistant from the two lines', nudge: null },
          { label: 'on the line joining their intersection to the origin', nudge: '<b>(B)</b> The line from the crossing point to the origin is a bisector only by accident; most of its points are at different distances from the two lines.' },
          { label: 'the midpoint of the lines', nudge: '<b>(C)</b> Lines have no midpoint; the only point common to both is the crossing point.' },
          { label: 'at the centroid', nudge: '<b>(D)</b> Two lines make no triangle, so there is no centroid, and a single point cannot be a locus.' },
        ],
        correct: 0,
        solution: 'The bisector is precisely the equidistant locus.',
      },
      {
        t: 'mcq',
        q: 'The two angle bisectors of a pair of intersecting lines are always:',
        opts: [
          { label: 'parallel', nudge: '<b>(A)</b> is impossible: the two bisectors pass through the same crossing point and differ in direction by 90°, so they can never be parallel.' },
          { label: 'perpendicular', nudge: null },
          { label: 'coincident', nudge: '<b>(C)</b> is impossible: two lines at 90° to each other cannot coincide.' },
          { label: 'at 45°', nudge: '<b>(D)</b> holds only for a special angle, not in general.' },
        ],
        correct: 1,
        solution: 'They bisect supplementary angles, so their directions differ by 90°.',
      },
      {
        t: 'mcq',
        q: 'To use the standard rule that the “+” bisector contains the origin, you must first:',
        opts: [
          { label: 'make both lines pass through the origin', nudge: `<b>(A)</b> cannot be done by rewriting an equation, and with ${c1} = ${c2} = 0 the origin lies on both lines, so no angle contains it.` },
          { label: 'make both constant terms positive', nudge: null },
          { label: 'make both slopes positive', nudge: '<b>(C)</b> The slopes play no part: the rule reads only the signs of the constant terms.' },
          { label: 'normalize to unit slope', nudge: '<b>(D)</b> Changing the slopes would change the lines; only the constant terms need fixing.' },
        ],
        correct: 1,
        solution: `The sign rules assume ${C12POS}.`,
      },
      {
        t: 'mcq',
        q: `For two lines written with positive constants, ${A1A2} < 0. Then the “+” bisector is the:`,
        opts: [
          { label: 'obtuse-angle bisector', nudge: `<b>(A)</b> is the case ${A1A2} > 0.` },
          { label: 'acute-angle bisector', nudge: null },
          { label: 'perpendicular from origin', nudge: '<b>(C)</b> The perpendicular from the origin measures distance to one line; it does not split the angle between the two.' },
          { label: 'line at infinity', nudge: '<b>(D)</b> Both bisectors are ordinary lines through the crossing point; nothing here is at infinity.' },
        ],
        correct: 1,
        solution: `With positive constants, ${A1A2} < 0 ⇒ “+” is the acute bisector.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Skipping the positive-constant normalization.</b> The origin rule assumes ${C12POS}, and normalizing first keeps the acute/obtuse reading on the same equations. Normalize first, every time.`,
          `<b>Confusing the acute/obtuse rule’s direction.</b> With positive constants: ${A1A2} > 0 ⇒ “+” is obtuse; < 0 ⇒ “+” is acute. Write it down before deciding.`,
          `<b>Forgetting the perpendicularity check.</b> Your two bisectors must be perpendicular (${m1}${m2} = −1, or one vertical and one horizontal); if they aren’t, there’s an arithmetic error.`,
          `<b>Mismatching denominators.</b> Each line gets its own ${SQ}; don’t share one denominator across both.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> The origin-containing bisector is the “+” one after making constants positive: memorise that single anchor, then use ${A1A2} only when the question specifically asks acute vs obtuse. Don’t compute everything; compute what’s asked.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Pair of bisectors', note: `${BIS}.` },
          { f: 'Normalize first', note: `make ${C12POS}.` },
          { f: 'Origin’s bisector', note: 'the “+” sign.' },
          { f: 'Acute/obtuse', note: `with ${C12POS}: ${A1A2} > 0 ⇒ “+” obtuse; < 0 ⇒ “+” acute.` },
          { f: 'Always', note: `the two bisectors are perpendicular (${m1}${m2} = −1 when both slopes exist).` },
        ],
        aids: ['“Equidistant = on the bisector.”', '“Positive constants first, then plus is the origin’s side.”', '“Bisectors cross at right angles” (free check).'],
      },
    ],
  },

  // ──────────────── Topic 06 · pp. 839–845 ────────────────
  {
    n: '06',
    title: 'Foot of Perpendicular, Image & Reflection',
    kalam: 'The whole topic is “how far along the normal do I move?”, with the answer being one step for the foot and two for the mirror image.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A high-frequency JEE topic and a CBSE favourite for 3–4 mark problems (“find the image of the point…”) ${ESTIMATE}. JEE Main reliably tests the image/foot formulas directly ${ESTIMATE}; JEE Advanced embeds them in reflection-of-a-line, shortest-path, and optics-style problems. The reflection-in-${y}${NB}=${NB}${x} shortcut also appears constantly in functions and inverse-function questions ${ESTIMATE}, so it pays off well beyond this chapter.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Stand at a point ${P} and shine a torch straight at a wall (the line). The spot where the beam hits perpendicularly is the <b>foot of the perpendicular</b>: the closest point on the line to ${P}. Walk an equal distance past the wall along the same beam and you reach the <b>image</b> (mirror reflection) of ${P}, exactly as your reflection in a mirror sits as far behind the glass as you stand in front.`,
      },
      {
        t: 'p',
        html: `That single picture gives both results: the foot ${Q} is the midpoint between ${P} and its image ${Pp}, and <i>PP</i>′ is perpendicular to the line. So the foot is “halfway to the image,” and the image is “twice as far as the foot.” Everything in this topic is that one idea, turned into formulas.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> the line ${LINE} = 0 has normal direction (${a}, ${b}). To go from ${P} to the foot, you step from ${P} along the normal just far enough to land on the line. The amount you must step is governed by ${fr(AX1, SS)}: the same numerator ${AX1} that measured distance in Topic 03 (there inside a modulus and over ${SQ}), now repurposed as a step size. Step it once to reach the foot; step it twice to reach the image. The whole topic is “how far along the normal do I move?”, with the answer being one step for the foot and two for the mirror image.`,
      },
      {
        t: 'p',
        html: `<b>Domain of Validity & Edge Cases.</b><br>• The formulas assume the line in general form ${LINE} = 0; convert first if it’s in slope form.<br>• For the special mirrors ${y} = ${x}, ${x}-axis, ${y}-axis, use the swap/sign shortcuts: far faster than the general formula.<br>• Reflecting a line in a line: reflect two points of it (or use the foot/image machinery on a general point) and rejoin; don’t guess at the image’s coefficients (substituting the reflection map into the equation does work: Additional topic F, Route C).`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: `Let ${P1} and the line ${ELL_EQ}.` },
      {
        t: 'formula',
        kicker: `Foot of the perpendicular ${Q}(${x},${NB}${y}) from ${P} to ${ELL}`,
        main: `${FOOT}<br><br>${x} = ${x1} − ${fr(`${a}(${AX1})`, SS)}<br><br>${y} = ${y1} − ${fr(`${b}(${AX1})`, SS)}`,
        legend: [`${x1}, ${y1} = the coordinates of ${P}`, `${a}, ${b}, ${c} = the coefficients of ${ELL}`, `${x}, ${y} = the coordinates of the foot ${Q}`],
        note: null,
      },
      {
        t: 'formula',
        kicker: `Image (reflection) ${Pp}(${x}′,${NB}${y}′) of ${P} in ${ELL}`,
        main: `${IMAGE}<br><br>${x}′ = ${x1} − ${fr(`2${a}(${AX1})`, SS)}<br><br>${y}′ = ${y1} − ${fr(`2${b}(${AX1})`, SS)}`,
        legend: [`${x1}, ${y1} = the coordinates of ${P}`, `${a}, ${b}, ${c} = the coefficients of ${ELL}`, `${x}′, ${y}′ = the coordinates of the image ${Pp}`],
        note: null,
      },
      { t: 'p', html: `<b>Relationship:</b> the foot ${Q} is the midpoint of ${P} and ${Pp}.` },
      {
        t: 'formula',
        kicker: 'Special mirrors (shortcuts)',
        main: `in ${y} = ${x}: (${x}, ${y}) → (${y}, ${x})<br>in ${x}-axis: (${x}, ${y}) → (${x}, −${y})<br>in ${y}-axis: (${x}, ${y}) → (−${x}, ${y})`,
        legend: [`(${x}, ${y}) = the point being reflected`],
        note: null,
      },
      { t: 'p', html: '<b>Reflection of a line in a line:</b> reflect any two of its points and join the images (the reflected line).' },

      { t: 'part', title: 'Theorems, proofs and standard derivations' },
      {
        t: 'p',
        html: `<b>Theorem 1: Foot of the perpendicular</b><br><b>Given:</b> point ${P1} and line ${ELL_EQ}.<br><b>To Prove:</b> the foot ${Q} satisfies<br>${FOOT}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> The segment <i>PQ</i> is perpendicular to ${ELL}, so it points along the normal (${a}, ${b}). Hence ${Q} = (${x1} + <i>ta</i>, ${y1} + <i>tb</i>) for some scalar ${t}. Since ${Q} lies on ${ELL}:<br>${a}(${x1} + <i>ta</i>) + ${b}(${y1} + <i>tb</i>) + ${c} = 0<br>⇒ (${AX1}) + ${t}(${SS}) = 0<br>⇒ ${t} = ${FOOT_T}.<br><br>Substituting this ${t} gives the stated coordinates, and ${RATIO} = ${t}. ■`,
      },
      { t: 'fig', id: 'm11-09-fig-9.8' },
      {
        t: 'p',
        html: `<b>Theorem 2: Image of a point</b><br><b>Given:</b> the same ${P} and ${ELL}, with foot ${Q}.<br><b>To Prove:</b> the image ${Pp} uses the parameter 2${t}, i.e.<br>${IMAGE}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> ${Q} is the midpoint of ${P} and ${Pp}, so ${Pp} = 2${Q} − ${P}. With ${Q} = ${P} + ${t}(${a}, ${b}) from Theorem 1,<br>${Pp} = 2(${P} + ${t}(${a}, ${b})) − ${P}<br>= ${P} + 2${t}(${a}, ${b}).<br><br>Thus ${Pp} uses parameter 2${t} = ${IMG_T}, exactly double the foot’s step. ■`,
      },
      {
        t: 'proc',
        title: 'Procedure: Reflecting a line m in a line ℓ',
        steps: [
          `Pick two convenient points on ${m} (e.g. its intercepts).`,
          `Find the image of each in ${ELL} using Theorem 2.`,
          `The line through the two image points is the reflection of ${m}. (Shortcut: the reflection of ${m} also passes through ${m} ∩ ${ELL} if they intersect, so one image point plus that intersection suffices.)`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the foot of the perpendicular from ${P}(2,\u00a03) to the line ${x} + ${y} − 1 = 0.`,
        steps: [
          `Here ${a} = 1, ${b} = 1, ${c} = −1; ${AX1} = 2 + 3 − 1 = 4; ${SS} = 2. The step ${t} = −${fr('4', '2')} = −2.`,
          `${Q} = (2 + (−2)(1), 3 + (−2)(1))`,
        ],
        ans: `${Q} = (0,\u00a01)`,
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: `Find the image of the point (4,\u00a0−1) in the line ${y} = ${x}.`,
        steps: [
          `<b>Speed approach.</b> Don’t grind the general formula: ${y} = ${x} is a special mirror, so just <b>swap</b> the coordinates:<br>(4,\u00a0−1) → (−1,\u00a04).`,
          `<b>The trap:</b> plugging into the general image formula with ${a} = 1, ${b} = −1, ${c} = 0 works but wastes a minute and invites a sign error. Recognise ${y} = ${x}, ${x}-axis, ${y}-axis on sight and use swap/negate. (For ${y} = ${x}: swap; for ${x}-axis: negate ${y}; for ${y}-axis: negate ${x}.)`,
        ],
        ans: '(−1,\u00a04)',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level · multi-concept',
        q: `Find the image of ${P}(1,\u00a01) in the line 3${x} − 4${y} + 5 = 0, then verify it is as far behind the line as ${P} is in front.`,
        steps: [
          `${a} = 3, ${b} = −4, ${c} = 5; ${AX1} = 3 − 4 + 5 = 4, ${SS} = 25. The step parameter is ${t} = −${F25('4')}, so the image uses 2${t} = −${F25('8')} (Theorem 2).`,
          `Hence ${Pp} = ${P} + 2${t}(${a}, ${b}):<br>${Pp} = (1 − ${F25('8')}(3), 1 − ${F25('8')}(−4))<br>= (1 − ${F25('24')}, 1 + ${F25('32')})<br>= (${F25('1')}, ${F25('57')}).`,
          `Distance of ${P} from the line: ${fr('|4|', '5')} = 0.8; distance of ${Pp} (top and bottom × 25):<br>${fr('|3(1) − 4(57) + 5(25)|', '25 × 5')}<br><br>= ${fr('|3 − 228 + 125|', '125')}<br>= ${fr('|−100|', '125')} = ${fr('4', '5')} = 0.8. ✓ Equal distances, opposite sides.`,
        ],
        ans: `${Pp} = (${F25('1')}, ${F25('57')})`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `A ray of light along the line ${x} − 2${y} + 5 = 0 strikes the mirror 3${x} − 4${y} + 4 = 0. Find the equation of the reflected ray. (Use the image method: the reflected ray passes through the point of incidence and through the image of any point of the incident ray.)`,
        steps: [
          `<b>Point of incidence</b> = intersection of the two lines. Solve ${x} − 2${y} + 5 = 0 and 3${x} − 4${y} + 4 = 0: from the first ${x} = 2${y} − 5; substitute:<br>3(2${y} − 5) − 4${y} + 4 = 0<br>⇒ 2${y} − 11 = 0 ⇒ ${y} = ${fr('11', '2')}, ${x} = 6.<br><br>So the incidence point is <i>I</i>(6, ${fr('11', '2')}).`,
          `<b>Take a point on the incident ray</b>, say where it’s convenient, at ${y} = 0: ${x} = −5, giving ${A}(−5,\u00a00). Reflect ${A} in the mirror 3${x} − 4${y} + 4 = 0 (${a} = 3, ${b} = −4, ${c} = 4):<br><i>aA</i><sub><i>x</i></sub> + <i>bA</i><sub><i>y</i></sub> + ${c} = −15 − 0 + 4 = −11; ${SS} = 25; step = −${F25('2(−11)')} = ${F25('22')}.<br><br>${A}′ = (−5 + ${F25('22')}(3), 0 + ${F25('22')}(−4))<br>= (−5 + ${F25('66')}, −${F25('88')})<br>= (−${F25('59')}, −${F25('88')}).`,
          `<b>Reflected ray</b> = line through <i>I</i>(6, ${fr('11', '2')}) and ${A}′(−${F25('59')}, −${F25('88')}). Slope: the ${y}-coordinates differ by ${fr('11', '2')} + ${F25('88')} = ${fr('275 + 176', '50')} = ${fr('451', '50')},<br><br>the ${x}-coordinates by 6 + ${F25('59')} = ${fr('150 + 59', '25')} = ${F25('209')},<br><br>so ${m} = ${fr('451', '50')}${NB}·${NB}${fr('25', '209')} = ${fr('451', '418')} = ${fr('41', '38')}.`,
          `Equation through <i>I</i>: ${y} − ${fr('11', '2')} = ${fr('41', '38')}(${x} − 6), i.e.<br>38(${y} − ${fr('11', '2')}) = 41(${x} − 6)<br>⇒ 41${x} − 38${y} − 37 = 0.`,
          '<b>The method in one line:</b> the reflected ray is the line joining the incidence point to the image of any incident-ray point; reflection turns an optics problem into two coordinate computations.',
        ],
        ans: `41${x} − 38${y} − 37 = 0`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `<b>[CBSE]</b> Find the foot of the perpendicular from (3,\u00a08) to the ${x}-axis.`, a: '(3,\u00a00).' },
          { q: `<b>[CBSE]</b> Find the image of (2,\u00a05) in the ${y}-axis.`, a: '(−2,\u00a05).' },
          {
            q: `<b>[JEE Main]</b> Find the foot of the perpendicular from (1,\u00a02) to the line 4${x} − 3${y} − 1 = 0.`,
            a: `${AX1} = 4 − 6 − 1 = −3, ${SS} = 25, ${t} = ${F25('3')} ⇒ foot (1 + ${F25('12')}, 2 − ${F25('9')})<br>= (${F25('37')}, ${F25('41')}).`,
          },
          {
            q: `<b>[JEE Main]</b> Find the image of (3,\u00a04) in the line ${x} + ${y} = 0.`,
            a: `In ${x} + ${y} = 0, the image of (${x}, ${y}) is (−${y}, −${x}), so (3,\u00a04) → (−4,\u00a0−3).`,
          },
          {
            q: `<b>[JEE Advanced]</b> Find the reflection of the line 2${x} − ${y} + 3 = 0 in the line ${y} = ${x}.`,
            a: `Reflecting in ${y} = ${x} swaps ${x} ↔ ${y} in the equation: 2${y} − ${x} + 3 = 0 ⇒ ${x} − 2${y} − 3 = 0.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The foot of the perpendicular is related to the image by: the foot is',
        opts: [
          { label: 'twice the image', nudge: '<b>(A)</b> reverses the relationship.' },
          { label: 'the midpoint of the point and its image', nudge: null },
          { label: 'the same as the image', nudge: `<b>(C)</b> holds only if ${P} is on the line.` },
          { label: 'unrelated', nudge: '<b>(D)</b> They are tied exactly: the foot is always the midpoint of the point and its image.' },
        ],
        correct: 1,
        solution: `${Q} is the midpoint of ${P} and ${Pp}: the image is twice as far along the normal.`,
      },
      {
        t: 'mcq',
        q: `The image of (${a}, ${b}) in the line ${y} = ${x} is:`,
        opts: [
          { label: `(${b}, ${a})`, nudge: null },
          { label: `(−${a}, ${b})`, nudge: `<b>(B)</b> is reflection in the ${y}-axis.` },
          { label: `(${a}, −${b})`, nudge: `<b>(C)</b> is reflection in the ${x}-axis.` },
          { label: `(−${b}, −${a})`, nudge: `<b>(D)</b> is reflection in ${y} = −${x}.` },
        ],
        correct: 0,
        solution: `Reflection in ${y} = ${x} swaps coordinates.`,
      },
      {
        t: 'mcq',
        q: `In the foot-of-perpendicular formula ${FOOT}, the common ratio represents:`,
        opts: [
          { label: `the distance from ${P} to the line`, nudge: `<b>(A)</b> the distance is |${t}|${SQ}, not ${t}.` },
          { label: 'the signed step along the normal to reach the line', nudge: null },
          { label: 'the slope of the line', nudge: `<b>(C)</b> The slope is −${fr(a, b)}, fixed by the line; the ratio ${t} changes with ${P}.` },
          { label: `the ${y}-intercept`, nudge: `<b>(D)</b> The ${y}-intercept −${fr(c, b)} is fixed by the line; the ratio ${t} changes with ${P}.` },
        ],
        correct: 1,
        solution: `It is the scalar ${t} that steps from ${P} along (${a}, ${b}) onto the line.`,
      },
      {
        t: 'mcq',
        q: `To reflect a line ${m} in a line ${ELL}, the most reliable method is to:`,
        opts: [
          { label: `negate the equation of ${m}`, nudge: `<b>(A)</b> Multiplying the equation of ${m} by −1 gives the same line ${m}, not its reflection.` },
          { label: `reflect two points of ${m} in ${ELL} and join them`, nudge: null },
          { label: `swap ${x} and ${y} in ${m}`, nudge: `<b>(C)</b> only works for the special mirror ${y} = ${x}.` },
          { label: 'add the equations', nudge: `<b>(D)</b> Adding the equations gives a line through ${m} ∩ ${ELL} (a member of Topic 04’s family), but in general not the reflected one.` },
        ],
        correct: 1,
        solution: 'Reflect points, then rejoin.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Mixing up the foot and image factors.</b> Foot uses ${FOOT_T}; image uses <b>twice</b> that. Drop the factor of 2 and you land on the line instead of behind it.`,
          `<b>Using the general formula for special mirrors.</b> For ${y} = ${x}, ${x}-axis, ${y}-axis, use swap/negate: faster and error-proof.`,
          `<b>Reflecting an equation directly.</b> You cannot “reflect” ${LINE} = 0 by tweaking coefficients (except for ${y} = ${x}, where swapping ${x}, ${y} works). Reflect points instead.`,
          `<b>Wrong denominator.</b> It’s ${SS} here (no square root): contrast with the distance formula’s ${SQ}. Mixing them is common.`,
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For reflection-of-a-line problems where the lines intersect, you only need one image point: the reflected line passes through both the intersection point and the image of any single point of the original. That halves the work versus reflecting two points.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Foot of perpendicular', note: `${FOOT}.` },
          { f: 'Image of a point', note: `same, with ${IMG_T} (factor of 2).` },
          { f: 'Foot = midpoint of point and image.', note: '' },
          { f: 'Special mirrors', note: `${y} = ${x}: (${x}, ${y}) → (${y}, ${x}); ${x}-axis: (${x}, −${y}); ${y}-axis: (−${x}, ${y}).` },
          { f: 'Reflect a line', note: 'reflect two of its points, rejoin.' },
        ],
        aids: ['“One step to the foot, two steps to the mirror.”', `“${y} = ${x}? Just swap.”`, `“Foot uses ${SS}; distance uses the square root.”`],
      },
    ],
  },
];
