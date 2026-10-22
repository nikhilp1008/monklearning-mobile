import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Topics 01 to 03: pp. 282–307 of the Class 11 Physics Master
 * Reference, word for word: the Foundations section, The Scalar (Dot) Product
 * (pp. 284 to 288), Sub-topic 1, Work and the Work–Energy Theorem (pp. 289 to
 * 298), and Sub-topic 2, Mechanical Energy — Kinetic and Potential (pp. 299 to
 * 307). p. 282 is the chapter's title page and p. 283 its contents, so the
 * chapter has no introduction of its own. Figures 5.1 (p. 289, drawn on
 * p. 290), 5.2 (p. 293, drawn on p. 294) and 5.3 (p. 302, drawn on p. 303)
 * stand in the text where the book places them.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 284–288 ─────────────────────────
  {
    n: '01',
    title: 'Foundations: The Scalar (Dot) Product',
    kalam: 'The name is the clue: you feed it two vectors and it spits out a single scalar (a plain number, no direction).',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the mathematical key that unlocks the whole chapter — work, power, and flux are all dot products. CBSE Boards expect the definition and component formula (1–2 marks) and use it inside derivations. JEE Main slips in <b>1 question</b> on finding an angle between vectors or a value that makes two vectors perpendicular. NEET tests the perpendicularity (<i>A⃗</i> · <i>B⃗</i> = 0) idea as a quick MCQ. JEE Advanced embeds it silently wherever work, projection, or angles between vectors appear.',
      },
      {
        t: 'p',
        html: 'Before we can talk about work, we need one tool from vector algebra — and it’s the reason work behaves the way it does. When you push a loaded trolley along a corridor, only the part of your push that points along the corridor actually moves it; any sideways or upward part is wasted. Physics needed a single operation that takes two vectors and automatically extracts “how much of one lies along the other, times their sizes.” That operation is the <b>scalar product</b>, also called the <b>dot product.</b><br><br>The name is the clue: you feed it two vectors and it spits out a single scalar (a plain number, no direction). It does this by multiplying the two magnitudes and then weighting the result by cos <i>θ</i>, the cosine of the angle between them.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine the sun low on the horizon casting your shadow on the ground. The dot product of two vectors is like asking, “if vector <i>B⃗</i> were the ground and the sun shone straight down onto <i>A⃗</i>, how long is <i>A⃗</i>’s shadow on <i>B⃗</i> — and then scale that by how long <i>B⃗</i> is.” When the two vectors point the same way (<i>θ</i> = 0), the shadow is full-length and the product is maximum (<i>AB</i>). When they’re at right angles (<i>θ</i> = 90°), the shadow shrinks to nothing and the product is <b>zero</b> — which is exactly why a force perpendicular to motion does no work. When they point opposite ways (<i>θ</i> = 180°), the product goes maximally negative (−<i>AB</i>) — the basis of negative work.<br><br>That single behaviour — positive when aligned, zero when perpendicular, negative when opposed — is why the dot product is the natural language for work (<i>W</i> = <i>F⃗</i> · <i>S⃗</i>), for power (<i>P</i> = <i>F⃗</i> · <i>v⃗</i>), and for many other physical quantities you’ll meet later.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>1. The dot product is only defined between <b>two vectors</b>; the result is a <b>scalar</b> and has no direction.<br>2. It can be <b>positive, zero, or negative</b> depending entirely on the angle <i>θ</i> between the vectors.<br>3. <i>A⃗</i> · <i>B⃗</i> = 0 does <b>not</b> mean one vector is zero — it usually means they are <b>perpendicular</b>.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Definition (geometric form)',
        main: '<i>A⃗</i> · <i>B⃗</i> = <i>AB</i> cos <i>θ</i>',
        legend: ['<i>A</i> = |<i>A⃗</i>|', '<i>B</i> = |<i>B⃗</i>|', '<i>θ</i> = the angle between them (0 ≤ <i>θ</i> ≤ 180°)'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Component (algebraic) form',
        main: 'for <i>A⃗</i> = <i>A</i><sub><i>x</i></sub><i>î</i> + <i>A</i><sub><i>y</i></sub><i>ĵ</i> + <i>A</i><sub><i>z</i></sub><i>k̂</i> and <i>B⃗</i> = <i>B</i><sub><i>x</i></sub><i>î</i> + <i>B</i><sub><i>y</i></sub><i>ĵ</i> + <i>B</i><sub><i>z</i></sub><i>k̂</i>,<br><i>A⃗</i> · <i>B⃗</i> = <i>A</i><sub><i>x</i></sub><i>B</i><sub><i>x</i></sub> + <i>A</i><sub><i>y</i></sub><i>B</i><sub><i>y</i></sub> + <i>A</i><sub><i>z</i></sub><i>B</i><sub><i>z</i></sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Angle between two vectors',
        main: '(rearranging the definition):<br>cos <i>θ</i> = (<i>A⃗</i> · <i>B⃗</i>)/<i>AB</i> = (<i>A</i><sub><i>x</i></sub><i>B</i><sub><i>x</i></sub> + <i>A</i><sub><i>y</i></sub><i>B</i><sub><i>y</i></sub> + <i>A</i><sub><i>z</i></sub><i>B</i><sub><i>z</i></sub>)/(√(<i>A</i><sub><i>x</i></sub><sup>2</sup> + <i>A</i><sub><i>y</i></sub><sup>2</sup> + <i>A</i><sub><i>z</i></sub><sup>2</sup>) √(<i>B</i><sub><i>x</i></sub><sup>2</sup> + <i>B</i><sub><i>y</i></sub><sup>2</sup> + <i>B</i><sub><i>z</i></sub><sup>2</sup>))',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Projection (component) of A⃗ along B⃗',
        main: '<i>A</i> cos <i>θ</i> = (<i>A⃗</i> · <i>B⃗</i>)/<i>B</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Self dot product',
        main: '<i>A⃗</i> · <i>A⃗</i> = <i>A</i><sup>2</sup>',
        legend: [],
        note: '(since <i>θ</i> = 0).',
      },
      {
        t: 'formula',
        kicker: 'Unit-vector results',
        main: '(the engine behind the component form):<br><i>î</i> · <i>î</i> = <i>ĵ</i> · <i>ĵ</i> = <i>k̂</i> · <i>k̂</i> = 1,<br><i>î</i> · <i>ĵ</i> = <i>ĵ</i> · <i>k̂</i> = <i>k̂</i> · <i>î</i> = 0',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'The dot product is a scalar, so it carries no direction — its dimensions are simply those of the two quantities multiplied (e.g., <i>F⃗</i> · <i>S⃗</i> has the dimensions of energy, [M L<sup>2</sup> T<sup>−2</sup>]).',
      },

      { t: 'part', title: 'Key properties and procedures' },
      {
        t: 'p',
        html: '<b>Properties (each worth knowing for proofs):</b><br>1. <b>Commutative:</b> <i>A⃗</i> · <i>B⃗</i> = <i>B⃗</i> · <i>A⃗</i> (order doesn’t matter).<br>2. <b>Distributive over addition:</b> <i>A⃗</i> · (<i>B⃗</i> + <i>C⃗</i>) = <i>A⃗</i> · <i>B⃗</i> + <i>A⃗</i> · <i>C⃗</i>.<br>3. <b>Scalar multiplication:</b> (<i>mA⃗</i>) · <i>B⃗</i> = <i>m</i>(<i>A⃗</i> · <i>B⃗</i>).<br>4. <b>Perpendicularity test:</b> if neither vector is zero, <i>A⃗</i> · <i>B⃗</i> = 0 ⟺ <i>A⃗</i> ⊥ <i>B⃗</i>.<br>5. <b>Sign of the product</b> tells you the angle: positive → acute, zero → right angle, negative → obtuse.',
      },
      {
        t: 'proc',
        title: 'Procedure — finding the angle between two vectors',
        steps: [
          'Compute the dot product using components: <i>A</i><sub><i>x</i></sub><i>B</i><sub><i>x</i></sub> + <i>A</i><sub><i>y</i></sub><i>B</i><sub><i>y</i></sub> + <i>A</i><sub><i>z</i></sub><i>B</i><sub><i>z</i></sub>.',
          'Compute each magnitude: <i>A</i> = √(<i>A</i><sub><i>x</i></sub><sup>2</sup> + <i>A</i><sub><i>y</i></sub><sup>2</sup> + <i>A</i><sub><i>z</i></sub><sup>2</sup>), similarly for <i>B</i>.',
          'Divide: cos <i>θ</i> = (<i>A⃗</i> · <i>B⃗</i>)/<i>AB</i>.',
          'Take the inverse cosine. (A quick sanity check: a negative dot product must give an obtuse angle.)',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Two vectors have magnitudes <i>A</i> = 5 and <i>B</i> = 4 units, with an angle of 60° between them. Find their scalar product.',
        steps: [
          '<b>Given:</b> <i>A</i> = 5, <i>B</i> = 4, <i>θ</i> = 60°.',
          '<i>A⃗</i> · <i>B⃗</i> = <i>AB</i> cos <i>θ</i> = (5)(4) cos 60° = (5)(4)(0.5) = 10 units',
          '<b>Comment:</b> Clean substitution into the geometric form. The result is a single number — a scalar — as expected.',
        ],
        ans: '10 units',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Find the angle between <i>A⃗</i> = 3<i>î</i> + 4<i>ĵ</i> and <i>B⃗</i> = 4<i>î</i> − 3<i>ĵ</i>. (a) 0° (b) 45° (c) 90° (d) 180°',
        steps: [
          '<b>The fast reasoning:</b> Don’t compute magnitudes — just check the dot product first:<br><i>A⃗</i> · <i>B⃗</i> = (3)(4) + (4)(−3) = 12 − 12 = 0.',
          'A zero dot product (with neither vector zero) means the vectors are <b>perpendicular.</b>',
          'Speed tip: always test <i>A⃗</i> · <i>B⃗</i> = 0 first. If it vanishes, the answer is 90° instantly — no need for the magnitude-and-arccos route.',
        ],
        ans: '(c) 90°.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Find the value of <i>λ</i> for which <i>A⃗</i> = 2<i>î</i> + <i>λĵ</i> + <i>k̂</i> is perpendicular to <i>B⃗</i> = <i>î</i> − 2<i>ĵ</i> + 3<i>k̂</i>.',
        steps: [
          '<b>Perpendicular means the dot product is zero:</b><br><i>A⃗</i> · <i>B⃗</i> = (2)(1) + (<i>λ</i>)(−2) + (1)(3) = 2 − 2<i>λ</i> + 3 = 5 − 2<i>λ</i>',
          'Set equal to zero:<br>5 − 2<i>λ</i> = 0 ⇒ <i>λ</i> = 5/2',
          '<b>Why this is JEE Main:</b> it inverts the perpendicularity condition — instead of testing two known vectors, you solve for the unknown that forces perpendicularity. A very common one-step setup.',
        ],
        ans: '<i>λ</i> = 5/2',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A vector <i>A⃗</i> = <i>î</i> + <i>ĵ</i> + <i>k̂</i> is given. (a) Find the angle it makes with the <i>x</i>-axis. (b) Find the projection of <i>A⃗</i> onto the vector <i>B⃗</i> = 2<i>î</i> + <i>ĵ</i> + 2<i>k̂</i>.',
        steps: [
          '<b>(a) Angle with the <i>x</i>-axis</b> (direction <i>î</i>):<br>cos <i>α</i> = (<i>A⃗</i> · <i>î</i>)/(|<i>A⃗</i>| |<i>î</i>|) = 1/(√(1<sup>2</sup> + 1<sup>2</sup> + 1<sup>2</sup>) · 1) = 1/√3<br><i>α</i> = cos<sup>−1</sup>(1/√3) ≈ 54.7°',
          '(By symmetry, <i>A⃗</i> makes the same angle with each of the three axes — a tidy check.)',
          '<b>(b) Projection of <i>A⃗</i> onto <i>B⃗</i>:</b><br><i>A⃗</i> · <i>B⃗</i> = (1)(2) + (1)(1) + (1)(2) = 5, |<i>B⃗</i>| = √(2<sup>2</sup> + 1<sup>2</sup> + 2<sup>2</sup>) = √9 = 3<br>Projection = (<i>A⃗</i> · <i>B⃗</i>)/|<i>B⃗</i>| = 5/3 ≈ 1.67 units',
          '<b>Why this is JEE Advanced:</b> it requires fluent use of both the angle formula and the projection formula in three dimensions, plus recognising the symmetry shortcut in part (a).',
        ],
        ans: '1.67 units',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Two vectors of magnitudes 6 and 5 units are inclined at 30°. Find their scalar product. (Take cos 30° = 0.866.)',
            a: '25.98 ≈ 26 units',
          },
          {
            q: '[NEET] State the angle between <i>A⃗</i> = 2<i>î</i> + 3<i>ĵ</i> and <i>B⃗</i> = −3<i>î</i> + 2<i>ĵ</i>.',
            a: '90° (dot product = −6+6 = 0)',
          },
          {
            q: '[JEE Main] Find <i>λ</i> so that <i>A⃗</i> = <i>λî</i> + 2<i>ĵ</i> + <i>k̂</i> and <i>B⃗</i> = 2<i>î</i> − <i>ĵ</i> + 4<i>k̂</i> are perpendicular.',
            a: '<i>λ</i> = −1 (from 2<i>λ</i>−2+4 = 0)',
          },
          {
            q: '[JEE Main] Find the angle between <i>A⃗</i> = <i>î</i> + <i>ĵ</i> and <i>B⃗</i> = <i>ĵ</i> + <i>k̂</i>.',
            a: '60° (cos <i>θ</i> = ½)',
          },
          {
            q: '[JEE Advanced] Find the projection of <i>A⃗</i> = 3<i>î</i> − 2<i>ĵ</i> + <i>k̂</i> onto <i>B⃗</i> = <i>î</i> + 2<i>ĵ</i> + 2<i>k̂</i>.',
            a: '(3 − 4 + 2)/3 = 1/3 ≈ 0.33 units',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'If <i>A⃗</i> · <i>B⃗</i> = 0 and neither <i>A⃗</i> nor <i>B⃗</i> is a zero vector, then the two vectors are:',
        opts: [
          { label: 'parallel', nudge: '(a) parallel gives the maximum product <i>AB</i>.' },
          { label: 'anti-parallel', nudge: '(b) anti-parallel gives −<i>AB</i>.' },
          { label: 'perpendicular', nudge: null },
          { label: 'equal', nudge: '(d) is unrelated to the dot product vanishing.' },
        ],
        correct: 2,
        solution: 'A zero dot product with non-zero vectors forces cos <i>θ</i> = 0, i.e. <i>θ</i> = 90°.',
      },
      {
        t: 'mcq',
        q: 'For the three standard Cartesian unit vectors, the value of <i>î</i> · <i>î</i> + <i>ĵ</i> · <i>k̂</i> is:',
        opts: [
          { label: '0', nudge: '(a) treats the first term as 0.' },
          { label: '1', nudge: null },
          { label: '2', nudge: '(c) wrongly assumes <i>ĵ</i> · <i>k̂</i> = 1.' },
          { label: '3', nudge: '(d) adds a third 1.' },
        ],
        correct: 1,
        solution: '<i>î</i> · <i>î</i> = 1 (same unit vector) and <i>ĵ</i> · <i>k̂</i> = 0 (perpendicular), so the sum is 1 + 0 = 1. The rule: like unit vectors give 1, unlike give 0.',
      },
      {
        t: 'mcq',
        q: 'Two vectors <i>A⃗</i> and <i>B⃗</i> have <i>A⃗</i> · <i>B⃗</i> < 0. The angle between them is:',
        opts: [
          { label: 'acute', nudge: '(a) acute gives a positive product.' },
          { label: 'right', nudge: '(b) right gives zero.' },
          { label: 'obtuse', nudge: null },
          { label: 'zero', nudge: '(d) zero gives the maximum positive product.' },
        ],
        correct: 2,
        solution: 'A negative dot product needs cos <i>θ</i> < 0, which happens for 90° < <i>θ</i> ≤ 180°. The sign of the dot product directly reports the angle’s type.',
      },
      {
        t: 'mcq',
        q: 'The work done by a force <i>F⃗</i> = 4<i>î</i> + 3<i>ĵ</i> N in producing a displacement <i>S⃗</i> = 3<i>î</i> − 4<i>ĵ</i> m is:',
        opts: [
          { label: '24 J', nudge: '(a) comes from adding rather than subtracting the second term.' },
          { label: '0 J', nudge: null },
          { label: '25 J', nudge: '(c) is the product of magnitudes 5 × 5 (only valid if parallel).' },
          { label: '7 J', nudge: '(d) is a sum of components with no physical meaning here.' },
        ],
        correct: 1,
        solution: '<i>W</i> = <i>F⃗</i> · <i>S⃗</i> = (4)(3) + (3)(−4) = 12 − 12 = 0. The force and displacement happen to be perpendicular.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Treating the result as a vector.</b> The dot product is a scalar — a plain number with a sign but no direction. Writing it with an arrow on top is wrong.',
          '<b>Adding instead of subtracting signed components.</b> In <i>A</i><sub><i>x</i></sub><i>B</i><sub><i>x</i></sub> + <i>A</i><sub><i>y</i></sub><i>B</i><sub><i>y</i></sub> + <i>A</i><sub><i>z</i></sub><i>B</i><sub><i>z</i></sub>, keep every sign. A component like (3)(−4) contributes −12, not +12 — the single most common arithmetic slip.',
          '<b>Confusing dot and cross products.</b> The dot product gives a scalar (<i>AB</i> cos <i>θ</i>); the cross product gives a vector (<i>AB</i> sin <i>θ</i>, perpendicular to both). Work uses the dot product.',
          '<b>Assuming <i>A⃗</i> · <i>B⃗</i> = 0 means a vector is zero.</b> It almost always means the vectors are perpendicular instead.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> For any “find the angle” or “are these perpendicular?” question, compute the dot product first. If it’s zero, the angle is 90° and you’re done. If you do need the angle, the sign of the dot product instantly tells you whether to expect an acute (+), right (0), or obtuse (−) answer — a built-in sanity check before you ever reach for the calculator.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Geometric', note: '<i>A⃗</i> · <i>B⃗</i> = <i>AB</i> cos <i>θ</i> (result is a <b>scalar</b>, can be +, 0, or −)' },
          { f: 'Component', note: '<i>A⃗</i> · <i>B⃗</i> = <i>A</i><sub><i>x</i></sub><i>B</i><sub><i>x</i></sub> + <i>A</i><sub><i>y</i></sub><i>B</i><sub><i>y</i></sub> + <i>A</i><sub><i>z</i></sub><i>B</i><sub><i>z</i></sub>' },
          { f: 'Angle', note: 'cos <i>θ</i> = (<i>A⃗</i> · <i>B⃗</i>)/<i>AB</i> · <b>Projection of <i>A⃗</i> on <i>B⃗</i>:</b> (<i>A⃗</i> · <i>B⃗</i>)/<i>B</i>' },
          { f: 'Unit vectors', note: '<i>î</i> · <i>î</i> = 1, <i>î</i> · <i>ĵ</i> = 0 (like = 1, unlike = 0)' },
          { f: 'Self', note: '<i>A⃗</i> · <i>A⃗</i> = <i>A</i><sup>2</sup> · <b>Perpendicular test:</b> <i>A⃗</i> · <i>B⃗</i> = 0 ⇒ <i>A⃗</i> ⊥ <i>B⃗</i>' },
          { f: 'Properties', note: 'commutative, distributive' },
          { f: 'Used for', note: 'work <i>W</i> = <i>F⃗</i> · <i>S⃗</i>, power <i>P</i> = <i>F⃗</i> · <i>v⃗</i>' },
        ],
        aids: ['“Dot gives a scalar; cross gives a vector.”', '“Like unit vectors = 1, unlike = 0.”', '“Zero dot = right angle.”'],
      },
    ],
  },
  // ───────────────────────── Topic 02 · pp. 289–298 ─────────────────────────
  {
    n: '02',
    title: 'Work and the Work–Energy Theorem',
    kalam: 'So work is a very specific bookkeeping idea: it measures how much energy a force transfers to (or steals from) an object as the object moves.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the gateway sub-topic of the entire chapter, and it pays off everywhere. CBSE Boards almost always carry the <b>derivation of the work–energy theorem</b> (3 marks) plus a 1–2 mark question on positive/negative/zero work. JEE Main reliably asks <b>1–2 questions</b> each year — usually a variable-force integration or a “find final speed using the theorem” numerical. NEET asks <b>1 conceptual question</b> on the sign of work or zero-work cases. JEE Advanced rarely asks it in isolation, but folds frame dependence of work and work by static friction silently into multi-concept problems where most students slip.',
      },
      {
        t: 'p',
        html: 'Here’s a question that trips up almost every student on day one. Imagine your friend stands holding a heavy bag of cement on his head for ten full minutes, sweating, arms trembling. Did he do any work?<br><br>In everyday Hindi-English we’d say “bhai itni mehnat kar raha hai” — of course he’s working! But in physics, the answer is a flat <b>zero</b>. And once you understand why, you understand the whole concept.<br><br>Physics doesn’t care about effort, sweat, or tiredness. It cares about exactly two things: <b>is a force acting, and did the point where that force acts actually move?</b> Work is the bridge between a push and a displacement. No displacement, no work — no matter how exhausted you are. Your friend could tie the bag to a hook on the wall and the bag would stay up with zero effort from anyone, which tells you the holding itself transfers no energy to the bag.<br><br>So work is a very specific bookkeeping idea: it measures <b>how much energy a force transfers to (or steals from) an object as the object moves.</b>',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture pushing a stalled auto-rickshaw down a road. You push forward, the auto rolls forward — your push and the motion point the same way, so you are pouring energy into the auto. That’s <b>positive work</b>, and you can feel it because the auto speeds up. Now the driver hits the brakes: friction in the brake pads points backward while the auto still rolls forward — those two point opposite ways, so friction is draining energy out of the auto. That’s <b>negative work</b>, and you see it because the auto slows down. Finally, think of the gravity pulling down on the auto while it rolls horizontally — straight down versus straight along the road, a perfect right angle. Gravity neither helps nor hinders the forward motion at all. That’s <b>zero work</b>.',
      },
      {
        t: 'p',
        html: 'This is the single most important picture in the chapter: <b>the angle between the force and the displacement decides the sign of the work.</b><br>• Force has a piece pointing along the motion → <b>positive</b> work → object gains speed.<br>• Force has a piece pointing against the motion → <b>negative</b> work → object loses speed.<br>• Force is perpendicular to the motion → <b>zero</b> work → speed unchanged.',
      },
      { t: 'fig', id: 'p11-05-fig-5.1' },
      {
        t: 'p',
        html: 'Once you have the sign intuition, the magnitude follows naturally. Only the <b>part of the force that lies along the direction of motion</b> counts. A man dragging a suitcase by a tilted handle: only the horizontal slice of his pull moves the suitcase forward; the vertical slice just tries to lift it. So work uses the component of force along the displacement — which is exactly what a dot product computes.<br><br>Now here’s the payoff that makes work worth defining at all. When you do positive work on an object, where does that energy go? It shows up as <b>motion</b> — the object speeds up. When you do negative work, the object slows down. So there’s a tight, exact relationship waiting to be discovered: <b>the net work done on a body equals the change in its “energy of motion.”</b> That energy of motion is what we call <b>kinetic energy</b>, <i>K</i> = ½<i>mv</i><sup>2</sup>. This is not a coincidence or a definition pulled out of thin air — it falls straight out of Newton’s second law, as we’ll prove in the CBSE board derivation below. Hold onto this mental link: work is the currency, kinetic energy is the bank balance, and depositing or withdrawing currency changes the balance by exactly that amount. That sentence <b>is</b> the work–energy theorem, in plain English.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions you must respect:</b><br>1. <b>Work is defined for a force, not for an object.</b> “The work done” is an incomplete sentence — always ask work done by which force? Different forces on the same body do different works.<br>2. <b>The simple formula <i>W</i> = <i>FS</i> cos <i>θ</i> assumes a constant force</b> (<i>S⃗</i> is then the net displacement, whatever the path). The moment the force changes in size or direction along the path, you must switch to integration.<br>3. <b>Work is frame-dependent.</b> Displacement looks different to a passenger on a train and to a person on the platform, so the same force does different work in different frames. (This is the trap JEE Advanced loves.)<br>4. <b>It’s a scalar.</b> Work has no direction — but it carries a sign, and that sign is physics, not algebra. Don’t drop it.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Work done by a constant force',
        main: '<i>W</i> = <i>F⃗</i> · <i>S⃗</i> = <i>FS</i> cos <i>θ</i>',
        legend: ['<i>F⃗</i> = the force', '<i>S⃗</i> = the displacement', '<i>θ</i> = the angle between them'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Work done by a variable force (general definition)',
        main: '<i>W</i> = ∫ <i>F⃗</i> · d<i>r⃗</i> (from <i>r⃗</i><sub><i>i</i></sub> to <i>r⃗</i><sub><i>f</i></sub>)<br>1-D: <i>W</i> = ∫ <i>F</i> d<i>x</i> (from <i>x</i><sub><i>i</i></sub> to <i>x</i><sub><i>f</i></sub>)',
        legend: [],
        note: 'Graphically, this is the <b>area under the <i>F</i>–<i>x</i> curve.</b>',
      },
      {
        t: 'formula',
        kicker: 'Kinetic energy (energy of motion)',
        main: '<i>K</i> = ½<i>mv</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Work–Energy Theorem',
        main: '<i>W</i><sub>net</sub> = Δ<i>K</i> = <i>K</i><sub><i>f</i></sub> − <i>K</i><sub><i>i</i></sub> = ½<i>mv</i><sub><i>f</i></sub><sup>2</sup> − ½<i>mv</i><sub><i>i</i></sub><sup>2</sup>',
        legend: [],
        note: 'The <b>net</b> work done by <b>all</b> forces equals the change in kinetic energy.',
      },
      {
        t: 'table',
        title: 'Quantity reference table',
        head: ['Quantity', 'Symbol', 'SI Unit', 'Dimensional Formula'],
        rows: [
          ['Work / Energy', '<i>W</i>, <i>K</i>', 'joule (J)', '[M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>]'],
          ['Force', '<i>F</i>', 'newton (N)', '[M<sup>1</sup> L<sup>1</sup> T<sup>−2</sup>]'],
          ['Displacement', '<i>S</i>, <i>x</i>', 'metre (m)', '[M<sup>0</sup> L<sup>1</sup> T<sup>0</sup>]'],
        ],
      },
      {
        t: 'p',
        html: '<b>Variable definitions:</b> <i>m</i> = mass, <i>v</i><sub><i>i</i></sub>, <i>v</i><sub><i>f</i></sub> = initial and final speeds, <i>θ</i> = angle between force and displacement.',
      },
      {
        t: 'p',
        html: '<b>Common energy unit conversions</b> (worth memorising):<br>1 J = 1 N · m = 1 kg · m<sup>2</sup> s<sup>−2</sup>, 1 erg = 10<sup>−7</sup> J<br>1 eV = 1.6 × 10<sup>−19</sup> J, 1 kWh = 3.6 × 10<sup>6</sup> J',
      },
      {
        t: 'p',
        html: '<b>Sign rule in one line:</b> cos <i>θ</i> > 0 ⇒ <i>W</i> > 0; cos <i>θ</i> < 0 ⇒ <i>W</i> < 0; <i>θ</i> = 90° ⇒ <i>W</i> = 0.',
      },

      { t: 'part', title: 'CBSE board derivation — The work–energy theorem' },
      {
        t: 'p',
        html: 'This is the showpiece derivation of the chapter. CBSE wants the <b>general</b> version (valid even for a variable force), so we’ll do it properly with calculus and explain the reasoning at each step.<br><br><b>Setup / assumptions:</b> Consider a single particle of mass <i>m</i> moving along a straight line (the <i>x</i>-axis) under a net force <i>F</i> that may vary with position. Let its speed be <i>v</i><sub><i>i</i></sub> at position <i>x</i><sub><i>i</i></sub> and <i>v</i><sub><i>f</i></sub> at position <i>x</i><sub><i>f</i></sub>.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Start from the definition of work by the net force.</b><br><i>W</i><sub>net</sub> = ∫ <i>F</i> d<i>x</i> (from <i>x</i><sub><i>i</i></sub> to <i>x</i><sub><i>f</i></sub>)<br>Why: We use the integral form, not <i>FS</i> cos <i>θ</i>, precisely so the result holds even when <i>F</i> changes. This is what makes the theorem so powerful.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Replace <i>F</i> using Newton’s second law.</b><br><i>F</i> = <i>ma</i> = <i>m</i> d<i>v</i>/d<i>t</i><br>Why: The net force is what changes the motion, so Newton’s second law is the natural substitution to bring speed into the picture.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Convert the time derivative into a position derivative (the chain-rule trick).</b><br>d<i>v</i>/d<i>t</i> = d<i>v</i>/d<i>x</i> · d<i>x</i>/d<i>t</i> = <i>v</i> d<i>v</i>/d<i>x</i><br>Why: Our integral runs over position <i>x</i>, not time <i>t</i>. Since d<i>x</i>/d<i>t</i> = <i>v</i>, this rewrites the acceleration in a form we can integrate over d<i>x</i>. So <i>F</i> = <i>mv</i> d<i>v</i>/d<i>x</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — Substitute back and let d<i>x</i> cancel.</b><br><i>W</i><sub>net</sub> = ∫ <i>mv</i> (d<i>v</i>/d<i>x</i>) d<i>x</i> (from <i>x</i><sub><i>i</i></sub> to <i>x</i><sub><i>f</i></sub>) = ∫ <i>mv</i> d<i>v</i> (from <i>v</i><sub><i>i</i></sub> to <i>v</i><sub><i>f</i></sub>)<br>Why: The d<i>x</i> in the integrand pairs with d<i>v</i>/d<i>x</i>, and the limits switch from positions to the corresponding speeds. The problem is now a clean speed integral.',
      },
      {
        t: 'p',
        html: '<b>Step 5 — Integrate.</b><br><i>W</i><sub>net</sub> = <i>m</i>[<i>v</i><sup>2</sup>/2] (from <i>v</i><sub><i>i</i></sub> to <i>v</i><sub><i>f</i></sub>) = ½<i>mv</i><sub><i>f</i></sub><sup>2</sup> − ½<i>mv</i><sub><i>i</i></sub><sup>2</sup> = <i>K</i><sub><i>f</i></sub> − <i>K</i><sub><i>i</i></sub><br><i>W</i><sub>net</sub> = Δ<i>K</i><br><b>What it actually means:</b> kinetic energy is just “stored-up net work.” If the net work on a body is positive, it speeds up by exactly that much energy; if negative, it slows down. Crucially, the theorem talks about the <b>net</b> work — the sum over all forces. The work of any one individual force generally does <b>not</b> equal Δ<i>K</i>; only the total does.',
      },
      {
        t: 'p',
        html: 'When a force is given as a graph rather than a formula (very common in JEE Main), you don’t need calculus at all. Since <i>W</i> = ∫ <i>F</i> d<i>x</i>, the integral is the area between the force curve and the <i>x</i>-axis. The procedure:',
      },
      {
        t: 'proc',
        title: 'A second, exam-friendly procedure — work as the area under the F–x graph',
        steps: [
          '<b>Plot or read off</b> the <i>F</i> versus <i>x</i> graph over the displacement of interest.',
          '<b>Break the region</b> under the curve into simple shapes — rectangles, triangles, trapeziums.',
          '<b>Add the areas</b>, treating any region <b>below the <i>x</i>-axis as negative</b> (the force opposes motion there).',
          'The signed total is the work done.',
        ],
      },
      {
        t: 'p',
        html: 'Reasoning: a thin vertical strip of width d<i>x</i> at position <i>x</i> has area <i>F</i> d<i>x</i> — exactly the tiny bit of work d<i>W</i> done over that step. Summing all strips sums all the work, which is why the area and the work are the same number. This trick turns many “scary variable force” problems into a quick geometry exercise.',
      },
      { t: 'fig', id: 'p11-05-fig-5.2' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A street vendor pulls a loaded cart along level ground by a rope that makes an angle of 60° with the horizontal. He applies a steady force of 200 N and the cart moves 10 m. Find the work done by the vendor’s pull.',
        steps: [
          '<b>Given:</b> <i>F</i> = 200 N, <i>S</i> = 10 m, <i>θ</i> = 60°.',
          '<b>Formula:</b> <i>W</i> = <i>FS</i> cos <i>θ</i>',
          '<b>Substitution:</b><br><i>W</i> = (200)(10) cos 60° = (200)(10)(0.5)',
          '<b>Conclusion:</b> The vendor’s pull transfers 1000 J of energy to the cart. Note we used cos 60°, not the full force — only the horizontal slice of the pull does work, because that’s the part aligned with the displacement.',
        ],
        ans: '<i>W</i> = 1000 J',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A porter carries a 20 kg trunk on his head. He first walks 40 m along a level railway platform, then climbs a staircase rising 5 m vertically. Taking <i>g</i> = 10 m/s<sup>2</sup>, the total work done by the porter against gravity is: (a) 9000 J (b) 8000 J (c) 1000 J (d) 0 J',
        steps: [
          '<b>The trap:</b> A panicking student adds “work for the 40 m walk” plus “work for the 5 m climb” and lands on a wrong number.',
          '<b>The fast reasoning:</b> Against gravity, only <b>vertical</b> displacement matters. Gravity points straight down, so during the 40 m horizontal walk the angle is 90° → <b>zero work</b>. Only the climb counts.<br><i>W</i> = <i>mgh</i> = (20)(10)(5) = 1000 J',
          'Speed tip: the instant you see “horizontal distance” in a work-against-gravity question, mentally delete it. It’s there only to bait you.',
        ],
        ans: '(c) 1000 J.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A particle of mass 2 kg, initially at rest at the origin, is pushed along the <i>x</i>-axis by a position-dependent force <i>F</i> = (3<i>x</i><sup>2</sup> + 2<i>x</i>) N. Find its speed when it reaches <i>x</i> = 4 m. (Combines: variable-force integration + work–energy theorem.)',
        steps: [
          '<b>Step 1 — The force varies with <i>x</i>, so integrate to get the work.</b><br><i>W</i> = ∫<sub>0</sub><sup>4</sup> (3<i>x</i><sup>2</sup> + 2<i>x</i>) d<i>x</i> = [<i>x</i><sup>3</sup> + <i>x</i><sup>2</sup>]<sub>0</sub><sup>4</sup><br><i>W</i> = (4<sup>3</sup> + 4<sup>2</sup>) − 0 = 64 + 16 = 80 J',
          '<b>Step 2 — Apply the work–energy theorem.</b> It starts from rest, so <i>K</i><sub><i>i</i></sub> = 0:<br><i>W</i> = ½<i>mv</i><sup>2</sup> − 0 ⇒ 80 = ½(2)<i>v</i><sup>2</sup> ⇒ <i>v</i><sup>2</sup> = 80',
          '<b>Why this is a “JEE Main” problem:</b> you can’t use <i>FS</i> cos <i>θ</i> (force isn’t constant) and you can’t use kinematic equations easily (acceleration isn’t constant either). The work–energy theorem sidesteps both because it only cares about the total work, which integration delivers directly.',
        ],
        ans: '<i>v</i> = √80 = 4√5 ≈ 8.94 m/s',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A block of mass 2 kg rests on the floor of a train that accelerates uniformly from rest at 3 m/s<sup>2</sup>. Friction is just enough to prevent slipping. For the time interval <i>t</i> = 0 to <i>t</i> = 2 s, find the work done by friction on the block (i) in the ground frame, and (ii) in the train’s frame. Verify each with the work–energy theorem.',
        steps: [
          'This problem hinges on the subtlety that <b>work depends on the reference frame</b>, because displacement does — even though the friction force itself is the same in both frames.',
          '<b>Identify the friction force (frame-independent):</b> The block moves with the train, so static friction is the only horizontal force on it and must supply its acceleration:<br><i>f</i> = <i>ma</i> = (2)(3) = 6 N, directed forward.<br>Note this is static friction doing positive work — already a surprise to students who memorised “friction always opposes motion.”',
          '<b>(i) Ground frame.</b> The block’s displacement in 2 s:<br><i>S</i><sub>ground</sub> = ½<i>at</i><sup>2</sup> = ½(3)(2)<sup>2</sup> = 6 m<br><i>W</i><sub><i>f</i>,ground</sub> = <i>f</i> · <i>S</i> = (6)(6) = +36 J',
          'Check (ground): final speed <i>v</i> = <i>at</i> = (3)(2) = 6 m/s, so<br>Δ<i>K</i> = ½(2)(6<sup>2</sup>) − 0 = 36 J.<br>Friction is the only horizontal force, so <i>W</i><sub>net</sub> = 36 J = Δ<i>K</i>. ✓',
          '<b>(ii) Train frame.</b> Relative to the train, the block never moves: <i>S</i><sub>train</sub> = 0.<br><i>W</i><sub><i>f</i>,train</sub> = <i>f</i> · <i>S</i><sub>train</sub> = (6)(0) = 0 J',
          'Check (train): In this non-inertial frame the block is stationary, so Δ<i>K</i> = 0. The net work must also be zero: friction (+6 N) and the pseudo-force (−6 N) each act over zero displacement, giving 0. ✓',
          '<b>The takeaway:</b> the same 6 N friction force does +36 J to a platform observer and 0 J to a passenger. Both are correct — work is frame-dependent, and the work–energy theorem holds consistently within each frame as long as you use that frame’s displacements and kinetic energies throughout.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A force of 50 N acts on a body at 37° to the horizontal, moving it 6 m horizontally. Find the work done. (Take cos 37° = 0.8.)',
            a: '240 J',
          },
          {
            q: '[NEET] A stone tied to a string is whirled in a horizontal circle at constant speed. How much work does the string tension do on the stone in one complete revolution, and why?',
            a: '0 J (tension is always perpendicular to the instantaneous displacement)',
          },
          {
            q: '[JEE Main] A 1 kg body moving at 4 m/s is brought to rest by a constant opposing force over a distance of 2 m. Find the magnitude of the force using the work–energy theorem.',
            a: '4 N',
          },
          {
            q: '[JEE Main] A variable force <i>F</i> = (6<i>x</i> − 2) N acts on a 3 kg particle moving along the <i>x</i>-axis from <i>x</i> = 1 m to <i>x</i> = 3 m. Find the work done by this force.',
            a: '20 J',
          },
          {
            q: '[JEE Advanced] A block slides down a rough incline of height <i>H</i> = 2 m and base length <i>l</i> = 3 m (the base being horizontal), starting from rest. The coefficient of kinetic friction is <i>μ</i> = 0.4. Using the work–energy theorem, find the speed of the block at the bottom. (Take <i>g</i> = 10 m/s<sup>2</sup>.)',
            a: '<i>v</i> = √(2<i>g</i>(<i>H</i> − <i>μl</i>)) = √(2(10)(2 − 1.2)) = √16 = 4 m/s',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A body of mass <i>m</i> moves with constant speed <i>v</i> in a circle of radius <i>r</i>. The work done by the centripetal force in half a revolution is:',
        opts: [
          {
            label: '½<i>mv</i><sup>2</sup>',
            nudge: '(a) and (b) tempt students who confuse this with kinetic energy, but <i>K</i> doesn’t change here since speed is constant.',
          },
          {
            label: '<i>mv</i><sup>2</sup>',
            nudge: '(a) and (b) tempt students who confuse this with kinetic energy, but <i>K</i> doesn’t change here since speed is constant.',
          },
          {
            label: '<i>πr</i> · <i>mv</i><sup>2</sup>/<i>r</i>',
            nudge: '(c) is a “multiply everything given” trap — it computes (force × arc length) forgetting the perpendicularity.',
          },
          { label: '0', nudge: null },
        ],
        correct: 3,
        solution: 'The centripetal force always points toward the centre, perpendicular to the instantaneous velocity (and hence the displacement) at every point. With <i>θ</i> = 90°, cos <i>θ</i> = 0, so the work is zero throughout. The whole point is that the angle, not the magnitudes, kills the work.',
      },
      {
        t: 'mcq',
        q: 'A force <i>F⃗</i> = (3<i>î</i> + 4<i>ĵ</i>) N moves a particle through a displacement <i>S⃗</i> = (4<i>î</i> − 3<i>ĵ</i>) m. The work done is:',
        opts: [
          { label: '24 J', nudge: '(a) comes from adding instead of subtracting the second term (a sign error in the (4)(−3) product).' },
          { label: '0 J', nudge: null },
          {
            label: '25 J',
            nudge: '(c) is |<i>F⃗</i>||<i>S⃗</i>| = 5 × 5 — the magnitude product, which would only be the answer if the vectors were parallel.',
          },
          { label: '−12 J', nudge: '(d) drops one term entirely.' },
        ],
        correct: 1,
        solution: 'Work is the dot product: <i>W</i> = <i>F⃗</i> · <i>S⃗</i> = (3)(4) + (4)(−3) = 12 − 12 = 0. Here the two vectors happen to be perpendicular, so the force does no work — a result you’d never see by multiplying magnitudes.',
      },
      {
        t: 'mcq',
        q: 'A 0.5 kg ball thrown straight up rises and returns to the thrower’s hand. Over the full up-and-down trip, the work done by gravity is:',
        opts: [
          { label: 'positive', nudge: '(a) and (b) come from looking at only half the journey.' },
          { label: 'negative', nudge: '(a) and (b) come from looking at only half the journey.' },
          { label: 'zero', nudge: null },
          {
            label: 'depends on the launch speed',
            nudge: '(d) is the classic “more information needed” hedge — but gravitational work depends only on the vertical displacement between start and end points, not on the speed, so it’s exactly zero regardless of how hard the ball was thrown.',
          },
        ],
        correct: 2,
        solution: 'Going up, gravity does negative work (−<i>mgh</i>); coming down, it does equal positive work (+<i>mgh</i>). The net displacement over the round trip is zero, so the total work by gravity is zero.',
      },
      {
        t: 'mcq',
        q: 'A block is pulled at constant velocity across a rough floor by a horizontal force. Which statement is correct?',
        opts: [
          { label: 'Net work on the block is positive', nudge: '(a) contradicts Δ<i>K</i> = 0.' },
          {
            label: 'Work by the applied force is zero',
            nudge: '(b) is wrong because the applied force does move the block, so it does positive work; it’s just balanced.',
          },
          { label: 'Net work on the block is zero, but individual forces do non-zero work', nudge: null },
          {
            label: 'Work by friction is positive',
            nudge: '(d) inverts the sign — kinetic friction opposes motion, so its work is negative.',
          },
        ],
        correct: 2,
        solution: 'Constant velocity means Δ<i>K</i> = 0, so by the work–energy theorem the net work is zero. But the applied force does positive work and friction does an equal and opposite negative work — they cancel. This question separates students who think “force is applied, so net work must be positive” from those who reason through the theorem.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Equating one force’s work with Δ<i>K</i>.</b> The theorem uses the <b>net</b> work — the sum over all forces. Writing “<i>W</i><sub>gravity</sub> = Δ<i>K</i>” when friction or tension are also present is a classic mark-loser. Always tally every force, or use the single net force.',
          '<b>Dropping the sign of work.</b> Students compute |<i>FS</i> cos <i>θ</i>| and forget that cos <i>θ</i> can be negative. Negative work is physically real (it means energy is being removed) — losing the sign quietly corrupts every downstream energy calculation.',
          '<b>Assuming friction always does negative work.</b> On a body carried along by another (e.g., a box on an accelerating truck bed), static friction does <b>positive</b> work in the ground frame. Friction opposes relative slipping, not motion itself.',
          '<b>Forgetting that work is frame-dependent.</b> In JEE Advanced problems involving lifts, trains, or moving wedges, the displacement — and therefore the work — changes with the observer. Pick one frame and stay in it for the whole problem.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> Before grinding through any work calculation, ask the sign first. “Force along motion → +, against → −, perpendicular → 0.” This instantly zeroes out normal reaction, tension in circular motion, and gravity during horizontal motion — often turning a messy problem into a one-line answer. And whenever a body’s speed is unchanged, you already know <i>W</i><sub>net</sub> = 0 without computing anything.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Constant force', note: '<i>W</i> = <i>F⃗</i> · <i>S⃗</i> = <i>FS</i> cos <i>θ</i> (scalar, but signed)' },
          { f: 'Variable force', note: '<i>W</i> = ∫ <i>F⃗</i> · d<i>r⃗</i> = <b>area under the <i>F</i>–<i>x</i> graph</b>' },
          { f: 'Kinetic energy', note: '<i>K</i> = ½<i>mv</i><sup>2</sup>' },
          { f: 'Work–Energy Theorem', note: '<i>W</i><sub>net</sub> = Δ<i>K</i> = ½<i>mv</i><sub><i>f</i></sub><sup>2</sup> − ½<i>mv</i><sub><i>i</i></sub><sup>2</sup>' },
          { f: 'Sign rule', note: '<i>θ</i> < 90° → + | <i>θ</i> > 90° → − | <i>θ</i> = 90° → 0' },
          { f: 'Dimensions of work/energy', note: '[M L<sup>2</sup> T<sup>−2</sup>]; SI unit <b>joule</b>; 1 kWh = 3.6 × 10<sup>6</sup> J' },
          { f: 'Key cautions', note: '“net” means all forces; work is frame-dependent; static friction can do positive work.' },
        ],
        aids: ['“SAD” angles: <b>S</b>ame direction = positive, <b>A</b>gainst = negative, <b>D</b>ead perpendicular = zero.'],
      },
    ],
  },
  // ───────────────────────── Topic 03 · pp. 299–307 ─────────────────────────
  {
    n: '03',
    title: 'Mechanical Energy — Kinetic and Potential',
    kalam: 'In mechanics, energy comes in just two flavours, and almost every problem in this chapter is a story of one turning into the other.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This sub-topic is a guaranteed scorer. CBSE Boards ask 1–2 mark direct questions on the definitions of kinetic and potential energy and the spring PE expression. JEE Main asks <b>1–2 questions</b> every year, very often the “find the force / find the equilibrium position from a given <i>U</i>(<i>x</i>)” type. NEET loves the <b>kinetic energy–momentum relation</b> (<i>K</i> = <i>p</i><sup>2</sup>/2<i>m</i>) as a one-line trap. JEE Advanced almost always hides a <b>potential-energy-curve / nature-of-equilibrium</b> problem here — high-yield, and exactly where careless students lose marks on a sign.',
      },
      {
        t: 'p',
        html: 'In the last sub-topic we learnt that work transfers energy. But energy itself — what is it, and where does it live? In mechanics, energy comes in just two flavours, and almost every problem in this chapter is a story of one turning into the other.<br><br><b>Kinetic energy</b> is the easy one: it’s the energy a body has because it is moving. A cricket ball sitting on the ground is harmless; the same ball at 140 km/h can crack a helmet. Same ball, same mass — the only difference is motion. That “energy of motion” is kinetic energy, <i>K</i> = ½<i>mv</i><sup>2</sup>. Two things to burn into memory right away: it is <b>never negative</b> (zero only when the body is at rest; you’re squaring the speed, so direction is irrelevant — a ball going left and a ball going right at the same speed have identical <i>K</i>), and it grows with the square of speed (double the speed → four times the kinetic energy, which is exactly why accidents at high speed are so much more destructive).<br><br><b>Potential energy</b> is the subtle one, and it’s where students get confused. It’s energy a body (really, a system) has stored up <b>because of its position or configuration</b>, waiting to be released. Think of a stretched bowstring, a stone held at the edge of a terrace, or a compressed spring in a toy gun. Nothing is moving yet — but there is energy locked in place, ready to convert into motion the instant you let go.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine carrying a bucket of water up to your building’s rooftop tank. You sweat and do work against gravity. That work doesn’t vanish — it gets deposited into the water as gravitational potential energy. Open the tap on the ground floor and that stored energy comes rushing back out as the kinetic energy of flowing water (which is how a small hydro turbine spins). Lifting “charges up” the system; releasing “discharges” it. Potential energy is nature’s rechargeable battery.',
      },
      {
        t: 'p',
        html: 'There is one deep idea you must accept before potential energy makes any sense: <b>potential energy only exists for “conservative” forces.</b> A conservative force is one that gives your energy back — gravity and spring force are the classic examples. Lift a stone and lower it, and gravity returns every joule. There is no such thing as “friction potential energy,” because friction eats energy (turns it into heat) and never gives it back. So the very idea of stored, recoverable energy is tied to forces that play fair. The defining tests of a conservative force: the work it does is <b>path-independent</b>, and the work it does over <b>any closed loop is zero</b>.<br><br>A second idea that trips people up: <b>potential energy is always measured relative to a reference level you choose.</b> The PE of a book on a table is, say, 20 J relative to the floor — but 0 J relative to the table, and negative relative to the ceiling. None of these is “wrong.” Only differences in PE are physically meaningful, so you’re free to plant your zero wherever it’s convenient. (For gravity near Earth we usually pick the ground; for forces that fade with distance, we pick infinity.)<br><br>One more refinement on gravitational PE, because it quietly trips up even strong students. Potential energy is really a property of a <b>system</b>, not a lone object — gravitational PE belongs to the body–Earth pair, not to the body alone, because it arises from the interaction between them. We loosely say “the PE of the book,” but strictly it’s the PE of the book-and-Earth configuration. And there are two gravitational PE formulas for two different regimes: <i>U</i> = <i>mgh</i> is an approximation valid only <b>near the surface</b>, where <i>g</i> is effectively constant; for large distances (satellites, escape problems) you must use the general <i>U</i> = −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i>, which correctly accounts for gravity weakening with distance and is taken as zero at infinity. Reaching for <i>mgh</i> in an orbital problem is a classic error.',
      },
      {
        t: 'p',
        html: 'Finally, add the two together and you get the headline quantity of this whole chapter:<br>Mechanical Energy <i>E</i> = <i>K</i> + <i>U</i>.<br>A pendulum bob at the top of its swing is all <i>U</i>, no <i>K</i>; at the bottom it’s all <i>K</i>, no <i>U</i>; everywhere in between it’s a mix — but (with no friction) the total stays fixed. That conservation is the next sub-topic; here, just hold the picture of energy sloshing between the two buckets.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>1. <i>K</i> = ½<i>mv</i><sup>2</sup> is the translational kinetic energy of a point mass; spinning bodies carry extra rotational KE (a later chapter).<br>2. <b>PE is only definable for conservative forces</b> — never write a potential energy for friction or air drag.<br>3. PE values depend on the <b>chosen reference</b>; only Δ<i>U</i> is physical.<br>4. Kinetic energy, like work, is <b>frame-dependent</b> (it uses speed, which differs between observers).',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Kinetic energy',
        main: '<i>K</i> = ½<i>mv</i><sup>2</sup> = <i>p</i><sup>2</sup>/2<i>m</i>, <i>p</i> = √(2<i>mK</i>)',
        legend: [],
        note: 'where <i>p</i> = <i>mv</i> is the linear momentum. (<i>K</i> is always ≥ 0.)',
      },
      {
        t: 'formula',
        kicker: 'Potential energy — general definition',
        main: '(work done by a conservative force as a body moves stores up as −<i>U</i>):<br>Δ<i>U</i> = <i>U</i><sub><i>f</i></sub> − <i>U</i><sub><i>i</i></sub> = −∫<sub><i>i</i></sub><sup><i>f</i></sup> <i>F⃗</i> · d<i>r⃗</i> = −<i>W</i><sub>conservative</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'The force–potential-energy relationship',
        main: '(the inverse of the above, in 1-D):<br><i>F</i> = −d<i>U</i>/d<i>x</i>',
        legend: [],
        note: 'The force is the <b>negative slope</b> of the PE curve — it always points “downhill,” toward lower potential energy.',
      },
      {
        t: 'formula',
        kicker: 'Gravitational PE near Earth’s surface',
        main: '<i>U</i> = <i>mgh</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Gravitational PE (general, two masses)',
        main: '<i>U</i> = −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Elastic (spring) PE',
        main: '<i>U</i> = ½<i>kx</i><sup>2</sup>',
        legend: ['<i>k</i> = spring constant', '<i>x</i> = deformation from natural length'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Mechanical energy',
        main: '<i>E</i> = <i>K</i> + <i>U</i>',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: 'Quantity reference table',
        head: ['Quantity', 'Symbol', 'SI Unit', 'Dimensional Formula'],
        rows: [
          ['Kinetic / Potential energy', '<i>K</i>, <i>U</i>', 'joule (J)', '[M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>]'],
          ['Momentum', '<i>p</i>', 'kg·m·s<sup>−1</sup>', '[M<sup>1</sup> L<sup>1</sup> T<sup>−1</sup>]'],
          ['Spring constant', '<i>k</i>', 'N·m<sup>−1</sup>', '[M<sup>1</sup> L<sup>0</sup> T<sup>−2</sup>]'],
        ],
      },
      {
        t: 'p',
        html: '<b>Equilibrium conditions (from the PE curve):</b> equilibrium occurs where d<i>U</i>/d<i>x</i> = 0 (zero force). It is <b>stable</b> if d<sup>2</sup><i>U</i>/d<i>x</i><sup>2</sup> > 0 (a valley / minimum of <i>U</i>), <b>unstable</b> if d<sup>2</sup><i>U</i>/d<i>x</i><sup>2</sup> < 0 (a hilltop / maximum), and <b>neutral</b> if <i>U</i> is flat over a region (d<i>U</i>/d<i>x</i> = 0 on both sides).',
      },

      { t: 'part', title: 'Key derivations and procedures' },
      {
        t: 'p',
        html: '<b>(A) Deriving elastic potential energy of a spring</b><br><b>Setup:</b> A spring of constant <i>k</i> obeys Hooke’s law: to stretch it by an amount <i>x</i> from its natural length, you must apply a force <i>F</i> = <i>kx</i>. Because this force grows with <i>x</i>, we must integrate.<br><br><b>Step 1 — Work done in stretching from 0 to <i>x</i>:</b><br><i>W</i> = ∫<sub>0</sub><sup><i>x</i></sup> <i>F</i><sub>applied</sub> d<i>x</i>′ = ∫<sub>0</sub><sup><i>x</i></sup> <i>kx</i>′ d<i>x</i>′<br>Why integrate: the force isn’t constant — it starts at zero and rises linearly — so <i>FS</i> won’t do.<br><br><b>Step 2 — Integrate:</b><br><i>W</i> = <i>k</i>[<i>x</i>′<sup>2</sup>/2]<sub>0</sub><sup><i>x</i></sup> = ½<i>kx</i><sup>2</sup><br><br><b>Step 3 — This work is stored as elastic PE</b> (the spring is conservative, so it returns this energy on release):<br><i>U</i><sub>spring</sub> = ½<i>kx</i><sup>2</sup><br><br>Note the work to change the stretch from <i>x</i><sub>1</sub> to <i>x</i><sub>2</sub> is the difference: <i>W</i> = ½<i>k</i>(<i>x</i><sub>2</sub><sup>2</sup> − <i>x</i><sub>1</sub><sup>2</sup>) — <b>not</b> ½<i>k</i>(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>)<sup>2</sup>. This catches people constantly.',
      },
      {
        t: 'p',
        html: 'A <i>U</i>–<i>x</i> graph encodes the entire one-dimensional dynamics of a particle. Here’s how to extract it:',
      },
      {
        t: 'proc',
        title: '(B) Procedure — reading a potential energy curve',
        steps: [
          '<b>Force at any point</b> = negative slope: <i>F</i> = −d<i>U</i>/d<i>x</i>. Where the curve goes up to the right, the force points left, and vice versa. The steeper the slope, the stronger the force.',
          '<b>Equilibrium points</b> = where the curve is <b>flat</b> (d<i>U</i>/d<i>x</i> = 0). No slope means no force.',
          '<b>Classify the equilibrium</b> by the shape: a <b>valley</b> (minimum) is stable — nudge the particle and the slope pushes it back. A <b>hilltop</b> (maximum) is unstable — nudge it and the slope shoves it further away.',
          '<b>Turning points</b> = where the horizontal “total energy” line <i>E</i> meets the curve. There <i>K</i> = <i>E</i> − <i>U</i> = 0, so the particle momentarily stops and reverses. The particle can only exist in regions where <i>U</i> ≤ <i>E</i> (since <i>K</i> = <i>E</i> − <i>U</i> can never be negative).',
        ],
      },
      { t: 'fig', id: 'p11-05-fig-5.3' },
      {
        t: 'p',
        html: '<b>(C) Telling conservative and non-conservative forces apart</b><br>Since potential energy can only be defined for conservative forces, every problem secretly begins by sorting the forces into two bins. Here is the decision framework — a force is <b>conservative</b> if it passes all three of these equivalent tests (they always agree):<br>1. <b>Path independence:</b> the work it does in moving a body between two points depends only on the start and end positions, not the route taken. Gravity does the same work whether you climb a hill by the steep face or the gentle path.<br>2. <b>Zero work on a closed loop:</b> carry a body out and bring it back to the start, and the net work is exactly zero. The energy you spent going one way is handed back on the return.<br>3. <b>Fully recoverable:</b> the energy it stores can be retrieved completely, with none lost to heat.',
      },
      {
        t: 'p',
        html: 'Gravity, the spring (elastic) force, and the electrostatic force all pass. They are the forces for which we build potential energies.<br><br>A force is <b>non-conservative</b> if it fails these tests — and the giveaway is that it depends on the path or the velocity. Friction and air resistance are the standard examples: drag a box around a closed loop on a rough floor and you do more work the longer the path, and none of it comes back (it’s lost as heat). That irreversibility is precisely why you can never write “<i>U</i><sub>friction</sub>.”',
      },
      {
        t: 'p',
        html: '<b>Quick procedure to test a force law <i>F⃗</i>(<i>x</i>, <i>y</i>):</b> in one dimension, if you can find a function <i>U</i>(<i>x</i>) such that <i>F</i> = −d<i>U</i>/d<i>x</i>, the force is conservative. (In higher dimensions the formal test is ∇ × <i>F⃗</i> = 0 — the curl vanishes — but for JEE you’ll mostly recognise the standard conservative forces by name.) The practical takeaway: gravity and springs → use potential energy and energy methods; friction and drag → account for them as work that leaves the mechanical-energy budget.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A 5 kg stone is lifted and placed on a shelf 3 m above the floor. (a) Find its gravitational potential energy relative to the floor. (b) The stone later falls off and strikes the floor moving at 6 m/s. Find its kinetic energy at the instant of impact. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          '<b>Given:</b> <i>m</i> = 5 kg, <i>h</i> = 3 m, impact speed <i>v</i> = 6 m/s.',
          '<b>(a) Potential energy:</b><br><i>U</i> = <i>mgh</i> = (5)(10)(3) = 150 J',
          '<b>(b) Kinetic energy at impact:</b><br><i>K</i> = ½<i>mv</i><sup>2</sup> = ½(5)(6)<sup>2</sup> = ½(5)(36) = 90 J',
          '<b>Comment:</b> The stone arrives with 90 J of KE — less than the 150 J of PE it started with. For a stone falling only 3 m, air resistance is negligible, so energy conservation predicts <i>v</i> = √(2<i>gh</i>) = √60 ≈ 7.7 m/s and <i>K</i> = 150 J; a measured 6 m/s would mean 60 J had gone into work against some resistive force. A clean answer states the given values, the formula and the units.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The kinetic energy of a moving truck is increased to 9 times its original value. By what factor does its linear momentum increase? (a) 9 (b) 81 (c) 3 (d) √3',
        steps: [
          '<b>The trap:</b> Students see “9 times the energy” and reflexively answer “9 times the momentum.”',
          '<b>The fast reasoning:</b> Use the relation <i>K</i> = <i>p</i><sup>2</sup>/2<i>m</i>, so <i>p</i> = √(2<i>mK</i>) ∝ √<i>K</i> (mass unchanged). Therefore<br><i>p</i><sub>new</sub>/<i>p</i><sub>old</sub> = √(<i>K</i><sub>new</sub>/<i>K</i><sub>old</sub>) = √9 = 3.',
          'Speed tip: momentum scales with the <b>square root</b> of kinetic energy. Keep <i>K</i> ∝ <i>p</i><sup>2</sup> on a mental sticky note — it’s the single most-tested relation in this sub-topic for NEET.',
        ],
        ans: '(c) 3.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'The potential energy of a particle moving along the <i>x</i>-axis is <i>U</i>(<i>x</i>) = (<i>x</i><sup>2</sup> − 4<i>x</i> + 3) J, with <i>x</i> in metres. (a) Find the force on the particle at <i>x</i> = 3 m. (b) Locate the equilibrium position and state whether it is stable or unstable. (Combines: force–PE relation + equilibrium classification.)',
        steps: [
          '<b>Step 1 — Force from PE:</b><br><i>F</i> = −d<i>U</i>/d<i>x</i> = −(d/d<i>x</i>)(<i>x</i><sup>2</sup> − 4<i>x</i> + 3) = −(2<i>x</i> − 4) = (4 − 2<i>x</i>) N',
          '<b>(a) At <i>x</i> = 3 m:</b><br><i>F</i> = 4 − 2(3) = −2 N<br>The negative sign means the force points in the −<i>x</i> direction.',
          '<b>(b) Equilibrium</b> is where <i>F</i> = 0:<br>4 − 2<i>x</i> = 0 ⇒ <i>x</i> = 2 m<br>Classify using the second derivative:<br>d<sup>2</sup><i>U</i>/d<i>x</i><sup>2</sup> = 2 > 0 ⇒ minimum of <i>U</i> ⇒ <b>stable equilibrium.</b>',
        ],
        ans: '<i>F</i> = −2 N at <i>x</i> = 3; the particle has a <b>stable</b> equilibrium at <i>x</i> = 2 m.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A particle of mass <i>m</i> moves in one dimension under a conservative force whose potential energy is <i>U</i>(<i>x</i>) = (2<i>x</i><sup>3</sup> − 9<i>x</i><sup>2</sup> + 12<i>x</i>) J, with <i>x</i> in metres. Find all equilibrium positions and classify each as stable or unstable. Then state, with reasoning, between which two positions the particle would oscillate if given a tiny amount of kinetic energy at the stable point.',
        steps: [
          '<b>Step 1 — Find the force and set it to zero.</b><br><i>F</i> = −d<i>U</i>/d<i>x</i> = −(6<i>x</i><sup>2</sup> − 18<i>x</i> + 12) = −6(<i>x</i><sup>2</sup> − 3<i>x</i> + 2) = −6(<i>x</i> − 1)(<i>x</i> − 2)<br>Equilibrium (<i>F</i> = 0):<br><i>x</i> = 1 m and <i>x</i> = 2 m',
          '<b>Step 2 — Classify with the second derivative.</b><br>d<sup>2</sup><i>U</i>/d<i>x</i><sup>2</sup> = 12<i>x</i> − 18<br>• At <i>x</i> = 1: 12(1) − 18 = −6 < 0 ⇒ <i>U</i> maximum ⇒ <b>unstable.</b><br>• At <i>x</i> = 2: 12(2) − 18 = +6 > 0 ⇒ <i>U</i> minimum ⇒ <b>stable.</b>',
          '<b>Step 3 — Reasoning about the oscillation.</b> The particle sits in the valley at <i>x</i> = 2 m. Given a tiny KE, it rocks back and forth inside this valley. On one side, the wall of the valley rises immediately. On the other side (<i>x</i> < 2), the curve climbs only until the hilltop at <i>x</i> = 1 m — beyond which it would fall away. So for a small energy, the particle is <b>trapped oscillating in the well around <i>x</i> = 2 m</b>, never able to climb over the unstable peak at <i>x</i> = 1. The peak at <i>x</i> = 1 acts as the energy barrier; cross it and the particle escapes for good. Numerically, <i>U</i>(1) = 5 J and <i>U</i>(2) = 4 J, and <i>U</i> rises back to 5 J at <i>x</i> = 2.5 m (since 2<i>x</i><sup>3</sup> − 9<i>x</i><sup>2</sup> + 12<i>x</i> − 5 = (<i>x</i> − 1)<sup>2</sup>(2<i>x</i> − 5)). So for any kinetic energy less than 1 J given at <i>x</i> = 2 m, the particle oscillates between two turning points on either side of <i>x</i> = 2 m, always inside 1 m < <i>x</i> < 2.5 m; for a tiny kinetic energy the turning points lie just either side of <i>x</i> = 2 m.',
          '<b>Why this is JEE Advanced:</b> it demands fluency with <i>F</i> = −d<i>U</i>/d<i>x</i>, the sign of d<sup>2</sup><i>U</i>/d<i>x</i><sup>2</sup>, and the physical picture of trapping/escape — the conceptual core of everything from molecular bonds to planetary orbits.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A spring of force constant 200 N/m is compressed by 0.10 m. Calculate the elastic potential energy stored.',
            a: '1 J',
          },
          {
            q: '[NEET] Two bodies of masses <i>m</i> and 4<i>m</i> have equal kinetic energies. Find the ratio of the magnitudes of their linear momenta.',
            a: '1 : 2 (since <i>p</i> ∝ √<i>m</i> for equal <i>K</i>)',
          },
          {
            q: '[JEE Main] The potential energy of a particle is <i>U</i>(<i>x</i>) = (3<i>x</i><sup>2</sup> − 6<i>x</i> + 5) J. Find the position of stable equilibrium.',
            a: '<i>x</i> = 1 m',
          },
          {
            q: '[JEE Main] A spring of constant 50 N/m is stretched from an extension of 5 cm to 15 cm. Find the work done in this process.',
            a: '0.5 J (use ½<i>k</i>(<i>x</i><sub>2</sub><sup>2</sup> − <i>x</i><sub>1</sub><sup>2</sup>), not ½<i>k</i>(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>)<sup>2</sup>)',
          },
          {
            q: '[JEE Advanced] A particle moves in a potential <i>U</i>(<i>x</i>) = (<i>x</i><sup>4</sup> − 8<i>x</i><sup>2</sup>) J. Find all positions of <b>stable</b> equilibrium.',
            a: '<i>x</i> = +2 m and <i>x</i> = −2 m',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A light body and a heavy body have the <b>same momentum</b>. Which has greater kinetic energy?',
        opts: [
          {
            label: 'the heavier body',
            nudge: '(a) appeals to the gut feeling that “heavier = more energy,” but that’s true only at equal speed, not equal momentum.',
          },
          { label: 'the lighter body', nudge: null },
          { label: 'both equal', nudge: '(c) ignores the mass dependence entirely.' },
          {
            label: 'depends on their velocities',
            nudge: '(d) is the panic-hedge — but momentum is fixed, so the answer is fully determined.',
          },
        ],
        correct: 1,
        solution: 'Using <i>K</i> = <i>p</i><sup>2</sup>/2<i>m</i>, with <i>p</i> fixed, <i>K</i> ∝ 1/<i>m</i>. The smaller mass therefore has the larger kinetic energy. This is the canonical NEET separator.',
      },
      {
        t: 'mcq',
        q: 'Which statement about potential energy is correct?',
        opts: [
          { label: 'It is always positive', nudge: '(a) and (b) each over-generalise one common case.' },
          { label: 'It is always negative', nudge: '(a) and (b) each over-generalise one common case.' },
          { label: 'It can be positive, negative, or zero depending on the chosen reference', nudge: null },
          {
            label: 'It is always equal to the kinetic energy',
            nudge: '(d) confuses PE with KE — they are independent quantities that merely add to give <i>E</i>.',
          },
        ],
        correct: 2,
        solution: 'Only changes in PE are physical; the absolute value depends on where you set <i>U</i> = 0. Gravitational PE near Earth (<i>mgh</i>) is positive above the reference and negative below it; the general gravitational PE (−<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i>) is negative by convention.',
      },
      {
        t: 'mcq',
        q: 'The potential energy of a particle is <i>U</i>(<i>x</i>) = (5<i>x</i><sup>2</sup> − 10<i>x</i>) J. The equilibrium position is at:',
        opts: [
          {
            label: '<i>x</i> = 0',
            nudge: '(a) comes from setting <i>U</i> = 0 instead of d<i>U</i>/d<i>x</i> = 0 — confusing “zero energy” with “zero force.”',
          },
          { label: '<i>x</i> = 1 m', nudge: null },
          { label: '<i>x</i> = 2 m', nudge: '(c) is the other root of <i>U</i> = 0 (5<i>x</i><sup>2</sup> − 10<i>x</i> = 0 gives <i>x</i> = 0 or 2) — the same “zero energy” vs “zero force” confusion as (a).' },
          { label: '<i>x</i> = 0.5 m', nudge: '(d) is an arithmetic slip when solving 10<i>x</i> = 10.' },
        ],
        correct: 1,
        solution: '<i>F</i> = −d<i>U</i>/d<i>x</i> = −(10<i>x</i>−10) = 10−10<i>x</i>. Setting <i>F</i> = 0 gives <i>x</i> = 1 m. The lesson: equilibrium is about the slope of <i>U</i>, never its value.',
      },
      {
        t: 'mcq',
        q: 'If the compression of a spring is doubled, the elastic potential energy stored becomes:',
        opts: [
          { label: 'twice', nudge: '(a) is the most common error — linear thinking applied to a squared quantity.' },
          { label: 'four times', nudge: null },
          { label: 'half', nudge: '(c) and (d) reverse or ignore the dependence.' },
          { label: 'unchanged', nudge: '(c) and (d) reverse or ignore the dependence.' },
        ],
        correct: 1,
        solution: '<i>U</i> = ½<i>kx</i><sup>2</sup> ∝ <i>x</i><sup>2</sup>, so doubling <i>x</i> multiplies <i>U</i> by 2<sup>2</sup> = 4. Any time a quantity goes as a square, “doubling the input quadruples the output” should fire automatically.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Inventing potential energy for non-conservative forces.</b> There is no “friction PE” or “air-drag PE.” PE exists only for conservative forces (gravity, spring, electrostatic). If a force dissipates energy as heat, it has no potential energy — full stop.',
          '<b>Dropping the minus sign in <i>F</i> = −d<i>U</i>/d<i>x</i>.</b> The force points toward decreasing PE (downhill on the curve). Forgetting the negative sign flips the direction of every force and turns stable equilibria into unstable ones in your answer.',
          '<b>Confusing the <i>K</i>–<i>p</i> relation.</b> <i>K</i> ∝ <i>p</i><sup>2</sup>, not <i>K</i> ∝ <i>p</i>. Doubling the speed doubles the momentum but <b>quadruples</b> the kinetic energy. Mixing these up wrecks NEET MCQs.',
          '<b>Using ½<i>k</i>(Δ<i>x</i>)<sup>2</sup> for a change in stretch.</b> The work to go from <i>x</i><sub>1</sub> to <i>x</i><sub>2</sub> is ½<i>k</i>(<i>x</i><sub>2</sub><sup>2</sup> − <i>x</i><sub>1</sub><sup>2</sup>). Squaring the difference is wrong; take the difference of the squares.',
          '<b>Reaching for <i>mgh</i> when distances are large.</b> <i>U</i> = <i>mgh</i> assumes constant <i>g</i> and only works near Earth’s surface. For satellites, escape velocity, or any problem spanning large heights, you must switch to <i>U</i> = −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i>. Spotting which regime you’re in is half the battle.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> For any “<i>U</i>(<i>x</i>) given — find force / equilibrium / stability” problem, run the same three-line drill every time: (1) <i>F</i> = −<i>U</i>′(<i>x</i>), (2) set <i>F</i> = 0 for equilibrium positions, (3) check the sign of <i>U</i>″(<i>x</i>) — <b>positive means a valley means stable</b>. Memorise “valley = stable, hilltop = unstable.” This single drill answers the entire family of JEE Advanced PE-curve questions in under a minute.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Kinetic energy', note: '<i>K</i> = ½<i>mv</i><sup>2</sup> = <i>p</i><sup>2</sup>/2<i>m</i>, always ≥ 0, <i>p</i> = √(2<i>mK</i>)' },
          { f: 'Potential energy (conservative forces only)', note: 'Δ<i>U</i> = −<i>W</i><sub>cons</sub> = −∫ <i>F⃗</i> · d<i>r⃗</i>' },
          {
            f: 'Standard PEs',
            note: 'gravity (near Earth) <i>U</i> = <i>mgh</i> | spring <i>U</i> = ½<i>kx</i><sup>2</sup> | gravity (general) <i>U</i> = −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i>',
          },
          { f: 'Force–PE link', note: '<i>F</i> = −d<i>U</i>/d<i>x</i> (force = negative slope, points downhill)' },
          { f: 'Mechanical energy', note: '<i>E</i> = <i>K</i> + <i>U</i>' },
          {
            f: 'Equilibrium',
            note: 'd<i>U</i>/d<i>x</i> = 0; stable if <i>U</i>″ > 0 (min), unstable if <i>U</i>″ < 0 (max), neutral if <i>U</i> is flat over a region (d<i>U</i>/d<i>x</i> = 0 on both sides)',
          },
          { f: 'Dimensions of energy', note: '[M L<sup>2</sup> T<sup>−2</sup>], SI unit <b>joule</b>' },
        ],
        aids: ['“<i>K</i> goes as <i>p</i>-squared”', '“valley = stable, hilltop = unstable”', '“no conservative force, no potential energy.”'],
      },
    ],
  },
];
